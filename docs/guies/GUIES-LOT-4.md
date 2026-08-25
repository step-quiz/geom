# Lot 4 — vint guies de demostració

Vint preguntes del llibre, triades perquè cadascuna reaprofiti un moviment ja
après als lots 1–3 (o n'introdueixi un de nou quan calia), i perquè cap guia
depengui de res que no hàgim vist encara nosaltres mateixos — ni un teorema
citat de passada, ni una demostració que el llibre dona per feta unes pàgines
abans. On això no era possible amb prou marge de seguretat, la pregunta s'ha
descartat d'aquest lot (per exemple, les que depenen del teorema de Pappus,
que el text no introdueix explícitament abans d'usar-lo).

---

## Els principis de disseny (els mateixos del lot 1 — es repeteixen aquí per no haver de saltar de document)

**1. Els nivells de pista difereixen en espècie, no en quantitat.**
No són "una mica de resposta / més resposta / tota la resposta". Són quatre
coses diferents: reformular l'encàrrec, fer-lo concret, afegir la construcció,
i tancar.

**2. Mai la solució.** Cada guia acaba amb una **comprovació**: una predicció
numèrica que l'alumne pot verificar contra la seva pròpia resposta.

**3. La sanguina és seva; la tinta és del llibre.**
Tota construcció auxiliar es dibuixa en vermell terrós, mai en negre.

**4. La pista central no porta paraules quan es pot dir amb una línia.**

**5. Cada guia acaba mirant endavant**, amb un "i després" que apunta on torna
a aparèixer el mateix moviment — dins d'aquest lot o en un lot anterior.

---

## Notació (recordatori — ja introduïda al lot 1, q14)

| | Vol dir |
|---|---|
| traç negre | la figura tal com és al llibre |
| traç sanguina (vermell terrós) | el que hi has afegit tu |
| discontinu | línia de construcció, no forma part de la figura |
| punt gruixut | punt notable (centre, punt mitjà, vèrtex que importa) |
| ratllat / vora sanguina discontínua sobre una peça | aquesta peça és la incògnita, o es treu |

Recordatori de les marquetes: el *nombre* d'arcs o ratlletes és una etiqueta
de grup ("aquests fan la mateixa mida entre ells"), no una quantitat. Dos arcs
no volen dir "el doble d'angle" que un arc.

**Novetat d'aquest lot — cubs i poliedres.** A les figures 3D (049, 051, 052)
el discontinu negre marca una aresta *real* del sòlid que quedaria amagada
darrere seu en una vista opaca — no una línia de construcció. És l'única
excepció a la taula de dalt, i ja apareixia així al lot 3 (vegeu-ne la nota a
`GUIES-LOT-3.md`).

**Ordre recomanat:**
q01 → q02 → q70 → q29 → q06 → q11 → q12 → q73 → q38 → q76 → q80 → q89 → q37 →
q39 → q05 → q18b → q60 → q08a → q08b → q71.

Les primeres cinc (q01, q02, q70, q29, q06) formen un bloc de triangulació i
simetria en polígons, cadascuna una mica més general que l'anterior. q11/q12
van juntes (la segona és la inversa de la primera, mateix esperit que q14/q15
al lot 1). q73 tanca aquest primer bloc amb una pregunta de "quanta informació
cal per reconstruir". La resta reaprofita moviments ja vists (invariant,
contraexemple, dues-maneres) sobre figures noves. q71 va l'última perquè és,
en cert sentit, la inversa de q11/q12: allà partíem d'un paral·lelogram i
en trèiem angles; aquí partim dels quatre angles rectes i hem de recuperar la
figura.

---

## 1. q01 — *Where is the "center" of an equilateral triangle?*
> On és el "centre" d'un triangle equilàter?

**Moviment: troba un punt per simetria (moviment nou d'aquest lot).**

**Pista 0 — què vol dir "el" centre.**
Un triangle qualsevol té diversos punts que es podrien dir "centre": on es
tallen les altures, on es tallen les bisectrius, on es tallen les medianes...
En general són **tres punts diferents**. La pregunta interessant no és calcular-
ne un, és preguntar-se per què, en el cas equilàter, tothom en diu *el* centre
com si n'hi hagués només un.

**Pista 1 — comença per una sola mediana.**
Tria un vèrtex i uneix-lo amb el punt mitjà del costat oposat. Aquesta línia,
per simetria del triangle equilàter (els dos costats que surten del vèrtex
triat són iguals), parteix l'angle del vèrtex en dos d'iguals **i** el costat
oposat en dos d'iguals alhora. Qualsevol triangle isòsceles ja té aquesta
propietat amb una sola línia (la que surt del vèrtex on es troben els dos
costats iguals); el que és propi de l'equilàter és tenir-la alhora des dels
tres vèrtexs.

I encara en fa una tercera, que faràs servir molt: hi cau **perpendicular**.
Val la pena veure per què, perquè és un argument de tres línies que
reapareixerà a q26, a q83 i cada cop que partis un isòsceles per la meitat.
Els dos triangles en què queda partit tenen els tres costats iguals dos a
dos (els dos costats del triangle, que són iguals; la meitat de la base,
compartida en mida; i la línia nova, compartida de debò), o sigui que són
congruents. Per tant els dos angles que fan amb la base són iguals. I dos
angles iguals que junts fan una recta —180°— han de fer 90° cadascun.

**Pista 2 — la construcció.** → `034_centre_triangle.png`
Fixa't que les tres medianes semblen tallar-se en un sol punt. No és un
accident del dibuix.

**Pista 3 — tanca-ho.**
Per simetria, si repeteixes l'argument de la pista 1 amb els altres dos
vèrtexs, obtens tres línies, cadascuna alhora bisectriu d'angle, mediana i
altura del seu vèrtex.

Falta encara la part que el dibuix et suggereix però que no has demostrat:
que les tres es tallin totes en un MATEIX punt. Tres rectes qualssevol es
tallen, normalment, en tres punts diferents. Aquí la simetria també ho
resol, i amb una sola frase: agafa una de les tres línies i fes-ne un
mirall. Doblegant per aquest mirall, el triangle cau exactament damunt
d'ell mateix i les altres dues línies s'intercanvien. Per tant el punt on
aquelles dues es creuen ha de quedar-se on és —i l'únic lloc que no es
mou en aquest plec és el mirall mateix. O sigui que la tercera línia hi
passa. I com que pots fer aquest raonament amb qualsevol de les tres, les
tres passen pel mateix punt.

Això és el que fa que, en aquest cas (i només en aquest), "el centre"
tingui sentit sense ambigüitat: bisectrius, medianes i altures hi són
totes tres alhora.

**Comprovació.** Un triangle equilàter de costat 12. La mediana des d'un
vèrtex fa 6√3 ≈ 10,39 (surt de Pitàgores: 12² − 6² = 108). Comprova
primer el que sí que has demostrat: pren un punt qualsevol d'una mediana
i mesura'n la distància als dos vèrtexs de l'altra banda —han de sortir
iguals, perquè la mediana és el mirall. I comprova que les tres medianes
que dibuixis es creuen totes en un sol punt, no en tres.

A quina distància del vèrtex cau aquest punt, en canvi, és una pregunta
que aquesta guia NO respon: la simetria et diu que el punt existeix, no
on és exactament. Si vols saber-ho, mesura-ho al teu dibuix; hauria de
sortir-te ≈6,93, és a dir 2/3 de la mediana. Que aquesta proporció sigui
sempre 2/3 —i per a qualsevol triangle, no només l'equilàter— és un
resultat de debò, i necessita un argument propi que aquí no hem fet.

**I després.** Aquest "punt on coincideixen tres rectes que en un triangle
general són tres punts diferents" és un patró que reapareixerà cada vegada
que afegeixis una simetria a una figura: la simetria no crea coincidències,
en col·lapsa d'altres que ja existien per separat.

---

## 2. q02 — *These four triangles are congruent. Why?*
> Aquests quatre triangles són congruents. Per què?

**Moviment: redueix el desconegut al conegut.**

**Pista 0 — què has de produir.**
No has de demostrar que *un parell* és congruent: n'hi ha quatre, i has
d'explicar per què **tots quatre** ho són entre ells, amb un sol argument que
valgui per als quatre alhora.

**Pista 1 — mira només els costats nous.**
Cada línia nova que has afegit uneix dos punts mitjans de costats del
triangle gran. Aquesta línia, per un resultat que probablement ja coneixes
(el segment que uneix dos punts mitjans és paral·lel al tercer costat i en fa
la meitat), et diu la mida dels tres costats de cadascun dels quatre
triangles petits sense haver de mesurar res.

**Pista 2 — la construcció.** → `035_subdivisio_punts_mitjans.png`
El segon triangle (el de la dreta, no equilàter) és a posta: el mateix
argument ha de funcionar-hi igual, sense cap simetria addicional a ajudar.

**Pista 3 — tanca-ho.**
Compte amb un pas que sembla innocent i no ho és. Que els costats d'un
triangle petit siguin **la meitat** dels del gran NO vol dir que hi sigui
congruent: vol dir que hi és **semblant**, de raó 1/2. El que necessites és
una altra cosa, i ja la tens: si els costats del triangle gran són a, b i c,
els **quatre** triangles petits tenen exactament els mateixos tres costats,
a/2, b/2 i c/2. Tres costats iguals dos a dos és el criteri
costat-costat-costat. Per tant els quatre petits són congruents **entre
ells**, que és el que l'enunciat demana.

**Comprovació.** Un triangle de costats 6, 8, 10. Cada triangle petit ha de
tenir costats 3, 4, 5 — i per tant és rectangle (3² + 4² = 5²). El gran també
ho és (6² + 8² = 10²), i no podria ser d'una altra manera: els petits en són
còpies a escala 1/2, i canviar l'escala no canvia cap angle.

**I després.** El moviment d'aquesta guia —connectar punts mitjans i deixar
que el teorema del segment mitjà et digui les mides— torna, amb sorpresa, si
l'apliques a un quadrilàter qualsevol per rar que sigui: els punts mitjans
dels seus quatre costats sempre formen un paral·lelogram. El motiu és
exactament el mateix teorema, aplicat als dos triangles en què una diagonal
parteix el quadrilàter.

---

## 3. q70 — *What is the sum of the interior angles of a polygon with n sides?*
> Quant sumen els angles interiors d'un polígon de n costats?

**Moviment: redueix el desconegut al conegut.**

**Pista 0 — què és "conegut" aquí.**
L'únic polígon del qual ja saps la suma d'angles amb certesa és el triangle:
180°. Tota aquesta demostració consisteix a convertir un polígon de n costats
en un cert nombre de triangles, sense deixar-ne cap forat ni superposar-ne
cap.

**Pista 1 — un cas petit primer.** → `fig-199.png`
Un quadrilàter (n=4): traça'n una diagonal. Queda partit en dos triangles.
Suma: 2 × 180° = 360°. Ara fes el mateix amb un pentàgon (n=5) triant totes
les diagonals des d'**un sol vèrtex**. Quants triangles surten?

**Pista 2 — la construcció.** → `036_pentagon_triangulat.png`
Fixa't que el polígon del dibuix **no és regular**. És a posta: l'argument no
pot dependre de cap simetria, ha de valer per a qualsevol polígon **convex**
(un polígon sense cap "entrant", on totes les diagonals queden per dins).

**Pista 3 — tanca-ho.**
Des d'un vèrtex d'un polígon de n costats, quantes diagonals hi caben (sense
comptar els dos costats que ja hi surten)? Cada diagonal afegeix un triangle
més als dos que ja fan els costats adjacents al vèrtex. Compta els triangles
en funció de n i multiplica per 180°.

**Comprovació.** Un hexàgon (n=6): hauries d'obtenir 4 triangles i, per tant,
720°. Un polígon de 10 costats: 8 triangles, 1440°. La fórmula general hauria
de donar (n−2) × 180°.

**I després.** Aquest mateix moviment —triangular des d'un sol vèrtex— és
exactament el que reutilitzaràs a q29 per calcular diagonals concretes d'un
hexàgon i un octàgon, i a q06 per mirar els angles que es formen en aquest
ventall de triangles, no només comptar-los.

Val la pena que sàpigues on s'atura aquest argument, perquè és un exemple
net d'una cosa que passa sovint: el resultat és més general que la
demostració. Dibuixa un polígon amb un entrant ben marcat, com una fletxa,
i tria el vèrtex de la punta de dins: veuràs que algunes de les diagonals
que hi voldries traçar se'n van FORA de la figura, i el ventall ja no
parteix el polígon en triangles. La fórmula (n−2)×180° continua sent certa
per a aquests polígons —pots comprovar-ho mesurant—, però aquesta
demostració concreta ja no la prova. Per a aquell cas cal un argument
diferent: sempre existeix ALGUNA diagonal interior que parteix el polígon
en dos de més petits, i es va repetint. Que un argument no arribi a tot
arreu no el fa dolent; el que seria dolent és no saber fins on arriba.

---

## 4. q29 — *A hexagon and an octagon, triangulated from one vertex: how many diagonals, how many triangles?*
> Un hexàgon i un octàgon, triangulats des d'un vèrtex: quantes diagonals, quants triangles?

**Moviment: redueix el desconegut al conegut (reaplicació directa de q70).**

**Pista 0 — no tornis a demostrar q70.**
Ja tens la fórmula: un polígon de n costats, triangulat des d'un vèrtex, dona
n−3 diagonals i n−2 triangles. Aquesta pregunta no et demana redemostrar-ho,
et demana **fer-lo servir** amb valors concrets de n.

**Pista 1 — compta amb els dits abans de fer servir la fórmula.** → `fig-188.png`
Mira el dibuix de l'hexàgon. Des del vèrtex de dalt, compta les diagonals una
per una. Compta els triangles un per un. Comprova que els dos comptatges
coincideixen amb n−3 i n−2 per a n=6 abans de confiar-hi cegament per a n=8.

**Pista 2 — la construcció.** → `037_hexagon_octagon_triangulats.png`
Els dos polígons són regulars (a diferència del de q70), però aquí la
regularitat és només perquè es vegi net al dibuix — la fórmula que fas
servir no la necessita per res. El que sí que necessita, i val la pena
saber-ho, és que el polígon sigui CONVEX: en un polígon amb entrants, una
diagonal traçada des d'un vèrtex pot sortir-se de la figura, i el ventall ja
no la parteix netament en n−2 triangles. Per MESURAR les diagonals, en canvi
(la segona meitat d'aquesta pregunta), la regularitat sí que et fa falta.

**Pista 3 — tanca-ho.**
Aplica n−3 i n−2 per a n=6 i n=8 per separat. Aquí no hi ha cap pas nou de
raonament: el pas nou ja el vas fer a q70. El que hi ha aquí és la
comprovació que la fórmula, un cop obtinguda en abstracte, dona números
correctes en casos concrets.

**Comprovació.** Hexàgon (n=6): 3 diagonals, 4 triangles, suma d'angles 720°.
Octàgon (n=8): 5 diagonals, 6 triangles, suma d'angles 1080°.

I ara la part de MESURAR, que és el que l'enunciat del llibre demana de
debò. Hexàgon regular de costat s: la diagonal curta (la que salta un
vèrtex) fa s√3 ≈ 1,732s, i la llarga (la que va al vèrtex oposat, passant
pel centre) fa exactament 2s. Amb s=1: 1,732 i 2. Comprova la curta amb el
mètode de q26 —és la base d'un triangle isòsceles de costats s i angle
120°, o dues alçades d'equilàter posades seguides— i la llarga sense cap
càlcul: l'hexàgon regular són sis triangles equilàters al voltant del
centre, així que dos radis seguits fan 2s. Àrea de l'hexàgon: sis
equilàters de costat s, és a dir 6 × (√3/4)s² = (3√3/2)s² ≈ 2,598s².

L'octàgon es fa exactament igual, però amb tres llargades de diagonal en
lloc de dues (salta 1, salta 2, salta 3), i el mètode és el mateix: cada
diagonal és la base d'un triangle isòsceles amb dos radis del polígon.

**I després.** Aquest patró —demostrar-ho en abstracte una vegada (q70) i
després aplicar-ho repetidament sense repetir l'argument (q29, i també q06,
que hi torna des d'un altre angle)— és com funciona la major part de la
geometria a partir d'aquí: un teorema, moltes aplicacions.

---

## 5. q06 — *A heptagon, with the diagonals from one vertex and their angles marked: what do you notice?*
> Un heptàgon, amb les diagonals des d'un vèrtex i els seus angles marcats: què hi observes?

**Moviment: redueix el desconegut al conegut (una altra mirada sobre la triangulació de q70/q29).**

**Pista 0 — aquí no compten triangles, es miren angles.**
q70 i q29 preguntaven "quants". Aquesta pregunta no vol un recompte: vol que
et fixis en la mida de cadascun dels quatre angles que es formen al vèrtex
entre diagonals consecutives, i que trobis la relació que hi ha entre ells.

**Pista 1 — aposta abans de mirar la construcció.**
Amb quatre angles diferents dibuixats al mateix vèrtex d'un heptàgon
*regular*, esperes que siguin tots diferents, que hi hagi parells iguals, o
que siguin tots exactament iguals? Escriu la teva aposta abans de continuar.

**Pista 2 — la construcció.** → `038_heptagon_angles_vertex.png`
Els quatre arcs són a radis diferents només perquè, si els dibuixéssim tots
al mateix radi des d'un vèrtex on conflueixen sis línies, es taparien entre
ells. La mida del radi no significa res: només hi és per poder-los distingir
a simple vista.

**Pista 3 — tanca-ho.**
En un polígon regular inscrit en una circumferència, l'angle que es veu des
d'un vèrtex entre dos vèrtexs consecutius depèn només de **quants costats
del polígon separen aquests dos vèrtexs** — no de quins vèrtexs concrets
siguin. Com que aquests angles separen sempre un vèrtex del
següent (mai en salten dos de cop), tots subtendeixen el mateix arc de
circumferència, i per tant són el mateix angle. Compta bé quants n'hi ha:
des d'un vèrtex d'un heptàgon surten 4 diagonals, i 4 diagonals parteixen
l'angle d'aquell vèrtex en 5 trossos, no en 4. Els dos trossos dels
extrems (entre un costat del polígon i la diagonal veïna) són del mateix
tipus que els altres tres —també separen un vèrtex del següent.

**Comprovació.** Amb la fórmula de l'angle inscrit, cadascun dels cinc
trossos val 180°/7 ≈ 25,71°. Els cinc junts han de reconstruir l'angle
interior d'UN vèrtex de l'heptàgon: 5 × 180/7 = 900/7 ≈ 128,57°. I això
és exactament el que q70 prediu per a un heptàgon regular, (7−2)×180/7.
Compte amb un error fàcil: 900° és la suma dels SET angles interiors de
l'heptàgon sencer. Un ventall d'un sol vèrtex no pot arribar-hi mai —
només pot completar el seu propi angle, que és set vegades més petit.

**I després.** Aquest és un cas particular d'un fet més general que
segurament ja coneixes amb un altre nom: angles inscrits que subtendeixen el
mateix arc són iguals. Aquí l'has vist aparèixer dins d'una triangulació, no
dins d'una circumferència amb dos radis com sol presentar-se.

---

## 6. q11 — *In a parallelogram, why are opposite angles equal?*
> Per què, en un paral·lelogram, els angles oposats són iguals?

**Moviment: dues maneres de mirar la mateixa figura.**

**Pista 0 — què saps del paral·lelogram sense demostrar res.**
Per definició, un paral·lelogram té els dos parells de costats paral·lels.
Això, i només això —cap mesura, cap suposició addicional— és tot el que et
pots permetre servir-te al començament.

**Pista 1 — una diagonal parteix la figura en dos.**
Traça una diagonal. Els dos triangles que en resulten comparteixen aquesta
diagonal com a costat comú. Amb els costats paral·lels donats, quins angles
d'aquests dos triangles pots dir que són iguals *sense mesurar*, només per
la propietat de rectes paral·leles tallades per una transversal?

**Pista 2 — la construcció.** → `039_parallelogram_angles.png`
Els arcs marquen quins angles resulten iguals amb aquest argument: un arc
per a un parell, dos arcs per a l'altre parell. No són el mateix angle
repetit dues vegades, són dos parells diferents.

**Pista 3 — tanca-ho.**
Amb els dos triangles congruents (comparteixen la diagonal, i tenen dos
parells d'angles iguals per paral·lelisme, cosa que en determina el tercer),
suma els angles que cauen en cada vèrtex del paral·lelogram original i
compara els vèrtexs oposats entre ells.

**Comprovació.** Si un angle del paral·lelogram fa 65°, el seu oposat també
n'ha de fer 65°, i els altres dos (adjacents a aquest) n'han de fer 115° cada
un —perquè els quatre han de sumar 360°, i els adjacents entre ells sumen
sempre 180°.

**I després.** El mateix parell de triangles que has fet servir aquí és el
que tornaràs a fer servir a q12, per a una pregunta relacionada però amb la
implicació girada: allà no et donen que és un paral·lelogram, t'ho donen com
una cosa a demostrar.

---

## 7. q12 — *If the diagonals of a parallelogram are equal, what can you say about it?*
> Si les diagonals d'un paral·lelogram són iguals, què en pots dir?

**Moviment: contraexemple i demostració — quan una condició extra ho canvia tot.**

**Pista 0 — separa el que et donen del que has de trobar.**
Aquí et donen *més* que a q11: no només és un paral·lelogram, a més les
dues diagonals fan la mateixa llargada. La pregunta és què pots concloure
que **no** podies concloure abans amb menys informació.

**Pista 1 — prova-ho amb un paral·lelogram inclinat.**
Dibuixa mentalment un paral·lelogram ben esbiaixat (com el de la figura, no
un rectangle). Les dues diagonals hi tenen longituds diferents. Ara imagina
que el vas "redreçant" fins que les diagonals s'igualen: què li passa als
angles pel camí?

**Pista 2 — la construcció.** → `040_diagonals_iguals_rectangle.png`
Les marquetes a les dues diagonals diuen "iguals entre elles", no diuen
encara res sobre els angles del paral·lelogram.

**Pista 3 — tanca-ho.**
Mira els dos triangles que formen una diagonal amb dos costats consecutius.
Amb els costats iguals dos a dos (per ser paral·lelogram) i ara també la
diagonal compartida igual a l'altra diagonal (dada nova), tens prou per
demostrar-los congruents amb el criteri costat-costat-costat, i d'aquí
recuperar que els angles adjacents sumen 180° i són iguals entre ells —
l'única manera que passi és que cadascun sigui de 90°.

**Comprovació.** Un paral·lelogram amb costats 5 i 12: si les diagonals fan
totes dues 13, hauria de sortir un rectangle (i, de fet, 5-12-13 és un
triangle rectangle conegut — no és casualitat).

**I després.** "Paral·lelogram + diagonals iguals = rectangle" és el
recíproc d'un fet que segurament ja coneixes en l'altra direcció (rectangle
⟹ diagonals iguals). Aquest tipus de pregunta —quina condició extra converteix
un objecte general en un de particular— reapareixerà a q71, on la condició
de partida serà una altra (quatre angles rectes) i el que caldrà recuperar
serà el paral·lelisme dels costats.

---

## 8. q73 — *Given only the midpoints of a triangle's sides, can you reconstruct the triangle? What about a quadrilateral?*
> Coneixent només els punts mitjans dels costats d'un triangle, el pots reconstruir? I un quadrilàter?

**Moviment: quanta informació cal — i què passa quan no n'hi ha prou.**

**Pista 0 — dues preguntes en una.**
Fixa't que en realitat són dues preguntes independents amb, molt
probablement, respostes diferents: una pel triangle, una altra pel
quadrilàter general. No donis per fet que la resposta és la mateixa.

**Pista 1 — comença pel triangle.** → `fig-201.png`
Si tens els tres punts mitjans M_AB, M_BC, M_CA, el triangle que formen
(el "triangle medial") és semblant al triangle original, a escala 1/2 i
girat 180°. Si coneixes el triangle medial, coneixes la seva orientació i
la seva mida — et falta només "desfer" l'escala i el gir. Hi ha una única
manera de fer-ho?

**Pista 2 — la construcció.** → `041_triangle_medial.png`
El triangle en tinta (petit, al mig) és la dada que tens. El triangle en
sanguina discontínua (gran, al voltant) és la incògnita que has de
recuperar — per això aquí la incògnita és la que va en sanguina, al revés
del conveni habitual: normalment dibuixem en tinta el que ja tenim.

**Pista 3 — tanca-ho pel triangle, i pensa el quadrilàter.**
Cada vèrtex del triangle original és el simètric d'un vèrtex del triangle
medial respecte del punt mitjà del costat oposat del medial — o, dit d'una
altra manera, cada costat del triangle original passa pel punt mitjà
corresponent i és paral·lel al costat oposat del medial, a doble llargada.
Això sí que reconstrueix un únic triangle. Ara pensa un quadrilàter: si et
donen els quatre punts mitjans dels seus costats, què saps segur (el
polígon que formen aquests quatre punts sempre és un paral·lelogram, sigui
quin sigui el quadrilàter de partida) i què **no** pots recuperar-ne (la
posició exacta dels quatre vèrtexs originals no queda determinada de manera
única).

**Comprovació.** Amb un triangle medial de costats 3, 4, 5, el triangle
original ha de tenir costats 6, 8, 10 — el doble de cadascun, en el mateix
ordre.

**I després.** Aquesta distinció —un triangle sí que es reconstrueix de
manera única a partir dels punts mitjans, un quadrilàter general no— és un
primer tast de per què els triangles són, en geometria sintètica, la unitat
mínima que sol fer-se servir per demostrar coses sobre polígons més grans
(el mateix esperit que q02, q70 i q29).

---

## 9. q38 — *A rectangle where removing a square from one end leaves a rectangle similar to the original: what shape is it?*
> Un rectangle on, si en retalles un quadrat d'un extrem, queda un rectangle semblant a l'original: quina forma és?

**Moviment: la identitat com a figura — plantejar l'equació que la construcció mateixa dicta.**

**Pista 0 — tradueix "semblant" a una proporció.**
"El rectangle petit és semblant a l'original" vol dir que la raó entre els
seus costats és la mateixa raó que als costats de l'original. Aquesta és
tota la informació de l'enunciat; no n'hi ha cap altra.

**Pista 1 — posa noms als costats.**
Sigui el costat curt del rectangle original 1, i el llarg x (x > 1). En
treure'n el quadrat de costat 1, queda un rectangle de costats 1 i (x−1).
Escriu la proporció "el rectangle petit és semblant a l'original" amb
aquests noms.

**Pista 2 — la construcció.** → `042_rectangle_auri.png`
La línia sanguina marca on cauria el tall que separa el quadrat de la resta.
Els dos segments etiquetats "1" i "x" corresponen als dos trams en què queda
partit el costat llarg.

**Pista 3 — tanca-ho.**
La proporció costat llarg / costat curt ha de ser la mateixa als dos
rectangles: x/1 = 1/(x−1). Aquesta equació, un cop desenvolupada, és una
equació de segon grau en x. Resol-la (només té sentit la solució positiva) i
identifica el número que t'ha sortit.

**Comprovació.** x hauria de sortir (1+√5)/2 ≈ 1,618. Comprova-ho substituint
aquest valor a la proporció original: 1,618/1 hauria de ser (aproximadament)
igual a 1/0,618.

**I després.** Aquest número és el nombre auri, i és exactament el mateix que
governa el pentàgon regular: la raó entre la seva diagonal i el seu costat. Si
véns de q31/q33, l'equació x²=x+1 que acabes de resoldre és, lletra per
lletra, la d²=d+1 d'allà —dues figures sense cap parentiu aparent, una mateixa
identitat. I si encara no hi has passat, q33 te'n dona una demostració que no
fa servir cap rectangle.

---

## 10. q76 — *If a triangle has sides a, b, and c, what is the radius of its inscribed circle in terms of its area?*
> Si un triangle té costats a, b i c, quin és el radi del seu cercle inscrit en funció de la seva àrea?

**Moviment: separa i reorienta — parteix la figura en peces que ja saps mesurar.**

**Pista 0 — el cercle no és la peça útil, el centre sí.**
Oblida't del cercle un moment. La peça de la construcció que fa tota la
feina no és la circumferència: és el punt del seu centre, i el fet que
aquest punt és a la mateixa distància (el radi r) de cadascun dels tres
costats.

**Pista 1 — uneix el centre amb els tres vèrtexs.**
Si uneixes el centre del cercle inscrit amb els tres vèrtexs del triangle,
el triangle gran queda partit en tres triangles més petits. Què tenen en
comú, com a mesura, aquests tres triangles petits, encara que tinguin bases
diferents (a, b i c)?

**Pista 2 — la construcció.** → `043_incentre_tres_triangles.png`
Els tres segments discontinus curts (els radis cap a cada costat) tenen tots
la mateixa marca — i, a diferència d'altres figures d'aquest lot, aquí *sí*
és literalment cert que els tres fan la mateixa longitud, perquè tots tres
són el radi del mateix cercle inscrit.

**Pista 3 — tanca-ho.**
Cadascun dels tres triangles petits té per base un costat del triangle gran
(a, b o c) i per altura, exactament, r —perquè el radi cap a cada costat hi
és perpendicular. La seva àrea és, doncs, (1/2)×a×r, (1/2)×b×r i (1/2)×c×r
respectivament. Suma les tres i iguala-ho a l'àrea total del triangle.

**Comprovació.** Un triangle de costats 3, 4, 5 (rectangle, àrea = 6). Amb
la fórmula que n'has tret, r = 2×Àrea/(a+b+c) = 12/12 = 1. Comprova-ho: el
radi del cercle inscrit d'un 3-4-5 és, efectivament, 1.

**I després.** Aquesta manera de "veure" l'àrea d'un triangle des del seu
centre, sumant-hi tres peces més petites, és el mateix moviment que fas
servir a q39 per a l'àrea d'un pentàgon regular —allà, en comptes de tres
triangles diferents, en surten cinc d'iguals.

---

## 11. q80 — *What is the area of a triangle in terms of two sides and the angle between them?*
> Quina és l'àrea d'un triangle en funció de dos costats i l'angle que formen?

**Moviment: dues maneres de mirar la mateixa figura (base × altura, però amb l'altura amagada dins un angle).**

**Pista 0 — ja saps una fórmula, aquesta n'és una altra versió.**
Ja saps que l'àrea d'un triangle és (1/2) × base × altura. Aquesta pregunta
no et demana una fórmula nova des de zero: et demana escriure "altura" en
funció de coses que sí et donen (un costat i un angle), quan l'altura en si
no t'han donat directament.

**Pista 1 — quin triangle rectangle amaga l'altura.**
Si deixes caure la perpendicular des d'un vèrtex fins a la recta que conté
el costat oposat, aquesta perpendicular (l'altura) és un catet d'un triangle
rectangle petit. La hipotenusa d'aquest triangle rectangle petit és un dels
costats donats. Quina raó trigonomètrica lliga l'altura, la hipotenusa i
l'angle que hi ha entre ells?

**Pista 2 — la construcció.** → `044_area_sinus.png`
L'angle marcat en sanguina és el que fas servir com a "l'angle entre els dos
costats" a la fórmula. L'altura h es dibuixa discontínua perquè és una línia
de construcció, no un costat del triangle.

**Pista 3 — tanca-ho.**
Amb h = b × sin(C) (el costat b fa de hipotenusa del triangle rectangle
petit, i l'angle C hi és l'angle conegut), substitueix-ho a la fórmula
(1/2) × base × altura, on la base és el costat a.

**Comprovació.** Un triangle amb a = 6, b = 7 i l'angle entre ells C = 30°.
Àrea = (1/2) × 6 × 7 × sin(30°) = 21 × 0,5 = 10,5.

**I després.** Aquesta fórmula no necessita que el triangle sigui rectangle
ni que en sàpigues l'altura per endavant — funciona amb qualsevol triangle
del qual coneguis dos costats i l'angle que formen, **inclòs el cas en què
C és obtús**. Aquí la Pista 1 s'ha de llegir amb compte: si C és obtús, el
peu de l'altura cau FORA del triangle, no dins. Que la fórmula h = b·sin(C)
continuï valent en aquest cas no és casualitat — és precisament la raó per
la qual q87 defineix el sinus d'un angle obtús com sin(180°−C) en lloc de
deixar-lo sense definir: la definició es tria expressament perquè fórmules
com aquesta no s'hagin de partir en dos casos. És la porta d'entrada
natural a la llei del sinus i del cosinus si mai hi treballes.

---

## 12. q89 — *If two of a triangle's angle bisectors are equal in length, is the triangle isosceles?*
> Si dues bisectrius d'angle d'un triangle fan la mateixa longitud, el triangle és isòsceles?

**Moviment: contraexemple i demostració — quan la intuïció i la resposta correcta coincideixen per raons no òbvies.**

**Pista 0 — aposta abans de raonar.**
Aquest és un dels resultats clàssics de la geometria elemental que costa més
de demostrar del que sembla a primer cop d'ull (es coneix com el teorema de
Steiner–Lehmus). Abans de saber-ho: la teva intuïció probablement et diu que
sí, és isòsceles. Aquesta vegada la intuïció encerta —però val la pena que
notis que **no és evident per què**, i que un argument ràpid del tipus "és
simètric, doncs..." no n'és una demostració vàlida.

**Pista 1 — per què "és fàcil de creure" no compta.**
Si el triangle ja fos isòsceles, és fàcil veure per simetria que les dues
bisectrius (dels dos angles iguals) fan la mateixa longitud —aquest sentit
és senzill. Aquí et demanen l'altre sentit: si les dues bisectrius **surten**
iguals, has de deduir que el triangle era isòsceles. Aquesta implicació
inversa és la que necessita una demostració real (i no la donarem aquí
sencera: és massa llarga per a una pista puntual d'aquest lot).

**Pista 2 — la construcció.** → `fig-045.png`
El triangle del dibuix s'ha fet **expressament no isòsceles** a ull. Hi ha
**dues** bisectrius, una des de B i una des de C — calen totes dues per
poder-ne escriure la hipòtesi. Els arcs distingeixen quina bisectriu parteix
quin angle (un arc a B, dos arcs a C: són bisectrius diferents, no cal que
es corresponguin). Les ratlletes a BP i a CQ marquen la hipòtesi —"aquestes
dues longituds es fan iguals"— però no una mesura d'aquest dibuix concret:
en un triangle realment escalè com aquest **no poden sortir exactament
iguals en píxels** (és tota la gràcia del teorema: si ho fossin de veritat,
el triangle seria isòsceles). La ratlleta és la hipòtesi que estàs suposant,
no el que veus.

**Pista 3 — el que sí pots fer amb les eines d'aquest lot.**
El que sí està al teu abast és comprovar el resultat numèricament en un cas
concret, i raonar per què un triangle *molt* escalè (costats molt diferents)
hauria de donar bisectrius molt diferents —encara que demostrar-ho en
general no hi sigui.

**Comprovació.** En un triangle escalè "normal" (per exemple, costats 5, 6,
7), calcula (amb la fórmula de la longitud de la bisectriu, si la tens a
mà, o amb un dibuix a escala) les longituds de dues bisectrius diferents:
haurien de sortir clarament diferents entre elles. Això no demostra el
teorema, però confirma que "diferents costats ⟹ diferents bisectrius" no
falla en el cas típic, que és el que fa creïble la implicació inversa.

**I després.** Aquest és l'únic resultat d'aquest lot on la demostració
completa se't queda fora d'abast expressament —val la pena saber que
existeixen teoremes senzills d'enunciar i difícils de provar, i que
"contraintuïtivament difícil" no vol dir "fals".

---

## 13. q37 — *Find a rectangle with the same area and the same perimeter as a given equilateral triangle.*
> Troba un rectangle amb la mateixa àrea i el mateix perímetre que un triangle equilàter donat.

**Moviment: dues equacions, dues incògnites — plantejar el sistema que la construcció exigeix.**

**Pista 0 — dues condicions, no una.**
"Mateixa àrea" és una condició. "Mateix perímetre" n'és una altra,
independent. Un rectangle té dues dimensions lliures (base i altura), i tens
exactament dues condicions per fixar-les totes dues —això hauria
d'engegar-te l'alarma de "sistema de dues equacions amb dues incògnites".

**Pista 1 — escriu les dues magnituds del triangle primer.**
Si el triangle equilàter té costat s, el seu perímetre és 3s i la seva àrea
és (√3/4)s². Aquests dos números són ara constants conegudes: el que et
falta trobar són les dues dimensions x, y del rectangle.

**Pista 2 — la construcció.** → `046_triangle_rectangle_mateixa_area_perimetre.png`
El rectangle es dibuixa amb un interrogant a posta: no hi ha unes
dimensions "correctes" per pintar-hi, perquè encara no les has calculat —
són precisament el resultat que busques.

**Pista 3 — tanca-ho.**
Planteja 2x + 2y = 3s (mateix perímetre) i xy = (√3/4)s² (mateixa àrea).
De la primera equació, aïlla y en funció de x i s; substitueix-ho a la
segona. Et queda una equació de segon grau en x.

**Comprovació.** Amb s = 4: perímetre 12, àrea 4√3 ≈ 6,93. Si resols el
sistema, has de trobar dues solucions per a (x, y) que, multiplicades,
donin ≈ 6,93, i sumades (×2) donin 12. Comprova que la teva parella de
solucions compleix totes dues coses alhora, no només una.

**I després.** Un sistema com aquest —dues incògnites que has de trobar a
partir de la seva suma i el seu producte— no sempre té solució real: si
la condició d'àrea fos massa exigent per al perímetre donat, l'equació de
segon grau de la Pista 3 podria tenir discriminant negatiu, i cap
rectangle real la compliria. Aquí no passa —val la pena saber per què, en
lloc de donar-ho per fet. El discriminant surt s²(9/4 − √3), i com que
√3 ≈ 1,73 és més petit que 9/4 = 2,25, aquest número és positiu per a
QUALSEVOL costat s > 0: sempre hi ha un rectangle, encara que —com
acabes de veure amb s=4— pugui sortir molt allargat.

I encara una cosa més sobre aquest sistema, que és fàcil de llegir malament:
l'equació de segon grau té DUES arrels, i les dues arrels són x i y. No són
dos rectangles diferents —són els dos costats del mateix rectangle. De fet
per a rectangles "mateixa àrea i mateix perímetre" SÍ que determina la
figura: la suma i el producte de dos números en fixen la parella. On això
deixa de valer és en sortir dels rectangles: hi ha figures ben diferents amb
la mateixa àrea i el mateix perímetre, i tampoc no cal que dues
figures amb la mateixa àrea i el mateix perímetre siguin
congruents ni úniques.

---

## 14. q39 — *What is the area of a regular pentagon with side length s?*
> Quina és l'àrea d'un pentàgon regular de costat s?

**Moviment: redueix el desconegut al conegut (reaplica q76, amb una peça extra).**

**Pista 0 — ja has resolt un problema molt semblant.**
A q76 vas partir un triangle en tres triangles des del seu incentre i vas
sumar-ne les àrees. Aquí faràs exactament el mateix amb un pentàgon regular
i el seu centre —amb l'avantatge que, com que el pentàgon és regular, els
cinc triangles que en surten són tots iguals entre ells, no cal sumar cinc
termes diferents.

**Pista 1 — un triangle, cinc vegades.**
Uneix el centre amb els cinc vèrtexs. Surten cinc triangles isòsceles
idèntics. Si en trobes l'àrea d'un, ja tens la resposta: multiplica per 5.

**Pista 2 — la construcció.** → `047_pentagon_apotema.png`
La peça nova respecte de q76 és l'apotema (el segment discontinu curt del
centre al punt mitjà d'un costat): fa d'altura de cadascun dels cinc
triangles, i el radi R (centre a un vèrtex) no és directament la mateixa
cosa que l'apotema —una confusió freqüent val la pena evitar-la ara.

**Pista 3 — tanca-ho.**
Cada triangle té per base el costat s del pentàgon i per altura l'apotema
a. La seva àrea és (1/2) × s × a. Multiplica per 5 triangles, i, si vols
una fórmula només en funció de s, hauràs d'expressar a en funció de s amb
trigonometria (a = s / (2 tan(36°))) —o deixar la fórmula en funció de s i
a alhora, que sovint és més útil a la pràctica.

**Comprovació.** Amb s = 10: l'apotema val a ≈ 6,88. Àrea d'un triangle:
(1/2)×10×6,88 = 34,4. Àrea del pentàgon: 5×34,4 = 172. Aquest resultat ha de
coincidir (amb petit marge d'arrodoniment) amb la fórmula estàndard
Àrea = (5/4) s² / tan(36°) ≈ 172,05.

**I després.** El mateix moviment —n triangles iguals des del centre, un
per costat— funciona per a qualsevol polígon regular, no només el pentàgon:
és la manera general de trobar l'àrea d'un polígon regular de n costats
coneixent-ne el costat i l'apotema.

---

## 15. q05 — *What is the angle at each point of a five-pointed star? And an eight-pointed star?*
> Quin és l'angle a cada punta d'una estrella de cinc puntes? I d'una de vuit puntes?

**Moviment: redueix el desconegut al conegut — un triangle isòsceles amagat a cada punta.**

**Pista 0 — les dues estrelles no són el mateix objecte "amb més puntes".**
L'estrella de cinc puntes es dibuixa unint cada vèrtex d'un pentàgon regular
amb el següent-però-un (saltant-ne un). La de vuit puntes fa el mateix però
saltant-ne dos. Aquest "quants en saltes" no és un detall estètic: és el
número que determina l'angle de la punta.

**Pista 1 — aïlla una sola punta.**
Cada punta de l'estrella és el vèrtex d'un triangle isòsceles format per
dos segments de l'estrella i, com a base, la corda que uneix els dos punts
on aquests segments toquen la circumferència que passa per totes les
puntes. L'angle que busques és l'angle al vèrtex d'aquest triangle.

**Pista 2 — la construcció.** → `fig-048.png`
L'arc marcat és a una sola punta de cada estrella —el mateix argument val
per a totes les altres per simetria, no cal repetir el dibuix cinc (o vuit)
vegades. La corda discontínua tanca el triangle isòsceles de la punta: uneix
els dos punts on hi arriben els dos costats marcats amb ratlleta (les cames
de l'isòsceles). Aquesta corda no és cap aresta de l'estrella —l'estrella
només "salta" vèrtexs— és la construcció auxiliar que fa visible el
triangle que la Pista 1 descriu.

**Pista 3 — tanca-ho.**
L'angle a la punta d'una estrella {n/k} (n puntes, saltant k-1 vèrtexs cada
vegada) es pot obtenir com 180° × (n − 2k)/n, a partir de mirar quant arc de
la circumferència queda "fora" del triangle isòsceles de la punta. No cal
que et memoritzis aquesta fórmula: val més que la retrobis tu mateix mirant
quants arcs iguals (dels n en què queda partida la circumferència pels n
vèrtexs) queden entre els dos costats de cada punta.

**Comprovació.** Estrella de cinc puntes (n=5, saltant-ne 1, és a dir k=2):
180×(5−4)/5 = 36°. Estrella de vuit puntes com la del dibuix (n=8, k=3):
180×(8−6)/8 = 45°. Suma dels angles de les cinc puntes del pentagrama:
5×36° = 180° —una coincidència curiosa que val la pena que comprovis si es
manté amb l'estrella de vuit puntes (5×36 no aplica aquí: fes el càlcul
anàleg amb 8×45).

**I després.** Aquesta manera de descriure una estrella com "polígon {n/k}"
—n vèrtexs, saltant-ne k−1 cada vegada— és la mateixa notació amb què es
descriuen els polígons estrellats en general, i determina no només l'angle
de la punta sinó també si la figura surt d'un sol traç continu o de
diversos (depenent de si n i k tenen factors comuns).

---

## 16. q18b — *If you scale a solid so every length multiplies by k, what happens to its volume?*
> Si escales un sòlid perquè totes les longituds es multipliquin per k, què li passa al volum?

**Moviment: invariant sota escala (moviment nou d'aquest lot — com canvia una magnitud quan la figura s'infla).**

**Pista 0 — no calculis un cub concret, raona amb el cub genèric.**
No cal que et fixis un valor numèric de costat: la pregunta és sobre **com
canvia** el volum en funció de k, per a qualsevol sòlid, i el cub és el cas
més senzill per veure-ho amb claredat abans de generalitzar.

**Pista 1 — un cub de costat s, i el mateix cub a escala k.**
El volum d'un cub de costat s és s³. Si ara totes les arestes es
multipliquen per k, el nou costat és k·s. Quin volum té el nou cub, escrit
en funció de k i de l'antic volum s³?

**Pista 2 — la construcció.** → `049_dilatacio_volum_cub.png`
Els dos cubs es dibuixen amb el mateix angle de projecció (per poder
comparar-los d'un cop d'ull), amb el segon clarament més gran que el
primer.

**Pista 3 — tanca-ho.**
(k·s)³ = k³·s³. El volum del cub gran és k³ vegades el volum del cub petit
—no k vegades, com potser esperaries si pensessis només en longituds. Ara
pensa per què aquest mateix argument (multiplicar per k cadascuna de les
tres dimensions independents) hauria de valer per a qualsevol sòlid, no
només per al cub.

**Comprovació.** Un cub de costat 2 (volum 8) escalat per k=3: el nou costat
és 6, i el nou volum ha de ser 6³=216. Comprova que 216 = 3³×8 = 27×8.

**I després.** Aquest resultat —el volum escala amb el cub del factor
lineal, mentre que l'àrea escala amb el seu quadrat— és el que fa que un
sòlid molt gran i un de molt petit amb la mateixa forma es comportin de
manera molt diferent per la relació entre la seva superfície i el seu
volum (per què un animal petit es refreda més ràpid que un de gran, per
exemple). El mateix principi d'"invariant sota una transformació" el
retrobaràs a q60, encara que allà la transformació que es fa servir no és
una escala sinó el principi de Cavalieri.

---

## 17. q60 — *A cone inscribed in a hemisphere, sharing the same base and apex height: is the cone's volume more or less than half the hemisphere's?*
> Un con inscrit en una semiesfera, compartint la mateixa base i la mateixa alçada de vèrtex: el volum del con és més o menys de la meitat del de la semiesfera?

**Moviment: invariant — Cavalieri amb un sòlid complementari (reaplica q54/q55 del lot 3).**

**Pista 0 — no calculis els dos volums per separat encara.**
Si ja saps les fórmules del volum del con i de l'esfera, podries fer-ho per
càlcul directe —però l'objectiu d'aquesta guia és que ho vegis també per
comparació directa de seccions, que és el mateix moviment que vas fer
servir a q54 i q55 per comparar volums sense fórmules.

**Pista 1 — mira el sòlid que "falta".**
Dins del cilindre que envolta la semiesfera (mateix radi, mateixa alçada),
hi ha dos sòlids: la semiesfera mateixa, i —si hi retalles també un con
invertit amb el vèrtex al centre de la base i la base dalt de tot— el
sòlid que queda entre el cilindre i aquest con. Aquest sòlid "que queda" té
una propietat notable en relació amb la semiesfera.

**Pista 2 — la construcció.** → `fig-050.png`
Aquest dibuix mostra el con *inscrit* de l'enunciat (vèrtex a dalt, base a
baix, tocant la semiesfera) — no el con invertit complementari de la pista
1. Són dos objectes relacionats però diferents: aquest dibuix és el punt de
partida de l'enunciat, la pista 1 et proposa un sòlid auxiliar per
comparar-hi. El pla horitzontal marcat en sanguina, a una alçada h
qualsevol, és l'eina de comparació: talla el con en dos punts (marcats), i
és exactament aquest mateix pla —a la mateixa alçada— el que hauries de
comparar amb la secció de la semiesfera per completar l'argument de la
pista 1.

**Pista 3 — tanca-ho.**
A qualsevol alçada h des de la base, la secció horitzontal del sòlid
"cilindre menys con invertit" té exactament la mateixa àrea que la secció
de la semiesfera a la mateixa alçada (aquest és el pas de Cavalieri: dues
seccions iguals a totes les alçades ⟹ mateix volum). Com que coneixes el
volum del cilindre i el del con invertit per separat, en pots deduir el de
la semiesfera —i per tant comparar-lo amb el con inscrit de l'enunciat, que
és exactament la meitat del con invertit (mateixa base, mateixa alçada,
mateix vèrtex a un extrem).

**Comprovació.** Amb radi R=3: volum de la semiesfera = (2/3)πR³ = 18π.
Volum del con inscrit (radi 3, alçada 3) = (1/3)πR²h = 9π. La raó con/semi-
esfera és 9π/18π = 1/2 exactament —ni més ni menys que la meitat, per a
qualsevol R.

**I després.** Que la resposta surti exactament 1/2, sense arrodoniments ni
aproximacions, no és casualitat: és el mateix tipus de relació neta entre
volums que vas trobar a q54/q55 amb el con i la piràmide, i reapareix cada
vegada que dos sòlids comparteixen la mateixa "funció d'àrea de secció" a
una constant de proporcionalitat de distància.

---

## 18. q08a — *What are all the symmetrical polyhedra?*
> Quins són tots els poliedres simètrics?

**Moviment: construeix per definir — abans de respondre "quins", cal fixar què vol dir "simètric" aquí.**

**Pista 0 — "simètric" és ambigu si no l'acotes.**
Un poliedre pot tenir moltes menes de simetria (reflexió en un pla, gir al
voltant d'un eix, simetria puntual...). Aquesta pregunta, tal com la
planteja el llibre en aquest punt, es refereix als poliedres amb el grau
més alt possible de simetria: aquells on **totes** les cares són el mateix
polígon regular i **tots** els vèrtexs tenen el mateix aspecte al seu
voltant. Val la pena que fixis aquesta definició abans de continuar,
perquè si la relaxes surten moltes més figures.

**Pista 1 — comença pel cas que ja coneixes bé.** → `fig-180.png`
El cub és l'exemple més familiar: sis cares quadrades, tres arestes a cada
vèrtex. Té, entre altres simetries, eixos que passen per parells de
vèrtexs oposats (la diagonal principal), eixos pel centre de cares oposades,
i eixos pel punt mitjà d'arestes oposades. Identificar-los tots en un sol
sòlid conegut et dona el vocabulari per parlar-ne en general.

**Pista 2 — la construcció.** → `051_cub_eix_simetria.png`
La diagonal sanguina uneix dos vèrtexs oposats del cub —un dels eixos de
simetria de rotació del cub (gir de 120° al voltant d'aquest eix porta el
cub sobre ell mateix).

**Pista 3 — tanca-ho.**
Fixa't que **no tot poliedre amb cares totes iguals és "simètric" en
aquest sentit fort**: cal a més que els vèrtexs siguin tots equivalents
entre ells. Aquesta doble condició (cares regulars i iguals, vèrtexs tots
equivalents) és exactament la que defineix els poliedres regulars, que la
pregunta següent (q08b) et demana llistar exhaustivament.

**Comprovació.** Compta, per al cub, quants eixos de simetria de cada tipus
té: 4 eixos vèrtex-a-vèrtex, 3 eixos cara-a-cara, 6 eixos aresta-a-aresta —
13 eixos en total (sense comptar el centre com a eix). Aquest recompte,
combinat amb els girs que cada eix permet, dona les 24 maneres de GIRAR el
cub deixant-lo exactament on era. Compte amb dir-ne "totes les simetries":
si a més hi comptes les de mirall (reflexions), en surten 48. Les 24 són
les que pots aconseguir girant el cub amb les mans; les altres 24 només les
veus reflectides en un mirall, i cap moviment del cub no te les dona.

**I després.** La pregunta natural que ve després de "quins són els
poliedres amb aquest grau de simetria" és "quants n'hi ha, en total, en tot
l'espai" —i la resposta, sorprenentment petita i tancada, és exactament el
que demana q08b.

---

## 19. q08b — *What are the five regular polyhedra?*
> Quins són els cinc poliedres regulars?

**Moviment: contraexemple i comptatge — per què n'hi ha exactament cinc, ni un més.**

**Pista 0 — la pregunta interessant no és "quins", és "per què només cinc".**
Saber-ne els noms (tetraedre, cub, octaedre, dodecaedre, icosaedre) és fàcil
de memoritzar. El que val la pena entendre és per què la llista s'acaba
exactament aquí i no continua —per què no hi ha, per exemple, un poliedre
regular fet de set triangles equilàters a cada vèrtex.

**Pista 1 — què ha de complir un vèrtex perquè "tanqui" en 3D.**
A cada vèrtex d'un poliedre convex s'hi han d'ajuntar com a mínim tres
cares, i la suma dels seus angles en aquell vèrtex ha de ser **estrictament
menor que 360°** (si sumessin exactament 360°, la figura quedaria plana; si
sumessin més, no es podria construir en absolut). Aquesta única condició,
aplicada a cada polígon regular possible, és la que talla la llista.

**Pista 2 — la construcció.** → `fig-052.png`
El tetraedre (quatre cares triangulars, tres a cada vèrtex) i l'octaedre
(vuit cares triangulars, quatre a cada vèrtex) són dos dels cinc casos:
fixa't que al tetraedre l'angle a cada vèrtex és 3×60°=180° (molt per sota
de 360°) i a l'octaedre 4×60°=240° (encara per sota). Els arcs marcats al
vèrtex de dalt de cada sòlid són els angles de cara que s'hi ajunten — a
l'octaedre només se'n poden distingir dos sense ambigüitat en aquest dibuix
(els altres dos impliquen el vèrtex del darrere, amagat exactament darrere
del de davant); els altres dos són iguals per simetria, com als altres
vèrtexs de quatre cares.

**Pista 3 — tanca-ho comptant els casos possibles.**
Amb triangles equilàters (60° cadascun) pots ajuntar-ne 3, 4 o 5 a un
vèrtex (180°, 240° o 300°, tots per sota de 360°) —però no 6 (exactament
360°, queda pla). Amb quadrats (90°) només en pots ajuntar 3 (270°) —amb 4
ja fan 360° exactes. Amb pentàgons regulars (108°) només 3 (324°). Amb
hexàgons (120°) ja 3 sols en fan 360°, cap combinació funciona. Amb
polígons de més costats, l'angle és encara més gran i la situació només
empitjora. Compta quantes combinacions vàlides has trobat en total.

Ara fixa't bé en QUÈ acabes de demostrar, perquè no és tota la pregunta.
Has demostrat que no n'hi pot haver cap altre: la llista no pot ser més
llarga. Però no has demostrat que cadascuna d'aquestes cinc combinacions
es pugui construir de debò —que els polígons acabin tancant una figura,
en comptes de quedar-se oberts per l'altra banda. Això, aquí, ho sabem
per una altra via molt més simple: els cinc sòlids existeixen, els pots
tenir a la mà i comptar-los les cares. Són dues meitats diferents d'una
mateixa resposta, i val la pena no confondre-les.

**Comprovació.** Hauries d'arribar a exactament cinc combinacions vàlides:
3 triangles/vèrtex (tetraedre), 4 triangles/vèrtex (octaedre), 5
triangles/vèrtex (icosaedre), 3 quadrats/vèrtex (cub), 3 pentàgons/vèrtex
(dodecaedre). Si en trobes més o menys de cinc, revisa el càlcul de l'angle
d'algun dels polígons. I comprova també que sabries dir, si algú t'ho
preguntés, quina de les dues meitats prova el teu comptatge: la de "no
n'hi ha més de cinc" o la de "n'hi ha aquests cinc".

**I després.** Aquest argument —comptar quantes configuracions locals a un
vèrtex són geomètricament possibles— és un dels primers exemples que
segurament veuràs d'una demostració que combina geometria amb un
argument purament combinatori de comptatge finit, un estil de raonament
que reapareix constantment més endavant en matemàtiques. I també és el
teu primer exemple d'una parella que retrobaràs molt: descartar tots els
casos impossibles no és el mateix que construir els possibles. Gairebé
sempre calen totes dues coses, i sovint la fàcil de les dues és la que
ningú s'adona que ha fet servir.

---

## 20. q71 — *If all the angles of a simple closed four-sided polygon are right angles, what condition must the side lengths satisfy?*
> Si tots els angles d'un quadrilàter simple i tancat són rectes, quina condició han de complir les longituds dels costats?

**Moviment: dues maneres de mirar la mateixa figura (recíproc de q11/q12).**

**Pista 0 — què saps del quadrilàter i què no.**
No saps, d'entrada, que els costats oposats siguin paral·lels ni iguals —
només saps que els quatre angles interiors fan 90° cadascun. Has d'esbrinar
quina condició sobre els **costats** es dedueix necessàriament d'aquesta
única dada sobre els angles.

**Pista 1 — parteix-lo amb una diagonal, com a q11.**
Traça una diagonal. Els dos triangles resultants no comparteixen encara cap
informació evident sobre costats —però sí que pots fer servir que la suma
d'angles de cada triangle és 180°, combinat amb els angles rectes donats
als dos vèrtexs originals de cada triangle, per trobar els altres dos
angles de cadascun.

**Pista 2 — la construcció.** → `053_quadrilater_angles_rectes.png`
Els quatre angles rectes hi són tots marcats des del principi —no com una
cosa a demostrar, sinó com la dada de partida des d'on has de treballar cap
enrere.

**Pista 3 — tanca-ho.**
Amb els quatre angles fixats a 90°, els dos costats que arriben a cada
vèrtex hi arriben perpendiculars. D'aquí es dedueix que costats oposats han
de ser paral·lels (dues rectes perpendiculars a una tercera són paral·leles
entre elles), i un cop tens el paral·lelisme, ets en la mateixa situació que
q11: és un paral·lelogram, i per tant costats oposats iguals. La condició
final sobre les longituds és, doncs, costats oposats iguals dos a dos —el
mateix que ja sabies d'un rectangle, però ara deduït només a partir dels
angles, sense donar per fet el paral·lelisme des del principi.

**Comprovació.** Si construeixes un quadrilàter amb els quatre angles a 90°
i tries lliurement dos costats consecutius (per exemple 5 i 8), els altres
dos costats no els pots triar lliurement: han de sortir també 5 i 8 (el
costat oposat a cadascun). Prova de forçar-ne un de diferent (per exemple
5, 8, 5, 9) i comprova que és impossible tancar la figura amb els quatre
angles rectes.

**I després.** Aquest recíproc de q11/q12 tanca el cercle d'aquest bloc de
quadrilàters: q11 partia d'un paral·lelogram i en deduïa els angles; q12
partia d'un paral·lelogram amb diagonals iguals i en deduïa que era un
rectangle; q71 parteix només dels angles rectes i en dedueix el
paral·lelisme i la igualtat de costats. Tres direccions diferents del
mateix feix d'implicacions entre angles, costats i diagonals d'un
quadrilàter.
