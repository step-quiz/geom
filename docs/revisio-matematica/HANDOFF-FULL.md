# Què queda obert — registre consolidat

**Estat de la revisió matemàtica: TANCADA.** Els trams 1–20 cobreixen les 130
preguntes (q01–q127). `parse_guies.py`: 130 guies, 0 problemes.
`verifica_projecte.py`: 53 comprovacions, 0 errors, 2 avisos —els dos
intencionats.

Aquest fitxer recull **tot el que la revisió ha deixat sense tancar**, de dues
procedències: els punts oberts que ja portava `HANDOFF.md` §6 quan va començar
aquesta ronda, i els que han sortit als trams 12–20. Cap d'ells és un error
matemàtic pendent: els errors s'han corregit tots. El que hi ha aquí són
**decisions**, i totes són teves.

`HANDOFF.md` continua sent el document de mètode per a un agent que arribi de
nou (i continua en anglès, que és la seva excepció declarada). Aquest és en
català, com la resta del projecte, perquè el seu destinatari ets tu.

---

## Part 1 — El que ja era obert, i com ha quedat

### 1.1 q40, panell 1 — sense canvis
`NOTA-LOT-6.md` §9 deixa constància que el "detall irresoluble" de l'escaneig
**sí** que es resol: és un quadrat petit recolzat sobre el costat superior d'un
quadrat inscrit, amb els vèrtexs sobre l'arc, cosa que dona **t = S/5** i una
raó d'àrees d'1:25. El text no es va canviar perquè quedaria desincronitzat de
`fig-059`, que caldria redibuixar. **Continua igual.** Va a la mateixa cua que
els tres casos de la §2.1 d'aquest document.

### 1.2 q62 — demostrar 2πRh — sense canvis
Marcat com a donat-i-no-demostrat. L'argument d'Arquimedes és fer-ho al nivell
del quadern, però és llarg i canviaria l'abast de la guia. Oferit, no fet.
**Continua igual.**

### 1.3 Ordre de presentació — millorat en prosa, intacte en estructura
Comptat ara mateix sobre les línies `DEPÈN`: **17 casos en 16 guies** en què una
guia es presenta abans d'una cosa de la qual declara dependre. Els pitjors:

| Guia | Posició | Depèn de | Posició | Distància |
|---|---|---|---|---|
| q108 | #28 | q107 | #128 | +100 |
| q125 | #23 | q124 | #115 | +92 |
| q105 | #27 | q104 | #97 | +70 |
| q69 | #57 | q65 | #125 | +68 |
| q33 | #47 | q32 | #105 | +58 |
| q117 | #21 | q112 | #71 | +50 |

Aquest número no és comparable amb el "15 guies, 11 pendents" del handoff
original, que comptava amb un altre criteri. El que sí que ha canviat és una
altra cosa i és la que importa per a l'alumne: **a q98, q99, q101, q102, q105,
q108, q111, q112, q122 i q126 la prosa s'ha reescrit** perquè no doni per fet
res que l'alumne encara no té. La dependència declarada hi continua —i ha de
continuar-hi, perquè és real—, però la guia ja no li parla com si ho hagués
vist. La decisió que queda és si vols atacar l'estructura (moure entrades a
`ordre-preguntes.js`) o donar per bo el remei de prosa.

### 1.4 Sis inversions dins d'un mateix itinerari — sense canvis
Avís 1 del verificador. La pitjor continua sent **q04 → q70**: q04 necessita la
suma (n−2)·180° que q70 estableix setze posicions més tard **dins del mateix
itinerari**. Les altres: q03→q04, q127→q64, q32→q38, q58→q60, q72→q78.

### 1.5 Dependències sobre preguntes amagades — de 5 a 4
```
q50 → q18a     q68 → q67     q69 → q67
```
*(Actualitzat: eren quatre. `q90 → q84` ha desaparegut en publicar q84, v.
§2.3.)*
**`q85 → q88` ha desaparegut**, i val la pena com va: no es va reescriure per
esquivar q88, sinó que en corregir l'error de q85 va resultar que el camí curt
i correcte no necessitava l'angle doble per a res. Abans de reescriure o
desamagar les quatre que queden, val la pena provar aquest angle: mirar si la
dependència és de veritat necessària o si és un residu d'un camí innecessari.

### 1.6 Mode Byrne — sense canvis
Vas dir d'anotar-ho i seguir. Anotat: tècnicament barat (les figures són codi de
canvas i tota primitiva de dibuix ja accepta un color; només hi ha tres
constants, `SANG`, `INK` i `PAPER`, a `docs/comu.js`), però el cost real són 162
decisions semàntiques per figura més reescriure la prosa de les pistes perquè
parli de colors. Pilot suggerit: **q31**, l'única figura on el mecanisme de
Byrne (falques d'angle acolorides com a identificadors) fa feina matemàtica de
debò.

### 1.7 El glossari — l'inventari està TANCAT, el glossari intacte
`docs/CONEIXEMENT-PREVI-CANDIDATS-GLOSSARI.md` cobreix ara **q01–q127 senceres**
i no s'amplia més. Conté 8 entrades de tipus A (termes que ja hi són al glossari
i els falta el fet que les guies fan servir), 39 de tipus B (termes que no hi
són), i una llista C dels que no fan entrada, amb el motiu.

El glossari **no s'ha tocat**, com marca el protocol §D del mateix inventari.
Les tres entrades A més rendibles, per si en vols fer només tres:

- **A8 `criteris-congruencia-triangles`** — ✅ **FETA.** L'entrada llistava només
  CCC/CAC/ACA. Ara hi són també AAS i hipotenusa-catet, i —el que hi feia més
  falta— les dues combinacions que **no** són criteris: AAA, que dona semblança i
  no congruència, i SSA, amb el nom de "cas ambigu" i l'avís que no falla sempre
  (amb l'angle donat recte o obtús sí que determina el triangle). Els termes de
  cerca inclouen ara SSA, AAS, hipotenusa-catet i "cas ambigu", i l'entrada
  remet a `teorema-de-pitagores`.
- **B36 homotècia / estirament** — v. §2.4.
- **B24 teorema del sinus** — q86 i q87 hi descansen i no s'enuncia enlloc.

---

## Part 2 — El que ha sortit als trams 12–20

### 2.1 Tres figures amb el retolat imprès, i no són el mateix cas

Totes tres tenen el problema **dins del PNG**, o sigui que no es poden arreglar
editant text. Però **dues diuen una cosa falsa i la tercera no**, i la
diferència canvia la urgència.

**`fig-107.png` (q103) — el retolat contradiu el propi dibuix.**
El dibuix és correcte: O, C, B i B′ hi surten alineats. Però hi porta imprès
"*C′ → s'escapa cap a l'infinit*" i el peu "*BC prolongat passa per O: C no té
imatge ordinària*". Les dues coses són falses: si dos vèrtexs comparteixen raig
amb el punt de projecció, les seves imatges **coincideixen** —la figura
s'aplana— i no s'escapa res. La fugida existeix, però amb una altra condició
(el raig paral·lel a la recta d'arribada). El text es va corregir al tram 15 i
ara explica els dos mecanismes; el retolat continua dient el que no és.

**`fig-121.png` (q117) — el peu diu una cosa impossible.**
Hi porta imprès "*mateixa directriu, dilatació uniforme*". Dues paràboles amb el
mateix vèrtex **no poden** compartir directriu: la directriu és a distància p del
vèrtex, i si p canvia, es mou. Ho vaig mesurar píxel a píxel: la recta
horitzontal és a y≈337 i el vèrtex comú a y≈332 —és la **tangent al vèrtex**, no
cap directriu. El dibuix, per tant, és correcte; el peu no. El text es va
corregir al tram 18. Nota afegida: aquell peu també arrossega la paraula
"dilatació", que després de l'escombrat del tram 19 ja no és la del projecte.

**`fig-091.png` (q87) — ✅ TANCADA.** Era una col·lisió de noms, no una
falsedat: la figura etiquetava **C′ el peu de la perpendicular** i les guies de
q87 i q79 fan servir **C′ per a l'angle suplementari** 180°−C. Resolt
reetiquetant el peu com a **H**, que és com el text ja l'anomenava, en tots dos
llocs: al codi font de la figura (`docs/guies/figures-08.html` i
`figures-08-clean.html`, línia de `lblC`) i al PNG publicat. `fig-092`, la de
q79, no porta cap C′, o sigui que no calia tocar-la.

*Decisió:* redibuixar (o només reetiquetar) les tres, o acceptar-les. Cap agent
n'ha de tocar ni una sense que ho diguis, i aquesta regla ha aguantat tota la
revisió.

### 2.2 Les quatre dependències amagades que queden
V. §1.5. Es repeteix aquí perquè és una de les dues coses que vas assenyalar.

### 2.3 La trigonometria bàsica es demostra on l'alumne no pot entrar — ✅ TANCAT

**Resolt: q84, q87 i q88 estan publicades.** El que segueix és el registre del
que era el problema i de què va caldre per tancar-lo.

| Amagada | Què estableix | Qui ho fa servir |
|---|---|---|
| **q84** | sin²+cos²=1 | q79, q88, q90 |
| **q87** | sinus d'un angle obtús | q79, q80, q90 |
| **q88** | fórmules de l'angle doble | q89 |

Les tres són a `EXERCICIS_AMAGATS`. El quadern, doncs, demostra aquestes tres
peces en llocs on l'alumne no hi pot entrar, i les fa servir en llocs on sí. No
és un error de contingut —les tres guies són completes i correctes— sinó una
decisió de disseny que ningú no ha pres explícitament.

**Per què aquí surt més barat que a q18a o q67:** les tres tenen ja una guia
completa i verificada, i dues (q84 i q88) són curtes. **El cost real**, i convé
que el sàpigues abans de decidir: cap de les tres té fitxer de solució —a aquest
quadern, "amagada" i "sense solució" són el mateix conjunt de 15— i, per tant,
desamagar-les vol dir escriure'n tres, no només treure-les d'una llista.

**Com es va fer.** Publicar-les no era treure tres ids d'una llista; van caldre
cinc canvis que van junts:

1. `js/ui/llista.js` — treure-les d'`EXERCICIS_AMAGATS` (12 amagades, no 15).
2. **Escriure'ls les tres solucions** (`solucions/q84.html`, `q87.html`,
   `q88.html`), que era el cost real: a aquest quadern "amagada" i "sense
   solució" eren el mateix conjunt.
3. `js/data/categories-tematiques-dades.js` — **q84 i q88 estaven a
   `aritmetica_algebra`**, una categoria sense itinerari i exclosa del menú de
   filtres per disseny. Recategoritzades com a **`triangles`**, que és on
   pertanyen: totes dues es demostren amb triangles i viuen al costat de q78,
   q79 i q80. La categoria queda amb 9 preguntes, totes encara amagades, o sigui
   que la seva exclusió del menú continua sent coherent.
4. `js/data/itineraris-tematics-dades.js` — afegides a l'itinerari `triangles`
   en l'ordre que respecta les dependències (…q78 · **q84** · **q87** · q79 ·
   q80 · **q88** · q86 · q89), i **q84 afegida al `requereix` de q90**, que és a
   un altre itinerari.
5. `verifica_projecte.py` i `README.md` — comptes i explicació al dia.

**Efecte:** les dependències sobre preguntes amagades baixen de 4 a **3**
(`q90 → q84` desapareix), i q79 ja no ha de reproduir la definició de sinus
d'un angle obtús "perquè q87 és amagada": ara s'hi remet. També q89 pot
declarar per fi que depèn de q80 i q88, que és el que el seu argument fa servir
d'ençà del tram 13.

### 2.4 Vocabulari: "dilatació" ja no hi és, però queda un rastre

L'escombrat del tram 19 va separar les dues transformacions que el quadern
anomenava totes dues "dilatació" —fals amic de l'anglès *dilation*—:
**homotècia** (escalat uniforme des d'un punt) i **estirament** (factors
diferents segons la direcció). 95 aparicions a guies i solucions, més els slugs
del manifest. De passada va sortir que **q46 estava mal agrupada**: el seu propi
text diu "en una sola direcció" i el slug la posava amb les homotècies, que és
precisament el que va deixar passar l'error de q114.

Queda un rastre i és una decisió teva: el fitxer d'imatge
**`049_dilatacio_volum_cub.png`** encara porta la paraula antiga al nom.
Reanomenar-lo toca l'asset i la referència al lot 4. Petit, però no és cosa meva.

### 2.5 El slug de moviment arriba a la pantalla en cru

Trobat mentre feia l'escombrat, i val la pena que ho sàpigues perquè no és
evident. `js/ui/detall.js:512` fa:

```js
raoText = window.tf("itinerary.reason_review_moviment", { move: s.moviment });
```

i la cadena és `"entrena la mateixa idea — {move}"`. El `{move}` és el **slug**
del manifest, no cap nom llegible: minúscules, sense accents i amb guions. Un
alumne hi llegeix literalment "*entrena la mateixa idea — redueix-al-conegut*" o
"*— dilatacio-anisotropa*" (ara, "*— estirament*"). No ho he tocat perquè és
interfície i no matemàtiques. Les dues sortides són afegir un mapatge de slug a
nom llegible, o donar-ho per bo.

---

## Part 3 — Les tres primeres coses: fetes

Les tres que aquest document prioritzava estan **totes tres tancades**:

1. ✅ **q84, q87 i q88 publicades** (§2.3), amb les tres solucions escrites, la
   recategorització que calia i l'itinerari refet.
2. ✅ **`fig-091` reetiquetada** (§2.1): el peu de la perpendicular ara es diu H
   al dibuix i al text, i la col·lisió amb el C′ de l'angle suplementari queda
   tancada a q87 i a q79.
3. ✅ **`criteris-congruencia-triangles` ampliada** (§1.7).

**El que queda, per ordre del que jo faria primer:**

1. **`fig-107` i `fig-121`** (§2.1). Són les dues que porten impresa una
   afirmació falsa; el text ja està corregit i les contradiu.
2. **q40, panell 1** (§1.1). És l'única altra cosa d'aquest document amb una
   resposta matemàtica coneguda i no publicada.
3. **Les tres dependències amagades que queden** (§1.5), amb el mètode de q85:
   mirar primer si la dependència és de veritat necessària.

La resta —q62, l'ordre de presentació, les inversions d'itinerari, el mode
Byrne, el nom del fitxer `049_dilatacio_...`, el slug a la pantalla— pot esperar
sense que res es faci malbé.

---

## Nota de traçabilitat

Els vint trams de revisió tenen changelog a `docs/revisio-matematica/`
(`CANVIS-TRAM-01.md` … `CANVIS-TRAM-12.md`); a partir del tram 13 vas demanar
que no se'n fessin més, i el registre de cada tram és la conversa mateixa. El
que sí que ha quedat escrit de tots ells és **l'inventari de coneixement previ**,
que és acumulatiu i cobreix el quadern sencer, i les correccions al codi, que hi
són totes.

`NOTA-METODE-TRAM-12.md` va existir un dia i es va esborrar a posta: el seu
contingut és avui dins de `HANDOFF.md` (§3.1, §3.2b, §4.5, §4.8, §4.11, §5 i
§9). L'esborrat està declarat a `DOCS_ABSENTS` de `verifica_projecte.py` i a
`docs/DOCUMENTS-DE-DISSENY.md`, i per això el verificador queda net.
