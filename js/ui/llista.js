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
  DEPENDÈNCIES: js/data/preguntes-dades.js (window.PREGUNTES),
                js/data/categories-tematiques-dades.js (window.CATEGORIES_TEMATIQUES,
                window.CLASSIFICACIO_TEMATICA — es degrada bé si no hi és:
                categories() retorna [] i el menú de categories simplement
                no es pinta),
                js/nucli/ordre.js (ordre de presentació — v. la seva
                pròpia capçalera; es degrada bé si no hi és)
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

  /**
   * Filtre 2D/3D (§UI-UX, toggle tipus iPad): estat propi d'aquesta
   * vista, DELIBERADAMENT separat de view.filtres (que ve del router i
   * governa navegació per URL amb #clau=valor, v. capçalera d'aquest
   * fitxer). Aquest filtre és pur estat d'interfície -- mai s'hi navega
   * per enllaç, es desa a localStorage perquè no es perdi en tornar a
   * carregar la pàgina (mateix patró que window.geoI18n ja fa servir
   * per a l'idioma).
   *
   * INVARIANT: mai els dos toggles apagats alhora -- una llista buida
   * per "cap dimensió seleccionada" no aporta res a l'alumne (a
   * diferència d'un filtre real com #curs=2ESO, on "cap resultat" és
   * informatiu). Si es desactiva l'últim actiu, es reactiven tots dos.
   */
  const DIM_STORAGE_KEY = "geo:dim-filtre";
  const DIMS = ["2D", "3D"];

  function llegeixDimsActives() {
    try {
      const desat = JSON.parse(localStorage.getItem(DIM_STORAGE_KEY));
      if (Array.isArray(desat) && desat.every((d) => DIMS.includes(d)) && desat.length) {
        return desat;
      }
    } catch (e) {
      // localStorage bloquejat o valor corrupte -- es degrada al
      // per-defecte (totes dues actives), sense petar.
    }
    return DIMS.slice();
  }

  function desaDimsActives(actives) {
    try {
      localStorage.setItem(DIM_STORAGE_KEY, JSON.stringify(actives));
    } catch (e) {
      // best-effort, com la resta de l'estat persistit del projecte.
    }
  }

  /**
   * Llista d'exercicis amagats de la vista de llista, a petició explícita
   * de l'owner ("vull que desapareguin de les opcions de visualització
   * perquè ara mateix no vull veure'ls"). DELIBERADAMENT hardcoded aquí
   * i NOMÉS aquí -- mai a preguntes-dades.js ni a cap altra font de
   * dades: l'owner ha estat explícit que no vol que s'esborrin del
   * codi, només que no apareguin a la llista. Per això és un filtre
   * d'exclusió aplicat en pintar, no una eliminació de window.PREGUNTES
   * -- qualsevol altra vista (detall.js via enllaç directe #q19, per
   * exemple) continua funcionant amb normalitat, perquè la pregunta
   * segueix existint sencera a les dades.
   *
   * Per treure un exercici d'aquesta llista (tornar-lo a fer visible),
   * elimina'n l'id d'aquest array -- res més cal tocar.
   */
  const EXERCICIS_AMAGATS = ["q19", "q20", "q34", "q35", "q84", "q88"];

  /**
   * Filtre de categories temàtiques (menú de selecció múltiple, 6
   * categories de js/data/categories-tematiques-dades.js). Mateix patró
   * que el filtre 2D/3D (estat propi de la vista, persistit a
   * localStorage, separat de view.filtres) -- però amb una diferència
   * deliberada en l'invariant: aquí "cap categoria seleccionada" es
   * tracta com "totes" (v. petició de l'owner: "totes seleccionades,
   * per defecte, quan no en precisem cap"), no com una llista buida.
   * Per això, a diferència de DIMS, no cal reactivar-les totes en
   * desactivar l'última -- el buit ja És l'estat "totes".
   */
  const CAT_STORAGE_KEY = "geo:categoria-filtre";

  function categoriesDisponibles() {
    return (window.CATEGORIES_TEMATIQUES || []).map((c) => c.clau);
  }

  function llegeixCatsActives() {
    try {
      const desat = JSON.parse(localStorage.getItem(CAT_STORAGE_KEY));
      const totes = categoriesDisponibles();
      if (Array.isArray(desat) && desat.every((c) => totes.includes(c))) {
        return desat;
      }
    } catch (e) {
      // localStorage bloquejat o valor corrupte -- es degrada al
      // per-defecte (cap seleccionada = totes), sense petar.
    }
    return [];
  }

  function desaCatsActives(actives) {
    try {
      localStorage.setItem(CAT_STORAGE_KEY, JSON.stringify(actives));
    } catch (e) {
      // best-effort, com la resta de l'estat persistit del projecte.
    }
  }

  // id -> clau de categoria, per a filtratge O(1) en pintar la llista.
  let mapaCategoriaPerId = null;
  function categoriaDe(id) {
    if (!mapaCategoriaPerId) {
      mapaCategoriaPerId = {};
      (window.CLASSIFICACIO_TEMATICA || []).forEach((c) => {
        mapaCategoriaPerId[c.id] = c.categoriaTematica;
      });
    }
    return mapaCategoriaPerId[id];
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

    // Marca de guia: perquè les 52 preguntes que ja tenen escala de pistes
    // siguin localitzables des de la llista sense haver d'entrar-hi una a
    // una. Es fa amb el mateix patró que list.no_image_badge de sobre, i
    // desapareix sol quan una pregunta encara no en té (no hi ha estat
    // "sense guia" explícit, igual que no hi ha botó de pista buit a
    // detall.js).
    if (window.geoGuies && window.geoGuies.teGuia(pregunta)) {
      const guiaBadge = document.createElement("span");
      guiaBadge.className = "meta meta--separated guia-badge";
      guiaBadge.textContent = window.t("list.guide_badge");
      meta.appendChild(guiaBadge);
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
    const totes = window.geoOrdre ? window.geoOrdre.preguntesOrdenades() : (window.PREGUNTES || []);
    const visibles = totes.filter((p) => !EXERCICIS_AMAGATS.includes(p.id));
    const filtradesPerUrl = aplicaFiltres(visibles, view.filtres);
    const dimsActives = llegeixDimsActives();
    const catsActives = llegeixCatsActives(); // buit == totes
    const filtradesPerDim = filtradesPerUrl.filter((p) => dimsActives.includes(p.dimensio));
    const filtrades = catsActives.length
      ? filtradesPerDim.filter((p) => catsActives.includes(categoriaDe(p.id)))
      : filtradesPerDim;

    const header = document.createElement("header");

    // "Continua on ho vas deixar" (§7): només quan hi ha estat d'itinerari
    // real -- mai per a un alumne nou, que ja té la llista mateixa com a
    // "comença aquí" (§7: "don't show an empty or generic start-here").
    if (window.geoItinerari && !window.geoItinerari.esBuit()) {
      const suggeriments = window.geoItinerari.suggereix(null, 1);
      if (suggeriments.length) {
        const s = suggeriments[0];
        const continua = document.createElement("p");
        continua.className = "continua-banner";
        const a = document.createElement("a");
        a.href = "#" + s.pregunta.id;
        a.textContent =
          window.t("itinerary.continue_banner") + " " + s.pregunta.id;
        continua.appendChild(a);
        contenidorEl.appendChild(continua);
      }
    }

    const count = document.createElement("p");
    count.className = "eyebrow";
    const etiqueta = etiquetaFiltre(view.filtres);
    count.textContent =
      window.tf("list.question_count", { n: filtrades.length }) +
      (etiqueta ? " · " + etiqueta : "");
    header.appendChild(count);

    // Toggles 2D/3D (tipus iPad -- aria-pressed, mai els dos apagats
    // alhora, v. comentari de llegeixDimsActives()). Es repinta tota la
    // llista en clicar, mateix patró que qualsevol altre canvi de vista.
    const dimFiltre = document.createElement("div");
    dimFiltre.className = "dim-filtre";
    DIMS.forEach((dim) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "dim-filtre__toggle";
      btn.textContent = dim;
      btn.setAttribute("aria-pressed", String(dimsActives.includes(dim)));
      btn.addEventListener("click", () => {
        const actuals = llegeixDimsActives();
        let noves;
        if (actuals.includes(dim)) {
          noves = actuals.filter((d) => d !== dim);
          if (noves.length === 0) noves = DIMS.slice(); // mai els dos apagats
        } else {
          noves = actuals.concat(dim);
        }
        desaDimsActives(noves);
        render(view, root);
      });
      dimFiltre.appendChild(btn);
    });
    header.appendChild(dimFiltre);

    // Menú de categories temàtiques (selecció múltiple; cap seleccionada
    // == totes, v. comentari de llegeixCatsActives()). Mateix patró
    // d'interacció que dim-filtre: clic sobre un botó, es repinta tota
    // la llista.
    const categories = window.CATEGORIES_TEMATIQUES || [];
    if (categories.length) {
      const catFiltre = document.createElement("div");
      catFiltre.className = "cat-filtre";
      categories.forEach((cat) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "cat-filtre__toggle";
        btn.textContent = cat.etiqueta;
        const actiu = catsActives.length === 0 || catsActives.includes(cat.clau);
        btn.setAttribute("aria-pressed", String(actiu));
        btn.addEventListener("click", () => {
          const totesClaus = categoriesDisponibles();
          // Estat lògic actual: si catsActives és buit, es tracta com si
          // TOTES hi fossin (v. invariant documentat més amunt) -- cal
          // materialitzar-ho abans de treure'n una, si no "treure la
          // primera d'un buit" no fa res.
          const actuals = catsActives.length ? catsActives.slice() : totesClaus.slice();
          let noves;
          if (actuals.includes(cat.clau)) {
            noves = actuals.filter((c) => c !== cat.clau);
          } else {
            noves = actuals.concat(cat.clau);
          }
          // Si after el clic totes hi tornen a ser, es torna a l'estat
          // "buit" canònic (== totes), per coherència amb el que es
          // desa/llegeix de localStorage.
          if (noves.length === totesClaus.length) noves = [];
          desaCatsActives(noves);
          render(view, root);
        });
        catFiltre.appendChild(btn);
      });
      header.appendChild(catFiltre);
    }

    contenidorEl.appendChild(header);

    if (filtrades.length === 0) {
      const buit = document.createElement("p");
      buit.className = "question-entry__body";
      buit.style.marginTop = "var(--space-5)";
      // Clau dedicada (list.no_results) -- ja no reaprofita nav.source_note,
      // que ha desaparegut de la capçalera (§UI-UX: eyebrow suprimit).
      buit.textContent = window.t("list.no_results");
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
