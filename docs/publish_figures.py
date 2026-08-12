#!/usr/bin/env python3
"""
publish_figures.py — pas de publicacio de figures (v. HANDOFF §5.3).

Fa les DUES transformacions que calen abans que una figura de treball es
converteixi en la PNG publicada:

1. Esborra el numero de produccio -- per DIFERENCIA, no per color ni per
   regio. Es renderitza la mateixa figura dues vegades (amb stampNum normal
   i amb stampNum buit) des del MATEIX seed -- tota la geometria surt
   pixel-identica en tots dos renders (stampNum no crida rand(), i es
   l'ultima crida de cada IIFE, aixi que no pot desplacar el flux
   pseudoaleatori). Qualsevol pixel que difereixi entre els dos renders es,
   per construccio, EXACTAMENT el numero de produccio (nucli + antialiasing),
   mai geometria real -- ni falsos positius (una vora anti-aliased d'un traç
   negre cau a la meitat de la finestra grisa que un llindar de color hauria
   de fer servir, v. nota mes avall) ni falsos negatius.
   Es reemplacen aquests pixels pel valor del render NET (que, si sota el
   numero hi havia geometria real -- 8 de 53 figures -- es exactament
   aquesta geometria, no paper en blanc).
2. Converteix el fons crema (PAPER, #faf6ec) a blanc pur amb un reescalat
   LINEAL per canal (l'invers de mix-blend-mode:multiply): un pixel = PAPER
   -> blanc; un pixel = negre pur es queda negre pur; els intermedis
   (antialiasing) es reescalen proporcionalment.

Per que NO un simple llindar de color per al pas 1: la vora antialiased
entre un traç de tinta (~#1a1a1a) i el paper (#faf6ec) passa, a la meitat
del degradat, per un gris (~138,136,131) gairebe identic al gris del segell
(#8a8580 = 138,133,128) -- una coincidencia numerica real, no un cas
hipotetic. Un llindar de color sol either (a) esborraria vores de traços
reals arreu de la imatge, either (b) deixaria un fantasma parcial del
numero. La comparacio per diferencia no pateix cap d'aquests dos problemes.
"""
import sys, os
from PIL import Image

PAPER = (0xfa, 0xf6, 0xec)

def erase_stamp_by_diff(stamped_path, clean_path):
    a = Image.open(stamped_path).convert("RGB")
    b = Image.open(clean_path).convert("RGB")
    if a.size != b.size:
        raise ValueError("mides diferents entre %s i %s" % (stamped_path, clean_path))
    pa, pb = a.load(), b.load()
    w, h = a.size
    changed = 0
    for y in range(h):
        for x in range(w):
            if pa[x, y] != pb[x, y]:
                pa[x, y] = pb[x, y]
                changed += 1
    return a, changed

def whiten_background(img):
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            nr = 255 - (PAPER[0] - r) * (255.0 / PAPER[0])
            ng = 255 - (PAPER[1] - g) * (255.0 / PAPER[1])
            nb = 255 - (PAPER[2] - b) * (255.0 / PAPER[2])
            px[x, y] = (
                max(0, min(255, round(nr))),
                max(0, min(255, round(ng))),
                max(0, min(255, round(nb))),
            )
    return img

def publish_one(num, stamped_dir, clean_dir, canvas_id, out_path):
    stamped_path = os.path.join(stamped_dir, canvas_id + ".png")
    clean_path = os.path.join(clean_dir, canvas_id + ".png")
    img, changed = erase_stamp_by_diff(stamped_path, clean_path)
    img = whiten_background(img)
    img.save(out_path)
    print("fig-%s: %d pixels de segell esborrats -> %s" % (num, changed, out_path))

if __name__ == "__main__":
    # (numero figura, id de canvas a figures-05.html, fitxer de sortida)
    JOBS = [
        ("028", "r1", "fig-028.png"),
        ("045", "r2", "fig-045.png"),
        ("048", "r3", "fig-048.png"),
        ("050", "r4", "fig-050.png"),
        ("052", "r5", "fig-052.png"),
    ]
    stamped_dir, clean_dir, out_dir = sys.argv[1], sys.argv[2], sys.argv[3]
    os.makedirs(out_dir, exist_ok=True)
    for num, cid, fname in JOBS:
        publish_one(num, stamped_dir, clean_dir, cid, os.path.join(out_dir, fname))
