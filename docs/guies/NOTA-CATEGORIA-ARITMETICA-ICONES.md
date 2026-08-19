# Nota — categoria "aritmètica/àlgebra" amagada + icones de categoria

## 1. Tota la categoria "Propietats d'aritmètica o d'àlgebra" amagada

11 preguntes en total (`q18a`, `q18b`, `q19`, `q20`, `q21`, `q24`,
`q34`, `q35`, `q83`, `q84`, `q88`) — de les quals 6 ja eren a
`EXERCICIS_AMAGATS` d'una petició anterior. Afegides les 5 restants
(`q18a`, `q18b`, `q21`, `q24`, `q83`) al mateix array hardcoded, mai a
`preguntes-dades.js`: la disciplina de la petició anterior es manté
sense excepcions — cap pregunta esborrada del codi, només exclosa en
pintar la llista.

**El botó de categoria "Propietats d'aritmètica o d'àlgebra" ja no es
mostra al menú**, perquè oferir un filtre que sempre donaria 0
resultats no aporta res. Aquesta exclusió calia aplicar-la a **dues**
funcions, no una — les vaig trobar totes dues abans de donar-ho per fet:
la que pinta els botons visibles, i `categoriesDisponibles()`, que
defineix què vol dir "totes" per a l'invariant de cap-seleccionada. Si
només hagués tocat la primera, sortir i tornar a activar totes les
categories visibles hauria pogut comparar-se contra un total vell (6 en
lloc de 5) i deixar l'estat "mig actiu" sense cap categoria visible que
ho expliqués — un bug silenciós i difícil de detectar a ull. Sincronitzades
totes dues contra la mateixa exclusió explícita.

## 2. Icones hand-drawn per a les 5 categories restants

Nou fitxer font `docs/icones-categories.html`, seguint exactament el
mateix motor (`hand-draw.js`) i patró (`mk`, `stampNum`, variants
stamped/clean) que la resta de figures del projecte — mai tocat cap
altre fitxer de figures existent. **Només tinta** (són element
d'interfície, no contingut amb conveni donat/afegit).

| Categoria | Icona |
|---|---|
| Triangles | triangle |
| Polígons | pentàgon (deliberadament diferent del triangle) |
| Circumferència | cercle |
| Còniques | el·lipse (mateix conveni que `gloss-ellipse.png` del glossari) |
| Altres | tres punts fets a mà (`handDot`, no el caràcter tipogràfic "…" — mateix "look" hand-drawn que la resta) |

Publicades a `assets/img/icones/` (carpeta nova). **Revisades a mida
real de menú (~40px), no només a mida gran**: composades les 5 juntes
en miniatura abans de publicar-les, per confirmar que es distingeixen
entre elles a l'escala real en què es veuran — no n'hi havia prou amb
que es llegissin bé a 96px.

**CSS**: els botons de categoria passen de píndoles de text a quadrats
amb icona (44×44px). Estat actiu invertit a blanc sobre fons fosc amb
`filter: invert(1)` — funciona net perquè les icones són purament
monocromàtiques (tinta sola); estat inactiu amb `mix-blend-mode:
multiply`, el mateix patró que ja fa servir la resta de figures PNG del
projecte sobre el fons de paper (`.demo__figure img` i altres), no una
tècnica nova. Accessibilitat: `title` + `aria-label` amb l'etiqueta
completa de la categoria (el text no desapareix, només deixa de ser
visible — un lector de pantalla o un hover el segueixen mostrant).

## 3. Verificació

- `node --check` a `llista.js`; claus CSS equilibrades (143/143)
  després de l'edició.
- `python3 verifica_projecte.py` → `Tot correcte.`
- **Playwright**: 119 preguntes visibles (130−11); exactament 5 botons
  de categoria (aritmètica exclosa); les 5 icones carreguen amb
  `naturalWidth > 0`; filtrar només "Triangles" continua donant
  exactament 23 (cap pregunta de Triangles era d'aritmètica, per tant
  el recompte no varia respecte de la sessió anterior).
- **Regressió completa sobre les 130 guies senceres**: 0 fallades, 0
  errors JS.
- Captures de pantalla revisades visualment, en estat per defecte
  (totes actives, icones blanques sobre marró) i amb una categoria
  desactivada (contorn clar, icona negra) — els dos estats es
  distingeixen amb claredat.

## 4. Fitxers d'aquest lliurament

```
docs/icones-categories.html / -clean.html   font de les 5 icones
assets/img/icones/icona-triangles.png       nova
assets/img/icones/icona-poligons.png        nova
assets/img/icones/icona-circumferencia.png  nova
assets/img/icones/icona-coniques.png        nova
assets/img/icones/icona-altres.png          nova
js/ui/llista.js         5 ids nous a EXERCICIS_AMAGATS, categoria exclosa del menú (2 llocs), icones connectades
css/components.css      .cat-filtre__toggle/icon reescrits (icona en lloc de text)
docs/guies/NOTA-CATEGORIA-ARITMETICA-ICONES.md  aquest fitxer
```
