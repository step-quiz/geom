# Tram 2 (q13–q25) — revisió de correcció matemàtica

Data: 2026-08-25. Abast: q13, q14, q15, q16, q17, q18a, q18b, q19, q20, q21,
q22, q23, q24, q25 (14 entrades).

**Aquest ZIP conté només els fitxers tocats al tram 2.** Cal aplicar-lo damunt
de l'estat resultant del tram 1. `js/data/guies-dades.js` és acumulatiu per
naturalesa (conté els canvis dels dos trams) i s'ha **regenerat** amb
`parse_guies.py`: 130 guies, 0 problemes. `verifica_projecte.py` passa les 52
comprovacions.

Guies tocades en total fins ara: q01, q02, q03, q08a, q08c, q10 (tram 1) +
q13, q17, q21, q23, q24 (tram 2).

| Fitxer | Qüestions |
|---|---|
| `docs/guies/GUIES-LOT-2.md` | q13, q23 |
| `docs/guies/GUIES-LOT-6.md` | q17, q21, q24 |
| `js/data/guies-dades.js` | regenerat |
| `solucions/` | q13, q14, q16, q17, q22, q23, q25 |

Sense canvis: q15, q18a, q18b, q19, q20. Els he verificat sencers i són
correctes.

---

## 1. Errors matemàtics corregits

### q13 — la comprovació afirmava el contrari del que passa

Deia (guia i solució): *"Prova-ho també desplaçant el vèrtex a un altre lloc de
la mateixa alçada 7: les dues meitats han de continuar sortint iguals entre
elles, **encara que ja no facin 21 cadascuna**."*

Fals. Amb base 12 i alçada 7, cada meitat té base 6 i alçada 7 sempre: àrea
6×7/2 = 21, es posi el vèrtex on es posi horitzontalment. La frase no és només
inexacta: **contradiu q15**, que és exactament la pregunta "moc el vèrtex
horitzontalment i l'àrea no canvia". Reescrit perquè digui el que passa i
perquè el motiu quedi explícit (ni la base ni l'alçada de cap de les dues
meitats no canvien).

### q24 — la fórmula de les ternes no les genera totes

Deia: *"hi ha una fórmula que les genera totes (m²−n², 2mn, m²+n², per a m>n
enters)"*.

Fals. Genera totes les **primitives** (amb m i n coprimers i de paritat
diferent); les altres són múltiples d'aquestes. Contraexemple immediat, i el
poso a la guia perquè és comprovable en trenta segons: **(9,12,15) = 3×(3,4,5)
no surt de cap parell (m,n) enter**. Reescrit.

### q21 — la comprovació atribueix a la davallada infinita una hipòtesi que no necessita

Deia: *"la davallada infinita necessita precisament aquesta hipòtesi
[la fracció reduïda al mínim] per contradir-se"*.

És just al revés: la gràcia de la davallada infinita és que **no** necessita
suposar la fracció reduïda. La guia barrejava les dues demostracions —muntava
l'escenari amb la hipòtesi de coprimalitat (Pista 0) i tancava amb descens
(Pista 3)—, cosa que en una guia sobre estructura lògica és especialment
inconvenient. Reescrit: la Pista 3 tanca ara amb la via de la coprimalitat
(3|p i 3|q contradiuen la hipòtesi), que és la que l'escenari demanava, i la
davallada queda com a nota a part, marcada com a alternativa.

---

## 2. Rigor

### q16 — l'argument de l'àrea no es tancava

La conclusió (àrea del paral·lelogram = meitat) és correcta, però l'argument
donat no la produeix: descomponia **una** meitat del quadrilàter en ¼ + ¾ i
"aplicava dues vegades" això mateix. D'aquí no en surt la meitat.

L'argument que sí que funciona necessita **les dues diagonals**, i és curt:
els quatre triangles de les cantonades es compten per parelles. [APS]+[CRQ] =
¼([ABD]+[CBD]) = ¼ del quadrilàter (per la diagonal BD); [BQP]+[DSR] = ¼ (per
la diagonal AC). Total cantonades = ½, i el paral·lelogram es queda l'altra
meitat. Escrit sencer, amb noms de vèrtexs.

### q17 — la condició "a &lt; 4b" i un exemple just al límit

Dues coses. Primera, l'exemple de la comprovació era un rectangle **8×2**, de
proporció exactament 4:1 — o sigui, just fora de la condició que la mateixa
pista acabava d'enunciar. Canviat a 6×3, i el 8×2 s'ha conservat com a cas
límit explícit. Segona, es deia que amb rectangles més allargats "calen més
peces" sense dir com; ara diu el mètode (partir per la meitat i apilar fins a
entrar dins de la proporció).

També s'ha tret una glossa falsa de la Pista 2: el teorema de l'altura sobre la
hipotenusa **no** és "el mateix que fas servir per trobar l'apotema". Ara remet
a q09, que és on està demostrat.

### q23 — "és la mateixa equació que q22" no és cert

q22 dona R√2 = R+r (tangència exterior, catets R). q23 dona r√2 = R−r
(tangència interior, catets r). Són equacions **diferents** que resolen a la
mateixa raó r/R = √2−1. No s'hi arriba "dividint per R i reorganitzant": cal
racionalitzar 1/(√2+1). Reescrit a la guia i a la solució conservant la
sorpresa —que és bona— però dient-ne la raó de debò: (√2−1)(√2+1) = 1.

### q24 — referència creuada equivocada

*"a²+b²=c² —la mateixa relació que fas servir des de q14/q25"*. q14 (el
triangle és mig rectangle) no té res a veure amb Pitàgores. És q09 on es
demostra. Corregit.

### q22 — els catets no fan "la meitat del costat del quadrat"

R és **un quart** del costat del quadrat; la meitat del costat és 2R, que és la
distància entre dos centres veïns. La frase deia una cosa i la figura n'exigia
una altra. Reescrita.

### q14 — "el rectangle més petit que envolta el triangle"

La caixa és el rectangle de la mateixa base i la mateixa alçada. Coincideix amb
el rectangle mínim que envolta el triangle **només** mentre el vèrtex cau
damunt de la base — que és exactament la frontera que q15 travessa. Afegida la
precisió, perquè la definició fluixa aquí és el que fa que el forat de q15
sembli un tecnicisme quan no ho és.

### q21 — √6 i el fet que 6 no és primer

*"contradicció pel mateix argument, aplicat ara a 6"*. El pas 3|p²⟹3|p
descansa en què 3 és primer. Per a 6 cal la passa extra: 2|p i 3|p per separat,
d'on 6|p. Afegida, amb l'observació de per què importa (l'argument no
funcionaria per a √4).

---

## 3. Menor

- **q25 · peu de figura**: *"la diagonal de la base i la diagonal de la cara
  lateral (…) junts formen el rectangle amagat"* — dues diagonals no formen cap
  rectangle. Reescrit.
- **`&lt;` sense escapar a l'HTML**: `q17.html` tenia `(a<4b)`. En HTML5 el
  navegador ho renderitza com a text (perquè el segueix un dígit), o sigui que
  no és un bug visible, però no valida i qualsevol pas per un parser XML ho
  trencaria. Resolt de retruc en reescriure la frase. **En queden tres més fora
  d'aquest tram**, que corregiré quan hi arribi: `q37.html` (`√3<9/4`),
  `q55.html` (`s√2<2s`, dos cops) i `q74.html` (`5<6`, `3<10`).

---

## 4. Verificat i correcte, sense canvis

- **q15** — l'auditoria de la demostració de q14 i el pas a la resta. Comprovat
  numèricament el cas de fora (base 8, punta a 14: 14×5/2 − 6×5/2 = 35−15 = 20).
- **q18a** — inclosa la nota final sobre costats fraccionaris (3/2×2×2 amb
  cubets d'aresta ½: 48 cubets, 48/8 = 6 ✓) i el pas als irracionals.
- **q18b** — (k·s)³ = k³s³; cub de costat 2 escalat per 3 dona 216 = 27×8 ✓.
- **q19** — 5×3: els quatre trossos fan 8, 4, 2 i 1 ✓.
- **q20** — 6×4: 6 blocs de 4 ✓.
- **q22 i q23**, la matemàtica de fons: r = R(√2−1) en tots dos casos ✓, i he
  obert les dues imatges per confirmar que les configuracions descrites són les
  dibuixades (a q23, els tres puzles són els que la solució diu).
- **q25** — 3×4×12 → 5 i 13 ✓; cub unitat → √3 ✓.

---

## 5. Per decidir

1. **q21 no té fitxer de solució** (com q18a, q18b, q19, q20, q24 en aquest
   tram). Si el vols, la guia ja té l'argument sencer i correcte després
   d'aquesta ronda.
2. **q17 · abast**. La guia és honesta dient que no demostra Bolyai–Gerwien.
   La solució, en canvi, insinua el pas general ("triangulant-lo primer i
   convertint cada triangle en un rectangle") sense fer-lo. Funciona com a
   esbós; digue'm si el vols desenvolupat o retallat.
