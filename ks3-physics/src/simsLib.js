/* ==========================================================
   Simulations reused from the Launchpad engine family (GCSE sims, KS3 notes set in simsK.js)
   ========================================================== */
const SANKEY_DEV = {
  lamp: { name: 'Filament lamp', useful: [['light', 10]], waste: [['thermal (surroundings)', 90]], fix: 'Replace with an LED' },
  led: { name: 'LED lamp', useful: [['light', 40]], waste: [['thermal (surroundings)', 60]], fix: 'Better LED design' },
  motor: { name: 'Electric motor', useful: [['kinetic', 70]], waste: [['thermal', 22], ['sound', 8]], fix: 'Lubricate bearings; low-resistance wire' },
  kettle: { name: 'Kettle', useful: [['thermal (water)', 90]], waste: [['thermal (kettle & air)', 8], ['sound', 2]], fix: 'Insulate the kettle' },
  car: { name: 'Petrol car engine', useful: [['kinetic', 25]], waste: [['thermal (exhaust & engine)', 70], ['sound', 5]], fix: 'Streamline; lubricate; reduce mass' }
};
const MOTIONS = { steady: [[0, 12], [30, 12]], accel: [[0, 0], [15, 24], [30, 24]], stopgo: [[0, 0], [5, 15], [12, 15], [16, 0], [20, 0], [26, 20], [30, 20]], decel: [[0, 25], [8, 25], [18, 0], [30, 0]] };
const RGB = { white: [1, 1, 1], red: [1, 0, 0], green: [0, 1, 0], blue: [0, 0, 1], black: [0, 0, 0], yellow: [1, 1, 0], cyan: [0, 1, 1], magenta: [1, 0, 1] };
const cname = v => Object.keys(RGB).find(k => RGB[k].every((x, i) => x === v[i])) || 'black';

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

SIMS.spring = {
  title: 'Force and extension (1.22)', h: 460, noPlay: true,
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

SIMS.fluid = {
  title: 'Pressure, upthrust and floating', h: 440,
  controls: [
    { id: 'liq', type: 'seg', label: 'Liquid', value: 1000, options: [[1000, 'Fresh water'], [1030, 'Seawater'], [800, 'Oil']] },
    { id: 'h', label: 'Depth of pressure sensor (Higher)', min: 0, max: 10, step: 0.5, value: 4, fmt: v => v.toFixed(1) + ' m' },
    { id: 'rho', label: 'Density of the block', min: 200, max: 2000, step: 50, value: 600, fmt: v => v + ' kg/m³' }
  ],
  readouts: ['Pressure due to liquid p = hρg', 'Block: weight', 'Block: upthrust', 'Floats or sinks?'],
  note: 'Pressure increases with depth and with the density of the liquid. A submerged block has more pressure on its bottom face than its top, giving an upward resultant force — upthrust. It floats if it is less dense than the liquid (it sinks until upthrust = weight). Block volume 0.001 m³; g = 10 N/kg.',
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

SIMS.densitylab = {
  title: 'Density lab (5.4)', h: 420, noPlay: true,
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

SIMS.scope = {
  title: 'Oscilloscope and sound', h: 400,
  controls: [{ id: 'f', label: 'Frequency of the source (pitch)', min: 100, max: 2000, step: 50, value: 500, fmt: v => v + ' Hz' }, { id: 'a', label: 'Amplitude (loudness)', min: 0.2, max: 1, step: 0.05, value: 0.6, fmt: v => Math.round(v * 100) + '%' }, { type: 'seg', id: 'tb', label: 'Timebase', value: 0.5, options: [[0.2, '0.2 ms/div'], [0.5, '0.5 ms/div'], [1, '1 ms/div'], [2, '2 ms/div']] }],
  readouts: ['Divisions per wave', 'Period T', 'f = 1/T', 'Audible?'],
  note: 'The microphone turns pressure variations into a voltage that the oscilloscope plots against time. Count the divisions for one complete wave, multiply by the timebase to get T, then f = 1/T. A taller trace means a louder sound; more waves on the screen mean a higher pitch.',
  draw(c, W, H, st, C) { const x0 = 40, y0 = 30, w = W - 80, h = H - 90, nx = 10, ny = 8; CV.rrect(c, x0, y0, w, h, 8, '#0e1a12', C.line);
    c.strokeStyle = 'rgba(120,200,140,.18)'; c.lineWidth = 1; for (let i = 1; i < nx; i++) { c.beginPath(); c.moveTo(x0 + i * w / nx, y0); c.lineTo(x0 + i * w / nx, y0 + h); c.stroke(); } for (let j = 1; j < ny; j++) { c.beginPath(); c.moveTo(x0, y0 + j * h / ny); c.lineTo(x0 + w, y0 + j * h / ny); c.stroke(); }
    const T = 1000 / st.p.f, divPerWave = T / st.p.tb, ph = st.t * 3; c.strokeStyle = '#6CF08A'; c.lineWidth = 2.4; c.beginPath();
    for (let k = 0; k <= w; k++) { const div = k / (w / nx), y = y0 + h / 2 - st.p.a * (h / 2 - 8) * Math.sin(2 * Math.PI * (div / divPerWave) + ph * 0); k ? c.lineTo(x0 + k, y) : c.moveTo(x0 + k, y); } c.stroke();
    CV.mono(c, `timebase ${st.p.tb} ms/div`, x0 + w, y0 + h + 18, C.muted, 11, 'right'); CV.text(c, 'microphone → oscilloscope', x0, y0 + h + 18, C.muted, 11); },
  read(st) { const T = 1000 / st.p.f; return [(T / st.p.tb).toFixed(2), T.toFixed(2) + ' ms', (1000 / T).toFixed(0) + ' Hz', st.p.f >= 20 && st.p.f <= 20000 ? 'yes (20–20 000 Hz)' : 'no']; }
};

SIMS.refract = {
  title: 'Reflection, refraction and TIR (3.17)', h: 440,
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

SIMS.skydiver = {
  title: 'Skydiver: terminal velocity', h: 460, substeps: 4,
  controls: [{ id: 'm', label: 'Mass of skydiver + kit', min: 50, max: 120, step: 5, value: 80, fmt: v => v + ' kg' }, { type: 'button', act: 'chute', label: 'Open parachute' }, { type: 'button', act: 'jump', label: 'Jump again' }],
  readouts: ['Speed', 'Weight', 'Air resistance', 'Resultant force & stage'],
  note: 'Weight is constant; air resistance grows with speed. When they are equal the resultant force is zero and the skydiver falls at terminal velocity. Opening the parachute greatly increases air resistance, so she decelerates to a new, lower terminal velocity. (g = 10 N/kg)',
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

SIMS.magfield = {
  title: 'Magnetic field patterns', h: 440,
  controls: [
    { id: 'cfg', type: 'seg', label: 'Arrangement', value: 'one', options: [['one', 'Bar magnet'], ['att', 'N facing S (attract)'], ['rep', 'N facing N (repel)']] },
    { id: 'lines', type: 'seg', label: 'Show', value: 1, options: [[1, 'Field lines'], [0, 'Compasses only']] }
  ],
  readouts: ['Force between the magnets', 'Field at the compass', 'Field strength (relative)', 'Tip'],
  note: 'Field lines go from the north pole to the south pole — the direction a compass needle points. Lines closest together = strongest field, at the poles. The lines never cross, and the pattern is the same on both sides of a magnet. Unlike poles attract; like poles repel. Move the pointer over the field to place the red compass.',
  poles(p, W, H) { const cy = H / 2, L = Math.min(W * 0.12, 60); if (p.cfg === 'one') return [[W / 2 + L, cy, 1], [W / 2 - L, cy, -1]]; const g = W * 0.08; const a = [[W / 2 - g, cy, 1], [W / 2 - g - 2 * L, cy, -1]]; return p.cfg === 'att' ? a.concat([[W / 2 + g, cy, -1], [W / 2 + g + 2 * L, cy, 1]]) : a.concat([[W / 2 + g, cy, 1], [W / 2 + g + 2 * L, cy, -1]]); },
  /* each magnet → a box [x0, x1, cy, N-on-right?] and a sheet of face currents (field inside points S → N) */
  mags(p, W, H) { const ps = this.poles(p, W, H), out = []; for (let i = 0; i < ps.length; i += 2) { const n = ps[i][2] > 0 ? ps[i] : ps[i + 1], s = ps[i][2] > 0 ? ps[i + 1] : ps[i]; out.push({ x0: Math.min(n[0], s[0]) - 10, x1: Math.max(n[0], s[0]) + 10, cy: n[1], nR: n[0] > s[0] }); } return out; },
  wires(ms) { return ms.flatMap(m => FIELD.sheet(m.x0, m.x1, m.cy, 14, 14, m.nR ? 1 : -1)); },
  field(p, W, H) { const k = p.cfg + W + 'x' + H; if (this._c && this._c.k === k) return this._c;
    const ms = this.mags(p, W, H).sort((a, b) => a.x0 - b.x0), ws = this.wires(ms), m0 = ms[0], cy = m0.cy;
    const lines = FIELD.lines(ws, W, H, FIELD.levels(ws, (m0.x0 + m0.x1) / 2, cy, 14, 12), 3).map(l => { const P = new Path2D(); l.pts.forEach((q, i) => i ? P.lineTo(q[0], q[1]) : P.moveTo(q[0], q[1])); return Object.assign(l, { P }); });
    // the axis line: out of the outer ends on both sides, and across a gap only between unlike poles (like poles leave a neutral point)
    const axis = [[0, m0.x0]]; for (let i = 0; i + 1 < ms.length; i++) if (ms[i].nR === ms[i + 1].nR) axis.push([ms[i].x1, ms[i + 1].x0]); axis.push([ms[ms.length - 1].x1, W]);
    const skip = ms.map(m => [m.x0 - 3, cy - 17, m.x1 + 3, cy + 17]), gx = [W * 0.07, W * 0.93].concat(ms.map(m => (m.x0 + m.x1) / 2));
    const arrows = FIELD.arrows(ws, lines, gx, skip, W, H).concat(axis.map(([a, b]) => { const x = (a + b) / 2, [bx] = FIELD.B(ws, x, cy); return [x, cy, Math.sign(bx) || 1, 0]; }));
    return (this._c = { k, ms, ws, lines, axis, arrows }); },
  init(st) { st.mx = null; },
  pointer(type, x, y, st) { if (type === 'move' || type === 'drag' || type === 'down') { st.mx = x; st.my = y; } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, F = this.field(p, W, H), cy = H / 2;
    if (p.lines) { c.strokeStyle = hexA(C.u6, .75); c.lineWidth = 1.3; F.lines.forEach(l => c.stroke(l.P)); F.axis.forEach(([a, b]) => CV.line(c, a, cy, b, cy, hexA(C.u6, .75), 1.3));
      c.fillStyle = C.u6; F.arrows.forEach(([x, y, ux, uy]) => { c.beginPath(); c.moveTo(x + ux * 6, y + uy * 6); c.lineTo(x - ux * 4 - uy * 4, y - uy * 4 + ux * 4); c.lineTo(x - ux * 4 + uy * 4, y - uy * 4 - ux * 4); c.closePath(); c.fill(); }); }
    // magnets
    F.ms.forEach(m => { const w = (m.x1 - m.x0) / 2; CV.rrect(c, m.x0, m.cy - 14, w, 28, 3, m.nR ? C.u4 : C.u1); CV.rrect(c, m.x0 + w, m.cy - 14, w, 28, 3, m.nR ? C.u1 : C.u4); CV.text(c, m.nR ? 'S' : 'N', m.x0 + w / 2, m.cy, '#fff', 13, 'center', 800); CV.text(c, m.nR ? 'N' : 'S', m.x0 + 1.5 * w, m.cy, '#fff', 13, 'center', 800); });
    // compasses
    const comp = (x, y, r, hl) => { const [bx, by] = FIELD.B(F.ws, x, y), a = Math.atan2(by, bx); CV.circle(c, x, y, r, hl ? C.surface : hexA(C.surface, .8), C.ink, 1); c.save(); c.translate(x, y); c.rotate(a); c.fillStyle = C.u1; c.beginPath(); c.moveTo(r - 2, 0); c.lineTo(0, -3); c.lineTo(0, 3); c.fill(); c.fillStyle = C.muted; c.beginPath(); c.moveTo(-r + 2, 0); c.lineTo(0, -3); c.lineTo(0, 3); c.fill(); c.restore(); };
    if (!p.lines) for (let x = 30; x < W; x += 50) for (let y = 30; y < H; y += 50) { if (F.ms.some(m => Math.abs(y - m.cy) < 24 && x > m.x0 - 12 && x < m.x1 + 12)) continue; comp(x, y, 9); }
    const mx = st.mx ?? W / 2 + Math.cos(st.t * 0.5) * W * 0.3, my = st.my ?? H / 2 + Math.sin(st.t * 0.5) * H * 0.33; comp(mx, my, 16, true);
  },
  read(st) { const W = st.W || 600, H = st.H || 440, ws = this.wires(this.mags(st.p, W, H)), mx = st.mx ?? W / 2 + Math.cos(st.t * 0.5) * W * 0.3, my = st.my ?? H / 2 + Math.sin(st.t * 0.5) * H * 0.33, [bx, by] = FIELD.B(ws, mx, my), m = Math.hypot(bx, by) * 5, a = Math.atan2(-by, bx) / deg;
    return [st.p.cfg === 'one' ? '—' : st.p.cfg === 'att' ? 'attract' : 'repel', 'points ' + ['→ east', '↗', '↑ north', '↖', '← west', '↙', '↓ south', '↘'][Math.round(((a + 360) % 360) / 45) % 8], m.toFixed(2), st.p.cfg === 'rep' ? 'a neutral point sits between like poles' : 'strongest near the poles']; }
};

SIMS.solenoid = {
  title: 'Solenoids and electromagnets', h: 420,
  controls: [
    { id: 'I', label: 'Current', min: -3, max: 3, step: 0.5, value: 2, fmt: v => v.toFixed(1) + ' A' },
    { id: 'N', label: 'Number of turns', min: 5, max: 20, step: 1, value: 10, fmt: v => v },
    { id: 'core', type: 'seg', label: 'Core', value: 1, options: [[0, 'Air'], [1, 'Iron core']] }
  ],
  readouts: ['Field strength (relative)', 'North pole at', 'Paper clips held', 'Switch off'],
  note: 'Inside a solenoid the field is strong and uniform; outside it looks like a bar magnet’s field. Field lines never cross. The field is stronger with more current, more turns, or an iron core — an electromagnet — so the lines are drawn closer together. Reversing the current reverses the poles. Turn the current to zero and the soft iron core loses its magnetism.',
  B(p) { return Math.abs(p.I) * p.N * (p.core ? 40 : 1) / 20; },
  /* field lines = contours of the vector potential of the turns (cached), so they can never cross */
  field(p, W, H, cx, cy, L, r) { const dir = Math.sign(p.I), k = [p.I, p.N, p.core, W, H].join(); if (this._c && this._c.k === k) return this._c;
    const xs = Array.from({ length: p.N }, (_, i) => cx - L / 2 + (i + 0.5) * L / p.N), ws = xs.flatMap(x => [[x, cy - r, dir], [x, cy + r, -dir]]), nl = clamp(Math.round(2 + Math.log2(1 + this.B(p)) * 0.9), 2, 8);
    const lines = FIELD.lines(ws, W, H, FIELD.levels(ws, cx, cy, r, nl, 0.62), 3).map(l => { const P = new Path2D(); l.pts.forEach((q, i) => i ? P.lineTo(q[0], q[1]) : P.moveTo(q[0], q[1])); return Object.assign(l, { P }); });
    const arrows = FIELD.arrows(ws, lines, [cx, W * 0.08, W * 0.92], [], W, H).concat([[cx, cy, dir, 0], [(cx - L / 2) / 2, cy, dir, 0], [(W + cx + L / 2) / 2, cy, dir, 0]]);
    return (this._c = { k, lines, arrows }); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, cx = W / 2, cy = H * 0.42, L = Math.min(W * 0.5, 280), r = 40, B = this.B(p), dir = Math.sign(p.I) || 0;
    if (p.core) CV.rrect(c, cx - L / 2 - 10, cy - r + 10, L + 20, 2 * r - 20, 4, hexA('#9AA3AC', .45), C.ink, 1);
    // field lines
    if (dir) { const F = this.field(p, W, H, cx, cy, L, r); c.strokeStyle = hexA(C.u6, .8); c.lineWidth = 1.4; F.lines.forEach(l => c.stroke(l.P)); CV.line(c, 0, cy, W, cy, hexA(C.u6, .8), 1.4);
      c.fillStyle = C.u6; F.arrows.forEach(([x, y, ux, uy]) => { c.beginPath(); c.moveTo(x + ux * 6, y + uy * 6); c.lineTo(x - ux * 4 - uy * 4, y - uy * 4 + ux * 4); c.lineTo(x - ux * 4 + uy * 4, y - uy * 4 - ux * 4); c.closePath(); c.fill(); }); }
    // coil
    for (let i = 0; i < p.N; i++) { const x = cx - L / 2 + (i + 0.5) * L / p.N; c.strokeStyle = '#B87333'; c.lineWidth = 3; c.beginPath(); c.ellipse(x, cy, 6, r, 0, 0, 2 * Math.PI); c.stroke(); }
    const yb = H - 44, xa = cx + L / 4; CS.gaps(c, W, H, [[cx, yb, CS.HALF.cell], [xa, yb, CS.HALF.meter]], () => CS.wire(c, [[cx - L / 2 + 0.5 * L / p.N, cy + r], [cx - L / 2 + 0.5 * L / p.N, yb], [cx + L / 2 - 0.5 * L / p.N, yb], [cx + L / 2 - 0.5 * L / p.N, cy + r]], C.ink));
    CS.cell(c, cx, yb, C.ink, false, p.I < 0); CS.meter(c, xa, yb, 'A', C.ink, C.surface); CS.tag(c, C, Math.abs(p.I).toFixed(1) + ' A', xa, yb + 26);
    if (dir) { CV.text(c, dir > 0 ? 'N' : 'S', cx + L / 2 + 26, cy, C.u1, 20, 'center', 800); CV.text(c, dir > 0 ? 'S' : 'N', cx - L / 2 - 26, cy, C.u4, 20, 'center', 800); }
    const clips = Math.min(12, Math.floor(B / 6)); for (let i = 0; i < clips; i++) { const x = cx + L / 2 + 44 + (i % 3) * 10, y = cy + 14 + Math.floor(i / 3) * 16; c.strokeStyle = C.muted; c.lineWidth = 1.5; c.beginPath(); c.ellipse(x, y, 4, 7, 0, 0, 7); c.stroke(); }
  },
  read(st) { const p = st.p, B = this.B(p), dir = Math.sign(p.I); return [B.toFixed(1), dir ? (dir > 0 ? 'right-hand end' : 'left-hand end') : '—', Math.min(12, Math.floor(B / 6)), 'the core loses its magnetism']; }
};
