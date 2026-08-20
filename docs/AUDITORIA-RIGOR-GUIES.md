# Auditoria de rigor matemàtic — les 130 guies

Ago. 2026. S'han llegit senceres les 130 guies (4 pistes + comprovació +
"i després" cadascuna) i s'ha recalculat **cada número de cada
comprovació**. Aquest fitxer és el resultat.

**Criteri aplicat.** El llistó no és "rigor de facultat": és el que el
projecte ja s'exigeix a si mateix als seus millors moments. `q64` diu
literalment que la longitud de l'astroide "es demostra amb eines de fora
d'aquest quadern; aquí la guia arriba fins a RECONÈIXER i CONSTRUIR
l'envolupant, no fins a demostrar-ne la llargada". `q89` avisa que un
argument ràpid "és simètric, doncs..." no és una demostració vàlida.
`q95` demana a l'alumne que assenyali on la seva demostració fa servir la
hipòtesi. **Aquest és el llistó.** Tot el que segueix són llocs on el
projecte no s'hi arriba ell mateix.

**El que NO és un defecte.** Cap correcció d'aquest fitxer demana afegir
formalisme. Un alumne de 15 anys no necessita èpsilons; necessita frases
certes. Gairebé totes les correccions proposades són **una o dues frases
en llenguatge planer**, i la majoria fan la guia *més* interessant, no
més àrida: dir "això no ho hem demostrat, i mira per què costa" és més
motivador que amagar-ho.

**Balanç general.** De 130 guies, **112 són matemàticament correctes tal
com estan**. La qualitat mitjana és alta: els arguments de `q95`
(tangent per absurd), `q55` (l'escala que mai s'acosta a la diagonal),
`q75` (Heron amb dues ternes), `q109` (esferes de Dandelin), `q99`
(invariància de la raó doble) i `q15` (auditar la pròpia demostració de
q14) són bons de veritat. Els problemes es concentren, i tenen forma
reconeixible.

---

## A · Afirmacions falses (8) — cal corregir-les

Aquestes no són matisos. Un alumne que se les cregui, aprèn una cosa que
no és certa, o segueix una comprovació que no li quadrarà mai.

### A1 · `q102` — la resposta és la contrària de la correcta

La guia respon **NO** a "tots els quadrilàters són iguals projectivament?".
La resposta correcta és **SÍ**: quatre punts en posició general es poden
portar a qualssevol altres quatre en posició general (és el teorema
fonamental de la geometria projectiva). Un quadrat *sí* que es pot
projectar sobre un rectangle allargat — de fet, sobre qualsevol
quadrilàter convex. La primera raó doble no apareix fins a **cinc** punts.

L'argument de la Pista 3 tampoc se sosté pel seu compte: els quatre
vèrtexs d'un quadrilàter no estan alineats, així que no en tenen raó
doble; la raó doble del feix de quatre rectes des del punt de projecció
depèn d'on posis aquell punt, no del quadrilàter.

**Abans de reescriure-la, cal comprovar què demanava el llibre font.**
Si demanava el que sembla, la guia s'ha de refer sencera i el contrast
correcte és triangles/quadrilàters *sí* ↔ cinc punts *no*.

### A2 · `q65` — el centroide està mal situat, i la comprovació no tanca

Pista 3: *"el punt que fa funcionar el teorema resulta ser el punt mitjà
del costat oposat a l'eix — el centre de gravetat de tota la vida del
rectangle"*. Les dues meitats de la frase es contradiuen: el centre del
rectangle és a distància 1 de l'eix, el punt mitjà del costat oposat és a
distància 2. **El correcte és el centre.**

La comprovació escriu `àrea(6) × 2π × distància(2) = 24π` i tot seguit
diu que cal comparar-ho amb `12π`. Amb la distància correcta (1) surt
`6 × 2π × 1 = 12π`, que coincideix exactament amb el cilindre.

### A3 · `q06` — la comprovació compara peres amb pomes

Diu que els quatre angles del ventall (≈25,71° cadascun, 102,86° en
total) *"sumat als dos angles dels extrems del ventall hauria de
completar la suma total que ja coneixes de q70 per a n=7: 900°"*.

Tres coses malament alhora:
- 900° és la suma de **tots els set** angles interiors de l'heptàgon. El
  ventall d'un sol vèrtex només pot completar **un** angle interior:
  900/7 ≈ 128,57°.
- Des d'un vèrtex d'un heptàgon surten 4 diagonals, que parteixen l'angle
  interior en **5** sectors, no 4.
- Els dos sectors dels extrems **són del mateix tipus** que els altres
  (cadascun subtendeix un arc entre dos vèrtexs consecutius); la
  comprovació diu que "no són d'aquest tipus".

Amb 5 sectors iguals de 180/7 cadascun: 5 × 180/7 = 900/7 = 128,57° = angle
interior ✓. La comprovació correcta és aquesta, i és més bonica que la
que hi ha.

### A4 · `q117` — la comprovació contradiu la seva pròpia pista

Pista 3 estableix que una dilatació uniforme de factor *k* porta *p* a
*k·p*. La comprovació dilata `y=x²/4` (p=1) per factor 2 i conclou
"p=1/4". Amb la fórmula de la pròpia pista hauria de sortir **p=2**
(`y=x²/8`). A més, l'àlgebra intermèdia també falla pel seu compte:
`(2y)=(2x)²/4` dona `y=x²/2`, no `y=x²`. I el focus, en dilatar per 2,
va de (0,1) a **(0,2)**, no a (0,1/4).

### A5 · `q97` — la frase que tanca l'argument el destrueix

Pista 3: *"el camí A → (creuament de dalt) → (creuament de baix) → B fa
exactament la mateixa longitud que el segment recte A′B′, **per a
qualsevol elecció dels punts de contacte**"*.

Si tots els camins fessin el mateix, no hi hauria cap mínim a trobar. El
que és cert per a qualsevol elecció és que el camí `A→P→Q→B` fa el mateix
que la **poligonal** `A′→P→Q→B′`; i una poligonal és sempre ≥ que el
segment recte `A′B′`, amb igualtat només quan P i Q hi cauen a sobre.
Canviar "el segment recte A′B′" per "el camí A′→P→Q→B′" ho arregla.

### A6 · `q116` — el número de la comprovació no és el que surt

Diu que els dos angles valen "exactament 138,75°". Recalculat amb
a=4, b=3, P=(5, 9/4): la tangent té pendent 45/36 = 1,25, i els dos angles
surten **≈141,3°** (o ≈38,7° segons el sentit que triïs per a la tangent).
Iguals entre si ✓ —la propietat és certa— però el número és un altre.

### A7 · `q118` — hi ha quedat una correcció en veu alta, i dos números mal calculats

Pista 3, text publicat: *"Com que FD és vertical (D és el peu vertical de
P a la directriu horitzontal)... **espera**, FD no cal que sigui
vertical: la mediatriu de FD bisecta l'angle..."*. Un pensament a mig
corregir, servit a l'alumne. Cal deixar-hi només la versió bona.

La comprovació, a més: amb `y=x²/8`, el punt de x=3 és **(3, 9/8)**, no
(3, 9/4); i el punt mitjà de F=(0,2) i D=(3,−2) és **(1,5, 0)**, no (3,0).
Amb els valors corregits el pendent surt 3/4 i quadra amb la tangent ✓ —
la geometria és bona, els números no.

### A8 · `q70` — el resultat és cert, l'argument no val per al que diu que val

Pista 2 diu explícitament que l'argument *"ha de valer per a qualsevol
polígon simple"*. El ventall de diagonals des d'un sol vèrtex **no
funciona en un polígon còncau**: hi ha vèrtexs des dels quals algunes
diagonals se'n van fora de la figura. La fórmula (n−2)×180° sí que val per
a qualsevol polígon simple, però per una altra via.

Correcció mínima i honesta: dir "qualsevol polígon **convex**" a la Pista
2, i afegir a l'"i després" que el cas còncau és cert però necessita un
argument diferent —una frase que converteix un error en una porta oberta.

---

## B · Condició necessària presentada com a demostració completa (3)

És el patró d'error més interessant del projecte, perquè és **exactament
el que les guies existeixen per ensenyar**: la diferència entre descartar
i construir.

### B1 · `q03` — mosaics: 360° al vèrtex és necessari, no suficient

La guia acaba amb "compta quantes combinacions vàlides trobes en total".
Però hi ha 17 configuracions de vèrtex que sumen 360° i només **11**
mosaics uniformes: algunes configuracions quadren en un vèrtex i després
no es poden estendre a tot el pla. Sense dir-ho, un alumne conclou que ha
enumerat els mosaics quan només n'ha enumerat els vèrtexs possibles.

### B2 · `q08b` — poliedres regulars — **ja corregit en aquest lliurament**

Mateix patró: el recompte d'angles demostra "no n'hi ha més de cinc", no
"n'hi ha aquests cinc". La Pista 3 i la comprovació ara ho distingeixen
explícitament, i l'"i després" en fa un patró amb nom. Serveixi de model
per a B1.

### B3 · `q01` — la concurrència de les tres medianes s'afirma, no es demostra

Pista 2: *"les tres medianes semblen tallar-se en un sol punt. No és un
accident del dibuix"* — i la Pista 3 no dona cap raó, només repeteix
l'argument per a cada vèrtex per separat. Tres rectes que existeixen no
són tres rectes concurrents.

Hi ha una demostració d'una línia, i és preciosa per a aquest nivell:
*"Reflecteix la figura pel mirall que passa per una de les medianes: les
altres dues s'intercanvien, així que el punt on es tallen ha de quedar
sobre el mirall. I això val per a les tres."*

**Bonus del mateix problema:** la comprovació de `q01` demana verificar
la proporció 2/3, que cap pista no dedueix mai. Una comprovació ha de ser
verificable amb el que l'alumne acaba de fer, no amb un fet nou.

**Relacionat:** "la mediana des del vèrtex d'un triangle isòsceles també
n'és l'altura" es fa servir sense demostrar a `q01`, `q26` i `q83`. Es
demostra en una línia (dos triangles congruents per SSS, angles adjacents
iguals que sumen 180°). Val la pena fer-ho **un cop**, on primer
aparegui, i que les altres dues hi remetin.

---

## C · La guia respon una pregunta més petita que la que fa l'enunciat (6)

Cap d'aquestes és falsa. Totes deixen l'alumne amb la meitat de
l'enunciat sense tocar i **sense avisar-lo**, que és el problema: no sap
si li falta a ell o a la guia.

| | Enunciat | Què queda sense resposta |
|---|---|---|
| `q21` | "És irracional √3? **I √2 + √3?**" | La segona meitat, sencera |
| `q43` | "...**I per a tres cercles superposats?**" | La segona meitat, sencera |
| `q58` | "...**I per a tres cilindres mútuament perpendiculars?**" | La segona meitat, sencera |
| `q29` | "Es poden **mesurar** les diagonals i les àrees..." | Només compta diagonals i triangles; no en mesura cap ni calcula àrees |
| `q30` | "...diagonals i l'àrea del dodecàgon" | Dona l'àrea ✓; els tipus de diagonal es pregunten a la Pista 1 i no es responen mai |
| `q24` | "Quins rectangles tenen costats i diagonal enters?" — Pista 0 promet "la condició general" | S'atura a "mira si segueixen algun patró". La parametrització d'Euclides no hi surt |

La solució no és allargar-les totes. **En diverses, la solució correcta és
una frase a l'"i després"**: "aquesta guia només ataca la primera meitat;
la segona es fa amb la mateixa idea i te la deixo". Això és honest i
manté l'escala curta.

**Cas a part, `q105`:** l'enunciat diu "espai projectiu" i la guia respon
per al **pla** projectiu. En l'espai projectiu de dimensió 3, dues rectes
que s'encreuen segueixen sense tallar-se. La resposta "SÍ, sempre" només
és certa en el pla. Una frase ho arregla i evita un malentès que li
explotarà a l'alumne dos anys més tard.

---

## D · Eines fora d'abast usades en silenci (4)

El projecte sap fer-ho bé: `q64` i `q17` diuen explícitament què queda
fora del quadern, i `q89` fins i tot explica per què el teorema de
Steiner–Lehmus és més dur del que sembla. Aquestes quatre no ho fan.

- **`q120`** i **`q118`** — "la tangent en P té pendent 2p" és una
  derivada, sense dir-ho. A la paràbola es pot obtenir sense càlcul (la
  recta que la talla en un punt doble); si no es vol, cal dir-ho.
- **`q56`** — producte mixt i determinant 3×3, presentats com si fossin
  d'ús corrent.
- **`q62`** — "integra (suma) aquestes àrees".
- **`q121`** — la Pista 0 promet explícitament *"sense retòrica
  d'infinitèsims"* i la Pista 3 fa un pas al límit. Aquí la solució és
  fàcil i millora la guia: el que salva `q121` és que la suma **té forma
  tancada exacta** (`n(n+1)(2n+1)/6`), i per això el límit no és
  retòrica. Dir-ho és complir la promesa, no trencar-la.

---

## E · Vocabulari, etiquetes i errates (menor, però amb efectes)

**"Dilatació" vol dir dues coses diferents.** A `q77` i `q117` és
escalat uniforme; a `q112` i `q91` és escalat diferent en cada eix. Com
que `moviment` és una taxonomia real —l'usa el motor de
`js/nucli/itinerari.js` per suggerir repassos— aquesta ambigüitat no és
només d'estil: fa que dues coses diferents es recomanin com si fossin la
mateixa. Convindria un terme per a cada cosa.

**`moviment` mal assignat:** `q12` està etiquetada `contraexemple` i és
una demostració directa (paral·lelogram amb diagonals iguals ⟹ rectangle).
Mateix efecte sobre les recomanacions.

**Imprecisions d'una paraula:**
- `q126` — una hèlix irracional sobre el tor **no "omple"** la superfície:
  s'hi acosta tant com vulguis (és densa). Per a un alumne de 15 anys,
  "passa tan a prop com vulguis de qualsevol punt" és igual d'entenedor i
  és cert.
- `q08a` — "el grup de simetries complet del cub, d'ordre 24": 24 és el
  grup de **rotacions**; amb reflexions són 48.
- `q111` — el rombe s'escriu amb vèrtexs (0,a),(b,0),(0,−a),(−b,0), amb
  els eixos intercanviats respecte de l'orientació estàndard de
  x²/a²−y²/b²=1. El resultat √(a²+b²) no en queda afectat.

**Restes d'edició visibles a l'alumne:**
- `q110` — comprovació: "el punt (5,4/3·√(25−9))... més senzill:" — un
  començament abandonat.
- `q90` — Pista 1 remet a "q90 mateix", que és la pregunta que s'està
  llegint.
- `q08c` — Pista 1 té una llista de guions que `neteja()` aplana en una
  sola línia il·legible.

**Errates de llengua:** `q89` "Antic de saber-ho" (→ "Abans"); `q107` "es
couen a l'infinit"; `q109` "un mateix punet"; `q16` "et estalviarà" (→
"t'estalviarà"); `q102` "raons doubles"; `q20` majúscula perduda enmig de
frase després d'un guió.

*(Les tres errates de paraula partida —"calcular- ne", "semi- esfera",
"parteix- lo"— ja no hi són: eren un bug de `neteja()` a `parse_guies.py`,
arreglat a l'arrel en aquest mateix lliurament.)*

---

## Ordre suggerit de treball

1. **A1 (`q102`)** — primer, perquè pot exigir refer la guia sencera i
   cal consultar el llibre font.
2. **A2–A7** — sis correccions numèriques o d'una frase. Cap toca
   l'estructura. Mig matí.
3. **A8, B1, B3** — les tres del mateix tipus intel·lectual que `q08b`.
   Són les que més aporten: cadascuna converteix un forat en una lliçó
   sobre què és demostrar.
4. **C** — decidir, guia per guia, entre completar-la o declarar-ho a
   l'"i després". Recomanació: declarar-ho, en gairebé totes.
5. **D i E** — polit.

Res d'això afecta cap fitxer de `js/`, `css/` o `index.html`: tot viu a
`docs/guies/GUIES-LOT-*.md`, i es publica amb `python3 parse_guies.py`.
