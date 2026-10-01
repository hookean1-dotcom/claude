/* ==========================================================
   Diagrams: to-scale SVG plots + bespoke schematic figures
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

/* ---- shared food-diagram helpers ---- */
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

const DIAG = {
  /* ============ UNIT 1 ============ */
  glucose: () => { let s = hexRing(110, 90, 44, C1) ;
    const p = [...Array(6)].map((_, i) => [110 + 44 * Math.cos(Math.PI / 6 + i * Math.PI / 3), 90 + 44 * Math.sin(Math.PI / 6 + i * Math.PI / 3)]);
    const lab = [['C₁', 'OH', 1], ['', '', 0], ['C₂…C₄', '', 0], ['C₅', 'CH₂OH', -1], ['', '', 0], ['', '', 0]];
    s += tx(p[0][0] + 6, p[0][1] + 4, 'C1', { fs: 11, c: INK }) + ln(p[0][0], p[0][1], p[0][0] + 26, p[0][1] + 20, INK, 1.4) + tx(p[0][0] + 28, p[0][1] + 32, 'OH', { fs: 12, c: INK, w: 600 });
    s += tx(p[3][0] - 28, p[3][1] + 4, 'C4', { fs: 11, c: INK }) + tx(p[4][0] - 6, p[4][1] - 8, 'C5', { fs: 11, c: INK, a: 'end' }) + ln(p[4][0], p[4][1], p[4][0] - 10, p[4][1] - 28, INK, 1.4) + tx(p[4][0] - 12, p[4][1] - 34, 'CH₂OH (C6)', { fs: 12, c: INK, w: 600, a: 'middle' });
    s += tx(110, 164, 'α-glucose  C₆H₁₂O₆', { a: 'middle', fs: 13, c: INK, w: 700 });
    s += tx(250, 42, 'Monosaccharides', { fs: 13, c: INK, w: 700 }) + lines(250, 62, ['glucose — the main fuel for respiration', 'fructose — fruit, honey (sweetest sugar)', 'galactose — part of lactose in milk'], { a: 'start', fs: 12 });
    s += tx(250, 128, 'Disaccharides (two joined)', { fs: 13, c: INK, w: 700 }) + lines(250, 148, ['sucrose = glucose + fructose', 'lactose = glucose + galactose', 'maltose = glucose + glucose'], { a: 'start', fs: 12 });
    return svg(540, 190, s, 'Structure of glucose and simple sugars') + cap('Glucose is a six-carbon sugar whose atoms form a ring. Monosaccharides join in pairs to make disaccharides.'); },
  condense: () => { let s = hexRing(70, 70, 30, C1, 'glucose') + tx(120, 76, '+', { fs: 22, c: INK, a: 'middle' }) + hexRing(170, 70, 30, C1, 'glucose');
    s += arrow(215, 70, 285, 70, INK) + tx(250, 58, 'condensation', { a: 'middle', fs: 11 }) + tx(250, 92, '− H₂O', { a: 'middle', fs: 12, c: C3, w: 700 });
    s += hexRing(335, 70, 30, C1) + ln(365, 70, 395, 70, INK, 2) + tx(380, 62, 'O', { a: 'middle', fs: 11, c: INK, w: 700 }) + hexRing(425, 70, 30, C1) + tx(380, 120, 'maltose (glycosidic bond)', { a: 'middle', fs: 12, c: INK, w: 600 }) + tx(480, 76, '+ H₂O', { fs: 13, c: C3, w: 700 });
    s += arrow(285, 140, 215, 140, MUT) + tx(250, 158, 'hydrolysis (+ H₂O) — digestion', { a: 'middle', fs: 11.5 });
    return svg(540, 170, s, 'Condensation and hydrolysis') + cap('Condensation joins sugars and releases water; hydrolysis (in digestion) adds water to split them.'); },
  starch: () => { let s = tx(20, 22, 'Amylose — unbranched chain, coils into a helix (≈ 20–30% of starch)', { fs: 12.5, c: INK, w: 700 });
    for (let i = 0; i < 10; i++) s += hexRing(40 + i * 48, 62 + 10 * Math.sin(i * 1.1), 16, C1);
    s += tx(20, 116, 'Amylopectin — branched chain (≈ 70–80%)', { fs: 12.5, c: INK, w: 700 });
    for (let i = 0; i < 10; i++) s += hexRing(40 + i * 48, 156, 16, C1);
    [[3, 1], [7, 1]].forEach(([b]) => { for (let j = 1; j <= 3; j++) s += hexRing(40 + b * 48 + j * 40, 156 + j * 30, 14, C1); });
    s += tx(20, 268, 'Starch is a polysaccharide of many glucose units — the main energy store in plants.', { fs: 12 });
    return svg(540, 280, s, 'Amylose and amylopectin') + cap('Amylose coils into a helix; amylopectin is highly branched. Their ratio affects gelatinisation and texture.'); },
  glycogen: () => { let s = ''; const pts = []; const grow = (x, y, a, d) => { pts.push([x, y]); if (d === 0) return; for (const da of [-0.5, 0.5]) { const nx = x + 40 * Math.cos(a + da), ny = y + 40 * Math.sin(a + da); s += ln(x, y, nx, ny, C1, 2); grow(nx, ny, a + da, d - 1); } };
    for (let k = 0; k < 5; k++) grow(270, 110, k * 2 * Math.PI / 5, 3);
    pts.forEach(([x, y]) => s += circ(x, y, 5, SF, C1, 2)); s += circ(270, 110, 9, C1, C1);
    s += tx(20, 24, 'Glycogen', { fs: 14, c: INK, w: 700 }) + lines(20, 44, ['highly branched glucose polymer', 'stored in liver and muscles', '(animal “starch”)'], { a: 'start', fs: 11.5 });
    s += lines(420, 170, ['many ends → glucose', 'released quickly when', 'blood glucose falls'], { a: 'start', fs: 11.5 });
    return svg(540, 220, s, 'Glycogen structure') + cap('Glycogen’s many branches let enzymes release glucose rapidly for energy.'); },
  aminoacid: () => { let s = tx(160, 60, 'H', { a: 'middle', fs: 18, c: INK, w: 700 }) + ln(160, 70, 160, 92, INK, 2) + tx(160, 112, 'C', { a: 'middle', fs: 20, c: INK, w: 700 }) + ln(160, 122, 160, 144, INK, 2) + tx(160, 166, 'R', { a: 'middle', fs: 20, c: C2, w: 700 });
    s += ln(146, 106, 110, 106, INK, 2) + tx(80, 112, 'H₂N', { a: 'middle', fs: 18, c: C3, w: 700 }) + ln(174, 106, 210, 106, INK, 2) + tx(248, 112, 'COOH', { a: 'middle', fs: 18, c: C5, w: 700 });
    s += tx(80, 140, 'amino group', { a: 'middle', fs: 11, c: C3 }) + tx(248, 140, 'carboxyl (acid) group', { a: 'middle', fs: 11, c: C5 }) + tx(160, 190, 'R = side group (20 kinds)', { a: 'middle', fs: 11, c: C2 });
    s += tx(320, 50, '20 amino acids', { fs: 13, c: INK, w: 700 }) + lines(320, 72, ['9 are indispensable (essential) for adults:', 'histidine, isoleucine, leucine, lysine,', 'methionine, phenylalanine, threonine,', 'tryptophan, valine', '', 'Amino acids join by peptide bonds', '(condensation) to make polypeptides.'], { a: 'start', fs: 11.5 });
    return svg(560, 210, s, 'General structure of an amino acid') + cap('Every amino acid has an amino group, a carboxyl group and a variable R group.'); },
  proteinlevels: () => { let s = ''; const cols = [C1, C2, C3, C4];
    s += tx(70, 24, 'Primary', { a: 'middle', fs: 12.5, c: INK, w: 700 }); for (let i = 0; i < 7; i++) s += circ(20 + i * 16, 60, 7, cols[i % 4], INK, 1); s += tx(70, 100, 'amino acid sequence', { a: 'middle', fs: 10.5 });
    s += tx(200, 24, 'Secondary', { a: 'middle', fs: 12.5, c: INK, w: 700 }); let d = 'M160,90'; for (let i = 0; i <= 40; i++) d += ` L${160 + i * 2},${60 + 22 * Math.sin(i * 0.8)}`; s += pth(d, C2, 2.4) + tx(200, 100, 'α-helix / β-sheet', { a: 'middle', fs: 10.5 });
    s += tx(330, 24, 'Tertiary', { a: 'middle', fs: 12.5, c: INK, w: 700 }) + pth('M300,70 C290,30 350,30 345,55 S300,90 320,95 S370,85 360,60', C3, 2.6) + tx(330, 110, 'folded 3-D shape', { a: 'middle', fs: 10.5 });
    s += tx(460, 24, 'Quaternary', { a: 'middle', fs: 12.5, c: INK, w: 700 }); [[440, 55, C4], [480, 55, C3], [440, 85, C3], [480, 85, C4]].forEach(([x, y, c]) => s += circ(x, y, 17, c, INK, 1.2)); s += tx(460, 118, 'several chains', { a: 'middle', fs: 10.5 });
    return svg(540, 130, s, 'Levels of protein structure') + cap('Heat, acid and whisking break the bonds that hold the secondary and tertiary structure — denaturation.'); },
  triglyceride: () => { let s = box(40, 30, 70, 120, S2, C5, 8, 2) + tx(75, 95, 'glycerol', { a: 'middle', fs: 12, c: INK, w: 700 });
    [50, 90, 130].forEach((y, i) => { s += ln(110, y, 140, y, INK, 2) + tx(125, y - 6, 'ester', { a: 'middle', fs: 9.5 }); let d = `M140,${y}`; for (let k = 0; k < 16; k++) d += ` L${150 + k * 20},${y + (k % 2 ? 6 : -6)}`; if (i === 1) d = `M140,${y}` + [...Array(16)].map((_, k) => ` L${150 + k * 20},${y + (k % 2 ? 6 : -6) + (k > 7 ? (k - 7) * 5 : 0)}`).join(''); s += pth(d, i === 1 ? C2 : C1, 2.4); });
    s += tx(300, 20, 'three fatty acids', { a: 'middle', fs: 12, c: INK, w: 700 }) + tx(470, 128, 'kink = C=C', { fs: 11, c: C2 }) + tx(300, 172, 'glycerol + 3 fatty acids → triglyceride + 3 H₂O', { a: 'middle', fs: 12.5, c: INK });
    return svg(540, 185, s, 'Triglyceride') + cap('A triglyceride is one glycerol joined to three fatty acids by ester links. A double bond puts a kink in an unsaturated chain.'); },
  fattyacids: () => { let s = ''; const row = (y, lab, sub, col, kinks) => { let d = `M40,${y}`, x = 40, yy = y; for (let k = 0; k < 16; k++) { x += 18; const kink = kinks.includes(k); if (kink) yy += 10; d += ` L${x},${yy + (k % 2 ? 6 : -6)}`; } s += pth(d, col, 2.6) + kinks.map(k => tx(40 + (k + 1) * 18, y - 10 + kinks.indexOf(k) * 10, '=', { fs: 16, c: col, w: 700 })).join('') + tx(360, y - 2, lab, { fs: 13, c: INK, w: 700 }) + tx(360, y + 15, sub, { fs: 11 }); };
    row(40, 'Saturated', 'no C=C · straight chains pack → solid (butter, lard)', C2, []);
    row(100, 'Monounsaturated', 'one C=C · olive and rapeseed oil', C5, [7]);
    row(165, 'Polyunsaturated', 'two or more C=C · sunflower oil, oily fish (omega-3)', C1, [4, 10]);
    return svg(640, 205, s, 'Saturated and unsaturated fatty acids') + cap('Double bonds kink the chains so they cannot pack closely — unsaturated fats are liquid oils at room temperature.'); },
  vitd: () => chain(600, 120, [['Sunlight (UVB)', '7-dehydrocholesterol', C5], ['Skin / diet', 'cholecalciferol D3', C5], ['Liver', 'calcidiol', C2], ['Kidneys', 'calcitriol (active)', C1], ['Bones and gut', 'Ca²⁺ absorption', C3]], { w: 104, h: 50, step: 118, x0: 62, label: 'Vitamin D activation' }) + cap('Vitamin D from sunlight or food is activated in two steps, in the liver then the kidneys.'),
  water: () => { let s = circ(120, 90, 34, 'var(--u3)', C3, 2) + tx(120, 96, 'O', { a: 'middle', fs: 22, c: '#fff', w: 700 });
    [[-1, 1], [1, 1]].forEach(([dx]) => { const x = 120 + dx * 52, y = 132; s += ln(120 + dx * 22, 116, x - dx * 10, y - 12, INK, 3) + circ(x, y, 18, SF, C3, 2) + tx(x, y + 5, 'H', { a: 'middle', fs: 15, c: INK, w: 700 }) + tx(x + dx * 24, y + 18, 'δ+', { a: 'middle', fs: 12, c: C2, w: 700 }); });
    s += tx(120, 44, 'δ−', { a: 'middle', fs: 13, c: C3, w: 700 }) + tx(120, 184, 'polar water molecule — a solvent', { a: 'middle', fs: 11.5 });
    s += tx(270, 40, 'Roles of water', { fs: 13, c: INK, w: 700 }) + lines(270, 62, ['• medium for reactions (digestion)', '• transport — blood plasma ≈ 90% water', '• removes waste (urine)', '• temperature control (sweat)', '• lubricates joints and eyes', '• about 60% of adult body mass'], { a: 'start', fs: 12, lh: 18 });
    return svg(540, 200, s, 'Water') + cap('Water is polar, so it dissolves sugars, salts, water-soluble vitamins and waste products.'); },
  fluid: () => { let s = tx(130, 22, 'Water IN (≈ 2.5 L/day)', { a: 'middle', fs: 13, c: INK, w: 700 }) + tx(410, 22, 'Water OUT', { a: 'middle', fs: 13, c: INK, w: 700 });
    const stack = (x, parts) => { let y = 40; parts.forEach(([lab, p, col]) => { const h = p * 2; s += cell(x, y, 160, h - 2, col, null, { op: .25, st: col }) + tx(x + 80, y + h / 2 + 4, `${lab} ${p}%`, { a: 'middle', fs: 11.5, c: INK, w: 600 }); y += h; }); };
    stack(50, [['drinks', 60, C3], ['food', 30, C1], ['metabolic water', 10, C5]]);
    stack(330, [['urine', 60, C5], ['sweat / skin', 18, C2], ['breathing', 14, C3], ['faeces', 8, U9]]);
    s += arrow(215, 140, 320, 140, MUT) + tx(268, 130, 'balance', { a: 'middle', fs: 11 });
    return svg(540, 250, s, 'Fluid balance') + cap('Typical adult water balance: intake must replace losses. Percentages are approximate and change with heat and activity.'); },
  respiration: () => { let s = node(90, 60, 130, 44, 'Glycolysis', C1, { sub: 'cytoplasm · 2 ATP' }) + arrow(160, 60, 205, 60, MUT) + node(280, 60, 140, 44, 'Krebs cycle', C2, { sub: 'mitochondria' }) + arrow(355, 60, 395, 60, MUT) + node(470, 60, 140, 44, 'Electron transport', C3, { sub: '≈ 30+ ATP' });
    s += tx(90, 110, 'glucose → pyruvate', { a: 'middle', fs: 11 }) + tx(280, 110, 'CO₂ released', { a: 'middle', fs: 11 }) + tx(470, 110, 'O₂ used · water formed', { a: 'middle', fs: 11 });
    s += tx(270, 148, 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (ATP)', { a: 'middle', fs: 13, c: INK, w: 700 }) + tx(270, 170, 'B vitamins (thiamin, riboflavin, niacin) act as coenzymes; fats and proteins can also enter the Krebs cycle.', { a: 'middle', fs: 11 });
    return svg(560, 185, s, 'Aerobic respiration') + cap('Aerobic respiration releases energy from glucose gradually, controlled by enzymes, as ATP.'); },
  gut: () => { let s = '';
    s += pth('M150,20 C150,40 145,50 150,70', INK, 10) + tx(175, 30, 'mouth — mechanical chewing; salivary amylase', { fs: 11.5 });
    s += pth('M150,70 L150,120', INK, 6) + tx(175, 95, 'oesophagus — peristalsis', { fs: 11.5 });
    s += pth('M150,120 C200,110 230,150 200,185 C180,205 140,195 150,170', C2, 3, 'var(--u2)') .replace('fill="var(--u2)"', 'fill="var(--u2)" fill-opacity=".18"') + tx(240, 150, 'stomach — HCl, pepsin (protein), churning', { fs: 11.5 });
    s += pth('M160,195 C100,205 90,225 130,230 C180,236 200,250 150,258 C100,266 100,282 150,285 C200,288 200,300 150,305', C1, 6) + tx(215, 250, 'small intestine — pancreatic enzymes, bile;', { fs: 11.5 }) + tx(215, 265, 'villi absorb nutrients', { fs: 11.5 });
    s += pth('M150,305 C80,305 70,300 70,250 L70,200 C70,185 95,180 110,190', C5, 10, 'none') + tx(20, 340, 'large intestine — water absorbed; bacteria ferment fibre', { fs: 11.5 });
    s += tx(360, 60, 'Liver', { fs: 13, c: INK, w: 700 }) + lines(360, 78, ['bile emulsifies fat', 'stores glycogen, vitamins A, D, B12'], { a: 'start', fs: 11.5 });
    s += tx(360, 196, 'Pancreas', { fs: 13, c: INK, w: 700 }) + lines(360, 214, ['amylase, protease (trypsin),', 'lipase; insulin'], { a: 'start', fs: 11.5 });
    return svg(560, 350, s, 'Digestive system') + cap('Digestion breaks large molecules into small, soluble ones that can be absorbed.'); },
  villus: () => { let s = ln(40, 180, 500, 180, INK, 2);
    for (let i = 0; i < 5; i++) { const x = 80 + i * 90; s += pth(`M${x - 25},180 L${x - 25},70 C${x - 25},40 ${x + 25},40 ${x + 25},70 L${x + 25},180`, C1, 2.2, 'var(--u1)').replace('fill="var(--u1)"', 'fill="var(--u1)" fill-opacity=".12"'); s += pth(`M${x - 10},175 L${x - 10},70 C${x - 10},58 ${x + 10},58 ${x + 10},70 L${x + 10},175`, BAD, 1.6) + ln(x, 170, x, 75, C5, 2.4); }
    s += tx(40, 24, 'Villi line the small intestine', { fs: 13, c: INK, w: 700 }) + tx(40, 205, 'red = blood capillaries: sugars, amino acids, water-soluble vitamins, minerals', { fs: 11.5, c: BAD }) + tx(40, 222, 'yellow = lacteal (lymph): fatty acids and glycerol, fat-soluble vitamins', { fs: 11.5, c: C5 });
    return svg(540, 235, s, 'Villi') + cap('Villi and microvilli give a huge surface area, a one-cell-thick wall and a rich blood supply for absorption.'); },
  eatwell: () => { const cx = 170, cy = 150, R = 120; const parts = [['Fruit and vegetables', 40, C1], ['Potatoes, bread, rice, pasta', 38, C5], ['Beans, pulses, fish, eggs, meat', 12, C2], ['Dairy and alternatives', 8, C3], ['Oils and spreads', 1, C4]]; let a = -Math.PI / 2, s = '';
    parts.forEach(([lab, p, col]) => { const a2 = a + p / 99 * 2 * Math.PI, large = a2 - a > Math.PI ? 1 : 0; s += `<path d="M${cx},${cy} L${cx + R * Math.cos(a)},${cy + R * Math.sin(a)} A${R},${R} 0 ${large} 1 ${cx + R * Math.cos(a2)},${cy + R * Math.sin(a2)} Z" fill="${col}" fill-opacity=".75" stroke="var(--surface)" stroke-width="3"/>`; a = a2; });
    let y = 50; parts.forEach(([lab, p, col]) => { s += cell(320, y - 11, 14, 14, col) + tx(342, y + 1, `${lab} — about ${p}%`, { fs: 12, c: INK }); y += 26; });
    s += lines(320, y + 8, ['Outside the plate: 6–8 drinks a day;', 'foods high in fat, salt and sugar', 'eaten less often and in small amounts.'], { a: 'start', fs: 11.5 });
    return svg(600, 290, s, 'The Eatwell Guide') + cap('Approximate proportions of the Eatwell Guide (Public Health England, 2016), shown as a simplified pie.'); },
  gicurve: () => plot({ x: [0, 120], y: [3, 10], w: 540, h: 280, xt: [0, 30, 60, 90, 120], yt: [4, 6, 8, 10], xl: 'time after eating / min', yl: 'blood glucose / mmol/L',
    fns: [{ f: t => 4.5 + 4.5 * (t / 30) * Math.exp(1 - t / 30), c: BAD, label: 'high GI', lx: 38, ldy: -8 }, { f: t => 4.5 + 2.0 * (t / 55) * Math.exp(1 - t / 55), c: GOOD, label: 'low GI', lx: 95, ldy: -8 }], hl: [{ y: 4.5, label: 'fasting level' }], label: 'Glycaemic index curves' }) + cap('High-GI foods cause a rapid rise and fall in blood glucose; low-GI foods release glucose slowly.'),
  bmichart: () => plot({ x: [1.45, 2.0], y: [35, 130], w: 540, h: 300, xt: [1.5, 1.6, 1.7, 1.8, 1.9, 2.0], yt: [40, 60, 80, 100, 120], xl: 'height / m', yl: 'mass / kg',
    fills: [{ a: 1.45, b: 2.0, f: h => 18.5 * h * h, c: INFO, op: .12, base: 35 }],
    fns: [{ f: h => 18.5 * h * h, c: INFO, label: '18.5', lx: 2.0, ldx: -26, ldy: -6 }, { f: h => 25 * h * h, c: GOOD, label: '25', lx: 1.97, ldx: 4 }, { f: h => 30 * h * h, c: C5, label: '30', lx: 1.9, ldx: 4 }, { f: h => 40 * h * h, c: BAD, label: '40', lx: 1.72, ldx: 4 }],
    text: [[1.55, 45, 'underweight', { c: INFO }], [1.62, 58, 'healthy', { c: GOOD }], [1.52, 75, 'overweight', { c: C5 }], [1.5, 98, 'obese', { c: BAD }]], label: 'BMI chart' }) + cap('Lines of constant BMI ($"BMI" = m ÷ h^2$). The band between 18.5 and 25 is the healthy range.'),
  artery: () => { let s = ''; const vessel = (cx, lab, plaque) => { s += circ(cx, 100, 70, 'var(--u2)', BAD, 3).replace('fill="var(--u2)"', 'fill="var(--u2)" fill-opacity=".12"'); if (plaque) s += pth(`M${cx - 58},60 C${cx - 30},90 ${cx - 30},130 ${cx - 58},140 A70,70 0 0 1 ${cx - 58},60 Z`, C5, 2, 'var(--u5)').replace('fill="var(--u5)"', 'fill="var(--u5)" fill-opacity=".7"') + pth(`M${cx + 60},70 C${cx + 40},95 ${cx + 40},115 ${cx + 62},128 A70,70 0 0 0 ${cx + 60},70 Z`, C5, 2, 'var(--u5)').replace('fill="var(--u5)"', 'fill="var(--u5)" fill-opacity=".7"'); for (let i = 0; i < 6; i++) s += circ(cx - 25 + (i % 3) * 25, 85 + Math.floor(i / 3) * 30, 7, BAD); s += tx(cx, 195, lab, { a: 'middle', fs: 12.5, c: INK, w: 700 }); };
    vessel(130, 'healthy artery', false); vessel(400, 'atherosclerosis — plaque narrows lumen', true);
    s += tx(400, 20, 'fatty plaque (LDL cholesterol)', { a: 'middle', fs: 11, c: C5 });
    return svg(540, 210, s, 'Atherosclerosis') + cap('Plaque narrows arteries, raising blood pressure. A clot on a plaque can block a coronary artery (heart attack) or a brain artery (stroke).'); },
  insulin: () => cycleDiag(540, 300, 270, 150, 105, [['Blood glucose rises', 'after a meal', BAD], ['Pancreas releases insulin', 'β-cells', C3], ['Cells take up glucose', 'liver stores glycogen', C1], ['Blood glucose falls', 'back to normal', GOOD]], { w: 170, h: 48, center: ['Type 2 diabetes:', 'cells resist insulin'], label: 'Blood glucose control' }) + cap('Insulin lowers blood glucose. In type 2 diabetes, cells stop responding properly (insulin resistance) or too little insulin is made.'),
  tooth: () => { let s = pth('M80,40 C60,40 50,70 60,110 C65,140 70,200 90,250 C100,260 110,250 112,230 L120,170 L128,230 C130,250 140,260 150,250 C170,200 175,140 180,110 C190,70 180,40 160,40 C140,40 130,50 120,50 C110,50 100,40 80,40 Z', INK, 2, 'var(--surface-2)');
    s += pth('M75,50 C65,70 62,90 68,112 L172,112 C178,90 175,70 165,50', C3, 3) + pth('M92,70 C88,90 90,110 96,160 L144,160 C150,110 152,90 148,70 Z', C5, 1.5, 'var(--u5)').replace('fill="var(--u5)"', 'fill="var(--u5)" fill-opacity=".25"') + pth('M108,90 L108,150 L132,150 L132,90 Z', BAD, 1.5, 'var(--bad)').replace('fill="var(--bad)"', 'fill="var(--bad)" fill-opacity=".25"');
    s += circ(160, 60, 8, INK, INK) + ln(168, 60, 240, 60, MUT, 1) + tx(245, 64, 'cavity from acid attack', { fs: 11.5 });
    [['enamel — hardest tissue (calcium phosphate)', 78, C3], ['dentine', 120, C5], ['pulp — nerves and blood vessels', 140, BAD], ['gum and bone — root', 215, MUT]].forEach(([t, y, c]) => s += ln(150, y, 240, y, MUT, 1) + tx(245, y + 4, t, { fs: 11.5, c }));
    s += tx(245, 250, 'bacteria + free sugars → acid → demineralisation', { fs: 12, c: INK, w: 700 });
    return svg(560, 275, s, 'Tooth structure') + cap('Plaque bacteria ferment free sugars to acids that dissolve enamel. Fluoride and calcium help remineralisation.'); },
  drv: () => { const f = x => 100 * Math.exp(-((x - 50) ** 2) / (2 * 12 ** 2));
    return plot({ x: [10, 90], y: [0, 110], w: 540, h: 260, xt: [], yt: [], xtl: false, ytl: false, xl: 'nutrient requirement →', yl: 'number of people',
      fills: [{ a: 10, b: 90, f, c: C1, op: .15 }], fns: [{ f, c: C1 }],
      vl: [{ x: 26, y: f(26), label: 'LRNI', c: BAD }, { x: 50, y: 100, label: 'EAR', c: C5 }, { x: 74, y: f(74), label: 'RNI', c: GOOD }],
      text: [[12, 60, 'LRNI: enough for 2.5%', { c: BAD, fs: 11 }], [53, 106, 'EAR: enough for 50%', { c: C5, fs: 11 }], [70, 60, 'RNI: enough for 97.5%', { c: GOOD, fs: 11 }]], label: 'Dietary reference values' }) + cap('Requirements vary across a population. The RNI is set two standard deviations above the EAR.'); },
  balance: () => { let s = ''; const scale = (cx, tilt, lab, col) => { const a = tilt * 0.25; s += pth(`M${cx - 20},150 L${cx},90 L${cx + 20},150 Z`, INK, 1.6, 'var(--surface-2)'); const x1 = cx - 70 * Math.cos(a), y1 = 90 - 70 * Math.sin(-a), x2 = cx + 70 * Math.cos(a), y2 = 90 + 70 * Math.sin(-a) * -1; s += ln(cx - 70 * Math.cos(a), 90 + 70 * Math.sin(a), cx + 70 * Math.cos(a), 90 - 70 * Math.sin(a), INK, 3); s += box(cx - 95, 90 + 70 * Math.sin(a) - 26, 50, 22, C1, C1, 4, 1).replace(/fill="[^"]*"/, 'fill="var(--u1)" fill-opacity=".35"') + tx(cx - 70, 90 + 70 * Math.sin(a) - 11, 'in', { a: 'middle', fs: 11, c: INK, w: 700 }); s += box(cx + 45, 90 - 70 * Math.sin(a) - 26, 50, 22, C2, C2, 4, 1).replace(/fill="[^"]*"/, 'fill="var(--u2)" fill-opacity=".35"') + tx(cx + 70, 90 - 70 * Math.sin(a) - 11, 'out', { a: 'middle', fs: 11, c: INK, w: 700 }); s += tx(cx, 175, lab, { a: 'middle', fs: 12, c: col, w: 700 }); };
    scale(95, 0, 'balanced → stable weight', GOOD); scale(275, 1, 'positive → weight gain', BAD); scale(455, -1, 'negative → weight loss', INFO);
    return svg(550, 190, s, 'Energy balance') + cap('Energy in comes from food and drink; energy out is BMR + physical activity (+ digestion).'); },
  plancycle: () => cycleDiag(540, 310, 270, 155, 110, [['Assess', 'needs, diet, lifestyle', C1], ['Set SMART goals', 'targets', C2], ['Plan', 'menus, activity', C3], ['Implement', 'support, advice', C4], ['Monitor & review', 'adjust', C5]], { w: 140, h: 46, label: 'Planning cycle' }) + cap('A nutrition programme is a cycle: assess, set goals, plan, implement, then monitor and adjust.'),

  /* ============ UNIT 2 ============ */
  npd: () => chain(600, 130, [['Brief', 'need, target group', C2], ['Research', 'trends, existing', C5], ['Ideas', 'mood board', C1], ['Develop', 'trial, test, modify', C3], ['Evaluate', 'sensory, cost', C4]], { w: 104, h: 50, step: 118, x0: 62, label: 'Product development' }) + cap('Working like a product developer: from brief to final product, testing and modifying at each stage.'),
  gantt: () => { let s = ''; const tasks = [['Make pastry, chill', 0, 20, C1], ['Make filling', 20, 40, C2], ['Roll, line tin, blind bake', 40, 75, C1], ['Prepare salad', 55, 70, C3], ['Bake tart', 75, 110, C1], ['Make dressing', 85, 95, C3], ['Wash up, clean down', 95, 115, U9], ['Plate and serve', 115, 125, C4]];
    const X = t => 170 + t * 2.9; for (let t = 0; t <= 125; t += 15) s += ln(X(t), 20, X(t), 30 + tasks.length * 26, 'var(--line)', 1) + tx(X(t), 16, `${t}`, { a: 'middle', fs: 10, f: 'var(--f-mono)' });
    tasks.forEach(([n, a, b, c], i) => { const y = 30 + i * 26; s += tx(160, y + 14, n, { a: 'end', fs: 11.5, c: INK }) + cell(X(a), y + 3, X(b) - X(a), 18, c, null, { op: .7 }); });
    s += ln(X(75), 26, X(75), 30 + tasks.length * 26, BAD, 1.5, '4 3') + tx(X(75) + 4, 30 + tasks.length * 26 + 14, 'CCP: tart core ≥ 75 °C', { fs: 11, c: BAD });
    return svg(560, 270, s, 'Dovetailed time plan') + cap('A time plan (minutes) showing dovetailing — the salad and dressing are made while the pastry chills and the tart bakes.'); },
  cuts: () => { let s = ''; const c = [['Julienne', 2, 2, 45], ['Batonnet', 6, 6, 60], ['Macédoine', 5, 5, 5], ['Brunoise', 2, 2, 2], ['Paysanne', 12, 12, 2], ['Jardinière', 4, 4, 18]];
    c.forEach(([n, w, h, l], i) => { const x = 30 + (i % 3) * 180, y = 30 + Math.floor(i / 3) * 110, k = 2.2; const n3 = Math.min(5, Math.max(1, Math.round(40 / (w * k + 4))));
      for (let j = 0; j < n3; j++) { const bx = x + j * (w * k + 6), by = y + 30; s += `<rect x="${bx}" y="${by}" width="${Math.max(3, w * k)}" height="${Math.max(3, l * k * 0.8)}" rx="1.5" fill="var(--u5)" fill-opacity=".55" stroke="var(--u5)"/>`; }
      s += tx(x, y + 16, n, { fs: 13, c: INK, w: 700 }) + tx(x + 90, y + 50, `${w} × ${h} × ${l} mm`, { fs: 10.5, f: 'var(--f-mono)' }); });
    return svg(560, 240, s, 'Knife cuts') + cap('Typical vegetable cuts to scale (approximate sizes). Consistent size means even cooking and a professional finish.'); },
  thermo: () => { const marks = [[100, 'boiling · sterilising water', C3], [75, 'core cooking / reheating ≥ 75 °C', BAD], [63, 'hot holding ≥ 63 °C', C2], [37, 'body temperature — fastest growth', C5], [8, 'legal maximum for chilled food', C5], [5, 'fridge 0–5 °C', C3], [-18, 'freezer ≤ −18 °C', INFO]];
    const Y = t => 250 - (t + 25) * 1.9; let s = pth(`M60,${Y(105)} L60,${Y(-22)}`, INK, 16) + pth(`M60,${Y(104)} L60,${Y(-22)}`, SF, 11) + circ(60, Y(-22) + 12, 16, BAD, INK, 2);
    s += `<rect x="${60 - 5}" y="${Y(63)}" width="10" height="${Y(5) - Y(63)}" fill="var(--bad)" fill-opacity=".45"/>` + tx(88, (Y(63) + Y(5)) / 2, 'DANGER ZONE 5–63 °C', { fs: 13, c: BAD, w: 700 });
    marks.forEach(([t, lab, c]) => s += ln(52, Y(t), 70, Y(t), INK, 1.4) + tx(255, Y(t) + 4, `${t} °C`, { a: 'end', fs: 11.5, f: 'var(--f-mono)', c: INK }) + tx(265, Y(t) + 4, lab, { fs: 11.5, c }));
    return svg(560, 280, s, 'Critical temperatures') + cap('Key temperatures for safe food production. Bacteria multiply fastest in the danger zone, especially near 37 °C.'); },
  star: () => { const ax = ['sweet', 'salty', 'crunchy', 'appearance', 'aroma', 'aftertaste'], cx = 170, cy = 140, R = 105, A = i => -Math.PI / 2 + i * 2 * Math.PI / ax.length; let s = '';
    [0.2, 0.4, 0.6, 0.8, 1].forEach(k => s += `<polygon points="${ax.map((_, i) => [cx + R * k * Math.cos(A(i)), cy + R * k * Math.sin(A(i))].join(',')).join(' ')}" fill="none" stroke="var(--line)"/>`);
    ax.forEach((a, i) => s += ln(cx, cy, cx + R * Math.cos(A(i)), cy + R * Math.sin(A(i)), 'var(--line-2)', 1) + tx(cx + (R + 14) * Math.cos(A(i)), cy + (R + 14) * Math.sin(A(i)) + 4, a, { a: Math.abs(Math.cos(A(i))) < .2 ? 'middle' : Math.cos(A(i)) > 0 ? 'start' : 'end', fs: 11.5, c: INK }));
    const poly = (v, c) => `<polygon points="${v.map((x, i) => [cx + R * x / 5 * Math.cos(A(i)), cy + R * x / 5 * Math.sin(A(i))].join(',')).join(' ')}" fill="${c}" fill-opacity=".18" stroke="${c}" stroke-width="2.2"/>`;
    s += poly([3, 2, 4, 5, 4, 3], C2) + poly([4, 1, 2, 3, 3, 4], C3);
    s += cell(360, 60, 14, 14, C2) + tx(382, 72, 'Recipe A', { fs: 12, c: INK }) + cell(360, 86, 14, 14, C3) + tx(382, 98, 'Recipe B', { fs: 12, c: INK }) + lines(360, 140, ['Mean taste-panel scores (0–5)', 'for each descriptor. The', 'bigger and more even the', 'star, the better the profile.'], { a: 'start', fs: 11.5 });
    return svg(560, 280, s, 'Star profile') + cap('A star (radar) profile compares sensory attributes of products at a glance.'); }
};
