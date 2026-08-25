# Prova escrita — el codi de l'alumne i el generador d'examen

Un alumne pot demanar de fer un **examen presencial en paper** sobre les
preguntes que ha treballat al lloc. Aquest document explica com funciona i què
cal saber per mantenir-ho. La visió de conjunt és a `README.md`, secció "Prova
escrita a partir del que s'ha explorat".

> Fins a l'auditoria de documentació d'ago. 2026, aquest fitxer era la nota
> d'instal·lació del ZIP que va portar la funcionalitat («descomprimeix-lo a
> sobre del teu geom-main», «3 fitxers nous, 4 modificats»). Un cop aplicat, la
> llista de fitxers modificats ja no volia dir res: el repositori *és* l'estat
> resultant. Ara descriu la funcionalitat, no el lliurament.

## El flux

1. A la llista de preguntes, l'alumne clica **«Copia el meu codi»** i obté una
   línia:

       GEO1-q01,q05,q08a,q22,q41

2. Te l'envia com vulgui: WhatsApp, correu, una casella de resposta curta d'un
   formulari. És una línia, no un adjunt, precisament per això.

3. Obres `analitzador-geom.html`, hi enganxes el codi, tries 1, 2 o 3 preguntes
   i imprimeixes. Surt l'enunciat i la figura reals, sense opcions, amb espai
   per respondre a mà.

Tot passa dins del navegador. No hi ha servidor, ni connexió, ni cap petició de
xarxa: coherent amb la resta del projecte.

## Peces

| Fitxer | Què és |
|---|---|
| `js/ui/llista.js` | `formataCodi()` genera la cadena; `copiaCodi()` la copia i la deixa visible; `descarregaFitxer()` és la sortida secundària en `.txt` |
| `js/i18n/ui-strings.js` | els textos del botó, en anglès i català |
| `css/components.css` | `.export-explorades__*` |
| `analitzador-geom-plantilla.html` | la font del generador — **és aquí que s'edita** |
| `build_analitzador_geom.py` | el compila a `analitzador-geom.html` |
| `analitzador-geom.html` | **generat, no editar a mà** |

## Regenerar

    python3 build_analitzador_geom.py

Cal fer-ho **cada cop** que canviïn els enunciats, les imatges d'enunciat o la
llista `EXERCICIS_AMAGATS`. El script llegeix `js/data/preguntes-dades.js` i
extreu `EXERCICIS_AMAGATS` de `js/ui/llista.js` amb una expressió regular: si
aquella constant canvia de nom o de forma, peta amb un missatge clar en lloc de
generar un analitzador silenciosament incomplet.

## Decisions que no són arbitràries

**Una línia, no un fitxer.** El camí real és enganxar, no adjuntar. La
descàrrega del `.txt` es manté perquè un alumne amb moltes preguntes fetes
potser la prefereix, i l'analitzador segueix llegint aquell format.

**El camp de només lectura no és redundant amb la còpia.**
`navigator.clipboard` pot fallar (permisos, navegador antic, context que no
compta com a segur). Per això el camp es pinta sempre i és la còpia el que pot
fallar, no a l'inrevés; quan falla, el text es selecciona tot sol perquè només
calgui Ctrl+C.

**El lector és tolerant a propòsit.** El codi passa per canals que el
maltracten. S'accepten majúscules (el corrector del mòbil escriu `Q01`), comes,
punts i coma, espais, tabuladors, salts de línia, espais durs de WhatsApp, BOM,
el prefix enganxat o separat, i el fitxer del format antic. El que **no** es
perdona és un id que no existeix: es filtra, i **es diu quants se n'han
ignorat**, per si el codi s'ha copiat a mitges. Una prova més curta del que el
professorat esperava no ha de sortir en silenci.

**`esInvertida` i `esCrop` no són decoració.** La figura de `q42` és traç clar
sobre fons fosc (94 % de píxels foscos, lluminositat mitjana 15/255): sense
`filter:invert(1)` el full que surt de la impressora és un rectangle negre. Els
set retalls de pàgina (`q31`, `q76`, `q78`, `q79`, `q105`, `q107`, `q114`) són
del PDF, amb traç fi: encongits deixen de llegir-se. Tots dos casos es tracten
igual que al lloc.

**Les imatges van incrustades en base64.** Les 116 de les preguntes visibles.
El fitxer passa d'uns 120 kB a uns 5 MB, i a canvi es pot desar a l'escriptori
sense la carpeta del projecte al costat. Sense això, "fitxer únic" era mentida:
n'hi havia prou amb moure'l perquè totes les figures donessin 404, i una
pregunta de geometria sintètica sense la seva figura no es pot ni llegir.

**Les figures s'imprimeixen a 420 px**, no a 260. Tot el projecte es basa en
"el negre és la figura, la sanguina és el que hi afegeixes tu"; sobre una
miniatura no s'hi pot afegir res.

**Cap control anti-frau, i és deliberat.** Aquí no hi ha nota que es pugui
falsejar. La llista és una declaració de l'alumne, no una verificació: l'examen
comprova què sap fer avui, no què va fer al lloc. Les preguntes
d'`EXERCICIS_AMAGATS` sí que es filtren sempre, encara que l'alumne hi hagi
entrat per enllaç directe.

## Comprovacions

`verifica_projecte.py` (§13) vigila que el prefix del codi sigui el mateix a
`llista.js` i a la plantilla — si algú el canvia en un sol lloc, els codis dels
alumnes deixen de llegir-se i el símptoma (una prova buida) no assenyala la
causa —, que el camp de reserva hi sigui, que les figures rebin `esInvertida` i
`esCrop`, que la plantilla tingui els tres forats del build, i que els textos
nous siguin als dos idiomes.
