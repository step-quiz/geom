#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
regenera.py — refà TOTS els fitxers generats del projecte, en l'ordre bo.

PER QUÈ EXISTEIX
El projecte té quatre fitxers que no s'editen a mà sinó que es fabriquen a
partir d'altres, i cadascun té el seu script:

    js/data/guies-dades.js      ← parse_guies.py            (docs/guies/GUIES-LOT-N.md)
    js/data/solucions-dades.js  ← genera-solucions-dades.py (solucions/*.html)
    analitzador-geom.html       ← build_analitzador_geom.py (preguntes + amagades + imatges)
    ?v= dels fulls d'estil      ← actualitza_versio_css.py  (contingut dels CSS)

Recordar quin tocava després de cada canvi era una font d'errors. Aquest
script els executa tots quatre. Tots són idempotents: si la font no ha
canviat, el fitxer generat surt byte a byte igual, i git no hi veu cap canvi.

La GitHub Action d'uploads (.github/workflows/unzip-upload.yml) l'executa
sola després de descomprimir cada ZIP. A mà:

    python3 regenera.py
    python3 verifica_projecte.py
"""
import os
import subprocess
import sys

BASE = os.path.dirname(os.path.abspath(__file__))
PASSOS = [
    ["parse_guies.py"],
    ["genera-solucions-dades.py"],
    ["build_analitzador_geom.py"],
    ["actualitza_versio_css.py"],
]


def main():
    fallats = []
    for passos in PASSOS:
        r = subprocess.run([sys.executable] + passos, cwd=BASE,
                           capture_output=True, text=True)
        sortida = (r.stdout + r.stderr).strip().splitlines()
        darrera = sortida[-1] if sortida else ""
        if r.returncode == 0:
            print("✓ %-28s %s" % (passos[0], darrera))
        else:
            print("✗ %-28s ha fallat:" % passos[0])
            print("\n".join("    " + l for l in sortida[-15:]))
            fallats.append(passos[0])
    if fallats:
        sys.exit(1)


if __name__ == "__main__":
    main()
