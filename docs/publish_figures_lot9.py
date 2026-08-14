#!/usr/bin/env python3
"""publish_figures_lot9.py -- publica les 17 figures noves del lot 9,
reutilitzant exactament l'algorisme de publish_figures.py (diferencia de
pixels entre stamped/clean + blanqueig de fons)."""
import sys, os
sys.path.insert(0, os.path.dirname(__file__))
from publish_figures import publish_one

JOBS = [
    ("099", "h1"), ("100", "h2"), ("101", "h3"), ("102", "h4"),
    ("103", "h5"), ("104", "h6"), ("105", "h7"), ("106", "h8"),
    ("107", "h9"), ("108", "h10"), ("109", "h11"), ("110", "h12"),
    ("111", "h13"), ("112", "h14"), ("113", "h15"), ("114", "h16"),
    ("115", "h17"),
]

if __name__ == "__main__":
    stamped_dir = "/tmp/pub-numbered"
    clean_dir = "/tmp/pub-clean"
    out_dir = "/home/claude/geom/geom-main/assets/img/pistes"
    os.makedirs(out_dir, exist_ok=True)
    for num, canvas_id in JOBS:
        out_path = os.path.join(out_dir, "fig-%s.png" % num)
        publish_one(num, stamped_dir, clean_dir, canvas_id, out_path)
