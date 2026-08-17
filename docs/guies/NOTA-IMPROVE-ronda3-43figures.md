# Nota — integració de 7 sessions IMPROVE en paral·lel (43 figures)

Tercera ronda de fusió, i de bon tros la més gran: 7 agents, sense
contacte entre ells, 55 lliuraments de figura en total (comptant
subentregues), que es redueixen a 43 canvis reals un cop descartades les
repeticions exactes de rondes anteriors. Aquesta nota documenta el procés
de fusió sencer, inclosos quatre problemes reals que vaig trobar i
corregir abans de confiar en cap resultat — dos al meu propi mètode, dos
preexistents al projecte.

## 1. Inventari inicial: de 7 ZIPs a 43 canvis reals

Cada agent va lliurar-me diverses subentregues (entre 1 i 7 per agent),
55 figures en total comptant-les totes. Abans de tocar res:

- **12 de les 13 que coincidien amb feina ja integrada a rondes
  anteriors eren idèntiques byte a byte** — descartades sense fer-hi res.
- **fig-050 sí portava un refinament real** de l'agent 2, més enllà del
  que ja tenia (exactament el que descrivies a la pàgina 50: con i
  semicercle que no encaixaven, meitat oculta absent).
- Resultat: **43 figures a fusionar**, cap col·lisió entre agents
  diferents (cada figura la treballa un sol agent).

## 2. Quatre problemes reals trobats abans de confiar en cap resultat

### 2.1 — Bug preexistent al projecte: `stampNum` desencaixat al lot 10

En construir el mapa figura→canvas (creuant cada `stampNum(ctx,H,'NNN')`
intern amb el número real), vaig trobar que les 16 figures del lot 10
tenien aquesta crida desencaixada 17 unitats (deia `'099'` on hauria de
dir `'116'`, etc.) — un rastre d'una renumeració que vaig fer fa moltes
tandes (la fusió dels lots 9/10), on el meu regex d'aleshores només
buscava el patró `fig-NNN` als comentaris i mai les crides `stampNum`
soles. Cosmètic (la publicació real funciona per diferència de píxels,
no llegint aquest número) però confonia qualsevol anàlisi automàtica
futura. **Corregit** a `figures-10.html` i `figures-10-clean.html` abans
de continuar; verificat que el fitxer segueix renderitzant net.

### 2.2 — Bug metodològic meu, ronda 1 d'aquesta integració: mapa contaminat

El primer intent de mapejar "quin canvas fa quina figura" cercava dins
de TOT el directori de cada agent, sense escopar-ho a la subentrega
concreta — trobava canvas d'altres figures que casualment convivien al
mateix fitxer. Corregit ancorant cada cerca a la subentrega exacta que
publica el PNG.

### 2.3 — Bug metodològic meu, ronda 2: versió NO definitiva del codi font

Un cop corregit 2.2, la comparació píxel a píxel encara va detectar 3
diferències reals (fig-061, fig-098, fig-113). Investigant fig-061 vaig
trobar la causa: com que les sessions d'un mateix agent són seqüencials
i acumulatives (cada `figures-06.html` nou porta a sobre tots els canvis
aprovats de les figures anteriors d'aquell mateix agent), el meu mètode
de cerca trobava el canvas correcte però a vegades en una subentrega
ANTERIOR a la definitiva —una còpia certa però no la darrera— perquè no
distingia "conté aquest canvas" de "conté la VERSIÓ FINAL d'aquest
canvas". **Corregit re-derivant, per a totes 43 figures, el codi font
sempre des del mateix directori exacte que el PNG canònic ja
identificat** —mai d'una cerca més àmplia— eliminant l'ambigüitat
d'arrel, no figura per figura.

### 2.4 — Una funció compartida calia actualitzar-la a la versió més nova

Després de 2.3, encara faltava un ajustament: `figures-06.html` necessita
una funció auxiliar `polylineIntersect` (creada per l'agent 6 a la seva
sessió de fig-060) que l'agent 6 mateix **va ampliar** a la seva sessió
següent (fig-061), afegint-hi un camp `t1` al resultat que fig-061
necessita. La versió que vaig fusionar primer (de fig-060) no el tenia
—error real, detectat perquè vaig renderitzar i vaig veure l'excepció
`Cannot read properties of undefined (reading 'x')`, no perquè ho hagués
previst. Substituïda per la versió ampliada (compatible cap enrere: el
camp nou no trenca res de qui no el fa servir). Una segona funció
compartida, `dotGridTight` (de l'agent 4, sessió fig-065), no tenia
aquest problema —comprovat explícitament que cap altra sessió del mateix
agent la tornava a tocar.

## 3. Verificació final

- Les 43 figures publicades des del repositori fusionat són **idèntiques
  píxel a píxel**, les 43, a les que vas aprovar — comprovat contra el
  PNG canònic de cada subentrega concreta, no contra els fitxers
  intermedis de treball (`pgNN-vN-fig-NNN.png`) que alguns agents també
  incloïen com a rastre del procés d'iteració.
- Els 6 fitxers font (`05`,`06`,`07`,`08`,`09`,`10`) renderitzen sense
  error JS, amb els comptadors de canvas intactes (5/16/14/15/17/16).
- `docs/manifest-figures.tsv`: `rev` de les 43 files afectades, 0→1 (o
  1→2 per a fig-050, que ja n'havia tingut una de prèvia). Cap número
  nou, cap fila nova.
- `python3 verifica_projecte.py` → `Tot correcte.`
- Playwright sobre les **130 guies senceres**: 4 passos, peu visible, cap
  imatge trencada. 0 fallades, 0 errors JS.

## 4. Acumulat de totes les rondes IMPROVE fins ara

**55 figures revisades en total**: les 12 de les dues primeres rondes
(014, 015, 016, 020, 024, 025, 039, 040, 042, 044, 046, 055) més les 43
d'aquesta. `docs/hand-draw.js` porta un sol pedaç acumulat des de la
primera ronda (`pointAtAngle` a `handEllipse`); `figures-06.html` ara
porta, a més, dues funcions auxiliars pròpies (`polylineIntersect`,
`dotGridTight`) que no existien en cap altra ronda.

## 5. Un patró a tenir en compte per a properes rondes

Els dos problemes 2.3 i 2.4 comparteixen arrel: quan diverses figures
d'un mateix fitxer les treballa el MATEIX agent en sessions
seqüencials, cada sessió nova pot portar, a sobre dels seus propis
canvis, versions ampliades de funcions auxiliars compartides que
sessions anteriors d'aquell agent ja havien creat. La lliçó operativa:
**la font de veritat per a la fusió és sempre "quina és la còpia MÉS
NOVA seqüencialment", mai "quina còpia ja he trobat primer"** — un
criteri que val la pena aplicar-lo per defecte des del principi la
propera vegada, no descobrir-lo a mig procés com aquí.
