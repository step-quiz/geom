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

**Hi ha:** 130 preguntes amb el seu enunciat original en anglès (el text del llibre),
67 amb la seva figura corresponent (dibuix a mà extret del PDF font), navegació entre
preguntes, un marcador personal "explorat" que es desa al navegador, i una interfície
completa en anglès i català (el contingut de les preguntes, no).

**I, des del lot 4 de guies: 52 de les 130 preguntes tenen una GUIA DE DEMOSTRACIÓ.**
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
afegeixes és una decisió teva.

A la llista, les preguntes que tenen guia porten la marca ◆.

**No hi ha, i per què:**

| Element | Per què no hi és |
|---|---|
| Correcció o puntuació | El llibre no en té — cada pregunta és un punt de partida per pensar-hi, no un test |
| Traduccions al català del contingut | `enunciat.ca` és `null` a totes les 130 preguntes; la interfície fa fallback a l'anglès automàticament. Traduir-les és feina de contingut, no de codi — pendent |
| Pistes curtes (`pista`) | `pista.en`/`pista.ca` continuen sent `null` a totes 130. NO les substitueixen les guies: són coses diferents (una pista curta seria una frase; una guia és una escala completa). El botó 💡 simplement no apareix quan no n'hi ha |
| Guies per a les 78 preguntes restants | En producció per lots successius, amb revisió humana entre lot i lot. V. `docs/guies/` |
| Assignació per curs (`#curs=2ESO` i similars) | El camp `curs` existeix a l'esquema de dades però és `null` arreu — decisió de contingut ajornada conscientment, no una limitació tècnica. El filtre ja funciona (prova-ho a la barra d'adreces); simplement no hi ha encara cap valor assignat |
| Mode d'interacció (resposta oberta, dibuix, etc.) | Ídem: `interaccio` és `null` a tot arreu, estructura preparada, contingut pendent |

## Estructura

```
index.html                    — única pàgina real de l'app
assets/img/pistes/            — 53 figures de guia (fig-001…fig-053)
css/
  tokens.css                  — variables de disseny (color, tipografia, espai)
  base.css                    — ritme de lectura, layout "llibre obert"
  components.css              — elements interactius (botons, selector d'idioma, navegació)
js/
  data/preguntes-dades.js     — les 130 preguntes (generat, no editar a mà — v. més avall)
  i18n/
    ui-strings.js             — textos d'interfície en/ca
    i18n-core.js              — resolució d'idioma i lookup de textos
  nucli/
    contingut.js              — fallback de contingut (enunciat.ca → en quan falta)
    progres.js                — marcador "explorat", desat a localStorage
    router.js                 — hash-routing (#q01, #curs=2ESO...)
  ui/
    llista.js                 — vista "totes les preguntes"
    detall.js                 — vista d'una pregunta
    main.js                   — connecta el router a les vistes
assets/img/                   — les 68 imatges (67 preguntes + q40_implicit amb dues)
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
en aquest repositori** — només `assets/img/` (les 68 imatges ja processades i llestes
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
interactiu). Pendents coneguts, cap dels quals bloqueja l'ús actual del lloc:

- Traduccions de contingut al català (enunciats, pistes, notes editorials)
- Assignació de `curs` i mode d'`interaccio` per pregunta
- **Guies per a les 78 preguntes que encara no en tenen** (52 de 130 fetes)

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
js/data/guies-dades.js      — les 52 guies (generat per parse_guies.py)
js/nucli/guies.js           — unió guia↔pregunta per id + fallback d'idioma
assets/img/pistes/          — 53 figures publicades
parse_guies.py              — .md → guies-dades.js
docs/guies/                 — els .md font, les notes de lliurament i les
                              fonts HTML que regeneren cada figura
docs/manifest-figures.tsv   — registre numerat de les 53 figures
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

`docs/manifest-figures.tsv` és el registre de les 53 figures: número, pregunta,
nivell, moviment, lot i revisió. **Un número de figura és permanent**: si una
figura es redibuixa, conserva el número i puja el camp `rev`.

Les figures publicades a `assets/img/pistes/` són les de treball amb dues
modificacions automàtiques: se'ls ha esborrat el número de producció (un
artefacte del circuit de revisió, que no ha de veure l'alumne) i se'ls ha posat
el fons a blanc pur, perquè `mix-blend-mode: multiply` el faci desaparèixer sobre
el crema de la pàgina — els escanejos del llibre ja hi arriben en blanc i per
això no ho necessiten.
