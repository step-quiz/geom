# Nota de lliurament — Lot 9

## 1. Què hi ha

Disset guies noves, figures 099–115 (numeració global, cap reutilitzat).
Preguntes, en ordre del llibre: q91, q92, q93, q94, q99, q100, q101,
q102, q103, q104, q105, q106, q107, q108, q109, q110, q111. Font:
`docs/guies/figures-09.html`, `docs/guies/GUIES-LOT-9.md`.

**Primer lot de geometria projectiva i còniques.** Fins ara, geometria
sintètica i trigonomètrica. Aquest bloc introdueix vocabulari
completament nou (punt a l'infinit, punt de fuga, raó doble, focus,
esferes de Dandelin) però **cap moviment nou**: els catorze moviments
que calen ja existien (`redueix-al-conegut`, `contraexemple`,
`cas-limit`, `audita-la-demostracio`, `distingeix-casos`, `invariant`,
`dues-maneres`, `construeix-per-definir`, `un-altre-pla`,
`identitat-com-a-figura`).

**A diferència de la resta del projecte, aquí l'ordre del llibre no es
pot retocar per conveniència pedagògica.** q99→q101→q102→q106 construeixen
la raó doble de manera acumulativa (cadascuna reutilitza literalment el
càlcul de l'anterior), i q109 (esferes de Dandelin) depèn de la
identificació feta a q107. Vaig comprovar que cap reordenació feia
falta abans d'escriure — a diferència del lot 8, aquí no hi ha cap
canvi respecte de la proposta original.

**Avís 3D repetit a totes les guies que ho necessiten** (q91, q92, q93,
q100, q101, q102, q103, q104, q105, q106, q107, q109): "un angle recte
no es veu recte en una projecció en perspectiva."

**Sobre q94 i q109 (mateixa el·lipse, preguntes diferents).** Totes
dues tracten el cas dels focus d'una el·lipse, però en direccions
oposades: q94 (2D, dificultat 1) parteix de la definició per deduir que
un cercle és el cas amb els dos focus fosos; q109 (3D, dificultat 3,
esferes de Dandelin) parteix de la geometria del con per DEMOSTRAR que
la secció té focus. Les guies no tracten l'una com a resum de l'altra;
q109 remet a q94 explícitament com el seu cas límit, mai a l'inrevés.

## 2. Fets matemàtics verificats numèricament abans d'escriure'ls

Cap d'aquests es va donar per fet a ull — tots comprovats amb un càlcul
concret abans d'entrar a la guia corresponent:

- **q91**: factor de dilatació = cos(angle entre plans). Amb 60° i un
  segment de 8 unitats: projecció de 4 unitats exactes.
- **q93**: longitud de tangent des d'un punt extern a una esfera,
  Pitàgores sobre el triangle O-T-P. Amb distància 10 i radi 6:
  tangent = 8, la mateixa per a totes les tangents des del mateix punt.
- **q99/q101/q106 (raó doble)**: invariància sota projecció central
  comprovada NUMÈRICAMENT (no només algebraica): quatre punts a
  distàncies 0,2,5,9 sobre una recta, projectats des d'un punt exterior
  cap a una segona recta amb orientació arbitrària — raó doble
  35/27 abans i després, coincidint als 10 decimals que dona la
  simulació en punt flotant.
- **q100**: factor d'ampliació entre dos plans paral·lels segons la
  posició del punt de projecció. Verificat que el factor canvia de
  signe (capgirament) exactament quan el punt de projecció queda entre
  els dos plans, i no quan hi queda fora — amb tres posicions numèriques
  concretes del punt de projecció.
- **q109 (esferes de Dandelin)**: la propietat focal (PF₁+PF₂ constant)
  comprovada amb una simulació 3D completa (con d'obertura 30°, pla de
  tall inclinat 20°, esferes trobades resolent la tangència
  numèricament amb `scipy.optimize.brentq`) — la suma surt constant
  (≈12,856) per a 400 punts mostrejats sobre tota la corba de tall, no
  només per a un parell de punts triats a mà.
- **q111 (diamant/rombe)**: costat del rombe = √(A²+B²) = c (distància
  centre-focus). Aquest va costar-me més d'una lectura del croquis
  original abans de fixar-lo bé — v. §3.

## 3. Coses de les quals no estic segur

- **q99 i q109, totes dues "Can you work out the details of this
  proof?"**: l'enunciat és idèntic i genèric (sense figura pròpia al
  llibre) a les dues pàgines (156 i 173). He interpretat que cadascuna
  es refereix a la demostració immediatament anterior al llibre en
  aquell punt — la invariància de la raó doble per a q99, Dandelin per
  a q109 — perquè és l'única lectura que dona contingut matemàtic
  concret a cadascuna per separat. Si el text del llibre lliga
  l'enunciat a una prova diferent de la que he assumit, caldria
  revisar-ho.
- **q111, identificació de "the diamond"**: la imatge font
  (`q111_page175_hyperbola_diamond.png`) mostra un rombe amb només els
  vèrtexs SUPERIOR i INFERIOR marcats amb punt (no els laterals). Vaig
  provar diverses lectures abans de quedar-me amb l'actual: el rombe
  amb els vèrtexs de la hipèrbola com a cantonades superior/inferior i
  els punts on les tangents als vèrtexs tallen les asímptotes com a
  cantonades laterals — costat = √(A²+B²) = c, que dona un 3-4-5 net amb
  A=3,B=4. Estic segur que la identitat matemàtica és correcta i
  interessant; el que no puc confirmar sense el text del llibre és si
  "the focal constant" hi és literalment c (distància centre-focus) o
  si el llibre fa servir aquell nom per a una altra cosa (per exemple
  2a, la resta focal — que NO coincideix amb el costat del rombe en
  general). He triat la lectura que fa la figura certa, no la que fa
  qualsevol igualtat certa.
- **q108 (llanterna)**: és l'única pregunta d'aquest bloc amb un
  experiment físic literal en lloc d'una construcció geomètrica. La
  figura hi tria tres inclinacions concretes de paret (90°, 42°, 18°)
  només per il·lustrar les tres famílies; no pretén ser una recreació
  exacta d'un feix cònic real (el con de llum d'una llanterna real no
  té un angle d'obertura fix i conegut).
- Cap sospita de `dificultat` mal etiquetada en aquest lot.

## 4. Bugs reals trobats i corregits durant el dibuix (mai publicats)

- **fig-099 (dilatació entre plans)**: la primera versió dibuixava la
  projecció (sanguina) exactament superposada a la línia de tall negra
  —invisible per construcció geomètrica, no per error de color. Corregit
  desplaçant el peu de la perpendicular a una alçada pròpia, de manera
  que el triangle rectangle complet (L, L·cosθ, θ) es vegi com a tal.
- **fig-101 (tangents a l'esfera)**: assignació accidental
  (`hd.handDot(O.x=0,0,...)`) en lloc de crida — JavaScript vàlid
  però geomètricament sense sentit; no hauria fet caure el render (cap
  error JS), només hauria mogut punts en silenci. Detectat abans de
  renderitzar, en repassar el codi, no per la imatge.
- **fig-104 (plans paral·lels, punt entre/fora)**: la primera versió
  triava un segment simètric (mateix punt mig) per als dos casos, de
  manera que el capgirament del cas "O entremig" quedava invisible —
  el segment capgirat ocupava exactament el mateix rang que l'original.
  Corregit fent el segment ASIMÈTRIC (dos punts P,Q amb etiquetes
  pròpies) perquè l'intercanvi d'ordre es vegi.
- **fig-107 (vèrtex que fuig a l'infinit)**: primera versió amb el
  punt C construït a un factor d'extensió que el situava fora del
  canvas (y=−373 en coordenades locals). Corregit posant C sobre el
  mateix segment O–B, a prop d'O, en lloc d'extrapolar B–O més enllà
  d'O.
- **fig-112, fig-113**: captions de tres línies tallades pel marge
  inferior en la primera versió (alçada de canvas calculada sense
  marge per al peu de text). Corregit ampliant canvas i recalculant
  `translate`.
- Varis ajustos menors de superposició d'etiquetes (F₁/F₂ a fig-113,
  P a fig-113, "punt de fuga" a fig-108/109) detectats només mirant el
  PNG renderitzat, no evidents al codi.

## 5. Publicació i integració

- Nou ajudant `docs/publish_figures_lot9.py`, que reutilitza
  `publish_one()` de `publish_figures.py` sense modificar-lo (aquest
  fitxer és específic del rework del lot 5 i no calia tocar-lo).
- `publish_figures_lot9.py`: esborrat del segell per diferència de
  renders, blanqueig crema→blanc — mateix algorisme exacte, verificat
  visualment (fig-099 i fig-113) que el fons surt blanc pur i el segell
  ha desaparegut sense deixar geometria real esborrada.
- **Correcció de ruta a mitja publicació**: vaig publicar inicialment a
  `assets/img/` (arrel) en lloc de `assets/img/pistes/`. Detectat abans
  de tancar el lliurament, comprovant on vivien realment les 98 figures
  existents (`js/data/guies-dades.js` només hi guarda el nom de fitxer
  nu, `fig-NNN.png`, sense ruta — calia mirar on eren les altres per
  saber on anaven les noves). Corregit movent els 17 fitxers al
  directori correcte abans de la verificació final.
- `docs/manifest-figures.tsv`: 17 files noves (099–115), `lot`=9,
  `rev`=0.
- `parse_guies.py`: afegida l'entrada del lot 9 a `LOTS`.
  `python3 parse_guies.py` → `problemes: 0`, 114 guies generades.
  **Verificació de no-regressió**: comparat el `guies-dades.js`
  regenerat contra la còpia d'abans de tocar res — només s'hi han
  AFEGIT els 17 ids nous (q91...q111); cap de les 97 entrades existents
  ha canviat (comparació camp a camp, no només comptatge).
- `python3 verifica_projecte.py` → `Tot correcte.` (36 comprovacions,
  0 avisos, 0 errors) — inclou la comprovació que totes les figures
  referenciades hi són i que segueixen `fig-NNN.png`.
- `README.md` actualitzat: 97→114 de 130 guies, 98→115 figures, comptador
  de preguntes restants 33→16.
- Full de contacte generat en DOS fitxers (`contactes-09-a.png`,
  `contactes-09-b.png`; 4260 px i 4008 px d'alçada) en lloc d'un de sol,
  perquè la pila completa de les 17 figures numerades passava de 8000 px
  (8256 px). Dividit entre fig-107 i fig-108 (final natural del bloc de
  raó doble, abans d'entrar a còniques), no a la meitat mecànica.

## 6. Fitxers d'aquest lliurament

```
docs/guies/figures-09.html         font que regenera les 17 figures
docs/guies/figures-09-clean.html   variant amb stampNum buit (pas de publicació)
docs/guies/GUIES-LOT-9.md          les 17 guies
docs/guies/NOTA-LOT-9.md           aquest fitxer
docs/guies/contactes-09-a.png      full de contacte, part 1 (fig-099..107)
docs/guies/contactes-09-b.png      full de contacte, part 2 (fig-108..115)
docs/publish_figures_lot9.py       script de publicació d'aquest lot
docs/manifest-figures.tsv          actualitzat (+17 files)
parse_guies.py                     actualitzat (+ entrada del lot 9)
assets/img/pistes/fig-099..115.png disset figures noves publicades
js/data/guies-dades.js             regenerat (+17 entrades, cap altra tocada)
README.md                          comptadors actualitzats (114/130, 115 figures)
```
