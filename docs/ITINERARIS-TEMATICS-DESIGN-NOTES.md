# Itineraris temàtics — notes de disseny

Ago. 2026. Dades a `js/data/itineraris-tematics-dades.js`. Aquest document
és la font de veritat de com s'ha implementat; substitueix la proposta
externa original com a referència operativa. Els tres documents originals
de la proposta segueixen arxivats, sense editar, a `docs/guies/` per
traçabilitat: `PROPOSTA-ITINERARIS-ORIGINAL.md` (el raonament i les 6
xifres clau), `ANALISI-GRAF-PREGUNTES-ORIGINAL.md` (el mètode d'extracció
del graf de 185 arestes), i `ITINERARIS-DETALL-ORIGINAL.md` (els 6
itineraris sencers, pregunta a pregunta — la font de què es va parsejar
per generar `itineraris-tematics-dades.js`).

**Per què aquest document és dins del repo i no extern.** L'auditoria
d'ago. 2026 (`docs/DOCUMENTS-DE-DISSENY.md`) va trobar cinc documents de
disseny citats al codi que no havien estat mai al repositori, cosa que
deixava mig projecte amb referències mortes. Aquest document existeix
precisament perquè no torni a passar: qualsevol decisió d'aquest
lliurament que calgui consultar més endavant és aquí, no en un document
extern que algú hagi de recordar on és.

---

## 0. Què és, i què no és

**Itineraris temàtics** (`ITINERARIS_TEMATICS`, aquest lliurament): 6
camins fixos i editorials —el mateix per a tothom— que reorganitzen les
115 preguntes visibles (130 menys les 15 `EXERCICIS_AMAGATS` de
`js/ui/llista.js`) en seqüències temàtiques: 2D·Triangles, 2D·Polígons,
2D·Circumferència, 2D·Còniques, 2D·Altres, i 3D (sencer, sense subdividir
— v. §2).

**No s'ha de confondre amb** `js/nucli/itinerari.js`, que ja existia i
segueix intacte: un motor *reactiu i individual*, amb estat propi per
alumne a `localStorage`, que suggereix 1-3 preguntes properes segons
l'historial de qui l'estigui fent servir en aquell moment (continua on ho
vas deixar / rampa de dificultat / repàs pel mateix `moviment` /
fallback). Aquest lliurament n'és complementari, no un reemplaçament:
omple l'espai que `docs/NOTA-GLOSSARI-ITINERARI.md` ja deixava
explícitament ajornat («extres §10/§11», mai implementats).

**Aquest lliurament és només dades.** Cap canvi a `js/ui/*.js`. La UI que
en consumeixi —una pàgina d'itineraris, un selector a `llista.js`, un
badge de "veure també" a `detall.js`— és feina d'un lliurament posterior,
per no prendre decisions de disseny visual en silenci dins d'un
lliurament de dades.

---

## 1. Origen i verificació del graf

La proposta original parteix de parsejar `js/data/guies-dades.js` cercant
referències creuades entre preguntes: només als camps de prosa dirigida
al lector (`pistes[].titol`, `pistes[].text`, `comprovacio`, `iDespres`,
`movimentTitol`), mai a `_notaExtraccio`, `_notaClassificacio` ni `figura`
(que farien trampes a qualsevol regex ingènua de `q\d+`, perquè `figura`
conté noms de fitxer com `q01_page10_....png`). Tampoc a `enunciat`,
`pista` ni `notaEditorial` de `preguntes-dades.js`, que no en contenen
cap — les connexions viuen totes dins de les guies (contingut nou, escrit
pel projecte), no dins dels enunciats originals del llibre.

**Verificat de manera independent abans d'acceptar la proposta**:
reimplementada l'extracció des de zero sobre `guies-dades.js` amb el
mateix criteri de camps. Resultat: **185 arestes úniques**, coincidència
exacta amb la xifra de la proposta. L'exemple citat (`q56 → q47`,
`q56 → q52`, un cicle de citació mútua de tres amb `q47` i `q52`) es
confirma literalment.

## 2. Per què 6 itineraris i no 10

Dividir també 3D en les mateixes 5 categories temàtiques dona, sobre les
115 visibles: circumferència-3D buida, i triangles/polígons/còniques-3D
amb 1-3 preguntes cadascuna —no dona per itinerari, i les poques que hi
ha (p. ex. «secció hexagonal d'un cub») estan temàticament cosides a la
resta de poliedres i projecció, no aïllades del seu tema. Per això 3D es
manté com un sisè itinerari sencer, sense subdividir.

## 3. Els vuit grups entrellaçats — bessones assenyalades, no micro-mòdul

La proposta identificava 8 grups (parelles o trios) on el graf de
citacions diu «aquestes preguntes van juntes» però la classificació
temàtica les reparteix entre itineraris diferents, i oferia dues maneres
de tractar-los a la UI sense triar-ne cap:

- **(a) Bessones assenyalades**: cada pregunta es queda al seu itinerari
  de sempre; la fitxa de detall marca «veure també: qXX (d'un altre
  itinerari)».
- **(b) Micro-mòdul**: les 2-3 preguntes del grup es tracten com una
  unitat pròpia, prèvia a entrar en qualsevol dels dos itineraris.

**Decisió confirmada per l'owner: (a).** Amb 8 grups tan petits
(majoritàriament parelles), el guany real de construir un micro-mòdul és
petit i la feina addicional no s'hi justifica.

Implementació: `window.ITINERARIS_GRUPS_ENTRELLACATS` (8 entrades, `ids` +
`nota` explicativa) i, per no obligar la UI a cercar-hi dins, cada
pregunta involucrada porta el seu propi camp `bessones` (ids de les
altres preguntes del mateix grup) directament a la seva entrada dins
`ITINERARIS_TEMATICS`.

| Grup | Itineraris que travessa | Nota |
|---|---|---|
| q31, q32, q33 | Triangles ↔ Polígons | Els "dos pentàgons" — el mateix dibuix, argumentat des de dos angles |
| q74, q90 | Triangles ↔ Polígons | Desigualtat triangular ↔ el seu ús en un quadrilàter |
| q39, q76 | Triangles ↔ Polígons | Àrea del pentàgon ↔ radi de la circumferència inscrita en un triangle |
| q96, q97, q98 | Còniques ↔ Altres | Propietat de reflexió de l'el·lipse, en dues variants |
| q53, q54, q55 | 3D ↔ Altres | Cavalieri en 3D i el seu anàleg en 2D |
| q101, q99 | 3D ↔ Altres | Projectiva: l'enunciat i el "treballa'n els detalls" |
| q109, q94 | 3D ↔ Circumferència | La circumferència com a el·lipse degenerada |
| q27_implicit, q40_implicit | Altres ↔ Circumferència | Les dues preguntes "implícites" |

## 4. q36 i q80 — sí que tenen itinerari

En amagar les 15 `EXERCICIS_AMAGATS`, dues preguntes es queden sense CAP
connexió (ni entrant ni sortint) al graf de les 115 visibles: `q36`
(«entre tots els rectangles de perímetre fix, el quadrat té l'àrea més
gran») i `q80` («àrea = (1/2)ab sin C»). Verificat de manera independent:
extracció pròpia del graf, 0 arestes totes dues sobre les visibles.

La proposta original no els assignava cap itinerari per aquest motiu,
assenyalant-ho explícitament com un efecte secundari real de la decisió
d'amagar preguntes, no com un error de l'anàlisi.

**Decisió: sí se'ls assigna un itinerari** — el de la seva pròpia
categoria temàtica oficial (`js/data/categories-tematiques-dades.js`,
`CLASSIFICACIO_TEMATICA`), que ja existia i que la proposta ja seguia
sense excepció per a la resta de 113 preguntes (verificat: **zero**
discrepàncies entre els 6 itineraris de la proposta i
`CLASSIFICACIO_TEMATICA` per a les altres 113). Concretament:

- `q36` → itinerari **Polígons** (`categoriaTematica: "poligons"`)
- `q80` → itinerari **Triangles** (`categoriaTematica: "triangles"`)

Totes dues hi entren amb `requereix: []` (cap prerequisit extern, perquè
no en tenen), exactament com qualsevol altra pregunta sense aresta
d'entrada. No assignar-les hauria estat l'única inconsistència de tot el
fitxer entre "com es classifica una pregunta" i "a quin itinerari va a
parar" — que no tinguin aresta que les connecti no és motiu per
tractar-les diferent de les altres 113.

## 5. Bug real trobat i corregit pel camí

En escriure les comprovacions d'integritat noves a `verifica_projecte.py`
(§6 més avall), calia llegir `window.CLASSIFICACIO_TEMATICA` amb el
mateix mètode senzill (`llegeix_global()`: `json.loads` de tot el text
que segueix `window.NOM = ` en un fitxer) que el script ja fa servir per
a altres variables. Va fallar: `categories-tematiques-dades.js` tenia un
comentari de documentació legítim (`§3. EXEMPLE D'ÚS`) situat **després**
del `];` de tancament, contingut no-JSON que trencava el parsing. Ningú
ho havia detectat fins ara perquè cap comprovació anterior havia intentat
llegir aquesta variable concreta amb aquest mètode — un bug preexistent,
no introduït per aquest lliurament, però destapat per ell.

Corregit movent aquell comentari **dins** de la capçalera del fitxer
(cap contingut perdut, només reubicat), i arreglant `llegeix_global()`
perquè s'aturi al proper `window.` de nivell superior si n'hi ha un
després, en lloc d'assumir que la variable demanada és sempre l'última
declaració del fitxer — límit real que també calia resoldre perquè
`itineraris-tematics-dades.js` declara dues variables globals pròpies.

## 6. Verificació automàtica

`verifica_projecte.py` (secció 12) comprova, cada vegada que s'executa:

- Cap id duplicat entre els 6 itineraris.
- Els 6 itineraris cobreixen exactament les 115 preguntes visibles (ni
  en falta cap, ni n'hi sobra cap d'amagada).
- Coherència total amb `CLASSIFICACIO_TEMATICA`: cada pregunta d'un
  itinerari 2D té la categoria oficial corresponent; cada pregunta de
  l'itinerari 3D té `dimensio == "3D"`.
- Cap `requereix` apunta a un id inexistent.
- Cap `bessones` apunta a un id fora dels itineraris.
- `ITINERARIS_GRUPS_ENTRELLACATS` només conté ids reals.

## 7. Pendent (fora d'abast d'aquest lliurament, a propòsit)

- Qualsevol UI que consumeixi aquestes dades: pàgina d'itineraris,
  selector a `llista.js`, badge de "veure també" a `detall.js` per als 8
  grups entrellaçats.
- Si mai `preguntes-dades.js` o `EXERCICIS_AMAGATS` canvien, aquest
  fitxer de dades s'ha de regenerar o revisar en paral·lel — no hi ha cap
  mecanisme automàtic que ho detecti més enllà del que la secció 12 de
  `verifica_projecte.py` ja cobreix (que fallaria de seguida si la
  cobertura deixa de ser exacta).
