# Lot 2 — vuit guies més de demostració

Vuit preguntes noves, triades perquè cadascuna **reaplica un moviment del lot 1**
en una pregunta diferent (sovint és, literalment, l'"i després" que aquella guia
prometia) o n'introdueix un de genuïnament nou quan calia. Cap d'aquestes vuit
és independent del lot 1: llegeix primer les guies que hi apareixen citades.

---

## Com es llegeixen aquestes figures

(Repetit del lot 1 — val la pena tenir-ho sempre a mà.)

| | Vol dir |
|---|---|
| traç negre | la figura tal com és al llibre |
| traç sanguina (vermell terrós) | el que hi has afegit tu |
| discontinu | línia de construcció, no forma part de la figura |
| punt gruixut | punt notable (centre, punt mitjà, vèrtex que importa) |
| ratllat | aquesta peça es treu |

Dos segments amb **una** ratlleta fan la mateixa longitud entre ells; dos amb
**dues** en fan una altra, no la mateixa que els d'una. Igual amb els arcs als
angles: el nombre de marques diu "a quin grup pertanys", no una quantitat.

**Ordre d'aquest lot:**
q13 → q42 → q86 → q23 → q10 → q97 → q98 → q45.

---

## 1. q13 — *Suppose we cut a triangle from one corner to the middle of the opposite side. Does the area get cut in half?*
> Si talles un triangle des d'un vèrtex fins al punt mitjà del costat oposat,
> l'àrea queda partida per la meitat?

**Moviment: redueix el desconegut al conegut** (el mateix de q14).

Aquesta és, de fet, la peça que ja vas fer servir sense dir-la a q14: allà la
"caixa" ja et donava l'alçada feta a trossos; aquí la treus a la llum del dia,
sola, per a un triangle qualsevol — no calen ni caixa ni angle recte.

**Pista 0 — què has de produir.**
No n'hi ha prou de dir "sí". Has d'acabar podent explicar *per què*, i la raó
ha de funcionar per a qualsevol triangle, no només per al que hagis dibuixat.

**Pista 1 — el fet que ho decideix tot.**
Si dos triangles tenen la **mateixa base** i la **mateixa alçada**, què saps de
les seves àrees? *(És literalment la fórmula base × alçada / 2 — no hi ha res
més amagat.)* Ara mira els dos triangles que et queden després del tall: quina
d'aquestes dues coses comparteixen sense haver de mesurar res?

**Pista 2 — la construcció.** → `fig-014.png`

**Pista 3 — tanca-ho.**
Les marquetes et diuen que les dues meitats de la base fan el mateix. L'altura
que has afegit en sanguina és **la mateixa per als dos triangles** — és la
distància del vèrtex de dalt a la recta de la base, i aquesta recta no canvia
entre un triangle i l'altre. Base igual, alçada igual: ja ho tens.

**Comprovació.** Base de 12, vèrtex desplaçat (no centrat) a alçada 7. Amb el
tall al punt mitjà (a distància 6 de cada cantó), l'àrea de cada meitat surt 21
— sumen 42, que és l'àrea sencera. Ara prova-ho desplaçant el vèrtex a un altre
lloc de la mateixa alçada 7, tan lluny com vulguis: cada meitat continua fent
21. No és que "quadri igualment": és que ni la base (6) ni l'alçada (7) de
cap de les dues meitats no han canviat, i l'àrea només depèn d'aquestes dues
coses. Si canvies l'alçada, sí que canvien les dues meitats —però continuen
sent iguals entre elles, que és el que la pregunta demana.

**I després.** "Mateixa base, mateixa alçada, mateixa àrea" és el motor que fa
funcionar mig llibre. El tornaràs a veure servir-se sol, sense que ningú
t'ho recordi, quan arribis al principi de Cavalieri.

---

## 2. q42 — *Show that if two points are connected to the same arc, the resulting angles must be the same.*
> Dos punts del mateix arc, connectats als extrems d'una corda: els angles que
> es formen són iguals.

**Moviment: distingeix els casos** — nou a la llista. Depèn de q41.

**Pista 0 — què vol dir "el mateix arc".**
Una corda AB parteix el cercle en dos arcs. "El mateix arc" vol dir que els
dos punts que connectes (P i Q) són tots dos a la banda gran, o tots dos a la
banda petita — no un a cada banda. L'angle "resultant" és l'angle que es veu
des d'aquell punt mirant cap a A i cap a B.

**Pista 1 — que no et faci l'esquena la novetat.**
A q41 ja vas resoldre el cas particular en què AB és un diàmetre: l'angle
sempre és recte, on sigui que posis el punt. Aquí AB ja no és un diàmetre —
és una corda qualsevol. Prova-ho amb xifres: posa un cercle de radi 10, la
corda AB fixa, i calcula l'angle des de dues posicions diferents del mateix
arc. *(Si tens ganes de comprovar-ho abans de llegir més avall: 200° i 340°
per a A i B, 80° i 140° per als dos punts, amb el centre a l'origen — et
sortirà el mateix angle als dos.)*

**Pista 2 — la construcció.** → `fig-015.png`
*(El truc és el mateix de q41: un radi fa un triangle isòsceles. Aquí, en
lloc del radi a un vèrtex donat, tria el diàmetre que passa pel punt P.)*

**Pista 3 — tanca-ho.**
Als dos triangles isòsceles que t'ha creat el diàmetre (OPA i OPB, amb
OP=OA=OB perquè tots tres són radis — per això hi ha tres marquetes iguals),
anomena α i β els angles de la base a P. L'angle que veus des de P és **α+β
o bé α−β**, segons si el diàmetre que has traçat cau dins o fora de l'angle
APB — mira el teu dibuix i decideix quin cas tens. Ara fes exactament el
mateix per Q, amb el seu propi diàmetre. Fixa't en una cosa: encara que el
cas (suma o resta) pugui ser diferent per a P i per a Q, la relació final
amb l'angle central AOB acaba sent la mateixa als dos casos. Compara-ho.

**Comprovació.** Cercle de radi 10, centre a l'origen. A i B als angles 200°
i 340°; P a 80°, Q a 140°. L'angle central AOB val 140°. Calcula (amb
coordenades, o amb un transportador sobre el teu propi dibuix) l'angle APB
i l'angle AQB: tots dos han de sortir 70°, exactament la meitat de l'angle
central.

**I després.** Aquest resultat ("angle inscrit = meitat de l'angle central")
el faràs servir moltes vegades més sense que el llibre t'ho recordi — sempre
que quatre punts estiguin sobre un mateix cercle, per exemple. I nota una
cosa: aquesta és la segona vegada que un argument es parteix en casos que
tot i així arriben a la mateixa fórmula — la primera va ser q15.

---

## 3. q86 — *Why are two sides and an angle insufficient in general to specify a triangle?*
> Per què dos costats i un angle no basten, en general, per determinar un
> triangle?

**Moviment: per refutar en basta un contraexemple** (el mateix de q08c, però
molt més subtil). Depèn de q08c.

**Pista 0 — quina és exactament la feina.**
"Insuficient" es refuta amb **un** exemple: dos triangles diferents (no
congruents) que comparteixin els dos costats i l'angle donats. Ara bé —
compte, perquè aquí "un angle" vol dir un angle que **no** és l'angle entre
els dos costats donats. Si ho fos, seria el criteri costat-angle-costat (SAS)
que ja portes de classe, i aquell sí que determina el triangle. Aquesta
distinció és tota la dificultat de la pregunta.

**Pista 1 — mou-ho amb un compàs, mentalment.** → `fig-202.png`
Fixa un angle a un vèrtex A, i un dels costats donats sortint d'A cap a un
punt B (això fixa A i B del tot). L'altre costat donat té una longitud fixa,
però només saps que l'altre extrem (diguem-li C) és **en algun lloc** del
segon costat de l'angle — no saps on. Si claves un compàs a B amb aquella
longitud fixa, quantes vegades pot tallar el segon costat de l'angle?

**Pista 2 — la construcció.** → `fig-016.png`

**Pista 3 — tanca-ho.**
Els dos triangles ABC i ABC′ comparteixen: l'angle a A, el costat AB, i el
costat BC (les marquetes ho diuen: BC i BC′ fan el mateix). Però són triangles
diferents — mira els angles a C i C′, o el costat AC. Dos costats i un angle
(no comprès) et donen, en general, **dues** respostes possibles, no una.
Compara amb el cas SAS: per què allà el compàs només pot tallar en un lloc?

**Comprovació.** Amb angle A = 30°, AB = 8 i BC = 5 no et cal cap fórmula
nova. Deixa caure la perpendicular des de B fins al segon costat i
digues-li H al peu: AH = 8·cos30° ≈ 6,93 i BH = 8·sin30° = 4. Com que
BC = 5, Pitàgores al triangle BHC dona HC = √(5²−4²) = 3. Els dos talls
del compàs són a 3 a banda i banda de H —H n'és el punt mitjà—, i per
tant AC ≈ 6,93+3 = 9,93 o bé AC ≈ 6,93−3 = 3,93. Aquest "±" és
l'ambigüitat, escrita. Amb l'angle comprès (SAS) no hi hauria cap arrel
a treure i, per tant, cap ±.

**I després.** Els criteris clàssics de congruència són SSS, SAS, ASA i AAS
(i, per als triangles rectangles, hipotenusa-catet). SSA **no** hi és, i
aquesta pregunta n'és la raó. Però compte, que no falla sempre: si el radi
del compàs supera el costat AB, un dels dos talls cau a l'altra banda del
vèrtex i només en queda un de vàlid, i això passa **sempre** que l'angle
donat és recte o obtús. El "cas ambigu" és, doncs, el d'angle agut amb el
costat oposat més curt que l'adjacent conegut: aquell sí, i el retrobaràs
cada vegada que resolguis un triangle amb el teorema del sinus. (AAA
tampoc no determina un triangle, però per una raó ben diferent: et fixa
la forma i no la mida — és semblança, q77, no congruència.)

---

## 4. q23 — *How big are these circles?*
> Quina mida fan aquests cercles?

**Moviment: digues la mateixa distància de dues maneres** (el mateix de q22).
Depèn de q22 — és, literalment, el seu "i després".

**Pista 0 — reconeix la palanca.**
El llibre et planteja tres puzles de cop. Fes primer el de l'esquerra (un
cercle gran tallat pels seus dos diàmetres, amb un cercle petit encaixat en
un dels quatre racons). Els altres dos es resolen amb la mateixa idea —
te'ls deixo per a després.

**Pista 1 — el mateix truc, disfressat.**
A q22 la distància entre els centres de dos cercles tangents es podia dir de
dues maneres: per Pitàgores (amb els catets que calguessin) i per la
tangència (suma o resta de radis). Aquí els "dos costats" que fan de catets
ja no són dos radis R — són què, exactament? Mira on toca el cercle petit.

**Pista 2 — la construcció.** → `fig-017.png`

**Pista 3 — tanca-ho.**
El cercle petit toca els dos diàmetres, així que el seu centre és a distància
r de cadascun — aquests són els dos catets, i tots dos fan r (no R). La
hipotenusa (el segment "?") la pots dir per Pitàgores, r√2, i també per la
tangència amb el cercle gran, R−r. Iguala-les.

**Comprovació.** Amb R = 1 surt r = √2 − 1 ≈ 0,414 — **exactament el mateix
valor numèric** que et va sortir a q22, tot i que la figura és diferent del
tot. Compte a no dir-ne massa de pressa "és la mateixa equació": no ho és.
A q22 tenies R√2 = R + r (tangència exterior, catets R) i aquí tens
r√2 = R − r (tangència interior, catets r). Són equacions diferents que
resolen a la mateixa raó, i el motiu és una identitat que val la pena veure:
de la primera surt r/R = √2 − 1, de la segona r/R = 1/(√2 + 1), i aquests
dos números són iguals perquè (√2 − 1)(√2 + 1) = 2 − 1 = 1. Comprova-ho.

**I després.** Ara fes els altres dos puzles de q23 amb la mateixa palanca
(en un, la "tangència" és amb una diagonal en lloc d'un altre cercle — la
distància d'un punt a una recta hi fa d'hipotenusa). I quan vulguis una
versió amb encara més incògnites, q44 t'hi espera.

---

## 5. q10 — *Are the opposite sides of a rhombus always parallel? Are the diagonals perpendicular?*
> Els costats oposats d'un rombe són sempre paral·lels? I les diagonals, són
> perpendiculars?

**Moviment: endevina per simetria, després demostra** (el mateix de q36).
Depèn de q36.

**Pista 0 — dues preguntes, un sol plec.**
Són dues afirmacions independents. Un rombe té els quatre costats iguals —
i aquesta única propietat, ben mirada, respon totes dues alhora.

**Pista 1 — pensa-ho com un plec de paper.** → `fig-181.png`
Si retallessis el rombe i el doblegues per una diagonal, què passa amb els
dos triangles que queden a banda i banda? *(Els quatre costats són iguals,
així que...)*

**Pista 2 — la construcció.** → `fig-018.png`

**Pista 3 — tanca-ho.**
El plec (la diagonal) parteix el rombe en dos triangles amb els tres costats
iguals dos a dos (les marquetes ho diuen) — són congruents. D'aquí surt que
la diagonal **bisecta** els dos angles que talla. I ara ve el pas clau: en
un triangle isòsceles, la bisectriu de l'angle del vèrtex és també
perpendicular al costat oposat. Aquí n'hi ha prou amb una sola aplicació:
dos costats consecutius del rombe més una diagonal formen un triangle
isòsceles, i l'ALTRA diagonal n'és justament la bisectriu del vèrtex —per
tant hi cau perpendicular. Per al
paral·lelisme, torna als dos triangles congruents del primer plec: quina
parella d'angles iguals et diu que dos costats són paral·lels?

**Comprovació.** Agafa els quatre punts (±3,0) i (0,±4). Comprova que els
quatre costats fan 5 (el triangle 3-4-5) —per tant tens un rombe de debò— i
que el pendent d'un costat és igual al del costat oposat. Fixa't que aquí
has anat en la direcció contrària a la demostració: has partit de dues
diagonals perpendiculars i n'has obtingut un rombe. Comprova els números, no
demostra el teorema.

**I després.** El mateix plec (una diagonal parteix la figura en dos
triangles congruents per SSS) és el que demostra propietats de qualsevol
paral·lelogram, no només del rombe — la diferència és que un paral·lelogram
general només et dona UN parell d'aquests triangles, no dos, perquè només
dos costats (no quatre) són iguals de dos en dos.

---

## 6. q97 — *Suppose two points lie between parallel lines. What is the shortest path from one to the other that touches both lines?*
> Dos punts entre dues rectes paral·leles: quin és el camí més curt de l'un a
> l'altre que toqui totes dues rectes?

**Moviment: reflecteix, i el camí trencat es torna recte** (el mateix de
q96, ara dues vegades). Depèn de q96.

**Pista 0 — un rebot més.**
A q96 el camí tocava una sola recta. Aquí en toca dues — un cop cadascuna.
La idea és la mateixa, però l'has d'aplicar dos cops, no un.

**Pista 1 — un rebot cada vegada.**
Reflecteix A respecte de la recta de dalt: ja tens A′. Un tros del teu camí
(A fins al primer punt de contacte) ara es pot substituir per un tram recte
des d'A′. Et queda encara la recta de baix per resoldre — què hi faries, per
la mateixa raó?

**Pista 2 — la construcció.** → `fig-019.png`

**Pista 3 — tanca-ho.**
Amb A′ (reflex d'A respecte de la recta de dalt) i B′ (reflex de B respecte
de la recta de baix), tries dos punts de contacte qualssevol P (a dalt) i
Q (a baix). Per la reflexió, AP fa el mateix que A′P, i QB fa el mateix
que QB′: el camí A→P→Q→B fa **sempre** la mateixa longitud que el camí
A′→P→Q→B′, triïs on triïs P i Q. Aquesta és la part que val per a
qualsevol elecció.

Ara mira el camí A′→P→Q→B′: va d'A′ a B′ passant per dos punts pel mig.
Cap camí així pot ser més curt que el segment recte A′B′, i només fa
exactament A′B′ quan P i Q cauen damunt d'aquest segment. Per tant els
punts de contacte que busques són **els dos punts on el segment A′B′
creua les dues rectes**, i la longitud mínima és exactament A′B′.

Una cosa més abans de donar-ho per tancat: has decidit tocar primer la recta
de dalt i després la de baix. També podries fer-ho a l'inrevés, i aleshores
els reflexos serien uns altres (A respecte de la de baix, B respecte de la de
dalt) i et donarien un altre número. Són dos problemes diferents, i el més
curt de tots dos és la resposta. Val la pena que provis les dues i miris qui
guanya —i que pensis quina característica d'A i de B ho decideix.

**Comprovació.** Rectes y=6 (dalt) i y=0 (baix). A=(1,4), B=(9,1). Reflectint:
A′=(1,8), B′=(9,−1). La distància A′B′ (i per tant la longitud del camí
òptim) és √145 ≈ 12,042, amb els contactes a (2,78 · 6) i (8,11 · 0). Compara-ho
amb un camí "a ull" que toqui totes dues rectes a x=4: aquest surt ≈ 14,705 —
més llarg, com havia de ser. I ara l'altre ordre, tocant primer la de baix:
A″=(1,−4), B″=(9,11), i la distància surt exactament **17**. Molt pitjor. Aquí
A és a prop de la recta de dalt i B a prop de la de baix, i per això convé
anar-hi en aquest ordre; si fos al revés, guanyaria l'altre.

**I després.** Si en lloc de dues rectes tinguessis un triangle sencer (tres
costats) i volguessis el camí tancat més curt que toqués els tres, la mateixa
idea —reflectir, un cop per cada costat— hi funciona, encara que amb tres
reflexions en cadena en lloc de dues. I com ja t'anunciava q96: la propietat
de reflexió d'una el·lipse és aquesta mateixa idea mirada des d'una corba en
lloc de dues rectes. Compte, però, que el que et dona q98 és la **definició**
de l'el·lipse per suma de distàncies, no la propietat de reflexió; per
arribar-hi cal el pas de q96, que la tangent només toca l'el·lipse en un punt
i per tant és allà on la suma es fa mínima.

---

## 7. q98 — *Can you see how to make a rough model of an ellipse using a pencil, two thumbtacks, and a piece of string?*
> Com fas un model d'el·lipse amb un llapis, dos punxons i un tros de fil?

**Moviment: construeix la figura, i que la construcció mateixa sigui la
prova** — nou a la llista.

**Pista 0 — què has de produir.**
No cal demostrar cap fórmula. Has d'explicar **per què** aquest mètode físic
dibuixa sempre la mateixa mena de corba — què és exactament el que el fil
manté constant mentre mous el llapis.

**Pista 1 — mesura el que no canvia.**
El fil té una longitud fixa L (el talles un cop i ja està). Clava els dos
punxons, tensa el fil amb el llapis en dues posicions diferents, i mesura (o
calcula amb coordenades) les dues distàncies del llapis a cada punxó a cada
posició. Què es manté igual entre una posició i l'altra?

**Pista 2 — la construcció.** → `fig-020.png`

**Pista 3 — tanca-ho.**
El fil no s'estira: sigui on sigui el llapis, la suma de les dues distàncies
als punxons val sempre L, perquè és tota la longitud del fil repartida en
dos trossos. Això **és** la definició d'una el·lipse: el conjunt de punts
la suma de les distàncies dels quals a dos punts fixos (els focus) és
constant. El mètode del fil no s'inventa res — simplement fabrica aquesta
condició amb un objecte que físicament no pot fer altra cosa.

**Comprovació.** Punxons a (−3,0) i (3,0), fil de longitud 10. Al punt (0,4):
distàncies 5 i 5, sumen 10. Al punt (5,0) (un extrem de l'el·lipse):
distàncies 8 i 2, sumen també 10.

I una comprovació que no és de números: què passaria si el fil fos **més curt**
que la distància entre els dos punxons? Que no el podries tensar enlloc, i no
dibuixaries res. I si fes exactament aquella distància? Que el llapis només
podria anar amunt i avall del segment que els uneix: l'"el·lipse" et quedaria
aixafada fins a ser un segment. O sigui que el mètode demana **fil més llarg
que la separació dels punxons**, i com més marge li donis, més rodona et
sortirà.

**I després.** Guarda aquest fet, perquè quan arribis a q96 i q97 (reflectir
converteix un camí trencat en un de recte) el podràs ajuntar amb aquells i
en sortirà una cosa bonica: que una bola de billar llançada des d'un focus
d'una taula el·líptica passa sempre per l'altre focus, sigui quin sigui
l'angle de sortida. Aquí encara no ho pots demostrar —el fil només et dona
la suma constant, no els angles.

---

## 8. q45 — *How can we measure the surface area of a (generalized) cylinder?*
> Com mesures la superfície lateral d'un cilindre?

**Moviment: desenrotlla la superfície** — nou a la llista, i el primer
d'espai d'aquest lot.

**Pista 0 — un avís abans de començar.**
En un dibuix en perspectiva les circumferències de dalt i de baix del
cilindre no semblen cercles — surten aixafades, com el·lipses. Fia't de
l'objecte, no del dibuix: són cercles de veritat.

**Pista 1 — pensa en l'etiqueta d'una llauna.** → `fig-192.png`
Si talles l'etiqueta de paper d'una llauna de sopa en vertical i l'estires
plana, quina forma té? Amb radi 3 i alçada 10: l'amplada de l'etiqueta és la
longitud de la circumferència, 2π×3 ≈ 18,85; l'alçada és 10, la mateixa del
cilindre. Ja tens un rectangle.

**Pista 2 — la construcció.** → `fig-021.png`

**Pista 3 — tanca-ho.**
L'àrea lateral del cilindre és, exactament, l'àrea d'aquest rectangle:
(2πr) × h. No cal cap fórmula nova ni cap límit — un cop desenrotllat, és
literalment base × alçada. El parany habitual: l'amplada del rectangle és la
**circumferència**, no el diàmetre ni el radi.

**Comprovació.** Amb r=3, h=10: àrea lateral = 2π(3)(10) = 60π ≈ 188,5. Si hi
afegeixes les dues tapes circulars (2×πr² = 18π), la superfície total surt
78π ≈ 245,0.

Una nota sobre el «generalitzat» del títol, que aquesta guia treballa
sempre amb un cilindre de base circular. Un cilindre «generalitzat» és
qualsevol sòlid fet lliscant una corba plana tancada qualsevol (no cal
que sigui un cercle) perpendicularment, sense girar-la ni canviar-ne la
mida. El mètode de l'etiqueta desenrotllada hi val exactament igual: si
la base té perímetre P, l'àrea lateral és P × h, sigui quina sigui la
forma de la base —el rectangle que en surt en desenrotllar-lo és sempre
«perímetre per alçada», i 2πr és només el perímetre en el cas particular
que la base sigui un cercle.

**I després.** El mateix truc no funciona igual de net per a un con (q51):
un con desenrotllat no dona un rectangle sinó un sector de cercle, perquè el
"radi" de l'etiqueta ja no és constant. I quan vulguis mesurar la longitud
d'una hèlix (q123), "desenrotllar" torna a ser la idea — ara desenrotllant
un cilindre sencer, no només la seva superfície.

---

## Nota d'integració

Sense canvis respecte al que ja proposava el lot 1 — s'hi afegeixen només
els vuit registres nous amb el mateix esquema `guia.pistes[]` / `comprovacio`
/ `iDespres`. No hi ha cap camp nou.
