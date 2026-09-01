# Tram 11 (q79–q83) — revisió de correcció matemàtica

Data: 2026-08-26. Abast: q79, q80, q81, q82, q83.

`js/data/guies-dades.js` regenerat amb `parse_guies.py`: 130 guies, 0
problemes. `verifica_projecte.py`: 53 comprovacions, 0 errors.

| Fitxer | Qüestions |
|---|---|
| `docs/guies/GUIES-LOT-4.md` | q80 |
| `docs/guies/GUIES-LOT-8.md` | q79, q81, q82, q83 |
| `js/data/guies-dades.js` | regenerat |
| `solucions/` | q79, q81, q82 |
| `docs/CONEIXEMENT-PREVI-CANDIDATS-GLOSSARI.md` | ampliat (v. §4) |
| `verifica_projecte.py` | afinat el parser (v. §3) |

**q80 i q83 no tenen fitxer de solució.**

Tram curt però dens: **tres errors**, i dos d'ells són del tipus que fa que
l'alumne obtingui el resultat contrari.

---

## 1. Errors

### q83 — el 60° no és on la pista diu que és

La Pista 3 deia:

> *"L'angle de 60° és el que queda al vèrtex original —quin catet hi és
> oposat, quin hi és contigu?"*

Fals. Es parteix un equilàter de costat 2 des d'un vèrtex fins al punt mitjà
del costat oposat; **al vèrtex des d'on s'ha partit hi queden 30°**, no 60°,
perquè el tall li ha partit l'angle per la meitat. El de 60° és el de l'altre
extrem, un vèrtex de la base, que el tall no toca.

Això no és un matís: si l'alumne se situa al vèrtex que la pista li assenyala,
troba oposat=1 i hipotenusa=2, i conclou **sin 60° = 1/2, cos 60° = √3/2** —
exactament intercanviats. És l'error clàssic que aquesta pregunta existeix per
prevenir, i la pista hi condueix.

La comprovació de la mateixa guia (sin60°=√3/2) contradiu la pista. Reescrita,
i hi he afegit l'avís explícit: si et surt sin 60°=1/2, has trobat el sinus de
30° sense voler.

### q82 — el cub sí que omple l'espai tot sol

L'«i després» deia:

> *"A diferència del mosaic pla (q03), on un sol tipus de polígon regular (…) ja
> pot folrar tot sol, aquí calen DOS sòlids diferents junts."*

El contrast és fals: **el cub folra l'espai tot sol**, amb quatre al voltant de
cada aresta (4×90° = 360°). I l'enunciat demanava expressament *«Can you find
any other ways to tile three-dimensional space?»* — la segona meitat de la
pregunta quedava sense resposta, tenint-la a un pas.

He passat els cinc angles diedres de q81 pel mateix filtre, que és el gest
natural i tanca la pregunta:

| | angle diedre | 360/θ |
|---|---:|---:|
| tetraedre | 70,53° | 5,10 |
| **cub** | **90°** | **4** ✓ |
| octàedre | 109,47° | 3,29 |
| dodecàedre | 116,57° | 3,09 |
| icosàedre | 138,19° | 2,60 |

Només el cub dona un enter — i això explica de passada *per què* el tetraedre
necessita company. La comparació justa amb el pla, doncs, no és «tres contra
cap», és **tres contra un**.

### q81 — la recepta només val per a cares triangulars

La Pista 1 diu que, a cada cara, es tracï el segment del punt mitjà de l'aresta
al vèrtex oposat, i la Pista 0 afirma que *«el mateix mètode val per als altres
tres»* poliedres.

**No hi val.** Aquest segment és perpendicular a l'aresta només si la cara és
un triangle equilàter. En una cara quadrada, el segment del punt mitjà d'un
costat al vèrtex oposat va de biaix, i l'angle que en surt no és el diedre; el
que hi val és anar al punt mitjà del costat oposat. La *idea* (dos segments,
un a cada cara, tots dos perpendiculars a l'aresta) sí que és general; la
recepta, no.

A més, l'enunciat pregunta pels cinc poliedres i només se'n contestaven dos.
Afegits: cub 90° (immediat, i bona comprovació del mètode), dodecàedre
arccos(−1/√5) ≈ 116,57°, icosàedre arccos(−√5/3) ≈ 138,19°.

---

## 2. Rigor

### q81 — «el triangle format pels dos peus i el centre»

No hi ha dos peus ni cap centre. El triangle és **el punt mitjà de l'aresta
compartida i els dos vèrtexs oposats**, un de cada cara. I el detall que
realment decideix el resultat no s'esmentava enlloc: el tercer costat d'aquest
triangle **no és el mateix als dos sòlids** —al tetraedre els dos vèrtexs
oposats són veïns i el segment val 1 (una aresta); a l'octàedre són
diametralment oposats i val √2. D'aquí surt tota la diferència entre 1/3 i
−1/3. Comprovat:

- tetraedre: 1 = ¾+¾−2(¾)cos θ → cos θ = 1/3 ✓
- octàedre: 2 = ¾+¾−2(¾)cos θ → cos θ = −1/3 ✓

### q79 — el cas C=90° és una frontera de la figura

L'«i després» diu, correctament, que amb C=90° la fórmula es converteix en
Pitàgores. Hi he afegit el matís que hi faltava: en aquell cas **el dibuix es
degenera** (el tros extra val b·cos90°=0 i el triangle petit desapareix), de
manera que qui cobreix la frontera és la fórmula, no la construcció.

---

## 3. Dependències cap a preguntes amagades

q79 i q80 remetien totes dues a **q87** per a la definició del sinus d'un angle
obtús —i q87 és a `EXERCICIS_AMAGATS`, o sigui que l'alumne no la pot obrir. Era
una de les sis que va detectar el guarda nou. Les dues guies ho reprodueixen
ara pel seu compte; la capçalera de q79 conserva la menció a q87 com a incís
editorial, dient per què no s'hi remet.

Això m'ha obligat a **afinar el parser del verificador**: capturava tota la
línia del `DEPÈN de` fins al salt de paràgraf, i per tant llegia com a
dependència una pregunta citada dins d'un incís `*( … )*` que explicava
justament que NO ho és. Ara talla abans de l'incís. De sis dependències cap a
preguntes amagades, **en queden cinc** (q50→q18a, q68→q67, q69→q67, q85→q88,
q90→q84), que segueixen sortint com a avís.

---

## 4. Coneixement previ (fitxer actualitzat)

`docs/CONEIXEMENT-PREVI-CANDIDATS-GLOSSARI.md` cobreix ara **q01–q83**. Aquest
tram n'ha aportat set entrades noves, dues a la secció A i sis a la B:

- **A6** `poliedre`/`tetraedre` no esmenten l'**angle diedre**, que és el tema
  sencer de q81 i la palanca de q82. Comprovat: «diedre» no surt ni un cop al
  glossari.
- **A7** `teorema-de-pitagores` no diu que tingui generalització.
- **B18 llei del cosinus** (q79, q81), **B19 angle diedre** (q81, q82),
  **B20 identitat sin²+cos²=1** (q79), **B22 valors exactes de 30°/45°/60°**
  (q83), **B23 folrat de l'espai** (q82).
- I una que val la pena mirar-se: **B21, sinus i cosinus d'un angle obtús**.
  q79 i q80 el necessiten, i la pregunta que el treballa —q87— és amagada. Ara
  mateix aquesta definició **no és accessible enlloc** per a l'alumne, ni per
  pregunta ni per glossari.

---

## 5. Verificat i correcte, sense canvis

- **q79** — c² = a²+b²+2ab·cos C' ✓, que és la llei del cosinus escrita amb el
  suplementari (cos C' = −cos C). La derivació per l'altura externa és
  correcta i tanca bé. Comprovat: a=5, b=4, C=120° dona c²=61 tant per aquesta
  fórmula com per la llei del cosinus directa.
- **q80** — Àrea = ½ab·sin C ✓; a=6, b=7, C=30° dona 10,5 ✓. El tractament del
  cas obtús (per què h = b·sin C continua valent) és correcte i ben explicat.
- **q81**, els dos valors que sí que hi eren: arccos(1/3) ≈ 70,53° i
  arccos(−1/3) ≈ 109,47°, suma 180° ✓ (per arccos(−x) = 180°−arccos(x)).
- **q82** — 2×70,53° + 2×109,47° = 360° exactes ✓, i la configuració 2+2 al
  voltant de cada aresta és la correcta del niu tetraedre-octàedre.
- **q83** — sin 60° = √3/2, cos 60° = 1/2 ✓; Pitàgores 1²+(√3)² = 4 = 2² ✓. La
  remissió a q01 per justificar la perpendicularitat és encertada i és el tipus
  de rigor que voldria veure més sovint.
