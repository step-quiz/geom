# Nota — 27 figures noves del glossari (26/53 → 53/53)

Aquesta nota documenta la feina que completa la tasca deixada pendent a
`NOTA-GLOSSARI-AMPLIACIO.md`: dels 53 termes del glossari, 27 tenien
`figura: null` (contingut escrit, il·lustració pendent). Ara els 53
tenen figura. Segueix la mateixa disciplina que la resta del projecte:
res es dona per bo a ull, tot es comprova amb els mateixos motors que
fa servir el projecte (`node -e` contra `glossari-dades.js`,
`publish_figures.py` real, `verifica_projecte.py`).

## 1. Què ha canviat

- **27 → 0 termes sense figura.** El glossari queda 53/53.
- **18 figures noves** a `assets/img/glossari/` (`gloss-radi-diametre.png`
  … `gloss-parabola.png`). Cap de les 14 ja existents s'ha tocat —
  comprovat byte a byte contra l'arxiu original abans d'entregar.
- Codi font de les 18 figures noves afegit a `docs/glossari-figures.html`
  (canvassos `g16`..`g33`) i `docs/glossari-figures-clean.html`
  (regenerat automàticament des de l'anterior amb la mateixa
  substitució d'una línia — `stampNum` amb cos buit — que ja
  distingeix els dos fitxers de la resta del projecte).
- `js/data/glossari-dades.js`: els 27 camps `figura: null` corresponents
  s'han omplert amb el nom de fitxer que els pertoca.

## 2. Com s'han agrupat els 27 termes en 18 figures

Seguint el mateix patró que el projecte ja fa servir per a termes
emparentats que comparteixen una sola il·lustració (p. ex.
`gloss-cevianes.png` ja cobria altura/mediana/bisectriu):

| Figura | Termes que cobreix |
|---|---|
| `gloss-radi-diametre.png` | radi, diàmetre, circumferència-cercle, **corda** |
| `gloss-corda-arc.png` | arc |
| `gloss-tangent-secant.png` | recta tangent, recta secant |
| `gloss-mediatriu.png` | mediatriu, lloc geomètric |
| `gloss-congruencia.png` | congruència |
| `gloss-criteris-congruencia.png` | criteris de congruència de triangles (CCC/CAC/ACA) |
| `gloss-rao-semblanca.png` | raó de semblança |
| `gloss-projeccio-ortogonal.png` | projecció ortogonal |
| `gloss-teorema-tales.png` | teorema de Tales |
| `gloss-pitagores.png` | teorema de Pitàgores |
| `gloss-poligons-regular-irregular.png` | polígon regular, polígon irregular |
| `gloss-apotema-diagonal.png` | apotema, diagonal |
| `gloss-prisma-piramide.png` | prisma, piràmide |
| `gloss-con.png` | con |
| `gloss-pappus.png` | teorema de Pappus |
| `gloss-conica.png` | cònica |
| `gloss-hiperbola.png` | hipèrbola, focus |
| `gloss-parabola.png` | paràbola |

Nota: la corda es dibuixa a `gloss-radi-diametre.png` (no a
`gloss-corda-arc.png`) a petició explícita durant la revisió — aquesta
última mostra només un arc delimitat per dos radis, sense corda ni
circumferència sencera, perquè quedés inequívocament "això és un arc,
res més".

## 3. Revisió feta abans d'integrar-ho

- **Pla de cobertura verificat numèricament** abans d'escriure cap
  figura: la suma de termes per figura (3+2+2+2+1+1+1+1+1+1+2+2+2+1+1+1+2+1)
  dona 27, comprovat amb `python3 -c` contra la llista real de termes
  sense figura extreta executant `glossari-dades.js` en Node (no llegit
  a ull).
- **Cada figura renderitzada i revisada visualment**, canvas per
  canvas, abans de publicar-la — es van trobar i corregir bugs reals
  en aquesta fase (no cosmètics menors): un `handDot` amb radi que
  podia sortir negatiu i trencava el render de dues figures; etiquetes
  A'/B'/C' calculades amb una fórmula inventada en comptes de la
  transformació real (sortien superposades a l'altre triangle); textos
  i geometria tallats pel marge del canvas en varis casos; una diagonal
  d'hexàgon que quedava gairebé confosa amb un costat; un prisma que es
  llegia com una piràmide per un desplaçament massa curt i vertical; un
  joc de seccions còniques al qual li faltava la hipèrbola tot i que la
  pròpia definició en cita quatre.
- **8 esmenes explícites de disseny** demanades sobre la primera versió
  revisada (reposicionar etiquetes, eliminar elements redundants —el
  segment A'B' quan la recta `r` ja n'hi ha prou, el text d'àrees a
  Pitàgores—, i dos casos de bobbling a reduir dràsticament perquè
  dues corbes es llegissin genuïnament concèntriques/rectes: el tor de
  Pappus i la directriu de la paràbola). Nota tècnica sobre el primer:
  amb el mecanisme de `handEllipse`, cada crida genera la seva pròpia
  forma d'irregularitat (harmònics, fase i amplitud aleatoris), així
  que dues el·lipses mai seran perfectament concèntriques amb
  `irregularity` normal — calia baixar-lo molt (0.02 → 0.003), no
  ajustar-ne la fase.
- **Pipeline de publicació executat des dels fitxers reals** del
  projecte (no des d'una còpia de treball): `node docs/render.js` sobre
  `docs/glossari-figures.html` i `-clean.html` tal com queden després
  de l'edició, després `publish_figures.py` important-ne les funcions
  reals (`publish_one`/`erase_stamp_by_diff`/`whiten_background`), mai
  reimplementades.
- **Les 15 figures existents (g1..g15) comprovades pixel-idèntiques**
  abans i després de l'edició — render complet de l'arxiu original
  pristí comparat contra el render post-edició, 0 píxels de diferència
  en cap de les 15.
- **Les 14 PNG ja publicades comprovades byte-idèntiques** (`cmp`)
  contra l'arxiu original abans d'entregar.
- **Integritat de dades comprovada amb el motor real**: totes les
  referències `figura` de `glossari-dades.js` existeixen al disc (0
  trencades), cap fitxer a `assets/img/glossari/` sense referència (0
  orfes), 53/53 termes amb figura. `node --check` net sobre
  `glossari-dades.js` després de l'edició.
- `python3 verifica_projecte.py`: 35 comprovacions passades, l'únic
  error (`FALTA: build_preguntes_dades.py`) és preexistent i no
  relacionat — documentat com a arxivat, no cosa d'aquesta tasca.

## 4. Decisió de disseny pendent de confirmar

A `gloss-conica.png` la paràbola es dibuixa còncava cap avall, mentre
que a `gloss-teorema-tales.png`... no, perdó — a `gloss-parabola.png`
(el seu propi diagrama dedicat) es dibuixa còncava cap amunt. És una
inconsistència visual menor entre dues figures del mateix bloc temàtic
que es va detectar durant la revisió però no es va corregir perquè no
formava part dels canvis demanats explícitament. Queda anotada aquí per
si es vol uniformitzar en una propera ronda.
