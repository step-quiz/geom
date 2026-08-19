# Nota — millores del Glossari (4 troballes, totes tancades)

Resposta a quatre problemes concrets que l'owner va assenyalar amb
captures de pantalla reals de la interfície. Els quatre confirmats
contra el codi i les dades reals abans de tocar res — no assumits.

## 1. Espaiat de "Vegeu també"

**Causa real, no un descuit d'estil**: els botons de termes relacionats
només tenien un espai de text normal entre ells
(`rel.appendChild(document.createTextNode(" "))`), i el reset global de
botons del projecte (`button { border: none; ... }`) els deixava sense
cap marge propi. En una font monoespaiada i mida petita, un sol espai
és massa fràgil per llegir-ho còmodament.

**Correcció**: `padding`/`margin-right` reals a `.glossari-entry__relacionat`
(`css/components.css`); l'espai de text ja no fa cap falta i s'ha tret
de `js/ui/glossari.js`. **Un residu de sintaxi CSS que la meva pròpia
primera edició va deixar** (`}  padding: 0;\n}`) detectat i corregit
abans de continuar — comprovat que claus obertes i tancades de tot el
fitxer quadren (121/121) després.

## 2. Imatge trencada (cercle-inscrit / cercle-circumscrit)

Confirmat: `gloss-cercles-triangle.png` no s'havia publicat mai —
un bug real, ja detectat en una auditoria anterior del projecte, ara
tancat. Figura nova: un triangle escalè (mai equilàter, per no amagar
que incentre i circumcentre són punts diferents en general) amb totes
dues circumferències. **Incentre, inradi, circumcentre i circumradi
calculats numèricament** (mitjana ponderada pels costats oposats;
intersecció de mediatrius), no a ull — verificat que el circumradi
surt idèntic des dels tres vèrtexs abans de dibuixar-hi res.

## 3. Termes clicables dins de les pistes (Pista 1-4, mai el peu)

El mecanisme de detecció (`trobaTermes`) ja existia i funcionava bé,
però només s'aplicava a l'enunciat — el text de cada pista es pintava
amb una funció diferent (`afegeixParagrafs`) que escrivia text pla.

**Refactor, no reinvenció**: la lògica de marcatge de termes de
`pintaEnunciatAmbGlossari` s'ha extret a una funció compartida
(`marcaTermesGlossari`), reutilitzada ara també per `afegeixParagrafs`
mitjançant dos paràmetres nous, opcionals (`lang`, `ambGlossari`).
**Nomès el punt de crida dins de `revela()` (el text de cada Pista) els
passa** — el punt de crida del peu (comprovació + i-després) crida la
mateixa funció exactament igual que abans, sense els paràmetres nous,
tal com l'owner va demanar explícitament.

## 4. Reaprofitament de figures existents (19 → 26 de 53)

Revisades visualment (no per nom de fitxer) totes les figures candidates
abans d'assignar-ne cap. **Dos candidats descartats explícitament** per
no ser prou nets per a ús de glossari: un amb números concrets d'un
exercici (r=3, h=10), un altre deliberadament no circular per disseny
propi de "cilindre generalitzat" — cap dels dos representa la definició
estàndard del terme.

Set termes resolts, cadascun amb la seva pròpia figura al fitxer del
glossari (mai còpia directa d'una figura de guia — el glossari és
sempre tinta sola, les guies tenen tinta/sanguina):

| Terme | Font d'inspiració | Nota |
|---|---|---|
| poliedre | fig-136 (Part 1, q08b) | mateixes coordenades exactes dels 5 sòlids platònics |
| ellipse | fig-151 (Part 1, q46) | mateixa construcció exacta |
| tetraedre | fig-163 (Part 1, q81) | mateixa construcció exacta |
| esfera | fig-154 (Part 1, q61) | meitat esquerra, redibuixada sola |
| cilindre | fig-154 (Part 1, q61) | meitat dreta, redibuixada sola |
| sector-circular | fig-030 (guia, q51) | redibuixat només en tinta (l'original fa servir sanguina, conveni de guia que no aplica aquí) |
| principi-de-cavalieri | fig-031 (guia, q53) | mateixa construcció, marca de secció en tinta |

**Tres bugs reals trobats i corregits durant la revisió**, cap donat
per bo a la primera:
- Un bug de signe genuí al sector circular: l'arc i els segments rectes
  dels seus extrems feien servir convencions de coordenades incoherents
  entre ells (`-R*sin` vs. l'arc calculat directament pel canvas), que
  deixava només un fragment visible en lloc del sector complet.
- Diverses figures tallades pel marge (poliedre: cub/octaedre massa
  junts i l'octaedre tallat per dalt; cilindre i el cilindre inclinat
  de Cavalieri, tots dos ajustats fins caber sencers).

## 5. Verificació

- **Espaiat i imatge trencada**: comprovat que les altres 6 figures del
  glossari no s'han vist afectades (comparació píxel a píxel).
- **Termes a pistes**: Playwright sobre les **130 guies senceres** —
  101 termes detectats en total dins de pistes, **0 al peu, a totes
  130, sense excepció**.
- **Les 7 figures noves**: publicades amb el pipeline real; confirmat
  que les 8 figures de glossari anteriors (incloent-hi la de cercle-
  inscrit/circumscrit, ja corregida) no s'han vist afectades.
- **`glossari-dades.js`**: comparat camp a camp contra la versió
  anterior — confirmat que només els 7 camps `figura` esperats han
  canviat, cap altre terme ni cap altre camp tocat.
- `python3 verifica_projecte.py` → `Tot correcte.`
- **Les 7 figures noves, confirmades funcionant una per una pel seu
  nom exacte** dins de la interfície real (cerca al panell, obertura de
  l'entrada, imatge carregant amb `naturalWidth > 0`) — dos falsos
  negatius del meu propi script de prova (clicar el primer resultat
  d'una cerca amb diverses coincidències; un overlay ja obert
  bloquejant un clic) detectats i descartats com a errors propis, no
  del producte, abans de donar-los per bons.

## 6. Pendent, fora d'abast d'aquest lliurament

27 dels 53 termes encara no tenen figura. Se n'han descartat 2 dels
candidats revisats per no ser prou nets; la resta probablement es
reparteix entre uns quants més reaprofitables i una majoria que
necessitarà dibuix nou — no revisat encara, a petició explícita de
l'owner de limitar aquesta sessió al reaprofitament.

## 7. Fitxers d'aquest lliurament

```
css/components.css                       espaiat "Vegeu tambe"
js/ui/glossari.js                        espai de text sobrer eliminat
js/ui/detall.js                          marcaTermesGlossari compartida, afegeixParagrafs amb 2 params nous
docs/glossari-figures.html / -clean.html figura g8 corregida + 7 figures noves (g9-g15)
assets/img/glossari/gloss-cercles-triangle.png    nova (bug corregit)
assets/img/glossari/gloss-poliedre.png            nova
assets/img/glossari/gloss-ellipse.png             nova
assets/img/glossari/gloss-tetraedre.png           nova
assets/img/glossari/gloss-esfera.png              nova
assets/img/glossari/gloss-cilindre.png            nova
assets/img/glossari/gloss-sector-circular.png     nova
assets/img/glossari/gloss-cavalieri.png           nova
js/data/glossari-dades.js                7 camps figura omplerts
docs/guies/NOTA-GLOSSARI-MILLORES.md     aquest fitxer
```
