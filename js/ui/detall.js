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
                anterior/següent i navegar-hi), js/nucli/ordre.js
                (anterior/següent segueix l'ordre de presentació
                configurable, no l'ordre del llibre — v. veins() més
                avall), js/nucli/glossari.js +
                js/ui/glossari.js (§3/§4.2 de GLOSSARY-DESIGN-NOTES.md:
                termes inline dins l'enunciat), js/nucli/itinerari.js
                (§7 de ITINERARY-DESIGN-NOTES.md: valoració + suggerit).
                Cap d'aquests cinc és obligatori en temps d'execució —
                cada crida hi comprova `window.geoXxx &&` abans d'usar-lo,
                així que detall.js es degrada correctament si algun
                d'aquests fitxers no s'ha carregat.

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
   * Troba l'índex de la pregunta actual EN EL MOMENT DE CRIDAR-HO (mai
   * memoritzat), perquè anterior/següent segueixin sent correctes encara
   * que l'array hagi crescut o canviat d'ordre entre generacions de
   * preguntes-dades.js — mateix principi que router.js ja aplica per a
   * la resolució d'id (v. pas 4). Des que existeix js/nucli/ordre.js,
   * "anterior/següent" segueix l'ordre de PRESENTACIÓ configurable
   * (js/data/ordre-preguntes.js), no l'ordre del llibre — són coses
   * diferents a propòsit (v. la capçalera d'aquell fitxer).
   */
  function veins(id) {
    const totes = window.geoOrdre ? window.geoOrdre.preguntesOrdenades() : (window.PREGUNTES || []);
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
      if (window.geoItinerari) window.geoItinerari.sincronitzaFet(pregunta.id);
    });

    label.appendChild(checkbox);
    // Text fix breu — no hi ha clau dedicada a ui-strings.js encara
    // (fora d'abast d'aquest pas concret); "explorat" es manté neutre en
    // els dos idiomes per no introduir contingut d'interfície nou sense
    // que main.js/una revisió d'i18n ho reculli formalment.
    label.appendChild(document.createTextNode(" explorat"));

    contenidor.appendChild(label);
  }

  /**
   * Control de valoració (ITINERARY-DESIGN-NOTES.md §7): tres botons
   * "molt / normal / poc", independents del checkbox "explorat" -- un
   * alumne pot valorar una pregunta que ha mirat sense marcar-la feta
   * (§7: "'poc' és sovint una raó legítima per NO marcar-la feta").
   * S'escriu directament a geoItinerari, mai a geoProgres (que només sap
   * de "fet", v. capçalera d'itinerari.js).
   *
   * `onCanvi` es crida després d'escriure la valoració -- detall.js
   * l'usa per repintar el bloc "suggerit" (v. pintaSuggerit): sense
   * això, valorar una pregunta no canviaria mai el que es suggereix a
   * sota fins a la següent visita, encara que la dada ja hagi canviat.
   */
  function pintaValoracio(pregunta, contenidor, onCanvi) {
    if (!window.geoItinerari) return;

    const bloc = document.createElement("div");
    bloc.className = "valoracio";

    const label = document.createElement("span");
    label.className = "valoracio__prompt";
    label.textContent = window.t("itinerary.rate_prompt");
    bloc.appendChild(label);

    const actual = window.geoItinerari.estatDe(pregunta.id);
    const opcions = [
      ["molt", "itinerary.rate_molt"],
      ["normal", "itinerary.rate_normal"],
      ["poc", "itinerary.rate_poc"],
    ];

    opcions.forEach(([valor, clau]) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "valoracio__opcio";
      if (actual && actual.rating === valor) btn.setAttribute("aria-pressed", "true");
      btn.textContent = window.t(clau);
      btn.addEventListener("click", () => {
        const jaTriat = btn.getAttribute("aria-pressed") === "true";
        // clicar la mateixa opció una segona vegada la desmarca (permet
        // "no valorat" com a estat vàlid, no només els tres explícits)
        window.geoItinerari.marcaValoracio(pregunta.id, jaTriat ? null : valor);
        bloc.querySelectorAll(".valoracio__opcio").forEach((b) => b.removeAttribute("aria-pressed"));
        if (!jaTriat) btn.setAttribute("aria-pressed", "true");
        if (onCanvi) onCanvi();
      });
      bloc.appendChild(btn);
    });

    contenidor.appendChild(bloc);
  }

  /**
   * Bloc "suggerit per a tu" (§6/§7): fins a 3 suggeriments ranquejats,
   * cadascun amb la seva raó explícita -- mai un sol "següent" imposat.
   * Es col·loca AL COSTAT de, no en lloc de, la navegació posicional
   * anterior/següent (pintaNavegacio), que es manté sempre disponible
   * per a qui prefereixi llegir en l'ordre de presentació configurat
   * (js/data/ordre-preguntes.js — ja NO l'ordre del llibre, des que
   * existeix aquell fitxer; v. §7 del document de disseny original, que
   * parlava encara de l'ordre del llibre perquè és anterior a aquest
   * canvi).
   *
   * Es pinta dins d'un `slotEl` estable perquè es pugui RECALCULAR sense
   * repintar tota la pàgina (v. pintaValoracio: valorar una pregunta pot
   * canviar què es recomana a sota, a l'instant, dins la mateixa visita).
   */
  function pintaSuggerit(pregunta, slotEl) {
    slotEl.innerHTML = "";
    if (!window.geoItinerari) return;
    const suggeriments = window.geoItinerari.suggereix(pregunta.id, 3);
    if (!suggeriments.length) return;

    const bloc = document.createElement("div");
    bloc.className = "suggerit";

    const titol = document.createElement("h3");
    titol.className = "suggerit__title";
    titol.textContent = window.t("itinerary.suggested_title");
    bloc.appendChild(titol);

    const ul = document.createElement("ul");
    ul.className = "suggerit__items";
    suggeriments.forEach((s) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#" + s.pregunta.id;
      a.className = "suggerit__link";

      let raoText;
      if (s.reason === "review_moviment") {
        raoText = window.tf("itinerary.reason_review_moviment", { move: s.moviment });
      } else {
        raoText = window.t("itinerary." + "reason_" + s.reason);
      }

      const idSpan = document.createElement("span");
      idSpan.className = "suggerit__id";
      idSpan.textContent = s.pregunta.id;
      a.appendChild(idSpan);
      a.appendChild(document.createTextNode(" — " + raoText));

      // Marca aquesta navegació com a "recommended" al log de camí,
      // ABANS que el hashchange dispari el render de la pregunta destí
      // (v. registraProperaNavegacio/render més avall).
      a.addEventListener("click", () => {
        properaNavegacioVia = "recommended";
      });

      li.appendChild(a);
      ul.appendChild(li);
    });
    bloc.appendChild(ul);
    slotEl.appendChild(bloc);
  }

  let properaNavegacioVia = "manual";

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

  /**
   * ENUNCIAT AMB GLOSSARI INLINE (§3/§4.2 de GLOSSARY-DESIGN-NOTES.md).
   *
   * Substitueix el simple `prompt.textContent = ...` per una versió que
   * embolcalla cada terme detectat (window.geoGlossari.trobaTermes) en un
   * <button> -- mateix patró de disclosure que ja fan servir dues vegades
   * en aquest fitxer (pintaPista, pintaGuia): aria-expanded + un germà
   * amagat que es mostra/amaga en clicar. Res de nou s'inventa aquí.
   *
   * Si window.geoGlossari no existeix (per exemple, algú ha tret el
   * script per error) o no hi ha cap terme detectat, es degrada al
   * textContent pla d'abans -- mai trenca la pàgina per l'absència
   * d'aquesta funcionalitat opcional.
   */
  function pintaEnunciatAmbGlossari(text, lang, contenidor) {
    const p = document.createElement("p");
    p.className = "question-entry__prompt";

    const trobats = window.geoGlossari ? window.geoGlossari.trobaTermes(text, lang) : [];
    if (!trobats.length) {
      p.textContent = text;
      contenidor.appendChild(p);
      return p;
    }

    function tancaAltres(exceptBtn) {
      p.querySelectorAll(".glossari-term[aria-expanded='true']").forEach((altre) => {
        if (altre !== exceptBtn) {
          altre.setAttribute("aria-expanded", "false");
          altre.nextElementSibling.hidden = true;
        }
      });
    }

    let cursor = 0;
    trobats.forEach((m) => {
      if (m.start > cursor) {
        p.appendChild(document.createTextNode(text.slice(cursor, m.start)));
      }

      const wrap = document.createElement("span");
      wrap.className = "glossari-term-wrap";

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "glossari-term";
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = m.matchText;

      const pop = document.createElement("div");
      pop.className = "glossari-popover";
      pop.hidden = true;

      function omplePopover(id) {
        window.geoGlossariUI.pintaContingutTerme(id, lang, pop, omplePopover);
      }

      btn.addEventListener("click", () => {
        const jaObert = btn.getAttribute("aria-expanded") === "true";
        tancaAltres(btn);
        btn.setAttribute("aria-expanded", String(!jaObert));
        pop.hidden = jaObert;
        if (!jaObert) omplePopover(m.id);
      });

      wrap.appendChild(btn);
      wrap.appendChild(pop);
      p.appendChild(wrap);
      cursor = m.end;
    });
    if (cursor < text.length) {
      p.appendChild(document.createTextNode(text.slice(cursor)));
    }

    contenidor.appendChild(p);
    return p;
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

    pintaEnunciatAmbGlossari(
      window.geoContingut.resolCamp(pregunta.enunciat, lang),
      lang,
      contenidorEl
    );

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

    const suggeritSlot = document.createElement("div");
    pintaValoracio(pregunta, contenidorEl, () => pintaSuggerit(pregunta, suggeritSlot));
    contenidorEl.appendChild(suggeritSlot);
    pintaSuggerit(pregunta, suggeritSlot);

    pintaNavegacio(pregunta, contenidorEl);

    if (window.geoItinerari) {
      window.geoItinerari.marcaVista(pregunta.id);
      window.geoItinerari.sincronitzaFet(pregunta.id);
      window.geoItinerari.registraVisita(pregunta.id, properaNavegacioVia);
      properaNavegacioVia = "manual"; // consumit -- la següent navegació torna a ser "manual" per defecte
    }

    // Handoff demo-03 -> q02 (DEMO-PROOF-INTRO-DESIGN-NOTES.md §6): el
    // disparador de marcaFet és "ha obert q02 de debò", no "ha llegit la
    // demo" -- per això es consumeix aquí, en pintar la pregunta real, i
    // no dins de demo.js en clicar l'enllaç.
    if (pregunta.id === "q02" && window.geoDemos && window.geoDemos.consumeixHandoffQ02()) {
      if (window.geoProgres) window.geoProgres.marcaFet("q02", true);
      if (window.geoItinerari) window.geoItinerari.sincronitzaFet("q02");
      // el checkbox "explorat" ja s'ha pintat abans amb l'estat vell:
      // el tornem a repintar perque reflecteixi el marcatge que acabem
      // de fer, en lloc de deixar-lo visualment desactualitzat fins al
      // proxim render.
      const checkbox = contenidorEl.querySelector(".done-toggle input");
      if (checkbox) checkbox.checked = true;
    }
  }

  window.geoDetall = {
    render: render,
  };
})();
