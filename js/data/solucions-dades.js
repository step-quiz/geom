/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/data/solucions-dades.js
  ROL:          Text pla de les solucions de solucions/qNN.html, perquè
                eina-frases.html pugui ensenyar la solució al costat de la
                guia sense obrir cap altre fitxer. Variable GLOBAL
                window.SOLUCIONS, no un .json amb fetch(): mateix motiu que
                preguntes-dades.js i guies-dades.js — el lloc s'ha de poder
                obrir per doble clic sobre file://, on fetch() queda
                bloquejat per CORS.

  GENERAT AUTOMÀTICAMENT — NO L'EDITIS A MÀ.
  La font són els fitxers de solucions/. Per refer-lo:

      python3 genera-solucions-dades.py

  QUI EL LLEGEIX
  Només eina-frases.html, i de manera OPCIONAL: si aquest fitxer no hi és,
  l'eina funciona igual i només s'hi perd el bloc "Solució publicada".
  index.html i js/ui/*.js no el carreguen ni el necessiten.

  QUÈ N'HI HA I QUÈ NO
  Només el text llegible: títol de cada pas, paràgrafs, peus de figura i el
  resum final. Res de marques HTML, perquè l'eina ho pinta tot amb
  textContent. Els <em>/<strong> del text original s'hi perden a posta: aquí
  serveixen per COMPARAR amb la guia, no per rellegir la solució maquetada.
*/
window.SOLUCIONS = {
  "q01": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "L'enunciat només demana trobar el punt marcat: el centre del triangle equilàter. Però \"trobar-lo\" de manera honesta vol dir explicar per què existeix un únic punt que mereix aquest nom — per què, si tracem les tres medianes (el segment de cada vèrtex al punt mitjà del costat oposat), les tres passen exactament pel mateix lloc, en comptes de formar un petit triangle al mig, que és el que passaria en un triangle qualsevol una mica menys simètric."
        ],
        "titol": "Què hem de demostrar"
      },
      {
        "figures": [
          {
            "peu": "En negre, el triangle equilàter; en vermell, les tres medianes traçades des de cada vèrtex fins al punt mitjà del costat oposat.",
            "src": "assets/img/pistes/fig-034.png"
          }
        ],
        "textos": [
          "Comencem per una sola mediana, la que surt del vèrtex superior A cap al punt mitjà M del costat oposat BC. Els triangles ABM i ACM tenen: el costat AB igual a AC (el triangle és equilàter), el costat BM igual a MC (perquè M és el punt mitjà) i el costat AM compartit pels dos. Els tres costats coincideixen d'un triangle a l'altre — pel criteri costat-costat-costat, ABM i ACM són triangles idèntics (congruents).",
          "D'aquí surt una conseqüència que farem servir tot seguit: com que els dos triangles són idèntics, els angles que formen a M també ho són — i com que junts sumen un angle pla (180°), cadascun ha de fer exactament 90°. La mediana des d'A no només arriba al punt mitjà del costat oposat: hi arriba perpendicularment. És, alhora, l'altura des d'A i l'eix de simetria que intercanvia B amb C deixant tot el triangle igual."
        ],
        "titol": "Una mediana és també un eix de simetria"
      },
      {
        "figures": [],
        "textos": [
          "El mateix argument val, sense canviar ni una lletra, per a les medianes des de B i des de C: cadascuna és, també, eix de simetria del triangle. Però amb això encara no n'hi ha prou. Que cadascuna de les tres rectes sigui un eix de simetria no diu res sobre si es tallen totes en un mateix lloc: tres rectes qualssevol es tallen, normalment, en tres punts diferents i deixen un petit triangle al mig. Cal un argument per a la concurrència.",
          "L'argument és curt. Prenem la mediana des d'A i fem-ne un mirall: reflectir el triangle en aquesta recta l'envia exactament sobre ell mateix i intercanvia B amb C. Per tant intercanvia també la mediana des de B amb la mediana des de C. Ara bé, si aquestes dues rectes s'intercanvien, el seu punt de tall —anomenem-lo P— no es pot moure: la reflexió l'ha de deixar on és. I els únics punts que una reflexió deixa quiets són els de l'eix mateix. Conclusió: P és damunt de la mediana des d'A. És a dir, la tercera mediana passa pel punt on es tallen les altres dues.",
          "Aquest és el punt que l'enunciat demana marcar: el baricentre (o centre) del triangle equilàter, intersecció simultània de les tres medianes, de les tres altures i de les tres bisectrius, perquè en aquest triangle particular totes tres famílies de línies coincideixen. Un avís de vocabulari: aquest punt no és un «centre de simetria» en el sentit habitual —el triangle equilàter no té simetria central: no coincideix amb ell mateix en girar-lo 180°. És el centre dels seus tres eixos de simetria i del gir de 120°, que és una altra cosa."
        ],
        "titol": "Per què les tres es troben en un sol punt"
      }
    ],
    "resum": "Les tres medianes d'un triangle equilàter es tallen en un únic punt —el centre— perquè cadascuna és alhora eix de simetria del triangle: reflectint per una d'elles, les altres dues s'intercanvien, i el seu punt de tall, que no es pot moure, ha de caure damunt de l'eix. En aquest triangle, i només en aquest, medianes, altures i bisectrius són les mateixes tres línies.",
    "titol": "El centre del triangle equilàter"
  },
  "q02": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "No n'hi ha prou a comprovar que dos dels quatre triangles petits coincideixen: cal un sol argument que valgui alhora per als quatre, sense haver-ne de tractar cap parell com a cas especial."
        ],
        "titol": "Què hem de demostrar"
      },
      {
        "figures": [],
        "textos": [
          "Cada línia que subdivideix el triangle gran uneix els punts mitjans de dos dels seus costats. Aquest tipus de segment té una propietat coneguda —el teorema del segment mitjà—: és paral·lel al tercer costat del triangle i en fa exactament la meitat de llarg. Aplicant-ho als tres costats nous alhora, ja sabem la mida completa de tots els triangles petits sense mesurar-hi res directament: cadascun té per costats la meitat de cadascun dels tres costats del triangle gran."
        ],
        "titol": "La mida de cada costat nou, sense mesurar res"
      },
      {
        "figures": [
          {
            "peu": "El mateix argument aplicat a un triangle equilàter (esquerra) i a un d'escalè (dreta): els tres segments interiors continuen sent, en tots dos casos, la meitat dels costats del triangle gran.",
            "src": "assets/img/pistes/fig-035.png"
          }
        ],
        "textos": [
          "Perquè l'argument sigui realment general —i no un efecte casual de la simetria d'un triangle equilàter— cal comprovar-lo també en un triangle qualsevol, sense cap costat ni angle repetit. El mateix teorema del segment mitjà s'aplica exactament igual, costat per costat, sense necessitar cap propietat addicional del triangle de partida."
        ],
        "titol": "Que no depengui de cap simetria"
      },
      {
        "figures": [],
        "textos": [
          "Aquí hi ha un pas que sembla innocent i no ho és, i val la pena fer-lo a poc a poc. Que els costats d'un triangle petit siguin la meitat dels del gran no el fa congruent amb el gran: el fa semblant, de raó 1/2. La congruència que busquem és una altra, i ja la tenim a la mà. Si els costats del triangle gran són a, b i c, cadascun dels quatre triangles petits té per costats exactament a/2, b/2 i c/2 — els mateixos tres números per a tots quatre. I tenir els tres costats iguals dos a dos és precisament el criteri costat-costat-costat (SSS): per tant els quatre triangles petits són congruents entre ells. Que a més siguin tots semblants al gran, de raó 1/2, és un fet diferent i complementari, no el mateix dit d'una altra manera."
        ],
        "titol": "Tancar-ho amb el criteri costat-costat-costat"
      },
      {
        "figures": [],
        "textos": [
          "Amb un triangle de costats 6, 8 i 10: cada triangle petit té costats 3, 4 i 5 —i per tant és rectangle (3²+4²=5²). El gran també ho és (6²+8²=10²), i no podria ser d'una altra manera: els petits en són còpies a escala 1/2, i canviar l'escala no canvia cap angle."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Sí, els quatre triangles són idèntics: el teorema del segment mitjà garanteix que tots quatre tenen els mateixos tres costats —a/2, b/2 i c/2, la meitat dels del triangle gran— i el criteri costat-costat-costat en tanca la congruència entre ells. Respecte del triangle gran, en canvi, no són congruents sinó semblants, de raó 1/2.",
    "titol": "Quatre triangles, un sol argument"
  },
  "q03": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "A cada punt on es toquen diversos polígons d'un mosaic, els seus angles interiors s'hi han d'ajuntar sumant exactament 360°: ni menys —hi quedaria un buit obert— ni més —se sobreposarien uns polígons amb els altres. La pregunta \"quants dissenys simètrics hi ha\" es converteix, doncs, en una de comptar: quines combinacions de polígons regulars, sumant els seus angles interiors, arriben a exactament 360°?"
        ],
        "titol": "Què vol dir \"encaixar\" en un mosaic"
      },
      {
        "figures": [
          {
            "peu": "L'angle interior d'un hexàgon regular: 120°.",
            "src": "assets/img/pistes/fig-179.png"
          }
        ],
        "textos": [
          "Un hexàgon regular té un angle interior de 120°. Tres hexàgons ajuntats en un mateix vèrtex sumen 3×120°=360°: tanquen exactament, sense buit ni sobreposició —el patró clàssic del rusc d'abelles. En canvi, dos hexàgons més un quadrat (90°) sumen 120+120+90=330°: hi queda una escletxa oberta de 30° que cap polígon regular hi encaixa."
        ],
        "titol": "Provar-ho amb el cas més senzill"
      },
      {
        "figures": [
          {
            "peu": "Esquerra: tres hexàgons tanquen exactament (120+120+120=360°). Dreta: dos hexàgons i un quadrat deixen 30° oberts (120+120+90=330°) —una roseta que no tanca.",
            "src": "assets/img/pistes/fig-069.png"
          }
        ],
        "textos": [
          "Repetint el mateix comptatge per a cada polígon regular, i buscant sempre la suma exacta de 360°: amb triangles (60°) en calen exactament 6. Amb quadrats (90°), exactament 4. Amb pentàgons (108°), 3 en fan 324° —no arriben— i 4 en farien 432° —s'hi passen—, de manera que cap nombre de pentàgons no tanca. Amb hexàgons (120°), exactament 3. Amb heptàgons (≈128,57°) i amb qualsevol polígon de més costats, 2 còpies no arriben i 3 ja se n'excedeixen: cap d'aquests polígons no pot tapissar el pla ell sol.",
          "Val la pena aturar-se en un error fàcil de cometre. 3, 4 o 5 triangles equilàters fan 180°, 240° i 300°, i cap d'aquestes configuracions no serveix per a un mosaic: hi deixen un buit obert. Les sumes per sota de 360° són la condició d'una altra pregunta —la dels poliedres regulars, q08b— on justament cal que sobri angle perquè la figura s'aixequi cap a la tercera dimensió. Aquí, al pla, tot allò que no siguin 360° exactes deixa un forat.",
          "Si es permet barrejar polígons diferents en un mateix vèrtex, la llista creix, però continua sent finita: hi ha exactament 17 combinacions de polígons regulars els angles de les quals sumen 360°. Unes quantes són fàcils de trobar provant: un quadrat i dos octàgons (90+135+135), un triangle i dos dodecàgons (60+150+150), un quadrat, un hexàgon i un dodecàgon (90+120+150), dos triangles i dos hexàgons (60+60+120+120), tres triangles i dos quadrats (60+60+60+90+90). I n'hi ha de força exòtiques: un triangle, un heptàgon i un polígon de 42 costats sumen 60 + 900/7 + 7200/42 = 360° exactes. Cadascuna d'aquestes combinacions és una roseta vàlida: pot envoltar un únic vèrtex sense deixar-hi buit ni sobreposició."
        ],
        "titol": "Recórrer totes les combinacions possibles"
      },
      {
        "figures": [],
        "textos": [
          "Val la pena aturar-se a mirar amb precisió què s'ha demostrat. La condició dels 360° és una condició local, vàlida per a un sol vèrtex: diu quines rosetes de polígons poden existir al voltant d'un punt —i, sobretot, quines no poden existir de cap manera, perquè sumen menys o més de 360°. El que aquesta condició no diu és si, un cop tenim una roseta vàlida en un vèrtex, aquell mateix patró es pot continuar repetint fins a cobrir tot el pla sense encallar-se més enllà. Hi ha combinacions que tanquen perfectament en un primer vèrtex i que, en intentar estendre el mosaic al vèrtex veí, deixen de quadrar.",
          "Aquesta distinció —una roseta és possible en un vèrtex davant de un mosaic sencer existeix— és exactament la mateixa que ja apareixia a q08b amb els poliedres regulars (allà, angle menor que 360° perquè la figura s'aixequi cap a la tercera dimensió, no igual). La diferència és que, en aquell cas, cadascuna de les cinc rosetes que superaven el comptatge donava efectivament un sòlid real; aquí, en canvi, no totes hi arriben. De les 17 rosetes que tanquen, només 11 es poden estendre a un mosaic amb tots els vèrtexs iguals: les 3 d'un sol polígon (triangles, quadrats, hexàgons) i 8 de barrejades. La del triangle + heptàgon + polígon de 42 costats, per exemple, tanca perfectament el primer vèrtex i s'encalla immediatament al veí. Aquesta segona meitat no es resol comptant angles: cal dibuixar, vèrtex rere vèrtex."
        ],
        "titol": "El que aquest comptatge demostra, i el que no"
      },
      {
        "figures": [],
        "textos": [
          "Sis triangles: 6×60°=360° ✓. Quatre quadrats: 4×90°=360° ✓. Tres hexàgons: 3×120°=360° ✓. Tres pentàgons: 3×108°=324°, no arriba. El comptatge d'angles només confirma que aquestes rosetes són possibles en un vèrtex —no que el mosaic complet s'aconsegueixi estendre sense entrebancs pel pla."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Amb un sol tipus de polígon només n'hi ha tres: 6 triangles, 4 quadrats o 3 hexàgons per vèrtex. Si es permet barrejar-los, el comptatge d'angles a 360° dona 17 rosetes possibles al voltant d'un punt. Però aquesta condició és només local: de les 17, només 11 arriben a estendre's en un mosaic que cobreixi tot el pla amb tots els vèrtexs iguals. Saber quines exigeix dibuixar vèrtex rere vèrtex, no només sumar angles.",
    "titol": "Quantes rosetes de polígons regulars tanquen exactament"
  },
  "q04": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Cal distingir bé què es demana: no la suma de tots els angles interiors del polígon, sinó un angle sol —el d'un vèrtex qualsevol. Com que el polígon és regular, tots els vèrtexs tenen el mateix angle, de manera que calcular-ne un és calcular-los tots."
        ],
        "titol": "Un angle sol, no la suma de tots"
      },
      {
        "figures": [],
        "textos": [
          "Des d'un sol vèrtex d'un polígon de n costats es poden traçar diagonals cap a tots els altres vèrtexs excepte els dos veïns (que ja hi són units per un costat) i cap a ell mateix. Això divideix el polígon en un ventall de n−2 triangles —per exemple, un hexàgon (n=6) es divideix en 4 triangles, un enneàgon (n=9) en 7. Com que la suma dels angles interns de qualsevol triangle és 180°, la suma de tots els angles interiors del polígon és (n−2)×180°."
        ],
        "titol": "Primer, la suma de tots els angles"
      },
      {
        "figures": [
          {
            "peu": "El ventall de diagonals des d'un sol vèrtex divideix el polígon en n−2 triangles; l'arc en vermell marca l'angle complet d'aquell vèrtex, suma dels angles de tots els triangles que hi conflueixen.",
            "src": "assets/img/pistes/fig-054.png"
          }
        ],
        "textos": [
          "Aquesta suma (n−2)×180° és el total dels n angles del polígon junts. Com que el polígon és regular i tots els angles valen exactament el mateix, per trobar l'angle d'un sol vèrtex només cal dividir la suma entre n."
        ],
        "titol": "Repartir aquesta suma entre els n vèrtexs"
      },
      {
        "figures": [],
        "textos": [
          "L'angle d'un vèrtex d'un polígon regular de n costats és:",
          "angle = (n−2) × 180° / n",
          "Comprovant-ho amb els dos casos que ja es coneixen de memòria: per n=3 (triangle equilàter), (3−2)×180°/3 = 60°; per n=4 (quadrat), (4−2)×180°/4 = 90°. Tots dos coincideixen amb el valor conegut, confirmant la fórmula."
        ],
        "titol": "La fórmula, i la comprovació amb els casos coneguts"
      },
      {
        "figures": [],
        "textos": [
          "Hexàgon (n=6): (6−2)×180°/6 = 120°. Octàgon (n=8): (8−2)×180°/8 = 135°."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "L'angle d'un polígon regular de n costats és (n−2)×180°/n: es divideix el polígon en n−2 triangles des d'un sol vèrtex, se sumen els seus angles per obtenir la suma total, i es reparteix entre els n vèrtexs iguals.",
    "titol": "L'angle d'un polígon regular de n costats"
  },
  "q05": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una estrella de cinc puntes es dibuixa unint cada vèrtex d'un pentàgon regular amb el vèrtex següent-però-un, saltant-ne un cada vegada. La de vuit puntes del dibuix fa el mateix però saltant-ne dos cada vegada. Aquest \"quants vèrtexs es salten\" —no només el nombre de puntes— és el que determina l'angle de cada punta: dues estrelles amb el mateix nombre de puntes però un salt diferent tenen puntes de mides diferents."
        ],
        "titol": "\"Més puntes\" no és l'única variable"
      },
      {
        "figures": [],
        "textos": [
          "Totes les puntes de l'estrella són idèntiques per simetria, així que n'hi ha prou a analitzar-ne una. Cada punta és el vèrtex d'un triangle isòsceles: format per dos segments de l'estrella que hi conflueixen (les cames, iguals entre si) i, com a base, la corda que uneix els dos punts on aquests segments toquen la circumferència que passa per totes les puntes. L'angle que busquem és l'angle al vèrtex d'aquest triangle isòsceles."
        ],
        "titol": "Aïllar una sola punta"
      },
      {
        "figures": [
          {
            "peu": "L'arc marca l'angle a la punta; les ratlletes, les dues cames iguals de l'isòsceles; la corda discontínua és la base auxiliar que tanca el triangle.",
            "src": "assets/img/pistes/fig-048.png"
          }
        ],
        "textos": [
          "La corda que tanca el triangle isòsceles no és cap aresta de l'estrella —l'estrella només \"salta\" vèrtexs, mai en dibuixa el contorn del polígon original— és una construcció auxiliar que cal afegir per fer visible el triangle que conté l'angle de la punta. Un cop marcada, el mateix argument val per a totes les altres puntes sense haver de repetir el dibuix."
        ],
        "titol": "La construcció auxiliar que fa visible el triangle"
      },
      {
        "figures": [],
        "textos": [
          "Els n vèrtexs de l'estrella divideixen la circumferència que hi passa en n arcs iguals. Si l'estrella \"salta\" k−1 vèrtexs cada vegada (és a dir, uneix cada vèrtex amb el k-èsim següent), l'angle a la punta correspon a l'arc de circumferència que queda fora del triangle isòsceles —els arcs que els dos costats de la punta no cobreixen. Comptant quants d'aquests n arcs iguals hi ha entre els dos costats de cada punta, arribem a la fórmula: angle = 180° × (n − 2k) / n."
        ],
        "titol": "Comptar arcs de circumferència"
      },
      {
        "figures": [],
        "textos": [
          "Pentagrama (n=5, k=2): 180×(5−4)/5 = 36°. Estrella de vuit puntes com la del dibuix (n=8, k=3): 180×(8−6)/8 = 45°. La suma dels angles de totes les puntes no és cap coincidència: val n×180°×(n−2k)/n = 180°×(n−2k), o sigui 180° al pentagrama (5×36°) i 360° a l'estrella de vuit puntes (8×45°). Compte a no confondre aquesta suma amb el nombre de voltes que fa el traç abans de tancar-se, que és una altra cosa: aquest nombre és exactament k —dues voltes al pentagrama {5/2} i tres a l'estrella {8/3}—, i es calcula sumant els girs cap enfora, no els angles de les puntes (v. q07)."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "L'angle a la punta d'una estrella {n/k} (n puntes, saltant k−1 vèrtexs cada vegada) és 180°×(n−2k)/n. Surt d'aïllar el triangle isòsceles amagat a cada punta i comptar quants dels n arcs iguals de la circumferència circumscrita queden fora d'aquest triangle.",
    "titol": "L'angle a la punta d'una estrella regular"
  },
  "q06": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "A l'exercici d'on surt la fórmula (n−2)×180°/n, l'interès era quants triangles sortien d'un ventall de diagonals. Aquí la pregunta és diferent: mirar la mida de cadascun dels angles que es formen al vèrtex entre diagonals (i costats) consecutius, i esbrinar quina relació hi ha entre ells."
        ],
        "titol": "Aquí no es compten diagonals, es miren angles"
      },
      {
        "figures": [],
        "textos": [
          "És fàcil confondre's aquí: en un heptàgon (7 costats), des d'un vèrtex en surten 4 diagonals cap als 4 vèrtexs no adjacents —tal com es veu a la imatge de l'enunciat, a dalt. Però aquestes 4 diagonals no parteixen l'angle del vèrtex en 4 trossos, sinó en 5: els dos costats del polígon que hi arriben al vèrtex també delimiten un tros cadascun (entre el costat i la diagonal veïna), a més dels 3 trossos entre diagonals consecutives. En total, 2 trossos d'extrem + 3 trossos interiors = 5."
        ],
        "titol": "Comptar bé els trossos, no només les diagonals"
      },
      {
        "figures": [
          {
            "peu": "Els arcs es dibuixen a radis diferents només per poder-los distingir sense que se superposin al mateix vèrtex — el radi no aporta cap informació sobre la mida de l'angle.",
            "src": "assets/img/pistes/fig-038.png"
          }
        ],
        "textos": [
          "En un polígon regular inscrit en una circumferència, l'angle que es veu des d'un vèrtex entre dos vèrtexs consecutius —és a dir, un angle inscrit— depèn només de quants costats del polígon separen aquests dos vèrtexs, no de quins vèrtexs concrets siguin. Cadascun dels 5 trossos —tant els 2 d'extrem (costat–diagonal) com els 3 interiors (diagonal–diagonal)— separa sempre un vèrtex del següent immediat, mai en salta cap. Com que tots subtendeixen exactament el mateix arc de circumferència (un setè de la volta sencera), tots cinc angles inscrits són iguals."
        ],
        "titol": "Per què els cinc trossos són iguals"
      },
      {
        "figures": [],
        "textos": [
          "Amb la fórmula de l'angle inscrit, cadascun dels cinc trossos val 180°/7≈25,71°. Els cinc junts han de reconstruir l'angle interior d'UN vèrtex de l'heptàgon: 5×180/7=900/7≈128,57°, exactament el que la fórmula (n−2)×180°/n prediu per a n=7. Compte amb un error fàcil: 900° és la suma dels SET angles interiors de l'heptàgon sencer —un ventall d'un sol vèrtex mai hi pot arribar, només pot completar el seu propi angle, que és set vegades més petit."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Sí, tots els angles són iguals. Des d'un vèrtex d'un polígon regular de n costats surten n−1 segments cap als altres n−1 vèrtexs (2 costats i n−3 diagonals), i aquests n−1 segments parteixen l'angle del vèrtex en n−2 trossos iguals —en un heptàgon, 5 trossos, no 4 (el nombre de diagonals): cal comptar també els dos trossos d'extrem entre cada costat i la diagonal veïna. Tots són iguals perquè tots són angles inscrits que subtendeixen el mateix arc de circumferència.",
    "titol": "Els angles entre diagonals consecutives d'un vèrtex"
  },
  "q07": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Resseguint el contorn d'un polígon convex i tornant al punt de partida, s'ha girat exactament 360° en total —una volta sencera, sumant a cada vèrtex l'angle que es gira cap enfora. La pregunta és què passa quan el camí es creua a si mateix, com al pentagrama de la Qüestió 5."
        ],
        "titol": "Una volta sencera és el que ja es coneix"
      },
      {
        "figures": [],
        "textos": [
          "Cal distingir dues coses que semblen la mateixa però no ho són: a cada punta del pentagrama, l'angle interior és 36° (calculat a la Qüestió 5). Però el que es gira en recórrer el contorn a cada punta no és aquest angle interior, sinó el seu suplementari: 180°−36°=144° —perquè el gir es fa cap enfora del traç, no cap endins, exactament igual que en resseguir un polígon convex normal."
        ],
        "titol": "L'angle de la punta no és el que es gira"
      },
      {
        "figures": [
          {
            "peu": "Els cinc arcs marquen, a cada punta, l'angle de gir cap enfora del recorregut.",
            "src": "assets/img/pistes/fig-063.png"
          }
        ],
        "textos": [
          "Cada una de les cinc puntes aporta el mateix gir de 144°. La construcció marca aquest mateix angle a cadascuna: és literalment l'angle de 36° que ja s'havia trobat a la Qüestió 5, però mirat des de fora, com a suplementari."
        ],
        "titol": "Sumar els girs de totes les puntes"
      },
      {
        "figures": [],
        "textos": [
          "Multiplicant 144° pel nombre de puntes (5): 5×144°=720°. Dividint pels 360° d'una volta sencera: 720°/360°=2. El pentagrama no es tanca després d'una sola volta, com un polígon convex, sinó després de dues voltes completes del traç al voltant del seu centre abans de tornar al punt de partida."
        ],
        "titol": "Quantes voltes fa el camí"
      },
      {
        "figures": [],
        "textos": [
          "5×144°=720°=2×360° —el pentagrama {5/2} fa dues voltes completes. Amb l'estrella de vuit puntes {8/3} (Qüestió 5): cada gir és 3×360°/8=135°, i 8×135°=1080°=3×360°, tres voltes."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "El pentagrama {5/2} fa dues voltes completes abans de tancar-se (5×144°=720°=2×360°), i l'estrella de vuit puntes {8/3} en fa tres (8×135°=1080°=3×360°). Aquest nombre de voltes és exactament el k del símbol {n/k} amb què es construeixen les estrelles: no és casualitat, és la mateixa idea —quants vèrtexs se salten en dibuixar-les— mirada des de dues bandes diferents.",
    "titol": "Quan el camí es tanca després de més d'una volta"
  },
  "q08a": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Un poliedre pot tenir moltes menes de simetria —reflexió en un pla, gir al voltant d'un eix, simetria puntual. Aquesta pregunta es refereix al grau més alt possible de simetria: aquells poliedres on totes les cares són el mateix polígon regular, i tots els vèrtexs tenen exactament el mateix aspecte al seu voltant. Cal fixar aquesta definició abans de continuar, perquè si es relaxa apareixen moltes més figures possibles."
        ],
        "titol": "\"Simètric\" és ambigu si no s'acota"
      },
      {
        "figures": [
          {
            "peu": "Els tres eixos marcats en vermell: vèrtex-a-vèrtex (la diagonal llarga), cara-a-cara, i aresta-a-aresta.",
            "src": "assets/img/pistes/fig-180.png"
          }
        ],
        "textos": [
          "El cub és l'exemple més familiar: sis cares quadrades, tres arestes a cada vèrtex. Té, entre altres, tres tipus d'eix de simetria: eixos que passen per parells de vèrtexs oposats (la diagonal principal del cub), eixos que passen pel centre de cares oposades, i eixos que passen pel punt mitjà d'arestes oposades. Identificar-los tots en aquest sòlid conegut dona el vocabulari necessari per parlar-ne en general."
        ],
        "titol": "Comença pel cas que ja es coneix bé"
      },
      {
        "figures": [
          {
            "peu": "Un dels quatre eixos vèrtex-a-vèrtex del cub, marcat en vermell.",
            "src": "assets/img/pistes/fig-051.png"
          }
        ],
        "textos": [
          "La diagonal sanguina uneix dos vèrtexs oposats del cub —un dels seus eixos de simetria de rotació: un gir de 120° al voltant d'aquest eix porta el cub exactament sobre ell mateix."
        ],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Cal fixar-se que no tot poliedre amb totes les cares iguals és \"simètric\" en aquest sentit fort: cal, a més, que tots els vèrtexs siguin equivalents entre ells. Aquesta doble condició —cares regulars i totes iguals, vèrtexs tots equivalents— és exactament la que defineix els poliedres regulars."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Compta, per al cub, quants eixos de simetria de cada tipus té: 4 eixos vèrtex-a-vèrtex, 3 eixos cara-a-cara, 6 eixos aresta-a-aresta —13 eixos en total, sense comptar el centre com a eix. Aquest recompte, combinat amb els girs que cada eix permet, dona les 24 maneres de girar el cub deixant-lo exactament on era. Compte amb dir-ne \"totes les simetries\": si a més s'hi compten les de mirall (reflexions), en surten 48. Les 24 són les que es poden aconseguir girant el cub amb les mans; les altres 24 només es veuen en un mirall, i cap moviment del cub no les reprodueix."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Els poliedres amb el grau més alt de simetria són aquells amb totes les cares el mateix polígon regular i tots els vèrtexs equivalents entre ells —la mateixa condició, doble, que defineix els poliedres regulars.",
    "titol": "Poliedres simètrics: primer cal fixar què vol dir \"simètric\""
  },
  "q08b": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Els cinc noms —tetraedre, cub, octaedre, dodecaedre, icosaedre— es memoritzen fàcilment. El que cal explicar és per què la llista s'acaba exactament aquí: per què no existeix, per exemple, un poliedre regular fet de set triangles equilàters ajuntats a cada vèrtex."
        ],
        "titol": "La pregunta no és \"quins\", és \"per què només aquests\""
      },
      {
        "figures": [],
        "textos": [
          "Perquè un vèrtex \"tanqui\" en tres dimensions —perquè les cares que hi conflueixen puguin doblegar-se cap amunt i formar un cim en comptes de quedar-se planes— calen almenys tres cares en aquell vèrtex, i la suma dels seus angles hi ha de ser estrictament menor que 360°. Si sumessin exactament 360°, les cares quedarien esteses en un pla, sense cap doblec possible; si sumessin més, ni tan sols es podrien col·locar totes al voltant del vèrtex sense superposar-se.",
          "Aquesta única condició —tres cares o més, angles per sota de 360°— aplicada a cada polígon regular possible és la que retalla la llista de candidats a una mida finita."
        ],
        "titol": "La condició que ha de complir un vèrtex"
      },
      {
        "figures": [
          {
            "peu": "Als arcs marcats en vermell, l'angle que s'acumula a un vèrtex: 3×60°=180° al tetraedre, 4×60°=240° a l'octaedre — tots dos per sota del límit de 360°.",
            "src": "assets/img/pistes/fig-052.png"
          }
        ],
        "textos": [
          "Recorrem els polígons regulars de menys costats a més, comprovant quantes còpies en caben en un vèrtex sense arribar a 360°:",
          "Amb triangles equilàters (60° cadascun): 3 en fan 180°, 4 en fan 240°, 5 en fan 300° — les tres combinacions són vàlides, perquè totes queden per sota de 360°. Amb 6 s'arriba exactament a 360°: la figura queda plana, ja no tanca cap sòlid.",
          "Amb quadrats (90°): només 3 caben (270°); amb 4 ja s'arriba a 360° exactes.",
          "Amb pentàgons regulars (108°): només 3 caben (324°); amb 4 ja se superarien els 360°.",
          "Amb hexàgons (120°): 3 sols ja en fan 360° exactes — cap combinació funciona. I com més costats té el polígon, més gran és el seu angle intern, de manera que la situació només empitjora: cap polígon de sis costats o més pot donar-hi cap combinació vàlida.",
          "En total, doncs, exactament cinc combinacions (angle, nombre de cares per vèrtex) superen la prova: 3, 4 i 5 triangles; 3 quadrats; 3 pentàgons. Cadascuna es correspon amb un dels cinc sòlids: el tetraedre (3 triangles per vèrtex), l'octaedre (4 triangles), l'icosaedre (5 triangles), el cub (3 quadrats) i el dodecaedre (3 pentàgons)."
        ],
        "titol": "Comptar totes les combinacions vàlides"
      },
      {
        "figures": [],
        "textos": [
          "Val la pena no confondre dues coses que semblen la mateixa afirmació però no ho són. El comptatge anterior demostra que no pot haver-hi cap sisè poliedre regular: qualsevol altra combinació de polígon regular i nombre de cares per vèrtex arriba o supera els 360° i, per tant, no tanca cap figura tridimensional. Això acota la llista per dalt.",
          "Però acotar la llista per dalt no demostra per si sol que les cinc combinacions es puguin construir de debò —que els polígons, un cop plegats, arribin realment a tancar-se en un sòlid complet, en comptes de quedar oberts per l'altra banda per molt que cada vèrtex individual sigui vàlid. Aquesta segona meitat de l'argument, aquí, la donem per resolta per la via més directa possible: els cinc sòlids existeixen —es poden construir, tenir a la mà, i comptar-los les cares una per una— cosa que en confirma la realitzabilitat sense necessitat d'un argument geomètric addicional."
        ],
        "titol": "Una llista completa, però amb dues meitats"
      }
    ],
    "resum": "Hi ha exactament cinc poliedres regulars perquè només cinc combinacions (polígon regular, nombre de cares per vèrtex) mantenen la suma d'angles en un vèrtex per sota de 360° —i les cinc, a més, es poden construir realment: tetraedre, octaedre i icosaedre (triangles), cub (quadrats) i dodecaedre (pentàgons).",
    "titol": "Per què només hi ha cinc poliedres regulars"
  },
  "q08c": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "L'enunciat en fa dues, i cal no donar per fet que la segona hereta la resposta de la primera: per què tenir els mateixos angles garanteix la mateixa forma en un triangle, i per què això no s'ha d'esperar automàticament en una figura de quatre costats."
        ],
        "titol": "Dues preguntes, no una"
      },
      {
        "figures": [],
        "textos": [
          "Les dues preguntes exigeixen tipus de feina oposats. Si la resposta és sí, sempre (com resultarà ser el cas dels triangles), cal un argument que valgui per a tots els triangles possibles del món —cap dibuix concret ho pot demostrar per si sol. Si la resposta és no, no sempre (com resultarà ser el cas dels quadrilàters), un sol exemple que falli n'hi ha prou: un contraexemple tanca la pregunta del tot, sense necessitat de res més."
        ],
        "titol": "Feines diferents: demostrar no és refutar"
      },
      {
        "figures": [],
        "textos": [
          "Aquí sí que cal l'argument general. Dos triangles amb els mateixos tres angles compleixen el criteri de semblança angle-angle-angle (AAA): si els tres parells d'angles coincideixen, els costats corresponents queden forçosament en la mateixa proporció els uns amb els altres, encara que la mida global sigui diferent. En un triangle, de fet, n'hi ha prou amb dos angles iguals: el tercer ja no és lliure, perquè els tres han de sumar 180°. Per això el criteri se sol enunciar com angle-angle (AA). No hi ha manera de \"deformar\" un triangle mantenint els tres angles fixos sense limitar-se a escalar-lo sencer: els angles ja determinen completament la forma."
        ],
        "titol": "Els triangles: per què els mateixos angles ja ho decideixen tot"
      },
      {
        "figures": [
          {
            "peu": "Els dos triangles de dalt (mateixos angles, semblants) i els dos quadrilàters de baix (també mateixos angles, però no semblants: un és quadrat i l'altre, rectangle allargat).",
            "src": "assets/img/pistes/fig-007.png"
          }
        ],
        "textos": [
          "Aquí no cal cap argument general, només trobar un cas que falli. Un quadrat i un rectangle allargat tenen exactament els mateixos quatre angles —tots quatre rectes, 90° cadascun— i, tanmateix, no tenen la mateixa forma: un té els quatre costats iguals i l'altre no. Aquest sol exemple ja demostra que, per a figures de quatre costats, els mateixos angles no garanteixen la mateixa forma: cal alguna cosa més, com la proporció entre costats consecutius."
        ],
        "titol": "Els quadrilàters: un sol contraexemple"
      },
      {
        "figures": [],
        "textos": [
          "La frase \"dues figures amb els mateixos angles són semblants\" es fa certa afegint-hi \"...si són triangles\": la propietat depèn essencialment del nombre de costats, no és general a totes les figures poligonals."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Sí per als triangles: el criteri AAA garanteix que els mateixos tres angles impliquen la mateixa forma. No per als quadrilàters: un quadrat i un rectangle allargat tenen els mateixos quatre angles (tots de 90°) i formes clarament diferents — un sol contraexemple n'hi ha prou per tancar la segona pregunta.",
    "titol": "Mateixos angles: quan basta i quan no"
  },
  "q09": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Per demostrar que dues figures són semblants —mateixa forma, mida diferent— no cal mesurar cap costat: n'hi ha prou de comprovar que tenen els mateixos angles. En triangles, encara es pot simplificar més: en un triangle rectangle, conèixer un sol angle agut ja determina l'altre (els tres angles sumen 180° i un ja val 90°, així que els altres dos sumen 90°, i en queda un de determinat un cop es coneix l'altre). Per tant, per veure que dos triangles rectangles són semblants n'hi ha prou de trobar-los un angle agut en comú."
        ],
        "titol": "Semblant vol dir: mateixos angles"
      },
      {
        "figures": [
          {
            "peu": "El triangle ① (el gran) i els dos petits ② i ③, separats i orientats tots de la mateixa manera: cadascun amb el seu angle recte (quadradet) i el seu angle agut compartit amb el gran (arc o doble arc).",
            "src": "assets/img/pistes/fig-006.png"
          }
        ],
        "textos": [
          "L'altura traçada des de l'angle recte del triangle gran fins a la hipotenusa el divideix en dos triangles més petits. Compte amb el detall clau de la figura: als tres triangles hi ha un angle marcat amb un arc i un altre amb dos arcs. Un arc i dos arcs són coses diferents —tots els angles marcats amb un arc valen igual entre ells, i tots els marcats amb dos arcs valen igual entre ells, però no cal que un arc i dos arcs coincideixin."
        ],
        "titol": "Separar les tres peces"
      },
      {
        "figures": [],
        "textos": [
          "Cada un dels dos triangles petits té el seu propi angle recte —l'altura els n'ha creat un de nou a cadascun. I, a més, cadascun comparteix un dels angles aguts amb el triangle gran original: el triangle de sota comparteix l'angle agut de la dreta; el de dalt, l'angle agut de dalt. Amb l'angle recte (compartit pels tres) més un angle agut en comú amb el gran, cadascun dels dos triangles petits ja compleix la condició de semblança amb el triangle ①: tots tres triangles són semblants entre si."
        ],
        "titol": "Tancar-ho: cada peça comparteix un angle amb el gran"
      },
      {
        "figures": [],
        "textos": [
          "Aquest fet no és només curiós per si mateix: és exactament la base d'una demostració clàssica del teorema de Pitàgores. De la semblança en surt que a²=c·p i b²=c·q, on a i b són els catets del triangle gran, c la seva hipotenusa, i p, q els dos trossos en què l'altura talla la hipotenusa. Sumant les dues igualtats: a²+b²=c·p+c·q=c·(p+q)=c·c=c²."
        ],
        "titol": "Un resultat amb una segona vida"
      },
      {
        "figures": [],
        "textos": [
          "Triangle 3-4-5: l'altura sobre la hipotenusa fa 2,4 i la talla en trossos de 1,8 i 3,2. Comprovant la proporció dels catets als tres triangles: 1,8/2,4 = 0,75 i 2,4/3,2 = 0,75, coincidint amb 3/4 = 0,75 del triangle gran."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Sí: l'altura des de l'angle recte fins a la hipotenusa crea dos triangles que comparteixen, cadascun, l'angle recte i un angle agut amb el triangle original —condició suficient de semblança. Aquest fet és, a més, la base d'una demostració del teorema de Pitàgores: a²=c·p, b²=c·q, i sumant-les, a²+b²=c².",
    "titol": "Per què l'altura sobre la hipotenusa crea dos triangles semblants"
  },
  "q10": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Encara que l'enunciat en faci dues, no calen dos arguments diferents: un rombe té els quatre costats iguals, i aquesta única propietat, ben mirada des de dos angles diferents, respon totes dues preguntes alhora."
        ],
        "titol": "Dues preguntes, una sola propietat"
      },
      {
        "figures": [
          {
            "peu": "La diagonal (en vermell) divideix el rombe en dos triangles; les marquetes mostren els quatre costats iguals.",
            "src": "assets/img/pistes/fig-181.png"
          }
        ],
        "textos": [
          "Imaginem el rombe com un paper que es doblega per una de les diagonals. Aquesta diagonal el divideix en dos triangles que comparteixen la diagonal com a costat comú; els altres dos costats de cada triangle són costats del rombe, i com que els quatre costats del rombe són iguals, els dos triangles tenen els tres costats iguals dos a dos —són congruents pel criteri costat-costat-costat (SSS)."
        ],
        "titol": "El plec de paper"
      },
      {
        "figures": [],
        "textos": [
          "Com que els dos triangles són congruents, els angles que cadascun forma amb la diagonal —a banda i banda— són iguals. Aquesta igualtat d'angles alterns és exactament la condició que fa que dues rectes tallades per una transversal (aquí, la diagonal) siguin paral·leles: per tant, els dos costats del rombe que queden a banda i banda de la diagonal són paral·lels als seus respectius costats oposats."
        ],
        "titol": "El paral·lelisme, dels dos triangles congruents"
      },
      {
        "figures": [
          {
            "peu": "El triangle isòsceles que formen dos costats consecutius del rombe amb una diagonal (dos costats iguals, marcats): la bisectriu del seu vèrtex —que resulta ser l'altra diagonal— li cau perpendicular a la base.",
            "src": "assets/img/pistes/fig-018.png"
          }
        ],
        "textos": [
          "Per a la perpendicularitat cal un pas més, però n'hi ha prou amb una aplicació, no dues. Anomenem els vèrtexs ABCD. Fem el plec ara per l'altra diagonal, AC: parteix el rombe en els triangles ABC i ADC, que tornen a ser congruents per SSS (AB=AD, CB=CD, i AC compartida). D'aquesta congruència surt que l'angle BAC és igual a l'angle DAC: la diagonal AC biseca l'angle del vèrtex A.",
          "Ara mirem el triangle ABD tot sol. Té AB=AD —són dos costats del rombe—, o sigui que és isòsceles, i la seva base és la diagonal BD. I en un triangle isòsceles, la bisectriu de l'angle format pels dos costats iguals és també perpendicular a la base. Aquesta bisectriu és, precisament, AC. Per tant AC és perpendicular a BD: les dues diagonals del rombe es tallen en angle recte."
        ],
        "titol": "La perpendicularitat: la diagonal com a bisectriu"
      },
      {
        "figures": [],
        "textos": [
          "Agafa els quatre punts (±3,0) i (0,±4): els quatre costats fan √(3²+4²)=5 (el triangle 3-4-5), o sigui que és un rombe de debò, i el pendent d'un costat coincideix amb el del costat oposat. Fixa't que aquesta comprovació recorre el camí invers al de la demostració —parteix de dues diagonals perpendiculars i n'obté un rombe—: serveix per veure que els números quadren, no per demostrar el teorema."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Sí a totes dues: els costats oposats d'un rombe són sempre paral·lels (dels angles alterns iguals que crea una diagonal en dos triangles congruents per SSS) i les diagonals són sempre perpendiculars (perquè cada diagonal és la bisectriu d'un triangle isòsceles format per l'altra, i en un isòsceles la bisectriu de l'angle del vèrtex és perpendicular a la base).",
    "titol": "El rombe: costats paral·lels i diagonals perpendiculars"
  },
  "q100": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Dues respostes, una per cada subcas de l'enunciat —no una de sola. Primer: què li passa a una figura quan es projecta centralment entre dos plans paral·lels amb el punt de projecció fora d'entremig. Segon: què canvia si el punt de projecció queda entre els dos plans."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "Es posa el punt de projecció a alçada p, un pla a alçada 0 i l'altre a alçada h. Un punt a distància x₀ de l'eix, al pla 0, es projecta a distància x₀·(p−h)/p al pla h —surt de resoldre on la recta des del punt de projecció talla el segon pla. Provant-ho amb p més gran que h (fora d'entremig) i després amb p entre 0 i h."
        ],
        "titol": "Segueix un sol punt amb un paràmetre"
      },
      {
        "figures": [
          {
            "peu": "Esquerra: O fora, P' i Q' mantenen el mateix ordre —homotècia. Dreta: O entremig, P' i Q' surten intercanviats —capgirada.",
            "src": "assets/img/pistes/fig-104.png"
          }
        ],
        "textos": [
          "Els dos subcasos, un al costat de l'altre: amb O fora dels dos plans, i amb O entremig."
        ],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Quan p és fora de l'interval [0,h], el factor (p−h)/p és positiu: la figura es projecta ampliada o reduïda però sense capgirar-se. I val la pena aturar-s'hi, perquè aquesta és la primera homotècia de debò del bloc: a la Qüestió 91 el factor depenia de la direcció del segment, i a la 92 depenia d'on era el segment; aquí no depèn de res, és el mateix número per a tota la figura i per a totes les direccions. El que ho arregla no són les línies de projecció, que continuen sortint totes d'un sol punt, sinó que ara els dos plans són paral·lels. Quan p és entre 0 i h, aquest mateix factor esdevé negatiu: la figura es projecta capgirada, com la imatge d'una cambra fosca, no només escalada."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "h=10. Amb p=−2 (fora, per sota): factor=(−2−10)/(−2)=6, positiu. Amb p=20 (fora, per sobre): factor=(20−10)/20=0,5, també positiu —la figura surt a la meitat i dreta. Amb p=5 (entremig): factor=(5−10)/5=−1, negatiu: la figura surt exactament invertida i de la mateixa mida. Acostant el punt de projecció al primer pla, p=0,001, el factor es dispara a −9999; i a p=0 exacte ja no hi ha projecció possible, perquè el punt de projecció cauria damunt de la figura mateixa.",
          "Aquest capgirament és el mateix fenomen que fa que la imatge dins d'una cambra fosca (o la retina de l'ull) surti invertida: el punt de projecció (el forat) queda entre l'objecte i la pantalla on es forma la imatge."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Entre dos plans paral·lels, amb el punt de projecció fora d'ells, la projecció central és una homotècia de debò —el mateix factor (p−h)/p per a tota la figura i per a totes les direccions—, sense capgirar. Amb el punt de projecció entre els dos plans, aquell mateix factor es torna negatiu i la imatge surt capgirada. El que fa que aquí sí que hi hagi un factor únic, cosa que no passava a les Qüestions 91 i 92, és que els dos plans siguin paral·lels entre si.",
    "titol": "Dilatada o capgirada: on és el punt de projecció"
  },
  "q101": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Dues respostes diferents: sí per a tres punts —sempre es pot trobar una projecció que hi arribi—, i en general no per a quatre, amb la raó exacta de per què quatre punts són diferents de tres."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "Convé comptar amb cura. Amb els tres punts d'arribada ja donats, la segona recta no es tria: és la que ells determinen. Només queda triar O, dos números per a tres condicions. I hi ha una limitació més forta encara: si les dues rectes es tallen en un punt X, la recta que va d'O a X és la mateixa per a totes dues, de manera que X es projecta damunt d'ell mateix. Una projecció sola no pot moure aquell punt de cap manera, i per això en general no n'hi ha prou amb una. Amb dues encadenades sí: la primera mou el punt de creuament, la segona acaba la feina, i els tres punts van on es vulgui. Un quart punt, en canvi, no s'arregla per molt que s'encadeni."
        ],
        "titol": "Compta graus de llibertat"
      },
      {
        "figures": [
          {
            "peu": "A, B, C es projecten on es vulgui; el quart punt, D', queda determinat pels altres tres.",
            "src": "assets/img/pistes/fig-105.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Un cop fixada la imatge de tres punts A,B,C —sempre possible, encara que calguin dues projeccions seguides, perquè tres punts no porten cap invariant que els lligui—, la imatge D′ del quart punt D ha de complir que la raó doble (AC·BD)/(BC·AD) sigui la mateixa abans i després. Això determina D′ de manera única. Per tant, quatre punts només es poden projectar a quatre punts amb la mateixa raó doble, no a qualssevol quatre."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Amb números. Partint dels quatre punts de la Qüestió 99, a x=0, 2, 5 i 9, amb raó doble 35/27, i enviant A→0, B→1 i C→3 (tres imatges triades a l'atzar), la posició d de D′ ha de complir (3−0)(d−1)/((3−1)(d−0)) = 35/27. D'aquí, 81(d−1)=70d, és a dir d=81/11≈7,364, i cap altre valor no serveix. Si s'hagués volgut una raó doble diferent —posem 2— hauria sortit un altre d: prova que els quatre punts d'arribada no es poden triar tots quatre.",
          "Aquesta és la primera vegada que es veu explícitament que la raó doble no és només \"una cosa que es conserva\": és la mesura completa de la llibertat que es perd en passar de tres punts a quatre."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Sí per a tres punts: sempre es poden portar a qualssevol altres tres punts col·lineals, encadenant dues projeccions si cal —una de sola no acostuma a bastar, perquè deixa fix el punt on es creuen les dues rectes. No, en general, per a quatre: el quart queda determinat pels altres tres a través de la raó doble, que cap projecció no pot alterar.",
    "titol": "Tres punts sempre, quatre punts no sempre: la raó doble"
  },
  "q103": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una resposta de NO, amb els casos exactes on falla. N'hi ha dos, i són de naturalesa oposada: en un la figura s'aplana i en l'altre s'obre. Cal saber dir, per a cadascun, quina relació concreta entre el polígon i el punt de projecció el provoca."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "Un costat qualsevol del polígon es projecta, en general, a un altre segment. Hi ha dues maneres que això falli, i convé separar-les des del principi perquè són ben diferents. La primera: què passa si dos vèrtexs del polígon queden alineats amb el punt de projecció? La segona: hi ha algun punt que no tingui imatge enlloc —és a dir, en quina direcció hauria de sortir el raig des del punt de projecció perquè no arribés mai a la recta d'arribada?"
        ],
        "titol": "Pensa en un sol costat primer"
      },
      {
        "figures": [
          {
            "peu": "BC prolongat passa exactament per O: B es projecta normalment a B', però C no té imatge ordinària —s'escapa cap a l'infinit.",
            "src": "assets/img/pistes/fig-107.png"
          }
        ],
        "textos": [
          "Un triangle ABC amb el costat BC prolongat passant exactament pel punt de projecció O."
        ],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Primera manera: el col·lapse. Si un costat, allargat, passa pel punt de projecció, els seus dos extrems comparteixen el mateix raig i van a parar exactament al mateix lloc. Aquell costat es projecta a un sol punt i el que era un triangle queda aplanat en un segment. No s'escapa res: al contrari, dues coses que eren diferents s'ajunten. Ja no és un polígon.",
          "Segona manera: la fugida. Un punt X no té imatge quan el raig que hi va des del punt de projecció no arriba mai a la recta d'arribada, és a dir quan aquell raig hi és paral·lel. Els punts que compleixen això formen tota una recta —la recta de fuga—, i qualsevol polígon que la travessi es trenca en la imatge i se'n va a l'infinit pels dos costats. En el llenguatge de l'espai projectiu, aquella recta és la que va a parar als punts de l'infinit; en una fotografia d'un terra de rajoles, té un nom més familiar: l'horitzó."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Amb coordenades: recta d'arribada y=4 i punt de projecció O=(6,0). Col·lapse: triangle A=(1,1), B=(4,2), C=(5,1). B i C són alineats amb O, i es projecten tots dos a x=2, el mateix punt; A se'n va a x=−14. La imatge del triangle és el segment que va de x=−14 a x=2 —aplanada, no trencada. Fugida: el punt X=(1,0) és a la mateixa alçada que O, el raig d'O a X és horitzontal i no talla mai y=4, de manera que X no té imatge; la recta de fuga és y=0. Acostant-s'hi es veu com se'n va: X=(1,½) dona x=−34, X=(1,0,1) dona x=−194 i X=(1,0,01) dona x=−1994.",
          "Aquest és el primer lloc del bloc on \"un punt se'n va a l'infinit\" dins d'una figura real, i no com a curiositat abstracta: és la mateixa idea que fa que dues rectes en l'espai projectiu es tallin sempre, ordinàriament o a l'infinit."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "No sempre, i falla de dues maneres oposades. Si un costat, allargat, passa pel punt de projecció, els seus dos extrems cauen damunt del mateix punt i la figura s'aplana: el triangle es projecta a un segment. I si el polígon travessa la recta de fuga —la dels punts el raig dels quals surt paral·lel a la recta d'arribada—, aquells punts no tenen imatge ordinària i la figura s'obre cap a l'infinit. En tots dos casos la imatge deixa de ser un polígon.",
    "titol": "Quan un vèrtex s'escapa a l'infinit"
  },
  "q104": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una descripció qualitativa concreta: tres rectes que, un cop projectades, ja no són paral·leles entre si, sinó que tenen alguna altra relació geomètrica exacta —quina?"
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [
          {
            "peu": "Dues vies paral·leles, convergint visualment cap a un únic punt marcat \"horitzó\".",
            "src": "assets/img/pistes/fig-204.png"
          }
        ],
        "textos": [
          "Imagina't dret entre dues vies de tren paral·leles, mirant cap on s'allunyen. Encara que són paral·leles de veritat, com les veus a l'horitzó?"
        ],
        "titol": "Pensa en les vies del tren"
      },
      {
        "figures": [
          {
            "peu": "Les tres rectes paral·leles (negre) i les seves imatges (vermell): concurrents en un sol punt de fuga.",
            "src": "assets/img/pistes/fig-108.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Tres rectes paral·leles, en ser projectades des d'un punt fix, es converteixen en general en tres rectes concurrents —totes es tallen en un mateix punt. Aquest punt és exactament la imatge del \"punt a l'infinit\" comú a totes tres, la seva direcció compartida, pel mateix mecanisme que ja s'ha vist en projectar un polígon: la direcció comuna es projecta a un únic punt ordinari, anomenat punt de fuga."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Aquell punt de fuga existeix només si el raig que surt del punt de projecció en la direcció comuna arriba efectivament al pla d'arribada. I hi ha un cas en què no hi arriba: quan la direcció comuna de les tres rectes és paral·lela al pla d'arribada. Aleshores no hi ha punt de fuga i les tres imatges continuen sent paral·leles entre si. No és cap raresa: en una fotografia d'una via de tren els dos rails convergeixen —la seva direcció se'n va cap al fons—, però les travesses, que travessen la imatge de dreta a esquerra, hi surten paral·leles. Les dues respostes són, en el fons, la mateixa: en el llenguatge de l'espai projectiu, dues imatges paral·leles també es tallen, però al seu propi punt de l'infinit. El punt de fuga se n'hi ha anat."
        ],
        "titol": "La lletra petita, que és mig la pregunta"
      },
      {
        "figures": [],
        "textos": [
          "Amb coordenades: pla de partida z=0, punt de projecció O=(0,0,1) i pla d'arribada y=1. Un punt (x,y,0) es projecta a la posició u=x/y, w=1−1/y dins del pla d'arribada. Cas concurrent: les rectes x=1, x=2 i x=−1, de direcció comuna (0,1), donen les imatges w=1−u, w=1−u/2 i w=1+u, i les tres passen per (u,w)=(0,1) —el punt de fuga. Cas paral·lel: les rectes y=2, y=3 i y=4, de direcció comuna (1,0), que és paral·lela al pla d'arribada, donen w=1/2, w=2/3 i w=3/4: tres rectes horitzontals que no es tallen enlloc.",
          "Aquest és, literalment, el punt de fuga de la pintura en perspectiva: cada conjunt de rectes paral·leles del món real té el seu punt de fuga propi al quadre, i com que hi ha un punt de fuga per direcció, un quadre en perspectiva en pot tenir un, dos o més. Les direccions que es queden paral·leles al pla del quadre són justament les que el pintor dibuixa paral·leles: és el que distingeix una perspectiva \"frontal\" d'una \"d'angle\"."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Tres rectes paral·leles es projecten, en general, com a tres rectes concurrents: es tallen en un sol punt —el punt de fuga—, que és la imatge del punt a l'infinit de la seva direcció comuna. Hi ha una excepció, i és exactament una: si aquella direcció comuna és paral·lela al pla d'arribada, no hi ha punt de fuga i les imatges es queden paral·leles. Dit en llenguatge projectiu, però, no és una excepció de debò: també aleshores es tallen, al punt de l'infinit.",
    "titol": "El punt de fuga: on van a parar les paral·leles"
  },
  "q105": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Al pla ordinari, la resposta seria \"no\": dues rectes paral·leles en són l'única excepció, i mai es troben. La resposta aquí és sí —però cal explicar exactament quin punt \"nou\" fa que la vella excepció desaparegui."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "Al pla ordinari, dues rectes paral·leles són l'única excepció a \"dues rectes es tallen sempre\", i ho són per ben poc: inclinant-ne una un mil·lèsim de grau ja es tallen, encara que sigui molt lluny, i com més a prop del paral·lelisme, més lluny se'n va el punt de tall. L'espai projectiu pren aquesta observació i la fa literal: a cada direcció del pla se li afegeix un punt nou \"a l'infinit\" —allà on se n'ha anat el tall— i totes les rectes d'aquella direcció el comparteixen. És la mateixa cosa que, mirada en perspectiva, es veu com el punt on convergeixen visualment unes vies de tren."
        ],
        "titol": "El que li falta al pla ordinari"
      },
      {
        "figures": [
          {
            "peu": "Rectes secants: sempre es tallen, ordinàriament o a l'infinit.",
            "src": "assets/img/pistes/fig-109.png"
          }
        ],
        "textos": [
          "Diverses rectes gairebé paral·leles, convergint totes cap a un mateix punt marcat \"∞\" —el mateix punt cap al qual convergeixen visualment unes vies de tren, però ara tractat com un punt real del pla ampliat i no com un simple efecte de perspectiva."
        ],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Dues rectes secants es tallen, com sempre, en un punt ordinari del pla. Dues rectes paral·leles comparteixen la mateixa direcció, i per tant comparteixen també el mateix punt a l'infinit —el d'aquella direcció— i es tallen allà. En l'espai projectiu, format pel pla ordinari més un punt a l'infinit per a cada direcció, literalment cap parella de rectes deixa mai de tallar-se."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "y=3x i y=3x+5 són paral·leles: igualant-les queda 0=5, sense solució, i al pla ordinari no es tallen. Al pla projectiu totes dues arriben al mateix punt de l'infinit —el de la direcció de pendent 3— i és allà on es troben. Una tercera recta de pendent diferent, y=x, se'n va a un altre punt de l'infinit, el del pendent 1, i per tant no s'hi troba: amb aquelles dues s'ha de trobar en punts ordinaris, i s'hi troba —talla y=3x a (0,0) i y=3x+5 a (−2,5 · −2,5). Cap parella no se n'escapa: o comparteixen direcció i es tallen a l'infinit, o no la comparteixen i es tallen aquí.",
          "Val la pena, però, la lletra petita d'aquest \"sempre\": tot el que s'ha fet aquí passa dins d'un sol pla. A l'espai de tres dimensions, dues rectes poden no ser mai paral·leles ni tallar-se —una que va pel terra i una altra que travessa el sostre en una altra direcció, sense passar mai l'una per sobre de l'altra: se'n diu que s'encreuen. Afegir-hi punts a l'infinit no ho arregla, perquè cadascuna se'n va cap a un punt de l'infinit diferent."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Sí: en l'espai projectiu, dues rectes qualssevol es tallen sempre. Les secants ho fan en un punt ordinari; les paral·leles, en el punt a l'infinit que comparteixen per tenir la mateixa direcció.",
    "titol": "Dues rectes en l'espai projectiu"
  },
  "q107": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "La identificació exacta de dos punts concrets d'un cercle base del con —no \"en general\", sinó els dos punts precisos que, en projectar el cercle des del vèrtex del con cap al pla de tall, se'n van a l'infinit."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "Un punt es projecta \"a l'infinit\" exactament quan la recta de projecció —des del punt de projecció, en aquest cas el vèrtex del con— queda paral·lela al pla d'arribada, el pla de tall, en lloc de tallar-lo. Amb el vèrtex del con com a punt de projecció, quines rectes que hi passen són \"les rectes de projecció\"?"
        ],
        "titol": "Recorda per què un punt se'n va a l'infinit"
      },
      {
        "figures": [
          {
            "peu": "Dues generatrius del con (vermell), paral·leles al pla de tall: els punts P₁ i P₂ on toquen el cercle base fugen a l'infinit.",
            "src": "assets/img/pistes/fig-111.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Les \"rectes de projecció\" des del vèrtex són exactament les generatrius del con —les rectes rectes que el formen. Dues d'aquestes generatrius —exactament les dues que són paral·leles al pla de tall— no arriben mai al pla de tall, com dues rectes paral·leles que no es tallen en el sentit ordinari. Els dos punts del cercle per on passen aquestes dues generatrius són exactament els que se'n van a l'infinit, i per això la hipèrbola té dues branques que s'obren cap enfora sense parar: són la imatge d'un cercle sencer, menys aquests dos punts que han fugit a l'infinit."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Amb un con d'obertura fixa i un pla de tall que s'inclina gradualment: mentre el pla és menys inclinat que les generatrius del con, la secció és una el·lipse tancada —cap generatriu paral·lela al pla, cap punt fuig a l'infinit. Just quan el pla arriba a ser paral·lel a una generatriu, un sol punt fuig —paràbola. Quan el pla és encara més inclinat que qualsevol generatriu, hi ha dos punts paral·lels —i la secció és una hipèrbola de dues branques.",
          "Aquesta identificació dels dos punts és el que fa falta, més endavant, per situar les esferes de Dandelin. Compte, però, amb un detall: aquelles esferes s'encaixen dins del con tocant-lo cadascuna al llarg d'un cercle propi —el que li correspon segons la seva mida—, i no d'aquest cercle base. El que s'hi aprofita d'aquí no és el cercle, sinó la relació entre les generatrius i el pla de tall que s'acaba de fixar."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Els dos punts que fugen a l'infinit són exactament aquells del cercle base per on passen les dues generatrius del con paral·leles al pla de tall. La hipèrbola és la imatge d'un cercle sencer menys aquests dos punts.",
    "titol": "La hipèrbola: un cercle amb dos punts fugats a l'infinit"
  },
  "q108": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Cal descriure tres orientacions diferents de la llanterna (o, de manera equivalent, de la paret) que produeixin, cadascuna, una de les tres còniques: una el·lipse (o cercle), una paràbola, i una hipèrbola. El feix de llum de la llanterna és el con; la paret és el pla que el talla."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "El cas més senzill dels tres és quan la llanterna apunta exactament perpendicular a la paret: el feix, un con de llum, hi talla una taca circular, sense cap direcció privilegiada."
        ],
        "titol": "Comença perpendicular"
      },
      {
        "figures": [
          {
            "peu": "D'esquerra a dreta: paret perpendicular a l'eix (cercle), paret paral·lela a una generatriu del con (paràbola), paret més inclinada encara (hipèrbola).",
            "src": "assets/img/pistes/fig-112.png"
          }
        ],
        "textos": [
          "Tres orientacions de la paret respecte del mateix con de llum: perpendicular a l'eix, inclinada però tallant només un costat del con, i inclinada encara més."
        ],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Perpendicular a l'eix: un cercle. Inclinant la paret fins que quedi paral·lela a una generatriu del con —la vora del feix de llum—: la taca es converteix en una paràbola, oberta per un sol costat. Inclinant-la encara més, hi ha dues generatrius que es tornen paral·leles a la paret alhora, i la vora del feix es veu \"obrir-se\" cap als dos costats: és una hipèrbola. Amb un matís honest, que es nota de seguida: una hipèrbola de debò té dues branques, i amb una llanterna només se'n pot veure una, perquè la llanterna fa un sol con i la hipèrbola sencera demana el con doble —el que continuaria a l'altra banda del vèrtex."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Aquí la comprovació és observacional, no numèrica: amb la paret perpendicular a l'eix de la llanterna, el contorn de la taca manté la mateixa distància al centre en totes direccions —és un cercle de debò, no només una taca arrodonida a ull. Inclinant la paret fins que un costat del feix hi quedi paral·lel, el contorn deixa de tancar-se per aquell costat: aquest canvi de forma —de tancat a obert— es veu directament amb una llanterna i una paret real, sense necessitat de mesurar res."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Un sol con de llum, tallat per un pla en tres angles diferents, produeix les tres còniques: cercle amb el pla perpendicular a l'eix, paràbola quan el pla queda paral·lel a una generatriu del con, i hipèrbola quan s'inclina encara més.",
    "titol": "Les tres còniques amb una llanterna"
  },
  "q109": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una demostració completa que la secció el·líptica d'un con —tallat per un pla que no travessa totes dues nappes— és de veritat una el·lipse: cal trobar dos punts F₁, F₂ (els focus) tals que, per a qualsevol punt P de la corba de tall, PF₁+PF₂ sigui una constant."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "Compte amb un detall que sovint es diu malament: com que el pla de tall no travessa les dues nappes, totes dues esferes són a la mateixa nappa —una encaixada entre el vèrtex i el pla, l'altra més enllà del pla, allunyant-se del vèrtex. Cadascuna és tangent alhora a la superfície del con i al pla de tall, i de cada mena n'hi cap exactament una. Anomenant F₁ i F₂ els dos punts on cada esfera toca el pla —aquests seran els focus—, per a un punt P qualsevol de la corba de tall, quina relació hi ha entre PF₁ i la distància, mesurada sobre la superfície del con, entre P i el cercle on la primera esfera hi és tangent?"
        ],
        "titol": "Dues esferes, cadascuna tocant el con i el pla"
      },
      {
        "figures": [
          {
            "peu": "PF₁ = tangent des de P a l'esfera petita = tros de generatriu fins al cercle de tangència, i igual per PF₂: la suma és el tros de generatriu entre els dos cercles, constant.",
            "src": "assets/img/pistes/fig-113.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Dues maneres de mesurar la mateixa distància: (a) PF₁ és una tangent des de P a l'esfera 1 —i totes les tangents des d'un mateix punt a una esfera tenen la mateixa longitud. (b) El segment de la generatriu del con des de P fins al cercle de tangència amb l'esfera 1 és també una tangent des de P a aquesta mateixa esfera —l'esfera toca el con al llarg de tot un cercle, i per tant cada generatriu la toca en un punt, el d'aquell cercle. Per tant PF₁ és exactament aquest tros de generatriu. Igual per PF₂ amb l'esfera 2, cap a l'altre cercle de tangència. La suma PF₁+PF₂ és exactament la longitud del tros de generatriu entre els dos cercles de tangència —la mateixa per a qualsevol generatriu, perquè els dos cercles de tangència són fixos i no depenen de P."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Amb un cas del tot concret, per poder-lo refer. Con de semiobertura 30° amb el vèrtex a l'origen i l'eix vertical, i pla de tall z = 4 + x/2, menys inclinat que les generatrius i per tant donant una el·lipse. Les dues esferes surten centrades a l'eix, a altures 2,566 i 9,071 —totes dues per damunt del vèrtex, com s'ha dit—, amb radis 1,283 i 4,535. Toquen el pla a F₁=(−0,574; 0; 3,713) i F₂=(2,028; 0; 5,014), i toquen el con al llarg de dos cercles situats a 2,222 i a 7,855 del vèrtex, mesurats sobre la generatriu. La constant ha de ser la diferència: 7,855 − 2,222 = 5,633. I efectivament: per a P=(3,247; 0; 5,623) la suma PF₁+PF₂ val 5,633; per a P=(0; 2,309; 4) val 5,633; per a P=(−1,792; 0; 3,104) val 5,633.",
          "Aquest mateix argument —el mateix tram de recta, mesurat de dues maneres, forçat a ser igual— és el revés d'una altra qüestió sobre les circumferències com a el·lipses amb els dos focus fosos: allà es partia de la definició (dos focus, suma constant) i se'n deduïa que un cercle és el cas límit; aquí, en canvi, es parteix del con i es demostra que la corba resultant compleix la definició amb focus concrets. Quan el pla de tall és perpendicular a l'eix del con, les dues esferes de Dandelin queden igual de grans i tangents al mateix cercle —els dos focus col·lapsen en un de sol, exactament aquell cas límit."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Les dues esferes de Dandelin donen els focus de l'el·lipse: F₁ i F₂ són els punts on cada esfera toca el pla de tall, i PF₁+PF₂ és sempre igual a la longitud del tros de generatriu entre els dos cercles de tangència —constant per a qualsevol punt P de la corba.",
    "titol": "Les esferes de Dandelin: el mateix segment, mesurat dues vegades"
  },
  "q11": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Per definició, un paral·lelogram té els dos parells de costats oposats paral·lels. Això —i només això, cap mesura ni suposició addicional— és tot el que es pot fer servir com a punt de partida."
        ],
        "titol": "Només la definició, res més"
      },
      {
        "figures": [],
        "textos": [
          "Traçant una diagonal, el paral·lelogram queda dividit en dos triangles que comparteixen aquesta diagonal com a costat comú. Com que els costats del paral·lelogram són paral·lels dos a dos i la diagonal fa de transversal comuna, es formen dos parells d'angles alterns interns iguals: un parell d'un costat de la diagonal, un altre parell de l'altre costat —dos parells diferents, no el mateix angle repetit."
        ],
        "titol": "Una diagonal, dos triangles"
      },
      {
        "figures": [
          {
            "peu": "Els arcs marquen els dos parells diferents d'angles alterns interns que la diagonal crea amb els dos parells de costats paral·lels: un arc per a un parell, dos arcs per a l'altre.",
            "src": "assets/img/pistes/fig-039.png"
          }
        ],
        "textos": [
          "Amb els dos parells d'angles alterns iguals més la diagonal compartida entre els dos triangles (angle-costat-angle, ASA), els dos triangles resulten congruents. D'aquí, a més, el tercer parell d'angles —els que cauen exactament als dos vèrtexs que la diagonal travessa— també ha de ser igual, perquè en cada triangle els tres angles ja estan determinats un cop se'n coneixen dos."
        ],
        "titol": "Els dos triangles són congruents"
      },
      {
        "figures": [],
        "textos": [
          "Cada vèrtex del paral·lelogram original queda format per un angle d'un dels dos triangles i un angle de l'altre. Als dos vèrtexs oposats que la diagonal no travessa, l'angle complet del paral·lelogram és, cadascun, un dels angles ja demostrats iguals entre els dos triangles —per tant, aquests dos vèrtexs oposats tenen angles iguals. El mateix raonament, aplicat a l'altra diagonal (que uneix els altres dos vèrtexs), demostra la igualtat per al segon parell de vèrtexs oposats."
        ],
        "titol": "Sumar els angles a cada vèrtex del paral·lelogram"
      },
      {
        "figures": [],
        "textos": [
          "Si un angle del paral·lelogram fa 65°, el seu oposat també ha de fer 65°, i els altres dos (adjacents a aquest) han de fer 115° cadascun —perquè els quatre sumen 360° i els angles adjacents entre ells sumen sempre 180° (angles suplementaris entre paral·leles)."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Sí, sempre: una diagonal divideix el paral·lelogram en dos triangles congruents (ASA, a partir de dos parells d'angles alterns interns), i d'aquesta congruència se'n dedueix directament que els angles situats a vèrtexs oposats del paral·lelogram són iguals.",
    "titol": "Els angles oposats d'un paral·lelogram"
  },
  "q110": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "No n'hi ha prou de comptar les simetries mirant el dibuix: cal una raó que es vegi directament a l'equació x²/a² − y²/b² = 1, sense necessitat de dibuixar res."
        ],
        "titol": "Una raó a l'equació, no només al dibuix"
      },
      {
        "figures": [],
        "textos": [
          "A l'equació de la hipèrbola, x i y hi apareixen només elevades al quadrat —mai soles, a la primera potència. Aquest detall, aparentment tècnic, és tota la clau."
        ],
        "titol": "Només potències parelles"
      },
      {
        "figures": [
          {
            "peu": "Els dos eixos de simetria de la hipèrbola, marcats en sanguina.",
            "src": "assets/img/pistes/fig-114.png"
          }
        ],
        "textos": [
          "Substituint x per −x a l'equació: (−x)²/a² − y²/b² = x²/a² − y²/b², exactament la mateixa equació —perquè (−x)²=x². Per tant, si un punt (x₀,y₀) satisfà l'equació, el punt (−x₀,y₀) també la satisfà: simetria respecte de l'eix vertical. Exactament el mateix argument, ara canviant y per −y, dona simetria respecte de l'eix horitzontal."
        ],
        "titol": "Canviar x per −x, i per −y"
      },
      {
        "figures": [],
        "textos": [
          "Combinant les dues reflexions —canviar x per −x i y per −y alhora— el punt (x₀,y₀) es converteix en (−x₀,−y₀), que també satisfà l'equació pel mateix motiu. Geomètricament, aplicar dues reflexions respecte de dos eixos perpendiculars és equivalent a una rotació de 180° al voltant del seu punt de tall (el centre): una tercera simetria que ve inclosa sense haver de demostrar-la per separat."
        ],
        "titol": "Una tercera simetria, de franc"
      },
      {
        "figures": [],
        "textos": [
          "Una el·lipse també té dos eixos i la rotació de 180°: en nombre, la hipèrbola no en té més. El que sorprèn és on porten aquelles simetries. La reflexió en l'eix vertical i la rotació de 180° no deixen cada branca al seu lloc: intercanvien les dues branques. Dibuixades, semblen dues corbes separades que no es toquen enlloc, i la simetria diu que són la mateixa corba, i que hi ha moviments del pla que converteixen l'una en l'altra exactament. Aquesta és la resposta al \"tanta\": no en té més que l'el·lipse, però n'hi ha que travessen un buit que semblava infranquejable."
        ],
        "titol": "Per què \"tanta\" simetria, si l'el·lipse en té les mateixes"
      },
      {
        "figures": [],
        "textos": [
          "Amb a=3, b=4: el punt (5, 5,33) satisfà x²/9−y²/16=1 (val 1,0). Substituint (−5, 5,33), (5, −5,33) i (−5, −5,33) a la mateixa equació, els quatre casos donen exactament 1,0."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Una hipèrbola té dos eixos de simetria (i, combinant-los, una simetria de rotació de 180° pel centre) perquè la seva equació només conté x² i y², mai x ni y a soles: substituir x per −x, o y per −y, deixa l'equació exactament igual. En nombre no en té més que una el·lipse; el que crida l'atenció és que dues d'aquestes simetries intercanvien les dues branques, que semblaven corbes separades. El mateix argument (només potències parelles ⇒ simetria) explica per què l'el·lipse té també dos eixos, i per què la paràbola (amb x a la primera potència) en té només un.",
    "titol": "Per què les hipèrboles tenen tanta simetria"
  },
  "q111": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Al voltant d'una hipèrbola hi ha dos quadrilàters que criden l'atenció, i convé no confondre'ls. El que no és el diamant: el rectangle que formen les dues asímptotes amb les tangents als vèrtexs, de vèrtexs (±a,±b) i amb les asímptotes com a diagonals. Aquell existeix i és útil, però els seus costats fan 2a i 2b, no c.",
          "\"El diamant\" té els quatre vèrtexs sobre els eixos: els dos vèrtexs de la hipèrbola, a distància a del centre, i els dos punts a distància b del centre sobre l'eix perpendicular. Amb l'orientació habitual són (a,0), (0,b), (−a,0) i (0,−b). Els seus costats resulten paral·lels a les asímptotes —el que va de (a,0) a (0,b) té pendent −b/a, exactament el d'una d'elles—, i és per aquí que la figura s'enganxa a la hipèrbola."
        ],
        "titol": "Identificar el diamant abans de mesurar-lo"
      },
      {
        "figures": [
          {
            "peu": "El rombe (negre) format pels quatre punts, amb les seves diagonals 2a i 2b sobre els dos eixos.",
            "src": "assets/img/pistes/fig-115.png"
          }
        ],
        "textos": [
          "Les diagonals d'aquest quadrilàter —una de longitud 2a (entre els dos vèrtexs), l'altra de longitud 2b (entre els altres dos punts)— es tallen exactament al centre, que n'és el punt mitjà comú, i ho fan en angle recte (una diagonal és sobre l'eix horitzontal, l'altra sobre el vertical, perpendiculars per construcció). Un quadrilàter amb les diagonals perpendiculars i que es reparteixen per la meitat és, sempre, un rombe —els seus quatre costats són iguals."
        ],
        "titol": "Reconèixer que és un rombe"
      },
      {
        "figures": [],
        "textos": [
          "Cada costat del rombe uneix un vèrtex de la hipèrbola (per exemple, (a,0)) amb un dels altres dos punts (per exemple, (0,b)) —la distància entre ells és la hipotenusa d'un triangle rectangle amb catets a i b: costat = √(a²+b²)."
        ],
        "titol": "El costat, com a hipotenusa"
      },
      {
        "figures": [],
        "textos": [
          "√(a²+b²) és, precisament, com es defineix c —la distància del centre als focus d'una hipèrbola, la \"constant focal\" d'aquest recorregut. El costat del rombe i la distància del centre a cada focus són, doncs, exactament el mateix nombre, no només valors que coincideixen per casualitat en un exemple concret."
        ],
        "titol": "Reconèixer aquesta xifra"
      },
      {
        "figures": [],
        "textos": [
          "a=3, b=4: costat del diamant = √(9+16)=√25=5 —un triangle 3-4-5 exacte. Els focus, a distància c=5 del centre sobre l'eix dels vèrtexs, coincideixen amb aquest mateix valor."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "El costat del rombe que té per diagonals els dos eixos de la hipèrbola —2a entre els vèrtexs i 2b sobre l'eix perpendicular— val √(a²+b²), exactament la mateixa expressió que c, la distància del centre als focus d'una hipèrbola. Aquesta identitat surt de reconèixer el quadrilàter com un rombe (diagonals perpendiculars 2a i 2b, que es reparteixen per la meitat), i el seu costat com la hipotenusa del mateix triangle rectangle (a,b,c) que ja apareixia amagat a l'equació de la hipèrbola des del principi.",
    "titol": "El rombe amagat en una hipèrbola"
  },
  "q112": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Les dues asímptotes d'una hipèrbola es tallen formant un angle que depèn dels valors concrets de a i b —no és sempre el mateix. Quan aquest angle és de 90°, la hipèrbola es diu recta (o rectangular). La pregunta demana trobar quin estirament converteix qualsevol hipèrbola en una d'aquestes."
        ],
        "titol": "Un angle que depèn de la forma"
      },
      {
        "figures": [],
        "textos": [
          "A la Qüestió 77, l'homotècia escalava una figura sencera pel mateix factor en totes direccions —una còpia reduïda o ampliada, sense canviar-ne la forma. Aquí, en canvi, cal un factor diferent per a l'eix horitzontal i per al vertical: només així es pot canviar l'angle de les asímptotes sense simplement fer la figura més gran o més petita."
        ],
        "titol": "Per què cal un factor diferent a cada eix"
      },
      {
        "figures": [
          {
            "peu": "La hipèrbola original, amb asímptotes inclinades (negre), i la mateixa hipèrbola després de l'estirament, amb asímptotes perpendiculars (sanguina).",
            "src": "assets/img/pistes/fig-116.png"
          }
        ],
        "textos": [
          "Partint de x²/a² − y²/b² = 1, es defineixen dues noves coordenades X=x/a i Y=y/b —dividir l'eix horitzontal per a, el vertical per b, cadascun pel seu propi valor. Substituint a l'equació original: X² − Y² = 1, exactament l'equació d'una hipèrbola recta, amb asímptotes Y=±X (que formen 90° entre si, ja que tenen pendents +1 i −1, perpendiculars)."
        ],
        "titol": "Dividir cada eix pel seu propi factor"
      },
      {
        "figures": [],
        "textos": [
          "L'estirament que ho aconsegueix és de factor 1/a en horitzontal i 1/b en vertical —dividir cada eix pel seu propi semieix. Amb a=b (el cas particular d'una hipèrbola ja rectangular), aquest estirament es converteix en la mateixa escala per als dos eixos —és a dir, en una homotècia—, i la figura no canvia de forma, només de mida: el cas anisòtrop conté el cas isòtrop de la Qüestió 77 com a situació particular."
        ],
        "titol": "El factor de cada eix"
      },
      {
        "figures": [],
        "textos": [
          "a=4, b=3: l'equació x²/16−y²/9=1 esdevé X²−Y²=1 amb X=x/4, Y=y/3. Comprovat amb el punt x=4√2, y=3: satisfà l'original (32/16−9/9=2−1=1) i, un cop dividit, X=√2, Y=1 satisfà la recta (2−1=1)."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "L'estirament de factor 1/a en horitzontal i 1/b en vertical converteix qualsevol hipèrbola x²/a²−y²/b²=1 en la hipèrbola rectangular X²−Y²=1, d'asímptotes perpendiculars. A diferència de l'homotècia de la Qüestió 77 (el mateix factor a totes direccions), aquí calen dos factors diferents perquè és precisament aquesta diferència la que canvia l'angle entre les asímptotes.",
    "titol": "Tota hipèrbola és una hipèrbola rectangular estirada"
  },
  "q113": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "No cal treballar amb un punt genèric de l'el·lipse: n'hi ha prou de triar el punt més fàcil de tots —l'extrem de l'eix curt (el punt més alt)— i calcular-hi la distància als dos focus."
        ],
        "titol": "Un punt, no tota la corba"
      },
      {
        "figures": [
          {
            "peu": "El triangle isòsceles des del punt més alt cap als dos focus, amb els dos costats iguals a a i el catet vertical b.",
            "src": "assets/img/pistes/fig-118.png"
          }
        ],
        "textos": [
          "Des del punt més alt de l'el·lipse, les distàncies als dos focus són iguals per simetria —el punt és exactament sobre l'eix que reflecteix un focus sobre l'altre. Com que aquestes dues distàncies han de sumar la constant focal 2a, cadascuna val exactament a."
        ],
        "titol": "Per simetria, les dues distàncies són iguals"
      },
      {
        "figures": [],
        "textos": [
          "La línia des del centre fins al punt més alt (llargada b, l'eix curt) i la línia des del centre fins a un focus (llargada c, encara desconeguda) formen un angle recte —tots dos són sobre els dos eixos de simetria de l'el·lipse, perpendiculars entre si. Aquestes dues línies, més el segment del focus al punt més alt (llargada a, ja trobada), formen un triangle rectangle amb catets b i c i hipotenusa a."
        ],
        "titol": "El triangle rectangle amagat"
      },
      {
        "figures": [],
        "textos": [
          "Amb hipotenusa a i catet b: a² = b² + c², és a dir, c² = a² − b². Els focus són, doncs, a distància √(a²−b²) del centre, sobre l'eix llarg."
        ],
        "titol": "Pitàgores, i aïllar c"
      },
      {
        "figures": [],
        "textos": [
          "a=5, b=3: c²=25−9=16, c=4. Comprovat amb el punt (0,3): distància a cada focus (±4,0) és √(16+9)=5, i 5+5=10=2a.",
          "Convé no dir-ho malament quan es compara amb la hipèrbola: a²=b²+c² i c²=a²−b² són la mateixa igualtat escrita de dues maneres, no dues de diferents. El que canvia de veritat és qui fa d'hipotenusa. A l'el·lipse la hipotenusa és a, i per tant c<a: el focus cau entre els vèrtexs. A la hipèrbola la hipotenusa és c, surt c²=a²+b² i per tant c>a: el focus cau fora dels vèrtexs. És el mateix triangle rectangle llegit amb els papers canviats."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "c² = a² − b², amb c la distància del centre a cada focus. Surt de calcular la distància al punt més alt de l'el·lipse (que val exactament a, per simetria i per la constant focal), i aplicar Pitàgores al triangle rectangle que formen aquesta distància, l'eix curt (b) i la distància al focus (c).",
    "titol": "Els focus d'una el·lipse en termes dels seus dos radis"
  },
  "q114": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "El cas més senzill de tots és la hipèrbola unitat, x²−y²=1 (a=b=1). Trobant-hi els focus, la fórmula general per a qualsevol a, b hauria de reduir-se a aquest cas particular quan es posi a=b=1."
        ],
        "titol": "Provar primer el cas més senzill"
      },
      {
        "figures": [
          {
            "peu": "La hipèrbola unitat, amb els vèrtexs a (±1,0) i els focus, més enllà, a (±√2,0).",
            "src": "assets/img/pistes/fig-117.png"
          }
        ],
        "textos": [
          "A l'el·lipse (Qüestió 113), el focus queda \"cap endins\": c²=a²−b², amb c més petit que a. A la hipèrbola, les dues branques s'obren cap enfora, allunyant-se de l'eix curt en lloc d'envoltar-lo: el focus hi ha d'anar més lluny del centre que el vèrtex, no més a prop. Això suggereix que el signe hauria de ser una suma, no una resta: c² = a² + b². Ara bé, endevinar-ho i comprovar que quadra no és demostrar-ho, i aquí es pot demostrar. Al punt de la corba just damunt del focus, P=(c,h), la distància al focus proper és simplement h i la del llunyà surt de Pitàgores amb catets 2c i h. Imposant que la diferència valgui 2a i aïllant h, surt h=(c²−a²)/a; l'equació de la corba, per la seva banda, hi dona h²=b²(c²−a²)/a². Igualant les dues expressions queda c²−a²=b², és a dir c²=a²+b²."
        ],
        "titol": "Un signe diferent del de l'el·lipse"
      },
      {
        "figures": [],
        "textos": [
          "Amb a=b=1: c=√(1²+1²)=√2 —un valor que sí és familiar (la diagonal d'un quadrat de costat 1), confirmant que el signe de suma és el correcte."
        ],
        "titol": "Comprovar-ho amb el cas unitat"
      },
      {
        "figures": [],
        "textos": [
          "Aquí hi ha la trampa gran de la pregunta. L'estirament de la Qüestió 112 —factor a en horitzontal, b en vertical— transforma bé la corba: els vèrtexs (±1,0) passen a (±a,0), que són els vèrtexs nous. Amb els focus, en canvi, no serveix: el punt on va a parar el focus antic no és el focus nou. Amb a=4 i b=3, el focus (√2,0) es transforma en (4√2, 0) ≈ (5,66; 0), mentre que el focus real de x²/16−y²/9=1 és (5,0).",
          "La raó és que els focus no depenen només de la forma de la corba, sinó de distàncies, i un estirament que allarga més en una direcció que en l'altra no les conserva. Només quan a=b —quan l'escalat és uniforme, i per tant una homotècia com les de la Qüestió 77— els focus s'hi deixen portar. Per a la hipèrbola general cal, doncs, tornar a aplicar la relació c²=a²+b² amb els seus semieixos: els focus són a (±√(a²+b²), 0)."
        ],
        "titol": "Generalitzar: per què l'estirament no serveix"
      },
      {
        "figures": [],
        "textos": [
          "a=4, b=3: c=√(16+9)=5, focus a (±5,0) i vèrtexs a (±4,0) —el mateix triangle 3-4-5 que ja apareixia amb el rombe de la Qüestió 111. Pel camí llarg, amb el punt just damunt del focus: P=(5, 9/4) és a la corba (25/16 − (81/16)/9 = 1), la distància al focus proper (5,0) val 9/4 i la del llunyà (−5,0) val √(10²+(9/4)²) = 41/4, i la diferència és 41/4 − 9/4 = 8 = 2a. I la trampa, per contrast: 4√2 ≈ 5,66, que no és 5."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "c² = a² + b² per a una hipèrbola —el signe oposat al de l'el·lipse (c²=a²−b²)—, perquè els focus d'una hipèrbola cauen més enllà dels vèrtexs, no entre ells. Amb a=b=1, la hipèrbola unitat, c=√2. Per a qualsevol altra cal aplicar de nou la relació amb els seus semieixos, i no transportar els focus amb l'estirament de la Qüestió 112: aquell estirament transforma bé la corba però no porta els focus als focus, i només ho fa quan a=b, que és quan resulta uniforme.",
    "titol": "Els focus d'una hipèrbola: suma, no resta"
  },
  "q115": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "La \"constant focal\" ve de sumar (el·lipse) o restar (hipèrbola) distàncies a dos punts fixos, els focus. El \"diàmetre\" és, simplement, la distància entre els dos vèrtexs de la figura —una mida, no cap suma ni resta relacionada amb els focus. Res, a la seva definició, garanteix que siguin la mateixa xifra."
        ],
        "titol": "Dues coses que no semblen la mateixa"
      },
      {
        "figures": [
          {
            "peu": "El vèrtex dret de l'el·lipse i de la hipèrbola, amb les distàncies als dos focus escrites en termes de a i c.",
            "src": "assets/img/pistes/fig-119.png"
          }
        ],
        "textos": [
          "El vèrtex mateix és el punt de la corba més senzill per calcular-hi la constant focal directament: ja és sobre l'eix on cauen els dos focus, així que les distàncies del vèrtex a cadascun es poden escriure sense cap arrel quadrada, només sumant o restant longituds sobre una mateixa línia."
        ],
        "titol": "Calcular-ho al punt més fàcil"
      },
      {
        "figures": [],
        "textos": [
          "El vèrtex dret és a distància a−c del focus proper i a+c del llunyà (el focus proper és entre el centre i el vèrtex; el llunyà és a l'altra banda). La constant focal —la suma— és (a−c)+(a+c) = 2a."
        ],
        "titol": "El cas de l'el·lipse"
      },
      {
        "figures": [],
        "textos": [
          "Aquí el focus és més enllà del vèrtex, no abans: el vèrtex dret és a distància c−a del focus proper i c+a del llunyà. La constant focal —ara la diferència— és (c+a)−(c−a) = 2a també."
        ],
        "titol": "El cas de la hipèrbola"
      },
      {
        "figures": [],
        "textos": [
          "En tots dos casos, la constant focal surt exactament 2a —i 2a és, precisament, la distància entre els dos vèrtexs (a un costat del centre i a l'altre): el diàmetre de la figura. Aquesta demostració no depèn de cap punt genèric de la corba, només del vèrtex, i per tant val igual per a qualsevol el·lipse o hipèrbola, sigui quina sigui la seva mida concreta."
        ],
        "titol": "El mateix resultat, dues vegades"
      },
      {
        "figures": [],
        "textos": [
          "El·lipse a=5,c=4: al vèrtex (5,0), distàncies 5−4=1 i 5+4=9, suma 10=2·5. Hipèrbola a=4,c=5: al vèrtex (4,0), distàncies 5−4=1 i 5+4=9, diferència 8=2·4."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "La constant focal (2a en tots dos casos) és exactament el diàmetre de la figura —la distància entre els seus dos vèrtexs. Es demostra calculant les dues distàncies del vèrtex als focus en termes de a i c (a∓c i a±c), i comprovant que la seva suma (el·lipse) o diferència (hipèrbola) dona sempre 2a. És la mateixa constant que fa funcionar el mètode del fil de la Qüestió 98, ara demostrada des d'un punt fix en comptes d'un punt qualsevol de la corba.",
    "titol": "La constant focal és el diàmetre"
  },
  "q116": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una frase sobre l'angle que fa la tangent en un punt qualsevol de la hipèrbola amb els dos radis focals d'aquell punt —l'anàloga, per a la hipèrbola, de la propietat reflectora de l'el·lipse."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "A l'el·lipse, els dos radis focals van cap al mateix costat de la tangent —per això un raig des d'un focus rebota cap a l'altre. A la hipèrbola, els dos focus són a banda i banda de la corba: un braç s'acosta a un focus mentre l'altre se n'allunya. Dibuixant un punt i els seus dos radis focals, on cau la tangent respecte d'ells?"
        ],
        "titol": "No serà exactament la mateixa"
      },
      {
        "figures": [
          {
            "peu": "El punt P, els dos radis focals cap a F i F', i la tangent: l'arc marca l'angle que la tangent biseca.",
            "src": "assets/img/pistes/fig-120.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Els dos angles que la tangent forma amb els dos radis focals són iguals: la tangent és la bisectriu de l'angle que formen entre ells els dos radis focals —la bisectriu interior, no la de l'angle exterior com passava a l'el·lipse."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Amb a=4, b=3, c=5, al punt P=(5, 9/4) de la hipèrbola (25/16 − (81/16)/9 = 1, confirmat que hi és). La tangent en P té pendent 9x/(16y) = 1,25. Mesurant l'angle que fa la tangent amb PF₁ (cap a (5,0)) i amb PF₂ (cap a (−5,0)): tots dos surten ≈141,3°, iguals entre si —o ≈38,7° tots dos, si es pren la tangent en l'altre sentit. El que cal comprovar és que coincideixen entre ells, no quin dels dos números surt: el sentit que es triï per a la tangent canvia els dos angles alhora, i els deixa iguals igualment.",
          "Aquesta bisectriu interior —en lloc de l'exterior— és exactament el que fa que un mirall amb forma d'hipèrbola, orientat cap a un focus, dispersi els raigs en lloc de concentrar-los: el principi dels telescopis Cassegrain: un mirall gran parabòlic recull la llum i l'envia cap al seu focus, i un petit mirall hiperbòlic posat pel mig la desvia cap a l'altre focus de la hipèrbola, on hi ha l'ocular. És exactament la propietat d'aquí —el que va cap a un focus, en surt cap a l'altre."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "La tangent a la hipèrbola en un punt P bisecta l'angle interior format pels dos radis focals PF i PF' —a diferència de l'el·lipse, on la tangent bisecta l'angle exterior.",
    "titol": "La tangent de la hipèrbola: bisectriu interior, no exterior"
  },
  "q117": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una altra qüestió ja va mostrar que totes les hipèrboles s'obtenen les unes de les altres estirant-les. Aquí es pregunta el mateix per a la paràbola: totes les paràboles, s'obtenen totes d'una de sola?"
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "Una hipèrbola necessita dos números (a i b) per descriure-la —per això calia un estirament amb dos factors diferents. Una paràbola y=x²/(4p) només en necessita un (p). Quants factors d'escala —potser un per direcció, potser un de sol— calen per passar d'una paràbola a qualsevol altra?"
        ],
        "titol": "Compta els graus de llibertat"
      },
      {
        "figures": [
          {
            "peu": "Dues paràboles amb el mateix vèrtex i focus a alçades diferents. La recta horitzontal és la tangent comuna al vèrtex, que l'homotècia deixa quieta; les directrius, en canvi, són a distància p per sota de cada vèrtex i l'homotècia les allunya, igual que els focus.",
            "src": "assets/img/pistes/fig-121.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Amb una homotècia —el mateix factor en x i en y, que és el que la distingeix d'un estirament— centrada al vèrtex, y=x²/(4p) es converteix en y=x²/(4·k·p): totes les paràboles són homotècies les unes de les altres, a diferència de les hipèrboles, que en necessiten dues de diferents."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "p=1 (y=x²/4) escalada per factor 2 uniforme des del vèrtex. Seguint un punt: (x, x²/4) va a parar a (2x, x²/2). Amb X=2x la coordenada nova, x=X/2 i l'alçada nova és (X/2)²/2 = X²/8. La paràbola escalada és, doncs, y=x²/8, és a dir p=2 —exactament k·p amb k=2. El focus, a alçada p, es mou de (0,1) a (0,2): s'allunya el mateix factor 2 que tota la resta.",
          "Que calgui només un factor d'escala —en lloc de dos, com a la hipèrbola— és el primer indici que totes les paràboles són \"la mateixa figura, vista de més a prop o de més lluny\": la mateixa idea que torna a aparèixer quan la paràbola surt com a envolupant d'un feix de rectes."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Totes les paràboles són homotècies d'una de sola —un únic factor d'escala basta, a diferència de la hipèrbola, que en necessita dos de diferents.",
    "titol": "Totes les paràboles són una de sola, vista de més a prop"
  },
  "q118": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una demostració que un raig vertical —paral·lel a l'eix— que arriba a la paràbola rebota exactament cap al focus, sense fer servir cap argument de \"límit\" ni de rectes que es toquen \"a l'infinit\". Només construcció i triangles."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [
          {
            "peu": "PF i PD, marcats amb el mateix senyal: són iguals, per definició de la paràbola.",
            "src": "assets/img/pistes/fig-205.png"
          }
        ],
        "textos": [
          "Un punt P de la paràbola és exactament tan lluny del focus F com de la directriu —és a dir, de D, el peu de la perpendicular des de P a la directriu. Si PF=PD, quin triangle isòsceles se'n dibuixa tot sol?"
        ],
        "titol": "La definició per punts"
      },
      {
        "figures": [
          {
            "peu": "El triangle isòsceles PFD, l'angle recte a M, i la tangent (que passa per P i M) prolongant-se cap enfora.",
            "src": "assets/img/pistes/fig-122.png"
          }
        ],
        "textos": [
          "El triangle isòsceles PFD, amb M el punt mitjà de FD, i la recta que passa per P i per M —que resulta ser, alhora, la mediatriu de FD i la tangent a la paràbola en P."
        ],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Aquella bisectriu, per ser el triangle isòsceles, és també la mediatriu del costat FD. I ara la peça que ho tanca tot: aquella recta és la tangent a la paràbola en P, i es demostra sense cap límit ni cap derivada. Prenem un punt Q qualsevol d'aquella recta, diferent de P. Com que és la mediatriu de FD, es té QF = QD. Però D no és, per a Q, el peu de la seva perpendicular a la directriu —només ho era per a P—, de manera que anar de Q fins a D és fer més camí que anar de Q fins a la directriu en perpendicular: QD > (distància de Q a la directriu). Per tant QF > (distància de Q a la directriu), i això vol dir que Q no és a la paràbola sinó fora. La recta toca la corba a P i no la torna a tocar enlloc: és la tangent. Un cop establert això, el rebot surt sol: aquesta recta bisecta l'angle entre PF i PD. I PD és vertical, perquè D és el peu de la perpendicular de P a la directriu, que és horitzontal —és a dir, PD és exactament la direcció del raig que arriba. Un raig que arriba per PD i rebota en una recta que bisecta l'angle PD–PF se'n va, doncs, per PF: cap al focus. Compte: FD, en canvi, no és vertical, tret del cas del vèrtex —és PD la que ho és sempre, i és aquesta la que fa la feina."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Paràbola y=x²/8 (p=2, focus F=(0,2), directriu y=−2). Amb x=3: el punt de la corba és P=(3, 9/8), el seu peu a la directriu és D=(3, −2). PD = 9/8+2 = 25/8, i PF = √(3²+(9/8−2)²) = √(9+49/64) = 25/8 —confirmat que PFD és isòsceles. El punt mitjà de F=(0,2) i D=(3,−2) és (1,5, 0). La recta de P a aquest punt mitjà té pendent (9/8−0)/(3−1,5) = 3/4, exactament el pendent de la tangent en aquell punt.",
          "Val la pena comprovar també l'argument del \"queda fora\", perquè és el moll de la demostració. Prenent punts d'aquella mateixa recta: a M=(1,5; 0), la distància al focus és 2,5 i la distància a la directriu, 2 —fora. A (0; −1,125), 3,125 contra 0,875 —fora. A (4,5; 2,25), 4,507 contra 4,25 —fora. I només a P=(3; 1,125) les dues valen el mateix, 3,125: l'únic punt de contacte.",
          "Aquesta construcció —la mediatriu d'un segment entre el focus i el peu a la directriu— és el mètode clàssic, sense càlcul, amb què es demostrava aquesta propietat molt abans que existís la geometria analítica, i és exactament la propietat que fa servir qualsevol antena parabòlica: si totes les tangents reflecteixen cap al mateix punt F, tots els raigs paral·lels a l'eix s'hi concentren."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "La tangent a la paràbola en P és la mediatriu del segment FD, entre el focus i el peu a la directriu —construïda amb un triangle isòsceles ordinari, sense cap argument de límit ni d'infinit. Que sigui la tangent es demostra veient que qualsevol altre punt Q d'aquella recta queda fora de la paràbola: hi compleix QF=QD i, alhora, QD supera la distància perpendicular de Q a la directriu. I com que la recta biseca l'angle entre PD (vertical, la direcció del raig que arriba) i PF, el raig hi rebota exactament cap al focus.",
    "titol": "La tangent parabòlica, sense trucs de l'infinit"
  },
  "q119": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una explicació de per què la \"corba\" que sembla aparèixer entre les rectes —que en realitat no n'hi ha cap de dibuixada— és exactament una paràbola, i no una altra corba qualsevol."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [
          {
            "peu": "Els dos eixos, punts numerats 0..n, i algunes rectes del feix que uneixen i amb n−i.",
            "src": "assets/img/pistes/fig-206.png"
          }
        ],
        "textos": [
          "Cada recta és tangent a una certa corba (la seva envolupant): la corba que \"toca\" cada recta del feix sense travessar-ne cap. Amb n+1 punts a cada eix, numerats 0..n, la recta i uneix el punt i d'un eix amb el punt n−i de l'altre. Quina relació hi ha entre els dos números que etiqueten els extrems d'una mateixa recta?"
        ],
        "titol": "Cap recta és corba; és l'ull qui hi veu una corba"
      },
      {
        "figures": [
          {
            "peu": "El patró complet de rectes, amb la corba envolupant real (vermell) sobreposada: una paràbola.",
            "src": "assets/img/pistes/fig-123.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "La recta que uneix (i,0) amb (0,n−i) té equació x/i + y/(n−i) = 1. Cada recta d'aquestes és tangent a la corba √x + √y = √n —una paràbola, girada 45° respecte de la posició habitual."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "No cal creure-s'ho: es demostra amb l'eina de la Qüestió 120, la de «tangent = la recta que hi toca amb arrel doble». Primer, la corba sense arrels: de √x + √y = √n, elevant al quadrat dues vegades, surt (x−y)² = 2n(x+y) − n². Substituint-hi la recta y = b − (b/a)x, amb a=i, b=n−i i a+b=n, els comptes es simplifiquen sols i queda (n²/a²)·x² − 2n·x + a² = 0, és a dir (x − a²/n)² = 0."
        ],
        "titol": "Per què hi és tangent, i no només a prop"
      },
      {
        "figures": [],
        "textos": [
          "La recta no talla la corba en dos punts; la toca en un de sol, a x = a²/n, i per simetria y = b²/n. Que aquell punt sigui realment sobre la corba es comprova en una línia: √(a²/n) + √(b²/n) = (a+b)/√n = n/√n = √n. Cada recta del feix té, doncs, el seu punt de contacte, i tots ells junts són la paràbola que l'ull hi veu."
        ],
        "titol": "Arrel doble: el punt de contacte"
      },
      {
        "figures": [],
        "textos": [
          "n=10, recta i=4 (x/4 + y/6 = 1): el punt de contacte que prediu la fórmula és (16/10, 36/10) = (1,6; 3,6). És a la recta? 1,6/4 + 3,6/6 = 0,4 + 0,6 = 1. És a la corba? √1,6 + √3,6 = 1,2649 + 1,8974 = 3,1623 = √10. Amb i=5 surt (2,5; 2,5) i amb i=3, (0,9; 4,9): totes tres cauen sobre la mateixa corba.",
          "Cosa diferent és on es tallen dues rectes veïnes: les i=4 i i=5 es tallen a (2,3), i allà √2+√3≈3,146, que no és √10≈3,162 sinó una mica menys. Aquesta diferència és l'error de fer servir rectes veïnes en lloc de rectes infinitament properes, i s'encongeix com més rectes es dibuixin. Els punts de contacte, en canvi, hi són exactes des del primer moment.",
          "Aquesta manera de generar una corba com a envolupant d'una família de rectes —sense dibuixar mai la corba directament— és la mateixa idea ja feta servir amb un bastó de longitud constant lliscant entre dos eixos perpendiculars: allà l'envolupant sortia d'un segment lliscant, aquí, d'una família de segments amb un patró numèric."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "El feix de rectes que uneixen (i,0) amb (0,n−i), per a i=0..n, té com a envolupant la corba √x + √y = √n —una paràbola girada 45°. Cap recta la dibuixa; és tangent a totes elles alhora.",
    "titol": "La paràbola invisible: envolupant d'un feix de rectes"
  },
  "q12": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Aquí es dona més informació que a la Qüestió 11: no només és un paral·lelogram, sinó que, a més, les seves dues diagonals fan exactament la mateixa llargada. La pregunta és què es pot concloure ara que no es podia concloure abans amb menys informació —i la resposta és el recíproc d'un fet ja conegut en l'altra direcció (que un rectangle té les diagonals iguals): aquí cal demostrar que, a l'inrevés, tenir-les iguals ja obliga a ser un rectangle."
        ],
        "titol": "Una dada extra respecte a q11"
      },
      {
        "figures": [],
        "textos": [
          "Imaginem un paral·lelogram ben esbiaixat, com el de la figura, i les seves dues diagonals, de longituds diferents. Si s'anés \"redreçant\" el paral·lelogram —fent-lo cada cop menys inclinat— les dues diagonals s'anirien igualant progressivament, i alhora els seus angles s'anirien acostant a 90°. La igualtat de diagonals no és una propietat aïllada: apunta cap als angles rectes."
        ],
        "titol": "Intuïció: \"redreçant\" el paral·lelogram"
      },
      {
        "figures": [
          {
            "peu": "Els vèrtexs A, B, C, D del paral·lelogram, i les dues diagonals AC i BD, marcades amb una sola marqueta cadascuna: iguals entre si.",
            "src": "assets/img/pistes/fig-040.png"
          }
        ],
        "textos": [
          "Anomenem els vèrtexs A, B, C, D, en ordre, i considerem el triangle ABC i el triangle ABD, formats per un costat comú (AB) i cadascuna de les dues diagonals. Com que ABCD és un paral·lelogram, els costats AD i BC —costats oposats— ja són iguals entre si. I ara, per la dada nova de l'enunciat, les diagonals AC i BD també són iguals entre si. Amb el costat AB compartit pels dos triangles i els altres dos costats iguals dos a dos, els dos triangles són congruents pel criteri costat-costat-costat (SSS). Val la pena escriure la correspondència i no acontentar-se amb «ABC i ABD són congruents»: la correspondència és A↔B, B↔A, C↔D, és a dir, el triangle ABC és congruent amb el triangle BAD (AB↔BA, BC↔AD, CA↔DB). És aquesta correspondència, i no una altra, la que diu quins angles es poden igualar al pas següent."
        ],
        "titol": "Dos triangles, ara amb una dada més"
      },
      {
        "figures": [],
        "textos": [
          "Seguint la correspondència A↔B, B↔A, C↔D, l'angle en B del triangle ABC —que és l'angle ABC del paral·lelogram— és igual a l'angle en A del triangle BAD —que és l'angle DAB. Però aquests dos angles, DAB i ABC, són també angles adjacents del paral·lelogram —cauen als dos extrems del mateix costat AB— i els angles adjacents d'un paral·lelogram sempre sumen 180°. Això últim és immediat: AD i BC són paral·lels i AB els talla, de manera que DAB i ABC són angles interns pel mateix costat de la transversal. Dos angles que són iguals entre si i que, a més, sumen 180° junts, només poden ser de 90° cadascun. Un cop un angle del paral·lelogram és recte, els altres tres també ho són (angles oposats iguals, angles adjacents suplementaris): és un rectangle."
        ],
        "titol": "De la congruència als angles rectes"
      },
      {
        "figures": [],
        "textos": [
          "Paral·lelogram de costats 5 i 12: si les diagonals fan totes dues 13, ha de sortir un rectangle — i, de fet, 5-12-13 és el triangle rectangle conegut, no per casualitat: cada meitat del rectangle (tallat per una diagonal) és exactament aquest triangle."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Sí: un paral·lelogram amb les dues diagonals iguals ha de ser un rectangle. La igualtat de diagonals, combinada amb els costats oposats ja iguals per definició, fa que dos triangles formats per una diagonal siguin congruents (SSS); d'aquí surt que dos angles adjacents del paral·lelogram són alhora iguals entre si i suplementaris, cosa que només és possible si cadascun fa 90°.",
    "titol": "Quan un paral·lelogram és, de fet, un rectangle"
  },
  "q120": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una relació d'àrees 1:2 entre dues figures: el triangle TNP tallat per la tangent en un punt P de la paràbola (el \"sector\"), i el triangle VNP, que és la meitat del rectangle des del vèrtex V fins a aquell mateix punt P.",
          "Convé anar amb compte amb els noms, perquè l'enunciat diu \"la meitat del rectangle\" i es pot llegir malament. Hi ha tres àrees en joc: el rectangle sencer, la seva diagonal —el triangle VNP, que n'és la meitat sense cap misteri, perquè qualsevol diagonal parteix un rectangle en dos— i el sector TNP. El que s'ha de demostrar és que el sector és la meitat de la diagonal; respecte del rectangle sencer, doncs, en resulta una quarta part."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "Sigui P un punt de la paràbola i N el seu peu (la projecció de P sobre l'eix). La tangent en P talla aquest mateix eix en un punt T. Quina relació hi ha entre la distància de T al vèrtex i la de N al vèrtex?"
        ],
        "titol": "On talla la tangent l'eix?"
      },
      {
        "figures": [
          {
            "peu": "V, T, N a l'eix, amb T exactament al punt mitjà entre V i N; P a la paràbola, amb la tangent i la diagonal VP.",
            "src": "assets/img/pistes/fig-124.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Amb y=x² i P=(p,p²), la tangent en P té pendent 2p —es pot trobar sense derivades, exigint que la recta toqui la paràbola en un sol punt (discriminant zero)— i talla y=0 a x=p/2: exactament el punt mitjà entre el vèrtex (x=0) i N (x=p). El triangle VNP té sempre àrea igual a la meitat del rectangle vèrtex-a-P; i com que T és el punt mitjà de VN, el triangle TNP —el sector— té la mateixa alçada que VNP però la meitat de la base, així que la seva àrea és la meitat de la de VNP."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "p=3, o sigui P=(3,9) i N=(3,0). Les tres àrees: rectangle de costats 3 i 9 = 27; triangle VNP, la diagonal, = 13,5; i el sector TNP, amb T=(1,5; 0), de base 1,5 i alçada 9, = 0,5·1,5·9 = 6,75. Les dues raons: 6,75 és exactament la meitat de 13,5, i exactament una quarta part de 27. Qui obtingui 1/4 en lloc d'1/2 no s'ha equivocat: ha comparat amb el rectangle en lloc de la diagonal.",
          "Que la tangent talli l'eix exactament al punt mitjà —ni abans ni després— és el mateix fet que fa possible calcular, sense cap límit ni integral, quina fracció exacta del rectangle omple la paràbola sencera."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "La tangent a la paràbola en P talla l'eix exactament al punt mitjà entre el vèrtex i el peu de P. Per això el sector TNP té la meitat de la base del triangle VNP —que ja és la meitat del rectangle— i acaba fent exactament un quart del rectangle, és a dir, la meitat del triangle diagonal VNP.",
    "titol": "El sector parabòlic: la tangent que talla just al mig"
  },
  "q121": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Un argument que demostri, sense retòrica d'\"infinitèsims\", que l'àrea tancada entre l'arc de paràbola i els dos costats superiors de la seva caixa circumscrita és exactament 2/3 de l'àrea total —ni una mica més, ni una mica menys."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [
          {
            "peu": "Vuit franges verticals iguals, cadascuna amb el seu rectangle per sota de la corba.",
            "src": "assets/img/pistes/fig-207.png"
          }
        ],
        "textos": [
          "Divideix la base de la caixa en n franges verticals iguals. A cada franja, la paràbola hi talla un rectangle petit. Sumant les àrees d'aquests n rectangles —la part que queda per sota de la corba— surt una suma coneguda de quadrats consecutius."
        ],
        "titol": "Parteix la caixa en franges, no en un sol tros"
      },
      {
        "figures": [
          {
            "peu": "Esquerra: la secció que es demana, 2/3 de la caixa. Dreta: la suma de rectangles que contenen la corba, que tendeix a 1/3 per dalt.",
            "src": "assets/img/pistes/fig-125.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Amb n franges d'amplada 1/n sobre l'interval [0,1], la suma de les àrees dels rectangles per sota de y=x² és (1/n)·Σ(k/n)² per a k=1..n, que val (1/n³)·[n(n+1)(2n+1)/6] = 1/3 + 1/(2n) + 1/(6n²). Aquesta suma no val mai exactament 1/3 —sempre s'hi passa una mica."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Hi ha aquí una escletxa que separa una demostració d'una comprovació. Aquests rectangles, amb l'alçada presa a l'extrem dret de cada franja, sobresurten per damunt de la corba: no són els de sota, són els que la contenen. Per això la suma sempre passa d'1/3 —i això només diu que l'àrea és com a molt 1/3, encara no que hi sigui igual.",
          "L'altra meitat surt gratis: els mateixos rectangles amb l'alçada a l'extrem esquerre sí que queden per sota de la corba, i la seva suma és la mateixa fórmula amb k=0..n−1, que val 1/3 − 1/(2n) + 1/(6n²). L'àrea queda atrapada entre les dues, 1/3 − 1/(2n) + 1/(6n²) ≤ àrea ≤ 1/3 + 1/(2n) + 1/(6n²), i les dues puntes s'estrenyen al voltant d'1/3 tant com calgui. Ara sí que qualsevol número que no sigui 1/3 es pot desmentir: 0,34 el desmenteix la suma superior amb n gran, i 0,33 el desmenteix la inferior. Aquesta és la diferència entre un pas al límit i un infinitèsim: no cal creure's res, la fórmula és exacta per a cada n."
        ],
        "titol": "El forat de l'argument, i com es tapa"
      },
      {
        "figures": [],
        "textos": [
          "Cal fer sempre les dues sumes, que és el que dona la demostració. n=10: la inferior val 0,285 i la superior 0,385 —forquilla ampla, però 1/3 ja hi és a dins. n=100: 0,32835 i 0,33835. n=10000: 0,333283 i 0,333383. La forquilla s'estreny pels dos costats al voltant de 0,33333…, i cap altre número no hi cap. Fet això, 1−1/3=2/3 dona la secció.",
          "Aquest mètode —partir en franges cada cop més fines i sumar una fórmula coneguda— és exactament l'exhauriment que Arquimedes va fer servir, sense cap concepte de límit formal, per calcular aquesta mateixa àrea. La suma de quadrats 1²+2²+...+n² que hi ha darrere val la pena recordar-la, perquè torna a aparèixer sempre que cal sumar quadrats consecutius."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "L'àrea sota la corba y=x² entre 0 i 1 és exactament 1/3 de la caixa —demostrat amb una fórmula exacta per a cada n, no per apel·lació a l'infinit—, i per tant la secció parabòlica (la part de dalt) n'és els 2/3 restants.",
    "titol": "Dos terços de la caixa: una fórmula exacta, no un infinitèsim"
  },
  "q122": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una descripció d'un punt en moviment de manera que la seva trajectòria sigui exactament l'espiral: dues coses que han de canviar alhora, i com."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "Un cercle és el resultat d'un punt que gira a distància constant d'un centre. Una espiral és quasi el mateix moviment, amb un únic canvi: què li hauria de créixer, a mesura que el punt gira, perquè cada volta quedi més enfora que l'anterior?"
        ],
        "titol": "Comença pel cas que ja es coneix"
      },
      {
        "figures": [
          {
            "peu": "Un punt sobre la corba, amb la fletxa (sanguina) que mostra cap on es mou en aquell instant.",
            "src": "assets/img/pistes/fig-126.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "El punt gira a velocitat angular constant —com les busques d'un rellotge— mentre, alhora, la seva distància al centre creix a velocitat constant amb el temps, no accelerada. Aquestes dues coses juntes —gir uniforme i allunyament uniforme— defineixen l'espiral d'Arquimedes."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Si la distància creix a raó d'una unitat per volta completa, després de 3 voltes el punt és a distància 3 del centre —el mateix patró que fa que les espires successives quedin sempre separades per la mateixa distància, com als solcs d'un disc de vinil.",
          "Descriure una corba com el resultat d'un moviment —en lloc de com una equació o una construcció estàtica— és exactament la mateixa idea que retrobaràs a la qüestió 123 amb l'hèlix —gir uniforme, combinat amb pujada uniforme en lloc d'allunyament— i, més endavant, amb les cicloides, un cercle que rodola sobre un altre."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Una espiral d'Arquimedes és la trajectòria d'un punt que gira a velocitat angular constant mentre, alhora, s'allunya del centre a velocitat constant —el mateix moviment que traça un cercle, amb el radi deixat créixer uniformement en lloc de fix.",
    "titol": "L'espiral: un cercle amb un radi que creix"
  },
  "q123": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una fórmula per a la longitud d'una hèlix que fa n voltes senceres al voltant d'un cilindre de radi R, mentre puja una alçada total H —sense haver de sumar infinits trossets de corba."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [
          {
            "peu": "El cas d'una sola volta: desenrotllat, el cilindre dona un rectangle, i l'hèlix se'n converteix en la diagonal.",
            "src": "assets/img/pistes/fig-208.png"
          }
        ],
        "textos": [
          "Imagina el cilindre com un full de paper enrotllat. Si es desenrotlla —es retalla per una línia vertical i s'estira pla—, l'hèlix dibuixada a sobre es converteix en quina mena de línia, sobre el rectangle pla resultant?"
        ],
        "titol": "\"Desenrotlla\" el cilindre"
      },
      {
        "figures": [
          {
            "peu": "El rectangle desenrotllat: amplada 2πRn (el perímetre multiplicat per les n voltes), alçada H; l'hèlix n'és la diagonal.",
            "src": "assets/img/pistes/fig-127.png"
          }
        ],
        "textos": [
          "El cas real, amb 4 voltes: el cilindre amb l'hèlix dibuixada a sobre, i al costat, en sanguina, el mateix cilindre desenrotllat en un rectangle pla amb la línia recta corresponent."
        ],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Un cop desenrotllat, el rectangle té amplada igual al perímetre del cilindre multiplicat per n —la distància horitzontal total recorreguda en n voltes— i alçada H. L'hèlix es converteix en la diagonal d'aquest rectangle, una línia recta, i la seva longitud és, per Pitàgores, √((2πRn)² + H²)."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "R=1, n=4 voltes, H=3: longitud = √((2π·4)²+9) = √(631,65+9) ≈ 25,31. Val la pena fer-ne, a més, dues comprovacions de sentit comú que no demanen calculadora. Si H=0, l'hèlix es converteix en el cercle recorregut 4 vegades, i la fórmula dona √((2π·4)²) = 2π·4, que és exactament això. Si R=0, el cilindre s'aprima fins a ser una recta i queda √(H²)=H, la pujada sencera. Una fórmula que passa els dos casos extrems difícilment s'equivoca al mig.",
          "\"Desenrotllar\" una superfície corba per convertir un problema en un de pla és la mateixa idea ja feta servir a les Qüestions 45 (l'àrea d'un cilindre) i 51 (la d'un con). Aquí, en lloc d'una àrea, en surt la longitud d'una corba —i funciona pel mateix motiu: el cilindre es pot obrir i estendre pla sense estirar-lo enlloc, de manera que cap longitud dibuixada a sobre no canvia en desenrotllar-lo."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "La longitud d'una hèlix que fa n voltes al voltant d'un cilindre de radi R mentre puja una alçada H és √((2πRn)² + H²) —la diagonal del rectangle que resulta de desenrotllar el cilindre.",
    "titol": "La longitud d'una hèlix: la diagonal d'un rectangle"
  },
  "q124": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una fórmula, a partir dels dos radis —el cercle gran R i el petit r—, que digui quants pics (cúspides) té la corba que dibuixa un punt del cercle petit quan aquest rodola per dins (hipocicloide) o per fora (epicicloide) del cercle gran."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "Un pic passa exactament quan el punt marcat toca el cercle gran: en aquell instant, el punt de contacte és el centre instantani de gir, així que no es mou —i el punt marcat, que hi és a sobre en aquell moment, tampoc. Quantes vegades toca el punt marcat el cercle gran en una volta completa del cercle petit al voltant seu?"
        ],
        "titol": "Un pic és un moment en què el punt \"s'atura\""
      },
      {
        "figures": [
          {
            "peu": "Dins: R/r=3 → 3 pics (deltoide). Fora: R/r=1 → 1 pic (cardioide).",
            "src": "assets/img/pistes/fig-129.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "El nombre de pics és R/r, quan aquesta raó és un nombre enter, i l'argument és de longituds. Rodolar sense lliscar vol dir que els dos arcs que es toquen mesuren el mateix: la volta sencera al cercle gran són 2πR de recorregut, i la circumferència del petit fa 2πr, de manera que el punt de contacte recorre 2πR/2πr = R/r circumferències senceres del cercle petit. Cada vegada que en completa una, el punt marcat torna a ser al lloc del contacte —toca el cercle gran— i allà hi ha un pic. Val igual per dins que per fora."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "El número que no s'ha de comptar és el de voltes que fa el cercle petit sobre el seu propi centre: no en són R/r. Rodolant per dins en fa R/r − 1, i rodolant per fora, R/r + 1 —és la paradoxa de les dues monedes. Amb R/r=4 per dins, el cercle petit gira 3 vegades sobre si mateix i l'astroide té, tanmateix, 4 pics; amb R/r=1 per fora, en gira 2 i el cardioide en té 1. El que compta els pics és l'arc recorregut, no la rotació pròpia."
        ],
        "titol": "Una trampa famosa: no comptis les voltes pròpies"
      },
      {
        "figures": [],
        "textos": [
          "R/r=3 (dins): deltoide, 3 pics —el cas de la figura del llibre. R/r=2 (fora): nefroide, 2 pics. R/r=4 (dins): astroide, 4 pics —la mateixa corba que ja apareixia com a envolupant d'un bastó lliscant entre dos eixos. R/r=1 (fora): cardioide, 1 pic.",
          "Que l'astroide (R/r=4, hipocicloide) sigui exactament la mateixa corba que l'envolupant del bastó lliscant no és casualitat: en tots dos casos, cada punt de la corba és un instant en què \"alguna cosa\" —el punt de contacte, o el bastó sencer— es queda momentàniament immòbil."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Tant per a la hipocicloide (rodolant per dins) com per a l'epicicloide (rodolant per fora), el nombre de pics és R/r, quan aquesta raó és un enter: cada volta sencera del cercle petit produeix exactament un instant d'immobilitat i, per tant, un pic.",
    "titol": "Comptar pics: quan el punt de contacte s'atura"
  },
  "q125": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una descripció de la corba degenerada —molt més senzilla que l'espirògraf general— que resulta quan el punt que es traça no és sobre la vora del cercle petit, sinó exactament al seu centre."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "A l'espirògraf normal, el punt marcat gira al voltant del centre del cercle petit, i aquest centre alhora es mou al voltant del centre del cercle gran. Si el punt marcat és el centre del cercle petit, quin d'aquests dos moviments desapareix?"
        ],
        "titol": "Separa els dos moviments"
      },
      {
        "figures": [
          {
            "peu": "Esquerra: l'espirògraf general. Dreta: amb el punt al centre, només queda el cercle de radi R−r.",
            "src": "assets/img/pistes/fig-130.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Sense el gir addicional del punt sobre el cercle petit, el que queda és només el moviment del centre del cercle petit, que —com que rodola per dins del cercle gran mantenint sempre la mateixa distància R−r del centre comú— descriu simplement un cercle de radi R−r."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "R=5, r=2: el centre del cercle petit es manté sempre a distància 5−2=3 del centre comú, per a qualsevol angle de gir. No cal ni calcular-ho a cap instant concret: la distància entre els dos centres és R−r sempre, per la simple raó que els dos cercles es toquen i el petit és a dins. Fent-lo rodolar per fora, la mateixa raó donaria R+r, i el cercle traçat seria de radi 5+2=7.",
          "Aquest cas degenerat —tota la complexitat de l'espirògraf reduïda a un simple cercle— és el mateix tipus de simplificació que ja apareix quan un triangle es va \"aixafant\" fins a quedar pla: posar un paràmetre a un valor extrem (aquí, distància zero al centre) converteix una figura complicada en la més senzilla possible."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Si el punt que traça la corba és al centre del cercle petit, la corba resultant és simplement un cercle de radi R−r, centrat al centre comú.",
    "titol": "L'espirògraf sense gir: només queda un cercle"
  },
  "q126": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una manera de descriure un moviment sobre la superfície d'un tor (un donut) que sigui l'anàloga natural de l'hèlix sobre un cilindre —no fa falta cap equació, només una descripció clara del moviment."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [
          {
            "peu": "Els dos angles independents: u al voltant del forat central, v al voltant del tub.",
            "src": "assets/img/pistes/fig-209.png"
          }
        ],
        "textos": [
          "Un punt sobre un tor es pot descriure per dos angles: quina posició té al voltant del forat central (com les hores d'un rellotge vist des de dalt), i quina posició té al voltant del \"tub\" prim (com les hores d'un rellotge vist de costat, girant al voltant del propi tub). Una hèlix sobre un cilindre avançava a velocitat constant en gir i en alçada alhora: quin seria l'anàleg amb aquests dos angles?"
        ],
        "titol": "Un tor té dos cercles, no un"
      },
      {
        "figures": [
          {
            "peu": "Un nus tòric (2,3): la corba fa 2 voltes pel forat central pel mateix temps que en fa 3 pel tub.",
            "src": "assets/img/pistes/fig-128.png"
          }
        ],
        "textos": [
          "Un tor amb una corba dibuixada en sanguina que avança uniformement al voltant del tub mentre avança, també uniformement, al voltant del forat central —una corba que s'enrotlla moltes vegades abans de tancar-se, o que no es tanca mai, si la proporció entre les dues velocitats és irracional."
        ],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Es fan créixer els dos angles cadascun a velocitat constant però diferent: mentre un avança una volta sencera, l'altre n'avança p/q (una fracció). Si p/q és racional, la corba es tanca després de q voltes del primer angle; si és irracional, la corba no es tanca mai.",
          "Un avís important sobre aquest darrer cas: la corba no \"omple\" el tor —una corba no pot arribar a ser una superfície, per molt que doni voltes— sinó que hi passa tan a prop com es vulgui de qualsevol punt. Donat un punt del tor i una distància, per petita que sigui, la corba hi acaba passant més a prop que aquella distància."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Amb p/q=2/3: la corba fa 2 voltes completes al voltant del forat central pel mateix temps que en fa 3 al voltant del tub, i es tanca exactament on va començar. Es pot comprovar contant creuaments, però convé no barrejar els dos cercles del tor. Un meridià és el cercle petit que dona la volta al tub, com un tall del donut amb un ganivet; per creuar-lo cal haver fet una volta sencera al voltant del forat central, de manera que la corba el creua 2 vegades. Un paral·lel és el cercle gran que dona la volta al forat; per creuar-lo cal haver fet una volta sencera al voltant del tub, de manera que el creua 3. Uns números canviats indiquen que s'han intercanviat els dos cercles.",
          "Aquesta corba es diu \"nus tòric\" quan p i q no tenen cap factor comú: per a segons valors de p,q dona lloc a nusos autèntics —que no es poden desfer sense tallar-los— l'exemple més senzill dels quals, amb p/q=2/3, és el trèvol, el nus més simple que existeix."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "L'anàleg tòric de l'hèlix és fer avançar els dos angles del tor a velocitats constants però diferents, en proporció p/q. Amb p/q racional, la corba es tanca després d'un nombre finit de voltes; amb p/q irracional, no es tanca mai, però passa arbitràriament a prop de tots els punts del tor.",
    "titol": "L'hèlix del tor: dos angles, dues velocitats"
  },
  "q127": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "La identificació exacta de la corba —no només una descripció aproximada com \"es corba cap avall\": quina figura geomètrica coneguda traça el punt mitjà del bastó mentre aquest llisca?"
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "En qualsevol instant, el bastó, la paret i el terra formen un triangle rectangle: el bastó n'és la hipotenusa, l'angle recte és a la cantonada. Hi ha una propietat sobre la distància des del vèrtex de l'angle recte fins al punt mitjà de la hipotenusa, vàlida en qualsevol triangle rectangle."
        ],
        "titol": "Cada instant és un triangle rectangle diferent"
      },
      {
        "figures": [
          {
            "peu": "El bastó, ara amb el seu punt mitjà: dos instants diferents, i el quart de cercle (discontinu) que els uneix.",
            "src": "assets/img/pistes/fig-131.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "En un triangle rectangle, la distància del vèrtex de l'angle recte al punt mitjà de la hipotenusa és sempre la meitat de la hipotenusa —independentment de com s'obri o es tanqui l'angle. Com que la hipotenusa (el bastó) té sempre la mateixa longitud L, aquesta distància és sempre L/2: el punt mitjà es manté sempre a la mateixa distància L/2 de la cantonada, i per tant descriu un quart de cercle de radi L/2 centrat a la cantonada."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "L=7 i el bastó formant un angle de 0,37 radians (uns 21°) amb el terra: el peu és a x=7·cos(0,37)≈6,53 i l'altre extrem a y=7·sin(0,37)≈2,53, de manera que el punt mitjà és (3,26; 1,27) i la seva distància a la cantonada, √(3,26²+1,27²)≈3,50 = 7/2. Amb qualsevol altre angle torna a sortir 3,5, i de fet no cal ni provar-ho: el punt mitjà és sempre (½·L·cos α, ½·L·sin α), i la seva distància a l'origen, ½·L·√(cos²α+sin²α) = L/2, sigui quin sigui α.",
          "Aquest mateix bastó ja va donar, en una altra qüestió, l'envolupant de totes les seves posicions (un astroide). Aquí en surt un segon resultat, ben diferent: no la corba que \"toquen\" totes les posicions del bastó, sinó la corba que traça un únic punt (el mig) mentre el bastó es mou. Val la pena no confondre mai aquests dos conceptes: una envolupant és tangent a totes les còpies d'una família de corbes; una trajectòria és el camí d'un sol punt concret."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "El punt mitjà d'un bastó de longitud L que llisca entre una paret i un terra descriu un quart de cercle de radi L/2, centrat a la cantonada —perquè el punt mitjà de la hipotenusa d'un triangle rectangle és sempre a distància L/2 del vèrtex de l'angle recte.",
    "titol": "El punt mitjà de l'escala: sempre a la meitat de distància"
  },
  "q13": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "No n'hi ha prou de respondre que sí: cal poder explicar per què, amb un argument que funcioni per a qualsevol triangle, no només per al que s'hagi dibuixat en un cas concret."
        ],
        "titol": "Cal un argument, no només un \"sí\""
      },
      {
        "figures": [],
        "textos": [
          "Si dos triangles tenen la mateixa base i la mateixa alçada, tenen la mateixa àrea —és literalment el que diu la fórmula base × alçada / 2, res més amagat. La pregunta, doncs, es redueix a mirar els dos triangles que resulten del tall i comprovar si comparteixen aquestes dues coses sense haver de mesurar-les."
        ],
        "titol": "El fet que ho decideix tot"
      },
      {
        "figures": [
          {
            "peu": "Les marquetes a la base confirmen que les dues meitats fan el mateix; en sanguina, l'altura real des del vèrtex A fins a la recta de la base, compartida pels dos triangles.",
            "src": "assets/img/pistes/fig-014.png"
          }
        ],
        "textos": [
          "El tall va del vèrtex superior fins al punt mitjà del costat oposat. Per definició de punt mitjà, aquest tall deixa les dues meitats de la base amb exactament la mateixa llargada —no cal cap càlcul ni cap argument addicional, és directament la hipòtesi de l'enunciat."
        ],
        "titol": "Les dues bases són iguals, per definició del tall"
      },
      {
        "figures": [],
        "textos": [
          "L'alçada de cada un dels dos triangles nous és la distància des del vèrtex superior fins a la recta que conté la base. Aquesta recta és la mateixa per als dos triangles —no ha canviat en fer el tall, seguim parlant del mateix costat del triangle original— i el vèrtex superior tampoc ha canviat de lloc. Per tant, l'alçada dels dos triangles nous és exactament la mateixa, un únic segment compartit."
        ],
        "titol": "I l'altura també és la mateixa"
      },
      {
        "figures": [],
        "textos": [
          "Base de 12, vèrtex a alçada 7 (no necessàriament centrat): amb el tall al punt mitjà, cada meitat té base 6 i alçada 7, i per tant àrea 6×7/2=21 —sumen 42, l'àrea sencera del triangle (12×7/2=42). Desplaçant el vèrtex a un altre punt de la mateixa alçada 7 —tan lluny com es vulgui, fins i tot fora de la base— cada meitat continua fent 21 exactament: ni la base (6) ni l'alçada (7) de cap de les dues no han canviat, i l'àrea només depèn d'aquestes dues coses. El que sí que canviaria les dues meitats és moure el vèrtex amunt o avall; també llavors, però, continuarien sent iguals entre elles, que és el que la pregunta demana."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Sí, sempre: la mediana des d'un vèrtex fins al punt mitjà del costat oposat divideix el triangle en dues parts d'àrea igual, perquè els dos triangles resultants comparteixen exactament la mateixa alçada (la distància del vèrtex a la recta de la base, que no canvia) i tenen la mateixa base (les dues meitats iguals, per definició de punt mitjà).",
    "titol": "La mediana sempre parteix l'àrea per la meitat"
  },
  "q14": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "No es demana calcular cap àrea concreta: es demana explicar per què la fórmula que ja se sap de memòria —base × altura / 2— és certa per a qualsevol triangle. La \"caixa\" del títol és el rectangle que té per base el mateix costat del triangle i per alçada la distància del vèrtex superior a aquesta base. Convé dir-ho així i no \"el rectangle més petit que envolta el triangle\": les dues descripcions coincideixen mentre el vèrtex superior caigui damunt d'algun punt de la base, però deixen de coincidir en el moment que se'n surt —que és precisament el cas que examina la Qüestió 15."
        ],
        "titol": "Una raó, no una xifra"
      },
      {
        "figures": [
          {
            "peu": "El cas fàcil: el vèrtex A just damunt de B, amb angle recte. El triangle ABC és la meitat exacta del rectangle que el conté.",
            "src": "assets/img/pistes/fig-182.png"
          }
        ],
        "textos": [
          "Comencem pel cas més senzill possible: el vèrtex superior situat just damunt d'un dels dos vèrtexs de baix. Aquí el triangle ja és, ell mateix, un triangle rectangle, i la caixa que l'envolta queda partida per aquest mateix triangle en exactament dues meitats iguals —la diagonal d'un rectangle sempre el divideix en dos triangles congruents. En aquest cas particular, doncs, el triangle ja és la meitat de la caixa, sense necessitat de cap altre argument."
        ],
        "titol": "El cas fàcil primer"
      },
      {
        "figures": [],
        "textos": [
          "Ara situem el vèrtex superior en qualsevol altre punt de la vora de dalt, sempre que quedi per damunt d'algun punt de la base (no encara desplaçat lateralment fora d'ella). La vertical que baixa des d'aquest vèrtex fins a la base parteix la caixa gran en dues caixes més petites, una a cada banda, i alhora parteix el triangle en dos triangles més petits."
        ],
        "titol": "El cas general: dues caixes petites"
      },
      {
        "figures": [
          {
            "peu": "La vertical (en vermell) parteix la caixa gran en dues caixes petites, i el triangle en dues meitats —una de cada caixa petita.",
            "src": "assets/img/pistes/fig-002.png"
          }
        ],
        "textos": [
          "I aquí està la clau: cadascun d'aquests dos triangles petits és, exactament, una còpia del cas fàcil que ja s'ha resolt —el vèrtex superior cau just damunt del peu de la vertical, que fa de \"B\" en cadascuna de les dues caixes petites. Per tant, cada triangle petit és la meitat de la seva pròpia caixa petita. Sumant les dues meitats: si cada peça per separat és la meitat de la seva caixa, la caixa sencera, sumada, també queda partida per la meitat."
        ],
        "titol": "Tancar-ho: cada tros ja és el cas fàcil"
      },
      {
        "figures": [],
        "textos": [
          "Caixa de 10×6: amb la punta a distància 3 del cantó esquerre, el raonament dona àrea 10×6/2=30. Amb la punta a distància 7, també 30 —el resultat no depèn d'on caigui la punta, sempre que quedi dins de la base."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Un triangle és sempre la meitat de la caixa rectangular que l'envolta: quan el vèrtex superior cau damunt d'un punt de la base, la vertical des d'aquest punt parteix tant la caixa com el triangle en dues peces, i cada peça per separat ja és el cas fàcil (mig rectangle). Aquest argument, però, dona per fet que el peu de la vertical cau dins de la base —un supòsit que la Qüestió 15 posa a prova.",
    "titol": "Per què un triangle és la meitat de la seva caixa"
  },
  "q15": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Abans de tornar a fer cap càlcul, val la pena aturar-se a predir: si es desplaça horitzontalment el vèrtex superior d'un triangle, mantenint la mateixa base i la mateixa alçada, l'àrea creix, decreix, o es queda igual?"
        ],
        "titol": "Una predicció abans de calcular"
      },
      {
        "figures": [
          {
            "peu": "Mateixa base, mateixa alçada, tres posicions diferents del vèrtex. Al tercer triangle, el peu de l'altura ja no cau sobre la base.",
            "src": "assets/img/pistes/fig-003.png"
          }
        ],
        "textos": [
          "Als tres triangles de la figura, la base i l'alçada són exactament les mateixes —les marquetes ho confirmen expressament. Només canvia la posició horitzontal del vèrtex superior. En el primer i el segon triangle, aquest vèrtex encara cau damunt d'algun punt de la base. En el tercer, en canvi, el vèrtex ja ha sortit per fora: el peu de l'altura (marcat en discontinu) queda fora del segment de la base, no sobre seu."
        ],
        "titol": "Els tres casos, un al costat de l'altre"
      },
      {
        "figures": [],
        "textos": [
          "Tornant a la demostració anterior pas per pas: allà es deia que \"la vertical parteix la caixa en dos trossos, un a cada banda del triangle\". Aquest pas donava per fet que el peu de la vertical queda entre els dos extrems de la base, per poder-la partir en dos trossos que sumar. Quan la punta surt per fora, el peu de la vertical ja no talla la base per dins: cau fora d'ella, i no hi ha dos trossos interiors per sumar. L'argument de q14, tal com estava escrit, no cobreix aquest cas —calia trobar-ne un altre."
        ],
        "titol": "On falla exactament l'argument de q14"
      },
      {
        "figures": [
          {
            "peu": "El ratllat marca la peça que es treu: triangle rectangle gran (base estesa fins sota el vèrtex) menys triangle rectangle petit.",
            "src": "assets/img/pistes/fig-004.png"
          }
        ],
        "textos": [
          "La solució és canviar una suma per una resta. S'estén imaginàriament la base fins sota del vèrtex desplaçat, formant una caixa més gran (i un triangle rectangle gran, que ja és el cas fàcil de q14). D'aquest triangle rectangle gran, cal treure el triangle rectangle petit —la peça ratllada— que sobresurt de la base original per la banda on el vèrtex s'ha desplaçat. El triangle que realment interessa és, doncs, un triangle gran menys un de petit, en comptes de dos de petits sumats: exactament la mateixa idea del cas fàcil, aplicada dues vegades, però ara restant en lloc de sumar."
        ],
        "titol": "La mateixa idea, amb el signe canviat"
      },
      {
        "figures": [],
        "textos": [
          "Base 8, altura 5: amb la punta a distància 3, a 8 (just al cantó) i a 14 del cantó esquerre, les tres àrees surten 8×5/2=20 —la mateixa, fins i tot quan la punta ja ha sortit de la base i cal restar en lloc de sumar."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "L'àrea no canvia mai, es desplaci on es desplaci el vèrtex, sempre que la base i l'altura es mantinguin fixes. Però l'argument que ho demostra sí que canvia de forma: quan el peu de l'altura cau dins de la base, es demostra sumant dues meitats (q14); quan cau fora, cal restar un triangle rectangle petit d'un de gran. Totes dues construccions són la mateixa idea de fons —\"un triangle és la meitat de la seva caixa\"— aplicada amb un signe diferent segons el cas.",
    "titol": "Quan la punta surt de la base: el forat de la demostració anterior"
  },
  "q16": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Per demostrar que una figura de quatre costats és un paral·lelogram, no cal comprovar els quatre costats: n'hi ha prou que un sol parell de costats oposats siguin alhora paral·lels i de la mateixa llargada. Si això passa, l'altre parell ho és automàticament."
        ],
        "titol": "Reduir la feina a la meitat"
      },
      {
        "figures": [],
        "textos": [
          "El quadrilàter original de la figura no té cap propietat especial: no és cap forma coneguda, no té angles rectes ni costats iguals. No es pot raonar directament sobre ell. Cal una línia auxiliar que el converteixi en formes de les quals sí que se sap alguna cosa."
        ],
        "titol": "Un quadrilàter del qual no se sap res"
      },
      {
        "figures": [
          {
            "peu": "La diagonal (en vermell) crea dos triangles. En cadascun, el segment que uneix els punts mitjans de dos dels seus costats (negre discontinu) és paral·lel a la diagonal i en fa la meitat.",
            "src": "assets/img/pistes/fig-008.png"
          }
        ],
        "textos": [
          "Traçant una de les diagonals del quadrilàter original, aquest queda dividit en dos triangles, cadascun amb la diagonal com a costat comú. Dos dels quatre punts mitjans marcats són, precisament, els punts mitjans de dos costats d'un d'aquests triangles; els altres dos, els punts mitjans de dos costats de l'altre triangle."
        ],
        "titol": "La diagonal, que crea dos triangles"
      },
      {
        "figures": [],
        "textos": [
          "En cada triangle, el segment que uneix els punts mitjans de dos costats és paral·lel al tercer costat i en fa la meitat —el mateix teorema del segment mitjà ja fet servir a la Qüestió 2. Aquí, però, el \"tercer costat\" és el mateix als dos triangles: la diagonal comuna. Per tant, els dos segments que uneixen punts mitjans —un de cada triangle— són tots dos paral·lels a aquesta mateixa diagonal i en fan, tots dos, exactament la meitat: són paral·lels entre si i de la mateixa llargada. Aquest és el parell de costats oposats que calia trobar: el quadrilàter dels punts mitjans és un paral·lelogram."
        ],
        "titol": "El mateix segment mitjà, dues vegades"
      },
      {
        "figures": [],
        "textos": [
          "Per a l'àrea calen les dues diagonals, no només una: amb una de sola l'argument no es tanca. Anomenem ABCD el quadrilàter i P, Q, R, S els punts mitjans de AB, BC, CD i DA. El paral·lelogram interior és PQRS; el que li sobra són els quatre triangles de les cantonades, APS, BQP, CRQ i DSR.",
          "Es compten per parelles. El triangle APS té dos costats que fan la meitat de AB i de AD, amb el mateix angle A entremig: és semblant al triangle ABD amb raó ½, i per tant en té ¼ de l'àrea. El mateix val per a CRQ respecte del triangle CBD. Sumant-los: [APS]+[CRQ] = ¼([ABD]+[CBD]) = ¼ de tot el quadrilàter, perquè aquells dos triangles el parteixen sencer per la diagonal BD.",
          "Repetint exactament el mateix amb l'altra parella i l'altra diagonal: [BQP]+[DSR] = ¼([BAC]+[DAC]) = ¼ del quadrilàter. Les quatre cantonades sumen, doncs, ¼+¼ = la meitat, i el que queda per al paral·lelogram és l'altra meitat. Sigui quina sigui la forma del quadrilàter original."
        ],
        "titol": "L'àrea: la meitat de l'original"
      },
      {
        "figures": [],
        "textos": [
          "Amb A(0,0), B(8,2), C(9,7), D(1,6): els punts mitjans surten (4,1), (8,5;4,5), (5;6,5) i (0,5;3). El vector del primer al segon, (4,5;3,5), és idèntic al del quart al tercer —confirmant el paral·lelisme i la igualtat de longitud per coordenades. Aquesta comprovació és una demostració vàlida per si sola, però només confirma que és cert, no explica per què —a diferència de l'argument de la diagonal, que sí ho fa (i, de fet, ni tan sols necessita que els quatre punts estiguin en un mateix pla: funciona igual amb un quadrilàter tort a l'espai)."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Sí, sempre és un paral·lelogram: una diagonal del quadrilàter original crea dos triangles, i el teorema del segment mitjà aplicat a tots dos alhora produeix dos costats del quadrilàter interior que són, per força, paral·lels entre si i iguals de llargs —tots dos són paral·lels a la mateixa diagonal i en fan la meitat. La seva àrea és sempre exactament la meitat de la del quadrilàter original —i això últim demana les dues diagonals, no una: els quatre triangles de les cantonades es compten en dues parelles, cadascuna d'un quart.",
    "titol": "El paral·lelogram amagat dins de qualsevol quadrilàter"
  },
  "q17": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "El resultat es coneix com el teorema de Bolyai–Gerwien: qualsevol polígon es pot retallar en un nombre finit de peces poligonals i recompondre, sense buits ni superposicions, com un quadrat de la mateixa àrea. La demostració completa del cas general —vàlida per a un polígon de qualsevol forma— és massa llarga per a una sola pista; el que sí es pot desenvolupar amb tot detall és el primer pas del mètode, imprescindible per a qualsevol cas: trobar la longitud exacta que ha de tenir el costat del quadrat abans de retallar res."
        ],
        "titol": "La resposta és sí — la pregunta interessant és com"
      },
      {
        "figures": [],
        "textos": [
          "El pas de rectangle a quadrat és el cas més fàcil de visualitzar. Un rectangle de costats a i b té la mateixa àrea que un quadrat de costat s=√(ab) —la mitjana geomètrica de a i b (perquè s²=ab=àrea del rectangle, per definició de quadrat de la mateixa àrea). La pregunta es converteix, doncs, en: com es pot construir aquesta longitud concreta fent servir només regla i compàs?"
        ],
        "titol": "Del rectangle al quadrat: quina longitud es busca"
      },
      {
        "figures": [
          {
            "peu": "El triangle inscrit al semicercle, amb hipotenusa a+b: és rectangle per construcció, i la seva altura s sobre la hipotenusa val exactament √(ab).",
            "src": "assets/img/pistes/fig-064.png"
          }
        ],
        "textos": [
          "Es dibuixa un semicercle de diàmetre a+b, i s'hi col·loca un triangle amb el vèrtex superior tocant l'arc i la base sobre el diàmetre, partit en els trossos a i b pel peu de l'altura. Per un teorema clàssic, tot triangle inscrit en un semicercle amb la hipotenusa com a diàmetre és rectangle. I un cop es té un triangle rectangle amb l'altura sobre la hipotenusa partint-la en a i b, ja se sap —de la Qüestió 9— que aquesta altura val exactament √(ab): és el mateix resultat a²=c·p / b²=c·q d'allà, aplicat aquí a l'inrevés per fabricar una arrel quadrada en lloc de demostrar un teorema."
        ],
        "titol": "La construcció: el mateix teorema de q09, aplicat a l'inrevés"
      },
      {
        "figures": [],
        "textos": [
          "Un cop es té s=√(ab) construïda amb regla i compàs, es pot demostrar que —si el rectangle no és massa allargat, és a dir si el costat llarg no supera 4 vegades el curt— només calen dos talls (tres peces) per recompondre'l en un quadrat de costat s. Si el rectangle és més allargat que això, es parteix primer per la meitat i s'apilen els dos trossos, tantes vegades com calgui, fins a entrar dins d'aquesta proporció; el teorema de Bolyai–Gerwien en garanteix la possibilitat en qualsevol cas. I un cop es domina el pas de rectangle a quadrat, qualsevol polígon s'hi pot reduir triangulant-lo primer i convertint cada triangle en un rectangle de la mateixa àrea (base × mitja alçada)."
        ],
        "titol": "De la longitud a les peces"
      },
      {
        "figures": [],
        "textos": [
          "Rectangle 6×3: s=√18≈4,243. Comprovant l'àrea: 6×3=18=(√18)² ✓ —la mateixa àrea, tal com ha de passar en qualsevol dissecció, encara que la forma canviï del tot. Amb un rectangle 8×2 l'àrea també quadra (s=4, i 8×2=16=4²), però aquest cau just al límit de la proporció 4:1: ja no hi queda garantit poder-ho fer amb només tres peces."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Sí, sempre: el teorema de Bolyai–Gerwien garanteix que qualsevol polígon es pot retallar en un nombre finit de peces i recompondre com un quadrat de la mateixa àrea. La peça constructiva central és trobar el costat exacte del quadrat, s=√(ab), fent servir un semicercle i el mateix teorema de l'altura sobre la hipotenusa de la Qüestió 9 —una eina que reapareix cada vegada que cal \"fabricar\" una arrel quadrada amb regla i compàs.",
    "titol": "Retallar un polígon i recompondre'l com un quadrat"
  },
  "q22": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Aquí sí que cal trobar una fórmula concreta, no només explicar un fet. Però la resposta no s'amaga mirant directament el cercle petit: s'amaga mirant els centres dels cercles i les distàncies que hi ha entre ells."
        ],
        "titol": "On no és la resposta"
      },
      {
        "figures": [
          {
            "peu": "Dos cercles tangents: la distància entre els seus centres és sempre R+r, la suma dels dos radis.",
            "src": "assets/img/pistes/fig-185.png"
          }
        ],
        "textos": [
          "Quan dos cercles són tangents (es toquen en un sol punt, sense tallar-se), la distància entre els seus dos centres és exactament la suma dels seus radis: d=R+r. Aquest fet és geomètricament evident un cop es dibuixa —els dos centres i el punt de tangència són sempre alineats— però no apareix enlloc explícitament a l'enunciat del problema; cal recordar-lo pel seu compte."
        ],
        "titol": "El fet que falta, i que no és a l'enunciat"
      },
      {
        "figures": [
          {
            "peu": "El triangle rectangle de catets R i R; la hipotenusa marcada amb \"?\" és la distància entre el centre del cercle petit i el centre d'un cercle gran.",
            "src": "assets/img/pistes/fig-009.png"
          }
        ],
        "textos": [
          "Al quadrat de l'enunciat, els quatre cercles grans tenen radi R (un quart del costat del quadrat cadascun) i es toquen entre si. Es pot dibuixar un triangle rectangle amb vèrtexs al centre del cercle petit, al punt on es toquen dos cercles grans veïns, i al centre d'un d'aquests cercles grans: els dos catets d'aquest triangle fan tots dos R —és a dir, un quart del costat del quadrat, o si es prefereix, la meitat de la distància que separa els centres de dos cercles grans veïns— i la hipotenusa és, precisament, la distància entre el centre del cercle petit i el centre d'un cercle gran."
        ],
        "titol": "Un triangle rectangle amagat entre tres centres"
      },
      {
        "figures": [],
        "textos": [
          "Aquesta hipotenusa es pot expressar de dues maneres diferents, i totes dues han de donar el mateix valor. Per Pitàgores, amb els dos catets R: hipotenusa = R√2. Per la tangència entre el cercle petit i el cercle gran: hipotenusa = R+r. Igualant les dues expressions: R√2 = R+r, d'on r = R(√2−1)."
        ],
        "titol": "Dir la mateixa hipotenusa de dues maneres"
      },
      {
        "figures": [],
        "textos": [
          "Amb R=1: r=√2−1≈0,414, dins del rang 0,4–0,42 que demana la comprovació. I R+r=1+(√2−1)=√2, exactament la distància trobada entre el centre del cercle petit i el centre d'un cercle gran, confirmant la relació."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "r = R(√2−1) ≈ 0,414R. Surt de dir la mateixa distància —del centre del cercle petit al centre d'un cercle gran— de dues maneres: per Pitàgores (R√2, d'un triangle rectangle de catets R) i per la tangència (R+r), i igualar-les.",
    "titol": "El cercle petit del mig: la mateixa distància, dita de dues maneres"
  },
  "q23": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "L'enunciat en planteja tres de cop: un cercle gran tallat pels seus dos diàmetres amb un cercle petit encaixat en un dels quatre racons; un quadrat amb una diagonal i un cercle inscrit tocant-la; i un quadrat amb un cercle gran inscrit i un de petit encaixat en una cantonada. Tots tres es resolen amb la mateixa palanca de la Qüestió 22 —dir la mateixa distància de dues maneres—, encara que la posin en pràctica de manera lleugerament diferent cada vegada."
        ],
        "titol": "Tres puzles, una sola idea"
      },
      {
        "figures": [
          {
            "peu": "El triangle rectangle de catets r i r, entre el centre del cercle gran i el centre del cercle petit.",
            "src": "assets/img/pistes/fig-017.png"
          }
        ],
        "textos": [
          "A q22, els dos catets del triangle rectangle eren tots dos R (radis del cercle gran). Aquí la situació canvia: el cercle petit toca els dos diàmetres del cercle gran, no un altre cercle. Com que el seu centre és tangent a totes dues rectes, aquest centre queda a distància r —el seu propi radi— de cadascun dels dos diàmetres. Els dos catets del triangle rectangle amagat ja no fan R: fan r tots dos."
        ],
        "titol": "El primer puzle: quins segments fan de catets, ara"
      },
      {
        "figures": [],
        "textos": [
          "La hipotenusa d'aquest triangle és la distància entre el centre del cercle gran i el centre del cercle petit. Per Pitàgores, amb els dos catets r: hipotenusa = r√2. Per la tangència —ara interior, un cercle petit dins d'un de gran, no dos cercles costat per costat— aquesta mateixa distància val R−r (el radi gran menys el radi petit, no la suma). Igualant-les: r√2 = R−r, d'on r(√2+1) = R, i per tant r = R/(√2+1) = R(√2−1)."
        ],
        "titol": "La mateixa hipotenusa, dita de dues maneres"
      },
      {
        "figures": [],
        "textos": [
          "Els altres dos puzles del dibuix es resolen amb exactament la mateixa idea de fons —un triangle rectangle amagat entre centres, i la mateixa distància dita de dues maneres— però la \"tangència\" que fa de segona expressió no és sempre amb un altre cercle. En el puzle del quadrat amb la diagonal, la tangència és amb una recta (la diagonal), i llavors la distància d'un punt a una recta és la que fa d'hipotenusa —una eina diferent de la suma o resta de radis, però que juga exactament el mateix paper a l'equació final. Val la pena intentar-los amb aquesta mateixa palanca abans de continuar."
        ],
        "titol": "Els altres dos puzles: la mateixa tècnica, un altre tipus de tangència"
      },
      {
        "figures": [],
        "textos": [
          "Amb R=1: r=√2−1≈0,414 —exactament el mateix valor numèric que a q22, encara que la figura sigui completament diferent. Compte a no dir-ne massa de pressa «és la mateixa equació»: no ho és. A q22 l'equació era R√2=R+r (tangència exterior, catets R); aquí és r√2=R−r (tangència interior, catets r). Són equacions diferents que resolen a la mateixa raó, i el motiu és una identitat que val la pena veure: de la primera surt r/R=√2−1, de la segona r/R=1/(√2+1), i aquests dos números coincideixen perquè (√2−1)(√2+1)=2−1=1."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Pel primer puzle: r = R(√2−1), el mateix valor que a q22, obtingut amb la mateixa tècnica (Pitàgores contra tangència) però amb catets r en lloc de R, perquè aquí el cercle petit toca dues rectes (els diàmetres) en lloc d'un altre cercle. Els altres dos puzles reutilitzen la mateixa palanca, substituint la tangència entre cercles per la distància d'un punt a una recta quan calgui.",
    "titol": "El mateix truc, tres vegades disfressat"
  },
  "q25": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "En un dibuix en perspectiva com el de l'enunciat, els angles rectes de la caixa no semblen rectes: la vora del davant i la de la profunditat formen, sobre el paper, un angle que sembla obert. A la caixa de veritat, però, fan 90°. Cal fiar-se de l'objecte, no del dibuix — és el primer que cal desaprendre en passar de les figures planes a les de l'espai."
        ],
        "titol": "Una advertència abans de començar"
      },
      {
        "figures": [
          {
            "peu": "La diagonal de la base (traç continu) és el que deixa a mig camí: un cop calculada, fa de catet del segon triangle rectangle —el que s'aixeca en un pla vertical fins al vèrtex oposat.",
            "src": "assets/img/pistes/fig-186.png"
          }
        ],
        "textos": [
          "La diagonal d'un rectangle ja se sap calcular amb Pitàgores. La clau és trobar-ne un d'amagat dins la caixa que deixi a mig camí de la diagonal llarga que es vol mesurar. Anomenem a, b i c els tres costats de la caixa (llargada, amplada i alçada). La diagonal de la base —el rectangle de costats a i b— val √(a²+b²) per Pitàgores directe."
        ],
        "titol": "Amagar un rectangle dins la caixa"
      },
      {
        "figures": [
          {
            "peu": "Els costats a, b i c de la caixa, la diagonal de la base (discontínua) i la diagonal espacial que la tanca: dos Pitàgores encadenats, un per pla.",
            "src": "assets/img/pistes/fig-012.png"
          }
        ],
        "textos": [
          "Ara hi ha dos triangles rectangles, i no són al mateix pla: el primer —el que acabem de resoldre— està estirat a terra, sobre la base de la caixa. El segon està dret, aixecant-se des d'aquesta mateixa base fins al vèrtex superior oposat. El moviment que ho resol és repetir el mateix argument que abans, però ara en aquest segon pla vertical.",
          "La hipotenusa del primer triangle —la diagonal de la base, √(a²+b²)— fa de catet del segon triangle; l'altre catet és l'alçada c de la caixa, i la hipotenusa d'aquest segon triangle és, precisament, la diagonal llarga que es vol trobar. Aplicant Pitàgores altra vegada: la diagonal de la caixa al quadrat és (√(a²+b²))² + c², és a dir, a²+b²+c²."
        ],
        "titol": "Un segon triangle, en un altre pla"
      },
      {
        "figures": [],
        "textos": [
          "Caixa de 3 × 4 × 12: la diagonal de la base fa √(3²+4²) = 5, i la diagonal de la caixa fa √(5²+12²) = 13. Un cub de costat 1 dona √(1+1+1) = √3 ≈ 1,732. Fixa't en la forma del resultat, a²+b²+c²: un quart costat en dimensions més altes hi afegiria un quart quadrat, i així indefinidament, encara que ja no es pugui dibuixar."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "La diagonal d'una caixa de costats a, b i c val √(a²+b²+c²): dos Pitàgores encadenats, un sobre la base i un altre en el pla vertical que conté la diagonal de la base i l'aresta vertical.",
    "titol": "Diagonal d'una caixa: doble Pitàgores"
  },
  "q26": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "L'altura des del vèrtex superior parteix el triangle equilàter en dos trossos. Mirant-los per separat: cadascun és un triangle rectangle, amb hipotenusa el costat del triangle original (s) i un catet la meitat de la base (s/2). El problema es redueix, doncs, a aplicar Pitàgores a un triangle rectangle conegut."
        ],
        "titol": "Dos trossos, cadascun un cas conegut"
      },
      {
        "figures": [
          {
            "peu": "L'altura h parteix el triangle equilàter en dos triangles rectangles, cadascun d'hipotenusa s i catet s/2.",
            "src": "assets/img/pistes/fig-022.png"
          }
        ],
        "textos": [
          "Aquí es donen per bones dues coses que cal saber d'on surten: que l'altura caigui exactament al punt mitjà de la base, i que hi caigui perpendicular. Totes dues vénen del mateix argument ja fet a la Qüestió 1, i convé fixar-se en la direcció en què va, perquè girar-lo el trenca. No es parteix de l'altura: es parteix del segment que uneix el vèrtex amb el punt mitjà del costat oposat. Aleshores els dos trossos ja tenen els tres costats iguals dos a dos —els dos costats iguals del triangle equilàter, les dues meitats de la base (iguals per definició de punt mitjà) i el segment nou, compartit— i, essent congruents pel criteri costat-costat-costat, els dos angles que formen a la base són iguals; com que sumen 180°, en fan 90° cadascun.",
          "Fet a l'inrevés no funcionaria: si es partís de l'altura, els «tres costats iguals dos a dos» no es tindrien encara, perquè la igualtat de les dues meitats de la base és justament el que faltaria per demostrar."
        ],
        "titol": "Per què l'altura cau just al punt mitjà, perpendicular"
      },
      {
        "figures": [],
        "textos": [
          "Amb hipotenusa s i un catet s/2, Pitàgores dona l'altre catet —que és, precisament, l'altura h: h² = s² − (s/2)² = s² − s²/4 = (3/4)s². Traient l'arrel quadrada: h = s·√3/2."
        ],
        "titol": "Pitàgores, i arrel quadrada"
      },
      {
        "figures": [],
        "textos": [
          "Amb s=10: h²=100−25=75, h=√75=5√3≈8,66 — i (1/2)√3×10≈8,66, coincidint."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "h = (√3/2)s. Surt d'aplicar Pitàgores al triangle rectangle que crea l'altura (hipotenusa s, catet s/2), un cop se sap —de la Qüestió 1— que aquesta altura cau exactament al punt mitjà de la base i hi és perpendicular.",
    "titol": "L'altura d'un triangle equilàter"
  },
  "q27_implicit": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Aquesta pregunta no porta enunciat escrit: el llibre dona tres imatges —un triangle, un quadrat, un cercle, cadascun amb cercles tangents a dins— i dona per fet que cal trobar la mida del cercle petit en funció de la mida gran, a cadascuna. És el mateix tipus de pregunta que la Qüestió 22, tres vegades."
        ],
        "titol": "Què demanen aquests dibuixos"
      },
      {
        "figures": [],
        "textos": [
          "Al quadrat amb el seu cercle circumscrit, la diagonal marcada dona directament la relació: si el quadrat té costat s, la diagonal —que és el diàmetre del cercle— val s√2, i per tant el radi és R = s√2/2. És exactament el mateix argument del primer panell de la Qüestió 40: la diagonal del quadrat és el diàmetre de la circumferència que hi passa pels quatre vèrtexs."
        ],
        "titol": "El quadrat: la relació ja coneguda"
      },
      {
        "figures": [
          {
            "peu": "El centre de gravetat, unit amb el vèrtex superior i amb el centre del cercle més proper.",
            "src": "assets/img/pistes/fig-187.png"
          }
        ],
        "textos": [
          "Per als tres cercles iguals dins d'un triangle equilàter, cal unir el centre de gravetat del triangle amb el centre d'un dels tres cercles, i també amb el vèrtex més proper. Aquests dos segments es poden mesurar de dues maneres diferents —la mateixa \"dues maneres\" de la Qüestió 22 i la Qüestió 23."
        ],
        "titol": "El triangle: el mateix truc de q22, reaplicat"
      },
      {
        "figures": [
          {
            "peu": "Els panells del triangle i del quadrat, ja anotats. El tercer panell (quatre cercles dins d'un cercle gran) és la mateixa família de puzle amb més peces; no es resol aquí.",
            "src": "assets/img/pistes/fig-058.png"
          }
        ],
        "textos": [
          "Amb costat L, la distància del centre de gravetat a un vèrtex és L/√3 (dos terços de la mediana, que fa L√3/2). Falta ara una peça que el dibuix no diu i que cal treure: a quina distància del vèrtex hi ha el centre del cercle. El centre és a distància r dels dos costats que surten del vèrtex, o sigui que viu damunt de la bisectriu; i la bisectriu d'un angle de 60° el parteix en dos de 30°. Al triangle rectangle petit format pel vèrtex, el centre del cercle i el punt on el cercle toca el costat, r és el catet oposat a l'angle de 30°, de manera que la hipotenusa —la distància del vèrtex al centre— val exactament 2r. I com que el centre de gravetat, el centre del cercle i el vèrtex estan tots tres alineats sobre la mateixa mediana (que en un triangle equilàter és també bisectriu), la distància del centre de gravetat al centre del cercle és L/√3 menys 2r. Però aquesta distància es pot mesurar també d'una altra manera: els tres centres dels cercles formen, per simetria, un triangle equilàter petit, concèntric amb el gran, de costat 2r (dos radis, per la tangència entre cercles veïns) —i per tant la distància del centre de gravetat comú a un d'aquests centres és, aplicant la mateixa fórmula que abans però al triangle petit, 2r/√3.",
          "Igualant les dues expressions: L/√3 − 2r = 2r/√3. Resolent per r: r = L(√3−1)/4."
        ],
        "titol": "Dues expressions per a la mateixa distància"
      },
      {
        "figures": [],
        "textos": [
          "Triangle de costat L=4: r = 4(√3−1)/4 = √3−1 ≈ 0,732. Quadrat de costat s=4: R = 4×√2/2 = 2√2 ≈ 2,828."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Quadrat: R = s√2/2 (la diagonal és el diàmetre). Triangle: r = L(√3−1)/4, de dir la distància del centre de gravetat a un vèrtex de dues maneres —L/√3 directament, i també 2r/√3 pel triangle petit que formen els tres centres dels cercles, tenint en compte que aquesta distància és 2r menys curta que la primera. El tercer panell (cercles dins d'un cercle gran) segueix la mateixa família de puzle, sense resoldre aquí.",
    "titol": "Cercles tangents dins d'un triangle i d'un quadrat"
  },
  "q28": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "L'altura d'un triangle equilàter de costat s ja s'ha trobat a la Qüestió 26: h = (√3/2)s. La fórmula de l'àrea d'un triangle qualsevol —àrea = (1/2)·base·altura— val exactament igual aquí, sigui quin sigui el triangle que se substitueixi."
        ],
        "titol": "Una peça, ja feta"
      },
      {
        "figures": [
          {
            "peu": "La mateixa altura h de la Qüestió 26, ara usada directament a la fórmula (1/2)·base·altura.",
            "src": "assets/img/pistes/fig-023.png"
          }
        ],
        "textos": [
          "Amb base s i altura (√3/2)s: àrea = (1/2)·s·(s√3/2) = (√3/4)s². No hi ha cap pas de raonament nou aquí: és substituir un resultat ja demostrat dins d'una fórmula ja coneguda."
        ],
        "titol": "Substituir i simplificar"
      },
      {
        "figures": [],
        "textos": [
          "Encara que sembli un pas trivial, val la pena notar què s'hi fa: reutilitzar un resultat obtingut fa dues preguntes —no un teorema ja conegut d'abans— com a peça d'una demostració nova. És exactament així com s'acostuma a construir la geometria a partir d'aquí: un resultat obtingut serveix d'entrada per al següent."
        ],
        "titol": "Un detall que val la pena notar"
      },
      {
        "figures": [],
        "textos": [
          "Amb s=10: (√3/4)×100≈43,30. Comprovant-ho també multiplicant directament (1/2)×10×8,66≈43,30 —coincideixen."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Àrea = (√3/4)s². Surt de substituir directament l'altura ja trobada a la Qüestió 26 (h=(√3/2)s) dins la fórmula habitual de l'àrea d'un triangle, sense necessitat de cap argument addicional.",
    "titol": "L'àrea d'un triangle equilàter"
  },
  "q29": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Un polígon de n costats, triangulat amb diagonals des d'un sol vèrtex, dona sempre n−3 diagonals i n−2 triangles. Aquesta relació general no es demostra aquí de nou —ve d'un resultat més ampli que es tracta en un altre punt del llibre. El que demana aquesta pregunta és aplicar-la amb valors concrets de n, i després anar un pas més enllà: mesurar realment les diagonals i l'àrea."
        ],
        "titol": "No cal redemostrar res"
      },
      {
        "figures": [
          {
            "peu": "Les 3 diagonals des d'un vèrtex de l'hexàgon, confirmant n−3=3 i n−2=4 abans d'aplicar la fórmula a l'octàgon.",
            "src": "assets/img/pistes/fig-188.png"
          }
        ],
        "textos": [
          "Abans d'aplicar la fórmula sense pensar-hi, val la pena comptar-ho directament sobre un cas conegut: a l'hexàgon (n=6), des d'un vèrtex en surten 3 diagonals visibles, que creen 4 triangles. Coincideix amb n−3=3 i n−2=4. Un cop confirmat aquest cas petit, la mateixa fórmula es pot aplicar amb confiança a l'octàgon (n=8): 5 diagonals, 6 triangles."
        ],
        "titol": "Comptar amb els dits abans de confiar-hi cegament"
      },
      {
        "figures": [
          {
            "peu": "Les diagonals des d'un vèrtex, per a l'hexàgon i l'octàgon: cadascuna és la base d'un triangle isòsceles format per dos radis del polígon.",
            "src": "assets/img/pistes/fig-037.png"
          }
        ],
        "textos": [
          "Aquí comença la part que l'enunciat demana de debò: mesurar, no només comptar. En un hexàgon regular de costat s hi ha dues llargades de diagonal diferents. La curta (la que salta un sol vèrtex) és la base d'un triangle isòsceles amb dos costats s i un angle de 120° entre ells —el mateix tipus de triangle que ja es resol amb el mètode de la Qüestió 26 (partir-lo per la meitat amb una altura, i aplicar Pitàgores). Aquesta diagonal curta val s√3 ≈ 1,732s. La llarga (la que travessa el centre, del vèrtex a l'oposat) no necessita cap càlcul: com que un hexàgon regular és exactament sis triangles equilàters de costat s al voltant del centre, aquesta diagonal és senzillament dos radis seguits, és a dir, 2s."
        ],
        "titol": "Mesurar les diagonals: no totes fan el mateix"
      },
      {
        "figures": [],
        "textos": [
          "L'àrea de l'hexàgon regular surt de sumar els sis triangles equilàters que el formen: 6 × (√3/4)s² = (3√3/2)s² ≈ 2,598s² —reutilitzant, un altre cop, el resultat de la Qüestió 28. L'octàgon es fa exactament amb el mateix mètode, només que amb tres llargades de diagonal diferents en lloc de dues (les que salten 1, 2 i 3 vèrtexs): cadascuna és, igualment, la base d'un triangle isòsceles format per dos radis del polígon."
        ],
        "titol": "L'àrea, i el mateix mètode a l'octàgon"
      },
      {
        "figures": [],
        "textos": [
          "Hexàgon (n=6): 3 diagonals, 4 triangles, suma d'angles 720°. Octàgon (n=8): 5 diagonals, 6 triangles, suma d'angles 1080°. Amb s=1, diagonal curta de l'hexàgon: 1,732; diagonal llarga: 2."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Hexàgon (n=6): 3 diagonals, 4 triangles des d'un vèrtex; diagonal curta s√3, diagonal llarga 2s; àrea (3√3/2)s². Octàgon (n=8): 5 diagonals, 6 triangles; tres llargades de diagonal diferents, cadascuna mesurable amb el mateix mètode (base d'un triangle isòsceles de dos radis). Tot surt d'aplicar una fórmula general (demostrada en un altre punt del llibre) a casos concrets, sense repetir-ne l'argument.",
    "titol": "Diagonals i àrees de l'hexàgon i l'octàgon regulars"
  },
  "q30": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "\"Diagonals\" i \"àrea\" semblen dues preguntes independents, però totes dues comencen igual: triangulant el dodecàgon (n=12) des d'un sol vèrtex, exactament com a la Qüestió 29. Aquí n−2=10: el ventall de diagonals des d'un vèrtex crea 10 triangles."
        ],
        "titol": "Dues preguntes, una sola construcció de partida"
      },
      {
        "figures": [
          {
            "peu": "El ventall de 10 triangles des d'un vèrtex: es veu a simple vista que no tots fan la mateixa mida.",
            "src": "assets/img/pistes/fig-067.png"
          }
        ],
        "textos": [
          "Aquests 10 triangles del ventall no són tots iguals —es veu a simple vista comparant el primer, prim i llarg, amb els del mig, més amples. Això no és cap problema per comptar diagonals (encara funciona igual), però sí que ho és per calcular l'àrea: sumar 10 vegades l'àrea d'un d'aquests triangles donaria un resultat incorrecte, perquè no representen la mateixa porció del dodecàgon."
        ],
        "titol": "Un parany que cal veure abans de calcular res"
      },
      {
        "figures": [],
        "textos": [
          "Hi ha una segona manera de triangular el mateix dodecàgon: unint el centre amb els 12 vèrtexs, en lloc d'un vèrtex amb els altres 11. Aquesta segona triangulació dona 12 triangles, i com que el polígon és regular, aquests 12 triangles són tots idèntics entre si —cadascun amb dos costats iguals al radi del dodecàgon i l'angle entre ells sempre de 360°/12=30°. Per comptar diagonals, qualsevol de les dues triangulacions serveix; per calcular l'àrea, només la segona (des del centre) és neta, perquè permet multiplicar per 12 en lloc d'haver de sumar deu àrees diferents."
        ],
        "titol": "Dues fonts per triangular, dos resultats diferents"
      },
      {
        "figures": [],
        "textos": [
          "Cada un dels 12 triangles té dos costats iguals al radi R i un angle de 30° entremig; la seva àrea és (1/2)R²sin(30°)=(1/4)R². Multiplicant pels 12 triangles: àrea = 3R². En funció del costat s del dodecàgon (i no del radi), el resultat equivalent és àrea = 3(2+√3)s². Per passar d'una fórmula a l'altra cal la relació s = 2R·sin15°, que no surt del mètode elemental de la Qüestió 26: partir un isòsceles amb l'altura i aplicar Pitàgores dona bé els angles de 30°, 45° i 60°, però no el de 15°, que necessita la fórmula de l'angle meitat."
        ],
        "titol": "L'àrea, triangulant des del centre"
      },
      {
        "figures": [],
        "textos": [
          "Dodecàgon de costat s=1: apotema a=1/(2·tan15°)≈1,866, àrea total 3(2+√3)≈11,196. Les diagonals tenen cinc llargades diferents. Comptant per passos entre vèrtexs —de k=2 a k=6, perquè k=1 uneix dos vèrtexs veïns i això és el costat, no una diagonal— valen 2R·sin(k×15°); amb R=1: 1 / 1,414 / 1,732 / 1,932 / 2. La de k=3 dona exactament √2, la de k=4 exactament √3 i la de k=6 exactament 2 —el diàmetre—, bones per confirmar que els càlculs no s'han equivocat. La mateixa fórmula amb k=1 dona 2·sin15°≈0,518, que és el costat: bon control que la fórmula funciona, però no compta com a diagonal."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Sí, es poden mesurar totes dues coses, però amb mètodes diferents segons el cas. Per l'àrea, triangular des del centre (12 triangles idèntics) és net: àrea=3R². Per les diagonals n'hi ha cinc llargades diferents, cadascuna 2R·sin(k×15°), on k és el nombre de passos entre els dos vèrtexs que uneix: k va de 2 a 6, i la de k=6 és el diàmetre. (k=1 dona la mateixa fórmula però per al costat, que no és cap diagonal; i de k=7 endavant es repeteixen les mateixes llargades des de l'altra banda, perquè k i 12−k donen el mateix.) Triangular des d'un vèrtex (10 triangles desiguals) també compta bé les diagonals, però complica innecessàriament l'àrea.",
    "titol": "Diagonals i àrea del dodecàgon regular"
  },
  "q31": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Igual que a la Qüestió 8c, aquí n'hi ha dues, i cadascuna es respon amb una eina diferent: que els tres triangles marcats (A, B, C) siguin semblants es demostra comparant angles; que els altres dos —els triangles laterals, més grans, sense etiquetar— siguin idèntics es demostra per simetria de mirall, no per angles."
        ],
        "titol": "Dues preguntes, dues eines diferents"
      },
      {
        "figures": [
          {
            "peu": "El triangle isòsceles de dalt: angle superior 108° (angle interior del pentàgon), dos angles de base de 36° cadascun.",
            "src": "assets/img/pistes/fig-189.png"
          }
        ],
        "textos": [
          "El triangle A —el de dalt, format pel vèrtex superior del pentàgon i els seus dos veïns— té dos costats que són costats del pentàgon: és isòsceles. El seu angle superior és, directament, un angle interior del pentàgon regular, que ja es pot calcular amb la fórmula (n−2)×180°/n de la Qüestió 4: amb n=5, val 108°. Com que els altres dos angles del triangle isòsceles són iguals entre si i els tres han de sumar 180°: 2x+108°=180°, x=36° cadascun."
        ],
        "titol": "El triangle de dalt: isòsceles, i un angle ja conegut"
      },
      {
        "figures": [
          {
            "peu": "Els arcs dobles marquen els 108° (a dalt de A, i els dos de l'encreuament de les diagonals que pertanyen a B i a C —els altres dos de l'encreuament fan 72°); els arcs simples marquen els 36°, repetits a la base de A i de C.",
            "src": "assets/img/pistes/fig-060.png"
          }
        ],
        "textos": [
          "Amb aquest angle de 108° i els dos de 36° ja es pot anar propagant la resta, triangle a triangle, imposant sempre que els tres angles sumin 180° i aprofitant la simetria de la figura. Compte amb una drecera que sembla bona i no ho és: no tots els angles que formen dues diagonals en creuar-se fan 108°. Al punt on es creuen, els quatre angles són 108°, 72°, 108° i 72° —dos i dos, com sempre que dues rectes es tallen. Els que valen 108° són els que miren cap amunt i cap avall (els de B i C); els de 72° miren cap als costats i pertanyen als dos triangles grans sense etiqueta. Fent-ho amb cura, surt que els tres triangles marcats (A, B, C) tenen exactament el mateix conjunt de tres angles: 108°, 36° i 36°. Amb els tres angles iguals, els tres triangles són semblants (criteri AAA), encara que no tinguin la mateixa mida."
        ],
        "titol": "El mateix conjunt d'angles, tres vegades"
      },
      {
        "figures": [],
        "textos": [
          "Per als dos triangles laterals més grans —els que no porten etiqueta— no cal repetir l'argument dels angles: n'hi ha prou d'observar que un pentàgon regular té un eix de simetria que passa pel vèrtex superior i pel punt mitjà del costat de baix. Aquest eix reflecteix el pentàgon sobre si mateix, i amb ell reflecteix el triangle lateral esquerre exactament sobre el triangle lateral dret. Dues figures que una simetria de mirall intercanvia sense alterar la figura de partida són, per força, idèntiques —no només semblants: exactament la mateixa mida i forma."
        ],
        "titol": "Els dos triangles grans: no per angles, per simetria"
      },
      {
        "figures": [],
        "textos": [
          "En un pentàgon regular de costat 1, els triangles A, B i C tenen tots els mateixos dos angles (36° i 108°) comprovat per dibuix a escala o per coordenades —el mateix conjunt exacte per als tres, confirmant la semblança."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Els triangles A, B i C són semblants perquè tots tres comparteixen exactament el mateix conjunt d'angles (108°, 36°, 36°), que es dedueix marcant primer l'angle interior del pentàgon amb la fórmula de la Qüestió 4 i repartint la resta per la condició que sumin 180° a cada triangle. Els dos triangles grans sense etiqueta, en canvi, no fan 108°-36°-36°: fan 72°-72°-36°, i és el triangle que retrobaràs a la Qüestió 33. Els dos triangles laterals més grans són idèntics (no només semblants) perquè l'eix de simetria del pentàgon els intercanvia exactament l'un per l'altre.",
    "titol": "Els cinc triangles amagats dins d'un pentàgon"
  },
  "q32": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "La pregunta no demana cap mida en centímetres: demana un factor d'escala —quantes vegades més petit és el pentàgon que formen els cinc punts on es creuen les diagonals, comparat amb el pentàgon gran de partida."
        ],
        "titol": "Només cal una raó, no una mida"
      },
      {
        "figures": [],
        "textos": [
          "A la Qüestió 33 es demostra, sense trigonometria, que la raó φ entre la diagonal i el costat d'un pentàgon regular compleix φ²=φ+1, i que aquesta raó val exactament φ=(1+√5)/2≈1,618 —el nombre auri."
        ],
        "titol": "La peça que falta: la raó diagonal/costat"
      },
      {
        "figures": [
          {
            "peu": "El pentàgon petit (en sanguina), format pels cinc punts on es creuen les diagonals del pentagrama.",
            "src": "assets/img/pistes/fig-061.png"
          }
        ],
        "textos": [
          "El pentàgon interior del pentagrama és, precisament, el que formen els cinc punts d'encreuament de les diagonals. Cada costat d'aquest pentàgon petit és, a la vegada, la base del petit triangle central que es forma allà on dues diagonals es tallen prop d'una punta."
        ],
        "titol": "El pentàgon petit, marcat en sanguina"
      },
      {
        "figures": [],
        "textos": [
          "Val la pena fer-ho amb la diagonal a la mà, en lloc de dir només que «la raó s'aplica dues vegades». Prenem el pentàgon gran de costat 1, de manera que cada diagonal fa φ. Cada diagonal és tallada per dues altres diagonals en dos punts, que la parteixen en tres trossos: dos d'exteriors, iguals per simetria, i un de central. El central és, precisament, un costat del pentàgon petit.",
          "Els trossos exteriors es mesuren així. Un punt de creuament, junt amb els dos vèrtexs del pentàgon que té més a prop, forma un triangle: els seus dos costats des del punt de creuament són trossos exteriors de les dues diagonals que s'hi creuen, i la seva base és un costat sencer del pentàgon gran. Comptant-ne els angles com a la Qüestió 31, aquest triangle és un 36°-36°-108°: exactament el mateix tipus que el triangle «A» d'allà, on les cames eren costats del pentàgon (1) i la base era una diagonal (φ). En un triangle d'aquesta forma la base és sempre φ vegades la cama. Aquí la base val 1, de manera que cada tros exterior val 1/φ.",
          "El tros central és, doncs, el que queda: φ − 2/φ. Amb la identitat φ²=φ+1 això se simplifica sol — φ − 2/φ = (φ²−2)/φ = (φ−1)/φ, i com que φ−1 = 1/φ, queda 1/φ². El costat del pentàgon petit és el del gran dividit per φ², no per φ: la raó s'aplica dues vegades, i ara es veu per què."
        ],
        "titol": "La raó s'aplica dues vegades"
      },
      {
        "figures": [],
        "textos": [
          "Amb costat del pentàgon gran = 1: costat del petit = 1/φ² ≈0,382. Comprovant amb la identitat φ²=φ+1: 1/φ² = 1/(φ+1) = 2−φ ≈ 2−1,618 = 0,382, coincidint."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "El pentàgon petit del pentagrama té costat 1/φ² respecte al gran (φ el nombre auri; ≈0,382 vegades més petit). Surt de partir una diagonal —de llargada φ, amb costat gran 1— en els seus tres trossos: els dos exteriors fan 1/φ cadascun, per un triangle 36°-36°-108° de base un costat del pentàgon, i el central, que és el costat del pentàgon petit, fa φ−2/φ = 1/φ².",
    "titol": "El pentàgon petit del pentagrama"
  },
  "q33": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "La identitat d²=d+1 (amb d=φ, la raó diagonal/costat d'un pentàgon regular) es pot demostrar per trigonometria. Aquí es demana una via alternativa: arribar-hi directament d'un dibuix, sense cap sinus ni cosinus, només amb semblança de triangles."
        ],
        "titol": "La mateixa identitat, un altre camí"
      },
      {
        "figures": [
          {
            "peu": "El triangle isòsceles de base 1 i costats d, format per l'aresta compartida i les dues diagonals cap al vèrtex llunyà.",
            "src": "assets/img/pistes/fig-062.png"
          }
        ],
        "textos": [
          "Dos pentàgons regulars de costat 1 comparteixen una aresta sencera. Des dels dos extrems d'aquesta aresta compartida surt una diagonal cap a un mateix vèrtex llunyà d'un dels dos pentàgons. Aquestes dues diagonals, més l'aresta compartida, formen un triangle isòsceles: base 1 (l'aresta), i els altres dos costats d (dues diagonals de pentàgon)."
        ],
        "titol": "El triangle que amaguen dos pentàgons units"
      },
      {
        "figures": [],
        "textos": [
          "Aquest triangle —dos vèrtexs adjacents d'un pentàgon (units per un costat) i el vèrtex oposat (unit a cadascun per una diagonal)— és exactament el mateix tipus de triangle que ja va aparèixer a la Qüestió 31: allà es va demostrar que els dos triangles laterals grans del pentagrama, no etiquetats, són idèntics per simetria de mirall. Aplicant el mateix recompte d'angles que allà (marcant sistemàticament els 108° i 36° que es repeteixen per tot el pentagrama), aquest triangle resulta tenir 72° a cada extrem de la base i 36° al vèrtex llunyà."
        ],
        "titol": "Els angles d'aquest triangle: 72°, 72°, 36°"
      },
      {
        "figures": [],
        "textos": [
          "Tracem ara la bisectriu d'un dels angles de 72° (a un extrem de l'aresta). Aquesta bisectriu talla el costat oposat —una de les diagonals, de llargada d— en un punt intern, creant un triangle petit nou. Aquest triangle petit resulta ser isòsceles ell mateix, amb dos costats iguals a la base original (1). El punt de tall parteix la diagonal en dos trossos: el que va del punt de tall fins al vèrtex llunyà fa exactament 1, i per tant l'altre —el que va del punt de tall fins a l'extrem de l'aresta compartida— fa d−1.",
          "El triangle petit té els mateixos tres angles que el gran (72°, 72°, 36°), només que \"girats\" de posició: són semblants. Comparant els costats que es corresponen als mateixos angles: el costat oposat a l'angle de 36° al triangle gran és la base (1); al petit, és el tros (d−1). El costat oposat a un angle de 72° al gran és d; al petit, és 1. La proporció de semblança dona, doncs: d/1 = 1/(d−1)."
        ],
        "titol": "El triangle partit per la seva pròpia bisectriu"
      },
      {
        "figures": [],
        "textos": [
          "d/1 = 1/(d−1) → d(d−1)=1 → d²−d=1 → d²=d+1. Exactament la identitat que es volia demostrar, arribada-hi sense cap trigonometria: només angles, bisectrius i semblança de triangles."
        ],
        "titol": "Desenvolupant la relació"
      },
      {
        "figures": [],
        "textos": [
          "d/1=1/(d−1) → d(d−1)=1 → d²−d=1 → d²=d+1. Amb d=φ≈1,618: φ²≈2,618, i φ+1≈2,618, coincidint."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "d²=d+1, demostrat sense trigonometria: el triangle isòsceles que formen dos pentàgons units (base 1, costats d, angles 72°-72°-36°) es parteix amb la seva pròpia bisectriu en un triangle petit semblant al gran, i la proporció de semblança —d/1=1/(d−1)— desenvolupada dona directament la identitat.",
    "titol": "d²=d+1, demostrat sense trigonometria"
  },
  "q36": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "L'enunciat ja dona la resposta: el quadrat. La feina no és endevinar-la —és construir un argument que la faci certa per a tots els rectangles possibles amb aquell perímetre, no només per als que es puguin dibuixar i comparar un per un."
        ],
        "titol": "Demostrar, no descobrir"
      },
      {
        "figures": [
          {
            "peu": "Tots els rectangles amb el mateix perímetre tenen el vèrtex oposat sobre la mateixa recta: aquesta és, dibuixada, la condició \"perímetre fix\".",
            "src": "assets/img/pistes/fig-010.png"
          }
        ],
        "textos": [
          "Amb perímetre fix P, triar l'amplada x ja determina l'alçada: 2x+2y=P, per tant y=P/2−x. Anomenant s=P/2 (la meitat del perímetre), l'alçada queda y=s−x. Tot el problema depèn ara d'una sola lletra, x."
        ],
        "titol": "Reduir dues variables a una"
      },
      {
        "figures": [],
        "textos": [
          "L'àrea és àrea(x) = x·y = x(s−x). Es tracta de trobar per a quin valor de x aquesta expressió és més gran, sense necessitat de calcular-ne la derivada: n'hi ha prou amb un truc purament algebraic."
        ],
        "titol": "L'àrea en funció d'una sola variable"
      },
      {
        "figures": [],
        "textos": [
          "x(s−x) es pot reescriure com s²/4 − (x−s/2)² —es pot comprovar desenvolupant el quadrat de la dreta i simplificant. El primer terme, s²/4, és una constant que no depèn de x. El segon terme, (x−s/2)², és un quadrat: mai pot ser negatiu, i val exactament zero només quan x=s/2. Per tant, l'expressió sencera —l'àrea— és més gran precisament quan es resta el mínim possible, és a dir, quan (x−s/2)²=0, és a dir, x=s/2."
        ],
        "titol": "Completar el quadrat"
      },
      {
        "figures": [],
        "textos": [
          "Amb x=s/2, l'alçada surt y=s−x=s−s/2=s/2: igual que l'amplada. Un rectangle amb amplada i alçada iguals és, per definició, un quadrat. Com que qualsevol altre valor de x fa que (x−s/2)² sigui estrictament positiu i, per tant, resti més de l'àrea, el quadrat és l'únic rectangle que arriba al màxim."
        ],
        "titol": "Per què x=s/2 vol dir quadrat"
      },
      {
        "figures": [],
        "textos": [
          "La pregunta es pot girar: de tots els rectangles amb la mateixa àrea A, quin té el perímetre més petit? Amb y=A/x, el perímetre és P(x)=2x+2A/x. Aquí no cal completar cap quadrat nou: la desigualtat entre la mitjana aritmètica i la mitjana geomètrica (per a dos nombres positius a, b: a+b ≥ 2√(ab), amb igualtat només si a=b) aplicada a a=2x i b=2A/x dona directament 2x+2A/x ≥ 2√(4A) = 4√A, amb igualtat exactament quan 2x=2A/x, és a dir x²=A, x=√A —de nou, un quadrat. La resposta a totes dues preguntes —àrea màxima a perímetre fix, perímetre mínim a àrea fixa— és la mateixa figura."
        ],
        "titol": "El mateix truc, girat: mínim perímetre a àrea fixa"
      },
      {
        "figures": [],
        "textos": [
          "P=24 (s=12): àrees 1×11=11, 3×9=27, 5×7=35, 6×6=36 —creixent fins al quadrat. I la fórmula 36−(x−6)² dona: amb x=1, 36−25=11 ✓; amb x=5, 36−1=35 ✓; amb x=6, 36−0=36 ✓, el màxim."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "El quadrat (x=s/2, amb s=P/2) té sempre l'àrea més gran entre tots els rectangles de perímetre P fix. Surt d'escriure l'àrea com x(s−x)=s²/4−(x−s/2)², on el segon terme és un quadrat que mai pot ser negatiu i que només val zero quan x=s/2 —precisament quan el rectangle és un quadrat. La pregunta girada (mínim perímetre a àrea fixa) té la mateixa resposta, per la desigualtat entre mitjanes aritmètica i geomètrica.",
    "titol": "El quadrat maximitza l'àrea a perímetre fix"
  },
  "q37": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "\"Mateixa àrea\" és una condició; \"mateix perímetre\" n'és una altra, independent. Un rectangle té dues dimensions lliures (base x, altura y), i hi ha exactament dues condicions per fixar-les totes dues: un sistema de dues equacions amb dues incògnites."
        ],
        "titol": "Dues condicions, dues incògnites"
      },
      {
        "figures": [
          {
            "peu": "El rectangle es dibuixa amb un interrogant a posta: les seves dimensions encara no s'han calculat.",
            "src": "assets/img/pistes/fig-046.png"
          }
        ],
        "textos": [
          "Un triangle equilàter de costat s té perímetre 3s i àrea (√3/4)s² (aquesta última, ja demostrada a la Qüestió 28). Aquests dos valors no són incògnites: són nombres fixos un cop es coneix s. Les incògnites reals són les dues dimensions x, y del rectangle que encara s'ha de trobar."
        ],
        "titol": "Les dades del triangle, com a constants conegudes"
      },
      {
        "figures": [],
        "textos": [
          "Mateix perímetre: 2x+2y=3s. Mateixa àrea: xy=(√3/4)s². Aïllant y de la primera (y=3s/2−x) i substituint-ho a la segona: x(3s/2−x)=(√3/4)s², que reorganitzada dona una equació de segon grau en x: x² − (3s/2)x + (√3/4)s² = 0."
        ],
        "titol": "Plantejar el sistema"
      },
      {
        "figures": [],
        "textos": [
          "Aplicant la fórmula general per a una equació de segon grau: x = s(3 ± √(9−4√3)) / 4. El signe ± dona les dues dimensions del rectangle: si x pren el signe −, y (calculat amb y=3s/2−x) pren automàticament el signe +, i viceversa. Les dues arrels de l'equació no són, doncs, dos rectangles diferents: són els dos costats del mateix rectangle. Val la pena veure per què havia de ser així: la suma i el producte de dos números determinen la parella, i aquí la suma (3s/2) i el producte ((√3/4)s²) són tots dos dades de l'enunciat. Per a rectangles, «mateixa àrea i mateix perímetre» sí que determina la figura; el que no la determina és entre figures de forma lliure."
        ],
        "titol": "Resoldre-la"
      },
      {
        "figures": [],
        "textos": [
          "L'equació de segon grau només té solucions reals si el seu discriminant no és negatiu. Aquí, el discriminant és s²(9/4−√3). Com que √3≈1,73 és menor que 9/4=2,25, el factor (9/4−√3) és sempre positiu, sigui quin sigui el valor de s —per tant, aquest discriminant és positiu per a qualsevol triangle equilàter, i sempre existeix un rectangle real amb la mateixa àrea i el mateix perímetre, encara que pugui sortir molt allargat."
        ],
        "titol": "Per què sempre hi ha solució real"
      },
      {
        "figures": [],
        "textos": [
          "Amb s=4: perímetre 12, àrea 4√3≈6,93. Resolent el sistema: x≈1,561, y≈4,439. Comprovant totes dues condicions alhora: 2(1,561+4,439)=12 ✓ (perímetre); 1,561×4,439≈6,93 ✓ (àrea)."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "x = s(3 ± √(9−4√3))/4, les dues dimensions del rectangle (la mateixa parella amb els papers intercanviats). El discriminant, s²(9/4−√3), és sempre positiu perquè √3<9/4: per a qualsevol triangle equilàter existeix un rectangle real amb la mateixa àrea i el mateix perímetre. I n'hi ha exactament un: les dues arrels de l'equació són x i y, els dos costats del mateix rectangle, no pas dos rectangles diferents.",
    "titol": "Un rectangle amb la mateixa àrea i el mateix perímetre que un triangle"
  },
  "q38": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "L'enunciat no dona cap altra condició més enllà d'aquesta: el rectangle que queda després de treure el quadrat ha de tenir la mateixa proporció entre costats que el rectangle original. No hi ha cap mida fixa a l'enunciat —la resposta ha de ser una raó, no una llargada concreta."
        ],
        "titol": "\"Semblant\" és tota la informació que hi ha"
      },
      {
        "figures": [
          {
            "peu": "El costat llarg, partit en el tram del quadrat (1) i el tram que sobra (x−1) per la línia sanguina.",
            "src": "assets/img/pistes/fig-042.png"
          }
        ],
        "textos": [
          "Amb el costat curt igual a 1 i el llarg igual a x (x>1): en treure'n el quadrat de costat 1, el que queda és un rectangle de costats 1 i (x−1) —el tram del costat llarg que sobra un cop retallat el quadrat."
        ],
        "titol": "Noms per als costats"
      },
      {
        "figures": [],
        "textos": [
          "Que el rectangle petit sigui semblant a l'original vol dir que la raó costat llarg / costat curt ha de ser la mateixa als dos rectangles: al gran, x/1; al petit, 1/(x−1) (el seu costat llarg és 1, el curt és x−1). Igualant-les: x/1 = 1/(x−1)."
        ],
        "titol": "La mateixa proporció, dues vegades"
      },
      {
        "figures": [],
        "textos": [
          "Desenvolupant: x(x−1)=1 → x²−x=1 → x²=x+1. És exactament la mateixa equació —lletra per lletra, només canviant el nom de la incògnita— que ja va aparèixer a la Qüestió 33 amb la diagonal del pentàgon (allà, d²=d+1). La solució positiva és x=(1+√5)/2=φ≈1,618, el nombre auri."
        ],
        "titol": "Resoldre-la: exactament la mateixa equació de q33"
      },
      {
        "figures": [],
        "textos": [
          "Amb x=φ≈1,618: x/1=1,618, i 1/(x−1)=1/0,618≈1,618 —coincideixen, confirmant la proporció."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Un rectangle auri té costats en la proporció 1 : φ, amb φ=(1+√5)/2≈1,618 el nombre auri. Surt de traduir \"el rectangle petit és semblant al gran\" en una equació de proporcions (x/1=1/(x−1)) que, un cop desenvolupada, dona exactament la mateixa identitat x²=x+1 que ja havia aparegut —amb un altre nom, d, i en una figura completament diferent— amb la diagonal del pentàgon a la Qüestió 33.",
    "titol": "El rectangle auri"
  },
  "q39": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Unir el centre d'un polígon regular amb tots els seus vèrtexs el parteix en tants triangles com costats té. Amb un pentàgon regular, aquest moviment —ja fet servir amb el dodecàgon a la Qüestió 30— dona cinc triangles, i com que el pentàgon és regular, tots cinc són idèntics entre si: no cal sumar cinc àrees diferents, n'hi ha prou de trobar-ne una i multiplicar per cinc."
        ],
        "titol": "El mateix moviment d'abans, aplicat aquí"
      },
      {
        "figures": [
          {
            "peu": "El radi R (centre a vèrtex) i l'apotema (centre a punt mitjà d'un costat, amb angle recte): dos segments diferents, fàcils de confondre.",
            "src": "assets/img/pistes/fig-047.png"
          }
        ],
        "textos": [
          "Des del centre hi ha dos segments diferents que és fàcil confondre: el radi R (centre a un vèrtex) i l'apotema a (centre al punt mitjà d'un costat, en angle recte amb aquell costat). Per calcular l'àrea de cada triangle cal l'apotema, no el radi: és l'apotema qui fa d'altura del triangle quan se'n pren el costat del pentàgon com a base."
        ],
        "titol": "Dos segments que no s'han de confondre"
      },
      {
        "figures": [],
        "textos": [
          "Cada un dels cinc triangles té per base el costat s del pentàgon i per altura l'apotema a: la seva àrea és (1/2)·s·a. Multiplicant pels cinc triangles: àrea del pentàgon = (5/2)·s·a."
        ],
        "titol": "L'àrea d'un triangle, i després els cinc"
      },
      {
        "figures": [],
        "textos": [
          "Si es vol una fórmula que depengui únicament de s (sense haver de mesurar l'apotema per separat), cal expressar-la en funció de s amb trigonometria: partint el triangle isòsceles de radi per la meitat amb l'apotema, s'obté a = s / (2·tan(36°)) —36° perquè l'angle complet al centre és 360°/5=72°, i l'apotema el biseca en dos triangles rectangles de 36° cadascun. Substituint: àrea = (5/4)·s² / tan(36°)."
        ],
        "titol": "Una fórmula només amb el costat"
      },
      {
        "figures": [],
        "textos": [
          "Amb s=10: apotema a≈6,88, àrea d'un triangle=(1/2)×10×6,88=34,4, àrea total=5×34,4=172. La fórmula (5/4)s²/tan(36°) dona ≈172,05, coincidint amb petit marge d'arrodoniment."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Àrea del pentàgon = (5/2)·s·a (amb a l'apotema), o bé (5/4)·s²/tan(36°) si només es coneix el costat. Surt de partir el pentàgon en cinc triangles isòsceles idèntics des del centre —el mateix moviment que amb el dodecàgon a la Qüestió 30—, i val, de fet, per a qualsevol polígon regular de n costats, no només el pentàgon.",
    "titol": "L'àrea d'un pentàgon regular"
  },
  "q40_implicit": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Cap dels dos panells porta enunciat escrit: cal llegir la pregunta directament del dibuix. Totes dues figures amaguen la mateixa pregunta de fons que q27: mesurar el radi petit en funció del gran. El primer panell mostra un quadrat inscrit en una circumferència (els 4 vèrtexs sobre el cercle); el segon, un quadrat i dos cercles petits en fila, tots tres dins d'una circumferència gran més gran que els engloba."
        ],
        "titol": "Què demanen aquests dos dibuixos"
      },
      {
        "figures": [],
        "textos": [
          "La clau és que la diagonal del quadrat és el diàmetre del cercle: els quatre vèrtexs toquen la circumferència, i la diagonal —que passa pel centre— hi arriba de banda a banda. Si el costat del quadrat és s i el radi del cercle és R, la diagonal fa s√2 (Pitàgores sobre mig quadrat: dos costats s formant un angle recte) i, alhora, val 2R. D'aquí surt directament la relació entre els dos: 2R = s√2, és a dir, R = s√2⁄2."
        ],
        "titol": "Panell 1 — el quadrat inscrit"
      },
      {
        "figures": [
          {
            "peu": "Els dos cercles i el quadrat, alineats sobre el diàmetre del cercle gran: el cercle esquerre hi és tangent per l'extrem, i el quadrat hi toca per les dues cantonades de la dreta.",
            "src": "assets/img/pistes/fig-191.png"
          }
        ],
        "textos": [
          "Aquí les incògnites són R (el radi del cercle gran) i r (el radi comú dels dos cercles petits), i cal una equació que les lligui. El quadrat té costat 2r, igual que el diàmetre comú dels dos cercles petits.",
          "Abans de comptar res, convé mirar bé com toca cada peça el cercle gran, perquè és d'aquí que sortirà l'equació: el cercle de l'esquerra hi és tangent per l'extrem esquerre, i el quadrat hi arriba per les dues cantonades de la dreta, no pel mig del seu costat. Val la pena veure per què no pot ser d'una altra manera. Si la fila sencera travessés el diàmetre de banda a banda, faria 2r+2r+2r = 6r = 2R, és a dir R = 3r; però aleshores les cantonades del quadrat quedarien a distància √((3r)²+r²) = r√10 ≈ 3,16r del centre, més que els 3r del radi: sortirien fora del cercle. La figura seria impossible.",
          "Amb el centre del cercle gran a l'origen, doncs: el cercle esquerre és tangent per dins a (−R, 0), de manera que el seu centre és a x = −R+r; el segon centre, a x = −R+3r; i el quadrat va de x = −R+4r a x = −R+6r, amb els costats de dalt i de baix a y = ±r. Imposant que la cantonada (−R+6r, r) sigui sobre la circumferència:",
          "(6r−R)² + r² = R² → 36r² − 12rR + R² + r² = R² → 37r² = 12rR, i com que r≠0, 37r = 12R: el radi gran és 37/12 ≈ 3,083 vegades el petit.",
          "La figura tanca amb números exactes per un motiu que val la pena veure: amb R=37 i r=12, el quadrat arriba fins a x = 6(12)−37 = 35, i 12² + 35² = 144 + 1225 = 1369 = 37². És el triple pitagòric (12, 35, 37) el que fa que la cantonada caigui exactament sobre la circumferència."
        ],
        "titol": "Panell 2 — quadrat i dos cercles en fila"
      },
      {
        "figures": [
          {
            "peu": "La construcció que fa visible el triangle —o la línia recta— amagat darrere de cada configuració de cercles tangents.",
            "src": "assets/img/pistes/fig-059.png"
          }
        ],
        "textos": [
          "Els dos panells —i tota aquesta família de puzles de cercles tangents que inclou també q22 i q27— es resolen sempre amb el mateix moviment: connectar centres, trobar-hi un triangle rectangle amagat (o, com al panell 1, una diagonal que fa de diàmetre) i aplicar el teorema de Pitàgores o una simple suma de longituds sobre una línia recta."
        ],
        "titol": "El mateix moviment en totes dues"
      },
      {
        "figures": [],
        "textos": [
          "Amb un quadrat de costat s=4 al primer panell: la diagonal val 4√2, per tant R=2√2≈2,83 —una xifra que es pot verificar mesurant directament sobre el dibuix. Al segon panell, amb r=12 surt R=37: el quadrat va de x=11 a x=35 (prenent el centre a l'origen), i la seva cantonada (35, 12) és a distància √(1225+144)=√1369=37 del centre ✓, exactament el radi."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Panell 1: R = s√2⁄2 (la diagonal del quadrat inscrit és el diàmetre). Panell 2: 37r = 12R, és a dir R ≈ 3,083·r —de la condició que les cantonades de la dreta del quadrat caiguin sobre la circumferència gran, cosa que amaga el triple pitagòric (12, 35, 37). Totes dues surten de mirar amb cura on toca cada peça i escriure-ho, el mateix moviment que a q22 i q27.",
    "titol": "Dues configuracions, el mateix moviment: connectar centres"
  },
  "q41": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "No n'hi ha prou de comprovar-ho amb un punt concret: cal un argument que valgui sigui quin sigui el punt de l'arc que es triï, sense que el resultat final pugui dependre d'on s'hagi posat exactament."
        ],
        "titol": "\"Sempre\" és la part que cal demostrar"
      },
      {
        "figures": [],
        "textos": [
          "El dibuix marca un punt al mig de la base, encara que l'enunciat no en digui res. Aquest punt és el centre de la circumferència, i unir-lo amb el punt de l'arc és la clau de tota la demostració: crea dos segments que, junts amb els dos extrems del diàmetre, ja se sap que fan la mateixa llargada —tots tres són radis."
        ],
        "titol": "Un punt que no és decoratiu"
      },
      {
        "figures": [
          {
            "peu": "El radi central crea dos triangles isòsceles (tres marquetes iguals, els tres radis). Anomenant α i β els dos angles de la base del triangle gran, l'angle del vèrtex superior queda dividit exactament en α (d'un triangle) i β (de l'altre).",
            "src": "assets/img/pistes/fig-005.png"
          }
        ],
        "textos": [
          "El radi que va del centre fins al punt de l'arc parteix el triangle gran en dos triangles petits, cadascun amb dos costats iguals al radi: tots dos són isòsceles. En un triangle isòsceles, els dos angles de la base són sempre iguals entre si —per això la figura marca dos angles amb un sol arc (iguals entre ells) i dos amb doble arc (iguals entre ells), sense que calgui que un arc i un doble arc coincideixin."
        ],
        "titol": "Dos triangles isòsceles"
      },
      {
        "figures": [],
        "textos": [
          "Anomenant α i β els dos angles de la base del triangle gran (els que es veuen des dels dos extrems del diàmetre), l'angle del vèrtex superior —el que interessa— queda partit pel radi central en exactament α i β, un tros de cada triangle isòsceles. La suma dels tres angles del triangle gran és sempre 180°: α + (α+β) + β = 180°, és a dir, 2α+2β=180°, i per tant α+β=90° —que és, precisament, l'angle del vèrtex superior."
        ],
        "titol": "Sumar els tres angles del triangle gran"
      },
      {
        "figures": [],
        "textos": [
          "Amb el punt al capdamunt (just sobre el centre): per simetria α=β=45°, i 45°+45°=90° ✓. Amb el punt gairebé enganxat a un extrem: el triangle es fa finíssim, però l'argument no ha fet servir en cap moment on exactament és el punt —només que els tres segments són radis— així que l'angle continua sent 90° per molt prim que es faci el triangle."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Sempre 90°, sigui quin sigui el punt de l'arc. El radi cap a aquest punt crea dos triangles isòsceles, i sumant els tres angles del triangle gran com α+(α+β)+β=180° s'obté directament α+β=90°, l'angle buscat, sense que l'argument depengui en cap moment de la posició concreta del punt.",
    "titol": "L'angle inscrit en un semicercle és sempre recte"
  },
  "q42": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "A la Qüestió 41 el segment AB ja era un diàmetre, i l'angle sempre sortia 90°. Aquí AB és una corda qualsevol —no passa necessàriament pel centre— i cal demostrar que, mentre el punt es mantingui al mateix arc (la mateixa banda de la corda), l'angle que s'hi veu és sempre el mateix, encara que ja no calgui que sigui recte."
        ],
        "titol": "Ja no hi ha cap diàmetre de partida"
      },
      {
        "figures": [
          {
            "peu": "El diàmetre auxiliar per P (sanguina, discontinu) crea els dos triangles isòsceles OPA i OPB.",
            "src": "assets/img/pistes/fig-015.png"
          }
        ],
        "textos": [
          "En lloc del diàmetre donat de q41, aquí cal traçar-ne un de nou: el que passa pel centre i pel punt P des d'on es mira. Aquest diàmetre crea dos triangles isòsceles —OPA i OPB—, exactament amb el mateix argument d'abans (OP=OA=OB, tots tres radis)."
        ],
        "titol": "El mateix truc de q41, aplicat a un diàmetre nou"
      },
      {
        "figures": [],
        "textos": [
          "Anomenant α i β els angles de la base a P en cadascun dels dos triangles isòsceles, l'angle APB que interessa és α+β si el diàmetre auxiliar cau dins de l'angle APB (el separa en dos trossos), però és la diferència dels dos —sempre el gran menys el petit— si el diàmetre cau fora (P és molt a prop d'un dels dos extrems, i el diàmetre queda fora de l'angle format per PA i PB). Amb un cercle de radi 10, centre a l'origen, A a 200° i B a 340°: amb P a 80° (força separat de tots dos extrems), l'angle APB surt 70° i el cas correcte és la suma (α=30°, β=40°, α+β=70°). Amb P a 350° (gairebé enganxat a B), l'angle APB continua sortint 70°, però ara el cas correcte és la resta (α=15°, β=85°, β−α=70°): compte amb l'ordre, que aquí és el gran menys el petit i no a l'inrevés. La suma, en aquest segon cas, donaria 100°, un valor incorrecte."
        ],
        "titol": "Dos casos: el diàmetre pot caure dins o fora de l'angle"
      },
      {
        "figures": [],
        "textos": [
          "Repetint exactament el mateix procediment per al segon punt Q (amb el seu propi diàmetre auxiliar, que pot estar en un cas diferent del de P), s'obté sempre el mateix angle final —70° en aquest exemple, per a qualsevol punt del mateix arc gran. Que el cas (suma o resta) pugui canviar de punt a punt no trenca l'argument: en tots dos casos, aplicant el mateix raonament sobre els dos triangles isòsceles que crea el diàmetre auxiliar corresponent, s'arriba al mateix resultat final."
        ],
        "titol": "El mateix per Q, i comparar"
      },
      {
        "figures": [],
        "textos": [
          "Cercle de radi 10, A a 200°, B a 340° (angle central AOB=140°). Amb P a 80°: angle APB=70° (cas suma, 30°+40°). Amb un punt molt a prop de B, a 350°: angle APB=70° igualment (cas resta, 85°−15°). Tots dos coincideixen amb la meitat de l'angle central, 140°/2=70°."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Tots els angles vistos des del mateix arc són iguals, i valen exactament la meitat de l'angle central que subtendeix la corda. La demostració necessita distingir dos casos —el diàmetre auxiliar pot caure dins o fora de l'angle que es mira, donant suma o resta dels dos angles isòsceles— però arriba al mateix resultat final en tots dos casos, tal com ja havia passat a la Qüestió 15.",
    "titol": "L'angle inscrit és sempre la meitat de l'angle central"
  },
  "q43": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "L'enunciat demana l'àrea i el perímetre de la zona compartida (la \"vesica\", o ull, que formen dos cercles que es tallen) quan cada cercle passa pel centre de l'altre —una condició molt concreta que fixa exactament la distància entre els dos centres: igual al radi r."
        ],
        "titol": "Dues xifres exactes, no aproximades"
      },
      {
        "figures": [
          {
            "peu": "El triangle equilàter (tres marquetes iguals) format pels dos centres i un dels dos punts d'intersecció.",
            "src": "assets/img/pistes/fig-070.png"
          }
        ],
        "textos": [
          "Unint els dos centres i un dels dos punts on els cercles es tallen, els tres costats d'aquest triangle fan tots tres r: dos perquè són radis (del centre a un punt de la seva pròpia circumferència), i el tercer perquè la distància entre els dos centres també val r (per la condició de l'enunciat). Un triangle amb els tres costats iguals és equilàter."
        ],
        "titol": "El triangle equilàter amagat"
      },
      {
        "figures": [],
        "textos": [
          "El mateix triangle equilàter es repeteix, en mirall, cap a l'altre punt de tall. Junts, marquen l'angle que cada centre veu entre els dos punts d'intersecció: com que cada meitat és un angle de 60° (l'angle d'un triangle equilàter), l'angle complet és 2×60°=120°."
        ],
        "titol": "L'angle que \"veu\" cada centre"
      },
      {
        "figures": [],
        "textos": [
          "La zona compartida és la suma de dos \"segments circulars\" idèntics —un de cada cercle. Cadascun és un sector de 120° (àrea = (120/360)·πr² = πr²/3) menys el triangle que aquest sector deixa sota la corda.",
          "Aquí convé aturar-se, perquè és fàcil confondre dos triangles diferents. El que s'ha de restar del sector no és l'equilàter trobat abans: aquell té per vèrtexs els dos centres i un punt de tall, mentre que el del sector té per vèrtexs un centre i els dos punts de tall, i els seus costats fan r, r i r√3 —no és equilàter, i es veu de seguida si es dibuixa. El que passa és que les dues àrees coincideixen: el del sector és isòsceles amb dos costats r i l'angle de 120° entremig, o sigui (1/2)·r²·sin120° = (√3/4)r², que és exactament l'àrea de l'equilàter de costat r. Per això el càlcul funciona igualment amb la xifra que ja es tenia: (√3/4)r². Sumant els dos segments: àrea = 2·(πr²/3 − √3r²/4) = r²(4π−3√3)/6. El perímetre és la suma dels dos arcs de 120°, un de cada cercle: 2·(2πr/3) = 4πr/3."
        ],
        "titol": "Sector menys triangle, dues vegades"
      },
      {
        "figures": [],
        "textos": [
          "Amb tres cercles, cadascun passant pel centre dels altres dos (els tres centres formen, també, un triangle equilàter de costat r), la mateixa idea —sectors menys triangles— es repeteix, però ara cal decidir amb cura quines regions del dibuix es compten un cop, quines dos, i quina exactament tres vegades. És el mateix repte de comptatge acurat que ja va aparèixer a la Qüestió 3, i que aquí no es desenvolupa fins al resultat numèric final."
        ],
        "titol": "Per a tres cercles: el mètode, no la xifra final"
      },
      {
        "figures": [],
        "textos": [
          "Amb r=1: sector 120°=π/3≈1,047; triangle equilàter=√3/4≈0,433; un segment≈0,614; àrea solapada≈1,228. Perímetre: 2 arcs de 120°=4π/3≈4,189."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Àrea = r²(4π−3√3)/6 ≈1,228r². Perímetre = 4πr/3 ≈4,189r. Surten de veure la zona compartida com dos segments circulars (sector de 120° menys triangle equilàter), on el 120° ve del fet que la distància entre centres i els radis formen sempre un triangle equilàter. Per a tres cercles, la mateixa idea es repeteix amb un comptatge de regions més acurat, connectat amb la Qüestió 3.",
    "titol": "L'àrea de la intersecció de dos cercles"
  },
  "q44": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Aquí hi ha tres parelles de cercles tangents entre si i tangents a la mateixa recta: el gran de l'esquerra (R₁) amb el petit (r), el petit (r) amb el gran de la dreta (R₂), i els dos grans (R₁, R₂) entre si. Les tres relacions han de complir-se alhora."
        ],
        "titol": "Tres parelles, una condició cadascuna"
      },
      {
        "figures": [
          {
            "peu": "Els dos triangles rectangles amagats: un per la parella (R₁, r), un altre per (R₂, r).",
            "src": "assets/img/pistes/fig-024.png"
          }
        ],
        "textos": [
          "La peça que fa falta no ve de cap qüestió anterior: es construeix aquí, i és de dues línies. Prenguem dos cercles de radis a i b, tots dos tangents a la mateixa recta i tangents entre ells. Els seus centres queden a altura a i b sobre la recta, de manera que la diferència d'altures és (a−b); i com que els dos cercles es toquen, la distància entre els centres és (a+b). Amb Pitàgores sobre aquest triangle rectangle, la distància horitzontal entre els centres —que és també la distància entre els peus, els punts on cada cercle toca la recta— val √((a+b)² − (a−b)²) = √(4ab) = 2√(ab).",
          "Aplicant-ho a la parella (R₁, r): la distància entre els peus d'aquests dos cercles és 2√(R₁r)."
        ],
        "titol": "La distància entre peus, reutilitzada"
      },
      {
        "figures": [],
        "textos": [
          "Exactament el mateix argument, aplicat ara a la parella (R₂, r): la distància entre els seus peus és 2√(R₂r)."
        ],
        "titol": "El mateix per a l'altra parella"
      },
      {
        "figures": [],
        "textos": [
          "El peu del cercle petit r queda, per força, entre els peus dels dos cercles grans (és el cercle que hi encaixa a l'espai que deixen). Per tant, la distància completa entre els peus de R₁ i R₂ —que és 2√(R₁R₂), la mateixa fórmula d'abans aplicada a la tercera parella— ha de ser la suma de les altres dues distàncies parcials: 2√(R₁R₂) = 2√(R₁r) + 2√(R₂r)."
        ],
        "titol": "Els tres peus, sobre la mateixa recta"
      },
      {
        "figures": [],
        "textos": [
          "Dividint tota l'equació per 2√(R₁R₂r): 1/√r = 1/√R₁ + 1/√R₂. Aïllant r directament: r = R₁R₂/(√R₁+√R₂)²."
        ],
        "titol": "Aïllar r"
      },
      {
        "figures": [],
        "textos": [
          "Amb R₁=R₂=1: 1/√r=1/√1+1/√1=2, r=1/4. Amb la fórmula tancada: r=1×1/(√1+√1)²=1/4, coincidint."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "1/√r = 1/√R₁ + 1/√R₂, o de forma tancada, r = R₁R₂/(√R₁+√R₂)². Surt de la relació 2√(ab) per a la distància entre els peus de dos cercles tangents a la mateixa recta i tangents entre ells —demostrada aquí mateix amb un triangle rectangle de catets (a−b) i 2√(ab) i hipotenusa (a+b)—, aplicada a les tres parelles, i d'imposar que la suma de les dues distàncies parcials sigui la distància completa entre els peus de R₁ i R₂.",
    "titol": "El cercle petit entre dues circumferències tangents"
  },
  "q45": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "En un dibuix en perspectiva, les circumferències de dalt i de baix d'un cilindre no semblen cercles —surten aixafades, com el·lipses. Cal fiar-se de l'objecte, no del dibuix: són cercles de veritat (o, com mostra la pròpia figura de l'enunciat, qualsevol altra corba tancada: d'aquí ve el \"generalitzat\" del títol)."
        ],
        "titol": "Un avís abans de començar"
      },
      {
        "figures": [
          {
            "peu": "El cilindre de radi 3 i el rectangle resultant: amplada 2π·3≈18,85, alçada h=10.",
            "src": "assets/img/pistes/fig-192.png"
          }
        ],
        "textos": [
          "Si es talla l'etiqueta de paper d'una llauna de sopa en vertical i s'estira plana, quina forma en surt? Amb radi 3 i alçada 10: l'amplada de l'etiqueta és la longitud de la circumferència, 2π×3 ≈ 18,85; l'alçada és 10, la mateixa del cilindre. Ja hi ha un rectangle."
        ],
        "titol": "Pensa en l'etiqueta d'una llauna"
      },
      {
        "figures": [
          {
            "peu": "El tall vertical (en vermell) per on es desenrotlla el cilindre, i el rectangle resultant de costats C (el perímetre de la base) i h (l'alçada).",
            "src": "assets/img/pistes/fig-021.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "L'àrea lateral del cilindre és, exactament, l'àrea d'aquest rectangle: (2πr) × h. No cal cap fórmula nova ni cap límit —un cop desenrotllat, és literalment base per alçada. El parany habitual: l'amplada del rectangle és la circumferència, no el diàmetre ni el radi."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Amb r=3, h=10: àrea lateral = 2π(3)(10) = 60π ≈ 188,5. Si s'hi afegeixen les dues tapes circulars (2×πr² = 18π), la superfície total surt 78π ≈ 245,0.",
          "Una nota sobre el \"generalitzat\" del títol: aquest argument treballa sempre, aquí, amb un cilindre de base circular, però el mètode de l'etiqueta desenrotllada val exactament igual per a qualsevol sòlid fet lliscant una corba plana tancada qualsevol —no cal que sigui un cercle— perpendicularment, sense girar-la ni canviar-ne la mida (com la base irregular que mostra la mateixa figura de l'enunciat). Si la base té perímetre P, l'àrea lateral és P × h sempre; 2πr és només el valor d'aquest perímetre en el cas particular que la base sigui un cercle."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "L'àrea lateral d'un cilindre és perímetre de la base per alçada: en desenrotllar-lo surt sempre un rectangle d'amplada igual a la circumferència (2πr en el cas circular) i alçada h.",
    "titol": "L'àrea d'un cilindre: l'etiqueta desenrotllada"
  },
  "q46": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una el·lipse de semieixos a i b es pot obtenir a partir d'un cercle de radi a estirant-lo verticalment per un factor k=b/a. Si es descobreix com canvia l'àrea de qualsevol figura quan s'estira així, s'obté directament la resposta."
        ],
        "titol": "Una eina nova: l'estirament"
      },
      {
        "figures": [
          {
            "peu": "Cada franja vertical del cercle, en estirar-se, manté la mateixa amplada i multiplica la seva alçada per k=b/a.",
            "src": "assets/img/pistes/fig-025.png"
          }
        ],
        "textos": [
          "Es talla mentalment el cercle en franges verticals molt primes. En estirar-lo verticalment per un factor k, cada franja canvia d'alçada per aquest mateix factor k, però la seva amplada horitzontal no canvia gens —l'estirament és només vertical."
        ],
        "titol": "Tallar en franges primes"
      },
      {
        "figures": [],
        "textos": [
          "L'àrea d'una franja rectangular prima és amplada×alçada. Com que l'amplada no canvia i l'alçada es multiplica per k, l'àrea de cada franja es multiplica per k. I com que l'àrea total de la figura és la suma de totes les franges, si cadascuna es multiplica per k, la suma sencera també es multiplica per k.",
          "Una precisió que val la pena fer, perquè és on l'argument es podria criticar: les franges d'un cercle no són rectangles de debò —tenen la vora de dalt i la de baix corbades—, i per tant «amplada×alçada» només val exactament en el límit de franges infinitament primes. Però el que sosté l'argument no depèn d'això: sigui quina sigui la forma de la franja, l'estirament multiplica per k tota longitud vertical, a cada punt. Aquesta és exactament la idea de Cavalieri (q54), i és el que fa que πab sigui una igualtat exacta i no una aproximació."
        ],
        "titol": "Cada franja, i després la suma"
      },
      {
        "figures": [],
        "textos": [
          "L'àrea del cercle de radi a és πa². Multiplicant-la pel factor k=b/a: àrea de l'el·lipse = πa²·(b/a) = πab."
        ],
        "titol": "Aplicar-ho al cercle"
      },
      {
        "figures": [],
        "textos": [
          "Amb a=5, b=3: àrea=π×5×3=15π≈47,12. Cas particular b=a (l'\"el·lipse\" és el cercle mateix): πa·a=πa², coincidint amb la fórmula coneguda del cercle."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Àrea de l'el·lipse = πab. Surt de veure l'el·lipse com un cercle de radi a estirat verticalment per un factor k=b/a, i d'observar que aquest estirament multiplica l'àrea de qualsevol figura —franja a franja— pel mateix factor k.",
    "titol": "L'àrea d'una el·lipse"
  },
  "q47": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "En un dibuix en perspectiva els angles rectes del cub no semblen rectes. Cal fiar-se de l'objecte, no del dibuix."
        ],
        "titol": "Un avís abans de començar"
      },
      {
        "figures": [],
        "textos": [
          "Posant el cub amb centre a l'origen i costat 2 —vèrtexs a (±1,±1,±1)—, els sis centres de cara surten (±1,0,0), (0,±1,0), (0,0,±1): més nets que amb costat 1. L'octàedre que formen aquests sis punts es pot partir en dues piràmides iguals, unides per la base. Quina és la base, i quina l'alçada de cadascuna?"
        ],
        "titol": "Tria unes coordenades netes"
      },
      {
        "figures": [
          {
            "peu": "L'octàedre en vermell: el quadrat equatorial del mig separa les dues piràmides que el componen.",
            "src": "assets/img/pistes/fig-026.png"
          }
        ],
        "textos": [
          "L'octàedre, marcat en vermell, amb el seu \"equador\" —el quadrat que formen els quatre vèrtexs laterals— separant-lo en dues piràmides bessones, una amunt i una avall."
        ],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Cada piràmide té per base el quadrat que formen quatre dels sis centres —per exemple (±1,0,0),(0,±1,0), un quadrat de diagonal 2— i per alçada la distància fins al cinquè centre, (0,0,1), que és 1. Volum d'una piràmide = (1/3)·base·alçada. Sumant les dues piràmides i comparant amb el volum del cub (2³=8) surt la fracció que ocupa."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Àrea del quadrat base (diagonal 2, costat √2): (√2)² = 2. Volum d'una piràmide: (1/3)×2×1 = 2/3. Dues piràmides: 4/3. Fracció del cub: (4/3)/8 = 1/6."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "L'octàedre format pels centres de les sis cares d'un cub ocupa exactament 1/6 del volum del cub.",
    "titol": "L'octàedre dins del cub: una sisena part"
  },
  "q48": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una fórmula en a, b, h. \"Incompleta\" és la pista: el sòlid és un tros d'una piràmide, no una piràmide sencera."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "Es prolonguen els quatre costats inclinats del tronc fins que es tornin a trobar en un sol punt. Aquest punt existeix sempre —perquè els dos quadrats són paral·lels i concèntrics, un d'escala diferent—: és el vèrtex de la piràmide sencera de la qual el sòlid original n'és només un tros."
        ],
        "titol": "Completa el que falta"
      },
      {
        "figures": [
          {
            "peu": "Els costats prolongats (vermell) fins al vèrtex comú —no formaven part de l'enunciat original—, amb a (dalt), b (baix) i h (l'alçada del tronc) marcats.",
            "src": "assets/img/pistes/fig-074.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "El sòlid original és (piràmide gran, fins al vèrtex, base b) menys (piràmide petita, el tros de dalt afegit imaginàriament, base a). Per semblança de triangles, l'alçada H de la piràmide gran compleix a/b = (H−h)/H. Aïllant: aH = bH − bh, és a dir H = bh/(b−a), i per tant l'alçada de la piràmide petita és H−h = ah/(b−a).",
          "El volum del tronc és (1/3)b²H − (1/3)a²(H−h). Substituint:",
          "V = (1/3)·b²·bh/(b−a) − (1/3)·a²·ah/(b−a) = (h/3)·(b³−a³)/(b−a)",
          "i com que b³−a³ = (b−a)(b²+ab+a²), el factor (b−a) se simplifica i queda la fórmula que l'enunciat demanava:",
          "V = (h/3)·(a² + ab + b²)",
          "Val la pena mirar-la un moment. Si a=0 dona (h/3)b², la piràmide sencera. Si a=b dona (h/3)(3a²) = a²h, el prisma —i fixa't que aquest cas s'ha colat pel camí tot i que el pas intermedi, amb el (b−a) al denominador, no el permetia: la simplificació l'ha reparat. I si a i b són poc diferents, el resultat queda entre a²h i b²h, com ha de ser."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "a=2, b=4, h=3: alçada de la piràmide gran H tal que a/b=(H−h)/H → H=6. Volum gran=(1/3)(16)(6)=32. Volum petit=(1/3)(4)(3)=4. Volum del tronc=32−4=28.",
          "Aquesta mateixa jugada —completar una figura incompleta fins a una de coneguda, i restar-ne el tros de més— torna a aparèixer en aproximar un casquet esfèric, i, en un altre embolcall, en aproximar un con per discs apilats."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "V = (h/3)·(a² + ab + b²). Surt de restar, al volum de la piràmide gran completada (base b, fins al vèrtex), el de la piràmide petita afegida imaginàriament (base a), totes dues amb l'alçada que dona la semblança de triangles: H = bh/(b−a) i H−h = ah/(b−a). Casos límit: a=0 dona la piràmide, (h/3)b²; a=b dona el prisma, a²h.",
    "titol": "El tronc de piràmide: completa el que falta"
  },
  "q49": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Un tetraedre regular té una simetria total entre els seus quatre vèrtexs —cap n'és especial. Si el \"centre\" existeix, aquesta simetria ja diu una cosa forta sobre on ha de ser."
        ],
        "titol": "Endevina per simetria"
      },
      {
        "figures": [
          {
            "peu": "Els quatre segments (en vermell) es tallen tots en el mateix punt, marcat al centre.",
            "src": "assets/img/pistes/fig-027.png"
          }
        ],
        "textos": [
          "Des de cada vèrtex, es traça el segment fins al centre de gravetat de la cara oposada. Per simetria, aquests quatre segments haurien de trobar-se tots en un sol punt. Comprovant-ho amb coordenades: si els quatre vèrtexs són A, B, C, D, quin punt surt de fer la mitjana dels quatre?"
        ],
        "titol": "La construcció que ho fa concret"
      },
      {
        "figures": [],
        "textos": [
          "El punt G=(A+B+C+D)/4 és, alhora, el punt que hi ha a 3/4 del camí de cada vèrtex cap al centre de gravetat de la cara oposada. L'àlgebra que ho demostra són dues línies. El centre de gravetat de la cara oposada a A és (B+C+D)/3, i el punt situat a 3/4 del camí d'A cap allà és:",
          "A + (3/4)·[(B+C+D)/3 − A] = A + (B+C+D)/4 − (3/4)A = (A+B+C+D)/4 = G",
          "I com que l'expressió (A+B+C+D)/4 no distingeix cap dels quatre vèrtexs, el mateix càlcul amb B, C o D al lloc d'A dona igualment G: els quatre segments hi passen tots. Aquí no cal ni tan sols que el tetraedre sigui regular —el càlcul val per a qualsevol tetraedre—; la regularitat és el que fa, a més, que G sigui equidistant dels quatre vèrtexs i mereixi el nom de \"centre\"."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Amb A=(1,1,1), B=(1,−1,−1), C=(−1,1,−1), D=(−1,−1,1) —un tetraedre regular clàssic inscrit en un cub—: G=(0,0,0). El centre de la cara BCD és ((1−1−1)/3,(−1+1−1)/3,(−1−1+1)/3)=(−1/3,−1/3,−1/3). El punt a 3/4 del camí d'A cap a aquest centre: A+(3/4)((−1/3,−1/3,−1/3)−A) = (1,1,1)+(3/4)(−4/3,−4/3,−4/3) = (1,1,1)+(−1,−1,−1) = (0,0,0) = G ✓."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "El centre d'un tetraedre regular és el punt G=(A+B+C+D)/4, la mitjana dels quatre vèrtexs. Es troba a 3/4 del camí de cada vèrtex cap al centre de gravetat de la cara oposada —l'anàleg en 3D de la relació 2:1 del baricentre d'un triangle en 2D.",
    "titol": "El centre d'un tetraedre: l'anàleg 3D del baricentre"
  },
  "q50": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "No un únic volum: una successió de valors —un per cada nombre de discs— i el reconeixement de cap a on tendeix aquesta successió a mesura que n'hi ha més."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "Amb un sol disc —un cilindre curt dins del con— el volum aproximat es queda curt de veritat. Amb dos discs més prims, ja s'hi assembla més. Cada disc és un cilindre: el mateix objecte de volum conegut ja fet servir en una qüestió anterior sobre el volum d'una caixa, ara apilat en comptes de format per una sola capa."
        ],
        "titol": "Comença amb pocs discs"
      },
      {
        "figures": [
          {
            "peu": "Un dels discs apilats, ressaltat en vermell: cada un és un cilindre curt, calculable amb la fórmula ja coneguda.",
            "src": "assets/img/pistes/fig-075.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "A mesura que n (el nombre de discs) creix, cada disc s'aprima i se n'ajusten més: la suma dels volums dels discs s'acosta cada cop més al volum real del con, sense arribar-hi mai amb un nombre finit de discs. Ara bé, dir només «s'acosta al volum del con, que ja el sabem» no seria contestar la pregunta: el que es demana és el patró, i el patró es pot escriure exactament.",
          "Partim l'alçada en n llesques iguals de gruix h/n. El disc de la llesca número j (comptant des de dalt) té el radi que té el con al seu propi sostre, r(j−1)/n —per això queda sencer dins del con, i per això la llesca de més amunt no en conté cap. Sumant-los tots:",
          "Vn = Σ π·[r(j−1)/n]²·(h/n) = (πr²h/n³)·[0² + 1² + … + (n−1)²] = (πr²h/n³)·(n−1)n(2n−1)/6",
          "i desenvolupant el quocient queda una expressió que es llegeix d'un cop d'ull:",
          "Vn = πr²h·( 1/3 − 1/(2n) + 1/(6n²) )",
          "Aquest és el patró. La suma val sempre una mica menys que un terç del cilindre —els discs van per dins del con—, i el que li falta, 1/(2n) − 1/(6n²), es pot fer més petit que qualsevol número que ens diguin només triant n prou gran. No hi ha cap salt màgic al final: per a cada n hi ha una fórmula exacta, i l'únic valor que cap n no pot desmentir és (1/3)πr²h —el volum del con, no el del cilindre de la mateixa base i alçada.",
          "És exactament el mateix tipus d'argument que retrobarem a la Qüestió 121 amb la paràbola: la mateixa suma de quadrats i la mateixa expressió, però amb els signes canviats —1/3 + 1/(2n) + 1/(6n²)—, perquè allà els rectangles sobresurten de la corba en comptes de quedar-hi per dins."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Con de radi 3, alçada 6: volum = (1/3)π(9)(6) = 18π ≈ 56,5. El cilindre corresponent —mateixa base i alçada— fa 3 vegades més: 54π ≈ 169,6. Amb la fórmula del patró, la fracció del cilindre val 1/8 amb n=2, 35/128 ≈ 0,273 amb n=8 (els set discs que es veuen al dibuix, més la llesca de dalt que queda buida) i 0,32835 amb n=100: s'acosta a 1/3, no a 1."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Amb n llesques, la suma dels discs val exactament Vn = πr²h·(1/3 − 1/(2n) + 1/(6n²)): sempre una mica per sota d'un terç del cilindre, i acostant-s'hi tant com es vulgui triant n prou gran. El límit és el volum del con, (1/3)πr²h —un terç del cilindre que el circumscriu, mai el cilindre sencer.",
    "titol": "El con aproximat per discs: cap on tendeix la suma"
  },
  "q51": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Com sempre en un dibuix en perspectiva, la base del con no sembla un cercle. És un cercle de veritat."
        ],
        "titol": "Un avís abans de començar"
      },
      {
        "figures": [
          {
            "peu": "El con amb l'aresta inclinada L en vermell, i el sector resultant, també amb L marcada.",
            "src": "assets/img/pistes/fig-193.png"
          }
        ],
        "textos": [
          "A la qüestió 45, en desenrotllar un cilindre en va sortir un rectangle. Provant el mateix amb un con —tallant-lo des de la punta fins a la vora de la base, en línia recta, i estirant-lo pla—, ja no en surt un rectangle: en surt un tros de cercle, un sector. Quin radi té aquest sector? I quina llargada d'arc?"
        ],
        "titol": "El truc de q45 no funciona igual"
      },
      {
        "figures": [
          {
            "peu": "Els dos talls des de la punta —tots dos de longitud L— i l'arc que abans era la vora de la base.",
            "src": "assets/img/pistes/fig-030.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "El radi del sector és exactament la llargada de la línia tallada —l'aresta inclinada del con des de la punta fins a la vora, anomenada generatriu o alçada inclinada, L. L'arc del sector ha de fer, en longitud, exactament la circumferència de la base (2πr), ja que abans d'estirar-lo el con era la vora d'aquella base. Un sector de cercle de radi L amb arc de longitud 2πr té àrea (1/2)×L×(2πr) = πrL —la mateixa fórmula \"base × alçada / 2\" que serveix per a qualsevol sector."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Amb r=3, L=8: l'angle del sector és 2π(3)/8 = 3π/4 (135°). Àrea lateral = πrL = π×3×8 = 24π ≈ 75,4. Comprovant-ho també amb la fórmula del sector: (1/2)×8²×(3π/4) = (1/2)×64×2,356 = 75,4 ✓.",
          "A diferència del cilindre, aquí l'\"amplada\" de la superfície desenrotllada no és constant —és un arc, no un segment recte. Aquesta diferència és exactament el que fa que el con, a diferència del cilindre, no es pugui \"desenrotllar\" en un rectangle."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "L'àrea lateral d'un con és πrL, on r és el radi de la base i L la generatriu (l'aresta inclinada): en desenrotllar el con surt un sector de cercle de radi L i arc de longitud 2πr.",
    "titol": "L'àrea d'un con: un sector, no un rectangle"
  },
  "q52": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Hi ha un pla de tall que funciona per raons de simetria. La diagonal principal del cub —la que va d'un vèrtex al vèrtex oposat, travessant l'interior— té una simetria de rotació de 120°: girant el cub al voltant d'aquesta diagonal, es veu igual tres cops per volta."
        ],
        "titol": "No qualsevol pla serveix"
      },
      {
        "figures": [],
        "textos": [
          "Un pla tallat perpendicularment a aquesta diagonal, pel centre del cub, hereta aquesta mateixa simetria de 120°. Quina figura, si té simetria de 120° i toca cada cara del cub un cop, en pot sortir?"
        ],
        "titol": "Hereta la simetria"
      },
      {
        "figures": [
          {
            "peu": "El cub mirat exactament al llarg de la diagonal principal: el contorn extern (negre) i el pla de tall (vermell) surten, tots dos, hexàgons regulars.",
            "src": "assets/img/pistes/fig-028.png"
          }
        ],
        "textos": [
          "Aquest cub es mira exactament al llarg de la diagonal principal —no en la projecció habitual del quadern— perquè és l'única direcció des de la qual el pla de tall es veu en veritable magnitud, sense aixafar-se. Vist així, el contorn del cub mateix ja dibuixa un hexàgon (negre): les sis arestes del cub que no toquen cap dels dos vèrtexs de la diagonal triada. L'hexàgon vermell —el pla de tall— hi apareix net al mig, tocant cadascuna d'aquelles sis arestes pel seu punt mitjà, sense creuar-se."
        ],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "El pla talla exactament sis arestes del cub —les sis que no toquen cap dels dos vèrtexs de la diagonal triada— pel seu punt mitjà. Amb el cub de costat 1 i la diagonal de (0,0,0) a (1,1,1), el pla de tall té equació x+y+z = 3/2 i els sis punts mitjans són (1, ½, 0), (½, 1, 0), (0, 1, ½), (0, ½, 1), (½, 0, 1) i (1, 0, ½): tots sis sumen 3/2, o sigui que hi són.",
          "Cadascun és a distància √(¼+0+¼) = √0,5 del centre (½,½,½), i dos de consecutius disten també √0,5. Ara bé, el pas d'aquí a «regular» no és automàtic i val la pena dir-lo: un hexàgon amb els sis costats iguals encara podria estar deformat. El que ho tanca és tenir les dues coses alhora —tots els vèrtexs a la mateixa distància del centre i tots els costats iguals—, perquè aleshores els sis angles centrals són iguals (a igual radi, cordes iguals subtendeixen angles iguals) i sis angles iguals que sumen 360° fan 60° cadascun."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Punts mitjans com (1, 0.5, 0) i (0.5, 1, 0): distància √((0.5)²+(0.5)²+0²) = √0,5 ≈ 0,707. Fent-ho amb un altre parell consecutiu, per exemple (0.5,1,0) i (0,1,0.5): √(0,25+0+0,25) = √0,5 ≈ 0,707 —igual."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "El pla perpendicular a una diagonal principal del cub, pel seu centre, talla exactament els punts mitjans de sis arestes, i aquests sis punts formen un hexàgon regular.",
    "titol": "El tall hexagonal d'un cub"
  },
  "q53": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Es compara un cilindre recte amb un cilindre \"inclinat\" —com una pila de monedes que s'ha desplaçat de costat sense girar cap moneda— amb la mateixa base i la mateixa alçada."
        ],
        "titol": "No cal cap objecte estrany"
      },
      {
        "figures": [
          {
            "peu": "Els dos cilindres, amb el mateix tall horitzontal (vermell) a la mateixa alçada.",
            "src": "assets/img/pistes/fig-194.png"
          }
        ],
        "textos": [
          "A cada alçada, el tall horitzontal dels dos cilindres és un cercle idèntic (mateix radi) —per Cavalieri, doncs, tenen el mateix volum. Però un és \"recte\" i l'altre \"s'inclina\": mirant ara la superfície lateral de cadascun, quina serà més gran, i per què?"
        ],
        "titol": "Compara les seccions, no la superfície encara"
      },
      {
        "figures": [
          {
            "peu": "Una franja vertical (vermell) marcada als dos cilindres: la de l'inclinat és estrictament més llarga.",
            "src": "assets/img/pistes/fig-031.png"
          }
        ],
        "textos": [
          "Es mira la superfície lateral de cadascun, no el volum, que ja se sap que coincideix: quina franja vertical s'allarga en inclinar-se?"
        ],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "El cilindre inclinat té una superfície lateral estrictament més gran que el recte, encara que el volum sigui idèntic —cada franja vertical de la superfície s'allarga en inclinar-se, de la mateixa manera que la hipotenusa d'un triangle rectangle és més llarga que el catet.",
          "Aquí cal aturar-se abans de fer el pas següent, perquè és fals i és temptador: que cada franja s'allargui per un factor k no vol dir que la superfície es multipliqui per k. No totes les franges s'inclinen igual respecte de la vora de la base. Les que queden a la banda cap on el cilindre 'cau' s'inclinen de ple i creixen pel factor sencer; les de la banda perpendicular gairebé no ho noten i pràcticament no creixen. La superfície creix, però menys que k, i per a un cilindre el valor exacte ja no s'obté amb aritmètica elemental.",
          "Per a la resposta que la pregunta demana això no fa cap falta —n'hi ha prou de saber que creix—, i si es vol un número exacte, n'hi ha prou de canviar el cilindre per un prisma, on totes les cares són planes."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Amb un prisma de base quadrada els números surten exactes. Base de costat 6, alçada 8: superfície lateral del prisma recte = 4×6×8 = 192, i volum = 36×8 = 288. Inclinant-lo 6 unitats en la direcció d'un dels costats de la base, el volum es manté a 288 (Cavalieri: cada tall horitzontal continua sent el mateix quadrat), però la superfície canvia de manera desigual: les dues cares paral·leles a la direcció d'inclinació passen de rectangles a paral·lelograms de la mateixa base i la mateixa alçada, 6×8 = 48 cadascuna, igual que abans; les dues cares perpendiculars s'inclinen de ple i passen a ser rectangles de 6 per √(8²+6²) = 10, o sigui 60 cadascuna. Total: 2(48)+2(60) = 216, contra 192. I 216/192 = 1,125, mentre que les arestes s'han allargat per 10/8 = 1,25: la superfície creix, però no pel factor de les arestes —perquè dues de les quatre cares no creixen gens.",
          "Aquest exemple és el bessó en 3D del que passa amb el perímetre d'una figura esglaonada en 2D: igual que aquí el volum no \"sent\" la inclinació però la superfície sí, allà l'àrea no sent els esglaons però el perímetre sí."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Un cilindre recte i un cilindre inclinat (mateixa base, mateixa alçada) tenen el mateix volum —per Cavalieri— però superfícies laterals diferents: la de l'inclinat és sempre més gran. Compte, però: creix menys que el factor pel qual s'allarga cada franja, perquè no totes les franges s'inclinen igual.",
    "titol": "Mateix volum, superfície diferent: el cilindre inclinat"
  },
  "q54": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Un rectangle es pot deformar en un paral·lelogram desplaçant-ne la part de dalt cap al costat, mantenint sempre la mateixa alçada. Visualment sembla que la figura \"s'allarga\" en fer-se obliqua —però l'àrea real, canvia de debò?"
        ],
        "titol": "Inclinar sense canviar l'àrea?"
      },
      {
        "figures": [
          {
            "peu": "El tall horitzontal (sanguina) a la mateixa alçada relativa, al rectangle i al paral·lelogram.",
            "src": "assets/img/pistes/fig-195.png"
          }
        ],
        "textos": [
          "En lloc de comparar les dues figures senceres, es compara el tall horitzontal que fa cadascuna a la mateixa alçada: un segment concret, no tota la superfície."
        ],
        "titol": "Mirar el tall, no la figura sencera"
      },
      {
        "figures": [
          {
            "peu": "Les marquetes confirmen que els talls tenen la mateixa longitud als dos, a la mateixa alçada.",
            "src": "assets/img/pistes/fig-032.png"
          }
        ],
        "textos": [
          "A qualsevol alçada que es triï, el tall horitzontal del paral·lelogram té exactament la mateixa longitud que la base —igual que el rectangle. La inclinació desplaça el tall cap a un costat, però no en canvia la mida."
        ],
        "titol": "El mateix tall, a qualsevol alçada"
      },
      {
        "figures": [],
        "textos": [
          "Si dues figures tenen el mateix tall a cada alçada, la seva àrea —que no és res més que la suma de tots aquests talls, un per cada alçada— ha de ser la mateixa. Aquest és el principi de Cavalieri per a àrees en el pla: no cal comparar les figures senceres, n'hi ha prou de comparar-ne els talls a cada alçada."
        ],
        "titol": "Del tall igual a l'àrea igual"
      },
      {
        "figures": [],
        "textos": [
          "Rectangle de base 6, alçada 4: àrea 24. Paral·lelogram amb la mateixa base i alçada, inclinat 3 unitats: descomponent-lo en el rectangle més un triangle petit a un costat menys el mateix triangle a l'altre (que es cancel·len exactament), l'àrea es queda en 24."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Un rectangle i un paral·lelogram amb la mateixa base i alçada tenen sempre la mateixa àrea, sigui quina sigui la inclinació, perquè el tall horitzontal a qualsevol alçada té la mateixa longitud als dos. Aquest és el principi de Cavalieri per a àrees: si dues figures tenen el mateix tall a cada alçada, tenen la mateixa àrea.",
    "titol": "El principi de Cavalieri per a àrees"
  },
  "q55": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Fent els graons d'una escala cada cop més petits i nombrosos, el seu contorn s'assembla cada cop més a la diagonal del quadrat, a simple vista. Sembla natural pensar que la longitud de l'escala també s'acosta a la longitud de la diagonal —però cal comprovar-ho, no donar-ho per fet."
        ],
        "titol": "El parany visual"
      },
      {
        "figures": [
          {
            "peu": "Els trams horitzontals marcats: sumats, fan sempre s, independentment del nombre de graons.",
            "src": "assets/img/pistes/fig-033.png"
          }
        ],
        "textos": [
          "Els trams horitzontals de tots els graons, sumats, cobreixen exactament la mateixa distància horitzontal total que el costat del quadrat —es limiten a repartir aquesta mateixa distància en trossos més petits, sigui quin sigui el nombre de graons. La suma dels trams horitzontals és sempre s (el costat del quadrat), tant si hi ha 2 graons com 2.000."
        ],
        "titol": "Sumar els trams horitzontals, sols"
      },
      {
        "figures": [],
        "textos": [
          "Exactament el mateix raonament val per als trams verticals: sumats, fan sempre s també, per la mateixa raó (repartir la mateixa distància vertical total en trossos més petits no en canvia la suma)."
        ],
        "titol": "El mateix amb els verticals"
      },
      {
        "figures": [],
        "textos": [
          "La longitud total del camí en escala és, doncs, sempre s+s=2s —exactament la mateixa, sigui quin sigui el nombre de graons. Però la diagonal del quadrat fa s√2, i com que √2≈1,41 és menor que 2, es compleix sempre s√2 < 2s: la diagonal és, i serà sempre, més curta que qualsevol escala, per fins que se'n facin els graons. La diferència entre totes dues longituds (2s−s√2) no es redueix mai, per molt que el dibuix s'assembli visualment a la diagonal."
        ],
        "titol": "La longitud de l'escala no canvia mai"
      },
      {
        "figures": [],
        "textos": [
          "Amb s=10: diagonal=10√2≈14,14. Escala amb qualsevol nombre de graons: longitud sempre 20 —amb 2 graons, amb 20 graons, amb 2.000 graons. La diferència (20−14,14=5,86) es manté idèntica en tots els casos."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "L'escala mai s'acosta a la diagonal en longitud, encara que hi sembli cada cop més a ull: la seva longitud és sempre exactament 2s (la suma dels trams horitzontals, s, més la dels verticals, també s), independentment de com de fins siguin els graons —mentre que la diagonal fa s√2 < 2s. Aquest és el motiu pel qual aproximar per trossos, que sí que funciona per a àrees —tant amb el principi de Cavalieri de la Qüestió 54 com amb l'exhauriment de la Qüestió 121— no es pot aplicar de la mateixa manera ingènua a longituds.",
    "titol": "Per què l'escala no s'acosta a la diagonal"
  },
  "q56": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "\"Diagonals\" vol dir aquí diagonals de cara —no la diagonal principal que travessa l'interior del cub. Cal triar quatre dels vuit vèrtexs del cub de manera que cap parella triada sigui una aresta del cub: només diagonals."
        ],
        "titol": "Quines diagonals"
      },
      {
        "figures": [],
        "textos": [
          "Amb el cub de costat 1 i vèrtexs a {0,1}³, es trien (0,0,0), (1,1,0), (1,0,1), (0,1,1). Cal comprovar que cada parella d'aquests quatre punts és a distància √2 —una diagonal de cara—: si ho és per a totes sis parelles, ja hi ha un tetraedre regular."
        ],
        "titol": "Una tria concreta"
      },
      {
        "figures": [
          {
            "peu": "El tetraedre en vermell: quatre vèrtexs alterns del cub, units per sis diagonals de cara.",
            "src": "assets/img/pistes/fig-029.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Hi ha dos camins, i val la pena saber que n'hi ha dos.",
          "El curt fa servir una eina de nivell més avançat: el volum d'un tetraedre és (1/6)|det[B−A, C−A, D−A]|, un determinant 3×3. Amb les coordenades de dalt, aquest càlcul dona directament el resultat.",
          "El llarg no necessita res de nou, i de fet ensenya més. Es mira què queda del cub quan se n'ha tret el tetraedre: quatre trossos, un a cada cantonada no usada. Semblaria que cadascun és una piràmide amb una cara sencera del cub per base (àrea 1) i una aresta per alçada (1) —volum (1/3)(1)(1) = 1/3, que ja és massa per a quatre trossos junts. Mirant-ho més bé: la base de cada tros no és una cara sencera, és mig cara —un triangle rectangle d'àrea 1/2— i l'alçada continua sent 1. Volum de cada tros: (1/3)(1/2)(1) = 1/6. Quatre trossos fan 4/6 = 2/3. El tetraedre és, doncs, 1 − 2/3 del cub —el mateix resultat que el camí curt."
        ],
        "titol": "Tancar-ho — dos camins"
      },
      {
        "figures": [],
        "textos": [
          "Amb A=(0,0,0), B=(1,1,0), C=(1,0,1), D=(0,1,1): det[(1,1,0),(1,0,1),(0,1,1)] = 1(0−1)−1(1−0)+0(1−0) = −1−1+0 = −2. Volum = 2/6 = 1/3. El tetraedre ocupa exactament un terç del cub."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "El tetraedre regular format per quatre diagonals de cara d'un cub ocupa exactament 1/3 del seu volum. El cub sencer es reparteix entre aquest tetraedre i quatre petites piràmides de cantonada, cadascuna de volum 1/6.",
    "titol": "El tetraedre de les diagonals: un terç del cub"
  },
  "q57": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "No cal trobar els volums dels cinc sòlids platònics un per un: n'hi ha prou de resoldre'n un (o dos) de manera que el mètode sigui evidentment el mateix per als altres tres."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "S'uneix el centre del sòlid amb cadascun dels seus vèrtexs: això és el que el parteix en piràmides, una per cada cara. (Convé no confondre-ho amb el segment que va del centre al centre d'una cara: aquell no talla res, però farà falta de seguida, perquè és l'alçada de cada piràmide.) Quantes peces en surten, per a un tetraedre? I per a un octàedre?"
        ],
        "titol": "Parteix-lo en peces que ja se sap mesurar"
      },
      {
        "figures": [
          {
            "peu": "Segments (vermell) del centre a cada vèrtex: el tetraedre queda partit en 4 piràmides, l'octàedre en 8 —una per cada cara, en tots dos casos.",
            "src": "assets/img/pistes/fig-076.png"
          }
        ],
        "textos": [
          "El tetraedre i l'octàedre, cadascun partit en piràmides des del seu centre —el mateix nombre de piràmides que de cares."
        ],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Cada peça és una piràmide amb base una cara del sòlid i alçada l'apotema del sòlid —la distància del centre a una cara, que és el radi de l'esfera inscrita. (Val la pena no confondre aquesta 'apotema' amb la d'una piràmide, que en el llenguatge habitual és l'altura d'una cara lateral, ni amb la d'un polígon regular de q39, que és el cas pla del mateix concepte.) El volum total és (nombre de cares) × (1/3) × (àrea d'una cara) × (apotema), que es pot reescriure com (1/3) × (àrea total de la superfície) × (apotema)."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Tetràedre d'aresta 1: apotema ≈ 0,204, àrea total ≈ 1,732 (4 cares equilàters). Volum ≈ (1/3)(1,732)(0,204) ≈ 0,118 —coincideix amb la fórmula coneguda s³/(6√2).",
          "Aquesta fórmula \"(1/3) × superfície × apotema\" no fa servir enlloc que el sòlid sigui un dels cinc platònics: val per a qualsevol poliedre que tingui un punt equidistant de totes les cares —la mateixa generalització que ja funciona per a l'àrea d'un polígon regular via triangulació des del centre."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "El volum de qualsevol poliedre regular —i, de fet, de qualsevol poliedre convex que tingui un punt interior equidistant de totes les cares, és a dir una esfera inscrita— és (1/3) × àrea total de la superfície × apotema.",
    "titol": "El volum de qualsevol sòlid amb centre: superfície per apotema"
  },
  "q58": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una descripció de la forma —no és cap sòlid que ja tingui nom conegut— i el seu volum, en termes del radi r comú als dos cilindres."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "Es talla la intersecció amb un pla horitzontal, a una alçada y qualsevol per sobre del centre. Aquest pla talla cada cilindre en una franja rectangular d'amplada 2√(r²−y²) —el mateix Pitàgores que ja serveix per a la corda d'un cercle. La intersecció dels dos cilindres, en aquest pla, és on totes dues franges es superposen."
        ],
        "titol": "Talla-ho amb un pla, com a Cavalieri"
      },
      {
        "figures": [
          {
            "peu": "Els dos cilindres i, al mig, el quadrat (vermell) on se superposen les seves franges.",
            "src": "assets/img/pistes/fig-077.png"
          }
        ],
        "textos": [
          "On es superposen les dues franges rectangulars, marcades en sanguina: quina forma dibuixen —un cercle, o alguna altra cosa?"
        ],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "A cada alçada y, la secció de la intersecció no és un cercle: és un quadrat de costat 2√(r²−y²), perquè les dues franges, perpendiculars entre si, es tallen en un quadrat. Ara cal un sòlid conegut per comparar-hi, i triar-lo bé és tot el problema: no serveix el cilindre. Les seccions horitzontals d'un cilindre vertical són cercles de radi r sempre igual, mentre que aquests quadrats es van encongint amb l'alçada, i llavors la raó entre les dues piles no seria constant i Cavalieri no diria res.",
          "El sòlid que sí que encaixa és l'esfera de radi r —justament la que queda inscrita dins de la intersecció, tangent als dos cilindres—, perquè la seva secció a l'alçada y és un cercle de radi √(r²−y²): el mateix √(r²−y²) que marca el costat del quadrat. Escrivint s = √(r²−y²), a cada alçada tenim un quadrat de costat 2s, d'àrea 4s², contra un cercle de radi s, d'àrea πs². La raó és 4/π, i —això és el que compta— no depèn de y.",
          "Per Cavalieri, doncs, els volums estan en aquesta mateixa raó: V = (4/π)·(4/3)πr³ = (16/3)r³."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "r=1: volum = (16/3)r³ ≈ 5,33. Comparant amb el volum d'un sol cilindre de radi 1 i alçada 2: 2π ≈ 6,28 —la intersecció és menor, com cal esperar.",
          "Per a tres cilindres mútuament perpendiculars, la intersecció ja no es pot tallar amb un sol argument de Cavalieri tan net com aquest: el seu volum queda, en aquest llibre, com a pregunta oberta per a qui vulgui anar-hi més enllà."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "La intersecció de dos cilindres perpendiculars del mateix radi r —el sòlid de Steinmetz— té, a cada alçada, una secció quadrada, no circular. Comparant-la amb l'esfera inscrita, les seccions estan sempre en raó 4/π, i per Cavalieri els volums també: V = (4/π)·(4/3)πr³ = (16/3)r³.",
    "titol": "Quan dos cilindres es tallen, la secció és un quadrat"
  },
  "q59": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una fracció (o un percentatge), no dues xifres soltes. I una resposta de sí/no a la segona part, justificada per la fracció trobada."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [
          {
            "peu": "El radi r, des del centre de l'esfera fins a una cara del cub: el costat del cub és 2r.",
            "src": "assets/img/pistes/fig-071.png"
          }
        ],
        "textos": [
          "L'esfera toca les sis cares del cub. Si el radi de l'esfera és r, quant fa el costat del cub?"
        ],
        "titol": "Quina mida té el cub, si l'esfera hi és inscrita"
      },
      {
        "figures": [],
        "textos": [
          "Amb el costat del cub igual a 2r, el volum del cub és (2r)³ = 8r³, i el de l'esfera (4/3)πr³. La fracció és (4/3)πr³ / 8r³ = π/6 ≈ 0,5236: hi sobreviu π i res més, com havia de ser, perquè la r s'ha d'anar. I és més de la meitat, perquè π/6 > 1/2 equival a π > 3.",
          "Convé no confondre aquesta fracció amb la de la Qüestió 61, que compara l'esfera amb el cilindre que la conté i dona 2/3 —un número diferent (0,667 contra 0,524), amb un sòlid continent diferent."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Amb r=1: cub de costat 2, volum 8. Esfera: (4/3)π ≈ 4,19. Fracció ≈ 0,524 —més de la meitat (π/6 > 1/2 perquè π > 3)."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Una esfera inscrita en un cub n'ocupa exactament π/6 del volum —aproximadament 0,524, més de la meitat, perquè π > 3.",
    "titol": "L'esfera dins del cub: més de la meitat"
  },
  "q60": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Si ja se saben les fórmules del volum del con i de l'esfera, es podria fer per càlcul directe —però l'objectiu aquí és veure-ho també per comparació directa de seccions, el mateix moviment ja fet servir abans per comparar volums d'un con i d'una piràmide sense fórmules."
        ],
        "titol": "No calculis els dos volums per separat encara"
      },
      {
        "figures": [],
        "textos": [
          "Dins del cilindre que envolta l'hemisferi (mateix radi, mateixa alçada), hi ha dos sòlids: l'hemisferi mateix, i —si s'hi retalla també un con invertit amb el vèrtex al centre de la base i la base dalt de tot— el sòlid que queda entre el cilindre i aquest con. Aquest sòlid \"que queda\" té una propietat notable en relació amb l'hemisferi."
        ],
        "titol": "Mira el sòlid que \"falta\""
      },
      {
        "figures": [
          {
            "peu": "El pla de tall (vermell) a alçada h, tallant el con en els dos punts marcats; R és el radi de l'hemisferi.",
            "src": "assets/img/pistes/fig-050.png"
          }
        ],
        "textos": [
          "Aquesta figura mostra el con inscrit de l'enunciat —vèrtex a dalt, base a baix, tocant l'hemisferi— no el con invertit complementari del pas anterior: són dos objectes relacionats però diferents. El pla horitzontal marcat en vermell, a una alçada h qualsevol, és l'eina de comparació: talla el con en dos punts (marcats), i és exactament aquest mateix pla —a la mateixa alçada— el que cal comparar amb la secció de l'hemisferi per completar l'argument."
        ],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "A qualsevol alçada h des de la base, la secció horitzontal del sòlid \"cilindre menys con invertit\" té exactament la mateixa àrea que la secció de l'hemisferi a la mateixa alçada —aquest és el pas de Cavalieri: dues seccions iguals a totes les alçades implica el mateix volum. Coneixent el volum del cilindre (πR³) i el del con invertit ((1/3)πR³) per separat, se'n dedueix el de l'hemisferi: πR³ − (1/3)πR³ = (2/3)πR³.",
          "I ara la comparació, amb un avís, perquè aquí hi ha una confusió fàcil: el con invertit auxiliar i el con inscrit de l'enunciat no tenen un el doble de volum que l'altre —tenen exactament el mateix. Tots dos tenen radi R i alçada R, o sigui (1/3)πR²·R = (1/3)πR³; l'un és l'altre girat de cap per avall. La meitat que la pregunta demana no és entre els dos cons: és entre el con inscrit i l'hemisferi, (1/3)πR³ contra (2/3)πR³."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Amb radi R=3: volum de l'hemisferi = (2/3)πR³ = 18π. Volum del con inscrit (radi 3, alçada 3) = (1/3)πR²h = 9π. La raó con/hemisferi és 9π/18π = 1/2 exactament —ni més ni menys que la meitat, per a qualsevol R."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Un con inscrit en un hemisferi n'ocupa exactament la meitat del volum: (1/3)πR³ contra (2/3)πR³. Que surti exactament 1/2, sense arrodoniments, no és casualitat: apareix cada vegada que dos sòlids tenen la mateixa àrea de secció a cada alçada, o àrees en una proporció fixa —el mateix argument de Cavalieri.",
    "titol": "El con dins de l'hemisferi: exactament la meitat"
  },
  "q61": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "\"El seu cilindre\" vol dir: el cilindre que envolta l'esfera exactament —mateix radi, alçada igual al diàmetre— tancat amb les seves dues tapes circulars, no obert."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "Superfície de l'esfera: 4πr². Superfície del cilindre tancat: la part lateral (2πr, el perímetre, per 2r, l'alçada) més les dues tapes circulars (πr² cadascuna)."
        ],
        "titol": "Calcula les dues superfícies per separat"
      },
      {
        "figures": [
          {
            "peu": "L'esfera de radi r, i el cilindre del mateix radi r i alçada 2r que l'envolta exactament.",
            "src": "assets/img/pistes/fig-078.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Sumant les tres peces del cilindre —lateral més dues tapes— en un sol terme: 2πr(2r) + 2(πr²) = 4πr² + 2πr² = 6πr². Comparant-lo directament amb 4πr² (l'esfera): la raó és 4πr²/6πr² = 2/3."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Amb r=1: esfera = 4π ≈ 12,57. Cilindre: lateral = 4π, tapes = 2π, total = 6π ≈ 18,85. Raó: 4π/6π = 2/3 exacte.",
          "Aquest 2/3 i la fracció π/6 de la Qüestió 59 són dues comparacions diferents, amb sòlids continents diferents (allà un cub, aquí un cilindre), i entre els dos números no hi ha cap relació aritmètica: només comparteixen la idea que l'esfera ocupa menys que el sòlid recte que la conté. El que sí que val la pena mirar és la raó de volums entre aquesta mateixa esfera i aquest mateix cilindre: l'esfera fa (4/3)πr³ i el cilindre πr²·2r = 2πr³, o sigui 2/3 una altra vegada. Que la mateixa fracció governi alhora les superfícies i els volums és el resultat que Arquimedes va demanar que li gravessin a la tomba."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "La superfície d'una esfera és exactament dos terços de la del cilindre tancat que la circumscriu ajustada —el resultat clàssic d'Arquimedes.",
    "titol": "L'esfera i el seu cilindre: dos terços"
  },
  "q62": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Dues fórmules, en termes del radi de l'esfera R i de l'alçada del casquet h —h és la distància des del \"cim\" del casquet fins al pla de tall, no és el mateix que R: quan h=R, el casquet és exactament la semiesfera ja mesurada abans."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [
          {
            "peu": "R (des del centre real de l'esfera) i h (des del cim del casquet fins al pla de tall): dues distàncies diferents.",
            "src": "assets/img/pistes/fig-072.png"
          }
        ],
        "textos": [
          "Quan h=R, el casquet és la semiesfera. El seu volum ja es va trobar comparant-la, per Cavalieri, amb un cilindre menys un con. Aquesta mateixa comparació, feta a qualsevol alçada de tall —no només a l'equador— és la clau per al cas general."
        ],
        "titol": "Comença pel cas que ja se sap"
      },
      {
        "figures": [],
        "textos": [
          "A cada alçada dins del casquet, la secció del casquet (un cercle) i la secció del cilindre-menys-con auxiliar tenen la mateixa àrea —el mateix argument ja fet servir per a la semiesfera, aplicat entre 0 i h en lloc d'entre 0 i R. Per Cavalieri, doncs, el casquet té el mateix volum que aquell tros de cilindre-menys-con: un cilindre de radi R i alçada h, menys el tronc de con que hi queda a dins.",
          "Val la pena fer la resta, que és curta i és on es veu d'on surt la fórmula. El tronc té alçada h i radis R−h a baix i R a dalt. La fórmula del tronc de la Qüestió 48 era per a base quadrada; amb base circular té la mateixa forma amb un π al davant, (πh/3)(a²+ab+b²). Amb a = R−h i b = R:",
          "(πh/3)[(R−h)² + (R−h)R + R²] = (πh/3)[3R² − 3Rh + h²]",
          "i restant-ho del cilindre, πR²h:",
          "V = πR²h − (πh/3)(3R² − 3Rh + h²) = πh[R² − R² + Rh − h²/3] = πh²(R − h/3) = (πh²/3)(3R − h)",
          "Els R² es cancel·len sols, que és el senyal que el càlcul va bé."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "R=2, h=1: V=(πh²/3)(3R−h)=(π/3)(6−1)=5π/3≈5,24. Quan h=R=2 es recupera el volum de la semiesfera, (2/3)πR³=16π/3≈16,76. Superfície corba (sense la base): 2πRh=4π≈12,57.",
          "Dos avisos d'honestedat. El primer: que \"sumar\" àrees de seccions infinitament primes doni exactament un volum és el pas que el càlcul integral formalitza, i és fora de l'abast d'aquest recull —el mateix tipus de frontera que ja apareix en trobar el perímetre d'una regió formada per un bastó en moviment. El segon, que convé no passar per alt: tot l'argument de Cavalieri dona el volum, i no diu res de la superfície. La fórmula 2πRh és certa i és un teorema d'Arquimedes —projectant el casquet horitzontalment sobre el cilindre que envolta l'esfera, l'àrea es conserva exactament, cosa gens evident—, però aquí es dona sense demostrar. El que sí que queda completament establert és l'argument de Cavalieri: dues figures amb la mateixa secció a cada alçada tenen el mateix volum."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "El volum d'un casquet esfèric d'alçada h en una esfera de radi R és (πh²/3)(3R−h), que surt de restar un tronc de con a un cilindre de radi R i alçada h. L'àrea de la superfície corba (sense la base plana) és 2πRh —un teorema d'Arquimedes que aquí es dona, no es demostra.",
    "titol": "El casquet esfèric: la semiesfera generalitzada"
  },
  "q63": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Cal donar dues descripcions del cilindre com \"una forma plana que s'ha mogut\" — i que siguin genuïnament diferents, no la mateixa idea dita amb altres paraules. El pas clau és distingir, en cada cas, quina forma plana es mou i quin moviment fa exactament."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "Si es pren un cercle —un disc pla, com la base del cilindre— i es desplaça en línia recta, sense girar-lo ni canviar-ne la mida, perpendicularment al seu propi pla, el rastre que deixa al seu pas és exactament un cilindre. Aquest moviment és una translació: cap punt del cilindre queda fora del recorregut, i cap eix ni gir hi intervé."
        ],
        "titol": "Primera manera: translació d'un cercle"
      },
      {
        "figures": [
          {
            "peu": "A l'esquerra, el cercle (en vermell) que es desplaça en línia recta; a la dreta, el rectangle amb un dels seus costats (en vermell) marcat com a eix de rotació.",
            "src": "assets/img/pistes/fig-197.png"
          }
        ],
        "textos": [
          "La segona manera és ben diferent: es pren un rectangle i es gira, no un desplaçament recte sinó una rotació, al voltant d'un dels seus propis costats com si aquest costat fos un eix fix. Cada punt del rectangle descriu una circumferència en girar (llevat dels que són sobre l'eix mateix, que es queden quiets), i el conjunt de totes aquestes circumferències —el que el rectangle escombra en completar la volta— és, també, exactament un cilindre. Val la pena notar que aquí s'omple el cilindre sencer: si el que es gira és només el costat oposat a l'eix, un segment, el que se'n traça és només la superfície lateral, buida per dins."
        ],
        "titol": "Segona manera: rotació d'un rectangle"
      },
      {
        "figures": [
          {
            "peu": "Esquerra: el cercle repetit al llarg del seu recorregut en traçar el cilindre per translació. Dreta: el rectangle i l'arc que un dels seus punts descriu en girar al voltant de l'eix.",
            "src": "assets/img/pistes/fig-073.png"
          }
        ],
        "textos": [
          "La primera manera —translació d'un cercle— no fa servir cap eix ni cap gir: és un moviment recte, de principi a fi. La segona —rotació d'un rectangle al voltant d'un dels seus costats— sí que en fa servir un: tot el moviment gira entorn d'aquell costat fix. Són, doncs, dues descripcions autènticament diferents, no una reformulació l'una de l'altra, i totes dues generen exactament el mateix cilindre final."
        ],
        "titol": "Que totes dues arriben al mateix sòlid"
      },
      {
        "figures": [],
        "textos": [
          "Aquí la comprovació no és numèrica: cal descriure, per a cadascuna de les dues maneres, quina és la forma plana que es mou i quin és exactament el moviment. Translació: un cercle, desplaçat en línia recta perpendicular al seu pla. Rotació: un rectangle, girat al voltant d'un dels seus costats com a eix. La segona manera —rotació d'una forma plana al voltant d'un eix— és la mateixa idea que fa funcionar el teorema de Pappus, que apareix més endavant com a eina general per calcular volums de sòlids de revolució."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Un cilindre és, alhora, el rastre d'un cercle desplaçat en línia recta (translació, sense eix ni gir) i la superfície escombrada per un rectangle en girar al voltant d'un dels seus costats (rotació, amb eix fix). Són dues descripcions genuïnament diferents del mateix sòlid.",
    "titol": "Dues maneres d'engendrar un cilindre"
  },
  "q64": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "L'enunciat no demana el perímetre d'una sola posició del bastó (un simple triangle rectangle): demana el perímetre de la regió que totes les posicions possibles, des de vertical fins a horitzontal, arriben a cobrir en algun moment."
        ],
        "titol": "No una posició, totes alhora"
      },
      {
        "figures": [
          {
            "peu": "Múltiples posicions del bastó (sanguina), des de gairebé vertical fins a gairebé horitzontal, tangents totes a la mateixa corba.",
            "src": "assets/img/pistes/fig-079.png"
          }
        ],
        "textos": [
          "Marcant el bastó en unes 8 o 10 posicions diferents —els dos extrems sempre sobre la paret i el terra— i mirant la vora de la regió que totes elles, juntes, deixen coberta, apareix un patró clar: cap posició individual del bastó arriba a tocar aquesta vora completa, però totes juntes en marquen el contorn per fora."
        ],
        "titol": "Dibuixar-ne unes quantes, no totes"
      },
      {
        "figures": [],
        "textos": [
          "La vora de la regió té tres parts diferents: el tram de paret des de la cantonada fins on arriba el bastó vertical (llargada L, l'alçada del bastó), el tram de terra simètric (també L), i una corba —ni una línia recta ni un arc de cercle— que és tangent a totes les posicions del bastó dibuixades. Aquesta corba es diu astroide: no és cap posició concreta del bastó, és l'envolupant de totes elles juntes."
        ],
        "titol": "Tres trossos, no un de sol"
      },
      {
        "figures": [],
        "textos": [
          "Reconèixer i construir l'astroide —saber que hi és, i per què— és el que es pot arribar a fer amb les eines d'aquest quadern. La seva llargada exacta (1,5×L per a un quart d'astroide) es demostra amb càlcul infinitesimal, fora de l'abast d'aquí; no es dedueix aquí, es dona com a dada per completar el perímetre."
        ],
        "titol": "On s'atura aquesta demostració"
      },
      {
        "figures": [],
        "textos": [
          "Amb L=2: perímetre = L+L+1,5L = 3,5L = 7. Mesurant sobre el propi dibuix la llargada aproximada de la corba i sumant-hi els dos trams rectes, el resultat s'hi acosta."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "El perímetre és L+L+1,5L=3,5L, on els dos primers termes són els trams de paret i terra (fàcils de mesurar) i el tercer és la llargada de l'astroide —la corba envolupant de totes les posicions del bastó—, un resultat que aquí es dona fet, ja que demostrar-lo exigeix càlcul infinitesimal. El que sí que s'aconsegueix amb les eines d'aquest quadern és reconèixer que aquesta vora no és cap línia recta ni arc de cercle, sinó una corba nova.",
    "titol": "L'envolupant d'un bastó lliscant: l'astroide"
  },
  "q65": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "No un número: una definició. El teorema de Pappus diu que el volum generat en girar una figura plana al voltant d'un eix (que no la talla) és (àrea de la figura) × (distància recorreguda pel seu centroide). L'encàrrec és decidir què ha de ser \"el centroide\" perquè aquesta frase, tal com està escrita, surti certa."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "Un rectangle, girat al voltant d'un dels seus costats, genera un cilindre —el volum del qual ja se sap calcular per una altra via. Quin punt del rectangle, multiplicat per 2π i per la seva distància a l'eix, reprodueix exactament aquest volum?"
        ],
        "titol": "Comença pel cas més fàcil de comprovar"
      },
      {
        "figures": [
          {
            "peu": "El rectangle amb l'eix al costat esquerre, i el centroide marcat al centre exacte —a mitja amplada de l'eix.",
            "src": "assets/img/pistes/fig-080.png"
          }
        ],
        "textos": [
          "El punt marcat \"centroide\": quina distància a l'eix, multiplicada per 2π, hauria de reproduir el volum del cilindre ja conegut?"
        ],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Per al rectangle, el punt que fa funcionar el teorema resulta ser el seu centre —el centre de gravetat de tota la vida, on es creuen les dues diagonals—, que és a mitja amplada de l'eix. Compte amb la temptació d'agafar el costat oposat a l'eix: aquell és el punt més lluny de l'eix, no el punt mitjà, i donaria el doble del volum real.",
          "Queda la definició general, i aquí cal resistir una sortida fàcil: definir el centroide com «el punt que fa que Pappus funcioni» no serveix, per dues raons. La primera és que no defineix cap punt —només fixa a quina distància ha de ser d'un eix concret, i això és tota una recta de candidats, no un punt. La segona és que buida la pregunta: si es defineix així, Pappus és cert per decret, i l'enunciat demanava justament si es pot definir de manera que surti cert.",
          "La definició que sí que serveix no esmenta eixos ni volums: es talla la figura en molts trossos petits, tots de la mateixa àrea, i es pren la posició mitjana de tots ells. Aquest és el centroide —el punt on la figura, retallada en cartolina, es quedaria en equilibri damunt d'un dit.",
          "Amb aquesta definició, Pappus deixa de ser una convenció i passa a ser una afirmació que es pot justificar. En girar, cada trosset d'àrea situat a distància r de l'eix recorre una circumferència de llargada 2πr i escombra un volum igual a (trosset)×2πr. Sumant-ho tot, el volum val 2π × (àrea total) × (la mitjana de les distàncies r). I aquesta mitjana de distàncies és exactament la distància del centroide a l'eix, perquè el centroide és la posició mitjana i, mentre la figura queda tota a una banda de l'eix, la distància a l'eix creix de manera uniforme a mesura que ens n'allunyem.",
          "Això últim explica, de passada, per què l'enunciat de Pappus exigeix que l'eix no talli la figura: si la tallés, hi hauria trossos a banda i banda, les distàncies deixarien de comptar totes en el mateix sentit, i la mitjana ja no coincidiria amb la distància del centroide."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Rectangle de costats 2 i 3, girat al voltant del costat de llargada 3. El costat perpendicular a l'eix fa 2, així que el centre del rectangle és a distància 1 de l'eix. Pappus dona àrea(6) × 2π × distància(1) = 12π; el cilindre que en surt de veritat té radi 2 i alçada 3, és a dir π(2²)(3) = 12π. Coincideixen exactament. Si hagués sortit 24π, seria per haver posat la distància al costat de més enllà (2) en lloc de la distància al centre (1) —l'error exacte que calia evitar.",
          "Aquesta definició —el punt que fa que Pappus funcioni— és el que fa possible aplicar el teorema a qualsevol figura, no només al rectangle: un cop decidida, es converteix en una eina reutilitzable."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "El centroide d'una figura es defineix sense esmentar cap eix: és la posició mitjana dels seus punts —el punt d'equilibri— i s'obté tallant-la en trossos petits de la mateixa àrea i fent-ne la mitjana. Amb aquesta definició, Pappus surt cert, perquè la distància del centroide a l'eix és la mitjana de les distàncies dels trossos, i cada trosset escombra un volum proporcional a la seva. Per al rectangle, aquest punt és el centre geomètric, no cap dels seus costats.",
    "titol": "Definir el centroide perquè Pappus digui la veritat"
  },
  "q66": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una comprovació, no una definició nova: que la fórmula de Pappus (àrea × 2π × distància del centroide) i la fórmula habitual del volum d'un cilindre donen exactament el mateix nombre."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "Un cas important: aquest rectangle no toca l'eix. Rectangle d'amplada w (perpendicular a l'eix) i alçada H (paral·lela a l'eix), amb el costat més proper a l'eix a distància d. El seu centroide —pel concepte ja definit d'un centroide— és al seu propi centre geomètric."
        ],
        "titol": "Situa el rectangle respecte de l'eix"
      },
      {
        "figures": [
          {
            "peu": "El rectangle d'amplada w i alçada H, a distància d de l'eix (línia discontínua); el punt vermell és el seu centroide.",
            "src": "assets/img/pistes/fig-082.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Com que el rectangle no toca l'eix, girar-lo no produeix un cilindre senzill: produeix un cilindre amb un forat cilíndric al mig —un tub. El seu volum, per resta de dos cilindres, és π(d+w)²H − πd²H, amb radis d+w (la vora exterior) i d (la vora interior), mateixa alçada H. Desenvolupant:",
          "πH[(d+w)² − d²] = πH[d² + 2dw + w² − d²] = πHw(2d + w)",
          "I ara amb Pappus: àrea del rectangle (w×H), per 2π, per la distància del centroide a l'eix (d + w/2):",
          "wH · 2π · (d + w/2) = 2πwH·d + πwH·w = πHw(2d + w)",
          "Les dues expressions són idèntiques, i no només per als números de la comprovació: per a qualsevol w, H i d. Que el w/2 del centroide es converteixi en el w²/2 · 2π = πw² que fa falta és exactament el que fa que la cosa funcioni —si s'hagués pres el costat exterior (distància d+w) en lloc del centre, sortiria πHw(2d+2w), que és massa."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "w=1, H=3, d=2 (centre a distància 2,5 de l'eix): Pappus = 1×3 × 2π × 2,5 = 15π. Per resta de cilindres: π(3²)(3) − π(2²)(3) = 27π − 12π = 15π. Coincideixen."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Les dues vies donen πHw(2d+w): Pappus coincideix amb la resta directa de dos cilindres per a qualsevol w, H i d —incloent-hi el cas d=0, on el \"forat\" desapareix i el sòlid es converteix en un cilindre senzill, el cas ja conegut.",
    "titol": "Pappus i el cilindre: dues maneres, el mateix nombre"
  },
  "q68": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "No el volum del con —ja el coneixem: (1/3)πr²h. Cal trobar la distància del centroide del triangle a l'eix de gir, que és el catet vertical del triangle rectangle."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "El triangle rectangle té catets r (horitzontal, perpendicular a l'eix) i h (vertical, sobre l'eix). La seva àrea és (1/2)rh. Pappus diu: volum = àrea × 2π × distància del centroide a l'eix. Ja es coneix el volum (el con). Què queda per aïllar?"
        ],
        "titol": "Planteja l'equació amb Pappus, amb la distància com a incògnita"
      },
      {
        "figures": [
          {
            "peu": "El triangle rectangle amb catet vertical h sobre l'eix i catet horitzontal r; el centroide, marcat, és la incògnita a trobar.",
            "src": "assets/img/pistes/fig-083.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Igualant (1/2)rh × 2π × d amb (1/3)πr²h, i aïllant d: πrhd = (1/3)πr²h, així que d = r/3. El resultat diu a quina fracció de r (el catet horitzontal) ha d'estar el centroide, independentment de h."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "r=3, h=4: volum del con = (1/3)π(9)(4) = 12π. Àrea del triangle = (1/2)(3)(4) = 6. Pappus: 12π = 6×2π×d → d = 1. Fracció: d/r = 1/3.",
          "Aquest 1/3 no és una coincidència del triangle rectangle: és el mateix fet, general per a qualsevol triangle, que el centroide —la mitjana dels tres vèrtexs— es troba a un terç de cada mediana comptant des del costat corresponent."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "El centroide d'un triangle rectangle és sempre a un terç de la distància horitzontal des de l'eix (el catet vertical), sigui quina sigui l'alçada h.",
    "titol": "El centroide, trobat a l'inrevés amb Pappus"
  },
  "q69": {
    "passos": [
      {
        "figures": [
          {
            "peu": "La regió semicircular (negre) i el seu arc perimetral (sanguina, sense el diàmetre): dues figures diferents, cadascuna amb el seu propi centroide.",
            "src": "assets/img/pistes/fig-085.png"
          }
        ],
        "textos": [
          "\"El centroide d'un semicercle\" pot voler dir dues coses diferents: el centre de massa de la regió (com si fos una peça massissa) o el centre de massa del seu arc (com si fos només el fil corbat de la vora, sense el diàmetre). Res no garanteix que coincideixin."
        ],
        "titol": "Dues preguntes, no una"
      },
      {
        "figures": [],
        "textos": [
          "Quan una figura plana gira al voltant d'un eix que no la travessa, el volum del sòlid que engendra és àrea × 2π × distància del centroide a l'eix. Si es coneix el volum del sòlid (perquè és una forma coneguda) i l'àrea de la figura, es pot fer servir aquesta mateixa fórmula a l'inrevés per aïllar la distància del centroide —sense haver-la calculat directament."
        ],
        "titol": "El teorema de Pappus"
      },
      {
        "figures": [],
        "textos": [
          "Girant la regió semicircular al voltant del seu diàmetre, el sòlid que en surt és una esfera completa de radi r —el semicercle escombra tot l'espai al voltant de l'eix. El seu volum, (4/3)πr³, ja és conegut."
        ],
        "titol": "Girar la regió: una esfera sencera"
      },
      {
        "figures": [],
        "textos": [
          "Girant només l'arc (sense la regió que hi ha a dins), no es genera cap volum: es genera la superfície d'aquesta mateixa esfera, 4πr² —una closca buida, no una bola massissa."
        ],
        "titol": "Girar l'arc: la superfície de la mateixa esfera"
      },
      {
        "figures": [],
        "textos": [
          "Per a la regió: (4/3)πr³ = (πr²/2)·2π·d, d'on d = 4r/(3π). Per a l'arc: 4πr² = (πr)·2π·d, d'on d = 2r/π. Les dues distàncies surten diferents —la regió té el centroide més a prop del centre del cercle que l'arc."
        ],
        "titol": "Aïllar les dues distàncies"
      },
      {
        "figures": [],
        "textos": [
          "Amb r=3: centroide de l'àrea a 4×3/(3π)≈1,27 del centre. Centroide de l'arc a 2×3/π≈1,91. Diferents entre si, confirmant que calen totes dues fórmules per separat.",
          "Un detall d'enunciat que val la pena tenir present: aquí s'ha entès «el perímetre» com l'arc sol, sense el diàmetre. Si s'hi compta també el diàmetre, la longitud passa a ser πr+2r i el centroide s'acosta al centre: surt 2r/(π+2)≈0,389r. Pappus funciona igual en tots dos casos —el diàmetre és sobre l'eix i, en girar, no escombra res—, de manera que les dues respostes són correctes, cadascuna per a la seva lectura de la pregunta."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "El centroide de la regió semicircular és a 4r/(3π)≈0,424r del centre; el del seu arc perimetral és a 2r/π≈0,637r —més lluny. Les dues distàncies surten d'aplicar el teorema de Pappus a l'inrevés: es coneix el volum (o la superfície) de l'esfera que engendra el gir, i s'aïlla la distància del centroide que fa que la fórmula quadri.",
    "titol": "Els dos centroides d'un semicercle"
  },
  "q70": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "L'únic polígon del qual ja se'n sap la suma d'angles amb tota certesa és el triangle: 180°. Tota la demostració consisteix a convertir un polígon de n costats en un cert nombre de triangles, sense deixar-ne cap forat ni superposar-ne cap."
        ],
        "titol": "Convertir el desconegut en l'únic que ja se sap"
      },
      {
        "figures": [
          {
            "peu": "El quadrilàter (2 triangles) i el pentàgon (3 triangles), triangulats des d'un vèrtex.",
            "src": "assets/img/pistes/fig-199.png"
          }
        ],
        "textos": [
          "Un quadrilàter (n=4): una diagonal el parteix en 2 triangles, suma 2×180°=360°. Un pentàgon (n=5): triant totes les diagonals des d'un sol vèrtex, en surten 3 triangles, suma 3×180°=540°."
        ],
        "titol": "Casos petits, abans de generalitzar"
      },
      {
        "figures": [
          {
            "peu": "Un pentàgon irregular, triangulat des d'un vèrtex: el mateix recompte de triangles val encara que no hi hagi cap simetria.",
            "src": "assets/img/pistes/fig-036.png"
          }
        ],
        "textos": [
          "El polígon amb què es generalitza el patró no és regular, expressament: l'argument no es pot recolzar en cap simetria, ha de valer per a qualsevol polígon convex —un polígon sense cap racó \"entrant\", on totes les diagonals des d'un vèrtex es queden dins la figura."
        ],
        "titol": "Sense cap simetria de suport"
      },
      {
        "figures": [],
        "textos": [
          "Des d'un vèrtex d'un polígon de n costats hi caben n−3 diagonals (sense comptar els dos costats que ja hi surten). El recompte de triangles convé fer-lo a poc a poc, perquè és on es despista tothom: cada diagonal nova parteix en dos un dels trossos que ja hi havia, o sigui que n'afegeix exactament un. Sense cap diagonal hi ha una sola peça; amb una, 2; amb dues, 3. Amb n−3 diagonals, doncs, n−2 triangles. Multiplicant per 180°: suma = (n−2)×180°."
        ],
        "titol": "Comptar triangles en funció de n"
      },
      {
        "figures": [],
        "textos": [
          "La fórmula (n−2)×180° és certa per a qualsevol polígon, convex o no —es pot comprovar mesurant. Però aquesta demostració concreta, la del ventall de diagonals des d'un sol vèrtex, només funciona per a polígons convexos: en un polígon amb un racó entrant, algunes de les diagonals que caldria traçar des del vèrtex de la punta interior se'n van fora de la figura, i el ventall ja no la parteix netament en triangles. Per a aquest cas cal un argument diferent (sempre hi ha alguna diagonal interior que el parteix en dos polígons més petits, repetint el procés). Que un argument no arribi a tot arreu no el fa dolent —el que seria dolent és no saber fins on arriba."
        ],
        "titol": "On s'atura aquesta demostració concreta"
      },
      {
        "figures": [],
        "textos": [
          "Hexàgon (n=6): 4 triangles, 720°. Polígon de 10 costats: 8 triangles, 1.440°. Fórmula general: (n−2)×180°."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "La suma dels angles interns d'un polígon de n costats és (n−2)×180°, de triangular-lo des d'un sol vèrtex en n−2 triangles. Aquesta demostració concreta val per a polígons convexos; per a polígons amb racons entrants la fórmula continua sent certa, però cal un argument diferent (partir per alguna diagonal interior i repetir), perquè el ventall des d'un sol vèrtex ja no serveix.",
    "titol": "La suma dels angles d'un polígon"
  },
  "q71": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Aquí no se sap, d'entrada, que els costats oposats siguin paral·lels ni iguals —només que els quatre angles interiors fan 90° cadascun. Cal esbrinar quina condició sobre els costats es dedueix, necessàriament, d'aquesta única dada sobre els angles."
        ],
        "titol": "Només una dada de partida"
      },
      {
        "figures": [
          {
            "peu": "Els quatre angles rectes, marcats des del principi com a dada de partida, no com a resultat a demostrar.",
            "src": "assets/img/pistes/fig-053.png"
          }
        ],
        "textos": [
          "Traçant una diagonal, el quadrilàter queda dividit en dos triangles. Però convé mirar bé què aporta la diagonal, perquè aporta menys del que sembla: la diagonal parteix per la meitat dos dels quatre angles rectes i només en deixa sencers els altres dos, un a cada triangle. Cada triangle hereta, doncs, un sol angle conegut, i amb això la suma de 180° no acaba de tancar res.",
          "El camí que sí que funciona no necessita cap diagonal: en lloc dels triangles, cal mirar les direccions dels quatre costats."
        ],
        "titol": "Partir-lo amb una diagonal, com a q11"
      },
      {
        "figures": [],
        "textos": [
          "Amb els quatre angles fixats a 90°, els dos costats que arriben a cada vèrtex hi arriben perpendiculars. Dues rectes que són totes dues perpendiculars a una tercera recta són, per força, paral·leles entre elles —aplicant-ho als costats oposats del quadrilàter (que comparteixen la perpendicularitat amb un mateix costat comú), costat oposat és paral·lel a costat oposat."
        ],
        "titol": "Dels angles rectes al paral·lelisme"
      },
      {
        "figures": [],
        "textos": [
          "Amb els dos parells de costats oposats ja demostrats paral·lels, la figura és, per definició, un paral·lelogram. Ara bé, que en un paral·lelogram els costats oposats siguin iguals no és exactament el que demostrava la Qüestió 11 —allà s'hi provaven iguals els angles oposats—, encara que surt de la mateixa jugada d'una línia: es traça una diagonal, els angles alterns interns donen dos triangles congruents (un costat comú comprès entre angles iguals), i d'aquesta congruència en surten alhora els angles oposats iguals i els costats oposats iguals. La condició final sobre les longituds és, doncs, costats oposats iguals dos a dos —el mateix que ja se sabia d'un rectangle, però ara deduït únicament a partir dels angles, sense donar el paral·lelisme per fet des del principi."
        ],
        "titol": "Un cop hi ha paral·lelisme, tanca-ho com a q11"
      },
      {
        "figures": [],
        "textos": [
          "Construint un quadrilàter amb els quatre angles a 90° i triant lliurement dos costats consecutius (per exemple 5 i 8), els altres dos costats no es poden triar lliurement: han de sortir també 5 i 8. Provant de forçar-ne un de diferent (5, 8, 5, 9) és impossible tancar la figura amb els quatre angles rectes."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Si els quatre angles d'un quadrilàter són tots de 90°, els costats oposats han de ser iguals dos a dos: és un rectangle. Els angles rectes forcen el paral·lelisme (dues rectes perpendiculars a una tercera són paral·leles), i un cop hi ha paral·lelisme, la igualtat de costats oposats surt de la congruència dels dos triangles que crea una diagonal —la mateixa jugada de la Qüestió 11, que allà es feia servir per als angles. És el recíproc exacte de q11 (que partia del paral·lelisme) i de q12 (que partia de les diagonals iguals).",
    "titol": "El recíproc: quatre angles rectes impliquen rectangle"
  },
  "q72": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "No es demana comprovar un polígon en particular: es demana la llista de problemes que caldria resoldre, en general, per saber si una successió del tipus \"avança tant, gira tant\" torna mai exactament al punt de partida."
        ],
        "titol": "Una llista de problemes, no un polígon concret"
      },
      {
        "figures": [
          {
            "peu": "Un tram inclinat, descompost en el seu avanç horitzontal i el seu avanç vertical.",
            "src": "assets/img/pistes/fig-094.png"
          }
        ],
        "textos": [
          "Cada tram de la llista —una longitud, en una direcció determinada pels girs acumulats fins aquell moment— es pot descompondre en un avanç horitzontal i un de vertical: exactament el cosinus i el sinus de l'angle acumulat, multiplicats per la longitud del tram. És, literalment, un triangle rectangle amb la longitud del tram com a hipotenusa."
        ],
        "titol": "Descompondre cada tram en dues direccions"
      },
      {
        "figures": [],
        "textos": [
          "El polígon es tanca si, i només si, dues sumes independents donen zero alhora: la suma de tots els avanços horitzontals de tots els trams, i la suma de tots els avanços verticals. Que una de les dues doni zero no és suficient —cal que totes dues ho facin a la vegada."
        ],
        "titol": "Dues sumes, no una"
      },
      {
        "figures": [],
        "textos": [
          "La llista de problemes que calia produir és, doncs: per a cada tram, un problema de triangle rectangle (longitud coneguda, angle conegut, trobar els dos catets), i després sumar tots els catets horitzontals per una banda i tots els verticals per l'altra, comprovant que totes dues sumes donen zero."
        ],
        "titol": "Cada tram, un problema de triangle rectangle"
      },
      {
        "figures": [],
        "textos": [
          "Tres trams: 3 unitats a 0°, 4 unitats a 90°, 5 unitats en la direcció que tanca el triangle (el 3-4-5 clàssic, amb el tercer tram a uns 233° respecte de l'eix horitzontal). Sumant els tres avanços horitzontals i els tres verticals per separat, totes dues sumes donen exactament zero."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Un polígon fet de trams \"avança, gira\" es tanca exactament quan dues sumes independents —la de tots els avanços horitzontals i la de tots els avanços verticals— donen zero alhora. Cada tram individual és un problema de triangle rectangle (longitud i angle coneguts, catets per trobar), i aquesta mateixa descomposició en dues sumes és el nucli de com es construeixen coordenades i vectors a partir de la trigonometria.",
    "titol": "Quan es tanca un polígon fet de passos i girs"
  },
  "q73": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "El triangle i el quadrilàter són casos genuïnament diferents: no hi ha cap raó per suposar que tinguin la mateixa resposta. Cal tractar-los per separat, sense donar per fet que el que valgui per a un valgui també per a l'altre."
        ],
        "titol": "Dues preguntes, no una"
      },
      {
        "figures": [
          {
            "peu": "El triangle original ABC (negre) i el triangle medial que formen els seus punts mitjans (sanguina).",
            "src": "assets/img/pistes/fig-201.png"
          }
        ],
        "textos": [
          "Els tres punts mitjans d'un triangle formen el triangle medial: semblant a l'original, a escala 1/2 i girat 180°. Si es coneix el triangle medial, ja se'n coneix l'orientació i la mida —només falta \"desfer\" l'escala i el gir per recuperar l'original."
        ],
        "titol": "El triangle: el triangle medial ja diu prou"
      },
      {
        "figures": [
          {
            "peu": "Aquí la incògnita (el triangle gran, a recuperar) va en sanguina discontínua, i la dada coneguda (el triangle medial, petit) va en tinta —al revés del conveni habitual d'aquest recorregut.",
            "src": "assets/img/pistes/fig-041.png"
          }
        ],
        "textos": [
          "Cada vèrtex del triangle original és el simètric d'un vèrtex del triangle medial respecte del punt mitjà del costat oposat del medial —o, dit d'una altra manera, cada costat del triangle original passa pel punt mitjà corresponent i és paral·lel al costat oposat del medial, a doble llargada. Aquesta construcció no deixa cap marge d'elecció: donat el triangle medial, hi ha un únic triangle original que hi encaixa."
        ],
        "titol": "Desfer-ho: només hi ha una manera"
      },
      {
        "figures": [],
        "textos": [
          "Amb un quadrilàter, la situació canvia. Els quatre punts mitjans dels seus costats formen sempre un paral·lelogram —ja demostrat a la Qüestió 16—, i això és tot el que se'n pot assegurar amb certesa. El que no es pot recuperar és la posició exacta dels quatre vèrtexs originals.",
          "I es pot dir exactament quant de marge queda, que és més satisfactori que deixar-ho en un «no es pot». Siguin P, Q, R, S els quatre punts mitjans donats, en ordre. Es tria el primer vèrtex A on es vulgui, a qualsevol punt del pla. Aleshores els altres tres queden forçats un darrere l'altre: B és el simètric d'A respecte de P, C el simètric de B respecte de Q, i D el simètric de C respecte de R. I aquí ve el punt bonic: en tancar el recorregut, el punt mitjà de DA cau automàticament a S —sempre, sense haver-ho d'imposar— precisament quan PQRS és un paral·lelogram.",
          "Dit d'una altra manera: no és que hi hagi «uns quants» quadrilàters amb aquests punts mitjans. N'hi ha una família de dos paràmetres, tants com punts té el pla, un per cada elecció d'A. La condició de paral·lelogram no en tria cap: l'únic que fa és garantir que la construcció es tanqui."
        ],
        "titol": "El quadrilàter: es coneix la forma, no la posició"
      },
      {
        "figures": [],
        "textos": [
          "Amb un triangle medial de costats 3, 4, 5: el triangle original ha de tenir costats 6, 8, 10 —el doble de cadascun, en el mateix ordre, sense cap altra possibilitat."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Sí per al triangle: els punts mitjans dels seus costats en determinen un únic original, perquè el triangle medial (semblant, escala 1/2, girat 180°) es pot \"desfer\" d'una sola manera. No per al quadrilàter general: els quatre punts mitjans sempre formen un paral·lelogram (Qüestió 16), i aquesta condició no en tria cap de concret. El primer vèrtex es pot posar a qualsevol punt del pla i els altres tres queden determinats reflectint-lo successivament pels punts mitjans, de manera que hi ha tota una família de dos paràmetres de quadrilàters amb els mateixos quatre punts mitjans.",
    "titol": "Reconstruir un polígon a partir dels punts mitjans"
  },
  "q74": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "La resposta no és només que no totes les ternes de longituds formen un triangle: cal trobar la condició exacta que separa els casos que sí en formen dels que no."
        ],
        "titol": "Una condició exacta, no només \"no sempre\""
      },
      {
        "figures": [
          {
            "peu": "3, 4, 5: els arcs es toquen, es forma un triangle. 1, 2, 10: els arcs no arriben a tocar-se.",
            "src": "assets/img/pistes/fig-084.png"
          }
        ],
        "textos": [
          "Provant amb 1, 2, 10: traçant primer el segment de longitud 10, i després un arc de radi 1 des d'un extrem i un arc de radi 2 des de l'altre, els dos arcs són massa curts —cap dels dos arriba prou lluny per tocar l'altre. No hi ha cap punt que estigui alhora a distància 1 d'un extrem i a distància 2 de l'altre, si els extrems ja són a 10 de distància entre si."
        ],
        "titol": "Un cas que falla, dibuixat amb compàs"
      },
      {
        "figures": [],
        "textos": [
          "Els dos arcs es toquen exactament quan la suma dels dos radis és més gran que la distància entre els seus centres —si la suma fos menor, els arcs quedarien massa curts (com a 1,2,10); si fos igual, es tocarien en un sol punt exactament sobre el segment, sense arribar a obrir cap triangle real."
        ],
        "titol": "Quan es toquen els dos arcs"
      },
      {
        "figures": [],
        "textos": [
          "Amb els tres costats a, b, c (c el més llarg), la condició és a+b > c: la suma dels dos costats més curts ha de superar el més llarg.",
          "Val la pena veure per què n'hi ha prou amb una desigualtat i no cal comprovar-ne tres. En rigor calen les tres —a+b>c, a+c>b i b+c>a—, però si s'ordenen els costats de manera que c sigui el més llarg, les altres dues es compleixen soles: a+c > c ≥ b i b+c > c ≥ a. Per això el criteri pràctic és mirar només el costat més llarg contra la suma dels altres dos."
        ],
        "titol": "Traduint-ho a a, b, c"
      },
      {
        "figures": [],
        "textos": [
          "3,4,5: 3+4=7>5 ✓, es forma triangle. 2,3,6: 2+3=5 < 6, no se'n forma cap. 1,2,10: 1+2=3 < 10, tampoc."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "No, no qualsevol tria de tres longituds forma un triangle: cal que la suma dels dos costats més curts superi el més llarg (a+b>c). Quan aquesta suma és exactament igual al costat més llarg, el \"triangle\" es degenera en un segment amb els tres punts alineats, d'àrea zero.",
    "titol": "La desigualtat triangular"
  },
  "q75": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Trobar dos triangles no congruents (costats diferents) amb exactament la mateixa àrea i el mateix perímetre ja demostraria alguna cosa important per si sol: que \"àrea i perímetre iguals\" no determina un triangle únic, a diferència del criteri costat-costat-costat."
        ],
        "titol": "El que cal produir: un contraexemple"
      },
      {
        "figures": [],
        "textos": [
          "Amb semiperímetre s fix, la fórmula de Heron diu que l'àrea només depèn del producte (s−a)(s−b)(s−c). Anomenant x=s−a, y=s−b, z=s−c, el problema es converteix en: trobar dues ternes diferents de nombres positius (x,y,z) amb la mateixa suma (que ha de valer s) i el mateix producte."
        ],
        "titol": "Convertir-ho en un problema de nombres"
      },
      {
        "figures": [
          {
            "peu": "Els dos triangles resultants: (17,25,28) i (20,21,29), amb el mateix perímetre (70) i la mateixa àrea (210).",
            "src": "assets/img/pistes/fig-089.png"
          }
        ],
        "textos": [
          "Amb s=35: la terna (18,10,7) suma 35 i multiplica 1.260; dona els costats (a,b,c)=(s−18,s−10,s−7)=(17,25,28). Buscant una altra terna amb la mateixa suma i el mateix producte: (15,14,6) també suma 35 i també multiplica 1.260; dona els costats (20,21,29)."
        ],
        "titol": "Dues ternes que funcionen"
      },
      {
        "figures": [],
        "textos": [
          "Triangle (17,25,28): àrea = √(35×18×10×7) = √44.100 = 210. Triangle (20,21,29): àrea = √(35×15×14×6) = √44.100 = 210 també. Dos triangles genuïnament diferents —cap costat en comú—, amb exactament la mateixa àrea i el mateix perímetre.",
          "Val la pena adonar-se de fins on arriba això. Les condicions sobre x, y, z són només dues —x+y+z = 35 i xyz = 1.260— i les incògnites són tres: queda un grau de llibertat sencer. No hi ha, doncs, dos triangles amb perímetre 70 i àrea 210: n'hi ha infinits, tota una família contínua. Els dos del quadern són simplement els dos que tenen els costats sencers. Un exemple qualsevol de la família: 28,488… / 23,823… / 17,689…, que també fa 70 de perímetre i 210 d'àrea.",
          "Això reforça la conclusió en lloc de debilitar-la: fixar l'àrea i el perímetre no deixa el triangle gairebé determinat amb un parell d'alternatives —el deixa lliure en una dimensió sencera."
        ],
        "titol": "Comprovar-ho amb Heron"
      },
      {
        "figures": [],
        "textos": [
          "(17,25,28): perímetre 70, àrea √(35·18·10·7)=√44.100=210. (20,21,29): perímetre 70 també, àrea √(35·15·14·6)=√44.100=210 també."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Sí: (17,25,28) i (20,21,29) són dos triangles no congruents amb el mateix perímetre (70) i la mateixa àrea (210). Surten de buscar dues ternes diferents (x,y,z) amb la mateixa suma i el mateix producte, ja que la fórmula de Heron converteix el problema geomètric en un de purament numèric. A diferència del criteri SSS, dues dades (àrea i perímetre) no basten per fixar un triangle de manera única —i de fet no en falten dos, en falten infinits: amb dues condicions sobre tres incògnites queda un grau de llibertat sencer.",
    "titol": "Dos triangles diferents, la mateixa àrea i el mateix perímetre"
  },
  "q76": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "La peça de la construcció que fa tota la feina no és la circumferència en si: és el seu centre, i el fet que aquest punt és exactament a la mateixa distància —el radi r— de cadascun dels tres costats del triangle."
        ],
        "titol": "El centre, no el cercle"
      },
      {
        "figures": [
          {
            "peu": "El centre unit amb els tres vèrtexs, i els tres radis (marcats amb la mateixa marqueta) perpendiculars a cada costat.",
            "src": "assets/img/pistes/fig-043.png"
          }
        ],
        "textos": [
          "Unint el centre del cercle inscrit amb els tres vèrtexs del triangle, el triangle gran queda partit en tres triangles més petits —un per cada costat. Encara que aquests tres triangles tinguin bases diferents (a, b i c), tenen una cosa en comú com a mesura: tots tres tenen la mateixa altura, exactament r, perquè el radi cap a cada costat hi arriba perpendicular."
        ],
        "titol": "Partir el triangle en tres"
      },
      {
        "figures": [],
        "textos": [
          "Cadascun dels tres triangles petits té per base un costat del triangle gran i per altura r: les seves àrees són (1/2)ar, (1/2)br i (1/2)cr respectivament."
        ],
        "titol": "L'àrea de cada peça"
      },
      {
        "figures": [],
        "textos": [
          "Sumant les tres peces: Àrea total = (1/2)ar + (1/2)br + (1/2)cr = (1/2)r(a+b+c). Aïllant r: r = 2·Àrea / (a+b+c) —el doble de l'àrea, dividit pel perímetre sencer."
        ],
        "titol": "Sumar-les i igualar a l'àrea total"
      },
      {
        "figures": [],
        "textos": [
          "Triangle 3-4-5 (rectangle, àrea=6): r=2×6/(3+4+5)=12/12=1 —el radi del cercle inscrit d'un 3-4-5 és, efectivament, 1."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "r = 2·Àrea/(a+b+c). Surt de partir el triangle en tres peces des del centre del cercle inscrit —cadascuna amb un costat del triangle com a base i el radi r com a altura comuna—, sumar-les i igualar-ho a l'àrea total. És el mateix moviment de \"veure l'àrea des del centre\" que ja va aparèixer amb el pentàgon regular a la Qüestió 39, ara amb tres peces desiguals en lloc de cinc d'iguals.",
    "titol": "El radi de la circumferència inscrita"
  },
  "q77": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Aquesta pregunta no demana resoldre res de nou: demana reconèixer una tècnica que ja s'havia fet servir, sense dir-ne el nom, en un problema anterior."
        ],
        "titol": "No un càlcul nou: un nom"
      },
      {
        "figures": [],
        "textos": [
          "A les preguntes del pentàgon no es va mesurar cap segment directament amb un regle: es va trobar una figura semblant —més petita— amagada dins de la gran, i es va plantejar una equació a partir de la proporció entre totes dues. A la Qüestió 33 això és literal, i és el cas que l'enunciat esmenta: la bisectriu d'un angle de la base retalla, dins del triangle de costats d i base 1, un altre triangle amb els mateixos tres angles, i d'igualar-ne les proporcions en surt d²=d+1. A la Qüestió 32, la mateixa jugada dona el costat del pentàgon petit."
        ],
        "titol": "Tornant a la diagonal del pentàgon"
      },
      {
        "figures": [
          {
            "peu": "La paral·lela (sanguina) crea un triangle petit semblant al gran, amb el mateix vèrtex A.",
            "src": "assets/img/pistes/fig-090.png"
          }
        ],
        "textos": [
          "Un exemple més senzill de la mateixa idea: en un triangle, una línia paral·lela a un dels costats en talla els altres dos i crea un triangle petit, semblant a l'original. Coneixent la proporció d'escala entre tots dos, es pot trobar on exactament la paral·lela talla el segon costat, sense mesurar-lo directament —només plantejant la proporció."
        ],
        "titol": "El mateix patró, en un triangle qualsevol"
      },
      {
        "figures": [],
        "textos": [
          "Aquesta manera de mesurar —trobar dues figures semblants (una és una versió escalada de l'altra) i plantejar-hi una proporció, sense necessitat de Pitàgores ni de mesurar res directament— és, senzillament, raonar per semblança.",
          "Una nota de vocabulari, perquè hi ha un parany de traducció. El llibre en diu dilation, que en anglès és el nom de la transformació que escala una figura des d'un punt fix. En català aquella transformació es diu homotècia; «dilatació» és un fals amic —vol dir el que fan els metalls amb la calor. Aquestes guies, doncs, en diuen homotècia, i reserven estirament per a l'altra transformació que també escala però amb un factor diferent per a cada direcció (la que converteix un cercle en una el·lipse, o una hipèrbola qualsevol en una de rectangular): aquella no és cap homotècia, perquè canvia la forma. El terme que l'alumnat trobarà a classe és semblança i, per a la transformació concreta, homotècia."
        ],
        "titol": "El nom de la tècnica"
      },
      {
        "figures": [],
        "textos": [
          "Triangle amb costats 6 i 9 des d'un vèrtex; una paral·lela al tercer costat que talla el primer costat a 4 unitats del vèrtex. Per semblança, talla el segon costat a 4×(9/6)=6 unitats del mateix vèrtex."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "La tècnica és raonar per semblança —el llibre en diu dilation; en català, la transformació corresponent és l'homotècia—: trobar una figura semblant, normalment més petita, amagada dins d'una altra, i plantejar-hi una proporció entre longituds corresponents. Ja s'havia fet servir, sense nomenar-la, a la Qüestió 33 per a la diagonal del pentàgon i a la Qüestió 32 per al costat del pentàgon petit del pentagrama.",
    "titol": "Dilatació: mesurar longituds sense regle ni Pitàgores"
  },
  "q78": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Per a un angle agut d'un triangle rectangle: sinus = costat oposat / hipotenusa; cosinus = costat contigu / hipotenusa. Amb dos angles aguts A i B en un mateix triangle rectangle (que sumen 90°, ja que el tercer és de 90°), cal veure com es relacionen els seus sinus i cosinus."
        ],
        "titol": "Dues definicions, no una"
      },
      {
        "figures": [
          {
            "peu": "Cada costat porta els seus dos noms alhora: contigu a A és el mateix costat que oposat a B, i viceversa.",
            "src": "assets/img/pistes/fig-086.png"
          }
        ],
        "textos": [
          "Un triangle rectangle només té tres costats, i els dos angles aguts A i B els comparteixen tots dos. El costat que és \"oposat\" a A és exactament el mateix costat que és \"contigu\" a B —i el que és \"contigu\" a A és l'\"oposat\" a B. La hipotenusa és la mateixa per a tots dos angles."
        ],
        "titol": "El mateix costat, dos noms diferents"
      },
      {
        "figures": [],
        "textos": [
          "sinA = oposat_a_A / hipotenusa = contigu_a_B / hipotenusa = cosB. I, de la mateixa manera, cosA = contigu_a_A / hipotenusa = oposat_a_B / hipotenusa = sinB. Les quatre raons no són quatre coses diferents: són les mateixes dues divisions, mirades des de cada angle."
        ],
        "titol": "Escriure-ho i comparar"
      },
      {
        "figures": [],
        "textos": [
          "Triangle 3-4-5, angle A oposat al costat 3: sinA=3/5=0,6, cosA=4/5=0,8. Angle B oposat al costat 4: sinB=4/5=0,8, cosB=3/5=0,6. sinA=cosB (0,6=0,6) ✓ i cosA=sinB (0,8=0,8) ✓."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "sinA=cosB i cosA=sinB, perquè els dos angles aguts d'un triangle rectangle comparteixen exactament els mateixos dos catets, amb els papers d'\"oposat\" i \"contigu\" intercanviats. Com que A+B=90° sempre en un triangle rectangle, això és el mateix que dir sin(θ)=cos(90°−θ) per a qualsevol angle agut θ.",
    "titol": "Sinus d'un angle, cosinus de l'altre"
  },
  "q79": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "El teorema de Pitàgores, tal com se sol veure, només parla d'un triangle rectangle. Aquí l'angle entre a i b no és de 90°, sinó obtús (més gran de 90°) —cal una fórmula que funcioni en aquest cas, i que inclogui Pitàgores com un cas particular quan l'angle sigui recte."
        ],
        "titol": "Pitàgores només val per a 90°"
      },
      {
        "figures": [],
        "textos": [
          "Traçant l'altura des del vèrtex oposat a c fins a la recta que conté el costat a, aquesta altura no cau dins del triangle —hi cau fora, més enllà d'un dels extrems, perquè l'angle al costat on cauria és obtús (tal com es veu a la imatge de l'enunciat, a dalt). Aquesta altura crea dos triangles rectangles: un de gran (que inclou tot el triangle original) i un de petit (el tros extra, fora del triangle original)."
        ],
        "titol": "Una altura que cau fora"
      },
      {
        "figures": [
          {
            "peu": "El triangle gran (hipotenusa c, sanguina) i el petit que en surt de l'altura externa, amb base a i el tros extra en termes de b i C'.",
            "src": "assets/img/pistes/fig-092.png"
          }
        ],
        "textos": [
          "Al triangle rectangle petit, la hipotenusa és b i l'angle conegut és C' (el suplementari de C, agut). L'altura val, doncs, h = b·sinC', i el tros extra de base val b·cosC'."
        ],
        "titol": "Les dues peces del triangle petit"
      },
      {
        "figures": [],
        "textos": [
          "La base del triangle rectangle gran és a més el tros extra: a+b·cosC'. Aplicant-hi Pitàgores: c² = (a+b·cosC')² + (b·sinC')². Desenvolupant: c² = a² + 2ab·cosC' + b²cos²C' + b²sin²C'. Com que sin²C'+cos²C'=1, els dos últims termes es converteixen en b²: c² = a² + b² + 2ab·cosC'."
        ],
        "titol": "Pitàgores al triangle gran"
      },
      {
        "figures": [],
        "textos": [
          "a=5, b=4, C=120° (C'=60°): c²=25+16+2(5)(4)(0,5)=41+20=61, c=√61≈7,81. Comprovat també per coordenades directes (situant els dos costats amb l'angle de 120° entre ells): la distància entre els extrems surt exactament 7,81."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "c²=a²+b²+2ab·cosC', on C' és l'angle agut suplementari de l'angle obtús C. Surt de traçar una altura que cau fora del triangle (creant un triangle rectangle gran i un de petit) i aplicar Pitàgores al gran. Quan C=90° (i per tant C'=90° també), cosC'=0 i la fórmula es converteix exactament en el Pitàgores clàssic: aquest resultat el conté com a cas particular, no el substitueix. Convé notar que en aquell cas la figura es degenera —el tros extra val b·cos90°=0 i el triangle petit desapareix—, de manera que és la fórmula, i no el dibuix, la que cobreix la frontera.",
    "titol": "Pitàgores generalitzat amb un angle obtús"
  },
  "q80": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "L'àrea d'un triangle és (1/2)×base×altura: això ja se sap. El repte aquí no és trobar una fórmula nova, és escriure l'altura en funció de coses que sí es donen —un costat i un angle—, quan l'altura en si no és cap de les dades directes del problema."
        ],
        "titol": "Una fórmula ja coneguda, escrita diferent"
      },
      {
        "figures": [
          {
            "peu": "L'angle C (sanguina) i l'altura h (discontínua): h = b·sinC, del triangle rectangle petit que hi forma.",
            "src": "assets/img/pistes/fig-044.png"
          }
        ],
        "textos": [
          "Deixant caure la perpendicular des d'un vèrtex fins a la recta que conté el costat oposat, aquesta perpendicular (l'altura) és un catet d'un triangle rectangle petit, amb un dels costats donats (b) fent d'hipotenusa d'aquest triangle petit, i l'angle C entremig."
        ],
        "titol": "El triangle rectangle amagat dins de l'altura"
      },
      {
        "figures": [],
        "textos": [
          "En aquest triangle rectangle petit, sinC = altura/b (l'altura és el costat oposat a C, b és la hipotenusa). Per tant, h = b·sinC."
        ],
        "titol": "Escriure l'altura amb el sinus"
      },
      {
        "figures": [],
        "textos": [
          "Amb base=a i altura=b·sinC: Àrea = (1/2)×a×(b·sinC) = (1/2)ab·sinC."
        ],
        "titol": "Substituir a la fórmula de l'àrea"
      },
      {
        "figures": [],
        "textos": [
          "Aquesta fórmula no necessita que el triangle sigui rectangle, ni que se'n sàpiga l'altura per endavant: funciona amb qualsevol triangle del qual es coneguin dos costats i l'angle que formen, fins i tot quan C és obtús. En aquest cas, el peu de l'altura cau fora del triangle (exactament com a la Qüestió 79), no dins —però la mateixa expressió h=b·sinC continua sent certa perquè es defineix sin(C) per a un angle obtús com sin(180°−C), precisament perquè fórmules com aquesta no s'hagin de partir en dos casos separats."
        ],
        "titol": "Per què també val amb C obtús"
      },
      {
        "figures": [],
        "textos": [
          "a=6, b=7, C=30°: Àrea=(1/2)×6×7×sin(30°)=21×0,5=10,5. Comprovat també amb C=90°, 120° i 150° per coordenades directes: la fórmula coincideix exactament en tots quatre casos, agut o obtús."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Àrea = (1/2)ab·sinC. Surt d'escriure l'altura del triangle com h=b·sinC (del triangle rectangle que forma amb el costat b i l'angle C), i substituir-la a la fórmula habitual (1/2)×base×altura. La fórmula val igual amb C agut o obtús, connectant directament amb la generalització de Pitàgores de la Qüestió 79.",
    "titol": "L'àrea d'un triangle amb dos costats i l'angle entre ells"
  },
  "q81": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Un angle \"diedre\" —entre dues cares que comparteixen una aresta—, no l'angle pla d'una cara, que ja es coneix. N'hi ha prou de treballar-ne un o dos sòlids amb detall; el mateix mètode val per als altres tres."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "A cada una de les dues cares que es toquen en una aresta, es traça —dins d'aquella cara— el segment des del punt mitjà de l'aresta fins al vèrtex oposat d'aquella cara (l'alçada del triangle equilàter de la cara). Aquests dos segments, un a cada banda, formen l'angle diedre que es busca."
        ],
        "titol": "Troba dos segments, un a cada cara, perpendiculars a l'aresta compartida"
      },
      {
        "figures": [
          {
            "peu": "Els dos segments, un a cada cara, i l'angle diedre que formen, marcat en vermell al punt mitjà de l'aresta compartida.",
            "src": "assets/img/pistes/fig-096.png"
          }
        ],
        "textos": [
          "L'angle marcat entre els dos segments, en sanguina: és aquest, i no cap altre, l'angle diedre que es busca."
        ],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "El triangle amb què es treballa té per vèrtexs el punt mitjà de l'aresta compartida i els dos vèrtexs oposats, un de cada cara —no «els dos peus i el centre»: el peu és un de sol, i és el punt mitjà. Els dos costats que en surten són les dues alçades de cara (√3/2 per a aresta 1) i el tercer és el segment que uneix els dos vèrtexs oposats. Amb el teorema del cosinus (Qüestió 79) s'aïlla l'angle del punt mitjà, que és el diedre.",
          "El tercer costat no és el mateix als dos sòlids, i d'aquí surt tota la diferència: al tetraedre els dos vèrtexs oposats són veïns i el segment val 1 (una aresta), de manera que 1 = 3/4+3/4−2(3/4)cosθ dona cos θ = 1/3; a l'octàedre són diametralment oposats i val √2, de manera que 2 = 3/4+3/4−2(3/4)cosθ dona cos θ = −1/3.",
          "I aquí cal una advertència sobre la segona meitat de la pregunta, la dels altres tres poliedres. La recepta concreta —anar del punt mitjà de l'aresta al vèrtex oposat de la cara— només dona una perpendicular a l'aresta quan la cara és un triangle equilàter. En una cara quadrada, el segment del punt mitjà d'un costat al vèrtex oposat va de biaix i no serveix: el que hi val és anar al punt mitjà del costat oposat. La idea de fons —dos segments, un a cada cara, tots dos perpendiculars a l'aresta compartida— sí que és general; la recepta, no."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "arccos(1/3) ≈ 70,53° i arccos(−1/3) ≈ 109,47°: 70,53° + 109,47° = 180,00° exactament (perquè arccos(−x) = 180° − arccos(x) per a qualsevol x).",
          "Aquesta suma de 180° no és casualitat —és exactament el que fa possible omplir l'espai alternant tetraedres i octàedres regulars sense deixar cap buit, encaixant sempre perfectament al voltant de cada aresta compartida."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "L'angle diedre del tetraedre regular és arccos(1/3) ≈ 70,53°; el de l'octàedre regular és arccos(−1/3) ≈ 109,47°. Aquests dos angles sumen exactament 180°. Els cinc, per completar la pregunta: tetraedre 70,53°, cub 90° (immediat: dues cares que comparteixen una aresta hi són perpendiculars), octàedre 109,47°, dodecàedre arccos(−1/√5) ≈ 116,57° i icosàedre arccos(−√5/3) ≈ 138,19°.",
    "titol": "L'angle diedre: tetraedre i octàedre sumen 180°"
  },
  "q82": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una comprovació que, al voltant de cada aresta compartida, els angles diedres dels sòlids que hi conflueixen sumen exactament 360° —el mateix test que ja funciona per als mosaics plans amb polígons regulars, ara en 3D i sobre arestes en lloc de vèrtexs."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "A cada aresta d'aquest folrat, hi conflueixen alguns tetraedres i alguns octàedres. Amb l'angle diedre de cadascun (ja trobat), quina combinació suma 360°?"
        ],
        "titol": "Quants sòlids de cada mena, a cada aresta"
      },
      {
        "figures": [
          {
            "peu": "L'aresta compartida, marcada en vermell, tant al tetraedre com a l'octàedre.",
            "src": "assets/img/pistes/fig-097.png"
          }
        ],
        "textos": [],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Dos angles diedres de tetraedre (2×70,53°) més dos d'octàedre (2×109,47°) sumen 360° exactes —perquè cada parella (un tetraedre, un octàedre) ja en suma 180°. Aquesta combinació concreta (2+2) és la que realment es fa servir en aquest folrat de l'espai."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "2×70,53°+2×109,47° = 141,06°+218,94° = 360° exacte.",
          "L'enunciat també pregunta si hi ha altres maneres de folrar l'espai, i n'hi ha una de molt més senzilla que aquesta: el cub. El seu angle diedre val 90°, i 360/90 = 4 exactes, de manera que quatre cubs es tanquen al voltant de cada aresta sense necessitar cap company.",
          "Passant els cinc angles diedres de la Qüestió 81 pel mateix filtre es veu que el cub és, a més, l'únic poliedre regular que ho aconsegueix tot sol: 360/70,53 = 5,10 (tetraedre), 360/90 = 4 (cub), 360/109,47 = 3,29 (octàedre), 360/116,57 = 3,09 (dodecàedre), 360/138,19 = 2,60 (icosàedre). Només el cub dona un enter — i aquesta és exactament la raó per la qual el tetraedre necessita un company: sol no hi arriba, i l'octàedre és el que li tapa el forat que li queda.",
          "La comparació justa amb el pla és, doncs, aquesta: a la Qüestió 3 hi havia tres polígons regulars capaços de folrar tots sols (triangle, quadrat, hexàgon); a l'espai n'hi ha un."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Al voltant de cada aresta, dos tetraedres i dos octàedres regulars omplen exactament els 360°: aquesta combinació folra l'espai tridimensional sense deixar cap buit ni superposició. I sobre la segona meitat de la pregunta: sí que n'hi ha una altra, i més simple —el cub, amb quatre al voltant de cada aresta (4×90° = 360°), que és l'únic poliedre regular que folra l'espai tot sol.",
    "titol": "Folrar l'espai: dos tetraedres per cada octàedre"
  },
  "q84": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una identitat: una igualtat entre sin θ i cos θ que valgui per a qualsevol angle agut, no una que només funcioni per a un angle concret. Convé no confondre-la amb la relació de la Qüestió 78, que lliga els sinus i cosinus dels dos angles d'un triangle rectangle; aquí es tracta d'un sol angle."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [
          {
            "peu": "Els dos catets i la hipotenusa: tot el que fa falta hi és.",
            "src": "assets/img/pistes/fig-088.png"
          }
        ],
        "textos": [
          "Amb el triangle rectangle de sempre i θ un dels angles aguts: sin θ = catet oposat / hipotenusa, i cos θ = catet contigu / hipotenusa. Les dues raons comparteixen el mateix denominador, i els dos numeradors són justament els dos catets —o sigui que hi ha una relació entre ells que ja es coneix."
        ],
        "titol": "Torna a la definició"
      },
      {
        "figures": [],
        "textos": [
          "El teorema de Pitàgores diu que oposat² + contigu² = hipotenusa². Dividint els dos costats de la igualtat per hipotenusa²: (oposat/hipotenusa)² + (contigu/hipotenusa)² = 1. Els dos parèntesis són exactament sin θ i cos θ, de manera que sin²θ + cos²θ = 1."
        ],
        "titol": "Pitàgores, dividit"
      },
      {
        "figures": [],
        "textos": [
          "L'argument fa servir un triangle rectangle de veritat, i per tant θ ha de ser un angle agut: és l'única cosa que fa falta perquè les dues definicions tinguin sentit. Per a angles obtusos la identitat continua valent, però primer cal decidir què volen dir sin i cos d'un angle obtús —que és el que fa la Qüestió 87 amb el sinus."
        ],
        "titol": "Fins on arriba"
      },
      {
        "figures": [],
        "textos": [
          "Triangle 3-4-5. Per a l'angle que té el 3 al davant: sin θ = 3/5 = 0,6 i cos θ = 4/5 = 0,8, i 0,6² + 0,8² = 0,36 + 0,64 = 1 ✓. Per a l'altre angle agut les dues raons s'intercanvien —sin = 0,8, cos = 0,6— i la suma dels quadrats torna a ser 1, com havia de ser: la identitat no distingeix quin dels dos angles es tria."
        ],
        "titol": "Comprovació"
      },
      {
        "figures": [],
        "textos": [
          "Aquesta identitat és la que diu que el punt de coordenades (cos θ, sin θ) cau sempre sobre una circumferència de radi 1: si els quadrats de les dues coordenades sumen 1, la distància a l'origen val exactament 1. Aquest és el pas que permet, més endavant, definir el sinus i el cosinus com les coordenades d'un punt que es mou per aquella circumferència, en lloc de dependre d'un triangle rectangle. Fora de l'abast d'aquest quadern, però val la pena saber cap on porta."
        ],
        "titol": "I després"
      }
    ],
    "resum": "sin²θ + cos²θ = 1, per a qualsevol angle agut θ. No és una identitat nova: és el teorema de Pitàgores dividit per la hipotenusa al quadrat. Els dos catets, mesurats en unitats d'hipotenusa, són precisament el sinus i el cosinus, i Pitàgores diu que els seus quadrats sumen 1.",
    "titol": "La identitat que lliga el sinus i el cosinus"
  },
  "q85": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Un cinquè de volta són 72°. Cal el sinus i el cosinus d'aquest angle, expressats exactament en termes de φ=(1+√5)/2 —no un valor decimal aproximat."
        ],
        "titol": "Un angle, dues xifres exactes"
      },
      {
        "figures": [],
        "textos": [
          "El triangle que fa falta és l'isòsceles de base 1 i costats φ, amb 36° a la punta i 72° a cada angle de la base. És el que estableix la Qüestió 33 —i que aquella mateixa qüestió adverteix de no confondre amb els triangles A, B i C de la Qüestió 31, que són 36°-36°-108°. Com que l'angle buscat ja hi és dibuixat, no cal passar per cap angle intermedi."
        ],
        "titol": "El 72° ja hi és: és l'angle de la base"
      },
      {
        "figures": [
          {
            "peu": "L'altura discontínua parteix l'angle de 36° en dos de 18°. El catet oposat a aquest angle de 18° és la meitat de la base, 1/2.",
            "src": "assets/img/pistes/fig-095.png"
          }
        ],
        "textos": [
          "L'altura des del vèrtex parteix l'angle de 36° exactament per la meitat (18° a cada banda) i la base (1) també per la meitat. El triangle rectangle petit que en resulta té hipotenusa φ i un catet igual a 1/2 (la meitat de la base). Aquest catet és l'oposat a l'angle de 18° de la punta i, alhora, el contigu a l'angle de 72° de la base: cos72° = (1/2)/φ = 1/(2φ). La qüestió està mig resolta amb una sola divisió."
        ],
        "titol": "Partir el triangle daurat pel mig"
      },
      {
        "figures": [],
        "textos": [
          "L'alçada és el catet que falta. Pitàgores: alçada = √(φ²−¼) i, com que φ²=φ+1 (Qüestió 33), això és √(φ+¾). Dividint per la hipotenusa φ: sin72° = √(φ+¾)/φ, que simplificat és √(φ+2)/2. Amb φ²=φ+1 es comprova que les dues expressions coincideixen: elevant-les al quadrat, (φ+¾)/φ² = (φ+2)/4 equival a 4φ+3 = φ²+3φ+2, que és cert."
        ],
        "titol": "L'altre catet dona el sinus"
      },
      {
        "figures": [],
        "textos": [
          "És temptador anar de 18° a 36° i de 36° a 72° amb la fórmula de l'angle doble. Fet així funciona i, de passada, dona la identitat cèlebre cos36° = φ/2. Però val la pena veure on acaba: dona cos72° = (φ−1)/2 = 1/(2φ), que és exactament el número que ja s'havia llegit del dibuix al pas anterior. No és casualitat —18° i 72° són complementaris, i per tant sin18° i cos72° són la mateixa raó (Qüestió 78). El camí llarg torna al punt de partida."
        ],
        "titol": "Per què la ruta de l'angle doble no hi afegeix res"
      },
      {
        "figures": [],
        "textos": [
          "φ≈1,618. cos72° = 1/(2·1,618) ≈ 0,309, i (φ−1)/2 = 0,618/2 = 0,309: coincideixen, com han de fer si φ²=φ+1. Alçada = √(1,618+0,75) ≈ 1,539, i sin72° = 1,539/1,618 ≈ 0,951; per l'altra expressió, √(3,618)/2 ≈ 0,951 ✓. Finalment 0,309²+0,951² = 1,000 ✓."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "cos72° = 1/(2φ) = (φ−1)/2 ≈ 0,309 i sin72° = √(φ+2)/2 ≈ 0,951. Tots dos surten d'un sol dibuix: el triangle isòsceles de base 1, costats φ i 36° a la punta (Qüestió 33), partit pel mig per l'alçada. El triangle rectangle que en queda té hipotenusa φ, catet contigu al 72° igual a 1/2, i catet oposat √(φ²−¼)=√(φ+¾). La identitat φ²=φ+1 de la Qüestió 33 és l'única cosa que cal per simplificar.",
    "titol": "El sinus i el cosinus d'un cinquè de volta"
  },
  "q86": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Aquí \"un angle\" vol dir un angle que no és l'angle entre els dos costats donats. Si ho fos, seria el cas costat-angle-costat (SAS), i aquell sí que determina el triangle de manera única —tota la dificultat de la pregunta és aquesta distinció."
        ],
        "titol": "Quin angle exactament"
      },
      {
        "figures": [
          {
            "peu": "Un arc de radi fix, centrat a B, tallant el segon costat de l'angle.",
            "src": "assets/img/pistes/fig-202.png"
          }
        ],
        "textos": [
          "Un angle a un vèrtex A i un dels costats donats sortint d'A cap a un punt B ja fixen A i B del tot. L'altre costat donat té una longitud fixa, però només se sap que el seu altre extrem C és en algun lloc del segon costat de l'angle —no es coneix encara on."
        ],
        "titol": "Fixar el que es pot fixar"
      },
      {
        "figures": [
          {
            "peu": "L'arc talla el segon costat en dos punts, C i C'. Les marquetes confirmen BC=BC': dues solucions vàlides amb les mateixes dades.",
            "src": "assets/img/pistes/fig-016.png"
          }
        ],
        "textos": [
          "Clavant un compàs a B amb aquella longitud fixa i traçant l'arc, aquest pot tallar el segon costat de l'angle en dos punts diferents —no en un de sol en general. Hi ha tres maneres que en quedi només un, i convé distingir-les: que l'arc no hi arribi (radi massa curt, cap solució), que hi sigui tangent (cas límit, triangle rectangle), o que el radi superi el costat AB, cas en què el segon tall cau a l'altra banda del vèrtex A i no dona cap triangle amb l'angle demanat."
        ],
        "titol": "Quantes vegades talla l'arc"
      },
      {
        "figures": [],
        "textos": [
          "Els dos triangles ABC i ABC' comparteixen l'angle a A, el costat AB, i el costat BC (=BC'). Però són triangles diferents —els angles a C i a C' no coincideixen, ni tampoc el costat AC. Amb angle A=30°, AB=8, BC=5 les dues sortides es poden calcular sense cap fórmula nova: la perpendicular de B al segon costat té el peu H a AH=8·cos30°≈6,93 del vèrtex i mesura BH=8·sin30°=4; com que BC=5, Pitàgores dona HC=√(5²−4²)=3. Els dos talls són simètrics respecte de H, i per tant AC≈6,93+3=9,93 o bé AC≈6,93−3=3,93."
        ],
        "titol": "Dos triangles, mateixes dades de partida"
      },
      {
        "figures": [],
        "textos": [
          "Angle A=30°, AB=8, BC=5: AH=8·cos30°≈6,93, BH=8·sin30°=4, HC=√(25−16)=3, i per tant AC≈9,93 o AC≈3,93 —dues solucions vàlides. Es comprova que totes dues serveixen mesurant BC a cada triangle: ha de sortir 5 als dos. L'ambigüitat és exactament l'arrel quadrada de Pitàgores: si es donés l'angle comprès (SAS), no hi hauria cap arrel a treure i, per tant, cap ±."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "No, dos costats i un angle no comprès (SSA) no basten: en general hi ha dos triangles diferents, no congruents entre si, que comparteixen exactament aquestes dades. Els criteris clàssics de congruència són SSS, SAS, ASA i AAS (i hipotenusa-catet per als rectangles); SSA no és cap d'ells, i aquesta qüestió n'és la raó. Això no vol dir que falli sempre: quan l'angle donat és recte o obtús, el costat que se li oposa és el més llarg del triangle, només hi ha un tall vàlid i les dades sí que determinen el triangle. El nom \"cas ambigu\" es refereix, doncs, al cas d'angle agut amb el costat oposat més curt que l'adjacent conegut, que és el que reapareix en resoldre triangles amb el teorema del sinus.",
    "titol": "El cas ambigu: dos costats i un angle no basten"
  },
  "q87": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una definició, no un càlcul. La definició de sinus de la Qüestió 78 —oposat dividit per hipotenusa— només té sentit per a un angle agut d'un triangle rectangle, i un angle obtús no en pot ser mai un. Cal decidir, doncs, què vol dir sin(120°). I la pregunta en fa una segona, que és la que dona valor a la primera: es pot decidir de manera que el teorema del sinus continuï valent?"
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [
          {
            "peu": "L'angle obtús a C, el seu suplementari marcat a l'esquerra, i el peu H de l'alçada, que cau fora del segment.",
            "src": "assets/img/pistes/fig-091.png"
          }
        ],
        "textos": [
          "En un triangle ABC amb l'angle C obtús, es deixa caure l'alçada des d'A fins a la recta que conté el costat CB. Compte: no des de C —aquella cau a dins i no serveix. Com que C és obtús, el peu cau fora del segment, passat C; se'n dirà H. Al triangle rectangle ACH, l'angle que queda a C val C' = 180°−C, que sí que és agut i, per tant, sí que té sinus en el sentit de sempre."
        ],
        "titol": "La perpendicular cau fora del triangle"
      },
      {
        "figures": [],
        "textos": [
          "Al triangle rectangle ACH: AH = b·sin(C'), amb b = CA. Al triangle rectangle ABH: AH = c·sin(B), amb c = AB —i l'angle que hi ha a B és el mateix B del triangle original, perquè H és sobre la recta BC. Igualant les dues expressions de la mateixa alçada: b/sin B = c/sin C'."
        ],
        "titol": "Mirar la mateixa alçada dues vegades"
      },
      {
        "figures": [],
        "textos": [
          "El teorema del sinus demana b/sin B = c/sin C. Comparant-ho amb el que acaba de sortir, no hi ha cap elecció possible: sin(C) := sin(C') = sin(180°−C) és l'única definició que el salva. No és una convenció arbitrària ni un caprici de notació —és el preu exacte de voler que la fórmula no s'hagi de partir en dos casos segons si l'angle és agut o obtús. Fet això, l'argument del cas agut es repeteix paraula per paraula i el teorema del sinus val també per als triangles obtusangles."
        ],
        "titol": "La definició no es tria: es dedueix"
      },
      {
        "figures": [],
        "textos": [
          "Triangle amb C=120°, a=CB=5 i b=CA=4. L'alçada des d'A val 4·sin60°≈3,464, i el peu H cau 4·cos60°=2 més enllà de C, o sigui a 5+2=7 de B; Pitàgores dona c=√(7²+3,464²)=√61≈7,810. Ara els tres quocients: c/sin C = 7,810/0,866 ≈ 9,02; sin B = 3,464/7,810 ≈ 0,4435 i b/sin B = 4/0,4435 ≈ 9,02; i amb l'alçada des de B (5·sin60°≈4,330), sin A ≈ 4,330/7,810 ≈ 0,5544 i a/sin A = 5/0,5544 ≈ 9,02. Els tres donen el mateix. De propina, A≈33,7° i B≈26,3°, i 33,7+26,3+120 = 180."
        ],
        "titol": "Comprovació"
      },
      {
        "figures": [],
        "textos": [
          "Aquesta mateixa construcció —l'alçada que cau fora i l'angle suplementari— és la que fa servir la Qüestió 79 per generalitzar Pitàgores als triangles amb un angle obtús. El cosinus demana el mateix tracte, però amb una diferència de signe que val la pena entendre: la definició que fa que la fórmula de la Qüestió 79 s'escrigui com una de sola, c² = a²+b²−2ab·cos C, és cos(C) := −cos(180°−C). Per què el sinus no porta el menys i el cosinus sí? Perquè l'alçada és una longitud i no canvia de banda quan C passa de 90°, mentre que la projecció sobre la base sí que ho fa."
        ],
        "titol": "I després"
      }
    ],
    "resum": "Es defineix sin(C) := sin(180°−C) per als angles obtusos, fent servir l'angle agut suplementari, que sí que és angle d'un triangle rectangle de veritat. I sí, el teorema del sinus continua valent —de fet, aquesta és l'única definició amb la qual continua valent: l'alçada des d'A val alhora b·sin(180°−C) i c·sin(B), i igualar-les no deixa cap altra sortida.",
    "titol": "El sinus d'un angle obtús: una definició forçada"
  },
  "q89": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Aquest és un dels resultats clàssics de la geometria elemental que costa molt més de demostrar del que sembla a primer cop d'ull —es coneix com el teorema de Steiner–Lehmus. La intuïció diu que sí, ha de ser isòsceles. Aquesta vegada la intuïció encerta, però val la pena notar que no és evident per què, i que un argument ràpid del tipus \"és simètric, doncs...\" no en constitueix una demostració vàlida."
        ],
        "titol": "Una aposta, abans de raonar"
      },
      {
        "figures": [],
        "textos": [
          "Si el triangle ja fos isòsceles, és fàcil veure per simetria que les dues bisectrius (dels dos angles iguals) fan la mateixa longitud —aquest sentit és senzill de demostrar. Aquí es demana l'altre sentit: si les dues bisectrius surten iguals, cal deduir que el triangle era isòsceles. Aquesta implicació inversa és la que necessita una demostració real."
        ],
        "titol": "Un sentit és fàcil; l'altre no"
      },
      {
        "figures": [
          {
            "peu": "Les dues bisectrius BP i CQ, marcades com a iguals per hipòtesi, no com a resultat d'una mesura directa del dibuix.",
            "src": "assets/img/pistes/fig-045.png"
          }
        ],
        "textos": [
          "El triangle es dibuixa expressament no isòsceles a ull, amb dues bisectrius (des de B i des de C). Els arcs distingeixen quina bisectriu parteix quin angle. Les ratlletes a BP i CQ marquen la hipòtesi que se suposa —que aquestes dues longituds es fan iguals— no pas una mesura d'aquest dibuix concret: en un triangle realment escalè com aquest no poden sortir exactament iguals en píxels. Aquesta és tota la gràcia del teorema: si ho fossin de veritat, el triangle seria isòsceles."
        ],
        "titol": "La construcció, i què confirma la hipòtesi"
      },
      {
        "figures": [],
        "textos": [
          "Sigui t la bisectriu des de B, i siguin a i c els dos costats que es troben en aquest vèrtex. La bisectriu parteix el triangle en dos, i l'àrea es pot escriure de dues maneres (Qüestió 80): la sencera és ½·a·c·sin B, i les dues meitats sumen ½·c·t·sin(B/2) + ½·a·t·sin(B/2). Igualant i fent servir sin B = 2·sin(B/2)·cos(B/2) (Qüestió 88), el factor sin(B/2) es cancel·la i queda tB = 2ac·cos(B/2) / (a+c)."
        ],
        "titol": "Primer, quant fa una bisectriu"
      },
      {
        "figures": [],
        "textos": [
          "Suposem que el triangle no és isòsceles i que, per exemple, b > c. Dues conseqüències, i les dues empenyen cap al mateix costat. La primera: a costat més gran, angle oposat més gran, o sigui B > C; com que B/2 i C/2 són tots dos aguts i el cosinus hi decreix, cos(B/2) < cos(C/2). La segona: escrivint la fracció al revés, (a+c)/(2ac) = 1/(2c) + 1/(2a), es veu que 2ac/(a+c) creix quan creix qualsevol dels dos costats; de b > c se'n segueix 2ab/(a+b) > 2ac/(a+c). Multiplicant les dues desigualtats: tC > tB."
        ],
        "titol": "La demostració, per reducció a l'absurd"
      },
      {
        "figures": [],
        "textos": [
          "S'ha arribat a tC > tB, que contradiu la hipòtesi que les dues bisectrius són iguals. Per tant b > c és impossible. Intercanviant els papers de b i c, el mateix argument descarta c > b. Només queda b = c: el triangle és isòsceles, que és el que calia demostrar."
        ],
        "titol": "Per què això tanca la qüestió"
      },
      {
        "figures": [],
        "textos": [
          "Triangle de costats a=5, b=6, c=7. Els angles surten A≈44,42°, B≈57,12° i C≈78,46°, que sumen 180° ✓. Aplicant la fórmula: tB = 2·5·7·cos(28,56°)/12 = 70·0,8783/12 ≈ 5,124, i tC = 2·5·6·cos(39,23°)/11 = 60·0,7744/11 ≈ 4,225. Clarament diferents, i en el sentit que la demostració prediu: com que c=7 > b=6, ha de sortir tB > tC, i així és.",
          "Totes les demostracions conegudes d'aquest teorema són indirectes, com aquesta: parteixen de suposar que el triangle no és isòsceles. Des del segle XIX es busca una demostració directa —que construeixi la igualtat dels costats a partir de la de les bisectrius sense passar per la negació— i no n'hi ha cap que tingui consens que ho sigui. Que un enunciat tan simple resisteixi això és, potser, més interessant que la demostració mateixa."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Sí —el teorema de Steiner–Lehmus. La clau és la longitud de la bisectriu, tB = 2ac·cos(B/2)/(a+c), que s'obté escrivint l'àrea de dues maneres. Si es suposa b > c, aleshores cos(B/2) < cos(C/2) i alhora 2ab/(a+b) > 2ac/(a+c), i multiplicant les dues desigualtats surt tC > tB: contradicció amb la hipòtesi. Per simetria tampoc no pot ser c > b, i per tant b = c. La demostració és indirecta —com totes les conegudes d'aquest teorema— però no és llarga.",
    "titol": "El teorema de Steiner–Lehmus"
  },
  "q90": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Es demana generalitzar la fórmula de Heron (àrea d'un triangle a partir només dels seus costats) a un quadrilàter —però només quan els quatre vèrtexs són sobre un mateix cercle. Aquesta condició, \"inscrit en una circumferència\", és essencial per a tota la demostració, no un detall afegit."
        ],
        "titol": "Una condició imprescindible, no decorativa"
      },
      {
        "figures": [
          {
            "peu": "Els dos angles marcats, a banda i banda de la diagonal: suplementaris (sumen 180°) per estar inscrits en el mateix cercle.",
            "src": "assets/img/pistes/fig-098.png"
          }
        ],
        "textos": [
          "Una diagonal parteix el quadrilàter en dos triangles que la comparteixen. Els dos angles del quadrilàter que queden a banda i banda d'aquesta diagonal, als altres dos vèrtexs, sumen sempre 180° perquè el quadrilàter és cíclic —ja demostrat, en essència, a la Qüestió 42: cada angle val la meitat del seu arc oposat, i els dos arcs oposats junts fan la circumferència sencera (360°), de manera que els dos angles sumen la meitat, 180°. Aquest és tot el paper que fa la circumferència en aquesta demostració."
        ],
        "titol": "Partir per una diagonal, i què aporta el cercle"
      },
      {
        "figures": [],
        "textos": [
          "Anomenant B un d'aquests dos angles (l'altre val 180°−B), el teorema del cosinus aplicat a cada triangle dona dues expressions per al quadrat de la diagonal: p²=a²+b²−2ab·cosB i p²=c²+d²−2cd·cos(180°−B). Com que cos(180°−B)=−cosB, igualant-les: a²+b²−2ab·cosB = c²+d²+2cd·cosB, d'on cosB = (a²+b²−c²−d²) / (2(ab+cd))."
        ],
        "titol": "La mateixa diagonal, dues expressions"
      },
      {
        "figures": [],
        "textos": [
          "Cada triangle té àrea (1/2)·costat·costat·sinus de l'angle comprès (Qüestió 80): com que sin(180°−B)=sinB, l'àrea total és A = (1/2)(ab+cd)·sinB. Abreujant K = ab+cd i M = a²+b²−c²−d², això és A = ½K·sinB, amb cosB = M/(2K)."
        ],
        "titol": "Sumar les dues àrees"
      },
      {
        "figures": [],
        "textos": [
          "Elevant al quadrat i fent servir sin²B = 1−cos²B (Qüestió 84): A² = ¼K²(1 − M²/(4K²)), és a dir 16A² = 4K² − M². Això és una diferència de quadrats, i aquest és l'únic pas realment enginyós de tota la demostració: 16A² = (2K+M)(2K−M). Val la pena desenvolupar els dos parèntesis per separat, perquè cadascun torna a ser una diferència de quadrats."
        ],
        "titol": "L'àlgebra, feta"
      },
      {
        "figures": [],
        "textos": [
          "El primer: 2K+M = 2ab+2cd+a²+b²−c²−d² = (a+b)² − (c−d)² = (a+b+c−d)(a+b−c+d). El segon: 2K−M = 2ab+2cd−a²−b²+c²+d² = (c+d)² − (a−b)² = (a−b+c+d)(−a+b+c+d). Multiplicant-los, 16A² = (a+b+c−d)(a+b−c+d)(a−b+c+d)(−a+b+c+d)."
        ],
        "titol": "Dues diferències de quadrats més"
      },
      {
        "figures": [],
        "textos": [
          "Amb s = (a+b+c+d)/2, cada factor és el perímetre menys el doble d'un costat: a+b+c−d = 2s−2d = 2(s−d), i igual per als altres tres. Els quatre dosos donen 16, que es cancel·la amb el 16 de l'esquerra: A² = (s−a)(s−b)(s−c)(s−d), o sigui Àrea = √[(s−a)(s−b)(s−c)(s−d)]."
        ],
        "titol": "El semiperímetre apareix tot sol"
      },
      {
        "figures": [],
        "textos": [
          "Costats 2, 3, 4, 5: s=7, i la fórmula dona Àrea=√[(7−2)(7−3)(7−4)(7−5)]=√(5·4·3·2)=√120≈10,95. Val la pena refer-ho pel camí llarg per comprovar l'àlgebra: K = 2·3+4·5 = 26 i M = 4+9−16−25 = −28, de manera que 16A² = 4·26² − 28² = 2704 − 784 = 1920 i A² = 120 ✓. De passada, cosB = −28/52 ≈ −0,538, o sigui B ≈ 122,6°: un angle obtús, i per això calia el teorema del cosinus sencer i no només el cas agut.",
          "La comprovació més bonica és fer d→0. Aleshores (s−d) esdevé s, i queda Àrea = √[s(s−a)(s−b)(s−c)]: exactament la fórmula de Heron per a un triangle de costats a, b i c. O sigui que la demostració d'aquí no només generalitza Heron —també la demostra, com a cas particular."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Àrea = √[(s−a)(s−b)(s−c)(s−d)], amb s=(a+b+c+d)/2. Surt de partir el quadrilàter cíclic per una diagonal, aprofitar que els angles oposats sumen 180° (Qüestió 42), escriure la diagonal al quadrat de dues maneres amb el teorema del cosinus, i sumar les dues àrees. Quan un costat es redueix a zero, la fórmula es converteix exactament en la de Heron per a un triangle —el mateix tipus de cas límit que ja va aparèixer a la Qüestió 74.",
    "titol": "La fórmula de Brahmagupta"
  },
  "q91": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una fórmula per al factor pel qual s'allarga o s'escurça una longitud quan es projecta perpendicularment d'un pla a un altre. Compte, però, amb la paraula \"factor\": aquí no n'hi ha un de sol, i la primera feina és descobrir de què depèn a part de l'angle entre els plans."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "Si els dos plans coincideixen (angle 0°), cap longitud canvia: factor 1. Si el pla girés fins quedar perpendicular a l'altre (angle 90°), un segment que hi fos perpendicular es projectaria a un sol punt: factor 0. La funció que val 1 a 0° i 0 a 90° és el cosinus."
        ],
        "titol": "Prova-ho amb un cas fàcil"
      },
      {
        "figures": [],
        "textos": [
          "Amb els dos plans encara a 90°, mirem ara un segment que estigui damunt de la recta on els dos plans es tallen. Aquella recta pertany als dos plans alhora, de manera que el segment no es mou gens en projectar-lo: factor 1, no 0. Dos segments de la mateixa longitud, dins del mateix pla, amb factors ben diferents. El \"factor d'escala\", doncs, no és un número: depèn de la direcció del segment."
        ],
        "titol": "El cas que desmenteix que hi hagi un sol factor"
      },
      {
        "figures": [
          {
            "peu": "El segment L, l'angle θ entre els dos plans, i la seva projecció L·cosθ sobre el pla horitzontal.",
            "src": "assets/img/pistes/fig-099.png"
          }
        ],
        "textos": [
          "Un segment sobre el pla inclinat, perpendicular a la línia on es tallen els dos plans, i la seva projecció (perpendicular) sobre el pla horitzontal."
        ],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "Per al segment del dibuix —el perpendicular a la recta de tall— el segment, la seva projecció i el tros de pla entre tots dos formen un triangle rectangle: la hipotenusa és el segment original i un catet és la projecció. L'angle entre els plans és exactament l'angle d'aquest triangle que toca el segment original, i la raó entre catet i hipotenusa és el seu cosinus. Aquest factor, cos θ, és el més petit de tots."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Ja es pot descriure què fa la projecció a qualsevol figura: encongeix per un factor cos θ en la direcció perpendicular a la recta de tall, i no toca res en la direcció de la recta de tall. Qualsevol altra direcció queda entremig. És un estirament, amb dos factors diferents segons la direcció —el mateix tipus de transformació que apareix a la Qüestió 112. I hi ha, tot i això, un número que és el mateix per a tothom: l'àrea. Un rectangle amb un costat en cada una de les dues direccions conserva un costat i multiplica l'altre per cos θ, de manera que l'àrea queda multiplicada exactament per cos θ, sigui quina sigui la figura."
        ],
        "titol": "Les dues direccions, i el número que sí que és únic"
      },
      {
        "figures": [],
        "textos": [
          "Angle entre plans de 60°. Un segment de 8 unitats perpendicular a la recta de tall es projecta a 8×cos60° = 4 unitats. Un segment de 8 unitats situat damunt de la recta de tall es projecta a 8: no canvia. Un de 8 a 45° de la recta de tall es projecta a 6,32, entremig dels dos anteriors. L'àrea, en canvi, queda sempre multiplicada per 0,5.",
          "La comprovació més visual de tot plegat: una moneda circular, vista de gairebé de cantell, es veu com una el·lipse molt aixafada, i la relació entre els dos eixos de l'el·lipse és exactament aquest cosinus. Que es vegi una el·lipse i no un cercle més petit és la prova que el factor no és el mateix en totes les direccions —si ho fos, un cercle donaria sempre un cercle."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "No hi ha un sol factor: la projecció perpendicular entre dos plans que formen un angle θ deixa les longituds intactes en la direcció de la recta on els plans es tallen, i les multiplica per cos(θ) en la direcció perpendicular a aquella recta; qualsevol altra direcció queda entremig. És un estirament, amb factors 1 i cos(θ), i per tant no cap homotècia. El que sí que té un factor únic és l'àrea, que queda multiplicada exactament per cos(θ).",
    "titol": "El factor d'escala entre dos plans: un cosinus"
  },
  "q92": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una resposta de NO, amb un exemple concret de projecció que no sigui una homotècia —és a dir, que no multipliqui totes les longituds pel mateix factor constant."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "La Qüestió 91 ja va deixar vist que, fins i tot projectant perpendicularment entre dos plans inclinats, una direcció queda intacta i l'altra s'encongeix per cos θ: això ja no és cap homotècia. La resposta és, doncs, que no, abans i tot de canviar la direcció de projecció. Però hi ha una segona manera de fallar, de naturalesa diferent i val la pena veure-la: què passa si les línies de projecció, en lloc de ser paral·leles entre si, passen totes per un sol punt fix —una \"làmpada\"?"
        ],
        "titol": "Hi ha dues maneres de fallar, i la primera ja ha sortit"
      },
      {
        "figures": [
          {
            "peu": "Dos segments iguals: el proper (vermell) i el llunyà (blau). Les seves imatges surten de mides ben diferents.",
            "src": "assets/img/pistes/fig-100.png"
          }
        ],
        "textos": [
          "Dos plans, un punt de projecció, i dos segments iguals a diferents distàncies del punt de projecció, projectats sobre el segon pla."
        ],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "En una projecció central, l'ombra d'un segment paral·lel a la pantalla s'amplia per un factor igual a la distància de la làmpada a la pantalla dividida per la distància de la làmpada al segment. O sigui que com més a prop de la làmpada és el segment, més gran surt la seva ombra —és exactament el que es fa amb la mà quan es vol que l'ombra ompli la paret. Si el pla de partida està inclinat, cada tros seu és a una distància diferent de la làmpada i s'amplia pel seu compte. Fixem-nos en la diferència amb la Qüestió 91: allà el factor depenia de la direcció del segment i era el mateix a tot arreu de la figura; aquí depèn d'on és el segment."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Làmpada, pantalla a 12 unitats, i dos segments iguals paral·lels a la pantalla: un a distància 2 de la làmpada i l'altre a distància 6. Els factors són 12/2 = 6 i 12/6 = 2. El segment de més a prop surt tres vegades més gran, no més petit. Cap factor únic i, per tant, cap homotècia.",
          "Aquesta distinció —el que decideix si una projecció és una homotècia o no— és exactament la diferència entre un plànol arquitectònic (paral·lela) i una fotografia (central), i és la raó per la qual les línies paral·leles d'una via de tren semblen convergir en una fotografia però no en un plànol."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "No, i de dues maneres diferents. Ja la projecció paral·lela entre dos plans inclinats deixa de ser una homotècia: el factor depèn de la direcció del segment (Qüestió 91), encara que sigui el mateix a tot arreu de la figura. I la projecció central —totes les línies passant per un únic punt— falla d'una altra manera: el factor depèn d'on és el segment, perquè creix a mesura que el segment s'acosta al punt de projecció. La condició que de veritat cal és una de sola, i és sobre els plans, no sobre les línies: els dos plans han de ser paral·lels entre si. Si ho són, tant la projecció paral·lela com la central donen una homotècia —la central amb un factor que depèn de la distància, com es veu a la Qüestió 100. Si no ho són, no en dona cap de les dues.",
    "titol": "No totes les projeccions dilaten igual"
  },
  "q93": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Un argument que valgui per a qualsevol de les infinites rectes tangents des d'un mateix punt exterior —no la comprovació d'un sol cas."
        ],
        "titol": "Què hem de produir"
      },
      {
        "figures": [],
        "textos": [
          "Igual que en un cercle —és el que es demostra a la Qüestió 95—, el radi que va del centre al punt de tangència és perpendicular a la recta tangent en aquell punt. En tres dimensions continua valent, i per la mateixa raó: com que la recta tangent toca l'esfera només a T, aquest és el punt de la recta més proper al centre, i el segment més curt d'un punt a una recta hi és perpendicular. Amb el centre O, el punt exterior P i un punt de tangència T qualsevol, l'angle del triangle OPT al vèrtex T és, doncs, recte."
        ],
        "titol": "El radi i la tangent són perpendiculars"
      },
      {
        "figures": [
          {
            "peu": "Els triangles OPT₁ i OPT₂: tots dos rectangles en T, amb la mateixa hipotenusa OP i el mateix catet OT (el radi).",
            "src": "assets/img/pistes/fig-101.png"
          }
        ],
        "textos": [
          "Dos punts de tangència diferents, T₁ i T₂, cadascun formant el seu propi triangle amb O i P."
        ],
        "titol": "La construcció"
      },
      {
        "figures": [],
        "textos": [
          "El triangle OPT és rectangle en T, amb hipotenusa OP —fixa, la distància del punt exterior al centre— i un catet OT —el radi, també fix. Pitàgores dona l'altre catet PT en termes només d'OP i del radi: PT = √(OP² − radi²) —cap referència a quin punt de tangència T és. Com que OP i el radi són els mateixos per a totes les tangents, PT també ho és."
        ],
        "titol": "Tancar-ho"
      },
      {
        "figures": [],
        "textos": [
          "Distància del punt exterior al centre: 10. Radi de l'esfera: 6. Longitud de qualsevol tangent: √(10²−6²) = √64 = 8, la mateixa per a totes.",
          "El mateix argument, amb el mateix triangle rectangle, val paraula per paraula per a les dues tangents des d'un punt a un cercle en 2D. El quadern no ho demana enlloc com a qüestió a part, però és el mateix teorema una dimensió més avall. En passar a tres dimensions no canvia res essencial: només cal veure que O, P i T mai no estan alineats —l'angle a T és recte i el triangle no pot degenerar— i que per tant hi ha un pla que els conté, dins del qual tot passa com al pla de sempre.",
          "Val la pena mirar què diu això de la figura sencera. Els punts de tangència no estan escampats de qualsevol manera per l'esfera: són tots a la mateixa distància de P i, alhora, tots a la mateixa distància d'O. Formen, doncs, una circumferència —la mateixa que es veu com a contorn quan s'il·lumina una pilota des d'un punt."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Totes les tangents des d'un mateix punt exterior a una esfera tenen la mateixa longitud, √(OP² − radi²), perquè aquesta fórmula no depèn de quin punt de tangència es triï —només de la distància OP i del radi, que són els mateixos per a totes.",
    "titol": "Les tangents a una esfera: totes iguals per un mateix argument"
  },
  "q94": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "No cal cap construcció elaborada: només cal tornar a la definició d'el·lipse i veure què li passa quan es redueix al cas particular d'un cercle."
        ],
        "titol": "Un punt, no un procediment"
      },
      {
        "figures": [
          {
            "peu": "L'el·lipse amb els seus dos focus separats, i el cercle amb els dos focus col·lapsats en un sol punt central.",
            "src": "assets/img/pistes/fig-102.png"
          }
        ],
        "textos": [
          "Una el·lipse és el conjunt de punts P tals que PF₁+PF₂ és una constant fixa, 2a (la suma de distàncies als dos focus). Si els dos focus F₁ i F₂ són el mateix punt O, l'equació es converteix en PO+PO=2a, és a dir, 2·PO=2a."
        ],
        "titol": "La definició, aplicada directament"
      },
      {
        "figures": [],
        "textos": [
          "De 2·PO=2a surt directament PO=a: tots els punts P de la corba són a la mateixa distància a de l'únic punt O. Aquesta és, exactament, la definició d'una circumferència de radi a centrada a O."
        ],
        "titol": "Simplificar i reconèixer la figura"
      },
      {
        "figures": [],
        "textos": [
          "Amb 2a=14 (la suma constant), si els dos focus coincideixen: PO=7 per a tot punt P de la corba —un cercle de radi 7."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "Els dos focus d'un cercle (vist com a cas límit d'una el·lipse) coincideixen exactament al centre. Surt d'aplicar la definició d'el·lipse per suma de distàncies (PF₁+PF₂=2a) al cas F₁=F₂=O, que es redueix directament a PO=a: la definició mateixa d'una circumferència.",
    "titol": "El cercle com a cas límit de l'el·lipse"
  },
  "q95": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Una recta tangent a una circumferència és, per definició, una recta que la toca en exactament un punt —ni cap ni dos o més. Aquesta condició, que sembla només descriptiva, és tota la hipòtesi que cal per demostrar la perpendicularitat: per això costa veure-ho, la hipòtesi no sembla una hipòtesi."
        ],
        "titol": "La demostració viu dins la definició"
      },
      {
        "figures": [
          {
            "peu": "El cas fals dibuixat deliberadament: el radi arriba al punt de contacte sense formar-hi un angle recte.",
            "src": "assets/img/pistes/fig-203.png"
          }
        ],
        "textos": [
          "Suposant, per un moment, que el radi no fos perpendicular a la tangent: dibuixant-ho ben exagerat i tort, el radi arriba al punt de contacte P formant un angle diferent de 90°."
        ],
        "titol": "Dibuixar el cas fals a posta"
      },
      {
        "figures": [
          {
            "peu": "La perpendicular des del centre cau al peu marcat amb l'angle recte, que queda dins del cercle. P' és el simètric de P respecte d'aquell peu, i les marquetes indiquen OP=OP'.",
            "src": "assets/img/pistes/fig-013.png"
          }
        ],
        "textos": [
          "Des del centre O es baixa la perpendicular real fins a la recta i es mira on cau el peu —que, si el radi OP no és perpendicular, és un punt diferent de P. Aquest peu no és sobre la circumferència: la perpendicular és el camí més curt del centre a la recta, o sigui que la seva longitud és menor que el radi i el peu queda a dins del cercle. El punt que interessa és un altre. Prenent damunt de la recta el punt P' que és a l'altra banda del peu i a la mateixa distància d'ell que P, els dos triangles que en resulten tenen un angle recte al peu, comparteixen el segment que va d'O al peu, i tenen els altres dos catets iguals per construcció: són iguals, i per tant OP'=OP. Això és el que diuen les marquetes de la figura. Com que OP és un radi, P' és sobre la circumferència."
        ],
        "titol": "Baixar la perpendicular real"
      },
      {
        "figures": [],
        "textos": [
          "Però P' també és, per construcció, sobre la recta —i si P' és alhora sobre la circumferència i sobre la recta, la recta toca la circumferència en dos punts (P i P'), no en un de sol. Això contradiu directament la definició de tangent. L'única manera d'evitar-ho és que P i P' siguin, de fet, el mateix punt —cosa que passa exactament quan el peu de la perpendicular coincideix amb P, és a dir, quan el radi ja era perpendicular a la recta des del principi."
        ],
        "titol": "La contradicció que ho tanca"
      },
      {
        "figures": [],
        "textos": [
          "No hi ha xifres a comprovar aquí: la comprovació és repassar la pròpia demostració i assenyalar exactament on fa servir que la recta toca el cercle només una vegada. Si enlloc no s'hi fa servir aquesta condició, hi ha un forat —sense ella l'enunciat és fals, perquè una secant talla la circumferència en dos punts i no compleix la perpendicularitat. Amb números, per acabar-ho de veure: circumferència de centre (0,0) i radi 5, i la recta y=4, que la talla a (3,4) i (−3,4). El peu de la perpendicular des del centre és (0,4), a distància 4 —menys que el radi, o sigui a dins del cercle. I el simètric de (3,4) respecte d'aquell peu és (−3,4), a distància 5: el segon punt de tall, exactament com prediu la demostració."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "La tangent és sempre perpendicular al radi al punt de contacte. Es demostra per reducció a l'absurd: si no ho fos, el peu de la perpendicular des del centre cauria en un punt diferent de P, i el simètric de P respecte d'aquell peu seria un segon punt situat alhora sobre la recta i sobre la circumferència, contradient que la tangent la toca en un sol punt. El pas clau és que aquell simètric és a la mateixa distància del centre que P, per la igualtat dels dos triangles rectangles que el peu de la perpendicular crea.",
    "titol": "Per què la tangent és perpendicular al radi"
  },
  "q96": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "El camí més curt entre dos punts ja se sap que és el segment recte —però aquí el camí ha d'anar de A a B tocant una recta pel mig, i per tant no pot ser un únic segment recte. Tota la dificultat és trobar la manera de convertir-lo, sense canviar-ne la longitud, en un camí que sí ho sigui."
        ],
        "titol": "Un camí que no pot ser recte"
      },
      {
        "figures": [
          {
            "peu": "A' és el reflex d'A respecte de la recta; AP=A'P per a qualsevol punt P de la recta (marquetes).",
            "src": "assets/img/pistes/fig-011.png"
          }
        ],
        "textos": [
          "Es necessita una transformació que conservi totes les distàncies (perquè el camí \"més curt\" no canviï de sentit) i que permeti posar les dues meitats del camí en línia recta. Aquesta transformació és la reflexió: reflectint el punt A respecte de la recta, s'obté un punt A' tal que, per a qualsevol punt P de la recta, la distància AP és sempre igual a A'P."
        ],
        "titol": "L'operació que desdobla el camí"
      },
      {
        "figures": [],
        "textos": [
          "Com que AP=A'P per a qualsevol P de la recta, el camí A→P→B fa exactament la mateixa longitud que el camí A'→P→B, sigui quin sigui el punt P triat. I entre tots els camins possibles d'A' a B passant per un punt P de la recta, el més curt és, sense cap dubte, el segment recte A'B —que només toca la recta al punt exacte on aquest segment la creua."
        ],
        "titol": "El camí trencat es torna recte"
      },
      {
        "figures": [],
        "textos": [
          "Un cop trobat aquest punt P òptim (la intersecció d'A'B amb la recta), els angles que el camí A→P i el camí P→B formen amb la recta resulten ser iguals —perquè A'P i AP formen el mateix angle amb la recta (per la simetria de la reflexió), i A', P i B estan alineats."
        ],
        "titol": "D'aquí surten els angles iguals"
      },
      {
        "figures": [],
        "textos": [
          "A=(0,3), B=(8,1), recta y=0: reflectint A a A'=(0,-3), el punt òptim surt P=(6,0), amb longitud total √80≈8,944. Amb P=(5,0) (no òptim): la longitud surt ≈8,993, més llarga, tal com havia de passar."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "El camí més curt que toca una recta pel mig forma sempre angles iguals amb ella, perquè reflectint un dels dos punts respecte de la recta, el camí trencat es converteix en un segment recte entre el reflex i l'altre punt —i un segment recte és, per definició, el camí més curt possible.",
    "titol": "El camí més curt que toca una recta pel mig"
  },
  "q97": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "A la Qüestió 96 el camí tocava una sola recta. Aquí en toca dues —un cop cadascuna. La idea és exactament la mateixa, però cal aplicar-la dos cops, no un."
        ],
        "titol": "El mateix truc, dues vegades"
      },
      {
        "figures": [
          {
            "peu": "A' (reflex d'A respecte de la recta de dalt) i B' (reflex de B respecte de la recta de baix), amb el camí complet A→P→Q→B marcat.",
            "src": "assets/img/pistes/fig-019.png"
          }
        ],
        "textos": [
          "Es reflecteix A respecte de la recta de dalt, obtenint A'; per la mateixa raó que a q96, es reflecteix també B respecte de la recta de baix, obtenint B'. Cadascuna d'aquestes reflexions converteix un tros del camí en un segment equivalent en longitud."
        ],
        "titol": "Un rebot cada vegada"
      },
      {
        "figures": [],
        "textos": [
          "Amb A' i B' ja fixats, triant dos punts de contacte qualssevol P (a la recta de dalt) i Q (a la de baix): per la reflexió, AP=A'P i QB=QB'. El camí A→P→Q→B té, doncs, exactament la mateixa longitud que el camí A'→P→Q→B', sigui quins siguin P i Q."
        ],
        "titol": "Un camí de la mateixa longitud, per a qualsevol elecció"
      },
      {
        "figures": [],
        "textos": [
          "El camí A'→P→Q→B' passa per dos punts pel mig, i cap camí així pot ser més curt que el segment recte A'B' —només l'iguala quan P i Q cauen exactament damunt d'aquest segment. Els punts de contacte òptims són, doncs, els dos punts on el segment A'B' talla les dues rectes, i la longitud mínima total és exactament |A'B'|."
        ],
        "titol": "El mínim: el segment recte A'B'"
      },
      {
        "figures": [],
        "textos": [
          "Tot això suposa que el camí toca primer la recta de dalt i després la de baix. També es pot fer a l'inrevés, i aleshores els reflexos són uns altres —A respecte de la de baix, B respecte de la de dalt— i la longitud mínima surt diferent. Són dos problemes distints, i la resposta al que es demana és el més curt dels dos. Quin guanya depèn de la posició relativa d'A i de B respecte de cada recta."
        ],
        "titol": "Falta decidir en quin ordre"
      },
      {
        "figures": [],
        "textos": [
          "Rectes y=6 (dalt) i y=0 (baix). A=(1,4), B=(9,1). Reflectint: A'=(1,8), B'=(9,−1). La distància |A'B'| és √145≈12,042, amb els punts de contacte a (2,78 · 6) i (8,11 · 0). Un camí \"a ull\" que toqui totes dues rectes a x=4 surt ≈14,705, més llarg, tal com havia de passar.",
          "I l'altre ordre, tocant primer la recta de baix: els reflexos són A″=(1,−4) i B″=(9,11), i la distància surt exactament 17 —bastant pitjor. Aquí A és a prop de la recta de dalt i B a prop de la de baix, i per això surt a compte tocar-les en aquest ordre; amb A i B intercanviats guanyaria l'altre."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "El camí més curt que toca dues rectes paral·leles, una cada vegada, surt de reflectir cada extrem respecte de la recta que li toca, i unir els dos reflexos amb un segment recte: la longitud mínima és |A'B'|, i els punts de contacte òptims són on aquest segment talla cadascuna de les dues rectes. Cal fer el càlcul per als dos ordres possibles —dalt-baix i baix-dalt— i quedar-se amb el més curt dels dos.",
    "titol": "El camí més curt entre dues rectes paral·leles"
  },
  "q98": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Aquí no cal demostrar cap fórmula a part: cal explicar per què aquest mètode físic —dos punxons, un fil, un llapis— dibuixa sempre el mateix tipus de corba, identificant exactament què és el que el fil manté constant mentre es mou el llapis."
        ],
        "titol": "El mètode és, ell mateix, la demostració"
      },
      {
        "figures": [
          {
            "peu": "El llapis, tensant el fil des dels dos punxons, en una posició concreta.",
            "src": "assets/img/pistes/fig-020.png"
          }
        ],
        "textos": [
          "El fil té una longitud fixa L, tallada una sola vegada abans de començar. Sigui quina sigui la posició del llapis, aquest sempre estira el fil sencer, repartit en dos trossos: un tros del punxó A al llapis, l'altre del llapis al punxó B."
        ],
        "titol": "Allò que el fil no pot canviar"
      },
      {
        "figures": [],
        "textos": [
          "El fil no s'estira ni s'escurça: per molt que es mogui el llapis, la suma dels dos trossos —la distància del llapis a un punxó més la distància a l'altre— és sempre exactament L, tota la longitud del fil. Aquesta suma no depèn d'on estigui el llapis; només depèn de la longitud del fil, que és fixa."
        ],
        "titol": "La suma, sempre la mateixa"
      },
      {
        "figures": [],
        "textos": [
          "\"El conjunt de punts la suma de les distàncies dels quals a dos punts fixos és constant\" és, exactament, la definició d'una el·lipse —els dos punxons en són els focus. El mètode del fil no s'inventa res de nou: simplement fabrica físicament aquesta condició amb un objecte que, per la seva pròpia naturalesa (un fil no s'estira), no pot fer altra cosa."
        ],
        "titol": "Reconèixer la definició"
      },
      {
        "figures": [],
        "textos": [
          "Punxons a (−3,0) i (3,0), fil de longitud 10. Al punt (0,4): distàncies 5 i 5, sumen 10. Al punt (5,0), un extrem de l'el·lipse: distàncies 8 i 2, sumen també 10. De passada, els dos punts comproven que aquesta el·lipse té semieixos 5 i 4, amb els punxons a distància 3 del centre.",
          "Val la pena mirar també els casos que no funcionen. Amb un fil de longitud exactament 6 —la separació dels punxons— l'única manera de tensar-lo és tenir el llapis damunt del segment que els uneix, i la corba degenera en aquest segment. Amb un fil més curt de 6 no es pot tensar en cap posició i no es dibuixa res. El mètode demana, doncs, fil més llarg que la separació dels punxons; i com més marge, més rodona surt l'el·lipse."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "El mètode del fil dibuixa sempre una el·lipse perquè la longitud del fil, fixa, es reparteix en dos trossos que sempre sumen el mateix total —exactament la definició d'el·lipse per suma de distàncies als dos focus (els punxons). Cal, això sí, que el fil sigui més llarg que la separació entre els punxons: si fa just aquella distància, la corba s'aixafa fins a ser el segment que els uneix, i si és més curt no es pot tensar enlloc. Més endavant, ajuntant aquest fet amb la reflexió de les Qüestions 96 i 97, se n'obté la propietat de billar de l'el·lipse —però amb el fil sol encara no: dona la suma constant, no els angles.",
    "titol": "El mètode del fil per dibuixar una el·lipse"
  },
  "q99": {
    "passos": [
      {
        "figures": [],
        "textos": [
          "Aquí no n'hi ha prou amb la intuïció que \"sembla que es manté\": cal una comprovació algebraica completa que la raó doble (AC·BD)/(BC·AD) de quatre punts A,B,C,D sobre una recta és exactament la mateixa que la dels seus quatre projectats A′,B′,C′,D′ des d'un mateix punt O cap a una altra recta."
        ],
        "titol": "Auditar, no només intuir"
      },
      {
        "figures": [
          {
            "peu": "L'àrea del triangle OAC escrita de dues maneres: amb l'angle a O, i amb la base AC i l'alçada des d'O.",
            "src": "assets/img/pistes/fig-103.png"
          }
        ],
        "textos": [
          "Per a un punt O fora de la recta i dos punts X,Y sobre la recta, l'àrea del triangle OXY es pot escriure de dues maneres: (1/2)·OX·OY·sin(∠XOY), o (1/2)·XY·h (amb h l'alçada des d'O fins a la recta). Igualant-les i aïllant XY: XY = OX·OY·sin(∠XOY) / h."
        ],
        "titol": "Escriure cada distància amb una àrea"
      },
      {
        "figures": [],
        "textos": [
          "Amb la mateixa fórmula aplicada a cadascuna de les quatre distàncies que apareixen a la raó doble: AC = OA·OC·sin(∠AOC)/h, BD = OB·OD·sin(∠BOD)/h, BC = OB·OC·sin(∠BOC)/h, AD = OA·OD·sin(∠AOD)/h. L'alçada h és la mateixa per a totes quatre, perquè totes provenen del mateix punt O i la mateixa recta."
        ],
        "titol": "Aplicar-ho a les quatre distàncies"
      },
      {
        "figures": [],
        "textos": [
          "Substituint les quatre expressions a la raó doble (AC·BD)/(BC·AD): totes les OA, OB, OC, OD i totes les h es cancel·len completament. El que en queda és exactament [sin(∠AOC)·sin(∠BOD)] / [sin(∠AOD)·sin(∠BOC)] —una expressió que ja no depèn de les distàncies concretes, només dels angles vistos des d'O."
        ],
        "titol": "Substituir i veure què es cancel·la"
      },
      {
        "figures": [],
        "textos": [
          "Els punts projectats A′,B′,C′,D′ són sobre les mateixes quatre semirectes que surten d'O —el mateix feix de rectes, només que tallat per una segona recta en lloc de la primera. Els angles ∠A′OC′, ∠B′OD′, etc. són, doncs, exactament els mateixos angles que ∠AOC, ∠BOD, etc. Com que la raó doble només depèn d'aquests angles (un cop cancel·lades les distàncies), la raó doble dels punts projectats ha de ser idèntica a la dels originals."
        ],
        "titol": "Per què això demostra la invariància"
      },
      {
        "figures": [],
        "textos": [
          "A,B,C,D a x=0,2,5,9: raó doble=(5)(7)/(3)(9)=35/27≈1,296. Projectant aquests quatre punts des d'un punt O=(3,7) cap a una segona recta (y=−x+20): els quatre punts projectats surten A′=(6,14), B′=(4,25;15,75), C′=(−1,21), D′=(−57,77), i la seva raó doble torna a sortir exactament 1,296."
        ],
        "titol": "Comprovació"
      }
    ],
    "resum": "La raó doble (AC·BD)/(BC·AD) de quatre punts sobre una recta es preserva exactament sota qualsevol projecció des d'un punt cap a una altra recta. Escrivint cada distància amb la fórmula d'àrea d'un triangle (OX·OY·sinàngle/h), totes les distàncies a O i l'alçada h es cancel·len de la raó doble, deixant una expressió que només depèn dels angles del feix des d'O —els mateixos per als punts originals i els projectats.",
    "titol": "La raó doble sobreviu a la projecció"
  }
};
