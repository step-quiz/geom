# Nota de lliurament — Lot 8

## 1. Què hi ha

Quinze guies noves, figures 084–098 (numeració global, cap reutilitzat).
Preguntes: q74, q69, q78, q83, q84, q75, q77, q87, q79, q88, q72, q85,
q81, q82, q90 — la llista proposada i aprovada, amb l'ordre intern
retocat en dos punts (§2). Font: `docs/guies/figures-08.html`,
`docs/guies/GUIES-LOT-8.md`.

**Primer lot amb trigonometria a tot el projecte.** Fins ara, geometria
purament sintètica. q78 n'és la porta d'entrada (defineix sinus i
cosinus); tota la resta de contingut trigonomètric d'aquest lot en depèn,
directament o indirectament.

**Avís 3D a les guies que ho necessiten** (q81, q82): "un angle recte no
es veu recte en una projecció en perspectiva."

## 2. Reordenació respecte de la proposta original

La llista que vas aprovar tenia q88 (angle doble) abans de q79 (teorema
del cosinus), i q82 (omplir l'espai) abans de q81 (angle diedre). En
escriure el contingut real, vaig trobar que això trencava la dependència
matemàtica:

- **q88 necessita q79.** La deducció neta de cos(2θ) (a diferència de
  sin(2θ), que surt sol per un argument d'àrees) fa servir el teorema del
  cosinus sobre el mateix triangle isòsceles — sense q79 no hi ha manera
  neta de tancar-la amb les eines d'aquest lot.
- **q82 necessita q81.** Comprovar que el tetràedre i l'octàedre omplen
  l'espai junts exigeix els valors exactes dels seus angles diedres
  (que sumen 180°) — sense q81 no hi ha res a comprovar.

Vaig fer el canvi jo mateix en lloc de preguntar, perquè és una
correcció d'ordre intern sense cap decisió de contingut nova al darrere
— el mateix criteri que ja vaig aplicar en reordenar deliveries senceres
en lots anteriors.

## 3. Fets matemàtics verificats numèricament abans d'escriure'ls

- Els dos triangles de costats (17,25,28) i (20,21,29): perímetre 70 i
  àrea 210 exactes tots dos (Heron), trobats per una cerca computacional
  entre triangles de costats enters, no inventats a ull.
- cos36° = φ/2, i cos72° = 2cos²36°−1, coincidint amb els valors
  numèrics estàndard.
- Angle diedre del tetràedre = arccos(1/3) ≈ 70,53°; de l'octàedre =
  arccos(−1/3) ≈ 109,47°; la seva suma és exactament 180°.
- Fórmula de Brahmagupta amb costats 2, 3, 4, 5: àrea = √120 ≈ 10,95.
- Centroide d'àrea i de perímetre d'un semicercle (Pappus a l'inrevés,
  com q68): 4r/(3π) i 2r/π respectivament — diferents entre si, com calia
  esperar.

## 4. Bugs reals trobats i corregits durant el dibuix (mai publicats)

Dos són conceptuals, no només estètics — val la pena distingir-los dels
simples retalls de marge:

- **fig-086 (definició de sinus/cosinus): l'angle recte marcat al vèrtex
  equivocat.** El text de la guia assumeix A i B com els dos angles
  aguts (C el recte) — la primera versió de la figura hi marcava l'angle
  recte a A mateix, contradient el seu propi text. Corregit recol·locant
  C perquè el triangle tingui de veritat l'angle recte allà (fent servir
  el teorema de Tales: C sobre la semicircumferència de diàmetre AB).
- **Mateixa figura, segon error un cop corregit el primer**: les
  etiquetes "oposat/contigu" apuntaven als costats equivocats, i la
  hipotenusa hi sortia etiquetada com a "contigu" d'un angle — la
  hipotenusa no és mai "oposada" ni "contigua" en el sentit de sinus/
  cosinus, per a cap dels dos angles aguts. Corregit recalculant quin
  costat és realment oposat/contigu a quin angle, i etiquetant la
  hipotenusa a part.
- **Diverses figures amb text tallat pel marge** (fig-086, fig-088,
  fig-097 — aquesta última perdia la fórmula numèrica sencera de la
  suma dels angles diedres). Corregit ampliant canvas i `translate`.

## 5. Publicació i integració

- `publish_figures.py`: esborrat del segell per diferència de renders,
  blanqueig crema→blanc.
- `docs/manifest-figures.tsv`: 15 files noves (084–098), `lot`=8, `rev`=0.
- `parse_guies.py`: afegida l'entrada del lot 8 a `LOTS`.
  `python3 parse_guies.py` → `problemes: 0`, 97 guies generades.
  **Verificació de no-regressió**: comparat el `guies-dades.js`
  regenerat contra la còpia d'abans de tocar res — només s'hi han AFEGIT
  els 15 ids nous; cap de les 82 entrades existents ha canviat.
- `python3 verifica_projecte.py` → `Tot correcte.` (36 comprovacions).
- Playwright sobre `file://index.html#<id>`, **les 97 guies amb guia**:
  4 passos, cap imatge trencada, peu visible, control de valoració
  present a totes. 0 fallades, 0 errors JS.
- `README.md` actualitzat: 82→97 de 130, 83→98 figures.

## 6. Coses de les quals no estic segur

- **q77** ("another technique for measuring lengths... which we used for
  the diagonal of a regular pentagon"): l'enunciat no diu explícitament
  QUIN nou context cal aplicar-hi la tècnica — he triat un exemple propi
  (triangle amb paral·lela) per il·lustrar-la, ja que l'enunciat només
  demana identificar-la i reaplicar-la, no un context concret del
  llibre. Si el llibre en dona un de específic, caldria ajustar-ho.
- **fig-097** (tetràedre + octàedre): es dibuixen separats, cadascun amb
  una aresta marcada en sanguina, en lloc de mostrar-los físicament units
  per aquella aresta en una sola figura 3D — decisió deliberada per
  mantenir-los llegibles per separat; una versió amb els dos sòlids
  realment enganxats seria més fidel però molt més densa de llegir.
- Cap sospita de `dificultat` mal etiquetada en aquest lot.

## 7. Fitxers d'aquest lliurament

```
docs/guies/figures-08.html         font que regenera les 15 figures
docs/guies/figures-08-clean.html   variant amb stampNum buit (pas de publicació)
docs/guies/GUIES-LOT-8.md          les 15 guies
docs/guies/NOTA-LOT-8.md           aquest fitxer
docs/guies/contactes-08.png        full de contacte, ordre de guia
docs/manifest-figures.tsv          actualitzat (+15 files)
parse_guies.py                     actualitzat (+ entrada del lot 8)
assets/img/pistes/fig-084..098.png quinze figures noves publicades
js/data/guies-dades.js             regenerat (+15 entrades, cap altra tocada)
README.md                          comptador actualitzat (97/130)
```
