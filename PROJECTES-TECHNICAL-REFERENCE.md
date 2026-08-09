# Referència tècnica del projecte

Aquest document explica **per què** cada fitxer és com és: quins patrons dels quatre
projectes germans (`operacions`, `repas`, `sol`, `karelcat`, `cangurcat`) es van
reutilitzar, quins es van descartar conscientment, i quines decisions van sorgir del
propi projecte sense cap precedent directe. També recull els bugs reals trobats durant
el desenvolupament i com es van diagnosticar — no només la solució final, perquè el
diagnòstic sol ser més reutilitzable que el pedaç concret.

Si només vols saber com fer servir el lloc, `README.md` n'hi ha prou. Aquest document
és per a qui hagi de tocar el codi.

---

## 0. Filosofia de partida

El material font és un llibre real (*"On Problems..."*, `myBookGeometry.pdf`, 193
pàgines), no un enunciat abstracte de "geometria per a ESO". Cada decisió de disseny
—visual i de codi— es va prendre intentant respectar la veu d'aquell llibre concret:
serif clàssica, dibuixos a mà imperfectes, preguntes que interrompen un argument en
primera persona en lloc de ser ítems solts d'una llista.

**El PDF és la referència bàsica, no la "ground truth" absoluta** (indicació explícita
rebuda durant el desenvolupament). Exemple concret: el PDF renderitzat és blanc pur
(255,255,255), però `--paper` a `tokens.css` és cremós — fidel a l'*experiència* de
llegir el llibre, no al valor RGB literal d'un artefacte d'exportació digital.

---

## 1. `css/tokens.css` + `css/base.css` + `css/components.css`

### Per què no s'ha copiat cap paleta dels germans
`sol` fa servir un accent lila (`#7c5cbf`) sobre fons blau-grisós fred, correcte per a
la *seva* audiència (Batxillerat, "app d'estudi"). Copiar-lo aquí hauria estat calcar un
projecte veí en lloc de partir del llibre. Es va descartar també conscientment
qualsevol accent proper al terracota (`#D97757`), per no llegir com una tria d'IA
genèrica.

### Per què Source Serif 4 i no Libre Baskerville
`sol/tasca.html` fa servir Libre Baskerville. Es va triar una font diferent
explícitament per no calcar el projecte germà, buscant millor suport de pesos variables
per a la negreta (la pregunta interrompent el text, tal com fa el llibre real a la
p. 10 del PDF).

### La signatura visual: llom de llibre, no graella de targetes
`.question-list` amb `border-left` fa de "llom" — cap fitxer CSS conté cap contenidor
de targeta amb ombra. Decisió deliberada per no repetir el patró "banc d'exercicis" que
`operacions`/`repas`/`karelcat` fan servir per a bateries de problemes intercanviables;
aquí cada pregunta és un fragment d'un llibre continu.

### `mix-blend-mode: multiply` per fondre les figures amb el paper
Els 68 PNG font són escala de grisos amb fons blanc pur (no transparent). En lloc de
post-processar cada imatge, `multiply` fa desaparèixer el blanc contra `--paper`
directament al navegador. Descobert i corregit durant una comprovació visual amb
contingut real (no lorem ipsum): sense això, cada figura es veia com una caixa blanca
clarament retallada sobre el paper cremós.

### Tres excepcions al tractament visual estàndard de figura
1. **`--figure--scan`** (`esCrop=true` a les dades): 7 imatges (q31, q76, q78, q79,
   q105, q107, q114) són retalls de la pàgina renderitzada, no dibuixos a mà — línia
   fina i tipografia real del PDF per preservar etiquetes de text (a/b/c, C′, ∞).
   `multiply` hi afebliria la línia; es desactiva i s'aplica un fons `--paper-raised`
   subtil en lloc del blanc pur del PNG.
2. **`--figure--inverted`** (`esInvertida=true`): **un únic cas, q42**. El PNG font ve
   amb traç clar sobre fons fosc (94% de píxels foscos), l'invers del patró de totes
   les altres 67 imatges. Descobert en una revisió visual sistemàtica (no anticipat al
   disseny original). `filter: invert(1)` capgira els valors de color abans del
   `multiply`, de manera que es comporta com qualsevol altra imatge sense necessitar
   cap regla de blend diferent.
3. **`.question-entry__figure-group`**: **un únic cas, q40_implicit**, l'única entrada
   amb `imatge.fitxers` (plural) en lloc de `imatge.fitxer`. Dues figures en graella
   flexible en lloc d'una de sola.

### Bug real trobat i corregit: `z-index` prematur trencant el clic
`.question-entry__link-cover` (enllaç invisible que cobreix tota l'entrada de la
llista, per a accessibilitat de focus/tab) va tenir originalment una regla
`.question-entry > *:not(.link-cover) { z-index: 2 }` "per si algun dia calia un botó
interactiu dins la llista". Un clic real de Playwright (no una inspecció de DOM) va
revelar que això interceptava el clic per damunt de l'enllaç fins i tot en text pla
sense cap interactivitat pròpia. Eliminada la regla: avui no hi ha cap cas real que la
necessiti, es reintroduirà quan calgui de veritat.

---

## 2. `js/data/preguntes-dades.js` (i `build_preguntes_dades.py`)

**No s'edita mai a mà.** Es genera amb un script Python perquè la transformació sigui
auditable i repetible — rellevant especialment perquè el projecte va rebre les dades en
dos lots successius (41 preguntes p. 1-55, després 130 amb el llibre complet), i
probablement en rebrà més.

### Decisions de mapeig que divergeixen de l'exemple literal de l'arquitectura original

1. **`q27_implicit` i `q40_implicit`**: no tenen enunciat de text al llibre — la imatge
   *és* la pregunta. Detectades per la presència estructural del camp `caption` al JSON
   font (`"caption" in entry`), no per una llista d'ids escrita a mà que es trencaria
   amb un tercer cas futur.
2. **`notes` → `_notaExtraccio`, no `notaEditorial`**: el camp `notes` del JSON font és
   metadada de procés d'extracció ("on the page BEFORE the question, same page"...),
   no text pensat per a un lector. Es guarda amb prefix `_` (mai renderitzat a la UI);
   `notaEditorial` es deixa buida, pendent que algú hi escrigui contingut real.
3. **`imatge.paginaFont` sempre present**: al JSON font, `image_source_page` només
   apareix quan difereix de `question_page`. Es normalitza sempre a un valor concret
   perquè el codi consumidor no hagi de conèixer aquesta particularitat del format font.
4. **`imatge.fitxer` vs `imatge.fitxers`**: `q40_implicit` és l'únic cas amb
   `image_file` com a array al JSON font. Es distingeix per nom de clau (singular vs.
   plural), no per forçar sempre un array de longitud 1 — així un consumidor sap quin
   cas és sense haver de fer `Array.isArray()`.
5. **`imatge.esCrop`**: calculat obrint cada PNG amb Pillow i comprovant si el mode és
   `L` (escala de grisos pura) o no. Verificat doblement abans de confiar-hi: inspecció
   visual + el propi camp `notes` de cadascuna de les 7 entrades menciona l'etiqueta de
   text concreta que calia preservar.
6. **`imatge.esInvertida`**: calculat comprovant si més del 50% dels píxels del PNG (en
   escala de grisos) tenen valor < 128. Es va provar primer un criteri de mostreig de 4
   cantonades (el mateix mètode que va detectar `esCrop`), però donava un fals positiu
   amb q119 (una paràbola on el traç normal passa a prop de dues cantonades per pura
   geometria, sense estar invertida). La ràtio global de píxels foscos no té aquesta
   ambigüitat: q42 surt amb 94%, totes les altres per sota del 5%.

### L'script porta els seus propis asserts de regressió
`EXPECTED_TOTAL`, `EXPECTED_WITH_IMAGE`, `EXPECTED_MULTI_IMAGE_IDS`,
`EXPECTED_CROP_IDS`, `EXPECTED_INVERTED_IDS` — si un futur lot de dades canvia algun
d'aquests conjunts, l'script falla explícitament en lloc de generar silenciosament un
`preguntes-dades.js` amb un cas nou sense detectar.

---

## 3. `js/i18n/ui-strings.js` + `js/i18n/i18n-core.js`

Patró calcat de `karelcat/js/i18n.js` (`K.t()`, cerca niuada per punts) amb dues
extensions documentades explícitament perquè no es llegeixin com a codi ja existent a
`karelcat`:

- **Fallback entre idiomes** (`actiu → en → key`): la `t()` real de `karelcat` no en
  fa (només té `ca` complet en producció). Aquí `en`/`ca` són complets des del primer
  dia, però el fallback es va afegir igualment per robustesa davant d'un futur tercer
  idioma incomplet, i per coherència amb el fallback de contingut (`contingut.js`).
- **Prioritat de resolució** (URL > localStorage > navegador > per defecte, clau
  `geo:uiLang`): no és codi que corri avui a `karelcat/js/i18n.js` — surt de la recepta
  documentada a `karelcat/docs/i18n-spanish-guide.md` ("Step 3"), pensada per quan
  `karelcat` mateix vulgui afegir un segon idioma.

Provat amb 14+ casos (lookup bàsic, interpolació, clau inexistent, fallback creuat,
`setLang` invàlid, sincronització de `<html lang>`, persistència real a
`localStorage`, poblament dinàmic del selector) via `file://` sense servidor.

---

## 4. `js/nucli/router.js` + `js/nucli/progres.js`

### Per què no és el `.view.active` de `sol`
`sol/tasca.html` acobla router i pintat de DOM al mateix lloc — raonable per a una
pàgina única i petita. Aquí es van separar expressament (`router.js` mai toca el DOM;
`js/ui/*.js` mai llegeix `location.hash` directament) perquè l'estructura de carpetes
ja distingia `nucli/` de `ui/` des del primer dia.

### Per què `progres.js` no és una migració a l'estil `sol`
`sol/progres.js` migra un format vell perquè el seu domini natural (exercicis que es
mouen de setmana en setmana) fa que un mateix exercici pugui canviar d'unitat a mig
curs. Aquí els ids són globals i estables per disseny (§4), no es mouen mai. El risc
real identificat va ser un altre: **el nombre total de preguntes creix** (41 → 130,
i probablement més en el futur). La solució no és cap migració — és no cablejar mai
cap total ni cap llista d'ids. Una sola clau `localStorage` per `collectionId`
(`geo:fet:geometry-book-1`) absorbeix el creixement per construcció: el `Set` guanya
membres, no canvia de format.

**Provat explícitament**: es va afegir una pregunta a `window.PREGUNTES` en temps
d'execució, *després* d'haver carregat `router.js`, simulant l'arribada d'un lot nou de
dades, i es va confirmar que es resol sense tocar el fitxer.

---

## 5. `js/nucli/contingut.js` + `js/ui/llista.js` + `js/ui/detall.js`

`contingut.js` no estava anunciat a l'arquitectura original — va sorgir perquè
`llista.js` i `detall.js` necessitaven la mateixa lògica de fallback (`enunciat.ca →
en`) i la mateixa normalització singular/plural d'imatges; centralitzar-ho hi evita
duplicació.

### Regles explícites de disseny que calia respectar amb precisió
- **Pista sense contingut → el botó no existeix al DOM**, no un botó desactivat.
- **"Aquesta pregunta encara no s'ha traduït" només a `detall.js`**, no a `llista.js`
  (repetir-ho 130 vegades seria sorollós quan encara no hi ha cap traducció feta) —
  decisió conscient, no un oblit.
- **Filtres de `router.js` (`#curs=2ESO`)** tractats de manera totalment genèrica a
  `llista.js` (`pregunta[clau] === valor` per a cada clau de `filtres`), sense cap
  `if (clau === 'curs')` especial — així quan `curs` deixi de ser `null`, no cal tocar
  aquest fitxer.

### Bug real trobat i corregit: títol duplicat
En unir totes les peces a `index.html` per primer cop, el títol del lloc apareixia dues
vegades: un cop al `<header>` fix, un altre pintat per `llista.js` (que fins llavors
només s'havia provat aïllat, sense cap capçalera al voltant). Es va treure de
`llista.js`; el títol viu només al header estàtic d'`index.html`.

---

## 6. `js/ui/main.js` + `index.html`

### Divergència deliberada del §8 de l'arquitectura original
El document original especificava dos contenidors fixos alternats amb classe
`.view.active` (patró `sol`). Es va mantenir en canvi el disseny ja construït als passos
4-5 (repintat des de zero de `#app`, `router.js` sense conèixer el DOM), documentat aquí
perquè no es llegeixi com un oblit del document original sinó com una decisió conscient
de coherència amb la resta del sistema ja construït.

### Ordre de càrrega d'scripts (index.html)
Exactament: `preguntes-dades.js` → `ui-strings.js` → `i18n-core.js` → `contingut.js` →
`progres.js` → `router.js` → `llista.js` → `detall.js` → `main.js`. Cada fitxer declara
les seves dependències al propi capçalera; aquest ordre és la unió de totes elles.

---

## 7. Bugs trobats durant una revisió visual sistemàtica (no durant el desenvolupament inicial)

Un cop les sis peces estaven unides i provades individualment, es va fer una revisió
visual de les 130 preguntes una per una (no un mostreig a dit), que va revelar:

- **q42 (imatge invertida)**: bug real, corregit (v. secció 1 i 2 més amunt).
- **q41 (aparent fons negre a la miniatura de revisió)**: **fals positiu de la pròpia
  metodologia**, no del lloc. Causa: `PIL.Image.crop()` omple de negre una regió
  demanada més enllà de l'alçada real de la imatge en lloc de retallar-la neta. La
  captura real d'`index.html` era correcta; l'artefacte només existia a l'eina de
  revisió, un cop corregit el retall.
- **q72 (aparent subratllat continu a la miniatura)**: **fals positiu**, per la mateixa
  causa arrel (compressió a mida molt reduïda fent semblar continu el traç gruixut de
  la vora inferior del text). La captura a mida completa no mostra cap marcatge.
- **q119 (fals positiu descartat abans de confiar en el criteri d'`esInvertida`)**: el
  criteri inicial de mostreig de 4 cantonades el marcava com a candidat a invertit; una
  inspecció visual directa va confirmar que és un dibuix normal on el traç passa a prop
  de dues cantonades per pura geometria de la figura (una paràbola amb línies
  envoltants). Va motivar canviar el criteri de detecció a ràtio global de píxels
  foscos, que no té aquesta ambigüitat.

Lliçó general reforçada per aquests quatre casos: **una miniatura petita o un retall mal
calculat pot introduir artefactes que no existeixen al producte real** — cada anomalia
detectada en una eina de revisió es va contrastar contra la captura a mida completa (o
el fitxer font directament) abans de classificar-la com a bug real.

---

## 8. Sobre `docs/hand-drawn-technique/` (tècnica de dibuix, no integrada encara)

Document + mòdul de codi (`hand-draw.js`) desenvolupats per un agent separat, rebuts
durant una pausa d'integració d'aquest projecte. Analitzats amb el mateix rigor que la
resta del material: la reclamació central del document (la signatura de "dibuix a mà"
no és la línia tremolosa, és que les concurrències geomètriques —medianes que es
tallen, diagonals que es bisequen— fallen lleugerament) es va contrastar directament
contra la imatge real del triangle de medianes a la p. 10 del PDF font, on efectivament
les tres línies no conflueixen en un punt net — i el propi text del llibre ho comenta
explícitament ("if your drawing is sloppy, the lines won't meet"). Els vuit parells
original/mimic inclosos es van revisar un per un contra els criteris de diagnòstic que
el propi document ensenya a buscar (no un judici general de "sembla bé"); un possible
error (aparent zona de doble línia al cercle de l'exemple 2) es va descartar després
d'ampliar-lo, confirmant que és textura de llapis legítima (Part 2.4 del document), no
l'artefacte de "lens/loop" que la Part 5.1 adverteix.

**Encara no integrat en aquest lloc.** Quan es decideixi incorporar-hi esquemes
generats amb aquesta tècnica, caldrà decidir com convergeix amb l'esquema de dades
actual — concretament, si una imatge generada (sense `paginaFont` real, perquè no ve de
cap pàgina del llibre) hi conviu amb un camp `imatge.origen` (`"llibre"` /
`"generada"`) o si substitueix les imatges existents. Decisió pendent, no presa
encara.
