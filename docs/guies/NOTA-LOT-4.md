# Nota de lliurament — Lot 4

## 1. Què hi ha

Figures 034–053 (20 figures, una per guia), mida "creuer" tal com marca
§5.4. Preguntes: q01, q02, q70, q29, q06, q11, q12, q73, q38, q76, q80, q89,
q37, q39, q05, q18b, q60, q08a, q08b, q71. Dos moviments nous:
`centre-per-simetria` i, formalment, `invariant sota escala` (una variant
de l'`invariant` ja introduït a q54/q55, aplicada aquí a dilatacions en
comptes de talls de Cavalieri). La resta reaplica moviments dels lots 1–3.

Aquesta vegada no hi havia cap `REVISIONS.md` als paquets que se'm van
passar, així que la selecció de preguntes s'ha basat només en el document
tècnic, les guies i notes de lliurament anteriors, i el meu propi criteri.

## 2. Com he triat les vint preguntes

Vas confiar-me directament l'elecció, així que explico aquí el criteri
perquè es pugui auditar. He prioritzat:

- **Dependència de moviments ja establerts.** Cada pregunta triada reutilitza
  o esten un moviment que ja apareix a `HAND_DRAWN_GEOMETRY_TECHNIQUE.md` o
  als lots anteriors, per no haver d'inventar-ne un de nou sense la revisió
  d'un lot petit primer.
- **Autonomia respecte al text del llibre.** He descartat expressament
  preguntes que semblaven dependre de teoremes o tècniques que el llibre
  probablement introdueix en un punt que no tinc (per exemple, q66/q68/q69,
  que fan servir el teorema de Pappus sense enunciar-lo abans; q17 i q99,
  que semblen assumir una demostració o dissecció ja treballada al text; i
  q91/q92, on la configuració concreta —dos plans en perspectiva, projecció—
  era massa ambigua per reconstruir-la amb confiança a partir d'un sol
  escaneig).
- **Diversitat de dimensió i dificultat.** El lot combina 2D (16 preguntes) i
  3D (4: q18b, q60, q08a, q08b), i dificultats 1 a 3, seguint la barreja que
  ja tenien els lots anteriors.
- **Evitar redundància dins del mateix lot.** Per exemple, he descartat q30
  (dodecàgon triangulat) perquè és essencialment la mateixa figura i el
  mateix moviment que q29, ja inclosa; i q91/q92 en part també per aquest
  motiu, no només pel dubte de context.

## 3. Moviments nous afegits al vocabulari

- **`centre-per-simetria`** (q01). Trobar un punt notable no per
  descomposició ni per àlgebra, sinó observant que la simetria de la figura
  fa coincidir en un sol punt tres construccions que en general són tres
  punts diferents (mediana, bisectriu, altura des d'un mateix vèrtex). No
  encaixava net a cap dels moviments existents perquè no hi ha cap "peça"
  que es mogui o es compari — el que fa la feina és l'argument de simetria
  en si mateix.
- **`invariant` (variant d'escala)** (q18b). Ja teníeu `invariant` per a
  Cavalieri (q54/q55/q60); aquí el mateix nom de moviment cobreix una
  situació diferent (com canvia una magnitud sota una transformació
  d'escala, no sota un tall). No li he posat un nom nou perquè l'essència
  —"alguna cosa es manté estructuralment igual mentre la figura canvia, i
  això et permet calcular sense fórmula memoritzada"— és la mateixa idea de
  fons; però val la pena que ho tingueu present si en algun moment decidiu
  separar-los en dues entrades del vocabulari.

## 4. Errors reals que vaig detectar i corregir durant el dibuix

Aquesta vegada n'hi ha dos de continguts matemàtics, a banda dels ajustos
purament visuals de la secció 5:

- **fig-038 (q06, heptàgon).** El primer esborrany del comentari al codi
  afirmava, sense comprovar-ho, que els quatre angles marcats al vèrtex
  "no són tots iguals en general, surten dos parells iguals" — una
  afirmació versemblant però que no havia verificat. Un càlcul numèric ràpid
  (coordenades del heptàgon regular, angle exacte a cada parell de vèrtexs
  consecutius) va confirmar que en realitat **els quatre angles són
  exactament iguals** entre ells (25,714° cadascun, per angle inscrit sobre
  el mateix arc). Vaig corregir tant el dibuix (un sol arc a cada angle, no
  dos) com el text de la guia abans de donar-los per bons.
- **fig-043 (q76, cercle inscrit).** El primer esborrany situava el centre
  del cercle inscrit aproximant-lo pel baricentre del triangle "perquè
  quedaven a prop en aquest cas concret" — un drecera matemàticament
  incorrecta (el baricentre i l'incentre només coincideixen si el triangle
  és equilàter). Com que la figura marca visualment els tres radis com a
  iguals amb ratlletes, un incentre mal calculat hauria fet la figura
  internament inconsistent amb la seva pròpia notació. Ho vaig substituir
  pel càlcul real de l'incentre (mitjana ponderada pels tres costats) i pels
  peus de perpendicular reals per projecció sobre cada costat, no punts
  mitjans.

Cap dels dos errors va arribar a sortir en cap render que us hagi ensenyat:
els vaig detectar en el procés d'escriure el codi i verificar-lo abans de
mostrar-vos res, però els deixo documentats perquè quedi constància del
tipus de comprovació que cal fer sempre en aquestes figures (no confiar en
la primera intuïció numèrica, comprovar-la).

## 5. Ajustos tècnics fets durant el dibuix

- **`stampNum` amb l'alçada equivocada.** En un moment vaig confondre
  l'amplada amb l'alçada del canvas en una crida a `stampNum` (fig-047),
  cosa que hauria fet sortir el número de producció fora de l'àrea visible.
  Ho vaig detectar revisant sistemàticament totes les parelles
  (canvas, stampNum) del fitxer sencer abans de continuar, no només
  corregint el cas que havia vist trencat.
- **Diversos clippings de marge** (fig-035, fig-039, fig-046, fig-048,
  fig-049, fig-051, fig-052): figures que es tallaven pel marge del canvas
  perquè havia calculat malament l'espai que ocupava la construcció un cop
  aplicat el `translate` inicial. Corregits ampliant el canvas o reduint
  lleugerament la mida de la construcció, verificant numèricament l'espai
  necessari abans de tornar a renderitzar quan l'error es repetia.
- **fig-050 (con en semiesfera): la funció `handArc` que vaig voler fer
  servir no existeix a `hand-draw.js`.** Ho vaig detectar abans de
  renderitzar-la (cercant-la explícitament al fitxer font), i vaig
  reconstruir la figura amb `handEllipse` i els paràmetres `startAngle`/
  `endAngle`, seguint amb cura la forma exacta de l'escaneig original
  (dos arcs el·líptics compartint els mateixos dos punts extrems: l'equador,
  ample i baix, i la cúpula, per sobre).
- Número de producció a totes vint figures, mateixes regles que als lots
  anteriors.

## 6. Coses de les quals no estic segur

- **q08a i q08b no tenen escaneig d'origen.** Les figures 051 i 052 són
  disseny propi (un cub amb un eix de simetria marcat; un tetràedre i un
  octaedre en projecció cavallera). Si el llibre les acompanya d'un dibuix
  concret diferent, digueu-m'ho i les substitueixo.
- **q89 (bisectrius iguals → isòsceles).** És l'únic resultat d'aquest lot
  on la guia reconeix explícitament que no dona la demostració completa (el
  teorema de Steiner–Lehmus és cèlebre per no tenir cap prova curta ni
  purament sintètica). He preferit ser transparent sobre aquest límit dins
  de la pròpia guia en lloc de forçar un argument fals o incomplet perquè
  semblés tancat.
- **q37 i q73 no tenen escaneig d'origen tampoc** (calculades a partir de
  l'enunciat en anglès únicament). Les comprovacions numèriques de totes
  dues les he verificat jo mateix per càlcul directe, però no tinc manera de
  confirmar que coincideixin amb els números que el llibre proposa, si en
  proposa cap.

## 7. Dificultats: cap sospita nova

Com al lot 3, no tinc cap sospita de classificació incorrecta al `dificultat`
assignat a les preguntes d'aquest lot. q89 i q08b (dificultat 3) em semblen
efectivament les més exigents del grup, per motius diferents: q89 perquè el
resultat final se surt de l'abast d'una demostració sintètica curta, q08b
perquè combina geometria amb un argument de comptatge que cal fer amb cura
per no perdre'n ni afegir-ne cap cas.

## 8. Fitxers d'aquest lliurament

```
lliurament-04/
  figures/fig-034.png … fig-053.png   (numeració de producció)
  imatges/034_*.png … 053_*.png       (mateixos PNG, noms descriptius citats a les guies)
  contactes-04.png
  GUIES-LOT-4.md
  manifest.tsv          (acumulatiu, files 001–053)
  NOTA-LLIURAMENT.md    (aquest fitxer)
  figures-04.html       (font que regenera les 20 figures)
```

`figures-04.html` carrega `hand-draw.js` i `comu.js` sense cap modificació
(mateix `md5sum` que als lots anteriors — verificat abans de començar a
escriure cap figura).
