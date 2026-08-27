/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/data/categories-tematiques-dades.js
  ROL:          Font de dades de la classificació TEMÀTICA de cada pregunta
                (l'objecte geomètric o el tipus de propietat central que
                tracta l'enunciat: triangles, polígons, circumferència,
                còniques, aritmètica/àlgebra, o altres). Variable global,
                NO JSON carregat amb fetch() — mateix motiu que
                preguntes-dades.js: el lloc ha de funcionar obrint
                index.html per doble clic (file://), on fetch() d'un .json
                queda bloquejat per CORS.
  ARQUITECTURA: Es carrega just després de js/data/preguntes-dades.js i
                abans de js/ui/*.js. Qualsevol vista llegeix
                window.CATEGORIES_TEMATIQUES i window.CLASSIFICACIO_TEMATICA
                directament; cap altre fitxer torna a declarar aquestes
                variables. Capa additiva i independent: NO modifica
                preguntes-dades.js ni window.PREGUNTES. Es pot ajuntar amb
                aquell array fent un join per 'id' (v. exemple d'ús §3).
  DEPENDÈNCIES: Cap en si mateix (dades pures). Pensat per fer-se servir
                conjuntament amb window.PREGUNTES (js/data/preguntes-dades.js),
                mitjançant el camp 'id' comú a totes dues fonts.
  COBERTURA:    Les 130 preguntes de window.PREGUNTES tenen exactament una
                entrada a CLASSIFICACIO_TEMATICA (relació 1 a 1, cap id
                repetit, cap id absent). Si preguntes-dades.js creix en
                una generació futura, aquest fitxer s'ha de regenerar o
                ampliar en paral·lel — no assumeixis cobertura total sense
                comprovar-ho (v. §3, "validarCobertura").

  ESQUEMA:
    window.CATEGORIES_TEMATIQUES — array de 6 categories, cadascuna:
      codi     — enter 1-6, estable, mai es reutilitza ni es renumera
      clau     — identificador curt en minúscules (snake/kebab-safe),
                 pensat per fer servir com a clau de mapa o valor d'enum
                 en codi; NO canvia encara que 'etiqueta' es tradueixi
      etiqueta — nom llegible en català, tal com apareix a l'informe

    window.CLASSIFICACIO_TEMATICA — array de 130 entrades, cadascuna:
      id                    — mateix id que a window.PREGUNTES (p. ex. "q01")
      collectionId          — mateix collectionId que a window.PREGUNTES;
                               present per poder filtrar/unir sense haver
                               de fer join previ
      pagina                — mateixa pàgina que a window.PREGUNTES;
                               duplicada aquí només per conveniència de
                               lectura/depuració (no és la font de veritat)
      categoriaTematica     — 'clau' de la categoria assignada (string)
      categoriaTematicaCodi — 'codi' de la categoria assignada (enter 1-6)

  CRITERI DE CLASSIFICACIÓ: cada pregunta s'assigna a UNA sola categoria,
                la de l'objecte geomètric o la propietat central sobre la
                qual gira l'enunciat. Quan una pregunta toca més d'un
                tema (p. ex. trigonometria dins d'un triangle, o un
                polígon inscrit en una circumferència), s'assigna a
                l'objecte principal, no a tots els temes que apareixen
                de passada. La categoria 6 ("Altres") inclou sobretot
                geometria 3D (poliedres, cossos de revolució, esferes),
                geometria projectiva, i corbes no còniques (espirals,
                hèlixs, cicloides).

  GENERAT PER:  classificació manual pregunta a pregunta a partir de
                l'enunciat, la imatge associada i _notaExtraccio de
                preguntes-dades.js. NO editar aquest fitxer sense
                revisar també l'anàlisi original (conversa/informe que
                l'acompanya) — cada assignació és una decisió temàtica,
                no un càlcul reproduïble automàticament.

  §3. EXEMPLE D'ÚS (unió amb window.PREGUNTES per 'id'):

    const categoriaPerId = new Map(
      window.CLASSIFICACIO_TEMATICA.map(c => [c.id, c])
    );
    const preguntesAmbTema = window.PREGUNTES.map(p => ({
      ...p,
      tema: categoriaPerId.get(p.id) ?? null,
    }));

  Comprovació de cobertura (validarCobertura):

    const idsPreguntes = new Set(window.PREGUNTES.map(p => p.id));
    const idsClassificacio = new Set(window.CLASSIFICACIO_TEMATICA.map(c => c.id));
    const faltenAClassificacio = [...idsPreguntes].filter(id => !idsClassificacio.has(id));
    const sobrenAClassificacio = [...idsClassificacio].filter(id => !idsPreguntes.has(id));
    // Ambdós arrays haurien d'estar buits.

  NOTA TÈCNICA (ago. 2026): aquest exemple d'ús vivia originalment com un
  comentari SOLT després del `];` de tancament de CLASSIFICACIO_TEMATICA,
  no dins d'aquesta capçalera. Es va moure aquí en implementar
  itineraris-tematics-dades.js: verifica_projecte.py necessitava llegir
  CLASSIFICACIO_TEMATICA amb el mateix mètode senzill (`json.loads` de
  tot el que hi ha després de `window.NOM = `) que ja usava per a altres
  variables, i aquell comentari despistat n'era contingut no-JSON que
  trencava la lectura — un bug preexistent, mai detectat fins ara perquè
  cap comprovació anterior havia intentat llegir aquesta variable
  concreta amb aquest mètode. Cap contingut d'aquest exemple s'ha
  perdut ni modificat, només reubicat.
*/

window.CATEGORIES_TEMATIQUES = [
  {
    "codi": 1,
    "clau": "triangles",
    "etiqueta": "Triangles"
  },
  {
    "codi": 2,
    "clau": "poligons",
    "etiqueta": "Polígons (que no siguin triangles)"
  },
  {
    "codi": 3,
    "clau": "circumferencia",
    "etiqueta": "Circumferència, cercle, semicercle"
  },
  {
    "codi": 4,
    "clau": "coniques",
    "etiqueta": "Còniques que no són circumferències"
  },
  {
    "codi": 5,
    "clau": "aritmetica_algebra",
    "etiqueta": "Propietats d'aritmètica o d'àlgebra"
  },
  {
    "codi": 6,
    "clau": "altres",
    "etiqueta": "Altres"
  }
];

window.CLASSIFICACIO_TEMATICA = [
  {
    "id": "q01",
    "collectionId": "geometry-book-1",
    "pagina": 10,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q02",
    "collectionId": "geometry-book-1",
    "pagina": 13,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q03",
    "collectionId": "geometry-book-1",
    "pagina": 25,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q04",
    "collectionId": "geometry-book-1",
    "pagina": 25,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q05",
    "collectionId": "geometry-book-1",
    "pagina": 25,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q06",
    "collectionId": "geometry-book-1",
    "pagina": 26,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q07",
    "collectionId": "geometry-book-1",
    "pagina": 27,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q08a",
    "collectionId": "geometry-book-1",
    "pagina": 27,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q08b",
    "collectionId": "geometry-book-1",
    "pagina": 27,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q08c",
    "collectionId": "geometry-book-1",
    "pagina": 30,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q09",
    "collectionId": "geometry-book-1",
    "pagina": 30,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q10",
    "collectionId": "geometry-book-1",
    "pagina": 32,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q11",
    "collectionId": "geometry-book-1",
    "pagina": 33,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q12",
    "collectionId": "geometry-book-1",
    "pagina": 33,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q13",
    "collectionId": "geometry-book-1",
    "pagina": 34,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q14",
    "collectionId": "geometry-book-1",
    "pagina": 36,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q15",
    "collectionId": "geometry-book-1",
    "pagina": 36,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q16",
    "collectionId": "geometry-book-1",
    "pagina": 36,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q17",
    "collectionId": "geometry-book-1",
    "pagina": 37,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q18a",
    "collectionId": "geometry-book-1",
    "pagina": 37,
    "categoriaTematica": "aritmetica_algebra",
    "categoriaTematicaCodi": 5
  },
  {
    "id": "q18b",
    "collectionId": "geometry-book-1",
    "pagina": 37,
    "categoriaTematica": "aritmetica_algebra",
    "categoriaTematicaCodi": 5
  },
  {
    "id": "q19",
    "collectionId": "geometry-book-1",
    "pagina": 39,
    "categoriaTematica": "aritmetica_algebra",
    "categoriaTematicaCodi": 5
  },
  {
    "id": "q20",
    "collectionId": "geometry-book-1",
    "pagina": 40,
    "categoriaTematica": "aritmetica_algebra",
    "categoriaTematicaCodi": 5
  },
  {
    "id": "q21",
    "collectionId": "geometry-book-1",
    "pagina": 41,
    "categoriaTematica": "aritmetica_algebra",
    "categoriaTematicaCodi": 5
  },
  {
    "id": "q22",
    "collectionId": "geometry-book-1",
    "pagina": 41,
    "categoriaTematica": "circumferencia",
    "categoriaTematicaCodi": 3
  },
  {
    "id": "q23",
    "collectionId": "geometry-book-1",
    "pagina": 42,
    "categoriaTematica": "circumferencia",
    "categoriaTematicaCodi": 3
  },
  {
    "id": "q24",
    "collectionId": "geometry-book-1",
    "pagina": 44,
    "categoriaTematica": "aritmetica_algebra",
    "categoriaTematicaCodi": 5
  },
  {
    "id": "q25",
    "collectionId": "geometry-book-1",
    "pagina": 44,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q26",
    "collectionId": "geometry-book-1",
    "pagina": 45,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q27_implicit",
    "collectionId": "geometry-book-1",
    "pagina": 46,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q28",
    "collectionId": "geometry-book-1",
    "pagina": 48,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q29",
    "collectionId": "geometry-book-1",
    "pagina": 48,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q30",
    "collectionId": "geometry-book-1",
    "pagina": 48,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q31",
    "collectionId": "geometry-book-1",
    "pagina": 49,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q32",
    "collectionId": "geometry-book-1",
    "pagina": 51,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q33",
    "collectionId": "geometry-book-1",
    "pagina": 52,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q34",
    "collectionId": "geometry-book-1",
    "pagina": 53,
    "categoriaTematica": "aritmetica_algebra",
    "categoriaTematicaCodi": 5
  },
  {
    "id": "q35",
    "collectionId": "geometry-book-1",
    "pagina": 54,
    "categoriaTematica": "aritmetica_algebra",
    "categoriaTematicaCodi": 5
  },
  {
    "id": "q36",
    "collectionId": "geometry-book-1",
    "pagina": 55,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q37",
    "collectionId": "geometry-book-1",
    "pagina": 55,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q38",
    "collectionId": "geometry-book-1",
    "pagina": 55,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q39",
    "collectionId": "geometry-book-1",
    "pagina": 58,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q40_implicit",
    "collectionId": "geometry-book-1",
    "pagina": 58,
    "categoriaTematica": "circumferencia",
    "categoriaTematicaCodi": 3
  },
  {
    "id": "q41",
    "collectionId": "geometry-book-1",
    "pagina": 62,
    "categoriaTematica": "circumferencia",
    "categoriaTematicaCodi": 3
  },
  {
    "id": "q42",
    "collectionId": "geometry-book-1",
    "pagina": 62,
    "categoriaTematica": "circumferencia",
    "categoriaTematicaCodi": 3
  },
  {
    "id": "q43",
    "collectionId": "geometry-book-1",
    "pagina": 65,
    "categoriaTematica": "circumferencia",
    "categoriaTematicaCodi": 3
  },
  {
    "id": "q44",
    "collectionId": "geometry-book-1",
    "pagina": 66,
    "categoriaTematica": "circumferencia",
    "categoriaTematicaCodi": 3
  },
  {
    "id": "q45",
    "collectionId": "geometry-book-1",
    "pagina": 69,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q46",
    "collectionId": "geometry-book-1",
    "pagina": 71,
    "categoriaTematica": "coniques",
    "categoriaTematicaCodi": 4
  },
  {
    "id": "q47",
    "collectionId": "geometry-book-1",
    "pagina": 73,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q48",
    "collectionId": "geometry-book-1",
    "pagina": 74,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q49",
    "collectionId": "geometry-book-1",
    "pagina": 74,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q50",
    "collectionId": "geometry-book-1",
    "pagina": 75,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q51",
    "collectionId": "geometry-book-1",
    "pagina": 78,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q52",
    "collectionId": "geometry-book-1",
    "pagina": 78,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q53",
    "collectionId": "geometry-book-1",
    "pagina": 79,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q54",
    "collectionId": "geometry-book-1",
    "pagina": 80,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q55",
    "collectionId": "geometry-book-1",
    "pagina": 80,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q56",
    "collectionId": "geometry-book-1",
    "pagina": 81,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q57",
    "collectionId": "geometry-book-1",
    "pagina": 82,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q58",
    "collectionId": "geometry-book-1",
    "pagina": 82,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q59",
    "collectionId": "geometry-book-1",
    "pagina": 86,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q60",
    "collectionId": "geometry-book-1",
    "pagina": 87,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q61",
    "collectionId": "geometry-book-1",
    "pagina": 88,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q62",
    "collectionId": "geometry-book-1",
    "pagina": 89,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q63",
    "collectionId": "geometry-book-1",
    "pagina": 91,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q64",
    "collectionId": "geometry-book-1",
    "pagina": 97,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q65",
    "collectionId": "geometry-book-1",
    "pagina": 101,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q66",
    "collectionId": "geometry-book-1",
    "pagina": 101,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q67",
    "collectionId": "geometry-book-1",
    "pagina": 102,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q68",
    "collectionId": "geometry-book-1",
    "pagina": 103,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q69",
    "collectionId": "geometry-book-1",
    "pagina": 103,
    "categoriaTematica": "circumferencia",
    "categoriaTematicaCodi": 3
  },
  {
    "id": "q70",
    "collectionId": "geometry-book-1",
    "pagina": 105,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q71",
    "collectionId": "geometry-book-1",
    "pagina": 106,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q72",
    "collectionId": "geometry-book-1",
    "pagina": 106,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q73",
    "collectionId": "geometry-book-1",
    "pagina": 107,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q74",
    "collectionId": "geometry-book-1",
    "pagina": 107,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q75",
    "collectionId": "geometry-book-1",
    "pagina": 114,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q76",
    "collectionId": "geometry-book-1",
    "pagina": 114,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q77",
    "collectionId": "geometry-book-1",
    "pagina": 116,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q78",
    "collectionId": "geometry-book-1",
    "pagina": 120,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q79",
    "collectionId": "geometry-book-1",
    "pagina": 121,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q80",
    "collectionId": "geometry-book-1",
    "pagina": 124,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q81",
    "collectionId": "geometry-book-1",
    "pagina": 124,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q82",
    "collectionId": "geometry-book-1",
    "pagina": 124,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q83",
    "collectionId": "geometry-book-1",
    "pagina": 125,
    "categoriaTematica": "aritmetica_algebra",
    "categoriaTematicaCodi": 5
  },
  {
    "id": "q84",
    "collectionId": "geometry-book-1",
    "pagina": 125,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 5
  },
  {
    "id": "q85",
    "collectionId": "geometry-book-1",
    "pagina": 128,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q86",
    "collectionId": "geometry-book-1",
    "pagina": 129,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q87",
    "collectionId": "geometry-book-1",
    "pagina": 131,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q88",
    "collectionId": "geometry-book-1",
    "pagina": 132,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 5
  },
  {
    "id": "q89",
    "collectionId": "geometry-book-1",
    "pagina": 132,
    "categoriaTematica": "triangles",
    "categoriaTematicaCodi": 1
  },
  {
    "id": "q90",
    "collectionId": "geometry-book-1",
    "pagina": 132,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q91",
    "collectionId": "geometry-book-1",
    "pagina": 138,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q92",
    "collectionId": "geometry-book-1",
    "pagina": 139,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q93",
    "collectionId": "geometry-book-1",
    "pagina": 143,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q94",
    "collectionId": "geometry-book-1",
    "pagina": 144,
    "categoriaTematica": "circumferencia",
    "categoriaTematicaCodi": 3
  },
  {
    "id": "q95",
    "collectionId": "geometry-book-1",
    "pagina": 146,
    "categoriaTematica": "circumferencia",
    "categoriaTematicaCodi": 3
  },
  {
    "id": "q96",
    "collectionId": "geometry-book-1",
    "pagina": 150,
    "categoriaTematica": "coniques",
    "categoriaTematicaCodi": 4
  },
  {
    "id": "q97",
    "collectionId": "geometry-book-1",
    "pagina": 151,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q98",
    "collectionId": "geometry-book-1",
    "pagina": 154,
    "categoriaTematica": "coniques",
    "categoriaTematicaCodi": 4
  },
  {
    "id": "q99",
    "collectionId": "geometry-book-1",
    "pagina": 156,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q100",
    "collectionId": "geometry-book-1",
    "pagina": 159,
    "categoriaTematica": "coniques",
    "categoriaTematicaCodi": 4
  },
  {
    "id": "q101",
    "collectionId": "geometry-book-1",
    "pagina": 160,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q102",
    "collectionId": "geometry-book-1",
    "pagina": 160,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q103",
    "collectionId": "geometry-book-1",
    "pagina": 161,
    "categoriaTematica": "poligons",
    "categoriaTematicaCodi": 2
  },
  {
    "id": "q104",
    "collectionId": "geometry-book-1",
    "pagina": 163,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q105",
    "collectionId": "geometry-book-1",
    "pagina": 167,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q106",
    "collectionId": "geometry-book-1",
    "pagina": 168,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q107",
    "collectionId": "geometry-book-1",
    "pagina": 170,
    "categoriaTematica": "coniques",
    "categoriaTematicaCodi": 4
  },
  {
    "id": "q108",
    "collectionId": "geometry-book-1",
    "pagina": 171,
    "categoriaTematica": "coniques",
    "categoriaTematicaCodi": 4
  },
  {
    "id": "q109",
    "collectionId": "geometry-book-1",
    "pagina": 173,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q110",
    "collectionId": "geometry-book-1",
    "pagina": 173,
    "categoriaTematica": "coniques",
    "categoriaTematicaCodi": 4
  },
  {
    "id": "q111",
    "collectionId": "geometry-book-1",
    "pagina": 175,
    "categoriaTematica": "coniques",
    "categoriaTematicaCodi": 4
  },
  {
    "id": "q112",
    "collectionId": "geometry-book-1",
    "pagina": 177,
    "categoriaTematica": "coniques",
    "categoriaTematicaCodi": 4
  },
  {
    "id": "q113",
    "collectionId": "geometry-book-1",
    "pagina": 178,
    "categoriaTematica": "coniques",
    "categoriaTematicaCodi": 4
  },
  {
    "id": "q114",
    "collectionId": "geometry-book-1",
    "pagina": 178,
    "categoriaTematica": "coniques",
    "categoriaTematicaCodi": 4
  },
  {
    "id": "q115",
    "collectionId": "geometry-book-1",
    "pagina": 179,
    "categoriaTematica": "coniques",
    "categoriaTematicaCodi": 4
  },
  {
    "id": "q116",
    "collectionId": "geometry-book-1",
    "pagina": 179,
    "categoriaTematica": "coniques",
    "categoriaTematicaCodi": 4
  },
  {
    "id": "q117",
    "collectionId": "geometry-book-1",
    "pagina": 182,
    "categoriaTematica": "coniques",
    "categoriaTematicaCodi": 4
  },
  {
    "id": "q118",
    "collectionId": "geometry-book-1",
    "pagina": 183,
    "categoriaTematica": "coniques",
    "categoriaTematicaCodi": 4
  },
  {
    "id": "q119",
    "collectionId": "geometry-book-1",
    "pagina": 184,
    "categoriaTematica": "coniques",
    "categoriaTematicaCodi": 4
  },
  {
    "id": "q120",
    "collectionId": "geometry-book-1",
    "pagina": 186,
    "categoriaTematica": "coniques",
    "categoriaTematicaCodi": 4
  },
  {
    "id": "q121",
    "collectionId": "geometry-book-1",
    "pagina": 186,
    "categoriaTematica": "coniques",
    "categoriaTematicaCodi": 4
  },
  {
    "id": "q122",
    "collectionId": "geometry-book-1",
    "pagina": 190,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q123",
    "collectionId": "geometry-book-1",
    "pagina": 191,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q124",
    "collectionId": "geometry-book-1",
    "pagina": 192,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q125",
    "collectionId": "geometry-book-1",
    "pagina": 192,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q126",
    "collectionId": "geometry-book-1",
    "pagina": 193,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  },
  {
    "id": "q127",
    "collectionId": "geometry-book-1",
    "pagina": 193,
    "categoriaTematica": "altres",
    "categoriaTematicaCodi": 6
  }
];
