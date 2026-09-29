# Notes d'instal·lació de lliuraments antics

Aquesta carpeta guarda les notes que acompanyaven alguns ZIP de lliurament
("descomprimeix-lo sobre l'arrel", "comprova que verifica_projecte.py
digui..."). Vivien a l'arrel del repositori, on es barrejaven amb la
documentació que descriu l'estat actual; des del set. 2026 viuen aquí.

Són **registre**, no instruccions: cada una descriu un lliurament que ja està
aplicat. No cal seguir-ne cap pas.

| Fitxer | Lliurament |
|---|---|
| `LLEGEIX-AQUEST-DIFF.md` | auditoria de documentació i comentaris (ago. 2026) |
| `LLEGEIX-AQUEST-DIFF-EINA-FRASES.md` | eina de frases: solucions editables i vocabulari |
| `LLEGEIX-ME-REVISIO-MATEMATICA.txt` | revisió matemàtica completa + q84/q87/q88 publicades |

Els tres `CANVIS-TRAM-0N` (01, 02, 03) que també hi havia a l'arrel eren còpies
idèntiques (comprovat byte a byte) dels de `docs/revisio-matematica/`, on hi
ha la sèrie sencera (01–12): s'han esborrat de l'arrel, no s'ha perdut res.

Des del set. 2026 els lliuraments ja no necessiten una nota d'instal·lació
a l'arrel: la GitHub Action d'uploads descomprimeix, esborra el que demani
`_ESBORRA.txt`, regenera i verifica sola (v. `README.md`, "Com arriben els
canvis al repositori"). La nota tècnica de cada lliurament continua anant a
`docs/guies/NOTA-*.md`.
