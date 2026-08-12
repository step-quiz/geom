/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/ui/demo.js
  ROL:          Vista "què és una demostració" (#demo,
                DEMO-PROOF-INTRO-DESIGN-NOTES.md). Tercera vista al costat
                de llista.js i detall.js, muntada per main.js.pinta() igual
                que les altres dues (§5: "afegir una tercera vista... no
                requereix tocar cap HTML pre-existent" — comentari que
                main.js ja anticipava).

  PER QUÈ NO REUTILITZA pintaGuia() / l'escala de pistes de detall.js
  Deliberat (§0/§7 del document): aquí la solució s'ha de donar SENCERA,
  visible tota alhora, mai amagada rere un botó de revelar — l'excepció
  contrària i explícita a la regla "cap nivell dona mai la solució" que
  sí regeix les guies reals. Reutilitzar el mecanisme de revelar-un-per-un
  aquí aplicaria una eina pensada per protegir un enunciat obert a un
  contingut que, per disseny, no n'és un.

  ESTRUCTURA FIXA DE QUATRE MOMENTS (§2): claim / perquè no és obvi /
  l'argument (amb figura) / què acaba de passar -- la mateixa forma per a
  les tres demos, sempre visible sencera, mai amagada.

  DEPENDÈNCIES: js/data/demos-dades.js (window.DEMOS), js/nucli/demos.js
                (window.geoDemos), js/nucli/router.js (per als enllaços
                de tancament cap a preguntes reals), js/i18n/i18n-core.js.
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

  function afegeixParagrafs(destinacio, text, classe) {
    String(text || "")
      .split("\n\n")
      .forEach((tros) => {
        const p = document.createElement("p");
        p.className = classe || "demo__text";
        p.textContent = tros;
        destinacio.appendChild(p);
      });
  }

  function pintaUnaDemo(demo, lang) {
    const r = (camp) => (camp && (camp[lang] || camp.ca)) || "";

    const art = document.createElement("article");
    art.className = "demo";

    const h2 = document.createElement("h2");
    h2.className = "demo__title";
    h2.textContent = r(demo.titol);
    art.appendChild(h2);

    // Moment 1: claim
    const claimBloc = document.createElement("div");
    claimBloc.className = "demo__beat demo__beat--claim";
    afegeixParagrafs(claimBloc, r(demo.claim));
    art.appendChild(claimBloc);

    // Figura (moment 3, però visualment just sota el claim -- l'estructura
    // sencera és sempre visible, l'ordre de lectura natural és figura a
    // prop de l'argument que il·lustra)
    if (demo.figura) {
      const fig = document.createElement("figure");
      fig.className = "demo__figure";
      const img = document.createElement("img");
      img.src = "assets/img/demo/" + demo.figura;
      img.alt = window.t("demo.figure_alt");
      img.loading = "lazy";
      fig.appendChild(img);
      art.appendChild(fig);
    }

    // Moment 2: per que no es obvi
    const bloc2 = document.createElement("div");
    bloc2.className = "demo__beat";
    const h2b = document.createElement("h3");
    h2b.className = "demo__beat-label";
    h2b.textContent = window.t("demo.beat_why");
    bloc2.appendChild(h2b);
    afegeixParagrafs(bloc2, r(demo.perque_no_es_obvi));
    art.appendChild(bloc2);

    // Moment 3: l'argument
    const bloc3 = document.createElement("div");
    bloc3.className = "demo__beat demo__beat--argument";
    const h3b = document.createElement("h3");
    h3b.className = "demo__beat-label";
    h3b.textContent = window.t("demo.beat_argument");
    bloc3.appendChild(h3b);
    afegeixParagrafs(bloc3, r(demo.argument));
    art.appendChild(bloc3);

    // Moment 4: que acaba de passar
    const bloc4 = document.createElement("div");
    bloc4.className = "demo__beat demo__beat--close";
    const h4b = document.createElement("h3");
    h4b.className = "demo__beat-label";
    h4b.textContent = window.t("demo.beat_move");
    bloc4.appendChild(h4b);
    if (demo.movimentTitol) {
      const mov = document.createElement("p");
      mov.className = "demo__move";
      mov.textContent = window.tf("demo.move_label", { move: r(demo.movimentTitol) });
      bloc4.appendChild(mov);
    }
    afegeixParagrafs(bloc4, r(demo.que_acaba_de_passar));
    art.appendChild(bloc4);

    // Tancament: enllaç concret cap a una pregunta real (§5, últim punt)
    if (demo.handoff) {
      const hand = document.createElement("div");
      hand.className = "demo__handoff";
      afegeixParagrafs(hand, r(demo.handoff.text), "demo__handoff-text");
      const a = document.createElement("a");
      a.href = "#" + demo.handoff.questionId;
      a.className = "demo__handoff-link";
      a.textContent = window.tf("demo.open_question", { id: demo.handoff.questionId });
      // Només demo-03 -> q02 dispara marcaFet, i només un cop obert q02
      // de debò (§6: "not purely as a side effect of finishing the demo
      // text") -- v. js/nucli/demos.js i el consum a detall.js.
      if (demo.id === "demo-03-four-triangles" && window.geoDemos) {
        a.addEventListener("click", () => window.geoDemos.marcaHandoffQ02Seguit());
      }
      hand.appendChild(a);
      art.appendChild(hand);
    }

    return art;
  }

  function render(view, root) {
    if (!contenidorEl || !contenidorEl.isConnected) {
      munta(root);
    }
    contenidorEl.innerHTML = "";

    const lang = window.geoI18n.getLang();

    const header = document.createElement("header");
    const eyebrow = document.createElement("p");
    eyebrow.className = "eyebrow";
    eyebrow.textContent = window.t("demo.eyebrow");
    header.appendChild(eyebrow);
    const h1 = document.createElement("h1");
    h1.className = "demo__page-title";
    h1.textContent = window.t("demo.page_title");
    header.appendChild(h1);
    const intro = document.createElement("p");
    intro.className = "demo__intro";
    intro.textContent = window.t("demo.intro");
    header.appendChild(intro);
    contenidorEl.appendChild(header);

    const demos = window.DEMOS || [];
    demos.forEach((demo) => {
      contenidorEl.appendChild(pintaUnaDemo(demo, lang));
      // Completa per construcció en el moment de llegir-se (§6) -- no cal
      // cap interacció addicional per marcar-la vista.
      if (window.geoDemos) window.geoDemos.marcaVista(demo.id);
    });

    const tornar = document.createElement("p");
    tornar.className = "demo__back";
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = window.t("demo.back_to_list");
    tornar.appendChild(a);
    contenidorEl.appendChild(tornar);
  }

  window.geoDemo = {
    render: render,
  };
})();
