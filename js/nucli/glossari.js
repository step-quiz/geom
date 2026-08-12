/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/nucli/glossari.js
  ROL:          Accés pur a window.GLOSSARI (cap DOM — mateixa disciplina
                que guies.js/contingut.js/progres.js) MÉS la lògica de
                detecció de termes dins de text pla (§3 de
                GLOSSARY-DESIGN-NOTES.md): coincidència contra els arrays
                `termes` en temps de renderitzat, no anotació prèvia del
                contingut font.
  ARQUITECTURA: Es carrega després de glossari-dades.js i abans de
                ui/detall.js i ui/main.js, que són els dos consumidors
                (§4: dos renderitzadors, una sola font de dades).
  DEPENDÈNCIES: js/data/glossari-dades.js (window.GLOSSARI)

  DIRECCIÓ DEL FALLBACK — v. la capçalera de glossari-dades.js per la
  justificació completa. resolCampGlossari() és, deliberadament, la
  MATEIXA FORMA que resolCampGuia() a guies.js (cau cap a `ca`, no cap a
  `en`): el contingut d'aquest glossari s'escriu en català, igual que les
  guies, no en anglès com preguntes-dades.js.

  DETECCIÓ (§3): "longest-match-first, computed against `termes`, not
  NLP." Es construeix, per idioma, una llista PLANA (terme de superfície,
  id) ordenada per longitud DESCENDENT, i es cerca amb una única expressió
  regular alternativa (totes les formes unides amb "|", les més llargues
  primer) amb vores de paraula (\b) — exactament les dues regles que el
  document demana explícitament (word-boundary safety, overlap resolution
  per ordre de longitud) i cap més sofisticació.
*/

(function () {
  "use strict";

  function resolCampGlossari(campBilingue, lang) {
    if (!campBilingue) return "";
    const valor = campBilingue[lang];
    if (valor !== null && valor !== undefined && valor !== "") return valor;
    return campBilingue.ca || campBilingue.en || "";
  }

  function termeDe(id) {
    return (window.GLOSSARI && window.GLOSSARI[id]) || null;
  }

  function relacionatsDe(id) {
    const t = termeDe(id);
    if (!t || !t.relacionats) return [];
    return t.relacionats.map(termeDe).filter(Boolean);
  }

  function totsElsTermes() {
    return Object.values(window.GLOSSARI || {});
  }

  /**
   * Cerca lliure (per a la vista de navegació, §4.1): retorna les entrades
   * on el text de cerca apareix, com a subcadena, en QUALSEVOL forma de
   * `termes` de QUALSEVOL dels dos idiomes (un alumne pot escriure en
   * qualsevol idioma independentment de l'idioma actiu de la interfície
   * — v. §4.1) o dins la pròpia definició en català. Cerca simple,
   * insensible a majúscules/accents bàsics; no cal res més sofisticat
   * per a un glossari d'aquesta mida.
   */
  function normalitza(s) {
    return String(s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // treu accents per a la cerca
  }

  function cerca(text) {
    const q = normalitza(text).trim();
    if (!q) return totsElsTermes();
    return totsElsTermes().filter((t) => {
      const totesFormes = [...(t.termes.ca || []), ...(t.termes.en || [])];
      if (totesFormes.some((f) => normalitza(f).includes(q))) return true;
      return normalitza(t.definicio.ca || "").includes(q);
    });
  }

  // ---------------------------------------------------------------------
  // §3: detecció dins de text pla (enunciat d'una pregunta)
  // ---------------------------------------------------------------------

  let indexPerIdioma = null; // { ca: [{re, id, terme}], en: [...] } -- construït una vegada, mandrós

  function escapaRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function construeixIndex() {
    const idx = { ca: [], en: [] };
    totsElsTermes().forEach((t) => {
      ["ca", "en"].forEach((lang) => {
        (t.termes[lang] || []).forEach((forma) => {
          idx[lang].push({ forma: forma, id: t.id });
        });
      });
    });
    // Més llarg primer -- és el que fa que "triangle equilàter" guanyi
    // sobre "equilàter" sol quan totes dues formes hi són registrades.
    ["ca", "en"].forEach((lang) => {
      idx[lang].sort((a, b) => b.forma.length - a.forma.length);
    });
    return idx;
  }

  function indexDe(lang) {
    if (!indexPerIdioma) indexPerIdioma = construeixIndex();
    return indexPerIdioma[lang] || [];
  }

  /** Cal cridar-ho si window.GLOSSARI canvia en temps d'execució (no passa
   *  avui, però evita un índex obsolet si algun dia es recarrega en calent). */
  function invalidaIndex() {
    indexPerIdioma = null;
  }

  /**
   * Troba, dins `text`, la PRIMERA ocurrència (i només la primera, per
   * terme — §3: "one wrapped span per occurrence is enough") de cada
   * terme registrat en `lang`, sense encavalcaments. Retorna una llista
   * ordenada per posició d'aparició: [{start, end, id, matchText}, ...].
   * Els termes ja detectats no es poden tornar a cobrir per un de més
   * curt que hi caigui a dins (longest-match-first real, no només en
   * l'ordre de cerca: es marca l'interval com a ocupat).
   */
  function trobaTermes(text, lang) {
    if (!text) return [];
    const idx = indexDe(lang);
    const ocupat = []; // [[start,end], ...] intervals ja assignats
    const trobats = [];

    function solapaOcupat(start, end) {
      return ocupat.some(([a, b]) => start < b && end > a);
    }

    idx.forEach(({ forma, id }) => {
      const re = new RegExp("\\b" + escapaRegex(forma) + "\\b", "i");
      const m = re.exec(text);
      if (!m) return;
      const start = m.index;
      const end = start + m[0].length;
      if (solapaOcupat(start, end)) return; // ja cobert per un terme més llarg
      ocupat.push([start, end]);
      trobats.push({ start: start, end: end, id: id, matchText: m[0] });
    });

    trobats.sort((a, b) => a.start - b.start);
    return trobats;
  }

  window.geoGlossari = {
    resolCampGlossari: resolCampGlossari,
    termeDe: termeDe,
    relacionatsDe: relacionatsDe,
    totsElsTermes: totsElsTermes,
    cerca: cerca,
    trobaTermes: trobaTermes,
    invalidaIndex: invalidaIndex,
    rutaFigura: function (fitxer) {
      return "assets/img/glossari/" + fitxer;
    },
  };
})();
