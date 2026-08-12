# Nota de lliurament — Lot 6

## 1. Què hi ha

Setze guies noves, figures 054–069 (numeració global, cap reutilitzat).
Preguntes: q04, q18a, q19, q20, q27_implicit, q40_implicit, q31, q32, q33,
q07, q17, q21, q24, q30, q35, q03 — exactament la llista proposada i
aprovada, sense canvis. Font: `docs/guies/figures-06.html`,
`docs/guies/GUIES-LOT-6.md`.

**Moviment nou:** `recompte-o-induccio` (q03), ja anticipat com a probable
al HANDOFF §2.2. Justificació: q03 demana comptar quines combinacions de
polígons regulars sumen exactament 360° a un vèrtex — no és "redueix al
conegut" (no hi ha cap resultat previ del qual derivar-ho directament) ni
"contraexemple" (no es refuta res, es classifica exhaustivament). És
literalment un recompte de casos, i complementa q08b (el mateix recompte
en 3D, amb "menor que 360°" en lloc de "igual a 360°").

La resta reaplica moviments ja establerts: `redueix-al-conegut` (q04,
q18a, q24, q30), `identitat-com-a-figura` (q19, q20, q33), `dues-maneres`
(q27_implicit, q40_implicit), `dilatacio` (q32), `invariant` (q07),
`definicio-i-absurd` (q21), `separa-i-reorienta` (q17),
`construeix-per-definir` (q35), i `simetria-i-demostra` (q31, reaplicat
d'un lot anterior amb aquest mateix nom).

## 2. Com encaixen entre si (no és una llista arbitrària de 16)

Aquest lot té més dependències internes que els anteriors, perquè el bloc
de pàgines 25–58 conté dos grups temàtics força cohesionats:

- **q19→q20** i **q27_implicit→q40_implicit**: cadascuna és literalment
  "el mateix truc, un pas més enllà" de l'anterior.
- **q31→q32→q33**: la família del pentàgon auri. q31 estableix (per
  angles) que els triangles que surten de les diagonals del pentàgon són
  tots semblants; q32 fa servir aquesta semblança per trobar la mida del
  pentàgon interior del pentagrama; q33 dona una tercera demostració
  (després de q38 i de q31/q32) de la mateixa identitat d² = d+1. Les tres
  guies s'esmenten explícitament entre si als seus "i després".
- **q04→q03**: q04 dona la fórmula de l'angle d'un polígon regular; q03 la
  fa servir com a eina per al recompte de mosaics. Calia lliurar-les
  juntes o en aquest ordre perquè q03 hi depèn directament.
- **q07** reaplica la mateixa estrella {5/2}/{8/3} de q05 (ja fet), amb un
  angle de mirada diferent (el gir total, no l'angle de la punta).

## 3. Decisions i simplificacions, per figura

- **fig-028 no es toca aquí** — cap referència creuada d'aquest lot amb el
  lliurament 5 (rework), són independents.
- **q27_implicit / q40_implicit (fig-058, fig-059).** Preguntes sense
  enunciat verbal ("alguns problemes es parlen sols" / "dos dels meus
  preferits"): calia una Pista 0 pròpia que expliqués què demana el
  dibuix, tal com preveu el HANDOFF §9 per a aquest tipus de pregunta.
  **fig-059, panell 1:** l'escaneig original (`q40_page58_favorite_circle_
  square.png`) sembla mostrar un petit detall addicional per sobre del
  quadrat inscrit (una mena de pestanya estreta entre el costat superior i
  l'arc) que no he sabut interpretar amb confiança després de mirar-lo
  diverses vegades — l'he dibuixat com el quadrat inscrit **estàndard**
  (4 vèrtexs sobre la circumferència), la lectura més segura i la que fa
  la pregunta resoluble amb Pitàgores sense inventar-hi res. Si el detall
  del pestanya és matemàticament rellevant, cal que algú amb el llibre a
  la mà m'ho digui i ho reviso. **fig-058, tercer panell** (quatre cercles
  dins un cercle gran): es redibuixa fidel a l'escaneig però **sense cap
  anotació**, deliberadament — la configuració sembla necessitar més eines
  (probablement el teorema de Descartes dels cercles, fora de l'abast dels
  moviments establerts) i no he volgut forçar-hi una construcció dubtosa.
  Ho dic explícitament a la Pista 2 del text.
- **q31 (fig-060).** Vaig verificar numèricament (Python, coordenades
  exactes d'un pentàgon regular) tots els angles dels triangles A, B, C
  abans de dibuixar cap marca: els tres tenen exactament els angles
  36°-36°-108°, i els dos triangles laterals no etiquetats (els que
  responen la segona pregunta, "per què els grans són idèntics") són
  congruents amb angles 36°-72°-72°. Ho dic perquè marcar angles a mà
  sense aquesta verificació és exactament el tipus d'error que el document
  tècnic adverteix que cal evitar (§6.2 "Debug geometria per separat de
  l'estil" hi aplica també als angles, no només a les coincidències).
- **q33 (fig-062).** La primera versió d'aquesta figura situava els dos
  pentàgons "a ull" (aproximant on es tocaven) i els vaig haver de refer
  amb la posició EXACTA calculada (apotema i orientació concretes perquè
  dos vèrtexs caiguessin exactament a (0,±s/2)) després de veure que la
  versió a ull no compartia aresta de veritat. Documentat com a pas
  intermedi corregit, no com a error que hagi arribat a publicar-se.
- **q03 (fig-069).** Mateix tipus de correcció: la primera versió
  col·locava els hexàgons "a prop" d'un vèrtex compartit sense que hi
  toquessin realment. Reescrit amb una funció `polyAtVertex` que calcula
  la posició exacta perquè un vèrtex del polígon caigui a l'origen donat
  un angle i una amplada de falca — ara els polígons toquen de veritat el
  vèrtex compartit, i el cas que falla mostra una escletxa real de 30°.
- **q17 (fig-064).** Vaig descartar deliberadament dibuixar la dissecció
  completa (retallar i recol·locar peces): és fàcil equivocar-se en una
  dissecció concreta sense un llibre de referència al costat, i un error
  aquí seria un error matemàtic real, no una imprecisió pedagògica. La
  figura es limita a la part que sé que és correcta amb certesa (la
  construcció de √(ab) per mitjana geomètrica, teorema de Tales), i la
  Pista 3 explica en paraules —no en dibuix— com continua la dissecció,
  amb la condició (a<4b) sota la qual el mètode de dos talls funciona.
- **q21 (fig-065).** Primer disseny (descartat): una graella p×p partida en
  3 franges per a un p genèric — matemàticament enganyós, perquè només
  funciona quan p ja és múltiple de 3 (circular: no demostra res). Refet
  amb tres casos concrets (p=3,4,5) mostrant que només p=3 es parteix net
  en tres grups iguals — il·lustra el fet correcte (comprovació per casos
  mòdul 3) sense pretendre ser una prova visual general que no ho és.

## 4. Bugs reals detectats i corregits DURANT el dibuix (no publicats mai)

- **`stampNum` als panells múltiples.** La funció reinicialitza
  `ctx.setTransform` abans de dibuixar el número, així que ignora
  qualsevol `ctx.translate` previ: cridar-la un cop per panell (fig-058,
  fig-059, fig-069) feia que els 2-3 números es dibuixessin superposats al
  mateix punt absolut del canvas. Corregit cridant `stampNum` una sola
  vegada, al final, per figura sencera.
- **Caixa 3D (fig-055) i pentàgon A/B/C (fig-060) sortien tallats pel
  marge** per un `ctx.translate` mal calculat (no vaig comptar l'extensió
  cap amunt/avall abans de triar-lo). Corregit ampliant el marge i
  recalculant `translate` a partir del radi/alçada reals de cada figura,
  no a ull.
- **Ratlletes d'igualtat mal aplicades (fig-068).** Vaig marcar amb
  ratlleta els segments "x" i "y" d'un segment partit de manera
  desigual — la notació del projecte diu que una ratlleta és una
  afirmació d'igualtat, i x≠y en general. Substituït per punts simples
  (sense afirmar cap igualtat).
- **Segell fora de lloc (fig-066).** Únicament estètic: el vaig deixar a
  dalt per descuit en lloc de baix a l'esquerra; corregit.

## 5. Publicació

Mateix procediment que al lliurament 5: `publish_figures.py` (esborrat del
segell per diferència de renders, blanqueig crema→blanc). Verificat
visualment que no en queda cap rastre a les 16 imatges publicades.

## 6. Integració

- `docs/manifest-figures.tsv`: 16 files noves (054–069), `lot`=6, `rev`=0.
- `parse_guies.py`: afegida l'entrada del lot 6 a `LOTS`.
  `python3 parse_guies.py` → `problemes: 0`, 68 guies generades.
  **Verificació de no-regressió:** comparat el `guies-dades.js` regenerat
  contra la còpia d'abans de tocar res — només s'hi han AFEGIT els 16 ids
  nous; cap de les 52 entrades existents ha canviat.
- `python3 verifica_projecte.py` → `Tot correcte.` (36 comprovacions).
- Playwright sobre `file://index.html#<id>`, **les 68 guies amb guia**
  (no només les 16 noves): 4 passos, cap imatge trencada, peu visible a
  totes. 0 fallades, 0 errors JS.
- `README.md` actualitzat: 52→68 de 130, 53→69 figures.

## 7. Coses de les quals no estic segur

- **fig-059, panell 1** — el detall no resolt de l'escaneig original,
  descrit a la secció 3.
- **fig-058, tercer panell** — deixat sense resoldre a propòsit (probable
  teorema de Descartes dels cercles, fora dels moviments establerts).
- **q17** — la guia només cobreix la construcció de √(ab); la dissecció
  concreta en peces (el "com" final) queda només en text, no en figura,
  per evitar publicar una dissecció que podria estar malament. Si l'owner
  té el text del llibre a mà i pot confirmar quin mètode concret hi
  proposa, valdria la pena revisar-ho en un lot futur.
- **Cap sospita de `dificultat` mal etiquetada** en aquest lot.

## 8. Fitxers d'aquest lliurament

```
docs/guies/figures-06.html         font que regenera les 16 figures
docs/guies/figures-06-clean.html   variant amb stampNum buit (pas de publicació)
docs/guies/GUIES-LOT-6.md          les 16 guies
docs/guies/NOTA-LOT-6.md           aquest fitxer
docs/guies/contactes-06.png        full de contacte, ordre de guia, números visibles
docs/manifest-figures.tsv          actualitzat (+16 files)
parse_guies.py                     actualitzat (+ entrada del lot 6)
assets/img/pistes/fig-054..069.png setze figures noves publicades
js/data/guies-dades.js             regenerat (+16 entrades, cap altra tocada)
README.md                          comptador actualitzat (68/130)
```
