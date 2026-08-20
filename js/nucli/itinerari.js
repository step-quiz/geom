/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/nucli/itinerari.js
  ROL:          Estat d'itinerari per alumne (persistit a localStorage,
                v. ITINERARY-DESIGN-NOTES.md §4/§5) + motor de
                recomanació (§6). Fitxer NOU, separat de progres.js
                deliberadament — v. §4 del document: freqüència d'escriptura
                diferent (un log d'events, no un Set), i mode de fallada
                diferent (aquí SÍ cal ser curós si localStorage falla,
                perquè un reset silenciós tornaria a suggerir preguntes ja
                fetes i trencaria la confiança en el "reactiu").
  ARQUITECTURA: Es carrega després de progres.js, ordre.js i guies.js
                (l'engine llegeix `moviment` de window.GUIES i
                dificultat/dimensio de window.PREGUNTES) i abans de
                ui/detall.js i ui/llista.js.
  DEPENDÈNCIES: js/nucli/progres.js (geoProgres.esFet — font única de
                veritat per "fet", v. més avall), js/nucli/guies.js
                (per `moviment`), js/nucli/ordre.js (la regla 5 de
                reserva — v. totesPreguntes() més avall — segueix l'ordre
                de presentació configurable, no l'ordre del llibre; es
                degrada bé si no hi és), window.PREGUNTES.
                js/ui/llista.js (window.geoLlista.esAmagada — cap regla
                ha de suggerir mai una pregunta d'EXERCICIS_AMAGATS; es
                degrada a "cap amagada" si no hi és, mai bloqueja un
                suggeriment per un mòdul absent). Encara que llista.js es
                carrega DESPRÉS d'aquest fitxer a index.html, no hi ha
                problema real: aquí només es CRIDA suggereix() (mai al
                carregar el script, sempre en resposta a una interacció
                posterior), moment en què tots els scripts ja han
                acabat d'executar-se.

  QUÈ ES DIFEREIX DEL DOCUMENT DE DISSENY, EXPLÍCITAMENT
  §5 del document proposa un camp opcional `hintLevelsOpened` per pregunta,
  i el senyala ell mateix com una tensió real amb el disseny ja existent de
  detall.js (pintaGuia NO desa mai quants nivells de pista s'han obert, "so
  a question can be attempted fresh again" — comentari explícit al codi).
  Cap de les regles 1/2/3/5 implementades aquí necessita aquest camp (§6
  no en parla; només una extensió HIPOTÈTICA de la regla 2 l'esmenta). Per
  tant NO s'implementa ni es desa: no calia prendre la decisió per fer
  funcionar res d'aquest lliurament, i és exactament la mena de decisió
  que el document demana no prendre en silenci. Si en un futur lliurament
  una regla nova el necessita de debò, cal flagar-ho aleshores, no ara.

  QUÈ MÉS ES DEIXA FORA (§11: "only after 1-5..."): la regla 4 (petició
  explícita de repàs) i tot el §10 (extres "socràtics": stuckReason,
  iDespresRef, hint-titol-com-a-pregunta, escotilla de comprovació,
  reason string visible). Cap d'aquestes decisions és necessària perquè
  les regles 1/2/3/5 funcionin — es poden afegir per damunt d'això sense
  canviar l'esquema d'estat que ja hi ha aquí (schemaVersion és per a
  exactament aquest escenari).
*/

(function () {
  "use strict";

  const COLLECTION_ID = "geometry-book-1";
  const SCHEMA_VERSION = 1;
  const STORAGE_KEY = "geo:itinerari:" + COLLECTION_ID;

  function ara() {
    return new Date().toISOString();
  }

  function buida() {
    return { schemaVersion: SCHEMA_VERSION, collectionId: COLLECTION_ID, questions: {}, path: [] };
  }

  function llegeix() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return buida();
      const parsed = JSON.parse(raw);
      // Migració trivial: si mai canvia schemaVersion, aquest és el punt
      // únic on decidir-ho -- avui només hi ha la v1, així que qualsevol
      // altra cosa es tracta com a corrupta i es degrada a buit (mateixa
      // disciplina de "mai trenca la pàgina" que progres.js ja aplica).
      if (parsed && parsed.schemaVersion === SCHEMA_VERSION && parsed.questions) {
        return parsed;
      }
      return buida();
    } catch (e) {
      return buida();
    }
  }

  function desa(estat) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(estat));
      return true;
    } catch (e) {
      // Persistència best-effort (localStorage ple/bloquejat). A diferència
      // de progres.js, aquí SÍ val la pena saber-ho: qui cridi les funcions
      // d'escriptura rep `false` i pot decidir avisar, si mai cal.
      return false;
    }
  }

  // ---------------------------------------------------------------------
  // Escriptura
  // ---------------------------------------------------------------------

  /** Marca una pregunta com a vista (si encara no hi era) i actualitza la
   *  darrera visita. NO sobreescriu "done" si ja hi era. */
  function marcaVista(id) {
    const estat = llegeix();
    const q = estat.questions[id] || { status: "seen", rating: null, firstVisitedAt: ara() };
    q.status = q.status === "done" ? "done" : "seen";
    q.lastVisitedAt = ara();
    estat.questions[id] = q;
    desa(estat);
  }

  /** Sincronitza status:"done" des de geoProgres (font única de veritat,
   *  v. capçalera §4 punt 3 del document): es crida cada cop que es
   *  pinta detall.js, mai s'hi escriu "done" per cap altre camí. */
  function sincronitzaFet(id) {
    if (!window.geoProgres) return;
    const estat = llegeix();
    const fet = window.geoProgres.esFet(id);
    const q = estat.questions[id];
    if (fet && q && q.status !== "done") {
      q.status = "done";
      desa(estat);
    } else if (!fet && q && q.status === "done") {
      q.status = "seen";
      desa(estat);
    }
  }

  function marcaValoracio(id, rating) {
    const estat = llegeix();
    const q = estat.questions[id] || { status: "seen", rating: null, firstVisitedAt: ara() };
    q.rating = rating; // "molt" | "normal" | "poc" | null
    q.lastVisitedAt = ara();
    estat.questions[id] = q;
    desa(estat);
  }

  /** Registra una entrada al log de camí (§5: "what makes reactive
   *  actually possible"). via: "recommended" | "manual" | "review". */
  function registraVisita(id, via) {
    const estat = llegeix();
    estat.path.push({ id: id, at: ara(), via: via || "manual" });
    // el log no cal que creixi sense límit -- 500 entrades és molt més
    // que qualsevol sessió real d'estudi, i evitar-ho fa que localStorage
    // no es vagi omplint indefinidament en sessions molt llargues.
    if (estat.path.length > 500) estat.path = estat.path.slice(-500);
    desa(estat);
  }

  function estatDe(id) {
    return llegeix().questions[id] || null;
  }

  function esBuit() {
    const estat = llegeix();
    return Object.keys(estat.questions).length === 0;
  }

  // ---------------------------------------------------------------------
  // Motor de recomanació (§6): regles independents, amb raó explícita.
  // ---------------------------------------------------------------------

  function totesPreguntes() {
    // "següent" (regla 5, reserva) segueix l'ordre de PRESENTACIÓ
    // configurable (js/nucli/ordre.js), no l'ordre del llibre -- coherent
    // amb el que ja fan llista.js i detall.js.
    return window.geoOrdre ? window.geoOrdre.preguntesOrdenades() : (window.PREGUNTES || []);
  }

  /** True si l'id és a EXERCICIS_AMAGATS (js/ui/llista.js) -- cap regla
   *  d'aquest fitxer ha de suggerir mai una pregunta amagada (mateix
   *  principi que veins() a detall.js: "Anterior/Següent" no hi tornava
   *  a caure des que es va corregir; els suggeriments no en són una
   *  excepció). Es degrada a `false` si geoLlista no està carregat
   *  (mai bloqueja un suggeriment per un motiu extern), mateixa
   *  disciplina de "no trenca la pàgina" que la resta del fitxer.
   */
  function esAmagada(id) {
    return !!(window.geoLlista && window.geoLlista.esAmagada(id));
  }

  /** Igual que totesPreguntes(), amb les amagades excloses -- el que
   *  ha de fer servir tota regla que TRIA un candidat nou (regla2,
   *  regla3, regla5). trobaPregunta() es queda amb la llista completa
   *  perquè encara ha de poder resoldre l'id d'una pregunta ja visitada
   *  (regla1), amagada o no. */
  function totesPreguntesVisibles() {
    return totesPreguntes().filter((p) => !esAmagada(p.id));
  }

  function trobaPregunta(id) {
    return totesPreguntes().find((p) => p.id === id) || null;
  }

  function movimentDe(id) {
    if (!window.geoGuies) return null;
    const p = trobaPregunta(id);
    const g = p && window.geoGuies.guiaDe(p);
    return g ? g.moviment : null;
  }

  /** Regla 1: continua on ho vas deixar -- "seen" no "done", més recent
   *  primer. */
  function regla1_continua(estat) {
    const candidats = Object.entries(estat.questions)
      .filter(([id, q]) => q.status === "seen")
      .sort((a, b) => (b[1].lastVisitedAt || "").localeCompare(a[1].lastVisitedAt || ""));
    if (!candidats.length) return null;
    const [id] = candidats[0];
    const p = trobaPregunta(id);
    if (!p) return null;
    return { pregunta: p, reason: "continue", via: "recommended" };
  }

  /** Regla 2: rampa de dificultat/dimensió, entre les no visitades encara,
   *  a partir de l'última pregunta valorada "molt" o "normal". */
  function regla2_rampa(estat) {
    const historial = Object.entries(estat.questions)
      .filter(([, q]) => q.rating === "molt" || q.rating === "normal")
      .sort((a, b) => (b[1].lastVisitedAt || "").localeCompare(a[1].lastVisitedAt || ""));
    if (!historial.length) return null;
    const [refId] = historial[0];
    const ref = trobaPregunta(refId);
    if (!ref) return null;

    const visitades = new Set(Object.keys(estat.questions));
    const candidates = totesPreguntesVisibles().filter((p) => !visitades.has(p.id));
    if (!candidates.length) return null;

    // puntuació senzilla i llegible, no una funció de pesos opaca:
    // mateixa dimensio +2, dificultat igual o +1 +2, te guia +1
    function puntua(p) {
      let s = 0;
      if (p.dimensio && p.dimensio === ref.dimensio) s += 2;
      if (p.dificultat === ref.dificultat) s += 2;
      else if (p.dificultat === ref.dificultat + 1) s += 2;
      else if (p.dificultat < ref.dificultat) s -= 1;
      if (window.geoGuies && window.geoGuies.teGuia(p)) s += 1;
      return s;
    }
    candidates.sort((a, b) => puntua(b) - puntua(a));
    const millor = candidates[0];
    if (puntua(millor) <= 0) return null;
    return { pregunta: millor, reason: "adjacent_level", via: "recommended", refId: refId };
  }

  /** Regla 3: repàs pel mateix moviment -- si l'última valorada és "poc",
   *  o hi ha alguna "seen" fa temps sense passar a "done". */
  function regla3_repas(estat) {
    const ARA = Date.now();
    const UNA_SETMANA = 7 * 24 * 3600 * 1000;

    const pocs = Object.entries(estat.questions)
      .filter(([, q]) => q.rating === "poc")
      .sort((a, b) => (b[1].lastVisitedAt || "").localeCompare(a[1].lastVisitedAt || ""));
    const antigues = Object.entries(estat.questions).filter(([, q]) => {
      if (q.status !== "seen" || !q.lastVisitedAt) return false;
      return ARA - Date.parse(q.lastVisitedAt) > UNA_SETMANA;
    });

    const origen = pocs[0] || antigues[0];
    if (!origen) return null;
    const [origenId] = origen;
    const mov = movimentDe(origenId);
    if (!mov) return null;

    const visitades = new Set(Object.keys(estat.questions));
    const candidates = totesPreguntesVisibles().filter(
      (p) => !visitades.has(p.id) && movimentDe(p.id) === mov
    );
    if (!candidates.length) return null;
    return {
      pregunta: candidates[0],
      reason: "review_moviment",
      via: "recommended",
      moviment: mov,
    };
  }

  /** Regla 5: fallback -- comportament posicional d'avui (veins()), quan
   *  cap altra regla proposa res (p. ex. un alumne nou amb estat buit).
   *  Salta EXERCICIS_AMAGATS igual que veins() a detall.js: mai la
   *  primera pregunta "buida" (idActual null, banner de la llista) ni
   *  la següent en ordre (idActual conegut) poden caure en una amagada. */
  function regla5_fallback(idActual) {
    if (!idActual) {
      const totesVis = totesPreguntesVisibles();
      return totesVis.length ? { pregunta: totesVis[0], reason: "fallback", via: "manual" } : null;
    }
    const totes = totesPreguntes();
    const idx = totes.findIndex((p) => p.id === idActual);
    if (idx === -1) return null;
    for (let i = idx + 1; i < totes.length; i++) {
      if (!esAmagada(totes[i].id)) return { pregunta: totes[i], reason: "fallback", via: "manual" };
    }
    return null;
  }

  /**
   * Retorna fins a `max` suggeriments ranquejats (§6, "on multiple
   * suggestions": 2-3, no un sol "next" forçat), cadascun amb la seva raó.
   * `idActual` és la pregunta que s'està mirant ara (per a la regla 5 i
   * per no suggerir-se a si mateixa).
   */
  function suggereix(idActual, max) {
    const estat = llegeix();
    const candidats = [regla1_continua(estat), regla2_rampa(estat), regla3_repas(estat)]
      .filter(Boolean)
      .filter((c) => c.pregunta.id !== idActual)
      // Xarxa de seguretat: regla2/3 ja parteixen de totesPreguntesVisibles(),
      // però regla1 resol via trobaPregunta() (la llista SENCERA, a
      // propòsit -- ha de poder trobar qualsevol id ja "seen"). Si algú
      // va acabar visitant una amagada abans que aquest arranjament
      // (o per enllaç directe), no ha de tornar a aparèixer com a
      // suggeriment ara.
      .filter((c) => !esAmagada(c.pregunta.id));

    const vistos = new Set();
    const unics = [];
    candidats.forEach((c) => {
      if (!vistos.has(c.pregunta.id)) {
        vistos.add(c.pregunta.id);
        unics.push(c);
      }
    });

    if (!unics.length) {
      const fb = regla5_fallback(idActual);
      if (fb) unics.push(fb);
    }

    return unics.slice(0, max || 3);
  }

  window.geoItinerari = {
    marcaVista: marcaVista,
    sincronitzaFet: sincronitzaFet,
    marcaValoracio: marcaValoracio,
    registraVisita: registraVisita,
    estatDe: estatDe,
    esBuit: esBuit,
    suggereix: suggereix,
  };
})();
