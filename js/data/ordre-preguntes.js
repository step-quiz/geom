/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/data/ordre-preguntes.js
  ROL:          L'ordre en què es PRESENTEN les 130 preguntes a la llista i
                a la navegació anterior/següent -- DELIBERADAMENT separat de
                l'ordre del llibre (que es manté intacte, intocat, a
                `js/data/preguntes-dades.js`) i de l'ordre de generació de
                les guies (`js/data/guies-dades.js`, que ve dels
                `GUIES-LOT-N.md`). Tres ordres diferents, tres fitxers
                diferents, cap dels tres depèn dels altres dos.

  PER QUÈ UN FITXER A PART (i no una funció que ordeni sobre la marxa)
  Perquè es pugui EDITAR sense tocar cap codi: aquest array és l'única font
  de veritat de "en quin ordre veu l'alumne les preguntes", i reordenar-lo
  —moure un id, canviar l'agrupació sencera— no hauria d'exigir entendre
  `llista.js` ni `detall.js`. Els dos únics consumidors
  (`js/nucli/ordre.js`, i des d'allà `llista.js`/`detall.js`/`itinerari.js`)
  el llegeixen en temps d'execució, mai el copien.

  ESQUEMA: un array pla d'ids, `window.ORDRE_PREGUNTES`. La POSICIÓ a
  l'array és l'únic que importa — no hi ha cap camp addicional. Ha de
  contenir cada un dels 130 ids de `preguntes-dades.js` EXACTAMENT un cop
  (`js/nucli/ordre.js` ho verifica en temps d'execució i es degrada bé si
  algun dia deixa de ser cert — v. la seva pròpia capçalera).

  L'ORDRE PER DEFECTE (decisió explícita de l'owner, 2026): agrupat primer
  per dificultat i després per dimensió —
    dificultat 1 + 2D → dificultat 1 + 3D →
    dificultat 2 + 2D → dificultat 2 + 3D →
    dificultat 3 + 2D → dificultat 3 + 3D
  — i, DINS de cada un d'aquests sis grups, un intent d'itinerari "lògic":
  preguntes que comparteixen tècnica o que una depèn de l'altra es
  col·loquen juntes, per aquest ordre de prioritat:
    1. Dependència real ja documentada en una guia ("DEPÈN de qXX" a algun
       `GUIES-LOT-N.md") quan totes dues preguntes cauen al mateix grup.
    2. Família temàtica coneguda (p. ex. q19/q20 nombres senars/parells;
       q41/q42 angles inscrits; q96/q97 camí més curt; q110-q115 la
       cadena acumulativa de constant focal; q101/q106/q107/q109 la
       cadena projectiva-cross-ratio).
    3. Quan cap de les dues anteriors s'aplica: l'ordre del llibre (número
       de pàgina), que ja agrupa per proximitat temàtica la majoria de
       vegades.

  LÍMIT REAL, RECONEGUT EXPLÍCITAMENT (l'owner ja ho sabia en demanar-ho:
  "no sempre és possible"): moltes cadenes de dependència reals CREUEN la
  frontera de dificultat o de dimensió (per exemple, q31→q32→q33 són totes
  golden-ratio-pentàgon, però q31/q33 són dificultat 2 i q32 és dificultat
  3 — cauen en grups diferents i no es poden mantenir consecutives sense
  trencar l'agrupació que l'owner ha demanat explícitament). En aquests
  casos, dins de cada grup per separat s'ha mantingut el màxim ordre lògic
  possible, sense forçar cap contigüitat impossible entre grups.

  Font real d'aquestes 130 entrades: totes les guies ja escrites
  (`docs/guies/GUIES-LOT-1..8.md`, que documenten les dependències "DEPÈN
  de" explícitament) més el coneixement de contingut de les preguntes
  encara sense guiar (lots 9/10, `HANDOFF-LLIURAMENT-9.md`/`-10.md`).

  COM EDITAR-HO: mou, afegeix o treu ids directament en aquest array. No
  cal mantenir els comentaris de grup (són només orientatius per a qui
  llegeix el fitxer); `js/nucli/ordre.js` no els interpreta, només llegeix
  la posició real de cada id a l'array.
*/

window.ORDRE_PREGUNTES = [

  // ---- dificultat 1 -- 2D (23 preguntes) ----
  "q01",
  "q02",
  "q70",
  "q04",
  "q14",
  "q13",
  "q10",
  "q11",
  "q19",
  "q20",
  "q34",
  "q26",
  "q28",
  "q74",
  "q78",
  "q83",
  "q84",
  "q95",
  "q94",
  "q98",
  "q117",
  "q122",
  "q125",

  // ---- dificultat 1 -- 3D (5 preguntes) ----
  "q18a",
  "q25",
  "q63",
  "q105",
  "q108",

  // ---- dificultat 2 -- 2D (47 preguntes) ----
  "q05",
  "q06",
  "q07",
  "q08c",
  "q09",
  "q16",
  "q73",
  "q12",
  "q15",
  "q21",
  "q22",
  "q23",
  "q27_implicit",
  "q40_implicit",
  "q24",
  "q29",
  "q30",
  "q31",
  "q33",
  "q38",
  "q39",
  "q35",
  "q36",
  "q37",
  "q41",
  "q42",
  "q46",
  "q64",
  "q69",
  "q71",
  "q72",
  "q75",
  "q76",
  "q77",
  "q80",
  "q86",
  "q87",
  "q88",
  "q96",
  "q97",
  "q110",
  "q111",
  "q112",
  "q113",
  "q114",
  "q115",
  "q120",

  // ---- dificultat 2 -- 3D (23 preguntes) ----
  "q08a",
  "q18b",
  "q45",
  "q51",
  "q50",
  "q47",
  "q49",
  "q52",
  "q56",
  "q59",
  "q60",
  "q61",
  "q67",
  "q66",
  "q68",
  "q91",
  "q92",
  "q93",
  "q100",
  "q102",
  "q103",
  "q104",
  "q126",

  // ---- dificultat 3 -- 2D (18 preguntes) ----
  "q03",
  "q17",
  "q43",
  "q44",
  "q54",
  "q55",
  "q32",
  "q85",
  "q79",
  "q89",
  "q90",
  "q99",
  "q116",
  "q118",
  "q119",
  "q121",
  "q124",
  "q127",

  // ---- dificultat 3 -- 3D (14 preguntes) ----
  "q08b",
  "q57",
  "q81",
  "q82",
  "q48",
  "q53",
  "q58",
  "q62",
  "q65",
  "q101",
  "q106",
  "q107",
  "q109",
  "q123",
];
