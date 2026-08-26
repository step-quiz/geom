# Tram 6 (q52–q57) — revisió de correcció matemàtica

Data: 2026-08-25. Abast: q52, q53, q54, q55, q56, q57.

`js/data/guies-dades.js` regenerat amb `parse_guies.py`: 130 guies, 0
problemes. `verifica_projecte.py` passa les 52 comprovacions.

| Fitxer | Qüestions |
|---|---|
| `docs/guies/GUIES-LOT-3.md` | q52, q53 |
| `docs/guies/GUIES-LOT-7.md` | q57 |
| `js/data/guies-dades.js` | regenerat |
| `solucions/` | q52, q53, q55, q57, **q74** (v. §4) |

Sense canvis: q54, q56. Verificats sencers i correctes.

---

## 1. q53 — el número de la comprovació és fals, i el raonament que el produeix també

Deia (guia i solució):

> *"Amb un cilindre recte de radi 2, alçada 10: superfície lateral
> 2π(2)(10)=40π≈125,7. Si l'inclines de manera que cada «franja» s'allargui
> per un factor 1,2 (un pendent moderat), la superfície lateral inclinada surt
> ≈150,8."*

**El 150,8 no és la superfície: és el producte perímetre × generatriu, que
n'és una cota superior estricta.** El valor real és **≈138,5** (factor 1,102,
no 1,2). L'he calculat amb la integral de l'element d'àrea: per a un cilindre
obtingut per cisallament, l'àrea val
R·∫₀^{2π}√(h² + d²cos²θ)·dθ, que no té forma tancada elemental.

El pas que falla és `cada franja s'allarga per k ⟹ la superfície es multiplica
per k`. **No totes les franges s'inclinen igual respecte de la vora de la
base**: les de la banda cap on el cilindre «cau» s'inclinen de ple i creixen
pel factor sencer; les de la banda perpendicular gairebé no ho noten i
pràcticament no creixen.

Això és delicat perquè **la conclusió qualitativa sí que és certa** —el
cilindre inclinat té estrictament més superfície lateral—, i és l'única cosa
que la pregunta demana. El que sobrava era el número.

**Com ho he resolt:** he mantingut el cilindre com a exemple central (que és
el que il·lustra la figura i la «pila de monedes») i he canviat la
**comprovació** a un **prisma de base quadrada**, on tot és exacte i elemental:

- Base 6, alçada 8, prisma recte: lateral 4×6×8 = **192**, volum 288.
- Inclinat 6 unitats en la direcció d'un costat de la base: volum **288**
  igual (Cavalieri), i
  - les dues cares **paral·leles** a la inclinació: 6×8 = 48 cadascuna,
    **exactament igual que abans** (el cisallament les llisca dins del seu
    propi pla);
  - les dues cares **perpendiculars**: 6 × √(8²+6²) = 6×10 = 60 cadascuna.
- Total 2(48)+2(60) = **216**. I 216/192 = 1,125 mentre que les arestes s'han
  allargat per 10/8 = 1,25.

El prisma no és només un substitut còmode: **ensenya el motiu**. Dues de les
quatre cares no creixen gens, i per això el creixement total va per sota del
factor de les arestes. Al cilindre passa el mateix, contínuament, i per això
1,102 en lloc d'1,2.

Nota de context: aquest error és, curiosament, un cosí del parany que q55
—la pregunta del costat— existeix precisament per denunciar. He afegit la
connexió a l'«i després».

---

## 2. Rigor

### q52 — de «costats iguals» a «regular» hi ha un pas que faltava

La Pista 3 i la solució demanen comprovar que els sis punts mitjans són
equidistants del centre i que els costats consecutius són iguals, i en
conclouen «hexàgon regular». El pas no és automàtic: **un hexàgon amb els sis
costats iguals encara pot estar deformat.** El que ho tanca és tenir les dues
condicions *alhora* —vèrtexs a distància R del centre i costats iguals—,
perquè aleshores tots sis angles centrals són iguals (a igual radi, cordes
iguals subtendeixen angles iguals) i sis angles iguals que sumen 360° fan 60°.
Afegit.

També hi he posat els sis punts mitjans explícits i l'equació del pla,
x+y+z = 3/2, que és una comprovació de deu segons i que la solució deixava
com a «cal comprovar que…» sense fer-la.

### q57 — el sòlid es talla unint el centre als VÈRTEXS, no als centres de cara

La Pista 1 deia *"Uneix el centre del sòlid amb cadascun dels seus vèrtexs (o,
més fàcil de mesurar, amb el centre de cadascuna de les seves cares)"*, i la
solució es va quedar directament amb la segona opció: *"S'uneix el centre del
sòlid amb el centre de cadascuna de les seves cares. Quantes peces en
surten?"*.

**Unint el centre amb els centres de cara no en surt cap peça**: aquells
segments no tallen res. El que parteix el sòlid en piràmides és unir el centre
amb els vèrtexs; el segment al centre de la cara és l'**alçada** de cada
piràmide. El peu de la figura ho tenia bé («del centre a cada vèrtex») i
contradeia el text del seu propi pas. Corregit als dos llocs.

### q57 — «apotema» i el domini de la fórmula

He glossat «apotema del sòlid» com el radi de l'esfera inscrita, i he avisat
de les dues confusions properes: l'apotema d'una piràmide (que en l'ús
habitual és l'altura d'una cara lateral) i la d'un polígon regular de q39.
Al resum he afegit **convex**: la descomposició en piràmides des d'un punt
interior demana convexitat, no només que el punt sigui equidistant de les
cares.

### q55 — exhauriment i Cavalieri no són el mateix

La solució deia *"el mètode d'exhaustió, que sí funciona per a àrees (Qüestió
54)"*. q54 és el **principi de Cavalieri**, que no és exhauriment; l'exhauriment
és q121. Reformulat perquè citi les dues coses pel seu nom.

---

## 3. Editorial

- **q52**: el text de l'«i després» contenia `(rev1, v. docs/guies/REVISIONS.md)`
  —una referència al registre intern de revisions, dins d'una pista que
  l'alumne llegeix. Tret.
- **«en aquest mateix lot»**: n'he tret el de q53. **En queden tres**, tots fora
  d'aquest tram: `GUIES-LOT-2.md` (q98), `GUIES-LOT-7.md` (q65, i un que cita
  q66/q67/q68), `GUIES-LOT-8.md` (q85).

## 4. Deute tancat: els `<` sense escapar

Ja no en queda cap a `solucions/`. En aquest tram he arreglat els dos de
`q55.html` (`s√2<2s`, dos cops) i els dos de `q74.html` (`5<6`, `3<10`).
`q74.html` és **fora del tram**; l'incloc perquè era l'últim pendent d'aquest
deute i el canvi és mecànic (`&lt;`), no una revisió del contingut de q74 —que
faré quan hi arribi.

---

## 5. Verificat i correcte, sense canvis

- **q52**, la matemàtica: els sis punts mitjans són al pla x+y+z=3/2, tots a
  √0,5 del centre, i els costats consecutius fan √0,5 ✓. Que el radi
  coincideixi amb el costat és, de fet, la signatura d'un hexàgon regular.
- **q54** — rectangle 6×4 = 24 i paral·lelogram de la mateixa base i alçada =
  24 ✓. La descomposició rectangle + triangle − triangle és correcta (i, amb
  desplaçament 3 < base 6, n'hi ha prou amb un sol tall).
- **q55** — trams horitzontals = s, verticals = s, total 2s sempre; diagonal
  s√2 ≈ 14,14 amb s=10, i la diferència 5,86 no es redueix mai ✓.
- **q56** — les sis distàncies entre (0,0,0), (1,1,0), (1,0,1) i (0,1,1) fan
  totes √2 ✓; el determinant dona −2 i el volum 1/3 ✓; els quatre trossos de
  cantonada fan 1/6 cadascun (base mitja cara = ½, alçada 1) i 4(1/6)+1/3 = 1 ✓.
  El «camí llarg» és correcte i està ben explicat, inclosa l'autocorrecció del
  1/3 inicial.
- **q57** — tetràedre d'aresta 1: apotema 1/(2√6) ≈ 0,2041, superfície √3 ≈
  1,7321, volum (1/3)(1,7321)(0,2041) = 0,11785 = 1/(6√2) ✓.

---

## 6. Per decidir

1. **q53 i la figura.** He deixat el cilindre com a exemple i he passat la
   comprovació al prisma. Si prefereixes coherència total figura-text, la
   `fig-031` hauria de mostrar prismes; però em sembla que el cilindre és
   millor per a la intuïció de Cavalieri i el prisma millor per al número, i
   tenir-los tots dos té valor propi. Digue'm si ho veus d'una altra manera.
2. Segueix pendent el **q40 panell 1** (el quadrat petit, t = S/5), que espera
   decisió teva i que es redibuixi `fig-059`.
