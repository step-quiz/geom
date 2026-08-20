/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/data/demos-dades.js
  ROL:          Contingut de les tres demostracions d'introducció ("què és
                una demostració"). NOMÉS tres, per disseny — no és un corpus
                creixent com preguntes-dades.js.

  CANVI DE FONS (a petició explícita de l'owner, reversió deliberada de la
  decisió documentada anteriorment "sempre visible, mai amagada"): ara
  reutilitza EXACTAMENT el mateix mecanisme de revelar-un-per-un que
  detall.js ja fa servir per a les guies reals (pintaGuia/revela) — v.
  js/ui/demo.js per la implementació. La justificació original ("aquí la
  solució s'ha de donar sencera, l'excepció explícita a la regla") queda
  desautoritzada aquí, a proposit: l'owner volia un bucle real
  llegir -> provar al paper -> comparar -> comprovar, i aquest bucle
  exigeix que l'alumne NO vegi el pas següent abans d'haver-ho intentat.

  ESTRUCTURA NOVA: cada demo és ara window.DEMOS[i].passos, un array de
  6 passos (0-5), en lloc dels quatre camps fixos claim/perque_no_es_obvi/
  argument/que_acaba_de_passar d'abans:
    pas 0 — CONTEXT. El claim + perque_no_es_obvi d'abans, fusionats.
            Sempre visible sense clicar (com l'enunciat d'una pregunta
            real) -- no te "prova-ho" perque encara no hi ha res a provar.
    pas 1..4 — un per cada panell de la figura (docs/demo-figures.html
            en te 5, 0-4; el panell 0 -- la contradiccio -- ja es dins
            del pas 0 de context, així que pas 1..4 = panells 1..4).
            Cadascun te:
              enunciat  — que ha de fer l'alumne AL PAPER abans de mirar
                          la resta d'aquest mateix pas (peça NOVA, no
                          existia al disseny anterior).
              text      — el tros d'argument corresponent (l'antic camp
                          "argument" partit en 4, un tros per panell).
              figuraPanell — quin dels 5 panells del PNG mostrar (v.
                          js/ui/demo.js, retall per CSS object-position,
                          mateixa tecnica que ja fa servir detall.js per
                          a res -- aqui es nova: la figura sencera es UNA
                          imatge de 5 panells en una sola tira, retallada
                          per ensenyar-ne nomes un alhora).
              comprovacio — pregunta autoverificable concreta (mai la
                          conclusio en si), mateix criteri que guia.
                          comprovacio a les guies reals.
    pas 5 — TANCAMENT. L'antic "que_acaba_de_passar" + handoff, fusionats.
            Es revela com un pas mes (l'ultim), no com un peu a part.

  CONVENCIÓ DE COLOR A LES FIGURES: sense canvis (tinta = ja hi era;
  sanguina = acabat de construir en aquell panell).
*/

window.DEMOS = [
  {
    id: "demo-01-angle-sum",
    titol: { ca: "Els tres angles d'un triangle sumen 180°", en: null },
    moviment: "linia-no-enunciada",
    movimentTitol: { ca: "una línia que l'enunciat no menciona", en: null },
    figura: "demo-01",
    passos: [
      {
        context: {
          ca: "Els tres angles de QUALSEVOL triangle sumen sempre 180° — sigui quina sigui la seva forma: prim, ample, gairebé pla.\n\nMira un triangle prim i llarg, i un altre gairebé equilàter: no s'assemblen gens (fixa-t'hi al primer panell de la figura, quan el revelis). Que tots dos, i qualsevol altre que et puguis imaginar, sumin exactament el mateix número no es veu mirant — cal una raó que valgui per a tots alhora, no una mesura d'un cas concret.",
          en: null,
        },
      },
      {
        enunciat: {
          ca: "Al teu paper: dibuixa un triangle ABC qualsevol (no cal que sigui \"bonic\"). Per ara, no facis res més — només mira'l. Té tres angles, i encara no saps si sumen sempre el mateix.",
          en: null,
        },
        figuraPanell: 1,
        text: {
          ca: "Aquest és el triangle de partida, sense cap element afegit encara.",
          en: null,
        },
        comprovacio: {
          ca: "El teu triangle, s'assembla al de la figura, o l'has fet d'una forma ben diferent (prim, obtús...)? Tant se val — funcionarà igual amb qualsevol dels dos.",
          en: null,
        },
      },
      {
        enunciat: {
          ca: "Ara, pel vèrtex de dalt (A) del teu triangle, traça una línia recta que sigui paral·lela al costat de baix (BC) — una línia que ningú t'ha demanat, la clau de tot l'argument. Fes-ho abans de mirar la figura.",
          en: null,
        },
        figuraPanell: 2,
        text: {
          ca: "Aquesta línia paral·lela, tallada per les dues bandes del triangle (AB i AC), és la construcció que fa possible tot el que ve després.",
          en: null,
        },
        comprovacio: {
          ca: "La teva línia, talla totes dues bandes del triangle (AB i AC) prolongades una mica més enllà de A? Si no les talla totes dues, no és prou paral·lela — repassa-ho.",
          en: null,
        },
      },
      {
        enunciat: {
          ca: "Aquesta línia paral·lela, tallada per AB i per AC, crea dos parells d'angles alterns. Abans de mirar la figura: per què creus que l'angle a l'esquerra de A (sobre la línia nova) ha de ser igual a l'angle B del triangle?",
          en: null,
        },
        figuraPanell: 3,
        text: {
          ca: "Perquè AB (i, per separat, AC) és una única recta que talla dues paral·leles (la línia nova i BC), i quan una recta en talla dues de paral·leles, els angles que queden a banda i banda —un a cada paral·lela— són iguals. Es diuen angles alterns.\n\nVal la pena aturar-se aquí, perquè aquest és l'únic pas de tot l'argument que no et demostrarem. La definició de «paral·leles» és només que no es troben mai; que a més els angles alterns hagin de ser iguals NO se'n dedueix tot sol. És un principi a part, que s'accepta com a punt de partida: Euclides el va haver de posar com un postulat seu, i durant dos mil anys hi va haver gent intentant deduir-lo de la resta, sense èxit. (No van fracassar per manca d'enginy: al final es va veure que hi ha geometries perfectament coherents on és fals.)\n\nAixò no és un forat de la demostració. És com són totes: una demostració no és una cadena infinita cap enrere, és una cadena que baixa fins a uns quants punts de partida acordats i s'hi atura. El que sí que has de poder fer sempre és assenyalar-los amb el dit. Aquest n'és un.\n\nAra mira només el que passa AL VOLTANT del punt A: els tres angles que hi conflueixen (l'angle esquerre igual a B, l'angle propi de A, i l'angle dret igual a C) formen, junts, una línia recta — 180° exactes, perquè és literalment un angle pla. Però aquests tres angles SÓN, en valor, A + B + C. Per tant A + B + C = 180°.",
          en: null,
        },
        comprovacio: {
          ca: "Compta els angles que conflueixen al punt A a la teva figura: en trobes exactament tres (l'esquerre, el propi de A, el dret)? I formen, junts, una línia recta?",
          en: null,
        },
      },
      {
        enunciat: {
          ca: "Repeteix tot l'argument (la línia paral·lela, els angles alterns) sobre un triangle MOLT diferent del teu primer — per exemple, un de molt prim i llarg. Abans de mirar la figura: funciona igual de bé?",
          en: null,
        },
        figuraPanell: 4,
        text: {
          ca: "El mateix argument, sense canviar-ne res, aplicat al triangle més prim de tots.",
          en: null,
        },
        comprovacio: {
          ca: "En cap moment de l'argument has fet servir la mida ni la forma concreta del triangle — només que existien un vèrtex A i un costat BC. Per això funciona igual amb el teu triangle prim que amb el primer.",
          en: null,
        },
      },
      {
        tancament: {
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
    ],
  },

  {
    id: "demo-02-isosceles",
    titol: { ca: "Al triangle isòsceles, la mediana i l'altura des del vèrtex coincideixen", en: null },
    moviment: "simetria-i-demostra",
    movimentTitol: { ca: "la simetria de la figura força la conclusió", en: null },
    figura: "demo-02",
    passos: [
      {
        context: {
          ca: "En un triangle isòsceles, el segment des del vèrtex (on es troben els dos costats iguals) fins al punt mitjà de la base és, alhora, PERPENDICULAR a la base.\n\n\"Va cap al punt mitjà\" (mediana) i \"cau perpendicular\" (altura) són dues definicions completament diferents, que en un triangle qualsevol donen segments diferents (mira el primer panell, quan el revelis: un isòsceles molt agut i un de molt obtús — la mateixa pregunta, dues formes que no s'assemblen). Que aquí coincideixin exactament és una coincidència que necessita explicar-se, no una cosa que es vegi a ull.",
          en: null,
        },
      },
      {
        enunciat: {
          ca: "Al teu paper: dibuixa un triangle ABC isòsceles amb AB = AC (marca'ls amb un tic a cada costat, com sempre fem en aquest projecte per marcar longituds iguals).",
          en: null,
        },
        figuraPanell: 1,
        text: {
          ca: "Triangle ABC, isòsceles amb AB = AC — el punt de partida, res més encara.",
          en: null,
        },
        comprovacio: {
          ca: "Has marcat els dos costats iguals amb un tic a cadascun? És l'única dada que farem servir de tot l'argument.",
          en: null,
        },
      },
      {
        enunciat: {
          ca: "Marca M, el punt mitjà de BC, i traça el segment AM. Fes-ho abans de mirar la figura.",
          en: null,
        },
        figuraPanell: 2,
        text: {
          ca: "M és el punt mitjà de BC; AM és el segment que investigarem.",
          en: null,
        },
        comprovacio: {
          ca: "M queda a la mateixa distància de B que de C? És l'única condició que ha de complir.",
          en: null,
        },
      },
      {
        enunciat: {
          ca: "Imagina que retalles el triangle i el doblegues per AM, com un plec de paper. Abans de mirar la figura: on cau el punt B un cop plegat? I l'angle AMB, sobre quin altre angle creus que cau?",
          en: null,
        },
        figuraPanell: 3,
        text: {
          ca: "Aquest plec és, en el llenguatge de la geometria, una REFLEXIÓ — i una reflexió té una propietat que fem servir sense dir-la sovint: no canvia cap longitud ni cap angle de la figura que mou, només en canvia la posició (com mirar-te al mirall: la teva alçada no varia perquè te la reflecteixin). El costat AB cau exactament sobre AC (són iguals, per hipòtesi), i com que M és el punt mitjà, el punt B cau exactament sobre C. El plec fa coincidir els dos triangles ABM i ACM del tot.\n\nSi els dos triangles coincideixen pel plec, els dos angles a M (AMB i AMC) també coincideixen — són iguals. Però, alhora, aquests dos angles junts formen una línia recta (B, M i C estan alineats): sumen 180°. Dos angles iguals que sumen 180° només poden ser de 90° cadascun. AM és perpendicular a BC.",
          en: null,
        },
        comprovacio: {
          ca: "Els dos angles que AM forma amb BC (a banda i banda de M), et sembla, a ull, que siguin els dos rectes? És exactament el que acabes de demostrar, no una coincidència del teu dibuix.",
          en: null,
        },
      },
      {
        enunciat: {
          ca: "Repeteix el mateix plec sobre un isòsceles molt més obtús que el teu primer (una base ampla, un vèrtex baix). Abans de mirar la figura: el plec continua fent coincidir els dos triangles?",
          en: null,
        },
        figuraPanell: 4,
        text: {
          ca: "El mateix argument, sense canviar-ne res, sobre el més esprimatxat dels dos triangles del primer panell.",
          en: null,
        },
        comprovacio: {
          ca: "En cap moment has fet servir com d'agut o com d'obtús és el triangle — només que AB = AC. Per això el plec funciona igual als dos.",
          en: null,
        },
      },
      {
        tancament: {
          ca: "L'argument no ha mesurat res: ha fet servir que la figura té una simetria (el plec, és a dir, una reflexió) i n'ha llegit una conclusió que calia demostrar. Aquest moviment es diu «fes servir la simetria per demostrar-ho» (simetria-i-demostra) — el retrobaràs en preguntes que, a primer cop d'ull, no semblen tenir res a veure amb aquesta.\n\nAixò és el que és una demostració: la mateixa raó (el plec, la igualtat dels dos costats) val per a QUALSEVOL triangle isòsceles, no només per al que has dibuixat.",
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
    ],
  },

  {
    id: "demo-03-four-triangles",
    titol: { ca: "Els quatre triangles que formen els punts mitjans són idèntics", en: null },
    moviment: "redueix-al-conegut",
    movimentTitol: { ca: "redueix el desconegut a una cosa que ja saps", en: null },
    figura: "demo-03",
    passos: [
      {
        context: {
          ca: "Uneix els tres punts mitjans dels costats d'un triangle. Es formen quatre triangles petits — i els quatre són exactament idèntics (congruents) entre ells.\n\n\"Idèntics\" és una afirmació forta sobre QUATRE regions que, a ull, no s'assemblen (mira el primer panell, quan el revelis: les quatre peces soltes, una capgirada) — una queda cap per avall al mig, les altres tres dretes a les cantonades. Comprovar-ho mesurant un parell no basta — cal un sol argument que expliqui els quatre alhora.",
          en: null,
        },
      },
      {
        enunciat: {
          ca: "Al teu paper: dibuixa un triangle ABC qualsevol.",
          en: null,
        },
        figuraPanell: 1,
        text: {
          ca: "El triangle de partida, sense cap punt marcat encara.",
          en: null,
        },
        comprovacio: {
          ca: "No cal cap propietat especial — qualsevol triangle serveix per a tot el que ve ara.",
          en: null,
        },
      },
      {
        enunciat: {
          ca: "Marca D, E, F: els punts mitjans dels costats AB, BC i CA respectivament. Fes-ho abans de mirar la figura.",
          en: null,
        },
        figuraPanell: 2,
        text: {
          ca: "D, E, F: els tres punts mitjans, un per costat.",
          en: null,
        },
        comprovacio: {
          ca: "Tens tres punts marcats, un a cada costat, cadascun exactament a mig camí entre els dos vèrtexs que l'envolten?",
          en: null,
        },
      },
      {
        enunciat: {
          ca: "Uneix D amb E, E amb F, i F amb D. Abans de mirar la figura: quina relació esperes que hi hagi entre el segment DE i el costat AC (el que no toca ni D ni E)?",
          en: null,
        },
        figuraPanell: 3,
        text: {
          ca: "El segment que uneix els punts mitjans de dos costats d'un triangle és paral·lel al tercer costat, i en fa exactament la meitat de llarg — un fet que ja coneixes, aplicat aquí tres vegades: DE fa la meitat de AC, EF fa la meitat de AB, i FD fa la meitat de BC. Això vol dir que el triangle DEF (el del mig) té els tres costats a meitat dels tres costats de ABC — i el mateix es pot comprovar per als altres tres triangles petits. Quatre triangles amb els tres costats proporcionals per la mateixa raó (1:2): pel criteri costat-costat-costat (SSS), els quatre són congruents.",
          en: null,
        },
        comprovacio: {
          ca: "El segment DE que has traçat, et sembla paral·lel a AC, i clarament més curt? És exactament la meitat de llarg, encara que a ull costi de jutjar-ho amb precisió.",
          en: null,
        },
      },
      {
        enunciat: {
          ca: "Repeteix D, E, F i el triangle del mig sobre un triangle molt més aixafat que el teu primer. Abans de mirar la figura: els quatre triangles petits continuen sent idèntics entre ells?",
          en: null,
        },
        figuraPanell: 4,
        text: {
          ca: "El mateix fet dels punts mitjans, aplicat tres vegades, sobre un triangle molt més aixafat.",
          en: null,
        },
        comprovacio: {
          ca: "Ni la forma del triangle ABC ni la posició de D, E, F com a punts \"especials\" hi han fet cap paper — només que són punts mitjans. Per això funciona igual de bé aquí.",
          en: null,
        },
      },
      {
        tancament: {
          ca: "Cap pas d'aquest argument ha calgut inventar-lo: tot surt de reduir \"són congruents\" a dues coses que ja sabies (el segment dels punts mitjans, i el criteri SSS) aplicades quatre vegades. Aquest moviment es diu «redueix el desconegut al conegut» (redueix-al-conegut) — és, de llarg, el més repetit de tot aquest projecte.\n\nAixò és el que és una demostració: un sol argument que val per als quatre triangles alhora, no quatre comprovacions per separat.",
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
    ],
  },
];

/*
  TANCAMENT COMPARTIT — no pertany a cap de les tres demos soles. Es
  renderitza un sol cop, despres de les tres, per js/ui/demo.js. Sense
  canvis respecte de la versio anterior (el redisseny d'aquesta sessio
  nomes toca l'interior de cada demo individual, no aquest bloc).
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
