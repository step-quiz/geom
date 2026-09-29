# El flux de lliurament per ZIP, automatitzat (set. 2026)

Els quatre punts del bloc "B" de l'anàlisi del projecte: tot el que passava
entre "pujo un ZIP" i "el lloc està al dia" depenia de passos manuals que ja
havien fallat. Ara ho fa una GitHub Action.

## 7. La GitHub Action d'uploads

`.github/workflows/unzip-upload.yml`, reescrita. Abans: descomprimir i fer
commit, res més. Ara, a cada ZIP pujat a `_uploads/`:

1. **`processa_uploads.py`** descomprimeix cada ZIP (per ordre de nom) i
   **aplica el seu `_ESBORRA.txt`**: si el ZIP porta aquest fitxer a l'arrel,
   esborra els camins que hi surten, un per línia (`#` per a comentaris). Era
   la limitació de LESSONS.md §4 ("un ZIP diff mai pot esborrar un fitxer").
   Proteccions, totes provades amb ZIP de prova:
   - cap camí pot sortir del repositori (`..`, rutes absolutes): s'ignora;
   - `.git/` i `.github/` no es toquen mai. La segona és obligada: GitHub no
     deixa que una Action modifiqui els seus propis workflows amb el testimoni
     per defecte, i el push fallaria sencer;
   - si tot el ZIP és dins d'una sola carpeta que no és del projecte (s'ha
     comprimit `geom-main/` en lloc del seu contingut), es treu aquella
     carpeta del davant i ho diu;
   - un fitxer que no és un ZIP vàlid es treu de `_uploads/` i l'execució
     surt en vermell.
2. **`regenera.py`** (nou) refà els quatre fitxers generats: `guies-dades.js`,
   `solucions-dades.js`, `analitzador-geom.html` i el `?v=` dels CSS. Tots són
   idempotents: si la font no ha canviat, git no hi veu cap diferència.
3. **`verifica_projecte.py`** i **`tests/smoke.js`** (mode clar).
4. Si tot és correcte, **commit a `main`**. Si alguna cosa falla, **`main` no
   es toca** (només se'n treu el ZIP, perquè no es torni a processar): el
   resultat es desa a la branca `upload-revisar/N`, d'on es pot mirar i, si
   cal, fusionar amb un PR. Si la fallada ve d'un canvi directe a `main`
   (sense ZIP), es desen igualment els fitxers regenerats —només reflecteixen
   el que ja hi era— i l'execució surt en vermell.

El **resum de cada execució** (pestanya Actions) explica què s'ha
descomprimit, què s'ha esborrat, i la sortida sencera de cada comprovació.

La mateixa Action s'executa també quan es toca directament a `main` una font
d'un fitxer generat (CSS, guies, solucions, preguntes, imatges...), p. ex.
editant des de la web de GitHub. `concurrency` fa que dues pujades seguides
s'esperin en lloc de trepitjar-se.

**7.3 — el `?v=` dels CSS, automàtic.** `actualitza_versio_css.py` (nou)
posa com a `?v=` una empremta de 8 caràcters del contingut dels tres CSS del
lloc (la mateixa als tres, com mana la convenció de sempre) i una altra per a
`sol.css`, a `index.html` i a les 118 pàgines de `solucions/`. Si el CSS no
canvia, el `?v=` tampoc. `verifica_projecte.py` §16 falla si queda desfasat
(provat en negatiu). `index.html` diu ara que no s'editi a mà.

**Verificació.** El pas de commit/branca de l'Action es va executar en local
contra un remot de prova, en tots dos camins (correcte: commit a `main`;
fallada amb ZIP: branca `upload-revisar/7` amb el resultat i `main` només
sense el ZIP). `processa_uploads.py` es va provar amb tres ZIP: un amb
`_ESBORRA.txt` (inclosos camins amb `..`, dins de `.github/` i inexistents),
un amb la carpeta sencera a dins i un de trencat. Tots dos YAML validats. La
primera execució real a GitHub serà el primer ZIP que pugis: mira'n el resum.

## 8. Test de regressió desat

`tests/smoke.js`: el lloc sencer en un Chromium real, sota `file://` com
l'obre l'alumne.
- la llista (entrades, toggles 2D/3D, 5 categories);
- les 130 preguntes, **en mode clar i fosc**: les quatre pistes, totes les
  imatges carregades, el peu visible, cap error de JavaScript;
- les 118 solucions (imatges i estil), `sol.html` i `eina-frases.html`;
- l'analitzador: llegeix `GEO1-q01,q02,q19,qzzz`, avisa de l'id que no
  existeix, genera una prova de 2 preguntes sense cap d'amagada, amb les
  imatges.

`node tests/smoke.js` (uns 2 minuts) o `--nomes-clar`. Surt amb codi 1 i la
llista de problemes si en troba. Provat en negatiu: esborrant `fig-034.png`,
detecta la imatge trencada a `q01` i a la seva solució.

Una excepció explícita i comentada: els errors de `fetch()` de `sol.html` sota
`file://`, que són la limitació coneguda de la seva secció de descoberta (v.
README, pendents), no una regressió.

S'executa sol a GitHub: a l'Action d'uploads (mode clar) i a la nova
`.github/workflows/verifica.yml`, que verifica cada Pull Request (fitxers
generats al dia, `verifica_projecte.py` i el test en mode clar i fosc).
`.gitignore` nou (`node_modules/`, `__pycache__/`): el test fa servir un
`npm install --no-save` a GitHub, i res d'això no s'ha de desar.

LESSONS.md §7 demanava parlar-ne amb l'owner abans d'introduir un test fix:
l'owner ho ha demanat explícitament (punt 8 de l'anàlisi).

## 9. `docs/render.js` portable

Carregava Playwright d'una ruta fixa d'un entorn antic
(`/home/claude/.npm-global/...`). Ara `docs/playwright-cami.js` el busca per
ordre: `PLAYWRIGHT_PATH`, `require('playwright')`, `npm root -g` i rutes
conegudes; si no el troba, diu com instal·lar-lo. Provat: `render.js` torna a
generar les 16 figures de `figures-10-clean.html` sense errors.

## 10. L'arrel, endreçada

- Els tres `CANVIS-TRAM-0N` de l'arrel (01, 02, 03): **esborrats**. Eren còpies idèntiques
  (comparades byte a byte) de les de `docs/revisio-matematica/`, on hi ha la
  sèrie sencera.
- `LLEGEIX-AQUEST-DIFF.md`, `LLEGEIX-AQUEST-DIFF-EINA-FRASES.md` i
  `LLEGEIX-ME.txt` (notes d'instal·lació de ZIP ja aplicats): **mogudes** a
  `docs/lliuraments/`, amb un `LLEGEIX-ME.md` que explica què són. L'últim es
  diu ara `LLEGEIX-ME-REVISIO-MATEMATICA.txt`, perquè no es confongui amb el
  `LLEGEIX-ME.md` de l'arrel (el de la prova escrita).

## Documentació

README: secció nova "Com arriben els canvis al repositori", bloc "Estructura"
i "Regenerar les dades" al dia. LESSONS §3, §4 i §7: cadascuna amb la seva
actualització (el problema que descrivien ja està resolt, i com). HANDOFF §6
("Before you ship") reescrit.

## Fitxers

**Nous:** `regenera.py`, `actualitza_versio_css.py`, `processa_uploads.py`,
`tests/smoke.js`, `docs/playwright-cami.js`, `.github/workflows/verifica.yml`,
`.gitignore`, `docs/lliuraments/LLEGEIX-ME.md`, aquesta nota.

**Modificats:** `.github/workflows/unzip-upload.yml`, `docs/render.js`,
`verifica_projecte.py`, `index.html` i `solucions/*.html` (només el `?v=`),
`README.md`, `LESSONS.md`, `HANDOFF-COLD-START.md`.

**Esborrats / moguts:** v. §10.
