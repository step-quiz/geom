# Nota — filtre de categories temàtiques + exercicis amagats

Dues peces noves, integrades a partir dels dos fitxers que l'owner ha
pujat (`categories-tematiques-dades.js`, `classificacio_exercicis.docx`).

## 1. Fitxer de dades noves, integrat després de verificar-lo

Abans de connectar-lo a cap vista, verificat contra dades reals (no
donat per bo perquè "sembla correcte"):

- **Cobertura exacta**: els 130 ids de `CLASSIFICACIO_TEMATICA`
  coincideixen exactament amb els 130 ids de `window.PREGUNTES` — cap
  falta, cap sobra.
- **Comptatge coincident amb el docx**: 23/24/10/18/11/44 = 130,
  idèntic a la taula resum del document Word pujat.
- **Els 6 exercicis a amagar existeixen realment** a `PREGUNTES` abans
  d'escriure'n la llista.

Copiat a `js/data/categories-tematiques-dades.js` i carregat a
`index.html` **just després de `preguntes-dades.js`**, tal com la
pròpia capçalera del fitxer ja documentava com a requisit.

## 2. Exercicis amagats (q19, q20, q34, q35, q84, q88)

**Deliberadament NO tocat `preguntes-dades.js`.** La llista
`EXERCICIS_AMAGATS` viu només a `js/ui/llista.js`, com a filtre
d'exclusió aplicat en pintar la llista — mai una eliminació de dades.
Confirmat amb Playwright que **`#q19` (enllaç directe) continua
funcionant amb normalitat**: la pregunta existeix sencera, només ha
deixat d'aparèixer llistada. Per tornar a fer visible un exercici, n'hi
ha prou de treure'n l'id d'aquest array — res més cal tocar.

## 3. Filtre de categories temàtiques

Menú de 6 botons (selecció múltiple), amb un comportament deliberadament
diferent del toggle 2D/3D ja existent: **cap categoria seleccionada es
tracta com "totes"**, no com una llista buida — exactament el que
l'owner va especificar ("totes seleccionades, per defecte, quan no en
precisem cap"). A diferència del filtre 2D/3D (on mai els dos toggles
poden quedar apagats alhora), aquí el buit ja ÉS l'estat "totes": no
calia cap invariant de reactivació forçada.

Persistit a `localStorage` amb el mateix patró que la resta d'estat
d'interfície del projecte (idioma, dimensió). Distingit visualment del
filtre 2D/3D amb un color d'accent diferent (`--pencil`, marró, en lloc
de `--ink`, negre) — dos filtres diferents, dues aparences diferents,
a propòsit.

## 4. Verificació

- `node --check` a `llista.js`; claus CSS equilibrades (141/141)
  després de l'edició.
- `python3 verifica_projecte.py` → `Tot correcte.`
- **Playwright**: 124 preguntes visibles (130−6); cap dels 6 amagats
  apareix a la llista; `#q19` segueix accessible i amb contingut per
  enllaç directe; les 6 categories es pinten totes actives per defecte;
  filtrar només "Triangles" dona exactament 23 resultats (coincideix
  amb el docx); desactivar-la deixa 101 (124−23); reactivar-la torna a
  124 amb les 6 actives — l'estat "totes" es recupera net, no queda cap
  categoria "mig activa". Persistència confirmada després de recarregar
  la pàgina.
- **Regressió completa sobre les 130 guies senceres**: 0 fallades, 0
  errors JS (un primer intent va marcar un fals positiu a q01 per temps
  d'espera insuficient del propi test, no un bug real — confirmat
  aïllant-lo abans de descartar-lo, i repetint la regressió completa
  amb més marge).
- Captura de pantalla revisada visualment.

## 5. Fitxers d'aquest lliurament

```
js/data/categories-tematiques-dades.js  nou (copiat del fitxer pujat)
index.html                              script nou afegit, ordre de càrrega correcte
js/ui/llista.js                         EXERCICIS_AMAGATS, filtre de categories
css/components.css                      .cat-filtre* nou
docs/guies/NOTA-CATEGORIES-FILTRE.md    aquest fitxer
```
