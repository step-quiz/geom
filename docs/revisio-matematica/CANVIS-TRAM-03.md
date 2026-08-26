# Tram 3 (q26–q38) — revisió de correcció matemàtica

Data: 2026-08-25. Abast: q26, q27_implicit, q28, q29, q30, q31, q32, q33, q34,
q35, q36, q37, q38 (13 entrades).

**Aquest ZIP conté només els fitxers tocats al tram 3.** Cal aplicar-lo damunt
de l'estat resultant dels trams 1 i 2. `js/data/guies-dades.js` és acumulatiu i
s'ha **regenerat** amb `parse_guies.py`: 130 guies, 0 problemes.
`verifica_projecte.py` passa les 52 comprovacions.

| Fitxer | Qüestions |
|---|---|
| `docs/guies/GUIES-LOT-3.md` | q26 |
| `docs/guies/GUIES-LOT-4.md` | q29, q37, q38 |
| `docs/guies/GUIES-LOT-6.md` | q27_implicit, q30, q33 |
| `js/data/guies-dades.js` | regenerat |
| `solucions/` | q26, q27_implicit, q28, q30, q31, q32, q33, q37 |

Sense canvis: q34, q35, q36. Verificats sencers i correctes.

Guies tocades acumulades: q01, q02, q03, q08a, q08c, q10, q13, q17, q21, q23,
q24, q26, q27_implicit, q29, q30, q33, q37, q38.

---

## 1. Errors matemàtics corregits

### q33 — els angles del triangle són 72°-72°-36°, no 36°-36°-108°

La Pista 3 deia: *"Aquest triangle és semblant al triangle «A» que ja vas marcar
a q31 (els mateixos angles 36°-36°-108°)."*

Fals, i es veu sense calcular res: el triangle té base 1 i costats d, i com que
d>1 l'angle petit ha de ser el de dalt, no el de baix. Si fos 36°-36°-108°, el
costat oposat als 108° —la base— seria el més llarg, i val 1. Els angles reals
són **72°-72°-36°**, i el triangle que li correspon a q31 no és A sinó els
**dos triangles laterals grans sense etiqueta**. (Comprovat numèricament amb
coordenades del pentàgon regular.) La solució de q33 ja ho tenia bé: guia i
solució es contradeien.

### q30 — el recompte de diagonals del dodecàgon

Deia (guia i solució): *"n'hi ha cinc de llargades diferents, segons quants
vèrtexs salten (1, 2, 3, 4 o 5); la que en saltaria 6 és el diàmetre"*, i
llistava sis valors `2R·sin(k×15°)` amb `k=1..6`: 0,518 / 1 / 1,414 / 1,732 /
1,932 / 2.

Dos problemes barrejats. Primer, el **0,518 no és cap diagonal**: `k=1` uneix
dos vèrtexs veïns, o sigui que és el **costat**. Segon, la llista fa entendre
que hi ha sis llargades de diagonal quan n'hi ha **cinc**, i el diàmetre és la
cinquena, no una de més. La font de l'embolic és barrejar "vèrtexs saltats" amb
"passos entre vèrtexs" dins de la mateixa frase. Reescrit comptant sempre per
passos: diagonals de k=2 a k=6, el diàmetre és k=6, i k=1 queda com a control
de que la fórmula funciona.

### q30 — q39 dona cinc triangles, no deu

*"A diferència de q39 (pentàgon, triangulat des del centre, deu triangles
idèntics)"*. Un pentàgon triangulat des del centre dona **cinc** triangles, i
és el que diuen la guia i la solució de q39.

### q37 — no hi ha "una altra parella no trivial"

L'"i després" deia: *"en general té dues solucions diferents per a (x, y) (…) i
a més n'hi pot haver una altra parella no trivial: «mateixa àrea i mateix
perímetre» no determina un únic rectangle."*

Fals. L'equació de segon grau té dues arrels i **les dues arrels són x i y**:
els dos costats del mateix rectangle. Per a rectangles, àrea i perímetre sí que
determinen la figura, perquè la suma i el producte de dos números en fixen la
parella. La solució ja ho deia correctament; la guia la contradeia. Reescrit a
totes dues bandes, conservant l'observació que **fora** dels rectangles sí que
hi ha figures diferents amb la mateixa àrea i el mateix perímetre.

---

## 2. Rigor

### q26 — l'argument SSS anava en la direcció impossible

Deia: *"els dos trossos que crea l'altura són triangles congruents pels tres
costats (els dos costats iguals del triangle equilàter, més l'altura
compartida)"*. Això anomena **dos** parells de costats, no tres. El tercer
parell —les dues meitats de la base— és justament el que es vol demostrar: com
està escrit, l'argument és circular.

La direcció que funciona és la de q01: partir de la **mediana** (i llavors les
dues meitats són iguals per definició de punt mitjà), obtenir SSS, i d'allà
deduir els 90°. Reescrit a la guia i a la solució, dient explícitament per què
girar-lo el trenca — és un error que els alumnes cometen sols.

### q27 — faltava el pas que sosté tot el càlcul

Tant la guia com la solució donaven per bo que la distància del vèrtex al centre
d'un dels cercles val 2r, sense dir d'on surt. És l'única peça no òbvia del
problema. Afegida: el centre és sobre la bisectriu, que parteix els 60° en dos
de 30°; al triangle rectangle vèrtex–centre–punt de tangència, r és el catet
oposat als 30°, o sigui que la hipotenusa fa 2r. (La resta del càlcul era
correcte: r = L(√3−1)/4, comprovat numèricament.)

### q32 — "la raó s'aplica dues vegades" era una afirmació, no un argument

El resultat (costat petit = 1/φ² del gran ≈ 0,382) és correcte —comprovat amb
coordenades— però la solució el justificava dient que "cal entrar cap a cada
punta, la qual cosa aplica la mateixa raó dues vegades seguides". Per a una
pregunta de dificultat 3, i en el fitxer del professorat, això és prim.

Escrit l'argument sencer, que és curt: la diagonal (φ) queda partida en tres
trossos; un punt de creuament amb els dos vèrtexs que té més a prop forma un
triangle 36°-36°-108° de base un costat sencer del pentàgon, i en aquest
triangle la base és φ vegades la cama, de manera que cada tros exterior val
1/φ. El tros central és φ − 2/φ = (φ−1)/φ = 1/φ².

### q31 — el "criteri" per marcar angles era fals

Deia: *"108° on hi ha un angle interior del pentàgon o un angle format per dues
diagonals que es creuen, 36° a la resta"*. On es creuen dues diagonals els
quatre angles són **108°, 72°, 108° i 72°**, com sempre que dues rectes es
tallen. La regla, aplicada literalment, dona 108° als quatre i 36° als angles
dels triangles laterals, que en fan 72°. Casualment dona el resultat correcte
per a A, B i C, que és el que la pregunta demanava, i per això no s'havia vist.
Reescrit, i afegit al resum que els dos triangles grans fan 72°-72°-36° —cosa
que a més enllaça amb q33.

### q29 — la fórmula n−2 necessita convexitat

*"la fórmula que fas servir no la necessita [la regularitat] per res"*. Cert per
a la regularitat, però el ventall de diagonals des d'un vèrtex **sí que
necessita que el polígon sigui convex**: amb entrants, una diagonal pot sortir
de la figura. Afegit, i afegit també que per a la segona meitat de la pregunta
—mesurar les diagonals— la regularitat sí que fa falta.

### q33 — sobre què s'ha demostrat abans

Deia: *"Ja saps (o pots saber, per q31/q32) que d/s=φ compleix φ²=φ+1 per
trigonometria"*, i l'"i després" comptava **tres** demostracions independents
de la identitat, una de les quals seria "q31/q32". Ni q31 ni q32 la demostren:
q32 la fa servir citant-la. Les demostracions independents són dues (q38 amb el
rectangle i aquesta amb dos pentàgons). Corregit.

### q38 — la relació amb el pentàgon no és un "retrobaràs"

L'"i després" deia *"el retrobaràs si mai treballes amb pentàgons regulars"*,
però a l'ordre de presentació q31 (45) i q33 (46) van **abans** de q38 (47), i
la solució de q38 ja diu correctament "ja va aparèixer a la Qüestió 33".
Reescrit perquè funcioni en els dos sentits.

### q30 — sin 15° no surt del mètode de q26

*"substituint R en funció de s amb el mateix mètode de la Qüestió 26"*. El
mètode de q26 (partir un isòsceles amb l'altura + Pitàgores) dona 30°, 45° i
60°, no 15°: per a s = 2R·sin15° cal la fórmula de l'angle meitat. Precisat.

---

## 3. Menor

- **q28** — *"la primera vegada del llibre que reutilitzes un resultat teu
  propi"*: no ho és (q04 ja fa servir q70, i q09 construeix Pitàgores).
  Reformulat sense el superlatiu.
- **q37.html** — `√3<9/4` sense escapar → `&lt;`. Un dels quatre que vaig
  anotar al tram 2. **En queden dos**: `q55.html` i `q74.html`.

---

## 4. Verificat i correcte, sense canvis

- **q34** — (x+y)² amb x=5, y=3: 25+15+15+9 = 64 ✓.
- **q35** — x=(x+y)/2+(x−y)/2; amb suma 10 i diferència 4 dona 7 i 3, i amb
  suma 10 i producte 21 la quadràtica els recupera ✓.
- **q36** — x(s−x) = s²/4 − (x−s/2)² ✓; P=24 dona 11/27/35/36 ✓; i la part
  girada per la desigualtat de mitjanes ✓.
- **q26 i q28**, la matemàtica: h = s√3/2 i àrea = (√3/4)s² ✓.
- **q29** — hexàgon 3 diagonals / 4 triangles / 720°; octàgon 5 / 6 / 1080°;
  diagonal curta s√3, llarga 2s; àrea (3√3/2)s² ✓. Tres llargades de diagonal a
  l'octàgon ✓ (⌊n/2⌋−1).
- **q30**, l'àrea: 12 triangles de (1/4)R² → 3R², i 3(2+√3)s² ≈ 11,196 ✓.
- **q31** — A, B i C fan tots tres 36°-36°-108°; els laterals, 72°-72°-36°
  (comprovat amb coordenades) ✓. L'argument de simetria de mirall ✓.
- **q37** — x = s(3±√(9−4√3))/4; amb s=4 dona 1,561 i 4,439, producte 6,93 i
  perímetre 12 ✓. Discriminant s²(9/4−√3) > 0 sempre ✓.
- **q38** — x²=x+1, x=(1+√5)/2 ✓.
- He obert les imatges de q27 i q31 per confirmar que les configuracions
  descrites són les dibuixades.

---

## 5. Per decidir

1. **q27 · el tercer panell** (quatre cercles dins d'un cercle gran) queda sense
   resoldre tant a la guia com a la solució, dit explícitament. Al dibuix, a
   més, els quatre cercles **no** semblen tots iguals (dos de grans i dos de
   petits). Si el vols resolt, primer caldria fixar quina és la configuració.
2. **q27 · referència endavant**: la solució justifica el panell del quadrat
   dient "és el mateix argument del primer panell de la Qüestió 40", que és la
   pregunta següent. No és cap error, però és una referència que va al revés.
