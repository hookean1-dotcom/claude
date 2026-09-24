/* ==========================================================
   Simulation framework + Unit 1 & 2 simulations
   ========================================================== */
const SIMS = {};
let simTheme = null;
function refreshSimTheme() { simTheme = themeColors(); }

/* ---- canvas helpers ---- */
const CV = {
  line(c, x1, y1, x2, y2, col, w = 1.5, dash) { c.strokeStyle = col; c.lineWidth = w; c.setLineDash(dash || []); c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke(); c.setLineDash([]); },
  arrow(c, x1, y1, x2, y2, col, w = 2, hs = 9) {
    const L = Math.hypot(x2 - x1, y2 - y1); if (L < 1) return; const a = Math.atan2(y2 - y1, x2 - x1);
    CV.line(c, x1, y1, x2 - Math.cos(a) * hs * .6, y2 - Math.sin(a) * hs * .6, col, w);
    c.fillStyle = col; c.beginPath(); c.moveTo(x2, y2); c.lineTo(x2 - hs * Math.cos(a - .42), y2 - hs * Math.sin(a - .42)); c.lineTo(x2 - hs * Math.cos(a + .42), y2 - hs * Math.sin(a + .42)); c.closePath(); c.fill();
  },
  text(c, s, x, y, col, size = 12, align = 'left', weight = 500, font = 'IBM Plex Sans, system-ui, sans-serif') { c.fillStyle = col; c.font = `${weight} ${size}px ${font}`; c.textAlign = align; c.textBaseline = 'middle'; c.fillText(s, x, y); },
  mono(c, s, x, y, col, size = 12, align = 'left') { CV.text(c, s, x, y, col, size, align, 500, 'IBM Plex Mono, ui-monospace, monospace'); },
  circle(c, x, y, r, fill, stroke, w = 1.5) { c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); if (fill) { c.fillStyle = fill; c.fill(); } if (stroke) { c.strokeStyle = stroke; c.lineWidth = w; c.stroke(); } },
  rrect(c, x, y, w, h, r, fill, stroke, lw = 1.5) { c.beginPath(); c.roundRect ? c.roundRect(x, y, w, h, r) : c.rect(x, y, w, h); if (fill) { c.fillStyle = fill; c.fill(); } if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw; c.stroke(); } },
  grid(c, w, h, C, step = 24) { c.strokeStyle = C.grid; c.lineWidth = 1; c.beginPath(); for (let x = 0; x <= w; x += step) { c.moveTo(x + .5, 0); c.lineTo(x + .5, h); } for (let y = 0; y <= h; y += step) { c.moveTo(0, y + .5); c.lineTo(w, y + .5); } c.stroke(); },
  /* mini plot: box {x,y,w,h}, ranges, series [{pts|f, col, w, dash}] */
  plot(c, C, b, o) {
    const { x, y, w, h } = b, [x0, x1] = o.xr, [y0, y1] = o.yr;
    const X = v => x + (v - x0) / (x1 - x0) * w, Y = v => y + h - (v - y0) / (y1 - y0) * h;
    CV.rrect(c, x - 8, y - 8, w + 16, h + 26, 8, C.surface, C.line, 1);
    c.save(); c.beginPath(); c.rect(x, y - 2, w, h + 4); c.clip();
    (o.fills || []).forEach(f => { c.fillStyle = f.col; c.beginPath(); c.moveTo(X(f.pts[0][0]), Y(0)); f.pts.forEach(p => c.lineTo(X(p[0]), Y(p[1]))); c.lineTo(X(f.pts[f.pts.length - 1][0]), Y(0)); c.fill(); });
    (o.series || []).forEach(s => {
      c.strokeStyle = s.col; c.lineWidth = s.w || 2; c.setLineDash(s.dash || []); c.beginPath(); let pen = false;
      if (s.f) { for (let i = 0; i <= 200; i++) { const xv = x0 + (x1 - x0) * i / 200, yv = s.f(xv); if (!isFinite(yv)) { pen = false; continue; } pen ? c.lineTo(X(xv), Y(yv)) : c.moveTo(X(xv), Y(yv)); pen = true; } }
      else s.pts.forEach((p, i) => i ? c.lineTo(X(p[0]), Y(p[1])) : c.moveTo(X(p[0]), Y(p[1])));
      c.stroke(); c.setLineDash([]);
    });
    (o.dots || []).forEach(d => CV.circle(c, X(d[0]), Y(d[1]), d[3] || 4.5, d[2] || C.accent));
    c.restore();
    const ay = (y0 < 0 && y1 > 0) ? Y(0) : y + h;
    CV.line(c, x, ay, x + w, ay, C.ink, 1.2); CV.line(c, x, y, x, y + h, C.ink, 1.2);
    if (o.xl) CV.text(c, o.xl, x + w, y + h + 10, C.muted, 10.5, 'right');
    if (o.yl) CV.text(c, o.yl, x + 4, y + 4, C.muted, 10.5, 'left');
    return { X, Y };
  }
};
function hexA(col, a) { // accepts #rrggbb or rgb(...) → rgba
  if (!col) return `rgba(0,0,0,${a})`;
  if (col.startsWith('#')) { const n = parseInt(col.slice(1).length === 3 ? col.slice(1).split('').map(x => x + x).join('') : col.slice(1), 16); return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a})`; }
  return col.replace('rgb(', 'rgba(').replace(')', `,${a})`);
}

/* ---- mount ---- */
function mountSim(host, key) {
  const def = SIMS[key]; if (!def) { host.innerHTML = '<div class="empty">Simulation unavailable.</div>'; return () => { }; }
  refreshSimTheme();
  const st = { t: 0, run: def.autoplay !== false, p: {}, key };
  (def.controls || []).forEach(c => { if (c.id) st.p[c.id] = c.value; });
  const ctl = (def.controls || []).map(c => {
    if (c.type === 'seg') return `<div class="ctl"><label>${c.label}</label><div class="seg" data-id="${c.id}">${c.options.map(o => `<button type="button" data-v="${esc(o[0])}" class="${o[0] == c.value ? 'on' : ''}">${o[1]}</button>`).join('')}</div></div>`;
    if (c.type === 'button') return `<button type="button" class="btn sm" data-act="${c.act}">${c.label}</button>`;
    return `<div class="ctl"><label for="sc-${key}-${c.id}">${c.label}<output>${c.fmt ? c.fmt(c.value) : c.value}</output></label><input id="sc-${key}-${c.id}" type="range" min="${c.min}" max="${c.max}" step="${c.step}" value="${c.value}" data-id="${c.id}"></div>`;
  }).join('');
  const btnRow = (def.controls || []).filter(c => c.type === 'button').length;
  host.innerHTML = `<div class="sim"><div class="sim-stage" style="height:${(def.hNarrow && innerWidth < 600 ? def.hNarrow : def.h) || 440}px"><canvas aria-label="${esc(def.title)} simulation"></canvas></div>
    <div class="sim-ctl"><div class="row" style="justify-content:space-between"><div class="sim-title">${def.title}</div>
    <div class="row" style="gap:6px">${def.noPlay ? '' : `<button type="button" class="icon-btn" data-act="__play" title="Play / pause" aria-label="Play or pause">${st.run ? ICON.pause : ICON.play}</button>`}<button type="button" class="icon-btn" data-act="__reset" title="Reset" aria-label="Reset">${ICON.reset}</button></div></div>
    ${ctl.replace(/<button type="button" class="btn sm"[\s\S]*?<\/button>/g, '')}
    ${btnRow ? `<div class="row" style="gap:8px">${(def.controls || []).filter(c => c.type === 'button').map(c => `<button type="button" class="btn sm" data-act="${c.act}">${c.label}</button>`).join('')}</div>` : ''}
    <div class="readouts">${(def.readouts || []).map((r, i) => `<div class="ro"><span>${r}</span><b data-ro="${i}">—</b></div>`).join('')}</div>
    ${def.note ? `<div class="sim-note">${rich(def.note)}</div>` : ''}</div></div>`;
  const cv = $('canvas', host), stage = $('.sim-stage', host), c = cv.getContext('2d');
  let W = 0, H = 0;
  const size = () => { const r = stage.getBoundingClientRect(), dpr = Math.min(2, devicePixelRatio || 1); W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr; c.setTransform(dpr, 0, 0, dpr, 0, 0); st.W = W; st.H = H; def.resize && def.resize(st); };
  const ro = new ResizeObserver(size); ro.observe(stage); size();
  const setFill = inp => inp.style.setProperty('--p', ((inp.value - inp.min) / (inp.max - inp.min) * 100) + '%');
  $$('input[type=range]', host).forEach(inp => { setFill(inp); inp.addEventListener('input', () => { const id = inp.dataset.id, cdef = def.controls.find(x => x.id === id); st.p[id] = +inp.value; inp.previousElementSibling.querySelector('output').innerHTML = cdef.fmt ? cdef.fmt(+inp.value) : inp.value; setFill(inp); def.change && def.change(st, id); }); });
  $$('.seg', host).forEach(sg => sg.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; $$('button', sg).forEach(x => x.classList.toggle('on', x === b)); const v = b.dataset.v; st.p[sg.dataset.id] = isNaN(+v) ? v : +v; def.change && def.change(st, sg.dataset.id); }));
  host.addEventListener('click', e => { const b = e.target.closest('[data-act]'); if (!b) return; const a = b.dataset.act;
    if (a === '__play') { st.run = !st.run; b.innerHTML = st.run ? ICON.pause : ICON.play; }
    else if (a === '__reset') { st.t = 0; def.init && def.init(st); }
    else def.action && def.action(st, a);
    sfx.tick();
  });
  const pos = e => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  if (def.pointer) {
    let down = false;
    cv.addEventListener('pointerdown', e => { down = true; cv.setPointerCapture(e.pointerId); def.pointer('down', ...pos(e), st); });
    cv.addEventListener('pointermove', e => def.pointer(down ? 'drag' : 'move', ...pos(e), st));
    cv.addEventListener('pointerup', e => { down = false; def.pointer('up', ...pos(e), st); });
    cv.addEventListener('pointerleave', e => def.pointer('leave', ...pos(e), st));
  }
  def.init && def.init(st);
  const ros = $$('[data-ro]', host);
  let raf, last = performance.now(), frame = 0, alive = true;
  const loop = now => {
    if (!alive) return;
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    if (st.run && def.step) { const sub = def.substeps || 1; for (let i = 0; i < sub; i++) def.step(st, dt / sub); st.t += dt; }
    c.clearRect(0, 0, W, H); c.fillStyle = simTheme.bg; c.fillRect(0, 0, W, H);
    def.draw(c, W, H, st, simTheme);
    if (def.read && frame++ % 6 === 0) def.read(st).forEach((v, i) => ros[i] && (ros[i].innerHTML = v));
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);
  return () => { alive = false; cancelAnimationFrame(raf); ro.disconnect(); };
}

/* ==========================================================
   1.1 Moments
   ========================================================== */
SIMS.moments = {
  title: 'Balance the beam', h: 400,
  controls: [
    { id: 'm1', label: 'Left weight', min: 1, max: 20, step: 1, value: 6, fmt: v => v + ' N' },
    { id: 'd1', label: 'Left distance', min: 0.1, max: 1.0, step: 0.05, value: 0.6, fmt: v => v.toFixed(2) + ' m' },
    { id: 'm2', label: 'Right weight', min: 1, max: 20, step: 1, value: 9, fmt: v => v + ' N' },
    { id: 'd2', label: 'Right distance', min: 0.1, max: 1.0, step: 0.05, value: 0.3, fmt: v => v.toFixed(2) + ' m' },
    { id: 'bw', label: 'Beam weight (acts at centre)', min: 0, max: 10, step: 1, value: 0, fmt: v => v + ' N' },
    { id: 'piv', label: 'Pivot offset from centre', min: -0.4, max: 0.4, step: 0.05, value: 0, fmt: v => v.toFixed(2) + ' m' }
  ],
  readouts: ['Anticlockwise moment', 'Clockwise moment', 'Resultant moment', 'Pivot reaction'],
  note: 'Make the resultant moment zero. With a heavy beam and an off-centre pivot, remember the beam’s weight acts at its centre of gravity.',
  init(st) { st.ang = 0; st.w = 0; },
  mom(st) { const p = st.p, bw = p.bw * (0 - p.piv); const acw = p.m1 * p.d1 + (bw < 0 ? -bw : 0), cw = p.m2 * p.d2 + (bw > 0 ? bw : 0); return [acw, cw]; },
  step(st, dt) { const [a, c] = this.mom(st); const net = c - a; const target = clamp(net * 0.08, -0.35, 0.35); st.w += (target - st.ang) * 20 * dt; st.w *= 0.9; st.ang += st.w * dt * 6; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, cx = W / 2, cy = H * 0.52, L = Math.min(W * 0.42, 330);
    const [a, cw] = this.mom(st), bal = Math.abs(a - cw) < 1e-6;
    // pivot
    const px = cx; c.fillStyle = C.muted; c.beginPath(); c.moveTo(px, cy + 4); c.lineTo(px - 22, cy + 44); c.lineTo(px + 22, cy + 44); c.closePath(); c.fill();
    CV.line(c, px - 60, cy + 44, px + 60, cy + 44, C.ink, 2);
    c.save(); c.translate(px, cy); c.rotate(st.ang);
    const off = -p.piv * L; // beam centre relative to pivot (m → px scale L per metre... beam is 2 m long)
    const sc = L; // px per metre (beam half-length 1 m)
    CV.rrect(c, off - sc, -6, 2 * sc, 12, 4, bal ? C.good : C.ink);
    for (let m = -1; m <= 1.001; m += 0.1) CV.line(c, off + m * sc, -6, off + m * sc, Math.abs(m % 0.5) < 0.01 ? 4 : 0, C.bg, 1);
    const hang = (x, w, col, lab) => { CV.line(c, x, 6, x, 40, C.muted, 1.2); const s = 16 + w * 1.6; CV.rrect(c, x - s / 2, 40, s, s, 4, col); CV.mono(c, lab, x, 40 + s + 12, C.ink, 11, 'center'); };
    hang(-p.d1 * sc, p.m1, C.u1, p.m1 + ' N'); hang(p.d2 * sc, p.m2, C.u4, p.m2 + ' N');
    if (p.bw > 0) { CV.arrow(c, off, 6, off, 46, C.u3, 2); CV.mono(c, 'W = ' + p.bw + ' N', off, 58, C.u3, 11, 'center'); }
    c.restore();
    CV.mono(c, bal ? 'BALANCED ✓' : (cw > a ? 'Tips clockwise' : 'Tips anticlockwise'), cx, 30, bal ? C.good : C.muted, 14, 'center');
  },
  read(st) { const [a, c] = this.mom(st); const p = st.p; return [a.toFixed(2) + ' N m', c.toFixed(2) + ' N m', (c - a).toFixed(2) + ' N m', (p.m1 + p.m2 + p.bw) + ' N']; }
};

/* ==========================================================
   1.2 Projectile
   ========================================================== */
SIMS.projectile = {
  title: 'Projectile launcher', h: 460,
  controls: [
    { id: 'u', label: 'Launch speed', min: 5, max: 40, step: 1, value: 20, fmt: v => v + ' m s⁻¹' },
    { id: 'th', label: 'Launch angle', min: 0, max: 85, step: 1, value: 45, fmt: v => v + '°' },
    { id: 'h0', label: 'Launch height', min: 0, max: 40, step: 1, value: 0, fmt: v => v + ' m' },
    { id: 'g', type: 'seg', label: 'Gravity', value: 9.81, options: [[1.62, 'Moon'], [3.71, 'Mars'], [9.81, 'Earth'], [24.8, 'Jupiter']] },
    { type: 'button', act: 'fire', label: 'Launch' }, { type: 'button', act: 'clear', label: 'Clear trails' }
  ],
  readouts: ['Time of flight', 'Range', 'Max height', 'Velocity now'],
  note: 'Horizontal velocity (blue arrow) never changes; vertical velocity (green) changes by g every second. Try 30° and 60° — same range!',
  init(st) { st.trails = []; st.fly = null; this.fire(st); },
  calc(p) { const ux = p.u * Math.cos(p.th * deg), uy = p.u * Math.sin(p.th * deg), T = (uy + Math.sqrt(uy * uy + 2 * p.g * p.h0)) / p.g; return { ux, uy, T, R: ux * T, Hm: p.h0 + uy * uy / (2 * p.g) }; },
  fire(st) { st.fly = { t: 0, p: { ...st.p }, pts: [] }; },
  action(st, a) { if (a === 'fire') { if (st.fly && st.fly.pts.length) st.trails.push(st.fly); if (st.trails.length > 5) st.trails.shift(); this.fire(st); } else { st.trails = []; } },
  change(st) { if (st.fly && st.fly.done) { } },
  step(st, dt) { const f = st.fly; if (!f || f.done) return; const k = this.calc(f.p); f.t += dt * 1.0; if (f.t >= k.T) { f.t = k.T; f.done = true; } const x = k.ux * f.t, y = f.p.h0 + k.uy * f.t - .5 * f.p.g * f.t * f.t; f.pts.push([x, Math.max(0, y)]); },
  draw(c, W, H, st, C) {
    const k = this.calc(st.p); let R = k.R, Hm = k.Hm; [...st.trails, st.fly].forEach(f => { if (f) { const kk = this.calc(f.p); R = Math.max(R, kk.R); Hm = Math.max(Hm, kk.Hm); } });
    const m = 44, sc = Math.min((W - 2 * m) / Math.max(R, 5), (H - 2 * m - 20) / Math.max(Hm, 3));
    const X = x => m + x * sc, Y = y => H - m - y * sc;
    CV.grid(c, W, H, C);
    // ground + cliff
    c.fillStyle = hexA(C.u3, .12); c.fillRect(0, Y(0), W, H - Y(0)); CV.line(c, 0, Y(0), W, Y(0), C.ink, 1.5);
    if (st.p.h0 > 0) CV.rrect(c, X(0) - 30, Y(st.p.h0), 30, Y(0) - Y(st.p.h0), 0, hexA(C.muted, .25));
    // scale ticks
    const stepM = [1, 2, 5, 10, 20, 50].find(s => s * sc > 50) || 100;
    for (let x = 0; X(x) < W; x += stepM) { CV.line(c, X(x), Y(0), X(x), Y(0) + 5, C.ink, 1); CV.mono(c, x + ' m', X(x), Y(0) + 16, C.muted, 10, 'center'); }
    st.trails.forEach(f => { c.strokeStyle = hexA(C.muted, .6); c.lineWidth = 1.5; c.setLineDash([4, 4]); c.beginPath(); f.pts.forEach((p, i) => i ? c.lineTo(X(p[0]), Y(p[1])) : c.moveTo(X(p[0]), Y(p[1]))); c.stroke(); c.setLineDash([]); });
    // predicted path
    c.strokeStyle = hexA(C.u1, .25); c.lineWidth = 1.5; c.setLineDash([2, 5]); c.beginPath(); for (let i = 0; i <= 80; i++) { const t = k.T * i / 80, x = k.ux * t, y = st.p.h0 + k.uy * t - .5 * st.p.g * t * t; i ? c.lineTo(X(x), Y(y)) : c.moveTo(X(x), Y(y)); } c.stroke(); c.setLineDash([]);
    const f = st.fly; if (f) {
      c.strokeStyle = C.u1; c.lineWidth = 2.5; c.beginPath(); f.pts.forEach((p, i) => i ? c.lineTo(X(p[0]), Y(p[1])) : c.moveTo(X(p[0]), Y(p[1]))); c.stroke();
      const kk = this.calc(f.p); for (let t = 0; t <= f.t; t += 0.5) { const x = kk.ux * t, y = f.p.h0 + kk.uy * t - .5 * f.p.g * t * t; CV.circle(c, X(x), Y(y), 2.5, C.u1); }
      const last = f.pts[f.pts.length - 1] || [0, f.p.h0]; const vy = kk.uy - f.p.g * f.t, vs = 2.2;
      CV.arrow(c, X(last[0]), Y(last[1]), X(last[0]) + kk.ux * vs, Y(last[1]), C.u4, 2.4);
      CV.arrow(c, X(last[0]), Y(last[1]), X(last[0]), Y(last[1]) - vy * vs, C.u3, 2.4);
      CV.circle(c, X(last[0]), Y(last[1]), 7, C.ink);
    }
    // launcher
    c.save(); c.translate(X(0), Y(st.p.h0)); c.rotate(-st.p.th * deg); CV.rrect(c, -4, -5, 34, 10, 4, C.ink); c.restore();
    CV.mono(c, 'dots every 0.5 s', W - 12, 18, C.muted, 10.5, 'right');
  },
  read(st) { const f = st.fly, k = this.calc(f ? f.p : st.p); const vy = f ? k.uy - f.p.g * f.t : 0; return [k.T.toFixed(2) + ' s', k.R.toFixed(1) + ' m', k.Hm.toFixed(1) + ' m', f ? Math.hypot(k.ux, vy).toFixed(1) + ' m s⁻¹' : '—']; }
};

/* ==========================================================
   1.3 Collisions
   ========================================================== */
SIMS.collisions = {
  title: 'Air-track collisions', h: 420,
  controls: [
    { id: 'm1', label: 'Mass A', min: 0.5, max: 5, step: 0.5, value: 2, fmt: v => v.toFixed(1) + ' kg' },
    { id: 'u1', label: 'Velocity A', min: -3, max: 6, step: 0.5, value: 3, fmt: v => v.toFixed(1) + ' m s⁻¹' },
    { id: 'm2', label: 'Mass B', min: 0.5, max: 5, step: 0.5, value: 1, fmt: v => v.toFixed(1) + ' kg' },
    { id: 'u2', label: 'Velocity B', min: -6, max: 3, step: 0.5, value: 0, fmt: v => v.toFixed(1) + ' m s⁻¹' },
    { id: 'e', label: 'Coefficient of restitution e', min: 0, max: 1, step: 0.05, value: 1, fmt: v => v.toFixed(2) + (v === 1 ? ' (elastic)' : v === 0 ? ' (stick)' : '') },
    { type: 'button', act: 'go', label: 'Run collision' }
  ],
  readouts: ['Total momentum before', 'Total momentum after', 'Total KE before', 'Total KE after'],
  note: 'Momentum is always conserved. Kinetic energy is only conserved when e = 1 (elastic).',
  init(st) { const p = st.p; st.x1 = 1.5; st.x2 = 5; st.v1 = p.u1; st.v2 = p.u2; st.hit = false; st.run = true; },
  change(st) { this.init(st); },
  action(st, a) { if (a === 'go') this.init(st); },
  after(p) { const P = p.m1 * p.u1 + p.m2 * p.u2, M = p.m1 + p.m2; return [(P - p.m2 * p.e * (p.u1 - p.u2)) / M, (P + p.m1 * p.e * (p.u1 - p.u2)) / M]; },
  step(st, dt) {
    const p = st.p, w1 = 0.25 + p.m1 * 0.06, w2 = 0.25 + p.m2 * 0.06;
    st.x1 += st.v1 * dt * 0.6; st.x2 += st.v2 * dt * 0.6;
    if (!st.hit && st.x2 - st.x1 <= (w1 + w2) / 2 && st.v1 > st.v2) { const [a, b] = this.after(p); st.v1 = a; st.v2 = b; st.hit = true; sfx.tick(); }
    if (st.x1 < -1 || st.x2 > 9 || st.x1 > 9 || st.x2 < -1) { st.run = true; }
  },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p; const sc = W / 8, ty = H * 0.34;
    CV.rrect(c, 10, ty + 30, W - 20, 10, 5, hexA(C.muted, .3));
    const cart = (x, m, col, lab, v) => { const w = (0.25 + m * 0.06) * sc * 1.6; const X = x * sc; CV.rrect(c, X - w / 2, ty - 10, w, 40, 8, col); CV.mono(c, lab, X, ty + 10, '#fff', 13, 'center'); CV.arrow(c, X, ty - 26, X + v * 22, ty - 26, C.ink, 2); CV.mono(c, v.toFixed(2), X, ty - 42, C.ink, 11, 'center'); };
    cart(st.x1, p.m1, C.u1, 'A', st.v1); cart(st.x2, p.m2, C.u4, 'B', st.v2);
    // bars
    const [a, b] = this.after(p), Pb = p.m1 * p.u1 + p.m2 * p.u2, Pa = p.m1 * a + p.m2 * b, Kb = .5 * p.m1 * p.u1 ** 2 + .5 * p.m2 * p.u2 ** 2, Ka = .5 * p.m1 * a * a + .5 * p.m2 * b * b;
    const by = H * 0.62, bw = Math.min(70, W / 10), x0 = W * 0.12, maxK = Math.max(Kb, 1), maxP = Math.max(Math.abs(Pb), 1);
    const bar = (x, val, max, col, lab) => { const hh = (H * 0.28) * val / max; CV.rrect(c, x, by + H * 0.3 - Math.max(0, hh), bw, Math.abs(hh), 4, col); CV.text(c, lab, x + bw / 2, by + H * 0.3 + 12, C.muted, 11, 'center'); CV.mono(c, val.toFixed(2), x + bw / 2, by + H * 0.3 - Math.max(0, hh) - 10, C.ink, 11, 'center'); };
    CV.text(c, 'Momentum (kg m s⁻¹)', x0, by - 4, C.ink, 12, 'left', 600);
    bar(x0, Pb, maxP, C.u2, 'before'); bar(x0 + bw + 12, Pa, maxP, C.u2, 'after');
    const x1 = W * 0.55; CV.text(c, 'Kinetic energy (J)', x1, by - 4, C.ink, 12, 'left', 600);
    bar(x1, Kb, maxK, C.u5, 'before'); bar(x1 + bw + 12, Ka, maxK, C.u5, 'after');
    if (Kb - Ka > 0.005) { const hh = H * 0.28 * (Kb - Ka) / maxK; CV.rrect(c, x1 + 2 * (bw + 12), by + H * 0.3 - hh, bw, hh, 4, hexA(C.bad, .7)); CV.text(c, 'lost', x1 + 2 * (bw + 12) + bw / 2, by + H * 0.3 + 12, C.muted, 11, 'center'); CV.mono(c, (Kb - Ka).toFixed(2), x1 + 2 * (bw + 12) + bw / 2, by + H * 0.3 - hh - 10, C.bad, 11, 'center'); }
  },
  read(st) { const p = st.p, [a, b] = this.after(p); return [(p.m1 * p.u1 + p.m2 * p.u2).toFixed(2) + ' kg m s⁻¹', (p.m1 * a + p.m2 * b).toFixed(2) + ' kg m s⁻¹', (.5 * p.m1 * p.u1 ** 2 + .5 * p.m2 * p.u2 ** 2).toFixed(2) + ' J', (.5 * p.m1 * a * a + .5 * p.m2 * b * b).toFixed(2) + ' J']; }
};

/* ==========================================================
   1.4 Energy pendulum
   ========================================================== */
SIMS.energy = {
  title: 'Energy in a pendulum', h: 440,
  controls: [
    { id: 'L', label: 'String length', min: 0.5, max: 3, step: 0.1, value: 2, fmt: v => v.toFixed(1) + ' m' },
    { id: 'a0', label: 'Release angle', min: 5, max: 80, step: 1, value: 50, fmt: v => v + '°' },
    { id: 'm', label: 'Mass', min: 0.1, max: 2, step: 0.1, value: 0.5, fmt: v => v.toFixed(1) + ' kg' },
    { id: 'b', label: 'Air resistance', min: 0, max: 0.6, step: 0.02, value: 0.05, fmt: v => v === 0 ? 'none' : v.toFixed(2) }
  ],
  readouts: ['Speed', 'Height above lowest point', 'Kinetic energy', 'Potential energy'],
  note: 'Total energy = E<sub>k</sub> + E<sub>p</sub> + energy dissipated. With no air resistance the pendulum returns to the same height forever.',
  init(st) { st.th = st.p.a0 * deg; st.w = 0; st.lost = 0; st.trail = []; },
  change(st, id) { if (id === 'a0' || id === 'L' || id === 'm') this.init(st); },
  substeps: 8,
  step(st, dt) { const p = st.p; const acc = -g / p.L * Math.sin(st.th) - p.b * st.w; const before = .5 * p.m * (p.L * st.w) ** 2 + p.m * g * p.L * (1 - Math.cos(st.th)); st.w += acc * dt; st.th += st.w * dt; const after = .5 * p.m * (p.L * st.w) ** 2 + p.m * g * p.L * (1 - Math.cos(st.th)); st.lost += Math.max(0, before - after); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, px = W * 0.36, py = 40, sc = (H - 120) / 3.2, Lp = p.L * sc;
    const bx = px + Lp * Math.sin(st.th), by = py + Lp * Math.cos(st.th);
    CV.line(c, px - 60, py, px + 60, py, C.ink, 3);
    CV.line(c, px, py + Lp, px + 120, py + Lp, C.muted, 1, [4, 4]); CV.mono(c, 'h = 0', px + 124, py + Lp, C.muted, 10);
    c.strokeStyle = hexA(C.muted, .5); c.setLineDash([3, 4]); c.beginPath(); c.arc(px, py, Lp, Math.PI / 2 - p.a0 * deg, Math.PI / 2 + p.a0 * deg); c.stroke(); c.setLineDash([]);
    CV.line(c, px, py, bx, by, C.ink, 1.5); CV.circle(c, bx, by, 10 + p.m * 4, C.u1);
    const v = p.L * st.w; CV.arrow(c, bx, by, bx + v * Math.cos(st.th) * 12, by - v * Math.sin(st.th) * 12, C.u4, 2);
    // bars
    const KE = .5 * p.m * v * v, PE = p.m * g * p.L * (1 - Math.cos(st.th)), tot0 = p.m * g * p.L * (1 - Math.cos(p.a0 * deg));
    const bx0 = W * 0.68, bh = H - 110, bw = Math.min(40, W * 0.06);
    [[KE, C.u4, 'Eₖ'], [PE, C.u3, 'Eₚ'], [st.lost, C.bad, 'lost'], [KE + PE + st.lost, C.ink, 'total']].forEach(([val, col, lab], i) => {
      const hh = bh * val / Math.max(tot0, 1e-6) * 0.9, x = bx0 + i * (bw + 10);
      CV.rrect(c, x, 40 + bh - hh, bw, hh, 4, col); CV.text(c, lab, x + bw / 2, 40 + bh + 14, C.muted, 11, 'center');
    });
    CV.line(c, bx0 - 6, 40 + bh, bx0 + 4 * (bw + 10), 40 + bh, C.ink, 1);
  },
  read(st) { const p = st.p, v = Math.abs(p.L * st.w), h = p.L * (1 - Math.cos(st.th)); return [v.toFixed(2) + ' m s⁻¹', h.toFixed(3) + ' m', (.5 * p.m * v * v).toFixed(2) + ' J', (p.m * g * h).toFixed(2) + ' J']; }
};

/* ==========================================================
   1.5 Stress–strain tester
   ========================================================== */
SIMS.stress = {
  title: 'Tensile tester', h: 460, autoplay: true,
  controls: [
    { id: 'mat', type: 'seg', label: 'Material', value: 'cu', options: [['cu', 'Copper'], ['glass', 'Glass'], ['rubber', 'Rubber']] },
    { id: 'e', label: 'Applied strain', min: 0, max: 40, step: 0.5, value: 0, fmt: v => v.toFixed(1) + '%' }
  ],
  readouts: ['Strain', 'Stress', 'State', 'Permanent strain'],
  note: 'Copper: strain it past the elastic limit, then reduce the strain — it unloads along a line parallel to the elastic region, leaving a permanent extension. Rubber: load then unload to see the hysteresis loop.',
  M: {
    cu: { max: 40, smax: 320, E: 12000, y: 0.02, curve: e => e <= 1.8 ? e * 120 : Math.min(300, 216 + 84 * (1 - Math.exp(-(e - 1.8) / 8))) - (e > 30 ? (e - 30) * 12 : 0), brk: 36, unit: 'MPa' },
    glass: { max: 40, smax: 500, curve: e => e * 150, brk: 3, unit: 'MPa' },
    rubber: { max: 100, smax: 8, load: e => 2.2 * (e / 20) - 0.36 * (e / 20) ** 2 + 0.025 * (e / 20) ** 3 + (e > 80 ? (e - 80) * .05 : 0), brk: 999, unit: 'MPa' }
  },
  init(st) { st.maxE = 0; st.broken = false; st.prev = 0; st.path = []; st.dir = 1; const inp = document.getElementById('sc-stress-e'); if (inp) { inp.value = 0; inp.dispatchEvent(new Event('input')); } },
  change(st, id) {
    if (id === 'mat') { const inp = document.getElementById('sc-stress-e'); if (inp) { inp.max = this.M[st.p.mat].max; } this.init(st); return; }
  },
  sig(st) {
    const m = this.M[st.p.mat], e = st.p.e;
    if (st.broken) return 0;
    if (st.p.mat === 'rubber') { if (e >= st.maxE - 1e-9) return m.load(e); return m.load(st.maxE) * Math.pow(e / st.maxE, 2.6); }
    if (st.p.mat === 'glass') return m.curve(e);
    // copper with permanent set
    if (e >= st.maxE) return m.curve(e);
    const sm = m.curve(st.maxE), perm = Math.max(0, st.maxE - sm / 120);
    return Math.max(0, (e - perm) * 120);
  },
  step(st) {
    const m = this.M[st.p.mat], e = st.p.e;
    if (e !== st.prev) { st.dir = e > st.prev ? 1 : -1; st.prev = e; }
    if (e > m.brk && !st.broken) { st.broken = true; sfx.bad(); }
    if (e > st.maxE) st.maxE = e;
    const s = this.sig(st), last = st.path[st.path.length - 1];
    if (!last || Math.abs(last[0] - e) > 0.05) { st.path.push([e, s]); if (st.path.length > 800) st.path.shift(); }
  },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const m = this.M[st.p.mat], e = st.p.e, s = this.sig(st);
    // specimen
    const sx = 50, sy0 = 40, len = H - 150, ext = len * (1 + Math.min(e, m.max) / (st.p.mat === 'rubber' ? 180 : 120)) - len;
    CV.rrect(c, sx - 30, sy0 - 20, 60, 20, 4, C.muted);
    const neck = st.p.mat === 'cu' && e > 28 ? Math.min(1, (e - 28) / 8) : 0, wid = st.p.mat === 'rubber' ? 14 - e * 0.06 : 12;
    if (!st.broken) { c.fillStyle = st.p.mat === 'glass' ? hexA(C.u4, .5) : st.p.mat === 'rubber' ? C.u3 : '#B87333'; c.beginPath(); const L2 = len * 0.5 + ext; c.moveTo(sx - wid / 2, sy0); c.lineTo(sx + wid / 2, sy0); c.quadraticCurveTo(sx + wid / 2 - neck * 5, sy0 + L2 * .5, sx + wid / 2, sy0 + L2); c.lineTo(sx - wid / 2, sy0 + L2); c.quadraticCurveTo(sx - wid / 2 + neck * 5, sy0 + L2 * .5, sx - wid / 2, sy0); c.fill(); CV.rrect(c, sx - 30, sy0 + len * .5 + ext, 60, 20, 4, C.muted); CV.arrow(c, sx, sy0 + len * .5 + ext + 20, sx, sy0 + len * .5 + ext + 60, C.u1, 2.4); }
    else { CV.mono(c, 'FRACTURED', sx, H / 2, C.bad, 12, 'center'); }
    // graph
    const b = { x: 140, y: 30, w: W - 170, h: H - 90 };
    const g2 = CV.plot(c, C, b, { xr: [0, m.max], yr: [0, m.smax], xl: 'strain / % (schematic)', yl: 'stress / ' + m.unit,
      series: st.p.mat === 'rubber' ? [{ f: m.load, col: hexA(C.u1, .25), dash: [4, 4] }] : [{ f: x => x <= m.brk ? m.curve(x) : NaN, col: hexA(C.ink, .2), dash: [4, 4] }] });
    c.strokeStyle = st.p.mat === 'rubber' ? C.u3 : C.u1; c.lineWidth = 2.5; c.beginPath(); st.path.forEach((p, i) => i ? c.lineTo(g2.X(p[0]), g2.Y(p[1])) : c.moveTo(g2.X(p[0]), g2.Y(p[1]))); c.stroke();
    if (!st.broken) CV.circle(c, g2.X(e), g2.Y(s), 6, C.accent);
    if (st.p.mat === 'cu') { CV.mono(c, 'elastic limit', g2.X(1.8) + 8, g2.Y(216) + 14, C.muted, 10); }
  },
  read(st) {
    const m = this.M[st.p.mat], s = this.sig(st), e = st.p.e;
    let state = st.broken ? 'fractured' : 'elastic';
    if (!st.broken && st.p.mat === 'cu' && st.maxE > 1.8) state = e >= st.maxE - 0.01 ? 'plastic (yielding)' : 'unloading (elastic)';
    if (!st.broken && st.p.mat === 'rubber') state = st.dir >= 0 ? 'loading' : 'unloading';
    const perm = st.p.mat === 'cu' && st.maxE > 1.8 ? Math.max(0, st.maxE - m.curve(st.maxE) / 120) : 0;
    return [e.toFixed(1) + '%', s.toFixed(st.p.mat === 'rubber' ? 2 : 0) + ' ' + m.unit, state, perm.toFixed(1) + '%'];
  }
};

/* ==========================================================
   1.6 Black body
   ========================================================== */
SIMS.blackbody = {
  title: 'Black-body spectrum', h: 440, noPlay: true,
  controls: [{ id: 'T', label: 'Surface temperature', min: 2500, max: 25000, step: 100, value: 5800, fmt: v => v + ' K' }, { id: 'cmp', type: 'seg', label: 'Compare with', value: 'sun', options: [['none', 'Nothing'], ['sun', 'Sun (5800 K)']] }],
  readouts: ['λmax (Wien)', 'Power per m² (σT⁴)', 'vs the Sun (same radius)', 'Peak region'],
  note: 'Drag the temperature: the peak shifts to shorter λ (Wien) and the area — total power — grows as T⁴ (Stefan).',
  P(l, T) { const L = l * 1e-9; return 1 / (L ** 5 * (Math.exp(1.4388e-2 / (L * T)) - 1)); },
  col(T) { let r = 0, g2 = 0, b = 0; for (let l = 400; l <= 700; l += 10) { const w = this.P(l, T); const [R, G, B] = nmRGB(l); r += R * w; g2 += G * w; b += B * w; } const m = Math.max(r, g2, b); return `rgb(${Math.round(255 * r / m)},${Math.round(255 * g2 / m)},${Math.round(255 * b / m)})`; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const T = st.p.T, lm = 2.9e-3 / T * 1e9, xr = 2500;
    const ref = Math.max(this.P(2.9e-3 / T * 1e9, T), this.P(2.9e-3 / 5800 * 1e9, 5800) * (st.p.cmp === 'sun' ? 1 : 0));
    const b = { x: 60, y: 30, w: W - 90, h: H - 100 };
    // visible band
    const X = l => b.x + l / xr * b.w;
    for (let l = 400; l < 700; l += 2) { c.fillStyle = nmCSS(l, .22); c.fillRect(X(l), b.y, X(l + 2) - X(l) + 0.5, b.h); }
    const g2 = CV.plot(c, C, b, { xr: [0, xr], yr: [0, 1.08], xl: 'wavelength / nm', yl: 'intensity (relative)',
      fills: [{ col: hexA(C.u2, .15), pts: Array.from({ length: 201 }, (_, i) => { const l = 20 + i * (xr - 20) / 200; return [l, this.P(l, T) / ref]; }) }],
      series: [...(st.p.cmp === 'sun' ? [{ f: l => l < 20 ? NaN : this.P(l, 5800) / ref, col: C.muted, dash: [5, 4], w: 1.6 }] : []), { f: l => l < 20 ? NaN : this.P(l, T) / ref, col: C.u2, w: 2.6 }],
      dots: [[lm, this.P(lm, T) / ref, C.accent]] });
    for (let l = 0; l <= xr; l += 500) CV.mono(c, l, g2.X(l), b.y + b.h + 10, C.muted, 10, 'center');
    CV.line(c, g2.X(lm), g2.Y(0), g2.X(lm), g2.Y(this.P(lm, T) / ref), C.accent, 1.2, [4, 3]);
    // star swatch
    const col = this.col(T), sx = W - 70, sy = 70, r = 26;
    const grd = c.createRadialGradient(sx, sy, 2, sx, sy, r * 2); grd.addColorStop(0, '#fff'); grd.addColorStop(0.35, col); grd.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = grd; c.beginPath(); c.arc(sx, sy, r * 2, 0, Math.PI * 2); c.fill();
    CV.mono(c, 'star colour', sx, sy + 58, C.muted, 10, 'center');
  },
  read(st) { const T = st.p.T, lm = 2.9e-3 / T * 1e9; const reg = lm < 400 ? 'ultraviolet' : lm <= 700 ? 'visible' : 'infrared'; return [lm.toFixed(0) + ' nm', sf(5.67e-8 * T ** 4, 3) + ' W m⁻²', '× ' + ((T / 5800) ** 4).toFixed(2), reg]; }
};

/* ==========================================================
   1.7 Particle Forge (DOM)
   ========================================================== */
SIMS.forge = { dom: true, title: 'Particle Forge' };
function mountForge(host) {
  const Q = { u: [2 / 3, 1 / 3, 'u', 'up'], d: [-1 / 3, 1 / 3, 'd', 'down'], U: [-2 / 3, -1 / 3, 'ū', 'anti-up'], D: [1 / 3, -1 / 3, 'd̄', 'anti-down'] };
  const names = { uud: 'proton p', udd: 'neutron n', uuu: 'Δ⁺⁺ baryon', ddd: 'Δ⁻ baryon', UUD: 'antiproton p̄', UDD: 'antineutron n̄', UUU: 'anti-Δ⁺⁺', DDD: 'anti-Δ⁻', Du: 'π⁺ meson', Ud: 'π⁻ meson', Uu: 'π⁰ meson', Dd: 'π⁰ meson' };
  const chal = [['charge +1, B = 1', (q, b) => q === 1 && b === 1], ['charge 0, B = 0', (q, b) => q === 0 && b === 0 && true], ['charge −1, B = 0', (q, b) => q === -1 && b === 0], ['charge +2', (q, b) => q === 2], ['charge 0, B = +1', (q, b) => q === 0 && b === 1], ['charge −1, B = +1', (q, b) => q === -1 && b === 1], ['charge −1, B = −1', (q, b) => q === -1 && b === -1], ['an antibaryon with charge 0', (q, b) => q === 0 && b === -1]];
  let slot = [], ci = 0, score = 0;
  const key = () => slot.slice().sort().join('');
  const render = () => {
    const q = Math.round(slot.reduce((a, k) => a + Q[k][0], 0) * 3) / 3, b = Math.round(slot.reduce((a, k) => a + Q[k][1], 0) * 3) / 3;
    const nq = slot.filter(k => k === 'u' || k === 'd').length, na = slot.length - nq;
    const valid = (slot.length === 3 && (nq === 3 || na === 3)) || (slot.length === 2 && nq === 1 && na === 1);
    const nm = valid ? (names[key()] || (slot.length === 3 ? (b > 0 ? 'baryon' : 'antibaryon') : 'meson')) : slot.length ? 'not a valid hadron' : 'empty';
    const fr = v => { const n = Math.round(v * 3); if (n % 3 === 0) return (n / 3 > 0 ? '+' : '') + n / 3; return (n > 0 ? '+' : '−') + Math.abs(n) + '/3'; };
    host.innerHTML = `<div class="sim"><div class="sim-stage" style="min-height:380px;padding:22px;display:flex;flex-direction:column;justify-content:center">
      <div class="eyebrow" style="text-align:center">Tap quarks to add them · tap the hadron to clear</div>
      <div class="quark-bin">${Object.entries(Q).map(([k, v]) => `<button class="quark" data-q="${k}" style="border-color:${k.toLowerCase() === 'u' ? 'var(--u1)' : 'var(--u4)'};color:${k.toLowerCase() === 'u' ? 'var(--u1)' : 'var(--u4)'}">${v[2]}<small>${fr(v[0])}</small></button>`).join('')}</div>
      <button class="hadron" data-clear="1" aria-label="Clear hadron">${slot.map(k => `<span class="quark" style="width:56px;height:56px;font-size:21px;border-color:${k.toLowerCase() === 'u' ? 'var(--u1)' : 'var(--u4)'};color:${k.toLowerCase() === 'u' ? 'var(--u1)' : 'var(--u4)'}">${Q[k][2]}</span>`).join('') || '<span class="muted">empty</span>'}</button>
      <div style="text-align:center;margin-top:16px" class="big-prompt" aria-live="polite">${nm}</div></div>
      <div class="sim-ctl"><div class="sim-title">Particle Forge</div>
      <div class="readouts"><div class="ro"><span>Charge</span><b>${slot.length ? fr(q) + ' e' : '—'}</b></div><div class="ro"><span>Baryon number</span><b>${slot.length ? fr(b) : '—'}</b></div><div class="ro"><span>Quarks</span><b>${nq}</b></div><div class="ro"><span>Antiquarks</span><b>${na}</b></div></div>
      <div class="card flat" style="padding:14px"><div class="eyebrow">Challenge ${ci + 1}/${chal.length} · score ${score}</div><p style="margin:8px 0 10px;font-weight:600">Build a valid hadron with ${chal[ci][0]}</p><button class="btn sm primary" data-check="1">Check</button></div>
      <div class="sim-note">Baryons: three quarks (B = +1). Mesons: a quark and an antiquark (B = 0). Only u and d quarks are needed for WJEC.</div></div></div>`;
    $$('[data-q]', host).forEach(b => b.onclick = () => { if (slot.length < 3) { slot.push(b.dataset.q); sfx.flip(); render(); } });
    $('[data-clear]', host).onclick = () => { slot = []; render(); };
    $('[data-check]', host).onclick = () => { if (valid && chal[ci][1](Math.round(q), Math.round(b))) { score++; sfx.good(); toast(`<b>✓</b> ${nm}`); addXP(5); ci = (ci + 1) % chal.length; slot = []; if (ci === 0) burst(); } else { sfx.bad(); toast(valid ? 'Not quite — check the charge and baryon number' : 'That combination is not a valid hadron'); } render(); };
  };
  render();
  return () => { };
}

/* ==========================================================
   2.1 Drift velocity
   ========================================================== */
SIMS.drift = {
  title: 'Electron drift', h: 400,
  controls: [
    { id: 'I', label: 'Current', min: 0, max: 5, step: 0.1, value: 2, fmt: v => v.toFixed(1) + ' A' },
    { id: 'A1', label: 'Area of thick section', min: 1, max: 4, step: 0.5, value: 2, fmt: v => v.toFixed(1) + ' mm²' },
    { id: 'mat', type: 'seg', label: 'Material', value: 'cu', options: [['cu', 'Copper'], ['semi', 'Semiconductor']] }
  ],
  readouts: ['n (carriers m⁻³)', 'Drift v (thick)', 'Drift v (thin, ½ area)', 'Thermal speed (random)'],
  note: 'The thin section has half the area, so electrons drift twice as fast there (I = nAve is the same everywhere in series). Random thermal motion is far faster than the drift!',
  init(st) { st.e = Array.from({ length: 170 }, () => ({ x: Math.random(), y: Math.random(), vx: 0, vy: 0 })); },
  n(st) { return st.p.mat === 'cu' ? 8.5e28 : 1e24; },
  vd(st, A) { return st.p.I / (this.n(st) * A * 1e-6 * 1.6e-19); },
  step(st, dt) {
    const W = st.W, H = st.H; st.e.forEach(e => {
      const inThin = e.x > 0.5; const h = inThin ? 0.5 : 1;
      const vis = st.p.I * (st.p.mat === 'cu' ? 0.03 : 0.09) * (inThin ? 2 : 1);
      e.vx += (Math.random() - .5) * 6 * dt; e.vy += (Math.random() - .5) * 6 * dt; e.vx *= .9; e.vy *= .9;
      e.x -= (vis) * dt * 1.0 - e.vx * dt * .3; e.y += e.vy * dt * .3;
      if (e.x < 0) { e.x += 1; } if (e.x > 1) e.x -= 1;
      const lo = 0.5 - h / 2, hi = 0.5 + h / 2; if (e.y < lo) e.y = lo + (lo - e.y); if (e.y > hi) e.y = hi - (e.y - hi); e.y = clamp(e.y, lo, hi);
    });
  },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const cy = H * 0.45, hh = 130, m = 30;
    const X = x => m + x * (W - 2 * m), Y = (y, thin) => cy - hh / 2 + y * hh;
    c.fillStyle = st.p.mat === 'cu' ? 'rgba(184,115,51,.18)' : hexA(C.u5, .15);
    c.beginPath(); c.moveTo(X(0), cy - hh / 2); c.lineTo(X(.5), cy - hh / 2); c.lineTo(X(.5), cy - hh / 4); c.lineTo(X(1), cy - hh / 4); c.lineTo(X(1), cy + hh / 4); c.lineTo(X(.5), cy + hh / 4); c.lineTo(X(.5), cy + hh / 2); c.lineTo(X(0), cy + hh / 2); c.closePath(); c.fill();
    c.strokeStyle = C.ink; c.lineWidth = 1.5; c.stroke();
    const show = st.p.mat === 'cu' ? st.e : st.e.slice(0, 30);
    show.forEach(e => CV.circle(c, X(e.x), Y(e.y), 3.2, C.u4));
    CV.arrow(c, X(.2), cy + hh / 2 + 30, X(.4), cy + hh / 2 + 30, C.u1, 2.4); CV.text(c, 'conventional current I', X(.3), cy + hh / 2 + 48, C.u1, 12, 'center', 600);
    CV.arrow(c, X(.8), cy + hh / 2 + 30, X(.6), cy + hh / 2 + 30, C.u4, 2.4); CV.text(c, 'electron drift', X(.7), cy + hh / 2 + 48, C.u4, 12, 'center', 600);
    CV.mono(c, 'A', X(.25), cy - hh / 2 - 14, C.ink, 12, 'center'); CV.mono(c, 'A/2', X(.75), cy - hh / 4 - 14, C.ink, 12, 'center');
    if (st.p.mat === 'semi') CV.text(c, 'far fewer charge carriers → much faster drift for the same current', W / 2, 24, C.muted, 12, 'center');
  },
  read(st) { const A = st.p.A1, v1 = this.vd(st, A), v2 = this.vd(st, A / 2); return [sf(this.n(st), 2), sf(v1, 2) + ' m s⁻¹', sf(v2, 2) + ' m s⁻¹', '~10⁵ m s⁻¹']; }
};

/* ==========================================================
   2.2 I–V characteristics
   ========================================================== */
SIMS.iv = {
  title: 'I–V characteristics', h: 440, noPlay: true,
  controls: [
    { id: 'comp', type: 'seg', label: 'Component', value: 'wire', options: [['wire', 'Metal wire'], ['lamp', 'Filament lamp']] },
    { id: 'V', label: 'Supply pd', min: -12, max: 12, step: 0.2, value: 6, fmt: v => v.toFixed(1) + ' V' },
    { id: 'T', label: 'Wire temperature (wire only)', min: 0, max: 200, step: 5, value: 20, fmt: v => v + ' °C' }
  ],
  readouts: ['Current', 'Resistance V/I', 'Power', 'Filament temperature'],
  note: 'The lamp’s resistance rises as it heats: the lattice ions vibrate more and collide more often with free electrons. Heating the wire does the same thing, making its line less steep.',
  I(st, V) { if (st.p.comp === 'wire') { const R = 10 * (1 + 0.0039 * (st.p.T - 20)); return V / R; } return Math.sign(V) * 0.2 * Math.pow(Math.abs(V) / 12, 0.55) * 1.0; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const V = st.p.V, I = this.I(st, V);
    const b = { x: 50, y: 30, w: W * 0.6 - 60, h: H - 80 };
    const ymax = st.p.comp === 'wire' ? 1.5 : 0.25;
    const g2 = CV.plot(c, C, b, { xr: [-12, 12], yr: [-ymax, ymax], xl: 'V / V', yl: 'I / A', series: [{ f: v => this.I(st, v), col: st.p.comp === 'wire' ? C.u4 : C.u1, w: 2.6 }, ...(st.p.comp === 'wire' ? [{ f: v => v / 10, col: C.muted, dash: [4, 4], w: 1.2 }] : [])], dots: [[V, I, C.accent, 6]] });
    CV.line(c, g2.X(0), g2.Y(0), g2.X(V), g2.Y(I), C.accent, 1, [3, 3]);
    // lamp / wire visual
    const lx = W * 0.8, ly = H * 0.42;
    if (st.p.comp === 'lamp') { const P = Math.abs(V * I), br = clamp(P / 2.4, 0, 1); const grd = c.createRadialGradient(lx, ly, 2, lx, ly, 90); grd.addColorStop(0, `rgba(255,220,140,${.9 * br})`); grd.addColorStop(1, 'rgba(255,200,100,0)'); c.fillStyle = grd; c.beginPath(); c.arc(lx, ly, 90, 0, 7); c.fill(); CV.circle(c, lx, ly, 34, null, C.ink, 2); c.strokeStyle = br > .05 ? `rgb(255,${180 + 60 * br | 0},80)` : C.ink; c.lineWidth = 2; c.beginPath(); for (let i = 0; i <= 12; i++) c.lineTo(lx - 18 + i * 3, ly + (i % 2 ? -6 : 6)); c.stroke(); CV.rrect(c, lx - 14, ly + 32, 28, 20, 3, C.muted); }
    else { const hot = clamp((st.p.T - 20) / 180, 0, 1); c.strokeStyle = `rgb(${184 + 70 * hot | 0},${115 - 40 * hot | 0},${51})`; c.lineWidth = 4; c.beginPath(); for (let i = 0; i <= 40; i++) c.lineTo(lx - 60 + i * 3, ly + Math.sin(i * .8) * 10); c.stroke(); }
    CV.mono(c, 'R = V/I (slope of the dashed chord, not the tangent)', b.x, H - 14, C.muted, 10.5);
  },
  read(st) { const V = st.p.V, I = this.I(st, V), R = Math.abs(I) > 1e-6 ? V / I : NaN, Tf = st.p.comp === 'lamp' ? (20 + 2400 * Math.pow(Math.abs(V) / 12, 0.9)) : st.p.T; return [I.toFixed(3) + ' A', isFinite(R) ? R.toFixed(1) + ' Ω' : '—', Math.abs(V * I).toFixed(2) + ' W', Tf.toFixed(0) + ' °C']; }
};

/* ==========================================================
   2.3 EMF & internal resistance circuit
   ========================================================== */
SIMS.circuit = {
  title: 'EMF & internal resistance', h: 460,
  controls: [
    { id: 'E', label: 'EMF E', min: 1.5, max: 12, step: 0.5, value: 6, fmt: v => v.toFixed(1) + ' V' },
    { id: 'r', label: 'Internal resistance r', min: 0, max: 5, step: 0.1, value: 2, fmt: v => v.toFixed(1) + ' Ω' },
    { id: 'R', label: 'Load resistance R', min: 0.2, max: 30, step: 0.2, value: 4, fmt: v => v.toFixed(1) + ' Ω' }
  ],
  readouts: ['Current I', 'Terminal pd V', 'Lost volts Ir', 'Power in load'],
  note: 'V = E − Ir. Lower R → more current → more “lost volts”. Power in the load is greatest when R = r.',
  init(st) { st.ph = 0; },
  step(st, dt) { const I = st.p.E / (st.p.R + st.p.r); st.ph = (st.ph + I * dt * 0.25) % 1; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, I = p.E / (p.R + p.r), V = I * p.R;
    const x0 = 40, y0 = 50, w = Math.min(W * 0.45, 300), h = 170;
    c.strokeStyle = C.ink; c.lineWidth = 2; c.strokeRect(x0, y0, w, h);
    // cell (left) with dashed box for r
    c.setLineDash([4, 4]); CV.rrect(c, x0 - 22, y0 + 40, 44, 90, 6, C.bg, C.muted, 1.2); c.setLineDash([]);
    CV.line(c, x0 - 12, y0 + 64, x0 + 12, y0 + 64, C.ink, 3); CV.line(c, x0 - 6, y0 + 72, x0 + 6, y0 + 72, C.ink, 3);
    CV.rrect(c, x0 - 7, y0 + 88, 14, 30, 2, C.bg, C.ink, 1.6); CV.mono(c, 'r', x0 - 30, y0 + 103, C.ink, 12, 'right'); CV.mono(c, 'E', x0 - 30, y0 + 68, C.ink, 12, 'right');
    CV.rrect(c, x0 + w - 10, y0 + 60, 20, 50, 3, C.bg, C.ink, 2); CV.mono(c, 'R', x0 + w + 16, y0 + 85, C.ink, 12);
    // voltmeter across cell terminals
    CV.line(c, x0, y0 + 30, x0 + 70, y0 + 30, C.muted, 1.2); CV.line(c, x0, y0 + 145, x0 + 70, y0 + 145, C.muted, 1.2); CV.line(c, x0 + 70, y0 + 30, x0 + 70, y0 + 70, C.muted, 1.2); CV.line(c, x0 + 70, y0 + 105, x0 + 70, y0 + 145, C.muted, 1.2);
    CV.circle(c, x0 + 70, y0 + 88, 17, C.surface, C.ink, 1.6); CV.mono(c, 'V', x0 + 70, y0 + 88, C.ink, 13, 'center');
    // current dots
    const per = 2 * (w + h), n = 18; for (let i = 0; i < n; i++) { let d = ((i / n + st.ph) % 1) * per, x, y; if (d < w) { x = x0 + d; y = y0; } else if (d < w + h) { x = x0 + w; y = y0 + d - w; } else if (d < 2 * w + h) { x = x0 + w - (d - w - h); y = y0 + h; } else { x = x0; y = y0 + h - (d - 2 * w - h); } CV.circle(c, x, y, 3.2, C.u2); }
    CV.mono(c, `V = ${V.toFixed(2)} V`, x0 + 70, y0 + h + 30, C.ink, 13, 'center');
    // graph V–I
    const b = { x: x0 + w + 70, y: 30, w: W - (x0 + w + 100), h: H * 0.42 };
    if (b.w > 120) {
      const Imax = p.E / Math.max(p.r, 0.2) * 1.05;
      const g2 = CV.plot(c, C, b, { xr: [0, Math.min(Imax, 10)], yr: [0, 12.5], xl: 'I / A', yl: 'V / V', series: [{ f: i => p.E - i * p.r, col: C.u2, w: 2.4 }], dots: [[I, V, C.accent, 6]] });
      const b2 = { x: b.x, y: b.y + b.h + 50, w: b.w, h: H - (b.y + b.h + 100) };
      const Pm = p.E * p.E / (4 * Math.max(p.r, 0.2));
      const g3 = CV.plot(c, C, b2, { xr: [0, 30], yr: [0, Pm * 1.15], xl: 'R / Ω', yl: 'P in load / W', series: [{ f: R => p.E * p.E * R / (R + p.r) ** 2, col: C.u5, w: 2.2 }], dots: [[p.R, I * I * p.R, C.accent, 5]] });
    }
  },
  read(st) { const p = st.p, I = p.E / (p.R + p.r); return [I.toFixed(3) + ' A', (I * p.R).toFixed(2) + ' V', (I * p.r).toFixed(2) + ' V', (I * I * p.R).toFixed(2) + ' W']; }
};

/* ==========================================================
   2.4 Wave machine
   ========================================================== */
SIMS.wave = {
  title: 'Wave machine', h: 420,
  controls: [
    { id: 'type', type: 'seg', label: 'Wave type', value: 'T', options: [['T', 'Transverse'], ['L', 'Longitudinal']] },
    { id: 'f', label: 'Frequency', min: 0.2, max: 2, step: 0.1, value: 0.6, fmt: v => v.toFixed(1) + ' Hz' },
    { id: 'lam', label: 'Wavelength', min: 0.5, max: 4, step: 0.1, value: 2, fmt: v => v.toFixed(1) + ' m' },
    { id: 'A', label: 'Amplitude', min: 0.1, max: 0.6, step: 0.05, value: 0.35, fmt: v => v.toFixed(2) + ' m' },
    { id: 'dx', label: 'Separation of P and Q', min: 0, max: 4, step: 0.05, value: 0.5, fmt: v => v.toFixed(2) + ' m' }
  ],
  readouts: ['Wave speed c = fλ', 'Period T', 'Phase difference P→Q', 'In phase?'],
  note: 'Watch individual particles: they oscillate about fixed positions while the wave (energy) moves along. Set P–Q to λ/2 for antiphase.',
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, sc = (W - 60) / 8, cy = H * 0.45, k = 2 * Math.PI / p.lam, w = 2 * Math.PI * p.f;
    const X0 = 30, xp = 1.5, xq = xp + p.dx;
    if (p.type === 'T') {
      c.strokeStyle = hexA(C.u2, .6); c.lineWidth = 2; c.beginPath(); for (let i = 0; i <= 400; i++) { const x = i / 400 * 8, y = p.A * Math.sin(w * st.t - k * x); i ? c.lineTo(X0 + x * sc, cy - y * sc) : c.moveTo(X0 + x * sc, cy - y * sc); } c.stroke();
      for (let x = 0; x <= 8; x += 0.25) { const y = p.A * Math.sin(w * st.t - k * x); CV.circle(c, X0 + x * sc, cy - y * sc, 4, C.u2); }
      [[xp, 'P', C.u1], [xq, 'Q', C.u4]].forEach(([x, l, col]) => { if (x > 8) return; const y = p.A * Math.sin(w * st.t - k * x); CV.line(c, X0 + x * sc, cy - p.A * sc - 14, X0 + x * sc, cy + p.A * sc + 14, hexA(col, .4), 1, [3, 3]); CV.circle(c, X0 + x * sc, cy - y * sc, 8, col); CV.mono(c, l, X0 + x * sc, cy + p.A * sc + 28, col, 13, 'center'); });
      // λ bracket
      const lx = X0 + 4.2 * sc; CV.line(c, lx, cy - p.A * sc - 30, lx + p.lam * sc, cy - p.A * sc - 30, C.ink, 1.2); CV.mono(c, 'λ = ' + p.lam.toFixed(1) + ' m', lx + p.lam * sc / 2, cy - p.A * sc - 42, C.ink, 11, 'center');
    } else {
      for (let x = 0; x <= 8; x += 0.1) { const d = p.A * 0.6 * Math.sin(w * st.t - k * x); const xx = X0 + (x + d) * sc; CV.line(c, xx, cy - 60, xx, cy + 60, hexA(C.u2, .7), 2); }
      [[xp, 'P', C.u1], [xq, 'Q', C.u4]].forEach(([x, l, col]) => { if (x > 8) return; const d = p.A * 0.6 * Math.sin(w * st.t - k * x); const xx = X0 + (x + d) * sc; CV.line(c, xx, cy - 60, xx, cy + 60, col, 3.5); CV.mono(c, l, xx, cy + 78, col, 13, 'center'); });
      CV.text(c, 'compressions and rarefactions travel →', W / 2, cy - 84, C.muted, 12, 'center');
    }
    CV.arrow(c, W - 150, H - 30, W - 40, H - 30, C.ink, 2); CV.text(c, 'energy transfer', W - 95, H - 46, C.muted, 11, 'center');
    // displacement-time of P
    const b = { x: 40, y: H - 90, w: W * 0.45, h: 50 }; if (W > 500) { CV.plot(c, C, b, { xr: [st.t - 4, st.t], yr: [-p.A * 1.2, p.A * 1.2], xl: 't', yl: 'P and Q displacement', series: [{ f: t => p.A * Math.sin(w * t - k * xp), col: C.u1 }, { f: t => p.A * Math.sin(w * t - k * xq), col: C.u4, dash: [4, 3] }] }); }
  },
  read(st) { const p = st.p, ph = (2 * Math.PI * p.dx / p.lam) % (2 * Math.PI), inph = Math.abs(ph) < 0.02 || Math.abs(ph - 2 * Math.PI) < 0.02, anti = Math.abs(ph - Math.PI) < 0.02; return [(p.f * p.lam).toFixed(2) + ' m s⁻¹', (1 / p.f).toFixed(2) + ' s', (ph / Math.PI).toFixed(2) + 'π rad (' + (ph / deg).toFixed(0) + '°)', inph ? 'in phase' : anti ? 'antiphase' : 'no']; }
};

/* ==========================================================
   2.5 Stationary waves
   ========================================================== */
SIMS.standing = {
  title: 'Stationary waves on a string', h: 420,
  controls: [
    { id: 'n', label: 'Harmonic n', min: 1, max: 6, step: 1, value: 2, fmt: v => v + (v === 1 ? ' (fundamental)' : '') },
    { id: 'L', label: 'String length', min: 0.3, max: 1.5, step: 0.05, value: 0.65, fmt: v => v.toFixed(2) + ' m' },
    { id: 'v', label: 'Wave speed on string', min: 50, max: 400, step: 5, value: 255, fmt: v => v + ' m s⁻¹' },
    { id: 'show', type: 'seg', label: 'Show', value: 1, options: [[1, 'Resultant'], [2, '+ components']] }
  ],
  readouts: ['Wavelength', 'Frequency', 'Nodes (incl. ends)', 'Node–node distance'],
  note: 'Two identical waves travelling in opposite directions superpose. Between adjacent nodes every point moves in phase; neighbouring loops are in antiphase.',
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, x0 = 50, x1 = W - 50, cy = H * 0.48, A = Math.min(70, H * .18), n = p.n, wt = st.t * 2.2;
    const Y = (x, phase) => A * Math.sin(n * Math.PI * x) * Math.cos(phase);
    if (p.show === 2) { [[1, C.u1], [-1, C.u4]].forEach(([dir, col]) => { c.strokeStyle = hexA(col, .6); c.lineWidth = 1.6; c.beginPath(); for (let i = 0; i <= 300; i++) { const x = i / 300, y = A / 2 * Math.sin(n * Math.PI * x - dir * wt); i ? c.lineTo(x0 + x * (x1 - x0), cy - y) : c.moveTo(x0 + x * (x1 - x0), cy - y); } c.stroke(); }); }
    c.strokeStyle = hexA(C.u2, .25); c.lineWidth = 1; [0, Math.PI].forEach(ph => { c.beginPath(); for (let i = 0; i <= 300; i++) { const x = i / 300; i ? c.lineTo(x0 + x * (x1 - x0), cy - Y(x, ph)) : c.moveTo(x0 + x * (x1 - x0), cy - Y(x, ph)); } c.stroke(); });
    c.strokeStyle = C.u2; c.lineWidth = 3; c.beginPath(); for (let i = 0; i <= 300; i++) { const x = i / 300, y = p.show === 2 ? A / 2 * (Math.sin(n * Math.PI * x - wt) + Math.sin(n * Math.PI * x + wt)) : Y(x, wt); i ? c.lineTo(x0 + x * (x1 - x0), cy - y) : c.moveTo(x0 + x * (x1 - x0), cy - y); } c.stroke();
    for (let k = 0; k <= n; k++) { const x = x0 + k / n * (x1 - x0); CV.circle(c, x, cy, 5, C.ink); CV.mono(c, 'N', x, cy + A + 22, C.ink, 11, 'center'); }
    for (let k = 0; k < n; k++) { const x = x0 + (k + .5) / n * (x1 - x0); CV.mono(c, 'A', x, cy + A + 22, C.accent, 11, 'center'); }
    CV.rrect(c, x0 - 16, cy - 50, 12, 100, 3, C.muted); CV.rrect(c, x1 + 4, cy - 50, 12, 100, 3, C.muted);
    CV.text(c, 'N = node, A = antinode', x0, H - 24, C.muted, 11);
  },
  read(st) { const p = st.p, lam = 2 * p.L / p.n; return [lam.toFixed(3) + ' m', (p.v / lam).toFixed(1) + ' Hz', p.n + 1, (lam / 2).toFixed(3) + ' m']; }
};

/* ==========================================================
   2.5 Young's double slits
   ========================================================== */
SIMS.slits = {
  title: 'Young’s double slits', h: 440, noPlay: true,
  controls: [
    { id: 'lam', label: 'Wavelength', min: 400, max: 700, step: 5, value: 633, fmt: v => v + ' nm' },
    { id: 'a', label: 'Slit separation a', min: 0.1, max: 1.0, step: 0.05, value: 0.4, fmt: v => v.toFixed(2) + ' mm' },
    { id: 'D', label: 'Slit–screen distance D', min: 0.5, max: 3, step: 0.1, value: 2, fmt: v => v.toFixed(1) + ' m' },
    { id: 'b', label: 'Slit width', min: 0.02, max: 0.15, step: 0.01, value: 0.06, fmt: v => v.toFixed(2) + ' mm' }
  ],
  readouts: ['Fringe spacing y = λD/a', 'Bright fringes visible (±30 mm)', 'Path diff. at 1st bright', 'Colour'],
  note: 'Increase D or λ, or decrease a, to spread the fringes. The single-slit envelope (from the finite slit width) modulates their brightness.',
  draw(c, W, H, st, C) {
    const p = st.p, lam = p.lam * 1e-9, a = p.a * 1e-3, D = p.D, b = p.b * 1e-3, ymm = 30; // screen ±30 mm
    const I = y => { const th = y / D, be = Math.PI * a * th / lam, al = Math.PI * b * th / lam; const s = al === 0 ? 1 : Math.sin(al) / al; return Math.cos(be) ** 2 * s * s; };
    c.fillStyle = '#05080C'; c.fillRect(0, 0, W, H);
    const [R, G, B] = nmRGB(p.lam), sx = 60, sw = W - 120, top = 30, sh = H * 0.42;
    for (let i = 0; i < sw; i++) { const y = (i / sw - .5) * 2 * ymm * 1e-3, v = I(y); c.fillStyle = `rgba(${R},${G},${B},${Math.pow(v, .7)})`; c.fillRect(sx + i, top, 1.2, sh); }
    CV.rrect(c, sx - 2, top - 2, sw + 4, sh + 4, 4, null, '#2A3643', 1.5);
    // intensity plot
    const gy = top + sh + 30, gh = H - gy - 36;
    c.strokeStyle = `rgb(${R},${G},${B})`; c.lineWidth = 2; c.beginPath(); for (let i = 0; i <= sw; i++) { const y = (i / sw - .5) * 2 * ymm * 1e-3; const v = I(y); i ? c.lineTo(sx + i, gy + gh - v * gh) : c.moveTo(sx + i, gy + gh - v * gh); } c.stroke();
    CV.line(c, sx, gy + gh, sx + sw, gy + gh, '#8FA2B1', 1);
    for (let mm = -30; mm <= 30; mm += 10) { const x = sx + (mm + 30) / 60 * sw; CV.line(c, x, gy + gh, x, gy + gh + 5, '#8FA2B1', 1); CV.mono(c, mm + ' mm', x, gy + gh + 15, '#8FA2B1', 10, 'center'); }
    const y = lam * D / a * 1000; if (y < 25) { const x1 = sx + (30) / 60 * sw, x2 = sx + (30 + y) / 60 * sw; CV.line(c, x1, top + sh + 10, x2, top + sh + 10, '#fff', 1.5); CV.mono(c, 'y', (x1 + x2) / 2, top + sh + 20, '#fff', 11, 'center'); }
  },
  read(st) { const p = st.p, y = p.lam * 1e-9 * p.D / (p.a * 1e-3) * 1000; const n = Math.floor(30 / y) * 2 + 1; const reg = p.lam < 450 ? 'violet' : p.lam < 495 ? 'blue' : p.lam < 570 ? 'green' : p.lam < 590 ? 'yellow' : p.lam < 620 ? 'orange' : 'red'; return [y.toFixed(2) + ' mm', n, '1λ = ' + p.lam + ' nm', reg]; }
};

/* ==========================================================
   2.5 Diffraction grating
   ========================================================== */
SIMS.grating = {
  title: 'Diffraction grating', h: 440, noPlay: true,
  controls: [
    { id: 'N', label: 'Lines per mm', min: 50, max: 1200, step: 10, value: 300, fmt: v => v },
    { id: 'lam', label: 'Wavelength', min: 400, max: 700, step: 5, value: 589, fmt: v => v + ' nm' },
    { id: 'white', type: 'seg', label: 'Source', value: 0, options: [[0, 'Monochromatic'], [1, 'White light']] }
  ],
  readouts: ['Line spacing d', 'Max order n', '1st-order angle', '2nd-order angle'],
  note: 'd sin θ = nλ. More lines per mm → smaller d → orders spread wider, and fewer orders fit. With white light, violet is always nearest the centre.',
  draw(c, W, H, st, C) {
    c.fillStyle = '#05080C'; c.fillRect(0, 0, W, H); const p = st.p, d = 1e-3 / p.N, gx = 80, gy = H / 2, L = Math.min(W - 140, H * 1.2);
    CV.line(c, gx, 30, gx, H - 30, '#8FA2B1', 3); CV.line(c, 10, gy, gx, gy, '#fff', 3);
    const lams = p.white ? [400, 440, 480, 520, 560, 600, 640, 680] : [p.lam];
    lams.forEach(l => { for (let n = -6; n <= 6; n++) { const s = n * l * 1e-9 / d; if (Math.abs(s) >= 1) continue; const th = Math.asin(s); const x2 = gx + L * Math.cos(th), y2 = gy - L * Math.sin(th); c.strokeStyle = n === 0 && p.white ? 'rgba(255,255,255,.8)' : nmCSS(l, p.white ? .7 : .9); c.lineWidth = n === 0 ? 2.5 : 1.8; c.beginPath(); c.moveTo(gx, gy); c.lineTo(x2, y2); c.stroke(); if (!p.white || l === 400) CV.mono(c, 'n=' + n, gx + (L + 16) * Math.cos(th), gy - (L + 16) * Math.sin(th), '#C5D1DB', 10.5, 'center'); } });
    CV.text(c, 'grating', gx, H - 16, '#8FA2B1', 11, 'center');
  },
  read(st) { const p = st.p, d = 1e-3 / p.N, l = p.lam * 1e-9, nm = Math.floor(d / l * (1 - 1e-9)); const a = n => n * l / d < 1 ? (Math.asin(n * l / d) / deg).toFixed(1) + '°' : 'none'; return [sf(d, 3) + ' m', nm, a(1), a(2)]; }
};

/* ==========================================================
   2.6 Refraction & TIR
   ========================================================== */
SIMS.refraction = {
  title: 'Refraction & total internal reflection', h: 440, noPlay: true,
  controls: [
    { id: 'n1', label: 'n₁ (upper medium)', min: 1, max: 2.4, step: 0.01, value: 1.5, fmt: v => v.toFixed(2) },
    { id: 'n2', label: 'n₂ (lower medium)', min: 1, max: 2.4, step: 0.01, value: 1.0, fmt: v => v.toFixed(2) },
    { id: 'th', label: 'Angle of incidence', min: 0, max: 89, step: 0.5, value: 35, fmt: v => v.toFixed(1) + '°' }
  ],
  readouts: ['Angle of refraction', 'Critical angle', 'Speed in medium 1', 'Speed in medium 2'],
  note: 'Drag on the canvas to aim the ray. When going to a lower index, push past the critical angle for total internal reflection.',
  pointer(type, x, y, st) { if (type !== 'down' && type !== 'drag') return; const cx = st.W / 2, cy = st.H / 2; if (y >= cy) return; const a = Math.atan2(cx - x, cy - y) / deg; const v = clamp(Math.abs(a), 0, 89); st.p.th = v; const inp = document.getElementById('sc-refraction-th'); if (inp) { inp.value = v; inp.dispatchEvent(new Event('input')); } },
  draw(c, W, H, st, C) {
    const p = st.p, cx = W / 2, cy = H / 2, L = Math.min(W, H) * 0.46;
    c.fillStyle = hexA(C.u4, (p.n1 - 1) * .18 + .02); c.fillRect(0, 0, W, cy); c.fillStyle = hexA(C.u4, (p.n2 - 1) * .18 + .02); c.fillRect(0, cy, W, H - cy);
    CV.line(c, 0, cy, W, cy, C.ink, 1.5); CV.line(c, cx, 20, cx, H - 20, C.muted, 1, [5, 4]);
    CV.mono(c, 'n₁ = ' + p.n1.toFixed(2), 14, 20, C.ink, 12); CV.mono(c, 'n₂ = ' + p.n2.toFixed(2), 14, H - 18, C.ink, 12);
    const t1 = p.th * deg, s2 = p.n1 * Math.sin(t1) / p.n2, tir = s2 > 1;
    const ix = cx - L * Math.sin(t1), iy = cy - L * Math.cos(t1); CV.arrow(c, ix, iy, cx - 3 * Math.sin(t1), cy - 3 * Math.cos(t1), C.u2, 3);
    const Rf = tir ? 1 : (() => { const t2 = Math.asin(s2), rs = ((p.n1 * Math.cos(t1) - p.n2 * Math.cos(t2)) / (p.n1 * Math.cos(t1) + p.n2 * Math.cos(t2))) ** 2, rp = ((p.n1 * Math.cos(t2) - p.n2 * Math.cos(t1)) / (p.n1 * Math.cos(t2) + p.n2 * Math.cos(t1))) ** 2; return (rs + rp) / 2; })();
    c.globalAlpha = clamp(Rf * 1.2 + .08, .1, 1); CV.arrow(c, cx, cy, cx + L * Math.sin(t1), cy - L * Math.cos(t1), C.u2, tir ? 3 : 2); c.globalAlpha = 1;
    if (!tir) { const t2 = Math.asin(s2); c.globalAlpha = clamp(1 - Rf, .2, 1); CV.arrow(c, cx, cy, cx + L * Math.sin(t2), cy + L * Math.cos(t2), C.u2, 3); c.globalAlpha = 1; c.strokeStyle = C.ink; c.lineWidth = 1; c.beginPath(); c.arc(cx, cy, 44, Math.PI / 2 - t2, Math.PI / 2); c.stroke(); CV.mono(c, 'θ₂', cx + 30 * Math.sin(t2 / 2) + 6, cy + 60, C.ink, 12); }
    else CV.text(c, 'TOTAL INTERNAL REFLECTION', cx, cy + 40, C.bad, 14, 'center', 700);
    c.strokeStyle = C.ink; c.lineWidth = 1; c.beginPath(); c.arc(cx, cy, 44, -Math.PI / 2 - t1, -Math.PI / 2); c.stroke(); CV.mono(c, 'θ₁', cx - 30 * Math.sin(t1 / 2) - 18, cy - 60, C.ink, 12);
    if (p.n1 > p.n2) { const tc = Math.asin(p.n2 / p.n1); CV.line(c, cx, cy, cx - L * .6 * Math.sin(tc), cy - L * .6 * Math.cos(tc), C.bad, 1, [3, 4]); CV.mono(c, 'θc', cx - L * .64 * Math.sin(tc) - 10, cy - L * .64 * Math.cos(tc), C.bad, 11, 'center'); }
  },
  read(st) { const p = st.p, s2 = p.n1 * Math.sin(p.th * deg) / p.n2; return [s2 > 1 ? 'TIR' : (Math.asin(s2) / deg).toFixed(1) + '°', p.n1 > p.n2 ? (Math.asin(p.n2 / p.n1) / deg).toFixed(1) + '°' : 'none (n₁ ≤ n₂)', sf(3e8 / p.n1, 3) + ' m s⁻¹', sf(3e8 / p.n2, 3) + ' m s⁻¹']; }
};

/* ==========================================================
   2.7 Photoelectric effect
   ========================================================== */
SIMS.photo = {
  title: 'Photoelectric effect', h: 460,
  controls: [
    { id: 'metal', type: 'seg', label: 'Metal (work function)', value: 2.3, options: [[2.1, 'Cs 2.1 eV'], [2.3, 'Na 2.3 eV'], [4.3, 'Zn 4.3 eV']] },
    { id: 'lam', label: 'Wavelength', min: 150, max: 750, step: 5, value: 450, fmt: v => v + ' nm' },
    { id: 'Iint', label: 'Intensity', min: 0, max: 100, step: 5, value: 50, fmt: v => v + '%' }
  ],
  readouts: ['Photon energy', 'Eₖ max', 'Threshold wavelength', 'Stopping potential'],
  note: 'Brighter light → more electrons, not faster ones. Below the threshold frequency nothing is emitted, however bright the light.',
  init(st) { st.ph = []; st.el = []; st.acc = 0; },
  step(st, dt) {
    const p = st.p, W = st.W, H = st.H, E = 1240 / p.lam, Ek = E - p.metal;
    st.acc += p.Iint / 100 * 30 * dt; while (st.acc > 1) { st.acc--; st.ph.push({ x: 60 + Math.random() * (W * 0.5 - 60), y: -10, t: 0 }); }
    const plate = H * 0.55;
    st.ph = st.ph.filter(f => { f.x += 90 * dt; f.y += 260 * dt; if (f.y >= plate) { if (Ek > 0) { const v = Math.sqrt(Ek) * 140 * (0.4 + 0.6 * Math.random()); const a = -Math.PI / 2 + (Math.random() - .5) * 1.6; st.el.push({ x: f.x, y: plate - 4, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 2.5 }); } return false; } return true; });
    st.el = st.el.filter(e => { e.x += e.vx * dt; e.y += e.vy * dt; e.life -= dt; return e.life > 0 && e.y > -20; });
  },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, plate = H * 0.55, col = p.lam >= 380 && p.lam <= 750 ? nmCSS(p.lam) : (p.lam < 380 ? C.u5 : C.u1);
    CV.rrect(c, 40, plate, W * 0.5, 22, 4, C.muted); CV.text(c, 'metal plate', 40 + W * 0.25, plate + 38, C.muted, 11, 'center');
    st.ph.forEach(f => { c.strokeStyle = col; c.lineWidth = 2; c.beginPath(); for (let i = 0; i < 16; i++) { const t = i / 15; c.lineTo(f.x - 18 * .33 * t * 3 + Math.sin(t * 12) * 3, f.y - 18 * t * 3); } c.stroke(); });
    st.el.forEach(e => CV.circle(c, e.x, e.y, 4, C.u4));
    if (p.lam < 380) CV.text(c, 'ultraviolet (invisible)', 40 + W * 0.25, 20, C.u5, 12, 'center');
    const b = { x: W * 0.62, y: 30, w: W * 0.34, h: H * 0.5 };
    const f = 3e8 / (p.lam * 1e-9) / 1e14, f0 = p.metal * 1.6e-19 / 6.63e-34 / 1e14;
    CV.plot(c, C, b, { xr: [0, 20], yr: [-5, 5], xl: 'f / 10¹⁴ Hz', yl: 'Eₖ max / eV', series: [{ f: x => 6.63e-34 * x * 1e14 / 1.6e-19 - p.metal, col: hexA(C.muted, .4), dash: [4, 4] }, { f: x => x >= f0 ? 6.63e-34 * x * 1e14 / 1.6e-19 - p.metal : NaN, col: C.u2, w: 2.4 }], dots: [[f, Math.max(0, 1240 / p.lam - p.metal), C.accent, 6]] });
  },
  read(st) { const p = st.p, E = 1240 / p.lam, Ek = E - p.metal; return [E.toFixed(2) + ' eV', Ek > 0 ? Ek.toFixed(2) + ' eV' : 'none emitted', (1240 / p.metal).toFixed(0) + ' nm', Ek > 0 ? Ek.toFixed(2) + ' V' : '—']; }
};

/* ==========================================================
   2.7 Hydrogen energy levels
   ========================================================== */
SIMS.levels = {
  title: 'Hydrogen transitions', h: 460,
  controls: [{ type: 'button', act: 'clear', label: 'Clear spectrum' }],
  readouts: ['Transition', 'Photon energy', 'Wavelength', 'Region'],
  note: 'Tap an upper level, then a lower level to emit a photon (or lower then upper to absorb). Transitions down to n = 2 give the visible Balmer lines.',
  E: n => -13.6 / (n * n),
  init(st) { st.sel = null; st.lines = []; st.last = null; st.anim = null; },
  action(st, a) { if (a === 'clear') { st.lines = []; st.last = null; } },
  y(n, H) { const e = -13.6 / (n * n); return 40 + (1 - Math.pow((e + 13.6) / 13.6, .6)) * (H * 0.66 - 40); },
  pointer(type, x, y, st) { if (type !== 'down') return; let best = null, bd = 18; for (let n = 1; n <= 6; n++) { const d = Math.abs(y - this.y(n, st.H)); if (d < bd && x < st.W * 0.62) { bd = d; best = n; } } if (!best) return; if (st.sel == null) { st.sel = best; sfx.tick(); } else if (best !== st.sel) { const up = st.sel, lo = best; const dE = Math.abs(this.E(up) - this.E(lo)), lam = 1240 / dE; st.last = { up, lo, dE, lam, emit: up > lo }; if (up > lo) st.lines.push(lam); st.anim = { t: 0, ...st.last }; st.sel = null; sfx.good(); } else st.sel = null; },
  step(st, dt) { if (st.anim) { st.anim.t += dt; if (st.anim.t > 1.5) st.anim = null; } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const x0 = 60, x1 = W * 0.6;
    for (let n = 1; n <= 6; n++) { const y = this.y(n, H); CV.line(c, x0, y, x1, y, st.sel === n ? C.accent : C.ink, st.sel === n ? 3.5 : 2); CV.mono(c, `n = ${n}   ${this.E(n).toFixed(2)} eV`, x1 + 10, y, C.ink, 11); }
    CV.line(c, x0, 40 - 12, x1, 40 - 12, C.muted, 1, [4, 4]); CV.mono(c, '0 eV (ionised)', x1 + 10, 28, C.muted, 11);
    const a = st.anim; if (a) { const xa = x0 + (x1 - x0) * .5, y1 = this.y(a.up, H), y2 = this.y(a.lo, H), col = a.lam >= 380 && a.lam <= 750 ? nmCSS(a.lam) : C.u5; CV.arrow(c, xa, a.emit ? y1 : y2, xa, a.emit ? y2 : y1, col, 3); const pr = a.t / 1.5, px = xa + 20 + pr * 200; c.strokeStyle = col; c.lineWidth = 2; c.beginPath(); for (let i = 0; i < 30; i++) c.lineTo(px + i * 2, (y1 + y2) / 2 + Math.sin(i * .9) * 6); c.stroke(); }
    // spectrum strip
    const sy = H * 0.78, sx = 40, sw = W - 80, sh = 40; c.fillStyle = '#05080C'; c.fillRect(sx, sy, sw, sh);
    const X = l => sx + (l - 350) / (750 - 350) * sw; st.lines.forEach(l => { if (l < 350 || l > 750) return; c.fillStyle = nmCSS(l); c.fillRect(X(l) - 1.5, sy, 3, sh); });
    for (let l = 400; l <= 700; l += 100) CV.mono(c, l + ' nm', X(l), sy + sh + 12, C.muted, 10, 'center');
    CV.text(c, 'your emission spectrum (350–750 nm)', sx, sy - 12, C.muted, 11);
  },
  read(st) { const l = st.last; if (!l) return [st.sel ? 'from n = ' + st.sel + '…' : 'pick a level', '—', '—', '—']; const reg = l.lam < 380 ? 'ultraviolet' : l.lam <= 750 ? 'visible' : 'infrared'; return [`n=${l.up} → n=${l.lo} (${l.emit ? 'emission' : 'absorption'})`, l.dE.toFixed(2) + ' eV', l.lam.toFixed(0) + ' nm', reg]; }
};

/* ==========================================================
   2.8 Laser populations
   ========================================================== */
SIMS.laser = {
  title: 'Laser: pumping & inversion', h: 440, substeps: 20,
  controls: [
    { id: 'sys', type: 'seg', label: 'System', value: 4, options: [[3, 'Three-level'], [4, 'Four-level']] },
    { id: 'W', label: 'Pump rate', min: 0, max: 20, step: 0.5, value: 4, fmt: v => v.toFixed(1) }
  ],
  readouts: ['Upper laser level', 'Lower laser level', 'Population inversion?', 'Laser output'],
  note: 'In the four-level system the lower laser level empties almost instantly, so a small pump rate achieves inversion. The three-level system needs over half the atoms pumped out of the ground state.',
  init(st) { st.N = [1, 0, 0, 0]; st.phi = 0; st.hist = []; },
  change(st, id) { if (id === 'sys') this.init(st); },
  step(st, dt) {
    const p = st.p, N = st.N, B = 40, tc = 0.15, A = 1;
    if (p.sys === 4) { const pump = p.W * N[0], d32 = 60 * N[3], stim = B * st.phi * (N[2] - N[1]), sp = A * N[2], d10 = 80 * N[1];
      N[0] += (-pump + d10) * dt; N[3] += (pump - d32) * dt; N[2] += (d32 - stim - sp) * dt; N[1] += (stim + sp - d10) * dt; st.phi += (stim - st.phi / tc + 0.002 * sp) * dt; }
    else { const pump = p.W * N[0], d21 = 60 * N[2], stim = B * st.phi * (N[1] - N[0]), sp = A * N[1];
      N[0] += (-pump + stim + sp) * dt; N[2] += (pump - d21) * dt; N[1] += (d21 - stim - sp) * dt; st.phi += (stim - st.phi / tc + 0.002 * sp) * dt; }
    st.phi = Math.max(0, st.phi); N.forEach((v, i) => N[i] = clamp(v, 0, 1));
    if (Math.random() < .2) { st.hist.push(st.phi); if (st.hist.length > 240) st.hist.shift(); }
  },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, N = st.N, four = p.sys === 4;
    const lv = four ? [[0, 'ground E₀'], [1, 'E₁ lower laser level'], [2, 'E₂ upper (metastable)'], [3, 'E₃ pump level']] : [[0, 'ground E₀ = lower laser level'], [1, 'E₁ upper (metastable)'], [2, 'E₂ pump level']];
    const yb = H - 60, span = H - 140, x0 = 40, lw = W * 0.34;
    const Y = i => yb - (four ? [0, .3, .62, .95][i] : [0, .62, .95][i]) * span;
    lv.forEach(([i, l]) => { const y = Y(i); CV.line(c, x0, y, x0 + lw, y, C.ink, 2); const w = N[i] * lw; CV.rrect(c, x0, y - 12, Math.max(1, w), 10, 3, i === (four ? 2 : 1) ? C.u1 : i === (four ? 1 : 0) ? C.u4 : C.muted); CV.mono(c, l, x0 + lw + 10, y - 6, C.ink, 11); CV.mono(c, (N[i] * 100).toFixed(0) + '%', x0 + lw + 10, y + 8, C.muted, 10); });
    CV.arrow(c, x0 + 10, Y(0) - 14, x0 + 10, Y(four ? 3 : 2) + 4, C.u5, 2); CV.text(c, 'pump', x0 + 16, (Y(0) + Y(four ? 3 : 2)) / 2, C.u5, 11);
    CV.arrow(c, x0 + lw * .7, Y(four ? 2 : 1), x0 + lw * .7, Y(four ? 1 : 0) - 14, C.u1, 3);
    // cavity
    const cx = W * 0.64, cw = W * 0.32, cy = 60, ch = 70; CV.rrect(c, cx, cy, cw, ch, 8, hexA(C.u1, .06), C.line); CV.rrect(c, cx - 6, cy, 6, ch, 2, C.ink); CV.rrect(c, cx + cw, cy, 6, ch, 2, hexA(C.ink, .45));
    const beam = clamp(st.phi * 8, 0, 1); c.fillStyle = hexA(C.u1, beam * .8); c.fillRect(cx, cy + ch / 2 - 4, cw, 8); c.fillRect(cx + cw + 6, cy + ch / 2 - 3, W - cx - cw - 6, 6 * beam);
    CV.text(c, '100% mirror', cx, cy + ch + 14, C.muted, 10); CV.text(c, 'partial mirror', cx + cw, cy + ch + 14, C.muted, 10, 'right');
    const b = { x: cx, y: cy + ch + 50, w: cw, h: H - (cy + ch + 110) }; const mx = Math.max(0.02, ...st.hist);
    CV.plot(c, C, b, { xr: [0, 240], yr: [0, mx * 1.1], xl: 'time', yl: 'output', series: [{ pts: st.hist.map((v, i) => [i, v]), col: C.u1 }] });
  },
  read(st) { const N = st.N, four = st.p.sys === 4, up = four ? N[2] : N[1], lo = four ? N[1] : N[0], inv = up > lo; return [(up * 100).toFixed(0) + '%', (lo * 100).toFixed(0) + '%', inv ? 'YES' : 'no', st.phi > 0.01 ? 'lasing ✓' : 'none']; }
};
