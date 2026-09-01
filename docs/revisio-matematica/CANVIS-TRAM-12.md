# Tram 12 (q84–q88) — revisió de correcció matemàtica

Data: 2026-08-26. Abast: q84, q85, q86, q87, q88. Reobre q79.

*Segona ronda (mateix dia): incorpora la revisió del tram feta per l'agent
dels trams 1–11. Els apartats §0, §7 i §8 són d'aquesta segona ronda, i
`HANDOFF.md` ha passat a formar part del lliurament.*

`js/data/guies-dades.js` regenerat amb `parse_guies.py`: 130 guies, 0
problemes. `verifica_projecte.py`: 53 comprovacions, 0 errors, els 2 avisos
intencionats de sempre.

| Fitxer | Qüestions |
|---|---|
| `docs/guies/GUIES-LOT-8.md` | q85, q87, q88 |
| `docs/guies/GUIES-LOT-2.md` | q86 |
| `js/data/guies-dades.js` | regenerat (acumulatiu: hi surt a cada tram) |
| `solucions/q85.html` | reescrits els passos centrals |
| `solucions/q86.html` | reescrits la comprovació i el resum |
| `docs/CONEIXEMENT-PREVI-CANDIDATS-GLOSSARI.md` | ampliat (v. §5) |
| `docs/guies/GUIES-LOT-8.md` | **q79** — reobertura (v. §7) |
| `docs/revisio-matematica/HANDOFF.md` | actualitzat in situ (v. §8) |

**q84, q87 i q88 no tenen fitxer de solució**, i totes tres són a
`EXERCICIS_AMAGATS`. Això no és casual i té conseqüències: v. §4.

**q84 s'ha verificat correcta i no s'ha tocat.** Les altres quatre tenien
alguna cosa a arreglar; tres d'elles, un error de contingut.

Un dels avisos del verificador ha **encongit**: les dependències sobre
preguntes amagades han passat de 5 a 4 (`q85 → q88` ha desaparegut). No és
cosmètic —v. §1.

---

## 0. Filtre d'hipòtesis: cada resultat citat, contra el que la font demostra

Per a cada resultat amb nom propi que les cinc guies citen, he obert la
pregunta font i he escrit la seva **hipòtesi**, no el seu nom. Dotze
citacions; **quatre no resisteixen la comprovació**.

| Resultat citat | Font | Què hi demostra, exactament | Cas d'ús al tram | |
|---|---|---|---|---|
| Definicions de sinus i cosinus | q78 | angle **agut** d'un triangle rectangle | q84–q88, sempre angles aguts | ✓ |
| sin θ = cos(90°−θ) | q78, «I després» | θ agut | q85: 18° i 72° | ✓ |
| sin²+cos²=1 | q84 | «per a QUALSEVOL angle **agut**» | q88 (θ<45°, 2θ<90°); q79 nou | ✓ |
| Triangle 72°-72°-36°, base 1, costats φ; i φ²=φ+1 | q33 | tots dos, explícitament | q85, tot el resultat | ✓ |
| Els triangles del pentàgon | q31 | els parteix, però **no** demostra φ²=φ+1 (ho diu q33) | q85 el cita només com a avís de confusió | ✓ |
| Àrea = ½ab·sin C | q80 | qualsevol triangle, **inclòs C obtús** (hi dedica l'«I després») | q88 (C=2θ); q85 «I després» (72°) | ✓ |
| Semblança ≠ congruència | q77 (#62) | sí | q86 (#64), «I després» | ✓ |
| Sinus d'un angle obtús | q87 | el **sinus**; del cosinus no en parla | q79 i q88 hi remeten declarant-ho | ✓ |
| **Teorema del cosinus** | q79 | **només el cas obtús** | q86 (30°), q88 (74°), q81, q90 | ✗ |
| **SAS determina el triangle** | citat a «q08c-recíproc» | q08c és AAA i semblança: **cap contingut SAS** | q86, Pista 0 | ✗ |
| **Teorema de Pitàgores** | citat a q14/q25 | q14 és «mig calaix»; q25 és la diagonal 3D, que l'**usa** | q84, línia `DEPÈN` | ✗ |
| **Teorema del sinus** | cap | **no s'enuncia ni es demostra enlloc** | q87 el pressuposava; q86 l'esmenta | ✗ |

Els quatre, tancats:

- **Teorema del cosinus** → cas agut afegit a q79 (§7).
- **SAS** → tret de q08c i atribuït al que és, coneixement previ d'aula. La
  Pista 0 de q86 deia «seria el cas SAS de q08c-recíproc»; q08c pregunta si
  triangles amb els mateixos angles són semblants, i el seu recíproc tampoc no
  és SAS. Ara diu «el criteri costat-angle-costat (SAS) que ja portes de
  classe».
- **Pitàgores** → el `DEPÈN` de q84 el citava a q14/q25. Cap de les dues el
  demostra: **cap pregunta del quadern no ho fa**, és coneixement previ i el
  glossari sí que el té. És el mateix residu que el q24→q14 ja registrat al
  tram 3. Corregit (línia interna; no la veu l'alumne).
- **Teorema del sinus** → demostrat dins de q87 (§2).

La lliçó no és la llista, és la proporció: **una de cada tres citacions amb nom
propi tenia l'abast malament**, i totes apuntaven a la pregunta que semblava
correcta. Cap s'hauria trobat comprovant només que la referència existeix.

---

## 1. Errors

### q85 — la Pista 3 llegeix a la figura una cosa que no hi és

La Pista 3 deia:

> *«Al triangle daurat (dos costats φ, base 1, angle 36° al vèrtex),
> parteix-lo per la meitat des del vèrtex: obtens cos36° = (φ/2).»*

Fals. Partir aquell triangle per l'alçada no dona cos36°. L'angle de 36° és
justament el que l'alçada **parteix**: després de partir-lo ja no hi és, hi
queden dos de 18°. El que la figura dona és

    sin18° = (1/2)/φ = 1/(2φ)

i per arribar a cos36° = φ/2 cal la fórmula de l'angle doble —que és
exactament el que la solució feia, correctament. Guia i solució es
contradeien: el patró de sempre, i un cop més invisible si es llegeixen per
separat.

**El que hi havia a sota, però, val més que l'error.** Aquell mateix triangle
rectangle té l'angle de **72° a la base** (90°−18°), i el catet de 1/2 li és
el **contigu**. O sigui:

    cos72° = (1/2)/φ = 1/(2φ)

llegit directament del dibuix, sense cap fórmula. I on acabava el camí llarg
18° → 36° → 72°, després de dues aplicacions de l'angle doble? A
(φ−1)/2 = 1/(2φ). **Al mateix número del primer pas.** No és cap coincidència:
18° i 72° són complementaris, i q78 ja estableix sin θ = cos(90°−θ). La
solució feia un viatge d'anada i tornada.

Reescrit: la guia ara agafa la ruta directa (cos72° = 1/(2φ), i sin72° =
√(φ+¾)/φ = √(φ+2)/2 amb Pitàgores i φ²=φ+1). La solució conserva l'angle
doble, però convertit en **lliçó**: un pas titulat «Per què la ruta de
l'angle doble no hi afegeix res», que dona la identitat cos36° = φ/2 com a
producte secundari i explica per què el retorn era inevitable.

**Efecte lateral que val la pena:** q85 ja no necessita q88, que és amagada.
Una de les 5 dependències sobre preguntes amagades desapareix, i no per
haver-la amagada sota la catifa sinó perquè el camí curt no la fa servir.

### q86 i q88 — invoquen un teorema del cosinus que el quadern no té

q79 demostra **només** el cas obtús: c² = a² + b² + 2ab·cos C′, amb C′ el
suplementari. El cas agut, c² = a² + b² − 2ab·cos C, **no es demostra
enlloc**. I tanmateix:

- **q86** el feia servir a la Comprovació amb A = 30°, angle **agut**, i a la
  posició #64 de presentació, **43 posicions abans** que q79 (#107).
- **q88** hi basava tot el cos(2θ), i el seu propi exemple és θ=37° →
  2θ = 74°: **agut**. El teorema citat no cobreix ni el cas de la seva
  pròpia comprovació.

A **q86** la substitució és una millora neta i no fa falta cap teorema:
deixant caure la perpendicular de B al segon costat, amb peu H,

    AH = 8·cos30° ≈ 6,93     BH = 8·sin30° = 4     HC = √(5²−4²) = 3
    AC = 6,93 ± 3  →  9,93  o  3,93

Els mateixos dos valors, però ara el «±» deixa de ser l'arrel d'una equació
de segon grau i passa a ser el que és geomètricament: **H és el punt mitjà de
CC′**. L'ambigüitat, dibuixada. Per a una pregunta que existeix precisament
per fer veure l'ambigüitat, això no és una simplificació: és el contingut.

A **q88**, cos(2θ) surt de q84 sense cap teorema nou: com que 2θ és agut,
cos(2θ) és l'arrel positiva de 1−sin²(2θ), i el que queda sota l'arrel és un
quadrat perfecte, 1−4s²+4s⁴ = (1−2s²)². La guia ara ho diu explícitament,
inclòs l'avís que q79 no li serveix.

### q86 — «SSA és l'únic criteri que falla»: tres coses malament alhora

L'«I després» deia:

> *«Dels cinc criteris clàssics de congruència de triangles (SSS, SAS, ASA,
> AAS...), SSA és l'únic que falla.»*

1. **SSA no és un criteri.** És la combinació que no ho és; dir que «és l'únic
   dels criteris que falla» es contradiu a si mateix.
2. **AAA també falla**, i per una raó ben diferent que val la pena separar:
   fixa la forma i no la mida. És semblança, no congruència.
3. **SSA no falla sempre.** Si l'angle donat és recte o obtús, el costat que
   se li oposa és el més llarg del triangle, només hi ha un tall vàlid i les
   dades **sí** que determinen el triangle. El «cas ambigu» és el d'angle agut
   amb el costat oposat més curt que l'adjacent conegut.

El punt 3 és el que més importa a la pràctica: un alumne que triï els seus
propis números amb l'angle obtús obtindrà una sola resposta i creurà que
s'ha equivocat.

Corregit a la guia i a la solució. La solució també enumerava malament els
casos d'un sol tall («o en un de sol, en un cas límit, o en cap»): en
barrejava dos de diferents i se'n deixava el tercer. Ara en distingeix tres —
radi massa curt (cap), tangència (cas límit, triangle rectangle) i radi més
gran que AB (el segon tall cau a l'altra banda del vèrtex).

---

## 2. q87 — la guia no responia la segona meitat de la pregunta

L'enunciat en fa dues:

> *«Com hauríem de definir el sinus d'un angle obtús? **Ho podem fer de
> manera que el teorema del sinus encara es compleixi?**»*

La guia responia la primera i, de la segona, en deia: *«Comprova, amb aquesta
definició, que el teorema del sinus encara dona el mateix valor…»* — o sigui,
la delegava. I la Comprovació només avaluava la definició: *«C=120°, C′=60°:
sin(120°) := sin(60°) = √3/2 ≈ 0,866»*, que no comprova res del teorema.

Pitjor: així la definició sembla un decret. La cosa bonica d'aquesta pregunta
és que **no hi ha elecció**. L'argument, ara a la Pista 3, és mirar la mateixa
alçada dues vegades:

    al triangle ACH:  AH = b·sin C′
    al triangle ABH:  AH = c·sin B      (l'angle a B és el B original)
    ⇒  b/sin B = c/sin C′

i el teorema del sinus demana b/sin B = c/sin C. Per tant sin C := sin(180°−C)
és **l'única** definició que el salva. No és una convenció: és el preu de
voler que la fórmula no s'hagi de partir en dos casos.

Comprovació nova, feta a mà i tota amb Pitàgores (C=120°, a=5, b=4): c=√61≈7,810,
i els tres quocients donen 9,02; de propina A≈33,7°, B≈26,3° i sumen 180°.

La Pista 1 també deia «l'alçada des del **vèrtex oposat**» sense dir oposat a
què. L'única lectura que fa mal —l'alçada des de C— cau a dins i no serveix;
ara ho diu amb noms (des d'A, fins a la recta CB) i avisa d'aquella.

### I una referència falsa

L'«I després» deia «q79, **la propera guia**». q87 és a la posició #65 de
presentació; q79, a la #107. La propera és q88. Suprimit el «propera» i
ampliat: el cosinus demana el mateix tracte que el sinus però amb el signe
canviat, cos(C) := −cos(180°−C), que és el que convertiria la fórmula de q79
en una de sola.

---

## 3. Referència creuada al triangle equivocat (q85)

La Pista 1 de q85 deia que el triangle isòsceles daurat «ja vas trobar a
**q31/q32**». Però:

- **q31** té els triangles etiquetats A, B i C, que són **36°-36°-108°**;
- **q32** calcula la mida del pentàgon petit, no aquest triangle;
- el **72°-72°-36°** de base 1 i costats φ és de **q33** — que fins i tot
  avisa: *«Compte a no confondre'l amb el triangle A de q31.»*

O sigui que la pista enviava l'alumne exactament a la confusió contra la qual
q33 el prevenia. És el mateix patró que el q77 → q32 ja registrat al tram 10.
Corregit a la guia, a la solució i a la línia `DEPÈN`.

---

## 4. Observació que travessa el tram: la trigonometria està amagada

De les cinc preguntes del tram, **tres són a `EXERCICIS_AMAGATS`** (q84, q87,
q88) i cap de les tres té solució. No és una coincidència de tram: són
justament les tres que **estableixen** peces que la resta fa servir.

| Amagada | Què estableix | Qui ho fa servir |
|---|---|---|
| q84 | sin²+cos²=1 | q79, q88 |
| q87 | sinus d'un angle obtús | q79, q80, q90 |
| q88 | fórmules de l'angle doble | (q85, fins a aquest tram) |

Dit d'una altra manera: el quadern demostra aquestes tres coses en llocs on
l'alumne no pot entrar, i les fa servir en llocs on sí. No ho he tocat —és
una decisió d'owner, germana de la §6.5 del handoff— però convé que consti,
perquè el remei de desamagar-les és més barat aquí que a q18a o q67: totes
tres tenen ja una guia completa i correcta, i dues d'elles (q84, q88) són
curtes.

---

## 5. Tasca lateral: inventari de coneixement previ

`docs/CONEIXEMENT-PREVI-CANDIDATS-GLOSSARI.md` actualitzat a **q01–q88**.

- **A8, nova**: `criteris-congruencia-triangles` només llista SSS/SAS/ASA. Li
  falten AAS, hipotenusa-catet i —sobretot— que SSA **no** hi és, que és
  literalment la resposta de q86.
- **A7, nota afegida**: q79 només cobreix el cas obtús.
- **B18 (llei del cosinus), reescrita i ara la més seriosa del fitxer**: el cas
  agut no es demostra enlloc i el fan servir q86, q88, i les solucions de
  **q81 i q90**. A q86 i q88 ho he tret; **q81 i q90 encara hi són** (el
  diedre del tetraedre és arccos(1/3) ≈ 70,5°, agut). q90 a més usa
  cos(180°−B), i el cosinus d'un angle obtús no està definit enlloc.
- **B20 (sin²+cos²=1)**: ja no és caixa negra —q84 la demostra— però q84 és
  amagada.
- **B21**: precisat que del **cosinus** d'un angle obtús no en parla ni q87.
- **B24, nova**: **teorema del sinus**. q87 pregunta literalment per ell i q86
  el cita, però no s'enuncia ni es demostra enlloc, ni és al glossari. Al tram
  12 n'he posat la demostració dins de q87, que és el mínim per fer la
  pregunta responible —però q87 és amagada.
- **Secció C**: tres entrades noves (fórmules de l'angle doble, circumferència
  goniomètrica, àrea del polígon regular des del radi).

El fitxer segueix sense modificar el glossari, com marca el seu propi
protocol.

---

## 7. Reobertures de trams anteriors

### q79 — hi faltava el cas agut, i quatre preguntes en depenien

Ve del filtre de §0. q79 demostrava **només** c² = a²+b²+2ab·cos C′, amb C
obtús. El cas agut, c² = a²+b²−2ab·cos C, no es demostrava enlloc del
quadern, i el necessiten quatre llocs: q86 (30°), q88 (2θ=74°), la solució de
**q81** (el diedre del tetraedre és arccos(1/3) ≈ 70,53°) i la de **q90**.

A q86 i q88 en vaig eliminar la necessitat, que era la millor decisió per a
aquelles dues. Però q81 i q90 el necessiten de debò: hi ha un angle agut i cal
la fórmula. Reparar-les una per una hauria estat reparar el símptoma quatre
vegades; la correcció que les tanca totes és **afegir el cas agut a q79**, que
és on el forat és.

Afegit a l'«I després» de q79, amb la mateixa figura i una sola diferència —el
peu de l'alçada cau **dins** del costat a en comptes de passat l'extrem, i per
això la base val a − b·cos C i no a + b·cos C′. El desenvolupament és idèntic
al que la pregunta ja fa, amb un signe canviat, i el pas b²cos²C + b²sin²C = b²
és q84. S'hi afegeix la definició cos(C) := −cos(180°−C) per als obtusos, que
fon les dues fórmules en una de sola.

Comprovat amb el cas de q81: a = b = √3/2 i C = arccos(1/3) donen c² = 1
**exacte**, que és l'aresta oposada del tetraedre.

**Conseqüències:** les citacions de q81 i q90 passen a ser legítimes sense
tocar-les (q79 és a la posició #107; q81 a la #119 i q90 a la #109, o sigui
que l'ordre acompanya), i B18 de l'inventari es tanca. La correcció és
compatible amb la reordenació: no afirma ordre enlloc.

---

## 8. Segona ronda: què ha canviat de l'entrega

Quatre coses, totes de la revisió de l'agent dels trams 1–11.

**1. `NOTA-METODE-TRAM-12.md` ja no existeix.** Era correspondència entre
agents dipositada al repositori, i el repositori no és per a això: els agents
passen i el repositori queda. El seu contingut ha anat a `HANDOFF.md` **in
situ**, que és l'únic document canònic i viu:

| Contingut | On és ara |
|---|---|
| Patró nou «l'argument torna al punt de partida» | `HANDOFF.md` §4.11 |
| Distinció entre citar la pregunta equivocada i citar-ne una d'abast massa estret | §4.5, partida en (a) i (b) |
| Les afirmacions «X és l'únic que…» demanen tres comprovacions | §4.8 |
| Escombrat de prosa que afirma ordre de presentació | §5, tancat |
| Mesurar figures i **comptar interseccions** | §3.2b, nova |
| El parany de `requereix` i que `DEPÈN` no arriba a l'alumne | §3.1 |
| Reobrir trams anteriors i tapar el forat a l'origen | §5 |
| Estat i punt calent següent (q90) | §9 |

**2. q79 reobert** (§7), en lloc de deixar-ho escrit com a suggeriment.

**3. El filtre d'hipòtesis, aplicat exhaustivament** (§0), no només al cas amb
què vaig ensopegar. Va trobar-ne tres més.

**4. Aquest changelog** porta ara la taula de §0, que serveix tant per informar
del que està bé com per acreditar que s'ha mirat.

---

## 6. Verificat i correcte sense canvis

**q84** — la identitat sin²+cos²=1 a partir de Pitàgores. La deducció és
correcta, l'abast està declarat honestament («per a QUALSEVOL angle agut») i
la comprovació 3-4-5 funciona per als dos angles aguts. No duplica q78, que
és l'altra relació entre sinus i cosinus (la dels dos angles d'un rectangle):
són preguntes diferents i les dues estan ben delimitades.

També comprovat i correcte sense tocar-ho:

- **fig-202** (q86). El text diu «claves el compàs a **B**» i, mirant-la, l'arc
  sembla sortir d'A. Ho vaig mesurar píxel a píxel: centre ajustat a (360,348)
  amb radi 256, i el vèrtex B del dibuix hi és; l'angle a A fa 41,4° i l'arc
  **talla el segon costat dues vegades**, a 40 px i a 383 px d'A. La figura és
  correcta i il·lustra el cas de dues solucions. La impressió visual
  enganyava.
- **fig-091** (q87). Les dues arcades a C són l'angle obtús i el seu
  suplementari, i C′ marca el peu de l'alçada, que cau fora del segment. Tot
  concorda amb la guia corregida.
- L'aritmètica de **q88** (θ=37°) i la de **q86** (les dues solucions 9,93 i
  3,93) eren correctes; el que fallava era el camí, no el número.
