/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/nucli/contingut.js
  ROL:          Fallback de contingut multilingüe per pregunta (enunciat,
                pista, notaEditorial): si el camp .ca és null, cau a .en.
                Distint del fallback de i18n-core.js (t()/tf()), que
                resol textos D'INTERFÍCIE (botons, etiquetes) — aquest
                fitxer resol CONTINGUT (el text real de cada pregunta).
                Són dos mecanismes bessons, deliberadament separats
                perquè viuen en capes diferents (§4/§5 de
                PROPOSTA-ARQUITECTURA.md: "una entrada null cau
                automàticament a en").
  ARQUITECTURA: Es carrega després de preguntes-dades.js i abans de
                ui/llista.js i ui/detall.js — totes dues vistes en
                depenen, per no duplicar aquesta lògica cadascuna pel
                seu compte.
  DEPENDÈNCIES: Cap en temps de càrrega (opera sobre l'objecte pregunta
                que se li passi; no llegeix window.PREGUNTES directament).
*/

(function () {
  "use strict";

  /**
   * Retorna el text d'un camp bilingüe {en, ca} en l'idioma demanat,
   * amb fallback a 'en' si l'idioma demanat és null/undefined. 'en' és
   * sempre la font original del llibre, mai pot ser null (garantit pel
   * build), així que aquesta funció sempre retorna un string real, mai
   * null — un consumidor no necessita comprovar-ho abans de renderitzar.
   */
  function resolCamp(campBilingue, lang) {
    if (!campBilingue) return "";
    const valor = campBilingue[lang];
    if (valor !== null && valor !== undefined) return valor;
    return campBilingue.en || "";
  }

  /**
   * True si el camp bilingüe existeix I té contingut real en ALGUN dels
   * dos idiomes (en sempre en té; útil sobretot per a pista i
   * notaEditorial, que poden no tenir res en cap idioma — "sense pista"
   * és un estat vàlid, no un error).
   */
  function teContingut(campBilingue) {
    return !!(campBilingue && (campBilingue.en || campBilingue.ca));
  }

  /**
   * True si el text mostrat ve del fallback a anglès (és a dir, .ca era
   * null i s'ha ensenyat .en en el seu lloc). Útil perquè detall.js
   * pugui mostrar l'avís "aquesta pregunta encara no s'ha traduït"
   * (meta.untranslated_notice, ja escrit a ui-strings.js) exactament
   * quan calgui i no altrament.
   */
  function esFallback(campBilingue, lang) {
    if (lang === "en") return false; // en és sempre la font, mai un fallback
    if (!campBilingue) return false;
    return campBilingue[lang] === null || campBilingue[lang] === undefined;
  }

  /**
   * Retorna el o els noms de fitxer d'imatge d'una pregunta com a array,
   * independentment de si l'esquema fa servir la forma singular
   * (imatge.fitxer) o plural (imatge.fitxers) — v. build_preguntes_dades.py
   * canvi B. Normalitza aquí perquè llista.js i detall.js no hagin de
   * repetir cadascun el propi Array.isArray().
   * Retorna [] si la pregunta no té imatge.
   */
  function nomsFitxer(pregunta) {
    if (!pregunta.imatge) return [];
    if ("fitxers" in pregunta.imatge) return pregunta.imatge.fitxers;
    return [pregunta.imatge.fitxer];
  }

  /**
   * Ídem per a esCrop: sempre retorna un array de booleans, del mateix
   * índex que nomsFitxer(pregunta) — esCrop(pregunta)[i] correspon a
   * nomsFitxer(pregunta)[i].
   */
  function esCropFitxer(pregunta) {
    if (!pregunta.imatge) return [];
    if ("fitxers" in pregunta.imatge) return pregunta.imatge.esCrop;
    return [pregunta.imatge.esCrop];
  }

  /**
   * Ídem per a esInvertida (traç clar sobre fons fosc — únic cas conegut:
   * q42, descobert en una revisió visual sistemàtica, no anticipat al
   * disseny original — v. build_preguntes_dades.py canvi E). Mateix
   * patró de normalització singular/plural que esCropFitxer.
   */
  function esInvertidaFitxer(pregunta) {
    if (!pregunta.imatge) return [];
    if ("fitxers" in pregunta.imatge) return pregunta.imatge.esInvertida;
    return [pregunta.imatge.esInvertida];
  }

  /**
   * Retorna l'etiqueta llegible d'una pregunta ("Qüestió 8a") a partir
   * del seu id intern ("q08a") — substitueix arreu del lloc l'antiga
   * etiqueta curta (l'id en majúscules, "Q08A", via CSS uppercase).
   * Un sufix de lletra sola (q08a/b/c, q18a/b) es conserva -- distingeix
   * preguntes reals diferents que comparteixen número de llibre. Un
   * sufix no alfabètic (p. ex. "_implicit" a q27_implicit) es descarta:
   * és una distinció interna de dades, no rellevant per a qui llegeix
   * la pantalla. Usada per totes les vistes que mostraven l'id cru
   * (llista, detall, itinerari, demo) perquè no calgui repetir aquest
   * parsing a cadascuna.
   */
  function etiquetaQuestio(id) {
    const m = /^q(\d+)([a-z]?)/.exec(id || "");
    if (!m) return id || "";
    const n = String(parseInt(m[1], 10)) + m[2];
    return window.tf("meta.question_label", { n: n });
  }

  window.geoContingut = {
    resolCamp: resolCamp,
    teContingut: teContingut,
    esFallback: esFallback,
    nomsFitxer: nomsFitxer,
    esCropFitxer: esCropFitxer,
    esInvertidaFitxer: esInvertidaFitxer,
    etiquetaQuestio: etiquetaQuestio,
  };
})();
