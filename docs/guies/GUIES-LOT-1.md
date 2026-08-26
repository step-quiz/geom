# Lot 1 — dotze guies de demostració

Dotze preguntes del llibre, triades perquè cadascuna ensenyi **un moviment diferent**
de la geometria sintètica, i perquè cada guia deixi l'alumne una mica més capaç
d'escriure sol la següent.

---

## Els principis de disseny (llegir abans que les guies)

**1. Els nivells de pista difereixen en espècie, no en quantitat.**
No són "una mica de resposta / més resposta / tota la resposta". Són quatre
coses diferents: reformular l'encàrrec, fer-lo concret, afegir la construcció,
i tancar. Un alumne encallat sovint no necessita *més* pista sinó una *altra
mena* de pista.

**2. Mai la solució.** En comptes d'això, cada guia acaba amb una
**comprovació**: una predicció numèrica que l'alumne pot verificar contra la
seva pròpia resposta. Manté el descobriment intacte i alhora trenca l'aïllament
de tenir un llibre sense respostes. A més, el fa servir calculant — que és on ja
és fort.

**3. La sanguina és seva; la tinta és del llibre.**
Tota construcció auxiliar es dibuixa en vermell terrós, mai en negre. La
distinció visual *és* la distinció conceptual que volem ensenyar: la figura del
llibre és un enunciat, i la línia que hi afegeixes és una decisió teva. Un alumne
que no ha vist mai geometria sintètica creu que la figura ja està acabada.

**4. La pista central no porta paraules.** Quan es pot dir amb una línia, es diu
amb una línia. A q14 aquella única vertical discontínua és la demostració
sencera.

**5. Cada guia acaba mirant endavant.** Un "i després" que ensenya on torna a
aparèixer el mateix moviment. Sense això són exercicis; amb això, matemàtiques.

---

## Com es llegeixen aquestes figures (cal ensenyar-ho el primer dia)

Aquesta notació és estàndard i l'alumne no l'ha vista mai. Val la pena dedicar-hi
cinc minuts abans de q14, perquè després apareix a totes les guies.

| | Vol dir |
|---|---|
| traç negre | la figura tal com és al llibre |
| traç sanguina (vermell terrós) | el que hi has afegit tu |
| discontinu | línia de construcció, no forma part de la figura |
| punt gruixut | punt notable (centre, punt mitjà, vèrtex que importa) |
| ratllat | aquesta peça es treu |

**Les marquetes als segments i els arcs als angles.** Aquí hi ha la confusió
típica, i cal dir-la en veu alta:

> Dos segments amb **una** ratlleta fan la mateixa longitud entre ells.
> Dos segments amb **dues** ratlletes també fan la mateixa longitud entre ells
> — però **no la mateixa que els d'una ratlleta**.

Igual amb els angles: un arc marca una família d'angles iguals, dos arcs en
marquen una altra. A q09 i q41 hi ha quatre angles marcats i **no són iguals tots
quatre**: són iguals dos a dos. El nombre de marques és una etiqueta que diu "a
quin grup pertanys", no una quantitat.

Una manera d'explicar-ho que sol funcionar: les marques són com els noms. Dos
angles amb el mateix nombre d'arcs són el mateix angle dit dues vegades. Si
tinguessis un tercer grup, faries servir tres arcs, i així.

**Ordre recomanat:**
q34 → q14 → q15 → q41 → q09 → q08c → q16 → q22 → q36 → q96 → q25 → q95.

q34 va primera perquè és la més amable: parteix del que ja sap fer (àlgebra) i
només li demana traduir-ho a un dibuix. q14 i q15 van juntes obligatòriament
(q15 audita la demostració de q14). q95 va l'última a posta: és l'única per
reducció a l'absurd. q25 és l'única de l'espai.

---

## 1. q14 — *Why does a triangle take up exactly half of its box?*
> Per què un triangle ocupa exactament la meitat de la seva caixa?

**Moviment: redueix el desconegut al conegut.**

**Pista 0 — què has de produir.**
No has de trobar cap número. Has d'acabar podent dir: *"per a qualsevol triangle
i la seva caixa passa això, i aquesta n'és la raó"*. El resultat final és una
raó, no una xifra.
*(Si penses "però si ja sé que l'àrea és base × altura / 2": aquesta fórmula és
exactament el que estàs demostrant. La pregunta és per què és certa.)*

**Pista 1 — resol primer el cas fàcil.** → `fig-182.png`
Hi ha alguna posició de la punta per a la qual la resposta sigui evident?
Prova de posar-la just damunt d'un dels dos vèrtexs de baix.

**Pista 2 — la construcció.** → `q14_pista2_altura.png`

**Pista 3 — tanca-ho.**
Ara tens dues peces. Cadascuna per separat és exactament el cas fàcil que ja has
resolt a la pista 1. Si cada meitat de la caixa està partida per la meitat, què
passa amb la caixa sencera?

**Comprovació.** Caixa de 10 × 6. Punta a distància 3 del cantó esquerre: quina
àrea et dona el teu raonament? I si la punta és a distància 7? *(Les dues
respostes han de coincidir.)*

**I després.** Aquesta demostració té un forat que encara no has vist. El
trobaràs a q15.

---

## 2. q15 — *What happens to the area as we slide the tip? What if it goes past the sides of the box?*
> Què li passa a l'àrea quan la punta llisca? I si surt de la caixa?

**Moviment: posa a prova la teva pròpia demostració.**
Aquesta és la guia més important del lot. No ensenya cap teorema nou: ensenya
que una demostració pot ser correcta per al dibuix que has fet i falsa en
general.

**Pista 0 — aposta primer.**
Abans de calcular res, escriu la teva predicció: l'àrea creix, decreix o es
queda igual? Val la pena equivocar-se per escrit.

**Pista 1 — mira-t'ho.** → `q15_pista1_tres_posicions.png`
Les marquetes hi són a posta: la base és la mateixa i l'altura és la mateixa,
en els tres casos.

**Pista 2 — l'auditoria.**
Torna a la teva demostració de q14 i aplica-la al dibuix de la dreta, pas per
pas. Hi ha **exactament un pas** que ja no pots dir. Troba'l abans de continuar.
*(El pas és: "la vertical parteix la caixa en dos trossos, un a cada banda del
triangle". Quan la punta surt, el peu de la vertical cau fora de la base i no hi
ha dos trossos per sumar.)*

**Pista 3 — la mateixa idea, amb el signe canviat.** → `q15_pista3_resta.png`
El ratllat vol dir "aquesta peça es treu". Un triangle rectangle gran menys un
de petit, en comptes de dos de petits sumats.

**Comprovació.** Base 8, altura 5. Punta a 3, a 8 i a 14 del cantó esquerre.
Les tres àrees han de sortir 20.

**I després.** Dues coses. Primera: aquest és el motiu real pel qual els
matemàtics desconfien dels dibuixos — i tot i així en fan. El dibuix et diu què
és probablement cert; la demostració ha de cobrir també els dibuixos que no has
fet. Segona: "moc una figura i l'àrea no canvia" és la llavor del principi de
Cavalieri, que retrobaràs a q54 i q55.

---

## 3. q41 — *When a point on a circle is connected to both ends of a diameter it always makes a right angle. Why?*
> Per què l'angle sempre és recte?

**Moviment: fes servir la informació que has deixat sense tocar.**

**Pista 0 — què vol dir "sempre".**
Sempre = allà on posis el punt sobre l'arc. Si la teva raó fa servir on és
exactament el punt, no és una raó vàlida.

**Pista 1 — fes inventari.**
Quines longituds d'aquest dibuix saps segur que són iguals, sense haver-les
mesurat? I una pregunta relacionada: per què el dibuix del llibre porta un punt
marcat al mig de la base, si l'enunciat no el menciona? En una figura ben feta
res no és decoratiu.

**Pista 2 — la construcció.** → `q41_pista2_radi.png`
*(Compte amb les marques: els dos angles d'un arc són iguals entre ells i els dos
de dos arcs són iguals entre ells; els quatre no són iguals. Les ratlletes dels
tres segments sí que diuen que els tres fan el mateix, perquè tots tres són
radis.)*

**Pista 3 — tanca-ho.**
Ara tens dos triangles isòsceles (fixa't en les marquetes: tres segments
iguals). En un triangle isòsceles els angles de la base són iguals; per això n'hi
ha dos marcats amb un arc i dos amb dos arcs. Suma els tres angles del triangle
gran, escrivint-los amb aquestes marques.
*(Et sortirà una cosa de la forma α + (α+β) + β = 180.)*

**Comprovació.** Posa el punt al capdamunt, just sobre el centre: hauries
d'obtenir 45 + 45. Ara posa'l gairebé enganxat a un extrem: l'angle continua
sent recte encara que el triangle sigui finíssim? Si la teva raó ho suporta,
és bona.

**I després.** q42 treu el diàmetre i posa un arc qualsevol. La teva demostració
encara s'hi assembla? Ara caldrà distingir casos — el segon cop que et passa
això, després de q15.

---

## 4. q09 — *Show that if a right triangle is chopped into two smaller ones, they must both be similar to the original.*
> Els dos trossos són semblants al triangle original.

**Moviment: separa les peces i posa-les totes igual orientades.**
Aquí la pista visual no és afegir una línia: és **redibuixar**. La semblança és
invisible mentre les tres peces estiguin encaixades i girades.

**Pista 0 — què vol dir "semblants".**
Mateixa forma, mida diferent. Per demostrar-ho no cal mesurar cap costat: n'hi
ha prou de comprovar que tenen els mateixos angles.

**Pista 1 — el fet petit que ho mou tot.**
En un triangle rectangle, si en coneixes un angle agut, ja coneixes l'altre.
Per què? *(Els tres sumen 180 i un ja val 90.)* Conseqüència: per veure que dos
triangles rectangles són semblants només cal trobar-los **un** angle agut en comú.

**Pista 2 — separa-les.** → `q09_pista2_tres_peces.png`
*(Als tres triangles hi ha un angle marcat amb un arc i un altre amb dos arcs.
Vol dir: els tres angles d'un arc valen igual entre ells, i els tres de dos arcs
valen igual entre ells — però un arc i dos arcs són coses diferents. Rellegeix
la taula del principi si cal.)*

**Pista 3 — tanca-ho.**
Cada peça té el seu angle recte. I cadascuna comparteix un angle agut amb el
triangle gran: la de sota comparteix el de la dreta, la de dalt el de dalt.
Amb l'angle recte més un agut comú, ja hi ets.

**Comprovació.** Triangle 3-4-5. L'altura sobre la hipotenusa fa 2,4 i talla la
hipotenusa en 1,8 i 3,2. Comprova que els tres triangles tenen els catets en
proporció 3:4 — és a dir 1,8/2,4 i 2,4/3,2 han de donar el mateix que 3/4.

**I després.** Aquesta és, de fet, la demostració del teorema de Pitàgores.
De la semblança surt a² = c·p i b² = c·q, on p i q són els dos trossos de la
hipotenusa. Suma-les: a² + b² = c(p+q) = c². Val la pena que ho escriguis tu.

---

## 5. q16 — *Show that connecting the midpoints of the sides of any four-sided shape forms a parallelogram.*
> Els punts mitjans d'un quadrilàter qualsevol formen un paral·lelogram.

**Moviment: inventa't una línia que l'enunciat no menciona.**
La línia auxiliar més difícil de veure del lot, perquè l'enunciat no parla de
diagonals per res. L'alumne se l'ha d'inventar.

**Pista 0 — redueix l'encàrrec.**
No cal comprovar els quatre costats. Per demostrar que una figura de quatre
costats és un paral·lelogram n'hi ha prou amb **dos costats oposats que siguin
alhora paral·lels i iguals de llargs**. Convèncer-te d'això abans de començar
t'estalviarà la meitat de la feina.

**Pista 1 — per què costa.**
El quadrilàter de fora et fa nosa perquè no en saps absolutament res: no és cap
forma coneguda, no té angles rectes ni costats iguals. Hi ha alguna línia que hi
podries afegir per convertir-lo en dues formes de les quals sí que en saps coses?

**Pista 2 — la construcció.** → `q16_pista2_diagonal.png`

**Pista 3 — tanca-ho.**
Mira només el triangle de dalt. Dos dels quatre punts marcats són els punts
mitjans de dos dels seus costats. Com és el segment que els uneix, comparat amb
el tercer costat? Ara fes exactament el mateix amb el triangle de sota — i
adona't que el "tercer costat" és **el mateix segment** en els dos casos.
*(Si no coneixes el resultat sobre punts mitjans, dedueix-lo: el triangle petit
té dos costats que fan just la meitat i el mateix angle entremig, o sigui que és
semblant al gran amb raó ½.)*

**Comprovació.** Amb coordenades: A(0,0), B(8,2), C(9,7), D(1,6). Els punts
mitjans surten (4,1), (8,5; 4,5), (5; 6,5) i (0,5; 3). Comprova que el vector del
primer al segon és idèntic al del quart al tercer.
*Nota honesta:* aquesta comprovació amb coordenades és **una demostració
vàlida**, i amb la teva àlgebra la pots fer sencera per a un quadrilàter
qualsevol. Val la pena que la facis. Però fixa't en la diferència: et convenç
que és cert, i no t'explica per què. La de la diagonal sí.

**I després.** Ara la segona meitat de la pregunta del llibre: quina àrea té?
I una cosa que sorprèn: la demostració de la diagonal no fa servir enlloc que
els quatre punts estiguin sobre un mateix pla. Funciona amb un quadrilàter
tort a l'espai.

---

## 6. q22 — *The big circles are clearly half as wide as the square. How about the small circle?*
> Els cercles grans fan la meitat d'ample que el quadrat. I el petit?

**Moviment: digues la mateixa longitud de dues maneres.**
Aquí és on el seu punt fort — l'àlgebra — es converteix en l'eina bona. Però
només després d'haver fet la part geomètrica.

**Pista 0 — on és la resposta.**
Aquí sí que has de trobar una fórmula. Però no la trobaràs mirant el cercle
petit: la trobaràs mirant els **centres**.

**Pista 1 — la palanca amagada.** → `fig-185.png`
Dibuixa a part dos cercles que es toquin, de radis diferents. Què saps de la
distància entre els seus centres? És el fet que et falta, i no és a l'enunciat.

**Pista 2 — la construcció.** → `q22_pista2_centres.png`

**Pista 3 — tanca-ho.**
Aquell segment marcat amb "?" el pots dir de dues maneres:
per Pitàgores, amb els dos catets R; i per la tangència, amb R i r.
Iguala les dues expressions i aïlla r.

**Comprovació.** Amb R = 1 t'ha de sortir un valor entre 0,4 i 0,42. Comprova
també que R + r és exactament √2, que és la distància del centre del quadrat al
centre d'un cercle gran.

**I després.** La mateixa palanca (distància entre centres = suma de radis)
resol q23 i q44, que són el mateix joc en configuracions més enrevessades.
I "digues la mateixa quantitat de dues maneres" és una de les tècniques de
demostració més productives que hi ha; la retrobaràs tota la vida.

---

## 7. q95 — *Why is the tangent to a circle perpendicular to the radius?*
> Per què la tangent és perpendicular al radi?

**Moviment: desempaqueta la definició, i dibuixa el que no pot ser.**
L'última a posta: és la primera demostració per reducció a l'absurd del lot, i
és el punt on "matemàtiques" deixa de voler dir "calcular".

**Pista 0 — la demostració és dins la definició.**
Escriu amb les teves paraules què vol dir exactament que una recta sigui tangent
a un cercle. No continuïs fins que ho tinguis escrit. Tota la demostració viu
en aquesta frase, i és per això que costa: la hipòtesi no sembla una hipòtesi.

**Pista 1 — dibuixa una cosa falsa a posta.** → `fig-203.png`
Suposa que t'equivoques i que el radi **no** és perpendicular. Dibuixa-ho ben
exagerat, ben tort. Dibuixar deliberadament el cas impossible és una tècnica,
no una pèrdua de temps.

**Pista 2 — la construcció.** → `q95_pista2_contradiccio.png`
Baixa la perpendicular des del centre fins a la recta i mira on cau.

**Pista 3 — tanca-ho.**
Quant fa OP′? *(Les marquetes t'ho diuen.)* Per tant, P′ és al cercle? És a la
recta? I què deia exactament la teva definició de tangent?

**Comprovació.** Aquí no hi ha números. La comprovació és una altra: repassa la
teva demostració i assenyala **on** fa servir que la recta toca el cercle només
una vegada. Si no ho fa servir enlloc, tens un forat, perquè sense aquesta
condició l'enunciat és fals.

**I després.** A q96 retrobaràs la mateixa idea (la perpendicular és el camí més
curt) fent una feina completament diferent: camins mínims i reflexió. I ja pots
mirar enrere: de les preguntes que ja portes, quantes has resolt afegint una
línia? Aquesta és, de moment, la teva eina principal.

---

## Nota d'integració

L'esquema encaixa amb el que ja hi ha (`pista` avui és `{en, ca}`, i està buit a
totes les preguntes). Proposta de forma, per pregunta:

```js
guia: {
  moviment: "linia-auxiliar",           // vocabulari tancat, filtrable com dimensio
  pistes: [
    { tipus: "encarrec",  text: {ca: "...", en: null} },
    { tipus: "concreta",  text: {ca: "...", en: null} },
    { tipus: "figura",    fitxer: "q14_pista2_altura.png", text: null },
    { tipus: "tanca",     text: {ca: "...", en: null} }
  ],
  comprovacio: {ca: "...", en: null},
  iDespres:    {ca: "...", en: null}
}
```

Dues coses que cal decidir abans de generalitzar:

1. **`hand-draw.js` necessita un paràmetre `color`.** Avui els tres primitius
   (`handSegment`, `handDot`, `handEllipse`) tenen `'black'` escrit a dins. Sense
   això no hi ha capa d'anotació possible. El pedaç és de tres línies i és al
   `hand-draw.js` que acompanya aquest lot.

2. **Les figures d'aquest lot són redibuixades, no anotades.** És a dir: he
   tornat a dibuixar la figura del llibre amb `hand-draw.js` i hi he afegit la
   sanguina, en lloc de superposar la sanguina sobre el PNG escanejat. Els
   avantatges compensen (control de coordenades, escala lliure, i de retruc q42
   s'estalvia el problema de la imatge invertida) però cal ser-ne conscient:
   són versions, no els originals. Si es vol conservar l'escaneig original, la
   via alternativa és un SVG de sanguina superposat amb coordenades calibrades a
   mà sobre cada PNG — més fidel, bastant més laboriós, i sense poder moure res.

---

## 8. q34 — *Construct a mosaic design that demonstrates (x + y)² = x² + 2xy + y².*
> Fes un dibuix del qual es llegeixi que (x + y)² = x² + 2xy + y².

**Moviment: una identitat algebraica és una figura.**
El camí invers de q22: allà la geometria portava a l'àlgebra, aquí l'àlgebra
porta a la geometria. Va primera del lot perquè comença exactament on ell ja és
competent.

**Pista 0 — què has de produir.**
La identitat ja la saps desenvolupar amb àlgebra en dues línies. No és això el
que et demanen. Et demanen un dibuix on la igualtat es vegi, sense fer cap
compte.

**Pista 1 — llegeix els termes com a àrees.**
(x + y)² és l'àrea d'alguna cosa. De què, exactament? I x²? I xy — quina figura
té àrea xy? Un cop hagis contestat aquestes tres preguntes gairebé ja has
acabat.

**Pista 2 — la construcció.** → `q34_pista2_mosaic.png`

**Pista 3 — tanca-ho.**
Tens quatre regions. Digues l'àrea de cadascuna. Ara suma-les. I digues també
l'àrea del quadrat sencer d'una sola tirada. Has dit dues vegades la mateixa
cosa — el mateix moviment que faràs servir a q22.

**Comprovació.** x = 5, y = 3. El quadrat sencer fa 64. Les quatre regions han de
fer 25, 15, 15 i 9. Sumen 64.

**I després.** Tres continuacions, de fàcil a difícil: (1) dibuixa a²−b² =
(a+b)(a−b); (2) intenta (x−y)², que costa més perquè hi ha peces que se solapen
i s'han de restar; (3) i si en lloc d'un quadrat agafessis un cub? Quina
identitat en surt?

---

## 9. q08c — *If two triangles have the same angles, are they necessarily similar? How about four-sided shapes?*
> Dos triangles amb els mateixos angles, són semblants? I dos quadrilàters?

**Moviment: per demostrar calen tots els casos; per refutar, en basta un.**
L'única guia del lot sobre lògica i no sobre geometria. És la que més trasllada
fora de l'assignatura.

**Pista 0 — són dues preguntes.**
I poden tenir respostes diferents. No donis per fet que la segona segueix la
primera; de fet el llibre les posa juntes precisament perquè no la segueix.

**Pista 1 — quina feina et toca fer.**
Abans de contestar, decideix quina mena de feina et caldrà en cada cas.

Si creus que la resposta és **sí**, has de convèncer per a *tots* els
triangles del món: un dibuix no serveix de res.

Si creus que és **no**, quantes figures et calen? Pensa-ho bé, perquè la
resposta és un número molt petit.

Aquesta asimetria no és un truc: és com funciona tota la matemàtica.

**Pista 2 — la fila de baix.** → `q08c_pista2_contraexemple.png`

**Pista 3 — tanca-ho.**
Els dos quadrilàters de baix tenen exactament els mateixos angles: quatre de
rectes cadascun. Són de la mateixa forma? Si la resposta és que no, ja has
acabat la segona pregunta — i has acabat amb un sol dibuix.

**Comprovació.** No numèrica. Escriu la frase *"dues figures amb els mateixos
angles són semblants"* i afegeix-hi la paraula que la fa certa. Després
repassa les preguntes que ja has explorat i reparteix-les en dues piles: les
que demanaven demostrar i les que demanaven refutar.

**I després.** q86 fa la mateixa jugada amb un contraexemple molt més subtil:
per què dos costats i un angle no determinen un triangle. I la pregunta de
debò que queda oberta: quina informació *extra* caldria afegir als angles perquè
sí que funcionés per a quadrilàters?

---

## 10. q36 — *Show that among all rectangles of a fixed perimeter, the square has the largest area.*
> De tots els rectangles de perímetre fix, el quadrat és el de més àrea.

**Moviment: endevina per simetria, després demostra.**

**Pista 0 — fixa't què t'han donat.**
L'enunciat ja et diu la resposta. Això canvia la feina: no has de descobrir res,
has de *demostrar*. Són dues activitats diferents i val la pena que notis quan
et demanen l'una o l'altra.

**Pista 1 — quantes llibertats tens?**
Perímetre fix vol dir que quan tries l'amplada, l'alçada ja està decidida.
Escriu-ho: si el perímetre és P i l'amplada és x, quant fa l'alçada? Ara tot el
problema depèn d'una sola lletra.

**Pista 2 — mira't la restricció.** → `q36_pista2_perimetre_fix.png`
Tots aquests rectangles tenen el mateix perímetre. Fixa't on van a parar els
seus vèrtexs oposats: sobre una recta. Aquesta recta *és* la condició "perímetre
fix", dibuixada.

**Pista 3 — tanca-ho.**
Escriu l'àrea en funció de x sola i mira què és aquesta expressió. Ara, si no
vols derivar res, hi ha un truc purament algebraic: amb s = P/2,

    x(s − x) = s²/4 − (x − s/2)²

El segon terme no pot ser mai negatiu, i val zero només quan x = s/2. Ja està.

**Comprovació.** P = 24, o sigui s = 12. Àrees: 1×11 = 11, 3×9 = 27, 5×7 = 35,
6×6 = 36. I comprova que la teva fórmula dona 36 − (x−6)².

**I després.** Gira la pregunta: de tots els rectangles de la mateixa **àrea**,
quin té el perímetre més petit? La resposta és la mateixa i l'àlgebra s'hi
assembla molt. I un cop tinguis això: i si en lloc de rectangles hi poguessis
posar *qualsevol* forma? Aquesta és una de les preguntes grans de la geometria,
i la resposta no és un quadrat.

---

## 11. q96 — *Why does the shortest path make equal angles with the line?*
> Per què el camí més curt fa angles iguals amb la recta?

**Moviment: reflecteix, i el camí trencat es torna recte.**

**Pista 0 — on és la dificultat.**
Ja saps que el camí més curt entre dos punts és el segment recte. Aquí el camí
no pot ser recte, perquè està obligat a tocar la recta pel mig. Tota la gràcia
consisteix a trobar la manera de convertir-lo en un de recte sense canviar-ne la
longitud.

**Pista 1 — quina operació desdoblega?**
Busques una transformació que conservi les longituds (si no, el camí "més curt"
canviaria de sentit) i que et permeti posar les dues meitats del camí en línia.
Només n'hi ha una de raonable.

**Pista 2 — la construcció.** → `q96_pista2_reflexio.png`

**Pista 3 — tanca-ho.**
Les marquetes diuen que AP i A′P fan el mateix. Per tant el camí A→P→B fa
exactament el mateix que A′→P→B, per a **qualsevol** P de la recta. I entre tots
els camins A′→P→B, quin és el més curt? Un cop ho sàpigues, mira els angles.

**Comprovació.** Amb A = (0,3), B = (8,1) i la recta y = 0: el teu P ha de sortir
(6,0), amb longitud total √80 ≈ 8,944. Prova ara P = (5,0) i comprova que surt
més llarg (≈ 8,993).

**I després.** q97 posa dues rectes paral·leles: el mateix truc, aplicat dues
vegades. I ara torna a la figura del llibre, que és una el·lipse amb els seus
dos focus: la suma de distàncies als focus és constant, i el punt de tangència
és el que la fa mínima sobre la tangent. Per això els angles hi són iguals — i
per això una bola que surt d'un focus d'una taula de billar el·líptica sempre
passa per l'altre.

---

## 12. q25 — *How does the diagonal of a box depend on its three sides?*
> Com depèn la diagonal d'una caixa dels seus tres costats?

**Moviment: repeteix el mateix argument en un altre pla.**
L'única de l'espai del lot, i va gairebé al final no perquè sigui difícil
(no ho és) sinó perquè convé tenir el reflex del pla ben instal·lat abans.

**Pista 0 — aprèn a llegir un dibuix de l'espai.**
Abans de res, una advertència que et servirà per a tot el que ve: **en un dibuix
en perspectiva els angles rectes no semblen rectes**. A la figura, la vora del
davant i la de la profunditat formen un angle que sembla obert, i tanmateix a la
caixa de veritat fan 90°. Fia't de l'objecte, no del dibuix. Aquesta és la
primera cosa que cal desaprendre en passar del pla a l'espai.

**Pista 1 — ja en saps la meitat.** → `fig-186.png`
La diagonal d'un *rectangle* ja la saps calcular. Hi ha algun rectangle amagat
dins d'aquesta caixa que et deixi a mig camí de la diagonal llarga?

**Pista 2 — la construcció.** → `q25_pista2_dues_diagonals.png`

**Pista 3 — tanca-ho.**
Tens dos triangles rectangles i **no són al mateix pla**: el primer està estirat
a terra, el segon està dret. La hipotenusa del primer és un catet del segon.
Aplica Pitàgores dues vegades i substitueix.

**Comprovació.** Caixa de 3 × 4 × 12: la diagonal de la base ha de fer 5 i la de
la caixa, 13. I un cub de costat 1 ha de donar √3 ≈ 1,732.

**I després.** Fixa't en la forma del resultat: a² + b² + c². Un quart costat en
donaria un quart quadrat, i així indefinidament — encara que ja no ho puguis
dibuixar. I el moviment "treballa dins d'un pla ben triat" és el que resol
gairebé totes les preguntes de l'espai del llibre, de q45 a q52.
