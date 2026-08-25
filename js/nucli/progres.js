/*
  PROJECTE:     Geometria — preguntes del llibre (p. 1-55, en creixement)
  FITXER:       js/nucli/progres.js
  ROL:          Marca quines preguntes l'alumne ha "explorat" (concepte
                obert — no és correcció, és un senyal personal seu). Es
                desa al navegador amb un Set a localStorage, patró de
                sol/progres.js.
  ARQUITECTURA: Es carrega en qualsevol punt abans que ui/llista.js o
                ui/detall.js el facin servir. No depèn de router.js ni de
                cap altre mòdul de nucli/ — és independent per disseny,
                igual que uiLang (i18n-core.js) és independent de curs.
  DEPENDÈNCIES: Cap en temps de càrrega. En temps d'ús, els ids que se li
                passin haurien d'existir a window.PREGUNTES, però aquest
                fitxer no ho valida activament (veure nota més avall).

  ON DIVERGEIX DE sol/progres.js, I PER QUÈ (transparència, estil repas)

  1. UNA CLAU PER collectionId, NO UNA CLAU PER UNITAT/SETMANA.
     sol guarda per unitat ('u7-fet', 'u8-fet'...) perquè el seu domini
     natural és "setmanes de curs" i el propi comentari de sol explica que
     ho fa així perquè un exercici es pot MOURE d'una setmana a una altra
     a mig curs sense perdre la creueta. Aquí no hi ha reorganització
     temporal: cada pregunta ja té un id global permanent (§4 de la
     proposta: "estable, mai es reutilitza ni canvia"). El risc real aquí
     no és "una pregunta canvia d'unitat", és "el nombre total de
     preguntes creix molt" (avís explícit de l'usuari: el JSON del PDF
     complet, 193 pàgines, n'afegirà desenes més al mateix llibre). Una
     clau per collectionId absorbeix aquest creixement per construcció:
     el Set simplement guanya membres nous; no cal cap migració perquè no
     hi ha hagut cap canvi de format, només més dades.

  2. API D'UN SOL PARÀMETRE (id), NO DOS (u, n).
     sol distingeix esFet(u, n) perquè el seu domini és bidimensional
     (unitat + número dins la unitat). Aquí cada pregunta ja té un id
     global únic (q01, q27_implicit, q08a...) — un sol paràmetre ja és
     inequívoc, un segon seria redundant.

  3. NO ES VALIDA L'ID CONTRA window.PREGUNTES EN MARCAR-LO.
     marcaFet(id, true) accepta qualsevol string. És una decisió
     conscient: aquest fitxer no depèn de l'existència ni de l'ordre de
     window.PREGUNTES per funcionar (independència total de nucli/,
     mateix esperit que i18n-core.js no sap res de progres.js). Qui
     crida marcaFet() (ui/detall.js) és qui coneix
     el context d'una pregunta real i és responsable de no cridar-lo amb
     ids arbitraris. Si mai cal blindar-ho més, es pot afegir aquesta
     validació a la capa de UI sense tocar aquest fitxer.
*/

(function () {
  "use strict";

  const COLLECTION_ID = "geometry-book-1";

  function clauProgres() {
    return "geo:fet:" + COLLECTION_ID;
  }

  function llegeix() {
    try {
      const raw = localStorage.getItem(clauProgres());
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch (e) {
      // localStorage il·legible (mode privat estricte, JSON corrupte...)
      // es degrada a "cap pregunta marcada" en lloc de trencar la pàgina.
      return new Set();
    }
  }

  function desa(set) {
    try {
      localStorage.setItem(clauProgres(), JSON.stringify([...set].sort()));
    } catch (e) {
      // Persistència best-effort. Si localStorage està ple o bloquejat,
      // l'alumne pot seguir marcant preguntes durant la sessió actual
      // (l'estat en memòria de la crida següent es recalcula igualment
      // des de llegeix(), que tornarà a fallar de la mateixa manera i
      // degradar-se — no queda mai en un estat a mig actualitzar).
    }
  }

  /** Ha explorat l'alumne la pregunta amb aquest id? */
  function esFet(id) {
    return llegeix().has(String(id));
  }

  /** Marca (o desmarca) una pregunta com a explorada. */
  function marcaFet(id, fet) {
    const set = llegeix();
    const key = String(id);
    if (fet) {
      set.add(key);
    } else {
      set.delete(key);
    }
    desa(set);
  }

  /**
   * Compta quantes de les preguntes donades (array d'ids) estan marcades.
   * S'espera que qui la cridi li passi window.PREGUNTES.map(p => p.id) o
   * un subconjunt filtrat — aquest fitxer no llegeix window.PREGUNTES
   * directament (veure nota 3 de la capçalera).
   */
  function comptaFets(ids) {
    const set = llegeix();
    let k = 0;
    ids.forEach((id) => {
      if (set.has(String(id))) k++;
    });
    return k;
  }

  /** Tots els ids marcats com a fets, per si cal iterar-los directament. */
  function totsFets() {
    return [...llegeix()];
  }

  window.geoProgres = {
    esFet: esFet,
    marcaFet: marcaFet,
    comptaFets: comptaFets,
    totsFets: totsFets,
  };
})();
