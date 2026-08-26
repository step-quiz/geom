# Lot 7 — catorze guies noves (pp. 65–103, cercles, sòlids, volums)

Catorze preguntes noves. El bloc més difícil del llibre (majoritàriament 3D,
majoritàriament dificultat 3). Ordre alterat respecte de l'ordre de pàgina
del HANDOFF, seguint el suggeriment de `pedagogical-assessment-geom.md`
§11.1: q43 (Pedoe, cercles) i q59/q62 (Grünbaum-adjacent, sòlid dins de
sòlid) s'avancen davant de la resta. El clúster de Pappus (q65, q67, q66,
q68) es manté consecutiu, tal com demana el HANDOFF §9.

**Avís obligatori a totes les guies 3D d'aquest lot** (HANDOFF §9): un
angle recte no es veu recte en una projecció en perspectiva — cada guia 3D
ho diu explícitament a la Pista 0, amb la mateixa redacció que ja va
funcionar a q25.

**Nota sobre q64**: l'enunciat ("What is the perimeter of a region formed
by a moving stick?") no porta cap escaneig, i no tinc el text del llibre
al davant. M'he guiat per `_notaClassificacio` ("raonament d'envolupant,
moderat"), que apunta inequívocament al problema clàssic de l'escala que
rellisca entre dues parets perpendiculars — v. la nota completa a la
pròpia guia i a `NOTA-LOT-7.md`.

---

## 1. q43 — *If two circles are arranged so that each passes through the center of the other, what are the area and perimeter of the overlap? What about for three overlapping circles?*
> Si dos cercles es col·loquen de manera que cadascun passa pel centre de l'altre, quina àrea i quin perímetre té el solapament? I per a tres cercles que se solapen?

**Moviment: dues maneres.** DEPÈN de q22 (ja fet).

**Pista 0 — què has de produir.**
Dues xifres (àrea i perímetre) per al cas de dos cercles, i després la
mateixa pregunta per a tres. Cap dels dos casos et demana un nombre
aproximat: totes dues respostes surten exactes.

**Pista 1 — el triangle amagat.**
Uneix els dos centres, i un dels dos punts on els cercles es tallen.
Els tres costats d'aquest triangle: dos són radis (iguals a r), i el
tercer és la distància entre els dos centres — que també val r, perquè
cada cercle passa pel centre de l'altre. Quin tipus de triangle és?

**Pista 2 — la construcció.** → `fig-070.png`
El triangle equilàter que has trobat es repeteix, en mirall, cap a l'altre
punt de tall — junts marquen l'angle que cada centre "veu" cap als dos
punts d'intersecció.

**Pista 3 — tanca-ho.**
Aquest angle (al centre d'un cercle, entre els dos radis que van als
punts de tall) és el doble de l'angle del triangle equilàter: 120°. La
zona solapada (l'ull, o *vesica*) és la suma de dos "segments circulars"
— cadascun, un sector de 120° menys el triangle que aquest sector deixa
sota la corda.

Compte aquí amb una confusió fàcil: aquest triangle que restes NO és
l'equilàter que has trobat abans. L'equilàter té per vèrtexs els dos
centres i un punt de tall; el que has de restar té per vèrtexs UN centre i
els DOS punts de tall, i els seus costats fan r, r i r√3. Ara bé, l'àrea
els surt igual —tots dos fan (√3/4)r²—, perquè el segon és isòsceles amb
dos costats r i l'angle de 120° entremig, i (1/2)r²·sin120° = (√3/4)r².
Val la pena adonar-se'n en lloc de confondre'ls: si dibuixes el que
restes, veuràs que no és equilàter.

El perímetre és la suma dels dos arcs de 120°, un de cada cercle.

**Comprovació.** Amb r=1: sector de 120° = π/3 ≈ 1,047; triangle equilàter
de costat 1 = √3/4 ≈ 0,433; un segment ≈ 0,614; àrea solapada ≈ 1,228.
Perímetre: 2 arcs de 120° = 2×(2π/3) ≈ 4,189.

**I després.** Per a tres cercles (cadascun pel centre dels altres dos,
formant un triangle equilàter de costat r entre els tres centres), la
mateixa idea —sectors menys triangles— es repeteix, però ara cal decidir
quines regions es compten un cop, quines dos, i quina exactament tres
vegades: el mateix reflex del comptatge amb cura que ja vas fer servir a
q03.

---

## 2. q59 — *How much of a cube does a sphere occupy? Is it more than half?*
> Quant d'un cub ocupa una esfera? És més de la meitat?

**Moviment: redueix el desconegut al conegut.**

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva — fixa't en les relacions (tangències, proporcions), no en
com "sembla" el dibuix.

**Pista 0 — què has de produir.**
Una fracció (o un percentatge), no dues xifres soltes. I una resposta de
sí/no a la segona part, justificada per la fracció que trobis.

**Pista 1 — quina mida té el cub, si l'esfera hi és inscrita.**
L'esfera toca les sis cares del cub. Si el radi de l'esfera és r, quant fa
el costat del cub?

**Pista 2 — la construcció.** → `fig-071.png`

**Pista 3 — tanca-ho.**
Escriu el volum de l'esfera (4/3)πr³ i el volum del cub en termes del
mateix r. Simplifica la fracció — hi sobreviu π, i res més.

**Comprovació.** r=1: cub de costat 2, volum 8. Esfera: (4/3)π ≈ 4,19.
Fracció ≈ 0,524 — més de la meitat (π/6 > 1/2 perquè π > 3).

**I després.** Compte a no confondre aquesta fracció amb la de q61, que
compara l'esfera amb el CILINDRE que la conté i dona 2/3, un número
diferent (π/6 ≈ 0,524; 2/3 ≈ 0,667). El que sí que és una coincidència
notable —i és el resultat que Arquimedes va voler a la seva tomba— és que
l'esfera i el seu cilindre circumscrit estan en raó 2/3 tant en volum com
en superfície. Comprova-ho tu: el cilindre fa πr²·2r = 2πr³ i l'esfera
(4/3)πr³.

---

## 3. q62 — *What are the volume and surface area of a spherical cap?*
> Quins són el volum i la superfície d'un casquet esfèric?

**Moviment: redueix el desconegut al conegut.** DEPÈN de q60 (ja fet,
Cavalieri con-semiesfera).

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
Dues fórmules, en termes del radi de l'esfera R i de l'alçada del casquet
h (h és la distància des del "cim" del casquet fins al pla de tall —
no confonguis h amb R: quan h=R, el casquet és exactament la semiesfera
que ja vas mesurar a q60).

**Pista 1 — comença pel cas que ja saps.**
Quan h=R, el casquet ÉS la semiesfera. A q60 vas trobar-ne el volum
comparant-la (per Cavalieri) amb un cilindre menys un con. Aquesta mateixa
comparació, feta a QUALSEVOL alçada de tall —no només a l'equador— és la
clau per al cas general.

**Pista 2 — la construcció.** → `fig-072.png`
El mateix pla de tall horitzontal de fig-050 (q60), ara aplicat a un
casquet de qualsevol alçada h, no només a la semiesfera sencera.

**Pista 3 — tanca-ho.**
A cada alçada dins del casquet, la secció del casquet (un cercle) i la
secció del cilindre-menys-con auxiliar tenen la mateixa àrea — exactament
el mateix argument de q60, aplicat entre 0 i h en lloc d'entre 0 i R. Per
Cavalieri, doncs, el casquet té el mateix volum que aquell tros de
cilindre-menys-con, que sí que saps calcular: un cilindre de radi R i
alçada h, menys el tronc de con que hi queda a dins.

El tronc té alçada h i radis R−h (a baix) i R (a dalt). El volum d'un tronc
ja el vas fer a q48, allà amb base quadrada; amb base circular la fórmula té
la mateixa forma però amb π: (πh/3)(a²+ab+b²). Substitueix a=R−h i b=R,
resta-ho de πR²h i simplifica —veuràs que els R² es cancel·len sols i et
queda una expressió ben curta en h i R.

Un avís d'honestedat, i en van dos. El primer: que "sumar" àrees de
seccions infinitament primes doni exactament un volum és el pas que el
càlcul integral formalitza, i és fora d'aquest quadern —el mateix tipus de
frontera que ja et vas trobar a q64 amb la longitud de l'astroide. El
segon, i val la pena que el sàpigues: **tot això et dona el VOLUM, no la
superfície**. La fórmula de l'àrea corba del casquet, 2πRh, és certa i és
un teorema d'Arquimedes —diu que projectant el casquet horitzontalment
sobre el cilindre que envolta l'esfera, l'àrea es conserva exactament, cosa
gens evident—, però aquí te la donem, no la demostrem. El que sí que és teu del tot és l'argument de Cavalieri: dues
figures amb la mateixa secció a cada alçada tenen el mateix volum.

**Comprovació.** R=2, h=1: V=(πh²/3)(3R−h)=(π/3)(6−1)=5π/3≈5,24.
Comprova que quan h=R=2 recuperes el volum de la semiesfera de q60
(2/3)πR³=16π/3≈16,76. Superfície corba (sense la base): 2πRh=4π≈12,57.

**I després.** Quan h=2R (el casquet és l'esfera sencera), la fórmula del
volum es converteix en (4/3)πR³ — la fórmula habitual de l'esfera, com a
cas particular d'aquesta de més amunt.

---

## 4. q63 — *Can you think of two different ways that a cylinder can be regarded as the result of a motion?*
> Se t'acuden dues maneres diferents en què un cilindre és el resultat d'un moviment?

**Moviment: distingeix els casos.**

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
Dues descripcions del cilindre com "una forma plana que s'ha mogut",
genuïnament diferents — no la mateixa idea dita amb altres paraules.

**Pista 1 — pensa en QUÈ es mou i QUIN moviment fa.** → `fig-197.png`
Una manera: quina forma plana, desplaçada en línia recta, deixa un
cilindre al seu pas? Una altra manera, molt diferent: quina forma plana,
girada al voltant d'un eix, l'escombra sencer? (I, ja posats: quina forma
plana, girada, en traça només la superfície lateral, sense omplir-lo?)

**Pista 2 — la construcció.** → `fig-073.png`

**Pista 3 — tanca-ho.**
La primera manera (translació d'un cercle) no fa servir cap eix ni cap
gir. La segona (rotació d'un rectangle al voltant d'un dels seus costats)
sí. Comprova que totes dues arriben al mateix sòlid final.

**Comprovació.** No numèrica: descriu, per a cadascuna de les dues
maneres, quina és la forma plana que es mou i quin és exactament el
moviment (direcció de translació, o eix de rotació).

**I després.** La segona manera (rotació d'una forma plana al voltant
d'un eix) és exactament la idea que fa funcionar el teorema de Pappus, que
la converteix en una eina general per calcular volums: q65, q66, q67 i q68
hi estan dedicades.

---

## 5. q48 — *A square of side a is placed at a height h above a square of side b, forming an incomplete pyramid. How does its volume depend on a, b, and h?*
> Un quadrat de costat a se situa a una alçada h sobre un quadrat de costat b, formant una piràmide incompleta. Com depèn el seu volum de a, b i h?

**Moviment: redueix el desconegut al conegut.**

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva — les arestes que semblen "inclinar-se" cap a un punt en el
dibuix realment hi convergeixen: no és un efecte de la teva mà.

**Pista 0 — què has de produir.**
Una fórmula en a, b, h. "Incompleta" és la pista: el sòlid és un tros
d'una piràmide, no una piràmide sencera.

**Pista 1 — completa el que falta.**
Prolonga els quatre costats inclinats del tronc fins que es tornin a
trobar en un sol punt: és el vèrtex de la piràmide sencera de la qual el
teu sòlid n'és només un tros. Aquest punt existeix perquè els dos quadrats
són paral·lels i concèntrics —un és l'altre a una escala diferent—, amb
una única excepció que val la pena tenir present: si a=b, els costats són
verticals i no es troben mai. En aquell cas el sòlid no és cap tronc de
piràmide sinó un prisma, i el seu volum és simplement a²h.

**Pista 2 — la construcció.** → `fig-074.png`
Els costats prolongats fins al vèrtex comú, marcats en sanguina — no
formaven part de l'enunciat original.

**Pista 3 — tanca-ho.**
El teu sòlid és (piràmide gran, fins al vèrtex, base b) menys (piràmide
petita, el tros de dalt que has afegit imaginàriament, base a). Per
semblança de triangles, quina alçada té cadascuna en termes de a, b, h?

**Comprovació.** a=2, b=4, h=3: alçada de la piràmide gran H tal que
a/b=(H−h)/H → H=6. Volum gran=(1/3)(16)(6)=32. Volum petit=(1/3)(4)(3)=4.
Volum del tronc=32−4=28.

**I després.** Aquesta mateixa jugada —completar una figura incompleta
fins a una de coneguda, i restar-ne el tros de més— la retrobaràs al
casquet esfèric (q62) i, en un altre embolcall, al con aproximat per
discs (q50, a continuació).

---

## 6. q50 — *Can you figure out the pattern to these approximations?*
> Trobes el patró d'aquestes aproximacions?

**Moviment: cas límit.** DEPÈN de q18a (ja fet, volum per capes).

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
No un únic volum: una successió de valors (un per cada nombre de discs) i
el reconeixement de cap a on tendeix.

**Pista 1 — comença amb pocs discs.**
Amb un sol disc (un cilindre curt dins del con), el volum aproximat es
queda curt de veritat. Amb dos discs més prims, ja s'hi assembla més.
Cada disc és un cilindre — el mateix objecte de volum conegut que ja vas
fer servir a q18a, ara apilat en comptes de format per una sola capa.

**Pista 2 — la construcció.** → `fig-075.png`

**Pista 3 — tanca-ho.**
Compte a no contestar "s'acosta al volum del con, que ja el sé": això no
és cap patró, i a més és fer servir la resposta per justificar-la. El que
et demanen és la successió: quant val la suma dels discs per a cada n?

Parteix l'alçada en n llesques iguals i fixa't que el disc de la llesca
número j (comptant des de dalt) té el radi que té el con al SEU sostre, o
sigui r(j−1)/n, i gruix h/n. Suma'ls:

  Vₙ = Σ π·[r(j−1)/n]²·(h/n) = (πr²h/n³)·(0² + 1² + 2² + … + (n−1)²)

I la suma de quadrats consecutius val (n−1)n(2n−1)/6. Simplifica-ho i
mira què et queda: sortirà πr²h multiplicat per una expressió amb n que
pots llegir d'un cop d'ull.

**Comprovació.** El que t'ha de sortir és Vₙ = πr²h·(1/3 − 1/(2n) +
1/(6n²)), sempre una mica per SOTA d'un terç —els discs van per dins del
con— i acostant-s'hi tant com vulguis si tries n prou gran. Amb n=2 dona
1/8 del cilindre; amb n=8 (els set discs que es veuen al dibuix, més la
llesca de dalt que queda buida), 35/128 ≈ 0,273; amb n=100, 0,32835.

Con de radi 3, alçada 6: volum = (1/3)π(9)(6) = 18π ≈
56,5. El cilindre corresponent (mateixa base i alçada) fa 3 vegades més:
54π ≈ 169,6. Comprova que la successió d'aproximacions per discs, per a
n creixent, s'acosta a 18π i no a 54π.

**I després.** Aquesta mateixa idea —apilar peces conegudes cada cop més
primes i mirar cap a on tendeix la suma— reapareix quan cal justificar per
què el volum del casquet esfèric (q62) depèn de l'alçada de tall
exactament com hi depèn. I sobretot a q121, amb la paràbola: allà surt la
mateixa suma de quadrats i la mateixa expressió, però amb els signes de
l'altra banda —1/3 + 1/(2n) + 1/(6n²) en lloc de 1/3 − 1/(2n) + 1/(6n²)—
perquè allà els rectangles sobresurten de la corba en comptes de quedar-hi
per dins. Val la pena comparar-les quan hi arribis.

---

## 7. q57 — *What are the volumes of the Platonic solids? How about the other symmetrical polyhedra?*
> Quins són els volums dels sòlids platònics? I els d'altres poliedres simètrics?

**Moviment: redueix el desconegut al conegut.** DEPÈN de q08b (ja fet, els
cinc poliedres regulars).

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
No cal que en trobis els cinc: n'hi ha prou que en resolguis un (o dos)
de manera que el mètode sigui evidentment el mateix per als altres tres.

**Pista 1 — parteix-lo en peces que ja saps mesurar.**
Uneix el centre del sòlid amb cadascun dels seus **vèrtexs**: això és el
que el parteix en piràmides, una per cada cara. (Compte a no confondre-ho
amb el segment que va del centre al centre d'una cara: aquell no talla res,
però et farà falta de seguida, perquè és l'ALÇADA de cada piràmide.)
Quantes peces n'obtens, per a un tetraedre? I per a un octaedre?

**Pista 2 — la construcció.** → `fig-076.png`
El tetraedre i l'octaedre, cadascun partit en piràmides des del seu
centre —el mateix nombre de piràmides que de cares.

**Pista 3 — tanca-ho.**
Cada peça és una piràmide amb base una cara del sòlid i alçada
l'apotema del sòlid (la distància del centre a una cara). El volum total
és (nombre de cares) × (1/3) × (àrea d'una cara) × (apotema) — que es
pot reescriure com (1/3) × (àrea total de la superfície) × (apotema).

**Comprovació.** Tetraedre d'aresta 1: apotema ≈ 0,204, àrea total ≈
1,732 (4 cares equilàters). Volum ≈ (1/3)(1,732)(0,204) ≈ 0,118 —
coincideix amb la fórmula coneguda s³/(6√2).

**I després.** La fórmula "(1/3) × superfície × apotema" no fa servir
enlloc que el sòlid sigui un dels cinc platònics: val per a QUALSEVOL
poliedre que tingui un punt equidistant de totes les cares — la mateixa
generalització que ja vas veure amb l'àrea d'un polígon regular
(triangulació des del centre, q39).

---

## 8. q58 — *Suppose two identical cylinders meet at right angles. What does their intersection look like, and what is its volume? What about three mutually perpendicular cylinders?*
> Suposa que dos cilindres idèntics es troben en angle recte. Quin aspecte té la seva intersecció, i quin volum té? I tres cilindres mútuament perpendiculars?

**Moviment: redueix el desconegut al conegut.** DEPÈN de q54/q55/q60 (ja
fets, Cavalieri).

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva — aquesta guia hi depèn més que cap altra d'aquest lot:
confia en la relació (secció quadrada), no en com "sembla" el dibuix.

**Pista 0 — què has de produir.**
Una descripció de la forma (no és cap sòlid que ja tinguis nom per a
ell) i el seu volum, en termes del radi r comú als dos cilindres.

**Pista 1 — talla-ho amb un pla, com a Cavalieri.**
Talla la intersecció amb un pla horitzontal, a una alçada y qualsevol per
sobre del centre. Aquest pla talla CADA cilindre en una franja rectangular
d'amplada 2√(r²−y²) (el mateix Pitàgores que ja fas servir per a la
corda d'un cercle). La intersecció dels dos cilindres, en aquest pla, és
on totes dues franges es superposen.

**Pista 2 — la construcció.** → `fig-077.png`
On es superposen les dues franges rectangulars (marcades en sanguina),
quina forma dibuixen — un cercle, o alguna altra cosa?

**Pista 3 — tanca-ho.**
A cada alçada y, la secció de la intersecció NO és un cercle: és un
QUADRAT de costat 2√(r²−y²) (perquè les dues franges, perpendiculars
entre si, es tallen en un quadrat).

Ara et cal un sòlid conegut per comparar-hi, i has d'anar amb compte a
triar-lo: no serveix el cilindre. Les seccions horitzontals d'un cilindre
vertical són cercles de radi r SEMPRE EL MATEIX, mentre que els teus
quadrats es van encongint amb l'alçada. El sòlid que sí que encaixa és
**l'esfera de radi r** —la que queda inscrita a la intersecció—, perquè la
seva secció a l'alçada y és un cercle de radi √(r²−y²): exactament el
mateix √(r²−y²) que et marca el costat del quadrat.

Amb s = √(r²−y²): quina relació hi ha entre l'àrea d'un quadrat de costat
2s i la d'un cercle de radi s? Comprova que aquesta relació NO depèn de y
—que és el que et deixa aplicar Cavalieri— i multiplica-la pel volum de
l'esfera, que ja el saps.

**Comprovació.** La raó entre les dues piles és 4s²/(πs²) = 4/π a totes
les alçades, així que el volum de la intersecció és (4/π)·(4/3)πr³ =
**(16/3)r³**. Amb r=1: ≈ 5,33. Compara-ho amb el volum d'un
sol cilindre de radi 1 i alçada 2: 2π ≈ 6,28 — la intersecció és menor,
com cal esperar.

**I després.** Per a tres cilindres mútuament perpendiculars, la
intersecció ja no es pot tallar amb un sol Cavalieri net com aquest — el
volum (una fracció coneguda però més subtil del cub que els conté) queda
com a pregunta oberta per a qui vulgui anar-hi més enllà d'aquest quadern.

---

## 9. q61 — *Show that the surface area of a sphere is exactly two-thirds that of its (closed) cylinder.*
> Demostra que la superfície d'una esfera és exactament dos terços de la del seu cilindre (tancat).

**Moviment: dues maneres.** DEPÈN de q59 (aquest mateix lot).

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
"El seu cilindre" vol dir: el cilindre que envolta l'esfera exactament
—mateix radi, alçada igual al diàmetre— tancat amb les seves dues tapes
circulars, no obert.

**Pista 1 — calcula les dues superfícies per separat.**
Superfície de l'esfera: 4πr². Superfície del cilindre tancat: la part
lateral (2πr, el perímetre, per 2r, l'alçada) més les dues tapes
circulars (πr² cadascuna).

**Pista 2 — la construcció.** → `fig-078.png`

**Pista 3 — tanca-ho.**
Suma les tres peces del cilindre (lateral + dues tapes) en un sol terme, i
compara-la directament amb 4πr².

**Comprovació.** r=1: esfera=4π≈12,57. Cilindre: lateral=4π, tapes=2π,
total=6π≈18,85. Ratio: 4π/6π=2/3 exacte.

**I després.** Aquest 2/3 no té cap relació aritmètica amb el π/6 de q59
—són dues comparacions diferents, amb dos sòlids continents diferents (allà
un cub, aquí un cilindre), i π/6 + 2/3 no fa res en particular. El que sí
que val la pena mirar és una altra cosa: calcula ara la raó de VOLUMS entre
l'esfera i aquest mateix cilindre. L'esfera fa (4/3)πr³ i el cilindre
πr²·2r = 2πr³, o sigui... 2/3 una altra vegada. Que la mateixa fracció
governi alhora les superfícies i els volums és el resultat que Arquimedes
va demanar que li gravessin a la tomba.

---

## 10. q64 — *What is the perimeter of a region formed by a moving stick?*
> Quin perímetre té una regió formada per un bastó en moviment?

**Moviment: cas límit.** DEPÈN de q50 (aquest mateix lot).

**Nota sobre aquesta guia.** No tinc l'escaneig ni el text original
d'aquesta pregunta — l'enunciat en anglès és tot el que hi ha. M'he guiat
per la classificació interna del projecte ("raonament d'envolupant,
moderat"), que assenyala inequívocament el problema clàssic següent: un
bastó de llargada fixa L rellisca amb un extrem sobre una paret i l'altre
sobre el terra (perpendiculars entre si). Si aquesta lectura no és la de
l'enunciat real del llibre, cal corregir-ho — v. `NOTA-LOT-7.md`.

**Pista 0 — què has de produir.**
El perímetre de la regió que el bastó, en totes les seves posicions
(des de vertical fins a horitzontal), acaba cobrint en algun moment.

**Pista 1 — dibuixa unes quantes posicions, no totes.**
Marca la posició del bastó per a 8 o 10 angles diferents, des de vertical
fins a horitzontal. Els dos extrems de cada posició estan sempre sobre la
paret i el terra. Mira la vora de la regió que totes elles, juntes,
deixen coberta.

**Pista 2 — la construcció.** → `fig-079.png`

**Pista 3 — tanca-ho.**
La vora de la regió té tres trossos: el tram de paret des de la
cantonada fins on arriba el bastó vertical (llargada L), el tram de terra
simètric (llargada L), i una corba —no una línia recta ni un arc de
cercle— tangent a totes les posicions que has dibuixat: la seva
envolupant. Aquesta corba es diu astroide. La seva llargada exacta (un
quart d'astroide) resulta ser 1,5×L —un fet que es demostra amb eines de
fora d'aquest quadern (càlcul infinitesimal); aquí la guia arriba fins a
RECONÈIXER i CONSTRUIR l'envolupant, no fins a demostrar-ne la llargada.

**Comprovació.** L=2: perímetre = L + L + 1,5L = 3,5L = 7. Comprova-ho
mesurant, sobre el teu propi dibuix de fig-079, la llargada aproximada de
la corba i sumant-hi els dos trams rectes.

**I després.** Aquesta mateixa família de posicions —un segment que llisca
mantenint els extrems sobre dues rectes fixes— reapareix a la geometria
projectiva amb un altre nom i un altre objectiu; aquí en n'hi ha prou amb
haver reconegut que "la vora d'una regió escombrada" no sempre és una
línia recta ni un arc de cercle.

---

## 11. q65 — *How should we define the centroid of a shape? Can we do it in such a way that Pappus's theorem holds?*
> Com hauríem de definir el centroide d'una figura? Es pot fer de manera que el teorema de Pappus es compleixi?

**Moviment: construeix la solució a partir de la seva pròpia definició.**
DEPÈN de q63 (aquest mateix lot).

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
No un número: una DEFINICIÓ. "El teorema de Pappus" diu que el volum
generat en girar una figura plana al voltant d'un eix (que no la talla)
és (àrea de la figura) × (distància recorreguda pel seu centroide). El
teu encàrrec és decidir QUÈ ha de ser "el centroide" perquè aquesta
frase, tal com està escrita, surti certa.

**Pista 1 — comença pel cas més fàcil de comprovar.**
Un rectangle, girat al voltant d'un dels seus costats, genera un
cilindre —el volum del qual ja saps calcular per una altra via. Quin punt
del rectangle, multiplicat per 2π i per la seva distància a l'eix,
reprodueix exactament aquest volum?

**Pista 2 — la construcció.** → `fig-080.png`
El punt marcat "centroide": quina distància a l'eix, multiplicada per
2π, hauria de reproduir el volum del cilindre que ja saps calcular?

**Pista 3 — tanca-ho.**
Per al rectangle, el punt que fa funcionar el teorema resulta ser el seu
CENTRE —el centre de gravetat "de tota la vida", allà on es creuen les
dues diagonals—, que és a mitja amplada de l'eix. Compte amb la
temptació d'agafar el costat oposat a l'eix: aquell és el punt més LLUNY
de l'eix, no el punt mitjà, i et donaria el doble del volum real.

Ara, la definició general. Vigila amb la sortida fàcil: dir "el centroide
és el punt que fa que Pappus funcioni" NO serveix, per dues raons. La
primera és que no defineix cap punt —només et fixa a quina distància ha de
ser d'un eix concret, i això és una recta de punts possibles, no un punt.
La segona és que et deixa sense pregunta: si el defineixes així, Pappus
surt cert per decret, i l'enunciat et demanava precisament si es POT fer
que surti cert.

La definició que sí que serveix no parla d'eixos ni de volums: **talla la
figura en molts trossos petits, tots de la mateixa àrea, i pren la posició
MITJANA de tots ells.** Aquest és el centroide —el punt on la figura,
retallada en cartolina, se't quedaria en equilibri damunt d'un dit.

I ara sí que Pappus és una afirmació que es pot comprovar. Mira per què
funciona: quan gires, cada trosset d'àrea que és a distància r de l'eix
recorre una circumferència de llargada 2πr, i escombra un volum (trosset) ×
2πr. Sumant-ho tot, el volum és 2π × (àrea total) × (la MITJANA de les
distàncies r). I aquesta mitjana de distàncies és exactament la distància
del centroide a l'eix —perquè el centroide és la posició mitjana i, mentre
la figura queda tota a una banda de l'eix, la distància a l'eix creix de
manera uniforme a mesura que t'hi allunyes. Aquí es veu, de passada, per
què l'enunciat de Pappus exigeix que l'eix NO talli la figura: si la
tallés, hi hauria trossos a banda i banda, les distàncies deixarien de
comptar totes en el mateix sentit, i la mitjana ja no seria la distància
del centroide.

**Comprovació.** Rectangle de costats 2 i 3, girat al voltant del costat
de llargada 3. El costat perpendicular a l'eix fa 2, així que el centre
del rectangle és a distància 1 de l'eix. Pappus dona àrea(6) × 2π ×
distància(1) = 12π; el cilindre que en surt de veritat té radi 2 i alçada
3, és a dir π(2²)(3) = 12π. Coincideixen exactament. Si t'ha sortit 24π,
hi has posat la distància al costat de més enllà (2) en lloc de la
distància al centre (1) —és l'error que la Pista 3 t'avisava.

**I després.** Un cop tens la definició, es converteix en una eina que es
pot aplicar a qualsevol figura, no només al rectangle: q66 la comprova amb
un rectangle que no toca l'eix, q67 en fa la versió per a perímetres i
superfícies, i q68 la fa servir a l'inrevés (coneixent el volum, per trobar
on és el centroide).

---

## 12. q67 — *How should we define the centroid of perimeter?*
> Com hauríem de definir el centroide d'un perímetre?

**Moviment: construeix la solució a partir de la seva pròpia definició.**
DEPÈN de q65 (aquest mateix lot).

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
Una segona definició de "centroide" —no la de q65 (la d'una regió plana,
que fa funcionar Pappus per a VOLUMS), sinó la del contorn (una corba,
o una línia trencada), pensada perquè Pappus funcioni per a SUPERFÍCIES
generades en girar.

**Pista 1 — el mateix truc, amb una peça diferent.**
El centroide d'una regió (q65) es construeix repartint l'ÀREA en trossos
petits i prenent la posició mitjana de tots ells. Aquí fes exactament el
mateix, però amb una peça diferent: reparteix el PERÍMETRE en trossets
petits de longitud, i pren la posició mitjana d'aquests.

**Pista 2 — la construcció.** → `fig-081.png`

**Pista 3 — tanca-ho.**
El centroide del perímetre és la posició mitjana dels trossets de
longitud del contorn —definit, doncs, sense parlar d'eixos ni de
superfícies, igual que a q65. I la versió de Pappus que en surt és: la
SUPERFÍCIE generada en girar el contorn val (llargada total del perímetre)
× 2π × (distància d'aquest centroide a l'eix). Fixa't en els dos canvis
respecte de q65, que van aparellats: on hi havia àrea ara hi ha longitud, i
on hi havia volum ara hi ha superfície.

I compte amb una cosa: el centroide del perímetre i el centroide de la
regió NO són el mateix punt en general. Coincideixen quan la figura té prou
simetria (un rectangle, un cercle), i per això és fàcil no adonar-se'n.

**Comprovació.** Un segment de llargada 3, girat a distància 2 del seu
punt mitjà: superfície = perímetre(3) × 2π × distància(2) = 12π —
compara-ho amb la superfície lateral d'un cilindre de radi 2 i alçada 3:
2π(2)(3)=12π. Coincideixen.

**I després.** q68 fa servir aquesta mateixa idea, però pensada al revés:
allà coneixes ja el volum del sòlid generat, i el que et falta és ON és
exactament el centroide.

---

## 13. q66 — *Show that Pappus's theorem works for a cylinder formed by rotating a rectangle.*
> Demostra que el teorema de Pappus funciona per a un cilindre format en girar un rectangle.

**Moviment: redueix el desconegut al conegut.** DEPÈN de q65 (aquest
mateix lot).

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
Una comprovació, no una definició nova: que la fórmula de Pappus
(àrea × 2π × distància del centroide) i la fórmula habitual del volum
d'un cilindre donen EXACTAMENT el mateix nombre.

**Pista 1 — situa el rectangle respecte de l'eix.**
Rectangle d'amplada w (perpendicular a l'eix) i alçada H (paral·lela a
l'eix), amb el costat més proper a l'eix a distància d. El seu centroide
—la posició mitjana de tots els seus punts, que és la definició que es
construeix a q65— és al seu propi centre geomètric, per simetria.

**Pista 2 — la construcció.** → `fig-082.png`

**Pista 3 — tanca-ho.**
Calcula el volum amb Pappus (àrea del rectangle × 2π × distància del
centre a l'eix) i, per separat, com la resta de dos cilindres (el radi
d+w menys el radi d, mateixa alçada H). Haurien de coincidir per a
qualsevol w, H, d.

**Comprovació.** w=1, H=3, d=2 (centre a distància 2,5 de l'eix): Pappus
= 1×3 × 2π × 2,5 = 15π. Per resta de cilindres: π(3²)(3)−π(2²)(3) =
27π−12π=15π. Coincideixen.

**I després.** El mateix càlcul, aplicat a un rectangle que TOCA l'eix
(d=0, un dels costats sobre l'eix mateix) es converteix en el cas
particular que ja coneixies (un cilindre senzill, sense forat) —Pappus no
distingeix aquest cas com a especial, la fórmula simplement hi funciona
igual.

---

## 14. q68 — *If we rotate a right triangle it forms a cone. Assuming Pappus is right, where must the centroid of the triangle be?*
> Si girem un triangle rectangle es forma un con. Suposant que Pappus té raó, on ha d'estar el centroide del triangle?

**Moviment: dues maneres.** DEPÈN de q65, q66, q67 (aquest mateix lot).

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
No el volum del con (ja el coneixes: (1/3)πr²h) — la DISTÀNCIA del
centroide del triangle a l'eix de gir, que és el catet vertical del
triangle rectangle.

**Pista 1 — planteja l'equació amb Pappus, amb la distància com a
incògnita.**
El triangle rectangle té catets r (horitzontal, perpendicular a l'eix) i
h (vertical, sobre l'eix). La seva àrea és (1/2)rh. Pappus diu: volum =
àrea × 2π × distància del centroide a l'eix. Ja coneixes el volum (el
con). Què queda per aïllar?

**Pista 2 — la construcció.** → `fig-083.png`

**Pista 3 — tanca-ho.**
Iguala (1/2)rh × 2π × d amb (1/3)πr²h, i aïlla d. El resultat et diu a
quina fracció de r (el catet horitzontal) ha d'estar el centroide,
independentment de h.

**Comprovació.** r=3, h=4: volum del con=(1/3)π(9)(4)=12π. Àrea del
triangle=(1/2)(3)(4)=6. Pappus: 12π=6×2π×d → d=1. Fracció: d/r=1/3 — el
centroide d'un triangle rectangle és sempre a un terç de la distància
horitzontal des de l'eix, sigui quin sigui h.

**I després.** Aquest 1/3 no és una coincidència del triangle rectangle:
és el mateix fet, general per a qualsevol triangle, que el centroide (la
mitjana dels tres vèrtexs) es troba a un terç de cada mediana comptant
des del costat corresponent — el mateix punt que ja vas fer servir,
sense dir-ne el nom, en qualsevol pregunta d'aquest llibre que parli del
"centre de gravetat" d'un triangle.

