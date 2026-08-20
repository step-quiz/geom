#!/usr/bin/env python3
"""
Converteix GUIES-LOT-N.md (lots 1-4) en dades estructurades per al lloc web,
i escriu directament js/data/guies-dades.js (window.GUIES).

Estratègia: els fitxers de guia són markdown escrit a mà per agents diferents,
i ja han divergit en dos punts (el castellanisme "I después" als lots 2-3, i la
referència de figura per nom descriptiu al lot 4). El parser NORMALITZA les
dues coses en lloc d'exigir que els fitxers font siguin idèntics, i peta si
troba una divergència que NO sap normalitzar — millor aturar-se que emetre una
guia incompleta en silenci.

Execució: des de l'arrel del repo, `python3 parse_guies.py`. Les rutes es
resolen relatives a la ubicació d'aquest fitxer, no al directori de treball,
perquè funcioni igual sigui quin sigui el cwd des d'on es cridi.

NOTA (2026-08, rework lliurament 5): les rutes d'aquest fitxer apuntaven
originalment a directoris absoluts d'un altre entorn (/home/claude/lot1,
/home/claude/aval/lot2..4) que no existeixen en aquest repositori, i el
fitxer només escrivia un guies.json intermedi -- mai window.GUIES. Cap
d'aquestes dues coses funcionava des d'un checkout net. Corregit aquí:
rutes relatives al repo, i pas final que genera js/data/guies-dades.js
directament (v. NOTA-LOT-5.md, secció 5).
"""
import re, json, sys, os

REPO = os.path.dirname(os.path.abspath(__file__))
def rel(*parts): return os.path.join(REPO, *parts)

LOTS = [
    (rel("docs/guies/GUIES-LOT-1.md"), 1),
    (rel("docs/guies/GUIES-LOT-2.md"), 2),
    (rel("docs/guies/GUIES-LOT-3.md"), 3),
    (rel("docs/guies/GUIES-LOT-4.md"), 4),
    (rel("docs/guies/GUIES-LOT-6.md"), 6),
    (rel("docs/guies/GUIES-LOT-7.md"), 7),
    (rel("docs/guies/GUIES-LOT-8.md"), 8),
    (rel("docs/guies/GUIES-LOT-9.md"), 9),
    (rel("docs/guies/GUIES-LOT-10.md"), 10),
]
MANIFEST = rel("docs/manifest-figures.tsv")
OUT_JS = rel("js/data/guies-dades.js")

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
    """fig-014.png (lots 2-5) | 034_centre_triangle.png (lot 4, historic) | nom del lot 1 -> 'NNN'."""
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
    # Paraula partida pel wrap del .md ("calcular-\nne"): es reuneix SENSE
    # espai, abans que la regla general de sota converteixi el salt de línia
    # en un espai. Sense això sortien "calcular- ne", "semi- esfera" i
    # "parteix- lo" a guies-dades.js — tres errates reals detectades a
    # l'auditoria d'ago. 2026, totes amb el mateix origen.
    # Segur per construcció en aquest corpus: un guionet a final de línia
    # sempre és un pronom enclític o un mot compost partit; els incisos hi
    # van sempre amb — (guió llarg), mai amb -. La condició exigeix lletra
    # abans i lletra just després, així que un final de línia amb "-" seguit
    # de línia en blanc (o de xifra) no s'hi toca.
    t = re.sub(r"(?<=[^\W\d_])-\n[ \t]*(?=[^\W\d_])", "-", t)
    # els salts de línia interns són de formatació del .md, no semàntics
    parts = [re.sub(r"\s*\n\s*", " ", p).strip() for p in re.split(r"\n\s*\n", t)]
    return "\n\n".join(p for p in parts if p)

# --- parser markdown --------------------------------------------------------
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
                # el títol del bloc ("— la construcció.") és informatiu. Quan no n'hi ha
                # (p.ex. "**Pista 0.**" sense "— subtítol"), el grup capturat és només un
                # punt solt -- que és "veritable" per .strip() però buit un cop netejat i
                # despullat del punt final. Cal comprovar el resultat NET, no el cru.
                sub = re.match(r"^\*\*Pista \d\s*—?\s*([^*]*)\*\*", b.group(0))
                titol_net = neteja(sub.group(1)).rstrip(".") if sub else ""
                g["pistes"].append({
                    "nivell": n,
                    "titol": titol_net or None,
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

# --- moviment (slug): font de veritat es la columna `moviment` de manifest --
def carrega_moviments(path):
    moviments = {}
    if not os.path.exists(path):
        return moviments, ["FALTA el manifest %s" % path]
    probs = []
    with open(path, encoding="utf-8") as f:
        capcalera = f.readline()  # "num\tid\tnivell\tmoviment\tlot\trev\tdescripcio"
        cols_cap = capcalera.rstrip("\n").split("\t")
        i_id, i_mov = cols_cap.index("id"), cols_cap.index("moviment")
        for line in f:
            line = line.rstrip("\n")
            if not line:
                continue
            cols = line.split("\t")
            qid, mov = cols[i_id], cols[i_mov]
            if qid in moviments and moviments[qid] != mov:
                probs.append("moviment inconsistent al manifest per %s: %r vs %r"
                              % (qid, moviments[qid], mov))
            moviments[qid] = mov
    return moviments, probs

# --- execució ----------------------------------------------------------------
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

MOV, mov_probs = carrega_moviments(MANIFEST)
problemes.extend(mov_probs)
for g in totes:
    if g["id"] not in MOV:
        problemes.append("%s: cap moviment (slug) trobat a manifest-figures.tsv" % g["id"])

print("guies analitzades:", len(totes))
print("problemes:", len(problemes))
for p in problemes[:40]:
    print("   -", p)

if problemes:
    print("\nNO s'ha escrit %s (hi ha problemes pendents)." % OUT_JS)
    sys.exit(1)

# --- generació de js/data/guies-dades.js -------------------------------------
def amb_idioma(x):
    """str -> {ca:str, en:null}; None -> None (el 'null' bare que ja fa servir l'esquema)."""
    return None if x is None else {"ca": x, "en": None}

sortida = {}
for g in totes:
    qid = g["id"]
    sortida[qid] = {
        "moviment": MOV[qid],
        "movimentTitol": amb_idioma(g["moviment"]),
        "lot": g["lot"],
        "pistes": [
            {
                "nivell": p["nivell"],
                "titol": amb_idioma(p["titol"]),
                "text": amb_idioma(p["text"]),
                "figura": p["figura"],
            }
            for p in g["pistes"]
        ],
        "comprovacio": amb_idioma(g["comprovacio"]),
        "iDespres": amb_idioma(g["iDespres"]),
    }
# ordre estable de les claus (per id), perquè el diff entre generacions sigui net
sortida = {k: sortida[k] for k in sorted(sortida)}

CAPCALERA = """/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/data/guies-dades.js
  ROL:          Guies de demostració ("escala de pistes") per a les preguntes
                que en tenen. Estructura paral·lela a preguntes-dades.js:
                variable GLOBAL window.GUIES, no un JSON amb fetch(), perquè
                el lloc s'ha d'obrir amb doble clic sobre file:// i qualsevol
                fetch() hi seria bloquejat per CORS (mateixa raó documentada
                a PROJECTES-TECHNICAL-REFERENCE.md per a preguntes-dades.js).

  PER QUÈ UN FITXER A PART I NO UN CAMP DINS DE preguntes-dades.js
  Les guies s'escriuen en lots successius i es revisen a fora (fitxers
  GUIES-LOT-N.md), mentre que preguntes-dades.js es REGENERA sencer des del
  JSON d'extracció del llibre. Tenir-les separades vol dir que regenerar les
  preguntes no pot destruir les guies, i que afegir un lot de guies no obliga
  a tornar a generar les 130 preguntes. La unió es fa en temps d'execució per
  id (v. js/nucli/guies.js).

  ESQUEMA (per id de pregunta)
    moviment       — slug del moviment que ensenya la guia; vocabulari tancat,
                     filtrable igual que dimensio/dificultat. Font de veritat:
                     la columna `moviment` de manifest.tsv.
    movimentTitol  — {ca,en} el mateix, en prosa, per mostrar a la interfície.
    lot            — número de lliurament (1-4). Traçabilitat de revisió.
    pistes[]       — SEMPRE 4, nivells 0..3, en ordre. Els quatre nivells
                     difereixen en ESPÈCIE, no en quantitat:
                       0 encàrrec  — reformula què cal produir
                       1 concreta  — particularitza, prova amb números
                       2 figura    — la construcció, com a imatge
                       3 tanca     — què cal mirar, sense dir la conclusió
                     `figura` només és no-null al nivell 2 (excepció: q15, que
                     en té una a l'1 i una altra al 3).
    comprovacio    — {ca,en} predicció verificable. MAI la solució.
    iDespres       — {ca,en} on retorna aquest moviment més endavant.

  IDIOMA: el contingut és en CATALÀ. Els camps `en` són null a propòsit i
  cauen a `ca` via geoContingut.resolCamp() — l'invers de preguntes-dades.js,
  on l'original és l'anglès. contingut.js ho tracta amb resolCampGuia(), que
  fa el fallback en la direcció correcta per a aquest fitxer.

  GENERAT per parse_guies.py a partir de GUIES-LOT-1..4.md. No editar a mà:
  edita el .md corresponent i torna a generar.
*/
"""

with open(OUT_JS, "w", encoding="utf-8") as f:
    f.write(CAPCALERA)
    f.write("\nwindow.GUIES = ")
    f.write(json.dumps(sortida, ensure_ascii=False, indent=2))
    f.write(";\n")

print("\nescrit:", OUT_JS, "(%d guies)" % len(sortida))
