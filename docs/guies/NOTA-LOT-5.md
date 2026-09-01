# Nota de lliurament — Lot 5 (rework)

## 1. Què hi ha

Cap pregunta nova. Es refan les 5 figures que la revisió humana del lot 4 va
rebutjar (v. HANDOFF-COMPLETAR-GUIES.md §4), amb els **mateixos números**
(028, 045, 048, 050, 052) i `rev` pujat a 1 a `docs/manifest-figures.tsv`.
Font: `docs/guies/figures-05.html`. Cap moviment nou.

| Figura | Pregunta | Defecte assenyalat | Fix |
|---|---|---|---|
| fig-028 | q52 | l'hexàgon de tall surt aixafat i, pitjor, els segments es creuen (aspecte ~0,25 i ordre cíclic trencat un cop projectat) | reprojecció exactament al llarg de la diagonal principal del cub (vista isomètrica), on el pla de tall es veu en veritable magnitud |
| fig-045 | q89 | només una bisectriu dibuixada; amb una sola no es pot ni escriure la hipòtesi del teorema | s'afegeix la segona bisectriu (des de C), amb classe d'arc diferent i ratlletes a totes dues marcant la hipòtesi |
| fig-048 | q05 | dues estrelles en tinta, arc sanguina negligible — pràcticament cap capa d'anotació | corda base + ratlletes que tanquen el triangle isòsceles amagat a cada punta |
| fig-050 | q60 | con dins la semiesfera sense cap pla de tall, que és tota la idea de Cavalieri | pla de tall horitzontal a una alçada h qualsevol, amb els dos punts de tall marcats i R/h etiquetats sobre segments concrets |
| fig-052 | q08b | dos poliedres sense cap marca d'angle al vèrtex, malgrat que el manifest promet "angle al vèrtex <360°" | arcs sanguina als vèrtexs de dalt (i, a l'octaedre, també a baix) + xifra 3×60°/4×60° |

Totes cinc superen ara la prova de l'§4: *"cobreix la sanguina — si la
figura és igual d'informativa, no hi ha pista"*. Sense la sanguina, cada
figura torna a ser exactament l'objecte nu que la revisió va rebutjar.

## 2. Per què aquesta mida i cap pregunta nova

Aquest lliurament és deliberadament petit i no s'hi ha barrejat feina nova
(§6.1): és la porta d'entrada per demostrar que els cinc motius de rebuig
del lot 4 s'han entès, abans d'aplicar-hi cap criteri a preguntes noves.

## 3. Decisions no evidents, per figura

- **fig-028 (q52).** El defecte real no era només l'aspecte 0,25 que
  esmentava el HANDOFF: amb la projecció cavallera (compartida amb
  q25/q47/q56), l'ordre cíclic dels 6 punts mitjans **deixa de ser l'ordre
  angular un cop projectat** — els segments de l'hexàgon es creuen entre si
  (es pot comprovar calculant l'angle de cada punt respecte al centroide
  projectat). Per això la solució no és "estirar" la mateixa projecció, sinó
  triar-ne una altra: es reprojecta exactament al llarg de la diagonal
  (0,0,0)–(1,1,1), l'única direcció des de la qual un pla perpendicular a
  aquesta diagonal es veu en veritable magnitud. Efecte lateral **conegut i
  acceptat**: els dos vèrtexs de la diagonal principal cauen al mateix píxel
  — és la vista isomètrica clàssica d'un cub (reconeixible, no un error).
  **Conseqüència sobre el text:** l'"i després" de q52 deia que aquesta
  figura i la de q56 es miren "des del mateix eix". Ara ja no és cert a
  nivell de píxel (comparteixen l'eix *conceptual*, no la projecció de
  pantalla), i el paràgraf s'ha reescrit — v. `GUIES-LOT-3.md`. **No** s'ha
  tocat fig-029/q56: la projecció cavallera hi continua sent correcta (el
  seu contingut és un tetraedre inscrit, no una secció perpendicular a la
  diagonal, i no pateix el mateix problema).
- **fig-045 (q89).** Un triangle realment escalè amb dues bisectrius
  *exactament* iguals és geomètricament impossible — és tot el contingut del
  teorema de Steiner–Lehmus. Per tant BP i CQ **no** surten iguals en
  píxels, encara que totes dues portin ratlleta. S'ha optat per mantenir-ho
  així (és la convenció de notació establerta al projecte: la ratlleta marca
  una hipòtesi, no una mesura) enlloc de forçar-les visualment iguals, i
  s'ha fet explícit al text de la Pista 2 perquè no soni a contradicció per
  a un alumne que hi para atenció.
- **fig-052 (q08b).** A l'octaedre, dels 4 angles que es troben a cada
  vèrtex només 2 es poden marcar sense ambigüitat en aquesta projecció: el
  vèrtex "del darrere" cau exactament darrere del "del davant" (mateixa
  direcció des del vèrtex de dalt), així que els dos raigs són colineals i
  no hi ha cap regió 2D per marcar-hi un arc. S'han marcat els mateixos 2
  angles visibles a dalt i a baix (4 arcs en total) i s'ha explicitat per
  text que els altres 2 són iguals per simetria — no s'ha redissenyat la
  projecció de l'octaedre (fora d'abast d'un rework puntual; el defecte
  assenyalat era només "cap marca", no la projecció en si).
  Nota similar per al tetraedre: dels 3 angles de cara a l'apex, en aquesta
  projecció plana només 2 buits angulars són visualment diferenciables (el
  tercer se superposaria exactament als altres dos combinats) — es marquen
  els 2 reals i la xifra "3×60°" cobreix el tercer.
- **fig-050 (q60).** El pla de tall que s'hi afegeix talla el con *inscrit*
  de l'enunciat (el que ja hi havia dibuixat), no el con invertit
  complementari que descriu la Pista 1 — són objectes relacionats però
  diferents, i la figura només intenta arreglar "no hi ha eina de tall", no
  dibuixar el sòlid auxiliar sencer.

## 4. Convenció de referència de figura normalitzada

Els 4 punts d'aquest lot que vivien a `GUIES-LOT-4.md` (q89, q05, q60, q08b)
feien servir noms de figura descriptius (`045_bisectrius_triangle.png`,
etc.), herència del lot 4. En reescriure la Pista 2 de cadascun s'ha
aprofitat per canviar la referència a `fig-0NN.png` (com ja fan els lots 2 i
3), ja que és el nom real del fitxer en disc i el que `parse_guies.py`
hauria de rebre sense passar per la taula `LOT1`/regex de noms descriptius.
`parse_guies.py` continua acceptant totes dues formes (necessari per als 12
guies del lot 1, que encara no s'han retocat), així que això no trenca res.

## 5. `parse_guies.py` no funcionava — corregit

En arrencar aquest lliurament, `parse_guies.py` **no s'havia executat mai
amb èxit** des d'aquest repositori:

1. **Rutes absolutes trencades.** `LOTS` apuntava a
   `/home/claude/lot1/GUIES-LOT-1.md` i `/home/claude/aval/lot{2,3,4}/...`
   — directoris d'un altre entorn (probablement el de l'agent IMG) que no
   existeixen aquí. Corregit a rutes relatives a l'arrel del repo
   (`docs/guies/GUIES-LOT-N.md`), resoltes des de la ubicació del propi
   script perquè funcionin sigui quin sigui el `cwd`.
2. **Mai escrivia `js/data/guies-dades.js`.** El script només bolcava un
   `guies.json` intermedi a `/home/claude/aval/guies.json` (un altre
   directori inexistent) i s'aturava — cap pas convertia això a
   `window.GUIES`. Afegit: lectura del `moviment` (slug) des de
   `manifest-figures.tsv` (que és, segons la pròpia capçalera de
   `guies-dades.js`, la font de veritat per a aquest camp) i escriptura
   directa de `js/data/guies-dades.js` amb el mateix esquema, capçalera i
   formatació que ja hi havia.
3. **Bug real al parser, no relacionat amb les rutes.** `fix_llengua`
   normalitza el castellanisme del connector final (el que la nota §7 del
   HANDOFF demana vigilar amb `grep`) abans que el regex `BLOC` llegeixi el
   text, així que `BLOC` només hi troba mai la forma catalana correcta,
   "I després". Però la comparació `elif tipus == ...` al cos del parser
   comprovava encara la forma castellana original — que, precisament
   perquè `fix_llengua` ja l'ha corregida abans, **mai pot sortir del
   regex**. Resultat: la secció "I després" de les 52 guies existents queia
   silenciosament (`iDespres` sortia `None` sempre, tot i que el text hi
   era). Corregit perquè la comparació faci servir la mateixa forma
   catalana que ja fa servir `BLOC`. Aquest bug és anterior a aquest
   lliurament — no el vaig introduir jo, però com que és el que feia fallar
   la primera execució, l'he corregit aquí en lloc de reportar-lo i
   aturar-me, ja que el HANDOFF demana `python3 parse_guies.py` com a pas
   d'integració obligatori.
4. **Bug secundari, trobat en verificar la regeneració.** Quan una pista no
   té subtítol (`**Pista 0.**` sense "— text"), el grup capturat pel regex
   del subtítol és un punt solt (`"."`), que és "veritable" abans de
   netejar-lo però es queda buit després de treure'n el punt final — el codi
   original comprovava la veritat *abans* de netejar, així que un subtítol
   inexistent es guardava com a `""` en lloc de `null`. Corregit a comprovar
   el resultat ja net.

**Verificació de no-regressió:** després d'arreglar `parse_guies.py`, s'ha
comparat el `js/data/guies-dades.js` regenerat contra la còpia existent
abans de tocar res: **només difereixen les 5 entrades d'aquest lliurament**
(l'`iDespres` de q52 i la Pista 2 de q89/q05/q60/q08b); les altres 47 guies
surten byte-a-byte equivalents un cop parsejat com a JSON. Un cop corregits
els punts 3 i 4, `python3 parse_guies.py` reporta `problemes: 0`.

## 6. Pas de publicació (esborrar segell + blanquejar fons) — tampoc existia

El HANDOFF (§5.3) diu "reutilitza aquest codi, no el reescriguis", donant a
entendre que el pas de publicació ja existia en algun lloc del repo. No
n'he trobat cap rastre (`grep` de `PIL`/`Image.open`/`multiply`/etc. al
repo sencer no dona res, i els 53 PNG publicats no porten cap script
associat). L'he escrit de nou (`publish_figures.py`, adjunt a la carpeta
de lliurament) amb una tècnica **diferent i més segura** que un llindar de
color pur:

- **Esborrat del segell per diferència, no per color ni per regió.** Cada
  figura es renderitza dues vegades des del mateix seed — un cop amb
  `stampNum` normal i un cop amb `stampNum` buit — i qualsevol píxel que
  difereixi entre els dos renders és, per construcció, exactament el
  número de producció (mai geometria real). Vaig comprovar numèricament
  per què un llindar de color pur (el mètode que suggeria el HANDOFF: gris
  mitjà, luminància 95–235, croma <26) **no és segur**: la vora
  anti-aliased entre un traç de tinta i el paper passa, a mig degradat, per
  un gris (~138,136,131) gairebé idèntic al del segell (#8a8580), així que
  un llindar de color sol o bé esborraria vores reals arreu de la imatge, o
  bé deixaria un fantasma parcial del número. La comparació per diferència
  no té cap d'aquests dos problemes i és, a més, correcta per construcció a
  les 8 figures on el segell cau sobre geometria real (recupera exactament
  el que hi ha sota, no paper en blanc).
- **Blanqueig del fons crema→blanc** amb un reescalat lineal per canal
  (l'invers de `mix-blend-mode: multiply`), tal com demana el HANDOFF.

Verificat visualment (`view`) sobre les 5 figures publicades: cap rastre
del segell, cap dany a geometria propera (fig-045 hi té la lletra "B" just
al costat, comprovat expressament), fons blanc pur.

## 7. Manifest i integració

- `docs/manifest-figures.tsv`: `rev` 0→1 a les 5 files (028, 045, 048, 050,
  052). Columna `lot` **sense tocar** (continua sent 3/4, l'origen de la
  figura — `rev` és qui porta el compte de les revisions).
- `python3 parse_guies.py` → `problemes: 0`, escriu `js/data/guies-dades.js`.
- `python3 verifica_projecte.py` → `Tot correcte.` (36 comprovacions).
- Playwright sobre `file://index.html#<id>`: les 5 preguntes d'aquest
  lliurament i, per no-regressió, **les 52 amb guia**: 4 passos, cap imatge
  trencada, peu visible a totes. 0 fallades, 0 errors JS.

## 8. Coses de les quals no estic segur

- **fig-052 / octaedre.** Ja comentat al punt 3: la projecció actual de
  l'octaedre (dues piràmides unides per la base) fa que el vèrtex del
  darrere caigui exactament darrere del davanter des de dalt, cosa que
  impedeix marcar-hi els 4 angles per separat. És una limitació de la
  projecció, no del fet d'afegir-hi marques — si es vol arreglar de debò
  caldria redissenyar l'octaedre amb una projecció que separi els 4 vèrtexs
  equatorials des de dalt (per exemple, decalant-los també en x, no només
  en y). No ho he fet aquí perquè és fora de l'abast d'un rework puntual
  (el defecte assenyalat pel HANDOFF era "cap marca", no la projecció), però
  ho deixo anotat per si es vol revisar en un futur lot.
- **fig-045.** Igual que al lot 4 original, la demostració completa de
  Steiner–Lehmus queda fora d'abast d'aquesta guia (i és correcte que hi
  quedi, per la Pista 1 ja existent) — el rework només afegia la segona
  bisectriu que faltava, no canvia aquest límit.

## 9. Fitxers d'aquest lliurament

```
docs/guies/figures-05.html         font que regenera les 5 figures (rev1)
docs/guies/figures-05-clean.html   variant amb stampNum buit, per al pas de publicació
docs/manifest-figures.tsv          actualitzat (rev 0->1 a les 5 files)
docs/guies/GUIES-LOT-3.md          editat: "i després" de q52
docs/guies/GUIES-LOT-4.md          editat: Pista 2 de q89, q05, q60, q08b
docs/guies/REVISIONS.md            nou, append-only (v. HANDOFF §6.4)
docs/guies/NOTA-LOT-5.md           aquest fitxer
parse_guies.py                     corregit (rutes + generació + 2 bugs, v. secció 5)
publish_figures.py                 nou (arrel del repo /home/claude/publish_figures.py;
                                    no forma part encara del repo git, v. nota més avall)
assets/img/pistes/fig-028.png      republicada (rev1)
assets/img/pistes/fig-045.png      republicada (rev1)
assets/img/pistes/fig-048.png      republicada (rev1)
assets/img/pistes/fig-050.png      republicada (rev1)
assets/img/pistes/fig-052.png      republicada (rev1)
js/data/guies-dades.js             regenerat (namés difereixen les 5 entrades d'aquest lot)
```

**Nota sobre `publish_figures.py`:** en aquest lliurament vivia fora del repo
(`/home/claude/publish_figures.py`) perquè el HANDOFF no li dona una
ubicació canònica (només diu "reutilitza aquest codi"). Amb el paquet final
del lliurament ja s'ha mogut a `docs/publish_figures.py`, al costat de
`render.js`, del qual és el pas següent natural.
