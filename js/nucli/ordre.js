/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/nucli/ordre.js
  ROL:          Accés pur (cap DOM) a window.ORDRE_PREGUNTES: retorna
                window.PREGUNTES ordenat segons aquell array, en lloc de
                l'ordre del llibre. Els tres consumidors (llista.js,
                detall.js per a anterior/següent, itinerari.js per a la
                regla de reserva posicional) hi passen SEMPRE per aquí —
                cap dels tres llegeix window.ORDRE_PREGUNTES directament,
                perquè la lògica de "què fer si l'array no és una
                permutació neta" viu en un sol lloc.
  ARQUITECTURA: Es carrega després de js/data/preguntes-dades.js i
                js/data/ordre-preguntes.js, abans de qualsevol dels tres
                consumidors.
  DEPENDÈNCIES: js/data/preguntes-dades.js (window.PREGUNTES),
                js/data/ordre-preguntes.js (window.ORDRE_PREGUNTES)

  DEGRADACIÓ SI L'ORDRE NO ÉS UNA PERMUTACIÓ NETA (mai ha de trencar la
  pàgina per un error d'edició manual de ordre-preguntes.js):
    - Un id a ORDRE_PREGUNTES que ja no existeix a PREGUNTES: s'ignora.
    - Una pregunta de PREGUNTES absent a ORDRE_PREGUNTES (per exemple,
      algú n'ha afegit una de nova a preguntes-dades.js i encara no l'ha
      col·locada aquí): s'afegeix AL FINAL, en l'ordre en què apareix a
      PREGUNTES -- mai desapareix de la llista per no ser a l'ordre.
    - window.ORDRE_PREGUNTES absent del tot (script no carregat, o
      esborrat per error): cau completament a l'ordre de PREGUNTES tal
      qual (l'ordre del llibre) -- mai una pàgina en blanc.
*/

(function () {
  "use strict";

  function preguntesOrdenades() {
    const totes = window.PREGUNTES || [];
    const ordre = window.ORDRE_PREGUNTES;
    if (!Array.isArray(ordre) || ordre.length === 0) return totes;

    const byId = {};
    totes.forEach((p) => {
      byId[p.id] = p;
    });

    const vistos = new Set();
    const resultat = [];
    ordre.forEach((id) => {
      const p = byId[id];
      if (p && !vistos.has(id)) {
        resultat.push(p);
        vistos.add(id);
      }
    });
    // qualsevol pregunta no llistada a l'ordre (nova, o un descuit en
    // editar-lo) es queda al final, en lloc de desaparèixer.
    totes.forEach((p) => {
      if (!vistos.has(p.id)) resultat.push(p);
    });
    return resultat;
  }

  window.geoOrdre = {
    preguntesOrdenades: preguntesOrdenades,
  };
})();
