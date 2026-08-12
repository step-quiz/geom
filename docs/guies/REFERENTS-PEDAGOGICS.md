# Referents pedagògics — taula de referència creuada

Fitxer nou, en la mateixa família que `NOTA-LOT-NN.md` i `REVISIONS.md`:
markdown pla, **append-only, mai analitzat per cap script**. Recull, per
consulta ràpida, quin `moviment` (o quina figura/pregunta concreta) és
l'evidència més forta de cada un dels vuit referents pedagògics que
`pedagogical-assessment-geom.md` (rebut com a document d'avaluació, no de
disseny — no forma part d'aquest repositori) mapeja contra aquest projecte.
Es manté a mà, actualitzat junt amb cada nota de lliurament (§11.2 d'aquell
document) — mai generat automàticament, exactament com `REVISIONS.md`.

**Com fer-lo servir:** si en escriure una guia nova et preguntes "això que
acabo de fer ja s'assembla a alguna cosa d'aquesta llista, o és realment
nou", mira aquí abans de decidir-ho a ull. I si mai vols saber "quanta
geometria de cercles hi ha realment, no només de nom", `#moviment=` amb el
nom que toqui a `js/ui/llista.js` ja et respon la pregunta amb les dades
reals — aquesta taula només t'hi porta.

---

## Els dos referents que no són per `moviment` — són l'estructura sencera

**Pedro Puig Adam** i **George Pólya** no es mapegen a moviments concrets
perquè no en són un: són el marc que fa que "moviment" existeixi com a
categoria. Cap guia sola n'és l'evidència; totes 68 ho són alhora.

- **Puig Adam** — el conveni tinta/sanguina (`docs/comu.js`, `INK`/`SANG`)
  i l'absència total de puntuació (`README.md`), a totes les 68 guies i
  a les 3 demos noves per igual.
- **Pólya** — l'escala de quatre nivells + comprovació ("mira enrere") a
  totes les 68 guies. Vegeu també les tres demos noves
  (`js/data/demos-dades.js`), que en són una VARIANT deliberada: mateixa
  veu, estructura de quatre moments diferent a propòsit (mai amaga la
  solució — v. `DEMO-PROOF-INTRO-DESIGN-NOTES.md` §0, "a deliberate,
  load-bearing exception").

---

## Taula creuada: `moviment` → referent → exemples reals

| Moviment | Referent principal | Preguntes (mostra, no exhaustiu) |
|---|---|---|
| `audita-la-demostracio` | **Hadamard** (rigor operatiu, no axiomàtic) / **Hilbert** (la mateixa preocupació, a escala d'una sola figura) | q15, q95 |
| `reflexio` | **Coxeter** (simetria com a eina de demostració) | q96 |
| `dilatacio` | **Coxeter** | q32 |
| `centre-per-simetria` | **Coxeter** | (1 guia, lot 1) |
| `simetria-i-demostra` | **Coxeter** / **Castelnuovo** (el plec com a "manipulació sentida" abans de formalitzar-la) | q10, q31, q36, q49, i demo-02 (nova) |
| `recompte-o-induccio` | **Grünbaum** (recompte exhaustiu de configuracions discretes) | q03 |
| `dues-maneres` aplicat a cercles | **Pedoe** | q22, q27_implicit, q40_implicit |
| `redueix-al-conegut` aplicat a cercles | **Pedoe** | q41 |
| `redueix-al-conegut` (resta de casos) | cap referent específic — és el moviment més repetit (14 guies), la columna vertebral tècnica del projecte, no lligat a un sol nom | q02, q04, q18a, q24, q29, q30, i demo-03 (nova) |

**Nota sobre `linia-no-enunciada`:** cap dels vuit referents hi correspon
directament — és una tècnica genèricament euclidiana (construir un
element auxiliar que l'enunciat no demana). Actualment a q16 i a demo-01
(nova).

---

## Grünbaum i Pedoe: coberts pel mapa, no encara per la densitat de contingut

Tal com diu l'avaluació (§7/§8/§11.1), la seva geometria de referència
(poliedres i mosaics per a Grünbaum; cercles i tangències per a Pedoe) ja
és present al roadmap (`HANDOFF-COMPLETAR-GUIES.md` §9, Lliurament 7) però
encara no és la majoria del contingut lliurat. Amb el lliurament 6 ja fet,
l'estat concret és:

- **Grünbaum**: `q03` (mosaics, `recompte-o-induccio`, lliurament 6) n'és
  ara la millor evidència delivered — abans del lliurament 6 la peça més
  Grünbaum-flavored del projecte era `fig-052` (els cinc poliedres
  regulars), i estava justament en revisió (rework del lliurament 5, ja
  fet i publicat).
- **Pedoe**: `q27_implicit`/`q40_implicit` (cercles tangents, lliurament
  6) hi afegeixen densitat real més enllà de q22/q41/q96, però el gruix
  del material de cercles i tangències que l'avaluació assenyala
  (`q43`, `q44`, potència de punt, inversió) continua al Lliurament 7,
  encara no fet.

**Acció concreta per al Lliurament 7** (§11.1/§11.3 de l'avaluació, aplicada
—no com a contingut nou fabricat ara, només com a criteri d'ordenació i
d'etiquetatge quan aquell lliurament es faci de debò):
- Proposar `q43`/`q44` (Pedoe) i les preguntes de sòlids-dins-de-sòlids
  (Grünbaum-adjacent) **primer** dins del lot, no necessàriament en ordre
  estricte de pàgina.
- Si alguna guia nova d'aquell lot fa una argumentació de potència de punt
  o d'inversió, nomenar-ho amb un `moviment` propi (p. ex.
  `potencia-i-inversio`) en lloc de forçar-ho dins de `dues-maneres` —
  només si la tècnica ho justifica de debò, seguint la mateixa disciplina
  que ja regeix `recompte-o-induccio` (v. `NOTA-LOT-6.md`): un moviment
  nou es documenta explícitament a la nota de lliurament corresponent,
  mai en silenci.

---

## Els altres tres: estat honest

- **Castelnuovo** — disciplina de procés per a qui escriu la guia
  ("moviment, després escala, després figura"), no experiència manipulable
  per a l'alumne. Sense canvis d'arquitectura previstos (v. la nota nova a
  `README.md`, taula "no hi ha, i per què").
- **Hilbert** — present com a absència defensable: tot l'aparell depèn del
  dibuix, mai n'és independent. `audita-la-demostracio` és l'única
  esquerda real cap al seu tipus de rigor, i ho és a escala d'una sola
  figura, no d'un sistema.
- **Coxeter** — matèria i registre visual presents (poliedres, reflexió,
  dilatació); l'aparell de grups de reflexió pròpiament dit, absent —
  esperable donat el nivell del llibre font (secundària inicial).

---

*Actualitzat per última vegada: lliurament 6 + les millores de glossari,
itinerari i demo-intro. Pròxima actualització: quan es lliuri el
Lliurament 7.*
