# Nota de lliurament — Lot 2

## 1. Què hi ha

Figures 014–021 (8 figures, una per guia). Preguntes: q13, q42, q86, q23,
q10, q97, q98, q45. Moviments fets servir: `redueix-al-conegut`,
`distingeix-casos`, `contraexemple`, `dues-maneres`, `simetria-i-demostra`,
`reflexio`, `construeix-per-definir`, `desenrotlla`.

Totes vuit depenen explícitament d'una guia del lot 1 (o, en el cas de q98,
del q97 d'aquest mateix lot) — cap és una entrada nova independent. Ho vas
demanar tu mateix a l'aprovació: proposar la llista abans de dibuixar, i
sobre això no hi ha canvis respecte al que vas aprovar.

## 2. Moviments nous afegits al vocabulari

- **`distingeix-casos`** (q42). Diferent de `cas-limit` (que la llista de
  candidats ja anticipava): aquí no hi ha un cas extrem que es comporta
  diferent, sinó que el MATEIX argument es parteix en dues variants segons
  la configuració (el diàmetre traçat cau dins o fora de l'angle), i totes
  dues variants arriben a la mateixa fórmula final. Calia un nom que no fos
  `cas-limit` perquè no hi ha res "límit" en cap dels dos casos.
- **`construeix-per-definir`** (q98). Cap dels dotze moviments del lot 1
  cobreix "la construcció física és la demostració, perquè fabrica la
  condició per definició, no per deducció". Diferent d'`identitat-com-a-figura`
  (que tradueix una identitat ja coneguda a un dibuix): aquí no hi ha cap
  identitat prèvia — la construcció defineix la corba, no en verifica una
  propietat.
- **`desenrotlla`** (q45). Ja anticipat a la llista de candidats del brief
  original; s'afegeix tal com estava previst.

## 3. Coses de les quals no estava segur, per número de figura

- **fig-015 (q42):** l'enunciat original ("two points are connected to the
  same arc") no diu explícitament que la corda AB sigui fixa mentre P i Q es
  mouen — ho he assumit perquè és l'única lectura que fa la pregunta certa
  (si AB també canviés, l'angle no tindria per què mantenir-se). Val la pena
  que ho confirmis contra el text del llibre.
- **fig-016 (q86):** he triat jo els números concrets (angle 30°, costats 8
  i 5) perquè donessin un discriminant net (36) a la comprovació. Si el
  llibre ja proposa una configuració numèrica pròpia per a aquesta pregunta,
  potser convé fer-la servir en lloc de la meva perquè guia i llibre no es
  contradiguin.
- **fig-020 (q98):** és l'única figura d'aquest lot sense cap escaneig
  d'origen (q98 no té `imatge` a les dades). L'he dissenyada jo del tot,
  incloent-hi l'el·lipse de fons — no hi ha "configuració del llibre" amb
  què contrastar-la. Si el llibre mostra realment el dibuix del fil i els
  punxons, val la pena comparar-hi la meva versió.
- **q13 i q14, ordre:** com ja et vaig assenyalar abans de dibuixar,
  q13 (p. 34) precedeix q14 (p. 36) al llibre, però q14 ja és guia 2 del
  lot 1. He escrit la guia de q13 com un reforç explícit del moviment de
  q14 ("la peça que ja vas fer servir sense dir-la"), no com un requisit
  previ. Si prefereixes que el lloc mostri q13 ABANS de q14 en algun ordre
  visible a la UI, avisa-m'ho — ara mateix l'ordre de la UI és per
  `dificultat`/`dimensio`, no pel meu ordre de guies, així que no hi ha
  conflicte tècnic, només narratiu.

## 4. Dificultats que sospito mal registrades (recordatori de l'entrega anterior)

Mantinc les dues sospites que ja vaig assenyalar en proposar la llista,
ara amb el raonament complet escrit dins les guies mateixes:

- **q42, registrada com a dificultat 2:** l'argument necessita partir-se en
  dos casos (fig-015, Pista 3) i encara no hi he trobat una manera de
  presentar-lo sense aquesta bifurcació. Jo la pujaria a 3.
- **q86, registrada com a dificultat 2, igual que q08c:** el propi "i
  després" de q08c ja l'anomena "un contraexemple molt més subtil" que el
  de q08c. Costa creure que totes dues mereixin la mateixa dificultat.

## 5. Regles aplicades que venen de revisió prèvia

- Cap construcció auxiliar en negre: verificat guia per guia (§3.1 del
  document tècnic).
- Segments llargs amb `wobble` reduït allà on porten una tangència: aplicat
  als dos diàmetres de fig-017 (q23), que sostenen la tangència del cercle
  petit (regla de §1.4/§3.3 del document tècnic).
- Punts dependents llegits del traç real, no de la geometria ideal: el punt
  mitjà i el peu de l'alçada de fig-014, i els dos punts de contacte de
  fig-019, es calculen amb `pointAtT` sobre el segment ja dibuixat, no amb
  el punt mitjà algebraic (§4.2 del document tècnic).
- Número de producció estampat a totes vuit figures, gris, marge inferior
  esquerre, sense tocar la geometria (§5.2 del brief — la correcció que
  demanava aquest mateix lliurament).

## 6. Res del llibre que no hagi pogut resoldre

Cap, per a aquestes vuit. q42 té la incertesa d'assumpció anotada al punt 3
de dalt, però no és una ambigüitat de l'escaneig — l'escaneig (q42) és net
(un cop tenint en compte que ve invertit, com ja sabíeu del catàleg
`esInvertida`).

## 7. Fitxers d'aquest lliurament

```
lliurament-02/
  figures/fig-014.png … fig-021.png
  contactes-02.png
  GUIES-LOT-2.md
  manifest.tsv          (acumulatiu, files 001–021)
  NOTA-LLIURAMENT.md    (aquest fitxer)
  figures-02.html       (font que regenera les 8 figures)
```

`figures-02.html` carrega `hand-draw.js` (el pedaçat, `eines/`) i `comu.js`
sense cap modificació — no hi ha res a fusionar de nou en aquests dos
fitxers.
