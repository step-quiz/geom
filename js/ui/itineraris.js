/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/ui/itineraris.js
  ROL:          Dues vistes noves, muntades per main.js igual que llista.js/
                detall.js/demo.js:
                  - #itineraris        -> window.geoItineraris.renderLlista
                    (les 6 targetes d'itinerari, v. punt (a) del handoff)
                  - #itinerari-<clau>  -> window.geoItineraris.renderUn
                    (les preguntes d'UN itinerari, en ordre, amb
                    "requereix" quan calgui, v. punt (b))
                Cobreix els punts (a) i (b) de HANDOFF-ITINERARIS.md; el
                punt (c) ("veure també" dels 8 grups entrellaçats) viu a
                detall.js (pintaBessones), no aquí -- és una peça petita
                que reaprofita el bloc .suggerit ja existent d'aquell
                fitxer, no una vista pròpia.
  ARQUITECTURA: Es carrega després de js/nucli/itineraris-tematics.js i
                abans de js/ui/main.js (mateixa posició relativa que
                demo.js respecte de main.js). Mateix patró de muntatge
                (munta/render amb contenidorEl reutilitzat) que llista.js,
                detall.js i demo.js -- cap component nou s'inventa aquí.
  DEPENDÈNCIES: js/nucli/itineraris-tematics.js (window.geoItinerarisTematics),
                js/nucli/contingut.js (window.geoContingut.etiquetaQuestio,
                per mostrar "Qüestió N" en lloc de l'id cru -- mateixa
                etiqueta que la resta del lloc, inclosos ids amb sufix com
                q27_implicit), js/nucli/progres.js (window.geoProgres.esFet,
                per marcar quines preguntes de l'itinerari ja s'han fet --
                es degrada bé si no hi és, cap targeta es marca com a feta),
                js/nucli/router.js (per navegar-hi, geoRouter.navega), i
                window.PREGUNTES (per resoldre l'enunciat de cada pregunta
                a la vista d'un itinerari -- geoItinerarisTematics només
                guarda ids, mai el contingut sencer).

  PER QUÈ DUES FUNCIONS EXPORTADES (renderLlista/renderUn) I NO UNA DE SOLA
  Com view.kind ja distingeix 'itineraris' de 'itinerari' a router.js/
  main.js, main.js pot triar directament quina cridar -- exactament el
  mateix repartiment que fa entre geoLlista.render i geoDetall.render.
  Totes dues comparteixen munta() i contenidorEl (un sol punt de muntatge
  al DOM per a totes dues vistes d'aquest fitxer, igual que detall.js
  només en necessita un per a les seves pròpies sub-vistes).
*/

(function () {
  "use strict";

  let contenidorEl = null;

  function munta(root) {
    contenidorEl = document.createElement("div");
    contenidorEl.className = "page";
    root.appendChild(contenidorEl);
    return contenidorEl;
  }

  function asseguraContenidor(root) {
    if (!contenidorEl || !contenidorEl.isConnected) {
      munta(root);
    }
    contenidorEl.innerHTML = "";
    return contenidorEl;
  }

  /**
   * Compte de "fetes" dins d'un itinerari, per a la targeta de la vista
   * de llista ("6 de 21 fetes") -- es degrada a un simple recompte total
   * si geoProgres no hi és (mateixa disciplina que la resta del lloc:
   * cap mòdul opcional bloqueja la resta de la pàgina).
   */
  function contaFetes(itinerari) {
    if (!window.geoProgres) return null;
    let fetes = 0;
    itinerari.preguntes.forEach((e) => {
      if (window.geoProgres.esFet(e.id)) fetes += 1;
    });
    return fetes;
  }

  // -----------------------------------------------------------------
  // Vista #itineraris: les 6 targetes
  // -----------------------------------------------------------------

  function creaTargetaItinerari(itinerari) {
    const li = document.createElement("li");
    li.className = "itinerari-card";

    const link = document.createElement("a");
    link.href = "#itinerari-" + itinerari.clau;
    link.className = "itinerari-card__link";

    const titol = document.createElement("h2");
    titol.className = "itinerari-card__title";
    titol.textContent = itinerari.etiqueta;
    link.appendChild(titol);

    const meta = document.createElement("p");
    meta.className = "itinerari-card__meta eyebrow";
    const total = itinerari.preguntes.length;
    const fetes = contaFetes(itinerari);
    meta.textContent =
      fetes !== null
        ? fetes + " / " + total + " · " + window.t("itineraris.open")
        : window.tf("itineraris.count", { n: total }) + " · " + window.t("itineraris.open");
    link.appendChild(meta);

    li.appendChild(link);
    return li;
  }

  function renderLlista(view, root) {
    const c = asseguraContenidor(root);

    const nav = document.createElement("p");
    nav.className = "itineraris-nav-back";
    const back = document.createElement("a");
    back.href = "#";
    back.textContent = window.t("itineraris.back_to_list");
    nav.appendChild(back);
    c.appendChild(nav);

    const header = document.createElement("header");
    const eyebrow = document.createElement("p");
    eyebrow.className = "eyebrow";
    eyebrow.textContent = window.t("itineraris.eyebrow");
    header.appendChild(eyebrow);
    const h1 = document.createElement("h1");
    h1.className = "itineraris__page-title";
    h1.textContent = window.t("itineraris.page_title");
    header.appendChild(h1);
    const intro = document.createElement("p");
    intro.className = "itineraris__intro";
    intro.textContent = window.t("itineraris.intro");
    header.appendChild(intro);
    c.appendChild(header);

    const items = window.geoItinerarisTematics
      ? window.geoItinerarisTematics.itineraris()
      : [];

    if (!items.length) {
      // Degradació honesta si mai les dades no s'han carregat -- mateix
      // patró que list.no_results a llista.js, mai una pàgina en blanc
      // sense explicació.
      const buit = document.createElement("p");
      buit.className = "question-entry__body";
      buit.textContent = window.t("list.no_results");
      c.appendChild(buit);
      return;
    }

    const ul = document.createElement("ul");
    ul.className = "itinerari-card-list";
    items.forEach((it) => ul.appendChild(creaTargetaItinerari(it)));
    c.appendChild(ul);
  }

  // -----------------------------------------------------------------
  // Vista #itinerari-<clau>: les preguntes d'UN itinerari, en ordre
  // -----------------------------------------------------------------

  /**
   * Bloc "abans convé haver fet: qXX" -- només si `requereix` no és
   * buit. Cada id es resol al seu propi itinerari (pot ser un altre)
   * per poder-hi enllaçar correctament, seguint literalment el consell
   * del handoff ("les dades ja ho tenen calculat, no cal inferir-ho").
   */
  function creaRequereix(entrada) {
    if (!entrada.requereix.length) return null;
    const resolts = window.geoItinerarisTematics.resolIds(entrada.requereix);
    if (!resolts.length) return null;

    const p = document.createElement("p");
    p.className = "itinerari-entry__requereix";
    const label = document.createElement("span");
    label.className = "itinerari-entry__requereix-label";
    label.textContent = window.t("itineraris.requires_label");
    p.appendChild(label);
    p.appendChild(document.createTextNode(" "));

    resolts.forEach((r, i) => {
      if (i > 0) p.appendChild(document.createTextNode(", "));
      const a = document.createElement("a");
      a.href = "#" + r.entrada.id;
      a.textContent = window.geoContingut.etiquetaQuestio(r.entrada.id);
      p.appendChild(a);
    });
    return p;
  }

  function creaEntradaItinerari(entrada, pregunta, itinerari, lang) {
    const li = document.createElement("li");
    li.className = "question-entry itinerari-entry";
    if (window.geoProgres && window.geoProgres.esFet(entrada.id)) {
      li.dataset.state = "active";
    }

    const meta = document.createElement("div");
    meta.className = "question-entry__meta";
    const eyebrow = document.createElement("span");
    eyebrow.className = "eyebrow";
    eyebrow.textContent = window.geoContingut.etiquetaQuestio(entrada.id);
    meta.appendChild(eyebrow);
    li.appendChild(meta);

    if (pregunta) {
      const prompt = document.createElement("p");
      prompt.className = "question-entry__prompt";
      prompt.textContent = window.geoContingut.resolCamp(pregunta.enunciat, lang);
      li.appendChild(prompt);
    }

    const req = creaRequereix(entrada);
    if (req) li.appendChild(req);

    // Enllaç que cobreix tota l'entrada -- mateix patró que
    // question-entry__link-cover de llista.js. En clicar, es marca
    // aquest itinerari com a context actiu de sessió (v. capçalera de
    // itineraris-tematics.js): és així com detall.js sabrà, un cop dins,
    // que "següent" ha de seguir aquest itinerari.
    const link = document.createElement("a");
    link.href = "#" + entrada.id;
    link.className = "question-entry__link-cover";
    link.setAttribute(
      "aria-label",
      window.t("list.open") + ": " + window.geoContingut.etiquetaQuestio(entrada.id)
    );
    link.addEventListener("click", () => {
      window.geoItinerarisTematics.marcaContextActiu(itinerari.clau);
    });
    li.appendChild(link);

    return li;
  }

  function renderUn(view, root) {
    const c = asseguraContenidor(root);

    const itinerari = window.geoItinerarisTematics
      ? window.geoItinerarisTematics.itinerariPerClau(view.clau)
      : null;

    const nav = document.createElement("p");
    nav.className = "itineraris-nav-back";
    const back = document.createElement("a");
    back.href = "#itineraris";
    back.textContent = window.t("itineraris.back_to_itineraris");
    nav.appendChild(back);
    c.appendChild(nav);

    if (!itinerari) {
      // <clau> no correspon a cap itinerari real (v. nota a router.js):
      // es tracta igual que qualsevol altra degradació honesta del
      // lloc, mai una pàgina en blanc.
      const buit = document.createElement("p");
      buit.className = "question-entry__body";
      buit.textContent = window.t("list.no_results");
      c.appendChild(buit);
      return;
    }

    const lang = window.geoI18n.getLang();
    const totesPreguntes = window.PREGUNTES || [];
    const preguntaPerId = {};
    totesPreguntes.forEach((p) => {
      preguntaPerId[p.id] = p;
    });

    const header = document.createElement("header");
    const eyebrow = document.createElement("p");
    eyebrow.className = "eyebrow";
    const total = itinerari.preguntes.length;
    const fetes = contaFetes(itinerari);
    eyebrow.textContent =
      fetes !== null
        ? fetes + " / " + total
        : window.tf("itineraris.count", { n: total });
    header.appendChild(eyebrow);
    const h1 = document.createElement("h1");
    h1.className = "itineraris__page-title";
    h1.textContent = itinerari.etiqueta;
    header.appendChild(h1);
    c.appendChild(header);

    const ul = document.createElement("ul");
    ul.className = "question-list";
    const ordenades = itinerari.preguntes.slice().sort((a, b) => a.ordre - b.ordre);
    ordenades.forEach((entrada) => {
      ul.appendChild(
        creaEntradaItinerari(entrada, preguntaPerId[entrada.id], itinerari, lang)
      );
    });
    c.appendChild(ul);
  }

  window.geoItineraris = {
    renderLlista: renderLlista,
    renderUn: renderUn,
  };
})();
