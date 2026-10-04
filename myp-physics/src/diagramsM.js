/* ==========================================================
   MYP diagrams: measurement, slopes and friction, impulse, thermal transfer, optics,
   circuits and the lattice. Added to DIAG; captions of shared diagrams are cleaned of
   GCSE tier labels when they are rendered.
   ========================================================== */
Object.assign(DIAG, {
  errbars: () => plot({ x: [0, 6], y: [0, 160], w: 540, h: 300, xt: [0, 1, 2, 3, 4, 5, 6], yt: [0, 40, 80, 120, 160], xl: 'extension x / cm', yl: 'force F / N',
    fns: [{ f: x => 25 * x, c: C1, w: 2.4 }, { f: x => 29 * x - 8, c: C5, w: 1.4, dash: '6 4' }, { f: x => 21.5 * x + 7, c: C4, w: 1.4, dash: '6 4' }], text: [[0.3, 150, '— best fit', { c: C1, w: 600 }], [0.3, 136, '- - steepest', { c: C5, w: 600 }], [0.3, 122, '- - shallowest', { c: C4, w: 600 }]],
    extra: (X, Y) => [[1, 27], [2, 48], [3, 77], [4, 99], [5, 126]].map(([x, y]) => ln(X(x - 0.15), Y(y), X(x + 0.15), Y(y), INK, 1.4) + ln(X(x), Y(y - 7), X(x), Y(y + 7), INK, 1.4) + ln(X(x) - 4, Y(y - 7), X(x) + 4, Y(y - 7), INK, 1.4) + ln(X(x) - 4, Y(y + 7), X(x) + 4, Y(y + 7), INK, 1.4) + `<circle cx="${X(x)}" cy="${Y(y)}" r="3" fill="${INK}"/>`).join(''),
    cap: 'Error bars show the uncertainty of each point. Best fit k = 25 N/cm; the steepest and shallowest lines that pass through every error bar give k_max = 29 and k_min = 21.5, so k = 25 ± 4 N/cm.', label: 'Graph with error bars, best-fit, steepest and shallowest lines' }),

  fieldfall: () => plot({ x: [1, 5], y: [0, 10.5], w: 520, h: 270, xt: [1, 2, 3, 4, 5], yt: [0, 2.45, 4.9, 7.35, 9.8], ytl: ['0', '2.45', '4.9', '7.35', '9.8'], xl: 'distance from Earth’s centre / Earth radii', yl: 'g / N kg⁻¹',
    fns: [{ f: r => 9.8 / (r * r), c: C2, w: 2.6 }], marks: [{ x: 1, y: 9.8, label: 'surface: 9.8', c: C2, dx: 14, dy: 14 }, { x: 2, y: 2.45, label: '2R: ¼ of 9.8', c: C2 }, { x: 3, y: 9.8 / 9, label: '3R: ⅑', c: C2 }],
    cap: 'Gravitational field strength falls with the square of the distance from the centre of the planet — but never reaches zero.', label: 'Inverse-square fall of g' }),

  incline: () => { const th = 28 * Math.PI / 180, x0 = 60, y0 = 230, L = 400, x1 = x0 + L, y1 = y0 - L * Math.tan(th) * 0.0 ; let s = '';
    const top = [x0 + L * Math.cos(0), y0 - L * Math.sin(th)]; s += `<path d="M${x0},${y0} L${x0 + L},${y0} L${x0 + L},${y0 - L * Math.tan(th)} Z" fill="color-mix(in srgb,var(--muted) 18%,var(--surface))" stroke="${INK}" stroke-width="1.6"/>`;
    const bx = x0 + 230, by = y0 - 230 * Math.tan(th), ux = Math.cos(th), uy = -Math.sin(th), nx = Math.sin(th), ny = Math.cos(th);
    const P = (a, b) => [bx + a * ux - b * nx, by + a * uy - b * ny];
    const c = P(0, 22), corners = [P(-26, 0), P(26, 0), P(26, 44), P(-26, 44)];
    s += `<polygon points="${corners.map(p => p.join(',')).join(' ')}" fill="var(--surface)" stroke="${INK}" stroke-width="1.8"/>`;
    s += arrow(c[0], c[1], c[0], c[1] + 110, INK, 2.2) + tx(c[0] + 8, c[1] + 116, 'W = mg', { fs: 12, c: INK, w: 700 });
    const wpar = 110 * Math.sin(th), wper = 110 * Math.cos(th);
    s += arrow(c[0], c[1], c[0] - wpar * ux, c[1] - wpar * uy, C1, 2) + tx(c[0] - wpar * ux - 12, c[1] - wpar * uy + 22, 'mg sin θ', { fs: 12, c: C1, w: 700, a: 'end' });
    s += arrow(c[0], c[1], c[0] + wper * nx, c[1] + wper * ny, C5, 2) + tx(c[0] + wper * nx + 10, c[1] + wper * ny + 4, 'mg cos θ', { fs: 12, c: C5, w: 700 });
    s += arrow(c[0], c[1], c[0] - 80 * nx, c[1] - 80 * ny, C3, 2) + tx(c[0] - 80 * nx - 16, c[1] - 80 * ny + 6, 'R', { fs: 13, c: C3, w: 700 });
    const fp = P(26, 22); s += arrow(fp[0], fp[1], fp[0] + 60 * ux, fp[1] + 60 * uy, C4, 2) + tx(fp[0] + 64 * ux, fp[1] + 64 * uy - 6, 'friction', { fs: 12, c: C4, w: 700 });
    s += pth(`M${x0 + 60},${y0} A60,60 0 0 0 ${x0 + 60 * Math.cos(th)},${y0 - 60 * Math.sin(th)}`, INK, 1.2) + tx(x0 + 70, y0 - 10, 'θ', { fs: 14, it: true, f: 'var(--f-math)', c: INK });
    return svg(520, 300, s, 'Forces on a block on an inclined plane') + cap('Resolve parallel and perpendicular to the slope: mg sin θ pulls the block down the slope; mg cos θ is balanced by the normal reaction R; friction acts up the slope, opposing motion.'); },

  frictiongraph: () => plot({ x: [0, 10], y: [0, 12], w: 520, h: 270, xt: [], yt: [], xtl: false, ytl: false, xl: 'applied force', yl: 'friction force',
    segs: [{ p: [[0, 0], [6, 6]], c: C4, w: 2.6, label: 'static friction = applied force', lp: [3.4, 2.2] }, { p: [[6, 6], [6.4, 4.4], [10, 4.4]], c: C1, w: 2.6, label: 'dynamic friction μ_dR', lp: [7, 5.2] }],
    hl: [{ y: 6, label: 'maximum static friction μₛR', c: MUT }], vl: [{ x: 6, label: 'slips', c: MUT }],
    cap: 'Static friction matches the applied force until it reaches its maximum, μₛR. The object then slips and the smaller dynamic friction, μ_dR, takes over.', label: 'Static and dynamic friction' }),

  impulse: () => plot({ x: [0, 0.4], y: [0, 1300], w: 520, h: 270, xt: [0, 0.1, 0.2, 0.3, 0.4], yt: [0, 400, 800, 1200], xl: 'time / s', yl: 'force / N',
    fills: [{ a: 0, b: 0.05, f: t => 1200 * Math.sin(Math.PI * t / 0.05), c: C6, op: .3 }, { a: 0, b: 0.4, f: t => 150 * Math.sin(Math.PI * t / 0.4), c: C3, op: .3 }],
    fns: [{ f: t => t <= 0.05 ? 1200 * Math.sin(Math.PI * t / 0.05) : NaN, c: C6, label: 'hard surface: short time, large force', lx: 0.04, ldx: 10 }, { f: t => 150 * Math.sin(Math.PI * t / 0.4), c: C3, label: 'crash mat: long time, small force', lx: 0.2, ldy: -10, la: 'middle', ldx: 0 }],
    cap: 'The impulse (area under each curve) is the same — the same change in momentum. Spreading it over a longer time reduces the peak force.', label: 'Force–time graphs for the same impulse' }),

  heatmodes: () => { let s = '';
    s += box(20, 40, 150, 120, 'color-mix(in srgb,var(--u1) 10%,var(--surface))', INK) + tx(95, 30, 'conduction', { a: 'middle', fs: 13, c: INK, w: 700 });
    for (let i = 0; i < 5; i++) for (let j = 0; j < 3; j++) s += circ(42 + i * 27, 70 + j * 28, 7 - i * 0.6, `color-mix(in srgb,var(--u1) ${80 - i * 15}%,var(--surface))`, INK, 1);
    s += arrow(40, 150, 155, 150, C1, 1.8) + tx(95, 178, 'vibrations + free electrons', { a: 'middle', fs: 11 });
    s += box(190, 40, 150, 120, 'color-mix(in srgb,var(--u2) 8%,var(--surface))', INK) + tx(265, 30, 'convection', { a: 'middle', fs: 13, c: INK, w: 700 });
    s += pth('M230,140 C210,110 210,70 240,60 C270,50 300,60 300,90 C300,120 280,140 260,140', C1, 2) + arrowHead(260, 140, Math.PI, C1) + tx(296, 160, 'heat', { fs: 11, c: C6 }) + pth('M240,160 l5,-8 l5,8 l5,-8 l5,8 l5,-8 l5,8', C6, 1.6) + tx(265, 178, 'less dense fluid rises', { a: 'middle', fs: 11 });
    s += box(360, 40, 150, 120, 'color-mix(in srgb,var(--u6) 8%,var(--surface))', INK) + tx(435, 30, 'radiation', { a: 'middle', fs: 13, c: INK, w: 700 });
    s += circ(395, 100, 18, `color-mix(in srgb,var(--u1) 70%,var(--surface))`, INK) + [-.6, 0, .6].map(a => pth(`M${418 + 0},${100 + a * 30} q10,-8 20,0 t20,0 t20,0`, C6, 1.6) + arrowHead(478, 100 + a * 30, 0, C6)).join('') + tx(435, 178, 'IR waves — no medium', { a: 'middle', fs: 11 });
    return svg(530, 190, s, 'Conduction, convection and radiation') + cap('Three ways energy moves from hot to cold. Evaporation also cools a liquid as its fastest particles escape.'); },

  mixing: () => plot({ x: [0, 10], y: [10, 90], w: 520, h: 260, xt: [0, 2, 4, 6, 8, 10], yt: [10, 30, 50, 70, 90], xl: 'time', yl: 'temperature / °C', xtl: false,
    fns: [{ f: t => 44 + 36 * Math.exp(-t / 1.6), c: C1, label: 'hot water (0.20 kg, 80 °C)', lx: 0.6, ldy: -8 }, { f: t => 44 - 24 * Math.exp(-t / 1.6), c: C2, label: 'cold water (0.30 kg, 20 °C)', lx: 0.6, ldy: 18 }],
    hl: [{ y: 44, label: 'equilibrium 44 °C', c: MUT }],
    cap: 'Energy flows from hot to cold until both reach the same temperature — thermal equilibrium. Energy lost by the hot water = energy gained by the cold water.', label: 'Two bodies reaching thermal equilibrium' }),

  invsquare: () => { let s = ''; const cx = 70, cy = 120;
    s += circ(cx, cy, 8, 'var(--u1)', INK);
    [1, 2, 3].forEach(k => { const r = 60 * k; s += pth(`M${cx + r * Math.cos(-0.45)},${cy + r * Math.sin(-0.45)} A${r},${r} 0 0 1 ${cx + r * Math.cos(0.45)},${cy + r * Math.sin(0.45)}`, MUT, 1.2, 'none', '4 3');
      const h = 2 * r * Math.sin(0.12 * 1); s += `<rect x="${cx + r - 3}" y="${cy - 6 * k}" width="6" height="${12 * k}" fill="color-mix(in srgb,var(--u4) ${60 - k * 12}%,transparent)" stroke="${C4}"/>` + tx(cx + r, cy + 6 * k + 18, `${k}r`, { a: 'middle', fs: 12, c: INK }) + tx(cx + r, cy - 6 * k - 8, k === 1 ? 'I' : k === 2 ? 'I/4' : 'I/9', { a: 'middle', fs: 12, c: C4, w: 700 }); });
    [-0.45, 0.45].forEach(a => s += ln(cx, cy, cx + 200 * Math.cos(a), cy + 200 * Math.sin(a), MUT, 1));
    s += tx(300, 60, 'the same power spreads over', { fs: 12, c: INK }) + tx(300, 78, 'area ∝ r²', { fs: 12, c: INK, w: 700 }) + tx(300, 104, 'so  I = P ÷ 4πr²', { fs: 13, c: C4, w: 700 });
    return svg(520, 230, s, 'Inverse-square law') + cap('Double the distance from a point source and the same energy spreads over four times the area, so the intensity is one quarter.'); },

  wfreflect: () => { let s = box(40, 200, 440, 12, 'color-mix(in srgb,var(--muted) 45%,var(--surface))', INK, 2) + tx(260, 232, 'barrier', { a: 'middle', fs: 12 }); const a = 40 * Math.PI / 180;
    for (let k = 0; k < 6; k++) { const xb = 90 + k * 34; s += ln(xb, 200, xb - 90 * Math.sin(a), 200 - 90 * Math.cos(a), C4, 2); s += ln(xb + 170, 200, xb + 170 + 90 * Math.sin(a), 200 - 90 * Math.cos(a), C4, 2); }
    s += arrow(70, 60, 140, 140, INK, 1.8) + arrow(380, 140, 450, 60, INK, 1.8) + tx(60, 50, 'incident wavefronts', { fs: 11 }) + tx(470, 50, 'reflected wavefronts', { fs: 11, a: 'end' });
    return svg(520, 245, s, 'Wavefronts reflecting at a barrier') + cap('Plane wavefronts reflect at the same angle. Spacing (wavelength) is unchanged; rays (arrows) are perpendicular to the wavefronts.'); },

  snell: () => { const n = 1.5, i = 50 * Math.PI / 180, r = Math.asin(Math.sin(i) / n), cx = 260, cy = 120; let s = '';
    s += `<rect x="40" y="${cy}" width="440" height="110" fill="${C6}" opacity=".15"/>` + ln(40, cy, 480, cy, INK, 1.6) + ln(cx, 20, cx, 230, MUT, 1.2, '6 5') + tx(cx + 6, 30, 'normal', { fs: 11 });
    s += arrow(cx - 110 * Math.sin(i), cy - 110 * Math.cos(i), cx - 3, cy - 2, C1, 2.2) + arrow(cx, cy, cx + 105 * Math.sin(r), cy + 105 * Math.cos(r), C1, 2.2) + ln(cx, cy, cx + 90 * Math.sin(i), cy - 90 * Math.cos(i), C1, 1.2, '3 4');
    s += pth(`M${cx},${cy - 50} A50,50 0 0 0 ${cx - 50 * Math.sin(i)},${cy - 50 * Math.cos(i)}`, INK, 1.2) + tx(cx - 22, cy - 56, 'i', { fs: 15, it: true, f: 'var(--f-math)', c: INK });
    s += pth(`M${cx},${cy + 50} A50,50 0 0 0 ${cx + 50 * Math.sin(r)},${cy + 50 * Math.cos(r)}`, INK, 1.2) + tx(cx + 12, cy + 70, 'r', { fs: 15, it: true, f: 'var(--f-math)', c: INK });
    s += tx(470, cy - 10, 'air  n ≈ 1.00', { fs: 12, a: 'end' }) + tx(470, cy + 98, 'glass  n = 1.50', { fs: 12, a: 'end' }) + tx(330, 40, 'n = sin i ÷ sin r', { fs: 14, c: INK, w: 700 }) + tx(330, 60, 'sin 50° ÷ sin 31° = 1.50', { fs: 12 });
    return svg(520, 240, s, 'Snell’s law') + cap('Light slows down entering glass and bends towards the normal. The dotted line shows where it would have gone without refraction.'); },

  tir: () => { const n = 1.5, c = Math.asin(1 / n); let s = ''; const cx0 = 90, cy = 150;
    const panel = (x0, ang, lab) => { let t = `<rect x="${x0 - 70}" y="${cy}" width="140" height="80" fill="${C6}" opacity=".15"/>` + ln(x0 - 70, cy, x0 + 70, cy, INK, 1.4) + ln(x0, cy - 70, x0, cy + 80, MUT, 1, '5 4');
      t += arrow(x0 - 70 * Math.sin(ang), cy + 70 * Math.cos(ang), x0 - 2, cy + 2, C1, 2);
      if (ang < c - 0.01) { const r = Math.asin(n * Math.sin(ang)); t += arrow(x0, cy, x0 + 70 * Math.sin(r), cy - 70 * Math.cos(r), C1, 2) + arrow(x0, cy, x0 + 50 * Math.sin(ang), cy + 50 * Math.cos(ang), C1, 1, '3 3'); }
      else if (Math.abs(ang - c) < 0.02) t += arrow(x0, cy, x0 + 68, cy - 1, C1, 2) + arrow(x0, cy, x0 + 50 * Math.sin(ang), cy + 50 * Math.cos(ang), C1, 1.2);
      else t += arrow(x0, cy, x0 + 70 * Math.sin(ang), cy + 70 * Math.cos(ang), C1, 2.2);
      return t + tx(x0, 30, lab, { a: 'middle', fs: 12, c: INK, w: 700 }); };
    s += panel(cx0, 25 * Math.PI / 180, 'i < c: refracts') + panel(cx0 + 170, c, 'i = c: grazes') + panel(cx0 + 340, 60 * Math.PI / 180, 'i > c: TIR');
    s += tx(260, 250, 'glass (n = 1.5) below, air above · c = 42°', { a: 'middle', fs: 11.5 });
    return svg(520, 262, s, 'Critical angle and total internal reflection') + cap('As the angle of incidence inside the glass increases, the refracted ray bends further from the normal. At the critical angle it grazes the surface; beyond it, all the light is reflected.'); },

  fibre: () => { let s = ''; s += `<rect x="20" y="70" width="480" height="70" rx="35" fill="color-mix(in srgb,var(--u4) 12%,var(--surface))" stroke="${INK}" stroke-width="1.4"/><rect x="20" y="86" width="480" height="38" fill="color-mix(in srgb,var(--u4) 26%,var(--surface))" stroke="${C4}" stroke-width="1"/>`;
    const pts = [[20, 105]]; let x = 20, y = 105, up = true; while (x < 480) { x += 52; y = up ? 87 : 123; up = !up; pts.push([Math.min(x, 500), y]); }
    s += pth('M' + pts.map(p => p.join(',')).join(' L'), C1, 2.2) + tx(260, 60, 'cladding (lower n)', { a: 'middle', fs: 12 }) + tx(260, 162, 'core (higher n): light totally internally reflected at each boundary', { a: 'middle', fs: 12, c: INK });
    return svg(520, 175, s, 'Optical fibre') + cap('Light meets the core–cladding boundary at more than the critical angle, so it is totally internally reflected along the fibre.'); },

  diffraction: () => { let s = ''; const gap = (x0, w, wide) => { let t = box(x0 + 60, 20, 8, 70 - w / 2, 'var(--line-2)', INK, 1, 1) + box(x0 + 60, 90 + w / 2, 8, 70 - w / 2, 'var(--line-2)', INK, 1, 1);
      for (let k = 0; k < 4; k++) t += ln(x0 + 10 + k * 14, 30, x0 + 10 + k * 14, 150, C4, 2);
      for (let k = 1; k <= 4; k++) { const r = k * 14; t += wide ? ln(x0 + 68 + r, 90 - w / 2 + 4, x0 + 68 + r, 90 + w / 2 - 4, C4, 2) + pth(`M${x0 + 68 + r},${90 - w / 2 + 4} q${r * 0.25},${-r * 0.3} ${r * 0.05},${-r * 0.55}`, C4, 1.6) + pth(`M${x0 + 68 + r},${90 + w / 2 - 4} q${r * 0.25},${r * 0.3} ${r * 0.05},${r * 0.55}`, C4, 1.6) : pth(`M${x0 + 68 + r * Math.cos(1.3)},${90 - r * Math.sin(1.3)} A${r},${r} 0 0 1 ${x0 + 68 + r * Math.cos(1.3)},${90 + r * Math.sin(1.3)}`, C4, 2); }
      return t; };
    s += gap(10, 90, true) + gap(270, 16, false) + tx(80, 178, 'gap ≫ wavelength: little spreading', { a: 'middle', fs: 11.5 }) + tx(340, 178, 'gap ≈ wavelength: strong spreading', { a: 'middle', fs: 11.5 });
    return svg(520, 190, s, 'Diffraction through gaps') + cap('Diffraction is greatest when the gap is similar in size to the wavelength. The wavelength does not change.'); },

  rainbow: () => { let s = circ(260, 110, 70, 'color-mix(in srgb,var(--u4) 10%,var(--surface))', INK, 1.6) + tx(260, 200, 'raindrop', { a: 'middle', fs: 12 });
    s += arrow(40, 70, 205, 70, '#C9A227', 2.4) + tx(40, 60, 'white sunlight', { fs: 11.5 });
    s += pth('M205,70 L318,152 L210,138', '#E5484D', 1.8) + pth('M205,70 L312,158 L216,150', '#7B5BD6', 1.8) + arrow(210, 138, 60, 170, '#E5484D', 1.8) + arrow(216, 150, 80, 200, '#7B5BD6', 1.8);
    s += tx(330, 150, 'reflection', { fs: 11 }) + tx(194, 64, 'refraction', { fs: 11, a: 'end' }) + tx(46, 184, 'red', { fs: 11, c: '#E5484D', w: 700 }) + tx(70, 214, 'violet', { fs: 11, c: '#7B5BD6', w: 700 });
    return svg(520, 225, s, 'How a raindrop disperses light') + cap('Light refracts entering the drop, reflects off the back and refracts again leaving. Violet is refracted more than red, so the colours separate.'); },

  eye: () => { let s = pth('M140,40 C260,0 400,30 420,110 C400,190 260,220 140,180 C110,150 110,70 140,40 Z', INK, 1.8, 'color-mix(in srgb,var(--u4) 6%,var(--surface))');
    s += pth('M140,62 C118,90 118,130 140,158', C4, 3) + tx(108, 56, 'cornea', { fs: 11.5, a: 'end' });
    s += `<ellipse cx="175" cy="110" rx="14" ry="38" fill="color-mix(in srgb,var(--u3) 22%,var(--surface))" stroke="${C3}" stroke-width="1.8"/>` + tx(175, 166, 'lens', { a: 'middle', fs: 11.5 });
    s += pth('M405,60 C425,90 425,130 405,162', C6, 4) + tx(430, 110, 'retina', { fs: 11.5 }) + ln(420, 112, 470, 120, INK, 3) + tx(468, 140, 'optic', { fs: 11 }) + tx(468, 153, 'nerve', { fs: 11 });
    [70, 110, 150].forEach(y0 => s += ln(20, y0, 130, y0, C1, 1.6) + ln(130, y0, 175, 110 + (y0 - 110) * 0.55, C1, 1.6) + ln(175, 110 + (y0 - 110) * 0.55, 415, 110 - (y0 - 110) * 0.1, C1, 1.6));
    return svg(500, 220, s, 'The human eye') + cap('The cornea and lens refract light to a focus on the retina. The lens changes shape to focus near or distant objects.'); },

  sightfix: () => { let s = ''; const eye = (x0, lab, f, lens) => { let t = pth(`M${x0},40 C${x0 + 80},10 ${x0 + 170},30 ${x0 + 180},90 C${x0 + 170},150 ${x0 + 80},170 ${x0},140 Z`, INK, 1.4, 'color-mix(in srgb,var(--u4) 6%,var(--surface))') + pth(`M${x0 + 172},50 C${x0 + 186},75 ${x0 + 186},105 ${x0 + 172},130`, C6, 3);
      [60, 120].forEach(y0 => { t += ln(x0 - 60, y0, x0 + 10, y0, C1, 1.6) + ln(x0 + 10, y0, x0 + f, 90, C1, 1.6) + ln(x0 + f, 90, x0 + 175, 90 + (90 - y0) * (175 - f) / f * 0.9, C1, 1.2, f < 170 ? '' : '3 3'); });
      return t + tx(x0 + 90, 186, lab, { a: 'middle', fs: 12, c: INK, w: 700 }) + (lens || ''); };
    s += eye(70, 'short sight: focus in front of retina', 120) + eye(330, 'long sight: focus behind retina', 230);
    return svg(560, 200, s, 'Short sight and long sight') + cap('Short sight (myopia) is corrected with a diverging (concave) lens; long sight (hyperopia) with a converging (convex) lens.'); },

  lattice: () => { let s = box(20, 30, 480, 140, 'color-mix(in srgb,var(--u5) 6%,var(--surface))', INK, 10);
    for (let i = 0; i < 9; i++) for (let j = 0; j < 3; j++) { const x = 55 + i * 52, y = 60 + j * 40; s += circ(x, y, 13, 'color-mix(in srgb,var(--u6) 30%,var(--surface))', C6, 1.4) + tx(x, y + 5, '+', { a: 'middle', fs: 14, c: C6, w: 700 }); }
    const seed = [17, 43, 71, 102, 131, 163, 199, 222, 251, 288, 311, 347, 373, 409, 436, 462]; seed.forEach((x, k) => { const y = 42 + ((k * 37) % 120); s += circ(x + 10, y, 4, 'var(--u2)', 'none'); });
    s += arrow(380, 186, 470, 186, C2, 2) + tx(375, 190, 'electron drift (towards +)', { fs: 11.5, a: 'end', c: C2 });
    return svg(520, 200, s, 'A metal lattice with free electrons') + cap('Positive ions sit in a lattice in a sea of free electrons. A potential difference makes the electrons drift; collisions with the vibrating ions cause resistance.'); },

  kirchhoff: () => { let s = ''; const jx = 150, jy = 100;
    s += arrow(30, jy, jx - 4, jy, C2, 2.2) + tx(70, jy - 10, 'I = 3.0 A', { fs: 12, c: C2, w: 700 }) + `<circle cx="${jx}" cy="${jy}" r="5" fill="${INK}"/>`;
    s += arrow(jx, jy, 260, 40, C2, 2.2) + tx(250, 30, 'I₁ = 1.8 A', { fs: 12, c: C2, w: 700, a: 'end' }) + arrow(jx, jy, 260, 160, C2, 2.2) + tx(250, 182, 'I₂ = 1.2 A', { fs: 12, c: C2, w: 700, a: 'end' });
    s += tx(150, 210, 'Kirchhoff 1: 3.0 = 1.8 + 1.2', { a: 'middle', fs: 12, c: INK });
    const x0 = 320, y0 = 40, x1 = 500, y1 = 170; s += wire([x0, y0], [x1, y0], [x1, y1], [x0, y1], [x0, y0]) + sym('cell', x0, (y0 + y1) / 2, 90) + sym('resistor', (x0 + x1) / 2, y0) + sym('lamp', x1, (y0 + y1) / 2, 90);
    s += tx(x0 - 14, (y0 + y1) / 2 + 4, '12 V', { a: 'end', fs: 12, c: INK, w: 700 }) + tx((x0 + x1) / 2, y0 - 14, '7 V', { a: 'middle', fs: 12, c: C5, w: 700 }) + tx(x1 + 14, (y0 + y1) / 2 + 4, '5 V', { fs: 12, c: C5, w: 700 });
    s += tx(410, 210, 'Kirchhoff 2: 12 = 7 + 5', { a: 'middle', fs: 12, c: INK });
    return svg(540, 225, s, 'Kirchhoff’s laws') + cap('Left: charge is conserved at a junction. Right: energy is conserved round a loop — the supply emf equals the sum of the potential differences.'); },

  potdiv: () => { let s = ''; const x0 = 90, x1 = 230, y0 = 30, y1 = 200, xm = 230;
    s += wire([x0, y0], [x1, y0], [x1, y1], [x0, y1], [x0, y0]) + sym('cell', x0, (y0 + y1) / 2, 90) + sym('resistor', x1, 75, 90) + sym('resistor', x1, 155, 90);
    s += tx(x0 - 14, 119, 'V_in', { a: 'end', fs: 13, c: INK, w: 700 }) + tx(x1 + 16, 80, 'R₁', { fs: 13, c: INK, w: 700 }) + tx(x1 + 16, 160, 'R₂', { fs: 13, c: INK, w: 700 }) + wire([x1, 115], [320, 115]) + `<circle cx="320" cy="115" r="3.5" fill="${INK}"/>` + wire([x1, y1], [320, y1]) + `<circle cx="320" cy="${y1}" r="3.5" fill="${INK}"/>` + arrow(330, 190, 330, 124, C5, 1.6) + tx(340, 160, 'V_out', { fs: 13, c: C5, w: 700 });
    s += tx(380, 70, 'V_out = V_in × R₂ ÷ (R₁ + R₂)', { fs: 13, c: INK, w: 700 }) + tx(380, 92, 'larger resistor → larger share of pd', { fs: 12 });
    return svg(620, 230, s, 'Potential divider') + cap('In series the current is the same, so the supply pd is shared in the ratio of the resistances.'); }
});

/* tidy captions of shared diagrams: no tier labels in an MYP course */
Object.keys(DIAG).forEach(k => { const f = DIAG[k]; DIAG[k] = (...a) => String(f(...a)).replace(/\((?:Higher|HT)\)\s*/g, '').replace(/\s*\((?:physics only)\)/gi, '').replace(/\bRP\d+\b:?\s*/g, ''); });
