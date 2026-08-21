# Geometria sintètica

Un lloc web per explorar 130 preguntes obertes de geometria sintètica. No és un banc d'exercicis per corregir-se:
cada pregunta és una porta d'entrada a una demostració o un descobriment — sense puntuació, sense respostes correctes marcades, sense
gamificació.

## Com obrir-ho

Fes doble clic a `index.html`. No cal cap servidor, cap `npm install`, cap build.
Funciona directament des del sistema de fitxers (`file://`) perquè totes les dades
viuen en fitxers JavaScript (`js/data/*.js`, que assignen a variables globals com
`window.PREGUNTES`), no en `.json` carregats amb `fetch()` — el navegador bloqueja
aquestes peticions sota `file://`.

Si prefereixes servir-ho amb un servidor local (per exemple per provar-ho des d'un
mòbil a la mateixa xarxa), qualsevol servidor estàtic funciona igual de bé:
`python3 -m http.server` des de l'arrel del projecte, per exemple.

## Què hi ha, i què no

**Hi ha:** 130 preguntes amb el seu enunciat original en anglès **i en català** (traduït); **122 de 130 amb una imatge d'enunciat**; **les 130 amb la
seva guia de demostració completa**; navegació entre preguntes; un marcador personal
"explorat" que es desa al navegador; un itinerari amb suggeriments personalitzats; un
glossari de 53 termes (26 amb figura pròpia) amb detecció automàtica de termes dins
dels enunciats **i dins del text de cada pista**; una intro "què és una demostració"
amb tres exemples resolts pas a pas; **un filtre 2D/3D i un filtre de 5 categories
temàtiques** (amb icones dibuixades a mà) a la llista de preguntes; **15 preguntes
amagades de la llista** (encara existents, mai esborrades — v. secció pròpia); i una
interfície completa en anglès i català, mostrada només en català per defecte.

### Guies de demostració

Botó "Què és una demostració?" a la capçalera introdueix el format abans que
l'alumne obri cap pregunta real. Cada guia és una escala de quatre pistes que es
revelen d'una en una, pensada per a qui sap resoldre equacions però no ha fet mai
geometria sintètica. Els quatre nivells difereixen en *espècie*, no en quantitat:

| Nivell | Què fa |
|---|---|
| 0 · encàrrec | Reformula la tasca: què has de produir? Sovint, "el resultat és una raó, no un número" |
| 1 · concreta | Particularitza, prova amb números — ataca amb el que l'alumne ja sap fer |
| 2 · figura | La construcció, com a imatge. Zero o tres paraules |
| 3 · tanca | Diu què cal mirar, sense dir la conclusió |

Després venen una **comprovació** (una predicció numèrica per contrastar amb la
pròpia resposta — mai la solució) i un **i després**. **Cap nivell dona la solució**: és una decisió de disseny,
no un oblit.

A les figures de guia, **el negre és la figura original i la sanguina és el que
hi afegeixes tu**. La distinció visual és la distinció conceptual que tot plegat
existeix per ensenyar: la figura original és un enunciat; la línia que hi
afegeixes és una decisió teva.

31 de les 130 guies tenen, a més, una segona imatge a Pista 2 (nivell 1) — un
moment visual propi, diferent del que la imatge de Pista 3 acaba mostrant, no una
repetició.

A la llista no hi ha cap marca que distingeixi les preguntes amb guia: **les
130 en tenen**, i una marca que surt sempre no informa de res. (Fins a
l'auditoria d'ago. 2026 aquí hi deia que portaven la marca ◆ — el caràcter
no és, ni ha estat mai, enlloc del codi; era la descripció d'un estat
anterior, quan només algunes preguntes tenien guia.)

### Filtres a la llista de preguntes

Dos filtres independents, tots dos com a botons tipus toggle a la capçalera de la
llista, cadascun amb el seu propi estat persistit a `localStorage` (recorden la
tria entre sessions, en aquell navegador):

- **2D / 3D** — filtra per la dimensió de la pregunta (88 preguntes en 2D, 42 en
  3D). Mai els dos toggles poden quedar apagats alhora: si es desactiva l'últim
  actiu, es reactiven tots dos.
- **Categories temàtiques** — 5 botons amb icona (triangle, pentàgon, cercle,
  el·lipse, tres punts per a "Altres"), selecció múltiple. **Cap seleccionada es
  tracta com "totes"** — invariant diferent del filtre 2D/3D a propòsit. Dades a
  `js/data/categories-tematiques-dades.js`. La sisena categoria del fitxer de
  dades ("Propietats d'aritmètica o d'àlgebra") mai es mostra al menú perquè
  totes les seves preguntes són a la llista d'amagades (v. més avall) — oferir
  un filtre que sempre donaria 0 resultats no aporta res.

**Per defecte, la primera vegada que s'obre el lloc en un navegador** (abans que
hi hagi res desat a `localStorage`): només "2D" i només "Triangles" actius — no
"tots dos" ni "totes", a petició explícita de l'última revisió de disseny.

### Exercicis amagats de la llista

15 preguntes no apareixen a la llista de preguntes, ni a "Anterior/Següent" ni
als suggeriments de l'itinerari, per una decisió de contingut de l'owner — **mai
esborrades del codi**, només excloses en pintar/suggerir (`EXERCICIS_AMAGATS`,
hardcoded a `js/ui/llista.js`, sempre la font de veritat; exposada com a
`window.geoLlista.esAmagada(id)` perquè `detall.js` i `itinerari.js` la
consultin sense duplicar-la). Segueixen accessibles amb normalitat per enllaç
directe (`#q19`, etc.) i amb la seva guia completa.

```
q18a, q18b, q19, q20, q21, q24, q34, q35, q67, q83, q84, q87, q88, q102, q106
```

(11 d'aquestes són exactament les 11 preguntes de la categoria "Propietats
d'aritmètica o d'àlgebra" senceres — per això aquesta categoria no apareix al
menú de filtres, v. més amunt; `q87`, `q67`, `q102` i `q106` s'hi van afegir en
tandes posteriors i independents — la llista ja no coincideix 1:1 amb cap
categoria sencera des d'aleshores. `q67`, `q102` i `q106` es van amagar en
comptes de dibuixar-los una imatge d'enunciat — v. §"Imatges d'enunciat noves"
més avall).

Per tornar a fer visible una pregunta, treu-ne l'id d'`EXERCICIS_AMAGATS` — res més
cal tocar.

### Glossari

Botó "📖 Glossari" a la capçalera: un panell de cerca i navegació per categoria amb
53 termes (triangles, angles, cercles, polígons, sòlids, còniques...), més la
detecció automàtica de qualsevol d'aquests termes **dins l'enunciat d'una pregunta
i dins del text de cada Pista (1-4) d'una guia** — mai a la comprovació ni a
l'"i després", per decisió explícita. El terme apareix subratllat i, en clicar-lo,
un popover hi mostra la definició al mateix lloc.

Dades a `js/data/glossari-dades.js`. **26 dels 53 termes tenen figura pròpia**
(la resta espera il·lustracions — v. `docs/guies/NOTA-GLOSSARI-MILLORES.md`). Les
figures són **tinta sola, sense sanguina**: aquí no hi ha "figura del llibre" vs
"afegit de l'alumne", només un sol diagrama — un accent (`--pencil`) marca els noms
de terme.

### Itinerari

Cada pregunta que obres es registra; un control de valoració (molt / normal / poc,
independent del checkbox "explorat") i un bloc "suggerit per a tu" amb fins a tres
opcions ranquejades —cadascuna amb la seva raó explícita, mai un sol "següent"
imposat— conviuen amb la navegació anterior/següent de sempre, mai en lloc seu.
Estat a `localStorage`, motor a `js/nucli/itinerari.js`.

### "Què és una demostració?"

Enllaç "Què és una demostració?" a la capçalera (`#demo`): tres demostracions
completes, cadascuna reestructurada en **6 passos revelats d'un en un** amb el
mateix mecanisme que les guies reals (`pintaGuia`/`revela` a `detall.js`) — canvi
deliberat respecte del disseny original ("sempre visible sencer"), a petició
explícita de l'owner per forçar un bucle real llegir → provar al paper → comparar
→ comprovar. Pas 0 = context (sempre visible); passos 1-4 = un per panell de la
figura, cadascun amb "Try it on paper first" (abans de mirar la resta del pas) +
l'argument + la figura d'aquell panell + "Check yourself"; pas 5 = tancament +
enllaç a una pregunta real relacionada. Després de les tres demos, un bloc de
tancament compartit (`window.DEMOS_TANCAMENT`) les anomena explícitament com a
tres famílies d'estratègia (afegir el que falta / reconèixer la simetria /
reduir a allò conegut).

Un alumne que arriba per primer cop (sense cap pregunta feta encara) hi és enviat
un únic cop; qui hi torna, mai més. Dades a `js/data/demos-dades.js`, figures a
`assets/img/demo/demo-0N-pM.png` (5 panells independents × 3 demos = 15 fitxers).

### Ordre de presentació

L'ordre en què es veuen les 130 preguntes (a la llista, i a "anterior/
següent" dins d'una pregunta) viu tot sol a `js/data/ordre-preguntes.js` — un array pla d'ids,
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
dificultat o de dimensió— i on no ho és, es respecta l'ordre de disseny original. `js/nucli/ordre.js` és qui ho resol en temps
d'execució (amb degradació segura si l'array queda incomplet o
desapareix); `js/data/preguntes-dades.js` mai canvia d'ordre — segueix
sent, sempre, l'ordre de disseny original.

**No hi ha, i per què:**

| Element | Per què no hi és |
|---|---|
| Correcció o puntuació | El llibre no en té — cada pregunta és un punt de partida per pensar-hi, no un test |
| Pistes curtes (`pista`) | `pista.en`/`pista.ca` continuen sent `null` a totes 130. NO les substitueixen les guies: són coses diferents (una pista curta seria una frase; una guia és una escala completa). El botó 💡 simplement no apareix quan no n'hi ha |
| Figures per a 27 dels 53 termes del glossari | Contingut escrit; il·lustracions pendents — v. `docs/guies/NOTA-GLOSSARI-MILLORES.md` |
| 8 preguntes sense gràfic d'enunciat | Són exactament les 8 preguntes d'`EXERCICIS_AMAGATS` que no tenen imatge (v. secció pròpia) — cap pregunta VISIBLE a la llista es queda mai sense imatge des de la ronda `docs/guies/figures-enunciats-D.html` (v. `docs/guies/NOTA-ENUNCIATS-D.md`) |
| Assignació per curs (`#curs=2ESO` i similars) | El camp `curs` existeix a l'esquema de dades però és `null` arreu — decisió de contingut ajornada conscientment, no una limitació tècnica. El filtre ja funciona (prova-ho a la barra d'adreces); simplement no hi ha encara cap valor assignat |
| Mode d'interacció (resposta oberta, dibuix, etc.) | Ídem: `interaccio` és `null` a tot arreu, estructura preparada, contingut pendent. La interactivitat real (punts arrossegables, recàlcul en viu) exigiria una capa de renderitzat completament diferent de la que hi ha ara (`docs/render.js` genera PNG estàtics per disseny, no SVG/canvas en viu al navegador) — un canvi d'arquitectura real, no una dada per omplir |
| Selector d'idioma visible | Amagat de la interfície a petició explícita ("mostra només la capa del català"). La capacitat multilingüe NO s'ha eliminat: `ui-strings.js` conserva les dues capes senceres, i `window.geoI18n.setLang("en")` (o `?lang=en` a la URL) segueix funcionant |

## Estructura

```
index.html                    — única pàgina real de l'app
assets/img/                   — 122 imatges d'enunciat (67 escanejades + 55 dibuixades a mà)
assets/img/pistes/            — 162 figures de guia (131 originals + 31 de Pista 2)
assets/img/glossari/          — 26 figures del glossari (de 53 termes)
assets/img/demo/               — 15 figures de la intro "què és una demostració" (5 panells × 3)
assets/img/icones/            — 5 icones del filtre de categories temàtiques
css/
  tokens.css                  — variables de disseny (color, tipografia, espai)
  base.css                    — ritme de lectura, layout "llibre obert"
  components.css              — elements interactius (botons, glossari, itinerari, demo, filtres...)
js/
  data/
    preguntes-dades.js        — les 130 preguntes, en/ca (generat, no editar a mà — v. més avall)
    ordre-preguntes.js        — ordre de PRESENTACIÓ, separat de l'ordre del llibre — s'edita a mà
    guies-dades.js             — les 130 guies — (generat per parse_guies.py, no editar a mà)
    categories-tematiques-dades.js — classificació temàtica de les 130 preguntes en 6 categories (s'edita a mà)
    glossari-dades.js         — els 53 termes del glossari (s'edita a mà)
    demos-dades.js             — les 3 demostracions fixes, model de passos (s'edita a mà)
  i18n/
    ui-strings.js             — textos d'interfície en/ca
    i18n-core.js              — resolució d'idioma i lookup de textos
  nucli/
    contingut.js              — fallback de contingut (enunciat.ca → en quan falta)
    ordre.js                    — resol ordre-preguntes.js de manera segura
    progres.js                — marcador "explorat", desat a localStorage
    guies.js                   — unió guia↔pregunta per id
    glossari.js                — accés al glossari + detecció de termes dins de text
    itinerari.js                — estat i motor de recomanació
    demos.js                    — estat de la intro "què és una demostració"
    router.js                 — hash-routing (#q01, #curs=2ESO, #demo...)
  ui/
    llista.js                 — vista "totes les preguntes" (filtres, exercicis amagats)
    detall.js                 — vista d'una pregunta
    glossari.js                — panell overlay + popovers inline
    demo.js                     — vista "què és una demostració" (mecanisme de passos)
    main.js                   — connecta el router a les vistes, força l'idioma català
docs/
  guies/                      — .md font de les guies, notes de lliurament, HTML de figures
  *.html                      — fonts de figures (render.js les converteix a PNG)
  manifest-figures.tsv        — registre de les 162 figures de guia
```

Els documents de disseny que les capçaleres del codi citen amb número de
secció (`§4.2 de GLOSSARY-DESIGN-NOTES.md` i companyia) **no són en aquest
repositori**: eren documents de treball externs. `docs/DOCUMENTS-DE-DISSENY.md`
diu, un per un, quins són, què hi havia a cada secció citada i on ha anat a
parar aquell contingut. `verifica_projecte.py` vigila que no n'apareguin de
nous sense declarar.

Per a detalls tècnics de cada decisió de disseny (per què cada fitxer és com és, quins
patrons dels projectes germans es reutilitzen i quins es descarten, i per què), consulta
`PROJECTES-TECHNICAL-REFERENCE.md`.

## Regenerar les dades

`js/data/preguntes-dades.js` es va generar amb `build_preguntes_dades.py` a
partir del JSON d'extracció original. **Avís operatiu: aquell script no és en
aquest repositori** — l'owner el va arxivar a fora un cop feta la
transformació, que no es torna a fer (v. `HANDOFF-COLD-START.md` §4 i
`docs/DOCUMENTS-DE-DISSENY.md`). Conseqüència pràctica: **aquest fitxer no es
pot regenerar avui**; és, de facto, la font de veritat, i s'edita a mà amb
compte.

Això no és tan greu com sona, perquè bona part del seu contingut ja s'editava
a mà de tota manera: `enunciat.ca`, `pista.*`, `notaEditorial.*` i el camp
`imatge` de la Part 1 no venien mai del JSON font. El que s'ha perdut és la
capacitat de refer els camps que sí que en venien (`enunciat.en`, `pagina`,
`_notaExtraccio`) si mai calgués tornar a passar el PDF.

`js/data/guies-dades.js` **tampoc s'edita a mà** — es genera amb
`python3 parse_guies.py` a partir dels `.md` a `docs/guies/GUIES-LOT-N.md`.
Circuit:

```
docs/guies/GUIES-LOT-N.md   ← s'escriu i es revisa AQUÍ
        │
        │  python3 parse_guies.py
        ▼
js/data/guies-dades.js      ← generat; no editar
```

Les figures es generen amb `docs/guies/figures-NN.html` (o
`docs/glossari-figures.html`, `docs/demo-figures.html`,
`docs/icones-categories.html`, `docs/guies/figures-enunciats-*.html` per a la
Part 1, `docs/guies/figures-part2-*.html` per a la Part 2), que carreguen
`docs/hand-draw.js` + `docs/comu.js` i es capturen amb `node docs/render.js`.
La tècnica de dibuix (per què una mà encerta la tangència però no els 90°, etc.)
està documentada a `docs/HAND_DRAWN_GEOMETRY_TECHNIQUE.md`.

Abans i després de tocar res, executa des de l'arrel:

```bash
python3 verifica_projecte.py
```

Ha de dir `Tot correcte.`

`docs/manifest-figures.tsv` és el registre de les figures de guia (162: 131
originals + 31 de Pista 2). **Un número de figura és permanent**: si una figura
es redibuixa, conserva el número.

Les figures publicades a `assets/img/pistes/` són les de treball amb dues
modificacions automàtiques: se'ls ha esborrat el número de producció i se'ls ha
posat el fons a blanc pur, perquè `mix-blend-mode: multiply` el faci desaparèixer
sobre el crema de la pàgina.

## Estat i propers passos

**Les 130 de 130 preguntes tenen guia de demostració completa.** **122 de 130
tenen imatge d'enunciat — les 8 restants són exactament les 8 preguntes
d'`EXERCICIS_AMAGATS` sense imatge; cap pregunta visible es queda sense.**
**53 de 53 termes del glossari tenen figura** (completat — v.
`docs/guies/NOTA-GLOSSARI-27-FIGURES.md`).
**15 preguntes estan amagades de la llista** (i de "Anterior/Següent" i dels
suggeriments de l'itinerari) per decisió de contingut (mai
esborrades). Filtres 2D/3D i de 5 categories temàtiques funcionant, amb icones
pròpies i persistència de la tria a `localStorage`. Les tres demos
d'introducció reestructurades en passos revelats amb el mateix mecanisme que
les guies reals.

Pendents coneguts, cap dels quals bloqueja l'ús actual del lloc:

- Assignació de `curs` i mode d'`interaccio` per pregunta.

Historial complet de lliuraments (ordre cronològic, cada un amb la seva pròpia
nota tècnica a `docs/guies/NOTA-*.md`): les 130 guies del llibre (lots 1-10,
fusionats), l'ordre de presentació configurable, la Part 1 (47 imatges
d'enunciat), la Part 2 (31 imatges de Pista 2), l'anàlisi de contingut de Pista
3, el redisseny de les tres demos en cinc panells, les millores del glossari
(espaiat, imatge trencada, termes clicables a les pistes, 7 figures noves, i
després les 27 figures restants fins a 53/53), el redisseny de les demos en
passos revelats, la neteja de capçalera (eyebrow i selector d'idioma fora,
títol nou), el filtre de categories temàtiques amb exercicis amagats, les
icones de categoria, el polit final de focus/border dels filtres, l'etiqueta
"Qüestió N" i altres polits de capçalera/llista, el lot D d'imatges d'enunciat
(8 preguntes noves il·lustrades, 3 amagades en lloc d'il·lustrar-les — v.
`docs/guies/NOTA-ENUNCIATS-D.md`), l'auditoria tècnica i de rigor matemàtic
d'ago. 2026 (`docs/AUDITORIA-RIGOR-GUIES.md`), i, en paral·lel, el pas de
"cercle" a "circumferència" als enunciats de `preguntes-dades.js` (el terme
geomètric general —"sector de cercle" i similars— es manté allà on toca dins
de les guies i el glossari).
