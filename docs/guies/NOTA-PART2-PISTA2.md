# Nota — Part 2: 31 gràfics nous a Pista 2 (fig-179 a fig-209)

Les 31 guies que l'anàlisi (`ANALISI-GRAFICS-NOUS.md`) identificava amb
benefici clar ara tenen una figura pròpia a Pista 2 (nivell intern 1),
a més de la que ja tenien a Pista 3. **Amb això, les dues parts del pla
original (47+31=78 figures) queden completes.**

## 1. Convenció seguida

Mateixa convenció que sempre a les guies: **tinta = donat/establert,
sanguina = el que aquesta pista concreta hi afegeix** — a diferència de
la Part 1 (imatges d'enunciat), que és només tinta. Cada figura mostra
un moment visual **genuïnament diferent** del que Pista 3 ja mostrarà —
comprovat cas per cas contra la figura existent abans de dissenyar la
nova, no donat per fet.

## 2. Errors reals trobats i corregits durant la revisió

Sis casos, cadascun aplicant una lliçó ja apresa o revelant-ne una de
nova:

- **Configuració geomètrica inventada en lloc de real** (q27_implicit,
  fig-187): el primer intent dibuixava un sol cercle arbitrari. Contrastat
  contra la figura de Pista 3 ja existent (fig-058), la configuració real
  és **tres cercles iguals mútuament tangents** (un per vèrtex del
  triangle). Resolt **numèricament** (`scipy.optimize.brentq`), no
  estimat a ull — la mateixa disciplina que ja s'havia fet servir a la
  Part 1 per a la propietat focal de Dandelin.
- **Dos pentàgons que se solapaven en lloc de compartir una aresta**
  (q33, fig-190): el text deia explícitament "comparteixen una aresta
  sencera"; el primer intent (dues rotacions independents) només
  s'hi assemblava. Reconstruït amb una **reflexió geomètrica real**
  respecte de la recta que conté l'aresta compartida.
- **Un arc de compàs que voltava pel sentit llarg** (q86, fig-202): en
  triar la finestra angular per dibuixar l'arc entre els dos punts de
  tall (un compàs des de B, cas SSA), el primer càlcul cobria 276° (quasi
  tota la circumferència) en lloc dels 84° reals que connecten els dos
  punts pel camí curt — detectat només en renderitzar-ho i mirar-ho, no
  per error de fórmula (els dos punts de tall eren correctes; l'error
  era de quin arc dibuixar-hi entre ells). Corregit calculant
  explícitament quin dels dos sentits és el curt.
- **Dos casos més d'incidència no complerta** (q17, q40_implicit): un
  punt que havia d'estar sobre un semicercle/cercle, calculat des de la
  fórmula ideal en lloc del traç real amb `pointAtAngle` — el mateix
  patró, ara ja aplicat per defecte des del principi en la resta de
  figures d'aquest lot.
- Múltiples talls de marge (d7, d12, d13, e1, e11, e13, e14) — cadascun
  detectat mirant la imatge renderitzada.

## 3. Integració tècnica

- **`js/data/preguntes-dades.js` no s'ha tocat** — la Part 2 és
  contingut de guia, no d'enunciat.
- **31 fitxers `docs/guies/GUIES-LOT-N.md`** editats: la línia
  `**Pista 1[...].**` de cada pregunta afectada ara porta
  `→ \`fig-NNN.png\`` afegit, seguint exactament el mateix format que
  Pista 2 (MD) ja feia servir per a la figura existent. Repartides entre
  8 fitxers de lot diferents (1, 2, 3, 4, 6, 7, 8, 9, 10), segons a
  quin lot pertany originalment cada pregunta.
- **`docs/manifest-figures.tsv`**: 31 files noves (179–209), numeració
  contínua sense solapar-se amb la Part 1 (132–178).
- **`js/data/guies-dades.js` regenerat** via `parse_guies.py`
  (`problemes: 0`) i **verificat rigorosament, guia per guia, que
  només el camp de figura de nivell 1 ha canviat** a les 31 preguntes
  afectades — cap altra guia, cap altre nivell, cap text tocat.

## 4. Verificació

- `python3 verifica_projecte.py` → `Tot correcte.` (36 comprovacions).
- Playwright sobre les **130 guies senceres**: 4 passos, peu visible,
  cap imatge trencada, 0 errors JS.
- Comprovació dirigida: les **31 preguntes de la Part 2** mostren de
  debò una figura al segon pas (Pista 2) quan es revela seqüencialment
  — no només que el camp de dades existeix, sinó que la interfície real
  la pinta.

## 5. Estat final

**Les dues parts completes: 47 gràfics d'enunciat nous (Part 1) + 31
gràfics de Pista 2 nous (Part 2) = 78 figures noves**, sobre les 131 de
guia que ja hi havia. Total de figures al projecte: 131 (guia) + 78
(Part 1+2, dins del mateix espai de numeració 132–209) — en realitat
132–178 són d'enunciat (Part 1) i 179–209 són de guia Pista 2 (Part 2),
totes seguint la numeració contínua fig-001…fig-209.

## 6. Fitxers d'aquest lliurament

```
docs/guies/figures-part2-D.html / -clean.html   lot D (16 figures, q03..q53)
docs/guies/figures-part2-E.html / -clean.html   lot E (15 figures, q54..q126)
docs/guies/NOTA-PART2-PISTA2.md                 aquest fitxer
assets/img/pistes/fig-179.png … fig-209.png     31 figures noves publicades
docs/guies/GUIES-LOT-1.md   (q14,q22,q25,q95 -- 4 referencies)
docs/guies/GUIES-LOT-2.md   (q10,q45,q86 -- 3 referencies)
docs/guies/GUIES-LOT-3.md   (q51,q53,q54,q55 -- 4 referencies)
docs/guies/GUIES-LOT-4.md   (q08a,q29,q70,q73 -- 4 referencies)
docs/guies/GUIES-LOT-6.md   (q03,q17,q18a,q27_implicit,q31,q33,q40_implicit -- 7 referencies)
docs/guies/GUIES-LOT-7.md   (q63 -- 1 referencia)
docs/guies/GUIES-LOT-8.md   (q69,q72 -- 2 referencies)
docs/guies/GUIES-LOT-9.md   (q104 -- 1 referencia)
docs/guies/GUIES-LOT-10.md  (q118,q119,q121,q123,q126 -- 5 referencies)
docs/manifest-figures.tsv                       31 files noves (179-209)
js/data/guies-dades.js                          regenerat sencer (130 guies)
```
