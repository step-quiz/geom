# Auditoria de rigor matemàtic — les 130 guies

Ago. 2026. S'han llegit senceres les 130 guies (4 pistes + comprovació +
"i després") i s'ha **recalculat cada número de cada comprovació**.
Aquest fitxer és alhora el resultat de l'auditoria i el registre del que
se n'ha corregit: la columna que importa és *estat*.

**Criteri aplicat.** El llistó no és "rigor de facultat": és el que el
projecte ja s'exigeix a si mateix als seus millors moments. `q64` diu
literalment que la longitud de l'astroide "es demostra amb eines de fora
d'aquest quadern; aquí la guia arriba fins a RECONÈIXER i CONSTRUIR
l'envolupant, no fins a demostrar-ne la llargada". `q89` avisa que un
argument ràpid del tipus "és simètric, doncs..." no és una demostració
vàlida. `q95` demana a l'alumne que assenyali on la seva demostració fa
servir la hipòtesi. **Aquest és el llistó**, i és bo.

**Cap correcció ha afegit formalisme.** Un alumne de 15 anys no necessita
èpsilons; necessita frases certes. Totes les correccions són prosa
planera, i la majoria fan la guia *més* interessant: dir "això no ho hem
demostrat, i mira per què costa" motiva més que amagar-ho.

**Balanç.** De 130 guies, 112 eren correctes tal com estaven. Els
arguments de `q95` (tangent per absurd), `q55` (l'escala que mai s'acosta
a la diagonal), `q75` (Heron amb dues ternes), `q109` (esferes de
Dandelin), `q99` (invariància de la raó doble) i `q15` (auditar la pròpia
demostració de q14) són bons de veritat.

---

## Rectificació — quatre acusacions retirades

La primera versió d'aquest fitxer deia que `q21`, `q43`, `q58` i `q24`
deixaven la segona meitat del seu enunciat sense resposta. **Era fals**,
i l'error era de mètode: el volcat amb què es van llegir les guies
imprimia les pistes i la comprovació però **no l'"i després"**, que és
precisament on aquestes quatre responen.

| | On respon la segona meitat |
|---|---|
| `q21` | "I després": √2+√3 racional ⟹ (√2+√3)²=5+2√6 racional ⟹ √6 racional, contradicció pel mateix argument |
| `q43` | "I després": tres cercles, mateixa idea (sectors menys triangles) amb el comptatge d'inclusió-exclusió esbossat |
| `q58` | "I després": declara explícitament que tres cilindres queden fora d'aquest quadern |
| `q24` | "I després": dona la parametrització (m²−n², 2mn, m²+n²), declarada com a més enllà del que demana el quadern |

Cap de les quatre s'ha tocat. **Lliçó de procés:** qualsevol revisió de
contingut d'aquest projecte ha de llegir els sis blocs d'una guia, no
quatre. Una guia aquí no acaba a la comprovació.

---

## A · Afirmacions falses — 8 trobades, 8 corregides

| | Deia | Diu ara | Estat |
|---|---|---|---|
| `q102` | NO, no tots els quadrilàters són iguals projectivament | **Reescrita sencera.** SÍ totes dues vegades: quatre punts en posició general es porten a qualssevol altres quatre. La llibertat s'acaba al **cinquè** punt, no al quart — el contrast bo amb q101, que la versió anterior tenia invertit. Ancorada en una foto d'un terra de rajoles, que *és* una projecció central | fet |
| `q65` | El centroide és "el punt mitjà del costat oposat a l'eix"; comprovació 24π ≠ 12π | És el **centre** del rectangle. Pappus 12π = cilindre 12π. El 24π hi és ara com l'error que s'avisa | fet |
| `q06` | 4 angles; comparats amb els 900° de l'heptàgon sencer | **5** trossos (4 diagonals en fan 5), que reconstrueixen **un** angle interior: 5×180/7 = 900/7 ≈ 128,57° | fet |
| `q117` | Dilatar y=x²/4 per 2 dona p=1/4, focus a (0,1/4) | p=**2** (y=x²/8), focus a **(0,2)** — coherent amb la fórmula p′=k·p de la seva pròpia Pista 3 | fet |
| `q97` | El camí fa A′B′ "per a qualsevol elecció dels punts de contacte" | El camí fa el mateix que la **poligonal** A′→P→Q→B′ per a qualsevol elecció; i només val A′B′ quan P i Q cauen damunt del segment. Sense això no hi havia res a minimitzar | fet |
| `q116` | Els dos angles valen "exactament 138,75°" | **≈141,3°** (o 38,7° segons el sentit de la tangent), amb el pendent 9x/(16y)=1,25 recalculat i la comprovació que P és a la corba | fet |
| `q118` | "...**espera**, FD no cal que sigui vertical"; P=(3, 9/4); punt mitjà de FD = (3,0) | Correcció en veu alta eliminada; P=(3, **9/8**); punt mitjà (**1,5**, 0). S'hi afegeix la comprovació que PF=PD=25/8 | fet |
| `q70` | El ventall des d'un vèrtex val "per a qualsevol polígon simple" | **Convex**. I un "i després" nou que converteix el forat en lliçó: dibuixa un polígon en forma de fletxa, mira les diagonals fugir a fora, i entén que el resultat pot ser més general que la demostració | fet |

---

## B · Condició necessària presentada com a demostració completa — 3 trobades, 3 corregides

És el patró més interessant, perquè és **exactament el que les guies
existeixen per ensenyar**: la diferència entre descartar i construir.

- **`q08b`** (poliedres regulars). El recompte d'angles prova "no n'hi ha
  més de cinc", no "n'hi ha aquests cinc". La Pista 3 ho distingeix ara
  explícitament i l'"i després" en fa un patró amb nom: *descartar tots
  els casos impossibles no és el mateix que construir els possibles.*
- **`q03`** (mosaics). Mateix cas i més sever: hi ha configuracions de
  vèrtex que sumen 360° i que després no s'estenen a tot el pla. La guia
  separa ara "la roseta és possible en un vèrtex" de "el mosaic sencer
  existeix", i l'"i després" remet a q08b marcant que allà les cinc
  supervivents sí que donen sòlid i aquí no totes donen mosaic.
- **`q01`** (centre de l'equilàter). La concurrència de les tres medianes
  s'afirmava ("no és un accident del dibuix") i no es demostrava enlloc.
  Ara s'hi demostra amb l'argument del mirall: *doblega pel plec d'una
  mediana, les altres dues s'intercanvien, el punt on es creuen ha de
  quedar-se sobre el plec.* A més, la comprovació ja no exigia una
  proporció 2/3 que cap pista dedueix — ara demana comprovar el que sí
  s'ha demostrat, i declara que la posició exacta del punt és una altra
  pregunta.

**Derivada de B3:** "la mediana des del vèrtex d'un isòsceles també n'és
l'altura" es feia servir sense demostrar a `q01`, `q26` i `q83`. Es
demostra ara **un sol cop** (q01, Pista 1: dos triangles congruents pels
tres costats, dos angles iguals que sumen 180°), i q26 i q83 hi remeten.

---

## C · La guia responia menys del que pregunta l'enunciat — 3 reals, 3 corregides

*(Eren 7 a la primera versió; quatre eren error meu — v. la rectificació
de més amunt.)*

- **`q29`** — l'enunciat del llibre demana **mesurar** diagonals i àrees;
  la guia només comptava diagonals i triangles. Ara dona la diagonal
  curta de l'hexàgon (s√3), la llarga (2s), l'àrea ((3√3/2)s² ≈ 2,598s²)
  i el mètode per a l'octàgon.
- **`q30`** — la Pista 1 preguntava quants tipus de diagonal hi ha i no
  es responia mai. Ara: **cinc**, totes de la mateixa fórmula
  2R·sin(k×15°) amb k=1..6 → 0,518 / 1 / 1,414 / 1,732 / 1,932 / 2 amb
  R=1 (la tercera és exactament √2 i la sisena el diàmetre — bones per
  comprovar). També s'hi corregeix la Pista 2, que deia "un dels dotze
  triangles del ventall" quan des d'un vèrtex en surten deu.
- **`q105`** — l'enunciat diu "espai projectiu" i la guia responia pel
  **pla**. Ara avisa que a l'espai de tres dimensions dues rectes que
  s'encreuen segueixen sense trobar-se, amb la comprovació de dos llapis
  que no es poden posar damunt d'una mateixa taula imaginària.

---

## D · Eines fora d'abast usades en silenci — 4 trobades, 4 corregides

El projecte ja sabia fer-ho bé (`q64`, `q17`, `q89`). Aquestes quatre no
ho feien:

- **`q120`** — "la tangent té pendent 2p" era una derivada sense dir-ho.
  Ara s'obté **sense càlcul**: la tangent és la recta que talla en un sol
  punt, o sigui la que fa que x²−mx+(mp−p²)=0 tingui arrel doble;
  discriminant zero dona (m−2p)²=0. Àlgebra de segon d'ESO.
- **`q56`** — el producte mixt es presentava com d'ús corrent. S'hi afegeix
  un segon camí que no necessita res: les quatre cantonades que sobren
  són piràmides de volum 1/6 cadascuna, 4/6 en total, i el tetràedre és
  1 − 2/3 = 1/3 del cub.
- **`q62`** — "integra (suma) aquestes àrees" sense marcar la frontera.
  Ara redueix el casquet a cilindre menys tronc de con (q48) i declara
  explícitament que la formalització del pas és fora del quadern, com a
  `q64`.
- **`q121`** — la Pista 0 prometia "sense retòrica d'infinitèsims" i la
  Pista 3 feia un pas al límit sense justificar-lo. Ara compleix la
  promesa amb la fórmula exacta: la suma val 1/3 + 1/(2n) + 1/(6n²) per a
  cada n, i *"si algú et diu que l'àrea val 0,34, li pots ensenyar un n
  concret que ho desmenteix; l'únic número que no es pot desmentir així
  és 1/3"*.

---

## E · Precisió i etiquetes — corregides

- **`q126`** — una hèlix irracional sobre el tor **no "omple"** la
  superfície: hi passa tan a prop com vulguis de qualsevol punt. Una
  corba no pot arribar a ser una superfície, per molt que doni voltes.
- **`q08a`** — "el grup de simetries complet del cub, d'ordre 24": 24 són
  les **rotacions**; amb reflexions són 48.
- **`q111`** — el rombe s'escrivia amb els eixos intercanviats respecte de
  l'orientació estàndard de x²/a²−y²/b²=1. Ara (a,0), (0,b), (−a,0),
  (0,−b). El resultat √(a²+b²) no en quedava afectat.
- **`q12`** — `moviment` era `contraexemple` en una **demostració
  directa** (paral·lelogram amb diagonals iguals ⟹ rectangle). Corregit a
  `redueix-al-conegut` a `manifest-figures.tsv`. No és cosmètic: el motor
  de `js/nucli/itinerari.js` fa servir `moviment` per suggerir repassos,
  i una etiqueta falsa fa que dues coses diferents es recomanin com si
  fossin la mateixa.

**Restes d'edició que arribaven a l'alumne, netejades:** `q110`
(comprovació que començava "el punt (5,4/3·√(25−9))... més senzill:"),
`q90` (Pista 1 que remetia a "q90 mateix", la pregunta que s'està
llegint — substituït per la demostració en dues línies del quadrilàter
cíclic des de l'angle inscrit de q42), `q08c` (llista de guions que
`neteja()` aplanava en una sola línia il·legible, reescrita com a
paràgrafs), `q20` (majúscula perduda enmig de frase).

**Errates de llengua:** `es couen` (3 ocurrències, cap de les quals volia
dir "coure"), `punet`, `raons doubles`, `et estalviarà`, `Antic de
saber-ho`. I les tres paraules partides pel wrap del `.md` —"calcular-
ne", "semi- esfera", "parteix- lo"— arreglades a l'arrel: eren un bug de
`neteja()` a `parse_guies.py`, no tres errates independents.

---

## Queda obert

Res d'això és fals; són decisions de contingut que val la pena prendre
conscientment.

- **`q102` s'hauria de contrastar amb el llibre font.** La guia nova és
  matemàticament correcta, però la pregunta original pot voler dir una
  altra cosa. Si el llibre demanava el que sembla, la guia nova hi
  respon; si no, cal ajustar-la.
- **"Dilatació" vol dir dues coses.** A `q77` i `q117` és escalat
  uniforme; a `q112` i `q91` és escalat diferent a cada eix. Com que
  `moviment` és una taxonomia que mou recomanacions, convindria un terme
  per a cada cosa.
- **`q45`** parla de "cilindre (generalitzat)" i només tracta el cilindre
  recte de base circular.
- **`q80`** dedueix àrea = (1/2)ab·sin C amb l'altura caient dins del
  triangle; el cas obtús es resol a `q87` i no s'hi remet.
- **`q37`** dona per fet que el sistema perímetre/àrea té solució real.
  La té sempre (el discriminant surt positiu per a qualsevol s), però la
  guia no ho comprova ni ho diu.
- **`q18a`** dedueix V=l·w·h comptant cubs unitat, cosa que només val
  directament per a costats enters.
- **`q16`** escriu decimals amb apòstrof ("8'5") mentre la resta del
  corpus fa servir la coma.

---

## Com es publica

Tot el que s'ha tocat viu a `docs/guies/GUIES-LOT-*.md` i a
`docs/manifest-figures.tsv`. Res de `js/`, `css/` o `index.html` no ha
canviat per aquesta auditoria. Per publicar:

```bash
python3 parse_guies.py      # docs/guies/*.md -> js/data/guies-dades.js
python3 verifica_projecte.py # ha de dir "Tot correcte."
```
