# Lot 3 — dotze guies més de demostració

Dotze preguntes, seguint la mida de calibratge assignada a aquest lliurament
(§5.4: 12–15). Com als lots anteriors, cada guia reaplica un moviment ja
conegut o n'introdueix un de nou quan calia — cap pregunta és una entrada
independent. Aquest lot és el primer amb dificultat 3 (tres preguntes):
q44, q54 i q55.

---

## Com es llegeixen aquestes figures

(Repetit dels lots anteriors.)

| | Vol dir |
|---|---|
| traç negre | la figura tal com és al llibre |
| traç sanguina (vermell terrós) | el que hi has afegit tu |
| discontinu | línia de construcció, no forma part de la figura |
| punt gruixut | punt notable |
| ratllat | aquesta peça es treu |

En les figures amb un cub, el discontinu negre marca les tres arestes que
queden amagades darrere del sòlid — no és una línia de construcció, és
simplement una aresta real que no es veu des d'aquest angle.

**Ordre d'aquest lot:**
q26 → q28 → q44 → q46 → q47 → q49 → q52 → q56 → q51 → q53 → q54 → q55.

---

## 1. q26 — *Show that the height of an equilateral triangle is (1/2)√3 times as long as its side.*
> L'alçada d'un triangle equilàter fa (1/2)√3 vegades el costat.

**Moviment: redueix el desconegut al conegut** (Pitàgores, com a q14).

**Pista 0.** L'alçada parteix el triangle en dos trossos. Mira'ls per separat:
quin tipus de triangle és cadascun?

**Pista 1.** Cada meitat és un triangle rectangle amb hipotenusa el costat
del triangle (s) i un catet la meitat de la base (s/2). Pitàgores et dona
directament l'altre catet — que és, precisament, l'alçada.

Dues coses que aquí es donen per bones i que has de saber d'on surten: que
l'alçada caigui just al PUNT MITJÀ de la base, i que hi caigui
perpendicular. Totes dues venen del mateix argument, fet a q01 (pista 1):
els dos trossos són triangles congruents pels tres costats, i d'aquí surten
alhora la meitat exacta i els 90°. Si no l'has vist, val la pena fer-hi un
tomb abans de seguir: és la peça que fa que aquesta guia funcioni.

**Pista 2 — la construcció.** → `fig-022.png`

**Pista 3 — tanca-ho.** h² = s² − (s/2)² = s² − s²/4 = (3/4)s². Arrel
quadrada: h = s·√3/2.

**Comprovació.** Amb s=10: h²=100−25=75, h=√75=5√3≈8,66 — i (1/2)√3×10≈8,66.

**I després.** Aquest mateix parell (meitat de la base, alçada, Pitàgores) el
tornaràs a fer servir immediatament per calcular l'àrea.

---

## 2. q28 — *What is the area of an equilateral triangle?*
> L'àrea d'un triangle equilàter, en funció del costat.

**Moviment: redueix el desconegut al conegut** (reaplicat de q26).
DEPÈN de q26.

**Pista 0.** Ja tens l'alçada de q26. L'àrea d'un triangle és sempre la
mateixa fórmula, la facis servir on la facis servir.

**Pista 1.** Àrea = (1/2)·base·alçada. La base és s. L'alçada és el que ja
vas trobar a q26. Substitueix-ho i simplifica.

**Pista 2 — la construcció.** → `fig-023.png`

**Pista 3 — tanca-ho.** Àrea = (1/2)·s·(s√3/2) = (√3/4)s². No hi ha res més
a demostrar — és substituir un resultat ja fet dins una fórmula ja coneguda.

**Comprovació.** Amb s=10: (√3/4)×100≈43,30. Comprova-ho també multiplicant
directament (1/2)×10×8,66≈43,30 — han de coincidir.

**I després.** Encara que sembli un pas trivial, aquesta és la primera
vegada del llibre que reutilitzes un resultat teu propi (no un teorema del
llibre) com a peça d'una altra demostració — val la pena notar-ho.

---

## 3. q44 — *Two circles lie on a line, touching each other at a point. A small circle is inscribed in the space between. How does its radius depend on the radii of the two larger circles?*
> Dos cercles tangents a una recta i entre ells; un de petit encaixat a la
> falca. Com depèn el seu radi dels altres dos?

**Moviment: digues la mateixa distància de dues maneres** (reaplicat de
q22/q23, ara amb tres tangències combinades). DEPÈN de q22 i q23.

**Pista 0.** Ja saps dir, de dues maneres, la distància entre els centres de
dos cercles tangents a la mateixa recta (q23). Aquí en tens **tres** parelles
de cercles tangents (gran-petit esquerre, gran-petit dret, petit-gran
esquerre amb gran dret) — i les tres relacions han de ser certes alhora.

**Pista 1.** Per a dos cercles de radis a i b, tots dos tangents a la
mateixa recta i tangents entre ells, la distància horitzontal entre els
peus (on toquen la recta) és 2√(ab) — és el mateix triangle rectangle de
q23, amb catets (a−b) i 2√(ab), hipotenusa (a+b). Aplica'l a la parella
(R₁, r).

**Pista 2 — la construcció.** → `fig-024.png`
Aplica el mateix triangle a la parella (R₂, r) — quin és l'anàleg del catet
(a−b) que ja vas fer servir per a (R₁, r)?

**Pista 3 — tanca-ho.** La mateixa relació val per a (R₂, r). Els peus dels
tres cercles són tots sobre la mateixa recta, així que la distància entre
el peu de R₁ i el peu de R₂ (que ja saps que és 2√(R₁R₂), directament de
q23) ha de ser la suma de les altres dues distàncies parcials (peu de R₁ a
peu de r, i peu de r a peu de R₂) — perquè r és, precisament, en algun punt
entremig. Escriu aquesta equació amb els tres √( ) i aïlla r.

**Comprovació.** Amb R₁=1, R₂=1 (dos cercles iguals): hauria de sortir
1/√r = 1/√1+1/√1 = 2, r=1/4. Comprova-ho també geomètricament: per
simetria, amb dos cercles iguals el petit ha de quedar centrat i el resultat
1/4 és fàcil de verificar per Pitàgores directe.

**I després.** La relació que acabes de trobar (1/√r = 1/√R₁ + 1/√R₂) és un
cas particular d'una fórmula més general (el teorema de Descartes per a
cercles), que val per a qualsevol quatre cercles mútuament tangents, no
només tres en línia.

---

## 4. q46 — *What is the area of an ellipse?*
> L'àrea d'una el·lipse de semieixos a i b.

**Moviment nou: dilatacio** — estirar (o encongir) una figura per un factor
fix en una sola direcció multiplica la seva àrea per aquell mateix factor.

**Pista 0.** Ja coneixes l'àrea d'un cercle. Una el·lipse de semieixos a i
b es pot obtenir a partir d'un cercle de radi a estirant-lo verticalment
per un factor k = b/a. Si sabessis com canvia l'àrea quan estires una
figura qualsevol per un factor fix, ja tindries la resposta.

**Pista 1.** Talla el cercle (mentalment) en franges verticals molt primes.
Quan l'estires verticalment per un factor k, cada franja canvia d'alçada
per aquell mateix factor k, però la seva amplada (horitzontal) no canvia
gens. Què li passa a l'àrea de cada franja? I a la suma de totes?

**Pista 2 — la construcció.** → `fig-025.png`

**Pista 3 — tanca-ho.** Cada franja veu la seva àrea multiplicada per k;
per tant tota la figura (la suma de totes les franges) també veu la seva
àrea multiplicada per k. Àrea del cercle de radi a: πa². Amb k=b/a: àrea de
l'el·lipse = πa²·(b/a) = πab.

**Comprovació.** Amb a=5, b=3: àrea = π×5×3=15π≈47,12. Comprova el cas
particular b=a (l'"el·lipse" és el cercle mateix): πa·a=πa², correcte.

**I després.** Aquest mateix argument de "franges que s'estiren" funciona
per a qualsevol figura, no només un cercle — és, de fet, una altra manera
d'arribar al mateix tipus de raonament que Cavalieri (q54, en aquest mateix
lot) fa servir per a àrees en general.

---

## 5. q47 — *The centers of the faces of a cube can be joined to form a regular octahedron. How much of the volume of the cube does it take up?*
> Els centres de les cares d'un cub, units, formen un octàedre regular.
> Quina fracció del volum del cub ocupa?

**Moviment: tria un altre pla** (reaplicat de q25 — bones coordenades per
a un problema de l'espai). DEPÈN de q25.

**Pista 0 — un avís abans de començar.** En un dibuix en perspectiva els
angles rectes del cub no semblen rectes. Fia't de l'objecte, no del dibuix.

**Pista 1.** Posa el cub amb centre a l'origen i costat 2 (vèrtexs a
(±1,±1,±1)) — els nombres surten més nets que amb costat 1. Amb aquesta
tria, els sis centres de cara són (±1,0,0), (0,±1,0), (0,0,±1). L'octàedre
que formen es pot partir en dues piràmides iguals, unides per la base.
Quina és la base, i quina l'alçada de cadascuna?

**Pista 2 — la construcció.** → `fig-026.png`

**Pista 3 — tanca-ho.** Cada piràmide té per base el quadrat que formen
quatre dels sis centres (per exemple (±1,0,0),(0,±1,0), un quadrat de
diagonal 2) i per alçada la distància fins al cinquè centre (0,0,1), que
és 1. Volum d'una piràmide = (1/3)·base·alçada. Suma les dues piràmides i
compara amb el volum del cub (2³=8).

**Comprovació.** Àrea del quadrat base (diagonal 2, costat √2): (√2)²=2.
Volum d'una piràmide: (1/3)×2×1=2/3. Dues piràmides: 4/3. Fracció del cub:
(4/3)/8 = 1/6.

**I després.** El mateix cub amb el mateix sistema de coordenades et servirà
sense cap canvi per a q52 i q56, en aquest mateix lot.

---

## 6. q49 — *Where is the center of a regular tetrahedron?*
> On és el centre d'un tetràedre regular?

**Moviment: endevina per simetria, després demostra** (reaplicat de q36/q10).
DEPÈN de q36 i q10.

**Pista 0.** Un tetràedre regular té una simetria total entre els seus
quatre vèrtexs — cap n'és especial. Si el "centre" existeix, la simetria
ja et diu una cosa forta sobre on ha de ser.

**Pista 1.** Des de cada vèrtex, traça el segment fins al centre (centre de
gravetat) de la cara oposada. Per simetria, aquests quatre segments haurien
de trobar-se tots en un sol punt. Comprova-ho amb coordenades: si els
quatre vèrtexs són A, B, C, D, quin punt surt de fer la mitjana dels
quatre?

**Pista 2 — la construcció.** → `fig-027.png`

**Pista 3 — tanca-ho.** El punt G=(A+B+C+D)/4 és, alhora, el punt que hi ha
a 3/4 del camí de cada vèrtex cap al centre de gravetat de la cara oposada
— comprova-ho algebraicament per a un vèrtex qualsevol i generalitza per
simetria als altres tres.

**Comprovació.** Amb A=(1,1,1), B=(1,−1,−1), C=(−1,1,−1), D=(−1,−1,1) (un
tetràedre regular clàssic inscrit en un cub): G=(0,0,0). El centre de la
cara BCD és ((1−1−1)/3,(−1+1−1)/3,(−1−1+1)/3)=(−1/3,−1/3,−1/3). El punt a
3/4 del camí d'A cap a aquest centre: A+(3/4)((−1/3,−1/3,−1/3)−A) =
(1,1,1)+(3/4)(−4/3,−4/3,−4/3) = (1,1,1)+(−1,−1,−1) = (0,0,0) = G ✓.

**I després.** Aquesta relació 3:1 (vèrtex–centre : centre–cara) és
l'anàleg en 3D de la relació 2:1 del baricentre d'un triangle en 2D.

---

## 7. q52 — *Can you find a cross-section of a cube that is a regular hexagon?*
> Un tall pla d'un cub que sigui un hexàgon regular.

**Moviment: tria un altre pla** (reaplicat de q25/q47). DEPÈN de q25 i q47.

**Pista 0.** No qualsevol pla de tall serveix — n'hi ha un que funciona per
raons de simetria. Pensa en la diagonal principal del cub (la que va d'un
vèrtex al vèrtex oposat, travessant l'interior): quina mena de simetria té
el cub al voltant d'aquesta diagonal?

**Pista 1.** El cub té simetria de rotació de 120° al voltant de qualsevol
diagonal principal (gira'l i es veu igual, tres cops per volta). Un pla
tallat perpendicularment a aquesta diagonal, pel centre del cub, hereta
aquesta mateixa simetria de 120°. Quina figura, si té simetria de 120° i
toca cada cara del cub un cop, pot sortir-ne?

**Pista 2 — la construcció.** → `fig-028.png`

**Pista 3 — tanca-ho.** El pla talla exactament sis arestes del cub (les
sis que no toquen cap dels dos vèrtexs de la diagonal triada), pel seu punt
mitjà. Amb coordenades (cub de costat 1, diagonal de (0,0,0) a (1,1,1)):
comprova que els sis punts mitjans són tots a la mateixa distància del
centre del cub, i que la distància entre dos punts mitjans consecutius és
la mateixa arreu.

**Comprovació.** Punts mitjans com (1, 0.5, 0) i (0.5, 1, 0): distància
√((0.5)²+(0.5)²+0²)=√0,5≈0,707. Fes-ho amb un altre parell consecutiu, per
exemple (0.5,1,0) i (0,1,0.5): √(0,25+0+0,25)=√0,5≈0,707 — igual.

**I després.** Aquest mateix pla (perpendicular a una diagonal principal,
pel centre) és el que fa servir q56, en aquest mateix lot, per trobar el
tetràedre inscrit al cub. El dibuix, però, es mira des d'un angle diferent
del de q56: exactament al llarg de la diagonal principal, perquè és
l'única direcció des de la qual el pla de tall es veu en veritable magnitud
i l'hexàgon surt regular en lloc d'aixafat (rev1, v. `docs/guies/REVISIONS.md`).
Si tornes a la figura de q56 hi reconeixeràs el mateix cub dibuixat amb la
projecció habitual d'aquest quadern: la direcció de mirada és part del
contingut de cada figura, no un simple estil.

---

## 8. q56 — *The diagonals of a cube form a regular tetrahedron. How much of the cube does it take up?*
> Les diagonals de cara del cub formen un tetràedre regular. Quina fracció
> del cub ocupa?

**Moviment: tria un altre pla** (reaplicat, mateix cub que q47/q52).
DEPÈN de q25 i q47.

**Pista 0.** "Diagonals" aquí vol dir diagonals de cara (no la diagonal
principal de q47/q52). Tria quatre dels vuit vèrtexs del cub de manera que
cap parella triada sigui una aresta del cub — només diagonals.

**Pista 1.** Amb el cub de costat 1 i vèrtexs a {0,1}³, tria (0,0,0),
(1,1,0), (1,0,1), (0,1,1). Comprova que cada parella d'aquests quatre punts
està a distància √2 (una diagonal de cara) — si ho és per a totes sis
parelles, tens un tetràedre regular.

**Pista 2 — la construcció.** → `fig-029.png`

**Pista 3 — tanca-ho.** Hi ha dos camins, i val la pena que sàpigues que
n'hi ha dos.

El curt fa servir una eina que segurament encara no has vist: el volum
d'un tetràedre és (1/6)|det[B−A, C−A, D−A]|, un determinant 3×3. Si la
coneixes, calcula'l amb les coordenades de la Pista 1. Si no, no és el
lloc d'aprendre-la ara.

El llarg no necessita res que no tinguis, i de fet ensenya més. Mira què
queda del cub quan en treus el tetràedre: quatre trossos, un a cada
cantonada que no has fet servir. Cadascun és una piràmide amb una cara del
cub per base (àrea 1) i una aresta del cub per alçada (1), o sigui volum
(1/3)(1)(1) = 1/3... que és massa. Fixa-t'hi millor: la base de cada tros
no és una cara sencera del cub, és mig cara —un triangle rectangle d'àrea
1/2— i l'alçada és 1. Volum de cada tros: (1/3)(1/2)(1) = 1/6. Quatre
trossos fan 4/6 = 2/3. El tetràedre és, doncs, 1 − 2/3 del cub. Compara
aquest resultat amb el del camí curt.

**Comprovació.** Amb A=(0,0,0), B=(1,1,0), C=(1,0,1), D=(0,1,1):
det[(1,1,0),(1,0,1),(0,1,1)] = 1(0−1)−1(1−0)+0(1−0) = −1−1+0=−2. Volum =
2/6 = 1/3. El tetràedre ocupa exactament un terç del cub.

**I després.** El cub sencer es pot partir en aquest tetràedre més quatre
petits tetràedres iguals, un a cada vèrtex retallat — comprova que
4×(volum d'un d'aquests) + 1/3 = 1 (el cub sencer).

---

## 9. q51 — *How can we measure the surface area of a cone?*
> La superfície lateral d'un con.

**Moviment: desenrotlla la superfície** (reaplicat de q45). DEPÈN de q45.

**Pista 0 — un avís abans de començar.** Com sempre en un dibuix en
perspectiva, la base del con no sembla un cercle. És un cercle de veritat.

**Pista 1.** → `fig-193.png` A q45 vas desenrotllar un cilindre i et va sortir un
rectangle. Prova de fer el mateix amb un con: talla'l des de la punta fins
a la vora de la base, en línia recta, i estira'l pla. Ja no surt un
rectangle — surt un tros de cercle. Quin radi té aquest tros de cercle?
I quina llargada d'arc?

**Pista 2 — la construcció.** → `fig-030.png`

**Pista 3 — tanca-ho.** El radi del sector és exactament la llargada de la
línia que has tallat — l'aresta inclinada del con des de la punta fins a
la vora (l'anomenem "generatriu" o alçada inclinada, L). L'arc del sector
ha de fer, en longitud, exactament la circumferència de la base (2πr), ja
que abans d'estirar-lo el con era la vora d'aquella base. Un sector de
cercle de radi L amb arc de longitud 2πr té àrea (1/2)×L×(2πr) = πrL —
la mateixa fórmula "base × alçada / 2" que fas servir per a qualsevol
sector.

**Comprovació.** Amb r=3, L=8: l'angle del sector és 2π(3)/8 = 3π/4 (135°).
Àrea lateral = πrL = π×3×8 = 24π ≈ 75,4. Comprova-ho també amb la fórmula
del sector: (1/2)×8²×(3π/4) = (1/2)×64×2,356=75,4 ✓.

**I després.** A diferència del cilindre, aquí l'"amplada" de la superfície
desenrotllada no és constant — és un arc, no un segment recte. Aquesta
diferència és exactament el que fa que el con, a diferència del cilindre,
no es pugui "desenrotllar" en un rectangle.

---

## 10. q53 — *Can you find two objects with equal cross-sections and different surface areas?*
> Dos objectes amb el mateix tall a cada alçada però superfícies diferents.

**Moviment: per refutar en basta un contraexemple** (reaplicat de q08c/q86).
DEPÈN de q08c i q86.

**Pista 0.** No cal cap objecte estrany. Compara un cilindre recte amb un
cilindre "inclinat" (com una pila de monedes que s'ha desplaçat de costat
sense girar cap moneda) — mateixa base, mateixa alçada.

**Pista 1.** → `fig-194.png` A cada alçada, el tall horitzontal dels dos cilindres és un
cercle idèntic (mateix radi) — per Cavalieri, doncs, tenen el mateix
volum. Però un és "recte" i l'altre "s'inclina": mira la superfície
lateral de cadascun. Quina creus que serà més gran, i per què?

**Pista 2 — la construcció.** → `fig-031.png`
Mira la superfície lateral de cadascun, no el volum (que ja saps que
coincideix) — quina franja vertical s'allarga en inclinar-se?

**Pista 3 — tanca-ho.** El cilindre inclinat té una superfície lateral
estrictament més gran que el recte, encara que el volum sigui idèntic —
cada "franja" vertical de la superfície s'allarga en inclinar-se, de la
mateixa manera que la hipotenusa d'un triangle rectangle és més llarga que
el catet.

**Comprovació.** Amb un cilindre recte de radi 2, alçada 10: superfície
lateral 2π(2)(10)=40π≈125,7. Si l'inclines de manera que cada "franja"
s'allargui per un factor 1,2 (un pendent moderat), la superfície lateral
inclinada surt ≈150,8 — més gran, mentre que el volum (àrea de la base ×
alçada vertical) es manté exactament igual als dos.

**I després.** Aquest exemple és el bessó en 3D del que trobaràs a q55 (en
aquest mateix lot): igual que aquí el volum no "sent" la inclinació però la
superfície sí, allà l'àrea no sentirà els esglaons però el perímetre sí.

---

## 11. q54 — *Can you devise a Cavalieri principle for areas in the plane?*
> Un principi de Cavalieri per a àrees al pla.

**Moviment nou: invariant** — si dues figures tenen, a cada alçada, un tall
horitzontal de la mateixa longitud, tenen la mateixa àrea, per diferents
que semblin.

**Pista 0.** Pensa en un rectangle. Ara imagina que n'agafes la part de
dalt i la desplaces cap al costat, mantenint l'alçada, fins que el
rectangle es converteix en un paral·lelogram inclinat. Ha canviat l'àrea?

**Pista 1.** → `fig-195.png` A cada alçada, quina longitud té el tall horitzontal del
paral·lelogram? Compara-la amb la longitud del tall del rectangle a la
mateixa alçada.

**Pista 2 — la construcció.** → `fig-032.png`
Compara la longitud del tall (no l'àrea) a la mateixa alçada, als dos.

**Pista 3 — tanca-ho.** A qualsevol alçada, el tall horitzontal del
paral·lelogram té exactament la mateixa longitud que la base — igual que
el rectangle. Si dues figures tenen el mateix tall a cada alçada, l'àrea
(que no és res més que la "suma" de tots els talls, un per cada alçada)
ha de ser la mateixa. Aquest és el principi de Cavalieri per a àrees.

**Comprovació.** Rectangle de base 6, alçada 4: àrea 24. Paral·lelogram amb
la mateixa base i alçada, inclinat 3 unitats: l'àrea (base × alçada,
independentment de la inclinació) segueix sent 24. Comprova-ho també
descomponent el paral·lelogram en el rectangle més un triangle a un costat
menys el mateix triangle a l'altre.

**I després.** Aquest mateix principi, aplicat a volums en lloc d'àrees
(tallant amb plans en lloc de rectes), és el que permetrà comparar volums
de sòlids que semblen molt diferents — i és exactament la idea que fa
servir q53, en aquest mateix lot, per al cas contrari (quan NO es conserva
alguna cosa).

---

## 12. q55 — *Why can't the method of exhaustion be used in this way to measure the diagonal of a square?*
> Per què el mètode d'exhaustió no serveix, aplicat així, per mesurar la
> diagonal d'un quadrat?

**Moviment nou: cas-limit** — analitza què passa quan el nombre de passos
de l'escala tendeix a infinit, i compara amb el que "sembla" que hauria de
passar.

**Pista 0.** Fixa't en l'escala de q54 (o al llibre): a mesura que fas els
esglaons més petits i més nombrosos, l'escala s'assembla més i més a la
diagonal, a ull. Això vol dir que la seva **longitud** s'acosta a la
longitud de la diagonal?

**Pista 1.** → `fig-196.png` Suma tots els trams horitzontals de l'escala (sense els
verticals): quant val la suma, sigui quin sigui el nombre de graons? Fes el
mateix amb els verticals. Ara suma-ho tot: aquesta és la longitud total del
camí en escala.

**Pista 2 — la construcció.** → `fig-033.png`
Suma primer els trams horitzontals sols (marcats), sigui quin sigui el
nombre de graons — quant val, en termes de s?

**Pista 3 — tanca-ho.** Els trams horitzontals sempre sumen exactament el
costat del quadrat (s), sigui quin sigui el nombre de graons — es limiten a
repartir el mateix recorregut total en trossos més petits. El mateix passa
amb els verticals. La longitud de l'escala és, doncs, sempre 2s,
**independentment** de com de fins siguin els graons — mentre que la
diagonal fa s√2 < 2s. Per fins que siguin els graons, la longitud del camí
mai no s'acosta a la diagonal: es queda sempre igual.

**Comprovació.** Amb s=10: diagonal = 10√2≈14,14. Escala amb qualsevol
nombre de graons: longitud sempre 20 — amb 2 graons, amb 20 graons, amb
2000 graons. La diferència (20−14,14≈5,86) no es redueix mai, per molt que
l'escala s'assembli visualment a la diagonal.

**I després.** Aquest és exactament el motiu pel qual el mètode
d'exhaustió, que sí que funciona per a àrees (q54) i per a volums, **no**
es pot aplicar ingènuament a longituds — cal un argument diferent (i molt
més delicat) per mesurar corbes com a límits de poligonals, que és per
això que mesurar la longitud d'una circumferència com a límit de polígons
inscrits requereix més cura que mesurar-ne l'àrea.

---

## Nota d'integració

Sense canvis respecte al que ja proposaven els lots 1 i 2 — s'hi afegeixen
els dotze registres nous amb el mateix esquema. No hi ha cap camp nou.
