/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/data/glossari-dades.js
  ROL:          Glossari de termes de geometria. Font única de dades per a
                les DUES superfícies que en llegeixen (v. GLOSSARY-DESIGN-
                NOTES.md §1): la vista de navegació sempre disponible
                (js/ui/main.js, panell obert des de la capçalera) i la
                consulta invocada sobre una paraula concreta dins d'una
                pregunta (js/ui/detall.js, v. js/nucli/glossari.js §3 per
                la lògica de detecció). Mateix patró que
                preguntes-dades.js/guies-dades.js: variable GLOBAL
                window.GLOSSARI, mai un .json amb fetch() (file://, sense
                servidor — v. PROJECTES-TECHNICAL-REFERENCE.md).

  ESQUEMA (per id de terme, clau estable — MAI el text mostrat, que canvia
  amb l'idioma)
    id            — el mateix que la clau; es repeteix dins l'objecte
                    perquè un consumidor que ja té l'entrada (p. ex. d'un
                    resultat de cerca) no necessiti la clau per separat.
    termes        — {ca:[...], en:[...]} totes les formes de superfície
                    (singular, amb/sense la paraula "triangle" al davant,
                    etc.) que un alumne pot trobar dins d'un enunciat.
                    Aquest array — no un sol string — és el que fa
                    funcionar la detecció de §3 sense haver d'anotar el
                    text font.
    definicio     — {ca, en} — v. more avall, "DIRECCIÓ DEL FALLBACK",
                    perquè aquí NO és la mateixa direcció que
                    preguntes-dades.js.
    figura        — nom de fitxer a assets/img/glossari/, o null. Un
                    terme sense figura no en necessita — v. §5 del
                    document de disseny ("amb figures quan sigui
                    convenient", no a totes les entrades).
    relacionats   — array d'ids d'altres entrades. El que fa que sigui un
                    GLOSSARI i no un diccionari pla — v. §2 del document.
    categoria     — slug lliure per a la vista de navegació (§4.1),
                    mateix esperit que `moviment` a guies-dades.js: no és
                    un enum fixat al codi, és una dada més.

  DIRECCIÓ DEL FALLBACK — DECISIÓ EXPLÍCITA, NO IMPLÍCITA (§2 del document
  de disseny la demana per escrit abans d'escriure cap contingut)
  preguntes-dades.js té l'anglès com a font i el català com a traducció
  pendent (resolCamp() cau cap a `en`). guies-dades.js és a l'inrevés: el
  català és la font i l'anglès encara no existeix (resolCampGuia() cau cap
  a `ca`). Aquest glossari s'escriu, com les guies, directament en català
  — no hi ha cap text anglès previ del qual partir, com sí que n'hi havia
  per a preguntes-dades.js (el llibre original). Per tant seguim la
  DIRECCIÓ DE guies-dades.js, no la de preguntes-dades.js.
  Nota sobre una tensió real al document de disseny: §6 hi diu literalment
  "reuse geoContingut.resolCamp() for `definicio`" — però resolCamp() cau
  cap a `en`, i aquí `en` és sempre null. Reutilitzar-lo tal qual deixaria
  les definicions BUIDES per a qualsevol usuari amb la interfície en
  anglès, exactament el problema que guies-dades.js ja va decidir evitar
  amb resolCampGuia(). La lectura que es fa aquí de "no inventis un
  mecanisme de fallback nou" és: no n'inventis un TERCER de diferent —
  reutilitza el que JA EXISTEIX amb la direcció correcta (el patró de
  resolCampGuia, ja after guies.js), no repeteixis cegament la crida
  concreta que el document esmenta. v. js/nucli/glossari.js,
  resolCampGlossari() — mateixa forma exacta que resolCampGuia().

  GENERAT/EDITAT a mà per ara (18 termes, primera passada — v.
  NOTA-GLOSSARI.md). No hi ha encara cap script generador equivalent a
  parse_guies.py: el volum és petit i el contingut prou estable que no
  calia, però si el glossari creix més enllà d'unes poques desenes
  d'entrades val la pena reconsiderar-ho amb el mateix criteri que
  preguntes-dades.js/guies-dades.js ja apliquen.
*/

window.GLOSSARI = {
  "triangle-equilateral": {
    id: "triangle-equilateral",
    termes: {
      ca: ["equilàter", "triangle equilàter"],
      en: ["equilateral", "equilateral triangle"]
    },
    definicio: {
      ca: "Un triangle amb els tres costats iguals — i, per tant, els tres angles iguals, de 60° cadascun.",
      en: null
    },
    figura: "gloss-triangles-costats.png",
    relacionats: ["triangle-isosceles", "triangle-escale"],
    categoria: "triangles"
  },
  "triangle-isosceles": {
    id: "triangle-isosceles",
    termes: {
      ca: ["isòsceles", "triangle isòsceles"],
      en: ["isosceles", "isosceles triangle"]
    },
    definicio: {
      ca: "Un triangle amb exactament dos costats iguals (i, per tant, els dos angles de la base també iguals).",
      en: null
    },
    figura: "gloss-triangles-costats.png",
    relacionats: ["triangle-equilateral", "triangle-escale"],
    categoria: "triangles"
  },
  "triangle-escale": {
    id: "triangle-escale",
    termes: {
      ca: ["escalè", "triangle escalè"],
      en: ["scalene", "scalene triangle"]
    },
    definicio: {
      ca: "Un triangle amb els tres costats de longituds diferents (i, per tant, els tres angles també diferents).",
      en: null
    },
    figura: "gloss-triangles-costats.png",
    relacionats: ["triangle-equilateral", "triangle-isosceles"],
    categoria: "triangles"
  },

  "triangle-acutangle": {
    id: "triangle-acutangle",
    termes: {
      ca: ["acutangle", "triangle acutangle"],
      en: ["acute triangle", "acute-angled triangle"]
    },
    definicio: {
      ca: "Un triangle amb els tres angles aguts (menors de 90°).",
      en: null
    },
    figura: "gloss-triangles-angles.png",
    relacionats: ["triangle-rectangle", "triangle-obtusangle"],
    categoria: "triangles"
  },
  "triangle-rectangle": {
    id: "triangle-rectangle",
    termes: {
      ca: ["triangle rectangle"],
      en: ["right triangle", "right-angled triangle"]
    },
    definicio: {
      ca: "Un triangle amb un angle recte (90°). El costat oposat a l'angle recte es diu hipotenusa; els altres dos, catets.",
      en: null
    },
    figura: "gloss-triangles-angles.png",
    relacionats: ["triangle-acutangle", "triangle-obtusangle"],
    categoria: "triangles"
  },
  "triangle-obtusangle": {
    id: "triangle-obtusangle",
    termes: {
      ca: ["obtusangle", "triangle obtusangle"],
      en: ["obtuse triangle", "obtuse-angled triangle"]
    },
    definicio: {
      ca: "Un triangle amb un angle obtús (més gran de 90°).",
      en: null
    },
    figura: "gloss-triangles-angles.png",
    relacionats: ["triangle-acutangle", "triangle-rectangle"],
    categoria: "triangles"
  },

  "altura": {
    id: "altura",
    termes: {
      ca: ["altura"],
      en: ["altitude", "height"]
    },
    definicio: {
      ca: "El segment des d'un vèrtex fins al costat oposat (o la seva prolongació), perpendicular a aquest costat.",
      en: null
    },
    figura: "gloss-cevianes.png",
    relacionats: ["mediana", "bisectriu"],
    categoria: "triangles-punts-notables"
  },
  "mediana": {
    id: "mediana",
    termes: {
      ca: ["mediana"],
      en: ["median"]
    },
    definicio: {
      ca: "El segment des d'un vèrtex fins al punt mitjà del costat oposat.",
      en: null
    },
    figura: "gloss-cevianes.png",
    relacionats: ["altura", "bisectriu"],
    categoria: "triangles-punts-notables"
  },
  "bisectriu": {
    id: "bisectriu",
    termes: {
      ca: ["bisectriu"],
      en: ["bisector", "angle bisector"]
    },
    definicio: {
      ca: "El segment des d'un vèrtex que parteix el seu angle en dos angles iguals, fins al costat oposat.",
      en: null
    },
    figura: "gloss-cevianes.png",
    relacionats: ["altura", "mediana"],
    categoria: "triangles-punts-notables"
  },

  "angles-oposats-pel-vertex": {
    id: "angles-oposats-pel-vertex",
    termes: {
      ca: ["angles oposats pel vèrtex"],
      en: ["vertical angles", "vertically opposite angles"]
    },
    definicio: {
      ca: "Els dos angles que formen dues rectes en creuar-se, un a cada banda del punt de tall — sempre iguals entre ells.",
      en: null
    },
    figura: "gloss-parelles-angles.png",
    relacionats: ["angles-complementaris", "angles-suplementaris"],
    categoria: "angles"
  },
  "angles-complementaris": {
    id: "angles-complementaris",
    termes: {
      ca: ["angles complementaris"],
      en: ["complementary angles"]
    },
    definicio: {
      ca: "Dos angles la suma dels quals és 90°.",
      en: null
    },
    figura: "gloss-parelles-angles.png",
    relacionats: ["angles-suplementaris", "angles-oposats-pel-vertex"],
    categoria: "angles"
  },
  "angles-suplementaris": {
    id: "angles-suplementaris",
    termes: {
      ca: ["angles suplementaris"],
      en: ["supplementary angles"]
    },
    definicio: {
      ca: "Dos angles la suma dels quals és 180°.",
      en: null
    },
    figura: "gloss-parelles-angles.png",
    relacionats: ["angles-complementaris", "angles-oposats-pel-vertex"],
    categoria: "angles"
  },

  "triangles-semblants": {
    id: "triangles-semblants",
    termes: {
      ca: ["semblants", "triangles semblants"],
      en: ["similar", "similar triangles"]
    },
    definicio: {
      ca: "Dos triangles amb els mateixos angles i els costats proporcionals — la mateixa forma, mida diferent.",
      en: null
    },
    figura: "gloss-triangles-semblants.png",
    relacionats: ["triangle-equilateral"],
    categoria: "triangles"
  },

  "cercle-inscrit": {
    id: "cercle-inscrit",
    termes: {
      ca: ["cercle inscrit", "incentre"],
      en: ["inscribed circle", "incircle"]
    },
    definicio: {
      ca: "El cercle més gran que cap dins d'un triangle, tangent als tres costats. El seu centre és l'incentre.",
      en: null
    },
    figura: "gloss-cercles-triangle.png",
    relacionats: ["cercle-circumscrit"],
    categoria: "cercles"
  },
  "cercle-circumscrit": {
    id: "cercle-circumscrit",
    termes: {
      ca: ["cercle circumscrit", "circumcentre"],
      en: ["circumscribed circle", "circumcircle"]
    },
    definicio: {
      ca: "El cercle que passa pels tres vèrtexs d'un triangle. El seu centre és el circumcentre, a la mateixa distància dels tres vèrtexs.",
      en: null
    },
    figura: "gloss-cercles-triangle.png",
    relacionats: ["cercle-inscrit"],
    categoria: "cercles"
  },

  "angle-inscrit": {
    id: "angle-inscrit",
    termes: {
      ca: ["angle inscrit"],
      en: ["inscribed angle"]
    },
    definicio: {
      ca: "L'angle format per dues cordes d'un cercle que es troben en un punt de la circumferència, obertes sobre un arc fix.",
      en: null
    },
    figura: "gloss-arc-capac.png",
    relacionats: ["arc-capac", "quadrilater-ciclic"],
    categoria: "cercles"
  },
  "arc-capac": {
    id: "arc-capac",
    termes: {
      ca: ["arc capaç"],
      en: ["locus of an angle", "arc of constant angle"]
    },
    definicio: {
      ca: "El conjunt de tots els punts des d'on un segment fix es veu amb el mateix angle — un arc de circumferència a cada banda del segment.",
      en: null
    },
    figura: "gloss-arc-capac.png",
    relacionats: ["angle-inscrit", "quadrilater-ciclic"],
    categoria: "cercles"
  },
  "quadrilater-ciclic": {
    id: "quadrilater-ciclic",
    termes: {
      ca: ["quadrilàter cíclic"],
      en: ["cyclic quadrilateral"]
    },
    definicio: {
      ca: "Un quadrilàter amb els quatre vèrtexs sobre una mateixa circumferència. Els seus angles oposats sumen sempre 180°.",
      en: null
    },
    figura: "gloss-arc-capac.png",
    relacionats: ["angle-inscrit", "arc-capac"],
    categoria: "cercles"
  }
};
