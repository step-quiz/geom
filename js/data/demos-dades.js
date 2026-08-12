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
      ca: "Mira un triangle prim i llarg, i un altre gairebé equilàter: no s'assemblen gens. Que tots dos, i qualsevol altre que et puguis imaginar, sumin exactament el mateix número no es veu mirant — cal una raó que valgui per a tots alhora, no una mesura d'un cas concret.",
      en: null,
    },
    argument: {
      ca: "Dibuixa el triangle ABC. Ara traça, pel vèrtex de dalt (A), una línia paral·lela al costat de baix (BC) — una línia que l'enunciat original no demanava, la clau de tot l'argument.\n\nAquesta línia paral·lela, tallada per les dues bandes del triangle (AB i AC), crea dos parells d'angles alterns iguals: l'angle a l'esquerra de A (sobre la línia nova) és igual a l'angle B del triangle; l'angle a la dreta de A és igual a l'angle C. Això és la propietat bàsica de les paral·leles tallades per una secant — no res nou.\n\nAra mira només el que passa AL VOLTANT del punt A: els tres angles que hi conflueixen (l'angle esquerre igual a B, l'angle propi de A, i l'angle dret igual a C) formen, junts, una línia recta — 180° exactes, perquè és literalment un angle pla. Però aquests tres angles SÓN, en valor, A + B + C. Per tant A + B + C = 180°.",
      en: null,
    },
    que_acaba_de_passar: {
      ca: "El pas clau no ha estat cap càlcul: ha estat afegir una línia que ningú et va demanar. Aquest moviment — construir alguna cosa que l'enunciat no esmenta, perquè converteix una cosa que no sabies mesurar en una que sí — es diu, en aquest projecte, «una línia no enunciada» (linia-no-enunciada), i el retrobaràs.\n\nAixò és el que és una demostració: no comprovar un exemple, sinó un argument que val per a qualsevol triangle que dibuixis — el prim, el gairebé equilàter, tots.",
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
      ca: "\"Va cap al punt mitjà\" (mediana) i \"cau perpendicular\" (altura) són dues definicions completament diferents, que en un triangle qualsevol donen segments diferents. Que aquí coincideixin exactament — que anar al punt mitjà i caure en angle recte siguin, per un cop, la mateixa acció — és una coincidència que necessita explicar-se, no una cosa que es vegi a ull.",
      en: null,
    },
    argument: {
      ca: "Triangle ABC, isòsceles amb AB = AC. Sigui M el punt mitjà de BC. Traça el segment AM.\n\nImagina que retalles el triangle i el doblegues per AM, com un plec de paper. El costat AB cau exactament sobre AC (són iguals, per hipòtesi), i com que M és el punt mitjà, el punt B cau exactament sobre C. El plec fa coincidir els dos triangles ABM i ACM del tot: són imatge especular l'un de l'altre.\n\nSi els dos triangles coincideixen pel plec, els dos angles a M (l'angle AMB i l'angle AMC) també coincideixen — són iguals. Però, alhora, aquests dos angles junts formen una línia recta (B, M i C estan alineats): sumen 180°. Dos angles iguals que sumen 180° només poden ser de 90° cadascun. AM és perpendicular a BC.",
      en: null,
    },
    que_acaba_de_passar: {
      ca: "L'argument no ha mesurat res: ha fet servir que la figura té una simetria (el plec) i n'ha llegit una conclusió que calia demostrar. Aquest moviment es diu «fes servir la simetria per demostrar-ho» (simetria-i-demostra) — el retrobaràs en preguntes que, a primer cop d'ull, no semblen tenir res a veure amb aquesta.\n\nAixò és el que és una demostració: la mateixa raó (el plec, la igualtat dels dos costats) val per a QUALSEVOL triangle isòsceles, no només per al que has dibuixat.",
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
      ca: "\"Idèntics\" és una afirmació forta sobre QUATRE regions que, a ull, no s'assemblen: una queda cap per avall al mig, les altres tres dretes a les cantonades. Comprovar-ho mesurant un parell no basta — cal un sol argument que expliqui els quatre alhora, sense mirar-los un per un.",
      en: null,
    },
    argument: {
      ca: "Triangle ABC. Siguin D, E, F els punts mitjans dels costats AB, BC i CA respectivament. Uneix D amb E, E amb F, i F amb D.\n\nAquí no cal inventar res de nou: fas servir un fet que ja coneixes — el segment que uneix els punts mitjans de dos costats d'un triangle és paral·lel al tercer costat, i en fa exactament la meitat de llarg. Aplica'l tres vegades (un cop per cada parell de costats): DE fa la meitat de AC, EF fa la meitat de AB, i FD fa la meitat de BC.\n\nAixò vol dir que el triangle DEF (el del mig) té els tres costats a meitat dels tres costats del triangle ABC — i el mateix es pot comprovar per als altres tres triangles petits (ADF, DBE, FEC): cadascun té els seus tres costats iguals a la meitat dels tres costats de ABC, en el mateix ordre. Quatre triangles amb els tres costats proporcionals per la mateixa raó (1:2) i, de fet, iguals entre ells costat a costat: pel criteri costat-costat-costat (SSS), els quatre són congruents.",
      en: null,
    },
    que_acaba_de_passar: {
      ca: "Cap pas d'aquest argument ha calgut inventar-lo: tot surt de reduir \"són congruents\" a dues coses que ja sabies (el segment dels punts mitjans, i el criteri SSS) aplicades quatre vegades amb el mateix argument. Aquest moviment es diu «redueix el desconegut al conegut» (redueix-al-conegut) — és, de llarg, el més repetit de tot aquest projecte.\n\nAixò és el que és una demostració: un sol argument que val per als quatre triangles alhora, no quatre comprovacions per separat.",
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
