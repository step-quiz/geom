# Lot 9 — disset guies noves (pp. 138–175, projecció i còniques)

Disset preguntes noves: q91, q92, q93, q94, q99, q100, q101, q102, q103,
q104, q105, q106, q107, q108, q109, q110, q111. **Ordre del llibre,
estrictament** — a diferència de la resta del projecte, aquí no es pot
reordenar per conveniència pedagògica: q101–q106 construeixen la raó
doble i els punts a l'infinit de manera acumulativa, i q109 (esferes de
Dandelin) depèn de q107.

**Nota important sobre q94 i q109.** Totes dues tracten la mateixa
el·lipse, però són preguntes genuïnament diferents. q94 (2D, dificultat
1) és el cas degenerat: un cercle és una el·lipse amb els dos focus
fosos en un de sol, al centre. q109 (3D, dificultat 3) és la
demostració de Dandelin que una secció cònica qualsevol —no
degenerada— és de veritat una el·lipse amb focus concrets, tallant un
con amb dues esferes tangents al pla de tall. Les guies respectives no
tracten l'una com si fos "el mateix" que l'altra: q109 remet a q94 a la
seva "i després" com el cas límit trivial, mai a l'inrevés.

**Avís obligatori a totes les guies 3D d'aquest lot** (q91, q92, q93,
q100, q101, q102, q103, q104, q105, q106, q107, q109): un angle recte no
es veu recte en una projecció en perspectiva.

**Notació.** Un arc = "aquests angles són iguals entre ells." Dos arcs =
una classe d'igualtat DIFERENT. Els mateixos criteris amb marques de
tick. Cap figura d'aquest lot fa servir dues classes d'igualtat alhora,
així que no calen recordatoris addicionals.

**Moviments reutilitzats, cap d'inventat** —encara que aquest lot
introdueix el vocabulari matemàtic més nou de tot el projecte (punt a
l'infinit, raó doble, focus, directriu, esferes de Dandelin), els
catorze moviments que calen ja existien.

---

## 1. q91 — *How exactly does the dilation factor depend on the angle between the planes?*
> Com depèn exactament el factor d'escala de l'angle entre els plans?

**Moviment: redueix el desconegut al conegut** (però mira't també la
l'estirament de q112 i q114: el que surt d'aquí és
exactament això, un factor que no és el mateix en totes les direccions —o
sigui que no és cap homotècia).

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
Una fórmula per al factor pel qual s'allarga o s'escurça una longitud quan
es projecta perpendicularment d'un pla a un altre. Però abans que res,
compte amb la paraula "factor": aquí **no n'hi ha un de sol**. La primera
feina és descobrir de què depèn, a part de l'angle entre els plans.

**Pista 1 — prova-ho amb un cas fàcil, i després amb un altre.**
Si els dos plans coincideixen (angle 0°), cap longitud canvia: factor 1.
Si el pla girés fins quedar perpendicular a l'altre (angle 90°), un
segment que hi fos perpendicular es projectaria a un sol punt: factor 0.
Quina funció trigonomètrica val 1 a 0° i 0 a 90°?

Ara la pregunta incòmoda, amb els plans a 90°: què li passa a un segment
que estigui **damunt de la recta on els dos plans es tallen**? Aquella
recta és als dos plans alhora, i per tant el segment no es mou gens: factor
1, no 0. Dos segments de la mateixa longitud, dins del mateix pla, amb
factors diferents.

**Pista 2 — la construcció.** → `fig-099.png`
Un segment sobre el pla inclinat, perpendicular a la línia on es
tallen els dos plans, i la seva projecció (perpendicular) sobre el pla
horitzontal.

**Pista 3 — tanca-ho.**
Per al segment del dibuix —el perpendicular a la recta de tall— el segment,
la seva projecció i el tros de pla entre tots dos formen un triangle
rectangle: la hipotenusa és el segment original, un catet és la projecció,
i l'angle entre els plans és exactament l'angle d'aquest triangle que toca
el segment original. La raó entre catet i hipotenusa et dona el factor
**cos θ**, i aquest és el més petit de tots.

Amb això ja pots descriure què fa la projecció a qualsevol figura: encongeix
per un factor cos θ **en la direcció perpendicular a la recta de tall**, i
no toca res **en la direcció de la recta de tall**. És un estirament, doncs,
amb dos factors diferents segons la direcció —el mateix tipus de
transformació que trobaràs a q112. Un segment en qualsevol altra direcció
queda entremig, entre cos θ i 1.

I encara hi ha un número que sí que és el mateix per a tothom: **l'àrea**.
Si el rectangle que projectes té un costat en cada una d'aquestes dues
direccions, un costat es queda igual i l'altre es multiplica per cos θ, o
sigui que l'àrea es multiplica exactament per cos θ, sigui quina sigui la
figura. Això sí que és un factor únic.

**Comprovació.** Angle entre plans de 60°. Un segment de 8 unitats
perpendicular a la recta de tall es projecta a 8×cos60° = 4 unitats. Un
segment de 8 unitats **damunt** de la recta de tall es projecta a 8: no
canvia. I un de 8 a 45° de la recta de tall es projecta a 6,32 —entremig,
com havia de ser. L'àrea, en canvi, sempre queda multiplicada per 0,5.

**I després.** Aquí tens la comprovació de tot plegat: una moneda circular,
vista de gairebé de cantell, es veu com una el·lipse molt aixafada, i la
relació entre els dos eixos de l'el·lipse és exactament aquest cosinus. Que
es vegi el·lipse i no cercle petit **és** la prova que el factor no és el
mateix en totes direccions: si ho fos, un cercle donaria sempre un cercle.

---

## 2. q92 — *Do projections in any direction always produce dilations?*
> Les projeccions en qualsevol direcció, sempre produeixen homotècies?

**Moviment: contraexemple.**

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
Una resposta de NO, amb un exemple concret de projecció que NO sigui
una homotècia (és a dir, que no multipliqui totes les longituds pel
mateix factor constant).

**Pista 1 — hi ha dues maneres de fallar, i q91 ja et va ensenyar la primera.**
A q91 vas veure que fins i tot la projecció perpendicular entre dos plans
inclinats deixa una direcció intacta i n'encongeix una altra per cos θ: ja
no és cap homotècia. O sigui que la resposta és **no** abans i tot
de canviar de direcció de projecció.

La segona manera és pitjor, i val la pena veure-la perquè és de naturalesa
diferent. Què passa si les línies de projecció, en lloc de ser paral·leles
entre si, passen totes per un sol punt fix —una "làmpada"?

**Pista 2 — la construcció.** → `fig-100.png`
Dos plans, un punt de projecció, i dos punts sobre el primer pla a
diferents distàncies del punt de projecció, projectats sobre el segon.

**Pista 3 — tanca-ho.**
En una projecció central, l'ombra d'un segment paral·lel a la pantalla
s'amplia pel factor (distància de la làmpada a la pantalla) dividit per
(distància de la làmpada al segment). O sigui que **com més a prop de la
làmpada, més gran surt l'ombra** —és el que fas amb la mà quan vols que
l'ombra ompli la paret. Si el pla de partida està inclinat, els seus punts
són a distàncies diferents de la làmpada i cada tros s'amplia pel seu
compte.

Fixa't en la diferència amb q91: allà el factor depenia de la **direcció**
del segment i era el mateix a tot arreu de la figura; aquí depèn d'**on** és
el segment. Dues maneres distintes de no ser una homotècia.

I ja que hi ets, mira on és de veritat la frontera. No és en si les línies de
projecció són paral·leles o no: és en si **els dos plans** ho són. Amb els
plans paral·lels, tant l'una com l'altra donen una homotècia de debò —q100 en
calcula el factor. Amb els plans inclinats, cap de les dues.

**Comprovació.** Làmpada, pantalla a 12 unitats, i dos segments iguals
paral·lels a la pantalla, un a distància 2 de la làmpada i l'altre a
distància 6. Factors: 12/2 = 6 i 12/6 = 2. El de més a prop surt **tres
vegades més gran**, no més petit. Cap factor únic, doncs, cap homotècia.

**I després.** Aquesta distinció —el que decideix si una projecció és
una homotècia o no— és exactament la diferència entre un plànol
arquitectònic i una fotografia. Compte a no resumir-ho malament: no és
que la projecció paral·lela sigui sempre una homotècia (q91 ja et va
ensenyar que entre plans inclinats no ho és); el que passa és que un
plànol es dibuixa amb els dos plans paral·lels, i llavors sí, i és la raó per la qual les
línies paral·leles d'una via de tren semblen convergir en una
fotografia (q104) però no en un plànol.

---

## 3. q93 — *Why do the tangents from a given point to a sphere all have the same length?*
> Per què totes les tangents des d'un punt donat a una esfera tenen la mateixa longitud?

**Moviment: redueix el desconegut al conegut.**

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
Un argument que valgui per a QUALSEVOL de les infinites rectes tangents
des d'un mateix punt exterior —no la comprovació d'un sol cas.

**Pista 1 — el radi i la tangent són perpendiculars.**
Igual que en un cercle —és el que vas demostrar a q95—, el radi que va del
centre al punt de tangència és perpendicular a la recta tangent en aquell
punt. En tres dimensions continua valent, i per la mateixa raó: T és el
punt de la recta tangent més proper a O, i el segment més curt d'un punt a
una recta hi és perpendicular. Amb el centre O, el punt exterior P, i un
punt de tangència T qualsevol: quin angle té el triangle OPT al vèrtex
T?

**Pista 2 — la construcció.** → `fig-101.png`

**Pista 3 — tanca-ho.**
El triangle OPT és rectangle en T, amb hipotenusa OP (fixa, la
distància del punt exterior al centre) i un catet OT (el radi, també
fix). Pitàgores dona l'altre catet PT en termes només d'OP i del radi
—cap referència a QUIN punt de tangència T és. Com que OP i el radi són
els mateixos per a totes les tangents, PT també ho és.

**Comprovació.** Distància del punt exterior al centre: 10. Radi de
l'esfera: 6. Longitud de qualsevol tangent: √(10²−6²)=√64=8, la mateixa
per a totes.

**I després.** El mateix argument, amb el mateix triangle rectangle, val
paraula per paraula per a les dues tangents des d'un punt a un cercle en
2D; el quadern no t'ho ha demanat mai com a qüestió a part, però ja veus
que és el mateix teorema una dimensió més avall. En passar a tres
dimensions no canvia res essencial: només cal veure que O, P i T són
sempre tres punts no alineats —ho són, perquè l'angle a T és recte i el
triangle no pot degenerar— i que per tant hi ha un pla que els conté, dins
del qual tot passa com al pla de sempre.

Fixa't també en el que això vol dir de la figura sencera: els punts de
tangència no estan escampats de qualsevol manera, sinó tots a la mateixa
distància de P **i** tots a la mateixa distància d'O. Formen, doncs, una
circumferència.

---

## 4. q94 — *A circle is a special type of ellipse. Where are its focal points?*
> Un cercle és un tipus especial d'el·lipse. On són els seus focus?

**Moviment: cas límit.**

**Pista 0 — què has de produir.**
Un únic punt (no dos) —la posició exacta on han d'anar a parar els dos
focus d'una el·lipse perquè aquella el·lipse esdevingui un cercle.

**Pista 1 — torna a la definició d'el·lipse.**
Una el·lipse és el conjunt de punts P tals que PF₁+PF₂ és una constant
fixa (diguem-ne 2a). Si F₁ i F₂ són el MATEIX punt O, què diu aquesta
equació sobre la distància PO?

**Pista 2 — la construcció.** → `fig-102.png`
Els dos focus d'una el·lipse allargada, ben separats, al costat d'un
cercle amb els dos focus superposats en un sol punt marcat al centre.

**Pista 3 — tanca-ho.**
Si F₁=F₂=O, aleshores PF₁+PF₂ = 2·PO = 2a, és a dir PO = a: TOTS els
punts P estan a la mateixa distància a d'O. Això és, per definició, un
cercle de radi a centrat a O.

**Comprovació.** Amb 2a=14 (la suma constant), si els dos focus
coincideixen, PO=7 per a tot punt P de la corba —un cercle de radi 7.

**I després.** Aquest cas límit —dos punts que es fonen en un— torna a
q109, on veuràs la demostració completa (amb esferes de Dandelin) que
tallar un con amb un pla dona sempre una el·lipse amb dos focus
concrets; quan el pla de tall és perpendicular a l'eix del con, aquells
dos focus col·lapsen exactament com aquí, i la secció resultant és un
cercle. **No és la mateixa pregunta**: aquí n'hi ha prou amb la
definició; a q109 cal demostrar-ho des de la geometria del con.

---

## 5. q99 — *Can you work out the details of this proof?*
> Saps completar els detalls d'aquesta prova?

**Moviment: audita la demostració.** El llibre, en aquest punt (p.156),
esbossa que projectar des d'un punt preserva alguna cosa entre quatre
punts alineats —sense escriure tots els passos algebraics. Aquesta
guia treballa la prova que la RAÓ DOBLE de quatre punts d'una recta no
canvia quan es projecten (des d'un punt exterior) sobre una altra
recta.

**Pista 0 — què has de produir.**
Una comprovació algebraica completa, no només la intuïció, que la raó
doble de quatre punts A,B,C,D sobre una recta és exactament la mateixa
que la dels quatre punts A′,B′,C′,D′ que resulten de projectar-los des
d'un mateix punt O sobre una altra recta.

**Pista 1 — comença amb àrees de triangles.**
Per a un punt O fora de la recta i dos punts X,Y sobre la recta, l'àrea
del triangle OXY es pot escriure de dues maneres: mig producte de dos
costats pel sinus de l'angle al vèrtex O, o mig producte de la base XY
per l'alçada des d'O. Iguala-les per obtenir XY en termes de OX, OY, i
l'angle a O.

**Pista 2 — la construcció.** → `fig-103.png`

**Pista 3 — tanca-ho.**
Escriu cada una de les quatre distàncies AC, BD, BC, AD (les que
apareixen a la raó doble) amb la fórmula de la Pista 1, en termes
només de les distàncies OA, OB, OC, OD i dels SINUS dels angles entre
elles vistos des d'O. En la raó doble (AC·BD)/(BC·AD), els factors
OA, OB, OC, OD es cancel·len tots —el que queda depèn només dels
angles a O, que són EXACTAMENT els mateixos angles per als punts
projectats A′,B′,C′,D′ (són el mateix feix de rectes des d'O).

**Comprovació.** Amb A,B,C,D a distàncies 0,2,5,9 sobre una recta, la
raó doble val (5−0)(9−2)/((5−2)(9−0)) = 35/27 ≈ 1,296. Projecta
aquests quatre punts (numèricament, amb qualsevol punt O fora de la
recta i qualsevol segona recta) i comprova que torna a sortir 35/27.

**I després.** Aquest fet —que la raó doble sobrevisca la projecció
mentre que distàncies i raons simples no ho fan— és la base de tot el
que ve després en aquest bloc: q101 el reformula com una pregunta sobre
quants punts es poden moure lliurement. I ja li pots posar el nom que
li correspon: una quantitat que sobreviu qualsevol projecció és un
**invariant projectiu**, i la raó doble és el primer que trobes.

---

## 6. q100 — *What is the effect of central projection when the planes are parallel? What if the projection point lies between the planes?*
> Quin és l'efecte d'una projecció central quan els plans són paral·lels? I si el punt de projecció és entre els dos plans?

**Moviment: distingeix casos.**

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
DUES respostes, una per cada subcas de l'enunciat —no una de sola.
Primer: què li passa a una figura quan es projecta centralment entre
dos plans paral·lels (punt de projecció fora d'entremig). Segon: què
canvia si el punt de projecció queda ENTRE els dos plans.

**Pista 1 — segueix un sol punt amb un paràmetre.**
Posa el punt de projecció a alçada p, un pla a alçada 0 i l'altre a
alçada h. Un punt de coordenada x0 respecte de l'eix, al pla 0, es
projecta a la coordenada x0·(p−h)/p al pla h (surt de resoldre on la
recta des del punt de projecció talla el segon pla). Coordenada, i no
distància: el signe hi és part de la resposta. Prova-ho amb p més gran que h
(fora d'entremig) i després amb p entre 0 i h.

**Pista 2 — la construcció.** → `fig-104.png`

**Pista 3 — tanca-ho.**
Quan p és fora de l'interval [0,h], el factor (p−h)/p és positiu: la
figura es projecta ampliada o reduïda però SENSE capgirar-se. I val la
pena que t'hi aturis, perquè aquesta és la primera homotècia de debò
del bloc: a q91 el factor depenia de la direcció del segment, i
a q92 depenia d'on era el segment; aquí no depèn de res, és el mateix
número per a tota la figura i per a totes les direccions. El que ho
arregla no són les línies de projecció, que continuen sortint totes d'un
sol punt: és que ara els dos plans són PARAL·LELS. Quan p és entre 0 i
h, aquest mateix factor esdevé NEGATIU: la figura es projecta capgirada
(com la imatge d'una càmera fosca), no només escalada.

**Comprovació.** h=10. Amb p=−2 (fora, per sota): factor=(−2−10)/(−2)=6,
positiu. Amb p=20 (fora, per sobre): factor=(20−10)/20=0,5, també
positiu —la figura surt a la meitat i dreta. Amb p=5 (entremig):
factor=(5−10)/5=−1, negatiu —la figura surt exactament invertida i de la
mateixa mida. Acosta ara el punt de projecció al primer pla, p=0,001: el
factor es dispara a −9999, i a p=0 exacte ja no hi ha projecció
possible, perquè el punt de projecció cauria damunt de la figura
mateixa.

**I després.** Aquest capgirament és el mateix fenomen que fa que la
imatge dins d'una cambra fosca (o la retina de l'ull) surti invertida:
el punt de projecció (el forat) queda ENTRE l'objecte i la pantalla on
es forma la imatge.

---

## 7. q101 — *Can any three points on a line be projected to any other three collinear points? How about four points?*
> Es pot projectar qualsevol tercet de punts d'una recta a qualsevol altre tercet de punts alineats? I un quartet de punts?

**Moviment: invariant.** DEPÈN de q99 (aquest mateix lot, la raó doble
es conserva per projecció).

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
DUES respostes diferents: SÍ per a tres punts (sempre es pot trobar
una projecció que hi arribi), i en general NO per a quatre —amb la raó
exacta de per què quatre punts són diferents de tres.

**Pista 1 — compta graus de llibertat, però compta bé.**
Amb els tres punts d'arribada ja donats, la segona recta no la tries tu:
és la que ells determinen. Només et queda triar O, i això són dos
números per a tres condicions. Fixa't, a més, en una cosa que limita
molt una projecció sola: si les dues rectes es tallen en un punt X,
aleshores la recta que va d'O a X és la mateixa per a totes dues, o
sigui que **X es projecta damunt d'ell mateix**. Una projecció no pot
moure aquell punt de cap manera. Amb dues projeccions encadenades, en
canvi, sí que el pots moure —i aleshores els tres punts van on vulguis.

Un quart punt, en canvi, no s'arregla per molt que encadenis: la seva
posició queda determinada pels altres tres. Quina cosa, ja calculada a
q99, és la que el fixa?

**Pista 2 — la construcció.** → `fig-105.png`

**Pista 3 — tanca-ho.**
Un cop fixada la imatge de tres punts A,B,C (sempre possible, encara
que et calguin dues projeccions seguides, perquè tres punts no porten
cap invariant que els lligui), la imatge D′ del
quart punt D ha de complir que la raó doble (AC·BD)/(BC·AD) sigui la
MATEIXA abans i després (q99) —això determina D′ de manera única. Per
tant, quatre punts només es poden projectar a quatre punts amb la
mateixa raó doble, no a qualssevol quatre.

**Comprovació.** Fes-la amb números. Parteix dels quatre punts de q99,
a x=0, 2, 5 i 9, amb raó doble 35/27. Envia A→0, B→1 i C→3 (tres
imatges triades a l'atzar) i mira on ha d'anar D: imposant
(3−0)(d−1)/((3−1)(d−0)) = 35/27 surt d = 81/11 ≈ 7,364, i **no hi ha
cap altre valor possible**. Si en lloc de 35/27 haguessis volgut, per
exemple, 2, hauries obtingut un altre d —o sigui que els quatre punts
d'arribada no els pots triar tots quatre.

**I després.** Aquesta és la primera vegada, en aquest bloc, que es veu
EXPLÍCITAMENT que la raó doble no és només "una cosa que es conserva":
és la mesura completa de la llibertat que perdem en passar de tres
punts a quatre. El nom formal d'una quantitat així —una que cap
projecció no pot tocar— és **invariant projectiu**.

---

## 8. q102 — *Are all triangles the same projectively? How about all four-sided polygons?*
> Tots els triangles són el mateix projectivament? I tots els polígons de quatre costats?

**Moviment: invariant.** DEPÈN de q101 (aquest mateix lot).

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
DUES respostes. Segurament n'esperes un contrast —un sí i un no. Aquí
no n'hi ha: la resposta és **SÍ totes dues vegades**. Tots els triangles són el
mateix projectivament, i tots els quadrilàters també. La pregunta
interessant, doncs, canvia: si a la recta la llibertat s'acabava al
quart punt, per què al pla encara no s'ha acabat?

**Pista 1 — compta la llibertat que tens, no els vèrtexs.**
Una projecció central del pla no la tries a l'atzar: la tries posant el
punt de projecció en algun lloc i el pla d'arribada en algun altre. Cada
tria és un grapat de números que pots moure lliurement. D'altra banda,
cada punt que vols enviar a un lloc concret et gasta llibertat: fixar on
va a parar un punt del pla són dues condicions (la seva x i la seva y).
Compta-ho a la recta i al pla per separat: quants punts pots col·locar
on vulguis abans de quedar-te sense llibertat, en cada cas?

**Pista 2 — la construcció.** → `fig-106.png`

**Pista 3 — tanca-ho amb un terra enrajolat.**
Mira una foto d'un terra de rajoles quadrades, feta de gairebé qualsevol
lloc. Cada rajola és un quadrat de veritat, i a la foto n'hi ha de totes
les formes: més amples, més estretes, més aixafades com més lluny són.
Aquella foto és, literalment, una projecció central. Ja tens la resposta
davant dels ulls: un quadrat es pot projectar sobre tota mena de
quadrilàters, i per tant qualsevol quadrilàter es pot portar a qualsevol
altre (passant pel quadrat, si cal, en dos passos).

On s'acaba, doncs, la llibertat? Al **cinquè** punt. Amb quatre punts al
pla encara pots decidir on van tots quatre; el cinquè ja no el pots
moure, queda determinat pels altres quatre i per la projecció que has
triat. És el mateix fenomen que trobaràs sobre una recta a q101, però
un punt més tard, perquè el pla té una dimensió més que la recta.

**Comprovació.** No numèrica, i val la pena fer-la de veritat: fes una
foto d'un terra de rajoles o d'un tauler d'escacs des de molt de costat.
Tria'n quatre rajoles ben separades i mira'n la forma a la foto: has
d'acabar amb quatre quadrilàters ben diferents entre ells que, tots
quatre, són la imatge del mateix quadrat. Si algun t'ha sortit amb tres
vèrtexs gairebé alineats, encara millor: ensenya que fins i tot un
quadrilàter "aixafat" hi és a l'abast. L'única cosa que no podràs fer
és que una rajola surti amb els vèrtexs en un altre ordre.

**I després.** Que la llibertat s'acabi al quart punt sobre una recta i
al cinquè sobre un pla no és una coincidència: és la mateixa
comptabilitat feta en una dimensió i en dues. Cada dimensió que
afegeixes et regala exactament un punt més de llibertat abans que
apareguin els invariants —les quantitats que la projecció ja no pot
tocar, com la raó doble que calcularàs a q99. Recorda també que aquest "sí" és sobre
quadrilàters mirats com a quatre punts en posició general (cap tres
alineats): la projecció respecta quins punts hi ha, no si la figura et
sembla ben proporcionada.

---

## 9. q103 — *Is a projection of a polygon always a polygon?*
> La projecció d'un polígon és sempre un polígon?

**Moviment: distingeix casos.**

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
Una resposta de NO, amb els casos exactes on falla. N'hi ha **dos**, i
són de naturalesa oposada: en un la figura s'aplana i en l'altre s'obre.
Has de saber dir, per a cadascun, quina relació concreta entre el
polígon i el punt de projecció el provoca.

**Pista 1 — pensa en un sol costat primer.**
Un costat qualsevol del polígon es projecta, en general, a un altre
segment. Hi ha dues maneres que això falli, i val la pena separar-les
des del principi perquè són ben diferents. La primera: què passa si dos
vèrtexs del polígon i el punt de projecció queden **alineats**? La
segona: hi ha algun punt del pla que no tingui imatge enlloc? (Pensa en
quina direcció hauria de sortir el raig des del punt de projecció
perquè no arribés mai a la recta o al pla d'arribada.)

**Pista 2 — la construcció.** → `fig-107.png`

**Pista 3 — tanca-ho.**
**Primera manera: el col·lapse.** Si un costat, allargat, passa pel punt
de projecció, els seus dos extrems comparteixen el mateix raig i van a
parar **al mateix lloc**. Aquell costat es projecta a un sol punt, i el
que era un triangle et queda aplanat en un segment. No s'escapa res: al
contrari, dues coses que eren diferents s'ajunten. Ja no és un polígon.

**Segona manera: la fugida.** Un punt X no té imatge quan el raig que hi
va des del punt de projecció **no arriba mai** a la recta d'arribada, és
a dir, quan aquell raig és paral·lel a la recta d'arribada. Els punts
del pla que compleixen això formen tota una recta —la recta de fuga—, i
qualsevol polígon que la travessi es trenca en la imatge i se'n va a
l'infinit per tots dos costats. En el llenguatge de l'espai projectiu de
q105, aquella recta és la que va a parar als punts de l'infinit. Si has
mirat mai una foto d'un terra de rajoles, la recta de fuga té un nom que
ja coneixes: l'horitzó.

Dues respostes de "no", doncs, i per raons oposades: en una la figura
s'aplana, en l'altra s'obre.

**Comprovació.** Fes els dos casos amb coordenades. Recta d'arribada
y=4, punt de projecció O=(6,0).

*Col·lapse.* Triangle de vèrtexs A=(1,1), B=(4,2) i C=(5,1). Els punts
B i C són alineats amb O, i efectivament es projecten tots dos a
x=2, el mateix punt; A se'n va a x=−14. La imatge del triangle és el
segment de x=−14 a x=2: aplanada, no trencada.

*Fugida.* Ara el punt X=(1,0), a la mateixa alçada que O: el raig d'O a
X és horitzontal i **no talla mai** y=4, o sigui que X no té imatge. La
recta de fuga és, doncs, y=0. Acosta-t'hi i mira com se'n va: X=(1,½)
dona x=−34, X=(1,0,1) dona x=−194, i X=(1,0,01) dona x=−1994.

**I després.** Aquest és el primer lloc del bloc on "un punt se'n va a
l'infinit" dins d'una figura real, no com a curiositat abstracta —q105
en fa la pregunta general (dues rectes en l'espai projectiu, es tallen
sempre?) i q107 en dona l'exemple més important: la hipèrbola.

---

## 10. q104 — *What does a projection of three parallel lines look like?*
> Quin aspecte té la projecció de tres rectes paral·leles?

**Moviment: construeix per definir.** DEPÈN de q103 (aquest mateix
lot, el cas del costat que passa pel punt de projecció).

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
Una descripció qualitativa concreta de com queden les tres rectes un cop
projectades. I una segona part que la pregunta no diu però que hi és:
**passa sempre?** Abans de tancar-la, busca't tu mateix una manera que
falli.

**Pista 1 — pensa en les vies del tren.** → `fig-204.png`
Imagina't dret entre dues vies de tren paral·leles, mirant cap on
s'allunyen. Encara que són paral·leles de veritat, com les veus a
l'horitzó?

**Pista 2 — la construcció.** → `fig-108.png`

**Pista 3 — tanca-ho.**
Tres rectes paral·leles, en ser projectades des d'un punt fix, es
converteixen en tres rectes CONCURRENTS —totes es tallen en un mateix
punt. Aquest punt és exactament la imatge del "punt a l'infinit" comú a
totes tres (la seva direcció comuna), pel mateix mecanisme que ja vas
veure a q103: la direcció compartida es projecta a un únic punt
ordinari, anomenat punt de fuga.

**Ara la lletra petita, que és mig la pregunta.** Aquell punt de fuga
existeix si el raig que surt del punt de projecció en la direcció comuna
arriba al pla d'arribada. I hi ha un cas en què no hi arriba: quan la
direcció comuna de les tres rectes és **paral·lela al pla d'arribada**.
Aleshores no hi ha punt de fuga i les tres imatges continuen sent
paral·leles entre si. No és cap raresa de laboratori: en una foto d'una
via de tren, els dos rails convergeixen —la seva direcció se'n va cap al
fons— però les travesses, que travessen la imatge de dreta a esquerra,
surten paral·leles. Les has vistes mil vegades.

I fixa't que les dues respostes són, en el fons, la mateixa: amb el
llenguatge de q105, dues imatges paral·leles també "es tallen", però al
seu propi punt de l'infinit. El punt de fuga se n'hi ha anat.

**Comprovació.** Amb coordenades: pla de partida z=0, punt de projecció
O=(0,0,1) i pla d'arribada y=1. Un punt (x,y,0) es projecta a la posició
u=x/y, w=1−1/y dins del pla d'arribada.

*Cas concurrent.* Pren les tres rectes x=1, x=2 i x=−1, de direcció
comuna (0,1) —les que se'n van cap al fons. Les imatges surten w=1−u,
w=1−u/2 i w=1+u, i les tres passen per **(u,w)=(0,1)**: hi ha punt de
fuga.

*Cas paral·lel.* Ara les rectes y=2, y=3 i y=4, de direcció comuna (1,0),
que és paral·lela al pla d'arribada. Les imatges surten w=1/2, w=2/3 i
w=3/4: tres rectes horitzontals, **paral·leles**, que no es tallen
enlloc. Compara els dos casos i veuràs on és exactament la diferència.

**I després.** Aquest és, literalment, el punt de fuga de la pintura en
perspectiva: cada conjunt de rectes paral·leles del món real té el seu
punt de fuga propi al quadre —i com que hi ha una direcció per a cada
punt de fuga, un quadre en perspectiva en pot tenir un, dos o més. Les
direccions que es queden paral·leles al quadre són justament les que un
pintor dibuixa paral·leles: és el que distingeix una perspectiva
"frontal" d'una "d'angle".

---

## 11. q105 — *Do two lines in projective space necessarily intersect?*
> Dues rectes en l'espai projectiu, es tallen sempre?

**Moviment: redueix el desconegut al conegut.** DEPÈN de q104 (aquest
mateix lot, el punt de fuga com a punt a l'infinit real).

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
Una resposta de SÍ, **dins d'un pla** —a diferència del pla ordinari, on
dues rectes paral·leles no es tallen mai—, amb l'explicació exacta de
quin punt "nou" fa que sempre es tallin. El "dins d'un pla" no és un
detall menor i el trobaràs a l'"I després": a l'espai de tres dimensions
la resposta canvia.

**Pista 1 — què li falta al pla ordinari.**
En el pla ordinari, dues rectes paral·leles són l'única excepció a "dues
rectes sempre es tallen en un punt". Una sola excepció, i tot just per
un pèl: inclina una de les dues un mil·lèsim de grau i ja es tallen,
encara que sigui a quilòmetres d'aquí. Mira on se'n va aquell punt de
tall a mesura que les tornes paral·leles. Si a CADA direcció del pla li
inventes un punt nou —un punt "a l'infinit" per direcció, allà on se'n
va aquell tall—, què els passa a dues rectes paral·leles?

**Pista 2 — la construcció.** → `fig-109.png`
Diverses rectes gairebé paral·leles convergint totes cap a un mateix
punt marcat "∞". És la mateixa imatge que et fa un carrer llarg mirat
de cap a cap, o dues vies de tren.

**Pista 3 — tanca-ho.**
Dues rectes secants es tallen, com sempre, en un punt ordinari. Dues
rectes paral·leles comparteixen la mateixa direcció, i per tant
comparteixen el MATEIX punt a l'infinit (el d'aquella direcció) —es
tallen allà. En l'espai projectiu (el pla ordinari més un punt a
l'infinit per cada direcció), literalment CAP parella de rectes deixa
de tallar-se.

**Comprovació.** y=3x i y=3x+5 són paral·leles: iguala-les i et queda
0=5, sense solució —al pla ordinari no es tallen. Al pla projectiu totes
dues arriben al mateix punt de l'infinit, el de la direcció de pendent
3, i és allà on es tallen. Afegeix-hi ara una tercera recta de pendent
diferent, y=x. Aquesta se'n va a un altre punt de l'infinit, el del
pendent 1, i per tant **no** es troba amb les altres dues allà: s'hi ha
de trobar en punts ordinaris, i efectivament hi surt —talla y=3x a
(0,0) i y=3x+5 a (−2,5 · −2,5). Cap parella no se n'escapa: o
comparteixen direcció i es tallen a l'infinit, o no la comparteixen i
es tallen aquí.

**I després.** Primer, la lletra petita d'aquest "sempre", que val la pena
saber ara i no d'aquí a dos anys. Tot el que has fet aquí passa DINS D'UN
PLA: has agafat el pla de sempre i li has afegit un punt per cada
direcció. En aquest pla ampliat sí que és cert, sense cap excepció, que
dues rectes qualssevol es tallen.

A l'espai de tres dimensions, fent-hi el mateix, el "sempre" es trenca.
Dues rectes que no són al mateix pla —una que va pel terra i una altra que
travessa el sostre en una altra direcció, sense passar mai l'una per sobre
de l'altra— continuen sense trobar-se enlloc. Ni són paral·leles ni es
tallen: se'n diu que s'encreuen. Afegir-hi els punts de l'infinit no les
salva, perquè cadascuna se'n va cap a un punt de l'infinit diferent.
Comprova-ho amb dos llapis: n'hi ha prou de no poder-los posar tots dos
damunt d'una mateixa taula imaginària.

Fet l'avís: aquesta és la idea que fa que q107 funcioni. Una hipèrbola
—que sembla tenir dues branques separades i quatre "extrems" que
s'allunyen cap enfora— es pot entendre com un cercle normal un cop dos
dels seus punts se'n van a l'infinit d'aquesta mateixa manera.

---

## 12. q106 — *Can you discover a projective invariant?*
> Pots descobrir un invariant projectiu?

**Moviment: invariant.** DEPÈN de q99/q101 (aquest mateix lot, on ja
vas trobar i fer servir la raó doble sense posar-li nom formal).

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
Un nom i una fórmula per a la quantitat que q99 i q101 ja et van fer
servir dues vegades sense anomenar-la —i, ara sí, la comprovació
explícita que és realment un invariant (que no depèn de la projecció
triada).

**Pista 1 — recupera el que ja tens.**
A q99 vas provar que (AC·BD)/(BC·AD) no canvia en projectar quatre
punts. A q101 ho vas fer servir per determinar un quart punt a partir
dels altres tres. Aquesta quantitat JA és la resposta —el que et falta
és reconèixer-la com a tal i donar-li nom.

**Pista 2 — la construcció.** → `fig-110.png`

**Pista 3 — tanca-ho.**
Aquesta quantitat s'anomena la RAÓ DOBLE (o raó anharmònica) dels
quatre punts A,B,C,D: (AC·BD)/(BC·AD). És un invariant projectiu perquè
qualsevol projecció central des de qualsevol punt, cap a qualsevol
altra recta, la deixa exactament igual —ho vas demostrar tu mateix a
q99. Cap distància individual, ni cap raó simple de dues distàncies, té
aquesta propietat.

**Comprovació.** Amb els mateixos quatre punts de q99 (a 0, 2, 5 i 9),
la raó doble val 35/27. Ara refés-ho amb una projecció **completament
diferent** de la de q99: punt de projecció a (4,−3) i recta d'arribada
y=2. Els quatre punts van a parar a −8/3, 2/3, 17/3 i 37/3, que no
s'assemblen gens als d'abans. I la raó doble:
(17/3+8/3)(37/3−2/3) / ((17/3−2/3)(37/3+8/3)) = (25/3)(35/3) /
((15/3)(45/3)) = 875/675 = **35/27**. Exactament el mateix. Aquesta és
la comprovació que fa la pregunta: no que es conservi *en una*
projecció, sinó que es conservi *sigui quina sigui*.

**I després.** Trobar aquest invariant és el pas que fa possible
demostrar coses sobre projeccions sense haver de repetir un càlcul de
triangles cada vegada. Compte, però, a no atribuir-li més del que fa:
q107, que identifica quins dos punts d'un cercle se'n van a l'infinit en
formar-se una hipèrbola, **no** fa servir la raó doble —li basta el
mecanisme de fugida de q103 i q105. Són dues eines diferents del mateix
calaix: una diu què es conserva, l'altra què desapareix.

---

## 13. q107 — *When a cone is sliced by a plane to form a hyperbola, which two points on the circle are projected to infinity?*
> Quan un con es talla amb un pla per formar una hipèrbola, quins dos punts del cercle es projecten a l'infinit?

**Moviment: redueix el desconegut al conegut.** DEPÈN de q105 (aquest
mateix lot, el mecanisme de com un punt "arriba" a l'infinit).

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
La identificació exacta de dos punts concrets d'un cercle base del con
—no "en general", sinó els dos punts precisos que, en projectar el
cercle des del vèrtex del con cap al pla de tall, se'n van a l'infinit.

**Pista 1 — recorda per què un punt se'n va a l'infinit.**
A q103 vas veure que un punt es projecta "a l'infinit" exactament quan
la recta de projecció (des del punt de projecció, en aquest cas el
vèrtex del con) queda PARAL·LELA al pla d'arribada (el pla de tall),
en lloc de tallar-lo. Amb el vèrtex del con com a punt de projecció,
quines rectes que hi passen són "les rectes de projecció"?

**Pista 2 — la construcció.** → `fig-111.png`

**Pista 3 — tanca-ho.**
Les "rectes de projecció" des del vèrtex són exactament les generatrius
del con (les rectes rectes que el formen). Dues d'aquestes generatrius
—exactament les dues que són paral·leles al pla de tall— no arriben MAI
al pla de tall (com dues rectes
paral·leles que no es tallen, en el sentit ordinari). Els dos punts del
cercle per on passen aquestes dues generatrius són exactament els que
se'n van "a l'infinit" —i per això la hipèrbola té dues branques que
s'obren cap enfora sense parar: són la imatge d'un cercle sencer, menys
aquests dos punts que han fugit a l'infinit.

**Comprovació.** Amb un con d'obertura fixa i un pla de tall que
s'inclina gradualment: mentre el pla és menys inclinat que les
generatrius del con, la secció és una el·lipse tancada (cap generatriu
paral·lela al pla, cap punt fuig a l'infinit). Just quan el pla arriba
a ser paral·lel a UNA generatriu, un sol punt fuig (paràbola). Quan el
pla és encara més inclinat que qualsevol generatriu, hi ha DOS punts
que hi són paral·lels —i la secció és una hipèrbola de dues branques.

**I després.** Aquesta identificació és exactament el que fa falta per
a q109: les esferes de Dandelin s'encaixen dins del con
tocant-lo cadascuna al llarg d'un cercle propi —no d'aquest cercle base,
sinó del que li toca segons la mida de l'esfera— i tangents al pla de
tall. El que hi aprofitaràs d'aquí no és el cercle, sinó la relació
entre les generatrius i el pla de tall que acabes de fixar.

---

## 14. q108 — *Shine a flashlight on the wall at various angles. Can you see all three types of conic section?*
> Apunta una llanterna cap a la paret amb angles diferents. Pots veure els tres tipus de secció cònica?

**Moviment: un altre pla.** DEPÈN de q107 (aquest mateix lot, quan una
generatriu del con —ara el con de llum— es torna paral·lela al pla de
tall —ara la paret).

**Pista 0 — què has de produir.**
Una descripció de tres orientacions diferents de la llanterna (o de la
paret) que produeixin, respectivament, una el·lipse (o cercle), una
paràbola, i una hipèrbola —el con de llum és el con, la paret és el pla
de tall.

**Pista 1 — comença perpendicular.**
Amb la llanterna apuntant exactament perpendicular a la paret, quina
forma en surt? És el cas més fàcil de tots tres.

**Pista 2 — la construcció.** → `fig-112.png`
Tres orientacions de la paret respecte del con de llum: perpendicular a
l'eix, inclinada però tallant només un con de llum, i inclinada encara
més.

**Pista 3 — tanca-ho.**
Perpendicular a l'eix: cercle. Inclinant la paret fins que quedi
paral·lela a UNA generatriu del con de llum (la vora del feix): la
taca es converteix en una paràbola, oberta per un sol costat. Inclinant
encara més, hi ha DUES generatrius que es tornen paral·leles a la paret
alhora, i la vora del feix se't veu "obrir-se" cap als dos costats: és
una hipèrbola. Amb un matís honest, que veuràs de seguida: una
hipèrbola de debò té dues branques, i amb una llanterna només en pots
veure una, perquè la llanterna fa un sol con i la hipèrbola sencera
demana el con doble —el que continua a l'altra banda del vèrtex.

**Comprovació.** Amb la paret perpendicular a l'eix de la llanterna:
taca circular (comprova que el contorn manté la mateixa distància al
centre en totes direccions). Inclinant fins que un costat del feix quedi
paral·lel a la paret: el contorn deixa de tancar-se per aquell costat.

**I després.** Aquest experiment físic —una llanterna i una paret— és
la manera més directa de veure per què les tres còniques comparteixen
nom de família: totes surten del mateix con, i l'única cosa que canvia
és l'angle del pla que el talla. Guarda-t'ho, perquè més endavant q107 i
q109 tornaran a aquesta mateixa figura per demostrar amb rigor el que
aquí hauràs vist projectat a la paret.

---

## 15. q109 — *Can you work out the details of this proof?*
> Saps completar els detalls d'aquesta prova?

**Moviment: dues maneres.** DEPÈN de q107 (aquest mateix lot: la
geometria del con tallat, els cercles base, les generatrius). Segona
aparició d'aquesta pregunta genèrica (la primera, a q99, era sobre la
raó doble); aquí el llibre l'aplica a la prova de Dandelin.

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
Una demostració completa que la secció el·líptica d'un con (tallat per
un pla que no travessa totes dues nappes) és de veritat una el·lipse
—és a dir, que hi ha dos punts F₁, F₂ (els focus) tals que, per a
QUALSEVOL punt P de la corba de tall, PF₁+PF₂ és una constant.

**Pista 1 — dues esferes, cadascuna tocant el con i el pla.**
Compte amb un detall que sovint es diu malament: com que el pla de tall
no travessa les dues nappes, **totes dues esferes són a la mateixa
nappa** —una encaixada entre el vèrtex i el pla, l'altra més enllà del
pla, allunyant-se del vèrtex. Cadascuna és tangent alhora a la
superfície del con i al pla de tall, i de cada mena n'hi cap
exactament una. Anomena F₁ i F₂ els dos punts on cada esfera toca el pla
—aquests seran els focus. Per a un punt P qualsevol de la corba de
tall, quina relació hi ha entre PF₁ i la distància, MESURADA SOBRE LA
SUPERFÍCIE DEL CON, entre P i el cercle on la primera esfera hi és
tangent?

**Pista 2 — la construcció.** → `fig-113.png`

**Pista 3 — tanca-ho.**
Dues maneres de mesurar la mateixa distància: (a) PF₁ és una tangent
des de P a l'esfera 1 —i totes les tangents des d'un mateix punt a una
esfera tenen la mateixa longitud (q93). (b) El
segment de la generatriu del con des de P fins al cercle de tangència
amb l'esfera 1 és TAMBÉ una tangent des de P a aquesta mateixa esfera
(l'esfera toca el con al llarg de tot un cercle, i per tant cada
generatriu la toca en un punt, el d'aquell cercle). Per tant
PF₁ = aquest tros de generatriu. Igual per PF₂ amb l'esfera 2, cap a
l'altre cercle de tangència. Suma PF₁+PF₂: és exactament la longitud
del tros de generatriu ENTRE els dos cercles de tangència —**la
mateixa per a QUALSEVOL generatriu**, perquè els dos cercles de
tangència són fixos (no depenen de P). Constant trobada.

**Comprovació.** Amb un cas del tot concret, perquè el puguis refer.
Con de semiobertura 30° amb el vèrtex a l'origen i l'eix vertical, i
pla de tall z = 4 + x/2 (menys inclinat que les generatrius, o sigui
el·lipse). Les dues esferes surten centrades a l'eix, a altures 2,566 i
9,071 —totes dues per damunt del vèrtex, com deia la Pista 1—, amb
radis 1,283 i 4,535. Toquen el pla a F₁=(−0,574; 0; 3,713) i
F₂=(2,028; 0; 5,014), i toquen el con al llarg de dos cercles situats a
2,222 i a 7,855 del vèrtex, mesurats sobre la generatriu. La constant
ha de ser, doncs, la diferència: 7,855 − 2,222 = **5,633**. Tria ara
punts P de la corba de tall i suma: per a P=(3,247; 0; 5,623) surt
5,633; per a P=(0; 2,309; 4) surt 5,633; per a P=(−1,792; 0; 3,104)
surt 5,633. Sempre el mateix, i sempre el tros de generatriu.

**I després.** Aquest argument —el mateix tram de recta, mesurat de dues
maneres, forçat a ser igual (q93 per a la tangència, geometria del con
per a la longitud sobre la superfície)— torna a q94, però al REVÉS:
q94 partia de la definició (dos focus, suma constant) i en deduïa que
un cercle és el cas amb els dos focus fosos; aquí, en canvi, comences
del con i DEMOSTRES que la corba resultant compleix la definició amb
focus concrets. Quan el pla de tall és perpendicular a l'eix del con,
les dues esferes de Dandelin queden igual de grans i tangents al
mateix cercle —els dos focus col·lapsen en un de sol, exactament el cas
límit de q94.

---

## 16. q110 — *Why do hyperbolas have so much symmetry?*
> Per què les hipèrboles tenen tanta simetria?

**Moviment: identitat com a figura.**

**Pista 0 — què has de produir.**
Quants eixos de simetria té una hipèrbola (dues branques), i per què
—una raó que es vegi directament en la seva equació, no només "perquè
sí" mirant el dibuix.

**Pista 1 — mira només les potències, no els signes.**
L'equació d'una hipèrbola centrada a l'origen és x²/a² − y²/b² = 1.
Si canvies x per −x, canvia l'equació? I si canvies y per −y?

**Pista 2 — la construcció.** → `fig-114.png`

**Pista 3 — tanca-ho.**
Com que només hi apareixen x² i y² (mai x ni y soles), substituir x per
−x deixa l'equació exactament igual —això vol dir que si (x,y) hi és
un punt de la corba, (−x,y) també ho és: simetria respecte de l'eix
vertical. El mateix argument amb y per −y dona simetria respecte de
l'eix horitzontal. I la combinació de dues reflexions perpendiculars
és una rotació de 180° al voltant del centre —una tercera simetria,
de franc.

**Comprovació.** Amb a=3, b=4: comprova que si (x₀,y₀) satisfà x₀²/9−y₀²/16=1, aleshores (−x₀,y₀),
(x₀,−y₀) i (−x₀,−y₀) també ho satisfan —substitueix-los directament a
l'equació i comprova que dona el mateix resultat en els quatre casos.

**Torna ara a la pregunta, que deia "TANTA" simetria.** Una el·lipse
també té dos eixos i la rotació de 180°: en nombre no en té menys. El
que sorprèn de la hipèrbola és **on porten** aquelles simetries. La
reflexió en l'eix vertical i la rotació de 180° no deixen cada branca al
seu lloc: **s'intercanvien les dues branques**. Dibuixades, les branques
semblen dues corbes separades que no es toquen enlloc, i la simetria diu
que són la mateixa corba i que hi ha moviments del pla que converteixen
l'una en l'altra exactament. Aquesta és la resposta al "tanta": no en
té més que l'el·lipse, però n'hi ha que travessen un buit que semblava
infranquejable.

**I després.** Aquest mateix argument (només potències parelles ⇒
simetria) és el que ja explica per què una el·lipse x²/a²+y²/b²=1 té
també dos eixos de simetria, i per què una paràbola y²=4px en té només
UN (hi apareix x a la primera potència, no x²) —la mateixa tècnica,
aplicada a les tres còniques, prediu correctament quantes simetries té
cadascuna.

---

## 17. q111 — *Why is the focal constant of a hyperbola equal to the side of the diamond?*
> Per què la constant focal d'una hipèrbola és igual al costat del diamant?

**Moviment: redueix el desconegut al conegut.** DEPÈN de q110 (aquest
mateix lot, els dos eixos de simetria que fan que el "diamant" sigui
realment un rombe).

**Pista 0 — què has de produir.**
Una identificació exacta de què és "el diamant" i una prova que el seu
costat val exactament el mateix que la distància del centre a cada
focus. Comença per la identificació, que és on es cau: al voltant d'una
hipèrbola hi ha **dos** quadrilàters que criden l'atenció, i només un
d'ells és el diamant.

**Pista 1 — el diamant té els vèrtexs sobre els dos eixos.**
El que **no** és: el rectangle que formen les dues asímptotes amb les
tangents als vèrtexs. Aquell existeix i és útil —té els vèrtexs a
(±a,±b) i les asímptotes en són les diagonals—, però els seus costats
fan 2a i 2b, no pas c, o sigui que no és el que busques.

El diamant té els seus quatre vèrtexs **sobre els eixos**: els dos
vèrtexs de la hipèrbola, a distància a del centre, i els dos punts a
distància b del centre sobre l'altre eix. Amb l'orientació de sempre
—la de x²/a² − y²/b² = 1, amb els vèrtexs sobre l'eix horitzontal— són
(a,0), (0,b), (−a,0) i (0,−b). Comprova de passada que els seus costats
són paral·lels a les asímptotes: el que va de (a,0) a (0,b) té pendent
−b/a, exactament el d'una d'elles. Quin tipus de quadrilàter és,
exactament, si les seves diagonals es tallen en angle recte i es
reparteixen per la meitat?

**Pista 2 — la construcció.** → `fig-115.png`

**Pista 3 — tanca-ho.**
Aquest quadrilàter és un rombe (els seus quatre costats són iguals),
perquè les seves diagonals —de longituds 2a i 2b— es tallen
perpendicularment pel seu punt mitjà comú (el centre). El costat
d'aquest rombe és la hipotenusa d'un triangle rectangle de catets a i
b: costat = √(a²+b²). Aquesta mateixa expressió, √(a²+b²), és
exactament c, la distància del centre als focus —la "constant focal"
d'aquest llibre.

**Comprovació.** a=3, b=4: costat del diamant = √(9+16)=√25=5 —un
triangle 3-4-5 exacte. Comprova que els focus, situats a distància c=5
del centre, cauen efectivament sobre l'eix on són els vèrtexs de la
hipèrbola.

**I després.** Aquesta identitat —costat del rombe igual a c— és el
mateix triangle rectangle (a, b, c) que ja apareixia amagat a l'equació
de la hipèrbola des del principi, i converteix una relació algebraica en
una que es veu directament en un dibuix. Guarda't el triangle, perquè a
q113 el retrobaràs per a l'el·lipse amb els papers canviats: allà la
hipotenusa serà a i el focus caurà **entre** els vèrtexs (c²=a²−b²),
mentre que aquí la hipotenusa és c i el focus cau **fora** dels vèrtexs
(c²=a²+b²). El mateix triangle, llegit de dues maneres.

