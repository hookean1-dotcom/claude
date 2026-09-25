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
    return `<div class="ctl"><label for="sc-${key}-${c.id}">${sqrtify(c.label)}<output>${c.fmt ? c.fmt(c.value) : c.value}</output></label><input id="sc-${key}-${c.id}" type="range" min="${c.min}" max="${c.max}" step="${c.step}" value="${c.value}" data-id="${c.id}"></div>`;
  }).join('');
  const btnRow = (def.controls || []).filter(c => c.type === 'button').length;
  host.innerHTML = `<div class="sim"><div class="sim-stage" style="height:${(def.hNarrow && innerWidth < 600 ? def.hNarrow : def.h) || 440}px"><canvas aria-label="${esc(def.title)} simulation"></canvas></div>
    <div class="sim-ctl"><div class="row" style="justify-content:space-between"><div class="sim-title">${def.title}</div>
    <div class="row" style="gap:6px">${def.noPlay ? '' : `<button type="button" class="icon-btn" data-act="__play" title="Play / pause" aria-label="Play or pause">${st.run ? ICON.pause : ICON.play}</button>`}<button type="button" class="icon-btn" data-act="__reset" title="Reset" aria-label="Reset">${ICON.reset}</button></div></div>
    ${ctl.replace(/<button type="button" class="btn sm"[\s\S]*?<\/button>/g, '')}
    ${btnRow ? `<div class="row" style="gap:8px">${(def.controls || []).filter(c => c.type === 'button').map(c => `<button type="button" class="btn sm" data-act="${c.act}">${c.label}</button>`).join('')}</div>` : ''}
    <div class="readouts">${(def.readouts || []).map((r, i) => `<div class="ro"><span>${sqrtify(r)}</span><b data-ro="${i}">—</b></div>`).join('')}</div>
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
