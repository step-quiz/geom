# Correccions de set. 2026 — mode fosc, q88, figures amb retolat fals, xifres

Sis punts d'una anàlisi del projecte sencer, tots sis errors que existien
al lloc publicat, no millores noves. Per ordre:

1. el mode fosc esborrava la distinció tinta/sanguina;
2. `q88` era visible i no tenia solució;
3. tres figures deien, dibuixat, una cosa que no és (o no és el que diu el
   llibre): `fig-107`, `fig-121` i el panell (a) de `fig-059`;
4. la documentació d'estat deia 15 amagades, 115 visibles i 115 solucions;
5. el suggeriment de repàs ensenyava a l'alumne el slug intern del moviment;
6. "explorat" era l'únic text d'interfície escrit a mà fora de l'i18n.

`python3 verifica_projecte.py`: **Tot correcte**, amb 4 comprovacions noves
(v. §7). Els dos avisos de sempre (inversions d'itinerari i dependències
d'amagades) no s'han tocat: no eren d'aquest encàrrec.

---

## 1. Mode fosc

**El problema.** Totes les figures del lloc són PNG amb fons blanc que es
fonen amb el paper amb `mix-blend-mode: multiply`. Sobre el paper clar el
blanc desapareix i queda el traç. Però `tokens.css` té un mode fosc
(`prefers-color-scheme: dark`): si el mòbil de l'alumne el té activat, el
paper passa a gris-marró fosc i el mateix multiply enfosqueix el traç. La
tinta negra quedava negra sobre fosc, i la sanguina —el que l'alumne hi
afegeix, el sentit de tota la figura— gairebé no es veia. Comprovat en un
Chromium real en mode fosc a `q02`.

**La correcció.** En mode fosc, cada figura porta a sota un full de paper
clar i el multiply es fa contra aquest full, no contra el fons fosc. En mode
clar no canvia res. Mecanisme: set tokens nous a `css/tokens.css`
(`--figure-sheet`, `--figure-sheet-pad`, `--figure-sheet-width`,
`--figure-sheet-scan`, `--figure-caption-ink`, `--icon-filter*`,
`--icon-blend*`), neutres en mode clar (`transparent`, `0px`, `auto`...) i
actius dins de `@media (prefers-color-scheme: dark)` i de
`:root[data-theme="dark"]`. Les regles que els fan servir són a
`base.css` (figura d'enunciat, retall escanejat), `components.css` (figura
de guia, de glossari, de la demo, icones del filtre) i `solucions/sol.css`
(figura de solució i el seu peu).

Les icones del filtre de categories tenien el mateix problema, al revés:
negre sobre fons blanc, invisibles sobre el botó fosc inactiu. En mode fosc
s'inverteixen i es fonen amb `screen`; el botó actiu (que en mode fosc és
clar) les torna a pintar negres.

**Decisions que he pres jo i que pots voler canviar** (LESSONS §8):
- el color del full, `#EEE8DB`: un crema una mica més apagat que el paper
  clar, perquè un rectangle blanc pur dins d'una pàgina fosca enlluerna;
- el marge del full (`--space-3`) i les cantonades arrodonides;
- el full s'ajusta a l'amplada de la figura (`fit-content`) a les guies, el
  glossari, la demo i les solucions; a les figures d'enunciat ocupa la
  ranura sencera, com ja feien els retalls escanejats en mode clar.

**Com s'ha verificat.** Captures de nou pàgines (llista, `q02`, `q23`,
`q31`, `q42`, `q84`, `q117`, demo, itineraris) abans i després en mode
**clar**: les nou, **píxel-idèntiques**. En mode fosc, revisades a ull:
enunciat, pistes, imatge escanejada (`q31`), imatge invertida (`q42`),
glossari, popover, demo, icones i la solució de `q88`.

**Cache.** `index.html` passa de `?v=6` a `?v=7` als tres fulls. Les 118
pàgines de `solucions/` carregaven encara `?v=5` (anaven un número per
darrere de l'índex des de l'últim lliurament de CSS) i `sol.css?v=1`: ara
totes carreguen `?v=7` i `sol.css?v=2`.

## 2. La solució de q88

`q88` (sinus i cosinus de l'angle doble) es va publicar a l'ago. 2026 junt
amb `q84` i `q87`, i el comentari de `js/ui/llista.js` diu que se'ls va
escriure la solució a totes tres. `q84.html` i `q87.html` hi són;
**`q88.html` no hi era**. 117 solucions per a 118 visibles.

Una causa plausible: `COORDINACIO-AGENTS-SOLUCIONS.md`, que és el document
que llegeix qui escriu solucions, seguia llistant `q88` entre les 15
amagades amb l'ordre "never write a solution for these".

`solucions/q88.html`, escrita a partir de la guia (lot 8, §10) i amb la
mateixa estructura que `q84` i `q87`:
- **sin(2θ) = 2 sinθ cosθ**: la mateixa àrea d'un triangle isòsceles de
  costats 1 i angle 2θ, calculada amb ½ab·sinC (q80) i amb base per alçada;
  la solució explicita per què les dues alçades són diferents (si no, igualar
  les àrees no diria res);
- **cos(2θ) = 1 − 2sin²θ**: sin²+cos²=1 (q84) dues vegades i un quadrat
  perfecte, (1 − 2sin²θ)², amb la tria d'arrel justificada per totes dues
  bandes (cos 2θ > 0 perquè 2θ és agut, i 1 − 2s² > 0 perquè s² < ½);
- comprovació exacta amb θ = 30° i numèrica amb θ = 37° (la de la guia);
- "i després" amb θ = 60° i les definicions de q87 per a l'angle obtús.

Tots els números comprovats amb Python abans d'escriure'ls. `alt` real a la
figura, com demana `COORDINACIO-AGENTS-SOLUCIONS.md`. `sol.html` no s'ha
hagut de tocar (la secció de descoberta la troba sola); sí que se n'ha
corregit l'abast de la capçalera 2D (78 → 81).

## 3. Figures amb retolat fals

Totes tres es van redibuixar amb el pipeline de sempre (`docs/render.js` +
`publish_figures.py`). **Abans de tocar res** es va comprovar que el pipeline
reprodueix les PNG publicades amb la font sense modificar: 0 píxels de
diferència a `fig-107` i `fig-121`. Així el diff posterior només pot ser el
canvi.

### fig-107 (q103)

Deia *"C′ → s'escapa cap a l'infinit"* i *"BC prolongat passa per O: C no té
imatge ordinària"*. Fals: si O, C i B són alineats, C i B comparteixen raig i
van al **mateix** punt. El triangle s'aplana; no s'escapa res. La guia ja
explicava bé els dos mecanismes (col·lapse i fugida) des del tram 15.
Ara: *"C′ = B′: la mateixa imatge"* i *"BC passa per O: B i C van al mateix
punt, i el triangle s'aplana"*. Canvien 4.074 píxels, **tots dins de la
franja del text** (y 394–484); la geometria és idèntica.

De propina: el peu i l'`alt` de la figura a `solucions/q103.html` repetien
l'error ("C no té imatge ordinària —s'escapa cap a l'infinit"), tot i que el
cos de la solució ja era correcte. Corregits.

### fig-121 (q117)

Deia *"mateixa directriu, dilatació uniforme"*. Impossible: la directriu és a
distància p del vèrtex i cada paràbola té la seva p. La recta dibuixada és
la tangent comuna al vèrtex. A més, "dilatació" era el terme que el tram 19
va retirar. Ara: *"tangent comuna al vèrtex · homotècia centrada al
vèrtex"*. Canvien 2.563 píxels, tots a la fila del peu (y 374–389).

### fig-059, panell (a) (q40_implicit)

`NOTA-LOT-6.md` §9.1 havia resolt el "detall de dalt" de l'escaneig: és un
**quadrat dret inscrit i, recolzat al damunt, un quadrat petit** amb les
cantonades de dalt sobre l'arc, i t = S/5. No es va publicar perquè calia
redibuixar la figura. Fet ara:

- **figura**: panell (a) nou, fidel a l'escaneig. Tots els vèrtexs que toquen
  la circumferència es llegeixen del traç real (`pointAtAngle`), i la base
  del quadrat petit, del costat real del gran (`pointAtT`) — LESSONS §9. En
  sanguina, el radi R del centre a una cantonada de dalt del petit, que és
  exactament la condició que dona l'equació;
- **panell (b) píxel-idèntic.** Els dos panells compartien el mateix
  generador pseudoaleatori, o sigui que canviar el (a) hauria mogut tot el
  traç del (b), que es va ajustar a mà a petició teva ("una mica més
  tangent"). El (a) fa servir ara un generador propi, i abans del (b) es
  consumeixen exactament les **698** crides a `rand()` que feia el panell
  antic (comptades en un navegador, no estimades). Resultat: 0 píxels
  canviats a x ≥ 370;
- **guia** (`GUIES-LOT-6.md`, i `guies-dades.js` regenerat): Pista 0 (què
  demana el primer panell), Pista 3 (el plantejament, sense la solució) i la
  comprovació (S = 5, t = 1: 0,25 + 12,25 = 12,5 = R²). Desapareix la nota
  "el primer panell es dibuixa com el quadrat inscrit estàndard";
- **solució** (`solucions/q40_implicit.html`): el panell 1 passa de
  "R = s√2/2" a la resolució completa, 5t² + 4St − S² = 0 = (5t − S)(t + S),
  t = S/5, àrea 1/25. `alt` de `fig-059` reescrit (abans era el títol del
  pas).

`docs/manifest-figures.tsv`: descripció nova i `rev` +1 a 059, 107 i 121.
`docs/revisio-matematica/HANDOFF-FULL.md`: els tres punts marcats com a
tancats (§1.1, §2.1) i també el del slug (§2.5, v. §5).

## 4. Xifres desfasades a la documentació

| Document | Deia | És |
|---|---|---|
| `README.md` | 15 amagades (i 12 en un altre lloc), 115 visibles, 115 solucions, "26 dels 53 termes tenen figura", "cap pregunta visible es queda sense imatge" | 12, 118, 118, 53 de 53, i 3 visibles sense imatge (`q84 q87 q88`) |
| `HANDOFF-COLD-START.md` | 15 amagades amb `q84 q87 q88` a la llista, 115 visibles, 115 solucions, "every question actually reachable has an image", 36 comprovacions | 12, 118, 118, 3 visibles sense imatge, més de 60 |
| `COORDINACIO-AGENTS-SOLUCIONS.md` | 15 amagades, `q84 q87 q88` a "never write a solution", 10 de 2D, abast 2D de 78, 115 solucions | 12, publicades (amb avís explícit), 7, 81, 118 |
| `LLEGEIX-ME.md` | "Les 116 de les preguntes visibles" | 116 fitxers d'imatge de 115 preguntes (`q40_implicit` en té dos) |
| `sol.html`, `solucions/sol.css` | abast 2D de 78; "115 pàgines" | 81; sense xifra |

Comentaris de codi amb la mateixa xifra vella: `js/ui/llista.js` (codi
màxim: 523 caràcters, no 511), `js/nucli/itineraris-tematics.js`.

El README guanya un paràgraf sobre el mode fosc (§ guies) i una línia als
pendents (`q84`, `q87`, `q88` sense imatge d'enunciat).

## 5. El slug del moviment a la pantalla

Valorant una pregunta amb "No gaire", el suggeriment de repàs deia
literalment *"entrena la mateixa idea — redueix-al-conegut"*. Ara hi ha una
secció `moves` a `js/i18n/ui-strings.js` amb els 22 moviments en català i
anglès, i `geoContingut.nomMoviment()` la consulta (si mai en falta un, es
degrada al slug amb espais, mai amb guions). Ara diu *"entrena la mateixa
idea — redueix el desconegut al conegut"*. Provat en català i en anglès.

**Els 22 noms són redacció meva**, calcats dels títols de moviment que ja
tenen les guies. Els pots retocar des de `eina-frases.html`, que els ensenya
automàticament a la secció d'interfície.

## 6. "explorat"

`js/ui/detall.js` escrivia `" explorat"` directament. Ara és la clau
`detail.done_label` ("explorat" / "explored").

## 7. Comprovacions noves a verifica_projecte.py (§15)

- **tota pregunta visible té solució** a `solucions/` (error), i cap
  d'amagada no en té (avís);
- **xifres vives**: amagades, visibles, solucions i termes del glossari amb
  figura, tal com les diuen `README.md`, `HANDOFF-COLD-START.md`,
  `COORDINACIO-AGENTS-SOLUCIONS.md` i `LLEGEIX-ME.md`, comparades amb les
  dades; i cap d'aquests documents no pot dir que no hi ha preguntes visibles
  sense imatge si n'hi ha (error). Les notes de lliurament no es miren: són
  registre, i diuen el que era cert quan es van escriure;
- **cada moviment de les guies té nom llegible** als dos idiomes (error).

Totes tres provades també **en negatiu**, en una còpia: esborrant `q88.html`,
tornant a escriure "15 preguntes estan amagades" al README i traient un nom
de moviment, el verificador falla amb el missatge que toca.

## 8. Verificació global

- `python3 verifica_projecte.py` → Tot correcte.
- Regressió amb Playwright sobre les 130 guies, en mode clar i en mode fosc:
  revelar les quatre pistes, totes les imatges carregades
  (`naturalWidth > 0`), el peu (comprovació i "i després") visible, cap error
  de JavaScript.
- `parse_guies.py`, `genera-solucions-dades.py` i
  `build_analitzador_geom.py` regenerats: el primer canvia només les tres
  línies de q40; l'analitzador no canvia (cap enunciat ni imatge d'enunciat
  tocats).
- `eina-frases.html` s'obre sense errors i carrega la secció nova `moves`.
- Les 118 pàgines de `solucions/`: 257 imatges carregades, estil aplicat,
  cap error.

## Fitxers

**Nous (2)**

    solucions/q88.html
    docs/guies/NOTA-CORRECCIONS-SET-2026.md

**Modificats**

    css/tokens.css, css/base.css, css/components.css, index.html
    solucions/sol.css, solucions/*.html (118: només ?v= a la capçalera;
        q40_implicit i q103 també el text)
    js/i18n/ui-strings.js, js/nucli/contingut.js, js/ui/detall.js
    js/ui/llista.js, js/nucli/itineraris-tematics.js (només comentaris)
    js/data/guies-dades.js, js/data/solucions-dades.js (regenerats)
    assets/img/pistes/fig-059.png, fig-107.png, fig-121.png
    docs/guies/figures-06(-clean).html, figures-09(-clean).html,
        figures-10(-clean).html, docs/guies/GUIES-LOT-6.md
    docs/manifest-figures.tsv, docs/revisio-matematica/HANDOFF-FULL.md
    README.md, HANDOFF-COLD-START.md, COORDINACIO-AGENTS-SOLUCIONS.md,
        LLEGEIX-ME.md, sol.html
    verifica_projecte.py

Res a esborrar a mà.
