# Nota — Glossari i itinerari

Implementació de les dues millores demanades, a partir de
`GLOSSARY-DESIGN-NOTES.md` i `ITINERARY-DESIGN-NOTES.md` (rebuts com a
documents de disseny, "res implementat encara"). Aquesta nota complementa
`PROJECTES-TECHNICAL-REFERENCE.md` §9 (raonament tècnic detallat, bugs
trobats) amb un resum orientat a què s'ha lliurat i què queda pendent.

## 1. Glossari

- `js/data/glossari-dades.js` — 18 termes (tots els que el document de
  disseny esmenta explícitament: classificacions de triangle per costat i
  per angle, altura/mediana/bisectriu, les tres parelles d'angles,
  triangles semblants, cercle inscrit/circumscrit, arc capaç/angle
  inscrit/quadrilàter cíclic). **No és la llista completa que l'owner
  tenia** (aquest document només en cita exemples, no la transcriu
  sencera) — és tot el que hi ha explícitament sobre la taula ara mateix.
- `js/nucli/glossari.js` — accés pur + detecció de termes dins de text pla
  (longest-match-first, vores de paraula, sense anotar el contingut font).
- `js/ui/glossari.js` — panell sempre disponible (cerca + navegació per
  categoria) i el renderitzador d'un sol terme, compartit amb els
  popovers inline.
- Connectat a `detall.js` (termes detectats dins l'enunciat, cada un
  com un botó que obre un popover en el lloc) i a `main.js` (botó a la
  capçalera).
- 6 figures noves (`assets/img/glossari/`), **tinta sola, sense
  sanguina** — decisió explícita del document: aquí no hi ha "figura del
  llibre" vs "afegit de l'alumne", només un diagrama. Un accent (`--pencil`,
  ja usat per la UI, mai el vermell-terrós de les guies) per als noms de
  terme.
- **Decisió de l'owner, no resolta en silenci**: "mitjana"/"mediana" — una
  sola entrada (lapsus confirmat).
- **Direcció del fallback bilingüe**: català canònic (com les guies, no
  com les preguntes) — decisió explícita, documentada a la capçalera de
  `glossari-dades.js` perquè el propi document de disseny es contradeia
  en aquest punt (v. referència tècnica §9).

## 2. Itinerari

- `js/nucli/itinerari.js` — estat persistit (`schemaVersion`, `questions`,
  `path`) + motor de recomanació amb 4 regles (continua / rampa de
  dificultat / repàs pel mateix moviment / fallback posicional), cadascuna
  amb una raó explícita, mai una puntuació opaca.
- Connectat a `detall.js`: es marca "vista" i es registra al log de camí
  en cada visita; control de valoració (molt/normal/poc) independent del
  checkbox "explorat"; bloc "suggerit per a tu" amb fins a 3 opcions
  ranquejades, AL COSTAT de (no en lloc de) la navegació anterior/següent
  de sempre.
- Connectat a `llista.js`: banner "continua on ho vas deixar", només quan
  hi ha estat real (mai per a un alumne nou).
- **Deliberadament fora d'abast** (seguint l'ordre de treball que el propi
  document suggereix a §11): el camp `hintLevelsOpened` (tensió real amb
  el disseny existent de `detall.js`, que no en necessitava cap de les 4
  regles implementades — no calia decidir-ho ara), la regla 4 (petició
  explícita de repàs), i tot el bloc §10 ("extres socràtics"). Cap
  d'aquestes exclusions tanca la porta a afegir-les després — per això hi
  ha `schemaVersion` des del primer dia.

## 3. Bugs reals trobats en provar-ho (no a ull — amb Playwright)

1. `[hidden]` no amagava realment l'overlay del glossari (empat
   d'especificitat CSS amb la meva pròpia regla `display:flex`) —
   interceptava clics a tota la pàgina tot i ser "invisible".
2. Marca d'angle recte al vèrtex equivocat en una figura del glossari
   (verificat després amb producte escalar en Python).
3. El bloc "suggerit" no es refrescava en valorar una pregunta dins la
   mateixa visita — la dada canviava, la UI mostrada no.

Els tres, corregits i reverificats. Detall complet a
`PROJECTES-TECHNICAL-REFERENCE.md` §9.

## 4. Verificació

- `python3 verifica_projecte.py` → Tot correcte, abans i després.
- `node --check` sobre els 7 fitxers JS nous/tocats → cap error de sintaxi.
- Playwright sobre les 68 preguntes amb guia: 4 passos, peu visible,
  control de valoració present, cap imatge trencada (un fals positiu
  puntual per timing, descartat verificant-ho a part), 0 errors JS.
- Playwright funcional específic: detecció de termes dins d'un enunciat
  real, obertura de popover, cerca al panell, navegació per relacionats,
  Escape tanca l'overlay, marcatge de visita/valoració/log de camí,
  refresc en viu del bloc de suggeriments, banner de continuació.
- Captures de pantalla dels dos renderitzadors del glossari (popover
  inline i panell overlay).

## 5. No fet en aquesta passada

- La resta de termes de la llista original de l'owner (només en tinc els
  citats explícitament al document).
- Regla 4 de l'itinerari i tot el bloc §10.
- `hintLevelsOpened` (pendent de decisió explícita de l'owner si mai cal).
