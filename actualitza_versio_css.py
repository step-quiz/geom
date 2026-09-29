#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
actualitza_versio_css.py — posa el ?v= dels fulls d'estil a partir del seu
CONTINGUT, perquè ningú hagi de recordar-se d'incrementar-lo.

PER QUÈ EXISTEIX
GitHub Pages (i qualsevol CDN o navegador) cacheja cada full d'estil per la
seva URL exacta. Si el CSS canvia i la URL no, el navegador de l'alumne pot
seguir ensenyant l'estil vell. Fins al set. 2026 el remei era un ?v=N escrit a
mà, que s'havia d'incrementar a cada lliurament de CSS — i LESSONS.md §3
explica les tres vegades que no es va fer bé (sintaxi trencada, número no
incrementat, fulls sense número). Ara el número és una empremta (hash) del
contingut: si el CSS no canvia, el ?v= tampoc; si canvia un sol caràcter, el
?v= canvia sol.

QUÈ TOCA
  index.html               css/tokens.css, css/base.css, css/components.css
                           i css/fonts.css
  solucions/*.html         els mateixos (../css/...) i sol.css
  eina-frases.html         css/fonts.css

Els tres fulls del lloc porten TOTS TRES la mateixa empremta (la dels tres
junts): és la convenció que ja hi havia ("incrementa'ls tots tres alhora"),
ara feta de manera automàtica. sol.css porta la seva pròpia.

ÚS
    python3 actualitza_versio_css.py            # reescriu els ?v= que calgui
    python3 actualitza_versio_css.py --comprova # no toca res; surt amb 1 si
                                                # algun ?v= no és el que toca

La GitHub Action d'uploads l'executa sola (via regenera.py) a cada ZIP i a
cada canvi de CSS a main. verifica_projecte.py fa servir comprova().
"""
import hashlib
import os
import re
import sys

BASE = os.path.dirname(os.path.abspath(__file__))
FULLS_LLOC = ["css/tokens.css", "css/base.css", "css/components.css"]
FULL_SOL = "solucions/sol.css"
FULL_FONTS = "css/fonts.css"

# ?v= seguit de lletres/xifres: accepta tant els números vells (?v=7) com
# les empremtes noves (?v=3fa2c19b).
RE_LLOC = re.compile(r'((?:\.\./)?css/(?:tokens|base|components)\.css)\?v=[0-9A-Za-z]+')
RE_SOL = re.compile(r'(sol\.css)\?v=[0-9A-Za-z]+')
RE_FONTS = re.compile(r'((?:\.\./)?css/fonts\.css)\?v=[0-9A-Za-z]+')


def empremta(rutes):
    h = hashlib.sha1()
    for r in rutes:
        with open(os.path.join(BASE, r), "rb") as f:
            h.update(f.read())
    return h.hexdigest()[:8]


def fitxers_html():
    yield "index.html"
    yield "eina-frases.html"
    dirsol = os.path.join(BASE, "solucions")
    for n in sorted(os.listdir(dirsol)):
        if n.endswith(".html"):
            yield "solucions/" + n


def calcula():
    """Retorna {fitxer: (text_actual, text_correcte)} per a cada HTML."""
    v_lloc, v_sol = empremta(FULLS_LLOC), empremta([FULL_SOL])
    v_fonts = empremta([FULL_FONTS])
    res = {}
    for rel in fitxers_html():
        cami = os.path.join(BASE, rel)
        with open(cami, encoding="utf-8") as f:
            txt = f.read()
        nou = RE_LLOC.sub(lambda m: m.group(1) + "?v=" + v_lloc, txt)
        nou = RE_SOL.sub(lambda m: m.group(1) + "?v=" + v_sol, nou)
        nou = RE_FONTS.sub(lambda m: m.group(1) + "?v=" + v_fonts, nou)
        res[rel] = (txt, nou)
    return res, v_lloc, v_sol, v_fonts


def comprova():
    """Llista dels HTML amb algun ?v= que no correspon al contingut actual."""
    res, _, _, _ = calcula()
    return [rel for rel, (vell, nou) in res.items() if vell != nou]


def main():
    res, v_lloc, v_sol, v_fonts = calcula()
    canviats = [rel for rel, (vell, nou) in res.items() if vell != nou]
    if "--comprova" in sys.argv:
        if canviats:
            print("✗ ?v= desfasat a %d fitxers (p. ex. %s). Executa "
                  "python3 actualitza_versio_css.py" % (len(canviats), canviats[0]))
            sys.exit(1)
        print("✓ tots els ?v= corresponen al contingut dels CSS")
        return
    for rel in canviats:
        with open(os.path.join(BASE, rel), "w", encoding="utf-8") as f:
            f.write(res[rel][1])
    print("✓ ?v=%s (tokens/base/components), ?v=%s (sol.css), ?v=%s (fonts.css) — %d fitxers actualitzats"
          % (v_lloc, v_sol, v_fonts, len(canviats)))


if __name__ == "__main__":
    main()
