> **Arxivat sense editar (ago. 2026).** Document original de la proposta d'itineraris temàtics. La implementació real i les decisions preses (bessones assenyalades, q36/q80, etc.) són a `docs/ITINERARIS-TEMATICS-DESIGN-NOTES.md`, no aquí.

---

# Detall dels 6 itineraris (115 preguntes visibles)

Base: les 130 preguntes menys les 15 `EXERCICIS_AMAGATS` de `js/ui/llista.js`. 
Ordre: topològic respecte de les arestes internes de l'itinerari (desempat per pàgina); 
quan hi ha un cicle intern, ordre simple per pàgina (marcat a sota de cada taula).


## Itinerari 1 · 2D — Triangles  _21 preguntes_

| # | id | pàg. | enunciat | requereix (d'un altre itinerari) |
|---|---|---|---|---|
| 1 | q01 | 10 | On és el centre d'un triangle equilàter? |  |
| 2 | q02 | 13 | Aquests quatre triangles, són idèntics? |  |
| 3 | q08c | 30 | Si dos triangles tenen els mateixos angles, són necessàriament semblants? I les figures de quatre costats? |  |
| 4 | q09 | 30 | Demostra que si tallem un triangle rectangle en dos de més petits, tots dos han de ser semblants al triangle original. |  |
| 5 | q13 | 34 | Suposa que tallem un triangle des d'un vèrtex fins al punt mitjà del costat oposat. L'àrea queda partida per la meitat? |  |
| 6 | q14 | 36 | Per què un triangle ocupa exactament la meitat de la seva caixa? |  |
| 7 | q15 | 36 | Què li passa a l'àrea del triangle quan desplacem el vèrtex horitzontalment? Què passa si sobrepassa els costats de la caixa? | q41, q42 |
| 8 | q26 | 45 | Demostra que l'altura d'un triangle equilàter és (1/2)√3 vegades el seu costat. | q29 |
| 9 | q28 | 48 | Quina és l'àrea d'un triangle equilàter? |  |
| 10 | q31 | 49 | Per què els tres triangles són semblants? Per què els més grans són idèntics? | q32, q33, q85 |
| 11 | q72 | 106 | Fes una llista curta de longituds i girs. Quins problemes de triangles cal resoldre per determinar si el teu polígon és tancat? |  |
| 12 | q73 | 107 | Els punts mitjans dels costats d'un triangle són prou informació per reconstruir el triangle? I per als polígons de quatre costats? |  |
| 13 | q74 | 107 | Qualsevol tria de tres longituds forma un triangle? | q125, q90 |
| 14 | q75 | 114 | Pots trobar dos triangles diferents amb la mateixa àrea i el mateix perímetre? |  |
| 15 | q76 | 114 | Si un triangle té costats a, b i c, quin és el radi de la circumferència inscrita? | q39 |
| 16 | q77 | 116 | En realitat hi ha una altra tècnica per mesurar longituds, que vam fer servir per a la diagonal d'un pentàgon regular. Quina és? | q112 |
| 17 | q78 | 120 | Com es relacionen entre si els sinus i els cosinus dels dos angles d'un triangle rectangle? |  |
| 18 | q79 | 121 | Demostra que, en aquest cas, obtenim c² = a² + b² + 2ab cos C'. | q81 |
| 19 | q80 | 124 | Demostra que, si un triangle té els costats a i b que es troben formant un angle C, la seva àrea és (1/2)ab sin C. |  |
| 20 | q86 | 129 | Per què dos costats i un angle no basten, en general, per determinar un triangle? |  |
| 21 | q89 | 132 | Demostra que, si dues bisectrius d'un triangle són iguals, el triangle ha de ser isòsceles. | q90 |

*Nota: aquest itinerari té cicles interns de citació mútua (q14↔q15; q08c↔q86; q01↔q26); l'ordre entre aquestes preguntes concretes és per pàgina, no per dependència estricta.*

## Itinerari 2 · 2D — Polígons  _21 preguntes_

| # | id | pàg. | enunciat | requereix (d'un altre itinerari) |
|---|---|---|---|---|
| 1 | q03 | 25 | Quantes maneres diferents hi ha de fer dissenys de mosaic simètrics amb polígons regulars? | q43, q82 |
| 2 | q04 | 25 | Quins són els angles d'un polígon regular de n costats? |  |
| 3 | q05 | 25 | Es poden mesurar els angles d'una estrella regular de n puntes? | q07 |
| 4 | q06 | 26 | Les diagonals traçades des d'un vèrtex d'un polígon regular, sempre formen angles iguals? |  |
| 5 | q10 | 32 | Els costats oposats d'un rombe, sempre són paral·lels? Les diagonals són perpendiculars? |  |
| 6 | q11 | 33 | Un paral·lelogram és un polígon de quatre costats amb els costats oposats paral·lels (és a dir, una caixa inclinada). Els angles oposats d'un paral·lelogram han de ser iguals? | q02 |
| 7 | q12 | 33 | Demostra que un paral·lelogram amb les diagonals iguals ha de ser un rectangle. | q02 |
| 8 | q16 | 36 | Demostra que, en unir els punts mitjans dels costats d'una figura de quatre costats qualsevol, s'obté un paral·lelogram. Quina és la seva àrea? |  |
| 9 | q17 | 37 | Es pot sempre retallar un polígon en peces i recompondre'l com un quadrat? |  |
| 10 | q29 | 48 | Es poden mesurar les diagonals i les àrees de l'hexàgon i l'octàgon regulars? | q73 |
| 11 | q30 | 48 | Es poden mesurar les diagonals i l'àrea del dodecàgon regular? |  |
| 12 | q32 | 51 | Quant fa el pentàgon petit? | q112, q31, q77 |
| 13 | q33 | 52 | Fes servir aquesta configuració de dos pentàgons per donar una demostració alternativa que la diagonal compleix d² = d + 1. |  |
| 14 | q36 | 55 | Demostra que, entre tots els rectangles de perímetre fix, el quadrat és el que té l'àrea més gran. |  |
| 15 | q37 | 55 | Troba un rectangle amb la mateixa àrea i el mateix perímetre que un triangle equilàter donat. |  |
| 16 | q38 | 55 | Un rectangle auri té la propietat que, en treure-li un quadrat, el rectangle que queda és semblant a l'original. Quines són les proporcions d'un rectangle auri? |  |
| 17 | q39 | 58 | Quina és l'àrea d'un pentàgon regular? | q57, q76 |
| 18 | q70 | 105 | Quant sumen els angles interns d'un polígon? | q73 |
| 19 | q71 | 106 | Si tots els angles d'un polígon simple tancat de quatre costats són rectes, quina condició han de complir les longituds dels costats? |  |
| 20 | q85 | 128 | Es pot fer servir un pentàgon regular per trobar el sinus i el cosinus d'un cinquè de volta? |  |
| 21 | q90 | 132 | Demostra que, si una figura de quatre costats amb costats a, b, c i d està inscrita en una circumferència, la seva àrea ve donada per la fórmula de Brahmagupta: A = √[(s-a)(s-b)(s-c)(s-d)], on s = (1/2)(a+b+c+d). | q74 |

*Nota: aquest itinerari té cicles interns de citació mútua (q33↔q32; q12↔q11; q12↔q71↔q11; q12↔q71; q03↔q04; q29↔q06; q29↔q06↔q70; q29↔q70↔q06; q29↔q70; q70↔q06); l'ordre entre aquestes preguntes concretes és per pàgina, no per dependència estricta.*

## Itinerari 3 · 2D — Circumferència  _10 preguntes_

| # | id | pàg. | enunciat | requereix (d'un altre itinerari) |
|---|---|---|---|---|
| 1 | q22 | 41 | Les circumferències grans clarament tenen la meitat d'amplada que el quadrat. I la circumferència petita? | q27_implicit |
| 2 | q23 | 42 | Quant fan aquestes circumferències? |  |
| 3 | q40_implicit | 58 | Dues de les meves preferides. | q27_implicit |
| 4 | q41 | 62 | Quan un punt d'una circumferència es connecta amb els dos extrems d'un diàmetre, sempre forma un angle recte. Per què? |  |
| 5 | q42 | 62 | Demostra que, si dos punts es connecten al mateix arc, els angles resultants han de ser iguals. | q90 |
| 6 | q43 | 65 | Si dues circumferències es disposen de manera que cadascuna passa pel centre de l'altra, quina és l'àrea i el perímetre de la intersecció? I per a tres circumferències superposades? |  |
| 7 | q44 | 66 | Dues circumferències es troben sobre una línia i es toquen en un punt. S'inscriu una circumferència petita a l'espai entre totes dues. Com depèn el seu radi dels radis de les dues circumferències grans? |  |
| 8 | q69 | 103 | Pots trobar el centroide d'un semicercle? I el seu centroide de perímetre? |  |
| 9 | q94 | 144 | Una circumferència és un tipus especial d'el·lipse. On són els seus focus? | q109 |
| 10 | q95 | 146 | Per què la tangent a una circumferència és perpendicular al radi? |  |

*Nota: aquest itinerari té cicles interns de citació mútua (q42↔q41; q23↔q22; q23↔q22↔q44; q23↔q44); l'ordre entre aquestes preguntes concretes és per pàgina, no per dependència estricta.*

## Itinerari 4 · 2D — Còniques  _15 preguntes_

| # | id | pàg. | enunciat | requereix (d'un altre itinerari) |
|---|---|---|---|---|
| 1 | q46 | 71 | Quina és l'àrea d'una el·lipse? |  |
| 2 | q96 | 150 | Per què el camí més curt forma angles iguals amb la línia? | q95, q97 |
| 3 | q98 | 154 | Se t'acut com fer un model aproximat d'una el·lipse fent servir un llapis, dues xinxetes i un tros de fil? | q97 |
| 4 | q110 | 173 | Per què les hipèrboles tenen tanta simetria? |  |
| 5 | q111 | 175 | Per què la constant focal d'una hipèrbola és igual al costat del rombe? |  |
| 6 | q112 | 177 | Per què tota hipèrbola és una dilatació d'una hipèrbola rectangular? |  |
| 7 | q113 | 178 | Si una el·lipse té radi llarg a i radi curt b, on són els seus focus? |  |
| 8 | q114 | 178 | On són els focus d'una hipèrbola unitat? Què passa si la dilatem per factors a i b? |  |
| 9 | q115 | 179 | Demostra que la constant focal d'una el·lipse o d'una hipèrbola és igual al seu diàmetre. |  |
| 10 | q116 | 179 | Pots descobrir la propietat de la tangent d'una hipèrbola? |  |
| 11 | q117 | 182 | Què passa amb les dilatacions d'una paràbola? |  |
| 12 | q118 | 183 | Pots demostrar directament aquesta propietat de la tangent, sense cap mena de "trucs de l'infinit"? |  |
| 13 | q119 | 184 | Si connectes línies seguint aquest patró equidistant, apareix una paràbola. Per què? |  |
| 14 | q120 | 186 | Per què l'àrea d'un sector parabòlic és igual a la meitat de l'àrea del rectangle parabòlic? |  |
| 15 | q121 | 186 | Demostra que una secció parabòlica ocupa exactament dos terços de la seva caixa. |  |

*Nota: aquest itinerari té cicles interns de citació mútua (q112↔q114; q112↔q117); l'ordre entre aquestes preguntes concretes és per pàgina, no per dependència estricta.*

## Itinerari 5 · 2D — Altres  _11 preguntes_

| # | id | pàg. | enunciat | requereix (d'un altre itinerari) |
|---|---|---|---|---|
| 1 | q07 | 27 | Què passa si la suma dels angles és més d'una volta sencera? |  |
| 2 | q27_implicit | 46 | Alguns problemes de geometria parlen per si sols. | q40_implicit |
| 3 | q55 | 80 | Per què no es pot fer servir el mètode d'exhaustió d'aquesta manera per mesurar la diagonal d'un quadrat? | q15, q53, q58, q60 |
| 4 | q54 | 80 | Pots idear un principi de Cavalieri per a àrees en el pla? | q15, q46, q58, q60 |
| 5 | q97 | 151 | Suposa que dos punts es troben entre dues línies paral·leles. Quin és el camí més curt d'un a l'altre que toqui totes dues línies? | q96, q98 |
| 6 | q99 | 156 | Pots treballar els detalls d'aquesta demostració? | q101 |
| 7 | q122 | 190 | Com podem veure una espiral com el resultat d'un moviment? | q32 |
| 8 | q124 | 192 | Com depèn el nombre de cúspides d'una hipocicloide dels radis de les dues circumferències? I en el cas d'una epicicloide? |  |
| 9 | q125 | 192 | Què passa si el punt que traça la corba és al centre? |  |
| 10 | q127 | 193 | Una escala llisca per la paret fins que toca el terra. Quina corba descriu el seu punt mitjà? |  |
| 11 | q64 | 97 | Quin és el perímetre d'una regió formada per un bastó en moviment? | q119, q62 |

## Itinerari 6 · 3D  _37 preguntes_

| # | id | pàg. | enunciat | requereix (d'un altre itinerari) |
|---|---|---|---|---|
| 1 | q08a | 27 | Quins són tots els poliedres simètrics? |  |
| 2 | q08b | 27 | Quins són els cinc poliedres regulars? | q03 |
| 3 | q25 | 44 | Com depèn la diagonal d'una caixa dels seus tres costats? |  |
| 4 | q45 | 69 | Com podem mesurar l'àrea de la superfície d'un cilindre (generalitzat)? |  |
| 5 | q47 | 73 | Els centres de les cares d'un cub es poden unir per formar un octaedre regular. Quina part del volum del cub ocupa? |  |
| 6 | q48 | 74 | Un quadrat de costat a se situa a una altura h damunt d'un quadrat de costat b, formant una piràmide incompleta. Com depèn el seu volum de a, b i h? |  |
| 7 | q49 | 74 | On és el centre d'un tetraedre regular? |  |
| 8 | q50 | 75 | Pots endevinar el patró d'aquestes aproximacions? |  |
| 9 | q51 | 78 | Com podem mesurar l'àrea de la superfície d'un con? |  |
| 10 | q52 | 78 | Pots trobar una secció transversal d'un cub que sigui un hexàgon regular? |  |
| 11 | q53 | 79 | Pots trobar dos objectes amb seccions transversals iguals i àrees de superfície diferents? | q54 |
| 12 | q56 | 81 | Les diagonals d'un cub formen un tetraedre regular. Quina part del cub ocupa? |  |
| 13 | q57 | 82 | Quins són els volums dels sòlids platònics? I els d'altres poliedres simètrics? |  |
| 14 | q58 | 82 | Suposa que dos cilindres idèntics es troben en angle recte. Quin aspecte té la seva intersecció, i quin volum té? I per a tres cilindres mútuament perpendiculars? |  |
| 15 | q59 | 86 | Quina part d'un cub ocupa una esfera? És més de la meitat? |  |
| 16 | q60 | 87 | Demostra que un con dins d'un hemisferi ocupa exactament la meitat del volum. |  |
| 17 | q61 | 88 | Demostra que l'àrea de la superfície d'una esfera és exactament dos terços de la del seu cilindre (tancat). |  |
| 18 | q62 | 89 | Quins són el volum i l'àrea de la superfície d'un casquet esfèric? |  |
| 19 | q63 | 91 | Se t'acudeixen dues maneres diferents de considerar un cilindre com el resultat d'un moviment? |  |
| 20 | q65 | 101 | Com hauríem de definir el centroide d'una figura? Ho podem fer de manera que es compleixi el teorema de Pappus? | q69 |
| 21 | q66 | 101 | Demostra que el teorema de Pappus funciona per a un cilindre format en fer girar un rectangle. |  |
| 22 | q68 | 103 | Si fem girar un triangle rectangle, forma un con. Suposant que Pappus té raó, on ha d'estar el centroide del triangle? | q69 |
| 23 | q81 | 124 | Quin és l'angle entre les cares d'un tetraedre regular? I per als altres poliedres regulars? |  |
| 24 | q82 | 124 | Demostra que es pot omplir l'espai completament fent servir octaedres i tetraedres regulars. Pots trobar altres maneres d'enrajolar l'espai tridimensional amb poliedres simètrics? |  |
| 25 | q91 | 138 | Com depèn exactament el factor de dilatació de l'angle entre els plans? | q111 |
| 26 | q92 | 139 | Les projeccions en qualsevol direcció sempre produeixen dilatacions? |  |
| 27 | q93 | 143 | Per què totes les tangents d'un punt donat a una esfera tenen la mateixa longitud? |  |
| 28 | q100 | 159 | Quin és l'efecte de la projecció central quan els plans són paral·lels? Què passa si el punt de projecció es troba entre els plans? |  |
| 29 | q101 | 160 | Es poden projectar tres punts qualssevol d'una línia sobre qualsevol altra tria de tres punts col·lineals? I quatre punts? | q99 |
| 30 | q103 | 161 | La projecció d'un polígon sempre és un polígon? |  |
| 31 | q104 | 163 | Quin aspecte té la projecció de tres línies paral·leles? |  |
| 32 | q105 | 167 | Dues línies en l'espai projectiu s'intersequen necessàriament? |  |
| 33 | q107 | 170 | Quan un con es talla amb un pla per formar una hipèrbola, quins dos punts de la circumferència es projecten a l'infinit? |  |
| 34 | q108 | 171 | Il·lumina la paret amb una llanterna en diversos angles. Pots veure els tres tipus de secció cònica? |  |
| 35 | q109 | 173 | Pots treballar els detalls d'aquesta demostració? | q94 |
| 36 | q123 | 191 | Com podem mesurar la longitud d'una hèlix? | q122 |
| 37 | q126 | 193 | Se t'acut alguna manera de descriure una hèlix sobre un tor? |  |

*Nota: aquest itinerari té cicles interns de citació mútua (q66↔q65; q61↔q59; q48↔q50↔q62; q48↔q62; q47↔q52↔q56; q47↔q56; q52↔q56; q45↔q51; q105↔q104↔q103; q105↔q107↔q103; q107↔q103; q104↔q103); l'ordre entre aquestes preguntes concretes és per pàgina, no per dependència estricta.*