# Geometria — preguntes del llibre

Un lloc web per explorar 130 preguntes obertes de geometria sintètica extretes d'un
llibre real ("*On Problems...*"), p. 1–193. No és un banc d'exercicis per corregir-se:
cada pregunta és una porta d'entrada a una demostració o un descobriment, tal com
apareix al llibre — sense puntuació, sense respostes correctes marcades, sense
gamificació.

## Com obrir-ho

Fes doble clic a `index.html`. No cal cap servidor, cap `npm install`, cap build.
Funciona directament des del sistema de fitxers (`file://`) perquè les dades de les
preguntes viuen en un fitxer JavaScript (`js/data/preguntes-dades.js`, que assigna a
`window.PREGUNTES`), no en un `.json` carregat amb `fetch()` — el navegador bloqueja
aquestes peticions sota `file://`, i aquesta lliçó ve directament del projecte germà
`cangurcat`.

Si prefereixes servir-ho amb un servidor local (per exemple per provar-ho des d'un
mòbil a la mateixa xarxa), qualsevol servidor estàtic funciona igual de bé:
`python3 -m http.server` des de l'arrel del projecte, per exemple.

## Què hi ha, i què no

**Hi ha:** 130 preguntes amb el seu enunciat original en anglès (el text del llibre)
**i en català** (traduït), totes 130 amb la seva figura de guia corresponent, navegació
entre preguntes, un marcador personal "explorat" que es desa al navegador, un
itinerari amb suggeriments personalitzats, un glossari de 53 termes amb detecció
automàtica dins dels enunciats, una intro "què és una demostració" per a qui arriba per
primer cop, i una interfície completa en anglès i català.

**Les 130 de 130 preguntes tenen ja una GUIA DE DEMOSTRACIÓ — el llibre sencer.**
Els lliuraments 9 (projecció i còniques) i 10 (corbes i el final del llibre) es van fer
en paral·lel, cadascun encarregat a un agent diferent (`HANDOFF-LLIURAMENT-9.md`,
`HANDOFF-LLIURAMENT-10.md`), i integrats després en un sol pas — v.
`docs/guies/NOTA-FUSIO-LOT-9-10.md` per als detalls d'aquesta fusió, incloent-hi una
col·lisió real de numeració de figures que calia resoldre abans d'ajuntar-los.
És una escala de quatre pistes que es revelen d'una en una, pensada per a qui sap
resoldre equacions però no ha fet mai geometria sintètica. Els quatre nivells
difereixen en *espècie*, no en quantitat:

| Nivell | Què fa |
|---|---|
| 0 · encàrrec | Reformula la tasca: què has de produir? Sovint, "el resultat és una raó, no un número" |
| 1 · concreta | Particularitza, prova amb números — ataca amb el que l'alumne ja sap fer |
| 2 · figura | La construcció, com a imatge. Zero o tres paraules |
| 3 · tanca | Diu què cal mirar, sense dir la conclusió |

Després venen una **comprovació** (una predicció numèrica per contrastar amb la
pròpia resposta — mai la solució) i un **i després** (on retorna aquest moviment
més endavant al llibre). **Cap nivell dona la solució**: és una decisió de disseny,
no un oblit.

A les figures de guia, **el negre és la figura del llibre i la sanguina és el que
hi afegeixes tu**. La distinció visual és la distinció conceptual que tot plegat
existeix per ensenyar: la figura del llibre és un enunciat; la línia que hi
afegeixes és una decisió teva. (Als glossari i a la intro "què és una demostració",
aquesta mateixa paleta hi és, però amb un significat diferent — v. més avall.)

A la llista, les preguntes que tenen guia porten la marca ◆.

### Glossari

Botó "📖 Glossari" a la capçalera: un panell de cerca i navegació per categoria amb
53 termes (triangles, angles, cercles, polígons, sòlids, còniques...), més la
detecció automàtica de qualsevol d'aquests termes dins l'enunciat d'una pregunta —
apareix subratllat i, en clicar-lo, un popover hi mostra la definició al mateix lloc.
Dades a `js/data/glossari-dades.js`; només 1 dels 53 termes té figura pròpia encara
(la resta, ampliada recentment per un altre agent en paral·lel, espera il·lustracions
— v. `docs/guies/NOTA-GLOSSARI-AMPLIACIO.md`). Les figures que sí n'hi ha són **tinta
sola, sense sanguina**: aquí no hi ha "figura del llibre" vs "afegit de l'alumne",
només un sol diagrama — un accent (`--pencil`, el mateix que ja fa servir la interfície
fora del canvas) marca els noms de terme.

### Itinerari

Cada pregunta que obres es registra; un control de valoració (molt / normal / poc,
independent del checkbox "explorat") i un bloc "suggerit per a tu" amb fins a tres
opcions ranquejades —cadascuna amb la seva raó explícita, mai un sol "següent"
imposat— conviuen amb la navegació anterior/següent de sempre, mai en lloc seu.
Estat a `localStorage`, motor a `js/nucli/itinerari.js`.

### "Què és una demostració?"

Enllaç "Què és una demostració?" a la capçalera (`#demo`): tres demostracions curtes,
completes, SEMPRE visibles senceres —l'única excepció deliberada a la regla "cap
nivell dona la solució" que sí regeix les guies reals. Un alumne que arriba per
primer cop (sense cap pregunta feta encara) hi és enviat un únic cop; qui hi torna,
mai més. Dades a `js/data/demos-dades.js`.

### Ordre de presentació

L'ordre en què es veuen les 130 preguntes (a la llista, i a "anterior/
següent" dins d'una pregunta) **és independent de l'ordre del llibre**
i viu tot sol a `js/data/ordre-preguntes.js` — un array pla d'ids,
editable directament, sense tocar cap altre fitxer. Per defecte:
agrupat primer per dificultat i després per dimensió —

```
dificultat 1 + 2D → dificultat 1 + 3D →
dificultat 2 + 2D → dificultat 2 + 3D →
dificultat 3 + 2D → dificultat 3 + 3D
```

— i, dins de cada un d'aquests sis grups, un itinerari pensat perquè
preguntes emparentades (per tècnica o per dependència real ja
documentada a les guies) quedin juntes. No sempre és possible —
algunes cadenes de dependència reals travessen la frontera de
dificultat o de dimensió— i on no ho és, es respecta l'ordre del llibre
com a criteri de reserva. `js/nucli/ordre.js` és qui ho resol en temps
d'execució (amb degradació segura si l'array queda incomplet o
desapareix); `js/data/preguntes-dades.js` mai canvia d'ordre — segueix
sent, sempre, l'ordre real del llibre.

**No hi ha, i per què:**


| Element | Per què no hi és |
|---|---|
| Correcció o puntuació | El llibre no en té — cada pregunta és un punt de partida per pensar-hi, no un test |
| Pistes curtes (`pista`) | `pista.en`/`pista.ca` continuen sent `null` a totes 130. NO les substitueixen les guies: són coses diferents (una pista curta seria una frase; una guia és una escala completa). El botó 💡 simplement no apareix quan no n'hi ha |
| Figures per a 52 dels 53 termes del glossari | Contingut escrit; il·lustracions pendents — és literalment la pròxima tasca (v. `docs/guies/NOTA-GLOSSARI-AMPLIACIO.md`) |
| Assignació per curs (`#curs=2ESO` i similars) | El camp `curs` existeix a l'esquema de dades però és `null` arreu — decisió de contingut ajornada conscientment, no una limitació tècnica. El filtre ja funciona (prova-ho a la barra d'adreces); simplement no hi ha encara cap valor assignat |
| Mode d'interacció (resposta oberta, dibuix, etc.) | Ídem: `interaccio` és `null` a tot arreu, estructura preparada, contingut pendent. No és només contingut per assignar: la interactivitat real (punts arrossegables, recàlcul en viu) exigiria una capa de renderitzat completament diferent de la que hi ha ara (`docs/render.js` genera PNG estàtics per disseny, no SVG/canvas en viu al navegador) — és a dir, un canvi d'arquitectura real, no una dada per omplir. Es deixa aquí explícitament perquè un futur contribuïdor no ho confongui amb un descuit i el comenci sense haver-ho decidit (v. `docs/guies/REFERENTS-PEDAGOGICS.md`, secció Castelnuovo) |

## Estructura

```
index.html                    — única pàgina real de l'app
assets/img/pistes/            — 131 figures de guia (fig-001…fig-131)
assets/img/glossari/          — figures del glossari (1 de 53 termes, ampliant-se)
assets/img/demo/              — 3 figures de la intro "què és una demostració"
css/
  tokens.css                  — variables de disseny (color, tipografia, espai)
  base.css                    — ritme de lectura, layout "llibre obert"
  components.css              — elements interactius (botons, glossari, itinerari, demo...)
js/
  data/
    preguntes-dades.js        — les 130 preguntes, en/ca (generat, no editar a mà — v. més avall)
    ordre-preguntes.js        — ordre de PRESENTACIÓ (llista + anterior/següent), separat de
                                 l'ordre del llibre — s'edita a mà, v. secció pròpia més avall
    guies-dades.js             — les 130 guies — el llibre sencer (generat per parse_guies.py, no editar a mà)
    glossari-dades.js         — els 53 termes del glossari (s'edita a mà)
    demos-dades.js             — les 3 demostracions fixes (s'edita a mà)
  i18n/
    ui-strings.js             — textos d'interfície en/ca
    i18n-core.js              — resolució d'idioma i lookup de textos
  nucli/
    contingut.js              — fallback de contingut (enunciat.ca → en quan falta)
    ordre.js                    — resol ordre-preguntes.js de manera segura (v. secció pròpia)
    progres.js                — marcador "explorat", desat a localStorage
    guies.js                   — unió guia↔pregunta per id
    glossari.js                — accés al glossari + detecció de termes dins de text
    itinerari.js                — estat i motor de recomanació
    demos.js                    — estat de la intro "què és una demostració"
    router.js                 — hash-routing (#q01, #curs=2ESO, #demo...)
  ui/
    llista.js                 — vista "totes les preguntes"
    detall.js                 — vista d'una pregunta
    glossari.js                — panell overlay + popovers inline
    demo.js                     — vista "què és una demostració"
    main.js                   — connecta el router a les vistes
assets/img/                   — les 115 imatges d'enunciat (67 escanejades del llibre original +
                                 47 dibuixades a mà pel mateix conveni + q40_implicit amb dues)
```

Per a detalls tècnics de cada decisió de disseny (per què cada fitxer és com és, quins
patrons dels projectes germans es reutilitzen i quins es descarten, i per què), consulta
`PROJECTES-TECHNICAL-REFERENCE.md`.

## Regenerar les dades

`js/data/preguntes-dades.js` **no s'edita a mà** — es genera amb
`build_preguntes_dades.py` a partir del JSON d'extracció original
(`geometry_questions_full_book/questions_full_book.json`). Si el text d'una pregunta
canvia a la font, o s'hi afegeixen preguntes noves d'un lot futur, torna a executar
l'script en lloc d'editar el `.js` directament.

**Nota important:** `build_preguntes_dades.py` porta paths absoluts (`SRC`, `IMG_DIR`,
`OUT`) apuntant a l'entorn on es va desenvolupar aquest projecte
(`/home/claude/geo-full/...`). No funcionarà tal qual clonat a una altra màquina —
ajusta aquestes tres constants al principi del fitxer perquè apuntin: `SRC` al JSON
font, `IMG_DIR` a la carpeta d'imatges font (no `assets/img/`, que és la còpia ja
processada), i `OUT` a `js/data/preguntes-dades.js` d'aquest repositori. S'ha deixat
així (en lloc de fer-los relatius) perquè el fitxer és, sobretot, documentació viva de
com es van transformar les dades — la seva funció principal en aquest repositori és
explicar el mapeig, no ser un botó d'un sol clic.

**El JSON font (`questions_full_book.json`) i les imatges font originals no s'inclouen
en aquest repositori** — només `assets/img/` (les 115 imatges ja processades i llestes
per a l'app) i el `preguntes-dades.js` ja generat, que és tot el que el lloc necessita
per funcionar. `build_preguntes_dades.py` s'inclou com a documentació de la
transformació i per si algú té accés al JSON font i vol regenerar-lo, però executar-lo
sense aquell JSON al costat fallarà amb un error de fitxer no trobat — esperat, no un
bug d'aquest lliurament.

**Excepció:** un cop generat, `enunciat.ca`, `pista.*` i `notaEditorial.*` (les
traduccions i notes que no venen del JSON font) sí que s'editen a mà directament al
`.js`. Si regeneres el fitxer després d'haver-hi escrit contingut d'aquest tipus,
guarda'l abans — la versió actual de l'script sobreescriu net i no fusiona traduccions
existents (documentat també al capçalera del propi script).

## Estat i propers passos

Els sis passos de l'arquitectura original estan complets i provats de cap a cap
(inclosa una càrrega real via `file://` sense servidor, amb clics reals a cada element
interactiu). **Les 130 guies del llibre estan fetes** (lliuraments 9 i 10 integrats —
v. `docs/guies/NOTA-FUSIO-LOT-9-10.md`). **114 de 130 preguntes tenen ja gràfic
d'enunciat** (67 escanejats del llibre + 47 dibuixats a mà — v.
`docs/guies/NOTA-PART1-ENUNCIATS.md`), i **31 guies tenen un segon gràfic a Pista 2**,
a més del que ja tenien a Pista 3 (v. `docs/guies/NOTA-PART2-PISTA2.md`). Pendents
coneguts, cap dels quals bloqueja l'ús actual del lloc:

- **Figures del glossari**: 52 dels 53 termes encara no en tenen (v.
  `docs/guies/NOTA-GLOSSARI-AMPLIACIO.md`) — la pròxima tasca prevista.
- **16 preguntes sense gràfic d'enunciat** (de les 63 originals, se'n van triar 47;
  les altres 16 es van descartar explícitament — v. `ANALISI-GRAFICS-NOUS.md`).
- Assignació de `curs` i mode d'`interaccio` per pregunta.

Ja fets, per si es cerca aquí per costum: totes les 130 preguntes tenen ja
`enunciat.ca` (traduït i revisat — v. `js/data/preguntes-dades.js`); el glossari,
l'itinerari, la intro "què és una demostració", i l'ordre de presentació configurable
(v. seccions de dalt) hi són sencers i provats.

### Guies de demostració — com funciona el circuit

Les guies NO es toquen a mà dins de `js/data/guies-dades.js`. Aquest fitxer és
generat. El circuit és:

```
docs/guies/GUIES-LOT-N.md   ← s'escriu i es revisa AQUÍ
        │
        │  python3 parse_guies.py
        ▼
js/data/guies-dades.js      ← generat; no editar
```

Fitxers nous que aquest sistema afegeix al projecte:

```
js/data/guies-dades.js      — les 130 guies (generat per parse_guies.py)
js/nucli/guies.js           — unió guia↔pregunta per id + fallback d'idioma
assets/img/pistes/          — 131 figures publicades
parse_guies.py              — .md → guies-dades.js
docs/guies/                 — els .md font, les notes de lliurament i les
                              fonts HTML que regeneren cada figura
docs/manifest-figures.tsv   — registre numerat de les 131 figures
docs/comu.js, docs/render.js, docs/hand-draw.js — eines de dibuix
```

`js/ui/detall.js`, `js/ui/llista.js`, `js/i18n/ui-strings.js`,
`css/components.css` i `index.html` s'han ampliat; cap comportament previ
s'ha modificat.

Les figures es generen amb `docs/guies/figures-NN.html`, que carreguen
`docs/hand-draw.js` + `docs/comu.js` i es capturen amb `node docs/render.js`.
La tècnica de dibuix (per què una mà encerta la tangència però no els 90°, etc.)
està documentada a `docs/HAND_DRAWN_GEOMETRY_TECHNIQUE.md`; llegeix-ne §1.4, §1.5
i §2.3b abans de tocar cap figura, perquè totes tres van néixer de revisions
humanes que van contradir la intuïció inicial.

Abans i després de tocar res, executa des de l'arrel:

```bash
python3 verifica_projecte.py
```

Comprova dades, figures, guies i cablejat: presència de fitxers, els invariants
130 / 88-42 / 28-70-32, integritat guia↔pregunta, acord figura↔manifest,
convenció de noms, ordre dels `<script>`, paritat d'i18n i absència de
castellanismes. Ha de dir `Tot correcte.`

Per continuar la producció de guies hi ha un document de traspàs complet:
`HANDOFF-COMPLETAR-GUIES.md` (en anglès, pensat per a un agent que arriba en
fred), amb el full de ruta de les 78 preguntes que queden.

`docs/manifest-figures.tsv` és el registre de les 131 figures: número, pregunta,
nivell, moviment, lot i revisió. **Un número de figura és permanent**: si una
figura es redibuixa, conserva el número i puja el camp `rev`.

Les figures publicades a `assets/img/pistes/` són les de treball amb dues
modificacions automàtiques: se'ls ha esborrat el número de producció (un
artefacte del circuit de revisió, que no ha de veure l'alumne) i se'ls ha posat
el fons a blanc pur, perquè `mix-blend-mode: multiply` el faci desaparèixer sobre
el crema de la pàgina — els escanejos del llibre ja hi arriben en blanc i per
això no ho necessiten.
