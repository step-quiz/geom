#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
amagats.py — l'ÚNICA lectura de EXERCICIS_AMAGATS des de Python.

La llista de preguntes amagades viu a js/ui/llista.js i només allà (decisió de
l'owner: "mai a preguntes-dades.js ni a cap altra font de dades"). Els scripts
Python que la necessiten (build_analitzador_geom.py, verifica_projecte.py) la
llegien fins al set. 2026 cadascun amb la seva pròpia expressió regular, i si
una canviava i l'altra no, podien discrepar en silenci. Ara la llegeixen tots
d'aquí, i a més tests/smoke.js comprova en un navegador real que la llista que
porta l'analitzador és exactament la que fa servir el lloc.

Si la constant canvia de nom o de forma, llegeix() ho diu amb un missatge clar
en lloc de retornar una llista buida.
"""
import os
import re

BASE = os.path.dirname(os.path.abspath(__file__))
FITXER = os.path.join(BASE, "js", "ui", "llista.js")
_RE = re.compile(r"const\s+EXERCICIS_AMAGATS\s*=\s*\[(.*?)\];", re.S)


class ErrorAmagats(Exception):
    pass


def llegeix(codi=None):
    """Llista d'ids d'EXERCICIS_AMAGATS, en l'ordre del fitxer."""
    if codi is None:
        if not os.path.exists(FITXER):
            raise ErrorAmagats("no existeix js/ui/llista.js")
        with open(FITXER, encoding="utf-8") as f:
            codi = f.read()
    m = _RE.search(codi)
    if not m:
        raise ErrorAmagats("no s'ha trobat `const EXERCICIS_AMAGATS = [...];` a "
                           "js/ui/llista.js: ha canviat de nom o de forma")
    # Es treuen els comentaris de dins de l'array abans de buscar-hi ids.
    cos = re.sub(r"//[^\n]*|/\*.*?\*/", "", m.group(1), flags=re.S)
    ids = re.findall(r'"([^"]+)"', cos)
    if not ids:
        raise ErrorAmagats("EXERCICIS_AMAGATS s'ha trobat però és buit")
    return ids


if __name__ == "__main__":
    print(" ".join(llegeix()))
