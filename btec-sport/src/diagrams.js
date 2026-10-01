/* ==========================================================
   Diagrams: to-scale SVG plots and schematic figures (Pulse · WJEC PE)
   All colours come from theme tokens so both themes read.
   ========================================================== */
const INK = 'var(--ink)', MUT = 'var(--muted)', LN = 'var(--line-2)', ACC = 'var(--accent)';
const C1 = 'var(--u1)', C2 = 'var(--u2)', C3 = 'var(--u3)', C4 = 'var(--u4)', C5 = 'var(--u5)', C6 = 'var(--u6)', C7 = 'var(--u7)', C8 = 'var(--u8)', GOOD = 'var(--good)', BAD = 'var(--bad)', INFO = 'var(--info)';
const tx = (x, y, s, o = {}) => `<text x="${x}" y="${y}" fill="${o.c || MUT}" font-size="${o.fs || 12}" font-family="${o.f || 'var(--f-body)'}" ${o.it ? 'font-style="italic"' : ''} text-anchor="${o.a || 'start'}" ${o.w ? `font-weight="${o.w}"` : ''} ${o.bl ? `dominant-baseline="${o.bl}"` : ''}>${s}</text>`;
const ln = (x1, y1, x2, y2, c = INK, w = 1.5, d = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" ${d ? `stroke-dasharray="${d}"` : ''} stroke-linecap="round"/>`;
const arrowHead = (x, y, ang, c = INK, s = 8) => { const a1 = ang + 2.7, a2 = ang - 2.7; return `<path d="M${x},${y} L${x + s * Math.cos(a1)},${y + s * Math.sin(a1)} L${x + s * Math.cos(a2)},${y + s * Math.sin(a2)} Z" fill="${c}"/>`; };
const arrow = (x1, y1, x2, y2, c = INK, w = 1.8) => ln(x1, y1, x2, y2, c, w) + arrowHead(x2, y2, Math.atan2(y2 - y1, x2 - x1), c);
const svg = (w, h, body, label) => `<svg viewBox="0 0 ${w} ${h}" width="${w}" role="img" aria-label="${esc(label || 'diagram')}" style="font-family:var(--f-body)">${body}</svg>`;
const mlab = (x, y, s, o = {}) => tx(x, y, s, { f: 'var(--f-math)', it: true, fs: o.fs || 15, c: o.c || INK, a: o.a, bl: o.bl });

/* Generic to-scale function plot */
function plot(o) {
  const W = o.w || 520, H = o.h || 290, L = o.pl ?? 52, R = o.pr ?? 20, Tp = o.pt ?? 18, B = o.pb ?? 40;
  const [x0, x1] = o.x, [y0, y1] = o.y;
  const X = v => L + (v - x0) / (x1 - x0) * (W - L - R), Y = v => H - B - (v - y0) / (y1 - y0) * (H - Tp - B);
  let s = '';
  // grid
  (o.xt || []).forEach(t => s += ln(X(t), Y(y0), X(t), Y(y1), 'var(--line)', 1));
  (o.yt || []).forEach(t => s += ln(X(x0), Y(t), X(x1), Y(t), 'var(--line)', 1));
  // fills
  (o.fills || []).forEach(fl => {
    const n = 120; let d = `M${X(fl.a)},${Y(fl.base ?? 0)}`;
    for (let i = 0; i <= n; i++) { const xv = fl.a + (fl.b - fl.a) * i / n; d += ` L${X(xv)},${Y(clamp(fl.f(xv), y0, y1))}`; }
    d += ` L${X(fl.b)},${Y(fl.base ?? 0)} Z`;
    s += `<path d="${d}" fill="${fl.c}" fill-opacity="${fl.op ?? .18}" stroke="none"/>`;
  });
  // axes
  const ay = (y0 <= 0 && y1 >= 0) ? Y(0) : Y(y0), ax = (x0 <= 0 && x1 >= 0) ? X(0) : X(x0);
  s += arrow(X(x0), ay, X(x1) + 8, ay, INK, 1.4) + arrow(ax, Y(y0), ax, Y(y1) - 8, INK, 1.4);
  (o.xt || []).forEach((t, i) => o.xtl !== false && (s += tx(X(t), ay + 16, (o.xtl ? o.xtl[i] : t), { a: 'middle', fs: 11, f: 'var(--f-mono)' })));
  (o.yt || []).forEach((t, i) => o.ytl !== false && (s += tx(ax - 6, Y(t) + 4, (o.ytl ? o.ytl[i] : t), { a: 'end', fs: 11, f: 'var(--f-mono)' })));
  if (o.xl) s += tx(X(x1), ay + (o.xlDy ?? 32), o.xl, { a: 'end', fs: 12.5, c: INK });
  if (o.yl) s += tx(ax + 8, Y(y1) + 2, o.yl, { fs: 12.5, c: INK });
  // curves
  (o.fns || []).forEach(fn => {
    const a = fn.a ?? x0, b = fn.b ?? x1, n = fn.n || 240; let d = '', pen = false;
    for (let i = 0; i <= n; i++) {
      const xv = a + (b - a) * i / n, yv = fn.f(xv);
      if (!isFinite(yv) || yv > y1 * 1.05 + 1e-9 && y1 > 0 || yv < y0 - (y1 - y0) * .05) { pen = false; continue; }
      d += (pen ? ' L' : ' M') + X(xv).toFixed(1) + ',' + Y(yv).toFixed(1); pen = true;
    }
    s += `<path d="${d}" fill="none" stroke="${fn.c || INK}" stroke-width="${fn.w || 2.4}" ${fn.dash ? `stroke-dasharray="${fn.dash}"` : ''} stroke-linejoin="round" stroke-linecap="round"/>`;
    if (fn.label) { const lx = fn.lx ?? b; s += tx(X(lx) + (fn.ldx ?? 6), Y(fn.f(lx)) + (fn.ldy ?? 4), fn.label, { c: fn.c || INK, fs: 12, w: 600, a: fn.la || 'start' }); }
  });
  (o.segs || []).forEach(g => { let d = g.p.map((p, i) => (i ? 'L' : 'M') + X(p[0]) + ',' + Y(p[1])).join(' '); s += `<path d="${d}" fill="none" stroke="${g.c || INK}" stroke-width="${g.w || 2.4}" ${g.dash ? `stroke-dasharray="${g.dash}"` : ''} stroke-linejoin="round"/>`; if (g.label) s += tx(X(g.lp[0]), Y(g.lp[1]), g.label, { c: g.c || INK, fs: 12, w: 600, a: g.la || 'start' }); });
  (o.hl || []).forEach(l => s += ln(X(x0), Y(l.y), X(l.x ?? x1), Y(l.y), l.c || MUT, 1.2, '5 4') + (l.label ? tx(X(x0) + 6, Y(l.y) - 5, l.label, { fs: 11.5, c: l.c || MUT }) : ''));
  (o.vl || []).forEach(l => s += ln(X(l.x), Y(y0), X(l.x), Y(l.y ?? y1), l.c || MUT, 1.2, '5 4') + (l.label ? tx(X(l.x), ay + (l.dy ?? 16), l.label, { fs: 11.5, a: 'middle', c: l.c || MUT }) : ''));
  (o.marks || []).forEach(m => s += `<circle cx="${X(m.x)}" cy="${Y(m.y)}" r="${m.r || 4}" fill="${m.c || ACC}"/>` + (m.label ? tx(X(m.x) + (m.dx ?? 8), Y(m.y) + (m.dy ?? -8), m.label, { fs: 12, c: m.lc || INK, a: m.a || 'start' }) : ''));
  (o.text || []).forEach(t => s += tx(X(t[0]), Y(t[1]), t[2], Object.assign({ c: INK, fs: 12 }, t[3] || {})));
  if (o.extra) s += o.extra(X, Y);
  return svg(W, H, s, o.label) + (o.cap ? `<figcaption>${o.cap}</figcaption>` : '');
}


const dot = (x, y, c = INK, r = 3) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
const box = (x, y, w, h, fill = 'var(--surface)', stroke = INK, r = 6, sw = 1.6) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const cap = s => `<figcaption>${s}</figcaption>`;
const circ = (x, y, r, fill = 'none', stroke = INK, sw = 1.6) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const pth = (d, stroke = INK, sw = 1.8, fill = 'none', dash = '') => `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${dash ? `stroke-dasharray="${dash}"` : ''} stroke-linejoin="round" stroke-linecap="round"/>`;
const bar = (x, y, w, h, c, lab, val) => `<rect x="${x}" y="${y - h}" width="${w}" height="${h}" rx="3" fill="${c}"/>` + (lab ? tx(x + w / 2, y + 15, lab, { a: 'middle', fs: 11 }) : '') + (val != null ? tx(x + w / 2, y - h - 5, val, { a: 'middle', fs: 11, c: INK, f: 'var(--f-mono)' }) : '');

/* ---- shared diagram helpers ---- */
const U9 = 'var(--u9)', S2 = 'var(--surface-2)', SF = 'var(--surface)';
/* labelled rounded node centred on (x, y) */
const node = (x, y, w, h, label, col = INK, o = {}) => box(x - w / 2, y - h / 2, w, h, o.fill || S2, col, o.r ?? 10, o.sw ?? 2) +
  (o.sub ? tx(x, y - 3, label, { a: 'middle', fs: o.fs || 13, c: INK, w: 700 }) + tx(x, y + 13, o.sub, { a: 'middle', fs: o.sfs || 11 }) : tx(x, y + 4.5, label, { a: 'middle', fs: o.fs || 13, c: INK, w: o.w ?? 700 }));
/* multi-line centred text */
const lines = (x, y, arr, o = {}) => arr.map((s, i) => tx(x, y + i * (o.lh || 14), s, Object.assign({ a: 'middle', fs: 11.5 }, o))).join('');
/* nodes on a circle with curved arrows between them */
function cycleDiag(W, H, cx, cy, R, items, o = {}) {
  let s = ''; const n = items.length, ang = i => -Math.PI / 2 + i * 2 * Math.PI / n;
  for (let i = 0; i < n; i++) {
    const a1 = ang(i) + (o.gap || 0.34), a2 = ang(i + 1) - (o.gap || 0.34);
    const p1 = [cx + R * Math.cos(a1), cy + R * Math.sin(a1)], p2 = [cx + R * Math.cos(a2), cy + R * Math.sin(a2)];
    s += pth(`M${p1[0]},${p1[1]} A${R},${R} 0 0 1 ${p2[0]},${p2[1]}`, MUT, 1.6) + arrowHead(p2[0], p2[1], a2 + Math.PI / 2, MUT, 8);
  }
  items.forEach((it, i) => { const x = cx + R * Math.cos(ang(i)), y = cy + R * Math.sin(ang(i)); s += node(x, y, o.w || 150, o.h || 46, it[0], it[2] || ACC, { sub: it[1], fs: o.fs || 13, sfs: o.sfs || 10.5 }); });
  if (o.center) s += lines(cx, cy - (o.center.length - 1) * 8 + 4, o.center, { fs: 13, c: INK, w: 700, lh: 16 });
  return svg(W, H, s, o.label || 'cycle diagram');
}
/* vertical or horizontal chain of nodes */
function chain(W, H, items, o = {}) {
  let s = ''; const n = items.length, vert = o.vert;
  const pos = i => vert ? [W / 2 + (o.dx || 0), (o.y0 || 34) + i * (o.step || 56)] : [(o.x0 || 70) + i * (o.step || 110), H / 2];
  items.forEach((it, i) => { const [x, y] = pos(i); if (i < n - 1) { const [x2, y2] = pos(i + 1); s += vert ? arrow(x, y + (o.h || 40) / 2 + 2, x2, y2 - (o.h || 40) / 2 - 3, MUT, 1.6) : arrow(x + (o.w || 96) / 2 + 2, y, x2 - (o.w || 96) / 2 - 3, y2, MUT, 1.6); }
    s += node(x, y, o.w || 96, o.h || 40, it[0], it[2] || ACC, { sub: it[1], fs: o.fs || 12.5, sfs: o.sfs || 10.5 }); });
  if (o.side) s += o.side;
  return svg(W, H, s, o.label || 'flow diagram');
}
/* hexagonal sugar ring (pyranose) centred at (x, y) */
const hexRing = (x, y, r = 26, col = C1, lab = '') => { const p = [...Array(6)].map((_, i) => [x + r * Math.cos(Math.PI / 6 + i * Math.PI / 3), y + r * Math.sin(Math.PI / 6 + i * Math.PI / 3)]);
  return `<polygon points="${p.map(q => q.join(',')).join(' ')}" fill="${col}" fill-opacity=".14" stroke="${col}" stroke-width="2"/>` + tx(p[5][0] + 3, p[5][1] - 1, 'O', { fs: 11, c: col, w: 700 }) + (lab ? tx(x, y + 4, lab, { a: 'middle', fs: 11, c: INK, w: 600 }) : ''); };
const pentRing = (x, y, r = 24, col = C2, lab = '') => { const p = [...Array(5)].map((_, i) => [x + r * Math.cos(-Math.PI / 2 + i * 2 * Math.PI / 5), y + r * Math.sin(-Math.PI / 2 + i * 2 * Math.PI / 5)]);
  return `<polygon points="${p.map(q => q.join(',')).join(' ')}" fill="${col}" fill-opacity=".14" stroke="${col}" stroke-width="2"/>` + tx(p[0][0], p[0][1] + 12, 'O', { a: 'middle', fs: 11, c: col, w: 700 }) + (lab ? tx(x, y + 8, lab, { a: 'middle', fs: 10.5, c: INK, w: 600 }) : ''); };
/* simple table-like grid of coloured cells */
const cell = (x, y, w, h, fill, t, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r ?? 4}" fill="${fill}" ${o.op != null ? `fill-opacity="${o.op}"` : ''} stroke="${o.st || 'none'}"/>` + (t != null ? tx(x + w / 2, y + h / 2 + 4, t, { a: 'middle', fs: o.fs || 12, c: o.c || INK, w: o.w ?? 700 }) : '');


/* area-of-study colours */
const A1 = 'var(--a1)', A2 = 'var(--a2)', A3 = 'var(--a3)', A4 = 'var(--a4)', A5 = 'var(--a5)';
/* a simple front-facing figure: head, trunk, arms, legs. (x, y) = top of head; s = scale */
const figure = (x, y, s = 1, col = INK, o = {}) => { const k = v => v * s;
  return circ(x, y + k(12), k(12), o.fill || 'none', col, 2) + ln(x, y + k(24), x, y + k(78), col, 2.6) +
    ln(x, y + k(34), x - k(o.armsOut ? 36 : 22), y + k(o.armsOut ? 30 : 66), col, 2.4) + ln(x, y + k(34), x + k(o.armsOut ? 36 : 22), y + k(o.armsOut ? 30 : 66), col, 2.4) +
    ln(x, y + k(78), x - k(o.legsOut ? 24 : 12), y + k(124), col, 2.6) + ln(x, y + k(78), x + k(o.legsOut ? 24 : 12), y + k(124), col, 2.6); };

const DIAG = {
  /* ============ UNIT 1 · physiology and training ============ */
  coachcycle: () => cycleDiag(520, 330, 260, 168, 118, [['Plan', 'goals, session', A3], ['Deliver', 'coach the session', A3], ['Observe', 'watch performance', A1], ['Analyse', 'video, notation, data', A1], ['Feedback', 'KR, KP, targets', A2]], { center: ['the coaching', 'process'], label: 'The coaching process as a cycle' }) + cap('Real-time observation is the weak link: technology makes “observe” and “analyse” objective, repeatable and recordable.'),

  levers: () => { const W = 620, H = 250; let s = '';
    const panel = (x0, title, order, ex) => { const y = 110, L = 170; let p = ln(x0, y, x0 + L, y, INK, 5);
      const pos = { 1: { F: .5, E: .08, L: .92 }, 2: { F: .06, L: .5, E: .94 }, 3: { F: .06, E: .42, L: .94 } }[order];
      const fx = x0 + L * pos.F, ex_ = x0 + L * pos.E, lx = x0 + L * pos.L;
      p += `<polygon points="${fx},${y + 4} ${fx - 13},${y + 26} ${fx + 13},${y + 26}" fill="${A3}" fill-opacity=".25" stroke="${A3}" stroke-width="2"/>` + tx(fx, y + 42, 'F', { a: 'middle', c: A3, w: 700, fs: 13 });
      p += arrow(ex_, y + 50, ex_, y + 6, A1, 2.4) + tx(ex_, y + 64, 'E', { a: 'middle', c: A1, w: 700, fs: 13 });
      p += box(lx - 13, y - 30, 26, 26, 'var(--surface-2)', A2, 4, 2) + arrow(lx, y - 4, lx, y + 22, A2, 2) + tx(lx, y - 38, 'L', { a: 'middle', c: A2, w: 700, fs: 13 });
      p += tx(x0 + L / 2, 30, title, { a: 'middle', c: INK, w: 700, fs: 14 }) + tx(x0 + L / 2, 48, `${['', 'fulcrum', 'load', 'effort'][order]} in the middle`, { a: 'middle', fs: 11.5 }) + lines(x0 + L / 2, 200, ex, { fs: 11.5, c: INK });
      return p; };
    s += panel(20, '1st order', 1, ['neck (heading)', 'elbow extension (triceps)']) + panel(225, '2nd order', 2, ['ankle plantar flexion', 'mechanical advantage']) + panel(430, '3rd order', 3, ['elbow flexion, knee extension', 'speed and range; MA < 1']);
    return svg(W, H, s, 'Three orders of lever with fulcrum, effort and load') + cap('Remember “FLE 1-2-3”: what is in the middle — Fulcrum (1st), Load (2nd), Effort (3rd).'); },

  planes: () => { const W = 620, H = 250; let s = '';
    const P = (x0, title, plane, axis, eg, col) => { let p = tx(x0 + 95, 22, title, { a: 'middle', c: INK, w: 700, fs: 14 }) + figure(x0 + 95, 40, 1, INK, { armsOut: plane === 'frontal', legsOut: plane === 'frontal' });
      if (plane === 'sagittal') p += `<rect x="${x0 + 93}" y="36" width="4" height="138" fill="${col}" fill-opacity=".45"/>` + ln(x0 + 40, 118, x0 + 150, 118, col, 2.4, '6 4') + tx(x0 + 152, 122, 'axis', { fs: 11, c: col });
      if (plane === 'frontal') p += `<rect x="${x0 + 40}" y="36" width="110" height="138" rx="6" fill="${col}" fill-opacity=".12" stroke="${col}"/>` + circ(x0 + 95, 118, 6, col, col) + tx(x0 + 105, 112, 'axis (into page)', { fs: 11, c: col });
      if (plane === 'transverse') p += `<ellipse cx="${x0 + 95}" cy="118" rx="58" ry="12" fill="${col}" fill-opacity=".18" stroke="${col}"/>` + ln(x0 + 95, 30, x0 + 95, 176, col, 2.4, '6 4') + tx(x0 + 102, 34, 'axis', { fs: 11, c: col });
      return p + lines(x0 + 95, 200, [plane + ' plane · ' + axis + ' axis', eg], { fs: 11.5, c: INK }); };
    s += P(10, 'Sagittal', 'sagittal', 'transverse', 'flexion/extension · somersault', A1) + P(215, 'Frontal', 'frontal', 'frontal (AP)', 'abduction/adduction · cartwheel', A2) + P(420, 'Transverse', 'transverse', 'longitudinal', 'rotation · full twist', A3);
    return svg(W, H, s, 'Three planes and their axes') + cap('The movement happens <i>in</i> the plane and turns <i>about</i> the axis at right angles to it.'); },

  synovial: () => { const W = 520, H = 300; let s = '';
    s += pth('M200,20 L200,110 Q260,150 320,110 L320,20', INK, 2, 'var(--surface-2)') + pth('M200,280 L200,180 Q260,150 320,180 L320,280', INK, 2, 'var(--surface-2)');
    s += pth('M203,108 Q260,146 317,108', 'var(--info)', 7) + pth('M203,182 Q260,152 317,182', 'var(--info)', 7);
    s += pth('M182,92 Q170,145 182,198 M338,92 Q350,145 338,198', A1, 3) + `<path d="M204,118 Q260,152 316,118 L316,172 Q260,154 204,172 Z" fill="var(--info)" fill-opacity=".14"/>`;
    s += pth('M190,70 L186,220 M330,70 L334,220', A4, 4, 'none', '2 5');
    const lab = (x, y, x2, y2, t) => ln(x, y, x2, y2, MUT, 1) + tx(x2 + (x2 > x ? 4 : -4), y2 + 4, t, { a: x2 > x ? 'start' : 'end', fs: 12, c: INK });
    s += lab(300, 120, 400, 60, 'articular cartilage') + lab(260, 145, 400, 140, 'synovial fluid (cavity)') + lab(345, 150, 400, 200, 'synovial membrane / joint capsule') + lab(188, 210, 110, 240, 'ligament') + lab(230, 40, 110, 40, 'bone');
    return svg(W, H, s, 'Structure of a synovial joint') + cap('Cartilage reduces friction and absorbs shock; synovial fluid lubricates; ligaments join bone to bone; the capsule encloses the joint.'); },

  musclemap: () => { const W = 620, H = 360; let s = '';
    const body = (cx) => circ(cx, 34, 20, 'var(--surface-2)', INK) + box(cx - 42, 58, 84, 120, 'var(--surface-2)', INK, 18) + box(cx - 66, 62, 22, 108, 'var(--surface-2)', INK, 10) + box(cx + 44, 62, 22, 108, 'var(--surface-2)', INK, 10) + box(cx - 38, 178, 34, 150, 'var(--surface-2)', INK, 12) + box(cx + 4, 178, 34, 150, 'var(--surface-2)', INK, 12);
    const m = (x, y, rx, ry, c) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${c}" fill-opacity=".55"/>`;
    const L = (x, y, x2, y2, t) => ln(x, y, x2, y2, MUT, 1) + tx(x2 + (x2 > x ? 4 : -4), y2 + 4, t, { a: x2 > x ? 'start' : 'end', fs: 11.5, c: INK });
    s += tx(150, 352, 'FRONT', { a: 'middle', fs: 11, w: 700 }) + tx(470, 352, 'BACK', { a: 'middle', fs: 11, w: 700 });
    s += body(150) + m(130, 82, 17, 12, A1) + m(170, 82, 17, 12, A1) + m(98, 70, 10, 10, A2) + m(202, 70, 10, 10, A2) + m(95, 110, 8, 18, A3) + m(205, 110, 8, 18, A3) + m(150, 135, 18, 30, A4) + m(129, 220, 13, 32, A5) + m(171, 220, 13, 32, A5) + m(128, 285, 8, 26, A2) + m(172, 285, 8, 26, A2);
    s += L(130, 82, 40, 70, 'pectoralis major') + L(98, 70, 40, 44, 'deltoid') + L(95, 115, 40, 120, 'biceps brachii') + L(150, 140, 250, 150, 'abdominals') + L(171, 220, 250, 215, 'quadriceps') + L(172, 285, 250, 290, 'tibialis anterior');
    s += body(470) + m(470, 70, 34, 10, A1) + m(450, 115, 14, 30, A2) + m(490, 115, 14, 30, A2) + m(470, 150, 7, 32, A3) + m(418, 112, 8, 18, A4) + m(522, 112, 8, 18, A4) + m(450, 190, 16, 14, A5) + m(490, 190, 16, 14, A5) + m(451, 236, 13, 30, A1) + m(489, 236, 13, 30, A1) + m(451, 290, 11, 18, A3) + m(489, 290, 11, 18, A3) + m(451, 314, 9, 8, A4) + m(489, 314, 9, 8, A4);
    s += L(470, 70, 560, 50, 'trapezius') + L(490, 115, 560, 100, 'latissimus dorsi') + L(470, 158, 560, 150, 'erector spinae') + L(418, 112, 350, 100, 'triceps brachii') + L(450, 190, 350, 190, 'gluteus maximus') + L(451, 236, 350, 236, 'hamstrings') + L(489, 290, 560, 280, 'gastrocnemius') + L(489, 314, 560, 318, 'soleus');
    return svg(W, H, s, 'Major skeletal muscles, front and back') + cap('The fourteen muscles named in the specification (schematic positions).'); },

  antag: () => { const W = 520, H = 250; let s = '';
    s += box(60, 110, 200, 22, 'var(--surface-2)', INK, 10) + pth('M260,121 L380,40', INK, 22, 'none') + pth('M260,121 L380,40', 'var(--surface-2)', 18, 'none') + circ(260, 121, 12, 'var(--surface)', INK) + tx(260, 160, 'elbow (fulcrum)', { a: 'middle', fs: 11.5 });
    s += `<ellipse cx="165" cy="98" rx="80" ry="18" fill="${A1}" fill-opacity=".6"/>` + tx(165, 70, 'biceps — agonist (contracts, shortens)', { a: 'middle', fs: 12, c: A1, w: 700 });
    s += `<ellipse cx="160" cy="143" rx="86" ry="10" fill="${A2}" fill-opacity=".45"/>` + tx(160, 172, 'triceps — antagonist (relaxes, lengthens)', { a: 'middle', fs: 12, c: A2, w: 700 });
    s += pth('M400,90 A80,80 0 0 0 360,30', A3, 2) + arrowHead(360, 30, -2.4, A3) + tx(410, 70, 'flexion', { fs: 12, c: A3, w: 700 }) + tx(60, 220, 'Muscles can only pull, so they work in pairs on opposite sides of a joint.', { fs: 11.5 });
    return svg(W, H, s, 'Antagonistic pair at the elbow') + cap('Upward phase of a biceps curl: biceps concentric (agonist), triceps relaxing (antagonist).'); },

  periodise: () => { const W = 620, H = 270; let s = '';
    const ph = [['General prep', 0, 3, A3], ['Specific prep', 3, 5.5, A3], ['Pre-comp', 5.5, 7, A4], ['Competition', 7, 10.5, A1], ['Transition', 10.5, 12, A2]], X = m => 40 + m * 45;
    ph.forEach(([n, a, b, c]) => s += cell(X(a) + 1, 196, X(b) - X(a) - 2, 26, c, n, { op: .25, fs: 10.5 }));
    for (let w = 0; w <= 52; w += 1) s += ln(X(w / 52 * 12), 226, X(w / 52 * 12), 232, MUT, 1);
    s += tx(40, 250, 'macrocycle = 1 year · mesocycles = coloured blocks · microcycles = weekly ticks', { fs: 11.5 });
    s += pth(`M${X(0)},60 C${X(3)},55 ${X(5)},90 ${X(7)},130 S${X(10)},165 ${X(12)},150`, A3, 2.6) + tx(X(1), 50, 'volume', { fs: 12, c: A3, w: 700 });
    s += pth(`M${X(0)},170 C${X(3)},160 ${X(5)},110 ${X(7)},80 S${X(9.5)},62 ${X(10.3)},70 L${X(12)},160`, A1, 2.6) + tx(X(6.2), 74, 'intensity', { fs: 12, c: A1, w: 700, a: 'end' });
    s += arrow(X(9.8), 40, X(9.8), 64, INK, 1.6) + tx(X(9.8), 34, 'taper → peak', { a: 'middle', fs: 11.5, c: INK });
    return svg(W, H, s, 'Periodisation of a training year') + cap('Volume falls and intensity rises towards the competition phase; tapering cuts volume before the main event.'); },

  atp: () => { const W = 600, H = 160; let s = '';
    s += node(80, 60, 90, 36, 'Adenosine', INK) + ['P', 'P', 'P'].map((p, i) => circ(150 + i * 40, 60, 15, 'var(--surface-2)', A1) + tx(150 + i * 40, 65, p, { a: 'middle', w: 700, c: A1 })).join('') + ln(125, 60, 135, 60) + ln(165, 60, 175, 60) + ln(205, 60, 215, 60, A1, 3, '4 3');
    s += arrow(250, 60, 320, 60, INK, 2) + tx(285, 48, 'ATPase', { a: 'middle', fs: 12, w: 700, c: INK });
    s += node(380, 60, 90, 36, 'ADP', INK) + circ(450, 60, 15, 'var(--surface-2)', A1) + tx(450, 65, 'Pᵢ', { a: 'middle', w: 700, c: A1 }) + tx(490, 64, '+ energy', { fs: 13, c: A4, w: 700 });
    s += tx(40, 120, 'The bond to the last phosphate holds the energy used for muscle contraction.', { fs: 12 }) + tx(40, 140, 'ATP stores last 2–3 s; ATP is resynthesised by the ATP-PC, lactate and aerobic systems.', { fs: 11.5 });
    return svg(W, H, s, 'ATP breakdown'); },

  energycont: () => plot({ w: 560, h: 300, x: [0, 180], y: [0, 105], xt: [0, 30, 60, 90, 150, 180], yt: [0, 50, 100], xl: 'duration of maximal exercise (s)', yl: '% contribution', label: 'Energy continuum',
    fns: [{ f: t => 100 * Math.exp(-Math.pow(t / 8, 2)), c: A1, label: 'ATP-PC', lx: 6, ldy: -6 }, { f: t => 85 * Math.exp(-Math.pow((t - 40) / 38, 2)), c: A4, label: 'anaerobic glycolysis', lx: 40, ldy: -10, la: 'middle' }, { f: t => 100 * (1 - Math.exp(-t / 70)), c: A3, label: 'aerobic', lx: 150, ldy: -10 }],
    vl: [{ x: 10, label: '≈10 s' }, { x: 120, label: '≈2 min' }], cap: 'All three systems work together; the intensity and duration decide which predominates. Thresholds are where one system’s supply runs short.' }),

  gicurve: () => plot({ w: 540, h: 290, x: [0, 150], y: [3, 9], xt: [0, 30, 60, 90, 120, 150], yt: [4, 5, 6, 7, 8], xl: 'time after eating (min)', yl: 'blood glucose (mmol/L)', label: 'Blood glucose after high- and low-GI foods',
    fns: [{ f: t => 4.5 + 3.8 * Math.exp(-Math.pow((t - 35) / 20, 2)) - 0.9 * Math.exp(-Math.pow((t - 95) / 22, 2)), c: A1, label: 'high GI', lx: 40, ldy: -8 }, { f: t => 4.5 + 1.5 * Math.exp(-Math.pow((t - 70) / 40, 2)), c: A3, label: 'low GI', lx: 120, ldy: -8 }],
    hl: [{ y: 4.5, label: 'fasting level' }], cap: 'High-GI food gives a rapid spike and can cause a dip below normal (rebound hypoglycaemia); low-GI food gives a slower, steadier release.' }),

  /* ============ UNIT 1 · psychology ============ */
  hollander: () => { const W = 520, H = 280; let s = '';
    s += circ(200, 140, 120, 'var(--surface-2)', A2, 2) + circ(200, 140, 80, 'var(--surface)', A2, 2) + circ(200, 140, 40, `color-mix(in srgb, ${A2} 25%, transparent)`, A2, 2);
    s += tx(200, 144, 'core', { a: 'middle', w: 700, c: INK }) + tx(200, 88, 'typical responses', { a: 'middle', fs: 12, c: INK }) + tx(200, 34, 'role-related behaviour', { a: 'middle', fs: 12, c: INK });
    s += arrow(470, 60, 330, 90, MUT) + arrow(470, 220, 330, 190, MUT) + lines(470, 130, ['social', 'environment', '(situation)'], { fs: 12, c: INK });
    s += tx(20, 272, 'inner = stable, deep beliefs · outer = most changeable, shaped by the situation', { fs: 11.5 });
    return svg(W, H, s, 'Hollander’s model of personality'); },

  eysenck: () => { const W = 520, H = 320, cx = 260, cy = 160; let s = '';
    s += arrow(40, cy, 480, cy) + arrow(480, cy, 40, cy) + arrow(cx, 300, cx, 20) + arrow(cx, 20, cx, 300);
    s += tx(40, cy - 8, 'INTROVERT', { fs: 12, w: 700, c: INK }) + tx(480, cy - 8, 'EXTROVERT', { a: 'end', fs: 12, w: 700, c: INK }) + tx(cx + 8, 32, 'NEUROTIC (unstable)', { fs: 12, w: 700, c: INK }) + tx(cx + 8, 296, 'STABLE', { fs: 12, w: 700, c: INK });
    s += lines(150, 80, ['anxious, moody,', 'rigid, reserved'], { c: A2 }) + lines(370, 80, ['touchy, restless,', 'impulsive, excitable'], { c: A1 }) + lines(150, 230, ['calm, careful,', 'reliable, thoughtful'], { c: A3 }) + lines(370, 230, ['sociable, lively,', 'carefree, leader'], { c: A4 });
    return svg(W, H, s, 'Eysenck’s personality dimensions') + cap('Extroverts: low natural arousal, seek stimulation (team, gross skills). Introverts: high natural arousal (individual, fine, closed skills).'); },

  iceberg: () => { const W = 540, H = 280; let s = ''; const moods = ['tension', 'depression', 'anger', 'vigour', 'fatigue', 'confusion'], elite = [42, 40, 43, 66, 40, 41], other = [52, 50, 50, 48, 53, 51];
    const X = i => 70 + i * 78, Y = v => 240 - (v - 30) * 5;
    s += ln(40, Y(50), 520, Y(50), 'var(--info)', 1.6, '6 4') + tx(520, Y(50) - 6, 'population mean (“waterline”)', { a: 'end', fs: 11, c: 'var(--info)' });
    s += pth(elite.map((v, i) => (i ? 'L' : 'M') + X(i) + ',' + Y(v)).join(' '), A1, 3) + pth(other.map((v, i) => (i ? 'L' : 'M') + X(i) + ',' + Y(v)).join(' '), MUT, 2, 'none', '5 4');
    elite.forEach((v, i) => s += dot(X(i), Y(v), A1, 4)); moods.forEach((m, i) => s += tx(X(i), 262, m, { a: 'middle', fs: 11.5, c: INK }));
    s += tx(X(3) + 10, Y(66) - 8, 'elite: iceberg profile', { fs: 12, c: A1, w: 700 }) + tx(X(4), Y(55) - 8, 'less successful', { fs: 11.5, c: MUT });
    return svg(W, H, s, 'POMS iceberg profile'); },

  arousaltheories: () => { const W = 640, H = 230; let s = '';
    const panel = (x0, title, path, extra = '') => box(x0, 20, 190, 170, 'var(--surface)', 'var(--line-2)', 10, 1) + arrow(x0 + 20, 170, x0 + 180, 170, INK, 1.2) + arrow(x0 + 20, 170, x0 + 20, 32, INK, 1.2) + tx(x0 + 100, 206, title, { a: 'middle', fs: 12.5, w: 700, c: INK }) + tx(x0 + 176, 186, 'arousal', { a: 'end', fs: 10.5 }) + tx(x0 + 26, 42, 'performance', { fs: 10.5 }) + pth(path, A2, 2.6) + extra;
    s += panel(10, 'Drive theory', 'M40,160 L180,50', tx(110, 80, 'P = H × D', { fs: 11, c: A2 }));
    s += panel(225, 'Inverted-U', 'M245,160 Q320,-10 395,160', ln(320, 170, 320, 76, MUT, 1, '4 3') + tx(320, 64, 'optimum', { a: 'middle', fs: 10.5 }));
    s += panel(440, 'Catastrophe', 'M460,160 Q520,40 555,50 L560,150 L600,160', pth('M600,150 Q540,140 520,120', MUT, 1.4, 'none', '4 3') + tx(566, 110, 'drop', { fs: 10.5, c: A1 }) + tx(470, 64, 'high cognitive anxiety', { fs: 9.5 }));
    return svg(W, H, s, 'Three theories of arousal and performance') + cap('Drive: straight line. Inverted-U: best at moderate arousal. Catastrophe: with high cognitive anxiety, a sudden drop past the optimum.'); },

  bandura: () => { const W = 580, H = 270; let s = '';
    [['Performance accomplishments', 'past success — strongest'], ['Vicarious experiences', 'seeing similar others succeed'], ['Verbal persuasion', 'encouragement'], ['Emotional arousal', 'interpreting and controlling nerves']].forEach(([a, b], i) => { const y = 40 + i * 60; s += node(130, y, 220, 44, a, A2, { sub: b, fs: 12.5 }) + arrow(242, y, 330, 135, MUT, 1.4); });
    s += node(400, 135, 130, 50, 'Self-efficacy', A2, { fill: 'var(--accent-soft)', fs: 14 }) + arrow(466, 135, 500, 135) + lines(540, 120, ['expectation', 'of success →', 'performance'], { fs: 11.5, c: INK });
    return svg(W, H, s, 'Bandura’s four sources of self-efficacy'); },

  /* ============ UNIT 1 · skill acquisition ============ */
  continua: () => { const W = 600, H = 300; let s = '';
    [['closed', 'open', .82], ['self-paced', 'externally paced', .75], ['simple', 'complex', .7], ['low organisation', 'high organisation', .35], ['discrete · serial', 'continuous', .12], ['fine', 'gross', .72]].forEach(([a, b, p], i) => { const y = 36 + i * 44; s += ln(150, y, 450, y, 'var(--line-2)', 4) + tx(140, y + 4, a, { a: 'end', fs: 12, c: INK }) + tx(460, y + 4, b, { fs: 12, c: INK }) + circ(150 + p * 300, y, 8, A3, 'var(--surface)', 2); });
    s += tx(300, 290, '● a netball pass placed on each continuum', { a: 'middle', fs: 11.5, c: A3 });
    return svg(W, H, s, 'Skill classification continua') + cap('Place skills on continua and justify — most skills have elements of both ends.'); },

  curves: () => { const W = 640, H = 200; let s = '';
    const panel = (x0, title, d) => box(x0, 16, 145, 140, 'var(--surface)', 'var(--line-2)', 10, 1) + arrow(x0 + 14, 140, x0 + 138, 140, INK, 1.2) + arrow(x0 + 14, 140, x0 + 14, 26, INK, 1.2) + pth(d, A3, 2.6) + tx(x0 + 72, 178, title, { a: 'middle', fs: 12.5, w: 700, c: INK });
    s += panel(10, 'Linear', 'M24,130 L130,40') + panel(170, 'Positive', 'M184,130 Q260,128 290,40') + panel(330, 'Negative', 'M344,130 Q360,40 450,36') + panel(490, 'Plateau', 'M504,130 Q530,80 560,78 L585,78 Q600,70 612,40');
    s += tx(20, 196, 'x-axis: trials / time · y-axis: performance', { fs: 11 });
    return svg(W, H, s, 'Learning curves'); },

  darmmm: () => chain(640, 110, [['Demonstration', '', A3], ['Attention', '', A3], ['Retention', '', A3], ['Motor reprod.', '', A3], ['Motivation', '', A3], ['Matching', 'performance', A1]], { x0: 56, step: 105, w: 96, fs: 11.5, label: 'Bandura’s observational learning model' }) + cap('Bandura’s observational learning (DARMMM).'),

  /* ============ UNIT 1 · sport and society ============ */
  stages: () => { const W = 620, H = 210; let s = '';
    [['Stage 1', 'to c.1828', 'Boy culture, bullying and brutality', 'mob games, violence, few rules'], ['Stage 2', 'c.1828–1842', 'Thomas Arnold and social control', 'prefects, organised games, Muscular Christianity'], ['Stage 3', 'c.1842–1914', 'The cult of athleticism', 'compulsory games, fixtures, character building']].forEach(([a, b, c, d], i) => {
      const x = 20 + i * 200; s += box(x, 30, 180, 150, 'var(--surface-2)', A4, 12, 2) + tx(x + 12, 56, a, { fs: 14, w: 700, c: A4 }) + tx(x + 168, 56, b, { a: 'end', fs: 11, f: 'var(--f-mono)' }) + lines(x + 90, 90, c.length > 24 ? [c.slice(0, c.lastIndexOf(' ', 24)), c.slice(c.lastIndexOf(' ', 24) + 1)] : [c], { c: INK, w: 700, fs: 12.5 }) + lines(x + 90, 140, d.split(', ').map((q, j, arr) => q + (j < arr.length - 1 ? ',' : '')), { fs: 11 });
      if (i < 2) s += arrow(x + 182, 105, x + 198, 105, MUT); });
    return svg(W, H, s, 'Three stages of development of games in public schools'); },

  stacking: () => { const W = 540, H = 300; let s = '';
    s += box(40, 20, 460, 260, 'color-mix(in srgb, var(--good) 12%, transparent)', 'var(--good)', 6, 2) + ln(270, 20, 270, 280, 'var(--good)', 1.5) + circ(270, 150, 36, 'none', 'var(--good)', 1.5);
    s += `<rect x="190" y="20" width="160" height="260" fill="${A2}" fill-opacity=".12" stroke="${A2}" stroke-dasharray="6 4"/>` + tx(270, 44, 'CENTRAL: decision-making', { a: 'middle', fs: 11.5, c: A2, w: 700 });
    [[80, 60], [80, 240], [460, 60], [460, 240]].forEach(([x, y]) => s += circ(x, y, 11, `color-mix(in srgb, ${A4} 40%, transparent)`, A4));
    [[270, 90], [230, 150], [310, 150], [270, 210]].forEach(([x, y]) => s += circ(x, y, 11, `color-mix(in srgb, ${A2} 40%, transparent)`, A2));
    s += tx(80, 272, 'peripheral: speed, power', { a: 'middle', fs: 11, c: A4 }) + tx(460, 30, 'peripheral', { a: 'middle', fs: 11, c: A4 });
    return svg(W, H, s, 'Centrality and stacking on a pitch') + cap('Stacking over-represents ethnic-minority players in peripheral positions; central positions, and later coaching roles, go disproportionately to white players.'); },

  pppcycle: () => cycleDiag(520, 320, 260, 162, 112, [['1 · Self-analysis', 'data, norms, profiling', A1], ['2 · SMART targets', 'justified by theory', A2], ['3 · Programme + data', '≥ 10 weeks; retests', A3], ['4 · Evaluation', 'conclusions, next steps', A4]], { center: ['Personal', 'Performance', 'Profile'], w: 170, label: 'Stages of the Personal Performance Profile' })
};
