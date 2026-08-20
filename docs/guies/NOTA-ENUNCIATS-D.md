# Nota — lot D: 8 gràfics d'enunciat nous + 3 preguntes amagades

Revisió de les 16 preguntes que es van quedar sense imatge d'enunciat a la
Part 1 (`docs/guies/NOTA-PART1-ENUNCIATS.md`), un cop excloses les que ja
estaven a `EXERCICIS_AMAGATS` (q21, q35, q84, q87, q88 — no calia il·lustrar-
les). De les 11 restants, l'owner va donar instrucció explícita per a
cadascuna: 8 s'il·lustren amb una imatge nova, 3 passen a `EXERCICIS_AMAGATS`
en lloc d'imatge. Comptador: **114 → 122 de 130 preguntes amb gràfic
d'enunciat; 12 → 15 preguntes amagades.**

Amb aquest lot, **totes les preguntes sense imatge d'enunciat són,
exactament, preguntes amagades** (`q21 q35 q67 q84 q87 q88 q102 q106`) — cap
pregunta reachable des de la llista, "Anterior/Següent" o l'itinerari es
queda mai sense imatge.

## 1. Les 8 imatges noves

| Pregunta | Instrucció rebuda | Resolució |
|---|---|---|
| q53 | "Copia el dibuix de la primera pista que tingui dibuix" | `imatge.fitxer` apunta directament a `pistes/fig-194.png` (nivell 1 de la seva pròpia guia) — **no** s'ha duplicat el fitxer, només se n'ha referenciat la ruta (`assets/img/` + `pistes/fig-194.png` resol correctament, v. §2). Nota: aquesta figura SÍ porta sanguina (és una figura de pista, no d'enunciat) — única excepció coneguda a la convenció "només tinta" de la Part 1, feta a consciència perquè la instrucció ho demanava literalment. |
| q63 | "Dibuixa un cilindre, simplement. Aprofita un cilindre d'un altre exercici" | fig-210: mateix codi EXACTE (mateixes coordenades) que la meitat dreta de fig-154 (ENUN-q61, `figures-enunciats-B.html`) — un cilindre sol, sense l'esfera del costat. |
| q65 | "Dibuixa una figura qualsevol, amb el seu centroide marcat" | fig-211: un triangle escalè (sense relació amb el rectangle de la pista real) amb el centroide (mitjana dels tres vèrtexs) marcat amb un punt i etiquetat. |
| q75 | "Dibuixa dos triangles diferents qualssevol" | fig-212: dos triangles de forma clarament diferent, sense cap relació d'àrea o perímetre suggerida — les mides reals que resolen la pregunta no hi apareixen. |
| q77 | "Recupera el dibuix del pentàgon regular i de la seva diagonal" | fig-213: pentàgon regular ABCDE amb una sola diagonal (AC). **No** és el pentagrama de fig-061 (q32) — aquell ja marca en sanguina el pentàgon petit que resol una pregunta diferent; una diagonal sola és el punt de partida neutre que aquesta demana. |
| q94 | "Dibuixa un cercle sense el seu centre, i al seu costat, una el·lipse" | fig-214: cercle sense cap marca de centre + el·lipse, cap dels dos amb focus marcats — la resposta de la pregunta és "on cauen els focus", per això no es marca res. |
| q99 | "A quina demostració es refereix? Pots recuperar alguna imatge?" | v. §3 més avall — no és una referència a una altra pregunta. |
| q115 | "Dibuixa una el·lipse i una hipèrbola i també els diàmetres respectius" | fig-216: el·lipse (a=170,b=100) i hipèrbola (a=110,b=130, mateixos paràmetres EXACTES que ENUN-q116/fig-176) l'una al costat de l'altra, cadascuna amb el segment vèrtex-a-vèrtex ("diàmetre") marcat — sense focus ni distàncies (això ja ho fa fig-119, Pista 2). |

Totes 7 imatges noves (fig-210 a fig-216) numerades continuant la seqüència
global de figures del projecte (última existent: 209) — mai es reutilitza un
número. Font: `docs/guies/figures-enunciats-D.html` / `-clean.html`, mateix
mecanisme exacte que Part 1 (lots A/B/C): `hand-draw.js` + `comu.js`,
`node docs/render.js`, i el mateix `publish_figures.py`
(`erase_stamp_by_diff` + `whiten_background`) ja usat per als lots anteriors
— cap eina nova.

## 2. q99 — quina demostració?

La Pista 0 de la pròpia guia de q99 ho diu explícitament: "una comprovació
algebraica completa... que la raó doble de quatre punts A,B,C,D sobre una
recta és exactament la mateixa que la dels quatre punts A′,B′,C′,D′ que
resulten de projectar-los des d'un mateix punt O sobre una altra recta." No
és una referència a una pregunta anterior (ni q98, que és sobre el·lipses amb
fil i xinxetes, sense relació) — és la demostració de la invariància de la
raó doble sota projecció central, presentada en prosa al llibre en aquell
punt (pàg. 156) i que la pregunta demana "treballar-ne els detalls".

fig-215 dibuixa exactament aquest enunciat: punt O, quatre punts A,B,C,D
sobre una recta, i les seves projeccions A′,B′,C′,D′ sobre una segona recta
— sense cap fórmula ni sanguina (a diferència de fig-103, la pròpia Pista 2
de q99, que sí que porta l'àrea del triangle OAC anotada en sanguina i que,
per tant, no serveix tal qual per a l'enunciat). Els punts projectats es
calculen per intersecció real (interpolació lineal des d'O), no a ull, així
que O, cada punt i la seva projecció són genuïnament col·lineals — verificat
numèricament abans de publicar.

## 3. Les 3 preguntes amagades

q67, q102 i q106 passen a `EXERCICIS_AMAGATS` (v. `js/ui/llista.js`) en lloc
de rebre una imatge — instrucció explícita, literal ("aquesta pregunta passa
a ser hidden" / "aquesta qüestió és hidden"). Cap canvi de contingut més
enllà d'això: continuen accessibles per enllaç directe (`#q67`, etc.) amb la
seva guia completa, exactament igual que la resta d'`EXERCICIS_AMAGATS`.

## 4. Errors trobats i corregits durant la revisió

- **fig-216 sortia retallada pel marge del llenç**: les asímptotes de la
  hipèrbola (que s'estenen fins a y≈±272 relatiu) no cabien en un llenç de
  400px d'alçada pensat només per a l'el·lipse del mateix canvas. Detectat
  mirant el PNG renderitzat (no assumit correcte pel simple fet de no donar
  error de consola — mateixa disciplina de sempre), corregit ampliant el
  llenç a 940×620 i recalculant el translate dels dos panells.
- **fig-210, un cas real d'incidència no complerta** (reportat per l'owner
  després de revisar la primera versió): les dues verticals del cilindre
  connectaven la coordenada IDEAL de cada el·lipse (`2*r2,0` / `2*r2,2*r2`),
  no el punt REAL del seu traç dibuixat — amb `irregularity:0.03` el traç
  real no hi passa exactament, i la vertical dreta no tancava bé amb
  l'el·lipse inferior. Corregit llegint `pointAtAngle(0)`/`pointAtAngle(π)`
  de cada el·lipse (mateixa tècnica que `NOTA-PART1-ENUNCIATS.md` §3 ja
  documenta) — ara les dues verticals tanquen exactament amb totes dues
  el·lipses, no només visualment "prou a prop".
- **fig-215, dos problemes reals** (reportats per l'owner): (1) la recta
  inferior portava el wobble per defecte (2.2), massa ondulada per llegir-se
  com una recta neta — reduïda a 0.5; (2) els quatre punts A′,B′,C′,D′ (i,
  per coherència, també A,B,C,D) es col·locaven a la coordenada IDEAL de
  cada recta, no al traç real amb wobble — amb el wobble original, alguns
  queien visiblement fora de la línia dibuixada. Corregit llegint
  `pointAtT()` del segment real de cada recta per a cada punt, exactament
  la mateixa disciplina que `NOTA-PART1-ENUNCIATS.md` §3 documenta per a
  q98/q100/q101 ("llegir el punt real amb pointAtT(), mai la fórmula
  ideal").
- **fig-214, petició de contingut, no un error**: l'owner va demanar
  afegir els dos focus de l'el·lipse (sense etiqueta) — vocabulari general
  d'una el·lipse qualsevol, no la resposta de q94 (que és sobre ON cauen
  els focus d'un CERCLE). El cercle es queda sense cap marca de centre,
  exactament com abans.

## 5. Verificació

- `python3 verifica_projecte.py` → `Tot correcte.` (35 comprovacions —
  l'única entrada d'ERRORS és `FALTA: build_preguntes_dades.py`, preexistent
  i documentada des de fa diverses rondes: script arxivat conscientment,
  no una regressió d'aquest lliurament).
- Revisió visual de les 7 imatges noves, una per una, abans de copiar-les a
  `assets/img/`.
- Playwright: les 8 imatges noves/reassignades carreguen (`naturalWidth > 0`)
  a la pregunta corresponent; `q67`, `q102` i `q106` no apareixen enlloc que
  llisti o suggereixi preguntes (llista, "Anterior/Següent", suggeriments de
  l'itinerari) i continuen accessibles per enllaç directe amb normalitat.
- `README.md` i `HANDOFF-COLD-START.md` actualitzats: comptadors d'imatges
  (114→122) i de preguntes amagades (12→15).

## 6. Fitxers d'aquest lliurament

```
docs/guies/figures-enunciats-D.html / -clean.html   font de les 7 figures noves
docs/guies/NOTA-ENUNCIATS-D.md                      aquest fitxer
assets/img/fig-210.png … fig-216.png                7 figures noves publicades
js/data/preguntes-dades.js                          camp imatge afegit/canviat a 8 preguntes
js/ui/llista.js                                     EXERCICIS_AMAGATS +q67 +q102 +q106
README.md, HANDOFF-COLD-START.md                    comptadors actualitzats
```
