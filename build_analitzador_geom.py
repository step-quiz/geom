#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""build_analitzador_geom.py — munta `analitzador-geom.html`, un fitxer
únic que el professorat pot desar i obrir sense servidor ni connexió.

Hi injecta window.PREGUNTES (js/data/preguntes-dades.js), la mateixa
llista EXERCICIS_AMAGATS que fa servir js/ui/llista.js, i les imatges
d'enunciat en base64, en JS pla —
res es recalcula: aquí no hi ha cap generador com els c_<tema>.py de
repas (les preguntes de geom-main ja són contingut fix, no calculat),
així que el "build" és només llegir dos fitxers i enganxar-los a la
plantilla. Si mai EXERCICIS_AMAGATS es mou de lloc dins de llista.js,
cal actualitzar l'expressió regular d'aquest script.

Les imatges hi van INCRUSTADES, no enllaçades. Sense això, "fitxer únic"
era mentida: n'hi havia prou amb desar l'analitzador a l'escriptori
perquè totes les figures donessin 404, i una pregunta de geometria
sintètica sense la seva figura no es pot ni llegir. El fitxer passa
d'uns 120 kB a uns 5 MB, cosa irrellevant per a un fitxer local que no
viatja per cap xarxa, i a canvi el professorat el pot desar on vulgui.

Només s'incrusten les imatges de les preguntes que poden sortir en una
prova (les visibles): les d'EXERCICIS_AMAGATS mai s'imprimeixen, i no
té sentit fer-hi pesar el fitxer.

Execució: python3 build_analitzador_geom.py (des de l'arrel del
projecte — al costat d'index.html).
"""

import base64
import json
import os
import re
import sys

AQUI = os.path.dirname(os.path.abspath(__file__))


def extreu_amagats(codi_llista_js):
    """EXERCICIS_AMAGATS és un array JS multilínia dins de llista.js, no
    JSON solt (v. capçalera de la constant): calen cometes dobles al
    voltant de cada id per poder-lo parsejar amb json.loads un cop
    aïllat el tros entre claudàtors."""
    m = re.search(r"const\s+EXERCICIS_AMAGATS\s*=\s*\[(.*?)\]", codi_llista_js, re.S)
    if not m:
        sys.exit("✗ no s'ha trobat EXERCICIS_AMAGATS a js/ui/llista.js "
                  "— ha canviat de nom o de forma; actualitza aquest script.")
    ids = re.findall(r'"([^"]+)"', m.group(1))
    if not ids:
        sys.exit("✗ EXERCICIS_AMAGATS s'ha trobat però és buit — comprova "
                  "manualment js/ui/llista.js abans de continuar.")
    return ids


def fitxers_imatge(codi_preguntes_js, amagats):
    """Noms de fitxer de les imatges de les preguntes VISIBLES.

    Es llegeixen del mateix preguntes-dades.js que s'injecta, amb una
    regex sobre el bloc de cada pregunta: el fitxer és JS (assigna a
    window.PREGUNTES), no JSON, així que no es pot fer json.loads sense
    retallar-lo, i retallar-lo a cegues seria més fràgil que això.
    Cada imatge pot venir com "fitxer" (singular) o "fitxers" (array),
    igual que a js/nucli/contingut.js.
    """
    blocs = re.split(r'\n\s*\{\s*\n\s*"id"\s*:', codi_preguntes_js)
    noms = []
    for bloc in blocs[1:]:
        m_id = re.match(r'\s*"([^"]+)"', bloc)
        if not m_id or m_id.group(1) in amagats:
            continue
        m_img = re.search(r'"imatge"\s*:\s*\{(.*?)\n\s*\}', bloc, re.S)
        if not m_img:
            continue
        noms.extend(re.findall(r'"([^"]+\.png)"', m_img.group(1)))
    # dedup conservant l'ordre, per a un build determinista
    vistos, out = set(), []
    for n in noms:
        if n not in vistos:
            vistos.add(n)
            out.append(n)
    return out


def taula_imatges(noms, dir_img):
    """{nom de fitxer: data URI}. Un fitxer que falta NO atura el build:
    l'analitzador cau a assets/img/ per a aquell nom (v. fontImatge a la
    plantilla), que és el comportament d'abans i segueix funcionant si el
    fitxer és al costat del projecte. Sí que s'avisa, però, perquè una
    imatge que falta és una pregunta que sortirà coixa a la prova."""
    taula, absents = {}, []
    for n in noms:
        ruta = os.path.join(dir_img, n)
        if not os.path.exists(ruta):
            absents.append(n)
            continue
        with open(ruta, "rb") as f:
            taula[n] = "data:image/png;base64," + base64.b64encode(f.read()).decode("ascii")
    return taula, absents


def main():
    ruta_preguntes = os.path.join(AQUI, "js", "data", "preguntes-dades.js")
    ruta_llista = os.path.join(AQUI, "js", "ui", "llista.js")
    ruta_plantilla = os.path.join(AQUI, "analitzador-geom-plantilla.html")

    for ruta in (ruta_preguntes, ruta_llista, ruta_plantilla):
        if not os.path.exists(ruta):
            sys.exit("✗ falta %s" % ruta)

    preguntes_js = open(ruta_preguntes, encoding="utf-8").read()
    llista_js = open(ruta_llista, encoding="utf-8").read()
    plantilla = open(ruta_plantilla, encoding="utf-8").read()

    amagats = extreu_amagats(llista_js)
    amagats_js = "window.EXERCICIS_AMAGATS = " + \
        "[" + ", ".join('"%s"' % i for i in amagats) + "];"

    noms = fitxers_imatge(preguntes_js, set(amagats))
    imatges, absents = taula_imatges(noms, os.path.join(AQUI, "assets", "img"))
    if absents:
        print("⚠ %d imatge(s) no trobades a assets/img/ — les preguntes "
              "corresponents nomes tindran figura si l'analitzador es queda "
              "dins la carpeta del projecte:" % len(absents))
        for n in absents[:10]:
            print("   ·", n)
    imatges_js = "window.IMATGES = " + json.dumps(imatges, separators=(",", ":")) + ";"

    for forat in ("/*__PREGUNTES__*/", "/*__AMAGATS__*/", "/*__IMATGES__*/"):
        assert plantilla.count(forat) == 1, \
            "la plantilla ha de tenir exactament un forat %s" % forat

    html = plantilla.replace("/*__PREGUNTES__*/", preguntes_js) \
                     .replace("/*__AMAGATS__*/", amagats_js) \
                     .replace("/*__IMATGES__*/", imatges_js)

    ruta_sortida = os.path.join(AQUI, "analitzador-geom.html")
    # Plantilla i sortida són fitxers DIFERENTS (mateix patró que repas:
    # analitzador-plantilla.html -> analitzador-repas.html), no el
    # mateix fitxer reescrit sobre si mateix: així el script es pot
    # córrer tantes vegades com calgui (p. ex. cada cop que es publica
    # una pregunta nova) sense que el marcador /*__PREGUNTES__*/ hagi
    # desaparegut ja de l'origen que es llegeix.
    with open(ruta_sortida, "w", encoding="utf-8") as f:
        f.write(html)
    print("✓ %s (%d preguntes, %d amagades, %d imatges incrustades, %.1f MB)" % (
        ruta_sortida, preguntes_js.count('"id": "q'), len(amagats),
        len(imatges), os.path.getsize(ruta_sortida) / 1048576))


if __name__ == "__main__":
    main()
