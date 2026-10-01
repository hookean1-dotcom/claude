/* ==========================================================
   Diagrams for Unit 3: cardio-respiratory, biomechanics, psychology, skill acquisition, sport and society
   ========================================================== */
Object.assign(DIAG, {
  heart: () => { const W = 560, H = 330; let s = '';
    s += node(280, 34, 200, 38, 'LUNGS', 'var(--info)', { sub: 'gas exchange' }) + node(280, 300, 200, 38, 'BODY', A1, { sub: 'muscles and organs' });
    s += box(170, 110, 105, 70, 'color-mix(in srgb, var(--info) 18%, transparent)', 'var(--info)', 8, 2) + tx(222, 140, 'right atrium', { a: 'middle', fs: 11.5, c: INK, w: 700 }) + tx(222, 158, '↓ tricuspid', { a: 'middle', fs: 10.5 });
    s += box(170, 185, 105, 70, 'color-mix(in srgb, var(--info) 28%, transparent)', 'var(--info)', 8, 2) + tx(222, 224, 'right ventricle', { a: 'middle', fs: 11.5, c: INK, w: 700 });
    s += box(285, 110, 105, 70, `color-mix(in srgb, ${A1} 18%, transparent)`, A1, 8, 2) + tx(337, 140, 'left atrium', { a: 'middle', fs: 11.5, c: INK, w: 700 }) + tx(337, 158, '↓ bicuspid', { a: 'middle', fs: 10.5 });
    s += box(285, 185, 105, 70, `color-mix(in srgb, ${A1} 30%, transparent)`, A1, 8, 3) + tx(337, 224, 'left ventricle', { a: 'middle', fs: 11.5, c: INK, w: 700 });
    s += pth('M190,190 C120,150 120,60 190,40', 'var(--info)', 2.4) + arrowHead(190, 40, -0.3, 'var(--info)') + tx(92, 110, 'pulmonary artery', { fs: 11, c: 'var(--info)' });
    s += pth('M370,40 C440,60 440,100 380,118', A1, 2.4) + arrowHead(380, 118, 2.6, A1) + tx(440, 78, 'pulmonary vein', { fs: 11, c: A1 });
    s += pth('M380,250 C460,262 440,300 382,300', A1, 2.4) + arrowHead(382, 300, 3.1, A1) + tx(448, 262, 'aorta', { fs: 11, c: A1 });
    s += pth('M178,300 C100,300 110,150 170,140', 'var(--info)', 2.4) + arrowHead(170, 140, -0.2, 'var(--info)') + tx(60, 240, 'vena cavae', { fs: 11, c: 'var(--info)' });
    return svg(W, H, s, 'The heart as a dual-action pump') + cap('Right side → pulmonary circulation (to the lungs); left side → systemic circulation (to the body). The left ventricle wall is thickest.'); },

  hrresponse: () => plot({ w: 560, h: 290, x: [-5, 40], y: [50, 210], xt: [0, 10, 20, 30, 40], yt: [60, 100, 140, 180], xl: 'time (min)', yl: 'heart rate (bpm)', label: 'Heart rate response to exercise',
    fns: [{ f: t => t < -2 ? 70 : t < 0 ? 70 + (t + 2) * 8 : t < 20 ? 86 + 64 * (1 - Math.exp(-t / 1.6)) : 70 + 80 * Math.exp(-(t - 20) / 3.5), c: A3, label: 'submaximal', lx: 12, ldy: -8 },
      { f: t => t < -2 ? 70 : t < 0 ? 70 + (t + 2) * 8 : t < 20 ? 86 + 110 * (1 - Math.exp(-t / 5)) : 70 + 125 * Math.exp(-(t - 20) / 5), c: A1, label: 'maximal', lx: 17, ldy: -8 }],
    vl: [{ x: 0, label: 'start' }, { x: 20, label: 'stop' }], text: [[-4.5, 92, 'anticipatory rise', { fs: 11 }], [7, 158, 'steady state', { fs: 11, c: A3 }], [27, 118, 'rapid then slow recovery', { fs: 11 }]], cap: 'Anticipatory rise (adrenaline), rapid increase, a plateau in submaximal work (steady state), a continued rise in maximal work, then a two-stage recovery.' }),

  conduction: () => { const W = 460, H = 330; let s = '';
    s += pth('M230,40 C150,20 70,70 80,150 C90,230 170,290 230,310 C290,290 370,230 380,150 C390,70 310,20 230,40 Z', A1, 2.4, `color-mix(in srgb, ${A1} 8%, transparent)`);
    s += ln(230, 60, 230, 250, 'var(--line-2)', 2) + tx(236, 76, 'septum', { fs: 10.5 });
    s += circ(160, 80, 10, A4, 'none') + tx(120, 60, '1 SA node (pacemaker)', { a: 'middle', fs: 11.5, c: INK, w: 700 });
    s += circ(222, 150, 9, A4, 'none') + tx(300, 146, '2 AV node (delay ≈ 0.1 s)', { fs: 11.5, c: INK, w: 700 });
    s += pth('M222,158 L228,230', A4, 3) + tx(160, 200, '3 bundle of His', { a: 'end', fs: 11.5, c: INK, w: 700 });
    s += pth('M228,230 Q200,280 150,250 M228,230 Q260,280 310,250 M180,262 Q150,220 130,180 M280,262 Q310,220 330,180', A4, 2) + tx(230, 300, '4 Purkinje fibres — ventricles contract from the apex', { a: 'middle', fs: 11.5, c: INK, w: 700 });
    s += pth('M160,80 Q190,110 222,150', A4, 1.4, 'none', '4 3');
    return svg(W, H, s, 'Conduction system of the heart'); },

  vessels: () => { const W = 580, H = 220; let s = '';
    s += circ(100, 100, 62, `color-mix(in srgb, ${A1} 30%, transparent)`, A1, 2) + circ(100, 100, 26, 'var(--surface)', A1, 2) + lines(100, 185, ['artery: thick muscular,', 'elastic wall; small lumen'], { c: INK });
    s += `<ellipse cx="290" cy="100" rx="70" ry="55" fill="color-mix(in srgb, var(--info) 22%, transparent)" stroke="var(--info)" stroke-width="2"/>` + `<ellipse cx="290" cy="100" rx="58" ry="44" fill="var(--surface)" stroke="var(--info)" stroke-width="1.5"/>` + pth('M250,100 Q270,78 290,100 Q310,78 330,100', 'var(--info)', 2) + lines(290, 185, ['vein: thin wall, large lumen,', 'pocket valves'], { c: INK });
    s += circ(470, 100, 18, 'var(--surface)', A3, 2) + circ(470, 100, 6, A1, 'none') + lines(470, 185, ['capillary: wall one', 'cell thick — diffusion'], { c: INK });
    return svg(W, H, s, 'Arteries, veins and capillaries (not to scale)'); },

  shunt: () => { const W = 580, H = 290; let s = ''; const data = [['muscle', 20, 84], ['brain', 15, 3], ['heart', 5, 4], ['liver/gut', 25, 1.5], ['kidneys', 20, 1], ['skin', 5, 3], ['other', 10, 3.5]];
    const Y = v => 240 - v * 2.3; s += ln(50, 240, 560, 240, INK, 1.4) + ln(50, 240, 50, 30, INK, 1.4) + [0, 25, 50, 75].map(v => tx(44, Y(v) + 4, v + '%', { a: 'end', fs: 10.5, f: 'var(--f-mono)' }) + ln(50, Y(v), 560, Y(v), 'var(--line)', 1)).join('');
    data.forEach(([n, r, e], i) => { const x = 66 + i * 70; s += bar(x, 240, 26, r * 2.3, 'var(--info)', null, r) + bar(x + 28, 240, 26, e * 2.3, A1, null, e) + tx(x + 27, 258, n, { a: 'middle', fs: 11, c: INK }); });
    s += cell(380, 28, 14, 14, 'var(--info)') + tx(400, 40, 'rest (Q ≈ 5 L/min)', { fs: 11.5 }) + cell(380, 50, 14, 14, A1) + tx(400, 62, 'maximal (Q ≈ 25 L/min)', { fs: 11.5 });
    return svg(W, H, s, 'Distribution of cardiac output at rest and in maximal exercise') + cap('Percentages of cardiac output. Muscle rises from about 1 L/min to about 21 L/min; the brain keeps the same volume.'); },

  veresponse: () => plot({ w: 560, h: 290, x: [-4, 40], y: [0, 140], xt: [0, 10, 20, 30, 40], yt: [0, 40, 80, 120], xl: 'time (min)', yl: 'minute ventilation (L/min)', label: 'Minute ventilation response',
    fns: [{ f: t => t < -1.5 ? 7 : t < 0 ? 7 + (t + 1.5) * 4 : t < 20 ? 13 + 30 * (1 - Math.exp(-t / 0.4)) + 22 * (1 - Math.exp(-t / 3)) : 7 + 58 * Math.exp(-(t - 20) / 0.6) * 0.55 + 58 * 0.45 * Math.exp(-(t - 20) / 5), c: A3, label: 'submaximal', lx: 10, ldy: -8 },
      { f: t => t < -1.5 ? 7 : t < 0 ? 7 + (t + 1.5) * 4 : t < 20 ? 13 + 35 * (1 - Math.exp(-t / 0.4)) + 5.2 * t : 7 + 152 * (0.45 * Math.exp(-(t - 20) / 0.6) + 0.55 * Math.exp(-(t - 20) / 6)), c: A1, label: 'maximal', lx: 16, ldy: -8 }],
    vl: [{ x: 0, label: 'start' }, { x: 20, label: 'stop' }], cap: 'Anticipatory rise; rapid neural rise (proprioceptors); slower chemical rise (CO₂, temperature); plateau at steady state or continued rise in maximal work; rapid then slow recovery.' }),

  carbload: () => plot({ w: 560, h: 280, x: [0, 7], y: [0, 2.2], xt: [0, 1, 2, 3, 4, 5, 6, 7], yt: [0.5, 1, 1.5, 2], xl: 'day', yl: 'muscle glycogen (relative)', label: 'Carbohydrate loading',
    segs: [{ p: [[0, 1], [1, .65], [2, .45], [3, .3], [4, .95], [5, 1.55], [6, 1.9], [7, 1.95]], c: A1, label: 'classic: depletion → loading', lp: [3.2, .2] }, { p: [[0, 1], [3, 1], [4, 1.35], [5, 1.65], [6, 1.8], [7, 1.82]], c: A3, dash: '6 4', label: 'modern: taper + loading', lp: [3.3, 1.12] }],
    hl: [{ y: 1, label: 'normal stores' }], cap: 'Supercompensation: after depletion, a high-carbohydrate diet with tapered training overfills glycogen stores.' }),

  /* ============ biomechanics ============ */
  freebody: () => { const W = 520, H = 280; let s = '';
    s += box(210, 90, 100, 100, 'var(--surface-2)', INK, 12, 2) + tx(260, 144, 'athlete', { a: 'middle', fs: 12, c: INK }) + dot(260, 140, INK, 4);
    s += arrow(260, 190, 260, 262, A2, 3) + tx(270, 250, 'weight W = mg', { fs: 12, c: A2, w: 700 });
    s += arrow(245, 190, 245, 42, A3, 3) + tx(180, 40, 'ground reaction force', { fs: 12, c: A3, w: 700 });
    s += arrow(260, 196, 400, 196, A1, 3) + tx(404, 200, 'friction (forward)', { fs: 12, c: A1, w: 700 });
    s += arrow(210, 130, 120, 130, 'var(--info)', 3) + tx(40, 118, 'air resistance', { fs: 12, c: 'var(--info)', w: 700 });
    return svg(W, H, s, 'Free-body diagram of a sprinter') + cap('A sprinter accelerating: friction (forward) exceeds air resistance, so the net horizontal force is forward (Newton’s 2nd law).'); },

  forcetime: () => { const W = 620, H = 250; let s = '';
    const panel = (x0, title, neg, posA) => { const X = t => x0 + 20 + t * 250, Y = f => 120 - f * 70; let d = `M${X(0)},${Y(0)}`, p = '';
      for (let i = 0; i <= 60; i++) { const t = i / 60, f = t < .4 ? -neg * Math.sin(t / .4 * Math.PI) : posA * Math.sin((t - .4) / .6 * Math.PI); d += ` L${X(t)},${Y(f)}`; }
      p += `<path d="${d} L${X(1)},${Y(0)} Z" fill="${A1}" fill-opacity=".15" stroke="none"/>` + pth(d, A1, 2.4) + arrow(x0 + 20, Y(0), x0 + 285, Y(0), INK, 1.2) + arrow(x0 + 20, 200, x0 + 20, 30, INK, 1.2);
      p += tx(X(.2), Y(-neg) + 18, '− braking', { a: 'middle', fs: 11, c: 'var(--info)' }) + tx(X(.7), Y(posA) - 8, '+ propulsion', { a: 'middle', fs: 11, c: A1 }) + tx(x0 + 150, 232, title, { a: 'middle', fs: 12.5, w: 700, c: INK }) + tx(x0 + 282, Y(0) + 16, 'time', { a: 'end', fs: 10.5 }) + tx(x0 + 26, 40, 'force', { fs: 10.5 });
      return p; };
    s += panel(10, 'Accelerating: net impulse positive', .45, 1.1) + panel(320, 'Constant velocity: net impulse zero', .9, .6);
    return svg(W, H, s, 'Force–time graphs for a sprinter’s foot contact') + cap('Area under the curve = impulse. Compare the positive (propulsive) and negative (braking) areas.'); },

  stability: () => { const W = 560, H = 270; let s = '';
    s += figure(150, 40, 1, INK, { legsOut: true }) + `<rect x="118" y="164" width="64" height="8" fill="${A3}" fill-opacity=".35"/>` + dot(150, 120, A1, 6) + ln(150, 120, 150, 168, A1, 2, '4 3') + lines(150, 200, ['wide base, low COM,', 'line of gravity central', '→ stable'], { c: INK });
    s += figure(400, 20, 1.1, INK) + `<rect x="382" y="156" width="36" height="8" fill="${A3}" fill-opacity=".35"/>` + dot(410, 100, A1, 6) + ln(410, 100, 416, 160, A1, 2, '4 3') + lines(400, 200, ['narrow base, high COM,', 'line of gravity near edge', '→ less stable, ready to move'], { c: INK });
    s += tx(300, 262, '● centre of mass · - - line of gravity · shaded = base of support', { a: 'middle', fs: 11 });
    return svg(W, H, s, 'Factors affecting stability'); },

  motiongraphs: () => { const W = 620, H = 250; let s = '';
    const X1 = t => 50 + t * 22, Y1 = d => 200 - d * 1.6, X2 = t => 360 + t * 22, Y2 = v => 200 - v * 13;
    let d1 = '', d2 = ''; for (let i = 0; i <= 100; i++) { const t = i / 10, v = 11.6 * (1 - Math.exp(-t / 1.4)) - (t > 7 ? (t - 7) * 0.25 : 0); d2 += (i ? ' L' : 'M') + X2(t) + ',' + Y2(v); }
    let dist = 0; for (let i = 0; i <= 100; i++) { const t = i / 10, v = 11.6 * (1 - Math.exp(-t / 1.4)) - (t > 7 ? (t - 7) * 0.25 : 0); dist += v * 0.1; d1 += (i ? ' L' : 'M') + X1(t) + ',' + Y1(Math.min(100, dist)); }
    s += arrow(50, 200, 290, 200, INK, 1.2) + arrow(50, 200, 50, 20, INK, 1.2) + pth(d1, A5, 2.6) + tx(170, 236, 'distance–time (gradient = speed)', { a: 'middle', fs: 12, c: INK, w: 700 }) + tx(56, 30, 'distance', { fs: 10.5 });
    s += arrow(360, 200, 600, 200, INK, 1.2) + arrow(360, 200, 360, 20, INK, 1.2) + pth(d2, A5, 2.6) + tx(480, 236, 'velocity–time (gradient = acceleration)', { a: 'middle', fs: 12, c: INK, w: 700 }) + tx(366, 30, 'velocity', { fs: 10.5 });
    s += tx(420, 80, 'max velocity', { fs: 11 }) + tx(540, 70, 'slight deceleration', { a: 'middle', fs: 11 });
    return svg(W, H, s, 'Motion graphs for a 100 m sprint') + cap('100 m sprint: curved distance–time line while accelerating, then nearly straight; velocity peaks mid-race and falls slightly at the end.'); },

  inertia: () => { const W = 560, H = 220; let s = '';
    s += ln(60, 110, 240, 110, INK, 8) + circ(40, 110, 16, 'var(--surface-2)', INK, 2) + dot(150, 110, A1, 6) + ln(150, 110, 240, 110, A1, 1.2, '4 3') + tx(150, 150, 'layout / straight: large I', { a: 'middle', fs: 12, c: INK, w: 700 }) + tx(150, 170, 'mass far from axis → slow spin', { a: 'middle', fs: 11 });
    s += circ(410, 110, 38, 'var(--surface-2)', INK, 8) + dot(410, 110, A1, 6) + ln(410, 110, 448, 110, A1, 1.2, '4 3') + tx(410, 170, 'tuck: small I', { a: 'middle', fs: 12, c: INK, w: 700 }) + tx(410, 190, 'mass close to axis → fast spin', { a: 'middle', fs: 11 });
    s += tx(280, 36, 'I = Σ m r²', { a: 'middle', fs: 15, c: A5, w: 700 });
    return svg(W, H, s, 'Moment of inertia and body shape'); },

  angmom: () => plot({ w: 560, h: 280, x: [0, 1.4], y: [0, 16], xt: [0, .35, .7, 1.05, 1.4], yt: [0, 4, 8, 12, 16], xl: 'time in flight (s)', yl: 'value', label: 'Conservation of angular momentum',
    fns: [{ f: t => t < .2 ? 12 : t < .35 ? 12 - (t - .2) / .15 * 8.5 : t < 1.05 ? 3.5 : t < 1.2 ? 3.5 + (t - 1.05) / .15 * 8.5 : 12, c: A2, label: 'moment of inertia I', lx: .02, ldy: -8 },
      { f: t => 48 / (t < .2 ? 12 : t < .35 ? 12 - (t - .2) / .15 * 8.5 : t < 1.05 ? 3.5 : t < 1.2 ? 3.5 + (t - 1.05) / .15 * 8.5 : 12), c: A1, label: 'angular velocity ω', lx: .5, ldy: -8 }],
    hl: [{ y: 4.8, label: 'angular momentum L = Iω stays constant (scaled)' }], text: [[.55, 1.6, 'tucked', { fs: 11 }], [1.22, 1.6, 'open out', { fs: 11 }]], cap: 'As a diver tucks, I falls and ω rises; opening out reverses this. L stays the same because no external torque acts in flight.' }),

  projectile: () => { const W = 580, H = 290; let s = ''; const X = x => 40 + x * 5.2, Y = y => 250 - y * 5.2;
    const path = (v, th, h, col, lab) => { const vx = v * Math.cos(th * Math.PI / 180), vy = v * Math.sin(th * Math.PI / 180); let d = '', t = 0; for (let i = 0; i < 400; i++) { const x = vx * t, y = h + vy * t - 4.9 * t * t; if (y < 0) break; d += (i ? ' L' : 'M') + X(x) + ',' + Y(y); t += 0.01; } return pth(d, col, 2.4) + tx(X(vx * t) - 4, Y(0) - 8, lab, { a: 'end', fs: 11, c: col, w: 700 }); };
    s += arrow(40, 250, 560, 250, INK, 1.2) + arrow(40, 250, 40, 30, INK, 1.2) + tx(556, 268, 'horizontal distance', { a: 'end', fs: 11 });
    s += path(22, 45, 0, A3, '45°') + path(22, 30, 0, A4, '30°') + path(22, 60, 0, A2, '60°') + path(22, 40, 2.2, A1, '40° from 2.2 m');
    let sh = ''; for (let i = 0; i <= 60; i++) { const x = i * 0.6, y = 2 + x * 0.9 - 0.02 * x * x * Math.exp(x / 14); if (y < 0) break; sh += (i ? ' L' : 'M') + X(x) + ',' + Y(y); } s += pth(sh, MUT, 2, 'none', '5 4') + tx(X(28), Y(18), 'shuttlecock: non-parabolic', { fs: 11, c: MUT });
    return svg(W, H, s, 'Projectile paths') + cap('Same release speed: 45° goes furthest for equal heights, but a higher release favours a lower angle. Air resistance makes light projectiles drop steeply.'); },

  bernoulli: () => { const W = 560, H = 250; let s = '';
    s += `<g transform="rotate(-10 280 125)"><ellipse cx="280" cy="125" rx="120" ry="20" fill="color-mix(in srgb, ${A5} 22%, transparent)" stroke="${A5}" stroke-width="2.4"/></g>`;
    for (let k = 0; k < 3; k++) { s += pth(`M40,${80 - k * 16} C180,${52 - k * 18} 380,${64 - k * 14} 530,${66 - k * 14}`, 'var(--info)', 1.6) + pth(`M40,${160 + k * 16} C180,${172 + k * 12} 380,${178 + k * 12} 530,${170 + k * 14}`, 'var(--info)', 1.6, 'none', '5 4'); }
    s += arrow(290, 120, 290, 30, A1, 3) + tx(298, 36, 'LIFT', { fs: 13, w: 700, c: A1 }) + tx(430, 40, 'faster air → lower pressure', { a: 'middle', fs: 12, c: INK, w: 700 }) + tx(430, 226, 'slower air → higher pressure', { a: 'middle', fs: 12, c: INK, w: 700 });
    s += arrow(40, 125, 110, 125, MUT) + tx(40, 115, 'airflow', { fs: 11 }) + tx(140, 150, 'angle of attack', { fs: 11 });
    return svg(W, H, s, 'Bernoulli lift on a discus') + cap('Invert the aerofoil (F1 wings) and the pressure difference pushes down — downforce for more friction when cornering.'); },

  magnus: () => { const W = 620, H = 240; let s = '';
    const ball = (cx, title, spin, fdir, hiTop, flight) => { let p = circ(cx, 100, 34, 'var(--surface-2)', INK, 2) + tx(cx, 26, title, { a: 'middle', fs: 13, w: 700, c: INK });
      p += spin > 0 ? pth(`M${cx - 20},${74} A30,30 0 0 1 ${cx + 22},${76}`, A2, 2) + arrowHead(cx + 22, 76, 0.9, A2) : pth(`M${cx + 20},${74} A30,30 0 0 0 ${cx - 22},${76}`, A2, 2) + arrowHead(cx - 22, 76, 2.2, A2);
      p += tx(cx, 58, hiTop ? 'high pressure' : 'low pressure', { a: 'middle', fs: 10.5, c: hiTop ? A1 : 'var(--info)' }) + tx(cx, 152, hiTop ? 'low pressure' : 'high pressure', { a: 'middle', fs: 10.5, c: hiTop ? 'var(--info)' : A1 });
      p += arrow(cx, 100, cx, 100 + fdir * 44, A1, 3) + lines(cx, 190, flight, { fs: 11.5, c: INK }) + arrow(cx - 70, 100, cx - 40, 100, MUT, 1.4);
      return p; };
    s += ball(110, 'Topspin', 1, 1, true, ['Magnus force down:', 'dips; skids on at bounce']) + ball(320, 'Backspin', -1, -1, false, ['Magnus force up:', 'floats; checks at bounce']);
    s += circ(520, 100, 34, 'var(--surface-2)', INK, 2) + tx(520, 26, 'Sidespin (from above)', { a: 'middle', fs: 13, w: 700, c: INK }) + pth('M540,80 A30,30 0 0 1 545,122', A2, 2) + arrowHead(545, 122, 2, A2) + arrow(520, 100, 566, 100, A1, 3) + lines(520, 190, ['Magnus force sideways:', 'the ball curves (swerve)'], { fs: 11.5, c: INK });
    s += tx(20, 232, 'Ball travels left → right; airflow moves right → left past the ball.', { fs: 11 });
    return svg(W, H, s, 'Magnus effect for topspin, backspin and sidespin'); },

  flow: () => { const W = 580, H = 230; let s = '';
    s += pth('M60,100 C80,70 150,70 200,100 C150,130 80,130 60,100 Z', A5, 2.4, `color-mix(in srgb, ${A5} 18%, transparent)`);
    for (let k = -2; k <= 2; k++) s += pth(`M20,${100 + k * 18} C${60},${100 + k * 22} ${160},${100 + k * 22} 260,${100 + k * 18}`, 'var(--info)', 1.4);
    s += tx(140, 190, 'streamlined: laminar flow, small wake', { a: 'middle', fs: 12, c: INK, w: 700 });
    s += box(360, 70, 50, 60, `color-mix(in srgb, ${A5} 18%, transparent)`, A5, 4, 2.4);
    for (let k = -2; k <= 2; k++) s += pth(`M300,${100 + k * 18} C${330},${100 + k * 26} 355,${100 + k * 34} 410,${100 + k * 36}`, 'var(--info)', 1.4);
    [[440, 85], [470, 110], [500, 90], [455, 125], [520, 118]].forEach(([x, y]) => s += pth(`M${x - 10},${y} a10,10 0 1 1 10,10`, 'var(--info)', 1.4));
    s += tx(440, 190, 'blunt: turbulent wake → high drag', { a: 'middle', fs: 12, c: INK, w: 700 });
    return svg(W, H, s, 'Laminar and turbulent flow'); },

  /* ============ psychology ============ */
  triadic: () => { const W = 460, H = 280; let s = '';
    s += pth('M230,40 L400,230 L60,230 Z', 'var(--line-2)', 2) + node(230, 40, 150, 44, 'Cognitive', A2, { sub: 'beliefs, knowledge' }) + node(400, 230, 150, 44, 'Affective', A1, { sub: 'feelings, emotions' }) + node(60 + 20, 230, 150, 44, 'Behavioural', A3, { sub: 'actions' }) + tx(230, 160, 'ATTITUDE', { a: 'middle', fs: 15, w: 700, c: INK });
    return svg(W, H, s, 'Triadic model of attitudes') + cap('When the three components conflict, cognitive dissonance can be used to change the attitude.'); },

  aggression: () => { const W = 620, H = 250; let s = '';
    [['Instinct', ['innate aggression builds up', '→ release: catharsis']], ['Frustration–aggression', ['goal blocked → frustration', '→ always aggression']], ['Cue arousal', ['frustration → arousal', '+ cue (e.g. stick) → aggression']], ['Social learning', ['observe role model', '→ reinforced → imitate']]].forEach(([t, l], i) => {
      const x = 12 + i * 152; s += box(x, 40, 142, 150, 'var(--surface-2)', A2, 12, 2) + tx(x + 71, 70, t, { a: 'middle', fs: 13, w: 700, c: A2 }) + lines(x + 71, 110, l, { fs: 11.5, c: INK, lh: 18 }); });
    s += tx(310, 230, 'nature ←——————————————→ nurture', { a: 'middle', fs: 12, c: MUT });
    return svg(W, H, s, 'Theories of aggression'); },

  zajonc: () => chain(640, 150, [['Presence of others', 'audience, co-actors', A2], ['↑ arousal', '', A2], ['Dominant response', 'more likely', A2], ['Expert / simple', '→ facilitation', A3], ['Novice / complex', '→ inhibition', A1]], { x0: 70, step: 125, w: 118, h: 50, fs: 11.5, label: 'Zajonc’s drive theory of social facilitation' }),

  tuckman: () => { const W = 580, H = 230; let s = '';
    [['Forming', 'getting to know each other'], ['Storming', 'conflict over roles'], ['Norming', 'norms and cohesion'], ['Performing', 'working to the goal']].forEach(([a, b], i) => { const x = 20 + i * 138, y = 170 - i * 40; s += box(x, y, 128, 40, `color-mix(in srgb, ${A2} ${14 + i * 10}%, transparent)`, A2, 8, 2) + tx(x + 64, y + 18, a, { a: 'middle', fs: 13, w: 700, c: INK }) + tx(x + 64, y + 33, b, { a: 'middle', fs: 10.5 }); });
    return svg(W, H, s, 'Tuckman’s stages of group formation'); },

  ringelmann: () => plot({ w: 540, h: 280, x: [1, 8], y: [40, 105], xt: [1, 2, 3, 4, 5, 6, 7, 8], yt: [50, 60, 70, 80, 90, 100], xl: 'group size', yl: 'average individual effort (%)', label: 'Ringelmann effect',
    segs: [{ p: [[1, 100], [8, 100]], c: MUT, dash: '6 4', label: 'potential', lp: [6.4, 102] }, { p: [[1, 100], [2, 93], [3, 85], [4, 77], [8, 49]], c: A2, label: 'actual (Ringelmann)', lp: [4.2, 72] }],
    cap: 'Average individual performance falls as group size rises — coordination losses plus motivation losses (social loafing).' }),

  fiedler: () => plot({ w: 540, h: 280, x: [0, 10], y: [0, 10], xt: [1, 5, 9], xtl: ['highly favourable', 'moderate', 'highly unfavourable'], yt: false, yl: 'leader effectiveness', label: 'Fiedler’s contingency model',
    fns: [{ f: x => 3 + 0.22 * Math.pow(x - 5, 2), c: A1, label: 'task-oriented', lx: 8.6, ldx: -10, la: 'end' }, { f: x => 8 - 0.22 * Math.pow(x - 5, 2), c: A3, label: 'person-oriented', lx: 5, ldy: -10, la: 'middle' }],
    cap: 'Task-oriented leaders are best at the extremes; person-oriented leaders in moderately favourable situations.' }),

  chelladurai: () => { const W = 640, H = 260; let s = '';
    [['Situational', 'characteristics'], ['Leader', 'characteristics'], ['Member', 'characteristics']].forEach(([a, b], i) => s += node(80, 50 + i * 80, 130, 50, a, A2, { sub: b }));
    [['Required', 'behaviour'], ['Actual', 'behaviour'], ['Preferred', 'behaviour']].forEach(([a, b], i) => s += node(320, 50 + i * 80, 130, 50, a, A2, { sub: b, fill: 'var(--accent-soft)' }) + arrow(146, 50 + i * 80, 253, 50 + i * 80, MUT, 1.4));
    s += arrow(146, 130, 253, 50, MUT, 1.2) + arrow(146, 130, 253, 210, MUT, 1.2);
    s += arrow(386, 50, 470, 110, MUT) + arrow(386, 130, 470, 130, MUT) + arrow(386, 210, 470, 150, MUT) + node(550, 130, 150, 60, 'Performance', A3, { sub: 'and satisfaction' });
    return svg(W, H, s, 'Chelladurai’s multi-dimensional model') + cap('Best performance and satisfaction when required, actual and preferred behaviour are congruent.'); },

  weiner: () => { const W = 460, H = 280; let s = '';
    s += tx(180, 34, 'INTERNAL', { a: 'middle', fs: 12, w: 700, c: INK }) + tx(350, 34, 'EXTERNAL', { a: 'middle', fs: 12, w: 700, c: INK }) + tx(60, 110, 'STABLE', { a: 'middle', fs: 12, w: 700, c: INK }) + tx(60, 210, 'UNSTABLE', { a: 'middle', fs: 12, w: 700, c: INK });
    s += cell(100, 50, 160, 95, A2, 'Ability', { op: .22, fs: 15 }) + cell(270, 50, 160, 95, A4, 'Task difficulty', { op: .22, fs: 15 }) + cell(100, 155, 160, 95, A3, 'Effort', { op: .22, fs: 15 }) + cell(270, 155, 160, 95, A1, 'Luck', { op: .22, fs: 15 });
    s += tx(180, 234, 'controllable', { a: 'middle', fs: 11 }) + tx(270, 272, 'locus of causality (across) × stability (down)', { a: 'middle', fs: 11 });
    return svg(W, H, s, 'Weiner’s model of attribution'); },

  /* ============ skill acquisition ============ */
  welford: () => { const W = 660, H = 190; let s = ''; const items = [['Sensory input', 'senses, proprioception'], ['Perception', 'DCR · selective attention'], ['Memory', 'STM ↔ LTM'], ['Decision', 'choose motor programme'], ['Effector control', 'nerves → muscles'], ['Output', 'the response']];
    items.forEach(([a, b], i) => { const x = 60 + i * 108; s += node(x, 70, 100, 50, a, A3, { sub: b, fs: 12, sfs: 9.5 }); if (i < items.length - 1) s += arrow(x + 51, 70, x + 56, 70, MUT); });
    s += pth('M600,96 L600,150 L60,150 L60,96', A1, 2, 'none', '6 4') + arrowHead(60, 97, -Math.PI / 2, A1) + tx(330, 170, 'feedback (intrinsic and extrinsic)', { a: 'middle', fs: 12, c: A1, w: 700 });
    return svg(W, H, s, 'Welford’s model of information processing'); },

  whiting: () => { const W = 660, H = 200; let s = ''; const items = [['Display', 'input data'], ['Receptor', 'systems'], ['Perceptual', 'mechanism'], ['Translatory', 'mechanism'], ['Effector', 'mechanism'], ['Muscular', 'system → output']];
    items.forEach(([a, b], i) => { const x = 60 + i * 108; s += node(x, 70, 100, 50, a, A3, { sub: b, fs: 12 }); if (i < items.length - 1) s += arrow(x + 51, 70, x + 56, 70, MUT); });
    s += pth('M600,96 L600,160 L168,160 L168,96', A1, 2, 'none', '6 4') + arrowHead(168, 97, -Math.PI / 2, A1) + tx(390, 180, 'feedback data', { a: 'middle', fs: 12, c: A1, w: 700 });
    return svg(W, H, s, 'Whiting’s model of information processing'); },

  memory: () => { const W = 620, H = 230; let s = '';
    s += node(90, 90, 140, 70, 'STSS', A3, { sub: 'all input · < 1 s' }) + node(320, 90, 150, 70, 'STM', A3, { sub: '7 ± 2 items · ≈ 30 s' }) + node(540, 90, 140, 70, 'LTM', A3, { sub: 'unlimited · permanent' });
    s += arrow(162, 90, 243, 90, A2, 2.4) + tx(202, 78, 'selective', { a: 'middle', fs: 11, c: A2 }) + tx(202, 110, 'attention', { a: 'middle', fs: 11, c: A2 });
    s += pth('M397,74 Q430,40 468,74', A1, 2) + arrowHead(468, 74, 0.8, A1) + tx(432, 40, 'rehearsal (encoding)', { a: 'middle', fs: 11, c: A1 });
    s += pth('M468,108 Q430,142 397,108', 'var(--info)', 2) + arrowHead(397, 108, -2.3, 'var(--info)') + tx(432, 150, 'retrieval', { a: 'middle', fs: 11, c: 'var(--info)' });
    s += arrow(20, 90, 18, 90) + tx(12, 70, 'senses', { fs: 11 }) + tx(310, 210, 'irrelevant information is lost from the STSS; STM information is lost if not rehearsed', { a: 'middle', fs: 11.5 });
    return svg(W, H, s, 'Multi-store model of memory'); },

  hicks: () => plot({ w: 540, h: 280, x: [1, 8], y: [0.15, 0.7], xt: [1, 2, 3, 4, 5, 6, 7, 8], yt: [0.2, 0.3, 0.4, 0.5, 0.6], xl: 'number of choices', yl: 'reaction time (s)', label: 'Hick’s law',
    fns: [{ f: n => 0.2 + 0.15 * Math.log2(n), c: A3, label: 'RT = a + b log₂ n', lx: 5.5, ldy: -12, la: 'middle' }], marks: [{ x: 1, y: 0.2, label: 'simple RT' }], cap: 'Choice reaction time rises with the number of choices — steeply at first, then more slowly (logarithmic).' }),

  prp: () => { const W = 620, H = 200; let s = '';
    s += arrow(30, 150, 600, 150, INK, 1.2) + tx(600, 170, 'time', { a: 'end', fs: 11 });
    s += arrow(80, 60, 80, 146, A2, 2) + tx(80, 50, 'S1: dummy', { a: 'middle', fs: 12, c: A2, w: 700 }) + cell(80, 110, 190, 26, A2, 'processing S1', { op: .25, fs: 11 });
    s += arrow(190, 60, 190, 106, A1, 2) + tx(190, 50, 'S2: real move', { a: 'middle', fs: 12, c: A1, w: 700 }) + cell(270, 110, 110, 26, A4, 'PRP delay', { op: .3, fs: 11 }) + cell(380, 110, 140, 26, A1, 'processing S2', { op: .25, fs: 11 });
    s += tx(310, 190, 'single-channel hypothesis: S2 must wait until S1 has been processed', { a: 'middle', fs: 11.5 });
    return svg(W, H, s, 'The psychological refractory period'); },

  /* ============ sport and society ============ */
  golden: () => { const W = 460, H = 290; let s = '';
    s += node(230, 40, 130, 44, 'SPORT', A4) + node(80, 240, 130, 44, 'MEDIA', A4) + node(380, 240, 150, 44, 'SPONSORS', A4);
    s += arrow(200, 64, 100, 216, MUT) + arrow(110, 216, 210, 64, MUT) + arrow(260, 64, 360, 216, MUT) + arrow(350, 216, 250, 64, MUT) + arrow(148, 236, 302, 236, MUT) + arrow(302, 248, 148, 248, MUT);
    s += tx(120, 130, 'rights money', { a: 'end', fs: 11 }) + tx(160, 150, 'content, audiences', { fs: 11 }) + tx(340, 130, 'sponsorship', { fs: 11 }) + tx(300, 150, 'image, exposure', { a: 'end', fs: 11 }) + tx(225, 228, 'advertising £', { a: 'middle', fs: 11 }) + tx(225, 268, 'audiences', { a: 'middle', fs: 11 });
    return svg(W, H, s, 'The golden triangle'); },

  cashmore: () => { const W = 600, H = 210; let s = '';
    [['Global sporting competitions', 'Olympics, World Cup, Rugby World Cup'], ['Satellite communications', 'live TV and streaming to global audiences'], ['Sporting goods market', 'Nike, Adidas — global brands']].forEach(([a, b], i) => { const x = 20 + i * 195; s += box(x, 40 + (2 - i) * 20, 180, 130 - (2 - i) * 20, `color-mix(in srgb, ${A4} ${16 + i * 8}%, transparent)`, A4, 10, 2) + lines(x + 90, 100 + (2 - i) * 10, [a], { fs: 12.5, w: 700, c: INK }) + lines(x + 90, 130 + (2 - i) * 10, b.split(' — '), { fs: 11 }); });
    return svg(W, H, s, 'Cashmore’s three levels of globalisation'); },

  pyramid: () => { const W = 520, H = 290; let s = '';
    [['EXCELLENCE', 'elite, international'], ['PERFORMANCE', 'coaching, organised competition'], ['PARTICIPATION', 'recreation, health, enjoyment'], ['FOUNDATION', 'basic skills, PE, young children']].forEach(([a, b], i) => { const top = 20 + i * 64, w1 = 60 + i * 110, w2 = 60 + (i + 1) * 110; s += `<polygon points="${260 - w1 / 2},${top} ${260 + w1 / 2},${top} ${260 + w2 / 2},${top + 60} ${260 - w2 / 2},${top + 60}" fill="${A4}" fill-opacity="${0.45 - i * 0.08}" stroke="${A4}"/>` + tx(260, top + 30, a, { a: 'middle', fs: 13, w: 700, c: INK }) + tx(260, top + 46, b, { a: 'middle', fs: 10.5, c: INK }); });
    return svg(W, H, s, 'The sports development pyramid') + cap('Numbers fall at each level; competition becomes more intense and selective towards the top.'); },

  wcpp: () => chain(600, 120, [['Talent', 'identify and confirm', A4], ['Podium Potential', '≈ 6–8 years from podium', A4], ['Podium', 'medal chance at next Games', A1]], { x0: 100, step: 200, w: 170, h: 54, fs: 13, label: 'World Class Performance Pathway' }) + cap('UK Sport’s World Class Performance Pathway, funded by the National Lottery and the Exchequer.')
});
