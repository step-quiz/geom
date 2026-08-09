/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/data/preguntes-dades.js
  ROL:          Font de dades de totes les preguntes. Variable global, NO
                JSON carregat amb fetch() — lliçó de cangurcat/README.md: el
                lloc ha de funcionar obrint index.html per doble clic
                (file://), on fetch() d'un .json queda bloquejat per CORS.
  ARQUITECTURA: Es carrega abans de js/ui/*.js. Qualsevol vista llegeix
                window.PREGUNTES directament; cap altre fitxer torna a
                declarar aquesta variable. NO assumeix mai un total fix:
                router.js i progres.js (§ pas 4) ja estan escrits perquè
                aquest array pugui créixer entre generacions sense tocar-los.
  DEPENDÈNCIES: Cap (dades pures, sense lògica).

  GENERAT PER:  build_preguntes_dades.py — NO editar aquest fitxer a mà.
                Per canviar contingut font, edita questions_full_book.json
                i torna a executar l'script. Traduccions (enunciat.ca,
                pista.*, notaEditorial.*) SÍ que s'editen a mà directament
                aquí un cop generat, ja que no venen del JSON font — si
                regeneres aquest fitxer, revisa que no perds traduccions
                ja escrites (v. nota "REGENERACIÓ" més avall).

  ESQUEMA (v. §4 de PROPOSTA-ARQUITECTURA.md):
    id             — estable, mai es reutilitza ni es renumera
    collectionId   — identificador d'aquest lot de preguntes;
                     permet ajuntar futures col·leccions sense refactor
    pagina         — pàgina del llibre on viu l'enunciat
    curs           — PENDENT (§6). null fins que es decideixi l'assignació
    interaccio     — PENDENT (§7). null fins que es decideixi el mode de resposta
    imatge         — objecte amb paginaFont, esCrop, esInvertida, i UNA de
                     les dues formes:
                       { fitxer: "nom.png", esCrop: bool, esInvertida: bool,
                         paginaFont }
                         — cas normal
                       { fitxers: ["a.png","b.png"], esCrop: [bool,bool],
                         esInvertida: [bool,bool], paginaFont }
                         — cas múltiple (esCrop/esInvertida en paral·lel a
                           fitxers, mateix índex = mateixa imatge)
                     o null si la pregunta no en té.
                     Comprova sempre 'fitxers' (plural) abans de 'fitxer':
                     un consumidor que només llegeixi 'fitxer' ignorarà en
                     silenci els casos múltiples en lloc de petar, així
                     que val la pena una comprovació explícita a detall.js.
                     esCrop=true → aplica la classe CSS
                     .question-entry__figure--scan (desactiva
                     mix-blend-mode: multiply, que amb aquestes imatges
                     afebleix una línia ja fina en lloc d'ajudar-la a
                     fondre's amb el paper — comprovat visualment).
                     esInvertida=true → NO ha d'aplicar mix-blend-mode:
                     multiply (produiria un requadre negre — es va veure
                     literalment així a q42 abans de detectar-ho). detall.js
                     encara no distingeix aquest cas — veure canvi E.
    enunciat       — objecte amb en i ca — en sempre ple (font original);
                     ca pot ser null: la UI ha de fer fallback a en
    pista          — objecte amb en i ca — opcional de debò: null vol dir
                     "sense pista", no "pendent de traduir"
    notaEditorial  — objecte amb en i ca — nota pensada per a qui llegeix,
                     pendent d'escriure's (buida ara; NO conté metadata
                     d'extracció)
    _notaExtraccio — ÚS INTERN. Metadada de com es va localitzar la imatge
                     dins el PDF font. Mai es renderitza a la UI. Pot ser
                     null (moltes entrades no en tenen). Prefix "_" ho marca
                     com a fora de l'esquema públic (§4).

  CASOS ESPECIALS (transparència a l'estil de repas/README.md):
    - q27_implicit (pàg. 46) i q40_implicit (pàg. 58): no tenen enunciat de
      text al llibre — la imatge ÉS la pregunta. enunciat.en és el peu de
      foto real del llibre, no un placeholder. q40_implicit, a més, és
      l'ÚNIC cas de tot el dataset amb imatge.fitxers (plural, dues
      imatges) en lloc d'imatge.fitxer.
    - Sufixos de lletra (q08a/b/c, q18a/b...): el llibre planteja diverses
      preguntes seguides al mateix punt del text.
    - Crops de pàgina en RGB (línia fina, tipografia pròpia del PDF, no
      dibuix a mà) en lloc de figura vectoritzada, per preservar etiquetes
      de text que no formen part del gràfic incrustat: q31, q76, q78, q79,
      q105, q107, q114. Detectat automàticament (mode de color del PNG,
      no una llista a mà) i exposat com a imatge.esCrop — v. canvi D.
    - q42 (pàg. 62): l'ÚNIC fitxer del dataset amb traç clar sobre fons
      FOSC en lloc del patró habitual (traç fosc sobre paper clar). Es va
      descobrir en una revisió visual sistemàtica de les 67 preguntes amb
      imatge — sense aquesta detecció, mix-blend-mode: multiply hi produeix
      un requadre negre en lloc de fondre's amb el paper. Exposat com a
      imatge.esInvertida — v. canvi E. detall.js encara NO llegeix aquest
      camp (és a dir, avui q42 encara es veu amb el problema); cal que
      un proper pas hi afegeixi el tractament CSS corresponent (per
      exemple, ometre el multiply i/o aplicar un filter: invert() abans).
    - q34 (pàg. 53): needs_image=false, però no perquè no calgui —
      l'autor demana explícitament que sigui l'alumne qui dibuixi la seva
      pròpia figura. Semànticament diferent d'una pregunta purament
      conceptual sense imatge; de moment només queda documentat a
      _notaExtraccio, sense cap camp dedicat a l'esquema.
    - q99 / q109: mateix text de pregunta, entrades independents a
      propòsit (contextos i imatges diferents al llibre).
    - q11/q12 i q14/q15: cada entrada apunta al seu propi fitxer
      d'imatge, però el contingut binari és idèntic (mateix hash MD5).

  REGENERACIÓ: si aquest fitxer es torna a generar després d'haver-hi
  escrit traduccions a mà, cal migrar-les abans (llegir el .js existent,
  fondre enunciat.ca/pista/notaEditorial per id dins de transform(), en
  lloc de sobreescriure'l directament). Aquesta versió de l'script encara
  NO ho fa — sobreescriu net — perquè encara no hi ha cap traducció escrita
  a la versió que reemplaça.
*/

window.PREGUNTES = [
  {
    "id": "q01",
    "collectionId": "geometry-book-1",
    "pagina": 10,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q01_page10_equilateral_triangle_center.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 9
    },
    "enunciat": {
      "en": "Where is the center of an equilateral triangle?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Equilateral triangle with a dot at its center and a curved rotation arrow, on the page BEFORE the question. A second, less direct image (an isosceles triangle with dashed medians) appears on the same page as the question itself but supports a later step in the argument, not the question directly."
  },
  {
    "id": "q02",
    "collectionId": "geometry-book-1",
    "pagina": 13,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q02_page13_four_triangles_pair.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 12
    },
    "enunciat": {
      "en": "Are these four triangles identical?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Two figures from the previous page, composited into one image: an equilateral triangle and a general (scalene) triangle, each divided into 4 smaller triangles by connecting side midpoints. The question page itself has no diagram; both source figures are on page 12."
  },
  {
    "id": "q03",
    "collectionId": "geometry-book-1",
    "pagina": 25,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "What are all the different ways to make symmetrical mosaic designs using regular polygons?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "A worked example (hexagon/square/triangle mosaic corner) on the previous page motivates this question but isn't required to understand it."
  },
  {
    "id": "q04",
    "collectionId": "geometry-book-1",
    "pagina": 25,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "What are the angles of a regular n-sided polygon?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Purely conceptual; no accompanying figure."
  },
  {
    "id": "q05",
    "collectionId": "geometry-book-1",
    "pagina": 25,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q05_page25_stars.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 25
    },
    "enunciat": {
      "en": "Can you measure the angles of a regular n-pointed star?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "A 5-pointed and a 7-pointed star, directly below the question, same page."
  },
  {
    "id": "q06",
    "collectionId": "geometry-book-1",
    "pagina": 26,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q06_page26_heptagon_diagonals.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 26
    },
    "enunciat": {
      "en": "Do the diagonals drawn from one corner of a regular polygon always make equal angles?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "A heptagon with all diagonals drawn from one vertex, directly above the question, same page."
  },
  {
    "id": "q07",
    "collectionId": "geometry-book-1",
    "pagina": 27,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "What happens if the angle sum is more than a full turn?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Relates conceptually to the two-squares-two-triangles polyhedron unfolding on page 26, but no new image is required."
  },
  {
    "id": "q08a",
    "collectionId": "geometry-book-1",
    "pagina": 27,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "What are all the symmetrical polyhedra?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Purely conceptual, no figure anywhere nearby."
  },
  {
    "id": "q08b",
    "collectionId": "geometry-book-1",
    "pagina": 27,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "What are the five regular polyhedra?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Purely conceptual, no figure anywhere nearby."
  },
  {
    "id": "q08c",
    "collectionId": "geometry-book-1",
    "pagina": 30,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "If two triangles have the same angles, are they necessarily similar? How about four-sided shapes?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Conceptual; no figure precedes it on this page."
  },
  {
    "id": "q09",
    "collectionId": "geometry-book-1",
    "pagina": 30,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q09_page30_triangle_cevian.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 30
    },
    "enunciat": {
      "en": "Show that if a right triangle is chopped into two smaller ones, they must both be similar to the original triangle.",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "A right triangle with a dashed cevian from the right-angle corner to the hypotenuse, directly below the question, same page."
  },
  {
    "id": "q10",
    "collectionId": "geometry-book-1",
    "pagina": 32,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q10_page31_rhombus.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 31
    },
    "enunciat": {
      "en": "Are the opposite sides of a rhombus always parallel? Are the diagonals perpendicular?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "The rhombus (diamond-oriented) figure is on the PREVIOUS page (31), introducing the shape this question asks about, not on page 32 itself."
  },
  {
    "id": "q11",
    "collectionId": "geometry-book-1",
    "pagina": 33,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q11_page33_parallelogram.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 33
    },
    "enunciat": {
      "en": "A parallelogram is a four-sided polygon with opposite sides parallel (i.e., a slanted box). Must the opposite angles of a parallelogram be equal?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "A parallelogram figure directly above the question, same page."
  },
  {
    "id": "q12",
    "collectionId": "geometry-book-1",
    "pagina": 33,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q12_page33_parallelogram.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 33
    },
    "enunciat": {
      "en": "Prove that a parallelogram with equal diagonals must be a rectangle.",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Shares the same parallelogram image as q11. Note: no diagonals are actually drawn in the source figure — a minor gap in the book itself, not an extraction error."
  },
  {
    "id": "q13",
    "collectionId": "geometry-book-1",
    "pagina": 34,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q13_page34_triangle_cevian.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 34
    },
    "enunciat": {
      "en": "Suppose we cut a triangle from one corner to the middle of the opposite side. Does the area get cut in half?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "A triangle with a dashed cevian from the apex to the midpoint of the base, directly below the question, same page."
  },
  {
    "id": "q14",
    "collectionId": "geometry-book-1",
    "pagina": 36,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q14_page36_triangle_in_box.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 36
    },
    "enunciat": {
      "en": "Why does a triangle take up exactly half of its box?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "A triangle inscribed in a rectangle, apex connected to both top corners, directly above the question, same page."
  },
  {
    "id": "q15",
    "collectionId": "geometry-book-1",
    "pagina": 36,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q15_page36_triangle_in_box.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 36
    },
    "enunciat": {
      "en": "What happens to the area of the triangle as we slide the tip horizontally? What if it goes past the sides of the box?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Follow-up question about the same triangle-in-box figure used for q14 (identical image)."
  },
  {
    "id": "q16",
    "collectionId": "geometry-book-1",
    "pagina": 36,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q16_page36_quad_midpoints.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 36
    },
    "enunciat": {
      "en": "Show that when we connect the midpoints of the sides of any four-sided shape, it forms a parallelogram. What is its area?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "A four-sided shape with dashed lines connecting the midpoints of its sides, directly below the question, same page."
  },
  {
    "id": "q17",
    "collectionId": "geometry-book-1",
    "pagina": 37,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Can a polygon always be chopped into pieces and reassembled to form a square?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Opens the page; no image anywhere nearby."
  },
  {
    "id": "q18a",
    "collectionId": "geometry-book-1",
    "pagina": 37,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "How does the volume of a box depend on the lengths of its sides?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Conceptual, no figure. (A square/moon-shape scaling illustration sits above it on the same page but supports a different, earlier question about area scaling.)"
  },
  {
    "id": "q18b",
    "collectionId": "geometry-book-1",
    "pagina": 37,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "What is the effect of scaling on volume?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Same page as q18a; same caveat about the nearby area-scaling image not applying to this volume question."
  },
  {
    "id": "q19",
    "collectionId": "geometry-book-1",
    "pagina": 39,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Why is the product of two odd numbers always odd?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Pure number theory, no image."
  },
  {
    "id": "q20",
    "collectionId": "geometry-book-1",
    "pagina": 40,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Why is the product of two even numbers always divisible by 4?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Pure number theory, no image."
  },
  {
    "id": "q21",
    "collectionId": "geometry-book-1",
    "pagina": 41,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Is √3 irrational? What about √2 + √3?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Pure algebra, no image."
  },
  {
    "id": "q22",
    "collectionId": "geometry-book-1",
    "pagina": 41,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q22_page41_circles_in_square.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 41
    },
    "enunciat": {
      "en": "The big circles are clearly half as wide as the square. How about the small circle?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Four large circles plus one small circle inscribed in a square, directly above the question, same page."
  },
  {
    "id": "q23",
    "collectionId": "geometry-book-1",
    "pagina": 42,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q23_page42_three_circle_puzzles.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 42
    },
    "enunciat": {
      "en": "How big are these circles?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Three separate circle-in-shape puzzles, directly above the question, same page. Composited left-to-right matching the page layout."
  },
  {
    "id": "q24",
    "collectionId": "geometry-book-1",
    "pagina": 44,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Which rectangles have whole number sides and diagonals?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Numerical (Pythagorean triples); no dedicated image."
  },
  {
    "id": "q25",
    "collectionId": "geometry-book-1",
    "pagina": 44,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q25_page44_box_diagonals.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 44
    },
    "enunciat": {
      "en": "How does the diagonal of a box depend on its three sides?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "A 3D box with face and space diagonals drawn, directly below the question, same page."
  },
  {
    "id": "q26",
    "collectionId": "geometry-book-1",
    "pagina": 45,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Show that the height of an equilateral triangle is (1/2)√3 times as long as its side.",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "No image; algebraic derivation."
  },
  {
    "id": "q27_implicit",
    "collectionId": "geometry-book-1",
    "pagina": 46,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q27_page46_implicit_circles.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 46
    },
    "enunciat": {
      "en": "Some geometry problems speak for themselves.",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Special case: three diagrams (triangle, square, circle, each with inscribed circles) with only a one-line caption and no question sentence. The image IS the question."
  },
  {
    "id": "q28",
    "collectionId": "geometry-book-1",
    "pagina": 48,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "What is the area of an equilateral triangle?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Opens the page; no image."
  },
  {
    "id": "q29",
    "collectionId": "geometry-book-1",
    "pagina": 48,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q29_page48_hexagon_octagon.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 48
    },
    "enunciat": {
      "en": "Can you measure the diagonals and areas of the regular hexagon and octagon?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Hexagon and octagon, each with diagonals drawn from one vertex, directly above the question, same page (single combined figure)."
  },
  {
    "id": "q30",
    "collectionId": "geometry-book-1",
    "pagina": 48,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q30_page48_dodecagon.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 48
    },
    "enunciat": {
      "en": "Can you measure the diagonals and area of the regular dodecagon?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Dodecagon with diagonals from one vertex, directly above the question, same page."
  },
  {
    "id": "q31",
    "collectionId": "geometry-book-1",
    "pagina": 49,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q31_page49_pentagon_ABC.png",
      "esCrop": true,
      "esInvertida": false,
      "paginaFont": 49
    },
    "enunciat": {
      "en": "Why are the three triangles similar? Why are the larger ones identical?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Pentagon divided into triangles labeled A, B, C, directly above the question, same page. Cropped from the page render rather than extracted as a raster figure, specifically to preserve the A/B/C text labels, which are separate PDF text and not part of the line art."
  },
  {
    "id": "q32",
    "collectionId": "geometry-book-1",
    "pagina": 51,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q32_page51_pentagram.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 51
    },
    "enunciat": {
      "en": "How big is the small pentagon?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Pentagon with all diagonals drawn, forming a pentagram with a small inner pentagon, directly above the question, same page."
  },
  {
    "id": "q33",
    "collectionId": "geometry-book-1",
    "pagina": 52,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q33_page52_two_pentagons.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 52
    },
    "enunciat": {
      "en": "Use this configuration of two pentagons to give an alternate proof that the diagonal satisfies d² = d + 1.",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Two overlapping pentagons with dashed diagonals, directly above the question (which explicitly says 'this configuration'), same page."
  },
  {
    "id": "q34",
    "collectionId": "geometry-book-1",
    "pagina": 53,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Construct a mosaic design that demonstrates the algebraic relation (x + y)² = x² + 2xy + y².",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Special case: this question asks the READER to produce a diagram; there is no pre-existing figure to show, by design."
  },
  {
    "id": "q35",
    "collectionId": "geometry-book-1",
    "pagina": 54,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Suppose you are given both the sum and difference of two numbers. How can you determine the numbers themselves? What if it's the sum and product that are given?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Pure algebra, no image."
  },
  {
    "id": "q36",
    "collectionId": "geometry-book-1",
    "pagina": 55,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Show that among all rectangles of a fixed perimeter, the square has the largest area.",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Conceptual, no image."
  },
  {
    "id": "q37",
    "collectionId": "geometry-book-1",
    "pagina": 55,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Find a rectangle with the same area and perimeter as a given equilateral triangle.",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "A rectangle-with-dashed-vertical-line image sits on this page. On closer inspection the dashed line simply bisects the rectangle in half — it doesn't clearly illustrate this question OR the golden-rectangle question that follows (q38). Treat that image as loosely associated with this part of the page rather than confidently belonging to either specific question."
  },
  {
    "id": "q38",
    "collectionId": "geometry-book-1",
    "pagina": 55,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q38_page55_golden_rectangle.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 55
    },
    "enunciat": {
      "en": "A golden rectangle has the property that when a square is removed, the remaining rectangle is similar to the original. What are the proportions of a golden rectangle?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Rectangle with a dashed vertical line, directly above the question, same page. See q37's note — the dashed line's exact geometric meaning (bisection vs. square-removal) doesn't perfectly match this question's construction either; flagged as the best available candidate, not a confirmed exact match."
  },
  {
    "id": "q39",
    "collectionId": "geometry-book-1",
    "pagina": 58,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "What is the area of a regular pentagon?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q40_implicit",
    "collectionId": "geometry-book-1",
    "pagina": 58,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxers": [
        "q40_page58_favorite_circle_square.png",
        "q40_page58_favorite_circles_square.png"
      ],
      "esCrop": [
        false,
        false
      ],
      "esInvertida": [
        false,
        false
      ],
      "paginaFont": 58
    },
    "enunciat": {
      "en": "Two of my favorites.",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "cercle+quadrat-notxa, cercle+2cercles+quadrat"
  },
  {
    "id": "q41",
    "collectionId": "geometry-book-1",
    "pagina": 62,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q41_page62_diameter_right_angle.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 62
    },
    "enunciat": {
      "en": "When a point on a circle is connected to both ends of a diameter it always makes a right angle. Why?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "semicercle, punt, angle marcat"
  },
  {
    "id": "q42",
    "collectionId": "geometry-book-1",
    "pagina": 62,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q42_page62_same_arc_angles.png",
      "esCrop": false,
      "esInvertida": true,
      "paginaFont": 62
    },
    "enunciat": {
      "en": "Show that if two points are connected to the same arc, the resulting angles must be the same.",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "cercle, dos punts, angles marcats"
  },
  {
    "id": "q43",
    "collectionId": "geometry-book-1",
    "pagina": 65,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q43_page65_overlapping_circles.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 65
    },
    "enunciat": {
      "en": "If two circles are arranged so that each passes through the center of the other, what are the area and perimeter of the overlap? What about for three overlapping circles?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "dos cercles superposats"
  },
  {
    "id": "q44",
    "collectionId": "geometry-book-1",
    "pagina": 66,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q44_page66_tangent_circles_small.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 66
    },
    "enunciat": {
      "en": "Two circles lie on a line, touching each other at a point. A small circle is inscribed in the space between. How does its radius depend on the radii of the two larger circles?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "dos cercles tangents + cercle petit"
  },
  {
    "id": "q45",
    "collectionId": "geometry-book-1",
    "pagina": 69,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "How can we measure the surface area of a (generalized) cylinder?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q46",
    "collectionId": "geometry-book-1",
    "pagina": 71,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "What is the area of an ellipse?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q47",
    "collectionId": "geometry-book-1",
    "pagina": 73,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q47_page73_octahedron_cube.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 73
    },
    "enunciat": {
      "en": "The centers of the faces of a cube can be joined to form a regular octahedron. How much of the volume of the cube does it take up?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "octàedre dins del cub"
  },
  {
    "id": "q48",
    "collectionId": "geometry-book-1",
    "pagina": 74,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q48_page74_frustum.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 74
    },
    "enunciat": {
      "en": "A square of side a is placed at a height h above a square of side b, forming an incomplete pyramid. How does its volume depend on a, b, and h?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "piràmide truncada, a/b/h marcats) [CORRECCIÓ: variables a,b,h mal col·locades a l'extracció automàtica, corregit aquí]"
  },
  {
    "id": "q49",
    "collectionId": "geometry-book-1",
    "pagina": 74,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q49_page74_tetrahedron_center.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 74
    },
    "enunciat": {
      "en": "Where is the center of a regular tetrahedron?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "tetràedre, centre marcat"
  },
  {
    "id": "q50",
    "collectionId": "geometry-book-1",
    "pagina": 75,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q50_page75_cone_disks.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 75
    },
    "enunciat": {
      "en": "Can you figure out the pattern to these approximations?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "con dividit en discos apilats"
  },
  {
    "id": "q51",
    "collectionId": "geometry-book-1",
    "pagina": 78,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q51_page78_cone_in_cylinder.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 78
    },
    "enunciat": {
      "en": "How can we measure the surface area of a cone?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "imatge propera no essencial (con dins cilindre, il·lustra volum no superfície)"
  },
  {
    "id": "q52",
    "collectionId": "geometry-book-1",
    "pagina": 78,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Can you find a cross-section of a cube that is a regular hexagon?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q53",
    "collectionId": "geometry-book-1",
    "pagina": 79,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Can you find two objects with equal cross-sections and different surface areas?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "imatge propera no essencial (formes de patata, il·lustra concepte Cavalieri, no exemple concret)"
  },
  {
    "id": "q54",
    "collectionId": "geometry-book-1",
    "pagina": 80,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q54_page80_cavalieri_plane.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 80
    },
    "enunciat": {
      "en": "Can you devise a Cavalieri principle for areas in the plane?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "quadrat amb graons diagonals"
  },
  {
    "id": "q55",
    "collectionId": "geometry-book-1",
    "pagina": 80,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q55_page80_cavalieri_plane.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 80
    },
    "enunciat": {
      "en": "Why can't the method of exhaustion be used in this way to measure the diagonal of a square?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "mateix quadrat amb graons, compartit amb q54"
  },
  {
    "id": "q56",
    "collectionId": "geometry-book-1",
    "pagina": 81,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q56_page81_cube_diagonals.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 81
    },
    "enunciat": {
      "en": "The diagonals of a cube form a regular tetrahedron. How much of the cube does it take up?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "cub amb diagonals"
  },
  {
    "id": "q57",
    "collectionId": "geometry-book-1",
    "pagina": 82,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "What are the volumes of the Platonic solids? How about the other symmetrical polyhedra?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q58",
    "collectionId": "geometry-book-1",
    "pagina": 82,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q58_page82_perpendicular_cylinders.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 82
    },
    "enunciat": {
      "en": "Suppose two identical cylinders meet at right angles. What does their intersection look like, and what is its volume? What about three mutually perpendicular cylinders?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "dos cilindres perpendiculars"
  },
  {
    "id": "q59",
    "collectionId": "geometry-book-1",
    "pagina": 86,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q59_page86_sphere_in_cube.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 86
    },
    "enunciat": {
      "en": "How much of a cube does a sphere occupy? Is it more than half?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "esfera dins del cub"
  },
  {
    "id": "q60",
    "collectionId": "geometry-book-1",
    "pagina": 87,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q60_page87_cone_in_hemisphere.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 87
    },
    "enunciat": {
      "en": "Show that a cone in a hemisphere occupies exactly half the volume.",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "hemisferi amb con inscrit"
  },
  {
    "id": "q61",
    "collectionId": "geometry-book-1",
    "pagina": 88,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Show that the surface area of a sphere is exactly two-thirds that of its (closed) cylinder.",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q62",
    "collectionId": "geometry-book-1",
    "pagina": 89,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q62_page89_spherical_cap.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 89
    },
    "enunciat": {
      "en": "What are the volume and surface area of a spherical cap?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "esfera amb casquet marcat"
  },
  {
    "id": "q63",
    "collectionId": "geometry-book-1",
    "pagina": 91,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Can you think of two different ways that a cylinder can be regarded as the result of a motion?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "imatge propera no essencial (rectangle amb fletxa, il·lustra \"moviment\" en general)"
  },
  {
    "id": "q64",
    "collectionId": "geometry-book-1",
    "pagina": 97,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "What is the perimeter of a region formed by a moving stick?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q65",
    "collectionId": "geometry-book-1",
    "pagina": 101,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "How should we define the centroid of a shape? Can we do it in such a way that Pappus's theorem holds?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q66",
    "collectionId": "geometry-book-1",
    "pagina": 101,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q66_page101_pappus_cylinder.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 101
    },
    "enunciat": {
      "en": "Show that Pappus's theorem works for a cylinder formed by rotating a rectangle.",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "cilindre amb fletxa de rotació"
  },
  {
    "id": "q67",
    "collectionId": "geometry-book-1",
    "pagina": 102,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "How should we define the centroid of perimeter?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q68",
    "collectionId": "geometry-book-1",
    "pagina": 103,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q68_page103_cone_centroid.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 103
    },
    "enunciat": {
      "en": "If we rotate a right triangle it forms a cone. Assuming Pappus is right, where must the centroid of the triangle be?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "con amb centroide marcat"
  },
  {
    "id": "q69",
    "collectionId": "geometry-book-1",
    "pagina": 103,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Can you find the centroid of a semicircle? How about its centroid of perimeter?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q70",
    "collectionId": "geometry-book-1",
    "pagina": 105,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "What do the inside angles of a polygon add up to?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q71",
    "collectionId": "geometry-book-1",
    "pagina": 106,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "If all the angles of a simple closed four-sided polygon are right angles, what condition must the side lengths satisfy?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q72",
    "collectionId": "geometry-book-1",
    "pagina": 106,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Make a short list of lengths and turns. What triangle problems do you need to solve in order to determine if your polygon is closed?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q73",
    "collectionId": "geometry-book-1",
    "pagina": 107,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Are the midpoints of the sides of a triangle enough information to reconstruct the triangle? How about for four-sided polygons?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q74",
    "collectionId": "geometry-book-1",
    "pagina": 107,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Do any three lengths form a triangle?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q75",
    "collectionId": "geometry-book-1",
    "pagina": 114,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Can you find two different triangles with the same area and perimeter?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q76",
    "collectionId": "geometry-book-1",
    "pagina": 114,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q76_page114_triangle_incircle_abc.png",
      "esCrop": true,
      "esInvertida": false,
      "paginaFont": 114
    },
    "enunciat": {
      "en": "If a triangle has sides a, b, and c, what is the radius of the inscribed circle?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "triangle amb cercle inscrit, a/b/c marcats"
  },
  {
    "id": "q77",
    "collectionId": "geometry-book-1",
    "pagina": 116,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "There is actually another technique for measuring lengths, which we used for the diagonal of a regular pentagon. What is it?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "imatge propera no essencial (triangles amb angle C, il·lustren l'argument previ de la llei del cosinus)"
  },
  {
    "id": "q78",
    "collectionId": "geometry-book-1",
    "pagina": 120,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q78_page120_sine_cosine_triangle.png",
      "esCrop": true,
      "esInvertida": false,
      "paginaFont": 120
    },
    "enunciat": {
      "en": "How are the sines and cosines of the two angles of a right triangle related to each other?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "triangle rectangle amb hipotenusa/oposat/adjacent etiquetats"
  },
  {
    "id": "q79",
    "collectionId": "geometry-book-1",
    "pagina": 121,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q79_page121_generalized_pythagorean.png",
      "esCrop": true,
      "esInvertida": false,
      "paginaFont": 121
    },
    "enunciat": {
      "en": "Show that in this case we get c^2 = a^2 + b^2 + 2ab cos C'.",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "triangle amb angle extern C' marcat) [CORRECCIÓ: fórmula garbled a l'extracció automàtica, corregida aquí llegint la imatge]"
  },
  {
    "id": "q80",
    "collectionId": "geometry-book-1",
    "pagina": 124,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Show that if a triangle has sides a and b meeting at an angle C, then its area is (1/2)ab sin C.",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q81",
    "collectionId": "geometry-book-1",
    "pagina": 124,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "What is the angle between the faces of a regular tetrahedron? How about for the other regular polyhedra?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q82",
    "collectionId": "geometry-book-1",
    "pagina": 124,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Show that you can fill space completely using regular octahedrons and tetrahedrons. Can you find any other ways to tile three-dimensional space with symmetrical polyhedra?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q83",
    "collectionId": "geometry-book-1",
    "pagina": 125,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "What are the sine and cosine of one-sixth of a turn?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q84",
    "collectionId": "geometry-book-1",
    "pagina": 125,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "What is the relationship between the sine and cosine of an angle?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q85",
    "collectionId": "geometry-book-1",
    "pagina": 128,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Can you use a regular pentagon to find the sine and cosine of one-fifth of a turn?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q86",
    "collectionId": "geometry-book-1",
    "pagina": 129,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Why are two sides and an angle insufficient in general to specify a triangle?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q87",
    "collectionId": "geometry-book-1",
    "pagina": 131,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "How should we define the sine of an obtuse angle? Can we do it so the law of sines still holds?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "imatge propera no essencial (triangle a/b/h/A/B, il·lustra l'argument previ de la llei dels sinus per a angles aguts)"
  },
  {
    "id": "q88",
    "collectionId": "geometry-book-1",
    "pagina": 132,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "How are the sine and cosine of an angle related to the sine and cosine of an angle twice as large?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q89",
    "collectionId": "geometry-book-1",
    "pagina": 132,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Prove that if two angle bisectors of a triangle are equal, then the triangle must be isosceles.",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q90",
    "collectionId": "geometry-book-1",
    "pagina": 132,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Show that if a four-sided shape with sides a, b, c, and d is inscribed in a circle, then its area is given by Brahmagupta's formula: A = sqrt[(s-a)(s-b)(s-c)(s-d)], where s = (1/2)(a+b+c+d).",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "sense imatge [fórmula corregida llegint la imatge, l'extracció automàtica l'havia garbled]"
  },
  {
    "id": "q91",
    "collectionId": "geometry-book-1",
    "pagina": 138,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q91_page138_dilation_planes.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 138
    },
    "enunciat": {
      "en": "How exactly does the dilation factor depend on the angle between the planes?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "dos plans amb bastons projectats"
  },
  {
    "id": "q92",
    "collectionId": "geometry-book-1",
    "pagina": 139,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q92_page139_projection_direction.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 139
    },
    "enunciat": {
      "en": "Do projections in any direction always produce dilations?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "dos plans inclinats amb punt projectat"
  },
  {
    "id": "q93",
    "collectionId": "geometry-book-1",
    "pagina": 143,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q93_page143_sphere_tangents.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 143
    },
    "enunciat": {
      "en": "Why do the tangents from a given point to a sphere all have the same length?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "esfera amb tangents des d'un punt"
  },
  {
    "id": "q94",
    "collectionId": "geometry-book-1",
    "pagina": 144,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "A circle is a special type of ellipse. Where are its focal points?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q95",
    "collectionId": "geometry-book-1",
    "pagina": 146,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q95_page146_circle_tangent_radius.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 146
    },
    "enunciat": {
      "en": "Why is the tangent to a circle perpendicular to the radius?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "cercle amb radi i tangent"
  },
  {
    "id": "q96",
    "collectionId": "geometry-book-1",
    "pagina": 150,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q96_page150_shortest_path_ellipse.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 150
    },
    "enunciat": {
      "en": "Why does the shortest path make equal angles with the line?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "el·lipse amb tangent i angles"
  },
  {
    "id": "q97",
    "collectionId": "geometry-book-1",
    "pagina": 151,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q97_page151_parallel_lines_path.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 151
    },
    "enunciat": {
      "en": "Suppose two points lie between parallel lines. What is the shortest path from one to the other that hits both lines?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "línies paral·leles, camí en zigzag"
  },
  {
    "id": "q98",
    "collectionId": "geometry-book-1",
    "pagina": 154,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Can you see how to make a rough model of an ellipse using a pencil, two thumbtacks, and a piece of string?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q99",
    "collectionId": "geometry-book-1",
    "pagina": 156,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Can you work out the details of this proof?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "sense imatge [pregunta gen\\u00e8rica recurrent, torna a aparèixer p173]"
  },
  {
    "id": "q100",
    "collectionId": "geometry-book-1",
    "pagina": 159,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "What is the effect of central projection when the planes are parallel? What if the projection point lies between the planes?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "imatge propera no essencial (tres figures il·lustren secciones còniques com a projeccions, no específicament aquest cas)"
  },
  {
    "id": "q101",
    "collectionId": "geometry-book-1",
    "pagina": 160,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Can any three points on a line be projected to any other three collinear points? How about four points?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q102",
    "collectionId": "geometry-book-1",
    "pagina": 160,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Are all triangles the same projectively? How about all four-sided polygons?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q103",
    "collectionId": "geometry-book-1",
    "pagina": 161,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q103_page161_polygon_projection.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 161
    },
    "enunciat": {
      "en": "Is a projection of a polygon always a polygon?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "dos plans amb punts col·lineals projectats"
  },
  {
    "id": "q104",
    "collectionId": "geometry-book-1",
    "pagina": 163,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "What does a projection of three parallel lines look like?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "imatge rellevant a la pàgina SEGÜENT (p164, vies de tren convergint a un punt de fuga), connectada explícitament pel text (\"by the way, it is precisely this feature...\")"
  },
  {
    "id": "q105",
    "collectionId": "geometry-book-1",
    "pagina": 167,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q105_page167_projective_lines_infinity.png",
      "esCrop": true,
      "esInvertida": false,
      "paginaFont": 167
    },
    "enunciat": {
      "en": "Do two lines in projective space necessarily intersect?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "plans amb línies convergint a un punt marcat ∞"
  },
  {
    "id": "q106",
    "collectionId": "geometry-book-1",
    "pagina": 168,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Can you discover a projective invariant?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q107",
    "collectionId": "geometry-book-1",
    "pagina": 170,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q107_page170_hyperbola_infinity.png",
      "esCrop": true,
      "esInvertida": false,
      "paginaFont": 170
    },
    "enunciat": {
      "en": "When a cone is sliced by a plane to form a hyperbola, which two points on the circle are projected to infinity?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "hipèrbola=cercle amb ∞, corbes amb fletxes"
  },
  {
    "id": "q108",
    "collectionId": "geometry-book-1",
    "pagina": 171,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Shine a flashlight on the wall at various angles. Can you see all three types of conic section?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q109",
    "collectionId": "geometry-book-1",
    "pagina": 173,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q109_page173_double_cone_spheres.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 173
    },
    "enunciat": {
      "en": "Can you work out the details of this proof?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "doble con amb esferes i tangents) [2a aparició d'aquesta pregunta genèrica; 1a era a p156 sense imatge]"
  },
  {
    "id": "q110",
    "collectionId": "geometry-book-1",
    "pagina": 173,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q110_page173_hyperbola_symmetry.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 173
    },
    "enunciat": {
      "en": "Why do hyperbolas have so much symmetry?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "dues branques d'hipèrbola amb eixos de simetria"
  },
  {
    "id": "q111",
    "collectionId": "geometry-book-1",
    "pagina": 175,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q111_page175_hyperbola_diamond.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 175
    },
    "enunciat": {
      "en": "Why is the focal constant of a hyperbola equal to the side of the diamond?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "diamant format per la hipèrbola i tangents"
  },
  {
    "id": "q112",
    "collectionId": "geometry-book-1",
    "pagina": 177,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q112_page177_right_hyperbola.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 177
    },
    "enunciat": {
      "en": "Why is every hyperbola a dilation of a right hyperbola?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "hipèrbola recta amb diagonals"
  },
  {
    "id": "q113",
    "collectionId": "geometry-book-1",
    "pagina": 178,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "If an ellipse has long radius a and short radius b, where are its focal points?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q114",
    "collectionId": "geometry-book-1",
    "pagina": 178,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q114_page178_unit_hyperbola.png",
      "esCrop": true,
      "esInvertida": false,
      "paginaFont": 178
    },
    "enunciat": {
      "en": "Where are the focal points of a unit hyperbola? What if we dilate it by factors a and b?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "hipèrbola unitat marcada amb \"1\""
  },
  {
    "id": "q115",
    "collectionId": "geometry-book-1",
    "pagina": 179,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Show that the focal constant of an ellipse or hyperbola is equal to its diameter.",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q116",
    "collectionId": "geometry-book-1",
    "pagina": 179,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Can you discover the tangent property of a hyperbola?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q117",
    "collectionId": "geometry-book-1",
    "pagina": 182,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q117_page182_parabola_dilations.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 182
    },
    "enunciat": {
      "en": "What about dilations of a parabola?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "dues paràboles de diferent obertura amb focus marcat"
  },
  {
    "id": "q118",
    "collectionId": "geometry-book-1",
    "pagina": 183,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q118_page183_parabola_tangent_proof.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 183
    },
    "enunciat": {
      "en": "Can you prove this tangent property directly, without any \\\"infinity\\\" mumbo-jumbo?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "paràbola amb focus i rebot cap a l'infinit"
  },
  {
    "id": "q119",
    "collectionId": "geometry-book-1",
    "pagina": 184,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q119_page184_parabola_envelope.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 184
    },
    "enunciat": {
      "en": "If you connect lines in this evenly spaced pattern, a parabola appears. Why?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "patró de línies formant l'envolupant parabòlica"
  },
  {
    "id": "q120",
    "collectionId": "geometry-book-1",
    "pagina": 186,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q120_page186_parabolic_sector.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 186
    },
    "enunciat": {
      "en": "Why is the area of a parabolic sector equal to half the area of the parabolic rectangle?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "paràbola amb sector triangular"
  },
  {
    "id": "q121",
    "collectionId": "geometry-book-1",
    "pagina": 186,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q121_page186_parabolic_section_box.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 186
    },
    "enunciat": {
      "en": "Show that a parabolic section takes up exactly two-thirds of its box.",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "paràbola inscrita en un quadrat"
  },
  {
    "id": "q122",
    "collectionId": "geometry-book-1",
    "pagina": 190,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q122_page190_spiral_motion.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 190
    },
    "enunciat": {
      "en": "How can we view a spiral as the result of a motion?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "espiral amb fletxa"
  },
  {
    "id": "q123",
    "collectionId": "geometry-book-1",
    "pagina": 191,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q123_page191_helix_length.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 191
    },
    "enunciat": {
      "en": "How can we measure the length of a helix?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "hèlix sobre cilindre, tipus pal de barber"
  },
  {
    "id": "q124",
    "collectionId": "geometry-book-1",
    "pagina": 192,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q124_page192_hypocycloid_epicycloid.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 192
    },
    "enunciat": {
      "en": "How does the number of cusps of a hypocycloid depend on the radii of the two circles? What about for an epicycloid?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "hipocicloide i epicicloide"
  },
  {
    "id": "q125",
    "collectionId": "geometry-book-1",
    "pagina": 192,
    "curs": null,
    "interaccio": null,
    "imatge": {
      "fitxer": "q125_page192_spirograph.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 192
    },
    "enunciat": {
      "en": "What happens if the tracing point is at the center?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "figura d'espirògraf"
  },
  {
    "id": "q126",
    "collectionId": "geometry-book-1",
    "pagina": 193,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "Can you think of a way to describe a helix on a torus?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  },
  {
    "id": "q127",
    "collectionId": "geometry-book-1",
    "pagina": 193,
    "curs": null,
    "interaccio": null,
    "imatge": null,
    "enunciat": {
      "en": "A ladder slips down the wall until it hits the floor. What curve does its midpoint describe?",
      "ca": null
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null
  }
];
