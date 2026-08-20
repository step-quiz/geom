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
    "parse_guies.py",
    "js/data/preguntes-dades.js", "js/data/guies-dades.js",
    "js/nucli/contingut.js", "js/nucli/progres.js", "js/nucli/router.js",
    "js/nucli/guies.js", "js/ui/llista.js", "js/ui/detall.js", "js/ui/main.js",
    "js/i18n/ui-strings.js", "js/i18n/i18n-core.js",
    "css/tokens.css", "css/base.css", "css/components.css",
    "docs/HAND_DRAWN_GEOMETRY_TECHNIQUE.md", "docs/manifest-figures.tsv",
    "docs/hand-draw.js", "docs/comu.js", "docs/render.js",
]
# build_preguntes_dades.py NO hi és a proposit: l'owner el va arxivar
# fora del repo fa diverses rondes (la transformacio que fa ja esta feta
# i no es torna a fer -- v. HANDOFF-COLD-START.md §4). Exigir-ne la
# presencia nomes produia un fals positiu permanent a cada execucio,
# soroll que podia amagar un error nou de veritat.
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

    # -------------------------------------------------- 3b. imatges d'enunciat
    # Comprovacio que NO existia fins ara: verifica_projecte.py validava les
    # 162 figures de guia contra el manifest, pero mai havia comprovat que
    # imatge.fitxer de cada pregunta apunti a un fitxer real. Amb 122
    # preguntes ja amb imatge, calia una comprovacio propia -- mateixa
    # resolucio de ruta que fa detall.js en temps real: "assets/img/" +
    # fitxer (fitxer pot incloure un subdirectori, p.ex. "pistes/fig-194.png").
    # Normalitza singular/plural EXACTAMENT com contingut.js::nomsFitxer --
    # algunes preguntes (p.ex. q40_implicit) fan servir "fitxers" (array) en
    # lloc de "fitxer" (string sol); tractar-ho com a error real la primera
    # vegada que es va escriure aquesta comprovacio va ser un fals positiu.
    amb_imatge = [p for p in P if p.get("imatge")]
    manquen = []
    for p in amb_imatge:
        img = p["imatge"]
        fitxers = img["fitxers"] if "fitxers" in img else [img.get("fitxer")]
        for fitxer in fitxers:
            if not fitxer:
                manquen.append("%s -> (fitxer buit)" % p["id"]); continue
            ruta = os.path.join("assets", "img", fitxer)
            if not os.path.exists(ruta):
                manquen.append("%s -> %s" % (p["id"], ruta))
            elif os.path.getsize(ruta) == 0:
                manquen.append("%s -> %s (0 bytes)" % (p["id"], ruta))
    if manquen: err("imatge.fitxer no existeix al disc: %s" % manquen)
    else: ok("%d imatges d'enunciat existeixen totes al disc" % len(amb_imatge))

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

# ------------------------------------------- 10. referències a documents morts
# Afegit a l'auditoria d'ago. 2026. Les capçaleres del codi citen documents
# de disseny amb número de secció ("§4.2 de GLOSSARY-DESIGN-NOTES.md"). Cinc
# d'aquests documents mai han estat al repo: eren de treball, externs. Es
# permeten expressament (la citació és informació real: la decisió va ser
# especificada abans d'implementar-se) però han d'estar declarats aquí i a
# docs/DOCUMENTS-DE-DISSENY.md, que és qui explica on ha anat a parar cada un.
# Qualsevol referència NOVA a un document inexistent i no declarat és un avís.
DOCS_ABSENTS = {
    "PROPOSTA-ARQUITECTURA.md",
    "GLOSSARY-DESIGN-NOTES.md",
    "ITINERARY-DESIGN-NOTES.md",
    "DEMO-PROOF-INTRO-DESIGN-NOTES.md",
    "HANDOFF-COMPLETAR-GUIES.md",
    "pedagogical-assessment-geom.md",
    "NOTA-GLOSSARI.md",          # mai va existir: v. NOTA-GLOSSARI-MILLORES.md
    "build_preguntes_dades.py",  # arxivat fora del repo per l'owner
    "HANDOFF-LLIURAMENT-9.md",   # full de ruta dels lots 9/10, ja executat
    "i18n-spanish-guide.md",     # d'un projecte germà (karelcat), mai d'aquest
}
# Plantilles, rangs i noms genèrics que no són fitxers concrets:
#   GUIES-LOT-N.md      plantilla
#   GUIES-LOT-1..8.md   rang ("dels lots 1 al 8"), no un fitxer
#   10.md               tros de "HANDOFF-LLIURAMENT-9.md/-10.md" que la
#                       regex parteix en dos; el document real ja és a DOCS_ABSENTS
DOCS_IGNORA = {"GUIES-LOT-N.md", "NOTES.md", "figures-NN.html", "10.md"}
RANG_LOT = re.compile(r"^GUIES-LOT-\d+\.\.\d+\.md$")

def existeix_doc(nom):
    for arrel, dirs, fitxers in os.walk("."):
        if ".git" in arrel: continue
        if nom in fitxers: return True
    return False

REF_DOC = re.compile(r"\b([A-Za-z0-9_][A-Za-z0-9_.-]*\.(?:md|py))\b")
morts, revisats = [], set()
for arrel, dirs, fitxers in os.walk("."):
    if ".git" in arrel or arrel.startswith("./docs"): continue
    for n in fitxers:
        if not n.endswith((".js", ".css", ".html")): continue
        cami = os.path.join(arrel, n)
        for num, linia in enumerate(open(cami, encoding="utf-8"), 1):
            for ref in REF_DOC.findall(linia):
                if ref in DOCS_ABSENTS or ref in DOCS_IGNORA: continue
                if RANG_LOT.match(ref): continue
                if ref in revisats: continue
                revisats.add(ref)
                if not existeix_doc(ref):
                    morts.append("%s:%d cita %s, que no existeix" % (cami, num, ref))
for m in morts: avis(m)
if not morts:
    ok("cap referència a un document inexistent no declarat")
if not os.path.exists("docs/DOCUMENTS-DE-DISSENY.md"):
    err("FALTA docs/DOCUMENTS-DE-DISSENY.md (explica els documents de DOCS_ABSENTS)")
else:
    s = open("docs/DOCUMENTS-DE-DISSENY.md", encoding="utf-8").read()
    nodecl = [d for d in DOCS_ABSENTS if d not in s]
    if nodecl:
        err("DOCS_ABSENTS conté %s, que docs/DOCUMENTS-DE-DISSENY.md no explica"
            % ", ".join(sorted(nodecl)))
    else:
        ok("tots els documents absents declarats estan explicats")

# ------------------------------------- 11. paraules partides pel wrap del .md
# Origen de tres errates reals ("calcular- ne", "semi- esfera", "parteix- lo"):
# un guionet a final de línia al .md que neteja() de parse_guies.py convertia
# en "guionet + espai". Arreglat a l'arrel allà; aquí es vigila la sortida.
G = llegeix_global("js/data/guies-dades.js", "GUIES")
if G is not None:
    partides = []
    for qid, g in G.items():
        textos = [(p.get("text") or {}).get("ca") or "" for p in g.get("pistes", [])]
        textos += [(g.get("comprovacio") or {}).get("ca") or "",
                   (g.get("iDespres") or {}).get("ca") or ""]
        for t in textos:
            for m in re.findall(r"\w+- \w+", t):
                partides.append("%s: %r" % (qid, m))
    if partides:
        err("paraules partides a guies-dades.js: %s" % ", ".join(partides[:10]))
    else:
        ok("cap paraula partida pel wrap a guies-dades.js")

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
