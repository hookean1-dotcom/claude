/* ==========================================================
   Extra simulations for Edexcel International GCSE Physics:
   Doppler effect, microphone + oscilloscope, Hertzsprung–Russell diagram
   ========================================================== */

/* ---- 3.8 / 8.15P Doppler effect ---- */
SIMS.doppler = {
  title: 'The Doppler effect', h: 400,
  controls: [{ id: 'vs', label: 'Source speed (as a fraction of wave speed)', min: 0, max: 0.8, step: 0.05, value: 0.4, fmt: v => v.toFixed(2) + ' × v' }, { id: 'f', label: 'Source frequency', min: 1, max: 4, step: 0.5, value: 2, fmt: v => v + ' Hz (slowed down)' }],
  readouts: ['Wavelength ahead', 'Wavelength behind', 'Frequency heard ahead', 'Frequency heard behind'],
  note: 'Each wavefront spreads out from the point where the source was when it emitted it. Ahead of a moving source the wavefronts crowd together (shorter wavelength, higher frequency); behind, they spread out (longer wavelength, lower frequency). The wave speed itself does not change.',
  init(st) { st.fronts = []; st.x = 0; st.last = 0; },
  change(st) { st.fronts = []; st.x = 0; st.last = 0; },
  step(st, dt) { const c = 120; st.x += st.p.vs * c * dt; st.last += dt; if (st.last >= 1 / st.p.f) { st.last = 0; st.fronts.push({ x: st.x, t: 0 }); } st.fronts.forEach(w => w.t += dt); st.fronts = st.fronts.filter(w => w.t * c < 900); if (st.x > 700) { st.x = 0; st.fronts = []; } },
  draw(c, W, H, st, C) { const cx0 = W * 0.2, cy = H / 2 - 10, sc = 120;
    st.fronts.forEach(w => { c.strokeStyle = hexA(C.u6 || C.accent, Math.max(0.15, 1 - w.t / 7)); c.lineWidth = 2; c.beginPath(); c.arc(cx0 + (w.x % 700) * 0.6, cy, w.t * sc * 0.6, 0, Math.PI * 2); c.stroke(); });
    const sx = cx0 + (st.x % 700) * 0.6; CV.circle(c, sx, cy, 8, C.bad); CV.arrow(c, sx + 12, cy, sx + 12 + 40 * st.p.vs + 4, cy, C.bad, 2);
    [[W - 40, 'observer ahead'], [30, 'observer behind']].forEach(([x, lab]) => { CV.circle(c, x, cy, 9, C.surface, C.ink, 2); CV.text(c, lab, x, cy + 26, C.muted, 11, 'center'); });
    const l0 = 1 / st.p.f; CV.text(c, `λ ahead = (1 − ${st.p.vs.toFixed(2)}) λ₀     λ behind = (1 + ${st.p.vs.toFixed(2)}) λ₀`, W / 2, H - 22, C.ink, 12.5, 'center', 600); },
  read(st) { const v = st.p.vs, f = st.p.f; return [((1 - v) * 100).toFixed(0) + '% of λ₀', ((1 + v) * 100).toFixed(0) + '% of λ₀', (f / (1 - v)).toFixed(2) + ' Hz', (f / (1 + v)).toFixed(2) + ' Hz']; }
};

/* ---- 3.26P–3.29P Microphone and oscilloscope ---- */
SIMS.scope = {
  title: 'Oscilloscope and sound', h: 400,
  controls: [{ id: 'f', label: 'Frequency of the source (pitch)', min: 100, max: 2000, step: 50, value: 500, fmt: v => v + ' Hz' }, { id: 'a', label: 'Amplitude (loudness)', min: 0.2, max: 1, step: 0.05, value: 0.6, fmt: v => Math.round(v * 100) + '%' }, { type: 'seg', id: 'tb', label: 'Timebase', value: 0.5, options: [[0.2, '0.2 ms/div'], [0.5, '0.5 ms/div'], [1, '1 ms/div'], [2, '2 ms/div']] }],
  readouts: ['Divisions per wave', 'Period T', 'f = 1/T', 'Audible?'],
  note: 'The microphone turns pressure variations into a voltage that the oscilloscope plots against time. Count the divisions for one complete wave, multiply by the timebase to get T, then f = 1/T. A taller trace means a louder sound; more waves on the screen mean a higher pitch.',
  draw(c, W, H, st, C) { const x0 = 40, y0 = 30, w = W - 80, h = H - 90, nx = 10, ny = 8; CV.rrect(c, x0, y0, w, h, 8, '#0e1a12', C.line);
    c.strokeStyle = 'rgba(120,200,140,.18)'; c.lineWidth = 1; for (let i = 1; i < nx; i++) { c.beginPath(); c.moveTo(x0 + i * w / nx, y0); c.lineTo(x0 + i * w / nx, y0 + h); c.stroke(); } for (let j = 1; j < ny; j++) { c.beginPath(); c.moveTo(x0, y0 + j * h / ny); c.lineTo(x0 + w, y0 + j * h / ny); c.stroke(); }
    const T = 1000 / st.p.f, divPerWave = T / st.p.tb, ph = st.t * 3; c.strokeStyle = '#6CF08A'; c.lineWidth = 2.4; c.beginPath();
    for (let k = 0; k <= w; k++) { const div = k / (w / nx), y = y0 + h / 2 - st.p.a * (h / 2 - 8) * Math.sin(2 * Math.PI * (div / divPerWave) + ph * 0); k ? c.lineTo(x0 + k, y) : c.moveTo(x0 + k, y); } c.stroke();
    CV.mono(c, `timebase ${st.p.tb} ms/div`, x0 + w, y0 + h + 18, C.muted, 11, 'right'); CV.text(c, 'microphone → oscilloscope', x0, y0 + h + 18, C.muted, 11); },
  read(st) { const T = 1000 / st.p.f; return [(T / st.p.tb).toFixed(2), T.toFixed(2) + ' ms', (1000 / T).toFixed(0) + ' Hz', st.p.f >= 20 && st.p.f <= 20000 ? 'yes (20–20 000 Hz)' : 'no']; }
};

/* ---- 8.11P–8.12P Hertzsprung–Russell diagram ---- */
const HR_STARS = [
  ['Sun', 5800, 4.8, 'main sequence (G, yellow)'], ['Sirius A', 9900, 1.4, 'main sequence (A, white)'], ['Rigel', 12100, -7.8, 'blue supergiant'], ['Betelgeuse', 3500, -5.9, 'red supergiant'],
  ['Aldebaran', 3900, -0.6, 'red giant'], ['Arcturus', 4300, -0.3, 'red giant'], ['Sirius B', 25000, 11.2, 'white dwarf'], ['Procyon B', 7700, 13.0, 'white dwarf'],
  ['Proxima Centauri', 3000, 15.5, 'main sequence (M, red dwarf)'], ['Vega', 9600, 0.6, 'main sequence (A, white)'], ['Spica', 22400, -3.5, 'main sequence (B, blue)'], ['Barnard’s Star', 3100, 13.2, 'main sequence (M, red dwarf)']
];
SIMS.hr = {
  title: 'Explore the HR diagram', h: 440, noPlay: true,
  controls: [{ type: 'seg', id: 'life', label: 'Show the life of a Sun-like star', value: 0, options: [[0, 'off'], [1, 'on']] }],
  readouts: ['Star', 'Temperature', 'Absolute magnitude', 'Type'],
  note: 'Hover or tap a star. Absolute magnitude is how bright a star would appear from a standard distance of 10 parsecs — more negative is brighter. Temperature increases to the <b>left</b>.',
  init(st) { st.sel = 0; },
  geo(W, H) { const L = 70, R = 30, T = 24, B = 54; return { X: t => L + (Math.log10(40000) - Math.log10(t)) / (Math.log10(40000) - Math.log10(2500)) * (W - L - R), Y: m => T + (m + 10) / 27 * (H - T - B), L, R, T, B }; },
  pointer(type, x, y, st) { if (type !== 'move' && type !== 'down') return; const g = this.geo(st.W, st.H); let best = -1, bd = 24; HR_STARS.forEach((s, i) => { const d = Math.hypot(g.X(s[1]) - x, g.Y(s[2]) - y); if (d < bd) { bd = d; best = i; } }); if (best >= 0) st.sel = best; },
  draw(c, W, H, st, C) { const g = this.geo(W, H);
    CV.line(c, g.L, H - g.B, W - g.R, H - g.B, C.ink, 1.4); CV.line(c, g.L, g.T, g.L, H - g.B, C.ink, 1.4);
    [30000, 10000, 6000, 3000].forEach(t => CV.mono(c, t + ' K', g.X(t), H - g.B + 14, C.muted, 10, 'center')); [-10, -5, 0, 5, 10, 15].forEach(m => CV.mono(c, m, g.L - 8, g.Y(m), C.muted, 10, 'right'));
    CV.text(c, '← hotter        surface temperature        cooler →', (g.L + W - g.R) / 2, H - 14, C.muted, 11, 'center'); c.save(); c.translate(18, H / 2); c.rotate(-Math.PI / 2); CV.text(c, 'absolute magnitude (brighter ↑)', 0, 0, C.muted, 11, 'center'); c.restore();
    c.strokeStyle = hexA(C.u3, .25); c.lineWidth = 22; c.lineCap = c.lineJoin = 'round'; c.beginPath(); [[35000, -6], [22400, -3.5], [9700, 1], [5800, 4.8], [4200, 7.5], [3400, 10.5], [3000, 15]].forEach(([t, m], k) => k ? c.lineTo(g.X(t), g.Y(m)) : c.moveTo(g.X(t), g.Y(m))); c.stroke();
    CV.text(c, 'main sequence', g.X(14000), g.Y(3), C.u3, 12, 'center', 700); CV.text(c, 'giants', g.X(4000), g.Y(-2.5), C.u2, 12, 'center', 700); CV.text(c, 'supergiants', g.X(6000), g.Y(-9), C.bad, 12, 'center', 700); CV.text(c, 'white dwarfs', g.X(18000), g.Y(14.5), C.u4, 12, 'center', 700);
    const col = t => t > 20000 ? '#8FB4FF' : t > 9000 ? '#DDE6FF' : t > 6500 ? '#FFF8E0' : t > 5000 ? '#FFE27A' : t > 3700 ? '#FFB066' : '#FF6B4A';
    HR_STARS.forEach((s, i) => { const r = Math.max(3, 9 - s[2] * 0.35); CV.circle(c, g.X(s[1]), g.Y(s[2]), r, col(s[1]), i === st.sel ? C.ink : hexA(C.ink, .4), i === st.sel ? 2.5 : 1); if (i === st.sel) CV.text(c, s[0], g.X(s[1]) + r + 6, g.Y(s[2]), C.ink, 12, 'left', 700); });
    if (st.p.life) { const P = [[5800, 4.8], [4500, 2], [4000, -1], [3500, -2.5], [8000, 3], [15000, 10], [12000, 12]].map(([t, m]) => [g.X(t), g.Y(m)]); c.strokeStyle = C.accent; c.lineWidth = 2.4; c.setLineDash([6, 4]); c.beginPath(); P.forEach((p, k) => k ? c.lineTo(p[0], p[1]) : c.moveTo(p[0], p[1])); c.stroke(); c.setLineDash([]); CV.arrow(c, P[5][0], P[5][1], P[6][0], P[6][1], C.accent, 2.4); CV.text(c, 'Sun → red giant → white dwarf', g.X(9000), g.Y(-5), C.accent, 12, 'center', 700); } },
  read(st) { const s = HR_STARS[st.sel]; return [s[0], s[1] + ' K', s[2].toFixed(1), s[3]]; }
};
