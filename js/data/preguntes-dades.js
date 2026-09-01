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
    dimensio       — "2D" | "3D" — v. canvi F. NO ve del JSON font: es
                     calcula en temps de build des d'una taula fixa
                     escrita a l'script (com esCrop/esInvertida), no del
                     PDF d'extracció. Primera classificació pendent de
                     revisió (v. _notaClassificacio i canvi F).
    dificultat     — 1 | 2 | 3 — v. canvi F. Mateix origen i mateixa
                     reserva que dimensio: primera passada, pendent que
                     algú amb el llibre sencer la revisi.
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
    _notaClassificacio — ÚS INTERN, com _notaExtraccio. Justificació breu
                     (uns quants mots) del criteri aplicat a dimensio/
                     dificultat per a aquesta pregunta concreta — v. canvi F.

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
    - dimensio/dificultat (v. canvi F): classificació de les 130 preguntes
      feta pregunta a pregunta sense el text complet del llibre (només
      enunciat + pàgina + imatge, quan n'hi ha). "2D" vol dir que tot el
      plantejament geomètric viu al pla; "3D" que el raonament necessari
      passa per l'espai encara que el resultat final sigui una figura
      plana (p.ex. una el·lipse com a secció d'un con és "3D"). Dos casos
      on el criteri no és evident només amb l'enunciat i s'ha decidit per
      la posició al llibre: q94 (focus d'una circumferència com a el·lipse
      degenerada, classificat 2D tot i venir just després del lema de
      tangents a l'esfera) i q65/q67 (definir el centroide "perquè Pappus
      funcioni", classificat 3D pel motiu — el volum de revolució — encara
      que "centroide" en si sigui un concepte 2D). Pendent de revisió per
      algú amb el llibre sencer — v. `_notaClassificacio` per pregunta.

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
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "q01_page10_equilateral_triangle_center.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 9
    },
    "enunciat": {
      "en": "Where is the center of an equilateral triangle?",
      "ca": "Com podem trobar el centre d'un triangle equilàter?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Equilateral triangle with a dot at its center and a curved rotation arrow, on the page BEFORE the question. A second, less direct image (an isosceles triangle with dashed medians) appears on the same page as the question itself but supports a later step in the argument, not the question directly.",
    "_notaClassificacio": "deducció immediata per simetria"
  },
  {
    "id": "q02",
    "collectionId": "geometry-book-1",
    "pagina": 13,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "q02_page13_four_triangles_pair.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 12
    },
    "enunciat": {
      "en": "Are these four triangles identical?",
      "ca": "Aquests quatre triangles, són idèntics?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Two figures from the previous page, composited into one image: an equilateral triangle and a general (scalene) triangle, each divided into 4 smaller triangles by connecting side midpoints. The question page itself has no diagram; both source figures are on page 12.",
    "_notaClassificacio": "comparació visual directa de congruència"
  },
  {
    "id": "q03",
    "collectionId": "geometry-book-1",
    "pagina": 25,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "fig-132.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 25
    },
    "enunciat": {
      "en": "What are all the different ways to make symmetrical mosaic designs using regular polygons?",
      "ca": "Quines són totes les maneres diferents de fer dissenys de mosaic simètrics amb polígons regulars?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "A worked example (hexagon/square/triangle mosaic corner) on the previous page motivates this question but isn't required to understand it.",
    "_notaClassificacio": "classificació combinatòria de totes les teselacions possibles"
  },
  {
    "id": "q04",
    "collectionId": "geometry-book-1",
    "pagina": 25,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "fig-133.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 25
    },
    "enunciat": {
      "en": "What are the angles of a regular n-sided polygon?",
      "ca": "Quins són els angles d'un polígon regular de n costats?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Purely conceptual; no accompanying figure.",
    "_notaClassificacio": "fórmula directa de suma d'angles"
  },
  {
    "id": "q05",
    "collectionId": "geometry-book-1",
    "pagina": 25,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q05_page25_stars.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 25
    },
    "enunciat": {
      "en": "Can you measure the angles of a regular n-pointed star?",
      "ca": "Es poden mesurar els angles d'una estrella regular de n puntes?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "A 5-pointed and an 8-pointed star, directly below the question, same page. (Corregit: la nota original deia 7 puntes; la figura en té 8 — són les estrelles {5/2} i {8/3}, que és el que descriuen la guia i la solució.)",
    "_notaClassificacio": "cal comptar voltes/autointerseccions de l'estrella"
  },
  {
    "id": "q06",
    "collectionId": "geometry-book-1",
    "pagina": 26,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q06_page26_heptagon_diagonals.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 26
    },
    "enunciat": {
      "en": "Do the diagonals drawn from one corner of a regular polygon always make equal angles?",
      "ca": "Les diagonals traçades des d'un vèrtex d'un polígon regular, sempre formen angles iguals?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "A heptagon with all diagonals drawn from one vertex, directly above the question, same page.",
    "_notaClassificacio": "requereix un argument, no és immediat"
  },
  {
    "id": "q07",
    "collectionId": "geometry-book-1",
    "pagina": 27,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-134.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 27
    },
    "enunciat": {
      "en": "What happens if the angle sum is more than a full turn?",
      "ca": "Què passa si la suma dels angles és més d'una volta sencera?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Relates conceptually to the two-squares-two-triangles polyhedron unfolding on page 26, but no new image is required.",
    "_notaClassificacio": "cas límit/extensió del anterior"
  },
  {
    "id": "q08a",
    "collectionId": "geometry-book-1",
    "pagina": 27,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-135.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 27
    },
    "enunciat": {
      "en": "What are all the symmetrical polyhedra?",
      "ca": "Quins són tots els poliedres simètrics?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Purely conceptual, no figure anywhere nearby.",
    "_notaClassificacio": "exploració oberta de poliedres simètrics"
  },
  {
    "id": "q08b",
    "collectionId": "geometry-book-1",
    "pagina": 27,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "fig-136.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 27
    },
    "enunciat": {
      "en": "What are the five regular polyhedra?",
      "ca": "Quins són els cinc poliedres regulars?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Purely conceptual, no figure anywhere nearby.",
    "_notaClassificacio": "classificació completa (arg. tipus Euler, diversos casos)"
  },
  {
    "id": "q08c",
    "collectionId": "geometry-book-1",
    "pagina": 30,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-137.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 30
    },
    "enunciat": {
      "en": "If two triangles have the same angles, are they necessarily similar? How about four-sided shapes?",
      "ca": "Si dos triangles tenen els mateixos angles, són necessàriament semblants? I les figures de quatre costats?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Conceptual; no figure precedes it on this page.",
    "_notaClassificacio": "cas triangle immediat; cas quadrilàter exigeix contraexemple"
  },
  {
    "id": "q09",
    "collectionId": "geometry-book-1",
    "pagina": 30,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q09_page30_triangle_cevian.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 30
    },
    "enunciat": {
      "en": "Show that if a right triangle is chopped into two smaller ones, they must both be similar to the original triangle.",
      "ca": "Demostra que si tallem un triangle rectangle en dos de més petits amb l'altura sobre la hipotenusa, tots dos han de ser semblants al triangle original."
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "A right triangle with a dashed cevian from the right-angle corner to the hypotenuse, directly below the question, same page.",
    "_notaClassificacio": "semblança via alçada sobre hipotenusa, argument clàssic"
  },
  {
    "id": "q10",
    "collectionId": "geometry-book-1",
    "pagina": 32,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "q10_page31_rhombus.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 31
    },
    "enunciat": {
      "en": "Are the opposite sides of a rhombus always parallel? Are the diagonals perpendicular?",
      "ca": "Els costats oposats d'un rombe, sempre són paral·lels? Les diagonals són perpendiculars?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "The rhombus (diamond-oriented) figure is on the PREVIOUS page (31), introducing the shape this question asks about, not on page 32 itself.",
    "_notaClassificacio": "directe per congruència de triangles"
  },
  {
    "id": "q11",
    "collectionId": "geometry-book-1",
    "pagina": 33,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "q11_page33_parallelogram.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 33
    },
    "enunciat": {
      "en": "A parallelogram is a four-sided polygon with opposite sides parallel (i.e., a slanted box). Must the opposite angles of a parallelogram be equal?",
      "ca": "Un paral·lelogram és un polígon de quatre costats amb els costats oposats paral·lels (és a dir, una caixa inclinada). Els angles oposats d'un paral·lelogram han de ser iguals?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "A parallelogram figure directly above the question, same page.",
    "_notaClassificacio": "directe des de la definició"
  },
  {
    "id": "q12",
    "collectionId": "geometry-book-1",
    "pagina": 33,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q12_page33_parallelogram.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 33
    },
    "enunciat": {
      "en": "Prove that a parallelogram with equal diagonals must be a rectangle.",
      "ca": "Demostra que un paral·lelogram amb les diagonals iguals ha de ser un rectangle."
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Shares the same parallelogram image as q11. Note: no diagonals are actually drawn in the source figure — a minor gap in the book itself, not an extraction error.",
    "_notaClassificacio": "cal el recíproc via triangles congruents"
  },
  {
    "id": "q13",
    "collectionId": "geometry-book-1",
    "pagina": 34,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "q13_page34_triangle_cevian.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 34
    },
    "enunciat": {
      "en": "Suppose we cut a triangle from one corner to the middle of the opposite side. Does the area get cut in half?",
      "ca": "Suposa que tallem un triangle des d'un vèrtex fins al punt mitjà del costat oposat. L'àrea queda partida per la meitat?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "A triangle with a dashed cevian from the apex to the midpoint of the base, directly below the question, same page.",
    "_notaClassificacio": "igual base i alçada"
  },
  {
    "id": "q14",
    "collectionId": "geometry-book-1",
    "pagina": 36,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "q14_page36_triangle_in_box.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 36
    },
    "enunciat": {
      "en": "Why does a triangle take up exactly half of its box?",
      "ca": "Per què un triangle ocupa exactament la meitat de la seva caixa?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "A triangle inscribed in a rectangle, apex connected to both top corners, directly above the question, same page.",
    "_notaClassificacio": "meitat de la caixa, directe"
  },
  {
    "id": "q15",
    "collectionId": "geometry-book-1",
    "pagina": 36,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q15_page36_triangle_in_box.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 36
    },
    "enunciat": {
      "en": "What happens to the area of the triangle as we slide the tip horizontally? What if it goes past the sides of the box?",
      "ca": "Què li passa a l'àrea del triangle quan desplacem el vèrtex horitzontalment? Què passa si sobrepassa els costats de la caixa?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Follow-up question about the same triangle-in-box figure used for q14 (identical image).",
    "_notaClassificacio": "cal tractar el cas en què el vèrtex surt de la caixa"
  },
  {
    "id": "q16",
    "collectionId": "geometry-book-1",
    "pagina": 36,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q16_page36_quad_midpoints.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 36
    },
    "enunciat": {
      "en": "Show that when we connect the midpoints of the sides of any four-sided shape, it forms a parallelogram. What is its area?",
      "ca": "Demostra que, en unir els punts mitjans dels costats d'una figura de quatre costats qualsevol, s'obté un paral·lelogram. Quina és la seva àrea?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "A four-sided shape with dashed lines connecting the midpoints of its sides, directly below the question, same page.",
    "_notaClassificacio": "teorema de Varignon: base mitjana + càlcul d'àrea"
  },
  {
    "id": "q17",
    "collectionId": "geometry-book-1",
    "pagina": 37,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "fig-138.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 37
    },
    "enunciat": {
      "en": "Can a polygon always be chopped into pieces and reassembled to form a square?",
      "ca": "Es pot sempre retallar un polígon en peces i recompondre'l com un quadrat?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Opens the page; no image anywhere nearby.",
    "_notaClassificacio": "dissecció general tipus Bolyai–Gerwien, construcció no trivial"
  },
  {
    "id": "q18a",
    "collectionId": "geometry-book-1",
    "pagina": 37,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "fig-139.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 37
    },
    "enunciat": {
      "en": "How does the volume of a box depend on the lengths of its sides?",
      "ca": "Com depèn el volum d'una caixa de les longituds dels seus costats?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Conceptual, no figure. (A square/moon-shape scaling illustration sits above it on the same page but supports a different, earlier question about area scaling.)",
    "_notaClassificacio": "fórmula directa V=abc"
  },
  {
    "id": "q18b",
    "collectionId": "geometry-book-1",
    "pagina": 37,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-140.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 37
    },
    "enunciat": {
      "en": "What is the effect of scaling on volume?",
      "ca": "Quin és l'efecte de l'escalat sobre el volum?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Same page as q18a; same caveat about the nearby area-scaling image not applying to this volume question.",
    "_notaClassificacio": "escalat cúbic, generalització moderada"
  },
  {
    "id": "q19",
    "collectionId": "geometry-book-1",
    "pagina": 39,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "fig-141.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 39
    },
    "enunciat": {
      "en": "Why is the product of two odd numbers always odd?",
      "ca": "Per què el producte de dos nombres senars és sempre senar?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Pure number theory, no image.",
    "_notaClassificacio": "aritmètica elemental"
  },
  {
    "id": "q20",
    "collectionId": "geometry-book-1",
    "pagina": 40,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "fig-142.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 40
    },
    "enunciat": {
      "en": "Why is the product of two even numbers always divisible by 4?",
      "ca": "Per què el producte de dos nombres parells sempre és divisible per 4?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Pure number theory, no image.",
    "_notaClassificacio": "aritmètica elemental"
  },
  {
    "id": "q21",
    "collectionId": "geometry-book-1",
    "pagina": 41,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": null,
    "enunciat": {
      "en": "Is √3 irrational? What about √2 + √3?",
      "ca": "És irracional √3? I √2 + √3?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Pure algebra, no image.",
    "_notaClassificacio": "prova d'irracionalitat + variant per la suma"
  },
  {
    "id": "q22",
    "collectionId": "geometry-book-1",
    "pagina": 41,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q22_page41_circles_in_square.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 41
    },
    "enunciat": {
      "en": "The big circles are clearly half as wide as the square. How about the small circle?",
      "ca": "Les circumferències grans clarament tenen la meitat d'amplada que el quadrat. I la circumferència petita?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Four large circles plus one small circle inscribed in a square, directly above the question, same page.",
    "_notaClassificacio": "relació pitagòrica amb incògnita"
  },
  {
    "id": "q23",
    "collectionId": "geometry-book-1",
    "pagina": 42,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q23_page42_three_circle_puzzles.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 42
    },
    "enunciat": {
      "en": "How big are these circles?",
      "ca": "Quant fan aquestes circumferències?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Three separate circle-in-shape puzzles, directly above the question, same page. Composited left-to-right matching the page layout.",
    "_notaClassificacio": "varies configuracions, àlgebra moderada"
  },
  {
    "id": "q24",
    "collectionId": "geometry-book-1",
    "pagina": 44,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-143.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 44
    },
    "enunciat": {
      "en": "Which rectangles have whole number sides and diagonals?",
      "ca": "Quins rectangles tenen els costats i les diagonals de nombre enter?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Numerical (Pythagorean triples); no dedicated image.",
    "_notaClassificacio": "ternes pitagòriques"
  },
  {
    "id": "q25",
    "collectionId": "geometry-book-1",
    "pagina": 44,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "q25_page44_box_diagonals.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 44
    },
    "enunciat": {
      "en": "How does the diagonal of a box depend on its three sides?",
      "ca": "Com depèn la diagonal d'una caixa dels seus tres costats?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "A 3D box with face and space diagonals drawn, directly below the question, same page.",
    "_notaClassificacio": "doble Pitàgores, gairebé immediat un cop es coneix el cas 2D"
  },
  {
    "id": "q26",
    "collectionId": "geometry-book-1",
    "pagina": 45,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "fig-144.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 45
    },
    "enunciat": {
      "en": "Show that the height of an equilateral triangle is (1/2)√3 times as long as its side.",
      "ca": "Demostra que l'altura d'un triangle equilàter és (1/2)√3 vegades el seu costat."
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "No image; algebraic derivation.",
    "_notaClassificacio": "Pitàgores directe"
  },
  {
    "id": "q27_implicit",
    "collectionId": "geometry-book-1",
    "pagina": 46,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q27_page46_implicit_circles.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 46
    },
    "enunciat": {
      "en": "Some geometry problems speak for themselves.",
      "ca": "Alguns problemes de geometria parlen per si sols."
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Special case: three diagrams (triangle, square, circle, each with inscribed circles) with only a one-line caption and no question sentence. The image IS the question.",
    "_notaClassificacio": "tres configuracions de circumferències inscrites, àlgebra moderada"
  },
  {
    "id": "q28",
    "collectionId": "geometry-book-1",
    "pagina": 48,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "fig-145.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 48
    },
    "enunciat": {
      "en": "What is the area of an equilateral triangle?",
      "ca": "Quina és l'àrea d'un triangle equilàter?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Opens the page; no image.",
    "_notaClassificacio": "conseqüència immediata de q26"
  },
  {
    "id": "q29",
    "collectionId": "geometry-book-1",
    "pagina": 48,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q29_page48_hexagon_octagon.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 48
    },
    "enunciat": {
      "en": "Can you measure the diagonals and areas of the regular hexagon and octagon?",
      "ca": "Es poden mesurar les diagonals i les àrees de l'hexàgon i l'octàgon regulars?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Hexagon and octagon, each with diagonals drawn from one vertex, directly above the question, same page (single combined figure).",
    "_notaClassificacio": "diverses diagonals i àrees, moderat"
  },
  {
    "id": "q30",
    "collectionId": "geometry-book-1",
    "pagina": 48,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q30_page48_dodecagon.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 48
    },
    "enunciat": {
      "en": "Can you measure the diagonals and area of the regular dodecagon?",
      "ca": "Es poden mesurar les diagonals i l'àrea del dodecàgon regular?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Dodecagon with diagonals from one vertex, directly above the question, same page.",
    "_notaClassificacio": "extensió de q29 a un cas més"
  },
  {
    "id": "q31",
    "collectionId": "geometry-book-1",
    "pagina": 49,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q31_page49_pentagon_ABC.png",
      "esCrop": true,
      "esInvertida": false,
      "paginaFont": 49
    },
    "enunciat": {
      "en": "Why are the three triangles similar? Why are the larger ones identical?",
      "ca": "Per què els tres triangles són semblants? Per què els més grans són idèntics?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Pentagon divided into triangles labeled A, B, C, directly above the question, same page. Cropped from the page render rather than extracted as a raster figure, specifically to preserve the A/B/C text labels, which are separate PDF text and not part of the line art.",
    "_notaClassificacio": "argument d'angles amb una idea principal"
  },
  {
    "id": "q32",
    "collectionId": "geometry-book-1",
    "pagina": 51,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "q32_page51_pentagram.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 51
    },
    "enunciat": {
      "en": "How big is the small pentagon?",
      "ca": "Quant fa el pentàgon petit?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Pentagon with all diagonals drawn, forming a pentagram with a small inner pentagon, directly above the question, same page.",
    "_notaClassificacio": "proporció àuria, autosemblança, equació quadràtica"
  },
  {
    "id": "q33",
    "collectionId": "geometry-book-1",
    "pagina": 52,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q33_page52_two_pentagons.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 52
    },
    "enunciat": {
      "en": "Use this configuration of two pentagons to give an alternate proof that the diagonal satisfies d² = d + 1.",
      "ca": "Fes servir aquesta configuració de dos pentàgons per donar una demostració alternativa que la diagonal compleix d² = d + 1."
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Two overlapping pentagons with dashed diagonals, directly above the question (which explicitly says 'this configuration'), same page.",
    "_notaClassificacio": "segona demostració guiada per la figura donada"
  },
  {
    "id": "q34",
    "collectionId": "geometry-book-1",
    "pagina": 53,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "fig-146.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 53
    },
    "enunciat": {
      "en": "Construct a mosaic design that demonstrates the algebraic relation (x + y)² = x² + 2xy + y².",
      "ca": "Construeix un disseny de mosaic que demostri la relació algebraica (x + y)² = x² + 2xy + y²."
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Special case: this question asks the READER to produce a diagram; there is no pre-existing figure to show, by design.",
    "_notaClassificacio": "identitat algebraica clàssica il·lustrada"
  },
  {
    "id": "q35",
    "collectionId": "geometry-book-1",
    "pagina": 54,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": null,
    "enunciat": {
      "en": "Suppose you are given both the sum and difference of two numbers. How can you determine the numbers themselves? What if it's the sum and product that are given?",
      "ca": "Suposa que et donen tant la suma com la diferència de dos nombres. Com pots determinar els nombres mateixos? I si et donen la suma i el producte?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Pure algebra, no image.",
    "_notaClassificacio": "àlgebra; el cas producte exigeix una quadràtica"
  },
  {
    "id": "q36",
    "collectionId": "geometry-book-1",
    "pagina": 55,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-147.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 55
    },
    "enunciat": {
      "en": "Show that among all rectangles of a fixed perimeter, the square has the largest area.",
      "ca": "Demostra que, entre tots els rectangles de perímetre fix, el quadrat és el que té l'àrea més gran."
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Conceptual, no image.",
    "_notaClassificacio": "optimització estàndard (AM-GM)"
  },
  {
    "id": "q37",
    "collectionId": "geometry-book-1",
    "pagina": 55,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-148.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 55
    },
    "enunciat": {
      "en": "Find a rectangle with the same area and perimeter as a given equilateral triangle.",
      "ca": "Troba un rectangle amb la mateixa àrea i el mateix perímetre que un triangle equilàter donat."
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "A rectangle-with-dashed-vertical-line image sits on this page. On closer inspection the dashed line simply bisects the rectangle in half — it doesn't clearly illustrate this question OR the golden-rectangle question that follows (q38). Treat that image as loosely associated with this part of the page rather than confidently belonging to either specific question.",
    "_notaClassificacio": "sistema de dues equacions"
  },
  {
    "id": "q38",
    "collectionId": "geometry-book-1",
    "pagina": 55,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q38_page55_golden_rectangle.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 55
    },
    "enunciat": {
      "en": "A golden rectangle has the property that when a square is removed, the remaining rectangle is similar to the original. What are the proportions of a golden rectangle?",
      "ca": "Un rectangle auri té la propietat que, en treure-li un quadrat, el rectangle que queda és semblant a l'original. Quines són les proporcions d'un rectangle auri?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "Rectangle with a dashed vertical line, directly above the question, same page. See q37's note — the dashed line's exact geometric meaning (bisection vs. square-removal) doesn't perfectly match this question's construction either; flagged as the best available candidate, not a confirmed exact match.",
    "_notaClassificacio": "equació d'autosemblança, quadràtica"
  },
  {
    "id": "q39",
    "collectionId": "geometry-book-1",
    "pagina": 58,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-149.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 58
    },
    "enunciat": {
      "en": "What is the area of a regular pentagon?",
      "ca": "Quina és l'àrea d'un pentàgon regular?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "combina diagonal/costat amb descomposició en triangles"
  },
  {
    "id": "q40_implicit",
    "collectionId": "geometry-book-1",
    "pagina": 58,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
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
      "ca": "Dues de les meves preferides."
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "circumferència+quadrat-notxa, circumferència+2circumferències+quadrat",
    "_notaClassificacio": "dues configuracions circumferència-quadrat, moderat"
  },
  {
    "id": "q41",
    "collectionId": "geometry-book-1",
    "pagina": 62,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q41_page62_diameter_right_angle.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 62
    },
    "enunciat": {
      "en": "When a point on a circle is connected to both ends of a diameter it always makes a right angle. Why?",
      "ca": "Quan un punt d'una circumferència es connecta amb els dos extrems d'un diàmetre, sempre forma un angle recte. Per què?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "semicercle, punt, angle marcat",
    "_notaClassificacio": "teorema de Tales, prova clàssica d'un pas"
  },
  {
    "id": "q42",
    "collectionId": "geometry-book-1",
    "pagina": 62,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q42_page62_same_arc_angles.png",
      "esCrop": false,
      "esInvertida": true,
      "paginaFont": 62
    },
    "enunciat": {
      "en": "Show that if two points are connected to the same arc, the resulting angles must be the same.",
      "ca": "Demostra que, si dos punts es connecten al mateix arc, els angles resultants han de ser iguals."
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "circumferència, dos punts, angles marcats",
    "_notaClassificacio": "teorema de l'angle inscrit, argument clàssic"
  },
  {
    "id": "q43",
    "collectionId": "geometry-book-1",
    "pagina": 65,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "q43_page65_overlapping_circles.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 65
    },
    "enunciat": {
      "en": "If two circles are arranged so that each passes through the center of the other, what are the area and perimeter of the overlap? What about for three overlapping circles?",
      "ca": "Si dues circumferències es disposen de manera que cadascuna passa pel centre de l'altra, quina és l'àrea i el perímetre de la intersecció? I per a tres circumferències superposades?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "dues circumferències superposades",
    "_notaClassificacio": "generalitza de 2 a 3 circumferències, segments circulars"
  },
  {
    "id": "q44",
    "collectionId": "geometry-book-1",
    "pagina": 66,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "q44_page66_tangent_circles_small.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 66
    },
    "enunciat": {
      "en": "Two circles lie on a line, touching each other at a point. A small circle is inscribed in the space between. How does its radius depend on the radii of the two larger circles?",
      "ca": "Dues circumferències es troben sobre una línia i es toquen en un punt. S'inscriu una circumferència petita a l'espai entre totes dues. Com depèn el seu radi dels radis de les dues circumferències grans?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "dues circumferències tangents + circumferència petita",
    "_notaClassificacio": "àlgebra amb diverses incògnites, tipus Descartes"
  },
  {
    "id": "q45",
    "collectionId": "geometry-book-1",
    "pagina": 69,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-150.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 69
    },
    "enunciat": {
      "en": "How can we measure the surface area of a (generalized) cylinder?",
      "ca": "Com podem mesurar l'àrea de la superfície d'un cilindre (generalitzat)?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "desenvolupament pla del cilindre, una idea neta"
  },
  {
    "id": "q46",
    "collectionId": "geometry-book-1",
    "pagina": 71,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-151.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 71
    },
    "enunciat": {
      "en": "What is the area of an ellipse?",
      "ca": "Quina és l'àrea d'una el·lipse?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "argument d'estirament des del cercle"
  },
  {
    "id": "q47",
    "collectionId": "geometry-book-1",
    "pagina": 73,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q47_page73_octahedron_cube.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 73
    },
    "enunciat": {
      "en": "The centers of the faces of a cube can be joined to form a regular octahedron. How much of the volume of the cube does it take up?",
      "ca": "Els centres de les cares d'un cub es poden unir per formar un octaedre regular. Quina part del volum del cub ocupa?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "octàedre dins del cub",
    "_notaClassificacio": "descomposició volumètrica moderada"
  },
  {
    "id": "q48",
    "collectionId": "geometry-book-1",
    "pagina": 74,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "q48_page74_frustum.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 74
    },
    "enunciat": {
      "en": "A square of side a is placed at a height h above a square of side b, forming an incomplete pyramid. How does its volume depend on a, b, and h?",
      "ca": "Un quadrat de costat a se situa a una altura h damunt d'un quadrat de costat b, formant una piràmide incompleta. Com depèn el seu volum de a, b i h?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "piràmide truncada, a/b/h marcats) [CORRECCIÓ: variables a,b,h mal col·locades a l'extracció automàtica, corregit aquí]",
    "_notaClassificacio": "fórmula multivariable (a,b,h), diversos passos"
  },
  {
    "id": "q49",
    "collectionId": "geometry-book-1",
    "pagina": 74,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q49_page74_tetrahedron_center.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 74
    },
    "enunciat": {
      "en": "Where is the center of a regular tetrahedron?",
      "ca": "On és el centre d'un tetraedre regular?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "tetraedre, centre marcat",
    "_notaClassificacio": "anàleg 3D del centre del triangle"
  },
  {
    "id": "q50",
    "collectionId": "geometry-book-1",
    "pagina": 75,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q50_page75_cone_disks.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 75
    },
    "enunciat": {
      "en": "Can you figure out the pattern to these approximations?",
      "ca": "Pots endevinar el patró d'aquestes aproximacions?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "con dividit en discos apilats",
    "_notaClassificacio": "reconeixement de patró en una seqüència d'aproximacions"
  },
  {
    "id": "q51",
    "collectionId": "geometry-book-1",
    "pagina": 78,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q51_page78_cone_in_cylinder.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 78
    },
    "enunciat": {
      "en": "How can we measure the surface area of a cone?",
      "ca": "Com podem mesurar l'àrea de la superfície d'un con?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "imatge propera no essencial (con dins cilindre, il·lustra volum no superfície)",
    "_notaClassificacio": "desenvolupament pla del con, un sol argument net"
  },
  {
    "id": "q52",
    "collectionId": "geometry-book-1",
    "pagina": 78,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-152.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 78
    },
    "enunciat": {
      "en": "Can you find a cross-section of a cube that is a regular hexagon?",
      "ca": "Pots trobar una secció transversal d'un cub que sigui un hexàgon regular?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "visualització espacial, una construcció"
  },
  {
    "id": "q53",
    "collectionId": "geometry-book-1",
    "pagina": 79,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 3,
    "imatge": { "fitxer": "pistes/fig-194.png", "esCrop": false, "esInvertida": false, "paginaFont": 79 },
    "enunciat": {
      "en": "Can you find two objects with equal cross-sections and different surface areas?",
      "ca": "Pots trobar dos objectes amb seccions transversals iguals i àrees de superfície diferents?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "imatge propera no essencial (formes de patata, il·lustra concepte Cavalieri, no exemple concret)",
    "_notaClassificacio": "cal construir un contraexemple genuí"
  },
  {
    "id": "q54",
    "collectionId": "geometry-book-1",
    "pagina": 80,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "q54_page80_cavalieri_plane.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 80
    },
    "enunciat": {
      "en": "Can you devise a Cavalieri principle for areas in the plane?",
      "ca": "Pots idear un principi de Cavalieri per a àrees en el pla?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "quadrat amb graons diagonals",
    "_notaClassificacio": "cal inventar un principi nou (anàleg pla de Cavalieri)"
  },
  {
    "id": "q55",
    "collectionId": "geometry-book-1",
    "pagina": 80,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "q55_page80_cavalieri_plane.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 80
    },
    "enunciat": {
      "en": "Why can't the method of exhaustion be used in this way to measure the diagonal of a square?",
      "ca": "Per què no es pot fer servir el mètode d'exhaustió d'aquesta manera per mesurar la diagonal d'un quadrat?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "mateix quadrat amb graons, compartit amb q54",
    "_notaClassificacio": "argument de límit subtil (paradoxa de l'escaleta)"
  },
  {
    "id": "q56",
    "collectionId": "geometry-book-1",
    "pagina": 81,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q56_page81_cube_diagonals.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 81
    },
    "enunciat": {
      "en": "The diagonals of a cube form a regular tetrahedron. How much of the cube does it take up?",
      "ca": "Les diagonals d'un cub formen un tetraedre regular. Quina part del cub ocupa?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "cub amb diagonals",
    "_notaClassificacio": "càlcul de volum moderat"
  },
  {
    "id": "q57",
    "collectionId": "geometry-book-1",
    "pagina": 82,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "fig-153.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 82
    },
    "enunciat": {
      "en": "What are the volumes of the Platonic solids? How about the other symmetrical polyhedra?",
      "ca": "Quins són els volums dels sòlids platònics? I els d'altres poliedres simètrics?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "multi-cas, obert, diversos sòlids"
  },
  {
    "id": "q58",
    "collectionId": "geometry-book-1",
    "pagina": 82,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "q58_page82_perpendicular_cylinders.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 82
    },
    "enunciat": {
      "en": "Suppose two identical cylinders meet at right angles. What does their intersection look like, and what is its volume? What about three mutually perpendicular cylinders?",
      "ca": "Suposa que dos cilindres idèntics es troben en angle recte. Quin aspecte té la seva intersecció, i quin volum té? I per a tres cilindres mútuament perpendiculars?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "dos cilindres perpendiculars",
    "_notaClassificacio": "sòlid de Steinmetz, generalització a 3 cilindres"
  },
  {
    "id": "q59",
    "collectionId": "geometry-book-1",
    "pagina": 86,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q59_page86_sphere_in_cube.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 86
    },
    "enunciat": {
      "en": "How much of a cube does a sphere occupy? Is it more than half?",
      "ca": "Quina part d'un cub ocupa una esfera? És més de la meitat?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "esfera dins del cub",
    "_notaClassificacio": "cal la fórmula del volum de l'esfera abans de comparar"
  },
  {
    "id": "q60",
    "collectionId": "geometry-book-1",
    "pagina": 87,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q60_page87_cone_in_hemisphere.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 87
    },
    "enunciat": {
      "en": "Show that a cone in a hemisphere occupies exactly half the volume.",
      "ca": "Demostra que un con dins d'un hemisferi ocupa exactament la meitat del volum."
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "hemisferi amb con inscrit",
    "_notaClassificacio": "argument net d'un sol pas"
  },
  {
    "id": "q61",
    "collectionId": "geometry-book-1",
    "pagina": 88,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-154.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 88
    },
    "enunciat": {
      "en": "Show that the surface area of a sphere is exactly two-thirds that of its (closed) cylinder.",
      "ca": "Demostra que l'àrea de la superfície d'una esfera és exactament dos terços de la del seu cilindre (tancat)."
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "resultat clàssic d'Arquimedes, un argument"
  },
  {
    "id": "q62",
    "collectionId": "geometry-book-1",
    "pagina": 89,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "q62_page89_spherical_cap.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 89
    },
    "enunciat": {
      "en": "What are the volume and surface area of a spherical cap?",
      "ca": "Quins són el volum i l'àrea de la superfície d'un casquet esfèric?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "esfera amb casquet marcat",
    "_notaClassificacio": "dues fórmules, combina resultats anteriors"
  },
  {
    "id": "q63",
    "collectionId": "geometry-book-1",
    "pagina": 91,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 1,
    "imatge": { "fitxer": "fig-210.png", "esCrop": false, "esInvertida": false, "paginaFont": 91 },
    "enunciat": {
      "en": "Can you think of two different ways that a cylinder can be regarded as the result of a motion?",
      "ca": "Se t'acudeixen dues maneres diferents de considerar un cilindre com el resultat d'un moviment?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "imatge propera no essencial (rectangle amb fletxa, il·lustra \"moviment\" en general)",
    "_notaClassificacio": "conceptual i directe"
  },
  {
    "id": "q64",
    "collectionId": "geometry-book-1",
    "pagina": 97,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-155.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 97
    },
    "enunciat": {
      "en": "What is the perimeter of a region formed by a moving stick?",
      "ca": "Quin és el perímetre d'una regió formada per un bastó en moviment?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "raonament d'envolupant, moderat"
  },
  {
    "id": "q65",
    "collectionId": "geometry-book-1",
    "pagina": 101,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 3,
    "imatge": { "fitxer": "fig-211.png", "esCrop": false, "esInvertida": false, "paginaFont": 101 },
    "enunciat": {
      "en": "How should we define the centroid of a shape? Can we do it in such a way that Pappus's theorem holds?",
      "ca": "Com hauríem de definir el centroide d'una figura? Ho podem fer de manera que es compleixi el teorema de Pappus?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "cal una definició nova i genuïna perquè Pappus funcioni"
  },
  {
    "id": "q66",
    "collectionId": "geometry-book-1",
    "pagina": 101,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q66_page101_pappus_cylinder.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 101
    },
    "enunciat": {
      "en": "Show that Pappus's theorem works for a cylinder formed by rotating a rectangle.",
      "ca": "Demostra que el teorema de Pappus funciona per a un cilindre format en fer girar un rectangle."
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "cilindre amb fletxa de rotació",
    "_notaClassificacio": "aplicació/verificació directa de Pappus"
  },
  {
    "id": "q67",
    "collectionId": "geometry-book-1",
    "pagina": 102,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": null,
    "enunciat": {
      "en": "How should we define the centroid of perimeter?",
      "ca": "Com hauríem de definir el centroide del perímetre?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "anàleg conceptual de q65 per al perímetre"
  },
  {
    "id": "q68",
    "collectionId": "geometry-book-1",
    "pagina": 103,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q68_page103_cone_centroid.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 103
    },
    "enunciat": {
      "en": "If we rotate a right triangle it forms a cone. Assuming Pappus is right, where must the centroid of the triangle be?",
      "ca": "Si fem girar un triangle rectangle, forma un con. Suposant que Pappus té raó, on ha d'estar el centroide del triangle?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "con amb centroide marcat",
    "_notaClassificacio": "aplicació d'un sol pas de Pappus"
  },
  {
    "id": "q69",
    "collectionId": "geometry-book-1",
    "pagina": 103,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-156.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 103
    },
    "enunciat": {
      "en": "Can you find the centroid of a semicircle? How about its centroid of perimeter?",
      "ca": "Pots trobar el centroide d'un semicercle? I el seu centroide de perímetre?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "dos càlculs relacionats (àrea i perímetre)"
  },
  {
    "id": "q70",
    "collectionId": "geometry-book-1",
    "pagina": 105,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "fig-157.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 105
    },
    "enunciat": {
      "en": "What do the inside angles of a polygon add up to?",
      "ca": "Quant sumen els angles interns d'un polígon?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "resultat estàndard directe"
  },
  {
    "id": "q71",
    "collectionId": "geometry-book-1",
    "pagina": 106,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-158.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 106
    },
    "enunciat": {
      "en": "If all the angles of a simple closed four-sided polygon are right angles, what condition must the side lengths satisfy?",
      "ca": "Si tots els angles d'un polígon simple tancat de quatre costats són rectes, quina condició han de complir les longituds dels costats?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "condició de tancament sobre les longituds"
  },
  {
    "id": "q72",
    "collectionId": "geometry-book-1",
    "pagina": 106,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-159.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 106
    },
    "enunciat": {
      "en": "Make a short list of lengths and turns. What triangle problems do you need to solve in order to determine if your polygon is closed?",
      "ca": "Fes una llista curta de longituds i girs. Quins problemes de triangles cal resoldre per determinar si el teu polígon és tancat?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "pregunta de síntesi moderada"
  },
  {
    "id": "q73",
    "collectionId": "geometry-book-1",
    "pagina": 107,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-160.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 107
    },
    "enunciat": {
      "en": "Are the midpoints of the sides of a triangle enough information to reconstruct the triangle? How about for four-sided polygons?",
      "ca": "Els punts mitjans dels costats d'un triangle són prou informació per reconstruir el triangle? I per als polígons de quatre costats?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "cas triangle directe; cas quadrilàter exigeix contraexemple"
  },
  {
    "id": "q74",
    "collectionId": "geometry-book-1",
    "pagina": 107,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "fig-161.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 107
    },
    "enunciat": {
      "en": "Do any three lengths form a triangle?",
      "ca": "Qualsevol tria de tres longituds forma un triangle?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "desigualtat triangular, directe"
  },
  {
    "id": "q75",
    "collectionId": "geometry-book-1",
    "pagina": 114,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": { "fitxer": "fig-212.png", "esCrop": false, "esInvertida": false, "paginaFont": 114 },
    "enunciat": {
      "en": "Can you find two different triangles with the same area and perimeter?",
      "ca": "Pots trobar dos triangles diferents amb la mateixa àrea i el mateix perímetre?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "cal construir un exemple"
  },
  {
    "id": "q76",
    "collectionId": "geometry-book-1",
    "pagina": 114,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q76_page114_triangle_incircle_abc.png",
      "esCrop": true,
      "esInvertida": false,
      "paginaFont": 114
    },
    "enunciat": {
      "en": "If a triangle has sides a, b, and c, what is the radius of the inscribed circle?",
      "ca": "Si un triangle té costats a, b i c, quin és el radi de la circumferència inscrita?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "triangle amb circumferència inscrita, a/b/c marcats",
    "_notaClassificacio": "relació A=rs, derivació moderada"
  },
  {
    "id": "q77",
    "collectionId": "geometry-book-1",
    "pagina": 116,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": { "fitxer": "fig-213.png", "esCrop": false, "esInvertida": false, "paginaFont": 116 },
    "enunciat": {
      "en": "There is actually another technique for measuring lengths, which we used for the diagonal of a regular pentagon. What is it?",
      "ca": "En realitat hi ha una altra tècnica per mesurar longituds, que vam fer servir per a la diagonal d'un pentàgon regular. Quina és?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "imatge propera no essencial (triangles amb angle C, il·lustren l'argument previ de la llei del cosinus)",
    "_notaClassificacio": "reaplicar una tècnica ja vista en un context nou"
  },
  {
    "id": "q78",
    "collectionId": "geometry-book-1",
    "pagina": 120,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "q78_page120_sine_cosine_triangle.png",
      "esCrop": true,
      "esInvertida": false,
      "paginaFont": 120
    },
    "enunciat": {
      "en": "How are the sines and cosines of the two angles of a right triangle related to each other?",
      "ca": "Com es relacionen entre si els sinus i els cosinus dels dos angles d'un triangle rectangle?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "triangle rectangle amb hipotenusa/oposat/adjacent etiquetats",
    "_notaClassificacio": "angles complementaris, directe"
  },
  {
    "id": "q79",
    "collectionId": "geometry-book-1",
    "pagina": 121,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "q79_page121_generalized_pythagorean.png",
      "esCrop": true,
      "esInvertida": false,
      "paginaFont": 121
    },
    "enunciat": {
      "en": "Show that in this case we get c^2 = a^2 + b^2 + 2ab cos C'.",
      "ca": "Demostra que, en aquest cas, obtenim c² = a² + b² + 2ab cos C'."
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "triangle amb angle extern C' marcat) [CORRECCIÓ: fórmula garbled a l'extracció automàtica, corregida aquí llegint la imatge]",
    "_notaClassificacio": "teorema del cosinus generalitzat, més àlgebra/trig"
  },
  {
    "id": "q80",
    "collectionId": "geometry-book-1",
    "pagina": 124,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-162.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 124
    },
    "enunciat": {
      "en": "Show that if a triangle has sides a and b meeting at an angle C, then its area is (1/2)ab sin C.",
      "ca": "Demostra que, si un triangle té els costats a i b que es troben formant un angle C, la seva àrea és (1/2)ab sin C."
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "fórmula trigonomètrica de l'àrea, derivació estàndard"
  },
  {
    "id": "q81",
    "collectionId": "geometry-book-1",
    "pagina": 124,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "fig-163.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 124
    },
    "enunciat": {
      "en": "What is the angle between the faces of a regular tetrahedron? How about for the other regular polyhedra?",
      "ca": "Quin és l'angle entre les cares d'un tetraedre regular? I per als altres poliedres regulars?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "angle diedre, trig 3D, multi-cas per altres sòlids"
  },
  {
    "id": "q82",
    "collectionId": "geometry-book-1",
    "pagina": 124,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "fig-164.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 124
    },
    "enunciat": {
      "en": "Show that you can fill space completely using regular octahedrons and tetrahedrons. Can you find any other ways to tile three-dimensional space with symmetrical polyhedra?",
      "ca": "Demostra que es pot omplir l'espai completament fent servir octaedres i tetraedres regulars. Pots trobar altres maneres d'enrajolar l'espai tridimensional amb poliedres simètrics?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "exploració oberta de tesel·lacions de l'espai"
  },
  {
    "id": "q83",
    "collectionId": "geometry-book-1",
    "pagina": 125,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "fig-165.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 125
    },
    "enunciat": {
      "en": "What are the sine and cosine of one-sixth of a turn?",
      "ca": "Quins són el sinus i el cosinus d'un sisè de volta?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "directe des del triangle equilàter"
  },
  {
    "id": "q84",
    "collectionId": "geometry-book-1",
    "pagina": 125,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": null,
    "enunciat": {
      "en": "What is the relationship between the sine and cosine of an angle?",
      "ca": "Quina és la relació entre el sinus i el cosinus d'un angle?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "identitat pitagòrica directa"
  },
  {
    "id": "q85",
    "collectionId": "geometry-book-1",
    "pagina": 128,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "fig-166.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 128
    },
    "enunciat": {
      "en": "Can you use a regular pentagon to find the sine and cosine of one-fifth of a turn?",
      "ca": "Es pot fer servir un pentàgon regular per trobar el sinus i el cosinus d'un cinquè de volta?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "combina proporció àuria amb trigonometria"
  },
  {
    "id": "q86",
    "collectionId": "geometry-book-1",
    "pagina": 129,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-167.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 129
    },
    "enunciat": {
      "en": "Why are two sides and an angle insufficient in general to specify a triangle?",
      "ca": "Per què dos costats i un angle no basten, en general, per determinar un triangle?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "cal construir un contraexemple/segona solució"
  },
  {
    "id": "q87",
    "collectionId": "geometry-book-1",
    "pagina": 131,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": null,
    "enunciat": {
      "en": "How should we define the sine of an obtuse angle? Can we do it so the law of sines still holds?",
      "ca": "Com hauríem de definir el sinus d'un angle obtús? Ho podem fer de manera que el teorema del sinus encara es compleixi?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "imatge propera no essencial (triangle a/b/h/A/B, il·lustra l'argument previ de la llei dels sinus per a angles aguts)",
    "_notaClassificacio": "extensió de definició + verificació"
  },
  {
    "id": "q88",
    "collectionId": "geometry-book-1",
    "pagina": 132,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": null,
    "enunciat": {
      "en": "How are the sine and cosine of an angle related to the sine and cosine of an angle twice as large?",
      "ca": "Com es relacionen el sinus i el cosinus d'un angle amb el sinus i el cosinus d'un angle del doble de mida?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "derivació trigonomètrica estàndard"
  },
  {
    "id": "q89",
    "collectionId": "geometry-book-1",
    "pagina": 132,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "fig-168.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 132
    },
    "enunciat": {
      "en": "Prove that if two angle bisectors of a triangle are equal, then the triangle must be isosceles.",
      "ca": "Demostra que, si dues bisectrius d'un triangle són iguals, el triangle ha de ser isòsceles."
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "teorema de Steiner–Lehmus, demostració indirecta cèlebre"
  },
  {
    "id": "q90",
    "collectionId": "geometry-book-1",
    "pagina": 132,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "fig-169.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 132
    },
    "enunciat": {
      "en": "Show that if a four-sided shape with sides a, b, c, and d is inscribed in a circle, then its area is given by Brahmagupta's formula: A = sqrt[(s-a)(s-b)(s-c)(s-d)], where s = (1/2)(a+b+c+d).",
      "ca": "Demostra que, si una figura de quatre costats amb costats a, b, c i d està inscrita en una circumferència, la seva àrea ve donada per la fórmula de Brahmagupta: A = √[(s-a)(s-b)(s-c)(s-d)], on s = (1/2)(a+b+c+d)."
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "sense imatge [fórmula corregida llegint la imatge, l'extracció automàtica l'havia garbled]",
    "_notaClassificacio": "derivació algebraica avançada (fórmula de Brahmagupta)"
  },
  {
    "id": "q91",
    "collectionId": "geometry-book-1",
    "pagina": 138,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q91_page138_dilation_planes.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 138
    },
    "enunciat": {
      "en": "How exactly does the dilation factor depend on the angle between the planes?",
      "ca": "Com depèn exactament el factor d'escala de l'angle entre els plans?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "dos plans amb bastons projectats",
    "_notaClassificacio": "relació trigonomètrica moderada entre plans"
  },
  {
    "id": "q92",
    "collectionId": "geometry-book-1",
    "pagina": 139,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q92_page139_projection_direction.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 139
    },
    "enunciat": {
      "en": "Do projections in any direction always produce dilations?",
      "ca": "Les projeccions en qualsevol direcció sempre produeixen homotècies?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "dos plans inclinats amb punt projectat",
    "_notaClassificacio": "cal considerar la dependència de la direcció"
  },
  {
    "id": "q93",
    "collectionId": "geometry-book-1",
    "pagina": 143,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q93_page143_sphere_tangents.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 143
    },
    "enunciat": {
      "en": "Why do the tangents from a given point to a sphere all have the same length?",
      "ca": "Per què totes les tangents d'un punt donat a una esfera tenen la mateixa longitud?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "esfera amb tangents des d'un punt",
    "_notaClassificacio": "argument pitagòric net via triangles al centre"
  },
  {
    "id": "q94",
    "collectionId": "geometry-book-1",
    "pagina": 144,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": { "fitxer": "fig-214.png", "esCrop": false, "esInvertida": false, "paginaFont": 144 },
    "enunciat": {
      "en": "A circle is a special type of ellipse. Where are its focal points?",
      "ca": "Una circumferència és un tipus especial d'el·lipse. On són els seus focus?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "cas trivial/degenerat: els focus coincideixen al centre"
  },
  {
    "id": "q95",
    "collectionId": "geometry-book-1",
    "pagina": 146,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "q95_page146_circle_tangent_radius.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 146
    },
    "enunciat": {
      "en": "Why is the tangent to a circle perpendicular to the radius?",
      "ca": "Per què la tangent a una circumferència és perpendicular al radi?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "circumferència amb radi i tangent",
    "_notaClassificacio": "prova clàssica senzilla"
  },
  {
    "id": "q96",
    "collectionId": "geometry-book-1",
    "pagina": 150,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q96_page150_shortest_path_ellipse.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 150
    },
    "enunciat": {
      "en": "Why does the shortest path make equal angles with the line?",
      "ca": "Per què el camí més curt forma angles iguals amb la línia?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "el·lipse amb tangent i angles",
    "_notaClassificacio": "principi de reflexió, moderat"
  },
  {
    "id": "q97",
    "collectionId": "geometry-book-1",
    "pagina": 151,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q97_page151_parallel_lines_path.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 151
    },
    "enunciat": {
      "en": "Suppose two points lie between parallel lines. What is the shortest path from one to the other that hits both lines?",
      "ca": "Suposa que dos punts es troben entre dues línies paral·leles. Quin és el camí més curt d'un a l'altre que toqui totes dues línies?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "línies paral·leles, camí en zigzag",
    "_notaClassificacio": "dues reflexions, moderat"
  },
  {
    "id": "q98",
    "collectionId": "geometry-book-1",
    "pagina": 154,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "fig-170.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 154
    },
    "enunciat": {
      "en": "Can you see how to make a rough model of an ellipse using a pencil, two thumbtacks, and a piece of string?",
      "ca": "Se t'acut com fer un model aproximat d'una el·lipse fent servir un llapis, dues xinxetes i un tros de fil?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "idea conceptual directa, sense demostració"
  },
  {
    "id": "q99",
    "collectionId": "geometry-book-1",
    "pagina": 156,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 3,
    "imatge": { "fitxer": "fig-215.png", "esCrop": false, "esInvertida": false, "paginaFont": 156 },
    "enunciat": {
      "en": "Can you work out the details of this proof?",
      "ca": "Pots treballar els detalls d'aquesta demostració?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "sense imatge [pregunta gen\\u00e8rica recurrent, torna a aparèixer p173]",
    "_notaClassificacio": "'work out the details' -- bona part de la prova es deixa al lector"
  },
  {
    "id": "q100",
    "collectionId": "geometry-book-1",
    "pagina": 159,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-171.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 159
    },
    "enunciat": {
      "en": "What is the effect of central projection when the planes are parallel? What if the projection point lies between the planes?",
      "ca": "Quin és l'efecte de la projecció central quan els plans són paral·lels? Què passa si el punt de projecció es troba entre els plans?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "imatge propera no essencial (tres figures il·lustren secciones còniques com a projeccions, no específicament aquest cas)",
    "_notaClassificacio": "dos subcasos (plans paral·lels / punt entremig)"
  },
  {
    "id": "q101",
    "collectionId": "geometry-book-1",
    "pagina": 160,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "fig-172.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 160
    },
    "enunciat": {
      "en": "Can any three points on a line be projected to any other three collinear points? How about four points?",
      "ca": "Es poden projectar tres punts qualssevol d'una línia sobre qualsevol altra tria de tres punts col·lineals? I quatre punts?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "invariància de la raó doble, idea projectiva profunda"
  },
  {
    "id": "q102",
    "collectionId": "geometry-book-1",
    "pagina": 160,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": null,
    "enunciat": {
      "en": "Are all triangles the same projectively? How about all four-sided polygons?",
      "ca": "Tots els triangles són iguals projectivament? I tots els polígons de quatre costats?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "extensió moderada de les idees projectives prèvies"
  },
  {
    "id": "q103",
    "collectionId": "geometry-book-1",
    "pagina": 161,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q103_page161_polygon_projection.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 161
    },
    "enunciat": {
      "en": "Is a projection of a polygon always a polygon?",
      "ca": "La projecció d'un polígon sempre és un polígon?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "dos plans amb punts col·lineals projectats",
    "_notaClassificacio": "cal considerar el cas del punt a l'infinit"
  },
  {
    "id": "q104",
    "collectionId": "geometry-book-1",
    "pagina": 163,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-173.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 163
    },
    "enunciat": {
      "en": "What does a projection of three parallel lines look like?",
      "ca": "Quin aspecte té la projecció de tres línies paral·leles?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "imatge rellevant a la pàgina SEGÜENT (p164, vies de tren convergint a un punt de fuga), connectada explícitament pel text (\"by the way, it is precisely this feature...\")",
    "_notaClassificacio": "idea del punt de fuga, un sol pas"
  },
  {
    "id": "q105",
    "collectionId": "geometry-book-1",
    "pagina": 167,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "q105_page167_projective_lines_infinity.png",
      "esCrop": true,
      "esInvertida": false,
      "paginaFont": 167
    },
    "enunciat": {
      "en": "Do two lines in projective space necessarily intersect?",
      "ca": "Dues línies en l'espai projectiu s'intersequen necessàriament?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "plans amb línies convergint a un punt marcat ∞",
    "_notaClassificacio": "conseqüència gairebé immediata d'afegir punts a l'infinit"
  },
  {
    "id": "q106",
    "collectionId": "geometry-book-1",
    "pagina": 168,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 3,
    "imatge": null,
    "enunciat": {
      "en": "Can you discover a projective invariant?",
      "ca": "Pots descobrir un invariant projectiu?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "descobriment obert (raó doble)"
  },
  {
    "id": "q107",
    "collectionId": "geometry-book-1",
    "pagina": 170,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "q107_page170_hyperbola_infinity.png",
      "esCrop": true,
      "esInvertida": false,
      "paginaFont": 170
    },
    "enunciat": {
      "en": "When a cone is sliced by a plane to form a hyperbola, which two points on the circle are projected to infinity?",
      "ca": "Quan un con es talla amb un pla per formar una hipèrbola, quins dos punts de la circumferència es projecten a l'infinit?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "hipèrbola=circumferència amb ∞, corbes amb fletxes",
    "_notaClassificacio": "combina geometria del con amb idea projectiva"
  },
  {
    "id": "q108",
    "collectionId": "geometry-book-1",
    "pagina": 171,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "fig-174.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 171
    },
    "enunciat": {
      "en": "Shine a flashlight on the wall at various angles. Can you see all three types of conic section?",
      "ca": "Il·lumina la paret amb una llanterna en diversos angles. Pots veure els tres tipus de secció cònica?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "exploració observacional directa"
  },
  {
    "id": "q109",
    "collectionId": "geometry-book-1",
    "pagina": 173,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "q109_page173_double_cone_spheres.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 173
    },
    "enunciat": {
      "en": "Can you work out the details of this proof?",
      "ca": "Pots treballar els detalls d'aquesta demostració?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "doble con amb esferes i tangents) [2a aparició d'aquesta pregunta genèrica; 1a era a p156 sense imatge]",
    "_notaClassificacio": "prova de Dandelin, diversos lemes"
  },
  {
    "id": "q110",
    "collectionId": "geometry-book-1",
    "pagina": 173,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q110_page173_hyperbola_symmetry.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 173
    },
    "enunciat": {
      "en": "Why do hyperbolas have so much symmetry?",
      "ca": "Per què les hipèrboles tenen tanta simetria?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "dues branques d'hipèrbola amb eixos de simetria",
    "_notaClassificacio": "argument analític de simetria sobre l'equació"
  },
  {
    "id": "q111",
    "collectionId": "geometry-book-1",
    "pagina": 175,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q111_page175_hyperbola_diamond.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 175
    },
    "enunciat": {
      "en": "Why is the focal constant of a hyperbola equal to the side of the diamond?",
      "ca": "Per què la constant focal d'una hipèrbola és igual al costat del rombe?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "diamant format per la hipèrbola i tangents",
    "_notaClassificacio": "derivació moderada des del rectangle d'asímptotes"
  },
  {
    "id": "q112",
    "collectionId": "geometry-book-1",
    "pagina": 177,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q112_page177_right_hyperbola.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 177
    },
    "enunciat": {
      "en": "Why is every hyperbola a dilation of a right hyperbola?",
      "ca": "Per què tota hipèrbola és un estirament d'una hipèrbola rectangular?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "hipèrbola recta amb diagonals",
    "_notaClassificacio": "àlgebra moderada, forma xy=c"
  },
  {
    "id": "q113",
    "collectionId": "geometry-book-1",
    "pagina": 178,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-175.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 178
    },
    "enunciat": {
      "en": "If an ellipse has long radius a and short radius b, where are its focal points?",
      "ca": "Si una el·lipse té radi llarg a i radi curt b, on són els seus focus?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "derivació directa de c²=a²-b²"
  },
  {
    "id": "q114",
    "collectionId": "geometry-book-1",
    "pagina": 178,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q114_page178_unit_hyperbola.png",
      "esCrop": true,
      "esInvertida": false,
      "paginaFont": 178
    },
    "enunciat": {
      "en": "Where are the focal points of a unit hyperbola? What if we dilate it by factors a and b?",
      "ca": "On són els focus d'una hipèrbola unitat? Què passa si la dilatem per factors a i b?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "hipèrbola unitat marcada amb \"1\"",
    "_notaClassificacio": "extensió moderada del raonament de q113"
  },
  {
    "id": "q115",
    "collectionId": "geometry-book-1",
    "pagina": 179,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": { "fitxer": "fig-216.png", "esCrop": false, "esInvertida": false, "paginaFont": 179 },
    "enunciat": {
      "en": "Show that the focal constant of an ellipse or hyperbola is equal to its diameter.",
      "ca": "Demostra que la constant focal d'una el·lipse o d'una hipèrbola és igual al seu diàmetre."
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "derivació algebraica moderada"
  },
  {
    "id": "q116",
    "collectionId": "geometry-book-1",
    "pagina": 179,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "fig-176.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 179
    },
    "enunciat": {
      "en": "Can you discover the tangent property of a hyperbola?",
      "ca": "Pots descobrir la propietat de la tangent d'una hipèrbola?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "descobriment obert d'una propietat nova"
  },
  {
    "id": "q117",
    "collectionId": "geometry-book-1",
    "pagina": 182,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "q117_page182_parabola_dilations.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 182
    },
    "enunciat": {
      "en": "What about dilations of a parabola?",
      "ca": "Què passa amb les homotècies d'una paràbola?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "dues paràboles de diferent obertura amb focus marcat",
    "_notaClassificacio": "totes les paràboles són semblants, directe"
  },
  {
    "id": "q118",
    "collectionId": "geometry-book-1",
    "pagina": 183,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "q118_page183_parabola_tangent_proof.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 183
    },
    "enunciat": {
      "en": "Can you prove this tangent property directly, without any \\\"infinity\\\" mumbo-jumbo?",
      "ca": "Pots demostrar directament aquesta propietat de la tangent, sense cap mena de \"trucs de l'infinit\"?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "paràbola amb focus i rebot cap a l'infinit",
    "_notaClassificacio": "exigeix una prova alternativa rigorosa, més difícil"
  },
  {
    "id": "q119",
    "collectionId": "geometry-book-1",
    "pagina": 184,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "q119_page184_parabola_envelope.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 184
    },
    "enunciat": {
      "en": "If you connect lines in this evenly spaced pattern, a parabola appears. Why?",
      "ca": "Si connectes línies seguint aquest patró equidistant, apareix una paràbola. Per què?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "patró de línies formant l'envolupant parabòlica",
    "_notaClassificacio": "connectar una construcció discreta amb la corba contínua"
  },
  {
    "id": "q120",
    "collectionId": "geometry-book-1",
    "pagina": 186,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "q120_page186_parabolic_sector.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 186
    },
    "enunciat": {
      "en": "Why is the area of a parabolic sector equal to half the area of the parabolic rectangle?",
      "ca": "Per què l'àrea d'un sector parabòlic és igual a la meitat de l'àrea del rectangle parabòlic?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "paràbola amb sector triangular",
    "_notaClassificacio": "resultat clàssic net, un argument principal"
  },
  {
    "id": "q121",
    "collectionId": "geometry-book-1",
    "pagina": 186,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "q121_page186_parabolic_section_box.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 186
    },
    "enunciat": {
      "en": "Show that a parabolic section takes up exactly two-thirds of its box.",
      "ca": "Demostra que una secció parabòlica ocupa exactament dos terços de la seva caixa."
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "paràbola inscrita en un quadrat",
    "_notaClassificacio": "resultat d'Arquimedes, exhaustió/límits"
  },
  {
    "id": "q122",
    "collectionId": "geometry-book-1",
    "pagina": 190,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "q122_page190_spiral_motion.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 190
    },
    "enunciat": {
      "en": "How can we view a spiral as the result of a motion?",
      "ca": "Com podem veure una espiral com el resultat d'un moviment?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "espiral amb fletxa",
    "_notaClassificacio": "conceptual i directe"
  },
  {
    "id": "q123",
    "collectionId": "geometry-book-1",
    "pagina": 191,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "q123_page191_helix_length.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 191
    },
    "enunciat": {
      "en": "How can we measure the length of a helix?",
      "ca": "Com podem mesurar la longitud d'una hèlix?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "hèlix sobre cilindre, tipus pal de barber",
    "_notaClassificacio": "cal 'desenrotllar' l'hèlix, idea genuïnament nova"
  },
  {
    "id": "q124",
    "collectionId": "geometry-book-1",
    "pagina": 192,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "q124_page192_hypocycloid_epicycloid.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 192
    },
    "enunciat": {
      "en": "How does the number of cusps of a hypocycloid depend on the radii of the two circles? What about for an epicycloid?",
      "ca": "Com depèn el nombre de cúspides d'una hipocicloide dels radis de les dues circumferències? I en el cas d'una epicicloide?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "hipocicloide i epicicloide",
    "_notaClassificacio": "condició sobre la raó de radis, idea nova"
  },
  {
    "id": "q125",
    "collectionId": "geometry-book-1",
    "pagina": 192,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 1,
    "imatge": {
      "fitxer": "q125_page192_spirograph.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 192
    },
    "enunciat": {
      "en": "What happens if the tracing point is at the center?",
      "ca": "Què passa si el punt que traça la corba és al centre?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": "figura d'espirògraf",
    "_notaClassificacio": "cas degenerat directe (es converteix en circumferència)"
  },
  {
    "id": "q126",
    "collectionId": "geometry-book-1",
    "pagina": 193,
    "curs": null,
    "interaccio": null,
    "dimensio": "3D",
    "dificultat": 2,
    "imatge": {
      "fitxer": "fig-177.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 193
    },
    "enunciat": {
      "en": "Can you think of a way to describe a helix on a torus?",
      "ca": "Se t'acut alguna manera de descriure una hèlix sobre un tor?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "generalització conceptual oberta"
  },
  {
    "id": "q127",
    "collectionId": "geometry-book-1",
    "pagina": 193,
    "curs": null,
    "interaccio": null,
    "dimensio": "2D",
    "dificultat": 3,
    "imatge": {
      "fitxer": "fig-178.png",
      "esCrop": false,
      "esInvertida": false,
      "paginaFont": 193
    },
    "enunciat": {
      "en": "A ladder slips down the wall until it hits the floor. What curve does its midpoint describe?",
      "ca": "Una escala llisca per la paret fins que toca el terra. Quina corba descriu el seu punt mitjà?"
    },
    "pista": {
      "en": null,
      "ca": null
    },
    "notaEditorial": {
      "en": null,
      "ca": null
    },
    "_notaExtraccio": null,
    "_notaClassificacio": "traçar l'astroide, calen parametrització i idea nova"
  }
];
