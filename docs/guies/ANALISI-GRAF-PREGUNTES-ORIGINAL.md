> **Arxivat sense editar (ago. 2026).** Document original de la proposta d'itineraris temàtics. La implementació real i les decisions preses (bessones assenyalades, q36/q80, etc.) són a `docs/ITINERARIS-TEMATICS-DESIGN-NOTES.md`, no aquí.

---

# El graf de dependències de les 130 preguntes

## Mètode

He obert `js/data/guies-dades.js` (les 130 guies de demostració) i `js/data/preguntes-dades.js` (les 130 preguntes), els he parsejat com a dades estructurades (no com a text lliure), i he recorregut **només els camps de prosa dirigida al lector**:

- `pistes[].titol`, `pistes[].text`
- `comprovacio`
- `iDespres`
- `movimentTitol`

Explícitament **no** he mirat `_notaExtraccio` ni `_notaClassificacio` (metadades internes de l'editor, no contingut de la guia) ni el camp `figura` (que conté noms de fitxer com `q01_page10_...png`, que fan trampes a qualsevol cerca ingènua de `q\d+`).

A cada string he cercat el patró `q\d{1,3}(?:_implicit)?[a-c]?` i n'he validat cada coincidència contra la llista real dels 130 `id` del dataset (descartant qualsevol cosa que no sigui un id vàlid, i descartant l'autoreferència d'una pregunta citant-se a si mateixa). El teu exemple de la q56 és exactament el cas de prova que ho confirma:

```
q56.pistes[nivell=0].text conté:
  "... (no la diagonal principal de q47/q52) ..."
→ arestes: q56 -> q47, q56 -> q52
```

i, per cert, també és cert el revers: q47 i q52 citen q56 a la seva pròpia `iDespres`, de manera que les tres formen un cicle de citació mútua (ho explico més avall).

**Cap referència creuada apareix mai a `enunciat`, `pista` o `notaEditorial` de `preguntes-dades.js`** — les connexions viuen totes dins de les guies, no dins dels enunciats originals del llibre. Té sentit: l'enunciat és fidel al text font; és la guia (contingut nou, escrit per lots pel projecte) qui teixeix la xarxa.

## La resposta curta

**Sí, és exactament un graf dirigit**, amb aquestes xifres sobre el total de 130 preguntes:

| | |
|---|---|
| Nodes (preguntes) | **130** |
| Arestes dirigides úniques | **185** |
| Preguntes amb almenys una connexió (entrant o sortint) | **117** |
| Preguntes completament aïllades (autocontingudes) | **13** |
| Components connexos (illes temàtiques, ignorant direcció) | **20** (7 amb >1 node + 13 nodes solts) |
| Cicles de citació mútua (SCC de mida >1) | **25**, la majoria parelles o trios |

No és ni un arbre ni un ordre estrictament lineal: **té cicles**. q47↔q52↔q56 se citen entre elles totes tres; el mateix passa amb q11↔q12↔q71, q31↔q32↔q33, q96↔q97↔q98, etc. Això vol dir que "depèn de" aquí no és una relació de prerequisit estricte tipus currículum (A abans de B, sense excepcions), sinó més aviat **"aquestes preguntes s'il·luminen mútuament"** — el mateix moviment o resultat es reutilitza en totes dues direccions.

## Estructura: 7 illes + 13 solitàries

Si ignores la direcció de les fletxes per un moment i mires només "qui està connectat amb qui", el graf es trenca en **20 trossos independents** — cap aresta salta d'un tros a un altre:

### La illa gran — 83 preguntes
q01–q98 i q112–q127 (amb forats), amb un **nucli molt cohesionat de 51 preguntes** connectat per **25 punts de tall** (nodes que, si els traguessis, partirien la illa en trossos separats — el terme tècnic és *articulation point*). Vist així no és un bloc homogeni sinó un **nucli** amb una vintena de "penjolls" petits (parelles o trios) enganxats per un sol pont cadascun: p. ex. q120–q121 només es connecta a la resta a través de q120, o q59↔q61 forma la seva pròpia parella dins un altre component.

Per contingut, aquesta illa cobreix polígons regulars, simetria, poliedres i el cub-tetràedre de la teva captura (q47, q52, q56), passant per volums (q65–q69, que és de fet un component a part) i tessel·lacions.

### Sis illes petites
- **q91–q109** (16 preguntes): un segon bloc dens, separat del primer — sembla la zona de geometria esfèrica/projectiva cap al final del llibre.
- **q22, q23, q27_implicit, q34, q40_implicit, q44** (6): inclou les dues preguntes "implícites" (la imatge és la pregunta, no hi ha text — v. capçalera de `preguntes-dades.js`).
- **q63, q65–q69** (6): el clúster de volums/Pappus.
- **q05, q07** (2), **q35, q36** (2), **q59, q61** (2): parelles soltes.

### 13 nodes completament aïllats
q09, q10, q13, q16, q17, q37, q49, q72, q75, q84, q110, q116, q126.

Cap d'aquestes 13 és citada per ningú ni cita ningú — són les autocontingudes de debò. Val la pena notar que **no és el mateix** que "sense guia": totes 130 tenen entrada a `GUIES` (el `json.loads` en dona 130 claus exactes); aquestes 13 simplement no remeten mai enlloc més ni ningú hi remet.

## Els nodes que sostenen l'estructura

**Per grau d'entrada** (quantes altres preguntes hi apunten — els "resultats fonamentals" als quals es torna):

| Pregunta | in | out | Enunciat |
|---|---|---|---|
| q54 | 6 | 1 | (clúster q53–q60, cub/simetria) |
| q32 | 5 | 4 | (clúster q31–q33/q85, poliedres) |
| q55 | 5 | 1 | |
| q03, q22, q29, q64, q65, q70, q98 | 4 | — | |

`q64` destaca especialment: **grau d'entrada 4, grau de sortida 0**. És a dir, quatre preguntes diferents (q62, q119, q124, q127) hi remeten com a resultat ja establert, però ella mateixa no remet enlloc — el patró típic d'un "teorema base" dins d'aquesta xarxa.

**Per grau de sortida** (quantes altres cita — les més "carregades" de prerequisits): q18a, q32, q85 i q112 en citen 4 cadascuna; q106 en cita 4 també.

I la distribució global confirma la forma piramidal esperada: **40 de les 130 preguntes (el 31%) no són citades mai per ningú** (grau d'entrada 0) — són els punts finals de les cadenes de raonament —, mentre que **25 en citen 0 altres** (grau de sortida 0) — els punts d'inici purs.

## Format de sortida

Adjunto:
1. **`graf-preguntes.svg`** — el graf sencer, vectorial (zoom sense pèrdua). Cada color és un component connex diferent; el gris és una preg­unta aïllada. La mida del cercle escala amb el grau d'entrada.
2. **`llista-adjacencia.txt`** — cada una de les 130 preguntes amb qui cita i qui la cita, en text pla, amb l'enunciat en català per orientar-te sense haver d'anar amunt i avall a la web.

Si et interessa, puc refer aquesta mateixa anàlisi filtrant per un sol camp (per exemple, només `iDespres`, que sembla la relació més "intencionada" per part de qui va escriure la guia, en lloc d'una simple menció de passada dins d'una pista) — la xarxa sortiria més prima però probablement més fidel a "què depèn realment de què" en sentit estricte.
