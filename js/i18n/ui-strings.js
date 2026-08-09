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
      no_image_badge: "no figure",
      page_label: "p. {page}",
      open: "Open",
    },

    detail: {
      page_label: "Page {page} of the source",
      figure_source_label: "fig. {id} — p. {page}",
      figure_scan_note: "page scan",
      hint_show: "💡 Show hint",
      hint_hide: "💡 Hide hint",
      no_hint: "No hint for this one — sit with it a while.",
      back_to_list: "← All questions",
      prev: "← Previous",
      next: "Next →",
    },

    lang: {
      switch_label: "Language",
    },

    meta: {
      untranslated_notice: "This question hasn't been translated yet — showing the original English.",
    },
  },

  ca: {
    _name: "Català",

    nav: {
      title: "Geometria — preguntes del llibre",
      back: "← Torna a totes les preguntes",
      filter_all: "Totes",
      source_note: "Preguntes extretes d'un llibre de geometria sintètica.",
    },

    list: {
      question_count: "{n} preguntes",
      no_image_badge: "sense figura",
      page_label: "pàg. {page}",
      open: "Obre",
    },

    detail: {
      page_label: "Pàgina {page} de la font",
      figure_source_label: "fig. {id} — pàg. {page}",
      figure_scan_note: "captura de pàgina",
      hint_show: "💡 Mostra la pista",
      hint_hide: "💡 Amaga la pista",
      no_hint: "Aquesta no té pista — pensa-t'ho amb calma.",
      back_to_list: "← Totes les preguntes",
      prev: "← Anterior",
      next: "Següent →",
    },

    lang: {
      switch_label: "Idioma",
    },

    meta: {
      untranslated_notice: "Aquesta pregunta encara no s'ha traduït — es mostra l'original en anglès.",
    },
  },
};
