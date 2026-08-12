/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/ui/detall.js
  ROL:          Vista "una pregunta". Enunciat + imatge (o imatges) +
                pista opcional + navegació. Reutilitza les classes de
                css/base.css per al ritme de lectura (mateixa signatura
                visual que la llista: la pregunta en negreta interromp
                el text igual que al llibre) i les noves de
                css/components.css per als elements interactius propis
                d'aquesta vista.
  ARQUITECTURA: window.geoDetall.render(view, root) — view és l'objecte
                {kind:'detall', id, pregunta} que emet geoRouter. Com
                llista.js, no es subscriu ell mateix al router: main.js
                decideix quina de les dues vistes toca muntar en cada
                moment.
  DEPENDÈNCIES: js/i18n/i18n-core.js, js/nucli/contingut.js,
                js/nucli/progres.js, js/nucli/router.js (per calcular
                anterior/següent i navegar-hi)

  REGLES QUE CAL RESPECTAR AMB PRECISIÓ (v. PROPOSTA-ARQUITECTURA.md §4)
  - "una entrada null cau automàticament a en" — tot el contingut bilingüe
    (enunciat, pista, notaEditorial) passa per geoContingut.resolCamp().
  - "una pregunta sense pista simplement no mostra el botó 💡" — NO es
    mostra un botó desactivat ni un text "sense pista" per defecte; el
    botó de pista simplement no existeix al DOM si teContingut(pista) és
    fals. (Al fallback ui-strings.detail.no_hint hi ha un text per a
    aquest cas, però no s'usa aquí — es reserva per si en un futur pas es
    decideix mostrar-lo explícitament; ara mateix "no mostrar res" és la
    lectura més fidel de la frase del document.)
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

  /**
   * Troba l'índex de la pregunta actual dins window.PREGUNTES EN EL
   * MOMENT DE CRIDAR-HO (mai memoritzat), perquè anterior/següent
   * segueixin sent correctes encara que l'array hagi crescut o canviat
   * d'ordre entre generacions de preguntes-dades.js — mateix principi
   * que router.js ja aplica per a la resolució d'id (v. pas 4).
   */
  function veins(id) {
    const totes = window.PREGUNTES || [];
    const idx = totes.findIndex((p) => p.id === id);
    if (idx === -1) return { anterior: null, seguent: null };
    return {
      anterior: idx > 0 ? totes[idx - 1] : null,
      seguent: idx < totes.length - 1 ? totes[idx + 1] : null,
    };
  }

  /**
   * Crea un <figure> per a UN fitxer d'imatge concret, aplicant la
   * classe --scan quan esCrop és true, i --inverted quan esInvertida és
   * true (v. contingut.js esInvertidaFitxer — únic cas conegut: q42).
   * Extret a part perquè tant el cas singular com el plural (graella de
   * dues imatges) el reutilitzin sense duplicar aquesta lògica.
   */
  function creaFigura(pregunta, fitxer, esCrop, esInvertida, indexEtiqueta) {
    const figure = document.createElement("figure");
    let classe = "question-entry__figure";
    if (esCrop) classe += " question-entry__figure--scan";
    if (esInvertida) classe += " question-entry__figure--inverted";
    figure.className = classe;

    // Embolcall d'alçada fixa (--figure-slot-h) i centrat flex — separat
    // del <figure> perquè el figcaption (més avall) no hi quedi atrapat
    // i es reparteixi en fila al costat de la imatge (v. comentari a
    // css/base.css .question-entry__figure-frame).
    const frame = document.createElement("div");
    frame.className = "question-entry__figure-frame";

    const img = document.createElement("img");
    img.src = "assets/img/" + fitxer;
    img.alt = ""; // decoratiu per defecte: l'enunciat ja porta el contingut;
    // v. nota d'accessibilitat més avall sobre per què no es genera
    // un alt automàtic a partir de l'enunciat.
    img.loading = "lazy";
    frame.appendChild(img);
    figure.appendChild(frame);

    const caption = document.createElement("figcaption");
    caption.textContent = window.tf("detail.figure_source_label", {
      id: pregunta.id + (indexEtiqueta ? " (" + indexEtiqueta + ")" : ""),
      page: pregunta.imatge.paginaFont,
    });
    if (esCrop) {
      caption.textContent += " · " + window.t("detail.figure_scan_note");
    }
    figure.appendChild(caption);

    return figure;
  }

  /**
   * Pinta el bloc d'imatge(s) de la pregunta: cap, una, o dues (cas
   * imatge.fitxers — v. contingut.js nomsFitxer/esCropFitxer/
   * esInvertidaFitxer, que ja normalitzen singular/plural a arrays
   * paral·lels).
   *
   * Quan la pregunta NO té imatge, s'afegeix igualment un
   * .question-entry__figure-empty (buit, sense contingut) en lloc de no
   * afegir res: reserva la mateixa --figure-slot-h que una pregunta amb
   * imatge perquè "Anterior/Següent" caigui sempre a la mateixa alçada
   * absoluta a les 130 preguntes — decisió explícita de l'usuari
   * (consistència total per damunt de compacitat) davant l'alternativa
   * de deixar les preguntes de text sense aquest espai reservat.
   */
  function pintaImatges(pregunta, contenidor) {
    const fitxers = window.geoContingut.nomsFitxer(pregunta);
    if (fitxers.length === 0) {
      const buit = document.createElement("div");
      buit.className = "question-entry__figure-empty";
      contenidor.appendChild(buit);
      return;
    }

    const esCrops = window.geoContingut.esCropFitxer(pregunta);
    const esInvertides = window.geoContingut.esInvertidaFitxer(pregunta);

    if (fitxers.length === 1) {
      contenidor.appendChild(
        creaFigura(pregunta, fitxers[0], esCrops[0], esInvertides[0], null)
      );
      return;
    }

    const grup = document.createElement("div");
    grup.className = "question-entry__figure-group";
    fitxers.forEach((fitxer, i) => {
      grup.appendChild(
        creaFigura(pregunta, fitxer, esCrops[i], esInvertides[i], i + 1)
      );
    });
    contenidor.appendChild(grup);
  }

  /**
   * Botó de pista: només es crea (i s'afegeix al DOM) si la pregunta en
   * té de debò. Alternar-lo mostra/amaga .hint-text i actualitza
   * aria-expanded + la pròpia etiqueta del botó (show/hide, segons
   * ui-strings.js).
   */
  function pintaPista(pregunta, lang, contenidor) {
    if (!window.geoContingut.teContingut(pregunta.pista)) return;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "hint-button";
    btn.setAttribute("aria-expanded", "false");
    btn.textContent = window.t("detail.hint_show");

    const text = document.createElement("p");
    text.className = "hint-text";
    text.textContent = window.geoContingut.resolCamp(pregunta.pista, lang);
    text.hidden = true;

    btn.addEventListener("click", () => {
      const obert = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!obert));
      btn.textContent = window.t(obert ? "detail.hint_show" : "detail.hint_hide");
      text.hidden = obert;
    });

    contenidor.appendChild(btn);
    contenidor.appendChild(text);
  }


  /**
   * ESCALA DE PISTES (guia de demostració).
   *
   * Regla pedagògica que el DOM ha de fer complir, no només suggerir: els
   * quatre nivells difereixen en ESPÈCIE, no en quantitat (0 encàrrec,
   * 1 concreta, 2 figura, 3 tanca), i cap d'ells dona la solució. Per això
   * es revelen d'un en un i EN ORDRE: si es mostressin tots alhora, l'ull
   * cauria directament a la figura del nivell 2 i els nivells 0 i 1 —que són
   * els que ensenyen QUÈ és una demostració— no es llegirien mai.
   *
   * No es desa res a progres.js: quantes pistes ha obert algú en una
   * pregunta és informació efímera i, si es recordés entre visites, la
   * pregunta ja no es podria tornar a intentar en fred.
   */
  function pintaGuia(pregunta, lang, contenidor) {
    if (!window.geoGuies || !window.geoGuies.teGuia(pregunta)) return;

    const guia = window.geoGuies.guiaDe(pregunta);
    const r = (camp) => window.geoGuies.resolCampGuia(camp, lang);

    const seccio = document.createElement("section");
    seccio.className = "guia";

    const cap = document.createElement("div");
    cap.className = "guia__header";
    const titol = document.createElement("h2");
    titol.className = "guia__title";
    titol.textContent = window.t("guide.title");
    cap.appendChild(titol);
    if (guia.movimentTitol) {
      const mov = document.createElement("p");
      mov.className = "guia__move";
      mov.textContent = window.tf("guide.move_label", { move: r(guia.movimentTitol) });
      cap.appendChild(mov);
    }
    seccio.appendChild(cap);

    const llista = document.createElement("ol");
    llista.className = "guia__steps";
    seccio.appendChild(llista);

    // Peu: comprovació i "i després". Es creen ara però només s'insereixen
    // quan s'ha obert l'última pista — són el tancament de l'escala, i
    // ensenyar la comprovació abans d'haver mirat cap pista convidaria a
    // saltar-se-la.
    const peu = document.createElement("div");
    peu.className = "guia__footer";
    peu.hidden = true;
    [["guide.check", guia.comprovacio, "guia__check"],
     ["guide.after", guia.iDespres, "guia__after"]].forEach(([clau, camp, cls]) => {
      const text = r(camp);
      if (!text) return;
      const bloc = document.createElement("div");
      bloc.className = cls;
      const h = document.createElement("h3");
      h.className = "guia__subtitle";
      h.textContent = window.t(clau);
      bloc.appendChild(h);
      afegeixParagrafs(bloc, text);
      peu.appendChild(bloc);
    });
    seccio.appendChild(peu);

    const boto = document.createElement("button");
    boto.type = "button";
    boto.className = "guia__reveal";
    seccio.appendChild(boto);

    let obertes = 0;

    function actualitzaBoto() {
      if (obertes === 0) {
        boto.textContent = window.t("guide.start");
      } else if (obertes < guia.pistes.length) {
        boto.textContent = window.tf("guide.next_hint", {
          n: obertes + 1, total: guia.pistes.length,
        });
      } else {
        boto.hidden = true;
        peu.hidden = false;
      }
    }

    function revela() {
      const pista = guia.pistes[obertes];
      if (!pista) return;

      const li = document.createElement("li");
      li.className = "guia__step guia__step--n" + pista.nivell;

      const etiqueta = document.createElement("p");
      etiqueta.className = "guia__step-label";
      // L'etiqueta i18n només aporta el número ("Pista 2"); la part
      // descriptiva la posa el subtítol propi de la guia, que ja ve escrit
      // al .md d'origen. Si es fessin servir totes dues completes, el mateix
      // sintagma sortiria repetit i en dos idiomes diferents.
      const nom = window.t("guide.level_" + pista.nivell);
      const sub = (pista.titol ? r(pista.titol) : "") ||
                  window.t("guide.level_" + pista.nivell + "_fallback");
      etiqueta.textContent = sub ? nom + " — " + sub : nom;
      li.appendChild(etiqueta);

      const text = r(pista.text);
      if (text) afegeixParagrafs(li, text);

      if (pista.figura) {
        const fig = document.createElement("figure");
        fig.className = "guia__figure";
        const img = document.createElement("img");
        img.src = window.geoGuies.rutaFigura(pista.figura);
        img.alt = window.t("guide.figure_alt");
        img.loading = "lazy";
        fig.appendChild(img);
        li.appendChild(fig);
      }

      llista.appendChild(li);
      obertes += 1;
      actualitzaBoto();
    }

    boto.addEventListener("click", revela);
    actualitzaBoto();
    contenidor.appendChild(seccio);
  }

  /**
   * El text de les guies conserva els salts de paràgraf del .md d'origen
   * (separats per una línia en blanc). Es respecten com a <p> separats en
   * lloc d'ajuntar-ho tot: a les pistes llargues, el segon paràgraf sol ser
   * l'aclariment entre parèntesis, i ha de poder-se saltar amb la vista.
   */
  function afegeixParagrafs(destinacio, text) {
    String(text).split("\n\n").forEach((tros) => {
      const p = document.createElement("p");
      p.className = "guia__text";
      p.textContent = tros;
      destinacio.appendChild(p);
    });
  }

  function pintaMarcadorFet(pregunta, contenidor) {
    if (!window.geoProgres) return;

    const label = document.createElement("label");
    label.className = "done-toggle";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = window.geoProgres.esFet(pregunta.id);
    checkbox.addEventListener("change", () => {
      window.geoProgres.marcaFet(pregunta.id, checkbox.checked);
    });

    label.appendChild(checkbox);
    // Text fix breu — no hi ha clau dedicada a ui-strings.js encara
    // (fora d'abast d'aquest pas concret); "explorat" es manté neutre en
    // els dos idiomes per no introduir contingut d'interfície nou sense
    // que main.js/una revisió d'i18n ho reculli formalment.
    label.appendChild(document.createTextNode(" explorat"));

    contenidor.appendChild(label);
  }

  function pintaNavegacio(pregunta, contenidor) {
    const { anterior, seguent } = veins(pregunta.id);
    const nav = document.createElement("nav");
    nav.className = "detail-nav";

    const back = document.createElement("a");
    back.href = "#";
    back.className = "detail-nav__back";
    back.textContent = window.t("detail.back_to_list");
    nav.appendChild(back);

    const adjacent = document.createElement("div");
    adjacent.className = "detail-nav__adjacent";

    if (anterior) {
      const a = document.createElement("a");
      a.href = "#" + anterior.id;
      a.textContent = window.t("detail.prev");
      adjacent.appendChild(a);
    }
    if (seguent) {
      const a = document.createElement("a");
      a.href = "#" + seguent.id;
      a.textContent = window.t("detail.next");
      adjacent.appendChild(a);
    }

    nav.appendChild(adjacent);
    contenidor.appendChild(nav);
  }

  function render(view, root) {
    if (!contenidorEl || !contenidorEl.isConnected) {
      munta(root);
    }
    contenidorEl.innerHTML = "";

    const pregunta = view.pregunta;
    const lang = window.geoI18n.getLang();

    const meta = document.createElement("div");
    meta.className = "question-entry__meta";

    const eyebrow = document.createElement("span");
    eyebrow.className = "eyebrow";
    eyebrow.textContent = pregunta.id;
    meta.appendChild(eyebrow);

    const pagina = document.createElement("span");
    pagina.className = "meta meta--separated";
    pagina.textContent = window.tf("detail.page_label", { page: pregunta.pagina });
    meta.appendChild(pagina);

    contenidorEl.appendChild(meta);

    const prompt = document.createElement("p");
    prompt.className = "question-entry__prompt";
    prompt.textContent = window.geoContingut.resolCamp(pregunta.enunciat, lang);
    contenidorEl.appendChild(prompt);

    if (window.geoContingut.esFallback(pregunta.enunciat, lang)) {
      const notice = document.createElement("p");
      notice.className = "untranslated-notice";
      notice.textContent = window.t("meta.untranslated_notice");
      contenidorEl.appendChild(notice);
    }

    pintaImatges(pregunta, contenidorEl);
    pintaPista(pregunta, lang, contenidorEl);
    pintaGuia(pregunta, lang, contenidorEl);
    pintaMarcadorFet(pregunta, contenidorEl);
    pintaNavegacio(pregunta, contenidorEl);
  }

  window.geoDetall = {
    render: render,
  };
})();
