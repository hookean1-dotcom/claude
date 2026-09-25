/* ==========================================================
   Diagrams: to-scale SVG plots + bespoke schematic figures
   All colours come from theme tokens so both themes read.
   ========================================================== */
const INK = 'var(--ink)', MUT = 'var(--muted)', LN = 'var(--line-2)', ACC = 'var(--accent)';
const C1 = 'var(--u1)', C2 = 'var(--u2)', C3 = 'var(--u3)', C4 = 'var(--u4)', C5 = 'var(--u5)', GOOD = 'var(--good)', BAD = 'var(--bad)', INFO = 'var(--info)';
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

