/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/data/demos-dades.js
  ROL:          Contingut de les tres demostracions d'introducció ("què és
                una demostració", DEMO-PROOF-INTRO-DESIGN-NOTES.md). NOMÉS
                tres, per disseny (§6 del document: "there are only three
                of these, ever") — no és un corpus creixent com
                preguntes-dades.js, però es manté com a fitxer de dades a
                part de la vista (mateix principi arquitectònic que la
                resta del projecte: dades a js/data/, renderitzat a js/ui/).

  ESTRUCTURA FIXA DE QUATRE MOMENTS (§2 del document) — CADA demo té
  exactament aquests quatre camps de contingut, en aquest ordre, sempre
  visibles alhora (NO és l'escala de pistes: aquí no s'amaga res):
    claim       — el resultat, en una frase, amb la figura.
    perque_no_es_obvi — per què calia una demostració i no n'hi ha prou
                  amb mirar un dibuix.
    argument    — la demostració completa, explicada. L'ÚNIC lloc de tot
                  el lloc on donar la solució sencera és la decisió
                  correcta (§0: "a deliberate, load-bearing exception").
    que_acaba_de_passar — el nom del moviment (vocabulari ja establert a
                  guies-dades.js, mai un slug nou — §3/§7) + la frase de
                  tancament que ho generalitza a "això és el que és una
                  demostració".

  CONVENCIÓ DE COLOR A LES FIGURES (docs/demo-figures.html): tinta = el
  que ja hi havia (l'enunciat/hipòtesi); sanguina = el que s'ha CONSTRUÏT
  en aquell mateix moment, acumulant-se panell a panell. Explícitament UN
  ÚS DIFERENT del conveni llibre/alumne de les guies (§4 del document, i
  la mateixa conclusió que GLOSSARY-DESIGN-NOTES.md §5 ja aplica a les
  figures de glossari) — aquí és purament una marca de seqüència ("això
  s'acaba d'afegir"), no una distinció d'autoria.

  NUMERACIÓ DE FIGURES: NO reclamen número de `docs/manifest-figures.tsv`
  (§4: aquell manifest i la seva regla de número permanent governen les
  figures de l'escala de pistes, no aquesta classe de contingut diferent).
  Viuen a assets/img/demo/, nom descriptiu propi.
*/

window.DEMOS = [
  {
    id: "demo-01-angle-sum",
    titol: { ca: "Els tres angles d'un triangle sumen 180°", en: null },
    moviment: "linia-no-enunciada",
    movimentTitol: { ca: "una línia que l'enunciat no menciona", en: null },
    figura: "demo-01-angle-sum.png",
    claim: {
      ca: "Els tres angles de QUALSEVOL triangle sumen sempre 180° — sigui quina sigui la seva forma: prim, ample, gairebé pla.",
      en: null,
    },
    perque_no_es_obvi: {
      ca: "Mira un triangle prim i llarg, i un altre gairebé equilàter: no s'assemblen gens (fixa-t'hi al primer panell de la figura). Que tots dos, i qualsevol altre que et puguis imaginar, sumin exactament el mateix número no es veu mirant — cal una raó que valgui per a tots alhora, no una mesura d'un cas concret.",
      en: null,
    },
    argument: {
      ca: "Dibuixa el triangle ABC. Ara traça, pel vèrtex de dalt (A), una línia paral·lela al costat de baix (BC) — una línia que l'enunciat original no demanava, la clau de tot l'argument.\n\nAquesta línia paral·lela, tallada per les dues bandes del triangle (AB i AC), crea dos parells d'angles alterns iguals: l'angle a l'esquerra de A (sobre la línia nova) és igual a l'angle B del triangle; l'angle a la dreta de A és igual a l'angle C. Per què? Perquè AB (i, per separat, AC) és una única recta que talla dues paral·leles (la línia nova i BC) — i quan una recta en talla dues que són paral·leles, els angles que queden a banda i banda, un a cada paral·lela, són sempre iguals (és, literalment, la definició de què vol dir que dues rectes «no s'ajuntin mai»: si giressin en angles diferents respecte de qualsevol secant, s'acabarien creuant). No és un fet nou que et demanem que et creguis — és l'única manera que dues rectes puguin no trobar-se mai.\n\nAra mira només el que passa AL VOLTANT del punt A: els tres angles que hi conflueixen (l'angle esquerre igual a B, l'angle propi de A, i l'angle dret igual a C) formen, junts, una línia recta — 180° exactes, perquè és literalment un angle pla. Però aquests tres angles SÓN, en valor, A + B + C. Per tant A + B + C = 180°.",
      en: null,
    },
    que_acaba_de_passar: {
      ca: "El pas clau no ha estat cap càlcul: ha estat afegir una línia que ningú et va demanar. Aquest moviment — construir alguna cosa que l'enunciat no esmenta, perquè converteix una cosa que no sabies mesurar en una que sí — es diu, en aquest projecte, «una línia no enunciada» (linia-no-enunciada), i el retrobaràs.\n\nFixa't que en cap moment de l'argument hem fet servir la mida ni la forma concreta del triangle ABC — no hem mesurat cap angle amb un transportador, no hem donat per fet que és «prou normal». Per això val per al triangle prim i pel gairebé equilàter alhora: mira el darrer panell de la figura, el mateix argument aplicat al triangle més prim de tots, sense canviar-hi ni una lletra.\n\nAixò és el que és una demostració: no comprovar un exemple, sinó un argument que val per a qualsevol triangle que dibuixis — el prim, el gairebé equilàter, tots.",
      en: null,
    },
    handoff: {
      questionId: "q70",
      text: {
        ca: "El mateix «180°» que acabes de demostrar és, en realitat, un cas particular. q70 et demana la mateixa pregunta, un pas més enllà: quant sumen els angles d'un polígon de n costats, no només d'un triangle?",
        en: null,
      },
    },
  },

  {
    id: "demo-02-isosceles",
    titol: { ca: "Al triangle isòsceles, la mediana i l'altura des del vèrtex coincideixen", en: null },
    moviment: "simetria-i-demostra",
    movimentTitol: { ca: "la simetria de la figura força la conclusió", en: null },
    figura: "demo-02-isosceles.png",
    claim: {
      ca: "En un triangle isòsceles, el segment des del vèrtex (on es troben els dos costats iguals) fins al punt mitjà de la base és, alhora, PERPENDICULAR a la base.",
      en: null,
    },
    perque_no_es_obvi: {
      ca: "\"Va cap al punt mitjà\" (mediana) i \"cau perpendicular\" (altura) són dues definicions completament diferents, que en un triangle qualsevol donen segments diferents (mira el primer panell: un isòsceles molt agut i un de molt obtús — la mateixa pregunta, dues formes que no s'assemblen). Que aquí coincideixin exactament — que anar al punt mitjà i caure en angle recte siguin, per un cop, la mateixa acció — és una coincidència que necessita explicar-se, no una cosa que es vegi a ull.",
      en: null,
    },
    argument: {
      ca: "Triangle ABC, isòsceles amb AB = AC. Sigui M el punt mitjà de BC. Traça el segment AM.\n\nImagina que retalles el triangle i el doblegues per AM, com un plec de paper. Aquest plec és, en el llenguatge de la geometria, una REFLEXIÓ — i una reflexió té una propietat que fem servir sense dir-la sovint: no canvia cap longitud ni cap angle de la figura que mou, només en canvia la posició (com mirar-te al mirall: la teva alçada no varia perquè te la reflecteixin). És per això que, si el plec fa coincidir dos punts, tot el que hi ha entre ells —distàncies, angles— coincideix igual de exacte.\n\nEl costat AB cau exactament sobre AC (són iguals, per hipòtesi), i com que M és el punt mitjà, el punt B cau exactament sobre C. El plec fa coincidir els dos triangles ABM i ACM del tot: són imatge especular l'un de l'altre.\n\nSi els dos triangles coincideixen pel plec, els dos angles a M (l'angle AMB i l'angle AMC) també coincideixen — són iguals, precisament perquè la reflexió no els ha pogut canviar. Però, alhora, aquests dos angles junts formen una línia recta (B, M i C estan alineats): sumen 180°. Dos angles iguals que sumen 180° només poden ser de 90° cadascun. AM és perpendicular a BC.",
      en: null,
    },
    que_acaba_de_passar: {
      ca: "L'argument no ha mesurat res: ha fet servir que la figura té una simetria (el plec, és a dir, una reflexió) i n'ha llegit una conclusió que calia demostrar. Aquest moviment es diu «fes servir la simetria per demostrar-ho» (simetria-i-demostra) — el retrobaràs en preguntes que, a primer cop d'ull, no semblen tenir res a veure amb aquesta.\n\nEn cap moment hem fet servir COM D'AGUT o COM D'OBTÚS és el triangle — només que AB = AC. Per això el mateix plec funciona per a l'isòsceles molt agut i pel molt obtús del primer panell (mira'n el darrer: el mateix argument, sense canviar-hi res, sobre el més esprimatxat dels dos).\n\nAixò és el que és una demostració: la mateixa raó (el plec, la igualtat dels dos costats) val per a QUALSEVOL triangle isòsceles, no només per al que has dibuixat.",
      en: null,
    },
    handoff: {
      questionId: "q89",
      text: {
        ca: "q89 fa la pregunta al revés, i és molt més difícil: si DUES bisectrius d'angle d'un triangle (no una mediana) surten iguals, has de demostrar que el triangle ha de ser isòsceles. És un salt real de dificultat respecte d'aquesta demo — precisament per això val la pena mirar-la ara que tens fresc l'esperit de \"fes servir la simetria\".",
        en: null,
      },
    },
  },

  {
    id: "demo-03-four-triangles",
    titol: { ca: "Els quatre triangles que formen els punts mitjans són idèntics", en: null },
    moviment: "redueix-al-conegut",
    movimentTitol: { ca: "redueix el desconegut a una cosa que ja saps", en: null },
    figura: "demo-03-four-triangles.png",
    claim: {
      ca: "Uneix els tres punts mitjans dels costats d'un triangle. Es formen quatre triangles petits — i els quatre són exactament idèntics (congruents) entre ells.",
      en: null,
    },
    perque_no_es_obvi: {
      ca: "\"Idèntics\" és una afirmació forta sobre QUATRE regions que, a ull, no s'assemblen (mira el primer panell: les quatre peces soltes, una capgirada) — una queda cap per avall al mig, les altres tres dretes a les cantonades. Comprovar-ho mesurant un parell no basta — cal un sol argument que expliqui els quatre alhora, sense mirar-los un per un.",
      en: null,
    },
    argument: {
      ca: "Triangle ABC. Siguin D, E, F els punts mitjans dels costats AB, BC i CA respectivament. Uneix D amb E, E amb F, i F amb D.\n\nAquí no cal inventar res de nou: fas servir un fet que ja coneixes — el segment que uneix els punts mitjans de dos costats d'un triangle és paral·lel al tercer costat, i en fa exactament la meitat de llarg. Aplica'l tres vegades (un cop per cada parell de costats): DE fa la meitat de AC, EF fa la meitat de AB, i FD fa la meitat de BC.\n\nAixò vol dir que el triangle DEF (el del mig) té els tres costats a meitat dels tres costats del triangle ABC — i el mateix es pot comprovar per als altres tres triangles petits (ADF, DBE, FEC): cadascun té els seus tres costats iguals a la meitat dels tres costats de ABC, en el mateix ordre. Quatre triangles amb els tres costats proporcionals per la mateixa raó (1:2) i, de fet, iguals entre ells costat a costat: pel criteri costat-costat-costat (SSS), els quatre són congruents.",
      en: null,
    },
    que_acaba_de_passar: {
      ca: "Cap pas d'aquest argument ha calgut inventar-lo: tot surt de reduir \"són congruents\" a dues coses que ja sabies (el segment dels punts mitjans, i el criteri SSS) aplicades quatre vegades amb el mateix argument. Aquest moviment es diu «redueix el desconegut al conegut» (redueix-al-conegut) — és, de llarg, el més repetit de tot aquest projecte.\n\nNi la forma del triangle ABC ni la posició de D, E, F com a punts \"especials\" hi han fet cap paper —només que són punts mitjans. Per això el mateix argument funciona igual sobre un triangle molt més aixafat (mira el darrer panell): el mateix fet dels punts mitjans, aplicat tres vegades, la mateixa conclusió.\n\nAixò és el que és una demostració: un sol argument que val per als quatre triangles alhora, no quatre comprovacions per separat.",
      en: null,
    },
    handoff: {
      questionId: "q02",
      text: {
        ca: "Has fet la meitat de la feina de q02 — la meva demostració, però, ha triat a posta un triangle prou simètric perquè es vegi net. La guia de q02 hi afegeix la peça que aquí ens hem estalviat: fer que el mateix argument funcioni quan el triangle NO té cap simetria a favor. Obre-la per acabar-ho.",
        en: null,
      },
    },
  },
];

/*
  TANCAMENT COMPARTIT — no pertany a cap de les tres demos soles (§ nova,
  a petició de l'owner: "un tancament final que lligui les tres
  demostracions com a estrategies"). Es renderitza un sol cop, despres
  de les tres, per js/ui/demo.js -- v. la seva capçalera per a on
  exactament. Nomena explicitament les tres FAMILIES d'atac que
  l'alumne acaba de veure, sense repetir cap text ja dit a cada
  que_acaba_de_passar -- i tanca amb el "mira enrere" de Pólya (què NO
  ha calgut fer servir) que cap de les tres demos feia fins ara.
*/
window.DEMOS_TANCAMENT = {
  titol: {
    ca: "Tres demostracions, tres maneres diferents d'atacar",
    en: null,
  },
  text: {
    ca: "Mira-les un cop més, ara les tres juntes, no com a fets aïllats sinó com a maneres d'ATACAR una afirmació que no pots comprovar mirant:\n\nA la primera, la resposta no hi era enlloc de la figura original — calia AFEGIR alguna cosa que ningú et va demanar (la línia paral·lela) per fer-la aparèixer. A la segona, la resposta ja hi era, amagada dins de la pròpia simetria de la figura (el plec) — calia RECONÈIXER-LA, no afegir res. A la tercera, la resposta es construeix sencera a partir de dues coses que ja sabies (el segment dels punts mitjans, el criteri SSS) — calia REDUIR el que no sabies a allò que ja dominaves.\n\nAfegir el que falta. Reconèixer la simetria que ja hi és. Reduir-ho a allò conegut. Cap de les tres és un truc d'una sola vegada: són les tres maneres més repetides d'atacar tot aquest llibre, i les retrobaràs barrejades, una dins de l'altra, en gairebé totes les guies que obris.\n\nUna última cosa, la mateixa a les tres: fixa't en tot el que NO ha calgut fer servir en cap dels tres arguments — cap mesura amb regle, cap valor numèric concret, cap suposició sobre \"aquest triangle en particular\". És exactament perquè no calen que els tres arguments valen per a qualsevol triangle, no només pel que has vist dibuixat.",
    en: null,
  },
};
