/* ==========================================================
   Simulations B · 4.4 Atomic structure · 4.5 Forces
   ========================================================== */

/* ---------- 4.1 Build an atom ---------- */
const ELEMENTS = ['', 'hydrogen', 'helium', 'lithium', 'beryllium', 'boron', 'carbon', 'nitrogen', 'oxygen', 'fluorine', 'neon', 'sodium', 'magnesium', 'aluminium', 'silicon', 'phosphorus', 'sulfur', 'chlorine', 'argon', 'potassium', 'calcium'];
const SYMS = ['', 'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca'];
const STABLE = { 1: [1, 2], 2: [3, 4], 3: [6, 7], 4: [9], 5: [10, 11], 6: [12, 13], 7: [14, 15], 8: [16, 17, 18], 9: [19], 10: [20, 21, 22], 11: [23], 12: [24, 25, 26], 13: [27], 14: [28, 29, 30], 15: [31], 16: [32, 33, 34, 36], 17: [35, 37], 18: [36, 38, 40], 19: [39, 41], 20: [40, 42, 43, 44, 46, 48] };
SIMS.atom = {
  title: 'Build an atom', h: 420, noPlay: true,
  controls: [{ type: 'button', act: 'p+', label: '+ proton' }, { type: 'button', act: 'p-', label: '− proton' }, { type: 'button', act: 'n+', label: '+ neutron' }, { type: 'button', act: 'n-', label: '− neutron' }, { type: 'button', act: 'e+', label: '+ electron' }, { type: 'button', act: 'e-', label: '− electron' }],
  readouts: ['Element (atomic number)', 'Mass number', 'Overall charge', 'Nucleus'],
  note: 'The number of protons decides the element. Changing the neutrons makes a different isotope of the same element. Adding or removing electrons makes an ion — losing electrons gives a positive ion. Electrons fill energy levels 2, 8, 8…',
  init(st) { st.p_ = 6; st.n_ = 6; st.e_ = 6; },
  action(st, a) { const k = a[0], d = a[1] === '+' ? 1 : -1; if (k === 'p') st.p_ = clamp(st.p_ + d, 1, 20); if (k === 'n') st.n_ = clamp(st.n_ + d, 0, 30); if (k === 'e') st.e_ = clamp(st.e_ + d, 0, 22); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const cx = W * 0.38, cy = H / 2, shells = [2, 8, 8, 4]; let left = st.e_;
    [60, 100, 140, 180].forEach((r, i) => { if (r > Math.min(cx, cy) + 20) return; c.strokeStyle = hexA(C.muted, .5); c.setLineDash([3, 5]); c.beginPath(); c.arc(cx, cy, r, 0, 7); c.stroke(); c.setLineDash([]); const n = Math.min(shells[i], left); left -= n; for (let k = 0; k < n; k++) { const a = k / n * 2 * Math.PI + st.t * (0.6 - i * 0.12); CV.circle(c, cx + r * Math.cos(a), cy + r * Math.sin(a), 6, C.u6, C.ink, 1); } });
    const N = st.p_ + st.n_, R = 7 + Math.sqrt(N) * 5.2; for (let i = 0; i < N; i++) { const a = i * 2.39996, r = R * Math.sqrt((i + 0.5) / N) * 0.85, isP = (i * 7) % N < st.p_; CV.circle(c, cx + r * Math.cos(a), cy + r * Math.sin(a), 6.5, isP ? C.u1 : C.muted, C.ink, 0.8); }
    const tx = W * 0.72; c.font = '700 64px STIX Two Text, serif'; c.fillStyle = C.ink; c.textAlign = 'left'; c.textBaseline = 'middle'; c.fillText(SYMS[st.p_], tx, cy);
    CV.text(c, String(N), tx - 6, cy - 30, C.ink, 22, 'right', 600, 'STIX Two Text, serif'); CV.text(c, String(st.p_), tx - 6, cy + 28, C.ink, 22, 'right', 600, 'STIX Two Text, serif');
    const q = st.p_ - st.e_; if (q) CV.text(c, (Math.abs(q) > 1 ? Math.abs(q) : '') + (q > 0 ? '+' : '−'), tx + 70, cy - 32, C.bad, 22, 'left', 700);
    [['proton', C.u1], ['neutron', C.muted], ['electron', C.u6]].forEach(([l, col], i) => { CV.circle(c, 22 + i * 80, H - 18, 5, col); CV.text(c, l, 31 + i * 80, H - 18, C.muted, 11); });
  },
  read(st) { const Z = st.p_, A = Z + st.n_, q = Z - st.e_, stable = (STABLE[Z] || []).includes(A); return [`${ELEMENTS[Z]} (${Z})`, A + ` — ${ELEMENTS[Z]}-${A}`, q === 0 ? '0 (neutral atom)' : (q > 0 ? '+' + q + ' (positive ion)' : q + ' (negative ion)'), stable ? 'stable isotope' : 'unstable — radioactive']; }
};

/* ---------- 4.1 Alpha scattering ---------- */
SIMS.rutherford = {
  title: 'Alpha particle scattering', h: 440, substeps: 6,
  controls: [{ id: 'model', type: 'seg', label: 'Model of the atom', value: 'nuc', options: [['nuc', 'Nuclear model'], ['pud', 'Plum pudding']] }, { id: 'rate', label: 'Alpha particles per second', min: 5, max: 60, step: 5, value: 25, fmt: v => v }],
  readouts: ['Straight through (< 10°)', 'Deflected (10°–90°)', 'Bounced back (> 90°)', 'Conclusion'],
  note: 'Alpha particles are positive. In the nuclear model almost all pass straight through (mostly empty space); a few that come very close to the tiny, dense, positive nucleus are deflected, and a very few bounce back. The plum pudding model predicts only tiny deflections — so the evidence rejected it. (Deflection exaggerated for visibility.)',
  init(st) { st.a = []; st.cnt = [0, 0, 0]; st.acc = 0; },
  change(st, id) { if (id === 'model') this.init(st); },
  step(st, dt) { const p = st.p, W = st.W, H = st.H, cx = W * 0.55, cy = H / 2; st.acc += dt * p.rate;
    while (st.acc > 1) { st.acc--; const b = (Math.random() - .5) * H * 0.9; st.a.push({ x: 10, y: cy + b, vx: 260, vy: 0, done: false }); }
    st.a.forEach(q => { if (p.model === 'nuc') { const ny = cy + clamp(Math.round((q.y - cy) / (H / 3)), -1, 1) * (H / 3), dx = q.x - cx, dy = q.y - ny, r2 = dx * dx + dy * dy + 1, r = Math.sqrt(r2), F = 1e5 / r2; q.vx += F * dx / r * dt; q.vy += F * dy / r * dt; } else { const dx = q.x - cx, dy = q.y - cy; if (Math.abs(dx) < 90 && Math.abs(dy) < H * 0.45) q.vy += (Math.random() - .5) * 60 * dt + dy * 0.02 * dt; }
      q.x += q.vx * dt; q.y += q.vy * dt; if (!q.done && (q.x > W - 10 || q.x < 5 || q.y < 0 || q.y > H)) { q.done = true; const ang = Math.abs(Math.atan2(q.vy, q.vx)) / deg; st.cnt[ang < 10 ? 0 : ang < 90 ? 1 : 2]++; } });
    st.a = st.a.filter(q => !q.done); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const cx = W * 0.55, cy = H / 2;
    if (st.p.model === 'nuc') { c.fillStyle = hexA(C.u6, .06); c.fillRect(cx - 90, 10, 180, H - 20); for (let i = -1; i <= 1; i++) CV.circle(c, cx, cy + i * H / 3, 3.5, C.u1); CV.text(c, 'tiny, dense, positive nuclei (enlarged)', cx, 24, C.muted, 11, 'center'); }
    else { for (let i = -3; i <= 3; i++) { CV.circle(c, cx, cy + i * 60, 28, hexA(C.u1, .14), hexA(C.u1, .4), 1); for (let k = 0; k < 4; k++) CV.text(c, '−', cx - 14 + k * 9, cy + i * 60 + (k % 2 ? 8 : -8), C.u6, 12, 'center', 800); } CV.text(c, 'positive “pudding” with electrons', cx, 24, C.muted, 11, 'center'); }
    CV.rrect(c, 4, cy - 14, 36, 28, 5, C.surface, C.ink, 1.5); CV.text(c, 'α', 22, cy, C.ink, 14, 'center', 700);
    st.a.forEach(q => CV.circle(c, q.x, q.y, 2.6, C.u1));
  },
  read(st) { const [a, b, d] = st.cnt, n = a + b + d || 1; return [`${a} (${(a / n * 100).toFixed(1)}%)`, `${b} (${(b / n * 100).toFixed(1)}%)`, `${d} (${(d / n * 100).toFixed(2)}%)`, st.p.model === 'nuc' ? (d ? 'tiny, dense, charged nucleus ✓' : 'wait for rare bounce-backs…') : 'no large deflections — does NOT match the experiment']; }
};

/* ---------- 4.2 Penetration and ionising power ---------- */
SIMS.penetrate = {
  title: 'Alpha, beta and gamma', h: 400,
  controls: [
    { id: 'src', type: 'seg', label: 'Source', value: 'b', options: [['a', 'Alpha α'], ['b', 'Beta β'], ['g', 'Gamma γ']] },
    { id: 'abs', type: 'seg', label: 'Absorber', value: 'none', options: [['none', 'None'], ['paper', 'Paper'], ['al', 'Aluminium 3 mm'], ['pb', 'Lead 2 cm']] },
    { id: 'd', label: 'Distance from source to detector', min: 3, max: 100, step: 1, value: 5, fmt: v => v + ' cm' }
  ],
  readouts: ['Count-rate (incl. background)', 'Background', 'Stopped by', 'Ionising power'],
  note: 'Subtract the background count (≈ 20 counts/min) before comparing. Alpha: stopped by paper or a few cm of air. Beta: stopped by a few mm of aluminium; about 1 m range in air. Gamma: only reduced by thick lead; very long range.',
  rate(p) { const d = p.d, T = { a: { none: 1, paper: 0, al: 0, pb: 0 }, b: { none: 1, paper: 0.95, al: 0.02, pb: 0 }, g: { none: 1, paper: 1, al: 0.97, pb: 0.3 } }[p.src][p.abs];
    const base = p.src === 'a' ? 900 * (d < 5 ? 1 - d / 5.5 : 0) : p.src === 'b' ? 800 * Math.exp(-d / 35) * 25 / (d + 4) : 300 * 25 / ((d + 4) ** 2 / 4); return base * T + 20; },
  init(st) { st.part = []; st.acc = 0; st.shown = 20; st.win = 0; st.cnt = 0; },
  change(st) { st.part = []; },
  step(st, dt) { const p = st.p, W = st.W, H = st.H, rate = this.rate(p), sx = 60, dx = sx + 30 + p.d * (W - 170) / 100; st.acc += dt * 12;
    while (st.acc > 1) { st.acc--; st.part.push({ x: sx + 20, y: H / 2 + (Math.random() - .5) * 30, vy: (Math.random() - .5) * 20, life: 0 }); }
    const ax = sx + 30 + (W - 170) * 0.012, range = p.src === 'a' ? 5 : p.src === 'b' ? 100 : 1e9;
    st.part.forEach(q => { const sp = p.src === 'a' ? 140 : p.src === 'b' ? 320 : 500; q.x += sp * dt; q.y += q.vy * dt; q.life += dt;
      const distcm = (q.x - sx - 30) / (W - 170) * 100; if (distcm > range * (0.8 + Math.random() * 0.4)) q.dead = true;
      if (!q.hitA && p.abs !== 'none' && q.x > ax) { q.hitA = true; const T = { a: { paper: 0 }, b: { paper: 0.95, al: 0.02, pb: 0 }, g: { paper: 1, al: 0.97, pb: 0.3 } }[p.src][p.abs] ?? 0; if (Math.random() > T) q.dead = true; }
      if (q.x > dx) q.dead = true; });
    st.part = st.part.filter(q => !q.dead);
    st.win += dt; if (Math.random() < rate / 60 * dt) st.cnt++; if (st.win > 3) { st.shown = Math.round(rate + (Math.random() - .5) * Math.sqrt(rate) * 2); st.win = 0; } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, sx = 60, cy = H / 2, dx = sx + 30 + p.d * (W - 170) / 100, col = { a: C.u1, b: C.u6, g: C.u7 }[p.src];
    CV.rrect(c, sx - 30, cy - 26, 50, 52, 6, '#5B6570', C.ink, 1.5); CV.text(c, { a: 'α', b: 'β', g: 'γ' }[p.src], sx - 5, cy, '#fff', 18, 'center', 800); CV.text(c, 'source', sx - 5, cy + 40, C.muted, 11, 'center');
    const ax = sx + 30 + (W - 170) * 0.012; if (p.abs !== 'none') { const w = { paper: 3, al: 8, pb: 22 }[p.abs], fill = { paper: '#F3EAD2', al: '#B8C2CC', pb: '#5B6570' }[p.abs]; CV.rrect(c, ax, cy - 90, w, 180, 2, fill, C.ink, 1); CV.text(c, { paper: 'paper', al: 'aluminium', pb: 'lead' }[p.abs], ax + w / 2, cy + 104, C.muted, 11, 'center'); }
    st.part.forEach(q => { if (p.src === 'g') { c.strokeStyle = col; c.lineWidth = 1.6; c.beginPath(); for (let i = 0; i < 10; i++) c.lineTo(q.x - i * 2, q.y + Math.sin((q.x - i * 2) * 0.5) * 3); c.stroke(); } else CV.circle(c, q.x, q.y, p.src === 'a' ? 4 : 2.4, col); });
    CV.rrect(c, dx, cy - 18, 80, 36, 8, C.surface, C.ink, 1.5); CV.text(c, 'GM tube', dx + 40, cy - 30, C.muted, 11, 'center'); CV.rrect(c, dx + 8, cy - 10, 64, 20, 4, '#0B1117'); CV.mono(c, String(st.shown), dx + 40, cy, '#6CFFA8', 12, 'center'); CV.text(c, 'counts/min', dx + 40, cy + 30, C.muted, 10, 'center');
    const px = (d) => sx + 30 + d * (W - 170) / 100; for (let d = 0; d <= 100; d += 20) { CV.line(c, px(d), H - 30, px(d), H - 24, C.ink, 1); CV.mono(c, d + ' cm', px(d), H - 14, C.muted, 9.5, 'center'); }
  },
  read(st) { const p = st.p; return [st.shown + ' counts/min', '≈ 20 counts/min', { a: 'paper / skin / a few cm of air', b: 'a few mm of aluminium', g: 'reduced by thick lead or concrete' }[p.src], { a: 'strongly ionising', b: 'moderately ionising', g: 'weakly ionising' }[p.src]]; }
};

/* ---------- 4.3 Random decay and half-life ---------- */
SIMS.decay = {
  title: 'Random decay and half-life', h: 460,
  controls: [
    { id: 'hl', label: 'Half-life', min: 1, max: 10, step: 0.5, value: 3, fmt: v => v.toFixed(1) + ' s' },
    { id: 'N0', type: 'seg', label: 'Number of nuclei', value: 400, options: [[100, '100'], [400, '400'], [1600, '1600']] },
    { id: 'dice', type: 'seg', label: 'Mode', value: 0, options: [[0, 'Nuclei'], [1, 'Dice model (a 6 = decay)']] }
  ],
  readouts: ['Undecayed nuclei', 'Time', 'Half-lives elapsed', 'Prediction N₀ × (½)ⁿ'],
  note: 'You cannot predict which nucleus decays next — decay is random. But with lots of nuclei the number halves every half-life. Compare 100 nuclei (bumpy) with 1600 (smooth). The dice model works the same way: each throw, every die showing 6 is removed.',
  init(st) { st.n = new Uint8Array(st.p.N0); st.hist = [[0, st.p.N0]]; st.tt = 0; st.acc = 0; st.throws = 0; },
  change(st, id) { if (id !== 'hl') this.init(st); },
  step(st, dt) { const p = st.p, lam = Math.LN2 / p.hl;
    if (p.dice) { st.acc += dt; if (st.acc >= 0.6) { st.acc = 0; st.throws++; for (let i = 0; i < st.n.length; i++) if (!st.n[i] && Math.random() < 1 / 6) st.n[i] = 1; const N = st.n.length - st.n.reduce((a, b) => a + b, 0); st.hist.push([st.throws, N]); } return; }
    st.tt += dt; const pr = 1 - Math.exp(-lam * dt); for (let i = 0; i < st.n.length; i++) if (!st.n[i] && Math.random() < pr) st.n[i] = 1;
    const N = st.n.length - st.n.reduce((a, b) => a + b, 0); if (st.tt - st.hist[st.hist.length - 1][0] > 0.1) st.hist.push([st.tt, N]); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, n = st.n.length, cols = Math.ceil(Math.sqrt(n)), gs = Math.min((H - 60) / cols, (W * 0.34) / cols);
    for (let i = 0; i < n; i++) { const x = 24 + (i % cols) * gs + gs / 2, y = 30 + Math.floor(i / cols) * gs + gs / 2; CV.circle(c, x, y, gs * 0.36, st.n[i] ? hexA(C.muted, .25) : C.u4); }
    const b = { x: 24 + cols * gs + 50, y: 30, w: W - (24 + cols * gs + 70), h: H - 90 }; if (b.w < 110) return;
    const xmax = p.dice ? 30 : p.hl * 6, T = p.dice ? Math.log(2) / -Math.log(5 / 6) : p.hl;
    const g2 = CV.plot(c, C, b, { xr: [0, xmax], yr: [0, n * 1.05], xl: p.dice ? 'throws' : 'time / s', yl: 'undecayed nuclei', series: [{ f: t => n * Math.pow(0.5, t / T), col: hexA(C.ink, .35), dash: [5, 4], w: 1.4 }, { pts: st.hist, col: C.u4, w: 2.4 }] });
    const sp = g2.X(T) - g2.X(0); for (let k = 1; k * T <= xmax; k++) { const x = g2.X(k * T); CV.line(c, x, b.y + b.h, x, b.y + b.h - 6, C.ink, 1); if (sp > 34 || k === 1) CV.mono(c, (k > 1 ? k : '') + 'T½', x, b.y + b.h - 14, C.muted, 9.5, 'center'); }
    CV.line(c, b.x, g2.Y(n / 2), g2.X(T), g2.Y(n / 2), C.muted, 1, [3, 4]); CV.line(c, g2.X(T), g2.Y(n / 2), g2.X(T), b.y + b.h, C.muted, 1, [3, 4]);
  },
  read(st) { const p = st.p, N = st.n.length - st.n.reduce((a, b) => a + b, 0), t = p.dice ? st.throws : st.tt, T = p.dice ? Math.log(2) / -Math.log(5 / 6) : p.hl, nh = t / T; return [N, p.dice ? st.throws + ' throws' : t.toFixed(1) + ' s', nh.toFixed(2), (st.n.length * Math.pow(0.5, nh)).toFixed(0)]; }
};

/* ---------- 4.4 Choosing a medical tracer ---------- */
const TRACERS = { tc: ['Technetium-99m', 'γ', 6, 'hours'], i131: ['Iodine-131', 'β and γ', 8 * 24, 'hours'], am: ['Americium-241', 'α', 432 * 365 * 24, 'hours'], co: ['Cobalt-60', 'γ', 5.3 * 365 * 24, 'hours'] };
SIMS.tracer = {
  title: 'Choosing a medical tracer', h: 420,
  controls: [{ id: 'iso', type: 'seg', label: 'Isotope', value: 'tc', options: [['tc', 'Tc-99m (γ, 6 h)'], ['i131', 'I-131 (β/γ, 8 days)'], ['am', 'Am-241 (α, 432 y)'], ['co', 'Co-60 (γ, 5.3 y)']] }],
  readouts: ['Detected outside the body?', 'Activity left after 24 h', 'Dose to the patient', 'Verdict'],
  note: 'A good tracer emits gamma (it passes out of the body to the camera and is weakly ionising) and has a half-life of a few hours — long enough for the scan, short enough that the activity quickly falls. Time runs 1 hour per second.',
  init(st) { st.h = 0; },
  change(st) { st.h = 0; },
  step(st, dt) { st.h = Math.min(48, st.h + dt); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const [name, rad, T] = TRACERS[st.p.iso], A = Math.pow(0.5, st.h / T), cx = W * 0.3, cy = H * 0.52, gamma = rad.includes('γ');
    c.fillStyle = hexA(C.u3, .15); c.strokeStyle = C.ink; c.lineWidth = 1.5; c.beginPath(); c.ellipse(cx, cy - 120, 30, 34, 0, 0, 7); c.fill(); c.stroke(); CV.rrect(c, cx - 60, cy - 84, 120, 200, 40, hexA(C.u3, .15), C.ink, 1.5);
    CV.circle(c, cx + 14, cy - 10, 26, hexA(C.u1, 0.2 + 0.6 * A), C.u1, 1.5); CV.text(c, 'kidney', cx + 14, cy + 26, C.muted, 10, 'center');
    const n = Math.round(14 * A); for (let i = 0; i < n; i++) { const a = (i / 14) * 2 * Math.PI + st.t * 0.3, r0 = 28, r1 = gamma ? 150 : rad.startsWith('β') ? 60 : 32; const r = r0 + ((st.t * 120 + i * 40) % (r1 - r0)); CV.circle(c, cx + 14 + r * Math.cos(a), cy - 10 + r * Math.sin(a), 2.4, gamma ? C.u7 : C.u1); }
    CV.rrect(c, W * 0.62, cy - 60, 90, 120, 10, C.surface, C.ink, 1.5); CV.text(c, 'gamma camera', W * 0.62 + 45, cy - 74, C.muted, 11, 'center'); CV.mono(c, gamma ? Math.round(500 * A) + ' /s' : '0 /s', W * 0.62 + 45, cy, gamma ? C.good : C.bad, 14, 'center');
    CV.mono(c, 't = ' + st.h.toFixed(0) + ' h', 20, 22, C.ink, 13); CV.text(c, name + ' · emits ' + rad, 20, 42, C.muted, 12);
  },
  read(st) { const [, rad, T] = TRACERS[st.p.iso], A24 = Math.pow(0.5, 24 / T), gamma = rad.includes('γ'), alpha = rad === 'α', good = st.p.iso === 'tc';
    return [gamma ? 'yes — γ escapes the body' : 'no — α is absorbed inside', (A24 * 100).toFixed(A24 < 0.01 ? 2 : 0) + '%', alpha ? 'very high (strongly ionising)' : T > 1000 ? 'high — stays active for years' : T > 100 ? 'moderate' : 'low', good ? 'Ideal tracer ✓' : alpha ? 'Unsuitable' : T > 1000 ? 'Unsuitable (half-life too long)' : 'Used for thyroid treatment rather than imaging']; }
};

/* ---------- 4.5 Chain reaction ---------- */
SIMS.fission = {
  title: 'Nuclear fission chain reaction', h: 440,
  controls: [{ id: 'rods', label: 'Control rods inserted', min: 0, max: 90, step: 5, value: 45, fmt: v => v + '%' }, { type: 'button', act: 'fire', label: 'Fire a neutron' }, { type: 'button', act: 'reset2', label: 'Refill with U-235' }],
  readouts: ['Fissions so far', 'Free neutrons', 'Neutrons causing further fission', 'Chain reaction'],
  note: 'Each U-235 nucleus that absorbs a neutron splits into two smaller nuclei, releasing energy and 2 or 3 neutrons. With no control rods the reaction runs away (a bomb is an uncontrolled chain reaction). In a reactor, control rods absorb neutrons so, on average, one neutron from each fission causes another — a steady, controlled release of energy.',
  init(st) { const W = st.W || 600, H = st.H || 440; st.U = []; for (let i = 0; i < 14; i++) for (let j = 0; j < 9; j++) st.U.push({ x: 40 + i * (W - 80) / 13 + (j % 2) * 10, y: 34 + j * (H - 70) / 8, s: 0 }); st.nn = []; st.frag = []; st.fis = 0; st.hits = 0; st.caused = 0; st.flash = []; },
  action(st, a) { if (a === 'fire') st.nn.push({ x: 4, y: st.H / 2, vx: 160, vy: 0, gen: 0 }); if (a === 'reset2') this.init(st); },
  step(st, dt) { const rods = st.p.rods / 100, W = st.W, H = st.H;
    st.nn.forEach(n => { n.x += n.vx * dt; n.y += n.vy * dt; if (n.x < 0 || n.x > W || n.y < 0 || n.y > H) n.dead = true; if (!n.dead && Math.random() < rods * 0.9 * dt * 2.2) { n.dead = true; n.absorbed = true; }
      if (!n.dead) for (const u of st.U) if (!u.s && Math.hypot(u.x - n.x, u.y - n.y) < 11) { u.s = 1; n.dead = true; st.fis++; if (n.gen > 0) st.caused++; st.flash.push({ x: u.x, y: u.y, t: 0 }); const k = Math.random() < 0.5 ? 2 : 3; for (let i = 0; i < k; i++) { const a = Math.random() * 2 * Math.PI; st.nn.push({ x: u.x, y: u.y, vx: 150 * Math.cos(a), vy: 150 * Math.sin(a), gen: n.gen + 1 }); } for (let i = 0; i < 2; i++) { const a = Math.random() * 2 * Math.PI; st.frag.push({ x: u.x, y: u.y, vx: 40 * Math.cos(a), vy: 40 * Math.sin(a), t: 0 }); } break; } });
    st.nn = st.nn.filter(n => !n.dead); st.frag.forEach(f => { f.x += f.vx * dt; f.y += f.vy * dt; f.t += dt; }); st.frag = st.frag.filter(f => f.t < 1.2); st.flash.forEach(f => f.t += dt); st.flash = st.flash.filter(f => f.t < 0.4); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const rods = st.p.rods / 100;
    for (let i = 0; i < 4; i++) { const x = 40 + (1.5 + i * 3.33) * (W - 80) / 13 + 5; CV.rrect(c, x - 5, -4, 10, H * rods, 3, hexA(C.muted, .55)); }
    st.U.forEach(u => { if (!u.s) { CV.circle(c, u.x, u.y, 9, C.u4, C.ink, 1); } });
    st.flash.forEach(f => CV.circle(c, f.x, f.y, 10 + 40 * f.t, `rgba(255,210,90,${0.6 * (1 - f.t / 0.4)})`));
    st.frag.forEach(f => CV.circle(c, f.x, f.y, 6, hexA(C.u2, 1 - f.t / 1.2)));
    st.nn.forEach(n => CV.circle(c, n.x, n.y, 3, C.ink));
    CV.text(c, 'U-235 ●  neutron •  control rods ▮', W - 10, H - 12, C.muted, 11, 'right');
  },
  read(st) { const free = st.nn.length, ratio = st.fis > 1 ? st.caused / Math.max(1, st.fis) : 0; return [st.fis, free, st.fis ? (ratio * 100).toFixed(0) + '%' : '—', !st.fis ? 'fire a neutron' : free === 0 ? 'stopped' : free > 25 ? 'RUNAWAY — uncontrolled' : 'controlled / slow']; }
};

/* ---------- 5.1 Resultant forces ---------- */
SIMS.forces = {
  title: 'Resultant forces', h: 420,
  controls: [
    { id: 'mode', type: 'seg', label: 'Forces', value: 'line', options: [['line', 'In a straight line'], ['angle', 'At an angle (Higher)']] },
    { id: 'F1', label: 'Force 1', min: 0, max: 100, step: 5, value: 60, fmt: v => v + ' N' },
    { id: 'F2', label: 'Force 2', min: 0, max: 100, step: 5, value: 40, fmt: v => v + ' N' },
    { id: 'th', label: 'Angle between the forces (Higher)', min: 0, max: 180, step: 5, value: 90, fmt: v => v + '°' },
    { id: 'm', label: 'Mass of the box', min: 5, max: 50, step: 5, value: 20, fmt: v => v + ' kg' }
  ],
  readouts: ['Resultant force', 'Direction', 'Acceleration a = F ÷ m', 'Balanced?'],
  note: 'Straight line: forces in the same direction add; in opposite directions subtract (force 2 acts to the left here). Higher: two forces at an angle — draw them tip-to-tail to scale; the resultant goes from the tail of the first to the tip of the second.',
  init(st) { st.x = 0; st.v = 0; },
  change(st) { this.init(st); },
  res(p) { if (p.mode === 'line') return [p.F1 - p.F2, 0]; const a = p.th * deg; return [p.F1 + p.F2 * Math.cos(a), p.F2 * Math.sin(a)]; },
  step(st, dt) { if (st.p.mode !== 'line') return; const [R] = this.res(st.p); st.v += R / st.p.m * dt * 0.5; st.x += st.v * dt * 20; if (Math.abs(st.x) > st.W * 0.35) this.init(st); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, [Rx, Ry] = this.res(p), sc = 1.6;
    if (p.mode === 'line') { const cx = W / 2 + st.x, cy = H * 0.45; CV.line(c, 10, cy + 30, W - 10, cy + 30, C.muted, 2); CV.rrect(c, cx - 40, cy - 30, 80, 60, 6, C.surface, C.ink, 2); CV.text(c, p.m + ' kg', cx, cy, C.ink, 12, 'center', 700);
      if (p.F1) { CV.arrow(c, cx + 40, cy, cx + 40 + p.F1 * sc, cy, C.u5, 3); CV.mono(c, p.F1 + ' N', cx + 44 + p.F1 * sc / 2, cy - 12, C.u5, 12, 'center'); }
      if (p.F2) { CV.arrow(c, cx - 40, cy, cx - 40 - p.F2 * sc, cy, C.u1, 3); CV.mono(c, p.F2 + ' N', cx - 44 - p.F2 * sc / 2, cy - 12, C.u1, 12, 'center'); }
      if (Rx) CV.arrow(c, W / 2 - Rx * sc / 2, H - 60, W / 2 + Rx * sc / 2, H - 60, C.accent, 5); CV.text(c, Rx ? `resultant ${Math.abs(Rx)} N ${Rx > 0 ? '→' : '←'}` : 'resultant = 0 (balanced)', W / 2, H - 34, C.ink, 13, 'center', 700);
    } else { const ox = W * 0.2, oy = H * 0.7, a = p.th * deg, s2 = Math.min(2.4, (W * 0.6) / Math.max(1, p.F1 + p.F2));
      CV.arrow(c, ox, oy, ox + p.F1 * s2, oy, C.u5, 3); CV.mono(c, 'F₁ = ' + p.F1 + ' N', ox + p.F1 * s2 / 2, oy + 16, C.u5, 12, 'center');
      const tx = ox + p.F1 * s2, ty = oy; CV.arrow(c, tx, ty, tx + p.F2 * s2 * Math.cos(a), ty - p.F2 * s2 * Math.sin(a), C.u1, 3); CV.mono(c, 'F₂ = ' + p.F2 + ' N', tx + p.F2 * s2 * Math.cos(a) / 2 + 10, ty - p.F2 * s2 * Math.sin(a) / 2, C.u1, 12);
      CV.arrow(c, ox, oy, ox + Rx * s2, oy - Ry * s2, C.accent, 4); CV.mono(c, 'resultant', ox + Rx * s2 / 2 - 30, oy - Ry * s2 / 2 - 14, C.ink, 12, 'center');
      CV.text(c, 'tip-to-tail vector diagram (scale drawing)', 20, 24, C.muted, 11.5); }
  },
  read(st) { const p = st.p, [Rx, Ry] = this.res(p), R = Math.hypot(Rx, Ry); return [R.toFixed(1) + ' N', p.mode === 'line' ? (Rx > 0 ? 'to the right' : Rx < 0 ? 'to the left' : '—') : (Math.atan2(Ry, Rx) / deg).toFixed(0) + '° from force 1', (R / p.m).toFixed(2) + ' m/s²', R < 0.01 ? 'yes — equilibrium' : 'no']; }
};

/* ---------- 5.2 Force and extension (RP6) ---------- */
SIMS.spring = {
  title: 'Force and extension (RP6)', h: 460, noPlay: true,
  controls: [
    { id: 'obj', type: 'seg', label: 'Object', value: 25, options: [[25, 'Soft spring'], [50, 'Stiff spring'], [0, 'Rubber band']] },
    { type: 'button', act: 'add', label: 'Add a 1 N weight' }, { type: 'button', act: 'rem', label: 'Remove a weight' }, { type: 'button', act: 'clr', label: 'Remove all' }
  ],
  readouts: ['Force (weight)', 'Extension', 'Spring constant k = F ÷ e', 'Elastic energy ½ke²'],
  note: 'Up to the limit of proportionality, extension is directly proportional to force (F = ke) — a straight line through the origin. Load it too far and the spring deforms inelastically: remove all the weights and it doesn’t return to its original length. A rubber band is non-linear.',
  init(st) { st.F = 0; st.maxF = 0; st.pts = []; },
  change(st) { this.init(st); },
  e(st, F) { const k = st.p.obj; if (!k) return 0.08 * (1 - Math.exp(-F / 3)) + 0.012 * F; const lim = k === 25 ? 6 : 10, eL = lim / k; const perm = Math.max(0, st.maxF - lim) * 0.03; return F <= lim ? F / k + (F < st.maxF ? perm * (F / lim) : 0) : eL + (F - lim) * 0.035 + perm * 0; },
  action(st, a) { if (a === 'add') st.F = Math.min(14, st.F + 1); if (a === 'rem') st.F = Math.max(0, st.F - 1); if (a === 'clr') st.F = 0; st.maxF = Math.max(st.maxF, st.F); const e = this.eAt(st); if (!st.pts.some(q => q[0] === st.F && Math.abs(q[1] - e) < 1e-4)) st.pts.push([st.F, e]); },
  eAt(st) { const k = st.p.obj, F = st.F; if (!k) return this.e(st, F); const lim = k === 25 ? 6 : 10, perm = Math.max(0, st.maxF - lim) * 0.035; if (F > lim && F >= st.maxF) return lim / k + (F - lim) * 0.035; return F / k + perm; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const e = this.eAt(st), sx = Math.max(90, W * 0.16), top = 30, scale = 900, len = 70 + e * scale;
    CV.line(c, sx - 60, top, sx + 60, top, C.ink, 5); c.strokeStyle = st.p.obj ? C.ink : C.u2; c.lineWidth = st.p.obj ? 1.8 : 5; c.beginPath(); c.moveTo(sx, top);
    if (st.p.obj) { const coils = 16; for (let i = 0; i <= coils; i++) c.lineTo(sx + (i % 2 ? 10 : -10) * (i && i < coils ? 1 : 0), top + len * i / coils); } else { c.lineTo(sx, top + len); } c.stroke();
    for (let i = 0; i < st.F; i++) CV.rrect(c, sx - 18, top + len + i * 10, 36, 9, 2, C.u5, C.ink, 1);
    const rx = sx + 50; CV.rrect(c, rx, top, 18, H - 60, 2, hexA(C.u2, .25), C.ink, 1); for (let i = 0; i <= 30; i++) CV.line(c, rx, top + i * (H - 60) / 30, rx + (i % 5 ? 5 : 10), top + i * (H - 60) / 30, C.ink, 1);
    CV.line(c, sx + 12, top + len, rx, top + len, C.bad, 2); CV.mono(c, 'e = ' + (e * 100).toFixed(1) + ' cm', sx - 16, top + len + 14, C.bad, 11.5, 'right');
    const b = { x: W * 0.46, y: 30, w: W * 0.5, h: H - 90 }; const emax = st.p.obj ? (st.p.obj === 25 ? 0.5 : 0.35) : 0.35;
    CV.plot(c, C, b, { xr: [0, emax], yr: [0, 15], xl: 'extension / m', yl: 'force / N', series: st.p.obj ? [{ f: x => x * st.p.obj, col: hexA(C.muted, .45), w: 1.2, dash: [4, 4] }] : [], dots: st.pts.map(q => [q[1], q[0], C.u5, 4]).concat([[e, st.F, C.bad, 6]]) });
    if (st.p.obj) CV.text(c, 'limit of proportionality ≈ ' + (st.p.obj === 25 ? 6 : 10) + ' N', b.x + 8, b.y + 20, C.muted, 11);
  },
  read(st) { const e = this.eAt(st), F = st.F; return [F + ' N', (e * 100).toFixed(1) + ' cm = ' + e.toFixed(3) + ' m', e > 0 ? (F / e).toFixed(0) + ' N/m' + (st.p.obj && F > (st.p.obj === 25 ? 6 : 10) ? ' (beyond limit!)' : '') : '—', st.p.obj ? (0.5 * st.p.obj * Math.min(e, (st.p.obj === 25 ? 6 : 10) / st.p.obj) ** 2).toFixed(3) + ' J' : 'use area under graph']; }
};

/* ---------- 5.3 Moments (GCSE) ---------- */
SIMS.moments = {
  title: 'Balance the seesaw', h: 400,
  controls: [
    { id: 'm1', label: 'Left weight', min: 50, max: 800, step: 50, value: 400, fmt: v => v + ' N' },
    { id: 'd1', label: 'Left distance from pivot', min: 0.25, max: 2.0, step: 0.25, value: 1.5, fmt: v => v.toFixed(2) + ' m' },
    { id: 'm2', label: 'Right weight', min: 50, max: 800, step: 50, value: 600, fmt: v => v + ' N' },
    { id: 'd2', label: 'Right distance from pivot', min: 0.25, max: 2.0, step: 0.25, value: 0.75, fmt: v => v.toFixed(2) + ' m' }
  ],
  readouts: ['Anticlockwise moment (left)', 'Clockwise moment (right)', 'Resultant moment', 'Balanced?'],
  note: 'Moment = force × perpendicular distance from the pivot (M = Fd). The seesaw balances when the total clockwise moment equals the total anticlockwise moment. Try 400 N at 1.5 m against 600 N at 1.0 m.',
  init(st) { st.ang = 0; st.w = 0; },
  step(st, dt) { const p = st.p, net = p.m2 * p.d2 - p.m1 * p.d1, target = clamp(net * 0.0006, -0.25, 0.25); st.w += (target - st.ang) * 20 * dt; st.w *= 0.9; st.ang += st.w * dt * 6; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, cx = W / 2, cy = H * 0.55, sc = Math.min(W * 0.4, 330) / 2.2, bal = Math.abs(p.m2 * p.d2 - p.m1 * p.d1) < 1e-9;
    c.fillStyle = C.muted; c.beginPath(); c.moveTo(cx, cy + 4); c.lineTo(cx - 22, cy + 44); c.lineTo(cx + 22, cy + 44); c.closePath(); c.fill(); CV.line(c, cx - 60, cy + 44, cx + 60, cy + 44, C.ink, 2);
    c.save(); c.translate(cx, cy); c.rotate(st.ang); CV.rrect(c, -2.2 * sc, -6, 4.4 * sc, 12, 4, bal ? C.good : C.ink);
    for (let m = -2; m <= 2.001; m += 0.25) CV.line(c, m * sc, -6, m * sc, Math.abs(m % 1) < 0.01 ? 6 : 0, C.bg, 1);
    const kid = (x, w, col) => { const s = 12 + w / 30; CV.circle(c, x, -6 - s - 12, s * 0.45, col); CV.rrect(c, x - s / 2, -6 - s, s, s, 4, col); CV.mono(c, w + ' N', x, -6 - s - 32 - s * 0.4, C.ink, 11, 'center'); };
    kid(-p.d1 * sc, p.m1, C.u1); kid(p.d2 * sc, p.m2, C.u5); c.restore();
    CV.mono(c, bal ? 'BALANCED ✓' : (p.m2 * p.d2 > p.m1 * p.d1 ? 'turns clockwise ↻' : 'turns anticlockwise ↺'), cx, 26, bal ? C.good : C.muted, 14, 'center');
  },
  read(st) { const p = st.p, a = p.m1 * p.d1, cw = p.m2 * p.d2; return [a.toFixed(0) + ' Nm', cw.toFixed(0) + ' Nm', Math.abs(cw - a).toFixed(0) + ' Nm', Math.abs(cw - a) < 1e-9 ? 'yes ✓' : 'no']; }
};

/* ---------- 5.3 Gears ---------- */
SIMS.gears = {
  title: 'Gears as force multipliers', h: 400,
  controls: [
    { id: 'n1', label: 'Teeth on driving gear', min: 8, max: 40, step: 2, value: 12, fmt: v => v },
    { id: 'n2', label: 'Teeth on driven gear', min: 8, max: 40, step: 2, value: 30, fmt: v => v },
    { id: 'M1', label: 'Moment applied to driving gear', min: 2, max: 20, step: 1, value: 10, fmt: v => v + ' Nm' }
  ],
  readouts: ['Driven gear turns', 'Speed of driven gear', 'Moment on driven gear', 'Direction'],
  note: 'Meshing gears push on each other with equal forces at the teeth. The moment is force × radius, so a larger driven gear gives a bigger moment but turns more slowly — and in the opposite direction. (Friction ignored.)',
  init(st) { st.a = 0; },
  step(st, dt) { st.a += dt * 1.2; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, u = Math.min(W * 0.84 / (p.n1 + p.n2), (H - 70) / Math.max(p.n1, p.n2)), r1 = p.n1 * u / 2, r2 = p.n2 * u / 2, cx1 = W / 2 - (r1 + r2) / 2, cx2 = cx1 + r1 + r2, cy = H / 2 - 12;
    const gear = (cx, r, n, ang, col) => { c.fillStyle = hexA(col, .85); c.strokeStyle = C.ink; c.lineWidth = 1.2; c.beginPath(); for (let i = 0; i < n * 2; i++) { const a0 = ang + i * Math.PI / n, a1 = ang + (i + 1) * Math.PI / n, R = i % 2 ? r - 4 : r + 4; c.arc(cx, cy, R, a0, a1); } c.closePath(); c.fill(); c.stroke(); CV.circle(c, cx, cy, 6, C.ink); CV.line(c, cx, cy, cx + (r - 12) * Math.cos(ang), cy + (r - 12) * Math.sin(ang), '#fff', 3); };
    gear(cx1, r1, p.n1, st.a, C.u5); gear(cx2, r2, p.n2, -st.a * p.n1 / p.n2 + Math.PI / p.n2, C.u3);
    CV.text(c, 'driving', cx1, cy + r1 + 22, C.ink, 12, 'center', 700); CV.text(c, 'driven', cx2, cy + r2 + 22, C.ink, 12, 'center', 700);
  },
  read(st) { const p = st.p, r = p.n2 / p.n1; return [r >= 1 ? 'slower' : 'faster', (1 / r).toFixed(2) + ' × the driving gear', (p.M1 * r).toFixed(1) + ' Nm', 'opposite to the driving gear']; }
};

/* ---------- 5.4 Pressure in fluids and upthrust ---------- */
SIMS.fluid = {
  title: 'Pressure, upthrust and floating', h: 440,
  controls: [
    { id: 'liq', type: 'seg', label: 'Liquid', value: 1000, options: [[1000, 'Fresh water'], [1030, 'Seawater'], [800, 'Oil']] },
    { id: 'h', label: 'Depth of pressure sensor (Higher)', min: 0, max: 10, step: 0.5, value: 4, fmt: v => v.toFixed(1) + ' m' },
    { id: 'rho', label: 'Density of the block', min: 200, max: 2000, step: 50, value: 600, fmt: v => v + ' kg/m³' }
  ],
  readouts: ['Pressure due to liquid p = hρg', 'Block: weight', 'Block: upthrust', 'Floats or sinks?'],
  note: 'Pressure increases with depth and with the density of the liquid. A submerged block has more pressure on its bottom face than its top, giving an upward resultant force — upthrust. It floats if it is less dense than the liquid (it sinks until upthrust = weight). Block volume 0.001 m³; g = 9.8 N/kg.',
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, tx = 40, ty = 40, tw = W - 80, th = H - 70, depthPx = th / 10.5;
    c.fillStyle = hexA(p.liq === 800 ? C.u2 : C.u6, .22); c.fillRect(tx, ty, tw, th); CV.line(c, tx, ty, tx, ty + th, C.ink, 2); CV.line(c, tx, ty + th, tx + tw, ty + th, C.ink, 2); CV.line(c, tx + tw, ty, tx + tw, ty + th, C.ink, 2);
    for (let d = 0; d <= 10; d += 2) { CV.line(c, tx - 8, ty + d * depthPx, tx, ty + d * depthPx, C.ink, 1); CV.mono(c, d + ' m', tx - 10, ty + d * depthPx, C.muted, 10, 'right'); }
    const sx = tx + tw * 0.25, sy = ty + p.h * depthPx, pr = p.h * p.liq * g; CV.circle(c, sx, sy, 9, C.surface, C.ink, 2); [0, 1, 2, 3].forEach(k => { const a = k * Math.PI / 2, L = 8 + pr / 6000; CV.arrow(c, sx + (10 + L) * Math.cos(a), sy + (10 + L) * Math.sin(a), sx + 11 * Math.cos(a), sy + 11 * Math.sin(a), C.u1, 1.6); }); CV.mono(c, (pr / 1000).toFixed(1) + ' kPa', sx + 30, sy - 16, C.ink, 11.5);
    const bs = 60, f = Math.min(1, p.rho / p.liq), bx = tx + tw * 0.65, by = p.rho < p.liq ? ty - bs * (1 - f) : ty + th - bs - 2;
    CV.rrect(c, bx - bs / 2, by, bs, bs, 4, '#B08D57', C.ink, 1.5);
    const Vb = 0.001, Wt = p.rho * Vb * g, up = p.rho < p.liq ? Wt : p.liq * Vb * g, fs = 5, my = by + bs / 2;
    CV.arrow(c, bx - 10, my, bx - 10, my + Wt * fs, C.u1, 2.6); CV.text(c, 'weight', bx - bs / 2 - 6, my + 16, C.u1, 11, 'right');
    CV.arrow(c, bx + 10, my, bx + 10, my - up * fs, C.u6, 2.6); CV.text(c, 'upthrust', bx + bs / 2 + 6, my - 16, C.u6, 11);
  },
  read(st) { const p = st.p, Vb = 0.001, Wt = p.rho * Vb * g, fl = p.rho < p.liq, up = fl ? Wt : p.liq * Vb * g; return [(p.h * p.liq * g).toFixed(0) + ' Pa', Wt.toFixed(2) + ' N', up.toFixed(2) + ' N', fl ? `floats (${(p.rho / p.liq * 100).toFixed(0)}% submerged)` : 'sinks — weight > upthrust']; }
};

/* ---------- 5.5 Motion graphs ---------- */
const MOTIONS = { steady: [[0, 12], [30, 12]], accel: [[0, 0], [15, 24], [30, 24]], stopgo: [[0, 0], [5, 15], [12, 15], [16, 0], [20, 0], [26, 20], [30, 20]], decel: [[0, 25], [8, 25], [18, 0], [30, 0]] };
SIMS.motion = {
  title: 'Distance–time and velocity–time graphs', h: 460,
  controls: [
    { id: 'm', type: 'seg', label: 'Journey', value: 'stopgo', options: [['steady', 'Steady speed'], ['accel', 'Speeding up'], ['stopgo', 'Stop–start'], ['decel', 'Braking']] },
    { id: 'tan', type: 'seg', label: 'Show (Higher)', value: 0, options: [[0, 'Graphs only'], [1, 'Tangent & area']] }
  ],
  readouts: ['Time', 'Velocity', 'Distance travelled', 'Acceleration'],
  note: 'Gradient of distance–time = speed. Gradient of velocity–time = acceleration. Higher: the tangent to the d–t curve gives the speed at an instant, and the shaded area under the v–t graph is the distance travelled.',
  v(m, t) { const k = MOTIONS[m]; for (let i = 1; i < k.length; i++) if (t <= k[i][0]) { const [t0, v0] = k[i - 1], [t1, v1] = k[i]; return v0 + (v1 - v0) * (t - t0) / (t1 - t0); } return k[k.length - 1][1]; },
  s(m, t) { let s = 0; const n = 300; for (let i = 0; i < n; i++) s += this.v(m, t * (i + .5) / n) * t / n; return s; },
  init(st) { st.tt = 0; },
  change(st, id) { if (id === 'm') this.init(st); },
  step(st, dt) { st.tt += dt * 3; if (st.tt > 30) st.tt = 0; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, m = p.m, t = st.tt, v = this.v(m, t), smax = this.s(m, 30) * 1.05 || 10;
    const ry = 40, sc = (W - 80) / smax, x = 40 + this.s(m, t) * sc; CV.line(c, 30, ry + 16, W - 30, ry + 16, C.muted, 2); CV.rrect(c, x - 22, ry - 6, 44, 20, 6, C.u5); CV.circle(c, x - 12, ry + 16, 5, C.ink); CV.circle(c, x + 12, ry + 16, 5, C.ink); if (v > 0.1) CV.arrow(c, x + 24, ry + 4, x + 24 + v * 2, ry + 4, C.ink, 2);
    const gh = (H - 140) / 2, b1 = { x: 50, y: 90, w: W - 80, h: gh - 20 }, b2 = { x: 50, y: 90 + gh + 20, w: W - 80, h: gh - 20 };
    const ts = Array.from({ length: 121 }, (_, i) => i * 0.25);
    const g1 = CV.plot(c, C, b1, { xr: [0, 30], yr: [0, smax], xl: 'time / s', yl: 'distance / m', series: [{ pts: ts.filter(x => x <= t).map(x => [x, this.s(m, x)]), col: C.u5, w: 2.4 }, { pts: ts.map(x => [x, this.s(m, x)]), col: hexA(C.muted, .3), w: 1, dash: [3, 4] }], dots: [[t, this.s(m, t), C.bad, 5]] });
    const g2 = CV.plot(c, C, b2, { xr: [0, 30], yr: [0, 30], xl: 'time / s', yl: 'velocity / m/s', fills: p.tan ? [{ pts: ts.filter(x => x <= t).map(x => [x, this.v(m, x)]), col: hexA(C.u3, .25) }] : [], series: [{ pts: ts.filter(x => x <= t).map(x => [x, this.v(m, x)]), col: C.u3, w: 2.4 }, { pts: ts.map(x => [x, this.v(m, x)]), col: hexA(C.muted, .3), w: 1, dash: [3, 4] }], dots: [[t, v, C.bad, 5]] });
    if (p.tan) { const s0 = this.s(m, t), dT = 4; c.save(); c.beginPath(); c.rect(b1.x, b1.y, b1.w, b1.h); c.clip(); CV.line(c, g1.X(t - dT), g1.Y(s0 - v * dT), g1.X(t + dT), g1.Y(s0 + v * dT), C.accent, 2); c.restore(); }
  },
  read(st) { const m = st.p.m, t = st.tt, v = this.v(m, t), a = (this.v(m, t + 0.05) - this.v(m, Math.max(0, t - 0.05))) / (t < 0.05 ? 0.05 : 0.1); return [t.toFixed(1) + ' s', v.toFixed(1) + ' m/s', this.s(m, t).toFixed(0) + ' m', (Math.abs(a) < 0.01 ? 0 : a).toFixed(2) + ' m/s²']; }
};

/* ---------- 5.5 Skydiver and terminal velocity ---------- */
SIMS.skydiver = {
  title: 'Skydiver: terminal velocity', h: 460, substeps: 4,
  controls: [{ id: 'm', label: 'Mass of skydiver + kit', min: 50, max: 120, step: 5, value: 80, fmt: v => v + ' kg' }, { type: 'button', act: 'chute', label: 'Open parachute' }, { type: 'button', act: 'jump', label: 'Jump again' }],
  readouts: ['Speed', 'Weight', 'Air resistance', 'Resultant force & stage'],
  note: 'Weight is constant; air resistance grows with speed. When they are equal the resultant force is zero and the skydiver falls at terminal velocity. Opening the parachute greatly increases air resistance, so she decelerates to a new, lower terminal velocity. (g = 9.8 N/kg)',
  init(st) { st.v = 0; st.tt = 0; st.chute = false; st.hist = [[0, 0]]; st.y = 0; },
  action(st, a) { if (a === 'chute' && !st.chute && st.tt > 0.5) st.chute = true; if (a === 'jump') this.init(st); },
  k(st) { return st.chute ? 30 : 0.27; },
  step(st, dt) { if (st.tt > 60) return; const W = st.p.m * g, D = this.k(st) * st.v * st.v; st.v += (W - D) / st.p.m * dt; st.v = Math.max(st.v, 0); st.tt += dt; st.y += st.v * dt; if (st.tt - st.hist[st.hist.length - 1][0] > 0.2) st.hist.push([st.tt, st.v]); },
  draw(c, W, H, st, C) {
    c.fillStyle = C.bg; c.fillRect(0, 0, W, H); const sky = c.createLinearGradient(0, 0, 0, H); sky.addColorStop(0, hexA(C.u6, .18)); sky.addColorStop(1, hexA(C.u6, .04)); c.fillStyle = sky; c.fillRect(0, 0, W * 0.34, H);
    for (let i = 0; i < 8; i++) { const y = ((i * 97 - st.y * 6) % H + H) % H; c.fillStyle = hexA('#FFFFFF', .7); c.beginPath(); c.ellipse(W * 0.08 + (i * 53) % (W * 0.25), y, 22, 8, 0, 0, 7); c.fill(); }
    const px = W * 0.12, py = H * 0.45; if (st.chute) { c.fillStyle = C.u1; c.beginPath(); c.arc(px, py - 60, 48, Math.PI, 0); c.fill(); CV.line(c, px - 46, py - 60, px, py - 6, C.ink, 1); CV.line(c, px + 46, py - 60, px, py - 6, C.ink, 1); }
    CV.circle(c, px, py - 6, 7, C.ink); CV.line(c, px, py, px, py + 26, C.ink, 3); CV.line(c, px - 14, py + 8, px + 14, py + 8, C.ink, 3); CV.line(c, px, py + 26, px - 10, py + 44, C.ink, 3); CV.line(c, px, py + 26, px + 10, py + 44, C.ink, 3);
    const Wt = st.p.m * g, D = this.k(st) * st.v * st.v, s = 0.09; CV.arrow(c, px + 22, py + 20, px + 22, py + 20 + Wt * s, C.u1, 3); CV.text(c, 'weight', px + 28, py + 20 + Wt * s, C.u1, 11); const Dl = Math.min(D, 2400) * s; if (Dl > 2) CV.arrow(c, px + 22, py + 10, px + 22, py + 10 - Dl, C.u6, 3); CV.text(c, 'air resistance', px + 28, py + 10 - Math.max(Dl, 12), C.u6, 11);
    const b = { x: W * 0.42, y: 30, w: W * 0.54, h: H - 90 };
    CV.plot(c, C, b, { xr: [0, 60], yr: [0, 70], xl: 'time / s', yl: 'velocity / m/s', series: [{ pts: st.hist.concat([[st.tt, st.v]]), col: C.u5, w: 2.6 }], dots: [[st.tt, st.v, C.bad, 5]] });
  },
  read(st) { const Wt = st.p.m * g, D = this.k(st) * st.v * st.v, R = Wt - D, stage = Math.abs(R) < Wt * 0.03 ? 'terminal velocity (0 N)' : R > 0 ? 'accelerating' : 'decelerating'; return [st.v.toFixed(1) + ' m/s', Wt.toFixed(0) + ' N', D.toFixed(0) + ' N', `${Math.abs(R).toFixed(0)} N ${R > 0 ? '↓' : R < 0 ? '↑' : ''} · ${stage}`]; }
};

/* ---------- 5.6 Newton’s second law (RP7) ---------- */
SIMS.newton2 = {
  title: 'Force, mass and acceleration (RP7)', h: 440,
  controls: [
    { id: 'mode', type: 'seg', label: 'Investigation', value: 'F', options: [['F', 'Vary force (mass fixed)'], ['m', 'Vary mass (force fixed)']] },
    { id: 'F', label: 'Accelerating force (hanging weight)', min: 0.2, max: 2, step: 0.2, value: 1, fmt: v => v.toFixed(1) + ' N' },
    { id: 'M', label: 'Total mass of the system', min: 0.4, max: 2, step: 0.2, value: 1, fmt: v => v.toFixed(1) + ' kg' },
    { type: 'button', act: 'run', label: 'Release the trolley' }, { type: 'button', act: 'clear', label: 'Clear results' }
  ],
  readouts: ['Time between light gates', 'Measured acceleration', 'F ÷ m', 'Points recorded'],
  note: 'Release the trolley, then change the force (or the mass) and repeat. Vary force: a against F is a straight line through the origin — a ∝ F. Vary mass: a falls as m rises — a ∝ 1/m. Keeping total mass constant means moving masses from the trolley to the hanger. Small random errors are included.',
  init(st) { st.x = 0; st.v = 0; st.run = false; st.pts ??= []; st.meas = null; },
  change(st, id) { if (id === 'mode') st.pts = []; this.init(st); },
  action(st, a) { if (a === 'run') { this.init(st); st.run = true; st.t0 = null; } if (a === 'clear') { st.pts = []; this.init(st); } },
  step(st, dt) { if (!st.run) return; const a = st.p.F / st.p.M; st.v += a * dt; st.x += st.v * dt; const g1 = 0.3, g2 = 0.8;
    if (st.x >= g1 && st.t1 == null) st.t1 = st.tt || 0; st.tt = (st.tt || 0) + dt; if (st.x >= g2 && !st.meas) { const noise = 1 + (Math.random() - .5) * 0.05, am = a * noise; st.meas = { a: am, t: Math.sqrt(2 * g2 / a) - Math.sqrt(2 * g1 / a) }; const X = st.p.mode === 'F' ? st.p.F : 1 / st.p.M; st.pts.push([X, am]); } if (st.x > 1.1) st.run = false; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, L = W - 110, x0 = 30, y = 70, px = x0 + st.x / 1.1 * (L - 60);
    CV.rrect(c, x0, y + 20, L, 8, 2, C.muted); CV.circle(c, x0 + L + 8, y + 16, 9, C.surface, C.ink, 1.5); CV.line(c, px + 50, y + 8, x0 + L + 8, y + 8, C.ink, 1); const hy = y + 30 + st.x / 1.1 * 40; CV.line(c, x0 + L + 17, y + 16, x0 + L + 17, hy, C.ink, 1); CV.rrect(c, x0 + L + 9, hy, 16, 18, 2, C.u1, C.ink, 1);
    CV.rrect(c, px, y - 12, 50, 28, 5, C.u5, C.ink, 1.2); CV.circle(c, px + 10, y + 18, 5, C.ink); CV.circle(c, px + 40, y + 18, 5, C.ink);
    [0.3, 0.8].forEach(gx => { const X = x0 + gx / 1.1 * (L - 60) + 25; CV.rrect(c, X - 3, y - 36, 6, 30, 2, C.ink); });
    CV.text(c, 'light gates', x0 + 0.55 / 1.1 * (L - 60) + 25, y - 46, C.muted, 10.5, 'center');
    const b = { x: 50, y: 190, w: W - 80, h: H - 240 }, X = p.mode === 'F';
    CV.plot(c, C, b, { xr: [0, X ? 2.2 : 2.7], yr: [0, 5.5], xl: X ? 'force / N' : '1 / mass (1/kg)', yl: 'acceleration / m/s²', series: [{ f: v => X ? v / p.M : p.F * v, col: hexA(C.muted, .4), w: 1.2, dash: [4, 4] }], dots: st.pts.map(q => [q[0], q[1], C.u5, 4.5]) });
  },
  read(st) { const p = st.p; return [st.meas ? st.meas.t.toFixed(3) + ' s' : '—', st.meas ? st.meas.a.toFixed(2) + ' m/s²' : '—', (p.F / p.M).toFixed(2) + ' m/s²', st.pts.length]; }
};

/* ---------- 5.7 Stopping distances ---------- */
SIMS.stopping = {
  title: 'Stopping distance', h: 400, substeps: 3,
  controls: [
    { id: 'mph', label: 'Speed', min: 20, max: 70, step: 10, value: 30, fmt: v => v + ' mph (' + (v * 0.447).toFixed(1) + ' m/s)' },
    { id: 'rt', label: 'Reaction time', min: 0.2, max: 1.5, step: 0.05, value: 0.67, fmt: v => v.toFixed(2) + ' s' },
    { id: 'road', type: 'seg', label: 'Road', value: 1, options: [[1, 'Dry'], [0.6, 'Wet'], [0.2, 'Icy']] },
    { id: 'tyre', type: 'seg', label: 'Tyres and brakes', value: 1, options: [[1, 'Good'], [0.75, 'Worn']] },
    { type: 'button', act: 'go', label: 'Hazard! Stop!' }
  ],
  readouts: ['Thinking distance', 'Braking distance', 'Stopping distance', 'Deceleration · braking force (1000 kg car)'],
  note: 'Thinking distance = speed × reaction time (tiredness, alcohol, drugs, distractions increase it). Braking distance depends on speed² and on grip: wet or icy roads and worn tyres or brakes increase it. Dry-road values match the Highway Code.',
  k(p) { const v = p.mph * 0.447, a = 6.6 * p.road * p.tyre, th = v * p.rt, br = v * v / (2 * a); return { v, a, th, br }; },
  init(st) { st.s = 0; st.v = 0; st.phase = 'ready'; st.tt = 0; },
  change(st) { this.init(st); },
  action(st, a) { if (a === 'go') { this.init(st); st.phase = 'think'; st.v = this.k(st.p).v; } },
  step(st, dt) { const k = this.k(st.p); if (st.phase === 'think') { st.s += st.v * dt; st.tt += dt; if (st.tt >= st.p.rt) st.phase = 'brake'; } else if (st.phase === 'brake') { st.v -= k.a * dt; if (st.v <= 0) { st.v = 0; st.phase = 'stopped'; } st.s += st.v * dt; } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const k = this.k(st.p), tot = k.th + k.br, sc = (W - 100) / Math.max(120, tot * 1.1), y = H * 0.45, x0 = 40;
    c.fillStyle = '#3A4550'; c.fillRect(0, y - 30, W, 60); for (let x = 0; x < W; x += 40) { c.fillStyle = '#E8EEF2'; c.fillRect(x, y - 2, 20, 4); }
    c.fillStyle = hexA(C.u6, .35); c.fillRect(x0, y + 34, k.th * sc, 16); c.fillStyle = hexA(C.u1, .45); c.fillRect(x0 + k.th * sc, y + 34, k.br * sc, 16);
    CV.text(c, 'thinking ' + k.th.toFixed(1) + ' m', x0 + 4, y + 62, C.u6, 11.5, 'left', 700); CV.text(c, 'braking ' + k.br.toFixed(1) + ' m', x0 + k.th * sc + 4, y + 80, C.u1, 11.5, 'left', 700);
    const hx = x0 + tot * sc + 30; CV.rrect(c, Math.min(hx, W - 30), y - 28, 12, 56, 3, C.bad); CV.text(c, '⚠', Math.min(hx, W - 24), y - 44, C.bad, 18, 'center', 800);
    const cx = x0 + st.s * sc; CV.rrect(c, cx - 36, y - 16, 36, 22, 6, C.u5, C.ink, 1); CV.circle(c, cx - 28, y + 8, 5, C.ink); CV.circle(c, cx - 8, y + 8, 5, C.ink); if (st.phase === 'brake') CV.text(c, 'BRAKING', cx - 18, y - 28, C.bad, 11, 'center', 800); if (st.phase === 'think') CV.text(c, 'reacting…', cx - 18, y - 28, C.u6, 11, 'center', 800);
    for (let d = 0; x0 + d * sc <= W - 20; d += (sc * 20 < 40 ? 40 : 20)) { CV.line(c, x0 + d * sc, y + 100, x0 + d * sc, y + 106, C.ink, 1); CV.mono(c, d + ' m', x0 + d * sc, y + 116, C.muted, 9.5, 'center'); }
    CV.text(c, st.phase === 'ready' ? 'Press “Hazard! Stop!”' : st.phase === 'stopped' ? `Stopped after ${st.s.toFixed(1)} m` : '', W / 2, 24, C.ink, 13, 'center', 700);
  },
  read(st) { const k = this.k(st.p); return [k.th.toFixed(1) + ' m', k.br.toFixed(1) + ' m', (k.th + k.br).toFixed(1) + ' m', k.a.toFixed(1) + ' m/s² · ≈' + Math.round(1000 * k.a) + ' N']; }
};

/* ---------- 5.8 Collisions and conservation of momentum ---------- */
SIMS.collisions = {
  title: 'Collisions and momentum', h: 400,
  controls: [
    { id: 'm1', label: 'Mass of A', min: 0.5, max: 5, step: 0.5, value: 2, fmt: v => v.toFixed(1) + ' kg' },
    { id: 'u1', label: 'Velocity of A', min: -3, max: 6, step: 0.5, value: 3, fmt: v => v.toFixed(1) + ' m/s' },
    { id: 'm2', label: 'Mass of B', min: 0.5, max: 5, step: 0.5, value: 1, fmt: v => v.toFixed(1) + ' kg' },
    { id: 'u2', label: 'Velocity of B', min: -6, max: 3, step: 0.5, value: 0, fmt: v => v.toFixed(1) + ' m/s' },
    { id: 'type', type: 'seg', label: 'Collision', value: 0, options: [[0, 'Stick together'], [1, 'Bounce apart']] },
    { type: 'button', act: 'go', label: 'Run collision' }
  ],
  readouts: ['Momentum before', 'Momentum after', 'Velocity of A after', 'Velocity of B after'],
  note: 'Momentum p = mv; to the right is positive. In every collision the total momentum before equals the total momentum after (a closed system). Try a moving trolley hitting a stationary one, then make them move towards each other.',
  init(st) { const p = st.p; st.x1 = 1.2; st.x2 = 5; st.v1 = p.u1; st.v2 = p.u2; st.hit = false; },
  change(st) { this.init(st); },
  action(st, a) { if (a === 'go') this.init(st); },
  after(p) { if (p.u1 <= p.u2) return [p.u1, p.u2]; const P = p.m1 * p.u1 + p.m2 * p.u2, M = p.m1 + p.m2, e = p.type; return [(P - p.m2 * e * (p.u1 - p.u2)) / M, (P + p.m1 * e * (p.u1 - p.u2)) / M]; },
  step(st, dt) { const p = st.p, w1 = 0.6 + p.m1 * 0.1, w2 = 0.6 + p.m2 * 0.1; if (st.x1 < -0.5 || st.x1 > 8.5 || st.x2 < -0.5 || st.x2 > 8.5) { st.out = (st.out || 0) + dt; if (st.out > 1.5) { st.out = 0; this.init(st); } return; } st.x1 += st.v1 * dt * 0.6; st.x2 += st.v2 * dt * 0.6;
    if (!st.hit && st.x2 - st.x1 <= (w1 + w2) / 2 && st.v1 > st.v2) { const [a, b] = this.after(p); st.v1 = a; st.v2 = b; st.hit = true; sfx.tick(); } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, sc = W / 8, ty = H * 0.32; CV.rrect(c, 10, ty + 30, W - 20, 10, 5, hexA(C.muted, .3));
    const cart = (x, m, col, lab, v) => { const w = (0.6 + m * 0.1) * sc, X = x * sc; if (X < -60 || X > W + 60) return; CV.rrect(c, X - w / 2, ty - 10, w, 40, 8, col); CV.text(c, lab, X, ty + 10, '#fff', 13, 'center', 800); CV.mono(c, m + ' kg', X, ty + 44, C.ink, 10.5, 'center'); if (Math.abs(v) > 0.01) CV.arrow(c, X, ty - 26, X + v * 22, ty - 26, C.ink, 2); CV.mono(c, v.toFixed(2) + ' m/s', X, ty - 42, C.ink, 11, 'center'); };
    cart(st.x1, p.m1, C.u1, 'A', st.v1); if (!(st.hit && !p.type)) cart(st.x2, p.m2, C.u5, 'B', st.v2); else { const w = (0.6 + p.m2 * 0.1) * sc, X = st.x2 * sc; CV.rrect(c, X - w / 2, ty - 10, w, 40, 8, C.u5); CV.text(c, 'B', X, ty + 10, '#fff', 13, 'center', 800); }
    const [a, b] = this.after(p), Pb = p.m1 * p.u1 + p.m2 * p.u2, Pa = p.m1 * a + p.m2 * b, by = H * 0.62, bw = Math.min(70, W / 8), x0 = W * 0.2, maxP = Math.max(Math.abs(Pb), 1), hh = H * 0.24;
    CV.text(c, 'Total momentum / kg m/s', x0, by - 26, C.ink, 12, 'left', 600);
    [[Pb, 'before'], [Pa, 'after']].forEach(([val, lab], i) => { const hgt = hh * val / maxP, x = x0 + i * (bw + 30); CV.rrect(c, x, by + hh - Math.max(0, hgt), bw, Math.abs(hgt), 4, C.u2); CV.text(c, lab, x + bw / 2, by + hh + 12, C.muted, 11, 'center'); CV.mono(c, val.toFixed(2), x + bw / 2, by + hh - Math.max(0, hgt) - 10, C.ink, 11, 'center'); });
  },
  read(st) { const p = st.p, [a, b] = this.after(p); return [(p.m1 * p.u1 + p.m2 * p.u2).toFixed(2) + ' kg m/s', (p.m1 * a + p.m2 * b).toFixed(2) + ' kg m/s', a.toFixed(2) + ' m/s', b.toFixed(2) + ' m/s']; }
};

/* ---------- 5.8 Safety features: F = mΔv/Δt ---------- */
SIMS.crash = {
  title: 'Crash test: safety features', h: 400,
  controls: [
    { id: 'v', label: 'Speed before crash', min: 5, max: 30, step: 1, value: 15, fmt: v => v + ' m/s' },
    { id: 'm', label: 'Mass of passenger', min: 40, max: 100, step: 5, value: 70, fmt: v => v + ' kg' },
    { id: 'dt', type: 'seg', label: 'Protection', value: 0.02, options: [[0.02, 'None (hits dashboard)'], [0.1, 'Seat belt'], [0.2, 'Seat belt + airbag']] },
    { type: 'button', act: 'go', label: 'Crash!' }
  ],
  readouts: ['Change in momentum mΔv', 'Stopping time Δt', 'Average force F = mΔv ÷ Δt', 'Deceleration'],
  note: 'The change in momentum is the same whatever you do — the passenger goes from full speed to rest. Seat belts, airbags, crash mats and helmets increase the time taken, so the rate of change of momentum — the force — is much smaller.',
  init(st) { st.x = 130; st.v = st.p.v; st.phase = 'ready'; st.tc = 0; },
  change(st) { this.init(st); },
  action(st, a) { if (a === 'go') { this.init(st); st.phase = 'drive'; } },
  step(st, dt) { const W = st.W, wall = W * 0.7; if (st.phase === 'drive') { st.x += st.v * dt * 18; if (st.x >= wall - 40) { st.phase = 'crash'; st.tc = 0; } } else if (st.phase === 'crash') { const slow = 8; st.tc += dt / slow; st.v = Math.max(0, st.p.v * (1 - st.tc / st.p.dt)); if (st.v === 0) st.phase = 'done'; } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const wall = W * 0.7, y = H * 0.45; CV.rrect(c, wall, y - 80, 20, 130, 3, '#5B6570'); CV.line(c, 0, y + 50, W, y + 50, C.muted, 2);
    const x = Math.min(st.x, wall - 40) + (st.phase === 'crash' || st.phase === 'done' ? 0 : 0); CV.rrect(c, x - 110, y - 10, 150, 50, 10, C.u5, C.ink, 1.5); CV.circle(c, x - 80, y + 44, 10, C.ink); CV.circle(c, x + 10, y + 44, 10, C.ink);
    const lean = st.phase === 'crash' ? Math.min(1, st.tc / st.p.dt) : st.phase === 'done' ? 1 : 0, travel = st.p.dt === 0.02 ? 26 : st.p.dt === 0.1 ? 14 : 10; const hx = x - 40 + lean * travel;
    CV.circle(c, hx, y - 26, 10, '#F2C9A0', C.ink); CV.line(c, x - 50, y + 10, hx, y - 16, C.ink, 4);
    if (st.p.dt >= 0.1) CV.line(c, x - 60, y - 20, x - 30, y + 20, C.u2, 3); if (st.p.dt >= 0.2 && lean > 0.1) CV.circle(c, x + 2, y - 20, 12 + 8 * lean, hexA('#FFFFFF', .85), C.muted);
    const F = st.p.m * st.p.v / st.p.dt, bx = W - 44, bh = H - 110; if (st.phase === 'done') { CV.rrect(c, bx, 50, 22, bh, 6, hexA(C.bad, .15)); const f = clamp(F / 60000, 0, 1); CV.rrect(c, bx, 50 + bh * (1 - f), 22, bh * f, 6, C.bad); CV.text(c, 'force', bx + 11, H - 46, C.muted, 11, 'center'); }
    CV.text(c, st.phase === 'ready' ? 'Press “Crash!”' : st.phase === 'done' ? (F > 20000 ? 'Serious injury likely' : F > 8000 ? 'Injury possible' : 'Much safer') : '', W * 0.45, 24, C.ink, 13, 'center', 700);
  },
  read(st) { const p = st.p, dp = p.m * p.v, F = dp / p.dt; return [dp.toFixed(0) + ' kg m/s', p.dt.toFixed(2) + ' s', F >= 1000 ? (F / 1000).toFixed(1) + ' kN' : F.toFixed(0) + ' N', (p.v / p.dt).toFixed(0) + ' m/s² (' + (p.v / p.dt / 9.8).toFixed(0) + ' g)']; }
};
