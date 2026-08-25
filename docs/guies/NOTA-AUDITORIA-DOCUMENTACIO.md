# Nota — auditoria de documentació i comentaris (ago. 2026)

Revisió de tots els `.md` i de tots els comentaris de codi contra el que el
repositori fa de veritat. **Cap canvi de comportament**: només documentació,
comentaris, i cinc comprovacions noves a `verifica_projecte.py`.

Punt de partida: `python3 verifica_projecte.py` deia «50 comprovacions
passades, tot correcte» — i tot i així hi havia una desena de coses falses
escrites. Les comprovacions miraven **dades**, no **prosa**. Aquest lliurament
en corregeix el contingut i afegeix les tres comprovacions que haurien atrapat
les tres classes d'error que van aparèixer.

## 1. El README es contradeia ell mateix sobre el glossari

Deia tres coses diferents en quatre llocs:

| On | Què deia | Cert? |
|---|---|---|
| §Què hi ha | «53 termes (**26** amb figura pròpia)» | no |
| Taula «no hi ha» | «Figures per a **27** dels 53 — pendents» | no |
| §Estructura | «assets/img/glossari/ — **26** figures» | no (n'hi ha 32) |
| §Estat | «**53 de 53** tenen figura (completat)» | **sí** |

Els 53 termes tenen `figura` amb valor; cap té `null`. Els 32 fitxers no són un
error: termes emparentats en comparteixen un (altura, mediana i bisectriu
comparteixen `gloss-cevianes.png`), tal com documenta `NOTA-GLOSSARI-27-FIGURES.md`.
Corregides les tres afirmacions falses; la fila de la taula «no hi ha»,
eliminada.

`HANDOFF-COLD-START.md` deia el mateix a la taula d'estat i, pitjor, tenia
«27 of 53 glossary terms still have no figure» com a **punt 1 de la feina
pendent**. Substituït.

## 2. Figures de Pista 2: 31 → 32

Ho deien malament el README (dos cops) i el HANDOFF. Comptat sobre
`js/data/guies-dades.js`, el repartiment real de les 162 figures de guia és:

| On viu | Quantes |
|---|---|
| Pista 3 (nivell 2) | 129 |
| Pista 2 (nivell 1) | 32 |
| Pista 4 (nivell 3) | 1 — `q15`, l'única guia sense figura a nivell 2 |

El README deia «162 (131 originals + 31 de Pista 2)»: la suma quadrava però el
desglossament no. Ara hi ha la taula, i s'esmenta que la xifra va ser 31 durant
`NOTA-PART2-PISTA2.md`.

## 3. La columna `nivell` de `manifest-figures.tsv` va desfasada

Contrastades les 162 files contra `guies-dades.js`:

- `id`, `moviment` i `lot`: **coincideixen al 100 %**. Són les que fan servir
  les notes i les que `AUDITORIA-RIGOR-GUIES.md` diu que alimenten el camp
  `moviment`. El manifest és fiable per a això.
- `nivell`: **69 de 162 files no coincideixen** (43 %). `fig-014` (q13) hi diu
  nivell 1 i la figura viu al 2; `fig-024` (q44) hi diu 3 i viu al 2.

No s'ha tocat el fitxer: renumerar-lo era arriscat per un guany petit i no és
la font de veritat de res. S'ha documentat al README (§Regenerar) i afegit com
a pendent conegut al README i al HANDOFF, amb la regla clara: **per saber a
quina pista surt una figura, mira `guies-dades.js`**.

## 4. `COORDINACIO-AGENTS-SOLUCIONS.md` era fals i s'autocontradeia

Deia «All 15 [hidden] are `dimensio: "2D"`» i «none of the 15 hidden questions
are 3D, so Agent-sol-3D's real scope is the full 37».

**Cinc de les 15 amagades són 3D**: `q18a`, `q18b`, `q67`, `q102`, `q106`. El
total de 3D del corpus és 42, no 37; els 37 surten precisament de restar-hi
aquestes cinc. I el document es contradeia ell mateix: si totes 15 fossin 2D,
l'abast de l'Agent-sol-2D seria 88−15 = 73, no els 78 que ell mateix escrivia.

La llista de 37 ids que dona sí que és exacta (comprovada un per un). L'error
era el raonament. Corregit, i afegit que **tots dos** agents han de comprovar la
llista, no només el de 2D.

De passada: les 115 solucions quadren perfectament amb les 115 preguntes
visibles. Cap falta, cap sobra, cap correspon a una pregunta amagada.

## 5. La secció de `sol.html` descrivia un flux abandonat

Deia que cada agent hi afegeix un `<li>` per solució i manté el compte «(N
preguntes en total)» actualitzat. La realitat: **13 entrades escrites a mà
contra 115 fitxers al disc**, i els comptes dels encapçalaments són l'abast
total de cada agent, no un progrés.

El que funciona és la secció de descoberta en viu, que sonda quins
`solucions/<id>.html` existeixen. Reescrita la secció per descriure les dues
llistes i dir clarament que **un agent que afegeix una solució no ha de tocar
`sol.html`**.

Amb una advertència que abans no hi era enlloc: aquella descoberta fa servir
`fetch()`, que sota `file://` està bloquejat — la restricció fundacional del
projecte sencer. Obert per doble clic, el professorat només veu les 13 entrades
escrites a mà. Anotat com a limitació coneguda al README, al HANDOFF i al mateix
document de coordinació; no s'ha tocat el codi.

## 6. Funcionalitats senceres sense documentar

Zero mencions al README, al `PROJECTES-TECHNICAL-REFERENCE.md` i al HANDOFF:

- **Els sis itineraris temàtics** (`js/data/itineraris-tematics-dades.js`,
  `js/nucli/itineraris-tematics.js`, `js/ui/itineraris.js`). Els fitxers tenen
  capçaleres internes excel·lents; el que faltava era que existissin des de
  fora. Secció nova al README, que a més els distingeix explícitament de
  l'itinerari **reactiu** de `js/nucli/itinerari.js`, amb el qual es confonen
  pel nom.
- **La prova escrita** (`analitzador-geom.html` i companyia). Secció nova.
- **`sol.html` i `solucions/`**, que només sortien de passada al paràgraf
  d'obertura.
- **`verifica_projecte.py`, `next_figure_number.py`, `docs/publish_figures*.py`,
  `docs/hand-draw.js`, `docs/comu.js`**, absents del bloc «Estructura».

El bloc «Estructura» del README s'ha reescrit sencer, amb una secció separada
per a les superfícies del professorat i una altra per a les eines.

## 7. Set referències a documents que no existeixen

`docs/DOCUMENTS-DE-DISSENY.md` és una peça molt bona i `verifica_projecte.py`
la fa complir — però la comprovació **es saltava `./docs` expressament**, que és
on viuen gairebé totes les notes. Cobria la part del repositori on menys
probable era trobar-hi una referència morta.

Sense declarar hi havia: `ANALISI-GRAFICS-NOUS.md`, `FIGURES.md`,
`IMPROVE-INSTRUCTIONS.md`, `NOTA-LLIURAMENT.md`, `itineraris-detall.md`,
`publish_lot10.py`, i (al HANDOFF) **`NOTA-FIX-PART2-7FIGURES`, que no ha
existit mai**.

Afegida una segona taula a `DOCUMENTS-DE-DISSENY.md` amb els set, un per un,
dient què eren i on ha anat a parar el seu contingut. Eliminada la referència
al document que no ha existit mai.

També faltaven a la llista cronològica del HANDOFF `NOTA-COLLISIONS-FIGURES.md`
i `NOTA-GLOSSARI-27-FIGURES.md` — precisament la que tanca el forat del punt 1.

## 8. Comentaris de codi desfasats

- `js/ui/llista.js:13` deia «main.js (pas 5, **pendent**)». main.js existeix i
  funciona. A més, la capçalera descrivia el fitxer com si només pintés la
  llista: avui també és l'amo del toggle 2D/3D, del filtre de categories,
  d'`EXERCICIS_AMAGATS` i del bloc «Copia el meu codi». Capçalera reescrita.
- `js/nucli/router.js:7` — «js/ui/main.js (§5, **encara no construït**)».
- `js/nucli/progres.js:43` — «ui/detall.js, **encara no construït**».
- `js/data/glossari-dades.js` — l'esquema deia «figura … **o null**. Un terme
  sense figura no en necessita». Cap en té, i els 53 comparteixen 32 fitxers.
- `build_analitzador_geom.py` citava `analitzador-plantilla.html` i
  `analitzador-repas.html` sense dir que són del projecte germà `repas` i no
  d'aquest repositori.
- `LLEGEIX-ME.md` sencer era la nota d'instal·lació d'un ZIP ja aplicat
  («3 fitxers nous, 4 modificats»). Reescrit per descriure la funcionalitat.

## 9. Comprovacions noves a `verifica_projecte.py`

Tres classes d'error van aparèixer en aquesta auditoria, i cada una en té ara
una que la detecta:

1. **Xifres que fan drift.** Es comprova que cap document digui que falten
   figures del glossari quan no en falten, i que la xifra de figures a Pista 2
   sigui la real. Provades injectant les dues regressions: totes dues salten.
2. **Mòduls sense documentar.** Tot fitxer `js/**.js` que `index.html`
   carregui ha d'aparèixer al README. Això és exactament com van entrar els
   itineraris temàtics: tres fitxers, zero mencions.
3. **Referències mortes a `docs/`.** La comprovació §10 ja no salta `./docs` i
   ara escaneja també `.md` i `.py`, no només `.js`/`.css`/`.html`.

Notes de la implementació: `glossari-dades.js` té les claus **sense cometes**
(és un literal JS, no JSON — v. HANDOFF §4), així que `llegeix_global()` no el
pot parsejar i el recompte es fa amb regex. `solucions/` se salta a la §10: són
115 fitxers de contingut que no citen documents de disseny.

Comprovacions: **48 → 51**.

## 10. El que estava bé, i val la pena dir-ho

Perquè aquesta nota no doni una impressió falsa del repositori:

- **Cap imatge òrfena.** 122 d'enunciat, 162 de pista, 32 de glossari, 15 de
  demo, 5 d'icones: totes referenciades.
- **Cap classe CSS morta.** L'única aparent, `.site-header__lang`, està
  documentada com a eliminada al mateix CSS.
- **Cap funció citada en comentaris que no existeixi.**
- **`solucions/` quadrat** amb les preguntes visibles.
- Les notes de lliurament de `docs/guies/` estan **ben mantingudes**:
  `NOTA-GLOSSARI-MILLORES.md` fins i tot porta una «Actualització posterior»
  que apunta a la nota que la va superar. El que s'havia quedat enrere eren els
  documents de dalt de tot — els que ningú torna a llegir un cop escrits.

## Fitxers tocats

```
README.md                                 xifres, dues seccions noves, Estructura sencera
HANDOFF-COLD-START.md                     taula d'estat, llista de notes, pendents, arquitectura
COORDINACIO-AGENTS-SOLUCIONS.md           l'error de les 15 amagades, secció sol.html
LLEGEIX-ME.md                             reescrit: funcionalitat, no lliurament
docs/DOCUMENTS-DE-DISSENY.md              segona taula (7 documents morts) + abast del check
docs/guies/NOTA-AUDITORIA-DOCUMENTACIO.md aquest fitxer
verifica_projecte.py                      §10 ampliada, §14 nova (48 → 51 comprovacions)
js/ui/llista.js                           capçalera
js/nucli/router.js                        un comentari
js/nucli/progres.js                       un comentari
js/data/glossari-dades.js                 esquema del camp `figura`
build_analitzador_geom.py                 un comentari
```

Cap fitxer de `js/data/*-dades.js` ha canviat de dades; cap `.png`; cap
comportament.
