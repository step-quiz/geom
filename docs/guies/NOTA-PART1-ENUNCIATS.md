# Nota — Part 1: 47 gràfics d'enunciat nous (fig-132 a fig-178)

47 de les 63 preguntes que no tenien cap imatge d'enunciat (el dibuix del
llibre, no una pista de guia) ara en tenen una, dibuixada a mà amb la
mateixa tècnica que tota la resta del projecte. Comptador:
**67 → 114 de 130 preguntes amb gràfic d'enunciat.**

Aquesta ronda existeix perquè, en analitzar-la (v.
`ANALISI-GRAFICS-NOUS.md`), vaig proposar-ne 47 i l'owner en va aprovar
els 47 exactament. Les 16 restants (dels 63 originals) es van descartar
explícitament aleshores per bon motiu: proves purament algebraiques sense
figura natural, o preguntes obertes on mostrar un exemple ja seria mig
la resposta.

## 1. Convenció seguida

**Només tinta, mai sanguina.** Aquestes imatges representen "el dibuix
del llibre", no una pista de guia — no hi ha distinció donat/afegit
perquè no hi ha res afegit: és l'enunciat mateix, igual que les 67
escanejades. Mateix criteri que ja es va establir per a les figures del
glossari.

**Neutralitat deliberada.** Cap d'aquestes 47 figures mostra la
construcció que resol la pregunta — només el punt de partida. Per
exemple, q86 (per què SSA no determina un triangle) marca l'angle i un
arc de longitud, però no fixa cap tercer vèrtex — fixar-lo seria donar
part de la resposta. Es documenta explícitament al comentari de cada
canvas quan calia aquesta cura.

## 2. Integració tècnica

Nou camp `imatge` a `js/data/preguntes-dades.js` per a les 47 preguntes,
amb el mateix format que les 67 ja escanejades
(`{fitxer, esCrop:false, esInvertida:false, paginaFont}`) — cap canvi de
codi calia a `detall.js`/`contingut.js`, que ja gestionaven aquest camp
genèricament. Fitxers a `assets/img/fig-132.png`…`fig-178.png` (numeració
seguint la de les figures de guia, sense solapar-s'hi).

## 3. Errors reals trobats i corregits durant la revisió (no a l'atzar)

Aplicant explícitament les lliçons de les notes de correcció dels agents
IMPROVE (v. conversa anterior sobre "què n'he après"):

- **Un cas real de "notació que menteix"** (q71): els 4 angles d'un
  quadrilàter, marcats com a rectes, **no ho eren de debò** — verificat
  amb producte escalar (-400 i +400, no zero). Corregit construint un
  rectangle genuïnament girat (angle recte per construcció geomètrica,
  no per coordenades triades a ull i prou "semblants").
- **Tres casos reals d'incidència no complerta** (q98, q100, q101): un
  punt marcat com si estigués "sobre" una corba o una recta, calculat
  des de la fórmula ideal, mentre que el traç real (amb jitter) passava
  lleugerament per un altre lloc. Corregit als tres casos llegint el punt
  real amb `pointAtT()` (l'accessor que `handSegment` ja exposava), mai
  la fórmula ideal — el mateix patró, ja promogut a pràctica per defecte
  d'aquest projecte des de la ronda d'aprenentatge anterior.
- **Un error de contingut geomètric, no només estètic** (q86): l'arc que
  marca la segona longitud donada del cas SSA estava centrat al vèrtex
  equivocat (A en lloc de B) — no representava la construcció matemàtica
  real del problema ambigu que la pregunta demana, només s'hi assemblava
  a ull. Corregit centrant-lo a B.
- Diversos talls de marge (poliedres solapats a q08b/q57/q82, etiquetes
  tallades a q18a/q18b/q61, un feix de llum que no arribava a la paret a
  q108, una hipèrbola amb la tangent massa a prop del vèrtex a q116) —
  cadascun detectat mirant la imatge renderitzada, no assumit correcte
  pel simple fet de no donar error de consola.

## 4. Verificació

- `python3 verifica_projecte.py` → `Tot correcte.` (36 comprovacions).
- Playwright: **les 130 preguntes a la llista**; les 47 imatges noves
  carregant correctament (`naturalWidth > 0`) a la seva pregunta
  corresponent. 0 fallades, 0 errors JS.
- `README.md` actualitzat: comptador d'imatges font, 68→115.

## 5. Fora d'abast d'aquesta nota

**La Part 2 (31 figures a Pista 2 de les guies) encara no s'ha
començat** — aquesta entrega és només la Part 1, tal com l'owner ha
demanat explícitament poder revisar abans que comenci la següent.

## 6. Fitxers d'aquest lliurament

```
docs/guies/figures-enunciats-A.html / -clean.html   lot A (16 figures)
docs/guies/figures-enunciats-B.html / -clean.html   lot B (16 figures)
docs/guies/figures-enunciats-C.html / -clean.html   lot C (15 figures)
docs/guies/NOTA-PART1-ENUNCIATS.md                  aquest fitxer
assets/img/fig-132.png … fig-178.png                47 figures noves publicades
js/data/preguntes-dades.js                          camp imatge afegit a 47 preguntes
README.md                                           comptadors actualitzats
```
