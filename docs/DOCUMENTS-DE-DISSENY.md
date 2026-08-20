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
| `build_preguntes_dades.py` | **No** | Generador de `js/data/preguntes-dades.js`, arxivat fora del repo per l'owner un cop feta la transformació (v. `HANDOFF-COLD-START.md` §4 i el comentari de `verifica_projecte.py`). **Conseqüència operativa real: avui `preguntes-dades.js` NO es pot regenerar.** Els «canvis B/E/F» que hi cita el codi (formes singular/plural del camp `imatge`, `esInvertida`, `dimensio`/`dificultat`) són seccions d'aquell script |
| `PROJECTES-TECHNICAL-REFERENCE.md` | **Sí** | A l'arrel |
| `docs/guies/NOTA-*.md`, `REVISIONS.md`, `REFERENTS-PEDAGOGICS.md` | **Sí** | A `docs/guies/` |
| `docs/HAND_DRAWN_GEOMETRY_TECHNIQUE.md` | **Sí** | A `docs/` |
| `parse_guies.py` | **Sí** | A l'arrel, i funciona: és idempotent |

---

## Com no tornar-hi a caure

`verifica_projecte.py` comprova ara, a cada execució, que tota referència
a un `.md` o un `.py` que aparegui dins de `js/`, `css/` o `index.html`
o bé existeixi al repositori, o bé sigui a la llista d'absents coneguts
d'aquest fitxer (`DOCS_ABSENTS` dins de l'script). Si algú cita un
document nou que no existeix, salta un avís amb el fitxer i la línia.

Si mai apareix un d'aquests documents (per exemple, si l'owner el
recupera de l'arxiu): posa'l al repo, treu-lo de `DOCS_ABSENTS` a
`verifica_projecte.py`, i actualitza la fila corresponent d'aquí dalt.
