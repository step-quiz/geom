# Nota — Intro "què és una demostració" i accions de l'avaluació pedagògica

Dues coses independents, rebudes juntes: `DEMO-PROOF-INTRO-DESIGN-NOTES.md`
(disseny, "res implementat encara") i `pedagogical-assessment-geom.md`
(avaluació del projecte existent contra vuit referents pedagògics, amb un
§11 d'accions concretes al final). Aquesta nota en documenta la
implementació real.

## 1. Les tres demos (`#demo`)

- `js/data/demos-dades.js` — les tres demostracions completes (suma
  d'angles=180°, mediana=altura al triangle isòsceles, els quatre
  triangles dels punts mitjans), en l'estructura fixa de quatre moments
  (claim / per què no és obvi / l'argument / què acaba de passar) que el
  document demana — **sempre visible tota alhora, mai amagada rere un
  botó**, l'única excepció deliberada a la regla "cap nivell dona la
  solució" que sí regeix les 68 guies reals.
- `js/nucli/demos.js` — estat separat de `geoProgres` (tres booleans en la
  seva pròpia clau de `localStorage`), més la lògica de "primer visitant"
  i el handoff cap a q02.
- `js/ui/demo.js` — la vista, muntada per `main.js` com una tercera vista
  (com `llista.js`/`detall.js`), amb ruta `#demo` reservada a `router.js`.
- 3 figures noves (`assets/img/demo/`), multi-panell, **tinta amb sanguina
  només com a marca de seqüència** ("això s'acaba d'afegir en aquest
  panell"), explícitament NO el conveni llibre/alumne de les guies — la
  mateixa distinció que ja calia fer per a les figures de glossari.
- **Moviments reutilitzats, cap d'inventat**: `linia-no-enunciada` (demo
  1, el mateix slug que ja portava q16), `simetria-i-demostra` (demo 2,
  triat perquè l'argument fet servir és el plec, no una doble congruència
  — la tria de moviment ha seguit l'argument, no a l'inrevés), i
  `redueix-al-conegut` (demo 3, literalment el moviment de q02).

### Decisions que vaig prendre jo mateix (el document ja les recomanava per defecte)

- **Handoff demo-03 → q02**: `marcaFet("q02", true)` només es dispara quan
  l'alumne obre q02 de debò des de l'enllaç de la demo — mai com a efecte
  lateral d'acabar de llegir el text. Verificat amb Playwright.
- **Enllaços de tancament de les altres dues demos** (el document ho
  demanava per a totes tres, no només la tercera, "worth checking the 130
  for the best fit rather than guessing"): vaig cercar entre les 130
  preguntes reals.
  - Demo 1 (suma d'angles) → **q70** ("what do the inside angles of a
    polygon add up to?") — extensió directa i neta, mateixa dificultat 1,
    ja té guia.
  - Demo 2 (isòsceles) → **q89** (Steiner-Lehmus) — **únic resultat
    isòsceles real disponible** entre les 68 guies; ho dic explícitament
    perquè és un salt de dificultat gran (dificultat 3, contra dificultat
    implícita 1 de la demo) — no hi havia cap alternativa més suau al
    corpus actual, i el text de la demo ho reconeix amb honestedat en lloc
    d'amagar-ho.
- **Redirecció de primer visitant**: bandera pròpia
  (`geo:demo-intro-mostrada`), separada de "geoProgres/itinerari buits",
  perquè un alumne que ja ha vist la intro no hi torni a ser enviat cada
  cop que obre el lloc sense haver fet encara cap pregunta real — el
  document ho demanava explícitament ("never make it a mandatory gate a
  returning student has to click through again").

## 2. Accions de l'avaluació pedagògica (§11)

Nomès dues de les cinc són accionables ara mateix sense fabricar contingut
del Lliurament 7 (que no s'ha fet, i el missatge original deia
explícitament "abans de fer lot 7"):

- **§11.2 — `docs/guies/REFERENTS-PEDAGOGICS.md`** (nou): taula creuada
  moviment↔referent, construïda amb les dades reals dels 68 `moviment`
  ja delivered (no inventada) — markdown pla, mai analitzat per cap
  script, actualitzada a mà com `REVISIONS.md`.
- **§11.5 — nota a `README.md`**: una fila ampliada a la taula "no hi ha,
  i per què" explicant per què `interaccio` és `null` (canvi
  d'arquitectura real, `render.js` és PNG estàtic per disseny — no un
  descuit).

**§11.1, §11.3, §11.4 — deixats com a orientació per al Lliurament 7, no
executats ara**: prioritzar `q43`/`q44` (Pedoe) i sòlids-dins-de-sòlids
(Grünbaum) dins del proper lot, i nomenar `moviment`s nous només si la
tècnica ho justifica (p. ex. `potencia-i-inversio`). Documentat a
`REFERENTS-PEDAGOGICS.md` mateix perquè no es perdi, però NO he fabricat
contingut de Lliurament 7 per "completar" l'avaluació — fora d'abast
d'aquest missatge.

## 3. Verificació

- `python3 verifica_projecte.py` → Tot correcte, abans i després.
- `node --check` sobre els 6 fitxers JS nous/tocats → cap error.
- Playwright: primera visita → `#demo` automàtic; segona visita → cap
  redirecció; les 3 demos amb figures carregades (0 trencades); handoff
  q02 marcant `geoProgres` correctament; enllaç de capçalera sempre
  present.
- Regressió completa: les 68 guies (4 passos, peu, valoració, cap imatge
  trencada), la llista sencera (130 preguntes), i les 3 demos — 0
  fallades, 0 errors JS.
- Captura de pantalla de la vista `#demo`.

## 4. Fitxers d'aquest lliurament

```
js/data/demos-dades.js
js/nucli/demos.js
js/ui/demo.js
docs/demo-figures.html / -clean.html
assets/img/demo/demo-01-angle-sum.png
assets/img/demo/demo-02-isosceles.png
assets/img/demo/demo-03-four-triangles.png
docs/guies/REFERENTS-PEDAGOGICS.md
js/nucli/router.js         (ruta #demo)
js/ui/main.js              (tercera vista + enllaç de capçalera + redirecció)
js/ui/detall.js            (consum del handoff q02)
js/i18n/ui-strings.js      (cadenes demo.*)
css/components.css         (estils .demo*)
index.html                 (ordre de scripts)
README.md                  (nota sobre interaccio)
```
