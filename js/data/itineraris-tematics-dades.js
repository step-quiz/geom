/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/data/itineraris-tematics-dades.js
  ROL:          Font de dades dels 6 itineraris temàtics d'aprenentatge —
                camins editorials fixos i complets pels quals recórrer les
                preguntes VISIBLES (les 115 que no són EXERCICIS_AMAGATS,
                js/ui/llista.js), a diferència del motor reactiu individual
                de js/nucli/itinerari.js (que suggereix 1-3 preguntes
                properes segons l'historial de CADA alumne). Aquest fitxer
                és estàtic i editorial: el mateix per a tothom, com les
                categories temàtiques (categories-tematiques-dades.js) de
                les quals aquest fitxer és, de fet, una REORGANITZACIÓ en
                seqüències —no una classificació nova.
  ARQUITECTURA: Es carrega just després de categories-tematiques-dades.js
                i abans de js/ui/*.js. Cap altre fitxer torna a declarar
                aquestes variables globals.
  DEPENDÈNCIES: window.PREGUNTES i window.CLASSIFICACIO_TEMATICA (per
                verificar-hi coherència en desenvolupament -- v. mes avall
                -, no en temps d'execucio: aquest fitxer es autosuficient,
                cada entrada porta el seu propi id).

  ORDRE DE LES DUES DECLARACIONS EN AQUEST FITXER: ITINERARIS_GRUPS_
  ENTRELLACATS abans, ITINERARIS_TEMATICS al final. Es manté aquest ordre
  per llegibilitat (els grups són curts i donen context abans dels 115
  registres), no perquè calgui: verifica_projecte.py's llegeix_global()
  es va corregir en aquest mateix lliurament perquè s'aturi al proper
  "window." de nivell superior si n'hi ha, en lloc d'assumir que la
  variable demanada és sempre l'última del fitxer (limitació real que
  va fer fallar la primera versió d'aquest fitxer, amb totes dues
  variables llegint-se malament l'una a través de l'altra). Si mai cal
  afegir una tercera variable, pot anar-hi en qualsevol posició.

  ORIGEN (ago. 2026): proposta externa d'analisi del graf de citacions
  entre les 130 guies de demostracio (parsejant pistes[].text/titol,
  comprovacio, iDespres i movimentTitol -- mai enunciat/pista/notaEditorial
  de preguntes-dades.js, que no en contenen cap; ni _notaExtraccio,
  _notaClassificacio o figura, que farien trampes a qualsevol regex
  ingenua de q\d+). Es va REGENERAR aquest fitxer, no copiar directament
  el lliurament, perque calia resoldre tres punts oberts que la proposta
  deixava conscientment per decidir (v. paragrafs seguents). El graf en
  si -- 185 arestes sobre les 130 preguntes -- es va verificar de manera
  INDEPENDENT abans d'acceptar la proposta: reimplementat des de zero
  sobre guies-dades.js, coincidencia exacta en compte d'arestes i en
  l'exemple citat (q56->q47, q56->q52, un cicle de citacio mutua de tres
  amb q47 i q52).

  DECISIO 1 -- BESSONES ASSENYALADES, NO MICRO-MODUL (confirmada per
  l'owner, no presa en silenci): la proposta oferia dues opcions per als
  8 grups entrellacats (parelles/trios de preguntes que el graf connecta
  fort pero que la classificacio tematica separa en itineraris diferents)
  i en recomanava una sense triar-la: "bessones assenyalades" (cada
  pregunta es queda al seu itinerari, la fitxa de detall marca "veure
  tambe") en lloc de "micro-modul" (tractar el grup com una unitat previa
  a tots dos itineraris). S'ha seguit la recomanacio. Els 8 grups son a
  window.ITINERARIS_GRUPS_ENTRELLACATS; cada pregunta que en forma part
  porta el seu propi camp 'bessones' (ids de les altres preguntes del
  mateix grup) per a un consum directe des de detall.js, sense haver de
  cercar dins de GRUPS_ENTRELLACATS en temps d'execucio.

  DECISIO 2 -- q36 i q80 SI tenen itinerari: la proposta detectava que,
  en amagar les 15 EXERCICIS_AMAGATS, aquestes dues preguntes es queden
  sense CAP connexio (ni entrant ni sortint) al graf de les 115 visibles
  -- verificat de manera independent (extraccio propia del graf, 0
  arestes totes dues). La proposta no els assignava cap itinerari per
  aquest motiu ("no es un error meu: es el que passa realment en
  amagar-les"). Decisio: SI se'ls assigna un itinerari -- el de la seva
  propia categoria tematica oficial, que ja existia a
  CLASSIFICACIO_TEMATICA i que la proposta ja seguia per a la resta de
  113 preguntes sense excepcio (q36->poligons, q80->triangles; verificat:
  ZERO discrepancies entre els 6 itineraris de la proposta i
  CLASSIFICACIO_TEMATICA per a les altres 113). No assignar-les hauria
  estat l'unica inconsistencia de tot el fitxer; que no tinguin aresta
  que les connecti no es motiu per tractar-les diferent de les altres
  113 -- simplement volen dir que, dins del seu itinerari, hi entren
  sense 'requereix' extern (com de fet ja hi consten: array buit).

  DECISIO 3 -- documentacio: docs/ITINERARIS-TEMATICS-DESIGN-NOTES.md
  (creat en aquest mateix lliurament, DINS del repo, no extern) recull
  l'estat real dels tres punts anteriors i substitueix la proposta
  original com a font de veritat de com s'ha implementat. La proposta
  original queda arxivada a docs/guies/ per tracabilitat.

  QUE ENCARA NO FA AQUEST LLIURAMENT (deliberadament, per no prendre
  decisions de UI en silenci en un lliurament de dades): cap canvi a
  js/ui/*.js. Aquest fitxer declara les dades; la UI que en consumeixi
  (una pagina d'itineraris, un badge de "bessona" a detall.js, un
  selector d'itinerari a llista.js) es feina d'un lliurament posterior.

  ESQUEMA:
    window.ITINERARIS_GRUPS_ENTRELLACATS -- array de 8 grups, cadascun:
      ids  -- 2 o 3 ids de preguntes que el graf de citacions connecta
              fort pero que la classificacio tematica reparteix entre
              itineraris diferents
      nota -- una frase que explica la relacio, pensada per mostrar-se
              literalment a la UI ("veure tambe: qXX -- <nota>")

    window.ITINERARIS_TEMATICS -- array de 6 itineraris, cadascun:
      clau      -- mateixa 'clau' que a CATEGORIES_TEMATIQUES per als 5
                  itineraris 2D (triangles/poligons/circumferencia/
                  coniques/altres); "3d" per al sise (sense equivalent a
                  CATEGORIES_TEMATIQUES perque aquella taxonomia no
                  divideix per dimensio -- v. proposta original: dividir
                  3D en 5 categories dona buits o grups d'1-3 preguntes,
                  no dona per itinerari)
      etiqueta  -- nom llegible en catala
      preguntes -- array ordenat (ordre topologic intern, desempatat per
                  pagina del llibre -- v. proposta original per al
                  raonament complet), cadascuna:
        id         -- mateix id que a window.PREGUNTES
        ordre      -- posicio 1-N dins d'AQUEST itinerari (no global)
        requereix  -- ids d'altres preguntes, D'UN ALTRE itinerari, que
                     el graf marca com a prerequisit real (array buit si
                     cap). Mai un id del mateix itinerari: dins d'un
                     itinerari l'ordre ja ho resol -- comprovat en
                     generar aquest fitxer (0 casos).
        bessones   -- ids d'altres preguntes que formen amb aquesta un
                     "grup entrellacat" (Decisio 1). Array buit si no en
                     forma part. Mateixa informacio que
                     ITINERARIS_GRUPS_ENTRELLACATS, duplicada aqui en
                     forma indexada per 'id' per estalviar-li a la UI
                     haver de cercar-hi dins.

  COBERTURA: les 115 preguntes visibles (130 menys les 15
  EXERCICIS_AMAGATS de js/ui/llista.js) tenen exactament una entrada a
  ITINERARIS_TEMATICS, sense solapaments. Comprovat en generar aquest
  fitxer (115 uniques, 0 duplicats) i vigilat per verifica_projecte.py.
  Si preguntes-dades.js o EXERCICIS_AMAGATS canvien, aquest fitxer s'ha
  de regenerar o revisar en paral·lel (mateixa disciplina que
  categories-tematiques-dades.js ja declara per a si mateix).
*/

window.ITINERARIS_GRUPS_ENTRELLACATS = [
  { "ids": ["q31", "q32", "q33"], "nota": "Els \"dos pentàgons\" — el mateix dibuix, argumentat des de dos angles." },
  { "ids": ["q74", "q90"], "nota": "Desigualtat triangular ↔ el seu ús en un quadrilàter." },
  { "ids": ["q39", "q76"], "nota": "Àrea del pentàgon ↔ radi de la circumferència inscrita en un triangle." },
  { "ids": ["q96", "q97", "q98"], "nota": "Propietat de reflexió de l'el·lipse, en dues variants." },
  { "ids": ["q53", "q54", "q55"], "nota": "Cavalieri en 3D i el seu anàleg en 2D." },
  { "ids": ["q101", "q99"], "nota": "Projectiva: l'enunciat i el \"treballa'n els detalls\"." },
  { "ids": ["q109", "q94"], "nota": "La circumferència com a el·lipse degenerada." },
  { "ids": ["q27_implicit", "q40_implicit"], "nota": "Les dues preguntes \"implícites\" (la imatge és la pregunta)." }
];

window.ITINERARIS_TEMATICS = [
  {
    "clau": "triangles",
    "etiqueta": "2D · Triangles",
    "preguntes": [
      { "id": "q01", "ordre": 1, "requereix": [], "bessones": [] },
      { "id": "q02", "ordre": 2, "requereix": [], "bessones": [] },
      { "id": "q08c", "ordre": 3, "requereix": [], "bessones": [] },
      { "id": "q09", "ordre": 4, "requereix": [], "bessones": [] },
      { "id": "q13", "ordre": 5, "requereix": [], "bessones": [] },
      { "id": "q14", "ordre": 6, "requereix": [], "bessones": [] },
      { "id": "q15", "ordre": 7, "requereix": ["q41", "q42"], "bessones": [] },
      { "id": "q26", "ordre": 8, "requereix": ["q29"], "bessones": [] },
      { "id": "q28", "ordre": 9, "requereix": [], "bessones": [] },
      { "id": "q31", "ordre": 10, "requereix": ["q32", "q33", "q85"], "bessones": ["q32", "q33"] },
      { "id": "q72", "ordre": 11, "requereix": [], "bessones": [] },
      { "id": "q73", "ordre": 12, "requereix": [], "bessones": [] },
      { "id": "q74", "ordre": 13, "requereix": ["q125", "q90"], "bessones": ["q90"] },
      { "id": "q75", "ordre": 14, "requereix": [], "bessones": [] },
      { "id": "q76", "ordre": 15, "requereix": ["q39"], "bessones": ["q39"] },
      { "id": "q77", "ordre": 16, "requereix": ["q112"], "bessones": [] },
      { "id": "q78", "ordre": 17, "requereix": [], "bessones": [] },
      { "id": "q79", "ordre": 18, "requereix": ["q81"], "bessones": [] },
      { "id": "q80", "ordre": 19, "requereix": [], "bessones": [] },
      { "id": "q86", "ordre": 20, "requereix": [], "bessones": [] },
      { "id": "q89", "ordre": 21, "requereix": ["q90"], "bessones": [] }
    ]
  },
  {
    "clau": "poligons",
    "etiqueta": "2D · Polígons",
    "preguntes": [
      { "id": "q03", "ordre": 1, "requereix": ["q43", "q82"], "bessones": [] },
      { "id": "q04", "ordre": 2, "requereix": [], "bessones": [] },
      { "id": "q05", "ordre": 3, "requereix": ["q07"], "bessones": [] },
      { "id": "q06", "ordre": 4, "requereix": [], "bessones": [] },
      { "id": "q10", "ordre": 5, "requereix": [], "bessones": [] },
      { "id": "q11", "ordre": 6, "requereix": ["q02"], "bessones": [] },
      { "id": "q12", "ordre": 7, "requereix": ["q02"], "bessones": [] },
      { "id": "q16", "ordre": 8, "requereix": [], "bessones": [] },
      { "id": "q17", "ordre": 9, "requereix": [], "bessones": [] },
      { "id": "q29", "ordre": 10, "requereix": ["q73"], "bessones": [] },
      { "id": "q30", "ordre": 11, "requereix": [], "bessones": [] },
      { "id": "q32", "ordre": 12, "requereix": ["q112", "q31", "q77"], "bessones": ["q31", "q33"] },
      { "id": "q33", "ordre": 13, "requereix": [], "bessones": ["q31", "q32"] },
      { "id": "q36", "ordre": 14, "requereix": [], "bessones": [] },
      { "id": "q37", "ordre": 15, "requereix": [], "bessones": [] },
      { "id": "q38", "ordre": 16, "requereix": [], "bessones": [] },
      { "id": "q39", "ordre": 17, "requereix": ["q57", "q76"], "bessones": ["q76"] },
      { "id": "q70", "ordre": 18, "requereix": ["q73"], "bessones": [] },
      { "id": "q71", "ordre": 19, "requereix": [], "bessones": [] },
      { "id": "q85", "ordre": 20, "requereix": [], "bessones": [] },
      { "id": "q90", "ordre": 21, "requereix": ["q74"], "bessones": ["q74"] }
    ]
  },
  {
    "clau": "circumferencia",
    "etiqueta": "2D · Circumferència",
    "preguntes": [
      { "id": "q22", "ordre": 1, "requereix": ["q27_implicit"], "bessones": [] },
      { "id": "q23", "ordre": 2, "requereix": [], "bessones": [] },
      { "id": "q40_implicit", "ordre": 3, "requereix": ["q27_implicit"], "bessones": ["q27_implicit"] },
      { "id": "q41", "ordre": 4, "requereix": [], "bessones": [] },
      { "id": "q42", "ordre": 5, "requereix": ["q90"], "bessones": [] },
      { "id": "q43", "ordre": 6, "requereix": [], "bessones": [] },
      { "id": "q44", "ordre": 7, "requereix": [], "bessones": [] },
      { "id": "q69", "ordre": 8, "requereix": [], "bessones": [] },
      { "id": "q94", "ordre": 9, "requereix": ["q109"], "bessones": ["q109"] },
      { "id": "q95", "ordre": 10, "requereix": [], "bessones": [] }
    ]
  },
  {
    "clau": "coniques",
    "etiqueta": "2D · Còniques",
    "preguntes": [
      { "id": "q46", "ordre": 1, "requereix": [], "bessones": [] },
      { "id": "q96", "ordre": 2, "requereix": ["q95", "q97"], "bessones": ["q97", "q98"] },
      { "id": "q98", "ordre": 3, "requereix": ["q97"], "bessones": ["q96", "q97"] },
      { "id": "q110", "ordre": 4, "requereix": [], "bessones": [] },
      { "id": "q111", "ordre": 5, "requereix": [], "bessones": [] },
      { "id": "q112", "ordre": 6, "requereix": [], "bessones": [] },
      { "id": "q113", "ordre": 7, "requereix": [], "bessones": [] },
      { "id": "q114", "ordre": 8, "requereix": [], "bessones": [] },
      { "id": "q115", "ordre": 9, "requereix": [], "bessones": [] },
      { "id": "q116", "ordre": 10, "requereix": [], "bessones": [] },
      { "id": "q117", "ordre": 11, "requereix": [], "bessones": [] },
      { "id": "q118", "ordre": 12, "requereix": [], "bessones": [] },
      { "id": "q119", "ordre": 13, "requereix": [], "bessones": [] },
      { "id": "q120", "ordre": 14, "requereix": [], "bessones": [] },
      { "id": "q121", "ordre": 15, "requereix": [], "bessones": [] }
    ]
  },
  {
    "clau": "altres",
    "etiqueta": "2D · Altres",
    "preguntes": [
      { "id": "q07", "ordre": 1, "requereix": [], "bessones": [] },
      { "id": "q27_implicit", "ordre": 2, "requereix": ["q40_implicit"], "bessones": ["q40_implicit"] },
      { "id": "q55", "ordre": 3, "requereix": ["q15", "q53", "q58", "q60"], "bessones": ["q53", "q54"] },
      { "id": "q54", "ordre": 4, "requereix": ["q15", "q46", "q58", "q60"], "bessones": ["q53", "q55"] },
      { "id": "q97", "ordre": 5, "requereix": ["q96", "q98"], "bessones": ["q96", "q98"] },
      { "id": "q99", "ordre": 6, "requereix": ["q101"], "bessones": ["q101"] },
      { "id": "q122", "ordre": 7, "requereix": ["q32"], "bessones": [] },
      { "id": "q124", "ordre": 8, "requereix": [], "bessones": [] },
      { "id": "q125", "ordre": 9, "requereix": [], "bessones": [] },
      { "id": "q127", "ordre": 10, "requereix": [], "bessones": [] },
      { "id": "q64", "ordre": 11, "requereix": ["q119", "q62"], "bessones": [] }
    ]
  },
  {
    "clau": "3d",
    "etiqueta": "3D",
    "preguntes": [
      { "id": "q08a", "ordre": 1, "requereix": [], "bessones": [] },
      { "id": "q08b", "ordre": 2, "requereix": ["q03"], "bessones": [] },
      { "id": "q25", "ordre": 3, "requereix": [], "bessones": [] },
      { "id": "q45", "ordre": 4, "requereix": [], "bessones": [] },
      { "id": "q47", "ordre": 5, "requereix": [], "bessones": [] },
      { "id": "q48", "ordre": 6, "requereix": [], "bessones": [] },
      { "id": "q49", "ordre": 7, "requereix": [], "bessones": [] },
      { "id": "q50", "ordre": 8, "requereix": [], "bessones": [] },
      { "id": "q51", "ordre": 9, "requereix": [], "bessones": [] },
      { "id": "q52", "ordre": 10, "requereix": [], "bessones": [] },
      { "id": "q53", "ordre": 11, "requereix": ["q54"], "bessones": ["q54", "q55"] },
      { "id": "q56", "ordre": 12, "requereix": [], "bessones": [] },
      { "id": "q57", "ordre": 13, "requereix": [], "bessones": [] },
      { "id": "q58", "ordre": 14, "requereix": [], "bessones": [] },
      { "id": "q59", "ordre": 15, "requereix": [], "bessones": [] },
      { "id": "q60", "ordre": 16, "requereix": [], "bessones": [] },
      { "id": "q61", "ordre": 17, "requereix": [], "bessones": [] },
      { "id": "q62", "ordre": 18, "requereix": [], "bessones": [] },
      { "id": "q63", "ordre": 19, "requereix": [], "bessones": [] },
      { "id": "q65", "ordre": 20, "requereix": ["q69"], "bessones": [] },
      { "id": "q66", "ordre": 21, "requereix": [], "bessones": [] },
      { "id": "q68", "ordre": 22, "requereix": ["q69"], "bessones": [] },
      { "id": "q81", "ordre": 23, "requereix": [], "bessones": [] },
      { "id": "q82", "ordre": 24, "requereix": [], "bessones": [] },
      { "id": "q91", "ordre": 25, "requereix": ["q111"], "bessones": [] },
      { "id": "q92", "ordre": 26, "requereix": [], "bessones": [] },
      { "id": "q93", "ordre": 27, "requereix": [], "bessones": [] },
      { "id": "q100", "ordre": 28, "requereix": [], "bessones": [] },
      { "id": "q101", "ordre": 29, "requereix": ["q99"], "bessones": ["q99"] },
      { "id": "q103", "ordre": 30, "requereix": [], "bessones": [] },
      { "id": "q104", "ordre": 31, "requereix": [], "bessones": [] },
      { "id": "q105", "ordre": 32, "requereix": [], "bessones": [] },
      { "id": "q107", "ordre": 33, "requereix": [], "bessones": [] },
      { "id": "q108", "ordre": 34, "requereix": [], "bessones": [] },
      { "id": "q109", "ordre": 35, "requereix": ["q94"], "bessones": ["q94"] },
      { "id": "q123", "ordre": 36, "requereix": ["q122"], "bessones": [] },
      { "id": "q126", "ordre": 37, "requereix": [], "bessones": [] }
    ]
  }
];

