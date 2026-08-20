/*
  PROJECTE:     Geometria — preguntes del llibre (p. 1-55)
  FITXER:       js/i18n/ui-strings.js
  ROL:          Textos d'interfície (allò que l'alumne LLEGEIX a la pantalla:
                botons, etiquetes, missatges d'estat). NO conté contingut de
                preguntes — això viu a js/data/preguntes-dades.js i es
                resol amb el seu propi mecanisme de fallback (en/ca per
                pregunta), independent d'aquest fitxer.
  ARQUITECTURA: Es carrega abans de i18n-core.js, que és qui llegeix
                aquesta estructura. Afegir un idioma nou = una entrada nova
                aquí, sense tocar cap altre fitxer. El selector d'idioma (si
                n'hi ha) s'ha de generar sempre amb
                Object.entries(window.UI_LANGS) — mai amb una llista
                d'opcions escrita a mà — perquè no quedi mai desincronitzat
                amb el contingut real d'aquest fitxer.
  DEPENDÈNCIES: Cap.

  ORIGEN DEL PATRÓ
  Calcat de la forma de K.UI_LANGS a karelcat/js/i18n.js (seccions niuades,
  camp _name per al selector, claus curtes i planes). La PRIORITAT de
  resolució de l'idioma (URL > localStorage > navegador > per defecte) no
  viu aquí — viu a i18n-core.js — però surt de la recepta documentada a
  karelcat/docs/i18n-spanish-guide.md (§"Step 3"), no de codi que ja
  s'executi avui a karelcat (que és monolingüe en producció; aquella guia
  és la recepta per quan s'hi vulgui afegir un segon idioma).

  Aquí, a diferència de karelcat, els DOS idiomes (en/ca) es defineixen
  complets des del primer dia — no n'hi ha cap de "principal" i cap
  de "parcial en construcció".
*/

window.UI_LANGS = {
  en: {
    _name: "English",

    nav: {
      title: "Geometry — questions from the book",
      back: "← Back to all questions",
      filter_all: "All",
      source_note: "Questions drawn from a book on synthetic geometry.",
    },

    list: {
      question_count: "{n} questions",
      no_results: "No questions match this filter.",
      no_image_badge: "no figure",
      guide_badge: "◆ guide",
      page_label: "p. {page}",
      open: "Open",
    },

    detail: {
      hint_show: "💡 Show hint",
      hint_hide: "💡 Hide hint",
      no_hint: "No hint for this one — sit with it a while.",
      back_to_list: "← All questions",
      prev: "← Previous",
      next: "Next →",
    },

    guide: {
      title: "Proof guide",
      move_label: "The move: {move}",
      start: "Start the guide",
      next_hint: "Show hint {n} of {total}",
      // Les claus (level_0..level_3) segueixen l'índex INTERN de
      // pista.nivell (0-3, mai canvia — v. guies-dades.js/parse_guies.py).
      // El TEXT mostrat és 1-indexat a petició explícita del propietari
      // (cap alumne hauria de veure mai "Pista 0") — desalineat a
      // propòsit, no un error de comptatge.
      level_0: "Hint 1",
      level_1: "Hint 2",
      level_2: "Hint 3",
      level_3: "Hint 4",
      check: "Check your answer",
      after: "And afterwards",
      figure_alt: "Construction: the book's figure in black, what you add in sanguine",
      level_0_fallback: "what you must produce",
      level_1_fallback: "make it concrete",
      level_2_fallback: "the construction",
      level_3_fallback: "close it",
      legend_toggle: "How to read these figures",
    },

    lang: {
      switch_label: "Language",
    },

    meta: {
      untranslated_notice: "This question hasn't been translated yet — showing the original English.",
      question_label: "Question {n}",
    },

    glossary: {
      open_button: "📖 Glossary",
      close_button: "Close",
      title: "Glossary",
      search_placeholder: "Search a term…",
      no_results: "No terms found.",
      back_to_list: "← All terms",
      related_label: "See also:",
      figure_alt: "Diagram illustrating this term",
      uncategorized: "Other",
    },

    itinerary: {
      rate_prompt: "How did this one feel?",
      rate_molt: "Loved it",
      rate_normal: "Fine",
      rate_poc: "Not much",
      suggested_title: "Suggested for you",
      reason_continue: "you started this one",
      reason_adjacent_level: "similar level to what you just did",
      reason_review_moviment: "trains the same idea — {move}",
      reason_fallback: "next in the list",
      continue_banner: "Continue where you left off:",
    },

    demo: {
      header_link: "What's a proof?",
      eyebrow: "Before the 130 questions",
      page_title: "What's a proof?",
      intro: "Three short, worked examples — solved in full, start to finish — so the real questions ahead read as the same kind of thing, not a different genre. Nothing here is scored or hidden.",
      beat_why: "Why this needs an argument",
      beat_argument: "The argument",
      beat_move: "What just happened",
      move_label: "The move: {move}",
      figure_alt: "The construction, drawn step by step",
      open_question: "Open {id} →",
      back_to_list: "← All 130 questions",
      start: "Start",
      next_step: "Step {n} of {total} →",
      step_label: "Step {n} of {total}",
      try_label: "Try it on paper first",
      check_label: "Check yourself",
    },
  },

  ca: {
    _name: "Català",

    nav: {
      title: "Geometria sintètica",
      back: "← Torna a totes les preguntes",
      filter_all: "Totes",
      source_note: "Preguntes extretes d'un llibre de geometria sintètica.",
    },

    list: {
      question_count: "{n} preguntes",
      no_results: "Cap pregunta coincideix amb aquest filtre.",
      no_image_badge: "sense figura",
      guide_badge: "◆ guia",
      page_label: "pàg. {page}",
      open: "Obre",
    },

    detail: {
      hint_show: "💡 Mostra la pista",
      hint_hide: "💡 Amaga la pista",
      no_hint: "Aquesta no té pista — pensa-t'ho amb calma.",
      back_to_list: "← Totes les preguntes",
      prev: "← Anterior",
      next: "Següent →",
    },

    guide: {
      title: "Guia de demostració",
      move_label: "El moviment: {move}",
      start: "Comença la guia",
      next_hint: "Mostra la pista {n} de {total}",
      level_0: "Pista 1",
      level_1: "Pista 2",
      level_2: "Pista 3",
      level_3: "Pista 4",
      check: "Comprovació",
      after: "I després",
      figure_alt: "Construcció: la figura del llibre en negre, el que hi afegeixes tu en sanguina",
      level_0_fallback: "què has de produir",
      level_1_fallback: "fes-ho concret",
      level_2_fallback: "la construcció",
      level_3_fallback: "tanca-ho",
      legend_toggle: "Com es llegeixen aquestes figures",
    },

    lang: {
      switch_label: "Idioma",
    },

    meta: {
      untranslated_notice: "Aquesta pregunta encara no s'ha traduït — es mostra l'original en anglès.",
      question_label: "Qüestió {n}",
    },

    glossary: {
      open_button: "📖 Glossari",
      close_button: "Tanca",
      title: "Glossari",
      search_placeholder: "Cerca un terme…",
      no_results: "Cap terme trobat.",
      back_to_list: "← Tots els termes",
      related_label: "Vegeu també:",
      figure_alt: "Diagrama que il·lustra aquest terme",
      uncategorized: "Altres",
    },

    itinerary: {
      rate_prompt: "Què t'ha semblat?",
      rate_molt: "M'ha agradat molt",
      rate_normal: "Normal",
      rate_poc: "No gaire",
      suggested_title: "Suggerit per a tu",
      reason_continue: "l'havies començada",
      reason_adjacent_level: "nivell semblant al que acabes de fer",
      reason_review_moviment: "entrena la mateixa idea — {move}",
      reason_fallback: "la següent de la llista",
      continue_banner: "Continua on ho vas deixar:",
    },

    demo: {
      header_link: "Què és una demostració?",
      eyebrow: "Abans de les 130 preguntes",
      page_title: "Què és una demostració?",
      intro: "Tres exemples curts, resolts sencers de cap a cap — perquè les preguntes reals que venen després es llegeixin com el mateix tipus de cosa, no com un gènere diferent. Res, aquí, es puntua ni s'amaga.",
      beat_why: "Per què cal un argument",
      beat_argument: "L'argument",
      beat_move: "Què acaba de passar",
      move_label: "El moviment: {move}",
      figure_alt: "La construcció, pas a pas",
      open_question: "Obre {id} →",
      back_to_list: "← Totes les 130 preguntes",
      start: "Comença",
      next_step: "Pas {n} de {total} →",
      step_label: "Pas {n} de {total}",
      try_label: "Prova-ho al paper abans de continuar",
      check_label: "Comprova-ho",
    },
  },
};
