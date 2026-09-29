/* ==========================================================
   Launchpad simulations (KS3). KS3 versions of shared sims (KS3SIM) and new Year 7 sims.
   ========================================================== */
/* A KS3 version of a shared sim: new labels/notes; fix = hidden parameter values; map = rewrite the readouts */
function KS3SIM(base, over) {
  const b = SIMS[base], d = Object.assign(Object.create(b), over);
  if (over.fix) d.init = function (st) { Object.assign(st.p, over.fix); b.init && b.init.call(this, st); };
  if (over.map) d.read = function (st) { return over.map(b.read.call(this, st), st); };
  return d;
}
const WATERC = C => hexA(C.u5, .25);

/* ---------- KS3 versions of shared sims ---------- */
SIMS.k_forces = KS3SIM('forces', { title: 'Resultant force',
  controls: [{ id: 'F1', label: 'Force 1 (to the right)', min: 0, max: 100, step: 5, value: 60, fmt: v => v + ' N' }, { id: 'F2', label: 'Force 2 (to the left)', min: 0, max: 100, step: 5, value: 40, fmt: v => v + ' N' }],
  fix: { mode: 'line', th: 180, m: 20 }, readouts: ['Resultant force', 'Direction', 'What happens to the motion', 'Balanced?'],
  map: (r, st) => [r[0], r[1], r[3].startsWith('yes') ? 'no change — stays still or steady speed' : 'changes — speeds up towards the resultant', r[3].startsWith('yes') ? 'yes' : 'no'],
  note: 'Forces in the same direction add; in opposite directions they subtract. The resultant acts in the direction of the bigger force. When the forces are equal and opposite they are balanced and the resultant is zero.' });
SIMS.k_spring = KS3SIM('spring', { title: 'Stretching springs', readouts: ['Force (weight hung)', 'Extension', 'Pattern'],
  map: (r, st) => [r[0], r[1].split(' = ')[0], st.p.obj ? (r[2].includes('beyond') ? 'past the limit — no longer proportional' : 'extension ∝ force (Hooke’s law)') : 'rubber band — not proportional'],
  note: 'A spring’s extension is proportional to the force on it: double the force, double the extension — that is how a newton meter works. Load it past its limit of proportionality and it stretches more than expected and does not go back to its original length. A rubber band does not follow the pattern.' });
SIMS.k_skydiver = KS3SIM('skydiver', { title: 'Skydiver: balanced and unbalanced forces',
  note: 'At first weight is bigger than air resistance, so she speeds up. Air resistance grows with speed until it equals weight: balanced forces, steady speed (terminal velocity). Opening the parachute makes air resistance much bigger than weight, so she slows down until the forces balance again at a slower speed. (g = 10 N/kg)' });
SIMS.k_densitylab = KS3SIM('densitylab', { title: 'Density lab', map: r => [r[0], r[1], r[2].split(' = ')[0], r[3]],
  note: 'Regular block: volume = length × width × height. Irregular stone: displacement — the rise in water level (or the overflow from a eureka can) is its volume. Liquid: tare the measuring cylinder, pour in a known volume and read its mass. Then density = mass ÷ volume.' });
SIMS.k_energy = KS3SIM('energy', { title: 'Energy stores in a swinging pendulum', readouts: ['Speed', 'Height above lowest point', 'Kinetic store', 'Gravitational potential store'],
  note: 'At the top of the swing the pendulum is still: all its energy is in the gravitational potential store. At the bottom it is fastest: the energy is in the kinetic store. Air resistance slowly transfers energy to the thermal store of the surroundings, so the swings get smaller — but no energy is destroyed.' });
SIMS.k_sankey = KS3SIM('sankey', { title: 'Useful and wasted energy', readouts: ['Useful energy', 'Wasted energy', '★ Efficiency', 'How to waste less'],
  note: 'The widths of the arrows show the amounts of energy. Total energy in = useful energy + wasted energy — energy is never destroyed. Most wasted energy heats the surroundings. Reducing waste (oiling, insulating, using LEDs) makes a device more efficient.' });
SIMS.k_moments = KS3SIM('moments', { title: 'Balance the seesaw',
  note: 'Moment = force × distance from the pivot. The seesaw balances when the anticlockwise moment on the left equals the clockwise moment on the right — the principle of moments. Try 400 N at 1.5 m against 600 N at 1.0 m.' });
SIMS.k_fluid = KS3SIM('fluid', { title: 'Pressure, upthrust and floating',
  controls: [{ id: 'liq', type: 'seg', label: 'Liquid', value: 1000, options: [[1000, 'Fresh water'], [1030, 'Sea water'], [800, 'Oil']] }, { id: 'h', label: 'Depth of the pressure sensor', min: 0, max: 10, step: 0.5, value: 4, fmt: v => v.toFixed(1) + ' m' }, { id: 'rho', label: 'Density of the block', min: 200, max: 2000, step: 50, value: 600, fmt: v => v + ' kg/m³' }],
  readouts: ['Pressure due to the liquid', 'Block: weight', 'Block: upthrust', 'Floats or sinks?'],
  note: 'Pressure in a liquid increases with depth and with the density of the liquid, and acts in all directions. The bottom of a block is pushed up harder than its top is pushed down — that is upthrust. A block floats if it is less dense than the liquid (1000 kg/m³ = 1 g/cm³ for water).' });
SIMS.k_gas = KS3SIM('gas', { title: 'Gas pressure', readouts: ['Pressure (hits on the walls)', 'Pressure × volume', 'Average particle speed', 'Hits per second'],
  note: 'Gas particles move fast in random directions and hit the walls — that makes gas pressure. Heat the gas: the particles move faster and hit harder and more often, so the pressure rises. Squash it into a smaller volume or add more particles: more hits, more pressure.' });
SIMS.k_ohm = KS3SIM('ohm', { title: 'Current, p.d. and resistance', readouts: ['Current (ammeter)', 'Potential difference (voltmeter)', 'Resistance R = V ÷ I', 'Current around the loop'],
  map: (r, st) => [r[0], st.p.V.toFixed(1) + ' V', st.p.R + ' Ω', 'the same everywhere'],
  note: 'The dots show the charge flowing. The current is the same all the way round a single loop — charge is not used up; it carries energy from the cell to the component. A bigger p.d. gives a bigger current; a bigger resistance gives a smaller current (I = V ÷ R).' });
SIMS.k_serpar = KS3SIM('serpar', { title: 'Series and parallel circuits', readouts: ['Current from the supply', 'p.d. across R₁ · R₂', 'Current in R₁ · R₂', 'Total resistance'],
  note: 'Series: one loop — the current is the same everywhere and the supply p.d. is shared between the components. Parallel: branches — each branch gets the full supply p.d., and the branch currents add up to the current from the supply.' });
SIMS.k_wave = KS3SIM('wave', { title: 'Transverse and longitudinal waves', readouts: ['Wave speed', 'Time for one vibration', 'Wavelength', 'Particle P moves'],
  note: 'Watch the red particle P: it only vibrates about one place — the particles do not travel with the wave; energy does. Sound is longitudinal: the particles vibrate backwards and forwards along the direction of travel, making compressions and rarefactions. Water ripples and light are transverse.' });
SIMS.k_scope = KS3SIM('scope', { title: 'Loudness and pitch on an oscilloscope', readouts: ['Divisions per wave', 'Time for one wave', 'Frequency (pitch)', 'Can humans hear it?'],
  note: 'A microphone turns sound into a trace. A taller trace (bigger amplitude) = louder. More waves across the screen (higher frequency) = higher pitch. Humans hear from about 20 Hz to 20 000 Hz.' });
SIMS.k_echo = KS3SIM('echo', { title: 'Echoes',
  controls: SIMS.echo.controls.map(c => c.id === 'mode' ? Object.assign({}, c, { options: [['air', 'Clap at a wall (air)'], ['us', 'Ultrasound scan']] }) : c),
  note: 'The sound goes to the reflector and back, so the distance to it = speed × time ÷ 2. Sound travels at about 330 m/s in air and 1500 m/s in water and the body. Hard, flat surfaces give strong echoes.' });
SIMS.k_refract = KS3SIM('refract', { title: 'Reflection and refraction', map: (r, st) => [r[0], r[1], st.p.mode === 'refr' ? Math.round(st.p.mat * 100000).toLocaleString('en-GB') + ' km/s (300 000 in air)' : '300 000 km/s (in air)', r[3]],
  note: 'Angles are measured from the normal. Reflection: angle of incidence = angle of reflection. Refraction: light slows down entering glass or water, so it bends towards the normal; leaving, it speeds up and bends away. Along the normal (0°) it does not bend.' });
SIMS.k_lens = KS3SIM('lens', { title: 'Convex and concave lenses', readouts: ['Image distance', 'Image height', 'Magnification', 'Image is'],
  note: 'A convex (converging) lens brings parallel rays together at the focal point F. With the object beyond F it forms a real, upside-down image on a screen (like the eye or a camera); close to the lens it acts as a magnifying glass. A concave (diverging) lens spreads light out.' });
SIMS.k_colour = KS3SIM('colour', { title: 'Coloured light, objects and filters',
  note: 'White light contains all colours. A filter lets its own colour through and absorbs the rest. An object reflects its own colour and absorbs the others; if none of its colour reaches it, it looks black. White objects reflect every colour; black objects absorb them all.' });
SIMS.k_solenoid = KS3SIM('solenoid', { title: 'Electromagnets',
  note: 'A current in a coil makes a magnetic field like a bar magnet’s — strong and uniform inside, and the field lines never cross. More current, more turns or an iron core make a stronger electromagnet that holds more paper clips. Reverse the current and the poles swap. Switch off and a soft-iron core loses its magnetism.' });

/* ---------- 1.1 Which forces? ---------- */
const SCENES = {
  book: { n: 'Book on a table', f: [['weight', 0, 1, 50, 'nc'], ['normal force', 0, -1, 50, 'c']], eff: 'balanced — stays still' },
  boat: { n: 'Boat floating', f: [['weight', 0, 1, 60, 'nc'], ['upthrust', 0, -1, 60, 'c']], eff: 'balanced — floats still' },
  car: { n: 'Car speeding up', f: [['weight', 0, 1, 60, 'nc'], ['normal force', 0, -1, 60, 'c'], ['driving force', 1, 0, 80, 'c'], ['air resistance', -1, 0, 40, 'c']], eff: 'unbalanced forwards — speeds up' },
  sky: { n: 'Skydiver just jumped', f: [['weight', 0, 1, 80, 'nc'], ['air resistance', 0, -1, 25, 'c']], eff: 'unbalanced downwards — speeds up' },
  lamp: { n: 'Lamp hanging', f: [['weight', 0, 1, 45, 'nc'], ['tension', 0, -1, 45, 'c']], eff: 'balanced — stays still' },
  magnet: { n: 'Magnet lifting a paper clip', f: [['weight', 0, 1, 20, 'nc'], ['magnetic force', 0, -1, 45, 'nc']], eff: 'unbalanced upwards — clip jumps up' },
  balloon: { n: 'Balloon and hair', f: [['electrostatic force', -1, 0, 40, 'nc'], ['weight', 0, 1, 15, 'nc'], ['tension (string)', 0, -1, 15, 'c']], eff: 'the hair is pulled towards the balloon' }
};
SIMS.forcepick = {
  title: 'Which forces act?', h: 400,
  controls: [{ id: 's', type: 'seg', label: 'Situation', value: 'book', options: Object.entries(SCENES).map(([k, v]) => [k, v.n]) }],
  readouts: ['Contact forces', 'Non-contact forces', 'Forces', 'Effect on the motion'],
  note: 'Blue arrows are contact forces (the objects touch); purple arrows are non-contact forces (they act across a gap). Arrow length shows the size of each force. Compare the arrows to decide whether the forces are balanced.',
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const sc = SCENES[st.p.s], cx = W / 2, cy = H * 0.5, t = st.t;
    const obj = () => { const k = st.p.s;
      if (k === 'book') { CV.rrect(c, cx - 150, cy + 30, 300, 14, 3, '#B87333', C.ink); CV.rrect(c, cx - 40, cy - 6, 80, 36, 3, C.u5, C.ink); }
      else if (k === 'boat') { c.fillStyle = WATERC(C); c.fillRect(0, cy + 10, W, H - cy - 10); c.fillStyle = C.surface; c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(cx - 60, cy - 10); c.lineTo(cx + 60, cy - 10); c.lineTo(cx + 44, cy + 22); c.lineTo(cx - 44, cy + 22); c.closePath(); c.fill(); c.stroke(); }
      else if (k === 'car') { CV.line(c, 0, cy + 36, W, cy + 36, C.ink, 2); const x = cx + ((t * 60) % 40) - 20; for (let i = -10; i < 20; i++) CV.line(c, i * 40 - ((t * 120) % 40), cy + 44, i * 40 + 18 - ((t * 120) % 40), cy + 44, C.muted, 2); CV.rrect(c, cx - 60, cy - 10, 120, 34, 6, C.u1, C.ink); CV.rrect(c, cx - 30, cy - 30, 60, 22, 6, C.u1, C.ink); CV.circle(c, cx - 36, cy + 26, 10, C.ink); CV.circle(c, cx + 36, cy + 26, 10, C.ink); void x; }
      else if (k === 'sky') { CV.circle(c, cx, cy - 22, 10, C.surface, C.ink, 2); CV.line(c, cx, cy - 12, cx, cy + 14, C.ink, 3); CV.line(c, cx - 22, cy - 2, cx + 22, cy - 2, C.ink, 3); CV.line(c, cx, cy + 14, cx - 14, cy + 30, C.ink, 3); CV.line(c, cx, cy + 14, cx + 14, cy + 30, C.ink, 3); for (let i = 0; i < 6; i++) CV.line(c, 40 + i * 110, (H - (t * 200 + i * 70) % H), 40 + i * 110, (H - (t * 200 + i * 70) % H) - 30, hexA(C.muted, .4), 1); }
      else if (k === 'lamp') { CV.line(c, cx - 120, 20, cx + 120, 20, C.ink, 3); CV.line(c, cx, 20, cx, cy - 16, C.muted, 2); c.fillStyle = '#FFC24B'; c.beginPath(); c.moveTo(cx - 26, cy + 14); c.lineTo(cx + 26, cy + 14); c.lineTo(cx + 12, cy - 16); c.lineTo(cx - 12, cy - 16); c.closePath(); c.fill(); c.strokeStyle = C.ink; c.stroke(); }
      else if (k === 'magnet') { CV.rrect(c, cx - 60, cy - 110, 60, 30, 3, C.u1, C.ink); CV.rrect(c, cx, cy - 110, 60, 30, 3, '#16A3C6', C.ink); CV.text(c, 'N', cx - 30, cy - 95, '#fff', 14, 'center', 800); CV.text(c, 'S', cx + 30, cy - 95, '#fff', 14, 'center', 800); c.strokeStyle = '#9AA3AC'; c.lineWidth = 3; c.strokeRect(cx - 12, cy - 18 - Math.sin(t * 3) * 3, 24, 36); }
      else if (k === 'balloon') { c.fillStyle = hexA(C.u8, .6); c.beginPath(); c.ellipse(cx - 60, cy - 10, 40, 50, 0, 0, 7); c.fill(); CV.text(c, '− − −', cx - 60, cy - 10, C.ink, 14, 'center'); CV.line(c, cx - 60, cy + 40, cx - 60, H - 20, C.muted, 1); for (let i = 0; i < 7; i++) { c.strokeStyle = C.ink; c.lineWidth = 1.2; c.beginPath(); c.moveTo(cx + 70, cy + 30 - i * 8); c.quadraticCurveTo(cx + 40, cy + 10 - i * 8 + Math.sin(t * 2 + i) * 2, cx + 10, cy - 20 - i * 6); c.stroke(); } CV.text(c, '+ + +', cx + 60, cy + 44, C.ink, 13, 'center'); }
    };
    obj();
    sc.f.forEach(([n, dx, dy, L, k], i) => { const col = k === 'c' ? C.u5 : C.u7, ox = st.p.s === 'balloon' && n.startsWith('electro') ? cx + 20 : st.p.s === 'balloon' ? cx - 60 : cx, oy = st.p.s === 'magnet' ? cy : st.p.s === 'balloon' && n.startsWith('tension') ? cy - 60 : st.p.s === 'balloon' && n === 'weight' ? cy + 40 : cy;
      const len = L * 1.4, ex = ox + dx * len, ey = oy + dy * len; CV.arrow(c, ox + dx * 18, oy + dy * 18, ex, ey, col, 4, 12); CV.text(c, `${n}`, ex + (dx ? dx * 8 : 10), ey + (dy ? dy * 14 : -10), col, 13, dx < 0 ? 'right' : 'left', 700); });
    CV.text(c, '■ contact force', 16, H - 40, C.u5, 12, 'left', 700); CV.text(c, '■ non-contact force', 16, H - 20, C.u7, 12, 'left', 700);
  },
  read(st) { const sc = SCENES[st.p.s], c = sc.f.filter(f => f[4] === 'c').map(f => f[0]), n = sc.f.filter(f => f[4] === 'nc').map(f => f[0]); return [c.join(', ') || 'none', n.join(', ') || 'none', sc.f.length + ' forces', sc.eff]; }
};

/* ---------- 1.2 / 1.3 Force diagram of a car ---------- */
SIMS.fdiagram = {
  title: 'Force diagram: balanced or unbalanced?', h: 400,
  controls: [
    { id: 'F', label: 'Driving force', min: 0, max: 3000, step: 100, value: 2000, fmt: v => v + ' N' },
    { id: 'k', label: 'Streamlining (air resistance)', min: 0.5, max: 2, step: 0.1, value: 1, fmt: v => v < 0.8 ? 'sleek' : v > 1.4 ? 'boxy' : 'normal' },
    { id: 'brake', type: 'seg', label: 'Brakes', value: 0, options: [[0, 'Off'], [3000, 'On']] }
  ],
  readouts: ['Speed', 'Forwards force', 'Backwards forces (air resistance + friction + brakes)', 'Resultant and motion'],
  note: 'Air resistance grows as the car goes faster. When the backwards forces add up to the driving force, the forces are balanced and the car moves at a steady speed. Change the driving force or brake: the forces become unbalanced and the car speeds up or slows down. (Mass 1000 kg.)',
  init(st) { st.v = 12; st.x = 0; },
  drag(st) { return st.p.k * 1.2 * st.v * st.v + (st.v > 0.05 ? 300 : 0) + (st.v > 0.05 ? st.p.brake : 0); },
  step(st, dt) { const back = this.drag(st), R = st.p.F - back; st.v = Math.max(0, st.v + R / 1000 * dt); if (st.v < 0.05 && st.p.F <= 300) st.v = 0; st.x += st.v * dt; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const cy = H * 0.55, cx = W / 2, sc = 0.07, back = this.drag(st), R = st.p.F - back;
    CV.line(c, 0, cy + 44, W, cy + 44, C.ink, 2); for (let i = -1; i < W / 60 + 1; i++) { const x = i * 60 - (st.x * 20) % 60; CV.line(c, x, cy + 58, x + 30, cy + 58, C.muted, 3); }
    CV.rrect(c, cx - 70, cy - 4, 140, 38, 8, C.u1, C.ink); CV.rrect(c, cx - 36, cy - 30, 72, 28, 8, C.u1, C.ink); CV.circle(c, cx - 42, cy + 36, 12, C.ink); CV.circle(c, cx + 42, cy + 36, 12, C.ink);
    const A = (x1, y1, dx, dy, F, col, lab) => { if (F < 1) return; const L = F * sc; CV.arrow(c, x1, y1, x1 + dx * L, y1 + dy * L, col, 5, 13); CV.text(c, lab + ' ' + Math.round(F) + ' N', x1 + dx * L + (dx ? dx * 8 : 8), y1 + dy * L + (dy ? dy * 14 : -12), col, 12, dx < 0 ? 'right' : 'left', 700); };
    A(cx + 70, cy + 14, 1, 0, st.p.F, C.u5, 'driving');
    A(cx - 70, cy + 14, -1, 0, back, C.u1, 'resistance');
    A(cx, cy - 30, 0, -1, 1000, C.u3, 'normal'); A(cx, cy + 48, 0, 1, 1000, C.u7, 'weight');
    CV.text(c, 'arrow scale: 1 mm ≈ 14 N', 14, 20, C.muted, 11);
    const bal = Math.abs(R) < 60; CV.text(c, bal ? 'BALANCED — steady speed' : R > 0 ? 'UNBALANCED — speeding up' : st.v > 0 ? 'UNBALANCED — slowing down' : 'stopped', cx, 34, bal ? C.good : C.bad, 16, 'center', 800);
  },
  read(st) { const back = this.drag(st), R = st.p.F - back; return [st.v.toFixed(1) + ' m/s', st.p.F + ' N', Math.round(back) + ' N', Math.abs(R) < 60 ? '≈ 0 N · steady speed' : `${Math.abs(Math.round(R))} N ${R > 0 ? 'forwards · speeds up' : 'backwards · slows down'}`]; }
};

/* ---------- 1.4 Film-canister rocket ---------- */
SIMS.rocket = {
  title: 'Film-canister rocket', h: 430,
  controls: [
    { id: 'w', label: 'Volume of water', min: 2, max: 30, step: 1, value: 10, fmt: v => v + ' ml' },
    { id: 'tab', type: 'seg', label: 'Fizzy tablet', value: 0.25, options: [[0.125, '⅛'], [0.25, '¼'], [0.5, '½']] },
    { id: 'T', label: 'Water temperature', min: 10, max: 50, step: 5, value: 20, fmt: v => v + ' °C' },
    { type: 'button', act: 'go', label: 'Launch (snap the lid on)' }, { type: 'button', act: 'clr', label: 'Clear results' }
  ],
  readouts: ['Pressure inside', 'Time until launch', 'Height reached', 'Forces now'],
  note: 'The tablet reacts with the water to make carbon dioxide. Gas builds up and the pressure rises until it pushes the lid off. Water and gas are pushed down, so the canister is pushed up: thrust > weight. Change ONE variable at a time and repeat each launch to make it a fair test. (Heights include a little random variation, as in real life.)',
  init(st) { st.ph = 'ready'; st.P = 0; st.tt = 0; st.y = 0; st.vy = 0; st.maxH = 0; st.res = st.res || []; },
  action(st, a) { if (a === 'clr') { st.res = []; return; } if (a === 'go' && (st.ph === 'ready' || st.ph === 'done')) { st.ph = 'build'; st.P = 0; st.tt = 0; st.y = 0; st.vy = 0; st.maxH = 0; st.noise = 1 + (Math.random() - 0.5) * 0.14; } },
  model(p) { const gas = Math.min(1, p.tab / 0.25), space = Math.max(0.05, (32 - p.w) / 32), wet = Math.min(1, p.w / 8); const rate = 0.35 * gas * wet * (1 + (p.T - 20) / 25) / Math.max(0.35, space); const h = 3.2 * Math.min(1.3, gas) * Math.min(1, p.w / 12) * (p.w > 12 ? Math.max(0.2, 1 - (p.w - 12) / 26) : 1); return { rate: Math.max(0.03, rate), h }; },
  step(st, dt) { const m = this.model(st.p);
    if (st.ph === 'build') { st.tt += dt; st.P = Math.min(1.2, st.P + m.rate * dt * (1 - st.P / 1.25)); if (st.P >= 1) { st.ph = 'fly'; const H0 = m.h * st.noise; st.vy = Math.sqrt(2 * 10 * H0); st.target = H0; } }
    else if (st.ph === 'fly') { st.y += st.vy * dt; st.vy -= 10 * dt; st.maxH = Math.max(st.maxH, st.y); if (st.y <= 0) { st.y = 0; st.ph = 'done'; st.res.push([st.p.w, st.p.tab, st.p.T, st.maxH, st.tt]); if (st.res.length > 8) st.res.shift(); } } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const g0 = H - 40, sx = W * 0.3, pxm = (H - 90) / 4;
    CV.line(c, 0, g0, W, g0, C.ink, 2); for (let m = 0; m <= 4; m += 0.5) { const y = g0 - m * pxm; CV.line(c, sx + 60, y, sx + 72, y, C.ink, 1); if (m % 1 === 0) CV.mono(c, m + ' m', sx + 76, y, C.muted, 11); }
    CV.line(c, sx + 66, g0, sx + 66, g0 - 4 * pxm, C.ink, 1);
    const y = g0 - st.y * pxm, shake = st.ph === 'build' && st.P > 0.8 ? (Math.random() - 0.5) * 3 : 0;
    CV.rrect(c, sx - 14 + shake, y - 44, 28, 40, 4, C.surface, C.ink, 2); c.fillStyle = WATERC(C); const wf = st.ph === 'build' || st.ph === 'ready' ? st.p.w / 32 * 38 : 3; c.fillRect(sx - 12 + shake, y - 6 - wf, 24, wf);
    if (st.ph === 'build' || st.ph === 'ready') CV.rrect(c, sx - 16 + shake, y - 6, 32, 6, 2, C.u4, C.ink, 1.5); else CV.rrect(c, sx - 16, g0 - 6, 32, 6, 2, C.u4, C.ink, 1.5);
    if (st.ph === 'build') for (let i = 0; i < 12 * st.P; i++) CV.circle(c, sx - 8 + (i * 7 % 18), y - 10 - (i * 13 % 30), 2.2, null, C.u4, 1);
    if (st.ph === 'fly' && st.vy > 0 && st.y < 0.6) { for (let i = 0; i < 8; i++) CV.line(c, sx + (i - 4) * 3, y, sx + (i - 4) * 7, y + 24 + Math.random() * 20, hexA(C.u5, .7), 2); CV.arrow(c, sx, y - 50, sx, y - 100, C.u3, 4, 12); CV.text(c, 'thrust', sx + 10, y - 90, C.u3, 12, 'left', 700); }
    if (st.ph !== 'ready') CV.arrow(c, sx + 22, y - 24, sx + 22, y + 8, C.u1, 3, 9);
    // pressure gauge
    const gx = W * 0.08, gy = 70; CV.circle(c, gx + 30, gy, 30, C.surface, C.ink, 2); const a = Math.PI * (0.8 + 1.4 * Math.min(1, st.P)); CV.line(c, gx + 30, gy, gx + 30 + Math.cos(a) * 24, gy + Math.sin(a) * 24, C.u1, 3); CV.text(c, 'pressure', gx + 30, gy + 44, C.muted, 11, 'center');
    // results table
    const tx0 = W * 0.52; CV.text(c, 'Results', tx0, 24, C.ink, 13, 'left', 700); CV.mono(c, 'water  tablet  temp   height', tx0, 44, C.muted, 11);
    st.res.forEach((r, i) => CV.mono(c, `${String(r[0]).padStart(3)} ml  ${r[1] === 0.125 ? '⅛' : r[1] === 0.25 ? '¼' : '½'}     ${r[2]} °C  ${r[3].toFixed(2)} m`, tx0, 62 + i * 17, C.ink, 11.5));
    if (st.ph === 'ready') CV.text(c, 'Press “Launch”', sx, g0 - 70, C.muted, 13, 'center');
  },
  read(st) { return [st.ph === 'ready' ? '—' : Math.round(Math.min(1, st.P) * 100) + '% of popping pressure', st.ph === 'ready' ? '—' : st.tt.toFixed(1) + ' s', st.ph === 'fly' || st.ph === 'done' ? st.maxH.toFixed(2) + ' m' : '—', st.ph === 'build' ? 'lid on: pressure building' : st.ph === 'fly' ? (st.vy > 0 && st.y < 0.6 ? 'thrust > weight → up' : 'only weight → slowing, then falling') : st.ph === 'done' ? 'landed' : 'ready']; }
};

/* ---------- 2.2 Newton meter ---------- */
const NM_OBJ = { apple: ['apple', 1.2], shoe: ['trainer', 4.4], bag: ['pencil case', 2.7], book: ['textbook', 12.5], toy: ['toy car', 0.35], rock: ['rock', 7.8] };
SIMS.newtonmeter = {
  title: 'Reading a newton meter', h: 430, noPlay: true,
  controls: [
    { id: 'rng', type: 'seg', label: 'Newton meter', value: 10, options: [[1, '0–1 N'], [5, '0–5 N'], [10, '0–10 N'], [50, '0–50 N']] },
    { id: 'obj', type: 'seg', label: 'Hang this', value: 'apple', options: Object.entries(NM_OBJ).map(([k, v]) => [k, v[0]]) },
    { id: 'zero', type: 'seg', label: 'Zeroed?', value: 1, options: [[1, 'Yes'], [0, 'No (zero error)']] }
  ],
  readouts: ['Value of one small division', 'Reading', 'True weight', 'Is this meter suitable?'],
  note: 'Choose a meter whose range is a bit bigger than the force. Too small a range and it is overloaded (and damaged); too big and the pointer hardly moves, so the reading is imprecise. Always zero it first — otherwise every reading is wrong by the same amount (a zero error).',
  init(st) { st.t = 0; },
  k(p) { const R = +p.rng, W = NM_OBJ[p.obj][1], ze = p.zero ? 0 : R * 0.04, rd = Math.min(R * 1.04, W + ze); return { R, W, ze, rd, div: R / 50, over: W > R }; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const k = this.k(st.p), x = W * 0.35, top = 40, len = H - 150;
    CV.line(c, x, 10, x, top, C.ink, 2); CV.rrect(c, x - 34, top, 68, len + 20, 14, C.surface, C.ink, 2);
    for (let i = 0; i <= 50; i++) { const y = top + 10 + i / 50 * len, big = i % 10 === 0; CV.line(c, x + (big ? 10 : 18), y, x + 30, y, C.ink, big ? 1.6 : 0.8); if (big) CV.mono(c, String(+(k.R * i / 50).toFixed(2)), x + 36, y, C.ink, 11); }
    const f = Math.min(1.04, k.rd / k.R), py = top + 10 + f * len;
    c.strokeStyle = C.u2; c.lineWidth = 2; c.beginPath(); for (let i = 0; i <= 24; i++) { const yy = top + 8 + i / 24 * (py - top - 8); c.lineTo(x + (i % 2 ? -8 : 8), yy); } c.stroke();
    CV.line(c, x - 22, py, x + 30, py, C.u1, 3); CV.line(c, x, py, x, top + len + 40, C.ink, 2);
    const oy = top + len + 48; CV.rrect(c, x - 26, oy, 52, 34, 6, k.over ? C.bad : C.u5, C.ink); CV.text(c, NM_OBJ[st.p.obj][0], x, oy + 17, '#fff', 11, 'center', 700);
    // zoom
    const zx = W * 0.7, zy = H * 0.42; CV.circle(c, zx, zy, 90, C.surface, C.ink, 2); CV.text(c, 'close-up at eye level', zx, zy - 104, C.muted, 11, 'center');
    c.save(); c.beginPath(); c.arc(zx, zy, 88, 0, 7); c.clip(); const scl = 6, base = zy - (f * len) * scl; for (let i = 0; i <= 50; i++) { const yy = base + (i / 50 * len) * scl, big = i % 5 === 0; if (yy < zy - 100 || yy > zy + 100) continue; CV.line(c, zx - 10 + (big ? 0 : 20), yy, zx + 60, yy, C.ink, big ? 2 : 1); if (big) CV.mono(c, String(+(k.R * i / 50).toFixed(2)) + ' N', zx - 18, yy, C.ink, 13, 'right'); } CV.line(c, zx - 70, zy, zx + 70, zy, C.u1, 3); c.restore();
  },
  read(st) { const k = this.k(st.p), suit = k.over ? 'no — overloaded! use a bigger range' : k.W < k.R * 0.1 ? 'poor — pointer hardly moves; use a smaller range' : 'yes — good choice'; return [+k.div.toFixed(3) + ' N', k.over ? 'off the scale!' : (+k.rd.toFixed(2)) + ' N' + (k.ze ? ' (includes the zero error)' : ''), k.W + ' N', suit]; }
};

/* ---------- 2.3 Party popper ---------- */
SIMS.popper = {
  title: 'How much force pops a party popper?', h: 420,
  controls: [{ type: 'button', act: 'pull', label: 'Pull the string' }, { type: 'button', act: 'clr', label: 'Clear results' }, { id: 'meth', type: 'seg', label: 'Measure with', value: 'nm', options: [['nm', 'Newton meter (read by eye)'], ['log', 'Force sensor + data logger']] }],
  readouts: ['Last result', 'Mean (without anomalies)', 'Range (without anomalies)', 'Anomalies'],
  note: 'Pull slowly and read the peak force just before the bang. Poppers are all slightly different, and reading a moving pointer is hard, so take at least five results. Leave anomalies out of the mean and use the range to judge how repeatable your results are. A data logger records the peak automatically.',
  init(st) { st.F = 0; st.ph = 'idle'; st.res = st.res || []; st.flash = 0; },
  action(st, a) { if (a === 'clr') { st.res = []; return; } if (a === 'pull' && st.ph !== 'pull') { st.ph = 'pull'; st.F = 0; const bad = Math.random() < 0.15; st.pop = bad ? (Math.random() < .5 ? 8.6 + Math.random() : 2.4 + Math.random() * .6) : 5.3 + (Math.random() - 0.5) * 0.8; st.bad = bad; } },
  step(st, dt) { if (st.ph === 'pull') { st.F += dt * 2.2; if (st.F >= st.pop) { st.ph = 'pop'; st.flash = 1; const err = st.p.meth === 'nm' ? (Math.random() - 0.5) * 0.4 : 0; st.res.push(+(st.pop + err).toFixed(1)); if (st.res.length > 10) st.res.shift(); st.F = 0; } } else st.flash = Math.max(0, st.flash - dt * 1.5); },
  stats(st) { const r = st.res; if (!r.length) return null; const med = [...r].sort((a, b) => a - b)[Math.floor(r.length / 2)], ok = r.filter(x => Math.abs(x - med) < 1.2), bad = r.filter(x => Math.abs(x - med) >= 1.2); return { mean: ok.reduce((a, b) => a + b, 0) / ok.length, lo: Math.min(...ok), hi: Math.max(...ok), bad }; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const cy = H * 0.34, x0 = 60;
    CV.rrect(c, x0 - 20, cy - 70, 16, 150, 3, C.surface, C.ink); CV.rrect(c, x0 - 4, cy - 8, 30, 16, 3, C.surface, C.ink);
    c.fillStyle = hexA(C.u8, .5); c.strokeStyle = C.ink; c.lineWidth = 1.5; c.beginPath(); c.moveTo(x0 + 26, cy - 14); c.lineTo(x0 + 80, cy); c.lineTo(x0 + 26, cy + 14); c.closePath(); c.fill(); c.stroke();
    const stretch = st.ph === 'pull' ? st.F * 6 : 0, mx = x0 + 150 + stretch; CV.line(c, x0 + 80, cy, mx, cy, C.ink, 1.5);
    CV.rrect(c, mx, cy - 14, 170, 28, 12, C.surface, C.ink, 1.5); for (let i = 0; i <= 10; i++) CV.line(c, mx + 20 + i * 13, cy - 14, mx + 20 + i * 13, cy - (i % 5 ? 8 : 4), C.ink, 1);
    const f = st.ph === 'pull' ? st.F : 0; CV.line(c, mx + 20 + f * 13, cy - 14, mx + 20 + f * 13, cy + 14, C.u1, 3); CV.mono(c, st.p.meth === 'log' ? 'logger: ' + f.toFixed(2) + ' N' : '0 – 10 N', mx + 85, cy + 26, C.muted, 11, 'center');
    if (st.flash > 0) { for (let i = 0; i < 20; i++) { const a = i / 20 * 6.28, r = 40 + (1 - st.flash) * 120; CV.line(c, x0 + 80 + Math.cos(a) * r * .3, cy + Math.sin(a) * r * .3, x0 + 80 + Math.cos(a) * r, cy + Math.sin(a) * r, [C.u1, C.u2, C.u3, C.u5][i % 4], 3); } CV.text(c, 'POP!', x0 + 80, cy - 60, C.u1, 22, 'center', 800); }
    // results chart
    const b = { x: 60, y: H * 0.58, w: W - 120, h: H * 0.3 }, s = this.stats(st); CV.plot(c, C, b, { xr: [0.5, 10.5], yr: [0, 10], dots: st.res.map((r, i) => [i + 1, r, s && s.bad.includes(r) ? C.bad : C.u5, 5]), series: s ? [{ pts: [[0.5, s.mean], [10.5, s.mean]], col: C.good, w: 1.5, dash: [5, 4] }] : [], xl: 'popper number', yl: 'force to pop (N)' });
  },
  read(st) { const s = this.stats(st), L = st.res[st.res.length - 1]; return [L != null ? L + ' N' : '—', s ? s.mean.toFixed(1) + ' N' : '—', s ? s.lo + ' – ' + s.hi + ' N' : '—', s && s.bad.length ? s.bad.join(', ') + ' N (red)' : 'none so far']; }
};

/* ---------- 3 Planets ---------- */
const PLANETS_G = { moon: ['Moon', 1.6, '#C9C9C9'], mercury: ['Mercury', 3.7, '#A8A29E'], mars: ['Mars', 3.7, '#D9653B'], venus: ['Venus', 8.9, '#E8C06A'], earth: ['Earth', 10, '#3F8FE0'], saturn: ['Saturn', 10.4, '#E3C58A'], neptune: ['Neptune', 11, '#4062D8'], jupiter: ['Jupiter', 25, '#D8A06A'] };
SIMS.planets = {
  title: 'Mass and weight around the Solar System', h: 420,
  controls: [{ id: 'pl', type: 'seg', label: 'Where are you?', value: 'earth', options: Object.entries(PLANETS_G).map(([k, v]) => [k, v[0]]) }, { id: 'm', label: 'Mass', min: 1, max: 120, step: 1, value: 50, fmt: v => v + ' kg' }],
  readouts: ['Mass (balance)', 'Gravitational field strength g', 'Weight W = m × g', 'Compared with Earth'],
  note: 'The balance shows the same mass everywhere — mass is the amount of matter. The newton meter shows the weight, the pull of gravity, which depends on g. On the Moon you weigh about a sixth of your Earth weight; on Jupiter, two and a half times as much.',
  init(st) { st.jump = 0; },
  draw(c, W, H, st, C) {
    const [n, gp, col] = PLANETS_G[st.p.pl], m = st.p.m, Wt = m * gp; c.fillStyle = '#0B1024'; c.fillRect(0, 0, W, H); for (let i = 0; i < 60; i++) CV.circle(c, (i * 97) % W, (i * 57) % (H * .6), 1, 'rgba(255,255,255,.6)');
    c.fillStyle = col; c.beginPath(); c.ellipse(W / 2, H + W * 0.9, W * 1.1, W * 1.0, 0, 0, 7); c.fill();
    const gy = H - (H + W * 0.9 - W * 1.0) + 0, ground = H * 0.78;
    // astronaut on a balance
    const bx = W * 0.3; CV.rrect(c, bx - 50, ground - 10, 100, 12, 3, '#9AA3AC', '#333'); CV.rrect(c, bx - 30, ground + 4, 60, 18, 3, '#222', '#555'); CV.mono(c, m + '.0 kg', bx, ground + 13, '#6FF', 12, 'center');
    const s = 0.7 + m / 150; CV.circle(c, bx, ground - 70 * s, 14 * s, '#EEE', '#333', 2); CV.rrect(c, bx - 16 * s, ground - 56 * s, 32 * s, 40 * s, 8, '#EEE', '#333', 2); CV.line(c, bx - 8 * s, ground - 16 * s, bx - 8 * s, ground - 10, '#EEE', 6 * s); CV.line(c, bx + 8 * s, ground - 16 * s, bx + 8 * s, ground - 10, '#EEE', 6 * s);
    CV.text(c, 'balance: mass', bx, ground + 36, '#DDD', 12, 'center', 700);
    // newton meter with a sample
    const nx = W * 0.68, top = 40, len = H * 0.45, Rng = 3000, f = Math.min(1, Wt / Rng);
    CV.line(c, nx, 10, nx, top, '#DDD', 2); CV.rrect(c, nx - 22, top, 44, len + 12, 10, '#1C2242', '#AAB', 2); for (let i = 0; i <= 6; i++) { const y = top + 6 + i / 6 * len; CV.line(c, nx + 6, y, nx + 20, y, '#AAB', 1.2); CV.mono(c, i * 500 + ' N', nx + 26, y, '#AAB', 10); }
    const py = top + 6 + f * len; CV.line(c, nx - 16, py, nx + 20, py, '#FF6B61', 3); CV.line(c, nx, py, nx, top + len + 30, '#DDD', 2); CV.rrect(c, nx - 24, top + len + 30, 48, 30, 5, '#E8A317', '#333'); CV.text(c, m + ' kg', nx, top + len + 45, '#111', 11, 'center', 700);
    CV.text(c, 'newton meter: weight', nx, top + len + 76, '#DDD', 12, 'center', 700); CV.arrow(c, nx + 36, top + len + 45, nx + 36, top + len + 45 + Math.min(80, gp * 3.5), '#FF6B61', 3, 9); CV.text(c, n + ': g = ' + gp + ' N/kg', 16, 24, '#FFF', 15, 'left', 800);
  },
  read(st) { const [n, gp] = PLANETS_G[st.p.pl], m = st.p.m, Wt = m * gp; return [m + ' kg (same everywhere)', gp + ' N/kg', (+Wt.toFixed(1)) + ' N', gp === 10 ? 'this is Earth' : (gp / 10).toFixed(2) + ' × your Earth weight (' + m * 10 + ' N)']; }
};

/* ---------- 4.1 Density and particles ---------- */
const DMATS = { cork: ['cork', 0.24, '#D9A55B', 3, 1.0], wood: ['pine wood', 0.5, '#B87333', 5, 1.0], water: ['water', 1.0, '#4AA3E8', 6, 1.2], al: ['aluminium', 2.7, '#AEB6BF', 7, 1.8], fe: ['iron', 7.9, '#6B7785', 8, 4.4], pb: ['lead', 11.3, '#4B5563', 8, 6.3] };
SIMS.densityparticles = {
  title: 'Density: particles, mass and volume', h: 420,
  controls: [{ id: 'mat', type: 'seg', label: 'Material', value: 'al', options: Object.entries(DMATS).map(([k, v]) => [k, v[0]]) }, { id: 'V', label: 'Size of the block (volume)', min: 1, max: 8, step: 1, value: 4, fmt: v => v * 125 + ' cm³' }],
  readouts: ['Mass', 'Volume', 'Density = mass ÷ volume', 'In water it would'],
  note: 'Denser materials pack more mass into each cm³ — because their particles are heavier, or closer together, or both. Change the size of the block: mass and volume change together, so the density stays the same. Density is a property of the material, not of the object.',
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const [n, d, col, per, pm] = DMATS[st.p.mat], V = st.p.V * 125, m = d * V;
    // block
    const s = Math.cbrt(st.p.V) * 50, bx = W * 0.26 - s / 2, by = H * 0.66 - s; CV.rrect(c, bx, by, s, s, 3, col, C.ink, 2); CV.rrect(c, W * 0.26 - 90, H * 0.66, 180, 16, 3, '#9AA3AC', C.ink); CV.rrect(c, W * 0.26 - 50, H * 0.66 + 18, 100, 24, 4, '#222', C.ink); CV.mono(c, (+m.toFixed(1)) + ' g', W * 0.26, H * 0.66 + 30, '#6FF', 13, 'center');
    CV.text(c, n + ' · ' + V + ' cm³', W * 0.26, 30, C.ink, 14, 'center', 700);
    // magnified 1 cm³
    const zx = W * 0.62, zy = 40, zs = Math.min(W * 0.32, 240); CV.rrect(c, zx, zy, zs, zs, 6, C.surface, C.ink, 2); CV.text(c, 'magnified: particles in 1 cm³', zx + zs / 2, zy + zs + 18, C.muted, 12, 'center');
    const gap = zs / per; for (let i = 0; i < per; i++) for (let j = 0; j < per; j++) { const jit = st.p.mat === 'water' ? Math.sin(st.t * 3 + i * 7 + j) * gap * .12 : Math.sin(st.t * 6 + i + j) * 1.2; CV.circle(c, zx + gap * (i + .5) + jit, zy + gap * (j + .5) + jit, gap * 0.28 * Math.min(1.4, 0.8 + pm / 8), col, C.ink, 1); }
    CV.text(c, 'each cm³ has a mass of ' + d + ' g', zx + zs / 2, zy + zs + 38, C.ink, 13, 'center', 700);
  },
  read(st) { const [n, d] = DMATS[st.p.mat], V = st.p.V * 125, m = d * V; return [(+m.toFixed(1)) + ' g', V + ' cm³', d + ' g/cm³', d < 1 ? 'float' : d === 1 ? 'just float (neutral)' : 'sink']; }
};

/* ---------- 4.4 Density column ---------- */
const TOWER = [['vegetable oil', 0.92, '#E8C547'], ['water', 1.0, '#4AA3E8'], ['washing-up liquid', 1.06, '#5BB56A'], ['honey', 1.42, '#C9861A']];
const TOBJ = { cork: ['cork', 0.24, '#E2C08D'], ice: ['ice cube', 0.92, '#D9F1FF'], bead: ['plastic bead', 0.96, '#E5484D'], tomato: ['cherry tomato', 1.02, '#FF4D2E'], grape: ['grape', 1.2, '#6BAA3A'], rubber: ['rubber', 1.3, '#555'], nut: ['metal nut', 7.9, '#9AA3AC'] };
SIMS.tower = {
  title: 'Density column', h: 440,
  controls: [{ id: 'o', type: 'seg', label: 'Drop in', value: 'grape', options: Object.entries(TOBJ).map(([k, v]) => [k, v[0]]) }, { type: 'button', act: 'drop', label: 'Drop it in' }, { type: 'button', act: 'clr', label: 'Empty the objects' }],
  readouts: ['Object density', 'It stops in / on', 'Because', 'Liquids (top → bottom)'],
  note: 'Liquids that do not mix settle in order of density — the densest at the bottom. A dropped object sinks through every liquid that is less dense than it and floats on the first one that is denser.',
  init(st) { st.obs = st.obs || []; },
  action(st, a) { if (a === 'clr') st.obs = []; if (a === 'drop') st.obs.push({ k: st.p.o, y: -0.05, x: 0.25 + Math.random() * 0.5, v: 0 }); },
  rest(d) { let i = TOWER.findIndex(l => l[1] > d); return i < 0 ? 4 : i; },
  step(st, dt) { st.obs.forEach(o => { const d = TOBJ[o.k][1], lvl = this.rest(d), target = lvl === 4 ? 0.99 : lvl * 0.23 / 0.92 + 0.01; if (o.y < target) { o.v = Math.min(0.5, o.v + dt * 0.8); o.y = Math.min(target, o.y + o.v * dt); } else if (o.y > target + 0.01) { o.y -= dt * 0.2; } }); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const x0 = W * 0.3, w = W * 0.4, top = 50, h = H - 90; c.strokeStyle = C.ink; c.lineWidth = 2.5; c.beginPath(); c.moveTo(x0, top - 20); c.lineTo(x0, top + h); c.lineTo(x0 + w, top + h); c.lineTo(x0 + w, top - 20); c.stroke();
    TOWER.forEach(([n, d, col], i) => { const y = top + h * (0.08 + i * 0.23); c.fillStyle = hexA(col, .55); c.fillRect(x0 + 1, y, w - 2, h * 0.23); CV.text(c, n, x0 + w + 12, y + h * .1, C.ink, 12, 'left', 700); CV.mono(c, d.toFixed(2) + ' g/cm³', x0 + w + 12, y + h * .1 + 16, C.muted, 11); });
    st.obs.forEach(o => { const [n, d, col] = TOBJ[o.k], y = top + h * Math.min(0.97, 0.08 + o.y * 0.92), x = x0 + w * o.x; if (o.k === 'nut' || o.k === 'ice') CV.rrect(c, x - 10, y - 10, 20, 20, 3, col, C.ink); else CV.circle(c, x, y - 8, 9, col, C.ink); });
  },
  read(st) { const [n, d] = TOBJ[st.p.o], lvl = this.rest(d); return [d + ' g/cm³', lvl === 4 ? 'the bottom' : lvl === 0 ? 'the surface (on the oil)' : 'on top of the ' + TOWER[lvl][0], lvl === 4 ? 'it is denser than every liquid' : lvl === 0 ? 'it is less dense than oil' : `denser than ${TOWER[lvl - 1][0]} (${TOWER[lvl - 1][1]}) but less dense than ${TOWER[lvl][0]} (${TOWER[lvl][1]})`, TOWER.map(t => t[0]).join(' · ')]; }
};

/* ---------- 5.1 Float or sink ---------- */
SIMS.floatsink = {
  title: 'Float or sink?', h: 420,
  controls: [{ id: 'd', label: 'Density of the block', min: 0.1, max: 3, step: 0.05, value: 0.6, fmt: v => v.toFixed(2) + ' g/cm³' }, { id: 'liq', type: 'seg', label: 'Liquid', value: 1, options: [[0.8, 'Alcohol 0.80'], [0.92, 'Oil 0.92'], [1, 'Water 1.00'], [1.2, 'Salty (Dead Sea) 1.20']] }],
  readouts: ['Weight of the block', 'Upthrust', 'Fraction under the surface', 'Result'],
  note: 'Upthrust = weight of liquid pushed aside. A block sinks into the liquid until the upthrust equals its weight — so it floats, and the less dense it is the higher it floats. If it is denser than the liquid, even the full upthrust is less than its weight, and it sinks. (Block volume 1000 cm³, g = 10 N/kg.)',
  init(st) { st.y = 0; },
  step(st, dt) { const f = Math.min(1, st.p.d / st.p.liq), target = st.p.d > st.p.liq ? 1.6 : f; st.y += (target - st.y) * Math.min(1, dt * 3); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const surf = H * 0.36, bs = 110, x = W / 2 - bs / 2, dep = Math.min(st.y, 1.6); c.fillStyle = hexA(st.p.liq > 1.1 ? C.u4 : st.p.liq < 0.95 ? C.u2 : C.u5, .25); c.fillRect(0, surf, W, H - surf); CV.line(c, 0, surf, W, surf, hexA(C.u5, .8), 2);
    const top = Math.min(surf - bs + dep * bs, H - 20 - bs); CV.rrect(c, x, top, bs, bs, 4, st.p.d < 0.5 ? '#E2C08D' : st.p.d < 1 ? '#B87333' : st.p.d < 2 ? '#8C7A6B' : '#6B7785', C.ink, 2);
    const Wt = st.p.d * 1000 / 1000 * 10, sub = Math.max(0, Math.min(1, (top + bs - surf) / bs)), U = sub * st.p.liq * 10;
    CV.arrow(c, W / 2 - 20, top + bs, W / 2 - 20, top + bs + Wt * 9, C.u1, 4, 11); CV.text(c, 'weight ' + Wt.toFixed(1) + ' N', W / 2 - 28, top + bs + Wt * 9, C.u1, 12, 'right', 700);
    if (U > 0.05) { CV.arrow(c, W / 2 + 20, top + bs, W / 2 + 20, top + bs - U * 9, C.u5, 4, 11); CV.text(c, 'upthrust ' + U.toFixed(1) + ' N', W / 2 + bs / 2 + 10, top + bs - U * 9, C.u5, 12, 'left', 700); }
  },
  read(st) { const Wt = st.p.d * 10, fl = st.p.d <= st.p.liq, U = fl ? Wt : st.p.liq * 10; return [Wt.toFixed(1) + ' N', U.toFixed(1) + ' N', fl ? Math.round(st.p.d / st.p.liq * 100) + '%' : '100% (and sinking)', fl ? 'floats: upthrust = weight' : 'sinks: weight > upthrust']; }
};

/* ---------- 5.2 Archimedes ---------- */
const ARCH = { al: ['aluminium block', 2.7, 200, '#AEB6BF'], fe: ['iron block', 7.9, 60, '#6B7785'], st: ['stone', 2.6, 150, '#8C7A6B'], gl: ['glass marble set', 2.5, 120, '#9ADBE8'] };
SIMS.archimedes = {
  title: 'Upthrust and displaced water', h: 440,
  controls: [{ id: 'o', type: 'seg', label: 'Object', value: 'al', options: Object.entries(ARCH).map(([k, v]) => [k, v[0]]) }, { id: 'f', label: 'Lower it into the eureka can', min: 0, max: 1, step: 0.02, value: 0, fmt: v => Math.round(v * 100) + '% under water' }],
  readouts: ['Weight in air', 'Newton meter reading now', 'Upthrust = difference', 'Weight of water displaced'],
  note: 'As the object goes under water the newton meter reading drops: the water pushes up (upthrust). The water pushed out of the eureka can is collected and weighed. Upthrust always equals the weight of the water displaced — Archimedes’ principle. (1 cm³ of water = 1 g; g = 10 N/kg.)',
  k(p) { const [n, d, V] = ARCH[p.o], Wa = d * V / 1000 * 10, U = p.f * V / 1000 * 10; return { n, V, Wa, U, R: Wa - U, mw: p.f * V }; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const k = this.k(st.p), cx = W * 0.36, canTop = H * 0.45, canH = H * 0.4, cw = 150, bs = Math.cbrt(k.V) * 9;
    // newton meter
    CV.line(c, cx, 6, cx, 20, C.ink, 2); CV.rrect(c, cx - 32, 20, 64, 90, 10, C.surface, C.ink, 2); CV.mono(c, k.R.toFixed(2) + ' N', cx, 64, C.u1, 12, 'center');
    const objBottom = canTop + 18 + st.p.f * (bs + 4) + 0; const oy = canTop + 20 - bs + st.p.f * (bs + 2);
    CV.line(c, cx, 110, cx, oy, C.ink, 1.5); CV.rrect(c, cx - bs / 2, oy, bs, bs, 3, ARCH[st.p.o][3], C.ink, 2);
    // eureka can
    c.strokeStyle = C.ink; c.lineWidth = 2.5; c.beginPath(); c.moveTo(cx - cw / 2, canTop); c.lineTo(cx - cw / 2, canTop + canH); c.lineTo(cx + cw / 2, canTop + canH); c.lineTo(cx + cw / 2, canTop); c.stroke(); CV.line(c, cx + cw / 2, canTop + 20, cx + cw / 2 + 40, canTop + 36, C.ink, 3);
    c.fillStyle = WATERC(C); c.fillRect(cx - cw / 2 + 2, canTop + 20, cw - 4, canH - 22);
    // beaker on balance
    const bx = cx + cw / 2 + 60, by = H * 0.62; c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(bx - 34, by); c.lineTo(bx - 34, by + 80); c.lineTo(bx + 34, by + 80); c.lineTo(bx + 34, by); c.stroke(); const wl = k.mw / 200 * 76; c.fillStyle = WATERC(C); c.fillRect(bx - 32, by + 78 - wl, 64, wl);
    if (st.p.f > 0 && st.p.f < 1) for (let i = 0; i < 4; i++) CV.circle(c, cx + cw / 2 + 42, canTop + 44 + ((st.t * 90 + i * 20) % (by - canTop - 40)), 2.5, C.u5);
    CV.rrect(c, bx - 50, by + 82, 100, 12, 3, '#9AA3AC', C.ink); CV.rrect(c, bx - 38, by + 96, 76, 22, 4, '#222', C.ink); CV.mono(c, k.mw.toFixed(0) + ' g', bx, by + 107, '#6FF', 12, 'center');
    CV.text(c, 'upthrust ' + k.U.toFixed(2) + ' N  =  weight of water ' + (k.mw / 100).toFixed(2) + ' N', W / 2, H - 14, C.u5, 14, 'center', 800);
  },
  read(st) { const k = this.k(st.p); return [k.Wa.toFixed(2) + ' N', k.R.toFixed(2) + ' N', k.U.toFixed(2) + ' N', (k.mw / 100).toFixed(2) + ' N (' + k.mw.toFixed(0) + ' g of water)']; }
};

/* ---------- 6.2 Bouncing ball ---------- */
const BALLS = { tennis: ['tennis ball', 0.7, '#D9E84A'], rubber: ['super-ball', 0.85, '#E5484D'], basket: ['basketball', 0.75, '#E8832A'], clay: ['modelling clay', 0.05, '#7B5BD6'] };
SIMS.bounce = {
  title: 'Bouncing ball: where does the energy go?', h: 430,
  controls: [{ id: 'b', type: 'seg', label: 'Ball', value: 'tennis', options: Object.entries(BALLS).map(([k, v]) => [k, v[0]]) }, { id: 'h0', label: 'Drop height', min: 0.5, max: 2, step: 0.1, value: 1.5, fmt: v => v.toFixed(1) + ' m' }, { type: 'button', act: 'drop', label: 'Drop' }],
  readouts: ['Drop height', 'Height of first bounce', 'Energy kept each bounce', 'Energy transferred to thermal and sound so far'],
  note: 'Each time the ball hits the floor, some energy is transferred to the thermal store (the ball and floor warm up slightly) and some is carried away by sound. So each bounce is lower. Energy is not destroyed — it spreads into the surroundings. (Mass 0.1 kg, g = 10 N/kg.)',
  init(st) { st.y = st.p.h0; st.v = 0; st.E0 = 0.1 * 10 * st.p.h0; st.lost = 0; st.first = null; st.run = true; },
  action(st, a) { if (a === 'drop') this.init(st); },
  change(st) { this.init(st); },
  step(st, dt) { st.v -= 10 * dt; st.y += st.v * dt; if (st.y <= 0 && st.v < 0) { const e = BALLS[st.p.b][1], KE = 0.5 * 0.1 * st.v * st.v; st.lost += KE * (1 - e); st.v = -st.v * Math.sqrt(e); st.y = 0; if (st.first == null) st.first = st.v * st.v / 20; if (st.v < 0.15) { st.v = 0; } } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const g0 = H - 40, sc = (H - 90) / 2, x = W * 0.3; CV.line(c, 0, g0, W, g0, C.ink, 2); for (let m = 0; m <= 2; m += 0.5) { CV.line(c, x - 70, g0 - m * sc, x - 58, g0 - m * sc, C.ink, 1); CV.mono(c, m.toFixed(1) + ' m', x - 76, g0 - m * sc, C.muted, 10.5, 'right'); }
    CV.line(c, x - 64, g0, x - 64, g0 - 2 * sc, C.ink, 1); CV.line(c, x - 40, g0 - st.p.h0 * sc, x + 40, g0 - st.p.h0 * sc, C.muted, 1, [4, 4]); if (st.first) CV.line(c, x - 40, g0 - st.first * sc, x + 40, g0 - st.first * sc, C.u5, 1, [4, 4]);
    CV.circle(c, x, g0 - Math.max(0, st.y) * sc - 12, 12, BALLS[st.p.b][2], C.ink, 1.5);
    const gpe = 0.1 * 10 * Math.max(0, st.y), ke = 0.5 * 0.1 * st.v * st.v, tot = st.E0, bars = [['GPE', gpe, C.u3], ['kinetic', ke, C.u1], ['wasted', st.lost, C.u6]], bx = W * 0.52, bh = H * 0.6;
    bars.forEach(([n, e, col], i) => { const hh = e / tot * bh, xx = bx + i * 84; CV.rrect(c, xx, H * 0.78 - hh, 44, Math.max(1, hh), 3, col); CV.text(c, n, xx + 22, H * 0.78 + 14, C.ink, 11, 'center', 700); CV.mono(c, e.toFixed(2) + ' J', xx + 22, H * 0.78 + 30, C.muted, 10.5, 'center'); });
    CV.text(c, 'total always ' + tot.toFixed(2) + ' J', bx + 105, 30, C.ink, 13, 'center', 700);
  },
  read(st) { const e = BALLS[st.p.b][1]; return [st.p.h0.toFixed(1) + ' m', st.first != null ? st.first.toFixed(2) + ' m' : '—', Math.round(e * 100) + '%', st.lost.toFixed(2) + ' J of ' + st.E0.toFixed(2) + ' J']; }
};

/* ---------- 6.3 Thermal energy vs temperature ---------- */
SIMS.thermal = {
  title: 'Temperature and thermal energy', h: 430,
  controls: [
    { id: 'mA', label: 'Mass of water A', min: 0.1, max: 5, step: 0.1, value: 0.3, fmt: v => v.toFixed(1) + ' kg' }, { id: 'TA', label: 'Temperature of A', min: 0, max: 100, step: 1, value: 90, fmt: v => v + ' °C' },
    { id: 'mB', label: 'Mass of water B', min: 0.1, max: 5, step: 0.1, value: 4, fmt: v => v.toFixed(1) + ' kg' }, { id: 'TB', label: 'Temperature of B', min: 0, max: 100, step: 1, value: 40, fmt: v => v + ' °C' },
    { type: 'button', act: 'touch', label: 'Put them in contact' }, { type: 'button', act: 'sep', label: 'Separate' }
  ],
  readouts: ['A: temperature · thermal energy', 'B: temperature · thermal energy', 'Energy flows', 'Final temperature when equal'],
  note: 'Temperature is how hot something is — the average energy of its particles (their speed). Thermal energy is the total energy of all the particles, so it depends on the mass too. Put them in contact: energy always flows from the hotter to the colder until the temperatures are equal. (Thermal energy here is measured from 0 °C: 4.2 kJ per kg per °C.)',
  init(st) { st.a = st.p.TA; st.b = st.p.TB; st.touch = false; },
  change(st) { if (!st.touch) { st.a = st.p.TA; st.b = st.p.TB; } },
  action(st, a) { if (a === 'touch') st.touch = true; if (a === 'sep') { st.touch = false; } },
  step(st, dt) { if (st.touch) { const k = 4.2 * Math.min(st.p.mA, st.p.mB) * 0.8, q = k * (st.a - st.b) * dt; st.a -= q / (st.p.mA * 4.2); st.b += q / (st.p.mB * 4.2); } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const cont = (x, m, T, lab) => { const w = 60 + Math.sqrt(m) * 50, h = 60 + Math.sqrt(m) * 40, y = H * 0.7 - h; c.strokeStyle = C.ink; c.lineWidth = 2.5; c.beginPath(); c.moveTo(x - w / 2, y - 10); c.lineTo(x - w / 2, y + h); c.lineTo(x + w / 2, y + h); c.lineTo(x + w / 2, y - 10); c.stroke(); c.fillStyle = `rgba(${Math.round(60 + T * 1.9)},${Math.round(120 - T * 0.4)},${Math.round(230 - T * 1.8)},0.3)`; c.fillRect(x - w / 2 + 2, y, w - 4, h - 2);
      const n = Math.round(8 + m * 16), sp = 0.4 + T / 40; for (let i = 0; i < n; i++) { const px = x - w / 2 + 10 + ((i * 37.7 + Math.sin(st.t * sp * 3 + i) * 8 * sp) % (w - 20) + (w - 20)) % (w - 20), py = y + 8 + ((i * 23.3 + Math.cos(st.t * sp * 2.6 + i * 2) * 8 * sp) % (h - 18) + (h - 18)) % (h - 18); CV.circle(c, px, py, 3, C.u5); }
      CV.text(c, lab, x, H * 0.7 + 20, C.ink, 13, 'center', 800); CV.mono(c, T.toFixed(1) + ' °C', x, H * 0.7 + 38, C.ink, 13, 'center'); CV.mono(c, (m * 4.2 * T).toFixed(0) + ' kJ', x, H * 0.7 + 56, C.u6, 13, 'center');
      // thermometer
      CV.rrect(c, x + w / 2 + 10, y - 30, 10, 110, 5, C.surface, C.ink, 1.2); c.fillStyle = C.bad; c.fillRect(x + w / 2 + 12, y + 78 - T, 6, T + 2); CV.circle(c, x + w / 2 + 15, y + 84, 8, C.bad); };
    cont(W * 0.27, st.p.mA, st.a, 'A'); cont(W * 0.7, st.p.mB, st.b, 'B');
    if (st.touch) { const dir = st.a > st.b + 0.2 ? 1 : st.b > st.a + 0.2 ? -1 : 0; CV.rrect(c, W * 0.44, H * 0.5, W * 0.12, 16, 4, '#B87333', C.ink); if (dir) CV.arrow(c, W / 2 - dir * 40, H * 0.44, W / 2 + dir * 40, H * 0.44, C.u6, 4, 12); CV.text(c, dir ? 'energy flows by heating' : 'same temperature — no net flow', W / 2, H * 0.38, C.u6, 12, 'center', 700); }
  },
  read(st) { const EA = st.p.mA * 4.2 * st.a, EB = st.p.mB * 4.2 * st.b, Tf = (st.p.mA * st.p.TA + st.p.mB * st.p.TB) / (st.p.mA + st.p.mB); return [st.a.toFixed(1) + ' °C · ' + EA.toFixed(0) + ' kJ', st.b.toFixed(1) + ' °C · ' + EB.toFixed(0) + ' kJ', Math.abs(st.a - st.b) < 0.3 ? 'none — equal temperatures' : st.a > st.b ? 'from A (hotter) to B' : 'from B (hotter) to A', Tf.toFixed(1) + ' °C']; }
};

/* ---------- 6.4 Rollercoaster ---------- */
SIMS.coaster = {
  title: 'Rollercoaster energy', h: 440,
  controls: [
    { id: 'h1', label: 'Height of the first hill', min: 20, max: 60, step: 1, value: 50, fmt: v => v + ' m' },
    { id: 'h2', label: 'Height of the second hill', min: 10, max: 60, step: 1, value: 38, fmt: v => v + ' m' },
    { id: 'mu', label: 'Friction and air resistance', min: 0, max: 1, step: 0.05, value: 0.4, fmt: v => v === 0 ? 'none' : v < .35 ? 'low' : v < .7 ? 'medium' : 'high' },
    { type: 'button', act: 'go', label: 'Start the ride' }
  ],
  readouts: ['Speed', 'Height', 'Gravitational potential store', 'Kinetic store · thermal store'],
  note: 'A motor pulls the car up the first hill, filling its gravitational potential store. After that there is no motor: GPE → kinetic energy going down, kinetic → GPE going up. Friction and air resistance keep transferring energy to the thermal store, so a second hill that is too high cannot be climbed — the car rolls back! (Car mass 500 kg, g = 10 N/kg.)',
  init(st) { st.s = 0.02; st.dir = 1; st.E = null; st.th = 0; st.done = false; st.stopped = false; },
  action(st, a) { if (a === 'go') this.init(st); },
  change(st) { this.init(st); },
  hgt(p, x) { const H1 = p.h1, H2 = p.h2; if (x < 0.15) return H1 * x / 0.15; if (x < 0.35) return H1 * (1 + Math.cos((x - 0.15) / 0.2 * Math.PI)) / 2; if (x < 0.55) return H2 * (1 - Math.cos((x - 0.35) / 0.2 * Math.PI)) / 2; if (x < 0.75) return H2 * (1 + Math.cos((x - 0.55) / 0.2 * Math.PI)) / 2; return 0; },
  step(st, dt) { const p = st.p, m = 500, L = 600; if (st.E == null) { st.E = m * 10 * this.hgt(p, st.s) + 0.5 * m * 16; st.th = 0; } if (st.done) return;
    for (let k = 0; k < 20; k++) { const hh = this.hgt(p, st.s), ke = st.E - m * 10 * hh; let v = ke > 0 ? Math.sqrt(2 * ke / m) : 0; if (st.s < 0.15) { v = 4; }
      const ds = v * dt / 20 / L; let ns = st.s + st.dir * ds; const nh = this.hgt(p, ns);
      if (st.s >= 0.15 && st.E - m * 10 * nh <= 0) { st.dir *= -1; continue; }
      if (st.s < 0.15) { st.s = ns; st.E = m * 10 * this.hgt(p, st.s) + 0.5 * m * 16; if (st.s >= 0.15) st.E = m * 10 * p.h1 + 0.5 * m * 16; continue; }
      const loss = (p.mu * 0.02 * m * 10 + p.mu * 0.5 * v * v) * ds * L; st.E -= loss; st.th += loss; st.s = ns;
      if (st.s >= 0.75) { const brake = 6000 * ds * L; const ke2 = st.E; const b = Math.min(brake, ke2); st.E -= b; st.th += b; if (st.E <= 50) { st.th += st.E; st.E = 0; st.done = true; break; } }
      if (st.s <= 0.15 && st.dir < 0) { st.dir = 1; }
      if (st.s > 0.98) { st.done = true; break; } } },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const p = st.p, g0 = H * 0.7, sy = (H * 0.6) / 60, X = x => 20 + x * (W - 40);
    c.strokeStyle = C.ink; c.lineWidth = 3; c.beginPath(); for (let i = 0; i <= 200; i++) { const x = i / 200; const y = g0 - this.hgt(p, x) * sy; i ? c.lineTo(X(x), y) : c.moveTo(X(x), y); } c.stroke();
    for (let i = 0; i < 20; i++) { const x = i / 20; CV.line(c, X(x), g0 - this.hgt(p, x) * sy, X(x), g0, hexA(C.muted, .35), 1); }
    CV.rrect(c, X(0.75), g0 - 4, X(1) - X(0.75), 8, 2, hexA(C.u6, .5)); CV.text(c, 'brakes', X(0.87), g0 + 16, C.u6, 11, 'center', 700); CV.text(c, 'lift hill (motor)', X(0.07), g0 + 16, C.muted, 11, 'center');
    const hh = this.hgt(p, st.s); CV.circle(c, X(st.s), g0 - hh * sy - 10, 10, C.u1, C.ink, 2);
    const m = 500, tot = m * 10 * p.h1 + 0.5 * m * 16, gpe = m * 10 * hh, ke = st.E == null ? 0 : Math.max(0, st.E - gpe), bars = [['GPE', gpe, C.u3], ['kinetic', ke, C.u1], ['thermal', st.th, C.u6]];
    bars.forEach(([n, e, col], i) => { const x = W * 0.08 + i * 90, bh = e / tot * (H * 0.18); CV.rrect(c, x, H - 30 - bh, 50, Math.max(1, bh), 3, col); CV.text(c, n + ' ' + (e / 1000).toFixed(0) + ' kJ', x + 25, H - 16, C.ink, 11, 'center', 700); });
  },
  read(st) { const p = st.p, hh = this.hgt(p, st.s), gpe = 500 * 10 * hh, ke = st.E == null ? 0 : Math.max(0, st.E - gpe); return [Math.sqrt(2 * ke / 500).toFixed(1) + ' m/s', hh.toFixed(1) + ' m', (gpe / 1000).toFixed(0) + ' kJ', (ke / 1000).toFixed(0) + ' kJ · ' + (st.th / 1000).toFixed(0) + ' kJ']; }
};

/* ---------- 7.2 Making magnets: domains ---------- */
SIMS.domains = {
  title: 'Making (and breaking) a magnet', h: 400, noPlay: false,
  controls: [{ id: 'mat', type: 'seg', label: 'Material', value: 'steel', options: [['steel', 'Steel needle (hard)'], ['iron', 'Soft iron nail']] }, { type: 'button', act: 'stroke', label: 'Stroke ×5 (one direction)' }, { type: 'button', act: 'coil', label: 'Direct current in a coil' }, { type: 'button', act: 'heat', label: 'Heat strongly' }, { type: 'button', act: 'drop', label: 'Drop / hammer' }],
  readouts: ['Domains lined up', 'Pins it can pick up', 'Is it a magnet?', 'Last action'],
  note: 'Each small arrow is a domain — a tiny region that acts like a mini-magnet. Stroking with one pole of a magnet, always in the same direction, or a direct current in a coil, lines the domains up. Heating or hammering jumbles them again. Soft iron loses its alignment quickly; steel keeps it — which is why permanent magnets are made of steel.',
  init(st) { st.a = Array.from({ length: 48 }, (_, i) => ((i * 137) % 360) * deg); st.last = '—'; },
  action(st, a) { const f = { stroke: 0.35, coil: 0.95 }[a]; if (f) st.a = st.a.map(x => Math.random() < f ? 0 : x * (1 - f * .5)); if (a === 'heat') st.a = st.a.map(() => Math.random() * Math.PI * 2); if (a === 'drop') st.a = st.a.map(x => Math.random() < 0.4 ? Math.random() * Math.PI * 2 : x); st.last = { stroke: 'stroked 5 times', coil: 'dc current in a coil', heat: 'heated', drop: 'dropped / hammered' }[a]; },
  step(st, dt) { if (st.p.mat === 'iron') st.a = st.a.map((x, i) => Math.random() < dt * 0.25 ? ((i * 53 + st.t * 40) % 360) * deg : x); },
  al(st) { return st.a.reduce((s, x) => s + Math.cos(x), 0) / st.a.length; },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const x0 = 60, y0 = 70, w = W - 120, h = 120, cols = 12, rows = 4, cw = w / cols, rh = h / rows;
    CV.rrect(c, x0, y0, w, h, 6, st.p.mat === 'steel' ? '#AEB6BF' : '#8B949E', C.ink, 2);
    st.a.forEach((a, i) => { const cx = x0 + cw * (i % cols + .5), cy = y0 + rh * (Math.floor(i / cols) + .5); c.strokeStyle = hexA(C.ink, .2); c.strokeRect(cx - cw / 2, cy - rh / 2, cw, rh); CV.arrow(c, cx - Math.cos(a) * cw * .32, cy - Math.sin(a) * rh * .32, cx + Math.cos(a) * cw * .32, cy + Math.sin(a) * rh * .32, Math.cos(a) > 0.9 ? C.u1 : C.u7, 2, 7); });
    const al = Math.max(0, this.al(st)); if (al > 0.3) { CV.text(c, 'S', x0 - 18, y0 + h / 2, C.u6, 18, 'center', 800); CV.text(c, 'N', x0 + w + 18, y0 + h / 2, C.u1, 18, 'center', 800); }
    const pins = Math.floor(al * al * 14); for (let i = 0; i < pins; i++) CV.line(c, x0 + w + 6 + (i % 5) * 6, y0 + h + 10 + Math.floor(i / 5) * 18, x0 + w + 10 + (i % 5) * 6, y0 + h + 26 + Math.floor(i / 5) * 18, C.ink, 1.5);
    CV.text(c, 'pins picked up at the N end', x0 + w - 40, y0 + h + 80, C.muted, 11, 'right');
  },
  read(st) { const al = Math.max(0, this.al(st)); return [Math.round(al * 100) + '%', Math.floor(al * al * 14), al > 0.3 ? 'yes' + (st.p.mat === 'iron' ? ' — but soft iron loses it fast' : '') : 'no — domains random', st.last]; }
};

/* ---------- 7.4 Electric bell ---------- */
SIMS.bell = {
  title: 'How an electric bell works', h: 420,
  controls: [{ id: 'sw', type: 'seg', label: 'Bell push', value: 0, options: [[0, 'Released'], [1, 'Held down']] }, { id: 'sp', type: 'seg', label: 'Speed', value: 0.25, options: [[0.25, 'Slow motion'], [1, 'Real speed']] }],
  readouts: ['Circuit', 'Electromagnet', 'Armature and hammer', 'What happens next'],
  note: 'Hold the push: current flows, the electromagnet attracts the iron armature and the hammer hits the gong. But moving the armature opens the contact, breaking the circuit. The electromagnet switches off, the spring pulls the armature back, the contact closes again — and it repeats many times a second.',
  init(st) { st.x = 0; st.v = 0; st.hit = 0; },
  closed(st) { return st.p.sw && st.x < 0.35; },
  step(st, dt) { dt *= st.p.sp; const on = this.closed(st), F = on ? 40 : 0, k = 25; st.v += (F - k * st.x - 3 * st.v) * dt * 4; st.x += st.v * dt * 4; if (st.x > 1) { st.x = 1; st.v = -Math.abs(st.v) * 0.3; st.hit = 1; } if (st.x < 0) { st.x = 0; st.v = 0; } st.hit = Math.max(0, st.hit - dt * 3); },
  draw(c, W, H, st, C) {
    CV.grid(c, W, H, C); const on = this.closed(st), ex = W * 0.28, ey = H * 0.26;
    // electromagnet
    CV.rrect(c, ex - 12, ey, 24, 120, 4, '#9AA3AC', C.ink); for (let i = 0; i < 8; i++) { c.strokeStyle = '#B87333'; c.lineWidth = 3; c.beginPath(); c.ellipse(ex, ey + 12 + i * 13, 22, 6, 0, 0, 7); c.stroke(); } if (on) CV.text(c, 'ON', ex, ey - 14, C.u1, 13, 'center', 800);
    // armature pivoted at bottom
    const ax = ex + 60 - st.x * 26, piv = [ex + 60, ey + 170]; c.save(); c.translate(piv[0], piv[1]); c.rotate(-st.x * 0.16); CV.rrect(c, -5, -170, 10, 170, 3, '#6B7785', C.ink); CV.line(c, 0, -170, 0, -205, C.ink, 3); CV.circle(c, 0, -212, 11, C.ink); c.restore();
    c.strokeStyle = C.u2; c.lineWidth = 2; c.beginPath(); c.moveTo(piv[0], piv[1]); for (let i = 1; i <= 8; i++) c.lineTo(piv[0] + i * 8, piv[1] + (i % 2 ? -6 : 6)); c.stroke(); CV.text(c, 'spring', piv[0] + 36, piv[1] + 20, C.muted, 11, 'center');
    // gong
    c.strokeStyle = C.u2; c.lineWidth = 7; c.beginPath(); c.arc(ex + 20, ey - 50, 50, -0.2, 0.9); c.stroke(); if (st.hit > 0) for (let i = 1; i < 4; i++) { c.strokeStyle = hexA(C.u2, st.hit * .8); c.lineWidth = 2; c.beginPath(); c.arc(ex + 20, ey - 50, 50 + i * 14 * (1.2 - st.hit), -0.4, 1.1); c.stroke(); }
    // contact
    const cx = ex + 110, cy = ey + 60; CV.circle(c, cx, cy, 4, C.ink); CV.line(c, ax + 6, cy, ax + 30 - (on ? 0 : 0), cy, C.ink, 2); CV.text(c, st.x < 0.35 ? 'contact closed' : 'contact OPEN', cx + 12, cy - 14, st.x < 0.35 ? C.good : C.bad, 12, 'left', 700);
    // circuit
    const col = on ? C.u5 : C.muted; CS.wire(c, [[ex, ey + 120], [ex, H - 40], [W - 60, H - 40], [W - 60, cy], [cx, cy]], col); CS.cell(c, W * 0.55, H - 40, C.ink); CV.rrect(c, W * 0.75 - 18, H - 52, 36, 24, 8, st.p.sw ? C.u1 : C.surface, C.ink); CV.text(c, 'push', W * 0.75, H - 26 + 18, C.muted, 11, 'center');
    if (on) CS.dots(c, [[cx, cy], [W - 60, cy], [W - 60, H - 40], [ex, H - 40], [ex, ey + 120]], st.t, 60, C.u5, 14, true);
  },
  read(st) { const on = this.closed(st); return [on ? 'complete — current flows' : st.p.sw ? 'broken at the contact' : 'open (push released)', on ? 'switched on — magnetic' : 'off', st.x > 0.8 ? 'pulled in: hammer hits the gong' : st.x > 0.1 ? 'moving' : 'resting against the contact', !st.p.sw ? 'nothing — the bell is silent' : on ? 'armature pulled in → contact opens' : 'spring pulls it back → contact closes']; }
};
