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
    relacionats: ["triangle-acutangle", "triangle-obtusangle", "teorema-de-pitagores", "projeccio-ortogonal"],
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
    relacionats: ["altura", "mediana", "mediatriu"],
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
    relacionats: ["triangle-equilateral", "criteris-semblanca-triangles", "rao-de-semblanca", "congruencia", "teorema-de-tales"],
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
    relacionats: ["cercle-circumscrit", "recta-tangent", "apotema"],
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
    relacionats: ["cercle-inscrit", "mediatriu"],
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
    relacionats: ["arc-capac", "quadrilater-ciclic", "corda", "arc"],
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
    relacionats: ["angle-inscrit", "quadrilater-ciclic", "arc", "lloc-geometric"],
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
  },

  /* -----------------------------------------------------------------
     AMPLIACIÓ (segona passada). Termes bàsics de la circumferència, de
     semblança/congruència de triangles, de proporcionalitat i de cossos
     geomètrics — vocabulari que apareix repetidament a les preguntes i
     guies però que encara no tenia entrada pròpia. Fonts: DIEC2/Optimot
     (Institut d'Estudis Catalans), Cercaterm/TERMCAT i, quan calia
     contrastar l'ús escolar habitual, l'Enciclopèdia Catalana. Mateix
     esquema, mateixa direcció de fallback (ca canònic, en null) i mateix
     criteri de figura (null si no n'hi ha cap de dedicada encara).
     ----------------------------------------------------------------- */

  "radi": {
    id: "radi",
    termes: {
      ca: ["radi"],
      en: ["radius"]
    },
    definicio: {
      ca: "El segment que va des del centre d'un cercle (o d'una esfera) a qualsevol punt de la circumferència (o de la superfície esfèrica). També, per extensió, la longitud d'aquest segment. El radi és la meitat del diàmetre.",
      en: null
    },
    figura: null,
    relacionats: ["diametre", "corda", "circumferencia-cercle", "esfera"],
    categoria: "cercles"
  },
  "diametre": {
    id: "diametre",
    termes: {
      ca: ["diàmetre"],
      en: ["diameter"]
    },
    definicio: {
      ca: "Una corda que passa pel centre d'un cercle, unint dos punts de la circumferència a banda i banda del centre. La seva longitud és sempre el doble de la del radi.",
      en: null
    },
    figura: null,
    relacionats: ["radi", "corda", "circumferencia-cercle"],
    categoria: "cercles"
  },
  "corda": {
    id: "corda",
    termes: {
      ca: ["corda"],
      en: ["chord"]
    },
    definicio: {
      ca: "Un segment amb els dos extrems sobre una circumferència. Un diàmetre és el cas particular d'una corda que passa pel centre — i és, de totes, la més llarga.",
      en: null
    },
    figura: null,
    relacionats: ["diametre", "arc", "angle-inscrit", "radi", "recta-secant"],
    categoria: "cercles"
  },
  "arc": {
    id: "arc",
    termes: {
      ca: ["arc", "arc de circumferència"],
      en: ["arc"]
    },
    definicio: {
      ca: "Cadascuna de les dues porcions en què dos punts divideixen una circumferència. Els extrems d'una corda determinen sempre un arc a cada banda.",
      en: null
    },
    figura: null,
    relacionats: ["corda", "angle-inscrit", "arc-capac", "sector-circular"],
    categoria: "cercles"
  },
  "circumferencia-cercle": {
    id: "circumferencia-cercle",
    termes: {
      ca: ["circumferència", "cercle"],
      en: ["circumference", "circle"]
    },
    definicio: {
      ca: "La circumferència és la línia corba i tancada formada per tots els punts d'un pla que es troben a la mateixa distància (el radi) d'un punt fix (el centre). El cercle és la superfície plana que aquesta línia envolta. En el llenguatge de cada dia sovint es diuen indistintament, però la circumferència és la vora i el cercle és la regió.",
      en: null
    },
    figura: null,
    relacionats: ["radi", "diametre", "sector-circular"],
    categoria: "cercles"
  },
  "recta-tangent": {
    id: "recta-tangent",
    termes: {
      ca: ["tangent", "recta tangent"],
      en: ["tangent", "tangent line"]
    },
    definicio: {
      ca: "Una recta que toca una circumferència en un únic punt, sense travessar-la. En aquest punt de tangència, la tangent és sempre perpendicular al radi.",
      en: null
    },
    figura: null,
    relacionats: ["recta-secant", "cercle-inscrit"],
    categoria: "cercles"
  },
  "recta-secant": {
    id: "recta-secant",
    termes: {
      ca: ["secant", "recta secant"],
      en: ["secant", "secant line"]
    },
    definicio: {
      ca: "Una recta que talla una circumferència en dos punts. La recta que conté una corda n'és sempre un exemple.",
      en: null
    },
    figura: null,
    relacionats: ["recta-tangent", "corda"],
    categoria: "cercles"
  },
  "sector-circular": {
    id: "sector-circular",
    termes: {
      ca: ["sector circular"],
      en: ["circular sector"]
    },
    definicio: {
      ca: "La porció d'un cercle compresa entre dos radis i l'arc que els uneix — com un «tros de pastís» tallat des del centre.",
      en: null
    },
    figura: "gloss-sector-circular.png",
    relacionats: ["circumferencia-cercle", "arc"],
    categoria: "cercles"
  },

  "mediatriu": {
    id: "mediatriu",
    termes: {
      ca: ["mediatriu"],
      en: ["perpendicular bisector"]
    },
    definicio: {
      ca: "La recta perpendicular a un segment que passa pel seu punt mitjà. Equivalentment, el lloc geomètric dels punts del pla que equidisten dels dos extrems del segment. En un triangle, les tres mediatrius dels costats es tallen sempre en un mateix punt: el circumcentre.",
      en: null
    },
    figura: null,
    relacionats: ["bisectriu", "cercle-circumscrit", "lloc-geometric"],
    categoria: "triangles-punts-notables"
  },
  "lloc-geometric": {
    id: "lloc-geometric",
    termes: {
      ca: ["lloc geomètric"],
      en: ["locus"]
    },
    definicio: {
      ca: "El conjunt de tots els punts del pla (o de l'espai) que compleixen una determinada propietat, i només aquests. La mediatriu (equidistar de dos punts) i l'arc capaç (veure un segment amb un angle fix) en són dos exemples habituals.",
      en: null
    },
    figura: null,
    relacionats: ["mediatriu", "arc-capac"],
    categoria: "conceptes-generals"
  },
  "congruencia": {
    id: "congruencia",
    termes: {
      ca: ["congruents", "congruència"],
      en: ["congruent", "congruence"]
    },
    definicio: {
      ca: "Dues figures són congruents quan tenen exactament la mateixa forma i la mateixa mida — es pot fer coincidir una amb l'altra desplaçant-la, girant-la o girant-la del revés (reflectint-la), sense estirar-la ni encongir-la. És el que en el llenguatge de cada dia se sol dir que dues figures són «iguals».",
      en: null
    },
    figura: null,
    relacionats: ["criteris-congruencia-triangles", "triangles-semblants"],
    categoria: "triangles"
  },
  "criteris-congruencia-triangles": {
    id: "criteris-congruencia-triangles",
    termes: {
      ca: ["criteris de congruència de triangles", "costat-costat-costat", "costat-angle-costat", "angle-costat-angle", "CCC", "CAC", "ACA", "SSS", "SAS", "ASA"],
      en: ["triangle congruence criteria", "SSS", "SAS", "ASA"]
    },
    definicio: {
      ca: "Les condicions mínimes que garanteixen que dos triangles són congruents, sense haver de comprovar els sis elements (tres costats i tres angles) un per un. Les tres més habituals: costat-costat-costat (CCC, si es coneix sovint per les sigles angleses SSS) — els tres costats iguals; costat-angle-costat (CAC / SAS) — dos costats i l'angle que formen; angle-costat-angle (ACA / ASA) — dos angles i el costat entre ells.",
      en: null
    },
    figura: null,
    relacionats: ["congruencia", "criteris-semblanca-triangles"],
    categoria: "triangles"
  },
  "criteris-semblanca-triangles": {
    id: "criteris-semblanca-triangles",
    termes: {
      ca: ["criteris de semblança de triangles", "AAA"],
      en: ["triangle similarity criteria", "AAA"]
    },
    definicio: {
      ca: "Les condicions mínimes que garanteixen que dos triangles són semblants (mateixa forma, mida potser diferent). Les més habituals: tenir dos angles iguals (i, per tant, el tercer també — sovint anomenat criteri AAA); tenir els tres costats proporcionals; o tenir un angle igual i els dos costats que el formen proporcionals.",
      en: null
    },
    figura: "gloss-triangles-semblants.png",
    relacionats: ["triangles-semblants", "rao-de-semblanca", "criteris-congruencia-triangles", "teorema-de-tales"],
    categoria: "triangles"
  },
  "rao-de-semblanca": {
    id: "rao-de-semblanca",
    termes: {
      ca: ["raó de semblança", "escala"],
      en: ["ratio of similarity", "scale factor"]
    },
    definicio: {
      ca: "El factor pel qual cal multiplicar cada longitud d'una figura per obtenir la longitud corresponent d'una altra figura semblant. Si la raó és k, les àrees canvien per k² i els volums per k³.",
      en: null
    },
    figura: null,
    relacionats: ["triangles-semblants", "criteris-semblanca-triangles"],
    categoria: "triangles"
  },
  "projeccio-ortogonal": {
    id: "projeccio-ortogonal",
    termes: {
      ca: ["projecció", "projecció ortogonal", "projecció d'un costat sobre un altre"],
      en: ["orthogonal projection", "projection"]
    },
    definicio: {
      ca: "El segment que resulta de deixar caure, perpendicularment, els dos extrems d'un segment sobre una recta (o sobre un altre segment allargat en recta). Dit d'una altra manera: l'«ombra» que fa el segment si la llum hi arriba perpendicular a la recta. Apareix sobretot en el teorema del catet, on el quadrat d'un catet és igual al producte de la hipotenusa per la projecció d'aquest catet sobre la hipotenusa.",
      en: null
    },
    figura: null,
    relacionats: ["teorema-de-tales", "triangle-rectangle", "teorema-de-pitagores"],
    categoria: "conceptes-generals"
  },
  "teorema-de-tales": {
    id: "teorema-de-tales",
    termes: {
      ca: ["teorema de Tales"],
      en: ["Thales's theorem", "intercept theorem"]
    },
    definicio: {
      ca: "Si un conjunt de rectes paral·leles talla dues rectes secants, els segments que hi determinen són proporcionals. És l'eina bàsica per calcular longituds desconegudes a partir d'una proporció, i la base de per què una paral·lela a un costat d'un triangle en genera un altre de semblant.",
      en: null
    },
    figura: null,
    relacionats: ["triangles-semblants", "criteris-semblanca-triangles", "projeccio-ortogonal"],
    categoria: "conceptes-generals"
  },
  "teorema-de-pitagores": {
    id: "teorema-de-pitagores",
    termes: {
      ca: ["teorema de Pitàgores", "Pitàgores"],
      en: ["Pythagorean theorem"]
    },
    definicio: {
      ca: "En tot triangle rectangle, el quadrat de la hipotenusa és igual a la suma dels quadrats dels dos catets. Dit en àrees: l'àrea del quadrat construït sobre la hipotenusa és igual a la suma de les àrees dels quadrats construïts sobre els catets.",
      en: null
    },
    figura: null,
    relacionats: ["triangle-rectangle", "projeccio-ortogonal"],
    categoria: "conceptes-generals"
  },

  "poligon-regular": {
    id: "poligon-regular",
    termes: {
      ca: ["polígon regular"],
      en: ["regular polygon"]
    },
    definicio: {
      ca: "Un polígon amb tots els costats iguals i tots els angles iguals. Té un centre únic, equidistant de tots els vèrtexs (el radi) i de tots els costats (l'apotema).",
      en: null
    },
    figura: null,
    relacionats: ["apotema", "poligon-irregular", "diagonal"],
    categoria: "poligons"
  },
  "poligon-irregular": {
    id: "poligon-irregular",
    termes: {
      ca: ["polígon irregular"],
      en: ["irregular polygon"]
    },
    definicio: {
      ca: "Un polígon que no té tots els costats iguals, tots els angles iguals, o cap de les dues coses.",
      en: null
    },
    figura: null,
    relacionats: ["poligon-regular", "diagonal"],
    categoria: "poligons"
  },
  "apotema": {
    id: "apotema",
    termes: {
      ca: ["apotema"],
      en: ["apothem"]
    },
    definicio: {
      ca: "El segment de la perpendicular traçada des del centre d'un polígon regular a un dels seus costats — i, per extensió, la longitud d'aquest segment. Coincideix amb el radi de la circumferència inscrita al polígon.",
      en: null
    },
    figura: null,
    relacionats: ["poligon-regular", "cercle-inscrit"],
    categoria: "poligons"
  },
  "diagonal": {
    id: "diagonal",
    termes: {
      ca: ["diagonal"],
      en: ["diagonal"]
    },
    definicio: {
      ca: "El segment que uneix dos vèrtexs no consecutius d'un polígon (és a dir, que no comparteixen un costat).",
      en: null
    },
    figura: null,
    relacionats: ["poligon-regular", "poligon-irregular"],
    categoria: "poligons"
  },

  "poliedre": {
    id: "poliedre",
    termes: {
      ca: ["poliedre"],
      en: ["polyhedron"]
    },
    definicio: {
      ca: "Un cos geomètric la superfície del qual està formada per un nombre finit de polígons plans (les cares). Les cares es tallen en arestes, i les arestes es tallen en vèrtexs. Prismes, piràmides i tetràedres en són exemples.",
      en: null
    },
    figura: "gloss-poliedre.png",
    relacionats: ["prisma", "piramide", "tetraedre"],
    categoria: "cossos-geometrics"
  },
  "prisma": {
    id: "prisma",
    termes: {
      ca: ["prisma"],
      en: ["prism"]
    },
    definicio: {
      ca: "Un poliedre amb dues cares iguals i paral·leles (les bases) unides per cares laterals que són paral·lelograms.",
      en: null
    },
    figura: null,
    relacionats: ["poliedre", "piramide", "principi-de-cavalieri"],
    categoria: "cossos-geometrics"
  },
  "piramide": {
    id: "piramide",
    termes: {
      ca: ["piràmide"],
      en: ["pyramid"]
    },
    definicio: {
      ca: "Un poliedre format per una base poligonal i cares laterals triangulars que comparteixen totes un mateix vèrtex, el vèrtex de la piràmide.",
      en: null
    },
    figura: null,
    relacionats: ["poliedre", "tetraedre", "prisma", "principi-de-cavalieri"],
    categoria: "cossos-geometrics"
  },
  "tetraedre": {
    id: "tetraedre",
    termes: {
      ca: ["tetràedre"],
      en: ["tetrahedron"]
    },
    definicio: {
      ca: "Una piràmide de base triangular — el poliedre més senzill possible, amb quatre cares triangulars, quatre vèrtexs i sis arestes.",
      en: null
    },
    figura: "gloss-tetraedre.png",
    relacionats: ["piramide", "poliedre"],
    categoria: "cossos-geometrics"
  },
  "cilindre": {
    id: "cilindre",
    termes: {
      ca: ["cilindre"],
      en: ["cylinder"]
    },
    definicio: {
      ca: "Un cos de revolució generat en fer girar un rectangle al voltant d'un dels seus costats. Té dues bases circulars iguals i paral·leles, unides per una superfície lateral corba.",
      en: null
    },
    figura: "gloss-cilindre.png",
    relacionats: ["con", "esfera", "teorema-de-pappus"],
    categoria: "cossos-geometrics"
  },
  "con": {
    id: "con",
    termes: {
      ca: ["con"],
      en: ["cone"]
    },
    definicio: {
      ca: "Un cos de revolució generat en fer girar un triangle rectangle al voltant d'un dels seus catets. Té una base circular i es tanca en un únic vèrtex, el punt més amunt.",
      en: null
    },
    figura: null,
    relacionats: ["cilindre", "esfera", "conica", "teorema-de-pappus"],
    categoria: "cossos-geometrics"
  },
  "esfera": {
    id: "esfera",
    termes: {
      ca: ["esfera"],
      en: ["sphere"]
    },
    definicio: {
      ca: "El conjunt de tots els punts de l'espai que es troben a la mateixa distància (el radi) d'un punt fix (el centre). És l'anàleg tridimensional de la circumferència.",
      en: null
    },
    figura: "gloss-esfera.png",
    relacionats: ["radi", "cilindre", "con", "teorema-de-pappus"],
    categoria: "cossos-geometrics"
  },
  "principi-de-cavalieri": {
    id: "principi-de-cavalieri",
    termes: {
      ca: ["principi de Cavalieri", "Cavalieri"],
      en: ["Cavalieri's principle"]
    },
    definicio: {
      ca: "Si dos cossos, en tallar-los amb qualsevol pla paral·lel a dos plans de referència fixats, donen sempre seccions de la mateixa àrea, aleshores els dos cossos tenen el mateix volum. Permet comparar volums sense haver de calcular-los per separat — per exemple, per veure que un prisma oblic té el mateix volum que el prisma recte de la mateixa base i alçada.",
      en: null
    },
    figura: "gloss-cavalieri.png",
    relacionats: ["prisma", "piramide"],
    categoria: "cossos-geometrics"
  },
  "teorema-de-pappus": {
    id: "teorema-de-pappus",
    termes: {
      ca: ["teorema de Pappus"],
      en: ["Pappus's centroid theorem"]
    },
    definicio: {
      ca: "El volum del cos que es genera en fer girar una figura plana al voltant d'un eix (que no la travessa) és igual a l'àrea de la figura multiplicada per la distància que recorre el seu centre en aquesta volta.",
      en: null
    },
    figura: null,
    relacionats: ["cilindre", "con", "esfera"],
    categoria: "cossos-geometrics"
  },

  "conica": {
    id: "conica",
    termes: {
      ca: ["cònica", "secció cònica"],
      en: ["conic section"]
    },
    definicio: {
      ca: "Cadascuna de les corbes que s'obtenen en tallar la superfície d'un con amb un pla: circumferència, el·lipse, paràbola o hipèrbola, segons com s'orienti el pla respecte de l'eix del con.",
      en: null
    },
    figura: null,
    relacionats: ["ellipse", "hiperbola", "parabola", "con"],
    categoria: "coniques"
  },
  "ellipse": {
    id: "ellipse",
    termes: {
      ca: ["el·lipse"],
      en: ["ellipse"]
    },
    definicio: {
      ca: "El lloc geomètric dels punts del pla per als quals la suma de les distàncies a dos punts fixos, els focus, és constant. S'obté en tallar un con amb un pla oblic que no arriba a ser paral·lel a cap generatriu.",
      en: null
    },
    figura: "gloss-ellipse.png",
    relacionats: ["conica", "focus", "hiperbola"],
    categoria: "coniques"
  },
  "hiperbola": {
    id: "hiperbola",
    termes: {
      ca: ["hipèrbola"],
      en: ["hyperbola"]
    },
    definicio: {
      ca: "El lloc geomètric dels punts del pla per als quals la diferència de les distàncies a dos punts fixos, els focus, és constant. Té dues branques obertes i simètriques. S'obté en tallar les dues fulles d'una superfície cònica amb un mateix pla.",
      en: null
    },
    figura: null,
    relacionats: ["conica", "focus", "ellipse"],
    categoria: "coniques"
  },
  "parabola": {
    id: "parabola",
    termes: {
      ca: ["paràbola"],
      en: ["parabola"]
    },
    definicio: {
      ca: "El lloc geomètric dels punts del pla que equidisten d'un punt fix (el focus) i d'una recta fixa (la directriu). S'obté en tallar un con amb un pla paral·lel a una generatriu.",
      en: null
    },
    figura: null,
    relacionats: ["conica", "focus"],
    categoria: "coniques"
  },
  "focus": {
    id: "focus",
    termes: {
      ca: ["focus"],
      en: ["focus"]
    },
    definicio: {
      ca: "Cadascun dels punts fixos que defineixen una secció cònica a partir de distàncies: l'el·lipse en té dos (suma de distàncies constant), la hipèrbola en té dos (diferència constant) i la paràbola en té un (equidistant d'ell i d'una recta directriu).",
      en: null
    },
    figura: null,
    relacionats: ["ellipse", "hiperbola", "parabola"],
    categoria: "coniques"
  }
};
