# Tram 7 (q58–q62) — revisió de correcció matemàtica

Data: 2026-08-25. Abast: q58, q59, q60, q61, q62.

`js/data/guies-dades.js` regenerat amb `parse_guies.py`: 130 guies, 0
problemes. `verifica_projecte.py` passa les 52 comprovacions.

| Fitxer | Qüestions |
|---|---|
| `docs/guies/GUIES-LOT-4.md` | q60 |
| `docs/guies/GUIES-LOT-7.md` | q58, q59, q61, q62 |
| `js/data/guies-dades.js` | regenerat |
| `solucions/` | q58, q59, q60, q61, q62 |

Tram dens: **cinc qüestions, quatre errors**. Els resultats finals són tots
correctes; el que falla és el camí que hi porta, i en tres casos el camí és
la pregunta.

---

## 1. q58 — el sòlid de comparació no pot ser un cilindre

La Pista 3 i la solució deien:

> *"Compara aquesta pila de quadrats amb la pila de cercles d'un sol cilindre
> (Cavalieri): l'àrea d'un quadrat de costat 2s és 4s², mentre que la d'un
> cercle de radi s és πs² —una raó constant de 4/π entre totes dues piles."*

**Un cilindre no té aquestes seccions.** Les seccions horitzontals d'un
cilindre vertical són cercles de radi **r constant**, mentre que els quadrats
tenen costat 2√(r²−y²), que s'encongeix amb l'alçada. Amb el cilindre la raó
seria 4(r²−y²)/(πr²), que depèn de y —i llavors Cavalieri no diu res, que és
precisament l'única cosa que fa funcionar l'argument.

El sòlid correcte és **l'esfera de radi r**, justament la que queda inscrita
dins de la intersecció i tangent als dos cilindres: la seva secció a l'alçada
y és un cercle de radi √(r²−y²), el mateix que marca el costat del quadrat.
Amb això la raó és 4/π a totes les alçades i el problema es tanca en una
línia:

> V = (4/π)·(4/3)πr³ = **(16/3)r³**

Nota afegida: ni la guia ni la solució **arribaven a derivar** el (16/3)r³ —
apareixia només a la comprovació, com a dada. Amb l'esfera com a partner surt
sol, i ara hi és.

## 2. q60 — «el con inscrit és la meitat del con invertit»

La Pista 3 i la solució deien que el con inscrit de l'enunciat *"és exactament
la meitat del con invertit (mateixa base, mateixa alçada, mateix vèrtex a un
extrem)"*.

Fals, i la mateixa frase es desmenteix: si tenen la mateixa base i la mateixa
alçada, tenen **el mateix volum**. Tots dos són cons de radi R i alçada R, o
sigui (1/3)πR³ els dos; l'un és l'altre girat de cap per avall.

La meitat que la pregunta demana no és entre els dos cons —és entre el con
inscrit i **l'hemisferi**: (1/3)πR³ contra (2/3)πR³. Tal com estava, el pas
final de la demostració comparava els dos objectes equivocats.

He aprofitat per fer explícit el càlcul que hi faltava: hemisferi = cilindre −
con invertit = πR³ − (1/3)πR³ = (2/3)πR³.

## 3. q59 i q61 — les dues fraccions no tenen res a veure

Dues afirmacions creuades, totes dues falses:

- **q59** («i després»): *"π/6 és exactament la mateixa fracció que apareix a
  q61"*. No ho és: q61 dona **2/3**. π/6 ≈ 0,524 i 2/3 ≈ 0,667.
- **q61** («i després»): *"aquest mateix 2/3 (…) és exactament el
  complementari de la fracció que vas trobar a q59 (π/6)"*. Tampoc:
  π/6 + 2/3 ≈ 1,19.

Són comparacions amb sòlids continents diferents (un cub a q59, un cilindre a
q61) i entre els dos números no hi ha cap relació aritmètica.

**El que sí que hi ha, i és molt millor**, és que l'esfera està en raó 2/3 amb
el seu cilindre circumscrit **tant en superfície com en volum**: superfícies
4πr² contra 6πr², volums (4/3)πr³ contra 2πr³. És el resultat que Arquimedes
va demanar que li gravessin a la tomba, i és exactament el «no és casualitat»
que aquestes dues guies buscaven i no havien trobat. L'he posat als dos llocs.

(La solució de q61 ja tenia la formulació prudent i correcta —«són dues
comparacions diferents»—; era la guia la que afirmava de més.)

---

## 4. Rigor

### q62 — l'àlgebra anunciada, i l'altra meitat de la pregunta

Dues coses.

**Primera**: la Pista 3 acaba amb *"Fes la resta i simplifica"* i la solució
amb *"un cilindre de radi R i alçada h, menys el tronc de con que hi queda a
dins"*, i la fórmula (πh²/3)(3R−h) apareix directament al resum. En una
qüestió de dificultat 3, l'àlgebra **és** el contingut. L'he feta:

> (πh/3)[(R−h)²+(R−h)R+R²] = (πh/3)(3R²−3Rh+h²)
> V = πR²h − (πh/3)(3R²−3Rh+h²) = πh²(R − h/3) = (πh²/3)(3R−h)

De passada: q48 dona el tronc de base **quadrada**; amb base circular la
fórmula té la mateixa forma amb un π al davant. Ara està dit. (I la referència
a q48 només funciona des del tram 5, quan hi vaig afegir la fórmula tancada
que allà faltava.)

**Segona, i més important**: l'enunciat demana **volum i superfície**, i tot
l'argument de Cavalieri dona només el volum. La fórmula 2πRh apareix a la
comprovació i al resum sense cap derivació ni cap avís —en una guia que, en
canvi, té un «avís d'honestedat» explícit sobre el pas al límit. Hi he afegit
un segon avís: 2πRh és un teorema d'Arquimedes (la projecció horitzontal sobre
el cilindre circumscrit conserva l'àrea, cosa gens evident), i aquí es dona,
no es demostra.

### q60 — referències creuades equivocades i cap enrere

La Pista 0 i l'«i després» remetien a *"q54 i q55 (…) per comparar volums"* i
a *"q54/q55 amb el con i la piràmide"*. q54 és Cavalieri per a **àrees planes**
i q55 és l'escala de la diagonal: cap de les dues tracta cons ni piràmides ni
volums. A més van **després** de q60 a l'ordre de presentació (q60 és la 85;
q54 i q55, la 102 i la 103). Reescrites: la Pista 0 anuncia q54 com a
enunciat posterior del mateix principi, i l'«i després» apunta a q62, que és
on el mateix tall reapareix a una alçada qualsevol.

### q59 — el càlcul, altre cop, anunciat i no fet

*"En simplificar la fracció esfera/cub, hi sobreviu π, i res més."* Fet:
(4/3)πr³ / 8r³ = π/6 ≈ 0,5236, i π/6 > 1/2 equival a π > 3.

---

## 5. Verificat i correcte, sense canvis de fons

- **q58** — secció quadrada de costat 2√(r²−y²) ✓; volum (16/3)r³ ✓
  (∫₋ᵣ^ᵣ4(r²−y²)dy = 16r³/3); menor que el cilindre 2π amb r=1 ✓.
- **q59** — π/6 ≈ 0,524 ✓, més de la meitat ✓.
- **q60** — hemisferi (2/3)πR³, con inscrit (1/3)πR³, raó 1/2 ✓; i l'argument
  de Cavalieri és correcte: a l'alçada h, cilindre−con dona π(R²−h²) i
  l'hemisferi també ✓.
- **q61** — 4πr² contra 6πr² = 2/3 ✓.
- **q62** — (πh²/3)(3R−h) ✓; amb R=2,h=1 dona 5π/3 ✓; amb h=R=2 recupera
  16π/3 = (2/3)πR³ ✓; amb h=2R dona (4/3)πR³ ✓. Superfície 2πRh ✓.

---

## 6. Per decidir

1. **q62 i la superfície.** He optat per marcar 2πRh com a resultat donat i no
   demostrat, en comptes de treure-la o de demostrar-la (la demostració
   d'Arquimedes es pot fer a aquest nivell amb un argument de bandes, però és
   llarga i canviaria l'abast de la guia). Si vols que la desenvolupi, digue-m'ho.
2. Segueix pendent el **q40 panell 1** (t = S/5), que espera decisió teva i que
   es redibuixi `fig-059`.
