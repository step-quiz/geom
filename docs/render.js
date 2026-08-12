/* render.js — captura CADA <canvas> de la pàgina en un PNG separat.
 * Ús:  node render.js figures-01.html  ./sortida
 * No cal mantenir cap llista d'ids: els descobreix sol.        */
const { chromium } = require('/home/claude/.npm-global/lib/node_modules/playwright');
const path = require('path'), fs = require('fs');
(async () => {
  const [,, page, outDir='.'] = process.argv;
  if (!page) { console.error('ús: node render.js <fitxer.html> [directori]'); process.exit(1); }
  fs.mkdirSync(outDir, {recursive:true});
  const b = await chromium.launch();
  const p = await b.newPage({viewport:{width:1400,height:900}});
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + path.resolve(page));
  await p.waitForTimeout(1000);
  const ids = await p.$$eval('canvas', cs => cs.map(c => c.id));
  if (!ids.length) console.error('AVÍS: cap <canvas> trobat — el codi s\'ha executat?');
  for (const id of ids) {
    if (!id) { console.error('AVÍS: un canvas sense id, no es captura'); continue; }
    await p.locator('#'+id).screenshot({path: path.join(outDir, id + '.png')});
  }
  console.log(ids.length + ' figures ->', outDir);
  console.log('errors JS:', errs.length ? errs : 'cap');
  await b.close();
})();
