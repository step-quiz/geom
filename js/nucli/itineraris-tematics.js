/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/nucli/itineraris-tematics.js
  ROL:          Accés pur (cap DOM) a window.ITINERARIS_TEMATICS i
                window.ITINERARIS_GRUPS_ENTRELLACATS. Mateix rol que
                js/nucli/ordre.js té per a window.ORDRE_PREGUNTES: cap
                consumidor (js/ui/itineraris.js, js/ui/llista.js,
                js/ui/detall.js) llegeix aquestes dues variables globals
                directament — hi passen sempre per aquí, perquè la
                lògica de cerca (per clau d'itinerari, per id de
                pregunta, veí següent/anterior DINS d'un itinerari) visqui
                en un sol lloc.
  ARQUITECTURA: Es carrega just després de
                js/data/itineraris-tematics-dades.js i abans de
                js/ui/itineraris.js, js/ui/llista.js i js/ui/detall.js.
  DEPENDÈNCIES: js/data/itineraris-tematics-dades.js
                (window.ITINERARIS_TEMATICS, window.ITINERARIS_GRUPS_
                ENTRELLACATS). Cap altra — aquest fitxer és pur, no toca
                window.PREGUNTES ni cap altra font de dades (cada entrada
                dels itineraris ja porta el seu propi id, v. capçalera de
                itineraris-tematics-dades.js).

  QUÈ NO ÉS AQUEST FITXER (per no confondre'l amb el que ja existia)
  Aquest mòdul és la font ESTÀTICA i EDITORIAL: els 6 itineraris temàtics
  són els mateixos per a tothom. NO s'ha de confondre amb
  js/nucli/itinerari.js (ja existia, es manté intacte), que és el motor
  REACTIU i individual — suggereix 1-3 preguntes properes segons
  l'historial de CADA alumne, amb estat propi a localStorage. Els dos
  fitxers no es criden l'un a l'altre.

  DEGRADACIÓ SI LES DADES NO HI SÓN (mateixa disciplina que ordre.js:
  mai trenca la pàgina per un script absent):
    - window.ITINERARIS_TEMATICS absent o buit: totes les funcions
      d'aquest mòdul retornen array buit / null, mai llancen error.
    - Un id de `requereix` o `bessones` que no es troba a cap itinerari
      (no hauria de passar mai — verifica_projecte.py §12 ho comprova
      en generar les dades, v. la capçalera d'aquell fitxer): es tracta
      igual que "no trobat", l'entrada simplement no es mostra.

  MAPA id -> {itinerari, entrada} (perItineraris/perPregunta més avall)
  Es construeix una sola vegada, de manera peresosa (la primera crida que
  el necessiti), i es memoritza — amb com a màxim 115 preguntes no calen
  reconstruccions incrementals, i totes les crides d'aquest fitxer són
  de lectura pura (les dades no canvien en temps d'execució).

  CONTEXT DE SESSIÓ ("estic seguint l'itinerari X ara mateix")
  Per al punt (b) del handoff ("un cop dins, 'següent' hauria de ser
  ordre+1 DINS del mateix itinerari"): quan l'alumne arriba a una
  pregunta seguint els enllaços de dins d'un itinerari, detall.js ha de
  poder-ho saber per oferir "següent dins l'itinerari" en lloc de (o al
  costat de) l'Anterior/Següent posicional de sempre. Es guarda a
  sessionStorage, NO a localStorage: és estat de "què estic fent ara en
  aquesta pestanya", no una preferència que tingui sentit recordar entre
  visites de dies diferents (a diferència de l'idioma, geo:uiLang, que sí
  viu a localStorage). Es marca en entrar en un itinerari (marca()) i en
  seguir "següent" (es torna a marcar per la pregunta nova); es neteja
  explícitament (neteja()) en sortir per qualsevol altre camí (Anterior/
  Següent posicional, "Totes les preguntes", un enllaç de "veure també")
  perquè el context no persisteixi fantasma un cop l'alumne ja n'ha
  sortit.
*/

(function () {
  "use strict";

  let mapaPerId = null; // id -> { itinerari, entrada }

  function itineraris() {
    return window.ITINERARIS_TEMATICS || [];
  }

  function grupsEntrellacats() {
    return window.ITINERARIS_GRUPS_ENTRELLACATS || [];
  }

  function itinerariPerClau(clau) {
    return itineraris().find((it) => it.clau === clau) || null;
  }

  function construeixMapa() {
    mapaPerId = {};
    itineraris().forEach((it) => {
      it.preguntes.forEach((entrada) => {
        mapaPerId[entrada.id] = { itinerari: it, entrada: entrada };
      });
    });
  }

  /**
   * Retorna { itinerari, entrada } per a un id de pregunta, o null si
   * aquesta pregunta no forma part de cap itinerari (per exemple, és
   * un EXERCICI_AMAGAT — v. capçalera de itineraris-tematics-dades.js:
   * només cobreix les 115 visibles).
   */
  function trobaPerId(id) {
    if (!mapaPerId) construeixMapa();
    return mapaPerId[id] || null;
  }

  /**
   * Veí SEGÜENT dins del MATEIX itinerari (ordre + 1), o null si `id`
   * és l'última entrada del seu itinerari o no en forma part de cap.
   * Deliberadament diferent de detall.js/veins(): allà "següent" segueix
   * js/data/ordre-preguntes.js (l'ordre de presentació general, que
   * travessa tots els itineraris barrejats); aquí "següent" es queda
   * DINS del mateix itinerari, tal com demana el punt (b) del handoff.
   */
  function seguentDinsItinerari(id) {
    const trobat = trobaPerId(id);
    if (!trobat) return null;
    const seguent = trobat.itinerari.preguntes.find(
      (e) => e.ordre === trobat.entrada.ordre + 1
    );
    return seguent ? { itinerari: trobat.itinerari, entrada: seguent } : null;
  }

  /** Anàleg a seguentDinsItinerari, en l'altre sentit. */
  function anteriorDinsItinerari(id) {
    const trobat = trobaPerId(id);
    if (!trobat) return null;
    const anterior = trobat.itinerari.preguntes.find(
      (e) => e.ordre === trobat.entrada.ordre - 1
    );
    return anterior ? { itinerari: trobat.itinerari, entrada: anterior } : null;
  }

  /**
   * Resol un array d'ids de `requereix` o `bessones` a les seves entrades
   * completes { itinerari, entrada }, filtrant qualsevol id que no es
   * trobi (v. nota de degradació a la capçalera). Compartit entre
   * "abans convé haver fet: qXX" (b) i "veure també" (c): totes dues
   * peces necessiten el mateix pas de "id -> a quin itinerari pertany,
   * per poder-hi enllaçar".
   */
  function resolIds(ids) {
    return (ids || [])
      .map((id) => trobaPerId(id))
      .filter(Boolean);
  }

  // ---------------------------------------------------------------------
  // Context de sessió (v. nota a la capçalera): quin itinerari s'està
  // seguint ara mateix, si n'hi ha cap.
  // ---------------------------------------------------------------------

  const SESSIO_KEY = "geo:itinerari-actiu";

  /** Marca `clau` com l'itinerari actiu d'aquesta pestanya. */
  function marcaContextActiu(clau) {
    try {
      sessionStorage.setItem(SESSIO_KEY, clau);
    } catch (e) {
      // best-effort (sessionStorage bloquejat) -- degrada a "sense
      // context actiu", mai trenca la navegació per això.
    }
  }

  /** Esborra el context actiu (sortir de l'itinerari per qualsevol altre
   *  camí que no sigui "següent dins l'itinerari"). */
  function netejaContextActiu() {
    try {
      sessionStorage.removeItem(SESSIO_KEY);
    } catch (e) {
      // idem
    }
  }

  /**
   * Retorna { itinerari, entrada } de l'itinerari actiu de sessió PER A
   * la pregunta `idActual` donada, o null si no hi ha context actiu, si
   * l'itinerari guardat ja no existeix, o si `idActual` no pertany
   * realment a aquell itinerari (per exemple, l'alumne ha saltat fora
   * per un enllaç de "veure també" sense que es netegés el context —
   * xarxa de seguretat perquè mai es mostri "següent dins l'itinerari X"
   * per a una pregunta que no és de X).
   */
  function contextActiuPer(idActual) {
    let clau;
    try {
      clau = sessionStorage.getItem(SESSIO_KEY);
    } catch (e) {
      return null;
    }
    if (!clau) return null;
    const trobat = trobaPerId(idActual);
    if (!trobat || trobat.itinerari.clau !== clau) return null;
    return trobat;
  }

  window.geoItinerarisTematics = {
    itineraris: itineraris,
    grupsEntrellacats: grupsEntrellacats,
    itinerariPerClau: itinerariPerClau,
    trobaPerId: trobaPerId,
    seguentDinsItinerari: seguentDinsItinerari,
    anteriorDinsItinerari: anteriorDinsItinerari,
    resolIds: resolIds,
    marcaContextActiu: marcaContextActiu,
    netejaContextActiu: netejaContextActiu,
    contextActiuPer: contextActiuPer,
  };
})();
