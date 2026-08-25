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
  // Per-defecte real la primera vegada que s'obre el lloc en aquest
  // navegador (localStorage encara buit, mai s'ha desat res) -- a
  // petició explícita de l'owner, ara nomes "2D", no totes dues.
  const DIMS_PER_DEFECTE = ["2D"];

  function llegeixDimsActives() {
    try {
      const cru = localStorage.getItem(DIM_STORAGE_KEY);
      if (cru === null) return DIMS_PER_DEFECTE.slice(); // mai desat -- primer cop
      const desat = JSON.parse(cru);
      if (Array.isArray(desat) && desat.every((d) => DIMS.includes(d)) && desat.length) {
        return desat;
      }
    } catch (e) {
      // localStorage bloquejat o valor corrupte -- es degrada al
      // per-defecte, sense petar.
    }
    return DIMS_PER_DEFECTE.slice();
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
   *
   * Dues tandes acumulades:
   *  - q19, q20, q34, q35, q84, q88: petició original, sense relació
   *    amb cap categoria concreta.
   *  - q18a, q18b, q21, q24, q83: la resta de la categoria
   *    "aritmetica_algebra" (11 preguntes en total -- les altres 6 ja hi
   *    eren de la tanda anterior), a petició explícita d'amagar TOTA
   *    la categoria sencera. V. window.CLASSIFICACIO_TEMATICA per
   *    confirmar la llista completa si mai cal regenerar-la.
   *  - q87: tercera tanda, sol, NO forma part de "aritmetica_algebra"
   *    (categoritzada com "triangles" a window.CLASSIFICACIO_TEMATICA --
   *    tracta el sinus d'un angle obtús, no una propietat aritmètica).
   *    Decisió de contingut independent de l'owner. Aquesta llista ja
   *    no coincideix 1:1 amb cap categoria sencera des d'aquesta tanda.
   *  - q67, q102, q106: quarta tanda -- decidida en revisar quines
   *    preguntes sense imatge d'enunciat calia il·lustrar; per a
   *    aquestes tres, la decisió de contingut va ser amagar-les en lloc
   *    de dibuixar-los una imatge (v. NOTA-ENUNCIATS-D.md).
   */
  // Decisió de contingut de l'owner: aquestes 15 preguntes no es
  // mostren enlloc que llisti o suggereixi preguntes (aquesta llista,
  // "Anterior/Següent" a detall.js, "Suggerit per a tu" a itinerari.js)
  // -- però SÍ són accessibles per enllaç directe (#q19, etc.), amb la
  // seva guia completa (v. README §"Exercicis amagats de la llista").
  // 11 d'aquestes són EXACTAMENT les 11 preguntes de la categoria
  // "aritmetica_algebra" (per això aquella categoria no apareix al menú
  // de filtres, v. més avall); q87, q67, q102 i q106 s'hi van afegir
  // després per decisions de contingut independents -- per tant aquesta
  // llista ja NO coincideix 1:1 amb cap categoria completa.
  const EXERCICIS_AMAGATS = [
    "q19", "q20", "q34", "q35", "q84", "q88",
    "q18a", "q18b", "q21", "q24", "q83",
    "q87",
    "q67", "q102", "q106",
  ];

  /** True si l'id és a EXERCICIS_AMAGATS -- font única de veritat que
   *  altres mòduls (detall.js per a Anterior/Següent, itinerari.js per
   *  als suggeriments) consulten via window.geoLlista.esAmagada, en lloc
   *  de duplicar aquest array. */
  function esAmagada(id) {
    return EXERCICIS_AMAGATS.includes(id);
  }

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
  // Per-defecte real la primera vegada que s'obre el lloc en aquest
  // navegador -- a petició explícita de l'owner, ara nomes "triangles",
  // no totes. Diferent del concepte "buit == totes" que ja regeix un
  // cop l'usuari HA triat activament reactivar-les totes (v. mes avall,
  // al listener de clic): "mai desat" i "desat explícitament com a
  // buit" son dues coses diferents, distingides aqui amb
  // localStorage.getItem() === null (mai) vs. "[]" (triat).
  const CATS_PER_DEFECTE = ["triangles"];

  // Mateixa exclusió que el menú visible (v. render(): "aritmetica_algebra"
  // no es mostra perquè tots els seus exercicis són a EXERCICIS_AMAGATS) --
  // calia sincronitzar-la aquí també, perquè aquesta és la funció que
  // defineix què vol dir "totes" per a l'invariant de cap-seleccionada.
  // Si no coincidissin, sortir i tornar a entrar a una categoria "totes"
  // real (5) podria comparar-se contra un total vell (6) i quedar mig
  // activada per error.
  // clau de categoria -> fitxer d'icona (docs/icones-categories.html és
  // la font; SVG hand-drawn amb el mateix motor que tota la resta del
  // projecte, publicades a assets/img/icones/). "aritmetica_algebra" no
  // hi és perquè mai es mostra (v. filtre de categories() a render()).
  const ICONA_PER_CATEGORIA = {
    triangles: "icona-triangles.png",
    poligons: "icona-poligons.png",
    circumferencia: "icona-circumferencia.png",
    coniques: "icona-coniques.png",
    altres: "icona-altres.png",
  };

  function categoriesDisponibles() {
    return (window.CATEGORIES_TEMATIQUES || [])
      .filter((c) => c.clau !== "aritmetica_algebra")
      .map((c) => c.clau);
  }

  function llegeixCatsActives() {
    try {
      const cru = localStorage.getItem(CAT_STORAGE_KEY);
      if (cru === null) return CATS_PER_DEFECTE.slice(); // mai desat -- primer cop
      const desat = JSON.parse(cru);
      const totes = categoriesDisponibles();
      if (Array.isArray(desat) && desat.every((c) => totes.includes(c))) {
        return desat; // inclou el cas [] explícit: l'usuari ha triat "totes"
      }
    } catch (e) {
      // localStorage bloquejat o valor corrupte -- es degrada al
      // per-defecte, sense petar.
    }
    return CATS_PER_DEFECTE.slice();
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
   * Codi que l'alumne envia al professorat perquè li prepari una prova
   * escrita (v. README §"Prova escrita a partir del que has fet" —
   * analitzador-geom.html el llegeix per compondre l'examen).
   *
   * FORMAT: UNA SOLA LÍNIA, "GEO1-" + els ids separats per comes.
   *
   *     GEO1-q01,q05,q08a,q22
   *
   * Una línia i no un fitxer perquè el camí real és enganxar-lo a un
   * WhatsApp, a un correu o a una casella de resposta curta d'un
   * formulari: allà un adjunt fa nosa i un salt de línia es menja. Amb
   * 115 preguntes visibles, el pitjor cas possible (haver-les fet totes)
   * són 511 caràcters, i un cas normal de 25 preguntes en són 116 —
   * cap dels dos és problema per a cap d'aquests canals.
   *
   * No hi ha res xifrat ni cap control d'integritat, a diferència del
   * codi de repas: aquí no hi ha nota que es pugui falsejar en benefici
   * propi. El pitjor que pot passar és que un id no existeixi, i
   * l'analitzador ja els ignora en silenci.
   *
   * El prefix "GEO1" identifica format i versió: si mai canvia
   * l'esquema, el lector pot distingir un codi vell d'un de nou.
   */
  function formataCodi(ids) {
    return "GEO1-" + ids.join(",");
  }

  /**
   * Mateix contingut, en format fitxer. Es manté perquè l'analitzador
   * segueix acceptant-lo (i perquè un alumne amb 100 preguntes fetes
   * potser prefereix adjuntar-lo), però ja no és el camí principal.
   */
  function formataFitxer(ids) {
    const ara = new Date();
    const data = ara.getFullYear() + "-" + String(ara.getMonth() + 1).padStart(2, "0")
      + "-" + String(ara.getDate()).padStart(2, "0");
    return "GEO1\n" + "# " + data + " -- preguntes explorades (Geometria sintètica)\n"
      + ids.join("\n") + "\n";
  }

  function idsExplorats() {
    const ids = window.geoProgres ? window.geoProgres.totsFets() : [];
    return ids.slice().sort();
  }

  /** Avís temporal al botó quan encara no hi ha res a exportar. */
  function avisaBuit(boto) {
    if (!boto) return;
    const previ = boto.textContent;
    boto.textContent = window.t("list.export_empty");
    setTimeout(() => { boto.textContent = previ; }, 2200);
  }

  /**
   * Copia el codi al porta-retalls i el deixa visible en un camp de
   * només lectura.
   *
   * El camp no és redundant amb la còpia: navigator.clipboard pot fallar
   * (permisos, un navegador antic, o un context que no compta com a
   * segur), i llavors l'alumne ha de poder veure el codi i seleccionar-lo
   * a mà. Per això el camp es pinta SEMPRE i la còpia és el que pot
   * fallar, no a l'inrevés — i quan falla, es selecciona el text tot sol
   * perquè només calgui Ctrl+C.
   */
  function copiaCodi() {
    const boto = document.getElementById("geo-export-btn");
    const ids = idsExplorats();
    if (!ids.length) { avisaBuit(boto); return; }

    const codi = formataCodi(ids);
    const camp = document.getElementById("geo-export-codi");
    if (camp) {
      camp.value = codi;
      camp.hidden = false;
    }

    const fet = () => {
      if (!boto) return;
      const previ = window.t("list.export_button");
      boto.textContent = window.t("list.export_copied");
      setTimeout(() => { boto.textContent = previ; }, 2200);
    };
    const fallat = () => {
      if (camp) { camp.focus(); camp.select(); }
      if (!boto) return;
      const previ = window.t("list.export_button");
      boto.textContent = window.t("list.export_manual");
      setTimeout(() => { boto.textContent = previ; }, 3200);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(codi).then(fet, fallat);
    } else {
      fallat();
    }
  }

  /**
   * Descàrrega del mateix contingut en fitxer .txt. Mecanisme
   * a[download] amb blob, coherent amb "tot viu al navegador": no hi ha
   * res a enviar ni cap petició de xarxa.
   */
  function descarregaFitxer() {
    const ids = idsExplorats();
    if (!ids.length) { avisaBuit(document.getElementById("geo-export-btn")); return; }
    const blob = new Blob([formataFitxer(ids)], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "geometria-explorades.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    // revocat en un timeout, no immediatament després de click(): alguns
    // navegadors inicien la descàrrega de manera asíncrona i revocar-lo
    // massa d'hora pot deixar la descàrrega buida.
    setTimeout(() => URL.revokeObjectURL(url), 1000);
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
    eyebrow.textContent = window.geoContingut.etiquetaQuestio(pregunta.id);
    meta.appendChild(eyebrow);

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
          window.t("itinerary.continue_banner") +
          " " +
          window.geoContingut.etiquetaQuestio(s.pregunta.id);
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

    // Bloc "Copia el meu codi" (v. copiaCodi() més amunt): acció, no
    // filtre -- per això va sol, separat dels toggles 2D/3D i categories
    // que sí que canvien què es veu en aquesta mateixa pàgina. ids fixos
    // (geo-export-btn, geo-export-codi) perquè copiaCodi() els trobi per
    // escriure-hi el codi i canviar el text del botó temporalment.
    const exportBloc = document.createElement("div");
    exportBloc.className = "export-explorades";

    const exportBtn = document.createElement("button");
    exportBtn.type = "button";
    exportBtn.id = "geo-export-btn";
    exportBtn.className = "export-explorades__boto";
    exportBtn.textContent = window.t("list.export_button");
    exportBtn.title = window.t("list.export_note");
    exportBtn.addEventListener("click", copiaCodi);
    exportBloc.appendChild(exportBtn);

    // Camp de només lectura amb el codi. Comença amagat i apareix en
    // copiar: és la xarxa de seguretat per si el porta-retalls falla
    // (v. copiaCodi), i alhora deixa veure a l'alumne què està enviant.
    const exportCamp = document.createElement("input");
    exportCamp.type = "text";
    exportCamp.id = "geo-export-codi";
    exportCamp.className = "export-explorades__codi";
    exportCamp.readOnly = true;
    exportCamp.hidden = true;
    exportCamp.setAttribute("aria-label", window.t("list.export_field_label"));
    exportCamp.addEventListener("focus", function () { this.select(); });
    exportBloc.appendChild(exportCamp);

    // El fitxer es manté com a sortida secundària (l'analitzador el
    // segueix llegint), però ja no és el camí principal: enganxar una
    // línia a un WhatsApp o a un formulari és més simple que adjuntar.
    const exportFitxer = document.createElement("button");
    exportFitxer.type = "button";
    exportFitxer.className = "export-explorades__fitxer";
    exportFitxer.textContent = window.t("list.export_file");
    exportFitxer.addEventListener("click", descarregaFitxer);
    exportBloc.appendChild(exportFitxer);

    header.appendChild(exportBloc);

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
    // "aritmetica_algebra" no es mostra al menu: TOTS els seus exercicis
    // son a EXERCICIS_AMAGATS (petició explícita de l'owner), per tant
    // un boto per a aquesta categoria sempre donaria 0 resultats -- no
    // te sentit oferir-lo. Si mai es torna a fer visible algun exercici
    // d'aquesta categoria, cal treure aquest filtre a ma tambe.
    const categories = (window.CATEGORIES_TEMATIQUES || []).filter(
      (c) => c.clau !== "aritmetica_algebra"
    );
    if (categories.length) {
      const catFiltre = document.createElement("div");
      catFiltre.className = "cat-filtre";
      categories.forEach((cat) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "cat-filtre__toggle";
        btn.title = cat.etiqueta;
        btn.setAttribute("aria-label", cat.etiqueta);
        const fitxerIcona = ICONA_PER_CATEGORIA[cat.clau];
        if (fitxerIcona) {
          const img = document.createElement("img");
          img.src = "assets/img/icones/" + fitxerIcona;
          img.alt = "";
          img.className = "cat-filtre__icon";
          btn.appendChild(img);
        } else {
          // Degradacio segura: si mai s'afegeix una categoria nova sense
          // icona assignada a ICONA_PER_CATEGORIA, es mostra el text en
          // lloc de deixar el boto buit.
          btn.textContent = cat.etiqueta;
        }
        const actiu = catsActives.length === 0 || catsActives.includes(cat.clau);
        btn.setAttribute("aria-pressed", String(actiu));
        btn.addEventListener("click", () => {
          const totesClaus = categoriesDisponibles();
          // catsActives buit NOMÉS pot arribar aquí si l'usuari ja ha
          // triat explícitament "totes" (v. llegeixCatsActives(): el
          // per-defecte real de "mai desat" ja no és buit, és
          // CATS_PER_DEFECTE). Es tracta igualment com "totes hi són",
          // per materialitzar-ho abans de treure'n una.
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

    // Targeta "Segueix un itinerari temàtic" (HANDOFF-ITINERARIS.md,
    // punt (a)): un únic enllaç d'entrada cap a #itineraris, sota la
    // capçalera i abans de la llista mateixa -- mai substitueix la
    // llista general (§7 de DEMO-PROOF-INTRO-DESIGN-NOTES.md aplica el
    // mateix principi aquí: la llista sempre és l'estat per defecte,
    // els itineraris són una porta opcional, no obligatòria). Es
    // degrada bé (bloc simplement no es pinta) si geoItinerarisTematics
    // no s'ha carregat.
    if (window.geoItinerarisTematics && window.geoItinerarisTematics.itineraris().length) {
      const targeta = document.createElement("a");
      targeta.href = "#itineraris";
      targeta.className = "itineraris-entrada";
      const titol = document.createElement("span");
      titol.className = "itineraris-entrada__title";
      titol.textContent = window.t("itineraris.list_card_title");
      targeta.appendChild(titol);
      const cos = document.createElement("span");
      cos.className = "itineraris-entrada__body";
      cos.textContent = window.t("itineraris.list_card_body");
      targeta.appendChild(cos);
      const link = document.createElement("span");
      link.className = "itineraris-entrada__link";
      link.textContent = window.t("itineraris.list_card_link");
      targeta.appendChild(link);
      contenidorEl.appendChild(targeta);
    }

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
    esAmagada: esAmagada,
  };
})();
