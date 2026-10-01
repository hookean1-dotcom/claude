/* ==========================================================
   GCSE diagrams (Stride · Eduqas GCSE PE). Added to DIAG; a few A level figures are replaced
   with GCSE wording (lever classes, plane/axis pairs, the nine named muscles).
   ========================================================== */
const gLab = (x, y, x2, y2, t, o = {}) => ln(x, y, x2, y2, MUT, 1) + dot(x, y, MUT, 2) + tx(x2 + (x2 > x ? 4 : -4), y2 + 4, t, { a: x2 > x ? 'start' : 'end', fs: o.fs || 12, c: o.c || INK, w: o.w });
Object.assign(DIAG, {
  golden: () => { const W = 560, H = 300; let s = '';
    const N = { sport: [280, 40], media: [100, 250], spons: [460, 250] };
    const two = (a, b, off, tr = 34) => { const [x1, y1] = N[a], [x2, y2] = N[b], L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, nx = -uy * off, ny = ux * off;
      return arrow(x1 + ux * tr + nx, y1 + uy * tr + ny, x2 - ux * tr + nx, y2 - uy * tr + ny, MUT, 1.6) + arrow(x2 - ux * tr - nx, y2 - uy * tr - ny, x1 + ux * tr - nx, y1 + uy * tr - ny, MUT, 1.6); };
    s += two('media', 'sport', 5) + two('spons', 'sport', 5) + two('media', 'spons', 5, 72);
    s += node(280, 40, 130, 40, 'SPORT', A5) + node(100, 250, 130, 40, 'MEDIA', A2) + node(460, 250, 130, 40, 'SPONSORS', A4);
    s += lines(160, 128, ['media pay for', 'broadcast rights;', 'sport gives content'], { fs: 11, a: 'end', c: INK }) + lines(400, 128, ['sponsors pay money;', 'gain exposure', 'and image'], { fs: 11, a: 'start', c: INK }) + tx(280, 234, 'advertising money', { a: 'middle', fs: 11, c: INK }) + tx(280, 276, 'audiences for adverts', { a: 'middle', fs: 11, c: INK });
    return svg(W, H, s, 'The golden triangle of sport, media and sponsorship') + cap('Each side depends on the others: bigger audiences bring more media and sponsorship money into sport.'); },

  veresponse: () => plot({ w: 560, h: 300, x: [0, 45], y: [0, 140], xt: [0, 5, 15, 25, 35, 45], xtl: ['', '0', '10', '20', '30', '40'], yt: [40, 80, 120], xl: 'time from start of exercise (min)', xlDy: 46, pb: 58, yl: 'minute ventilation (L/min)', label: 'Minute ventilation response to exercise',
    fns: [{ f: x => { const t = x - 5; return t < -1 ? 7 : t < 0 ? 7 + (t + 1) * 5 : t < 20 ? 12 + 50 * (1 - Math.exp(-t / 1.4)) : 7 + 55 * Math.exp(-(t - 20) / 3); }, c: A3, label: 'submaximal', lx: 12, ldy: 18 },
      { f: x => { const t = x - 5; return t < -1 ? 7 : t < 0 ? 7 + (t + 1) * 5 : t < 20 ? 12 + 40 * (1 - Math.exp(-t / 1.4)) + 3.4 * t : 7 + 113 * Math.exp(-(t - 20) / 4.5); }, c: A1, label: 'maximal', lx: 16, ldy: -10 }],
    vl: [{ x: 5, label: 'start', dy: 30 }, { x: 25, label: 'stop', dy: 30 }], text: [[32, 50, 'recovery: rapid,', { fs: 11 }], [32, 39, 'then slow', { fs: 11 }]],
    cap: 'Minute ventilation (tidal volume × breathing frequency) rises quickly at the start of exercise, levels off in submaximal work or keeps rising in maximal work, then falls quickly and then slowly in recovery.' }),

  hrresponse: () => plot({ w: 560, h: 300, x: [0, 45], y: [50, 210], xt: [0, 5, 15, 25, 35, 45], xtl: ['', '0', '10', '20', '30', '40'], yt: [60, 100, 140, 180], xl: 'time from start of exercise (min)', xlDy: 46, pb: 58, yl: 'heart rate (bpm)', label: 'Heart rate response to exercise',
    fns: [{ f: x => { const t = x - 5; return t < -2 ? 70 : t < 0 ? 70 + (t + 2) * 8 : t < 20 ? 86 + 64 * (1 - Math.exp(-t / 1.6)) : 70 + 80 * Math.exp(-(t - 20) / 3.5); }, c: A3, label: 'submaximal', lx: 14, ldy: 18 },
      { f: x => { const t = x - 5; return t < -2 ? 70 : t < 0 ? 70 + (t + 2) * 8 : t < 20 ? 86 + 110 * (1 - Math.exp(-t / 5)) : 70 + 125 * Math.exp(-(t - 20) / 5); }, c: A1, label: 'maximal', lx: 19, ldy: -10 }],
    vl: [{ x: 5, label: 'start', dy: 30 }, { x: 25, label: 'stop', dy: 30 }], text: [[32, 128, 'recovery: rapid,', { fs: 11 }], [32, 115, 'then slow', { fs: 11 }]],
    cap: 'Heart rate rises slightly before exercise (anticipatory rise, caused by adrenaline), increases rapidly, levels off (steady state) in submaximal work or keeps rising in maximal work, then falls quickly and then slowly in recovery.' }),

  synovial: () => { const W = 660, H = 300; let s = '';
    s += pth('M240,20 L240,110 Q300,150 360,110 L360,20', INK, 2, 'var(--surface-2)') + pth('M240,280 L240,180 Q300,150 360,180 L360,280', INK, 2, 'var(--surface-2)');
    s += pth('M243,108 Q300,146 357,108', 'var(--info)', 7) + pth('M243,182 Q300,152 357,182', 'var(--info)', 7);
    s += pth('M222,92 Q210,145 222,198 M378,92 Q390,145 378,198', A1, 3) + `<path d="M244,118 Q300,152 356,118 L356,172 Q300,154 244,172 Z" fill="var(--info)" fill-opacity=".14"/>`;
    s += pth('M230,70 L226,220 M370,70 L374,220', A4, 4, 'none', '2 5');
    s += gLab(340, 120, 430, 60, 'articular cartilage') + gLab(300, 145, 430, 140, 'synovial fluid') + gLab(385, 150, 430, 200, 'joint capsule / synovial membrane') + gLab(228, 210, 150, 240, 'ligament') + gLab(270, 40, 150, 40, 'bone');
    return svg(W, H, s, 'Structure of a synovial joint') + cap('Cartilage reduces friction and absorbs shock; synovial fluid lubricates the joint; ligaments join bone to bone and keep the joint stable; the capsule encloses the joint.'); },

  levers: () => { const W = 620, H = 250; let s = '';
    const panel = (x0, title, order, ex) => { const y = 110, L = 170; let p = ln(x0, y, x0 + L, y, INK, 5);
      const pos = { 1: { F: .5, E: .08, L: .92 }, 2: { F: .06, L: .5, E: .94 }, 3: { F: .06, E: .42, L: .94 } }[order];
      const fx = x0 + L * pos.F, ex_ = x0 + L * pos.E, lx = x0 + L * pos.L;
      p += `<polygon points="${fx},${y + 4} ${fx - 13},${y + 26} ${fx + 13},${y + 26}" fill="${A3}" fill-opacity=".25" stroke="${A3}" stroke-width="2"/>` + tx(fx, y + 42, 'F', { a: 'middle', c: A3, w: 700, fs: 13 });
      p += arrow(ex_, y + 50, ex_, y + 6, A1, 2.4) + tx(ex_, y + 64, 'E', { a: 'middle', c: A1, w: 700, fs: 13 });
      p += box(lx - 13, y - 30, 26, 26, 'var(--surface-2)', A2, 4, 2) + arrow(lx, y - 4, lx, y + 22, A2, 2) + tx(lx, y - 38, 'L', { a: 'middle', c: A2, w: 700, fs: 13 });
      p += tx(x0 + L / 2, 30, title, { a: 'middle', c: INK, w: 700, fs: 14 }) + tx(x0 + L / 2, 48, `${['', 'fulcrum', 'load', 'effort'][order]} in the middle`, { a: 'middle', fs: 11.5 }) + lines(x0 + L / 2, 200, ex, { fs: 11.5, c: INK });
      return p; };
    s += panel(20, 'First class', 1, ['neck: nodding (heading)', 'elbow extension (triceps)']) + panel(225, 'Second class', 2, ['ankle: rising onto the toes', 'mechanical advantage']) + panel(430, 'Third class', 3, ['elbow flexion, knee, hip, shoulder', 'speed and range; MA < 1']);
    return svg(W, H, s, 'Three classes of lever with fulcrum, effort and load') + cap('Remember “F-L-E, 1-2-3”: what is in the middle — Fulcrum (first class), Load (second class), Effort (third class).'); },

  planes: () => { const W = 620, H = 250; let s = '';
    const P = (x0, title, plane, axis, eg, col) => { let p = tx(x0 + 95, 22, title, { a: 'middle', c: INK, w: 700, fs: 14 }) + figure(x0 + 95, 40, 1, INK, { armsOut: plane === 'frontal', legsOut: plane === 'frontal' });
      if (plane === 'sagittal') p += `<rect x="${x0 + 93}" y="36" width="4" height="138" fill="${col}" fill-opacity=".45"/>` + ln(x0 + 40, 118, x0 + 150, 118, col, 2.4, '6 4') + tx(x0 + 152, 122, 'axis', { fs: 11, c: col });
      if (plane === 'frontal') p += `<rect x="${x0 + 40}" y="36" width="110" height="138" rx="6" fill="${col}" fill-opacity=".12" stroke="${col}"/>` + circ(x0 + 95, 118, 6, col, col) + tx(x0 + 105, 112, 'axis (into page)', { fs: 11, c: col });
      if (plane === 'transverse') p += `<ellipse cx="${x0 + 95}" cy="118" rx="58" ry="12" fill="${col}" fill-opacity=".18" stroke="${col}"/>` + ln(x0 + 95, 30, x0 + 95, 176, col, 2.4, '6 4') + tx(x0 + 102, 172, 'axis', { fs: 11, c: col });
      return p + lines(x0 + 95, 200, [plane + ' plane · ' + axis + ' axis', eg], { fs: 11.5, c: INK }); };
    s += P(10, 'Sagittal plane', 'sagittal', 'frontal', 'flexion/extension · front somersault', A1) + P(215, 'Frontal plane', 'frontal', 'sagittal', 'abduction/adduction · cartwheel', A2) + P(420, 'Transverse plane', 'transverse', 'vertical', 'rotation · full twist, discus turn', A3);
    return svg(W, H, s, 'Three planes and their axes') + cap('The movement happens <i>in</i> the plane and turns <i>about</i> the axis at right angles to it: sagittal plane–frontal axis; frontal plane–sagittal axis; transverse plane–vertical axis.'); },

  musclemap: () => { const W = 700, H = 360; let s = '';
    const body = cx => circ(cx, 34, 20, 'var(--surface-2)', INK) + box(cx - 42, 58, 84, 120, 'var(--surface-2)', INK, 18) + box(cx - 66, 62, 22, 108, 'var(--surface-2)', INK, 10) + box(cx + 44, 62, 22, 108, 'var(--surface-2)', INK, 10) + box(cx - 38, 178, 34, 150, 'var(--surface-2)', INK, 12) + box(cx + 4, 178, 34, 150, 'var(--surface-2)', INK, 12);
    const m = (x, y, rx, ry, c) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${c}" fill-opacity=".55"/>`;
    const L = (x, y, x2, y2, t) => ln(x, y, x2, y2, MUT, 1) + tx(x2 + (x2 > x ? 4 : -4), y2 + 4, t, { a: x2 > x ? 'start' : 'end', fs: 12, c: INK });
    const f = 210, k = 480;
    s += tx(f, 352, 'FRONT', { a: 'middle', fs: 11, w: 700 }) + tx(k, 352, 'BACK', { a: 'middle', fs: 11, w: 700 });
    s += body(f) + m(f - 20, 84, 17, 12, A1) + m(f + 20, 84, 17, 12, A1) + m(f - 55, 70, 11, 11, A2) + m(f + 55, 70, 11, 11, A2) + m(f - 55, 112, 8, 20, A3) + m(f + 55, 112, 8, 20, A3) + m(f - 21, 225, 13, 34, A5) + m(f + 21, 225, 13, 34, A5);
    s += L(f - 20, 84, 110, 96, 'pectorals') + L(f - 55, 70, 110, 54, 'deltoid') + L(f - 55, 118, 110, 140, 'biceps') + L(f - 21, 225, 110, 225, 'quadriceps');
    s += body(k) + m(k - 20, 120, 14, 30, A2) + m(k + 20, 120, 14, 30, A2) + m(k - 52, 112, 8, 20, A4) + m(k + 52, 112, 8, 20, A4) + m(k - 20, 192, 16, 14, A5) + m(k + 20, 192, 16, 14, A5) + m(k - 19, 240, 13, 30, A1) + m(k + 19, 240, 13, 30, A1) + m(k - 19, 296, 11, 20, A3) + m(k + 19, 296, 11, 20, A3);
    s += L(k + 20, 120, 570, 100, 'latissimus dorsi') + L(k + 52, 112, 570, 150, 'triceps') + L(k + 20, 192, 570, 200, 'gluteals') + L(k + 19, 240, 570, 245, 'hamstrings') + L(k + 19, 296, 570, 295, 'gastrocnemius');
    return svg(W, H, s, 'The nine major muscles named in the specification, front and back') + cap('The nine muscles named in the GCSE specification (schematic positions).'); },

  skeleton: () => { const W = 560, H = 440; let s = ''; const B = 'var(--ink)', bone = (x1, y1, x2, y2, w = 5) => ln(x1, y1, x2, y2, B, w);
    s += circ(280, 46, 26, 'var(--surface-2)', B, 2.4) + bone(280, 72, 280, 232, 4);
    s += `<ellipse cx="280" cy="140" rx="38" ry="46" fill="none" stroke="${B}" stroke-width="2"/>` + [112, 128, 144, 160].map(y => pth(`M246,${y} Q280,${y + 12} 314,${y}`, B, 1.6)).join('');
    s += bone(242, 92, 318, 92, 3) + `<polygon points="238,98 258,100 250,136" fill="${A2}" fill-opacity=".35" stroke="${B}" stroke-width="1.5"/><polygon points="322,98 302,100 310,136" fill="${A2}" fill-opacity=".35" stroke="${B}" stroke-width="1.5"/>`;
    s += bone(236, 96, 222, 178) + bone(324, 96, 338, 178);
    s += bone(216, 184, 202, 260, 3.4) + bone(226, 184, 214, 262, 3.4) + bone(334, 184, 346, 262, 3.4) + bone(344, 184, 358, 260, 3.4);
    s += pth('M246,232 Q252,266 280,268 Q308,266 314,232 Z', B, 2, 'var(--surface-2)');
    s += bone(258, 258, 250, 348, 6) + bone(302, 258, 310, 348, 6);
    s += bone(252, 358, 250, 422, 4.6) + bone(242, 360, 240, 418, 2.6) + bone(308, 358, 310, 422, 4.6) + bone(318, 360, 320, 418, 2.6);
    const J = (x, y, c) => circ(x, y, 6.5, c, 'var(--surface)', 2);
    s += J(236, 96, A1) + J(324, 96, A1) + J(258, 256, A1) + J(302, 256, A1) + J(222, 180, A3) + J(338, 180, A3) + J(250, 352, A3) + J(310, 352, A3) + J(280, 78, A4);
    s += gLab(256, 40, 170, 40, 'cranium (flat bone)') + gLab(247, 120, 170, 118, 'scapula (flat bone)') + gLab(229, 140, 170, 152, 'humerus') + gLab(208, 228, 170, 222, 'radius') + gLab(220, 236, 170, 246, 'ulna') + gLab(254, 300, 170, 300, 'femur') + gLab(241, 392, 170, 392, 'fibula');
    s += gLab(280, 78, 384, 70, 'neck · pivot joint') + gLab(324, 96, 384, 96, 'shoulder · ball and socket') + gLab(314, 140, 384, 140, 'ribs (flat bones)') + gLab(338, 180, 384, 182, 'elbow · hinge joint') + gLab(302, 256, 384, 256, 'hip · ball and socket') + gLab(310, 352, 384, 350, 'knee · hinge joint') + gLab(309, 392, 384, 392, 'tibia');
    return svg(W, H, s, 'The skeleton: major bones and joints') + cap('Long bones (humerus, radius, ulna, femur, tibia, fibula) act as levers for movement; flat bones (cranium, scapula, ribs) protect organs and give a broad area for muscle attachment. Joint colours: <b style="color:var(--a1)">ball and socket</b>, <b style="color:var(--a3)">hinge</b>, <b style="color:var(--a4)">pivot</b>.'); },

  lungs: () => { const W = 680, H = 330; let s = '';
    s += pth('M150,80 Q120,170 130,270 Q200,290 262,262 L262,110 Q220,60 150,80 Z', INK, 1.8, 'var(--surface-2)') + pth('M410,80 Q440,170 430,270 Q360,290 298,262 L298,110 Q340,60 410,80 Z', INK, 1.8, 'var(--surface-2)');
    s += `<rect x="271" y="16" width="18" height="100" rx="4" fill="var(--surface)" stroke="${INK}" stroke-width="2"/>` + [28, 42, 56, 70, 84, 98].map(y => ln(273, y, 287, y, MUT, 1.2)).join('');
    s += pth('M276,114 L220,150', INK, 6) + pth('M284,114 L340,150', INK, 6);
    const br = (x, y, dir) => [[-30, 34], [-6, 44], [18, 36]].map(([dx, dy]) => pth(`M${x},${y} L${x + dx * dir},${y + dy}`, INK, 2.4) + [[-8, 10], [6, 12]].map(([ex, ey]) => pth(`M${x + dx * dir},${y + dy} L${x + (dx + ex) * dir},${y + dy + ey}`, INK, 1.4) + circ(x + (dx + ex) * dir, y + dy + ey + 4, 4, A2, 'none') ).join('')).join('');
    s += br(220, 150, 1) + br(340, 150, -1);
    s += pth('M110,292 Q280,222 450,292', A1, 5) + tx(456, 300, 'diaphragm', { fs: 12, c: A1, w: 700 });
    s += gLab(280, 40, 384, 30, 'trachea (windpipe) — rings of cartilage') + gLab(320, 138, 440, 112, 'bronchus (one to each lung)') + gLab(198, 188, 70, 160, 'bronchioles') + gLab(212, 200, 70, 214, 'alveoli (air sacs)', { c: A2, w: 700 });
    s = `<g transform="translate(60,0)">${s}</g>`;
    return svg(W, H, s, 'The respiratory system') + cap('Air passes: nose/mouth → trachea → bronchi → bronchioles → alveoli. Breathing in, the diaphragm contracts and flattens, the chest gets bigger and air is drawn in.'); },

  gasex: () => { const W = 560, H = 250; let s = '';
    s += circ(170, 125, 88, 'var(--surface-2)', A2, 2.4) + tx(170, 70, 'ALVEOLUS', { a: 'middle', fs: 13, w: 700, c: A2 }) + tx(170, 94, 'high O₂, low CO₂', { a: 'middle', fs: 12, c: INK });
    s += `<rect x="262" y="40" width="64" height="170" rx="30" fill="${A1}" fill-opacity=".14" stroke="${A1}" stroke-width="2"/>` + tx(294, 30, 'CAPILLARY', { a: 'middle', fs: 12, w: 700, c: A1 });
    [80, 110, 140, 170].forEach((y, i) => s += circ(294, y + (i % 2) * 6, 8, A1, 'none'));
    s += arrow(200, 120, 280, 120, A3, 2.6) + tx(214, 112, 'O₂', { fs: 13, w: 700, c: A3 }) + arrow(286, 160, 206, 160, MUT, 2.6) + tx(214, 178, 'CO₂', { fs: 13, w: 700, c: MUT });
    s += arrow(294, 228, 294, 214, A1, 1.6) + tx(340, 70, 'blood arriving:', { fs: 11.5 }) + tx(340, 86, 'low O₂, high CO₂', { fs: 12, c: INK, w: 600 });
    s += lines(450, 130, ['Diffusion: gases move', 'from high to low', 'concentration.', 'Walls one cell thick,', 'huge surface area,', 'good blood supply.'], { fs: 11.5, c: INK });
    return svg(W, H, s, 'Gaseous exchange at the alveoli') + cap('Oxygen diffuses from the alveoli into the blood (where it joins haemoglobin in red blood cells); carbon dioxide diffuses from the blood into the alveoli to be breathed out.'); },

  ipm: () => { const W = 620, H = 200; let s = '';
    const N = [[90, 'Input', 'senses: sight, hearing, touch', A4], [310, 'Decision making', 'select a response from memory', A4], [530, 'Output', 'the action is carried out', A4]];
    N.forEach(([x, t, sub, c]) => s += node(x, 70, 170, 54, t, c, { sub, sfs: 10 }));
    s += arrow(176, 70, 224, 70, MUT, 1.8) + arrow(396, 70, 444, 70, MUT, 1.8);
    s += pth('M530,98 L530,150 L90,150 L90,100', A1, 2) + arrowHead(90, 98, -Math.PI / 2, A1) + node(310, 150, 210, 40, 'Feedback', A1, { sub: 'knowledge of results / performance', sfs: 10 });
    return svg(W, H, s, 'Simple information processing model') + cap('Example: a goalkeeper sees the striker’s run (input), decides to come off the line (decision making), dives at their feet (output), and learns from the result (feedback).'); },

  hrzones: () => plot({ w: 560, h: 300, x: [0, 40], y: [50, 210], xt: [0, 10, 20, 30, 40], yt: [60, 100, 140, 180], xl: 'time (min)', yl: 'heart rate (bpm)', label: 'Training zones for a 16-year-old',
    extra: (X, Y) => `<rect x="${X(0)}" y="${Y(163)}" width="${X(40) - X(0)}" height="${Y(122) - Y(163)}" fill="${A3}" fill-opacity=".16"/><rect x="${X(0)}" y="${Y(184)}" width="${X(40) - X(0)}" height="${Y(163) - Y(184)}" fill="${A1}" fill-opacity=".16"/>` +
      ln(X(0), Y(204), X(40), Y(204), A1, 1.2, '5 4') + tx(X(40) - 4, Y(204) - 6, 'max HR = 220 − 16 = 204', { a: 'end', fs: 11.5, c: A1 }) + tx(X(0.6), Y(152), 'aerobic zone', { fs: 11.5, c: A3, w: 700 }) + tx(X(0.6), Y(152) + 14, '60–80% (122–163)', { fs: 11, c: A3 }) + tx(X(0.6), Y(176), 'anaerobic zone', { fs: 11.5, c: A1, w: 700 }) + tx(X(0.6), Y(176) + 13, '80–90% (163–184)', { fs: 11, c: A1 }),
    segs: [{ p: [[0, 70], [3, 120], [6, 140], [12, 145], [14, 175], [16, 178], [17, 150], [20, 148], [22, 176], [24, 179], [25, 150], [30, 146], [34, 120], [37, 100], [40, 90]], c: INK, w: 2.4 }],
    cap: 'A fartlek run: steady running in the aerobic zone with bursts into the anaerobic zone, then a cool-down. Zones are percentages of maximum heart rate (220 − age).' }),

  o2debt: () => plot({ w: 560, h: 290, x: [0, 14], y: [0, 3.4], xt: [0, 2, 4, 6, 8, 10, 12, 14], yt: [0.5, 1, 2, 3], xl: 'time (min)', yl: 'oxygen used (L/min)', label: 'Oxygen deficit and oxygen debt',
    fills: [{ a: 2, b: 4.5, f: x => 2.8, base: 0, c: 'transparent', op: 0 }],
    extra: (X, Y) => { const up = x => 0.4 + 2.4 * (1 - Math.exp(-(x - 2) * 1.6)), dn = x => 0.4 + 2.4 * Math.exp(-(x - 8) * 0.8);
      let d1 = `M${X(2)},${Y(0.4)}`; for (let x = 2; x <= 5; x += .05) d1 += ` L${X(x)},${Y(up(x))}`; d1 += ` L${X(5)},${Y(2.8)} L${X(2)},${Y(2.8)} Z`;
      let d2 = `M${X(8)},${Y(0.4)}`; for (let x = 8; x <= 14; x += .05) d2 += ` L${X(x)},${Y(dn(x))}`; d2 += ` L${X(14)},${Y(0.4)} Z`;
      let c = `M${X(0)},${Y(0.4)} L${X(2)},${Y(0.4)}`; for (let x = 2; x <= 8; x += .05) c += ` L${X(x)},${Y(up(x))}`; for (let x = 8; x <= 14; x += .05) c += ` L${X(x)},${Y(dn(x))}`;
      return `<path d="${d1}" fill="${A1}" fill-opacity=".22"/><path d="${d2}" fill="${A2}" fill-opacity=".22"/>` + pth(c, INK, 2.4) + ln(X(2), Y(2.8), X(8), Y(2.8), MUT, 1.2, '5 4') +
        tx(X(2.3), Y(3.05), 'oxygen deficit', { fs: 12, c: A1, w: 700 }) + tx(X(9.2), Y(1.3), 'oxygen debt (EPOC)', { fs: 12, c: A2, w: 700 }) + tx(X(4.6), Y(2.55), 'steady state', { fs: 11.5 }) + ln(X(2), Y(0), X(2), Y(3.3), MUT, 1, '3 4') + ln(X(8), Y(0), X(8), Y(3.3), MUT, 1, '3 4') + tx(X(2) + 4, Y(0.15), 'exercise starts', { fs: 11 }) + tx(X(8) + 4, Y(0.15), 'exercise stops', { fs: 11 }); },
    cap: 'At the start of exercise, oxygen supply lags behind demand (the deficit), so energy comes anaerobically. After exercise, extra oxygen is still taken in to repay the debt: removing lactic acid and restoring energy stores.' }),

  energybal: () => { const W = 600, H = 220; let s = '';
    [['Positive', 'energy in > energy out', 'weight gain', 150, 100, A1], ['Balanced', 'energy in = energy out', 'weight stays the same', 120, 120, A3], ['Negative', 'energy in < energy out', 'weight loss', 95, 145, A2]].forEach(([t, a, b, i, o, c], k) => { const x = 20 + k * 196;
      s += box(x, 14, 180, 196, 'var(--surface-2)', c, 12, 2) + tx(x + 90, 40, t, { a: 'middle', fs: 15, w: 700, c }) + bar(x + 45, 160, 34, i * .7, A4, 'in', '') + bar(x + 101, 160, 34, o * .7, A5, 'out', '') + tx(x + 90, 188, a, { a: 'middle', fs: 11, c: INK }) + tx(x + 90, 203, b, { a: 'middle', fs: 11 }); });
    return svg(W, H, s, 'Energy balance: positive, balanced and negative') + cap('Energy in comes from food and drink; energy out is the energy used at rest (basal metabolic rate) plus physical activity.'); },

  smart: () => chain(620, 110, [['Specific', 'clear, for this sport', A4], ['Measurable', 'a number or time', A4], ['Agreed', 'with coach or teacher', A4], ['Realistic', 'challenging but possible', A4], ['Time-phased', 'a deadline', A4]], { x0: 62, step: 124, w: 112, fs: 12.5, sfs: 9.5, h: 50, label: 'SMART targets' }) + cap('SMART targets give focus, raise effort and confidence, and make progress easy to check.'),

  warmup: () => { const W = 620, H = 200; let s = '';
    s += tx(14, 26, 'WARM-UP', { fs: 12, w: 700, c: A1 }) + tx(14, 126, 'COOL-DOWN', { fs: 12, w: 700, c: A3 });
    [['Pulse raiser', 'jog, skip — ↑ HR and temperature'], ['Stretching', 'dynamic, active, passive, PNF'], ['Skill practice', 'game-specific drills, ↑ intensity']].forEach(([a, b], i) => { s += node(110 + i * 200, 64, 180, 50, a, A1, { sub: b, sfs: 10 }); if (i < 2) s += arrow(202 + i * 200, 64, 218 + i * 200, 64, MUT); });
    [['Light activity', 'jog → walk; ↓ HR gradually'], ['Stretching', 'static stretches, while warm'], ['Recovery aids', 'ice bath, massage, rehydrate']].forEach(([a, b], i) => { s += node(110 + i * 200, 164, 180, 50, a, A3, { sub: b, sfs: 10 }); if (i < 2) s += arrow(202 + i * 200, 164, 218 + i * 200, 164, MUT); });
    return svg(W, H, s, 'Phases of a warm-up and a cool-down'); },

  wellbeing: () => { const W = 520, H = 300; let s = '';
    s += `<circle cx="200" cy="120" r="88" fill="${A1}" fill-opacity=".16" stroke="${A1}" stroke-width="2"/><circle cx="320" cy="120" r="88" fill="${A3}" fill-opacity=".16" stroke="${A3}" stroke-width="2"/><circle cx="260" cy="210" r="88" fill="${A4}" fill-opacity=".16" stroke="${A4}" stroke-width="2"/>`;
    s += lines(170, 92, ['PHYSICAL', 'heart, lungs, weight,', 'strength, no illness'], { fs: 11, c: INK }) + lines(350, 92, ['SOCIAL', 'friends, teamwork,', 'belonging'], { fs: 11, c: INK }) + lines(260, 244, ['MENTAL', 'less stress, confidence,', 'self-esteem, enjoyment'], { fs: 11, c: INK }) + tx(260, 152, 'WELL-BEING', { a: 'middle', fs: 12, w: 700, c: INK });
    return svg(W, H, s, 'Physical, social and mental well-being overlap') + cap('Health is a state of complete physical, mental and social well-being — not merely the absence of disease or infirmity. Each part affects the others.'); },

  continua: () => { const W = 600, H = 200; let s = '';
    [['basic', 'complex', .78, 'needs many decisions, lots of information'], ['closed', 'open', .85, 'environment changes all the time'], ['self-paced', 'externally paced', .8, 'timing set by opponents and the ball']].forEach(([a, b, p, why], i) => { const y = 36 + i * 54; s += ln(150, y, 450, y, 'var(--line-2)', 4) + tx(140, y + 4, a, { a: 'end', fs: 12.5, c: INK }) + tx(460, y + 4, b, { fs: 12.5, c: INK }) + circ(150 + p * 300, y, 8, A4, 'var(--surface)', 2) + tx(300, y + 22, why, { a: 'middle', fs: 11 }); });
    s += tx(300, 194, '● a netball pass in a match, placed on each continuum', { a: 'middle', fs: 11.5, c: A4 });
    return svg(W, H, s, 'Skill classification continua') + cap('Skills are placed on a continuum, not in a box — always justify the position.'); },

  stagesL: () => { const W = 620, H = 200; let s = '';
    [['Cognitive', 'beginner', 'lots of errors; needs to think about every part', 'visual + manual guidance; simple, positive, extrinsic feedback'], ['Associative', 'practising', 'fewer errors; movements more fluent', 'verbal guidance; KP and KR; more detail'], ['Autonomous', 'expert', 'automatic, consistent, can focus on tactics', 'verbal detail; intrinsic feedback; mechanical for fine-tuning']].forEach(([a, b, c, d], i) => {
      const x = 14 + i * 202; s += box(x, 14, 186, 176, 'var(--surface-2)', A4, 12, 2) + tx(x + 93, 38, a, { a: 'middle', fs: 14, w: 700, c: A4 }) + tx(x + 93, 54, b, { a: 'middle', fs: 11, f: 'var(--f-mono)' }) + lines(x + 93, 78, wrapTxt(c, 25), { fs: 11.5, c: INK }) + lines(x + 93, 132, wrapTxt(d, 27), { fs: 11 });
      if (i < 2) s += arrow(x + 188, 96, x + 200, 96, MUT); });
    return svg(W, H, s, 'Stages of learning with matching guidance and feedback'); }
});
/* wrap a string into lines of at most n characters */
function wrapTxt(t, n) { const out = []; let cur = ''; t.split(' ').forEach(w => { if ((cur + ' ' + w).trim().length > n) { out.push(cur.trim()); cur = w; } else cur += ' ' + w; }); if (cur.trim()) out.push(cur.trim()); return out; }
