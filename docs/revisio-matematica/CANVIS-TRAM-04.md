# Tram 4 (q39–q51) — revisió de correcció matemàtica

Data: 2026-08-25. Abast d'aquest lliurament: **q39–q45**. He aturat el tram
aquí perquè q40 ha resultat molt més llarg del previst (v. §1) i preferia
donar-t'ho revisat que arribar a q51 de pressa. **q46–q51 van al tram 5.**

`js/data/guies-dades.js` regenerat amb `parse_guies.py`: 130 guies, 0
problemes. `verifica_projecte.py` passa les 52 comprovacions.

| Fitxer | Qüestions |
|---|---|
| `docs/guies/GUIES-LOT-3.md` | q44 |
| `docs/guies/GUIES-LOT-4.md` | q39 |
| `docs/guies/GUIES-LOT-6.md` | q40_implicit |
| `docs/guies/GUIES-LOT-7.md` | q43 |
| `docs/guies/NOTA-LOT-6.md` | addenda §9 (v. §1) |
| `js/data/guies-dades.js` | regenerat |
| `solucions/` | q40_implicit, q42, q43, q44 |

Sense canvis: q41, q45. Verificats sencers i correctes.

---

## 1. q40 — el cas gros del tram

### 1.1. Panell 2: el model era geomètricament impossible

La guia deia: *"si el quadrat té costat 2r (igual que el diàmetre comú dels
cercles), i tot plegat travessa el diàmetre del cercle gran…"*, i la solució en
treia:

> *"un radi r de marge (del cercle petit de l'esquerra), el costat del quadrat
> 2r, i un altre radi r de marge (del cercle petit de la dreta) —en total
> r + 2r + r = 4r— ha de fer exactament 2R (…) La relació queda 2R = 4r, és a
> dir, R = 2r."*

Dos errors superposats.

**L'aritmètic**: cada cercle aporta el seu **diàmetre** 2r al llarg de la fila,
no un radi. Amb el model tal com estava enunciat, la suma és 6r, no 4r.

**El de model**: 6r = 2R vol dir R = 3r, i llavors les cantonades del quadrat
cauen a √((3r)²+r²) = r√10 ≈ 3,16r del centre, **més que el radi 3r**: sortirien
fora del cercle. La fila sencera no pot travessar el diàmetre.

La lectura que sí que quadra amb l'escaneig: el cercle esquerre és tangent per
dins a l'extrem esquerre, i el quadrat toca la circumferència **per les dues
cantonades de la dreta**, no pel mig del costat. Amb el centre a l'origen, la
cantonada (−R+6r, r) sobre la circumferència dona

> (6r − R)² + r² = R² → 37r² = 12rR → **37r = 12R**, és a dir R ≈ 3,083·r.

Contrastat amb els píxels de l'escaneig (R≈655): predit r≈212 i vora dreta del
quadrat a x≈1289; mesurat r≈220 i x≈1280. Cantonada superior dreta predita
(1289, 456), mesurada (1280, 459).

I hi ha un motiu perquè tanqui amb números exactes: hi ha amagat el triple
pitagòric **(12, 35, 37)** —amb R=37 i r=12 el quadrat arriba a x=35, i
12²+35² = 1369 = 37². Ho he posat a la pista i a la solució perquè és
exactament el tipus de cosa que fa que la pregunta valgui la pena, i enllaça
amb q24.

### 1.2. Panell 1: he resolt el detall que el projecte donava per no resoluble

`NOTA-LOT-6.md` §3 deixava obert un detall del panell 1 («una mena de pestanya
estreta entre el costat superior i l'arc») i el va dibuixar com el quadrat
inscrit estàndard, girat 45°. He mesurat l'escaneig a nivell de píxel i la
pestanya és interpretable:

- El quadrat gran **no** està girat 45°: està dret, amb els costats a x≈209 i
  x≈1134 i les vores a y≈225 i y≈1124. Costat ≈918, semidiagonal ≈649, contra
  R=660 → inscrit, però amb els vèrtexs a les cantonades.
- La pestanya és un **segon quadrat, petit, dret sobre el costat superior del
  gran i centrat**, amb les dues cantonades de dalt sobre l'arc.

Amb aquesta lectura la pregunta té resposta exacta: si S és el costat del
quadrat gran i t el del petit,

> (t/2)² + (S/2 + t)² = R², amb S = R√2 → 5t² + 4√2·R·t − 2R² = 0 → **t = S/5**

El quadrat petit fa **exactament un cinquè del costat del gran**, i per tant
**1/25 de la seva àrea**. Això sí que és «una de les meves preferides»; la
lectura actual (R = s√2/2) la deixa en un Pitàgores d'una línia.

**No he tocat el text del panell 1.** Canviar-lo desincronitzaria la guia i la
solució amb `fig-059`, que s'hauria de tornar a dibuixar (quadrat dret + quadrat
petit al damunt), i redibuixar figures surt de l'abast d'una revisió de text.
Ho he documentat sencer, amb els números fets, a `NOTA-LOT-6.md` §9. **És la
decisió principal que et deixo d'aquest tram.**

---

## 2. Altres errors corregits

### q42 — signe canviat amb números concrets a la mà

La solució deia: *"ara el cas correcte és la resta (α=15°, β=85°, α−β=70°)"*.
15 − 85 = −70. És **β−α**. Amb el cas genèric («α+β o bé α−β») es podia
defensar perquè les lletres no estan assignades; amb els valors posats, no.
Corregit als dos llocs, dient que és sempre el gran menys el petit.

---

## 3. Rigor

### q43 — el triangle que es resta del sector no és l'equilàter

La guia i la solució diuen: *"cadascun [segment] és un sector de 120° menys el
triangle equilàter que ja hi has trobat"*. Són **dos triangles diferents**:

- L'equilàter té per vèrtexs els **dos centres i un punt de tall** (costats r,
  r, r).
- El que es resta del sector té per vèrtexs **un centre i els dos punts de
  tall** (costats r, r, r√3). No és equilàter, i es veu de seguida si es
  dibuixa.

Les **àrees** coincideixen —(1/2)r²·sin120° = (√3/4)r²— i per això el resultat
final és correcte. Però tal com estava, un alumne que dibuixi el que li diuen
que resti veurà que no és equilàter i es quedarà encallat. Afegida la
distinció, amb el motiu pel qual les àrees surten iguals.

### q44 — es cita a q23 un resultat que q23 no conté

La guia i la solució diuen que la distància entre els peus de dos cercles
tangents a la mateixa recta, 2√(ab), *"ja se sap directament de q23"*. q23 no
la demostra enlloc: la seva solució resol el primer puzle (r√2 = R−r) i
remet els altres dos a «la mateixa palanca».

Com que la derivació és de dues línies —els centres són a altura a i b, la
distància entre centres és (a+b), i Pitàgores dona
√((a+b)²−(a−b)²) = √(4ab) = 2√(ab)—, l'he escrita al lloc on fa falta en
comptes de citar-la. La resta de q44 era correcta:
1/√r = 1/√R₁ + 1/√R₂ i r = R₁R₂/(√R₁+√R₂)², amb R₁=R₂=1 → r=1/4 ✓.

### q39 — referència endavant en passat

La Pista 0 deia *"A q76 **vas** partir un triangle en tres triangles des del
seu incentre"*, però a l'ordre de presentació q76 és a la posició 60 i q39 a la
48: encara no s'ha vist. Reescrita per ancorar-la a q30 (posició 44, ja feta) i
deixar q76 com a anticipació.

---

## 4. Verificat i correcte, sense canvis

- **q39** — a = s/(2·tan36°) ≈ 6,88 amb s=10; àrea = (5/2)·s·a = 172,05, i
  (5/4)s²/tan36° dona el mateix ✓. La distinció radi/apotema, ben explicada.
- **q41** — α+(α+β)+β = 180 → α+β = 90 ✓. La comprovació amb el punt gairebé
  enganxat a un extrem és bona: prova que l'argument no fa servir la posició.
- **q42**, la matemàtica de fons: amb R=10, A a 200°, B a 340°, P a 80° i Q a
  140°, he calculat els dos angles inscrits amb coordenades i tots dos surten
  **70,0°** = 140°/2 ✓. Els dos casos (α=30/β=40 amb suma; α=15/β=85 amb
  diferència) també quadren ✓.
- **q43** — àrea = r²(4π−3√3)/6 ≈ 1,228r² i perímetre = 4πr/3 ≈ 4,189r ✓.
- **q45** — 2πrh amb r=3, h=10 → 60π ≈ 188,5; amb tapes, 78π ≈ 245,0 ✓. La
  nota sobre el cilindre «generalitzat» (àrea lateral = P·h) és correcta.

---

## 5. Per decidir

1. **q40 panell 1** (§1.2). Si acceptes la lectura del quadrat petit, cal:
   (a) reescriure la Pista 3 i el pas corresponent de la solució amb t = S/5;
   (b) redibuixar `fig-059` panell 1 amb el quadrat dret i el petit al damunt.
   Digue'm i et deixo el text a punt; la figura l'has de fer tu o el pipeline
   de `figures-06.html`.
2. **q40 panell 2**: la meva reconstrucció encaixa amb l'escaneig dins d'un 4%,
   però ve d'un dibuix a mà. Si tens el llibre, val la pena confirmar que el
   quadrat hi toca per les cantonades i que el seu costat és el diàmetre dels
   cercles.
3. **q45 · Pista 0** avisa que «les circumferències de dalt i de baix no semblen
   cercles», però la pregunta és sobre un cilindre *generalitzat*, on la base
   no ha de ser un cercle (i la figura de l'enunciat, segons la solució, en
   mostra una d'irregular). Petita tensió; no l'he tocada perquè depèn de quina
   figura es vegi.
