# HANDOFF — Lliurament 9 (projecció i còniques)

**Per a:** una IA Claude, cold start, amb accés al projecte `geom` sencer
(el ZIP complet, no un diff) i a aquest document.
**De:** l'agent que ha completat els lliuraments 5–8 i les tres millores
transversals (glossari, itinerari, intro "què és una demostració").
**Estat del projecte en aquest moment:** 97 de 130 preguntes tenen guia.
**La teva feina:** el Lliurament 9 — 17 preguntes, pp. 138–175, projecció i
còniques. **Un altre agent, en paral·lel i sense contacte amb tu, farà el
Lliurament 10 al mateix moment, partint del mateix estat del projecte.**
La secció 0 d'aquest document explica per què això importa i què has de
fer (i NO fer) per no trepitjar-vos.

---

## 0. Ets un de dos — llegeix això abans de res

Un agent bessó, en una conversa completament separada, ha rebut el mateix
projecte i un handoff germà (`HANDOFF-LLIURAMENT-10.md`) per fer les 16
preguntes restants (pp. 177–193). Cap dels dos té accés a l'altre. Els
dos lliurareu, per separat, un ZIP diff a la persona que gestiona el
projecte — serà ella qui ajunti els dos resultats, no vosaltres.

Això té una conseqüència concreta i real: **quatre fitxers compartits es
tocaran per totes dues bandes, i el diff resultant NO es podrà ajuntar
per simple superposició.** Concretament:

- `docs/manifest-figures.tsv` — tu hi afegiràs 17 files noves (v. §3, ja
  amb els números exactes assignats). L'altre agent n'hi afegirà 16 de
  diferents. Com que tots dos partiu del mateix fitxer de 98 files i cada
  un lliura NOMÉS la seva pròpia versió (98+17 files, o 98+16 files), la
  versió final —amb totes 131 files— l'haurà de muntar la persona que
  ajunti els dos ZIPs, concatenant les teves 17 files noves i les seves
  16 sobre l'original de 98. **Tu no has de fer res especial per
  això** — limita't a deixar el teu propi manifest correcte i complet des
  del teu punt de vista (98+17=115 files), exactament com si fossis
  l'única persona treballant-hi.
- `parse_guies.py` — hi afegiràs una entrada a `LOTS` per a
  `GUIES-LOT-9.md`. L'altre agent hi afegirà la seva pròpia entrada per a
  `GUIES-LOT-10.md`, de manera independent. Cap dels dos vist per
  separat inclourà l'entrada de l'altre — això és normal i esperat, no
  ho intentis solucionar. Afegeix la teva entrada **al final de la llista
  `LOTS`**, després de l'entrada del lot 8, perquè ajuntar-les després
  sigui trivial (només cal conservar totes dues línies noves alhora).
- `js/data/guies-dades.js` — es regenera sencer cada cop que s'executa
  `parse_guies.py`. La versió que tu generaràs i lliuraràs tindrà 97+17=114
  guies (li faltaran les 16 del lot 10, que no existeixen encara a la
  teva còpia del projecte). Això és correcte i esperat pel teu propi
  lliurament — **no és la versió final**. Un cop la persona que gestiona
  el projecte ajunti els dos `GUIES-LOT-N.md` (el 9 i el 10) al mateix
  repositori, caldrà tornar a executar `parse_guies.py` una última vegada
  perquè surtin les 130 guies senceres. Digue-ho amb aquestes paraules a
  la teva nota de lliurament, perquè ningú es pensi que el teu
  `guies-dades.js` ja és el definitiu.
- `README.md` — **no el toquis.** El comptador "97 de 130" s'actualitzarà
  un sol cop, al final, quan totes dues parts ja estiguin ajuntades. Si
  tu hi escrius "114 de 130" i l'altre agent hi escriu "113 de 130",
  cap de les dues xifres serà mai correcta, i alguna es perdrà igualment
  en ajuntar els ZIPs. Deixa'l tal com està.

**Numeració de figures: ja resolta, no la reinventis.** El projecte
arriba fins a `fig-098`. Les figures del Lliurament 9 són `fig-099` a
`fig-115` (17 números), en aquest ORDRE EXACTE (v. taula §3) — no
alfabètic, no per dificultat, sinó l'ordre en què apareixen a la teva
pròpia llista de preguntes. El Lliurament 10 fa servir `fig-116` a
`fig-131`. Aquesta partició ja garanteix que cap dels dos lliuraments
xoqui mai en cap número de figura — no cal que ho comprovis ni que ho
negociïs, ja està decidit en aquest mateix document.

**`docs/guies/REVISIONS.md` i `docs/guies/REFERENTS-PEDAGOGICS.md`**:
són fitxers *append-only* compartits també. Si tens alguna cosa a
apuntar-hi (per exemple, si el teu lot resulta ser un bon exemple d'algun
dels vuit referents pedagògics de `pedagogical-assessment-geom.md` — i
projecció/còniques probablement ho és, per a Coxeter), **no els editis
directament**: anota-ho a la teva pròpia `NOTA-LOT-9.md` i digues
explícitament que caldria afegir-ho a `REFERENTS-PEDAGOGICS.md` en un
futur pas. Mateix motiu que els quatre fitxers de dalt.

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
   com s'han resolt problemes semblants abans: `docs/guies/NOTA-LOT-7.md`
   i `docs/guies/NOTA-LOT-8.md` (els dos lots més pesats en 3D i en
   contingut nou — el teu s'hi assembla més que als lots 1–4).
   `docs/guies/GUIES-LOT-7.md` i `GUIES-LOT-8.md` són les mostres de veu
   més properes al que hauràs d'escriure.
5. **`docs/publish_figures.py`** — el pas de publicació REAL que fa
   servir el projecte (esborrat del segell per diferència de renders, no
   per llindar de color). Si `HANDOFF-COMPLETAR-GUIES.md` suggereix cap
   altra tècnica per a aquest pas, ignora-ho: `publish_figures.py` és la
   versió que ha sobreviscut a la pràctica.

---

## 2. El teu lliurament, en una frase

Disseny i redacció de **17 guies de demostració noves** (quatre nivells
de pista + comprovació + "i després", cadascuna) i les seves figures a
mà, per a les preguntes q91–q111 (pàgines 138–175 del llibre), seguint
**estrictament l'ordre del llibre** — v. §4, aquesta és l'única franja de
tot el projecte on l'ordre no es pot alterar.

---

## 3. Les 17 preguntes, en ordre, amb el número de figura ja assignat

| # | id | pàg. | dim. | dif. | fig. |
|---|---|---|---|---|---|
| 1 | q91 | — | 3D | 2 | fig-099 |
| 2 | q92 | — | 3D | 2 | fig-100 |
| 3 | q93 | — | 3D | 2 | fig-101 |
| 4 | q94 | — | 2D | 1 | fig-102 |
| 5 | q99 | — | 2D | 3 | fig-103 |
| 6 | q100 | — | 3D | 2 | fig-104 |
| 7 | q101 | — | 3D | 3 | fig-105 |
| 8 | q102 | — | 3D | 2 | fig-106 |
| 9 | q103 | — | 3D | 2 | fig-107 |
| 10 | q104 | — | 3D | 2 | fig-108 |
| 11 | q105 | — | 3D | 1 | fig-109 |
| 12 | q106 | — | 3D | 3 | fig-110 |
| 13 | q107 | — | 3D | 3 | fig-111 |
| 14 | q108 | — | 3D | 1 | fig-112 |
| 15 | q109 | — | 3D | 3 | fig-113 |
| 16 | q110 | — | 2D | 2 | fig-114 |
| 17 | q111 | — | 2D | 2 | fig-115 |

(Pàgines: consulta `js/data/preguntes-dades.js` per l'enunciat exacte,
la pàgina i qualsevol `_notaClassificacio` de cada id — és la font de
veritat, no aquesta taula.)

**Comprova tu mateix, abans de començar**, que cap d'aquests 17 ids ja té
guia (`grep` a `js/data/guies-dades.js` o mira `docs/manifest-figures.tsv`).
En el moment d'escriure aquest handoff, cap dels 17 en té — però si el
projecte ha canviat entre aquest moment i el teu arrencament, confia en
el que trobis al repositori, no en aquest document.

---

## 4. Per què l'ordre del llibre és obligatori aquí (a diferència de la resta)

En tots els lots anteriors, l'agent ha pogut —i sovint ha convingut—
reordenar les preguntes dins d'un lot per raons de dependència real
(v. `NOTA-LOT-6.md`, `NOTA-LOT-8.md` per exemples explícits d'això). **Aquí
no.** Aquesta franja del llibre és la més interdependent de tot el
projecte:

- **q101–q106 construeixen la raó doble (cross-ratio) i els punts a
  l'infinit de manera acumulativa** — cada guia dona per fet el que
  l'anterior ja ha establert. Reordenar-les trencaria l'argument, no
  només l'estil.
- **q109 (les esferes de Dandelin) depèn de q107.** No la posis abans.
- **q94 i q109 tracten la MATEIXA el·lipse, però amb classificacions
  `dimensio` diferents a propòsit**: q94 és 2D, dificultat 1 (el cas
  degenerat/trivial on els dos focus coincideixen al centre — és a dir,
  quan l'"el·lipse" és en realitat un cercle); q109 és 3D, dificultat 3
  (la demostració de Dandelin que una secció cònica és de veritat una
  el·lipse, amb focus concrets, tallant un con amb dues esferes). Són
  preguntes genuïnament diferents que comparteixen figura mental, no la
  mateixa pregunta repetida — la teva guia de cadascuna no ha de
  contradir aquesta distinció (per exemple, no citis q109 com si fos
  "el mateix" que q94 a la seva "i després": relaciona-les, però marca
  clarament que una és el cas trivial i l'altra la demostració general).

Fora d'aquestes cadenes, tens llibertat per triar el `moviment` de
cadascuna (reaplicant el vocabulari ja establert sempre que sigui fidel a
l'argument real — mai forçant una pregunta dins d'un moviment que no li
correspon).

---

## 5. Els tres sistemes nous — què n'has de fer (poc, i és senzill)

Des de `HANDOFF-COMPLETAR-GUIES.md`, s'han afegit tres coses noves al
lloc. Cap no necessita que les toquis, però has de saber què són perquè
no et sorprenguin en explorar el codi:

- **Glossari** (`js/data/glossari-dades.js`, `js/nucli/glossari.js`,
  `js/ui/glossari.js`): detecta termes dins dels enunciats i en mostra la
  definició. **No hi afegeixis termes nous en aquest lliurament**, encara
  que la projecció/còniques introdueixin vocabulari genuïnament nou
  (punt a l'infinit, raó doble, focus, directriu...). Fes-los servir en
  català natural dins de les teves guies (v. §6 sobre terminologia), i
  si et sembla que un terme concret mereixeria una entrada de glossari
  formal, anota-ho a la teva nota de lliurament — és una decisió de
  contingut que cal prendre a part, no dins d'aquest lliurament ja prou
  ple.
- **Itinerari** (`js/nucli/itinerari.js`): motor de recomanació que
  llegeix el camp `moviment` de `guies-dades.js` automàticament. Les
  teves 17 guies noves hi participaran soles, sense que hagis de tocar
  cap fitxer d'aquest sistema.
- **Intro "què és una demostració"** (`js/data/demos-dades.js`,
  `#demo`): tres demostracions fixes, no relacionades amb el teu lot. No
  cal que les toquis ni que les esmentis.

---

## 6. Terminologia — consistència amb el que ja existeix

Abans d'inventar cap traducció, mira si el terme ja té una forma oficial:

- `js/data/glossari-dades.js` (**53 termes** ja fixats, ampliats des que es
  va escriure aquest handoff — triangle
  equilàter/isòsceles/escalè, bisectriu, mediana, cercles inscrit/
  circumscrit, etc.)
- `docs/guies/GUIES-LOT-7.md` i `GUIES-LOT-8.md` per com es parla, en
  aquest projecte, d'angles diedres, del teorema del cosinus, de la
  trigonometria en general (sinus, cosinus ja hi són establerts).

Per a vocabulari genuïnament nou d'aquest lot (projecció, perspectiva,
punt de fuga, raó doble, secció cònica, focus, directriu, esfera de
Dandelin...), fes servir el català matemàtic estàndard i sigues
consistent tu mateix si el mateix terme apareix en diverses guies — no
cal que preguntis per cada paraula.

**Castellanisme ja documentat i que cal vigilar activament**: "después"
en lloc de "després". `verifica_projecte.py` ho detecta automàticament a
qualsevol `.md` dins de `docs/guies/` — fes-lo servir com a xarxa de
seguretat, no com a única comprovació.

---

## 7. El procés, pas a pas (idèntic al de sempre, resumit aquí per completesa)

1. Per a cada pregunta amb imatge font (`js/data/preguntes-dades.js`,
   camp `imatge`), fes `view` de l'escaneig ABANS de dissenyar la figura
   — mai donis per fet que t'imagines correctament el dibuix. **Nota
   concreta**: `q105`, `q107` i `q114` (aquesta última és del lot 10, no
   teva) són retalls de pàgina real (grisos, tipografia real), no dibuix
   net — mira'ls amb cura extra.
2. Escriu el text de la guia (4 pistes + comprovació + "i després") en
   un fitxer `docs/guies/GUIES-LOT-9.md`, seguint exactament el format
   dels lots anteriors (capçalera, taula de convencions si vols, un `##`
   per pregunta amb l'enunciat en anglès i la traducció catalana en cita).
3. Dissenya i escriu el codi de les figures a `docs/guies/figures-09.html`
   (mateix patró que `figures-07.html`/`figures-08.html`): tinta = la
   figura donada, sanguina = el que hi afegeix la pista.
4. Renderitza (`node render.js guies/figures-09.html <sortida>` des de
   `docs/`), revisa CADA figura visualment (no confiïs en "cap error JS"
   com a senyal de correcció geomètrica — als lots 7 i 8 hi va haver
   errors reals de retallat de marge i d'angles marcats al vèrtex
   equivocat que només es van veure mirant la imatge).
5. Publica (`docs/publish_figures.py`, mètode per diferència de
   renders): genera una variant "neta" (sense segell) del mateix fitxer
   de figures, renderitza totes dues, i aplica `erase_stamp_by_diff` +
   `whiten_background`.
6. Copia les PNG publicades a `assets/img/pistes/`.
7. Afegeix les 17 files noves a `docs/manifest-figures.tsv` (números
   `099`–`115`, `lot`=9, `rev`=0).
8. Afegeix `(rel("docs/guies/GUIES-LOT-9.md"), 9)` **al final** de la
   llista `LOTS` a `parse_guies.py`, i executa'l. Ha de dir
   `problemes: 0`. **Comprova explícitament** que les 97 guies existents
   no han canviat (compara el `guies-dades.js` d'abans i el de després,
   com fan totes les notes de lliurament anteriors) — només hi han
   d'aparèixer les 17 noves.
9. `python3 verifica_projecte.py` → ha de dir `Tot correcte.`
10. Playwright sobre `file://index.html#<id>` per a totes les preguntes
    amb guia que tinguis disponibles (les 97 existents + les teves 17) —
    4 passos, peu visible, cap imatge trencada, 0 errors de consola.
11. Escriu `docs/guies/NOTA-LOT-9.md`: què hi ha, decisions preses,
    bugs trobats i corregits, coses de les quals no estàs segur —
    inclou-hi EXPLÍCITAMENT els tres avisos de fusió de la secció 0
    (manifest, parse_guies.py, guies-dades.js parcial).
12. Empaqueta un ZIP diff — **només fitxers nous o modificats respecte
    de l'estat original del projecte que has rebut**, respectant la
    jerarquia de directoris. Mètode recomanat (el que ja s'ha fet servir
    en tots els lliuraments anteriors): compara per hash de contingut
    contra l'estat original rebut, no només per nom de fitxer.

---

## 8. Definició de "fet" per a AQUEST lliurament (no per al projecte sencer)

- Les 17 guies existeixen, amb 4 pistes + comprovació + "i després"
  cadascuna, cap donant mai la solució directament.
- `python3 parse_guies.py` (amb la teva entrada afegida) diu
  `problemes: 0`.
- `python3 verifica_projecte.py` diu `Tot correcte.`
- Playwright confirma 4 passos + peu + cap imatge trencada sobre les
  97+17=114 preguntes amb guia disponibles al teu costat.
- `docs/manifest-figures.tsv` té les teves 17 files noves, `099`–`115`,
  sense buits ni números repetits DINS del teu propi lliurament.
- La teva `NOTA-LOT-9.md` explica clarament els tres punts de fusió
  pendents (§0) perquè qui ajunti els dos ZIPs sàpiga exactament què fer.

**No és definició de "fet" per al projecte sencer** — falten les 16
preguntes del Lliurament 10, que arribaran per una altra via. No
esperis, ni intentis simular, que el teu `README.md` o el teu
`guies-dades.js` reflecteixin les 130.
