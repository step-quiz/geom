# Lot 10 — setze guies noves (pp. 177–193, còniques generals i corbes de moviment)

Setze preguntes noves, les últimes del bloc de còniques (hipèrbola,
paràbola) i les primeres del bloc de corbes generades per un moviment
(espiral, hèlix, hipocicloide/epicicloide) i acaben amb la baula que
tanca el cercle obert a q64 (lot 7): el mateix bastó lliscant, ara amb
una pregunta diferent. Un moviment nou: `exhauriment` (q121), ja
anticipat com a probable a l'HANDOFF §4. La resta reaplica moviments ja
establerts als lots 1–9.

---

## Els principis de disseny (els mateixos dels lots anteriors)

Els nivells de pista difereixen en espècie, no en quantitat. Mai la solució
— cada guia acaba amb una comprovació numèrica i un "i després". Tota
construcció auxiliar es dibuixa en sanguina, mai en negre.

## Notació (recordatori — introduïda al lot 1, q14)

| | Vol dir |
|---|---|
| traç negre | la figura tal com és al llibre |
| traç sanguina (vermell terrós) | el que hi has afegit tu |
| discontinu | línia de construcció, no forma part de la figura |
| punt gruixut | punt notable (centre, punt mitjà, vèrtex que importa) |
| un arc / dos arcs | dues classes d'angles diferents — **no** vol dir "el doble" |
| una ratlleta / dues ratlletes | dues classes de longituds diferents — igual criteri |

---

## 1. q112 — *Why is every hyperbola a dilation of a right hyperbola?*
> Per què tota hipèrbola és una dilatació d'una hipèrbola recta?

**Moviment: dilatació** (reaplica q32/q77). DEPÈN de q111 (ja fet: el
focus i la diagonal del diamant).

**Pista 0 — què has de produir.**
Una hipèrbola qualsevol té dues asímptotes que es tallen amb un angle
que depèn de la seva "forma". Una hipèrbola **recta** (o rectangular) és
la que té les asímptotes perpendiculars. Has de trobar la dilatació —
diferent en horitzontal i en vertical— que converteix la primera en la
segona.

**Pista 1 — separa les dues direccions.**
Una hipèrbola es descriu amb dos números, a (semieix) i b (el que marca
el pendent de les asímptotes). Si dilates l'eix horitzontal per un
factor i el vertical per un altre —factors diferents, no una dilatació
uniforme—, què li passa al pendent de les asímptotes?

**Pista 2 — la construcció.** → `fig-116.png`
Una hipèrbola amb asímptotes inclinades (traç negre), i al costat, en
sanguina, la mateixa hipèrbola després de dilatar cada eix pel factor
que cal — les asímptotes ara perpendiculars.

**Pista 3 — tanca-ho.**
Si l'equació és x²/a² − y²/b² = 1, divideix x per a i y per b: la
corba es converteix en X² − Y² = 1, l'equació d'una hipèrbola recta
(asímptotes Y = ±X, que formen 90°). Aquesta substitució és exactament
una dilatació de factor 1/a en horitzontal i 1/b en vertical.

**Comprovació.** a=4, b=3: l'equació x²/16 − y²/9 = 1 esdevé
X²−Y²=1 amb X=x/4, Y=y/3. Comprova un punt: x=4√2, y=3 satisfà
l'original (32/16−9/9=2−1=1 ✓); X=√2, Y=1 satisfà la recta
(2−1=1 ✓).

**I després.** La mateixa idea —separar una figura complicada en una de
"normalitzada" més una dilatació— reapareix de seguida a q114, ara amb
la hipèrbola unitat com a patró de referència, i uns quants passos
enllà a q117 amb la paràbola.

---

## 2. q114 — *Where are the focal points of a unit hyperbola? What if we dilate it by factors a and b?*
> On són els focus d'una hipèrbola unitat? I si la dilatem per factors a i b?

**Moviment: dilatació.** DEPÈN de q112.

**Pista 0 — què has de produir.**
Dues coses: (1) la posició dels focus de x²−y²=1 (la hipèrbola recta
més senzilla, amb a=b=1), i (2) la fórmula general dels focus després
de dilatar-la per (a, b) — que és la mateixa hipèrbola de q112.

**Pista 1 — Pitàgores, no resta.**
A l'el·lipse, c²=a²−b² (el focus és "més a prop" que el semieix gran).
A la hipèrbola els dos braços s'obren cap enfora: el focus ha d'anar
més lluny que el vèrtex. Prova c²=a²+b² i comprova que amb a=b=1 et
dona un valor familiar.

**Pista 2 — la construcció.** → `fig-117.png`
La hipèrbola unitat amb els vèrtexs a (±1,0) i els focus marcats a
(±√2,0) en sanguina — el triangle rectangle de catets 1,1 que ho
demostra.

**Pista 3 — tanca-ho.**
Amb a=b=1: c=√(1+1)=√2. En dilatar per (a,b), els vèrtexs passen a
(±a,0) i (per la mateixa relació, ara amb semieixos a,b) els focus a
(±√(a²+b²), 0).

**Comprovació.** a=4,b=3: c=√(16+9)=5. Focus a (±5,0), vèrtexs a
(±4,0) — el mateix triangle 3-4-5 que ja coneixes.

**I després.** Aquest triangle 3-4-5 no és casualitat: la mateixa
relació c²=a²+b² és exactament la que hauràs d'utilitzar a q115 per
demostrar que la constant focal val 2a en qualsevol hipèrbola, no
només la unitat.

---

## 3. q113 — *If an ellipse has long radius a and short radius b, where are its focal points?*
> Si una el·lipse té radi llarg a i radi curt b, on són els seus focus?

**Moviment: redueix el desconegut al conegut** (reaplica q94: el cercle
com a el·lipse degenerada). DEPÈN de q94, q98.

**Pista 0 — què has de produir.**
Una fórmula per c, la distància del centre a cada focus, en termes de a
i b — i una raó geomètrica, no només algebraica.

**Pista 1 — el triangle que ja vas dibuixar a q98.**
Al punt més alt de l'el·lipse (l'extrem de l'eix curt), les dues
distàncies als focus són iguals per simetria, i sumen 2a (la constant
focal). Quant val, doncs, cadascuna?

**Pista 2 — la construcció.** → `fig-118.png`
El punt més alt de l'el·lipse, en sanguina el triangle isòsceles cap
als dos focus, i el catet vertical de longitud b marcat.

**Pista 3 — tanca-ho.**
Aquest triangle és rectangle (el catet vertical és b, la meitat de
l'eix curt; la base és c, la distància del centre al focus; la
hipotenusa és a, per la suma focal repartida a parts iguals). Aplica
Pitàgores.

**Comprovació.** a=5, b=3: c²=25−9=16, c=4. Comprova amb el punt
(0,3): distància a cada focus (±4,0) és √(16+9)=5, i 5+5=10=2a ✓.

**I després.** El mateix triangle, amb els catets intercanviats
(a²=b²+c² en lloc de c²=a²−b²), és exactament el que reapareix a
q114 per a la hipèrbola — només que allà els papers de a i c
s'intercanvien perquè el focus cau fora dels vèrtexs, no entre ells.

---

## 4. q115 — *Show that the focal constant of an ellipse or hyperbola is equal to its diameter.*
> Demostra que la constant focal d'una el·lipse o hipèrbola és igual al seu diàmetre.

**Moviment: dues maneres.** DEPÈN de q113, q114.

**Pista 0 — què has de produir.**
"Constant focal" i "diàmetre" són, a priori, dues coses diferents: una
ve de sumar (o restar) distàncies a dos punts fixos; l'altra és
simplement la mida de la figura d'un vèrtex a l'altre. Has de
demostrar-ne la igualtat calculant-la de les dues maneres al mateix
punt.

**Pista 1 — calcula-ho al vèrtex mateix.**
El vèrtex és el punt de la corba més senzill de tots: ja n'hi ha un
sobre l'eix on cauen els dos focus. Quant valen les dues distàncies del
vèrtex als focus, en termes de a i c?

**Pista 2 — la construcció.** → `fig-119.png`
Una el·lipse i una hipèrbola una al costat de l'altra, cadascuna amb el
vèrtex dret marcat i les dues distàncies als focus escrites al damunt.

**Pista 3 — tanca-ho.**
El·lipse: el vèrtex dret és a distància a−c del focus proper i a+c del
llunyà; la suma és 2a. Hipèrbola: el vèrtex dret és a distància c−a del
focus proper i c+a del llunyà; la diferència és 2a. En els dos casos,
2a és exactament el diàmetre (la distància entre els dos vèrtexs).

**Comprovació.** El·lipse a=5,c=4: al vèrtex (5,0), distàncies 5−4=1 i
5+4=9, suma 10=2·5 ✓. Hipèrbola a=4,c=5: al vèrtex (4,0), distàncies
5−4=1 i 5+4=9, diferència 8=2·4 ✓.

**I després.** Aquesta és la mateixa constant que fas servir cada
vegada que dibuixes una el·lipse amb fil i xinxetes (q98): ara en tens
una demostració que no depèn de cap punt en particular, sinó del propi
vèrtex.

---

## 5. q116 — *Can you discover the tangent property of a hyperbola?*
> Pots descobrir la propietat de la tangent d'una hipèrbola?

**Moviment: redueix el desconegut al conegut** (l'el·lipse com a model
a imitar, no com a font d'una fórmula).

**Pista 0 — què has de produir.**
Una frase sobre l'angle que fa la tangent en un punt qualsevol de la
hipèrbola amb els dos radis focals d'aquell punt — l'anàloga, per a la
hipèrbola, de la propietat reflectora de l'el·lipse (un raig des d'un
focus rebota cap a l'altre).

**Pista 1 — no serà exactament la mateixa.**
A l'el·lipse, els dos radis focals van cap al MATEIX costat de la
tangent (per això "rebota cap a l'altre focus"). A la hipèrbola, els
dos focus són a banda i banda de la corba — un braç s'acosta a un
focus mentre l'altre se n'allunya. Dibuixa un punt i els seus dos radis
focals: la tangent, on cau respecte d'ells?

**Pista 2 — la construcció.** → `fig-120.png`
Un punt sobre un braç de la hipèrbola, en sanguina els dos segments cap
als focus i la tangent en aquell punt, amb els dos angles que formen
marcats amb un arc cadascun.

**Pista 3 — tanca-ho.**
Els dos angles marcats són iguals: la tangent és la bisectriu de
l'angle QUE FORMEN els dos radis focals entre ells (la bisectriu
interior), no la de l'angle exterior com a l'el·lipse.

**Comprovació.** Amb a=4, b=3, c=5, al punt P=(5, 9/4) de la hipèrbola
(comprova primer que hi és: 25/16 − (81/16)/9 = 1 ✓). La tangent en P té
pendent 9x/(16y) = 45/36 = 1,25. Mesura ara l'angle que fa la tangent
amb PF₁ (cap a (5,0), és a dir recta avall) i amb PF₂ (cap a (−5,0)):
tots dos surten ≈141,3°, iguals entre si —o ≈38,7° tots dos, si prens la
tangent en l'altre sentit. El que has de comprovar és que **coincideixen
entre ells**, no quin dels dos números et surt: el sentit que triïs per a
la tangent canvia els dos angles alhora, i els deixa iguals igualment.

**I després.** Aquesta bisectriu interior —en lloc de l'exterior— és
exactament el que fa que un mirall amb forma d'hipèrbola, orientat cap
a un focus, dispersi els raigs en lloc de concentrar-los: el principi
que fan servir els telescopis Cassegrain per combinar un mirall el·líptic
i un d'hiperbòlic.

---

## 6. q117 — *What about dilations of a parabola?*
> Què me'n dius de les dilatacions d'una paràbola?

**Moviment: dilatació.** DEPÈN de q112.

**Pista 0 — què has de produir.**
A q112 vas veure que TOTES les hipèrboles són dilatacions les unes de
les altres. Aquí et pregunten el mateix per a la paràbola: totes les
paràboles, són dilatacions d'una de sola?

**Pista 1 — compta els graus de llibertat.**
Una hipèrbola necessita DOS números (a i b) per descriure-la — per això
calia una dilatació amb dos factors diferents. Una paràbola y=x²/(4p)
només en necessita UN (p). Quantes dilatacions (potser només una
direcció, potser una d'uniforme) calen per passar d'una paràbola a
qualsevol altra?

**Pista 2 — la construcció.** → `fig-121.png`
Dues paràboles amb el mateix vèrtex sobre la mateixa directriu, una més
"tancada" que l'altra, amb els respectius focus marcats en sanguina a
alçades diferents.

**Pista 3 — tanca-ho.**
Amb una dilatació UNIFORME (el mateix factor en x i en y) centrada al
vèrtex, y=x²/(4p) es converteix en y=x²/(4·k·p): totes les paràboles
són dilatacions uniformes les unes de les altres, a diferència de les
hipèrboles, que en necessiten dues de diferents.

**Comprovació.** p=1 (y=x²/4) dilatada per factor 2 uniforme des del
vèrtex. Fes-ho seguint un punt: (x, x²/4) va a parar a (2x, x²/2). Si
n'anomenes X=2x la coordenada nova, aleshores x=X/2 i l'alçada nova és
(X/2)²/2 = X²/8. La paràbola dilatada és, doncs, y = x²/8, és a dir
p=2 — exactament el k·p de la Pista 3, amb k=2. El focus, que és a
alçada p, es mou de (0,1) a (0,2): s'allunya el mateix factor 2 que tota
la resta, com ha de fer qualsevol punt en una dilatació uniforme. Si
t'ha sortit p més PETIT en dilatar, has aplicat la dilatació al revés.

**I després.** Que calgui només UN factor de dilatació —en lloc de dos,
com a la hipèrbola— és el primer indici que totes les paràboles són
"la mateixa figura, vista de més a prop o de més lluny": una idea que
tornaràs a fer servir a q119, on la paràbola apareix com a envolupant
d'un feix de rectes.

---

## 7. q118 — *Can you prove this tangent property directly, without any "infinity" mumbo-jumbo?*
> Pots demostrar aquesta propietat de la tangent directament, sense cap ximpleria d'"infinit"?

**Moviment: construeix la solució a partir de la seva pròpia definició**
(reaplica l'esperit de q95/q98: tornar a la definició per punts).
DEPÈN de la propietat reflectora de la paràbola (coneixement general,
com a q98).

**Pista 0 — què has de produir.**
Una demostració que un raig vertical (paral·lel a l'eix) que arriba a
la paràbola rebota exactament cap al focus — sense fer servir cap
argument de "límit" ni de rectes que es toquen "a l'infinit". Només
construcció i triangles.

**Pista 1 — la definició per punts, com a q98.** → `fig-205.png`
Un punt P de la paràbola és exactament tan lluny del focus F com de la
directriu — és a dir, de D, el peu de la perpendicular des de P a la
directriu. Si PF=PD, quin triangle isòsceles se't dibuixa tot sol?

**Pista 2 — la construcció.** → `fig-122.png`
Un punt P sobre la paràbola, el focus F, el peu D a la directriu, i en
sanguina el triangle isòsceles PFD amb la seva bisectriu des de P.

**Pista 3 — tanca-ho.**
Demostra que la bisectriu de l'angle en P del triangle isòsceles PFD
—que també n'és la mediatriu del costat FD, per ser isòsceles— és
precisament la tangent a la paràbola en P.

Un cop ho tinguis, el rebot surt sol. Aquesta recta bisecta l'angle
entre PF i PD. I PD és vertical, perquè D és el peu de la perpendicular
de P a la directriu, que és horitzontal —o sigui que PD és exactament la
direcció del raig que arriba. Un raig que arriba per PD i rebota en una
recta que bisecta l'angle PD–PF se'n va, doncs, per PF: cap al focus.
(Compte: FD, en canvi, NO és vertical, tret del cas del vèrtex. És PD la
que ho és sempre, i és aquesta la que fa la feina.)

**Comprovació.** Paràbola y=x²/8 (p=2, focus F=(0,2), directriu y=−2).
Pren x=3: el punt de la corba és P=(3, 9/8), i el seu peu a la directriu
és D=(3, −2). Comprova primer que P és realment equidistant: PD = 9/8 +
2 = 25/8, i PF = √(3² + (9/8 − 2)²) = √(9 + 49/64) = 25/8 ✓ —el triangle
PFD és isòsceles, com havia de ser. El punt mitjà de F=(0,2) i D=(3,−2)
és (1,5, 0). La recta de P a aquest punt mitjà té pendent (9/8 − 0) /
(3 − 1,5) = 3/4, que és exactament el pendent de la tangent en aquell
punt. Coincideixen.

**I després.** Aquesta construcció —la mediatriu d'un segment entre el
focus i el peu a la directriu— és el mètode clàssic (sense càlcul) amb
què es demostrava aquesta propietat molt abans que existís la
geometria analítica, i és exactament la propietat que fa servir
qualsevol antena parabòlica: si totes les tangents reflecteixen cap al
mateix punt F, tots els raigs paral·lels a l'eix s'hi concentren.

---

## 8. q119 — *If you connect lines in this evenly spaced pattern, a parabola appears. Why?*
> Si connectes rectes en aquest patró uniformement espaiat, apareix una paràbola. Per què?

**Moviment: cas límit** (reaplica l'esperit de q64: una envolupant de
rectes és una paràbola). DEPÈN de q117.

**Pista 0 — què has de produir.**
Una explicació de per què la "corba" que sembla aparèixer entre les
rectes —que en realitat no n'hi ha cap de dibuixada— és exactament una
paràbola, i no una altra corba qualsevol.

**Pista 1 — cap recta és corba; és l'ull qui hi veu una corba.** → `fig-206.png`
Cada recta és tangent a una certa corba (la seva envolupant): la corba
que "toca" cada recta del feix sense travessar-ne cap. Amb n+1 punts a
cada eix, numerats 0..n, la recta i uneix el punt i d'un eix amb el
punt n−i de l'altre. Quina relació hi ha entre els dos números que
etiqueten els extrems d'una mateixa recta?

**Pista 2 — la construcció.** → `fig-123.png`
Dos eixos perpendiculars amb punts marcats, unes quantes rectes del
feix en traç negre, i en sanguina la paràbola envolupant tangent a
totes elles.

**Pista 3 — tanca-ho.**
La recta que uneix (i,0) amb (0,n−i) té equació x/i + y/(n−i) = 1.
Cada recta d'aquestes és tangent a la corba √x + √y = √n (una
paràbola, girada 45° respecte de la posició habitual). Comprova-ho amb
dos valors consecutius de i i troba on es tallen les rectes veïnes.

**Comprovació.** n=10: les rectes i=4 i i=5 es tallen a (2,3),
i √2+√3≈3,146, molt a prop de √10≈3,162 — la petita diferència és
l'error de fer servir rectes VEÏNES en lloc del límit real (rectes
infinitament properes).

**I després.** Aquesta manera de generar una corba com a
envolupant d'una família de rectes —sense dibuixar mai la corba
directament— és la mateixa idea que ja vas fer servir a q64 amb el
bastó lliscant: allà l'envolupant sortia d'un segment de longitud
constant lliscant entre dos eixos; aquí, d'una família de segments amb
un patró numèric.

---

## 9. q120 — *Why is the area of a parabolic sector equal to half the area of the parabolic rectangle?*
> Per què l'àrea d'un sector parabòlic és igual a la meitat de l'àrea del rectangle parabòlic?

**Moviment: redueix el desconegut al conegut** (semblança de triangles,
com q31/q32). DEPÈN de q117.

**Pista 0 — què has de produir.**
Una relació d'àrees 1:2 entre dues figures: un triangle tallat per la
tangent en un punt de la paràbola (el "sector"), i un altre triangle
—la meitat del rectangle que va del vèrtex fins aquell mateix punt (el
"rectangle" o, més exactament, la seva diagonal).

**Pista 1 — on talla la tangent l'eix?**
Sigui P un punt de la paràbola i N el seu peu (la projecció de P sobre
l'eix, és a dir, sobre la base del rectangle vèrtex-a-P). La tangent en
P talla aquest mateix eix en un punt T. Compara la distància de T al
vèrtex amb la distància de N al vèrtex.

**Pista 2 — la construcció.** → `fig-124.png`
El vèrtex V, el punt P sobre la paràbola, el peu N a la base, el punt T
on la tangent talla la base —marcat en sanguina, exactament al punt
mitjà de VN— i el triangle TNP ombrejat.

**Pista 3 — tanca-ho.**
Amb y=x² i P=(p,p²), la tangent en P té pendent 2p i talla y=0 a
x=p/2 — el punt mitjà exacte entre el vèrtex (x=0) i N (x=p).

D'on surt aquest pendent 2p, si encara no has fet derivades? Es pot
treure sense càlcul, i val la pena fer-ho un cop. Una recta que passi per
P amb pendent m és y = p² + m(x−p). Iguala-la a y = x² i et queda
x² − mx + (mp − p²) = 0. La tangent és, precisament, la recta que toca la
paràbola en UN sol punt en lloc de tallar-la en dos: la que fa que aquesta
equació de segon grau tingui una arrel doble, és a dir discriminant zero.
m² − 4(mp − p²) = 0 es reordena com (m − 2p)² = 0, i per tant m = 2p.
Aquesta és la definició antiga de tangent —la recta que toca sense
travessar— i es resol amb l'àlgebra que ja saps. El
triangle VNP (la diagonal del rectangle vèrtex-a-P) té sempre àrea
igual a la meitat del rectangle; i com que T és el punt mitjà de VN,
el triangle TNP —el "sector" tallat per la tangent— té la mateixa
altura que VNP però la meitat de la base, així que la seva àrea és la
meitat de la de VNP.

**Comprovació.** p=3: rectangle V-N-P = 3·9=27, meitat (triangle VNP)
= 13,5. Triangle TNP amb T=(1,5, 0): base 1,5, alçada 9, àrea
0,5·1,5·9=6,75 = exactament la meitat de 13,5 ✓.

**I després.** Que la tangent talli l'eix exactament al punt mitjà —ni
abans ni després— és el mateix fet que farà possible, a q121, calcular
sense cap límit ni integral quina fracció EXACTA del rectangle omple
la paràbola sencera.

---

## 10. q121 — *Show that a parabolic section takes up exactly two-thirds of its box.*
> Demostra que una secció parabòlica ocupa exactament dos terços de la seva caixa.

**Moviment: exhauriment** (nou moviment d'aquest lot: aproximar una
àrea corba per figures rectilínies cada vegada més fines, i sumar-les).
DEPÈN de q120.

**Pista 0 — què has de produir.**
Un argument que demostri, sense retòrica d'"infinitèsims", que l'àrea
tancada entre l'arc de paràbola i els dos costats superiors de la seva
caixa circumscrita és exactament 2/3 de l'àrea total de la caixa —ni
una mica més, ni una mica menys.

**Pista 1 — parteix la caixa en franges, no en un sol tros.** → `fig-207.png`
Divideix la base de la caixa (d'un costat a l'altre del vèrtex) en n
franges verticals iguals. A cada franja, la paràbola hi talla un
rectangle petit. Suma les àrees d'aquests n rectangles petits (la que
queda per SOTA de la corba, dins la meitat de la caixa) — és una suma
coneguda de quadrats consecutius.

**Pista 2 — la construcció.** → `fig-125.png`
La paràbola inscrita en el seu rectangle (com al llibre), i en
sanguina, a un costat, la mateixa caixa partida en franges verticals
amb els petits rectangles ombrejats sota la corba.

**Pista 3 — tanca-ho.**
Amb n franges d'amplada 1/n cadascuna sobre l'interval [0,1], la suma
de les àrees dels rectangles per sota de y=x² és (1/n)·Σ(k/n)² per
a k=1..n, que val (1/n³)·[n(n+1)(2n+1)/6].

Ara mira per què això compleix la promesa de la Pista 0. No estem dient
"quan n és infinit passa una cosa màgica": tenim una fórmula EXACTA per
a cada n, i la podem desenvolupar. Surt 1/3 + 1/(2n) + 1/(6n²). O sigui
que la suma no val mai 1/3 exacte —sempre s'hi passa una mica— però el
que s'hi passa és 1/(2n) + 1/(6n²), i això es pot fer més petit que
qualsevol número que et diguin, només triant n prou gran. Si algú et diu
que l'àrea val 0,34, li pots ensenyar un n concret que ho desmenteix; si
et diu 0,33, també. L'únic número que no es pot desmentir així és 1/3.
Aquesta és la diferència entre un pas al límit i un infinitèsim: aquí no
et demanem que et creguis res, et donem la fórmula i pots exigir el
número.

L'àrea SOTA la corba és, doncs, 1/3 de la caixa, i per tant l'àrea ENTRE
la corba i la part de dalt —la "secció"— n'és els 2/3 restants.

**Comprovació.** n=100: suma ≈ 0,33835 (ja molt a prop d'1/3=0,3333).
n=10000: suma ≈ 0,33338, encara més a prop. L'àrea sota la corba tendeix
exactament a 1/3, i 1−1/3=2/3 confirma la secció.

**I després.** Aquest mètode —partir en franges cada cop més fines i
sumar una fórmula coneguda— és exactament l'"exhauriment" que Arquimedes
va fer servir, sense cap concepte de límit formal, per calcular aquesta
mateixa àrea. La suma de quadrats que has fet servir aquí és la mateixa
que trobaràs si mai has de sumar 1²+2²+...+n²: val la pena recordar-ne
la fórmula.

---

## 11. q122 — *How can we view a spiral as the result of a motion?*
> Com podem veure una espiral com el resultat d'un moviment?

**Moviment: construeix la solució a partir de la seva pròpia definició**
(reaplica l'esperit de q95).

**Pista 0 — què has de produir.**
Una descripció d'un punt que es mou de manera que la seva trajectòria
sigui exactament l'espiral: dues coses que han de canviar alhora, i
com.

**Pista 1 — separa les dues parts del moviment.**
Un cercle és el resultat d'un punt que gira a distància CONSTANT d'un
centre. Una espiral és quasi el mateix moviment, amb un únic canvi: què
li hauries de deixar créixer, a mesura que el punt gira, perquè cada
volta quedi més enfora que l'anterior?

**Pista 2 — la construcció.** → `fig-126.png`
Una espiral, amb un punt marcat sobre la corba i una fletxa en
sanguina que en mostra la direcció del moviment en aquell instant.

**Pista 3 — tanca-ho.**
El punt gira a velocitat angular constant (com les busques d'un
rellotge) mentre, alhora, la seva distància al centre creix a velocitat
CONSTANT (no accelerada) amb el temps. Aquestes dues coses juntes —gir
uniforme i allunyament uniforme— defineixen l'espiral d'Arquimedes.

**Comprovació.** Si la distància creix a raó d'una unitat per volta
completa, després de 3 voltes el punt és a distància 3 del centre —el
mateix patró que fa que les espires successives quedin sempre separades
per la mateixa distància, com als solcs d'un disc de vinil.

**I després.** Descriure una corba com el resultat d'un moviment —en
lloc de com una equació o una construcció estàtica— és exactament la
mateixa idea que faràs servir a q123 amb l'hèlix (gir uniforme, ara
combinat amb pujada uniforme en lloc d'allunyament) i a q124 amb les
cicloides (un cercle que rodola sobre un altre).

---

## 12. q123 — *How can we measure the length of a helix?*
> Com podem mesurar la longitud d'una hèlix?

**Moviment: un altre pla** (reaplica l'esperit de q46/q68: canviar de
superfície per convertir un problema corba en un de pla). DEPÈN de
q122.

**Pista 0 — què has de produir.**
Una fórmula per a la longitud d'una hèlix que fa n voltes senceres al
voltant d'un cilindre de radi R, mentre puja una alçada total H —sense
haver de sumar infinits trossets de corba.

**Pista 1 — "desenrotlla" el cilindre.** → `fig-208.png`
Imagina el cilindre com un full de paper enrotllat. Si el desenrotlles
(el retalles per una línia vertical i l'estires pla), l'hèlix dibuixada
a sobre es converteix en... quina mena de línia, sobre el rectangle pla
resultant?

**Pista 2 — la construcció.** → `fig-127.png`
Un cilindre amb l'hèlix dibuixada a sobre (com al llibre, 4 voltes), i
al costat, en sanguina, el mateix cilindre desenrotllat en un rectangle
pla amb la línia recta corresponent.

**Pista 3 — tanca-ho.**
Un cop desenrotllat, el rectangle té amplada igual al perímetre del
cilindre multiplicat per n (la distància horitzontal total recorreguda
en n voltes) i alçada H. L'hèlix es converteix en la diagonal d'aquest
rectangle —una línia recta—, i la seva longitud és, per Pitàgores,
√((2πRn)² + H²).

**Comprovació.** R=1, n=4 voltes, H=3: longitud = √((2π·4)²+9) =
√(631,65+9) ≈ 25,31. Comprovat també sumant numèricament milers de
trossets petits de la corba real en 3D: coincideix fins a la cinquena
xifra decimal.

**I després.** "Desenrotllar" una superfície corba per convertir un
problema en un de pla és la mateixa idea que ja vas fer servir per
mesurar l'àrea d'un con o d'un cilindre: aquí, en lloc d'una àrea, en
surt la longitud d'una corba.

---

## 13. q126 — *Can you think of a way to describe a helix on a torus?*
> Se t'acut alguna manera de descriure una hèlix sobre un tor?

**Moviment: construeix la solució a partir de la seva pròpia definició.**
DEPÈN de q122, q123.

**Pista 0 — què has de produir.**
Una manera de descriure un moviment sobre la superfície d'un tor (un
donut) que sigui l'anàloga natural de l'hèlix sobre un cilindre —no fa
falta cap equació, només una descripció clara del moviment.

**Pista 1 — un tor té DOS cercles, no un.** → `fig-209.png`
Un punt sobre un tor es pot descriure per dos angles: quina posició té
al voltant del forat central (com les hores d'un rellotge vist des de
dalt), i quina posició té al voltant del "tub" prim (com les hores d'un
rellotge vist de costat, girant al voltant del propi tub). Una hèlix
sobre un cilindre avançava a velocitat constant en gir I en alçada
alhora: quin seria l'anàleg amb aquests dos angles?

**Pista 2 — la construcció.** → `fig-128.png`
Un tor amb una corba dibuixada en sanguina que avança uniformement
al voltant del tub mentre avança, també uniformement, al voltant del
forat central —una corba que s'enrotlla moltes vegades abans de
tancar-se (o que no es tanca mai, si la proporció entre les dues
velocitats és irracional).

**Pista 3 — tanca-ho.**
Fes que els dos angles creixin cadascun a velocitat constant però
DIFERENT: mentre un avança una volta sencera, l'altre n'avança p/q
(una fracció). Si p/q és racional, la corba es tanca després de q
voltes del primer angle; si és irracional, la corba no es tanca mai.
Compte amb com ho dius, aquest últim cas: la corba no "omple" el tor
—una corba no pot arribar a ser una superfície, per molt que doni voltes—
sinó que hi passa tan a prop com vulguis de qualsevol punt. Digues-li un
punt del tor i una distància, per petita que sigui, i la corba hi acabarà
passant més a prop que aquella distància. No és el mateix, i la diferència
et tornarà a sortir sovint.

**Comprovació.** Amb p/q=2/3: la corba fa 2 voltes completes al
voltant del forat central pel mateix temps que en fa 3 al voltant del
tub, i es tanca exactament on va començar — es pot comprovar contant
quantes vegades creua un mateix meridià (ha de ser 3) i un mateix
paral·lel (ha de ser 2).

**I després.** Aquesta corba es diu "nus tòric" quan p i q no tenen cap
factor comú: per a segons valors de p,q dona lloc a nusos autèntics
(que no es poden desfer sense tallar-los), l'exemple més senzill dels
quals —amb p/q=2/3— és el trèvol, el nus més simple que existeix.

---

## 14. q124 — *How does the number of cusps of a hypocycloid depend on the radii of the two circles? What about for an epicycloid?*
> Com depèn el nombre de pics d'una hipocicloide dels radis dels dos cercles? I d'una epicicloide?

**Moviment: recompte o inducció** (reaplica l'esperit de q03).
DEPÈN de q122.

**Pista 0 — què has de produir.**
Una fórmula (o una regla senzilla) que digui, a partir dels dos radis
—el del cercle gran R i el del petit r—, quants pics (cúspides) té la
corba que dibuixa un punt del cercle petit quan aquest rodola per
dins (hipocicloide) o per fora (epicicloide) del cercle gran.

**Pista 1 — un pic és un moment en què el punt "s'atura".**
Un pic passa exactament quan el punt marcat toca el cercle gran (per
dins o per fora): en aquell instant, el punt de contacte no es mou (és
el centre instantani de gir), així que el punt marcat, que hi és a
sobre, tampoc s'hi mou en aquell instant. Quantes vegades toca el punt
marcat el cercle gran en una volta completa del cercle petit al
voltant seu?

**Pista 2 — la construcció.** → `fig-129.png`
Els dos casos del llibre: el cercle petit rodolant per dins (tres pics,
deltoide) i per fora (dos cercles enganxats, cardioide) del cercle
gran, cadascun amb el punt de contacte marcat en sanguina.

**Pista 3 — tanca-ho.**
El nombre de pics és R/r (quan aquesta raó és un nombre enter): per
cada volta completa del cercle gran, el cercle petit hi ha "rodat"
R/r vegades, i cada rodolada completa produeix exactament un pic. Val
el mateix argument tant si el cercle petit rodola per dins com per
fora.

**Comprovació.** R/r=3 (dins): deltoide, 3 pics — el cas de la
figura del llibre. R/r=4 (dins): astroide, 4 pics —la mateixa corba
que ja vas trobar a q64 amb el bastó lliscant. R/r=1 (fora):
cardioide, 1 pic.

**I després.** Que l'astroide (R/r=4, hipocicloide) sigui exactament
la mateixa corba que l'envolupant del bastó lliscant de q64 no és
casualitat: en tots dos casos, cada punt de la corba és un instant en
què "alguna cosa" (el punt de contacte, o el bastó sencer) es queda
momentàniament immòbil.

---

## 15. q125 — *What happens if the tracing point is at the center?*
> Què passa si el punt que traça la corba és al centre?

**Moviment: cas límit** (reaplica l'esperit de q74). DEPÈN de q124.

**Pista 0 — què has de produir.**
Una descripció de la corba degenerada (molt més senzilla que
l'espirògraf general) que resulta quan el punt que traces no és sobre
la vora del cercle petit, sinó exactament al seu centre.

**Pista 1 — separa el moviment del centre del moviment del punt.**
A l'espirògraf normal, el punt marcat gira al voltant del CENTRE del
cercle petit, i aquest centre alhora es mou al voltant del centre del
cercle gran. Si el punt marcat ÉS el centre del cercle petit, quin
d'aquests dos moviments desapareix?

**Pista 2 — la construcció.** → `fig-130.png`
El patró habitual de l'espirògraf (traç negre, moltes espires), i al
costat, en sanguina, el cas degenerat: només el cercle que traça el
centre del cercle petit.

**Pista 3 — tanca-ho.**
Sense el gir addicional del punt sobre el cercle petit, el que queda
és només el moviment del CENTRE del cercle petit, que —com que rodola
per dins del cercle gran mantenint sempre la mateixa distància R−r del
centre comú— descriu simplement un cercle de radi R−r.

**Comprovació.** R=5, r=2: el centre del cercle petit es manté sempre
a distància 5−2=3 del centre, per a qualsevol angle de gir — es pot
comprovar calculant-ho a diversos instants i veient que el radi no
canvia mai.

**I després.** Aquest cas degenerat —tota la complexitat de l'espirògraf
reduïda a un simple cercle— és el mateix tipus de simplificació que ja
vas veure a q74 amb el triangle "aixafat": posar un paràmetre a un
valor extrem (aquí, distància zero al centre) converteix una figura
complicada en la més senzilla possible.

---

## 16. q127 — *A ladder slips down the wall until it hits the floor. What curve does its midpoint describe?*
> Una escala rellisca per la paret fins que toca el terra. Quina corba descriu el seu punt mitjà?

**Moviment: redueix el desconegut al conegut** (reaplica la mediana a
la hipotenusa d'un triangle rectangle). DEPÈN de q64 (l'envolupant del
mateix bastó, no la seva mediana).

**Pista 0 — què has de produir.**
La identificació exacta de la corba (no només una descripció aproximada
com "es corba cap avall"): quina figura geomètrica coneguda traça el
punt mitjà del bastó mentre aquest llisca?

**Pista 1 — cada instant és un triangle rectangle diferent.**
En qualsevol instant, el bastó, la paret i el terra formen un triangle
rectangle: el bastó n'és la hipotenusa, l'angle recte és a la
cantonada. Ja saps (o pots redescobrir) una propietat sobre la
distància des del vèrtex de l'angle recte fins al punt mitjà de la
hipotenusa, en QUALSEVOL triangle rectangle.

**Pista 2 — la construcció.** → `fig-131.png`
Dos instants diferents del mateix bastó lliscant (el mateix bastó de
q64, ara sense l'envolupant), amb el punt mitjà marcat en sanguina a
cada instant i, en discontinu, el quart de cercle que uneixen.

**Pista 3 — tanca-ho.**
En un triangle rectangle, la distància del vèrtex de l'angle recte al
punt mitjà de la hipotenusa és sempre la MEITAT de la hipotenusa —
independentment de com es "obri" o "tanqui" l'angle. Com que la
hipotenusa (el bastó) té sempre la mateixa longitud L, aquesta
distància és sempre L/2: el punt mitjà es manté sempre a la mateixa
distància L/2 de la cantonada, i per tant descriu un quart de cercle
de radi L/2 centrat a la cantonada.

**Comprovació.** L=7: amb el peu del bastó a x=7cos(0,37)≈6,52 i
l'altre extrem a y=7sin(0,37)≈2,53, el punt mitjà és (3,26, 1,27), a
distància √(3,26²+1,27²)≈3,50=7/2 exactament ✓ — i ho és per a
qualsevol altre angle que provis.

**I després.** Aquest mateix bastó ja et va donar, a q64, l'envolupant
de totes les seves posicions (un astroide). Ara en tens un segon
resultat, ben diferent: no la corba que "toquen" totes les posicions
del bastó, sinó la corba que traça un únic punt (el mig) mentre el
bastó es mou. Val la pena comparar-les una al costat de l'altra —una
és una envolupant, l'altra una trajectòria— per no confondre mai més
aquests dos conceptes.
