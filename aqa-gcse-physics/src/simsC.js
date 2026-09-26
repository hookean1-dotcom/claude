/* ==========================================================
   Simulations C · 4.6 Waves · 4.7 Magnetism · 4.8 Space
   ========================================================== */

/* ---------- 6.1 Transverse and longitudinal waves ---------- */
SIMS.wave = {
  title: 'Wave machine', h: 440,
  controls: [
    { id: 'type', type: 'seg', label: 'Wave type', value: 'T', options: [['T', 'Transverse'], ['L', 'Longitudinal']] },
    { id: 'f', label: 'Frequency', min: 0.2, max: 2, step: 0.1, value: 0.6, fmt: v => v.toFixed(1) + ' Hz' },
    { id: 'lam', label: 'Wavelength', min: 0.5, max: 4, step: 0.1, value: 2, fmt: v => v.toFixed(1) + ' m' },
    { id: 'A', label: 'Amplitude', min: 0.1, max: 0.6, step: 0.05, value: 0.35, fmt: v => v.toFixed(2) + ' m' }
  ],
  readouts: ['Wave speed v = fλ', 'Period T = 1 ÷ f', 'Wavelength λ', 'Particle P moves'],
  note: 'Watch the red particle P: it only oscillates about a fixed position — the particles do not travel with the wave. It is the energy that is transferred. Transverse: oscillations are perpendicular to the direction of energy transfer. Longitudinal: parallel, with compressions and rarefactions.',
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, sc = (W - 60) / 8, cy = H * 0.36, k = 2 * Math.PI / p.lam, w = 2 * Math.PI * p.f, X0 = 30, xp = 1.5;
    if (p.type === 'T') {
      CV.line(c, X0, cy, X0 + 8 * sc, cy, hexA(C.muted, .5), 1, [4, 4]);
      c.strokeStyle = hexA(C.u6, .6); c.lineWidth = 2; c.beginPath(); for (let i = 0; i <= 400; i++) { const x = i / 400 * 8, y = p.A * Math.sin(w * st.t - k * x); i ? c.lineTo(X0 + x * sc, cy - y * sc) : c.moveTo(X0 + x * sc, cy - y * sc); } c.stroke();
      for (let x = 0; x <= 8; x += 0.25) { const y = p.A * Math.sin(w * st.t - k * x); CV.circle(c, X0 + x * sc, cy - y * sc, 3.5, C.u6); }
      const y = p.A * Math.sin(w * st.t - k * xp); CV.line(c, X0 + xp * sc, cy - p.A * sc - 8, X0 + xp * sc, cy + p.A * sc + 8, hexA(C.u1, .5), 1, [3, 3]); CV.circle(c, X0 + xp * sc, cy - y * sc, 7, C.u1); CV.mono(c, 'P', X0 + xp * sc, cy + p.A * sc + 20, C.u1, 13, 'center');
      // wavelength and amplitude markers
      const cr = []; for (let n = -10; n < 20; n++) { const x = (w * st.t - Math.PI / 2 + 2 * Math.PI * n) / k; if (x >= 3 && x <= 8) cr.push(x); }
      if (cr.length >= 2) { const a = X0 + cr[0] * sc, b2 = X0 + cr[1] * sc, yT = cy - p.A * sc - 22; CV.line(c, a, yT, b2, yT, C.ink, 1.2); CV.line(c, a, yT - 5, a, yT + 5, C.ink, 1.2); CV.line(c, b2, yT - 5, b2, yT + 5, C.ink, 1.2); CV.mono(c, 'λ', (a + b2) / 2, yT - 12, C.ink, 13, 'center'); }
      if (cr.length) { const a = X0 + cr[0] * sc; CV.arrow(c, a + 12, cy, a + 12, cy - p.A * sc + 4, C.u4, 1.6, 6); CV.mono(c, 'A', a + 20, cy - p.A * sc / 2, C.u4, 12); }
    } else {
      for (let x = 0; x <= 8; x += 0.1) { const d = p.A * 0.6 * Math.sin(w * st.t - k * x); const xx = X0 + (x + d) * sc; CV.line(c, xx, cy - 55, xx, cy + 55, hexA(C.u6, .7), 2); }
      const d = p.A * 0.6 * Math.sin(w * st.t - k * xp), xx = X0 + (xp + d) * sc; CV.line(c, xx, cy - 55, xx, cy + 55, C.u1, 3.5); CV.mono(c, 'P', xx, cy + 70, C.u1, 13, 'center');
      CV.text(c, 'compressions (close together) and rarefactions (spread out)', W / 2, cy - 74, C.muted, 11.5, 'center');
    }
    CV.arrow(c, W - 150, H * 0.62, W - 40, H * 0.62, C.ink, 2); CV.text(c, 'direction of energy transfer', W - 95, H * 0.62 - 14, C.muted, 11, 'center');
    const b = { x: 50, y: H * 0.7, w: W - 90, h: H * 0.2 };
    CV.plot(c, C, b, { xr: [st.t - 5, st.t], yr: [-0.7, 0.7], xl: 'time', yl: 'displacement of P', series: [{ f: t => p.A * Math.sin(w * t - k * xp), col: C.u1, w: 2 }] });
  },
  read(st) { const p = st.p; return [(p.f * p.lam).toFixed(2) + ' m/s', (1 / p.f).toFixed(2) + ' s', p.lam.toFixed(1) + ' m', p.type === 'T' ? 'up and down only ⟂' : 'back and forth only ∥']; }
};

/* ---------- 6.1 Required practical 8: waves ---------- */
SIMS.ripple = {
  title: 'Measuring waves (RP8)', h: 440,
  controls: [
    { id: 'mode', type: 'seg', label: 'Apparatus', value: 'tank', options: [['tank', 'Ripple tank'], ['string', 'Wave on a string']] },
    { id: 'f', label: 'Frequency of the signal generator', min: 5, max: 60, step: 1, value: 12, fmt: v => v + ' Hz' },
    { id: 'depth', type: 'seg', label: 'Water depth (ripple tank)', value: 1, options: [[1, 'Deep'], [0.6, 'Shallow']] },
    { id: 'strobe', type: 'seg', label: 'Strobe light', value: 0, options: [[0, 'Off'], [1, 'On (freeze)']] }
  ],
  readouts: ['Length of 10 waves (tank) / loops (string)', 'Wavelength λ', 'Wave speed v = fλ', 'Tip'],
  note: 'Ripple tank: measure across 10 wavelengths and divide by 10 — more accurate than measuring one. A strobe “freezes” the pattern. Wave on a string: change the frequency until a clear standing wave forms; each loop is half a wavelength. The speed depends on the medium (or tension), not the frequency.',
  v(p) { return p.mode === 'tank' ? 0.24 * p.depth : 24; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, t = p.strobe ? 0 : st.t, v = this.v(p);
    if (p.mode === 'tank') {
      const lam = v / p.f, x0 = 30, y0 = 30, w = W - 60, h = H - 110, sc = w / 0.5; // 0.5 m wide tank
      c.fillStyle = hexA(C.u6, .12); c.fillRect(x0, y0, w, h);
      for (let px = 0; px < w; px += 2) { const ph = 2 * Math.PI * (p.f * t - (px / sc) / lam), br = 0.5 + 0.5 * Math.cos(ph); c.fillStyle = `rgba(${Math.round(40 + 180 * br)},${Math.round(90 + 150 * br)},${Math.round(140 + 110 * br)},0.55)`; c.fillRect(x0 + px, y0, 2, h); }
      CV.rrect(c, x0 - 6, y0, 8, h, 2, C.ink); CV.text(c, 'dipper', x0 + 6, y0 + h + 12, C.muted, 10.5);
      const L10 = 10 * lam; if (L10 * sc < w - 10) { const ry = y0 + h + 32, ax = x0 + 10; CV.line(c, ax, ry, ax + L10 * sc, ry, C.bad, 2); CV.line(c, ax, ry - 6, ax, ry + 6, C.bad, 2); CV.line(c, ax + L10 * sc, ry - 6, ax + L10 * sc, ry + 6, C.bad, 2); CV.mono(c, '10 λ = ' + (L10 * 100).toFixed(1) + ' cm', ax + L10 * sc + 8, ry, C.bad, 11.5); }
      else CV.text(c, '10 wavelengths do not fit — raise the frequency', x0 + 10, y0 + h + 32, C.bad, 11.5);
      for (let cm = 0; cm <= 50; cm += 5) { CV.line(c, x0 + cm / 100 * sc, y0 + h, x0 + cm / 100 * sc, y0 + h + (cm % 10 ? 4 : 8), C.ink, 1); }
      CV.text(c, 'view from above (bright lines = wave crests)', W / 2, 18, C.muted, 11, 'center');
    } else {
      const L = 1.2, x0 = 40, x1 = W - 60, cy = H * 0.42, sc = (x1 - x0) / L, lam = v / p.f, n = 2 * L / lam, nr = Math.round(n), res = Math.abs(n - nr) < 0.12 && nr >= 1, amp = res ? 42 : 6;
      CV.rrect(c, x0 - 30, cy - 20, 30, 40, 4, C.u5, C.ink, 1); CV.text(c, 'vibration', x0 - 15, cy + 32, C.muted, 10, 'center'); CV.text(c, 'generator', x0 - 15, cy + 44, C.muted, 10, 'center');
      CV.circle(c, x1, cy, 10, C.surface, C.ink, 1.5); CV.line(c, x1 + 10, cy, x1 + 10, cy + 90, C.ink, 1); CV.rrect(c, x1, cy + 90, 20, 26, 3, C.muted); CV.text(c, 'masses', x1 + 10, cy + 128, C.muted, 10, 'center');
      const drawS = (ph, col, lw) => { c.strokeStyle = col; c.lineWidth = lw; c.beginPath(); for (let i = 0; i <= 200; i++) { const x = i / 200 * L, y = res ? amp * Math.sin(nr * Math.PI * x / L) * Math.cos(ph) : amp * Math.sin(2 * Math.PI * x / lam) * Math.cos(ph) * Math.sin(Math.PI * x / L); i ? c.lineTo(x0 + x * sc, cy - y) : c.moveTo(x0 + x * sc, cy - y); } c.stroke(); };
      if (res) drawS(0, hexA(C.u6, .25), 1.5), drawS(Math.PI, hexA(C.u6, .25), 1.5);
      drawS(p.strobe ? 0 : 2 * Math.PI * Math.min(p.f, 3) * st.t, C.u6, 2.4);
      if (res) { const yb = cy + 64; CV.line(c, x0, yb, x0 + (lam) * sc, yb, C.bad, 2); CV.mono(c, 'λ = ' + lam.toFixed(2) + ' m', x0 + lam * sc / 2, yb + 14, C.bad, 11.5, 'center'); CV.text(c, nr + ' loop' + (nr > 1 ? 's' : '') + ' — standing wave ✓', W / 2, 24, C.good, 13, 'center', 700); }
      else CV.text(c, 'no clear pattern — adjust the frequency (try multiples of 10 Hz)', W / 2, 24, C.muted, 12, 'center');
      CV.text(c, 'string length 1.20 m (bridge to pulley)', W / 2, H - 20, C.muted, 11, 'center');
    }
  },
  read(st) { const p = st.p, v = this.v(p), lam = v / p.f;
    if (p.mode === 'tank') return [(10 * lam * 100).toFixed(1) + ' cm', (lam * 100).toFixed(2) + ' cm = ' + lam.toFixed(4) + ' m', v.toFixed(2) + ' m/s', 'measure 10 waves, divide by 10'];
    const n = 2 * 1.2 / lam, nr = Math.round(n), res = Math.abs(n - nr) < 0.12 && nr >= 1; return [res ? nr + ' loops' : '—', res ? lam.toFixed(2) + ' m (' + nr + ' loops → λ = 2L ÷ ' + nr + ')' : 'no standing wave', res ? (p.f * lam).toFixed(1) + ' m/s' : '—', 'each loop is ½ λ']; }
};

/* ---------- 6.1 Echoes and ultrasound ---------- */
SIMS.echo = {
  title: 'Echoes: sound and ultrasound', h: 420,
  controls: [
    { id: 'mode', type: 'seg', label: 'Situation', value: 'air', options: [['air', 'Clap at a wall (air)'], ['us', 'Ultrasound scan (Physics)']] },
    { id: 'd', label: 'Distance to the wall', min: 20, max: 200, step: 10, value: 100, fmt: v => v + ' m' },
    { id: 'depth', label: 'Depth of the boundary (ultrasound)', min: 2, max: 12, step: 0.5, value: 6, fmt: v => v.toFixed(1) + ' cm' },
    { type: 'button', act: 'go', label: 'Send a pulse' }
  ],
  readouts: ['Time for the echo', 'Distance travelled by the sound', 'Distance to the reflector', 'Speed used'],
  note: 'The pulse travels there and back, so the distance to the reflector = speed × time ÷ 2. Sound in air travels at about 330 m/s. Ultrasound (above 20 kHz) travels at about 1500 m/s in soft tissue and is partly reflected at each boundary between different tissues.',
  k(p) { return p.mode === 'air' ? { v: 330, d: p.d } : { v: 1500, d: p.depth / 100 }; },
  init(st) { st.x = -1; st.back = false; st.tt = 0; st.done = false; },
  change(st) { this.init(st); },
  action(st, a) { if (a === 'go') { this.init(st); st.x = 0; } },
  step(st, dt) { if (st.x < 0 || st.done) return; const T = 2.4; st.tt += dt; const f = st.tt / T; if (f >= 1) { st.done = true; st.x = 0; return; } st.back = f > 0.5; st.x = st.back ? 2 - 2 * f : 2 * f; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, k = this.k(p), x0 = 60, x1 = W - 60, cy = H * 0.38;
    if (p.mode === 'air') {
      CV.rrect(c, x1, cy - 90, 20, 160, 2, '#8C6B4F'); CV.circle(c, x0 - 20, cy - 26, 9, C.ink); CV.line(c, x0 - 20, cy - 16, x0 - 20, cy + 20, C.ink, 3); CV.line(c, x0 - 20, cy + 20, x0 - 30, cy + 44, C.ink, 3); CV.line(c, x0 - 20, cy + 20, x0 - 10, cy + 44, C.ink, 3); CV.line(c, x0 - 20, cy - 4, x0 - 4, cy - 12, C.ink, 3);
      CV.line(c, x0, cy + 62, x1, cy + 62, C.muted, 1); CV.mono(c, p.d + ' m', (x0 + x1) / 2, cy + 76, C.muted, 11, 'center');
    } else {
      c.fillStyle = hexA(C.u3, .15); c.fillRect(x0, cy - 70, x1 - x0, 140); const bx = x0 + (x1 - x0) * p.depth / 14; c.fillStyle = hexA(C.u1, .2); c.fillRect(bx, cy - 70, x1 - bx, 140); CV.line(c, bx, cy - 70, bx, cy + 70, C.u1, 2); CV.text(c, 'boundary (e.g. organ)', bx + 6, cy - 80, C.u1, 11);
      CV.rrect(c, x0 - 30, cy - 22, 30, 44, 6, C.u5, C.ink, 1); CV.text(c, 'probe', x0 - 15, cy + 34, C.muted, 10, 'center');
    }
    const xr = p.mode === 'air' ? x1 : x0 + (x1 - x0) * p.depth / 14;
    if (st.x >= 0 && !st.done) { const X = x0 + (xr - x0) * st.x; for (let i = 0; i < 4; i++) { c.strokeStyle = hexA(C.u6, 1 - i * 0.22); c.lineWidth = 2.2; c.beginPath(); c.arc(X - (st.back ? -i * 6 : i * 6), cy, 26, st.back ? Math.PI * 0.72 : -Math.PI * 0.28, st.back ? Math.PI * 1.28 : Math.PI * 0.28); c.stroke(); } }
    // oscilloscope-style trace
    const b = { x: 50, y: H * 0.72, w: W - 90, h: H * 0.18 }, T = 2 * k.d / k.v, tmax = p.mode === 'air' ? 1.4 : 2e-4;
    const pulse = (t0, a) => t => a * Math.exp(-(((t - t0) / (tmax * 0.012)) ** 2)) * Math.sin((t - t0) / (tmax * 0.004));
    CV.plot(c, C, b, { xr: [0, tmax], yr: [-1.2, 1.2], xl: p.mode === 'air' ? 'time (0 – 1.4 s)' : 'time (0 – 200 μs)', series: [{ f: t => pulse(0, 1)(t) + (st.done ? pulse(T, 0.45)(t) : 0), col: C.u5, w: 1.6 }] });
  },
  read(st) { const k = this.k(st.p), T = 2 * k.d / k.v, done = st.done; const tf = x => st.p.mode === 'air' ? x.toFixed(3) + ' s' : (x * 1e6).toFixed(0) + ' μs'; const df = x => st.p.mode === 'air' ? x.toFixed(0) + ' m' : (x * 100).toFixed(1) + ' cm';
    return [done ? tf(T) : 'send a pulse', done ? df(k.v * T) : '—', done ? df(k.v * T / 2) + ' (= v × t ÷ 2)' : '—', k.v + ' m/s']; }
};

/* ---------- 6.1 Seismic waves ---------- */
SIMS.seismic = {
  title: 'Seismic waves and the Earth’s core', h: 460,
  controls: [
    { id: 'w', type: 'seg', label: 'Waves shown', value: 'both', options: [['P', 'P-waves'], ['S', 'S-waves'], ['both', 'Both']] },
    { type: 'button', act: 'go', label: 'Earthquake!' }
  ],
  readouts: ['P-waves', 'S-waves', 'S-wave shadow zone', 'Evidence'],
  note: 'P-waves are longitudinal and travel through solids and liquids. S-waves are transverse and cannot travel through liquids. S-waves are not detected on the far side of the Earth, so the outer core must be liquid. P-waves refract at the core boundary, leaving a P-wave shadow zone. (Ray paths simplified — real paths curve.)',
  init(st) { st.f = 0; },
  action(st, a) { if (a === 'go') st.f = 0.001; },
  step(st, dt) { if (st.f > 0 && st.f < 1.2) st.f += dt * 0.35; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const cx = W / 2, cy = H / 2 + 6, R = Math.min(W, H) * 0.42, Rc = R * 0.616, Ri = R * 0.2, sh = st.p.w;
    CV.circle(c, cx, cy, R, hexA(C.u2, .25), C.ink, 1.5); CV.circle(c, cx, cy, Rc, hexA(C.u1, .22), C.u1, 1.2); CV.circle(c, cx, cy, Ri, hexA(C.u1, .5));
    CV.text(c, 'mantle (solid)', cx, cy - R * 0.8, C.muted, 10.5, 'center'); CV.text(c, 'outer core (liquid)', cx, cy - Rc * 0.55, C.u1, 10.5, 'center'); CV.text(c, 'inner core', cx, cy, '#fff', 9.5, 'center');
    const P = a => [cx + R * Math.sin(a), cy - R * Math.cos(a)], src = P(0); CV.text(c, '✹', src[0], src[1] - 8, C.bad, 20, 'center', 800);
    const f = st.f; if (f <= 0) { CV.text(c, 'Press “Earthquake!”', cx, H - 14, C.muted, 12, 'center'); return; }
    const seg = (a, b, col, prog, dash) => { const e = [a[0] + (b[0] - a[0]) * prog, a[1] + (b[1] - a[1]) * prog]; CV.line(c, a[0], a[1], e[0], e[1], col, 1.5, dash); return prog >= 1; };
    const hits = { P: [], S: [] };
    for (let dg = 20; dg <= 340; dg += 20) { const D = dg * deg, Dm = Math.min(D, 2 * Math.PI - D), side = D < Math.PI ? 1 : -1, end = P(D), closest = R * Math.cos(Dm / 2), hitsCore = closest < Rc;
      if (!hitsCore) { if (sh !== 'S') { if (seg(src, end, C.u6, clamp(f * 1.2, 0, 1))) hits.P.push(Dm); } if (sh !== 'P') { if (seg(src, end, C.u4, clamp(f * 1.2 - 0.12, 0, 1), [4, 3])) hits.S.push(Dm); } continue; }
      // chord to the core boundary
      const dx = end[0] - src[0], dy = end[1] - src[1], L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L, ox = src[0] - cx, oy = src[1] - cy, bq = ox * ux + oy * uy, cq = ox * ox + oy * oy - Rc * Rc, tq = -bq - Math.sqrt(bq * bq - cq), E = [src[0] + ux * tq, src[1] + uy * tq], fr = tq / L;
      if (sh !== 'P') { seg(src, E, C.u4, clamp((f * 1.2 - 0.12) / fr, 0, 1), [4, 3]); }
      if (sh !== 'S') { const reached = seg(src, E, C.u6, clamp(f * 1.2 / fr, 0, 1)); if (reached) { const out = (180 - (Dm / deg - 104) * 40 / 76) * deg * side, X = P(out < 0 ? 2 * Math.PI + out : out); if (seg(E, X, C.u6, clamp((f * 1.2 - fr) / (1 - fr), 0, 1))) hits.P.push(Math.abs(out)); } } }
    // detectors
    for (let dg = 0; dg < 360; dg += 10) { const D = dg * deg, Dm = Math.min(dg, 360 - dg), [x, y] = [cx + (R + 7) * Math.sin(D), cy - (R + 7) * Math.cos(D)]; if (f < 1) continue; const pOK = sh !== 'S' && !(Dm > 104 && Dm < 140), sOK = sh !== 'P' && Dm < 104; CV.circle(c, x, y, 3.2, pOK && sOK ? C.good : pOK ? C.u6 : sOK ? C.u4 : C.bad); }
    if (f >= 1) { CV.text(c, '● P and S   ● P only   ● none detected', cx, H - 12, C.muted, 11, 'center'); }
  },
  read(st) { const done = st.f >= 1; return ['longitudinal · solids and liquids', 'transverse · solids only', done ? 'more than 104° from the epicentre' : '—', done ? 'outer core is liquid; P-wave shadow 104°–140°' : 'press “Earthquake!”']; }
};

/* ---------- 6.2 The electromagnetic spectrum ---------- */
const EMR = [
  ['Radio waves', -0.3, 4, 'television and radio; produced by oscillations in electrical circuits', 'low hazard'],
  ['Microwaves', -3, -0.3, 'satellite communications, cooking food', 'can heat body tissue'],
  ['Infrared', -6.15, -3, 'electrical heaters, cooking, infrared cameras', 'can burn the skin'],
  ['Visible light', -6.4, -6.15, 'fibre optic communications, seeing', 'very bright light can damage eyes'],
  ['Ultraviolet', -8, -6.4, 'energy-efficient lamps, sun tanning', 'premature skin ageing, skin cancer'],
  ['X-rays', -11, -8, 'medical imaging and treatments', 'ionising: gene mutation, cancer'],
  ['Gamma rays', -14, -11, 'medical imaging, treatments, sterilising', 'ionising: gene mutation, cancer; produced by changes in the nucleus']
];
SIMS.emspec = {
  title: 'The electromagnetic spectrum', h: 400, noPlay: false,
  controls: [{ id: 'lg', label: 'Wavelength (log scale)', min: -13, max: 3, step: 0.1, value: -6.3, fmt: v => fmtSI(Math.pow(10, v), 'm') }],
  readouts: ['Region', 'Frequency f = v ÷ λ', 'Uses', 'Hazards'],
  note: 'All electromagnetic waves are transverse and travel at the same speed in a vacuum (3 × 10⁸ m/s). From radio to gamma: wavelength decreases, frequency increases, and the energy carried increases. Our eyes only detect the narrow visible band.',
  region(lg) { return EMR.find(r => lg <= r[2] && lg > r[1]) || (lg > 4 ? EMR[0] : EMR[6]); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const lg = st.p.lg, x0 = 30, x1 = W - 30, X = v => x1 - (v + 13) / 16 * (x1 - x0), by = 70, bh = 44;
    EMR.forEach((r, i) => { const a = X(Math.min(3, r[2])), b = X(Math.max(-13, r[1])); if (r[0] === 'Visible light') { const gr = c.createLinearGradient(a, 0, b, 0); ['#E53935', '#FB8C00', '#FDD835', '#43A047', '#1E88E5', '#5E35B1'].forEach((cc, k) => gr.addColorStop(k / 5, cc)); c.fillStyle = gr; } else c.fillStyle = hexA([C.u1, C.u2, C.u3, C.u4, C.u5, C.u6, C.u7][i], .35); c.fillRect(a, by, b - a, bh); });
    const names = [['Radio', 1], ['Micro', -1.7], ['IR', -4.5], ['UV', -7.2], ['X-ray', -9.5], ['Gamma', -12]]; names.forEach(([n, v]) => CV.text(c, n, X(v), by + bh / 2, C.ink, 11, 'center', 700));
    CV.text(c, '← longer wavelength', x0, by - 16, C.muted, 11); CV.text(c, 'higher frequency, more energy →', x1, by + bh + 16, C.muted, 11, 'right');
    const px = X(lg); CV.line(c, px, by - 6, px, by + bh + 6, C.bad, 3);
    // a drawn wave of the chosen wavelength (visual scale)
    const cy = H * 0.62, vw = 6 + (lg + 13) / 16 * 120; c.strokeStyle = C.u5; c.lineWidth = 2; c.beginPath(); for (let x = x0; x <= x1; x += 1) { const y = 34 * Math.sin(2 * Math.PI * (x - st.t * 60) / vw); x === x0 ? c.moveTo(x, cy - y) : c.lineTo(x, cy - y); } c.stroke();
    CV.text(c, 'wave not drawn to scale', W / 2, H - 20, C.muted, 11, 'center');
  },
  read(st) { const lg = st.p.lg, r = this.region(lg), f = 3e8 / Math.pow(10, lg); return [r[0], fmtSI(f, 'Hz'), r[3], r[4]]; }
};
function fmtSI(v, u) { const P = [[1e12, 'T'], [1e9, 'G'], [1e6, 'M'], [1e3, 'k'], [1, ''], [1e-3, 'm'], [1e-6, 'μ'], [1e-9, 'n'], [1e-12, 'p']]; if (v >= 1e15 || v < 1e-13) { const e = Math.floor(Math.log10(v)); return (v / 10 ** e).toFixed(1) + ' × 10' + String(e).split('').map(ch => '⁰¹²³⁴⁵⁶⁷⁸⁹'['0123456789'.indexOf(ch)] || '⁻').join('') + ' ' + u; } const [m, pfx] = P.find(q => v >= q[0]) || P[P.length - 1]; const n = v / m; return (n >= 100 ? n.toFixed(0) : n >= 10 ? n.toFixed(1) : n.toFixed(2)) + ' ' + pfx + u; }

/* ---------- 6.2 Refraction and reflection (RP9) ---------- */
SIMS.refract = {
  title: 'Reflection and refraction (RP9)', h: 440,
  controls: [
    { id: 'mode', type: 'seg', label: 'Surface', value: 'refr', options: [['refr', 'Glass block (refraction)'], ['refl', 'Plane mirror (reflection)']] },
    { id: 'i', label: 'Angle of incidence', min: 0, max: 80, step: 1, value: 40, fmt: v => v + '°' },
    { id: 'mat', type: 'seg', label: 'Material', value: 2.01, options: [[2.25, 'Water'], [2.01, 'Perspex'], [1.97, 'Glass']] },
    { id: 'fronts', type: 'seg', label: 'Show', value: 1, options: [[1, 'Wavefronts'], [0, 'Ray only']] }
  ],
  readouts: ['Angle of incidence', 'Angle of refraction / reflection', 'Speed of light in the material', 'Ray bends'],
  note: 'Angles are always measured from the normal. Reflection: angle of incidence = angle of reflection. Refraction: light slows down as it enters a denser material, so the part of the wavefront that enters first slows first and the wave bends towards the normal. At 0° there is no change in direction, only in speed.',
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, cx = W / 2, cy = H * 0.5, L = Math.min(W, H) * 0.45, i = p.i * deg, v2 = p.mat * 1e8, r = p.mode === 'refr' ? Math.asin(Math.sin(i) * v2 / 3e8) : i;
    if (p.mode === 'refr') { c.fillStyle = hexA(C.u6, .16); c.fillRect(0, cy, W, H - cy); CV.text(c, 'air (3.0 × 10⁸ m/s)', 12, cy - 14, C.muted, 11); CV.text(c, 'material (' + (p.mat).toFixed(2) + ' × 10⁸ m/s)', 12, cy + 16, C.muted, 11); }
    else { c.fillStyle = hexA(C.muted, .35); c.fillRect(0, cy, W, 10); for (let x = 0; x < W; x += 12) CV.line(c, x, cy + 10, x + 8, cy + 18, C.muted, 1); }
    CV.line(c, 0, cy, W, cy, C.ink, 1.5); CV.line(c, cx, cy - L, cx, cy + L, C.muted, 1.2, [6, 5]); CV.text(c, 'normal', cx + 6, cy - L + 8, C.muted, 11);
    const ix = cx - L * Math.sin(i), iy = cy - L * Math.cos(i);
    if (p.fronts && p.mode === 'refr') { const lam1 = 26, lam2 = lam1 * v2 / 3e8, ph = (st.t * 40) % lam1, ph2 = ph * lam2 / lam1; c.save(); c.beginPath(); c.rect(0, 0, W, cy); c.clip(); for (let s = -L * 1.2; s < 0; s += lam1) { const d = s + ph; if (d > 0) continue; const px = cx + d * Math.sin(i), py = cy + d * Math.cos(i); CV.line(c, px - 40 * Math.cos(i), py + 40 * Math.sin(i), px + 40 * Math.cos(i), py - 40 * Math.sin(i), hexA(C.u5, .6), 2); } c.restore();
      c.save(); c.beginPath(); c.rect(0, cy, W, H - cy); c.clip(); for (let s = 0; s < L * 1.2; s += lam2) { const d = s + ph2; const px = cx + d * Math.sin(r), py = cy + d * Math.cos(r); CV.line(c, px - 40 * Math.cos(r), py + 40 * Math.sin(r), px + 40 * Math.cos(r), py - 40 * Math.sin(r), hexA(C.u5, .6), 2); } c.restore(); }
    CV.arrow(c, ix, iy, cx - (L / 2) * Math.sin(i) + 1, cy - (L / 2) * Math.cos(i) + 1, C.bad, 2.4); CV.line(c, ix, iy, cx, cy, C.bad, 2.4);
    if (p.mode === 'refr') { const ex = cx + L * Math.sin(r), ey = cy + L * Math.cos(r); CV.line(c, cx, cy, ex, ey, C.bad, 2.4); CV.arrow(c, cx, cy, cx + L / 2 * Math.sin(r), cy + L / 2 * Math.cos(r), C.bad, 2.4); if (p.i) { c.strokeStyle = C.u2; c.lineWidth = 1.5; c.beginPath(); c.arc(cx, cy, 34, Math.PI / 2 - r, Math.PI / 2, false); c.stroke(); CV.mono(c, 'r', cx + 16 * Math.sin(r / 2) + 6, cy + 48, C.u2, 12); } }
    else { const ex = cx + L * Math.sin(i), ey = cy - L * Math.cos(i); CV.line(c, cx, cy, ex, ey, C.bad, 2.4); CV.arrow(c, cx, cy, cx + L / 2 * Math.sin(i), cy - L / 2 * Math.cos(i), C.bad, 2.4); if (p.i) { c.strokeStyle = C.u2; c.lineWidth = 1.5; c.beginPath(); c.arc(cx, cy, 34, -Math.PI / 2, -Math.PI / 2 + i); c.stroke(); CV.mono(c, 'r', cx + 12, cy - 48, C.u2, 12); } }
    if (p.i) { c.strokeStyle = C.u4; c.lineWidth = 1.5; c.beginPath(); c.arc(cx, cy, 40, -Math.PI / 2 - i, -Math.PI / 2); c.stroke(); CV.mono(c, 'i', cx - 18, cy - 54, C.u4, 12); }
  },
  read(st) { const p = st.p, i = p.i * deg, r = p.mode === 'refr' ? Math.asin(Math.sin(i) * p.mat / 3) / deg : p.i; return [p.i + '°', r.toFixed(0) + '°', p.mode === 'refr' ? p.mat.toFixed(2) + ' × 10⁸ m/s' : '— (stays in air)', p.mode === 'refl' ? 'reflected: i = r' : p.i === 0 ? 'no change of direction' : 'towards the normal (slows down)']; }
};

/* ---------- 6.2 Infrared: Leslie cube (RP10) ---------- */
const FACES = [['Matt black', 0.95, '#22262B'], ['Shiny black', 0.86, '#3A3F47'], ['Matt white', 0.8, '#F2F2F0'], ['Shiny silver', 0.1, '#C9D1D8']];
SIMS.leslie = {
  title: 'Infrared emission (RP10)', h: 460, noPlay: true,
  controls: [
    { id: 'T', label: 'Temperature of the water', min: 30, max: 90, step: 5, value: 80, fmt: v => v + ' °C' },
    { id: 'face', type: 'seg', label: 'Face pointing at the detector', value: 0, options: FACES.map((f, i) => [i, f[0]]) },
    { id: 'dist', type: 'seg', label: 'Detector distance', value: 10, options: [[10, '10 cm'], [20, '20 cm']] }
  ],
  readouts: ['Infrared detector reading', 'Best emitter', 'Worst emitter', 'Control variables'],
  note: 'Fill the Leslie cube with hot water and point each face at the infrared detector, keeping the distance the same. Matt black surfaces are the best emitters (and absorbers) of infrared; shiny silver surfaces are the worst — they are good reflectors. Hotter objects emit more infrared.',
  reading(p, face) { const T = p.T + 273, Ta = 293, e = FACES[face][1]; return e * 5.67e-8 * (T ** 4 - Ta ** 4) * (100 / p.dist ** 2) * 0.12; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, s = Math.min(W * 0.12, 60, H * 0.14), cx = 30 + s, cy = H * 0.3;
    c.save(); c.translate(cx, cy); c.rotate(-p.face * Math.PI / 2);
    FACES.forEach((f, i) => { c.save(); c.rotate(i * Math.PI / 2); c.fillStyle = f[2]; c.strokeStyle = C.ink; c.lineWidth = 1.5; c.fillRect(s - 8, -s, 16, 2 * s); c.strokeRect(s - 8, -s, 16, 2 * s); c.restore(); });
    c.fillStyle = hexA(C.u1, 0.15 + 0.5 * (p.T - 30) / 60); c.fillRect(-s + 8, -s + 8, 2 * s - 16, 2 * s - 16); c.restore();
    CV.text(c, 'hot water', cx, cy, C.ink, 11, 'center'); CV.text(c, FACES[p.face][0] + ' →', cx, cy + s + 22, C.ink, 12, 'center', 700);
    const R = this.reading(p, p.face), dx = Math.min(W - 70, cx + s + 20 + p.dist * 6 * Math.min(1, W / 600)), n = Math.round(R / 4); for (let k = 0; k < Math.min(n, 14); k++) { const y = cy - 40 + (k * 37) % 80, x = cx + s + 10 + ((st.t * 90 + k * 23) % (dx - cx - s - 10)); c.strokeStyle = hexA(C.u1, .7); c.lineWidth = 1.5; c.beginPath(); for (let j = 0; j < 12; j++) c.lineTo(x + j * 2, y + Math.sin((x + j * 2) * 0.6) * 3); c.stroke(); }
    CV.rrect(c, dx, cy - 26, 60, 52, 6, C.surface, C.ink, 1.5); CV.rrect(c, dx - 6, cy - 8, 8, 16, 2, C.ink); CV.rrect(c, dx + 8, cy - 12, 44, 22, 3, '#0B1117'); CV.mono(c, R.toFixed(0), dx + 30, cy - 1, '#6CFFA8', 12, 'center'); CV.text(c, 'IR detector', dx + 30, cy + 40, C.muted, 10.5, 'center');
    const b = { x: 40, y: H * 0.6, w: W - 80, h: H * 0.28 }, mx = this.reading({ T: 90, dist: 10 }, 0) * 1.05;
    CV.rrect(c, b.x - 8, b.y - 22, b.w + 16, b.h + 50, 8, C.surface, C.line, 1); const bw = b.w / 4 - 8;
    FACES.forEach((f, i) => { const v = this.reading(p, i), h = b.h * v / mx, x = b.x + i * (bw + 8) + 4; CV.rrect(c, x, b.y + b.h - h, bw, h, 3, i === p.face ? C.u1 : hexA(C.u1, .35)); CV.text(c, f[0], x + bw / 2, b.y + b.h + 14, C.muted, 10, 'center'); });
    CV.text(c, 'detector reading for each face (same distance)', b.x, b.y - 10, C.muted, 10.5);
  },
  read(st) { return [this.reading(st.p, st.p.face).toFixed(0) + ' (arbitrary units)', 'matt black', 'shiny silver', 'same distance, same water temperature']; }
};

/* ---------- 6.2 Lenses ---------- */
SIMS.lens = {
  title: 'Lenses and ray diagrams', h: 440, noPlay: true,
  controls: [
    { id: 'type', type: 'seg', label: 'Lens', value: 'convex', options: [['convex', 'Convex (converging)'], ['concave', 'Concave (diverging)']] },
    { id: 'u', label: 'Object distance from lens', min: 4, max: 40, step: 1, value: 24, fmt: v => v + ' cm' },
    { id: 'f', label: 'Focal length', min: 5, max: 15, step: 1, value: 10, fmt: v => v + ' cm' },
    { id: 'ho', label: 'Object height', min: 1, max: 5, step: 0.5, value: 3, fmt: v => v.toFixed(1) + ' cm' }
  ],
  readouts: ['Image distance', 'Image height', 'Magnification = image height ÷ object height', 'Image is'],
  note: 'Two rays locate the image: one parallel to the axis that is refracted through (or appears to come from) the principal focus F, and one through the centre of the lens that carries straight on. Convex lens, object beyond F: real, inverted image. Object inside F: virtual, upright, magnified (a magnifying glass). Concave lenses always give virtual, upright, diminished images.',
  img(p) { const f = p.type === 'convex' ? p.f : -p.f, v = 1 / (1 / f - 1 / p.u); return { v, m: -v / p.u }; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, { v, m } = this.img(p), cx = W * 0.5, cy = H * 0.52, span = Math.max(p.u, p.f, isFinite(v) ? Math.min(Math.abs(v), 60) : 0) + 6, sc = Math.min((W - 30) / (2 * span), 14), X = x => cx + x * sc, Y = y => cy - y * sc, F = p.type === 'convex' ? p.f : -p.f;
    CV.line(c, 0, cy, W, cy, C.muted, 1);
    c.strokeStyle = C.u6; c.lineWidth = 3; c.beginPath(); const lh = Math.min(H * 0.4 / sc, Math.max(9, p.ho + 2, Math.abs(m * p.ho) + 2)); c.moveTo(cx, Y(lh)); c.lineTo(cx, Y(-lh)); c.stroke(); const ar = p.type === 'convex' ? 1 : -1; [[lh, -1], [-lh, 1]].forEach(([y, d]) => { CV.line(c, cx, Y(y), cx - 8, Y(y) + d * 8 * ar, C.u6, 3); CV.line(c, cx, Y(y), cx + 8, Y(y) + d * 8 * ar, C.u6, 3); });
    [-1, 1].forEach(s => { CV.circle(c, X(s * p.f), cy, 3.5, C.ink); CV.text(c, 'F', X(s * p.f), cy + 14, C.ink, 12, 'center', 700); });
    CV.arrow(c, X(-p.u), cy, X(-p.u), Y(p.ho), C.u1, 3); CV.text(c, 'object', X(-p.u), Y(p.ho) - 12, C.u1, 11, 'center');
    const hi = m * p.ho, ix = X(v), iy = Y(hi), real = v > 0 && isFinite(v);
    c.save(); c.beginPath(); c.rect(0, 0, W, H); c.clip();
    // ray 1: parallel then through / from F
    CV.line(c, X(-p.u), Y(p.ho), cx, Y(p.ho), C.bad, 1.8); const sl = -p.ho / F; CV.line(c, cx, Y(p.ho), X(200), Y(p.ho + sl * 200), C.bad, 1.8); if (!real) CV.line(c, cx, Y(p.ho), X(-200), Y(p.ho - sl * 200), C.bad, 1.2, [5, 4]);
    // ray 2: through centre
    const s2 = -p.ho / p.u * -1; CV.line(c, X(-p.u), Y(p.ho), X(200), Y(p.ho - (p.ho / p.u) * (200 + p.u)), C.u4, 1.8); void s2; if (!real) CV.line(c, cx, cy, X(-200), Y((p.ho / p.u) * 200), C.u4, 1.2, [5, 4]);
    c.restore();
    if (isFinite(v) && Math.abs(v) < 200) { CV.arrow(c, ix, cy, ix, iy, C.u3, 3, 9); if (!real) { c.setLineDash([4, 3]); } CV.text(c, real ? 'real image' : 'virtual image', ix, iy + (hi > 0 ? -12 : 14), C.u3, 11, 'center', 700); c.setLineDash([]); }
    else CV.text(c, 'object at F: rays emerge parallel — no image', W / 2, 20, C.muted, 12, 'center');
  },
  read(st) { const { v, m } = this.img(st.p); if (!isFinite(v) || Math.abs(v) > 1000) return ['at infinity', '—', '—', 'no image formed']; const hi = m * st.p.ho, real = v > 0;
    return [Math.abs(v).toFixed(1) + ' cm ' + (real ? '(other side)' : '(same side as object)'), Math.abs(hi).toFixed(1) + ' cm', Math.abs(m).toFixed(2), [real ? 'real' : 'virtual', m < 0 ? 'inverted' : 'upright', Math.abs(m) > 1.02 ? 'magnified' : Math.abs(m) < 0.98 ? 'diminished' : 'same size'].join(', ')]; }
};

/* ---------- 6.2 Colour of objects ---------- */
const RGB = { white: [1, 1, 1], red: [1, 0, 0], green: [0, 1, 0], blue: [0, 0, 1], black: [0, 0, 0], yellow: [1, 1, 0], cyan: [0, 1, 1], magenta: [1, 0, 1] };
const cname = v => Object.keys(RGB).find(k => RGB[k].every((x, i) => x === v[i])) || 'black';
SIMS.colour = {
  title: 'Colour: objects and filters', h: 400,
  controls: [
    { id: 'light', type: 'seg', label: 'Light shone', value: 'white', options: [['white', 'White'], ['red', 'Red'], ['green', 'Green'], ['blue', 'Blue']] },
    { id: 'filter', type: 'seg', label: 'Filter in front of the lamp', value: 'none', options: [['none', 'None'], ['red', 'Red'], ['green', 'Green'], ['blue', 'Blue']] },
    { id: 'obj', type: 'seg', label: 'Object (in white light it looks…)', value: 'red', options: [['white', 'White'], ['red', 'Red'], ['green', 'Green'], ['blue', 'Blue'], ['black', 'Black'], ['yellow', 'Yellow']] }
  ],
  readouts: ['Light reaching the object', 'Wavelengths reflected', 'Object appears', 'Absorbed'],
  note: 'White light contains all colours. A filter transmits only its own colour and absorbs the rest. An opaque object reflects the colours it “is” and absorbs the others. A red object in green light reflects nothing, so it looks black. White objects reflect all wavelengths equally; black objects absorb them all.',
  k(p) { const L = RGB[p.light].map((x, i) => x * (p.filter === 'none' ? 1 : RGB[p.filter][i])), R = L.map((x, i) => x * RGB[p.obj][i]); return { L, R }; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, { L, R } = this.k(p), toCss = v => `rgb(${v.map(x => Math.round(40 + 215 * x)).join(',')})`, cy = H * 0.45;
    CV.rrect(c, 20, cy - 24, 50, 48, 8, C.surface, C.ink, 1.5); CV.circle(c, 70, cy, 12, toCss(RGB[p.light]), C.ink); CV.text(c, 'lamp', 45, cy + 38, C.muted, 11, 'center');
    const fx = W * 0.3; if (p.filter !== 'none') { CV.rrect(c, fx, cy - 50, 12, 100, 3, hexA(toCss(RGB[p.filter]), .7), C.ink, 1); CV.text(c, 'filter', fx + 6, cy + 64, C.muted, 11, 'center'); }
    const beam = (x1, x2, v) => { const cols = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]; cols.forEach((cc, i) => { if (v[i]) CV.line(c, x1, cy - 8 + i * 8, x2, cy - 8 + i * 8, toCss(cc), 3); }); };
    beam(84, fx, RGB[p.light]); const ox = W * 0.62; beam(fx + 12, ox - 40, L);
    const reflectedSome = R.some(x => x); c.fillStyle = reflectedSome ? toCss(R) : '#15181C'; c.strokeStyle = C.ink; c.lineWidth = 1.5; c.beginPath(); c.arc(ox, cy, 40, 0, 7); c.fill(); c.stroke();
    CV.text(c, 'looks ' + cname(R), ox, cy + 58, C.ink, 13, 'center', 700);
    // reflected rays to the eye
    const ex = W - 50, ey = cy - 100; [[1, 0, 0], [0, 1, 0], [0, 0, 1]].forEach((cc, i) => { if (R[i]) CV.line(c, ox + 28, cy - 28 + i * 6, ex - 12, ey + 4 + i * 4, toCss(cc), 2.5); });
    c.strokeStyle = C.ink; c.lineWidth = 1.5; c.beginPath(); c.ellipse(ex, ey, 16, 10, 0, 0, 7); c.stroke(); CV.circle(c, ex - 4, ey, 5, C.ink); CV.text(c, 'eye', ex, ey - 20, C.muted, 11, 'center');
  },
  read(st) { const { L, R } = this.k(st.p), list = v => ['red', 'green', 'blue'].filter((_, i) => v[i]).join(' + ') || 'none'; return [list(L), list(R), cname(R), list(L.map((x, i) => x && !R[i] ? 1 : 0))]; }
};

/* ---------- 6.3 Black body radiation ---------- */
SIMS.blackbody = {
  title: 'Black body radiation', h: 420, noPlay: true,
  controls: [{ id: 'T', label: 'Temperature of the object', min: 300, max: 7000, step: 100, value: 3000, fmt: v => v + ' K (' + (v - 273) + ' °C)' }],
  readouts: ['Peak wavelength', 'Appearance', 'Total power emitted (vs 300 K)', 'Peak in'],
  note: 'All bodies emit and absorb infrared radiation, whatever their temperature. The hotter the body, the more radiation it emits per second, and the shorter the wavelength at which the intensity peaks. A perfect black body absorbs all radiation that falls on it — so it is also the best possible emitter.',
  colour(T) { if (T < 800) return 'rgb(30,20,20)'; const t = clamp((T - 800) / 5200, 0, 1); const r = 255, g = Math.round(60 + 190 * Math.min(1, t * 1.6)), b = Math.round(Math.max(0, 255 * (t - 0.35) / 0.65)); return `rgb(${r},${g},${b})`; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const T = st.p.T, cx = W * 0.14, cy = H * 0.45, r = Math.min(52, W * 0.1), col = this.colour(T);
    if (T >= 800) { const gr = c.createRadialGradient(cx, cy, r * 0.6, cx, cy, r * 1.9); gr.addColorStop(0, col.replace('rgb', 'rgba').replace(')', ',0.6)')); gr.addColorStop(1, 'rgba(255,200,120,0)'); c.fillStyle = gr; c.beginPath(); c.arc(cx, cy, r * 1.9, 0, 7); c.fill(); }
    CV.circle(c, cx, cy, r, col, C.ink, 1.5); CV.text(c, T + ' K', cx, cy + r + 30, C.ink, 12, 'center', 700);
    const planck = (lam, T) => 1 / (lam ** 5 * (Math.exp(1.4388e-2 / (lam * T)) - 1)), norm = planck(2.898e-3 / T, T), lpk = 2.898e-3 / T * 1e9, xmax = Math.max(3000, Math.ceil(lpk * 5 / 1000) * 1000);
    const b = { x: W * 0.32, y: 30, w: W * 0.64, h: H - 90 };
    const g2 = CV.plot(c, C, b, { xr: [0, xmax], yr: [0, 1.1], xl: 'wavelength / nm', yl: 'intensity (dashed: 3000 K and 5000 K)', series: [3000, 5000].filter(x => x !== T).map(TT => ({ f: l => planck(l * 1e-9, TT) / norm, col: hexA(C.muted, .45), w: 1, dash: [4, 4] })).concat([{ f: l => planck(l * 1e-9, T) / norm, col: C.u1, w: 2.6 }]) });
    const vx0 = g2.X(400), vx1 = g2.X(700), gr = c.createLinearGradient(vx0, 0, vx1, 0); ['#5E35B1', '#1E88E5', '#43A047', '#FDD835', '#FB8C00', '#E53935'].forEach((cc, k) => gr.addColorStop(k / 5, cc)); c.fillStyle = gr; c.globalAlpha = 0.35; c.fillRect(vx0, b.y, vx1 - vx0, b.h); c.globalAlpha = 1; if (vx1 - vx0 > 8) CV.text(c, 'visible', (vx0 + vx1) / 2, b.y + b.h - 10, C.ink, 10, 'center');
    CV.line(c, g2.X(lpk), b.y + b.h, g2.X(lpk), g2.Y(1), C.u1, 1, [3, 3]); CV.mono(c, 'peak', g2.X(lpk) + 4, g2.Y(1) - 8, C.u1, 10.5);
  },
  read(st) { const T = st.p.T, lp = 2.898e-3 / T * 1e9; return [lp >= 1000 ? (lp / 1000).toFixed(1) + ' μm' : lp.toFixed(0) + ' nm', T < 800 ? 'not glowing (emits infrared only)' : T < 1500 ? 'dull red' : T < 3500 ? 'orange' : T < 5500 ? 'yellow-white' : 'white / bluish white', '× ' + ((T / 300) ** 4).toFixed(0), lp > 700 ? 'infrared' : lp > 400 ? 'visible' : 'ultraviolet']; }
};

/* ---------- 6.3 Temperature balance of the Earth ---------- */
SIMS.balance = {
  title: 'Radiation balance and temperature', h: 440,
  controls: [
    { id: 'S', label: 'Incoming radiation (sunlight)', min: 60, max: 140, step: 5, value: 100, fmt: v => v + '%' },
    { id: 'alb', label: 'Reflected straight back (clouds, ice)', min: 10, max: 60, step: 1, value: 30, fmt: v => v + '%' },
    { id: 'gh', label: 'Greenhouse gases (radiation absorbed by the atmosphere)', min: 0, max: 100, step: 1, value: 78, fmt: v => v + '%' },
    { type: 'button', act: 'cold', label: 'Start cold' }
  ],
  readouts: ['Radiation absorbed', 'Radiation emitted to space', 'Temperature', 'State'],
  note: 'A body heats up while it absorbs radiation faster than it emits it. As it gets hotter it emits more, until absorbing and emitting rates are equal — a constant temperature. The Earth’s temperature depends on how much radiation is reflected (more ice → cooler) and how much emitted radiation the atmosphere absorbs (more greenhouse gases → warmer).',
  k(p, T) { const inn = 1361 * p.S / 100 * (1 - p.alb / 100) / 4, out = 5.67e-8 * T ** 4 * (1 - p.gh / 200); return { inn, out }; },
  init(st) { st.T = 288; st.hist = [[0, 288]]; st.tt = 0; },
  action(st, a) { if (a === 'cold') { st.T = 200; st.hist = [[0, 200]]; st.tt = 0; } },
  change(st) { st.hist = [[0, st.T]]; st.tt = 0; },
  step(st, dt) { const { inn, out } = this.k(st.p, st.T); st.T += (inn - out) * dt * 0.12; st.tt += dt; if (st.tt - st.hist[st.hist.length - 1][0] > 0.1 && st.tt < 40) st.hist.push([st.tt, st.T]); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, { inn, out } = this.k(p, st.T), R = Math.min(64, W * 0.12), cx = Math.max(W * 0.22, R + 20), cy = H * 0.6;
    c.fillStyle = hexA(C.u6, .12); c.beginPath(); c.arc(cx, cy, R + 24, 0, 7); c.fill(); const tc = clamp((st.T - 230) / 100, 0, 1); CV.circle(c, cx, cy, R, `rgb(${Math.round(60 + 190 * tc)},${Math.round(130 - 20 * tc)},${Math.round(200 - 150 * tc)})`, C.ink, 1.5);
    CV.mono(c, (st.T - 273).toFixed(1) + ' °C', cx, cy, '#fff', 13, 'center');
    const top = 44; CV.arrow(c, cx - R, top, cx - R * 0.55, cy - R * 0.85, '#E3A21A', 1.5 + inn / 60); CV.text(c, 'in', cx - R, top - 12, '#B77F0B', 11, 'center', 700);
    CV.arrow(c, cx - R * 0.15, cy - R - 4, cx, top, hexA('#E3A21A', .7), 1 + p.alb / 15); CV.text(c, 'reflected', cx, top - 26, C.muted, 10.5, 'center');
    CV.arrow(c, cx + R * 0.55, cy - R * 0.85, cx + R, top, C.u1, 1.5 + out / 60); CV.text(c, 'IR out', cx + R, top - 12, C.u1, 11, 'center', 700);
    const b = { x: W * 0.46, y: 30, w: W * 0.5, h: H - 90 };
    CV.plot(c, C, b, { xr: [0, 40], yr: [190, 340], xl: 'time', yl: 'temperature / K', series: [{ f: () => 288, col: hexA(C.muted, .5), w: 1, dash: [4, 4] }, { pts: st.hist.concat([[Math.min(st.tt, 40), st.T]]), col: C.u1, w: 2.4 }] });
  },
  read(st) { const { inn, out } = this.k(st.p, st.T), d = inn - out; return [inn.toFixed(0) + ' W/m²', out.toFixed(0) + ' W/m²', st.T.toFixed(0) + ' K (' + (st.T - 273).toFixed(0) + ' °C)', Math.abs(d) < 1 ? 'balanced — constant temperature' : d > 0 ? 'absorbing faster → warming' : 'emitting faster → cooling']; }
};

/* ---------- 7.1 Magnetic fields ---------- */
SIMS.magfield = {
  title: 'Magnetic field patterns', h: 440,
  controls: [
    { id: 'cfg', type: 'seg', label: 'Arrangement', value: 'one', options: [['one', 'Bar magnet'], ['att', 'N facing S (attract)'], ['rep', 'N facing N (repel)']] },
    { id: 'lines', type: 'seg', label: 'Show', value: 1, options: [[1, 'Field lines'], [0, 'Compasses only']] }
  ],
  readouts: ['Force between the magnets', 'Field at the compass', 'Field strength (relative)', 'Tip'],
  note: 'Field lines go from the north pole to the south pole — the direction a compass needle points. Lines closest together = strongest field, at the poles. Unlike poles attract; like poles repel. Move the pointer over the field to place the red compass.',
  poles(p, W, H) { const cy = H / 2, L = Math.min(W * 0.12, 60); if (p.cfg === 'one') return [[W / 2 + L, cy, 1], [W / 2 - L, cy, -1]]; const g = W * 0.08; const a = [[W / 2 - g, cy, 1], [W / 2 - g - 2 * L, cy, -1]]; return p.cfg === 'att' ? a.concat([[W / 2 + g, cy, -1], [W / 2 + g + 2 * L, cy, 1]]) : a.concat([[W / 2 + g, cy, 1], [W / 2 + g + 2 * L, cy, -1]]); },
  B(ps, x, y) { let bx = 0, by = 0; ps.forEach(([px, py, q]) => { const dx = x - px, dy = y - py, r2 = dx * dx + dy * dy + 30, r = Math.sqrt(r2); bx += q * dx / (r2 * r) * 1e4; by += q * dy / (r2 * r) * 1e4; }); return [bx, by]; },
  init(st) { st.mx = null; },
  pointer(type, x, y, st) { if (type === 'move' || type === 'drag' || type === 'down') { st.mx = x; st.my = y; } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, ps = this.poles(p, W, H);
    if (p.lines) { const starts = []; ps.filter(q => q[2] > 0).forEach(([px, py]) => { for (let k = 0; k < 14; k++) { const a = k / 14 * 2 * Math.PI + 0.1; starts.push([px + 8 * Math.cos(a), py + 8 * Math.sin(a)]); } });
      starts.forEach(([x, y]) => { c.strokeStyle = hexA(C.u6, .7); c.lineWidth = 1.3; c.beginPath(); c.moveTo(x, y); let mid = null; for (let i = 0; i < 900; i++) { const [bx, by] = this.B(ps, x, y), m = Math.hypot(bx, by); if (!m) break; x += bx / m * 3; y += by / m * 3; c.lineTo(x, y); if (i === 60) mid = [x, y, bx / m, by / m]; if (x < -20 || x > W + 20 || y < -20 || y > H + 20) break; if (ps.some(([px, py, q]) => q < 0 && Math.hypot(x - px, y - py) < 7)) break; } c.stroke(); if (mid) { const [mx, my, ux, uy] = mid; c.fillStyle = C.u6; c.beginPath(); c.moveTo(mx + ux * 5, my + uy * 5); c.lineTo(mx - ux * 4 - uy * 4, my - uy * 4 + ux * 4); c.lineTo(mx - ux * 4 + uy * 4, my - uy * 4 - ux * 4); c.closePath(); c.fill(); } }); }
    // magnets
    for (let i = 0; i < ps.length; i += 2) { const pr = ps.slice(i, i + 2).sort((a, b) => b[2] - a[2]), [nx, ny, q1] = pr[0], [sx] = pr[1]; const x0 = Math.min(nx, sx) - 10, w = Math.abs(nx - sx) + 20; const nLeft = nx < sx; CV.rrect(c, x0, ny - 14, w / 2, 28, 3, nLeft ? C.u1 : C.u4); CV.rrect(c, x0 + w / 2, ny - 14, w / 2, 28, 3, nLeft ? C.u4 : C.u1); CV.text(c, nLeft ? 'N' : 'S', x0 + w / 4, ny, '#fff', 13, 'center', 800); CV.text(c, nLeft ? 'S' : 'N', x0 + 3 * w / 4, ny, '#fff', 13, 'center', 800); void q1; }
    // compass grid
    const comp = (x, y, r, hl) => { const [bx, by] = this.B(ps, x, y), a = Math.atan2(by, bx); CV.circle(c, x, y, r, hl ? C.surface : hexA(C.surface, .8), C.ink, 1); c.save(); c.translate(x, y); c.rotate(a); c.fillStyle = C.u1; c.beginPath(); c.moveTo(r - 2, 0); c.lineTo(0, -3); c.lineTo(0, 3); c.fill(); c.fillStyle = C.muted; c.beginPath(); c.moveTo(-r + 2, 0); c.lineTo(0, -3); c.lineTo(0, 3); c.fill(); c.restore(); };
    if (!p.lines) for (let x = 30; x < W; x += 50) for (let y = 30; y < H; y += 50) { if (ps.some(([px, py]) => Math.abs(y - py) < 24 && Math.abs(x - px) < 40)) continue; comp(x, y, 9); }
    const mx = st.mx ?? W / 2 + Math.cos(st.t * 0.5) * W * 0.3, my = st.my ?? H / 2 + Math.sin(st.t * 0.5) * H * 0.33; comp(mx, my, 16, true);
  },
  read(st) { const W = st.W || 600, H = st.H || 440, ps = this.poles(st.p, W, H), mx = st.mx ?? W / 2 + Math.cos(st.t * 0.5) * W * 0.3, my = st.my ?? H / 2 + Math.sin(st.t * 0.5) * H * 0.33, [bx, by] = this.B(ps, mx, my), m = Math.hypot(bx, by), a = Math.atan2(-by, bx) / deg;
    return [st.p.cfg === 'one' ? '—' : st.p.cfg === 'att' ? 'attract' : 'repel', 'points ' + ['→ east', '↗', '↑ north', '↖', '← west', '↙', '↓ south', '↘'][Math.round(((a + 360) % 360) / 45) % 8], m.toFixed(2), st.p.cfg === 'rep' ? 'a neutral point sits between like poles' : 'strongest near the poles']; }
};

/* ---------- 7.1 Solenoid and electromagnet ---------- */
SIMS.solenoid = {
  title: 'Solenoids and electromagnets', h: 420,
  controls: [
    { id: 'I', label: 'Current', min: -3, max: 3, step: 0.5, value: 2, fmt: v => v.toFixed(1) + ' A' },
    { id: 'N', label: 'Number of turns', min: 5, max: 20, step: 1, value: 10, fmt: v => v },
    { id: 'core', type: 'seg', label: 'Core', value: 1, options: [[0, 'Air'], [1, 'Iron core']] }
  ],
  readouts: ['Field strength (relative)', 'North pole at', 'Paper clips held', 'Switch off'],
  note: 'Inside a solenoid the field is strong and uniform; outside it looks like a bar magnet’s field. The field is stronger with more current, more turns, or an iron core — an electromagnet. Reversing the current reverses the poles. Turn the current to zero and the soft iron core loses its magnetism.',
  B(p) { return Math.abs(p.I) * p.N * (p.core ? 40 : 1) / 20; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, cx = W / 2, cy = H * 0.42, L = Math.min(W * 0.5, 280), r = 40, B = this.B(p), dir = Math.sign(p.I) || 0;
    if (p.core) CV.rrect(c, cx - L / 2 - 10, cy - r + 10, L + 20, 2 * r - 20, 4, '#9AA3AC', C.ink, 1);
    // field lines
    if (dir) { const nl = clamp(Math.round(1 + B / 20), 1, 5); for (let k = 1; k <= nl; k++) { const off = k * (r - 12) / (nl + 0.5); [-1, 1].forEach(s => { c.strokeStyle = hexA(C.u6, .8); c.lineWidth = 1.4; c.beginPath(); c.moveTo(cx - L / 2, cy + s * off * 0.5); c.lineTo(cx + L / 2, cy + s * off * 0.5); c.bezierCurveTo(cx + L / 2 + 60 + k * 20, cy + s * off * 0.5, cx + L / 2 + 40 + k * 20, cy + s * (r + 30 + k * 22), cx, cy + s * (r + 30 + k * 22)); c.bezierCurveTo(cx - L / 2 - 40 - k * 20, cy + s * (r + 30 + k * 22), cx - L / 2 - 60 - k * 20, cy + s * off * 0.5, cx - L / 2, cy + s * off * 0.5); c.stroke(); CV.arrow(c, cx - 10 * dir, cy + s * off * 0.5, cx + 10 * dir, cy + s * off * 0.5, C.u6, 1.4, 6); }); } }
    // coil
    for (let i = 0; i < p.N; i++) { const x = cx - L / 2 + (i + 0.5) * L / p.N; c.strokeStyle = '#B87333'; c.lineWidth = 3; c.beginPath(); c.ellipse(x, cy, 6, r, 0, 0, 2 * Math.PI); c.stroke(); }
    const yb = H - 44, xa = cx + L / 4; CS.gaps(c, W, H, [[cx, yb, CS.HALF.cell], [xa, yb, CS.HALF.meter]], () => CS.wire(c, [[cx - L / 2 + 0.5 * L / p.N, cy + r], [cx - L / 2 + 0.5 * L / p.N, yb], [cx + L / 2 - 0.5 * L / p.N, yb], [cx + L / 2 - 0.5 * L / p.N, cy + r]], C.ink));
    CS.cell(c, cx, yb, C.ink, false, p.I < 0); CS.meter(c, xa, yb, 'A', C.ink, C.surface); CS.tag(c, C, Math.abs(p.I).toFixed(1) + ' A', xa, yb + 26);
    if (dir) { CV.text(c, dir > 0 ? 'N' : 'S', cx + L / 2 + 26, cy, C.u1, 20, 'center', 800); CV.text(c, dir > 0 ? 'S' : 'N', cx - L / 2 - 26, cy, C.u4, 20, 'center', 800); }
    const clips = Math.min(12, Math.floor(B / 6)); for (let i = 0; i < clips; i++) { const x = cx + L / 2 + 44 + (i % 3) * 10, y = cy + 14 + Math.floor(i / 3) * 16; c.strokeStyle = C.muted; c.lineWidth = 1.5; c.beginPath(); c.ellipse(x, y, 4, 7, 0, 0, 7); c.stroke(); }
  },
  read(st) { const p = st.p, B = this.B(p), dir = Math.sign(p.I); return [B.toFixed(1), dir ? (dir > 0 ? 'right-hand end' : 'left-hand end') : '—', Math.min(12, Math.floor(B / 6)), 'the core loses its magnetism']; }
};

/* ---------- 7.2 The motor effect ---------- */
SIMS.motor = {
  title: 'The motor effect and electric motors', h: 440,
  controls: [
    { id: 'mode', type: 'seg', label: 'Show', value: 'wire', options: [['wire', 'Wire in a field (F = BIl)'], ['motor', 'Electric motor']] },
    { id: 'B', label: 'Magnetic flux density B', min: 0.05, max: 0.5, step: 0.05, value: 0.2, fmt: v => v.toFixed(2) + ' T' },
    { id: 'I', label: 'Current I', min: -5, max: 5, step: 0.5, value: 3, fmt: v => v.toFixed(1) + ' A' },
    { id: 'l', label: 'Length of wire in the field l', min: 0.05, max: 0.3, step: 0.05, value: 0.1, fmt: v => v.toFixed(2) + ' m' }
  ],
  readouts: ['Force F = BIl', 'Direction of force', 'Fleming’s left-hand rule', 'To increase the force'],
  note: 'A current-carrying wire at right angles to a magnetic field feels a force. Fleming’s left-hand rule: First finger = Field (N → S), seCond finger = Current, thuMb = Motion (force). In a motor, the forces on the two sides of the coil act in opposite directions, making it rotate; the split-ring commutator reverses the current every half turn to keep it turning the same way.',
  init(st) { st.a = 0; st.w = 0; st.y = 0; st.vy = 0; },
  change(st) { this.init(st); },
  step(st, dt) { const p = st.p, F = p.B * p.I * p.l; if (p.mode === 'motor') { const tq = Math.abs(F) * Math.abs(Math.cos(st.a)) * Math.sign(p.I) * 60; st.w += (tq - st.w * 0.9) * dt; st.a -= st.w * dt; } else { st.y = clamp(st.y + F * 200 * dt, -60, 60); if (Math.abs(st.y) >= 60) st.y = 0; } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, F = p.B * p.I * p.l, cx = W / 2, cy = H * 0.46;
    if (p.mode === 'wire') {
      CV.rrect(c, cx - 170, cy - 70, 70, 140, 6, C.u1); CV.text(c, 'N', cx - 135, cy, '#fff', 22, 'center', 800); CV.rrect(c, cx + 100, cy - 70, 70, 140, 6, C.u4); CV.text(c, 'S', cx + 135, cy, '#fff', 22, 'center', 800);
      const fl = Math.round(3 + p.B * 12); for (let k = 0; k < fl; k++) { const y = cy - 60 + (k + 0.5) * 120 / fl; CV.arrow(c, cx - 96, y, cx + 96, y, hexA(C.u6, .5), 1.2, 6); }
      const wy = cy - st.y; CV.circle(c, cx, wy, 16, C.surface, C.ink, 2.5); if (p.I < 0) { CV.line(c, cx - 8, wy - 8, cx + 8, wy + 8, C.ink, 2.5); CV.line(c, cx - 8, wy + 8, cx + 8, wy - 8, C.ink, 2.5); } else if (p.I > 0) CV.circle(c, cx, wy, 4, C.ink);
      if (Math.abs(F) > 0.001) CV.arrow(c, cx + 26, wy, cx + 26, wy - Math.sign(F) * (24 + Math.abs(F) * 120), C.bad, 3.5);
      CV.text(c, p.I > 0 ? '⊙ current out of the screen' : p.I < 0 ? '⊗ current into the screen' : 'no current', cx, H - 24, C.muted, 12, 'center');
    } else {
      const R = Math.min(W * 0.2, 100), ang = st.a; CV.rrect(c, cx - R - 90, cy - 70, 50, 140, 6, C.u1); CV.text(c, 'N', cx - R - 65, cy, '#fff', 20, 'center', 800); CV.rrect(c, cx + R + 40, cy - 70, 50, 140, 6, C.u4); CV.text(c, 'S', cx + R + 65, cy, '#fff', 20, 'center', 800);
      for (let k = 0; k < 5; k++) { const y = cy - 56 + k * 28; CV.line(c, cx - R - 36, y, cx + R + 36, y, hexA(C.u6, .3), 1, [4, 4]); }
      CV.circle(c, cx, cy, R, null, hexA(C.muted, .4), 1); CV.text(c, 'coil seen end-on', cx, cy + R + 16, C.muted, 10.5, 'center');
      const A = [cx + R * Math.cos(ang), cy - R * Math.sin(ang)], B = [cx - R * Math.cos(ang), cy + R * Math.sin(ang)]; CV.line(c, A[0], A[1], B[0], B[1], '#B87333', 4);
      const L = A[0] < B[0] ? A : B, Rr = A[0] < B[0] ? B : A, s = Math.sign(p.I);
      [[L, s > 0], [Rr, s < 0]].forEach(([q, out]) => { CV.circle(c, q[0], q[1], 11, C.surface, C.ink, 2); if (!s) return; if (out) CV.circle(c, q[0], q[1], 3.5, C.ink); else { CV.line(c, q[0] - 6, q[1] - 6, q[0] + 6, q[1] + 6, C.ink, 2); CV.line(c, q[0] - 6, q[1] + 6, q[0] + 6, q[1] - 6, C.ink, 2); } });
      if (s) { CV.arrow(c, L[0] - 18, L[1], L[0] - 18, L[1] - s * 40, C.bad, 3); CV.arrow(c, Rr[0] + 18, Rr[1], Rr[0] + 18, Rr[1] + s * 40, C.bad, 3); }
      const cy2 = H - 50, cr = 16; c.strokeStyle = C.ink; c.lineWidth = 6; c.beginPath(); c.arc(cx, cy2, cr, -ang + 0.25, -ang + Math.PI - 0.25); c.stroke(); c.beginPath(); c.arc(cx, cy2, cr, -ang + Math.PI + 0.25, -ang + 2 * Math.PI - 0.25); c.stroke();
      CV.rrect(c, cx - cr - 14, cy2 - 5, 10, 10, 2, '#555'); CV.rrect(c, cx + cr + 4, cy2 - 5, 10, 10, 2, '#555'); CV.text(c, 'split-ring commutator', cx + cr + 24, cy2, C.muted, 11);
      CV.text(c, 'rotation speed ≈ ' + Math.abs(st.w).toFixed(1) + ' rad/s', cx, 20, C.ink, 12, 'center', 600);
    }
  },
  read(st) { const p = st.p, F = p.B * p.I * p.l; return [Math.abs(F).toFixed(3) + ' N', F > 0 ? 'upwards' : F < 0 ? 'downwards' : 'no force', p.mode === 'wire' ? (p.I >= 0 ? 'field →, current ⊙ out ⇒ force ↑' : 'field →, current ⊗ in ⇒ force ↓') : 'forces on the two sides are opposite', 'more current, stronger field, longer wire']; }
};

/* ---------- 7.3 Induced potential (generator effect) ---------- */
SIMS.induction = {
  title: 'Magnet and coil: induced potential', h: 440, substeps: 4,
  controls: [
    { id: 'N', label: 'Turns on the coil', min: 50, max: 800, step: 50, value: 300, fmt: v => v },
    { id: 'sp', label: 'Speed of the magnet', min: 0, max: 3, step: 0.2, value: 1, fmt: v => v.toFixed(1) + ' (relative)' },
    { id: 'pole', type: 'seg', label: 'Pole entering first', value: 1, options: [[1, 'North'], [-1, 'South']] }
  ],
  readouts: ['Induced p.d. (relative)', 'Magnet', 'Coil end nearest the magnet', 'Induced field'],
  note: 'Moving a magnet into or out of a coil changes the magnetic field through it and induces a potential difference — a current flows if the circuit is complete. No movement, no p.d. Pulling the magnet out gives the opposite direction. Faster movement, more turns or a stronger magnet → a larger p.d. The induced current’s field always opposes the change that caused it.',
  init(st) { st.x = -2.2; st.hist = []; st.tt = 0; st.emf = 0; },
  change(st, id) { if (id !== 'sp') this.init(st); },
  step(st, dt) { const p = st.p; st.x += p.sp * dt; if (st.x > 2.2) { st.x = -2.2; st.hist = []; st.tt = 0; } st.tt += dt; const u = st.x / 0.35; st.emf = -p.N * p.pole / 300 * 3 * u / 0.35 / Math.pow(1 + u * u, 2.5) * p.sp * 0.4; st.hist.push([st.tt, st.emf]); if (st.hist.length > 4000) st.hist.shift(); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const cy = H * 0.28, cx = W / 2, sc = W / 5;
    const turns = Math.round(st.p.N / 50) + 3; for (let i = 0; i < turns; i++) { const x = cx - 50 + i * 100 / turns; c.strokeStyle = '#B87333'; c.lineWidth = 3; c.beginPath(); c.ellipse(x, cy, 8, 46, 0, 0, Math.PI * 2); c.stroke(); }
    const mx = cx + st.x * sc, nf = st.p.pole === 1; CV.rrect(c, mx - 70, cy - 16, 70, 32, 4, nf ? C.u4 : C.u1); CV.rrect(c, mx, cy - 16, 70, 32, 4, nf ? C.u1 : C.u4); CV.text(c, nf ? 'S' : 'N', mx - 35, cy, '#fff', 14, 'center', 700); CV.text(c, nf ? 'N' : 'S', mx + 35, cy, '#fff', 14, 'center', 700);
    const gx = cx + 130, gy = 42; CV.line(c, cx - 50, cy - 46, cx - 50, gy, '#B87333', 1.5); CV.line(c, cx - 50, gy, gx - 26, gy, '#B87333', 1.5); CV.line(c, cx + 50, cy - 46, cx + 50, gy + 14, '#B87333', 1.5); CV.line(c, cx + 50, gy + 14, gx - 22, gy + 14, '#B87333', 1.5); CV.circle(c, gx, gy, 26, C.surface, C.ink, 1.5); const ang = clamp(st.emf * 0.5, -1.2, 1.2); CV.line(c, gx, gy + 16, gx + Math.sin(ang) * 22, gy + 16 - Math.cos(ang) * 22, C.bad, 2.2); CV.mono(c, '0', gx, gy - 17, C.muted, 9, 'center'); CV.text(c, 'meter', gx, gy + 36, C.muted, 10, 'center');
    const me = Math.max(1, ...st.hist.map(h => Math.abs(h[1]))) * 1.1, tmax = st.p.sp ? 4.4 / st.p.sp : 5;
    CV.plot(c, C, { x: 50, y: H * 0.56, w: W - 90, h: H * 0.34 }, { xr: [0, tmax], yr: [-me, me], xl: 'time', yl: 'induced p.d.', series: [{ pts: st.hist, col: C.u1, w: 2.2 }] });
  },
  read(st) { const p = st.p, entering = st.x < 0, lead = p.pole === 1 ? 'N' : 'S'; return [st.emf.toFixed(2), p.sp === 0 ? 'stationary → no p.d.' : entering ? 'moving into the coil' : 'moving out of the coil', p.sp === 0 ? '—' : entering ? 'left end becomes ' + lead + ' (repels)' : 'right end becomes ' + lead + ' (attracts)', p.sp === 0 ? 'none' : 'opposes the motion']; }
};

/* ---------- 7.3 Alternators and dynamos ---------- */
SIMS.generator = {
  title: 'Alternator and dynamo', h: 440,
  controls: [
    { id: 'type', type: 'seg', label: 'Generator', value: 'alt', options: [['alt', 'Alternator (slip rings)'], ['dyn', 'Dynamo (split ring)']] },
    { id: 'f', label: 'Rotations per second', min: 0.2, max: 2, step: 0.1, value: 0.5, fmt: v => v.toFixed(1) + ' Hz' },
    { id: 'B', type: 'seg', label: 'Magnets', value: 1, options: [[1, 'Normal'], [2, 'Stronger']] }
  ],
  readouts: ['Peak p.d. (relative)', 'Frequency of output', 'Output', 'p.d. is maximum when'],
  note: 'Rotating a coil in a magnetic field induces a potential difference. An alternator uses slip rings and gives alternating current (a.c.). A dynamo uses a split-ring commutator so the output never changes direction: direct current (d.c.) that varies. Spinning faster increases both the peak p.d. and the frequency.',
  init(st) { st.a = 0; st.hist = []; st.tt = 0; },
  change(st) { this.init(st); },
  step(st, dt) { const p = st.p; st.a += 2 * Math.PI * p.f * dt; st.tt += dt; let v = p.B * p.f * Math.sin(st.a); if (p.type === 'dyn') v = Math.abs(v); st.hist.push([st.tt, v]); st.hist = st.hist.filter(h => h[0] > st.tt - 4); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, cx = W / 2, cy = H * 0.26, R = Math.min(70, W * 0.14);
    CV.rrect(c, cx - R - 70, cy - 50, 44, 100, 6, C.u1); CV.text(c, 'N', cx - R - 48, cy, '#fff', 18, 'center', 800); CV.rrect(c, cx + R + 26, cy - 50, 44, 100, 6, C.u4); CV.text(c, 'S', cx + R + 48, cy, '#fff', 18, 'center', 800);
    const x1 = cx + R * Math.cos(st.a), x2 = cx - R * Math.cos(st.a), d = 12 * Math.sin(st.a); c.strokeStyle = '#B87333'; c.lineWidth = 5; c.beginPath(); c.moveTo(x1, cy - 40 - d); c.lineTo(x2, cy - 40 + d); c.lineTo(x2, cy + 40 + d); c.lineTo(x1, cy + 40 - d); c.stroke();
    const b = { x: 50, y: H * 0.56, w: W - 90, h: H * 0.34 };
    CV.plot(c, C, b, { xr: [st.tt - 4, st.tt], yr: [-4.4, 4.4], xl: 'time', yl: 'output p.d.', series: [{ pts: st.hist, col: C.u1, w: 2.4 }] });
    CV.text(c, p.type === 'alt' ? 'slip rings → a.c.' : 'split ring → d.c.', cx, cy + 70, C.muted, 11.5, 'center');
  },
  read(st) { const p = st.p; return [(p.B * p.f).toFixed(2), p.type === 'alt' ? p.f.toFixed(1) + ' Hz' : 'n/a (d.c.)', p.type === 'alt' ? 'alternating current' : 'direct current (varying)', 'the coil sides cut the field fastest']; }
};

/* ---------- 7.3 Transformers ---------- */
SIMS.transformer = {
  title: 'Transformers', h: 420,
  controls: [
    { id: 'Vp', label: 'Primary p.d. Vₚ', min: 10, max: 240, step: 10, value: 230, fmt: v => v + ' V' },
    { id: 'np', label: 'Primary turns nₚ', min: 50, max: 2000, step: 50, value: 1000, fmt: v => v },
    { id: 'ns', label: 'Secondary turns nₛ', min: 50, max: 2000, step: 50, value: 50, fmt: v => v },
    { id: 'R', label: 'Load resistance', min: 2, max: 200, step: 2, value: 20, fmt: v => v + ' Ω' }
  ],
  readouts: ['Secondary p.d. V<sub>s</sub> = V<sub>p</sub> × n<sub>s</sub> ÷ n<sub>p</sub>', 'Type', 'Secondary current I<sub>s</sub>', 'Primary current I<sub>p</sub> (V<sub>s</sub>I<sub>s</sub> = V<sub>p</sub>I<sub>p</sub>)'],
  note: 'An alternating current in the primary coil makes a changing magnetic field in the iron core, which induces an alternating p.d. across the secondary. Vp ÷ Vs = np ÷ ns. For a 100% efficient transformer, power in = power out, so stepping the voltage up steps the current down — that is why the National Grid uses high voltages.',
  k(p) { const Vs = p.Vp * p.ns / p.np, Is = Vs / p.R, Ip = Vs * Is / p.Vp; return { Vs, Is, Ip }; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, k = this.k(p), cx = W / 2, cy = H * 0.45, cw = Math.min(W * 0.4, 220), ch = 180;
    c.strokeStyle = '#8C949C'; c.lineWidth = 26; c.strokeRect(cx - cw / 2, cy - ch / 2, cw, ch); CV.text(c, 'iron core', cx, cy - ch / 2 - 24, C.muted, 11, 'center');
    const coil = (x, n, col) => { const t = clamp(Math.round(n / 100), 2, 20), sp = Math.min(10, (ch - 40) / (t - 1)), y0 = cy - sp * (t - 1) / 2; for (let i = 0; i < t; i++) { c.strokeStyle = col; c.lineWidth = 3; c.beginPath(); c.ellipse(x, y0 + i * sp, 22, 5, 0, 0, 7); c.stroke(); } return [y0, y0 + sp * (t - 1)]; };
    const [pt, pb] = coil(cx - cw / 2, p.np, '#B87333'), [st2, sb] = coil(cx + cw / 2, p.ns, '#C0392B');
    const ph = Math.sin(st.t * 4); CV.text(c, 'primary', cx - cw / 2 + 10, cy + ch / 2 + 26, C.ink, 11.5, 'center', 700); CV.text(c, 'secondary', cx + cw / 2, cy + ch / 2 + 26, C.ink, 11.5, 'center', 700);
    const xl = cx - cw / 2, xr = cx + cw / 2, yt = cy - ch / 2 + 16, ybt = cy + ch / 2 - 16, xs = xl - 34 - Math.min(44, (W - cw) / 5), xL = xr + 34 + Math.min(44, (W - cw) / 5);
    CS.gaps(c, W, H, [[xs, cy, 16, true], [xL, cy, CS.HALF.lamp, true]], () => { CS.wire(c, [[xl - 22, pt], [xl - 34, pt], [xl - 34, yt], [xs, yt], [xs, ybt], [xl - 34, ybt], [xl - 34, pb], [xl - 22, pb]], C.ink); CS.wire(c, [[xr + 22, st2], [xr + 34, st2], [xr + 34, yt], [xL, yt], [xL, ybt], [xr + 34, ybt], [xr + 34, sb], [xr + 22, sb]], C.ink); });
    CV.circle(c, xs, cy, 16, C.surface, C.ink, 2); c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); for (let i = 0; i <= 20; i++) { const u = -9 + i * 0.9; c.lineTo(xs + u, cy - 5 * Math.sin(u / 9 * Math.PI)); } c.stroke();
    CS.tag(c, C, p.Vp + ' V a.c.', Math.max(xs, 44), ybt + 34); CS.tag(c, C, k.Vs.toFixed(1) + ' V', Math.min(xL, W - 40), yt - 22, 'center', C.bad);
    for (let i = 0; i < 6; i++) { const f = ((st.t * 0.6 + i / 6) % 1), per = 2 * (cw + ch), d = f * per; let x, y; if (d < cw) { x = cx - cw / 2 + d; y = cy - ch / 2; } else if (d < cw + ch) { x = cx + cw / 2; y = cy - ch / 2 + d - cw; } else if (d < 2 * cw + ch) { x = cx + cw / 2 - (d - cw - ch); y = cy + ch / 2; } else { x = cx - cw / 2; y = cy + ch / 2 - (d - 2 * cw - ch); } CV.circle(c, x, y, 3, hexA(C.u6, 0.4 + 0.5 * Math.abs(ph))); }
    CS.lamp(c, xL, cy, C.ink, C.surface, clamp(k.Vs * k.Is / 200, 0, 1));
  },
  read(st) { const p = st.p, k = this.k(p); return [k.Vs.toFixed(1) + ' V', p.ns > p.np ? 'step-up' : p.ns < p.np ? 'step-down' : 'neither (1 : 1)', k.Is.toFixed(2) + ' A', k.Ip.toFixed(3) + ' A']; }
};

/* ---------- 8.1 Life cycle of a star ---------- */
const STAR_LIFE = {
  sun: [['Nebula', 'A cloud of dust and gas (mainly hydrogen) is pulled together by gravity.', 0.5, '#8E7CC3', 60], ['Protostar', 'Gravity squashes the cloud; it gets hotter until fusion can start.', 0.7, '#E57373', 26], ['Main sequence star', 'Hydrogen nuclei fuse into helium. Outward pressure from fusion energy balances the inward pull of gravity — the star is stable for billions of years.', 1, '#FFD54F', 24], ['Red giant', 'Hydrogen runs low; the star swells and cools. Helium fuses into heavier elements such as carbon.', 1, '#EF6C00', 64], ['White dwarf', 'The outer layers drift away. The hot, dense core remains and shines white.', 1, '#E3F2FD', 10], ['Black dwarf', 'The white dwarf cools until it no longer emits significant energy.', 1, '#37474F', 10]],
  big: [['Nebula', 'A cloud of dust and gas (mainly hydrogen) is pulled together by gravity.', 0.5, '#8E7CC3', 70], ['Protostar', 'Gravity squashes the cloud; it gets hotter until fusion can start.', 0.7, '#E57373', 32], ['Main sequence star', 'Hydrogen fuses into helium. Much bigger stars use up their fuel much faster.', 1, '#90CAF9', 34], ['Red super giant', 'The star swells enormously. Fusion makes heavier elements, up to iron.', 1, '#E53935', 80], ['Supernova', 'The star explodes. Elements heavier than iron are made and all the elements are spread through the universe.', 1, '#FFF59D', 90], ['Neutron star or black hole', 'The remaining core collapses to a neutron star — or, for the most massive stars, a black hole from which not even light escapes.', 1, '#263238', 12]]
};
SIMS.starlife = {
  title: 'Life cycle of a star', h: 420,
  controls: [{ id: 'm', type: 'seg', label: 'Mass of star', value: 'sun', options: [['sun', 'About the same as the Sun'], ['big', 'Much more massive than the Sun']] }, { type: 'button', act: 'next', label: 'Next stage →' }, { type: 'button', act: 'back', label: '← Back' }],
  readouts: ['Stage', 'What happens', 'Elements', 'Forces'],
  note: 'Every star forms from a nebula. What happens at the end depends on its mass. Fusion inside stars makes all naturally occurring elements up to iron; elements heavier than iron are produced in a supernova.',
  init(st) { st.i = 0; },
  change(st) { st.i = 0; },
  action(st, a) { const n = STAR_LIFE[st.p.m].length; if (a === 'next') st.i = Math.min(n - 1, st.i + 1); if (a === 'back') st.i = Math.max(0, st.i - 1); },
  draw(c, W, H, st, C) {
    c.fillStyle = '#0B1020'; c.fillRect(0, 0, W, H); for (let i = 0; i < 70; i++) { const x = (i * 137.5) % W, y = (i * 71.3) % H; c.fillStyle = `rgba(255,255,255,${0.2 + 0.5 * ((i * 13) % 7) / 7})`; c.fillRect(x, y, 1.5, 1.5); }
    const L = STAR_LIFE[st.p.m], s = L[st.i], cx = W / 2, cy = H * 0.44, r = Math.min(s[4], H * 0.3), pul = 1 + 0.03 * Math.sin(st.t * 3);
    if (st.i === 0) { for (let k = 0; k < 90; k++) { const a = k * 2.4 + st.t * 0.05, rr = r * 1.4 * Math.sqrt(((k * 37) % 90) / 90); CV.circle(c, cx + rr * Math.cos(a), cy + rr * Math.sin(a) * 0.7, 6, 'rgba(142,124,195,0.25)'); } }
    else if (s[0] === 'Supernova') { for (let k = 0; k < 40; k++) { const a = k / 40 * 2 * Math.PI, rr = r * (0.3 + ((st.t * 0.6 + k * 0.13) % 1)); CV.circle(c, cx + rr * Math.cos(a), cy + rr * Math.sin(a), 3, 'rgba(255,220,120,0.8)'); } CV.circle(c, cx, cy, 20, '#FFF', null); }
    else if (s[0].startsWith('Neutron')) { CV.circle(c, cx, cy, r, '#000', '#FFB74D', 2); c.strokeStyle = 'rgba(255,183,77,0.5)'; c.lineWidth = 3; c.beginPath(); c.ellipse(cx, cy, r * 3, r * 0.8, 0.2, 0, 7); c.stroke(); }
    else { const gr = c.createRadialGradient(cx, cy, r * 0.3 * pul, cx, cy, r * 1.6 * pul); gr.addColorStop(0, s[3]); gr.addColorStop(0.6, s[3] + '88'); gr.addColorStop(1, s[3] + '00'); c.fillStyle = gr; c.beginPath(); c.arc(cx, cy, r * 1.6 * pul, 0, 7); c.fill(); CV.circle(c, cx, cy, r * pul, s[3]); }
    const n = L.length, y = H - 34, x0 = 30, dx = (W - 60) / (n - 1); CV.line(c, x0, y, x0 + dx * (n - 1), y, 'rgba(255,255,255,0.3)', 2); L.forEach((q, i) => { CV.circle(c, x0 + i * dx, y, i === st.i ? 7 : 4, i <= st.i ? '#FFD54F' : 'rgba(255,255,255,0.4)'); });
    CV.text(c, s[0], cx, 26, '#FFFFFF', 17, 'center', 700);
  },
  read(st) { const L = STAR_LIFE[st.p.m], s = L[st.i], nm = s[0]; const el = nm === 'Main sequence star' ? 'hydrogen → helium' : nm.includes('giant') ? 'helium → carbon, oxygen…' + (st.p.m === 'big' ? ' up to iron' : '') : nm === 'Supernova' ? 'elements heavier than iron' : nm === 'Nebula' || nm === 'Protostar' ? 'mainly hydrogen' : 'no fusion'; const f = nm === 'Main sequence star' ? 'balanced: fusion outward = gravity inward' : nm === 'Nebula' || nm === 'Protostar' ? 'gravity pulls the material together' : nm === 'Supernova' ? 'explosion' : nm.includes('giant') ? 'fusion pressure > gravity → expands' : 'gravity wins → very dense'; return [(st.i + 1) + ' of ' + L.length + ': ' + nm, s[1], el, f]; }
};

/* ---------- 8.2 Orbital motion ---------- */
SIMS.satellite = {
  title: 'Orbits: speed and radius', h: 440,
  controls: [
    { id: 'h', label: 'Height above the Earth’s surface', min: 300, max: 36000, step: 100, value: 400, fmt: v => v.toLocaleString() + ' km' },
    { id: 'vec', type: 'seg', label: 'Show', value: 1, options: [[1, 'Velocity and force arrows'], [0, 'Orbit only']] }
  ],
  readouts: ['Orbit radius', 'Orbital speed', 'Time for one orbit', 'Speed vs velocity'],
  note: 'Gravity provides the force that keeps a satellite (or planet or moon) in a circular orbit. The force is always towards the centre, so the speed stays constant but the direction — and so the velocity — keeps changing: the satellite is accelerating towards the Earth. Higher: for a stable orbit, a smaller radius requires a higher speed.',
  k(p) { const GM = 3.986e14, r = 6.371e6 + p.h * 1e3, v = Math.sqrt(GM / r), T = 2 * Math.PI * r / v; return { r, v, T }; },
  init(st) { st.a = 0; },
  step(st, dt) { const k = this.k(st.p); st.a += 2 * Math.PI / (k.T / 1500) * dt; },
  draw(c, W, H, st, C) {
    c.fillStyle = '#0B1020'; c.fillRect(0, 0, W, H); const p = st.p, k = this.k(p), cx = W / 2, cy = H / 2, Rmax = Math.min(W, H) * 0.45, Re = Rmax * 0.22, R = Re + Math.sqrt(p.h / 35786) * (Rmax - Re);
    CV.circle(c, cx, cy, Re, '#1E88E5'); c.fillStyle = '#43A047'; c.beginPath(); c.ellipse(cx - Re * 0.2, cy - Re * 0.1, Re * 0.4, Re * 0.25, 0.5, 0, 7); c.fill();
    c.strokeStyle = 'rgba(255,255,255,0.3)'; c.setLineDash([4, 5]); c.lineWidth = 1; c.beginPath(); c.arc(cx, cy, R, 0, 7); c.stroke(); c.setLineDash([]);
    const x = cx + R * Math.cos(st.a), y = cy - R * Math.sin(st.a); CV.rrect(c, x - 6, y - 4, 12, 8, 2, '#E0E0E0'); CV.line(c, x - 14, y, x + 14, y, '#90CAF9', 3);
    if (p.vec) { const L = 20 + k.v / 8000 * 40; CV.arrow(c, x, y, x - L * Math.sin(st.a), y - L * Math.cos(st.a), '#FFD54F', 2.6); CV.arrow(c, x, y, x - 30 * Math.cos(st.a), y + 30 * Math.sin(st.a), '#EF5350', 2.6); CV.text(c, 'velocity', x - L * Math.sin(st.a) + 6, y - L * Math.cos(st.a) - 8, '#FFD54F', 11); CV.text(c, 'gravity', x - 34 * Math.cos(st.a), y + 34 * Math.sin(st.a) + 12, '#EF5350', 11, 'center'); }
    CV.text(c, 'not to scale', W - 10, H - 12, 'rgba(255,255,255,0.5)', 10.5, 'right'); CV.text(c, p.h < 2000 ? 'low Earth orbit' : p.h > 35000 ? 'geostationary orbit (≈ 24 h)' : '', cx, 22, '#FFFFFF', 12, 'center', 600);
  },
  read(st) { const k = this.k(st.p), T = k.T; return [(k.r / 1e3).toLocaleString(undefined, { maximumFractionDigits: 0 }) + ' km', (k.v / 1000).toFixed(2) + ' km/s', T < 7200 * 2 ? (T / 60).toFixed(0) + ' min' : (T / 3600).toFixed(1) + ' h', 'speed constant; velocity changes']; }
};

/* ---------- 8.2 Red-shift and the expanding universe ---------- */
const LINES = [410, 434, 486, 656];
SIMS.redshift = {
  title: 'Red-shift and the expanding universe', h: 440,
  controls: [{ id: 'd', label: 'Distance to the galaxy', min: 0, max: 1000, step: 10, value: 300, fmt: v => v + ' million light years' }],
  readouts: ['Wavelength of the red hydrogen line', 'Red-shift (fractional increase in λ)', 'Speed moving away', 'Conclusion'],
  note: 'Light from distant galaxies is shifted towards the red end of the spectrum — its wavelength has increased. The further away the galaxy, the bigger the red-shift, so the faster it is moving away. This means the universe is expanding, which supports the Big Bang theory. (Values approximate.)',
  z(d) { return 22 * d / 3e5; },
  draw(c, W, H, st, C) {
    c.fillStyle = '#0B1020'; c.fillRect(0, 0, W, H); const d = st.p.d, z = this.z(d);
    const cx = W / 2, cy = H * 0.32, s = 1 + 0.12 * ((st.t * 0.15) % 1); for (let i = 0; i < 26; i++) { const a = i * 2.4, r0 = 16 + (i * 29) % 110; CV.circle(c, cx + r0 * s * Math.cos(a), cy + r0 * s * Math.sin(a) * 0.6, 2 + (i % 3), 'rgba(200,210,255,0.7)'); }
    CV.circle(c, cx, cy, 4, '#FFD54F'); CV.text(c, 'the universe expanding: every galaxy moves away from every other', cx, 18, 'rgba(255,255,255,0.7)', 11, 'center');
    const spec = (y, shift, lab) => { const x0 = 40, x1 = W - 40, X = l => x0 + (l - 380) / (750 - 380) * (x1 - x0); const gr = c.createLinearGradient(x0, 0, x1, 0); [['#5E35B1', 0], ['#1E88E5', 0.25], ['#43A047', 0.45], ['#FDD835', 0.6], ['#FB8C00', 0.75], ['#E53935', 1]].forEach(([cc, t]) => gr.addColorStop(t, cc)); c.fillStyle = gr; c.fillRect(x0, y, x1 - x0, 34); LINES.forEach(l => { const L = l * (1 + shift); if (L < 750) CV.line(c, X(L), y, X(L), y + 34, '#000', 3); }); CV.text(c, lab, x0, y - 10, '#FFFFFF', 11.5); };
    spec(H * 0.62, 0, 'Sun / lab (hydrogen absorption lines)'); spec(H * 0.62 + 70, z, 'distant galaxy');
    const X = l => 40 + (l - 380) / 370 * (W - 80); LINES.forEach(l => { if (l * (1 + z) < 750) CV.arrow(c, X(l), H * 0.62 + 38, X(l * (1 + z)), H * 0.62 + 66, 'rgba(255,255,255,0.5)', 1, 5); });
  },
  read(st) { const z = this.z(st.p.d); return [(656 * (1 + z)).toFixed(0) + ' nm (lab: 656 nm)', z.toFixed(3), (z * 3e5).toFixed(0) + ' km/s', st.p.d ? 'further away → bigger red-shift → moving away faster' : 'no red-shift']; }
};
