# Nota — les tres demostracions, reestructurades en passos revelats

Reversió deliberada, a petició explícita de l'owner, d'una decisió de
disseny que jo mateix havia documentat i defensat en una sessió
anterior ("aquí la solució s'ha de donar SENCERA, sempre visible, mai
amagada rere un botó de revelar"). L'owner volia un bucle real
**llegir → provar al paper → comparar → comprovar**, i aquest bucle
exigeix que l'alumne no vegi el pas següent abans d'haver-ho intentat
— exactament el contrari del disseny anterior. Ho documento amb
aquestes paraules perquè és un canvi de fons, no un afegit.

## 1. Què demanava l'owner, i com s'ha traduït

Cada demo passa de "4 blocs de text sempre visibles + 1 figura de 5
panells sencera" a **6 passos, revelats d'un en un amb un botó**,
reaprofitant exactament el mateix mecanisme que ja funciona a les
guies reals (`pintaGuia`/`revela` a `detall.js`) — no reinventat, un
refactor amb el mateix patró.

- **Pas 0 (context)**: el claim + per-què-no-és-obvi d'abans,
  fusionats. Sempre visible sense clicar, igual que l'enunciat d'una
  pregunta real mai s'amaga.
- **Passos 1-4**: un per cada panell de construcció de la figura.
  Cadascun porta, en ordre: un **"Try it on paper first"** (peça
  genuïnament nova, no existia abans — què ha de fer l'alumne al paper
  abans de mirar la resta d'aquest mateix pas), el tros d'argument
  corresponent, la figura d'aquell panell concret (no els 5 de cop), i
  un **"Check yourself"** (pregunta autoverificable, mai la conclusió
  en si — mateix criteri que `comprovacio` a les guies reals).
- **Pas 5 (tancament)**: l'antic "què acaba de passar" + l'enllaç cap
  a una pregunta real, ara com un pas més que cal revelar, no com un
  peu sempre visible.

## 2. Canvis tècnics, per fitxer

- **`js/data/demos-dades.js`, reescrit sencer**: model nou
  `demo.passos` (array de 6), substituint els quatre camps fixos
  d'abans. **Cap contingut perdut** en el trasllat — confirmat
  comparant el text total abans/després (2752→3716,
  2953→3563, 2524→3025 caràcters per demo: sempre més llarg, mai més
  curt, coherent amb haver-hi afegit contingut nou, no substituït
  cap).
- **`docs/demo-figures.html`, reestructurat**: cada panell passa de
  ser una IIFE amb `translate` dins d'un canvas compartit (una tira de
  5) a ser el seu propi `mk(...)` independent — 15 canvas en total (5
  per demo), cadascun amb `stampNum` propi (`demo-01-p0` fins
  `demo-03-p4`). **Geometria exacta conservada**: mateixes coordenades
  de tots els punts, mateixos colors, res redibuixat des de zero —
  només separat en fitxers independents perquè les dades hi puguin
  referenciar un panell concret. `panelLabel()` ja no s'usa (el text
  de cada pas viu només a les dades, mai incrustat a la imatge, per no
  duplicar-lo en dos llocs que es podrien desincronitzar).
- **`js/ui/demo.js`, reescrit sencer**: implementa el mecanisme de
  revelar-un-per-un amb classes CSS pròpies (`.demo__*`, mai
  `.guia__*`, perquè conceptualment segueixen sent coses diferents —
  a les guies reals cap nivell dona mai la solució; aquí el pas 5 sí
  que la dona sencera, a propòsit). `marcaVista(demo.id)` ja no es
  crida en pintar la pàgina, sinó **només en revelar el pas de
  tancament** — amb passos amagats, "he vist la demo" només té sentit
  un cop s'hi ha arribat de debò.
- **`js/i18n/ui-strings.js`**: 5 claus noves a `demo:` (en/ca):
  `start`, `next_step`, `step_label`, `try_label`, `check_label`. Les
  claus que ja no fa servir el nou `demo.js` (`beat_why`,
  `beat_argument`) s'han deixat sense ús, no eliminades — no calia
  tocar-les per fer funcionar això.
- **`css/components.css`**: substituït el bloc `.demo__beat*` per
  `.demo__context`, `.demo__steps`, `.demo__step`, `.demo__try*`,
  `.demo__check*`, `.demo__reveal` — mirall directe dels patrons ja
  existents de `.guia__*`, mateixos tokens de disseny.

## 3. Un bug real trobat i corregit durant la pròpia revisió

En provar el flux complet amb Playwright, l'enllaç de tancament
("Obre qXX →") no apareixia mai. Investigat: el camp `handoff` viu a
`demo.passos[5].handoff` (així ho vaig escriure a les dades noves),
però el primer esborrany de `demo.js` el llegia com `demo.handoff`
(nivell arrel, on ja no hi és des del redisseny). Corregit llegint-lo
del pas correcte (`pas.handoff`); reconfirmat amb Playwright a les
tres demos que l'enllaç apareix amb l'`href` correcte
(`#q70`, `#q89`, `#q02`).

## 4. Verificació

- **Estructura de dades**: `node --check` als 4 fitxers JS tocats;
  comparació d'IDs i moviments abans/després (idèntics); comparació de
  volum de text (sempre creixent, mai decreixent).
- **CSS**: claus obertes/tancades equilibrades a tot el fitxer
  (132/132) després de l'edició.
- `python3 verifica_projecte.py` → `Tot correcte.`
- **Playwright, flux complet a les tres demos**: context visible sense
  clicar; 0 passos visibles abans del primer clic; 5 clics revelen
  exactament 5 passos; el botó desapareix en arribar al final; 4
  figures per demo carreguen amb `naturalWidth > 0`; l'enllaç de
  tancament porta a la pregunta correcta a cadascuna de les tres
  (`#q70`, `#q89`, `#q02`); el bloc de tancament compartit
  (`window.DEMOS_TANCAMENT`, sense canvis d'aquesta sessió) segueix
  pintant-se després de les tres; `localStorage` confirma que
  `marcaVista` no es crida fins que s'arriba al pas de tancament, no
  en pintar la pàgina.
- **Captura de pantalla real**, revisada visualment: el bloc "TRY IT
  ON PAPER FIRST" es distingeix clarament abans de la figura; "CHECK
  YOURSELF" en cursiva després; el botó "Step N of 5 →" llegible i
  ben posicionat entre passos.

## 5. Fitxers d'aquest lliurament

```
js/data/demos-dades.js          reescrit sencer (nou model demo.passos)
docs/demo-figures.html/-clean   reestructurat en 15 canvas independents
assets/img/demo/demo-0N-pM.png  15 figures noves (5 per demo)
js/ui/demo.js                   reescrit sencer (mecanisme revela)
js/i18n/ui-strings.js           5 claus noves a demo: (en/ca)
css/components.css              .demo__context/steps/step/try/check/reveal nous
docs/guies/NOTA-DEMOS-PASSOS.md aquest fitxer
```

Les tres imatges de tira antigues (`demo-01-angle-sum.png`,
`demo-02-isosceles.png`, `demo-03-four-triangles.png`) s'han retirat
d'`assets/img/demo/` — ja no s'hi referencia cap dada — però es
conserven fora del repositori per si calgués recuperar-les.

## 6. IMPORTANT — tres fitxers a esborrar manualment

El ZIP diff només pot afegir o modificar fitxers, mai eliminar-ne. Un
cop aplicat el ZIP, cal esborrar manualment aquests tres, que ja no
té sentit que existeixin (cap dada hi apunta des d'aquesta sessió):

```
assets/img/demo/demo-01-angle-sum.png
assets/img/demo/demo-02-isosceles.png
assets/img/demo/demo-03-four-triangles.png
```

