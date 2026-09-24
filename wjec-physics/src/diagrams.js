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

const DIAG = {
  /* ---------- 1.2 Kinematics ---------- */
  'vt-area': () => plot({ x: [0, 10], y: [0, 25], xt: [0, 2, 4, 6, 8, 10], yt: [0, 5, 10, 15, 20, 25], xl: 't / s', yl: 'v / m s⁻¹',
    fills: [{ a: 0, b: 10, f: t => t < 4 ? 5 * t : 20, c: 'var(--u1)' }],
    segs: [{ p: [[0, 0], [4, 20], [10, 20]], c: C1 }],
    text: [[1.6, 6, 'area = displacement'], [5.8, 22.5, 'gradient = 0 → a = 0', { fs: 11.5, c: MUT }], [0.4, 14, 'gradient', { fs: 11.5, c: MUT }], [0.4, 12, '= acceleration', { fs: 11.5, c: MUT }]],
    cap: 'Velocity–time graph: gradient gives acceleration; area gives displacement (here ½×4×20 + 6×20 = 160 m).' }),
  'st-graph': () => plot({ x: [0, 10], y: [0, 50], xt: [0, 2, 4, 6, 8, 10], yt: [0, 10, 20, 30, 40, 50], xl: 't / s', yl: 's / m',
    fns: [{ f: t => 0.5 * t * t, c: C1, a: 0, b: 10, label: 'accelerating (curve steepens)', lx: 6.2, la: 'end', ldx: -8, ldy: -4 }, { f: t => 4 * t, c: C4, a: 0, b: 10, label: 'constant velocity', lx: 8.6, ldx: -118, ldy: 16 }],
    extra: (X, Y) => ln(X(3), Y(0.5 * 16 - 4 * 1), X(5), Y(0.5 * 16 + 4 * 1), ACC, 2) + tx(X(5.1), Y(9.5), 'tangent → instantaneous v', { fs: 11, c: 'var(--accent-ink)' }),
    cap: 'Displacement–time: the gradient (of the tangent) is the velocity.' }),
  'projectile': () => {
    const u = 20, th = 50 * Math.PI / 180, g = 9.81, T = 2 * u * Math.sin(th) / g, R = u * Math.cos(th) * T;
    return plot({ x: [0, 44], y: [0, 14], xt: [0, 10, 20, 30, 40], yt: [0, 5, 10], xl: 'x / m', yl: 'y / m', h: 250,
      fns: [{ f: x => x * Math.tan(th) - g * x * x / (2 * u * u * Math.cos(th) ** 2), c: C1, a: 0, b: R }],
      extra: (X, Y) => {
        let s = ''; [0.3, 0.5, 0.95].forEach(fr => { const t = fr * T, x = u * Math.cos(th) * t, y = u * Math.sin(th) * t - .5 * g * t * t, vx = u * Math.cos(th), vy = u * Math.sin(th) - g * t, k = 1.1;
          s += arrow(X(x), Y(y), X(x + vx * k * .45), Y(y), C4, 1.6) + arrow(X(x), Y(y), X(x), Y(y + vy * k * .45), C3, 1.6); });
        return s + tx(X(31), Y(12.5), 'horizontal v constant', { c: C4, fs: 11.5, w: 600 }) + tx(X(31), Y(11.2), 'vertical v changes at g', { c: C3, fs: 11.5, w: 600 });
      }, cap: `Projectile launched at 20 m s⁻¹, 50°: range ${R.toFixed(1)} m, flight time ${T.toFixed(2)} s (no air resistance).` });
  },
  'terminal': () => plot({ x: [0, 12], y: [0, 50], xt: [0, 4, 8, 12], yt: [0, 10, 20, 30, 40, 50], xl: 't / s', yl: 'v / m s⁻¹',
    fns: [{ f: t => 40 * (1 - Math.exp(-t / 3)), c: C1 }, { f: t => 9.81 * t, c: MUT, dash: '5 4', a: 0, b: 5, label: 'no drag (gradient g)', lx: 4.4, ldx: 8, ldy: 0 }],
    hl: [{ y: 40, label: 'terminal velocity: drag = weight, a = 0' }], cap: 'Falling with air resistance: drag rises with speed until resultant force (and acceleration) is zero.' }),

  /* ---------- 1.1 / 1.3 ---------- */
  'moments': () => svg(520, 190, `
    ${ln(40, 110, 480, 110, INK, 6)}
    <path d="M260,114 L244,150 L276,150 Z" fill="${MUT}"/>
    ${arrow(100, 118, 100, 170, C1, 2.2)}${tx(100, 184, '30 N', { a: 'middle', c: C1, w: 600 })}
    ${arrow(400, 118, 400, 158, C4, 2.2)}${tx(400, 172, 'W = ?', { a: 'middle', c: C4, w: 600 })}
    ${ln(100, 80, 260, 80, MUT, 1, '4 3')}${ln(260, 80, 400, 80, MUT, 1, '4 3')}
    ${tx(180, 72, '0.80 m', { a: 'middle', f: 'var(--f-mono)' })}${tx(330, 72, '0.60 m', { a: 'middle', f: 'var(--f-mono)' })}
    ${tx(260, 30, 'Σ clockwise moments = Σ anticlockwise moments about the pivot', { a: 'middle', c: INK })}
    ${tx(260, 48, '30 × 0.80 = W × 0.60  →  W = 40 N', { a: 'middle', f: 'var(--f-mono)', c: 'var(--accent-ink)' })}`, 'Principle of moments on a beam'),
  'vectors': () => svg(520, 220, `
    ${arrow(60, 180, 300, 180, C4, 2.4)}${tx(180, 200, 'F cos θ', { a: 'middle', c: C4, f: 'var(--f-math)', it: true, fs: 15 })}
    ${arrow(300, 180, 300, 50, C3, 2.4)}${tx(310, 118, 'F sin θ', { c: C3, f: 'var(--f-math)', it: true, fs: 15 })}
    ${arrow(60, 180, 300, 50, C1, 3)}${tx(160, 100, 'F', { c: C1, f: 'var(--f-math)', it: true, fs: 18, a: 'middle' })}
    <path d="M110,180 A50,50 0 0 0 104,156" fill="none" stroke="${MUT}" stroke-width="1.3"/>${tx(118, 170, 'θ', { f: 'var(--f-math)', it: true, fs: 15, c: INK })}
    ${tx(360, 100, 'Resolving:', { c: INK, w: 600 })}${tx(360, 120, 'horizontal = F cos θ', { c: MUT })}${tx(360, 140, 'vertical = F sin θ', { c: MUT })}`, 'Resolving a vector'),
  'fx-impulse': () => plot({ x: [0, 10], y: [0, 500], xt: [0, 2, 4, 6, 8, 10], yt: [0, 100, 200, 300, 400, 500], xl: 't / ms', yl: 'F / N', xtl: ['0', '2', '4', '6', '8', '10'],
    fills: [{ a: 1, b: 9, f: t => 450 * Math.sin(Math.PI * (t - 1) / 8), c: C1 }], fns: [{ f: t => 450 * Math.sin(Math.PI * (t - 1) / 8), a: 1, b: 9, c: C1 }],
    text: [[3.4, 150, 'area = Δp (impulse)']], cap: 'Force–time graph for a collision: the area under the graph equals the change in momentum.' }),

  /* ---------- 1.5 Solids ---------- */
  'stress-strain': () => plot({ x: [0, 0.4], y: [0, 500], w: 540, xt: [0, .1, .2, .3, .4], yt: [0, 100, 200, 300, 400, 500], xl: 'strain', yl: 'stress / MPa', xtl: ['0', '0.1', '0.2', '0.3', '0.4'],
    segs: [
      { p: [[0, 0], [0.0021, 420]], c: C4, label: 'brittle (glass): breaks, no plastic region', lp: [0.012, 470] },
      { p: [[0, 0], [0.0015, 220], [0.004, 240], [0.05, 280], [0.15, 310], [0.28, 300], [0.3, 270]], c: C1, label: 'ductile (copper)', lp: [0.2, 330] },
      { p: [[0, 0], [0.1, 6], [0.2, 10], [0.3, 13], [0.4, 22]], c: C3, label: 'rubber (tiny stresses on this scale)', lp: [0.18, 45] }],
    marks: [{ x: 0.0021, y: 420, c: C4, label: 'fracture', dx: 6 }, { x: 0.3, y: 270, c: C1, label: 'break', dx: -8, dy: -10, a: 'end' }, { x: 0.15, y: 310, c: C1, label: 'UTS', dx: -4, dy: -10, a: 'end' }],
    cap: 'Schematic stress–strain curves (not all to the same material scale). Ductile metals show a long plastic region; brittle solids fracture at the end of the linear region.' }),
  'hooke': () => plot({ x: [0, 12], y: [0, 10], xt: [0, 2, 4, 6, 8, 10, 12], yt: [0, 2, 4, 6, 8, 10], xl: 'extension x / mm', yl: 'F / N',
    segs: [{ p: [[0, 0], [6, 6], [7, 6.8], [9, 7.6], [11, 8]], c: C1 }],
    fills: [{ a: 0, b: 4, f: x => x, c: 'var(--u1)' }],
    marks: [{ x: 6, y: 6, label: 'limit of proportionality', dx: -10, dy: -10, a: 'end' }, { x: 7, y: 6.8, label: 'elastic limit', c: C4, dx: 6, dy: 14 }],
    text: [[1.8, 0.8, 'area = ½Fx = elastic PE']], cap: 'Force–extension: Hooke’s law holds up to the limit of proportionality (gradient = k).' }),
  'hysteresis': () => plot({ x: [0, 10], y: [0, 10], xt: [0, 2, 4, 6, 8, 10], yt: [0, 2, 4, 6, 8, 10], xl: 'extension', yl: 'load', xtl: false, ytl: false,
    fills: [{ a: 0, b: 9, f: x => 9 * Math.pow(x / 9, 2.2) * 0.45 + 0.55 * 9 * (x / 9) ** 3.4, c: 'var(--u3)', op: .12 }],
    fns: [{ f: x => 2.2 * x - 0.36 * x * x + 0.025 * x * x * x, a: 0, b: 9, c: C1, label: 'loading', lx: 5, ldx: -60, ldy: -6 },
      { f: x => 9 * Math.pow(x / 9, 2.2) * 0.45 + 0.55 * 9 * (x / 9) ** 3.4, a: 0, b: 9, c: C4, label: 'unloading', lx: 6, ldx: 6, ldy: 10 }],
    text: [[4.2, 2.6, 'loop area = energy', { c: C3, fs: 11.5 }], [4.2, 2, 'dissipated as heat', { c: C3, fs: 11.5 }]],
    cap: 'Rubber shows elastic hysteresis: less work is done by the rubber when unloading than on it when loading.' }),

  /* ---------- 1.6 Stars ---------- */
  'blackbody': () => {
    const P = (l, T) => { const L = l * 1e-9; return 1 / (L ** 5 * (Math.exp(1.44e-2 / (L * T)) - 1)); };
    const n = P(2.9e-3 / 6000 * 1e9, 6000);
    return plot({ x: [0, 2000], y: [0, 1.05], w: 540, xt: [0, 500, 1000, 1500, 2000], yt: [0, .5, 1], xl: 'λ / nm', yl: 'intensity (relative)', ytl: false,
      fills: [{ a: 400, b: 700, f: () => 1.05, c: 'var(--accent)', op: .08 }],
      fns: [{ f: l => P(l, 6000) / n, a: 60, b: 2000, c: C4, label: '6000 K', lx: 480, ldx: 8, ldy: -4 }, { f: l => P(l, 5000) / n, a: 60, b: 2000, c: C3, label: '5000 K', lx: 640, ldx: 8, ldy: -6 }, { f: l => P(l, 4000) / n, a: 60, b: 2000, c: C1, label: '4000 K', lx: 900, ldx: 6, ldy: -6 }],
      marks: [{ x: 483, y: 1, c: C4, r: 3.5 }, { x: 725, y: P(725, 4000) / n, c: C1, r: 3.5, label: 'λmax = W/T', dx: 8, dy: -2 }],
      text: [[430, 0.98, 'visible', { c: 'var(--accent-ink)', fs: 11 }]],
      cap: 'Black-body spectra: hotter bodies peak at shorter λ (Wien) and the total area rises as T⁴ (Stefan).' });
  },

  /* ---------- 2.2 / 2.3 electricity ---------- */
  'iv-curves': () => plot({ x: [-6, 6], y: [-0.6, 0.6], w: 520, xt: [-6, -3, 0, 3, 6], yt: [-0.6, -0.3, 0, 0.3, 0.6], xl: 'V / V', yl: 'I / A',
    fns: [{ f: v => v / 12, c: C4, label: 'metal wire (const T): ohmic', lx: 5.2, ldx: -8, ldy: -12, la: 'end' }, { f: v => Math.sign(v) * 0.26 * Math.pow(Math.abs(v), 0.55), c: C1, label: 'filament lamp', lx: 2, ldx: -6, ldy: -16, la: 'end' }],
    cap: 'I–V characteristics. The lamp’s gradient falls as V rises because its resistance increases as the filament heats up.' }),
  'rt-sc': () => plot({ x: [0, 150], y: [0, 1], xt: [0, 50, 100, 150], yt: [0, 0.5, 1], xl: 'T / K', yl: 'R (relative)', ytl: false,
    segs: [{ p: [[0, 0], [92, 0], [92, 0.3]], c: C4 }], fns: [{ f: T => 0.3 + (T - 92) * 0.0048, a: 92, b: 150, c: C4 }],
    vl: [{ x: 92, label: 'Tc (critical temperature)', y: 0.3, dy: 16 }], cap: 'A superconductor’s resistance falls abruptly to zero below its critical temperature.' }),
  'vi-internal': () => plot({ x: [0, 3], y: [0, 7], xt: [0, 1, 2, 3], yt: [0, 2, 4, 6], xl: 'I / A', yl: 'V (terminal pd) / V',
    fns: [{ f: I => 6 - 2 * I, a: 0, b: 3, c: C2 }], marks: [{ x: 0, y: 6, label: 'intercept = E (6.0 V)', dx: 10, dy: -6 }],
    text: [[1.5, 3.6, 'gradient = −r = −2.0 Ω']], cap: 'Terminal pd against current: V = E − Ir, so the y-intercept is the emf and the gradient is −r.' }),

  /* ---------- 2.4 / 2.5 waves ---------- */
  'wave-xd': () => plot({ x: [0, 4], y: [-1.3, 1.3], xt: [0, 1, 2, 3, 4], yt: [-1, 0, 1], xl: 'distance / m', yl: 'displacement', ytl: ['−A', '0', 'A'],
    fns: [{ f: x => Math.sin(Math.PI * x), c: C2 }],
    extra: (X, Y) => ln(X(0.5), Y(1.18), X(2.5), Y(1.18), MUT, 1.2) + ln(X(0.5), Y(1.1), X(0.5), Y(1.26), MUT, 1.2) + ln(X(2.5), Y(1.1), X(2.5), Y(1.26), MUT, 1.2) + tx(X(1.5), Y(1.24), 'λ', { a: 'middle', f: 'var(--f-math)', it: true, fs: 15, c: INK }) +
      `<circle cx="${X(0.5)}" cy="${Y(1)}" r="4" fill="${C4}"/><circle cx="${X(1)}" cy="${Y(0)}" r="4" fill="${C1}"/>` + tx(X(1) + 8, Y(0) - 8, 'P and Q are ¼λ apart → phase difference π/2', { fs: 11.5 }),
    cap: 'Displacement against distance at one instant.' }),
  'harmonics': () => { const W = 520, H = 240, L = 50, Rr = 470; let s = '';
    [1, 2, 3].forEach((n, k) => { const y0 = 45 + k * 70; s += `<circle cx="${L}" cy="${y0}" r="3" fill="${INK}"/><circle cx="${Rr}" cy="${y0}" r="3" fill="${INK}"/>`;
      let d1 = '', d2 = ''; for (let i = 0; i <= 200; i++) { const x = L + (Rr - L) * i / 200, a = 22 * Math.sin(n * Math.PI * i / 200); d1 += (i ? 'L' : 'M') + x + ',' + (y0 - a); d2 += (i ? 'L' : 'M') + x + ',' + (y0 + a); }
      s += `<path d="${d1}" fill="none" stroke="${C2}" stroke-width="2.2"/><path d="${d2}" fill="none" stroke="${C2}" stroke-width="2.2" stroke-dasharray="5 4" opacity=".7"/>`;
      s += tx(W - 38, y0 + 4, ['f₁', 'f₂ = 2f₁', 'f₃ = 3f₁'][k], { fs: 12, c: INK, a: 'end' }).replace(`x="${W - 38}"`, `x="${W - 2}"`);
      s += tx(L - 8, y0 + 4, `λ = ${['2L', 'L', '2L/3'][k]}`, { fs: 11.5, a: 'end' }); });
    return svg(W + 20, H, s, 'Harmonics on a string') + '<figcaption>Stationary waves on a string fixed at both ends: nodes at each end, node-to-node distance = λ/2.</figcaption>'; },
  'double-slit': () => svg(540, 230, `
    ${ln(120, 20, 120, 95, INK, 4)}${ln(120, 105, 120, 125, INK, 4)}${ln(120, 135, 120, 210, INK, 4)}
    ${tx(108, 104, 'S₁', { a: 'end', fs: 12, c: INK })}${tx(108, 140, 'S₂', { a: 'end', fs: 12, c: INK })}
    ${ln(470, 20, 470, 210, INK, 2)}
    ${[-3, -2, -1, 0, 1, 2, 3].map(k => `<rect x="472" y="${115 + k * 26 - 5}" width="18" height="10" rx="3" fill="${C2}" opacity="${1 - Math.abs(k) * .18}"/>`).join('')}
    ${ln(120, 100, 470, 141, C1, 1.3)}${ln(120, 130, 470, 141, C1, 1.3)}
    ${ln(135, 225, 455, 225, MUT, 1)}${tx(295, 220, 'D (slits to screen)', { a: 'middle', fs: 11.5 })}
    ${ln(505, 115, 505, 141, MUT, 1)}${tx(512, 132, 'y', { f: 'var(--f-math)', it: true, fs: 15, c: INK })}
    ${tx(94, 122, 'a', { f: 'var(--f-math)', it: true, fs: 15, c: INK })}
    ${ln(20, 115, 110, 115, C2, 2)}${ln(20, 108, 110, 108, C2, 1, '3 3')}${tx(22, 100, 'coherent light', { fs: 11 })}
    ${tx(290, 60, 'λ = ay / D', { a: 'middle', f: 'var(--f-math)', it: true, fs: 20, c: 'var(--accent-ink)' })}`, 'Young double slit') + '<figcaption>Young’s double slits (not to scale — in reality D ≫ a). Bright fringes where path difference = nλ.</figcaption>',
  'grating': () => svg(520, 210, `
    ${ln(90, 20, 90, 190, INK, 3)}${tx(90, 204, 'grating', { a: 'middle', fs: 11 })}
    ${ln(10, 105, 90, 105, C3, 2.5)}
    ${[0, 1, 2].map(n => { const th = Math.asin(n * 0.34), L = 360; return ln(90, 105, 90 + L * Math.cos(th), 105 - L * Math.sin(th), C3, 1.8) + (n ? ln(90, 105, 90 + L * Math.cos(th), 105 + L * Math.sin(th), C3, 1.8) : '') + tx(95 + L * Math.cos(th), 105 - L * Math.sin(th) + 4, `n = ${n}`, { fs: 12, c: INK }) + (n ? tx(95 + L * Math.cos(th), 105 + L * Math.sin(th) + 4, `n = ${n}`, { fs: 12, c: INK }) : ''); }).join('')}
    <path d="M160,105 A70,70 0 0 0 157,82" fill="none" stroke="${MUT}"/>${tx(166, 96, 'θ₁', { f: 'var(--f-math)', it: true, fs: 14, c: INK })}
    ${tx(300, 40, 'd sin θ = nλ', { f: 'var(--f-math)', it: true, fs: 20, c: 'var(--accent-ink)' })}`, 'Diffraction grating orders') + '<figcaption>Monochromatic light through a grating: sharp, bright maxima at angles given by d sin θ = nλ.</figcaption>',

  /* ---------- 2.6 Refraction ---------- */
  'fibre': () => svg(540, 170, `
    <rect x="20" y="40" width="500" height="90" rx="10" fill="${C4}" fill-opacity=".08" stroke="${C4}"/>
    <rect x="20" y="58" width="500" height="54" fill="${C4}" fill-opacity=".14"/>
    ${tx(28, 34, 'cladding (lower n)', { fs: 11.5 })}${tx(28, 76, 'core (higher n)', { fs: 11.5, c: INK })}
    <path d="M20,85 L85,60 L160,110 L235,60 L310,110 L385,60 L460,110 L520,88" fill="none" stroke="${C1}" stroke-width="2"/>
    <path d="M20,85 L520,85" fill="none" stroke="${C3}" stroke-width="2" stroke-dasharray="6 4"/>
    ${tx(270, 150, 'The zig-zag ray travels further than the axial ray → pulses spread (multimode dispersion)', { a: 'middle', fs: 11.5 })}`, 'Optical fibre'),
  'snell': () => svg(420, 260, `
    <rect x="0" y="130" width="420" height="130" fill="${C4}" fill-opacity=".1"/>${ln(0, 130, 420, 130, INK, 1.5)}${ln(210, 20, 210, 245, MUT, 1, '5 4')}
    ${tx(12, 122, 'air  n₁ = 1.00', { fs: 12 })}${tx(12, 150, 'glass  n₂ = 1.50', { fs: 12 })}
    ${arrow(110, 30, 210, 130, C2, 2.2)}${arrow(210, 130, 262, 245, C2, 2.2)}
    <path d="M210,85 A45,45 0 0 0 178,98" fill="none" stroke="${INK}"/>${tx(188, 80, 'θ₁', { f: 'var(--f-math)', it: true, fs: 15, c: INK })}
    <path d="M210,180 A50,50 0 0 0 231,175" fill="none" stroke="${INK}"/>${tx(222, 200, 'θ₂', { f: 'var(--f-math)', it: true, fs: 15, c: INK })}
    ${tx(290, 60, 'n₁ sin θ₁ = n₂ sin θ₂', { f: 'var(--f-math)', it: true, fs: 16, c: 'var(--accent-ink)' })}
    ${tx(290, 84, 'ray bends towards the normal', { fs: 11.5 })}`, 'Refraction at a boundary'),

  /* ---------- 2.7 Photons ---------- */
  'ek-f': () => plot({ x: [0, 12], y: [-4, 5], xt: [0, 2, 4, 6, 8, 10, 12], yt: [-4, -2, 0, 2, 4], xl: 'f / 10¹⁴ Hz', yl: 'Ek max / eV',
    fns: [{ f: f => 4.14 * f / 10 - 2.3, a: 0, b: 12, c: MUT, dash: '5 4' }, { f: f => 4.14 * f / 10 - 2.3, a: 5.56, b: 12, c: C2, label: 'gradient = h', lx: 10, ldx: -90, ldy: -10 }],
    marks: [{ x: 5.56, y: 0, label: 'f₀ (threshold)', dx: 8, dy: 16 }, { x: 0, y: -2.3, label: '−φ (intercept)', c: C1, dx: 8, dy: 4 }],
    cap: 'Ek max = hf − φ: a straight line of gradient h; different metals give parallel lines.' }),
  'levels': () => { const lv = [[-13.6, 'n = 1  −13.6 eV'], [-3.40, 'n = 2  −3.40 eV'], [-1.51, 'n = 3  −1.51 eV'], [-0.85, 'n = 4  −0.85 eV'], [0, 'ionisation  0 eV']]; const Y = e => 30 + (-e) / 14.2 * 220 * 0.9 + (e > -2 ? 0 : 0);
    const sc = e => 24 + (1 - Math.pow((e + 13.6) / 13.6, .55)) * 230; let s = '';
    lv.forEach(([e, l]) => s += ln(40, sc(e), 330, sc(e), e === 0 ? MUT : INK, 2, e === 0 ? '5 4' : '') + tx(340, sc(e) + 4, l, { fs: 12, f: 'var(--f-mono)', c: INK }));
    s += arrow(120, sc(-3.40), 120, sc(-13.6) - 3, C5, 2) + tx(126, 200, 'UV (Lyman)', { fs: 11, c: C5 });
    s += arrow(200, sc(-1.51), 200, sc(-3.40) - 3, nmCSS(656), 2.4) + tx(206, sc(-2.4), '656 nm red', { fs: 11, c: C1 });
    s += arrow(270, sc(-0.85), 270, sc(-3.40) - 3, nmCSS(486), 2.4) + tx(236, sc(-2.1) - 14, '486 nm', { fs: 11, c: C4 });
    return svg(520, 270, s, 'Hydrogen energy levels') + '<figcaption>Hydrogen energy levels (not to scale). A downward transition emits a photon of energy hf = E<sub>upper</sub> − E<sub>lower</sub>.</figcaption>'; },
  'laser4': () => { let s = ''; const lv = [[230, 'ground E₀'], [150, 'E₁ (empties fast)'], [70, 'E₂ metastable (upper laser level)'], [30, 'E₃ pump level']];
    lv.forEach(([y, l]) => s += ln(60, y, 250, y, INK, 2.2) + tx(260, y + 4, l, { fs: 12, c: INK }));
    s += arrow(90, 228, 90, 33, C5, 2.2) + tx(70, 140, 'pump', { fs: 11.5, c: C5, a: 'end' });
    s += arrow(130, 32, 150, 68, MUT, 1.6) + tx(150, 50, 'fast', { fs: 10.5 });
    s += arrow(180, 72, 180, 148, C1, 3) + tx(186, 118, 'laser transition', { fs: 11.5, c: C1, w: 600 });
    s += arrow(220, 152, 220, 227, MUT, 1.6) + tx(226, 196, 'fast', { fs: 10.5 });
    return svg(520, 250, s, 'Four-level laser') + '<figcaption>Four-level system: E₁ empties rapidly, so population inversion between E₂ and E₁ is easy to maintain.</figcaption>'; },

  /* ---------- Unit 3 ---------- */
  'shm-graphs': () => plot({ x: [0, 2], y: [-1.3, 1.3], w: 540, xt: [0, .5, 1, 1.5, 2], yt: [-1, 0, 1], xl: 't / T', yl: '', ytl: false, xtl: ['0', 'T/4', 'T/2', '3T/4', 'T'],
    fns: [{ f: t => Math.cos(2 * Math.PI * t / 2), c: C3, label: 'x', lx: 2, ldx: 6 }, { f: t => -Math.sin(2 * Math.PI * t / 2) * .8, c: C4, label: 'v', lx: 2, ldx: 6, ldy: 10 }, { f: t => -Math.cos(2 * Math.PI * t / 2) * .6, c: C1, label: 'a', lx: 1.97, ldx: 8, ldy: 2 }],
    xt: [0, .5, 1, 1.5, 2], cap: 'SHM with x = A cos ωt: velocity leads displacement by a quarter cycle; acceleration is in antiphase with displacement (a = −ω²x).' }),
  'resonance': () => plot({ x: [0, 2], y: [0, 6], xt: [0, .5, 1, 1.5, 2], yt: [0, 2, 4, 6], xl: 'driving frequency / f₀', yl: 'amplitude', ytl: false,
    fns: [[0.1, C1, 'light damping'], [0.25, C2, ''], [0.6, C4, 'heavy damping']].map(([b, c, l]) => ({ f: r => 1 / Math.sqrt((1 - r * r) ** 2 + (b * r) ** 2) * 0.6, c, label: l, lx: l === 'light damping' ? 1.08 : 1.6, ldx: 6, ldy: l === 'light damping' ? -2 : -8 })),
    vl: [{ x: 1, label: 'f₀' }], cap: 'Resonance: amplitude peaks when driving frequency ≈ natural frequency. More damping → lower, broader peak (shifted slightly lower in f).' }),
  'damping': () => plot({ x: [0, 10], y: [-1.1, 1.1], xt: [0, 2, 4, 6, 8, 10], yt: [-1, 0, 1], xl: 't', yl: 'x', ytl: false, xtl: false,
    fns: [{ f: t => Math.exp(-0.15 * t) * Math.cos(2.4 * t), c: C3, label: 'light', lx: 9.2, ldy: -10 }, { f: t => (1 + 2.4 * t) * Math.exp(-2.4 * t), c: C1, label: 'critical', lx: 2.2, ldy: -10 }, { f: t => (Math.exp(-0.3 * t) * 1.05 - 0.05 * Math.exp(-6 * t)), c: C4, label: 'heavy', lx: 6, ldy: -8 }, { f: t => Math.exp(-0.15 * t), c: MUT, dash: '4 4' }],
    cap: 'Light damping: amplitude decays exponentially. Critical: returns to equilibrium fastest without oscillating. Heavy: slow return, no oscillation.' }),
  'isotherms': () => plot({ x: [0, 5], y: [0, 5], xt: [0, 1, 2, 3, 4, 5], yt: [0, 1, 2, 3, 4, 5], xl: 'V', yl: 'p', xtl: false, ytl: false,
    fns: [[2, C4, 'T₁'], [4, C3, 'T₂'], [7, C1, 'T₃ (hottest)']].map(([k, c, l]) => ({ f: v => k / v, a: 0.4, b: 5, c, label: l, lx: 4.9, ldx: -4, ldy: -8, la: 'end' })),
    fills: [{ a: 1.5, b: 3.5, f: v => 4 / v, c: 'var(--u3)', op: .15 }], text: [[2.05, 0.6, 'area = work done W']],
    cap: 'Isotherms (pV = constant). The area under a p–V curve is the work done by the gas as it expands.' }),
  'decay': () => plot({ x: [0, 5], y: [0, 1.05], xt: [0, 1, 2, 3, 4, 5], yt: [0, .25, .5, .75, 1], xl: 't / half-lives', yl: 'N / N₀', xtl: ['0', 'T½', '2T½', '3T½', '4T½', '5T½'], ytl: ['0', '¼', '½', '¾', '1'],
    fns: [{ f: t => Math.pow(2, -t), c: C3 }], marks: [{ x: 1, y: .5 }, { x: 2, y: .25 }, { x: 3, y: .125 }],
    extra: (X, Y) => ln(X(0), Y(.5), X(1), Y(.5), MUT, 1, '4 3') + ln(X(1), Y(0), X(1), Y(.5), MUT, 1, '4 3') + ln(X(0), Y(.25), X(2), Y(.25), MUT, 1, '4 3') + ln(X(2), Y(0), X(2), Y(.25), MUT, 1, '4 3'),
    cap: 'Exponential decay: N = N₀e^−λt. The number remaining halves every half-life whatever the starting number.' }),
  'ln-decay': () => plot({ x: [0, 50], y: [0, 7], xt: [0, 10, 20, 30, 40, 50], yt: [0, 2, 4, 6], xl: 't / min', yl: 'ln(A / Bq)',
    fns: [{ f: t => 6.5 - 0.0866 * t, c: C3 }], text: [[16, 5.6, 'gradient = −λ'], [3, 6.6, 'intercept = ln A₀']],
    cap: 'Plotting ln A against t gives a straight line: ln A = ln A₀ − λt.' }),
  'binding': () => {
    const BA = A => { const Z = A / (2 + 0.0154 * A ** (2 / 3)); return (15.8 * A - 18.3 * A ** (2 / 3) - 0.714 * Z * (Z - 1) / A ** (1 / 3) - 23.2 * (A - 2 * Z) ** 2 / A) / A; };
    return plot({ x: [0, 250], y: [0, 10], w: 540, xt: [0, 50, 100, 150, 200, 250], yt: [0, 2, 4, 6, 8, 10], xl: 'nucleon number A', yl: 'binding energy per nucleon / MeV',
      fns: [{ f: BA, a: 12, b: 245, c: C3 }],
      segs: [{ p: [[2, 1.11], [3, 2.57], [4, 7.07], [6, 5.33], [7, 5.61], [9, 6.46], [12, 7.68]], c: C3, w: 1.6, dash: '4 3' }],
      marks: [{ x: 56, y: BA(56), label: '⁵⁶Fe (most stable)', dy: -10 }, { x: 4, y: 7.07, label: '⁴He', c: C1, dx: 8, dy: -4 }, { x: 235, y: BA(235), label: '²³⁵U', c: C4, dx: -8, a: 'end', dy: -10 }, { x: 2, y: 1.11, label: '²H', c: C1, dx: 8, dy: 4 }],
      extra: (X, Y) => arrow(X(22), Y(4), X(48), Y(6.8), C1, 1.8) + tx(X(20), Y(3.4), 'fusion', { c: C1, w: 600, fs: 12 }) + arrow(X(225), Y(6.2), X(130), Y(7.4), C4, 1.8) + tx(X(170), Y(5.7), 'fission', { c: C4, w: 600, fs: 12 }),
      cap: 'Binding energy per nucleon (approximate). Energy is released by any change that moves nuclei up towards the iron peak.' }); },

  /* ---------- Unit 4 ---------- */
  'rc': () => plot({ x: [0, 5], y: [0, 1.05], w: 540, xt: [0, 1, 2, 3, 4, 5], yt: [0, .37, .63, 1], xl: 't / RC', yl: 'Q / Q₀', xtl: ['0', 'RC', '2RC', '3RC', '4RC', '5RC'], ytl: ['0', '0.37', '0.63', '1'],
    fns: [{ f: t => 1 - Math.exp(-t), c: C4, label: 'charging: Q = Q₀(1 − e^(−t/RC))', lx: 2.3, ldx: 0, ldy: -12 }, { f: t => Math.exp(-t), c: C1, label: 'discharging: Q = Q₀e^(−t/RC)', lx: 1.5, ldx: 10, ldy: 4 }],
    extra: (X, Y) => ln(X(1), Y(0), X(1), Y(.632), MUT, 1, '4 3') + ln(X(0), Y(.368), X(1), Y(.368), MUT, 1, '4 3') + ln(X(0), Y(.632), X(1), Y(.632), MUT, 1, '4 3'),
    cap: 'After one time constant RC a discharging capacitor keeps 37% of its charge; a charging one reaches 63%.' }),
  'field-radial': () => { let s = `<circle cx="130" cy="120" r="16" fill="${C1}"/>${tx(130, 125, '+', { a: 'middle', c: '#fff', fs: 18, w: 700 })}`;
    for (let k = 0; k < 12; k++) { const a = k * Math.PI / 6; s += arrow(130 + 22 * Math.cos(a), 120 + 22 * Math.sin(a), 130 + 95 * Math.cos(a), 120 + 95 * Math.sin(a), C1, 1.5); }
    [45, 70, 95].forEach(r => s += `<circle cx="130" cy="120" r="${r}" fill="none" stroke="${C4}" stroke-dasharray="4 4" stroke-width="1.2"/>`);
    s += `<rect x="290" y="30" width="10" height="180" fill="${C1}"/><rect x="460" y="30" width="10" height="180" fill="${C4}"/>` + tx(295, 24, '+', { a: 'middle', c: C1, fs: 16, w: 700 }) + tx(465, 24, '−', { a: 'middle', c: C4, fs: 16, w: 700 });
    for (let k = 0; k < 7; k++) s += arrow(302, 45 + k * 25, 456, 45 + k * 25, C1, 1.4);
    [345, 380, 415].forEach(x => s += ln(x, 36, x, 206, C4, 1.2, '4 4'));
    s += tx(130, 236, 'radial field: E ∝ 1/r²', { a: 'middle', fs: 12, c: INK }) + tx(380, 236, 'uniform field: E = V/d', { a: 'middle', fs: 12, c: INK });
    return svg(520, 248, s, 'Electric fields') + '<figcaption>Field lines (solid) are always perpendicular to equipotentials (dashed).</figcaption>'; },
  'grav-potential': () => plot({ x: [0, 6], y: [-1.2, 0.2], xt: [1, 2, 3, 4, 5, 6], yt: [-1, -0.5, 0], xl: 'r / R', yl: 'V', xtl: ['R', '2R', '3R', '4R', '5R', '6R'], ytl: ['−GM/R', '', '0'],
    fns: [{ f: r => -1 / r, a: 1, b: 6, c: C4, label: 'V = −GM/r', lx: 2.4, ldx: 6, ldy: 16 }], vl: [{ x: 1, label: '' }],
    cap: 'Gravitational potential is negative and tends to zero at infinity. Field strength g = −(gradient of V).' }),
  'rotation-curve': () => plot({ x: [0, 50], y: [0, 300], xt: [0, 10, 20, 30, 40, 50], yt: [0, 100, 200, 300], xl: 'distance from centre / kly', yl: 'orbital speed / km s⁻¹',
    fns: [{ f: r => 230 * (1 - Math.exp(-r / 3.5)) * 1.0 + 0 * r, a: 0, b: 50, c: C1, label: 'observed (flat)', lx: 40, ldx: -30, ldy: -10 }, { f: r => r < 8 ? 230 * (1 - Math.exp(-r / 3.5)) : 230 * (1 - Math.exp(-8 / 3.5)) * Math.sqrt(8 / r), a: 0, b: 50, c: C4, dash: '6 4', label: 'predicted from visible mass (v ∝ 1/√r)', lx: 18, ldx: 0, ldy: 30 }],
    cap: 'Galaxy rotation curve: stars far out orbit much faster than the visible mass allows → evidence for dark matter.' }),
  'bfield-wire': () => { let s = '';
    [30, 55, 80].forEach(r => s += `<circle cx="130" cy="120" r="${r}" fill="none" stroke="${C4}" stroke-width="1.6"/>` + arrowHead(130 + r, 120, Math.PI / 2, C4, 8));
    s += `<circle cx="130" cy="120" r="9" fill="var(--surface)" stroke="${INK}" stroke-width="2"/><circle cx="130" cy="120" r="2.6" fill="${INK}"/>` + tx(130, 224, 'current out of page ⊙: field anticlockwise', { a: 'middle', fs: 11.5, c: INK });
    s += `<rect x="300" y="95" width="200" height="50" rx="8" fill="none" stroke="${INK}"/>`;
    for (let i = 0; i < 8; i++) s += ln(312 + i * 24, 92, 324 + i * 24, 148, C2, 2);
    for (let k = -1; k <= 1; k++) s += arrow(310, 120 + k * 12, 490, 120 + k * 12, C4, 1.4);
    s += `<path d="M300,108 C220,20 580,20 500,108" fill="none" stroke="${C4}" stroke-width="1.3"/><path d="M300,132 C220,220 580,220 500,132" fill="none" stroke="${C4}" stroke-width="1.3"/>` + tx(400, 224, 'solenoid: uniform inside, B = μ₀nI', { a: 'middle', fs: 11.5, c: INK });
    return svg(540, 236, s, 'Magnetic fields of a wire and a solenoid') + '<figcaption>Wire: B = μ₀I / 2πa (right-hand grip rule). Solenoid: strong uniform field inside.</figcaption>'; },

  /* ---------- Options ---------- */
  'ac-rms': () => plot({ x: [0, 40], y: [-12, 12], w: 540, xt: [0, 10, 20, 30, 40], yt: [-10, -7.07, 0, 7.07, 10], xl: 't / ms', yl: 'V / V', ytl: ['−V₀', '', '0', 'Vrms', 'V₀'],
    fns: [{ f: t => 10 * Math.sin(2 * Math.PI * t / 20), c: C5 }], hl: [{ y: 7.07, label: 'Vrms = V₀/√2', c: ACC }],
    cap: 'A 50 Hz sinusoidal pd (period 20 ms). The rms value gives the same heating as a steady dc pd.' }),
  'lcr-res': () => plot({ x: [0, 2000], y: [0, 1.1], xt: [0, 500, 1000, 1500, 2000], yt: [0, .5, 1], xl: 'f / Hz', yl: 'I / I_max', ytl: ['0', '0.5', '1'],
    fns: [[20, C5, 'small R (high Q)'], [80, C4, 'larger R']].map(([R, c, l]) => ({ f: f => { const w = 2 * Math.PI * f, L = .1, C = 1 / ((2 * Math.PI * 800) ** 2 * .1); const Z = Math.sqrt(R * R + (w * L - 1 / (w * C)) ** 2); return R / Z; }, a: 20, b: 2000, c, label: l, lx: l.startsWith('small') ? 860 : 1300, ldx: 6, ldy: l.startsWith('small') ? -6 : 14 })),
    vl: [{ x: 800, label: 'f₀ = 1/2π√(LC)' }], cap: 'Series LCR resonance: current peaks when X_L = X_C. Lower resistance → sharper peak (higher Q).' }),
  'attenuation': () => plot({ x: [0, 20], y: [0, 1.05], xt: [0, 5, 10, 15, 20], yt: [0, .25, .5, 1], xl: 'thickness x / mm', yl: 'I / I₀', ytl: ['0', '¼', '½', '1'],
    fns: [{ f: x => Math.exp(-0.139 * x), c: C5 }], vl: [{ x: 5, y: .5, label: 'x½' }], hl: [{ y: .5, x: 5 }], cap: 'X-ray attenuation I = I₀e^(−μx). The half-value thickness x½ = ln 2 / μ.' }),
  'greenhouse': () => { let s = `<rect x="0" y="200" width="540" height="40" fill="${C3}" fill-opacity=".25"/>` + tx(12, 226, 'Earth’s surface (~288 K)', { fs: 11.5, c: INK });
    s += `<rect x="0" y="70" width="540" height="40" fill="${C4}" fill-opacity=".12"/>` + tx(12, 94, 'atmosphere: CO₂, H₂O, CH₄ absorb IR', { fs: 11.5, c: INK });
    s += `<circle cx="480" cy="30" r="18" fill="${C2}"/>` + arrow(460, 44, 330, 196, C2, 2.4) + tx(380, 150, 'short λ (visible/UV) passes through', { fs: 11, c: 'var(--accent-ink)' });
    s += arrow(180, 198, 150, 110, C1, 2.4) + arrow(150, 108, 190, 196, C1, 1.8) + arrow(150, 108, 120, 42, C1, 1.4) + tx(20, 170, 'long λ IR re-emitted', { fs: 11, c: C1 });
    return svg(540, 244, s, 'Greenhouse effect') + '<figcaption>The Sun (T ≈ 5800 K) emits mostly short wavelengths; the cooler Earth radiates long-wavelength infrared that greenhouse gases absorb and re-radiate.</figcaption>'; }
};
