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


/* ==========================================================
   Standard circuit symbols (AQA 4.2.1.1) — each drawn centred on (x, y), 60 px long, horizontal.
   rot = 90 draws it vertically.
   ========================================================== */
const SYM = {
  'cell': (x, y) => ln(x - 30, y, x - 4, y) + ln(x - 4, y - 13, x - 4, y + 13, INK, 2) + ln(x + 4, y - 7, x + 4, y + 7, INK, 4.5) + ln(x + 4, y, x + 30, y),
  'battery': (x, y) => ln(x - 30, y, x - 12, y) + ln(x - 12, y - 13, x - 12, y + 13, INK, 2) + ln(x - 5, y - 7, x - 5, y + 7, INK, 4.5) + ln(x - 5, y, x + 5, y, INK, 1.5, '2 3') + ln(x + 5, y - 13, x + 5, y + 13, INK, 2) + ln(x + 12, y - 7, x + 12, y + 7, INK, 4.5) + ln(x + 12, y, x + 30, y),
  'switch (open)': (x, y) => ln(x - 30, y, x - 14, y) + `<circle cx="${x - 14}" cy="${y}" r="2.6" fill="${INK}"/><circle cx="${x + 14}" cy="${y}" r="2.6" fill="${INK}"/>` + ln(x - 14, y, x + 11, y - 13) + ln(x + 14, y, x + 30, y),
  'switch (closed)': (x, y) => ln(x - 30, y, x - 14, y) + `<circle cx="${x - 14}" cy="${y}" r="2.6" fill="${INK}"/><circle cx="${x + 14}" cy="${y}" r="2.6" fill="${INK}"/>` + ln(x - 14, y, x + 14, y) + ln(x + 14, y, x + 30, y),
  'resistor': (x, y) => ln(x - 30, y, x - 15, y) + `<rect x="${x - 15}" y="${y - 7}" width="30" height="14" fill="var(--surface)" stroke="${INK}" stroke-width="1.8"/>` + ln(x + 15, y, x + 30, y),
  'variable resistor': (x, y) => SYM.resistor(x, y) + arrow(x - 14, y + 13, x + 15, y - 14, INK, 1.5),
  'lamp': (x, y) => ln(x - 30, y, x - 11, y) + `<circle cx="${x}" cy="${y}" r="11" fill="var(--surface)" stroke="${INK}" stroke-width="1.8"/>` + ln(x - 7.8, y - 7.8, x + 7.8, y + 7.8) + ln(x + 7.8, y - 7.8, x - 7.8, y + 7.8) + ln(x + 11, y, x + 30, y),
  'fuse': (x, y) => ln(x - 30, y, x - 15, y) + `<rect x="${x - 15}" y="${y - 6}" width="30" height="12" fill="var(--surface)" stroke="${INK}" stroke-width="1.8"/>` + ln(x - 22, y, x + 22, y, INK, 1.3) + ln(x + 15, y, x + 30, y),
  'diode': (x, y) => ln(x - 30, y, x + 30, y) + `<path d="M${x - 8},${y - 10} L${x - 8},${y + 10} L${x + 8},${y} Z" fill="var(--surface)" stroke="${INK}" stroke-width="1.8"/>` + ln(x + 8, y - 10, x + 8, y + 10, INK, 2),
  'LED': (x, y) => SYM.diode(x, y) + arrow(x - 2, y - 12, x + 7, y - 22, INK, 1.4) + arrow(x + 5, y - 11, x + 14, y - 21, INK, 1.4),
  'LDR': (x, y) => `<circle cx="${x}" cy="${y}" r="19" fill="none" stroke="${INK}" stroke-width="1.5"/>` + SYM.resistor(x, y) + arrow(x - 26, y - 26, x - 12, y - 13, INK, 1.4) + arrow(x - 16, y - 30, x - 3, y - 17, INK, 1.4),
  'thermistor': (x, y) => SYM.resistor(x, y) + ln(x - 22, y + 13, x - 16, y + 13, INK, 1.5) + ln(x - 16, y + 13, x + 15, y - 13, INK, 1.5),
  'ammeter': (x, y) => ln(x - 30, y, x - 12, y) + `<circle cx="${x}" cy="${y}" r="12" fill="var(--surface)" stroke="${INK}" stroke-width="1.8"/>` + tx(x, y + 5, 'A', { a: 'middle', fs: 14, c: INK, w: 700 }) + ln(x + 12, y, x + 30, y),
  'voltmeter': (x, y) => ln(x - 30, y, x - 12, y) + `<circle cx="${x}" cy="${y}" r="12" fill="var(--surface)" stroke="${INK}" stroke-width="1.8"/>` + tx(x, y + 5, 'V', { a: 'middle', fs: 14, c: INK, w: 700 }) + ln(x + 12, y, x + 30, y)
};
const sym = (name, x, y, rot) => rot ? `<g transform="rotate(${rot} ${x} ${y})">${SYM[name](x, y)}</g>` : SYM[name](x, y);
const wire = (...pts) => `<polyline points="${pts.map(p => p.join(',')).join(' ')}" fill="none" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/>`;
const dot = (x, y, c = INK, r = 3) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
const SYMBOL_BANK = Object.keys(SYM).map(k => [svg(120, 70, SYM[k](60, 38), k).replace('width="120"', 'width="240"'), k]);
const box = (x, y, w, h, fill = 'var(--surface)', stroke = INK, r = 6, sw = 1.6) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const cap = s => `<figcaption>${s}</figcaption>`;
const circ = (x, y, r, fill = 'none', stroke = INK, sw = 1.6) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const pth = (d, stroke = INK, sw = 1.8, fill = 'none', dash = '') => `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${dash ? `stroke-dasharray="${dash}"` : ''} stroke-linejoin="round" stroke-linecap="round"/>`;
const bar = (x, y, w, h, c, lab, val) => `<rect x="${x}" y="${y - h}" width="${w}" height="${h}" rx="3" fill="${c}"/>` + (lab ? tx(x + w / 2, y + 15, lab, { a: 'middle', fs: 11 }) : '') + (val != null ? tx(x + w / 2, y - h - 5, val, { a: 'middle', fs: 11, c: INK, f: 'var(--f-mono)' }) : '');

const DIAG = {
  /* ================= 4.1 ENERGY ================= */
  stores: () => { let s = ''; const pos = [[70, 'thrown up', 1, 0], [250, 'half-way up', .5, .5], [430, 'at the top', 0, 1]];
    s += ln(20, 200, 520, 200, MUT);
    pos.forEach(([x, lab, k, p], i) => { const by = 200 - [10, 90, 170][i]; s += circ(x, by - 12, 12, C1, INK) + (k ? arrow(x, by - 30, x, by - 30 - 40 * k, INK, 2) : '') + tx(x, 222, lab, { a: 'middle', fs: 12, c: INK, w: 600 });
      s += bar(x + 30, 195, 18, 90 * k + 1, C1, 'Eₖ') + bar(x + 54, 195, 18, 90 * p + 1, C5, 'Eₚ'); });
    return svg(540, 240, s, 'Energy stores of a ball thrown upwards') + cap('A ball thrown upwards: energy moves from the kinetic store to the gravitational potential store and back again (ignoring air resistance). The total stays the same.'); },
  shcrig: () => { let s = '';
    s += box(160, 90, 150, 110, 'color-mix(in srgb,var(--muted) 30%,var(--surface))', INK, 4) + tx(235, 180, 'aluminium block', { a: 'middle', fs: 12, c: INK });
    s += `<rect x="150" y="80" width="170" height="130" rx="8" fill="none" stroke="${C2}" stroke-width="3" stroke-dasharray="3 4"/>` + tx(330, 212, 'insulation', { fs: 11, c: C2 });
    s += box(190, 40, 14, 110, C1, INK, 3) + tx(212, 22, 'heater', { fs: 12 }); s += box(262, 30, 8, 120, 'var(--surface)', INK, 4) + `<rect x="264" y="95" width="4" height="50" fill="${BAD}"/>` + tx(280, 34, 'thermometer', { fs: 12 });
    s += box(20, 40, 100, 50, 'var(--surface-2)', INK, 8) + tx(70, 62, 'joulemeter', { a: 'middle', fs: 12, c: INK, w: 600 }) + tx(70, 80, '0 0 1 2 5 0 J', { a: 'middle', fs: 11, f: 'var(--f-mono)', c: INK });
    s += wire([120, 55], [197, 55]) + wire([120, 75], [140, 75], [140, 30], [197, 30], [197, 40]);
    s += box(20, 150, 100, 40, 'var(--surface-2)', INK, 8) + tx(70, 175, 'power supply', { a: 'middle', fs: 12 }) + wire([50, 150], [50, 90]) + wire([90, 150], [90, 90]);
    return svg(420, 230, s, 'Specific heat capacity apparatus') + cap('Required practical 1: an insulated metal block heated by an immersion heater. The joulemeter measures the energy supplied; the thermometer measures the temperature rise.'); },
  sankey: () => { let s = '';
    s += `<path d="M20,40 L430,40 L430,28 L470,45 L430,62 L430,50 L20,50 Z" fill="${C2}"/>`;
    s += `<path d="M20,50 L200,50 A110,110 0 0 1 310,160 L310,196 L332,196 L265,250 L198,196 L220,196 L220,160 A20,20 0 0 0 200,140 L20,140 Z" fill="${C1}" opacity=".78"/>`;
    s += tx(30, 100, '100 J in', { fs: 14, c: '#fff', w: 700 }) + tx(30, 118, '(electrical)', { fs: 12, c: '#fff' }) + tx(440, 22, '10 J light (useful)', { fs: 13, c: INK, w: 700, a: 'middle' }) + tx(345, 220, '90 J wasted', { fs: 13, c: INK, w: 700 }) + tx(345, 238, 'thermal store of the surroundings', { fs: 12 });
    return svg(540, 260, s, 'Sankey diagram for a filament lamp') + cap('Sankey diagram for a filament lamp. Arrow widths are proportional to energy: input = useful output + wasted output. Efficiency = 10 ÷ 100 = 0.10 (10%).'); },

  /* ================= 4.2 ELECTRICITY ================= */
  symbols: () => { const ks = Object.keys(SYM); let s = ''; ks.forEach((k, i) => { const x = 70 + (i % 4) * 140, y = 40 + Math.floor(i / 4) * 80; s += SYM[k](x, y) + tx(x, y + 34, k, { a: 'middle', fs: 12, c: INK, w: 600 }); });
    return svg(560, 40 + Math.ceil(ks.length / 4) * 80, s, 'Standard circuit symbols') + cap('Standard circuit symbols you must be able to draw and recognise. On a cell the longer line is the positive terminal.'); },
  wirerig: () => { let s = '';
    s += box(40, 150, 420, 22, 'color-mix(in srgb,var(--u2) 20%,var(--surface))', INK, 3); for (let i = 0; i <= 10; i++) s += ln(50 + i * 40, 150, 50 + i * 40, 158, INK, 1) + tx(50 + i * 40, 168, i * 10, { a: 'middle', fs: 9, f: 'var(--f-mono)' });
    s += ln(50, 145, 450, 145, C1, 2.2) + tx(452, 138, 'resistance wire', { a: 'end', fs: 11, c: C1 });
    s += `<path d="M44,136 l12,0 l0,14 l-12,0 z" fill="${INK}"/><path d="M284,136 l12,0 l0,14 l-12,0 z" fill="${INK}"/>` + tx(290, 188, '↑ crocodile clip at length L', { a: 'middle', fs: 11 });
    s += sym('battery', 170, 40) + sym('ammeter', 330, 40) + wire([140, 40], [60, 40], [60, 90], [50, 90], [50, 136]) + wire([200, 40], [300, 40]) + wire([360, 40], [420, 40], [420, 90], [290, 90], [290, 136]);
    s += sym('voltmeter', 170, 100) + wire([140, 100], [50, 100]) + wire([200, 100], [260, 100], [260, 118], [290, 118]) + dot(50, 100) + dot(290, 118);
    return svg(500, 198, s, 'Resistance of a wire apparatus') + cap('Required practical 3: the voltmeter measures the pd across length L of wire; the ammeter measures the current. R = V ÷ I. Use a low pd so the wire stays cool.'); },
  ivall: () => { const g = (ox, title, f, col) => { let s = ''; const X = v => ox + 90 + v * 70, Y = v => 100 - v * 70; s += arrow(ox + 10, 100, ox + 170, 100, INK, 1.2) + arrow(ox + 90, 175, ox + 90, 22, INK, 1.2) + tx(ox + 172, 114, 'V', { fs: 12, c: INK, it: true, a: 'end' }) + tx(ox + 96, 28, 'I', { fs: 12, c: INK, it: true });
      let d = ''; for (let i = 0; i <= 80; i++) { const v = -1.1 + 2.2 * i / 80, iv = f(v); if (iv > 1.1 || iv < -1.1) continue; d += (d ? 'L' : 'M') + X(v).toFixed(1) + ',' + Y(iv).toFixed(1); } s += pth(d, col, 2.6) + tx(ox + 90, 198, title, { a: 'middle', fs: 13, c: INK, w: 700 }); return s; };
    const s = g(0, 'resistor (constant T)', v => 0.85 * v, C1) + g(185, 'filament lamp', v => Math.sign(v) * 1.0 * (1 - Math.exp(-2.4 * Math.abs(v))) * 1.02, C2) + g(370, 'diode', v => v < 0.45 ? 0.004 * v : Math.min(1.2, 9 * (v - 0.45) ** 1.5), C5);
    return svg(560, 210, s, 'I–V graphs') + cap('I–V characteristics. Resistor: straight line through the origin (ohmic). Filament lamp: curve — resistance increases as it heats up. Diode: current flows one way only, above about 0.6 V.'); },
  sensors: () => plot({ x: [0, 10], y: [0, 10], w: 520, h: 250, xtl: false, ytl: false, xt: [], yt: [], xl: 'temperature → / light intensity →', yl: 'resistance',
    fns: [{ f: x => 9 * Math.exp(-0.28 * x) + 0.4, c: C1, label: 'thermistor (against temperature)', lx: 3, ldy: -8 }, { f: x => 8 / (0.9 + x) + 0.6, c: C6, label: 'LDR (against light intensity)', lx: 2.6, ldy: 30 }],
    cap: 'Both resistances fall: a thermistor’s as temperature rises, an LDR’s as light intensity rises.' }),
  ivrig: () => { let s = '';
    s += sym('battery', 90, 40) + sym('variable resistor', 260, 40) + sym('ammeter', 400, 40) + wire([60, 40], [30, 40], [30, 150], [140, 150]) + wire([120, 40], [230, 40]) + wire([290, 40], [370, 40]) + wire([430, 40], [470, 40], [470, 150], [320, 150]);
    s += box(160, 130, 140, 40, 'var(--surface-2)', INK, 8) + tx(230, 155, 'component', { a: 'middle', fs: 12, c: INK, w: 600 }) + wire([140, 150], [160, 150]) + wire([300, 150], [320, 150]);
    s += sym('voltmeter', 230, 205) + wire([200, 205], [140, 205], [140, 150]) + wire([260, 205], [320, 205], [320, 150]) + dot(140, 150) + dot(320, 150);
    return svg(500, 230, s, 'Circuit for I–V characteristics') + cap('Required practical 4: ammeter in series, voltmeter in parallel with the component, variable resistor to change the pd. Reverse the battery for negative values.'); },
  series: () => { let s = '';
    s += sym('battery', 250, 30) + tx(250, 12, '6.0 V', { a: 'middle', fs: 12, c: INK }) + sym('resistor', 150, 150) + sym('resistor', 350, 150) + sym('ammeter', 60, 90, 90);
    s += wire([220, 30], [60, 30], [60, 60]) + wire([60, 120], [60, 150], [120, 150]) + wire([180, 150], [320, 150]) + wire([380, 150], [440, 150], [440, 30], [280, 30]);
    s += tx(150, 180, 'R₁ = 4 Ω · V₁ = 2.0 V', { a: 'middle', fs: 12, c: C1, w: 600 }) + tx(350, 180, 'R₂ = 8 Ω · V₂ = 4.0 V', { a: 'middle', fs: 12, c: C1, w: 600 }) + tx(78, 94, 'I = 0.50 A everywhere', { fs: 12, c: C5, w: 600 });
    return svg(480, 200, s, 'Series circuit') + cap('Series: the same current through each component; the supply pd is shared (2.0 V + 4.0 V = 6.0 V); total resistance = 4 + 8 = 12 Ω.'); },
  parallel: () => { let s = '';
    s += sym('battery', 250, 30) + tx(250, 12, '12 V', { a: 'middle', fs: 12, c: INK }) + sym('lamp', 250, 110) + sym('lamp', 250, 180);
    s += wire([220, 30], [100, 30], [100, 180], [220, 180]) + wire([100, 110], [220, 110]) + wire([280, 30], [400, 30], [400, 180], [280, 180]) + wire([280, 110], [400, 110]) + dot(100, 110) + dot(400, 110);
    s += tx(250, 90, '0.50 A · 12 V', { a: 'middle', fs: 12, c: C5, w: 600 }) + tx(250, 160, '0.30 A · 12 V', { a: 'middle', fs: 12, c: C5, w: 600 }) + tx(410, 60, 'supply current', { fs: 12, c: C1, w: 600 }) + tx(410, 76, '0.80 A', { fs: 12, c: C1, w: 600 });
    return svg(520, 200, s, 'Parallel circuit') + cap('Parallel: each branch has the full supply pd; the branch currents add up to the supply current (0.50 + 0.30 = 0.80 A).'); },
  acdc: () => plot({ x: [0, 0.06], y: [-360, 360], w: 520, h: 250, xt: [0, 0.02, 0.04, 0.06], yt: [-300, 0, 300], xtl: ['0', '0.02', '0.04', '0.06'], xl: 'time / s', yl: 'pd / V',
    fns: [{ f: t => 325 * Math.sin(2 * Math.PI * 50 * t), c: C1, label: 'ac mains (50 Hz)', lx: 0.013, ldy: -12 }, { f: t => 120, c: C5, label: 'dc (battery)', lx: 0.05, ldy: -8 }],
    cap: 'dc stays in one direction. ac reverses direction: the UK mains completes 50 cycles every second (period 0.02 s). Its value is quoted as about 230 V.' }),
  plug: () => { let s = '';
    s += box(90, 20, 300, 250, 'var(--surface-2)', INK, 26) + box(120, 45, 36, 60, '#8A8F96', INK, 3) + box(222, 30, 36, 70, '#8A8F96', INK, 3) + box(324, 45, 36, 60, '#8A8F96', INK, 3);
    s += tx(138, 80, 'N', { a: 'middle', fs: 15, c: '#fff', w: 700 }) + tx(240, 70, 'E', { a: 'middle', fs: 15, c: '#fff', w: 700 }) + tx(342, 80, 'L', { a: 'middle', fs: 15, c: '#fff', w: 700 }) + box(318, 130, 48, 20, '#E7D9A8', INK, 6) + tx(342, 144, 'fuse', { a: 'middle', fs: 10, c: '#3B2F12' });
    s += pth('M240,255 C240,210 240,160 240,100', '#3F9A3A', 6) + pth('M240,255 C240,210 240,160 240,100', '#E8D23A', 6, 'none', '8 8');
    s += pth('M225,255 C200,220 150,180 138,105', '#1C6FA8', 6) + pth('M255,255 C290,220 342,190 342,150', '#8B5A2B', 6);
    s += box(200, 245, 80, 25, '#5B6C79', INK, 5) + tx(240, 262, 'cable grip', { a: 'middle', fs: 10, c: '#fff' });
    s += tx(20, 180, 'neutral — blue', { fs: 12, c: '#1C6FA8', w: 700 }) + tx(400, 180, 'live — brown', { fs: 12, c: '#8B5A2B', w: 700 }) + tx(240, 290, 'earth — green/yellow stripes', { a: 'middle', fs: 12, c: '#3F9A3A', w: 700 });
    return svg(520, 300, s, 'Wiring of a UK plug') + cap('Three-core cable in a UK plug. Live (brown) carries the alternating pd at about 230 V; neutral (blue) completes the circuit at about 0 V; earth (green and yellow) is a safety wire at 0 V.'); },
  grid: () => { let s = ''; const bx = (x, lab, sub, c) => box(x, 70, 96, 56, 'var(--surface-2)', c, 10, 2) + tx(x + 48, 94, lab, { a: 'middle', fs: 12, c: INK, w: 700 }) + tx(x + 48, 112, sub, { a: 'middle', fs: 11 });
    s += bx(4, 'power station', '≈ 25 kV', C1) + bx(134, 'step-up', 'transformer', C5) + bx(290, 'step-down', 'transformer', C5) + bx(420, 'homes', '230 V', C3);
    s += arrow(100, 98, 132, 98, INK) + arrow(230, 98, 288, 98, INK) + arrow(386, 98, 418, 98, INK);
    s += pth('M244,60 L254,20 L264,60 M249,40 L259,40', INK, 1.6) + tx(259, 14, 'pylons · up to 400 kV', { a: 'middle', fs: 11 }) + tx(259, 150, 'high pd → small current → little energy lost heating the cables', { a: 'middle', fs: 12, c: C1, w: 600 });
    return svg(520, 165, s, 'The National Grid') + cap('The National Grid. Step-up transformers raise the pd so the current is small, so less power is wasted heating the cables (P = I²R). Step-down transformers lower the pd for safe domestic use.'); },
  rub: () => { let s = '';
    s += `<rect x="40" y="60" width="200" height="28" rx="14" fill="${C5}" opacity=".35" stroke="${INK}"/>` + tx(140, 50, 'polythene rod', { a: 'middle', fs: 12, c: INK, w: 600 });
    [60, 90, 120, 150, 180, 210].forEach(x => s += tx(x, 79, '−', { a: 'middle', fs: 18, c: C5, w: 700 }));
    s += `<path d="M300,50 q40,-20 80,0 q20,30 0,60 q-40,20 -80,0 q-20,-30 0,-60z" fill="${C2}" opacity=".35" stroke="${INK}"/>` + tx(340, 30, 'duster', { a: 'middle', fs: 12, c: INK, w: 600 });
    [315, 340, 365, 325, 355, 340].forEach((x, i) => s += tx(x, 70 + (i > 2 ? 22 : 0), '+', { a: 'middle', fs: 18, c: C1, w: 700 }));
    s += arrow(290, 115, 230, 115, INK, 1.6) + tx(260, 132, 'electrons move', { a: 'middle', fs: 11 });
    return svg(420, 145, s, 'Charging by friction') + cap('Rubbing transfers electrons from the duster to the rod: the rod becomes negative and the duster is left with an equal positive charge.'); },
  efield: () => { let s = ''; const f = (cx, sign, col) => { let t = ''; for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6, x1 = cx + 26 * Math.cos(a), y1 = 100 + 26 * Math.sin(a), x2 = cx + 88 * Math.cos(a), y2 = 100 + 88 * Math.sin(a); t += sign > 0 ? arrow(x1, y1, x2, y2, col, 1.4) : arrow(x2, y2, x1, y1, col, 1.4); } return t + circ(cx, 100, 22, col, INK) + tx(cx, 108, sign > 0 ? '+' : '−', { a: 'middle', fs: 24, c: '#fff', w: 700 }); };
    s += f(110, 1, C1) + f(360, -1, C6);
    return svg(470, 200, s, 'Electric field of isolated charged spheres') + cap('Electric fields around isolated charged spheres are radial: outwards from a positive charge, inwards to a negative charge. Lines are closest together — the field is strongest — near the sphere.'); },

  /* ================= 4.3 PARTICLE MODEL ================= */
  states: () => { let s = ''; const bx = (x, lab, pts) => box(x, 20, 150, 130, 'var(--surface-2)', INK, 8) + pts.map(([px, py]) => circ(x + px, 20 + py, 8, C3, INK, 1)).join('') + tx(x + 75, 172, lab, { a: 'middle', fs: 13, c: INK, w: 700 });
    const solid = []; for (let r = 0; r < 5; r++) for (let c = 0; c < 6; c++) solid.push([22 + c * 21, 25 + r * 21]);
    const liq = []; for (let i = 0; i < 26; i++) liq.push([16 + (i * 37) % 118, 62 + ((i * 53) % 60)]);
    const gas = [[20, 20], [100, 30], [60, 70], [130, 100], [30, 110], [90, 110]];
    s += bx(10, 'solid', solid) + bx(185, 'liquid', liq) + bx(360, 'gas', gas);
    return svg(520, 185, s, 'Particle arrangements') + cap('Solid: regular, close together, vibrating. Liquid: close together but random, moving past each other. Gas: far apart, random, moving fast — so gases have much lower density.'); },
  eureka: () => { let s = '';
    s += pth('M40,60 L40,190 L150,190 L150,60', INK, 2) + `<rect x="42" y="80" width="106" height="108" fill="${C6}" opacity=".3"/>` + pth('M150,82 L200,110', INK, 2) + tx(95, 214, 'displacement (eureka) can', { a: 'middle', fs: 12 });
    s += box(80, 120, 32, 30, C3, INK, 6) + ln(96, 40, 96, 120, INK, 1) + tx(104, 44, 'thread', { fs: 11 });
    s += pth('M200,112 q4,10 4,24', C6, 2, 'none', '3 3') + pth('M190,120 L190,200 L230,200 L230,120', INK, 2) + `<rect x="192" y="160" width="36" height="38" fill="${C6}" opacity=".3"/>` + tx(250, 170, 'water collected in cylinder', { fs: 12 }) + tx(250, 186, '= volume of the object', { fs: 11, c: INK });
    return svg(440, 225, s, 'Displacement can') + cap('Required practical 5: an irregular object displaces its own volume of water into the measuring cylinder.'); },
  statechanges: () => { let s = ''; const n = (x, y, t, c) => box(x - 52, y - 20, 104, 40, 'var(--surface-2)', c, 10, 2) + tx(x, y + 5, t, { a: 'middle', fs: 14, c: INK, w: 700 });
    s += n(90, 190, 'solid', C3) + n(430, 190, 'liquid', C6) + n(260, 40, 'gas', C1);
    s += arrow(150, 182, 372, 182, INK) + tx(260, 174, 'melting', { a: 'middle', fs: 12 }) + arrow(372, 204, 150, 204, INK) + tx(260, 222, 'freezing', { a: 'middle', fs: 12 });
    s += arrow(446, 168, 320, 60, INK) + tx(398, 96, 'boiling / evaporating', { fs: 12 }) + arrow(292, 64, 404, 168, MUT) + tx(340, 138, 'condensing', { fs: 12, c: MUT, a: 'end' });
    s += arrow(100, 166, 220, 62, INK) + tx(20, 104, 'sublimating', { fs: 12 });
    return svg(520, 240, s, 'Changes of state') + cap('Changes of state are physical changes: mass is conserved and the substance recovers its properties when the change is reversed.'); },
  heatcurve: () => plot({ x: [0, 100], y: [-30, 130], w: 540, h: 280, xt: [], yt: [-20, 0, 100], xtl: false, xl: 'time (energy supplied) →', yl: 'temperature / °C',
    segs: [{ p: [[0, -20], [8, 0], [30, 0], [48, 100], [88, 100], [96, 120]], c: C1, w: 3 }],
    text: [[10, 8, 'melting (0 °C)', { fs: 11.5, c: C6, w: 600 }], [52, 108, 'boiling (100 °C)', { fs: 11.5, c: C6, w: 600 }], [1, -12, 'ice', { fs: 11 }], [34, 58, 'water warms', { fs: 11 }], [89, 118, 'steam', { fs: 11 }]],
    cap: 'Heating curve for water. Sloping parts: temperature rises (ΔE = mcΔθ). Flat parts: change of state at constant temperature — energy breaks bonds (E = mL). The boiling plateau is longest because L(vaporisation) ≫ L(fusion).' }),
  gasbox: () => { let s = box(20, 20, 300, 170, 'var(--surface-2)', INK, 4, 2.4); const P = [[60, 60, 40, 20], [150, 110, -30, 30], [240, 50, 34, -18], [100, 150, 36, -30], [280, 140, 30, 24], [190, 170, -26, -30]];
    P.forEach(([x, y, dx, dy]) => s += circ(x, y, 7, C3, INK, 1) + arrow(x, y, x + dx, y + dy, INK, 1.4));
    s += arrow(300, 70, 322, 70, C1, 2.5) + arrow(300, 120, 322, 120, C1, 2.5) + tx(330, 96, 'collisions with the walls', { fs: 12, c: C1, w: 600 }) + tx(330, 112, 'exert a force → pressure', { fs: 12, c: C1, w: 600 });
    return svg(500, 205, s, 'Gas molecules in a container') + cap('Gas molecules move randomly. Each collision with a wall exerts a force; together these give the gas pressure. Hotter molecules move faster, so they hit the walls harder and more often.'); }
};
