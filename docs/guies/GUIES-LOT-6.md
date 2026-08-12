# Lot 6 — setze guies noves (pp. 25–58, fonaments del pla)

Setze preguntes noves. Cap moviment nou llevat d'un: `recompte-o-induccio`
(q03), ja anticipat com a probable a l'HANDOFF §2.2. La resta reaplica
moviments ja establerts als lots 1–4.

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

## 1. q04 — *What are the angles of a regular n-sided polygon?*
> Quins són els angles d'un polígon regular de n costats?

**Moviment: redueix el desconegut al conegut** (reaplica q70: suma d'angles
interiors). DEPÈN de q70.

**Pista 0 — què has de produir.**
q70 et va donar la suma de TOTS els angles interiors. Aquí et demanen un
angle SOL — el d'un vèrtex qualsevol, ja que el polígon és regular i tots
són iguals.

**Pista 1 — un pas més enllà de q70.**
Si (n−2)×180° és la suma de tots els n angles, i tots els angles valen el
mateix perquè el polígon és regular, quina operació et falta fer?

**Pista 2 — la construcció.** → `fig-054.png`
El vèrtex marcat en sanguina és on conflueixen tots els triangles del
ventall de q70 — el seu angle complet és la suma que has de dividir.

**Pista 3 — tanca-ho.**
Escriu la fórmula sencera: angle = (n−2)×180°/n. Comprova que per n=3 et
dona 60° i per n=4 et dona 90°, els dos casos que ja saps de memòria.

**Comprovació.** Hexàgon (n=6): (6−2)×180/6 = 120°. Octàgon (n=8):
(8−2)×180/8 = 135°.

**I després.** Aquesta fórmula és exactament l'eina que et caldrà a q03 per
decidir quines combinacions de polígons regulars omplen un vèrtex sense
deixar buit ni sobreposar-se.

---

## 2. q18a — *How does the volume of a box depend on the lengths of its sides?*
> Com depèn el volum d'una capsa de les longituds dels seus costats?

**Moviment: redueix el desconegut al conegut** — el primer volum del
quadern, comptant cubs unitat.

**Pista 0 — què has de produir.**
No et demanen que recitis V=l·w·h: et demanen la raó. Si ja saps la
fórmula, aquesta pregunta és per què és certa.

**Pista 1 — comença amb costats enters.**
Si la capsa fa 3×2×2, quants cubs d'aresta 1 hi caben? Compta'ls per
capes: una capa horitzontal té l×w cubs. Quantes capes n'hi ha?

**Pista 2 — la construcció.** → `fig-055.png`
La capa marcada en sanguina és una d'aquestes "rebanades" horitzontals —
n'hi ha h, totes iguals.

**Pista 3 — tanca-ho.**
Cada capa té l×w cubs. Hi ha h capes apilades. Quin producte et dona el
total?

**Comprovació.** Capsa 3×4×2: cada capa té 3×4=12 cubs, n'hi ha 2 capes:
24 cubs en total. V=3×4×2=24 ✓.

**I després.** "Comptar en capes i sumar" és exactament el moviment que
retrobaràs, molt més enllà, a q54/q55/q60 (el principi de Cavalieri) — allà
les capes ja no seran cubs sinó seccions de qualsevol forma.

---

## 3. q19 — *Why is the product of two odd numbers always odd?*
> Per què el producte de dos nombres senars és sempre senar?

**Moviment: la identitat és la figura** (reaplica q34: mosaic de (x+y)²).

**Pista 0 — què has de produir.**
No n'hi ha prou comprovant-ho amb 3×5=15. Has de veure per què **cap**
parell de senars pot donar un producte parell.

**Pista 1 — un senar és "parell + 1".**
Escriu els dos nombres com 2a+1 i 2b+1. El producte té quatre termes quan
el desenvolupes. Quants d'aquests quatre termes són clarament parells?

**Pista 2 — la construcció.** → `fig-056.png`
La graella de punts és el producte (2a+1)×(2b+1) dibuixat com a àrea. La
línia sanguina en separa quatre trossos.

**Pista 3 — tanca-ho.**
Tres dels quatre trossos tenen un nombre parell de punts (es poden
aparellar sense que en sobri cap). El quart tros és un sol punt, a la
cantonada. Parell+parell+parell+1 — quina paritat té la suma?

**Comprovació.** 5×3=15: els quatre trossos fan 8 (parell), 4 (parell), 2
(parell) i 1. Suma: 8+4+2+1=15, senar ✓.

**I després.** El mateix moviment, un pas més enllà: q20 fa la pregunta
anàloga per a dos nombres parells.

---

## 4. q20 — *Why is the product of two even numbers always divisible by 4?*
> Per què el producte de dos nombres parells és sempre divisible per 4?

**Moviment: la identitat és la figura** (reaplica q19). DEPÈN de q19.

**Pista 0 — ja saps la meitat.**
Que el producte és parell, ja ho saps (parell × qualsevol cosa és parell).
Aquí et demanen més: per què sempre en sobra prou per arribar a 4, no
només a 2?

**Pista 1 — un parell és "2 × alguna cosa".**
Escriu els dos nombres com 2a i 2b. El producte és 4ab directament —
Per què la graella de punts ho fa evident sense necessitat de desenvolupar
res?

**Pista 2 — la construcció.** → `fig-057.png`
La graella sencera es parteix, en sanguina, en blocs idèntics de 2×2.

**Pista 3 — tanca-ho.**
Cada bloc de la graella té exactament 4 punts. Quants blocs n'hi ha, en
total?

**Comprovació.** 6×4=24: la graella es parteix en 3×2=6 blocs de 4 punts
cadascun. 6×4=24 ✓, i 24/4=6 exacte.

**I després.** Aquest mateix "empaquetar en blocs" reapareixerà en un
context ben diferent quan comptis casos a q03 i q21.

---

## 5. q27_implicit — *Some geometry problems speak for themselves.*
> Alguns problemes de geometria es parlen sols.

**Moviment: dues maneres** (reaplica q22: el mateix truc — centres, un
triangle rectangle, Pitàgores). DEPÈN de q22.

**Pista 0 — què demana el dibuix.**
Aquesta pregunta no té enunciat: el llibre et dona només tres imatges (un
triangle, un quadrat, un cercle, cadascun amb cercles tangents) i dona per
fet que ja saps què cal fer-hi: **trobar la mida del cercle petit en
funció de la mida gran**, a cadascuna. És el mateix tipus de pregunta que
q22, tres vegades.

**Pista 1 — el mateix truc de q22, reaplicat.**
A q22 vas unir el centre del quadrat amb el centre d'un cercle petit i vas
obtenir un triangle rectangle. Aquí, uneix el centre de gravetat del
triangle equilàter amb el centre d'un dels tres cercles iguals, i
també amb el vèrtex més proper. Els dos segments són fàcils de mesurar per
raons diferents — aquí hi ha la teva "dues maneres".

**Pista 2 — la construcció.** → `fig-058.png`
Només s'anota el primer panell (el triangle) i el segon (el quadrat amb el
seu cercle circumscrit, on la diagonal marcada et dona directament la
relació R = s√2/2). El tercer panell (quatre cercles dins un cercle gran)
és la mateixa família de puzle però amb més peces — no cal resoldre'l aquí.

**Pista 3 — tanca-ho.**
Al triangle: la distància del centroide a un vèrtex és L/√3. La distància
del centroide al centre d'un cercle és 2r menys que això, però també és
2r/√3 (perquè els tres centres formen un triangle equilàter petit,
semblant al gran). Iguala-les.

**Comprovació.** Triangle de costat L=4: r = L(√3−1)/4 ≈ 0,732. Quadrat de
costat s=4: R = 4×√2/2 ≈ 2,828.

**I després.** q40_implicit hi torna amb una cadena més llarga de cercles
tangents — el mateix moviment, un pas més complicat.

---

## 6. q40_implicit — *Two of my favorites.*
> Dos dels meus preferits.

**Moviment: dues maneres** (reaplica q22/q27_implicit). DEPÈN de q27_implicit.

**Pista 0 — què demana el dibuix.**
Dues imatges més sense enunciat. Totes dues amaguen la mateixa pregunta
que q27_implicit: mesura el radi petit en funció del gran.
*(Nota d'aquesta figura: el primer panell es dibuixa com el quadrat inscrit
estàndard —els 4 vèrtexs sobre el cercle— perquè l'escaneig original
sembla tenir un detall addicional a dalt que no he pogut resoldre amb
confiança; v. `NOTA-LOT-6.md`.)*

**Pista 1 — quantes incògnites, quantes condicions.**
Al segon panell (dos cercles i un quadrat en fila dins un cercle gran):
si el quadrat té costat 2r (igual que el diàmetre comú dels cercles), i
tot plegat travessa el diàmetre del cercle gran, quina equació relaciona
R (el radi gran) amb r?

**Pista 2 — la construcció.** → `fig-059.png`

**Pista 3 — tanca-ho.**
Al primer panell: la diagonal del quadrat és el diàmetre del cercle, 2R.
Si el costat del quadrat és s, quina relació de Pitàgores lliga s amb R?

**Comprovació.** Quadrat de costat s=4: diagonal=4√2, per tant R=2√2≈2,83.

**I després.** Aquesta família de puzles de cercles tangents (q22, q27,
q40) comparteix sempre el mateix moviment: connecta centres, troba un
triangle rectangle amagat, aplica Pitàgores.

---

## 7. q31 — *Why are the three triangles similar? Why are the larger ones identical?*
> Per què els tres triangles són semblants? Per què els grans són idèntics?

**Moviment: fes servir la simetria per demostrar-ho.**

**Pista 0 — són dues preguntes, com a q08c.**
La primera pregunta (per què A, B i C són semblants) i la segona (per què
els altres dos triangles, més grans, són idèntics entre ells) es
demostren de maneres diferents: la primera per angles repetits, la segona
per simetria de mirall.

**Pista 1 — marca els angles, no mesuris els costats.**
El triangle A (de dalt) té dos costats iguals (dos costats del pentàgon) —
és isòsceles. El seu angle superior és l'angle interior del pentàgon
(108°); els altres dos, iguals entre ells, què han de valer perquè sumin
180° amb el de dalt?

**Pista 2 — la construcció.** → `fig-060.png`
Els arcs dobles marquen els angles de 108° (a dalt de A, i al punt on es
creuen les dues diagonals); els arcs simples marquen els de 36°, repetits
a la base de A i de C.

**Pista 3 — tanca-ho.**
Compara els tres angles de cada triangle (A, B, C): tots tenen els
mateixos dos valors. Per a la segona pregunta, mira els DOS triangles que
no estan etiquetats (els laterals, més grans): la simetria de mirall del
pentàgon els intercanvia — què implica això sobre la seva mida i forma?

**Comprovació.** En un pentàgon de costat 1, comprova amb un dibuix a
escala (o coordenades) que els triangles A, B i C tenen tots dos angles de
36° i un de 108° — el mateix conjunt exacte, per als tres.

**I després.** Aquesta és la mateixa relació angular que fa que la
diagonal del pentàgon i el seu costat estiguin en raó àuria — la
retrobaràs, ja convertida en xifra, a q32.

---

## 8. q32 — *How big is the small pentagon?*
> Quant fa el pentàgon petit?

**Moviment: dilatació.** DEPÈN de q31 i de q38 (ja fet, rectangle auri).

**Pista 0 — què has de produir.**
Un factor d'escala: quantes vegades més petit és el pentàgon interior del
pentagrama, comparat amb el gran? No cal el valor absolut, només la raó.

**Pista 1 — ja tens la peça que et fa falta.**
A q31 vas trobar que els triangles de punta del pentagrama són tots
semblants, amb la mateixa parella d'angles (36°, 36°, 108°). La raó entre
la diagonal i el costat d'un pentàgon regular és sempre el mateix nombre
—l'has vist a q38 amb un altre nom.

**Pista 2 — la construcció.** → `fig-061.png`
El pentàgon petit (en sanguina) és el que formen els cinc punts on es
creuen les diagonals.

**Pista 3 — tanca-ho.**
Si d/s = φ (el nombre auri) és la raó diagonal/costat, i el costat del
pentàgon petit es relaciona amb el gran per aquesta mateixa raó aplicada
dues vegades (un cop per "entrar" cap a cada punta), quina potència de φ
esperes?

**Comprovació.** Amb costat del pentàgon gran = 1: el pentàgon petit fa
1/φ² ≈ 0,382 de costat. Comprova que φ² = φ+1 (la identitat de q33) et
dona 1/φ² = 2−φ ≈ 0,382.

**I després.** Si continuessis dibuixant el pentagrama dins del pentàgon
petit, i el pentagrama dins d'aquell, obtindries una espiral infinita de
pentàgons cada cop més petits per un factor constant 1/φ² — el mateix
tipus d'autosemblança que retrobaràs a les espirals de q122.

---

## 9. q33 — *Use this configuration of two pentagons to give an alternate proof that the diagonal satisfies d² = d + 1.*
> Fes servir aquesta configuració de dos pentàgons per donar una demostració alternativa que la diagonal compleix d² = d + 1.

**Moviment: la identitat és la figura** (com q34, però amb pentàgons en
lloc de quadrats). DEPÈN de q32.

**Pista 0 — què vol dir "alternativa".**
Ja saps (o pots saber, per q31/q32) que d/s=φ compleix φ²=φ+1 per
trigonometria. Aquí et demanen la MATEIXA identitat, però llegida
directament d'un dibuix, sense cap sinus ni cosinus.

**Pista 1 — identifica els costats "1" i "d" al dibuix.**
Dos pentàgons regulars de costat 1 comparteixen una aresta sencera. Des
dels dos extrems d'aquesta aresta compartida surt una diagonal cap a un
mateix vèrtex llunyà d'un dels dos pentàgons. Quant fan, en termes de d i
1, els tres costats del triangle que això forma?

**Pista 2 — la construcció.** → `fig-062.png`
El triangle isòsceles té base 1 (l'aresta compartida) i dos costats d
(dues diagonals).

**Pista 3 — tanca-ho.**
Aquest triangle és semblant al triangle "A" que ja vas marcar a q31 (els
mateixos angles 36°-36°-108°). Un triangle isòsceles amb aquests angles,
de base 1 i costats d, compleix una relació de semblança amb ell mateix
partit per la bisectriu d'un angle de la base: d/1 = 1/(d−1). Desenvolupa-la.

**Comprovació.** d/1 = 1/(d−1) → d(d−1)=1 → d²−d=1 → d²=d+1. Amb
d=φ≈1,618: φ²≈2,618, i φ+1≈2,618 ✓.

**I després.** Ja tens tres demostracions independents de la mateixa
identitat (q38 amb el rectangle, q31/q32 amb els triangles del
pentagrama, i aquesta amb dos pentàgons) — val la pena que notis que cap
de les tres es repeteix: la geometria sovint deixa més d'un camí obert cap
al mateix fet.

---

## 10. q07 — *What happens if the angle sum is more than a full turn?*
> Què passa si la suma d'angles és més d'una volta sencera?

**Moviment: invariant** (reaplica q05: les estrelles). DEPÈN de q05.

**Pista 0 — "volta sencera" és el que ja coneixes.**
Quan camines vora un polígon convex i tornes al punt de partida, has girat
exactament 360° en total —una volta. La pregunta és què passa quan el
camí es creua a si mateix, com al pentagrama de q05.

**Pista 1 — separa "angle de la punta" de "quant gires".**
A cada punta del pentagrama, l'angle interior és 36° (ja el vas trobar a
q05). Quant **gires** en cada punta no és aquest angle: és el
suplementari, 180°−36°=144° —el gir és cap enfora, no cap endins.

**Pista 2 — la construcció.** → `fig-063.png`
Els cinc arcs marquen, a cada punta, el mateix angle de 36° que ja vas
trobar a q05 — la peça nova és comptar-los junts d'una manera diferent.

**Pista 3 — tanca-ho.**
Multiplica 144° pel nombre de puntes. El resultat, dividit per 360°, et
diu quantes voltes senceres fa el camí abans de tancar-se.

**Comprovació.** 5×144°=720°=2×360° —el pentagrama {5/2} fa dues voltes
completes. Comprova el mateix per l'estrella de vuit puntes {8/3}: cada
gir és 3×360°/8=135°, i 8×135°=1080°=3×360°.

**I després.** El nombre de voltes (2 per {5/2}, 3 per {8/3}) és
exactament el "k" del símbol {n/k} amb què vas construir les estrelles a
q05 — no és casualitat, és la mateixa idea mirada des de dues bandes.

---

## 11. q17 — *Can a polygon always be chopped into pieces and reassembled to form a square?*
> Es pot sempre retallar un polígon en peces i recompondre'l com un quadrat?

**Moviment: separa la figura en peces que ja saps mesurar** (reaplica q76:
"separa i reorienta").

**Pista 0 — la resposta és sí, però la pregunta interessant és com.**
Aquest resultat es coneix com el teorema de Bolyai–Gerwien: **qualsevol**
polígon es pot retallar en un nombre finit de peces poligonals i
recompondre com un quadrat de la mateixa àrea. Aquesta guia no demostra el
cas general (surt d'abast d'una pista puntual); et dona la primera peça
del mètode, que és constructiva: **trobar la longitud exacta del costat
del quadrat abans de retallar res**.

**Pista 1 — quina longitud busques.**
Un rectangle de costats a i b té la mateixa àrea que un quadrat de costat
s=√(ab) —la mitjana geomètrica de a i b. Coneixes ja una manera de
construir aquesta longitud amb regla i compàs?

**Pista 2 — la construcció.** → `fig-064.png`
Un semicercle de diàmetre a+b, amb un triangle rectangle inscrit tocant el
diàmetre al punt que el parteix en a i b. L'alçada des d'aquest punt fins
al semicercle és exactament √(ab) —el teorema de l'altura sobre la
hipotenusa (el mateix que fas servir per trobar l'apotema o qualsevol
alçada relativa).

**Pista 3 — tanca-ho (en paraules, no en dibuix).**
Un cop tens s=√(ab), es pot demostrar que —si el rectangle no és massa
allargat (a < 4b)— n'hi ha prou amb DOS talls per recompondre'l en un
quadrat de costat s. Si el rectangle és més allargat, calen més peces,
però el teorema de Bolyai–Gerwien garanteix que sempre és possible.

**Comprovació.** Rectangle 8×2: s=√16=4. Comprova que 8×2=16=4×4 ✓ (mateixa
àrea, com ha de ser per a qualsevol dissecció).

**I després.** El teorema de l'altura sobre la hipotenusa (la peça central
d'aquesta pista) el retrobaràs cada vegada que necessitis "fabricar" una
longitud igual a una arrel quadrada amb regla i compàs —una eina que
reapareix constantment a la part final del llibre.

---

## 12. q21 — *Is √3 irrational? What about √2 + √3?*
> És irracional arrel de 3? I arrel de 2 més arrel de 3?

**Moviment: desempaqueta la definició, i dibuixa el que no pot ser**
(reaplica q95: reducció a l'absurd). DEPÈN de q95.

**Pista 0 — la mateixa estructura que q95, en un altre territori.**
Suposa, per arribar-hi per l'absurd, que √3 = p/q amb p i q enters sense
cap factor comú (la fracció ja reduïda al mínim). Eleva al quadrat:
p² = 3q². Això diu que 3 divideix p². La pregunta clau, que decideix tota
la demostració: **si 3 divideix p², divideix 3 també p?**

**Pista 1 — prova-ho amb casos concrets abans de generalitzar.**
Calcula p² per a p=3, p=4 i p=5, i mira quins d'aquests quadrats són
múltiples de 3.

**Pista 2 — la construcció.** → `fig-065.png`
Només quan p ja és múltiple de 3 (p=3, aquí) el quadrat p² es parteix en
tres grups iguals sense que en sobri cap. Per p=4 i p=5 (cap dels dos
múltiple de 3), sempre en sobra 1.

**Pista 3 — tanca-ho.**
Si 3 no dividís p, p seria de la forma 3k+1 o 3k+2 —cap dels dos casos,
comprova-ho, dona un quadrat múltiple de 3. Per tant 3 | p² força 3 | p.
Ara: si 3 | p, escriu p=3m i torna a l'equació p²=3q². Què li passa a q?
Arribes a la mateixa situació amb p i q més petits —una davallada infinita,
impossible per a enters positius.

**Comprovació.** No numèrica: repassa la teva demostració i assenyala on
fas servir que la fracció p/q ja estava reduïda al mínim. Si no ho fas
servir enlloc, la demostració no funciona (la davallada infinita
necessita precisament aquesta hipòtesi per contradir-se).

**I després.** √2+√3 es demostra amb el mateix moviment però un pas
indirecte: si fos racional, (√2+√3)² = 5+2√6 també ho seria, i per tant
√6 també —contradicció pel mateix argument, aplicat ara a 6.

---

## 13. q24 — *Which rectangles have whole number sides and diagonals?*
> Quins rectangles tenen costats i diagonal enters?

**Moviment: redueix el desconegut al conegut** (Pitàgores, com q25/q41).

**Pista 0 — què has de produir.**
No un rectangle concret: la condició general que a, b i c (costats i
diagonal) han de complir perquè els tres siguin enters alhora.

**Pista 1 — ja coneixes l'equació.**
a²+b²=c² —la mateixa relació que fas servir des de q14/q25. La pregunta
aquí no és calcular c a partir de a i b: és trobar TERNES (a,b,c) senceres
que la compleixin.

**Pista 2 — la construcció.** → `fig-066.png`
El triangle rectangle és mig rectangle: la diagonal el parteix en dos.

**Pista 3 — tanca-ho.**
Prova ternes petites a ull: 3,4,? —quant val?, 5,12,? —quant val? Un cop en
trobis dues o tres, mira si segueixen algun patró (per exemple, què passa
si multipliques tota una terna per un mateix nombre?).

**Comprovació.** 3²+4²=9+16=25=5². La terna (3,4,5) funciona. Comprova
també (6,8,10) —el doble de l'anterior— i (5,12,13).

**I després.** Aquestes ternes es diuen pitagòriques, i hi ha una fórmula
que les genera totes (m²−n², 2mn, m²+n², per a m>n enters) —una pregunta
oberta per qui vulgui anar més enllà del que demana aquest quadern.

---

## 14. q30 — *Can you measure the diagonals and area of the regular dodecagon?*
> Es poden mesurar les diagonals i l'àrea del dodecàgon regular?

**Moviment: redueix el desconegut al conegut** (reaplica q29: triangulació
des d'un vèrtex). DEPÈN de q29.

**Pista 0 — dues preguntes, un sol dibuix.**
"Diagonals" i "àrea" semblen coses diferents, però totes dues surten de
la mateixa construcció que ja coneixes: triangular el dodecàgon des d'un
sol vèrtex.

**Pista 1 — compta abans de mesurar.**
A q29 vas comptar quants triangles surten de triangular un polígon de n
costats des d'un vèrtex (n−2). Aquí, n=12: quants triangles tens? I quants
tipus DIFERENTS de diagonals hi ha (diagonals que salten 1 vèrtex, 2
vèrtexs, 3...)?

**Pista 2 — la construcció.** → `fig-067.png`
Un dels dotze triangles del ventall, marcat en sanguina: si en saps
l'àrea, la resta del dodecàgon és aquest mateix triangle repetit (encara
que no tots els triangles del ventall siguin idèntics entre si, com sí ho
eren a un polígon triangulat des del CENTRE).

**Pista 3 — tanca-ho.**
A diferència de q39 (pentàgon, triangulat des del centre, deu triangles
idèntics), aquí triangules des d'un VÈRTEX: els deu triangles no són tots
iguals. Per calcular l'àrea et cal la suma de les deu àrees, no deu
vegades una de sola —o bé, alternativa més neta: torna a triangular des
del CENTRE, com q39, i aprofita que el dodecàgon és regular.

**Comprovació.** Dodecàgon de costat s=1, triangulat des del centre:
apotema a=1/(2 tan15°)≈1,866. Àrea d'un dels 12 triangles: (1/2)(1)(1,866)
≈0,933. Àrea total: 12×0,933≈11,196 —coincideix amb la fórmula estàndard
3(2+√3)s²≈11,196.

**I després.** El mateix parany (triangular des d'un vèrtex dona triangles
DESIGUALS; triangular des del centre en un polígon regular els dona tots
IGUALS) és el que distingeix q29 de q39 — val la pena que en aquest punt
tinguis clar quan et convé cada mètode.

---

## 15. q35 — *Suppose you are given both the sum and difference of two numbers. How can you determine the numbers themselves? What if it's the sum and product that are given?*
> Si et donen la suma i la diferència de dos nombres, com trobes els números? I si et donen la suma i el producte?

**Moviment: construeix la solució a partir de la seva pròpia definició.**

**Pista 0 — dues preguntes amb dificultat molt diferent.**
La primera (suma i diferència) és mecànica un cop la veus. La segona (suma
i producte) és, en realitat, la mateixa idea que vas fer servir a q36 —val
la pena que ho notis abans de continuar.

**Pista 1 — suma i diferència: parteix el segment.**
Si x+y i x−y són coneguts, on cau x en relació amb el punt mitjà del
segment de longitud x+y? *(Pensa-ho amb un cas fàcil: si x−y=0, x i y són
iguals i x és exactament el punt mitjà.)*

**Pista 2 — la construcció.** → `fig-068.png`
El punt mitjà (negre) i el punt de tall real entre x i y (sanguina) no
coincideixen —la distància entre tots dos és exactament (x−y)/2.

**Pista 3 — tanca-ho.**
x = (x+y)/2 + (x−y)/2, i y = (x+y)/2 − (x−y)/2. Per a la segona pregunta
(suma i producte coneguts): recorda x(s−x) = s²/4 − (x−s/2)² de q36 —amb
suma s i producte P coneguts, això et dona una equació de segon grau en x.

**Comprovació.** x+y=10, x−y=4: x=7, y=3. Comprova: 7+3=10 ✓, 7−3=4 ✓,
7×3=21. Ara amb suma=10 i producte=21 coneguts (sense la diferència):
recupera x=7,y=3 amb l'equació de segon grau.

**I després.** Aquest mètode (mig de la suma, més/menys mig de la
diferència) és exactament com es dedueix la fórmula general per resoldre
qualsevol sistema del tipus "coneixes x+y i x·y" —el mateix esquelet que
la fórmula de segon grau que ja fas servir a l'àlgebra.

---

## 16. q03 — *What are all the different ways to make symmetrical mosaic designs using regular polygons?*
> Quines són totes les maneres de fer mosaics simètrics amb polígons regulars?

**Moviment: compta totes les configuracions possibles** (`recompte-o-induccio`,
moviment NOU — v. `NOTA-LOT-6.md` per la justificació). DEPÈN de q04 (per
l'angle de cada polígon) i complementa q08b (ja fet, el mateix recompte en
3D).

**Pista 0 — què vol dir "encaixar" en un mosaic.**
A cada punt on es toquen diversos polígons, els seus angles interiors han
de sumar **exactament** 360° —ni menys (quedaria un buit) ni més (se
sobreposarien). La pregunta es converteix en: quines combinacions de
polígons regulars, sumant els seus angles (que ja saps calcular des de
q04), donen exactament 360°?

**Pista 1 — prova-ho amb el cas més senzill.**
Tres hexàgons regulars es toquen en un vèrtex. Cada angle val 120° (q04
amb n=6). Suma'ls. I amb dos hexàgons i un quadrat?

**Pista 2 — la construcció.** → `fig-069.png`
El primer panell mostra tres hexàgons que sí que encaixen (l'arc marca
l'angle complet, 360°, sense buit). El segon mostra dos hexàgons més un
quadrat, que **no** encaixen: hi queda una escletxa oberta de 30°.

**Pista 3 — tanca-ho.**
Amb triangles (60°) pots ajuntar-ne 3, 4, 5 o 6 a un vèrtex (180°, 240°,
300°, 360° exactes). Amb quadrats (90°), quants? Amb pentàgons (108°)?
Amb hexàgons (120°)? Per a cada polígon regular, quantes còpies calen per
arribar (o no) a 360° exactes?

**Comprovació.** Sis triangles: 6×60°=360° ✓. Quatre quadrats: 4×90°=360°
✓. Tres hexàgons: 3×120°=360° ✓. Tres pentàgons: 3×108°=324°, no arriba.
Compta quantes combinacions VÀLIDES (no necessàriament d'un sol tipus de
polígon) trobes en total.

**I després.** Aquest mateix recompte, aplicat als poliedres en lloc dels
mosaics del pla (angle **menor** que 360°, no igual, perquè la figura
s'aixequi cap a la tercera dimensió en lloc de quedar plana), és
exactament el que ja vas fer a q08b.
