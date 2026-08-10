// ============================================================
// hand-draw.js — Motor de traç "a mà alçada" matemàticament informat
// ============================================================

function mulberry32(seed) {
  return function() {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

function makeHandDraw(ctx, seed) {
  let rand = mulberry32(seed);

  // ---------- Trajectòria: pols estable + 1-2 correccions localitzades ----------
  function handTrajectory(n, segAmp, segLen) {
    const lengthScale = Math.min(1, segLen / 500);
    const vals = new Array(n).fill(0);

    const microAmp = segAmp * 0.12;
    const microPhase = rand() * Math.PI * 2;
    const microFreq = 0.25 + rand() * 0.15;
    for (let i = 0; i < n; i++) {
      vals[i] += Math.sin(i * microFreq + microPhase) * microAmp * (0.4 + 0.6*Math.sin(i*0.05+1));
    }

    const numCorrections = rand() < 0.5 ? 1 : 2;
    for (let c = 0; c < numCorrections; c++) {
      const center = n * (0.22 + rand() * 0.56);
      const width = n * (0.16 + rand() * 0.14);
      const sign = rand() > 0.5 ? 1 : -1;
      const strength = segAmp * (2.2 + rand() * 2.2) * sign * lengthScale;
      for (let i = 0; i < n; i++) {
        const d = (i - center) / width;
        vals[i] += strength * Math.exp(-d*d);
      }
    }
    return vals;
  }

  // ---------- Segment a mà ----------
  function handSegment(x0, y0, x1, y1, opts={}) {
    const {
      wobble = 2.2, steps = 50, overshoot = 3, passes = 2, passSpread = 0.6,
      lineWidth = 3.2, widthVariation = 1.1, dashed = false, dashPattern = [14, 10]
    } = opts;

    const dx = x1 - x0, dy = y1 - y0;
    const len = Math.hypot(dx, dy);
    const ux = dx / len, uy = dy / len;
    const px = -uy, py = ux;

    const baseNoise = handTrajectory(steps + 1, wobble, len);
    const overSign = rand() > 0.5 ? 1 : -1;
    const over1 = overshoot * rand();

    // Guardem els punts de la trajectòria REAL (primera passada) perquè es puguin consultar
    // després -- per exemple, per trobar on cau el "punt mitjà visual" d'aquest segment concret,
    // que no coincideix exactament amb el punt mitjà algebraic de (x0,y0)-(x1,y1) un cop aplicada
    // la flexió de correcció.
    const realPoints = [];

    for (let p = 0; p < passes; p++) {
      const localJitterAmp = passSpread;
      ctx.beginPath();
      ctx.lineWidth = Math.max(0.6, lineWidth + (rand() - 0.5) * widthVariation);
      ctx.setLineDash(dashed ? dashPattern.map(d => d + (rand()-0.5)*3) : []);

      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const localJ = (rand() - 0.5) * localJitterAmp;
        let x = x0 + ux * len * t + px * (baseNoise[i] + localJ);
        let y = y0 + uy * len * t + py * (baseNoise[i] + localJ);
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        if (p === 0) realPoints.push({ x, y });
      }
      ctx.lineTo(
        x1 + ux*over1*overSign*0.4 + px*(rand()-0.5)*passSpread,
        y1 + uy*over1*overSign*0.4 + py*(rand()-0.5)*passSpread
      );
      ctx.strokeStyle = 'black';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    }

    // Funció per consultar la trajectòria real a qualsevol t (0..1), amb interpolació lineal
    // entre els punts mostrejats -- útil per trobar el "punt mitjà visual" (t=0.5) i marcar-hi
    // un punt que caigui EXACTAMENT sobre el traç dibuixat, no sobre la recta algebraica ideal.
    function pointAtT(t) {
      const idx = Math.min(realPoints.length - 2, Math.max(0, Math.floor(t * steps)));
      const frac = t * steps - idx;
      const p0 = realPoints[idx], p1 = realPoints[idx+1];
      return { x: p0.x + (p1.x-p0.x)*frac, y: p0.y + (p1.y-p0.y)*frac };
    }

    // Retorna el punt final REAL (últim píxel dibuixat) i l'accessor pointAtT
    return {
      x: x1 + ux*over1*overSign*0.4,
      y: y1 + uy*over1*overSign*0.4,
      pointAtT
    };
  }

  // ---------- Punt notable (per camuflar interseccions imperfectes) ----------
  function handDot(x, y, r=7) {
    ctx.beginPath();
    const jx = x + (rand()-0.5)*2;
    const jy = y + (rand()-0.5)*2;
    ctx.arc(jx, jy, r + (rand()-0.5)*1.5, 0, Math.PI*2);
    ctx.fillStyle = 'black';
    ctx.fill();
  }

  // ---------- Circumferència/el·lipse a mà: curvatura NO constant ----------
  // En lloc d'un cercle perfecte, es genera com una suma d'un radi base + pertorbacions
  // de baixa freqüència (2-4 "lòbuls" suaus), que és com falla una mà humana: no soroll
  // d'alta freqüència (això semblaria un cercle "peludo" concèntric), sinó una forma
  // globalment ovalada/asimètrica de manera suau.
  function handEllipse(cx, cy, rx, ry, opts={}) {
    const {
      steps = 120, passes = 2, lineWidth = 4, widthVariation = 1.4,
      irregularity = 0.045,  // fracció del radi que pot variar per irregularitat de curvatura
      rotation = 0,
      startAngle = 0, endAngle = Math.PI*2
    } = opts;

    // Generem 2-3 harmònics de baixa freqüència amb fases random -> forma "quasi-el·lipse"
    const harmonics = [];
    const numH = 2 + Math.floor(rand()*2); // 2 o 3
    for (let h = 0; h < numH; h++) {
      harmonics.push({
        freq: 1 + h,                       // freqüències baixes: 1,2,3 (no 8,9,10 -> evitem "peludo")
        phase: rand() * Math.PI * 2,
        amp: irregularity * (1 - h*0.3) * (0.5 + rand())
      });
    }

    for (let p = 0; p < passes; p++) {
      // Cada passada té el seu propi petit desfasament de fase (com repassar el cercle una 2a vegada
      // sense clavar exactament la mateixa corba)
      const passPhaseShift = (rand()-0.5) * 0.15;
      const passRadiusShift = 1 + (rand()-0.5) * 0.02;
      // Descorrelació X/Y CONSTANT per aquesta passada (abans es recalculava a cada punt del bucle,
      // cosa que introduïa soroll d'alta freqüència indesitjat -- "peludo" -- en lloc de la forma
      // globalment asimètrica i suau que busquem)
      const xyDecorrelation = 0.85 + rand()*0.3;

      ctx.beginPath();
      ctx.lineWidth = Math.max(0.6, lineWidth + (rand()-0.5)*widthVariation);
      ctx.setLineDash([]);

      const N = steps;
      for (let i = 0; i <= N; i++) {
        const t = startAngle + (endAngle-startAngle) * i / N;
        let rFactorX = passRadiusShift, rFactorY = passRadiusShift;
        for (const h of harmonics) {
          const dev = h.amp * Math.sin(h.freq * t + h.phase + passPhaseShift);
          rFactorX += dev;
          rFactorY += dev * xyDecorrelation;
        }
        const localX = rx * rFactorX * Math.cos(t);
        const localY = ry * rFactorY * Math.sin(t);
        // rotació global de l'el·lipse (per si no és axis-aligned)
        const x = cx + localX*Math.cos(rotation) - localY*Math.sin(rotation);
        const y = cy + localX*Math.sin(rotation) + localY*Math.cos(rotation);
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'black';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    }
  }

  return { rand, handTrajectory, handSegment, handDot, handEllipse };
}
