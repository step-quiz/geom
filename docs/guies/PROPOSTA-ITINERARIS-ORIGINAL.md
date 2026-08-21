> **Arxivat sense editar (ago. 2026).** Document original de la proposta d'itineraris temàtics. La implementació real i les decisions preses (bessones assenyalades, q36/q80, etc.) són a `docs/ITINERARIS-TEMATICS-DESIGN-NOTES.md`, no aquí.

---

# Proposta d'itineraris d'aprenentatge

## Punt de partida: 130 → 115

El projecte ja defineix, a `js/ui/llista.js`, una llista `EXERCICIS_AMAGATS` de **15 preguntes** que no apareixen mai a la llista, ni a "Anterior/Següent", ni als suggeriments — encara que siguin accessibles per enllaç directe. Són:

- Les **11 preguntes senceres** de la categoria `aritmetica_algebra`: q19, q20, q21, q24, q34, q35, q83, q84, q88, q18a, q18b.
- **4 addicionals** per decisions de contingut independents: q87, q67, q102, q106.

En treure-les, la base de treball passa de 130 a **115 preguntes**, i té una conseqüència que m'ha simplificat molt la proposta: **la categoria "aritmètica/àlgebra" desapareix sencera**. Ja no calia triar entre 6 categories — queden exactament les **5 que vas demanar**: triangles, polígons, circumferència, còniques, altres.

També hi ha un efecte secundari que val la pena que sàpigues: 3 de les preguntes amagades (q18a, q20, q87) eren "ponts" crítics del graf original — sense elles, la illa gran de 83 preguntes es trenca en dues, i dues preguntes que abans tenien una connexió (q36, q80) es queden sense cap ni sortint ni entrant. No és un error meu: és el que passa realment en amagar-les.

## Xifres sobre les 115

| | |
|---|---|
| Preguntes | **115** |
| Arestes purament entre visibles | **149** |
| Arestes internes a l'itinerari triat | **94 (63%)** |
| Arestes que salten a un altre itinerari | **55 (37%)** |
| Grups de citació mútua que travessen dos itineraris | **8** |

## La decisió que fa que la cosa quadri: 3D no es divideix en 5

Vaig comprovar-ho abans de proposar-ho: si intento aplicar les 5 categories també dins de 3D, surt això (sobre les 115 visibles):

| | triangles | polígons | circumf. | còniques | altres |
|---|---|---|---|---|---|
| **3D** | 1 | 2 | 0 | 3 | 31 |

Circumferència-3D és buit, i triangles/polígons/còniques-3D tenen 1-3 preguntes cadascun — no dona per un itinerari, i les poques que hi ha (q52 "secció hexagonal d'un cub", q68 "centroide d'un con") estan temàticament cosides al mateix material de poliedres i projecció que la resta de 3D, no aïllades del seu tema.

**Per això proposo 6 itineraris, no 10**: les 5 categories dins de 2D, i un únic itinerari 3D que les conté totes juntes (però amb la categoria de cada pregunta encara anotada, per si algun dia vols filtrar-hi a dins).

## Els 6 itineraris

| Itinerari | Preguntes | % de les seves arestes que es queden dins |
|---|---|---|
| 2D · Triangles | 21 | la majoria — connectat molt fort amb Polígons |
| 2D · Polígons | 21 | idem, és la parella de Triangles |
| 2D · Circumferència | 10 | força autònom |
| 2D · Còniques | 15 | força autònom |
| 2D · Altres | 11 | actua de node de pas cap a 3D |
| 3D (sencer) | 37 | molt cohesionat interiorment |

L'ordre dins de cada itinerari és un ordre topològic real (respecta "qui cita qui" dins del mateix bloc), desempatat per la pàgina del llibre quan el graf no dona prou informació per decidir, i literalment per pàgina en els pocs punts on hi ha un cicle intern (per exemple q47→q52→q56 formen trio de citació mútua: les poso en ordre de pàgina, 73/78/81, perquè no hi ha cap ordre "correcte" més enllà d'aquest).

Tens la llista completa, pregunta a pregunta, amb número de pàgina i quins prerequisits vénen de fora del seu itinerari, al fitxer `itineraris-detall.md` adjunt.

## El cost real: 8 punts on hauràs de trencar l'itinerari a propòsit

Aquests són els casos on el graf diu, sense ambigüitat, "aquestes preguntes van juntes" però la classificació temàtica les separa. Et recomano NO forçar-les a l'ordre estricte del seu itinerari — tractar-les com una excepció assenyalada:

| Grup | Itineraris que travessa | Nota |
|---|---|---|
| q31, q32, q33 | Triangles ↔ Polígons | Els "dos pentàgons" — el mateix dibuix, argumentat des de dos angles |
| q74, q90 | Triangles ↔ Polígons | Desigualtat triangular ↔ el seu ús en un quadrilàter |
| q39, q76 | Triangles ↔ Polígons | Àrea del pentàgon ↔ radi de la circumferència inscrita en un triangle |
| q96, q97, q98 | Còniques ↔ Altres | Propietat de reflexió de l'el·lipse, en dues variants |
| q53, q54, q55 | 3D ↔ Altres | Cavalieri en 3D i el seu anàleg en 2D |
| q101, q99 | 3D ↔ Altres | Projectiva: l'enunciat i el "treballa'n els detalls" |
| q109, q94 | 3D ↔ Circumferència | La circumferència com a el·lipse degenerada |
| q27_implicit, q40_implicit | Altres ↔ Circumferència | Les dues preguntes "implícites" (la imatge és la pregunta) |

Quan un usuari acabi una d'aquestes, val la pena que la interfície li suggereixi directament l'altra del grup, encara que sigui d'un altre itinerari — és exactament la mateixa lògica que ja fa servir `itinerari.js` per als "Suggerit per a tu", només que aplicada entre itineraris en lloc de dins d'un de sol.

## Per què Triangles↔Polígons és, de llarg, la relació més forta

Al diagrama de blocs adjunt (`diagrama-blocs-itineraris.svg`) es veu d'un cop d'ull que dues relacions dominen clarament sobre totes les altres:

- **Triangles ↔ Polígons: 15 arestes** (8 en un sentit, 7 en l'altre) — té sentit, un polígon regular es descompon constantment en triangles.
- **3D ↔ Altres: 10 arestes** (7+3) — "Altres" fa de frontissa cap a 3D (espirals, hèlixs, Cavalieri...).

Cap altra parella arriba a 5. Això confirma que la divisió en 5+1 categories no és arbitrària: hi ha exactament dues "costures" fortes (Triangles-Polígons, i Altres-3D) i la resta de connexions són disperses i febles — el tipus de patró que fa raonable mantenir-les com a itineraris separats amb algunes excepcions assenyalades, en lloc de fondre-ho tot en un de sol.

## Adjunts

1. **`itineraris-detall.md`** — els 6 itineraris sencers, pregunta a pregunta, amb pàgina i prerequisits externs marcats.
2. **`diagrama-blocs-itineraris.svg`** — els 6 itineraris com a blocs, amb el gruix de cada fletxa proporcional al nombre de connexions reals entre ells.
3. **`graf-preguntes-visibles.svg`** — el graf complet node a node (115 preguntes), acolorit pels 6 itineraris, per si vols mirar el detall d'algun clúster concret.

## Un dubte que et deixo per decidir tu

Per als 8 grups entrellaçats, hi ha dues maneres raonables de tractar-los a la UI i no he volgut triar per tu:

- **(a) "Bessones assenyalades"**: cada pregunta queda al seu itinerari de sempre, però la fitxa de detall marca "veure també: qXX (d'un altre itinerari)".
- **(b) "Micro-mòdul"**: les 2-3 preguntes del grup es tracten com una unitat pròpia, prèvia a entrar en qualsevol dels dos itineraris que toquen.

Amb 8 grups tan petits (majoritàriament parelles), jo tiraria per (a) — és molt menys feina i el guany real és petit —, però és una decisió de contingut, no una cosa que es dedueixi del graf.
