# Tram 8 (q63–q67) — revisió de correcció matemàtica

Data: 2026-08-25. Abast: q63, q64, q65, q66, q67.

`js/data/guies-dades.js` regenerat amb `parse_guies.py`: 130 guies, 0
problemes. `verifica_projecte.py` passa les 52 comprovacions.

| Fitxer | Qüestions |
|---|---|
| `docs/guies/GUIES-LOT-7.md` | q63, q65, q66, q67 |
| els altres sis fitxers `GUIES-LOT` (lots 1, 2, 4, 6, 8 i 9) | **només** la neteja de §4 |
| `js/data/guies-dades.js` | regenerat |
| `solucions/` | q63, q65, q66 |

q64 verificada sencera i correcta, sense canvis. **q67 no té fitxer de solució.**

---

## 1. q65 — la definició de centroide era circular, i buidava la pregunta

L'enunciat és: *"How should we define the centroid of a shape? Can we do it in
such a way that Pappus's theorem holds?"*. La Pista 3 i la solució responien:

> *"Defineix el centroide, en general, com el punt de la figura la distància del
> qual a l'eix, multiplicada per l'àrea i per 2π, reprodueix el volum de la
> figura girada, sigui quina sigui la figura."*

Això té dos problemes, i el segon és el greu.

**No defineix cap punt.** Fixa només *a quina distància d'un eix concret* ha de
ser. Els punts que compleixen això formen una recta sencera, paral·lela a
l'eix. Canviant d'eix en surt una altra recta, i res del text diu que s'hagin
de tallar totes en un punt (que és, de fet, un resultat, no una definició).

**Buida la segona pregunta.** Si defineixes el centroide com «el que fa que
Pappus funcioni», Pappus surt cert per decret. L'enunciat demana precisament si
*es pot* fer que surti cert, i amb aquesta definició la resposta és trivialment
sí, sense contingut. També deixa q66 sense sentit: q66 diu «demostra que Pappus
funciona per a un cilindre», cosa que no es pot demostrar si Pappus és la
definició.

Hi havia, a més, una **contradicció interna**: la Pista 1 de q67 diu *"A q65
vas repartir l'àrea en trossos petits i vas trobar el punt que resumeix on és,
de mitjana, tota aquesta àrea"*. q65 no feia res d'això.

**Correcció.** La definició que serveix no esmenta eixos ni volums: es talla la
figura en molts trossos petits de la mateixa àrea i es pren la **posició
mitjana** de tots ells —el punt d'equilibri. He conservat sencera l'exploració
del rectangle (que és bona, i troba que el punt és el centre) i he afegit
després la definició general.

I com que amb aquesta definició Pappus torna a ser una afirmació **comprovable**,
he escrit també per què és certa, que és curt i és del nivell: cada trosset
d'àrea a distància r escombra un volum (trosset)×2πr; sumant, el volum és
2π × àrea × (mitjana de les r); i aquesta mitjana és la distància del centroide
a l'eix, perquè el centroide és la posició mitjana i la distància a l'eix creix
uniformement mentre la figura queda tota a una banda.

Aquesta última clàusula té un premi: **explica la hipòtesi de l'enunciat**. Si
l'eix tallés la figura hi hauria trossos a banda i banda, les distàncies
deixarien de comptar en el mateix sentit, i la mitjana ja no seria la distància
del centroide. Fins ara la condició «l'eix no la talla» hi era sense motiu.

*Mateixa correcció, en petit, a la Pista 3 de q67* (el centroide del perímetre
es definia igual de circularment). Hi he afegit també un avís que faltava: el
centroide del perímetre i el de la regió **no són el mateix punt** en general
—coincideixen quan hi ha prou simetria, que és el cas de tots els exemples de
la guia, i per això és fàcil no adonar-se'n.

## 2. q66 — la verificació anunciada i no feta

L'enunciat és *"Show that Pappus's theorem works…"*: la comprovació **és** la
pregunta. La solució plantejava les dues expressions i s'aturava («Calculant-ho
amb Pappus: àrea del rectangle (w×H) per 2π per la distància del centroide a
l'eix (d+w/2)»), i el resum afirmava que coincideixen. Fetes les dues línies:

> Resta de cilindres: πH[(d+w)²−d²] = **πHw(2d+w)**
> Pappus: wH·2π·(d+w/2) = **πHw(2d+w)**

Idèntiques per a qualsevol w, H, d. Hi he afegit el contrast que ho fa
entenedor: amb el costat exterior en lloc del centre sortiria πHw(2d+2w).

---

## 3. Ordre de presentació: 15 dependències declarades que van al revés

Buscant per què q66 deia *"el seu centroide —pel que vas definir a q65—"*, he
comprovat les marques `DEPÈN de …` de les 62 guies que en tenen contra
`ordre-preguntes.js`. **N'hi ha 15 que es presenten abans que allò de què
depenen:**

| Guia | posició | depèn de | posició |
|---|---:|---|---:|
| q117 | 20 | q112 | 70 |
| q125 | 22 | q124 | 114 |
| q105 | 26 | q104 | 96 |
| q108 | 27 | q107 | 127 |
| q33 | 46 | q32 | 104 |
| q64 | 55 | q50 | 79 |
| q69 | 56 | q65 | 124 |
| q69 | 56 | q67 | 87 |
| q77 | 61 | q32 | 104 |
| q88 | 65 | q79 | 106 |
| q67 | 87 | q65 | 124 |
| q66 | 88 | q65 | 124 |
| q68 | 89 | q65 | 124 |
| q102 | 94 | q101 | 125 |
| q126 | 97 | q123 | 129 |

La causa és estructural, no un descuit: la capçalera d'`ordre-preguntes.js` diu
que l'ordre per defecte és «agrupat primer per dificultat i després per
dimensió», decisió explícita de l'owner. q65 és dificultat 3 i q66/q67/q68 són
dificultat 2, així que el bloc de Pappus queda partit i la definició arriba 35
posicions després dels seus tres usos.

**No he tocat `ordre-preguntes.js`** —és decisió teva, i afecta 15 parelles.
El que sí que he fet és **treure el pressupòsit del text** de les guies
d'aquest tram, perquè funcionin en tots dos ordres: q66 ja no diu «pel que vas
definir a q65» sinó «la posició mitjana de tots els seus punts, que és la
definició que es construeix a q65», i q67 igual. Les altres 11 parelles queden
per revisar als seus trams.

---

## 4. Neteja transversal: vocabulari de producció (tancada)

Venia arrossegant-la des del tram 5. He comprovat sobre el `guies-dades.js`
generat —que és el que veu l'alumne— i n'hi havia **10 ocurrències** a pistes,
comprovacions i «i després»: q76, q78, q81, q88, q89 (×3), q95, q97, q109, i
q40, que era la pitjor perquè remetia l'alumne a `NOTA-LOT-6.md`, un fitxer
intern de lliurament. Totes tretes. **Verificat: 0 referències a lots, notes o
revisions al material que veu l'alumne.**

Set fitxers `GUIES-LOT-*.md` d'aquest ZIP hi surten **només** per aquesta
neteja; el seu contingut matemàtic no l'he revisat encara (llevat del que ja
vaig fer als trams 1–7).

---

## 5. Verificat i correcte, sense canvis

- **q63** — les dues descripcions són genuïnament diferents ✓. He precisat una
  cosa a la Pista 1 i a la solució: girar un *rectangle* al voltant d'un costat
  escombra el cilindre **sencer**; el que en traça només la superfície lateral
  és girar un *segment*. El text deia «en traça la superfície».
- **q64** — l'envolupant és l'astroide x^(2/3)+y^(2/3)=L^(2/3), amb cúspides a
  (L,0) i (0,L) ✓. He verificat la llargada: amb x=L cos³t, y=L sin³t la
  rapidesa és (3L/2)|sin 2t| i la integral sobre [0,π/2] dona **3L/2 = 1,5L** ✓.
  Perímetre L+L+1,5L = 3,5L ✓; amb L=2, 7 ✓. També he comprovat que la regió
  escombrada és la de *dins* de l'astroide (un punt com (0,3L; 0,3L) hi és,
  (0,8L; 0,8L) no), o sigui que els tres trams de vora són els que diu la guia.
  I l'avís que la llargada es dona sense demostrar és correcte i està ben
  col·locat.
- **q66** — Pappus 15π = 27π−12π ✓.
- **q67** — segment de llargada 3 a distància 2: 3×2π×2 = 12π = 2π(2)(3) ✓.

---

## 6. Per decidir

1. **L'ordre de presentació** (§3). Les opcions són: acceptar-lo i fer que cap
   guia pressuposi una anterior (jo n'he fet 3 de 15), o moure q65 —i les
   altres— dins d'`ordre-preguntes.js` trencant l'agrupació per dificultat.
   És decisió d'owner i no la prenc jo.
2. **q67 no té solució.** Ara la guia hi té l'argument sencer i correcte, si
   la vols escriure.
3. Segueixen pendents el **q40 panell 1** (t = S/5) i, si el vols, el
   desenvolupament de **2πRh** a q62.
