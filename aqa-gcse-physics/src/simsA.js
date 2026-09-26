/* ==========================================================
   Simulations A · 4.1 Energy · 4.2 Electricity · 4.3 Particle model
   ========================================================== */

/* ---------- 1.1 Energy stores: pendulum ---------- */
SIMS.energy = {
  title: 'Energy stores in a pendulum', h: 440, substeps: 8,
  controls: [
    { id: 'L', label: 'String length', min: 0.5, max: 3, step: 0.1, value: 2, fmt: v => v.toFixed(1) + ' m' },
    { id: 'a0', label: 'Release angle', min: 5, max: 80, step: 1, value: 50, fmt: v => v + '°' },
    { id: 'm', label: 'Mass', min: 0.1, max: 2, step: 0.1, value: 0.5, fmt: v => v.toFixed(1) + ' kg' },
    { id: 'b', label: 'Air resistance', min: 0, max: 0.6, step: 0.02, value: 0.05, fmt: v => v === 0 ? 'none' : v.toFixed(2) }
  ],
  readouts: ['Speed', 'Height above lowest point', 'Kinetic energy Eₖ = ½mv²', 'Gravitational PE Eₚ = mgh'],
  note: 'Energy moves between the kinetic and gravitational potential stores. Air resistance dissipates energy to the thermal store of the surroundings, so the total of Eₖ + Eₚ falls — but no energy is destroyed.',
  init(st) { st.th = st.p.a0 * deg; st.w = 0; st.lost = 0; },
  change(st, id) { if (id !== 'b') this.init(st); },
  step(st, dt) { const p = st.p; const E0 = .5 * p.m * (p.L * st.w) ** 2 + p.m * g * p.L * (1 - Math.cos(st.th)); st.w += (-g / p.L * Math.sin(st.th) - p.b * st.w) * dt; st.th += st.w * dt; const E1 = .5 * p.m * (p.L * st.w) ** 2 + p.m * g * p.L * (1 - Math.cos(st.th)); st.lost += Math.max(0, E0 - E1); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, px = Math.min(W * 0.33, (W - 4 * 60) / 2), py = 40, sc = (H - 120) / 3.2, Lp = p.L * sc;
    const bx = px + Lp * Math.sin(st.th), by = py + Lp * Math.cos(st.th);
    CV.line(c, px - 60, py, px + 60, py, C.ink, 3); CV.line(c, px - 110, py + Lp, px + 110, py + Lp, C.muted, 1, [4, 4]); CV.mono(c, 'h = 0', px + 114, py + Lp, C.muted, 10);
    c.strokeStyle = hexA(C.muted, .5); c.setLineDash([3, 4]); c.beginPath(); c.arc(px, py, Lp, Math.PI / 2 - p.a0 * deg, Math.PI / 2 + p.a0 * deg); c.stroke(); c.setLineDash([]);
    CV.line(c, px, py, bx, by, C.ink, 1.5); CV.circle(c, bx, by, 10 + p.m * 4, C.u1);
    const v = p.L * st.w; CV.arrow(c, bx, by, bx + v * Math.cos(st.th) * 12, by - v * Math.sin(st.th) * 12, C.u5, 2);
    const KE = .5 * p.m * v * v, PE = p.m * g * p.L * (1 - Math.cos(st.th)), tot0 = p.m * g * p.L * (1 - Math.cos(p.a0 * deg));
    const bw = Math.min(46, Math.max(24, W * 0.4 / 4 - 14)), bx0 = W - 4 * (bw + 14) - 6, bh = H - 110;
    [[KE, C.u5, 'Eₖ'], [PE, C.u3, 'Eₚ'], [st.lost, C.bad, 'dissipated'], [KE + PE + st.lost, C.ink, 'total']].forEach(([val, col, lab], i) => { const hh = bh * val / Math.max(tot0, 1e-6) * 0.9, x = bx0 + i * (bw + 14); CV.rrect(c, x, 40 + bh - hh, bw, hh, 4, col); CV.text(c, lab === 'dissipated' && bw < 40 ? 'lost' : lab, x + bw / 2, 40 + bh + 14, C.muted, 10.5, 'center'); CV.mono(c, val.toFixed(1), x + bw / 2, 40 + bh - hh - 10, C.ink, 10, 'center'); });
    CV.line(c, bx0 - 6, 40 + bh, bx0 + 4 * (bw + 14), 40 + bh, C.ink, 1);
  },
  read(st) { const p = st.p, v = Math.abs(p.L * st.w), h = p.L * (1 - Math.cos(st.th)); return [v.toFixed(2) + ' m/s', h.toFixed(3) + ' m', (.5 * p.m * v * v).toFixed(2) + ' J', (p.m * g * h).toFixed(2) + ' J']; }
};

/* ---------- 1.2 Specific heat capacity (RP1) ---------- */
SIMS.shc = {
  title: 'Specific heat capacity (RP1)', h: 460, substeps: 4,
  controls: [
    { id: 'mat', type: 'seg', label: 'Block material', value: 900, options: [[900, 'Aluminium'], [385, 'Copper'], [450, 'Iron'], [4200, 'Water']] },
    { id: 'm', label: 'Mass', min: 0.5, max: 2, step: 0.1, value: 1, fmt: v => v.toFixed(1) + ' kg' },
    { id: 'P', label: 'Heater power', min: 20, max: 100, step: 5, value: 50, fmt: v => v + ' W' },
    { id: 'ins', type: 'seg', label: 'Insulation', value: 1, options: [[1, 'Wrapped'], [0, 'None']] }
  ],
  readouts: ['Energy supplied E = Pt', 'Temperature rise Δθ', 'Calculated c = E ÷ mΔθ', 'True value of c'],
  note: 'Time runs 60× faster than real life. Without insulation more energy is lost to the surroundings, so the temperature rises less and the calculated c comes out too high — the classic source of error in Required Practical 1.',
  init(st) { st.T = 20; st.E = 0; st.tt = 0; st.hist = [[0, 20]]; },
  change(st, id) { this.init(st); },
  step(st, dt) { const p = st.p, h = dt * 60, k = p.ins ? 0.04 : 0.45; if (st.tt > 900) return; st.T += (p.P - k * (st.T - 20)) / (p.m * p.mat) * h; st.E += p.P * h; st.tt += h; if (st.hist.length === 0 || st.tt - st.last > 10) { st.hist.push([st.E, st.T]); st.last = st.tt; } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, bx = 26, by = H * 0.3, bw = Math.min(W * 0.26, 170), bh = H * 0.36;
    if (p.ins) CV.rrect(c, bx - 12, by - 12, bw + 24, bh + 24, 12, hexA(C.u2, .18), C.u2, 2);
    const hot = clamp((st.T - 20) / 40, 0, 1); CV.rrect(c, bx, by, bw, bh, 6, `rgb(${150 + 100 * hot | 0},${160 - 60 * hot | 0},${170 - 90 * hot | 0})`, C.ink, 2);
    CV.text(c, p.mat === 4200 ? 'water (in a beaker)' : ['', 'block'][1], bx + bw / 2, by + bh - 16, '#fff', 12, 'center', 600);
    CV.rrect(c, bx + bw * 0.3 - 6, by - 50, 12, bh * 0.75 + 50, 3, C.u1, C.ink, 1.5); CV.text(c, 'heater', bx + bw * 0.3, by - 60, C.muted, 11, 'center');
    CV.rrect(c, bx + bw * 0.72 - 4, by - 60, 8, bh * 0.7 + 60, 4, C.surface, C.ink, 1.5); const th = clamp((st.T - 0) / 100, 0, 1) * (bh * 0.7 + 50); CV.rrect(c, bx + bw * 0.72 - 2, by + bh * 0.7 - th, 4, th, 2, C.bad);
    CV.mono(c, st.T.toFixed(1) + ' °C', bx + bw * 0.72 + 10, by - 44, C.ink, 11.5); CV.mono(c, 'joulemeter: ' + Math.round(st.E) + ' J', bx, by + bh + 36, C.ink, 12); CV.mono(c, 'time: ' + (st.tt / 60).toFixed(1) + ' min', bx, by + bh + 54, C.muted, 11);
    const gx0 = bx + bw + 70, b = { x: gx0, y: 30, w: W - gx0 - 20, h: H - 90 };
    CV.plot(c, C, b, { xr: [0, p.P * 900], yr: [15, Math.max(40, 20 + p.P * 900 / (p.m * p.mat) * 1.05)], xl: 'energy supplied / J', yl: 'temperature / °C', series: [{ pts: st.hist.concat([[st.E, st.T]]), col: C.u1, w: 2.4 }, { f: E => 20 + E / (p.m * p.mat), col: hexA(C.muted, .6), w: 1.2, dash: [4, 4] }] });
    CV.text(c, 'dashed: no energy lost (ideal)', b.x + 8, b.y + 22, C.muted, 10.5);
  },
  read(st) { const p = st.p, dT = st.T - 20; return [Math.round(st.E) + ' J', dT.toFixed(2) + ' °C', dT > 0.2 ? Math.round(st.E / (p.m * dT)) + ' J/kg °C' : '—', p.mat + ' J/kg °C']; }
};

/* ---------- 1.3 Sankey builder ---------- */
const SANKEY_DEV = {
  lamp: { name: 'Filament lamp', useful: [['light', 10]], waste: [['thermal (surroundings)', 90]], fix: 'Replace with an LED' },
  led: { name: 'LED lamp', useful: [['light', 40]], waste: [['thermal (surroundings)', 60]], fix: 'Better LED design' },
  motor: { name: 'Electric motor', useful: [['kinetic', 70]], waste: [['thermal', 22], ['sound', 8]], fix: 'Lubricate bearings; low-resistance wire' },
  kettle: { name: 'Kettle', useful: [['thermal (water)', 90]], waste: [['thermal (kettle & air)', 8], ['sound', 2]], fix: 'Insulate the kettle' },
  car: { name: 'Petrol car engine', useful: [['kinetic', 25]], waste: [['thermal (exhaust & engine)', 70], ['sound', 5]], fix: 'Streamline; lubricate; reduce mass' }
};
SIMS.sankey = {
  title: 'Sankey diagram builder', h: 440, noPlay: true,
  controls: [
    { id: 'dev', type: 'seg', label: 'Device', value: 'lamp', options: [['lamp', 'Filament lamp'], ['led', 'LED'], ['motor', 'Motor'], ['kettle', 'Kettle'], ['car', 'Car engine']] },
    { id: 'E', label: 'Total energy input', min: 100, max: 2000, step: 50, value: 500, fmt: v => v + ' J' },
    { id: 'imp', label: 'Reduce wasted energy by', min: 0, max: 50, step: 5, value: 0, fmt: v => v + '%' }
  ],
  readouts: ['Useful output', 'Wasted output', 'Efficiency', 'How to improve'],
  note: 'Arrow widths are proportional to energy. Input = useful + wasted, always — energy is conserved. Reducing the wasted energy (e.g. lubrication, insulation) raises the efficiency.',
  parts(p) { const d = SANKEY_DEV[p.dev], f = 1 - p.imp / 100, w = d.waste.map(([n, v]) => [n, v * f]), wt = w.reduce((a, b) => a + b[1], 0), ut = 100 - wt; const us = d.useful.map(([n, v]) => [n, v / d.useful.reduce((a, b) => a + b[1], 0) * ut]); return { us, w, ut, wt, d }; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, { us, w, d } = this.parts(p), sc = (H * 0.36) / 100, x0 = 24, y0 = 44, cols = [C.u1, C.u7, C.u8];
    let y = y0; const ue = W - 70;
    us.forEach(([n, v]) => { const hgt = Math.max(2, v * sc); c.fillStyle = C.u3; c.fillRect(x0, y, ue - x0, hgt); c.beginPath(); c.moveTo(ue, y - 10); c.lineTo(ue + 36, y + hgt / 2); c.lineTo(ue, y + hgt + 10); c.fill(); CV.text(c, `${n}: ${(v / 100 * p.E).toFixed(0)} J`, ue + 30, y - 18, C.ink, 12, 'right', 700); y += hgt; });
    const nW = w.length, slot = (ue - W * 0.3) / nW; let xw = W * 0.3;
    w.forEach(([n, v], i) => { const hgt = Math.max(2, v * sc), col = cols[i], r0 = 14, yt = y, xa = xw + hgt + r0, ybot = H - 56;
      c.fillStyle = hexA(col, .8); c.beginPath(); c.moveTo(x0, yt); c.lineTo(xw, yt); c.arc(xw, yt + hgt + r0, hgt + r0, -Math.PI / 2, 0); c.lineTo(xa, ybot); c.lineTo(xa + 10, ybot); c.lineTo(xw + r0 + hgt / 2, ybot + 30); c.lineTo(xw + r0 - 10, ybot); c.lineTo(xw + r0, ybot); c.lineTo(xw + r0, yt + hgt + r0); c.arc(xw, yt + hgt + r0, r0, 0, -Math.PI / 2, true); c.lineTo(x0, yt + hgt); c.closePath(); c.fill();
      CV.text(c, `${n}`, xw + r0 + hgt / 2, H - 10, C.ink, 11, 'center', 600); CV.mono(c, `${(v / 100 * p.E).toFixed(0)} J`, xa + 14, ybot - 12, C.ink, 11.5); y += hgt; xw += Math.max(slot, hgt + 60); });
    CV.text(c, `${p.E} J in`, x0 + 6, y0 + 14, '#fff', 12.5, 'left', 700); CV.text(c, d.name + ' — energy in (J)', x0, 22, C.muted, 12, 'left', 600);
  },
  read(st) { const { ut, wt, d } = this.parts(st.p); return [(ut / 100 * st.p.E).toFixed(0) + ' J', (wt / 100 * st.p.E).toFixed(0) + ' J', (ut).toFixed(0) + '% (' + (ut / 100).toFixed(2) + ')', d.fix]; }
};

/* ---------- 1.3 Cooling curves (RP2) ---------- */
SIMS.cooling = {
  title: 'Thermal insulators (RP2)', h: 440,
  controls: [
    { id: 'n', label: 'Layers of each insulator', min: 1, max: 4, step: 1, value: 1, fmt: v => v },
    { id: 'T0', label: 'Starting temperature', min: 60, max: 90, step: 5, value: 80, fmt: v => v + ' °C' }
  ],
  readouts: ['No insulation: drop in 20 min', 'Newspaper', 'Bubble wrap', 'Cotton wool'],
  note: 'Each beaker starts with the same volume of hot water at the same temperature (control variables). The best insulator gives the smallest temperature drop in the same time. More layers → slower cooling. Time runs 60× faster.',
  mats: [['no insulation', 0.075, 'muted'], ['newspaper', 0.045, 'u2'], ['bubble wrap', 0.03, 'u6'], ['cotton wool', 0.022, 'u3']],
  init(st) { st.tt = 0; st.T = this.mats.map(() => st.p.T0); st.hist = this.mats.map(() => [[0, st.p.T0]]); },
  change(st) { this.init(st); },
  step(st, dt) { if (st.tt >= 20) return; const h = dt, n = st.p.n; this.mats.forEach(([, k], i) => { const kk = i ? k / (1 + 0.55 * (n - 1)) : k; st.T[i] -= kk * (st.T[i] - 20) * h; }); st.tt += h; if (!st.lastH || st.tt - st.lastH > 0.25) { st.lastH = st.tt; this.mats.forEach((_, i) => st.hist[i].push([st.tt, st.T[i]])); } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const bw = Math.min(70, (W - 60) / 4 - 22);
    this.mats.forEach(([n, , col], i) => { const x = 30 + i * (bw + 22), y = 60, co = C[col] || C.muted; CV.rrect(c, x - 8, y - 8, bw + 16, 120, 10, hexA(co, i ? .25 + .1 * st.p.n : .05), co, 2); const hot = clamp((st.T[i] - 20) / 70, 0, 1); CV.rrect(c, x + 6, y + 20, bw - 12, 86, 4, `rgb(${120 + 130 * hot | 0},${170 - 50 * hot | 0},${220 - 150 * hot | 0})`, C.ink, 1.2); CV.mono(c, st.T[i].toFixed(1) + '°', x + bw / 2, y + 60, '#fff', 12, 'center'); CV.text(c, bw < 60 ? ['none', 'paper', 'bubble', 'cotton'][i] : n, x + bw / 2, y + 130, C.ink, 11, 'center', 600); });
    const b = { x: 30, y: 230, w: W - 60, h: H - 290 };
    CV.plot(c, C, b, { xr: [0, 20], yr: [20, st.p.T0 + 3], xl: 'time / minutes', yl: 'temperature / °C', series: this.mats.map(([, , col], i) => ({ pts: st.hist[i], col: C[col] || C.muted, w: 2.2 })) });
    CV.mono(c, 't = ' + st.tt.toFixed(1) + ' min', W - 40, 20, C.ink, 12, 'right');
  },
  read(st) { return st.T.map(T => (st.p.T0 - T).toFixed(1) + ' °C'); }
};

/* ---------- 1.4 Energy resources: power the country for a day ---------- */
SIMS.resources = {
  title: 'Power the country for a day', h: 460, noPlay: true,
  controls: [
    { id: 'gas', label: 'Gas power stations', min: 0, max: 30, step: 1, value: 12, fmt: v => v + ' GW' },
    { id: 'nuc', label: 'Nuclear', min: 0, max: 15, step: 1, value: 6, fmt: v => v + ' GW' },
    { id: 'coal', label: 'Coal', min: 0, max: 20, step: 1, value: 0, fmt: v => v + ' GW' },
    { id: 'wind', label: 'Wind farms (capacity)', min: 0, max: 40, step: 1, value: 20, fmt: v => v + ' GW' },
    { id: 'sol', label: 'Solar (capacity)', min: 0, max: 30, step: 1, value: 10, fmt: v => v + ' GW' },
    { id: 'hyd', label: 'Hydro-electric (pumped)', min: 0, max: 5, step: 1, value: 2, fmt: v => v + ' GW' },
    { id: 'wx', type: 'seg', label: 'Weather', value: 'mix', options: [['calm', 'Calm, dull'], ['mix', 'Average'], ['windy', 'Windy, sunny']] }
  ],
  readouts: ['Hours with a power cut', 'Renewable share', 'CO₂ emitted', 'Verdict'],
  note: 'Demand peaks in the evening. Wind and solar output depend on the weather, so they are unreliable; gas can be turned up quickly; nuclear gives a steady output. Aim for no power cuts with as little CO₂ as possible.',
  model(p) { const wf = { calm: 0.08, mix: 0.35, windy: 0.7 }[p.wx], sf = { calm: 0.12, mix: 0.3, windy: 0.55 }[p.wx]; const hrs = [];
    for (let h = 0; h < 24; h++) { const dem = 26 + 6 * Math.exp(-(((h - 8.5) / 2.2) ** 2)) + 11 * Math.exp(-(((h - 18) / 2.4) ** 2)) - 4 * Math.exp(-(((h - 3.5) / 2.5) ** 2));
      const sun = Math.max(0, Math.sin((h - 6) / 12 * Math.PI)); const wind = p.wind * wf * (0.8 + 0.4 * Math.sin(h / 3.2)), sol = p.sol * sf * sun * 1.8, base = p.nuc;
      let need = Math.max(0, dem - base - wind - sol); const hy = Math.min(p.hyd, need); need -= hy; const coal = Math.min(p.coal, need); need -= coal; const gas = Math.min(p.gas, need); need -= gas;
      hrs.push({ h, dem, base, wind: Math.min(wind, Math.max(0, dem - base)), sol: Math.min(sol, Math.max(0, dem - base - Math.min(wind, dem - base))), hy, coal, gas, short: need }); }
    return hrs; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const hrs = this.model(st.p), b = { x: 44, y: 20, w: W - 64, h: H - 80 }, ymax = 50;
    const X = h => b.x + h / 24 * b.w, Y = v => b.y + b.h - v / ymax * b.h;
    CV.rrect(c, b.x - 8, b.y - 8, b.w + 16, b.h + 26, 8, C.surface, C.line, 1);
    const layers = [['base', C.u4, 'nuclear'], ['wind', C.u6, 'wind'], ['sol', C.u2, 'solar'], ['hy', C.u5, 'hydro'], ['coal', C.muted, 'coal'], ['gas', C.u1, 'gas']];
    const acc = hrs.map(() => 0);
    layers.forEach(([k, col]) => { c.fillStyle = hexA(col, .8); hrs.forEach((r, i) => { const v = r[k]; c.fillRect(X(i), Y(acc[i] + v), b.w / 24 - 1, Y(acc[i]) - Y(acc[i] + v)); acc[i] += v; }); });
    hrs.forEach((r, i) => { if (r.short > 0.05) { c.fillStyle = hexA(C.bad, .35); c.fillRect(X(i), Y(r.dem), b.w / 24 - 1, Y(acc[i]) - Y(r.dem)); } });
    c.strokeStyle = C.ink; c.lineWidth = 2.4; c.beginPath(); hrs.forEach((r, i) => { const x = X(i + 0.5), y = Y(r.dem); i ? c.lineTo(x, y) : c.moveTo(x, y); }); c.stroke();
    CV.line(c, b.x, b.y + b.h, b.x + b.w, b.y + b.h, C.ink, 1.2); CV.line(c, b.x, b.y, b.x, b.y + b.h, C.ink, 1.2);
    for (let h = 0; h <= 24; h += 6) CV.mono(c, String(h).padStart(2, '0') + ':00', X(h), b.y + b.h + 10, C.muted, 10, 'center');
    for (let v = 0; v <= 50; v += 10) CV.mono(c, v, b.x - 6, Y(v), C.muted, 10, 'right'); CV.text(c, 'GW', b.x + 4, b.y + 6, C.muted, 10.5);
    const lw = Math.min(78, (b.w - 60) / 6); layers.forEach(([, col, n], i) => { CV.rrect(c, b.x + i * lw, H - 22, 11, 11, 3, col); CV.text(c, n, b.x + 15 + i * lw, H - 16, C.ink, 10.5); }); CV.text(c, '— demand', b.x + 6 * lw, H - 16, C.ink, 10.5, 'left', 700);
  },
  read(st) { const hrs = this.model(st.p), cut = hrs.filter(r => r.short > 0.05).length, tot = hrs.reduce((a, r) => a + r.dem - r.short, 0), ren = hrs.reduce((a, r) => a + r.wind + r.sol + r.hy, 0), co2 = hrs.reduce((a, r) => a + r.gas * 0.4 + r.coal * 0.9, 0);
    return [cut + ' h', (ren / Math.max(tot, 1) * 100).toFixed(0) + '%', co2.toFixed(0) + ' kt', cut ? 'Blackouts! Add reliable capacity' : co2 < 60 ? 'Reliable and low-carbon ✓' : 'Reliable but high CO₂ — try more low-carbon sources']; }
};

/* ---------- 2.1 Charge, current and V = IR ---------- */
SIMS.ohm = {
  title: 'Current, pd and resistance', h: 420,
  controls: [
    { id: 'V', label: 'Supply pd', min: 1.5, max: 12, step: 0.5, value: 6, fmt: v => v.toFixed(1) + ' V' },
    { id: 'R', label: 'Resistance', min: 2, max: 60, step: 1, value: 12, fmt: v => v + ' Ω' }
  ],
  readouts: ['Current I = V ÷ R', 'Charge passed Q = It', 'Time', 'Energy transferred E = QV'],
  note: 'The dots show charge flowing (conventional current, + to −). The current is the same everywhere in a single loop — charge is not used up. Bigger pd → bigger current; bigger resistance → smaller current.',
  init(st) { st.Q = 0; st.tt = 0; },
  change(st) { this.init(st); },
  step(st, dt) { const I = st.p.V / st.p.R; st.Q += I * dt; st.tt += dt; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, I = p.V / p.R, x0 = W * 0.1, x1 = W * 0.86, y0 = 64, y1 = H - 130, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
    const loop = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
    CS.gaps(c, W, H, [[xm, y0, CS.HALF.cell], [x1, ym, CS.HALF.meter, true], [xm, y1, CS.HALF.resistor]], () => { CS.wire(c, [...loop, [x0, y0]], C.ink); CS.dots(c, loop, st.t, I * 120, C.u2, 26); });
    CS.cell(c, xm, y0, C.ink, false, true); CS.meter(c, x1, ym, 'A', C.ink, C.surface); CS.resistor(c, xm, y1, C.ink, C.surface);
    CS.voltmeter(c, C, xm, y1, CS.HALF.resistor, 54, C.ink);
    CS.tag(c, C, p.V.toFixed(1) + ' V supply', xm, y0 - 28); CS.tag(c, C, I.toFixed(3) + ' A', x1 - 24, ym, 'right'); CV.mono(c, p.R + ' Ω', xm, y1 - 22, C.ink, 12, 'center'); CS.tag(c, C, p.V.toFixed(2) + ' V', xm, y1 + 54 + 30);
    CV.text(c, 'ammeter in series · voltmeter in parallel', x0, H - 12, C.muted, 11.5);
  },
  read(st) { const I = st.p.V / st.p.R; return [I.toFixed(3) + ' A', st.Q.toFixed(2) + ' C', st.tt.toFixed(1) + ' s', (st.Q * st.p.V).toFixed(1) + ' J']; }
};

/* ---------- 2.2 I–V characteristics (RP4) ---------- */
SIMS.ivg = {
  title: 'I–V characteristics (RP4)', h: 440, noPlay: true,
  controls: [
    { id: 'comp', type: 'seg', label: 'Component', value: 'res', options: [['res', 'Resistor'], ['lamp', 'Filament lamp'], ['diode', 'Diode']] },
    { id: 'V', label: 'Potential difference', min: -6, max: 6, step: 0.1, value: 2, fmt: v => v.toFixed(1) + ' V' },
    { type: 'button', act: 'sweep', label: 'Sweep −6 V → +6 V' }, { type: 'button', act: 'clear', label: 'Clear points' }
  ],
  readouts: ['pd V', 'Current I', 'Resistance R = V ÷ I', 'Filament temperature'],
  note: 'Move the slider (or sweep) to record points. Resistor: straight line through the origin — ohmic. Lamp: the curve flattens because the filament heats up and its resistance increases. Diode: current flows one way only, above about 0.6 V; very high resistance in reverse.',
  I(comp, V) { if (comp === 'res') return V / 20; if (comp === 'lamp') return V / (5 + 8 * Math.abs(V)); return V > 0 ? 0.06 * Math.log(1 + Math.exp((V - 0.65) / 0.06)) / 20 : 1e-6 * V; },
  init(st) { st.pts = []; st.sweep = null; },
  change(st, id) { if (id === 'comp') st.pts = []; this.rec(st); },
  rec(st) { const V = st.p.V; if (!st.pts.some(q => Math.abs(q[0] - V) < 0.05)) st.pts.push([V, this.I(st.p.comp, V)]); },
  action(st, a) { if (a === 'clear') st.pts = []; if (a === 'sweep') { st.pts = []; for (let V = -6; V <= 6.001; V += 0.25) st.pts.push([V, this.I(st.p.comp, V)]); } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, I = this.I(p.comp, p.V), x0 = 22, x1 = Math.min(Math.max(W * 0.37, 150), W * 0.42 - 30), y0 = 56, y1 = H * 0.44, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2, xc = x0 + (x1 - x0) * 0.3, xv = x0 + (x1 - x0) * 0.72;
    const loop = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]], comps = [[xc, y0, CS.HALF.cell], [x0, ym, CS.HALF.meter, true], [xv, y0, CS.HALF.resistor], [xm, y1, p.comp === 'lamp' ? CS.HALF.lamp : p.comp === 'diode' ? CS.HALF.diode : CS.HALF.resistor]];
    CS.gaps(c, W, H, comps, () => { CS.wire(c, [...loop, [x0, y0]], C.ink); CS.dots(c, p.V >= 0 ? loop : loop.slice().reverse(), st.t, Math.abs(I) * 400, C.u2, Math.abs(I) > 0.002 ? 18 : 0); });
    CS.cell(c, xc, y0, C.ink, false, p.V >= 0); CS.meter(c, x0, ym, 'A', C.ink, C.surface); CS.resistor(c, xv, y0, C.ink, C.surface, false, true);
    if (p.comp === 'res') CS.resistor(c, xm, y1, C.ink, C.surface); else if (p.comp === 'lamp') CS.lamp(c, xm, y1, C.ink, C.surface, clamp(Math.abs(p.V * I) / 0.7, 0, 1)); else CS.diode(c, xm, y1, C.ink, C.surface, false, true);
    CS.voltmeter(c, C, xm, y1, comps[3][2], 50, C.ink);
    CS.tag(c, C, (I * 1000).toFixed(1) + ' mA', x0 + 20, ym, 'left'); CS.tag(c, C, p.V.toFixed(1) + ' V', xm, y1 + 50 + 28);
    CV.text(c, p.V >= 0 ? 'cell forwards' : 'cell reversed', xc, y0 - 26, C.muted, 11, 'center');
    const b = { x: W * 0.42, y: 30, w: W * 0.54, h: H - 90 };
    const g2 = CV.plot(c, C, b, { xr: [-6, 6], yr: [-0.32, 0.32], xl: 'V / V', yl: 'I / A', series: [{ f: V => this.I(p.comp, V), col: hexA(C.muted, .35), w: 1, dash: [3, 4] }], dots: st.pts.map(q => [q[0], q[1], C.u2, 3.5]).concat([[p.V, I, C.bad, 6]]) });
    CV.line(c, g2.X(0), b.y, g2.X(0), b.y + b.h, C.ink, 1); [-6, -3, 3, 6].forEach(v => CV.mono(c, v, g2.X(v), g2.Y(0) + 10, C.muted, 9.5, 'center')); [-0.3, 0.3].forEach(v => CV.mono(c, v.toFixed(1), g2.X(0) - 4, g2.Y(v), C.muted, 9.5, 'right'));
  },
  read(st) { const p = st.p, I = this.I(p.comp, p.V), R = Math.abs(I) > 1e-5 ? p.V / I : Infinity; this.rec(st); return [p.V.toFixed(1) + ' V', (I * 1000).toFixed(1) + ' mA', isFinite(R) && Math.abs(R) < 1e5 ? Math.abs(R).toFixed(1) + ' Ω' : 'very high', p.comp === 'lamp' ? Math.round(20 + 1400 * (5 + 8 * Math.abs(p.V) - 5) / 48) + ' °C' : 'constant']; }
};

/* ---------- 2.2 Thermistor and LDR ---------- */
SIMS.sensors = {
  title: 'Thermistors and LDRs', h: 420, noPlay: false,
  controls: [
    { id: 's', type: 'seg', label: 'Sensor', value: 'th', options: [['th', 'Thermistor'], ['ldr', 'LDR']] },
    { id: 'T', label: 'Temperature', min: 0, max: 100, step: 1, value: 20, fmt: v => v + ' °C' },
    { id: 'L', label: 'Light intensity', min: 0, max: 100, step: 1, value: 60, fmt: v => v + '%' }
  ],
  readouts: ['Resistance', 'Trend', 'Application', 'Device state'],
  note: 'Thermistor: resistance falls as temperature rises (used in thermostats). LDR: resistance falls as light intensity rises (used to switch lights on when it gets dark).',
  R(p) { return p.s === 'th' ? 10 * Math.exp(3950 * (1 / (p.T + 273) - 1 / 298)) : 100 / (1 + 0.4 * p.L); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, R = this.R(p), b = { x: W * 0.46, y: 30, w: W * 0.5, h: H - 90 };
    const g2 = CV.plot(c, C, b, p.s === 'th' ? { xr: [0, 100], yr: [0, 32], xl: 'temperature / °C', yl: 'resistance / kΩ', series: [{ f: T => this.R({ s: 'th', T }), col: C.u1, w: 2.4 }], dots: [[p.T, R, C.bad, 6]] } : { xr: [0, 100], yr: [0, 105], xl: 'light intensity / %', yl: 'resistance / kΩ', series: [{ f: L => this.R({ s: 'ldr', L }), col: C.u6, w: 2.4 }], dots: [[p.L, R, C.bad, 6]] });
    const cx = W * 0.2, cy = H * 0.3; CV.rrect(c, cx - 60, cy - 30, 120, 60, 10, C.surface, C.line, 1);
    CS.gaps(c, W, H, [[cx, cy, CS.HALF.resistor]], () => CV.line(c, cx - 50, cy, cx + 50, cy, C.ink, 2));
    if (p.s === 'th') { CS.resistor(c, cx, cy, C.ink, C.surface); CV.line(c, cx - 24, cy + 14, cx - 16, cy + 14, C.ink, 1.5); CV.line(c, cx - 16, cy + 14, cx + 18, cy - 14, C.ink, 1.5); const hot = p.T / 100; CV.circle(c, cx, cy + 90, 34, `rgba(${80 + 170 * hot | 0},${120 - 40 * hot | 0},${220 - 180 * hot | 0},.35)`); CV.text(c, p.T + ' °C', cx, cy + 90, C.ink, 14, 'center', 700);
      const on = p.T < 18; CV.rrect(c, cx - 60, H - 100, 120, 40, 8, on ? hexA(C.u1, .8) : C.surface, C.ink, 1.5); CV.text(c, on ? 'HEATER ON' : 'heater off', cx, H - 80, on ? '#fff' : C.muted, 12, 'center', 700); CV.text(c, 'thermostat set to 18 °C', cx, H - 44, C.muted, 11, 'center'); }
    else { CV.circle(c, cx, cy, 22, 'none', C.ink, 1.4); CS.resistor(c, cx, cy, C.ink, C.surface); for (let i = 0; i < 2; i++) CV.arrow(c, cx - 40 + i * 10, cy - 36, cx - 20 + i * 10, cy - 18, C.u2, 1.6); const Lf = p.L / 100; CV.circle(c, cx, cy + 90, 34, `rgba(255,${200 + 55 * Lf | 0},${80 + 100 * Lf | 0},${0.1 + 0.6 * Lf})`); CV.text(c, p.L + '% light', cx, cy + 90, C.ink, 13, 'center', 700);
      const on = p.L < 25; CS.lamp(c, cx, H - 80, C.ink, C.surface, on ? 1 : 0); CV.text(c, on ? 'street lamp ON' : 'street lamp off', cx, H - 44, on ? C.ink : C.muted, 12, 'center', 700); }
  },
  read(st) { const p = st.p, R = this.R(p); return [R.toFixed(R < 10 ? 2 : 1) + ' kΩ', p.s === 'th' ? 'hotter → lower R' : 'brighter → lower R', p.s === 'th' ? 'thermostat' : 'automatic lights', p.s === 'th' ? (p.T < 18 ? 'heater ON' : 'heater off') : (p.L < 25 ? 'lamp ON' : 'lamp off')]; }
};

/* ---------- 2.3 Series and parallel ---------- */
SIMS.serpar = {
  title: 'Series and parallel circuits', h: 440,
  controls: [
    { id: 'mode', type: 'seg', label: 'Connection', value: 'ser', options: [['ser', 'Series'], ['par', 'Parallel']] },
    { id: 'V', label: 'Supply pd', min: 3, max: 12, step: 0.5, value: 6, fmt: v => v.toFixed(1) + ' V' },
    { id: 'R1', label: 'R₁', min: 2, max: 40, step: 1, value: 10, fmt: v => v + ' Ω' },
    { id: 'R2', label: 'R₂', min: 2, max: 40, step: 1, value: 20, fmt: v => v + ' Ω' }
  ],
  readouts: ['Supply current', 'pd across R₁ · R₂', 'Current in R₁ · R₂', 'Total resistance = V ÷ I'],
  note: 'Series: one current; the pd is shared (bigger R, bigger share); R_total = R₁ + R₂. Parallel: each branch gets the full pd; branch currents add up; the total resistance is less than the smallest resistor. (You don’t need to calculate parallel totals.)',
  calc(p) { if (p.mode === 'ser') { const I = p.V / (p.R1 + p.R2); return { I, V1: I * p.R1, V2: I * p.R2, I1: I, I2: I }; } const I1 = p.V / p.R1, I2 = p.V / p.R2; return { I: I1 + I2, V1: p.V, V2: p.V, I1, I2 }; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, k = this.calc(p), x0 = W * 0.1, x1 = W * 0.9, y0 = 60, xm = (x0 + x1) / 2, ya = y0 + 70;
    if (p.mode === 'ser') {
      const y1 = H - 150, xr1 = x0 + (x1 - x0) * 0.3, xr2 = x0 + (x1 - x0) * 0.7, loop = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
      CS.gaps(c, W, H, [[xm, y0, CS.HALF.cell], [x0, ya, CS.HALF.meter, true], [xr1, y1, CS.HALF.resistor], [xr2, y1, CS.HALF.resistor]], () => { CS.wire(c, [...loop, [x0, y0]], C.ink); CS.dots(c, loop, st.t, k.I * 150, C.u2, 30); });
      [[xr1, 'R₁ = ' + p.R1 + ' Ω', k.V1], [xr2, 'R₂ = ' + p.R2 + ' Ω', k.V2]].forEach(([x, lab, v]) => { CS.resistor(c, x, y1, C.ink, C.surface); CV.text(c, lab, x, y1 - 24, C.ink, 12, 'center', 600); CS.voltmeter(c, C, x, y1, CS.HALF.resistor, 56, C.ink); CS.tag(c, C, v.toFixed(2) + ' V', x, y1 + 56 + 30); });
    } else {
      const yb1 = y0 + 150, yb2 = H - 70, xa = x0 + (x1 - x0) * 0.25;
      CS.gaps(c, W, H, [[xm, y0, CS.HALF.cell], [x0, ya, CS.HALF.meter, true], [xm, yb1, CS.HALF.resistor], [xm, yb2, CS.HALF.resistor], [xa, yb1, CS.HALF.meter], [xa, yb2, CS.HALF.meter]], () => {
        CS.wire(c, [[x0, yb1], [x0, y0], [x1, y0], [x1, yb1]], C.ink); CS.wire(c, [[x0, yb1], [x0, yb2], [x1, yb2], [x1, yb1]], C.ink); CS.wire(c, [[x0, yb1], [x1, yb1]], C.ink);
        CS.dots(c, [[x0, yb1], [x0, y0], [x1, y0], [x1, yb1]], st.t, k.I * 150, C.u2, 22, true); CS.dots(c, [[x1, yb1], [x0, yb1]], st.t, k.I1 * 150, C.u2, 8, true); CS.dots(c, [[x1, yb1], [x1, yb2], [x0, yb2], [x0, yb1]], st.t, k.I2 * 150, C.u2, 16, true); });
      CS.junction(c, x0, yb1, C.ink); CS.junction(c, x1, yb1, C.ink);
      [[yb1, 'R₁ = ' + p.R1 + ' Ω', k.I1], [yb2, 'R₂ = ' + p.R2 + ' Ω', k.I2]].forEach(([y, lab, i]) => { CS.resistor(c, xm, y, C.ink, C.surface); CV.text(c, lab, xm, y + 24, C.ink, 12, 'center', 600); CS.meter(c, xa, y, 'A', C.ink, C.surface); CS.tag(c, C, i.toFixed(3) + ' A', xa, y - 30); CS.tag(c, C, p.V.toFixed(1) + ' V across', xm + (x1 - xm) / 2 + 6, y - 30); });
    }
    CS.cell(c, xm, y0, C.ink, false, true); CS.tag(c, C, p.V.toFixed(1) + ' V supply', xm, y0 - 28);
    CS.meter(c, x0, ya, 'A', C.ink, C.surface); CS.tag(c, C, k.I.toFixed(3) + ' A', x0 + 22, ya, 'left');
  },
  read(st) { const p = st.p, k = this.calc(p); return [k.I.toFixed(3) + ' A', k.V1.toFixed(2) + ' V · ' + k.V2.toFixed(2) + ' V', k.I1.toFixed(3) + ' A · ' + k.I2.toFixed(3) + ' A', (p.V / k.I).toFixed(2) + ' Ω' + (p.mode === 'par' ? ' (< ' + Math.min(p.R1, p.R2) + ')' : '')]; }
};

/* ---------- 2.4 ac / dc on an oscilloscope ---------- */
SIMS.acdc = {
  title: 'ac and dc on an oscilloscope', h: 420,
  controls: [
    { id: 'src', type: 'seg', label: 'Supply', value: 'mains', options: [['dc', 'Battery (dc)'], ['mains', 'UK mains (ac)'], ['sig', 'Signal generator']] },
    { id: 'f', label: 'Signal generator frequency', min: 10, max: 200, step: 5, value: 100, fmt: v => v + ' Hz' },
    { id: 'tb', label: 'Time-base', min: 2, max: 20, step: 1, value: 5, fmt: v => v + ' ms/div' }
  ],
  readouts: ['Frequency', 'Period T = 1/f', 'Direction of pd', 'Quoted value'],
  note: 'A direct pd stays in one direction — a flat trace. An alternating pd keeps reversing. UK mains is ac at 50 Hz and about 230 V (its peaks reach about 325 V; the quoted 230 V is an average “effective” value — you only need to know “about 230 V”).',
  draw(c, W, H, st, C) {
    const p = st.p; c.fillStyle = '#07130D'; c.fillRect(0, 0, W, H); const gx = 40, gy = 30, gw = W - 80, gh = H - 90, nx = 10, ny = 8;
    c.strokeStyle = 'rgba(80,220,140,.18)'; c.lineWidth = 1; for (let i = 0; i <= nx; i++) { c.beginPath(); c.moveTo(gx + i * gw / nx, gy); c.lineTo(gx + i * gw / nx, gy + gh); c.stroke(); } for (let j = 0; j <= ny; j++) { c.beginPath(); c.moveTo(gx, gy + j * gh / ny); c.lineTo(gx + gw, gy + j * gh / ny); c.stroke(); }
    const f = p.src === 'mains' ? 50 : p.src === 'sig' ? p.f : 0, amp = p.src === 'mains' ? 325 : p.src === 'sig' ? 5 : 9, vdiv = p.src === 'mains' ? 100 : 2, T = p.tb / 1000 * nx;
    c.strokeStyle = '#6CFFA8'; c.lineWidth = 2.2; c.shadowColor = '#6CFFA8'; c.shadowBlur = 8; c.beginPath();
    for (let i = 0; i <= 400; i++) { const t = i / 400 * T, v = f ? amp * Math.sin(2 * Math.PI * f * (t + st.t * 0.02)) : amp, y = gy + gh / 2 - v / vdiv * gh / ny; i ? c.lineTo(gx + i / 400 * gw, y) : c.moveTo(gx, y); } c.stroke(); c.shadowBlur = 0;
    CV.mono(c, `${vdiv} V/div · ${p.tb} ms/div`, gx, H - 36, '#6CFFA8', 12); CV.mono(c, '0 V', gx - 6, gy + gh / 2, '#6CFFA8', 10, 'right');
  },
  read(st) { const p = st.p, f = p.src === 'mains' ? 50 : p.src === 'sig' ? p.f : 0; return [f ? f + ' Hz' : '— (no alternation)', f ? (1000 / f).toFixed(1) + ' ms' : '—', f ? 'reverses (ac)' : 'one direction (dc)', p.src === 'mains' ? 'about 230 V' : p.src === 'dc' ? '9 V' : '5 V peak']; }
};

/* ---------- 2.4 Wire a plug & earth safety ---------- */
SIMS.plug = {
  title: 'Wire a plug · earth safety', h: 440, noPlay: true,
  controls: [{ id: 'mode', type: 'seg', label: 'Activity', value: 'wire', options: [['wire', 'Wire the plug'], ['fault', 'Fault test']] }, { id: 'earth', type: 'seg', label: 'Earth wire (fault test)', value: 1, options: [[1, 'Connected'], [0, 'Missing']] }, { type: 'button', act: 'fault', label: 'Make the live wire touch the case' }, { type: 'button', act: 'reset', label: 'Start again' }],
  readouts: ['Correct connections', 'Selected wire', 'Case potential', 'Result'],
  note: 'Tap a wire, then tap the terminal it belongs to: brown = live (L), blue = neutral (N), green/yellow = earth (E). In the fault test, see why the earth wire matters: with it, the fault current flows to earth and the fuse melts; without it, the metal case sits at 230 V.',
  init(st) { st.sel = null; st.con = {}; st.msg = 'Pick a wire'; st.fault = false; st.fx = 0; },
  change(st, id) { if (id === 'mode') this.init(st); if (id === 'earth') st.fault = false; },
  action(st, a) { if (a === 'reset') this.init(st); if (a === 'fault') { st.p.mode = 'fault'; st.fault = true; st.fx = 0; } },
  geo(W, H) { return { term: { N: [W * 0.25, 90], E: [W * 0.5, 70], L: [W * 0.75, 90] }, wires: { brown: [W * 0.7, H - 130], blue: [W * 0.3, H - 130], gy: [W * 0.5, H - 150] } }; },
  pointer(type, x, y, st) { if (type !== 'down' || st.p.mode !== 'wire') return; const g = this.geo(st.W, st.H);
    for (const [k, [wx, wy]] of Object.entries(g.wires)) if (Math.hypot(x - wx, y - wy) < 30) { st.sel = k; st.msg = 'Now tap a terminal'; sfx.tick(); return; }
    for (const [t, [tx, ty]] of Object.entries(g.term)) if (Math.hypot(x - tx, y - ty) < 32 && st.sel) { const ok = { brown: 'L', blue: 'N', gy: 'E' }[st.sel] === t; if (ok) { st.con[st.sel] = t; st.msg = 'Correct!'; sfx.good(); } else { st.msg = 'Not that terminal — try again'; sfx.bad(); } st.sel = null; return; } },
  step(st, dt) { if (st.fault) st.fx += dt; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const g = this.geo(W, H), col = { brown: '#8B5A2B', blue: '#1C6FA8', gy: '#3F9A3A' }, name = { brown: 'brown', blue: 'blue', gy: 'green/yellow' };
    if (st.p.mode === 'wire') {
      CV.rrect(c, W * 0.12, 30, W * 0.76, H - 84, 30, C.surface, C.ink, 2); CV.rrect(c, W * 0.5 - 30, H - 70, 60, 24, 6, '#5B6C79'); CV.text(c, 'cable', W * 0.5, H - 58, '#fff', 10, 'center');
      Object.entries(g.term).forEach(([t, [x, y]]) => { CV.rrect(c, x - 18, y - 30, 36, 60, 5, '#8A8F96', C.ink, 1.5); CV.text(c, t, x, y + 1, '#fff', 16, 'center', 800); CV.text(c, { L: 'live', N: 'neutral', E: 'earth' }[t], x, y + 44, C.muted, 11, 'center'); });
      Object.entries(g.wires).forEach(([k, [x, y]]) => { const tgt = st.con[k] ? g.term[st.con[k]] : null; c.strokeStyle = col[k]; c.lineWidth = 8; c.lineCap = 'round'; c.beginPath(); c.moveTo(W * 0.5, H - 56); c.quadraticCurveTo(x, y + 40, tgt ? tgt[0] : x, tgt ? tgt[1] + 30 : y); c.stroke(); if (k === 'gy') { c.strokeStyle = '#E8D23A'; c.setLineDash([8, 8]); c.stroke(); c.setLineDash([]); }
        if (!tgt) { CV.circle(c, x, y, st.sel === k ? 16 : 12, col[k], st.sel === k ? C.accent : C.ink, st.sel === k ? 3 : 1.5); CV.text(c, name[k], x, y + 26, C.ink, 11, 'center', 600); } });
      c.lineCap = 'butt'; CV.text(c, st.msg, W / 2, H - 22, C.ink, 13, 'center', 700);
    } else {
      const cx = W * 0.35, cy = H * 0.45; CV.rrect(c, cx - 90, cy - 70, 180, 140, 14, '#AEB6BF', C.ink, 2); CV.text(c, 'metal case', cx, cy - 80, C.muted, 11, 'center');
      CV.text(c, 'toaster', cx, cy, '#2B3A47', 14, 'center', 700);
      if (st.p.earth) { CV.line(c, cx + 90, cy + 40, W * 0.72, cy + 40, '#3F9A3A', 5); CV.line(c, W * 0.72, cy + 40, W * 0.72, H - 40, '#3F9A3A', 5); CV.text(c, 'earth wire → 0 V', W * 0.74, cy + 30, C.ink, 11); for (let i = 0; i < 3; i++) CV.line(c, W * 0.72 - 18 + i * 6, H - 36 + i * 6, W * 0.72 + 18 - i * 6, H - 36 + i * 6, C.ink, 2); }
      // person
      const px = cx - 150, py = cy + 10, shock = st.fault && !st.p.earth; CV.circle(c, px, py - 60, 12, 'none', shock ? C.bad : C.ink, 2); CV.line(c, px, py - 48, px, py + 10, shock ? C.bad : C.ink, 2); CV.line(c, px, py - 30, cx - 90, cy - 10, shock ? C.bad : C.ink, 2); CV.line(c, px, py + 10, px - 14, py + 50, shock ? C.bad : C.ink, 2); CV.line(c, px, py + 10, px + 14, py + 50, shock ? C.bad : C.ink, 2);
      if (st.fault) { CV.line(c, cx + 20, cy - 70, cx + 40, cy - 40, '#8B5A2B', 4); CV.text(c, 'live wire touching case!', cx, cy + 90, C.bad, 12, 'center', 700);
        if (st.p.earth) { CV.text(c, st.fx > 0.4 ? 'FUSE MELTED — circuit broken, case safe' : 'large current to earth…', W * 0.62, 30, st.fx > 0.4 ? C.good : C.bad, 13, 'center', 800); }
        else { const fl = Math.sin(st.fx * 30) > 0; CV.text(c, 'CASE AT 230 V — current flows through the person!', W * 0.55, 30, C.bad, 13, 'center', 800); if (fl) for (let i = 0; i < 4; i++) CV.line(c, px + 10 + i * 8, py - 70 - i * 3, px + 18 + i * 8, py - 80 - i * 3, C.u2, 2); } }
      else CV.text(c, 'Press “Make the live wire touch the case”', W / 2, 30, C.muted, 12, 'center');
    }
  },
  read(st) { const n = Object.keys(st.con).length; return [st.p.mode === 'wire' ? n + ' / 3' : '—', st.sel ? { brown: 'brown', blue: 'blue', gy: 'green/yellow' }[st.sel] : '—', st.p.mode === 'fault' && st.fault ? (st.p.earth ? '≈ 0 V (earthed)' : '230 V') : '0 V', st.p.mode === 'wire' ? (n === 3 ? 'Plug wired correctly ✓' : 'keep going') : st.fault ? (st.p.earth ? 'Safe: fuse melts' : 'Danger: electric shock') : 'no fault']; }
};

/* ---------- 2.5 The National Grid ---------- */
SIMS.grid = {
  title: 'Why the National Grid uses high pd', h: 400,
  controls: [
    { id: 'kV', label: 'Transmission pd', min: 1, max: 400, step: 1, value: 25, fmt: v => v + ' kV' },
    { id: 'P', label: 'Power sent', min: 10, max: 500, step: 10, value: 100, fmt: v => v + ' MW' }
  ],
  readouts: ['Current in cables I = P ÷ V', 'Power wasted P = I²R', 'Power delivered', 'Efficiency'],
  note: 'For the same power, a higher transmission pd means a smaller current (P = VI). The power wasted heating the cables is P = I²R, so halving the current cuts the loss to a quarter. Cable resistance here: 5 Ω.',
  k(p) { const I = p.P * 1e6 / (p.kV * 1e3), loss = Math.min(I * I * 5, p.P * 1e6); return { I, loss, del: p.P * 1e6 - loss }; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, k = this.k(p), y = H * 0.45, frac = k.loss / (p.P * 1e6);
    const bw2 = 20, node = (x, lab, col, icon) => { CV.rrect(c, x - bw2, y - bw2, bw2 * 2, bw2 * 2, 8, C.surface, col, 2); CV.text(c, icon, x, y + 1, col, 16, 'center', 800); lab.split('|').forEach((l, i) => CV.text(c, l, x, y + 34 + i * 14, C.ink, 11, 'center', i ? 500 : 700)); };
    const x1 = W * 0.1, x2 = W * 0.37, x3 = W * 0.63, x4 = W * 0.9;
    const pa = x2 + (x3 - x2) * 0.33, pb = x3 - (x3 - x2) * 0.33, yt = y - 56, line = [[x2 + bw2, y], [pa, yt], [pb, yt], [x3 - bw2, y]];
    [pa, pb].forEach(px => { CV.line(c, px - 12, y + 14, px - 3, yt - 8, C.muted, 2); CV.line(c, px + 12, y + 14, px + 3, yt - 8, C.muted, 2); CV.line(c, px - 16, yt, px + 16, yt, C.muted, 2); CV.line(c, px - 8, y - 14, px + 8, y - 14, C.muted, 1.5); });
    const hot = clamp(frac * 3, 0, 1); c.strokeStyle = `rgb(${100 + 155 * hot | 0},${110 - 70 * hot | 0},${120 - 90 * hot | 0})`; c.lineWidth = 3 + 5 * hot; c.lineJoin = 'round'; c.shadowColor = C.bad; c.shadowBlur = 20 * hot; c.beginPath(); line.forEach(([px, py], i) => i ? c.lineTo(px, py) : c.moveTo(px, py)); c.stroke(); c.shadowBlur = 0; CV.line(c, x1 + bw2, y, x2 - bw2, y, C.ink, 2); CV.line(c, x3 + bw2, y, x4 - bw2, y, C.ink, 2);
    CS.dots(c, line, st.t, Math.min(k.I / 4, 400), C.u2, Math.min(40, 4 + k.I / 200 | 0), true);
    node(x1, 'power|station', C.u1, '⚡'); node(x2, 'step-up|transformer', C.u5, '↑'); node(x3, 'step-down|transformer', C.u5, '↓'); node(x4, 'homes|230 V', C.u3, '⌂');
    CS.tag(c, C, `${p.kV} kV · ${k.I >= 1000 ? (k.I / 1000).toFixed(2) + ' kA' : k.I.toFixed(0) + ' A'}`, (x2 + x3) / 2, y - 88); CV.text(c, 'cables glow when lots of energy is wasted', W / 2, y + 86, C.muted, 11, 'center');
    const bw = W - 120, bx = 60, by = H - 50; CV.rrect(c, bx, by, bw, 18, 6, hexA(C.u3, .25)); CV.rrect(c, bx, by, bw * (1 - frac), 18, 6, C.u3); CV.text(c, 'delivered', bx, by - 10, C.muted, 11); CV.text(c, 'wasted in cables', bx + bw, by - 10, C.bad, 11, 'right');
  },
  read(st) { const p = st.p, k = this.k(p); return [k.I >= 1000 ? (k.I / 1000).toFixed(2) + ' kA' : k.I.toFixed(0) + ' A', (k.loss / 1e6).toFixed(2) + ' MW', (k.del / 1e6).toFixed(1) + ' MW', (k.del / (p.P * 1e6) * 100).toFixed(1) + '%']; }
};

/* ---------- 2.6 Static electricity & electric fields ---------- */
SIMS.static = {
  title: 'Static charge and electric fields', h: 440,
  controls: [
    { id: 'mode', type: 'seg', label: 'Show', value: 'rub', options: [['rub', 'Charging by rubbing'], ['field', 'Electric field']] },
    { id: 'rod', type: 'seg', label: 'Rod', value: 'poly', options: [['poly', 'Polythene'], ['acet', 'Acetate']] },
    { id: 'q', label: 'Charge on sphere', min: -5, max: 5, step: 1, value: 3, fmt: v => (v > 0 ? '+' : '') + v },
    { type: 'button', act: 'rub', label: 'Rub the rod' }
  ],
  readouts: ['Rod charge', 'Cloth charge', 'Force on test charge', 'Field near sphere'],
  note: 'Rubbing moves electrons (only electrons!). Polythene gains electrons → negative; acetate loses electrons → positive; the cloth gets an equal and opposite charge. In field mode drag the small + test charge: the force is stronger closer to the sphere, and a big charge can make the air spark.',
  init(st) { st.n = 0; st.fly = []; st.tq = [st.W ? st.W * 0.75 : 500, st.H ? st.H * 0.35 : 150]; st.spark = 0; },
  change(st, id) { if (id === 'rod') { st.n = 0; st.fly = []; } },
  action(st, a) { if (a === 'rub' && st.p.mode === 'rub') { for (let i = 0; i < 3; i++) st.fly.push({ t: -i * 0.15 }); } },
  pointer(type, x, y, st) { if (st.p.mode === 'field' && (type === 'down' || type === 'drag')) st.tq = [x, y]; },
  step(st, dt) { st.fly.forEach(f => f.t += dt); const done = st.fly.filter(f => f.t > 1); st.n = Math.min(12, st.n + done.length); st.fly = st.fly.filter(f => f.t <= 1); st.spark = Math.max(0, st.spark - dt); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p;
    if (p.mode === 'rub') { const toRod = p.rod === 'poly', ry = H * 0.4, rx = W * 0.1, rw = W * 0.45, cx = W * 0.78;
      CV.rrect(c, rx, ry - 18, rw, 36, 18, hexA(toRod ? C.u5 : C.u2, .35), C.ink, 1.5); CV.text(c, toRod ? 'polythene rod' : 'acetate rod', rx + rw / 2, ry - 34, C.ink, 12, 'center', 600);
      c.fillStyle = hexA(C.u8, .3); c.beginPath(); c.ellipse(cx, ry, 70, 50, 0, 0, 7); c.fill(); c.strokeStyle = C.ink; c.lineWidth = 1.5; c.stroke(); CV.text(c, 'cloth', cx, ry - 62, C.ink, 12, 'center', 600);
      for (let i = 0; i < st.n; i++) { const a = rx + 20 + (i % 12) * (rw - 40) / 11; CV.text(c, toRod ? '−' : '+', a, ry, toRod ? C.u5 : C.u1, 18, 'center', 800); const b = cx - 45 + (i % 6) * 18, bb = ry - 14 + Math.floor(i / 6) * 22; CV.text(c, toRod ? '+' : '−', b, bb, toRod ? C.u1 : C.u5, 18, 'center', 800); }
      st.fly.forEach(f => { if (f.t < 0) return; const x = toRod ? cx - 60 - (cx - 60 - rx - rw * 0.8) * f.t : rx + rw * 0.8 + (cx - 60 - rx - rw * 0.8) * f.t; CV.circle(c, x, ry + 50 - 30 * Math.sin(f.t * Math.PI), 6, C.u6); CV.text(c, '−', x, ry + 50 - 30 * Math.sin(f.t * Math.PI), '#fff', 11, 'center', 800); });
      CV.text(c, toRod ? 'electrons move from the cloth to the rod' : 'electrons move from the rod to the cloth', W / 2, H - 40, C.ink, 13, 'center', 700);
    } else { const sx = W * 0.35, sy = H * 0.5, q = p.q;
      if (q !== 0) for (let i = 0; i < 16; i++) { const a = i * Math.PI / 8, r0 = 40, r1 = Math.min(W, H) * 0.48; if (q > 0) CV.arrow(c, sx + r0 * Math.cos(a), sy + r0 * Math.sin(a), sx + r1 * Math.cos(a), sy + r1 * Math.sin(a), hexA(C.u1, .6), 1.4); else CV.arrow(c, sx + r1 * Math.cos(a), sy + r1 * Math.sin(a), sx + r0 * Math.cos(a), sy + r0 * Math.sin(a), hexA(C.u6, .6), 1.4); }
      CV.circle(c, sx, sy, 34, q > 0 ? C.u1 : q < 0 ? C.u6 : C.muted, C.ink, 2); CV.text(c, q > 0 ? '+' + q : String(q), sx, sy, '#fff', 16, 'center', 800);
      const [tx, ty] = st.tq, dx = tx - sx, dy = ty - sy, r = Math.max(40, Math.hypot(dx, dy)), F = q * 4e4 / (r * r);
      CV.circle(c, tx, ty, 9, C.u2, C.ink, 1.5); CV.text(c, '+', tx, ty, '#fff', 12, 'center', 800); if (q) CV.arrow(c, tx, ty, tx + dx / r * clamp(F * 40, -120, 120), ty + dy / r * clamp(F * 40, -120, 120), C.ink, 2.4);
      if (Math.abs(q) >= 4 && r < 70) { st.spark = 0.3; } if (st.spark > 0) { c.strokeStyle = '#FFE08A'; c.lineWidth = 2; c.beginPath(); c.moveTo(sx + dx / r * 34, sy + dy / r * 34); for (let i = 1; i <= 6; i++) c.lineTo(sx + dx * i / 6 + (Math.random() - .5) * 12, sy + dy * i / 6 + (Math.random() - .5) * 12); c.stroke(); CV.text(c, 'SPARK! The strong field ionises the air', W / 2, 24, C.bad, 13, 'center', 800); }
      CV.text(c, 'drag the + test charge', W - 20, H - 16, C.muted, 11, 'right');
    }
  },
  read(st) { const p = st.p, toRod = p.rod === 'poly'; if (p.mode === 'rub') return [(toRod ? '−' : '+') + st.n + ' units', (toRod ? '+' : '−') + st.n + ' units (equal and opposite)', '—', '—'];
    const [tx, ty] = st.tq, r = Math.max(40, Math.hypot(tx - st.W * 0.35, ty - st.H * 0.5)), F = p.q * 4e4 / (r * r); return ['—', '—', p.q ? (F > 0 ? 'repelled (away)' : 'attracted (towards)') + ' · ' + Math.abs(F).toFixed(2) + ' units' : 'none', p.q ? 'strongest close to the sphere' : 'no field']; }
};

/* ---------- 3.1 States of matter ---------- */
SIMS.states = {
  title: 'Particles in solids, liquids and gases', h: 420,
  controls: [{ id: 'T', label: 'Temperature of the water', min: -40, max: 140, step: 1, value: 20, fmt: v => v + ' °C' }],
  readouts: ['State', 'Particle arrangement', 'Particle motion', 'Density (approx.)'],
  note: 'Heating increases the energy of the particles. In a solid they vibrate about fixed positions; in a liquid they are still close together but move past each other; in a gas they are far apart and move quickly. Mass is conserved in every change of state.',
  init(st) { st.P = Array.from({ length: 48 }, (_, i) => ({ hx: i % 8, hy: Math.floor(i / 8), x: 0, y: 0, vx: (Math.random() - .5), vy: (Math.random() - .5) })); st.ready = false; },
  state(T) { return T < 0 ? 'solid' : T < 100 ? 'liquid' : 'gas'; },
  step(st, dt) { const W = st.W, H = st.H, s = this.state(st.p.T), bx = W * 0.08, by = 30, bw = W * 0.5, bh = H - 60, sp = 0.3 + Math.abs(st.p.T + 50) / 100;
    st.P.forEach((q, i) => { if (!st.ready) { q.x = bx + 40 + q.hx * 22; q.y = by + bh - 40 - q.hy * 22; }
      if (s === 'solid') { const tx = bx + 40 + q.hx * 22, ty = by + bh - 40 - q.hy * 22; q.x += (tx - q.x) * 0.2 + (Math.random() - .5) * sp * 2; q.y += (ty - q.y) * 0.2 + (Math.random() - .5) * sp * 2; }
      else { const v = s === 'gas' ? 260 * sp : 60 * sp; q.x += q.vx * v * dt; q.y += q.vy * v * dt; if (s === 'liquid') q.vy += 0.8 * dt * 3; if (s === 'liquid' && q.y < by + bh - 150) q.vy = Math.abs(q.vy) * 0.5 + 0.1;
        if (q.x < bx + 8) { q.x = bx + 8; q.vx = Math.abs(q.vx); } if (q.x > bx + bw - 8) { q.x = bx + bw - 8; q.vx = -Math.abs(q.vx); } if (q.y < by + 8) { q.y = by + 8; q.vy = Math.abs(q.vy); } if (q.y > by + bh - 8) { q.y = by + bh - 8; q.vy = -Math.abs(q.vy); }
        if (Math.random() < 0.05) { q.vx += (Math.random() - .5) * 0.6; q.vy += (Math.random() - .5) * 0.6; const n = Math.hypot(q.vx, q.vy) || 1; q.vx /= n; q.vy /= n; } } });
    st.ready = true; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const bx = W * 0.08, by = 30, bw = W * 0.5, bh = H - 60, s = this.state(st.p.T);
    CV.rrect(c, bx, by, bw, bh, 6, hexA(C.u6, .05), C.ink, 2); st.P.forEach(q => CV.circle(c, q.x, q.y, 8.5, C.u3, C.ink, 1));
    const tx = W * 0.72, t0 = 50, t1 = H - 50, Y = T => t1 - (T + 40) / 180 * (t1 - t0);
    CV.rrect(c, tx - 8, t0 - 10, 16, t1 - t0 + 20, 8, C.surface, C.ink, 1.5); CV.rrect(c, tx - 4, Y(st.p.T), 8, t1 - Y(st.p.T) + 6, 4, C.bad);
    [[-40, ''], [0, 'melts / freezes'], [100, 'boils'], [140, '']].forEach(([T, lab]) => { CV.line(c, tx + 10, Y(T), tx + 18, Y(T), C.ink, 1); CV.mono(c, T + '°', tx + 22, Y(T), C.muted, 10); if (lab) CV.text(c, lab, tx + 22, Y(T) + 14, C.ink, 10.5); });
    CV.text(c, s.toUpperCase(), bx + bw / 2, by - 12, C.ink, 14, 'center', 800);
  },
  read(st) { const s = this.state(st.p.T); return [s, { solid: 'regular, close together', liquid: 'close together, random', gas: 'far apart, random' }[s], { solid: 'vibrate about fixed positions', liquid: 'move around each other', gas: 'move quickly in all directions' }[s], { solid: '≈ 920 kg/m³ (ice)', liquid: '≈ 1000 kg/m³', gas: '≈ 0.6 kg/m³ (steam)' }[s]]; }
};

/* ---------- 3.1 Density lab (RP5) ---------- */
SIMS.densitylab = {
  title: 'Density lab (RP5)', h: 420, noPlay: true,
  controls: [{ id: 'obj', type: 'seg', label: 'Object', value: 'cube', options: [['cube', 'Metal block'], ['stone', 'Irregular stone'], ['oil', 'Cooking oil']] }, { type: 'button', act: 'new', label: 'New sample' }],
  readouts: ['Mass', 'Volume', 'Density = m ÷ V', 'Method for volume'],
  note: 'Regular block: V = length × width × height (use Vernier callipers or a micrometer). Irregular stone: displacement — the water pushed out of the eureka can equals the stone’s volume. Liquid: tare the measuring cylinder, pour in, read mass and volume.',
  init(st) { const r = () => 0.97 + Math.random() * 0.06; st.s = { a: +(3.0 * r()).toFixed(2), b: +(2.0 * r()).toFixed(2), c: +(1.5 * r()).toFixed(2), rho: pick([2.70, 7.87, 8.96]), vs: Math.round(18 + Math.random() * 20), rs: pick([2.5, 2.7, 3.0]), vo: pick([40, 50, 60, 80]), ro: 0.92 }; },
  action(st, a) { if (a === 'new') this.init(st); },
  vals(st) { const s = st.s, o = st.p.obj; if (o === 'cube') { const V = s.a * s.b * s.c; return { m: V * s.rho, V }; } if (o === 'stone') return { m: s.vs * s.rs, V: s.vs }; return { m: s.vo * s.ro, V: s.vo }; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const s = st.s, o = st.p.obj, { m, V } = this.vals(st);
    const bx = W * 0.08, by = H - 80; CV.rrect(c, bx, by, 200, 30, 6, C.surface, C.ink, 1.5); CV.rrect(c, bx + 30, by + 6, 140, 18, 3, '#0B1117'); CV.mono(c, m.toFixed(1) + ' g', bx + 100, by + 15, '#6CFFA8', 13, 'center'); CV.text(c, 'balance', bx + 100, by + 44, C.muted, 11, 'center');
    if (o === 'cube') { const x = bx + 60, y = by - 80; CV.rrect(c, x, y, 90, 70, 3, '#9AA4AE', C.ink, 1.5); CV.text(c, `${s.a} cm × ${s.b} cm × ${s.c} cm`, W * 0.66, H * 0.3, C.ink, 13, 'center', 700); CV.text(c, 'measured with Vernier callipers', W * 0.66, H * 0.3 + 20, C.muted, 11, 'center'); CV.text(c, `V = ${s.a} × ${s.b} × ${s.c} = ${V.toFixed(2)} cm³`, W * 0.66, H * 0.3 + 46, C.ink, 13, 'center'); }
    else if (o === 'stone') { c.fillStyle = '#8A7D6B'; c.beginPath(); c.ellipse(bx + 100, by - 30, 44, 26, 0.3, 0, 7); c.fill();
      const ex = W * 0.55, ey = 60; CV.line(c, ex, ey, ex, ey + 180, C.ink, 2); CV.line(c, ex, ey + 180, ex + 110, ey + 180, C.ink, 2); CV.line(c, ex + 110, ey + 180, ex + 110, ey, C.ink, 2); CV.line(c, ex + 110, ey + 30, ex + 150, ey + 50, C.ink, 2); c.fillStyle = hexA(C.u6, .3); c.fillRect(ex + 2, ey + 30, 106, 148); CV.text(c, 'eureka can', ex + 55, ey + 196, C.muted, 11, 'center');
      const mx = ex + 160, my = ey + 70; CV.line(c, mx, my, mx, my + 110, C.ink, 2); CV.line(c, mx, my + 110, mx + 40, my + 110, C.ink, 2); CV.line(c, mx + 40, my + 110, mx + 40, my, C.ink, 2); const lv = s.vs / 50 * 100; c.fillStyle = hexA(C.u6, .45); c.fillRect(mx + 2, my + 108 - lv, 36, lv); CV.mono(c, s.vs + ' cm³', mx + 48, my + 108 - lv, C.ink, 12); CV.text(c, 'water displaced', mx + 20, my + 126, C.muted, 11, 'center'); }
    else { const mx = W * 0.6, my = 50; CV.line(c, mx, my, mx, my + 200, C.ink, 2); CV.line(c, mx, my + 200, mx + 60, my + 200, C.ink, 2); CV.line(c, mx + 60, my + 200, mx + 60, my, C.ink, 2); const lv = s.vo / 100 * 196; c.fillStyle = hexA(C.u2, .55); c.fillRect(mx + 2, my + 198 - lv, 56, lv); for (let i = 0; i <= 10; i++) CV.line(c, mx + 60, my + 200 - i * 19.6, mx + 70, my + 200 - i * 19.6, C.ink, 1); CV.mono(c, s.vo + ' cm³ (read the bottom of the meniscus)', mx + 78, my + 198 - lv, C.ink, 11.5); CV.text(c, 'balance zeroed with the empty cylinder on it', bx, by - 20, C.muted, 11); }
  },
  read(st) { const { m, V } = this.vals(st); return [m.toFixed(1) + ' g', V.toFixed(2) + ' cm³', (m / V).toFixed(2) + ' g/cm³ = ' + Math.round(m / V * 1000) + ' kg/m³', { cube: 'measure dimensions', stone: 'displacement', oil: 'measuring cylinder' }[st.p.obj]]; }
};

/* ---------- 3.2 Heating curve ---------- */
SIMS.heating = {
  title: 'Heating ice to steam', h: 440, substeps: 4,
  controls: [{ id: 'P', label: 'Heater power', min: 200, max: 2000, step: 100, value: 1000, fmt: v => v + ' W' }, { id: 'm', label: 'Mass of ice', min: 0.1, max: 1, step: 0.05, value: 0.25, fmt: v => v.toFixed(2) + ' kg' }],
  readouts: ['Temperature', 'State', 'Energy supplied', 'What the energy is doing'],
  note: 'Sloping parts: the temperature rises (ΔE = mcΔθ). Flat parts: the substance changes state at constant temperature — the energy goes into breaking bonds (E = mL). The boiling plateau is about 7× longer than melting because L(vaporisation) = 2 260 000 J/kg vs L(fusion) = 334 000 J/kg. Time is sped up.',
  init(st) { st.E = 0; st.hist = [[0, -20]]; st.q = null; },
  change(st) { this.init(st); },
  T(E, m) { const c1 = 2100, c2 = 4200, c3 = 2000, Lf = 334000, Lv = 2260000; let e = E; const s1 = m * c1 * 20; if (e < s1) return [-20 + e / (m * c1), 'solid (ice)', 'raising temperature']; e -= s1; if (e < m * Lf) return [0, 'melting', 'changing state (breaking bonds)']; e -= m * Lf; const s3 = m * c2 * 100; if (e < s3) return [e / (m * c2), 'liquid (water)', 'raising temperature']; e -= s3; if (e < m * Lv) return [100, 'boiling', 'changing state (breaking bonds)']; e -= m * Lv; return [Math.min(160, 100 + e / (m * c3)), 'gas (steam)', 'raising temperature']; },
  step(st, dt) { const p = st.p, Emax = p.m * (2100 * 20 + 334000 + 4200 * 100 + 2260000 + 2000 * 40); if (st.E >= Emax) return; st.E += p.P * dt * 60; const [T] = this.T(st.E, p.m); if (!st.lastE || st.E - st.lastE > Emax / 300) { st.hist.push([st.E, T]); st.lastE = st.E; } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, Emax = p.m * (2100 * 20 + 334000 + 4200 * 100 + 2260000 + 2000 * 40), [T, s] = this.T(st.E, p.m);
    const b = { x: W * 0.36, y: 30, w: W * 0.6, h: H - 90 };
    CV.plot(c, C, b, { xr: [0, Emax], yr: [-30, 150], xl: 'energy supplied', yl: 'temperature / °C', series: [{ pts: st.hist.concat([[st.E, T]]), col: C.u1, w: 2.6 }] });
    const bx = 30, by = 60, bw = W * 0.26, bh = H - 140; CV.rrect(c, bx, by, bw, bh, 6, hexA(C.u6, .05), C.ink, 2);
    const mode = s.startsWith('solid') ? 'solid' : s === 'melting' ? 'melt' : s.startsWith('liquid') ? 'liquid' : s === 'boiling' ? 'boil' : 'gas';
    st.q ??= Array.from({ length: 30 }, (_, i) => ({ i, x: 0, y: 0, vx: Math.random() - .5, vy: Math.random() - .5, init: false }));
    const cols = 6, lat = i => [bx + 20 + (i % cols) * (bw - 40) / (cols - 1), by + bh - 20 - Math.floor(i / cols) * 18];
    const sp = 20 + Math.max(-20, T) * 1.4, dt = 1 / 60;
    st.q.forEach(q => { if (!q.init) { [q.x, q.y] = lat(q.i); q.init = true; }
      const free = mode === 'gas' || (mode === 'boil' && q.i % 2 === 0) ? 'gas' : mode === 'solid' || (mode === 'melt' && q.i % 2 === 0) ? 'solid' : 'liquid';
      if (free === 'solid') { const [lx, ly] = lat(q.i); q.x += (lx - q.x) * 0.15 + (Math.random() - .5) * 1.5; q.y += (ly - q.y) * 0.15 + (Math.random() - .5) * 1.5; }
      else { const v = free === 'gas' ? 160 + sp : 30 + sp * 0.4; q.x += q.vx * v * dt; q.y += q.vy * v * dt; if (free === 'liquid') { q.vy += 0.05; if (q.y < by + bh - 110) q.vy = Math.abs(q.vy); }
        if (q.x < bx + 8) { q.x = bx + 8; q.vx = Math.abs(q.vx); } if (q.x > bx + bw - 8) { q.x = bx + bw - 8; q.vx = -Math.abs(q.vx); } if (q.y < by + 8) { q.y = by + 8; q.vy = Math.abs(q.vy); } if (q.y > by + bh - 8) { q.y = by + bh - 8; q.vy = -Math.abs(q.vy); }
        if (Math.random() < 0.04) { q.vx += (Math.random() - .5) * .8; q.vy += (Math.random() - .5) * .8; const n = Math.hypot(q.vx, q.vy) || 1; q.vx /= n; q.vy /= n; } }
      CV.circle(c, q.x, q.y, 5.5, C.u3); });
    CV.text(c, s, bx + bw / 2, by - 14, C.ink, 13, 'center', 700); CV.mono(c, T.toFixed(1) + ' °C', bx + bw / 2, by + bh + 20, C.ink, 13, 'center');
  },
  read(st) { const [T, s, what] = this.T(st.E, st.p.m); return [T.toFixed(1) + ' °C', s, st.E >= 1e6 ? (st.E / 1e6).toFixed(2) + ' MJ' : Math.round(st.E / 1000) + ' kJ', what]; }
};

/* ---------- 3.3 Gas pressure (reworked from the A-level sim for GCSE: °C, pV = constant) ---------- */
SIMS.gas = {
  title: 'Gas pressure', h: 460,
  controls: [
    { id: 'T', label: 'Temperature', min: -100, max: 500, step: 10, value: 20, fmt: v => v + ' °C' },
    { id: 'V', label: 'Volume (move the piston)', min: 0.3, max: 1, step: 0.02, value: 0.8, fmt: v => (v * 10).toFixed(1) + ' litres' },
    { id: 'N', label: 'Number of molecules', min: 20, max: 200, step: 10, value: 100, fmt: v => v }
  ],
  readouts: ['Measured pressure (wall hits)', 'Pressure × volume', 'Average molecule speed', 'Collisions per second'],
  note: 'Heating the gas makes the molecules move faster, so they hit the walls more often and harder — the pressure rises (at constant volume). Physics only: increase the volume at constant temperature and the molecules hit the walls less often — pV stays constant.',
  init(st) { const N = 200; st.m = Array.from({ length: N }, () => { const gg = () => Math.sqrt(-2 * Math.log(1 - Math.random())) * Math.cos(2 * Math.PI * Math.random()), s = this.spd(st.p.T) / Math.SQRT2; return { x: Math.random() * st.p.V, y: Math.random(), vx: gg() * s, vy: gg() * s }; }); st.imp = 0; st.hits = 0; st.pm = 0; st.hr = 0; st.win = 0; st.lastT = st.p.T; },
  spd(T) { return 0.35 * Math.sqrt((T + 273) / 293); },
  step(st, dt) {
    const p = st.p, f = Math.sqrt((p.T + 273) / (st.lastT + 273)); if (f !== 1) { st.m.forEach(m => { m.vx *= f; m.vy *= f; }); st.lastT = p.T; }
    const Vx = p.V; st.m.slice(0, p.N).forEach(m => { m.x += m.vx * dt; m.y += m.vy * dt;
      if (m.x < 0) { m.x = -m.x; m.vx = -m.vx; st.imp += 2 * Math.abs(m.vx); st.hits++; } if (m.x > Vx) { m.x = 2 * Vx - m.x; m.vx = -Math.abs(m.vx); st.imp += 2 * Math.abs(m.vx); st.hits++; }
      if (m.y < 0) { m.y = -m.y; m.vy = -m.vy; st.imp += 2 * Math.abs(m.vy); st.hits++; } if (m.y > 1) { m.y = 2 - m.y; m.vy = -m.vy; st.imp += 2 * Math.abs(m.vy); st.hits++; } });
    st.win += dt; if (st.win > 1.2) { const per = 2 * (p.V + 1), m = st.imp / st.win / per; st.pm = st.pm ? st.pm * .5 + .5 * m : m; st.hr = st.hr ? st.hr * .5 + .5 * st.hits / st.win : st.hits / st.win; st.imp = 0; st.hits = 0; st.win = 0; }
  },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, bx = 30, by = 30, bh = H - 60, bw = Math.min(W * 0.6, bh * 1.3);
    CV.rrect(c, bx, by, bw * p.V, bh, 4, hexA(C.u3, .06), C.ink, 2); CV.rrect(c, bx + bw * p.V, by - 6, 10, bh + 12, 3, C.muted); CV.line(c, bx + bw * p.V + 10, by + bh / 2, bx + bw + 30, by + bh / 2, C.muted, 5);
    st.m.slice(0, p.N).forEach(m => { const s = Math.hypot(m.vx, m.vy) / this.spd(p.T); CV.circle(c, bx + m.x * bw, by + m.y * bh, 3.4, s > 1.2 ? C.u1 : s < .7 ? C.u6 : C.u2); });
    const gx = bx + bw + 60; if (W - gx > 120) { const pr = st.pm * 100, maxp = 900; CV.rrect(c, gx, by + 20, 44, bh - 40, 8, C.surface, C.ink, 1.5); const hh = clamp(pr / maxp, 0, 1) * (bh - 44); CV.rrect(c, gx + 4, by + bh - 22 - hh, 36, hh, 6, C.u1); CV.text(c, 'pressure', gx + 22, by + 8, C.muted, 11, 'center'); CV.text(c, 'blue = slow · red = fast', gx - 20, by + bh + 14, C.muted, 10.5); }
  },
  read(st) { const p = st.p, pr = st.pm * 100; return [pr.toFixed(0) + ' (sim units)', (pr * p.V * 10).toFixed(0) + ' (sim units)', (this.spd(p.T) * 1300).toFixed(0) + ' m/s (scaled)', Math.round(st.hr) + ' /s']; }
};
