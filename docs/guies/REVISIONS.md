# Revisions — registre acumulatiu

Fitxer append-only (v. HANDOFF-COMPLETAR-GUIES.md §6.4). Cada entrada és un
comentari de revisió humana, la causa que hi vaig trobar, i on s'ha aplicat
el fix. Quan un comentari revela una REGLA i no un lliscament puntual,
s'amplia també `docs/HAND_DRAWN_GEOMETRY_TECHNIQUE.md`.

Aquest fitxer no existia als paquets rebuts pels lots 2–4 (v. `NOTA-LOT-4.md`
§1). Es crea ara, al lliurament 5, i es retroactiva amb l'única revisió
humana documentada fins ara: el rebuig de 5 figures del lot 4, tal com el
recull `HANDOFF-COMPLETAR-GUIES.md` §4 (no en tinc la data exacta de la
revisió original — és anterior a l'handoff que vaig rebre; la data de sota
és quan s'aplica el fix, no quan es va fer la revisió).

---

## Revisió humana del lot 4 (data original no registrada — documentada a
## HANDOFF §4) — aplicada al lot 5, 2026-08-12

- **fig-045** (q89, Steiner–Lehmus): "es dibuixa **una** bisectriu d'angle;
  el teorema és sobre **dues** bisectrius iguals — amb una sola ni tan sols
  es pot escriure la hipòtesi."
  → causa: la figura original només construïa la bisectriu des de B; mai es
  va afegir la de C.
  → aplicat a fig-045 rev1: s'hi afegeix la bisectriu des de C, amb la seva
  pròpia parella d'arcs (classe diferent de la de B) i ratlleta a totes dues
  cevianes marcant la hipòtesi d'igualtat.

- **fig-050** (q60, Cavalieri con/semiesfera): "con dins la semiesfera sense
  cap pla de tall, que és tota la idea. Una 'R' flotant no etiqueta res."
  → causa: la figura mostrava l'objecte (con inscrit) però no l'eina amb
  què es demostra (el pla de tall a una alçada h qualsevol).
  → aplicat a fig-050 rev1: pla de tall horitzontal en sanguina, amb els
  dos punts de tall marcats i les etiquetes h/R ancorades a segments
  concrets en lloc de flotar sense referència.

- **fig-052** (q08b, cinc poliedres regulars): "es dibuixen **dos** sòlids,
  sense cap marca d'angle al vèrtex, malgrat que el manifest promet 'angle
  al vèrtex < 360°'."
  → causa: la figura mostrava tetraedre i octaedre correctament construïts
  però sense cap anotació del fet numèric que la Pista 3 explica en text.
  → aplicat a fig-052 rev1: arcs sanguina als vèrtexs de dalt (i, a
  l'octaedre, també a baix, per la limitació de projecció explicada a
  `NOTA-LOT-5.md` §3/§8) més la xifra 3×60°/4×60°.

- **fig-048** (q05, estrelles {5/2} i {8/3}): "dues estrelles en tinta amb
  un arc sanguina negligible; efectivament, cap capa d'anotació."
  → causa: només es marcava l'angle a la punta, sense mostrar la
  construcció (el triangle isòsceles) que la Pista 1 descriu en text.
  → aplicat a fig-048 rev1: corda base discontínua + ratlletes que tanquen
  el triangle isòsceles de cada punta.

- **fig-028** (q52, tall hexagonal del cub): "la matemàtica és correcta —
  els sis punts mitjans quadren— però la projecció aixafa l'hexàgon fins a
  aspecte 0,25, i una figura que només ha de dir 'això és un hexàgon' no en
  mostra cap."
  → causa real, més greu del que deia el comentari original: amb la
  projecció cavallera, l'ordre cíclic dels 6 punts mitjans deixa de ser
  l'ordre angular un cop projectat, i els segments es creuen entre si (no
  només s'aixafen).
  → aplicat a fig-028 rev1: reprojecció exactament al llarg de la diagonal
  principal del cub (vista isomètrica), l'única direcció des de la qual el
  pla de tall es veu en veritable magnitud. Efecte secundari: aquesta
  figura ja no comparteix projecció de pantalla amb fig-029/q56 — text de
  l'"i després" de q52 corregit en conseqüència (v. `GUIES-LOT-3.md`).

**Regla que se n'extreu i que ja estava escrita** (§4 del HANDOFF mateix, no
cal ampliar `HAND_DRAWN_GEOMETRY_TECHNIQUE.md`): *"cobreix la sanguina — si
la figura és igual d'informativa, no hi ha pista"* i *"en una figura de
l'espai, la direcció de mirada és part del contingut, no de l'estil"*. Les 5
figures d'aquest lot són el primer test real d'aquesta segona regla, i el
cas de fig-028 (on calia canviar la projecció sencera, no ajustar-ne els
paràmetres) n'és l'exemple més fort trobat fins ara — val la pena que quedi
citat aquí per si es decideix promoure'l a exemple explícit al document
tècnic en un futur lot.
