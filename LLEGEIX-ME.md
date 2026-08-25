# Prova escrita per a geom — codi de l'alumne + generador d'examen

Descomprimir a sobre del teu `geom-main` original:

    unzip -o geom-prova.zip -d ruta/al/geom-main/

Verificat: original + aquest diff, `python3 verifica_projecte.py` dona
**50 comprovacions passades, tot correcte** (n'eren 45).

## El flux

1. L'alumne clica **«Copia el meu codi»** a la llista de preguntes.
   Obté una línia i la pot enganxar on vulgui:

       GEO1-q01,q05,q08a,q22,q41

2. Te l'envia per WhatsApp, correu, o una casella de formulari.

3. Obres `analitzador-geom.html`, l'enganxes, tries 1/2/3 preguntes
   i imprimeixes.

## Fitxers

### Nous (3)

    analitzador-geom-plantilla.html   font de l'analitzador (s'edita aquí)
    build_analitzador_geom.py         python3 build_analitzador_geom.py
    analitzador-geom.html             GENERAT — el que obres tu

### Modificats (4)

    js/ui/llista.js          botó «Copia el meu codi» + camp de reserva
    js/i18n/ui-strings.js    textos nous, als dos idiomes
    css/components.css       estil del camp del codi i de l'enllaç al fitxer
    verifica_projecte.py     5 comprovacions permanents (v. més avall)

## Què s'ha arreglat respecte de la proposta anterior

**Codi d'una línia en lloc d'un fitxer.** El camí principal ara és copiar
i enganxar. La descàrrega del `.txt` es manté com a opció secundària, i
l'analitzador segueix llegint els fitxers del format antic.

**El lector aguanta el maltractament dels canals.** Provats 15 casos:
majúscules del corrector del mòbil (`Q01`), espais després de les comes,
salts de línia que hi posa el correu, espais durs de WhatsApp, BOM,
punts i coma, sense prefix, i el fitxer antic. Tots passen. Si un id no
existeix (codi copiat a mitges), **es diu** en lloc d'ignorar-lo en
silenci: la prova es genera igualment però amb l'avís de quants s'han
perdut.

**La q42 ja no s'imprimeix com un rectangle negre.** La seva figura és
traç clar sobre fons fosc (94 % de píxels foscos, lluminositat mitjana
15/255). El lloc l'inverteix amb `filter:invert(1)`; ara la prova també.

**Els set retalls de pàgina es poden llegir.** q31, q76, q78, q79, q105,
q107 i q114 són retalls del PDF amb traç fi; a 260 px q107 quedava en
260×80. Ara van a amplada plena amb fons crema, com al lloc.

**L'analitzador és autònom de debò.** Les 116 imatges de les preguntes
visibles van incrustades en base64. Passa de 123 kB a 5,0 MB, i a canvi
el pots desar a l'escriptori i oblidar-te de la carpeta del projecte.
Provat: copiat sol a una altra carpeta, les figures hi surten.

De passada, les figures s'imprimeixen a 420 px en lloc de 260: en un
projecte que es basa en «el negre és la figura, la sanguina és el que hi
afegeixes tu», sobre una miniatura no s'hi pot afegir res.

## Comprovacions permanents

`verifica_projecte.py` ara vigila que el codi que copia l'alumne i el
lector de l'analitzador comparteixin prefix (si algú el canvia en un sol
lloc, els codis deixen de llegir-se i el símptoma no assenyala la
causa), que el camp de reserva hi sigui per si el porta-retalls falla,
que les figures rebin `esInvertida` i `esCrop`, i que els textos nous
siguin als dos idiomes. La comprovació de `esInvertida` s'ha provat
injectant-hi la regressió: la detecta.

## Regenerar

Cada cop que publiquis preguntes noves:

    python3 build_analitzador_geom.py
