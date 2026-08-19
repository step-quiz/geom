# Nota — polit visual dels toggles + nous valors per defecte

Tres peticions concretes de l'owner sobre el filtre de categories i
dimensions.

## 1. Marc marró tret de l'estat actiu

**Causa exacta**: `.cat-filtre__toggle[aria-pressed="true"]` posava
`border-color: var(--pencil)` — el mateix color marró del fons, però
en un border d'amplada real, que sobre el fons ja fosc del botó es
llegia com un anell extra, no com un contorn subtil. Corregit a
`border-color: transparent` (mantenint la mateixa amplada de border en
tots dos estats, perquè el botó no salti de mida en activar-se/
desactivar-se — només en canvia la visibilitat del color). Aplicat
també a la regla de `:hover` sobre l'estat actiu, que tenia el mateix
problema amb `var(--ink)`.

## 2. Nous valors per defecte al primer ús

**Distinció important, aplicada expressament**: "mai s'ha desat res a
`localStorage` (primer cop obrint el lloc en aquest navegador)" i
"l'usuari ha triat activament un valor concret" són dues coses
diferents, i la lògica anterior no les distingia bé — llegia sempre amb
`JSON.parse(localStorage.getItem(...))`, que retorna `null` igual si la
clau no existeix o si mai s'ha desat res. Ara es comprova primer
`localStorage.getItem(...) === null` explícitament: si és `null` (mai
desat), es retorna el nou per-defecte (`["2D"]`, `["triangles"]`); si
no, es parseja i es respecta el que l'usuari ja hagi triat.

**Aquesta distinció era necessària** per al filtre de categories en
concret: el seu invariant "cap seleccionada == totes" ja fa servir `[]`
per representar "l'usuari ha triat activament totes" — si el nou
per-defecte s'hagués confós amb aquest mateix `[]`, el primer visitant
hauria vist totes les categories actives, no només Triangles.

- `js/ui/llista.js`: `DIMS_PER_DEFECTE = ["2D"]`,
  `CATS_PER_DEFECTE = ["triangles"]`, aplicats només quan
  `localStorage.getItem(...) === null`.
- L'invariant "mai els dos toggles de dimensió apagats alhora" segueix
  reactivant-les **totes dues** (`DIMS`, no `DIMS_PER_DEFECTE`) — no
  calia ni s'ha tocat.
- La lògica de clic de categories (materialitzar "totes" abans de
  treure'n una) ja funcionava correctament amb el nou per-defecte
  sense cap canvi — només se n'ha actualitzat el comentari, que
  assumia (ja no és cert) que el buit era sempre el punt de partida.

## 3. Persistència real (ja existia, reconfirmada)

La persistència a `localStorage` ja funcionava des de la implementació
original del filtre — no calia afegir-la. Reconfirmat explícitament amb
Playwright perquè la petició ho demanava com a punt propi: canviar
l'estat (activar 3D, activar "Altres"), recarregar la pàgina, i
comprovar que els dos filtres recorden exactament el que s'havia
triat.

## 4. Verificació

- Claus CSS equilibrades (143/143) i `node --check` a `llista.js`
  després de l'edició.
- `python3 verifica_projecte.py` → `Tot correcte.`
- **Playwright, els tres punts confirmats en un únic flux**:
  `localStorage` net → només "2D" i només "Triangles" actius (22
  preguntes, no 23 — confirmat que la diferència és real: `q68`, l'únic
  triangle en 3D, exclòs correctament pel filtre 2D); `border-color`
  computat de l'estat actiu és `rgba(0,0,0,0)` (transparent); canviar
  l'estat i recarregar la pàgina recupera exactament el que s'havia
  triat (`["2D","3D"]`, `["triangles","altres"]`), no els nous valors
  per defecte.
- **Regressió completa sobre les 130 guies senceres**: 0 fallades, 0
  errors JS.
- Captura de pantalla revisada visualment: fons negre net, sense anell
  visible, als dos filtres.

## 5. Fitxers d'aquest lliurament

```
css/components.css   border-color transparent a l'estat actiu (i al seu :hover)
js/ui/llista.js       DIMS_PER_DEFECTE / CATS_PER_DEFECTE, distinció null vs. "[]"
docs/guies/NOTA-TOGGLE-DEFECTES.md  aquest fitxer
```
