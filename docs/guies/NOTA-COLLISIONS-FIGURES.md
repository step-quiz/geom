# Nota — resolució de les 11 col·lisions de número de figura

Seguiment de `next_figure_number.py` (`docs/guies/NOTA-*` de la ronda
anterior): l'script va trobar 11 números que apareixien duplicats en dos
fitxers font diferents (028, 045, 048, 050, 052, 101, 103, 104, 105, 108,
109). En investigar-los un per un, van resultar ser **dos bugs diferents**,
no un de sol.

## Grup A — contingut realment obsolet (5 casos)

`028` (a `figures-03.html`), `045`, `048`, `050`, `052` (a `figures-04.html`).

En aquests casos el comentari i el `stampNum()` del bloc coincidien entre
si (p. ex. `/* fig-028 -- q52... */` amb `stampNum(ctx,...,'028')`), però
el dibuix ja no era el que hi ha publicat a `assets/img/pistes/`. El
manifest confirma la sospita: totes cinc tenen `rev` 1 o 2 (revisades
almenys un cop). En algun moment es va redibuixar una versió millor i es
va desar correctament a `figures-05.html` (mateix número, tal com mana la
regla "un número és permanent") — però l'intent original no es va
esborrar mai de `figures-03.html`/`figures-04.html`.

**Resolt eliminant els 5 blocs obsolets** (i els seus bessons a
`figures-03-clean.html` / `figures-04-clean.html`) — no calia tocar
`figures-05.html`, que ja tenia el contingut correcte.

## Grup B — número mal escrit, contingut correcte (6 casos)

`101, 103, 104, 105, 108, 109`, tots dins `figures-10.html`.

Aquí la investigació va donar un resultat diferent: el contingut d'aquests
sis blocs **ja és exactament el que hi ha publicat** — però amb un altre
número. Cada bloc té el seu propi comentari correcte
(`/* fig-118 -- q113... */`, `/* fig-120 -- q116... */`, etc.) que NO
coincidia amb el número que la seva pròpia crida `stampNum()` imprimia
—un clàssic error de copiar-enganxar el bloc anterior sense actualitzar
el número final. El manifest i els fitxers ja publicats (`fig-118.png`,
`fig-120.png`, `fig-121.png`, `fig-122.png`, `fig-125.png`, `fig-126.png`,
tots existents i comprovats píxel a píxel) confirmen quin era el número
real de cadascun.

**Resolt corregint només la crida `stampNum()`** de cada bloc (i el seu
bessó a `figures-10-clean.html`) — **no s'ha esborrat cap contingut**,
perquè no n'hi havia cap de duplicat de veritat:

| Canvas | Número equivocat | Número correcte |
|---|---|---|
| i3 | 101 | 118 |
| i5 | 103 | 120 |
| i6 | 104 | 121 |
| i7 | 105 | 122 |
| i10 | 108 | 125 |
| i11 | 109 | 126 |

## Verificació

- Renderitzat `figures-03/04/10.html` abans i després de cada canvi;
  comparades píxel a píxel TOTES les altres figures de cada fitxer (les
  que no s'havien de tocar) — cap efecte secundari.
- Els 6 blocs del Grup B, un cop corregit el número, comparats contra el
  seu PNG publicat corresponent: diferència mitjana ~10.5-10.9 (el mateix
  ordre que dona sempre l'esborrat de segell + fons blanc, no un dibuix
  diferent).
- `python3 next_figure_number.py`: zero col·lisions (`‼️`) — abans en
  mostrava 11. Següent número lliure: **217** (sense canvis, ja ho era
  abans d'aquesta neteja).
- `python3 verifica_projecte.py` → `Tot correcte.` (36 comprovacions).

## Fitxers d'aquest lliurament

```
docs/guies/figures-03.html / -clean.html    bloc fig-028 obsolet eliminat
docs/guies/figures-04.html / -clean.html    blocs fig-045/048/050/052 obsolets eliminats
docs/guies/figures-10.html / -clean.html    stampNum corregit a 6 blocs (contingut intacte)
next_figure_number.py                       missatge de diagnòstic actualitzat (ja no
                                             esmenta 118/120-122/125/126 com a "no explicats")
docs/guies/NOTA-COLLISIONS-FIGURES.md       aquest fitxer
```

Cap fitxer d'`assets/img/` canvia en aquest lliurament: els PNG ja
publicats eren correctes des del principi: el problema vivia només al
codi font, no al lloc en producció.
