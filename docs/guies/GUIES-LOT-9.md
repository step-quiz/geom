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
> Com depèn exactament el factor de dilatació de l'angle entre els plans?

**Moviment: redueix el desconegut al conegut.**

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
Una fórmula: el factor pel qual s'allarga (o s'escurça) una longitud
quan es projecta perpendicularment d'un pla a un altre, en termes d'un
sol angle —l'angle entre els dos plans.

**Pista 1 — prova-ho amb un cas fàcil.**
Si els dos plans coincideixen (angle 0°), cap longitud canvia: factor 1.
Si el pla girés fins quedar perpendicular a l'altre (angle 90°), un
segment que hi fos perpendicular es projectaria a un sol punt: factor 0.
Quina funció trigonomètrica val 1 a 0° i 0 a 90°?

**Pista 2 — la construcció.** → `fig-099.png`
Un segment sobre el pla inclinat, perpendicular a la línia on es
tallen els dos plans, i la seva projecció (perpendicular) sobre el pla
horitzontal.

**Pista 3 — tanca-ho.**
El segment, la seva projecció i el tros de pla entre tots dos formen un
triangle rectangle: la hipotenusa és el segment original, un catet és
la projecció. L'angle entre els plans és exactament l'angle d'aquest
triangle rectangle que toca el segment original. Quina raó
trigonomètrica relaciona el catet (projecció) amb la hipotenusa
(original)?

**Comprovació.** Angle entre plans de 60°, segment de 8 unitats
perpendicular a la línia de tall: projecció = 8×cos60° = 4 unitats.
Angle de 0°: factor cos0°=1, cap canvi.

**I després.** Aquest mateix factor cos(angle) és el que fa que una
moneda circular, vista de gairebé de cantell, es vegi com una el·lipse
molt aixafada —la relació entre els dos eixos de l'el·lipse aparent és
exactament aquest cosinus.

---

## 2. q92 — *Do projections in any direction always produce dilations?*
> Les projeccions en qualsevol direcció, sempre produeixen dilatacions?

**Moviment: contraexemple.**

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
Una resposta de NO, amb un exemple concret de projecció que NO sigui
una dilatació (és a dir, que no multipliqui totes les longituds pel
mateix factor constant).

**Pista 1 — pensa en la projecció central, no la paral·lela.**
q91 projectava perpendicularment (totes les línies de projecció
paral·leles entre si). Què passa si totes les línies de projecció
passen, en canvi, per un sol punt fix (una "làmpada"), en lloc de ser
paral·leles?

**Pista 2 — la construcció.** → `fig-100.png`
Dos plans, un punt de projecció, i dos punts sobre el primer pla a
diferents distàncies del punt de projecció, projectats sobre el segon.

**Pista 3 — tanca-ho.**
En una projecció central, un punt més a prop del punt de projecció es
mou "menys" en proporció que un punt més lluny —el factor d'ampliació
depèn de la distància al punt de projecció, no és constant per a tota
la figura. Compara com es mouen dos segments iguals situats a
distàncies diferents del punt de projecció.

**Comprovació.** Amb el punt de projecció a distància 2 d'un segment i
a distància 6 d'un altre segment igual (ambdós paral·lels al pla
d'arribada), els factors d'ampliació respectius NO coincideixen —depèn
de 1/distància, no és el mateix nombre per als dos segments.

**I després.** Aquesta distinció —projecció paral·lela (sempre una
dilatació uniforme) contra projecció central (una dilatació que varia
punt a punt)— és exactament la diferència entre un plànol arquitectònic
(paral·lela) i una fotografia (central), i és la raó per la qual les
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
Igual que en un cercle, el radi que va del centre al punt de tangència
és perpendicular a la recta tangent en aquell punt (encara que ara
estiguis en tres dimensions). Amb el centre O, el punt exterior P, i un
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

**I després.** El mateix argument, amb el mateix triangle rectangle,
és el que ja vas fer servir per a tangents des d'un punt a un cercle en
2D —aquí no canvia res essencial en passar a tres dimensions, només cal
comprovar que el pla que conté O, P i T sempre existeix (tres punts no
alineats determinen un pla).

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
quants punts es poden moure lliurement, i q106 li posa nom
(«invariant projectiu»).

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
alçada h. Un punt a distància x0 de l'eix, al pla 0, es projecta a
distància x0·(p−h)/p al pla h (surt de resoldre on la recta des del
punt de projecció talla el segon pla). Prova-ho amb p més gran que h
(fora d'entremig) i després amb p entre 0 i h.

**Pista 2 — la construcció.** → `fig-104.png`

**Pista 3 — tanca-ho.**
Quan p és fora de l'interval [0,h], el factor (p−h)/p és positiu: la
figura es projecta ampliada o reduïda però SENSE capgirar-se —una
dilatació ordinària, com q91/q92 ja et van fer veure per a la
projecció paral·lela. Quan p és entre 0 i h, aquest mateix factor
esdevé NEGATIU: la figura es projecta capgirada (com la imatge
d'una càmera fosca), no només escalada.

**Comprovació.** h=10. Amb p=−2 (fora, per sota): factor=(−2−10)/(−2)=6,
positiu. Amb p=5 (entremig): factor=(5−10)/5=−1, negatiu —la figura
surt exactament invertida i de la mateixa mida.

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

**Pista 1 — compta graus de llibertat.**
Triar un punt de projecció O i una segona recta dona prou llibertat per
moure tres punts on vulguis (tres condicions, prou paràmetres lliures
per satisfer-les). Un quart punt, en canvi, ja no és lliure: la seva
posició queda determinada pels altres tres i per la projecció
concreta. Quina cosa, ja calculada a q99, és la que fixa aquest quart
punt?

**Pista 2 — la construcció.** → `fig-105.png`

**Pista 3 — tanca-ho.**
Un cop fixada la imatge de tres punts A,B,C (sempre possible, perquè
tres punts no porten cap invariant que els lligui), la imatge D′ del
quart punt D ha de complir que la raó doble (AC·BD)/(BC·AD) sigui la
MATEIXA abans i després (q99) —això determina D′ de manera única. Per
tant, quatre punts només es poden projectar a quatre punts amb la
mateixa raó doble, no a qualssevol quatre.

**Comprovació.** Amb A,B,C fixats en qualsevol posició, la raó doble
original (per exemple 35/27, com a q99) prediu exactament on ha de
caure D′ —comprova-ho triant tres imatges A′,B′,C′ arbitràries i
resolent D′ perquè la raó doble surti 35/27.

**I després.** Aquesta és la primera vegada, en aquest bloc, que es veu
EXPLÍCITAMENT que la raó doble no és només "una cosa que es conserva":
és la mesura completa de la llibertat que perdem en passar de tres
punts a quatre. q106 li posa nom formal («invariant projectiu») i en
demana un altre exemple.

---

## 8. q102 — *Are all triangles the same projectively? How about all four-sided polygons?*
> Tots els triangles són el mateix projectivament? I tots els polígons de quatre costats?

**Moviment: dues maneres.** DEPÈN de q101 (aquest mateix lot).

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
El mateix contrast de q101, ara amb figures planes en lloc de punts
sobre una recta: SÍ per a triangles (tots equivalents projectivament),
NO en general per a quadrilàters.

**Pista 1 — compta vèrtexs, no costats.**
Un triangle té tres vèrtexs; cap parell de costats d'un triangle és
"paral·lel" en un sentit que la projecció hagi de respectar
—recorda q101: tres punts sempre es poden portar on vulguis. Un
quadrilàter en té quatre. Quina relació hi ha entre "quatre vèrtexs" i
el que ja vas veure amb "quatre punts sobre una recta"?

**Pista 2 — la construcció.** → `fig-106.png`

**Pista 3 — tanca-ho.**
Projecta els quatre vèrtexs d'un quadrilàter des d'un punt exterior al
seu pla, cap a un altre pla: talla les rectes que uneixen el punt de
projecció amb cada vèrtex per una recta auxiliar que passi per quatre
d'aquestes projeccions —la raó doble d'aquests quatre punts alineats
(q101) és un invariant real del quadrilàter que la projecció NO pot
canviar. Un quadrilàter "aixafat" (gairebé un triangle) i un de ben
proporcionat tenen raons doubles diferents, així que no poden ser
imatges projectives l'un de l'altre.

**Comprovació.** Un quadrat i un rectangle molt allargat tenen quatre
vèrtexs cadascun, però la raó doble que resulta de tallar les seves
diagonals prolongades amb una recta auxiliar dona valors diferents
—cap projecció central pot portar l'un a l'altre. En canvi, qualsevol
triangle es pot portar a qualsevol altre (comprova-ho triant tres
vèrtexs origen i tres destí qualssevol i trobant el punt de projecció
que ho fa).

**I després.** Aquesta asimetria —tots els triangles projectivament
iguals, no tots els quadrilàters— és la raó per la qual la geometria
projectiva clàssica es construeix quasi tota amb configuracions de
quatre punts (com la raó doble): és el primer nombre de punts on
comencen a distingir-se figures que la geometria projectiva, d'entrada,
no podria distingir amb menys.

---

## 9. q103 — *Is a projection of a polygon always a polygon?*
> La projecció d'un polígon és sempre un polígon?

**Moviment: distingeix casos.**

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
Una resposta de NO, amb el cas exacte on falla: quin costat del polígon
original ha de tenir una propietat concreta (en relació amb el punt de
projecció) perquè la seva imatge deixi de ser un segment normal.

**Pista 1 — pensa en un sol costat primer.**
Un costat qualsevol del polígon es projecta, en general, a un altre
segment. Però si aquell costat, allargat, passés exactament pel PUNT DE
PROJECCIÓ mateix —què li passaria a la seva imatge?

**Pista 2 — la construcció.** → `fig-107.png`

**Pista 3 — tanca-ho.**
Si la recta que conté un costat passa pel punt de projecció, tots els
punts d'aquell costat es projecten des d'ells mateixos —la seva "recta
de projecció" és la mateixa recta que ja contenia el costat. En el
llenguatge que ja coneixes de q104/q105, aquell costat es projecta
"cap a l'infinit": dos dels vèrtexs del polígon original es converteixen
en un sol punt (o en cap punt ordinari) a la imatge, i el que hauria de
ser un polígon tancat de n costats deixa de tancar-se com a tal.

**Comprovació.** Amb un triangle i un punt de projecció allunyat de
qualsevol de les rectes que contenen els seus costats, la projecció és
sempre un triangle normal. Si mous el punt de projecció fins que quedi
exactament sobre la prolongació d'un costat, aquell costat "desapareix"
a l'infinit en la imatge —comprova-ho seguint numèricament què passa
amb la distància de projecció d'un punt d'aquell costat quan el punt de
projecció s'hi acosta (tendeix a infinit).

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
Una descripció qualitativa concreta: tres rectes que, un cop
projectades, ja NO són paral·leles entre si, sinó que tenen alguna
altra relació geomètrica exacta —quina?

**Pista 1 — pensa en les vies del tren.**
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

**Comprovació.** Tres rectes horitzontals paral·leles, projectades des
d'un punt per sobre seu cap a un pla inclinat: numèricament, comprova
que les tres imatges, prolongades, es tallen totes en el MATEIX punt
—no en tres punts diferents.

**I després.** Aquest és, literalment, el punt de fuga de la pintura en
perspectiva: qualsevol conjunt de rectes paral·leles del món real
convergeix, en un dibuix o fotografia, cap a un únic punt. La geometria
projectiva no en fa cap excepció: n'és la manera formal de dir-ho.

---

## 11. q105 — *Do two lines in projective space necessarily intersect?*
> Dues rectes en l'espai projectiu, es tallen sempre?

**Moviment: redueix el desconegut al conegut.** DEPÈN de q104 (aquest
mateix lot, el punt de fuga com a punt a l'infinit real).

**Avís 3D.** Un angle recte no es veu recte en una projecció en
perspectiva.

**Pista 0 — què has de produir.**
Una resposta de SÍ —a diferència del pla ordinari, on dues rectes
paral·leles no es tallen mai— amb l'explicació exacta de quin punt
"nou" fa que sempre es tallin.

**Pista 1 — què li falta al pla ordinari.**
En el pla ordinari, dues rectes paral·leles són l'única excepció a "dues
rectes sempre es tallen en un punt". q104 ja et va donar cada direcció
del pla el seu propi "punt de fuga". Si a CADA direcció del pla
li afegeixes aquest punt (un punt "a l'infinit" per direcció), què
els passa a dues rectes paral·leles?

**Pista 2 — la construcció.** → `fig-109.png`
Diverses rectes gairebé paral·leles convergint totes cap a un mateix
punt marcat "∞", tal com ja ho vas veure amb el punt de fuga a q104.

**Pista 3 — tanca-ho.**
Dues rectes secants es tallen, com sempre, en un punt ordinari. Dues
rectes paral·leles comparteixen la mateixa direcció, i per tant
comparteixen el MATEIX punt a l'infinit (el d'aquella direcció) —es
tallen allà. En l'espai projectiu (el pla ordinari més un punt a
l'infinit per cada direcció), literalment CAP parella de rectes deixa
de tallar-se.

**Comprovació.** Dues rectes de pendent 3 (paral·leles entre si) no es
tallen mai en el pla ordinari (cap solució real al sistema
d'equacions). En l'espai projectiu, totes dues "arriben" al mateix punt
a l'infinit associat a la direcció de pendent 3 —comprova que és
l'ÚNIC punt a l'infinit que comparteixen amb qualsevol tercera recta de
pendent diferent (que arriba a un punt a l'infinit distint).

**I després.** Aquesta és la idea que fa que q107 funcioni: una
hipèrbola —que sembla tenir dues branques separades i quatre "extrems"
que s'allunyen cap enfora— es pot entendre com un cercle normal un cop
dos dels seus punts es couen enviats a l'infinit d'aquesta mateixa
manera.

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

**Comprovació.** Amb els mateixos quatre punts de q99 (distàncies
0,2,5,9), la raó doble val 35/27 abans i després de QUALSEVOL projecció
que triïs —repeteix-ho amb un punt de projecció i una recta d'arribada
diferents dels que vas fer servir llavors i comprova que segueix sortint
35/27.

**I després.** Trobar aquest invariant és el pas que fa possible
demostrar coses sobre projeccions sense haver de repetir un càlcul de
triangles cada vegada —q107 el fa servir (implícitament, via el
mecanisme de q105) per identificar amb precisió quins dos punts d'un
cercle es projecten a l'infinit quan es forma una hipèrbola.

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
—les que passen pels dos punts del cercle base on el con és paral·lel
al pla de tall— no arriben MAI al pla de tall (com dues rectes
paral·leles que no es tallen, en el sentit ordinari). Els dos punts del
cercle per on passen aquestes dues generatrius són exactament els que
es couen "a l'infinit" —i per això la hipèrbola té dues branques que
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
a q109: les esferes de Dandelin es col·loquen tocant el con al llarg
d'aquests mateixos cercles base, i el seu argument depèn de saber
exactament on i com el pla de tall es relaciona amb el con.

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
encara més (com q107 ja et va fer descobrir): dues generatrius es
tornen paral·leles a la paret alhora, i encara que aquí només hi ha un
con (no un con doble com a q107/q109), la vora del feix de llum es veu
"obrir-se" cap als dos costats de manera característica d'una branca de
hipèrbola.

**Comprovació.** Amb la paret perpendicular a l'eix de la llanterna:
taca circular (comprova que el contorn manté la mateixa distància al
centre en totes direccions). Inclinant fins que un costat del feix quedi
paral·lel a la paret: el contorn deixa de tancar-se per aquell costat.

**I després.** Aquest experiment físic —una llanterna i una paret— és
la manera més directa de veure per què les tres còniques comparteixen
nom de família: totes surten del mateix con, només canviant l'angle
del pla de tall, exactament com q107 i q109 ho demostren amb rigor.

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
Dins de cada nappa del con (per damunt i per sota del pla de tall) hi
cap exactament una esfera tangent tant a la superfície del con com al
pla de tall. Anomena F₁ i F₂ els dos punts on cada esfera toca el pla
—aquests seran els focus. Per a un punt P qualsevol de la corba de
tall, quina relació hi ha entre PF₁ i la distància, MESURADA SOBRE LA
SUPERFÍCIE DEL CON, entre P i el cercle on la primera esfera hi és
tangent?

**Pista 2 — la construcció.** → `fig-113.png`

**Pista 3 — tanca-ho.**
Dues maneres de mesurar la mateixa distància: (a) PF₁ és una tangent
des de P a l'esfera 1 —i totes les tangents des d'un mateix punet a una
esfera tenen la mateixa longitud (q93, aquest mateix lot). (b) El
segment de la generatriu del con des de P fins al cercle de tangència
amb l'esfera 1 és TAMBÉ una tangent des de P a aquesta mateixa esfera
(la generatriu és tangent a l'esfera al llarg de tot el con). Per tant
PF₁ = aquest tros de generatriu. Igual per PF₂ amb l'esfera 2, cap a
l'altre cercle de tangència. Suma PF₁+PF₂: és exactament la longitud
del tros de generatriu ENTRE els dos cercles de tangència —**la
mateixa per a QUALSEVOL generatriu**, perquè els dos cercles de
tangència són fixos (no depenen de P). Constant trobada.

**Comprovació.** Amb un con d'obertura 30° i un pla de tall concret,
la suma PF₁+PF₂ calculada per a diversos punts P de la corba de tall
(numèricament, amb les coordenades 3D reals) surt EXACTAMENT la
mateixa —per exemple, en un cas verificat, 12,86 unitats per a
qualsevol dels punts provats.

**I després.** Aquest argument —el mateix tram de recta, mesurat de dues
maneres, forçat a ser igual (q93 per a la tangència, geometria del con
per a la longitud sobre la superfície)— torna a q94, però al REVÉS:
q94 partia de la definició (dos focus, suma constant) i en deduïa que
un cercle és el cas amb els dos focus fosos; aquí, en canvi, comences
del con i DEMOSTRES que la corba resultant compleix la definició amb
focus concrets. Quan el pla de tall és perpendicular a l'eix del con,
les dues esferes de Dandelin es couen igual de grans i tangents al
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

**Comprovació.** Amb a=3, b=4: el punt (5,4/3·√(25−9))... més senzill:
comprova que si (x₀,y₀) satisfà x₀²/9−y₀²/16=1, aleshores (−x₀,y₀),
(x₀,−y₀) i (−x₀,−y₀) també ho satisfan —substitueix-los directament a
l'equació i comprova que dona el mateix resultat en els quatre casos.

**I després.** Aquest mateix argument (només potències parelles ⇒
simetria) és el que ja explica per què una el·lipse x²/a²+y²/b²=1 té
també dos eixos de simetria, i per què una paràbola y²=4px en té només
UN (hi apareix x a la primera potència, no x²) —la mateixa tècnica,
aplicada a les tres còniques, prediu correctament quantes simetries
té cadascuna.

---

## 17. q111 — *Why is the focal constant of a hyperbola equal to the side of the diamond?*
> Per què la constant focal d'una hipèrbola és igual al costat del diamant?

**Moviment: redueix el desconegut al conegut.** DEPÈN de q110 (aquest
mateix lot, els dos eixos de simetria que fan que el "diamant" sigui
realment un rombe).

**Pista 0 — què has de produir.**
Una identificació exacta de què és "el diamant" (el quadrilàter que
formen les dues asímptotes i les tangents als vèrtexs) i una prova que
el seu costat val exactament el mateix que la distància del centre a
cada focus.

**Pista 1 — el diamant té els vèrtexs sobre els dos eixos.**
Amb els vèrtexs de la hipèrbola a distància a del centre (sobre un
eix) i les seves tangents tallant les asímptotes a distància b del
mateix centre (sobre l'altre eix), el "diamant" és el quadrilàter amb
aquests quatre punts com a vèrtexs: (0,a), (b,0), (0,−a), (−b,0). Quin
tipus de quadrilàter és, exactament, si les seves diagonals es tallen
en angle recte i es reparteixen per la meitat?

**Pista 2 — la construcció.** → `fig-115.png`

**Pista 3 — tanca-ho.**
Aquest quadrilàter és un rombe (les seves quatre costats són iguals),
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
de la hipèrbola des del principi; converteix una relació algebraica en
una relació que es veu directament en un dibuix, tancant el bloc de
projecció i còniques amb la mateixa idea que l'obria a q91: mesurar una
longitud amb un triangle rectangle ben triat.

