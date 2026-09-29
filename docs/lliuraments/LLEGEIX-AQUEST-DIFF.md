# Diff — auditoria de documentació i comentaris (ago. 2026)

Només fitxers nous o modificats, amb la jerarquia intacta.

    unzip -o geom-doc-diff.zip -d ruta/al/geom-main/

Verificat: original + aquest diff, `python3 verifica_projecte.py` dona
**52 comprovacions passades, tot correcte** (n'eren 50), i el lloc arrenca
i genera el codi de l'alumne amb normalitat.

## Nou (1)

    docs/guies/NOTA-AUDITORIA-DOCUMENTACIO.md   la nota de lliurament,
                                                amb tot el que s'ha trobat

## Modificats (11)

Documentació:

    README.md                        xifres del glossari i de Pista 2, bloc
                                     "Estructura" reescrit, dues seccions
                                     noves (itineraris temàtics, prova escrita)
    HANDOFF-COLD-START.md            taula d'estat, llista cronològica de
                                     notes, pendents, referència d'arquitectura
    COORDINACIO-AGENTS-SOLUCIONS.md  l'error de les 15 amagades, secció sol.html
    LLEGEIX-ME.md                    reescrit: descriu la funcionalitat, ja no
                                     és la nota d'instal·lació d'un ZIP aplicat
    docs/DOCUMENTS-DE-DISSENY.md     segona taula amb 7 documents morts que
                                     només citaven les notes entre elles

Només comentaris — **cap línia de codi executable canviada**, verificat
comparant els fitxers amb els comentaris despullats:

    js/ui/llista.js              capçalera (deia "main.js, pas 5, pendent")
    js/nucli/router.js           "encara no construït"
    js/nucli/progres.js          "encara no construït"
    js/data/glossari-dades.js    esquema del camp `figura`
    build_analitzador_geom.py    referència creuada al projecte germà

L'única excepció, i és a propòsit:

    verifica_projecte.py         §10 ampliada (ja no salta ./docs) i §14
                                 nova (xifres a la prosa, mòduls sense
                                 documentar). 48 -> 51 comprovacions +
                                 la del propi document nou = 52

## Què NO s'ha tocat

Cap `.png`, cap `js/data/*-dades.js` pel que fa a dades, cap comportament.

`docs/manifest-figures.tsv` es queda com està: la seva columna `nivell` va
desfasada en 69 de 162 files, però `id`, `moviment` i `lot` hi coincideixen
al 100 % i són les que fa servir el projecte. Renumerar-la era risc sense
guany; queda documentat al README i al HANDOFF que la font de veritat per
saber a quina pista viu una figura és `js/data/guies-dades.js`.
