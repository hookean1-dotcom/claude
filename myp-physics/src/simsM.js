/* ==========================================================
   MYP simulations — measurement and validity, kinematics, slopes and friction, thermal,
   optics, circuits and nuclear equations. Same contract as simcore.js.
   ========================================================== */
const MYPR = (a, b) => a + Math.random() * (b - a);
const gauss = () => { let u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };

/* ---------- 1.3 Reading instruments ---------- */
SIMS.readscale = {
  title: 'Reading instruments: resolution and parallax', h: 380, noPlay: true,
  controls: [
    { id: 'ins', type: 'seg', label: 'Instrument', value: 'ruler', options: [['ruler', 'Ruler (mm)'], ['therm', 'Thermometer (1 °C)'], ['cyl', 'Cylinder (2 cm³)'], ['dig', 'Digital meter']] },
    { id: 'eye', type: 'seg', label: 'Eye position', value: 0, options: [[-1, 'Above'], [0, 'Level'], [1, 'Below']] },
    { type: 'button', act: 'new', label: 'New measurement' }
  ],
  readouts: ['Your reading', 'Instrumental uncertainty', 'Percentage uncertainty', 'Parallax error'],
  note: 'Analogue scales: ± half the smallest division. Digital displays: ± one in the last digit. Reading from above or below (parallax) shifts every reading the same way — a systematic error.',
  spec: { ruler: [0, 15, 0.1, 'cm', 0.05, 2], therm: [10, 40, 1, '°C', 0.5, 1], cyl: [20, 80, 2, 'cm³', 1, 0], dig: [0, 10, 0.01, 'V', 0.01, 2] },
  init(st) { this.action(st, 'new'); },
  change() { },
  action(st, a) { if (a === 'new') { st.vals = {}; Object.entries(this.spec).forEach(([k, s]) => st.vals[k] = s[0] + (s[1] - s[0]) * (0.25 + 0.5 * Math.random())); } },
  reading(st) { const k = st.p.ins, s = this.spec[k], tv = st.vals[k], par = k === 'dig' ? 0 : st.p.eye * s[2] * 0.6; const step = k === 'dig' ? s[2] : s[2] / (k === 'ruler' ? 1 : 2); const r = Math.round((tv + par) / step) * step; return { r, s, par, tv }; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const k = st.p.ins, { r, s, tv } = this.reading(st), x0 = 40, x1 = W - 40, y = H * 0.45;
    if (k === 'dig') { CV.rrect(c, W / 2 - 130, y - 60, 260, 110, 14, '#0E1A12', C.line, 2); CV.text(c, tv.toFixed(2) + ' V', W / 2, y - 4, '#6BF08E', 46, 'center', 700, 'IBM Plex Mono, monospace'); CV.text(c, 'resolution 0.01 V', W / 2, y + 66, C.muted, 12, 'center'); return; }
    const X = v => x0 + (v - s[0]) / (s[1] - s[0]) * (x1 - x0);
    CV.rrect(c, x0 - 10, y - 46, x1 - x0 + 20, 70, 6, C.surface, C.line, 1.5);
    for (let v = s[0]; v <= s[1] + 1e-9; v = +(v + s[2]).toFixed(4)) { const major = Math.abs(v / (s[2] * 10) - Math.round(v / (s[2] * 10))) < 1e-6 || k !== 'ruler' && Math.abs(v / (s[2] * 5) - Math.round(v / (s[2] * 5))) < 1e-6; CV.line(c, X(v), y - 46, X(v), y - 46 + (major ? 24 : 12), C.ink, major ? 1.6 : 1); if (major) CV.mono(c, String(+v.toFixed(1)), X(v), y - 10, C.ink, 11, 'center'); }
    const col = k === 'therm' ? C.bad : k === 'cyl' ? C.u4 : C.u1;
    if (k === 'ruler') { CV.rrect(c, X(s[0]), y + 30, X(tv) - X(s[0]), 18, 4, hexA(col, .5), col, 1.5); CV.text(c, 'object', X(s[0]) + 8, y + 39, C.ink, 11); }
    else { c.fillStyle = hexA(col, .55); c.fillRect(X(s[0]), y + 30, X(tv) - X(s[0]), 16); if (k === 'cyl') { c.strokeStyle = col; c.lineWidth = 2; c.beginPath(); c.moveTo(X(tv) - 8, y + 30); c.quadraticCurveTo(X(tv), y + 46, X(tv) + 8, y + 30); c.stroke(); } }
    const ex = X(tv), ey = y + 38 - st.p.eye * 90; CV.circle(c, ex - (st.p.eye ? 40 : 0), ey, 9, C.surface, C.ink, 1.6); CV.circle(c, ex - (st.p.eye ? 40 : 0) + 3, ey, 3, C.ink); CV.line(c, ex - (st.p.eye ? 40 : 0), ey, ex + (st.p.eye ? 60 : 0), y - 34 + (st.p.eye ? st.p.eye * 0 : 0), C.muted, 1, [4, 4]);
    CV.text(c, 'eye', ex - (st.p.eye ? 40 : 0) - 14, ey - 16, C.muted, 11);
  },
  read(st) { const { r, s, par } = this.reading(st), unc = s[4]; return [`${r.toFixed(s[5])} ${s[3]}`, `± ${unc} ${s[3]}`, `${(unc / r * 100).toFixed(1)}%`, par ? `${par > 0 ? '+' : '−'}${Math.abs(par).toFixed(2)} ${s[3]} (systematic)` : 'none'];
  }
};

/* ---------- 1.3 Accuracy and precision ---------- */
SIMS.targets = {
  title: 'Accuracy, precision and errors', h: 420, noPlay: true,
  controls: [
    { id: 'rnd', label: 'Random error (spread)', min: 0, max: 1, step: 0.05, value: 0.35, fmt: v => v.toFixed(2) },
    { id: 'sys', label: 'Systematic error (offset)', min: -1, max: 1, step: 0.05, value: 0, fmt: v => (v > 0 ? '+' : '') + v.toFixed(2) },
    { id: 'n', label: 'Number of readings', min: 3, max: 30, step: 1, value: 8, fmt: v => v },
    { type: 'button', act: 'shoot', label: 'Take readings' }
  ],
  readouts: ['Mean', 'Uncertainty (half range)', 'Mean − true value', 'Verdict'],
  note: 'The true value is 5.00 (the centre). Random error spreads the readings (precision); averaging more readings brings the mean closer. Systematic error shifts them all — no amount of repeating removes it (accuracy).',
  init(st) { this.action(st, 'shoot'); }, change(st) { this.action(st, 'shoot'); },
  action(st, a) { if (a === 'shoot') st.pts = Array.from({ length: st.p.n }, () => [5 + st.p.sys + gauss() * st.p.rnd * 0.6, gauss() * st.p.rnd * 0.6]); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const cx = Math.min(W * 0.3, 200), cy = H / 2, R = Math.min(140, H * 0.36), sc = R / 2;
    [1, 0.66, 0.33].forEach((f, i) => CV.circle(c, cx, cy, R * f, i === 2 ? hexA(C.u1, .2) : null, C.muted, 1.2)); CV.line(c, cx - R, cy, cx + R, cy, C.line, 1); CV.line(c, cx, cy - R, cx, cy + R, C.line, 1);
    st.pts.forEach(([x, y]) => CV.circle(c, cx + (x - 5) * sc, cy + y * sc, 4.5, C.u5));
    const x0 = Math.max(cx + R + 40, W * 0.55), x1 = W - 30, X = v => x0 + (v - 3) / 4 * (x1 - x0), yl = cy;
    CV.line(c, x0, yl, x1, yl, C.ink, 1.4); for (let v = 3; v <= 7; v += 0.5) { CV.line(c, X(v), yl - 5, X(v), yl + 5, C.ink, 1); if (v % 1 === 0) CV.mono(c, v.toFixed(0), X(v), yl + 18, C.muted, 11, 'center'); }
    st.pts.forEach(([x], i) => CV.circle(c, X(x), yl - 14 - (i % 6) * 9, 3.5, C.u5));
    const xs = st.pts.map(p => p[0]), m = xs.reduce((a, b) => a + b, 0) / xs.length;
    CV.line(c, X(5), yl - 80, X(5), yl + 30, C.good, 2, [5, 4]); CV.text(c, 'true', X(5), yl + 40, C.good, 11, 'center');
    CV.line(c, X(m), yl - 80, X(m), yl + 6, C.u1, 2.4); CV.text(c, 'mean', X(m), yl - 90, C.u1, 11, 'center');
    CV.rrect(c, X(Math.min(...xs)), yl + 52, X(Math.max(...xs)) - X(Math.min(...xs)), 8, 4, hexA(C.u5, .4)); CV.text(c, 'range', X((Math.min(...xs) + Math.max(...xs)) / 2), yl + 72, C.muted, 11, 'center');
  },
  read(st) { const xs = st.pts.map(p => p[0]), m = xs.reduce((a, b) => a + b, 0) / xs.length, hr = (Math.max(...xs) - Math.min(...xs)) / 2, off = m - 5;
    const acc = Math.abs(off) < 0.15, pre = hr < 0.3; return [m.toFixed(2), '± ' + hr.toFixed(2), (off >= 0 ? '+' : '') + off.toFixed(2), `${acc ? 'accurate' : 'not accurate'} · ${pre ? 'precise' : 'not precise'}`]; }
};

/* ---------- 1.4 Best fit, steepest and shallowest lines ---------- */
SIMS.gradlines = {
  title: 'Error bars and gradient uncertainty', h: 440, noPlay: true,
  controls: [
    { id: 'k', label: 'True spring constant', min: 10, max: 40, step: 1, value: 25, fmt: v => v + ' N/m' },
    { id: 'rnd', label: 'Random error', min: 0, max: 1, step: 0.05, value: 0.3, fmt: v => v.toFixed(2) },
    { id: 'eb', label: 'Error bar (± N)', min: 0.05, max: 1, step: 0.05, value: 0.3, fmt: v => '± ' + v.toFixed(2) + ' N' },
    { id: 'zero', label: 'Zero error in extension', min: -2, max: 2, step: 0.5, value: 0, fmt: v => (v > 0 ? '+' : '') + v + ' cm' },
    { type: 'button', act: 'new', label: 'New data set' }
  ],
  readouts: ['Best-fit gradient', 'Steepest / shallowest', 'k = gradient ± Δ', 'Intercept on x-axis'],
  note: 'F is plotted against extension x. Random error scatters the points; a zero error shifts every extension, giving an x-intercept but leaving the gradient unchanged. Δk = (steepest − shallowest) ÷ 2.',
  init(st) { this.action(st, 'new'); }, change(st, id) { if (id !== 'eb') this.action(st, 'new'); },
  action(st, a) { if (a === 'new') st.noise = Array.from({ length: 6 }, () => gauss()); },
  data(st) { return [0.5, 1, 1.5, 2, 2.5, 3].map((F, i) => [F / st.p.k * 100 + st.p.zero, F + st.noise[i] * st.p.rnd * 0.15]); },
  fit(pts) { const n = pts.length, sx = pts.reduce((a, p) => a + p[0], 0), sy = pts.reduce((a, p) => a + p[1], 0), sxx = pts.reduce((a, p) => a + p[0] * p[0], 0), sxy = pts.reduce((a, p) => a + p[0] * p[1], 0), m = (n * sxy - sx * sy) / (n * sxx - sx * sx); return [m, (sy - m * sx) / n]; },
  lines(st) { const p = this.data(st), e = st.p.eb, [m, c] = this.fit(p), a = p[0], b = p[p.length - 1]; const mx = ((b[1] + e) - (a[1] - e)) / (b[0] - a[0]), mn = ((b[1] - e) - (a[1] + e)) / (b[0] - a[0]); return { p, m, c, mx, mn, a, b, e }; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const { p, m, c: b0, mx, mn, a, b, e } = this.lines(st);
    const { X, Y } = CV.plot(c, C, { x: 50, y: 24, w: W - 80, h: H - 70 }, { xr: [-3, 16], yr: [-0.5, 3.7], xl: 'extension x / cm', yl: 'force F / N', series: [{ f: x => m * x + b0, col: C.u1, w: 2.4 }, { pts: [[a[0] - 2, a[1] - e - mx * 2], [b[0] + 2, b[1] + e + mx * 2]], col: C.u5, w: 1.4, dash: [6, 4] }, { pts: [[a[0] - 2, a[1] + e - mn * 2], [b[0] + 2, b[1] - e + mn * 2]], col: C.u4, w: 1.4, dash: [6, 4] }] });
    p.forEach(([x, y]) => { CV.line(c, X(x), Y(y - e), X(x), Y(y + e), C.ink, 1.4); CV.line(c, X(x) - 4, Y(y - e), X(x) + 4, Y(y - e), C.ink, 1.4); CV.line(c, X(x) - 4, Y(y + e), X(x) + 4, Y(y + e), C.ink, 1.4); CV.circle(c, X(x), Y(y), 3.5, C.ink); });
    CV.line(c, X(0), Y(-0.5), X(0), Y(3.7), C.muted, 1, [3, 3]); CV.line(c, X(-3), Y(0), X(16), Y(0), C.muted, 1, [3, 3]);
    CV.text(c, '— best fit', 70, 40, C.u1, 12); CV.text(c, '- - steepest', 70, 58, C.u5, 12); CV.text(c, '- - shallowest', 70, 76, C.u4, 12);
  },
  read(st) { const { m, c, mx, mn } = this.lines(st), k = m * 100, dk = (mx - mn) / 2 * 100; return [(m).toFixed(3) + ' N/cm', (mx * 100).toFixed(1) + ' / ' + (mn * 100).toFixed(1) + ' N/m', `${k.toFixed(1)} ± ${dk.toFixed(1)} N/m`, (-c / m).toFixed(2) + ' cm']; }
};

/* ---------- 2.1 Adding vectors ---------- */
SIMS.vectors = {
  title: 'Adding vectors: boat crossing a river', h: 420, noPlay: true,
  controls: [
    { id: 'a', label: 'Boat velocity (relative to water)', min: 0.5, max: 6, step: 0.1, value: 4, fmt: v => v.toFixed(1) + ' m/s' },
    { id: 'th', label: 'Boat heading (from straight across)', min: -60, max: 60, step: 1, value: 0, fmt: v => v + '°' },
    { id: 'b', label: 'River current', min: 0, max: 5, step: 0.1, value: 3, fmt: v => v.toFixed(1) + ' m/s' }
  ],
  readouts: ['Resultant speed', 'Direction (from straight across)', 'Time to cross 60 m', 'Landing point downstream'],
  note: 'Vectors add tip-to-tail. With the boat heading straight across, R = √(a² + b²). Turning upstream reduces the drift — at the right angle the boat lands directly opposite, but crosses more slowly.',
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, th = p.th * deg, vx = p.b - p.a * Math.sin(th), vy = p.a * Math.cos(th);
    c.fillStyle = hexA(C.u4, .12); c.fillRect(0, H * 0.18, W, H * 0.64); CV.text(c, 'river current →', 20, H * 0.18 + 18, C.u4, 12);
    const ox = W * 0.25, oy = H * 0.82 - 10, s = Math.min(46, (H * 0.6) / 6);
    CV.arrow(c, ox, oy, ox - p.a * Math.sin(th) * s, oy - p.a * Math.cos(th) * s, C.u1, 2.6); CV.text(c, 'boat', ox - p.a * Math.sin(th) * s - 8, oy - p.a * Math.cos(th) * s - 10, C.u1, 12, 'right', 700);
    const tx0 = ox - p.a * Math.sin(th) * s, ty0 = oy - p.a * Math.cos(th) * s; CV.arrow(c, tx0, ty0, tx0 + p.b * s, ty0, C.u4, 2.6); CV.text(c, 'current', tx0 + p.b * s / 2, ty0 - 12, C.u4, 12, 'center', 700);
    CV.arrow(c, ox, oy, ox + vx * s, oy - vy * s, C.u5, 3); CV.text(c, 'resultant', ox + vx * s + 8, oy - vy * s + 16, C.u5, 12, 'left', 700);
    const T = vy > 0 ? 60 / vy : Infinity, drift = vx * T; CV.mono(c, vy > 0 ? `lands ${drift.toFixed(1)} m ${drift >= 0 ? 'downstream' : 'upstream'}` : 'never crosses', W - 20, H - 14, C.ink, 12, 'right');
  },
  read(st) { const p = st.p, th = p.th * deg, vx = p.b - p.a * Math.sin(th), vy = p.a * Math.cos(th), R = Math.hypot(vx, vy), T = 60 / vy; return [R.toFixed(2) + ' m/s', (Math.atan2(vx, vy) / deg).toFixed(0) + '°', vy > 0 ? T.toFixed(1) + ' s' : '—', vy > 0 ? (vx * T).toFixed(1) + ' m' : '—']; }
};

/* ---------- 2.3 suvat with graphs ---------- */
SIMS.suvat = {
  title: 'suvat: uniformly accelerated motion', h: 460,
  controls: [
    { id: 'u', label: 'Initial velocity u', min: -10, max: 20, step: 1, value: 4, fmt: v => v + ' m/s' },
    { id: 'a', label: 'Acceleration a', min: -4, max: 4, step: 0.5, value: 1.5, fmt: v => v + ' m/s²' },
    { type: 'button', act: 'go', label: 'Run 10 s' }
  ],
  readouts: ['Time t', 'Velocity v = u + at', 'Displacement s = ut + ½at²', 'Check: v² = u² + 2as'],
  note: 'The particle moves along a line (positive to the right). The d–t graph is a parabola and the v–t graph a straight line whose gradient is a and whose area is s. Try a negative acceleration with a positive u: the particle stops and comes back.',
  init(st) { st.tt = 0; }, change(st) { st.tt = 0; }, action(st) { st.tt = 0; st.run = true; },
  step(st, dt) { st.tt = Math.min(10, st.tt + dt); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, t = st.tt, s = p.u * t + 0.5 * p.a * t * t, v = p.u + p.a * t;
    const smin = Math.min(0, ...[0, 2.5, 5, 7.5, 10].map(T => p.u * T + 0.5 * p.a * T * T), -p.u * p.u / (2 * (p.a || 1e-9)) * (p.a * p.u < 0 ? 1 : 0)), smax = Math.max(10, ...[0, 2.5, 5, 7.5, 10].map(T => p.u * T + 0.5 * p.a * T * T));
    const y = 46, X = v0 => 30 + (v0 - smin) / (smax - smin) * (W - 60);
    CV.line(c, 30, y, W - 30, y, C.ink, 1.4); CV.line(c, X(0), y - 8, X(0), y + 8, C.ink, 1.4); CV.text(c, '0', X(0), y + 18, C.muted, 11, 'center');
    CV.circle(c, X(s), y, 10, C.u2, C.ink, 1.4); CV.arrow(c, X(s), y - 18, X(s) + v * 4, y - 18, C.u1, 2);
    const half = (W - 70) / 2, gy = 90, gh = H - 130;
    const sTr = [], vTr = []; for (let T = 0; T <= t + 1e-9; T += 0.1) { sTr.push([T, p.u * T + 0.5 * p.a * T * T]); vTr.push([T, p.u + p.a * T]); }
    const vmin = Math.min(0, p.u, p.u + 10 * p.a), vmax = Math.max(1, p.u, p.u + 10 * p.a);
    CV.plot(c, C, { x: 30, y: gy, w: half - 20, h: gh }, { xr: [0, 10], yr: [smin, smax], xl: 't / s', yl: 's / m', series: [{ pts: sTr.length > 1 ? sTr : [[0, 0], [0, 0]], col: C.u2, w: 2.4 }] });
    CV.plot(c, C, { x: 60 + half, y: gy, w: half - 20, h: gh }, { xr: [0, 10], yr: [vmin, vmax], xl: 't / s', yl: 'v / m s⁻¹', series: [{ pts: vTr.length > 1 ? vTr : [[0, p.u], [0, p.u]], col: C.u1, w: 2.4 }], fills: vTr.length > 1 ? [{ col: hexA(C.u1, .15), pts: vTr }] : [] });
  },
  read(st) { const p = st.p, t = st.tt, v = p.u + p.a * t, s = p.u * t + 0.5 * p.a * t * t; return [t.toFixed(1) + ' s', v.toFixed(2) + ' m/s', s.toFixed(2) + ' m', `${(v * v).toFixed(1)} = ${(p.u * p.u + 2 * p.a * s).toFixed(1)}`]; }
};

/* ---------- 2.6/2.7 Inclined plane with friction ---------- */
SIMS.incline = {
  title: 'Inclined plane: resolving forces and friction', h: 430,
  controls: [
    { id: 'th', label: 'Slope angle θ', min: 0, max: 60, step: 1, value: 20, fmt: v => v + '°' },
    { id: 'm', label: 'Mass', min: 0.5, max: 10, step: 0.5, value: 2, fmt: v => v + ' kg' },
    { id: 'ms', label: 'Static friction μₛ', min: 0, max: 1, step: 0.05, value: 0.5, fmt: v => v.toFixed(2) },
    { id: 'md', label: 'Dynamic friction μ_d', min: 0, max: 1, step: 0.05, value: 0.35, fmt: v => v.toFixed(2) },
    { type: 'button', act: 'reset', label: 'Put block back' }
  ],
  readouts: ['mg sin θ (down slope)', 'R = mg cos θ', 'Max static friction μₛR', 'Acceleration'],
  note: 'Raise the slope slowly: the block stays put while mg sin θ ≤ μₛR. It slips when tan θ > μₛ, then accelerates at a = g(sin θ − μ_d cos θ). The mass cancels — try changing it.',
  init(st) { st.x = 0; st.v = 0; st.slid = false; }, change(st, id) { if (id !== 'th') return; }, action(st) { this.init(st); },
  phys(st) { const p = st.p, th = p.th * deg, W = p.m * g, par = W * Math.sin(th), R = W * Math.cos(th), fmax = p.ms * R, slides = st.slid || par > fmax + 1e-9, a = slides ? Math.max(0, g * (Math.sin(th) - p.md * Math.cos(th))) : 0; return { th, W, par, R, fmax, slides, a }; },
  step(st, dt) { const f = this.phys(st); if (f.slides) { st.slid = true; st.v += f.a * dt; st.x += st.v * dt; if (st.x > 3.2) { st.x = 3.2; st.v = 0; } if (f.a === 0 && st.v > 0) st.v = Math.max(0, st.v - g * (st.p.md * Math.cos(f.th) - Math.sin(f.th)) * dt); } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const f = this.phys(st), L = Math.min(W - 80, 520), x0 = (W - L) / 2, y0 = H - 50, th = f.th, top = [x0 + L, y0 - L * Math.tan(th)];
    c.fillStyle = hexA(C.muted, .18); c.beginPath(); c.moveTo(x0, y0); c.lineTo(x0 + L, y0); c.lineTo(top[0], Math.max(20, top[1])); c.closePath(); c.fill(); CV.line(c, x0, y0, top[0], top[1], C.ink, 2);
    const along = L / Math.cos(th) * (0.82 - st.x / 4.2), bx = x0 + along * Math.cos(th), by = y0 - along * Math.sin(th);
    c.save(); c.translate(bx, by); c.rotate(-th); CV.rrect(c, -24, -40, 48, 40, 4, C.surface, C.ink, 2); c.restore();
    const cx = bx - 20 * Math.sin(th), cy = by - 20 * Math.cos(th), s = 3.2 / Math.max(1, st.p.m * 0.4);
    CV.arrow(c, cx, cy, cx, cy + f.W * s, C.ink, 2.2); CV.text(c, 'mg', cx + 6, cy + f.W * s, C.ink, 12);
    CV.arrow(c, cx, cy, cx - f.par * s * Math.cos(th), cy + f.par * s * Math.sin(th), C.u1, 2); CV.text(c, 'mg sin θ', cx - f.par * s * Math.cos(th) - 6, cy + f.par * s * Math.sin(th) + 14, C.u1, 12, 'right');
    CV.arrow(c, cx, cy, cx + f.R * s * Math.sin(th), cy - f.R * s * Math.cos(th), C.u3, 2); CV.text(c, 'R', cx + f.R * s * Math.sin(th) + 6, cy - f.R * s * Math.cos(th), C.u3, 13, 'left', 700);
    const fr = f.slides ? st.p.md * f.R : Math.min(f.par, f.fmax); CV.arrow(c, cx, cy, cx + fr * s * Math.cos(th), cy - fr * s * Math.sin(th), C.u4, 2); CV.text(c, 'friction', cx + fr * s * Math.cos(th) + 6, cy - fr * s * Math.sin(th) - 8, C.u4, 12);
    CV.text(c, f.slides ? 'sliding' : 'at rest (static friction holds it)', 20, 24, f.slides ? C.bad : C.good, 13, 'left', 700); CV.text(c, `tan θ = ${Math.tan(th).toFixed(2)}   μₛ = ${st.p.ms.toFixed(2)}`, 20, 44, C.muted, 12);
  },
  read(st) { const f = this.phys(st); return [f.par.toFixed(1) + ' N', f.R.toFixed(1) + ' N', f.fmax.toFixed(1) + ' N', f.slides ? f.a.toFixed(2) + ' m/s²' : '0 (static)']; }
};

/* ---------- 2.10 Roller-coaster energy ---------- */
SIMS.coaster = {
  title: 'Roller-coaster: energy conservation', h: 440,
  controls: [
    { id: 'h0', label: 'Release height', min: 10, max: 40, step: 1, value: 30, fmt: v => v + ' m' },
    { id: 'mu', label: 'Friction (energy lost per metre)', min: 0, max: 1, step: 0.05, value: 0.15, fmt: v => v.toFixed(2) },
    { id: 'm', label: 'Car mass', min: 200, max: 1200, step: 100, value: 500, fmt: v => v + ' kg' }
  ],
  readouts: ['Height h', 'Speed v', 'Energy dissipated', 'Check: v without friction = √(2gΔh)'],
  note: 'GPE lost = KE gained + work done against friction. With no friction the car always returns to its release height and its speed at any point is √(2gΔh), whatever its mass.',
  track(x) { return 12 + 10 * Math.cos(x / 14) + 6 * Math.cos(x / 5.3 + 1) - x * 0.06 + (x < 10 ? (10 - x) * 1.6 : 0); },
  init(st) { st.x = 0.05; st.v = 0.4; st.lost = 0; st.dir = 1; },
  change(st) { this.init(st); },
  hAt(st, x) { return x <= 0 ? st.p.h0 : this.track(x) * (st.p.h0 / (this.track(0) || 1)) * 0.9 + 0.1 * st.p.h0 * Math.max(0, 1 - x / 8); },
  step(st, dt) { for (let k = 0; k < 6; k++) { const d = dt / 6, x = st.x, h = this.hAt(st, x), h2 = this.hAt(st, x + 0.05), slope = (h2 - h) / 0.05, ds = st.v * d * st.dir; const E = 0.5 * st.v * st.v + g * h; let nx = clamp(x + ds / Math.sqrt(1 + slope * slope), 0, 100); const nh = this.hAt(st, nx); const lossPerKg = st.p.mu * Math.abs(ds) * 0.35; st.lost += lossPerKg * st.p.m; let ke = E - g * nh - lossPerKg; if (ke <= 0) { st.dir *= -1; ke = 0; nx = x; } st.v = Math.sqrt(2 * Math.max(0, ke)); st.x = nx; if (nx >= 100) { st.x = 100; st.v = 0; } } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const X = x => 20 + x / 100 * (W - 40), Y = h => H - 90 - h / 45 * (H - 150);
    c.strokeStyle = C.ink; c.lineWidth = 3; c.beginPath(); for (let x = 0; x <= 100; x += 0.5) { const yy = Y(this.hAt(st, x)); x ? c.lineTo(X(x), yy) : c.moveTo(X(x), yy); } c.stroke();
    CV.line(c, 20, Y(st.p.h0), W - 20, Y(st.p.h0), C.muted, 1, [5, 4]); CV.text(c, 'release height', W - 22, Y(st.p.h0) - 8, C.muted, 11, 'right');
    const h = this.hAt(st, st.x); CV.circle(c, X(st.x), Y(h) - 9, 9, C.u2, C.ink, 1.6);
    const m = st.p.m, gpe = m * g * h, ke = 0.5 * m * st.v * st.v, tot = m * g * st.p.h0, bw = 26, bx = 30, by = H - 16, bh = 60;
    [['GPE', gpe, C.u3], ['KE', ke, C.u2], ['lost', st.lost, C.bad]].forEach(([n, v], i) => { const hh = Math.min(bh, v / tot * bh); CV.rrect(c, bx + i * 60, by - hh, bw, hh, 3, [C.u3, C.u2, C.bad][i]); CV.text(c, n, bx + i * 60 + bw / 2, by + 8, C.muted, 10.5, 'center'); });
  },
  read(st) { const h = this.hAt(st, st.x); return [h.toFixed(1) + ' m', st.v.toFixed(1) + ' m/s', (st.lost / 1000).toFixed(1) + ' kJ', Math.sqrt(2 * g * Math.max(0, st.p.h0 - h)).toFixed(1) + ' m/s']; }
};

/* ---------- 3.2 Conduction along a rod ---------- */
SIMS.conduction = {
  title: 'Conduction along a rod', h: 380,
  controls: [{ id: 'mat', type: 'seg', label: 'Material', value: 'cu', options: [['cu', 'Copper (metal)'], ['glass', 'Glass'], ['wood', 'Wood']] }],
  readouts: ['Hot end', 'Far end', 'Time', 'Why'],
  note: 'Particles at the hot end vibrate more and pass energy to their neighbours. In a metal, free electrons also carry energy rapidly along — so the far end warms much sooner.',
  k: { cu: 1, glass: 0.08, wood: 0.02 },
  init(st) { st.T = Array(40).fill(20); st.tt = 0; }, change(st) { this.init(st); },
  step(st, dt) { const k = this.k[st.p.mat] * 60; for (let r = 0; r < 4; r++) { st.T[0] = 100; const n = st.T.slice(); for (let i = 1; i < 39; i++) n[i] = st.T[i] + k * dt / 4 * (st.T[i - 1] - 2 * st.T[i] + st.T[i + 1]); n[39] = st.T[39] + k * dt / 4 * (st.T[38] - st.T[39]) - 0.002 * (st.T[39] - 20); st.T = n.map(x => clamp(x, 20, 100)); } st.tt += dt; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const x0 = 60, x1 = W - 60, y = H * 0.45, n = 40, dx = (x1 - x0) / n;
    const fl = (x, yy) => { c.fillStyle = 'rgba(255,140,40,.8)'; c.beginPath(); c.moveTo(x - 14, yy + 40); c.quadraticCurveTo(x, yy - 10 + Math.sin(st.tt * 9) * 5, x + 14, yy + 40); c.fill(); };
    fl(x0 - 18, y);
    st.T.forEach((T, i) => { const f = (T - 20) / 80; c.fillStyle = `rgb(${Math.round(80 + 175 * f)},${Math.round(110 + 40 * (1 - f))},${Math.round(200 * (1 - f) + 40)})`; c.fillRect(x0 + i * dx, y - 16, dx + 0.5, 32);
      if (i % 2 === 0) { const amp = 1 + f * 5; CV.circle(c, x0 + i * dx + dx / 2 + Math.sin(st.tt * 30 + i) * amp, y + Math.cos(st.tt * 27 + i * 2) * amp, 3.2, 'rgba(255,255,255,.75)'); } });
    if (st.p.mat === 'cu') for (let k = 0; k < 14; k++) { const xx = x0 + ((k * 61 + st.tt * 220 * (k % 2 ? 1 : 0.7)) % (x1 - x0)); CV.circle(c, xx, y - 10 + (k % 5) * 5, 2, C.u2); }
    CV.rrect(c, x0, y - 16, x1 - x0, 32, 3, null, C.ink, 1.5);
    CV.text(c, 'heat', x0 - 18, y + 54, C.muted, 11, 'center'); CV.text(c, st.T[39].toFixed(0) + ' °C', x1 + 6, y, C.ink, 12);
  },
  read(st) { return ['100 °C', st.T[39].toFixed(1) + ' °C', st.tt.toFixed(1) + ' s', st.p.mat === 'cu' ? 'free electrons + vibrations' : 'vibrations only (no free electrons)']; }
};

/* ---------- 3.5 Mixing to equilibrium ---------- */
SIMS.mixing = {
  title: 'Mixing: reaching thermal equilibrium', h: 420,
  controls: [
    { id: 'mat', type: 'seg', label: 'Hot object', value: 4200, options: [[4200, 'Hot water'], [900, 'Aluminium'], [450, 'Iron'], [385, 'Copper']] },
    { id: 'm1', label: 'Mass of hot object', min: 0.05, max: 1, step: 0.05, value: 0.2, fmt: v => v.toFixed(2) + ' kg' },
    { id: 'T1', label: 'Its temperature', min: 40, max: 100, step: 1, value: 80, fmt: v => v + ' °C' },
    { id: 'm2', label: 'Mass of cold water', min: 0.05, max: 1, step: 0.05, value: 0.3, fmt: v => v.toFixed(2) + ' kg' },
    { id: 'T2', label: 'Cold water temperature', min: 0, max: 30, step: 1, value: 20, fmt: v => v + ' °C' }
  ],
  readouts: ['Final temperature', 'Energy lost by hot object', 'Energy gained by water', 'Time'],
  note: 'In an isolated system the energy lost by the hot object equals the energy gained by the cold water. The final temperature is nearer the object with the larger heat capacity, mc.',
  init(st) { st.tt = 0; }, change(st) { st.tt = 0; },
  step(st, dt) { st.tt = Math.min(12, st.tt + dt); },
  calc(st) { const p = st.p, h1 = p.m1 * p.mat, h2 = p.m2 * 4200, Tf = (h1 * p.T1 + h2 * p.T2) / (h1 + h2), f = 1 - Math.exp(-st.tt / 2); return { h1, h2, Tf, Th: p.T1 + (Tf - p.T1) * f, Tc: p.T2 + (Tf - p.T2) * f }; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const r = this.calc(st);
    const tr1 = [], tr2 = []; for (let t = 0; t <= st.tt + 1e-9; t += 0.1) { const f = 1 - Math.exp(-t / 2); tr1.push([t, st.p.T1 + (r.Tf - st.p.T1) * f]); tr2.push([t, st.p.T2 + (r.Tf - st.p.T2) * f]); }
    CV.plot(c, C, { x: 50, y: 30, w: W * 0.55, h: H - 80 }, { xr: [0, 12], yr: [0, 100], xl: 'time', yl: 'temperature / °C', series: [{ pts: tr1.length > 1 ? tr1 : [[0, st.p.T1], [0, st.p.T1]], col: C.bad, w: 2.4 }, { pts: tr2.length > 1 ? tr2 : [[0, st.p.T2], [0, st.p.T2]], col: C.u4, w: 2.4 }, { pts: [[0, r.Tf], [12, r.Tf]], col: C.muted, w: 1, dash: [5, 4] }] });
    const bx = W * 0.55 + 100, by = H - 60, bw = Math.min(110, W - bx - 30);
    CV.rrect(c, bx, by - 150, bw, 150, 8, hexA(C.u4, .15), C.ink, 1.5); c.fillStyle = hexA(C.u4, .35); c.fillRect(bx + 2, by - 110, bw - 4, 108);
    CV.rrect(c, bx + bw / 2 - 20, by - 60, 40, 40, 5, `rgb(${Math.round(120 + r.Th * 1.3)},90,${Math.round(180 - r.Th)})`, C.ink, 1.5);
    CV.text(c, r.Th.toFixed(1) + ' °C', bx + bw / 2, by - 72, C.bad, 12, 'center', 700); CV.text(c, 'water ' + r.Tc.toFixed(1) + ' °C', bx + bw / 2, by + 16, C.u4, 12, 'center', 700);
  },
  read(st) { const r = this.calc(st), p = st.p; return [r.Tf.toFixed(1) + ' °C', (r.h1 * (p.T1 - r.Th) / 1000).toFixed(2) + ' kJ', (r.h2 * (r.Tc - p.T2) / 1000).toFixed(2) + ' kJ', st.tt.toFixed(1) + ' s']; }
};

/* ---------- 4.2 Intensity and distance ---------- */
SIMS.intensity = {
  title: 'Intensity from a point source', h: 420, noPlay: true,
  controls: [
    { id: 'P', label: 'Source power', min: 1, max: 100, step: 1, value: 40, fmt: v => v + ' W' },
    { id: 'r', label: 'Distance to detector', min: 0.5, max: 5, step: 0.1, value: 1.5, fmt: v => v.toFixed(1) + ' m' }
  ],
  readouts: ['Area of sphere 4πr²', 'Intensity I = P ÷ 4πr²', 'Compared with 1 m', 'Double the distance →'],
  note: 'The same power spreads over a sphere whose area grows with r². Move the detector: doubling r divides the intensity by four.',
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, cx = 60, cy = H * 0.4, s = (W * 0.5 - 70) / 5;
    for (let k = 1; k <= 5; k++) { c.strokeStyle = hexA(C.u1, .5 - k * 0.07); c.lineWidth = 1.5; c.beginPath(); c.arc(cx, cy, k * s, -0.6, 0.6); c.stroke(); }
    const g0 = c.createRadialGradient(cx, cy, 2, cx, cy, 30); g0.addColorStop(0, 'rgba(255,230,120,1)'); g0.addColorStop(1, 'rgba(255,200,80,0)'); c.fillStyle = g0; c.beginPath(); c.arc(cx, cy, 30, 0, 7); c.fill();
    const dx = cx + p.r * s; CV.rrect(c, dx - 6, cy - 18, 12, 36, 3, C.u4); CV.text(c, 'detector', dx, cy + 34, C.u4, 11, 'center');
    const I = p.P / (4 * Math.PI * p.r * p.r), pts = []; for (let r = 0.5; r <= 5.01; r += 0.05) pts.push([r, p.P / (4 * Math.PI * r * r)]);
    const { X, Y } = CV.plot(c, C, { x: W * 0.55, y: 30, w: W * 0.4, h: H - 90 }, { xr: [0, 5], yr: [0, p.P / (4 * Math.PI * 0.25)], xl: 'r / m', yl: 'I / W m⁻²', series: [{ pts, col: C.u1, w: 2.2 }], dots: [[p.r, I, C.u4, 6]] });
  },
  read(st) { const p = st.p, A = 4 * Math.PI * p.r * p.r, I = p.P / A; return [A.toFixed(2) + ' m²', I.toFixed(3) + ' W/m²', (1 / (p.r * p.r)).toFixed(3) + ' ×', (I / 4).toFixed(3) + ' W/m² (¼)']; }
};

/* ---------- 4.3 Plane mirror ---------- */
SIMS.mirror = {
  title: 'Image in a plane mirror', h: 420, noPlay: true,
  controls: [
    { id: 'd', label: 'Object distance from mirror', min: 40, max: 220, step: 5, value: 120, fmt: v => (v / 100).toFixed(2) + ' m' },
    { id: 'h', label: 'Object height', min: 40, max: 140, step: 5, value: 90, fmt: v => (v / 100).toFixed(2) + ' m' },
    { id: 'ey', label: 'Eye position', min: -120, max: 120, step: 5, value: 40, fmt: v => v }
  ],
  readouts: ['Image distance behind mirror', 'Image height', 'Nature', 'Angles'],
  note: 'Rays from the top of the object reflect with i = r. Extended backwards (dashed) they appear to come from a point as far behind the mirror as the object is in front — a virtual image.',
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const mx = W / 2, base = H - 60, p = st.p, ox = mx - p.d, top = base - p.h, ix = mx + p.d, ex = 30, ey = H / 2 + p.ey * 0.8;
    CV.line(c, mx, 30, mx, H - 30, C.ink, 4); CV.text(c, 'mirror', mx + 8, 40, C.muted, 11);
    CV.arrow(c, ox, base, ox, top, C.u1, 3); CV.line(c, ix, base, ix, top, C.u1, 2, [6, 5]); CV.circle(c, ix, top, 3, C.u1); CV.text(c, 'virtual image', ix, base + 18, C.u1, 11, 'center'); CV.text(c, 'object', ox, base + 18, C.u1, 11, 'center');
    const eye = [Math.min(ex + 60, ox - 30), ey];
    [eye[1], eye[1] + 50].forEach(ey2 => { const t = (mx - ix) / (eye[0] - ix), my = top + (ey2 - top) * t; CV.line(c, ox, top, mx, my, C.u5, 1.8); CV.arrow(c, mx, my, eye[0], ey2, C.u5, 1.8); CV.line(c, mx, my, ix, top, C.u5, 1.2, [4, 4]); });
    CV.circle(c, eye[0], eye[1], 9, C.surface, C.ink, 1.6); CV.text(c, 'eye', eye[0], eye[1] - 16, C.muted, 11, 'center'); CV.line(c, ox, base, ix, base, C.line, 1);
  },
  read(st) { return [(st.p.d / 100).toFixed(2) + ' m', (st.p.h / 100).toFixed(2) + ' m', 'virtual · upright · same size', 'i = r for every ray']; }
};

/* ---------- 4.4/4.5 Snell’s law and TIR ---------- */
SIMS.snell = {
  title: 'Snell’s law and total internal reflection', h: 440, noPlay: true,
  controls: [
    { id: 'dir', type: 'seg', label: 'Light travels', value: 'in', options: [['in', 'Air → material'], ['out', 'Material → air']] },
    { id: 'n', type: 'seg', label: 'Material', value: 1.5, options: [[1.33, 'Water 1.33'], [1.5, 'Glass 1.50'], [2.42, 'Diamond 2.42']] },
    { id: 'i', label: 'Angle of incidence', min: 0, max: 89, step: 1, value: 40, fmt: v => v + '°' }
  ],
  readouts: ['Angle of refraction', 'n₁ sin θ₁ = n₂ sin θ₂', 'Critical angle', 'Outcome'],
  note: 'Going into a denser material the ray bends towards the normal. Coming out, it bends away — and beyond the critical angle (sin c = 1/n) it cannot escape: total internal reflection.',
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, cx = W / 2, cy = H / 2, R = Math.min(W, H) * 0.42, out = p.dir === 'out', n1 = out ? p.n : 1, n2 = out ? 1 : p.n, i = p.i * deg, sr = n1 * Math.sin(i) / n2;
    c.fillStyle = hexA(C.u6, .14); c.fillRect(0, cy, W, H - cy); CV.line(c, 0, cy, W, cy, C.ink, 1.6); CV.line(c, cx, 20, cx, H - 20, C.muted, 1, [6, 5]);
    CV.text(c, out ? `material n = ${p.n}` : 'air n = 1.00', 14, out ? cy + 20 : cy - 12, C.muted, 12); CV.text(c, out ? 'air n = 1.00' : `material n = ${p.n}`, 14, out ? cy - 12 : cy + 20, C.muted, 12);
    const sgn = out ? 1 : -1; const ix = cx - R * Math.sin(i), iy = cy - sgn * R * Math.cos(i); CV.arrow(c, ix, iy, cx - 2, cy, C.u1, 2.6);
    const rx = cx + R * Math.sin(i), ry = cy - sgn * R * Math.cos(i), refl = sr >= 1 ? 1 : 0.15 + 0.5 * Math.pow(Math.sin(i), 6);
    c.globalAlpha = refl; CV.arrow(c, cx, cy, rx, ry, C.u1, 2.4); c.globalAlpha = 1;
    if (sr < 1) { const r = Math.asin(sr); CV.arrow(c, cx, cy, cx + R * Math.sin(r), cy + sgn * R * Math.cos(r), C.u5, 2.6); }
    CV.text(c, sr >= 1 ? 'TOTAL INTERNAL REFLECTION' : '', cx + 20, out ? cy - 20 : cy + 30, C.bad, 13, 'left', 700);
  },
  read(st) { const p = st.p, out = p.dir === 'out', n1 = out ? p.n : 1, n2 = out ? 1 : p.n, sr = n1 * Math.sin(p.i * deg) / n2, c = Math.asin(1 / p.n) / deg;
    return [sr < 1 ? (Math.asin(sr) / deg).toFixed(1) + '°' : '—', `${n1.toFixed(2)} × sin ${p.i}° = ${(n1 * Math.sin(p.i * deg)).toFixed(3)}`, c.toFixed(1) + '°' + (out ? '' : ' (only when leaving)'), sr >= 1 ? 'all light reflected' : out && p.i > c - 3 ? 'nearly grazing the surface' : 'refracted (some reflected)']; }
};

/* ---------- 4.6 Diffraction ---------- */
SIMS.diffract = {
  title: 'Diffraction through a gap', h: 420,
  controls: [
    { id: 'w', label: 'Gap width', min: 10, max: 160, step: 2, value: 40, fmt: v => v + ' mm' },
    { id: 'lam', label: 'Wavelength', min: 10, max: 60, step: 1, value: 25, fmt: v => v + ' mm' }
  ],
  readouts: ['Gap ÷ wavelength', 'Spreading', 'Wavelength after gap', 'Example'],
  note: 'The narrower the gap compared with the wavelength, the more the waves spread out. The wavelength, frequency and speed do not change.',
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, bx = W * 0.4, cy = H / 2, s = 1.6, gw = p.w * s, lam = p.lam * s, ph = (st.t * 40) % lam;
    for (let x = bx - ph - Math.floor(bx / lam) * lam + lam; x < bx; x += lam) if (x > 10) CV.line(c, x, 20, x, H - 20, C.u4, 2);
    c.fillStyle = C.ink; c.fillRect(bx - 4, 10, 8, cy - gw / 2 - 10); c.fillRect(bx - 4, cy + gw / 2, 8, H - cy - gw / 2 - 10);
    const spread = Math.min(Math.PI / 2, Math.asin(Math.min(1, lam / gw)) * 1.6 + 0.05);
    for (let r = lam - ph; r < W - bx; r += lam) { c.strokeStyle = C.u4; c.lineWidth = 2; c.globalAlpha = Math.max(0.2, 1 - r / (W - bx)); c.beginPath();
      if (gw > 3 * lam) { c.moveTo(bx + r, cy - gw / 2); c.lineTo(bx + r, cy + gw / 2); c.stroke(); c.beginPath(); c.arc(bx, cy - gw / 2, r, -spread, 0); c.stroke(); c.beginPath(); c.arc(bx, cy + gw / 2, r, 0, spread); }
      else c.arc(bx, cy, r, -spread, spread);
      c.stroke(); c.globalAlpha = 1; }
  },
  read(st) { const q = st.p.w / st.p.lam; return [q.toFixed(2), q < 1.5 ? 'strong (≈ semicircular)' : q < 4 ? 'noticeable' : 'slight — mostly straight', st.p.lam + ' mm (unchanged)', q < 2 ? 'sound through a doorway' : 'light through a doorway']; }
};

/* ---------- 4.7 The eye and correcting lenses ---------- */
SIMS.eye = {
  title: 'The eye: short sight, long sight and glasses', h: 400, noPlay: true,
  controls: [
    { id: 'eye', type: 'seg', label: 'Eye', value: 'my', options: [['ok', 'Normal'], ['my', 'Short-sighted'], ['hy', 'Long-sighted']] },
    { id: 'obj', type: 'seg', label: 'Looking at', value: 'far', options: [['far', 'Distant object'], ['near', 'Book (25 cm)']] },
    { id: 'gl', type: 'seg', label: 'Glasses', value: 'none', options: [['none', 'None'], ['conv', 'Converging'], ['div', 'Diverging']] }
  ],
  readouts: ['Focus', 'Image on retina', 'Correct lens for this eye', ''],
  note: 'Short sight: the eye is too powerful for distant objects — a diverging lens fixes it. Long sight: the eye cannot focus near objects strongly enough — a converging lens fixes it.',
  focus(st) { const p = st.p; let pw = p.eye === 'my' ? 1.25 : p.eye === 'hy' ? 0.8 : 1; if (p.obj === 'near') pw *= p.eye === 'hy' ? 1 : 1.12; else pw *= 0.95; if (p.gl === 'conv') pw *= 1.22; if (p.gl === 'div') pw *= 0.8; const need = p.obj === 'near' ? 1.06 : 0.95; return pw / need; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const x0 = W * 0.35, cy = H / 2, L = Math.min(W * 0.5, 320), ret = x0 + L, f = this.focus(st), fx = x0 + L / f;
    c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.ellipse(x0 + L / 2, cy, L / 2 + 20, 110, 0, 0, 7); c.stroke();
    c.strokeStyle = C.bad; c.lineWidth = 4; c.beginPath(); c.arc(x0 + L / 2, cy, L / 2 + 16, -0.6, 0.6); c.stroke(); CV.text(c, 'retina', ret + 30, cy - 70, C.bad, 11);
    c.fillStyle = hexA(C.u3, .3); c.beginPath(); c.ellipse(x0 + 10, cy, 12, 50, 0, 0, 7); c.fill();
    const glx = x0 - 70; if (st.p.gl !== 'none') { c.strokeStyle = C.u4; c.lineWidth = 3; c.beginPath(); if (st.p.gl === 'conv') { c.ellipse(glx, cy, 8, 60, 0, 0, 7); } else { c.moveTo(glx - 10, cy - 60); c.quadraticCurveTo(glx, cy, glx - 10, cy + 60); c.moveTo(glx + 10, cy - 60); c.quadraticCurveTo(glx, cy, glx + 10, cy + 60); } c.stroke(); }
    const near = st.p.obj === 'near';
    [-40, 0, 40].forEach(dy => { const sx = 20, sy = near ? cy : cy + dy, ly = cy + dy; CV.line(c, sx, near ? cy : ly, x0 + 10, ly, C.u1, 1.6); const ex = ret + 10, ey = cy + dy + (cy - (cy + dy)) * (ex - (x0 + 10)) / (fx - (x0 + 10)); CV.line(c, x0 + 10, ly, ex, ey, C.u1, 1.6); });
    CV.circle(c, Math.min(fx, W - 10), cy, 4, C.u5);
  },
  read(st) { const f = this.focus(st), on = Math.abs(f - 1) < 0.06; return [on ? 'on the retina' : f > 1 ? 'in front of the retina' : 'behind the retina', on ? 'sharp' : 'blurred', st.p.eye === 'my' ? 'diverging (concave)' : st.p.eye === 'hy' ? 'converging (convex)' : 'none needed', '']; }
};

/* ---------- 5.1 Conductors, semiconductors, insulators ---------- */
SIMS.conductors = {
  title: 'Free charge carriers in materials', h: 400,
  controls: [
    { id: 'mat', type: 'seg', label: 'Material', value: 'cu', options: [['cu', 'Copper'], ['si', 'Silicon'], ['rub', 'Rubber']] },
    { id: 'T', label: 'Temperature', min: 0, max: 200, step: 5, value: 20, fmt: v => v + ' °C' },
    { id: 'V', label: 'Potential difference', min: 0, max: 6, step: 0.5, value: 3, fmt: v => v + ' V' }
  ],
  readouts: ['Free carriers (relative)', 'Lattice vibration', 'Current (relative)', 'Classification'],
  note: 'Copper has a huge number of free electrons; heating it makes the ions vibrate more, so resistance rises. Silicon has few free electrons, but heating frees more — its resistance falls. Rubber has almost none.',
  init(st) { st.e = Array.from({ length: 60 }, () => [Math.random(), Math.random()]); },
  carriers(st) { const T = st.p.T; return st.p.mat === 'cu' ? 1 : st.p.mat === 'si' ? Math.min(0.6, 0.02 * Math.exp(T / 45)) : 0.0005; },
  step(st, dt) { const n = this.carriers(st), I = this.I(st); st.e.forEach(p => { p[0] = (p[0] + dt * (I * 0.25 + (Math.random() - 0.5) * 0.3) + 1) % 1; p[1] = clamp(p[1] + (Math.random() - 0.5) * 0.05, 0, 1); }); },
  I(st) { const n = this.carriers(st), col = 1 + st.p.T / 120 * (st.p.mat === 'cu' ? 1 : 0.3); return st.p.V * n / col / 3; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const x0 = 40, x1 = W - 40, y0 = 70, y1 = H - 90, n = this.carriers(st), vib = 1 + st.p.T / 40;
    CV.rrect(c, x0, y0, x1 - x0, y1 - y0, 10, hexA(C.u5, .08), C.ink, 1.5);
    for (let i = 0; i < 12; i++) for (let j = 0; j < 4; j++) { const x = x0 + 30 + i * (x1 - x0 - 60) / 11 + Math.sin(st.t * 25 + i * 3 + j) * vib, y = y0 + 30 + j * (y1 - y0 - 60) / 3 + Math.cos(st.t * 23 + i + j * 2) * vib; CV.circle(c, x, y, 10, hexA(C.u6, .3), C.u6, 1.2); CV.text(c, '+', x, y + 1, C.u6, 12, 'center', 700); }
    const shown = Math.round(st.e.length * Math.min(1, n * 1.2 + (n > 0.001 ? 0.02 : 0)));
    st.e.slice(0, shown).forEach(([u, v]) => CV.circle(c, x0 + u * (x1 - x0), y0 + 10 + v * (y1 - y0 - 20), 3.4, C.u2));
    CV.arrow(c, W - 160, H - 40, W - 60, H - 40, C.u2, 2); CV.text(c, 'electron drift', W - 165, H - 40, C.u2, 12, 'right');
    CV.text(c, '−', x0 - 20, (y0 + y1) / 2, C.ink, 20, 'center', 700); CV.text(c, '+', x1 + 20, (y0 + y1) / 2, C.ink, 20, 'center', 700);
  },
  read(st) { const n = this.carriers(st); return [n >= 1 ? 'very many (≈ 10²⁹ m⁻³)' : n > 0.01 ? (n * 100).toFixed(1) + '% of copper (×10⁻¹⁰ in reality)' : 'almost none', (1 + st.p.T / 40).toFixed(1) + '× at 0 °C', this.I(st).toFixed(3), st.p.mat === 'cu' ? 'conductor' : st.p.mat === 'si' ? 'semiconductor' : 'insulator']; }
};

/* ---------- 5.4 Kirchhoff’s laws ---------- */
SIMS.kirchhoff = {
  title: 'Kirchhoff’s laws in a combination circuit', h: 440, noPlay: false,
  controls: [
    { id: 'V', label: 'Supply emf', min: 1.5, max: 12, step: 0.5, value: 9, fmt: v => v.toFixed(1) + ' V' },
    { id: 'R1', label: 'R₁ (series)', min: 1, max: 30, step: 1, value: 5, fmt: v => v + ' Ω' },
    { id: 'R2', label: 'R₂ (branch)', min: 1, max: 30, step: 1, value: 10, fmt: v => v + ' Ω' },
    { id: 'R3', label: 'R₃ (branch)', min: 1, max: 30, step: 1, value: 15, fmt: v => v + ' Ω' }
  ],
  readouts: ['Total resistance', 'Junction: I = I₂ + I₃', 'Loop: emf = V₁ + V₂', 'Branch pds'],
  note: 'Charge is conserved at the junction (first law) and energy is conserved round each loop (second law). Change any resistor and both laws still hold.',
  calc(st) { const p = st.p, Rp = p.R2 * p.R3 / (p.R2 + p.R3), R = p.R1 + Rp, I = p.V / R, V1 = I * p.R1, Vp = I * Rp; return { Rp, R, I, V1, Vp, I2: Vp / p.R2, I3: Vp / p.R3 }; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const r = this.calc(st), x0 = W * 0.12, x1 = W * 0.88, y0 = 70, y1 = H - 70, xj = W * 0.52, ya = (y0 + y1) / 2 - 50, yb = (y0 + y1) / 2 + 50, xr = x1;
    const loop = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
    CS.gaps(c, W, H, [[x0, (y0 + y1) / 2, CS.HALF.cell, true], [(x0 + xj) / 2, y0, CS.HALF.resistor], [(xj + xr) / 2, ya, CS.HALF.resistor], [(xj + xr) / 2, yb, CS.HALF.resistor]], () => {
      CS.wire(c, [[x0, y1], [x0, y0], [xj, y0], [xj, ya], [xr, ya], [xr, yb], [xj, yb], [xj, y0]], C.ink); CS.wire(c, [[xr, yb], [xr, y1], [x0, y1]], C.ink);
      CS.dots(c, [[x0, y1], [x0, y0], [xj, y0], [xj, ya], [xr, ya], [xr, y1], [x0, y1]], st.t, r.I2 * 90, C.u2, 18); CS.dots(c, [[xj, y0], [xj, yb], [xr, yb], [xr, y1], [x0, y1], [x0, y0]], st.t, r.I3 * 90, C.u5, 14, true); });
    CS.cell(c, x0, (y0 + y1) / 2, C.ink, true); CS.resistor(c, (x0 + xj) / 2, y0, C.ink, C.surface); CS.resistor(c, (xj + xr) / 2, ya, C.ink, C.surface); CS.resistor(c, (xj + xr) / 2, yb, C.ink, C.surface); CS.junction(c, xj, y0 > ya ? ya : y0, C.ink); CS.junction(c, xj, ya, C.ink); CS.junction(c, xr, yb, C.ink);
    CS.tag(c, C, `${st.p.V.toFixed(1)} V`, x0 - 12, (y0 + y1) / 2, 'right'); CS.tag(c, C, `R₁ ${st.p.R1} Ω · ${r.V1.toFixed(2)} V`, (x0 + xj) / 2, y0 - 26); CS.tag(c, C, `R₂ ${st.p.R2} Ω · ${r.I2.toFixed(2)} A`, (xj + xr) / 2, ya - 24); CS.tag(c, C, `R₃ ${st.p.R3} Ω · ${r.I3.toFixed(2)} A`, (xj + xr) / 2, yb + 26); CS.tag(c, C, `I = ${r.I.toFixed(2)} A`, x0 + 60, y1 + 22);
  },
  read(st) { const r = this.calc(st); return [r.R.toFixed(2) + ' Ω', `${r.I.toFixed(3)} = ${r.I2.toFixed(3)} + ${r.I3.toFixed(3)} A`, `${st.p.V.toFixed(2)} = ${r.V1.toFixed(2)} + ${r.Vp.toFixed(2)} V`, `V₂ = V₃ = ${r.Vp.toFixed(2)} V`]; }
};

/* ---------- 5.5 Potential divider with a sensor ---------- */
SIMS.potdiv = {
  title: 'Potential divider and sensors', h: 420, noPlay: true,
  controls: [
    { id: 'Vin', label: 'Supply pd', min: 3, max: 12, step: 0.5, value: 6, fmt: v => v.toFixed(1) + ' V' },
    { id: 'R1', label: 'Fixed resistor R₁', min: 0.5, max: 20, step: 0.5, value: 5, fmt: v => v + ' kΩ' },
    { id: 'mode', type: 'seg', label: 'R₂ is', value: 'fixed', options: [['fixed', 'Fixed resistor'], ['th', 'Thermistor'], ['ldr', 'LDR']] },
    { id: 'x', label: 'R₂ / temperature / light level', min: 0, max: 100, step: 1, value: 50, fmt: v => v }
  ],
  readouts: ['R₂', 'Current', 'V_out across R₂', 'V across R₁'],
  note: 'The supply pd is shared in the ratio of the resistances. With a thermistor, V_out falls as it warms; with an LDR, V_out falls as it gets brighter — the basis of automatic switches.',
  R2(st) { const x = st.p.x; return st.p.mode === 'fixed' ? Math.max(0.5, x / 5) : st.p.mode === 'th' ? 20 * Math.exp(-x / 30) + 0.3 : 30 * Math.exp(-x / 22) + 0.2; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const R2 = this.R2(st), p = st.p, Vo = p.Vin * R2 / (p.R1 + R2), x0 = 80, x1 = W * 0.45, y0 = 50, y1 = H - 50, ym = (y0 + y1) / 2;
    CS.gaps(c, W, H, [[x0, ym, CS.HALF.cell, true], [x1, (y0 + ym) / 2, CS.HALF.resistor, true], [x1, (ym + y1) / 2, CS.HALF.resistor, true]], () => CS.wire(c, [[x0, y0], [x1, y0], [x1, y1], [x0, y1], [x0, y0]], C.ink));
    CS.cell(c, x0, ym, C.ink, true); CS.resistor(c, x1, (y0 + ym) / 2, C.ink, C.surface, true); CS.resistor(c, x1, (ym + y1) / 2, C.ink, C.surface, true, p.mode !== 'fixed');
    CS.wire(c, [[x1, ym], [x1 + 90, ym]], C.ink); CS.wire(c, [[x1, y1], [x1 + 90, y1]], C.ink); CV.circle(c, x1 + 90, ym, 4, C.ink); CV.circle(c, x1 + 90, y1, 4, C.ink);
    CS.tag(c, C, `V_in ${p.Vin.toFixed(1)} V`, x0 - 14, ym, 'right'); CS.tag(c, C, `R₁ ${p.R1} kΩ`, x1 + 26, (y0 + ym) / 2, 'left'); CS.tag(c, C, `R₂ ${R2.toFixed(2)} kΩ`, x1 + 26, (ym + y1) / 2 - 20, 'left');
    const mx = W * 0.75, h0 = H - 80, bh = H - 140; CV.rrect(c, mx - 30, h0 - bh, 60, bh, 6, C.surface, C.line, 1.5); CV.rrect(c, mx - 30, h0 - bh * Vo / p.Vin, 60, bh * Vo / p.Vin, 6, hexA(C.u5, .6)); CV.text(c, `V_out ${Vo.toFixed(2)} V`, mx, h0 + 18, C.u5, 13, 'center', 700);
    if (p.mode !== 'fixed') CV.text(c, p.mode === 'th' ? `temperature ↑ → R₂ ↓` : 'brighter → R₂ ↓', mx, 30, C.muted, 12, 'center');
  },
  read(st) { const R2 = this.R2(st), p = st.p, I = p.Vin / (p.R1 + R2), Vo = I * R2; return [R2.toFixed(2) + ' kΩ', (I).toFixed(3) + ' mA', Vo.toFixed(2) + ' V', (p.Vin - Vo).toFixed(2) + ' V']; }
};

/* ---------- 5.6 Resistance of a wire ---------- */
SIMS.wire = {
  title: 'Resistance of a wire', h: 400, noPlay: true,
  controls: [
    { id: 'mat', type: 'seg', label: 'Material', value: 4.9e-7, options: [[1.7e-8, 'Copper'], [4.9e-7, 'Constantan'], [1.1e-6, 'Nichrome']] },
    { id: 'L', label: 'Length', min: 0.1, max: 1, step: 0.05, value: 0.5, fmt: v => v.toFixed(2) + ' m' },
    { id: 'd', type: 'seg', label: 'Diameter', value: 0.32, options: [[0.2, '0.20 mm'], [0.32, '0.32 mm'], [0.5, '0.50 mm'], [0.71, '0.71 mm']] },
    { id: 'T', label: 'Temperature', min: 20, max: 200, step: 5, value: 20, fmt: v => v + ' °C' }
  ],
  readouts: ['Cross-sectional area', 'Resistance', 'Current at 1.0 V', 'What changed?'],
  note: 'Longer wire → more collisions → R ∝ L. Thicker wire → more paths for electrons → R ∝ 1/A. Hotter wire → larger ion vibrations → more collisions → higher R (much more for copper than constantan).',
  R(st) { const p = st.p, A = Math.PI * (p.d * 1e-3) ** 2 / 4, alpha = p.mat < 1e-7 ? 0.0039 : p.mat < 1e-6 ? 0.00001 : 0.0004; return { A, R: p.mat * p.L / A * (1 + alpha * (p.T - 20)) }; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const { R } = this.R(st), p = st.p, x0 = 50, x1 = 50 + (W - 100) * p.L, y = H * 0.42, th = 4 + p.d * 26, hot = (p.T - 20) / 180;
    CV.line(c, 50, y + 60, W - 50, y + 60, C.line, 6); for (let k = 0; k <= 10; k++) { CV.line(c, 50 + (W - 100) * k / 10, y + 52, 50 + (W - 100) * k / 10, y + 68, C.ink, 1.2); CV.mono(c, (k / 10).toFixed(1), 50 + (W - 100) * k / 10, y + 82, C.muted, 10, 'center'); }
    c.fillStyle = `rgb(${Math.round(180 + 75 * hot)},${Math.round(150 - 70 * hot)},${Math.round(90 - 60 * hot)})`; c.fillRect(x0, y - th / 2, x1 - x0, th);
    const n = Math.round(6 + p.d * 14); for (let k = 0; k < n * 4; k++) { const xx = x0 + ((k * 53 + st.t * 60) % Math.max(1, x1 - x0)), yy = y - th / 2 + ((k * 7) % n + 0.5) * th / n; CV.circle(c, xx, yy, 1.8, C.u2); }
    CV.circle(c, x0, y, 7, C.ink); CV.circle(c, x1, y, 7, C.ink); CV.text(c, 'crocodile clips', (x0 + x1) / 2, y - th / 2 - 16, C.muted, 11, 'center');
    CV.text(c, `R = ${R < 1 ? R.toFixed(3) : R.toFixed(2)} Ω`, W / 2, H - 30, C.u5, 18, 'center', 700);
  },
  read(st) { const { A, R } = this.R(st); return [(A * 1e6).toFixed(3) + ' mm²', (R < 1 ? R.toFixed(3) : R.toFixed(2)) + ' Ω', (1 / R).toFixed(2) + ' A', 'R ∝ L, R ∝ 1/A, R rises with T']; }
};

/* ---------- 6.4 Building nuclear equations ---------- */
SIMS.decayeq = {
  title: 'Nuclear decay equations', h: 400, noPlay: true,
  controls: [
    { id: 'nuc', type: 'seg', label: 'Start with', value: 'U', options: [['U', 'Uranium-238'], ['C', 'Carbon-14'], ['Ra', 'Radium-226'], ['Co', 'Cobalt-60']] },
    { type: 'button', act: 'a', label: 'Alpha decay' }, { type: 'button', act: 'b', label: 'Beta decay' }, { type: 'button', act: 'g', label: 'Gamma emission' }, { type: 'button', act: 'r', label: 'Start again' }
  ],
  readouts: ['Nucleus', 'Protons / neutrons', 'Last change', 'Conserved'],
  note: 'Alpha: A − 4, Z − 2. Beta: a neutron becomes a proton — A unchanged, Z + 1. Gamma: the nucleus only loses energy. Top numbers and bottom numbers always balance.',
  EL: { 6: 'C', 7: 'N', 26: 'Fe', 27: 'Co', 28: 'Ni', 81: 'Tl', 82: 'Pb', 83: 'Bi', 84: 'Po', 85: 'At', 86: 'Rn', 87: 'Fr', 88: 'Ra', 89: 'Ac', 90: 'Th', 91: 'Pa', 92: 'U', 93: 'Np', 4: 'Be', 5: 'B', 24: 'Cr', 25: 'Mn' },
  START: { U: [238, 92], C: [14, 6], Ra: [226, 88], Co: [60, 27] },
  init(st) { const [A, Z] = this.START[st.p.nuc]; st.A = A; st.Z = Z; st.eq = ''; st.last = '—'; },
  change(st) { this.init(st); },
  action(st, a) { if (a === 'r') return this.init(st); const sym = z => this.EL[z] || 'X'; const A0 = st.A, Z0 = st.Z;
    if (a === 'a') { st.A -= 4; st.Z -= 2; st.eq = `${A0}/${Z0}${sym(Z0)} → ${st.A}/${st.Z}${sym(st.Z)} + 4/2He`; st.last = 'alpha: A − 4, Z − 2'; }
    if (a === 'b') { st.Z += 1; st.eq = `${A0}/${Z0}${sym(Z0)} → ${st.A}/${st.Z}${sym(st.Z)} + 0/−1e`; st.last = 'beta: n → p + e⁻; Z + 1'; }
    if (a === 'g') { st.eq = `${A0}/${Z0}${sym(Z0)}* → ${st.A}/${st.Z}${sym(st.Z)} + γ`; st.last = 'gamma: energy only'; } },
  nucl(c, x, y, A, Z, s, C) { CV.text(c, s, x, y, C.ink, 30, 'left', 700); CV.mono(c, String(A), x - 4, y - 16, C.ink, 14, 'right'); CV.mono(c, String(Z), x - 4, y + 16, C.ink, 14, 'right'); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const sym = this.EL[st.Z] || 'X', n = st.A - st.Z;
    const cx = W * 0.3, cy = H * 0.42, N = Math.min(st.A, 80), rr = 5.5, pts = []; let k = 0; for (let ring = 0; k < N; ring++) { const m = ring ? ring * 6 : 1; for (let i = 0; i < m && k < N; i++, k++) pts.push([cx + ring * rr * 1.8 * Math.cos(i / m * 6.283 + ring), cy + ring * rr * 1.8 * Math.sin(i / m * 6.283 + ring)]); }
    pts.forEach(([x, y], i) => CV.circle(c, x, y, rr, i < N * st.Z / st.A ? C.bad : C.u4, C.ink, 0.6));
    CV.text(c, `${st.Z} protons (red) · ${n} neutrons (blue)${st.A > 80 ? ' — not all drawn' : ''}`, cx, H - 40, C.muted, 12, 'center');
    this.nucl(c, W * 0.66, cy - 40, st.A, st.Z, sym, C);
    if (st.eq) { const parts = st.eq.split(/ → | \+ /), x0 = W * 0.52, y = cy + 60; let x = x0;
      parts.forEach((pt, i) => { if (i === 1) { CV.text(c, '→', x, y, C.ink, 22, 'left', 700); x += 34; } else if (i > 1) { CV.text(c, '+', x, y, C.ink, 22, 'left', 700); x += 28; }
        const m = pt.match(/^(\d+)\/(−?\d+)(\w+)(\*?)$/); if (m) { x += 24; this.nucl(c, x, y, m[1], m[2], m[3] + m[4], C); c.font = '700 30px IBM Plex Sans, sans-serif'; x += c.measureText(m[3] + m[4]).width + 14; } else { CV.text(c, pt, x, y, C.u5, 28, 'left', 700); x += 30; } }); }
  },
  read(st) { return [`${(this.EL[st.Z] || 'X')}-${st.A} (Z = ${st.Z})`, `${st.Z} / ${st.A - st.Z}`, st.last, 'A (nucleons) and Z (charge)']; }
};

/* ---------- S.1 Grade calculator ---------- */
SIMS.grades = {
  title: 'From criterion levels to an MYP grade', h: 360, noPlay: true,
  controls: ['A', 'B', 'C', 'D'].map(k => ({ id: k, label: 'Criterion ' + k, min: 0, max: 8, step: 1, value: 5, fmt: v => v })),
  readouts: ['Total', 'MYP grade', 'Next grade at', ''],
  note: 'Each criterion is a best-fit level out of 8. The total out of 32 converts to a grade from 1 to 7 using the general MYP boundaries.',
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const ks = ['A', 'B', 'C', 'D'], bw = Math.min(70, (W * 0.45) / 4 - 12), base = H - 50, s = (H - 110) / 8;
    ks.forEach((k, i) => { const x = 40 + i * (bw + 16), v = st.p[k]; CV.rrect(c, x, base - v * s, bw, v * s, 6, [C.u1, C.u2, C.u3, C.u4][i]); CV.text(c, k, x + bw / 2, base + 16, C.ink, 13, 'center', 700); CV.text(c, String(v), x + bw / 2, base - v * s - 12, C.ink, 13, 'center', 700); });
    const tot = ks.reduce((a, k) => a + st.p[k], 0), x0 = W * 0.55, w = W - x0 - 30;
    GRADE_BOUNDS.forEach(([a, b, gr], i) => { const y = 40 + i * ((H - 90) / 7), on = tot >= a && tot <= b; CV.rrect(c, x0, y, w, (H - 100) / 7, 6, on ? hexA(C.accent, .5) : C.surface, C.line, 1); CV.text(c, `grade ${gr}`, x0 + 12, y + (H - 100) / 14, C.ink, 13, 'left', on ? 700 : 500); CV.mono(c, `${a}–${b}`, x0 + w - 12, y + (H - 100) / 14, C.muted, 12, 'right'); });
  },
  read(st) { const tot = ['A', 'B', 'C', 'D'].reduce((a, k) => a + st.p[k], 0), gr = mypGrade(tot), nb = GRADE_BOUNDS.find(b => b[0] > tot); return [tot + ' / 32', gr ? String(gr) : '—', nb ? nb[0] + ' (grade ' + nb[2] + ')' : 'top grade', '']; }
};

/* ---------- tidy shared simulation titles and notes for an MYP course ---------- */
Object.values(SIMS).forEach(s => { if (s.title) s.title = s.title.replace(/\s*\((?:RP\d+|HT|Higher)\)/g, ''); if (s.note) s.note = s.note.replace(/\(HT\)\s*/g, '').replace(/\s*\(physics only\)/gi, '').replace(/\bRP\d+\b/g, 'the lab').replace(/\bAQA\b\s*/g, ''); });
