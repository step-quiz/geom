/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/nucli/demos.js
  ROL:          Estat minúscul de les tres demos d'introducció (§6 de
                DEMO-PROOF-INTRO-DESIGN-NOTES.md). DELIBERADAMENT no és
                geoProgres: aquell Set és per a preguntes reals (130 i
                creixent); mesclar-hi "demo-01-angle-sum" hi conviuria
                sense trencar res tècnicament (progres.js no valida ids
                contra window.PREGUNTES) però confondria per sempre
                "preguntes explorades" amb "demos vistes" — dos fets
                diferents que qualsevol futur comptador voldria poder
                distingir. Vegeu també la nota sobre `marcaFet("q02",...)`
                més avall: aquest fitxer NO substitueix geoProgres per a
                preguntes reals, només hi afegeix una crida puntual.
  ARQUITECTURA: Es carrega abans de ui/demo.js i ui/detall.js (aquest
                últim necessita consumeixHandoffQ02 en pintar q02).
  DEPENDÈNCIES: Cap en temps de càrrega. `marcaHandoffQ02Seguit` truca a
                window.geoProgres si hi és; es degrada bé si no.
*/

(function () {
  "use strict";

  const STORAGE_KEY = "geo:demos-vistes";
  const INTRO_KEY = "geo:demo-intro-mostrada";

  function llegeix() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function desa(obj) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
    } catch (e) {
      // best-effort -- una demo que no es recorda com a vista no trenca
      // res de crític (§6: no és una dada que altres mecanismes llegeixin)
    }
  }

  function marcaVista(demoId) {
    const estat = llegeix();
    estat[demoId] = true;
    desa(estat);
  }

  function esVista(demoId) {
    return !!llegeix()[demoId];
  }

  function totesVistes(ids) {
    const estat = llegeix();
    return ids.every((id) => estat[id]);
  }

  // -----------------------------------------------------------------
  // Primera visita: enviar un cop a #demo si l'estat és realment buit
  // (§5). Una bandera PRÒPIA, separada de "cap pregunta feta encara",
  // perquè un alumne que ja ha vist la intro i encara no ha fet cap
  // pregunta real NO s'hi torni a enviar cada vegada que obre el lloc
  // (§5: "never make it a mandatory gate a returning student has to
  // click through again").
  // -----------------------------------------------------------------

  function introJaMostrada() {
    try {
      return localStorage.getItem(INTRO_KEY) === "1";
    } catch (e) {
      return true; // si no podem llegir-ho, no forcem mai la redirecció
    }
  }

  function marcaIntroMostrada() {
    try {
      localStorage.setItem(INTRO_KEY, "1");
    } catch (e) {
      // best-effort
    }
  }

  /**
   * Decideix si cal enviar un visitant nou a #demo, EN LLOC de degradar
   * silenciosament (§5: "should probably degrade to just show the list
   * if that check is ever ambiguous"). Comprova la bandera pròpia
   * primer (barata, mai fa un fals negatiu que reenviï algú que ja ho
   * ha vist), i només si no s'ha mostrat mai comprova que no hi hagi
   * cap altre senyal d'activitat real (geoProgres, itinerari).
   */
  function calEnviarADemo() {
    if (introJaMostrada()) return false;
    try {
      const progresBuit = !window.geoProgres || window.geoProgres.totsFets().length === 0;
      const itinerariBuit = !window.geoItinerari || window.geoItinerari.esBuit();
      return progresBuit && itinerariBuit;
    } catch (e) {
      return false; // ambigu -> mai bloquejar l'accés a la llista real
    }
  }

  // -----------------------------------------------------------------
  // Handoff demo-03 -> q02 (§6: "a safer middle ground" -- marcaFet
  // NOMÉS es dispara quan l'alumne ha obert q02 de debò, no com a
  // efecte lateral d'acabar de llegir la demo).
  // -----------------------------------------------------------------

  let vingutDeDemo03 = false;

  /** Crida detall.js just abans de navegar a q02 des de la demo. */
  function marcaHandoffQ02Seguit() {
    vingutDeDemo03 = true;
  }

  /**
   * Consumeix (llegeix i esborra) la marca anterior. detall.js el crida
   * en pintar q02: si és true, marca q02 com a fet a geoProgres -- el
   * disparador real és "ha obert q02", no "ha llegit la demo".
   */
  function consumeixHandoffQ02() {
    const v = vingutDeDemo03;
    vingutDeDemo03 = false;
    return v;
  }

  window.geoDemos = {
    marcaVista: marcaVista,
    esVista: esVista,
    totesVistes: totesVistes,
    introJaMostrada: introJaMostrada,
    marcaIntroMostrada: marcaIntroMostrada,
    calEnviarADemo: calEnviarADemo,
    marcaHandoffQ02Seguit: marcaHandoffQ02Seguit,
    consumeixHandoffQ02: consumeixHandoffQ02,
  };
})();
