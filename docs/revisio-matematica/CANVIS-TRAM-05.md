# Tram 5 (q46–q51) — revisió de correcció matemàtica

Data: 2026-08-25. Abast: q46, q47, q48, q49, q50, q51 (les sis que van quedar
pendents del tram 4).

`js/data/guies-dades.js` regenerat amb `parse_guies.py`: 130 guies, 0
problemes. `verifica_projecte.py` passa les 52 comprovacions.

| Fitxer | Qüestions |
|---|---|
| `docs/guies/GUIES-LOT-3.md` | q46, q47 (+ q52, q54: v. §3) |
| `docs/guies/GUIES-LOT-7.md` | q48, q50 |
| `js/data/guies-dades.js` | regenerat |
| `solucions/` | q46, q48, q49, q50 |

Sense canvis de fons: q47, q51. Verificats sencers i correctes.

**Cap error de càlcul en aquest tram.** Els sis resultats són correctes. El que
he trobat són tres solucions que **no arriben a contestar la pregunta que
l'enunciat fa**, que en un fitxer de solucions per al professorat em sembla
tan greu com un número equivocat.

---

## 1. q50 — la solució no dona el patró, i és circular

L'enunciat és *"Can you figure out the pattern to these approximations?"*. La
solució contestava:

> *"El patró de la successió d'aproximacions és, doncs, que convergeix cap al
> volum del con —la fórmula ja coneguda, (1/3)πr²h— i no cap al volum d'un
> cilindre de la mateixa base i alçada."*

Dos problemes. Primer, això no és cap patró: és el límit, i el límit no era el
que es preguntava. Segon, la Pista 3 arriba a dir *"Quin és, doncs, el volum
del con mateix (la fórmula que ja coneixes)"* — o sigui, la pila de discs
s'explica invocant el resultat que la pila de discs serveix per establir.

**El patró es pot escriure exacte.** He mirat el dibuix per fixar la
construcció: els discs són **inscrits** (el radi de cada disc és el del con al
seu propi sostre), i se'n veuen set, cosa que correspon a n=8 llesques amb la
de dalt buida. Amb n llesques:

> Vₙ = Σ π·[r(j−1)/n]²·(h/n) = (πr²h/n³)·(n−1)n(2n−1)/6
> = **πr²h·( 1/3 − 1/(2n) + 1/(6n²) )**

Comprovat: n=2 → 1/8; n=8 → 35/128 ≈ 0,273; n=100 → 0,32835. Sempre per sota
d'un terç, com ha de ser amb discs que van per dins.

I hi ha un regal aquí que el projecte no havia vist: **és literalment la
mateixa expressió que q121**, la paràbola, però amb els signes canviats
(1/3 + 1/(2n) + 1/(6n²) allà, perquè els rectangles hi sobresurten). q121 ja té
escrita la pedagogia bona per a aquest tipus d'argument —«no et demanem que et
creguis res, et donem la fórmula i pots exigir el número»— i q50 la pot fer
servir 34 posicions abans. He posat la referència creuada als dos «i després».

## 2. q48 — la solució no dona la fórmula

L'enunciat demana *"How does its volume depend on a, b, and h?"*. La solució
es queda a *"El volum del tronc és (1/3)b²H − (1/3)a²(H−h)"*, amb H sense
aïllar, i el resum diu només «és la diferència entre…». La fórmula demanada no
hi surt enlloc.

Completat: de a/b = (H−h)/H surt H = bh/(b−a) i H−h = ah/(b−a), i substituint,

> V = (h/3)·(b³−a³)/(b−a) = **(h/3)·(a² + ab + b²)**

Comprovat amb el propi exemple de la comprovació (a=2, b=4, h=3): (3/3)(4+8+16)
= 28 ✓, que és el 32−4 que ja hi havia. Hi he afegit la lectura dels casos
límit, perquè és on es veu que la fórmula és bona: a=0 dona la piràmide (h/3)b²,
i a=b dona el prisma a²h.

**Relacionat**: la Pista 1 deia que el vèrtex de la piràmide completada
*"existeix sempre"*. No: si a=b els costats són verticals i no es troben mai
(el sòlid és un prisma). Curiosament la fórmula final sí que cobreix aquest cas,
perquè la simplificació del (b−a) el repara — val la pena dir-ho, i ho he dit.

## 3. q49 — l'àlgebra s'anuncia i no es fa

La solució diu que G=(A+B+C+D)/4 és el punt a 3/4 del camí de cada vèrtex cap
al centre de la cara oposada *"—es pot comprovar algebraicament per a un vèrtex
qualsevol i generalitzar per simetria als altres tres"*, i després només fa la
comprovació **numèrica per a un vèrtex d'un tetràedre concret**. Per al fitxer
del professorat és prim, sobretot perquè la demostració general són dues
línies:

> A + (3/4)·[(B+C+D)/3 − A] = A + (B+C+D)/4 − (3/4)A = (A+B+C+D)/4 = G

Escrita. I hi he afegit una observació que em sembla que val la pena: aquest
càlcul **no fa servir la regularitat** —val per a qualsevol tetràedre. El que
la regularitat aporta és que G quedi equidistant dels quatre vèrtexs, que és el
que li fa merèixer el nom de «centre». Tal com estava, semblava que la
concurrència depengués de la simetria.

## 4. q46 — les franges no són rectangles

El resultat (πab) i l'argument són bons, però la solució diu *"L'àrea d'una
franja rectangular prima és amplada×alçada"*, i les franges verticals d'un
cercle no són rectangles: tenen la vora de dalt i la de baix corbades. És el
punt exacte on un alumne desperta protesta.

Afegida una precisió curta: el que sosté l'argument no és que les franges
siguin rectangles, sinó que l'estirament multiplica per k **tota** longitud
vertical, a cada punt — que és Cavalieri (q54), i és el que fa que πab sigui
una igualtat exacta i no una aproximació.

---

## 5. Editorial

**Vocabulari de producció dins de material per a l'alumne.** Hi ha nou pistes
que diuen *"en aquest mateix lot"* —un alumne no sap què és un lot; és
vocabulari del procés de lliurament. N'he tret els quatre de `GUIES-LOT-3.md`
(q46, q47, i de passada q52 i q54, que són al mateix fitxer i és el mateix
canvi mecànic). **En queden quatre**, que faré als seus trams: `GUIES-LOT-2.md`
(1), `GUIES-LOT-7.md` (2), `GUIES-LOT-8.md` (1).

Recordatori del que arrossego d'abans: queden dos `<` sense escapar,
a `q55.html` i `q74.html`.

---

## 6. Verificat i correcte, sense canvis

- **q46** — πab; a=5, b=3 → 15π ≈ 47,12 ✓; cas b=a dona πa² ✓.
- **q47** — cub de costat 2, centres de cara (±1,0,0)… ; quadrat equatorial de
  diagonal 2 i costat √2, àrea 2 ✓; piràmide (1/3)(2)(1)=2/3, dues 4/3, sobre
  8 → **1/6** ✓.
- **q48**, els números: H=6, 32−4=28 ✓, i coincideix amb (h/3)(a²+ab+b²) ✓.
- **q49** — A=(1,1,1), B=(1,−1,−1), C=(−1,1,−1), D=(−1,−1,1) és regular de
  debò (les sis arestes fan √8) ✓; G=(0,0,0) ✓; centre de BCD =
  (−1/3,−1/3,−1/3) ✓; el punt a 3/4 del camí dona G ✓. La relació 3:1 com a
  anàleg 3D del 2:1 del baricentre ✓.
- **q51** — sector de radi L i arc 2πr: àrea (1/2)L(2πr) = πrL ✓. Amb r=3, L=8:
  angle 3π/4 = 135° ✓, àrea 24π ≈ 75,4, i (1/2)L²θ dona el mateix ✓.

---

## 7. Per decidir

1. **q50 i el nivell.** La qüestió està etiquetada de dificultat 2 i el patró
   que hi he posat fa servir la suma de quadrats consecutius, que a q121
   (dificultat 3) es tracta com a peça nova. La guia hi arriba gradualment i la
   solució és per al professorat, però si et sembla massa per a un dificultat 2,
   digue-m'ho i deixo la fórmula només a la solució, traient-la de la Pista 3.
2. **Segueix pendent el q40 panell 1** del tram anterior (el quadrat petit amb
   t = S/5), que necessita que et decideixis i que es redibuixi `fig-059`.
