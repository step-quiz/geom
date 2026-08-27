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
          "ca": "Un triangle qualsevol té diversos punts que es podrien dir \"centre\": on es tallen les altures, on es tallen les bisectrius, on es tallen les medianes... En general són tres punts diferents. La pregunta interessant no és calcular-ne un, és preguntar-se per què, en el cas equilàter, tothom en diu el centre com si n'hi hagués només un.",
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
          "ca": "Tria un vèrtex i uneix-lo amb el punt mitjà del costat oposat. Aquesta línia, per simetria del triangle equilàter (els dos costats que surten del vèrtex triat són iguals), parteix l'angle del vèrtex en dos d'iguals i el costat oposat en dos d'iguals alhora. Qualsevol triangle isòsceles ja té aquesta propietat amb una sola línia (la que surt del vèrtex on es troben els dos costats iguals); el que és propi de l'equilàter és tenir-la alhora des dels tres vèrtexs.\n\nI encara en fa una tercera, que faràs servir molt: hi cau perpendicular. Val la pena veure per què, perquè és un argument de tres línies que reapareixerà a q26, a q83 i cada cop que partis un isòsceles per la meitat. Els dos triangles en què queda partit tenen els tres costats iguals dos a dos (els dos costats del triangle, que són iguals; la meitat de la base, compartida en mida; i la línia nova, compartida de debò), o sigui que són congruents. Per tant els dos angles que fan amb la base són iguals. I dos angles iguals que junts fan una recta —180°— han de fer 90° cadascun.",
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
          "ca": "Per simetria, si repeteixes l'argument de la pista 1 amb els altres dos vèrtexs, obtens tres línies, cadascuna alhora bisectriu d'angle, mediana i altura del seu vèrtex.\n\nFalta encara la part que el dibuix et suggereix però que no has demostrat: que les tres es tallin totes en un MATEIX punt. Tres rectes qualssevol es tallen, normalment, en tres punts diferents. Aquí la simetria també ho resol, i amb una sola frase: agafa una de les tres línies i fes-ne un mirall. Doblegant per aquest mirall, el triangle cau exactament damunt d'ell mateix i les altres dues línies s'intercanvien. Per tant el punt on aquelles dues es creuen ha de quedar-se on és —i l'únic lloc que no es mou en aquest plec és el mirall mateix. O sigui que la tercera línia hi passa. I com que pots fer aquest raonament amb qualsevol de les tres, les tres passen pel mateix punt.\n\nAixò és el que fa que, en aquest cas (i només en aquest), \"el centre\" tingui sentit sense ambigüitat: bisectrius, medianes i altures hi són totes tres alhora.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Un triangle equilàter de costat 12. La mediana des d'un vèrtex fa 6√3 ≈ 10,39 (surt de Pitàgores: 12² − 6² = 108). Comprova primer el que sí que has demostrat: pren un punt qualsevol d'una mediana i mesura'n la distància als dos vèrtexs de l'altra banda —han de sortir iguals, perquè la mediana és el mirall. I comprova que les tres medianes que dibuixis es creuen totes en un sol punt, no en tres.\n\nA quina distància del vèrtex cau aquest punt, en canvi, és una pregunta que aquesta guia NO respon: la simetria et diu que el punt existeix, no on és exactament. Si vols saber-ho, mesura-ho al teu dibuix; hauria de sortir-te ≈6,93, és a dir 2/3 de la mediana. Que aquesta proporció sigui sempre 2/3 —i per a qualsevol triangle, no només l'equilàter— és un resultat de debò, i necessita un argument propi que aquí no hem fet.",
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
          "ca": "Compte amb un pas que sembla innocent i no ho és. Que els costats d'un triangle petit siguin la meitat dels del gran NO vol dir que hi sigui congruent: vol dir que hi és semblant, de raó 1/2. El que necessites és una altra cosa, i ja la tens: si els costats del triangle gran són a, b i c, els quatre triangles petits tenen exactament els mateixos tres costats, a/2, b/2 i c/2. Tres costats iguals dos a dos és el criteri costat-costat-costat. Per tant els quatre petits són congruents entre ells, que és el que l'enunciat demana.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Un triangle de costats 6, 8, 10. Cada triangle petit ha de tenir costats 3, 4, 5 — i per tant és rectangle (3² + 4² = 5²). El gran també ho és (6² + 8² = 10²), i no podria ser d'una altra manera: els petits en són còpies a escala 1/2, i canviar l'escala no canvia cap angle.",
      "en": null
    },
    "iDespres": {
      "ca": "El moviment d'aquesta guia —connectar punts mitjans i deixar que el teorema del segment mitjà et digui les mides— torna, amb sorpresa, si l'apliques a un quadrilàter qualsevol per rar que sigui: els punts mitjans dels seus quatre costats sempre formen un paral·lelogram. El motiu és exactament el mateix teorema, aplicat als dos triangles en què una diagonal parteix el quadrilàter.",
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
          "ca": "Comença pel cas d'un sol tipus de polígon. Amb triangles (60°), quantes còpies calen per arribar a 360° exactes? Vigila amb un error fàcil: 3, 4 o 5 triangles fan 180°, 240° i 300°, i cap d'aquestes sumes no serveix aquí —hi deixen un buit obert. La condició d'un mosaic no és \"no passar-se de 360°\", és fer-los exactament. Amb quadrats (90°), quants? Amb pentàgons (108°)? Amb hexàgons (120°)? Amb heptàgons?\n\nQuan hagis exhaurit els casos d'un sol polígon, passa a les combinacions barrejades, que són la part interessant i molt més nombrosa: un quadrat i dos octàgons, per exemple, fan 90° + 135° + 135° = 360°.\n\nUn cop les tinguis totes, atura't a mirar què has demostrat exactament, perquè no és tot el que sembla. La condició dels 360° és una condició per a UN vèrtex sol. Diu quines rosetes de polígons poden existir al voltant d'un punt —i, sobretot, quines no poden existir de cap manera. El que no diu és si aquella roseta es pot anar repetint fins a cobrir tot el pla sense encallar-se en algun lloc més enllà. N'hi ha que quadren perfectament en un vèrtex i, quan intentes continuar el mosaic, arriba un moment que ja no encaixen. Prova-ho al paper amb alguna de les combinacions barrejades que hagis trobat: dibuixa el primer vèrtex, i després el veí, i el següent.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Sis triangles: 6×60°=360° ✓. Quatre quadrats: 4×90°=360° ✓. Tres hexàgons: 3×120°=360° ✓. Tres pentàgons: 3×108°=324°, no arriba. Compta quantes combinacions VÀLIDES (no necessàriament d'un sol tipus de polígon) trobes en total. I comprova que sabries dir quina de les dues coses has provat de cada una: que la roseta és possible en un vèrtex, o que el mosaic sencer existeix. Són dues afirmacions diferents, i el comptatge d'angles només et dona la primera.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest mateix recompte, aplicat als poliedres en lloc dels mosaics del pla (angle menor que 360°, no igual, perquè la figura s'aixequi cap a la tercera dimensió en lloc de quedar plana), és exactament el que ja vas fer a q08b — i allà hi trobaràs la mateixa distinció, dita amb altres paraules: descartar tots els casos impossibles no és el mateix que construir els possibles. Aquí la separació és encara més gran que allà: al cas dels poliedres, cadascuna de les cinc rosetes que sobreviuen al comptatge dona efectivament un sòlid; al cas dels mosaics, unes quantes de les rosetes que sobreviuen no arriben a donar cap mosaic.",
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
          "ca": "En un polígon regular inscrit en una circumferència, l'angle que es veu des d'un vèrtex entre dos vèrtexs consecutius depèn només de quants costats del polígon separen aquests dos vèrtexs — no de quins vèrtexs concrets siguin. Com que aquests angles separen sempre un vèrtex del següent (mai en salten dos de cop), tots subtendeixen el mateix arc de circumferència, i per tant són el mateix angle. Compta bé quants n'hi ha: des d'un vèrtex d'un heptàgon surten 4 diagonals, i 4 diagonals parteixen l'angle d'aquell vèrtex en 5 trossos, no en 4. Els dos trossos dels extrems (entre un costat del polígon i la diagonal veïna) són del mateix tipus que els altres tres —també separen un vèrtex del següent.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb la fórmula de l'angle inscrit, cadascun dels cinc trossos val 180°/7 ≈ 25,71°. Els cinc junts han de reconstruir l'angle interior d'UN vèrtex de l'heptàgon: 5 × 180/7 = 900/7 ≈ 128,57°. I això és exactament el que q70 prediu per a un heptàgon regular, (7−2)×180/7. Compte amb un error fàcil: 900° és la suma dels SET angles interiors de l'heptàgon sencer. Un ventall d'un sol vèrtex no pot arribar-hi mai — només pot completar el seu propi angle, que és set vegades més petit.",
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
      "ca": "Compta, per al cub, quants eixos de simetria de cada tipus té: 4 eixos vèrtex-a-vèrtex, 3 eixos cara-a-cara, 6 eixos aresta-a-aresta — 13 eixos en total (sense comptar el centre com a eix). Aquest recompte, combinat amb els girs que cada eix permet, dona les 24 maneres de GIRAR el cub deixant-lo exactament on era. Compte amb dir-ne \"totes les simetries\": si a més hi comptes les de mirall (reflexions), en surten 48. Les 24 són les que pots aconseguir girant el cub amb les mans; les altres 24 només les veus reflectides en un mirall, i cap moviment del cub no te les dona.",
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
          "ca": "Amb triangles equilàters (60° cadascun) pots ajuntar-ne 3, 4 o 5 a un vèrtex (180°, 240° o 300°, tots per sota de 360°) —però no 6 (exactament 360°, queda pla). Amb quadrats (90°) només en pots ajuntar 3 (270°) —amb 4 ja fan 360° exactes. Amb pentàgons regulars (108°) només 3 (324°). Amb hexàgons (120°) ja 3 sols en fan 360°, cap combinació funciona. Amb polígons de més costats, l'angle és encara més gran i la situació només empitjora. Compta quantes combinacions vàlides has trobat en total.\n\nAra fixa't bé en QUÈ acabes de demostrar, perquè no és tota la pregunta. Has demostrat que no n'hi pot haver cap altre: la llista no pot ser més llarga. Però no has demostrat que cadascuna d'aquestes cinc combinacions es pugui construir de debò —que els polígons acabin tancant una figura, en comptes de quedar-se oberts per l'altra banda. Això, aquí, ho sabem per una altra via molt més simple: els cinc sòlids existeixen, els pots tenir a la mà i comptar-los les cares. Són dues meitats diferents d'una mateixa resposta, i val la pena no confondre-les.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Hauries d'arribar a exactament cinc combinacions vàlides: 3 triangles/vèrtex (tetraedre), 4 triangles/vèrtex (octaedre), 5 triangles/vèrtex (icosaedre), 3 quadrats/vèrtex (cub), 3 pentàgons/vèrtex (dodecaedre). Si en trobes més o menys de cinc, revisa el càlcul de l'angle d'algun dels polígons. I comprova també que sabries dir, si algú t'ho preguntés, quina de les dues meitats prova el teu comptatge: la de \"no n'hi ha més de cinc\" o la de \"n'hi ha aquests cinc\".",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest argument —comptar quantes configuracions locals a un vèrtex són geomètricament possibles— és un dels primers exemples que segurament veuràs d'una demostració que combina geometria amb un argument purament combinatori de comptatge finit, un estil de raonament que reapareix constantment més endavant en matemàtiques. I també és el teu primer exemple d'una parella que retrobaràs molt: descartar tots els casos impossibles no és el mateix que construir els possibles. Gairebé sempre calen totes dues coses, i sovint la fàcil de les dues és la que ningú s'adona que ha fet servir.",
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
          "ca": "Abans de contestar, decideix quina mena de feina et caldrà en cada cas.\n\nSi creus que la resposta és sí, has de convèncer per a tots els triangles del món: un dibuix no serveix de res.\n\nSi creus que és no, quantes figures et calen? Pensa-ho bé, perquè la resposta és un número molt petit.\n\nAquesta asimetria no és un truc: és com funciona tota la matemàtica.",
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
      "ca": "No numèrica. Escriu la frase \"dues figures amb els mateixos angles són semblants\" i afegeix-hi la paraula que la fa certa. Després repassa les preguntes que ja has explorat i reparteix-les en dues piles: les que demanaven demostrar i les que demanaven refutar.",
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
          "ca": "El plec (la diagonal) parteix el rombe en dos triangles amb els tres costats iguals dos a dos (les marquetes ho diuen) — són congruents. D'aquí surt que la diagonal bisecta els dos angles que talla. I ara ve el pas clau: en un triangle isòsceles, la bisectriu de l'angle del vèrtex és també perpendicular al costat oposat. Aquí n'hi ha prou amb una sola aplicació: dos costats consecutius del rombe més una diagonal formen un triangle isòsceles, i l'ALTRA diagonal n'és justament la bisectriu del vèrtex —per tant hi cau perpendicular. Per al paral·lelisme, torna als dos triangles congruents del primer plec: quina parella d'angles iguals et diu que dos costats són paral·lels?",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Agafa els quatre punts (±3,0) i (0,±4). Comprova que els quatre costats fan 5 (el triangle 3-4-5) —per tant tens un rombe de debò— i que el pendent d'un costat és igual al del costat oposat. Fixa't que aquí has anat en la direcció contrària a la demostració: has partit de dues diagonals perpendiculars i n'has obtingut un rombe. Comprova els números, no demostra el teorema.",
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
          "ca": "Posa el punt de projecció a alçada p, un pla a alçada 0 i l'altre a alçada h. Un punt de coordenada x0 respecte de l'eix, al pla 0, es projecta a la coordenada x0·(p−h)/p al pla h (surt de resoldre on la recta des del punt de projecció talla el segon pla). Coordenada, i no distància: el signe hi és part de la resposta. Prova-ho amb p més gran que h (fora d'entremig) i després amb p entre 0 i h.",
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
          "ca": "Quan p és fora de l'interval [0,h], el factor (p−h)/p és positiu: la figura es projecta ampliada o reduïda però SENSE capgirar-se. I val la pena que t'hi aturis, perquè aquesta és la primera homotècia de debò del bloc: a q91 el factor depenia de la direcció del segment, i a q92 depenia d'on era el segment; aquí no depèn de res, és el mateix número per a tota la figura i per a totes les direccions. El que ho arregla no són les línies de projecció, que continuen sortint totes d'un sol punt: és que ara els dos plans són PARAL·LELS. Quan p és entre 0 i h, aquest mateix factor esdevé NEGATIU: la figura es projecta capgirada (com la imatge d'una càmera fosca), no només escalada.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "h=10. Amb p=−2 (fora, per sota): factor=(−2−10)/(−2)=6, positiu. Amb p=20 (fora, per sobre): factor=(20−10)/20=0,5, també positiu —la figura surt a la meitat i dreta. Amb p=5 (entremig): factor=(5−10)/5=−1, negatiu —la figura surt exactament invertida i de la mateixa mida. Acosta ara el punt de projecció al primer pla, p=0,001: el factor es dispara a −9999, i a p=0 exacte ja no hi ha projecció possible, perquè el punt de projecció cauria damunt de la figura mateixa.",
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
          "ca": "compta graus de llibertat, però compta bé",
          "en": null
        },
        "text": {
          "ca": "Amb els tres punts d'arribada ja donats, la segona recta no la tries tu: és la que ells determinen. Només et queda triar O, i això són dos números per a tres condicions. Fixa't, a més, en una cosa que limita molt una projecció sola: si les dues rectes es tallen en un punt X, aleshores la recta que va d'O a X és la mateixa per a totes dues, o sigui que X es projecta damunt d'ell mateix. Una projecció no pot moure aquell punt de cap manera. Amb dues projeccions encadenades, en canvi, sí que el pots moure —i aleshores els tres punts van on vulguis.\n\nUn quart punt, en canvi, no s'arregla per molt que encadenis: la seva posició queda determinada pels altres tres. Quina cosa, ja calculada a q99, és la que el fixa?",
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
          "ca": "Un cop fixada la imatge de tres punts A,B,C (sempre possible, encara que et calguin dues projeccions seguides, perquè tres punts no porten cap invariant que els lligui), la imatge D′ del quart punt D ha de complir que la raó doble (AC·BD)/(BC·AD) sigui la MATEIXA abans i després (q99) —això determina D′ de manera única. Per tant, quatre punts només es poden projectar a quatre punts amb la mateixa raó doble, no a qualssevol quatre.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Fes-la amb números. Parteix dels quatre punts de q99, a x=0, 2, 5 i 9, amb raó doble 35/27. Envia A→0, B→1 i C→3 (tres imatges triades a l'atzar) i mira on ha d'anar D: imposant (3−0)(d−1)/((3−1)(d−0)) = 35/27 surt d = 81/11 ≈ 7,364, i no hi ha cap altre valor possible. Si en lloc de 35/27 haguessis volgut, per exemple, 2, hauries obtingut un altre d —o sigui que els quatre punts d'arribada no els pots triar tots quatre.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta és la primera vegada, en aquest bloc, que es veu EXPLÍCITAMENT que la raó doble no és només \"una cosa que es conserva\": és la mesura completa de la llibertat que perdem en passar de tres punts a quatre. El nom formal d'una quantitat així —una que cap projecció no pot tocar— és invariant projectiu.",
      "en": null
    }
  },
  "q102": {
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
          "ca": "DUES respostes. Segurament n'esperes un contrast —un sí i un no. Aquí no n'hi ha: la resposta és SÍ totes dues vegades. Tots els triangles són el mateix projectivament, i tots els quadrilàters també. La pregunta interessant, doncs, canvia: si a la recta la llibertat s'acabava al quart punt, per què al pla encara no s'ha acabat?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "compta la llibertat que tens, no els vèrtexs",
          "en": null
        },
        "text": {
          "ca": "Una projecció central del pla no la tries a l'atzar: la tries posant el punt de projecció en algun lloc i el pla d'arribada en algun altre. Cada tria és un grapat de números que pots moure lliurement. D'altra banda, cada punt que vols enviar a un lloc concret et gasta llibertat: fixar on va a parar un punt del pla són dues condicions (la seva x i la seva y). Compta-ho a la recta i al pla per separat: quants punts pots col·locar on vulguis abans de quedar-te sense llibertat, en cada cas?",
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
          "ca": "tanca-ho amb un terra enrajolat",
          "en": null
        },
        "text": {
          "ca": "Mira una foto d'un terra de rajoles quadrades, feta de gairebé qualsevol lloc. Cada rajola és un quadrat de veritat, i a la foto n'hi ha de totes les formes: més amples, més estretes, més aixafades com més lluny són. Aquella foto és, literalment, una projecció central. Ja tens la resposta davant dels ulls: un quadrat es pot projectar sobre tota mena de quadrilàters, i per tant qualsevol quadrilàter es pot portar a qualsevol altre (passant pel quadrat, si cal, en dos passos).\n\nOn s'acaba, doncs, la llibertat? Al cinquè punt. Amb quatre punts al pla encara pots decidir on van tots quatre; el cinquè ja no el pots moure, queda determinat pels altres quatre i per la projecció que has triat. És el mateix fenomen que trobaràs sobre una recta a q101, però un punt més tard, perquè el pla té una dimensió més que la recta.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "No numèrica, i val la pena fer-la de veritat: fes una foto d'un terra de rajoles o d'un tauler d'escacs des de molt de costat. Tria'n quatre rajoles ben separades i mira'n la forma a la foto: has d'acabar amb quatre quadrilàters ben diferents entre ells que, tots quatre, són la imatge del mateix quadrat. Si algun t'ha sortit amb tres vèrtexs gairebé alineats, encara millor: ensenya que fins i tot un quadrilàter \"aixafat\" hi és a l'abast. L'única cosa que no podràs fer és que una rajola surti amb els vèrtexs en un altre ordre.",
      "en": null
    },
    "iDespres": {
      "ca": "Que la llibertat s'acabi al quart punt sobre una recta i al cinquè sobre un pla no és una coincidència: és la mateixa comptabilitat feta en una dimensió i en dues. Cada dimensió que afegeixes et regala exactament un punt més de llibertat abans que apareguin els invariants —les quantitats que la projecció ja no pot tocar, com la raó doble que calcularàs a q99. Recorda també que aquest \"sí\" és sobre quadrilàters mirats com a quatre punts en posició general (cap tres alineats): la projecció respecta quins punts hi ha, no si la figura et sembla ben proporcionada.",
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
          "ca": "Una resposta de NO, amb els casos exactes on falla. N'hi ha dos, i són de naturalesa oposada: en un la figura s'aplana i en l'altre s'obre. Has de saber dir, per a cadascun, quina relació concreta entre el polígon i el punt de projecció el provoca.",
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
          "ca": "Un costat qualsevol del polígon es projecta, en general, a un altre segment. Hi ha dues maneres que això falli, i val la pena separar-les des del principi perquè són ben diferents. La primera: què passa si dos vèrtexs del polígon i el punt de projecció queden alineats? La segona: hi ha algun punt del pla que no tingui imatge enlloc? (Pensa en quina direcció hauria de sortir el raig des del punt de projecció perquè no arribés mai a la recta o al pla d'arribada.)",
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
          "ca": "Primera manera: el col·lapse. Si un costat, allargat, passa pel punt de projecció, els seus dos extrems comparteixen el mateix raig i van a parar al mateix lloc. Aquell costat es projecta a un sol punt, i el que era un triangle et queda aplanat en un segment. No s'escapa res: al contrari, dues coses que eren diferents s'ajunten. Ja no és un polígon.\n\nSegona manera: la fugida. Un punt X no té imatge quan el raig que hi va des del punt de projecció no arriba mai a la recta d'arribada, és a dir, quan aquell raig és paral·lel a la recta d'arribada. Els punts del pla que compleixen això formen tota una recta —la recta de fuga—, i qualsevol polígon que la travessi es trenca en la imatge i se'n va a l'infinit per tots dos costats. En el llenguatge de l'espai projectiu de q105, aquella recta és la que va a parar als punts de l'infinit. Si has mirat mai una foto d'un terra de rajoles, la recta de fuga té un nom que ja coneixes: l'horitzó.\n\nDues respostes de \"no\", doncs, i per raons oposades: en una la figura s'aplana, en l'altra s'obre.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Fes els dos casos amb coordenades. Recta d'arribada y=4, punt de projecció O=(6,0).\n\nCol·lapse. Triangle de vèrtexs A=(1,1), B=(4,2) i C=(5,1). Els punts B i C són alineats amb O, i efectivament es projecten tots dos a x=2, el mateix punt; A se'n va a x=−14. La imatge del triangle és el segment de x=−14 a x=2: aplanada, no trencada.\n\nFugida. Ara el punt X=(1,0), a la mateixa alçada que O: el raig d'O a X és horitzontal i no talla mai y=4, o sigui que X no té imatge. La recta de fuga és, doncs, y=0. Acosta-t'hi i mira com se'n va: X=(1,½) dona x=−34, X=(1,0,1) dona x=−194, i X=(1,0,01) dona x=−1994.",
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
          "ca": "Una descripció qualitativa concreta de com queden les tres rectes un cop projectades. I una segona part que la pregunta no diu però que hi és: passa sempre? Abans de tancar-la, busca't tu mateix una manera que falli.",
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
          "ca": "Tres rectes paral·leles, en ser projectades des d'un punt fix, es converteixen en tres rectes CONCURRENTS —totes es tallen en un mateix punt. Aquest punt és exactament la imatge del \"punt a l'infinit\" comú a totes tres (la seva direcció comuna), pel mateix mecanisme que ja vas veure a q103: la direcció compartida es projecta a un únic punt ordinari, anomenat punt de fuga.\n\nAra la lletra petita, que és mig la pregunta. Aquell punt de fuga existeix si el raig que surt del punt de projecció en la direcció comuna arriba al pla d'arribada. I hi ha un cas en què no hi arriba: quan la direcció comuna de les tres rectes és paral·lela al pla d'arribada. Aleshores no hi ha punt de fuga i les tres imatges continuen sent paral·leles entre si. No és cap raresa de laboratori: en una foto d'una via de tren, els dos rails convergeixen —la seva direcció se'n va cap al fons— però les travesses, que travessen la imatge de dreta a esquerra, surten paral·leles. Les has vistes mil vegades.\n\nI fixa't que les dues respostes són, en el fons, la mateixa: amb el llenguatge de q105, dues imatges paral·leles també \"es tallen\", però al seu propi punt de l'infinit. El punt de fuga se n'hi ha anat.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb coordenades: pla de partida z=0, punt de projecció O=(0,0,1) i pla d'arribada y=1. Un punt (x,y,0) es projecta a la posició u=x/y, w=1−1/y dins del pla d'arribada.\n\nCas concurrent. Pren les tres rectes x=1, x=2 i x=−1, de direcció comuna (0,1) —les que se'n van cap al fons. Les imatges surten w=1−u, w=1−u/2 i w=1+u, i les tres passen per (u,w)=(0,1): hi ha punt de fuga.\n\nCas paral·lel. Ara les rectes y=2, y=3 i y=4, de direcció comuna (1,0), que és paral·lela al pla d'arribada. Les imatges surten w=1/2, w=2/3 i w=3/4: tres rectes horitzontals, paral·leles, que no es tallen enlloc. Compara els dos casos i veuràs on és exactament la diferència.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest és, literalment, el punt de fuga de la pintura en perspectiva: cada conjunt de rectes paral·leles del món real té el seu punt de fuga propi al quadre —i com que hi ha una direcció per a cada punt de fuga, un quadre en perspectiva en pot tenir un, dos o més. Les direccions que es queden paral·leles al quadre són justament les que un pintor dibuixa paral·leles: és el que distingeix una perspectiva \"frontal\" d'una \"d'angle\".",
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
          "ca": "Una resposta de SÍ, dins d'un pla —a diferència del pla ordinari, on dues rectes paral·leles no es tallen mai—, amb l'explicació exacta de quin punt \"nou\" fa que sempre es tallin. El \"dins d'un pla\" no és un detall menor i el trobaràs a l'\"I després\": a l'espai de tres dimensions la resposta canvia.",
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
          "ca": "En el pla ordinari, dues rectes paral·leles són l'única excepció a \"dues rectes sempre es tallen en un punt\". Una sola excepció, i tot just per un pèl: inclina una de les dues un mil·lèsim de grau i ja es tallen, encara que sigui a quilòmetres d'aquí. Mira on se'n va aquell punt de tall a mesura que les tornes paral·leles. Si a CADA direcció del pla li inventes un punt nou —un punt \"a l'infinit\" per direcció, allà on se'n va aquell tall—, què els passa a dues rectes paral·leles?",
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
          "ca": "Diverses rectes gairebé paral·leles convergint totes cap a un mateix punt marcat \"∞\". És la mateixa imatge que et fa un carrer llarg mirat de cap a cap, o dues vies de tren.",
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
      "ca": "y=3x i y=3x+5 són paral·leles: iguala-les i et queda 0=5, sense solució —al pla ordinari no es tallen. Al pla projectiu totes dues arriben al mateix punt de l'infinit, el de la direcció de pendent 3, i és allà on es tallen. Afegeix-hi ara una tercera recta de pendent diferent, y=x. Aquesta se'n va a un altre punt de l'infinit, el del pendent 1, i per tant no es troba amb les altres dues allà: s'hi ha de trobar en punts ordinaris, i efectivament hi surt —talla y=3x a (0,0) i y=3x+5 a (−2,5 · −2,5). Cap parella no se n'escapa: o comparteixen direcció i es tallen a l'infinit, o no la comparteixen i es tallen aquí.",
      "en": null
    },
    "iDespres": {
      "ca": "Primer, la lletra petita d'aquest \"sempre\", que val la pena saber ara i no d'aquí a dos anys. Tot el que has fet aquí passa DINS D'UN PLA: has agafat el pla de sempre i li has afegit un punt per cada direcció. En aquest pla ampliat sí que és cert, sense cap excepció, que dues rectes qualssevol es tallen.\n\nA l'espai de tres dimensions, fent-hi el mateix, el \"sempre\" es trenca. Dues rectes que no són al mateix pla —una que va pel terra i una altra que travessa el sostre en una altra direcció, sense passar mai l'una per sobre de l'altra— continuen sense trobar-se enlloc. Ni són paral·leles ni es tallen: se'n diu que s'encreuen. Afegir-hi els punts de l'infinit no les salva, perquè cadascuna se'n va cap a un punt de l'infinit diferent. Comprova-ho amb dos llapis: n'hi ha prou de no poder-los posar tots dos damunt d'una mateixa taula imaginària.\n\nFet l'avís: aquesta és la idea que fa que q107 funcioni. Una hipèrbola —que sembla tenir dues branques separades i quatre \"extrems\" que s'allunyen cap enfora— es pot entendre com un cercle normal un cop dos dels seus punts se'n van a l'infinit d'aquesta mateixa manera.",
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
      "ca": "Amb els mateixos quatre punts de q99 (a 0, 2, 5 i 9), la raó doble val 35/27. Ara refés-ho amb una projecció completament diferent de la de q99: punt de projecció a (4,−3) i recta d'arribada y=2. Els quatre punts van a parar a −8/3, 2/3, 17/3 i 37/3, que no s'assemblen gens als d'abans. I la raó doble: (17/3+8/3)(37/3−2/3) / ((17/3−2/3)(37/3+8/3)) = (25/3)(35/3) / ((15/3)(45/3)) = 875/675 = 35/27. Exactament el mateix. Aquesta és la comprovació que fa la pregunta: no que es conservi en una projecció, sinó que es conservi sigui quina sigui.",
      "en": null
    },
    "iDespres": {
      "ca": "Trobar aquest invariant és el pas que fa possible demostrar coses sobre projeccions sense haver de repetir un càlcul de triangles cada vegada. Compte, però, a no atribuir-li més del que fa: q107, que identifica quins dos punts d'un cercle se'n van a l'infinit en formar-se una hipèrbola, no fa servir la raó doble —li basta el mecanisme de fugida de q103 i q105. Són dues eines diferents del mateix calaix: una diu què es conserva, l'altra què desapareix.",
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
          "ca": "Les \"rectes de projecció\" des del vèrtex són exactament les generatrius del con (les rectes rectes que el formen). Dues d'aquestes generatrius —exactament les dues que són paral·leles al pla de tall— no arriben MAI al pla de tall (com dues rectes paral·leles que no es tallen, en el sentit ordinari). Els dos punts del cercle per on passen aquestes dues generatrius són exactament els que se'n van \"a l'infinit\" —i per això la hipèrbola té dues branques que s'obren cap enfora sense parar: són la imatge d'un cercle sencer, menys aquests dos punts que han fugit a l'infinit.",
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
      "ca": "Aquesta identificació és exactament el que fa falta per a q109: les esferes de Dandelin s'encaixen dins del con tocant-lo cadascuna al llarg d'un cercle propi —no d'aquest cercle base, sinó del que li toca segons la mida de l'esfera— i tangents al pla de tall. El que hi aprofitaràs d'aquí no és el cercle, sinó la relació entre les generatrius i el pla de tall que acabes de fixar.",
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
          "ca": "Perpendicular a l'eix: cercle. Inclinant la paret fins que quedi paral·lela a UNA generatriu del con de llum (la vora del feix): la taca es converteix en una paràbola, oberta per un sol costat. Inclinant encara més, hi ha DUES generatrius que es tornen paral·leles a la paret alhora, i la vora del feix se't veu \"obrir-se\" cap als dos costats: és una hipèrbola. Amb un matís honest, que veuràs de seguida: una hipèrbola de debò té dues branques, i amb una llanterna només en pots veure una, perquè la llanterna fa un sol con i la hipèrbola sencera demana el con doble —el que continua a l'altra banda del vèrtex.",
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
      "ca": "Aquest experiment físic —una llanterna i una paret— és la manera més directa de veure per què les tres còniques comparteixen nom de família: totes surten del mateix con, i l'única cosa que canvia és l'angle del pla que el talla. Guarda-t'ho, perquè més endavant q107 i q109 tornaran a aquesta mateixa figura per demostrar amb rigor el que aquí hauràs vist projectat a la paret.",
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
          "ca": "Compte amb un detall que sovint es diu malament: com que el pla de tall no travessa les dues nappes, totes dues esferes són a la mateixa nappa —una encaixada entre el vèrtex i el pla, l'altra més enllà del pla, allunyant-se del vèrtex. Cadascuna és tangent alhora a la superfície del con i al pla de tall, i de cada mena n'hi cap exactament una. Anomena F₁ i F₂ els dos punts on cada esfera toca el pla —aquests seran els focus. Per a un punt P qualsevol de la corba de tall, quina relació hi ha entre PF₁ i la distància, MESURADA SOBRE LA SUPERFÍCIE DEL CON, entre P i el cercle on la primera esfera hi és tangent?",
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
          "ca": "Dues maneres de mesurar la mateixa distància: (a) PF₁ és una tangent des de P a l'esfera 1 —i totes les tangents des d'un mateix punt a una esfera tenen la mateixa longitud (q93). (b) El segment de la generatriu del con des de P fins al cercle de tangència amb l'esfera 1 és TAMBÉ una tangent des de P a aquesta mateixa esfera (l'esfera toca el con al llarg de tot un cercle, i per tant cada generatriu la toca en un punt, el d'aquell cercle). Per tant PF₁ = aquest tros de generatriu. Igual per PF₂ amb l'esfera 2, cap a l'altre cercle de tangència. Suma PF₁+PF₂: és exactament la longitud del tros de generatriu ENTRE els dos cercles de tangència —la mateixa per a QUALSEVOL generatriu, perquè els dos cercles de tangència són fixos (no depenen de P). Constant trobada.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb un cas del tot concret, perquè el puguis refer. Con de semiobertura 30° amb el vèrtex a l'origen i l'eix vertical, i pla de tall z = 4 + x/2 (menys inclinat que les generatrius, o sigui el·lipse). Les dues esferes surten centrades a l'eix, a altures 2,566 i 9,071 —totes dues per damunt del vèrtex, com deia la Pista 1—, amb radis 1,283 i 4,535. Toquen el pla a F₁=(−0,574; 0; 3,713) i F₂=(2,028; 0; 5,014), i toquen el con al llarg de dos cercles situats a 2,222 i a 7,855 del vèrtex, mesurats sobre la generatriu. La constant ha de ser, doncs, la diferència: 7,855 − 2,222 = 5,633. Tria ara punts P de la corba de tall i suma: per a P=(3,247; 0; 5,623) surt 5,633; per a P=(0; 2,309; 4) surt 5,633; per a P=(−1,792; 0; 3,104) surt 5,633. Sempre el mateix, i sempre el tros de generatriu.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest argument —el mateix tram de recta, mesurat de dues maneres, forçat a ser igual (q93 per a la tangència, geometria del con per a la longitud sobre la superfície)— torna a q94, però al REVÉS: q94 partia de la definició (dos focus, suma constant) i en deduïa que un cercle és el cas amb els dos focus fosos; aquí, en canvi, comences del con i DEMOSTRES que la corba resultant compleix la definició amb focus concrets. Quan el pla de tall és perpendicular a l'eix del con, les dues esferes de Dandelin queden igual de grans i tangents al mateix cercle —els dos focus col·lapsen en un de sol, exactament el cas límit de q94.",
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
      "ca": "Amb a=3, b=4: comprova que si (x₀,y₀) satisfà x₀²/9−y₀²/16=1, aleshores (−x₀,y₀), (x₀,−y₀) i (−x₀,−y₀) també ho satisfan —substitueix-los directament a l'equació i comprova que dona el mateix resultat en els quatre casos.\n\nTorna ara a la pregunta, que deia \"TANTA\" simetria. Una el·lipse també té dos eixos i la rotació de 180°: en nombre no en té menys. El que sorprèn de la hipèrbola és on porten aquelles simetries. La reflexió en l'eix vertical i la rotació de 180° no deixen cada branca al seu lloc: s'intercanvien les dues branques. Dibuixades, les branques semblen dues corbes separades que no es toquen enlloc, i la simetria diu que són la mateixa corba i que hi ha moviments del pla que converteixen l'una en l'altra exactament. Aquesta és la resposta al \"tanta\": no en té més que l'el·lipse, però n'hi ha que travessen un buit que semblava infranquejable.",
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
          "ca": "Una identificació exacta de què és \"el diamant\" i una prova que el seu costat val exactament el mateix que la distància del centre a cada focus. Comença per la identificació, que és on es cau: al voltant d'una hipèrbola hi ha dos quadrilàters que criden l'atenció, i només un d'ells és el diamant.",
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
          "ca": "El que no és: el rectangle que formen les dues asímptotes amb les tangents als vèrtexs. Aquell existeix i és útil —té els vèrtexs a (±a,±b) i les asímptotes en són les diagonals—, però els seus costats fan 2a i 2b, no pas c, o sigui que no és el que busques.\n\nEl diamant té els seus quatre vèrtexs sobre els eixos: els dos vèrtexs de la hipèrbola, a distància a del centre, i els dos punts a distància b del centre sobre l'altre eix. Amb l'orientació de sempre —la de x²/a² − y²/b² = 1, amb els vèrtexs sobre l'eix horitzontal— són (a,0), (0,b), (−a,0) i (0,−b). Comprova de passada que els seus costats són paral·lels a les asímptotes: el que va de (a,0) a (0,b) té pendent −b/a, exactament el d'una d'elles. Quin tipus de quadrilàter és, exactament, si les seves diagonals es tallen en angle recte i es reparteixen per la meitat?",
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
          "ca": "Aquest quadrilàter és un rombe (els seus quatre costats són iguals), perquè les seves diagonals —de longituds 2a i 2b— es tallen perpendicularment pel seu punt mitjà comú (el centre). El costat d'aquest rombe és la hipotenusa d'un triangle rectangle de catets a i b: costat = √(a²+b²). Aquesta mateixa expressió, √(a²+b²), és exactament c, la distància del centre als focus —la \"constant focal\" d'aquest llibre.",
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
      "ca": "Aquesta identitat —costat del rombe igual a c— és el mateix triangle rectangle (a, b, c) que ja apareixia amagat a l'equació de la hipèrbola des del principi, i converteix una relació algebraica en una que es veu directament en un dibuix. Guarda't el triangle, perquè a q113 el retrobaràs per a l'el·lipse amb els papers canviats: allà la hipotenusa serà a i el focus caurà entre els vèrtexs (c²=a²−b²), mentre que aquí la hipotenusa és c i el focus cau fora dels vèrtexs (c²=a²+b²). El mateix triangle, llegit de dues maneres.",
      "en": null
    }
  },
  "q112": {
    "moviment": "estirament",
    "movimentTitol": {
      "ca": "estirament",
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
          "ca": "Una hipèrbola qualsevol té dues asímptotes que es tallen amb un angle que depèn de la seva \"forma\". Una hipèrbola recta (o rectangular) és la que té les asímptotes perpendiculars. Has de trobar l'estirament — diferent en horitzontal i en vertical— que converteix la primera en la segona.",
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
          "ca": "Una hipèrbola es descriu amb dos números, a (semieix) i b (el que marca el pendent de les asímptotes). Si dilates l'eix horitzontal per un factor i el vertical per un altre —diferent de l'anterior—, què li passa al pendent de les asímptotes? Aquesta és la diferència amb l'homotècia de q77: allà el mateix factor valia per a totes les direccions (una FIGURA sencera escalada igual pertot); aquí cada eix té el seu propi factor, i és justament perquè són diferents que l'angle de les asímptotes canvia.",
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
          "ca": "Si l'equació és x²/a² − y²/b² = 1, divideix x per a i y per b: la corba es converteix en X² − Y² = 1, l'equació d'una hipèrbola recta (asímptotes Y = ±X, que formen 90°). Aquesta substitució és exactament un estirament de factor 1/a en horitzontal i 1/b en vertical.",
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
      "ca": "La mateixa idea —separar una figura complicada en una de \"normalitzada\" més un canvi d'escala— la retrobaràs de seguida a q114, ara amb la hipèrbola unitat com a patró de referència. I si mires enrere, q117 ja te l'havia feta servir amb la paràbola: allà, com que n'hi ha prou amb un sol número, la normalització és encara més senzilla.",
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
      "ca": "Compte a no dir-ho malament: a²=b²+c² i c²=a²−b² són la MATEIXA igualtat escrita de dues maneres, no dues de diferents. El que canvia de veritat en passar a la hipèrbola és qui fa d'hipotenusa. Aquí, a l'el·lipse, la hipotenusa és a, i per tant c<a: el focus cau entre els vèrtexs. A la hipèrbola la hipotenusa és c, surt c²=a²+b², i per tant c>a: el focus cau fora dels vèrtexs. És el mateix triangle rectangle llegit amb els papers canviats —ja ho vas veure a q111 amb el costat del rombe, i ho tornaràs a veure a q114.",
      "en": null
    }
  },
  "q114": {
    "moviment": "estirament",
    "movimentTitol": {
      "ca": "estirament",
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
          "ca": "A l'el·lipse, c²=a²−b² (el focus és \"més a prop\" que el semieix gran). A la hipèrbola els dos braços s'obren cap enfora: el focus ha d'anar més lluny que el vèrtex, o sigui que la relació ha de ser una suma. Ara bé, endevinar-la i comprovar que quadra no és demostrar-la, i aquí sí que la pots demostrar. Fes-ho al punt de la corba que hi ha just damunt del focus: si P=(c, h), la distància al focus proper és simplement h, i la distància al llunyà surt de Pitàgores amb catets 2c i h. Imposa que la diferència valgui 2a (la constant focal), aïlla h, i compara-ho amb el h que et dona l'equació de la corba.",
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
          "ca": "Amb a=b=1: c=√(1+1)=√2, la diagonal del quadrat de costat 1.\n\nAra la segona meitat, i aquí hi ha la trampa gran de la pregunta. En dilatar per (a,b) la corba es transforma bé: els vèrtexs (±1,0) passen a (±a,0), que són els vèrtexs nous. Amb els focus, en canvi, la l'estirament no serveix: el punt on va a parar el focus antic no és el focus nou. Mira-ho amb números abans de creure-t'ho: amb a=4 i b=3, el focus (√2,0) es transforma en (4√2, 0) ≈ (5,66 · 0), mentre que el focus de veritat de x²/16 − y²/9 = 1 és (5,0). No hi ha manera de fer-los coincidir.\n\nPer què? Perquè els focus no es defineixen mirant la corba de prop: depenen de distàncies, i un estirament que allarga més en una direcció que en l'altra no conserva les distàncies. Només quan a=b —quan l'escalat és uniforme, i per tant una homotècia de les de q77— els focus s'hi deixen portar. Per als focus de la hipèrbola general, doncs, has de tornar a aplicar la relació c²=a²+b², ara amb els semieixos a i b: els focus són a (±√(a²+b²), 0).",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "a=4, b=3: c=√(16+9)=5, focus a (±5,0) i vèrtexs a (±4,0) —el mateix triangle 3-4-5 de q111. Comprova la relació pel camí llarg, amb el punt just damunt del focus: P=(5, 9/4) és a la corba (25/16 − (81/16)/9 = 1 ✓), la distància al focus proper (5,0) val 9/4, i la distància al llunyà (−5,0) val √(10² + (9/4)²) = 41/4. La diferència és 41/4 − 9/4 = 8 = 2a ✓. I recorda de comprovar la trampa: 4√2 ≈ 5,66, que no és 5.",
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
      "ca": "Amb a=4, b=3, c=5, al punt P=(5, 9/4) de la hipèrbola (comprova primer que hi és: 25/16 − (81/16)/9 = 1 ✓). La tangent en P té pendent 9x/(16y) = 45/36 = 1,25. Mesura ara l'angle que fa la tangent amb PF₁ (cap a (5,0), és a dir recta avall) i amb PF₂ (cap a (−5,0)): tots dos surten ≈141,3°, iguals entre si —o ≈38,7° tots dos, si prens la tangent en l'altre sentit. El que has de comprovar és que coincideixen entre ells, no quin dels dos números et surt: el sentit que triïs per a la tangent canvia els dos angles alhora, i els deixa iguals igualment.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta bisectriu interior —en lloc de l'exterior— és exactament el que fa que un mirall amb forma d'hipèrbola, orientat cap a un focus, dispersi els raigs en lloc de concentrar-los: el principi que fan servir els telescopis Cassegrain, on un mirall gran parabòlic recull la llum i l'envia cap al seu focus, i un petit mirall hiperbòlic posat pel mig la desvia cap a l'altre focus de la hipèrbola, que és on hi ha l'ocular. És exactament la propietat d'aquí: el que va cap a un focus, en surt cap a l'altre.",
      "en": null
    }
  },
  "q117": {
    "moviment": "homotecia",
    "movimentTitol": {
      "ca": "homotècia",
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
          "ca": "A q112 vas veure que TOTES les hipèrboles s'obtenen les unes de les altres estirant-les. Aquí et pregunten el mateix per a la paràbola: totes les paràboles, s'obtenen totes d'una de sola?",
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
          "ca": "Una hipèrbola necessita DOS números (a i b) per descriure-la — per això calia un estirament amb dos factors diferents. Una paràbola y=x²/(4p) només en necessita UN (p). Quants factors d'escala (potser només un direcció, potser una d'uniforme) calen per passar d'una paràbola a qualsevol altra?",
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
          "ca": "Dues paràboles amb el mateix vèrtex, una més \"tancada\" que l'altra, amb els respectius focus marcats en sanguina a alçades diferents. La recta horitzontal que les toca totes dues al vèrtex és la tangent comuna en aquell punt, que l'homotècia deixa quieta. Compte a no confondre-la amb la directriu: la directriu és a distància p per sota del vèrtex, i com que cada paràbola té la seva p, cadascuna té la seva directriu —la homotècia les allunya, igual que allunya els focus.",
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
          "ca": "Amb una HOMOTÈCIA (el mateix factor en x i en y, que és el que la distingeix d'un estirament) centrada al vèrtex, y=x²/(4p) es converteix en y=x²/(4·k·p): totes les paràboles són homotècies les unes de les altres, a diferència de les hipèrboles, que en necessiten dues de diferents.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "p=1 (y=x²/4) dilatada per factor 2 uniforme des del vèrtex. Fes-ho seguint un punt: (x, x²/4) va a parar a (2x, x²/2). Si n'anomenes X=2x la coordenada nova, aleshores x=X/2 i l'alçada nova és (X/2)²/2 = X²/8. La paràbola dilatada és, doncs, y = x²/8, és a dir p=2 — exactament el k·p de la Pista 3, amb k=2. El focus, que és a alçada p, es mou de (0,1) a (0,2): s'allunya el mateix factor 2 que tota la resta, com ha de fer qualsevol punt en una homotècia. Si t'ha sortit p més PETIT, has aplicat l'homotècia al revés.",
      "en": null
    },
    "iDespres": {
      "ca": "Que calgui només UN factor d'escala —en lloc de dos, com a la hipèrbola— és el primer indici que totes les paràboles són \"la mateixa figura, vista de més a prop o de més lluny\": una idea que tornaràs a fer servir a q119, on la paràbola apareix com a envolupant d'un feix de rectes.",
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
          "ca": "Aquella bisectriu, per ser el triangle isòsceles, és també la mediatriu del costat FD. I ara la peça que ho tanca tot: aquella recta és la tangent a la paràbola en P, i es pot demostrar sense cap límit ni cap derivada, així. Agafa un punt Q qualsevol d'aquella recta, diferent de P. Com que és la mediatriu de FD, tenim QF = QD. Però QD és la distància de Q fins a D, i D no és, per a Q, el peu de la seva perpendicular a la directriu —només ho era per a P. Anar de Q fins a D, doncs, és fer més camí que anar de Q fins a la directriu en perpendicular: QD > (distància de Q a la directriu). Per tant QF > (distància de Q a la directriu), i això vol dir que Q no és a la paràbola: hi és fora. O sigui que aquella recta toca la corba a P i no la torna a tocar enlloc més: és la tangent.\n\nUn cop ho tinguis, el rebot surt sol. Aquesta recta bisecta l'angle entre PF i PD. I PD és vertical, perquè D és el peu de la perpendicular de P a la directriu, que és horitzontal —o sigui que PD és exactament la direcció del raig que arriba. Un raig que arriba per PD i rebota en una recta que bisecta l'angle PD–PF se'n va, doncs, per PF: cap al focus. (Compte: FD, en canvi, NO és vertical, tret del cas del vèrtex. És PD la que ho és sempre, i és aquesta la que fa la feina.)",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Paràbola y=x²/8 (p=2, focus F=(0,2), directriu y=−2). Pren x=3: el punt de la corba és P=(3, 9/8), i el seu peu a la directriu és D=(3, −2). Comprova primer que P és realment equidistant: PD = 9/8 + 2 = 25/8, i PF = √(3² + (9/8 − 2)²) = √(9 + 49/64) = 25/8 ✓ —el triangle PFD és isòsceles, com havia de ser. El punt mitjà de F=(0,2) i D=(3,−2) és (1,5, 0). La recta de P a aquest punt mitjà té pendent (9/8 − 0) / (3 − 1,5) = 3/4, que és exactament el pendent de la tangent en aquell punt. Coincideixen.",
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
          "ca": "La recta que uneix (i,0) amb (0,n−i) té equació x/i + y/(n−i) = 1. Cada recta d'aquestes és tangent a la corba √x + √y = √n (una paràbola, girada 45° respecte de la posició habitual). I això no te l'has de creure: es demostra amb l'eina que ja tens de q120, la de \"tangent = la recta que hi toca amb arrel doble\".\n\nEscriu la corba sense arrels. De √x + √y = √n, elevant al quadrat dues vegades, en surt (x−y)² = 2n(x+y) − n². Ara substitueix-hi la recta y = b − (b/a)x, amb a=i i b=n−i, i recorda que a+b=n. Els comptes es simplifiquen sols i queda\n\n(n²/a²)·x² − 2n·x + a² = 0,   és a dir   (x − a²/n)² = 0.\n\nArrel doble. La recta no talla la corba en dos punts: la toca en un de sol, x = a²/n, i per simetria y = b²/n. Comprova de passada que aquell punt hi és de veritat: √(a²/n) + √(b²/n) = (a+b)/√n = n/√n = √n ✓. Cada recta del feix té, doncs, el seu punt de contacte, i tots ells junts dibuixen la paràbola que hi veus.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "n=10, recta i=4 (x/4 + y/6 = 1): el punt de contacte que prediu la fórmula és (16/10, 36/10) = (1,6 · 3,6). És a la recta? 1,6/4 + 3,6/6 = 0,4 + 0,6 = 1 ✓. És a la corba? √1,6 + √3,6 = 1,2649 + 1,8974 = 3,1623 = √10 ✓. Prova-ho també amb i=5, que dona (2,5 · 2,5), i amb i=3, que dona (0,9 · 4,9): totes tres cauen sobre la mateixa corba.\n\nFixa't ara en una cosa diferent: les rectes i=4 i i=5 es tallen a (2,3), i √2+√3≈3,146, que no és √10≈3,162 sinó una mica menys. La diferència és l'error de fer servir rectes VEÏNES en lloc del límit real (rectes infinitament properes).",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta manera de generar una corba com a envolupant d'una família de rectes —sense dibuixar mai la corba directament— és la mateixa idea que ja vas fer servir a q64 amb el bastó lliscant: allà l'envolupant sortia d'un segment de longitud constant lliscant entre dos eixos; aquí, d'una família de segments amb un patró numèric.",
      "en": null
    }
  },
  "q12": {
    "moviment": "redueix-al-conegut",
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
          "ca": "Una relació d'àrees 1:2 entre dues figures: el triangle TNP tallat per la tangent en un punt P de la paràbola (el \"sector\"), i el triangle VNP, que és la meitat del rectangle que va del vèrtex fins a aquell mateix punt.\n\nCompte amb els noms, perquè l'enunciat diu \"la meitat del rectangle\" i això es pot llegir malament. Aquí hi ha tres àrees en joc, i val la pena que les tinguis totes tres al cap des del principi: el rectangle sencer, la seva diagonal (el triangle VNP, que n'és la meitat sense cap misteri —qualsevol diagonal parteix un rectangle en dos) i el sector TNP. El que has de demostrar és que el sector és la meitat de la diagonal; respecte del rectangle sencer, doncs, en serà una quarta part.",
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
          "ca": "Amb y=x² i P=(p,p²), la tangent en P té pendent 2p i talla y=0 a x=p/2 — el punt mitjà exacte entre el vèrtex (x=0) i N (x=p).\n\nD'on surt aquest pendent 2p, si encara no has fet derivades? Es pot treure sense càlcul, i val la pena fer-ho un cop. Una recta que passi per P amb pendent m és y = p² + m(x−p). Iguala-la a y = x² i et queda x² − mx + (mp − p²) = 0. La tangent és, precisament, la recta que toca la paràbola en UN sol punt en lloc de tallar-la en dos: la que fa que aquesta equació de segon grau tingui una arrel doble, és a dir discriminant zero. m² − 4(mp − p²) = 0 es reordena com (m − 2p)² = 0, i per tant m = 2p. Aquesta és la definició antiga de tangent —la recta que toca sense travessar— i es resol amb l'àlgebra que ja saps. El triangle VNP (la diagonal del rectangle vèrtex-a-P) té sempre àrea igual a la meitat del rectangle; i com que T és el punt mitjà de VN, el triangle TNP —el \"sector\" tallat per la tangent— té la mateixa altura que VNP però la meitat de la base, així que la seva àrea és la meitat de la de VNP.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "p=3, o sigui P=(3,9) i N=(3,0). Les tres àrees: rectangle de costats 3 i 9 = 27; triangle VNP (la diagonal) = 27/2 = 13,5; i el sector TNP, amb T=(1,5 · 0), té base 1,5 i alçada 9, o sigui 0,5·1,5·9 = 6,75. Comprova les dues raons: 6,75 és exactament la meitat de 13,5 ✓, i exactament una quarta part de 27. Si et surt 1/4 en lloc d'1/2, no t'has equivocat: has comparat amb el rectangle en lloc de la diagonal.",
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
          "ca": "Amb n franges d'amplada 1/n cadascuna sobre l'interval [0,1], la suma de les àrees dels rectangles per sota de y=x² és (1/n)·Σ(k/n)² per a k=1..n, que val (1/n³)·[n(n+1)(2n+1)/6].\n\nAra mira per què això compleix la promesa de la Pista 0. No estem dient \"quan n és infinit passa una cosa màgica\": tenim una fórmula EXACTA per a cada n, i la podem desenvolupar. Surt 1/3 + 1/(2n) + 1/(6n²). O sigui que la suma no val mai 1/3 exacte —sempre s'hi passa una mica— però el que s'hi passa és 1/(2n) + 1/(6n²), i això es pot fer més petit que qualsevol número que et diguin, només triant n prou gran. Si algú et diu que l'àrea val 0,34, li pots ensenyar un n concret que ho desmenteix; si et diu 0,33, també. L'únic número que no es pot desmentir així és 1/3. Aquesta és la diferència entre un pas al límit i un infinitèsim: aquí no et demanem que et creguis res, et donem la fórmula i pots exigir el número.\n\nAra bé, hi ha un forat en aquest argument, i és el que separa una demostració d'una comprovació. Aquests rectangles, amb l'alçada presa a l'extrem DRET de cada franja, sobresurten per damunt de la corba: no són \"els de sota\", són els que la contenen. Per això la suma sempre passa d'1/3. I això només et diu que l'àrea és com a molt 1/3 —encara no que sigui exactament 1/3.\n\nPer tancar-ho et falta l'altra meitat, i és gratis: pren els mateixos rectangles amb l'alçada a l'extrem ESQUERRE de cada franja. Ara sí que queden per sota de la corba, i la seva suma és la mateixa fórmula amb k=0..n−1, que val 1/3 − 1/(2n) + 1/(6n²). L'àrea de veritat queda atrapada entre les dues:\n\n1/3 − 1/(2n) + 1/(6n²)  ≤  àrea  ≤  1/3 + 1/(2n) + 1/(6n²)\n\ni les dues puntes s'estrenyen al voltant d'1/3 tant com vulguis. Ara sí que qualsevol número que no sigui 1/3 es pot desmentir: si algú et diu 0,34, la suma superior amb n gran ja hi baixa per sota; si et diu 0,33, la inferior ja hi puja per sobre.\n\nL'àrea SOTA la corba és, doncs, 1/3 de la caixa, i per tant l'àrea ENTRE la corba i la part de dalt —la \"secció\"— n'és els 2/3 restants.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Fes sempre les dues sumes, que és el que dona la demostració. n=10: la inferior val 0,285 i la superior 0,385 —una forquilla ampla, però l'1/3 ja hi és a dins. n=100: 0,32835 i 0,33835. n=10000: 0,333283 i 0,333383. La forquilla s'estreny per tots dos costats al voltant de 0,33333…, i cap altre número no hi cap. Fet això, 1−1/3=2/3 dona la secció.",
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
      "ca": "R=1, n=4 voltes, H=3: longitud = √((2π·4)²+9) = √(631,65+9) ≈ 25,31. Val la pena fer-ne dues comprovacions de sentit comú, que no demanen calculadora. La primera: si H=0 (no puja gens), l'hèlix es converteix en el cercle recorregut 4 vegades, i la fórmula dona √((2π·4)²) = 2π·4, que és exactament això ✓. La segona: si R=0 (el cilindre s'aprima fins a ser una recta), queda √(H²)=H, la pujada sencera ✓. Una fórmula que passa els dos casos extrems difícilment s'equivoca al mig.",
      "en": null
    },
    "iDespres": {
      "ca": "\"Desenrotllar\" una superfície corba per convertir un problema en un de pla és la mateixa idea que ja vas fer servir a q45 (l'àrea d'un cilindre) i a q51 (la d'un con). Aquí, en lloc d'una àrea, en surt la longitud d'una corba —i és el mateix motiu que fa que funcioni: el cilindre es pot obrir i estendre pla sense estirar-lo enlloc, o sigui que cap longitud dibuixada a sobre no canvia en desenrotllar-lo.",
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
          "ca": "El nombre de pics és R/r, quan aquesta raó és un nombre enter. L'argument és de longituds, i val la pena fer-lo amb aquestes paraules exactes: rodolar sense lliscar vol dir que els dos arcs que es toquen mesuren el mateix. Fer la volta sencera al cercle gran són 2πR de recorregut, i la circumferència del petit fa 2πr; per tant, el punt de contacte ha recorregut 2πR/2πr = R/r circumferències senceres del cercle petit. Cada vegada que en completa una, el punt marcat torna a ser al lloc del contacte —o sigui, toca el cercle gran— i allà hi ha un pic. Val igual per dins que per fora.\n\nCompte amb una trampa famosa aquí. No comptis les voltes que fa el cercle petit sobre el seu propi centre: no en són R/r. Rodolant per dins en fa R/r − 1, i rodolant per fora, R/r + 1 —és la paradoxa de les dues monedes, i si comptes això et surt el número equivocat en tots dos casos. Amb R/r=4 per dins, el cercle petit gira 3 vegades sobre si mateix i tanmateix l'astroide té 4 pics. El que compta els pics és l'arc recorregut, no la rotació pròpia.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "R/r=3 (dins): deltoide, 3 pics — el cas de la figura del llibre. R/r=2 (fora): nefroide, 2 pics. R/r=4 (dins): astroide, 4 pics —la mateixa corba que ja vas trobar a q64 amb el bastó lliscant. R/r=1 (fora): cardioide, 1 pic.",
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
      "ca": "R=5, r=2: el centre del cercle petit es manté sempre a distància 5−2=3 del centre comú, per a qualsevol angle de gir. I fixa't que no cal calcular res a cap instant concret: la distància entre els dos centres és R−r sempre, per la simple raó que els dos cercles es toquen i el petit és a dins. Si el fessis rodolar per fora, la mateixa raó donaria R+r, i el cercle traçat seria de radi 5+2=7.",
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
          "ca": "Fes que els dos angles creixin cadascun a velocitat constant però DIFERENT: mentre un avança una volta sencera, l'altre n'avança p/q (una fracció). Si p/q és racional, la corba es tanca després de q voltes del primer angle; si és irracional, la corba no es tanca mai. Compte amb com ho dius, aquest últim cas: la corba no \"omple\" el tor —una corba no pot arribar a ser una superfície, per molt que doni voltes— sinó que hi passa tan a prop com vulguis de qualsevol punt. Digues-li un punt del tor i una distància, per petita que sigui, i la corba hi acabarà passant més a prop que aquella distància. No és el mateix, i la diferència et tornarà a sortir sovint.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb p/q=2/3: la corba fa 2 voltes completes al voltant del forat central pel mateix temps que en fa 3 al voltant del tub, i es tanca exactament on va començar. Es pot comprovar contant creuaments, però compte a no barrejar els dos cercles del tor, que és fàcil. Un meridià és el cercle petit que dona la volta al tub (com un tall del donut amb un ganivet); per creuar-lo cal haver fet una volta sencera al voltant del forat central, o sigui que la corba el creua 2 vegades. Un paral·lel és el cercle gran que dona la volta al forat; per creuar-lo cal haver fet una volta sencera al voltant del tub, o sigui 3. Si et surten els números canviats, has intercanviat els dos cercles.",
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
      "ca": "L=7 i el bastó formant un angle de 0,37 radians (uns 21°) amb el terra: el peu és a x=7·cos(0,37)≈6,53 i l'altre extrem a y=7·sin(0,37)≈2,53, de manera que el punt mitjà és (3,26 · 1,27) i la seva distància a la cantonada, √(3,26²+1,27²)≈3,50 = 7/2 ✓. Prova-ho amb qualsevol altre angle i tornarà a sortir 3,5: de fet no cal ni provar-ho, perquè el punt mitjà és sempre (½·L·cos α, ½·L·sin α) i la seva distància a l'origen és ½·L·√(cos²α+sin²α) = L/2, sigui quin sigui α.",
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
      "ca": "Base de 12, vèrtex desplaçat (no centrat) a alçada 7. Amb el tall al punt mitjà (a distància 6 de cada cantó), l'àrea de cada meitat surt 21 — sumen 42, que és l'àrea sencera. Ara prova-ho desplaçant el vèrtex a un altre lloc de la mateixa alçada 7, tan lluny com vulguis: cada meitat continua fent 21. No és que \"quadri igualment\": és que ni la base (6) ni l'alçada (7) de cap de les dues meitats no han canviat, i l'àrea només depèn d'aquestes dues coses. Si canvies l'alçada, sí que canvien les dues meitats —però continuen sent iguals entre elles, que és el que la pregunta demana.",
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
          "ca": "No cal comprovar els quatre costats. Per demostrar que una figura de quatre costats és un paral·lelogram n'hi ha prou amb dos costats oposats que siguin alhora paral·lels i iguals de llargs. Convèncer-te d'això abans de començar t'estalviarà la meitat de la feina.",
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
      "ca": "Amb coordenades: A(0,0), B(8,2), C(9,7), D(1,6). Els punts mitjans surten (4,1), (8,5; 4,5), (5; 6,5) i (0,5; 3). Comprova que el vector del primer al segon és idèntic al del quart al tercer. Nota honesta: aquesta comprovació amb coordenades és una demostració vàlida, i amb la teva àlgebra la pots fer sencera per a un quadrilàter qualsevol. Val la pena que la facis. Però fixa't en la diferència: et convenç que és cert, i no t'explica per què. La de la diagonal sí.",
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
          "ca": "Un semicercle de diàmetre a+b, amb un triangle rectangle inscrit tocant el diàmetre al punt que el parteix en a i b. L'alçada des d'aquest punt fins al semicercle és exactament √(ab) —el teorema de l'altura sobre la hipotenusa, que ja tens demostrat a q09: l'altura sobre la hipotenusa és mitjana geomètrica dels dos trossos en què la parteix.",
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
          "ca": "Un cop tens s=√(ab), es pot demostrar que —si el rectangle no és massa allargat, és a dir si el costat llarg no supera 4 vegades el curt— n'hi ha prou amb DOS talls (tres peces) per recompondre'l en un quadrat de costat s. Si el rectangle és més allargat, es parteix primer per la meitat i s'apilen els dos trossos, tantes vegades com calgui, fins a entrar dins d'aquesta proporció; el teorema de Bolyai–Gerwien garanteix que sempre és possible.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Rectangle 6×3: s=√18≈4,243. Comprova que 6×3=18=(√18)² ✓ (mateixa àrea, com ha de ser per a qualsevol dissecció). Prova després amb un 8×2: l'àrea continua quadrant (s=4, i 8×2=16=4²), però fixa't que aquest rectangle és just al límit de la proporció 4:1, o sigui que ja no tens garantit fer-ho amb tres peces.",
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
      "ca": "\"Comptar en capes i sumar\" és exactament el moviment que retrobaràs, molt més enllà, a q54/q55/q60 (el principi de Cavalieri) — allà les capes ja no seran cubs sinó seccions de qualsevol forma.\n\nUna cosa que aquesta guia s'ha saltat, a posta (\"comença amb costats enters\"): què passa si un costat no és enter? Amb fraccions encara es pot comptar, només que amb cubs més petits. Una capsa de costats 3/2 × 2 × 2: parteix-la en cubs d'aresta 1/2 en lloc d'aresta 1 —n'hi caben 3×4×4=48, i cada cubet val (1/2)³=1/8 del cub gran, així que el volum és 48/8=6, exactament (3/2)×2×2. Sempre que els tres costats siguin fraccions, es pot trobar una mida de cubet prou petita perquè hi càpiguen un nombre enter de vegades en cada direcció, i l'argument torna a funcionar sencer. Per a costats irracionals (per exemple √2) el mateix argument ja no es pot repetir amb cubets d'una mida fixa —cap mida de cubet hi cap un nombre enter exacte de vegades—, però la fórmula segueix sent certa: la demostres aproximant el costat irracional per fraccions cada cop més precises, i comprovant que el volum s'hi acosta tant com vulguis. És la mateixa idea que a q121, quan una suma finita s'acosta a 1/3 sense arribar-hi mai exactament.",
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
          "ca": "Escriu els dos nombres com 2a i 2b. El producte és 4ab directament. Però per què la graella de punts ho fa evident, sense necessitat de desenvolupar res?",
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
          "ca": "Si 3 no dividís p, p seria de la forma 3k+1 o 3k+2 —cap dels dos casos, comprova-ho, dona un quadrat múltiple de 3. Per tant 3 | p² força 3 | p. Ara: si 3 | p, escriu p=3m i torna a l'equació p²=3q². Et queda 9m²=3q², és a dir q²=3m². Pel mateix argument d'abans, 3 | q. Però llavors 3 divideix alhora p i q —i havies dit que la fracció p/q ja estava reduïda al mínim, o sigui que no tenien cap factor comú. Contradicció: la fracció no existeix.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "No numèrica: repassa la teva demostració i assenyala on fas servir que la fracció p/q ja estava reduïda al mínim. Si no ho fas servir enlloc, la demostració no s'aguanta: és precisament amb aquesta hipòtesi que xoca la conclusió \"3 divideix p i divideix q\".\n\n(Nota per si algú te la fa: hi ha una segona manera de tancar-ho que NO necessita suposar la fracció reduïda —la davallada infinita. De p i q en surten un p/3 i un q/3 que compleixen la mateixa equació, i d'aquests uns altres més petits, i així sense parar; i una successió infinita d'enters positius estrictament decreixents no pot existir. Les dues demostracions són bones; el que no val és barrejar-les, perquè cadascuna contradiu una cosa diferent.)",
      "en": null
    },
    "iDespres": {
      "ca": "√2+√3 es demostra amb el mateix moviment però un pas indirecte: si fos racional, (√2+√3)² = 5+2√6 també ho seria, i per tant √6 també. I √6 és irracional pel mateix argument —amb una passa més, perquè 6 no és primer: de 6 | p² en surt 2 | p² i 3 | p², i cada primer per separat dona 2 | p i 3 | p, o sigui 6 | p. Aquest detall importa: l'argument NO funcionaria per a √4, i el motiu és exactament aquest.",
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
      "ca": "Amb R = 1 t'ha de sortir un valor entre 0,4 i 0,42. Comprova també que R + r és exactament √2, que és la distància del centre del quadrat al centre d'un cercle gran.",
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
      "ca": "Amb R = 1 surt r = √2 − 1 ≈ 0,414 — exactament el mateix valor numèric que et va sortir a q22, tot i que la figura és diferent del tot. Compte a no dir-ne massa de pressa \"és la mateixa equació\": no ho és. A q22 tenies R√2 = R + r (tangència exterior, catets R) i aquí tens r√2 = R − r (tangència interior, catets r). Són equacions diferents que resolen a la mateixa raó, i el motiu és una identitat que val la pena veure: de la primera surt r/R = √2 − 1, de la segona r/R = 1/(√2 + 1), i aquests dos números són iguals perquè (√2 − 1)(√2 + 1) = 2 − 1 = 1. Comprova-ho.",
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
          "ca": "a²+b²=c² —la mateixa relació que vas demostrar a q09 i que has fet servir a q25. La pregunta aquí no és calcular c a partir de a i b: és trobar TERNES (a,b,c) senceres que la compleixin.",
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
      "ca": "Aquestes ternes es diuen pitagòriques, i hi ha una fórmula que les genera: (m²−n², 2mn, m²+n²), amb m>n enters positius. Compte amb què genera exactament: amb m i n coprimers i de paritat diferent dona totes les ternes primitives (les que no són múltiple de cap altra), i totes les altres són múltiples d'aquestes. La fórmula tota sola no les dona pas totes —prova de treure'n (9,12,15), que és 3×(3,4,5), i veuràs que no hi ha cap parell (m,n) enter que hi arribi. Una pregunta oberta per a qui vulgui anar més enllà del que demana aquest quadern.",
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
          "ca": "Cada meitat és un triangle rectangle amb hipotenusa el costat del triangle (s) i un catet la meitat de la base (s/2). Pitàgores et dona directament l'altre catet — que és, precisament, l'alçada.\n\nDues coses que aquí es donen per bones i que has de saber d'on surten: que l'alçada caigui just al PUNT MITJÀ de la base, i que hi caigui perpendicular. Totes dues venen del mateix argument, fet a q01 (pista 1), i compte amb la DIRECCIÓ en què va, que és fàcil de girar sense adonar-se'n. No es parteix de l'alçada: es parteix del segment que va del vèrtex al punt mitjà (la mediana). Aleshores els dos trossos ja tenen els tres costats iguals dos a dos —els dos costats del triangle, les dues meitats de la base i la línia nova compartida—, o sigui que són congruents pels tres costats, i d'aquí surten els 90°. Girar-ho (partir de l'alçada i voler-ne treure la meitat exacta amb el mateix criteri de tres costats) no funciona: la meitat exacta és justament el que encara no tens. Si no l'has vist, val la pena fer-hi un tomb abans de seguir: és la peça que fa que aquesta guia funcioni.",
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
          "ca": "Al triangle: la distància del centroide a un vèrtex és L/√3.\n\nAra et falta una peça que el dibuix no et diu i que has de treure tu: a quina distància del vèrtex hi ha el centre del cercle. El centre és a distància r dels dos costats que surten del vèrtex, o sigui que és damunt de la bisectriu, i la bisectriu d'un angle de 60° en fa dos de 30°. En el triangle rectangle petit que formen el vèrtex, el centre i el punt on el cercle toca el costat, r és el catet oposat a 30°: per tant la hipotenusa —la distància del vèrtex al centre— val 2r.\n\nAmb això, la distància del centroide al centre d'un cercle és 2r menys que L/√3. Però també és 2r/√3, perquè els tres centres formen un triangle equilàter petit de costat 2r (dos radis, per la tangència), concèntric amb el gran. Iguala les dues expressions.",
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
          "ca": "Els dos polígons són regulars (a diferència del de q70), però aquí la regularitat és només perquè es vegi net al dibuix — la fórmula que fas servir no la necessita per res. El que sí que necessita, i val la pena saber-ho, és que el polígon sigui CONVEX: en un polígon amb entrants, una diagonal traçada des d'un vèrtex pot sortir-se de la figura, i el ventall ja no la parteix netament en n−2 triangles. Per MESURAR les diagonals, en canvi (la segona meitat d'aquesta pregunta), la regularitat sí que et fa falta.",
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
      "ca": "Hexàgon (n=6): 3 diagonals, 4 triangles, suma d'angles 720°. Octàgon (n=8): 5 diagonals, 6 triangles, suma d'angles 1080°.\n\nI ara la part de MESURAR, que és el que l'enunciat del llibre demana de debò. Hexàgon regular de costat s: la diagonal curta (la que salta un vèrtex) fa s√3 ≈ 1,732s, i la llarga (la que va al vèrtex oposat, passant pel centre) fa exactament 2s. Amb s=1: 1,732 i 2. Comprova la curta amb el mètode de q26 —és la base d'un triangle isòsceles de costats s i angle 120°, o dues alçades d'equilàter posades seguides— i la llarga sense cap càlcul: l'hexàgon regular són sis triangles equilàters al voltant del centre, així que dos radis seguits fan 2s. Àrea de l'hexàgon: sis equilàters de costat s, és a dir 6 × (√3/4)s² = (3√3/2)s² ≈ 2,598s².\n\nL'octàgon es fa exactament igual, però amb tres llargades de diagonal en lloc de dues (salta 1, salta 2, salta 3), i el mètode és el mateix: cada diagonal és la base d'un triangle isòsceles amb dos radis del polígon.",
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
          "ca": "Un dels triangles del ventall, marcat en sanguina. Compte amb dos recomptes que és fàcil de barrejar: des d'un VÈRTEX surten 10 triangles (n−2), i no són tots iguals; des del CENTRE en surten 12, i aquests sí que són tots idèntics. La figura marca un del ventall des del vèrtex.",
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
          "ca": "A diferència de q39 (pentàgon, triangulat des del centre, cinc triangles idèntics —un per costat), aquí triangules des d'un VÈRTEX: els deu triangles no són tots iguals. Per calcular l'àrea et cal la suma de les deu àrees, no deu vegades una de sola —o bé, alternativa més neta: torna a triangular des del CENTRE, com q39, i aprofita que el dodecàgon és regular.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Dodecàgon de costat s=1, triangulat des del centre: apotema a=1/(2 tan15°)≈1,866. Àrea d'un dels 12 triangles: (1/2)(1)(1,866) ≈0,933. Àrea total: 12×0,933≈11,196 —coincideix amb la fórmula estàndard 3(2+√3)s²≈11,196.\n\nI les diagonals, que la Pista 1 et demanava comptar per tipus. Compta per PASSOS entre vèrtexs, no per \"vèrtexs saltats\", que és on tothom s'entrebanca: k=1 uneix dos vèrtexs veïns i per tant NO és cap diagonal —és el costat. Les diagonals van de k=2 fins a k=6, i les de k=7 endavant són les mateixes repetides des de l'altra banda (k i 12−k donen la mateixa llargada). O sigui que hi ha cinc llargades diferents de diagonal, i l'última, k=6, és el diàmetre.\n\nCadascuna és la base d'un triangle isòsceles format per dos radis R del dodecàgon amb un angle central de k×30° entremig, així que totes surten de la mateixa fórmula: diagonal = 2R·sin(k×15°). Amb R=1: 1 (k=2) / 1,414 (k=3) / 1,732 (k=4) / 1,932 (k=5) / 2 (k=6). Fixa't que la de k=3 fa exactament √2, la de k=4 exactament √3 i la de k=6 exactament 2 (el diàmetre) —bones per comprovar que no t'has equivocat. La mateixa fórmula amb k=1 dona 2sin15°≈0,518, que és el costat: bon control de que la fórmula funciona, però no és una diagonal.",
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
    "moviment": "homotecia",
    "movimentTitol": {
      "ca": "homotècia",
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
          "ca": "Que la raó d/s del pentàgon regular val φ i que φ²=φ+1 es pot obtenir per trigonometria; també et va sortir a q38, amb un rectangle en lloc d'un pentàgon. (Compte: q31 i q32 FAN SERVIR aquesta identitat, però cap de les dues no la demostra.) Aquí et demanen la MATEIXA identitat, però llegida directament d'un dibuix, sense cap sinus ni cosinus.",
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
          "ca": "Compte a no confondre'l amb el triangle \"A\" de q31: aquell tenia la base llarga i l'apex de 108°. Aquí passa al revés —la base fa 1 i els altres dos costats fan d, que és MÉS llarg— i per tant l'angle petit ha de ser el de dalt. Els angles surten 72°-72°-36°: és el mateix triangle que els dos laterals grans de q31, els que no portaven etiqueta.\n\nUn triangle isòsceles amb aquests angles, de base 1 i costats d, compleix una relació de semblança amb ell mateix partit per la bisectriu d'un angle de la base (un dels de 72°): la bisectriu deixa un triangle petit amb els mateixos tres angles. D'aquí surt d/1 = 1/(d−1). Desenvolupa-la.",
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
      "ca": "Ja tens dues demostracions independents de la mateixa identitat (q38 amb el rectangle, i aquesta amb dos pentàgons; q31 i q32 n'usen el resultat, però no el demostren) — val la pena que notis que cap de les tres es repeteix: la geometria sovint deixa més d'un camí obert cap al mateix fet.",
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
      "ca": "Un sistema com aquest —dues incògnites que has de trobar a partir de la seva suma i el seu producte— no sempre té solució real: si la condició d'àrea fos massa exigent per al perímetre donat, l'equació de segon grau de la Pista 3 podria tenir discriminant negatiu, i cap rectangle real la compliria. Aquí no passa —val la pena saber per què, en lloc de donar-ho per fet. El discriminant surt s²(9/4 − √3), i com que √3 ≈ 1,73 és més petit que 9/4 = 2,25, aquest número és positiu per a QUALSEVOL costat s > 0: sempre hi ha un rectangle, encara que —com acabes de veure amb s=4— pugui sortir molt allargat.\n\nI encara una cosa més sobre aquest sistema, que és fàcil de llegir malament: l'equació de segon grau té DUES arrels, i les dues arrels són x i y. No són dos rectangles diferents —són els dos costats del mateix rectangle. De fet per a rectangles \"mateixa àrea i mateix perímetre\" SÍ que determina la figura: la suma i el producte de dos números en fixen la parella. On això deixa de valer és en sortir dels rectangles: hi ha figures ben diferents amb la mateixa àrea i el mateix perímetre, i tampoc no cal que dues figures amb la mateixa àrea i el mateix perímetre siguin congruents ni úniques.",
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
      "ca": "Aquest número és el nombre auri, i és exactament el mateix que governa el pentàgon regular: la raó entre la seva diagonal i el seu costat. Si véns de q31/q33, l'equació x²=x+1 que acabes de resoldre és, lletra per lletra, la d²=d+1 d'allà —dues figures sense cap parentiu aparent, una mateixa identitat. I si encara no hi has passat, q33 te'n dona una demostració que no fa servir cap rectangle.",
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
          "ca": "El moviment ja te'l saps de q30: unir el centre amb tots els vèrtexs i sumar les àrees dels triangles que en surten. (I el tornaràs a trobar a q76, amb un triangle qualsevol i el seu incentre, on els trossos ja no seran iguals.) Aquí faràs exactament el mateix amb un pentàgon regular i el seu centre —amb l'avantatge que, com que el pentàgon és regular, els cinc triangles que en surten són tots iguals entre ells, no cal sumar cinc termes diferents.",
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
          "ca": "Dues imatges més sense enunciat. Totes dues amaguen la mateixa pregunta que q27_implicit: mesura el radi petit en funció del gran. (Nota d'aquesta figura: el primer panell es dibuixa com el quadrat inscrit estàndard —els 4 vèrtexs sobre el cercle— perquè l'escaneig original sembla tenir un detall addicional a dalt.)",
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
          "ca": "Al segon panell hi ha dos cercles iguals de radi r i un quadrat de costat 2r (el mateix que el diàmetre dels cercles), tots tres en fila. Abans de calcular res, fixa't bé en com toquen el cercle gran, que és d'on sortirà l'equació: el cercle de l'esquerra hi és tangent per l'extrem esquerre, i el quadrat hi arriba per les dues cantonades de la dreta, no pel mig del seu costat.\n\nAquesta diferència no és un detall: si el quadrat hi arribés pel mig del costat dret, la fila sencera faria 2r+2r+2r = 6r i hauria de valer 2R, o sigui R = 3r. Prova de dibuixar-ho i veuràs que és impossible —les cantonades del quadrat quedarien FORA del cercle, a distància r√10 del centre, que és més que 3r. Quan un model et dona una figura impossible, el model és el que falla.",
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
          "ca": "Al primer panell: la diagonal del quadrat és el diàmetre del cercle, 2R. Si el costat del quadrat és s, quina relació de Pitàgores lliga s amb R?\n\nAl segon panell: posa el centre del cercle gran a l'origen. El cercle esquerre és tangent per dins a (−R, 0), o sigui que el seu centre és a −R+r; el segon centre, a −R+3r; el quadrat va de −R+4r a −R+6r, amb els costats de dalt i de baix a ±r. Escriu que una cantonada de la dreta, (−R+6r, r), és sobre la circumferència i simplifica: la R² se t'anirà dels dos costats i et quedarà una relació ben neta entre R i r.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Primer panell, quadrat de costat s=4: diagonal=4√2, per tant R=2√2≈2,83. Segon panell: t'ha de sortir 37r = 12R. Comprova que la cantonada hi cau de debò —amb R=37 i r=12, el quadrat arriba fins a x=35, i 12²+35² = 144+1225 = 1369 = 37². És el triple pitagòric (12, 35, 37) el que fa que aquesta figura tanqui amb números exactes.",
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
          "ca": "Aquest angle (al centre d'un cercle, entre els dos radis que van als punts de tall) és el doble de l'angle del triangle equilàter: 120°. La zona solapada (l'ull, o vesica) és la suma de dos \"segments circulars\" — cadascun, un sector de 120° menys el triangle que aquest sector deixa sota la corda.\n\nCompte aquí amb una confusió fàcil: aquest triangle que restes NO és l'equilàter que has trobat abans. L'equilàter té per vèrtexs els dos centres i un punt de tall; el que has de restar té per vèrtexs UN centre i els DOS punts de tall, i els seus costats fan r, r i r√3. Ara bé, l'àrea els surt igual —tots dos fan (√3/4)r²—, perquè el segon és isòsceles amb dos costats r i l'angle de 120° entremig, i (1/2)r²·sin120° = (√3/4)r². Val la pena adonar-se'n en lloc de confondre'ls: si dibuixes el que restes, veuràs que no és equilàter.\n\nEl perímetre és la suma dels dos arcs de 120°, un de cada cercle.",
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
          "ca": "El moviment és el de q22 i q23: dir una mateixa distància de dues maneres, i igualar-les. Aquí hi ha tres parelles de cercles tangents entre ells —(R₁, r), (r, R₂) i (R₁, R₂)— i les tres relacions han de ser certes alhora.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": null,
        "text": {
          "ca": "La peça que necessites no és cap resultat previ: la construeix tu ara, i és de dues línies. Agafa dos cercles de radis a i b, tots dos tangents a la mateixa recta i tangents entre ells. Els seus centres són a altura a i b sobre la recta, així que la diferència d'altures és (a−b); i com que els cercles es toquen, la distància entre centres és (a+b). Amb Pitàgores, la distància HORITZONTAL entre centres —que és també la distància entre els peus, els punts on cada cercle toca la recta— val √((a+b)² − (a−b)²) = √(4ab) = 2√(ab). Aplica-ho a la parella (R₁, r).",
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
          "ca": "Aplica el mateix triangle a la parella (R₂, r) — quin és l'anàleg del catet (a−b) que ja vas fer servir per a (R₁, r)?",
          "en": null
        },
        "figura": "fig-024.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "La mateixa relació val per a (R₂, r). Els peus dels tres cercles són tots sobre la mateixa recta, així que la distància entre el peu de R₁ i el peu de R₂ (que és 2√(R₁R₂), la mateixa fórmula de la Pista 1 aplicada a la tercera parella) ha de ser la suma de les altres dues distàncies parcials (peu de R₁ a peu de r, i peu de r a peu de R₂) — perquè r és, precisament, en algun punt entremig. Escriu aquesta equació amb els tres √( ) i aïlla r.",
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
      "ca": "Amb r=3, h=10: àrea lateral = 2π(3)(10) = 60π ≈ 188,5. Si hi afegeixes les dues tapes circulars (2×πr² = 18π), la superfície total surt 78π ≈ 245,0.\n\nUna nota sobre el «generalitzat» del títol, que aquesta guia treballa sempre amb un cilindre de base circular. Un cilindre «generalitzat» és qualsevol sòlid fet lliscant una corba plana tancada qualsevol (no cal que sigui un cercle) perpendicularment, sense girar-la ni canviar-ne la mida. El mètode de l'etiqueta desenrotllada hi val exactament igual: si la base té perímetre P, l'àrea lateral és P × h, sigui quina sigui la forma de la base —el rectangle que en surt en desenrotllar-lo és sempre «perímetre per alçada», i 2πr és només el perímetre en el cas particular que la base sigui un cercle.",
      "en": null
    },
    "iDespres": {
      "ca": "El mateix truc no funciona igual de net per a un con (q51): un con desenrotllat no dona un rectangle sinó un sector de cercle, perquè el \"radi\" de l'etiqueta ja no és constant. I quan vulguis mesurar la longitud d'una hèlix (q123), \"desenrotllar\" torna a ser la idea — ara desenrotllant un cilindre sencer, no només la seva superfície.",
      "en": null
    }
  },
  "q46": {
    "moviment": "estirament",
    "movimentTitol": {
      "ca": "nou: estirament",
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
      "ca": "Aquest mateix argument de \"franges que s'estiren\" funciona per a qualsevol figura, no només un cercle — és, de fet, una altra manera d'arribar al mateix tipus de raonament que Cavalieri (q54) fa servir per a àrees en general.",
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
      "ca": "El mateix cub amb el mateix sistema de coordenades et servirà sense cap canvi per a q52 i q56.",
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
          "ca": "Prolonga els quatre costats inclinats del tronc fins que es tornin a trobar en un sol punt: és el vèrtex de la piràmide sencera de la qual el teu sòlid n'és només un tros. Aquest punt existeix perquè els dos quadrats són paral·lels i concèntrics —un és l'altre a una escala diferent—, amb una única excepció que val la pena tenir present: si a=b, els costats són verticals i no es troben mai. En aquell cas el sòlid no és cap tronc de piràmide sinó un prisma, i el seu volum és simplement a²h.",
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
          "ca": "Compte a no contestar \"s'acosta al volum del con, que ja el sé\": això no és cap patró, i a més és fer servir la resposta per justificar-la. El que et demanen és la successió: quant val la suma dels discs per a cada n?\n\nParteix l'alçada en n llesques iguals i fixa't que el disc de la llesca número j (comptant des de dalt) té el radi que té el con al SEU sostre, o sigui r(j−1)/n, i gruix h/n. Suma'ls:\n\nVₙ = Σ π·[r(j−1)/n]²·(h/n) = (πr²h/n³)·(0² + 1² + 2² + … + (n−1)²)\n\nI la suma de quadrats consecutius val (n−1)n(2n−1)/6. Simplifica-ho i mira què et queda: sortirà πr²h multiplicat per una expressió amb n que pots llegir d'un cop d'ull.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "El que t'ha de sortir és Vₙ = πr²h·(1/3 − 1/(2n) + 1/(6n²)), sempre una mica per SOTA d'un terç —els discs van per dins del con— i acostant-s'hi tant com vulguis si tries n prou gran. Amb n=2 dona 1/8 del cilindre; amb n=8 (els set discs que es veuen al dibuix, més la llesca de dalt que queda buida), 35/128 ≈ 0,273; amb n=100, 0,32835.\n\nCon de radi 3, alçada 6: volum = (1/3)π(9)(6) = 18π ≈ 56,5. El cilindre corresponent (mateixa base i alçada) fa 3 vegades més: 54π ≈ 169,6. Comprova que la successió d'aproximacions per discs, per a n creixent, s'acosta a 18π i no a 54π.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta mateixa idea —apilar peces conegudes cada cop més primes i mirar cap a on tendeix la suma— reapareix quan cal justificar per què el volum del casquet esfèric (q62) depèn de l'alçada de tall exactament com hi depèn. I sobretot a q121, amb la paràbola: allà surt la mateixa suma de quadrats i la mateixa expressió, però amb els signes de l'altra banda —1/3 + 1/(2n) + 1/(6n²) en lloc de 1/3 − 1/(2n) + 1/(6n²)— perquè allà els rectangles sobresurten de la corba en comptes de quedar-hi per dins. Val la pena comparar-les quan hi arribis.",
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
          "ca": "El pla talla exactament sis arestes del cub (les sis que no toquen cap dels dos vèrtexs de la diagonal triada), pel seu punt mitjà. Amb coordenades (cub de costat 1, diagonal de (0,0,0) a (1,1,1)) els sis punts mitjans són (1, ½, 0), (½, 1, 0), (0, 1, ½), (0, ½, 1), (½, 0, 1) i (1, 0, ½) — comprova que tots sis compleixen x+y+z = 3/2, que és l'equació del pla de tall.\n\nAra comprova que tots sis són a la mateixa distància del centre del cub, i que la distància entre dos consecutius és la mateixa arreu. I fixa't en el pas que et falta per poder dir \"regular\", que no és automàtic: un hexàgon amb els sis costats iguals encara podria estar deformat. El que ho tanca és tenir les dues coses ALHORA —tots els vèrtexs a la mateixa distància del centre i tots els costats iguals—, perquè aleshores els sis angles centrals són iguals (a igual radi, cordes iguals subtendeixen angles iguals), i sis angles iguals que sumen 360° fan 60° cadascun.",
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
      "ca": "Aquest mateix pla (perpendicular a una diagonal principal, pel centre) és el que fa servir q56 per trobar el tetràedre inscrit al cub. El dibuix, però, es mira des d'un angle diferent del de q56: exactament al llarg de la diagonal principal, perquè és l'única direcció des de la qual el pla de tall es veu en veritable magnitud i l'hexàgon surt regular en lloc d'aixafat. Si tornes a la figura de q56 hi reconeixeràs el mateix cub dibuixat amb la projecció habitual d'aquest quadern: la direcció de mirada és part del contingut de cada figura, no un simple estil.",
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
        "text": {
          "ca": "Mira la superfície lateral de cadascun, no el volum (que ja saps que coincideix) — quina franja vertical s'allarga en inclinar-se?",
          "en": null
        },
        "figura": "fig-031.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El cilindre inclinat té una superfície lateral estrictament més gran que el recte, encara que el volum sigui idèntic — cada \"franja\" vertical de la superfície s'allarga en inclinar-se, de la mateixa manera que la hipotenusa d'un triangle rectangle és més llarga que el catet.\n\nAra vigila amb el pas següent, que és on cau tothom: que cada franja s'allargui per un factor k NO vol dir que la superfície es multipliqui per k. No totes les franges s'inclinen igual respecte de la vora de la base: les que queden a la banda per on el cilindre \"cau\" s'inclinen de ple, i les de la banda perpendicular gairebé no ho noten. La superfície creix, sí, però menys que el factor k. Si vols un número exacte, canvia el cilindre per un prisma: allà cada cara és plana i es pot mesurar sense cap eina nova.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb un prisma de base quadrada els números surten exactes. Base de costat 6, alçada 8: superfície lateral del prisma recte = 4×6×8 = 192, volum = 36×8 = 288. Ara inclina'l 6 unitats en la direcció d'un dels costats de la base. El volum es manté a 288 (Cavalieri: cada tall horitzontal continua sent el mateix quadrat). La superfície, en canvi:\n\n- Les dues cares paral·leles a la direcció d'inclinació passen de rectangles a paral·lelograms de la mateixa base i la mateixa alçada: 6×8 = 48 cadascuna, igual que abans. - Les dues cares perpendiculars a la direcció d'inclinació s'inclinen de ple: passen a ser rectangles de 6 per √(8²+6²) = 10, o sigui 60 cadascuna.\n\nTotal: 2(48) + 2(60) = 216, més que 192. I fixa't que 216/192 = 1,125 mentre que les arestes s'han allargat per 10/8 = 1,25: la superfície creix, però no pel factor de les arestes, justament perquè dues de les quatre cares no creixen gens.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest exemple és el bessó en 3D del que trobaràs a q55: igual que aquí el volum no \"sent\" la inclinació però la superfície sí, allà l'àrea no sentirà els esglaons però el perímetre sí. I totes dues comparteixen el mateix parany de fons: les longituds i les superfícies no es deixen sumar a ull tan bé com les àrees i els volums.",
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
        "text": {
          "ca": "Compara la longitud del tall (no l'àrea) a la mateixa alçada, als dos.",
          "en": null
        },
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
      "ca": "Aquest mateix principi, aplicat a volums en lloc d'àrees (tallant amb plans en lloc de rectes), és el que permetrà comparar volums de sòlids que semblen molt diferents — i és exactament la idea que fa servir q53 per al cas contrari (quan NO es conserva alguna cosa).",
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
        "text": {
          "ca": "Suma primer els trams horitzontals sols (marcats), sigui quin sigui el nombre de graons — quant val, en termes de s?",
          "en": null
        },
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
          "ca": "Hi ha dos camins, i val la pena que sàpigues que n'hi ha dos.\n\nEl curt fa servir una eina que segurament encara no has vist: el volum d'un tetràedre és (1/6)|det[B−A, C−A, D−A]|, un determinant 3×3. Si la coneixes, calcula'l amb les coordenades de la Pista 1. Si no, no és el lloc d'aprendre-la ara.\n\nEl llarg no necessita res que no tinguis, i de fet ensenya més. Mira què queda del cub quan en treus el tetràedre: quatre trossos, un a cada cantonada que no has fet servir. Cadascun és una piràmide amb una cara del cub per base (àrea 1) i una aresta del cub per alçada (1), o sigui volum (1/3)(1)(1) = 1/3... que és massa. Fixa-t'hi millor: la base de cada tros no és una cara sencera del cub, és mig cara —un triangle rectangle d'àrea 1/2— i l'alçada és 1. Volum de cada tros: (1/3)(1/2)(1) = 1/6. Quatre trossos fan 4/6 = 2/3. El tetràedre és, doncs, 1 − 2/3 del cub. Compara aquest resultat amb el del camí curt.",
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
          "ca": "Uneix el centre del sòlid amb cadascun dels seus vèrtexs: això és el que el parteix en piràmides, una per cada cara. (Compte a no confondre-ho amb el segment que va del centre al centre d'una cara: aquell no talla res, però et farà falta de seguida, perquè és l'ALÇADA de cada piràmide.) Quantes peces n'obtens, per a un tetraedre? I per a un octaedre?",
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
        "text": {
          "ca": "On es superposen les dues franges rectangulars (marcades en sanguina), quina forma dibuixen — un cercle, o alguna altra cosa?",
          "en": null
        },
        "figura": "fig-077.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "A cada alçada y, la secció de la intersecció NO és un cercle: és un QUADRAT de costat 2√(r²−y²) (perquè les dues franges, perpendiculars entre si, es tallen en un quadrat).\n\nAra et cal un sòlid conegut per comparar-hi, i has d'anar amb compte a triar-lo: no serveix el cilindre. Les seccions horitzontals d'un cilindre vertical són cercles de radi r SEMPRE EL MATEIX, mentre que els teus quadrats es van encongint amb l'alçada. El sòlid que sí que encaixa és l'esfera de radi r —la que queda inscrita a la intersecció—, perquè la seva secció a l'alçada y és un cercle de radi √(r²−y²): exactament el mateix √(r²−y²) que et marca el costat del quadrat.\n\nAmb s = √(r²−y²): quina relació hi ha entre l'àrea d'un quadrat de costat 2s i la d'un cercle de radi s? Comprova que aquesta relació NO depèn de y —que és el que et deixa aplicar Cavalieri— i multiplica-la pel volum de l'esfera, que ja el saps.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "La raó entre les dues piles és 4s²/(πs²) = 4/π a totes les alçades, així que el volum de la intersecció és (4/π)·(4/3)πr³ = (16/3)r³. Amb r=1: ≈ 5,33. Compara-ho amb el volum d'un sol cilindre de radi 1 i alçada 2: 2π ≈ 6,28 — la intersecció és menor, com cal esperar.",
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
      "ca": "Compte a no confondre aquesta fracció amb la de q61, que compara l'esfera amb el CILINDRE que la conté i dona 2/3, un número diferent (π/6 ≈ 0,524; 2/3 ≈ 0,667). El que sí que és una coincidència notable —i és el resultat que Arquimedes va voler a la seva tomba— és que l'esfera i el seu cilindre circumscrit estan en raó 2/3 tant en volum com en superfície. Comprova-ho tu: el cilindre fa πr²·2r = 2πr³ i l'esfera (4/3)πr³.",
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
          "ca": "Si ja saps les fórmules del volum del con i de l'esfera, podries fer-ho per càlcul directe —però l'objectiu d'aquesta guia és que ho vegis també per comparació directa de seccions: tallar els dos sòlids a la mateixa alçada i comprovar que els talls tenen la mateixa àrea. És el principi de Cavalieri, que trobaràs enunciat per a àrees planes a q54.",
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
          "ca": "A qualsevol alçada h des de la base, la secció horitzontal del sòlid \"cilindre menys con invertit\" té exactament la mateixa àrea que la secció de la semiesfera a la mateixa alçada (aquest és el pas de Cavalieri: dues seccions iguals a totes les alçades ⟹ mateix volum). Com que coneixes el volum del cilindre i el del con invertit per separat, en pots deduir el de la semiesfera: πR³ − (1/3)πR³ = (2/3)πR³.\n\nI ara compara. Compte amb una temptació aquí: el con invertit auxiliar i el con inscrit de l'enunciat NO tenen un el doble de volum que l'altre —tenen exactament el mateix. Tots dos tenen radi R i alçada R, i (1/3)πR²·R = (1/3)πR³ els dos; l'un és l'altre girat de cap per avall. La meitat que has de trobar no és entre els dos cons, és entre el con inscrit i la semiesfera: (1/3)πR³ contra (2/3)πR³.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb radi R=3: volum de la semiesfera = (2/3)πR³ = 18π. Volum del con inscrit (radi 3, alçada 3) = (1/3)πR²h = 9π. La raó con/semi-esfera és 9π/18π = 1/2 exactament —ni més ni menys que la meitat, per a qualsevol R.",
      "en": null
    },
    "iDespres": {
      "ca": "Que la resposta surti exactament 1/2, sense arrodoniments ni aproximacions, no és casualitat: passa cada vegada que dos sòlids tenen la mateixa àrea de secció a cada alçada, o bé àrees en una proporció fixa. El retrobaràs a q62, on el mateix tall entre cilindre i con, fet a una alçada qualsevol en lloc de just a l'equador, dona el volum d'un casquet esfèric.",
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
      "ca": "Aquest 2/3 no té cap relació aritmètica amb el π/6 de q59 —són dues comparacions diferents, amb dos sòlids continents diferents (allà un cub, aquí un cilindre), i π/6 + 2/3 no fa res en particular. El que sí que val la pena mirar és una altra cosa: calcula ara la raó de VOLUMS entre l'esfera i aquest mateix cilindre. L'esfera fa (4/3)πr³ i el cilindre πr²·2r = 2πr³, o sigui... 2/3 una altra vegada. Que la mateixa fracció governi alhora les superfícies i els volums és el resultat que Arquimedes va demanar que li gravessin a la tomba.",
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
          "ca": "A cada alçada dins del casquet, la secció del casquet (un cercle) i la secció del cilindre-menys-con auxiliar tenen la mateixa àrea — exactament el mateix argument de q60, aplicat entre 0 i h en lloc d'entre 0 i R. Per Cavalieri, doncs, el casquet té el mateix volum que aquell tros de cilindre-menys-con, que sí que saps calcular: un cilindre de radi R i alçada h, menys el tronc de con que hi queda a dins.\n\nEl tronc té alçada h i radis R−h (a baix) i R (a dalt). El volum d'un tronc ja el vas fer a q48, allà amb base quadrada; amb base circular la fórmula té la mateixa forma però amb π: (πh/3)(a²+ab+b²). Substitueix a=R−h i b=R, resta-ho de πR²h i simplifica —veuràs que els R² es cancel·len sols i et queda una expressió ben curta en h i R.\n\nUn avís d'honestedat, i en van dos. El primer: que \"sumar\" àrees de seccions infinitament primes doni exactament un volum és el pas que el càlcul integral formalitza, i és fora d'aquest quadern —el mateix tipus de frontera que ja et vas trobar a q64 amb la longitud de l'astroide. El segon, i val la pena que el sàpigues: tot això et dona el VOLUM, no la superfície. La fórmula de l'àrea corba del casquet, 2πRh, és certa i és un teorema d'Arquimedes —diu que projectant el casquet horitzontalment sobre el cilindre que envolta l'esfera, l'àrea es conserva exactament, cosa gens evident—, però aquí te la donem, no la demostrem. El que sí que és teu del tot és l'argument de Cavalieri: dues figures amb la mateixa secció a cada alçada tenen el mateix volum.",
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
          "ca": "Una manera: quina forma plana, desplaçada en línia recta, deixa un cilindre al seu pas? Una altra manera, molt diferent: quina forma plana, girada al voltant d'un eix, l'escombra sencer? (I, ja posats: quina forma plana, girada, en traça només la superfície lateral, sense omplir-lo?)",
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
      "ca": "La segona manera (rotació d'una forma plana al voltant d'un eix) és exactament la idea que fa funcionar el teorema de Pappus, que la converteix en una eina general per calcular volums: q65, q66, q67 i q68 hi estan dedicades.",
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
        "text": {
          "ca": "El punt marcat \"centroide\": quina distància a l'eix, multiplicada per 2π, hauria de reproduir el volum del cilindre que ja saps calcular?",
          "en": null
        },
        "figura": "fig-080.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Per al rectangle, el punt que fa funcionar el teorema resulta ser el seu CENTRE —el centre de gravetat \"de tota la vida\", allà on es creuen les dues diagonals—, que és a mitja amplada de l'eix. Compte amb la temptació d'agafar el costat oposat a l'eix: aquell és el punt més LLUNY de l'eix, no el punt mitjà, i et donaria el doble del volum real.\n\nAra, la definició general. Vigila amb la sortida fàcil: dir \"el centroide és el punt que fa que Pappus funcioni\" NO serveix, per dues raons. La primera és que no defineix cap punt —només et fixa a quina distància ha de ser d'un eix concret, i això és una recta de punts possibles, no un punt. La segona és que et deixa sense pregunta: si el defineixes així, Pappus surt cert per decret, i l'enunciat et demanava precisament si es POT fer que surti cert.\n\nLa definició que sí que serveix no parla d'eixos ni de volums: talla la figura en molts trossos petits, tots de la mateixa àrea, i pren la posició MITJANA de tots ells. Aquest és el centroide —el punt on la figura, retallada en cartolina, se't quedaria en equilibri damunt d'un dit.\n\nI ara sí que Pappus és una afirmació que es pot comprovar. Mira per què funciona: quan gires, cada trosset d'àrea que és a distància r de l'eix recorre una circumferència de llargada 2πr, i escombra un volum (trosset) × 2πr. Sumant-ho tot, el volum és 2π × (àrea total) × (la MITJANA de les distàncies r). I aquesta mitjana de distàncies és exactament la distància del centroide a l'eix —perquè el centroide és la posició mitjana i, mentre la figura queda tota a una banda de l'eix, la distància a l'eix creix de manera uniforme a mesura que t'hi allunyes. Aquí es veu, de passada, per què l'enunciat de Pappus exigeix que l'eix NO talli la figura: si la tallés, hi hauria trossos a banda i banda, les distàncies deixarien de comptar totes en el mateix sentit, i la mitjana ja no seria la distància del centroide.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Rectangle de costats 2 i 3, girat al voltant del costat de llargada 3. El costat perpendicular a l'eix fa 2, així que el centre del rectangle és a distància 1 de l'eix. Pappus dona àrea(6) × 2π × distància(1) = 12π; el cilindre que en surt de veritat té radi 2 i alçada 3, és a dir π(2²)(3) = 12π. Coincideixen exactament. Si t'ha sortit 24π, hi has posat la distància al costat de més enllà (2) en lloc de la distància al centre (1) —és l'error que la Pista 3 t'avisava.",
      "en": null
    },
    "iDespres": {
      "ca": "Un cop tens la definició, es converteix en una eina que es pot aplicar a qualsevol figura, no només al rectangle: q66 la comprova amb un rectangle que no toca l'eix, q67 en fa la versió per a perímetres i superfícies, i q68 la fa servir a l'inrevés (coneixent el volum, per trobar on és el centroide).",
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
          "ca": "Rectangle d'amplada w (perpendicular a l'eix) i alçada H (paral·lela a l'eix), amb el costat més proper a l'eix a distància d. El seu centroide —la posició mitjana de tots els seus punts, que és la definició que es construeix a q65— és al seu propi centre geomètric, per simetria.",
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
          "ca": "El centroide d'una regió (q65) es construeix repartint l'ÀREA en trossos petits i prenent la posició mitjana de tots ells. Aquí fes exactament el mateix, però amb una peça diferent: reparteix el PERÍMETRE en trossets petits de longitud, i pren la posició mitjana d'aquests.",
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
          "ca": "El centroide del perímetre és la posició mitjana dels trossets de longitud del contorn —definit, doncs, sense parlar d'eixos ni de superfícies, igual que a q65. I la versió de Pappus que en surt és: la SUPERFÍCIE generada en girar el contorn val (llargada total del perímetre) × 2π × (distància d'aquest centroide a l'eix). Fixa't en els dos canvis respecte de q65, que van aparellats: on hi havia àrea ara hi ha longitud, i on hi havia volum ara hi ha superfície.\n\nI compte amb una cosa: el centroide del perímetre i el centroide de la regió NO són el mateix punt en general. Coincideixen quan la figura té prou simetria (un rectangle, un cercle), i per això és fàcil no adonar-se'n.",
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
      "ca": "q68 fa servir aquesta mateixa idea, però pensada al revés: allà coneixes ja el volum del sòlid generat, i el que et falta és ON és exactament el centroide.",
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
      "ca": "r=3: centroide de l'àrea a distància 4r/(3π)≈1,27 del centre. Centroide de l'arc a distància 2r/π≈1,91. Fixa't que són DIFERENTS: el centroide d'una regió i el del seu contorn són dos punts distints, i aquí en tens la prova amb xifres.\n\n(Un detall d'enunciat que val la pena decidir tu mateix: aquí s'ha pres \"el perímetre\" com l'arc sol, sense el diàmetre. Si hi comptes també el diàmetre, la longitud passa a ser πr+2r i el centroide s'acosta al centre: et sortirà 2r/(π+2)≈0,389r. Pappus funciona igual en els dos casos —el diàmetre és sobre l'eix i, en girar, no escombra res—, i les dues respostes són correctes per a la seva pregunta.)",
      "en": null
    },
    "iDespres": {
      "ca": "Que aquestes dues distàncies surtin diferents és el motiu pel qual \"el centroide\" no és una sola idea sinó dues —la d'una regió i la del seu contorn—, cadascuna amb la seva versió de Pappus: una per a volums i una per a superfícies. q65 i q67 les construeixen amb calma; aquí en tens, amb xifres, la raó per la qual calen totes dues.",
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
          "ca": "Fixa't que el polígon del dibuix no és regular. És a posta: l'argument no pot dependre de cap simetria, ha de valer per a qualsevol polígon convex (un polígon sense cap \"entrant\", on totes les diagonals queden per dins).",
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
          "ca": "Des d'un vèrtex d'un polígon de n costats, quantes diagonals hi caben (sense comptar els dos costats que ja hi surten)? I ara compta els triangles amb cura, que és on es despista tothom: cada diagonal nova parteix en dos un dels trossos que ja tenies, o sigui que n'afegeix exactament UN. Sense cap diagonal tens una sola peça; amb una en tens 2; amb dues, 3. Per tant, amb n−3 diagonals en tens n−2. Multiplica per 180°.",
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
      "ca": "Aquest mateix moviment —triangular des d'un sol vèrtex— és exactament el que reutilitzaràs a q29 per calcular diagonals concretes d'un hexàgon i un octàgon, i a q06 per mirar els angles que es formen en aquest ventall de triangles, no només comptar-los.\n\nVal la pena que sàpigues on s'atura aquest argument, perquè és un exemple net d'una cosa que passa sovint: el resultat és més general que la demostració. Dibuixa un polígon amb un entrant ben marcat, com una fletxa, i tria el vèrtex de la punta de dins: veuràs que algunes de les diagonals que hi voldries traçar se'n van FORA de la figura, i el ventall ja no parteix el polígon en triangles. La fórmula (n−2)×180° continua sent certa per a aquests polígons —pots comprovar-ho mesurant—, però aquesta demostració concreta ja no la prova. Per a aquell cas cal un argument diferent: sempre existeix ALGUNA diagonal interior que parteix el polígon en dos de més petits, i es va repetint. Que un argument no arribi a tot arreu no el fa dolent; el que seria dolent és no saber fins on arriba.",
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
          "ca": "mira què li passa a cada vèrtex",
          "en": null
        },
        "text": {
          "ca": "Pots provar de traçar una diagonal, com a q11, però vigila amb què t'hi trobes: la diagonal parteix DOS dels quatre angles rectes per la meitat, i només deixa sencers els altres dos —un a cada triangle, no dos. Amb un sol angle conegut per triangle no arribes gaire lluny.\n\nProva millor una altra cosa, que no necessita cap diagonal: no miris els triangles, mira les DIRECCIONS dels quatre costats. Si en un vèrtex els dos costats formen 90°, què saps de la direcció de l'un respecte de l'altre? I si això passa als quatre vèrtexs alhora, què pots dir de dos costats oposats, que estan tots dos lligats al mateix costat intermedi?",
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
          "ca": "Amb els quatre angles fixats a 90°, els dos costats que arriben a cada vèrtex hi arriben perpendiculars. D'aquí es dedueix que costats oposats han de ser paral·lels (dues rectes perpendiculars a una tercera són paral·leles entre elles), i un cop tens el paral·lelisme ja tens un paral·lelogram. Que en un paral·lelogram els costats oposats siguin iguals no és exactament el que q11 enunciava —allà es demostraven iguals els ANGLES oposats—, però surt de la mateixa jugada d'una línia: traça una diagonal, els angles alterns interns et donen dos triangles congruents (costat comú entre angles iguals), i de la congruència surten alhora els angles oposats iguals i els costats oposats iguals. La condició final sobre les longituds és, doncs, costats oposats iguals dos a dos —el mateix que ja sabies d'un rectangle, però ara deduït només a partir dels angles, sense donar per fet el paral·lelisme des del principi.",
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
      "ca": "Aquesta mateixa descomposició en dues sumes independents (horitzontal i vertical) és el nucli de com queden coordenades i vectors a partir de la trigonometria — una idea que reapareixerà si mai treballes amb navegació, robòtica, o qualsevol cosa que impliqui sumar moviments en direccions diferents.",
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
          "ca": "Una resposta de NO, amb la condició exacta que separa quan sí de quan no — no n'hi ha prou de dir \"no sempre\".",
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
      "ca": "Contrasta-ho amb el criteri SSS (tres costats determinen un triangle de manera única): aquí has vist que DOS números (àrea i perímetre junts) no basten per fer el mateix — calen tres dades independents, no dues, per fixar un triangle.\n\nI encara pots dir-ho més fort. Amb el llenguatge x, y, z tens només DUES condicions —x+y+z=35 i xyz=1260— per a TRES incògnites, o sigui que et queda un grau de llibertat sencer: no hi ha dos triangles amb perímetre 70 i àrea 210, n'hi ha infinits. Els dos del quadern són simplement els dos que surten amb costats sencers. Si vols veure'n un de \"lleig\", prova els costats 28,488… / 23,823… / 17,689…: perímetre 70 i àrea 210 igualment.",
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
          "ca": "Els tres segments discontinus curts (els radis cap a cada costat) tenen tots la mateixa marca — i, a diferència del que passa en altres figures, aquí sí és literalment cert que els tres fan la mateixa longitud, perquè tots tres són el radi del mateix cercle inscrit.",
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
    "moviment": "homotecia",
    "movimentTitol": {
      "ca": "homotècia",
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
          "ca": "Un NOM per a la tècnica (no un càlcul nou encara): a les preguntes del pentàgon, com es va trobar la longitud de la diagonal sense mesurar-la directament?",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "torna al pentàgon",
          "en": null
        },
        "text": {
          "ca": "Allà no es va mesurar la diagonal amb un regle. El que es va fer va ser trobar una figura semblant —més petita— amagada dins de la gran, i plantejar una equació a partir de la proporció entre totes dues. A q33 això és literal: la bisectriu d'un angle de la base retalla, dins del triangle de costats d i base 1, un altre triangle amb els mateixos tres angles, i d'igualar-ne les proporcions en surt d²=d+1. A q32 la mateixa jugada dona el costat del pentàgon petit.",
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
          "ca": "La tècnica consisteix a fer servir dues figures semblants (una és una versió escalada de l'altra) per obtenir una PROPORCIÓ —una equació que relaciona longituds—, sense necessitat de Pitàgores ni de mesurar-les una per una. És, senzillament, raonar per semblança.\n\nUna nota de vocabulari, perquè aquí hi ha un parany de traducció. El llibre en diu dilation, que en anglès és el nom de la transformació que agafa una figura i l'escala des d'un punt fix. En català aquella transformació es diu homotècia; \"dilatació\" és un fals amic —vol dir el que fan els metalls amb la calor. En aquestes guies, doncs, se'n diu homotècia, que és el que trobaràs a classe, i el raonament que la fa servir es diu semblança.\n\nI un avís que t'estalviarà confusions més endavant: hi ha una altra transformació que també escala, però amb un factor diferent per a cada direcció —la que converteix un cercle en una el·lipse (q46) o una hipèrbola qualsevol en una de rectangular (q112). Aquella no és una homotècia, i en aquestes guies se'n diu estirament. La diferència no és de vocabulari: una homotècia no canvia la forma de res i respecta angles i focus, i un estirament sí que els canvia.",
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
      "ca": "Com que A+B=90° sempre en un triangle rectangle, això diu sin(θ)=cos(90°−θ) per a qualsevol angle agut θ — una identitat que faràs servir constantment d'ara endavant.",
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
          "ca": "Una generalització de Pitàgores per a un triangle amb un angle obtús C —Pitàgores sol només val per al cas de 90°. C' és el suplementari de C, és a dir 180°−C: com que C és obtús, C' és agut, i per això s'hi pot fer trigonometria de triangle rectangle de tota la vida.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "una alçada que cau a fora",
          "en": null
        },
        "text": {
          "ca": "Traça l'alçada des del vèrtex oposat a c. Com que l'angle C és obtús, aquesta alçada NO cau dins del triangle: cau més enllà de l'extrem del costat a. Justament per això crea DOS triangles rectangles: un de gran (que inclou tot el triangle original) i un de petit (el tros extra que sobresurt).",
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
          "ca": "El triangle rectangle gran (hipotenusa c): quina és la seva base, en termes d'a i del tros extra marcat?",
          "en": null
        },
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
      "ca": "Quan C=90° (C'=90° també, ja que són suplementaris i tots dos fan 90°), cos C'=0 i la fórmula es converteix exactament en el Pitàgores de tota la vida —aquest resultat el conté com a cas particular, no el substitueix.\n\nI queda el tercer cas, el d'angle C agut, que val la pena que facis perquè és la mateixa construcció amb una sola diferència: el peu de l'alçada cau dins del costat a en comptes de passat l'extrem. La base del triangle rectangle gran, doncs, es queda curta en lloc d'allargar-se:\n\nara la base val a − b·cos C (en lloc de a + b·cos C') i l'alçada, b·sin C. Pitàgores al triangle gran: c² = (a − b·cos C)² + (b·sin C)². Desenvolupant, c² = a² − 2ab·cos C + b²cos²C + b²sin²C, i com que sin²C + cos²C = 1 (q84) els dos últims termes fan b²: c² = a² + b² − 2ab·cos C. Fixa't que és el mateix desenvolupament que acabes de fer, amb un únic signe canviat.\n\nAmb les dues meitats a la mà tens el resultat sencer, que es coneix com a teorema del cosinus: amb C agut hi va un menys, i amb C obtús un més davant del suplementari. I si acceptes definir cos(C) := −cos(180°−C) per als obtusos —el germà amb el signe canviat del que fa q87 amb el sinus— les dues línies es fonen en una de sola, c² = a² + b² − 2ab·cos C, per a qualsevol triangle. Comprova el cas agut amb a=b=√3/2 i C=arccos(1/3)≈70,53°: dona c²=1 exacte, que és justament el càlcul del diedre del tetràedre de q81.",
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
      "ca": "Aquesta fórmula no necessita que el triangle sigui rectangle ni que en sàpigues l'altura per endavant — funciona amb qualsevol triangle del qual coneguis dos costats i l'angle que formen, inclòs el cas en què C és obtús. Aquí la Pista 1 s'ha de llegir amb compte: si C és obtús, el peu de l'altura cau FORA del triangle, no dins. Que la fórmula h = b·sin(C) continuï valent en aquest cas no és casualitat — és precisament la raó per la qual el sinus d'un angle obtús es defineix com sin(180°−C) en lloc de deixar-lo sense definir: la definició es tria expressament perquè fórmules com aquesta no s'hagin de partir en dos casos. És la porta d'entrada natural a la llei del sinus i del cosinus si mai hi treballes.",
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
        "text": {
          "ca": "L'angle marcat entre els dos segments (en sanguina): és aquest, i no cap altre, l'angle diedre que busques?",
          "en": null
        },
        "figura": "fig-096.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El triangle amb què treballaràs té per vèrtexs el punt mitjà de l'aresta compartida i els dos vèrtexs oposats, un de cada cara. Els dos costats que surten del punt mitjà són les dues alçades de cara (√3/2 per aresta 1); el tercer costat és el segment que uneix els dos vèrtexs oposats. Amb el teorema del cosinus (q79) n'aïlles l'angle del punt mitjà, que és el diedre.\n\nCompte amb el tercer costat, que NO és el mateix als dos sòlids: al tetràedre els dos vèrtexs oposats són veïns i el segment fa 1 (una aresta); a l'octàedre són diametralment oposats i fa √2. D'aquí surt tota la diferència entre els dos resultats.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Tetràedre regular: angle diedre = arccos(1/3) ≈ 70,53°. Octàedre regular: angle diedre = arccos(−1/3) ≈ 109,47°. Comprova que aquests dos angles sumen exactament 180°.\n\nI ara la segona meitat de la pregunta, la dels altres tres. Compte amb una temptació: la recepta concreta de la Pista 1 —anar del punt mitjà de l'aresta al vèrtex oposat de la cara— només dona una perpendicular a l'aresta quan la cara és un triangle equilàter. En un quadrat, el segment del punt mitjà d'un costat al vèrtex oposat va de biaix i no serveix; el que hi val és anar al punt mitjà del costat oposat. La idea de fons (dos segments, un a cada cara, tots dos perpendiculars a l'aresta compartida) sí que és general; la recepta, no. Amb la idea de fons, el cub es fa de cap: dues cares que comparteixen una aresta hi són perpendiculars, o sigui 90°. Els altres dos surten arccos(−1/√5) ≈ 116,57° per al dodecàedre i arccos(−√5/3) ≈ 138,19° per a l'icosàedre.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta suma de 180° entre l'angle diedre del tetràedre i el de l'octàedre no és casualitat — és exactament el que fa possible omplir l'espai alternant-ne, que és el que es pregunta a continuació.",
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
      "ca": "L'enunciat també et demana si hi ha ALTRES maneres de folrar l'espai, i n'hi ha una de molt més senzilla que aquesta: el cub. El seu angle diedre fa 90°, i 360/90 = 4 exactes, o sigui que quatre cubs es tanquen al voltant de cada aresta sense necessitar cap company.\n\nDe fet, si passes pel mateix filtre els cinc angles diedres de q81, veuràs que el cub és l'únic poliedre regular que ho aconsegueix tot sol: 360/70,53 = 5,10 (tetràedre), 360/90 = 4 (cub), 360/109,47 = 3,29 (octàedre), 360/116,57 = 3,09 (dodecàedre), 360/138,19 = 2,60 (icosàedre). Només el cub dona un enter. Per això el tetràedre necessita l'octàedre: sol no hi arriba, i la parella tetràedre+octàedre és la manera de tapar el forat que li queda.\n\nI aquí hi ha la diferència de debò amb el pla: a q03 hi havia TRES polígons regulars que folraven tots sols (triangle, quadrat, hexàgon), i a l'espai n'hi ha un de sol.",
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
          "ca": "El triangle rectangle té hipotenusa 2, un catet 1 (la meitat del costat que has partit), i l'altre catet per Pitàgores. Que aquest triangle sigui rectangle de veritat —és a dir, que la línia que has traçat caigui perpendicular al costat oposat— no és cosa del dibuix: és el que es demostra a q01 (pista 1), amb dos triangles congruents pels tres costats. I ara vigila amb quin dels dos angles aguts és el de 60°, que és exactament on es perd tothom. El vèrtex DES D'ON has partit el triangle ja no en té 60°: el tall li ha partit l'angle per la meitat i n'hi ha deixat 30°. El de 60° és el de l'altre extrem, un dels dos vèrtexs de la base, que el tall no ha tocat. Situa-t'hi i mira: quin catet hi és oposat, quin hi és contigu? (Si et surt sin60°=1/2 és que t'has posat al vèrtex equivocat i has trobat, sense voler, el sinus de 30°.)",
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
    "moviment": "homotecia",
    "movimentTitol": {
      "ca": "homotècia",
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
          "ca": "el 72° ja el tens dibuixat",
          "en": null
        },
        "text": {
          "ca": "No et cal cap angle intermedi: 72° és exactament l'angle de la BASE del triangle isòsceles de q33 —base 1, els altres dos costats φ, i 36° a la punta. Compte a no confondre'l amb els triangles A, B i C de q31, que són 36°-36°-108°: és l'avís que el mateix q33 et fa. Amb aquest triangle en tindràs prou per al sinus i el cosinus de 72°.",
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
          "ca": "L'alçada discontínua parteix l'angle de dalt (36°) exactament per la meitat — per això l'angle marcat val 18°. Quin costat i quin angle del triangle petit que en resulta ja coneixes?",
          "en": null
        },
        "figura": "fig-095.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "El triangle rectangle que et queda té hipotenusa φ i un catet 1/2 (la meitat de la base). A la base hi té l'angle de 72° (=90°−18°), i el catet de 1/2 hi és el CONTIGU: per tant cos72° = (1/2)/φ = 1/(2φ). L'altre catet és l'alçada; treu-la amb Pitàgores i divideix-la per φ, i tindràs sin72°. Compte amb la temptació de llegir-hi cos36° = φ/2: partir el triangle no et dona el cosinus del 36° de la punta —aquell angle ha quedat partit i ja no hi és— sinó el del 72° de la base, que és justament el que et demanen.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Amb φ≈1,618: cos72° = 1/(2φ) ≈ 0,309. I amb φ²=φ+1 (q33), 1/(2φ) és el mateix que (φ−1)/2 = 0,618/2 = 0,309 ✓. L'alçada val √(φ²−¼) = √(φ+¾) ≈ 1,539, i sin72° = 1,539/1,618 ≈ 0,951; en forma tancada, sin72° = √(φ+2)/2. Repassa-ho amb la calculadora: 0,309²+0,951² = 1,000 ✓.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquest mateix valor, sin72°≈0,951, és el que et dona l'àrea exacta d'un pentàgon regular a partir del radi R de la circumferència que el circumscriu: parteix-lo en cinc triangles iguals de costats R, R i angle 72° al centre; cada un fa ½R²·sin72° (q80), i el pentàgon sencer (5/2)R²·sin72° ≈ 2,378·R². Si en lloc del radi el que tens és el costat, la fórmula també és exacta, però ja no és sin72° el que hi surt.",
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
          "ca": "\"Insuficient\" es refuta amb un exemple: dos triangles diferents (no congruents) que comparteixin els dos costats i l'angle donats. Ara bé — compte, perquè aquí \"un angle\" vol dir un angle que no és l'angle entre els dos costats donats. Si ho fos, seria el criteri costat-angle-costat (SAS) que ja portes de classe, i aquell sí que determina el triangle. Aquesta distinció és tota la dificultat de la pregunta.",
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
      "ca": "Amb angle A = 30°, AB = 8 i BC = 5 no et cal cap fórmula nova. Deixa caure la perpendicular des de B fins al segon costat i digues-li H al peu: AH = 8·cos30° ≈ 6,93 i BH = 8·sin30° = 4. Com que BC = 5, Pitàgores al triangle BHC dona HC = √(5²−4²) = 3. Els dos talls del compàs són a 3 a banda i banda de H —H n'és el punt mitjà—, i per tant AC ≈ 6,93+3 = 9,93 o bé AC ≈ 6,93−3 = 3,93. Aquest \"±\" és l'ambigüitat, escrita. Amb l'angle comprès (SAS) no hi hauria cap arrel a treure i, per tant, cap ±.",
      "en": null
    },
    "iDespres": {
      "ca": "Els criteris clàssics de congruència són SSS, SAS, ASA i AAS (i, per als triangles rectangles, hipotenusa-catet). SSA no hi és, i aquesta pregunta n'és la raó. Però compte, que no falla sempre: si el radi del compàs supera el costat AB, un dels dos talls cau a l'altra banda del vèrtex i només en queda un de vàlid, i això passa sempre que l'angle donat és recte o obtús. El \"cas ambigu\" és, doncs, el d'angle agut amb el costat oposat més curt que l'adjacent conegut: aquell sí, i el retrobaràs cada vegada que resolguis un triangle amb el teorema del sinus. (AAA tampoc no determina un triangle, però per una raó ben diferent: et fixa la forma i no la mida — és semblança, q77, no congruència.)",
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
          "ca": "En un triangle ABC amb l'angle C obtús, deixa caure l'alçada des d'A fins a la RECTA que conté el costat CB. Compte: no des de C —aquella cau a dins i no et serveix de res. Com que C és obtús, el peu cau FORA del segment, passat C; digues-li H. Al triangle rectangle ACH, l'angle que hi queda a C és C' = 180°−C, que sí que és agut.",
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
          "ca": "Mira l'alçada AH dues vegades. Al triangle rectangle ACH: AH = b·sin(C'), amb b = CA. Al triangle rectangle ABH: AH = c·sin(B), amb c = AB —l'angle que hi ha a B és el mateix B del triangle original, perquè H és a la recta BC. Iguala-les: b/sin B = c/sin C'. Ara bé, el teorema del sinus demana b/sin B = c/sin C. Per tant no tens elecció: sin(C) := sin(C') = sin(180°−C) és l'ÚNICA definició que el salva. No és un caprici ni una convenció arbitrària —és el preu exacte de voler que la fórmula no s'hagi de partir en dos casos.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Triangle amb C=120°, a=CB=5, b=CA=4. L'alçada des d'A val 4·sin60°≈3,464 i el peu H cau 4·cos60°=2 més enllà de C, o sigui a 5+2=7 de B; Pitàgores dona c=√(7²+3,464²)=√61≈7,810. Ara els tres quocients: c/sin C = 7,810/0,866 ≈ 9,02; sin B = 3,464/7,810 ≈ 0,4435, i b/sin B = 4/0,4435 ≈ 9,02; i amb l'alçada des de B (5·sin60°≈4,330), sin A ≈ 4,330/7,810 ≈ 0,5544 i a/sin A = 5/0,5544 ≈ 9,02. Els tres donen el mateix ✓. De propina, A≈33,7°, B≈26,3° i 33,7+26,3+120 = 180 ✓.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta mateixa construcció (l'alçada que cau fora, l'angle suplementari C') és la que fa servir q79 per generalitzar Pitàgores als triangles amb un angle obtús. El cosinus demana el mateix tracte, però amb una diferència de signe que val la pena entendre: la definició que fa que la fórmula de q79 s'escrigui com una de sola, c² = a²+b²−2ab·cos C, és cos(C) := −cos(180°−C). Per què el sinus no porta el menys i el cosinus sí? Perquè l'alçada és una longitud i no canvia de banda quan C passa de 90°, mentre que la projecció sobre la base sí que ho fa.",
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
          "ca": "Triangle isòsceles, dos costats de longitud 1, angle 2θ entre ells. Calcula'n l'àrea de dues maneres: (a) amb la fórmula de q80, \"meitat del producte de dos costats pel sinus de l'angle entre ells\", i (b) partint-lo per la meitat amb l'alçada des del vèrtex, que en dona dos triangles rectangles d'angle θ. Fixa't que són dues alçades diferents —la de (a) surt d'un vèrtex de la base, la de (b) de la punta—; si fossin la mateixa, igualar-les no diria res.",
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
          "ca": "Per a sin(2θ): iguala les dues àrees de la Pista 1. Per a cos(2θ) no et cal cap teorema nou —i compte, perquè el teorema del cosinus encara no el tens en la forma que et faria falta: q79 només en demostra el cas de l'angle obtús. Fes-ho amb q84. Com que 2θ és agut (θ<45°), cos(2θ) és l'arrel POSITIVA de 1−sin²(2θ). Substitueix-hi el sin(2θ) que acabes de trobar, torna a fer servir cos²θ = 1−sin²θ per deixar-ho tot en sinθ, i mira bé el que et queda sota l'arrel: és un quadrat perfecte.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "θ=37°: sin(74°)≈0,961, i 2·sin37°·cos37°≈2(0,602)(0,799) ≈0,961 ✓. El quadrat perfecte, escrivint s=sinθ: 1−(2s√(1−s²))² = 1−4s²+4s⁴ = (1−2s²)². Amb s=sin37°≈0,602: 1−2(0,362) ≈ 0,276, i cos(74°)≈0,276 ✓.",
      "en": null
    },
    "iDespres": {
      "ca": "Fixa't fins on arriba l'argument: cal θ<45°, i no per cap tecnicisme sinó perquè és el que et permet triar l'arrel positiva. Si 2θ passa de 90° les dues fórmules continuen valent, però abans cal decidir què vol dir el cosinus d'un angle obtús —la mateixa feina que q87 fa amb el sinus, i la resposta és la germana amb el signe canviat, cos(C) := −cos(180°−C). Comprova-ho: amb θ=60°, 1−2sin²60° = −0,5, i cos120° = −0,5.",
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
          "ca": "Aquest és un dels resultats clàssics de la geometria elemental que costa més de demostrar del que sembla a primer cop d'ull (es coneix com el teorema de Steiner–Lehmus). Abans de saber-ho: la teva intuïció probablement et diu que sí, és isòsceles. Aquesta vegada la intuïció encerta —però val la pena que notis que no és evident per què, i que un argument ràpid del tipus \"és simètric, doncs...\" no n'és una demostració vàlida.",
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
          "ca": "Si el triangle ja fos isòsceles, és fàcil veure per simetria que les dues bisectrius (dels dos angles iguals) fan la mateixa longitud —aquest sentit és senzill. Aquí et demanen l'altre sentit: si les dues bisectrius surten iguals, has de deduir que el triangle era isòsceles. Aquesta implicació inversa és la que necessita una demostració real. Contra el que se sol dir d'aquest teorema, amb el que ja tens al quadern la pots fer sencera: només et calen la fórmula de la longitud d'una bisectriu i una observació sobre quan una fracció creix.",
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
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Primer, la longitud de la bisectriu des de B. Parteix el triangle en dos amb aquesta bisectriu i escriu-ne l'àrea de dues maneres (q80): l'àrea sencera és ½·a·c·sin B, i les dues meitats fan ½·c·t·sin(B/2) + ½·a·t·sin(B/2), on t és la bisectriu i a, c els dos costats que es troben a B. Iguala, fes servir sin B = 2·sin(B/2)·cos(B/2) (q88) i aïlla:\n\nt_B = 2ac·cos(B/2) / (a+c).\n\nAra suposa que el triangle no és isòsceles, per exemple b > c. Se'n segueixen dues coses, i totes dues empenyen en la mateixa direcció. Una: a costat més gran, angle oposat més gran, o sigui B > C, i per tant cos(B/2) < cos(C/2), perquè tots dos mig-angles són aguts i el cosinus hi decreix. L'altra: escriu la fracció al revés, (a+c)/(2ac) = 1/(2c) + 1/(2a), i veuràs que 2ac/(a+c) creix quan creix qualsevol dels dos costats; com que b > c, això fa 2ab/(a+b) > 2ac/(a+c). Multiplica les dues desigualtats i et surt t_C > t_B. O sigui que si les bisectrius són iguals, b > c és impossible; per simetria, c > b també; i només queda b = c.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Triangle de costats a=5, b=6, c=7 (a oposat a A, i així els altres). Els angles surten A≈44,42°, B≈57,12°, C≈78,46°, que sumen 180 ✓. Bisectriu des de B: t_B = 2·5·7·cos(28,56°)/(5+7) = 70·0,8783/12 ≈ 5,124. Bisectriu des de C: t_C = 2·5·6·cos(39,23°)/(5+6) = 60·0,7744/11 ≈ 4,225. Diferents, com havien de ser. I fixa't que van en l'ordre que diu la demostració: c=7 > b=6, i efectivament t_B > t_C.",
      "en": null
    },
    "iDespres": {
      "ca": "Val la pena saber per què aquest teorema té fama de difícil, ara que ja l'has demostrat. Totes les demostracions conegudes, inclosa aquesta, són indirectes: suposen que el triangle no és isòsceles i n'arriben a una contradicció. Des del segle XIX es busca una demostració directa —que construeixi la igualtat dels dos costats a partir de la de les bisectrius, sense passar per la negació— i no n'hi ha cap que tingui consens que ho sigui de debò. Que un enunciat tan simple resisteixi això és més interessant que la demostració mateixa.",
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
          "ca": "Els dos triangles comparteixen la diagonal. Els angles que queden als altres dos vèrtexs, un a cada triangle, són angles oposats del quadrilàter, i per estar inscrit en un cercle sumen 180°. Aquest fet —els angles oposats d'un quadrilàter cíclic sumen sempre 180°— és la hipòtesi \"inscrit en un cercle\" convertida en una dada sobre angles, i és tota la feina que fa aquí la circumferència. Si no l'has vist mai demostrat, surt en dues línies de l'angle inscrit de q42: cada angle del quadrilàter val la meitat de l'arc oposat, i els dos arcs oposats fan junts la circumferència sencera.",
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
          "ca": "Els dos angles marcats (a banda i banda de la diagonal): quina relació ja saps que els lliga, per estar inscrits en el mateix cercle?",
          "en": null
        },
        "figura": "fig-098.png"
      },
      {
        "nivell": 3,
        "titol": {
          "ca": "tanca-ho",
          "en": null
        },
        "text": {
          "ca": "Escriu la diagonal al quadrat de dues maneres (teorema del cosinus de q79, un cop a cada triangle) i iguala-les: com que els dos angles són suplementaris els cosinus són oposats, i te'n surt cos B tot sol. Suma després les dues àrees (q80, mig producte de costats pel sinus). Aquí ve la part que sol quedar per fer, i és tota la pregunta, així que no la saltis: posa-hi noms curts, K = ab+cd i M = a²+b²−c²−d², i comprova que cos B = M/(2K) i que l'àrea val ½K·sin B. Eleva-la al quadrat i fes servir sin² = 1−cos² (q84): et queda 16A² = 4K² − M². Això és una diferència de quadrats, i és l'únic pas realment ingeniós de la demostració: 16A² = (2K+M)(2K−M). Desenvolupa cada parèntesi i mira si el reconeixes — un et donarà (a+b)²−(c−d)² i l'altre (c+d)²−(a−b)², que són dues diferències de quadrats més. En surten quatre factors i cadascun val 2s menys un costat.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Costats 2, 3, 4, 5: s=7, i la fórmula dona A = √[(7−2)(7−3)(7−4)(7−5)] = √(5·4·3·2) = √120 ≈ 10,95. Refés-ho pel camí llarg per comprovar que la teva àlgebra és bona: K = 2·3+4·5 = 26, M = 4+9−16−25 = −28, i 16A² = 4·26² − 28² = 2704 − 784 = 1920, o sigui A² = 120 ✓. De passada, cos B = −28/52 ≈ −0,538, que vol dir B ≈ 122,6°: un angle obtús, i per això et calia q79 sencera i no només el cas agut.",
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
          "ca": "Una fórmula per al factor pel qual s'allarga o s'escurça una longitud quan es projecta perpendicularment d'un pla a un altre. Però abans que res, compte amb la paraula \"factor\": aquí no n'hi ha un de sol. La primera feina és descobrir de què depèn, a part de l'angle entre els plans.",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "prova-ho amb un cas fàcil, i després amb un altre",
          "en": null
        },
        "text": {
          "ca": "Si els dos plans coincideixen (angle 0°), cap longitud canvia: factor 1. Si el pla girés fins quedar perpendicular a l'altre (angle 90°), un segment que hi fos perpendicular es projectaria a un sol punt: factor 0. Quina funció trigonomètrica val 1 a 0° i 0 a 90°?\n\nAra la pregunta incòmoda, amb els plans a 90°: què li passa a un segment que estigui damunt de la recta on els dos plans es tallen? Aquella recta és als dos plans alhora, i per tant el segment no es mou gens: factor 1, no 0. Dos segments de la mateixa longitud, dins del mateix pla, amb factors diferents.",
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
          "ca": "Per al segment del dibuix —el perpendicular a la recta de tall— el segment, la seva projecció i el tros de pla entre tots dos formen un triangle rectangle: la hipotenusa és el segment original, un catet és la projecció, i l'angle entre els plans és exactament l'angle d'aquest triangle que toca el segment original. La raó entre catet i hipotenusa et dona el factor cos θ, i aquest és el més petit de tots.\n\nAmb això ja pots descriure què fa la projecció a qualsevol figura: encongeix per un factor cos θ en la direcció perpendicular a la recta de tall, i no toca res en la direcció de la recta de tall. És un estirament, doncs, amb dos factors diferents segons la direcció —el mateix tipus de transformació que trobaràs a q112. Un segment en qualsevol altra direcció queda entremig, entre cos θ i 1.\n\nI encara hi ha un número que sí que és el mateix per a tothom: l'àrea. Si el rectangle que projectes té un costat en cada una d'aquestes dues direccions, un costat es queda igual i l'altre es multiplica per cos θ, o sigui que l'àrea es multiplica exactament per cos θ, sigui quina sigui la figura. Això sí que és un factor únic.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Angle entre plans de 60°. Un segment de 8 unitats perpendicular a la recta de tall es projecta a 8×cos60° = 4 unitats. Un segment de 8 unitats damunt de la recta de tall es projecta a 8: no canvia. I un de 8 a 45° de la recta de tall es projecta a 6,32 —entremig, com havia de ser. L'àrea, en canvi, sempre queda multiplicada per 0,5.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquí tens la comprovació de tot plegat: una moneda circular, vista de gairebé de cantell, es veu com una el·lipse molt aixafada, i la relació entre els dos eixos de l'el·lipse és exactament aquest cosinus. Que es vegi el·lipse i no cercle petit és la prova que el factor no és el mateix en totes direccions: si ho fos, un cercle donaria sempre un cercle.",
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
          "ca": "Una resposta de NO, amb un exemple concret de projecció que NO sigui una homotècia (és a dir, que no multipliqui totes les longituds pel mateix factor constant).",
          "en": null
        },
        "figura": null
      },
      {
        "nivell": 1,
        "titol": {
          "ca": "hi ha dues maneres de fallar, i q91 ja et va ensenyar la primera",
          "en": null
        },
        "text": {
          "ca": "A q91 vas veure que fins i tot la projecció perpendicular entre dos plans inclinats deixa una direcció intacta i n'encongeix una altra per cos θ: ja no és cap homotècia. O sigui que la resposta és no abans i tot de canviar de direcció de projecció.\n\nLa segona manera és pitjor, i val la pena veure-la perquè és de naturalesa diferent. Què passa si les línies de projecció, en lloc de ser paral·leles entre si, passen totes per un sol punt fix —una \"làmpada\"?",
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
          "ca": "En una projecció central, l'ombra d'un segment paral·lel a la pantalla s'amplia pel factor (distància de la làmpada a la pantalla) dividit per (distància de la làmpada al segment). O sigui que com més a prop de la làmpada, més gran surt l'ombra —és el que fas amb la mà quan vols que l'ombra ompli la paret. Si el pla de partida està inclinat, els seus punts són a distàncies diferents de la làmpada i cada tros s'amplia pel seu compte.\n\nFixa't en la diferència amb q91: allà el factor depenia de la direcció del segment i era el mateix a tot arreu de la figura; aquí depèn d'on és el segment. Dues maneres distintes de no ser una homotècia.\n\nI ja que hi ets, mira on és de veritat la frontera. No és en si les línies de projecció són paral·leles o no: és en si els dos plans ho són. Amb els plans paral·lels, tant l'una com l'altra donen una homotècia de debò —q100 en calcula el factor. Amb els plans inclinats, cap de les dues.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Làmpada, pantalla a 12 unitats, i dos segments iguals paral·lels a la pantalla, un a distància 2 de la làmpada i l'altre a distància 6. Factors: 12/2 = 6 i 12/6 = 2. El de més a prop surt tres vegades més gran, no més petit. Cap factor únic, doncs, cap homotècia.",
      "en": null
    },
    "iDespres": {
      "ca": "Aquesta distinció —el que decideix si una projecció és una homotècia o no— és exactament la diferència entre un plànol arquitectònic i una fotografia. Compte a no resumir-ho malament: no és que la projecció paral·lela sigui sempre una homotècia (q91 ja et va ensenyar que entre plans inclinats no ho és); el que passa és que un plànol es dibuixa amb els dos plans paral·lels, i llavors sí, i és la raó per la qual les línies paral·leles d'una via de tren semblen convergir en una fotografia (q104) però no en un plànol.",
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
          "ca": "Igual que en un cercle —és el que vas demostrar a q95—, el radi que va del centre al punt de tangència és perpendicular a la recta tangent en aquell punt. En tres dimensions continua valent, i per la mateixa raó: T és el punt de la recta tangent més proper a O, i el segment més curt d'un punt a una recta hi és perpendicular. Amb el centre O, el punt exterior P, i un punt de tangència T qualsevol: quin angle té el triangle OPT al vèrtex T?",
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
      "ca": "El mateix argument, amb el mateix triangle rectangle, val paraula per paraula per a les dues tangents des d'un punt a un cercle en 2D; el quadern no t'ho ha demanat mai com a qüestió a part, però ja veus que és el mateix teorema una dimensió més avall. En passar a tres dimensions no canvia res essencial: només cal veure que O, P i T són sempre tres punts no alineats —ho són, perquè l'angle a T és recte i el triangle no pot degenerar— i que per tant hi ha un pla que els conté, dins del qual tot passa com al pla de sempre.\n\nFixa't també en el que això vol dir de la figura sencera: els punts de tangència no estan escampats de qualsevol manera, sinó tots a la mateixa distància de P i tots a la mateixa distància d'O. Formen, doncs, una circumferència.",
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
          "ca": "Baixa la perpendicular des del centre O fins a la recta i mira on cau el peu. Compte, que aquí hi ha tres punts i és fàcil confondre'ls: hi ha P (el punt on suposes que la recta toca el cercle), hi ha el peu de la perpendicular —el de l'angle recte, que no està etiquetat— i hi ha P′. Si el radi OP no fos perpendicular a la recta, el peu no cauria damunt de P. Amb el compàs, o comptant quadrets, marca damunt de la recta el punt que és a l'altra banda del peu i a la mateixa distància que P: aquest és P′.",
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
          "ca": "Quant fa OP′? (Les marquetes t'ho diuen.) Mira per què: els dos triangles que el peu de la perpendicular ha creat tenen un angle recte allà, comparteixen el segment que va d'O al peu, i tenen els altres dos catets iguals perquè així has triat P′ —o sigui que són iguals i OP′ fa exactament el mateix que OP, un radi. Per tant, P′ és al cercle? És a la recta? És diferent de P? I què deia exactament la teva definició de tangent?\n\n(No confonguis P′ amb el peu de la perpendicular. El peu és a distància menor que el radi —la perpendicular és sempre el camí més curt del centre a la recta— i per tant queda a dins del cercle, no damunt. El que és al cercle és P′.)",
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
      "ca": "Fixa't que la construcció d'aquí ja és una reflexió: P′ és el reflex de P respecte del peu de la perpendicular, i és per això que els dos segments fins a O fan el mateix. A q96 retrobaràs la mateixa idea fent una feina completament diferent: camins mínims. I ja pots mirar enrere: de les preguntes que ja portes, quantes has resolt afegint una línia? Aquesta és, de moment, la teva eina principal.",
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
      "ca": "q97 posa dues rectes paral·leles: el mateix truc, aplicat dues vegades. I ara torna a la figura del llibre, que és una el·lipse amb els seus dos focus. El pas que hi falta és aquest: la tangent toca l'el·lipse només al punt T, i tots els altres punts de la tangent queden fora de l'el·lipse; i si un punt és fora, la suma de distàncies als dos focus és més gran que la de l'el·lipse (que val 2a, q98). O sigui que T és, sobre aquella recta, el punt que fa mínima la suma —i llavors això que acabes de demostrar diu que els dos angles amb la tangent són iguals. D'aquí surt que una bola llançada des d'un focus d'una taula de billar el·líptica passi sempre per l'altre.",
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
          "ca": "Amb A′ (reflex d'A respecte de la recta de dalt) i B′ (reflex de B respecte de la recta de baix), tries dos punts de contacte qualssevol P (a dalt) i Q (a baix). Per la reflexió, AP fa el mateix que A′P, i QB fa el mateix que QB′: el camí A→P→Q→B fa sempre la mateixa longitud que el camí A′→P→Q→B′, triïs on triïs P i Q. Aquesta és la part que val per a qualsevol elecció.\n\nAra mira el camí A′→P→Q→B′: va d'A′ a B′ passant per dos punts pel mig. Cap camí així pot ser més curt que el segment recte A′B′, i només fa exactament A′B′ quan P i Q cauen damunt d'aquest segment. Per tant els punts de contacte que busques són els dos punts on el segment A′B′ creua les dues rectes, i la longitud mínima és exactament A′B′.\n\nUna cosa més abans de donar-ho per tancat: has decidit tocar primer la recta de dalt i després la de baix. També podries fer-ho a l'inrevés, i aleshores els reflexos serien uns altres (A respecte de la de baix, B respecte de la de dalt) i et donarien un altre número. Són dos problemes diferents, i el més curt de tots dos és la resposta. Val la pena que provis les dues i miris qui guanya —i que pensis quina característica d'A i de B ho decideix.",
          "en": null
        },
        "figura": null
      }
    ],
    "comprovacio": {
      "ca": "Rectes y=6 (dalt) i y=0 (baix). A=(1,4), B=(9,1). Reflectint: A′=(1,8), B′=(9,−1). La distància A′B′ (i per tant la longitud del camí òptim) és √145 ≈ 12,042, amb els contactes a (2,78 · 6) i (8,11 · 0). Compara-ho amb un camí \"a ull\" que toqui totes dues rectes a x=4: aquest surt ≈ 14,705 — més llarg, com havia de ser. I ara l'altre ordre, tocant primer la de baix: A″=(1,−4), B″=(9,11), i la distància surt exactament 17. Molt pitjor. Aquí A és a prop de la recta de dalt i B a prop de la de baix, i per això convé anar-hi en aquest ordre; si fos al revés, guanyaria l'altre.",
      "en": null
    },
    "iDespres": {
      "ca": "Si en lloc de dues rectes tinguessis un triangle sencer (tres costats) i volguessis el camí tancat més curt que toqués els tres, la mateixa idea —reflectir, un cop per cada costat— hi funciona, encara que amb tres reflexions en cadena en lloc de dues. I com ja t'anunciava q96: la propietat de reflexió d'una el·lipse és aquesta mateixa idea mirada des d'una corba en lloc de dues rectes. Compte, però, que el que et dona q98 és la definició de l'el·lipse per suma de distàncies, no la propietat de reflexió; per arribar-hi cal el pas de q96, que la tangent només toca l'el·lipse en un punt i per tant és allà on la suma es fa mínima.",
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
      "ca": "Punxons a (−3,0) i (3,0), fil de longitud 10. Al punt (0,4): distàncies 5 i 5, sumen 10. Al punt (5,0) (un extrem de l'el·lipse): distàncies 8 i 2, sumen també 10.\n\nI una comprovació que no és de números: què passaria si el fil fos més curt que la distància entre els dos punxons? Que no el podries tensar enlloc, i no dibuixaries res. I si fes exactament aquella distància? Que el llapis només podria anar amunt i avall del segment que els uneix: l'\"el·lipse\" et quedaria aixafada fins a ser un segment. O sigui que el mètode demana fil més llarg que la separació dels punxons, i com més marge li donis, més rodona et sortirà.",
      "en": null
    },
    "iDespres": {
      "ca": "Guarda aquest fet, perquè quan arribis a q96 i q97 (reflectir converteix un camí trencat en un de recte) el podràs ajuntar amb aquells i en sortirà una cosa bonica: que una bola de billar llançada des d'un focus d'una taula el·líptica passa sempre per l'altre focus, sigui quin sigui l'angle de sortida. Aquí encara no ho pots demostrar —el fil només et dona la suma constant, no els angles.",
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
      "ca": "Aquest fet —que la raó doble sobrevisca la projecció mentre que distàncies i raons simples no ho fan— és la base de tot el que ve després en aquest bloc: q101 el reformula com una pregunta sobre quants punts es poden moure lliurement. I ja li pots posar el nom que li correspon: una quantitat que sobreviu qualsevol projecció és un invariant projectiu, i la raó doble és el primer que trobes.",
      "en": null
    }
  }
};
