# Nota de lliurament — Lot 3

## 1. Què hi ha

Figures 022–033 (12 figures, una per guia), mida de calibratge de segona
ronda tal com marca §5.4. Preguntes: q26, q28, q44, q46, q47, q49, q52, q56,
q51, q53, q54, q55. Tres moviments nous: `dilatacio`, `invariant`,
`cas-limit`. La resta reaplica moviments dels lots 1–2.

## 2. Correcció respecte a la meva proposta inicial

Vaig proposar aquest lot amb 8 preguntes, la mateixa mida que el lot 2, sense
mirar la taula de mides per lliurament (§5.4: lliurament 3 = 12–15). Un cop
avisat, vaig ampliar la proposta a 12, retirant q43 (necessitava una tècnica
de segments circulars que no volia encabir de pressa) i afegint q26, q28,
q52 i q53. La llista de 12 que hi ha aquí és la que vas aprovar.

## 3. Moviments nous afegits al vocabulari

- **`dilatacio`** (q46). Estirar una figura per un factor fix en una
  direcció multiplica la seva àrea pel mateix factor — cap dels moviments
  anteriors cobria un argument d'aquest tipus (transformació afí, no
  descomposició ni congruència).
- **`invariant`** (q54). Dues figures amb el mateix tall a cada alçada
  tenen la mateixa àrea. És el principi de Cavalieri mateix, formulat com a
  moviment general — diferent d'`un-altre-pla` (que tria bones coordenades
  per calcular, no compara dues figures per la seva secció).
- **`cas-limit`** (q55). Ja anticipat a la llista de candidats del brief
  original; s'afegeix exactament on tocava — el primer lloc del llibre on
  cal preguntar-se explícitament "què passa quan n → ∞" i on la resposta
  intuïtiva (la longitud s'acosta a la diagonal) resulta ser falsa.

## 4. Un error real que vaig detectar i corregir durant el dibuix

La primera versió de fig-032 (q54) comparava el tall de l'escala amb el
tall de la diagonal a la mateixa alçada, suggerint que són iguals punt per
punt — **això no és cert en general** (només ho són en total/mitjana, per
simetria de rotació de 180°, no alçada per alçada). Ho vaig detectar en
revisar la imatge renderitzada, no en escriure el codi. He substituït la
figura per la il·lustració clàssica i correcta (rectangle vs.
paral·lelogram, mateixa base i alçada), que sí que compleix la igualtat
alçada per alçada. Ho esmento perquè és exactament el tipus d'error que la
verificació visual (§4, "mira la imatge, no confiïs en 'cap error JS'")
hauria d'atrapar, i en aquest cas ho va fer — però només perquè vaig
aturar-me a pensar per què la comparació no quedava bé, no perquè la imatge
en si mateixa ho delatés a simple vista.

## 5. Ajustos tècnics fets durant el dibuix

- **Projecció del cub:** vaig fer servir un vector de profunditat més baix
  (dx=0,3·S, dy=−0,2·S) que el que hauria semblat "més 3D" (0,55·S,
  −0,35·S), perquè amb aquest segon el tall hexagonal de q52 sortia gairebé
  degenerat (una àrea de només 4.320 sobre una caixa de 240×240, pràcticament
  una línia). Amb el vector més baix surt una àrea de 21.600 — un hexàgon de
  veritat. He fet servir la mateixa projecció a q47, q52 i q56 perquè les
  tres comparteixin exactament el mateix cub.
- **Tetràedre de q49:** la primera disposició de vèrtexs (massa simètrica)
  feia que dues de les quatre medianes es superposessin visualment. Calen
  vèrtexs clarament asimètrics perquè les quatre es distingeixin — val la
  pena tenir-ho present per a qualsevol altra figura amb un tetràedre.
- Número de producció a totes dotze figures, mateixes regles que als lots
  anteriors.

## 6. Coses de les quals no estava segur

- **q53:** no hi ha escaneig d'origen ni xifres del llibre — he triat jo
  els números de la comprovació (radi 2, alçada 10, factor d'inclinació
  1,2). Si el llibre proposa un exemple concret diferent (potser no un
  cilindre inclinat sinó una pila d'esglaons, com a q55), diga-m'ho i
  ajusto la guia perquè hi correspongui.
- **q52, regularitat de l'hexàgon:** l'enunciat només pregunta si es pot
  *trobar* un tall hexagonal regular, no en demana la construcció general.
  He assumit que "perpendicular a la diagonal principal, pel centre" és la
  resposta que el llibre espera — sembla l'única construcció raonable, però
  no ho he pogut contrastar amb el text.

## 7. Dificultats: cap sospita nova

A diferència del lot 2, aquest cop no tinc cap sospita de classificació
incorrecta. Les tres preguntes de dificultat 3 (q44, q54, q55) em semblen
bé classificades — totes tres exigeixen combinar peces, no només
reaplicar-ne una.

## 8. Fitxers d'aquest lliurament

```
lliurament-03/
  figures/fig-022.png … fig-033.png
  contactes-03.png
  GUIES-LOT-3.md
  manifest.tsv          (acumulatiu, files 001–033)
  NOTA-LLIURAMENT.md    (aquest fitxer)
  figures-03.html       (font que regenera les 12 figures)
```

`figures-03.html` carrega `hand-draw.js` i `comu.js` sense cap modificació.
