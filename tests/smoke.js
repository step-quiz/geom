/*
  tests/smoke.js — prova de regressió del lloc sencer en un navegador real.

  PER QUÈ EXISTEIX
  LESSONS.md §7 deia que el test amb Playwright s'escrivia de nou a cada
  lliurament ("no hi ha cap script desat per reaprofitar"). Això vol dir
  refer la mateixa feina cada vegada, i que cada lliurament proves una cosa
  lleugerament diferent. Aquest és el test desat: el que s'executa abans de
  cada lliurament i, sol, a GitHub a cada push i a cada PR
  (.github/workflows/verifica.yml).

  QUÈ COMPROVA (tot sota file://, com l'obre l'alumne amb doble clic)
    1. La llista de preguntes es pinta, amb filtres.
    2. Les 130 preguntes, en mode CLAR i en mode FOSC: es revelen les quatre
       pistes, totes les imatges carreguen (naturalWidth > 0), el peu
       (comprovació + "i després") es veu, i no hi ha cap error de JavaScript.
       La fitxa impresa no baixa cap figura fins que es prem "Imprimeix la
       fitxa", i llavors totes carreguen. El mode projector entra i surt
       sense tancar les pistes obertes.
    3. Les pàgines de solucions/: carreguen, amb estil i amb totes les imatges.
    4. sol.html i eina-frases.html s'obren sense errors.
    +  Cap pàgina no fa cap petició a internet (el test talla la xarxa).
    5. analitzador-geom.html: llegeix un codi GEO1 (amb una pregunta amagada i
       un id inexistent), genera una prova de 2 preguntes i les imatges hi són;
       i porta exactament la mateixa llista de preguntes amagades que el lloc.

  ÚS (des de l'arrel del repositori)
      node tests/smoke.js              # tot
      node tests/smoke.js --nomes-clar # sense la passada en mode fosc

  Surt amb codi 1 si hi ha cap problema, i els llista. Playwright es busca
  amb docs/playwright-cami.js (si no el troba, diu com instal·lar-lo).
*/
const path = require('path');
const fs = require('fs');
const { chromium } = require('../docs/playwright-cami.js');

const ARREL = path.resolve(__dirname, '..');
const url = (rel) => 'file://' + path.join(ARREL, rel);
const NOMES_CLAR = process.argv.includes('--nomes-clar');

// Errors de xarxa externs (Google Fonts sense connexió, proxies) no són del
// projecte: el lloc ja té tipografia de reserva per a aquest cas.
// El segon patró és una limitació CONEGUDA i documentada (README, "Pendents
// coneguts"): la secció de descoberta de sol.html fa fetch() de cada
// solucions/<id>.html, i sota file:// el navegador ho bloqueja. No és una
// regressió; si mai es corregeix sol.html, es pot treure d'aquí.
const esSorollExtern = (t) => /fonts\.g|ERR_CERT|ERR_NAME|ERR_INTERNET|net::/.test(t)
  || /Fetch API cannot load file:.*\/solucions\//.test(t);

// El lloc ha de funcionar SENSE XARXA (s'obre amb doble clic, i des del set.
// 2026 les fonts també són locals). Qualsevol petició a internet es talla i
// es compta com a problema.
const peticionsExternes = [];
async function senseXarxa(ctx, etiqueta) {
  await ctx.route(/^https?:/, (r) => {
    peticionsExternes.push(etiqueta() + ' → ' + r.request().url());
    r.abort();
  });
}

async function novaPagina(ctx, errors, etiqueta) {
  const p = await ctx.newPage();
  p.on('pageerror', (e) => errors.push(etiqueta() + ': ' + e.message));
  p.on('console', (m) => {
    if (m.type() === 'error' && !esSorollExtern(m.text())) errors.push(etiqueta() + ' (consola): ' + m.text());
  });
  return p;
}

async function esperaImatges(p) {
  await p.evaluate(() => document.querySelectorAll('img').forEach((i) => { i.loading = 'eager'; }));
  await p.waitForFunction(() => [...document.images].every((i) => i.complete), null, { timeout: 8000 })
    .catch(() => {});
  return p.evaluate(() => [...document.images].filter((i) => !(i.naturalWidth > 0)).map((i) => i.getAttribute('src')));
}

(async () => {
  const b = await chromium.launch();
  const problemes = [];
  const errorsJS = [];
  const resum = [];
  let on = '';
  let amagadesLloc = null;
  const etiqueta = () => on;

  // ---- 1 i 2: la llista i les 130 preguntes, en clar i en fosc ----------
  for (const scheme of NOMES_CLAR ? ['light'] : ['light', 'dark']) {
    const ctx = await b.newContext({ viewport: { width: 1000, height: 900 }, colorScheme: scheme });
    await senseXarxa(ctx, etiqueta);
    // Visitant que ja ha vist la intro: que no se'l redirigeixi a #demo.
    await ctx.addInitScript(() => { try { localStorage.setItem('geo:demo-intro-mostrada', '1'); } catch (e) {} });
    // El botó "Imprimeix la fitxa" es prem a cada pregunta (carrega les
    // figures de la fitxa, que es comproven com les altres); el diàleg
    // d'impressió real se substitueix per un comptador.
    await ctx.addInitScript(() => { window.print = () => { window.__impressions = (window.__impressions || 0) + 1; }; });
    const p = await novaPagina(ctx, errorsJS, etiqueta);

    on = scheme + ' #llista';
    await p.goto(url('index.html') + '#');
    await p.waitForTimeout(400);
    if (scheme === 'light') amagadesLloc = await p.evaluate(() => window.geoLlista.amagades());
    const llista = await p.evaluate(() => ({
      entrades: document.querySelectorAll('.question-entry').length,
      toggles: document.querySelectorAll('.dim-filtre__toggle').length,
      categories: document.querySelectorAll('.cat-filtre__toggle').length,
    }));
    if (!llista.entrades) problemes.push(on + ': la llista no pinta cap pregunta');
    if (llista.toggles !== 2) problemes.push(on + ': falten els toggles 2D/3D');
    if (llista.categories !== 5) problemes.push(on + ': ' + llista.categories + ' botons de categoria (n\'esperava 5)');

    const ids = await p.evaluate(() => window.PREGUNTES.map((q) => q.id));
    let imatges = 0;
    for (const id of ids) {
      on = scheme + ' #' + id;
      await p.evaluate((h) => { location.hash = h; }, id);
      await p.waitForTimeout(40);
      for (let i = 0; i < 6; i++) {
        const boto = await p.$('.guia__reveal:not([hidden])');
        if (!boto) break;
        await boto.click();
      }
      // Abans d'imprimir, la fitxa no ha de baixar cap figura (data-src).
      const fitxaAmbSrc = await p.evaluate(() => document.querySelectorAll('.fitxa-impresa img[src]').length);
      if (fitxaAmbSrc) problemes.push(on + ': la fitxa impresa baixa ' + fitxaAmbSrc + ' figures sense imprimir');
      const imprimeix = await p.$('.detall-eines__boto:not(.detall-eines__projector)');
      if (imprimeix) await imprimeix.click();
      const trencades = await esperaImatges(p);
      const r = await p.evaluate(() => {
        const peu = document.querySelector('.guia__footer');
        return {
          n: document.querySelectorAll('#app img').length,
          pistes: document.querySelectorAll('.guia__step').length,
          peu: !!(peu && !peu.hidden && peu.offsetHeight > 0),
        };
      });
      imatges += r.n;
      if (trencades.length) problemes.push(on + ': imatges trencades ' + trencades.join(', '));
      if (r.pistes !== 4) problemes.push(on + ': ' + r.pistes + ' pistes revelades (n\'esperava 4)');
      if (!r.peu) problemes.push(on + ': el peu de la guia no es veu');
    }
    resum.push(scheme + ': ' + ids.length + ' preguntes, ' + imatges + ' imatges');
    const impressions = await p.evaluate(() => window.__impressions || 0);
    if (!impressions) problemes.push(scheme + ': el botó "Imprimeix la fitxa" no arriba a imprimir');

    // Mode projector: entrar-hi i sortir-ne no ha de tancar les pistes
    // obertes ni repintar la pregunta.
    on = scheme + ' mode projector';
    await p.evaluate((h) => { location.hash = h; }, ids[0]);
    await p.waitForTimeout(60);
    for (let i = 0; i < 2; i++) {
      const boto = await p.$('.guia__reveal:not([hidden])');
      if (boto) await boto.click();
    }
    const abans = await p.evaluate(() => document.querySelectorAll('.guia__step').length);
    await p.click('.detall-eines__projector');
    await p.waitForTimeout(100);
    const dins = await p.evaluate(() => ({
      classe: document.documentElement.classList.contains('mode-projector'),
      pistes: document.querySelectorAll('.guia__step').length,
    }));
    await p.keyboard.press('Escape');
    await p.waitForTimeout(100);
    const fora = await p.evaluate(() => ({
      classe: document.documentElement.classList.contains('mode-projector'),
      pistes: document.querySelectorAll('.guia__step').length,
    }));
    if (!dins.classe || fora.classe) problemes.push(on + ': no entra o no surt del mode');
    if (dins.pistes !== abans || fora.pistes !== abans)
      problemes.push(on + ': les pistes obertes (' + abans + ') no es mantenen (' + dins.pistes + ', ' + fora.pistes + ')');
    await ctx.close();
  }

  // ---- 3 i 4: solucions, sol.html, eina-frases.html ---------------------
  {
    const ctx = await b.newContext();
    await senseXarxa(ctx, etiqueta);
    const p = await novaPagina(ctx, errorsJS, etiqueta);
    const fitxers = fs.readdirSync(path.join(ARREL, 'solucions')).filter((f) => f.endsWith('.html'));
    let imatges = 0;
    for (const f of fitxers) {
      on = 'solucions/' + f;
      await p.goto(url('solucions/' + f));
      const trencades = await esperaImatges(p);
      const r = await p.evaluate(() => {
        const marc = document.querySelector('.solucio__marc');
        return { n: document.images.length, estil: marc ? getComputedStyle(marc).borderLeftStyle : null };
      });
      imatges += r.n;
      if (trencades.length) problemes.push(on + ': imatges trencades ' + trencades.join(', '));
      if (r.estil !== 'solid') problemes.push(on + ': sense l\'estil de sol.css');
    }
    resum.push('solucions: ' + fitxers.length + ' pàgines, ' + imatges + ' imatges');

    for (const f of ['sol.html', 'eina-frases.html']) {
      on = f;
      await p.goto(url(f));
      await p.waitForTimeout(800);
    }
    resum.push('sol.html i eina-frases.html obertes');

    // ---- 5: analitzador ----------------------------------------------------
    on = 'analitzador-geom.html';
    await p.goto(url('analitzador-geom.html'));
    // La llista d'amagades que porta l'analitzador (la hi injecta
    // build_analitzador_geom.py) ha de ser EXACTAMENT la que fa servir el lloc.
    const amagadesAnalitzador = await p.evaluate(() => window.EXERCICIS_AMAGATS || null);
    if (JSON.stringify(amagadesAnalitzador) !== JSON.stringify(amagadesLloc)) {
      problemes.push(on + ': la llista d\'amagades no coincideix amb la del lloc (' +
        JSON.stringify(amagadesAnalitzador) + ' vs ' + JSON.stringify(amagadesLloc) + ')');
    }
    await p.fill('#entrada', 'GEO1-q01,q02,q19,qzzz');
    await p.click('#btn-llegeix');
    await p.waitForTimeout(200);
    const avis = await p.$eval('#avis', (a) => (a.hidden ? '' : a.textContent));
    await p.click('.mida-op >> nth=1'); // 2 preguntes
    await p.click('text=Genera la prova');
    await p.waitForTimeout(300);
    const trencades = await esperaImatges(p);
    const prova = await p.evaluate(() => [...document.querySelectorAll('.prova-preg')].map((x) => x.textContent));
    if (prova.length !== 2) problemes.push(on + ': la prova té ' + prova.length + ' preguntes (n\'esperava 2)');
    if (prova.some((t) => /amagad|q19/i.test(t))) problemes.push(on + ': hi ha sortit una pregunta amagada');
    if (!/ignorat/i.test(avis)) problemes.push(on + ': no avisa de l\'id inexistent (avís: ' + JSON.stringify(avis) + ')');
    if (trencades.length) problemes.push(on + ': imatges trencades a la prova');
    resum.push('analitzador: prova de ' + prova.length + ' preguntes generada');
    await ctx.close();
  }

  await b.close();

  console.log(resum.map((l) => '· ' + l).join('\n'));
  const tot = problemes
    .concat([...new Set(peticionsExternes)].map((x) => 'petició a internet — ' + x))
    .concat(errorsJS.map((e) => 'error JS — ' + e));
  if (tot.length) {
    console.log('\n✗ ' + tot.length + ' problemes:');
    tot.forEach((x) => console.log('  - ' + x));
    process.exit(1);
  }
  console.log('\n✓ Tot correcte.');
})().catch((e) => { console.error(e); process.exit(1); });
