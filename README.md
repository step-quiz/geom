# Geometria sintètica

Un lloc web per explorar 130 preguntes obertes de geometria sintètica. No és un banc d'exercicis per corregir-se:
cada pregunta és una porta d'entrada a una demostració o un descobriment — sense puntuació, sense respostes correctes marcades, sense
gamificació.
Cal fer dos matisos a la frase anterior. En primer lloc, com a versió del
professorat existeix la carpeta `solucions/` (118 solucions treballades, mai
enllaçades des del lloc de l'alumnat — v. `sol.html` i
`COORDINACIO-AGENTS-SOLUCIONS.md`). En segon lloc, l'alumnat pot demanar de fer
un examen escrit, presencial i per resoldre amb paper i llapis, un cop ha enviat
al professorat el codi de les preguntes que ha explorat — v. `LLEGEIX-ME.md` i
la secció "Prova escrita" més avall.

## Com obrir-ho

Fes doble clic a `index.html`. No cal cap servidor, cap `npm install`, cap build.
Funciona directament des del sistema de fitxers (`file://`) perquè totes les dades
viuen en fitxers JavaScript (`js/data/*.js`, que assignen a variables globals com
`window.PREGUNTES`), no en `.json` carregats amb `fetch()` — el navegador bloqueja
aquestes peticions sota `file://`. **No cal connexió a internet:** des del set.
2026 ni les fonts no venen de fora (`css/fonts.css`, `assets/fonts/`), i cap
pàgina no fa cap petició a la xarxa (`tests/smoke.js` ho comprova).

Si prefereixes servir-ho amb un servidor local (per exemple per provar-ho des d'un
mòbil a la mateixa xarxa), qualsevol servidor estàtic funciona igual de bé:
`python3 -m http.server` des de l'arrel del projecte, per exemple.

## Què hi ha, i què no

**Hi ha:** 130 preguntes amb el seu enunciat original en anglès **i en català** (traduït); **125 de 130 amb una imatge d'enunciat**; **les 130 amb la
seva guia de demostració completa**; navegació entre preguntes; un marcador personal
"explorat" que es desa al navegador; un itinerari reactiu amb suggeriments
personalitzats **i sis itineraris temàtics fixos**; un
glossari de 56 termes (**tots 56 amb figura pròpia**) amb detecció automàtica de termes dins
dels enunciats **i dins del text de cada pista**; una intro "què és una demostració"
amb tres exemples resolts pas a pas; **un filtre 2D/3D i un filtre de 5 categories
temàtiques** (amb icones dibuixades a mà) a la llista de preguntes; **12 preguntes
amagades de la llista** (encara existents, mai esborrades — v. secció pròpia); una
interfície completa en anglès i català, mostrada només en català per defecte; i,
per al professorat, **118 solucions treballades** (`solucions/`, mai enllaçades des
del lloc de l'alumnat) i un **generador de proves escrites** a partir de les
preguntes que cada alumne ha explorat (`analitzador-geom.html`).

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

Per això la distinció ha de sobreviure al **mode fosc** del dispositiu. Les
figures són PNG amb fons blanc que es fonen amb el paper amb
`mix-blend-mode: multiply`; sobre un paper fosc, el mateix multiply feia
gairebé invisibles la tinta i la sanguina. Des del set. 2026, en mode fosc cada
figura porta a sota un full de paper clar (tokens `--figure-sheet*` de
`css/tokens.css`), i en mode clar res no canvia.

32 de les 130 guies tenen, a més, una segona imatge a Pista 2 (nivell 1) — un
moment visual propi, diferent del que la imatge de Pista 3 acaba mostrant, no una
repetició. (La xifra va ser 31 durant la ronda `NOTA-PART2-PISTA2.md`; una figura
més s'hi va afegir després.)

El repartiment exacte de les 162 figures de guia, comptat sobre
`js/data/guies-dades.js`:

| On viu la figura | Quantes |
|---|---|
| Pista 3 (nivell 2) — la figura de l'escala | 129 |
| Pista 2 (nivell 1) — el moment visual propi | 32 |
| Pista 4 (nivell 3) — cas únic: `q15`, l'única guia sense figura a nivell 2 | 1 |

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

12 preguntes no apareixen a la llista de preguntes, ni a "Anterior/Següent" ni
als suggeriments de l'itinerari, per una decisió de contingut de l'owner — **mai
esborrades del codi**, només excloses en pintar/suggerir (`EXERCICIS_AMAGATS`,
hardcoded a `js/ui/llista.js`, sempre la font de veritat; exposada com a
`window.geoLlista.esAmagada(id)` perquè `detall.js` i `itinerari.js` la
consultin sense duplicar-la). Segueixen accessibles amb normalitat per enllaç
directe (`#q19`, etc.) i amb la seva guia completa.

```
q18a, q18b, q19, q20, q21, q24, q34, q35, q67, q83, q102, q106
```

(9 d'aquestes són exactament les 9 preguntes que queden a la categoria
"Propietats d'aritmètica o d'àlgebra" senceres — per això aquesta categoria no
apareix al menú de filtres, v. més amunt; `q67`, `q102` i `q106` s'hi van
afegir en una tanda posterior i independent — la llista no coincideix 1:1 amb
cap categoria sencera des d'aleshores.

**q84, q87 i q88 eren en aquesta llista i se'n van treure** (ago. 2026, en
tancar la revisió matemàtica): les tres **estableixen** resultats que la resta
del quadern fa servir —sin²+cos²=1, el sinus d'un angle obtús i les fórmules de
l'angle doble—, o sigui que el quadern les demostrava en llocs on l'alumne no
podia entrar i les feia servir en llocs on sí. Publicar-les va comportar tres
canvis més que hi van junts: escriure'ls la solució, afegir-les a l'itinerari
"triangles", i recategoritzar `q84` i `q88` de "aritmetica_algebra" a
"triangles" —perquè aquella categoria no té itinerari ni surt al menú, i pel
contingut totes dues pertanyen als triangles. `q67`, `q102` i `q106` es van amagar en
comptes de dibuixar-los una imatge d'enunciat — v. §"Imatges d'enunciat noves"
més avall).

Per tornar a fer visible una pregunta, treu-ne l'id d'`EXERCICIS_AMAGATS` — res més
cal tocar.

### Glossari

Botó "📖 Glossari" a la capçalera: un panell de cerca i navegació per categoria amb
56 termes (triangles, angles, cercles, polígons, sòlids, còniques...), més la
detecció automàtica de qualsevol d'aquests termes **dins l'enunciat d'una pregunta
i dins del text de cada Pista (1-4) d'una guia** — mai a la comprovació ni a
l'"i després", per decisió explícita. El terme apareix subratllat i, en clicar-lo,
un popover hi mostra la definició al mateix lloc.

Dades a `js/data/glossari-dades.js`. **Els 56 termes tenen figura pròpia**
(34 fitxers: n'hi ha que en comparteixen una — v.
`docs/guies/NOTA-GLOSSARI-27-FIGURES.md`). Les figures són **tinta sola, sense sanguina**: aquí no hi ha "figura del llibre" vs
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

### Itineraris temàtics

Sis camins editorials **fixos** (`js/data/itineraris-tematics-dades.js`, motor a
`js/nucli/itineraris-tematics.js`, interfície a `js/ui/itineraris.js`) que
recorren les 118 preguntes visibles agrupades per tema:

```
2D · Triangles · Polígons · Circumferència · Còniques · Altres        3D
```

No s'han de confondre amb l'itinerari de la secció anterior, que és **reactiu i
individual**: aquell suggereix 1-3 preguntes properes segons l'historial de cada
alumne i canvia amb ell; aquests són els mateixos per a tothom i no depenen de
res que l'alumne hagi fet. Són, de fet, una reorganització en seqüències de les
mateixes categories temàtiques del filtre, no una classificació nova.

Cada entrada porta el seu `ordre` dins de l'itinerari, les preguntes que
`requereix` (dependències reals documentades a les guies) i les seves
`bessones` (preguntes que ataquen la mateixa idea des d'un altre angle, i que la
vista de detall ofereix com a "veure també"). Les 12 preguntes d'
`EXERCICIS_AMAGATS` no hi surten mai. Disseny complet a
`docs/ITINERARIS-TEMATICS-DESIGN-NOTES.md`.

### Cerca, mode projector i fitxa impresa

- **Cerca** (a la llista): per paraula o per número ("84" troba la Qüestió
  84), sense distingir majúscules ni accents. Mentre hi ha text, busca a
  totes les preguntes visibles i deixa de banda els filtres 2D/3D i de
  categoria (un avís ho diu). No es desa: és una consulta del moment.
- **Mode projector** (botó a cada pregunta): pantalla completa, lletra i
  figura grans, sense capçalera ni navegació. Es porta amb el teclat o amb un
  passador de diapositives: **→ / espai / PageDown** revela la pista següent i,
  quan ja són totes obertes, passa a la pregunta següent; **← / PageUp** torna
  a la pregunta anterior; **Esc** surt. Entrar-hi o sortir-ne no tanca les
  pistes que ja estaven obertes.
- **Imprimeix la fitxa** (botó a cada pregunta, o Ctrl+P): al paper surten
  l'enunciat, la figura i la guia sencera —les quatre pistes amb les seves
  figures, la comprovació i l'"i després"—, sigui quina sigui la pista a què
  s'ha arribat a la pantalla, i sempre en negre sobre blanc (també si el
  dispositiu és en mode fosc). Les figures de les pistes només es baixen en
  el moment d'imprimir (botó o Ctrl+P), no cada cop que s'obre una pregunta.
  Des del menú del navegador (Fitxer → Imprimeix) potser no arriben a temps:
  millor el botó.

Codi a `js/ui/llista.js` (cerca) i `js/ui/detall.js` (`pintaEines`,
`commutaProjector`, `ajustaAlcada`, `pintaFitxaImpresa`, `imprimeix`); estils al final de
`css/components.css`.

### Prova escrita a partir del que s'ha explorat

Un alumne pot demanar de fer un **examen presencial en paper** sobre les
preguntes que ha treballat. El flux són tres passos i cap servidor:

1. A la llista, l'alumne clica **«Copia el meu codi»** i obté una línia:
   `GEO1-q01,q05,q08a,q22,q41`. La pot enganxar a un WhatsApp, un correu o una
   casella de formulari; si el porta-retalls falla, el codi es queda visible en
   un camp per seleccionar-lo a mà.
2. Te l'envia.
3. Obres `analitzador-geom.html`, l'enganxes, tries 1, 2 o 3 preguntes, i
   imprimeixes l'enunciat i la figura reals — sense opcions, per respondre per
   escrit.

El lector és tolerant a propòsit (majúscules, espais, comes, punts i coma, salts
de línia, i el fitxer `.txt` del format antic), perquè el codi passa per canals
que el maltracten. Els ids que no reconeix no bloquegen la prova però **es
diuen**, per si el codi s'ha copiat a mitges. Les preguntes d'`EXERCICIS_AMAGATS`
no hi surten mai, encara que l'alumne hi hagi entrat per enllaç directe.

No hi ha cap control anti-frau, i és deliberat: aquí no hi ha nota que es pugui
falsejar. La llista és una declaració de l'alumne, no una verificació — l'examen
comprova què sap fer avui, no què va fer al lloc.

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
algunes cadenes de dependència travessaven la frontera de
dificultat o de dimensió— i on no ho és, es respecta l'ordre de disseny original.

Des del set. 2026 hi ha dues garanties, que `verifica_projecte.py` comprova:
**cap guia no surt abans d'una pregunta de la qual declara dependre**, i
**cap pregunta no és més fàcil que una de la qual depèn** (si en depèn, com
a mínim és tan difícil com ella). Les dependències que creuaven la frontera
entre grups eren, o bé falses (es van reformular), o bé dificultats mal
classificades (9 preguntes van pujar de dificultat i es van col·locar just
darrere de la que necessiten; v. `docs/guies/NOTA-COHERENCIA-SET-2026.md`).
El mateix val dins de cada itinerari temàtic.

`js/nucli/ordre.js` és qui resol l'ordre en temps
d'execució (amb degradació segura si l'array queda incomplet o
desapareix); `js/data/preguntes-dades.js` mai canvia d'ordre — segueix
sent, sempre, l'ordre de disseny original.

**No hi ha, i per què:**

| Element | Per què no hi és |
|---|---|
| Correcció o puntuació | El llibre no en té — cada pregunta és un punt de partida per pensar-hi, no un test |
| Pistes curtes (`pista`) | `pista.en`/`pista.ca` continuen sent `null` a totes 130. NO les substitueixen les guies: són coses diferents (una pista curta seria una frase; una guia és una escala completa). El botó 💡 simplement no apareix quan no n'hi ha |
| 5 preguntes sense gràfic d'enunciat | Són exactament 5 de les amagades (`q21 q35 q67 q102 q106`, v. secció pròpia): cap pregunta visible no es queda sense imatge. `q84`, `q87` i `q88`, visibles des de l'ago. 2026, van estar sense imatge fins al set. 2026, quan van rebre `fig-217`–`fig-219` (lot E, `docs/guies/figures-enunciats-E.html`) |
| Assignació per curs (`#curs=2ESO` i similars) | El camp `curs` existeix a l'esquema de dades però és `null` arreu — decisió de contingut ajornada conscientment, no una limitació tècnica. El filtre ja funciona (prova-ho a la barra d'adreces); simplement no hi ha encara cap valor assignat |
| Mode d'interacció (resposta oberta, dibuix, etc.) | Ídem: `interaccio` és `null` a tot arreu, estructura preparada, contingut pendent. La interactivitat real (punts arrossegables, recàlcul en viu) exigiria una capa de renderitzat completament diferent de la que hi ha ara (`docs/render.js` genera PNG estàtics per disseny, no SVG/canvas en viu al navegador) — un canvi d'arquitectura real, no una dada per omplir |
| Selector d'idioma visible | Amagat de la interfície a petició explícita ("mostra només la capa del català"). La capacitat multilingüe NO s'ha eliminat: `ui-strings.js` conserva les dues capes senceres, i `window.geoI18n.setLang("en")` (o `?lang=en` a la URL) segueix funcionant |

## Estructura

```
index.html                    — única pàgina real de l'app (la de l'alumnat)
assets/img/                   — 125 imatges d'enunciat (67 escanejades + 58 dibuixades a mà)
assets/img/pistes/            — 162 figures de guia (129 a Pista 3 + 32 a Pista 2 + 1 a Pista 4)
assets/img/glossari/          — 34 figures del glossari (cobreixen els 56 termes: n'hi ha
                                que en comparteixen una, v. NOTA-GLOSSARI-27-FIGURES.md)
assets/img/demo/               — 15 figures de la intro "què és una demostració" (5 panells × 3)
assets/img/icones/            — 5 icones del filtre de categories temàtiques
assets/fonts/                 — Source Serif 4 i JetBrains Mono (woff2) i les seves llicències (OFL)
css/
  fonts.css                   — les fonts, servides des del repositori (sense Google Fonts)
  tokens.css                  — variables de disseny (color, tipografia, espai)
  base.css                    — ritme de lectura, layout "llibre obert"
  components.css              — elements interactius (botons, glossari, itinerari, demo, filtres,
                                cerca, mode projector i full d'impressió)
js/
  data/
    preguntes-dades.js        — les 130 preguntes, en/ca (generat, no editar a mà — v. més avall)
    ordre-preguntes.js        — ordre de PRESENTACIÓ, separat de l'ordre del llibre — s'edita a mà
    guies-dades.js             — les 130 guies — (generat per parse_guies.py, no editar a mà)
    categories-tematiques-dades.js — classificació temàtica de les 130 preguntes en 6 categories (s'edita a mà)
    itineraris-tematics-dades.js — els 6 itineraris temàtics fixos sobre les 118 visibles,
                                i els grups de preguntes entrellaçades (s'edita a mà)
    glossari-dades.js         — els 56 termes del glossari (s'edita a mà)
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
    itinerari.js                — estat i motor de recomanació REACTIU (per alumne)
    itineraris-tematics.js      — accés als 6 itineraris FIXOS (editorials, iguals per a tothom)
    demos.js                    — estat de la intro "què és una demostració"
    router.js                 — hash-routing (#q01, #curs=2ESO, #demo...)
  ui/
    llista.js                 — vista "totes les preguntes": cerca, filtres 2D/3D i de
                                categories, i exercicis amagats (EXERCICIS_AMAGATS)
    export.js                 — el botó "Copia el meu codi" (codi GEO1-… per a la prova escrita)
    detall.js                 — vista d'una pregunta
    glossari.js                — panell overlay + popovers inline
    demo.js                     — vista "què és una demostració" (mecanisme de passos)
    itineraris.js               — entrada i navegació dels itineraris temàtics
    main.js                   — connecta el router a les vistes, força l'idioma català
docs/
  guies/                      — .md font de les guies, notes de lliurament, HTML de figures
  *.html                      — fonts de figures (render.js les converteix a PNG)
  comu.js, hand-draw.js       — motor de dibuix a mà alçada i ajudants compartits
  render.js                   — captura els <canvas> d'un .html a PNG
  playwright-cami.js          — troba el paquet playwright sigui on sigui instal·lat
  lliuraments/                — notes d'instal·lació de ZIP antics (registre)
  publish_figures.py          — esborra el segell de producció i posa el fons blanc pur
  manifest-figures.tsv        — registre de les 162 figures de guia
  DOCUMENTS-DE-DISSENY.md     — on ha anat a parar cada document de disseny citat al codi

Per al professorat (mai enllaçat des d'index.html):
sol.html                      — índex de les solucions
solucions/                    — 118 solucions treballades, una per pregunta visible
COORDINACIO-AGENTS-SOLUCIONS.md — regles per a qui hi escriu
analitzador-geom.html         — genera una prova escrita (GENERAT, no editar)
analitzador-geom-plantilla.html — la seva font
build_analitzador_geom.py     — la compila
LLEGEIX-ME.md                 — què fa la prova escrita i com s'hi arriba

Eines de manteniment:
verifica_projecte.py          — comprovació d'integritat; ha de dir "Tot correcte."
amagats.py                    — l'única lectura d'EXERCICIS_AMAGATS des de Python
regenera.py                   — refà TOTS els fitxers generats (les quatre línies de sota)
  parse_guies.py              — GUIES-LOT-N.md → js/data/guies-dades.js
  genera-solucions-dades.py   — solucions/*.html → js/data/solucions-dades.js
  build_analitzador_geom.py   — → analitzador-geom.html
  actualitza_versio_css.py    — el ?v= dels CSS, calculat del seu contingut
processa_uploads.py           — descomprimeix _uploads/*.zip i aplica _ESBORRA.txt
optimitza_png.py              — comprimeix els PNG sense pèrdua (només si el resultat és píxel-idèntic)
tests/smoke.js                — el lloc sencer en un navegador real (Playwright)
next_figure_number.py         — quin és el proper número de figura lliure
.github/workflows/
  unzip-upload.yml            — processa cada ZIP pujat: descomprimeix, regenera, verifica
  verifica.yml                — verifica cada Pull Request
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

## Com arriben els canvis al repositori

El camí habitual és pujar un **ZIP a `_uploads/`** (des de la web de GitHub:
*Add file → Upload files*). Una GitHub Action (`.github/workflows/unzip-upload.yml`)
fa tota la resta sola, en uns tres minuts:

1. **descomprimeix** el ZIP sobre l'arrel del repositori, sobreescrivint;
2. **esborra** els fitxers que demani `_ESBORRA.txt`, si el ZIP en porta un a
   l'arrel (un camí per línia; `#` per a comentaris). Abans, un ZIP no podia
   esborrar res (LESSONS.md §4);
3. **regenera** els fitxers generats (`regenera.py`), inclòs el `?v=` dels CSS;
4. **verifica** amb `verifica_projecte.py` i amb `tests/smoke.js` (el lloc
   sencer en un Chromium real);
5. si tot és correcte, fa **commit a `main`**. Si alguna cosa falla, **`main`
   no es toca** (només se'n treu el ZIP): el resultat es desa a una branca
   `upload-revisar/N`, i l'execució surt en vermell.

On mirar-ho: pestanya **Actions** del repositori → l'execució més recent. El
resum explica què s'ha descomprimit, què s'ha esborrat i el resultat de cada
comprovació. Si s'ha comprimit la carpeta sencera (`geom-main/...`) en lloc del
seu contingut, l'Action ho detecta i ho corregeix sola, i ho diu. El que **no**
pot fer és tocar `.github/` (GitHub no deixa que una Action canviï els seus
propis workflows): si un ZIP en porta, s'ignora i el resum ho diu.

La mateixa Action s'executa també quan es canvia directament a `main` alguna
font d'un fitxer generat (per exemple, un CSS editat des de la web): així els
fitxers generats no queden mai desfasats.

Els **Pull Requests** passen per `.github/workflows/verifica.yml`: fitxers
generats al dia, `verifica_projecte.py` i `tests/smoke.js` en mode clar i fosc.

## Regenerar les dades

**Tots els fitxers generats es refan amb una sola ordre:** `python3 regenera.py`
(la GitHub Action d'uploads ja ho fa sola). El detall de cadascun:

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

Els itineraris temàtics (`js/data/itineraris-tematics-dades.js`) i la
classificació temàtica (`js/data/categories-tematiques-dades.js`) **s'editen a
mà**; el disseny està documentat a `docs/ITINERARIS-TEMATICS-DESIGN-NOTES.md`.

`analitzador-geom.html` es genera amb `python3 build_analitzador_geom.py`, que
llegeix `js/data/preguntes-dades.js` i la llista `EXERCICIS_AMAGATS` de
`js/ui/llista.js`, i hi incrusta les 119 imatges de les preguntes visibles en
base64 perquè el fitxer funcioni desat a qualsevol carpeta. **Cal tornar-lo a
executar cada cop que canviïn els enunciats, les imatges o la llista d'amagades.**

Les figures es generen amb `docs/guies/figures-NN.html` (o
`docs/glossari-figures.html`, `docs/demo-figures.html`,
`docs/icones-categories.html`, `docs/guies/figures-enunciats-*.html` per a la
Part 1, `docs/guies/figures-part2-*.html` per a la Part 2), que carreguen
`docs/hand-draw.js` + `docs/comu.js` i es capturen amb `node docs/render.js`.
La tècnica de dibuix (per què una mà encerta la tangència però no els 90°, etc.)
està documentada a `docs/HAND_DRAWN_GEOMETRY_TECHNIQUE.md`.

Abans i després de tocar res, executa des de l'arrel:

```bash
python3 regenera.py
python3 verifica_projecte.py     # ha de dir "Tot correcte."
node tests/smoke.js              # ha de dir "✓ Tot correcte." (uns 2 minuts)
```

El `?v=` dels fulls d'estil (`index.html` i `solucions/*.html`) **ja no
s'edita a mà**: és una empremta del contingut dels CSS i el posa
`actualitza_versio_css.py`. Si el CSS no canvia, no canvia; si canvia, canvia
sol (v. LESSONS.md §3 per saber per què el número manual fallava).

`docs/manifest-figures.tsv` és el registre de les 162 figures de guia. **Un
número de figura és permanent**: si una figura es redibuixa, conserva el número.

Les columnes `id`, `moviment` i `lot` coincideixen al 100 % amb
`js/data/guies-dades.js` (comprovat fila a fila), i són les que fan servir les
notes de lliurament. **La columna `nivell` és informativa i no és la font de
veritat**: durant les rondes de revisió, unes quantes figures van canviar de
pista dins de la guia sense que el manifest s'actualitzés, i avui 69 de les 162
files hi diuen un nivell que no és on viu la figura. Si necessites saber a quina
pista surt una figura, mira `guies-dades.js`, no el manifest.

Les figures publicades a `assets/img/pistes/` són les de treball amb dues
modificacions automàtiques: se'ls ha esborrat el número de producció i se'ls ha
posat el fons a blanc pur, perquè `mix-blend-mode: multiply` el faci desaparèixer
sobre el crema de la pàgina.

## Estat i propers passos

**Les 130 de 130 preguntes tenen guia de demostració completa.** **125 de 130
tenen imatge d'enunciat**; les 5 restants són amagades, i cap pregunta visible
no es queda sense.
**56 de 56 termes del glossari tenen figura** (completat — v.
`docs/guies/NOTA-GLOSSARI-27-FIGURES.md`).
**12 preguntes estan amagades de la llista** (i de "Anterior/Següent" i dels
suggeriments de l'itinerari) per decisió de contingut (mai
esborrades). Filtres 2D/3D i de 5 categories temàtiques funcionant, amb icones
pròpies i persistència de la tria a `localStorage`. Les tres demos
d'introducció reestructurades en passos revelats amb el mateix mecanisme que
les guies reals.

Pendents coneguts, cap dels quals bloqueja l'ús actual del lloc:

- Assignació de `curs` i mode d'`interaccio` per pregunta (avui `null` a totes
  130; el filtre `#curs=2ESO` ja funciona i no troba res, que és el
  comportament honest fins que hi hagi contingut).
- Les pistes curtes (`pista.ca`/`pista.en`) segueixen `null` a totes 130. No
  són el mateix que les guies i no les substitueixen.
- La columna `nivell` de `docs/manifest-figures.tsv` va desfasada respecte de
  `guies-dades.js` en 69 de 162 files (les columnes `id`, `moviment` i `lot`
  hi coincideixen al 100 %).
- `sol.html` descobreix les solucions amb `fetch()`, que sota `file://` està
  bloquejat: obert per doble clic, la secció de descoberta surt buida i només
  es veu la llista escrita a mà. Per veure-la sencera cal servir el projecte
  (`python3 -m http.server`). La resta del lloc no en depèn.

Historial complet de lliuraments (ordre cronològic, cada un amb la seva pròpia
nota tècnica a `docs/guies/NOTA-*.md`): les 130 guies del llibre (lots 1-10,
fusionats), l'ordre de presentació configurable, la Part 1 (47 imatges
d'enunciat), la Part 2 (imatges de Pista 2), l'anàlisi de contingut de Pista
3, el redisseny de les tres demos en cinc panells, les millores del glossari
(espaiat, imatge trencada, termes clicables a les pistes, 7 figures noves, i
després les 27 figures restants fins a 53/53), el redisseny de les demos en
passos revelats, la neteja de capçalera (eyebrow i selector d'idioma fora,
títol nou), el filtre de categories temàtiques amb exercicis amagats, les
icones de categoria, el polit final de focus/border dels filtres, l'etiqueta
"Qüestió N" i altres polits de capçalera/llista, el lot D d'imatges d'enunciat
(8 preguntes noves il·lustrades, 3 amagades en lloc d'il·lustrar-les — v.
`docs/guies/NOTA-ENUNCIATS-D.md`), l'auditoria tècnica i de rigor matemàtic
d'ago. 2026 (`docs/AUDITORIA-RIGOR-GUIES.md`), el pas de
"cercle" a "circumferència" als enunciats de `preguntes-dades.js` (el terme
geomètric general —"sector de cercle" i similars— es manté allà on toca dins
de les guies i el glossari), els sis itineraris temàtics
(`docs/ITINERARIS-TEMATICS-DESIGN-NOTES.md`), les 118 solucions per al
professorat (`COORDINACIO-AGENTS-SOLUCIONS.md`), la prova escrita
(`LLEGEIX-ME.md`), l'auditoria de documentació d'ago. 2026
(`docs/guies/NOTA-AUDITORIA-DOCUMENTACIO.md`) i les correccions de set. 2026:
mode fosc, solució de `q88`, figures amb retolat fals i xifres de la
documentació (`docs/guies/NOTA-CORRECCIONS-SET-2026.md`), el flux de
lliurament per ZIP automatitzat (`docs/guies/NOTA-FLUX-ZIP-SET-2026.md`) i la
coherència del contingut matemàtic: ordre i dependències, glossari a 56 termes,
imatges de q84/q87/q88 i el teorema del casquet (`docs/guies/NOTA-COHERENCIA-SET-2026.md`), i les
eines per a l'aula (cerca, mode projector, fitxa impresa) amb fonts locals i
imatges optimitzades (`docs/guies/NOTA-AULA-I-QUALITAT-SET-2026.md`).

<!-- atribucio-centre:inici -->

---

Material desenvolupat per **David Arso Civil** per al Departament de Matemàtiques de l'INS Miquel Tarradell.
Contingut sota CC BY-NC-SA 4.0, codi sota llicència MIT. Vegeu [`LLICENCIA.md`](LLICENCIA.md).

<!-- atribucio-centre:final -->
