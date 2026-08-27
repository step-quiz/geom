# Documents de disseny citats al codi — quins hi són i quins no

Les capçaleres dels fitxers de `js/` remeten sovint a un document de
disseny amb número de secció: «§3 de PROPOSTA-ARQUITECTURA.md», «§4.2 de
GLOSSARY-DESIGN-NOTES.md», «§7 de ITINERARY-DESIGN-NOTES.md». **Cinc
d'aquests documents no són en aquest repositori** i mai hi han estat: van
ser documents de treball externs, lliurats a part.

Fins a l'auditoria d'agost de 2026 això no ho deia enlloc, i el resultat
era el pitjor possible: algú nou llegia «v. §6 del document de disseny»,
el buscava, no el trobava, i no sabia si li faltava context important o
si simplement la referència era morta. Aquest fitxer existeix perquè
aquesta pregunta tingui resposta en deu segons.

**Les citacions «§N de X.md» del codi no s'han esborrat**, a propòsit: que
una decisió tingui número de secció és informació real (vol dir que va
ser especificada abans d'implementar-se, no improvisada). El que faltava
no era treure-les, era dir on porten.

---

## Taula d'estat

| Document citat | Al repo? | On és, avui, el que en sabem |
|---|---|---|
| `PROPOSTA-ARQUITECTURA.md` | **No** | Document fundacional. Les seves decisions viuen, seccionades, a `PROJECTES-TECHNICAL-REFERENCE.md` i a les capçaleres de `js/nucli/*.js`. §3 = estructura de carpetes `nucli/`+`ui/`; §4 = esquema de dades d'una pregunta (reproduït sencer a la capçalera de `js/data/preguntes-dades.js`); §6 = filtres per `curs`; §7 = modes d'`interaccio`; §8 = patró de rutes (reproduït sencer a la capçalera de `js/nucli/router.js`) |
| `GLOSSARY-DESIGN-NOTES.md` | **No** | §1 = una font de dades, dues superfícies; §3 = detecció longest-match-first; §4.1 = panell overlay; §4.2 = popover inline; §6 = «si les dues superfícies mostren text diferent, és un bug». Tot això és a les capçaleres de `js/nucli/glossari.js` i `js/ui/glossari.js`, que en són avui la millor descripció disponible |
| `ITINERARY-DESIGN-NOTES.md` | **No** | §4/§5 = esquema d'estat i log de camí; §6 = regles 1-5 del motor; §7 = valoració + «suggerit per a tu» + banner de continuïtat; §10/§11 = extres explícitament ajornats. La capçalera de `js/nucli/itinerari.js` documenta, a més, què se n'ha implementat i què NO, i per què |
| `DEMO-PROOF-INTRO-DESIGN-NOTES.md` | **No** | §0 = per què les demos SÍ donen la solució sencera i les guies no; §5 = enviar el primer visitant a `#demo` un sol cop; §6 = handoff demo-03 → q02. Reflectit a `js/nucli/demos.js` i `js/ui/demo.js` |
| `HANDOFF-COMPLETAR-GUIES.md` | **No** | Full de ruta dels lots de guies. Superat pels fets: les 130 guies estan fetes. La traça que queda és `docs/guies/NOTA-LOT-*.md` (una nota per lliurament) i `docs/guies/REVISIONS.md` |
| `HANDOFF-LLIURAMENT-9.md` (i `-10.md`) | **No** | Citats a `js/data/ordre-preguntes.js` com a font del coneixement de contingut dels lots 9 i 10 quan encara no estaven guiats. Ja executats; la traça és `docs/guies/NOTA-LOT-9.md`, `NOTA-LOT-10.md` i `NOTA-FUSIO-LOT-9-10.md` |
| `i18n-spanish-guide.md` | **No** (ni ho serà) | És d'un projecte germà, `karelcat`, no d'aquest. Citat a `js/i18n/ui-strings.js` com a origen de la cadena de prioritat URL > localStorage > navegador > per defecte, que `js/i18n/i18n-core.js` implementa i documenta sencera |
| `pedagogical-assessment-geom.md` | **No** | Avaluació externa rebuda, mai part del repo. El que se'n va derivar sí que hi és: `docs/guies/REFERENTS-PEDAGOGICS.md`, que n'és la taula de referència creuada |
| `NOTA-GLOSSARI.md` | **No** (mai va existir amb aquest nom) | Citat a `js/data/glossari-dades.js`. Els documents reals són `docs/guies/NOTA-GLOSSARI-MILLORES.md` i `docs/guies/NOTA-GLOSSARI-AMPLIACIO.md` |
| `HANDOFF-ITINERARIS.md` | **No** | Handoff de treball que va especificar els tres punts oberts en aplicar `window.ITINERARIS_TEMATICS` a la interfície (entrada des de la llista, navegació dins d'un itinerari, "veure també" dels grups entrellaçats). Citat a `js/ui/detall.js`. El que se'n va derivar sí que hi és: `js/nucli/itineraris-tematics.js`, `js/ui/itineraris.js`, i els blocs `pintaBessones`/`pintaItinerariActiu` de `js/ui/detall.js`, cadascun documentat a la seva pròpia capçalera |
| `build_preguntes_dades.py` | **No** | Generador de `js/data/preguntes-dades.js`, arxivat fora del repo per l'owner un cop feta la transformació (v. `HANDOFF-COLD-START.md` §4 i el comentari de `verifica_projecte.py`). **Conseqüència operativa real: avui `preguntes-dades.js` NO es pot regenerar.** Els «canvis B/E/F» que hi cita el codi (formes singular/plural del camp `imatge`, `esInvertida`, `dimensio`/`dificultat`) són seccions d'aquell script |
| `PROJECTES-TECHNICAL-REFERENCE.md` | **Sí** | A l'arrel |
| `docs/guies/NOTA-*.md`, `REVISIONS.md`, `REFERENTS-PEDAGOGICS.md` | **Sí** | A `docs/guies/` |
| `docs/HAND_DRAWN_GEOMETRY_TECHNIQUE.md` | **Sí** | A `docs/` |
| `parse_guies.py` | **Sí** | A l'arrel, i funciona: és idempotent |
| `NOTA-METODE-TRAM-12.md` | **No** (esborrat a posta) | Va existir un dia. Era una nota de mètode adreçada nominalment a l'agent que havia fet els trams 1–11, i el criteri és que **cap fitxer del repositori no s'adreça a un agent concret**: els agents passen i el repositori queda. El seu contingut és avui a `HANDOFF.md` (§3.1, §3.2b, §4.5, §4.8, §4.11, §5 i §9), incorporat in situ; la taula de correspondència és a `CANVIS-TRAM-12.md` §8 |

---

## Documents de treball citats només des de `docs/`

Els de la taula de dalt els cita el codi (`js/`, `css/`, `index.html`), i per
això `verifica_projecte.py` els vigilava des de l'auditoria d'agost. Aquests
altres els citen només les notes de lliurament entre elles. Són igual de
morts, i fins a l'auditoria de documentació d'ago. 2026 ningú no ho deia —
la comprovació saltava `./docs` expressament. Ara també els cobreix.

| Document citat | Qui el cita | Què era |
|---|---|---|
| `ANALISI-GRAFICS-NOUS.md` | `NOTA-PART1-ENUNCIATS.md`, `NOTA-PART2-PISTA2.md` | Anàlisi prèvia de quines preguntes necessitaven imatge nova. El resultat és el contingut d'aquelles dues notes |
| `FIGURES.md` | `docs/AUDITORIA-RIGOR-GUIES.md` | Nota de lliurament d'una ronda de figures, mai al repo. El que se'n va derivar és a `docs/guies/NOTA-IMPROVE-*.md` |
| `IMPROVE-INSTRUCTIONS.md` | `NOTA-IMPROVE-014-…` | Instruccions donades als tres agents "IMPROVE". El resum del que demanaven és a la mateixa nota, §2 |
| `NOTA-LLIURAMENT.md` | `NOTA-LOT-2/3/4.md` | Nom genèric que aquelles notes es donaven a si mateixes abans que s'adoptés `NOTA-LOT-N.md`. No és un fitxer a part |
| `itineraris-detall.md` | `PROPOSTA-ITINERARIS-ORIGINAL.md` | Annex de la proposta amb els 6 itineraris pregunta a pregunta. Avui és `js/data/itineraris-tematics-dades.js`, que és la versió executable del mateix contingut |
| `publish_lot10.py` | `NOTA-LOT-10.md`, `NOTA-FUSIO-LOT-9-10.md` | Script d'un sol ús per publicar les figures del lot 10 amb el seu `JOBS` propi. Fet i llençat; `docs/publish_figures.py` i `docs/publish_figures_lot9.py` són els que queden |
| `NOTA-FIX-PART2-7FIGURES.md` | (ja no el cita ningú) | El citava `HANDOFF-COLD-START.md` i no ha existit mai. Referència eliminada a l'auditoria de documentació |
| `HANDOFF-LLIURAMENT-10.md` | `NOTA-LOT-10.md`, `NOTA-FUSIO-LOT-9-10.md` | Bessó de `HANDOFF-LLIURAMENT-9.md` (v. taula de dalt). Ja executat; la traça és `NOTA-LOT-10.md` |
| `guies.json` | `parse_guies.py`, `NOTA-LOT-5.md` | Fitxer intermedi d'una sessió antiga de `parse_guies.py`. Avui l'script escriu directament `js/data/guies-dades.js` |
| `manifest.tsv` | `parse_guies.py`, `guies-dades.js`, `NOTA-LOT-2/3/4.md` | Nom antic de `docs/manifest-figures.tsv`, que sí que existeix |
| `questions_full_book.json` | `preguntes-dades.js` | El JSON d'extracció del PDF, mai al repo. Sense ell (i sense `build_preguntes_dades.py`) `preguntes-dades.js` no es pot regenerar |
| `sol-01.html`, `sol-02.html`, `sol-35.html`, `sol-q25.html`, `q08.html` | `COORDINACIO-AGENTS-SOLUCIONS.md` | **No són referències**: són els noms dels dos esquemes de nomenclatura de solucions ja retirats, citats expressament per dir que no s'han de tornar a fer servir. Estan a `DOCS_ABSENTS` perquè el verificador no els compti com a documents perduts |

---

## Com no tornar-hi a caure

`verifica_projecte.py` comprova ara, a cada execució, que tota referència
a un `.md` o un `.py` **que aparegui a qualsevol fitxer del repositori,
inclosos els `.md` de `docs/`**, o bé existeixi, o bé sigui a la llista
d'absents coneguts d'aquest fitxer (`DOCS_ABSENTS` dins de l'script). Si
algú cita un document nou que no existeix, salta un avís amb el fitxer i
la línia.

Fins a l'auditoria de documentació d'ago. 2026 la comprovació saltava
`./docs`, que és on viuen gairebé totes les notes — o sigui que cobria
la part del repositori on menys probable era que aparegués una referència
morta i no la part on n'hi havia set.

Si mai apareix un d'aquests documents (per exemple, si l'owner el
recupera de l'arxiu): posa'l al repo, treu-lo de `DOCS_ABSENTS` a
`verifica_projecte.py`, i actualitza la fila corresponent d'aquí dalt.
