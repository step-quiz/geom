# Nota — ordre de presentació configurable

## 1. Què demanaves i què hi ha

Un ordre de presentació de les 130 preguntes, separat de l'ordre del
llibre, decidit en un fitxer editable (JSON o JS). Implementat com a
`js/data/ordre-preguntes.js` (JS, no JSON, pel mateix motiu de sempre en
aquest projecte: `file://` bloqueja `fetch()`, i un `<script>` que
assigna a `window.ORDRE_PREGUNTES` no té aquest problema).

**Per defecte**, exactament com el vas descriure: agrupat primer per
dificultat i després per dimensió (1+2D → 1+3D → 2+2D → 2+3D → 3+2D →
3+3D), i dins de cada un d'aquests sis grups, un intent d'itinerari
lògic.

## 2. Com es va construir l'ordre "lògic" dins de cada grup

No a l'atzar ni per pàgina directament. Per a cada un dels sis grups,
prioritat en aquest ordre:
1. **Dependència real ja documentada** ("DEPÈN de qXX" en algun
   `GUIES-LOT-N.md`), quan totes dues preguntes cauen al mateix grup
   (p. ex. q19 abans de q20; q31 abans de q33; q65-adjacents com
   q67/q66/q68 en l'ordre exacte que ja vaig fer servir al lot 7).
2. **Família temàtica coneguda**, encara que no hi hagi una dependència
   formal escrita (p. ex. q41/q42, angles inscrits; q96/q97, camí més
   curt; q22/q23/q27_implicit/q40_implicit, la família de cercles
   tangents del lot 6).
3. **Ordre del llibre** com a criteri de reserva, quan cap de les dues
   anteriors s'aplica — el llibre mateix ja agrupa per proximitat
   temàtica la majoria de vegades, així que no és un criteri arbitrari.

**Límit real, que ja sabies i que confirmo amb un exemple concret**:
moltes cadenes de dependència travessen la frontera de dificultat o
dimensió que tu mateix has demanat com a criteri principal. El cas més
clar: q31→q32→q33 són totes de la família del pentàgon auri, però q31 i
q33 són dificultat 2 i q32 és dificultat 3 — cauen en grups diferents, i
no hi ha manera de mantenir-les consecutives sense trencar l'agrupació
per dificultat que has demanat. Un altre cas: la cadena projectiva
q101-q106 (que HANDOFF-LLIURAMENT-9.md ja marca com "cal mantenir
l'ordre del llibre") es reparteix entre el grup dificultat-2-3D (q102,
q103, q104) i el grup dificultat-3-3D (q101, q106) — dins de cada grup
per separat, es respecta l'ordre relatiu del llibre entre els membres
d'aquell grup, que és el màxim que es pot fer sense violar l'agrupació
principal.

## 3. Verificació feta abans de donar-ho per bo

- Cada un dels sis grups conté **exactament** els ids amb la
  `(dificultat, dimensio)` que li correspon — comprovat programàticament
  contra `preguntes-dades.js`, no a ull.
- Els 130 ids hi apareixen **exactament un cop** — cap duplicat, cap
  absent.
- Playwright: la llista renderitzada coincideix **exactament** (mateix
  ordre, element per element) amb `window.ORDRE_PREGUNTES`.
- Playwright, cas revelador: des de q02, "següent" porta a **q70** (el
  tercer element del nou ordre), no a q03 (que seria "següent" en
  l'ordre del llibre) — confirma que la navegació fa servir el nou ordre
  de debò, no per casualitat.
- Regressió completa: les 97 guies existents, amb el nou sistema
  carregat, seguint donant 4 passos + peu + cap imatge trencada. 0
  fallades, 0 errors JS.

## 4. On s'ha connectat (i on deliberadament no)

- `js/ui/llista.js` — la llista es pinta en aquest ordre.
- `js/ui/detall.js` — "anterior/següent" el segueix.
- `js/nucli/itinerari.js` — la regla 5 (reserva posicional, "la
  següent de la llista") també, per coherència; el text del motiu s'ha
  actualitzat (deia "la següent del llibre", ja no és cert).
- **`js/data/preguntes-dades.js` no s'ha tocat en absolut** — segueix
  sent, i ha de seguir sent sempre, l'ordre real del llibre. Els dos
  conceptes són fitxers diferents a propòsit, perquè mai calgui triar
  entre "l'ordre que veu l'alumne" i "quina pàgina és cada pregunta al
  llibre real".
- `js/nucli/ordre.js` es degrada de manera segura si l'array no hi és,
  queda incomplet, o té ids que ja no existeixen — mai trenca la pàgina
  per un error en editar `ordre-preguntes.js` a mà (v. la seva pròpia
  capçalera per als tres casos concrets).

## 5. Com editar-ho tu mateix, d'ara endavant

Obre `js/data/ordre-preguntes.js` i mou, afegeix o treu ids directament
dins de l'array `window.ORDRE_PREGUNTES`. No cal tocar cap altre fitxer
—ni `llista.js`, ni `detall.js`, ni `itinerari.js`— ni entendre'n el
codi. Els comentaris de grup («// ---- dificultat 1 -- 2D ----») són
només orientatius per llegir-lo còmodament; no els interpreta cap codi,
només la posició real de cada id importa.

## 6. Verificació final

- `python3 verifica_projecte.py` → `Tot correcte.`
- Playwright: llista completa (130), navegació, i regressió de les 97
  guies — tot correcte, tal com detalla la secció 3.

## 7. Fitxers d'aquesta millora

```
js/data/ordre-preguntes.js   nou — l'ordre, editable
js/nucli/ordre.js            nou — el resol de manera segura
js/ui/llista.js              connectat al nou ordre
js/ui/detall.js              connectat (anterior/següent)
js/nucli/itinerari.js        connectat (regla 5, reserva posicional)
js/i18n/ui-strings.js        text del motiu "reason_fallback" corregit
index.html                   ordre de scripts actualitzat
js/ui/main.js                llista de dependències actualitzada
README.md                    secció nova explicant el sistema
```
