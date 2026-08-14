#!/usr/bin/env python3
"""publish_lot10.py -- mateixa logica que docs/publish_figures.py (erase_stamp_by_diff
+ whiten_background), aplicada als 16 canvas d'aquest lot. No es modifica
publish_figures.py; aquest script nomes en reaplica el mateix algorisme amb
la seva propia llista JOBS, tal com el propi HANDOFF preveu per a cada lot."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "docs"))
from publish_figures import erase_stamp_by_diff, whiten_background

JOBS = [
    ("099", "i1"), ("100", "i2"), ("101", "i3"), ("102", "i4"),
    ("103", "i5"), ("104", "i6"), ("105", "i7"), ("106", "i8"),
    ("107", "i9"), ("108", "i10"), ("109", "i11"), ("110", "i12"),
    ("111", "i13"), ("112", "i14"), ("113", "i15"), ("114", "i16"),
]

if __name__ == "__main__":
    stamped_dir, clean_dir, out_dir = sys.argv[1], sys.argv[2], sys.argv[3]
    os.makedirs(out_dir, exist_ok=True)
    for num, cid in JOBS:
        stamped_path = os.path.join(stamped_dir, cid + ".png")
        clean_path = os.path.join(clean_dir, cid + ".png")
        img, changed = erase_stamp_by_diff(stamped_path, clean_path)
        img = whiten_background(img)
        out_path = os.path.join(out_dir, "fig-%s.png" % num)
        img.save(out_path)
        print("fig-%s: %d pixels de segell esborrats -> %s" % (num, changed, out_path))
