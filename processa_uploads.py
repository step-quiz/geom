#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
processa_uploads.py — descomprimeix els ZIP de _uploads/ sobre el repositori,
i aplica les esborrades que demanin.

QUI L'EXECUTA
La GitHub Action .github/workflows/unzip-upload.yml, cada cop que es puja un
.zip a _uploads/. Després hi passen regenera.py, verifica_projecte.py i el
test del navegador (tests/smoke.js). També es pot executar a mà per provar un
ZIP abans de pujar-lo:

    python3 processa_uploads.py              # processa _uploads/*.zip
    python3 processa_uploads.py --informe informe.txt  # a més, escriu un informe

QUÈ FA AMB CADA ZIP (per ordre alfabètic de nom)
1. Descomprimeix el contingut sobre l'arrel del repositori, sobreescrivint.
2. Si el ZIP porta, a l'arrel, un fitxer _ESBORRA.txt, esborra del
   repositori els fitxers o carpetes que hi surtin (un per línia; les línies
   buides i les que comencen per # s'ignoren). Això resol el problema de
   LESSONS.md §4: "un ZIP diff mai pot esborrar un fitxer". Ara sí que pot.
   Exemple de _ESBORRA.txt:

       # figures velles que la nova versió substitueix
       assets/img/demo/demo-01.png
       docs/guies/figures-velles.html

   _ESBORRA.txt mateix no es desa al repositori.
3. Esborra el .zip de _uploads/.

PROTECCIONS
- Cap entrada del ZIP (ni cap línia de _ESBORRA.txt) pot sortir del
  repositori: es rebutgen rutes absolutes i rutes amb "..".
- No es toca mai .git/ ni .github/. La segona no és per prudència sinó per
  força: GitHub no deixa que una Action modifiqui els seus propis fitxers de
  workflow amb el testimoni per defecte, i el push fallaria sencer. Si un ZIP
  en porta, s'ignoren i l'informe ho diu.
- Si TOTES les entrades del ZIP són dins d'una sola carpeta que no és del
  projecte (el cas típic: s'ha comprimit la carpeta "geom-main" sencera en
  lloc del seu contingut), es treu aquella carpeta del davant i l'informe ho
  diu. Sense això, el contingut acabaria a geom-main/geom-main/...
"""
import os
import sys
import zipfile

BASE = os.path.dirname(os.path.abspath(__file__))
DIR_UPLOADS = os.path.join(BASE, "_uploads")
NOM_ESBORRA = "_ESBORRA.txt"
PROTEGITS = (".git", ".github")


def ruta_segura(rel):
    """Normalitza una ruta relativa del repositori, o retorna None si és
    perillosa (absoluta, amb .., buida o dins d'una carpeta protegida)."""
    rel = rel.replace("\\", "/").strip()
    if not rel or rel.startswith("/") or (len(rel) > 1 and rel[1] == ":"):
        return None
    parts = [p for p in rel.split("/") if p not in ("", ".")]
    if not parts or ".." in parts:
        return None
    return "/".join(parts)


def es_protegit(rel):
    return rel.split("/")[0] in PROTEGITS


def prefix_comu(noms):
    """Si totes les entrades comencen per la mateixa carpeta X/ i X no és una
    carpeta del projecte, retorna "X/"; altrament, ""."""
    primers = {n.split("/")[0] for n in noms if n}
    if len(primers) != 1:
        return ""
    unic = primers.pop()
    if not all("/" in n for n in noms if n):
        return ""
    if os.path.isdir(os.path.join(BASE, unic)) or unic in PROTEGITS:
        return ""
    return unic + "/"


def esborra(rel, informe):
    import shutil
    cami = os.path.join(BASE, rel)
    if os.path.isdir(cami):
        shutil.rmtree(cami)
        informe.append("  - esborrada la carpeta `%s`" % rel)
    elif os.path.exists(cami):
        os.remove(cami)
        informe.append("  - esborrat `%s`" % rel)
    else:
        informe.append("  - ⚠️ `%s` no existia (res a esborrar)" % rel)


def processa_zip(cami_zip, informe):
    nom = os.path.basename(cami_zip)
    informe.append("**%s**" % nom)
    escrits, ignorats = 0, []
    with zipfile.ZipFile(cami_zip) as z:
        entrades = [i for i in z.infolist() if not i.filename.startswith("__MACOSX/")]
        pref = prefix_comu([i.filename for i in entrades])
        if pref:
            informe.append("  - ⚠️ tot el ZIP era dins de la carpeta `%s`: s'ha tret "
                           "del davant (la propera vegada, comprimeix el CONTINGUT "
                           "de la carpeta, no la carpeta)" % pref.rstrip("/"))
        llista_esborra = None
        for info in entrades:
            nomrel = info.filename[len(pref):] if pref else info.filename
            if info.is_dir() or nomrel.endswith("/"):
                continue
            rel = ruta_segura(nomrel)
            if rel is None:
                ignorats.append(info.filename + " (ruta no vàlida)")
                continue
            if es_protegit(rel):
                ignorats.append(rel + " (carpeta protegida)")
                continue
            if rel == NOM_ESBORRA:
                llista_esborra = z.read(info).decode("utf-8-sig")
                continue
            desti = os.path.join(BASE, rel)
            os.makedirs(os.path.dirname(desti), exist_ok=True)
            with open(desti, "wb") as f:
                f.write(z.read(info))
            escrits += 1
    informe.append("  - %d fitxers descomprimits" % escrits)
    for x in ignorats:
        informe.append("  - ⚠️ ignorat: `%s`" % x)
    if llista_esborra is not None:
        informe.append("  - `%s` demana esborrar:" % NOM_ESBORRA)
        for linia in llista_esborra.splitlines():
            linia = linia.strip()
            if not linia or linia.startswith("#"):
                continue
            rel = ruta_segura(linia)
            if rel is None or es_protegit(rel):
                informe.append("  - ⚠️ no s'esborra `%s` (ruta no permesa)" % linia)
                continue
            esborra(rel, informe)
    os.remove(cami_zip)
    return nom


def main():
    informe = []
    zips = sorted(n for n in os.listdir(DIR_UPLOADS) if n.lower().endswith(".zip")) \
        if os.path.isdir(DIR_UPLOADS) else []
    fets, dolents = [], []
    for n in zips:
        try:
            fets.append(processa_zip(os.path.join(DIR_UPLOADS, n), informe))
        except zipfile.BadZipFile:
            # S'esborra igualment (si no, cada execució el tornaria a trobar),
            # però l'Action falla perquè es vegi: cal tornar-lo a pujar bé.
            informe.append("  - ❌ no és un ZIP vàlid: no s'ha descomprimit res. "
                           "S'ha tret de _uploads/; torna'l a generar i pujar.")
            os.remove(os.path.join(DIR_UPLOADS, n))
            dolents.append(n)
    if not zips:
        informe.append("Cap ZIP a `_uploads/`.")
    text = "\n".join(informe)
    print(text)
    if "--informe" in sys.argv:
        with open(sys.argv[sys.argv.index("--informe") + 1], "w", encoding="utf-8") as f:
            f.write(text + "\n")
    # Perquè la GitHub Action sàpiga quins ZIP s'han processat.
    if os.environ.get("GITHUB_OUTPUT"):
        with open(os.environ["GITHUB_OUTPUT"], "a", encoding="utf-8") as f:
            f.write("zips=%s\n" % " ".join(fets))
            f.write("zips_dolents=%s\n" % " ".join(dolents))


if __name__ == "__main__":
    main()
