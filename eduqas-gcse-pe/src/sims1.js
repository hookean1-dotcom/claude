/* ==========================================================
   Explorations · Unit 1 exercise physiology, performance analysis and training
   ========================================================== */

/* ---- 1.1 Notational analysis: code a live feed, then check your reliability ---- */
SIMS.notation = DS('Notational analysis: code the match', 'Events from a netball centre’s quarter appear in the feed. Tap the matching button as fast as you can. At the end, compare your tally with the true record — this is <b>inter-observer reliability</b>, and it shows why live coding is harder than it looks.', body => {
  const EV = [['Pass completed', 'pc'], ['Pass intercepted', 'pl'], ['Interception made', 'iw'], ['Footwork error', 'fe'], ['Contact penalty', 'cp']];
  let log = [], coded = [], i = 0, tm = null, cur = null, speed = 1400;
  const start = () => { log = []; coded = []; i = 0; next(); };
  const next = () => { if (i >= 24) return finish(); cur = pick([0, 0, 0, 0, 1, 2, 3, 4]); log.push(cur); i++; draw(); clearTimeout(tm); tm = setTimeout(next, speed); };
  const draw = () => { body.innerHTML = `<div class="row" style="justify-content:space-between;margin-bottom:10px"><span class="pill">Event ${i} / 24</span>${dsSelect('ns-sp', 'Speed', [[1800, 'slow'], [1400, 'match pace'], [900, 'fast']], speed)}</div>
    <div class="card" style="text-align:center;font:800 34px var(--f-display);text-transform:uppercase;padding:24px;margin-bottom:12px">${EV[cur][0]}</div>
    <div class="opt-grid">${EV.map((e, k) => `<button class="pickb" data-k="${k}">${e[0]}</button>`).join('')}</div>`;
    $$('[data-k]', body).forEach(b => b.onclick = () => { coded.push({ at: i, k: +b.dataset.k }); b.classList.add('on'); sfx.tick(); });
    $('#ns-sp', body).onchange = e => { speed = +e.target.value; }; };
  const finish = () => { clearTimeout(tm);
    const truth = EV.map((_, k) => log.filter(x => x === k).length), mine = EV.map((_, k) => coded.filter(c => c.k === k).length);
    const correct = log.reduce((a, x, j) => a + (coded.some(c => c.at === j + 1 && c.k === x) ? 1 : 0), 0), rel = Math.round(correct / log.length * 100);
    const pcT = truth[0] / Math.max(1, truth[0] + truth[1]) * 100, pcM = mine[0] / Math.max(1, mine[0] + mine[1]) * 100;
    body.innerHTML = `<div class="tbl"><table><tr><th>Event</th><th>True record</th><th>Your tally</th></tr>${EV.map((e, k) => `<tr><td>${e[0]}</td><td>${truth[k]}</td><td>${mine[k]}</td></tr>`).join('')}</table></div>
      <div class="grid g3" style="margin-top:12px"><div class="card flat"><div class="eyebrow">Events coded correctly</div><div style="font:800 40px var(--f-display)">${rel}%</div></div><div class="card flat"><div class="eyebrow">Pass completion (true)</div><div style="font:800 40px var(--f-display)">${Math.round(pcT)}%</div></div><div class="card flat"><div class="eyebrow">Pass completion (yours)</div><div style="font:800 40px var(--f-display)">${Math.round(pcM)}%</div></div></div>
      <p class="small muted">Differences between observers reduce reliability. Computerised systems linked to video let analysts pause, replay and code accurately.</p><button class="btn primary" data-go>Code another quarter</button>`;
    $('[data-go]', body).onclick = start; };
  body.innerHTML = `<p>Choose a speed and start. Each event shows for a short time — code it before it changes.</p><button class="btn primary" data-go>Start coding</button>`;
  $('[data-go]', body).onclick = start;
  return () => clearTimeout(tm);
});

/* ---- 1.1 Normative data: rate a fitness test result ---- */
const NORMS = { msft: ['Multi-stage fitness test (level)', 'level', 4, 15, 0.1, false, { m: [13, 11, 9, 7], f: [12, 10, 8, 6] }], sar: ['Sit and reach', 'cm', 0, 45, 1, false, { m: [30, 25, 20, 15], f: [33, 28, 23, 18] }],
  vj: ['Vertical jump', 'cm', 20, 80, 1, false, { m: [65, 56, 50, 40], f: [58, 47, 41, 31] }], sp30: ['30 m sprint', 's', 3.6, 6, 0.01, true, { m: [4.0, 4.2, 4.4, 4.6], f: [4.5, 4.6, 4.8, 5.0] }], grip: ['Handgrip dynamometer', 'kg', 10, 75, 1, false, { m: [56, 51, 45, 39], f: [36, 31, 25, 19] }] };
SIMS.normtest = DS('Normative data: rate a test result', 'Choose a field test, sex and a result to see how it compares with <b>illustrative</b> normative bands for 16–19-year-olds. Published tables differ, which is why a test must always be compared with the right norms — or with the athlete’s own previous results.', body => {
  body.innerHTML = `<div class="grid g3">${dsSelect('nt-t', 'Test', Object.entries(NORMS).map(([k, v]) => [k, v[0]]), 'vj')}${dsSelect('nt-s', 'Sex', [['m', 'male'], ['f', 'female']], 'm')}<div id="nt-r"></div></div><div id="nt-out" style="margin-top:14px"></div>`;
  const build = () => { const n = NORMS[val(body, 'nt-t')]; $('#nt-r', body).innerHTML = dsRange('nt-v', 'Result', n[2], n[3], n[4], +((n[2] + n[3]) / 2).toFixed(2), ' ' + n[1]); dsWire($('#nt-r', body), draw); };
  const draw = () => { const n = NORMS[val(body, 'nt-t')], sx = val(body, 'nt-s'), v = val(body, 'nt-v'), b = n[6][sx], low = n[5];
    const names = ['Excellent', 'Above average', 'Average', 'Below average', 'Poor'], idx = low ? b.findIndex(x => v < x) : b.findIndex(x => v >= x), k = idx < 0 ? 4 : idx;
    const cols = ['var(--good)', 'var(--a3)', 'var(--accent)', 'var(--warn)', 'var(--bad)'];
    $('#nt-out', body).innerHTML = `<div class="row" style="align-items:baseline;gap:14px"><span style="font:800 44px var(--f-display);color:${cols[k]}">${names[k].toUpperCase()}</span><span class="mono">${v} ${n[1]}</span></div>
      <div class="tbl"><table><tr><th>Rating</th><th>${sx === 'm' ? 'Male' : 'Female'}</th></tr>${names.map((nm, j) => `<tr style="${j === k ? 'background:var(--accent-soft)' : ''}"><td>${nm}</td><td>${j === 0 ? (low ? '< ' : '≥ ') + b[0] : j === 4 ? (low ? '> ' : '< ') + b[3] : (low ? b[j - 1] + ' – ' + b[j] : b[j] + ' – ' + (b[j - 1] - n[4]).toFixed(n[4] < 1 ? 2 : 0))} ${n[1]}</td></tr>`).join('')}</table></div>`; };
  $('#nt-t', body).onchange = build; $('#nt-s', body).onchange = draw; build();
});

/* ---- 1.2 Lever lab ---- */
SIMS.lever = {
  title: 'Lever lab', h: 360, noPlay: true,
  controls: [{ type: 'seg', id: 'ord', label: 'Order of lever', value: 3, options: [[1, '1st'], [2, '2nd'], [3, '3rd']] },
    { id: 'ea', label: 'Effort arm (cm)', min: 2, max: 40, step: 1, value: 5 }, { id: 'la', label: 'Load arm (cm)', min: 2, max: 40, step: 1, value: 30 }, { id: 'load', label: 'Load (N)', min: 20, max: 300, step: 10, value: 50 }],
  readouts: ['Mechanical advantage', 'Effort needed', 'Speed/range at the load', 'Body example'],
  note: 'Balance of moments: effort × effort arm = load × load arm. A 2nd-order lever always has MA > 1; a 3rd-order lever always has MA < 1 — the body trades force for speed and range of movement.',
  fix(st) { const p = st.p; if (p.ord == 2 && p.ea <= p.la) p.ea = Math.min(40, p.la + 1), p.la = Math.min(p.la, p.ea - 1); if (p.ord == 3 && p.ea >= p.la) p.ea = Math.max(2, p.la - 1); },
  draw(c, W, H, st, C) { this.fix(st); const p = st.p, o = +p.ord, sc = (W - 120) / 82, y = H * 0.48;
    let fx, ex, lx; if (o === 1) { fx = W / 2; ex = fx - p.ea * sc; lx = fx + p.la * sc; } else { fx = 60; ex = fx + p.ea * sc; lx = fx + p.la * sc; }
    const x0 = Math.min(fx, ex, lx) - 14, x1 = Math.max(fx, ex, lx) + 14; CV.rrect(c, x0, y - 6, x1 - x0, 12, 6, C.line, C.ink, 1.5);
    c.fillStyle = hexA(C.a3, .3); c.beginPath(); c.moveTo(fx, y + 7); c.lineTo(fx - 16, y + 36); c.lineTo(fx + 16, y + 36); c.closePath(); c.fill(); c.strokeStyle = C.a3; c.lineWidth = 2; c.stroke(); CV.text(c, 'F', fx, y + 50, C.a3, 14, 'center', 700);
    const E = p.load * p.la / p.ea, eh = clamp(E / 6, 16, 150), lh = clamp(p.load / 6, 16, 150);
    CV.arrow(c, ex, y + 10 + eh, ex, y + 8, C.a1, 3.5); CV.text(c, `E ${Math.round(E)} N`, ex, y + 24 + eh, C.a1, 13, 'center', 700);
    CV.rrect(c, lx - 14, y - 34, 28, 26, 4, hexA(C.a2, .2), C.a2, 2); CV.arrow(c, lx, y - 8, lx, y - 8 + lh * 0.6, C.a2, 3); CV.text(c, `L ${p.load} N`, lx, y - 46, C.a2, 13, 'center', 700);
    CV.line(c, fx, y - 60, ex, y - 60, C.a1, 1.4, [4, 3]); CV.text(c, `effort arm ${p.ea} cm`, (fx + ex) / 2, y - 70, C.a1, 11.5, 'center');
    CV.line(c, fx, y + 64 + (o === 1 ? 0 : 20), lx, y + 64 + (o === 1 ? 0 : 20), C.a2, 1.4, [4, 3]); CV.text(c, `load arm ${p.la} cm`, (fx + lx) / 2, y + 76 + (o === 1 ? 0 : 20), C.a2, 11.5, 'center');
    CV.text(c, ['', 'FULCRUM in the middle', 'LOAD in the middle', 'EFFORT in the middle'][o], W / 2, 26, C.ink, 15, 'center', 700);
  },
  read(st) { this.fix(st); const p = st.p, ma = p.ea / p.la; return [ma.toFixed(2) + (ma > 1 ? ' (advantage)' : ma < 1 ? ' (disadvantage)' : ''), Math.round(p.load * p.la / p.ea) + ' N', ma < 1 ? `${(1 / ma).toFixed(1)}× the effort movement` : 'smaller than at the effort', ['', 'neck; elbow extension', 'ankle plantar flexion', 'biceps curl; kicking'][+p.ord]]; }
};

/* ---- 1.3 Planes and axes sorter ---- */
SIMS.planes = sorterSim('Planes and axes sorter', 'Which plane does each movement happen in? (Sagittal ↔ transverse axis; frontal ↔ frontal/anterior–posterior axis; transverse ↔ longitudinal axis.)', ['Sagittal', 'Frontal', 'Transverse'], [
  ['Front somersault', 0, 'Rotation forwards, dividing left and right; transverse axis.'], ['Cartwheel', 1, 'Sideways rotation; frontal (anterior–posterior) axis.'], ['Full twist in a dive', 2, 'Rotation about the long axis of the body.'],
  ['Bicep curl', 0, 'Elbow flexion/extension.'], ['Star jump (arms and legs out)', 1, 'Abduction at shoulder and hip.'], ['Discus throw — arm swings across the body', 2, 'Horizontal adduction at the shoulder.'],
  ['Squat', 0, 'Hip and knee flexion/extension, ankle dorsiflexion.'], ['Side bend to reach a pass', 1, 'Lateral flexion of the spine.'], ['Golf backswing (trunk turns)', 2, 'Rotation of the spine.'],
  ['Sprint leg action', 0, 'Flexion and extension at hip and knee.'], ['Breaststroke leg kick (legs apart/together)', 1, 'Hip abduction and adduction.'], ['Pirouette', 2, 'Longitudinal axis spin.'],
  ['Sit-up', 0, 'Spinal flexion.'], ['Topspin forehand — forearm turns palm down', 2, 'Pronation at the radio-ulnar joint (about the long axis of the forearm).'], ['Jumping jack arms returning to the sides', 1, 'Shoulder adduction.']
]);

/* ---- 1.4 Joint explorer ---- */
SIMS.joints = explorerSim('Joint explorer', 'Pick a joint type to see its movements, where it is found and how it is used in sport.', [
  ['Hinge', '<b>Movements:</b> flexion and extension only.<br><b>Found:</b> elbow, knee, ankle.<br><b>Sport:</b> knee flexion/extension in a squat; elbow extension in a chest pass; ankle plantar flexion at take-off.', 'synovial'],
  ['Pivot', '<b>Movements:</b> rotation.<br><b>Found:</b> atlas and axis (neck); radio-ulnar joint.<br><b>Sport:</b> turning the head to track the ball; pronation in a topspin forehand.', 'synovial'],
  ['Ball and socket', '<b>Movements:</b> flexion, extension, abduction, adduction, rotation, circumduction — the widest range.<br><b>Found:</b> shoulder, hip.<br><b>Sport:</b> bowling in cricket (circumduction); hip in a hurdler’s trail leg. The shoulder is less stable than the hip.', 'synovial'],
  ['Gliding (plane)', '<b>Movements:</b> small sliding movements.<br><b>Found:</b> between carpals and tarsals; articular processes of the vertebrae.<br><b>Sport:</b> wrist flick in a hockey push or netball shot.', 'synovial'],
  ['Ellipsoid (condyloid)', '<b>Movements:</b> flexion, extension, abduction, adduction (and circumduction).<br><b>Found:</b> wrist (radiocarpal joint).<br><b>Sport:</b> wrist flexion in a basketball set shot.', 'synovial'],
  ['Cartilaginous', '<b>Movement:</b> slight.<br><b>Found:</b> between vertebrae (intervertebral discs), pubic symphysis.<br><b>Sport:</b> small movements add up to spinal flexion in a pike or a sit-up; discs absorb shock on landing.', 'slightly movable'],
  ['Fibrous', '<b>Movement:</b> none.<br><b>Found:</b> sutures of the cranium.<br><b>Sport:</b> protection of the brain, e.g. heading a ball or in collisions.', 'immovable']
]);

/* ---- 1.5 Fibre-type mixer and recruitment ---- */
SIMS.fibremix = {
  title: 'Fibre types and recruitment', h: 380, noPlay: true,
  controls: [{ id: 'pI', label: '% type I (slow twitch)', min: 10, max: 90, step: 1, value: 50, fmt: v => v + '%' }, { id: 'int', label: 'Exercise intensity', min: 0, max: 100, step: 1, value: 30, fmt: v => v + '%' }],
  readouts: ['Fibres recruited', 'Force', 'Fatigue resistance', 'Suited to'],
  note: 'Fibres are recruited in order: type I first; type IIa join at moderate intensity; type IIb only near maximal effort (the size principle). Fibre proportions are mainly genetic.',
  init(st) { let seed = 7; const r = () => (seed = (seed * 9301 + 49297) % 233280) / 233280; st.f = Array.from({ length: 260 }, () => ({ a: r() * Math.PI * 2, d: Math.sqrt(r()), u: r(), v: r() })); },
  types(st) { const pI = st.p.pI / 100, rest = 1 - pI; return st.f.map(f => f.u < pI ? 0 : f.u < pI + rest * 0.55 ? 1 : 2); },
  draw(c, W, H, st, C) { const cx = Math.min(W * 0.32, 190), cy = H / 2, R = Math.min(cx - 20, H / 2 - 20), I = st.p.int / 100, ty = this.types(st);
    CV.circle(c, cx, cy, R + 8, C.surface, C.ink, 2);
    const col = [C.a1, C.a4, C.a2], thr = [0, 0.4, 0.75];
    st.f.forEach((f, i) => { const t = ty[i], on = I > thr[t] && f.v < Math.min(1, (I - thr[t]) / (1 - thr[t]) * 1.6 + (t === 0 ? 0.25 : 0)); const x = cx + R * f.d * Math.cos(f.a), y = cy + R * f.d * Math.sin(f.a); CV.circle(c, x, y, 6, on ? col[t] : hexA(col[t], .15), hexA(col[t], .6), 1); });
    const x0 = cx + R + 50; ['Type I · slow oxidative', 'Type IIa · fast oxidative glycolytic', 'Type IIb · fast glycolytic'].forEach((n, i) => { CV.circle(c, x0, 60 + i * 30, 7, col[i]); CV.text(c, n, x0 + 16, 60 + i * 30, C.ink, 12.5); });
    CV.text(c, 'bright = recruited (active)', x0, 160, C.muted, 11.5);
    const bw = Math.max(60, W - x0 - 30); ['force', 'fatigue resistance'].forEach((n, i) => { const v = i ? this.fr(st) : this.force(st); CV.text(c, n, x0, 200 + i * 44, C.muted, 11.5); CV.rrect(c, x0, 210 + i * 44, bw, 12, 6, C.line); CV.rrect(c, x0, 210 + i * 44, bw * v, 12, 6, i ? C.a3 : C.a1); });
  },
  force(st) { const ty = this.types(st), I = st.p.int / 100, w = [0.5, 1, 1.4], thr = [0, 0.4, 0.75]; let f = 0, m = 0; st.f.forEach((q, i) => { const t = ty[i]; m += w[t]; if (I > thr[t] && q.v < Math.min(1, (I - thr[t]) / (1 - thr[t]) * 1.6 + (t === 0 ? .25 : 0))) f += w[t]; }); return f / m; },
  fr(st) { return clamp(0.15 + 0.8 * st.p.pI / 100, 0, 1); },
  read(st) { const ty = this.types(st), I = st.p.int / 100; return [I < .4 ? 'type I only' : I < .75 ? 'type I + IIa' : 'I, IIa and IIb', Math.round(this.force(st) * 100) + '% of max', st.p.pI > 65 ? 'high' : st.p.pI > 40 ? 'moderate' : 'low', st.p.pI > 70 ? 'marathon, triathlon' : st.p.pI > 45 ? '800–1500 m, games' : 'sprints, throws, lifting']; }
};

/* ---- 1.5 Muscle finder ---- */
SIMS.muscles = explorerSim('Muscle finder', 'The fourteen muscles in the specification: what each does, its antagonist, and a sporting example with the type of contraction.', [
  ['Pectoralis major', 'Horizontal adduction and flexion of the shoulder. <b>Antagonist:</b> posterior deltoid/trapezius (horizontal abduction). <b>Example:</b> chest pass — concentric; lowering in a press-up — eccentric.'],
  ['Deltoid', 'Abduction (and flexion/extension) of the shoulder. <b>Antagonist:</b> latissimus dorsi. <b>Example:</b> raising arms for a volleyball block — concentric.'],
  ['Trapezius', 'Elevates, retracts and stabilises the scapula; a common <b>fixator</b>. <b>Example:</b> holding the shoulders firm in a scrum — isometric.'],
  ['Latissimus dorsi', 'Adduction and extension of the shoulder. <b>Antagonist:</b> deltoid. <b>Example:</b> pull phase of front crawl; pull-up — concentric.'],
  ['Erector spinae', 'Extension of the spine; posture. <b>Antagonist:</b> abdominals. <b>Example:</b> straightening in a deadlift — concentric.'],
  ['Abdominals', 'Flexion of the spine. <b>Antagonist:</b> erector spinae. <b>Example:</b> sit-up up phase — concentric; plank — isometric.'],
  ['Biceps brachii', 'Flexion of the elbow (and supination). <b>Antagonist:</b> triceps. <b>Example:</b> upward curl — concentric; lowering — eccentric.'],
  ['Triceps brachii', 'Extension of the elbow. <b>Antagonist:</b> biceps. <b>Example:</b> upward phase of a press-up — concentric; shot put release.'],
  ['Gluteus maximus', 'Extension (and abduction) of the hip. <b>Antagonist:</b> hip flexors (iliopsoas). <b>Example:</b> driving out of the blocks — concentric.'],
  ['Quadriceps', 'Extension of the knee. <b>Antagonist:</b> hamstrings. <b>Example:</b> kicking — concentric; landing or lowering into a squat — eccentric.'],
  ['Hamstrings', 'Flexion of the knee and extension of the hip. <b>Antagonist:</b> quadriceps. <b>Example:</b> recovery phase of the running leg — concentric.'],
  ['Tibialis anterior', 'Dorsiflexion of the ankle. <b>Antagonist:</b> gastrocnemius/soleus. <b>Example:</b> lifting the toes in the recovery phase of running.'],
  ['Gastrocnemius', 'Plantar flexion (and knee flexion). <b>Antagonist:</b> tibialis anterior. <b>Example:</b> take-off in a jump — concentric; landing — eccentric.'],
  ['Soleus', 'Plantar flexion, especially with the knee bent; mostly type I fibres. <b>Example:</b> long-distance running.']
]);

/* ---- 1.6 Interval session designer ---- */
SIMS.interval = DS('Interval session designer', 'Set the work time, intensity, recovery and reps. The tool estimates the predominant energy system and checks whether the recovery suits it — the way you should justify a session in an exam answer.', body => {
  body.innerHTML = `<div class="grid g2">${dsRange('iv-w', 'Work period', 5, 300, 5, 10, ' s')}${dsRange('iv-i', 'Intensity', 50, 100, 5, 95, '%')}${dsRange('iv-r', 'Recovery', 10, 300, 10, 60, ' s')}${dsRange('iv-n', 'Repetitions', 2, 20, 1, 8, '')}</div><div id="iv-out" style="margin-top:12px"></div>`;
  dsWire(body, () => { const w = val(body, 'iv-w'), i = val(body, 'iv-i'), r = val(body, 'iv-r'), n = val(body, 'iv-n');
    const sys = w <= 10 && i >= 90 ? 'ATP-PC' : w <= 120 && i >= 75 ? 'anaerobic glycolysis (lactic acid)' : 'aerobic', ratio = r / w;
    const ok = sys === 'ATP-PC' ? ratio >= 5 : sys.startsWith('anaerobic') ? ratio >= 1.5 && ratio <= 4 : ratio <= 1.5;
    const advice = sys === 'ATP-PC' ? (ok ? 'Recovery long enough for PC to be largely restored (≈ 2–3 min for full recovery).' : 'Recovery too short: PC will not restore, so later reps become lactic. Aim for at least 1:5.') : sys.startsWith('anaerobic') ? (ok ? 'Good: incomplete recovery trains lactate tolerance and buffering.' : ratio < 1.5 ? 'Very short recovery — the session will drift aerobic/fatigue quickly. Try 1:2–1:3.' : 'Recovery is long; fine for quality, but less lactate tolerance stress.') : (ok ? 'Short recoveries keep heart rate in the aerobic zone.' : 'Long rests for aerobic work — reduce recovery to about 1:1.');
    const tot = (w + r) * n; let bars = ''; for (let k = 0; k < n; k++) bars += `<i style="display:inline-block;height:28px;width:${w / tot * 100}%;background:var(--a1);opacity:${i / 100}"></i><i style="display:inline-block;height:28px;width:${r / tot * 100}%;background:var(--line)"></i>`;
    $('#iv-out', body).innerHTML = `<div style="border-radius:8px;overflow:hidden;white-space:nowrap;font-size:0">${bars}</div><div class="tbl" style="margin-top:10px"><table><tr><td>Work : rest</td><td class="mono">1 : ${ratio.toFixed(1)}</td></tr><tr><td>Predominant system</td><td><b>${sys}</b></td></tr><tr><td>Session time</td><td class="mono">${Math.floor(tot / 60)} min ${tot % 60} s</td></tr></table></div><div class="box ${ok ? 'good' : 'warn'}"><b class="lbl">${ok ? 'Well designed' : 'Check the recovery'}</b><p>${advice}</p></div>`; });
});

/* ---- 1.6 Components of fitness sorter ---- */
SIMS.fitcomp = sorterSim('Health-related or skill-related?', 'Sort each component of fitness (with its test).', ['Health-related', 'Skill-related'], [
  ['Aerobic capacity — multi-stage fitness test', 0, 'Ability to take in, transport and use oxygen.'], ['Muscular strength — handgrip dynamometer / 1RM', 0, 'Maximum force in one contraction.'], ['Muscular endurance — press-up test', 0, 'Repeated contractions without fatigue.'],
  ['Body composition — skinfold callipers', 0, 'Proportions of fat, muscle and bone.'], ['Flexibility — sit and reach', 0, 'Range of movement at a joint.'], ['Agility — Illinois agility run', 1, 'Changing direction quickly and in control.'],
  ['Balance — stork stand', 1, 'Keeping the centre of mass over the base of support.'], ['Co-ordination — alternate-hand wall toss', 1, 'Moving body parts together smoothly.'], ['Speed — 30 m sprint', 1, 'Moving quickly from one point to another.'],
  ['Power — vertical jump', 1, 'Strength × speed.'], ['Reaction time — ruler drop test', 1, 'Time from stimulus to start of response.']
]);

/* ---- 1.7 Periodisation planner ---- */
SIMS.periodise = DS('Periodisation planner', 'Move the main competition and see how the training year is organised into phases. Add a second peak for double periodisation (e.g. indoor and outdoor seasons).', body => {
  body.innerHTML = `<div class="grid g2">${dsRange('pz-p', 'Main competition (week)', 20, 48, 1, 38, '')}${dsRange('pz-q', 'Second peak (week, 0 = none)', 0, 30, 1, 0, '')}</div><div id="pz-o"></div>`;
  dsWire(body, () => { const pk1 = val(body, 'pz-p'), pk2 = val(body, 'pz-q'), W = 620, X = w => 20 + w / 52 * 580; let s = '';
    const phases = []; const addPeak = (p, lenPrep) => { phases.push(['General prep', Math.max(0, p - lenPrep), p - Math.round(lenPrep * 0.45), 'var(--a3)'], ['Specific prep', p - Math.round(lenPrep * 0.45), p - 4, 'var(--a3)'], ['Competition + taper', p - 4, p + 1, 'var(--a1)']); };
    if (pk2 && pk2 < pk1 - 10) { addPeak(pk2, Math.min(pk2, 16)); addPeak(pk1, Math.min(pk1 - pk2 - 2, 14)); } else addPeak(pk1, Math.min(pk1, 26));
    phases.push(['Transition', pk1 + 1, 52, 'var(--a2)']);
    phases.forEach(([n, a, b, c]) => { if (b > a) s += `<rect x="${X(a)}" y="120" width="${X(b) - X(a) - 1}" height="30" rx="4" fill="${c}" fill-opacity=".3"/><text x="${(X(a) + X(b)) / 2}" y="140" font-size="10.5" text-anchor="middle" fill="var(--ink)">${b - a > 4 ? n : ''}</text>`; });
    [pk1, pk2].filter(Boolean).forEach(p => s += `<line x1="${X(p)}" y1="30" x2="${X(p)}" y2="160" stroke="var(--a1)" stroke-width="2" stroke-dasharray="4 3"/><text x="${X(p)}" y="24" font-size="11" text-anchor="middle" fill="var(--a1)">peak wk ${p}</text>`);
    let vol = '', inten = ''; for (let w = 0; w <= 52; w++) { const d1 = Math.min(...[pk1, pk2].filter(Boolean).map(p => Math.abs(w - p))); const I = 0.35 + 0.6 * Math.exp(-d1 / 7), V = w > pk1 ? 0.3 : 0.9 - 0.55 * Math.exp(-d1 / 6); vol += (w ? 'L' : 'M') + X(w) + ',' + (110 - V * 70); inten += (w ? 'L' : 'M') + X(w) + ',' + (110 - I * 70); }
    s += `<path d="${vol}" fill="none" stroke="var(--a3)" stroke-width="2.4"/><path d="${inten}" fill="none" stroke="var(--a1)" stroke-width="2.4"/><text x="24" y="44" font-size="11" fill="var(--a3)">volume</text><text x="24" y="58" font-size="11" fill="var(--a1)">intensity</text>`;
    for (let w = 0; w <= 52; w += 4) s += `<text x="${X(w)}" y="172" font-size="10" text-anchor="middle" fill="var(--muted)">${w}</text>`;
    $('#pz-o', body).innerHTML = `<svg viewBox="0 0 ${W} 180" width="100%" style="max-width:100%">${s}</svg><p class="small muted">Each coloured block is a mesocycle; each week is a microcycle; the whole year is the macrocycle. Volume falls and intensity rises into each peak; the taper cuts volume in the last 1–3 weeks.</p>`; });
});

/* ---- 1.7 Altitude training model ---- */
SIMS.altitude = {
  title: 'Altitude training model', h: 340, noPlay: true,
  controls: [{ id: 'alt', label: 'Training altitude (m)', min: 0, max: 4000, step: 100, value: 2400 }, { id: 'days', label: 'Days at altitude', min: 0, max: 35, step: 1, value: 21 }, { id: 'back', label: 'Days since returning to sea level', min: 0, max: 42, step: 1, value: 7 }],
  readouts: ['O₂ partial pressure at altitude', 'Red cell mass change', 'Effect at sea level', 'Drawback to watch'],
  note: 'A simplified model: lower partial pressure of O₂ → EPO → more red blood cells over weeks; the gain fades after returning. Real responses vary widely between athletes.',
  calc(p) { const pO2 = 21.2 * Math.exp(-p.alt / 8400), stim = clamp((p.alt - 1200) / 1800, 0, 1.3), gain = 9 * stim * (1 - Math.exp(-p.days / 14)), now = gain * Math.exp(-p.back / 21); return { pO2, gain, now }; },
  draw(c, W, H, st, C) { const r = this.calc(st.p), x0 = 60, bw = W - 120;
    CV.text(c, 'Partial pressure of O₂ (kPa)', x0, 36, C.muted, 12); CV.rrect(c, x0, 46, bw, 16, 8, C.line); CV.rrect(c, x0, 46, bw * r.pO2 / 21.2, 16, 8, C.info); CV.text(c, r.pO2.toFixed(1) + ' kPa (sea level 21.2)', x0 + 6, 76, C.ink, 12);
    CV.text(c, 'Red blood cell mass: gain at the end of the camp', x0, 116, C.muted, 12); CV.rrect(c, x0, 126, bw, 16, 8, C.line); CV.rrect(c, x0, 126, bw * r.gain / 12, 16, 8, C.a1); CV.text(c, '+' + r.gain.toFixed(1) + '%', x0 + 6, 156, C.ink, 12);
    CV.text(c, 'Remaining benefit at sea level now', x0, 196, C.muted, 12); CV.rrect(c, x0, 206, bw, 16, 8, C.line); CV.rrect(c, x0, 206, bw * r.now / 12, 16, 8, C.a3); CV.text(c, '+' + r.now.toFixed(1) + '% red cell mass', x0 + 6, 236, C.ink, 12);
    let d = ''; for (let k = 0; k <= 42; k++) { const v = r.gain * Math.exp(-k / 21), x = x0 + k / 42 * bw, y = H - 30 - v / 12 * 60; d += (k ? 'L' : 'M') + x + ',' + y; } c.strokeStyle = C.a3; c.lineWidth = 2; c.stroke(new Path2D(d)); CV.circle(c, x0 + st.p.back / 42 * bw, H - 30 - r.now / 12 * 60, 5, C.a3); CV.text(c, 'days after return →', x0 + bw, H - 16, C.muted, 11, 'right');
  },
  read(st) { const r = this.calc(st.p); return [r.pO2.toFixed(1) + ' kPa', '+' + r.gain.toFixed(1) + '%', r.now > 3 ? 'meaningful O₂-carrying boost' : r.now > 1 ? 'small boost' : 'little or none left', st.p.alt > 3000 ? 'altitude sickness; much lower training intensity' : st.p.alt > 1800 ? 'lower training intensity; dehydration' : 'altitude too low for a strong stimulus']; }
};

/* ---- 1.8 Energy systems over time ---- */
SIMS.energy = {
  title: 'Energy systems through a race', h: 360,
  controls: [{ id: 'I', label: 'Intensity (% of maximum)', min: 40, max: 100, step: 5, value: 100, fmt: v => v + '%' }, { id: 'T', label: 'Time into exercise (s)', min: 1, max: 180, step: 1, value: 8 }],
  readouts: ['ATP-PC', 'Anaerobic glycolysis', 'Aerobic', 'Predominant'],
  note: 'Press play to run the clock. All three systems contribute all the time; intensity is the main factor deciding which predominates. (Illustrative model.)',
  share(t, I) { const i = I / 100, pc = Math.exp(-Math.pow(t / 10, 2)) * i * i, gl = (1 - Math.exp(-t / 15)) * Math.exp(-t / 90) * i * i * i * 1.2, ae = (1 - Math.exp(-t / 25)) * (1.1 - 0.6 * i) + 0.05, s = pc + gl + ae; return [pc / s, gl / s, ae / s]; },
  step(st, dt) { st.p.T = st.p.T >= 180 ? 1 : Math.min(180, st.p.T + dt * 12); const inp = document.getElementById('sc-energy-T'); if (inp) { inp.value = Math.round(st.p.T); inp.style.setProperty('--p', (st.p.T / 180 * 100) + '%'); inp.previousElementSibling.querySelector('output').textContent = Math.round(st.p.T); } },
  init(st) { st.run = false; },
  draw(c, W, H, st, C) { const b = { x: 60, y: 30, w: W - 90, h: H - 90 }, cols = [C.a1, C.a4, C.a3];
    const X = t => b.x + t / 180 * b.w, Y = v => b.y + b.h - v * b.h;
    CV.rrect(c, b.x - 8, b.y - 8, b.w + 16, b.h + 26, 8, C.surface, C.line, 1);
    for (let t = 1; t <= 180; t += 1) { const sh = this.share(t, st.p.I); let acc = 0; sh.forEach((v, k) => { c.fillStyle = hexA(cols[k], .75); c.fillRect(X(t - 1), Y(acc + v), X(t) - X(t - 1) + .6, v * b.h); acc += v; }); }
    CV.line(c, X(st.p.T), b.y, X(st.p.T), b.y + b.h, C.ink, 2); [10, 60, 120, 180].forEach(t => CV.text(c, t + ' s', X(t), b.y + b.h + 14, C.muted, 11, 'center'));
    ['ATP-PC', 'anaerobic glycolysis', 'aerobic'].forEach((n, k) => { CV.rrect(c, b.x + k * 150, H - 26, 12, 12, 3, cols[k]); CV.text(c, n, b.x + 18 + k * 150, H - 20, C.ink, 12); });
    CV.text(c, '% of energy', b.x - 6, b.y - 14, C.muted, 11);
  },
  read(st) { const s = this.share(st.p.T, st.p.I), k = s.indexOf(Math.max(...s)); return s.map(v => Math.round(v * 100) + '%').concat([['ATP-PC (e.g. 60 m, shot)', 'anaerobic glycolysis (e.g. 400 m)', 'aerobic (e.g. 1500 m +)'][k]]); }
};

/* ---- 1.8 Lactate threshold ---- */
SIMS.threshold = {
  title: 'Lactate threshold and OBLA', h: 330, noPlay: true,
  controls: [{ type: 'seg', id: 'lvl', label: 'Training status', value: 1, options: [[0, 'untrained'], [1, 'club'], [2, 'elite endurance']] }, { id: 'I', label: 'Running intensity (% VO₂max)', min: 30, max: 100, step: 1, value: 70, fmt: v => v + '%' }],
  readouts: ['Blood lactate', 'OBLA (4 mmol/L) at', 'Zone', 'Sustainable pace?'],
  note: 'Training raises the intensity at which lactate starts to accumulate, so a higher % of VO₂max can be sustained. The dashed line is OBLA (4 mmol/L).',
  T(st) { return [52, 64, 78][+st.p.lvl]; },
  lac(I, T) { return 1 + Math.exp((I - T) / 9); },
  draw(c, W, H, st, C) { const T = this.T(st); const pl = CV.plot(c, C, { x: 60, y: 24, w: W - 90, h: H - 70 }, { xr: [30, 100], yr: [0, 12], xl: 'intensity (% VO₂max)', yl: 'blood lactate (mmol/L)',
      series: [[52, C.muted], [64, C.muted], [78, C.muted]].map(([t, col]) => ({ f: I => this.lac(I, t), col: t === T ? C.a1 : hexA(col, .4), w: t === T ? 3 : 1.5 })).concat([{ pts: [[30, 4], [100, 4]], col: C.a4, dash: [6, 4], w: 1.5 }]), dots: [[st.p.I, this.lac(st.p.I, T), C.a1, 6]] });
    CV.text(c, 'OBLA', pl.X(96), pl.Y(4) - 8, C.a4, 11, 'center');
  },
  read(st) { const T = this.T(st), L = this.lac(st.p.I, T), obla = T + 9 * Math.log(3); return [L.toFixed(1) + ' mmol/L', obla.toFixed(0) + '% VO₂max', L < 2 ? 'aerobic, steady' : L < 4 ? 'threshold zone' : 'above OBLA', L < 4 ? 'yes — for a long time' : 'no — fatigue within minutes']; }
};

/* ---- 1.9 Fuel use ---- */
SIMS.fuel = {
  title: 'Carbohydrate or fat? Fuel use', h: 330, noPlay: true,
  controls: [{ type: 'seg', id: 'tr', label: 'Performer', value: 0, options: [[0, 'untrained'], [1, 'trained endurance']] }, { id: 'I', label: 'Intensity (% VO₂max)', min: 20, max: 100, step: 1, value: 55, fmt: v => v + '%' }, { id: 'D', label: 'Duration so far (min)', min: 0, max: 180, step: 5, value: 20 }],
  readouts: ['Carbohydrate', 'Fat', 'Protein', 'Crossover point'],
  note: 'At low intensity fat is the main fuel; as intensity rises carbohydrate takes over. As duration increases and glycogen falls, fat use rises. Trained athletes use more fat at the same intensity, sparing glycogen.',
  X(st) { return (st.p.tr == 1 ? 60 : 48) + st.p.D / 180 * 12; },
  carb(I, X) { return 0.95 / (1 + Math.exp(-(I - X) / 9)) + 0.03; },
  draw(c, W, H, st, C) { const X = this.X(st), b = { x: 60, y: 24, w: W - 90, h: H - 70 };
    const pl = CV.plot(c, C, b, { xr: [20, 100], yr: [0, 100], xl: 'intensity (% VO₂max)', yl: '% of energy', fills: [{ col: hexA(C.a4, .35), pts: Array.from({ length: 81 }, (_, i) => [20 + i, 100]) }, { col: hexA(C.a1, .55), pts: Array.from({ length: 81 }, (_, i) => [20 + i, this.carb(20 + i, X) * 100]) }], series: [{ pts: [[X, 0], [X, 100]], col: C.ink, dash: [5, 4], w: 1.2 }], dots: [[st.p.I, this.carb(st.p.I, X) * 100, C.ink, 6]] });
    CV.text(c, 'carbohydrate', pl.X(88), pl.Y(50), '#fff', 12, 'center', 700); CV.text(c, 'fat', pl.X(28), pl.Y(80), C.ink, 12, 'center', 700);
  },
  read(st) { const X = this.X(st), cb = this.carb(st.p.I, X), pr = 0.03; return [Math.round((cb - 0.015) * 100) + '%', Math.round((1 - cb - 0.015) * 100) + '%', '≈ 2–5%', Math.round(X) + '% VO₂max']; }
};

/* ---- 1.9 Hydration calculator ---- */
SIMS.hydration = DS('Hydration planner', 'Estimate fluid loss during a session and whether it will affect performance, then plan rehydration. Sweat rates vary with temperature, intensity and the individual.', body => {
  body.innerHTML = `<div class="grid g2">${dsRange('hy-m', 'Body mass', 45, 120, 1, 70, ' kg')}${dsRange('hy-t', 'Duration', 15, 180, 5, 90, ' min')}${dsRange('hy-s', 'Sweat rate', 0.3, 2.5, 0.1, 1.2, ' L/h')}${dsRange('hy-d', 'Drinking every 15 min', 0, 350, 25, 150, ' ml')}</div>${dsSelect('hy-e', 'Event type', [['team', 'team game (80 min)'], ['endurance', 'endurance event'], ['short', 'short session, energy not needed'], ['after', 'recovery after training']], 'team')}<div id="hy-o" style="margin-top:12px"></div>`;
  dsWire(body, () => { const m = val(body, 'hy-m'), t = val(body, 'hy-t'), sr = val(body, 'hy-s'), dr = val(body, 'hy-d'), ev = val(body, 'hy-e');
    const lost = sr * t / 60, drunk = dr * Math.floor(t / 15) / 1000, net = Math.max(0, lost - drunk), pc = net / m * 100;
    const drink = { team: ['Isotonic', 'fluid and energy (6–8 g carbohydrate/100 ml)'], endurance: ['Isotonic (or hypotonic early on)', 'fluid plus 30–60 g carbohydrate per hour'], short: ['Hypotonic or water', 'fastest rehydration with little energy'], after: ['Hypertonic / recovery drink + water', 'glycogen replacement; rehydrate with sodium'] }[ev];
    $('#hy-o', body).innerHTML = hbar('Fluid lost', lost, 5, 'var(--info)', lost.toFixed(2) + ' L') + hbar('Fluid drunk', drunk, 5, 'var(--good)', drunk.toFixed(2) + ' L') + hbar('Body mass lost', pc, 5, pc >= 2 ? 'var(--bad)' : 'var(--warn)', pc.toFixed(1) + '%', 2) +
      `<div class="box ${pc >= 2 ? 'warn' : 'good'}"><b class="lbl">${pc >= 2 ? 'Performance likely impaired' : 'Within safe limits'}</b><p>${pc >= 2 ? 'Losing ≥ 2% of body mass reduces plasma volume and stroke volume, raises heart rate and core temperature, and harms decision making.' : 'Keep drinking to plan; check urine colour.'} After the session drink about <b>${(net * 1.5).toFixed(1)} L</b> (1.5 × the mass lost). Suggested drink: <b>${drink[0]}</b> — ${drink[1]}.</p></div>`; });
});

/* ---- 1.9 Glycaemic index ---- */
const GI_FOODS = [['Glucose drink', 100], ['Sports drink', 78], ['White bread', 75], ['Baked potato', 85], ['Jelly sweets', 78], ['Banana (ripe)', 62], ['Porridge oats', 58], ['Basmati rice', 58], ['Wholegrain bread', 51], ['Pasta', 45], ['Apple', 38], ['Lentils', 30]];
SIMS.gi = {
  title: 'Glycaemic index: blood glucose after eating', h: 340, noPlay: true,
  controls: [{ type: 'seg', id: 'a', label: 'Food A', value: 0, options: GI_FOODS.slice(0, 6).map((f, i) => [i, f[0]]) }, { type: 'seg', id: 'b', label: 'Food B', value: 9, options: GI_FOODS.slice(6).map((f, i) => [i + 6, f[0]]) }],
  readouts: ['Food A (GI)', 'Food B (GI)', 'Best before competition', 'Best straight after'],
  note: 'High GI (≥ 70) raises blood glucose quickly and can cause a rebound dip; low GI (≤ 55) releases glucose slowly and steadily — ideal 2–4 hours before competition. (Illustrative curves.)',
  curve(gi) { return t => 4.6 + (gi / 100) * 3.6 * Math.exp(-Math.pow((t - (20 + (100 - gi) * 0.6)) / (14 + (100 - gi) * 0.5), 2)) - (gi > 70 ? (gi - 70) / 30 * 0.9 * Math.exp(-Math.pow((t - 95) / 20, 2)) : 0); },
  draw(c, W, H, st, C) { const A = GI_FOODS[+st.p.a], B = GI_FOODS[+st.p.b];
    CV.plot(c, C, { x: 60, y: 24, w: W - 90, h: H - 70 }, { xr: [0, 150], yr: [3, 9], xl: 'minutes after eating', yl: 'blood glucose (mmol/L)', series: [{ f: this.curve(A[1]), col: C.a1, w: 3 }, { f: this.curve(B[1]), col: C.a3, w: 3 }, { pts: [[0, 4.6], [150, 4.6]], col: C.muted, dash: [5, 4], w: 1 }] });
    CV.text(c, `A: ${A[0]} (GI ${A[1]})`, W - 40, 40, C.a1, 12.5, 'right', 700); CV.text(c, `B: ${B[0]} (GI ${B[1]})`, W - 40, 60, C.a3, 12.5, 'right', 700);
  },
  read(st) { const A = GI_FOODS[+st.p.a], B = GI_FOODS[+st.p.b], lo = A[1] < B[1] ? A : B, hi = A[1] < B[1] ? B : A; const cat = g => g >= 70 ? 'high' : g <= 55 ? 'low' : 'medium'; return [`${A[1]} — ${cat(A[1])}`, `${B[1]} — ${cat(B[1])}`, lo[0] + ' (3–4 h before)', hi[0] + ' (with protein)']; }
};
