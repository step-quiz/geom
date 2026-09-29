#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
optimitza_png.py — comprimeix els PNG de assets/img/ SENSE CAP PÈRDUA.

PER QUÈ
Les figures són el gruix del pes del lloc, i un mòbil amb poques dades les
nota. La primera passada (set. 2026) va deixar assets/img/ un 28 % més lleuger
(9,95 → 7,17 MB) i analitzador-geom.html, que les porta incrustades, de 5,1 a
3,6 MB. Aquest script fa que les figures noves que arribin també s'hi afegeixin.

GARANTIA
Un fitxer només se substitueix si (1) el resultat és més petit i (2) un cop
descomprimits, tots dos tenen EXACTAMENT els mateixos píxels (RGBA, un per un).
Si no, es deixa com estava. Cap PNG del projecte no porta metadades de color
(gamma, perfil ICC), així que els mateixos píxels volen dir la mateixa imatge
en pantalla i en paper.

ÚS
    pip install pyoxipng pillow numpy       # un sol cop
    python3 optimitza_png.py                 # tot assets/img/
    python3 optimitza_png.py fitxer.png ...  # només aquests

La GitHub Action d'uploads l'executa sola després de descomprimir cada ZIP.
"""
import glob
import io
import os
import sys

BASE = os.path.dirname(os.path.abspath(__file__))


def main():
    try:
        import numpy as np
        import oxipng
        from PIL import Image
    except ImportError:
        print("· optimitza_png.py: falten paquets (pip install pyoxipng pillow numpy); no es toca res")
        return
    fitxers = sys.argv[1:] or sorted(glob.glob(os.path.join(BASE, "assets", "img", "**", "*.png"),
                                               recursive=True))
    # Un fitxer que ja no existeix (p. ex. esborrat per un _ESBORRA.txt) no és
    # cap error: simplement no hi ha res a optimitzar.
    fitxers = [f for f in fitxers if os.path.isfile(f)]
    abans = despres = canviats = 0
    for f in fitxers:
        with open(f, "rb") as fh:
            orig = fh.read()
        try:
            nou = oxipng.optimize_from_memory(orig, level=3)
        except Exception as e:  # un PNG que oxipng no entén es deixa tal qual
            print("· %s: no s'ha pogut optimitzar (%s)" % (os.path.relpath(f, BASE), e))
            abans += len(orig); despres += len(orig)
            continue
        abans += len(orig)
        if len(nou) < len(orig):
            a = np.asarray(Image.open(io.BytesIO(orig)).convert("RGBA"))
            b = np.asarray(Image.open(io.BytesIO(nou)).convert("RGBA"))
            if a.shape == b.shape and (a == b).all():
                with open(f, "wb") as fh:
                    fh.write(nou)
                despres += len(nou); canviats += 1
                continue
            print("· %s: el resultat NO era idèntic; es deixa com estava"
                  % os.path.relpath(f, BASE))
        despres += len(orig)
    print("✓ %d PNG revisats, %d optimitzats: %.2f → %.2f MB"
          % (len(fitxers), canviats, abans / 1e6, despres / 1e6))


if __name__ == "__main__":
    main()
