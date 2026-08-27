# Lot 8 — quinze guies noves (pp. 103–132, centres de triangle i trigonometria)

Quinze preguntes noves. **Primer cop que hi entra la trigonometria** a tot
el projecte — fins ara, geometria purament sintètica. Per això aquest lot
necessita una seqüenciació interna pròpia, no estrictament la de pàgina
del HANDOFF: la trigonometria s'hi construeix pas a pas (q78 defineix
sinus/cosinus; tota la resta de contingut trigonomètric en depèn, directament
o indirecta). Reordenat també respecte de la proposta inicial en dos punts
concrets, per raons de dependència real trobades en escriure el contingut
(v. `NOTA-LOT-8.md` §2): q79 abans de q88 (la deducció de l'angle doble fa
servir el teorema del cosinus), i q81 abans de q82 (omplir l'espai amb
tetràedres i octàedres fa servir els angles diedres exactes).

**Avís obligatori a les guies 3D** (q81, q82): un angle recte no es veu
recte en una projecció en perspectiva.

**Moviments reutilitzats, cap d'inventat.**

---

## 1. q74 — *Do any three lengths form a triangle?*
> Tres longituds qualssevol, formen sempre un triangle?

**Moviment: cas límit.**

**Pista 0 — què has de produir.**
Una resposta de NO, amb la condició exacta que separa quan sí de quan no —
no n'hi ha prou de dir "no sempre".

**Pista 1 — prova-ho amb un cas que falla.**
1, 2, 10: intenta dibuixar-lo. Amb un compàs, traça el segment de longitud
10; després, un arc de radi 1 des d'un extrem i un arc de radi 2 des de
l'altre. Es toquen els dos arcs?

**Pista 2 — la construcció.** → `fig-084.png`
El cas 3-4-5 (els arcs es toquen, es forma un triangle) al costat del cas
1-2-10 (els arcs no arriben a tocar-se).

**Pista 3 — tanca-ho.**
Els dos arcs es toquen exactament quan la suma dels dos radis és més gran
que la distància entre els centres. Quina desigualtat, en termes dels
tres costats a, b, c (amb c el més llarg), diu això mateix?

**Comprovació.** 3,4,5: 3+4=7>5 ✓, es forma triangle. 2,3,6: 2+3=5<6,
no se'n forma cap — comprova-ho intentant-lo dibuixar amb compàs.

**I després.** El cas límit exacte (a+b=c) és un triangle "aixafat": els
tres vèrtexs alineats, àrea zero. Aquesta mateixa idea de cas límit
—una figura que es degenera en una de més senzilla just a la frontera—
reapareix a q90, quan un quadrilàter cíclic es "aixafa" en un triangle.

---

## 2. q69 — *Can you find the centroid of a semicircle? How about its centroid of perimeter?*
> Trobes el centroide d'un semicercle? I el centroide del seu perímetre?

**Moviment: dues maneres.** DEPÈN de q65/q67 (ja fets, definicions de
centroide per a Pappus).

**Pista 0 — què has de produir.**
DUES distàncies diferents (no una): la del centroide de la regió
semicircular (l'àrea) i la del centroide del seu arc (el perímetre, sense
comptar el diàmetre) — cadascuna respecte del centre del cercle, sobre el
diàmetre.

**Pista 1 — gira-ho, com a q68.** → `fig-198.png`
Si gires el semicercle (la regió) al voltant del seu diàmetre, quin sòlid
en surt? I si gires només l'arc (sense la regió)?

**Pista 2 — la construcció.** → `fig-085.png`

**Pista 3 — tanca-ho.**
Girar la REGIÓ dona una esfera sencera (volum conegut). Girar l'ARC dona
la SUPERFÍCIE d'aquesta mateixa esfera (àrea coneguda). Aplica Pappus a
l'inrevés, com a q68: iguala el volum (o la superfície) coneguts amb
(àrea, o longitud) × 2π × distància, i aïlla la distància — dues vegades,
un cop per a cada centroide.

**Comprovació.** r=3: centroide de l'àrea a distància 4r/(3π)≈1,27 del
centre. Centroide de l'arc a distància 2r/π≈1,91. Fixa't que són
DIFERENTS: el centroide d'una regió i el del seu contorn són dos punts
distints, i aquí en tens la prova amb xifres.

*(Un detall d'enunciat que val la pena decidir tu mateix: aquí s'ha pres
"el perímetre" com l'arc sol, sense el diàmetre. Si hi comptes també el
diàmetre, la longitud passa a ser πr+2r i el centroide s'acosta al centre:
et sortirà 2r/(π+2)≈0,389r. Pappus funciona igual en els dos casos —el
diàmetre és sobre l'eix i, en girar, no escombra res—, i les dues respostes
són correctes per a la seva pregunta.)*

**I després.** Que aquestes dues distàncies surtin diferents és el motiu
pel qual "el centroide" no és una sola idea sinó dues —la d'una regió i la
del seu contorn—, cadascuna amb la seva versió de Pappus: una per a volums
i una per a superfícies. q65 i q67 les construeixen amb calma; aquí en
tens, amb xifres, la raó per la qual calen totes dues.

---

## 3. q78 — *How are the sines and cosines of the two angles of a right triangle related to each other?*
> Com es relacionen els sinus i els cosinus dels dos angles d'un triangle rectangle?

**Moviment: construeix la solució a partir de la seva pròpia definició.**

**Pista 0 — què has de produir.**
Primer, la definició (sinus = costat oposat / hipotenusa; cosinus =
costat contigu / hipotenusa, per a un angle agut d'un triangle
rectangle). Després, la relació entre els sinus i cosinus dels DOS angles
aguts d'un mateix triangle rectangle.

**Pista 1 — el mateix costat, dos noms diferents.**
Un triangle rectangle té dos angles aguts, A i B (que sumen 90°, perquè
el tercer és de 90°). El costat que és "oposat" a A, és "oposat" o
"contigu" a B?

**Pista 2 — la construcció.** → `fig-086.png`

**Pista 3 — tanca-ho.**
El costat oposat a A és exactament el contigu a B, i el contigu a A és
l'oposat a B (la hipotenusa és la mateixa per a tots dos). Escriu sinA i
cosB en termes d'aquests mateixos dos costats — i compara-les.

**Comprovació.** Triangle 3-4-5, angle A oposat al costat 3: sinA=3/5=0,6,
cosA=4/5=0,8. Angle B oposat al costat 4: sinB=4/5=0,8, cosB=3/5=0,6.
Comprova que sinA=cosB i cosA=sinB.

**I després.** Com que A+B=90° sempre en un triangle rectangle, això diu
sin(θ)=cos(90°−θ) per a qualsevol angle agut θ — una identitat que faràs
servir constantment d'ara endavant.

---

## 4. q83 — *What are the sine and cosine of one-sixth of a turn?*
> Quins són el sinus i el cosinus d'un sisè de volta?

**Moviment: redueix el desconegut al conegut.** DEPÈN de q78.

**Pista 0 — què has de produir.**
Un sisè de volta = 360°/6 = 60°. Dos números concrets (o dues expressions
amb arrels), no una aproximació decimal.

**Pista 1 — parteix un triangle equilàter.**
Un triangle equilàter, costat 2, partit per la meitat des d'un vèrtex fins
al punt mitjà del costat oposat. Quin triangle rectangle en surt, i quins
costats té?

**Pista 2 — la construcció.** → `fig-087.png`

**Pista 3 — tanca-ho.**
El triangle rectangle té hipotenusa 2, un catet 1 (la meitat del costat
que has partit), i l'altre catet per Pitàgores. Que aquest triangle sigui
rectangle de veritat —és a dir, que la línia que has traçat caigui
perpendicular al costat oposat— no és cosa del dibuix: és el que es
demostra a q01 (pista 1), amb dos triangles congruents pels tres costats.
I ara vigila amb quin dels dos angles aguts és el de 60°, que és
exactament on es perd tothom. El vèrtex DES D'ON has partit el triangle ja
no en té 60°: el tall li ha partit l'angle per la meitat i n'hi ha deixat
**30°**. El de 60° és el de l'altre extrem, un dels dos vèrtexs de la base,
que el tall no ha tocat. Situa-t'hi i mira: quin catet hi és oposat, quin
hi és contigu? (Si et surt sin60°=1/2 és que t'has posat al vèrtex
equivocat i has trobat, sense voler, el sinus de 30°.)

**Comprovació.** Catets 1 i √3, hipotenusa 2: sin60°=√3/2≈0,866,
cos60°=1/2. Comprova amb Pitàgores: 1²+(√3)²=1+3=4=2² ✓.

**I després.** El mateix triangle partit et dona també, de franc, el
sinus i el cosinus de 30° (l'altre angle agut d'aquest mateix triangle
rectangle) — per la relació que acabes de trobar a q78.

---

## 5. q84 — *What is the relationship between the sine and cosine of an angle?*
> Quina relació hi ha entre el sinus i el cosinus d'un angle?

**Moviment: redueix el desconegut al conegut.** DEPÈN de q78 i de
Pitàgores, que en aquest quadern és coneixement previ: no el demostra cap
pregunta, i el glossari sí que el té.

**Pista 0 — què has de produir.**
Una identitat que valgui per a QUALSEVOL angle agut, no un parell de
xifres concretes.

**Pista 1 — torna a la definició.**
sinθ = oposat/hipotenusa, cosθ = contigu/hipotenusa. Què diu Pitàgores
sobre oposat² + contigu²?

**Pista 2 — la construcció.** → `fig-088.png`

**Pista 3 — tanca-ho.**
oposat² + contigu² = hipotenusa². Divideix tots dos costats de l'equació
per hipotenusa².

**Comprovació.** Triangle 3-4-5: sinθ=3/5, cosθ=4/5. sin²θ+cos²θ =
9/25+16/25=25/25=1 ✓, per a qualsevol dels dos angles aguts.

**I després.** Aquesta identitat (sin²+cos²=1) és la que fa possible
definir sinus i cosinus com les coordenades d'un punt que es mou sobre un
cercle de radi 1 —una manera diferent de pensar-hi que reapareixerà si
continues estudiant trigonometria més enllà d'aquest quadern.

---

## 6. q75 — *Can you find two different triangles with the same area and perimeter?*
> Trobes dos triangles diferents amb la mateixa àrea i el mateix perímetre?

**Moviment: contraexemple** (a la suposició implícita que àrea+perímetre
determinen un triangle).

**Pista 0 — què has de produir.**
Dos triangles NO congruents (costats diferents) amb exactament la mateixa
àrea i el mateix perímetre. Que existeixin ja demostra alguna cosa: a
diferència del criteri costat-costat-costat, "àrea i perímetre iguals" NO
determina un triangle únic.

**Pista 1 — converteix-ho en un problema de números.**
Amb semiperímetre s fix, la fórmula de Heron diu que l'àrea només depèn
del producte (s−a)(s−b)(s−c). Si anomenes x=s−a, y=s−b, z=s−c, el
problema es converteix en: troba dues ternes diferents (x,y,z) amb la
MATEIXA suma i el MATEIX producte.

**Pista 2 — la construcció.** → `fig-089.png`

**Pista 3 — tanca-ho.**
Amb s=35: la terna (18,10,7) dona els costats (17,25,28). Busca una altra
terna de tres nombres positius que sumin 35 i multiplicats donin el
mateix producte que 18×10×7.

**Comprovació.** (17,25,28): perímetre 70, àrea (Heron) = √(35·18·10·7) =
√44100 = 210. (20,21,29): perímetre 70 també, àrea = √(35·15·14·6) =
√44100 = 210 també. Dos triangles genuïnament diferents, mateixa àrea i
perímetre.

**I després.** Contrasta-ho amb el criteri SSS (tres costats determinen
un triangle de manera única): aquí has vist que DOS números (àrea i
perímetre junts) no basten per fer el mateix — calen tres dades
independents, no dues, per fixar un triangle.

I encara pots dir-ho més fort. Amb el llenguatge x, y, z tens només DUES
condicions —x+y+z=35 i xyz=1260— per a TRES incògnites, o sigui que et
queda un grau de llibertat sencer: no hi ha dos triangles amb perímetre 70
i àrea 210, n'hi ha **infinits**. Els dos del quadern són simplement els
dos que surten amb costats sencers. Si vols veure'n un de "lleig", prova
els costats 28,488… / 23,823… / 17,689…: perímetre 70 i àrea 210 igualment.

---

## 7. q77 — *There is actually another technique for measuring lengths, which we used for the diagonal of a regular pentagon. What is it?*
> De fet hi ha una altra tècnica per mesurar longituds, que ja vam fer servir per a la diagonal del pentàgon regular. Quina és?

**Moviment: homotècia.** DEPÈN de q31/q32/q33.

**Pista 0 — què has de produir.**
Un NOM per a la tècnica (no un càlcul nou encara): a les preguntes del
pentàgon, com es va trobar la longitud de la diagonal sense mesurar-la
directament?

**Pista 1 — torna al pentàgon.**
Allà no es va mesurar la diagonal amb un regle. El que es va fer va ser
trobar una figura semblant —més petita— amagada dins de la gran, i
plantejar una equació a partir de la proporció entre totes dues. A q33 això
és literal: la bisectriu d'un angle de la base retalla, dins del triangle
de costats d i base 1, un altre triangle amb els mateixos tres angles, i
d'igualar-ne les proporcions en surt d²=d+1. A q32 la mateixa jugada dona
el costat del pentàgon petit.

**Pista 2 — la construcció.** → `fig-090.png`
Un exemple nou, diferent del pentàgon: un triangle amb una línia
paral·lela a un costat, que en talla els altres dos i crea un triangle
petit semblant a l'original.

**Pista 3 — tanca-ho.**
La tècnica consisteix a fer servir dues figures **semblants** (una és una
versió escalada de l'altra) per obtenir una PROPORCIÓ —una equació que
relaciona longituds—, sense necessitat de Pitàgores ni de mesurar-les una
per una. És, senzillament, raonar per semblança.

Una nota de vocabulari, perquè aquí hi ha un parany de traducció. El llibre
en diu *dilation*, que en anglès és el nom de la transformació que agafa una
figura i l'escala des d'un punt fix. En català aquella transformació es diu
**homotècia**; "dilatació" és un fals amic —vol dir el que fan els metalls
amb la calor. En aquestes guies, doncs, se'n diu **homotècia**, que és el que
trobaràs a classe, i el raonament que la fa servir es diu **semblança**.

I un avís que t'estalviarà confusions més endavant: hi ha una altra
transformació que també escala, però amb un factor **diferent** per a cada
direcció —la que converteix un cercle en una el·lipse (q46) o una hipèrbola
qualsevol en una de rectangular (q112). Aquella **no** és una homotècia, i en
aquestes guies se'n diu **estirament**. La diferència no és de vocabulari: una
homotècia no canvia la forma de res i respecta angles i focus, i un estirament
sí que els canvia.

**Comprovació.** Triangle amb costats 6 i 9 des d'un vèrtex; una
paral·lela al tercer costat que talla el primer costat a 4 unitats del
vèrtex. Per semblança, talla el segon costat a 4×(9/6)=6 unitats del
mateix vèrtex.

**I després.** Aquesta mateixa idea —una proporció entre triangles
semblants, no una mesura directa— és, de fet, la idea de fons de sinus i
cosinus (q78): totes dues són proporcions que només depenen de l'angle,
precisament perquè tots els triangles rectangles amb aquell angle són
semblants entre si.

---

## 8. q87 — *How should we define the sine of an obtuse angle? Can we do it so the law of sines still holds?*
> Com hauríem de definir el sinus d'un angle obtús? Es pot fer de manera que el teorema del sinus encara funcioni?

**Moviment: construeix la solució a partir de la seva pròpia definició.**
DEPÈN de q78.

**Pista 0 — què has de produir.**
Una definició, no un càlcul: la definició de sinus de q78 (oposat/
hipotenusa) només té sentit per a un angle agut d'un triangle rectangle
—un angle obtús no en pot ser mai un. Cal decidir què vol dir sin(120°),
per exemple.

**Pista 1 — cau la perpendicular fora del triangle.**
En un triangle ABC amb l'angle C obtús, deixa caure l'alçada des d'A fins
a la RECTA que conté el costat CB. Compte: no des de C —aquella cau a
dins i no et serveix de res. Com que C és obtús, el peu cau FORA del
segment, passat C; digues-li H. Al triangle rectangle ACH, l'angle que hi
queda a C és C' = 180°−C, que sí que és agut.

**Pista 2 — la construcció.** → `fig-091.png`

**Pista 3 — tanca-ho.**
Mira l'alçada AH dues vegades. Al triangle rectangle ACH: AH = b·sin(C'),
amb b = CA. Al triangle rectangle ABH: AH = c·sin(B), amb c = AB —l'angle
que hi ha a B és el mateix B del triangle original, perquè H és a la
recta BC. Iguala-les: b/sin B = c/sin C'. Ara bé, el teorema del sinus
demana b/sin B = c/sin C. Per tant no tens elecció: sin(C) := sin(C') =
sin(180°−C) és l'ÚNICA definició que el salva. No és un caprici ni una
convenció arbitrària —és el preu exacte de voler que la fórmula no
s'hagi de partir en dos casos.

**Comprovació.** Triangle amb C=120°, a=CB=5, b=CA=4. L'alçada des d'A
val 4·sin60°≈3,464 i el peu H cau 4·cos60°=2 més enllà de C, o sigui a
5+2=7 de B; Pitàgores dona c=√(7²+3,464²)=√61≈7,810. Ara els tres
quocients: c/sin C = 7,810/0,866 ≈ 9,02; sin B = 3,464/7,810 ≈ 0,4435, i
b/sin B = 4/0,4435 ≈ 9,02; i amb l'alçada des de B (5·sin60°≈4,330),
sin A ≈ 4,330/7,810 ≈ 0,5544 i a/sin A = 5/0,5544 ≈ 9,02. Els tres donen
el mateix ✓. De propina, A≈33,7°, B≈26,3° i 33,7+26,3+120 = 180 ✓.

**I després.** Aquesta mateixa construcció (l'alçada que cau fora,
l'angle suplementari C') és la que fa servir q79 per generalitzar
Pitàgores als triangles amb un angle obtús. El cosinus demana el mateix
tracte, però amb una diferència de signe que val la pena entendre: la
definició que fa que la fórmula de q79 s'escrigui com una de sola,
c² = a²+b²−2ab·cos C, és cos(C) := −cos(180°−C). Per què el sinus no
porta el menys i el cosinus sí? Perquè l'alçada és una longitud i no
canvia de banda quan C passa de 90°, mentre que la projecció sobre la
base sí que ho fa.

---

## 9. q79 — *Show that in this case we get c² = a² + b² + 2ab cos C'.*
> Demostra que, en aquest cas, surt c² = a² + b² + 2ab cos C'.

**Moviment: redueix el desconegut al conegut.** DEPÈN de q78, de q87 (la
definició de sinus d'un angle obtús mitjançant el suplementari), de q84
(la identitat sin²+cos²=1, que fa col·lapsar dos termes en un) i de
Pitàgores.

**Pista 0 — què has de produir.**
Una generalització de Pitàgores per a un triangle amb un angle obtús C
—Pitàgores sol només val per al cas de 90°. C' és el **suplementari** de C,
és a dir 180°−C: com que C és obtús, C' és agut, i per això s'hi pot fer
trigonometria de triangle rectangle de tota la vida.

**Pista 1 — una alçada que cau a fora.**
Traça l'alçada des del vèrtex oposat a c. Com que l'angle C és obtús, aquesta
alçada NO cau dins del triangle: cau més enllà de l'extrem del costat a.
Justament per això crea DOS triangles rectangles: un de gran (que inclou tot
el triangle original) i un de petit (el tros extra que sobresurt).

**Pista 2 — la construcció.** → `fig-092.png`
El triangle rectangle gran (hipotenusa c): quina és la seva base, en
termes d'a i del tros extra marcat?

**Pista 3 — tanca-ho.**
Aplica Pitàgores al triangle rectangle gran (hipotenusa c). La base
d'aquest triangle gran és a + (un tros extra que surt del triangle
petit, en termes de b i cos C'). Substitueix-ho i simplifica.

**Comprovació.** a=5, b=4, C=120° (C'=60°): c²=25+16+2(5)(4)(0,5)=41+20=61,
c=√61≈7,81. Comprova-ho amb coordenades: si situes els dos costats a,b
amb l'angle de 120° entre ells, la distància entre els extrems ha de
sortir el mateix valor.

**I després.** Quan C=90° (C'=90° també, ja que són suplementaris i tots
dos fan 90°), cos C'=0 i la fórmula es converteix exactament en el
Pitàgores de tota la vida —aquest resultat el conté com a cas particular,
no el substitueix.

I queda el tercer cas, el d'angle C **agut**, que val la pena que facis
perquè és la mateixa construcció amb una sola diferència: el peu de
l'alçada cau **dins** del costat a en comptes de passat l'extrem. La base
del triangle rectangle gran, doncs, es queda curta en lloc d'allargar-se:

ara la base val a − b·cos C (en lloc de a + b·cos C') i l'alçada, b·sin C.
Pitàgores al triangle gran: c² = (a − b·cos C)² + (b·sin C)². Desenvolupant,
c² = a² − 2ab·cos C + b²cos²C + b²sin²C, i com que sin²C + cos²C = 1 (q84)
els dos últims termes fan b²: **c² = a² + b² − 2ab·cos C**. Fixa't que és el
mateix desenvolupament que acabes de fer, amb un únic signe canviat.

Amb les dues meitats a la mà
tens el resultat sencer, que es coneix com a **teorema del cosinus**: amb
C agut hi va un menys, i amb C obtús un més davant del suplementari. I si
acceptes definir cos(C) := −cos(180°−C) per als obtusos —el germà amb el
signe canviat del que fa q87 amb el sinus— les dues línies es fonen en una
de sola, c² = a² + b² − 2ab·cos C, per a qualsevol triangle. Comprova el
cas agut amb a=b=√3/2 i C=arccos(1/3)≈70,53°: dona c²=1 exacte, que és
justament el càlcul del diedre del tetràedre de q81.

---

## 10. q88 — *How are the sine and cosine of an angle related to the sine and cosine of an angle twice as large?*
> Com es relacionen el sinus i el cosinus d'un angle amb els d'un angle del doble?

**Moviment: redueix el desconegut al conegut.** DEPÈN de q78, de q80
(l'àrea ½ab·sinC) i de q84 (sin²+cos²=1).

**Pista 0 — què has de produir.**
Dues fórmules, sin(2θ) i cos(2θ), en termes de sinθ i cosθ solament.

**Pista 1 — un triangle isòsceles amb angle 2θ al vèrtex.**
Triangle isòsceles, dos costats de longitud 1, angle 2θ entre ells.
Calcula'n l'àrea de dues maneres: (a) amb la fórmula de q80, "meitat del
producte de dos costats pel sinus de l'angle entre ells", i (b)
partint-lo per la meitat amb l'alçada des del vèrtex, que en dona dos
triangles rectangles d'angle θ. Fixa't que són dues alçades diferents —la
de (a) surt d'un vèrtex de la base, la de (b) de la punta—; si fossin la
mateixa, igualar-les no diria res.

**Pista 2 — la construcció.** → `fig-093.png`

**Pista 3 — tanca-ho.**
Per a sin(2θ): iguala les dues àrees de la Pista 1. Per a cos(2θ) no et
cal cap teorema nou —i compte, perquè el teorema del cosinus encara no el
tens en la forma que et faria falta: q79 només en demostra el cas de
l'angle obtús. Fes-ho amb q84. Com que 2θ és agut (θ<45°), cos(2θ) és
l'arrel POSITIVA de 1−sin²(2θ). Substitueix-hi el sin(2θ) que acabes de
trobar, torna a fer servir cos²θ = 1−sin²θ per deixar-ho tot en sinθ, i
mira bé el que et queda sota l'arrel: és un quadrat perfecte.

**Comprovació.** θ=37°: sin(74°)≈0,961, i 2·sin37°·cos37°≈2(0,602)(0,799)
≈0,961 ✓. El quadrat perfecte, escrivint s=sinθ: 1−(2s√(1−s²))² =
1−4s²+4s⁴ = (1−2s²)². Amb s=sin37°≈0,602: 1−2(0,362) ≈ 0,276, i
cos(74°)≈0,276 ✓.

**I després.** Fixa't fins on arriba l'argument: cal θ<45°, i no per cap
tecnicisme sinó perquè és el que et permet triar l'arrel positiva. Si 2θ
passa de 90° les dues fórmules continuen valent, però abans cal decidir
què vol dir el cosinus d'un angle obtús —la mateixa feina que q87 fa amb
el sinus, i la resposta és la germana amb el signe canviat,
cos(C) := −cos(180°−C). Comprova-ho: amb θ=60°, 1−2sin²60° = −0,5, i
cos120° = −0,5.

---

## 11. q72 — *Make a short list of lengths and turns. What triangle problems do you need to solve in order to determine if your polygon is closed?*
> Fes una llista curta de longituds i girs. Quins problemes de triangles has de resoldre per determinar si el teu polígon es tanca?

**Moviment: dues maneres.** DEPÈN de q78 (sinus i cosinus).

**Pista 0 — què has de produir.**
No un polígon concret: la LLISTA dels problemes que caldria resoldre, en
general, per saber si una successió de "avança tant, gira tant" torna
mai al punt de partida.

**Pista 1 — descompon cada tram en dues direccions.** → `fig-200.png`
Cada tram de la teva llista (una longitud, en una direcció determinada
pels girs acumulats fins aquell moment) es pot descompondre en un
avanç horitzontal i un de vertical — exactament sinus i cosinus de
l'angle acumulat, aplicats a la longitud del tram.

**Pista 2 — la construcció.** → `fig-094.png`

**Pista 3 — tanca-ho.**
El polígon es tanca si, i només si, DUES sumes independents donen zero
alhora: la suma de tots els avanços horitzontals, i la suma de tots els
avanços verticals. Cada avanç individual és un "problema de triangle
rectangle" (longitud coneguda, angle conegut, troba els dos catets).

**Comprovació.** Tres trams: 3 unitats a 0°, 4 unitats a 90°, 5 unitats a
tal angle que tanqui el triangle (recorda el 3-4-5!). Comprova que la
suma horitzontal i la vertical donen totes dues zero amb l'angle
adequat.

**I després.** Aquesta mateixa descomposició en dues sumes independents
(horitzontal i vertical) és el nucli de com queden coordenades i
vectors a partir de la trigonometria — una idea que reapareixerà si mai
treballes amb navegació, robòtica, o qualsevol cosa que impliqui sumar
moviments en direccions diferents.

---

## 12. q85 — *Can you use a regular pentagon to find the sine and cosine of one-fifth of a turn?*
> Pots fer servir un pentàgon regular per trobar el sinus i el cosinus d'un cinquè de volta?

**Moviment: homotècia.** DEPÈN de q31 (com es parteix el pentàgon) i de
q33 (el triangle 72°-72°-36°: base 1, costats φ, i la identitat φ²=φ+1),
tots dos ja fets.

**Pista 0 — què has de produir.**
Un cinquè de volta = 72°. Sinus i cosinus d'aquest angle, en termes del
nombre auri φ=(1+√5)/2.

**Pista 1 — el 72° ja el tens dibuixat.**
No et cal cap angle intermedi: 72° és exactament l'angle de la BASE del
triangle isòsceles de q33 —base 1, els altres dos costats φ, i 36° a la
punta. Compte a no confondre'l amb els triangles A, B i C de q31, que són
36°-36°-108°: és l'avís que el mateix q33 et fa. Amb aquest triangle en
tindràs prou per al sinus i el cosinus de 72°.

**Pista 2 — la construcció.** → `fig-095.png`
L'alçada discontínua parteix l'angle de dalt (36°) exactament per la
meitat — per això l'angle marcat val 18°. Quin costat i quin angle del
triangle petit que en resulta ja coneixes?

**Pista 3 — tanca-ho.**
El triangle rectangle que et queda té hipotenusa φ i un catet 1/2 (la
meitat de la base). A la base hi té l'angle de 72° (=90°−18°), i el catet
de 1/2 hi és el CONTIGU: per tant cos72° = (1/2)/φ = 1/(2φ). L'altre
catet és l'alçada; treu-la amb Pitàgores i divideix-la per φ, i tindràs
sin72°. Compte amb la temptació de llegir-hi cos36° = φ/2: partir el
triangle no et dona el cosinus del 36° de la punta —aquell angle ha
quedat partit i ja no hi és— sinó el del 72° de la base, que és
justament el que et demanen.

**Comprovació.** Amb φ≈1,618: cos72° = 1/(2φ) ≈ 0,309. I amb φ²=φ+1
(q33), 1/(2φ) és el mateix que (φ−1)/2 = 0,618/2 = 0,309 ✓. L'alçada val
√(φ²−¼) = √(φ+¾) ≈ 1,539, i sin72° = 1,539/1,618 ≈ 0,951; en forma
tancada, sin72° = √(φ+2)/2. Repassa-ho amb la calculadora:
0,309²+0,951² = 1,000 ✓.

**I després.** Aquest mateix valor, sin72°≈0,951, és el que et dona
l'àrea exacta d'un pentàgon regular a partir del radi R de la
circumferència que el circumscriu: parteix-lo en cinc triangles iguals de
costats R, R i angle 72° al centre; cada un fa ½R²·sin72° (q80), i el
pentàgon sencer (5/2)R²·sin72° ≈ 2,378·R². Si en lloc del radi el que
tens és el costat, la fórmula també és exacta, però ja no és sin72° el
que hi surt.

---

## 13. q81 — *What is the angle between the faces of a regular tetrahedron? How about for the other regular polyhedra?*
> Quin és l'angle entre les cares d'un tetràedre regular? I per als altres poliedres regulars?

**Moviment: redueix el desconegut al conegut.** DEPÈN de q57 (ja fet,
volums dels sòlids platònics) i de la trigonometria d'aquest lot.

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
Un angle "diedre" (entre dues cares que comparteixen una aresta) —no
l'angle pla d'una cara, que ja coneixes. N'hi ha prou de treballar-ne un
o dos sòlids amb detall; el mateix mètode val per als altres tres.

**Pista 1 — troba dos segments, un a cada cara, perpendiculars a l'aresta
compartida.**
A cada una de les dues cares que es toquen en una aresta, traça
—dins d'aquella cara— el segment des del punt mitjà de l'aresta fins al
vèrtex oposat d'aquella cara (l'alçada del triangle equilàter de la
cara). Aquests dos segments, un a cada banda, formen l'angle diedre que
busques.

**Pista 2 — la construcció.** → `fig-096.png`
L'angle marcat entre els dos segments (en sanguina): és aquest, i no cap
altre, l'angle diedre que busques?

**Pista 3 — tanca-ho.**
El triangle amb què treballaràs té per vèrtexs el **punt mitjà de l'aresta
compartida** i els **dos vèrtexs oposats**, un de cada cara. Els dos costats
que surten del punt mitjà són les dues alçades de cara (√3/2 per aresta 1);
el tercer costat és el segment que uneix els dos vèrtexs oposats. Amb el
teorema del cosinus (q79) n'aïlles l'angle del punt mitjà, que és el diedre.

Compte amb el tercer costat, que NO és el mateix als dos sòlids: al
tetràedre els dos vèrtexs oposats són veïns i el segment fa 1 (una aresta);
a l'octàedre són diametralment oposats i fa √2. D'aquí surt tota la
diferència entre els dos resultats.

**Comprovació.** Tetràedre regular: angle diedre = arccos(1/3) ≈ 70,53°.
Octàedre regular: angle diedre = arccos(−1/3) ≈ 109,47°. Comprova que
aquests dos angles sumen exactament 180°.

I ara la segona meitat de la pregunta, la dels altres tres. Compte amb una
temptació: la recepta concreta de la Pista 1 —anar del punt mitjà de
l'aresta al vèrtex oposat de la cara— només dona una perpendicular a
l'aresta quan la cara és un **triangle equilàter**. En un quadrat, el
segment del punt mitjà d'un costat al vèrtex oposat va de biaix i no
serveix; el que hi val és anar al punt mitjà del costat oposat. La idea de
fons (dos segments, un a cada cara, tots dos perpendiculars a l'aresta
compartida) sí que és general; la recepta, no. Amb la idea de fons, el cub
es fa de cap: dues cares que comparteixen una aresta hi són perpendiculars,
o sigui **90°**. Els altres dos surten arccos(−1/√5) ≈ 116,57° per al
dodecàedre i arccos(−√5/3) ≈ 138,19° per a l'icosàedre.

**I després.** Aquesta suma de 180° entre l'angle diedre del tetràedre i
el de l'octàedre no és casualitat — és exactament el que fa possible
omplir l'espai alternant-ne, que és el que es pregunta a continuació.

---

## 14. q82 — *Show that you can fill space completely using regular octahedrons and tetrahedrons. Can you find any other ways to tile three-dimensional space with symmetrical polyhedra?*
> Demostra que es pot omplir l'espai completament amb octàedres i tetràedres regulars. Trobes altres maneres de folrar l'espai tridimensional amb poliedres simètrics?

**Moviment: recompte o inducció.** DEPÈN de q81 (aquest mateix lot) i de
q03 (ja fet, el mateix recompte en 2D).

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
Una comprovació que, al voltant de cada aresta compartida, els angles
diedres dels sòlids que hi conflueixen sumen exactament 360° — el mateix
test que vas aplicar als mosaics plans de q03, ara en 3D i sobre arestes
en lloc de vèrtexs.

**Pista 1 — quants sòlids de cada mena, a cada aresta.**
A cada aresta d'aquest folrat, hi conflueixen alguns tetràedres i alguns
octàedres. Amb l'angle diedre de cada un (q81), quina combinació suma
360°?

**Pista 2 — la construcció.** → `fig-097.png`

**Pista 3 — tanca-ho.**
Dos angles diedres de tetràedre (2×70,53°) més dos d'octàedre
(2×109,47°) sumen 360° exactes —perquè cada parella (un tetràedre, un
octàedre) ja en suma 180° (q81). Comprova que aquesta combinació
concreta (2+2) és la que realment es fa servir en aquest folrat.

**Comprovació.** 2×70,53°+2×109,47° = 141,06°+218,94° = 360° exacte.

**I després.** L'enunciat també et demana si hi ha ALTRES maneres de folrar
l'espai, i n'hi ha una de molt més senzilla que aquesta: **el cub**. El seu
angle diedre fa 90°, i 360/90 = 4 exactes, o sigui que quatre cubs es tanquen
al voltant de cada aresta sense necessitar cap company.

De fet, si passes pel mateix filtre els cinc angles diedres de q81, veuràs
que el cub és **l'únic** poliedre regular que ho aconsegueix tot sol:
360/70,53 = 5,10 (tetràedre), 360/90 = 4 (cub), 360/109,47 = 3,29
(octàedre), 360/116,57 = 3,09 (dodecàedre), 360/138,19 = 2,60 (icosàedre).
Només el cub dona un enter. Per això el tetràedre necessita l'octàedre: sol
no hi arriba, i la parella tetràedre+octàedre és la manera de tapar el forat
que li queda.

I aquí hi ha la diferència de debò amb el pla: a q03 hi havia TRES polígons
regulars que folraven tots sols (triangle, quadrat, hexàgon), i a l'espai
n'hi ha un de sol.

---

## 15. q90 — *Show that if a four-sided shape with sides a, b, c, and d is inscribed in a circle, then its area is given by Brahmagupta's formula: A = √[(s−a)(s−b)(s−c)(s−d)], where s = (1/2)(a+b+c+d).*
> Demostra que, si un quadrilàter de costats a, b, c i d està inscrit en un cercle, la seva àrea ve donada per la fórmula de Brahmagupta.

**Moviment: redueix el desconegut al conegut.** DEPÈN de q79 (teorema
del cosinus) i de q84 (identitat sin²+cos²=1).

**Pista 0 — què has de produir.**
Una fórmula que generalitza la de Heron (àrea d'un triangle a partir
només dels seus costats) a un quadrilàter —però només quan els quatre
vèrtexs són sobre un mateix cercle: aquesta condició és imprescindible,
no decorativa.

**Pista 1 — parteix el quadrilàter en dos triangles per una diagonal.**
Els dos triangles comparteixen la diagonal. Els angles que queden als
**altres dos vèrtexs**, un a cada triangle, són angles oposats del
quadrilàter, i per estar inscrit en un cercle sumen 180°. Aquest fet —els angles oposats d'un quadrilàter cíclic sumen
sempre 180°— és la hipòtesi "inscrit en un cercle" convertida en una
dada sobre angles, i és tota la feina que fa aquí la circumferència. Si
no l'has vist mai demostrat, surt en dues línies de l'angle inscrit de
q42: cada angle del quadrilàter val la meitat de l'arc oposat, i els dos
arcs oposats fan junts la circumferència sencera.

**Pista 2 — la construcció.** → `fig-098.png`
Els dos angles marcats (a banda i banda de la diagonal): quina relació
ja saps que els lliga, per estar inscrits en el mateix cercle?

**Pista 3 — tanca-ho.**
Escriu la diagonal al quadrat de dues maneres (teorema del cosinus de q79,
un cop a cada triangle) i iguala-les: com que els dos angles són
suplementaris els cosinus són oposats, i te'n surt cos B tot sol. Suma
després les dues àrees (q80, mig producte de costats pel sinus). Aquí ve la
part que sol quedar per fer, i és tota la pregunta, així que no la saltis:
posa-hi noms curts, K = ab+cd i M = a²+b²−c²−d², i comprova que
cos B = M/(2K) i que l'àrea val ½K·sin B. Eleva-la al quadrat i fes servir
sin² = 1−cos² (q84): et queda 16A² = 4K² − M². Això és una **diferència de
quadrats**, i és l'únic pas realment ingeniós de la demostració:
16A² = (2K+M)(2K−M). Desenvolupa cada parèntesi i mira si el reconeixes —
un et donarà (a+b)²−(c−d)² i l'altre (c+d)²−(a−b)², que són dues diferències
de quadrats més. En surten quatre factors i cadascun val 2s menys un costat.

**Comprovació.** Costats 2, 3, 4, 5: s=7, i la fórmula dona
A = √[(7−2)(7−3)(7−4)(7−5)] = √(5·4·3·2) = √120 ≈ 10,95. Refés-ho pel camí
llarg per comprovar que la teva àlgebra és bona: K = 2·3+4·5 = 26,
M = 4+9−16−25 = −28, i 16A² = 4·26² − 28² = 2704 − 784 = 1920, o sigui
A² = 120 ✓. De passada, cos B = −28/52 ≈ −0,538, que vol dir B ≈ 122,6°:
un angle obtús, i per això et calia q79 sencera i no només el cas agut.

**I després.** Quan un dels quatre costats es "col·lapsa" a zero (d→0),
la fórmula de Brahmagupta es converteix exactament en la de Heron per a
un triangle de costats a, b, c —el mateix cas límit que ja vas veure a
q74, ara amb un vèrtex de més. I, com ja apuntava q89 (Steiner-Lehmus,
ja fet): totes dues preguntes comparteixen l'esperit de trobar una
relació algebraica que la geometria, per si sola, amaga darrere d'una
arrel quadrada.

