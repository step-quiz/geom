/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/ui/demo.js
  ROL:          Vista "què és una demostració" (#demo). Tercera vista al
                costat de llista.js i detall.js, muntada per main.js.pinta()
                igual que les altres dues.

  CANVI DE FONS (reversió deliberada, a petició explícita de l'owner):
  ara SÍ reutilitza el mecanisme de revelar-un-per-un de detall.js
  (pintaGuia/revela) -- la justificació documentada anteriorment ("aquí
  la solució s'ha de donar sencera, mai amagada rere un botó") queda
  desautoritzada aquí, a proposit. L'owner volia un bucle real
  llegir -> provar al paper -> comparar -> comprovar, i aquest bucle
  exigeix que l'alumne NO vegi el pas següent abans d'haver-ho intentat.

  ESTRUCTURA (v. capçalera de demos-dades.js per al detall del format):
  cada demo és ara demo.passos, un array de 6 (pas 0 = context, sempre
  visible; passos 1-4 = un per panell de figura, amb enunciat + text +
  comprovacio; pas 5 = tancament + handoff). El pas 0 es pinta sempre;
  els passos 1-5 es revelen d'un en un amb un boto, mateix patró exacte
  que guia__reveal/guia__steps a detall.js -- pero amb classes .demo__
  propies (mai .guia__, per no barrejar CSS pensat per a preguntes reals
  amb aquest contingut, que segueix sent conceptualment diferent: aqui
  NO hi ha "cap nivell dona mai la solucio", el pas 5 SI la dona sencera).

  MARCAVISTA: ara es crida quan es revela el PAS 5 (el tancament), no en
  pintar -- amb passos amagats, "he vist la demo" nomes te sentit un cop
  s'ha arribat al final, no en muntar la pagina.

  TANCAMENT COMPARTIT (window.DEMOS_TANCAMENT, demos-dades.js): despres
  de les tres demos senceres, no dins de cap d'elles -- sense canvis
  respecte de com ja funcionava.

  DEPENDÈNCIES: js/data/demos-dades.js (window.DEMOS, window.DEMOS_TANCAMENT),
                js/nucli/demos.js (window.geoDemos), js/nucli/router.js (per
                als enllaços de tancament cap a preguntes reals),
                js/i18n/i18n-core.js.
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

  function pintaFiguraPanell(demo, numPanell, contenidor) {
    if (!demo.figura || numPanell === undefined || numPanell === null) return;
    const fig = document.createElement("figure");
    fig.className = "demo__figure";
    const img = document.createElement("img");
    img.src = "assets/img/demo/" + demo.figura + "-p" + numPanell + ".png";
    img.alt = window.t("demo.figure_alt");
    img.loading = "lazy";
    fig.appendChild(img);
    contenidor.appendChild(fig);
  }

  function pintaUnaDemo(demo, lang) {
    const r = (camp) => (camp && (camp[lang] || camp.ca)) || "";

    const art = document.createElement("article");
    art.className = "demo";

    const h2 = document.createElement("h2");
    h2.className = "demo__title";
    h2.textContent = r(demo.titol);
    art.appendChild(h2);

    // Pas 0: context. Sempre visible, mai amagat -- equivalent a
    // l'enunciat d'una pregunta real, que tampoc s'amaga mai.
    const pas0 = demo.passos[0];
    const contextBloc = document.createElement("div");
    contextBloc.className = "demo__context";
    afegeixParagrafs(contextBloc, r(pas0.context));
    art.appendChild(contextBloc);

    // Passos 1..5: amagats, revelats d'un en un -- mateix patró exacte
    // que pintaGuia/revela a detall.js.
    const llista = document.createElement("ol");
    llista.className = "demo__steps";
    art.appendChild(llista);

    const boto = document.createElement("button");
    boto.type = "button";
    boto.className = "demo__reveal";
    art.appendChild(boto);

    let obertes = 0;
    const totalPassos = demo.passos.length - 1; // sense comptar el pas 0

    function actualitzaBoto() {
      if (obertes === 0) {
        boto.textContent = window.t("demo.start");
      } else if (obertes < totalPassos) {
        boto.textContent = window.tf("demo.next_step", {
          n: obertes + 1, total: totalPassos,
        });
      } else {
        boto.hidden = true;
      }
    }

    function revela() {
      const pas = demo.passos[obertes + 1];
      if (!pas) return;
      const numPas = obertes + 1;
      const esTancament = numPas === totalPassos;

      const li = document.createElement("li");
      li.className = "demo__step" + (esTancament ? " demo__step--close" : "");

      if (esTancament) {
        // Pas 5: tancament -- moviment + text + handoff, mateix format
        // que abans, pero ara com a pas revelat, no com a bloc sempre visible.
        const etiqueta = document.createElement("p");
        etiqueta.className = "demo__step-label";
        etiqueta.textContent = window.t("demo.beat_move");
        li.appendChild(etiqueta);

        if (demo.movimentTitol) {
          const mov = document.createElement("p");
          mov.className = "demo__move";
          mov.textContent = window.tf("demo.move_label", { move: r(demo.movimentTitol) });
          li.appendChild(mov);
        }
        afegeixParagrafs(li, r(pas.tancament));

        if (pas.handoff) {
          const hand = document.createElement("div");
          hand.className = "demo__handoff";
          afegeixParagrafs(hand, r(pas.handoff.text), "demo__handoff-text");
          const a = document.createElement("a");
          a.href = "#" + pas.handoff.questionId;
          a.className = "demo__handoff-link";
          a.textContent = window.tf("demo.open_question", {
            id: window.geoContingut.etiquetaQuestio(pas.handoff.questionId),
          });
          if (demo.id === "demo-03-four-triangles" && window.geoDemos) {
            a.addEventListener("click", () => window.geoDemos.marcaHandoffQ02Seguit());
          }
          hand.appendChild(a);
          li.appendChild(hand);
        }

        // Es marca "vista" nomes ara, en arribar al final -- no en pintar
        // la pagina (§ capçalera d'aquest fitxer).
        if (window.geoDemos) window.geoDemos.marcaVista(demo.id);
      } else {
        // Passos 1..4: enunciat (prova-ho al paper) + figura + text +
        // comprovacio -- el bucle nou que no existia abans.
        const etiqueta = document.createElement("p");
        etiqueta.className = "demo__step-label";
        etiqueta.textContent = window.tf("demo.step_label", { n: numPas, total: totalPassos });
        li.appendChild(etiqueta);

        if (pas.enunciat) {
          const enunciatBloc = document.createElement("div");
          enunciatBloc.className = "demo__try";
          const h = document.createElement("p");
          h.className = "demo__try-label";
          h.textContent = window.t("demo.try_label");
          enunciatBloc.appendChild(h);
          afegeixParagrafs(enunciatBloc, r(pas.enunciat), "demo__try-text");
          li.appendChild(enunciatBloc);
        }

        pintaFiguraPanell(demo, pas.figuraPanell, li);
        afegeixParagrafs(li, r(pas.text));

        if (pas.comprovacio) {
          const compBloc = document.createElement("div");
          compBloc.className = "demo__check";
          const h = document.createElement("p");
          h.className = "demo__check-label";
          h.textContent = window.t("demo.check_label");
          compBloc.appendChild(h);
          afegeixParagrafs(compBloc, r(pas.comprovacio), "demo__check-text");
          li.appendChild(compBloc);
        }
      }

      llista.appendChild(li);
      obertes += 1;
      actualitzaBoto();
    }

    boto.addEventListener("click", revela);
    actualitzaBoto();

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
    });

    // Tancament compartit, despres de les tres (v. capçalera de
    // demos-dades.js): nomes es pinta si hi ha les tres demos carregades
    // -- es degrada be (simplement no apareix) si mai queda buit o parcial.
    if (window.DEMOS_TANCAMENT && demos.length === 3) {
      const r = (camp) => (camp && (camp[lang] || camp.ca)) || "";
      const tancament = document.createElement("section");
      tancament.className = "demo__tancament";
      const h2t = document.createElement("h2");
      h2t.className = "demo__tancament-title";
      h2t.textContent = r(window.DEMOS_TANCAMENT.titol);
      tancament.appendChild(h2t);
      afegeixParagrafs(tancament, r(window.DEMOS_TANCAMENT.text), "demo__tancament-text");
      contenidorEl.appendChild(tancament);
    }

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
