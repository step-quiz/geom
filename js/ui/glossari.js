/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/ui/glossari.js
  ROL:          Les DUES coses que GLOSSARY-DESIGN-NOTES.md demana que
                comparteixin dades però no interfície (§1):
                  1. La superfície SEMPRE DISPONIBLE (§4.1): panell
                     overlay, muntat un cop des de la capçalera, amb
                     cerca-mentre-escrius i llista per categoria.
                  2. El RENDERITZADOR D'UN SOL TERME (pintaContingutTerme),
                     que reutilitzen tant aquest overlay com els popovers
                     inline de detall.js (§4.2) — un únic lloc que sap
                     "com es mostra una entrada de glossari", perquè les
                     dues superfícies mai divergeixin en com presenten el
                     mateix terme (§6: "si mostren text diferent, és un
                     bug").
  ARQUITECTURA: Es carrega després de js/nucli/glossari.js. NO es
                subscriu a geoRouter — deliberadament (§4.1 i §6 del
                document: "don't route the glossary panel through
                location.hash"), és un overlay pur, ortogonal a la
                navegació.
  DEPENDÈNCIES: js/nucli/glossari.js (window.geoGlossari)
                js/i18n/i18n-core.js (t/tf)
*/

(function () {
  "use strict";

  let overlayEl = null;
  let cosEl = null; // contenidor intern on es pinta cerca+llista o un sol terme
  let obert = false;

  /**
   * Renderitza el contingut d'UN terme (nom, definició, figura si n'hi
   * ha, relacionats) dins `contenidor`. `onRelacionatClick(id)` es crida
   * quan l'usuari clica un terme relacionat -- qui la passi decideix si
   * això vol dir "substitueix el panell obert" (overlay) o "obre un altre
   * popover" (inline a detall.js); aquesta funció no ho decideix, només
   * pinta i notifica.
   */
  function pintaContingutTerme(id, lang, contenidor, onRelacionatClick) {
    const t = window.geoGlossari.termeDe(id);
    contenidor.innerHTML = "";
    if (!t) return;

    const r = (camp) => window.geoGlossari.resolCampGlossari(camp, lang);

    const article = document.createElement("div");
    article.className = "glossari-entry";

    const h = document.createElement("h3");
    h.className = "glossari-entry__title";
    h.textContent = (t.termes[lang] && t.termes[lang][0]) || t.termes.ca[0];
    article.appendChild(h);

    const def = document.createElement("p");
    def.className = "glossari-entry__def";
    def.textContent = r(t.definicio);
    article.appendChild(def);

    if (t.figura) {
      const fig = document.createElement("figure");
      fig.className = "glossari-entry__figure";
      const img = document.createElement("img");
      img.src = window.geoGlossari.rutaFigura(t.figura);
      img.alt = window.t("glossary.figure_alt");
      img.loading = "lazy";
      fig.appendChild(img);
      article.appendChild(fig);
    }

    const relacionats = window.geoGlossari.relacionatsDe(t.id);
    if (relacionats.length) {
      const rel = document.createElement("div");
      rel.className = "glossari-entry__relacionats";
      const label = document.createElement("span");
      label.className = "glossari-entry__relacionats-label";
      label.textContent = window.t("glossary.related_label");
      rel.appendChild(label);
      relacionats.forEach((rt, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "glossari-entry__relacionat";
        btn.textContent = (rt.termes[lang] && rt.termes[lang][0]) || rt.termes.ca[0];
        btn.addEventListener("click", () => onRelacionatClick && onRelacionatClick(rt.id));
        rel.appendChild(btn);
        if (i < relacionats.length - 1) rel.appendChild(document.createTextNode(" "));
      });
      article.appendChild(rel);
    }

    contenidor.appendChild(article);
  }

  // ---------------------------------------------------------------------
  // Panell sempre disponible (§4.1)
  // ---------------------------------------------------------------------

  function pintaLlista(filtreText, lang) {
    cosEl.innerHTML = "";

    const cerca = document.createElement("input");
    cerca.type = "search";
    cerca.className = "glossari-cerca";
    cerca.placeholder = window.t("glossary.search_placeholder");
    cerca.value = filtreText || "";
    cerca.addEventListener("input", () => pintaLlista(cerca.value, lang));
    cosEl.appendChild(cerca);
    // el focus es perd en repintar -- el recuperem si l'usuari ja hi era
    if (filtreText !== undefined) {
      cerca.focus();
      cerca.selectionStart = cerca.selectionEnd = cerca.value.length;
    }

    const resultats = window.geoGlossari.cerca(filtreText || "");
    if (resultats.length === 0) {
      const buit = document.createElement("p");
      buit.className = "glossari-buit";
      buit.textContent = window.t("glossary.no_results");
      cosEl.appendChild(buit);
      return;
    }

    // agrupa per categoria (§4.1: "browsable list grouped by categoria")
    const grups = {};
    resultats.forEach((t) => {
      const cat = t.categoria || window.t("glossary.uncategorized");
      (grups[cat] = grups[cat] || []).push(t);
    });

    const llista = document.createElement("div");
    llista.className = "glossari-llista";
    Object.keys(grups)
      .sort()
      .forEach((cat) => {
        const secH = document.createElement("h4");
        secH.className = "glossari-categoria";
        secH.textContent = cat;
        llista.appendChild(secH);

        const ul = document.createElement("ul");
        ul.className = "glossari-llista__items";
        grups[cat].forEach((t) => {
          const li = document.createElement("li");
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "glossari-llista__item";
          btn.textContent = (t.termes[lang] && t.termes[lang][0]) || t.termes.ca[0];
          btn.addEventListener("click", () => obreTerme(t.id, lang));
          li.appendChild(btn);
          ul.appendChild(li);
        });
        llista.appendChild(ul);
      });
    cosEl.appendChild(llista);
  }

  function obreTerme(id, lang) {
    cosEl.innerHTML = "";
    const back = document.createElement("button");
    back.type = "button";
    back.className = "glossari-tornar";
    back.textContent = window.t("glossary.back_to_list");
    back.addEventListener("click", () => pintaLlista("", lang));
    cosEl.appendChild(back);

    const cont = document.createElement("div");
    cosEl.appendChild(cont);
    pintaContingutTerme(id, lang, cont, (relId) => obreTerme(relId, lang));
  }

  function obre() {
    if (!overlayEl) return;
    obert = true;
    overlayEl.hidden = false;
    pintaLlista("", window.geoI18n.getLang());
  }

  function tanca() {
    if (!overlayEl) return;
    obert = false;
    overlayEl.hidden = true;
  }

  function toggle() {
    if (obert) tanca();
    else obre();
  }

  /**
   * Munta el panell overlay (un únic cop, típicament cridat per main.js
   * en arrencar) i el botó persistent que l'obre. `botoContenidor` és
   * l'element on penjar el botó (típicament dins de .site-header).
   */
  function munta(botoContenidor) {
    if (overlayEl) return; // ja muntat -- idempotent

    const boto = document.createElement("button");
    boto.type = "button";
    boto.className = "glossari-obre";
    boto.textContent = window.t("glossary.open_button");
    boto.setAttribute("aria-haspopup", "dialog");
    boto.addEventListener("click", toggle);
    botoContenidor.appendChild(boto);

    overlayEl = document.createElement("div");
    overlayEl.className = "glossari-overlay";
    overlayEl.hidden = true;
    overlayEl.setAttribute("role", "dialog");
    overlayEl.setAttribute("aria-label", window.t("glossary.open_button"));

    const panell = document.createElement("div");
    panell.className = "glossari-panell";

    const cap = document.createElement("div");
    cap.className = "glossari-panell__header";
    const titol = document.createElement("h2");
    titol.textContent = window.t("glossary.title");
    cap.appendChild(titol);
    const tancaBtn = document.createElement("button");
    tancaBtn.type = "button";
    tancaBtn.className = "glossari-tancar";
    tancaBtn.textContent = window.t("glossary.close_button");
    tancaBtn.addEventListener("click", tanca);
    cap.appendChild(tancaBtn);
    panell.appendChild(cap);

    cosEl = document.createElement("div");
    cosEl.className = "glossari-panell__cos";
    panell.appendChild(cosEl);

    overlayEl.appendChild(panell);
    // Clicar el fons (fora del panell) tanca -- mateix patró que
    // qualsevol overlay estàndard; el panell mateix atura la propagació.
    overlayEl.addEventListener("click", (e) => {
      if (e.target === overlayEl) tanca();
    });
    document.addEventListener("keydown", (e) => {
      if (obert && e.key === "Escape") tanca();
    });

    document.body.appendChild(overlayEl);
  }

  /** Perquè un popover inline (detall.js) pugui obrir el mateix terme al
   *  panell gran si l'usuari ho prefereix -- no s'usa encara, exposat per
   *  si cal (§4.2 parla d'un popover propi, no d'aquest overlay). */
  function obreAmbTerme(id) {
    if (!overlayEl) return;
    obert = true;
    overlayEl.hidden = false;
    obreTerme(id, window.geoI18n.getLang());
  }

  window.geoGlossariUI = {
    munta: munta,
    obre: obre,
    tanca: tanca,
    obreAmbTerme: obreAmbTerme,
    pintaContingutTerme: pintaContingutTerme,
  };
})();
