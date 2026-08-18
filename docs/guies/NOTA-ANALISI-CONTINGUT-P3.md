# Nota — anàlisi de contingut i dues correccions (Pista 3 muda + q82)

Aquesta nota documenta la primera peça de l'anàlisi de contingut que
l'owner va demanar ("quines de les 130 preguntes necessiten més o
millors ajudes per a un alumne de 15 anys real"), i les dues correccions
concretes que se'n van derivar.

## 1. El senyal analitzat

De les 32 preguntes de dificultat 3 (les més exigents del llibre), **16
arriben a la construcció clau de Pista 3 amb una imatge sense cap text
que orienti** — ni a la pròpia imatge ni al camp de text estructurat de
la pista. Comprovat contra les dades reals de `guies-dades.js`, no
estimat.

**En revisar les 16 imatges una per una** (no confiant en el senyal
automàtic sol):

- **4 ja portaven text incrustat a la pròpia imatge** (q101, q106, q109,
  q99, totes del lot 9) — fórmules i frases ja escrites al dibuix. Cap
  acció necessària; el senyal automàtic no ho detectava perquè només
  mirava el camp de text estructurat, no el contingut visual real.
- **1 (q82, fig-097) portava incrustada la resposta gairebé sencera**:
  la igualtat `2×70,53° + 2×109,47° = 360°`, exactament el que Pista 4
  havia de revelar. Aquest no era un problema de "falta orientació" sinó
  un espòiler real — v. secció 2.
- **11 eren el cas real**: etiquetes soles (lletres, valors numèrics),
  cap frase que digués cap on mirar o per què.

## 2. Correcció — q82 (fig-097), l'espòiler

`docs/guies/figures-08.html` i `figures-08-clean.html`, canvas `i14`:
substituïda la línia `lblC(ctx,'2×70,53° + 2×109,47° = 360°',...)` per
`lblC(ctx,'aresta compartida',...)` — assenyala què està destacat en
sanguina (l'aresta que comparteixen el tetràedre i l'octàedre) sense cap
número ni la suma que és la resposta. Publicat de nou amb el pipeline
real; **verificat que les altres 14 figures del mateix fitxer no han
canviat** (comparació píxel a píxel contra les ja publicades).

## 3. Correcció — 11 frases noves a Pista 3

Per a q44, q53, q54, q55, q58, q65, q79, q81, q85, q90 (i inicialment
q99, descartada perquè ja tenia text incrustat), una frase curta afegida
immediatament després de la línia `**Pista 2 — la construcció.** →
\`fig-NNN.png\`` de cada `GUIES-LOT-N.md`.

**Criteri seguit, el mateix llistó que ja regeix Pista 4**: assenyalar
cap on mirar de la imatge, o quina pregunta fer-se davant seu — mai dir
la conclusió. Cada frase es va escriure després de mirar la imatge real
(no de memòria) i contrastar-la amb el text de Pista 2 i Pista 4, per
evitar tant repetir el que ja s'havia dit com avançar el que encara no
tocava dir.

**Un error propi, trobat abans de deixar-lo passar**: el primer intent
per a q85 deia "L'angle marcat (18°) és la meitat de 18°" — una frase
sense sentit (18° no és la meitat de si mateix). Detectat en repassar-ho
abans de continuar, corregit a "L'alçada discontínua parteix l'angle de
dalt (36°) exactament per la meitat — per això l'angle marcat val 18°."

## 4. Verificació

- **q82**: figura republicada, comparació píxel a píxel confirma que les
  altres 14 figures del mateix fitxer font no han canviat.
- **Les 10 frases**: `guies-dades.js` regenerat, **comparat guia per
  guia contra la versió anterior** — confirmat que només el text de
  Pista 3 (nivell 2) ha canviat a les 10 preguntes exactes, cap figura
  tocada, cap altra pista ni cap altra guia afectada.
- `python3 verifica_projecte.py` → `Tot correcte.`
- Playwright sobre les **130 guies senceres**: 4 passos, peu visible,
  cap imatge trencada, 0 errors JS.

## 5. El que queda per fer, no inclòs en aquest lliurament

Aquesta nota cobreix només el primer senyal de risc identificat
(dificultat 3 + Pista 3 muda). L'anàlisi de contingut sencera —altres
senyals possibles, com preguntes on el moviment mateix costa
d'entendre, o on el salt real entre Pista 1 i Pista 2 és massa gran— no
s'ha fet encara; aquesta nota en documenta només la primera peça
acordada amb l'owner.

## 6. Fitxers d'aquest lliurament

```
docs/guies/figures-08.html / -clean.html   q82 (fig-097): espoiler substituit
assets/img/pistes/fig-097.png              republicat
docs/guies/GUIES-LOT-3.md                  q44, q53, q54, q55: frase nova a Pista 3
docs/guies/GUIES-LOT-7.md                  q58, q65: frase nova a Pista 3
docs/guies/GUIES-LOT-8.md                  q79, q81, q85, q90: frase nova a Pista 3
docs/guies/NOTA-ANALISI-CONTINGUT-P3.md    aquest fitxer
js/data/guies-dades.js                     regenerat sencer (130 guies)
```
