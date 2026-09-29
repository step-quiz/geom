# Coherència del contingut matemàtic (set. 2026)

Els punts del bloc "C" de l'anàlisi del projecte: ordre i dependències,
glossari, imatges d'enunciat que faltaven i el teorema del casquet. Tots
venien de la revisió matemàtica (`docs/revisio-matematica/HANDOFF-FULL.md`
§1.2–§1.5 i `docs/CONEIXEMENT-PREVI-CANDIDATS-GLOSSARI.md`), on constaven com
a oberts; ara hi consten com a tancats.

`verifica_projecte.py`: **Tot correcte**, **cap avís** (n'hi havia dos des de
feia mesos) i 5 comprovacions noves que converteixen en error qualsevol
regressió d'aquestes (v. §6).

## 1. Dins dels itineraris temàtics (HANDOFF-FULL §1.4)

Sis casos en què, dins d'un mateix itinerari, una pregunta sortia abans d'una
altra de la qual declara dependre (el pitjor: q04 necessita la suma
(n−2)·180° que q70 estableix setze posicions més tard). Criteri aplicat:
**cada prerequisit es porta just davant de qui el necessita**, i la resta de
l'ordre editorial no es toca.

| Itinerari | Canvi |
|---|---|
| Triangles | q78 (definició de sinus i cosinus) passa davant de q72 |
| Polígons | q70 → q04 → q03 obren l'itinerari; q38 passa davant de q32 |
| Altres | q64 passa davant de q127 |
| 3D | q60 passa davant de q58 |

Circumferència i Còniques no tenien cap cas. Cap `requereix` ni cap
`bessones` no s'ha tocat.

## 2. Dependències de preguntes amagades (HANDOFF-FULL §1.5)

Amb el mètode de q85: abans de desamagar o reescriure, mirar si la
dependència és necessària de debò.

- **q50 → q18a**: no ho era. q50 només necessita el volum d'un cilindre
  (πr²·gruix, de l'escola); q18a és el volum d'una capsa. La Pista 1 ho diu
  ara així, sense citar q18a.
- **q68 → q67**: no ho era. q68 fa servir el centroide d'una regió i Pappus
  per a volums (q65, q66); q67 és el centroide d'un perímetre. Tret del DEPÈN.
- **q69 → q67**: sí que el feia servir (la segona meitat de la pregunta és el
  centroide de l'arc). q67 és amagada per una decisió teva, i no l'he tocada:
  la Pista 3 de q69 introdueix ara ella mateixa la versió de Pappus per a
  corbes (dues frases, "on hi havia àrea ara hi ha longitud"), i l'«I
  després» ja no remet a q67.

## 3. L'ordre de presentació general (HANDOFF-FULL §1.3)

17 casos en què una guia sortia a la llista abans d'una pregunta de la qual
depèn. Cap no es podia arreglar movent preguntes dins dels sis grups que vas
demanar (dificultat, i després 2D/3D), perquè tots creuaven la frontera entre
grups. Mirats un per un:

- **Dos no eren dependències.** q03 "complementa" q08b, però la frase era
  dins de la declaració DEPÈN i comptava com a tal; q64 comparteix moviment
  amb q50 però no en fa servir res. Reformulats com a comentari.
- **Un ho era, i ara no cal.** q69 → q65: q69 enuncia ara el teorema de Pappus
  que fa servir, tal com fa el llibre mateix a q68 ("suposant que Pappus té
  raó"). Fer-la autosuficient és el que ja feia el §2.
- **Nou eren classificacions de dificultat incoherents**: preguntes més
  fàcils que una de la qual depenen (q108 era de dificultat 1 i depèn de
  q107, de dificultat 3). La `dificultat` era una "primera passada pendent de
  revisió" (ho diu la capçalera de `preguntes-dades.js`). Principi aplicat:
  **una pregunta és com a mínim tan difícil com qualsevol de la qual depèn**.
  Pujades, i cadascuna col·locada just darrere de la seva dependència:

| Pregunta | Dificultat | Depèn de |
|---|---|---|
| q33 | 2 → 3 | q32 |
| q66 | 2 → 3 | q65 |
| q68 | 2 → 3 | q65, q66 |
| q77 | 2 → 3 | q31, q32, q33 |
| q105 | 1 → 2 | q104 |
| q108 | 1 → 3 | q107 |
| q117 | 1 → 2 | q112 |
| q125 | 1 → 3 | q124 |
| q126 | 2 → 3 | q122, q123 |

Distribució de dificultats: 28/70/32 → **24/67/39**. Cada canvi queda anotat al
`_notaClassificacio` de la pregunta. Resultat: **0 casos**. La regla 2 de
l'itinerari reactiu (la "rampa" de dificultat) fa servir aquest camp: ara
suggereix amb dades coherents.

**Decisió que pots voler revisar:** he tractat la coherència com a prioritària
sobre la classificació original. Si prefereixes que alguna d'aquestes
preguntes torni a la dificultat antiga, el verificador et dirà quina
dependència s'hi oposa.

## 4. Glossari: de 53 a 56 termes

De l'inventari `CONEIXEMENT-PREVI-CANDIDATS-GLOSSARI.md`, tot el bloc A i les
dues del bloc B que l'anàlisi prioritzava:

**Entrades ampliades (A1–A7)**, amb el fet que les guies fan servir i
l'entrada no deia:
- `esfera`: V = (4/3)πr³, S = 4πr²;
- `con`: V = (1/3)πr²h, àrea lateral πrg;
- `cilindre`: V = πr²h, àrea lateral 2πrh;
- `poligon-regular`: suma d'angles (n−2)·180° i angle interior;
- `apotema`: el sentit per a poliedres (radi de l'esfera inscrita) i l'avís
  sobre l'"apotema d'una piràmide" dels llibres de text;
- `poliedre` (+ terme de cerca "angle diedre") i `tetraedre`: l'angle diedre,
  i el del tetraedre regular, arccos(1/3) ≈ 70,5°;
- `teorema-de-pitagores`: la llei del cosinus com a generalització.

**Entrades noves**, amb figura:
- `teorema-del-sinus` (B24): l'enunciat i la idea de la demostració (la
  mateixa alçada llegida de dues maneres), i la definició per a l'angle
  obtús. Figura `gloss-teorema-sinus.png`.
- `homotecia` i `estirament` (B36, que resol també B14 i B27): què conserva
  cadascuna (la primera, la forma; la segona, rectes, paral·lelisme,
  proporcions sobre una recta i la proporció de les àrees, però no els
  angles). L'avís de *dilation* ≠ «dilatació». Figura compartida
  `gloss-homotecia-estirament.png`.

Les dues figures, dibuixades amb el motor de sempre a
`docs/glossari-figures(-clean).html` (g34, g35), tinta sola i accent de
terme, com la resta del glossari. Els punts que han de caure sobre una
línia dibuixada es llegeixen del traç real (LESSONS §9).

## 5. Imatges d'enunciat de q84, q87, q88 (lot E)

Les tres preguntes de trigonometria publicades a l'ago. 2026 eren les úniques
visibles sense imatge. Ara: `fig-217` (triangle rectangle amb θ i els noms
dels tres costats), `fig-218` (triangle amb l'angle C obtús) i `fig-219` (un
angle θ i un angle 2θ). Tinta sola i **cap que doni la resposta**: ni
l'alçada de q87 ni el triangle isòsceles de q88, que són les construccions
de les guies. Font: `docs/guies/figures-enunciats-E(-clean).html`. També
s'han afegit a la capçalera de les tres solucions, com les altres.

**125 de 130** preguntes amb imatge; les 5 que no en tenen són totes amagades.
L'analitzador en porta 119 d'incrustades.

## 6. q62: el teorema d'Arquimedes del casquet, demostrat (HANDOFF-FULL §1.2)

La guia deia que S = 2πRh "aquí te la donem, no la demostrem". Ara la guia
en dona el camí i la solució, el càlcul sencer. Es fa servir el volum que la
mateixa pregunta acaba de trobar ("redueix el desconegut al conegut"):

- tallant la superfície en trossets i unint-los amb el centre, el **sector
  esfèric** (casquet + con fins al cercle de tall) és una suma de piràmides
  primíssimes d'alçada R: val (1/3)·R·S;
- com a casquet + con (ρ² = h(2R−h) per Pitàgores) val (2/3)πR²h;
- per tant, **S = 2πRh**.

Comprovat numèricament per a h < R, h = R, h > R i h = 2R (on dona 4πR²).
L'avís d'honestedat sobre el pas infinitesimal es manté, ara per a totes
dues coses: Cavalieri i les piràmides.

## 7. Comprovacions noves a verifica_projecte.py

- §15: **tota pregunta visible té imatge d'enunciat** (error).
- §17: **l'ordre de presentació respecta tots els DEPÈN** i **cap pregunta
  no és més fàcil que una de la qual depèn** (errors).
- Els dos avisos que hi havia (inversions dins d'un itinerari, i guies que
  depenen d'amagades) passen a **errors**: no en queda cap, i un de nou seria
  una regressió.
- La distribució de dificultats esperada passa a 24/67/39.

## Fitxers

**Nous:** `docs/guies/figures-enunciats-E.html` i `-clean.html`,
`assets/img/fig-217.png`, `fig-218.png`, `fig-219.png`,
`assets/img/glossari/gloss-teorema-sinus.png`,
`gloss-homotecia-estirament.png`, aquesta nota.

**Modificats:** `docs/guies/GUIES-LOT-6.md`, `GUIES-LOT-7.md`, `GUIES-LOT-8.md` (q03, q50, q62,
q64, q68, q69); `js/data/guies-dades.js` (regenerat);
`js/data/preguntes-dades.js` (9 dificultats, 3 imatges);
`js/data/ordre-preguntes.js`; `js/data/itineraris-tematics-dades.js`;
`js/data/glossari-dades.js`; `docs/glossari-figures(-clean).html`;
`solucions/q62.html`, `q84.html`, `q87.html`, `q88.html`;
`js/data/solucions-dades.js` i `analitzador-geom.html` (regenerats);
`verifica_projecte.py`; `README.md`, `HANDOFF-COLD-START.md`, `LLEGEIX-ME.md`,
`docs/CONEIXEMENT-PREVI-CANDIDATS-GLOSSARI.md`,
`docs/revisio-matematica/HANDOFF-FULL.md`.
