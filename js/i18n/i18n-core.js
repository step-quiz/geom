/*
  PROJECTE:     Geometria — preguntes del llibre (p. 1-55)
  FITXER:       js/i18n/i18n-core.js
  ROL:          Lògica de resolució i lectura de l'idioma d'interfície
                (uiLang). NO decideix el curs de l'alumne (§6 de la
                proposta) ni cap altre eix — aquest fitxer coneix un únic
                eix, "en quin idioma es parla a l'alumne", i res més.
  ARQUITECTURA: Es carrega just després de ui-strings.js. Exposa
                window.t(), window.tf(), window.geoI18n.getLang(),
                window.geoI18n.setLang() i window.geoI18n.initSelector().
                Qualsevol vista (llista.js, detall.js) crida t()/tf()
                directament; cap altre fitxer torna a implementar
                resolució ni interpolació de cadenes.
  DEPENDÈNCIES: js/i18n/ui-strings.js (window.UI_LANGS ha d'existir abans
                que s'executi aquest fitxer)

  DECISIONS QUE ESTENEN EL PATRÓ DE karelcat (documentades per transparència)

  1. FALLBACK ENTRE IDIOMES A t(). La t() real de karelcat/js/i18n.js NO
     fa fallback: si la clau no existeix a l'idioma actiu, retorna la
     pròpia key tal qual. Té sentit allà perquè només hi ha UN idioma
     d'interfície complet en producció (ca) — mai hi havia un segon
     idioma parcial per provar un fallback. Aquí SÍ que hi ha dos idiomes
     complets des del primer dia (en/ca), però per robustesa davant d'un
     futur tercer idioma afegit incrementalment, t() aquí prova primer
     l'idioma actiu, després 'en' com a xarxa de seguretat, i només si
     tampoc hi és retorna la key. Aquesta cadena (actual → en → key) és
     la mateixa filosofia de fallback que ja fa servir l'esquema de
     contingut de preguntes (enunciat.ca null → enunciat.en), aplicada
     aquí també a la capa d'interfície per coherència de tot el sistema.

  2. PRIORITAT DE RESOLUCIÓ (URL > localStorage > navegador > per
     defecte). No és codi que s'executi avui a karelcat/js/i18n.js —
     surt literalment de la recepta a
     karelcat/docs/i18n-spanish-guide.md, secció "Step 3", pensada per
     quan karelcat mateix vulgui afegir un segon idioma. Es replica aquí
     gairebé paraula per paraula perquè la recepta ja està provada.

  3. CLAU DE localStorage: 'geo:uiLang', no 'karel-uilang'. Seguint la
     convenció que el mateix document d'arquitectura (§6) ja reserva per
     al futur 'geo:curs' — mateix prefix de projecte, claus diferents,
     sense interferir-se.
*/

(function () {
  "use strict";

  const STORAGE_KEY = "geo:uiLang";
  const DEFAULT_LANG = "en"; // el llibre font és en anglès; és el fallback més segur

  /**
   * Resol quin uiLang s'ha de fer servir en carregar la pàgina.
   * Prioritat: ?lang= a la URL > tria prèvia a localStorage >
   * idioma del navegador > DEFAULT_LANG.
   * (Patró de karelcat/docs/i18n-spanish-guide.md, "Step 3".)
   */
  function resolLang() {
    let urlLang = null;
    try {
      urlLang = new URLSearchParams(location.search).get("lang");
    } catch (e) {
      // location/URLSearchParams poden no existir en un entorn de test;
      // es degrada silenciosament a la resta de la cadena de prioritat.
    }

    let savedLang = null;
    try {
      savedLang = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      // localStorage pot estar bloquejat (mode privat estricte, etc.);
      // no ha de trencar la resolució de l'idioma per això.
    }

    let browserLang = null;
    try {
      browserLang = (navigator.language || "").slice(0, 2);
    } catch (e) {
      // sense navigator disponible, simplement no aporta candidat
    }

    const candidates = [urlLang, savedLang, browserLang];
    const found = candidates.find((l) => l && window.UI_LANGS[l]);
    return found || DEFAULT_LANG;
  }

  // Estat d'idioma actual. Viu en una variable de mòdul, no a window,
  // perquè l'única superfície pública sigui getLang()/setLang() —
  // cap altre fitxer ha de poder mutar-lo directament.
  let currentLang = resolLang();

  /**
   * Cerca niuada per punts dins UI_LANGS[lang], p. ex. t('detail.hint_show').
   * Retorna undefined si la clau no existeix a aquell idioma (no llança
   * error) — ho fa servir internament la cadena de fallback de t().
   */
  function lookup(lang, key) {
    const table = window.UI_LANGS[lang];
    if (!table) return undefined;
    const parts = key.split(".");
    let obj = table;
    for (const part of parts) {
      if (obj == null) return undefined;
      obj = obj[part];
    }
    return obj;
  }

  /**
   * t(key): tradueix una clau a l'idioma actiu.
   * Cadena de fallback: idioma actiu → 'en' → la pròpia key (mai buit,
   * mai undefined — sempre hi ha alguna cosa renderitzable a la UI).
   */
  function t(key) {
    let value = lookup(currentLang, key);
    if (value === undefined && currentLang !== "en") {
      value = lookup("en", key);
    }
    return value !== undefined && value !== null ? String(value) : key;
  }

  /**
   * tf(key, vars): com t(), amb interpolació {placeholder} substituïda
   * pels valors de vars. p. ex. tf('meta.question_label', {n: 10})
   * amb "Question {n}" → "Question 10".
   */
  function tf(key, vars) {
    let s = t(key);
    if (!vars) return s;
    for (const [k, v] of Object.entries(vars)) {
      s = s.replace(new RegExp("\\{" + k + "\\}", "g"), String(v));
    }
    return s;
  }

  function getLang() {
    return currentLang;
  }

  /**
   * Canvia l'idioma actiu, el desa a localStorage, i sincronitza
   * document.documentElement.lang (rellevant per a lectors de pantalla
   * i per al propi navegador). NO refà el render de la UI — això és
   * responsabilitat de qui truqui setLang() (típicament main.js), que
   * sap quina vista està activa i com tornar-la a pintar.
   */
  function setLang(lang) {
    if (!window.UI_LANGS[lang]) return false;
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // persistència best-effort; un fallo aquí no ha d'impedir el canvi
      // d'idioma dins la sessió actual
    }
    document.documentElement.lang = lang;
    return true;
  }

  /**
   * Omple un <select> existent amb totes les entrades de UI_LANGS,
   * generades dinàmicament — mai una llista d'opcions escrita a mà,
   * perquè afegir un idioma nou a ui-strings.js n'hi hagi prou perquè
   * aparegui aquí sense tocar cap altre fitxer.
   * Retorna false silenciosament si l'element no existeix (permet
   * cridar-lo sempre des de main.js sense comprovar-ho abans).
   */
  function initSelector(selectElementId) {
    const sel = document.getElementById(selectElementId);
    if (!sel) return false;
    sel.innerHTML = Object.entries(window.UI_LANGS)
      .map(
        ([code, table]) =>
          `<option value="${code}"${code === currentLang ? " selected" : ""}>${table._name}</option>`
      )
      .join("");
    return true;
  }

  // Sincronitza <html lang="..."> ja en carregar, sense esperar cap
  // interacció de l'usuari.
  document.documentElement.lang = currentLang;

  window.t = t;
  window.tf = tf;
  window.geoI18n = {
    getLang,
    setLang,
    resolLang,
    initSelector,
  };
})();
