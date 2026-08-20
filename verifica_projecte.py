#!/usr/bin/env python3
"""
verifica_projecte.py — comprovació d'integritat del projecte geom.

Executa'l des de l'arrel del repo:   python3 verifica_projecte.py

Comprova que dades, figures, guies i cablejat siguin coherents entre si. NO
comprova qualitat pedagògica ni si una figura està ben dibuixada: això només
ho pot fer una persona mirant-la.

Codi de sortida 0 si tot passa, 1 si hi ha cap error. Els AVISOS no fan
fallar l'script.
"""
import json, os, re, sys, subprocess

errors, avisos, oks = [], [], []
def err(m): errors.append(m)
def avis(m): avisos.append(m)
def ok(m): oks.append(m)

def llegeix_global(fitxer, variable):
    """Llegeix una variable global d'un fitxer .js sense necessitar node."""
    if not os.path.exists(fitxer):
        err("FALTA el fitxer %s" % fitxer); return None
    s = open(fitxer, encoding="utf-8").read()
    i = s.find("window.%s = " % variable)
    if i == -1:
        err("%s no defineix window.%s" % (fitxer, variable)); return None
    cos = s[i + len("window.%s = " % variable):].rstrip()
    if cos.endswith(";"): cos = cos[:-1]
    try:
        return json.loads(cos)
    except Exception as e:
        err("no es pot llegir window.%s de %s: %s" % (variable, fitxer, e)); return None

# ---------------------------------------------------------------- 1. fitxers
ESSENCIALS = [
    "index.html", "README.md", "PROJECTES-TECHNICAL-REFERENCE.md",
    "build_preguntes_dades.py", "parse_guies.py",
    "js/data/preguntes-dades.js", "js/data/guies-dades.js",
    "js/nucli/contingut.js", "js/nucli/progres.js", "js/nucli/router.js",
    "js/nucli/guies.js", "js/ui/llista.js", "js/ui/detall.js", "js/ui/main.js",
    "js/i18n/ui-strings.js", "js/i18n/i18n-core.js",
    "css/tokens.css", "css/base.css", "css/components.css",
    "docs/HAND_DRAWN_GEOMETRY_TECHNIQUE.md", "docs/manifest-figures.tsv",
    "docs/hand-draw.js", "docs/comu.js", "docs/render.js",
]
for f in ESSENCIALS:
    if os.path.exists(f): ok("hi és: %s" % f)
    else: err("FALTA: %s" % f)

# ------------------------------------------------------------ 2. noms bruts
# Un directori o fitxer amb espai al final trenca a Windows i confon git.
for arrel, dirs, fitxers in os.walk("."):
    if ".git" in arrel: continue
    for n in dirs + fitxers:
        if n != n.strip():
            err("nom amb espai sobrant: %r dins de %s" % (n, arrel))
if not any("espai sobrant" in e for e in errors):
    ok("cap nom de fitxer o directori amb espais sobrants")

# --------------------------------------------------------------- 3. preguntes
P = llegeix_global("js/data/preguntes-dades.js", "PREGUNTES")
if P is not None:
    if len(P) == 130: ok("130 preguntes")
    else: err("hi ha %d preguntes, se n'esperaven 130" % len(P))
    for camp in ("id", "pagina", "enunciat", "dimensio", "dificultat"):
        if any(camp not in p for p in P):
            err("alguna pregunta no té el camp %s" % camp)
    dims = {}
    difs = {}
    for p in P:
        dims[p.get("dimensio")] = dims.get(p.get("dimensio"), 0) + 1
        difs[p.get("dificultat")] = difs.get(p.get("dificultat"), 0) + 1
    if dims == {"2D": 88, "3D": 42}: ok("dimensio 88/42")
    else: err("distribució de dimensio inesperada: %s" % dims)
    if difs == {1: 28, 2: 70, 3: 32}: ok("dificultat 28/70/32")
    else: err("distribució de dificultat inesperada: %s" % difs)

# ------------------------------------------------------------------ 4. guies
G = llegeix_global("js/data/guies-dades.js", "GUIES")
if G is not None and P is not None:
    ids = {p["id"] for p in P}
    ok("%d guies" % len(G))
    orfes = [k for k in G if k not in ids]
    if orfes: err("guies que apunten a preguntes inexistents: %s" % orfes)
    else: ok("cap guia òrfena")
    for qid, g in G.items():
        if len(g.get("pistes", [])) != 4:
            err("%s: %d pistes en lloc de 4" % (qid, len(g.get("pistes", []))))
        if [p["nivell"] for p in g.get("pistes", [])] != [0, 1, 2, 3]:
            err("%s: els nivells de pista no són 0,1,2,3 en ordre" % qid)
        for camp in ("comprovacio", "iDespres", "moviment"):
            if not g.get(camp): err("%s: falta %s" % (qid, camp))
        if not any(p.get("figura") for p in g.get("pistes", [])):
            err("%s: cap pista amb figura" % qid)

# ---------------------------------------------------------------- 5. figures
DIR = "assets/img/pistes"
if G is not None and os.path.isdir(DIR):
    refs = {p["figura"] for g in G.values() for p in g["pistes"] if p.get("figura")}
    disc = {f for f in os.listdir(DIR) if f.endswith(".png")}
    falten = refs - disc
    sobren = disc - refs
    if falten: err("figures referenciades que no són al disc: %s" % sorted(falten))
    else: ok("les %d figures referenciades hi són totes" % len(refs))
    if sobren: avis("figures al disc que cap guia referencia: %s" % sorted(sobren))
    dolents = [f for f in disc if not re.match(r"^fig-\d{3}\.png$", f)]
    if dolents: err("noms de figura fora de convenció fig-NNN.png: %s" % dolents)
    else: ok("tots els noms segueixen fig-NNN.png")

# --------------------------------------------------------------- 6. manifest
if os.path.exists("docs/manifest-figures.tsv") and G is not None:
    files = [l.rstrip("\n").split("\t")
             for l in open("docs/manifest-figures.tsv", encoding="utf-8")][1:]
    nums = [f[0] for f in files if f and f[0]]
    if len(nums) != len(set(nums)): err("números repetits al manifest")
    else: ok("%d files al manifest, sense repeticions" % len(nums))
    refs = {p["figura"] for g in G.values() for p in g["pistes"] if p.get("figura")}
    man = {"fig-%s.png" % n for n in nums}
    if refs - man: err("figures usades que no consten al manifest: %s" % sorted(refs - man))
    if man - refs: avis("figures al manifest que cap guia usa: %s" % sorted(man - refs))

# --------------------------------------------------------------- 7. cablejat
if os.path.exists("index.html"):
    h = open("index.html", encoding="utf-8").read()
    ordre = ["js/data/preguntes-dades.js", "js/data/guies-dades.js",
             "js/i18n/ui-strings.js", "js/i18n/i18n-core.js",
             "js/nucli/contingut.js", "js/nucli/guies.js",
             "js/nucli/router.js", "js/ui/detall.js", "js/ui/main.js"]
    # Es busca la posició DE L'ETIQUETA <script>, no la primera aparició del
    # nom: index.html porta una capçalera de comentaris que enumera els
    # fitxers, i buscar-hi el nom pelat donava un fals positiu d'ordre.
    pos = [(f, h.find('<script src="%s"' % f)) for f in ordre]
    if any(p == -1 for _, p in pos):
        err("index.html no carrega: %s" % [f for f, p in pos if p == -1])
    elif [p for _, p in pos] != sorted(p for _, p in pos):
        err("l'ordre dels <script> a index.html no respecta les dependències")
    else:
        ok("index.html carrega tots els scripts en ordre de dependència")

# ------------------------------------------------------------------ 8. i18n
if os.path.exists("js/i18n/ui-strings.js"):
    s = open("js/i18n/ui-strings.js", encoding="utf-8").read()
    # guide_badge (marca "◆ guia" a la llista) es va eliminar a petició
    # explícita de l'owner -- ja no forma part de les claus essencials.
    # "guide:" / level_0 / next_hint pertanyen a la secció DIFERENT de la
    # guia de demostració (detall.js), que sí que segueix sent essencial.
    for clau in ["guide:", "level_0", "next_hint"]:
        if clau not in s: err("ui-strings.js no té %s" % clau)
    if s.count("guide: {") == 2: ok("secció guide als dos idiomes")
    elif s.count("guide: {") < 2: err("la secció guide no és als dos idiomes")

# ----------------------------------------------------------------- 9. llengua
for f in sorted(os.listdir("docs/guies")) if os.path.isdir("docs/guies") else []:
    if f.endswith(".md"):
        s = open(os.path.join("docs/guies", f), encoding="utf-8").read()
        if "después" in s:
            err("%s conté el castellanisme 'después' (%d cops)" % (f, s.count("después")))
if not any("después" in e for e in errors):
    ok("cap castellanisme 'después' als .md de guia")

# ------------------------------------------------------------------ informe
print("\n%d comprovacions passades" % len(oks))
if avisos:
    print("\nAVISOS (%d):" % len(avisos))
    for a in avisos: print("  ·", a)
if errors:
    print("\nERRORS (%d):" % len(errors))
    for e in errors: print("  ✗", e)
    sys.exit(1)
print("\nTot correcte.")
