# Diff — eina-frases.html: 6 errors, fora l'anglès, i el cicle tancat (ago. 2026)

Només fitxers nous o modificats, amb la jerarquia intacta.

    unzip -o geom-eina-frases-diff.zip -d ruta/al/geom-main/
    python3 genera-solucions-dades.py     # si no fies del .js que ve al zip
    python3 verifica_projecte.py

Verificat: original + aquest diff dona **53 comprovacions passades, tot
correcte** (les mateixes 53 i els mateixos 2 avisos que abans), i l'eina
passa 36 proves automàtiques en un Chrome de veritat sobre `file://`.

El nom del fitxer no és `LLEGEIX-AQUEST-DIFF.md` a posta: aquell ja existeix
i explica l'auditoria de documentació anterior. Aquest no el trepitja.

## Nou (4)

    aplica-canvis.py                 aplica el JSON exportat per l'eina als
                                     fitxers de dades, sense reescriure'ls
    genera-solucions-dades.py        aplana solucions/qNN.html a un .js
    js/data/solucions-dades.js       generat pel de sobre (117 solucions,
                                     602 passos, 398 KB)
    LLEGEIX-AQUEST-DIFF-EINA-FRASES.md   aquesta nota

## Modificats (1)

    eina-frases.html                 tot el que hi ha a sota

---

## Els sis errors

**1. La cerca no arribava a la major part del text.** El `placeholder` promet
"Cerca dins de totes les frases", però d'una pregunta només s'hi indexava
l'enunciat: les 4 pistes, la comprovació i l'"i després" quedaven fora. En 133
de les 199 fitxes el text indexat cobria menys de la meitat del que es veu.
Ara s'indexa tot el que hi ha a la fitxa (solució inclosa) i amb el valor
**actual**, no l'original: si has reescrit una frase, la trobes pel text nou.
La cobertura passa de 66 a 199 de 199 fitxes.

**2. Importar una còpia de "Desa tot" donava conflictes falsos.** Un camp que
no havies tocat viatja al JSON amb `original === actual`. Si mentrestant
aquell text havia canviat al projecte, entrava al primer filtre i queia al
segon com a conflicte, tot i que no l'havies editat mai. Amb un tram de
correccions aplicat pel mig, una còpia de seguretat generava desenes de
conflictes inventats. El camp `canviat` ja era al payload i no es feia servir;
ara sí. A sobre, si ja tens feina al navegador, la importació pregunta si vols
**substituir** o **fusionar** — abans només fusionava, i una edició desfeta en
un ordinador seguia viva a l'altre.

**3. `itemHasEdits()` mirava si la clau existia, no si el valor havia
canviat.** La resta del codi compara valors. Les dues coses divergeixen just
després d'aplicar els canvis al projecte: el codi ja porta el teu text,
l'export de canvis (correctament) ja no l'inclou, però la fitxa es quedava
marcada "editada" per sempre i el comptador la seguia sumant. Ara compara
valors, i en carregar es poden les edicions desades que el projecte ja porta i
les que ja no corresponen a cap camp.

**4. El text llarg quedava tallat i no es podia desplaçar.** `max-height:520px`
amb `overflow-y:hidden`: `GUIES.q121.pistes[3].text.ca` fa 2.027 caràcters i
se n'anava molt per sobre, i en finestra estreta hi queien uns 38 camps. Ara
`overflow-y:auto` i `max-height:60vh`.

**5. La barra lateral no seguia la fitxa seleccionada.** "Següent pendent"
saltava de la fitxa 5 a la 120 i la llista es quedava dalt de tot. Ara hi ha
`scrollIntoView`, i les files es poden recórrer amb ↑/↓ i obrir amb Retorn.

**6. Una excepció dins de `buildAllItems()` deixava la pàgina en blanc i
muda.** `init()` no la capturava i `showDataError()` només cobria el cas dels
globals absents. Ara l'extractor va tot amb guardes, els problemes s'acumulen
i surten en un avís a dalt sense deixar de funcionar, i si tot i així peta,
la pantalla d'error mostra el detall tècnic. Provat: esborrant les `pistes` i
la `comprovacio` d'una guia, l'eina segueix construint les 199 fitxes i ho
reporta.

També: `NaN%` al progrés si mai no hi hagués cap fitxa, `aria-expanded` a
l'ajuda, i avís en tancar si hi ha edicions posteriors a l'última exportació
(sota `file://` amb el Firefox l'autodesat no funciona i el JSON és l'única
còpia real).

## Fora l'anglès

L'eina ja no mostra ni deixa editar cap text en anglès: ni `UI_LANGS.en.*`, ni
l'enunciat original del llibre, ni les formes angleses del glossari. Els
textos segueixen als fitxers de dades i no els toca ningú des d'aquí.

Els camps editables passen de 1.796 a 1.704, i **els 92 que desapareixen són
exactament tots els `UI_LANGS.en.*`**: cap altre `path` canvia. Els JSON que
ja tinguis exportats i el `localStorage` segueixen sent compatibles — els
camps anglesos sortiran com a "ja no existeixen en aquesta versió".

## La solució al costat de la guia

Al final de cada pregunta hi ha ara la solució publicada, plegada, no
editable, i indexada per la cerca. El motiu és del propi projecte:
`docs/revisio-matematica/extreu-per-revisar.py` ja avisava que repassar la
guia i la solució per separat és com se't cola que es contradiguin, i és el
que va passar a q05/q07, q33, q37, q57, q60, q69 i q83.

El text ve de `js/data/solucions-dades.js`, generat des de `solucions/*.html`.
És un `.js` amb una global i no un `.json` amb `fetch()` pel mateix motiu que
la resta de `js/data/`: el lloc s'ha de poder obrir amb doble clic sobre
`file://`, on `fetch()` queda bloquejat per CORS.

**Cal regenerar-lo cada cop que es toqui res de `solucions/`.** Si no, l'eina
ensenyarà la versió vella i et pot fer buscar una contradicció que ja no hi
és. No fa cap mal a `solucions/`: és una còpia de només lectura.

Les 13 preguntes sense fitxer de solució (q18a, q18b, q19, q20, q21, q24, q34,
q35, q67, q83, q88, q102 i q106) ho diuen a la fitxa i a la llista de
metadades.

## El camí de tornada

`aplica-canvis.py` agafa el JSON que exporta l'eina i l'escriu als fitxers de
dades. Fins ara aquest pas era manual, que és on s'hi colen els errors.

    python3 aplica-canvis.py CANVIS.json            # simulacre, no toca res
    python3 aplica-canvis.py CANVIS.json --aplica
    python3 verifica_projecte.py

**No reescriu els fitxers.** `glossari-dades.js`, `demos-dades.js` i
`ui-strings.js` no són JSON vàlid (claus sense cometes, comes finals), i el
format escrit a mà i les capçaleres de comentari són part del valor del
repositori. L'script els recorre amb un lector de tokens que entén cadenes i
comentaris, calcula el camí exacte de cada literal
(`GUIES.q01.pistes[0].text.ca`, i tradueix `PREGUNTES.q01` a la posició real
de l'array) i canvia **només els caràcters d'aquell literal**. La resta del
fitxer queda byte a byte igual.

Abans d'escriure comprova que el text que hi ha ara al fitxer és idèntic al
camp `original` del JSON. Si no ho és, no aplica: ho llista perquè ho miris.
Per defecte, si hi ha cap problema no toca res; amb `--parcial` aplica la
resta.

Provat amb 11 canvis repartits pels 7 fitxers de dades, amb cometes dobles,
guillemets, salts de línia, barres invertides, tabuladors i accents: 11 de 11
valors escrits exactament, els fitxers només canvien a les línies previstes, i
`verifica_projecte.py` segueix donant 53 comprovacions passades.
