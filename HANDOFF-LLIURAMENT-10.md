# HANDOFF — Lliurament 10 (corbes, final del llibre)

**Per a:** una IA Claude, cold start, amb accés al projecte `geom` sencer
(el ZIP complet, no un diff) i a aquest document.
**De:** l'agent que ha completat els lliuraments 5–8 i les tres millores
transversals (glossari, itinerari, intro "què és una demostració").
**Estat del projecte en aquest moment:** 97 de 130 preguntes tenen guia.
**La teva feina:** el Lliurament 10 — 16 preguntes, pp. 177–193, el final
del llibre. **Un altre agent, en paral·lel i sense contacte amb tu, farà
el Lliurament 9 al mateix moment, partint del mateix estat del
projecte.** La secció 0 d'aquest document explica per què això importa i
què has de fer (i NO fer) per no trepitjar-vos.

---

## 0. Ets un de dos — llegeix això abans de res

Un agent bessó, en una conversa completament separada, ha rebut el mateix
projecte i un handoff germà (`HANDOFF-LLIURAMENT-9.md`) per fer 17
preguntes anteriors (pp. 138–175, projecció i còniques). Cap dels dos té
accés a l'altre. Els dos lliurareu, per separat, un ZIP diff a la
persona que gestiona el projecte — serà ella qui ajunti els dos
resultats, no vosaltres.

Això té una conseqüència concreta i real: **quatre fitxers compartits es
tocaran per totes dues bandes, i el diff resultant NO es podrà ajuntar
per simple superposició.** Concretament:

- `docs/manifest-figures.tsv` — tu hi afegiràs 16 files noves (v. §3, ja
  amb els números exactes assignats). L'altre agent n'hi afegirà 17 de
  diferents. Com que tots dos partiu del mateix fitxer de 98 files i cada
  un lliura NOMÉS la seva pròpia versió (98+16 files, o 98+17 files), la
  versió final —amb totes 131 files— l'haurà de muntar la persona que
  ajunti els dos ZIPs, concatenant les teves 16 files noves i les seves
  17 sobre l'original de 98. **Tu no has de fer res especial per
  això** — limita't a deixar el teu propi manifest correcte i complet des
  del teu punt de vista (98+16=114 files), exactament com si fossis
  l'única persona treballant-hi.
- `parse_guies.py` — hi afegiràs una entrada a `LOTS` per a
  `GUIES-LOT-10.md`. L'altre agent hi afegirà la seva pròpia entrada per a
  `GUIES-LOT-9.md`, de manera independent. Cap dels dos vist per separat
  inclourà l'entrada de l'altre — això és normal i esperat, no ho
  intentis solucionar. Afegeix la teva entrada **al final de la llista
  `LOTS`**, després de l'entrada del lot 8, perquè ajuntar-les després
  sigui trivial (només cal conservar totes dues línies noves alhora).
- `js/data/guies-dades.js` — es regenera sencer cada cop que s'executa
  `parse_guies.py`. La versió que tu generaràs i lliuraràs tindrà
  97+16=113 guies (li faltaran les 17 del lot 9, que no existeixen encara
  a la teva còpia del projecte). Això és correcte i esperat pel teu
  propi lliurament — **no és la versió final**. Un cop la persona que
  gestiona el projecte ajunti els dos `GUIES-LOT-N.md` (el 9 i el 10) al
  mateix repositori, caldrà tornar a executar `parse_guies.py` una última
  vegada perquè surtin les 130 guies senceres. Digue-ho amb aquestes
  paraules a la teva nota de lliurament, perquè ningú es pensi que el teu
  `guies-dades.js` ja és el definitiu.
- `README.md` — **no el toquis.** El comptador "97 de 130" s'actualitzarà
  un sol cop, al final, quan totes dues parts ja estiguin ajuntades. Si
  tu hi escrius "113 de 130" i l'altre agent hi escriu "114 de 130", cap
  de les dues xifres serà mai correcta, i alguna es perdrà igualment en
  ajuntar els ZIPs. Deixa'l tal com està.

**Numeració de figures: ja resolta, no la reinventis.** El projecte
arriba fins a `fig-098`. Les figures del Lliurament 9 (l'altre agent)
són `fig-099` a `fig-115`. **Les teves són `fig-116` a `fig-131`** (16
números), en aquest ORDRE EXACTE (v. taula §3) — no alfabètic, no per
dificultat, sinó l'ordre en què apareixen a la teva pròpia llista de
preguntes (que, a diferència del Lliurament 9, aquí SÍ pots reordenar
internament si trobes una raó de dependència real — v. §4). Aquesta
partició ja garanteix que cap dels dos lliuraments xoqui mai en cap
número de figura — no cal que ho comprovis ni que ho negociïs, ja està
decidit en aquest mateix document.

**`docs/guies/REVISIONS.md` i `docs/guies/REFERENTS-PEDAGOGICS.md`**:
són fitxers *append-only* compartits també. Si tens alguna cosa a
apuntar-hi (per exemple, q121 —quadratura de la paràbola
d'Arquimedes— és un candidat natural per a Hadamard/mètode d'exhaustió a
`pedagogical-assessment-geom.md`), **no els editis directament**: anota-ho
a la teva pròpia `NOTA-LOT-10.md` i digues explícitament que caldria
afegir-ho a `REFERENTS-PEDAGOGICS.md` en un futur pas. Mateix motiu que
els quatre fitxers de dalt.

---

## 1. Orientació — què llegir, i en quin ordre

Aquest document NO repeteix el que ja hi ha escrit. Llegeix, en aquest
ordre, abans de dissenyar cap guia:

1. **`HANDOFF-COMPLETAR-GUIES.md`** (arrel del repo) — el document
   original que regeix tot el projecte: el conveni tinta/sanguina, els
   quatre nivells de pista, el que mai s'ha de fer (donar la solució,
   ratllar amb regle, etc.), el protocol de lliurament complet. Aquest
   handoff n'és una continuació, no un substitut — tot el que diu allà
   segueix vigent aquí, sense excepcions.
2. **`docs/HAND_DRAWN_GEOMETRY_TECHNIQUE.md`** — la tècnica de dibuix a
   mà (jitter, `INK`/`SANG`, `docs/comu.js`, `docs/hand-draw.js`).
3. **`PROJECTES-TECHNICAL-REFERENCE.md`** §9 — el que s'ha afegit
   DESPRÉS de `HANDOFF-COMPLETAR-GUIES.md`: el glossari, l'itinerari, i
   la intro "què és una demostració". Cap d'aquests tres sistemes necessita
   que hi facis res per al teu lliurament (v. §5 més avall), però has de
   saber que hi són perquè el teu treball hi conviu.
4. **Les notes de lliurament més recents**, per calibrar veu i per veure
   com s'han resolt problemes semblants abans: `docs/guies/NOTA-LOT-6.md`
   (moltes preguntes 2D com les teves, i un cas de moviment inferit sense
   escaneig, q64 — el teu lot en té un de semblant, q127, v. §4) i
   `docs/guies/NOTA-LOT-8.md`. `docs/guies/GUIES-LOT-6.md` i
   `GUIES-LOT-8.md` són bones mostres de veu per a contingut
   majoritàriament 2D com el teu.
5. **`docs/publish_figures.py`** — el pas de publicació REAL que fa
   servir el projecte (esborrat del segell per diferència de renders, no
   per llindar de color). Si `HANDOFF-COMPLETAR-GUIES.md` suggereix cap
   altra tècnica per a aquest pas, ignora-ho: `publish_figures.py` és la
   versió que ha sobreviscut a la pràctica.

---

## 2. El teu lliurament, en una frase

Disseny i redacció de **16 guies de demostració noves** (quatre nivells
de pista + comprovació + "i després", cadascuna) i les seves figures a
mà, per a les preguntes q112–q127 (pàgines 177–193 del llibre, el final).

---

## 3. Les 16 preguntes, amb el número de figura ja assignat

| id | dim. | dif. | fig. |
|---|---|---|---|
| q112 | 2D | 2 | fig-116 |
| q113 | 2D | 2 | fig-117 |
| q114 | 2D | 2 | fig-118 |
| q115 | 2D | 2 | fig-119 |
| q116 | 2D | 3 | fig-120 |
| q117 | 2D | 1 | fig-121 |
| q118 | 2D | 3 | fig-122 |
| q119 | 2D | 3 | fig-123 |
| q120 | 2D | 2 | fig-124 |
| q121 | 2D | 3 | fig-125 |
| q122 | 2D | 1 | fig-126 |
| q123 | 3D | 3 | fig-127 |
| q124 | 2D | 3 | fig-128 |
| q125 | 2D | 1 | fig-129 |
| q126 | 3D | 2 | fig-130 |
| q127 | 2D | 3 | fig-131 |

(Consulta `js/data/preguntes-dades.js` per l'enunciat exacte, la pàgina i
qualsevol `_notaClassificacio` de cada id — és la font de veritat, no
aquesta taula. La correspondència id→número de figura sí que és fixa i
val la pena seguir-la tal qual perquè no col·lisioni amb el Lliurament 9.)

**Comprova tu mateix, abans de començar**, que cap d'aquests 16 ids ja té
guia. En el moment d'escriure aquest handoff, cap dels 16 en té — però si
el projecte ha canviat entre aquest moment i el teu arrencament, confia
en el que trobis al repositori, no en aquest document.

---

## 4. Notes de contingut — dues preguntes que necessiten cura extra

- **q121 — la quadratura de la paràbola d'Arquimedes.** És un mètode
  d'exhaustió (sumar infinits triangles cada cop més petits i reconèixer
  cap a on tendeix la suma) — el mateix esperit que ja vas fer servir
  (si ets tu qui fa aquest lot després del 7 i el 8) a `cas-limit` (q50,
  q64), però amb un sabor propi prou fort com per merèixer, potser, un
  `moviment` nou (per exemple `exhauriment` o `suma-infinita`). Si
  decideixes introduir-ne un de nou, segueix la disciplina ja establerta
  a `NOTA-LOT-6.md` (q03, `recompte-o-induccio`): documenta'l
  explícitament a la teva nota de lliurament, mai en silenci, i confirma
  que no n'hi ha cap d'existent que ja serveixi abans de crear-ne un.
- **q123 (hèlix) i q127 (el bastó que rellisca i traça un astroide amb el
  seu punt mitjà)** necessiten una idea genuïnament nova cadascuna i
  seran, amb tota probabilitat, les més difícils d'escriure bé de tot
  el lot. Sobre q127 concretament: **si vas fer (o algú va fer) el
  Lliurament 7, fixa't que q64 d'aquell lot ja tracta la MATEIXA
  configuració** (el bastó lliscant entre paret i terra) — però
  preguntant pel PERÍMETRE de la regió escombrada (l'envolupant
  sencera), mentre que q127 pregunta només per la corba que traça el
  PUNT MITJÀ del bastó (una circumferència de radi la meitat del bastó,
  un resultat molt més senzill i completament elemental —es demostra amb
  el mateix fet que "la mediana a la hipotenusa d'un triangle rectangle
  val la meitat de la hipotenusa", ja establert al projecte). No calen
  les eines de fora del quadern que calien a q64 — aquesta és,
  literalment, més fàcil que la seva germana, tot i venir després al
  llibre. Aprofita `assets/img/` per si hi ha algun escaneig relacionat
  amb aquesta pregunta abans de dissenyar-la de zero.

Fora d'aquests dos casos, tens llibertat per triar el `moviment` de
cadascuna (reaplicant el vocabulari ja establert sempre que sigui fidel a
l'argument real) i per reordenar la llista internament si trobes una
raó de dependència real entre preguntes properes — a diferència del
Lliurament 9, aquesta franja del llibre no té l'avís explícit de "l'ordre
del llibre és obligatori".

---

## 5. Els tres sistemes nous — què n'has de fer (poc, i és senzill)

Des de `HANDOFF-COMPLETAR-GUIES.md`, s'han afegit tres coses noves al
lloc. Cap no necessita que les toquis, però has de saber què són perquè
no et sorprenguin en explorar el codi:

- **Glossari** (`js/data/glossari-dades.js`, `js/nucli/glossari.js`,
  `js/ui/glossari.js`): detecta termes dins dels enunciats i en mostra la
  definició. **No hi afegeixis termes nous en aquest lliurament.**
  Fes-los servir en català natural dins de les teves guies, i si et
  sembla que un terme concret mereixeria una entrada de glossari formal,
  anota-ho a la teva nota de lliurament.
- **Itinerari** (`js/nucli/itinerari.js`): motor de recomanació que
  llegeix el camp `moviment` de `guies-dades.js` automàticament. Les
  teves 16 guies noves hi participaran soles, sense que hagis de tocar
  cap fitxer d'aquest sistema.
- **Intro "què és una demostració"** (`js/data/demos-dades.js`,
  `#demo`): tres demostracions fixes, no relacionades amb el teu lot. No
  cal que les toquis ni que les esmentis.

**Nota especial per a tu**: com que ets el darrer lot del llibre (q127 és
la darrera pregunta), val la pena que, a la teva nota de lliurament,
recordis explícitament a qui reculli el resultat final que —un cop
ajuntats els dos lliuraments— ja es compleix la "definició de fet per a
tot el projecte" de `HANDOFF-COMPLETAR-GUIES.md` §11 (130 de 130), i que
cal el pas final descrit allà: actualitzar `README.md` de debò, i
revisar que `docs/guies/REVISIONS.md` reculli tot comentari humà rebut
fins ara.

---

## 6. Terminologia — consistència amb el que ja existeix

Abans d'inventar cap traducció, mira si el terme ja té una forma oficial:

- `js/data/glossari-dades.js` (**53 termes** ja fixats, ampliats des que es
  va escriure aquest handoff).
- `docs/guies/GUIES-LOT-6.md` per l'estil de preguntes 2D properes en
  esperit a les teves (mosaics, recomptes, casos límit).

Per a vocabulari genuïnament nou d'aquest lot (paràbola, el·lipse, hèlix,
envolupant, exhaustió...), fes servir el català matemàtic estàndard i
sigues consistent tu mateix si el mateix terme apareix en diverses guies.

**Castellanisme ja documentat i que cal vigilar activament**: "después"
en lloc de "després". `verifica_projecte.py` ho detecta automàticament a
qualsevol `.md` dins de `docs/guies/`.

---

## 7. El procés, pas a pas (idèntic al de sempre, resumit aquí per completesa)

1. Per a cada pregunta amb imatge font (`js/data/preguntes-dades.js`,
   camp `imatge`), fes `view` de l'escaneig ABANS de dissenyar la figura
   — mai donis per fet que t'imagines correctament el dibuix.
2. Escriu el text de la guia (4 pistes + comprovació + "i després") a
   `docs/guies/GUIES-LOT-10.md`, seguint exactament el format dels lots
   anteriors.
3. Dissenya i escriu el codi de les figures a
   `docs/guies/figures-10.html` (mateix patró que `figures-08.html`):
   tinta = la figura donada, sanguina = el que hi afegeix la pista.
4. Renderitza (`node render.js guies/figures-10.html <sortida>` des de
   `docs/`), revisa CADA figura visualment — no confiïs en "cap error
   JS" com a senyal de correcció geomètrica.
5. Publica (`docs/publish_figures.py`, mètode per diferència de
   renders): genera una variant "neta" (sense segell) del mateix fitxer
   de figures, renderitza totes dues, i aplica `erase_stamp_by_diff` +
   `whiten_background`.
6. Copia les PNG publicades a `assets/img/pistes/`.
7. Afegeix les 16 files noves a `docs/manifest-figures.tsv` (números
   `116`–`131`, `lot`=10, `rev`=0).
8. Afegeix `(rel("docs/guies/GUIES-LOT-10.md"), 10)` **al final** de la
   llista `LOTS` a `parse_guies.py`, i executa'l. Ha de dir
   `problemes: 0`. **Comprova explícitament** que les 97 guies existents
   no han canviat.
9. `python3 verifica_projecte.py` → ha de dir `Tot correcte.`
10. Playwright sobre `file://index.html#<id>` per a totes les preguntes
    amb guia que tinguis disponibles (les 97 existents + les teves 16) —
    4 passos, peu visible, cap imatge trencada, 0 errors de consola.
11. Escriu `docs/guies/NOTA-LOT-10.md`: què hi ha, decisions preses,
    bugs trobats i corregits, coses de les quals no estàs segur —
    inclou-hi EXPLÍCITAMENT els tres avisos de fusió de la secció 0.
12. Empaqueta un ZIP diff — **només fitxers nous o modificats respecte
    de l'estat original del projecte que has rebut**, respectant la
    jerarquia de directoris. Mètode recomanat: compara per hash de
    contingut contra l'estat original rebut, no només per nom de fitxer
    (un fitxer compartit —com `parse_guies.py`— pot aparèixer "ja
    lliurat" per nom en un ZIP anterior i tot i així tenir contingut nou
    que cal incloure).

---

## 8. Definició de "fet" per a AQUEST lliurament (no per al projecte sencer)

- Les 16 guies existeixen, amb 4 pistes + comprovació + "i després"
  cadascuna, cap donant mai la solució directament.
- `python3 parse_guies.py` (amb la teva entrada afegida) diu
  `problemes: 0`.
- `python3 verifica_projecte.py` diu `Tot correcte.`
- Playwright confirma 4 passos + peu + cap imatge trencada sobre les
  97+16=113 preguntes amb guia disponibles al teu costat.
- `docs/manifest-figures.tsv` té les teves 16 files noves, `116`–`131`,
  sense buits ni números repetits DINS del teu propi lliurament.
- La teva `NOTA-LOT-10.md` explica clarament els tres punts de fusió
  pendents (§0) perquè qui ajunti els dos ZIPs sàpiga exactament què fer.

**No és definició de "fet" per al projecte sencer** — falten les 17
preguntes del Lliurament 9, que arribaran per una altra via. No esperis,
ni intentis simular, que el teu `README.md` o el teu `guies-dades.js`
reflecteixin les 130 — però sí que val la pena que la teva nota de
lliurament apunti clarament cap al pas final (§5, nota especial).
