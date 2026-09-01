# Coneixement previ que les guies donen per sabut — candidats a Glossari

**Estat:** **TANCAT** · cobreix **q01–q127**, és a dir **les 130 preguntes senceres**
(trams 1–20 de la revisió matemàtica; q127 és l'última del quadern).
**Última actualització:** 2026-08-27, en tancar el tram 20 (q124–q127) i, amb ell,
la revisió matemàtica completa. Ja no s'amplia: l'inventari cobreix tot el quadern.

---

## Què és aquest fitxer i què no és

Durant la revisió de correcció matemàtica va aparèixer un segon eix de
dependències, diferent del de "quina pregunta necessita quina altra": el
**coneixement que ve de l'escola i que les guies fan servir sense definir-lo
enlloc**. Pitàgores, Heron, el volum de l'esfera, les raons trigonomètriques.

No són errors. Un quadern d'aquest tipus ha de poder recolzar-se en el que
l'alumnat ja porta. El que passa és que aquestes referències són **invisibles
des del projecte**: no consten enlloc, no hi ha manera de saber quantes n'hi
ha ni quines, i el glossari —que és exactament la superfície pensada per
sostenir-les— en cobreix unes quantes i n'ignora unes altres sense cap criteri
explícit.

Aquest fitxer és, doncs, un **inventari**, no una llista de tasques
obligatòries. Cada entrada diu on s'usa el concepte, què se'n dona per sabut
exactament, i si el glossari ja el té.

**Referència:** el glossari té avui **53 termes**
(`js/data/glossari-dades.js`). Els que ja hi són i cobreixen bé la seva feina
no surten en aquest document.

---

## A. Termes que JA són al glossari, però l'entrada no porta el fet que s'usa

Aquests són els més barats d'arreglar i, probablement, els més rendibles: no
cal crear cap entrada, només ampliar-ne una que ja existeix.

### A1. `esfera` — falten el volum i la superfície

L'entrada defineix l'esfera com a lloc geomètric ("el conjunt de tots els punts
de l'espai a la mateixa distància d'un punt fix"), cosa correcta i útil. Però
les guies fan servir constantment dues fórmules que no hi són:

| Fórmula | On s'usa |
|---|---|
| V = (4/3)πr³ | q58 (per comparar amb el sòlid de Steinmetz), q59, q61, q69 |
| S = 4πr² | q61, q62, q69 |

A **q58** i a **q69** això no és decoratiu: el volum de l'esfera és
literalment el número amb què es tanca el problema.

### A2. `con` — falten el volum i l'àrea lateral

| Fórmula | On s'usa |
|---|---|
| V = (1/3)πr²h | q50, q60, q68 |
| àrea lateral = πrL | q51 (que és, de fet, la pregunta que la dedueix) |

Cas delicat: **q50** demana el patró de les aproximacions per discos, i la
versió original de la solució s'hi recolzava dient «la fórmula que ja
coneixes» — o sigui, feia servir el resultat que la pila de discos serveix per
establir. Corregit al tram 5, però il·lustra bé el risc de tenir el
coneixement previ sense inventariar.

### A3. `cilindre` — falta l'àrea lateral

2πrh, usada a q45 (que la dedueix) i pressuposada a q53 i q63.

### A4. `poligon-regular` — falta la suma d'angles

L'entrada descriu el centre, el radi i l'apotema, però **no diu enlloc que la
suma dels angles interiors sigui (n−2)·180°**, ni que l'angle interior d'un
regular sigui (n−2)·180°/n. Comprovat: la cadena «(n−2)» no apareix ni un cop
al glossari.

És, probablement, la fórmula més reutilitzada del quadern: **q04, q06, q29,
q70**, i indirectament q03 i q08b (que necessiten els 60°, 90°, 108°, 120°).

### A5. `apotema` — només cobreix el cas pla

L'entrada parla de l'apotema d'un **polígon regular**. Però **q57** fa servir
"apotema" per a un **poliedre** (la distància del centre a una cara, és a dir
el radi de l'esfera inscrita), que és un sentit diferent. Al tram 6 vaig
afegir la glossa dins de la pròpia solució, però l'entrada del glossari encara
no ho recull — i hi ha una tercera accepció a l'aguait, la de l'apotema d'una
piràmide (altura d'una cara lateral), que és la que l'alumnat troba als llibres
de text i que aquí NO es fa servir mai.

### A6. `poliedre` / `tetraedre` — falta l'angle diedre

Cap de les dues entrades esmenta l'angle entre dues cares. **q81** hi està
dedicada sencera i **q82** hi construeix el folrat de l'espai. Comprovat: la
paraula «diedre» no surt ni un cop al glossari.

### A7. `teorema-de-pitagores` — no diu que tingui generalització

L'entrada és correcta per al cas recte. Però **q79** en construeix la
generalització a angles obtusos (c² = a²+b²+2ab·cos C'), que és la llei del
cosinus, i **q80** hi connecta. Val la pena que l'entrada hi remeti, encara
que la llei del cosinus tingui entrada pròpia (v. B18).

**Afegit al tram 12, i TANCAT a la segona ronda:** q79 només demostrava el
cas **obtús**. El cas agut (c² = a²+b²−2ab·cos C) no es demostrava enlloc, i
tanmateix s'invocava a q86, a q88, a la solució de q81 i a la de q90. Ara el
cas agut és a l'«I després» de q79, amb la mateixa figura i el peu de
l'alçada a dins; l'entrada de glossari pot remetre-hi per als dos casos.

### A8. `criteris-congruencia-triangles` — ✅ RESOLTA (ago. 2026): l'entrada del glossari ja porta AAS, hipotenusa-catet i què NO és criteri

L'entrada llista tres criteris: CCC/SSS, CAC/SAS i ACA/ASA. Però **q86 és,
sencera, la pregunta de què passa amb la combinació que no hi és** (SSA), i
per respondre-la calen quatre fets que l'entrada no porta:

| Fet | Per què cal |
|---|---|
| **AAS** també és criteri | Perquè la llista de q86 sigui completa |
| **hipotenusa-catet** ho és per als rectangles | És el cinquè criteri clàssic |
| **SSA no és cap criteri** | És exactament la resposta de q86 |
| **AAA tampoc**, però per una altra raó (dona forma i no mida) | La confusió natural que q86 ha de desfer |

Era l'entrada més barata d'ampliar de tota la secció A i la que sosté una
pregunta sencera; **ja està feta**: l'entrada de `js/data/glossari-dades.js`
porta ara els quatre fets, amb «cas ambigu» i SSA entre els termes de cerca. Nota: SSA **sí** determina el triangle quan l'angle donat és
recte o obtús; si l'entrada arriba a esmentar el «cas ambigu», convé que ho
digui, perquè «SSA falla» a seques és fals.

---

## B. Conceptes que NO són al glossari — candidats a entrada nova

Ordenats per quantes preguntes els fan servir, que és el criteri que faria
servir jo per prioritzar.

| # | Concepte | Preguntes | Què se'n dona per sabut |
|---|---|---|---|
| B1 | **Suma dels angles d'un triangle = 180°** | q41, q42, q70, q71, q72, i implícitament arreu | El fet base de tot el quadern. No hi ha cap entrada. |
| B2 | **Raons trigonomètriques (sinus, cosinus, tangent)** | q30, q39, q72, q77, q78 | Definició, i que només depenen de l'angle. Comprovat: la paraula «sinus» no surt ni un cop al glossari. |
| B3 | **Nombre auri φ** | q31, q32, q33, q38, **q85** | Que φ=(1+√5)/2 i que φ²=φ+1. Comprovat: «auri» no surt al glossari. Confirmat al tram 12: q85 hi recolza tot el resultat, i la identitat φ²=φ+1 hi és l'única eina de simplificació. |
| B4 | **Baricentre / centroide** | q01, q49, q65, q66, q67, q68, q69 | Hi ha `mediana` però no el punt. I q65 en construeix una **segona** accepció (centroide d'àrea) i q67 una **tercera** (de perímetre). Tres conceptes emparentats i cap entrada. |
| B5 | **Teorema del segment mitjà** | q02, q16, q73 | Que el segment que uneix dos punts mitjans és paral·lel al tercer costat i en fa la meitat. Usat tres cops com a peça central, mai enunciat. |
| B6 | **Teorema de l'altura sobre la hipotenusa** | q09, q17 | Que l'altura és mitjana geomètrica dels dos trossos. A q09 és el resultat; a q17 és una eina donada. |
| B7 | **Poliedres regulars / sòlids platònics** | q08a, q08b, q57 | Hi ha `poliedre` i `tetraedre`, però no el terme ni el fet que només n'hi ha cinc. |
| B8 | **Ternes pitagòriques** | q24, q40_implicit, q75 | A q40 la figura tanca gràcies a la terna (12, 35, 37); a q24 és el tema. |
| B9 | **Sòlid (cos) de revolució** | q63, q65, q68, q69 | Les entrades `con` i `cilindre` ja el diuen de passada, però el terme no té entrada pròpia. |
| B10 | **Tronc de piràmide / de con** | q48, q62 | Amb la fórmula (h/3)(a²+ab+b²), que vaig haver d'afegir a q48 al tram 5, i la seva versió circular a q62. |
| B11 | **Polígon estelat {n/k} i pentagrama** | q05, q07, q32 | La notació {n/k} s'introdueix a q05 i es fa servir a q07 i q32 sense estar definida enlloc estable. |
| B12 | **Desigualtat triangular** | q74 | És la pregunta mateixa, però el nom del resultat no hi surt. |
| B13 | **Fórmula de Heron** | q75 | Donada sense demostrar ni definir; és tota la palanca de la pregunta. |
| B14 | **Homotècia** | q77 | El llibre en diu *dilation* i la traducció «dilatació» és un fals amic (v. tram 10). Una entrada amb els tres noms —semblança / homotècia / *dilation*— resoldria la confusió d'arrel. |
| B15 | **Casquet esfèric** | q62 | Amb V = (πh²/3)(3R−h) i S = 2πRh. |
| B16 | **Mosaic, teselació regular i semiregular** | q03 | Els 3 regulars, els 8 semiregulars, les 17 rosetes. |
| B17 | **Nombre irracional** | q18a, q21 | q21 demostra que √3 ho és; el concepte s'assumeix. |
| B18 | **Llei del cosinus** | q79, q81, q86, q88, q90 | **TANCAT a la segona ronda del tram 12.** El problema era que q79 demostrava només el cas obtús i que el cas agut, que fan servir q86 (30°), q88 (2θ=74°), la solució de q81 (diedre del tetraedre, arccos(1/3)≈70,5°) i la de q90, no es demostrava enlloc. A q86 i q88 se'n va eliminar la necessitat; per a q81 i q90, que el necessiten de debò, **el cas agut s'ha afegit a l'«I després» de q79** (dues línies, mateixa figura, peu de l'alçada a dins), i les seves citacions passen a ser legítimes sense tocar-les. La definició cos(C) := −cos(180°−C) per als obtusos, que fon les dues fórmules en una, també hi és ara —i a q87. Queda com a candidat de glossari, no com a forat de contingut. |
| B19 | **Angle diedre** | q81, q82 | v. A6. Concepte central de dues preguntes seguides, absent del glossari. |
| B20 | **Identitat sin²+cos²=1** | q79, **q84**, **q88** | Ja no és del tot una caixa negra: **q84 és la pregunta que la demostra**. Però q84 és a `EXERCICIS_AMAGATS`, o sigui que passa el mateix que a B21 — el quadern la demostra en un lloc on l'alumne no pot entrar. Al tram 12 q88 hi va passar a recolzar-s'hi expressament. |
| B21 | **Sinus i cosinus d'un angle obtús** | q79, q80, q87, q90 | Definits via el suplementari, sin(180°−C). **q87, que és la pregunta que ho treballa, és a `EXERCICIS_AMAGATS`** — o sigui que avui aquesta definició no és accessible enlloc per a l'alumne. Precisió del tram 12: del **cosinus** d'un angle obtús no en parla ni tan sols q87. La definició que faria falta és cos(C) := −cos(180°−C) (el signe canviat respecte del sinus), i és la que convertiria la fórmula de q79 en la llei del cosinus única. La solució de q90 ja la fa servir sense dir-ho. |
| B22 | **Valors exactes de 30°, 60°, 45°** | q83 (i q30, q39) | La taula d'angles notables. q83 dedueix 30° i 60°; 45° s'usa sense deduir-se. |
| B36 | **Homotècia i estirament: què conserva cadascun** | q32, q46, q77, q85, q91, q92, q100, q112, q114, q117 | *Afegit al tram 18; ampliat i resolt terminològicament al tram 19.* El quadern feia servir «dilatació» —fals amic de l'anglès *dilation*— per a **dues transformacions diferents**, i cap de les dues es deia com toca en català. Ara: **homotècia** per a l'escalat uniforme des d'un punt (q32, q77, q85, q117) i **estirament** per al de factors diferents segons la direcció (q46, q91, q92, q100, q112, q114). No és només vocabulari: una homotècia conserva angles i raons de distàncies i per tant porta focus a focus, i un estirament no —era exactament l'error de q114. L'entrada de glossari, si es fa, ha de ser doble i ha de dir què sobreviu a cadascuna. Cap dels dos termes és avui al glossari. |
| B38 | **Rodolament sense lliscar** | q124, q125, q127 | *Afegit al tram 20.* El fet que fa funcionar tot el bloc de cicloides: quan un cercle rodola sense lliscar, els dos arcs en contacte mesuren el mateix. No es defineix enlloc i no és al glossari. Si es fa entrada, ha de portar l'avís de la **paradoxa de les dues monedes**: el nombre de voltes que el cercle petit fa *sobre el seu propi centre* no és R/r sinó R/r∓1, i comptar-lo en lloc de l'arc dona el nombre de cúspides equivocat. Era exactament l'argument que fallava a q124. |
| B39 | **Meridià i paral·lel d'un tor** | q126 | *Afegit al tram 20.* q126 els fa servir a la comprovació **i els tenia intercanviats** (corregit al tram 20). El meridià és el cercle petit al voltant del tub; el paral·lel, el gran al voltant del forat. Cap dels dos és al glossari, i la confusió és previsible perquè a l'esfera els noms suggereixen el contrari del que sembla. |
| B37 | **Suma dels n primers quadrats** | q121 | *Afegit al tram 19.* q121 hi descansa sencera —1²+2²+…+n² = n(n+1)(2n+1)/6— i la fa servir sense demostrar-la ni citar-ne cap font. És coneixement previ d'aula i no és al glossari. Barata i molt reutilitzable: és el que converteix l'exhauriment d'Arquimedes en una fórmula exacta per a cada n en lloc d'un pas a l'infinit. |
| B34 | **El triangle (a, b, c) de les còniques** | q109, q111, q113, q114, q115 | *Afegit al tram 17.* Cinc preguntes hi descansen i el glossari no en diu res. El que cal que consti no és la fórmula sinó **qui fa d'hipotenusa**: a l'el·lipse és a (c²=a²−b², focus entre els vèrtexs) i a la hipèrbola és c (c²=a²+b², focus fora). Escriure-ho com «els catets intercanviats» és el que feia q113 i no vol dir res —a²=b²+c² i c²=a²−b² són la mateixa igualtat. Corregit al tram 17 dins de q111 i q113. |
| B35 | **Rectangle central i rombe d'una hipèrbola** | q111, q112 | *Afegit al tram 17.* Són **dos** quadrilàters diferents i tots dos donen c, per camins diferents: el rectangle (±a,±b), amb les asímptotes per diagonals, té semidiagonal c; el rombe de vèrtexs (±a,0),(0,±b) té **costat** c. q111 els barrejava. Cap dels dos termes és al glossari, i la confusió és previsible: convindria que l'entrada els separés explícitament. |
| B33 | **Punt de fuga i perspectiva** | q92, q104, q105, q108 | *Afegit al tram 16.* El terme no és al glossari, i és el que fa de pont entre la geometria projectiva i l'experiència de l'alumne (una foto, un carrer, unes vies). Convé que l'entrada, si es fa, digui les dues coses alhora: que hi ha **un punt de fuga per direcció** (no un de sol per quadre) i que **les direccions paral·leles al pla del quadre no en tenen cap** —que és exactament el cas que faltava a q104 i que s'hi ha afegit al tram 16. |
| B31 | **Raó doble de quatre punts alineats** | q99, q101, q102, q106 | *Afegit al tram 15.* **q99 la demostra invariant**, però el terme no és al glossari i el bloc projectiu hi descansa sencer. Complica-ho que **q102 (#95) hi recolza 15 posicions abans que q99 (#110)**, i que q106, que li havia de posar nom, és a `EXERCICIS_AMAGATS`: al tram 15 el nom («invariant projectiu») s'ha posat dins de q99 i q101 mateixes, perquè no depengués d'una pregunta inaccessible. |
| B32 | **Recta de fuga i punts de l'infinit** | q103, q104, q105, q107 | *Afegit al tram 15.* q105 (#27) introdueix l'espai projectiu i q103 (#96) hi recolza, o sigui que l'ordre acompanya; però el terme «recta de fuga» —la recta del pla origen els punts de la qual no tenen imatge ordinària— no surt enlloc, i és la que explica **per què** una projecció trenca una figura. Al tram 15 l'he hagut d'introduir dins de q103 per poder-hi corregir el mecanisme. Emparentada amb l'horitzó d'una fotografia, que és com la reconeix l'alumne. |
| B29 | **El·lipse com a suma constant de distàncies a dos focus** | q94, q96, q98, q109 | *Afegit al tram 14.* És la definició sobre la qual descansen quatre preguntes, i **q98 és qui la produeix** (el mètode del fil). Però q98 és a la posició #20 i q94, que ja hi recolza tot el seu argument, és a la #19: la definició s'usa una posició abans de fabricar-se. q94 se'n surt perquè l'enuncia sencera ella mateixa, però és fràgil. El glossari no té cap entrada d'«el·lipse» ni de «focus». |
| B30 | **La perpendicular és la distància més curta d'un punt a una recta** | q95, q96 | *Afegit al tram 14.* No la demostra cap pregunta i no és al glossari. És el pas que fa que el peu de la perpendicular de q95 caigui **dins** del cercle —justament el punt on la solució s'equivocava abans del tram 14. |
| B25 | **A costat més gran, angle oposat més gran** | q89 | *Afegit al tram 13.* És l'única peça de la demostració de Steiner–Lehmus que el quadern no estableix. No la demostra cap pregunta i no és al glossari; és coneixement previ d'aula (i es dedueix en dues línies del teorema del sinus, B24, que tampoc no hi és). Barata i molt reutilitzable. |
| B26 | **Fórmula de Heron** | q90 | *Afegit al tram 13.* q90 es presenta com «la generalització de Heron», o sigui que la pressuposa; cap pregunta no l'estableix i no és al glossari. Ara bé, en completar l'àlgebra de q90 al tram 13, **el quadern la demostra sense voler**: fent d→0 a la fórmula de Brahmagupta en surt Heron exacta. Val la pena que l'entrada de glossari, si es fa, hi remeti. |
| B27 | **Dilatació anisòtropa (factors diferents segons la direcció)** | q91, q92, q112, q114 | *Afegit al tram 13.* Concepte central de quatre preguntes i sense entrada al glossari, tot i que `rao-de-semblanca` i `triangles-semblants` sí que hi són —i totes dues descriuen el cas isòtrop, que és justament el que aquestes quatre preguntes contrasten. Aquesta absència va contribuir a l'error de q91/q92 corregit al tram 13. |
| B28 | **Projecció paral·lela vs. projecció central** | q91, q92, q104 | *Afegit al tram 13.* El glossari té `projection`, però la distinció entre les dues és el contingut sencer de q92. Emparentada amb B27: són les dues maneres diferents que té una projecció de no ser una homotècia. |
| B23 | **Folrat de l'espai (nius d'abella)** | q82 | Anàleg 3D de B16. Inclou el fet que el cub és l'únic poliedre regular que hi arriba tot sol. |
| B24 | **Teorema del sinus** | q86, q87 | **Afegit al tram 12.** q87 pregunta literalment si la definició de sinus d'un angle obtús es pot triar «de manera que el teorema del sinus encara es compleixi», i q86 el cita al tancament. Però **el teorema no s'enuncia ni es demostra enlloc del quadern**, i tampoc és al glossari: les dues úniques preguntes que en parlen el pressuposen. Al tram 12 vaig posar-ne la demostració dins de q87 (les dues lectures de la mateixa alçada), que és el mínim per fer la pregunta responible; però q87 és amagada. Sense entrada de glossari o sense desamagar q87, el terme queda inaccessible. |

---

## C. Conceptes d'una sola aparició — probablement NO per al glossari

Els deixo constar per completesa, però jo no els hi posaria: o són d'una sola
pregunta, o les guies ja avisen expressament que queden fora d'abast.

| Concepte | Pregunta | Comentari |
|---|---|---|
| Teorema de Bolyai–Gerwien | q17 | La guia ja diu que no el demostra. |
| Astroide i envolupant d'una família de rectes | q64 | La guia ja diu que la llargada exigeix càlcul. |
| Sòlid de Steinmetz | q58 | Nom propi d'una sola figura. |
| Suma de quadrats Σk² = n(n+1)(2n+1)/6 | q50 (i q121) | És àlgebra, no geometria, però s'usa com a caixa negra. Mereix almenys una nota. |
| Davallada infinita | q21 | Tècnica de demostració, no objecte geomètric. |
| Teorema d'Arquimedes del casquet (2πRh) | q62 | Marcat com a donat-i-no-demostrat al tram 7. |
| Determinant per al volum d'un tetraedre | q56 | Fora d'abast d'ESO; la guia ofereix la via elemental en paral·lel. |
| Funcions trigonomètriques inverses (arccos) | q81 | S'usa per expressar els angles diedres; no és objecte geomètric. |
| Fórmules de l'angle doble | q88 | *Afegit al tram 12.* Era de dues preguntes (q88 i q85); en corregir q85 (que hi arribava per un camí que tornava al punt de partida) ha quedat de q88 sola, i q88 és amagada. Amb l'abast actual del quadern no fa entrada. |
| Circumferència goniomètrica (cercle de radi 1) | q84 | *Afegit al tram 12.* Surt només a l'«I després» de q84, com a mirada endavant declarada fora d'abast. |
| Àrea d'un polígon regular a partir del radi circumscrit | q85 | *Afegit al tram 12.* (5/2)R²·sin72° per al pentàgon. Es dedueix de q80 en una línia; no cal entrada. |
| Envolupant contra trajectòria | q64, q119, q124, q127 | *Afegit al tram 20.* q127 ho explica molt bé al seu «I després» —el mateix bastó dona un astroide com a envolupant (q64) i un quart de cercle com a trajectòria del punt mitjà—, i q124 hi torna. Es registra només perquè cap dels dos termes és al glossari; el contingut hi és i és correcte. |
| Envolupant d'una família de rectes | q64, q119 | *Afegit al tram 19.* q64 (#56) la introdueix amb el bastó lliscant i q119 (#113) hi torna, o sigui que l'ordre acompanya. El terme no és al glossari. Nota del tram 19: la tangència es pot **demostrar** amb el criteri d'arrel doble de q120, i no cal deixar-la com a afirmació —ho vaig fer així a q119. |
| Definició de la paràbola per focus i directriu | q117, q118, q119 | *Afegit al tram 18.* q118 la fa servir com a punt de partida i la formula ell mateix («P és tan lluny del focus com de la directriu»), o sigui que no hi ha forat; però el terme «directriu» no és al glossari i el quadern no el defineix enlloc més. Nota del tram 18: la directriu és a distància p **per sota del vèrtex**, i per tant una homotècia centrada al vèrtex la mou —cosa que la figura fig-121 no diu bé (v. avís de figures). |
| Esferes de Dandelin | q107, q109 | *Afegit al tram 17.* q109 les construeix i les fa servir sense necessitat de res previ, o sigui que no hi ha forat de contingut. Es registra perquè el terme no és al glossari i perquè hi ha un error fàcil de repetir, corregit al tram 17: per a l'**el·lipse** les dues esferes són a la **mateixa** nappa (una a cada banda del pla de tall), no una a cada nappa; això últim només passa amb la hipèrbola. |
| Rectes que s'encreuen a l'espai | q105 | *Afegit al tram 16.* La guia de q105 ja en fa una explicació completa i honesta a l'«I després» (dues rectes de plans diferents no es tallen ni són paral·leles, i afegir-hi punts de l'infinit no ho arregla). Es registra només perquè el terme no és al glossari, no perquè hi falti res. |
| Projectivitat com a cadena de projeccions | q101, q102 | *Afegit al tram 15.* q101 afirmava que tres punts sempre es poden projectar sobre tres punts qualssevol; amb **una** projecció sola no és cert (deixa fix el punt on es creuen les dues rectes), amb dues sí. q102 ja ho sabia («passant pel quadrat, si cal, en dos passos») i q101 no. Corregit dins de q101 al tram 15; no cal entrada de glossari. |
| Propietat de reflexió (billar) de l'el·lipse | q96, q97, q98 | *Afegit al tram 14.* Les tres l'esmenten al tancament i **cap no la demostra**; q97 fins i tot l'atribuïa a q98, que només dona la definició. Al tram 14 he posat a q96 el pas que hi falta (tots els punts de la tangent excepte T són fora de l'el·lipse, i per tant T minimitza la suma). Amb això queda demostrada dins de q96 i no cal entrada. |
| Longitud de la bisectriu d'un angle, t = 2ac·cos(B/2)/(a+c) | q89 | *Afegit al tram 13.* No feia entrada perquè no es feia servir; al tram 13 ha passat a ser el moll de la demostració de q89, però **es dedueix dins de la mateixa pregunta** a partir de q80 i q88, així que continua sense caldre entrada. |
| Criteri costat-angle-costat (SAS) | q86 | *Afegit a la segona ronda del tram 12.* q86 s'hi recolza per contrast, i **cap pregunta del quadern no l'estableix**: és coneixement previ d'aula. No fa entrada pròpia perquè ja el cobreix `criteris-congruencia-triangles` — però v. A8, que és precisament l'entrada que li falta el contingut. |
| Teorema de Pitàgores com a coneixement previ | q84, q25, i mig quadern | *Afegit a la segona ronda del tram 12.* **Cap pregunta del quadern no demostra Pitàgores**; q14 és «el triangle és mig calaix» i q25 és la diagonal de la caixa en 3D (que l'usa, no el demostra). El glossari sí que el té, i per això no fa entrada nova aquí. Es registra perquè és l'origen de citacions falses repetides: q24→q14 (tram 3) i q84→q14/q25 (corregida ara). |

---

## D. Protocol a partir de q79

A cada tram nou, a més de la revisió de correcció:

1. Anotar cada concepte que la guia o la solució facin servir **sense
   definir-lo i sense que vingui d'una pregunta anterior del quadern**.
2. Contrastar-lo amb els 53 termes del glossari (`js/data/glossari-dades.js`).
3. Afegir-lo a la secció A (si el terme hi és però li falta el fet), a la B
   (si no hi és) o a la C (si és d'una sola aparició), amb la llista de
   preguntes on s'usa.
4. Deixar constància al changelog del tram corresponent que aquest fitxer
   s'ha actualitzat.

Aquest fitxer **no proposa cap canvi al glossari ni el modifica**. Escriure
entrades noves és feina de contingut i de figures (els 53 termes actuals en
tenen totes), i és una decisió d'owner: quins d'aquests 17 candidats mereixen
entrada, i amb quina profunditat, depèn de què vulguis que el glossari sigui.

---

## E. Nota de mètode

La llista de la secció B surt de la revisió pregunta a pregunta dels trams
1–10, no d'una cerca automàtica. Vaig fer una passada de regex com a
contrast, però conceptes com "la suma dels angles d'un triangle" o "el teorema
del segment mitjà" s'usen sovint **sense anomenar-los**, i cap cerca de text
els troba. Per això la cobertura d'aquest fitxer va lligada a l'avanç de la
revisió i no es pot generar de cop per a les 130.
