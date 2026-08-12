#!/usr/bin/env python3
"""
Converteix GUIES-LOT-N.md (lots 1-4) en dades estructurades per al lloc web.

Estratègia: els fitxers de guia són markdown escrit a mà per agents diferents,
i ja han divergit en dos punts (el castellanisme "I después" als lots 2-3, i la
referència de figura per nom descriptiu al lot 4). El parser NORMALITZA les
dues coses en lloc d'exigir que els fitxers font siguin idèntics, i peta si
troba una divergència que NO sap normalitzar — millor aturar-se que emetre una
guia incompleta en silenci.
"""
import re, json, sys, os, unicodedata

LOTS = [
    ("/home/claude/lot1/GUIES-LOT-1.md", 1),
    ("/home/claude/aval/lot2/GUIES-LOT-2.md", 2),
    ("/home/claude/aval/lot3/GUIES-LOT-3.md", 3),
    ("/home/claude/aval/lot4/GUIES-LOT-4.md", 4),
]

# --- normalitzacions -------------------------------------------------------
def fix_llengua(t):
    """Castellanisme sistemàtic als lots 2 i 3 (19 ocurrències)."""
    return t.replace("I después", "I després").replace("después", "després")

# El lot 1 es va escriure ABANS que existís la numeració fig-NNN (la va
# introduir el brief per a l'agent IMG). Els seus noms descriptius es
# tradueixen aquí segons manifest.tsv, en lloc de reescriure GUIES-LOT-1.md.
LOT1 = {
 "q34_pista2_mosaic":"001","q14_pista2_altura":"002","q15_pista1_tres_posicions":"003",
 "q15_pista3_resta":"004","q41_pista2_radi":"005","q09_pista2_tres_peces":"006",
 "q08c_pista2_contraexemple":"007","q16_pista2_diagonal":"008","q22_pista2_centres":"009",
 "q36_pista2_perimetre_fix":"010","q96_pista2_reflexio":"011","q25_pista2_dues_diagonals":"012",
 "q95_pista2_contradiccio":"013",
}

def fig_num(ref):
    """fig-014.png (lots 2-3) | 034_centre_triangle.png (lot 4) | nom del lot 1 -> 'NNN'."""
    base = ref[:-4] if ref.endswith(".png") else ref
    if base in LOT1:
        return LOT1[base]
    m = re.match(r"fig-(\d{3})$", base) or re.match(r"(\d{3})_", base)
    if not m:
        raise ValueError("referència de figura no reconeguda: %r" % ref)
    return m.group(1)

def neteja(t):
    """Markdown inline -> text pla, conservant els salts de paràgraf."""
    t = t.strip()
    t = re.sub(r"`([^`]*)`", r"\1", t)
    t = re.sub(r"\*\*([^*]*)\*\*", r"\1", t)
    t = re.sub(r"\*([^*]*)\*", r"\1", t)
    # els salts de línia interns són de formatació del .md, no semàntics
    parts = [re.sub(r"\s*\n\s*", " ", p).strip() for p in re.split(r"\n\s*\n", t)]
    return "\n\n".join(p for p in parts if p)

# --- parser ----------------------------------------------------------------
CAP = re.compile(r"^##\s+\d+\.\s+(\S+)\s+—\s*(.*)$", re.M)
BLOC = re.compile(r"^\*\*(Moviment|Pista 0|Pista 1|Pista 2|Pista 3|Comprovació|I després)"
                  r"[^*]*\*\*\s*(.*?)(?=^\*\*(?:Moviment|Pista [0-3]|Comprovació|I després)|^---|\Z)",
                  re.M | re.S)

def parse(path, lot):
    raw = fix_llengua(open(path, encoding="utf-8").read())
    caps = list(CAP.finditer(raw))
    if not caps:
        raise ValueError("cap guia trobada a " + path)
    out = []
    for i, c in enumerate(caps):
        qid = c.group(1)
        fi = caps[i + 1].start() if i + 1 < len(caps) else len(raw)
        cos = raw[c.end():fi]

        g = {"id": qid, "lot": lot, "moviment": None, "figura": None,
             "pistes": [], "comprovacio": None, "iDespres": None, "figures": []}

        for b in BLOC.finditer(cos):
            tipus, txt = b.group(1), b.group(2)
            if tipus == "Moviment":
                # "**Moviment: nom del moviment.**" -> el nom viu al propi títol
                tit = re.match(r"^\*\*Moviment[:\s]*([^*]*)\*\*", b.group(0))
                g["moviment"] = neteja(tit.group(1)).rstrip(".") if tit else None
            elif tipus.startswith("Pista"):
                n = int(tipus[-1])
                fitxer = None
                m = re.search(r"→\s*`([^`]+)`", txt)
                if m:
                    fitxer = "fig-%s.png" % fig_num(m.group(1))
                    txt = txt.replace(m.group(0), "")
                    g["figura"] = g["figura"] or fitxer
                    g["figures"].append(fitxer)
                # el títol del bloc ("— la construcció.") és informatiu
                sub = re.match(r"^\*\*Pista \d\s*—?\s*([^*]*)\*\*", b.group(0))
                g["pistes"].append({
                    "nivell": n,
                    "titol": neteja(sub.group(1)).rstrip(".") if sub and sub.group(1).strip() else None,
                    "text": neteja(txt) or None,
                    "figura": fitxer,
                })
            elif tipus == "Comprovació":
                g["comprovacio"] = neteja(txt)
            elif tipus == "I després":
                g["iDespres"] = neteja(txt)

        g["pistes"].sort(key=lambda p: p["nivell"])
        out.append(g)
    return out

# --- execució --------------------------------------------------------------
totes, problemes = [], []
for path, lot in LOTS:
    if not os.path.exists(path):
        problemes.append("FALTA el fitxer %s" % path); continue
    for g in parse(path, lot):
        totes.append(g)

vist = {}
for g in totes:
    if g["id"] in vist:
        problemes.append("id duplicat: %s (lots %s i %s)" % (g["id"], vist[g["id"]], g["lot"]))
    vist[g["id"]] = g["lot"]
    if len(g["pistes"]) != 4:
        problemes.append("%s: %d pistes en lloc de 4" % (g["id"], len(g["pistes"])))
    for camp in ("moviment", "comprovacio", "iDespres"):
        if not g[camp]:
            problemes.append("%s: falta %s" % (g["id"], camp))
    if not g["figura"]:
        problemes.append("%s: cap figura referenciada" % g["id"])

print("guies analitzades:", len(totes))
print("problemes:", len(problemes))
for p in problemes[:40]:
    print("   -", p)
json.dump(totes, open("/home/claude/aval/guies.json", "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
