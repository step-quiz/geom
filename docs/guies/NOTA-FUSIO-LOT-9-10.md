# Nota de fusió — Lliuraments 9 i 10 (projecte complet, 130/130)

Els dos lliuraments es van encarregar en paral·lel, a dos agents diferents,
sense contacte l'un amb l'altre (`HANDOFF-LLIURAMENT-9.md`,
`HANDOFF-LLIURAMENT-10.md`). Aquesta nota documenta la fusió real dels dos
resultats en un sol repositori — inclosa una col·lisió de numeració que
calia resoldre abans d'ajuntar-los, i que és la part més important
d'aquesta nota.

## 1. Estat de partida real (no el que deien els seus propis handoffs)

Els dos agents van rebre el projecte tal com estava **just abans** de la
resta de feina feta en paral·lel a la seva pròpia (l'ampliació del
glossari de 18 a 53 termes, l'ordre de presentació configurable, la
traducció catalana, i dues millores petites d'interfície). Cap dels dos
handoffs originals en parlava, perquè cap dels dos existia encara quan es
van escriure. Abans de fusionar res, vaig confirmar-ho directament: el
`glossari-dades.js` de tots dos ZIPs rebuts tenia 18 termes (no 53), i cap
dels dos incloïa `js/data/ordre-preguntes.js`.

**Per això la fusió NO parteix de cap dels dos ZIPs rebuts** — parteix de
l'estat de treball més avançat (amb totes les millores anteriors ja
integrades), i n'extreu NOMÉS les aportacions genuïnament noves de cada
lot: les guies, les figures, i les entrades de manifest — mai el
`glossari-dades.js`, `ordre-preguntes.js`, `preguntes-dades.js` ni cap
altre fitxer que cap dels dos agents sabia que ja havia canviat.

## 2. La col·lisió real: numeració de figures

`HANDOFF-LLIURAMENT-9.md` assignava a aquell lot les figures `fig-099` a
`fig-115` (17 números, un per pregunta, en una taula explícita).
`HANDOFF-LLIURAMENT-10.md` assignava a AQUELL lot `fig-116` a `fig-131`
(16 números, taula igual d'explícita) — precisament perquè cap dels dos
xoqués amb l'altre sense necessitat de coordinar-se.

**El lot 9 va seguir l'assignació exactament.** El lot 10 no: va numerar
les seves 16 figures noves `fig-099` a `fig-114` —el mateix rang que el
lot 9, per pura coincidència de "continuar comptant des de 98"— en lloc
del `fig-116`–`fig-131` que li tocava. La pròpia `NOTA-LOT-10.md` original
de l'agent ho confirma com una tria conscient dins d'aquella sessió (no
sabia que l'HANDOFF li havia assignat un altre rang, o no ho va llegir amb
prou cura), no un error tipogràfic puntual.

**Detectat abans de tocar cap fitxer**, comparant el contingut real (hash)
de `fig-099.png` entre els dos ZIPs: imatges completament diferents amb el
mateix nom. Si s'haguessin copiat tots dos conjunts de figures al mateix
directori sense adonar-se'n, seria una de les dues qui hauria sobreviscut
—en silenci, sense cap error visible— trencant l'altre lot sencer sense
que `verifica_projecte.py` ho detectés necessàriament de seguida (les
imatges hi són, només que són les que no toquen).

### La correcció

Totes les figures del lot 10 s'han renumerat **+17** (099→116, 100→117,
..., 114→131), en aquests llocs:

- `assets/img/pistes/fig-099..114.png` → copiades i renombrades a
  `fig-116..131.png`.
- `docs/guies/GUIES-LOT-10.md` — les 16 referències `fig-0NN.png` de cada
  Pista 2, substituïdes pel número nou.
- `docs/guies/figures-10.html` i `figures-10-clean.html` — mateixa
  substitució (el nom del fitxer de sortida el decideix el pas de
  publicació, no el codi de dibuix, així que aquí el canvi és només
  cosmètic als comentaris, però s'ha aplicat igual per coherència).
- `docs/manifest-figures.tsv` — la primera columna (número) de les 16
  files noves del lot 10.

**El que es deixa TAL QUAL, amb els números originals (099–114), com a
registre històric**: `docs/guies/NOTA-LOT-10.md` (amb una nota de fusió
afegida al capdamunt explicant-ho, sense reescriure el text original de
l'agent), `docs/guies/contactes-10.png` (full de contacte visual, les
etiquetes hi mostren els números vells), i `publish_lot10.py` (l'script
real que l'agent va executar, amb la seva llista `JOBS` original). Cap
d'aquests tres és funcional pel lloc en marxa — són documentació de com es
va fer la feina, i reescriure'ls per fer-los "coherents" amb posteritat
seria falsejar la crònica real.

## 3. Verificació feta abans de donar la fusió per bona

- **Contingut de les figures renumerades**: revisades visualment dues
  mostres (`fig-116`, la primera del lot 10 renumerada — hipèrbola i la
  seva dilatació; `fig-129`, una de les figures amb cúspides que l'agent
  documenta haver-hi trobat un bug real — hipocicloide/epicicloide) contra
  la descripció del manifest. Coincideixen.
- **Cap referència vella (099–114) sobreviu** enlloc dels tres fitxers de
  text tocats — comprovat amb una cerca automàtica dedicada, no a ull
  (la primera comprovació que vaig fer tenia un error de patró propi —
  confonia 116-119 amb números vells— corregit abans de confiar-hi).
- **131 files úniques al manifest fusionat**, numeració 1–131 sense cap
  buit ni cap repetició.
- **`parse_guies.py`** amb les entrades dels lots 9 i 10 afegides →
  `problemes: 0`, **130 guies generades**.
- **Zero regressió**: comparat el `guies-dades.js` fusionat contra la
  còpia d'abans de fusionar — només s'hi han AFEGIT els 33 ids nous
  (exactament els esperats dels lots 9 i 10); **cap de les 97 entrades
  existents ha canviat**, camp a camp.
- **`python3 verifica_projecte.py`** → `Tot correcte.` (36 comprovacions).
- **Playwright sobre les 130 guies senceres**: 4 passos, peu visible, cap
  imatge trencada. 0 fallades, 0 errors JS.
- **Comprovació dirigida del cas que hauria fallat si la renumeració
  s'hagués fet malament**: q112 (la primera pregunta renumerada) mostra de
  debò `fig-116.png` a la pàgina real; q127 (la darrera) mostra
  `fig-131.png`. Confirmat amb Playwright, no assumit.

## 4. Contingut dels dos lots — el que ja documentaven les seves pròpies notes

No ho repeteixo tot aquí (v. `docs/guies/NOTA-LOT-9.md` i
`docs/guies/NOTA-LOT-10.md` sencers), només un resum:

- **Lot 9** (17 guies, q91–q111): primer bloc de projecció i geometria
  projectiva. Cap moviment nou. L'ordre del llibre es manté estrictament
  (l'agent ho confirma explícitament) per la cadena acumulativa
  q99→q101→q102→q106 (raó doble) i la dependència q107→q109 (esferes de
  Dandelin). Fets numèrics verificats amb Python abans d'escriure, incloent
  una simulació 3D completa amb `scipy.optimize.brentq` per confirmar la
  propietat focal de Dandelin sobre 400 punts mostrejats. Dues incerteses
  de contingut assenyalades honestament (q99/q109 amb enunciat genèric
  idèntic al llibre; la identificació exacta de "the diamond" a q111).
- **Lot 10** (16 guies, q112–q127): hipèrbola/paràbola, corbes de
  moviment (espiral, hèlix, cicloides), acabant amb el bastó lliscant
  (la germana fàcil de q64, lot 7). Un moviment nou, `exhauriment`
  (anticipat com a probable al meu propi handoff). Un ajudant de dibuix
  nou, `handCurve` (corbes paramètriques amb soroll de mà), amb un bug
  real trobat i corregit (inestabilitat numèrica als punts de cúspide
  d'hipocicloides/epicicloides) — documentat amb prou detall a
  `NOTA-LOT-10.md` perquè un futur lot que reutilitzi `handCurve` en
  corbes amb cúspides sàpiga on mirar primer. Una incertesa de contingut
  important assenyalada (q120: la lectura de la figura font de tres punts
  no es va poder confirmar del tot; la guia final fa servir un argument
  relacionat però diferent del que sembla mostrar l'escaneig — marcada
  explícitament com la de confiança més baixa del lot).
- **L'avís §6.1 del lot 10**: l'agent documenta que el pas de "proposa la
  llista i espera aprovació" del protocol no es va poder complir amb un
  canal de revisió real dins d'aquella sessió, i ho anota explícitament en
  lloc de amagar-ho. Consistent amb l'esperit de tot aquest projecte
  (documentar els límits reals, no fingir que no hi han estat mai).

## 5. Estat final

**130 de 130 preguntes tenen guia — el llibre sencer.** 131 figures
publicades. `README.md` actualitzat en conseqüència.

## 6. Fitxers d'aquesta fusió

```
docs/guies/GUIES-LOT-9.md              nou, del lot 9, sense canvis
docs/guies/NOTA-LOT-9.md               nou, del lot 9, sense canvis
docs/guies/figures-09.html/-clean.html nous, del lot 9, sense canvis
docs/guies/contactes-09-a/-b.png       nous, del lot 9, sense canvis
docs/publish_figures_lot9.py           nou, del lot 9, sense canvis
docs/guies/GUIES-LOT-10.md             nou, del lot 10, RENUMERAT
docs/guies/NOTA-LOT-10.md              nou, del lot 10, + nota de fusió al capdamunt
docs/guies/figures-10.html/-clean.html nous, del lot 10, RENUMERATS
docs/guies/contactes-10.png            nou, del lot 10, sense canvis (numeros vells)
publish_lot10.py                       nou, del lot 10, sense canvis (numeros vells)
docs/guies/NOTA-FUSIO-LOT-9-10.md      aquest fitxer
assets/img/pistes/fig-099..115.png     17 del lot 9, sense canvis
assets/img/pistes/fig-116..131.png     16 del lot 10, RENOMBRATS (eren fig-099..114)
docs/manifest-figures.tsv              fusionat: base (98) + lot9 (17) + lot10 (16, renumerat)
parse_guies.py                         fusionat: entrades dels lots 9 i 10 afegides
js/data/guies-dades.js                 regenerat sencer (130 guies)
README.md                              actualitzat: 130/130, projecte complet
```
