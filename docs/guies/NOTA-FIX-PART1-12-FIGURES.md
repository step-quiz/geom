# Nota — integració de 12 correccions fetes directament per l'owner (Part 1 completa)

L'owner ha corregit 12 figures de la Part 1 (enunciats) ell mateix, en
quatre sessions consecutives, i me les ha passat com a *ground truth*.
Aquesta nota documenta la integració i, sobretot, **el que hi vaig fer
malament la primera vegada** — és la part més important d'aquest
document, a petició explícita seva.

## 1. Què s'ha integrat

12 figures: fig-136, 139, 140 (lot A), fig-153 (lot B), fig-167, 169,
170, 171, 172, 174, 176, 177 (lot C). Totes 12 verificades **idèntiques
píxel a píxel** (o amb una diferència <1% atribuïble a antialiasing,
comprovat visualment amb mapa de diferències amplificat, sense cap forma
fantasma) contra els PNG que l'owner ha lliurat.

Amb això, **la Part 1 (47 gràfics d'enunciat) queda completa i
aprovada.**

## 2. Un canvi real i delicat a `docs/hand-draw.js`

La sessió de fig-174/176/177 va trobar que la còpia de `hand-draw.js`
amb què treballava no tenia `handEllipse(...).pointAtAngle(...)` —un
mètode que una sessió ANTERIOR (fig-169) ja donava per existent— i el va
reimplementar. **Aquesta reimplementació és diferent de la que hi havia**
(llegeix l'ÚLTIMA passada dibuixada —la visible— en lloc de la primera),
i és una millora real, no un caprici: en una `handEllipse` de diverses
passades, la primera no és necessàriament la que queda visible per
sobre.

**Abans d'adoptar-la, l'he verificada contra totes les figures de guia
JA PUBLICADES que en depenen** (no només les 12 d'aquesta sessió) —
`fig-015`, `fig-020`, `fig-025`, `fig-058`, `fig-078` fan servir
`pointAtAngle` des de rondes IMPROVE anteriors. Resultat:
- 4 d'elles, diferència <1% (soroll de subpíxel, mateix criteri que
  sempre).
- **`fig-015` sí té una diferència real (1,75%)** — inspeccionada
  visualment (abans/després costat a costat + mapa de diferències): la
  construcció, les etiquetes i els punts són els mateixos, però el
  cercle base es llegeix una mica diferent (nova passada llegida en
  lloc de l'antiga), desplaçant tota la resta uns pocs píxels.

**Decisió presa**: no he tocat `fig-015.png` ni cap dels altres quatre
publicats — són fitxers PNG estàtics, i cap d'ells formava part
d'aquesta petició. El canvi a `hand-draw.js` només afecta qui torni a
RENDERITZAR aquests fitxers en el futur, no el lloc tal com està ara.
**Ho deixo escrit aquí perquè quedi clar per a la Part 2 i per a
qualsevol sessió futura**: si mai cal retocar `fig-015`, `fig-020`,
`fig-025`, `fig-058` o `fig-078`, el resultat ja no coincidirà
exactament amb el publicat actual — cal tornar a comparar contra el PNG
ja aprovat, no assumir reproducció idèntica.

## 3. Què vaig fer malament — la part que l'owner ha demanat explícitament

Sis patrons reals, cadascun amb una correcció concreta que faig meva per
a la Part 2:

**a) Solapament per confiar en coordenades declarades, no en l'extensió
real de tinta** (fig-136, fig-153). Vaig col·locar diversos sòlids
independents (tetràedre/cub/octàedre) per la seva coordenada d'origen,
no pel seu extent visual real un cop dibuixats. Correcció per a la Part
2: quan hi hagi diverses formes independents en un mateix canvas, calcular
o comprovar l'espai que ocupa cadascuna de debò abans de triar la
separació, no assumir-la a partir de la mida "nominal".

**b) Etiquetes sense comprovar-ne la col·lisió amb la tinta veïna**
(fig-139: "c" quedava dins la caixa; fig-140: "s"/"k·s" desalineades
verticalment; fig-170: "llapis" xocava amb un segment discontinu).
Correcció: després de col·locar una etiqueta, comprovar-ne explícitament
la posició contra la geometria propera —i quan hi ha diverses etiquetes
germanes (dues dimensions, dos costats), alinear-les deliberadament
(mateixa coordenada rellevant), no a ull una per una.

**c) Wobble per defecte en línies que han de llegir-se "netes"**
(fig-171, fig-172, i la ronda addicional de fig-174) — **exactament el
mateix error que la primera figura corregida per un IMPROVE en tot
aquest projecte** (fig-014, la base BC), i que se m'ha tornat a colar
diverses vegades dins de la Part 1 mateixa. Correcció, ara ja sense
excusa: qualsevol línia "estructural" llarga (eix, pla paral·lel, raig
de projecció) porta un `wobble` explícit baix (0.5–1.2) per defecte, mai
es deixa heretar el 2.2 per defecte.

**d) Tangència que sembla secant per l'abast del traç, no per la
matemàtica** (fig-176). El punt de tangència era correcte, però el
segment s'estenia prou lluny que el seu extrem entrava a la zona buida
entre les branques de la hipèrbola, donant la impressió visual de
travessar-la. Correcció: en figures de tangència, comprovar no només el
punt de contacte sinó on cauen els EXTREMS del traç respecte a la resta
de la geometria.

**e) Afegir contingut que anticipa la tècnica de resolució, en una
figura que ha de ser neutra** (fig-167) — el més important dels sis, i
el que més directament s'aplica a la Part 2. Un arc que marca una
longitud, fins i tot sense cap número, ja suggereix "compassa des
d'aquí" — la tècnica mateixa que la guia ha de revelar més tard. La
solució no era "posar l'arc al lloc correcte", era **treure'l del tot**,
perquè l'enunciat original no dona cap longitud concreta. Correcció: en
figures d'ENUNCIAT (Part 1), el llistó de neutralitat és més estricte
del que vaig aplicar — qualsevol construcció auxiliar, encara que
sembli decorativa, es revisa preguntant "això, per si sol, ja suggereix
com resoldre-ho?".

**f) Tangència entre dues corbes amb soroll independent** (fig-177) —
un cas nou, no vist abans en aquest projecte. Dues corbes matemàticament
tangents (verificat analíticament) deixen de semblar-ho quan cadascuna
es dibuixa amb el seu propi soroll aleatori independent — els traços
reals ja no coincideixen exactament al punt de contacte, encara que la
geometria ideal sí. Diferent del bug d'"incidència" (un punt sobre una
corba): aquí són **dues corbes** que s'han de tocar. Correcció: quan dues
corbes han de mantenir una relació exacta entre elles (tangència,
mateixa direcció), cal correlacionar-ne el soroll explícitament
(`pinAngles` compartits al punt de contacte + `irregularity` reduïda
localment), no confiar que la geometria ideal ja n'hi basti.

## 4. Verificació

- Les 12 figures publicades des del repositori fusionat: 11 idèntiques
  píxel a píxel, 1 (fig-169) amb <1% de soroll d'antialiasing verificat
  visualment sense forma fantasma.
- `docs/hand-draw.js`: canvi verificat compatible amb els 4 fitxers de
  guia existents que ja en depenien (fig-020, 025, 058, 078: <1% de
  soroll; fig-015: 1,75%, avaluat visualment com a desplaçament de
  subpíxel sense error geomètric, documentat com a risc futur, PNG no
  tocat).
- `python3 verifica_projecte.py` → `Tot correcte.`
- Playwright sobre les **130 preguntes i les 130 guies**: 4 passos, peu
  visible, cap imatge trencada. 0 fallades, 0 errors JS.
- `docs/manifest-figures.tsv` no calia tocar-lo (les figures d'enunciat
  no hi són registrades, només les de guia).

## 5. Estat final de la Part 1

**Completa: 47 de 47 gràfics d'enunciat, tots aprovats.** 114 de 130
preguntes tenen ja gràfic d'enunciat en total (67 escanejats + 47
dibuixats a mà).

La Part 2 (31 figures a Pista 2 de les guies) continua sense començar,
tal com l'owner ha demanat — les sis lliçons de la secció 3 s'apliquen
des del primer canvas que es dibuixi.

## 6. Fitxers d'aquest lliurament

```
docs/hand-draw.js                          pointAtAngle reimplementat (última passada)
docs/guies/figures-enunciats-A.html/-clean.html   fig-136, 139, 140
docs/guies/figures-enunciats-B.html/-clean.html   fig-153
docs/guies/figures-enunciats-C.html/-clean.html   fig-167, 169, 170, 171, 172, 174, 176, 177
assets/img/fig-136,139,140,153,167,169,170,171,172,174,176,177.png
docs/guies/NOTA-FIX-PART1-12-FIGURES.md    aquest fitxer
```
