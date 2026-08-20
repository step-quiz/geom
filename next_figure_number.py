#!/usr/bin/env python3
"""
next_figure_number.py — diu quin és el següent número de figura lliure.

Aquest projecte fa servir UNA seqüència numèrica global (1-209 i més) per a
totes les figures de guia i d'enunciat (mai les del glossari, la intro
"què és una demostració" o les icones de categoria, que tenen la seva pròpia
convenció de nom, no numèrica -- v. docs/manifest-figures.tsv i
README.md §"Regenerar les dades"). Un número de figura és PERMANENT: mai es
reutilitza, encara que la figura es redibuixi.

Fins ara, trobar el següent número lliure volia dir grep manual a
docs/manifest-figures.tsv + cada docs/guies/figures-*.html -- amb el risc
real de topar dos números si algun se saltava per descuit. Aquest script
automatitza exactament aquesta cerca.

Font de veritat DOBLE, creuada: docs/manifest-figures.tsv (registre de les
figures de guia) I els stampNum(ctx,h,'NNN') reals dins de cada fitxer font
docs/guies/figures-*.html / figures-part2-*.html (mai els -clean.html, que
tenen el stampNum buidat a proposit -- v. README.md §"Regenerar les dades").
Es creuen totes dues fonts perquè el manifest és un registre CURAT que es
podria desviar dels fitxers font reals; els fitxers font són la veritat
última.

Ús:  python3 next_figure_number.py
"""
import glob, os, re, sys

ARREL = os.path.dirname(os.path.abspath(__file__))
os.chdir(ARREL)

# ---------------------------------------------------------- 1. des del manifest
manifest_nums = set()
manifest_path = "docs/manifest-figures.tsv"
if os.path.exists(manifest_path):
    with open(manifest_path, encoding="utf-8") as f:
        next(f)  # capçalera
        for linia in f:
            camps = linia.rstrip("\n").split("\t")
            if camps and camps[0].isdigit():
                manifest_nums.add(int(camps[0]))
else:
    print("AVÍS: no trobo %s" % manifest_path)

# ------------------------------------------------- 2. des dels fitxers font reals
FONTS = sorted(
    p for p in (
        glob.glob("docs/guies/figures-*.html")
        + glob.glob("docs/guies/figures-part2-*.html")
    )
    if not p.endswith("-clean.html")
)
fitxer_nums = {}  # num -> fitxer on s'ha trobat (per poder assenyalar duplicats)
patro = re.compile(r"stampNum\(ctx,[^,]+,\s*'(\d{3,})'\)")
for path in FONTS:
    with open(path, encoding="utf-8") as f:
        contingut = f.read()
    for num_str in patro.findall(contingut):
        num = int(num_str)
        if num in fitxer_nums and fitxer_nums[num] != path:
            print("‼️  número %d apareix a %s I a %s -- col·lisió real" %
                  (num, fitxer_nums[num], path))
        fitxer_nums[num] = path

fitxer_nums_set = set(fitxer_nums)
tots = manifest_nums | fitxer_nums_set

# ---------------------------------------------------------------- 3. creuament
nomes_manifest = manifest_nums - fitxer_nums_set
nomes_fitxers = fitxer_nums_set - manifest_nums
if nomes_manifest:
    print("Nota: al manifest però sense stampNum trobat en cap fitxer font "
          "escanejat (%d números): %s -- 13 d'aquests (rang 1-13) "
          "s'expliquen perquè figures-01.html no té CAP stampNum (0 "
          "crides, comprovat) -- es va dibuixar abans que existís la "
          "convenció. La resta (118,120-122,125,126) no s'han pogut "
          "explicar amb aquest escaneig; no bloquegen res (el manifest ja "
          "els cobreix igualment) però convé que algú ho revisi algun dia."
          % (len(nomes_manifest), sorted(nomes_manifest)))
if nomes_fitxers:
    print("Nota: trobats en fitxers font però no al manifest (normal per a "
          "figures d'ENUNCIAT -- el manifest només registra figures de "
          "guia): %s" % sorted(nomes_fitxers))

if not tots:
    print("Cap número de figura trobat -- alguna cosa va malament, revisa "
          "els camins escanejats.")
    sys.exit(1)

seguent = max(tots) + 1
print()
print("Números de figura en ús: %d (rang %d–%d)" % (len(tots), min(tots), max(tots)))
print("SEGÜENT NÚMERO LLIURE: %d" % seguent)
