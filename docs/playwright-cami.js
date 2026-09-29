/* playwright-cami.js — troba el paquet `playwright` sigui on sigui instal·lat.
 *
 * Fins al set. 2026, docs/render.js el carregava d'una ruta fixa d'un entorn
 * antic (/home/claude/.npm-global/...), que en qualsevol altre ordinador o
 * contenidor no existeix. Aquí es prova, per ordre:
 *   1. la variable d'entorn PLAYWRIGHT_PATH (ruta al paquet), si hi és;
 *   2. require('playwright') normal (instal·lació local o NODE_PATH);
 *   3. la carpeta global d'npm (`npm root -g`);
 *   4. rutes globals conegudes d'entorns on ja s'ha fet servir.
 * Si no el troba, diu com instal·lar-lo en lloc de fallar amb un error críptic.
 *
 * Ús:  const { chromium } = require('./playwright-cami.js');
 */
const path = require('path');
const fs = require('fs');

function candidats() {
  const c = [];
  if (process.env.PLAYWRIGHT_PATH) c.push(process.env.PLAYWRIGHT_PATH);
  c.push('playwright');
  try {
    const arrel = require('child_process')
      .execSync('npm root -g', { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString().trim();
    if (arrel) c.push(path.join(arrel, 'playwright'));
  } catch (e) { /* sense npm: es prova la resta */ }
  c.push('/opt/node22/lib/node_modules/playwright');
  c.push('/usr/local/lib/node_modules/playwright');
  c.push('/usr/lib/node_modules/playwright');
  c.push('/home/claude/.npm-global/lib/node_modules/playwright');
  return c;
}

function carrega() {
  for (const cand of candidats()) {
    if (cand !== 'playwright' && !fs.existsSync(cand)) continue;
    try { return require(cand); } catch (e) { /* següent */ }
  }
  console.error(
    "No trobo el paquet 'playwright'. Instal·la'l amb:\n" +
    "    npm install --no-save playwright && npx playwright install chromium\n" +
    "o indica'n la ruta amb PLAYWRIGHT_PATH=/ruta/a/node_modules/playwright");
  process.exit(2);
}

module.exports = carrega();
