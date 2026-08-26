# Tram 9 (q68–q73) — revisió de correcció matemàtica

Data: 2026-08-26. Abast: q68, q69, q70, q71, q72, q73.

`js/data/guies-dades.js` regenerat amb `parse_guies.py`: 130 guies, 0
problemes. `verifica_projecte.py` passa les 52 comprovacions.

| Fitxer | Qüestions |
|---|---|
| `docs/guies/GUIES-LOT-4.md` | q70, q71 |
| `docs/guies/GUIES-LOT-8.md` | q69 |
| `js/data/guies-dades.js` | regenerat |
| `solucions/` | q69, q70, q71, q73 |

Sense canvis: q68, q72. Verificades senceres i correctes.

**Cap resultat equivocat en aquest tram.** Els sis són correctes i les xifres
quadren totes. El que he corregit són tres passos que no s'aguanten com estan
escrits, i he aprofitat per fer precises dues coses que quedaven en un «no es
pot».

---

## 1. Passos que no s'aguanten

### q70 — el recompte de triangles es contradiu a si mateix

Deia (guia i solució):

> *"Des d'un vèrtex d'un polígon de n costats hi caben n−3 diagonals. Cada
> diagonal afegeix un triangle més **als dos** que ja formen els costats
> adjacents al vèrtex: en total, n−2 triangles."*

Si la base són dos i cada diagonal n'afegeix un, surten 2+(n−3) = **n−1**, no
n−2. El recompte correcte parteix d'**un**: sense cap diagonal hi ha una sola
peça, amb una n'hi ha 2, amb dues 3 — i amb n−3 diagonals, n−2. Reescrit als
dos llocs.

És una llàstima que passés precisament aquí, perquè la resta de q70 (el
límit de l'argument per a polígons no convexos, i el «que un argument no
arribi a tot arreu no el fa dolent») és de les millors coses del quadern.

### q71 — la diagonal no deixa dos angles rectes per triangle, en deixa un

La Pista 1 i la solució deien que, en traçar una diagonal, es poden fer servir
*"els angles rectes donats als dos vèrtexs originals de cada triangle"*.

La diagonal **parteix per la meitat dos dels quatre angles rectes**; els altres
dos queden sencers, un a cada triangle. Cada triangle hereta, doncs, **un sol**
angle conegut, i amb un de sol la suma de 180° no tanca res.

A més, aquesta pista envia l'alumne per un camí que la pròpia solució abandona:
la demostració (Pista 3) no fa servir cap diagonal, sinó l'argument de
direccions («dues rectes perpendiculars a una tercera són paral·leles»). He
reorientat la Pista 1 cap a aquest camí, dient explícitament per què el de la
diagonal es queda curt.

### q71 — el que demostrava q11

*"…un cop hi ha paral·lelisme, la igualtat de costats oposats ve directament de
la Qüestió 11."* q11 demostra que els **angles** oposats d'un paral·lelogram
són iguals, no els costats. El fet dels costats surt de la **mateixa
congruència** que q11 construeix (diagonal + angles alterns + costat comú), però
no és el seu enunciat. Precisat, en una línia, en comptes de citar-lo com si ja
hi fos.

*(De passada: «Els angles rectes **force** el paral·lelisme» → forcen.)*

---

## 2. Dos «no es pot» convertits en resultats

### q73 — quants quadrilàters comparteixen els mateixos punts mitjans

La solució deia: *"múltiples quadrilàters diferents, de formes ben diferents
entre si, poden compartir exactament els mateixos quatre punts mitjans"*. És
cert, però es pot dir **quants**, i és millor:

Donats P, Q, R, S en ordre, es tria el primer vèrtex **A on es vulgui**, a
qualsevol punt del pla; els altres tres queden forçats reflectint
successivament (B = simètric d'A per P, C = simètric de B per Q, D = simètric
de C per R). I el punt mitjà de DA cau **automàticament** a S, sense haver-ho
d'imposar, exactament quan PQRS és un paral·lelogram.

O sigui: no és que n'hi hagi «uns quants», és una **família de dos
paràmetres** —un quadrilàter per cada punt del pla. I la condició de
paral·lelogram no en tria cap; l'únic que fa és garantir que la construcció es
tanqui. Comprovat numèricament amb A a l'atzar.

### q69 — què compta com a «perímetre» d'un semicercle

La guia pren «el perímetre» com **l'arc sol, sense el diàmetre**, i ho diu.
Però el perímetre d'una regió semicircular normalment **sí que inclou el
diàmetre**, i un alumne que ho llegeixi així obtindrà un altre número i creurà
que s'ha equivocat.

He afegit les dues lectures, perquè totes dues són correctes i el contrast és
instructiu: amb l'arc sol, 2r/π ≈ 0,637r; amb el diàmetre inclòs, la longitud
és πr+2r i surt **2r/(π+2) ≈ 0,389r**. I Pappus funciona igual en tots dos
casos, perquè el diàmetre és sobre l'eix i en girar no escombra res.
(Comprovat: el càlcul directe del centroide combinat dona el mateix.)

---

## 3. Ordre de presentació

Dues més de les 15 parelles del tram anterior, aquesta vegada resoltes al text:
**q69 (posició 56) remetia a q67 (87) i q65 (124) en passat** —«exactament el
que q67 ja avisava», «per què calia la doble definició de q65 i q67»— quan cap
de les dues no s'ha vist encara. Reformulat perquè q69 expliqui pel seu compte
per què hi ha dos centroides i deixi q65/q67 com a desenvolupament posterior.

Queden 9 parelles per revisar als seus trams.

---

## 4. Verificat i correcte, sense canvis

- **q68** — con de radi r i alçada h; (1/2)rh·2π·d = (1/3)πr²h dona **d = r/3**
  ✓, independent de h. Contrastat amb la definició de centroide com a mitjana
  dels vèrtexs: (0, r, 0)/3 = r/3 ✓. Amb r=3, h=4: 12π = 6·2π·1 ✓.
- **q69**, els dos valors: regió (4/3)πr³ = (πr²/2)·2π·d → **d = 4r/(3π)** ✓;
  arc 4πr² = (πr)·2π·d → **d = 2r/π** ✓. Amb r=3, 1,27 i 1,91 ✓.
- **q70** — hexàgon 720°, decàgon 1440°, (n−2)×180° ✓. L'avís sobre polígons
  amb entrants és correcte i ben col·locat.
- **q71** — l'argument de fons (quatre angles rectes → costats oposats
  perpendiculars al mateix costat → paral·lels → paral·lelogram → costats
  oposats iguals) és correcte ✓, i la comprovació 5-8-5-9 també ✓.
- **q72** — el polígon es tanca si i només si Σ Lᵢcos θᵢ = 0 **i**
  Σ Lᵢsin θᵢ = 0 ✓. He verificat l'exemple: 3 a 0°, 4 a 90°, 5 a 233,13° dona
  3−3 = 0 i 4−4 = 0 ✓ (i el 233° de la solució és exacte: 180°+arctan(4/3)).
- **q73**, el triangle: he comprovat amb coordenades que cada vèrtex de
  l'original és el simètric d'un vèrtex del medial respecte del punt mitjà del
  costat oposat ✓ (amb A=(0,0), B=(4,0), C=(0,6): el simètric de (2,3) per
  (1; 1,5) és (0,0) = A). Medial 3-4-5 → original 6-8-10 ✓.

---

## 5. Per decidir

1. **q69 i el diàmetre**: he deixat com a principal la lectura de l'arc sol
   (que és la que fa lluir el truc de Pappus) i l'altra com a nota. Si el
   llibre és explícit en un sentit o l'altre, ho ajusto.
2. Segueixen pendents: el **q40 panell 1** (t = S/5, amb `fig-059` a
   redibuixar), el desenvolupament de **2πRh** a q62 si el vols, i la decisió
   sobre l'**ordre de presentació**.
