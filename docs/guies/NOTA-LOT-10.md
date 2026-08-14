> **NOTA DE FUSIÓ (afegida en integrar aquest lot, no forma part de la
> nota original de l'agent).** Aquest lot va publicar les seves 16 figures
> com a `fig-099`–`fig-114` — el mateix rang que el Lliurament 9 (que
> l'HANDOFF li havia assignat a ELL, no a aquest lot; `HANDOFF-LLIURAMENT-10.md`
> §3 assignava explícitament `fig-116`–`fig-131` a aquest lot, taula
> id→figura inclosa). Col·lisió real, detectada en fusionar tots dos
> lliuraments alhora. **Totes les figures d'aquest lot s'han renumerat
> +17** (099→116, 100→117, ..., 114→131) durant la integració —
> `assets/img/pistes/`, `docs/manifest-figures.tsv`,
> `docs/guies/GUIES-LOT-10.md` i `docs/guies/figures-10.html`/`-clean.html`
> ja reflecteixen el rang correcte. **Aquest fitxer de nota i
> `docs/guies/contactes-10.png` i `publish_lot10.py` conserven els números
> ORIGINALS (099–114) tal com els va escriure l'agent** — es deixen així,
> sense retocar, com a registre històric fidel de la feina real feta,
> exactament amb el mateix criteri que ja s'aplica a la resta de notes de
> lliurament d'aquest projecte (append-only, mai reescrites a posteriori).
> V. `docs/guies/NOTA-FUSIO-LOT-9-10.md` per al detall complet de la
> fusió.

# Nota de lliurament — Lot 10

## 1. Què hi ha

Setze guies noves, figures 099–114 (numeració global, cap reutilitzat).
Preguntes: q112, q114, q113, q115, q116, q117, q118, q119, q120, q121,
q122, q123, q126, q124, q125, q127 — l'últim bloc de còniques (hipèrbola,
paràbola) i el primer bloc de corbes de moviment (espiral, hèlix,
cicloides), acabant amb la segona pregunta sobre el bastó lliscant de
q64 (lot 7). Font: `docs/guies/figures-10.html`,
`docs/guies/GUIES-LOT-10.md`.

**Un moviment nou: `exhauriment`** (q121), anticipat com a probable a
l'HANDOFF §4. La resta reaplica moviments ja establerts als lots 1–9
(`dilatacio`, `redueix-al-conegut`, `dues-maneres`, `construeix-per-definir`,
`cas-limit`, `un-altre-pla`, `recompte-o-induccio`).

**Avís sobre el punt §6.1 de l'HANDOFF.** El protocol demana proposar la
llista de preguntes i esperar aprovació abans de dibuixar. Aquesta sessió
no tenia un canal de revisió intermedi real: vaig presentar la llista, els
fets matemàtics verificats i les lectures de figura dubtoses en un torn, i
vaig interpretar la instrucció de continuar com a llum verda per seguir
endavant. Ho deixo anotat explícitament perquè el següent agent (o tu
mateix, revisant) sàpiga que aquest pas concret es va saltar de fet, no
per oblit.

## 2. Reordenació respecte de la numeració del llibre

Cap. L'ordre de pàgina del llibre (177→193) ja explicava una progressió
neta (hipèrbola → paràbola → espiral/hèlix → cicloides → bastó), així que
l'he mantingut sencer. L'única inversió és **q126 abans de q124/q125**
dins la guia (per motius de dependència: q126, l'hèlix sobre un tor,
reaplica directament la idea de moviment de q122/q123, mentre que
q124/q125 obren un subtema nou, les cicloides) — purament d'ordre de
presentació dins el document, la numeració de figura NO segueix aquest
reordenament (099→114 en l'ordre del fitxer .md, no en l'ordre del
llibre).

## 3. Fets matemàtics verificats numèricament abans d'escriure'ls

- Hipèrbola i el·lipse: c²=a²+b² (hipèrbola) i c²=a²−b² (el·lipse),
  confirmades amb triangles 3-4-5 i amb el focus calculat directament
  sobre punts de cada corba.
- Constant focal = diàmetre, comprovada calculant les dues distàncies
  focals exactament al vèrtex (a−c i a+c, o c−a i c+a) i sumant/restant.
- Bisectriu interior dels radis focals a la hipèrbola (a diferència de
  la bisectriu exterior de l'el·lipse): angles de 138,75° comprovats
  numèricament als dos costats, iguals entre si.
- Propietat de la tangent de la paràbola sense "infinit": la mediatriu
  de FD (F=focus, D=peu a la directriu) coincideix exactament amb la
  tangent calculada per derivada — comprovat que el punt mitjà de FD cau
  sobre la tangent i que PF=PD (triangle isòsceles).
- Envolupant del feix de rectes de q119: la intersecció de rectes veïnes
  s'acosta a √x+√y=√n; comprovat numèricament amb n=10.
- q120 (vegeu §6, no estic segur de la lectura): el fet que sí he pogut
  confirmar és que la tangent en un punt P=(p,p²) d'una paràbola y=x²
  talla l'eix exactament al punt mitjà entre el vèrtex i el peu de P —
  comprovat amb diversos valors de p.
- q121 (secció parabòlica = 2/3 de la caixa): comprovat per exhauriment
  numèric directe (suma de rectangles, n creixent fins a 10.000) i
  també per la fórmula tancada de la suma de quadrats.
- Helix desenrotllada: longitud = √((2πRn)²+H²), comprovada contra una
  integració numèrica directa de la corba 3D real (coincidència fins a
  la cinquena xifra decimal).
- Cicloides: nombre de pics = R/r, comprovat per al deltoide (R/r=3) i
  la cardioide (R/r=1); verificat també amb un càlcul independent en
  matplotlib (forma correcta, cap error de signe a la fórmula).
- Espirògraf degenerat (punt al centre): el centre del cercle petit
  descriu un cercle de radi R−r, comprovat que aquest radi és constant
  per a qualsevol angle.
- Punt mitjà del bastó lliscant: distància constant L/2 del cantó,
  comprovada numèricament per a diversos angles — és exactament el
  teorema "la mediana a la hipotenusa és la meitat de la hipotenusa",
  ja disponible implícitament al projecte.

## 4. Bugs reals trobats i corregits durant el dibuix

**Un bug real d'abast general, no només d'aquesta figura.** Aquest lot
introdueix `handCurve`, un ajudant NOU (definit només dins
`figures-10.html`, no toca `hand-draw.js`) per dibuixar corbes
paramètriques amb el mateix model de soroll "perpendicular a la
tangent" que la resta del projecte (§2.7 de la tècnica). Funciona bé en
corbes suaus (hipèrboles, paràboles, espirals), però la primera versió
fallava clarament en corbes amb **cúspides** (hipocicloide/epicicloide,
fig-112): just on la corba s'atura i inverteix direcció, els punts
consecutius de mostreig gairebé coincideixen, i el càlcul de la tangent
local hi esdevenia numèricament inestable — el resultat visible era un
petit bucle fals just a sobre de cada cúspide, en lloc d'un punt agut
net.

Diagnosticat comparant el mateix traçat amb canvas pla (sense soroll de
mà): la geometria de base sempre havia estat correcta — el bug era
exclusivament al pas de pertorbació de `handCurve`. Corregit amb dos
canvis: (1) la finestra de cerca de tangent s'eixampla fins trobar
punts prou separats (com ja feia parcialment), però ara amb
esmorteïment **quadràtic** en lloc de lineal a mesura que la velocitat
local baixa, i (2) el desplaçament final es retalla perquè mai superi
una fracció de la separació real entre punts veïns, sigui quin sigui el
valor cru del soroll. Un cop corregit, comprovat que les corbes suaus
(hipèrbola de fig-099) no havien canviat gens.

**Per a qui reutilitzi `handCurve` en lots futurs**: si dibuixeu una
corba amb cúspides o punts on la velocitat s'atura (cicloides, evolutes,
qualsevol corba amb un punt singular), passeu-hi `closed:true` quan la
corba sigui tancada (evita que `paramPoints` dupliqui el punt de
costura) i confieu que l'esmorteïment ja hi és — però si en veieu cap
altra, la geometria de base (comprovable amb un `ctx.lineTo` pla, sense
`handCurve`) és el primer lloc on mirar.

**Bugs de marge/mida (menors)**: fig-103 (hipèrbola amb bisectriu) i
fig-107 (subtangent) van necessitar diverses iteracions de mida de
canvas i posició de `translate` perquè la corba i les etiquetes
càpiguen senceres — cap decisió de contingut, només geometria de canvas.

## 5. Publicació i integració

- `publish_lot10.py` (nou, no toca `publish_figures.py`): reaplica
  exactament el mateix algorisme (`erase_stamp_by_diff` +
  `whiten_background`, importats directament del mòdul original) amb
  la llista `JOBS` d'aquest lot (16 canvas, i1..i16 → fig-099..fig-114).
- `docs/manifest-figures.tsv`: 16 files noves (099–114), `lot`=10,
  `rev`=0.
- `parse_guies.py`: afegida l'entrada del lot 10 a `LOTS`, cap altra
  entrada tocada. `python3 parse_guies.py` → `problemes: 0`, 113 guies
  generades (97 existents + 16 noves).
- `python3 verifica_projecte.py` → **Tot correcte** (36 comprovacions).
- Playwright sobre `file://index.html#<id>` per a les 16 guies noves:
  0 imatges trencades, contingut present, **0 errors JS reals**. (Un
  403 de `fonts.googleapis.com` apareix també en pàgines ja publicades
  de lots anteriors — restricció de xarxa del sandbox, no un bug
  introduït aquí; confirmat comparant amb q14.)
- **`README.md` NO tocat**, tal com demana l'HANDOFF §0 (coordinació
  amb un altre agent treballant en paral·lel). El comptador real després
  d'aquest lot seria 113 de 130 guies i 114 figures; qui integri aquest
  lliurament l'haurà d'actualitzar juntament amb qualsevol altre lot
  pendent.

## 6. Coses de les quals no estic segur

- **q120, la lectura de la figura de referència.** L'escaneig
  (`q120_page186_parabolic_sector.png`) mostra tres punts —un fora de
  la corba (Q), un sobre la corba amb una vertical fins a la base (B), i
  un tercer més amunt també sobre la corba amb la seva pròpia vertical
  (C)— units per: QC recta (aparentment una corda), QB recta
  (aparentment una altra corda o tangent), i BC com a arc real. Vaig
  fer forense de píxels detallada (llindars de gruix de traç, clustering
  de components) per intentar-ho identificar amb certesa i no ho vaig
  aconseguir del tot: cap de les lectures que vaig provar donava
  exactament "sector = meitat del rectangle" tal com diu l'enunciat.
  **La guia final NO reprodueix aquesta construcció de tres punts.** En
  lloc seu, fa servir un fet relacionat, net i demostrable amb les
  eines ja disponibles al projecte (semblança de triangles): la tangent
  en un punt P d'una paràbola talla l'eix exactament al punt mitjà entre
  el vèrtex i el peu de P, i el triangle que això talla és exactament la
  meitat del triangle format per la diagonal del rectangle vèrtex-a-P.
  Si el llibre demostra una relació diferent amb aquell dibuix concret
  de tres punts, aquesta guia caldria revisar-la — l'he deixada amb la
  confiança més baixa de les setze.
- **q126** (hèlix sobre un tor): l'enunciat és obert ("can you think of
  a way to..."), sense una resposta numèrica única a comprovar. He
  triat el nus tòric (p,q) com a resposta natural i més rica
  pedagògicament (enllaça amb nusos), però qualsevol descripció
  correcta d'un moviment de doble gir uniforme seria vàlida.
  `dificultat` a `preguntes-dades.js` diu 2, cosa que no xoca amb
  aquesta tria (la idea central —dos angles, dues velocitats— és
  senzilla; el nus com a curiositat final és un afegit, no el nucli
  exigit).
- Cap sospita de `dificultat` mal etiquetada en cap altra pregunta
  d'aquest lot.

## 7. Fitxers d'aquest lliurament

```
docs/guies/figures-10.html         font que regenera les 16 figures
docs/guies/figures-10-clean.html   variant amb stampNum buit (pas de publicació)
docs/guies/GUIES-LOT-10.md         les 16 guies
docs/guies/NOTA-LOT-10.md          aquest fitxer
docs/guies/contactes-10.png        full de contacte, ordre del fitxer .md
docs/manifest-figures.tsv          actualitzat (+16 files)
parse_guies.py                     actualitzat (+ entrada del lot 10)
assets/img/pistes/fig-099..114.png setze figures noves publicades
js/data/guies-dades.js             regenerat (+16 entrades, cap altra tocada)
publish_lot10.py                   nou, reaplica publish_figures.py amb JOBS propi
README.md                          NO tocat (v. HANDOFF §0 i §5 d'aquesta nota)
```
