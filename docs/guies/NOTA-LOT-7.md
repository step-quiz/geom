# Nota de lliurament — Lot 7

## 1. Què hi ha

Catorze guies noves, figures 070–083 (numeració global, cap reutilitzat).
Preguntes: q43, q59, q62, q63, q48, q50, q57, q58, q61, q64, q65, q67,
q66, q68 — exactament la llista proposada i aprovada. Font:
`docs/guies/figures-07.html`, `docs/guies/GUIES-LOT-7.md`.

El bloc més difícil del roadmap: majoritàriament 3D, majoritàriament
dificultat 3. Ordre alterat respecte de l'ordre de pàgina del HANDOFF,
seguint `pedagogical-assessment-geom.md` §11.1: q43 (Pedoe) i q59/q62
(Grünbaum-adjacent, sòlid dins de sòlid) s'avancen davant de la resta. El
clúster de Pappus (q65, q67, q66, q68) es manté consecutiu, tal com
demana el HANDOFF §9 (q65/q67 defineixen el centroide, q66/q68
n'apliquen la definició).

**Avís 3D a totes les guies que ho necessiten**: "un angle recte no es
veu recte en una projecció en perspectiva", mateixa redacció que ja va
funcionar a q25.

Moviments reutilitzats, cap d'inventat: `dues-maneres`, `redueix-al-
conegut`, `distingeix-casos`, `cas-limit`, `construeix-per-definir` — tots
ja establerts en lots anteriors.

## 2. q64 — nota important sobre una lectura inferida

L'enunciat de q64 ("What is the perimeter of a region formed by a moving
stick?") no porta cap escaneig ni text addicional del llibre. Vaig
resoldre'l a partir del camp intern `_notaClassificacio`
("raonament d'envolupant, moderat"), que apunta inequívocament al
problema clàssic de l'escala (o bastó) que rellisca amb els dos extrems
sobre una paret i un terra perpendiculars — l'envolupant d'aquesta
família de posicions és un astroide.

**Verificat numèricament en Python abans d'escriure res** (integració
numèrica de l'arc, 2 milions de punts): la longitud d'un quart d'astroide
és exactament 1,5×L, on L és la llargada del bastó. La guia ho fa servir
com a comprovació (L=2 → perímetre 7) però **no en dedueix la fórmula**,
perquè la deducció completa fa servir càlcul infinitesimal, fora de les
eines d'aquest quadern — ho dic explícitament dins de la mateixa guia
(Pista 3), no només aquí.

**Si aquesta lectura no és la de l'enunciat real del llibre, cal
corregir-ho** — és l'única guia d'aquest lot construïda sense cap
material font directe.

## 3. Fets matemàtics verificats numèricament abans d'escriure'ls

Per evitar publicar un error matemàtic real (no només una imprecisió
pedagògica), vaig comprovar en Python, abans de redactar cap guia:
- Arc d'un quart d'astroide = 1,5×L (integració numèrica).
- Volum del sòlid de Steinmetz (dos cilindres perpendiculars) = 16/3 r³
  (integració numèrica de la secció quadrada de Cavalieri, coincident amb
  la fórmula clàssica).
- Ràtio superfície esfera / superfície del seu cilindre tancat = 2/3
  exacte (Arquimedes).
- Volum del frustum per resta de piràmides, coincident amb la fórmula
  directa (h/3)(A₁+A₂+√(A₁A₂)).

## 4. Bugs reals trobats i corregits durant el dibuix (mai publicats)

- **5 figures sortien tallades pel marge** (fig-070: un dels dos cercles
  fora de canvas; fig-071: cub tallat per dalt; fig-074: vèrtex del
  frustum prolongat fora de canvas; fig-078: cilindre tallat per la
  dreta) — tots per `translate`/mida de canvas mal calculats, corregits
  recalculant els marges a partir de l'extensió real de cada figura, no
  a ull.
- **Una línia sobrant a fig-073**: un intent de "no-op"
  (`lineWidth:0`) per mantenir l'abast d'una variable es dibuixava
  igualment (`hand-draw.js` aplica un gruix mínim), deixant una ratlla
  grisa espúria al mig del panell. Eliminada.
- **Orientació confusa a fig-079** (bastó lliscant): la primera versió
  situava la paret i el terra amb l'origen a dalt a l'esquerra (per la
  convenció y-avall del canvas), fent que "el terra" es dibuixés a DALT
  de la imatge i "la paret" a l'esquerra — tècnicament correcte però
  visualment confús. Redefinit amb la cantonada a baix a l'esquerra,
  orientació intuïtiva (terra a baix, paret amunt).

## 5. Publicació i integració

- `publish_figures.py`: esborrat del segell per diferència de renders,
  blanqueig crema→blanc. Verificat visualment sobre mostres.
- `docs/manifest-figures.tsv`: 14 files noves (070–083), `lot`=7, `rev`=0.
- `parse_guies.py`: afegida l'entrada del lot 7 a `LOTS`.
  `python3 parse_guies.py` → `problemes: 0`, 82 guies generades.
  **Verificació de no-regressió**: comparat el `guies-dades.js`
  regenerat contra la còpia d'abans de tocar res — només s'hi han AFEGIT
  els 14 ids nous; cap de les 68 entrades existents ha canviat.
- `python3 verifica_projecte.py` → `Tot correcte.` (36 comprovacions).
- Playwright sobre `file://index.html#<id>`, **les 82 guies amb guia**:
  4 passos, cap imatge trencada, peu visible, control de valoració
  present a totes. 0 fallades, 0 errors JS.
- `README.md` actualitzat: 68→82 de 130, 69→83 figures.

## 6. Coses de les quals no estic segur

- **q64** — tota la secció 2 d'aquesta nota. La més important a
  confirmar de tot el lot.
- **q57** (volums dels poliedres regulars) — la guia només treballa el
  mètode (piràmides des del centre) sobre tetraedre i octaedre com a
  exemple; no calcula els cinc volums. Consistent amb com el projecte ja
  tracta altres preguntes de "n casos, un mètode".
- **fig-077** (Steinmetz): la secció quadrada es marca a UNA sola alçada
  representativa, no s'anima ni es mostra a diverses alçades — decisió
  deliberada per no sobrecarregar la figura, coherent amb com fig-050
  (q60) ja tracta el mateix tipus de construcció.
- Cap sospita de `dificultat` mal etiquetada en aquest lot.

## 7. Fitxers d'aquest lliurament

```
docs/guies/figures-07.html         font que regenera les 14 figures
docs/guies/figures-07-clean.html   variant amb stampNum buit (pas de publicació)
docs/guies/GUIES-LOT-7.md          les 14 guies
docs/guies/NOTA-LOT-7.md           aquest fitxer
docs/guies/contactes-07.png        full de contacte, ordre de guia
docs/manifest-figures.tsv          actualitzat (+14 files)
parse_guies.py                     actualitzat (+ entrada del lot 7)
assets/img/pistes/fig-070..083.png catorze figures noves publicades
js/data/guies-dades.js             regenerat (+14 entrades, cap altra tocada)
README.md                          comptador actualitzat (82/130)
```
