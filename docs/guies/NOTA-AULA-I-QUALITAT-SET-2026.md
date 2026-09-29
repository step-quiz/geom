# Eines per a l'aula i qualitat tècnica (set. 2026)

Sis punts de l'anàlisi del projecte, triats per l'owner: tres del bloc D
(ampliacions per a l'aula: 17, 18, 20) i tres del bloc E (qualitat tècnica:
22, 23, 24). La resta dels dos blocs no s'ha tocat.

`verifica_projecte.py`: **Tot correcte**, sense avisos. `tests/smoke.js`: **Tot
correcte**, ara també **sense xarxa** (v. §4).

## 17. Mode projector

Botó "Mode projector" a cada pregunta (`js/ui/detall.js`, `commutaProjector`).
Pantalla completa si el navegador ho permet, lletra al 140 %, figura fins a
~2/3 de l'alçada de la pantalla, i fora la capçalera, la navegació, el
marcador "explorat", la valoració i els suggeriments. Es porta amb el teclat
o amb un passador de diapositives:

| Tecla | Fa |
|---|---|
| → · espai · PageDown | revela la pista següent; quan ja són totes obertes, passa a la pregunta següent |
| ← · PageUp | pregunta anterior |
| Esc | surt (també en sortir de la pantalla completa) |

L'estat és una classe a `<html>`, no a `#app`: sobreviu a la navegació entre
preguntes. No es desa: és per a una sessió de classe. Si el focus és en un
botó, l'espai només fa el que fa sempre (activar-lo), perquè una pulsació no
reveli dues pistes. En entrar-hi o sortir-ne la figura recalcula l'alçada
amb l'amplada nova (`ajustaAlcada`, també en girar el mòbil o canviar la mida
de la finestra), **sense** tornar a pintar la pregunta: les pistes obertes
continuen obertes.

> **Corregit a la revisió posterior.** La primera versió tornava a pintar la
> pregunta (un `hashchange` sintètic). Això tancava les pistes obertes i, a
> més, comptava una visita falsa a l'itinerari en curs.

Provat: →→ obre dues pistes, PageDown×2 les altres dues i el peu, → passa a
la pregunta següent, ← torna, Esc surt i torna la capçalera.

## 18. Fitxa impresa

Botó "Imprimeix la fitxa" a cada pregunta, o Ctrl+P. Al paper surten
l'enunciat, la figura i **la guia sencera** —les quatre pistes amb les seves
figures, la comprovació i l'"i després"—, sigui quina sigui la pista a què
s'ha arribat en pantalla. És una còpia a part (`pintaFitxaImpresa`, classe
`.fitxa-impresa`) que només es veu en `@media print`: imprimir no obre cap
pista a la pantalla, i la fitxa surt sempre igual. Peu de pàgina amb el nom
del lloc i "Qüestió N".

Les figures de la fitxa porten `data-src`, no `src`: no es baixen fins que
es prem el botó o Ctrl+P (`imprimeix()` les carrega, n'espera la càrrega
—amb un sostre de 8 s— i llavors obre el diàleg). Des del menú del navegador
només hi ha l'avís `beforeprint`, que no pot esperar: allà potser no arriben a
temps.

> **Corregit a la revisió posterior.** La primera versió posava `src`
> directament: cada pregunta oberta baixava també les figures de les quatre
> pistes, encara que no s'imprimís res. Amb dades mòbils, un cost inútil.

Sempre **negre sobre blanc**: un bloc `@media print` al final de
`css/tokens.css` fixa els colors del paper per damunt del mode fosc (sense
ell, en un dispositiu en mode fosc el text sortia gris clar sobre blanc).
Provat generant el PDF real des d'un navegador en mode fosc.

## 20. Cerca a la llista

Camp de cerca a la llista (`js/ui/llista.js`): per paraula o per número ("84"
troba la Qüestió 84), sense distingir majúscules ni accents; cada paraula ha
de sortir a l'enunciat (català o anglès) o a l'etiqueta de la pregunta.

**Decisió que he pres jo:** mentre hi ha text, la cerca mira **totes** les
preguntes visibles i deixa de banda els filtres 2D/3D i de categoria (un avís
ho diu sota el camp). Amb el filtre per defecte (només 2D + Triangles) la
majoria de resultats quedarien amagats sense que l'alumne entengués per què.
Les preguntes amagades no hi surten mai. La cerca no es desa (és una
consulta del moment, no una preferència com els filtres). Cada tecla repinta
la llista i torna el focus al camp amb el cursor al seu lloc.

De passada: "1 preguntes" → "1 pregunta" (clau `list.question_count_one`),
que amb la cerca surt sovint.

## 22. Fonts locals

Source Serif 4 i JetBrains Mono es serveixen ara des del repositori
(`css/fonts.css` + `assets/fonts/`, 9 fitxers woff2, ~210 kB), no des de
Google Fonts. Són fonts variables (un fitxer per a tots els pesos), amb els
talls llatí, llatí estès i grec (θ, π, Σ surten a les guies) i els mateixos
`unicode-range` que servia Google: el navegador només baixa el que cal.
Llicència SIL OFL 1.1 de totes dues, amb els textos al costat
(`assets/fonts/LICENSE-*`).

Dos motius: el lloc es veu bé **sense connexió** (abans queia a la tipografia
de reserva) i **no envia l'adreça IP de l'alumnat a Google** en obrir la
pàgina. Canviat a `index.html`, les 118 solucions i `eina-frases.html`; el
`?v=` de `fonts.css` també el posa `actualitza_versio_css.py`.

Proves: cursiva, negreta i grec es carreguen des del disc amb la xarxa
tallada. `verifica_projecte.py` §18 falla si una pàgina torna a carregar fonts
de Google o si `fonts.css` apunta a un fitxer que no hi és, i `tests/smoke.js`
talla la xarxa i falla si **qualsevol** pàgina hi fa una petició.

## 23. PNG optimitzats sense pèrdua

`assets/img/`: 341 PNG, **9,95 → 7,17 MB (−28 %)**, amb oxipng. Cada fitxer
s'ha comparat píxel a píxel (RGBA) amb la seva versió anterior a git: **0
diferències**. Cap PNG no porta metadades de color, així que els mateixos
píxels són la mateixa imatge en pantalla i en paper. `analitzador-geom.html`,
que les porta incrustades, passa de **5,1 a 3,6 MB**.

`optimitza_png.py` (nou) ho fa per a les figures que arribin: només desa el
resultat si és més petit **i** píxel-idèntic. La GitHub Action d'uploads
l'executa sola sobre els PNG que porti cada ZIP (pas 1b), abans de regenerar
l'analitzador.

## 24. Refactor

- **`js/ui/export.js`** (nou): el bloc "Copia el meu codi" (codi GEO1-…, còpia
  al porta-retalls, camp de reserva, descàrrega .txt) surt de `llista.js`, que
  passa de 695 a ~540 línies. Cap canvi de comportament. `verifica_projecte.py`
  §13 comprova ara el prefix GEO<n>- a `export.js`.
- **`amagats.py`** (nou): l'única lectura d'`EXERCICIS_AMAGATS` des de Python.
  `build_analitzador_geom.py` i `verifica_projecte.py` la llegien cadascun
  amb la seva expressió regular; ara tots dos la llegeixen d'aquí (que a més
  ignora comentaris dins de l'array). La llista continua vivint **només** a
  `js/ui/llista.js`, com va decidir l'owner.
- **Coherència comprovada de cap a cap**: `window.geoLlista.amagades()`
  (còpia, només lectura) i `tests/smoke.js` comprova que la llista que porta
  l'analitzador és exactament la que fa servir el lloc.

## Fitxers

**Nous:** `js/ui/export.js`, `amagats.py`, `optimitza_png.py`,
`css/fonts.css`, `assets/fonts/` (9 woff2 + 2 llicències), aquesta nota.

**Modificats:** `js/ui/llista.js`, `js/ui/detall.js`, `js/i18n/ui-strings.js`,
`css/components.css`, `css/tokens.css`, `index.html`, `eina-frases.html`,
`solucions/*.html` (fonts i `?v=`), `assets/img/**/*.png` (341, optimitzats),
`analitzador-geom.html` i `js/data/*` generats, `build_analitzador_geom.py`,
`actualitza_versio_css.py`, `verifica_projecte.py`, `tests/smoke.js`,
`.github/workflows/unzip-upload.yml`, `README.md`, `HANDOFF-COLD-START.md`,
`LLEGEIX-ME.md`.
