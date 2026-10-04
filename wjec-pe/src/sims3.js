/* ==========================================================
   Explorations · Unit 3 exercise physiology and biomechanics
   ========================================================== */
const plotBox = (W, H) => ({ x: 60, y: 24, w: W - 90, h: H - 70 });

/* ---- 3.1 Cardiac output ---- */
SIMS.cardiac = {
  title: 'Heart rate, stroke volume and cardiac output', h: 340, noPlay: true,
  controls: [{ type: 'seg', id: 'tr', label: 'Performer', value: 0, options: [[0, 'untrained'], [1, 'trained endurance']] }, { id: 'I', label: 'Exercise intensity', min: 0, max: 100, step: 1, value: 50, fmt: v => v + '%' }],
  readouts: ['Heart rate', 'Stroke volume', 'Cardiac output', 'Why'],
  note: 'Q = HR × SV. Stroke volume rises with venous return (Frank–Starling) and plateaus at about 40–60% intensity; beyond that, cardiac output rises mainly through heart rate. The trained heart has a larger SV and a lower HR at any submaximal workload.',
  v(st, I) { const tr = +st.p.tr, hr = (tr ? 50 : 72) + ((tr ? 195 : 200) - (tr ? 50 : 72)) * I / 100, sv = (tr ? 100 : 70) + (tr ? 80 : 45) * Math.min(1, I / (tr ? 70 : 50)); return { hr, sv, q: hr * sv / 1000 }; },
  draw(c, W, H, st, C) { const b = plotBox(W, H), tr = st.p.tr;
    const pl = CV.plot(c, C, b, { xr: [0, 100], yr: [0, 40], xl: 'intensity (%)', yl: 'Q (L/min) · SV/5 (ml) · HR/5 (bpm)', series: [{ f: I => this.v(st, I).q, col: C.a1, w: 3 }, { f: I => this.v(st, I).sv / 5, col: C.a3, w: 2 }, { f: I => this.v(st, I).hr / 5, col: C.a2, w: 2 }], dots: [[st.p.I, this.v(st, st.p.I).q, C.a1, 6]] });
    CV.text(c, 'Q', pl.X(96), pl.Y(this.v(st, 96).q) - 10, C.a1, 12, 'center', 700); CV.text(c, 'SV', pl.X(96), pl.Y(this.v(st, 96).sv / 5) - 10, C.a3, 12, 'center', 700); CV.text(c, 'HR', pl.X(96), pl.Y(this.v(st, 96).hr / 5) + 14, C.a2, 12, 'center', 700);
    CV.circle(c, W - 70, 70, 16 + 6 * Math.abs(Math.sin(performance.now() / (60000 / this.v(st, st.p.I).hr) * Math.PI)), hexA(C.a1, .6)); },
  read(st) { const v = this.v(st, st.p.I); return [Math.round(v.hr) + ' bpm', Math.round(v.sv) + ' ml', v.q.toFixed(1) + ' L/min', st.p.I < 45 ? 'SV and HR both rising' : 'SV near plateau; HR drives Q']; }
};

/* ---- 3.1 HR response ---- */
SIMS.hrresponse = {
  title: 'Heart-rate response: anticipation to recovery', h: 330, noPlay: true,
  controls: [{ type: 'seg', id: 'w', label: 'Workload', value: 'sub', options: [['sub', 'submaximal'], ['max', 'maximal']] }, { type: 'seg', id: 'tr', label: 'Performer', value: 0, options: [[0, 'untrained'], [1, 'trained']] }, { id: 't', label: 'Time (min)', min: -3, max: 35, step: 0.5, value: 8 }],
  readouts: ['Heart rate', 'Phase', 'Controlled by', 'Trained difference'],
  note: 'Exercise from 0 to 15 min. Trained performers have a lower resting and working HR, reach steady state sooner and recover faster.',
  hr(t, st) { const tr = +st.p.tr, rest = tr ? 52 : 72, top = st.p.w === 'max' ? 195 : (tr ? 135 : 155), tau = tr ? 1.2 : 2, rec = tr ? 2.5 : 4.5; if (t < -1.5) return rest; if (t < 0) return rest + (t + 1.5) * 8; if (t <= 15) return st.p.w === 'max' ? rest + 12 + (top - rest - 12) * t / 15 * (1 - Math.exp(-t / 1.2)) + 0 : rest + 12 + (top - rest - 12) * (1 - Math.exp(-t / tau)); const end = this.hr(15, st); return rest + (end - rest) * (0.5 * Math.exp(-(t - 15) / 1) + 0.5 * Math.exp(-(t - 15) / rec * 2)); },
  draw(c, W, H, st, C) { CV.plot(c, C, plotBox(W, H), { xr: [-3, 35], yr: [40, 210], xl: 'time (min)', yl: 'heart rate (bpm)', series: [{ f: t => this.hr(t, st), col: C.a1, w: 3 }, { pts: [[0, 40], [0, 210]], col: C.muted, dash: [4, 3], w: 1 }, { pts: [[15, 40], [15, 210]], col: C.muted, dash: [4, 3], w: 1 }], dots: [[st.p.t, this.hr(st.p.t, st), C.ink, 6]] }); },
  read(st) { const t = st.p.t, ph = t < -1.5 ? 'rest' : t < 0 ? 'anticipatory rise' : t < 2 ? 'rapid increase' : t <= 15 ? (st.p.w === 'max' ? 'continues rising' : 'steady state') : t < 17 ? 'rapid recovery' : 'slow recovery';
    return [Math.round(this.hr(t, st)) + ' bpm', ph, t < 0 ? 'adrenaline (sympathetic)' : t <= 15 ? 'CCC: proprioceptors, chemoreceptors, thermoreceptors → sympathetic' : 'parasympathetic (vagus); baroreceptors', +st.p.tr ? 'lower HR, quicker recovery' : 'switch to “trained” to compare']; }
};

/* ---- 3.2 Vascular shunt ---- */
SIMS.shunt = {
  title: 'The vascular shunt', h: 340, noPlay: true,
  controls: [{ id: 'I', label: 'Exercise intensity', min: 0, max: 100, step: 1, value: 0, fmt: v => v + '%' }],
  readouts: ['Cardiac output', 'To skeletal muscle', 'To gut and kidneys', 'Brain'],
  note: 'As intensity rises, arterioles to working muscles vasodilate and their pre-capillary sphincters open; those to the gut and kidneys vasoconstrict. The brain keeps a constant volume. (Typical values.)',
  dist(I) { const f = I / 100, Q = 5 + 20 * f, pct = { muscle: 20 + 64 * f, brain: 0.75 / Q * 100, heart: (0.25 + 0.75 * f) / Q * 100, gut: 25 - 23.5 * f, kidney: 20 - 19 * f, skin: 5 - 2 * f }; pct.other = Math.max(0, 100 - Object.values(pct).reduce((a, b) => a + b, 0)); return { Q, pct }; },
  draw(c, W, H, st, C) { const { Q, pct } = this.dist(st.p.I), keys = [['muscle', C.a1], ['brain', C.a2], ['heart', C.a5], ['gut', C.a4], ['kidney', C.a3], ['skin', C.info], ['other', C.muted]];
    let a = -Math.PI / 2; const cx = Math.min(W * 0.3, 170), cy = H / 2, R = Math.min(cx - 20, H / 2 - 30) * (0.55 + 0.45 * Q / 25);
    keys.forEach(([k, col]) => { const d = pct[k] / 100 * Math.PI * 2; c.fillStyle = col; c.beginPath(); c.moveTo(cx, cy); c.arc(cx, cy, R, a, a + d); c.fill(); a += d; });
    CV.text(c, `Q = ${Q.toFixed(1)} L/min`, cx, H - 14, C.ink, 13, 'center', 700);
    keys.forEach(([k, col], i) => { const y = 40 + i * 36, x = cx + 150; CV.rrect(c, x, y - 7, 14, 14, 3, col); CV.text(c, `${k}: ${pct[k].toFixed(0)}% · ${(pct[k] / 100 * Q).toFixed(2)} L/min`, x + 22, y, C.ink, 12.5); }); },
  read(st) { const { Q, pct } = this.dist(st.p.I); return [Q.toFixed(1) + ' L/min', (pct.muscle / 100 * Q).toFixed(1) + ' L/min (' + pct.muscle.toFixed(0) + '%)', ((pct.gut + pct.kidney) / 100 * Q).toFixed(2) + ' L/min', '0.75 L/min — ' + pct.brain.toFixed(0) + '%']; }
};

/* ---- 3.3 Breathing ---- */
SIMS.breathing = {
  title: 'Tidal volume, frequency and minute ventilation', h: 330,
  controls: [{ id: 'I', label: 'Exercise intensity', min: 0, max: 100, step: 1, value: 40, fmt: v => v + '%' }],
  readouts: ['Tidal volume', 'Breathing frequency', 'Minute ventilation', 'Expiration'],
  note: 'Tidal volume rises first and plateaus at high intensity; then frequency drives further increases in minute ventilation (V_E = TV × f).',
  v(I) { const f = I / 100, tv = 0.5 + 2.4 * Math.min(1, f / 0.7), fr = 12 + 43 * Math.pow(f, 1.6); return { tv, fr, ve: tv * fr }; },
  draw(c, W, H, st, C) { const v = this.v(st.p.I), ph = (st.t * v.fr / 60) % 1, vol = v.tv * (0.5 - 0.5 * Math.cos(ph * Math.PI * 2)), cx = W * 0.25, cy = H / 2;
    [-1, 1].forEach(s => { c.fillStyle = hexA(C.info, .25 + .25 * vol / 3); c.strokeStyle = C.info; c.lineWidth = 2; c.beginPath(); c.ellipse(cx + s * 40, cy, 32 + vol * 10, 70 + vol * 14, 0, 0, 7); c.fill(); c.stroke(); });
    CV.text(c, 'lungs', cx, cy + 110, C.muted, 12, 'center');
    CV.plot(c, C, { x: W * 0.5, y: 30, w: W * 0.45, h: H - 80 }, { xr: [0, 100], yr: [0, 170], xl: 'intensity %', yl: 'V_E (L/min)', series: [{ f: I => this.v(I).ve, col: C.a1, w: 3 }], dots: [[st.p.I, v.ve, C.a1, 6]] }); },
  read(st) { const v = this.v(st.p.I); return [v.tv.toFixed(2) + ' L', Math.round(v.fr) + ' /min', v.ve.toFixed(0) + ' L/min', st.p.I > 15 ? 'active: internal intercostals + abdominals' : 'passive (recoil)']; }
};

/* ---- 3.3 VO2, steady state and oxygen deficit ---- */
SIMS.vo2 = {
  title: 'Oxygen uptake, steady state and VO₂max', h: 330, noPlay: true,
  controls: [{ id: 'I', label: 'Workload (% VO₂max)', min: 30, max: 120, step: 5, value: 70, fmt: v => v + '%' }, { type: 'seg', id: 'tr', label: 'Performer', value: 0, options: [[0, 'untrained'], [1, 'trained']] }],
  readouts: ['VO₂ reached', 'Steady state?', 'Oxygen deficit', 'Energy'],
  note: 'At the start of exercise oxygen supply lags behind demand — the oxygen deficit (shaded), met anaerobically. Above VO₂max there is no steady state. Trained performers reach steady state faster (smaller deficit).',
  draw(c, W, H, st, C) { const I = st.p.I, tau = +st.p.tr ? 0.5 : 1, lim = Math.min(I, 100), f = t => t < 0 ? 10 : 10 + (lim - 10) * (1 - Math.exp(-t / tau));
    CV.plot(c, C, plotBox(W, H), { xr: [-1, 8], yr: [0, 130], xl: 'time (min)', yl: 'O₂ uptake (% VO₂max)', fills: [{ col: hexA(C.a1, .25), pts: [[0, 0], ...Array.from({ length: 41 }, (_, i) => [i / 5, I]), [8, 0]] }, { col: C.surface, pts: [[-1, 0], ...Array.from({ length: 46 }, (_, i) => [-1 + i / 5, f(-1 + i / 5)]), [8, 0]] }], series: [{ f, col: C.a3, w: 3 }, { pts: [[0, I], [8, I]], col: C.a1, dash: [5, 4], w: 1.6 }, { pts: [[-1, 100], [8, 100]], col: C.muted, dash: [2, 3], w: 1 }] }); },
  read(st) { const I = st.p.I, tau = +st.p.tr ? 0.5 : 1; return [Math.min(I, 100) + '% VO₂max', I <= 100 ? 'yes, after ≈ ' + (3 * tau).toFixed(1) + ' min' : 'no — above VO₂max', (Math.min(I, 100) * tau / 100).toFixed(2) + ' (relative)', I <= 100 ? 'aerobic once steady' : 'anaerobic contribution → fatigue']; }
};

/* ---- 3.4 Adaptations sorter ---- */
SIMS.adapt = sorterSim('Aerobic or anaerobic adaptation?', 'Which type of training mainly causes each long-term adaptation?', ['Aerobic training', 'Anaerobic / resistance training'], [
  ['More and bigger mitochondria', 0, 'More aerobic ATP.'], ['Increased myoglobin', 0, 'O₂ storage in muscle.'], ['Increased capillarisation of muscle', 0, 'More O₂ delivery.'], ['Bradycardia and a larger stroke volume', 0, 'Cardiac hypertrophy (larger chamber).'],
  ['Higher VO₂max and lactate threshold', 0, 'Central and peripheral adaptations.'], ['Increased plasma volume', 0, 'Better cooling and SV.'],
  ['Hypertrophy of type II fibres', 1, 'Bigger, stronger fast-twitch fibres.'], ['Increased ATP and PC stores', 1, 'Longer maximal efforts.'], ['Better buffering / lactate tolerance', 1, 'High-intensity intervals.'],
  ['Increased creatine kinase and PFK activity', 1, 'Faster anaerobic ATP.'], ['Thicker ventricle wall (more than chamber)', 1, 'Pressure load of heavy lifting.'], ['Increased bone density', 1, 'Resistance and weight-bearing loads (also running).']
]);

/* ---- 3.5 Carbo-loading ---- */
SIMS.carbload = {
  title: 'Carbohydrate loading planner', h: 330, noPlay: true,
  controls: [{ type: 'seg', id: 'm', label: 'Method', value: 'classic', options: [['none', 'normal diet'], ['classic', 'classic (depletion)'], ['modern', 'modern (taper + load)']] }, { id: 'race', label: 'Race duration (min)', min: 30, max: 240, step: 10, value: 180 }],
  readouts: ['Glycogen on race day', 'Glycogen lasts about', 'Hits the wall?', 'Drawback'],
  note: 'Muscle glycogen normally fuels about 90–120 minutes of hard endurance work. Supercompensation raises stores so a marathon runner can hold pace for longer. (Relative, illustrative values.)',
  prof(m) { return m === 'none' ? [1, 1, 1, 1, 1, 1, 1] : m === 'classic' ? [1, .65, .45, .3, .95, 1.55, 1.9] : [1, 1, 1, 1.3, 1.6, 1.75, 1.8]; },
  draw(c, W, H, st, C) { const p = this.prof(st.p.m); CV.plot(c, C, plotBox(W, H), { xr: [0, 6], yr: [0, 2.2], xl: 'days before the race (0 = 6 days out)', yl: 'glycogen (relative)', series: [{ pts: p.map((v, i) => [i, v]), col: C.a1, w: 3 }, { pts: [[0, 1], [6, 1]], col: C.muted, dash: [5, 4], w: 1 }], dots: p.map((v, i) => [i, v, C.a1, 4]) }); },
  read(st) { const g = this.prof(st.p.m)[6], lasts = Math.round(100 * g); return [g.toFixed(2) + '× normal', '≈ ' + lasts + ' min at race pace', st.p.race > lasts ? 'yes — around ' + lasts + ' min' : 'no', st.p.m === 'classic' ? 'depletion: fatigue, irritability; water retention' : st.p.m === 'modern' ? 'water retention / weight gain' : '—']; }
};

/* ---- 3.5 Supplements ---- */
SIMS.supps = explorerSim('Supplement file', 'Weigh up each supplement: how it works, who might benefit, and the risks. “Food first” — supplements only add to a good diet.', [
  ['Whey protein', '<b>How:</b> fast-digesting milk protein, rich in leucine → rapid rise in amino acids → muscle protein synthesis.<br><b>Who:</b> after resistance training; athletes struggling to meet protein needs.<br><b>Risks:</b> unnecessary if diet is adequate; excess used for energy or stored as fat; cost; contamination.', 'legal'],
  ['Casein protein', '<b>How:</b> slow-digesting; steady amino acids for hours.<br><b>Who:</b> before sleep to reduce overnight muscle breakdown.<br><b>Risks:</b> as whey; heavy on the stomach.', 'legal'],
  ['Creatine', '<b>How:</b> raises muscle PC stores (loading ≈ 20 g/day for 5 days, then 3–5 g/day).<br><b>Who:</b> sprinters, weightlifters, games players — repeated maximal efforts.<br><b>Risks:</b> water retention and weight gain; cramp, GI upset; no aerobic benefit; non-responders.', 'legal'],
  ['Caffeine', '<b>How:</b> stimulant; alertness, reduced perception of effort, mobilises fat (glycogen sparing).<br><b>Who:</b> endurance athletes, games players (3–6 mg/kg ≈ 1 h before).<br><b>Risks:</b> insomnia, anxiety, tremor, raised HR, GI upset, tolerance; monitored by WADA.', 'legal, monitored'],
  ['Sports drinks and gels', '<b>How:</b> carbohydrate and electrolytes during long events.<br><b>Who:</b> events over 60–90 minutes.<br><b>Risks:</b> dental erosion; unnecessary for short sessions; energy intake.', 'legal']
]);

/* ---- 3.6 Force–time graph ---- */
SIMS.forcetime = {
  title: 'Force–time graph: one foot contact', h: 330, noPlay: true,
  controls: [{ id: 'br', label: 'Braking (negative) force', min: 0.1, max: 1.2, step: 0.05, value: 0.5 }, { id: 'pr', label: 'Propulsive (positive) force', min: 0.1, max: 1.2, step: 0.05, value: 1 }],
  readouts: ['Negative impulse', 'Positive impulse', 'Net impulse', 'Result'],
  note: 'Horizontal ground reaction force during one foot contact. Area under the curve = impulse. Net positive → the runner accelerates; zero → constant velocity; negative → decelerates.',
  draw(c, W, H, st, C) { const br = st.p.br, pr = st.p.pr, f = t => t < .4 ? -br * Math.sin(t / .4 * Math.PI) : pr * Math.sin((t - .4) / .6 * Math.PI);
    CV.plot(c, C, plotBox(W, H), { xr: [0, 1], yr: [-1.3, 1.3], xl: 'time of contact', yl: 'horizontal force', fills: [{ col: hexA(C.info, .35), pts: Array.from({ length: 41 }, (_, i) => [i / 100, f(i / 100)]) }, { col: hexA(C.a1, .35), pts: Array.from({ length: 61 }, (_, i) => [.4 + i / 100, f(.4 + i / 100)]) }], series: [{ f, col: C.ink, w: 2.4 }] }); },
  read(st) { const n = st.p.br * 0.4 * 2 / Math.PI, p = st.p.pr * 0.6 * 2 / Math.PI, net = p - n; return [n.toFixed(2), p.toFixed(2), net.toFixed(2), Math.abs(net) < 0.03 ? 'constant velocity' : net > 0 ? 'accelerating' : 'decelerating']; }
};

/* ---- 3.6 Newton's laws / impulse and impact ---- */
SIMS.newton = {
  title: 'Impact: catching and landing', h: 320, noPlay: true,
  controls: [{ id: 'm', label: 'Mass of ball or body (kg)', min: 0.2, max: 90, step: 0.1, value: 0.45 }, { id: 'v', label: 'Speed before impact (m/s)', min: 1, max: 30, step: 0.5, value: 20 }, { id: 't', label: 'Contact time (s)', min: 0.01, max: 0.5, step: 0.01, value: 0.05 }],
  readouts: ['Momentum', 'Impulse needed', 'Average force', 'Tip'],
  note: 'To stop an object, impulse = change in momentum is fixed (m × v). Increasing the contact time — “giving” with the hands, bending the knees, padding — lowers the average force (F = impulse ÷ time).',
  draw(c, W, H, st, C) { const p = st.p.m * st.p.v, F = p / st.p.t, peak = F * Math.PI / 2;
    CV.plot(c, C, plotBox(W, H), { xr: [0, 0.5], yr: [0, Math.max(200, peak * 1.1)], xl: 'time (s)', yl: 'force (N)', fills: [{ col: hexA(C.a5, .35), pts: Array.from({ length: 51 }, (_, i) => { const t = i / 100 * st.p.t * 2; return [t, t <= st.p.t ? peak * Math.sin(t / st.p.t * Math.PI) : 0]; }) }], series: [{ f: t => t <= st.p.t ? peak * Math.sin(t / st.p.t * Math.PI) : 0, col: C.a5, w: 3 }] }); },
  read(st) { const p = st.p.m * st.p.v; return [p.toFixed(1) + ' kg m/s', p.toFixed(1) + ' N s', Math.round(p / st.p.t) + ' N', st.p.t < 0.1 ? 'increase contact time to reduce force' : 'long contact → lower force']; }
};

/* ---- 3.7 Stability ---- */
SIMS.stability = {
  title: 'Stability: base of support and centre of mass', h: 340, noPlay: true,
  controls: [{ id: 'base', label: 'Width of base (cm)', min: 10, max: 90, step: 1, value: 40 }, { id: 'h', label: 'Height of centre of mass (cm)', min: 40, max: 120, step: 1, value: 95 }, { id: 'lean', label: 'Lean (line of gravity shift, cm)', min: -50, max: 50, step: 1, value: 0 }],
  readouts: ['Line of gravity', 'Stability', 'Angle to topple', 'Example'],
  note: 'Stability increases with a wider base, a lower centre of mass and a central line of gravity. The body topples when the line of gravity passes outside the base.',
  draw(c, W, H, st, C) { const sc = 2, gy = H - 40, cx = W / 2, b = st.p.base, h = st.p.h, lx = st.p.lean, inside = Math.abs(lx) <= b / 2;
    c.fillStyle = hexA(C.a3, .35); c.fillRect(cx - b * sc / 2, gy, b * sc, 10);
    const comX = cx + lx * sc, comY = gy - h * sc;
    CV.line(c, cx - b * sc / 2, gy, comX, comY, C.ink, 3); CV.line(c, cx + b * sc / 2, gy, comX, comY, C.ink, 3); CV.circle(c, comX, comY - 22, 16, C.surface, C.ink, 2);
    CV.circle(c, comX, comY, 7, inside ? C.a1 : C.bad); CV.line(c, comX, comY, comX, gy, inside ? C.a1 : C.bad, 2, [5, 4]);
    CV.text(c, inside ? 'line of gravity inside the base' : 'outside the base — topples!', W / 2, 24, inside ? C.ink : C.bad, 14, 'center', 700); },
  read(st) { const b = st.p.base, h = st.p.h, d = b / 2 - Math.abs(st.p.lean), ang = Math.atan2(Math.max(0, d), h) * 180 / Math.PI, s = ang > 18 ? 'very stable' : ang > 9 ? 'stable' : ang > 0 ? 'unstable — ready to move' : 'toppling';
    return [d >= 0 ? 'inside' : 'outside', s, ang.toFixed(1) + '°', ang > 18 ? 'rugby scrum, judo defence' : ang > 0 && ang < 6 ? 'sprint “set” position' : 'standing guard']; }
};

/* ---- 3.8 Sprint motion graphs ---- */
SIMS.sprint = {
  title: '100 m: distance–time and velocity–time', h: 350, noPlay: true,
  controls: [{ type: 'seg', id: 'g', label: 'Graph', value: 'v', options: [['d', 'distance–time'], ['v', 'velocity–time'], ['a', 'acceleration–time']] }, { id: 'vmax', label: 'Top speed (m/s)', min: 7, max: 12.4, step: 0.1, value: 11 }, { id: 't', label: 'Time (s)', min: 0, max: 12, step: 0.1, value: 4 }],
  readouts: ['Velocity', 'Distance', 'Acceleration', 'Finish time'],
  note: 'Gradient of distance–time = velocity; gradient of velocity–time = acceleration; area under velocity–time = distance. Elite sprinters peak around 50–70 m and decelerate slightly at the end.',
  v(t, vm) { return vm * (1 - Math.exp(-t / 1.35)) - (t > 6.5 ? (t - 6.5) * 0.12 * vm / 11 : 0); },
  run(vm) { const out = []; let d = 0; for (let t = 0; t <= 14; t += 0.01) { const v = this.v(t, vm); out.push([t, d, v]); d += v * 0.01; if (d >= 100) break; } return out; },
  draw(c, W, H, st, C) { const r = this.run(st.p.vmax), T = r[r.length - 1][0], g = st.p.g;
    const pts = r.filter((_, i) => i % 5 === 0).map(([t, d, v]) => [t, g === 'd' ? d : g === 'v' ? v : (this.v(t + 0.01, st.p.vmax) - v) / 0.01]);
    const t = Math.min(st.p.t, T), cur = r[Math.min(r.length - 1, Math.round(t / 0.01))];
    CV.plot(c, C, plotBox(W, H), { xr: [0, 12], yr: g === 'd' ? [0, 105] : g === 'v' ? [0, 13] : [-1, 9], xl: 'time (s)', yl: g === 'd' ? 'distance (m)' : g === 'v' ? 'velocity (m/s)' : 'acceleration (m/s²)', series: [{ pts, col: C.a5, w: 3 }], dots: [[t, g === 'd' ? cur[1] : g === 'v' ? cur[2] : (this.v(t + 0.01, st.p.vmax) - cur[2]) / 0.01, C.ink, 6]] }); },
  read(st) { const r = this.run(st.p.vmax), T = r[r.length - 1][0], t = Math.min(st.p.t, T), cur = r[Math.round(t / 0.01)] || r[r.length - 1]; return [cur[2].toFixed(2) + ' m/s', Math.min(100, cur[1]).toFixed(1) + ' m', ((this.v(t + 0.01, st.p.vmax) - cur[2]) / 0.01).toFixed(2) + ' m/s²', T.toFixed(2) + ' s']; }
};

/* ---- 3.9 Spinning: conservation of angular momentum ---- */
SIMS.spin = {
  title: 'Conservation of angular momentum', h: 340,
  controls: [{ id: 'tuck', label: 'Body shape (straight → tucked)', min: 0, max: 100, step: 1, value: 0, fmt: v => v + '%' }, { id: 'w0', label: 'Angular velocity at take-off (rad/s)', min: 1, max: 6, step: 0.5, value: 3 }],
  readouts: ['Moment of inertia', 'Angular velocity', 'Angular momentum', 'Somersaults per second'],
  note: 'Angular momentum L = Iω is set at take-off and stays constant in flight. Tuck (bring mass closer to the axis) → I falls → ω rises. Open out before landing → ω falls.',
  I(st) { return 15 - 11.5 * st.p.tuck / 100; },
  init(st) { st.ang = 0; },
  step(st, dt) { st.ang += (15 * st.p.w0 / this.I(st)) * dt; },
  draw(c, W, H, st, C) { const cx = W * 0.35, cy = H / 2, k = st.p.tuck / 100, len = 110 - 70 * k;
    c.save(); c.translate(cx, cy); c.rotate(st.ang);
    CV.line(c, 0, -len / 2, 0, len / 2, C.a5, 10 + 14 * k); CV.circle(c, 0, -len / 2 - 14, 13, C.surface, C.ink, 2);
    c.restore(); CV.circle(c, cx, cy, 5, C.a1); CV.text(c, 'axis', cx + 10, cy + 16, C.muted, 11);
    const bx = W * 0.65, bw = W * 0.3; [['I', this.I(st) / 15, C.a2], ['ω', (15 * st.p.w0 / this.I(st)) / (15 * 6 / 3.5), C.a1], ['L', (15 * st.p.w0) / 90, C.a3]].forEach(([n, v, col], i) => { CV.text(c, n, bx - 18, 70 + i * 60, C.ink, 16, 'center', 700); CV.rrect(c, bx, 60 + i * 60, bw, 18, 9, C.line); CV.rrect(c, bx, 60 + i * 60, bw * clamp(v, 0, 1), 18, 9, col); }); },
  read(st) { const I = this.I(st), L = 15 * st.p.w0, w = L / I; return [I.toFixed(1) + ' kg m²', w.toFixed(1) + ' rad/s', L.toFixed(0) + ' kg m²/s (constant)', (w / (2 * Math.PI)).toFixed(2)]; }
};

/* ---- 3.10 Projectile launcher ---- */
SIMS.projectile = {
  title: 'Projectile launcher', h: 350, noPlay: true,
  controls: [{ id: 'v', label: 'Release speed (m/s)', min: 5, max: 30, step: 0.5, value: 14 }, { id: 'a', label: 'Release angle (°)', min: 10, max: 80, step: 1, value: 40 }, { id: 'h', label: 'Release height (m)', min: 0, max: 2.5, step: 0.1, value: 2.1 }, { type: 'seg', id: 'drag', label: 'Object', value: 0, options: [[0, 'shot (weight dominates)'], [1, 'shuttlecock (high drag)']] }],
  readouts: ['Horizontal distance', 'Time of flight', 'Max height', 'Best angle for these settings'],
  note: 'Speed of release matters most. With release height above landing height the best angle is below 45°. A light object with high drag follows a non-parabolic path.',
  sim(v, a, h, drag) { const r = a * Math.PI / 180; let x = 0, y = h, vx = v * Math.cos(r), vy = v * Math.sin(r), t = 0, top = h; const pts = [[0, h]], k = drag ? 0.25 : 0.0005;
    while (y >= 0 && t < 20) { const sp = Math.hypot(vx, vy); vx -= k * sp * vx * 0.005; vy -= (9.8 + k * sp * vy) * 0.005; x += vx * 0.005; y += vy * 0.005; t += 0.005; top = Math.max(top, y); if (Math.round(t / 0.005) % 4 === 0) pts.push([x, Math.max(0, y)]); } return { x, t, top, pts }; },
  best(st) { let b = 0, ba = 45; for (let a = 10; a <= 80; a++) { const r = this.sim(st.p.v, a, st.p.h, +st.p.drag).x; if (r > b) { b = r; ba = a; } } return ba; },
  draw(c, W, H, st, C) { const s = this.sim(st.p.v, st.p.a, st.p.h, +st.p.drag), xm = Math.max(20, 95 * 0 + 30 * 0 + 100 * 0 + (st.p.v * st.p.v / 9.8) * 1.15 + st.p.h), ym = xm * 0.5;
    const pl = CV.plot(c, C, plotBox(W, H), { xr: [0, xm], yr: [0, ym], xl: 'distance (m)', yl: 'height (m)', series: [{ pts: s.pts, col: +st.p.drag ? C.a2 : C.a5, w: 3 }], dots: [[s.x, 0, C.a1, 6]] });
    CV.text(c, s.x.toFixed(1) + ' m', pl.X(s.x), pl.Y(0) - 14, C.a1, 12, 'center', 700); },
  read(st) { const s = this.sim(st.p.v, st.p.a, st.p.h, +st.p.drag); return [s.x.toFixed(2) + ' m', s.t.toFixed(2) + ' s', s.top.toFixed(2) + ' m', this.best(st) + '°']; }
};

/* ---- 3.10 Magnus effect ---- */
SIMS.magnus = {
  title: 'Spin and the Magnus effect', h: 340, noPlay: true,
  controls: [{ type: 'seg', id: 's', label: 'Spin', value: 'top', options: [['top', 'topspin'], ['none', 'no spin'], ['back', 'backspin']] }, { id: 'r', label: 'Spin rate', min: 0, max: 100, step: 1, value: 60 }],
  readouts: ['Magnus force', 'Pressure above', 'Flight', 'Bounce'],
  note: 'The spinning ball drags a boundary layer of air. Where the surface moves against the oncoming air, the air slows and pressure rises; where it moves with the air, pressure falls. The Magnus force acts from high to low pressure.',
  draw(c, W, H, st, C) { const k = st.p.s === 'top' ? -1 : st.p.s === 'back' ? 1 : 0, lift = k * st.p.r / 100 * 5.5;
    const path = (lf) => { const pts = []; let x = 0, y = 1, vx = 20, vy = 3, t = 0; while (y >= 0 && t < 5) { vy -= (9.8 - lf) * 0.01; x += vx * 0.01; y += vy * 0.01; t += 0.01; pts.push([x, Math.max(0, y)]); } return pts; };
    CV.plot(c, C, plotBox(W, H), { xr: [0, 45], yr: [0, 12], xl: 'distance (m)', yl: 'height (m)', series: [{ pts: path(0), col: C.muted, dash: [5, 4], w: 1.6 }, { pts: path(lift), col: C.a1, w: 3 }] });
    const bx = W - 110, by = 90; CV.circle(c, bx, by, 26, C.surface, C.ink, 2); if (k) { c.strokeStyle = C.a2; c.lineWidth = 2; c.beginPath(); c.arc(bx, by, 34, k < 0 ? -2.4 : 0.8, k < 0 ? -0.8 : 2.4, k > 0); c.stroke(); }
    if (k) CV.arrow(c, bx, by, bx, by - k * 44, C.a1, 3); CV.text(c, 'air →', bx - 70, by, C.muted, 11); },
  read(st) { const s = st.p.s; return [s === 'top' ? 'downwards' : s === 'back' ? 'upwards (lift)' : 'none', s === 'top' ? 'high' : s === 'back' ? 'low' : 'equal', s === 'top' ? 'dips — shorter' : s === 'back' ? 'floats — longer' : 'parabolic-ish', s === 'top' ? 'skids on, low and fast' : s === 'back' ? 'checks, bounces up' : 'normal']; }
};

/* ---- 3.10 Bernoulli / angle of attack ---- */
SIMS.bernoulli = {
  title: 'Lift: angle of attack of a discus', h: 320, noPlay: true,
  controls: [{ id: 'aoa', label: 'Angle of attack (°)', min: -10, max: 40, step: 1, value: 10 }, { id: 'v', label: 'Air speed (m/s)', min: 10, max: 30, step: 1, value: 24 }],
  readouts: ['Lift', 'Drag', 'Lift ÷ drag', 'Comment'],
  note: 'Bernoulli: faster air over the curved top → lower pressure → lift. Lift rises with the angle of attack up to a point, then the flow separates (stall) and drag soars. (Illustrative model.)',
  lf(a, v) { const cl = a < 28 ? 0.06 * a : Math.max(0, 1.68 - (a - 28) * 0.1); return cl * v * v * 0.012; },
  dr(a, v) { return (0.04 + 0.0018 * a * a) * v * v * 0.012; },
  draw(c, W, H, st, C) { const cx = W * 0.4, cy = H / 2, a = st.p.aoa * Math.PI / 180, L = this.lf(st.p.aoa, st.p.v), D = this.dr(st.p.aoa, st.p.v);
    for (let k = -3; k <= 3; k++) { const y = cy + k * 26, sep = st.p.aoa > 28 && k < 0; c.strokeStyle = hexA(C.info, .6); c.lineWidth = 1.4; c.beginPath(); c.moveTo(20, y); c.bezierCurveTo(cx - 80, y, cx, y - (k <= 0 ? 18 : 6) * Math.sign(k || -1) - (k <= 0 ? 10 : 0), W - 40, y + (sep ? Math.sin(k * 5) * 12 : 0)); c.stroke(); }
    c.save(); c.translate(cx, cy); c.rotate(-a); c.fillStyle = hexA(C.a5, .35); c.strokeStyle = C.a5; c.lineWidth = 2.4; c.beginPath(); c.ellipse(0, 0, 90, 14, 0, 0, 7); c.fill(); c.stroke(); c.restore();
    CV.arrow(c, cx, cy, cx, cy - L * 6, C.a1, 3.5); CV.arrow(c, cx, cy, cx + D * 6, cy, C.muted, 3); CV.text(c, 'lift', cx + 6, cy - L * 6 - 8, C.a1, 12, 'left', 700); CV.text(c, 'drag', cx + D * 6 + 6, cy + 14, C.muted, 12); },
  read(st) { const L = this.lf(st.p.aoa, st.p.v), D = this.dr(st.p.aoa, st.p.v); return [L.toFixed(1) + ' (rel.)', D.toFixed(1) + ' (rel.)', (L / D).toFixed(1), st.p.aoa > 28 ? 'stalled — flow separates' : st.p.aoa < 0 ? 'negative angle — pushed down' : st.p.aoa > 18 ? 'high drag cost' : 'efficient lift']; }
};

/* ---- 3.11 Drag ---- */
SIMS.drag = {
  title: 'Drag and streamlining: cycling', h: 330, noPlay: true,
  controls: [{ id: 'v', label: 'Speed (km/h)', min: 10, max: 60, step: 1, value: 40 }, { type: 'seg', id: 'pos', label: 'Position', value: 1, options: [[0, 'upright'], [1, 'drops'], [2, 'aero tuck']] }, { type: 'seg', id: 'kit', label: 'Kit', value: 0, options: [[0, 'baggy'], [1, 'skinsuit + aero helmet']] }, { type: 'seg', id: 'draft', label: 'Drafting', value: 0, options: [[0, 'alone'], [1, 'behind a rider']] }],
  readouts: ['Drag force', 'Power to overcome drag', 'Saving vs upright alone', 'Main factor'],
  note: 'Drag = ½ ρ v² CdA. Velocity is squared, so doubling speed quadruples drag (and the power needed rises with v³). Reducing frontal area and improving shape keeps flow laminar and the wake small.',
  CdA(st) { return [0.55, 0.4, 0.28][+st.p.pos] * (+st.p.kit ? 0.9 : 1) * (+st.p.draft ? 0.7 : 1); },
  F(st, v) { return 0.5 * 1.2 * Math.pow(v / 3.6, 2) * this.CdA(st); },
  draw(c, W, H, st, C) { CV.plot(c, C, plotBox(W, H), { xr: [10, 60], yr: [0, 90], xl: 'speed (km/h)', yl: 'drag (N)', series: [{ f: v => 0.5 * 1.2 * Math.pow(v / 3.6, 2) * 0.55, col: C.muted, dash: [5, 4], w: 1.6 }, { f: v => this.F(st, v), col: C.a5, w: 3 }], dots: [[st.p.v, this.F(st, st.p.v), C.a1, 6]] }); },
  read(st) { const F = this.F(st, st.p.v), base = 0.5 * 1.2 * Math.pow(st.p.v / 3.6, 2) * 0.55; return [F.toFixed(1) + ' N', Math.round(F * st.p.v / 3.6) + ' W', Math.round((1 - F / base) * 100) + '%', 'velocity (v²)']; }
};
