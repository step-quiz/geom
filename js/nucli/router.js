/*
  PROJECTE:     Geometria — preguntes del llibre (p. 1-55, en creixement)
  FITXER:       js/nucli/router.js
  ROL:          Hash-routing mínim. Llegeix location.hash, el resol contra
                window.PREGUNTES i notifica qui l'escolti quina vista toca
                mostrar. NO pinta res a la pantalla — pintar és feina de
                js/ui/main.js (§5, encara no construït). Aquesta separació
                és deliberada: el document d'arquitectura (§3) ja posa
                router.js a nucli/ i llista.js/detall.js a ui/ com a
                carpetes separades, així que aquest fitxer no ha de tocar
                el DOM en cap moment.
  ARQUITECTURA: Es carrega després de preguntes-dades.js (necessita
                window.PREGUNTES per resoldre ids) i abans de main.js.
                Exposa window.geoRouter amb un mètode on() per subscriure's
                als canvis de vista i current() per llegir la vista activa
                en qualsevol moment, no només en reaccionar a un event.
  DEPENDÈNCIES: js/data/preguntes-dades.js (window.PREGUNTES)

  PATRÓ DE RUTES (calcat literalment del §8 de PROPOSTA-ARQUITECTURA.md):
    index.html#                 → vista llista (totes, o filtrada)
    index.html#q01              → vista detall de la pregunta q01
    index.html#curs=2ESO        → llista filtrada (quan existeixi §6)

  ORIGEN DEL PATRÓ I ON DIVERGEIX DE sol/tasca.html
  El mecanisme show(id) + classList.toggle('active') de sol/tasca.html es
  manté (el consumidor d'aquest router hi pot fer .view.active tal qual).
  El que NO es replica és que a sol, render()/showExercise() couen resolució
  de ruta i pintat de DOM al mateix lloc — allà té sentit perquè és una
  pàgina única i petita. Aquí es separen expressament: aquest fitxer només
  decideix QUINA vista toca i amb quines dades, mai el COM es pinta.

  PER QUÈ AIXÒ IMPORTA ARA MATEIX (avís de l'usuari, Aug 2026)
  Les 41 preguntes actuals (p. 1-55 del llibre) són un subconjunt: hi ha en
  camí desenes de preguntes noves quan s'acabi d'processar el PDF complet
  (193 pàgines). Aquest router NO guarda enlloc un total ni una llista
  d'ids esperats — cada resolució llegeix window.PREGUNTES en viu. Quan
  preguntes-dades.js es regeneri amb l'script build_preguntes_dades.py i
  passi de 41 a molt més entrades, aquest fitxer no necessita cap canvi.
*/

(function () {
  "use strict";

  const listeners = [];
  let currentView = null; // { kind: 'llista' | 'detall' | 'not-found', ... }

  /**
   * Cerca una pregunta pel seu id dins window.PREGUNTES. Es crida en cada
   * resolució de ruta (mai es cacheja una llista d'ids a part) perquè
   * window.PREGUNTES pugui créixer entre càrregues de pàgina sense que
   * aquest fitxer se n'assabenti ni calgui tocar-lo.
   */
  function trobaPregunta(id) {
    const preguntes = window.PREGUNTES || [];
    return preguntes.find((p) => p.id === id) || null;
  }

  /**
   * Parseja el hash cru (sense el '#' inicial) a una descripció de vista.
   * Tres formes reconegudes, seguint el §8:
   *   ""              -> llista sense filtre
   *   "curs=2ESO"      -> llista filtrada per curs (filtre real: §6, pendent)
   *   "q01"            -> detall d'una pregunta, si l'id existeix
   *   qualsevol altra  -> not-found (ni buida ni un id reconegut)
   */
  function parseHash(rawHash) {
    const hash = decodeURIComponent(rawHash || "").trim();

    if (hash === "") {
      return { kind: "llista", filtres: {} };
    }

    // Forma clau=valor: reservat per a filtres (curs, i en el futur
    // possiblement collectionId — veure nota de collectionId més avall).
    // Es parseja SEMPRE que el hash tingui aquesta forma, encara que el
    // filtre concret encara no faci res (curs és null a totes les dades
    // avui, §6): així quan §6 es decideixi, aquest router no cal tocar-lo.
    const eqIdx = hash.indexOf("=");
    if (eqIdx > 0) {
      const clau = hash.slice(0, eqIdx);
      const valor = hash.slice(eqIdx + 1);
      return { kind: "llista", filtres: { [clau]: valor } };
    }

    // Altrament, es tracta com a id de pregunta directe.
    const pregunta = trobaPregunta(hash);
    if (pregunta) {
      return { kind: "detall", id: hash, pregunta: pregunta };
    }

    return { kind: "not-found", hashCru: hash };
  }

  function notifica(view) {
    currentView = view;
    listeners.forEach((fn) => {
      try {
        fn(view);
      } catch (e) {
        // Un listener que falla no ha de trencar els altres ni impedir
        // que el router segueixi funcionant per a futures navegacions.
        console.error("geoRouter: error en un listener", e);
      }
    });
  }

  function resolActual() {
    notifica(parseHash(location.hash.replace(/^#/, "")));
  }

  /**
   * Subscriu una funció que es cridarà cada cop que la vista resolta
   * canviï (inclosa la resolució inicial en carregar la pàgina, si
   * s'invoca on() abans que ningú hagi disparat encara cap navegació).
   * Retorna una funció per desubscriure's.
   */
  function on(fn) {
    listeners.push(fn);
    return function off() {
      const idx = listeners.indexOf(fn);
      if (idx !== -1) listeners.splice(idx, 1);
    };
  }

  function current() {
    return currentView;
  }

  /**
   * Navega programàticament (p. ex. un botó "Següent" a detall.js).
   * Simplement escriu el hash; el listener hashchange ja s'encarrega
   * de resoldre i notificar — mai cal cridar resolActual() a mà des de
   * fora d'aquest fitxer.
   */
  function navega(hash) {
    location.hash = hash;
  }

  window.addEventListener("hashchange", resolActual);

  // Resolució inicial: si algú crida geoRouter.on() després que el DOM
  // ja estigui llest, cal que hi hagi una vista resolta esperant-lo, no
  // dependre que l'usuari toqui el hash primer.
  document.addEventListener("DOMContentLoaded", resolActual);
  // Per si aquest script es carrega després de DOMContentLoaded (p. ex.
  // carregat dinàmicament): es resol també immediatament amb el que hi
  // hagi disponible ara mateix.
  if (document.readyState !== "loading") {
    resolActual();
  }

  window.geoRouter = {
    on: on,
    current: current,
    navega: navega,
    // Exposat per a tests i per a ui/llista.js si mai necessita parsejar
    // un hash sense navegar-hi de debò.
    _parseHash: parseHash,
  };
})();
