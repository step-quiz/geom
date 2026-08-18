/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/data/guies-dades.js
  ROL:          Guies de demostració ("escala de pistes") per a les preguntes
                que en tenen. Estructura paral·lela a preguntes-dades.js:
                variable GLOBAL window.GUIES, no un JSON amb fetch(), perquè
                el lloc s'ha d'obrir amb doble clic sobre file:// i qualsevol
                fetch() hi seria bloquejat per CORS (mateixa raó documentada
                a PROJECTES-TECHNICAL-REFERENCE.md per a preguntes-dades.js).

  PER QUÈ UN FITXER A PART I NO UN CAMP DINS DE preguntes-dades.js
  Les guies s'escriuen en lots successius i es revisen a fora (fitxers
  GUIES-LOT-N.md), mentre que preguntes-dades.js es REGENERA sencer des del
  JSON d'extracció del llibre. Tenir-les separades vol dir que regenerar les
  preguntes no pot destruir les guies, i que afegir un lot de guies no obliga
  a tornar a generar les 130 preguntes. La unió es fa en temps d'execució per
  id (v. js/nucli/guies.js).

  ESQUEMA (per id de pregunta)
    moviment       — slug del moviment que ensenya la guia; vocabulari tancat,
                     filtrable igual que dimensio/dificultat. Font de veritat:
                     la columna `moviment` de manifest.tsv.
    movimentTitol  — {ca,en} el mateix, en prosa, per mostrar a la interfície.
    lot            — número de lliurament (1-4). Traçabilitat de revisió.
    pistes[]       — SEMPRE 4, nivells 0..3, en ordre. Els quatre nivells
                     difereixen en ESPÈCIE, no en quantitat:
                       0 encàrrec  — reformula què cal produir
                       1 concreta  — particularitza, prova amb números
                       2 figura    — la construcció, com a imatge
                       3 tanca     — què cal mirar, sense dir la conclusió
                     `figura` només és no-null al nivell 2 (excepció: q15, que
                     en té una a l'1 i una altra al 3).
    comprovacio    — {ca,en} predicció verificable. MAI la solució.
    iDespres       — {ca,en} on retorna aquest moviment més endavant.

  IDIOMA: el contingut és en CATALÀ. Els camps `en` són null a propòsit i
  cauen a `ca` via geoContingut.resolCamp() — l'invers de preguntes-dades.js,
  on l'original és l'anglès. contingut.js ho tracta amb resolCampGuia(), que
  fa el fallback en la direcció correcta per a aquest fitxer.

  GENERAT per parse_guies.py a partir de GUIES-LOT-1..4.md. No editar a mà:
  edita el .md corresponent i torna a generar.
*/

window.GUIES = {
  "q01": {
    "moviment": "centre-per-simetria",
    "movimentTitol": {
      "ca": "troba un punt per simetria (moviment nou d'aquest lot)",
      "en": null
    },
    "lot": 4,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què vol dir \"el\" centre",
          "en": null
        },
        "text": {
          "ca": "Un triangle qualsevol té diversos punts que es podrien dir \"centre\": on es tallen les altures, on es tallen les bisectrius, on es tallen les medianes... En general són tres punts diferents. La pregunta interessant no és calcular- ne un, és preguntar-se per què, en el cas equilàter, tothom en diu el centre com si n'hi hagués només un.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "comença per una sola mediana",
          "en": null
        },
        "text": {
          "ca": "Tria un vèrtex i uneix-lo amb el punt mitjà del costat oposat. Aquesta línia, per simetria del triangle equilàter (els dos costats que surten del vèrtex triat són iguals), parteix l'angle del vèrtex en dos d'iguals i el costat oposat en dos d'iguals alhora. Cap altre triangle té aquesta propietat de franc amb una sola línia.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Fixa't que les tres medianes semblen tallar-se en un sol punt. No és un accident del dibuix.",
          "en": null
        },
        "figura": "fig-034.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Per simetria, si repeteixes l'argument de la pista 1 amb els altres dos vèrtexs, obtens tres línies, cadascuna alhora bisectriu d'angle, mediana i altura del seu vèrtex. Que les tres coincideixin en un punt és el que fa que, en aquest cas (i només en aquest), \"el centre\" tingui sentit sense ambigüitat: bisectrius, medianes i altures hi són totes tres alhora.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Un triangle equilàter de costat 12. La mediana des d'un vèrtex fa 6√3 ≈ 10,39. El centre hi és a 2/3 d'aquesta distància des del vèrtex: 2/3 × 10,39 ≈ 6,93. Si el teu raonament dona una altra proporció, revisa-la.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest \"punt on coincideixen tres rectes que en un triangle general són tres punts diferents\" és un patró que reapareixerà cada vegada que afegeixis una simetria a una figura: la simetria no crea coincidències, en col·lapsa d'altres que ja existien per separat.",
      "en": null
    }
  },
  "q02": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 4,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "No has de demostrar que un parell és congruent: n'hi ha quatre, i has d'explicar per què tots quatre ho són entre ells, amb un sol argument que valgui per als quatre alhora.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "mira només els costats nous",
          "en": null
        },
        "text": {
          "ca": "Cada línia nova que has afegit uneix dos punts mitjans de costats del triangle gran. Aquesta línia, per un resultat que probablement ja coneixes (el segment que uneix dos punts mitjans és paral·lel al tercer costat i en fa la meitat), et diu la mida dels tres costats de cadascun dels quatre triangles petits sense haver de mesurar res.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "El segon triangle (el de la dreta, no equilàter) és a posta: el mateix argument ha de funcionar-hi igual, sense cap simetria addicional a ajudar.",
          "en": null
        },
        "figura": "fig-035.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Si els tres costats d'un triangle mesuren la meitat dels tres costats d'un altre (i en el mateix ordre), els dos triangles són congruents — és el criteri costat-costat-costat. Aplica'l als quatre triangles petits: tots quatre tenen per costats la meitat dels tres costats del triangle gran.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Un triangle de costats 6, 8, 10. Cada triangle petit ha de tenir costats 3, 4, 5 — i per tant és rectangle (3² + 4² = 5²), encara que el triangle gran no ho fos necessàriament abans de comprovar-ho.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta subdivisió en quatre és la mateixa que fa servir la demostració clàssica del teorema de Pitàgores per dissecció, i la retrobaràs si mai treballes amb el rombe (q02 → q11/q12 comparteixen la idea de \"quin paral·lelogram surt de connectar punts mitjans\").",
      "en": null
    }
  },
  "q03": {
    "moviment": "recompte-o-induccio",
    "movimentTitol": {
      "ca": "compta totes les configuracions possibles",
      "en": null
    },
    "lot": 6,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què vol dir \"encaixar\" en un mosaic",
          "en": null
        },
        "text": {
          "ca": "A cada punt on es toquen diversos polígons, els seus angles interiors han de sumar exactament 360° —ni menys (quedaria un buit) ni més (se sobreposarien). La pregunta es converteix en: quines combinacions de polígons regulars, sumant els seus angles (que ja saps calcular des de q04), donen exactament 360°?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "prova-ho amb el cas més senzill",
          "en": null
        },
        "text": {
          "ca": "Tres hexàgons regulars es toquen en un vèrtex. Cada angle val 120° (q04 amb n=6). Suma'ls. I amb dos hexàgons i un quadrat?",
          "en": null
        },
        "figura": "fig-179.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "El primer panell mostra tres hexàgons que sí que encaixen (l'arc marca l'angle complet, 360°, sense buit). El segon mostra dos hexàgons més un quadrat, que no encaixen: hi queda una escletxa oberta de 30°.",
          "en": null
        },
        "figura": "fig-069.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Amb triangles (60°) pots ajuntar-ne 3, 4, 5 o 6 a un vèrtex (180°, 240°, 300°, 360° exactes). Amb quadrats (90°), quants? Amb pentàgons (108°)? Amb hexàgons (120°)? Per a cada polígon regular, quantes còpies calen per arribar (o no) a 360° exactes?",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Sis triangles: 6×60°=360° ✓. Quatre quadrats: 4×90°=360° ✓. Tres hexàgons: 3×120°=360° ✓. Tres pentàgons: 3×108°=324°, no arriba. Compta quantes combinacions VÀLIDES (no necessàriament d'un sol tipus de polígon) trobes en total.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest mateix recompte, aplicat als poliedres en lloc dels mosaics del pla (angle menor que 360°, no igual, perquè la figura s'aixequi cap a la tercera dimensió en lloc de quedar plana), és exactament el que ja vas fer a q08b.",
      "en": null
    }
  },
  "q04": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 6,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "q70 et va donar la suma de TOTS els angles interiors. Aquí et demanen un angle SOL — el d'un vèrtex qualsevol, ja que el polígon és regular i tots són iguals.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "un pas més enllà de q70",
          "en": null
        },
        "text": {
          "ca": "Si (n−2)×180° és la suma de tots els n angles, i tots els angles valen el mateix perquè el polígon és regular, quina operació et falta fer?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "El vèrtex marcat en sanguina és on conflueixen tots els triangles del ventall de q70 — el seu angle complet és la suma que has de dividir.",
          "en": null
        },
        "figura": "fig-054.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Escriu la fórmula sencera: angle = (n−2)×180°/n. Comprova que per n=3 et dona 60° i per n=4 et dona 90°, els dos casos que ja saps de memòria.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Hexàgon (n=6): (6−2)×180/6 = 120°. Octàgon (n=8): (8−2)×180/8 = 135°.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta fórmula és exactament l'eina que et caldrà a q03 per decidir quines combinacions de polígons regulars omplen un vèrtex sense deixar buit ni sobreposar-se.",
      "en": null
    }
  },
  "q05": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut — un triangle isòsceles amagat a cada punta",
      "en": null
    },
    "lot": 4,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "les dues estrelles no són el mateix objecte \"amb més puntes\"",
          "en": null
        },
        "text": {
          "ca": "L'estrella de cinc puntes es dibuixa unint cada vèrtex d'un pentàgon regular amb el següent-però-un (saltant-ne un). La de vuit puntes fa el mateix però saltant-ne dos. Aquest \"quants en saltes\" no és un detall estètic: és el número que determina l'angle de la punta.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "aïlla una sola punta",
          "en": null
        },
        "text": {
          "ca": "Cada punta de l'estrella és el vèrtex d'un triangle isòsceles format per dos segments de l'estrella i, com a base, la corda que uneix els dos punts on aquests segments toquen la circumferència que passa per totes les puntes. L'angle que busques és l'angle al vèrtex d'aquest triangle.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "L'arc marcat és a una sola punta de cada estrella —el mateix argument val per a totes les altres per simetria, no cal repetir el dibuix cinc (o vuit) vegades. La corda discontínua tanca el triangle isòsceles de la punta: uneix els dos punts on hi arriben els dos costats marcats amb ratlleta (les cames de l'isòsceles). Aquesta corda no és cap aresta de l'estrella —l'estrella només \"salta\" vèrtexs— és la construcció auxiliar que fa visible el triangle que la Pista 1 descriu.",
          "en": null
        },
        "figura": "fig-048.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "L'angle a la punta d'una estrella {n/k} (n puntes, saltant k-1 vèrtexs cada vegada) es pot obtenir com 180° × (n − 2k)/n, a partir de mirar quant arc de la circumferència queda \"fora\" del triangle isòsceles de la punta. No cal que et memoritzis aquesta fórmula: val més que la retrobis tu mateix mirant quants arcs iguals (dels n en què queda partida la circumferència pels n vèrtexs) queden entre els dos costats de cada punta.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Estrella de cinc puntes (n=5, saltant-ne 1, és a dir k=2): 180×(5−4)/5 = 36°. Estrella de vuit puntes com la del dibuix (n=8, k=3): 180×(8−6)/8 = 45°. Suma dels angles de les cinc puntes del pentagrama: 5×36° = 180° —una coincidència curiosa que val la pena que comprovis si es manté amb l'estrella de vuit puntes (5×36 no aplica aquí: fes el càlcul anàleg amb 8×45).",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta manera de descriure una estrella com \"polígon {n/k}\" —n vèrtexs, saltant-ne k−1 cada vegada— és la mateixa notació amb què es descriuen els polígons estrellats en general, i determina no només l'angle de la punta sinó també si la figura surt d'un sol traç continu o de diversos (depenent de si n i k tenen factors comuns).",
      "en": null
    }
  },
  "q06": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut (una altra mirada sobre la triangulació de q70/q29)",
      "en": null
    },
    "lot": 4,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "aquí no compten triangles, es miren angles",
          "en": null
        },
        "text": {
          "ca": "q70 i q29 preguntaven \"quants\". Aquesta pregunta no vol un recompte: vol que et fixis en la mida de cadascun dels quatre angles que es formen al vèrtex entre diagonals consecutives, i que trobis la relació que hi ha entre ells.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "aposta abans de mirar la construcció",
          "en": null
        },
        "text": {
          "ca": "Amb quatre angles diferents dibuixats al mateix vèrtex d'un heptàgon regular, esperes que siguin tots diferents, que hi hagi parells iguals, o que siguin tots exactament iguals? Escriu la teva aposta abans de continuar.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Els quatre arcs són a radis diferents només perquè, si els dibuixéssim tots al mateix radi des d'un vèrtex on conflueixen sis línies, es taparien entre ells. La mida del radi no significa res: només hi és per poder-los distingir a simple vista.",
          "en": null
        },
        "figura": "fig-038.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "En un polígon regular inscrit en una circumferència, l'angle que es veu des d'un vèrtex entre dos vèrtexs consecutius depèn només de quants costats del polígon separen aquests dos vèrtexs — no de quins vèrtexs concrets siguin. Com que els quatre angles del dibuix separen sempre un vèrtex del següent (mai en salten dos de cop), els quatre subtendeixen el mateix arc de circumferència, i per tant són el mateix angle.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb la fórmula de l'angle inscrit, cadascun d'aquests quatre angles val 180°/7 ≈ 25,71°. Multiplicat pels quatre: 102,86°, que sumat als dos angles dels extrems del ventall (que no són d'aquest tipus) hauria de completar la suma total que ja coneixes de q70 per a n=7: 900°.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest és un cas particular d'un fet més general que segurament ja coneixes amb un altre nom: angles inscrits que subtendeixen el mateix arc són iguals. Aquí l'has vist aparèixer dins d'una triangulació, no dins d'una circumferència amb dos radis com sol presentar-se.",
      "en": null
    }
  },
  "q07": {
    "moviment": "invariant",
    "movimentTitol": {
      "ca": "invariant",
      "en": null
    },
    "lot": 6,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "\"volta sencera\" és el que ja coneixes",
          "en": null
        },
        "text": {
          "ca": "Quan camines vora un polígon convex i tornes al punt de partida, has girat exactament 360° en total —una volta. La pregunta és què passa quan el camí es creua a si mateix, com al pentagrama de q05.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "separa \"angle de la punta\" de \"quant gires\"",
          "en": null
        },
        "text": {
          "ca": "A cada punta del pentagrama, l'angle interior és 36° (ja el vas trobar a q05). Quant gires en cada punta no és aquest angle: és el suplementari, 180°−36°=144° —el gir és cap enfora, no cap endins.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Els cinc arcs marquen, a cada punta, el mateix angle de 36° que ja vas trobar a q05 — la peça nova és comptar-los junts d'una manera diferent.",
          "en": null
        },
        "figura": "fig-063.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Multiplica 144° pel nombre de puntes. El resultat, dividit per 360°, et diu quantes voltes senceres fa el camí abans de tancar-se.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "5×144°=720°=2×360° —el pentagrama {5/2} fa dues voltes completes. Comprova el mateix per l'estrella de vuit puntes {8/3}: cada gir és 3×360°/8=135°, i 8×135°=1080°=3×360°.",
      "en": null
    },
    "iDespres": {
      "ca": "El nombre de voltes (2 per {5/2}, 3 per {8/3}) és exactament el \"k\" del símbol {n/k} amb què vas construir les estrelles a q05 — no és casualitat, és la mateixa idea mirada des de dues bandes.",
      "en": null
    }
  },
  "q08a": {
    "moviment": "construeix-per-definir",
    "movimentTitol": {
      "ca": "construeix per definir — abans de respondre \"quins\", cal fixar què vol dir \"simètric\" aquí",
      "en": null
    },
    "lot": 4,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "\"simètric\" és ambigu si no l'acotes",
          "en": null
        },
        "text": {
          "ca": "Un poliedre pot tenir moltes menes de simetria (reflexió en un pla, gir al voltant d'un eix, simetria puntual...). Aquesta pregunta, tal com la planteja el llibre en aquest punt, es refereix als poliedres amb el grau més alt possible de simetria: aquells on totes les cares són el mateix polígon regular i tots els vèrtexs tenen el mateix aspecte al seu voltant. Val la pena que fixis aquesta definició abans de continuar, perquè si la relaxes surten moltes més figures.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "comença pel cas que ja coneixes bé",
          "en": null
        },
        "text": {
          "ca": "El cub és l'exemple més familiar: sis cares quadrades, tres arestes a cada vèrtex. Té, entre altres simetries, eixos que passen per parells de vèrtexs oposats (la diagonal principal), eixos pel centre de cares oposades, i eixos pel punt mitjà d'arestes oposades. Identificar-los tots en un sol sòlid conegut et dona el vocabulari per parlar-ne en general.",
          "en": null
        },
        "figura": "fig-180.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "La diagonal sanguina uneix dos vèrtexs oposats del cub —un dels eixos de simetria de rotació del cub (gir de 120° al voltant d'aquest eix porta el cub sobre ell mateix).",
          "en": null
        },
        "figura": "fig-051.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Fixa't que no tot poliedre amb cares totes iguals és \"simètric\" en aquest sentit fort: cal a més que els vèrtexs siguin tots equivalents entre ells. Aquesta doble condició (cares regulars i iguals, vèrtexs tots equivalents) és exactament la que defineix els poliedres regulars, que la pregunta següent (q08b) et demana llistar exhaustivament.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Compta, per al cub, quants eixos de simetria de cada tipus té: 4 eixos vèrtex-a-vèrtex, 3 eixos cara-a-cara, 6 eixos aresta-a-aresta — 13 eixos en total (sense comptar el centre com a eix). Aquest recompte, combinat amb els girs que cada eix permet, dona el grup de simetries complet del cub, d'ordre 24.",
      "en": null
    },
    "iDespres": {
      "ca": "La pregunta natural que ve després de \"quins són els poliedres amb aquest grau de simetria\" és \"quants n'hi ha, en total, en tot l'espai\" —i la resposta, sorprenentment petita i tancada, és exactament el que demana q08b.",
      "en": null
    }
  },
  "q08b": {
    "moviment": "contraexemple",
    "movimentTitol": {
      "ca": "contraexemple i comptatge — per què n'hi ha exactament cinc, ni un més",
      "en": null
    },
    "lot": 4,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "la pregunta interessant no és \"quins\", és \"per què només cinc\"",
          "en": null
        },
        "text": {
          "ca": "Saber-ne els noms (tetraedre, cub, octaedre, dodecaedre, icosaedre) és fàcil de memoritzar. El que val la pena entendre és per què la llista s'acaba exactament aquí i no continua —per què no hi ha, per exemple, un poliedre regular fet de set triangles equilàters a cada vèrtex.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "què ha de complir un vèrtex perquè \"tanqui\" en 3D",
          "en": null
        },
        "text": {
          "ca": "A cada vèrtex d'un poliedre convex s'hi han d'ajuntar com a mínim tres cares, i la suma dels seus angles en aquell vèrtex ha de ser estrictament menor que 360° (si sumessin exactament 360°, la figura quedaria plana; si sumessin més, no es podria construir en absolut). Aquesta única condició, aplicada a cada polígon regular possible, és la que talla la llista.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "El tetraedre (quatre cares triangulars, tres a cada vèrtex) i l'octaedre (vuit cares triangulars, quatre a cada vèrtex) són dos dels cinc casos: fixa't que al tetraedre l'angle a cada vèrtex és 3×60°=180° (molt per sota de 360°) i a l'octaedre 4×60°=240° (encara per sota). Els arcs marcats al vèrtex de dalt de cada sòlid són els angles de cara que s'hi ajunten — a l'octaedre només se'n poden distingir dos sense ambigüitat en aquest dibuix (els altres dos impliquen el vèrtex del darrere, amagat exactament darrere del de davant); els altres dos són iguals per simetria, com als altres vèrtexs de quatre cares.",
          "en": null
        },
        "figura": "fig-052.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho comptant els casos possibles",
          "en": null
        },
        "text": {
          "ca": "Amb triangles equilàters (60° cadascun) pots ajuntar-ne 3, 4 o 5 a un vèrtex (180°, 240° o 300°, tots per sota de 360°) —però no 6 (exactament 360°, queda pla). Amb quadrats (90°) només en pots ajuntar 3 (270°) —amb 4 ja fan 360° exactes. Amb pentàgons regulars (108°) només 3 (324°). Amb hexàgons (120°) ja 3 sols en fan 360°, cap combinació funciona. Amb polígons de més costats, l'angle és encara més gran i la situació només empitjora. Compta quantes combinacions vàlides has trobat en total.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Hauries d'arribar a exactament cinc combinacions vàlides: 3 triangles/vèrtex (tetraedre), 4 triangles/vèrtex (octaedre), 5 triangles/vèrtex (icosaedre), 3 quadrats/vèrtex (cub), 3 pentàgons/vèrtex (dodecaedre). Si en trobes més o menys de cinc, revisa el càlcul de l'angle d'algun dels polígons.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest argument —comptar quantes configuracions locals a un vèrtex són geomètricament possibles— és un dels primers exemples que segurament veuràs d'una demostració que combina geometria amb un argument purament combinatori de comptatge finit, un estil de raonament que reapareix constantment més endavant en matemàtiques.",
      "en": null
    }
  },
  "q08c": {
    "moviment": "contraexemple",
    "movimentTitol": {
      "ca": "per demostrar calen tots els casos; per refutar, en basta un",
      "en": null
    },
    "lot": 1,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "són dues preguntes",
          "en": null
        },
        "text": {
          "ca": "I poden tenir respostes diferents. No donis per fet que la segona segueix la primera; de fet el llibre les posa juntes precisament perquè no la segueix.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "quina feina et toca fer",
          "en": null
        },
        "text": {
          "ca": "Abans de contestar, decideix quina mena de feina et caldrà en cada cas: - Si creus que la resposta és sí, has de convèncer per a tots els triangles del món. Un dibuix no serveix de res. - Si creus que és no, quantes figures et calen? Pensa-ho bé: la resposta és un número molt petit.\n\nAquesta asimetria no és un truc: és com funciona tota la matemàtica.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la fila de baix",
          "en": null
        },
        "text": null,
        "figura": "fig-007.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Els dos quadrilàters de baix tenen exactament els mateixos angles: quatre de rectes cadascun. Són de la mateixa forma? Si la resposta és que no, ja has acabat la segona pregunta — i has acabat amb un sol dibuix.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "No numèrica. Escriu la frase \"dues figures amb els mateixos angles són semblants\" i afegeix-hi la paraula que la fa certa. Després mira quantes de les dotze preguntes d'aquest quadern demanaven demostrar i quantes demanaven refutar.",
      "en": null
    },
    "iDespres": {
      "ca": "q86 fa la mateixa jugada amb un contraexemple molt més subtil: per què dos costats i un angle no determinen un triangle. I la pregunta de debò que queda oberta: quina informació extra caldria afegir als angles perquè sí que funcionés per a quadrilàters?",
      "en": null
    }
  },
  "q09": {
    "moviment": "separa-i-reorienta",
    "movimentTitol": {
      "ca": "separa les peces i posa-les totes igual orientades",
      "en": null
    },
    "lot": 1,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què vol dir \"semblants\"",
          "en": null
        },
        "text": {
          "ca": "Mateixa forma, mida diferent. Per demostrar-ho no cal mesurar cap costat: n'hi ha prou de comprovar que tenen els mateixos angles.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "el fet petit que ho mou tot",
          "en": null
        },
        "text": {
          "ca": "En un triangle rectangle, si en coneixes un angle agut, ja coneixes l'altre. Per què? (Els tres sumen 180 i un ja val 90.) Conseqüència: per veure que dos triangles rectangles són semblants només cal trobar-los un angle agut en comú.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "separa-les",
          "en": null
        },
        "text": {
          "ca": "(Als tres triangles hi ha un angle marcat amb un arc i un altre amb dos arcs. Vol dir: els tres angles d'un arc valen igual entre ells, i els tres de dos arcs valen igual entre ells — però un arc i dos arcs són coses diferents. Rellegeix la taula del principi si cal.)",
          "en": null
        },
        "figura": "fig-006.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Cada peça té el seu angle recte. I cadascuna comparteix un angle agut amb el triangle gran: la de sota comparteix el de la dreta, la de dalt el de dalt. Amb l'angle recte més un agut comú, ja hi ets.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Triangle 3-4-5. L'altura sobre la hipotenusa fa 2,4 i talla la hipotenusa en 1,8 i 3,2. Comprova que els tres triangles tenen els catets en proporció 3:4 — és a dir 1,8/2,4 i 2,4/3,2 han de donar el mateix que 3/4.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta és, de fet, la demostració del teorema de Pitàgores. De la semblança surt a² = c·p i b² = c·q, on p i q són els dos trossos de la hipotenusa. Suma-les: a² + b² = c(p+q) = c². Val la pena que ho escriguis tu.",
      "en": null
    }
  },
  "q10": {
    "moviment": "simetria-i-demostra",
    "movimentTitol": {
      "ca": "endevina per simetria, després demostra",
      "en": null
    },
    "lot": 2,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "dues preguntes, un sol plec",
          "en": null
        },
        "text": {
          "ca": "Són dues afirmacions independents. Un rombe té els quatre costats iguals — i aquesta única propietat, ben mirada, respon totes dues alhora.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "pensa-ho com un plec de paper",
          "en": null
        },
        "text": {
          "ca": "Si retallessis el rombe i el doblegues per una diagonal, què passa amb els dos triangles que queden a banda i banda? (Els quatre costats són iguals, així que...)",
          "en": null
        },
        "figura": "fig-181.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-018.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El plec (la diagonal) parteix el rombe en dos triangles amb els tres costats iguals dos a dos (les marquetes ho diuen) — són congruents. D'aquí surt que la diagonal bisecta els dos angles que talla. I ara ve el pas clau: en un triangle isòsceles, la bisectriu de l'angle del vèrtex és també perpendicular al costat oposat. Aplica això dues vegades (un cop a cada triangle format per l'ALTRA diagonal) i tens la perpendicularitat. Per al paral·lelisme, torna als dos triangles congruents del primer plec: quina parella d'angles iguals et diu que dos costats són paral·lels?",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Rombe amb diagonals de 6 i 8 (perpendiculars per construcció), vèrtexs a (±3,0) i (0,±4). Comprova que els quatre costats fan 5 (el triangle 3-4-5), i que el pendent d'un costat és igual al del costat oposat.",
      "en": null
    },
    "iDespres": {
      "ca": "El mateix plec (una diagonal parteix la figura en dos triangles congruents per SSS) és el que demostra propietats de qualsevol paral·lelogram, no només del rombe — la diferència és que un paral·lelogram general només et dona UN parell d'aquests triangles, no dos, perquè només dos costats (no quatre) són iguals de dos en dos.",
      "en": null
    }
  },
  "q100": {
    "moviment": "distingeix-casos",
    "movimentTitol": {
      "ca": "distingeix casos",
      "en": null
    },
    "lot": 9,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "DUES respostes, una per cada subcas de l'enunciat —no una de sola. Primer: què li passa a una figura quan es projecta centralment entre dos plans paral·lels (punt de projecció fora d'entremig). Segon: què canvia si el punt de projecció queda ENTRE els dos plans.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "segueix un sol punt amb un paràmetre",
          "en": null
        },
        "text": {
          "ca": "Posa el punt de projecció a alçada p, un pla a alçada 0 i l'altre a alçada h. Un punt a distància x0 de l'eix, al pla 0, es projecta a distància x0·(p−h)/p al pla h (surt de resoldre on la recta des del punt de projecció talla el segon pla). Prova-ho amb p més gran que h (fora d'entremig) i després amb p entre 0 i h.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-104.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Quan p és fora de l'interval [0,h], el factor (p−h)/p és positiu: la figura es projecta ampliada o reduïda però SENSE capgirar-se —una dilatació ordinària, com q91/q92 ja et van fer veure per a la projecció paral·lela. Quan p és entre 0 i h, aquest mateix factor esdevé NEGATIU: la figura es projecta capgirada (com la imatge d'una càmera fosca), no només escalada.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "h=10. Amb p=−2 (fora, per sota): factor=(−2−10)/(−2)=6, positiu. Amb p=5 (entremig): factor=(5−10)/5=−1, negatiu —la figura surt exactament invertida i de la mateixa mida.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest capgirament és el mateix fenomen que fa que la imatge dins d'una cambra fosca (o la retina de l'ull) surti invertida: el punt de projecció (el forat) queda ENTRE l'objecte i la pantalla on es forma la imatge.",
      "en": null
    }
  },
  "q101": {
    "moviment": "invariant",
    "movimentTitol": {
      "ca": "invariant",
      "en": null
    },
    "lot": 9,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "DUES respostes diferents: SÍ per a tres punts (sempre es pot trobar una projecció que hi arribi), i en general NO per a quatre —amb la raó exacta de per què quatre punts són diferents de tres.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "compta graus de llibertat",
          "en": null
        },
        "text": {
          "ca": "Triar un punt de projecció O i una segona recta dona prou llibertat per moure tres punts on vulguis (tres condicions, prou paràmetres lliures per satisfer-les). Un quart punt, en canvi, ja no és lliure: la seva posició queda determinada pels altres tres i per la projecció concreta. Quina cosa, ja calculada a q99, és la que fixa aquest quart punt?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-105.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Un cop fixada la imatge de tres punts A,B,C (sempre possible, perquè tres punts no porten cap invariant que els lligui), la imatge D′ del quart punt D ha de complir que la raó doble (AC·BD)/(BC·AD) sigui la MATEIXA abans i després (q99) —això determina D′ de manera única. Per tant, quatre punts només es poden projectar a quatre punts amb la mateixa raó doble, no a qualssevol quatre.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb A,B,C fixats en qualsevol posició, la raó doble original (per exemple 35/27, com a q99) prediu exactament on ha de caure D′ —comprova-ho triant tres imatges A′,B′,C′ arbitràries i resolent D′ perquè la raó doble surti 35/27.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta és la primera vegada, en aquest bloc, que es veu EXPLÍCITAMENT que la raó doble no és només \"una cosa que es conserva\": és la mesura completa de la llibertat que perdem en passar de tres punts a quatre. q106 li posa nom formal («invariant projectiu») i en demana un altre exemple.",
      "en": null
    }
  },
  "q102": {
    "moviment": "dues-maneres",
    "movimentTitol": {
      "ca": "dues maneres",
      "en": null
    },
    "lot": 9,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "El mateix contrast de q101, ara amb figures planes en lloc de punts sobre una recta: SÍ per a triangles (tots equivalents projectivament), NO en general per a quadrilàters.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "compta vèrtexs, no costats",
          "en": null
        },
        "text": {
          "ca": "Un triangle té tres vèrtexs; cap parell de costats d'un triangle és \"paral·lel\" en un sentit que la projecció hagi de respectar —recorda q101: tres punts sempre es poden portar on vulguis. Un quadrilàter en té quatre. Quina relació hi ha entre \"quatre vèrtexs\" i el que ja vas veure amb \"quatre punts sobre una recta\"?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-106.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Projecta els quatre vèrtexs d'un quadrilàter des d'un punt exterior al seu pla, cap a un altre pla: talla les rectes que uneixen el punt de projecció amb cada vèrtex per una recta auxiliar que passi per quatre d'aquestes projeccions —la raó doble d'aquests quatre punts alineats (q101) és un invariant real del quadrilàter que la projecció NO pot canviar. Un quadrilàter \"aixafat\" (gairebé un triangle) i un de ben proporcionat tenen raons doubles diferents, així que no poden ser imatges projectives l'un de l'altre.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Un quadrat i un rectangle molt allargat tenen quatre vèrtexs cadascun, però la raó doble que resulta de tallar les seves diagonals prolongades amb una recta auxiliar dona valors diferents —cap projecció central pot portar l'un a l'altre. En canvi, qualsevol triangle es pot portar a qualsevol altre (comprova-ho triant tres vèrtexs origen i tres destí qualssevol i trobant el punt de projecció que ho fa).",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta asimetria —tots els triangles projectivament iguals, no tots els quadrilàters— és la raó per la qual la geometria projectiva clàssica es construeix quasi tota amb configuracions de quatre punts (com la raó doble): és el primer nombre de punts on comencen a distingir-se figures que la geometria projectiva, d'entrada, no podria distingir amb menys.",
      "en": null
    }
  },
  "q103": {
    "moviment": "distingeix-casos",
    "movimentTitol": {
      "ca": "distingeix casos",
      "en": null
    },
    "lot": 9,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una resposta de NO, amb el cas exacte on falla: quin costat del polígon original ha de tenir una propietat concreta (en relació amb el punt de projecció) perquè la seva imatge deixi de ser un segment normal.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "pensa en un sol costat primer",
          "en": null
        },
        "text": {
          "ca": "Un costat qualsevol del polígon es projecta, en general, a un altre segment. Però si aquell costat, allargat, passés exactament pel PUNT DE PROJECCIÓ mateix —què li passaria a la seva imatge?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-107.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Si la recta que conté un costat passa pel punt de projecció, tots els punts d'aquell costat es projecten des d'ells mateixos —la seva \"recta de projecció\" és la mateixa recta que ja contenia el costat. En el llenguatge que ja coneixes de q104/q105, aquell costat es projecta \"cap a l'infinit\": dos dels vèrtexs del polígon original es converteixen en un sol punt (o en cap punt ordinari) a la imatge, i el que hauria de ser un polígon tancat de n costats deixa de tancar-se com a tal.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb un triangle i un punt de projecció allunyat de qualsevol de les rectes que contenen els seus costats, la projecció és sempre un triangle normal. Si mous el punt de projecció fins que quedi exactament sobre la prolongació d'un costat, aquell costat \"desapareix\" a l'infinit en la imatge —comprova-ho seguint numèricament què passa amb la distància de projecció d'un punt d'aquell costat quan el punt de projecció s'hi acosta (tendeix a infinit).",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest és el primer lloc del bloc on \"un punt se'n va a l'infinit\" dins d'una figura real, no com a curiositat abstracta —q105 en fa la pregunta general (dues rectes en l'espai projectiu, es tallen sempre?) i q107 en dona l'exemple més important: la hipèrbola.",
      "en": null
    }
  },
  "q104": {
    "moviment": "construeix-per-definir",
    "movimentTitol": {
      "ca": "construeix per definir",
      "en": null
    },
    "lot": 9,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una descripció qualitativa concreta: tres rectes que, un cop projectades, ja NO són paral·leles entre si, sinó que tenen alguna altra relació geomètrica exacta —quina?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "pensa en les vies del tren",
          "en": null
        },
        "text": {
          "ca": "Imagina't dret entre dues vies de tren paral·leles, mirant cap on s'allunyen. Encara que són paral·leles de veritat, com les veus a l'horitzó?",
          "en": null
        },
        "figura": "fig-204.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-108.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Tres rectes paral·leles, en ser projectades des d'un punt fix, es converteixen en tres rectes CONCURRENTS —totes es tallen en un mateix punt. Aquest punt és exactament la imatge del \"punt a l'infinit\" comú a totes tres (la seva direcció comuna), pel mateix mecanisme que ja vas veure a q103: la direcció compartida es projecta a un únic punt ordinari, anomenat punt de fuga.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Tres rectes horitzontals paral·leles, projectades des d'un punt per sobre seu cap a un pla inclinat: numèricament, comprova que les tres imatges, prolongades, es tallen totes en el MATEIX punt —no en tres punts diferents.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest és, literalment, el punt de fuga de la pintura en perspectiva: qualsevol conjunt de rectes paral·leles del món real convergeix, en un dibuix o fotografia, cap a un únic punt. La geometria projectiva no en fa cap excepció: n'és la manera formal de dir-ho.",
      "en": null
    }
  },
  "q105": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 9,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una resposta de SÍ —a diferència del pla ordinari, on dues rectes paral·leles no es tallen mai— amb l'explicació exacta de quin punt \"nou\" fa que sempre es tallin.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "què li falta al pla ordinari",
          "en": null
        },
        "text": {
          "ca": "En el pla ordinari, dues rectes paral·leles són l'única excepció a \"dues rectes sempre es tallen en un punt\". q104 ja et va donar cada direcció del pla el seu propi \"punt de fuga\". Si a CADA direcció del pla li afegeixes aquest punt (un punt \"a l'infinit\" per direcció), què els passa a dues rectes paral·leles?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Diverses rectes gairebé paral·leles convergint totes cap a un mateix punt marcat \"∞\", tal com ja ho vas veure amb el punt de fuga a q104.",
          "en": null
        },
        "figura": "fig-109.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Dues rectes secants es tallen, com sempre, en un punt ordinari. Dues rectes paral·leles comparteixen la mateixa direcció, i per tant comparteixen el MATEIX punt a l'infinit (el d'aquella direcció) —es tallen allà. En l'espai projectiu (el pla ordinari més un punt a l'infinit per cada direcció), literalment CAP parella de rectes deixa de tallar-se.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Dues rectes de pendent 3 (paral·leles entre si) no es tallen mai en el pla ordinari (cap solució real al sistema d'equacions). En l'espai projectiu, totes dues \"arriben\" al mateix punt a l'infinit associat a la direcció de pendent 3 —comprova que és l'ÚNIC punt a l'infinit que comparteixen amb qualsevol tercera recta de pendent diferent (que arriba a un punt a l'infinit distint).",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta és la idea que fa que q107 funcioni: una hipèrbola —que sembla tenir dues branques separades i quatre \"extrems\" que s'allunyen cap enfora— es pot entendre com un cercle normal un cop dos dels seus punts es couen enviats a l'infinit d'aquesta mateixa manera.",
      "en": null
    }
  },
  "q106": {
    "moviment": "invariant",
    "movimentTitol": {
      "ca": "invariant",
      "en": null
    },
    "lot": 9,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Un nom i una fórmula per a la quantitat que q99 i q101 ja et van fer servir dues vegades sense anomenar-la —i, ara sí, la comprovació explícita que és realment un invariant (que no depèn de la projecció triada).",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "recupera el que ja tens",
          "en": null
        },
        "text": {
          "ca": "A q99 vas provar que (AC·BD)/(BC·AD) no canvia en projectar quatre punts. A q101 ho vas fer servir per determinar un quart punt a partir dels altres tres. Aquesta quantitat JA és la resposta —el que et falta és reconèixer-la com a tal i donar-li nom.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-110.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Aquesta quantitat s'anomena la RAÓ DOBLE (o raó anharmònica) dels quatre punts A,B,C,D: (AC·BD)/(BC·AD). És un invariant projectiu perquè qualsevol projecció central des de qualsevol punt, cap a qualsevol altra recta, la deixa exactament igual —ho vas demostrar tu mateix a q99. Cap distància individual, ni cap raó simple de dues distàncies, té aquesta propietat.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb els mateixos quatre punts de q99 (distàncies 0,2,5,9), la raó doble val 35/27 abans i després de QUALSEVOL projecció que triïs —repeteix-ho amb un punt de projecció i una recta d'arribada diferents dels que vas fer servir llavors i comprova que segueix sortint 35/27.",
      "en": null
    },
    "iDespres": {
      "ca": "Trobar aquest invariant és el pas que fa possible demostrar coses sobre projeccions sense haver de repetir un càlcul de triangles cada vegada —q107 el fa servir (implícitament, via el mecanisme de q105) per identificar amb precisió quins dos punts d'un cercle es projecten a l'infinit quan es forma una hipèrbola.",
      "en": null
    }
  },
  "q107": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 9,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "La identificació exacta de dos punts concrets d'un cercle base del con —no \"en general\", sinó els dos punts precisos que, en projectar el cercle des del vèrtex del con cap al pla de tall, se'n van a l'infinit.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "recorda per què un punt se'n va a l'infinit",
          "en": null
        },
        "text": {
          "ca": "A q103 vas veure que un punt es projecta \"a l'infinit\" exactament quan la recta de projecció (des del punt de projecció, en aquest cas el vèrtex del con) queda PARAL·LELA al pla d'arribada (el pla de tall), en lloc de tallar-lo. Amb el vèrtex del con com a punt de projecció, quines rectes que hi passen són \"les rectes de projecció\"?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-111.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Les \"rectes de projecció\" des del vèrtex són exactament les generatrius del con (les rectes rectes que el formen). Dues d'aquestes generatrius —les que passen pels dos punts del cercle base on el con és paral·lel al pla de tall— no arriben MAI al pla de tall (com dues rectes paral·leles que no es tallen, en el sentit ordinari). Els dos punts del cercle per on passen aquestes dues generatrius són exactament els que es couen \"a l'infinit\" —i per això la hipèrbola té dues branques que s'obren cap enfora sense parar: són la imatge d'un cercle sencer, menys aquests dos punts que han fugit a l'infinit.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb un con d'obertura fixa i un pla de tall que s'inclina gradualment: mentre el pla és menys inclinat que les generatrius del con, la secció és una el·lipse tancada (cap generatriu paral·lela al pla, cap punt fuig a l'infinit). Just quan el pla arriba a ser paral·lel a UNA generatriu, un sol punt fuig (paràbola). Quan el pla és encara més inclinat que qualsevol generatriu, hi ha DOS punts que hi són paral·lels —i la secció és una hipèrbola de dues branques.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta identificació és exactament el que fa falta per a q109: les esferes de Dandelin es col·loquen tocant el con al llarg d'aquests mateixos cercles base, i el seu argument depèn de saber exactament on i com el pla de tall es relaciona amb el con.",
      "en": null
    }
  },
  "q108": {
    "moviment": "un-altre-pla",
    "movimentTitol": {
      "ca": "un altre pla",
      "en": null
    },
    "lot": 9,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una descripció de tres orientacions diferents de la llanterna (o de la paret) que produeixin, respectivament, una el·lipse (o cercle), una paràbola, i una hipèrbola —el con de llum és el con, la paret és el pla de tall.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "comença perpendicular",
          "en": null
        },
        "text": {
          "ca": "Amb la llanterna apuntant exactament perpendicular a la paret, quina forma en surt? És el cas més fàcil de tots tres.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Tres orientacions de la paret respecte del con de llum: perpendicular a l'eix, inclinada però tallant només un con de llum, i inclinada encara més.",
          "en": null
        },
        "figura": "fig-112.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Perpendicular a l'eix: cercle. Inclinant la paret fins que quedi paral·lela a UNA generatriu del con de llum (la vora del feix): la taca es converteix en una paràbola, oberta per un sol costat. Inclinant encara més (com q107 ja et va fer descobrir): dues generatrius es tornen paral·leles a la paret alhora, i encara que aquí només hi ha un con (no un con doble com a q107/q109), la vora del feix de llum es veu \"obrir-se\" cap als dos costats de manera característica d'una branca de hipèrbola.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb la paret perpendicular a l'eix de la llanterna: taca circular (comprova que el contorn manté la mateixa distància al centre en totes direccions). Inclinant fins que un costat del feix quedi paral·lel a la paret: el contorn deixa de tancar-se per aquell costat.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest experiment físic —una llanterna i una paret— és la manera més directa de veure per què les tres còniques comparteixen nom de família: totes surten del mateix con, només canviant l'angle del pla de tall, exactament com q107 i q109 ho demostren amb rigor.",
      "en": null
    }
  },
  "q109": {
    "moviment": "dues-maneres",
    "movimentTitol": {
      "ca": "dues maneres",
      "en": null
    },
    "lot": 9,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una demostració completa que la secció el·líptica d'un con (tallat per un pla que no travessa totes dues nappes) és de veritat una el·lipse —és a dir, que hi ha dos punts F₁, F₂ (els focus) tals que, per a QUALSEVOL punt P de la corba de tall, PF₁+PF₂ és una constant.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "dues esferes, cadascuna tocant el con i el pla",
          "en": null
        },
        "text": {
          "ca": "Dins de cada nappa del con (per damunt i per sota del pla de tall) hi cap exactament una esfera tangent tant a la superfície del con com al pla de tall. Anomena F₁ i F₂ els dos punts on cada esfera toca el pla —aquests seran els focus. Per a un punt P qualsevol de la corba de tall, quina relació hi ha entre PF₁ i la distància, MESURADA SOBRE LA SUPERFÍCIE DEL CON, entre P i el cercle on la primera esfera hi és tangent?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-113.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Dues maneres de mesurar la mateixa distància: (a) PF₁ és una tangent des de P a l'esfera 1 —i totes les tangents des d'un mateix punet a una esfera tenen la mateixa longitud (q93, aquest mateix lot). (b) El segment de la generatriu del con des de P fins al cercle de tangència amb l'esfera 1 és TAMBÉ una tangent des de P a aquesta mateixa esfera (la generatriu és tangent a l'esfera al llarg de tot el con). Per tant PF₁ = aquest tros de generatriu. Igual per PF₂ amb l'esfera 2, cap a l'altre cercle de tangència. Suma PF₁+PF₂: és exactament la longitud del tros de generatriu ENTRE els dos cercles de tangència —la mateixa per a QUALSEVOL generatriu, perquè els dos cercles de tangència són fixos (no depenen de P). Constant trobada.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb un con d'obertura 30° i un pla de tall concret, la suma PF₁+PF₂ calculada per a diversos punts P de la corba de tall (numèricament, amb les coordenades 3D reals) surt EXACTAMENT la mateixa —per exemple, en un cas verificat, 12,86 unitats per a qualsevol dels punts provats.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest argument —el mateix tram de recta, mesurat de dues maneres, forçat a ser igual (q93 per a la tangència, geometria del con per a la longitud sobre la superfície)— torna a q94, però al REVÉS: q94 partia de la definició (dos focus, suma constant) i en deduïa que un cercle és el cas amb els dos focus fosos; aquí, en canvi, comences del con i DEMOSTRES que la corba resultant compleix la definició amb focus concrets. Quan el pla de tall és perpendicular a l'eix del con, les dues esferes de Dandelin es couen igual de grans i tangents al mateix cercle —els dos focus col·lapsen en un de sol, exactament el cas límit de q94.",
      "en": null
    }
  },
  "q11": {
    "moviment": "dues-maneres",
    "movimentTitol": {
      "ca": "dues maneres de mirar la mateixa figura",
      "en": null
    },
    "lot": 4,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què saps del paral·lelogram sense demostrar res",
          "en": null
        },
        "text": {
          "ca": "Per definició, un paral·lelogram té els dos parells de costats paral·lels. Això, i només això —cap mesura, cap suposició addicional— és tot el que et pots permetre servir-te al començament.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "una diagonal parteix la figura en dos",
          "en": null
        },
        "text": {
          "ca": "Traça una diagonal. Els dos triangles que en resulten comparteixen aquesta diagonal com a costat comú. Amb els costats paral·lels donats, quins angles d'aquests dos triangles pots dir que són iguals sense mesurar, només per la propietat de rectes paral·leles tallades per una transversal?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Els arcs marquen quins angles resulten iguals amb aquest argument: un arc per a un parell, dos arcs per a l'altre parell. No són el mateix angle repetit dues vegades, són dos parells diferents.",
          "en": null
        },
        "figura": "fig-039.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Amb els dos triangles congruents (comparteixen la diagonal, i tenen dos parells d'angles iguals per paral·lelisme, cosa que en determina el tercer), suma els angles que cauen en cada vèrtex del paral·lelogram original i compara els vèrtexs oposats entre ells.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Si un angle del paral·lelogram fa 65°, el seu oposat també n'ha de fer 65°, i els altres dos (adjacents a aquest) n'han de fer 115° cada un —perquè els quatre han de sumar 360°, i els adjacents entre ells sumen sempre 180°.",
      "en": null
    },
    "iDespres": {
      "ca": "El mateix parell de triangles que has fet servir aquí és el que tornaràs a fer servir a q12, per a una pregunta relacionada però amb la implicació girada: allà no et donen que és un paral·lelogram, t'ho donen com una cosa a demostrar.",
      "en": null
    }
  },
  "q110": {
    "moviment": "identitat-com-a-figura",
    "movimentTitol": {
      "ca": "identitat com a figura",
      "en": null
    },
    "lot": 9,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Quants eixos de simetria té una hipèrbola (dues branques), i per què —una raó que es vegi directament en la seva equació, no només \"perquè sí\" mirant el dibuix.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "mira només les potències, no els signes",
          "en": null
        },
        "text": {
          "ca": "L'equació d'una hipèrbola centrada a l'origen és x²/a² − y²/b² = 1. Si canvies x per −x, canvia l'equació? I si canvies y per −y?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-114.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Com que només hi apareixen x² i y² (mai x ni y soles), substituir x per −x deixa l'equació exactament igual —això vol dir que si (x,y) hi és un punt de la corba, (−x,y) també ho és: simetria respecte de l'eix vertical. El mateix argument amb y per −y dona simetria respecte de l'eix horitzontal. I la combinació de dues reflexions perpendiculars és una rotació de 180° al voltant del centre —una tercera simetria, de franc.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb a=3, b=4: el punt (5,4/3·√(25−9))... més senzill: comprova que si (x₀,y₀) satisfà x₀²/9−y₀²/16=1, aleshores (−x₀,y₀), (x₀,−y₀) i (−x₀,−y₀) també ho satisfan —substitueix-los directament a l'equació i comprova que dona el mateix resultat en els quatre casos.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest mateix argument (només potències parelles ⇒ simetria) és el que ja explica per què una el·lipse x²/a²+y²/b²=1 té també dos eixos de simetria, i per què una paràbola y²=4px en té només UN (hi apareix x a la primera potència, no x²) —la mateixa tècnica, aplicada a les tres còniques, prediu correctament quantes simetries té cadascuna.",
      "en": null
    }
  },
  "q111": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 9,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una identificació exacta de què és \"el diamant\" (el quadrilàter que formen les dues asímptotes i les tangents als vèrtexs) i una prova que el seu costat val exactament el mateix que la distància del centre a cada focus.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "el diamant té els vèrtexs sobre els dos eixos",
          "en": null
        },
        "text": {
          "ca": "Amb els vèrtexs de la hipèrbola a distància a del centre (sobre un eix) i les seves tangents tallant les asímptotes a distància b del mateix centre (sobre l'altre eix), el \"diamant\" és el quadrilàter amb aquests quatre punts com a vèrtexs: (0,a), (b,0), (0,−a), (−b,0). Quin tipus de quadrilàter és, exactament, si les seves diagonals es tallen en angle recte i es reparteixen per la meitat?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-115.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Aquest quadrilàter és un rombe (les seves quatre costats són iguals), perquè les seves diagonals —de longituds 2a i 2b— es tallen perpendicularment pel seu punt mitjà comú (el centre). El costat d'aquest rombe és la hipotenusa d'un triangle rectangle de catets a i b: costat = √(a²+b²). Aquesta mateixa expressió, √(a²+b²), és exactament c, la distància del centre als focus —la \"constant focal\" d'aquest llibre.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "a=3, b=4: costat del diamant = √(9+16)=√25=5 —un triangle 3-4-5 exacte. Comprova que els focus, situats a distància c=5 del centre, cauen efectivament sobre l'eix on són els vèrtexs de la hipèrbola.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta identitat —costat del rombe igual a c— és el mateix triangle rectangle (a, b, c) que ja apareixia amagat a l'equació de la hipèrbola des del principi; converteix una relació algebraica en una relació que es veu directament en un dibuix, tancant el bloc de projecció i còniques amb la mateixa idea que l'obria a q91: mesurar una longitud amb un triangle rectangle ben triat.",
      "en": null
    }
  },
  "q112": {
    "moviment": "dilatacio",
    "movimentTitol": {
      "ca": "dilatació",
      "en": null
    },
    "lot": 10,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una hipèrbola qualsevol té dues asímptotes que es tallen amb un angle que depèn de la seva \"forma\". Una hipèrbola recta (o rectangular) és la que té les asímptotes perpendiculars. Has de trobar la dilatació — diferent en horitzontal i en vertical— que converteix la primera en la segona.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "separa les dues direccions",
          "en": null
        },
        "text": {
          "ca": "Una hipèrbola es descriu amb dos números, a (semieix) i b (el que marca el pendent de les asímptotes). Si dilates l'eix horitzontal per un factor i el vertical per un altre —factors diferents, no una dilatació uniforme—, què li passa al pendent de les asímptotes?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Una hipèrbola amb asímptotes inclinades (traç negre), i al costat, en sanguina, la mateixa hipèrbola després de dilatar cada eix pel factor que cal — les asímptotes ara perpendiculars.",
          "en": null
        },
        "figura": "fig-116.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Si l'equació és x²/a² − y²/b² = 1, divideix x per a i y per b: la corba es converteix en X² − Y² = 1, l'equació d'una hipèrbola recta (asímptotes Y = ±X, que formen 90°). Aquesta substitució és exactament una dilatació de factor 1/a en horitzontal i 1/b en vertical.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "a=4, b=3: l'equació x²/16 − y²/9 = 1 esdevé X²−Y²=1 amb X=x/4, Y=y/3. Comprova un punt: x=4√2, y=3 satisfà l'original (32/16−9/9=2−1=1 ✓); X=√2, Y=1 satisfà la recta (2−1=1 ✓).",
      "en": null
    },
    "iDespres": {
      "ca": "La mateixa idea —separar una figura complicada en una de \"normalitzada\" més una dilatació— reapareix de seguida a q114, ara amb la hipèrbola unitat com a patró de referència, i uns quants passos enllà a q117 amb la paràbola.",
      "en": null
    }
  },
  "q113": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 10,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una fórmula per c, la distància del centre a cada focus, en termes de a i b — i una raó geomètrica, no només algebraica.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "el triangle que ja vas dibuixar a q98",
          "en": null
        },
        "text": {
          "ca": "Al punt més alt de l'el·lipse (l'extrem de l'eix curt), les dues distàncies als focus són iguals per simetria, i sumen 2a (la constant focal). Quant val, doncs, cadascuna?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "El punt més alt de l'el·lipse, en sanguina el triangle isòsceles cap als dos focus, i el catet vertical de longitud b marcat.",
          "en": null
        },
        "figura": "fig-118.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Aquest triangle és rectangle (el catet vertical és b, la meitat de l'eix curt; la base és c, la distància del centre al focus; la hipotenusa és a, per la suma focal repartida a parts iguals). Aplica Pitàgores.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "a=5, b=3: c²=25−9=16, c=4. Comprova amb el punt (0,3): distància a cada focus (±4,0) és √(16+9)=5, i 5+5=10=2a ✓.",
      "en": null
    },
    "iDespres": {
      "ca": "El mateix triangle, amb els catets intercanviats (a²=b²+c² en lloc de c²=a²−b²), és exactament el que reapareix a q114 per a la hipèrbola — només que allà els papers de a i c s'intercanvien perquè el focus cau fora dels vèrtexs, no entre ells.",
      "en": null
    }
  },
  "q114": {
    "moviment": "dilatacio",
    "movimentTitol": {
      "ca": "dilatació",
      "en": null
    },
    "lot": 10,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Dues coses: (1) la posició dels focus de x²−y²=1 (la hipèrbola recta més senzilla, amb a=b=1), i (2) la fórmula general dels focus després de dilatar-la per (a, b) — que és la mateixa hipèrbola de q112.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "Pitàgores, no resta",
          "en": null
        },
        "text": {
          "ca": "A l'el·lipse, c²=a²−b² (el focus és \"més a prop\" que el semieix gran). A la hipèrbola els dos braços s'obren cap enfora: el focus ha d'anar més lluny que el vèrtex. Prova c²=a²+b² i comprova que amb a=b=1 et dona un valor familiar.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "La hipèrbola unitat amb els vèrtexs a (±1,0) i els focus marcats a (±√2,0) en sanguina — el triangle rectangle de catets 1,1 que ho demostra.",
          "en": null
        },
        "figura": "fig-117.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Amb a=b=1: c=√(1+1)=√2. En dilatar per (a,b), els vèrtexs passen a (±a,0) i (per la mateixa relació, ara amb semieixos a,b) els focus a (±√(a²+b²), 0).",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "a=4,b=3: c=√(16+9)=5. Focus a (±5,0), vèrtexs a (±4,0) — el mateix triangle 3-4-5 que ja coneixes.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest triangle 3-4-5 no és casualitat: la mateixa relació c²=a²+b² és exactament la que hauràs d'utilitzar a q115 per demostrar que la constant focal val 2a en qualsevol hipèrbola, no només la unitat.",
      "en": null
    }
  },
  "q115": {
    "moviment": "dues-maneres",
    "movimentTitol": {
      "ca": "dues maneres",
      "en": null
    },
    "lot": 10,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "\"Constant focal\" i \"diàmetre\" són, a priori, dues coses diferents: una ve de sumar (o restar) distàncies a dos punts fixos; l'altra és simplement la mida de la figura d'un vèrtex a l'altre. Has de demostrar-ne la igualtat calculant-la de les dues maneres al mateix punt.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "calcula-ho al vèrtex mateix",
          "en": null
        },
        "text": {
          "ca": "El vèrtex és el punt de la corba més senzill de tots: ja n'hi ha un sobre l'eix on cauen els dos focus. Quant valen les dues distàncies del vèrtex als focus, en termes de a i c?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Una el·lipse i una hipèrbola una al costat de l'altra, cadascuna amb el vèrtex dret marcat i les dues distàncies als focus escrites al damunt.",
          "en": null
        },
        "figura": "fig-119.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El·lipse: el vèrtex dret és a distància a−c del focus proper i a+c del llunyà; la suma és 2a. Hipèrbola: el vèrtex dret és a distància c−a del focus proper i c+a del llunyà; la diferència és 2a. En els dos casos, 2a és exactament el diàmetre (la distància entre els dos vèrtexs).",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "El·lipse a=5,c=4: al vèrtex (5,0), distàncies 5−4=1 i 5+4=9, suma 10=2·5 ✓. Hipèrbola a=4,c=5: al vèrtex (4,0), distàncies 5−4=1 i 5+4=9, diferència 8=2·4 ✓.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta és la mateixa constant que fas servir cada vegada que dibuixes una el·lipse amb fil i xinxetes (q98): ara en tens una demostració que no depèn de cap punt en particular, sinó del propi vèrtex.",
      "en": null
    }
  },
  "q116": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 10,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una frase sobre l'angle que fa la tangent en un punt qualsevol de la hipèrbola amb els dos radis focals d'aquell punt — l'anàloga, per a la hipèrbola, de la propietat reflectora de l'el·lipse (un raig des d'un focus rebota cap a l'altre).",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "no serà exactament la mateixa",
          "en": null
        },
        "text": {
          "ca": "A l'el·lipse, els dos radis focals van cap al MATEIX costat de la tangent (per això \"rebota cap a l'altre focus\"). A la hipèrbola, els dos focus són a banda i banda de la corba — un braç s'acosta a un focus mentre l'altre se n'allunya. Dibuixa un punt i els seus dos radis focals: la tangent, on cau respecte d'ells?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Un punt sobre un braç de la hipèrbola, en sanguina els dos segments cap als focus i la tangent en aquell punt, amb els dos angles que formen marcats amb un arc cadascun.",
          "en": null
        },
        "figura": "fig-120.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Els dos angles marcats són iguals: la tangent és la bisectriu de l'angle QUE FORMEN els dos radis focals entre ells (la bisectriu interior), no la de l'angle exterior com a l'el·lipse.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb a=4,b=3,c=5, al punt (5, 9/4) de la hipèrbola, els angles entre la tangent i cadascun dels dos radis focals valen els dos exactament 138,75° (calculats amb el vector gradient de la corba) — iguals entre si, com prediu la bisectriu.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta bisectriu interior —en lloc de l'exterior— és exactament el que fa que un mirall amb forma d'hipèrbola, orientat cap a un focus, dispersi els raigs en lloc de concentrar-los: el principi que fan servir els telescopis Cassegrain per combinar un mirall el·líptic i un d'hiperbòlic.",
      "en": null
    }
  },
  "q117": {
    "moviment": "dilatacio",
    "movimentTitol": {
      "ca": "dilatació",
      "en": null
    },
    "lot": 10,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "A q112 vas veure que TOTES les hipèrboles són dilatacions les unes de les altres. Aquí et pregunten el mateix per a la paràbola: totes les paràboles, són dilatacions d'una de sola?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "compta els graus de llibertat",
          "en": null
        },
        "text": {
          "ca": "Una hipèrbola necessita DOS números (a i b) per descriure-la — per això calia una dilatació amb dos factors diferents. Una paràbola y=x²/(4p) només en necessita UN (p). Quantes dilatacions (potser només una direcció, potser una d'uniforme) calen per passar d'una paràbola a qualsevol altra?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Dues paràboles amb el mateix vèrtex sobre la mateixa directriu, una més \"tancada\" que l'altra, amb els respectius focus marcats en sanguina a alçades diferents.",
          "en": null
        },
        "figura": "fig-121.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Amb una dilatació UNIFORME (el mateix factor en x i en y) centrada al vèrtex, y=x²/(4p) es converteix en y=x²/(4·k·p): totes les paràboles són dilatacions uniformes les unes de les altres, a diferència de les hipèrboles, que en necessiten dues de diferents.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "p=1 (y=x²/4) dilatada per factor 2 uniforme: (2y)=(2x)²/4 → y=x², és a dir p=1/4. Comprova que el focus (a alçada p) també s'ha mogut de (0,1) a (0,1/4), coherent amb la dilatació.",
      "en": null
    },
    "iDespres": {
      "ca": "Que calgui només UN factor de dilatació —en lloc de dos, com a la hipèrbola— és el primer indici que totes les paràboles són \"la mateixa figura, vista de més a prop o de més lluny\": una idea que tornaràs a fer servir a q119, on la paràbola apareix com a envolupant d'un feix de rectes.",
      "en": null
    }
  },
  "q118": {
    "moviment": "construeix-per-definir",
    "movimentTitol": {
      "ca": "construeix la solució a partir de la seva pròpia definició",
      "en": null
    },
    "lot": 10,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una demostració que un raig vertical (paral·lel a l'eix) que arriba a la paràbola rebota exactament cap al focus — sense fer servir cap argument de \"límit\" ni de rectes que es toquen \"a l'infinit\". Només construcció i triangles.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "la definició per punts, com a q98",
          "en": null
        },
        "text": {
          "ca": "Un punt P de la paràbola és exactament tan lluny del focus F com de la directriu — és a dir, de D, el peu de la perpendicular des de P a la directriu. Si PF=PD, quin triangle isòsceles se't dibuixa tot sol?",
          "en": null
        },
        "figura": "fig-205.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Un punt P sobre la paràbola, el focus F, el peu D a la directriu, i en sanguina el triangle isòsceles PFD amb la seva bisectriu des de P.",
          "en": null
        },
        "figura": "fig-122.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Demostra que la bisectriu de l'angle en P del triangle isòsceles PFD —que també n'és la mediatriu del costat FD, per ser isòsceles— és precisament la tangent a la paràbola en P. Com que FD és vertical (D és el peu vertical de P a la directriu horitzontal)... espera, FD no cal que sigui vertical: la mediatriu de FD bisecta l'angle entre PF i PD; i PD és vertical (perpendicular a la directriu horitzontal), que és la direcció del raig entrant. Per tant aquesta mateixa recta reflecteix el raig vertical cap a F.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "p=2, punt P=(3, 9/4) de la paràbola y=x²/8... (amb focus a (0,2)): el peu D=(3,−2). El punt mitjà de FD és (3,0); la recta de P a aquest punt mitjà té la mateixa direcció que la tangent calculada per derivada (pendent 3/4) — coincideixen exactament.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta construcció —la mediatriu d'un segment entre el focus i el peu a la directriu— és el mètode clàssic (sense càlcul) amb què es demostrava aquesta propietat molt abans que existís la geometria analítica, i és exactament la propietat que fa servir qualsevol antena parabòlica: si totes les tangents reflecteixen cap al mateix punt F, tots els raigs paral·lels a l'eix s'hi concentren.",
      "en": null
    }
  },
  "q119": {
    "moviment": "cas-limit",
    "movimentTitol": {
      "ca": "cas límit",
      "en": null
    },
    "lot": 10,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una explicació de per què la \"corba\" que sembla aparèixer entre les rectes —que en realitat no n'hi ha cap de dibuixada— és exactament una paràbola, i no una altra corba qualsevol.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "cap recta és corba; és l'ull qui hi veu una corba",
          "en": null
        },
        "text": {
          "ca": "Cada recta és tangent a una certa corba (la seva envolupant): la corba que \"toca\" cada recta del feix sense travessar-ne cap. Amb n+1 punts a cada eix, numerats 0..n, la recta i uneix el punt i d'un eix amb el punt n−i de l'altre. Quina relació hi ha entre els dos números que etiqueten els extrems d'una mateixa recta?",
          "en": null
        },
        "figura": "fig-206.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Dos eixos perpendiculars amb punts marcats, unes quantes rectes del feix en traç negre, i en sanguina la paràbola envolupant tangent a totes elles.",
          "en": null
        },
        "figura": "fig-123.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "La recta que uneix (i,0) amb (0,n−i) té equació x/i + y/(n−i) = 1. Cada recta d'aquestes és tangent a la corba √x + √y = √n (una paràbola, girada 45° respecte de la posició habitual). Comprova-ho amb dos valors consecutius de i i troba on es tallen les rectes veïnes.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "n=10: les rectes i=4 i i=5 es tallen a (2,3), i √2+√3≈3,146, molt a prop de √10≈3,162 — la petita diferència és l'error de fer servir rectes VEÏNES en lloc del límit real (rectes infinitament properes).",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta manera de generar una corba com a envolupant d'una família de rectes —sense dibuixar mai la corba directament— és la mateixa idea que ja vas fer servir a q64 amb el bastó lliscant: allà l'envolupant sortia d'un segment de longitud constant lliscant entre dos eixos; aquí, d'una família de segments amb un patró numèric.",
      "en": null
    }
  },
  "q12": {
    "moviment": "contraexemple",
    "movimentTitol": {
      "ca": "contraexemple i demostració — quan una condició extra ho canvia tot",
      "en": null
    },
    "lot": 4,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "separa el que et donen del que has de trobar",
          "en": null
        },
        "text": {
          "ca": "Aquí et donen més que a q11: no només és un paral·lelogram, a més les dues diagonals fan la mateixa llargada. La pregunta és què pots concloure que no podies concloure abans amb menys informació.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "prova-ho amb un paral·lelogram inclinat",
          "en": null
        },
        "text": {
          "ca": "Dibuixa mentalment un paral·lelogram ben esbiaixat (com el de la figura, no un rectangle). Les dues diagonals hi tenen longituds diferents. Ara imagina que el vas \"redreçant\" fins que les diagonals s'igualen: què li passa als angles pel camí?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Les marquetes a les dues diagonals diuen \"iguals entre elles\", no diuen encara res sobre els angles del paral·lelogram.",
          "en": null
        },
        "figura": "fig-040.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Mira els dos triangles que formen una diagonal amb dos costats consecutius. Amb els costats iguals dos a dos (per ser paral·lelogram) i ara també la diagonal compartida igual a l'altra diagonal (dada nova), tens prou per demostrar-los congruents amb el criteri costat-costat-costat, i d'aquí recuperar que els angles adjacents sumen 180° i són iguals entre ells — l'única manera que passi és que cadascun sigui de 90°.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Un paral·lelogram amb costats 5 i 12: si les diagonals fan totes dues 13, hauria de sortir un rectangle (i, de fet, 5-12-13 és un triangle rectangle conegut — no és casualitat).",
      "en": null
    },
    "iDespres": {
      "ca": "\"Paral·lelogram + diagonals iguals = rectangle\" és el recíproc d'un fet que segurament ja coneixes en l'altra direcció (rectangle ⟹ diagonals iguals). Aquest tipus de pregunta —quina condició extra converteix un objecte general en un de particular— reapareixerà a q71, on la condició de partida serà una altra (quatre angles rectes) i el que caldrà recuperar serà el paral·lelisme dels costats.",
      "en": null
    }
  },
  "q120": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 10,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una relació d'àrees 1:2 entre dues figures: un triangle tallat per la tangent en un punt de la paràbola (el \"sector\"), i un altre triangle —la meitat del rectangle que va del vèrtex fins aquell mateix punt (el \"rectangle\" o, més exactament, la seva diagonal).",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "on talla la tangent l'eix?",
          "en": null
        },
        "text": {
          "ca": "Sigui P un punt de la paràbola i N el seu peu (la projecció de P sobre l'eix, és a dir, sobre la base del rectangle vèrtex-a-P). La tangent en P talla aquest mateix eix en un punt T. Compara la distància de T al vèrtex amb la distància de N al vèrtex.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "El vèrtex V, el punt P sobre la paràbola, el peu N a la base, el punt T on la tangent talla la base —marcat en sanguina, exactament al punt mitjà de VN— i el triangle TNP ombrejat.",
          "en": null
        },
        "figura": "fig-124.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Amb y=x² i P=(p,p²), la tangent en P té pendent 2p i talla y=0 a x=p/2 — el punt mitjà exacte entre el vèrtex (x=0) i N (x=p). El triangle VNP (la diagonal del rectangle vèrtex-a-P) té sempre àrea igual a la meitat del rectangle; i com que T és el punt mitjà de VN, el triangle TNP —el \"sector\" tallat per la tangent— té la mateixa altura que VNP però la meitat de la base, així que la seva àrea és la meitat de la de VNP.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "p=3: rectangle V-N-P = 3·9=27, meitat (triangle VNP) = 13,5. Triangle TNP amb T=(1,5, 0): base 1,5, alçada 9, àrea 0,5·1,5·9=6,75 = exactament la meitat de 13,5 ✓.",
      "en": null
    },
    "iDespres": {
      "ca": "Que la tangent talli l'eix exactament al punt mitjà —ni abans ni després— és el mateix fet que farà possible, a q121, calcular sense cap límit ni integral quina fracció EXACTA del rectangle omple la paràbola sencera.",
      "en": null
    }
  },
  "q121": {
    "moviment": "exhauriment",
    "movimentTitol": {
      "ca": "exhauriment",
      "en": null
    },
    "lot": 10,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Un argument que demostri, sense retòrica d'\"infinitèsims\", que l'àrea tancada entre l'arc de paràbola i els dos costats superiors de la seva caixa circumscrita és exactament 2/3 de l'àrea total de la caixa —ni una mica més, ni una mica menys.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "parteix la caixa en franges, no en un sol tros",
          "en": null
        },
        "text": {
          "ca": "Divideix la base de la caixa (d'un costat a l'altre del vèrtex) en n franges verticals iguals. A cada franja, la paràbola hi talla un rectangle petit. Suma les àrees d'aquests n rectangles petits (la que queda per SOTA de la corba, dins la meitat de la caixa) — és una suma coneguda de quadrats consecutius.",
          "en": null
        },
        "figura": "fig-207.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "La paràbola inscrita en el seu rectangle (com al llibre), i en sanguina, a un costat, la mateixa caixa partida en franges verticals amb els petits rectangles ombrejats sota la corba.",
          "en": null
        },
        "figura": "fig-125.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Amb n franges d'amplada 1/n cadascuna sobre l'interval [0,1], la suma de les àrees dels rectangles per sota de y=x² és (1/n)·Σ(k/n)² per a k=1..n, que val (1/n³)·[n(n+1)(2n+1)/6]. Quan n creix molt, aquesta suma s'acosta a 1/3 (comprova-ho substituint valors grans de n): l'àrea SOTA la corba és 1/3 de la caixa, i per tant l'àrea ENTRE la corba i la part de dalt —la \"secció\"— n'és els 2/3 restants.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "n=100: suma ≈ 0,33835 (ja molt a prop d'1/3=0,3333). n=10000: suma ≈ 0,33338, encara més a prop. L'àrea sota la corba tendeix exactament a 1/3, i 1−1/3=2/3 confirma la secció.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest mètode —partir en franges cada cop més fines i sumar una fórmula coneguda— és exactament l'\"exhauriment\" que Arquimedes va fer servir, sense cap concepte de límit formal, per calcular aquesta mateixa àrea. La suma de quadrats que has fet servir aquí és la mateixa que trobaràs si mai has de sumar 1²+2²+...+n²: val la pena recordar-ne la fórmula.",
      "en": null
    }
  },
  "q122": {
    "moviment": "construeix-per-definir",
    "movimentTitol": {
      "ca": "construeix la solució a partir de la seva pròpia definició",
      "en": null
    },
    "lot": 10,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una descripció d'un punt que es mou de manera que la seva trajectòria sigui exactament l'espiral: dues coses que han de canviar alhora, i com.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "separa les dues parts del moviment",
          "en": null
        },
        "text": {
          "ca": "Un cercle és el resultat d'un punt que gira a distància CONSTANT d'un centre. Una espiral és quasi el mateix moviment, amb un únic canvi: què li hauries de deixar créixer, a mesura que el punt gira, perquè cada volta quedi més enfora que l'anterior?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Una espiral, amb un punt marcat sobre la corba i una fletxa en sanguina que en mostra la direcció del moviment en aquell instant.",
          "en": null
        },
        "figura": "fig-126.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El punt gira a velocitat angular constant (com les busques d'un rellotge) mentre, alhora, la seva distància al centre creix a velocitat CONSTANT (no accelerada) amb el temps. Aquestes dues coses juntes —gir uniforme i allunyament uniforme— defineixen l'espiral d'Arquimedes.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Si la distància creix a raó d'una unitat per volta completa, després de 3 voltes el punt és a distància 3 del centre —el mateix patró que fa que les espires successives quedin sempre separades per la mateixa distància, com als solcs d'un disc de vinil.",
      "en": null
    },
    "iDespres": {
      "ca": "Descriure una corba com el resultat d'un moviment —en lloc de com una equació o una construcció estàtica— és exactament la mateixa idea que faràs servir a q123 amb l'hèlix (gir uniforme, ara combinat amb pujada uniforme en lloc d'allunyament) i a q124 amb les cicloides (un cercle que rodola sobre un altre).",
      "en": null
    }
  },
  "q123": {
    "moviment": "un-altre-pla",
    "movimentTitol": {
      "ca": "un altre pla",
      "en": null
    },
    "lot": 10,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una fórmula per a la longitud d'una hèlix que fa n voltes senceres al voltant d'un cilindre de radi R, mentre puja una alçada total H —sense haver de sumar infinits trossets de corba.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "\"desenrotlla\" el cilindre",
          "en": null
        },
        "text": {
          "ca": "Imagina el cilindre com un full de paper enrotllat. Si el desenrotlles (el retalles per una línia vertical i l'estires pla), l'hèlix dibuixada a sobre es converteix en... quina mena de línia, sobre el rectangle pla resultant?",
          "en": null
        },
        "figura": "fig-208.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Un cilindre amb l'hèlix dibuixada a sobre (com al llibre, 4 voltes), i al costat, en sanguina, el mateix cilindre desenrotllat en un rectangle pla amb la línia recta corresponent.",
          "en": null
        },
        "figura": "fig-127.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Un cop desenrotllat, el rectangle té amplada igual al perímetre del cilindre multiplicat per n (la distància horitzontal total recorreguda en n voltes) i alçada H. L'hèlix es converteix en la diagonal d'aquest rectangle —una línia recta—, i la seva longitud és, per Pitàgores, √((2πRn)² + H²).",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "R=1, n=4 voltes, H=3: longitud = √((2π·4)²+9) = √(631,65+9) ≈ 25,31. Comprovat també sumant numèricament milers de trossets petits de la corba real en 3D: coincideix fins a la cinquena xifra decimal.",
      "en": null
    },
    "iDespres": {
      "ca": "\"Desenrotllar\" una superfície corba per convertir un problema en un de pla és la mateixa idea que ja vas fer servir per mesurar l'àrea d'un con o d'un cilindre: aquí, en lloc d'una àrea, en surt la longitud d'una corba.",
      "en": null
    }
  },
  "q124": {
    "moviment": "recompte-o-induccio",
    "movimentTitol": {
      "ca": "recompte o inducció",
      "en": null
    },
    "lot": 10,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una fórmula (o una regla senzilla) que digui, a partir dels dos radis —el del cercle gran R i el del petit r—, quants pics (cúspides) té la corba que dibuixa un punt del cercle petit quan aquest rodola per dins (hipocicloide) o per fora (epicicloide) del cercle gran.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "un pic és un moment en què el punt \"s'atura\"",
          "en": null
        },
        "text": {
          "ca": "Un pic passa exactament quan el punt marcat toca el cercle gran (per dins o per fora): en aquell instant, el punt de contacte no es mou (és el centre instantani de gir), així que el punt marcat, que hi és a sobre, tampoc s'hi mou en aquell instant. Quantes vegades toca el punt marcat el cercle gran en una volta completa del cercle petit al voltant seu?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Els dos casos del llibre: el cercle petit rodolant per dins (tres pics, deltoide) i per fora (dos cercles enganxats, cardioide) del cercle gran, cadascun amb el punt de contacte marcat en sanguina.",
          "en": null
        },
        "figura": "fig-129.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El nombre de pics és R/r (quan aquesta raó és un nombre enter): per cada volta completa del cercle gran, el cercle petit hi ha \"rodat\" R/r vegades, i cada rodolada completa produeix exactament un pic. Val el mateix argument tant si el cercle petit rodola per dins com per fora.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "R/r=3 (dins): deltoide, 3 pics — el cas de la figura del llibre. R/r=4 (dins): astroide, 4 pics —la mateixa corba que ja vas trobar a q64 amb el bastó lliscant. R/r=1 (fora): cardioide, 1 pic.",
      "en": null
    },
    "iDespres": {
      "ca": "Que l'astroide (R/r=4, hipocicloide) sigui exactament la mateixa corba que l'envolupant del bastó lliscant de q64 no és casualitat: en tots dos casos, cada punt de la corba és un instant en què \"alguna cosa\" (el punt de contacte, o el bastó sencer) es queda momentàniament immòbil.",
      "en": null
    }
  },
  "q125": {
    "moviment": "cas-limit",
    "movimentTitol": {
      "ca": "cas límit",
      "en": null
    },
    "lot": 10,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una descripció de la corba degenerada (molt més senzilla que l'espirògraf general) que resulta quan el punt que traces no és sobre la vora del cercle petit, sinó exactament al seu centre.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "separa el moviment del centre del moviment del punt",
          "en": null
        },
        "text": {
          "ca": "A l'espirògraf normal, el punt marcat gira al voltant del CENTRE del cercle petit, i aquest centre alhora es mou al voltant del centre del cercle gran. Si el punt marcat ÉS el centre del cercle petit, quin d'aquests dos moviments desapareix?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "El patró habitual de l'espirògraf (traç negre, moltes espires), i al costat, en sanguina, el cas degenerat: només el cercle que traça el centre del cercle petit.",
          "en": null
        },
        "figura": "fig-130.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Sense el gir addicional del punt sobre el cercle petit, el que queda és només el moviment del CENTRE del cercle petit, que —com que rodola per dins del cercle gran mantenint sempre la mateixa distància R−r del centre comú— descriu simplement un cercle de radi R−r.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "R=5, r=2: el centre del cercle petit es manté sempre a distància 5−2=3 del centre, per a qualsevol angle de gir — es pot comprovar calculant-ho a diversos instants i veient que el radi no canvia mai.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest cas degenerat —tota la complexitat de l'espirògraf reduïda a un simple cercle— és el mateix tipus de simplificació que ja vas veure a q74 amb el triangle \"aixafat\": posar un paràmetre a un valor extrem (aquí, distància zero al centre) converteix una figura complicada en la més senzilla possible.",
      "en": null
    }
  },
  "q126": {
    "moviment": "construeix-per-definir",
    "movimentTitol": {
      "ca": "construeix la solució a partir de la seva pròpia definició",
      "en": null
    },
    "lot": 10,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una manera de descriure un moviment sobre la superfície d'un tor (un donut) que sigui l'anàloga natural de l'hèlix sobre un cilindre —no fa falta cap equació, només una descripció clara del moviment.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "un tor té DOS cercles, no un",
          "en": null
        },
        "text": {
          "ca": "Un punt sobre un tor es pot descriure per dos angles: quina posició té al voltant del forat central (com les hores d'un rellotge vist des de dalt), i quina posició té al voltant del \"tub\" prim (com les hores d'un rellotge vist de costat, girant al voltant del propi tub). Una hèlix sobre un cilindre avançava a velocitat constant en gir I en alçada alhora: quin seria l'anàleg amb aquests dos angles?",
          "en": null
        },
        "figura": "fig-209.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Un tor amb una corba dibuixada en sanguina que avança uniformement al voltant del tub mentre avança, també uniformement, al voltant del forat central —una corba que s'enrotlla moltes vegades abans de tancar-se (o que no es tanca mai, si la proporció entre les dues velocitats és irracional).",
          "en": null
        },
        "figura": "fig-128.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Fes que els dos angles creixin cadascun a velocitat constant però DIFERENT: mentre un avança una volta sencera, l'altre n'avança p/q (una fracció). Si p/q és racional, la corba es tanca després de q voltes del primer angle; si és irracional, la corba mai es tanca i acaba omplint tota la superfície del tor.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb p/q=2/3: la corba fa 2 voltes completes al voltant del forat central pel mateix temps que en fa 3 al voltant del tub, i es tanca exactament on va començar — es pot comprovar contant quantes vegades creua un mateix meridià (ha de ser 3) i un mateix paral·lel (ha de ser 2).",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta corba es diu \"nus tòric\" quan p i q no tenen cap factor comú: per a segons valors de p,q dona lloc a nusos autèntics (que no es poden desfer sense tallar-los), l'exemple més senzill dels quals —amb p/q=2/3— és el trèvol, el nus més simple que existeix.",
      "en": null
    }
  },
  "q127": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 10,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "La identificació exacta de la corba (no només una descripció aproximada com \"es corba cap avall\"): quina figura geomètrica coneguda traça el punt mitjà del bastó mentre aquest llisca?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "cada instant és un triangle rectangle diferent",
          "en": null
        },
        "text": {
          "ca": "En qualsevol instant, el bastó, la paret i el terra formen un triangle rectangle: el bastó n'és la hipotenusa, l'angle recte és a la cantonada. Ja saps (o pots redescobrir) una propietat sobre la distància des del vèrtex de l'angle recte fins al punt mitjà de la hipotenusa, en QUALSEVOL triangle rectangle.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Dos instants diferents del mateix bastó lliscant (el mateix bastó de q64, ara sense l'envolupant), amb el punt mitjà marcat en sanguina a cada instant i, en discontinu, el quart de cercle que uneixen.",
          "en": null
        },
        "figura": "fig-131.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "En un triangle rectangle, la distància del vèrtex de l'angle recte al punt mitjà de la hipotenusa és sempre la MEITAT de la hipotenusa — independentment de com es \"obri\" o \"tanqui\" l'angle. Com que la hipotenusa (el bastó) té sempre la mateixa longitud L, aquesta distància és sempre L/2: el punt mitjà es manté sempre a la mateixa distància L/2 de la cantonada, i per tant descriu un quart de cercle de radi L/2 centrat a la cantonada.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "L=7: amb el peu del bastó a x=7cos(0,37)≈6,52 i l'altre extrem a y=7sin(0,37)≈2,53, el punt mitjà és (3,26, 1,27), a distància √(3,26²+1,27²)≈3,50=7/2 exactament ✓ — i ho és per a qualsevol altre angle que provis.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest mateix bastó ja et va donar, a q64, l'envolupant de totes les seves posicions (un astroide). Ara en tens un segon resultat, ben diferent: no la corba que \"toquen\" totes les posicions del bastó, sinó la corba que traça un únic punt (el mig) mentre el bastó es mou. Val la pena comparar-les una al costat de l'altra —una és una envolupant, l'altra una trajectòria— per no confondre mai més aquests dos conceptes.",
      "en": null
    }
  },
  "q13": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 2,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "No n'hi ha prou de dir \"sí\". Has d'acabar podent explicar per què, i la raó ha de funcionar per a qualsevol triangle, no només per al que hagis dibuixat.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "el fet que ho decideix tot",
          "en": null
        },
        "text": {
          "ca": "Si dos triangles tenen la mateixa base i la mateixa alçada, què saps de les seves àrees? (És literalment la fórmula base × alçada / 2 — no hi ha res més amagat.) Ara mira els dos triangles que et queden després del tall: quina d'aquestes dues coses comparteixen sense haver de mesurar res?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-014.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Les marquetes et diuen que les dues meitats de la base fan el mateix. L'altura que has afegit en sanguina és la mateixa per als dos triangles — és la distància del vèrtex de dalt a la recta de la base, i aquesta recta no canvia entre un triangle i l'altre. Base igual, alçada igual: ja ho tens.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Base de 12, vèrtex desplaçat (no centrat) a alçada 7. Amb el tall al punt mitjà (a distància 6 de cada cantó), l'àrea de cada meitat surt 21 — sumen 42, que és l'àrea sencera. Prova-ho també desplaçant el vèrtex a un altre lloc de la mateixa alçada 7: les dues meitats han de continuar sortint iguals entre elles, encara que ja no facin 21 cadascuna.",
      "en": null
    },
    "iDespres": {
      "ca": "\"Mateixa base, mateixa alçada, mateixa àrea\" és el motor que fa funcionar mig llibre. El tornaràs a veure servir-se sol, sense que ningú t'ho recordi, quan arribis al principi de Cavalieri.",
      "en": null
    }
  },
  "q14": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 1,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "No has de trobar cap número. Has d'acabar podent dir: \"per a qualsevol triangle i la seva caixa passa això, i aquesta n'és la raó\". El resultat final és una raó, no una xifra. (Si penses \"però si ja sé que l'àrea és base × altura / 2\": aquesta fórmula és exactament el que estàs demostrant. La pregunta és per què és certa.)",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "resol primer el cas fàcil",
          "en": null
        },
        "text": {
          "ca": "Hi ha alguna posició de la punta per a la qual la resposta sigui evident? Prova de posar-la just damunt d'un dels dos vèrtexs de baix.",
          "en": null
        },
        "figura": "fig-182.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-002.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Ara tens dues peces. Cadascuna per separat és exactament el cas fàcil que ja has resolt a la pista 1. Si cada meitat de la caixa està partida per la meitat, què passa amb la caixa sencera?",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Caixa de 10 × 6. Punta a distància 3 del cantó esquerre: quina àrea et dona el teu raonament? I si la punta és a distància 7? (Les dues respostes han de coincidir.)",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta demostració té un forat que encara no has vist. El trobaràs a q15.",
      "en": null
    }
  },
  "q15": {
    "moviment": "audita-la-demostracio",
    "movimentTitol": {
      "ca": "posa a prova la teva pròpia demostració",
      "en": null
    },
    "lot": 1,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "aposta primer",
          "en": null
        },
        "text": {
          "ca": "Abans de calcular res, escriu la teva predicció: l'àrea creix, decreix o es queda igual? Val la pena equivocar-se per escrit.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "mira-t'ho",
          "en": null
        },
        "text": {
          "ca": "Les marquetes hi són a posta: la base és la mateixa i l'altura és la mateixa, en els tres casos.",
          "en": null
        },
        "figura": "fig-003.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "l'auditoria",
          "en": null
        },
        "text": {
          "ca": "Torna a la teva demostració de q14 i aplica-la al dibuix de la dreta, pas per pas. Hi ha exactament un pas que ja no pots dir. Troba'l abans de continuar. (El pas és: \"la vertical parteix la caixa en dos trossos, un a cada banda del triangle\". Quan la punta surt, el peu de la vertical cau fora de la base i no hi ha dos trossos per sumar.)",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "la mateixa idea, amb el signe canviat",
          "en": null
        },
        "text": {
          "ca": "El ratllat vol dir \"aquesta peça es treu\". Un triangle rectangle gran menys un de petit, en comptes de dos de petits sumats.",
          "en": null
        },
        "figura": "fig-004.png"
      }
    ],
    "comprovacio": {
      "ca": "Base 8, altura 5. Punta a 3, a 8 i a 14 del cantó esquerre. Les tres àrees han de sortir 20.",
      "en": null
    },
    "iDespres": {
      "ca": "Dues coses. Primera: aquest és el motiu real pel qual els matemàtics desconfien dels dibuixos — i tot i així en fan. El dibuix et diu què és probablement cert; la demostració ha de cobrir també els dibuixos que no has fet. Segona: \"moc una figura i l'àrea no canvia\" és la llavor del principi de Cavalieri, que retrobaràs a q54 i q55.",
      "en": null
    }
  },
  "q16": {
    "moviment": "linia-no-enunciada",
    "movimentTitol": {
      "ca": "inventa't una línia que l'enunciat no menciona",
      "en": null
    },
    "lot": 1,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "redueix l'encàrrec",
          "en": null
        },
        "text": {
          "ca": "No cal comprovar els quatre costats. Per demostrar que una figura de quatre costats és un paral·lelogram n'hi ha prou amb dos costats oposats que siguin alhora paral·lels i iguals de llargs. Convèncer-te d'això abans de començar et estalviarà la meitat de la feina.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "per què costa",
          "en": null
        },
        "text": {
          "ca": "El quadrilàter de fora et fa nosa perquè no en saps absolutament res: no és cap forma coneguda, no té angles rectes ni costats iguals. Hi ha alguna línia que hi podries afegir per convertir-lo en dues formes de les quals sí que en saps coses?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-008.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Mira només el triangle de dalt. Dos dels quatre punts marcats són els punts mitjans de dos dels seus costats. Com és el segment que els uneix, comparat amb el tercer costat? Ara fes exactament el mateix amb el triangle de sota — i adona't que el \"tercer costat\" és el mateix segment en els dos casos. (Si no coneixes el resultat sobre punts mitjans, dedueix-lo: el triangle petit té dos costats que fan just la meitat i el mateix angle entremig, o sigui que és semblant al gran amb raó ½.)",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb coordenades: A(0,0), B(8,2), C(9,7), D(1,6). Els punts mitjans surten (4,1), (8'5,4'5), (5,6'5) i (0'5,3). Comprova que el vector del primer al segon és idèntic al del quart al tercer. Nota honesta: aquesta comprovació amb coordenades és una demostració vàlida, i amb la teva àlgebra la pots fer sencera per a un quadrilàter qualsevol. Val la pena que la facis. Però fixa't en la diferència: et convenç que és cert, i no t'explica per què. La de la diagonal sí.",
      "en": null
    },
    "iDespres": {
      "ca": "Ara la segona meitat de la pregunta del llibre: quina àrea té? I una cosa que sorprèn: la demostració de la diagonal no fa servir enlloc que els quatre punts estiguin sobre un mateix pla. Funciona amb un quadrilàter tort a l'espai.",
      "en": null
    }
  },
  "q17": {
    "moviment": "separa-i-reorienta",
    "movimentTitol": {
      "ca": "separa la figura en peces que ja saps mesurar",
      "en": null
    },
    "lot": 6,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "la resposta és sí, però la pregunta interessant és com",
          "en": null
        },
        "text": {
          "ca": "Aquest resultat es coneix com el teorema de Bolyai–Gerwien: qualsevol polígon es pot retallar en un nombre finit de peces poligonals i recompondre com un quadrat de la mateixa àrea. Aquesta guia no demostra el cas general (surt d'abast d'una pista puntual); et dona la primera peça del mètode, que és constructiva: trobar la longitud exacta del costat del quadrat abans de retallar res.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "quina longitud busques",
          "en": null
        },
        "text": {
          "ca": "Un rectangle de costats a i b té la mateixa àrea que un quadrat de costat s=√(ab) —la mitjana geomètrica de a i b. Coneixes ja una manera de construir aquesta longitud amb regla i compàs?",
          "en": null
        },
        "figura": "fig-183.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Un semicercle de diàmetre a+b, amb un triangle rectangle inscrit tocant el diàmetre al punt que el parteix en a i b. L'alçada des d'aquest punt fins al semicercle és exactament √(ab) —el teorema de l'altura sobre la hipotenusa (el mateix que fas servir per trobar l'apotema o qualsevol alçada relativa).",
          "en": null
        },
        "figura": "fig-064.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho (en paraules, no en dibuix)",
          "en": null
        },
        "text": {
          "ca": "Un cop tens s=√(ab), es pot demostrar que —si el rectangle no és massa allargat (a < 4b)— n'hi ha prou amb DOS talls per recompondre'l en un quadrat de costat s. Si el rectangle és més allargat, calen més peces, però el teorema de Bolyai–Gerwien garanteix que sempre és possible.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Rectangle 8×2: s=√16=4. Comprova que 8×2=16=4×4 ✓ (mateixa àrea, com ha de ser per a qualsevol dissecció).",
      "en": null
    },
    "iDespres": {
      "ca": "El teorema de l'altura sobre la hipotenusa (la peça central d'aquesta pista) el retrobaràs cada vegada que necessitis \"fabricar\" una longitud igual a una arrel quadrada amb regla i compàs —una eina que reapareix constantment a la part final del llibre.",
      "en": null
    }
  },
  "q18a": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 6,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "No et demanen que recitis V=l·w·h: et demanen la raó. Si ja saps la fórmula, aquesta pregunta és per què és certa.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "comença amb costats enters",
          "en": null
        },
        "text": {
          "ca": "Si la capsa fa 3×2×2, quants cubs d'aresta 1 hi caben? Compta'ls per capes: una capa horitzontal té l×w cubs. Quantes capes n'hi ha?",
          "en": null
        },
        "figura": "fig-184.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "La capa marcada en sanguina és una d'aquestes \"rebanades\" horitzontals — n'hi ha h, totes iguals.",
          "en": null
        },
        "figura": "fig-055.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Cada capa té l×w cubs. Hi ha h capes apilades. Quin producte et dona el total?",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Capsa 3×4×2: cada capa té 3×4=12 cubs, n'hi ha 2 capes: 24 cubs en total. V=3×4×2=24 ✓.",
      "en": null
    },
    "iDespres": {
      "ca": "\"Comptar en capes i sumar\" és exactament el moviment que retrobaràs, molt més enllà, a q54/q55/q60 (el principi de Cavalieri) — allà les capes ja no seran cubs sinó seccions de qualsevol forma.",
      "en": null
    }
  },
  "q18b": {
    "moviment": "invariant",
    "movimentTitol": {
      "ca": "invariant sota escala (moviment nou d'aquest lot — com canvia una magnitud quan la figura s'infla)",
      "en": null
    },
    "lot": 4,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "no calculis un cub concret, raona amb el cub genèric",
          "en": null
        },
        "text": {
          "ca": "No cal que et fixis un valor numèric de costat: la pregunta és sobre com canvia el volum en funció de k, per a qualsevol sòlid, i el cub és el cas més senzill per veure-ho amb claredat abans de generalitzar.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "un cub de costat s, i el mateix cub a escala k",
          "en": null
        },
        "text": {
          "ca": "El volum d'un cub de costat s és s³. Si ara totes les arestes es multipliquen per k, el nou costat és k·s. Quin volum té el nou cub, escrit en funció de k i de l'antic volum s³?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Els dos cubs es dibuixen amb el mateix angle de projecció (per poder comparar-los d'un cop d'ull), amb el segon clarament més gran que el primer.",
          "en": null
        },
        "figura": "fig-049.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "(k·s)³ = k³·s³. El volum del cub gran és k³ vegades el volum del cub petit —no k vegades, com potser esperaries si pensessis només en longituds. Ara pensa per què aquest mateix argument (multiplicar per k cadascuna de les tres dimensions independents) hauria de valer per a qualsevol sòlid, no només per al cub.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Un cub de costat 2 (volum 8) escalat per k=3: el nou costat és 6, i el nou volum ha de ser 6³=216. Comprova que 216 = 3³×8 = 27×8.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest resultat —el volum escala amb el cub del factor lineal, mentre que l'àrea escala amb el seu quadrat— és el que fa que un sòlid molt gran i un de molt petit amb la mateixa forma es comportin de manera molt diferent per la relació entre la seva superfície i el seu volum (per què un animal petit es refreda més ràpid que un de gran, per exemple). El mateix principi d'\"invariant sota una transformació\" el retrobaràs a q60, encara que allà la transformació que es fa servir no és una escala sinó el principi de Cavalieri.",
      "en": null
    }
  },
  "q19": {
    "moviment": "identitat-com-a-figura",
    "movimentTitol": {
      "ca": "la identitat és la figura",
      "en": null
    },
    "lot": 6,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "No n'hi ha prou comprovant-ho amb 3×5=15. Has de veure per què cap parell de senars pot donar un producte parell.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "un senar és \"parell + 1\"",
          "en": null
        },
        "text": {
          "ca": "Escriu els dos nombres com 2a+1 i 2b+1. El producte té quatre termes quan el desenvolupes. Quants d'aquests quatre termes són clarament parells?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "La graella de punts és el producte (2a+1)×(2b+1) dibuixat com a àrea. La línia sanguina en separa quatre trossos.",
          "en": null
        },
        "figura": "fig-056.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Tres dels quatre trossos tenen un nombre parell de punts (es poden aparellar sense que en sobri cap). El quart tros és un sol punt, a la cantonada. Parell+parell+parell+1 — quina paritat té la suma?",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "5×3=15: els quatre trossos fan 8 (parell), 4 (parell), 2 (parell) i 1. Suma: 8+4+2+1=15, senar ✓.",
      "en": null
    },
    "iDespres": {
      "ca": "El mateix moviment, un pas més enllà: q20 fa la pregunta anàloga per a dos nombres parells.",
      "en": null
    }
  },
  "q20": {
    "moviment": "identitat-com-a-figura",
    "movimentTitol": {
      "ca": "la identitat és la figura",
      "en": null
    },
    "lot": 6,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "ja saps la meitat",
          "en": null
        },
        "text": {
          "ca": "Que el producte és parell, ja ho saps (parell × qualsevol cosa és parell). Aquí et demanen més: per què sempre en sobra prou per arribar a 4, no només a 2?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "un parell és \"2 × alguna cosa\"",
          "en": null
        },
        "text": {
          "ca": "Escriu els dos nombres com 2a i 2b. El producte és 4ab directament — Per què la graella de punts ho fa evident sense necessitat de desenvolupar res?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "La graella sencera es parteix, en sanguina, en blocs idèntics de 2×2.",
          "en": null
        },
        "figura": "fig-057.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Cada bloc de la graella té exactament 4 punts. Quants blocs n'hi ha, en total?",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "6×4=24: la graella es parteix en 3×2=6 blocs de 4 punts cadascun. 6×4=24 ✓, i 24/4=6 exacte.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest mateix \"empaquetar en blocs\" reapareixerà en un context ben diferent quan comptis casos a q03 i q21.",
      "en": null
    }
  },
  "q21": {
    "moviment": "definicio-i-absurd",
    "movimentTitol": {
      "ca": "desempaqueta la definició, i dibuixa el que no pot ser",
      "en": null
    },
    "lot": 6,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "la mateixa estructura que q95, en un altre territori",
          "en": null
        },
        "text": {
          "ca": "Suposa, per arribar-hi per l'absurd, que √3 = p/q amb p i q enters sense cap factor comú (la fracció ja reduïda al mínim). Eleva al quadrat: p² = 3q². Això diu que 3 divideix p². La pregunta clau, que decideix tota la demostració: si 3 divideix p², divideix 3 també p?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "prova-ho amb casos concrets abans de generalitzar",
          "en": null
        },
        "text": {
          "ca": "Calcula p² per a p=3, p=4 i p=5, i mira quins d'aquests quadrats són múltiples de 3.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Només quan p ja és múltiple de 3 (p=3, aquí) el quadrat p² es parteix en tres grups iguals sense que en sobri cap. Per p=4 i p=5 (cap dels dos múltiple de 3), sempre en sobra 1.",
          "en": null
        },
        "figura": "fig-065.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Si 3 no dividís p, p seria de la forma 3k+1 o 3k+2 —cap dels dos casos, comprova-ho, dona un quadrat múltiple de 3. Per tant 3 | p² força 3 | p. Ara: si 3 | p, escriu p=3m i torna a l'equació p²=3q². Què li passa a q? Arribes a la mateixa situació amb p i q més petits —una davallada infinita, impossible per a enters positius.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "No numèrica: repassa la teva demostració i assenyala on fas servir que la fracció p/q ja estava reduïda al mínim. Si no ho fas servir enlloc, la demostració no funciona (la davallada infinita necessita precisament aquesta hipòtesi per contradir-se).",
      "en": null
    },
    "iDespres": {
      "ca": "√2+√3 es demostra amb el mateix moviment però un pas indirecte: si fos racional, (√2+√3)² = 5+2√6 també ho seria, i per tant √6 també —contradicció pel mateix argument, aplicat ara a 6.",
      "en": null
    }
  },
  "q22": {
    "moviment": "dues-maneres",
    "movimentTitol": {
      "ca": "digues la mateixa longitud de dues maneres",
      "en": null
    },
    "lot": 1,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "on és la resposta",
          "en": null
        },
        "text": {
          "ca": "Aquí sí que has de trobar una fórmula. Però no la trobaràs mirant el cercle petit: la trobaràs mirant els centres.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "la palanca amagada",
          "en": null
        },
        "text": {
          "ca": "Dibuixa a part dos cercles que es toquin, de radis diferents. Què saps de la distància entre els seus centres? És el fet que et falta, i no és a l'enunciat.",
          "en": null
        },
        "figura": "fig-185.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-009.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Aquell segment marcat amb \"?\" el pots dir de dues maneres: per Pitàgores, amb els dos catets R; i per la tangència, amb R i r. Iguala les dues expressions i aïlla r.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb R = 1 t'ha de sortir un valor entre 0'4 i 0'42. Comprova també que R + r és exactament √2, que és la distància del centre del quadrat al centre d'un cercle gran.",
      "en": null
    },
    "iDespres": {
      "ca": "La mateixa palanca (distància entre centres = suma de radis) resol q23 i q44, que són el mateix joc en configuracions més enrevessades. I \"digues la mateixa quantitat de dues maneres\" és una de les tècniques de demostració més productives que hi ha; la retrobaràs tota la vida.",
      "en": null
    }
  },
  "q23": {
    "moviment": "dues-maneres",
    "movimentTitol": {
      "ca": "digues la mateixa distància de dues maneres",
      "en": null
    },
    "lot": 2,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "reconeix la palanca",
          "en": null
        },
        "text": {
          "ca": "El llibre et planteja tres puzles de cop. Fes primer el de l'esquerra (un cercle gran tallat pels seus dos diàmetres, amb un cercle petit encaixat en un dels quatre racons). Els altres dos es resolen amb la mateixa idea — te'ls deixo per a després.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "el mateix truc, disfressat",
          "en": null
        },
        "text": {
          "ca": "A q22 la distància entre els centres de dos cercles tangents es podia dir de dues maneres: per Pitàgores (amb els catets que calguessin) i per la tangència (suma o resta de radis). Aquí els \"dos costats\" que fan de catets ja no són dos radis R — són què, exactament? Mira on toca el cercle petit.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-017.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El cercle petit toca els dos diàmetres, així que el seu centre és a distància r de cadascun — aquests són els dos catets, i tots dos fan r (no R). La hipotenusa (el segment \"?\") la pots dir per Pitàgores, r√2, i també per la tangència amb el cercle gran, R−r. Iguala-les.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb R = 1 surt r = √2 − 1 ≈ 0,414 — exactament el mateix valor numèric que et va sortir a q22, tot i que la figura és diferent del tot. No és casualitat: comprova que l'equació r(√2+1) = R que has fet servir aquí és, mirada amb calma, la mateixa equació de q22.",
      "en": null
    },
    "iDespres": {
      "ca": "Ara fes els altres dos puzles de q23 amb la mateixa palanca (en un, la \"tangència\" és amb una diagonal en lloc d'un altre cercle — la distància d'un punt a una recta hi fa d'hipotenusa). I quan vulguis una versió amb encara més incògnites, q44 t'hi espera.",
      "en": null
    }
  },
  "q24": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 6,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "No un rectangle concret: la condició general que a, b i c (costats i diagonal) han de complir perquè els tres siguin enters alhora.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "ja coneixes l'equació",
          "en": null
        },
        "text": {
          "ca": "a²+b²=c² —la mateixa relació que fas servir des de q14/q25. La pregunta aquí no és calcular c a partir de a i b: és trobar TERNES (a,b,c) senceres que la compleixin.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "El triangle rectangle és mig rectangle: la diagonal el parteix en dos.",
          "en": null
        },
        "figura": "fig-066.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Prova ternes petites a ull: 3,4,? —quant val?, 5,12,? —quant val? Un cop en trobis dues o tres, mira si segueixen algun patró (per exemple, què passa si multipliques tota una terna per un mateix nombre?).",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "3²+4²=9+16=25=5². La terna (3,4,5) funciona. Comprova també (6,8,10) —el doble de l'anterior— i (5,12,13).",
      "en": null
    },
    "iDespres": {
      "ca": "Aquestes ternes es diuen pitagòriques, i hi ha una fórmula que les genera totes (m²−n², 2mn, m²+n², per a m>n enters) —una pregunta oberta per qui vulgui anar més enllà del que demana aquest quadern.",
      "en": null
    }
  },
  "q25": {
    "moviment": "un-altre-pla",
    "movimentTitol": {
      "ca": "repeteix el mateix argument en un altre pla",
      "en": null
    },
    "lot": 1,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "aprèn a llegir un dibuix de l'espai",
          "en": null
        },
        "text": {
          "ca": "Abans de res, una advertència que et servirà per a tot el que ve: en un dibuix en perspectiva els angles rectes no semblen rectes. A la figura, la vora del davant i la de la profunditat formen un angle que sembla obert, i tanmateix a la caixa de veritat fan 90°. Fia't de l'objecte, no del dibuix. Aquesta és la primera cosa que cal desaprendre en passar del pla a l'espai.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "ja en saps la meitat",
          "en": null
        },
        "text": {
          "ca": "La diagonal d'un rectangle ja la saps calcular. Hi ha algun rectangle amagat dins d'aquesta caixa que et deixi a mig camí de la diagonal llarga?",
          "en": null
        },
        "figura": "fig-186.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-012.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Tens dos triangles rectangles i no són al mateix pla: el primer està estirat a terra, el segon està dret. La hipotenusa del primer és un catet del segon. Aplica Pitàgores dues vegades i substitueix.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Caixa de 3 × 4 × 12: la diagonal de la base ha de fer 5 i la de la caixa, 13. I un cub de costat 1 ha de donar √3 ≈ 1,732.",
      "en": null
    },
    "iDespres": {
      "ca": "Fixa't en la forma del resultat: a² + b² + c². Un quart costat en donaria un quart quadrat, i així indefinidament — encara que ja no ho puguis dibuixar. I el moviment \"treballa dins d'un pla ben triat\" és el que resol gairebé totes les preguntes de l'espai del llibre, de q45 a q52.",
      "en": null
    }
  },
  "q26": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 3,
    "pistes": [
      {
        "nivell": 0,
        "titol": null,
        "text": {
          "ca": "L'alçada parteix el triangle en dos trossos. Mira'ls per separat: quin tipus de triangle és cadascun?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": null,
        "text": {
          "ca": "Cada meitat és un triangle rectangle amb hipotenusa el costat del triangle (s) i un catet la meitat de la base (s/2). Pitàgores et dona directament l'altre catet — que és, precisament, l'alçada.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-022.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "h² = s² − (s/2)² = s² − s²/4 = (3/4)s². Arrel quadrada: h = s·√3/2.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb s=10: h²=100−25=75, h=√75=5√3≈8,66 — i (1/2)√3×10≈8,66.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest mateix parell (meitat de la base, alçada, Pitàgores) el tornaràs a fer servir immediatament per calcular l'àrea.",
      "en": null
    }
  },
  "q27_implicit": {
    "moviment": "dues-maneres",
    "movimentTitol": {
      "ca": "dues maneres",
      "en": null
    },
    "lot": 6,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què demana el dibuix",
          "en": null
        },
        "text": {
          "ca": "Aquesta pregunta no té enunciat: el llibre et dona només tres imatges (un triangle, un quadrat, un cercle, cadascun amb cercles tangents) i dona per fet que ja saps què cal fer-hi: trobar la mida del cercle petit en funció de la mida gran, a cadascuna. És el mateix tipus de pregunta que q22, tres vegades.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "el mateix truc de q22, reaplicat",
          "en": null
        },
        "text": {
          "ca": "A q22 vas unir el centre del quadrat amb el centre d'un cercle petit i vas obtenir un triangle rectangle. Aquí, uneix el centre de gravetat del triangle equilàter amb el centre d'un dels tres cercles iguals, i també amb el vèrtex més proper. Els dos segments són fàcils de mesurar per raons diferents — aquí hi ha la teva \"dues maneres\".",
          "en": null
        },
        "figura": "fig-187.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Només s'anota el primer panell (el triangle) i el segon (el quadrat amb el seu cercle circumscrit, on la diagonal marcada et dona directament la relació R = s√2/2). El tercer panell (quatre cercles dins un cercle gran) és la mateixa família de puzle però amb més peces — no cal resoldre'l aquí.",
          "en": null
        },
        "figura": "fig-058.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Al triangle: la distància del centroide a un vèrtex és L/√3. La distància del centroide al centre d'un cercle és 2r menys que això, però també és 2r/√3 (perquè els tres centres formen un triangle equilàter petit, semblant al gran). Iguala-les.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Triangle de costat L=4: r = L(√3−1)/4 ≈ 0,732. Quadrat de costat s=4: R = 4×√2/2 ≈ 2,828.",
      "en": null
    },
    "iDespres": {
      "ca": "q40_implicit hi torna amb una cadena més llarga de cercles tangents — el mateix moviment, un pas més complicat.",
      "en": null
    }
  },
  "q28": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 3,
    "pistes": [
      {
        "nivell": 0,
        "titol": null,
        "text": {
          "ca": "Ja tens l'alçada de q26. L'àrea d'un triangle és sempre la mateixa fórmula, la facis servir on la facis servir.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": null,
        "text": {
          "ca": "Àrea = (1/2)·base·alçada. La base és s. L'alçada és el que ja vas trobar a q26. Substitueix-ho i simplifica.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-023.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Àrea = (1/2)·s·(s√3/2) = (√3/4)s². No hi ha res més a demostrar — és substituir un resultat ja fet dins una fórmula ja coneguda.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb s=10: (√3/4)×100≈43,30. Comprova-ho també multiplicant directament (1/2)×10×8,66≈43,30 — han de coincidir.",
      "en": null
    },
    "iDespres": {
      "ca": "Encara que sembli un pas trivial, aquesta és la primera vegada del llibre que reutilitzes un resultat teu propi (no un teorema del llibre) com a peça d'una altra demostració — val la pena notar-ho.",
      "en": null
    }
  },
  "q29": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut (reaplicació directa de q70)",
      "en": null
    },
    "lot": 4,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "no tornis a demostrar q70",
          "en": null
        },
        "text": {
          "ca": "Ja tens la fórmula: un polígon de n costats, triangulat des d'un vèrtex, dona n−3 diagonals i n−2 triangles. Aquesta pregunta no et demana redemostrar-ho, et demana fer-lo servir amb valors concrets de n.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "compta amb els dits abans de fer servir la fórmula",
          "en": null
        },
        "text": {
          "ca": "Mira el dibuix de l'hexàgon. Des del vèrtex de dalt, compta les diagonals una per una. Compta els triangles un per un. Comprova que els dos comptatges coincideixen amb n−3 i n−2 per a n=6 abans de confiar-hi cegament per a n=8.",
          "en": null
        },
        "figura": "fig-188.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Els dos polígons són regulars (a diferència del de q70), però aquí la regularitat és només perquè es vegi net al dibuix — la fórmula que fas servir no la necessita per res.",
          "en": null
        },
        "figura": "fig-037.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Aplica n−3 i n−2 per a n=6 i n=8 per separat. Aquí no hi ha cap pas nou de raonament: el pas nou ja el vas fer a q70. El que hi ha aquí és la comprovació que la fórmula, un cop obtinguda en abstracte, dona números correctes en casos concrets.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Hexàgon (n=6): 3 diagonals, 4 triangles, suma d'angles 720°. Octàgon (n=8): 5 diagonals, 6 triangles, suma d'angles 1080°.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest patró —demostrar-ho en abstracte una vegada (q70) i després aplicar-ho repetidament sense repetir l'argument (q29, i també q06, que hi torna des d'un altre angle)— és com funciona la major part de la geometria a partir d'aquí: un teorema, moltes aplicacions.",
      "en": null
    }
  },
  "q30": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 6,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "dues preguntes, un sol dibuix",
          "en": null
        },
        "text": {
          "ca": "\"Diagonals\" i \"àrea\" semblen coses diferents, però totes dues surten de la mateixa construcció que ja coneixes: triangular el dodecàgon des d'un sol vèrtex.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "compta abans de mesurar",
          "en": null
        },
        "text": {
          "ca": "A q29 vas comptar quants triangles surten de triangular un polígon de n costats des d'un vèrtex (n−2). Aquí, n=12: quants triangles tens? I quants tipus DIFERENTS de diagonals hi ha (diagonals que salten 1 vèrtex, 2 vèrtexs, 3...)?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Un dels dotze triangles del ventall, marcat en sanguina: si en saps l'àrea, la resta del dodecàgon és aquest mateix triangle repetit (encara que no tots els triangles del ventall siguin idèntics entre si, com sí ho eren a un polígon triangulat des del CENTRE).",
          "en": null
        },
        "figura": "fig-067.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "A diferència de q39 (pentàgon, triangulat des del centre, deu triangles idèntics), aquí triangules des d'un VÈRTEX: els deu triangles no són tots iguals. Per calcular l'àrea et cal la suma de les deu àrees, no deu vegades una de sola —o bé, alternativa més neta: torna a triangular des del CENTRE, com q39, i aprofita que el dodecàgon és regular.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Dodecàgon de costat s=1, triangulat des del centre: apotema a=1/(2 tan15°)≈1,866. Àrea d'un dels 12 triangles: (1/2)(1)(1,866) ≈0,933. Àrea total: 12×0,933≈11,196 —coincideix amb la fórmula estàndard 3(2+√3)s²≈11,196.",
      "en": null
    },
    "iDespres": {
      "ca": "El mateix parany (triangular des d'un vèrtex dona triangles DESIGUALS; triangular des del centre en un polígon regular els dona tots IGUALS) és el que distingeix q29 de q39 — val la pena que en aquest punt tinguis clar quan et convé cada mètode.",
      "en": null
    }
  },
  "q31": {
    "moviment": "simetria-i-demostra",
    "movimentTitol": {
      "ca": "fes servir la simetria per demostrar-ho",
      "en": null
    },
    "lot": 6,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "són dues preguntes, com a q08c",
          "en": null
        },
        "text": {
          "ca": "La primera pregunta (per què A, B i C són semblants) i la segona (per què els altres dos triangles, més grans, són idèntics entre ells) es demostren de maneres diferents: la primera per angles repetits, la segona per simetria de mirall.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "marca els angles, no mesuris els costats",
          "en": null
        },
        "text": {
          "ca": "El triangle A (de dalt) té dos costats iguals (dos costats del pentàgon) — és isòsceles. El seu angle superior és l'angle interior del pentàgon (108°); els altres dos, iguals entre ells, què han de valer perquè sumin 180° amb el de dalt?",
          "en": null
        },
        "figura": "fig-189.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Els arcs dobles marquen els angles de 108° (a dalt de A, i al punt on es creuen les dues diagonals); els arcs simples marquen els de 36°, repetits a la base de A i de C.",
          "en": null
        },
        "figura": "fig-060.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Compara els tres angles de cada triangle (A, B, C): tots tenen els mateixos dos valors. Per a la segona pregunta, mira els DOS triangles que no estan etiquetats (els laterals, més grans): la simetria de mirall del pentàgon els intercanvia — què implica això sobre la seva mida i forma?",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "En un pentàgon de costat 1, comprova amb un dibuix a escala (o coordenades) que els triangles A, B i C tenen tots dos angles de 36° i un de 108° — el mateix conjunt exacte, per als tres.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta és la mateixa relació angular que fa que la diagonal del pentàgon i el seu costat estiguin en raó àuria — la retrobaràs, ja convertida en xifra, a q32.",
      "en": null
    }
  },
  "q32": {
    "moviment": "dilatacio",
    "movimentTitol": {
      "ca": "dilatació",
      "en": null
    },
    "lot": 6,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Un factor d'escala: quantes vegades més petit és el pentàgon interior del pentagrama, comparat amb el gran? No cal el valor absolut, només la raó.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "ja tens la peça que et fa falta",
          "en": null
        },
        "text": {
          "ca": "A q31 vas trobar que els triangles de punta del pentagrama són tots semblants, amb la mateixa parella d'angles (36°, 36°, 108°). La raó entre la diagonal i el costat d'un pentàgon regular és sempre el mateix nombre —l'has vist a q38 amb un altre nom.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "El pentàgon petit (en sanguina) és el que formen els cinc punts on es creuen les diagonals.",
          "en": null
        },
        "figura": "fig-061.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Si d/s = φ (el nombre auri) és la raó diagonal/costat, i el costat del pentàgon petit es relaciona amb el gran per aquesta mateixa raó aplicada dues vegades (un cop per \"entrar\" cap a cada punta), quina potència de φ esperes?",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb costat del pentàgon gran = 1: el pentàgon petit fa 1/φ² ≈ 0,382 de costat. Comprova que φ² = φ+1 (la identitat de q33) et dona 1/φ² = 2−φ ≈ 0,382.",
      "en": null
    },
    "iDespres": {
      "ca": "Si continuessis dibuixant el pentagrama dins del pentàgon petit, i el pentagrama dins d'aquell, obtindries una espiral infinita de pentàgons cada cop més petits per un factor constant 1/φ² — el mateix tipus d'autosemblança que retrobaràs a les espirals de q122.",
      "en": null
    }
  },
  "q33": {
    "moviment": "identitat-com-a-figura",
    "movimentTitol": {
      "ca": "la identitat és la figura",
      "en": null
    },
    "lot": 6,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què vol dir \"alternativa\"",
          "en": null
        },
        "text": {
          "ca": "Ja saps (o pots saber, per q31/q32) que d/s=φ compleix φ²=φ+1 per trigonometria. Aquí et demanen la MATEIXA identitat, però llegida directament d'un dibuix, sense cap sinus ni cosinus.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "identifica els costats \"1\" i \"d\" al dibuix",
          "en": null
        },
        "text": {
          "ca": "Dos pentàgons regulars de costat 1 comparteixen una aresta sencera. Des dels dos extrems d'aquesta aresta compartida surt una diagonal cap a un mateix vèrtex llunyà d'un dels dos pentàgons. Quant fan, en termes de d i 1, els tres costats del triangle que això forma?",
          "en": null
        },
        "figura": "fig-190.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "El triangle isòsceles té base 1 (l'aresta compartida) i dos costats d (dues diagonals).",
          "en": null
        },
        "figura": "fig-062.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Aquest triangle és semblant al triangle \"A\" que ja vas marcar a q31 (els mateixos angles 36°-36°-108°). Un triangle isòsceles amb aquests angles, de base 1 i costats d, compleix una relació de semblança amb ell mateix partit per la bisectriu d'un angle de la base: d/1 = 1/(d−1). Desenvolupa-la.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "d/1 = 1/(d−1) → d(d−1)=1 → d²−d=1 → d²=d+1. Amb d=φ≈1,618: φ²≈2,618, i φ+1≈2,618 ✓.",
      "en": null
    },
    "iDespres": {
      "ca": "Ja tens tres demostracions independents de la mateixa identitat (q38 amb el rectangle, q31/q32 amb els triangles del pentagrama, i aquesta amb dos pentàgons) — val la pena que notis que cap de les tres es repeteix: la geometria sovint deixa més d'un camí obert cap al mateix fet.",
      "en": null
    }
  },
  "q34": {
    "moviment": "identitat-com-a-figura",
    "movimentTitol": {
      "ca": "una identitat algebraica és una figura",
      "en": null
    },
    "lot": 1,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "La identitat ja la saps desenvolupar amb àlgebra en dues línies. No és això el que et demanen. Et demanen un dibuix on la igualtat es vegi, sense fer cap compte.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "llegeix els termes com a àrees",
          "en": null
        },
        "text": {
          "ca": "(x + y)² és l'àrea d'alguna cosa. De què, exactament? I x²? I xy — quina figura té àrea xy? Un cop hagis contestat aquestes tres preguntes gairebé ja has acabat.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-001.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Tens quatre regions. Digues l'àrea de cadascuna. Ara suma-les. I digues també l'àrea del quadrat sencer d'una sola tirada. Has dit dues vegades la mateixa cosa — el mateix moviment que faràs servir a q22.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "x = 5, y = 3. El quadrat sencer fa 64. Les quatre regions han de fer 25, 15, 15 i 9. Sumen 64.",
      "en": null
    },
    "iDespres": {
      "ca": "Tres continuacions, de fàcil a difícil: (1) dibuixa a²−b² = (a+b)(a−b); (2) intenta (x−y)², que costa més perquè hi ha peces que se solapen i s'han de restar; (3) i si en lloc d'un quadrat agafessis un cub? Quina identitat en surt?",
      "en": null
    }
  },
  "q35": {
    "moviment": "construeix-per-definir",
    "movimentTitol": {
      "ca": "construeix la solució a partir de la seva pròpia definició",
      "en": null
    },
    "lot": 6,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "dues preguntes amb dificultat molt diferent",
          "en": null
        },
        "text": {
          "ca": "La primera (suma i diferència) és mecànica un cop la veus. La segona (suma i producte) és, en realitat, la mateixa idea que vas fer servir a q36 —val la pena que ho notis abans de continuar.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "suma i diferència: parteix el segment",
          "en": null
        },
        "text": {
          "ca": "Si x+y i x−y són coneguts, on cau x en relació amb el punt mitjà del segment de longitud x+y? (Pensa-ho amb un cas fàcil: si x−y=0, x i y són iguals i x és exactament el punt mitjà.)",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "El punt mitjà (negre) i el punt de tall real entre x i y (sanguina) no coincideixen —la distància entre tots dos és exactament (x−y)/2.",
          "en": null
        },
        "figura": "fig-068.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "x = (x+y)/2 + (x−y)/2, i y = (x+y)/2 − (x−y)/2. Per a la segona pregunta (suma i producte coneguts): recorda x(s−x) = s²/4 − (x−s/2)² de q36 —amb suma s i producte P coneguts, això et dona una equació de segon grau en x.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "x+y=10, x−y=4: x=7, y=3. Comprova: 7+3=10 ✓, 7−3=4 ✓, 7×3=21. Ara amb suma=10 i producte=21 coneguts (sense la diferència): recupera x=7,y=3 amb l'equació de segon grau.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest mètode (mig de la suma, més/menys mig de la diferència) és exactament com es dedueix la fórmula general per resoldre qualsevol sistema del tipus \"coneixes x+y i x·y\" —el mateix esquelet que la fórmula de segon grau que ja fas servir a l'àlgebra.",
      "en": null
    }
  },
  "q36": {
    "moviment": "simetria-i-demostra",
    "movimentTitol": {
      "ca": "endevina per simetria, després demostra",
      "en": null
    },
    "lot": 1,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "fixa't què t'han donat",
          "en": null
        },
        "text": {
          "ca": "L'enunciat ja et diu la resposta. Això canvia la feina: no has de descobrir res, has de demostrar. Són dues activitats diferents i val la pena que notis quan et demanen l'una o l'altra.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "quantes llibertats tens?",
          "en": null
        },
        "text": {
          "ca": "Perímetre fix vol dir que quan tries l'amplada, l'alçada ja està decidida. Escriu-ho: si el perímetre és P i l'amplada és x, quant fa l'alçada? Ara tot el problema depèn d'una sola lletra.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "mira't la restricció",
          "en": null
        },
        "text": {
          "ca": "Tots aquests rectangles tenen el mateix perímetre. Fixa't on van a parar els seus vèrtexs oposats: sobre una recta. Aquesta recta és la condició \"perímetre fix\", dibuixada.",
          "en": null
        },
        "figura": "fig-010.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Escriu l'àrea en funció de x sola i mira què és aquesta expressió. Ara, si no vols derivar res, hi ha un truc purament algebraic: amb s = P/2,\n\nx(s − x) = s²/4 − (x − s/2)²\n\nEl segon terme no pot ser mai negatiu, i val zero només quan x = s/2. Ja està.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "P = 24, o sigui s = 12. Àrees: 1×11 = 11, 3×9 = 27, 5×7 = 35, 6×6 = 36. I comprova que la teva fórmula dona 36 − (x−6)².",
      "en": null
    },
    "iDespres": {
      "ca": "Gira la pregunta: de tots els rectangles de la mateixa àrea, quin té el perímetre més petit? La resposta és la mateixa i l'àlgebra s'hi assembla molt. I un cop tinguis això: i si en lloc de rectangles hi poguessis posar qualsevol forma? Aquesta és una de les preguntes grans de la geometria, i la resposta no és un quadrat.",
      "en": null
    }
  },
  "q37": {
    "moviment": "dues-maneres",
    "movimentTitol": {
      "ca": "dues equacions, dues incògnites — plantejar el sistema que la construcció exigeix",
      "en": null
    },
    "lot": 4,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "dues condicions, no una",
          "en": null
        },
        "text": {
          "ca": "\"Mateixa àrea\" és una condició. \"Mateix perímetre\" n'és una altra, independent. Un rectangle té dues dimensions lliures (base i altura), i tens exactament dues condicions per fixar-les totes dues —això hauria d'engegar-te l'alarma de \"sistema de dues equacions amb dues incògnites\".",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "escriu les dues magnituds del triangle primer",
          "en": null
        },
        "text": {
          "ca": "Si el triangle equilàter té costat s, el seu perímetre és 3s i la seva àrea és (√3/4)s². Aquests dos números són ara constants conegudes: el que et falta trobar són les dues dimensions x, y del rectangle.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "El rectangle es dibuixa amb un interrogant a posta: no hi ha unes dimensions \"correctes\" per pintar-hi, perquè encara no les has calculat — són precisament el resultat que busques.",
          "en": null
        },
        "figura": "fig-046.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Planteja 2x + 2y = 3s (mateix perímetre) i xy = (√3/4)s² (mateixa àrea). De la primera equació, aïlla y en funció de x i s; substitueix-ho a la segona. Et queda una equació de segon grau en x.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb s = 4: perímetre 12, àrea 4√3 ≈ 6,93. Si resols el sistema, has de trobar dues solucions per a (x, y) que, multiplicades, donin ≈ 6,93, i sumades (×2) donin 12. Comprova que la teva parella de solucions compleix totes dues coses alhora, no només una.",
      "en": null
    },
    "iDespres": {
      "ca": "Fixa't que el sistema té, en general, dues solucions diferents per a (x, y) (els papers de x i y es poden intercanviar, i a més n'hi pot haver una altra parella no trivial): \"mateixa àrea i mateix perímetre\" no determina un únic rectangle. És un recordatori útil que dues figures amb la mateixa àrea i el mateix perímetre no necessiten ser congruents ni úniques.",
      "en": null
    }
  },
  "q38": {
    "moviment": "identitat-com-a-figura",
    "movimentTitol": {
      "ca": "la identitat com a figura — plantejar l'equació que la construcció mateixa dicta",
      "en": null
    },
    "lot": 4,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "tradueix \"semblant\" a una proporció",
          "en": null
        },
        "text": {
          "ca": "\"El rectangle petit és semblant a l'original\" vol dir que la raó entre els seus costats és la mateixa raó que als costats de l'original. Aquesta és tota la informació de l'enunciat; no n'hi ha cap altra.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "posa noms als costats",
          "en": null
        },
        "text": {
          "ca": "Sigui el costat curt del rectangle original 1, i el llarg x (x > 1). En treure'n el quadrat de costat 1, queda un rectangle de costats 1 i (x−1). Escriu la proporció \"el rectangle petit és semblant a l'original\" amb aquests noms.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "La línia sanguina marca on cauria el tall que separa el quadrat de la resta. Els dos segments etiquetats \"1\" i \"x\" corresponen als dos trams en què queda partit el costat llarg.",
          "en": null
        },
        "figura": "fig-042.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "La proporció costat llarg / costat curt ha de ser la mateixa als dos rectangles: x/1 = 1/(x−1). Aquesta equació, un cop desenvolupada, és una equació de segon grau en x. Resol-la (només té sentit la solució positiva) i identifica el número que t'ha sortit.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "x hauria de sortir (1+√5)/2 ≈ 1,618. Comprova-ho substituint aquest valor a la proporció original: 1,618/1 hauria de ser (aproximadament) igual a 1/0,618.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest número és el nombre auri, i el retrobaràs si mai treballes amb pentàgons regulars i les seves diagonals — la mateixa proporció hi torna a sortir, per una via completament diferent (diagonal entre costat, no rectangle entre rectangle).",
      "en": null
    }
  },
  "q39": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut (reaplica q76, amb una peça extra)",
      "en": null
    },
    "lot": 4,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "ja has resolt un problema molt semblant",
          "en": null
        },
        "text": {
          "ca": "A q76 vas partir un triangle en tres triangles des del seu incentre i vas sumar-ne les àrees. Aquí faràs exactament el mateix amb un pentàgon regular i el seu centre —amb l'avantatge que, com que el pentàgon és regular, els cinc triangles que en surten són tots iguals entre ells, no cal sumar cinc termes diferents.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "un triangle, cinc vegades",
          "en": null
        },
        "text": {
          "ca": "Uneix el centre amb els cinc vèrtexs. Surten cinc triangles isòsceles idèntics. Si en trobes l'àrea d'un, ja tens la resposta: multiplica per 5.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "La peça nova respecte de q76 és l'apotema (el segment discontinu curt del centre al punt mitjà d'un costat): fa d'altura de cadascun dels cinc triangles, i el radi R (centre a un vèrtex) no és directament la mateixa cosa que l'apotema —una confusió freqüent val la pena evitar-la ara.",
          "en": null
        },
        "figura": "fig-047.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Cada triangle té per base el costat s del pentàgon i per altura l'apotema a. La seva àrea és (1/2) × s × a. Multiplica per 5 triangles, i, si vols una fórmula només en funció de s, hauràs d'expressar a en funció de s amb trigonometria (a = s / (2 tan(36°))) —o deixar la fórmula en funció de s i a alhora, que sovint és més útil a la pràctica.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb s = 10: l'apotema val a ≈ 6,88. Àrea d'un triangle: (1/2)×10×6,88 = 34,4. Àrea del pentàgon: 5×34,4 = 172. Aquest resultat ha de coincidir (amb petit marge d'arrodoniment) amb la fórmula estàndard Àrea = (5/4) s² / tan(36°) ≈ 172,05.",
      "en": null
    },
    "iDespres": {
      "ca": "El mateix moviment —n triangles iguals des del centre, un per costat— funciona per a qualsevol polígon regular, no només el pentàgon: és la manera general de trobar l'àrea d'un polígon regular de n costats coneixent-ne el costat i l'apotema.",
      "en": null
    }
  },
  "q40_implicit": {
    "moviment": "dues-maneres",
    "movimentTitol": {
      "ca": "dues maneres",
      "en": null
    },
    "lot": 6,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què demana el dibuix",
          "en": null
        },
        "text": {
          "ca": "Dues imatges més sense enunciat. Totes dues amaguen la mateixa pregunta que q27_implicit: mesura el radi petit en funció del gran. (Nota d'aquesta figura: el primer panell es dibuixa com el quadrat inscrit estàndard —els 4 vèrtexs sobre el cercle— perquè l'escaneig original sembla tenir un detall addicional a dalt que no he pogut resoldre amb confiança; v. NOTA-LOT-6.md.)",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "quantes incògnites, quantes condicions",
          "en": null
        },
        "text": {
          "ca": "Al segon panell (dos cercles i un quadrat en fila dins un cercle gran): si el quadrat té costat 2r (igual que el diàmetre comú dels cercles), i tot plegat travessa el diàmetre del cercle gran, quina equació relaciona R (el radi gran) amb r?",
          "en": null
        },
        "figura": "fig-191.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-059.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Al primer panell: la diagonal del quadrat és el diàmetre del cercle, 2R. Si el costat del quadrat és s, quina relació de Pitàgores lliga s amb R?",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Quadrat de costat s=4: diagonal=4√2, per tant R=2√2≈2,83.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta família de puzles de cercles tangents (q22, q27, q40) comparteix sempre el mateix moviment: connecta centres, troba un triangle rectangle amagat, aplica Pitàgores.",
      "en": null
    }
  },
  "q41": {
    "moviment": "informacio-no-usada",
    "movimentTitol": {
      "ca": "fes servir la informació que has deixat sense tocar",
      "en": null
    },
    "lot": 1,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què vol dir \"sempre\"",
          "en": null
        },
        "text": {
          "ca": "Sempre = allà on posis el punt sobre l'arc. Si la teva raó fa servir on és exactament el punt, no és una raó vàlida.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "fes inventari",
          "en": null
        },
        "text": {
          "ca": "Quines longituds d'aquest dibuix saps segur que són iguals, sense haver-les mesurat? I una pregunta relacionada: per què el dibuix del llibre porta un punt marcat al mig de la base, si l'enunciat no el menciona? En una figura ben feta res no és decoratiu.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "(Compte amb les marques: els dos angles d'un arc són iguals entre ells i els dos de dos arcs són iguals entre ells; els quatre no són iguals. Les ratlletes dels tres segments sí que diuen que els tres fan el mateix, perquè tots tres són radis.)",
          "en": null
        },
        "figura": "fig-005.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Ara tens dos triangles isòsceles (fixa't en les marquetes: tres segments iguals). En un triangle isòsceles els angles de la base són iguals; per això n'hi ha dos marcats amb un arc i dos amb dos arcs. Suma els tres angles del triangle gran, escrivint-los amb aquestes marques. (Et sortirà una cosa de la forma α + (α+β) + β = 180.)",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Posa el punt al capdamunt, just sobre el centre: hauries d'obtenir 45 + 45. Ara posa'l gairebé enganxat a un extrem: l'angle continua sent recte encara que el triangle sigui finíssim? Si la teva raó ho suporta, és bona.",
      "en": null
    },
    "iDespres": {
      "ca": "q42 treu el diàmetre i posa un arc qualsevol. La teva demostració encara s'hi assembla? Ara caldrà distingir casos — el segon cop que et passa això, després de q15.",
      "en": null
    }
  },
  "q42": {
    "moviment": "distingeix-casos",
    "movimentTitol": {
      "ca": "distingeix els casos",
      "en": null
    },
    "lot": 2,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què vol dir \"el mateix arc\"",
          "en": null
        },
        "text": {
          "ca": "Una corda AB parteix el cercle en dos arcs. \"El mateix arc\" vol dir que els dos punts que connectes (P i Q) són tots dos a la banda gran, o tots dos a la banda petita — no un a cada banda. L'angle \"resultant\" és l'angle que es veu des d'aquell punt mirant cap a A i cap a B.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "que no et faci l'esquena la novetat",
          "en": null
        },
        "text": {
          "ca": "A q41 ja vas resoldre el cas particular en què AB és un diàmetre: l'angle sempre és recte, on sigui que posis el punt. Aquí AB ja no és un diàmetre — és una corda qualsevol. Prova-ho amb xifres: posa un cercle de radi 10, la corda AB fixa, i calcula l'angle des de dues posicions diferents del mateix arc. (Si tens ganes de comprovar-ho abans de llegir més avall: 200° i 340° per a A i B, 80° i 140° per als dos punts, amb el centre a l'origen — et sortirà el mateix angle als dos.)",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "(El truc és el mateix de q41: un radi fa un triangle isòsceles. Aquí, en lloc del radi a un vèrtex donat, tria el diàmetre que passa pel punt P.)",
          "en": null
        },
        "figura": "fig-015.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Als dos triangles isòsceles que t'ha creat el diàmetre (OPA i OPB, amb OP=OA=OB perquè tots tres són radis — per això hi ha tres marquetes iguals), anomena α i β els angles de la base a P. L'angle que veus des de P és α+β o bé α−β, segons si el diàmetre que has traçat cau dins o fora de l'angle APB — mira el teu dibuix i decideix quin cas tens. Ara fes exactament el mateix per Q, amb el seu propi diàmetre. Fixa't en una cosa: encara que el cas (suma o resta) pugui ser diferent per a P i per a Q, la relació final amb l'angle central AOB acaba sent la mateixa als dos casos. Compara-ho.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Cercle de radi 10, centre a l'origen. A i B als angles 200° i 340°; P a 80°, Q a 140°. L'angle central AOB val 140°. Calcula (amb coordenades, o amb un transportador sobre el teu propi dibuix) l'angle APB i l'angle AQB: tots dos han de sortir 70°, exactament la meitat de l'angle central.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest resultat (\"angle inscrit = meitat de l'angle central\") el faràs servir moltes vegades més sense que el llibre t'ho recordi — sempre que quatre punts estiguin sobre un mateix cercle, per exemple. I nota una cosa: aquesta és la segona vegada que un argument es parteix en casos que tot i així arriben a la mateixa fórmula — la primera va ser q15.",
      "en": null
    }
  },
  "q43": {
    "moviment": "dues-maneres",
    "movimentTitol": {
      "ca": "dues maneres",
      "en": null
    },
    "lot": 7,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Dues xifres (àrea i perímetre) per al cas de dos cercles, i després la mateixa pregunta per a tres. Cap dels dos casos et demana un nombre aproximat: totes dues respostes surten exactes.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "el triangle amagat",
          "en": null
        },
        "text": {
          "ca": "Uneix els dos centres, i un dels dos punts on els cercles es tallen. Els tres costats d'aquest triangle: dos són radis (iguals a r), i el tercer és la distància entre els dos centres — que també val r, perquè cada cercle passa pel centre de l'altre. Quin tipus de triangle és?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "El triangle equilàter que has trobat es repeteix, en mirall, cap a l'altre punt de tall — junts marquen l'angle que cada centre \"veu\" cap als dos punts d'intersecció.",
          "en": null
        },
        "figura": "fig-070.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Aquest angle (al centre d'un cercle, entre els dos radis que van als punts de tall) és el doble de l'angle del triangle equilàter: 120°. La zona solapada (l'ull, o vesica) és la suma de dos \"segments circulars\" — cadascun, un sector de 120° menys el triangle equilàter que ja hi has trobat. El perímetre és la suma dels dos arcs de 120°, un de cada cercle.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb r=1: sector de 120° = π/3 ≈ 1,047; triangle equilàter de costat 1 = √3/4 ≈ 0,433; un segment ≈ 0,614; àrea solapada ≈ 1,228. Perímetre: 2 arcs de 120° = 2×(2π/3) ≈ 4,189.",
      "en": null
    },
    "iDespres": {
      "ca": "Per a tres cercles (cadascun pel centre dels altres dos, formant un triangle equilàter de costat r entre els tres centres), la mateixa idea —sectors menys triangles— es repeteix, però ara cal decidir quines regions es compten un cop, quines dos, i quina exactament tres vegades: el mateix reflex del comptatge amb cura que ja vas fer servir a q03.",
      "en": null
    }
  },
  "q44": {
    "moviment": "dues-maneres",
    "movimentTitol": {
      "ca": "digues la mateixa distància de dues maneres",
      "en": null
    },
    "lot": 3,
    "pistes": [
      {
        "nivell": 0,
        "titol": null,
        "text": {
          "ca": "Ja saps dir, de dues maneres, la distància entre els centres de dos cercles tangents a la mateixa recta (q23). Aquí en tens tres parelles de cercles tangents (gran-petit esquerre, gran-petit dret, petit-gran esquerre amb gran dret) — i les tres relacions han de ser certes alhora.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": null,
        "text": {
          "ca": "Per a dos cercles de radis a i b, tots dos tangents a la mateixa recta i tangents entre ells, la distància horitzontal entre els peus (on toquen la recta) és 2√(ab) — és el mateix triangle rectangle de q23, amb catets (a−b) i 2√(ab), hipotenusa (a+b). Aplica'l a la parella (R₁, r).",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-024.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "La mateixa relació val per a (R₂, r). Els peus dels tres cercles són tots sobre la mateixa recta, així que la distància entre el peu de R₁ i el peu de R₂ (que ja saps que és 2√(R₁R₂), directament de q23) ha de ser la suma de les altres dues distàncies parcials (peu de R₁ a peu de r, i peu de r a peu de R₂) — perquè r és, precisament, en algun punt entremig. Escriu aquesta equació amb els tres √( ) i aïlla r.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb R₁=1, R₂=1 (dos cercles iguals): hauria de sortir 1/√r = 1/√1+1/√1 = 2, r=1/4. Comprova-ho també geomètricament: per simetria, amb dos cercles iguals el petit ha de quedar centrat i el resultat 1/4 és fàcil de verificar per Pitàgores directe.",
      "en": null
    },
    "iDespres": {
      "ca": "La relació que acabes de trobar (1/√r = 1/√R₁ + 1/√R₂) és un cas particular d'una fórmula més general (el teorema de Descartes per a cercles), que val per a qualsevol quatre cercles mútuament tangents, no només tres en línia.",
      "en": null
    }
  },
  "q45": {
    "moviment": "desenrotlla",
    "movimentTitol": {
      "ca": "desenrotlla la superfície",
      "en": null
    },
    "lot": 2,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "un avís abans de començar",
          "en": null
        },
        "text": {
          "ca": "En un dibuix en perspectiva les circumferències de dalt i de baix del cilindre no semblen cercles — surten aixafades, com el·lipses. Fia't de l'objecte, no del dibuix: són cercles de veritat.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "pensa en l'etiqueta d'una llauna",
          "en": null
        },
        "text": {
          "ca": "Si talles l'etiqueta de paper d'una llauna de sopa en vertical i l'estires plana, quina forma té? Amb radi 3 i alçada 10: l'amplada de l'etiqueta és la longitud de la circumferència, 2π×3 ≈ 18,85; l'alçada és 10, la mateixa del cilindre. Ja tens un rectangle.",
          "en": null
        },
        "figura": "fig-192.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-021.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "L'àrea lateral del cilindre és, exactament, l'àrea d'aquest rectangle: (2πr) × h. No cal cap fórmula nova ni cap límit — un cop desenrotllat, és literalment base × alçada. El parany habitual: l'amplada del rectangle és la circumferència, no el diàmetre ni el radi.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb r=3, h=10: àrea lateral = 2π(3)(10) = 60π ≈ 188,5. Si hi afegeixes les dues tapes circulars (2×πr² = 18π), la superfície total surt 78π ≈ 245,0.",
      "en": null
    },
    "iDespres": {
      "ca": "El mateix truc no funciona igual de net per a un con (q51): un con desenrotllat no dona un rectangle sinó un sector de cercle, perquè el \"radi\" de l'etiqueta ja no és constant. I quan vulguis mesurar la longitud d'una hèlix (q123), \"desenrotllar\" torna a ser la idea — ara desenrotllant un cilindre sencer, no només la seva superfície.",
      "en": null
    }
  },
  "q46": {
    "moviment": "dilatacio",
    "movimentTitol": {
      "ca": "nou: dilatacio",
      "en": null
    },
    "lot": 3,
    "pistes": [
      {
        "nivell": 0,
        "titol": null,
        "text": {
          "ca": "Ja coneixes l'àrea d'un cercle. Una el·lipse de semieixos a i b es pot obtenir a partir d'un cercle de radi a estirant-lo verticalment per un factor k = b/a. Si sabessis com canvia l'àrea quan estires una figura qualsevol per un factor fix, ja tindries la resposta.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": null,
        "text": {
          "ca": "Talla el cercle (mentalment) en franges verticals molt primes. Quan l'estires verticalment per un factor k, cada franja canvia d'alçada per aquell mateix factor k, però la seva amplada (horitzontal) no canvia gens. Què li passa a l'àrea de cada franja? I a la suma de totes?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-025.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Cada franja veu la seva àrea multiplicada per k; per tant tota la figura (la suma de totes les franges) també veu la seva àrea multiplicada per k. Àrea del cercle de radi a: πa². Amb k=b/a: àrea de l'el·lipse = πa²·(b/a) = πab.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb a=5, b=3: àrea = π×5×3=15π≈47,12. Comprova el cas particular b=a (l'\"el·lipse\" és el cercle mateix): πa·a=πa², correcte.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest mateix argument de \"franges que s'estiren\" funciona per a qualsevol figura, no només un cercle — és, de fet, una altra manera d'arribar al mateix tipus de raonament que Cavalieri (q54, en aquest mateix lot) fa servir per a àrees en general.",
      "en": null
    }
  },
  "q47": {
    "moviment": "un-altre-pla",
    "movimentTitol": {
      "ca": "tria un altre pla",
      "en": null
    },
    "lot": 3,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "un avís abans de començar",
          "en": null
        },
        "text": {
          "ca": "En un dibuix en perspectiva els angles rectes del cub no semblen rectes. Fia't de l'objecte, no del dibuix.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": null,
        "text": {
          "ca": "Posa el cub amb centre a l'origen i costat 2 (vèrtexs a (±1,±1,±1)) — els nombres surten més nets que amb costat 1. Amb aquesta tria, els sis centres de cara són (±1,0,0), (0,±1,0), (0,0,±1). L'octàedre que formen es pot partir en dues piràmides iguals, unides per la base. Quina és la base, i quina l'alçada de cadascuna?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-026.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Cada piràmide té per base el quadrat que formen quatre dels sis centres (per exemple (±1,0,0),(0,±1,0), un quadrat de diagonal 2) i per alçada la distància fins al cinquè centre (0,0,1), que és 1. Volum d'una piràmide = (1/3)·base·alçada. Suma les dues piràmides i compara amb el volum del cub (2³=8).",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Àrea del quadrat base (diagonal 2, costat √2): (√2)²=2. Volum d'una piràmide: (1/3)×2×1=2/3. Dues piràmides: 4/3. Fracció del cub: (4/3)/8 = 1/6.",
      "en": null
    },
    "iDespres": {
      "ca": "El mateix cub amb el mateix sistema de coordenades et servirà sense cap canvi per a q52 i q56, en aquest mateix lot.",
      "en": null
    }
  },
  "q48": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 7,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una fórmula en a, b, h. \"Incompleta\" és la pista: el sòlid és un tros d'una piràmide, no una piràmide sencera.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "completa el que falta",
          "en": null
        },
        "text": {
          "ca": "Prolonga els quatre costats inclinats del tronc fins que es tornin a trobar en un sol punt. Aquest punt existeix sempre (perquè els dos quadrats són paral·lels i concèntrics, un d'escala diferent): és el vèrtex de la piràmide sencera de la qual el teu sòlid n'és només un tros.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Els costats prolongats fins al vèrtex comú, marcats en sanguina — no formaven part de l'enunciat original.",
          "en": null
        },
        "figura": "fig-074.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El teu sòlid és (piràmide gran, fins al vèrtex, base b) menys (piràmide petita, el tros de dalt que has afegit imaginàriament, base a). Per semblança de triangles, quina alçada té cadascuna en termes de a, b, h?",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "a=2, b=4, h=3: alçada de la piràmide gran H tal que a/b=(H−h)/H → H=6. Volum gran=(1/3)(16)(6)=32. Volum petit=(1/3)(4)(3)=4. Volum del tronc=32−4=28.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta mateixa jugada —completar una figura incompleta fins a una de coneguda, i restar-ne el tros de més— la retrobaràs al casquet esfèric (q62) i, en un altre embolcall, al con aproximat per discs (q50, a continuació).",
      "en": null
    }
  },
  "q49": {
    "moviment": "simetria-i-demostra",
    "movimentTitol": {
      "ca": "endevina per simetria, després demostra",
      "en": null
    },
    "lot": 3,
    "pistes": [
      {
        "nivell": 0,
        "titol": null,
        "text": {
          "ca": "Un tetràedre regular té una simetria total entre els seus quatre vèrtexs — cap n'és especial. Si el \"centre\" existeix, la simetria ja et diu una cosa forta sobre on ha de ser.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": null,
        "text": {
          "ca": "Des de cada vèrtex, traça el segment fins al centre (centre de gravetat) de la cara oposada. Per simetria, aquests quatre segments haurien de trobar-se tots en un sol punt. Comprova-ho amb coordenades: si els quatre vèrtexs són A, B, C, D, quin punt surt de fer la mitjana dels quatre?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-027.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El punt G=(A+B+C+D)/4 és, alhora, el punt que hi ha a 3/4 del camí de cada vèrtex cap al centre de gravetat de la cara oposada — comprova-ho algebraicament per a un vèrtex qualsevol i generalitza per simetria als altres tres.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb A=(1,1,1), B=(1,−1,−1), C=(−1,1,−1), D=(−1,−1,1) (un tetràedre regular clàssic inscrit en un cub): G=(0,0,0). El centre de la cara BCD és ((1−1−1)/3,(−1+1−1)/3,(−1−1+1)/3)=(−1/3,−1/3,−1/3). El punt a 3/4 del camí d'A cap a aquest centre: A+(3/4)((−1/3,−1/3,−1/3)−A) = (1,1,1)+(3/4)(−4/3,−4/3,−4/3) = (1,1,1)+(−1,−1,−1) = (0,0,0) = G ✓.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta relació 3:1 (vèrtex–centre : centre–cara) és l'anàleg en 3D de la relació 2:1 del baricentre d'un triangle en 2D.",
      "en": null
    }
  },
  "q50": {
    "moviment": "cas-limit",
    "movimentTitol": {
      "ca": "cas límit",
      "en": null
    },
    "lot": 7,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "No un únic volum: una successió de valors (un per cada nombre de discs) i el reconeixement de cap a on tendeix.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "comença amb pocs discs",
          "en": null
        },
        "text": {
          "ca": "Amb un sol disc (un cilindre curt dins del con), el volum aproximat es queda curt de veritat. Amb dos discs més prims, ja s'hi assembla més. Cada disc és un cilindre — el mateix objecte de volum conegut que ja vas fer servir a q18a, ara apilat en comptes de format per una sola capa.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-075.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "A mesura que n (el nombre de discs) creix, cada disc s'aprima i se n'ajusten més: la suma dels volums dels discs s'acosta cada cop més al volum real del con, sense arribar-hi mai amb un nombre finit de discs. Quin és, doncs, el volum del con mateix (la fórmula que ja coneixes), comparat amb el d'un cilindre de la mateixa base i alçada?",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Con de radi 3, alçada 6: volum = (1/3)π(9)(6) = 18π ≈ 56,5. El cilindre corresponent (mateixa base i alçada) fa 3 vegades més: 54π ≈ 169,6. Comprova que la successió d'aproximacions per discs, per a n creixent, s'acosta a 18π i no a 54π.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta mateixa idea —apilar peces conegudes cada cop més primes i mirar cap a on tendeix la suma— reapareix, en una forma diferent, quan cal justificar per què el volum del casquet esfèric (q62) depèn de l'alçada de tall exactament com hi depèn.",
      "en": null
    }
  },
  "q51": {
    "moviment": "desenrotlla",
    "movimentTitol": {
      "ca": "desenrotlla la superfície",
      "en": null
    },
    "lot": 3,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "un avís abans de començar",
          "en": null
        },
        "text": {
          "ca": "Com sempre en un dibuix en perspectiva, la base del con no sembla un cercle. És un cercle de veritat.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": null,
        "text": {
          "ca": "A q45 vas desenrotllar un cilindre i et va sortir un rectangle. Prova de fer el mateix amb un con: talla'l des de la punta fins a la vora de la base, en línia recta, i estira'l pla. Ja no surt un rectangle — surt un tros de cercle. Quin radi té aquest tros de cercle? I quina llargada d'arc?",
          "en": null
        },
        "figura": "fig-193.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-030.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El radi del sector és exactament la llargada de la línia que has tallat — l'aresta inclinada del con des de la punta fins a la vora (l'anomenem \"generatriu\" o alçada inclinada, L). L'arc del sector ha de fer, en longitud, exactament la circumferència de la base (2πr), ja que abans d'estirar-lo el con era la vora d'aquella base. Un sector de cercle de radi L amb arc de longitud 2πr té àrea (1/2)×L×(2πr) = πrL — la mateixa fórmula \"base × alçada / 2\" que fas servir per a qualsevol sector.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb r=3, L=8: l'angle del sector és 2π(3)/8 = 3π/4 (135°). Àrea lateral = πrL = π×3×8 = 24π ≈ 75,4. Comprova-ho també amb la fórmula del sector: (1/2)×8²×(3π/4) = (1/2)×64×2,356=75,4 ✓.",
      "en": null
    },
    "iDespres": {
      "ca": "A diferència del cilindre, aquí l'\"amplada\" de la superfície desenrotllada no és constant — és un arc, no un segment recte. Aquesta diferència és exactament el que fa que el con, a diferència del cilindre, no es pugui \"desenrotllar\" en un rectangle.",
      "en": null
    }
  },
  "q52": {
    "moviment": "un-altre-pla",
    "movimentTitol": {
      "ca": "tria un altre pla",
      "en": null
    },
    "lot": 3,
    "pistes": [
      {
        "nivell": 0,
        "titol": null,
        "text": {
          "ca": "No qualsevol pla de tall serveix — n'hi ha un que funciona per raons de simetria. Pensa en la diagonal principal del cub (la que va d'un vèrtex al vèrtex oposat, travessant l'interior): quina mena de simetria té el cub al voltant d'aquesta diagonal?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": null,
        "text": {
          "ca": "El cub té simetria de rotació de 120° al voltant de qualsevol diagonal principal (gira'l i es veu igual, tres cops per volta). Un pla tallat perpendicularment a aquesta diagonal, pel centre del cub, hereta aquesta mateixa simetria de 120°. Quina figura, si té simetria de 120° i toca cada cara del cub un cop, pot sortir-ne?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-028.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El pla talla exactament sis arestes del cub (les sis que no toquen cap dels dos vèrtexs de la diagonal triada), pel seu punt mitjà. Amb coordenades (cub de costat 1, diagonal de (0,0,0) a (1,1,1)): comprova que els sis punts mitjans són tots a la mateixa distància del centre del cub, i que la distància entre dos punts mitjans consecutius és la mateixa arreu.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Punts mitjans com (1, 0.5, 0) i (0.5, 1, 0): distància √((0.5)²+(0.5)²+0²)=√0,5≈0,707. Fes-ho amb un altre parell consecutiu, per exemple (0.5,1,0) i (0,1,0.5): √(0,25+0+0,25)=√0,5≈0,707 — igual.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest mateix pla (perpendicular a una diagonal principal, pel centre) és el que fa servir q56, en aquest mateix lot, per trobar el tetràedre inscrit al cub. El dibuix, però, es mira des d'un angle diferent del de q56: exactament al llarg de la diagonal principal, perquè és l'única direcció des de la qual el pla de tall es veu en veritable magnitud i l'hexàgon surt regular en lloc d'aixafat (rev1, v. docs/guies/REVISIONS.md). Si tornes a la figura de q56 hi reconeixeràs el mateix cub dibuixat amb la projecció habitual d'aquest quadern: la direcció de mirada és part del contingut de cada figura, no un simple estil.",
      "en": null
    }
  },
  "q53": {
    "moviment": "contraexemple",
    "movimentTitol": {
      "ca": "per refutar en basta un contraexemple",
      "en": null
    },
    "lot": 3,
    "pistes": [
      {
        "nivell": 0,
        "titol": null,
        "text": {
          "ca": "No cal cap objecte estrany. Compara un cilindre recte amb un cilindre \"inclinat\" (com una pila de monedes que s'ha desplaçat de costat sense girar cap moneda) — mateixa base, mateixa alçada.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": null,
        "text": {
          "ca": "A cada alçada, el tall horitzontal dels dos cilindres és un cercle idèntic (mateix radi) — per Cavalieri, doncs, tenen el mateix volum. Però un és \"recte\" i l'altre \"s'inclina\": mira la superfície lateral de cadascun. Quina creus que serà més gran, i per què?",
          "en": null
        },
        "figura": "fig-194.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-031.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El cilindre inclinat té una superfície lateral estrictament més gran que el recte, encara que el volum sigui idèntic — cada \"franja\" vertical de la superfície s'allarga en inclinar-se, de la mateixa manera que la hipotenusa d'un triangle rectangle és més llarga que el catet.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb un cilindre recte de radi 2, alçada 10: superfície lateral 2π(2)(10)=40π≈125,7. Si l'inclines de manera que cada \"franja\" s'allargui per un factor 1,2 (un pendent moderat), la superfície lateral inclinada surt ≈150,8 — més gran, mentre que el volum (àrea de la base × alçada vertical) es manté exactament igual als dos.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest exemple és el bessó en 3D del que trobaràs a q55 (en aquest mateix lot): igual que aquí el volum no \"sent\" la inclinació però la superfície sí, allà l'àrea no sentirà els esglaons però el perímetre sí.",
      "en": null
    }
  },
  "q54": {
    "moviment": "invariant",
    "movimentTitol": {
      "ca": "nou: invariant",
      "en": null
    },
    "lot": 3,
    "pistes": [
      {
        "nivell": 0,
        "titol": null,
        "text": {
          "ca": "Pensa en un rectangle. Ara imagina que n'agafes la part de dalt i la desplaces cap al costat, mantenint l'alçada, fins que el rectangle es converteix en un paral·lelogram inclinat. Ha canviat l'àrea?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": null,
        "text": {
          "ca": "A cada alçada, quina longitud té el tall horitzontal del paral·lelogram? Compara-la amb la longitud del tall del rectangle a la mateixa alçada.",
          "en": null
        },
        "figura": "fig-195.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-032.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "A qualsevol alçada, el tall horitzontal del paral·lelogram té exactament la mateixa longitud que la base — igual que el rectangle. Si dues figures tenen el mateix tall a cada alçada, l'àrea (que no és res més que la \"suma\" de tots els talls, un per cada alçada) ha de ser la mateixa. Aquest és el principi de Cavalieri per a àrees.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Rectangle de base 6, alçada 4: àrea 24. Paral·lelogram amb la mateixa base i alçada, inclinat 3 unitats: l'àrea (base × alçada, independentment de la inclinació) segueix sent 24. Comprova-ho també descomponent el paral·lelogram en el rectangle més un triangle a un costat menys el mateix triangle a l'altre.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest mateix principi, aplicat a volums en lloc d'àrees (tallant amb plans en lloc de rectes), és el que permetrà comparar volums de sòlids que semblen molt diferents — i és exactament la idea que fa servir q53, en aquest mateix lot, per al cas contrari (quan NO es conserva alguna cosa).",
      "en": null
    }
  },
  "q55": {
    "moviment": "cas-limit",
    "movimentTitol": {
      "ca": "nou: cas-limit",
      "en": null
    },
    "lot": 3,
    "pistes": [
      {
        "nivell": 0,
        "titol": null,
        "text": {
          "ca": "Fixa't en l'escala de q54 (o al llibre): a mesura que fas els esglaons més petits i més nombrosos, l'escala s'assembla més i més a la diagonal, a ull. Això vol dir que la seva longitud s'acosta a la longitud de la diagonal?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": null,
        "text": {
          "ca": "Suma tots els trams horitzontals de l'escala (sense els verticals): quant val la suma, sigui quin sigui el nombre de graons? Fes el mateix amb els verticals. Ara suma-ho tot: aquesta és la longitud total del camí en escala.",
          "en": null
        },
        "figura": "fig-196.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-033.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Els trams horitzontals sempre sumen exactament el costat del quadrat (s), sigui quin sigui el nombre de graons — es limiten a repartir el mateix recorregut total en trossos més petits. El mateix passa amb els verticals. La longitud de l'escala és, doncs, sempre 2s, independentment de com de fins siguin els graons — mentre que la diagonal fa s√2 < 2s. Per fins que siguin els graons, la longitud del camí mai no s'acosta a la diagonal: es queda sempre igual.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb s=10: diagonal = 10√2≈14,14. Escala amb qualsevol nombre de graons: longitud sempre 20 — amb 2 graons, amb 20 graons, amb 2000 graons. La diferència (20−14,14≈5,86) no es redueix mai, per molt que l'escala s'assembli visualment a la diagonal.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest és exactament el motiu pel qual el mètode d'exhaustió, que sí que funciona per a àrees (q54) i per a volums, no es pot aplicar ingènuament a longituds — cal un argument diferent (i molt més delicat) per mesurar corbes com a límits de poligonals, que és per això que mesurar la longitud d'una circumferència com a límit de polígons inscrits requereix més cura que mesurar-ne l'àrea.",
      "en": null
    }
  },
  "q56": {
    "moviment": "un-altre-pla",
    "movimentTitol": {
      "ca": "tria un altre pla",
      "en": null
    },
    "lot": 3,
    "pistes": [
      {
        "nivell": 0,
        "titol": null,
        "text": {
          "ca": "\"Diagonals\" aquí vol dir diagonals de cara (no la diagonal principal de q47/q52). Tria quatre dels vuit vèrtexs del cub de manera que cap parella triada sigui una aresta del cub — només diagonals.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": null,
        "text": {
          "ca": "Amb el cub de costat 1 i vèrtexs a {0,1}³, tria (0,0,0), (1,1,0), (1,0,1), (0,1,1). Comprova que cada parella d'aquests quatre punts està a distància √2 (una diagonal de cara) — si ho és per a totes sis parelles, tens un tetràedre regular.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-029.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El volum del tetràedre es pot calcular amb el producte mixt: (1/6)|det[B−A, C−A, D−A]|. Calcula'l amb les coordenades de la Pista 1 i compara amb el volum del cub (que és 1, amb costat 1).",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb A=(0,0,0), B=(1,1,0), C=(1,0,1), D=(0,1,1): det[(1,1,0),(1,0,1),(0,1,1)] = 1(0−1)−1(1−0)+0(1−0) = −1−1+0=−2. Volum = 2/6 = 1/3. El tetràedre ocupa exactament un terç del cub.",
      "en": null
    },
    "iDespres": {
      "ca": "El cub sencer es pot partir en aquest tetràedre més quatre petits tetràedres iguals, un a cada vèrtex retallat — comprova que 4×(volum d'un d'aquests) + 1/3 = 1 (el cub sencer).",
      "en": null
    }
  },
  "q57": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 7,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "No cal que en trobis els cinc: n'hi ha prou que en resolguis un (o dos) de manera que el mètode sigui evidentment el mateix per als altres tres.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "parteix-lo en peces que ja saps mesurar",
          "en": null
        },
        "text": {
          "ca": "Uneix el centre del sòlid amb cadascun dels seus vèrtexs (o, més fàcil de mesurar, amb el centre de cadascuna de les seves cares). Quantes peces n'obtens, per a un tetraedre? I per a un octaedre?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "El tetraedre i l'octaedre, cadascun partit en piràmides des del seu centre —el mateix nombre de piràmides que de cares.",
          "en": null
        },
        "figura": "fig-076.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Cada peça és una piràmide amb base una cara del sòlid i alçada l'apotema del sòlid (la distància del centre a una cara). El volum total és (nombre de cares) × (1/3) × (àrea d'una cara) × (apotema) — que es pot reescriure com (1/3) × (àrea total de la superfície) × (apotema).",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Tetraedre d'aresta 1: apotema ≈ 0,204, àrea total ≈ 1,732 (4 cares equilàters). Volum ≈ (1/3)(1,732)(0,204) ≈ 0,118 — coincideix amb la fórmula coneguda s³/(6√2).",
      "en": null
    },
    "iDespres": {
      "ca": "La fórmula \"(1/3) × superfície × apotema\" no fa servir enlloc que el sòlid sigui un dels cinc platònics: val per a QUALSEVOL poliedre que tingui un punt equidistant de totes les cares — la mateixa generalització que ja vas veure amb l'àrea d'un polígon regular (triangulació des del centre, q39).",
      "en": null
    }
  },
  "q58": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 7,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una descripció de la forma (no és cap sòlid que ja tinguis nom per a ell) i el seu volum, en termes del radi r comú als dos cilindres.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "talla-ho amb un pla, com a Cavalieri",
          "en": null
        },
        "text": {
          "ca": "Talla la intersecció amb un pla horitzontal, a una alçada y qualsevol per sobre del centre. Aquest pla talla CADA cilindre en una franja rectangular d'amplada 2√(r²−y²) (el mateix Pitàgores que ja fas servir per a la corda d'un cercle). La intersecció dels dos cilindres, en aquest pla, és on totes dues franges es superposen.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-077.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "A cada alçada y, la secció de la intersecció NO és un cercle: és un QUADRAT de costat 2√(r²−y²) (perquè les dues franges, perpendiculars entre si, es tallen en un quadrat). Compara aquesta pila de quadrats amb la pila de cercles d'un sol cilindre (Cavalieri, com a q54/q55): quina relació hi ha entre l'àrea d'un quadrat de costat 2s i la d'un cercle de radi s?",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "r=1: volum = (16/3)r³ ≈ 5,33. Compara amb el volum d'un sol cilindre de radi 1 i alçada 2: 2π ≈ 6,28 — la intersecció és menor, com cal esperar.",
      "en": null
    },
    "iDespres": {
      "ca": "Per a tres cilindres mútuament perpendiculars, la intersecció ja no es pot tallar amb un sol Cavalieri net com aquest — el volum (una fracció coneguda però més subtil del cub que els conté) queda com a pregunta oberta per a qui vulgui anar-hi més enllà d'aquest quadern.",
      "en": null
    }
  },
  "q59": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 7,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una fracció (o un percentatge), no dues xifres soltes. I una resposta de sí/no a la segona part, justificada per la fracció que trobis.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "quina mida té el cub, si l'esfera hi és inscrita",
          "en": null
        },
        "text": {
          "ca": "L'esfera toca les sis cares del cub. Si el radi de l'esfera és r, quant fa el costat del cub?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-071.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Escriu el volum de l'esfera (4/3)πr³ i el volum del cub en termes del mateix r. Simplifica la fracció — hi sobreviu π, i res més.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "r=1: cub de costat 2, volum 8. Esfera: (4/3)π ≈ 4,19. Fracció ≈ 0,524 — més de la meitat (π/6 > 1/2 perquè π > 3).",
      "en": null
    },
    "iDespres": {
      "ca": "π/6 és exactament la mateixa fracció que apareix a q61 (superfície de l'esfera enfront del seu cilindre circumscrit) — no és casualitat: totes dues comparen l'esfera amb el sòlid més senzill que la conté ajustada.",
      "en": null
    }
  },
  "q60": {
    "moviment": "invariant",
    "movimentTitol": {
      "ca": "invariant — Cavalieri amb un sòlid complementari (reaplica q54/q55 del lot 3)",
      "en": null
    },
    "lot": 4,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "no calculis els dos volums per separat encara",
          "en": null
        },
        "text": {
          "ca": "Si ja saps les fórmules del volum del con i de l'esfera, podries fer-ho per càlcul directe —però l'objectiu d'aquesta guia és que ho vegis també per comparació directa de seccions, que és el mateix moviment que vas fer servir a q54 i q55 per comparar volums sense fórmules.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "mira el sòlid que \"falta\"",
          "en": null
        },
        "text": {
          "ca": "Dins del cilindre que envolta la semiesfera (mateix radi, mateixa alçada), hi ha dos sòlids: la semiesfera mateixa, i —si hi retalles també un con invertit amb el vèrtex al centre de la base i la base dalt de tot— el sòlid que queda entre el cilindre i aquest con. Aquest sòlid \"que queda\" té una propietat notable en relació amb la semiesfera.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Aquest dibuix mostra el con inscrit de l'enunciat (vèrtex a dalt, base a baix, tocant la semiesfera) — no el con invertit complementari de la pista 1. Són dos objectes relacionats però diferents: aquest dibuix és el punt de partida de l'enunciat, la pista 1 et proposa un sòlid auxiliar per comparar-hi. El pla horitzontal marcat en sanguina, a una alçada h qualsevol, és l'eina de comparació: talla el con en dos punts (marcats), i és exactament aquest mateix pla —a la mateixa alçada— el que hauries de comparar amb la secció de la semiesfera per completar l'argument de la pista 1.",
          "en": null
        },
        "figura": "fig-050.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "A qualsevol alçada h des de la base, la secció horitzontal del sòlid \"cilindre menys con invertit\" té exactament la mateixa àrea que la secció de la semiesfera a la mateixa alçada (aquest és el pas de Cavalieri: dues seccions iguals a totes les alçades ⟹ mateix volum). Com que coneixes el volum del cilindre i el del con invertit per separat, en pots deduir el de la semiesfera —i per tant comparar-lo amb el con inscrit de l'enunciat, que és exactament la meitat del con invertit (mateixa base, mateixa alçada, mateix vèrtex a un extrem).",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb radi R=3: volum de la semiesfera = (2/3)πR³ = 18π. Volum del con inscrit (radi 3, alçada 3) = (1/3)πR²h = 9π. La raó con/semi- esfera és 9π/18π = 1/2 exactament —ni més ni menys que la meitat, per a qualsevol R.",
      "en": null
    },
    "iDespres": {
      "ca": "Que la resposta surti exactament 1/2, sense arrodoniments ni aproximacions, no és casualitat: és el mateix tipus de relació neta entre volums que vas trobar a q54/q55 amb el con i la piràmide, i reapareix cada vegada que dos sòlids comparteixen la mateixa \"funció d'àrea de secció\" a una constant de proporcionalitat de distància.",
      "en": null
    }
  },
  "q61": {
    "moviment": "dues-maneres",
    "movimentTitol": {
      "ca": "dues maneres",
      "en": null
    },
    "lot": 7,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "\"El seu cilindre\" vol dir: el cilindre que envolta l'esfera exactament —mateix radi, alçada igual al diàmetre— tancat amb les seves dues tapes circulars, no obert.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "calcula les dues superfícies per separat",
          "en": null
        },
        "text": {
          "ca": "Superfície de l'esfera: 4πr². Superfície del cilindre tancat: la part lateral (2πr, el perímetre, per 2r, l'alçada) més les dues tapes circulars (πr² cadascuna).",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-078.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Suma les tres peces del cilindre (lateral + dues tapes) en un sol terme, i compara-la directament amb 4πr².",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "r=1: esfera=4π≈12,57. Cilindre: lateral=4π, tapes=2π, total=6π≈18,85. Ratio: 4π/6π=2/3 exacte.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest mateix 2/3 —comparant l'esfera amb el sòlid més senzill que la conté ajustada— és exactament el complementari de la fracció que vas trobar a q59 (π/6, esfera dins d'un cub): totes dues comparacions diuen, de maneres diferents, \"l'esfera n'ocupa menys que el sòlid recte que la conté\".",
      "en": null
    }
  },
  "q62": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 7,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Dues fórmules, en termes del radi de l'esfera R i de l'alçada del casquet h (h és la distància des del \"cim\" del casquet fins al pla de tall — no confonguis h amb R: quan h=R, el casquet és exactament la semiesfera que ja vas mesurar a q60).",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "comença pel cas que ja saps",
          "en": null
        },
        "text": {
          "ca": "Quan h=R, el casquet ÉS la semiesfera. A q60 vas trobar-ne el volum comparant-la (per Cavalieri) amb un cilindre menys un con. Aquesta mateixa comparació, feta a QUALSEVOL alçada de tall —no només a l'equador— és la clau per al cas general.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "El mateix pla de tall horitzontal de fig-050 (q60), ara aplicat a un casquet de qualsevol alçada h, no només a la semiesfera sencera.",
          "en": null
        },
        "figura": "fig-072.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "A cada alçada dins del casquet, la secció del casquet (un cercle) i la secció del cilindre-menys-con auxiliar tenen la mateixa àrea — exactament el mateix argument de q60, aplicat entre 0 i h en lloc d'entre 0 i R. Integra (suma) aquestes àrees iguals fins a h, no fins a R.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "R=2, h=1: V=(πh²/3)(3R−h)=(π/3)(6−1)=5π/3≈5,24. Comprova que quan h=R=2 recuperes el volum de la semiesfera de q60 (2/3)πR³=16π/3≈16,76. Superfície corba (sense la base): 2πRh=4π≈12,57.",
      "en": null
    },
    "iDespres": {
      "ca": "Quan h=2R (el casquet és l'esfera sencera), la fórmula del volum es converteix en (4/3)πR³ — la fórmula habitual de l'esfera, com a cas particular d'aquesta de més amunt.",
      "en": null
    }
  },
  "q63": {
    "moviment": "distingeix-casos",
    "movimentTitol": {
      "ca": "distingeix els casos",
      "en": null
    },
    "lot": 7,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Dues descripcions del cilindre com \"una forma plana que s'ha mogut\", genuïnament diferents — no la mateixa idea dita amb altres paraules.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "pensa en QUÈ es mou i QUIN moviment fa",
          "en": null
        },
        "text": {
          "ca": "Una manera: quina forma plana, desplaçada en línia recta, deixa un cilindre al seu pas? Una altra manera, molt diferent: quina forma plana, girada al voltant d'un eix, en traça la superfície?",
          "en": null
        },
        "figura": "fig-197.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-073.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "La primera manera (translació d'un cercle) no fa servir cap eix ni cap gir. La segona (rotació d'un rectangle al voltant d'un dels seus costats) sí. Comprova que totes dues arriben al mateix sòlid final.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "No numèrica: descriu, per a cadascuna de les dues maneres, quina és la forma plana que es mou i quin és exactament el moviment (direcció de translació, o eix de rotació).",
      "en": null
    },
    "iDespres": {
      "ca": "La segona manera (rotació d'una forma plana al voltant d'un eix) és exactament la idea que fa funcionar el teorema de Pappus — q65, més endavant en aquest mateix lot, la converteix en una eina general per calcular volums.",
      "en": null
    }
  },
  "q64": {
    "moviment": "cas-limit",
    "movimentTitol": {
      "ca": "cas límit",
      "en": null
    },
    "lot": 7,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "El perímetre de la regió que el bastó, en totes les seves posicions (des de vertical fins a horitzontal), acaba cobrint en algun moment.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "dibuixa unes quantes posicions, no totes",
          "en": null
        },
        "text": {
          "ca": "Marca la posició del bastó per a 8 o 10 angles diferents, des de vertical fins a horitzontal. Els dos extrems de cada posició estan sempre sobre la paret i el terra. Mira la vora de la regió que totes elles, juntes, deixen coberta.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-079.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "La vora de la regió té tres trossos: el tram de paret des de la cantonada fins on arriba el bastó vertical (llargada L), el tram de terra simètric (llargada L), i una corba —no una línia recta ni un arc de cercle— tangent a totes les posicions que has dibuixat: la seva envolupant. Aquesta corba es diu astroide. La seva llargada exacta (un quart d'astroide) resulta ser 1,5×L —un fet que es demostra amb eines de fora d'aquest quadern (càlcul infinitesimal); aquí la guia arriba fins a RECONÈIXER i CONSTRUIR l'envolupant, no fins a demostrar-ne la llargada.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "L=2: perímetre = L + L + 1,5L = 3,5L = 7. Comprova-ho mesurant, sobre el teu propi dibuix de fig-079, la llargada aproximada de la corba i sumant-hi els dos trams rectes.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta mateixa família de posicions —un segment que llisca mantenint els extrems sobre dues rectes fixes— reapareix a la geometria projectiva amb un altre nom i un altre objectiu; aquí en n'hi ha prou amb haver reconegut que \"la vora d'una regió escombrada\" no sempre és una línia recta ni un arc de cercle.",
      "en": null
    }
  },
  "q65": {
    "moviment": "construeix-per-definir",
    "movimentTitol": {
      "ca": "construeix la solució a partir de la seva pròpia definició",
      "en": null
    },
    "lot": 7,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "No un número: una DEFINICIÓ. \"El teorema de Pappus\" diu que el volum generat en girar una figura plana al voltant d'un eix (que no la talla) és (àrea de la figura) × (distància recorreguda pel seu centroide). El teu encàrrec és decidir QUÈ ha de ser \"el centroide\" perquè aquesta frase, tal com està escrita, surti certa.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "comença pel cas més fàcil de comprovar",
          "en": null
        },
        "text": {
          "ca": "Un rectangle, girat al voltant d'un dels seus costats, genera un cilindre —el volum del qual ja saps calcular per una altra via. Quin punt del rectangle, multiplicat per 2π i per la seva distància a l'eix, reprodueix exactament aquest volum?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-080.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Per al rectangle, el punt que fa funcionar el teorema resulta ser el punt mitjà del costat oposat a l'eix —el centre de gravetat \"de tota la vida\" del rectangle. Defineix el centroide, en general, com el punt de la figura la distància del qual a l'eix, multiplicada per l'àrea i per 2π, reprodueix el volum de la figura girada, sigui quina sigui la figura.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Rectangle de costats 2 i 3, girat al voltant del costat de llargada 3 (a distància 2 del centre): volum = àrea(6) × 2π × distància(2) = 24π. Compara amb el volum directe del cilindre que en resulta (radi 2, alçada 3): π(2²)(3)=12π... si no coincideixen, revisa quina distància hi has posat (la de l'EIX al CENTRE, no al costat oposat).",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta definició (el punt que fa que Pappus funcioni) és el que fa possible q66, q67 i q68, tots en aquest mateix lot: un cop decidida la definició, es converteix en una eina que es pot aplicar a qualsevol figura, no només al rectangle.",
      "en": null
    }
  },
  "q66": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 7,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una comprovació, no una definició nova: que la fórmula de Pappus (àrea × 2π × distància del centroide) i la fórmula habitual del volum d'un cilindre donen EXACTAMENT el mateix nombre.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "situa el rectangle respecte de l'eix",
          "en": null
        },
        "text": {
          "ca": "Rectangle d'amplada w (perpendicular a l'eix) i alçada H (paral·lela a l'eix), amb el costat més proper a l'eix a distància d. El seu centroide —pel que vas definir a q65— és al seu propi centre geomètric.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-082.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Calcula el volum amb Pappus (àrea del rectangle × 2π × distància del centre a l'eix) i, per separat, com la resta de dos cilindres (el radi d+w menys el radi d, mateixa alçada H). Haurien de coincidir per a qualsevol w, H, d.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "w=1, H=3, d=2 (centre a distància 2,5 de l'eix): Pappus = 1×3 × 2π × 2,5 = 15π. Per resta de cilindres: π(3²)(3)−π(2²)(3) = 27π−12π=15π. Coincideixen.",
      "en": null
    },
    "iDespres": {
      "ca": "El mateix càlcul, aplicat a un rectangle que TOCA l'eix (d=0, un dels costats sobre l'eix mateix) es converteix en el cas particular que ja coneixies (un cilindre senzill, sense forat) —Pappus no distingeix aquest cas com a especial, la fórmula simplement hi funciona igual.",
      "en": null
    }
  },
  "q67": {
    "moviment": "construeix-per-definir",
    "movimentTitol": {
      "ca": "construeix la solució a partir de la seva pròpia definició",
      "en": null
    },
    "lot": 7,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una segona definició de \"centroide\" —no la de q65 (la d'una regió plana, que fa funcionar Pappus per a VOLUMS), sinó la del contorn (una corba, o una línia trencada), pensada perquè Pappus funcioni per a SUPERFÍCIES generades en girar.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "el mateix truc, amb una peça diferent",
          "en": null
        },
        "text": {
          "ca": "A q65 vas repartir l'àrea en trossos petits i vas trobar el punt que \"resumeix\" on és, de mitjana, tota aquesta àrea. Aquí, en lloc de trossos d'àrea, reparteix el PERÍMETRE en trossets petits de longitud.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-081.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El centroide del perímetre és el punt la distància del qual a l'eix, multiplicada per 2π i per la LLARGADA TOTAL del perímetre (no per l'àrea), reprodueix la superfície (no el volum) generada en girar la figura.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Un segment de llargada 3, girat a distància 2 del seu punt mitjà: superfície = perímetre(3) × 2π × distància(2) = 12π — compara-ho amb la superfície lateral d'un cilindre de radi 2 i alçada 3: 2π(2)(3)=12π. Coincideixen.",
      "en": null
    },
    "iDespres": {
      "ca": "q68, la darrera guia d'aquest lot, fa servir aquesta mateixa idea —però pensada al revés: coneixes ja el volum del sòlid generat, i el que et falta és ON és exactament el centroide.",
      "en": null
    }
  },
  "q68": {
    "moviment": "dues-maneres",
    "movimentTitol": {
      "ca": "dues maneres",
      "en": null
    },
    "lot": 7,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "No el volum del con (ja el coneixes: (1/3)πr²h) — la DISTÀNCIA del centroide del triangle a l'eix de gir, que és el catet vertical del triangle rectangle.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "planteja l'equació amb Pappus, amb la distància com a incògnita",
          "en": null
        },
        "text": {
          "ca": "El triangle rectangle té catets r (horitzontal, perpendicular a l'eix) i h (vertical, sobre l'eix). La seva àrea és (1/2)rh. Pappus diu: volum = àrea × 2π × distància del centroide a l'eix. Ja coneixes el volum (el con). Què queda per aïllar?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-083.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Iguala (1/2)rh × 2π × d amb (1/3)πr²h, i aïlla d. El resultat et diu a quina fracció de r (el catet horitzontal) ha d'estar el centroide, independentment de h.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "r=3, h=4: volum del con=(1/3)π(9)(4)=12π. Àrea del triangle=(1/2)(3)(4)=6. Pappus: 12π=6×2π×d → d=1. Fracció: d/r=1/3 — el centroide d'un triangle rectangle és sempre a un terç de la distància horitzontal des de l'eix, sigui quin sigui h.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest 1/3 no és una coincidència del triangle rectangle: és el mateix fet, general per a qualsevol triangle, que el centroide (la mitjana dels tres vèrtexs) es troba a un terç de cada mediana comptant des del costat corresponent — el mateix punt que ja vas fer servir, sense dir-ne el nom, en qualsevol pregunta d'aquest llibre que parli del \"centre de gravetat\" d'un triangle.",
      "en": null
    }
  },
  "q69": {
    "moviment": "dues-maneres",
    "movimentTitol": {
      "ca": "dues maneres",
      "en": null
    },
    "lot": 8,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "DUES distàncies diferents (no una): la del centroide de la regió semicircular (l'àrea) i la del centroide del seu arc (el perímetre, sense comptar el diàmetre) — cadascuna respecte del centre del cercle, sobre el diàmetre.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "gira-ho, com a q68",
          "en": null
        },
        "text": {
          "ca": "Si gires el semicercle (la regió) al voltant del seu diàmetre, quin sòlid en surt? I si gires només l'arc (sense la regió)?",
          "en": null
        },
        "figura": "fig-198.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-085.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Girar la REGIÓ dona una esfera sencera (volum conegut). Girar l'ARC dona la SUPERFÍCIE d'aquesta mateixa esfera (àrea coneguda). Aplica Pappus a l'inrevés, com a q68: iguala el volum (o la superfície) coneguts amb (àrea, o longitud) × 2π × distància, i aïlla la distància — dues vegades, un cop per a cada centroide.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "r=3: centroide de l'àrea a distància 4r/(3π)≈1,27 del centre. Centroide del perímetre a distància 2r/π≈1,91. Fixa't que són DIFERENTS — exactament el que q67 ja avisava que calia esperar.",
      "en": null
    },
    "iDespres": {
      "ca": "Que aquestes dues distàncies surtin diferents confirma, amb un exemple concret, per què calia la doble definició de q65 i q67: \"el centroide\" no és una sola idea, són dues, i aquí ho pots veure amb xifres.",
      "en": null
    }
  },
  "q70": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 4,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què és \"conegut\" aquí",
          "en": null
        },
        "text": {
          "ca": "L'únic polígon del qual ja saps la suma d'angles amb certesa és el triangle: 180°. Tota aquesta demostració consisteix a convertir un polígon de n costats en un cert nombre de triangles, sense deixar-ne cap forat ni superposar-ne cap.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "un cas petit primer",
          "en": null
        },
        "text": {
          "ca": "Un quadrilàter (n=4): traça'n una diagonal. Queda partit en dos triangles. Suma: 2 × 180° = 360°. Ara fes el mateix amb un pentàgon (n=5) triant totes les diagonals des d'un sol vèrtex. Quants triangles surten?",
          "en": null
        },
        "figura": "fig-199.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Fixa't que el polígon del dibuix no és regular. És a posta: l'argument no pot dependre de cap simetria, ha de valer per a qualsevol polígon simple.",
          "en": null
        },
        "figura": "fig-036.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Des d'un vèrtex d'un polígon de n costats, quantes diagonals hi caben (sense comptar els dos costats que ja hi surten)? Cada diagonal afegeix un triangle més als dos que ja fan els costats adjacents al vèrtex. Compta els triangles en funció de n i multiplica per 180°.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Un hexàgon (n=6): hauries d'obtenir 4 triangles i, per tant, 720°. Un polígon de 10 costats: 8 triangles, 1440°. La fórmula general hauria de donar (n−2) × 180°.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest mateix moviment —triangular des d'un sol vèrtex— és exactament el que reutilitzaràs a q29 per calcular diagonals concretes d'un hexàgon i un octàgon, i a q06 per mirar els angles que es formen en aquest ventall de triangles, no només comptar-los.",
      "en": null
    }
  },
  "q71": {
    "moviment": "dues-maneres",
    "movimentTitol": {
      "ca": "dues maneres de mirar la mateixa figura (recíproc de q11/q12)",
      "en": null
    },
    "lot": 4,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què saps del quadrilàter i què no",
          "en": null
        },
        "text": {
          "ca": "No saps, d'entrada, que els costats oposats siguin paral·lels ni iguals — només saps que els quatre angles interiors fan 90° cadascun. Has d'esbrinar quina condició sobre els costats es dedueix necessàriament d'aquesta única dada sobre els angles.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "parteix-lo amb una diagonal, com a q11",
          "en": null
        },
        "text": {
          "ca": "Traça una diagonal. Els dos triangles resultants no comparteixen encara cap informació evident sobre costats —però sí que pots fer servir que la suma d'angles de cada triangle és 180°, combinat amb els angles rectes donats als dos vèrtexs originals de cada triangle, per trobar els altres dos angles de cadascun.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Els quatre angles rectes hi són tots marcats des del principi —no com una cosa a demostrar, sinó com la dada de partida des d'on has de treballar cap enrere.",
          "en": null
        },
        "figura": "fig-053.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Amb els quatre angles fixats a 90°, els dos costats que arriben a cada vèrtex hi arriben perpendiculars. D'aquí es dedueix que costats oposats han de ser paral·lels (dues rectes perpendiculars a una tercera són paral·leles entre elles), i un cop tens el paral·lelisme, ets en la mateixa situació que q11: és un paral·lelogram, i per tant costats oposats iguals. La condició final sobre les longituds és, doncs, costats oposats iguals dos a dos —el mateix que ja sabies d'un rectangle, però ara deduït només a partir dels angles, sense donar per fet el paral·lelisme des del principi.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Si construeixes un quadrilàter amb els quatre angles a 90° i tries lliurement dos costats consecutius (per exemple 5 i 8), els altres dos costats no els pots triar lliurement: han de sortir també 5 i 8 (el costat oposat a cadascun). Prova de forçar-ne un de diferent (per exemple 5, 8, 5, 9) i comprova que és impossible tancar la figura amb els quatre angles rectes.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest recíproc de q11/q12 tanca el cercle d'aquest bloc de quadrilàters: q11 partia d'un paral·lelogram i en deduïa els angles; q12 partia d'un paral·lelogram amb diagonals iguals i en deduïa que era un rectangle; q71 parteix només dels angles rectes i en dedueix el paral·lelisme i la igualtat de costats. Tres direccions diferents del mateix feix d'implicacions entre angles, costats i diagonals d'un quadrilàter.",
      "en": null
    }
  },
  "q72": {
    "moviment": "dues-maneres",
    "movimentTitol": {
      "ca": "dues maneres",
      "en": null
    },
    "lot": 8,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "No un polígon concret: la LLISTA dels problemes que caldria resoldre, en general, per saber si una successió de \"avança tant, gira tant\" torna mai al punt de partida.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "descompon cada tram en dues direccions",
          "en": null
        },
        "text": {
          "ca": "Cada tram de la teva llista (una longitud, en una direcció determinada pels girs acumulats fins aquell moment) es pot descompondre en un avanç horitzontal i un de vertical — exactament sinus i cosinus de l'angle acumulat, aplicats a la longitud del tram.",
          "en": null
        },
        "figura": "fig-200.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-094.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El polígon es tanca si, i només si, DUES sumes independents donen zero alhora: la suma de tots els avanços horitzontals, i la suma de tots els avanços verticals. Cada avanç individual és un \"problema de triangle rectangle\" (longitud coneguda, angle conegut, troba els dos catets).",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Tres trams: 3 unitats a 0°, 4 unitats a 90°, 5 unitats a tal angle que tanqui el triangle (recorda el 3-4-5!). Comprova que la suma horitzontal i la vertical donen totes dues zero amb l'angle adequat.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta mateixa descomposició en dues sumes independents (horitzontal i vertical) és el nucli de com es couen coordenades i vectors a partir de la trigonometria — una idea que reapareixerà si mai treballes amb navegació, robòtica, o qualsevol cosa que impliqui sumar moviments en direccions diferents.",
      "en": null
    }
  },
  "q73": {
    "moviment": "informacio-no-usada",
    "movimentTitol": {
      "ca": "quanta informació cal — i què passa quan no n'hi ha prou",
      "en": null
    },
    "lot": 4,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "dues preguntes en una",
          "en": null
        },
        "text": {
          "ca": "Fixa't que en realitat són dues preguntes independents amb, molt probablement, respostes diferents: una pel triangle, una altra pel quadrilàter general. No donis per fet que la resposta és la mateixa.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "comença pel triangle",
          "en": null
        },
        "text": {
          "ca": "Si tens els tres punts mitjans M_AB, M_BC, M_CA, el triangle que formen (el \"triangle medial\") és semblant al triangle original, a escala 1/2 i girat 180°. Si coneixes el triangle medial, coneixes la seva orientació i la seva mida — et falta només \"desfer\" l'escala i el gir. Hi ha una única manera de fer-ho?",
          "en": null
        },
        "figura": "fig-201.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "El triangle en tinta (petit, al mig) és la dada que tens. El triangle en sanguina discontínua (gran, al voltant) és la incògnita que has de recuperar — per això aquí la incògnita és la que va en sanguina, al revés del conveni habitual: normalment dibuixem en tinta el que ja tenim.",
          "en": null
        },
        "figura": "fig-041.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho pel triangle, i pensa el quadrilàter",
          "en": null
        },
        "text": {
          "ca": "Cada vèrtex del triangle original és el simètric d'un vèrtex del triangle medial respecte del punt mitjà del costat oposat del medial — o, dit d'una altra manera, cada costat del triangle original passa pel punt mitjà corresponent i és paral·lel al costat oposat del medial, a doble llargada. Això sí que reconstrueix un únic triangle. Ara pensa un quadrilàter: si et donen els quatre punts mitjans dels seus costats, què saps segur (el polígon que formen aquests quatre punts sempre és un paral·lelogram, sigui quin sigui el quadrilàter de partida) i què no pots recuperar-ne (la posició exacta dels quatre vèrtexs originals no queda determinada de manera única).",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb un triangle medial de costats 3, 4, 5, el triangle original ha de tenir costats 6, 8, 10 — el doble de cadascun, en el mateix ordre.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta distinció —un triangle sí que es reconstrueix de manera única a partir dels punts mitjans, un quadrilàter general no— és un primer tast de per què els triangles són, en geometria sintètica, la unitat mínima que sol fer-se servir per demostrar coses sobre polígons més grans (el mateix esperit que q02, q70 i q29).",
      "en": null
    }
  },
  "q74": {
    "moviment": "cas-limit",
    "movimentTitol": {
      "ca": "cas límit",
      "en": null
    },
    "lot": 8,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una resposta de NO, amb la condició exacta que separa quan sí d'quan no — no n'hi ha prou de dir \"no sempre\".",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "prova-ho amb un cas que falla",
          "en": null
        },
        "text": {
          "ca": "1, 2, 10: intenta dibuixar-lo. Amb un compàs, traça el segment de longitud 10; després, un arc de radi 1 des d'un extrem i un arc de radi 2 des de l'altre. Es toquen els dos arcs?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "El cas 3-4-5 (els arcs es toquen, es forma un triangle) al costat del cas 1-2-10 (els arcs no arriben a tocar-se).",
          "en": null
        },
        "figura": "fig-084.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Els dos arcs es toquen exactament quan la suma dels dos radis és més gran que la distància entre els centres. Quina desigualtat, en termes dels tres costats a, b, c (amb c el més llarg), diu això mateix?",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "3,4,5: 3+4=7>5 ✓, es forma triangle. 2,3,6: 2+3=5<6, no se'n forma cap — comprova-ho intentant-lo dibuixar amb compàs.",
      "en": null
    },
    "iDespres": {
      "ca": "El cas límit exacte (a+b=c) és un triangle \"aixafat\": els tres vèrtexs alineats, àrea zero. Aquesta mateixa idea de cas límit —una figura que es degenera en una de més senzilla just a la frontera— reapareix a q90, quan un quadrilàter cíclic es \"aixafa\" en un triangle.",
      "en": null
    }
  },
  "q75": {
    "moviment": "contraexemple",
    "movimentTitol": {
      "ca": "contraexemple",
      "en": null
    },
    "lot": 8,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Dos triangles NO congruents (costats diferents) amb exactament la mateixa àrea i el mateix perímetre. Que existeixin ja demostra alguna cosa: a diferència del criteri costat-costat-costat, \"àrea i perímetre iguals\" NO determina un triangle únic.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "converteix-ho en un problema de números",
          "en": null
        },
        "text": {
          "ca": "Amb semiperímetre s fix, la fórmula de Heron diu que l'àrea només depèn del producte (s−a)(s−b)(s−c). Si anomenes x=s−a, y=s−b, z=s−c, el problema es converteix en: troba dues ternes diferents (x,y,z) amb la MATEIXA suma i el MATEIX producte.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-089.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Amb s=35: la terna (18,10,7) dona els costats (17,25,28). Busca una altra terna de tres nombres positius que sumin 35 i multiplicats donin el mateix producte que 18×10×7.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "(17,25,28): perímetre 70, àrea (Heron) = √(35·18·10·7) = √44100 = 210. (20,21,29): perímetre 70 també, àrea = √(35·15·14·6) = √44100 = 210 també. Dos triangles genuïnament diferents, mateixa àrea i perímetre.",
      "en": null
    },
    "iDespres": {
      "ca": "Contrasta-ho amb el criteri SSS (tres costats determinen un triangle de manera única): aquí has vist que DOS números (àrea i perímetre junts) no basten per fer el mateix — calen tres dades independents, no dues, per fixar un triangle.",
      "en": null
    }
  },
  "q76": {
    "moviment": "separa-i-reorienta",
    "movimentTitol": {
      "ca": "separa i reorienta — parteix la figura en peces que ja saps mesurar",
      "en": null
    },
    "lot": 4,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "el cercle no és la peça útil, el centre sí",
          "en": null
        },
        "text": {
          "ca": "Oblida't del cercle un moment. La peça de la construcció que fa tota la feina no és la circumferència: és el punt del seu centre, i el fet que aquest punt és a la mateixa distància (el radi r) de cadascun dels tres costats.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "uneix el centre amb els tres vèrtexs",
          "en": null
        },
        "text": {
          "ca": "Si uneixes el centre del cercle inscrit amb els tres vèrtexs del triangle, el triangle gran queda partit en tres triangles més petits. Què tenen en comú, com a mesura, aquests tres triangles petits, encara que tinguin bases diferents (a, b i c)?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Els tres segments discontinus curts (els radis cap a cada costat) tenen tots la mateixa marca — i, a diferència d'altres figures d'aquest lot, aquí sí és literalment cert que els tres fan la mateixa longitud, perquè tots tres són el radi del mateix cercle inscrit.",
          "en": null
        },
        "figura": "fig-043.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Cadascun dels tres triangles petits té per base un costat del triangle gran (a, b o c) i per altura, exactament, r —perquè el radi cap a cada costat hi és perpendicular. La seva àrea és, doncs, (1/2)×a×r, (1/2)×b×r i (1/2)×c×r respectivament. Suma les tres i iguala-ho a l'àrea total del triangle.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Un triangle de costats 3, 4, 5 (rectangle, àrea = 6). Amb la fórmula que n'has tret, r = 2×Àrea/(a+b+c) = 12/12 = 1. Comprova-ho: el radi del cercle inscrit d'un 3-4-5 és, efectivament, 1.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta manera de \"veure\" l'àrea d'un triangle des del seu centre, sumant-hi tres peces més petites, és el mateix moviment que fas servir a q39 per a l'àrea d'un pentàgon regular —allà, en comptes de tres triangles diferents, en surten cinc d'iguals.",
      "en": null
    }
  },
  "q77": {
    "moviment": "dilatacio",
    "movimentTitol": {
      "ca": "dilatació",
      "en": null
    },
    "lot": 8,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Un NOM per a la tècnica (no un càlcul nou encara): com vas trobar la longitud de la diagonal del pentàgon a q32, sense mesurar-la directament?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "recorda q32",
          "en": null
        },
        "text": {
          "ca": "No vas mesurar la diagonal amb un regle: vas trobar una figura semblant —més petita— amagada dins de la gran, i vas plantejar una equació a partir de la proporció entre totes dues.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Un exemple nou, diferent del pentàgon: un triangle amb una línia paral·lela a un costat, que en talla els altres dos i crea un triangle petit semblant a l'original.",
          "en": null
        },
        "figura": "fig-090.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "La tècnica es diu, en aquest projecte, \"dilatació\": dues figures semblants (una és una versió escalada de l'altra) donen una PROPORCIÓ — una equació que relaciona longituds—, sense necessitat de Pitàgores ni de mesurar-les una per una.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Triangle amb costats 6 i 9 des d'un vèrtex; una paral·lela al tercer costat que talla el primer costat a 4 unitats del vèrtex. Per semblança, talla el segon costat a 4×(9/6)=6 unitats del mateix vèrtex.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta mateixa idea —una proporció entre triangles semblants, no una mesura directa— és, de fet, la idea de fons de sinus i cosinus (q78): totes dues són proporcions que només depenen de l'angle, precisament perquè tots els triangles rectangles amb aquell angle són semblants entre si.",
      "en": null
    }
  },
  "q78": {
    "moviment": "construeix-per-definir",
    "movimentTitol": {
      "ca": "construeix la solució a partir de la seva pròpia definició",
      "en": null
    },
    "lot": 8,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Primer, la definició (sinus = costat oposat / hipotenusa; cosinus = costat contigu / hipotenusa, per a un angle agut d'un triangle rectangle). Després, la relació entre els sinus i cosinus dels DOS angles aguts d'un mateix triangle rectangle.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "el mateix costat, dos noms diferents",
          "en": null
        },
        "text": {
          "ca": "Un triangle rectangle té dos angles aguts, A i B (que sumen 90°, perquè el tercer és de 90°). El costat que és \"oposat\" a A, és \"oposat\" o \"contigu\" a B?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-086.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El costat oposat a A és exactament el contigu a B, i el contigu a A és l'oposat a B (la hipotenusa és la mateixa per a tots dos). Escriu sinA i cosB en termes d'aquests mateixos dos costats — i compara-les.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Triangle 3-4-5, angle A oposat al costat 3: sinA=3/5=0,6, cosA=4/5=0,8. Angle B oposat al costat 4: sinB=4/5=0,8, cosB=3/5=0,6. Comprova que sinA=cosB i cosA=sinB.",
      "en": null
    },
    "iDespres": {
      "ca": "Com que A+B=90° sempre en un triangle rectangle, això diu sin(θ)=cos(90°−θ) per a qualsevol angle agut θ — una identitat que faràs servir constantment a la resta d'aquest lot.",
      "en": null
    }
  },
  "q79": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 8,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una generalització de Pitàgores per a un triangle amb un angle obtús C —Pitàgores sol només val per al cas de 90°. C' és, com a q87, el suplementari de C.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "la mateixa alçada de q87",
          "en": null
        },
        "text": {
          "ca": "Traça l'alçada des del vèrtex oposat a c, que cau fora del triangle (com a q87). Aquesta alçada crea DOS triangles rectangles: un de gran (que inclou tot el triangle original) i un de petit (el tros extra, fora del triangle original).",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-092.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Aplica Pitàgores al triangle rectangle gran (hipotenusa c). La base d'aquest triangle gran és a + (un tros extra que surt del triangle petit, en termes de b i cos C'). Substitueix-ho i simplifica.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "a=5, b=4, C=120° (C'=60°): c²=25+16+2(5)(4)(0,5)=41+20=61, c=√61≈7,81. Comprova-ho amb coordenades: si situes els dos costats a,b amb l'angle de 120° entre ells, la distància entre els extrems ha de sortir el mateix valor.",
      "en": null
    },
    "iDespres": {
      "ca": "Quan C=90° (C'=90° també, ja que són suplementaris i tots dos fan 90°), cos C'=0 i la fórmula es converteix exactament en el Pitàgores de tota la vida —aquest resultat el conté com a cas particular, no el substitueix.",
      "en": null
    }
  },
  "q80": {
    "moviment": "dues-maneres",
    "movimentTitol": {
      "ca": "dues maneres de mirar la mateixa figura (base × altura, però amb l'altura amagada dins un angle)",
      "en": null
    },
    "lot": 4,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "ja saps una fórmula, aquesta n'és una altra versió",
          "en": null
        },
        "text": {
          "ca": "Ja saps que l'àrea d'un triangle és (1/2) × base × altura. Aquesta pregunta no et demana una fórmula nova des de zero: et demana escriure \"altura\" en funció de coses que sí et donen (un costat i un angle), quan l'altura en si no t'han donat directament.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "quin triangle rectangle amaga l'altura",
          "en": null
        },
        "text": {
          "ca": "Si deixes caure la perpendicular des d'un vèrtex fins a la recta que conté el costat oposat, aquesta perpendicular (l'altura) és un catet d'un triangle rectangle petit. La hipotenusa d'aquest triangle rectangle petit és un dels costats donats. Quina raó trigonomètrica lliga l'altura, la hipotenusa i l'angle que hi ha entre ells?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "L'angle marcat en sanguina és el que fas servir com a \"l'angle entre els dos costats\" a la fórmula. L'altura h es dibuixa discontínua perquè és una línia de construcció, no un costat del triangle.",
          "en": null
        },
        "figura": "fig-044.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Amb h = b × sin(C) (el costat b fa de hipotenusa del triangle rectangle petit, i l'angle C hi és l'angle conegut), substitueix-ho a la fórmula (1/2) × base × altura, on la base és el costat a.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Un triangle amb a = 6, b = 7 i l'angle entre ells C = 30°. Àrea = (1/2) × 6 × 7 × sin(30°) = 21 × 0,5 = 10,5.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta fórmula no necessita que el triangle sigui rectangle ni que en sàpigues l'altura per endavant — funciona amb qualsevol triangle del qual coneguis dos costats i l'angle que formen, i és la porta d'entrada natural a la llei del sinus i del cosinus si mai hi treballes.",
      "en": null
    }
  },
  "q81": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 8,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Un angle \"diedre\" (entre dues cares que comparteixen una aresta) —no l'angle pla d'una cara, que ja coneixes. N'hi ha prou de treballar-ne un o dos sòlids amb detall; el mateix mètode val per als altres tres.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "troba dos segments, un a cada cara, perpendiculars a l'aresta compartida",
          "en": null
        },
        "text": {
          "ca": "A cada una de les dues cares que es toquen en una aresta, traça —dins d'aquella cara— el segment des del punt mitjà de l'aresta fins al vèrtex oposat d'aquella cara (l'alçada del triangle equilàter de la cara). Aquests dos segments, un a cada banda, formen l'angle diedre que busques.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-096.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Amb les coordenades dels vèrtexs del tetràedre (o mesurant els dos segments i el segment que uneix els altres dos vèrtexs), planteja el triangle format pels dos peus i el centre, i fes servir el teorema del cosinus (q79) per aïllar l'angle diedre.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Tetràedre regular: angle diedre = arccos(1/3) ≈ 70,53°. Octàedre regular: angle diedre = arccos(−1/3) ≈ 109,47°. Comprova que aquests dos angles sumen exactament 180°.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta suma de 180° entre l'angle diedre del tetràedre i el de l'octàedre no és casualitat — és exactament el que fa possible omplir l'espai alternant-ne, la pregunta següent d'aquest lot.",
      "en": null
    }
  },
  "q82": {
    "moviment": "recompte-o-induccio",
    "movimentTitol": {
      "ca": "recompte o inducció",
      "en": null
    },
    "lot": 8,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una comprovació que, al voltant de cada aresta compartida, els angles diedres dels sòlids que hi conflueixen sumen exactament 360° — el mateix test que vas aplicar als mosaics plans de q03, ara en 3D i sobre arestes en lloc de vèrtexs.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "quants sòlids de cada mena, a cada aresta",
          "en": null
        },
        "text": {
          "ca": "A cada aresta d'aquest folrat, hi conflueixen alguns tetràedres i alguns octàedres. Amb l'angle diedre de cada un (q81), quina combinació suma 360°?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-097.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Dos angles diedres de tetràedre (2×70,53°) més dos d'octàedre (2×109,47°) sumen 360° exactes —perquè cada parella (un tetràedre, un octàedre) ja en suma 180° (q81). Comprova que aquesta combinació concreta (2+2) és la que realment es fa servir en aquest folrat.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "2×70,53°+2×109,47° = 141,06°+218,94° = 360° exacte.",
      "en": null
    },
    "iDespres": {
      "ca": "A diferència del mosaic pla (q03), on un sol tipus de polígon regular (el triangle, el quadrat, l'hexàgon) ja pot folrar tot sol, aquí calen DOS sòlids diferents junts —el tetràedre regular sol no pot omplir l'espai (el seu angle diedre, 70,53°, no divideix 360° de manera exacta cap nombre de vegades).",
      "en": null
    }
  },
  "q83": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 8,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Un sisè de volta = 360°/6 = 60°. Dos números concrets (o dues expressions amb arrels), no una aproximació decimal.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "parteix un triangle equilàter",
          "en": null
        },
        "text": {
          "ca": "Un triangle equilàter, costat 2, partit per la meitat des d'un vèrtex fins al punt mitjà del costat oposat. Quin triangle rectangle en surt, i quins costats té?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-087.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El triangle rectangle té hipotenusa 2, un catet 1 (la meitat del costat que has partit), i l'altre catet per Pitàgores. L'angle de 60° és el que queda al vèrtex original —quin catet hi és oposat, quin hi és contigu?",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Catets 1 i √3, hipotenusa 2: sin60°=√3/2≈0,866, cos60°=1/2. Comprova amb Pitàgores: 1²+(√3)²=1+3=4=2² ✓.",
      "en": null
    },
    "iDespres": {
      "ca": "El mateix triangle partit et dona també, de franc, el sinus i el cosinus de 30° (l'altre angle agut d'aquest mateix triangle rectangle) — per la relació que acabes de trobar a q78.",
      "en": null
    }
  },
  "q84": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 8,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una identitat que valgui per a QUALSEVOL angle agut, no un parell de xifres concretes.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "torna a la definició",
          "en": null
        },
        "text": {
          "ca": "sinθ = oposat/hipotenusa, cosθ = contigu/hipotenusa. Què diu Pitàgores sobre oposat² + contigu²?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-088.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "oposat² + contigu² = hipotenusa². Divideix tots dos costats de l'equació per hipotenusa².",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Triangle 3-4-5: sinθ=3/5, cosθ=4/5. sin²θ+cos²θ = 9/25+16/25=25/25=1 ✓, per a qualsevol dels dos angles aguts.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta identitat (sin²+cos²=1) és la que fa possible definir sinus i cosinus com les coordenades d'un punt que es mou sobre un cercle de radi 1 —una manera diferent de pensar-hi que reapareixerà si continues estudiant trigonometria més enllà d'aquest quadern.",
      "en": null
    }
  },
  "q85": {
    "moviment": "dilatacio",
    "movimentTitol": {
      "ca": "dilatació",
      "en": null
    },
    "lot": 8,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Un cinquè de volta = 72°. Sinus i cosinus d'aquest angle, en termes del nombre auri φ=(1+√5)/2.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "comença per la meitat de l'angle",
          "en": null
        },
        "text": {
          "ca": "36° és la meitat de 72°, i és exactament l'angle a la punta del triangle isòsceles daurat que ja vas trobar a q31/q32 (dos costats en raó φ:1). Si en saps el cosinus de 36°, l'angle doble (q88) et dona el de 72°.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-095.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Al triangle daurat (dos costats φ, base 1, angle 36° al vèrtex), parteix- lo per la meitat des del vèrtex: obtens cos36°=(φ/2). Aplica la fórmula de l'angle doble de q88 per obtenir cos72° i sin72° a partir d'això.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "cos36°=φ/2≈0,809. cos72°=2cos²36°−1=2(0,809)²−1≈0,309. sin72°=√(1−cos²72°)≈0,951. Comprova que φ²=φ+1 (l'equació que ja coneixes de q33) simplifica cos72° a exactament (φ−1)/2 = 1/(2φ).",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest mateix valor, sin72°≈0,951, és el que fa falta per calcular l'àrea exacta d'un pentàgon regular en termes només del seu costat, sense passar per l'apotema mesurada per separat.",
      "en": null
    }
  },
  "q86": {
    "moviment": "contraexemple",
    "movimentTitol": {
      "ca": "per refutar en basta un contraexemple",
      "en": null
    },
    "lot": 2,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "quina és exactament la feina",
          "en": null
        },
        "text": {
          "ca": "\"Insuficient\" es refuta amb un exemple: dos triangles diferents (no congruents) que comparteixin els dos costats i l'angle donats. Ara bé — compte, perquè aquí \"un angle\" vol dir un angle que no és l'angle entre els dos costats donats (si ho fos, seria el cas SAS de q08c-recíproc, i aquell sí que determina el triangle). Aquesta distinció és tota la dificultat de la pregunta.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "mou-ho amb un compàs, mentalment",
          "en": null
        },
        "text": {
          "ca": "Fixa un angle a un vèrtex A, i un dels costats donats sortint d'A cap a un punt B (això fixa A i B del tot). L'altre costat donat té una longitud fixa, però només saps que l'altre extrem (diguem-li C) és en algun lloc del segon costat de l'angle — no saps on. Si claves un compàs a B amb aquella longitud fixa, quantes vegades pot tallar el segon costat de l'angle?",
          "en": null
        },
        "figura": "fig-202.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-016.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Els dos triangles ABC i ABC′ comparteixen: l'angle a A, el costat AB, i el costat BC (les marquetes ho diuen: BC i BC′ fan el mateix). Però són triangles diferents — mira els angles a C i C′, o el costat AC. Dos costats i un angle (no comprès) et donen, en general, dues respostes possibles, no una. Compara amb el cas SAS: per què allà el compàs només pot tallar en un lloc?",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb angle A = 30°, AB = 8 i BC = 5, el teorema del cosinus et dona una equació de segon grau per a AC amb dues solucions positives: AC ≈ 9,93 i AC ≈ 3,93. Comprova-ho tu mateix — i fixa't que si canviessis \"dos costats i un angle\" per \"dos costats i l'angle comprès\" (SAS), la mateixa equació només tindria una solució possible.",
      "en": null
    },
    "iDespres": {
      "ca": "Dels cinc criteris clàssics de congruència de triangles (SSS, SAS, ASA, AAS...), SSA és l'únic que falla — per això té nom propi (\"el cas ambigu\") en trigonometria, i reapareix cada vegada que resols un triangle amb el teorema del sinus.",
      "en": null
    }
  },
  "q87": {
    "moviment": "construeix-per-definir",
    "movimentTitol": {
      "ca": "construeix la solució a partir de la seva pròpia definició",
      "en": null
    },
    "lot": 8,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una definició, no un càlcul: la definició de sinus de q78 (oposat/ hipotenusa) només té sentit per a un angle agut d'un triangle rectangle —un angle obtús no en pot ser mai un. Cal decidir què vol dir sin(120°), per exemple.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "cau la perpendicular fora del triangle",
          "en": null
        },
        "text": {
          "ca": "En un triangle amb un angle obtús C, l'alçada des del vèrtex oposat cau FORA del triangle, no a dins. Aquesta alçada forma un triangle rectangle nou, amb un angle C' que és el suplementari de C (C'=180°−C).",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-091.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Defineix sin(C) := sin(C'), fent servir l'angle agut suplementari, que sí que és l'angle d'un triangle rectangle de veritat. Comprova, amb aquesta definició, que el teorema del sinus (costat / sin(angle oposat) igual als tres vèrtexs) encara dona el mateix valor als tres costats del triangle obtusangle.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "C=120°, C'=60°: sin(120°):=sin(60°)=√3/2≈0,866.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta mateixa construcció (l'alçada que cau fora, l'angle suplementari C') és exactament la que fa servir q79, la propera guia, per generalitzar Pitàgores a triangles amb un angle obtús.",
      "en": null
    }
  },
  "q88": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 8,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Dues fórmules, sin(2θ) i cos(2θ), en termes de sinθ i cosθ solament.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "un triangle isòsceles amb angle 2θ al vèrtex",
          "en": null
        },
        "text": {
          "ca": "Triangle isòsceles, dos costats de longitud 1, angle 2θ entre ells. Calcula'n l'àrea de dues maneres: (a) amb la fórmula \"meitat del producte de dos costats pel sinus de l'angle entre ells\", i (b) partint-lo per la meitat amb l'alçada des del vèrtex, que en dona dos triangles rectangles d'angle θ.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-093.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Per a sin(2θ): iguala les dues àrees de la Pista 1. Per a cos(2θ): aplica el teorema del cosinus de q79 a aquest mateix triangle isòsceles (costats 1, 1, angle 2θ) per trobar el costat que falta al quadrat, i compara-ho amb el mateix costat calculat com el doble de sinθ (per la partició en dos triangles rectangles).",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "θ=37°: sin(74°)≈0,961, i 2·sin37°·cos37°≈2(0,602)(0,799) ≈0,961 ✓. cos(74°)≈0,276, i 1−2sin²37°≈1−2(0,362)≈0,276 ✓.",
      "en": null
    },
    "iDespres": {
      "ca": "q85, un parell de guies més endavant en aquest mateix lot, fa servir exactament aquesta fórmula del cosinus doble per trobar el sinus i el cosinus de 72° a partir dels de 36°.",
      "en": null
    }
  },
  "q89": {
    "moviment": "contraexemple",
    "movimentTitol": {
      "ca": "contraexemple i demostració — quan la intuïció i la resposta correcta coincideixen per raons no òbvies",
      "en": null
    },
    "lot": 4,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "aposta abans de raonar",
          "en": null
        },
        "text": {
          "ca": "Aquest és un dels resultats clàssics de la geometria elemental que costa més de demostrar del que sembla a primer cop d'ull (es coneix com el teorema de Steiner–Lehmus). Antic de saber-ho: la teva intuïció probablement et diu que sí, és isòsceles. Aquesta vegada la intuïció encerta —però val la pena que notis que no és evident per què, i que un argument ràpid del tipus \"és simètric, doncs...\" no n'és una demostració vàlida.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "per què \"és fàcil de creure\" no compta",
          "en": null
        },
        "text": {
          "ca": "Si el triangle ja fos isòsceles, és fàcil veure per simetria que les dues bisectrius (dels dos angles iguals) fan la mateixa longitud —aquest sentit és senzill. Aquí et demanen l'altre sentit: si les dues bisectrius surten iguals, has de deduir que el triangle era isòsceles. Aquesta implicació inversa és la que necessita una demostració real (i no la donarem aquí sencera: és massa llarga per a una pista puntual d'aquest lot).",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "El triangle del dibuix s'ha fet expressament no isòsceles a ull. Hi ha dues bisectrius, una des de B i una des de C — calen totes dues per poder-ne escriure la hipòtesi. Els arcs distingeixen quina bisectriu parteix quin angle (un arc a B, dos arcs a C: són bisectrius diferents, no cal que es corresponguin). Les ratlletes a BP i a CQ marquen la hipòtesi —\"aquestes dues longituds es fan iguals\"— però no una mesura d'aquest dibuix concret: en un triangle realment escalè com aquest no poden sortir exactament iguals en píxels (és tota la gràcia del teorema: si ho fossin de veritat, el triangle seria isòsceles). La ratlleta és la hipòtesi que estàs suposant, no el que veus.",
          "en": null
        },
        "figura": "fig-045.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "el que sí pots fer amb les eines d'aquest lot",
          "en": null
        },
        "text": {
          "ca": "El que sí està al teu abast és comprovar el resultat numèricament en un cas concret, i raonar per què un triangle molt escalè (costats molt diferents) hauria de donar bisectrius molt diferents —encara que demostrar-ho en general no hi sigui.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "En un triangle escalè \"normal\" (per exemple, costats 5, 6, 7), calcula (amb la fórmula de la longitud de la bisectriu, si la tens a mà, o amb un dibuix a escala) les longituds de dues bisectrius diferents: haurien de sortir clarament diferents entre elles. Això no demostra el teorema, però confirma que \"diferents costats ⟹ diferents bisectrius\" no falla en el cas típic, que és el que fa creïble la implicació inversa.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest és l'únic resultat d'aquest lot on la demostració completa se't queda fora d'abast expressament —val la pena saber que existeixen teoremes senzills d'enunciar i difícils de provar, i que \"contraintuïtivament difícil\" no vol dir \"fals\".",
      "en": null
    }
  },
  "q90": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 8,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una fórmula que generalitza la de Heron (àrea d'un triangle a partir només dels seus costats) a un quadrilàter —però només quan els quatre vèrtexs són sobre un mateix cercle: aquesta condició és imprescindible, no decorativa.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "parteix el quadrilàter en dos triangles per una diagonal",
          "en": null
        },
        "text": {
          "ca": "Els dos triangles comparteixen la diagonal i tenen angles oposats en aquell vèrtex del quadrilàter que, per estar inscrit en un cercle, sumen 180° (angles oposats d'un quadrilàter cíclic — recorda q90 mateix ho demana com a hipòtesi, i el fet ja el vas veure encunyat, sense el nom, en algun quadrilàter cíclic anterior).",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-098.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Escriu la diagonal al quadrat de dues maneres (teorema del cosinus, un cop a cada triangle) i iguala-les — com que els dos angles són suplementaris, els cosinus són oposats, i es poden eliminar. Suma les dues àrees (cadascuna, mig producte de costats pel sinus de l'angle comú) i simplifica amb sin²+cos²=1 fins arribar a la forma de Heron generalitzada.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Costats 2, 3, 4, 5: s=7. A=√[(7−2)(7−3)(7−4)(7−5)] = √(5·4·3·2) = √120 ≈ 10,95.",
      "en": null
    },
    "iDespres": {
      "ca": "Quan un dels quatre costats es \"col·lapsa\" a zero (d→0), la fórmula de Brahmagupta es converteix exactament en la de Heron per a un triangle de costats a, b, c —el mateix cas límit que ja vas veure a q74, ara amb un vèrtex de més. I, com ja apuntava q89 (Steiner-Lehmus, ja fet): totes dues preguntes comparteixen l'esperit de trobar una relació algebraica que la geometria, per si sola, amaga darrere d'una arrel quadrada.",
      "en": null
    }
  },
  "q91": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 9,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una fórmula: el factor pel qual s'allarga (o s'escurça) una longitud quan es projecta perpendicularment d'un pla a un altre, en termes d'un sol angle —l'angle entre els dos plans.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "prova-ho amb un cas fàcil",
          "en": null
        },
        "text": {
          "ca": "Si els dos plans coincideixen (angle 0°), cap longitud canvia: factor 1. Si el pla girés fins quedar perpendicular a l'altre (angle 90°), un segment que hi fos perpendicular es projectaria a un sol punt: factor 0. Quina funció trigonomètrica val 1 a 0° i 0 a 90°?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Un segment sobre el pla inclinat, perpendicular a la línia on es tallen els dos plans, i la seva projecció (perpendicular) sobre el pla horitzontal.",
          "en": null
        },
        "figura": "fig-099.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El segment, la seva projecció i el tros de pla entre tots dos formen un triangle rectangle: la hipotenusa és el segment original, un catet és la projecció. L'angle entre els plans és exactament l'angle d'aquest triangle rectangle que toca el segment original. Quina raó trigonomètrica relaciona el catet (projecció) amb la hipotenusa (original)?",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Angle entre plans de 60°, segment de 8 unitats perpendicular a la línia de tall: projecció = 8×cos60° = 4 unitats. Angle de 0°: factor cos0°=1, cap canvi.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest mateix factor cos(angle) és el que fa que una moneda circular, vista de gairebé de cantell, es vegi com una el·lipse molt aixafada —la relació entre els dos eixos de l'el·lipse aparent és exactament aquest cosinus.",
      "en": null
    }
  },
  "q92": {
    "moviment": "contraexemple",
    "movimentTitol": {
      "ca": "contraexemple",
      "en": null
    },
    "lot": 9,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una resposta de NO, amb un exemple concret de projecció que NO sigui una dilatació (és a dir, que no multipliqui totes les longituds pel mateix factor constant).",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "pensa en la projecció central, no la paral·lela",
          "en": null
        },
        "text": {
          "ca": "q91 projectava perpendicularment (totes les línies de projecció paral·leles entre si). Què passa si totes les línies de projecció passen, en canvi, per un sol punt fix (una \"làmpada\"), en lloc de ser paral·leles?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Dos plans, un punt de projecció, i dos punts sobre el primer pla a diferents distàncies del punt de projecció, projectats sobre el segon.",
          "en": null
        },
        "figura": "fig-100.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "En una projecció central, un punt més a prop del punt de projecció es mou \"menys\" en proporció que un punt més lluny —el factor d'ampliació depèn de la distància al punt de projecció, no és constant per a tota la figura. Compara com es mouen dos segments iguals situats a distàncies diferents del punt de projecció.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb el punt de projecció a distància 2 d'un segment i a distància 6 d'un altre segment igual (ambdós paral·lels al pla d'arribada), els factors d'ampliació respectius NO coincideixen —depèn de 1/distància, no és el mateix nombre per als dos segments.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta distinció —projecció paral·lela (sempre una dilatació uniforme) contra projecció central (una dilatació que varia punt a punt)— és exactament la diferència entre un plànol arquitectònic (paral·lela) i una fotografia (central), i és la raó per la qual les línies paral·leles d'una via de tren semblen convergir en una fotografia (q104) però no en un plànol.",
      "en": null
    }
  },
  "q93": {
    "moviment": "redueix-al-conegut",
    "movimentTitol": {
      "ca": "redueix el desconegut al conegut",
      "en": null
    },
    "lot": 9,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Un argument que valgui per a QUALSEVOL de les infinites rectes tangents des d'un mateix punt exterior —no la comprovació d'un sol cas.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "el radi i la tangent són perpendiculars",
          "en": null
        },
        "text": {
          "ca": "Igual que en un cercle, el radi que va del centre al punt de tangència és perpendicular a la recta tangent en aquell punt (encara que ara estiguis en tres dimensions). Amb el centre O, el punt exterior P, i un punt de tangència T qualsevol: quin angle té el triangle OPT al vèrtex T?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-101.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El triangle OPT és rectangle en T, amb hipotenusa OP (fixa, la distància del punt exterior al centre) i un catet OT (el radi, també fix). Pitàgores dona l'altre catet PT en termes només d'OP i del radi —cap referència a QUIN punt de tangència T és. Com que OP i el radi són els mateixos per a totes les tangents, PT també ho és.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Distància del punt exterior al centre: 10. Radi de l'esfera: 6. Longitud de qualsevol tangent: √(10²−6²)=√64=8, la mateixa per a totes.",
      "en": null
    },
    "iDespres": {
      "ca": "El mateix argument, amb el mateix triangle rectangle, és el que ja vas fer servir per a tangents des d'un punt a un cercle en 2D —aquí no canvia res essencial en passar a tres dimensions, només cal comprovar que el pla que conté O, P i T sempre existeix (tres punts no alineats determinen un pla).",
      "en": null
    }
  },
  "q94": {
    "moviment": "cas-limit",
    "movimentTitol": {
      "ca": "cas límit",
      "en": null
    },
    "lot": 9,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Un únic punt (no dos) —la posició exacta on han d'anar a parar els dos focus d'una el·lipse perquè aquella el·lipse esdevingui un cercle.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "torna a la definició d'el·lipse",
          "en": null
        },
        "text": {
          "ca": "Una el·lipse és el conjunt de punts P tals que PF₁+PF₂ és una constant fixa (diguem-ne 2a). Si F₁ i F₂ són el MATEIX punt O, què diu aquesta equació sobre la distància PO?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Els dos focus d'una el·lipse allargada, ben separats, al costat d'un cercle amb els dos focus superposats en un sol punt marcat al centre.",
          "en": null
        },
        "figura": "fig-102.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Si F₁=F₂=O, aleshores PF₁+PF₂ = 2·PO = 2a, és a dir PO = a: TOTS els punts P estan a la mateixa distància a d'O. Això és, per definició, un cercle de radi a centrat a O.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb 2a=14 (la suma constant), si els dos focus coincideixen, PO=7 per a tot punt P de la corba —un cercle de radi 7.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest cas límit —dos punts que es fonen en un— torna a q109, on veuràs la demostració completa (amb esferes de Dandelin) que tallar un con amb un pla dona sempre una el·lipse amb dos focus concrets; quan el pla de tall és perpendicular a l'eix del con, aquells dos focus col·lapsen exactament com aquí, i la secció resultant és un cercle. No és la mateixa pregunta: aquí n'hi ha prou amb la definició; a q109 cal demostrar-ho des de la geometria del con.",
      "en": null
    }
  },
  "q95": {
    "moviment": "definicio-i-absurd",
    "movimentTitol": {
      "ca": "desempaqueta la definició, i dibuixa el que no pot ser",
      "en": null
    },
    "lot": 1,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "la demostració és dins la definició",
          "en": null
        },
        "text": {
          "ca": "Escriu amb les teves paraules què vol dir exactament que una recta sigui tangent a un cercle. No continuïs fins que ho tinguis escrit. Tota la demostració viu en aquesta frase, i és per això que costa: la hipòtesi no sembla una hipòtesi.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "dibuixa una cosa falsa a posta",
          "en": null
        },
        "text": {
          "ca": "Suposa que t'equivoques i que el radi no és perpendicular. Dibuixa-ho ben exagerat, ben tort. Dibuixar deliberadament el cas impossible és una tècnica, no una pèrdua de temps.",
          "en": null
        },
        "figura": "fig-203.png"
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": {
          "ca": "Baixa la perpendicular des del centre fins a la recta i mira on cau.",
          "en": null
        },
        "figura": "fig-013.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Quant fa OP′? (Les marquetes t'ho diuen.) Per tant, P′ és al cercle? És a la recta? I què deia exactament la teva definició de tangent?",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Aquí no hi ha números. La comprovació és una altra: repassa la teva demostració i assenyala on fa servir que la recta toca el cercle només una vegada. Si no ho fa servir enlloc, tens un forat, perquè sense aquesta condició l'enunciat és fals.",
      "en": null
    },
    "iDespres": {
      "ca": "A q96 retrobaràs la mateixa idea (la perpendicular és el camí més curt) fent una feina completament diferent: camins mínims i reflexió. I ja pots mirar enrere: de les set preguntes d'aquest lot, quantes has resolt afegint una línia? Aquesta és, de moment, la teva eina principal.",
      "en": null
    }
  },
  "q96": {
    "moviment": "reflexio",
    "movimentTitol": {
      "ca": "reflecteix, i el camí trencat es torna recte",
      "en": null
    },
    "lot": 1,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "on és la dificultat",
          "en": null
        },
        "text": {
          "ca": "Ja saps que el camí més curt entre dos punts és el segment recte. Aquí el camí no pot ser recte, perquè està obligat a tocar la recta pel mig. Tota la gràcia consisteix a trobar la manera de convertir-lo en un de recte sense canviar-ne la longitud.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "quina operació desdoblega?",
          "en": null
        },
        "text": {
          "ca": "Busques una transformació que conservi les longituds (si no, el camí \"més curt\" canviaria de sentit) i que et permeti posar les dues meitats del camí en línia. Només n'hi ha una de raonable.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-011.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Les marquetes diuen que AP i A′P fan el mateix. Per tant el camí A→P→B fa exactament el mateix que A′→P→B, per a qualsevol P de la recta. I entre tots els camins A′→P→B, quin és el més curt? Un cop ho sàpigues, mira els angles.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb A = (0,3), B = (8,1) i la recta y = 0: el teu P ha de sortir (6,0), amb longitud total √80 ≈ 8,944. Prova ara P = (5,0) i comprova que surt més llarg (≈ 8,993).",
      "en": null
    },
    "iDespres": {
      "ca": "q97 posa dues rectes paral·leles: el mateix truc, aplicat dues vegades. I ara torna a la figura del llibre, que és una el·lipse amb els seus dos focus: la suma de distàncies als focus és constant, i el punt de tangència és el que la fa mínima sobre la tangent. Per això els angles hi són iguals — i per això una bola que surt d'un focus d'una taula de billar el·líptica sempre passa per l'altre.",
      "en": null
    }
  },
  "q97": {
    "moviment": "reflexio",
    "movimentTitol": {
      "ca": "reflecteix, i el camí trencat es torna recte",
      "en": null
    },
    "lot": 2,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "un rebot més",
          "en": null
        },
        "text": {
          "ca": "A q96 el camí tocava una sola recta. Aquí en toca dues — un cop cadascuna. La idea és la mateixa, però l'has d'aplicar dos cops, no un.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "un rebot cada vegada",
          "en": null
        },
        "text": {
          "ca": "Reflecteix A respecte de la recta de dalt: ja tens A′. Un tros del teu camí (A fins al primer punt de contacte) ara es pot substituir per un tram recte des d'A′. Et queda encara la recta de baix per resoldre — què hi faries, per la mateixa raó?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-019.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Amb A′ (reflex d'A respecte de la recta de dalt) i B′ (reflex de B respecte de la recta de baix), el segment recte A′B′ creua totes dues rectes. Aquests dos punts de creuament són els punts de contacte que buscaves: el camí A → (creuament de dalt) → (creuament de baix) → B fa exactament la mateixa longitud que el segment recte A′B′, per a qualsevol elecció dels punts de contacte — i un segment recte és el camí més curt entre els seus extrems.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Rectes y=6 (dalt) i y=0 (baix). A=(1,4), B=(9,1). Reflectint: A′=(1,8), B′=(9,−1). La distància A′B′ (i per tant la longitud del camí òptim) és √145 ≈ 12,042. Compara-ho amb un camí \"a ull\" que toqui totes dues rectes a x=4: aquest surt ≈ 14,705 — més llarg, com havia de ser.",
      "en": null
    },
    "iDespres": {
      "ca": "Si en lloc de dues rectes tinguessis un triangle sencer (tres costats) i volguessis el camí tancat més curt que toqués els tres, la mateixa idea —reflectir, un cop per cada costat— hi funciona, encara que amb tres reflexions en cadena en lloc de dues. I com ja vas veure prometut a q96: la propietat de reflexió d'una el·lipse (q98, en aquest mateix lot) és la mateixa idea mirada des d'una corba en lloc de dues rectes.",
      "en": null
    }
  },
  "q98": {
    "moviment": "construeix-per-definir",
    "movimentTitol": {
      "ca": "construeix la figura, i que la construcció mateixa sigui la prova",
      "en": null
    },
    "lot": 2,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "No cal demostrar cap fórmula. Has d'explicar per què aquest mètode físic dibuixa sempre la mateixa mena de corba — què és exactament el que el fil manté constant mentre mous el llapis.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "mesura el que no canvia",
          "en": null
        },
        "text": {
          "ca": "El fil té una longitud fixa L (el talles un cop i ja està). Clava els dos punxons, tensa el fil amb el llapis en dues posicions diferents, i mesura (o calcula amb coordenades) les dues distàncies del llapis a cada punxó a cada posició. Què es manté igual entre una posició i l'altra?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-020.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El fil no s'estira: sigui on sigui el llapis, la suma de les dues distàncies als punxons val sempre L, perquè és tota la longitud del fil repartida en dos trossos. Això és la definició d'una el·lipse: el conjunt de punts la suma de les distàncies dels quals a dos punts fixos (els focus) és constant. El mètode del fil no s'inventa res — simplement fabrica aquesta condició amb un objecte que físicament no pot fer altra cosa.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Punxons a (−3,0) i (3,0), fil de longitud 10. Al punt (0,4): distàncies 5 i 5, sumen 10. Al punt (5,0) (un extrem de l'el·lipse): distàncies 8 i 2, sumen també 10.",
      "en": null
    },
    "iDespres": {
      "ca": "Ara ajunta aquest fet amb el de q96/q97 (reflectir converteix un camí trencat en un de recte): és exactament el que fa que una bola de billar llançada des d'un focus d'una taula el·líptica passi sempre per l'altre focus, sigui quin sigui l'angle de sortida.",
      "en": null
    }
  },
  "q99": {
    "moviment": "audita-la-demostracio",
    "movimentTitol": {
      "ca": "audita la demostració",
      "en": null
    },
    "lot": 9,
    "pistes": [
      {
        "nivell": 0,
        "titol": {
          "ca": "què has de produir",
          "en": null
        },
        "text": {
          "ca": "Una comprovació algebraica completa, no només la intuïció, que la raó doble de quatre punts A,B,C,D sobre una recta és exactament la mateixa que la dels quatre punts A′,B′,C′,D′ que resulten de projectar-los des d'un mateix punt O sobre una altra recta.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "comença amb àrees de triangles",
          "en": null
        },
        "text": {
          "ca": "Per a un punt O fora de la recta i dos punts X,Y sobre la recta, l'àrea del triangle OXY es pot escriure de dues maneres: mig producte de dos costats pel sinus de l'angle al vèrtex O, o mig producte de la base XY per l'alçada des d'O. Iguala-les per obtenir XY en termes de OX, OY, i l'angle a O.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 2,
        "titol": {
          "ca": "la construcció",
          "en": null
        },
        "text": null,
        "figura": "fig-103.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Escriu cada una de les quatre distàncies AC, BD, BC, AD (les que apareixen a la raó doble) amb la fórmula de la Pista 1, en termes només de les distàncies OA, OB, OC, OD i dels SINUS dels angles entre elles vistos des d'O. En la raó doble (AC·BD)/(BC·AD), els factors OA, OB, OC, OD es cancel·len tots —el que queda depèn només dels angles a O, que són EXACTAMENT els mateixos angles per als punts projectats A′,B′,C′,D′ (són el mateix feix de rectes des d'O).",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb A,B,C,D a distàncies 0,2,5,9 sobre una recta, la raó doble val (5−0)(9−2)/((5−2)(9−0)) = 35/27 ≈ 1,296. Projecta aquests quatre punts (numèricament, amb qualsevol punt O fora de la recta i qualsevol segona recta) i comprova que torna a sortir 35/27.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest fet —que la raó doble sobrevisca la projecció mentre que distàncies i raons simples no ho fan— és la base de tot el que ve després en aquest bloc: q101 el reformula com una pregunta sobre quants punts es poden moure lliurement, i q106 li posa nom («invariant projectiu»).",
      "en": null
    }
  }
};
