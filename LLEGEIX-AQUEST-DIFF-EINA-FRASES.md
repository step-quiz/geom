# Diff — Fase A, els teus 3 canvis, i les dues decisions de vocabulari

    unzip -o geom-eina-frases-diff.zip -d ruta/al/geom-main/
    python3 verifica_projecte.py

Ja hi ha tot aplicat i tots els fitxers derivats regenerats. **No has
d'executar res més.** Verificat sobre una còpia neta: **55 comprovacions
passades, tot correcte**, i els dos avisos que queden són els mateixos de
sempre (ordre dels itineraris i DEPÈN de preguntes amagades). L'eina passa 36
proves automàtiques en un Chrome de veritat.

---

## 1. «tetraedre», sense accent

71 substitucions als fitxers de contingut: les dues guies que l'usaven
(`GUIES-LOT-3.md` 12, `GUIES-LOT-8.md` 12), `glossari-dades.js` (2),
`preguntes-dades.js` (1) i cinc solucions (q49 9, q56 12, q57 4, q81 8,
q82 11). Ara el projecte en té **93 sense accent i cap amb accent**.

He deixat fora **els documents de treball i els registres de canvis**
(`docs/*.md`, `NOTA-*.md`, `CANVIS-TRAM-*.md`). Aquells són el registre del
que es va fer i del que es va escriure aleshores; reescriure'ls seria
falsejar-lo. Si vols que també els unifiqui, s'hi va en un moment.

## 2. «homotècia», amb un matís que has de saber

Buscant-ho vaig trobar que **el projecte ja tenia la decisió presa i escrita**,
a `GUIES-LOT-8.md` i a `solucions/q77.html`:

> «En català aquella transformació es diu **homotècia**; "dilatació" és un fals
> amic —vol dir el que fan els metalls amb la calor.»

O sigui que «dilatació» era un calc de l'anglès *dilation* que s'havia colat
als enunciats. La teva decisió coincideix amb la regla que ja hi era.

**Però no totes les quatre volien la mateixa paraula.** Cadascuna ha pres la
que ja feia servir la seva pròpia solució:

| pregunta | deia | ara diu | per què |
|---|---|---|---|
| q91 | factor de dilatació | **factor d'escala** | és el títol de la seva solució |
| q92 | dilatacions | **homotècies** | la solució defineix homotècia allà mateix |
| q112 | dilatació | **estirament** | vegeu sota |
| q117 | dilatacions | **homotècies** | la guia diu «per factor 2 **uniforme**» |

**q112 no podia ser «homotècia».** Una homotècia multiplica totes les
longituds pel mateix factor, o sigui que porta una hipèrbola rectangular a una
altra de rectangular. Dir «tota hipèrbola és una homotècia d'una hipèrbola
rectangular» seria fals. Cal escalar cada eix pel seu factor: un **estirament**,
que és el que ja deia la seva solució i el que fa la guia del lot 10 («estirar
cada eix pel factor que cal»).

De passada, `solucions/q112.html` es contradeia amb ella mateixa: el títol i
l'`<h1>` deien «hipèrbola rectangular **dilatada**» mentre el text parlava
d'estirament. Corregit.

També he netejat el mateix fals amic a `GUIES-LOT-10.md` (5: tres eren
estiraments per eix, dos eren escalats uniformes), `solucions/q117.html` (2),
`solucions/q100.html` (1, a la meta description) i la nota interna
`_notaClassificacio` de q46 — l'àrea de l'el·lipse surt d'**estirar** un
cercle, no d'escalar-lo uniformement.

He deixat tres «dilata» a posta: el nom del fitxer de figura
`049_dilatacio_volum_cub.png` (canviar-lo trencaria el manifest i la imatge),
i les dues explicacions del fals amic, que necessiten la paraula per
explicar-la.

## 3. Els teus 3 canvis de q01

| camp | on ha anat |
|---|---|
| `PREGUNTES.q01.enunciat.ca` | `js/data/preguntes-dades.js` |
| `GUIES.q01.movimentTitol.ca` | `docs/guies/GUIES-LOT-4.md` → recompilat |
| `GUIES.q01.pistes[0].text.ca` | `docs/guies/GUIES-LOT-4.md` → recompilat |

Vas treure «tres» de dins d'una negreta, i **l'èmfasi de "tres punts
diferents" ara cobreix "punts diferents"**. Si el volies en un altre lloc,
digue-m'ho.

## 4. L'enunciat duplicat a solucions/, tancat

Cada `solucions/qNN.html` repeteix l'enunciat de la pregunta. N'hi havia 8 de
desacordats. Ara **no en queda cap**, i no es pot tornar a desacordar:

- `aplica-canvis.py` mou les dues còpies alhora quan canvia un enunciat;
- `verifica_projecte.py` compara les 117 a cada execució.

A part de q01 i dels quatre del vocabulari, n'hi havia dos més:

- **q09** — un error matemàtic real. La capçalera deia «si tallem un triangle
  rectangle en dos de més petits», sense dir que el tall és **l'altura sobre
  la hipotenusa**. Sense això l'afirmació és falsa. El cos ja parlava de la
  hipotenusa cinc vegades.
- **q03** — una redacció antiga que no sortia enlloc més del fitxer.

## 5. Fase A

`js/data/guies-dades.js` no és font: el fabrica `parse_guies.py` des dels nou
markdown de `docs/guies/`. 1.356 dels 1.704 camps de l'eina (el 80%) eren
d'aquesta mena i l'script hi escrivia a sobre, o sigui que es perdien.

- **A1** — els camps de guia porten l'etiqueta del fitxer d'origen.
- **A2** — `aplica-canvis.py` escriu al markdown original conservant negreta i
  cursiva, recompila, comprova que el resultat és exactament el que volies, i
  si no, ho desfà tot. Localitzador validat: 1.356 de 1.356 exactes. Prova
  massiva de 757 camps: 754 aplicats i verificats.
- **A3** — `verifica_projecte.py` refà la compilació en una carpeta temporal i
  avisa si la còpia i l'original divergeixen.

---

## Fitxers

**Nous (3)**

    aplica-canvis.py                 aplica el JSON de l'eina al projecte
    genera-solucions-dades.py        aplana solucions/*.html a un .js
    js/data/solucions-dades.js       generat pel de sobre

**Modificats a mà (10)**

    eina-frases.html                 6 bugs, fora l'anglès, solucions, A1
    verifica_projecte.py             2 comprovacions noves
    js/data/preguntes-dades.js       q01, vocabulari, tetraedre
    js/data/glossari-dades.js        tetraedre
    docs/guies/GUIES-LOT-3.md        tetraedre
    docs/guies/GUIES-LOT-4.md        els teus 2 canvis de q01
    docs/guies/GUIES-LOT-8.md        tetraedre
    docs/guies/GUIES-LOT-10.md       vocabulari
    solucions/*.html                 9 fitxers: q01 q03 q09 q49 q56 q57
                                     q81 q82 q100 q112 q117

**Regenerats (3)**

    js/data/guies-dades.js           parse_guies.py
    js/data/solucions-dades.js       genera-solucions-dades.py
    analitzador-geom.html            build_analitzador_geom.py
