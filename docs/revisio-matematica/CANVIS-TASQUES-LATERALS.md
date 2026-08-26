# Tasques laterals — dependències i coneixement previ

Data: 2026-08-26. Fora de la numeració de trams (entre el 10 i l'11).

| Fitxer | Què hi ha |
|---|---|
| `js/data/itineraris-tematics-dades.js` | 19 dependències afegides a `requereix` |
| `verifica_projecte.py` | comprovació nova, permanent, de coherència entre els dos registres |
| `docs/CONEIXEMENT-PREVI-CANDIDATS-GLOSSARI.md` | fitxer nou: inventari de supòsits de coneixement previ, q01–q78 |

`verifica_projecte.py` passa: 53 comprovacions (n'hi havia 52), 0 errors, 2
avisos nous i intencionats (v. §1.3).

---

## 1. El defecte de les dependències

### 1.0. Correcció d'una cosa que et vaig dir malament

Ahir et vaig dir que hi havia **40 casos** on l'itinerari deia `requereix: []`
mentre la guia declarava una dependència. **Aquell número era fruit d'un model
equivocat i el retiro.**

En obrir el fitxer de debò s'hi veu que **les 55 entrades de `requereix` que ja
hi havia apunten, totes 55, a una pregunta d'un itinerari DIFERENT**. Cap
apunta dins del mateix. Això no és casualitat: és el conveni. `requereix`
recull les dependències que **creuen la frontera d'itinerari** —les que
l'alumne no pot trobar seguint el seu camí—, i dins d'un mateix itinerari qui
se n'ocupa és el camp `ordre`. Era coherent, i jo comptava com a defecte 40
casos que no ho eren.

El que em va despistar és la frase del README: *«les preguntes que `requereix`
(dependències reals documentades a les guies)»*. Suggereix que `requereix`
reflecteix els `DEPÈN de`, i en realitat surt del **graf de citacions** —la
pròpia capçalera del fitxer ho diu: es va generar parsejant els «qNN» que
apareixen dins del text de les pistes.

### 1.1. El defecte de debò

I aquí és on hi ha el problema, precisament per aquest origen. **Un `DEPÈN de`
declarat a la capçalera d'una guia però no repetit com a «qNN» dins de cap
pista no arriba mai al graf de citacions**, i per tant no arriba mai a
`requereix`. Silenciosament.

Han caigut per aquesta escletxa **19 dependències que creuen itinerari**:

```
q03 → q08b     q07 → q05      q109 → q99     q113 → q94     q126 → q122
q27_implicit → q22            q49 → q10      q49 → q36      q53 → q08c
q53 → q86      q58 → q54      q58 → q55      q64 → q50      q69 → q65
q77 → q32      q77 → q33      q82 → q03      q85 → q31      q90 → q79
```

N'hi ha de serioses. **q69 → q65** és la del centroide: q69 està a l'itinerari
«circumferència» i q65 al de «3d», o sigui que un alumne que segueixi
circumferència arriba a q69 sense haver vist mai la definició que necessita, i
l'itinerari li diu que no li cal res. **q77 → q32/q33** és la del pentàgon, i
q77 *pregunta literalment* per una tècnica feta servir allà.

Afegides. `requereix` ara conté 74 entrades i el conveni «només creuaments» es
manté intacte: no n'he tret cap ni n'he mogut cap.

### 1.2. El guarda, perquè no torni a passar

He afegit un bloc a `verifica_projecte.py` que llegeix els `DEPÈN de` dels
`.md` i els contrasta amb `requereix` i amb `ordre`. Comprova tres coses:

- **error** si un DEPÈN que creua itinerari falta a `requereix`;
- **avís** si, dins d'un mateix itinerari, l'`ordre` no respecta un DEPÈN;
- **avís** si una guia visible depèn d'una pregunta amagada.

De passada he hagut d'arreglar el meu propi parser: retallar la capçalera a 400
caràcters partia `q60` per la meitat i em generava un id fantasma `q6`. El que
va al verificador talla per la Pista 0, no per llargada.

### 1.3. Dues coses que NO he tocat, perquè són decisió teva

**(a) Sis inversions d'ordre dins d'un mateix itinerari.** Aquí `ordre` és
l'únic mecanisme i està al revés:

| Itinerari | Pregunta | Depèn de |
|---|---|---|
| polígons | q03 (#1) | q04 (#2) |
| polígons | **q04 (#2)** | **q70 (#18)** |
| polígons | q32 (#12) | q38 (#16) |
| triangles | q72 (#11) | q78 (#17) |
| 3d | q58 (#14) | q60 (#16) |
| altres | q127 (#10) | q64 (#11) |

La greu és **q04 → q70**: q04 (angles d'un polígon regular) necessita la suma
(n−2)·180° que q70 estableix, i q70 arriba **setze posicions més tard** al
mateix itinerari. Arreglar-ho vol dir moure preguntes, i això canvia la forma
pedagògica de l'itinerari: no ho faig sense que ho diguis.

**(b) Sis dependències cap a preguntes amagades** (`EXERCICIS_AMAGATS`), que
l'alumne no pot obrir de cap manera: q50→q18a, q68→q67, q69→q67, q79→q87,
q85→q88, q90→q84. Les opcions són desamagar-les, reescriure la guia perquè no
en depengui (com he anat fent), o acceptar-ho conscientment. També és teva.

Totes dues surten ara com a avís cada cop que executis el verificador, o sigui
que no es tornaran a perdre de vista.

---

## 2. El fitxer de coneixement previ

`docs/CONEIXEMENT-PREVI-CANDIDATS-GLOSSARI.md`, cobrint **q01–q78**, contrastat
un per un amb els 53 termes que el glossari ja té. Tres seccions:

- **A — el terme hi és però li falta el fet que s'usa** (5 casos). Són els més
  barats i, diria, els més rendibles. Exemples: `esfera` no porta ni (4/3)πr³
  ni 4πr², i totes dues s'usen a q58, q59, q61, q62 i q69; `poligon-regular` no
  porta la suma (n−2)·180°, que és **la fórmula més reutilitzada del quadern**
  (q04, q06, q29, q70) — he comprovat que la cadena «(n−2)» no surt ni un cop
  al glossari sencer.

- **B — no hi és** (17 candidats), ordenats per nombre de preguntes que els
  usen. Els tres primers per volum: les **raons trigonomètriques** (q30, q39,
  q72, q77, q78 — «sinus» no surt al glossari), el **nombre auri** (q31, q32,
  q33, q38 — «auri» tampoc), i el **teorema del segment mitjà** (q02, q16,
  q73), que es fa servir tres cops com a peça central i no s'enuncia enlloc.
  També hi ha el **baricentre/centroide**, que és el cas més interessant:
  n'hi ha *tres* accepcions emparentades (el del triangle, el d'àrea de q65 i
  el de perímetre de q67) i cap entrada.

- **C — d'una sola aparició** (7), que jo no hi posaria: Bolyai–Gerwien,
  astroide, Steinmetz, Σk², davallada infinita, el teorema d'Arquimedes del
  casquet i el determinant de q56. Hi consten per completesa.

El fitxer **no modifica el glossari ni proposa redactats**: escriure entrades
és feina de contingut i de figures (els 53 termes actuals en tenen totes), i
quins d'aquests 17 mereixen entrada és decisió d'owner.

### Nota de mètode, que val la pena que sàpigues

La secció B surt de la revisió pregunta a pregunta, no d'una cerca automàtica.
Vaig fer una passada de regex com a contrast, però conceptes com «la suma dels
angles d'un triangle» o «el teorema del segment mitjà» s'usen sovint **sense
anomenar-los**, i cap cerca de text els troba. Per això el fitxer va lligat a
l'avanç de la revisió i no es pot generar de cop per a les 130: q79–q130
s'aniran incorporant tram a tram, tal com em vas demanar.
