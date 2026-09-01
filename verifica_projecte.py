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
    """Llegeix una variable global d'un fitxer .js sense necessitar node.
    S'atura al proper 'window.' de nivell superior si n'hi ha un després
    (per a fitxers amb més d'una declaració global, com
    categories-tematiques-dades.js o itineraris-tematics-dades.js) --
    abans només funcionava quan la variable demanada era la DARRERA
    declaració del fitxer; ara funciona sigui quin sigui l'ordre."""
    if not os.path.exists(fitxer):
        err("FALTA el fitxer %s" % fitxer); return None
    s = open(fitxer, encoding="utf-8").read()
    capçalera = "window.%s = " % variable
    i = s.find(capçalera)
    if i == -1:
        err("%s no defineix window.%s" % (fitxer, variable)); return None
    resta = s[i + len(capçalera):]
    # proper "window." a l'inici de línia (una altra declaració global) --
    # si n'hi ha, el cos JSON s'acaba just abans.
    m = re.search(r"\nwindow\.[A-Z_]+ = ", resta)
    cos = (resta[:m.start()] if m else resta).rstrip()
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
    "HANDOFF-LLIURAMENT-10.md",  # ídem, citat a NOTA-LOT-10 i NOTA-FUSIO-LOT-9-10
    "i18n-spanish-guide.md",     # d'un projecte germà (karelcat), mai d'aquest
    "HANDOFF-ITINERARIS.md",     # handoff dels itineraris temàtics, de treball, mai al repo
    # --- afegits a l'auditoria de documentació d'ago. 2026, quan la
    #     comprovació va deixar de saltar-se ./docs. Tots citats només des
    #     de notes de lliurament, mai des del codi; explicats un per un a la
    #     segona taula de docs/DOCUMENTS-DE-DISSENY.md.
    "NOTA-METODE-TRAM-12.md",    # esborrat a posta: v. CANVIS-TRAM-12.md §8
    "ANALISI-GRAFICS-NOUS.md",   # anàlisi prèvia de les imatges de la Part 1 i 2
    "FIGURES.md",                # nota de lliurament d'una ronda de figures
    "IMPROVE-INSTRUCTIONS.md",   # instruccions dels tres agents "IMPROVE"
    "NOTA-LLIURAMENT.md",        # nom genèric que NOTA-LOT-2/3/4 es donaven a si mateixes
    "itineraris-detall.md",      # annex de PROPOSTA-ITINERARIS-ORIGINAL; avui és el .js
    "publish_lot10.py",          # script d'un sol ús del lot 10, fet i llençat
    "guies.json",                # fitxer intermedi de parse_guies.py en una sessió antiga
    "manifest.tsv",              # nom antic de docs/manifest-figures.tsv
    "questions_full_book.json",  # JSON font de l'extracció, mai al repo
    "sol-01.html", "sol-02.html", "sol-35.html", "sol-q25.html", "q08.html",
    # ^ noms d'esquemes de nomenclatura de solucions ja retirats, citats
    #   expressament a COORDINACIO-AGENTS-SOLUCIONS.md §"What this replaces"
    #   per dir que NO s'han de tornar a fer servir.
}
# Plantilles, rangs i noms genèrics que no són fitxers concrets:
#   GUIES-LOT-N.md      plantilla
#   GUIES-LOT-1..8.md   rang ("dels lots 1 al 8"), no un fitxer
#   10.md               tros de "HANDOFF-LLIURAMENT-9.md/-10.md" que la
#                       regex parteix en dos; el document real ja és a DOCS_ABSENTS
#   NOTES.md            nom genèric ("v. les notes"), no un fitxer
#   figures-NN.html     plantilla
#   04.html, X.md       trossos que la regex retalla d'un nom més llarg
DOCS_IGNORA = {"GUIES-LOT-N.md", "NOTES.md", "figures-NN.html", "10.md",
               "04.html", "X.md", "NOTA-LOT-NN.md", "fitxer.html",
               "figures-NN.js", "path/to/source.html"}
RANG_LOT = re.compile(r"^GUIES-LOT-\d+\.\.\d+\.md$")

def existeix_doc(nom):
    for arrel, dirs, fitxers in os.walk("."):
        if ".git" in arrel: continue
        if nom in fitxers: return True
    return False

REF_DOC = re.compile(r"\b([A-Za-z0-9_][A-Za-z0-9_.-]*\.(?:md|py))\b")
morts, revisats = [], set()
# S'escaneja TOT el repositori, inclosos els .md de docs/. Fins a
# l'auditoria de documentació d'ago. 2026 aquí hi havia
# `or arrel.startswith("./docs")`, és a dir, la comprovació es saltava
# justament el directori on viuen gairebé totes les notes -- i on hi havia
# set referències mortes sense declarar. `solucions/` sí que se salta: són
# 115 fitxers de contingut que no citen documents de disseny.
for arrel, dirs, fitxers in os.walk("."):
    if ".git" in arrel or arrel.startswith("./solucions"): continue
    for n in fitxers:
        if not n.endswith((".js", ".css", ".html", ".md", ".py")): continue
        if n == "DOCUMENTS-DE-DISSENY.md": continue   # és qui els declara
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

# --------------------------------------------------- 12. itineraris temàtics
# Afegit ago. 2026 (js/data/itineraris-tematics-dades.js). Aquest fitxer és
# una REORGANITZACIÓ de les 118 preguntes visibles en 6 camins fixos, no una
# classificació nova -- ha de quedar perfectament coherent amb l'única font
# real de "de quin tema és cada pregunta": CLASSIFICACIO_TEMATICA.
IT = llegeix_global("js/data/itineraris-tematics-dades.js", "ITINERARIS_TEMATICS")
GR = llegeix_global("js/data/itineraris-tematics-dades.js", "ITINERARIS_GRUPS_ENTRELLACATS")
P = llegeix_global("js/data/preguntes-dades.js", "PREGUNTES")
CLS = llegeix_global("js/data/categories-tematiques-dades.js", "CLASSIFICACIO_TEMATICA")

if IT is not None and P is not None and CLS is not None:
    idsReals = {p["id"] for p in P}
    AMAGADES = {"q19", "q20", "q34", "q35", "q18a", "q18b",
                "q21", "q24", "q83", "q67", "q102", "q106"}
    visibles_esperades = idsReals - AMAGADES

    totes_it = []
    dupli = set()
    for it in IT:
        for p in it["preguntes"]:
            if p["id"] in totes_it: dupli.add(p["id"])
            totes_it.append(p["id"])
    totes_it_set = set(totes_it)

    if dupli:
        err("ids duplicats entre itineraris temàtics: %s" % ", ".join(sorted(dupli)))
    else:
        ok("cap id duplicat entre els 6 itineraris temàtics")

    falten = visibles_esperades - totes_it_set
    sobren = totes_it_set - visibles_esperades
    if falten:
        err("preguntes visibles sense itinerari temàtic: %s" % ", ".join(sorted(falten)))
    if sobren:
        err("itinerari temàtic conté ids amagats o inexistents: %s" % ", ".join(sorted(sobren)))
    if not falten and not sobren:
        ok("els 6 itineraris temàtics cobreixen exactament les 118 preguntes visibles")

    # Coherència amb CLASSIFICACIO_TEMATICA: cada itinerari 2D ha de
    # coincidir amb la seva categoria oficial; "3d" amb dimensio=="3D".
    cat_de = {c["id"]: c["categoriaTematica"] for c in CLS}
    dim_de = {p["id"]: p.get("dimensio") for p in P}
    mismatch = []
    for it in IT:
        clau = it["clau"]
        for p in it["preguntes"]:
            qid = p["id"]
            if clau == "3d":
                if dim_de.get(qid) != "3D":
                    mismatch.append("%s a itinerari 3d però dimensio=%s" % (qid, dim_de.get(qid)))
            else:
                if cat_de.get(qid) != clau:
                    mismatch.append("%s a itinerari %s però categoriaTematica=%s" % (qid, clau, cat_de.get(qid)))
    if mismatch:
        err("itinerari temàtic incoherent amb CLASSIFICACIO_TEMATICA: %s" % "; ".join(mismatch[:10]))
    else:
        ok("els 6 itineraris temàtics coincideixen amb CLASSIFICACIO_TEMATICA per a totes les 118")

    # requereix / bessones: cap referència trencada.
    reqTrencat, bessTrencat = [], []
    for it in IT:
        for p in it["preguntes"]:
            for r in p.get("requereix", []):
                if r not in idsReals: reqTrencat.append("%s->%s" % (p["id"], r))
            for b in p.get("bessones", []):
                if b not in totes_it_set: bessTrencat.append("%s->%s" % (p["id"], b))
    if reqTrencat:
        err("'requereix' apunta a id inexistent: %s" % ", ".join(reqTrencat[:10]))
    else:
        ok("tots els 'requereix' dels itineraris apunten a ids reals")
    if bessTrencat:
        err("'bessones' apunta a id fora dels itineraris: %s" % ", ".join(bessTrencat[:10]))
    else:
        ok("tots els 'bessones' dels itineraris apunten a ids vàlids")

if GR is not None and P is not None:
    idsReals = {p["id"] for p in P}
    fora = [i for g in GR for i in g["ids"] if i not in idsReals]
    if fora:
        err("ITINERARIS_GRUPS_ENTRELLACATS conté ids inexistents: %s" % ", ".join(fora))
    else:
        ok("els 8 grups entrellaçats només contenen ids reals")

# ------------------------------------------- 13. prova escrita (codi + examen)
# Comprova el cablejat de la prova escrita: que el codi que copia l'alumne i
# el que llegeix l'analitzador continuïn parlant el mateix idioma, i que les
# figures que necessiten tractament especial el rebin. No comprova
# l'analitzador GENERAT (analitzador-geom.html): comprova les FONTS, perquè
# un analitzador vell i correcte no ha de fer passar un canvi trencat.
if os.path.exists("js/ui/llista.js") and os.path.exists("analitzador-geom-plantilla.html"):
    llista = open("js/ui/llista.js", encoding="utf-8").read()
    plant = open("analitzador-geom-plantilla.html", encoding="utf-8").read()

    # El prefix del format ha de ser el mateix als dos costats. Si algú el
    # canvia en un sol lloc, els codis dels alumnes deixen de llegir-se i el
    # símptoma (una prova buida) no assenyala la causa.
    m = re.search(r'return "(GEO\d+)-" \+ ids\.join', llista)
    if not m:
        err("llista.js: no s'ha trobat formataCodi() amb el prefix GEO<n>-")
    elif ("GEO" not in plant) or ("/^GEO\\d+-?/i" not in plant):
        err("la plantilla de l'analitzador no reconeix el prefix %s del codi" % m.group(1))
    else:
        ok("el codi de l'alumne i el lector de l'analitzador comparteixen prefix")

    # Camp de només lectura amb el codi: és la sortida quan el porta-retalls
    # falla (permisos, navegador antic). Sense ell, un error de còpia deixa
    # l'alumne sense cap manera d'obtenir el seu codi.
    if "geo-export-codi" in llista and "geo-export-btn" in llista:
        ok("el codi es pot copiar i, si falla, seleccionar a mà")
    else:
        err("llista.js: falta el camp de reserva del codi (geo-export-codi)")

    # esInvertida i esCrop NO són decoració: q42 és traç clar sobre fons fosc
    # (94 % de píxels foscos) i sense invertir-la s'imprimeix com un rectangle
    # negre; els retalls de pàgina deixen de llegir-se si s'encongeixen.
    # Es comprova que els flags s'USIN (que arribin a l'atribut de la
    # imatge), no només que la paraula aparegui en algun comentari.
    usa_inv = re.search(r'flagsImatge\(\s*img\s*,\s*"esInvertida"', plant) \
        and "invert(1)" in plant
    usa_crop = re.search(r'flagsImatge\(\s*img\s*,\s*"esCrop"', plant) \
        and "figura--scan" in plant
    if usa_inv:
        ok("la prova inverteix les figures amb esInvertida (q42)")
    else:
        err("la plantilla no aplica esInvertida: q42 s'imprimirà com un "
            "rectangle negre (94 % de píxels foscos)")
    if usa_crop:
        ok("la prova dona tractament propi als retalls de pàgina (esCrop)")
    else:
        err("la plantilla no aplica esCrop: els retalls de pàgina quedaran "
            "il·legibles en encongir-se")

    # Forats del build. Si en falta un, build_analitzador_geom.py ja peta,
    # però aquí es diu abans i amb el motiu.
    for forat in ("/*__PREGUNTES__*/", "/*__AMAGATS__*/", "/*__IMATGES__*/"):
        if plant.count(forat) != 1:
            err("la plantilla ha de tenir exactament un %s" % forat)
    if all(plant.count(f) == 1 for f in
           ("/*__PREGUNTES__*/", "/*__AMAGATS__*/", "/*__IMATGES__*/")):
        ok("els tres forats del build hi són")

    # Textos nous, als dos idiomes.
    if os.path.exists("js/i18n/ui-strings.js"):
        ui = open("js/i18n/ui-strings.js", encoding="utf-8").read()
        for clau in ("export_button", "export_copied", "export_manual",
                     "export_field_label", "export_file", "export_empty"):
            if ui.count(clau + ":") != 2:
                err("ui-strings.js: %s no és exactament als dos idiomes" % clau)

# --------------------------------------- 14. xifres a la documentació
# Origen: l'auditoria de documentació d'ago. 2026 va trobar que el README
# es contradeia ell mateix sobre el glossari (deia "26 amb figura pròpia"
# en un lloc, "27 pendents" en un altre, i "53 de 53 completat" en un
# tercer). Cap comprovació ho podia veure perquè totes miraven dades, no
# prosa. Aquestes sí que miren la prosa, i només per a les xifres que
# canvien: les que han fet drift una vegada en faran una altra.
def compta_figures_per_nivell():
    guies = llegeix_global("js/data/guies-dades.js", "GUIES")
    per = {}
    for g in (guies or {}).values():
        for pista in g.get("pistes", []):
            if pista.get("figura"):
                per[pista.get("nivell")] = per.get(pista.get("nivell"), 0) + 1
    return per

# glossari-dades.js té les claus SENSE cometes (és un literal JS, no JSON:
# v. HANDOFF-COLD-START.md §4), així que llegeix_global() no el pot parsejar.
# Es compten els camps `figura:` amb regex, que aquí és suficient i honest.
_gloss_txt = open("js/data/glossari-dades.js", encoding="utf-8").read() \
    if os.path.exists("js/data/glossari-dades.js") else ""
_gloss_total = len(re.findall(r"^\s{4}id:\s*[\"']", _gloss_txt, re.M)) \
    or len(re.findall(r"figura:\s*", _gloss_txt))
_amb_fig = len(re.findall(r"figura:\s*[\"']", _gloss_txt))
_niv = compta_figures_per_nivell()
_n1 = _niv.get(1, 0)

for doc in ("README.md", "HANDOFF-COLD-START.md"):
    if not os.path.exists(doc): continue
    txt = open(doc, encoding="utf-8").read()
    # a) glossari: cap document pot dir que hi ha figures pendents si no n'hi ha
    if _gloss_total and _amb_fig == _gloss_total:
        for patro in (r"\b26 (?:amb|figures|of 53)", r"27 (?:dels?|of) 53",
                      r"26 have a figure"):
            if re.search(patro, txt):
                err("%s encara diu que falten figures del glossari, i en tenen %d/%d"
                    % (doc, _amb_fig, _gloss_total))
                break
    # b) figures de Pista 2: la xifra ha de ser la real
    for m in re.finditer(r"(\d+) (?:de les 130 guies|/ 130 \|)", txt):
        pass
    if re.search(r"\b31\b[^\n]*(Pista 2|Pista-2)", txt) and _n1 != 31:
        err("%s diu 31 figures a Pista 2, i n'hi ha %d" % (doc, _n1))
if _gloss_total and _amb_fig == _gloss_total and _n1:
    ok("les xifres de glossari i de figures de Pista 2 als documents quadren")

# c) el bloc "Estructura" del README ha d'esmentar tot fitxer de js/ que
#    index.html carregui. Un mòdul nou que ningú documenta és exactament
#    com van entrar els itineraris temàtics: tres fitxers, zero mencions.
if os.path.exists("README.md") and os.path.exists("index.html"):
    readme = open("README.md", encoding="utf-8").read()
    idx = open("index.html", encoding="utf-8").read()
    carregats = re.findall(r'src="(js/[^"]+\.js)"', idx)
    sense = [c for c in carregats if os.path.basename(c) not in readme]
    if sense:
        err("README.md no esmenta enlloc: %s (mòduls que index.html carrega)"
            % ", ".join(sense))
    else:
        ok("tot mòdul que index.html carrega surt al README")

# --------------------------------------- dependències: guies vs itineraris
# Hi ha DOS registres de dependències al projecte i no es generen l'un de
# l'altre: el "DEPÈN de ..." que cada guia declara a la seva capçalera
# (docs/guies/GUIES-LOT-*.md, escrit a mà) i el camp `requereix` de
# js/data/itineraris-tematics-dades.js (que va sortir del graf de citacions,
# parsejant els "qNN" que apareixen dins del text de les pistes). Un DEPÈN
# declarat a la capçalera i no repetit dins de cap pista no arriba mai al graf
# — i l'itinerari acaba dient a l'alumne que no necessita res previ justament
# on sí que ho necessita. Això va passar amb 19 dependències (ago. 2026).
#
# Conveni verificat aquí: `requereix` recull les dependències que CREUEN la
# frontera d'itinerari; dins d'un mateix itinerari, qui les ha de respectar és
# el camp `ordre`.
def _deps_declarades_a_les_guies():
    dep = {}
    dirg = os.path.join("docs", "guies")
    if not os.path.isdir(dirg): return dep
    for fn in sorted(os.listdir(dirg)):
        if not fn.startswith("GUIES-LOT"): continue
        t = open(os.path.join(dirg, fn), encoding="utf-8").read()
        parts = re.split(r"^## \d+\. (q[0-9a-z_]+) ", t, flags=re.M)
        for x in range(1, len(parts), 2):
            cap = re.split(r"\*\*Pista 0", parts[x + 1])[0]   # només la capçalera
            m = re.search(r"DEP[ÈE]N de (.*?)(?:\n\n|$)", cap, re.S)
            if m:
                # els incisos en cursiva *( ... )* són comentari editorial, no
                # part de la declaració: hi poden citar preguntes SENSE que
                # això sigui una dependència (p. ex. q79 explica per què NO
                # es remet a q87). Es tallen abans de comptar.
                decl = m.group(1).split("*(")[0]
                d = sorted(set(re.findall(r"\bq\d+[a-z_]*", decl)))
                if d: dep[parts[x]] = d
    return dep

_ITIN = llegeix_global("js/data/itineraris-tematics-dades.js", "ITINERARIS_TEMATICS")
if _ITIN:
    _loc = {p["id"]: it["clau"] for it in _ITIN for p in it["preguntes"]}
    _ent = {p["id"]: p for it in _ITIN for p in it["preguntes"]}
    _dep = _deps_declarades_a_les_guies()
    _falten, _invertits, _amagades = [], [], []
    for _q, _ds in sorted(_dep.items()):
        if _q not in _loc: continue
        for _r in _ds:
            if _r not in _loc:
                _amagades.append("%s → %s" % (_q, _r))
            elif _loc[_r] != _loc[_q]:
                if _r not in (_ent[_q].get("requereix") or []):
                    _falten.append("%s → %s (%s → %s)" % (_q, _r, _loc[_q], _loc[_r]))
            elif _ent[_r]["ordre"] > _ent[_q]["ordre"]:
                _invertits.append("%s (#%d) depèn de %s (#%d), itinerari %s"
                                  % (_q, _ent[_q]["ordre"], _r, _ent[_r]["ordre"], _loc[_q]))
    if _falten:
        err("dependències DEPÈN que creuen itinerari i falten a `requereix`: %s"
            % "; ".join(_falten))
    else:
        ok("tot DEPÈN que creua itinerari consta a `requereix`")
    if _invertits:
        avis("dins d'un mateix itinerari, l'`ordre` no respecta el DEPÈN: %s"
             % "; ".join(_invertits))
    if _amagades:
        avis("guies visibles que declaren DEPÈN d'una pregunta amagada: %s"
             % "; ".join(_amagades))

# --- la còpia compilada de les guies coincideix amb el seu original? -------
# js/data/guies-dades.js NO és font: el fabrica parse_guies.py a partir dels
# nou markdown de docs/guies/. Si algú edita el .js directament, el canvi hi
# és fins que el proper parse_guies.py el reescrigui, i llavors desapareix
# sense que ningú se n'assabenti. Això va passar de debò l'agost del 2026.
# Aquí es refà la compilació en una carpeta temporal (mai es toca l'arbre de
# treball) i es compara amb el fitxer que hi ha al repositori.
def _guies_al_dia():
    import shutil, subprocess, tempfile
    if not os.path.exists("parse_guies.py") or not os.path.exists("js/data/guies-dades.js"):
        return None, "falta parse_guies.py o js/data/guies-dades.js"
    with tempfile.TemporaryDirectory() as tmp:
        os.makedirs(os.path.join(tmp, "docs", "guies"))
        os.makedirs(os.path.join(tmp, "js", "data"))
        shutil.copy("parse_guies.py", tmp)
        for n in os.listdir("docs/guies"):
            if n.endswith(".md"):
                shutil.copy(os.path.join("docs/guies", n), os.path.join(tmp, "docs", "guies", n))
        if os.path.exists("docs/manifest-figures.tsv"):
            shutil.copy("docs/manifest-figures.tsv", os.path.join(tmp, "docs"))
        r = subprocess.run([sys.executable, "parse_guies.py"], cwd=tmp,
                           capture_output=True, text=True)
        if r.returncode != 0:
            return None, "parse_guies.py falla sobre els .md actuals:\n" + (r.stdout or "")
        refet = os.path.join(tmp, "js", "data", "guies-dades.js")
        if not os.path.exists(refet):
            return None, "parse_guies.py no ha generat cap sortida"
        a = open(refet, encoding="utf-8").read()
        b = open("js/data/guies-dades.js", encoding="utf-8").read()
        return a == b, None

_igual, _motiu = _guies_al_dia()
if _motiu:
    avis("no he pogut comprovar si les guies compilades estan al dia: " + _motiu)
elif _igual:
    ok("js/data/guies-dades.js coincideix amb els markdown de docs/guies/")
else:
    err("js/data/guies-dades.js NO coincideix amb docs/guies/*.md. Algú ha editat "
        "la còpia compilada en lloc de l'original, i el canvi es perdrà al proper "
        "parse_guies.py. Mira't el diff i porta l'edició al markdown.")

# --- l'enunciat duplicat dins de solucions/qNN.html ------------------------
# Cada fitxer de solució repeteix l'enunciat de la pregunta en un
# <p class="question-entry__prompt">. És una CÒPIA de PREGUNTES.*.enunciat.ca,
# i fins ago. 2026 res no comprovava que diguessin el mateix: la comprovació de
# referències de sobre se salta solucions/ a posta. aplica-canvis.py ara les
# mou alhora, però la deriva anterior s'ha de poder veure.
_PROMPT = re.compile(r'<p class="question-entry__prompt">(.*?)</p>', re.S)
def _text_pla(x):
    import html as _h
    return re.sub(r"\s+", " ", _h.unescape(re.sub(r"<[^>]+>", "", x))).strip()

_desacords, _sense_prompt = [], []
if os.path.isdir("solucions"):
    _enun = {q["id"]: (q.get("enunciat") or {}).get("ca") for q in P}
    for _n in sorted(os.listdir("solucions")):
        if not _n.endswith(".html"):
            continue
        _qid = _n[:-5]
        if _qid not in _enun:
            continue
        _m = _PROMPT.search(open(os.path.join("solucions", _n), encoding="utf-8").read())
        if not _m:
            _sense_prompt.append(_qid); continue
        if _text_pla(_m.group(1)) != _enun[_qid]:
            _desacords.append(_qid)
if _sense_prompt:
    avis("solucions sense l'enunciat a la capçalera: %s" % " ".join(_sense_prompt))
if _desacords:
    avis("l'enunciat de solucions/qNN.html no coincideix amb preguntes-dades.js a: %s. "
         "Cal decidir quina versió val i igualar-les (compte: canviar només la "
         "capçalera pot deixar el cos de la solució parlant d'una altra cosa)."
         % " ".join(_desacords))
else:
    ok("l'enunciat duplicat a solucions/ coincideix amb preguntes-dades.js")

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
