# Tram 10 (q74–q78) — revisió de correcció matemàtica

Data: 2026-08-26. Abast: q74, q75, q76, q77, q78.

`js/data/guies-dades.js` regenerat amb `parse_guies.py`: 130 guies, 0
problemes. `verifica_projecte.py` passa les 52 comprovacions.

| Fitxer | Qüestions |
|---|---|
| `docs/guies/GUIES-LOT-8.md` | q74, q75, q77 |
| `js/data/guies-dades.js` | regenerat |
| `solucions/` | q74, q75, q77 |

Sense canvis: q76, q78. Verificades senceres i correctes.

**Cap error de càlcul.** Els cinc resultats són correctes. El que he trobat és
un problema de terminologia que em sembla el més important del tram, i dues
respostes que es queden curtes respecte del que la seva pròpia matemàtica ja
diu.

---

## 1. q77 — «dilatació» és un fals amic

La guia i la solució bategen la tècnica com a **dilatació** —la guia,
honestament, diu «es diu, en aquest projecte, dilatació».

El problema és de traducció. El llibre en anglès diu *dilation*, que és el nom
estàndard (sobretot al currículum dels EUA) de la transformació que escala una
figura des d'un punt fix. **En català aquella transformació es diu
«homotècia»**; «dilatació» vol dir la dels metalls amb la calor. I la tècnica
que la pregunta descriu —trobar una figura semblant amagada dins d'una altra i
plantejar-hi una proporció— és, senzillament, **raonar per semblança**.

Per a un alumne de 4t d'ESO a Catalunya això no és un detall: trobarà
«semblança» a classe aquest mateix curs i «homotècia» a batxillerat, i cap
llibre de text no li dirà «dilatació». Inventar-li un tercer nom té un cost
real.

He deixat «dilatació» com a nom intern del *moviment* (per fidelitat al llibre
i per no trencar les etiquetes del projecte), però he afegit la nota de
vocabulari a la Pista 3 i a la solució, dient els tres noms i quin és quin.

**A més, la referència creuada era a la pregunta equivocada.** L'enunciat diu
*«…which we used for the diagonal of a regular pentagon»*, i la guia remet a
q32 —que no calcula la diagonal sinó **el costat del pentàgon petit**. La
diagonal es treu a **q33** (d²=d+1, per la bisectriu que retalla un triangle
amb els mateixos angles). Corregit, citant les dues i dient què fa cadascuna.
*(Nota: q77 està a la posició 61 i q32 a la 104 —una més de les parelles amb
l'ordre invertit. La reformulació ja no dona per vista cap de les dues.)*

---

## 2. Dues respostes que es queden curtes

### q75 — no són dos triangles, són infinits

La pregunta demana dos triangles amb la mateixa àrea i el mateix perímetre, i
la solució en dona dos correctes: (17,25,28) i (20,21,29), tots dos amb
perímetre 70 i àrea 210. Ho he verificat ✓.

Però la mateixa construcció que fa servir ja diu més del que en treu. Les
condicions sobre x=s−a, y=s−b, z=s−c són només **dues** —x+y+z = 35 i
xyz = 1.260— per a **tres** incògnites: queda un grau de llibertat sencer.
No hi ha dos triangles amb perímetre 70 i àrea 210, **n'hi ha infinits**; els
dos del quadern són simplement els dos que tenen els costats sencers.

Ho he comprovat numèricament resolent t³ − 35t² + e₂t − 1.260 = 0 per a e₂
variable: hi ha tot un interval d'e₂ (aproximadament de 373,5 a 384) amb tres
arrels reals positives, i cadascuna dona un triangle vàlid —les x,y,z positives
garanteixen automàticament la desigualtat triangular, perquè a = y+z. Un
exemple no sencer de la família: **28,488… / 23,823… / 17,689…**

Això **reforça** la conclusió de la guia en lloc de debilitar-la: fixar àrea i
perímetre no deixa el triangle gairebé determinat amb un parell
d'alternatives, el deixa lliure en una dimensió sencera. Afegit a la solució i
a l'«i després».

### q74 — per què n'hi ha prou amb una desigualtat

La solució deia: *«Si aquesta condició falla per a qualsevol dels tres costats
fent de "més llarg", no es pot formar cap triangle»* — una frase confusa,
perquè només un dels tres pot ser el més llarg.

El que hi falta és la justificació de per què n'hi ha prou de comprovar-ne una:
en rigor calen les tres desigualtats, però si s'ordena de manera que c sigui el
més llarg, les altres dues es compleixen soles (a+c > c ≥ b i b+c > c ≥ a).
Escrit.

*(També: la Pista 0 deia «separa quan sí d'quan no» → «de quan no».)*

---

## 3. Verificat i correcte, sense canvis

- **q74** — a+b > c ✓. El cas límit a+b=c com a triangle degenerat d'àrea zero,
  ben plantejat. He comprovat que amb c el més llarg no cal la condició
  c > |a−b| (surt sola).
- **q75**, els números: (18,10,7) i (15,14,6) sumen 35 i multipliquen 1.260 ✓;
  costats (17,25,28) i (20,21,29), perímetre 70 tots dos ✓; Heron dona
  √44.100 = 210 als dos ✓. I x+y+z = 3s−2s = s, que és el que fa funcionar el
  truc ✓.
- **q76** — r = 2·Àrea/(a+b+c) ✓; 3-4-5 dona r = 12/12 = 1 ✓. La Pista 1 diu
  correctament que s'uneix el centre amb els **vèrtexs** (que és el que
  parteix el triangle en tres) —contrast interessant amb q57, on la mateixa
  frase estava mal escrita i la vaig haver de corregir al tram 6. Aquí és bona.
- **q78** — sinA = cosB i cosA = sinB ✓; 3-4-5 dona 0,6/0,8 i 0,8/0,6 ✓. El
  pas a sin θ = cos(90°−θ) és correcte.

---

## 4. Estat dels deutes oberts

- `<` sense escapar: **tancat** (tram 6). q74 ja el tenia arreglat i es veu bé.
- Vocabulari de producció a material de l'alumne: **tancat** (tram 8), 0
  ocurrències.
- Dependències invertides a l'ordre de presentació: 15 detectades al tram 8;
  **3 resoltes al text** (q66, q67 al tram 8; q69 al tram 9) i **1 més aquí**
  (q77→q32). En queden 11, cadascuna al seu tram.
- Pendents de decisió teva: **q40 panell 1** (t = S/5 + redibuixar `fig-059`),
  el desenvolupament de **2πRh** a q62, l'**ordre de presentació**, i ara el
  pilot **Byrne a q31**, que vas dir de deixar apuntat.
