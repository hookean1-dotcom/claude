/* ==========================================================
   Launchpad simulations (KS3) — Year 8: forces, electricity, sound and light
   ========================================================== */

/* ---------- 8.2 Friction ---------- */
const SURF = { ice: ['ice', 0.05, '#D9F1FF'], plastic: ['smooth plastic', 0.2, '#C9D6E3'], wood: ['wood', 0.35, '#C8A26A'], carpet: ['carpet', 0.55, '#9C5C6B'], sand: ['sandpaper', 0.8, '#D8B878'] };
SIMS.friction = {
  title: 'Investigating friction', h: 430,
  controls: [{ id: 'sf', type: 'seg', label: 'Surface', value: 'wood', options: Object.entries(SURF).map(([k, v]) => [k, v[0]]) }, { id: 'm', label: 'Masses added to the block', min: 0, max: 1000, step: 100, value: 0, fmt: v => v + ' g' }, { type: 'button', act: 'pull', label: 'Pull with the newton meter' }],
  readouts: ['Weight of block + masses', 'Force to START it moving', 'Force to KEEP it moving (steady)', 'Friction at steady speed'],
  note: 'Pull slowly: at first the block does not move — friction matches the pull. The reading peaks just before it starts to slide (static friction), then drops a little. At a steady speed, pull = friction. Rougher surfaces and heavier blocks give more friction. (Block 500 g; g = 10 N/kg.)',
  init(st) { st.F = 0; st.x = 0; st.moving = false; st.ph = 'idle'; st.trace = []; st.peak = 0; },
  change(st) { this.init(st); },
  action(st, a) { if (a === 'pull') { this.init(st); st.ph = 'pull'; } },
  k(p) { const N = (0.5 + p.m / 1000) * 10, mu = SURF[p.sf][1]; return { N, st: mu * 1.3 * N, sl: mu * N }; },
  step(st, dt) { if (st.ph !== 'pull') return; const k = this.k(st.p); if (!st.moving) { st.F += dt * 2.2; if (st.F >= k.st) { st.moving = true; st.peak = st.F; } } else { st.F += (k.sl - st.F) * Math.min(1, dt * 6); st.x += dt * 0.12; if (st.x > 0.55) st.ph = 'done'; } st.trace.push([st.trace.length * dt, st.F]); if (st.trace.length > 600) st.trace.shift(); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const [n, mu, col] = SURF[st.p.sf], gy = H * 0.34, bx = 60 + st.x * W;
    c.fillStyle = col; c.fillRect(0, gy, W, 16); if (mu > 0.3) for (let i = 0; i < W; i += 6) CV.line(c, i, gy, i + 3, gy - 2, C.ink, 1);
    CV.rrect(c, bx, gy - 50, 100, 50, 4, '#C8A26A', C.ink, 2); for (let i = 0; i < st.p.m / 100; i++) CV.rrect(c, bx + 8 + (i % 5) * 18, gy - 64 - Math.floor(i / 5) * 14, 14, 14, 2, '#6B7785', C.ink, 1);
    CV.line(c, bx + 100, gy - 25, bx + 140, gy - 25, C.ink, 1.5); CV.rrect(c, bx + 140, gy - 37, 120, 24, 10, C.surface, C.ink, 1.5); CV.mono(c, st.F.toFixed(2) + ' N', bx + 200, gy - 25, C.u1, 12, 'center');
    if (st.F > 0) { CV.arrow(c, bx + 262, gy - 25, bx + 262 + st.F * 12, gy - 25, C.u5, 3, 10); CV.arrow(c, bx, gy - 10, bx - Math.min(st.F, this.k(st.p).st) * 12, gy - 10, C.u1, 3, 10); CV.text(c, 'friction', bx - 10, gy + 8, C.u1, 11, 'right', 700); }
    CV.plot(c, C, { x: 60, y: H * 0.56, w: W - 120, h: H * 0.3 }, { xr: [0, 10], yr: [0, Math.max(4, this.k(st.p).st * 1.3)], series: [{ pts: st.trace.map(([t, f]) => [t, f]), col: C.u1 }], xl: 'time', yl: 'newton meter reading (N)' });
  },
  read(st) { const k = this.k(st.p); return [k.N.toFixed(1) + ' N', st.peak ? st.peak.toFixed(2) + ' N' : '—', st.moving ? k.sl.toFixed(2) + ' N' : '—', st.moving ? k.sl.toFixed(2) + ' N (= the pull)' : 'still matching the pull']; }
};

/* ---------- 8.3 Speed trap ---------- */
SIMS.speedtrap = {
  title: 'Measuring speed', h: 420,
  controls: [{ id: 'v', label: 'Runner’s true speed', min: 2, max: 10, step: 0.5, value: 6, fmt: v => v.toFixed(1) + ' m/s' }, { id: 'D', label: 'Distance between the lines', min: 5, max: 100, step: 5, value: 20, fmt: v => v + ' m' }, { id: 'meth', type: 'seg', label: 'Timing', value: 'hand', options: [['hand', 'Stopwatch (by hand)'], ['gate', 'Light gates']] }, { type: 'button', act: 'run', label: 'Run' }, { type: 'button', act: 'clr', label: 'Clear results' }],
  readouts: ['Measured time', 'Calculated speed = distance ÷ time', 'True speed', 'Error'],
  note: 'Speed = distance ÷ time. With a stopwatch, reaction time (about 0.2 s) at the start and finish adds random errors — a big problem for short distances. A longer distance makes the same timing error a smaller fraction of the time. Light gates start and stop the timer automatically.',
  init(st) { st.x = -3; st.ph = 'idle'; st.res = st.res || []; st.tm = 0; },
  action(st, a) { if (a === 'clr') { st.res = []; return; } if (a === 'run') { st.x = -3; st.ph = 'run'; st.tm = 0; const hand = st.p.meth === 'hand'; st.err = hand ? (0.18 + Math.random() * 0.12) - (0.15 + Math.random() * 0.15) + (Math.random() < 0.15 ? 0.25 : 0) : (Math.random() - 0.5) * 0.002; } },
  step(st, dt) { if (st.ph !== 'run') return; st.x += st.p.v * dt; if (st.x > 0 && st.x < st.p.D) st.tm += dt; if (st.x > st.p.D + 3) { st.ph = 'done'; const T = st.p.D / st.p.v + st.err; st.last = T; st.res.push([st.p.D, st.p.meth, T, st.p.D / T, st.p.v]); if (st.res.length > 7) st.res.shift(); } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const y = H * 0.35, x0 = 60, sc = (W - 120) / (st.p.D + 6), X = d => x0 + (d + 3) * sc;
    CV.line(c, 0, y + 30, W, y + 30, C.ink, 2); [0, st.p.D].forEach(d => { CV.line(c, X(d), y - 40, X(d), y + 30, st.p.meth === 'gate' ? C.u1 : C.ink, 3); if (st.p.meth === 'gate') CV.rrect(c, X(d) - 8, y - 50, 16, 14, 3, C.u1); }); CV.text(c, 'start', X(0), y + 46, C.muted, 11, 'center'); CV.text(c, 'finish', X(st.p.D), y + 46, C.muted, 11, 'center'); CV.text(c, st.p.D + ' m', (X(0) + X(st.p.D)) / 2, y + 46, C.ink, 12, 'center', 700);
    const rx = X(Math.max(-3, Math.min(st.p.D + 3, st.x))); CV.circle(c, rx, y - 22, 7, C.surface, C.ink, 2); CV.line(c, rx, y - 15, rx, y + 5, C.ink, 3); const ph = Math.sin(st.t * 14); CV.line(c, rx, y + 5, rx + ph * 9, y + 28, C.ink, 3); CV.line(c, rx, y + 5, rx - ph * 9, y + 28, C.ink, 3);
    CV.mono(c, (st.ph === 'run' ? st.tm : st.last || 0).toFixed(2) + ' s', W - 80, 30, C.u1, 20, 'center');
    const t0 = H * 0.58; CV.mono(c, 'distance  timing      time     speed    (true)', 40, t0, C.muted, 11.5); st.res.forEach((r, i) => CV.mono(c, `${String(r[0]).padStart(4)} m   ${r[1] === 'hand' ? 'stopwatch' : 'gates    '}  ${r[2].toFixed(2).padStart(5)} s  ${r[3].toFixed(2).padStart(5)} m/s  (${r[4].toFixed(1)})`, 40, t0 + 20 + i * 18, C.ink, 11.5));
  },
  read(st) { if (!st.last) return ['—', '—', st.p.v.toFixed(1) + ' m/s', '—']; const r = st.res[st.res.length - 1]; return [r[2].toFixed(2) + ' s', r[3].toFixed(2) + ' m/s', r[4].toFixed(1) + ' m/s', ((r[3] - r[4]) / r[4] * 100).toFixed(1) + '%']; }
};

/* ---------- 8.4 Journey → distance–time graph ---------- */
SIMS.journey = {
  title: 'Make a distance–time graph', h: 430,
  controls: [{ id: 'v', label: 'Speed right now (drag while it runs)', min: -3, max: 6, step: 0.5, value: 1.5, fmt: v => v === 0 ? 'stopped' : v < 0 ? Math.abs(v).toFixed(1) + ' m/s back towards the start' : v.toFixed(1) + ' m/s away' }, { type: 'button', act: 'walk', label: 'Walk 1.5' }, { type: 'button', act: 'stop', label: 'Stop' }, { type: 'button', act: 'run', label: 'Run 5' }, { type: 'button', act: 'back', label: 'Go back 2' }],
  readouts: ['Time', 'Distance from the start', 'Speed now (= gradient)', 'Average speed so far'],
  note: 'Change the speed as the person moves and watch the graph. Steeper line = faster. Flat line = stopped. Line going down = coming back towards the start. The gradient (distance ÷ time) of each straight part is the speed. The graph runs for 120 s — press reset to start again.',
  init(st) { st.d = 0; st.tt = 0; st.pts = [[0, 0]]; st.path = 0; st.vv = st.p.v; },
  action(st, a) { const m = { walk: 1.5, stop: 0, run: 5, back: -2 }; if (a in m) { st.p.v = m[a]; st.vv = m[a]; const inp = document.querySelector('input[data-id="v"]'); if (inp) { inp.value = m[a]; inp.dispatchEvent(new Event('input')); } } },
  step(st, dt) { if (st.tt >= 120) return; st.tt += dt; let nd = st.d + st.p.v * dt; nd = Math.max(0, Math.min(400, nd)); st.path += Math.abs(nd - st.d); st.d = nd; if (st.tt - st.pts[st.pts.length - 1][0] > 0.25) st.pts.push([st.tt, st.d]); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const ry = 40, X = d => 40 + d / 400 * (W - 80); CV.line(c, 40, ry + 18, W - 40, ry + 18, C.ink, 2); for (let d = 0; d <= 400; d += 100) { CV.line(c, X(d), ry + 12, X(d), ry + 24, C.ink, 1); CV.mono(c, d + ' m', X(d), ry + 34, C.muted, 10, 'center'); }
    const x = X(st.d); CV.circle(c, x, ry - 12, 6, C.surface, C.ink, 2); CV.line(c, x, ry - 6, x, ry + 6, C.ink, 3); const ph = st.p.v ? Math.sin(st.t * (4 + Math.abs(st.p.v) * 2)) : 0; CV.line(c, x, ry + 6, x + ph * 6, ry + 17, C.ink, 3); CV.line(c, x, ry + 6, x - ph * 6, ry + 17, C.ink, 3);
    CV.plot(c, C, { x: 60, y: 90, w: W - 110, h: H - 150 }, { xr: [0, 120], yr: [0, 400], series: [{ pts: st.pts.concat([[st.tt, st.d]]), col: C.u8, w: 2.5 }], xl: 'time (s)', yl: 'distance from start (m)' });
  },
  read(st) { return [st.tt.toFixed(1) + ' s' + (st.tt >= 120 ? ' (full — reset)' : ''), st.d.toFixed(0) + ' m', st.p.v === 0 ? '0 m/s (flat line)' : st.p.v.toFixed(1) + ' m/s' + (st.p.v < 0 ? ' (line slopes down)' : ''), st.tt > 0.5 ? (st.path / st.tt).toFixed(2) + ' m/s (total distance ÷ total time)' : '—']; }
};

/* ---------- 8.5 Pressure on snow ---------- */
const FOOT = { heel: ['stiletto heels', 2 * 1.5], one: ['trainer, one foot', 150], two: ['trainers, both feet', 300], snow: ['snowshoes', 2 * 1500], ski: ['skis', 2 * 1800] };
SIMS.pressure = {
  title: 'Standing on snow: pressure = force ÷ area', h: 400,
  controls: [{ id: 'f', type: 'seg', label: 'Standing on', value: 'two', options: Object.entries(FOOT).map(([k, v]) => [k, v[0]]) }, { id: 'm', label: 'Mass of the person', min: 30, max: 100, step: 5, value: 50, fmt: v => v + ' kg' }],
  readouts: ['Force (weight)', 'Area in contact', 'Pressure', 'In soft snow'],
  note: 'The same weight spread over a bigger area gives a smaller pressure, so snowshoes and skis stop you sinking. Stiletto heels concentrate the weight onto a tiny area — a huge pressure. (Pressure = force ÷ area; g = 10 N/kg. 1 N/cm² = 10 000 Pa.)',
  init(st) { st.sink = 0; },
  k(p) { const F = p.m * 10, A = FOOT[p.f][1], P = F / A; return { F, A, P, depth: Math.min(60, P * 14) }; },
  step(st, dt) { const k = this.k(st.p); st.sink += (k.depth - st.sink) * Math.min(1, dt * 3); },
  draw(c, W, H, st, C) {
    const k = this.k(st.p), sy = H * 0.62, cx = W / 2; c.fillStyle = C.bg; c.fillRect(0, 0, W, H); c.fillStyle = hexA(C.u5, .08); c.fillRect(0, 0, W, sy);
    c.fillStyle = '#F4F7FB'; c.fillRect(0, sy, W, H - sy); CV.line(c, 0, sy, W, sy, '#AFC3D6', 2);
    const fw = { heel: 16, one: 60, two: 60, snow: 150, ski: 260 }[st.p.f], y = sy + st.sink, s = 0.8 + st.p.m / 150;
    c.fillStyle = hexA('#8FA7BD', .35); c.fillRect(cx - fw / 2 - 20, sy, fw + 40, st.sink);
    const twoFeet = st.p.f !== 'one'; CV.line(c, cx - 14, y - 70 * s, cx - (twoFeet ? 14 : 0), y - 6, C.ink, 5); if (twoFeet) CV.line(c, cx + 14, y - 70 * s, cx + 14, y - 6, C.ink, 5); else CV.line(c, cx + 14, y - 70 * s, cx + 30, y - 40 * s, C.ink, 5);
    CV.rrect(c, cx - 24, y - 150 * s, 48, 84 * s, 10, C.u8, C.ink, 2); CV.circle(c, cx, y - 166 * s, 16 * s, C.surface, C.ink, 2);
    if (st.p.f === 'heel') { CV.line(c, cx - 14, y - 6, cx - 14, y, C.ink, 3); CV.line(c, cx + 14, y - 6, cx + 14, y, C.ink, 3); } else CV.rrect(c, cx - fw / 2, y - 6, fw, 8, 3, st.p.f === 'snow' ? '#B87333' : st.p.f === 'ski' ? C.u1 : C.ink, C.ink, 1);
    CV.arrow(c, cx + 60, y - 130 * s, cx + 60, y - 70 * s, C.u1, 3, 10); CV.text(c, k.F + ' N', cx + 68, y - 100 * s, C.u1, 13, 'left', 700);
    CV.text(c, 'p = ' + k.F + ' N ÷ ' + k.A + ' cm² = ' + (+k.P.toFixed(2)) + ' N/cm²', W / 2, 30, C.ink, 16, 'center', 800);
  },
  read(st) { const k = this.k(st.p); return [k.F + ' N', k.A + ' cm²', (+k.P.toFixed(2)) + ' N/cm² = ' + Math.round(k.P * 10000).toLocaleString('en-GB') + ' Pa', k.P > 3 ? 'sinks deep' : k.P > 0.5 ? 'sinks a little' : 'hardly sinks']; }
};

/* ---------- 8.6 Hydraulic jack ---------- */
SIMS.hydraulic = {
  title: 'Hydraulic jack', h: 400,
  controls: [{ id: 'F', label: 'Force on the small piston', min: 10, max: 200, step: 10, value: 50, fmt: v => v + ' N' }, { id: 'A1', label: 'Area of small piston', min: 1, max: 10, step: 1, value: 5, fmt: v => v + ' cm²' }, { id: 'A2', label: 'Area of large piston', min: 20, max: 400, step: 20, value: 200, fmt: v => v + ' cm²' }, { type: 'button', act: 'push', label: 'Push down 10 cm' }],
  readouts: ['Pressure in the oil = F ÷ A', 'Force on the large piston', 'Force multiplied by', 'Distance the large piston rises'],
  note: 'Liquids cannot be squashed, so the pressure made at the small piston is passed through the oil to the large piston. The same pressure on a bigger area gives a bigger force. The catch: the large piston moves a much smaller distance — you push further to lift the load a little.',
  init(st) { st.d = 0; st.push = false; },
  action(st, a) { if (a === 'push') { st.d = 0; st.push = true; } },
  change(st) { st.d = 0; st.push = false; },
  step(st, dt) { if (st.push) { st.d = Math.min(10, st.d + dt * 5); if (st.d >= 10) st.push = false; } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, P = p.F / p.A1, F2 = P * p.A2, base = H * 0.78, w1 = 20 + p.A1 * 3, w2 = 40 + Math.sqrt(p.A2) * 8, x1 = W * 0.25, x2 = W * 0.65, top1 = H * 0.3 + st.d * 6, rise = st.d * p.A1 / p.A2 * 6, top2 = H * 0.46 - rise;
    c.fillStyle = hexA(C.u6, .3); c.fillRect(x1 - w1 / 2, top1, w1, base - top1); c.fillRect(x1 - w1 / 2, base - 30, x2 - x1, 30); c.fillRect(x2 - w2 / 2, top2, w2, base - top2);
    c.strokeStyle = C.ink; c.lineWidth = 2.5; c.beginPath(); c.moveTo(x1 - w1 / 2, H * 0.2); c.lineTo(x1 - w1 / 2, base); c.lineTo(x2 + w2 / 2, base); c.lineTo(x2 + w2 / 2, H * 0.3); c.moveTo(x1 + w1 / 2, H * 0.2); c.lineTo(x1 + w1 / 2, base - 30); c.lineTo(x2 - w2 / 2, base - 30); c.lineTo(x2 - w2 / 2, H * 0.3); c.stroke();
    CV.rrect(c, x1 - w1 / 2, top1 - 10, w1, 10, 2, '#9AA3AC', C.ink); CV.rrect(c, x2 - w2 / 2, top2 - 12, w2, 12, 2, '#9AA3AC', C.ink); CV.rrect(c, x2 - 40, top2 - 52, 80, 40, 6, C.u1, C.ink); CV.text(c, 'load', x2, top2 - 32, '#fff', 12, 'center', 700);
    CV.arrow(c, x1, top1 - 70, x1, top1 - 14, C.u1, 3, 10); CV.text(c, p.F + ' N', x1 + 10, top1 - 50, C.u1, 13, 'left', 700); CV.arrow(c, x2 + w2 / 2 + 20, top2, x2 + w2 / 2 + 20, top2 - Math.min(160, 30 + F2 / 20), C.u5, 3, 10); CV.text(c, Math.round(F2) + ' N', x2 + w2 / 2 + 28, top2 - 50, C.u5, 13, 'left', 700);
    CV.text(c, 'pressure ' + (+P.toFixed(2)) + ' N/cm² everywhere in the oil', (x1 + x2) / 2, base + 18, C.ink, 13, 'center', 700);
  },
  read(st) { const p = st.p, P = p.F / p.A1; return [(+P.toFixed(2)) + ' N/cm²', Math.round(P * p.A2) + ' N', '× ' + (+(p.A2 / p.A1).toFixed(1)), (st.d * p.A1 / p.A2).toFixed(2) + ' cm (small piston moved ' + st.d.toFixed(1) + ' cm)']; }
};

/* ---------- 8.7 Crushed can ---------- */
SIMS.can = {
  title: 'The crushed-can experiment', h: 420,
  controls: [{ type: 'button', act: 'heat', label: '1. Heat the water' }, { type: 'button', act: 'plunge', label: '2. Flip into cold water' }, { type: 'button', act: 'reset', label: 'New can' }],
  readouts: ['Inside the can', 'Pressure inside', 'Pressure outside (atmosphere)', 'What happens'],
  note: 'Heating boils the water: steam pushes most of the air out of the can. Flipping it into cold water makes the steam condense into a few drops, so there are hardly any gas particles left inside. The atmosphere outside is still pushing in at about 100 000 Pa — nothing pushes back, so the can is crushed. Try flipping without heating first!',
  init(st) { st.stage = 'air'; st.steam = 0; st.crush = 0; st.parts = Array.from({ length: 40 }, (_, i) => ({ x: Math.random(), y: Math.random(), k: 'air' })); },
  action(st, a) { if (a === 'reset') this.init(st); if (a === 'heat' && st.stage === 'air') st.stage = 'heating'; if (a === 'plunge' && st.stage !== 'plunged' && st.stage !== 'crushed') st.stage = 'plunged'; },
  step(st, dt) {
    if (st.stage === 'heating') { st.steam = Math.min(1, st.steam + dt * 0.4); st.parts.forEach(p => { if (p.k === 'air' && Math.random() < dt * 0.6 * st.steam) p.k = 'steam'; }); if (st.steam >= 1) st.stage = 'steamy'; }
    if (st.stage === 'plunged') { const steamy = st.parts.filter(p => p.k === 'steam').length / st.parts.length; st.parts.forEach(p => { if (p.k === 'steam' && Math.random() < dt * 3) p.k = 'gone'; }); if (steamy > 0.5) st.crush = Math.min(1, st.crush + dt * 3); if (st.crush >= 1 || st.parts.every(p => p.k !== 'steam')) st.stage = st.crush > 0.5 ? 'crushed' : 'plunged-air'; }
    st.parts.forEach(p => { p.x = (p.x + (Math.random() - 0.5) * dt * (p.k === 'steam' ? 1.2 : 0.6) + 1) % 1; p.y = (p.y + (Math.random() - 0.5) * dt * (p.k === 'steam' ? 1.2 : 0.6) + 1) % 1; });
  },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const flipped = st.stage === 'plunged' || st.stage === 'crushed' || st.stage === 'plunged-air', cx = W * 0.4, cw = 110 * (1 - st.crush * 0.45), ch = 180 * (1 - st.crush * 0.25), top = flipped ? H * 0.28 : H * 0.18;
    if (flipped) { c.fillStyle = hexA(C.u5, .3); c.fillRect(cx - 130, H * 0.62, 260, H * 0.38); CV.line(c, cx - 130, H * 0.62, cx + 130, H * 0.62, hexA(C.u5, .8), 2); }
    else if (st.stage === 'heating' || st.stage === 'steamy') { for (let i = 0; i < 7; i++) CV.line(c, cx - 30 + i * 10, top + ch + 30, cx - 30 + i * 10 + Math.sin(st.t * 12 + i) * 4, top + ch + 12, i % 2 ? '#F08C00' : '#E5484D', 3); }
    c.save(); c.translate(cx, top + ch / 2); if (st.crush > 0) c.scale(1, 1); c.beginPath(); const k = st.crush; for (let i = 0; i <= 20; i++) { const yy = -ch / 2 + i / 20 * ch, dx = cw / 2 - k * 18 * Math.abs(Math.sin(i * 1.3)); i ? c.lineTo(dx, yy) : c.moveTo(dx, yy); } for (let i = 20; i >= 0; i--) { const yy = -ch / 2 + i / 20 * ch, dx = -cw / 2 + k * 18 * Math.abs(Math.sin(i * 1.7)); c.lineTo(dx, yy); } c.closePath(); c.fillStyle = hexA('#C8CDD2', .35); c.fill(); c.strokeStyle = C.ink; c.lineWidth = 2.5; c.stroke();
    st.parts.forEach(p => { if (p.k === 'gone') return; CV.circle(c, (p.x - 0.5) * (cw - 16), (p.y - 0.5) * (ch - 16), 3.2, p.k === 'air' ? C.u5 : '#FFFFFF', C.ink, 0.8); }); c.restore();
    for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2, r = 150; CV.arrow(c, cx + Math.cos(a) * r, top + ch / 2 + Math.sin(a) * r * 0.9, cx + Math.cos(a) * (r - 34), top + ch / 2 + Math.sin(a) * (r - 34) * 0.9, hexA(C.u1, .8), 2.5, 8); }
    CV.text(c, '● air particle   ○ steam particle', W * 0.66, 30, C.muted, 12, 'left'); CV.text(c, 'red arrows: the atmosphere', W * 0.66, 50, C.u1, 12, 'left'); CV.text(c, 'pushing in', W * 0.66, 66, C.u1, 12, 'left');
  },
  read(st) { const air = st.parts.filter(p => p.k === 'air').length, steam = st.parts.filter(p => p.k === 'steam').length, n = air + steam, pin = st.stage === 'crushed' || (st.stage === 'plunged' && steam < 8) ? 'very low' : n > 30 ? 'about 100 000 Pa' : 'falling';
    return [`${air} air · ${steam} steam particles`, pin, 'about 100 000 Pa', { air: 'balanced — nothing happens', heating: 'steam is pushing the air out', steamy: 'can is full of steam — flip it!', plunged: 'steam condensing…', crushed: 'CRUNCH! outside pressure ≫ inside', 'plunged-air': 'not crushed: air inside still pushes back' }[st.stage]]; }
};

/* ---------- 9.4 Resistance of a wire ---------- */
const WIRES = { thin: ['thin constantan', 15], thick: ['thick constantan', 4], nich: ['thin nichrome', 34] };
SIMS.wire = {
  title: 'Resistance of a wire', h: 430,
  controls: [{ id: 'w', type: 'seg', label: 'Wire', value: 'thin', options: Object.entries(WIRES).map(([k, v]) => [k, v[0]]) }, { id: 'L', label: 'Length between the crocodile clips', min: 10, max: 100, step: 10, value: 50, fmt: v => v + ' cm' }, { id: 'V', label: 'Supply p.d.', min: 0.5, max: 3, step: 0.5, value: 1.5, fmt: v => v.toFixed(1) + ' V' }, { type: 'button', act: 'rec', label: 'Record this result' }, { type: 'button', act: 'clr', label: 'Clear graph' }],
  readouts: ['Voltmeter (p.d.)', 'Ammeter (current)', 'Resistance R = V ÷ I', 'Pattern'],
  note: 'Move the crocodile clip to change the length. R = V ÷ I. Record several lengths and the graph of resistance against length is a straight line through the origin: resistance is proportional to length. A thicker wire has less resistance. Keep the current small — a hot wire has more resistance.',
  init(st) { st.pts = st.pts || []; },
  k(p) { const R = WIRES[p.w][1] * p.L / 100, I = p.V / R; return { R, I }; },
  action(st, a) { if (a === 'clr') st.pts = []; if (a === 'rec') { const k = this.k(st.p); st.pts.push([st.p.L, k.R, st.p.w]); } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const k = this.k(st.p), x0 = 50, x1 = W * 0.55, y = 60, X = L => x0 + L / 100 * (x1 - x0);
    CV.rrect(c, x0, y, x1 - x0, 12, 2, hexA(C.u2, .3), C.ink); for (let i = 0; i <= 10; i++) { CV.line(c, X(i * 10), y + 12, X(i * 10), y + 18, C.ink, 1); CV.mono(c, i * 10 + '', X(i * 10), y + 26, C.muted, 9.5, 'center'); }
    CV.line(c, x0, y + 6, x1, y + 6, st.p.w === 'thick' ? C.u6 : C.u2, st.p.w === 'thick' ? 4 : 1.8);
    [0, st.p.L].forEach(L => { c.fillStyle = C.u1; c.beginPath(); c.moveTo(X(L) - 7, y - 12); c.lineTo(X(L) + 7, y - 12); c.lineTo(X(L), y + 2); c.closePath(); c.fill(); });
    CS.wire(c, [[X(0), y - 12], [X(0), y - 34], [X(st.p.L), y - 34], [X(st.p.L), y - 12]], C.ink); CS.meter(c, (X(0) + X(st.p.L)) / 2, y - 34, 'V', C.ink, C.surface); CS.tag(c, C, st.p.V.toFixed(2) + ' V', (X(0) + X(st.p.L)) / 2 + 60, y - 34);
    CS.wire(c, [[X(0), y + 2], [X(0), y + 90], [X(st.p.L), y + 90], [X(st.p.L), y + 2]], C.ink); CS.cell(c, X(st.p.L) - 60, y + 90, C.ink); CS.meter(c, X(0) + 50, y + 90, 'A', C.ink, C.surface); CS.tag(c, C, k.I.toFixed(3) + ' A', X(0) + 50, y + 118);
    CV.plot(c, C, { x: W * 0.62, y: 40, w: W * 0.33, h: H * 0.5 }, { xr: [0, 100], yr: [0, 36], dots: st.pts.map(([L, R, w]) => [L, R, w === 'thin' ? C.u2 : w === 'thick' ? C.u6 : C.u1, 4]), series: [{ f: L => WIRES[st.p.w][1] * L / 100, col: hexA(C.muted, .5), w: 1, dash: [4, 4] }], xl: 'length (cm)', yl: 'R (Ω)' });
    if (k.I > 0.6) CV.text(c, 'current is high — the wire will get hot!', 50, H - 30, C.bad, 13, 'left', 700);
  },
  read(st) { const k = this.k(st.p); return [st.p.V.toFixed(2) + ' V', k.I.toFixed(3) + ' A', k.R.toFixed(2) + ' Ω', 'double the length → double the resistance']; }
};

/* ---------- 9.5 Switches ---------- */
SIMS.switches = {
  title: 'One-way and two-way switches', h: 400, noPlay: true,
  controls: [{ id: 'mode', type: 'seg', label: 'Circuit', value: 'two', options: [['two', 'Staircase: two two-way switches'], ['ser', 'Two switches in series (AND)'], ['par', 'Two switches in parallel (OR)']] }, { type: 'button', act: 'A', label: 'Flick switch A' }, { type: 'button', act: 'B', label: 'Flick switch B' }],
  readouts: ['Switch A', 'Switch B', 'Lamp', 'Rule'],
  note: 'Staircase: each two-way switch connects to one of two linking wires. When both choose the same wire, the circuit is complete and the lamp lights; flicking either switch changes it — so the light works from upstairs or downstairs. Series switches: both must be closed (AND). Parallel switches: either one will do (OR).',
  init(st) { st.A = 0; st.B = 0; },
  action(st, a) { if (a === 'A') st.A ^= 1; if (a === 'B') st.B ^= 1; },
  on(st) { const m = st.p.mode; return m === 'two' ? st.A === st.B : m === 'ser' ? st.A && st.B : st.A || st.B; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const on = this.on(st), m = st.p.mode, col = on ? C.u5 : C.ink, L = 70, R = W - 70, T = 70, B = H - 70, lx = W / 2;
    CS.cell(c, lx, T, C.ink); CS.wire(c, [[lx - 5, T], [L, T], [L, B]], on ? C.u5 : C.ink); CS.wire(c, [[lx + 5, T], [R, T], [R, B]], on ? C.u5 : C.ink); CS.lamp(c, R, (T + B) / 2, C.ink, C.surface, on ? 1 : 0);
    const sw = (x, y, closed, lab) => { CV.circle(c, x - 20, y, 3.5, C.ink); CV.circle(c, x + 20, y, 3.5, C.ink); if (closed) CV.line(c, x - 20, y, x + 20, y, C.u1, 3); else CV.line(c, x - 20, y, x + 16, y - 16, C.u1, 3); CV.text(c, lab, x, y + 22, C.ink, 13, 'center', 800); };
    if (m === 'two') { const ax = L + 70, bx = R - 70, uy = B - 40, dy = B + 20; CS.wire(c, [[L, B], [ax - 20, B]], C.ink); CS.wire(c, [[bx + 20, B], [R, B]], C.ink); CV.circle(c, ax - 20, B, 4, C.ink); CV.circle(c, bx + 20, B, 4, C.ink);
      CS.wire(c, [[ax + 20, uy], [bx - 20, uy]], on && st.A === 1 ? C.u5 : C.ink); CS.wire(c, [[ax + 20, dy], [bx - 20, dy]], on && st.A === 0 ? C.u5 : C.ink); [[ax + 20, uy], [ax + 20, dy], [bx - 20, uy], [bx - 20, dy]].forEach(([x, y]) => CV.circle(c, x, y, 3.5, C.ink));
      CV.line(c, ax - 20, B, ax + 20, st.A ? uy : dy, C.u1, 3); CV.line(c, bx + 20, B, bx - 20, st.B ? uy : dy, C.u1, 3); CV.text(c, 'A (downstairs)', ax, B + 44, C.ink, 12, 'center', 800); CV.text(c, 'B (upstairs)', bx, B + 44, C.ink, 12, 'center', 800); }
    else if (m === 'ser') { CS.wire(c, [[L, B], [L + 80, B]], C.ink); sw(L + 100, B, st.A, 'A'); CS.wire(c, [[L + 120, B], [R - 120, B]], C.ink); sw(R - 100, B, st.B, 'B'); CS.wire(c, [[R - 80, B], [R, B]], C.ink); }
    else { const y1 = B - 30, y2 = B + 20; CS.wire(c, [[L, B], [L + 40, B], [L + 40, y1], [lx - 20, y1]], C.ink); CS.wire(c, [[L + 40, B], [L + 40, y2], [lx - 20, y2]], C.ink); sw(lx, y1, st.A, 'A'); sw(lx, y2 + 0, st.B, ''); CV.text(c, 'B', lx, y2 + 22, C.ink, 13, 'center', 800); CS.wire(c, [[lx + 20, y1], [R - 40, y1], [R - 40, B], [R, B]], C.ink); CS.wire(c, [[lx + 20, y2], [R - 40, y2], [R - 40, B]], C.ink); }
  },
  read(st) { const m = st.p.mode, on = this.on(st), s = x => m === 'two' ? (x ? 'up' : 'down') : x ? 'closed' : 'open'; return [s(st.A), s(st.B), on ? 'ON' : 'off', m === 'two' ? 'on when both switches point to the same wire' : m === 'ser' ? 'AND: both must be closed' : 'OR: either one closed']; }
};

/* ---------- 10.1 Bell jar ---------- */
SIMS.belljar = {
  title: 'Sound needs a medium: the bell jar', h: 400,
  controls: [{ id: 'air', label: 'Air left in the jar', min: 0, max: 100, step: 5, value: 100, fmt: v => v + '%' }],
  readouts: ['Air particles in the jar', 'Loudness outside', 'Can you see the hammer?', 'Why'],
  note: 'The bell keeps vibrating, but as air is pumped out there are fewer particles to pass the vibrations on, so less sound reaches you. With (almost) no air — a vacuum — no sound can travel. Light still travels through a vacuum, so you can still see it working.',
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const cx = W * 0.38, base = H * 0.8, f = st.p.air / 100;
    const n = Math.round(80 * f); for (let i = 0; i < n; i++) { const a = i * 2.39996, r = 16 + (i * 37 % 130), x = cx + Math.cos(a) * r * 0.9 + Math.sin(st.t * 3 + i) * 3, y = base - 110 + Math.sin(a) * r * 0.7; if (y < base - 5 && y > 40) CV.circle(c, x, y, 2.4, hexA(C.u5, .8)); }
    c.strokeStyle = C.ink; c.lineWidth = 2.5; c.beginPath(); c.moveTo(cx - 130, base); c.lineTo(cx - 130, 110); c.quadraticCurveTo(cx - 130, 30, cx, 30); c.quadraticCurveTo(cx + 130, 30, cx + 130, 110); c.lineTo(cx + 130, base); c.stroke(); CV.rrect(c, cx - 160, base, 320, 16, 3, C.surface, C.ink, 2);
    CV.line(c, cx + 160, base + 8, W * 0.85, base + 8, C.ink, 4); CV.rrect(c, W * 0.85, base - 14, 60, 40, 6, C.surface, C.ink); CV.text(c, 'pump', W * 0.85 + 30, base + 6, C.ink, 12, 'center', 700);
    const by = base - 110; CV.circle(c, cx, by, 34, '#E8C547', C.ink, 2); CV.line(c, cx, by + 34, cx, base, C.ink, 3); const hx = cx + 44 + Math.sin(st.t * 30) * 6; CV.line(c, cx + 70, by + 30, hx, by - 6, C.ink, 2.5); CV.circle(c, hx, by - 8, 6, C.ink);
    for (let i = 0; i < 4; i++) { const r = ((st.t * 90 + i * 40) % 160) + 40; c.strokeStyle = hexA(C.u2, f * (1 - r / 200)); c.lineWidth = 3; c.beginPath(); c.arc(cx + 130, by, r * 0.8, -0.6, 0.6); c.stroke(); }
    CV.text(c, f > 0.05 ? 'ring ring' : '(silence)', W * 0.82, by - 40, hexA(C.ink, Math.max(0.25, f)), 14 + f * 10, 'center', 800);
  },
  read(st) { const f = st.p.air / 100; return [Math.round(80 * f) + ' shown (' + st.p.air + '%)', f < 0.05 ? 'almost silent' : Math.round(20 + 50 * f) + ' dB (approx.)', 'yes — light crosses a vacuum', f < 0.05 ? 'no particles to pass on the vibrations' : 'air particles pass the vibrations on']; }
};

/* ---------- 10.2 Speed of sound ---------- */
SIMS.soundspeed = {
  title: 'Measuring the speed of sound', h: 420,
  controls: [{ id: 'D', label: 'Distance to the timers', min: 50, max: 600, step: 50, value: 300, fmt: v => v + ' m' }, { id: 'meth', type: 'seg', label: 'Timing', value: 'hand', options: [['hand', 'Stopwatches (see → hear)'], ['elec', 'Microphones + timer']] }, { type: 'button', act: 'bang', label: 'Bang the blocks' }, { type: 'button', act: 'clr', label: 'Clear results' }],
  readouts: ['Time for the sound', 'Speed = distance ÷ time', 'True speed of sound', 'Error'],
  note: 'The light from the bang arrives almost instantly, so the timers start on the flash and stop when they hear the sound. Reaction times cause errors of a few tenths of a second — a big fraction of the time over a short distance. A longer distance, several timers or electronic timing give a better result. (True speed ≈ 330 m/s.)',
  init(st) { st.ph = 'idle'; st.tt = 0; st.res = st.res || []; },
  action(st, a) { if (a === 'clr') { st.res = []; return; } if (a === 'bang') { st.ph = 'go'; st.tt = 0; st.err = st.p.meth === 'hand' ? (0.2 + Math.random() * 0.12) - (0.17 + Math.random() * 0.14) : (Math.random() - 0.5) * 0.004; } },
  step(st, dt) { if (st.ph !== 'go') return; st.tt += dt; if (st.tt >= st.p.D / 330 + 0.4) { st.ph = 'done'; const T = st.p.D / 330 + st.err; st.res.push([st.p.D, st.p.meth, T, st.p.D / T]); if (st.res.length > 7) st.res.shift(); } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const gy = H * 0.38, x0 = 70, x1 = W - 90, X = d => x0 + d / st.p.D * (x1 - x0);
    CV.line(c, 0, gy + 30, W, gy + 30, C.ink, 2); CV.text(c, st.p.D + ' m', (x0 + x1) / 2, gy + 50, C.ink, 13, 'center', 700);
    CV.circle(c, x0, gy - 30, 8, C.surface, C.ink, 2); CV.line(c, x0, gy - 22, x0, gy + 8, C.ink, 3); CV.line(c, x0, gy + 8, x0 - 8, gy + 30, C.ink, 3); CV.line(c, x0, gy + 8, x0 + 8, gy + 30, C.ink, 3); CV.rrect(c, x0 - 16, gy - 52, 12, 18, 2, '#B87333'); CV.rrect(c, x0 + 4, gy - 52, 12, 18, 2, '#B87333');
    CV.circle(c, x1, gy - 30, 8, C.surface, C.ink, 2); CV.line(c, x1, gy - 22, x1, gy + 8, C.ink, 3); CV.line(c, x1, gy + 8, x1 - 8, gy + 30, C.ink, 3); CV.line(c, x1, gy + 8, x1 + 8, gy + 30, C.ink, 3);
    if (st.ph === 'go' && st.tt < 0.15) { CV.circle(c, x0, gy - 44, 24, hexA('#FFE08A', .8)); CV.line(c, x0, gy - 44, x1, gy - 30, hexA('#F2B34C', .8), 2, [6, 4]); }
    if (st.ph === 'go') { const r = Math.min(st.tt * 330, st.p.D); c.strokeStyle = hexA(C.u5, .8); c.lineWidth = 3; c.beginPath(); c.arc(x0, gy - 30, X(r) - x0, -0.5, 0.5); c.stroke(); }
    CV.mono(c, (st.ph === 'go' ? Math.min(st.tt, st.p.D / 330) : st.res.length ? st.res[st.res.length - 1][2] : 0).toFixed(2) + ' s', x1, 40, C.u1, 20, 'center');
    const t0 = H * 0.62; CV.mono(c, 'distance   timing        time      speed', 40, t0, C.muted, 11.5); st.res.forEach((r, i) => CV.mono(c, `${String(r[0]).padStart(5)} m  ${r[1] === 'hand' ? 'stopwatch  ' : 'microphones'}  ${r[2].toFixed(3)} s  ${r[3].toFixed(0)} m/s`, 40, t0 + 18 + i * 17, C.ink, 11.5));
  },
  read(st) { const r = st.res[st.res.length - 1]; return r ? [r[2].toFixed(3) + ' s', r[3].toFixed(0) + ' m/s', '330 m/s', ((r[3] - 330) / 330 * 100).toFixed(1) + '%'] : ['—', '—', '330 m/s', '—']; }
};

/* ---------- 10.3 Decibel meter ---------- */
SIMS.decibel = {
  title: 'Loudness with a decibel meter', h: 420,
  controls: [{ id: 'L1', label: 'Speaker loudness at 1 m', min: 60, max: 100, step: 2, value: 80, fmt: v => v + ' dB' }, { id: 'd', label: 'Distance of the meter', min: 0.5, max: 8, step: 0.5, value: 1, fmt: v => v.toFixed(1) + ' m' }, { type: 'button', act: 'rec', label: 'Record reading' }, { type: 'button', act: 'clr', label: 'Clear graph' }],
  readouts: ['Distance', 'Meter reading', 'Safe to listen for a long time?', 'Similar to'],
  note: 'Loudness is measured in decibels (dB). As the sound spreads out from the speaker its energy is spread over a bigger area, so the reading falls — by about 6 dB each time the distance doubles. Keep the volume, pitch and the meter’s direction the same for a fair test. Long exposure above about 85 dB can damage hearing.',
  init(st) { st.pts = st.pts || []; },
  L(p) { return p.L1 - 20 * Math.log10(p.d); },
  action(st, a) { if (a === 'clr') st.pts = []; if (a === 'rec') st.pts.push([st.p.d, this.L(st.p) + (Math.random() - 0.5)]); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const y = H * 0.24, x0 = 60, X = d => x0 + d / 8 * (W * 0.9 - x0), L = this.L(st.p);
    CV.rrect(c, x0 - 40, y - 34, 40, 68, 6, '#333', C.ink); CV.circle(c, x0 - 20, y, 16, '#666', '#111', 2);
    for (let i = 0; i < 6; i++) { const r = ((st.t * 80 + i * 45) % 270) + 10; c.strokeStyle = hexA(C.u2, Math.max(0, 0.8 - r / 330) * (st.p.L1 - 50) / 50); c.lineWidth = 2.5; c.beginPath(); c.arc(x0, y, r, -0.7, 0.7); c.stroke(); }
    const mx = X(st.p.d); CV.rrect(c, mx - 26, y - 20, 52, 40, 6, C.surface, C.ink, 2); CV.mono(c, L.toFixed(0) + ' dB', mx, y, L > 85 ? C.bad : C.ink, 12, 'center'); CV.line(c, x0, y + 50, X(8), y + 50, C.ink, 1); for (let d = 0; d <= 8; d++) { CV.line(c, X(d), y + 46, X(d), y + 54, C.ink, 1); CV.mono(c, d + ' m', X(d), y + 64, C.muted, 10, 'center'); }
    CV.plot(c, C, { x: 60, y: H * 0.5, w: W - 120, h: H * 0.36 }, { xr: [0, 8], yr: [40, 110], dots: st.pts.map(([d, l]) => [d, l, C.u10 || C.u6, 4]), series: [{ f: d => d > 0.2 ? st.p.L1 - 20 * Math.log10(d) : NaN, col: hexA(C.muted, .5), w: 1, dash: [4, 4] }, { pts: [[0, 85], [8, 85]], col: C.bad, w: 1, dash: [2, 3] }], xl: 'distance (m)', yl: 'loudness (dB)' });
  },
  read(st) { const L = this.L(st.p); return [st.p.d.toFixed(1) + ' m', L.toFixed(1) + ' dB', L > 85 ? 'no — risk of hearing damage' : 'yes', L > 95 ? 'a nightclub' : L > 80 ? 'busy traffic' : L > 65 ? 'a loud classroom' : L > 50 ? 'normal conversation' : 'a quiet room']; }
};

/* ---------- 11.1 Seeing: luminous and non-luminous ---------- */
SIMS.seeing = {
  title: 'How we see things', h: 400, noPlay: false,
  controls: [{ id: 'src', type: 'seg', label: 'Light source', value: 'lamp', options: [['lamp', 'Lamp on'], ['off', 'Lamp off (dark room)']] }, { id: 'obj', type: 'seg', label: 'Object', value: 'book', options: [['book', 'Book (opaque)'], ['mirror', 'Mirror'], ['clear', 'Clear glass'], ['frost', 'Frosted glass'], ['candle', 'Candle (luminous)']] }],
  readouts: ['Is the object luminous?', 'What happens to light at the object', 'Does light reach the eye from it?', 'Shadow'],
  note: 'Luminous objects give out their own light. We see everything else because light from a source reflects off it into our eyes. Transparent materials let light straight through; translucent ones scatter it; opaque ones block it and cast a shadow. Rays always point INTO the eye.',
  draw(c, W, H, st, C) {
    const dark = st.p.src === 'off'; c.fillStyle = dark ? '#05070C' : C.bg; c.fillRect(0, 0, W, H); if (!dark) CV.grid(c, W, H, C);
    const lx = 70, ly = 70, ox = W * 0.45, oy = H * 0.55, ex = W - 80, ey = H * 0.3, o = st.p.obj, cand = o === 'candle';
    CV.circle(c, lx, ly, 18, dark ? '#333' : '#FFD35A', C.ink, 2); CV.text(c, 'lamp', lx, ly + 34, dark ? '#777' : C.muted, 12, 'center');
    c.fillStyle = C.surface; c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(ex - 22, ey); c.quadraticCurveTo(ex, ey - 15, ex + 22, ey); c.quadraticCurveTo(ex, ey + 15, ex - 22, ey); c.fill(); c.stroke(); CV.circle(c, ex - 6, ey, 6, '#333'); CV.text(c, 'eye', ex, ey + 30, dark ? '#999' : C.muted, 12, 'center');
    const ray = (x1, y1, x2, y2, a = 1) => CV.arrow(c, x1, y1, x2, y2, hexA('#F2A900', a), 2.5, 10);
    if (o === 'book') CV.rrect(c, ox - 40, oy - 30, 80, 60, 3, dark ? '#1a2a1a' : '#3DAE5B', C.ink); else if (o === 'mirror') { CV.rrect(c, ox - 6, oy - 60, 12, 120, 2, '#CFE3F5', C.ink); } else if (o === 'clear') CV.rrect(c, ox - 8, oy - 60, 16, 120, 2, hexA('#9ADBE8', .3), C.ink); else if (o === 'frost') CV.rrect(c, ox - 8, oy - 60, 16, 120, 2, hexA('#E6EEF3', .85), C.ink); else { CV.rrect(c, ox - 10, oy - 20, 20, 60, 2, '#F4F1E8', C.ink); c.fillStyle = '#FFB547'; c.beginPath(); c.ellipse(ox, oy - 34 + Math.sin(st.t * 12) * 1.5, 7, 14, 0, 0, 7); c.fill(); }
    if (!dark) { if (o === 'book') { ray(lx + 16, ly + 10, ox - 30, oy - 30); ray(ox + 10, oy - 30, ex - 24, ey + 4); ray(ox - 10, oy - 30, ox - 50, oy - 90, .5); ray(ox + 30, oy - 20, ox + 70, oy + 20, .5); c.fillStyle = 'rgba(0,0,0,.18)'; c.beginPath(); c.moveTo(ox + 40, oy + 30); c.lineTo(W * 0.8, H - 10); c.lineTo(W * 0.62, H - 10); c.lineTo(ox + 40, oy - 30); c.fill(); }
      else if (o === 'mirror') { ray(lx + 16, ly + 10, ox - 6, oy - 20); ray(ox - 6, oy - 20, ex - 24, ey + 2); ln_(); }
      else if (o === 'clear') { ray(lx + 16, ly + 14, ox, oy - 10); ray(ox + 8, oy - 8, W - 40, H - 30); }
      else if (o === 'frost') { ray(lx + 16, ly + 14, ox, oy - 10); for (let i = -2; i <= 2; i++) ray(ox + 8, oy - 8, ox + 110, oy - 8 + i * 40, .55); } }
    if (cand) { ray(ox + 8, oy - 36, ex - 24, ey + 2); ray(ox - 8, oy - 36, ox - 90, oy - 90, .6); ray(ox, oy - 40, ox, oy - 120, .6); }
    function ln_() { CV.line(c, ox - 6, oy - 20, ox - 60, oy - 20, hexA(C.muted, .6), 1, [4, 4]); CV.text(c, 'normal', ox - 64, oy - 20, C.muted, 10, 'right'); }
  },
  read(st) { const o = st.p.obj, dark = st.p.src === 'off'; const lum = o === 'candle'; const what = { book: 'some reflected (diffuse), the rest absorbed', mirror: 'reflected: angle i = angle r', clear: 'passes straight through (transparent)', frost: 'passes through but is scattered (translucent)', candle: 'it gives out its own light' }[o];
    const see = lum ? 'yes — its own light' : dark ? 'no — no light to reflect' : o === 'book' || o === 'mirror' ? 'yes — reflected light' : 'you see what is behind it'; return [lum ? 'yes' : 'no', what, see, dark && !lum ? 'none (all dark)' : o === 'book' ? 'yes — it is opaque' : o === 'frost' ? 'a faint one' : 'no']; }
};

/* ---------- 11.3 The eye ---------- */
SIMS.eye = {
  title: 'Focusing in the eye', h: 420,
  controls: [{ id: 'u', label: 'Distance to the object', min: 0.1, max: 10, step: 0.05, value: 3, fmt: v => v < 1 ? Math.round(v * 100) + ' cm' : v.toFixed(1) + ' m' }, { id: 'eye', type: 'seg', label: 'Eye', value: 'n', options: [['n', 'Normal'], ['s', 'Short-sighted'], ['l', 'Long-sighted']] }, { id: 'gl', type: 'seg', label: 'Glasses', value: 0, options: [[0, 'None'], [-2.5, 'Concave lens'], [2.5, 'Convex lens']] }],
  readouts: ['Lens shape', 'Image forms', 'Seen clearly?', 'Tip'],
  note: 'The eye lens changes shape to focus: thin for distant objects, fat for near ones. A short-sighted eye focuses distant objects in front of the retina (fix: a concave lens). A long-sighted eye cannot focus near objects — the image would be behind the retina (fix: a convex lens).',
  k(p) { const Lr = 0.022, base = 1 / Lr, rng = { n: [0, 4], s: [2, 6], l: [-1.5, 0.5] }[p.eye], need = 1 / Lr + 1 / p.u - base, Pl = base + Math.max(rng[0], Math.min(rng[1], need - p.gl)), Pt = Pl + p.gl, v = 1 / (Pt - 1 / p.u); return { Lr, Pl, Pt, v, thick: (Pl - base - rng[0]) / (rng[1] - rng[0]), err: v - Lr }; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const k = this.k(st.p), cy = H * 0.5, lx = W * 0.5, sc = (W * 0.36) / k.Lr, rx = lx + k.Lr * sc, eR = k.Lr * sc * 0.62;
    c.fillStyle = hexA(C.u11 || C.u8, .06); c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.ellipse(lx + k.Lr * sc * 0.5, cy, k.Lr * sc * 0.55, eR, 0, 0, 7); c.fill(); c.stroke();
    c.strokeStyle = C.u1; c.lineWidth = 5; c.beginPath(); c.ellipse(lx + k.Lr * sc * 0.5, cy, k.Lr * sc * 0.55, eR, 0, -1.1, 1.1); c.stroke(); CV.text(c, 'retina', rx + 8, cy - eR * 0.7, C.u1, 12, 'left', 700);
    const lw = 6 + 16 * Math.max(0, Math.min(1, k.thick)); c.fillStyle = hexA(C.u10 || C.u6, .35); c.beginPath(); c.ellipse(lx, cy, lw, eR * 0.45, 0, 0, 7); c.fill(); c.stroke(); CV.text(c, 'lens', lx, cy - eR * 0.45 - 10, C.ink, 12, 'center', 700);
    if (st.p.gl) { const gx = lx - 70; c.strokeStyle = C.ink; c.lineWidth = 2; c.fillStyle = hexA('#9ADBE8', .4); c.beginPath(); if (st.p.gl > 0) c.ellipse(gx, cy, 8, 50, 0, 0, 7); else { c.moveTo(gx - 10, cy - 50); c.lineTo(gx + 10, cy - 50); c.quadraticCurveTo(gx, cy, gx + 10, cy + 50); c.lineTo(gx - 10, cy + 50); c.quadraticCurveTo(gx, cy, gx - 10, cy - 50); } c.fill(); c.stroke(); }
    const ix = lx + Math.min(k.v, k.Lr * 1.8) * sc, spread = [-1, -0.5, 0.5, 1];
    spread.forEach(f => { const yl = cy + f * eR * 0.4, ang0 = Math.atan2(yl - cy, 40 + 200 / Math.max(0.3, st.p.u)); CV.line(c, 20, cy + f * eR * 0.4 * Math.min(1, 0.3 / st.p.u + 0.2), lx, yl, hexA('#F2A900', .8), 2); const t = (rx - lx) / (ix - lx); const yr = yl + (cy - yl) * t; CV.line(c, lx, yl, rx, yr, hexA('#F2A900', .9), 2); if (k.v < k.Lr) CV.line(c, ix, cy, rx, yr, hexA('#F2A900', .9), 2); });
    CV.circle(c, ix, cy, 4, k.v < k.Lr * 0.97 ? C.bad : k.v > k.Lr * 1.03 ? C.bad : C.good);
    CV.text(c, 'object ' + (st.p.u < 1 ? Math.round(st.p.u * 100) + ' cm' : st.p.u.toFixed(1) + ' m') + ' away →', 20, 24, C.ink, 13, 'left', 700);
  },
  read(st) { const k = this.k(st.p), e = k.err / k.Lr; const where = Math.abs(e) < 0.03 ? 'on the retina' : e < 0 ? 'in front of the retina' : 'behind the retina'; return [k.thick > 0.66 ? 'fat (more curved)' : k.thick > 0.33 ? 'medium' : 'thin', where, Math.abs(e) < 0.03 ? 'yes — sharp' : 'no — blurred', Math.abs(e) < 0.03 ? 'in focus' : e < 0 ? 'short sight: try a concave lens' : 'long sight: try a convex lens']; }
};

/* ---------- 11.5 Pinhole camera ---------- */
SIMS.pinhole = {
  title: 'Pinhole camera', h: 420,
  controls: [{ id: 'u', label: 'Distance to the candle', min: 20, max: 100, step: 5, value: 50, fmt: v => v + ' cm' }, { id: 'L', label: 'Length of the box', min: 10, max: 40, step: 2, value: 20, fmt: v => v + ' cm' }, { id: 'hole', label: 'Size of the hole', min: 0.5, max: 6, step: 0.5, value: 1, fmt: v => v.toFixed(1) + ' mm' }],
  readouts: ['Image height', 'Image is', 'Brightness', 'Sharpness'],
  note: 'Light travels in straight lines, so rays from the top of the candle pass through the hole to the bottom of the screen: the image is upside down. Move the candle closer or use a longer box and the image grows. A bigger hole lets in more light (brighter) but each point becomes a blurry patch.',
  draw(c, W, H, st, C) {
    c.fillStyle = '#0B0F1C'; c.fillRect(0, 0, W, H); const p = st.p, cy = H * 0.52, sc = (W - 80) / 150, hx = 40 + 100 * sc, ox = hx - p.u * sc, sx = hx + p.L * sc, ho = 12, hi = ho * p.L / p.u;
    CV.rrect(c, ox - 6, cy - 4, 12, ho * sc * 0.5 + 4, 2, '#F4F1E8', '#999'); const fy = cy - 10 - Math.sin(st.t * 10) * 1.5; c.fillStyle = '#FFB547'; c.beginPath(); c.ellipse(ox, fy, 6, 12, 0, 0, 7); c.fill();
    const topY = fy - 8, botY = cy + ho * sc * 0.5;
    c.strokeStyle = '#8B95A5'; c.lineWidth = 2; c.strokeRect(hx, cy - 90, sx - hx, 180); c.fillStyle = 'rgba(10,12,20,.9)'; c.fillRect(hx + 1, cy - 89, sx - hx - 2, 178);
    const hs = p.hole * 1.4; CV.line(c, hx, cy - 90, hx, cy - hs, '#8B95A5', 5); CV.line(c, hx, cy + hs, hx, cy + 90, '#8B95A5', 5); CV.rrect(c, sx - 3, cy - 90, 6, 180, 1, '#E6DCC8');
    const iy = y => cy + (cy - y) * p.L / p.u; [[topY, '#FFB547'], [botY, '#F4F1E8']].forEach(([y, col]) => { CV.line(c, ox, y, hx, cy, hexA(col, .7), 1.5); CV.line(c, hx, cy, sx, iy(y), hexA(col, .7), 1.5); });
    const bright = Math.min(1, (p.hole / 3) ** 2 + 0.45), blur = p.hole * 1.8;
    for (let k = -2; k <= 2; k++) { const off = k * blur / 2; c.globalAlpha = bright / 3; c.fillStyle = '#FFB547'; c.beginPath(); c.ellipse(sx - 8, iy(fy) + off, 3, Math.max(3, 12 * p.L / p.u), 0, 0, 7); c.fill(); c.fillStyle = '#F4F1E8'; c.fillRect(sx - 11, iy(cy - 4) + off, 6, Math.max(2, iy(botY) - iy(cy - 4))); }
    c.globalAlpha = 1; CV.text(c, 'screen', sx, cy + 104, '#AAB', 12, 'center'); CV.text(c, 'pinhole', hx, cy + 104, '#AAB', 12, 'center');
  },
  read(st) { const p = st.p, hi = 6 * p.L / p.u; return [(hi).toFixed(1) + ' cm (candle 6 cm tall)', 'upside down (inverted) and real', p.hole < 1 ? 'dim' : p.hole < 3 ? 'medium' : 'bright', p.hole < 1.2 ? 'sharp' : p.hole < 3 ? 'a bit blurry' : 'very blurry']; }
};
