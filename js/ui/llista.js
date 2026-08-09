/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/ui/llista.js
  ROL:          Vista "totes les preguntes" (amb filtres opcionals). Puja
                cada entrada de window.PREGUNTES (o el subconjunt filtrat)
                dins de <ul class="question-list"> seguint l'estructura de
                classes ja definida a css/base.css — cap classe nova
                s'inventa aquí, es reutilitza la mateixa signatura visual
                dissenyada al pas 1.
  ARQUITECTURA: Es carrega després de tots els mòduls de nucli/ i de
                contingut.js. S'exposa window.geoLlista.render(view), on
                view és l'objecte que emet geoRouter (kind:'llista',
                filtres). main.js (pas 5, pendent) és qui la connecta a
                geoRouter.on(); aquest fitxer no es subscriu ell mateix
                al router perquè main.js ha de poder decidir quina vista
                actual mostrar en cada moment (llista.js i detall.js
                comparteixen el mateix punt de muntatge al DOM).
  DEPENDÈNCIES: js/data/preguntes-dades.js (window.PREGUNTES)
                js/i18n/i18n-core.js (t/tf per a textos d'interfície)
                js/nucli/contingut.js (fallback de contingut de pregunta)
                js/nucli/progres.js (estat "fet")
                js/nucli/router.js (per navegar en fer clic — geoRouter.navega)

  FILTRES (§6 de la proposta: "no és un cas especial al codi")
  view.filtres és un objecte pla { clau: valor }, generat per
  router._parseHash() a partir de "#curs=2ESO" i similars. Aquí es tracta
  de manera totalment genèrica: es filtra window.PREGUNTES comprovant
  pregunta[clau] === valor per a cada clau present a filtres, sense cap
  "if (clau === 'curs')" especial. Avui mateix curs és null a totes les
  preguntes, així que #curs=2ESO no troba res (llista buida amb missatge,
  no un error) — és el comportament correcte fins que §6 es decideixi:
  cap resultat és honest, no cal simular-ho ni amagar el filtre.
*/

(function () {
  "use strict";

  let contenidorEl = null;

  /**
   * Punt d'entrada. root és l'element del DOM on penjar la llista
   * (típicament un <div id="app">, decidit per main.js/index.html).
   * Es crida una vegada per muntar-hi el contenidor; render() reutilitza
   * el mateix contenidorEl en crides successives, en lloc de refer tot
   * el DOM extern cada cop que canvia la vista.
   */
  function munta(root) {
    contenidorEl = document.createElement("div");
    contenidorEl.className = "page";
    root.appendChild(contenidorEl);
    return contenidorEl;
  }

  function aplicaFiltres(preguntes, filtres) {
    const claus = Object.keys(filtres || {});
    if (claus.length === 0) return preguntes;
    return preguntes.filter((p) =>
      claus.every((clau) => String(p[clau]) === String(filtres[clau]))
    );
  }

  function etiquetaFiltre(filtres) {
    const claus = Object.keys(filtres || {});
    if (claus.length === 0) return "";
    return claus.map((c) => c + "=" + filtres[c]).join(", ");
  }

  /**
   * Construeix el <li class="question-entry"> d'una pregunta per a la
   * vista de llista. La llista mostra només enunciat (mai la pista, que
   * és cosa de detall.js — v. sol/README.md: allà la pista viu a la
   * llista perquè el detall ja mostra la solució treballada; aquí és a
   * l'inrevés perquè el nostre detall NO té solució, així que la pista
   * té sentit reservar-la per quan l'alumne ja és dins la pregunta,
   * no abans de triar-la).
   */
  function creaEntrada(pregunta, lang) {
    const li = document.createElement("li");
    li.className = "question-entry";
    if (window.geoProgres && window.geoProgres.esFet(pregunta.id)) {
      li.dataset.state = "active";
    }

    const meta = document.createElement("div");
    meta.className = "question-entry__meta";

    const eyebrow = document.createElement("span");
    eyebrow.className = "eyebrow";
    eyebrow.textContent = pregunta.id;
    meta.appendChild(eyebrow);

    const paginaSpan = document.createElement("span");
    paginaSpan.className = "meta meta--separated";
    paginaSpan.textContent = window.tf("list.page_label", { page: pregunta.pagina });
    meta.appendChild(paginaSpan);

    if (!pregunta.imatge) {
      const badge = document.createElement("span");
      badge.className = "meta meta--separated";
      badge.textContent = window.t("list.no_image_badge");
      meta.appendChild(badge);
    }

    li.appendChild(meta);

    const prompt = document.createElement("p");
    prompt.className = "question-entry__prompt";
    prompt.textContent = window.geoContingut.resolCamp(pregunta.enunciat, lang);
    li.appendChild(prompt);

    // Enllaç invisible que cobreix tota l'entrada — millor per a
    // accessibilitat (focus/tab, "obrir en pestanya nova") que un
    // onclick a mà sobre el <li>, i segueix funcionant com a <a> normal
    // si mai es desactiva JS parcialment.
    const link = document.createElement("a");
    link.href = "#" + pregunta.id;
    link.className = "question-entry__link-cover";
    link.setAttribute("aria-label", window.t("list.open") + ": " + prompt.textContent);
    li.appendChild(link);

    return li;
  }

  /**
   * Renderitza l'estat "llista" complet dins contenidorEl. Es crida cada
   * cop que main.js rep una vista kind:'llista' del router (inclosa la
   * primera càrrega). Neteja i repinta sempre de zero: amb com a màxim
   * ~130 entrades no cal reconciliació incremental de DOM per rendiment.
   *
   * NOTA: el títol "Geometry — questions from the book" NO es repinta
   * aquí — viu al <header class="site-header"> fix d'index.html, que no
   * depèn de la vista activa. Repintar-lo dins de #app produiria un
   * títol duplicat en carregar la pàgina (es va detectar exactament
   * així, provant index.html sencer per primer cop al pas main.js).
   * Aquí només hi va el recompte, que sí és específic d'aquesta vista
   * (canvia amb els filtres).
   */
  function render(view, root) {
    if (!contenidorEl || !contenidorEl.isConnected) {
      munta(root);
    }
    contenidorEl.innerHTML = "";

    const lang = window.geoI18n.getLang();
    const totes = window.PREGUNTES || [];
    const filtrades = aplicaFiltres(totes, view.filtres);

    const header = document.createElement("header");

    const count = document.createElement("p");
    count.className = "eyebrow";
    const etiqueta = etiquetaFiltre(view.filtres);
    count.textContent =
      window.tf("list.question_count", { n: filtrades.length }) +
      (etiqueta ? " · " + etiqueta : "");
    header.appendChild(count);

    contenidorEl.appendChild(header);

    if (filtrades.length === 0) {
      const buit = document.createElement("p");
      buit.className = "question-entry__body";
      buit.style.marginTop = "var(--space-5)";
      // No hi ha cap clau de UI_LANGS dedicada a "cap resultat" encara
      // (fora d'abast d'aquest pas); es reutilitza source_note com a
      // text de contingut segur en lloc d'introduir contingut nou fora
      // de ui-strings.js sense que main.js/§6 ho hagi decidit.
      buit.textContent = window.t("nav.source_note");
      contenidorEl.appendChild(buit);
      return;
    }

    const ul = document.createElement("ul");
    ul.className = "question-list";
    ul.style.marginTop = "var(--space-6)";
    filtrades.forEach((p) => ul.appendChild(creaEntrada(p, lang)));
    contenidorEl.appendChild(ul);
  }

  window.geoLlista = {
    render: render,
  };
})();
