/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/ui/main.js
  ROL:          Punt d'entrada de l'app. Munta el selector d'idioma,
                connecta l'estat que emet geoRouter a la vista que toca
                (llista o detall), i arrenca la resolució inicial.
  ARQUITECTURA: Últim script carregat a index.html — depèn de tots els
                altres mòduls (v. ordre de dependències confirmat a la
                capçalera de cadascun, llistat sencer aquí per referència
                ràpida en un sol lloc):
                  1. js/data/preguntes-dades.js
                  2. js/data/ordre-preguntes.js
                  3. js/data/guies-dades.js
                  4. js/data/glossari-dades.js
                  5. js/data/demos-dades.js
                  6. js/i18n/ui-strings.js
                  7. js/i18n/i18n-core.js
                  8. js/nucli/contingut.js
                  9. js/nucli/ordre.js          (necessita 1,2)
                 10. js/nucli/progres.js
                 11. js/nucli/guies.js
                 12. js/nucli/glossari.js
                 13. js/nucli/itinerari.js     (necessita 1,8,9,11,10)
                 14. js/nucli/demos.js         (necessita 10,13 en temps
                     de crida, no de càrrega — v. la seva pròpia capçalera)
                 15. js/nucli/router.js        (necessita window.PREGUNTES)
                 16. js/ui/glossari.js         (necessita 4,6,7,12)
                 17. js/ui/llista.js           (necessita 1,4,6,7,9,10,12,13,15)
                 18. js/ui/detall.js           (necessita 4,6,7,9,10,12,13,14,15,16)
                 19. js/ui/demo.js             (necessita 5,6,7,14,15)
                 20. js/ui/main.js             (aquest fitxer — necessita 1-19)
  DEPENDÈNCIES: Tots els anteriors.

  ON DIVERGEIX DEL §8 DE PROPOSTA-ARQUITECTURA.md, I PER QUÈ
  El document diu literalment que "les dues vistes es commuten amb la
  mateixa tècnica de classe .view.active que sol" — és a dir, dos
  contenidors fixos a l'HTML (<div class="view" id="view-llista"> i
  <div class="view" id="view-detall">) que s'alternen amb classList.
  Aquest projecte NO ho fa així: router.js (pas 4) ja es va dissenyar
  perquè NO conegués el DOM en absolut (separació nucli/ vs ui/,
  documentada explícitament al capçalera de router.js), i llista.js/
  detall.js (pas 5) es van construir perquè es repintin des de zero en
  cada canvi de vista (innerHTML = "" + reconstrucció completa) en lloc
  d'assumir dos contenidors pre-existents que cadascun mantingui amagats
  quan no toca mostrar-los. Es manté aquesta decisió aquí: main.js NO
  crea cap <div class="view"> per endavant — un sol <div id="app"> buit
  a index.html, que aquest fitxer neteja i on hi munta la vista activa
  cada vegada. Avantatge concret: afegir una tercera vista (p. ex. una
  pàgina "sobre aquest llibre") no requereix tocar cap HTML pre-existent
  ni reservar-hi un contenidor per endavant.

  RESOLUCIÓ D'IDIOMA I DEL SELECTOR
  uiLang ja es resol sol en carregar i18n-core.js (resolLang() s'executa
  en definir el mòdul, no cal cridar-la des d'aquí). El que sí fa aquest
  fitxer per primer cop és MUNTAR el <select> visible
  (geoI18n.initSelector, escrit al pas 3 però mai cridat fins ara) i
  connectar-hi el canvi real: en triar un idioma nou, es desa (setLang
  ja ho fa) i es torna a pintar la vista actual sencera, perquè tot el
  contingut visible (interfície + preguntes) reflecteixi l'idioma nou a
  l'instant, sense recarregar la pàgina.
*/

(function () {
  "use strict";

  let appEl = null;
  let vistaActual = null; // guarda l'últim view emès pel router, per poder repintar en canviar d'idioma sense esperar un nou hashchange

  /**
   * Pinta view (l'objecte que emet geoRouter: kind 'llista'|'detall'|
   * 'not-found') dins de #app, netejant-lo abans. Es crida tant en
   * cada canvi de ruta com en cada canvi d'idioma (mateixa view,
   * repintada en el nou idioma).
   */
  function pinta(view) {
    vistaActual = view;
    // Cada canvi de VISTA (pregunta nova via anterior/següent o un
    // enllaç, tornar a la llista, obrir "què és una demostració") ha de
    // començar sempre per dalt de la pàgina -- si no, qui ve de
    // "següent" es queda mig desplaçat avall, llegint sense saber-ho el
    // final de la pregunta ANTERIOR en lloc de l'enunciat de la nova.
    // Deliberadament aquí, al punt únic per on passen totes les
    // navegacions reals (v. geoRouter.on(pinta) més avall) -- revelar
    // una pista dins la MATEIXA pregunta no crida mai pinta(), així que
    // mai es veurà afectat per aquest reset.
    window.scrollTo(0, 0);
    appEl.innerHTML = "";

    if (view.kind === "detall") {
      window.geoDetall.render(view, appEl);
      return;
    }

    if (view.kind === "demo") {
      window.geoDemo.render(view, appEl);
      return;
    }

    if (view.kind === "not-found") {
      // Sense vista dedicada encara (fora d'abast d'aquest pas): es
      // tracta com una llista sense filtre, la mateixa degradació que
      // ja es feia servir a l'arnès de proves del pas 5. Documentat
      // aquí, no amagat.
      window.geoLlista.render({ kind: "llista", filtres: {} }, appEl);
      return;
    }

    window.geoLlista.render(view, appEl);
  }

  /**
   * Munta el <select id="lang-select"> (ha d'existir a index.html) amb
   * les opcions reals de UI_LANGS i hi connecta el canvi. Si l'element
   * no existeix (p. ex. algú l'ha tret de l'HTML), initSelector() ja
   * retorna false sense petar — aquí simplement no s'hi afegeix el
   * listener en aquest cas.
   */
  function muntaSelectorIdioma() {
    const ok = window.geoI18n.initSelector("lang-select");
    if (!ok) return;

    const sel = document.getElementById("lang-select");
    sel.addEventListener("change", () => {
      window.geoI18n.setLang(sel.value);
      if (vistaActual) pinta(vistaActual);
    });
  }

  function muntaEnllacDemo() {
    const header = document.querySelector(".site-header__row");
    if (!header) return;
    const a = document.createElement("a");
    a.href = "#demo";
    a.className = "demo-obre";
    a.textContent = window.t("demo.header_link");
    header.appendChild(a);
  }

  function arrenca() {
    appEl = document.getElementById("app");
    if (!appEl) {
      // Sense contenidor no hi ha res a fer; es deixa constància clara
      // a la consola en lloc de fallar en silenci amb un
      // "Cannot read properties of null" críptic més avall.
      console.error("geo/main.js: no s'ha trobat #app a index.html");
      return;
    }

    muntaSelectorIdioma();

    if (window.geoGlossariUI) {
      const header = document.querySelector(".site-header__row");
      if (header) window.geoGlossariUI.munta(header);
    }

    muntaEnllacDemo();

    // Primer visitant genuí (§5 de DEMO-PROOF-INTRO-DESIGN-NOTES.md):
    // envia'l un cop a #demo, mai com a porta obligatòria per a qui ja
    // hi ha tornat. S'ha de decidir ABANS de deixar que geoRouter resolgui
    // el hash buit cap a la llista -- per això es comprova aquí mateix,
    // no dins de pinta().
    if (
      window.geoDemos &&
      location.hash === "" &&
      window.geoDemos.calEnviarADemo()
    ) {
      window.geoDemos.marcaIntroMostrada();
      location.hash = "demo";
    }

    window.geoRouter.on(pinta);
    // geoRouter ja resol i notifica la ruta inicial sol en carregar-se
    // (DOMContentLoaded / readyState check, v. pas 4) — si aquest script
    // s'executa després que això ja hagi passat, cal demanar l'estat
    // actual explícitament perquè no es quedi sense pintar mai res.
    if (window.geoRouter.current()) {
      pinta(window.geoRouter.current());
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", arrenca);
  } else {
    arrenca();
  }
})();
