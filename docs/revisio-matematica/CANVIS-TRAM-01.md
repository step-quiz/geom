# Tram 1 (q01–q12) — revisió de correcció matemàtica

Data: 2026-08-25. Abast: enunciat, 4 pistes, comprovació, "i després" i fitxer de
solució de les qüestions q01 a q12 (14 entrades: q01–q07, q08a/b/c, q09–q12).

**Font de veritat respectada.** Les guies s'han editat als `.md` de
`docs/guies/`, mai directament a `js/data/guies-dades.js`, que s'ha
**regenerat** amb `python3 parse_guies.py` (130 guies, 0 problemes). El diff
regenerat toca exactament 9 camps i cap més. `python3 verifica_projecte.py`
passa les 52 comprovacions.

---

## Fitxers modificats

| Fitxer | Qüestions |
|---|---|
| `docs/guies/GUIES-LOT-1.md` | q08c |
| `docs/guies/GUIES-LOT-2.md` | q10 |
| `docs/guies/GUIES-LOT-4.md` | q01, q02, q08a |
| `docs/guies/GUIES-LOT-6.md` | q03 |
| `js/data/guies-dades.js` | regenerat (no editat a mà) |
| `js/data/preguntes-dades.js` | q03, q05, q09 |
| `solucions/` | q01, q02, q03, q05, q06, q08a, q08c, q10, q12 |

---

## 1. Errors matemàtics corregits

### q02 — congruència confosa amb semblança (guia i solució)

Deia: *"Si els tres costats d'un triangle mesuren la meitat dels tres costats
d'un altre (i en el mateix ordre), els dos triangles són congruents — és el
criteri costat-costat-costat."*

Fals: si els costats són la meitat, els triangles són **semblants de raó 1/2**.
La congruència que fa falta és la dels quatre triangles petits **entre ells**,
perquè tots quatre tenen els mateixos tres costats (a/2, b/2, c/2). Reescrit a
Pista 3 i al pas "Tancar-ho amb el criteri costat-costat-costat", explicitant
la distinció en comptes d'amagar-la.

### q03 — condició de teselació canviada per la dels poliedres

Deia: *"Amb triangles (60°) pots ajuntar-ne 3, 4, 5 o 6 a un vèrtex (180°,
240°, 300°, 360° exactes)."*

Contradiu la Pista 0 de la mateixa guia. Al pla la suma ha de ser **exactament
360°**: només 6 triangles. Les sumes per sota de 360° són la condició de q08b
(poliedres). Corregit a Pista 3 i al pas "Recórrer totes les combinacions
possibles", i s'ha convertit l'error en avís explícit, perquè és exactament la
confusió que la parella q03/q08b vol evitar.

### q03 — afirmació falsa sobre polígons de set costats o més

Deia: *"Amb polígons de set costats o més (…) cap combinació de tres o més en
arriba a sumar exactament 360° sense passar-s'hi."*

Fals. Contraexemple canònic: 3 + 7 + 42, és a dir 60 + 900/7 + 7200/42 = 360°
exactes. També 4+5+20, 3+8+24, 3+9+18, 3+10+15, 4+6+12, 3+12+12, 5+5+10. Cert
és només que **tres** polígons de ≥7 costats ja se n'excedeixen. Substituït pel
recompte correcte: **17** rosetes tanquen el vèrtex, **11** s'estenen a un
mosaic amb tots els vèrtexs iguals (3 regulars + 8 semiregulars). El cas
3·7·42 s'ha aprofitat com a exemple de roseta que tanca i no s'estén — que és
justament la distinció local/global que la guia vol ensenyar.

### q05 — la solució contradeia q07 sobre el nombre de voltes

Deia: *"una sola volta al pentagrama, dues voltes a aquesta estrella de vuit
puntes."* q07 diu, correctament, dues i tres. El nombre de voltes és **k**
({5/2} → 2, {8/3} → 3). El que val 180° i 360° és la **suma dels angles de les
puntes**, que és 180°×(n−2k). Reescrita la comprovació de la solució separant
les dues magnituds i remetent a q07.

### q01 — "cap altre triangle té aquesta propietat"

Fals: qualsevol **isòsceles** la té amb una sola línia (i el paràgraf següent de
la mateixa pista ja feia servir l'argument isòsceles). Corregit: el que és propi
de l'equilàter és tenir-la **alhora des dels tres vèrtexs**.

---

## 2. Rigor

### q01 — la solució no demostrava la concurrència

El pas 3 argumentava amb "un únic centre de simetria global" i el gir de 120°,
cosa que **pressuposa** el punt que es vol trobar. S'ha substituït per
l'argument de la Pista 3 de la guia, que sí que és una demostració: reflectint
per una mediana, les altres dues s'intercanvien, el seu punt de tall no es pot
moure, i els únics punts fixos d'una reflexió són els de l'eix.

S'hi ha afegit un avís de vocabulari: el baricentre **no** és un "centre de
simetria" en el sentit d'ESO (simetria central) — un triangle equilàter no
coincideix amb ell mateix en girar-lo 180°.

### q09 — enunciat sota-especificat (`preguntes-dades.js`)

*"Si tallem un triangle rectangle en dos de més petits"* només és cert si el
tall és **l'altura sobre la hipotenusa**; una ceviana qualsevol des de l'angle
recte no dona semblança. La solució ja ho deia; l'enunciat català, no. Afegit
a `enunciat.ca`. **`enunciat.en` s'ha deixat intacte** perquè és el text del
llibre — decisió a validar.

### q06 — recompte al "En resum"

*"els n−2 costats i diagonals restants"*: en són **n−1** (2 costats + n−3
diagonals), i parteixen l'angle en n−2 trossos. Reescrit.

### q10 — perpendicularitat

*"perpendicular al rombe sencer"* no vol dir res (és perpendicular a l'altra
diagonal), i l'argument s'aplicava "dues vegades" sense necessitat. Reescrit el
pas sencer amb noms de vèrtexs, en dos moviments: la diagonal biseca l'angle
(per SSS) → la bisectriu d'un isòsceles cau perpendicular a la base.

### q12 — correspondència del criteri SSS

*"els triangles ABC i ABD són congruents"*: la correspondència real és
**ABC ↔ BAD**. Explicitada, perquè és la que autoritza el pas següent. També
s'ha justificat en una línia que els angles adjacents sumen 180° (angles
interns pel mateix costat de la transversal) en comptes de citar q11, que
demostrava una altra cosa.

### q02 — comprovació enganyosa

*"…encara que el triangle gran no ho fos necessàriament"*: el triangle 6-8-10
**sí** que és rectangle. Reescrit fent-ne servir el motiu (l'escala no canvia
els angles).

### q08c — el criteri és AA, no cal AAA

Afegida una frase: en un triangle n'hi ha prou amb dos angles, perquè el tercer
ja no és lliure. És com s'enuncia al currículum.

---

## 3. Menor

- **q02 · "I després"**: la subdivisió medial **no** és la que fa servir la
  demostració clàssica de Pitàgores per dissecció. Substituït per un enllaç que
  sí que és cert i és millor: els punts mitjans d'un quadrilàter **qualsevol**
  formen sempre un paral·lelogram, pel mateix teorema del segment mitjà.
- **q03 · `enunciat.ca`**: *"Quantes maneres…"* → *"Quines són totes les
  maneres…"*, que és el que diu l'anglès i el que ja deia el `.md` de la guia.
- **q05 · `_notaExtraccio`**: deia "a 5-pointed and a 7-pointed star". He obert
  el PNG: són **5 i 8 puntes** ({5/2} i {8/3}). La guia i la solució ja eren
  correctes; la metadada, no.
- **q08a · comprovació**: *"les que pots fer sense aixecar el cub de la taula"*
  és una analogia falsa (les rotacions de l'espai justament requereixen
  aixecar-lo). Substituïda per la del mirall.
- **q08c · comprovació**: parlava de *"les dotze preguntes d'aquest quadern"* —
  cert per al lot 1, sense sentit per a l'alumne que veu el lloc. Reformulat.
- **q10 · comprovació**: partia de diagonals "perpendiculars per construcció",
  que és el recíproc del teorema. Afegit l'avís que comprova els números i no
  demostra res.

---

## 4. Punts que et deixo per decidir (no he tocat res)

1. **q09 `enunciat.en`**. L'original del llibre també és ambigu. He corregit
   només el català. Si vols coherència EN/CA, cal decidir si es corregeix el
   llibre o es deixa constància de la divergència.
2. **q03: què compta com a "mosaic simètric"**. La solució ara distingeix tres
   nivells (3 regulars / 11 amb vèrtexs tots iguals / 17 rosetes). Si el llibre
   en aquest punt vol dir una altra cosa, digue-m'ho i ho ajusto.
3. **52 pistes de nivell 2 amb `text: null`**. Pel README sembla decisió de
   disseny ("Zero o tres paraules"). No les he tocat.
