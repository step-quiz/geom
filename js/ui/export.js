/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/ui/export.js
  ROL:          El bloc "Copia el meu codi" de la llista de preguntes: genera
                la cadena GEO1-… amb les preguntes que l'alumne ha marcat com
                a explorades, la copia al porta-retalls (amb un camp de
                reserva si falla) i, com a sortida secundària, la descarrega
                en .txt. analitzador-geom.html és qui la llegeix per compondre
                una prova escrita (v. LLEGEIX-ME.md).
  ARQUITECTURA: Fins al set. 2026 tot això vivia dins de js/ui/llista.js,
                que era el fitxer més llarg de ui/ i barrejava quatre coses
                (llista, filtres, amagades i exportació). És l'única de les
                quatre que no depèn de la vista: es separa aquí sense canviar
                ni una línia de comportament. llista.js en crida
                window.geoExport.creaBloc() en pintar la capçalera.
                Es carrega abans de js/ui/llista.js.
  DEPENDÈNCIES: js/i18n/i18n-core.js (t), js/nucli/progres.js (totsFets).
                verifica_projecte.py §13 comprova que el prefix GEO<n>- d'aquí
                i el de l'analitzador coincideixin.
*/

(function () {
  "use strict";

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
   * 118 preguntes visibles, el pitjor cas possible (haver-les fet totes)
   * són 523 caràcters, i un cas normal de 25 preguntes en són 116 —
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
   * Crea el bloc sencer (botó, camp de només lectura i enllaç de
   * descàrrega) i el retorna perquè qui el cridi (llista.js) el posi on
   * toqui.
   */
  function creaBloc() {
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

    return exportBloc;
  }

  window.geoExport = {
    creaBloc: creaBloc,
    formataCodi: formataCodi,
  };
})();
