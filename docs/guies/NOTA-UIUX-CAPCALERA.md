# Nota — UI/UX de la capçalera: 4 canvis

Resposta directa a quatre peticions concretes de l'owner. Cadascuna
confirmada contra el codi real abans de tocar-la (dues d'elles tenien
una complicació que calia resoldre bé, no assumir-la).

## 1. Suprimit: eyebrow "Preguntes extretes d'un llibre..."

**Complicació trobada abans de tocar res**: `nav.source_note` (la clau
d'aquest text) s'usava en **dos llocs diferents**, no un — l'eyebrow de
la capçalera (`index.html`, el que calia suprimir) i, reaprofitat, com
a missatge de "cap resultat" quan un filtre no troba cap pregunta
(`js/ui/llista.js`). Suprimir-lo sense pensar-hi hauria trencat aquest
segon ús. Solució: **clau pròpia i dedicada** (`list.no_results`, en
i ca), i `llista.js` actualitzat perquè hi apunti — cap reaprofitament
fràgil.

## 2. Suprimit: "130 preguntes" (comptador de la capçalera)

El comptador dinàmic ("130 preguntes", canvia amb els filtres actius,
`list.question_count`) es queda intacte — és informació útil i canvia
de veritat amb els filtres. El que s'ha eliminat és l'eyebrow estàtic
de dalt de tot (v. punt 1), que era el text de context fix, no aquest
comptador.

## 3. Suprimit: botó d'idioma i "Català" — sense perdre cap capacitat

**Verificat abans de tocar res**: el mecanisme de resolució automàtica
d'idioma (`resolLang()` a `i18n-core.js`) ja existia i fa exactament el
que calia — paràmetre `?lang=` a la URL → valor desat a
`localStorage` → idioma del navegador → per defecte. Suprimir el
`<select>` visible **no elimina cap capacitat**: la capa anglesa
segueix sencera a `ui-strings.js`, i `window.geoI18n.setLang()` segueix
funcionant per a qui vulgui reactivar-lo algun dia.

**Un matís important, aplicat expressament**: no n'hi havia prou amb
amagar el selector — calia també **forçar l'idioma mostrat a català
sempre**, perquè `resolLang()` sol podria haver triat anglès per a algú
amb el navegador en aquest idioma, contradient "mostra només la capa
del català". `muntaSelectorIdioma()` (que ja es degradava bé si
l'element no existia) s'ha substituït per `forcaIdiomaCatala()`, que
crida `setLang("ca")` explícitament si l'idioma resolt no ho era.

## 4. Canviat: títol → "Geometria sintètica"

Només l'entrada catalana de `nav.title` (`ui-strings.js`); l'anglesa
(`"Geometry — questions from the book"`) queda intacta, tal com l'owner
va demanar explícitament no tocar cap frase anglesa.

## 5. Afegit: filtre 2D/3D (toggle tipus iPad)

**Descoberta abans de dissenyar res**: el camp `dimensio` ja existeix a
`preguntes-dades.js` amb exactament els valors `"2D"`/`"3D"` (88 i 42
preguntes respectivament) — no calia inventar cap classificació nova.

**Decisió de disseny deliberada**: aquest filtre viu com a **estat propi
de la vista de llista**, separat del mecanisme de filtres per URL
existent (`view.filtres`, `#curs=2ESO` i similars). Barrejar-los hauria
confós dos conceptes diferents: els filtres d'URL són navegació (un
enllaç hi porta), aquest és control d'interfície pur (mai canvia la
URL). Persistit a `localStorage` amb el mateix patró que l'idioma.

**Invariant aplicat expressament**: mai els dos toggles poden quedar
apagats alhora — si es desactiva l'últim actiu, tots dos es
reactiven automàticament. A diferència d'un filtre real per URL (on
"cap resultat" és informatiu, p. ex. `#curs=2ESO` quan encara no hi ha
cap curs assignat), una llista buida per "cap dimensió seleccionada" no
aporta res a l'alumne.

## 6. Verificació

- `node --check` als 4 fitxers JS tocats i claus CSS equilibrades
  (135/135) després de l'edició.
- `python3 verifica_projecte.py` → `Tot correcte.`
- **Playwright, els 5 punts confirmats un per un**: eyebrow absent;
  títol nou; selector d'idioma absent però `getLang()` retorna `"ca"`;
  els dos toggles presents i actius per defecte amb les 130 preguntes
  visibles; desactivar "3D" deixa exactament 88 (coincideix amb el
  compte real de `dimensio: "2D"`); desactivar l'últim toggle actiu
  reactiva tots dos automàticament; **l'estat persisteix després de
  recarregar la pàgina**.
- **Regressió completa sobre les 130 guies senceres**: 4 passos, peu
  visible, cap imatge trencada, 0 errors JS — confirmant que cap
  d'aquests canvis de capçalera ha afectat la resta del lloc.
- Captura de pantalla real revisada visualment.

## 7. Fitxers d'aquest lliurament

```
index.html            eyebrow i selector d'idioma suprimits de la capçalera
js/i18n/ui-strings.js títol nou (ca), clau list.no_results nova (en+ca)
js/ui/main.js          forcaIdiomaCatala() substitueix muntaSelectorIdioma()
js/ui/llista.js        filtre 2D/3D (estat, botons, filtratge), missatge buit actualitzat
css/components.css     .site-header__lang eliminat, .dim-filtre* nou
docs/guies/NOTA-UIUX-CAPCALERA.md  aquest fitxer
```
