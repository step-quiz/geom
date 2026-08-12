/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/nucli/guies.js
  ROL:          Unió en temps d'execució entre window.PREGUNTES i
                window.GUIES, i resolució d'idioma per al contingut de les
                guies. Cap accés al DOM (mateixa disciplina que router.js i
                contingut.js: el nucli no pinta).
  DEPENDÈNCIES: js/data/guies-dades.js (window.GUIES). Ha de carregar-se
                DESPRÉS d'aquest fitxer i abans de js/ui/detall.js.

  PER QUÈ LA UNIÓ ÉS EN TEMPS D'EXECUCIÓ I NO EN TEMPS DE BUILD
  preguntes-dades.js es regenera sencer des del JSON d'extracció del llibre;
  les guies s'escriuen i es revisen a part, en lots. Si la guia visqués dins
  del registre de la pregunta, cada regeneració obligaria a una migració
  manual (el mateix problema que enunciat.ca/pista/notaEditorial ja tenen
  documentat a build_preguntes_dades.py, secció REGENERACIÓ). Unint per id
  aquí, regenerar les preguntes no pot destruir cap guia.

  FALLBACK D'IDIOMA — VA AL REVÉS QUE A contingut.js
  A preguntes-dades.js l'original és l'ANGLÈS i el català és la traducció
  pendent: geoContingut.resolCamp() cau, doncs, cap a `en`. A guies-dades.js
  passa exactament el contrari: les guies es van escriure en CATALÀ i l'anglès
  és el que encara no existeix. Per això aquí hi ha resolCampGuia(), que cau
  cap a `ca`. Reutilitzar resolCamp() faria que un usuari amb la interfície en
  anglès veiés les guies BUIDES en lloc de veure-les en català, que és
  clarament pitjor que veure-les en un idioma que no ha demanat.
*/

(function () {
  "use strict";

  /**
   * Com geoContingut.resolCamp(), però amb el fallback invertit: el text
   * canònic d'una guia és el català. Retorna "" si no hi ha res enlloc.
   */
  function resolCampGuia(campBilingue, lang) {
    if (!campBilingue) return "";
    const valor = campBilingue[lang];
    if (valor !== null && valor !== undefined && valor !== "") return valor;
    return campBilingue.ca || campBilingue.en || "";
  }

  /**
   * La guia d'una pregunta, o null si encara no en té. Es llegeix de
   * window.GUIES EN EL MOMENT DE CRIDAR-HO (mai memoritzat), pel mateix
   * motiu que detall.js recalcula els veïns: el fitxer de dades pot créixer
   * entre lots i res del que hi ha en memòria hauria de quedar obsolet.
   */
  function guiaDe(pregunta) {
    if (!pregunta || !window.GUIES) return null;
    return window.GUIES[pregunta.id] || null;
  }

  function teGuia(pregunta) {
    const g = guiaDe(pregunta);
    return !!(g && g.pistes && g.pistes.length);
  }

  /**
   * Ruta relativa de la imatge d'una pista. Les figures de guia viuen a
   * assets/img/pistes/ i NO a assets/img/, que és on hi ha els escanejos del
   * llibre: són coses diferents (una és la font, l'altra és material didàctic
   * generat) i barrejar-les faria impossible saber, mirant la carpeta, què és
   * original i què no.
   */
  function rutaFigura(fitxer) {
    return "assets/img/pistes/" + fitxer;
  }

  /** Nombre de guies disponibles — l'usa main.js per a la nota de peu. */
  function totalGuies() {
    return window.GUIES ? Object.keys(window.GUIES).length : 0;
  }

  window.geoGuies = {
    resolCampGuia: resolCampGuia,
    guiaDe: guiaDe,
    teGuia: teGuia,
    rutaFigura: rutaFigura,
    totalGuies: totalGuies,
  };
})();
