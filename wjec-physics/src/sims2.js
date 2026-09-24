/* ==========================================================
   Unit 3, Unit 4 and option simulations
   ========================================================== */

/* ---------- 3.1 Circular motion ---------- */
SIMS.circular = {
  title: 'Circular motion', h: 440,
  controls: [
    { id: 'w', label: 'Angular velocity ω', min: 0.5, max: 6, step: 0.1, value: 2, fmt: v => v.toFixed(1) + ' rad s⁻¹' },
    { id: 'r', label: 'Radius', min: 0.3, max: 1.5, step: 0.05, value: 1, fmt: v => v.toFixed(2) + ' m' },
    { id: 'm', label: 'Mass', min: 0.1, max: 2, step: 0.1, value: 0.5, fmt: v => v.toFixed(1) + ' kg' },
    { type: 'button', act: 'cut', label: 'Cut the string' }
  ],
  readouts: ['Speed v = ωr', 'Centripetal acceleration', 'Tension (centripetal force)', 'Period T'],
  note: 'Velocity (blue) is always along the tangent; acceleration and the resultant force (red) always point to the centre. Cut the string and the ball flies off along the tangent.',
  init(st) { st.th = 0; st.free = null; st.trail = []; },
  action(st, a) { if (a === 'cut' && !st.free) { const p = st.p, v = p.w * p.r; st.free = { x: p.r * Math.cos(st.th), y: p.r * Math.sin(st.th), vx: -v * Math.sin(st.th), vy: v * Math.cos(st.th), t: 0 }; } },
  step(st, dt) { if (st.free) { const f = st.free; f.x += f.vx * dt; f.y += f.vy * dt; f.t += dt; if (f.t > 3) this.init(st); return; } st.th += st.p.w * dt; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, cx = W * 0.42, cy = H / 2, sc = Math.min(W * 0.4, H * 0.42) / 1.6;
    c.strokeStyle = hexA(C.muted, .5); c.setLineDash([4, 5]); c.beginPath(); c.arc(cx, cy, p.r * sc, 0, 7); c.stroke(); c.setLineDash([]);
    CV.circle(c, cx, cy, 5, C.ink);
    let x, y; if (st.free) { x = cx + st.free.x * sc; y = cy - st.free.y * sc; } else { x = cx + p.r * sc * Math.cos(st.th); y = cy - p.r * sc * Math.sin(st.th); CV.line(c, cx, cy, x, y, C.ink, 1.5); }
    const v = p.w * p.r, a = p.w * p.w * p.r;
    if (!st.free) { CV.arrow(c, x, y, x - Math.sin(st.th) * v * 22, y - Math.cos(st.th) * v * 22, C.u4, 2.6); CV.arrow(c, x, y, x - Math.cos(st.th) * Math.min(a, 40) * 5, y + Math.sin(st.th) * Math.min(a, 40) * 5, C.u1, 2.6); }
    else CV.arrow(c, x, y, x + st.free.vx * 22, y - st.free.vy * 22, C.u4, 2.6);
    CV.circle(c, x, y, 8 + p.m * 5, C.u3);
    CV.text(c, '→ velocity (tangent)', W - 20, 30, C.u4, 12, 'right', 600); CV.text(c, '→ acceleration & force (to centre)', W - 20, 50, C.u1, 12, 'right', 600);
  },
  read(st) { const p = st.p, v = p.w * p.r, a = p.w * p.w * p.r; return [v.toFixed(2) + ' m s⁻¹', a.toFixed(2) + ' m s⁻²', (p.m * a).toFixed(2) + ' N', (2 * Math.PI / p.w).toFixed(2) + ' s']; }
};

/* ---------- 3.2 SHM ---------- */
SIMS.shm = {
  title: 'Mass–spring oscillator', h: 460, substeps: 4,
  controls: [
    { id: 'm', label: 'Mass m', min: 0.1, max: 2, step: 0.05, value: 0.5, fmt: v => v.toFixed(2) + ' kg' },
    { id: 'k', label: 'Spring constant k', min: 5, max: 100, step: 1, value: 20, fmt: v => v + ' N m⁻¹' },
    { id: 'A', label: 'Initial amplitude', min: 0.02, max: 0.2, step: 0.01, value: 0.12, fmt: v => (v * 100).toFixed(0) + ' cm' },
    { id: 'b', label: 'Damping', min: 0, max: 4, step: 0.05, value: 0, fmt: v => v === 0 ? 'none' : v.toFixed(2) + ' kg s⁻¹' }
  ],
  readouts: ['Period T', 'Displacement x', 'Velocity v', 'Acceleration a'],
  note: 'Watch the graphs: a is always opposite to x (a = −ω²x). Velocity is maximum at x = 0. Add damping to see the amplitude decay; set it near 2√(mk) for critical damping.',
  init(st) { st.x = st.p.A; st.v = 0; st.hist = []; st.tt = 0; },
  change(st, id) { if (id !== 'b') this.init(st); },
  step(st, dt) { const p = st.p; const a = -p.k / p.m * st.x - p.b / p.m * st.v; st.v += a * dt; st.x += st.v * dt; st.tt += dt; st.acc = a; st.hist.push([st.tt, st.x, st.v, a]); if (st.hist.length > 1600) st.hist.shift(); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, sx = 70, top = 30, eq = H * 0.45, sc = 900;
    CV.line(c, sx - 40, top, sx + 40, top, C.ink, 4);
    const y = eq + st.x * sc, coils = 16; c.strokeStyle = C.ink; c.lineWidth = 1.8; c.beginPath(); c.moveTo(sx, top); for (let i = 0; i <= coils; i++) c.lineTo(sx + (i % 2 ? 12 : -12) * (i && i < coils ? 1 : 0), top + (y - 26 - top) * i / coils); c.lineTo(sx, y - 26); c.stroke();
    CV.rrect(c, sx - 24, y - 26, 48, 44, 6, C.u3); CV.mono(c, p.m.toFixed(2) + ' kg', sx, y - 4, '#fff', 10.5, 'center');
    CV.line(c, sx - 50, eq, sx + 60, eq, C.muted, 1, [4, 4]); CV.mono(c, 'x = 0', sx + 64, eq, C.muted, 10);
    const b = { x: 180, w: W - 210, h: (H - 110) / 3 };
    const T = 2 * Math.PI * Math.sqrt(p.m / p.k), win = Math.max(3 * T, 3), t1 = st.tt, t0 = t1 - win, H2 = st.hist.filter(h => h[0] >= t0), w = Math.sqrt(p.k / p.m), A = p.A;
    [['x', 1, A * 1.15, C.u3], ['v', 2, A * w * 1.15, C.u4], ['a', 3, A * w * w * 1.15, C.u1]].forEach(([l, i, mx, col], k) => {
      CV.plot(c, C, { x: b.x, y: 30 + k * (b.h + 26), w: b.w, h: b.h }, { xr: [t0, t1], yr: [-mx, mx], yl: l, series: [{ pts: H2.map(h => [h[0], h[i]]), col, w: 2.2 }] });
    });
  },
  read(st) { const p = st.p; return [(2 * Math.PI * Math.sqrt(p.m / p.k)).toFixed(3) + ' s', (st.x * 100).toFixed(1) + ' cm', st.v.toFixed(3) + ' m s⁻¹', (st.acc || 0).toFixed(2) + ' m s⁻²']; }
};

SIMS.resonance = {
  title: 'Forced oscillations & resonance', h: 440, substeps: 10,
  controls: [
    { id: 'fd', label: 'Driving frequency', min: 0.2, max: 2.5, step: 0.02, value: 0.8, fmt: v => v.toFixed(2) + ' Hz' },
    { id: 'b', label: 'Damping', min: 0.05, max: 3, step: 0.05, value: 0.3, fmt: v => v.toFixed(2) },
    { type: 'button', act: 'sweep', label: 'Auto-sweep' }
  ],
  readouts: ['Natural frequency f₀', 'Steady amplitude', 'Driver–oscillator phase', 'Regime'],
  note: 'Natural frequency is 1.00 Hz. Slide the driver through it and watch the amplitude peak. More damping gives a lower, broader peak.',
  init(st) { st.x = 0; st.v = 0; st.tt = 0; st.sweep = false; },
  action(st, a) { if (a === 'sweep') { st.sweep = !st.sweep; } },
  amp(f, b) { const w0 = 2 * Math.PI, w = 2 * Math.PI * f; return 1 / Math.sqrt((w0 * w0 - w * w) ** 2 + (b * w) ** 2); },
  step(st, dt) { const p = st.p, w0 = 2 * Math.PI, w = 2 * Math.PI * p.fd; const F = Math.cos(w * st.tt); const a = -w0 * w0 * st.x - p.b * st.v + F * 4; st.v += a * dt; st.x += st.v * dt; st.tt += dt;
    if (st.sweep) { p.fd += 0.05 * dt * 2; if (p.fd > 2.5) p.fd = 0.2; const inp = document.getElementById('sc-resonance-fd'); if (inp) { inp.value = p.fd; inp.previousElementSibling.querySelector('output').textContent = p.fd.toFixed(2) + ' Hz'; inp.style.setProperty('--p', ((p.fd - .2) / 2.3 * 100) + '%'); } } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, w = 2 * Math.PI * p.fd, cy = H * 0.3, x0 = 60;
    const dx = Math.cos(w * st.tt) * 18; CV.rrect(c, x0 - 20 + dx, cy - 60, 40, 14, 4, C.u5); CV.text(c, 'driver', x0 + dx, cy - 76, C.u5, 11, 'center');
    const ox = st.x * 4 * 70; CV.line(c, x0 + dx, cy - 46, x0 + 120 + ox, cy, C.ink, 1.5); CV.circle(c, x0 + 120 + ox, cy, 16, C.u3);
    CV.line(c, x0 + 120, cy + 24, x0 + 120, cy + 34, C.muted, 1);
    const b = { x: W * 0.42, y: 30, w: W * 0.54, h: H - 90 }, pk = this.amp(1, p.b), top = this.amp(1, 0.05) * 0.2;
    const g2 = CV.plot(c, C, b, { xr: [0.2, 2.5], yr: [0, Math.max(pk * 1.15, top)], xl: 'driving frequency / Hz', yl: 'amplitude', series: [{ f: f => this.amp(f, 3), col: hexA(C.muted, .4), dash: [3, 4], w: 1.2 }, { f: f => this.amp(f, p.b), col: C.u3, w: 2.6 }], dots: [[p.fd, this.amp(p.fd, p.b), C.accent, 6]] });
    CV.line(c, g2.X(1), b.y, g2.X(1), b.y + b.h, C.muted, 1, [3, 4]); CV.mono(c, 'f₀', g2.X(1), b.y + b.h + 12, C.muted, 10, 'center');
  },
  read(st) { const p = st.p, w0 = 2 * Math.PI, w = 2 * Math.PI * p.fd, ph = Math.atan2(p.b * w, w0 * w0 - w * w) / deg; return ['1.00 Hz', (this.amp(p.fd, p.b) * 4 * 100).toFixed(1) + ' (rel.)', ph.toFixed(0) + '° behind', Math.abs(p.fd - 1) < 0.06 ? 'RESONANCE' : p.fd < 1 ? 'below f₀ (in phase)' : 'above f₀ (antiphase)']; }
};

/* ---------- 3.3 Gas ---------- */
SIMS.gas = {
  title: 'Kinetic model of a gas', h: 460,
  controls: [
    { id: 'T', label: 'Temperature', min: 50, max: 800, step: 10, value: 300, fmt: v => v + ' K' },
    { id: 'V', label: 'Volume (piston)', min: 0.3, max: 1, step: 0.02, value: 0.8, fmt: v => (v * 10).toFixed(1) + ' L' },
    { id: 'N', label: 'Number of molecules', min: 20, max: 200, step: 10, value: 100, fmt: v => v }
  ],
  readouts: ['Measured pressure (wall hits)', 'Predicted p ∝ NT/V', 'Mean KE ∝ T', 'rms speed ∝ √T'],
  note: 'Pressure comes from molecules changing momentum at the walls. Double T → molecules move √2 faster, hit harder and more often → pressure doubles.',
  init(st) { const N = 200; st.m = Array.from({ length: N }, () => { const a = Math.random() * 7, s = this.spd(st.p.T) * (0.5 + Math.random()); return { x: Math.random(), y: Math.random(), vx: Math.cos(a) * s, vy: Math.sin(a) * s }; }); st.imp = 0; st.pm = 0; st.win = 0; st.lastT = st.p.T; },
  spd(T) { return 0.35 * Math.sqrt(T / 300); },
  step(st, dt) {
    const p = st.p, f = Math.sqrt(p.T / st.lastT); if (f !== 1) { st.m.forEach(m => { m.vx *= f; m.vy *= f; }); st.lastT = p.T; }
    const Vx = p.V; st.m.slice(0, p.N).forEach(m => { m.x += m.vx * dt; m.y += m.vy * dt;
      if (m.x < 0) { m.x = -m.x; m.vx = -m.vx; st.imp += 2 * Math.abs(m.vx); } if (m.x > Vx) { m.x = 2 * Vx - m.x; m.vx = -Math.abs(m.vx); st.imp += 2 * Math.abs(m.vx); }
      if (m.y < 0) { m.y = -m.y; m.vy = -m.vy; st.imp += 2 * Math.abs(m.vy); } if (m.y > 1) { m.y = 2 - m.y; m.vy = -m.vy; st.imp += 2 * Math.abs(m.vy); } });
    st.win += dt; if (st.win > 1.5) { const per = 2 * (p.V + 1); st.pm = st.pm * .5 + .5 * st.imp / st.win / per; st.imp = 0; st.win = 0; }
  },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, bx = 30, by = 30, bh = H - 60, bw = Math.min(W * 0.55, bh * 1.2);
    CV.rrect(c, bx, by, bw * p.V, bh, 4, hexA(C.u3, .06), C.ink, 2);
    CV.rrect(c, bx + bw * p.V, by - 6, 10, bh + 12, 3, C.muted); CV.line(c, bx + bw * p.V + 10, by + bh / 2, bx + bw + 30, by + bh / 2, C.muted, 5);
    const hot = clamp((p.T - 50) / 750, 0, 1);
    st.m.slice(0, p.N).forEach(m => { const s = Math.hypot(m.vx, m.vy) / this.spd(p.T); CV.circle(c, bx + m.x * bw, by + m.y * bh, 3.4, s > 1.2 ? C.u1 : s < .7 ? C.u4 : C.u2); });
    // speed histogram
    const hx = bx + bw + 60; if (W - hx > 140) {
      const bins = new Array(12).fill(0), mx = this.spd(800) * 2.2; st.m.slice(0, p.N).forEach(m => { const i = Math.min(11, Math.floor(Math.hypot(m.vx, m.vy) / mx * 12)); bins[i]++; });
      CV.plot(c, C, { x: hx, y: 40, w: W - hx - 30, h: H * 0.36 }, { xr: [0, 12], yr: [0, Math.max(...bins) * 1.2 + 1], xl: 'speed →', yl: 'number of molecules', series: [{ pts: bins.flatMap((v, i) => [[i, v], [i + 1, v]]), col: C.u2, w: 2 }] });
      CV.text(c, 'blue = slow · red = fast', hx, H * 0.36 + 80, C.muted, 11);
    }
  },
  read(st) { const p = st.p, pred = p.N * 1.0833 * this.spd(p.T) ** 2 / (2 * p.V); return [(st.pm * 100).toFixed(2) + ' (sim units)', (pred * 100).toFixed(2) + ' (sim units)', (p.T / 300).toFixed(2) + ' × at 300 K', Math.sqrt(p.T / 300).toFixed(2) + ' × at 300 K']; }
};

/* ---------- 3.4 p–V processes ---------- */
SIMS.pv = {
  title: 'p–V diagram & first law', h: 440, noPlay: true,
  controls: [
    { id: 'proc', type: 'seg', label: 'Process (1 mol monatomic gas from 300 K, 100 kPa)', value: 'p', options: [['p', 'Constant p'], ['v', 'Constant V'], ['t', 'Constant T'], ['q', 'No heat (Q = 0)']] },
    { id: 'f', label: 'Final volume ÷ initial (or pressure ratio for constant V)', min: 0.4, max: 2.5, step: 0.05, value: 1.8, fmt: v => '× ' + v.toFixed(2) }
  ],
  readouts: ['Work done BY gas W', 'Heat supplied Q', 'ΔU = Q − W', 'Final temperature'],
  note: 'Shaded area = work done by the gas. For an ideal monatomic gas, U = (3/2)nRT, so ΔU depends only on the temperature change.',
  calc(p) {
    const n = 1, R = 8.31, T0 = 300, p0 = 1e5, V0 = n * R * T0 / p0, f = p.f; let pts = [], W = 0, T1 = T0;
    if (p.proc === 'p') { const V1 = V0 * f; W = p0 * (V1 - V0); T1 = T0 * f; pts = [[V0, p0], [V1, p0]]; }
    else if (p.proc === 'v') { T1 = T0 * f; W = 0; pts = [[V0, p0], [V0, p0 * f]]; }
    else if (p.proc === 't') { const V1 = V0 * f; W = n * R * T0 * Math.log(f); T1 = T0; for (let i = 0; i <= 60; i++) { const V = V0 + (V1 - V0) * i / 60; pts.push([V, n * R * T0 / V]); } }
    else { const V1 = V0 * f, g2 = 5 / 3; T1 = T0 * Math.pow(V0 / V1, g2 - 1); W = -1.5 * n * R * (T1 - T0); for (let i = 0; i <= 60; i++) { const V = V0 + (V1 - V0) * i / 60; pts.push([V, p0 * Math.pow(V0 / V, g2)]); } }
    const dU = 1.5 * n * R * (T1 - T0); return { pts, W, Q: dU + W, dU, T1, V0, p0 };
  },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const k = this.calc(st.p), b = { x: 60, y: 30, w: W * 0.58, h: H - 90 };
    const V0 = k.V0 * 1000, xs = k.pts.map(q => q[0] * 1000), ys = k.pts.map(q => q[1] / 1000);
    const g2 = CV.plot(c, C, b, { xr: [0, 70], yr: [0, 260], xl: 'V / litres', yl: 'p / kPa',
      fills: st.p.proc !== 'v' ? [{ col: hexA(C.u3, .2), pts: xs.map((x, i) => [x, ys[i]]) }] : [],
      series: [{ f: V => 8.31 * 300 / (V / 1000) / 1000, col: hexA(C.muted, .35), dash: [4, 4], w: 1 }, { pts: xs.map((x, i) => [x, ys[i]]), col: C.u3, w: 3 }],
      dots: [[xs[0], ys[0], C.ink, 5], [xs[xs.length - 1], ys[ys.length - 1], C.accent, 6]] });
    for (let v = 0; v <= 70; v += 10) CV.mono(c, v, g2.X(v), b.y + b.h + 10, C.muted, 10, 'center');
    // energy bars
    const bx = b.x + b.w + 50, bw = Math.min(40, (W - bx - 20) / 3 - 10), base = H * 0.55, scl = (H * 0.36) / Math.max(1, Math.abs(k.Q), Math.abs(k.W), Math.abs(k.dU));
    [[k.Q, 'Q', C.u2], [k.W, 'W', C.u3], [k.dU, 'ΔU', C.u5]].forEach(([v, l, col], i) => { const x = bx + i * (bw + 12), hh = v * scl; CV.rrect(c, x, hh > 0 ? base - hh : base, bw, Math.abs(hh), 4, col); CV.text(c, l, x + bw / 2, base + (hh > 0 ? 14 : -14), C.ink, 12, 'center', 600); CV.mono(c, (v / 1000).toFixed(2) + ' kJ', x + bw / 2, hh > 0 ? base - hh - 10 : base - hh + 12, C.muted, 10, 'center'); });
    CV.line(c, bx - 6, base, bx + 3 * (bw + 12), base, C.ink, 1);
  },
  read(st) { const k = this.calc(st.p); return [(k.W / 1000).toFixed(2) + ' kJ', (k.Q / 1000).toFixed(2) + ' kJ', (k.dU / 1000).toFixed(2) + ' kJ', k.T1.toFixed(0) + ' K']; }
};

/* ---------- 3.5 Decay ---------- */
SIMS.decay = {
  title: 'Radioactive decay', h: 460,
  controls: [
    { id: 'hl', label: 'Half-life', min: 1, max: 10, step: 0.5, value: 3, fmt: v => v.toFixed(1) + ' s' },
    { id: 'N0', type: 'seg', label: 'Number of nuclei', value: 400, options: [[100, '100'], [400, '400'], [1600, '1600']] },
    { id: 'dice', type: 'seg', label: 'Mode', value: 0, options: [[0, 'Continuous'], [1, 'Dice (1 in 6 per throw)']] }
  ],
  readouts: ['Undecayed N', 'Time', 'Half-lives elapsed', 'Theory N₀e^(−λt)'],
  note: 'Each nucleus has the same chance of decaying per second (λ). You can’t predict which one goes next — but the curve is always exponential. Try 100 nuclei vs 1600 to see randomness.',
  init(st) { st.n = new Uint8Array(st.p.N0); st.hist = [[0, st.p.N0]]; st.tt = 0; st.acc = 0; st.throws = 0; },
  change(st, id) { if (id !== 'hl') this.init(st); },
  step(st, dt) { const p = st.p, lam = Math.LN2 / p.hl;
    if (p.dice) { st.acc += dt; if (st.acc >= 0.6) { st.acc = 0; st.throws++; for (let i = 0; i < st.n.length; i++) if (!st.n[i] && Math.random() < 1 / 6) st.n[i] = 1; const N = st.n.length - st.n.reduce((a, b) => a + b, 0); st.hist.push([st.throws, N]); } return; }
    st.tt += dt; const pr = 1 - Math.exp(-lam * dt); for (let i = 0; i < st.n.length; i++) if (!st.n[i] && Math.random() < pr) st.n[i] = 1;
    const N = st.n.length - st.n.reduce((a, b) => a + b, 0); if (st.tt - st.hist[st.hist.length - 1][0] > 0.1) st.hist.push([st.tt, N]); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, n = st.n.length, cols = Math.ceil(Math.sqrt(n)), gs = Math.min((H - 60) / cols, (W * 0.42) / cols);
    for (let i = 0; i < n; i++) { const x = 30 + (i % cols) * gs + gs / 2, y = 30 + Math.floor(i / cols) * gs + gs / 2; CV.circle(c, x, y, gs * 0.36, st.n[i] ? hexA(C.muted, .25) : C.u3); }
    const b = { x: 30 + cols * gs + 50, y: 30, w: W - (30 + cols * gs + 80), h: H - 90 };
    if (b.w < 120) return;
    const xmax = p.dice ? 30 : p.hl * 6, lam = p.dice ? -Math.log(5 / 6) : Math.LN2 / p.hl;
    const g2 = CV.plot(c, C, b, { xr: [0, xmax], yr: [0, n * 1.05], xl: p.dice ? 'throws' : 't / s', yl: 'N undecayed', series: [{ f: t => n * Math.exp(-lam * t), col: hexA(C.ink, .35), dash: [5, 4], w: 1.4 }, { pts: st.hist, col: C.u3, w: 2.4 }] });
    if (!p.dice) for (let k = 1; k <= 5; k++) { const x = g2.X(k * p.hl); CV.line(c, x, b.y + b.h, x, b.y + b.h - 6, C.ink, 1); CV.mono(c, k + 'T½', x, b.y + b.h + 10, C.muted, 9.5, 'center'); }
  },
  read(st) { const p = st.p, N = st.n.length - st.n.reduce((a, b) => a + b, 0), t = p.dice ? st.throws : st.tt, lam = p.dice ? -Math.log(5 / 6) : Math.LN2 / p.hl; return [N, p.dice ? st.throws + ' throws' : t.toFixed(1) + ' s', (t * lam / Math.LN2).toFixed(2), (st.n.length * Math.exp(-lam * t)).toFixed(0)]; }
};

/* ---------- 3.6 Binding energy explorer ---------- */
SIMS.binding = {
  title: 'Binding energy per nucleon', h: 440, noPlay: true,
  controls: [{ id: 'rx', type: 'seg', label: 'Reaction', value: 'none', options: [['none', 'Explore'], ['fis', 'U-235 fission'], ['fus', 'D–T fusion']] }],
  readouts: ['Nucleon number A', 'BE per nucleon', 'Total binding energy', 'Energy released'],
  note: 'Hover or drag across the curve. Any reaction whose products sit higher on the curve (closer to ⁵⁶Fe) releases energy.',
  BA(A) { if (A < 12) { const t = { 1: 0, 2: 1.11, 3: 2.83, 4: 7.07, 5: 5.4, 6: 5.33, 7: 5.61, 8: 7.06, 9: 6.46, 10: 6.48, 11: 6.93 }; return t[Math.round(A)] ?? 0; } const Z = A / (2 + 0.0154 * A ** (2 / 3)); return (15.8 * A - 18.3 * A ** (2 / 3) - 0.714 * Z * (Z - 1) / A ** (1 / 3) - 23.2 * (A - 2 * Z) ** 2 / A) / A; },
  init(st) { st.A = 56; },
  pointer(type, x, y, st) { if (type === 'leave') return; const b = st.box; if (!b) return; st.A = clamp(Math.round((x - b.x) / b.w * 250), 1, 250); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const b = { x: 60, y: 30, w: W - 90, h: H - 90 }; st.box = b;
    const g2 = CV.plot(c, C, b, { xr: [0, 250], yr: [0, 10], xl: 'nucleon number A', yl: 'BE per nucleon / MeV', series: [{ f: A => A < 1 ? NaN : this.BA(A), col: C.u3, w: 2.6 }] });
    for (let A = 0; A <= 250; A += 50) CV.mono(c, A, g2.X(A), b.y + b.h + 10, C.muted, 10, 'center');
    [[56, '⁵⁶Fe'], [4, '⁴He'], [235, '²³⁵U'], [2, '²H'], [12, '¹²C']].forEach(([A, l]) => { CV.circle(c, g2.X(A), g2.Y(this.BA(A)), 4, C.ink); CV.mono(c, l, g2.X(A) + 6, g2.Y(this.BA(A)) - 10, C.ink, 11); });
    if (st.p.rx === 'fis') { CV.arrow(c, g2.X(235), g2.Y(this.BA(235)), g2.X(141), g2.Y(this.BA(141)), C.u4, 2.4); CV.arrow(c, g2.X(235), g2.Y(this.BA(235)), g2.X(92), g2.Y(this.BA(92)), C.u4, 2.4); }
    if (st.p.rx === 'fus') { CV.arrow(c, g2.X(2), g2.Y(this.BA(2)), g2.X(4), g2.Y(this.BA(4)), C.u1, 2.4); CV.arrow(c, g2.X(3), g2.Y(this.BA(3)), g2.X(4), g2.Y(this.BA(4)), C.u1, 2.4); }
    const A = st.A; CV.line(c, g2.X(A), b.y, g2.X(A), b.y + b.h, C.accent, 1, [3, 3]); CV.circle(c, g2.X(A), g2.Y(this.BA(A)), 6, C.accent);
  },
  read(st) { const A = st.A, B = this.BA(A); let rel = '—'; if (st.p.rx === 'fis') rel = '≈ ' + (141 * this.BA(141) + 92 * this.BA(92) - 235 * this.BA(235)).toFixed(0) + ' MeV'; if (st.p.rx === 'fus') rel = '17.6 MeV'; return [A, B.toFixed(2) + ' MeV', (A * B).toFixed(0) + ' MeV', rel]; }
};

/* ---------- 4.1 Capacitor ---------- */
SIMS.capacitor = {
  title: 'Capacitor charge & discharge', h: 460, hNarrow: 640,
  controls: [
    { id: 'mode', type: 'seg', label: 'Switch', value: 'c', options: [['c', 'Charge'], ['d', 'Discharge']] },
    { id: 'R', label: 'Resistance R', min: 1, max: 100, step: 1, value: 20, fmt: v => v + ' kΩ' },
    { id: 'C', label: 'Capacitance C', min: 50, max: 1000, step: 10, value: 200, fmt: v => v + ' μF' },
    { id: 'V0', label: 'Supply pd', min: 1, max: 12, step: 0.5, value: 9, fmt: v => v.toFixed(1) + ' V' }
  ],
  readouts: ['Time constant RC', 'pd across C', 'Charge Q', 'Current I'],
  note: 'After one time constant the capacitor reaches 63% (charging) or falls to 37% (discharging). Energy stored = ½CV².',
  init(st) { st.q = 0; st.tt = 0; st.hist = []; st.mode0 = st.p.mode; },
  change(st, id) { if (id === 'mode') { st.tt = 0; st.hist = []; st.q0 = st.q; } },
  step(st, dt) { const p = st.p, RC = p.R * 1e3 * p.C * 1e-6, Cf = p.C * 1e-6, Q0 = Cf * p.V0; const sp = Math.max(1, RC / 3); const h = dt * sp;
    const target = p.mode === 'c' ? Q0 : 0; st.q += (target - st.q) * (1 - Math.exp(-h / RC)); st.tt += h; st.I = (target - st.q) / RC * (p.mode === 'c' ? 1 : -1) * (p.mode === 'c' ? 1 : -1);
    st.hist.push([st.tt, st.q / Cf, Math.abs(target - st.q) / Cf / (p.R * 1e3)]); if (st.hist.length > 2000) st.hist.shift(); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, Cf = p.C * 1e-6, V = st.q / Cf, RC = p.R * 1e3 * Cf;
    const x0 = 30, y0 = 40, w = Math.min(220, W * 0.32), h = 150;
    c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(x0, y0); c.lineTo(x0 + w, y0); c.lineTo(x0 + w, y0 + h); c.lineTo(x0, y0 + h); c.lineTo(x0, y0); c.stroke();
    CV.rrect(c, x0 + w / 2 - 24, y0 - 8, 48, 16, 3, C.bg, C.ink, 2); CV.mono(c, 'R', x0 + w / 2, y0 - 20, C.ink, 12, 'center');
    c.fillStyle = C.bg; c.fillRect(x0 + w - 10, y0 + h / 2 - 16, 20, 32); CV.line(c, x0 + w - 16, y0 + h / 2 - 5, x0 + w + 16, y0 + h / 2 - 5, C.ink, 3); CV.line(c, x0 + w - 16, y0 + h / 2 + 5, x0 + w + 16, y0 + h / 2 + 5, C.ink, 3);
    const fill = clamp(V / 12, 0, 1); CV.rrect(c, x0 + w + 22, y0 + h / 2 - 5 - 30 * fill, 6, 30 * fill, 2, C.u4);
    if (p.mode === 'c') { c.fillStyle = C.bg; c.fillRect(x0 - 10, y0 + h / 2 - 14, 20, 28); CV.line(c, x0 - 14, y0 + h / 2 - 6, x0 + 14, y0 + h / 2 - 6, C.ink, 3); CV.line(c, x0 - 8, y0 + h / 2 + 6, x0 + 8, y0 + h / 2 + 6, C.ink, 3); CV.mono(c, p.V0 + ' V', x0 - 18, y0 + h / 2, C.ink, 11, 'right'); }
    else CV.mono(c, '(supply removed)', x0 + 8, y0 + h / 2, C.muted, 10.5);
    CV.mono(c, 'V = ' + V.toFixed(2) + ' V', x0 + w / 2, y0 + h + 22, C.ink, 13, 'center');
    const narrow = W < 560, top = narrow ? y0 + h + 50 : 30;
    const b = narrow ? { x: 40, w: W - 70, h: (H - top - 70) / 2 } : { x: x0 + w + 80, w: W - (x0 + w + 110), h: (H - 110) / 2 };
    const tmax = 5 * RC;
    const g2 = CV.plot(c, C, { x: b.x, y: top, w: b.w, h: b.h }, { xr: [0, tmax], yr: [0, 12.5], yl: 'V across C / V', series: [{ pts: st.hist.filter(h => h[0] <= tmax), col: C.u4, w: 2.4 }] });
    CV.line(c, g2.X(RC), top, g2.X(RC), top + b.h, C.muted, 1, [3, 4]); CV.mono(c, 'RC', g2.X(RC), top + b.h + 10, C.muted, 10, 'center');
    const Imax = p.V0 / (p.R * 1e3); CV.plot(c, C, { x: b.x, y: top + b.h + 40, w: b.w, h: b.h }, { xr: [0, tmax], yr: [0, Imax * 1.1 * 1000], xl: 't', yl: 'I / mA', series: [{ pts: st.hist.filter(h => h[0] <= tmax).map(h => [h[0], h[2] * 1000]), col: C.u1, w: 2.4 }] });
  },
  read(st) { const p = st.p, Cf = p.C * 1e-6, RC = p.R * 1e3 * Cf, V = st.q / Cf, tgt = p.mode === 'c' ? p.V0 : 0; return [RC.toFixed(2) + ' s', V.toFixed(2) + ' V', sf(st.q, 3) + ' C', (Math.abs(tgt - V) / (p.R) ).toFixed(3) + ' mA']; }
};

/* ---------- 4.2 Field lines ---------- */
SIMS.field = {
  title: 'Field-line explorer', h: 480, noPlay: true,
  controls: [
    { id: 'kind', type: 'seg', label: 'Field', value: 'E', options: [['E', 'Electric'], ['G', 'Gravitational']] },
    { id: 'eq', type: 'seg', label: 'Equipotentials', value: 1, options: [[1, 'Show'], [0, 'Hide']] },
    { type: 'button', act: 'addp', label: '+ charge / mass' }, { type: 'button', act: 'addn', label: '− charge' }, { type: 'button', act: 'clear', label: 'Reset' }
  ],
  readouts: ['Field strength at cursor (rel.)', 'Potential at cursor (rel.)', 'Sources', 'Tip'],
  note: 'Drag the sources around. Field lines leave + and enter −; equipotentials are always perpendicular to field lines. Gravitational fields only ever attract.',
  init(st) { st.q = [{ x: .35, y: .5, q: 1 }, { x: .65, y: .5, q: -1 }]; st.cur = null; st.drag = null; },
  action(st, a) { if (a === 'clear') this.init(st); else if (st.q.length < 6) st.q.push({ x: .3 + Math.random() * .4, y: .25 + Math.random() * .5, q: a === 'addp' || st.p.kind === 'G' ? 1 : -1 }); },
  change(st, id) { if (id === 'kind' && st.p.kind === 'G') st.q.forEach(q => q.q = 1); },
  pointer(type, x, y, st) { const X = x / st.W, Y = y / st.H; if (type === 'down') { st.drag = st.q.find(q => Math.hypot((q.x - X) * st.W, (q.y - Y) * st.H) < 20) || null; } if (type === 'drag' && st.drag) { st.drag.x = clamp(X, .03, .97); st.drag.y = clamp(Y, .03, .97); } if (type === 'up') st.drag = null; st.cur = type === 'leave' ? null : [x, y]; },
  E(st, x, y) { let ex = 0, ey = 0, V = 0; const s = st.p.kind === 'G' ? -1 : 1; st.q.forEach(q => { const dx = x - q.x * st.W, dy = y - q.y * st.H, r2 = dx * dx + dy * dy + 30, r = Math.sqrt(r2); ex += s * q.q * dx / (r2 * r); ey += s * q.q * dy / (r2 * r); V += (st.p.kind === 'G' ? -1 : q.q) / r; }); return [ex, ey, V]; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C);
    if (st.p.eq) { const step = 8; for (let y = 0; y < H; y += step) for (let x = 0; x < W; x += step) { const V = this.E(st, x, y)[2] * 60; const band = Math.floor(V * 4); const frac = V * 4 - band; if (Math.abs(frac) < 0.12) { c.fillStyle = hexA(st.p.kind === 'G' ? C.u4 : (V > 0 ? C.u1 : C.u4), .45); c.fillRect(x, y, 2.2, 2.2); } } }
    const starts = []; st.q.forEach(q => { if (st.p.kind === 'G' || q.q > 0) for (let k = 0; k < 16; k++) { const a = k / 16 * Math.PI * 2; starts.push([q.x * W + 14 * Math.cos(a), q.y * H + 14 * Math.sin(a), st.p.kind === 'G' ? -1 : 1]); } });
    if (!st.q.some(q => q.q > 0) && st.p.kind === 'E') st.q.forEach(q => { for (let k = 0; k < 16; k++) { const a = k / 16 * Math.PI * 2; starts.push([q.x * W + 14 * Math.cos(a), q.y * H + 14 * Math.sin(a), -1]); } });
    c.strokeStyle = hexA(C.ink, .55); c.lineWidth = 1.3;
    starts.forEach(([x, y, dir]) => { c.beginPath(); c.moveTo(x, y); let px = x, py = y; for (let i = 0; i < 400; i++) { const [ex, ey] = this.E(st, px, py); const m = Math.hypot(ex, ey); if (m === 0) break; px += dir * ex / m * 4; py += dir * ey / m * 4; c.lineTo(px, py); if (px < -10 || py < -10 || px > W + 10 || py > H + 10) break; if (st.q.some(q => Math.hypot(q.x * W - px, q.y * H - py) < 10)) break; if (i === 60) { const [ex2, ey2] = this.E(st, px, py); const a = Math.atan2(dir * ey2, dir * ex2); c.stroke(); c.fillStyle = hexA(C.ink, .6); c.beginPath(); c.moveTo(px + 6 * Math.cos(a), py + 6 * Math.sin(a)); c.lineTo(px + 6 * Math.cos(a + 2.5), py + 6 * Math.sin(a + 2.5)); c.lineTo(px + 6 * Math.cos(a - 2.5), py + 6 * Math.sin(a - 2.5)); c.fill(); c.beginPath(); c.moveTo(px, py); } } c.stroke(); });
    st.q.forEach(q => { CV.circle(c, q.x * W, q.y * H, 13, st.p.kind === 'G' ? C.u3 : q.q > 0 ? C.u1 : C.u4); CV.text(c, st.p.kind === 'G' ? 'M' : q.q > 0 ? '+' : '−', q.x * W, q.y * H + 1, '#fff', 15, 'center', 700); });
    if (st.cur) { const [ex, ey] = this.E(st, ...st.cur), m = Math.hypot(ex, ey); if (m > 0) CV.arrow(c, st.cur[0], st.cur[1], st.cur[0] + ex / m * 30, st.cur[1] + ey / m * 30, C.accent, 2.4); }
  },
  read(st) { if (!st.cur) return ['—', '—', st.q.length, 'move over the field']; const [ex, ey, V] = this.E(st, ...st.cur); return [(Math.hypot(ex, ey) * 1e4).toFixed(2), (V * 100).toFixed(2), st.q.length, st.p.kind === 'G' ? 'V is always negative' : 'E points from + to −']; }
};

/* ---------- 4.3 Orbits ---------- */
SIMS.orbit = {
  title: 'Kepler’s laws', h: 480, substeps: 40,
  controls: [
    { id: 'v', label: 'Launch speed ÷ circular speed', min: 0.6, max: 1.35, step: 0.01, value: 1.2, fmt: v => v.toFixed(2) },
    { id: 'M', label: 'Star mass', min: 0.5, max: 2, step: 0.1, value: 1, fmt: v => v.toFixed(1) + ' M⊙' },
    { id: 'sec', type: 'seg', label: 'Show equal-time sectors', value: 1, options: [[1, 'Yes'], [0, 'No']] }
  ],
  readouts: ['Distance r', 'Speed', 'Period (measured)', 'T² / a³ (Kepler 3)'],
  note: 'Kepler 2: each shaded sector takes the same time and has the same area — so the planet moves fastest nearest the star. Kepler 3: T²/a³ stays constant for a given star mass.',
  init(st) { const p = st.p, GM = 4 * Math.PI ** 2 * p.M; st.x = 1; st.y = 0; st.vx = 0; st.vy = p.v * Math.sqrt(GM); st.tt = 0; st.trail = []; st.sectors = []; st.secStart = { t: 0, pts: [[1, 0]] }; st.lastCross = null; st.T = null; st.lastCross = 0; st.minr = 1; st.maxr = 1; st.prevY = 0; },
  change(st) { this.init(st); },
  step(st, dt) { const p = st.p, GM = 4 * Math.PI ** 2 * p.M, h = dt * 0.25; const r = Math.hypot(st.x, st.y), a = -GM / (r * r * r);
    st.vx += a * st.x * h / 2; st.vy += a * st.y * h / 2; st.x += st.vx * h; st.y += st.vy * h; const r2 = Math.hypot(st.x, st.y), a2 = -GM / (r2 * r2 * r2); st.vx += a2 * st.x * h / 2; st.vy += a2 * st.y * h / 2; st.tt += h;
    st.minr = Math.min(st.minr, r2); st.maxr = Math.max(st.maxr, r2);
    if (st.prevY < 0 && st.y >= 0 && st.x > 0) { if (st.lastCross != null) st.T = st.tt - st.lastCross; st.lastCross = st.tt; } st.prevY = st.y;
    if (Math.random() < 0.3) { st.trail.push([st.x, st.y]); if (st.trail.length > 900) st.trail.shift(); }
    const s = st.secStart; s.pts.push([st.x, st.y]); if (st.tt - s.t > 0.08) { st.sectors.push(s.pts); if (st.sectors.length > 14) st.sectors.shift(); st.secStart = { t: st.tt, pts: [[st.x, st.y]] }; } },
  draw(c, W, H, st, C) {
    c.fillStyle = '#04070B'; c.fillRect(0, 0, W, H); const cx = W * 0.45, cy = H / 2, R = Math.max(st.maxr, 1.2), sc = Math.min(W * 0.42, H * 0.46) / R;
    for (let i = 0; i < 60; i++) { const x = (i * 97 % W), y = (i * 57 % H); c.fillStyle = 'rgba(255,255,255,.35)'; c.fillRect(x, y, 1, 1); }
    if (st.p.sec) st.sectors.forEach((pts, i) => { c.fillStyle = i % 2 ? 'rgba(22,163,198,.28)' : 'rgba(255,181,71,.28)'; c.beginPath(); c.moveTo(cx, cy); pts.forEach(q => c.lineTo(cx + q[0] * sc, cy - q[1] * sc)); c.closePath(); c.fill(); });
    c.strokeStyle = 'rgba(200,215,230,.5)'; c.lineWidth = 1.2; c.beginPath(); st.trail.forEach((q, i) => i ? c.lineTo(cx + q[0] * sc, cy - q[1] * sc) : c.moveTo(cx + q[0] * sc, cy - q[1] * sc)); c.stroke();
    const grd = c.createRadialGradient(cx, cy, 2, cx, cy, 30); grd.addColorStop(0, '#fff'); grd.addColorStop(.3, '#FFD27A'); grd.addColorStop(1, 'rgba(255,180,70,0)'); c.fillStyle = grd; c.beginPath(); c.arc(cx, cy, 30, 0, 7); c.fill();
    CV.circle(c, cx + st.x * sc, cy - st.y * sc, 6, '#5AB0EA');
    CV.arrow(c, cx + st.x * sc, cy - st.y * sc, cx + st.x * sc + st.vx * 6, cy - st.y * sc - st.vy * 6, '#4CC67A', 2);
    CV.mono(c, 'units: AU and years', 12, H - 14, '#8FA2B1', 10.5);
  },
  read(st) { const r = Math.hypot(st.x, st.y), v = Math.hypot(st.vx, st.vy), a = (st.minr + st.maxr) / 2; const esc = st.p.v >= Math.SQRT2 - 1e-3; return [r.toFixed(2) + ' AU', v.toFixed(2) + ' AU yr⁻¹', st.T ? st.T.toFixed(2) + ' yr' : 'measuring…', st.T ? (st.T ** 2 / a ** 3).toFixed(2) + ' (= 1/M: ' + (1 / st.p.M).toFixed(2) + ')' : '—']; }
};

SIMS.galaxy = {
  title: 'Galaxy rotation & dark matter', h: 460,
  controls: [{ id: 'dm', type: 'seg', label: 'Dark-matter halo', value: 1, options: [[0, 'Visible mass only'], [1, 'With dark matter']] }],
  readouts: ['Speed at 10 kly', 'Speed at 40 kly', 'Mass inside 40 kly (rel.)', 'Curve shape'],
  note: 'Without dark matter, outer stars would orbit slowly (v ∝ 1/√r) and the disc would wind up. Observed curves stay flat — the extra mass is dark matter.',
  v(r, dm) { const vis = r < 8 ? 230 * (1 - Math.exp(-r / 3.5)) : 230 * (1 - Math.exp(-8 / 3.5)) * Math.sqrt(8 / r); return dm ? 230 * (1 - Math.exp(-r / 3.5)) : vis; },
  init(st) { st.s = Array.from({ length: 700 }, () => { const r = 1 + Math.pow(Math.random(), 0.7) * 49; return { r, a: Math.random() * 7 }; }); },
  step(st, dt) { st.s.forEach(s => s.a += this.v(s.r, st.p.dm) / s.r * dt * 0.02); },
  draw(c, W, H, st, C) {
    c.fillStyle = '#04070B'; c.fillRect(0, 0, W, H); const cx = W * 0.3, cy = H / 2, sc = Math.min(W * 0.28, H * 0.45) / 50;
    const grd = c.createRadialGradient(cx, cy, 2, cx, cy, 60); grd.addColorStop(0, 'rgba(255,240,210,.9)'); grd.addColorStop(1, 'rgba(255,200,120,0)'); c.fillStyle = grd; c.beginPath(); c.arc(cx, cy, 60, 0, 7); c.fill();
    if (st.p.dm) { const h2 = c.createRadialGradient(cx, cy, 10, cx, cy, 55 * sc); h2.addColorStop(0, 'rgba(123,91,214,.18)'); h2.addColorStop(1, 'rgba(123,91,214,0)'); c.fillStyle = h2; c.beginPath(); c.arc(cx, cy, 55 * sc, 0, 7); c.fill(); }
    st.s.forEach(s => { const x = cx + Math.cos(s.a) * s.r * sc, y = cy + Math.sin(s.a) * s.r * sc * 0.55; c.fillStyle = s.r < 8 ? 'rgba(255,230,190,.85)' : 'rgba(170,200,255,.8)'; c.fillRect(x, y, 1.6, 1.6); });
    const b = { x: W * 0.62, y: 40, w: W * 0.34, h: H - 110 };
    CV.plot(c, { ...C, surface: '#0C131B', line: '#2B3B4C', ink: '#C5D1DB', muted: '#8FA2B1' }, b, { xr: [0, 50], yr: [0, 300], xl: 'r / kly', yl: 'v / km s⁻¹', series: [{ f: r => this.v(r, 0), col: '#16A3C6', dash: [5, 4], w: 1.8 }, { f: r => this.v(r, 1), col: '#E5484D', w: 2.4 }] });
    CV.text(c, 'observed (flat)', b.x + b.w - 4, b.y + 30, '#E5484D', 11, 'right', 600); CV.text(c, 'visible mass only', b.x + b.w - 4, b.y + b.h - 40, '#16A3C6', 11, 'right', 600);
  },
  read(st) { const v1 = this.v(10, st.p.dm), v4 = this.v(40, st.p.dm); return [v1.toFixed(0) + ' km s⁻¹', v4.toFixed(0) + ' km s⁻¹', (v4 * v4 * 40 / (this.v(40, 0) ** 2 * 40)).toFixed(1) + ' × visible', st.p.dm ? 'flat' : 'falls as 1/√r']; }
};

/* ---------- 4.4 Charged particle in fields ---------- */
SIMS.bfield = {
  title: 'Charged particles in B (and E) fields', h: 460, substeps: 8,
  controls: [
    { id: 'q', type: 'seg', label: 'Particle', value: 'p', options: [['p', 'Proton'], ['e', 'Electron'], ['a', 'Alpha']] },
    { id: 'v', label: 'Speed', min: 1, max: 10, step: 0.5, value: 5, fmt: v => v.toFixed(1) + ' × 10⁵ m s⁻¹' },
    { id: 'B', label: 'B (into page)', min: 0, max: 0.1, step: 0.002, value: 0.04, fmt: v => (v * 1000).toFixed(0) + ' mT' },
    { id: 'E', label: 'E field (downwards) — velocity selector', min: 0, max: 6000, step: 100, value: 0, fmt: v => v + ' V m⁻¹' }
  ],
  readouts: ['Radius r = mv/Bq', 'Period 2πm/Bq', 'Undeflected speed E/B', 'Force on particle'],
  note: 'With only B, the force is perpendicular to v: circular motion at constant speed. Turn on E and tune so E = Bv — the particle passes straight through (velocity selector).',
  P: { p: [1.67e-27, 1.6e-19, 'p⁺'], e: [9.11e-31, -1.6e-19, 'e⁻'], a: [6.64e-27, 3.2e-19, 'α'] },
  init(st) { st.x = 0; st.y = 0; st.vx = st.p.v * 1e5; st.vy = 0; st.path = [[0, 0]]; },
  change(st) { this.init(st); },
  Ls(st) { const [m, q] = this.P[st.p.q]; return m * st.p.v * 1e5 / (Math.abs(q) * 0.05); },
  step(st, dt) { const [m, q] = this.P[st.p.q], B = st.p.B, E = st.p.E; const h = dt * m / (Math.abs(q) * 0.05) / 0.5;
    const Fx = q * (-B * st.vy), Fy = q * (B * st.vx - E);
    st.vx += Fx / m * h; st.vy += Fy / m * h; st.x += st.vx * h; st.y += st.vy * h;
    st.path.push([st.x, st.y]); if (st.path.length > 2500) st.path.shift();
    const L = this.Ls(st); if (Math.abs(st.y) > 2.2 * L || st.x > 5 * L || st.x < -1.5 * L) this.init(st); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const L = this.Ls(st), sc = Math.min(W, H) * 0.2 / L, ox = 60, oy = H / 2;
    if (st.p.B > 0) for (let x = 30; x < W; x += 40) for (let y = 30; y < H; y += 40) { CV.line(c, x - 4, y - 4, x + 4, y + 4, hexA(C.muted, .6), 1.2); CV.line(c, x - 4, y + 4, x + 4, y - 4, hexA(C.muted, .6), 1.2); }
    if (st.p.E > 0) { CV.rrect(c, ox, 14, W - ox - 20, 8, 3, hexA(C.u1, .5)); CV.rrect(c, ox, H - 22, W - ox - 20, 8, 3, hexA(C.u4, .5)); CV.mono(c, '+', ox - 12, 18, C.u1, 13); CV.mono(c, '−', ox - 12, H - 18, C.u4, 13); }
    const col = st.p.q === 'e' ? C.u4 : st.p.q === 'a' ? C.u3 : C.u1;
    c.strokeStyle = col; c.lineWidth = 2.2; c.beginPath(); st.path.forEach((q, i) => { const X = ox + q[0] * sc, Y = oy - q[1] * sc; i ? c.lineTo(X, Y) : c.moveTo(X, Y); }); c.stroke();
    const X = ox + st.x * sc, Y = oy - st.y * sc; CV.circle(c, X, Y, 8, col); CV.mono(c, this.P[st.p.q][2], X, Y - 16, C.ink, 11, 'center');
    const v = Math.hypot(st.vx, st.vy) || 1; CV.arrow(c, X, Y, X + st.vx / v * 30, Y - st.vy / v * 30, C.ink, 2);
    CV.mono(c, '× = B into page', W - 16, H - 40, C.muted, 10.5, 'right');
    const bar = 0.2 * Math.min(W, H); CV.line(c, W - 16 - bar, H - 56, W - 16, H - 56, C.ink, 2); CV.mono(c, sf(L, 2).replace(/<\/?sup>/g, m => m === '<sup>' ? '^' : ''), W - 16 - bar / 2, H - 68, C.muted, 10, 'center'); CV.mono(c, 'm', W - 12, H - 68, C.muted, 10);
  },
  read(st) { const [m, q] = this.P[st.p.q], v = st.p.v * 1e5, B = st.p.B, r = B ? m * v / (B * Math.abs(q)) : Infinity; return [B ? sf(r, 3) + ' m' : '∞ (straight)', B ? sf(2 * Math.PI * m / (B * Math.abs(q)), 3) + ' s' : '—', B ? sf(st.p.E / B, 3) + ' m s⁻¹' : '—', sf(Math.abs(q) * Math.abs(v * B - st.p.E), 3) + ' N']; }
};

/* ---------- 4.5 Induction ---------- */
SIMS.induction = {
  title: 'Magnet through a coil', h: 460, substeps: 4,
  controls: [
    { id: 'N', label: 'Turns on coil', min: 50, max: 800, step: 50, value: 300, fmt: v => v },
    { id: 'sp', label: 'Magnet speed', min: 0.2, max: 3, step: 0.1, value: 1, fmt: v => v.toFixed(1) + ' (rel.)' },
    { id: 'pole', type: 'seg', label: 'Leading pole', value: 1, options: [[1, 'North first'], [-1, 'South first']] }
  ],
  readouts: ['Flux linkage NΦ (rel.)', 'Induced emf (rel.)', 'Coil end nearest magnet', 'Lenz says'],
  note: 'The emf is the gradient of the flux-linkage graph. Entering and leaving give opposite emfs. Faster magnet → bigger, shorter pulses (same area).',
  init(st) { st.x = -2.2; st.dir = 1; st.hist = []; st.tt = 0; st.prevF = 0; st.emf = 0; },
  change(st, id) { if (id !== 'sp') this.init(st); },
  flux(x) { return 1 / Math.pow(1 + (x / 0.35) ** 2, 1.5); },
  step(st, dt) { const p = st.p; st.x += st.dir * p.sp * dt; if (st.x > 2.2) { st.x = -2.2; st.hist = []; st.tt = 0; } st.tt += dt; const F = p.N * this.flux(st.x) * p.pole / 300; st.emf = -(F - st.prevF) / dt; st.prevF = F; st.hist.push([st.tt, F, st.emf]); if (st.hist.length > 3000) st.hist.shift(); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const cy = H * 0.26, cx = W / 2, sc = W / 5;
    const turns = Math.round(st.p.N / 50) + 3; for (let i = 0; i < turns; i++) { const x = cx - 50 + i * 100 / turns; c.strokeStyle = '#B87333'; c.lineWidth = 3; c.beginPath(); c.ellipse(x, cy, 8, 46, 0, 0, Math.PI * 2); c.stroke(); }
    const mx = cx + st.x * sc; const nfirst = st.p.pole === 1; CV.rrect(c, mx - 70, cy - 16, 70, 32, 4, nfirst ? C.u4 : C.u1); CV.rrect(c, mx, cy - 16, 70, 32, 4, nfirst ? C.u1 : C.u4); CV.text(c, nfirst ? 'S' : 'N', mx - 35, cy, '#fff', 14, 'center', 700); CV.text(c, nfirst ? 'N' : 'S', mx + 35, cy, '#fff', 14, 'center', 700);
    // galvanometer needle
    const gx = cx + 170, gy = cy + 10; CV.circle(c, gx, gy, 30, C.surface, C.ink, 1.5); const ang = clamp(st.emf * 0.15, -1.2, 1.2); CV.line(c, gx, gy + 18, gx + Math.sin(ang) * 26, gy + 18 - Math.cos(ang) * 26, C.bad, 2.2); CV.mono(c, '0', gx, gy - 20, C.muted, 9, 'center');
    const b = { x: 50, w: W - 90, h: (H * 0.64 - 80) / 2 }, tmax = 4.4 / st.p.sp;
    const mf = st.p.N / 300 * 1.1, me = Math.max(1, ...st.hist.map(h => Math.abs(h[2]))) * 1.1;
    CV.plot(c, C, { x: b.x, y: H * 0.42, w: b.w, h: b.h }, { xr: [0, tmax], yr: [-mf, mf], yl: 'flux linkage NΦ', series: [{ pts: st.hist.map(h => [h[0], h[1]]), col: C.u4, w: 2.2 }] });
    CV.plot(c, C, { x: b.x, y: H * 0.42 + b.h + 30, w: b.w, h: b.h }, { xr: [0, tmax], yr: [-me, me], xl: 't', yl: 'emf = −d(NΦ)/dt', series: [{ pts: st.hist.map(h => [h[0], h[2]]), col: C.u1, w: 2.2 }] });
  },
  read(st) { const near = st.x < 0 ? 'left' : 'right'; const approaching = st.x < 0; const leading = st.p.pole === 1 ? 'N' : 'S', trailing = st.p.pole === 1 ? 'S' : 'N'; const pole = approaching ? leading : (st.p.pole === 1 ? 'S' : 'N'); return [(st.hist.length ? st.hist[st.hist.length - 1][1] : 0).toFixed(2), st.emf.toFixed(2), (approaching ? 'left end: ' : 'right end: ') + leading + ' pole', approaching ? 'repel the approaching magnet' : 'attract the leaving magnet']; }
};

/* ---------- Option A: AC / RCL ---------- */
SIMS.ac = {
  title: 'Series RCL circuit', h: 460,
  controls: [
    { id: 'f', label: 'Frequency', min: 20, max: 2000, step: 10, value: 400, fmt: v => v + ' Hz' },
    { id: 'R', label: 'Resistance R', min: 5, max: 200, step: 5, value: 40, fmt: v => v + ' Ω' },
    { id: 'L', label: 'Inductance L', min: 0.01, max: 0.5, step: 0.01, value: 0.1, fmt: v => v.toFixed(2) + ' H' },
    { id: 'C', label: 'Capacitance C', min: 0.1, max: 10, step: 0.1, value: 1, fmt: v => v.toFixed(1) + ' μF' }
  ],
  readouts: ['X_L = 2πfL', 'X_C = 1/2πfC', 'Impedance Z', 'Resonant f₀'],
  note: 'Phasors rotate at 2πf. V_L leads the current by 90°, V_C lags by 90°. At resonance X_L = X_C, they cancel, Z = R and the current is maximum.',
  k(p) { const w = 2 * Math.PI * p.f, XL = w * p.L, XC = 1 / (w * p.C * 1e-6), Z = Math.hypot(p.R, XL - XC), f0 = 1 / (2 * Math.PI * Math.sqrt(p.L * p.C * 1e-6)); return { w, XL, XC, Z, f0, phi: Math.atan2(XL - XC, p.R) }; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, k = this.k(p), I0 = 10 / k.Z, ang = st.t * 2.2;
    const cx = W * 0.2, cy = H * 0.32, s = Math.min(W * 0.16, H * 0.25) / Math.max(10, I0 * Math.max(p.R, k.XL, k.XC)) ;
    const ph = (len, a, col, lab) => { CV.arrow(c, cx, cy, cx + len * s * Math.cos(a), cy - len * s * Math.sin(a), col, 2.4); CV.mono(c, lab, cx + (len * s + 14) * Math.cos(a), cy - (len * s + 14) * Math.sin(a), col, 11, 'center'); };
    CV.circle(c, cx, cy, 3, C.ink);
    ph(I0 * p.R, ang, C.u3, 'V_R'); ph(I0 * k.XL, ang + Math.PI / 2, C.u1, 'V_L'); ph(I0 * k.XC, ang - Math.PI / 2, C.u4, 'V_C'); ph(10, ang + k.phi, C.ink, 'V');
    CV.text(c, 'phasor diagram (current along V_R)', cx, H * 0.62, C.muted, 11, 'center');
    const b = { x: W * 0.42, y: 30, w: W * 0.54, h: H * 0.36 };
    CV.plot(c, C, b, { xr: [0, 4 * Math.PI], yr: [-12, 12], xl: 'ωt', yl: 'supply V and current I (scaled)', series: [{ f: x => 10 * Math.sin(x + k.phi), col: C.ink, w: 2 }, { f: x => I0 * Math.min(p.R, 100) * 0 + 10 * (I0 / (10 / p.R)) * Math.sin(x), col: C.u3, w: 2, dash: [5, 3] }] });
    const b2 = { x: W * 0.42, y: H * 0.36 + 80, w: W * 0.54, h: H - (H * 0.36 + 130) };
    CV.plot(c, C, b2, { xr: [20, 2000], yr: [0, 1.1], xl: 'f / Hz', yl: 'I / I_max', series: [{ f: f => { const w = 2 * Math.PI * f; return p.R / Math.hypot(p.R, w * p.L - 1 / (w * p.C * 1e-6)); }, col: C.u5, w: 2.4 }], dots: [[p.f, p.R / k.Z, C.accent, 6]] });
  },
  read(st) { const k = this.k(st.p); return [k.XL.toFixed(1) + ' Ω', k.XC.toFixed(1) + ' Ω', k.Z.toFixed(1) + ' Ω', k.f0.toFixed(0) + ' Hz']; }
};
