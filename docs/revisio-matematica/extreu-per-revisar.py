#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
extreu-per-revisar.py — flattens one reviewable text per question.

WHY THIS EXISTS
The three things you must review together for a single question live in three
different places and two different formats:

    enunciat  → js/data/preguntes-dades.js   (window.PREGUNTES, JSON-ish)
    guia      → js/data/guies-dades.js       (window.GUIES, JSON-ish)
    solució   → solucions/qNN.html           (one file per question)

Reviewing them separately is how you miss the fact that a guide and its own
solution contradict each other — which happened in q05/q07, q33, q37, q57,
q60, q69 and q83. This script puts all three side by side.

USAGE
    python3 extreu-per-revisar.py                  # all 130 → tot.txt
    python3 extreu-per-revisar.py q84 q85 q86      # just these, to stdout

Run it from the repository root. The container filesystem resets between
sessions, so expect to re-create or re-run this.
"""
import re, json, os, html, sys

BASE = os.path.dirname(os.path.abspath(__file__))
# allow running from docs/revisio-matematica/ or from the repo root
if not os.path.exists(os.path.join(BASE, "js", "data")):
    BASE = os.path.abspath(os.path.join(BASE, "..", ".."))


def load_global(path, varname):
    """Read a window.X = <literal>; global out of a .js file without node."""
    src = open(os.path.join(BASE, path), encoding="utf-8").read()
    i = src.index(varname)
    j = src.index("=", i)
    k = min(x for x in [src.find("[", j), src.find("{", j)] if x != -1)
    depth = 0
    for p in range(k, len(src)):
        if src[p] in "[{":
            depth += 1
        elif src[p] in "]}":
            depth -= 1
            if depth == 0:
                return json.loads(src[k:p + 1])
    raise ValueError("unbalanced literal in %s" % path)


def strip_html(s):
    s = re.sub(r"<figcaption.*?</figcaption>",
               lambda m: "\n   [PEU FIGURA] " + re.sub("<[^>]+>", "", m.group(0)),
               s, flags=re.S)
    s = re.sub(r'<img[^>]*alt="([^"]*)"[^>]*>', r"\n   [FIGURA: \1]\n", s)
    s = re.sub(r"</p>", "\n", s)
    s = re.sub(r"<[^>]+>", "", s)
    s = html.unescape(s)
    return re.sub(r"\n{3,}", "\n\n", s).strip()


def solucio(qid):
    p = os.path.join(BASE, "solucions", "%s.html" % qid)
    if not os.path.exists(p):
        return None
    m = re.search(r'<section class="solucio">(.*?)</section>',
                  open(p, encoding="utf-8").read(), re.S)
    return strip_html(m.group(1)) if m else None


def bloc(q, guies):
    qid = q["id"]
    L = ["=" * 78,
         "### %s  (pàg. %s, %s, dificultat %s)" % (qid, q["pagina"], q["dimensio"], q["dificultat"]),
         "[EN] %s" % q["enunciat"]["en"],
         "[CA] %s" % q["enunciat"]["ca"]]
    if q.get("_notaExtraccio"):
        L.append("[nota extracció] %s" % q["_notaExtraccio"])
    g = guies.get(qid)
    if g:
        L.append("\n--- GUIA (moviment: %s) ---" % g.get("moviment"))
        for p in g["pistes"]:
            t = (p.get("titol") or {}).get("ca")
            tx = (p.get("text") or {}).get("ca")
            fig = p.get("figura")
            L.append("\n[PISTA %s] %s%s" % (p["nivell"], t, "  (fig: %s)" % fig if fig else ""))
            L.append(str(tx))          # None is meaningful: level-2 hints are often figure-only
        L.append("\n[COMPROVACIÓ] %s" % (g.get("comprovacio") or {}).get("ca"))
        L.append("\n[I DESPRÉS] %s" % (g.get("iDespres") or {}).get("ca"))
    else:
        L.append("\n--- SENSE GUIA ---")
    s = solucio(qid)
    L.append("\n--- SOLUCIÓ (solucions/%s.html) ---\n%s" % (qid, s) if s
             else "\n--- SENSE FITXER DE SOLUCIÓ ---")
    return "\n".join(str(x) for x in L)


def main():
    preguntes = load_global("js/data/preguntes-dades.js", "window.PREGUNTES")
    guies = load_global("js/data/guies-dades.js", "window.GUIES")
    vols = set(sys.argv[1:])
    tria = [q for q in preguntes if not vols or q["id"] in vols]
    out = "\n\n".join(bloc(q, guies) for q in tria)
    if vols:
        print(out)
    else:
        open(os.path.join(BASE, "tot.txt"), "w", encoding="utf-8").write(out)
        sense = [q["id"] for q in preguntes if solucio(q["id"]) is None]
        print("wrote tot.txt — %d questions, %d without a solution file:"
              % (len(tria), len(sense)))
        print("  " + " ".join(sense))


if __name__ == "__main__":
    main()
