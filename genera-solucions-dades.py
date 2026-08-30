#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
genera-solucions-dades.py — aplana solucions/qNN.html a js/data/solucions-dades.js

PER QUÈ EXISTEIX
eina-frases.html ensenya, al costat de la guia de cada pregunta, la solució
publicada, perquè es puguin comparar d'una llegida. El projecte ja ho havia
après per les males: docs/revisio-matematica/extreu-per-revisar.py ho diu
explícitament — repassar la guia i la solució per separat és com se't cola que
es contradiguin, i és el que va passar a q05/q07, q33, q37, q57, q60, q69 i q83.

PER QUÈ UN .js I NO LLEGIR L'HTML DIRECTAMENT
Pel mateix motiu que la resta de js/data/*.js: el lloc (i aquesta eina) s'han
d'obrir amb doble clic sobre file://, on fetch() d'un altre fitxer queda
bloquejat per CORS. Un <iframe> tampoc no és fiable entre navegadors sota
file://. Així que el text es congela en una variable global, com tot.

QUAN CAL TORNAR-LO A EXECUTAR
Cada cop que es toqui qualsevol fitxer de solucions/. No és automàtic: aquest
fitxer generat és una CÒPIA. Si no el regeneres, l'eina ensenyarà la versió
vella de la solució, cosa que no fa cap mal a solucions/ però et pot fer
buscar una contradicció que ja no hi és.

ÚS
    python3 genera-solucions-dades.py            # escriu js/data/solucions-dades.js
    python3 genera-solucions-dades.py --stdout   # el treu per pantalla i no toca res

Executa'l des de l'arrel del repositori.
"""
import html
import json
import os
import re
import sys

BASE = os.path.dirname(os.path.abspath(__file__))
DIR_SOL = os.path.join(BASE, "solucions")
SORTIDA = os.path.join(BASE, "js", "data", "solucions-dades.js")

CAPCALERA = '''/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/data/solucions-dades.js
  ROL:          Text pla de les solucions de solucions/qNN.html, perquè
                eina-frases.html pugui ensenyar la solució al costat de la
                guia sense obrir cap altre fitxer. Variable GLOBAL
                window.SOLUCIONS, no un .json amb fetch(): mateix motiu que
                preguntes-dades.js i guies-dades.js — el lloc s'ha de poder
                obrir per doble clic sobre file://, on fetch() queda
                bloquejat per CORS.

  GENERAT AUTOMÀTICAMENT — NO L'EDITIS A MÀ.
  La font són els fitxers de solucions/. Per refer-lo:

      python3 genera-solucions-dades.py

  QUI EL LLEGEIX
  Només eina-frases.html, i de manera OPCIONAL: si aquest fitxer no hi és,
  l'eina funciona igual i només s'hi perd el bloc "Solució publicada".
  index.html i js/ui/*.js no el carreguen ni el necessiten.

  QUÈ N'HI HA I QUÈ NO
  Només el text llegible: títol de cada pas, paràgrafs, peus de figura i el
  resum final. Res de marques HTML, perquè l'eina ho pinta tot amb
  textContent. Els <em>/<strong> del text original s'hi perden a posta: aquí
  serveixen per COMPARAR amb la guia, no per rellegir la solució maquetada.
*/
'''


def neteja(s):
    """Treu marques HTML d'un fragment i normalitza els espais."""
    s = re.sub(r"<br\s*/?>", " ", s)
    s = re.sub(r"<[^>]+>", "", s)
    s = html.unescape(s)
    s = s.replace("\u00a0", " ")
    return re.sub(r"\s+", " ", s).strip()


def normalitza_src(src):
    """../assets/img/x.png (relatiu a solucions/) -> assets/img/x.png (arrel)."""
    src = src.split("?")[0].strip()
    while src.startswith("../"):
        src = src[3:]
    return src


def figures_de(fragment):
    """Extreu (src, peu) de cada <figure> del fragment."""
    out = []
    for fig in re.findall(r"<figure\b.*?</figure>", fragment, re.S):
        m_src = re.search(r'<img[^>]*\bsrc="([^"]+)"', fig)
        m_peu = re.search(r"<figcaption\b[^>]*>(.*?)</figcaption>", fig, re.S)
        out.append({
            "src": normalitza_src(m_src.group(1)) if m_src else "",
            "peu": neteja(m_peu.group(1)) if m_peu else "",
        })
    return [f for f in out if f["src"] or f["peu"]]


def llegeix(qid, ruta):
    src = open(ruta, encoding="utf-8").read()

    m = re.search(r'<h1 class="sol-header__title">(.*?)</h1>', src, re.S)
    titol = neteja(m.group(1)) if m else qid

    m = re.search(r'<section class="solucio">(.*?)</section>', src, re.S)
    if not m:
        return None, "no hi ha <section class=\"solucio\">"
    cos = m.group(1)

    passos = []
    for pas in re.findall(r'<div class="solucio__pas">(.*?)(?=<div class="solucio__pas">|$)',
                          cos, re.S):
        mt = re.search(r'<p class="solucio__pas-titol">(.*?)</p>', pas, re.S)
        textos = [neteja(t) for t in
                  re.findall(r'<p class="solucio__text">(.*?)</p>', pas, re.S)]
        textos = [t for t in textos if t]
        figures = figures_de(pas)
        if not (textos or figures):
            continue
        passos.append({
            "titol": neteja(mt.group(1)) if mt else "",
            "textos": textos,
            "figures": figures,
        })

    m = re.search(r'<p class="solucio__resultat-text">(.*?)</p>', cos, re.S)
    resum = neteja(m.group(1)) if m else ""

    if not passos and not resum:
        return None, "no s'hi ha trobat cap pas ni resum (ha canviat el marcatge?)"

    return {"titol": titol, "passos": passos, "resum": resum}, None


def main():
    if not os.path.isdir(DIR_SOL):
        sys.exit("No trobo la carpeta solucions/. Executa'l des de l'arrel del repositori.")

    fitxers = sorted(f for f in os.listdir(DIR_SOL) if f.endswith(".html"))
    dades, problemes = {}, []
    for f in fitxers:
        qid = f[:-5]
        sol, err = llegeix(qid, os.path.join(DIR_SOL, f))
        if err:
            problemes.append("%s: %s" % (f, err))
        else:
            dades[qid] = sol

    cos = CAPCALERA + "window.SOLUCIONS = " + \
        json.dumps(dades, ensure_ascii=False, indent=2, sort_keys=True) + ";\n"

    if "--stdout" in sys.argv:
        sys.stdout.write(cos)
    else:
        os.makedirs(os.path.dirname(SORTIDA), exist_ok=True)
        open(SORTIDA, "w", encoding="utf-8").write(cos)
        print("Escrit js/data/solucions-dades.js — %d solucions, %d passos, %.0f KB"
              % (len(dades),
                 sum(len(s["passos"]) for s in dades.values()),
                 len(cos.encode("utf-8")) / 1024))

    sense_resum = sorted(k for k, v in dades.items() if not v["resum"])
    if sense_resum:
        print("Avís: %d solucions sense «En resum»: %s"
              % (len(sense_resum), " ".join(sense_resum)))
    if problemes:
        print("Avís: %d fitxer(s) no s'han pogut llegir:" % len(problemes))
        for p in problemes:
            print("   ·", p)


if __name__ == "__main__":
    main()
