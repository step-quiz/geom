# Diff — les tres coses obertes, i un bug meu que hi vaig trobar

    unzip -o geom-eina-frases-diff.zip -d ruta/al/geom-main/
    python3 verifica_projecte.py

Verificat sobre el repositori tal com me'l vas passar: **55 comprovacions
passades, tot correcte**, els dos avisos de sempre. L'eina passa 37 proves
automàtiques en un Chrome real i el lloc (`index.html`) també.

---

## 0. Primer, un error que vaig introduir jo i que t'has d'endur

En sincronitzar-me amb el teu repositori vaig veure que a `aplica-canvis.py`
**faltava la línia `def valors_del_js():`**. La vaig esborrar sense adonar-me'n
quan hi vaig afegir la sincronització d'enunciats, i no ho vaig detectar
perquè vaig comprovar el resultat passant la sortida per `grep`, cosa que va
amagar el traceback.

Efecte: **qualsevol canvi d'una guia petava** just després d'escriure els
markdown. Els fitxers quedaven escrits i la còpia refeta, però sense la
comprovació final ni possibilitat de desfer, i amb un traceback a la pantalla.

Les dades del teu repositori **no estan afectades**: `guies-dades.js` i els
`.md` són coherents, ho he comprovat regenerant. El trencat era només
l'script. Reparat, i provat aquest cop mirant la sortida sencera.

## 1. Les solucions ja són editables

`solucions/qNN.html` era l'única part que es podia llegir però no tocar.

- **L'eina** hi mostra ara camps editables: títol de la solució, títol i
  paràgrafs de cada pas, peus de figura i el bloc «En resum». Segueixen dins
  del desplegable, plegats, amb les figures intercalades al lloc que els toca.
  Els camps editables passen de **1.704 a 3.389** (1.685 de solució).
- **`aplica-canvis.py`** escriu a l'HTML original, refà
  `js/data/solucions-dades.js` i comprova camp per camp que el resultat és el
  que volies; si no, ho desfà tot. Mateixa disciplina que amb les guies.

El localitzador es va validar contra les 117 solucions: **1.685 de 1.685
camps localitzats amb coincidència exacta, cap discrepància.**

**Prova massiva:** 1.013 camps de solució editats de cop, repartits per les
117 pàgines. **1.013 aplicats, recompilats i verificats exactes, cap rebuig.**
L'HTML va quedar ben format (cap marca `<strong>`/`<em>` descompensada).

Les marques en línia (`<strong>` 423, `<em>` 221, `<sub>` 15, un `<a>`) es
conserven amb el mateix mapa de posicions que fem servir amb el markdown de
les guies. El títol de la solució també actualitza el `<title>` de la pàgina.

## 2. El vocabulari als documents de treball

**«tetraedre»: 26 substitucions més**, als documents i al
`docs/manifest-figures.tsv`. Ara en queden **0 amb accent a tot el
repositori**. Vaig comprovar abans que cap registre de canvis en citi
l'ortografia com a tal: són taules i prosa normal, o sigui que unificar-ho no
falseja cap registre.

**«dilatació»: aquí la resposta és més curta del que semblava.** Mirant-me les
32 ocurrències una per una, gairebé cap no era una barreja de vocabulari:

| què és | quantes | què n'he fet |
|---|---|---|
| la paraula com a **subjecte** (el registre de la decisió a `CANVIS-TRAM-10.md`, `HANDOFF-FULL.md` §2.4, `GUIES-LOT-8.md`…) | 10 | **deixades**: canviar-les diria «"homotècia" és un fals amic», que és absurd |
| **slugs de codi** (`dilatacio`, `dilatacio-anisotropa`) | 9 | **deixades** (v. sota) |
| **instantània històrica** de la taula original d'itineraris | 4 | **deixades** |
| nom de figura i la seva descripció | 3 | **corregides** (v. sota) |
| **ús normal** descrivint geometria | 9 | **corregides** a homotècia / estirament / factor d'escala |

I una cosa que va sortir buscant-ho: **el projecte ja havia fet aquest
escombrat al tram 19.** `HANDOFF-FULL.md` §2.4 diu literalment «"dilatació" ja
no hi és, però queda un rastre», i explica que va separar el vocabulari en
*homotècia* (escalat uniforme) i *estirament* (factors diferents per eix). Els
quatre enunciats que vam corregir l'altre dia eren precisament el rastre que
se li va escapar. La teva decisió i la del tram 19 són la mateixa.

**El nom de figura que el teu propi handoff deixava pendent.**
`049_dilatacio_volum_cub.png` no és cap fitxer real: la imatge de debò es diu
`assets/img/pistes/fig-049.png`, i `parse_guies.py` només llegeix els tres
dígits del davant del nom del markdown. La resta és decorativa i canviar-la no
trenca res. Renombrada a `049_homotecia_volum_cub.png`, i la descripció del
manifest passa a «homotècia de sòlid».

**Els slugs, els he deixat, i val la pena que ho sàpigues:** els documents
citen els moviments `dilatacio` i `dilatacio-anisotropa`, que **ja no
existeixen a les dades** (avui són `homotecia` i `estirament`). No són una
inconsistència d'ortografia sinó documentació desactualitzada, i com que són
notes de lot que registren què es va introduir aleshores, reescriure-les
canviaria el que diu el registre. Si les vols posar al dia, digue'm si
prefereixes substituir el slug o afegir-hi el nom d'avui entre parèntesis.

## 3. L'èmfasi de q01

Aquest **no calia tocar-lo, i t'explico per què**. La frase quedava:

> En general són **punts diferents**.

La negreta cobreix exactament el mateix predicat que abans («són **tres punts
diferents**»): l'afirmació que són distints. Movent-la no es guanya res.

I entenc per què vas treure «tres»: la llista acaba en punts suspensius —«on
es tallen les altures, on es tallen les bisectrius, on es tallen les
medianes…»— que insinuen que n'hi ha més de tres, i el circumcentre hi és. Amb
«tres» la frase es contradeia amb els punts suspensius. La teva correcció era
bona.

He comprovat els altres dos «tres punts diferents» de la mateixa guia i tots
dos són correctes en el seu context: un parla de tres rectes qualssevol, que
es tallen dos a dos en tres punts; l'altre, dels tres centres d'un triangle
general. Els he deixat.

---

## Fitxers

**Modificats (21)**

    eina-frases.html                 solucions editables; etiquetes al dia
    aplica-canvis.py                 el bug del §0; escriptura a solucions/
    docs/manifest-figures.tsv        tetraedre; descripció de la figura 049
    docs/guies/GUIES-LOT-4.md        nom de la figura 049
    docs/**/*.md  (18)               tetraedre; usos normals del vocabulari

**Regenerats automàticament en desempaquetar** — cap: `guies-dades.js`,
`solucions-dades.js` i `analitzador-geom.html` no canvien, perquè cap
d'aquestes correccions toca text que hi arribi. Ho he comprovat regenerant-los
tots tres i comparant-los.
