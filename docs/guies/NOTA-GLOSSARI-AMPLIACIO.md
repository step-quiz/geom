# Nota — ampliació del glossari (18 → 53 termes)

Aquesta ampliació NO l'he escrita jo: l'ha feta un altre agent, en una
conversa separada, en paral·lel a la resta de feina d'aquest projecte
(lots 9 i 10, traducció catalana de les 130 preguntes). Aquesta nota en
documenta la revisió que hi vaig fer abans d'integrar-la a l'estat de
treball, seguint la mateixa disciplina que qualsevol altre lliurament
d'aquest projecte: comprovar-ho abans de donar-ho per bo, mai confiar-hi
a ull.

## 1. Què ha canviat

- 18 → **53 termes** (35 de nous).
- Categories noves: `cercles`, `triangles-punts-notables` (ampliada),
  `conceptes-generals`, `poligons`, `cossos-geometrics`, `coniques`.
- Termes nous representatius: radi, diàmetre, corda, tangent, secant,
  sector circular, mediatriu, lloc geomètric, congruència i els seus
  criteris (CCC/CAC/ACA), raó de semblança, projecció ortogonal, teorema
  de Tales, teorema de Pitàgores, polígon regular/irregular, apotema,
  diagonal, poliedre, prisma, piràmide, tetràedre, cilindre, con, esfera,
  principi de Cavalieri, teorema de Pappus, cònica, el·lipse, hipèrbola,
  paràbola, focus.
- **Figures**: només 1 dels 35 termes nous en reutilitza una d'existent
  (`criteris-semblanca-triangles` → `gloss-triangles-semblants.png`, ja
  publicada). Els altres 34 tenen `figura: null` — **contingut escrit,
  il·lustració pendent**. És, literalment, la pròxima tasca del projecte
  (v. missatge que acompanya aquesta nota).

## 2. Revisió feta abans d'integrar-ho

Res d'això es dona per bo només perquè "sembla correcte" — es va
comprovar cadascun d'aquests punts amb el propi motor del glossari
carregat (`node -e` contra `glossari-dades.js`), no llegint el fitxer a
ull:

- **Sintaxi i esquema**: `node --check` net; totes les 53 entrades
  segueixen exactament la mateixa forma que les 18 originals
  (`termes.ca`/`.en` com a arrays, `definicio.ca` string amb `.en`
  sempre `null` —direcció del fallback ja establerta a §9 de
  `PROJECTES-TECHNICAL-REFERENCE.md`—, `figura`, `relacionats` com a
  array, `categoria`). **0 problemes.**
- **Enllaços `relacionats`**: recorreguts tots i comprovat que cada id
  referenciat existeix de debò al glossari. **0 de trencats.**
- **Castellanismes**: cerca automàtica del castellanisme "desprès-amb-u"
  (ja documentat com a error real en aquest projecte — v. altres notes de
  lliurament), i d'"entonces",
  "además", "porque", "aunque", "según", "través", "embargo" contra
  totes les definicions noves. 2 coincidències, totes dues falsos
  positius (la subcadena "traves" dins de "travessar"/"travessa",
  català correcte, no cap forma castellana). **0 de reals.**
- **Mostra manual** de 7 definicions tècniques (teorema de Tales,
  principi de Cavalieri, criteris de congruència, cònica, lloc
  geomètric, apotema, mediatriu): totes precises, en català natural,
  ben connectades per `relacionats`.
- **Un cas que a primer cop d'ull semblava un error de contingut, i no
  ho era**: l'entrada `circumferencia-cercle` uneix "circumferència" i
  "cercle" com a formes de cerca del mateix terme — dues paraules que en
  geometria noten coses diferents (la corba tancada vs. la regió que
  envolta). Vaig llegir-ne la definició sencera abans de concloure res:
  **la distingeix explícitament** ("la circumferència és la vora i el
  cercle és la regió"), en lloc de confondre-les en silenci. Disseny
  correcte, no error — ho documento perquè la primera impressió (dues
  paraules diferents en un sol terme) sí que feia venir el dubte.

## 3. Verificació end-to-end després d'integrar-ho

- `python3 verifica_projecte.py` → `Tot correcte.` (36 comprovacions —
  cap coneix encara el glossari explícitament, com ja s'anotava a §9 de
  la referència tècnica, però totes hi continuen passant).
- Playwright: el panell mostra 53 termes en 8 categories; la cerca
  ("Tales") filtra correctament; la detecció inline sobre un enunciat
  real (q95, sobre la tangent a un cercle) ara troba 3 termes —abans de
  l'ampliació no n'hi havia cap, perquè "tangent" i "radi" no existien
  encara al glossari. Comprovat que el popover d'un terme nou es pinta
  correctament i mostra termes relacionats vàlids.

## 4. Pendent (no d'aquesta nota — de la pròxima tasca)

- **34 figures del glossari**, ink-only, mateixa disciplina que les 6 ja
  publicades (`docs/glossari-figures.html` n'és el precedent directe: el
  conveni de color —tinta única, l'accent `--pencil` només per als noms
  de terme— i el patró de publicació —`docs/publish_figures.py`,
  esborrat per diferència de renders— ja hi són establerts, no cal
  redecidir-los).

> **Actualització posterior:** d'aquestes 34, 7 es van resoldre a
> `NOTA-GLOSSARI-MILLORES.md` i les 27 restants a
> `NOTA-GLOSSARI-27-FIGURES.md` — el glossari és 53/53 des d'aquell
> lliurament. Secció deixada tal qual com a registre històric.
- Cap acció sobre els termes SENSE figura mentre no se n'escriguin: la
  interfície ja gestiona bé un terme sense `figura` (simplement no en
  pinta cap secció), així que no hi ha cap urgència tècnica, només de
  contingut.
