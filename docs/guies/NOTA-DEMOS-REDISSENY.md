# Nota — les tres demostracions d'introducció, redissenyades

Millora de fons de les tres demostracions "què és una demostració"
(`js/data/demos-dades.js`, `docs/demo-figures.html`), a petició explícita
de l'owner: "més curoses, més completes, més comprensibles, més
riques". Set problemes reals identificats abans de tocar cap fitxer
(llegint el text i mirant les tres figures existents, no de memòria), i
els set corregits.

## 1. El problema de fons, no un pegat

Les tres demostracions explicaven **com** es demostra, però mai
s'aturaven a fer sentir **per què calia demostrar-ho**. El camp
`perque_no_es_obvi` ho deia en una frase i passava de pàgina — per a un
alumne de 15 anys que mai ha vist una demostració, aquesta és exactament
la pregunta que li rosega mentre llegeix la resta. Set troballes
concretes se'n deriven:

1. **Un forat de rigor real a demo-01**: "angles alterns iguals [...]
   Això és la propietat bàsica de les paral·leles tallades per una
   secant — no res nou" — no res nou per a nosaltres; la primera vegada
   per a l'alumne, i li ho donàvem per establert sense cap raó.
2. **La mateixa fissura, més petita, a demo-02**: el plec "fa coincidir
   els dos triangles" sense dir mai explícitament que un plec és una
   reflexió, i que una reflexió conserva longituds i angles.
3. **Cap de les tres figures mostrava la contradicció** que fa falta la
   demostració — el text deia "mira un triangle prim i un altre gairebé
   equilàter", però mai es dibuixaven.
4. **La universalitat era afirmada, mai mostrada** — les tres figures
   feien servir sempre el mateix triangle als tres panells.
5. **Les tres demos no es parlaven entre elles** — cap nom final que les
   agrupés com a família d'estratègies.
6. **Cap "mira enrere" real** (Pólya, ja el referent explícit d'aquest
   projecte per a l'escala de pistes): mai s'assenyalava què NO havia
   calgut fer servir de l'argument.
7. **Escala interna més pobra** que les guies reals que haurien de
   preparar.

## 2. Figures — de 3 a 5 panells cadascuna

Cada figura (`docs/demo-figures.html`) guanya:
- **Panell 0 (nou)**: dos exemples molt diferents del mateix objecte
  (triangle prim vs. gairebé equilàter; isòsceles agut vs. obtús; els
  quatre triangles resultants ja separats, un capgirat) — la
  contradicció, vista, no només llegida.
- **Panell 4 (nou)**: el mateix argument aplicat a una segona forma
  clarament diferent — a demo-01 i demo-02, literalment el MATEIX
  triangle contrastat del panell 0 (no un altre inventat: tanca la
  promesa que s'havia fet); a demo-03, un triangle molt aixafat.

**Dos bugs reals trobats renderitzant, no llegint el codi**: un error
de sintaxi (apòstrof sense escapar dins d'una cadena JS) que va fer
fallar tot el fitxer sencer a la primera prova; i el panell 4 de demo-01,
en el primer intent, no reutilitzava el triangle del panell 0 sinó un de
nou — trencava exactament la promesa visual que el panell 0 acabava de
fer. Corregits abans de publicar res.

## 3. Text — rigor tapat, tancament nou

- **Demo-01**: ja no diu "no res nou" sobre els angles alterns — explica
  per què una recta que en talla dues de paral·leles hi dona angles
  iguals a banda i banda (és, literalment, l'única manera que dues
  rectes no s'ajuntin mai).
- **Demo-02**: nomena explícitament que un plec és una reflexió, i que
  una reflexió no canvia mides ni angles — el pont exacte entre
  "manipulació sentida" (Castelnuovo, ja referent d'aquest moviment) i
  "argument formal" (Coxeter).
- **Un error propi, trobat abans de deixar-lo passar**: la primera
  redacció de demo-03 citava "el mateix Talles" per al fet dels punts
  mitjans — comprovat contra el glossari real (`teorema-de-tales` ja hi
  existeix, però es refereix a un fet diferent: rectes paral·leles
  tallant secants amb segments proporcionals), i corregit abans de
  confondre dos teoremes en un contingut que ha de ser exemplar.
- **Tancament compartit, nou del tot** (`window.DEMOS_TANCAMENT` a
  `demos-dades.js`): no pertany a cap de les tres demos soles. Les nomena
  explícitament com a tres famílies d'atac (afegir el que falta /
  reconèixer la simetria / reduir a allò conegut) i tanca amb el "mira
  enrere" de Pólya que cap de les tres feia fins ara — sense repetir cap
  frase ja dita a cada `que_acaba_de_passar` individual.

## 4. Codi — una peça nova, no només dades

El tancament compartit va exigir tocar `js/ui/demo.js` (no només
`demos-dades.js`): es renderitza un sol cop, després de les tres demos,
amb degradació segura (`demos.length === 3`, si mai el fitxer de dades
no en té les tres, simplement no es pinta res a mitges). Estils nous a
`css/components.css` (`.demo__tancament*`) amb un `border-top` doble
gruix per distingir-lo visualment de les demos individuals i del bloc
`.demo__handoff` — a propòsit, perquè no sembli una quarta demo més ni
un handoff més.

## 5. Verificació

- Les tres figures renderitzades i revisades panell a panell abans de
  publicar-les (5 panells × 3 = 15 revisions individuals).
- `node --check js/data/demos-dades.js` i `js/ui/demo.js` → sintaxi
  vàlida.
- `python3 verifica_projecte.py` → `Tot correcte.`
- Playwright sobre `#demo`: 3 demos pintades, bloc de tancament present,
  3 imatges carregant sense trencar-se, 0 errors JS.
- **Captura de pantalla de la pàgina sencera**, revisada panell a panell
  dins del flux real (no només els canvas aïllats) — confirmat que les
  cinc parts de cada figura es llegeixen netes a l'amplada real de
  pantalla, i que el bloc de tancament es distingeix visualment de les
  demos i del handoff.

## 6. Fitxers d'aquest lliurament

```
docs/demo-figures.html / -clean.html        les 3 figures, 3->5 panells cadascuna
assets/img/demo/demo-01-angle-sum.png       republicada
assets/img/demo/demo-02-isosceles.png       republicada
assets/img/demo/demo-03-four-triangles.png  republicada
js/data/demos-dades.js                      rigor tapat + DEMOS_TANCAMENT nou
js/ui/demo.js                               renderitzat del tancament compartit
css/components.css                          estils .demo__tancament*
docs/guies/NOTA-DEMOS-REDISSENY.md          aquest fitxer
```
