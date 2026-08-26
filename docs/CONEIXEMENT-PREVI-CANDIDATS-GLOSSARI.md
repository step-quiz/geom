# Coneixement previ que les guies donen per sabut — candidats a Glossari

**Estat:** obert · cobreix **q01–q83** (trams 1–11 de la revisió matemàtica).
Es va ampliant a cada tram nou.
**Última actualització:** 2026-08-26, en tancar el tram 11.

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

---

## B. Conceptes que NO són al glossari — candidats a entrada nova

Ordenats per quantes preguntes els fan servir, que és el criteri que faria
servir jo per prioritzar.

| # | Concepte | Preguntes | Què se'n dona per sabut |
|---|---|---|---|
| B1 | **Suma dels angles d'un triangle = 180°** | q41, q42, q70, q71, q72, i implícitament arreu | El fet base de tot el quadern. No hi ha cap entrada. |
| B2 | **Raons trigonomètriques (sinus, cosinus, tangent)** | q30, q39, q72, q77, q78 | Definició, i que només depenen de l'angle. Comprovat: la paraula «sinus» no surt ni un cop al glossari. |
| B3 | **Nombre auri φ** | q31, q32, q33, q38 (i q85 més endavant) | Que φ=(1+√5)/2 i que φ²=φ+1. Comprovat: «auri» no surt al glossari. |
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
| B18 | **Llei del cosinus** | q79, q81 | q79 en demostra la versió per a angle obtús; q81 la fa servir com a eina en 3D. Emparentada amb B2. |
| B19 | **Angle diedre** | q81, q82 | v. A6. Concepte central de dues preguntes seguides, absent del glossari. |
| B20 | **Identitat sin²+cos²=1** | q79 | És el pas que fa col·lapsar b²cos²C'+b²sin²C' en b². Usada com a caixa negra. |
| B21 | **Sinus i cosinus d'un angle obtús** | q79, q80 | Definits via el suplementari, sin(180°−C). **q87, que és la pregunta que ho treballa, és a `EXERCICIS_AMAGATS`** — o sigui que avui aquesta definició no és accessible enlloc per a l'alumne. |
| B22 | **Valors exactes de 30°, 60°, 45°** | q83 (i q30, q39) | La taula d'angles notables. q83 dedueix 30° i 60°; 45° s'usa sense deduir-se. |
| B23 | **Folrat de l'espai (nius d'abella)** | q82 | Anàleg 3D de B16. Inclou el fet que el cub és l'únic poliedre regular que hi arriba tot sol. |

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
| Determinant per al volum d'un tetràedre | q56 | Fora d'abast d'ESO; la guia ofereix la via elemental en paral·lel. |
| Funcions trigonomètriques inverses (arccos) | q81 | S'usa per expressar els angles diedres; no és objecte geomètric. |

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
