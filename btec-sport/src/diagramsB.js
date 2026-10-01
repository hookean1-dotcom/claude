/* ==========================================================
   BTEC diagrams (Podium): full skeleton, spine, the 19 named muscles, airway, spirometer trace,
   body-system links, SMARTER, recruitment, arousal theories, stress process, anxiety, Carron, sociogram.
   ========================================================== */
const qpt = (p0, p1, p2, t) => [(1 - t) * (1 - t) * p0[0] + 2 * (1 - t) * t * p1[0] + t * t * p2[0], (1 - t) * (1 - t) * p0[1] + 2 * (1 - t) * t * p1[1] + t * t * p2[1]];
Object.assign(DIAG, {
  skeletonB: () => { const W = 640, H = 470; let s = ''; const B = 'var(--ink)', bone = (x1, y1, x2, y2, w = 5) => ln(x1, y1, x2, y2, B, w), c = 320;
    s += circ(c, 46, 26, 'var(--surface-2)', B, 2.4) + bone(c, 72, c, 236, 4);
    s += `<ellipse cx="${c}" cy="140" rx="38" ry="46" fill="none" stroke="${B}" stroke-width="2"/>` + [112, 128, 144, 160].map(y => pth(`M${c - 34},${y} Q${c},${y + 12} ${c + 34},${y}`, B, 1.6)).join('');
    s += `<rect x="${c - 4}" y="100" width="8" height="66" rx="3" fill="var(--surface-2)" stroke="${B}" stroke-width="1.6"/>`;
    s += bone(c - 38, 92, c - 4, 98, 3) + bone(c + 4, 98, c + 38, 92, 3) + `<polygon points="${c - 82},98 ${c - 62},100 ${c - 70},136" fill="${A2}" fill-opacity=".35" stroke="${B}" stroke-width="1.5"/><polygon points="${c + 82},98 ${c + 62},100 ${c + 70},136" fill="${A2}" fill-opacity=".35" stroke="${B}" stroke-width="1.5"/>`;
    s += bone(c - 84, 96, c - 98, 178) + bone(c + 84, 96, c + 98, 178);
    s += bone(c - 104, 184, c - 118, 258, 3.4) + bone(c - 94, 184, c - 106, 260, 3.4) + bone(c + 94, 184, c + 106, 260, 3.4) + bone(c + 104, 184, c + 118, 258, 3.4);
    const hand = (x, dir) => [0, 1, 2].map(i => circ(x + dir * (i * 5 - 5), 266 + (i % 2) * 3, 3.2, 'var(--surface-2)', B, 1.2)).join('') + [-6, -2, 2, 6].map(dx => ln(x + dx, 272, x + dx * 1.3, 288, B, 2) + ln(x + dx * 1.3, 291, x + dx * 1.5, 304, B, 1.6)).join('');
    s += hand(c - 112, 1) + hand(c + 112, -1);
    s += pth(`M${c - 34},232 Q${c - 28},266 ${c},268 Q${c + 28},266 ${c + 34},232 Z`, B, 2, 'var(--surface-2)');
    s += bone(c - 22, 258, c - 30, 348, 6) + bone(c + 22, 258, c + 30, 348, 6) + circ(c - 30, 354, 5.5, A4, B, 1.4) + circ(c + 30, 354, 5.5, A4, B, 1.4);
    s += bone(c - 28, 362, c - 30, 422, 4.6) + bone(c - 38, 364, c - 40, 418, 2.6) + bone(c + 28, 362, c + 30, 422, 4.6) + bone(c + 38, 364, c + 40, 418, 2.6);
    const foot = (x, dir) => [0, 1].map(i => circ(x + dir * i * 6, 430, 3.4, 'var(--surface-2)', B, 1.2)).join('') + [0, 4, 8, 12].map(d => ln(x + dir * (d - 4), 436, x + dir * (d - 2) + dir * 4, 450, B, 2) + ln(x + dir * (d - 2) + dir * 4, 453, x + dir * d + dir * 5, 460, B, 1.6)).join('');
    s += foot(c - 34, -1) + foot(c + 34, 1);
    const L = (x, y, y2, t) => gLab(x, y, 200, y2, t), Rr = (x, y, y2, t) => gLab(x, y, 440, y2, t);
    s += L(c - 24, 40, 40, 'cranium') + L(c - 30, 94, 80, 'clavicle') + L(c - 72, 120, 110, 'scapula') + L(c - 91, 140, 140, 'humerus') + L(c - 2, 210, 170, 'vertebral column') + L(c - 112, 226, 200, 'radius') + L(c - 100, 236, 222, 'ulna') + L(c - 116, 268, 252, 'carpals') + L(c - 110, 282, 278, 'metacarpals') + L(c - 108, 298, 302, 'phalanges') + L(c - 26, 300, 330, 'femur') + L(c - 35, 354, 356, 'patella') + L(c - 39, 392, 392, 'fibula') + L(c - 40, 430, 428, 'tarsals');
    s += Rr(c + 2, 130, 120, 'sternum') + Rr(c + 36, 150, 150, 'ribs') + Rr(c + 30, 244, 240, 'pelvis') + Rr(c + 29, 392, 392, 'tibia') + Rr(c + 44, 446, 440, 'metatarsals / phalanges');
    return svg(W, H, s, 'The skeleton: the bones named in the specification') + cap('Axial skeleton: cranium, vertebral column, ribs, sternum. Appendicular skeleton: shoulder girdle (clavicle, scapula), arms and hands, pelvis, legs and feet.'); },

  spine: () => { const W = 460, H = 380; let s = '';
    const segs = [[[200, 30], [184, 64], [200, 98], 7, A2, 'Cervical · 7'], [[200, 104], [236, 168], [204, 236], 12, A1, 'Thoracic · 12'], [[204, 242], [182, 272], [200, 302], 5, A3, 'Lumbar · 5'], [[200, 308], [222, 322], [214, 338], 5, A4, 'Sacrum · 5 fused'], [[214, 342], [210, 350], [206, 356], 4, A5, 'Coccyx · 4 fused']];
    segs.forEach(([p0, p1, p2, n, col, lab], k) => { for (let i = 0; i < n; i++) { const [x, y] = qpt(p0, p1, p2, (i + 0.5) / n), hgt = (p2[1] - p0[1]) / n - 2; s += `<rect x="${x - (k > 2 ? 9 : 13)}" y="${y - hgt / 2}" width="${k > 2 ? 18 : 26}" height="${Math.max(3, hgt)}" rx="3" fill="${col}" fill-opacity="${k > 2 ? .55 : .3}" stroke="${col}" stroke-width="1.4"/>`; }
      const [mx, my] = qpt(p0, p1, p2, 0.5); s += ln(mx + 16, my, 300, my, MUT, 1) + tx(306, my + 4, lab, { fs: 12.5, c: col, w: 700 }); });
    s += tx(140, 196, '← front', { fs: 11, a: 'end' }) + tx(300, 20, 'side view', { fs: 11 });
    s += tx(306, 84, 'curves forward', { fs: 10.5 }) + tx(306, 186, 'curves backward', { fs: 10.5 }) + tx(306, 288, 'curves forward', { fs: 10.5 });
    return svg(W, H, s, 'Regions and curves of the vertebral column') + cap('The four natural curves give the spine an S-shape that absorbs shock and keeps balance. Neutral spine = keeping these curves.'); },

  musclemapB: () => { const W = 760, H = 360; let s = '';
    const body = cx => circ(cx, 34, 20, 'var(--surface-2)', INK) + box(cx - 42, 58, 84, 120, 'var(--surface-2)', INK, 18) + box(cx - 66, 62, 22, 108, 'var(--surface-2)', INK, 10) + box(cx + 44, 62, 22, 108, 'var(--surface-2)', INK, 10) + box(cx - 38, 178, 34, 150, 'var(--surface-2)', INK, 12) + box(cx + 4, 178, 34, 150, 'var(--surface-2)', INK, 12);
    const m = (x, y, rx, ry, c) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${c}" fill-opacity=".55"/>`, both = (cx, dx, y, rx, ry, c) => m(cx - dx, y, rx, ry, c) + m(cx + dx, y, rx, ry, c);
    const L = (x, y, x2, y2, t) => ln(x, y, x2, y2, MUT, 1) + tx(x2 + (x2 > x ? 4 : -4), y2 + 4, t, { a: x2 > x ? 'start' : 'end', fs: 11.5, c: INK });
    const f = 230, k = 540;
    s += tx(f, 352, 'FRONT', { a: 'middle', fs: 11, w: 700 }) + tx(k, 352, 'BACK', { a: 'middle', fs: 11, w: 700 });
    s += body(f) + both(f, 55, 70, 11, 11, A2) + both(f, 20, 84, 17, 12, A1) + both(f, 55, 104, 7, 14, A3) + both(f, 56, 130, 6, 8, A5) + both(f, 54, 155, 6, 10, A4) + m(f, 130, 13, 30, A3) + both(f, 31, 138, 7, 22, A5) + both(f, 18, 184, 9, 9, A4) + both(f, 21, 235, 13, 32, A1) + both(f, 24, 296, 6, 20, A2);
    s += L(f - 55, 70, 140, 52, 'deltoids') + L(f - 20, 84, 140, 80, 'pectorals') + L(f - 55, 104, 140, 106, 'biceps') + L(f - 56, 130, 140, 132, 'pronators / supinators') + L(f - 54, 155, 140, 160, 'wrist flexors') + L(f - 21, 235, 140, 232, 'quadriceps') + L(f - 24, 296, 140, 296, 'tibialis anterior');
    s += L(f + 4, 118, 310, 112, 'abdominals') + L(f + 31, 140, 310, 140, 'obliques') + L(f + 18, 184, 310, 186, 'hip flexors');
    s += body(k) + m(k, 68, 34, 10, A4) + both(k, 20, 120, 14, 28, A2) + both(k, 55, 108, 7, 14, A3) + both(k, 55, 150, 6, 10, A5) + both(k, 6, 150, 4, 30, A1) + both(k, 20, 192, 16, 14, A5) + both(k, 19, 240, 12, 28, A1) + both(k, 21, 290, 10, 16, A3) + both(k, 21, 316, 8, 8, A4);
    s += L(k + 20, 68, 630, 50, 'trapezius') + L(k + 20, 120, 630, 95, 'latissimus dorsi') + L(k + 55, 108, 630, 125, 'triceps') + L(k + 55, 150, 630, 155, 'wrist extensors') + L(k + 20, 192, 630, 195, 'gluteals') + L(k + 19, 240, 630, 240, 'hamstrings') + L(k + 21, 290, 630, 285, 'gastrocnemius') + L(k + 21, 316, 630, 318, 'soleus') + L(k - 6, 160, 460, 166, 'erector spinae');
    return svg(W, H, s, 'The major skeletal muscles named in the specification, front and back') + cap('The 19 major skeletal muscles in Unit 1 (schematic positions).'); },

  airway: () => { const W = 680, H = 440; let s = '';
    s += `<ellipse cx="340" cy="56" rx="56" ry="46" fill="var(--surface-2)" stroke="${INK}" stroke-width="2"/>` + pth('M326,46 Q340,30 354,46 L350,66 L330,66 Z', A2, 2, `color-mix(in srgb, ${A2} 15%, transparent)`) + pth('M334,96 L334,128 M346,96 L346,128', INK, 2) + pth('M346,128 Q356,124 352,136', A1, 3) + `<rect x="330" y="134" width="20" height="26" rx="6" fill="var(--surface-2)" stroke="${INK}" stroke-width="2"/>`;
    let g = pth('M150,80 Q120,170 130,270 Q200,290 262,262 L262,110 Q220,60 150,80 Z', INK, 1.8, 'var(--surface-2)') + pth('M410,80 Q440,170 430,270 Q360,290 298,262 L298,110 Q340,60 410,80 Z', INK, 1.8, 'var(--surface-2)');
    g += `<rect x="271" y="16" width="18" height="100" rx="4" fill="var(--surface)" stroke="${INK}" stroke-width="2"/>` + [28, 42, 56, 70, 84, 98].map(y => ln(273, y, 287, y, MUT, 1.2)).join('');
    g += pth('M276,114 L220,150', INK, 6) + pth('M284,114 L340,150', INK, 6);
    const br = (x, y, dir) => [[-30, 34], [-6, 44], [18, 36]].map(([dx, dy]) => pth(`M${x},${y} L${x + dx * dir},${y + dy}`, INK, 2.4) + [[-8, 10], [6, 12]].map(([ex, ey]) => pth(`M${x + dx * dir},${y + dy} L${x + (dx + ex) * dir},${y + dy + ey}`, INK, 1.4) + circ(x + (dx + ex) * dir, y + dy + ey + 4, 4, A2, 'none')).join('')).join('');
    g += br(220, 150, 1) + br(340, 150, -1) + pth('M110,292 Q280,222 450,292', A1, 5);
    [[118, 120], [112, 160], [114, 200], [446, 120], [452, 160], [450, 200]].forEach(([x, y]) => g += pth(`M${x - 8},${y - 6} L${x + 8},${y + 6}`, A4, 2.4));
    s += `<g transform="translate(60,140)">${g}</g>`;
    s += gLab(330, 52, 230, 30, 'nasal cavity') + gLab(334, 112, 230, 100, 'pharynx') + gLab(352, 132, 450, 112, 'epiglottis') + gLab(350, 148, 450, 146, 'larynx') + gLab(340, 190, 450, 184, 'trachea') + gLab(392, 274, 540, 230, 'bronchus') + gLab(256, 330, 120, 300, 'bronchioles') + gLab(272, 340, 120, 336, 'alveoli', { c: A2, w: 700 }) + gLab(176, 260, 120, 262, 'intercostals', { c: A4 }) + gLab(490, 380, 560, 320, 'lung') + gLab(340, 330, 560, 360, 'thoracic cavity') + tx(520, 430, 'diaphragm', { fs: 12, c: A1, w: 700 });
    return svg(W, H, s, 'Structures of the respiratory system') + cap('Air: nasal cavity → pharynx → larynx → trachea → bronchi → bronchioles → alveoli. The epiglottis closes over the larynx when swallowing. The intercostal muscles between the ribs and the diaphragm change the volume of the thoracic cavity.'); },

  spiro: () => plot({ w: 580, h: 300, x: [0, 32], y: [0, 6.5], xt: [0, 8, 16, 24, 32], yt: [1, 2, 3, 4, 5, 6], xl: 'time (s)', yl: 'lung volume (L)', label: 'Spirometer trace showing lung volumes',
    fns: [{ f: t => t < 12 ? 2.75 + 0.25 * Math.sin(t * 1.6) : t < 15 ? 2.75 + (5.8 - 2.75) * Math.sin((t - 12) / 3 * Math.PI / 2) : t < 19 ? 5.8 - (5.8 - 1.2) * Math.sin((t - 15) / 4 * Math.PI / 2) : t < 22 ? 1.2 + (2.75 - 1.2) * Math.sin((t - 19) / 3 * Math.PI / 2) : 2.75 + 0.25 * Math.sin((t - 22) * 1.6), c: A2, w: 2.4, n: 400 }],
    extra: (X, Y) => { const br = (x, a, b, lab, col, side = 1, ly) => ln(X(x), Y(a), X(x), Y(b), col, 2) + ln(X(x) - 5, Y(a), X(x) + 5, Y(a), col, 2) + ln(X(x) - 5, Y(b), X(x) + 5, Y(b), col, 2) + tx(X(x) + 8 * side, (ly == null ? (Y(a) + Y(b)) / 2 : Y(ly)) + 4, lab, { fs: 11.5, c: col, w: 700, a: side > 0 ? 'start' : 'end' });
      return br(5.3, 2.5, 3.0, 'tidal volume ≈ 0.5 L', A3, 1, 3.75) + br(17.5, 1.2, 5.8, 'vital capacity', A1, 1, 4.4) + br(25, 0, 1.2, 'residual volume', A4) + br(30.5, 0, 5.8, 'total lung volume', INK, -1, 5.3) + ln(X(0), Y(1.2), X(32), Y(1.2), MUT, 1, '4 4'); },
    cap: 'Normal breaths (tidal volume), then a maximal breath in and a maximal breath out (vital capacity). Residual volume always stays in the lungs. Total lung volume = vital capacity + residual volume.' }),

  systemsweb: () => { const W = 720, H = 390; let s = ''; const P = { M: [360, 50], S: [110, 175], R: [610, 175], C: [520, 330], E: [200, 330] }, names = { M: 'Muscular', S: 'Skeletal', R: 'Respiratory', C: 'Cardiovascular', E: 'Energy systems' }, cols = { M: A1, S: A4, R: A2, C: A5, E: A3 };
    const lk = (a, b) => ln(...P[a], ...P[b], 'var(--line-2)', 2.2), t = (x, y, s, a = 'middle') => `<text x="${x}" y="${y}" fill="${INK}" font-size="11" font-family="var(--f-body)" text-anchor="${a}" stroke="var(--surface)" stroke-width="4" paint-order="stroke">${s}</text>`;
    s += lk('M', 'S') + lk('M', 'R') + lk('M', 'C') + lk('M', 'E') + lk('C', 'R') + lk('E', 'C') + lk('S', 'E');
    s += t(222, 104, 'levers · attachment · Ca²⁺', 'end') + t(498, 104, 'O₂ demand ↑ → ventilation ↑', 'start') + t(464, 228, 'O₂ delivery · CO₂ removal') + t(256, 228, 'ATP · fibre types') + t(578, 256, 'gaseous exchange', 'start') + t(360, 322, 'O₂ for aerobic ATP') + t(360, 348, 'lactate removal') + t(142, 256, 'blood cell production', 'end');
    Object.keys(P).forEach(k => s += node(P[k][0], P[k][1], 140, 42, names[k], cols[k]));
    return svg(W, H, s, 'Links between the body systems') + cap('Unit 1 AO5 questions reward explicit connections: muscular with all systems, cardiovascular with respiratory, and energy with cardiovascular.'); },
  smarter: () => chain(720, 110, [['Specific', '', A3], ['Measurable', '', A3], ['Achievable', '', A3], ['Realistic', '', A3], ['Time-related', '', A3], ['Exciting', '', A1], ['Recorded', '', A1]], { x0: 56, step: 101, w: 92, fs: 12, label: 'SMARTER goals' }) + cap('Unit 2 uses SMARTER goals: the extra E (exciting) and R (recorded) help motivation and monitoring.'),

  recruit: () => chain(820, 120, [['Job analysis', '', A4], ['Job description', 'duties', A4], ['Person spec', 'essential/desirable', A4], ['Advert', 'where placed', A4], ['Application', 'form · CV · letter', A3], ['Interview', '+ practical task', A3], ['Feedback', 'SWOT · action plan', A1]], { x0: 62, step: 116, w: 108, fs: 11.5, sfs: 9.5, h: 50, label: 'The recruitment and selection process' }),

  arousalB: () => { const W = 720, H = 220; let s = '';
    const panel = (x0, title, d, extra = '') => box(x0, 20, 165, 150, 'var(--surface)', 'var(--line-2)', 10, 1) + arrow(x0 + 14, 156, x0 + 156, 156, INK, 1.2) + arrow(x0 + 14, 156, x0 + 14, 30, INK, 1.2) + pth(d, A2, 2.6) + extra + tx(x0 + 82, 190, title, { a: 'middle', fs: 12.5, w: 700, c: INK });
    s += panel(10, 'Drive theory', 'M24,146 L150,46') + panel(188, 'Inverted U', 'M202,146 Q270,-10 338,146') + panel(366, 'Catastrophe', 'M380,146 Q430,30 460,48 L468,140 L516,146', `<circle cx="462" cy="50" r="4" fill="${A1}"/>` + tx(470, 64, 'catastrophe', { fs: 10, c: A1 })) + panel(544, 'IZOF', 'M558,146 Q600,10 650,80 L700,140', `<rect x="590" y="30" width="34" height="126" fill="${A3}" fill-opacity=".18"/>` + tx(607, 44, 'zone', { fs: 10, c: A3, a: 'middle' }));
    s += tx(20, 214, 'x-axis: arousal · y-axis: performance', { fs: 11 });
    return svg(W, H, s, 'Four arousal–performance theories'); },

  stressproc: () => cycleDiag(720, 400, 360, 200, 170, [['1 Environmental demands', 'e.g. penalty in a final', A2], ['2 Perception of demand', 'can I cope?', A2], ['3 Stress response', '↑ arousal, adrenaline, cortisol', A1], ['4 Behavioural consequences', 'performance ↑ or ↓', A3]], { center: ['The stress', 'process'], w: 224, label: 'The four-stage stress process' }),

  multianx: () => plot({ w: 560, h: 280, x: [0, 10], y: [0, 10], xt: [], yt: [], xtl: false, ytl: false, xl: 'anxiety', yl: 'performance', label: 'Multidimensional anxiety theory',
    fns: [{ f: x => 9 - 0.8 * x, c: A1, label: 'cognitive anxiety', lx: 8.4, ldy: -10, la: 'end' }, { f: x => 2 + 7 * Math.sin(Math.PI * x / 10), c: A3, label: 'somatic anxiety', lx: 5, ldy: -12, la: 'middle' }],
    cap: 'Cognitive anxiety (worry) has a negative relationship with performance; somatic anxiety (physical symptoms) helps up to a point, then harms performance — an inverted U.' }),

  carron: () => { const W = 640, H = 270; let s = '';
    [['Environmental', 'size, contracts, time together'], ['Personal', 'goals, commitment, satisfaction'], ['Leadership', 'style, behaviour, decisions'], ['Team', 'stability, roles, shared success']].forEach(([a, b], i) => { const y = 38 + i * 62; s += node(100, y, 170, 48, a, A2, { sub: b, sfs: 9.5 }) + arrow(186, y, 290, 135, MUT, 1.4); });
    s += node(370, 135, 150, 64, 'Cohesion', A1, { sub: 'task · social' }) + arrow(446, 135, 486, 135, MUT, 1.6) + node(560, 135, 140, 64, 'Outcomes', A3, { sub: 'group · individual' });
    return svg(W, H, s, 'Carron’s antecedents of cohesion') + cap('Carron’s model: four groups of antecedents influence task and social cohesion, which affects group and individual outcomes such as performance and satisfaction.'); },

  sociogram: () => { const W = 540, H = 340; let s = ''; const names = ['Amy', 'Bea', 'Cal', 'Dee', 'Eve', 'Fay', 'Gus', 'Hal'], cx = 270, cy = 170, R = 120, P = names.map((_, i) => [cx + R * Math.cos(-Math.PI / 2 + i * Math.PI / 4), cy + R * Math.sin(-Math.PI / 2 + i * Math.PI / 4)]);
    const ch = [[1, 0], [2, 0], [3, 0], [4, 0], [5, 4], [4, 5], [6, 0], [0, 1], [1, 2], [2, 3], [3, 2], [5, 6], [6, 5], [7, 0]], mutual = (a, b) => ch.some(c => c[0] === b && c[1] === a);
    const recv = names.map((_, i) => ch.filter(c => c[1] === i).length);
    ch.forEach(([a, b]) => { const [x1, y1] = P[a], [x2, y2] = P[b], L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, mu = mutual(a, b); if (mu && a > b) return; s += arrow(x1 + ux * 24, y1 + uy * 24, x2 - ux * 24, y2 - uy * 24, mu ? A3 : MUT, mu ? 2.4 : 1.5) + (mu ? arrowHead(x1 + ux * 24, y1 + uy * 24, Math.atan2(-uy, -ux), A3) : ''); });
    names.forEach((n, i) => { const col = recv[i] >= 4 ? A1 : recv[i] === 0 ? A4 : A2; s += circ(P[i][0], P[i][1], 22, 'var(--surface-2)', col, 2.4) + tx(P[i][0], P[i][1] + 4, n, { a: 'middle', fs: 12, w: 700, c: INK }); });
    s += tx(14, 20, '“Who would you most like to train with?”', { fs: 11.5, c: INK }) + tx(14, 300, '● star (chosen by many)', { fs: 11.5, c: A1, w: 700 }) + tx(14, 318, '● isolate (not chosen)', { fs: 11.5, c: A4, w: 700 }) + tx(14, 336, '↔ mutual choice', { fs: 11.5, c: A3, w: 700 });
    return svg(W, H, s, 'An example sociogram') + cap('Amy is a star (leadership potential); Hal is an isolate; Amy–Bea, Cal–Dee, Eve–Fay and Fay–Gus are mutual pairs.'); }
});
