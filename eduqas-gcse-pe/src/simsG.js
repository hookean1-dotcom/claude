/* ==========================================================
   GCSE explorations (Stride · Eduqas GCSE PE). Sorters, explorers, tools and canvas models.
   Some A level explorations are replaced with GCSE wording (planes/axes, the nine muscles, joints).
   ========================================================== */

/* ---------- Key area 1 ---------- */
const FOODS = [['Pasta (100 g cooked)', 160, 'carb'], ['Banana', 105, 'carb'], ['Porridge bowl', 220, 'carb'], ['Chicken breast', 200, 'protein'], ['Eggs (2)', 150, 'protein'], ['Chocolate bar', 250, 'fat'], ['Chips (portion)', 380, 'fat'], ['Burger and bun', 520, 'fat'], ['Sports drink (500 ml)', 120, 'carb'], ['Apple', 80, 'carb'], ['Fizzy drink (can)', 140, 'carb'], ['Salad with tuna', 260, 'protein']];
const ACTS = [['Walking', 4.5], ['Jogging', 9], ['Running fast', 13], ['Swimming', 9], ['Cycling', 8], ['Football', 9], ['Netball', 7], ['Gaming / TV', 1.3]];
SIMS.energyin = DS('Energy balance calculator', 'Build a day: add food and drink (energy in) and activity (energy out, on top of the energy your body uses at rest). See whether the balance is positive, negative or balanced. Values are typical estimates.', body => {
  const eat = {}, act = {};
  const draw = () => { const bmr = val(body, 'eb-b'), inE = Object.entries(eat).reduce((a, [i, n]) => a + FOODS[i][1] * n, 0) + val(body, 'eb-m'), outA = Object.entries(act).reduce((a, [i, m]) => a + ACTS[i][1] * m, 0), out = bmr + outA, d = Math.round(inE - out);
    $('#eb-o', body).innerHTML = hbar('Energy in', inE, 4500, 'var(--a4)', Math.round(inE) + ' kcal') + hbar('Energy out', out, 4500, 'var(--a5)', Math.round(out) + ' kcal') +
      `<div class="row" style="align-items:baseline;gap:12px;margin-top:10px"><span style="font:800 36px var(--f-display);color:${Math.abs(d) < 100 ? 'var(--a3)' : d > 0 ? 'var(--a1)' : 'var(--a2)'}">${Math.abs(d) < 100 ? 'BALANCED' : d > 0 ? 'POSITIVE' : 'NEGATIVE'}</span><span class="mono">${d > 0 ? '+' : ''}${d} kcal</span></div><p class="small muted">${Math.abs(d) < 100 ? 'Weight will stay about the same.' : d > 0 ? 'Energy in > energy out: the extra is stored as fat → weight gain over time.' : 'Energy out > energy in: stored energy is used → weight loss over time.'}</p>`; };
  body.innerHTML = `<div class="grid g2"><div><div class="eyebrow">Energy in · tap to add</div><div class="opt-grid" style="margin-top:6px">${FOODS.map((f, i) => `<button class="pickb" data-f="${i}">${f[0]} <span class="small muted">${f[1]}</span> <b data-fn="${i}"></b></button>`).join('')}</div>${dsRange('eb-m', 'Main meals (kcal)', 0, 2500, 50, 1500, '')}</div>
    <div><div class="eyebrow">Energy out</div>${dsRange('eb-b', 'Resting energy use (kcal)', 1200, 2000, 10, 1500, '')}${ACTS.map((a, i) => dsRange('eb-a' + i, `${a[0]} (min) · ${a[1]} kcal/min`, 0, 180, 5, i === 7 ? 120 : 0, '')).join('')}<button class="btn sm ghost" data-clr>Clear food</button></div></div><div id="eb-o" style="margin-top:14px"></div>`;
  $$('[data-f]', body).forEach(b => b.onclick = () => { const i = +b.dataset.f; eat[i] = (eat[i] || 0) + 1; $(`[data-fn="${i}"]`, body).textContent = '×' + eat[i]; b.classList.add('on'); sfx.tick(); draw(); });
  $('[data-clr]', body).onclick = () => { Object.keys(eat).forEach(k => delete eat[k]); $$('[data-fn]', body).forEach(x => x.textContent = ''); $$('[data-f]', body).forEach(x => x.classList.remove('on')); draw(); };
  dsWire(body, () => { ACTS.forEach((_, i) => act[i] = val(body, 'eb-a' + i)); draw(); });
});
SIMS.nutrisort = sorterSim('Which nutrient?', 'Choose the nutrient that best matches each description.', ['Carbohydrate', 'Protein', 'Fat', 'Vitamins / minerals', 'Water'], [
  ['Main source of energy for a 400 m race', 0, 'Carbohydrate fuels high-intensity work.'], ['Repairing muscle after a hard gym session', 1, 'Growth and repair.'], ['Insulation and energy for a long, slow walk', 2, 'Fat: low-intensity fuel and insulation.'],
  ['Calcium for strong bones', 3, 'Minerals — bone growth.'], ['Controlling body temperature through sweat', 4, 'Hydration.'], ['Stored as glycogen in muscles and liver', 0, 'Glycogen is stored carbohydrate.'],
  ['Iron for red blood cells', 3, 'Mineral needed to carry oxygen.'], ['Vitamin C for the immune system', 3, 'Keeps the body healthy.'], ['Eggs, fish, chicken, beans', 1, 'Protein sources.'],
  ['Pasta, rice, bread, potatoes', 0, 'Carbohydrate sources.'], ['Prevents blood becoming thicker during a match', 4, 'Plasma volume maintained.'], ['Protects vital organs with a cushioning layer', 2, 'Fat around organs.']
]);
const SPORTS = { 'Marathon runner': [10, 9, 3, 4, 8, 2, 3, 1, 2, 3, 1], 'Sprinter (100 m)': [3, 4, 8, 5, 6, 3, 10, 10, 6, 5, 10], 'Netball centre': [8, 7, 5, 6, 6, 10, 8, 6, 9, 7, 8], 'Gymnast': [4, 7, 8, 10, 7, 7, 5, 9, 9, 10, 5], 'Rugby prop': [6, 7, 10, 4, 4, 3, 4, 8, 5, 6, 4], 'Table tennis player': [5, 5, 4, 6, 5, 9, 7, 5, 10, 6, 10], 'Basketball player': [7, 6, 7, 6, 6, 8, 8, 9, 9, 6, 8] };
const COMPS = ['CV endurance', 'Muscular endurance', 'Strength', 'Flexibility', 'Body composition', 'Agility', 'Speed', 'Power', 'Co-ordination', 'Balance', 'Reaction time'];
SIMS.sportprofile = DS('Fitness profile of a sport', 'Choose a performer to see how important each component of fitness is (0–10, a typical view). Then try to justify the top three using actions from the sport.', body => {
  body.innerHTML = `${dsSelect('sp-s', 'Performer', Object.keys(SPORTS).map(k => [k, k]), 'Netball centre')}<div id="sp-o" style="margin-top:12px"></div>`;
  dsWire(body, () => { const v = SPORTS[val(body, 'sp-s')], top = v.map((x, i) => [COMPS[i], x]).sort((a, b) => b[1] - a[1]).slice(0, 3);
    $('#sp-o', body).innerHTML = `<div class="grid g2" style="align-items:center"><div>${starSVG(['CV end.', 'Mus. end.', 'Strength', 'Flex.', 'Body comp.', 'Agility', 'Speed', 'Power', 'Co-ord.', 'Balance', 'Reaction'], [{ v, c: 'var(--a1)' }], 10, 340)}</div><div>${top.map((t, i) => `<div class="card flat" style="margin-bottom:8px"><b>${i + 1}. ${t[0]}</b> <span class="mono small">${t[1]}/10</span></div>`).join('')}<p class="small muted">Exam tip: name the component, then link it to a specific action, e.g. “power for the jump shot”.</p></div></div>`; });
});
const GNORMS = { msft: ['Multi-stage fitness test (level)', 'level', 4, 14, 0.1, false, { m: [12.5, 11, 9, 7], f: [11, 9.5, 7.5, 5.5] }], cooper: ['Cooper 12-minute run', 'm', 1200, 3400, 50, false, { m: [2800, 2500, 2300, 2200], f: [2700, 2300, 1900, 1700] }],
  sar: ['Sit and reach', 'cm', 0, 45, 1, false, { m: [30, 25, 20, 15], f: [33, 28, 23, 18] }], vj: ['Vertical jump', 'cm', 20, 80, 1, false, { m: [60, 50, 40, 30], f: [55, 45, 35, 25] }],
  sp30: ['30 m sprint', 's', 3.6, 6.4, 0.05, true, { m: [4.0, 4.3, 4.6, 5.0], f: [4.5, 4.8, 5.1, 5.5] }], grip: ['Hand grip dynamometer', 'kg', 10, 70, 1, false, { m: [50, 45, 39, 35], f: [32, 28, 23, 20] }],
  stork: ['Stork balance', 's', 0, 60, 1, false, { m: [50, 40, 25, 10], f: [30, 23, 16, 10] }], ill: ['Illinois agility run', 's', 14, 24, 0.1, true, { m: [15.2, 16.1, 18.1, 18.3], f: [17.0, 17.9, 21.7, 23.0] }],
  ruler: ['Ruler drop', 'cm', 2, 30, 0.5, true, { m: [7.5, 15.9, 20.4, 28], f: [7.5, 15.9, 20.4, 28] }] };
SIMS.gnorm = DS('Rate a fitness test result', 'Choose a test, sex and result to compare with <b>illustrative</b> norms for 16-year-olds. Published tables differ — always compare with the right norms, or with your own previous results.', body => {
  body.innerHTML = `<div class="grid g3">${dsSelect('gn-t', 'Test', Object.entries(GNORMS).map(([k, v]) => [k, v[0]]), 'msft')}${dsSelect('gn-s', 'Sex', [['m', 'male'], ['f', 'female']], 'm')}<div id="gn-r"></div></div><div id="gn-o" style="margin-top:14px"></div>`;
  const build = () => { const n = GNORMS[val(body, 'gn-t')]; $('#gn-r', body).innerHTML = dsRange('gn-v', 'Result', n[2], n[3], n[4], +((n[2] + n[3]) / 2).toFixed(2), ' ' + n[1]); dsWire($('#gn-r', body), draw); };
  const draw = () => { const n = GNORMS[val(body, 'gn-t')], sx = val(body, 'gn-s'), v = val(body, 'gn-v'), b = n[6][sx], low = n[5];
    const names = ['Excellent', 'Above average', 'Average', 'Below average', 'Poor'], idx = low ? b.findIndex(x => v < x) : b.findIndex(x => v >= x), k = idx < 0 ? 4 : idx, cols = ['var(--good)', 'var(--a3)', 'var(--accent)', 'var(--warn)', 'var(--bad)'];
    $('#gn-o', body).innerHTML = `<div class="row" style="align-items:baseline;gap:14px"><span style="font:800 40px var(--f-display);color:${cols[k]}">${names[k].toUpperCase()}</span><span class="mono">${v} ${n[1]}</span></div>
      <div class="tbl"><table><tr><th>Rating</th><th>${sx === 'm' ? 'Male' : 'Female'}</th></tr>${names.map((nm, j) => `<tr style="${j === k ? 'background:var(--accent-soft)' : ''}"><td>${nm}</td><td>${j === 0 ? (low ? '< ' : '≥ ') + b[0] : j === 4 ? (low ? '≥ ' : '< ') + b[3] : (low ? b[j - 1] + ' – ' + b[j] : b[j] + ' – ' + b[j - 1])} ${n[1]}</td></tr>`).join('')}</table></div>
      <p class="small muted">${low ? 'Lower is better for this test.' : 'Higher is better for this test.'}</p>`; };
  $('#gn-t', body).onchange = build; $('#gn-s', body).onchange = draw; build();
});
SIMS.testmatch = sorterSim('Match the test to the component', 'Which component of fitness does each test measure?', ['CV endurance', 'Muscular endurance', 'Strength', 'Flexibility', 'Power', 'Speed', 'Agility', 'Balance / co-ordination / reaction'], [
  ['Multi-stage fitness test', 0, 'Shuttle runs to bleeps — aerobic.'], ['Cooper 12-minute run', 0, 'Distance in 12 minutes.'], ['Press-up test', 1, 'Repeated contractions.'], ['Abdominal curl test', 1, 'Repeated sit-ups to a beat.'],
  ['Hand grip dynamometer', 2, 'Maximum force.'], ['1 rep max', 2, 'Heaviest single lift.'], ['Sit and reach', 3, 'Hamstrings and lower back.'], ['Vertical jump', 4, 'Explosive — strength × speed.'],
  ['30 m sprint', 5, 'Moving quickly.'], ['Illinois agility run', 6, 'Change of direction.'], ['Stork balance', 7, 'Balance.'], ['Alternate-hand wall throw', 7, 'Co-ordination.'], ['Ruler drop', 7, 'Reaction time.'], ['Skinfold callipers', 7, 'Not a skill test at all — body composition! (placed here to catch you out)']
]);
SIMS.methods = explorerSim('Training methods explorer', 'Pick a method to see how it works, what it develops and who it suits.', [
  ['Continuous', '<b>How:</b> steady pace, 20+ min, no rest, 60–80% max HR.<br><b>Develops:</b> CV and muscular endurance.<br><b>Suits:</b> distance runners, beginners, health/weight loss.<br><b>+</b> simple, cheap. <b>−</b> boring; no speed work.', 'aerobic'],
  ['Interval', '<b>How:</b> work periods + rest periods, repeated (e.g. 8 × 200 m, 90 s rest).<br><b>Develops:</b> speed, anaerobic (and aerobic) fitness.<br><b>Suits:</b> sprinters, swimmers, games players.<br><b>+</b> adaptable, specific. <b>−</b> very demanding.', 'both'],
  ['Fartlek', '<b>How:</b> continuous running with changes of speed and terrain, no rest.<br><b>Develops:</b> CV endurance and speed.<br><b>Suits:</b> games players.<br><b>+</b> varied, game-like. <b>−</b> intensity hard to monitor.', 'both'],
  ['Circuit', '<b>How:</b> stations in turn, e.g. 30 s work / 30 s rest.<br><b>Develops:</b> depends on stations — muscular endurance, CV endurance, skills.<br><b>Suits:</b> almost anyone; groups.<br><b>+</b> varied, adaptable. <b>−</b> set-up time; technique slips when tired.', 'mixed'],
  ['Weight training', '<b>How:</b> sets and reps with free weights/machines. Strength: heavy, 3–6 reps. Muscular endurance: light, 15–20 reps.<br><b>Develops:</b> strength, power, muscular endurance.<br><b>+</b> precise progression. <b>−</b> equipment; injury risk with poor technique.', 'anaerobic'],
  ['Plyometrics', '<b>How:</b> bounding, hopping, box jumps — stretch then explosive contraction.<br><b>Develops:</b> power.<br><b>Suits:</b> jumpers, sprinters, basketball/volleyball.<br><b>+</b> best for power. <b>−</b> stress on joints.', 'anaerobic'],
  ['Flexibility (active, passive, dynamic, PNF)', '<b>Active:</b> hold using your own muscles. <b>Passive:</b> partner/wall/band. <b>Dynamic:</b> controlled movement through range (warm-ups). <b>PNF:</b> stretch, contract ~10 s, relax, stretch further.<br><b>Develops:</b> flexibility.', 'range']
]);
SIMS.zones = DS('Training zone calculator', 'Set an age to see maximum heart rate and the training zones. Then enter a heart rate to see which zone it is in.', body => {
  body.innerHTML = `<div class="grid g2">${dsRange('tz-a', 'Age', 12, 70, 1, 16, ' yr')}${dsRange('tz-h', 'Heart rate during exercise', 60, 210, 1, 150, ' bpm')}</div><div id="tz-o" style="margin-top:12px"></div>`;
  dsWire(body, () => { const a = val(body, 'tz-a'), h = val(body, 'tz-h'), mx = 220 - a, p = h / mx * 100, z = p < 60 ? ['below the training threshold', 'var(--muted)'] : p <= 80 ? ['AEROBIC zone', 'var(--a3)'] : p <= 90 ? ['ANAEROBIC zone', 'var(--a1)'] : ['above 90% — near maximum', 'var(--bad)'];
    const W = 100, seg = (lo, hi, c, t) => `<div style="position:absolute;left:${lo / 220 * W}%;width:${(hi - lo) / 220 * W}%;top:0;bottom:0;background:${c};opacity:.28"></div><div style="position:absolute;left:${lo / 220 * W}%;top:4px;font-size:11px;padding-left:4px">${t}</div>`;
    $('#tz-o', body).innerHTML = `<div class="tbl"><table><tr><td>Max HR</td><td class="mono">220 − ${a} = <b>${mx}</b> bpm</td></tr><tr><td>Aerobic zone (60–80%)</td><td class="mono">${Math.round(mx * .6)} – ${Math.round(mx * .8)} bpm</td></tr><tr><td>Anaerobic zone (80–90%)</td><td class="mono">${Math.round(mx * .8)} – ${Math.round(mx * .9)} bpm</td></tr></table></div>
      <div style="position:relative;height:46px;border-radius:10px;overflow:hidden;border:1px solid var(--line-2);margin:12px 0">${seg(mx * .6, mx * .8, 'var(--a3)', 'aerobic')}${seg(mx * .8, mx * .9, 'var(--a1)', 'anaerobic')}<div style="position:absolute;left:${Math.min(h, 220) / 220 * W}%;top:0;bottom:0;width:3px;background:var(--ink)"></div></div>
      <div class="row" style="align-items:baseline;gap:12px"><span style="font:800 30px var(--f-display);color:${z[1]}">${z[0]}</span><span class="mono">${h} bpm = ${p.toFixed(1)}% of max</span></div>`; });
});
SIMS.principles = sorterSim('Which principle of training?', 'Which principle is each example mainly applying?', ['Specificity', 'Progression', 'Overload (FIT)', 'Variance'], [
  ['A swimmer does most training in the pool', 0, 'Matches the sport.'], ['Adding one extra rep to each set every week', 1, 'Gradual increase over time.'], ['Running faster than usual in today’s session', 2, 'Intensity increased.'],
  ['Swapping a run for a cycle ride to avoid boredom', 3, 'Changing the type of training.'], ['A goalkeeper practises diving and reactions', 0, 'Position-specific.'], ['Training four times a week instead of three', 2, 'Frequency increased.'],
  ['Slowly increasing a beginner’s walk from 15 to 30 minutes over 6 weeks', 1, 'Gradual.'], ['Using a circuit one day and fartlek another to prevent overuse injury', 3, 'Variety.'], ['Sprinters doing short, maximal intervals', 0, 'Energy system matches the event.'], ['A session lasting 45 minutes instead of 30', 2, 'Time (duration) increased.']
]);
SIMS.warmsort = sorterSim('Warm-up or cool-down?', 'Sort each activity or reason.', ['Warm-up', 'Cool-down'], [
  ['Raises body and muscle temperature', 0, 'Prepares muscles.'], ['Removes lactic acid and other waste products', 1, 'Keeps blood flowing after exercise.'], ['Gets the performer “in the zone”', 0, 'Psychological preparation.'],
  ['Ice bath', 1, 'Reduces swelling and soreness.'], ['Pulse raiser — jogging, skipping', 0, 'Raises HR gradually.'], ['Gradually lowering heart rate with a walk', 1, 'Active recovery.'],
  ['Game-specific passing drills', 0, 'Skill rehearsal.'], ['Massage', 1, 'Increases blood flow, relaxes muscles.'], ['Increases elasticity of muscles', 0, 'Reduces injury risk.'], ['Replacing fluids and salts lost in sweat', 1, 'Counters dehydration.'], ['Dynamic stretches such as leg swings', 0, 'Prepares range of movement.'], ['Prevents blood pooling', 1, 'Muscle pump continues.']
]);

/* ---------- Key area 2 ---------- */
SIMS.bonequiz = sorterSim('Bones: where and what type?', 'Is each bone a long bone (lever) or a flat bone (protection / attachment)?', ['Long bone', 'Flat bone'], [
  ['Humerus — upper arm', 0, 'Lever for throwing.'], ['Cranium — skull', 1, 'Protects the brain.'], ['Femur — thigh', 0, 'Longest bone; lever for running.'], ['Scapula — shoulder blade', 1, 'Muscle attachment.'],
  ['Tibia — shin', 0, 'Weight bearing.'], ['Ribs', 1, 'Protect heart and lungs.'], ['Radius — forearm, thumb side', 0, 'Lever.'], ['Ulna — forearm', 0, 'Lever.'], ['Fibula — outer lower leg', 0, 'Long, thin.']
]);
SIMS.joints = explorerSim('Joint explorer', 'The three synovial joint types in the GCSE specification.', [
  ['Ball and socket', '<b>Movements:</b> flexion, extension, abduction, adduction, rotation, circumduction — the widest range.<br><b>Found:</b> shoulder, hip.<br><b>Sport:</b> bowling in cricket (circumduction); hip flexion bringing the knee up in sprinting.', 'shoulder, hip'],
  ['Hinge', '<b>Movements:</b> flexion and extension only.<br><b>Found:</b> elbow, knee (and ankle).<br><b>Sport:</b> knee flexion then extension when kicking; elbow extension in a chest pass.', 'elbow, knee'],
  ['Pivot', '<b>Movements:</b> rotation.<br><b>Found:</b> neck (atlas and axis vertebrae); radio-ulnar joint.<br><b>Sport:</b> turning the head to watch the ball; turning the forearm in a topspin forehand.', 'neck']
]);
SIMS.jointmove = sorterSim('Name the movement', 'Which movement happens at the joint named?', ['Flexion', 'Extension', 'Abduction', 'Adduction', 'Rotation', 'Circumduction'], [
  ['Knee — preparing to kick a ball', 0, 'Angle decreases.'], ['Knee — striking the ball', 1, 'Angle increases.'], ['Shoulder — arms out in a star jump', 2, 'Away from the midline.'], ['Shoulder — arms back in to the sides', 3, 'Towards the midline.'],
  ['Shoulder — bowling in cricket', 5, 'Circle.'], ['Neck — turning to look at a team-mate', 4, 'Pivot joint.'], ['Elbow — upward phase of a bicep curl', 0, 'Bending.'], ['Elbow — releasing a chest pass', 1, 'Straightening.'],
  ['Hip — golf swing, hips turning', 4, 'Around the long axis.'], ['Hip — legs together in breaststroke kick', 3, 'Towards midline.'], ['Hip — driving out of the blocks', 1, 'Straightening.'], ['Arm circles in a warm-up', 5, 'Cone shape.']
]);
SIMS.muscles = explorerSim('Muscle finder', 'The nine muscles named in the GCSE specification: action, antagonist and a sporting example.', [
  ['Biceps', '<b>Action:</b> flexion of the elbow. <b>Antagonist:</b> triceps.<br><b>Example:</b> upward phase of a bicep curl — concentric; pulling in rowing.'],
  ['Triceps', '<b>Action:</b> extension of the elbow. <b>Antagonist:</b> biceps.<br><b>Example:</b> chest pass; upward phase of a press-up — concentric; lowering in a press-up — eccentric.'],
  ['Deltoid', '<b>Action:</b> abduction of the shoulder (also flexion/extension). <b>Antagonist:</b> latissimus dorsi.<br><b>Example:</b> raising the arms to block in volleyball.'],
  ['Pectorals', '<b>Action:</b> adduction / flexion of the shoulder (across the body). <b>Antagonist:</b> deltoid (rear) / latissimus dorsi.<br><b>Example:</b> tennis forehand; press-up.'],
  ['Latissimus dorsi', '<b>Action:</b> adduction and extension of the shoulder. <b>Antagonist:</b> deltoid.<br><b>Example:</b> pull phase of front crawl; pull-up.'],
  ['Gluteals', '<b>Action:</b> extension of the hip. <b>Antagonist:</b> hip flexors.<br><b>Example:</b> driving out of the blocks; standing up from a squat.'],
  ['Quadriceps', '<b>Action:</b> extension of the knee. <b>Antagonist:</b> hamstrings.<br><b>Example:</b> kicking — concentric; landing — eccentric.'],
  ['Hamstrings', '<b>Action:</b> flexion of the knee (and hip extension). <b>Antagonist:</b> quadriceps.<br><b>Example:</b> bringing the heel up in the running recovery phase.'],
  ['Gastrocnemius', '<b>Action:</b> plantar flexion of the ankle. <b>Antagonist:</b> tibialis anterior.<br><b>Example:</b> pushing off in a sprint; rising onto the toes.']
]);
SIMS.contract = sorterSim('Concentric, eccentric or isometric?', 'Identify the contraction of the named muscle.', ['Concentric', 'Eccentric', 'Isometric'], [
  ['Biceps — lifting the dumbbell in a curl', 0, 'Shortens.'], ['Biceps — lowering the dumbbell slowly', 1, 'Lengthens under tension.'], ['Abdominals — holding a plank', 2, 'No movement.'],
  ['Quadriceps — landing from a jump', 1, 'Controls the knee bending.'], ['Quadriceps — kicking a ball', 0, 'Extends the knee.'], ['Shoulder muscles — gymnast holding a handstand', 2, 'Static.'],
  ['Triceps — upward phase of a press-up', 0, 'Elbow extends.'], ['Triceps — downward phase of a press-up', 1, 'Controls lowering.'], ['Gastrocnemius — push-off at take-off', 0, 'Plantar flexion.'], ['Rugby forwards — scrum not moving', 2, 'Force without movement.']
]);
SIMS.fibresort = sorterSim('Slow twitch or fast twitch?', 'Which fibre type does each statement describe — or which will the performer rely on most?', ['Slow twitch (type I)', 'Fast twitch (type II)'], [
  ['Contract quickly and powerfully', 1, 'Type II.'], ['Very resistant to fatigue', 0, 'Type I.'], ['Use oxygen (aerobic)', 0, 'Good blood supply.'], ['Work anaerobically', 1, 'No oxygen needed.'],
  ['Marathon runner', 0, 'Endurance.'], ['Shot putter', 1, 'Explosive.'], ['Tire quickly', 1, 'Lactic acid.'], ['Red colour from myoglobin', 0, 'Oxygen store.'], ['100 m sprinter', 1, 'Speed and power.'], ['Long-distance cyclist', 0, 'Hours of work.']
]);
SIMS.cardiacG = {
  title: 'Heart rate, stroke volume and cardiac output', h: 340, noPlay: true,
  controls: [{ type: 'seg', id: 'tr', label: 'Performer', value: 0, options: [[0, 'untrained'], [1, 'trained']] }, { id: 'I', label: 'Exercise intensity', min: 0, max: 100, step: 1, value: 50, fmt: v => v + '%' }],
  readouts: ['Heart rate', 'Stroke volume', 'Cardiac output', 'Trained v untrained'],
  note: 'Cardiac output = heart rate × stroke volume. As intensity rises, both increase, so more oxygen reaches the muscles. A trained heart is bigger and stronger: larger stroke volume and lower heart rate at rest and at the same workload.',
  v(st, I) { const tr = +st.p.tr, hr = (tr ? 52 : 72) + ((tr ? 198 : 200) - (tr ? 52 : 72)) * I / 100, sv = (tr ? 95 : 70) + (tr ? 80 : 45) * Math.min(1, I / 55); return { hr, sv, q: hr * sv / 1000 }; },
  draw(c, W, H, st, C) { const b = { x: 54, y: 26, w: W - 200, h: H - 76 };
    const pl = CV.plot(c, C, b, { xr: [0, 100], yr: [0, 40], xl: 'intensity (%)', yl: 'cardiac output (L/min)', series: [{ f: I => this.v(st, I).q, col: C.a1, w: 3 }], dots: [[st.p.I, this.v(st, st.p.I).q, C.a1, 6]] });
    const v = this.v(st, st.p.I), beat = Math.abs(Math.sin(performance.now() / (60000 / v.hr) * Math.PI)), cx = W - 70, cy = H / 2 - 20;
    c.fillStyle = hexA(C.a1, .65); c.beginPath(); const r = 26 + 7 * beat; c.moveTo(cx, cy + r); c.bezierCurveTo(cx - r * 1.6, cy, cx - r * .9, cy - r * 1.1, cx, cy - r * .4); c.bezierCurveTo(cx + r * .9, cy - r * 1.1, cx + r * 1.6, cy, cx, cy + r); c.fill();
    CV.text(c, Math.round(v.hr) + ' bpm', cx, cy + 56, C.ink, 13, 'center', 700); CV.text(c, Math.round(v.sv) + ' ml/beat', cx, cy + 74, C.muted, 12, 'center'); },
  read(st) { const v = this.v(st, st.p.I); return [Math.round(v.hr) + ' bpm', Math.round(v.sv) + ' ml', v.q.toFixed(1) + ' L/min', +st.p.tr ? 'bigger SV, lower HR' : 'switch to “trained” to compare']; }
};
SIMS.bloodpath = DS('Follow the blood', 'Put the stages of the double circulation in order, starting from the right atrium. Tap them in order.', body => {
  const steps = ['Right atrium', 'Right ventricle', 'Pulmonary artery', 'Lungs — oxygen in, CO₂ out', 'Pulmonary vein', 'Left atrium', 'Left ventricle', 'Aorta', 'Body — muscles use oxygen', 'Vena cava'];
  let order, got;
  const draw = () => { body.innerHTML = `<div class="row" style="justify-content:space-between;margin-bottom:10px"><span class="pill">${got.length} / ${steps.length}</span><button class="btn sm ghost" data-r>Restart</button></div>
    <ol class="small" style="min-height:24px">${got.map(i => `<li>${steps[i]}</li>`).join('')}</ol><div class="opt-grid">${order.filter(i => !got.includes(i)).map(i => `<button class="pickb" data-i="${i}">${steps[i]}</button>`).join('')}</div>${got.length === steps.length ? '<div class="box good"><b class="lbl">Complete</b><p>Right side → lungs (pulmonary circulation); left side → body (systemic circulation). Blood passes through the heart twice: a double circulation.</p></div>' : ''}`;
    $('[data-r]', body).onclick = start; $$('[data-i]', body).forEach(b => b.onclick = () => { const i = +b.dataset.i; if (i === got.length) { got.push(i); sfx.good(); if (got.length === steps.length) burst(); } else { sfx.bad(); b.classList.add('bad'); toast('Not yet — what comes after ' + (got.length ? steps[got.length - 1] : 'the start') + '?'); } draw(); }); };
  const start = () => { order = shuffle(steps.map((_, i) => i)); got = []; draw(); };
  start();
});
SIMS.breathe = {
  title: 'Tidal volume, breathing frequency and minute ventilation', h: 330,
  controls: [{ id: 'I', label: 'Exercise intensity', min: 0, max: 100, step: 1, value: 30, fmt: v => v + '%' }],
  readouts: ['Tidal volume', 'Breathing frequency', 'Minute ventilation', 'Why'],
  note: 'Minute ventilation = tidal volume × breathing frequency. During exercise you breathe deeper (TV ↑) and faster (frequency ↑) to take in more oxygen and remove more carbon dioxide.',
  v(I) { const f = I / 100, tv = 0.5 + 2.2 * Math.min(1, f / 0.7), fr = 13 + 37 * Math.pow(f, 1.5); return { tv, fr, ve: tv * fr }; },
  draw(c, W, H, st, C) { const v = this.v(st.p.I), ph = (st.t * v.fr / 60) % 1, vol = v.tv * (0.5 - 0.5 * Math.cos(ph * Math.PI * 2)), cx = W * 0.22, cy = H / 2 - 10;
    [-1, 1].forEach(s => { c.fillStyle = hexA(C.a2, .2 + .25 * vol / 3); c.strokeStyle = C.a2; c.lineWidth = 2; c.beginPath(); c.ellipse(cx + s * 38, cy, 30 + vol * 9, 64 + vol * 12, 0, 0, 7); c.fill(); c.stroke(); });
    CV.line(c, cx, cy - 110, cx, cy - 50, C.ink, 5); CV.text(c, 'breathing ' + (Math.sin(ph * Math.PI * 2) > 0 ? 'in' : 'out'), cx, cy + 110, C.muted, 12, 'center');
    CV.plot(c, C, { x: W * 0.48, y: 30, w: W * 0.46, h: H - 84 }, { xr: [0, 100], yr: [0, 130], xl: 'intensity %', yl: 'minute ventilation (L/min)', series: [{ f: I => this.v(I).ve, col: C.a2, w: 3 }], dots: [[st.p.I, v.ve, C.a2, 6]] }); },
  read(st) { const v = this.v(st.p.I); return [v.tv.toFixed(2) + ' L', Math.round(v.fr) + ' per min', v.ve.toFixed(0) + ' L/min', st.p.I < 10 ? 'resting values' : 'more O₂ in, more CO₂ out']; }
};
SIMS.aerosort = sorterSim('Aerobic or anaerobic?', 'Which is the main type of exercise for each activity or statement?', ['Aerobic', 'Anaerobic'], [
  ['Marathon', 0, 'Long, steady.'], ['100 m sprint', 1, 'Creatine phosphate.'], ['400 m run', 1, 'Lactic acid system.'], ['Jogging back into position in netball', 0, 'Low intensity.'],
  ['Shot put', 1, 'Single maximal effort.'], ['Long-distance swim', 0, 'Endurance.'], ['Produces lactic acid', 1, 'Without oxygen.'], ['Produces carbon dioxide and water', 0, 'With oxygen.'], ['Uses fat as a fuel', 0, 'Fat needs oxygen.'], ['Leads to an oxygen debt', 1, 'Repaid after exercise.'], ['Tennis serve', 1, 'Explosive.'], ['Brisk 30-minute walk', 0, 'Moderate intensity.']
]);
SIMS.energyG = {
  title: 'Which energy system? Intensity and duration', h: 340,
  controls: [{ id: 'I', label: 'Intensity (% of maximum)', min: 40, max: 100, step: 5, value: 100, fmt: v => v + '%' }, { id: 'T', label: 'Time into exercise (s)', min: 1, max: 180, step: 1, value: 6 }],
  readouts: ['Creatine phosphate', 'Lactic acid system', 'Aerobic', 'Main system'],
  note: 'Press play to run the clock. All systems work together; intensity and duration decide which is the main one. (Illustrative model.)',
  share(t, I) { const i = I / 100, pc = Math.exp(-Math.pow(t / 10, 2)) * i * i, gl = (1 - Math.exp(-t / 15)) * Math.exp(-t / 90) * i * i * i * 1.2, ae = (1 - Math.exp(-t / 25)) * (1.1 - 0.6 * i) + 0.05, s = pc + gl + ae; return [pc / s, gl / s, ae / s]; },
  step(st, dt) { st.p.T = st.p.T >= 180 ? 1 : Math.min(180, st.p.T + dt * 12); const inp = document.getElementById('sc-energyG-T'); if (inp) { inp.value = Math.round(st.p.T); inp.style.setProperty('--p', (st.p.T / 180 * 100) + '%'); inp.previousElementSibling.querySelector('output').textContent = Math.round(st.p.T); } },
  init(st) { st.run = false; },
  draw(c, W, H, st, C) { const b = { x: 54, y: 24, w: W - 80, h: H - 84 }, cols = [C.a1, C.a4, C.a3], X = t => b.x + t / 180 * b.w, Y = v => b.y + b.h - v * b.h;
    CV.rrect(c, b.x - 8, b.y - 8, b.w + 16, b.h + 26, 8, C.surface, C.line, 1);
    for (let t = 1; t <= 180; t += 1) { const sh = this.share(t, st.p.I); let acc = 0; sh.forEach((v, k) => { c.fillStyle = hexA(cols[k], .72); c.fillRect(X(t - 1), Y(acc + v), X(t) - X(t - 1) + .6, v * b.h); acc += v; }); }
    CV.line(c, X(st.p.T), b.y - 4, X(st.p.T), b.y + b.h + 4, C.ink, 2.5); CV.text(c, 'time (s) →', b.x + b.w, b.y + b.h + 14, C.muted, 11, 'right');
    ['creatine phosphate', 'lactic acid', 'aerobic'].forEach((n, k) => { CV.rrect(c, b.x + k * 150, H - 26, 12, 12, 3, cols[k]); CV.text(c, n, b.x + 18 + k * 150, H - 20, C.ink, 12); }); },
  read(st) { const s = this.share(st.p.T, st.p.I), k = s.indexOf(Math.max(...s)); return [...s.map(x => Math.round(x * 100) + '%'), ['creatine phosphate', 'lactic acid', 'aerobic'][k]]; }
};
SIMS.effects = sorterSim('Short-term or long-term effect?', 'Is each a short-term effect (during or just after exercise) or a long-term effect (after weeks of training)?', ['Short-term', 'Long-term'], [
  ['Heart rate increases during a run', 0, 'Immediate.'], ['Resting heart rate decreases', 1, 'Adaptation.'], ['Tidal volume increases', 0, 'Breathing deeper now.'], ['Vital capacity increases', 1, 'Adaptation.'],
  ['Body temperature rises; sweating', 0, 'Immediate.'], ['Increased bone density', 1, 'From weight-bearing training.'], ['Lactic acid builds up', 0, 'During intense exercise.'], ['Muscle hypertrophy', 1, 'Months of resistance training.'],
  ['Stroke volume at rest increases', 1, 'Bigger, stronger heart.'], ['Breathing rate increases', 0, 'Immediate.'], ['Resting blood pressure falls', 1, 'Adaptation.'], ['Red, flushed skin', 0, 'Vasodilation to lose heat.']
]);

/* ---------- Key area 3 ---------- */
SIMS.pairs = sorterSim('Agonist for the movement', 'Pick the agonist (prime mover) for each movement.', ['Biceps', 'Triceps', 'Quadriceps', 'Hamstrings', 'Deltoid', 'Latissimus dorsi', 'Gluteals', 'Gastrocnemius'], [
  ['Elbow flexion in a curl', 0, 'Antagonist: triceps.'], ['Elbow extension in a chest pass', 1, 'Antagonist: biceps.'], ['Knee extension when kicking', 2, 'Antagonist: hamstrings.'], ['Knee flexion in the running recovery', 3, 'Antagonist: quadriceps.'],
  ['Shoulder abduction to block', 4, 'Antagonist: latissimus dorsi.'], ['Shoulder adduction in front crawl pull', 5, 'Antagonist: deltoid.'], ['Hip extension driving off the blocks', 6, 'Antagonist: hip flexors.'], ['Plantar flexion at push-off', 7, 'Antagonist: tibialis anterior.']
]);
SIMS.leverid = sorterSim('Which class of lever?', 'Classify each body lever.', ['First class', 'Second class', 'Third class'], [
  ['Neck — nodding to head a ball', 0, 'Fulcrum (neck joint) between effort and load.'], ['Ankle — rising onto the toes', 1, 'Load in the middle.'], ['Elbow — bicep curl (flexion)', 2, 'Effort in the middle.'],
  ['Elbow — throwing (triceps extension)', 0, 'Fulcrum in the middle.'], ['Knee — kicking a ball', 2, 'Effort (quadriceps insertion) in the middle.'], ['Hip — lifting the knee in sprinting', 2, 'Most body levers are third class.'], ['Shoulder — raising the arm sideways', 2, 'Third class.'], ['Ankle — take-off in a jump', 1, 'Plantar flexion: second class.']
]);
SIMS.planes = sorterSim('Plane and axis sorter', 'Which plane (and axis) is each movement in? Sagittal plane ↔ frontal axis · frontal plane ↔ sagittal axis · transverse plane ↔ vertical axis.', ['Sagittal plane / frontal axis', 'Frontal plane / sagittal axis', 'Transverse plane / vertical axis'], [
  ['Front somersault', 0, 'Forwards rotation.'], ['Cartwheel', 1, 'Sideways rotation.'], ['Full twist in trampolining', 2, 'Spin around the head-to-toe line.'],
  ['Bicep curl', 0, 'Flexion/extension.'], ['Star jump', 1, 'Abduction/adduction.'], ['Discus turn', 2, 'Rotation.'], ['Running', 0, 'Hip and knee flexion/extension.'],
  ['Side-step in rugby', 1, 'Sideways.'], ['Golf swing (trunk turning)', 2, 'Rotation.'], ['Kicking a football', 0, 'Knee flexion then extension.'], ['Ice-skater spin', 2, 'Vertical axis.'], ['Lateral raise with dumbbells', 1, 'Shoulder abduction.']
]);
SIMS.techsort = sorterSim('Technology: positive or negative?', 'Sort each effect of technology in sport.', ['Positive', 'Negative'], [
  ['Goal-line technology makes decisions accurate', 0, 'Fairness.'], ['VAR reviews cause long delays', 1, 'Breaks the flow.'], ['GPS data helps prevent overtraining', 0, 'Monitoring load.'], ['Expensive kit widens the gap between rich and poor', 1, 'Inequality.'],
  ['Slow-motion video helps correct technique', 0, 'Knowledge of performance.'], ['Officials lose confidence and authority', 1, 'Over-reliance.'], ['Hawk-Eye graphics entertain spectators', 0, 'Engagement.'], ['Super-suits gave some swimmers an unfair advantage', 1, 'Technological doping.'],
  ['Prosthetics allow disabled athletes to compete', 0, 'Inclusion.'], ['Too much data confuses performers', 1, 'Paralysis by analysis.']
]);

/* ---------- Key area 4 ---------- */
SIMS.smartcheck = DS('SMART target builder', 'Build a target piece by piece. Each part turns green when it meets the SMART criteria.', body => {
  body.innerHTML = `<div class="grid g2"><div class="stack">
    <label class="small">What will you improve? (specific)<input id="sm-s" class="ds-sel" style="width:100%" value="my 1500 m time"></label>
    <label class="small">From → to (measurable)<input id="sm-m" class="ds-sel" style="width:100%" value="from 5:40 to 5:25"></label>
    <label class="small">Agreed with<input id="sm-a" class="ds-sel" style="width:100%" value="my PE teacher"></label>
    <label class="small">Deadline (time-phased)<input id="sm-t" class="ds-sel" style="width:100%" value="in 8 weeks"></label>
    ${dsRange('sm-r', 'How big is the improvement? (realistic)', 1, 40, 1, 4, '%')}</div><div id="sm-o"></div></div>`;
  const chk = () => { const s = $('#sm-s', body).value.trim(), m = $('#sm-m', body).value.trim(), a = $('#sm-a', body).value.trim(), t = $('#sm-t', body).value.trim(), r = val(body, 'sm-r');
    const ok = [s.split(/\s+/).length >= 2 && !/^(better|fitter|good)/i.test(s), /\d/.test(m), a.length > 2, /\d|week|month|term|season|end of/i.test(t), r >= 2 && r <= 15];
    const L = [['S', 'Specific'], ['M', 'Measurable'], ['A', 'Agreed'], ['R', 'Realistic'], ['T', 'Time-phased']];
    $('#sm-o', body).innerHTML = `<div class="row" style="gap:6px;margin-bottom:12px">${L.map((l, i) => `<span class="pill ${ok[i] ? 'good' : 'bad'}" title="${l[1]}" style="font:800 20px var(--f-display);padding:6px 14px">${l[0]}</span>`).join('')}</div>
      <div class="card flat"><b>“To improve ${esc(s)} ${esc(m)}, agreed with ${esc(a)}, ${esc(t)}.”</b></div>
      <ul class="small">${L.map((l, i) => ok[i] ? '' : `<li><b>${l[1]}:</b> ${['name a precise skill or test', 'include a number — a time, score or distance', 'say who it is agreed with', 'add a deadline', r < 2 ? 'too small to be a challenge' : 'too big a jump — likely to fail'][i]}</li>`).join('') || '<li>All five criteria met — a SMART target.</li>'}</ul>`; if (ok.every(x => x)) sfx.good(); };
  $$('input[type=text], input:not([type])', body).forEach(i => i.oninput = chk); dsWire(body, chk);
});
SIMS.ipmodelG = explorerSim('Information processing: a goalkeeper facing a penalty', 'Step through the simple model for one real event.', [
  ['1 · Input', 'The keeper <b>sees</b> the taker’s run-up, body angle and the ball; <b>hears</b> the whistle. <b>Selective attention</b> filters out the crowd noise and focuses on the taker’s hips and standing foot.'],
  ['2 · Decision making', 'The information is compared with <b>memory</b> — previous penalties, the taker’s favourite side from video analysis. The keeper decides to dive to the left.'],
  ['3 · Output', 'The decision is sent to the muscles: <b>dives to the left</b> — leg extension (quadriceps, gluteals), arm extension and abduction.'],
  ['4 · Feedback', '<b>KR:</b> the save is made (or not). <b>KP:</b> the coach notes the dive started slightly late. <b>Intrinsic:</b> the feel of the dive. This is stored in memory for next time.']
]);
SIMS.krkp = sorterSim('KR or KP? Intrinsic or extrinsic?', 'Is each piece of feedback knowledge of results (outcome) or knowledge of performance (technique)?', ['Knowledge of results', 'Knowledge of performance'], [
  ['“You ran 12.8 seconds”', 0, 'Outcome.'], ['“Your elbow dropped in the shot”', 1, 'Technique.'], ['The ball went in the net', 0, 'Outcome.'], ['Watching video of your tumble technique', 1, 'Quality of movement.'],
  ['Scoreboard shows 21–15', 0, 'Result.'], ['“Bend your knees more on landing”', 1, 'Technique.'], ['Distance of a javelin throw', 0, 'Outcome.'], ['Coach praises your follow-through', 1, 'Technique.']
]);
SIMS.guidance = sorterSim('Type of guidance', 'Identify the type of guidance.', ['Visual', 'Verbal', 'Manual', 'Mechanical'], [
  ['Coach demonstrates a lay-up', 0, 'Seeing.'], ['Coach shouts “track your runner!”', 1, 'Spoken.'], ['Coach holds a gymnast through a handspring', 2, 'Physical support.'], ['Trampolinist in a twisting belt', 3, 'Equipment.'],
  ['Watching a video of an elite swimmer', 0, 'Seeing.'], ['Swimmer using a float', 3, 'Aid.'], ['Teacher moves a pupil’s arm through a forehand', 2, 'Physically guided.'], ['Half-time team talk about tactics', 1, 'Spoken.'], ['Poster showing the stages of a shot put', 0, 'Visual.'], ['Ball machine feeding tennis balls', 3, 'Equipment.']
]);
SIMS.stagematch = sorterSim('Stage of learning', 'Which stage of learning best fits each description?', ['Cognitive', 'Associative', 'Autonomous'], [
  ['Makes lots of errors; has to think about every part', 0, 'Beginner.'], ['Skill is automatic; focuses on tactics', 2, 'Expert.'], ['Fewer errors; movement becoming fluent', 1, 'Practice stage.'],
  ['Needs demonstrations and simple, positive feedback', 0, 'Beginner.'], ['Can use intrinsic feedback to correct themselves', 2, 'Expert.'], ['Starting to feel the difference between good and bad attempts', 1, 'Associative.'],
  ['A professional footballer’s first touch', 2, 'Automatic.'], ['A child learning to swim with a float', 0, 'Beginner.'], ['A club player improving consistency in practice', 1, 'Associative.']
]);
SIMS.motivsort = sorterSim('Intrinsic or extrinsic motivation?', 'Sort each reason for taking part.', ['Intrinsic', 'Extrinsic'], [
  ['Enjoying the feeling of running', 0, 'From within.'], ['Winning a trophy', 1, 'Tangible reward.'], ['Praise from the coach', 1, 'Intangible reward.'], ['Pride in a personal best', 0, 'Satisfaction.'],
  ['Prize money', 1, 'Tangible.'], ['The challenge of learning a new skill', 0, 'For its own sake.'], ['Being selected for the county team', 1, 'Recognition.'], ['Having fun with friends', 0, 'Enjoyment.'], ['A certificate for attendance', 1, 'Reward.']
]);
SIMS.classifyG = DS('Classify a skill on the continua', 'Choose a skill and drag the sliders to place it on each continuum. Then check against a model answer.', body => {
  const SK = { 'Penalty kick': [55, 20, 20], 'Pass in a netball match': [40, 85, 85], 'Tennis serve': [75, 25, 10], 'Sprint start': [30, 15, 95], 'Somersault with a twist': [90, 10, 15], 'Golf putt': [45, 5, 5], 'Goalkeeper saving a shot': [55, 90, 95], 'Running in a 5 km race': [15, 40, 40] };
  const why = { 'Penalty kick': 'Mostly closed (stable, set distance) but the keeper adds some unpredictability; self-paced (taker chooses when); moderately complex.', 'Pass in a netball match': 'Open — defenders and team-mates move all the time; externally paced by the game; quite basic technique but many decisions.', 'Tennis serve': 'Closed and self-paced — the server controls the toss; complex co-ordination of many parts.', 'Sprint start': 'Closed environment; externally paced by the gun; relatively basic movement.', 'Somersault with a twist': 'Complex — many parts and high co-ordination; closed and self-paced.', 'Golf putt': 'Closed and self-paced; fairly basic movement but needs fine control.', 'Goalkeeper saving a shot': 'Open and externally paced — the shooter decides timing and direction; complex decisions under pressure.', 'Running in a 5 km race': 'Basic; mostly closed; partly externally paced by other runners’ tactics.' };
  body.innerHTML = `${dsSelect('cg-s', 'Skill', Object.keys(SK).map(k => [k, k]), 'Pass in a netball match')}<div class="grid g3" style="margin-top:8px">${dsRange('cg-1', 'Basic → complex', 0, 100, 5, 50, '')}${dsRange('cg-2', 'Closed → open', 0, 100, 5, 50, '')}${dsRange('cg-3', 'Self → externally paced', 0, 100, 5, 50, '')}</div><button class="btn sm primary" data-chk>Check my placements</button><div id="cg-o" style="margin-top:12px"></div>`;
  dsWire(body, () => { $('#cg-o', body).innerHTML = ''; });
  $('[data-chk]', body).onclick = () => { const k = val(body, 'cg-s'), m = SK[k], u = [val(body, 'cg-1'), val(body, 'cg-2'), val(body, 'cg-3')], d = u.map((x, i) => Math.abs(x - m[i])), ok = d.filter(x => x <= 25).length;
    $('#cg-o', body).innerHTML = `<div class="tbl"><table><tr><th>Continuum</th><th>You</th><th>Model</th></tr>${['Basic–complex', 'Closed–open', 'Self–externally paced'].map((n, i) => `<tr><td>${n}</td><td class="mono">${u[i]}</td><td class="mono">${m[i]} ${d[i] <= 25 ? '✓' : ''}</td></tr>`).join('')}</table></div><div class="box tip"><b class="lbl">${ok}/3 close to the model</b><p>${why[k]}</p></div>`; ok === 3 ? sfx.good() : sfx.tick(); };
});
SIMS.practiceG = DS('Choose the practice', 'Set the skill and the learner. The tool recommends practice types with reasons — the way you should justify a choice in the exam.', body => {
  body.innerHTML = `<div class="grid g2">${dsSelect('pg-e', 'Environment', [['closed', 'closed — stable'], ['open', 'open — changing']], 'open')}${dsSelect('pg-c', 'Complexity', [['basic', 'basic'], ['complex', 'complex, can be broken into parts'], ['fast', 'complex but fast/continuous (hard to split)']], 'basic')}${dsSelect('pg-l', 'Learner', [['cog', 'beginner (cognitive)'], ['ass', 'improving (associative)'], ['aut', 'expert (autonomous)']], 'cog')}${dsSelect('pg-d', 'Danger', [['no', 'low risk'], ['yes', 'risky (e.g. a vault)']], 'no')}</div><div id="pg-o" style="margin-top:12px"></div>`;
  dsWire(body, () => { const e = val(body, 'pg-e'), c = val(body, 'pg-c'), l = val(body, 'pg-l'), d = val(body, 'pg-d'), r = [];
    r.push(c === 'complex' && (l === 'cog' || d === 'yes') ? ['Part practice (or whole–part–whole)', 'The skill is complex and can be broken down; practising parts reduces overload' + (d === 'yes' ? ' and is safer.' : '.')] : c === 'fast' ? ['Whole practice', 'The skill is fast and continuous — splitting it loses the flow and feel.'] : ['Whole practice', 'The skill is basic enough to practise as a whole, keeping its feel and flow.']);
    r.push(e === 'closed' ? ['Fixed practice', 'Closed skill — repeating it in the same conditions grooves a consistent technique.'] : l === 'cog' ? ['Fixed first, then varied', 'Open skill, but a beginner needs to learn the basic technique before adding defenders and decisions.'] : ['Varied practice', 'Open skill — practising in changing, game-like situations develops decision making and adaptability.']);
    r.push(l === 'cog' ? ['Guidance: visual (+ manual/mechanical if risky)', 'Beginners need a clear mental picture; support for safety and confidence.'] : l === 'ass' ? ['Guidance: visual and verbal', 'Can now use more detailed information.'] : ['Guidance: verbal (detailed, tactical)', 'Experts can process detailed technical and tactical information.']);
    $('#pg-o', body).innerHTML = r.map(x => `<div class="card flat" style="margin-bottom:8px"><b>${x[0]}</b><div class="small muted">${x[1]}</div></div>`).join(''); });
});

/* ---------- Key area 5 ---------- */
SIMS.partfactors = sorterSim('Which participation factor?', 'Which factor is each example mainly about?', ['Family', 'Gender', 'Society/culture', 'Peers', 'Cost', 'Access', 'Role models'], [
  ['Parents drive their child to training every week', 0, 'Family support.'], ['Girls think football is “for boys”', 1, 'Stereotype.'], ['Golf club membership is £900 a year', 4, 'Cost.'], ['No swimming pool within 20 miles', 5, 'Access.'],
  ['A Paralympian visits a school and inspires pupils', 6, 'Role model.'], ['Friends all join the local hockey club', 3, 'Peers.'], ['Religious fasting affects training times', 2, 'Culture.'], ['A sports centre without ramps or lifts', 5, 'Access.'],
  ['Women’s Euros success on TV inspires girls', 6, 'Role models (and gender).'], ['Older brother plays rugby so you try it too', 0, 'Family.']
]);
SIMS.provision = explorerSim('Target groups: barriers and strategies', 'Choose a target group to see common barriers and matching strategies.', [
  ['Women and girls', '<b>Barriers:</b> stereotypes; low media coverage and few role models; body image; childcare and time; fewer teams in some sports.<br><b>Strategies:</b> This Girl Can; more TV coverage of women’s sport; women-only sessions and female coaches; crèches; wider choice (dance, fitness, walking netball); equal prize money.'],
  ['Ethnic minority groups', '<b>Barriers:</b> racism and abuse; cultural or religious requirements; stereotyping; few role models in coaching and leadership.<br><b>Strategies:</b> Kick It Out and Show Racism the Red Card; tough sanctions; culturally appropriate sessions and kit; role models; community outreach and targeted funding.'],
  ['Disabled people', '<b>Barriers:</b> inaccessible facilities and transport; cost of specialist equipment; few trained coaches; low media coverage; attitudes.<br><b>Strategies:</b> accessible venues; adapted sports (wheelchair basketball, boccia, goalball); Disability Sport Wales and Activity Alliance; Paralympic role models; inclusive PE using the STEP model (space, task, equipment, people).']
]);
SIMS.triangleG = DS('The golden triangle: follow the money', 'Change the size of the TV audience and see how money flows between sport, the media and sponsors. (Illustrative figures.)', body => {
  body.innerHTML = `${dsRange('gt-a', 'TV audience (millions)', 1, 40, 1, 10, ' m')}<div id="gt-o" style="margin-top:12px"></div>`;
  dsWire(body, () => { const a = val(body, 'gt-a'), tv = Math.round(a * 4.5), sp = Math.round(a * 2.2), pay = Math.round((tv + sp) * 0.6), gr = Math.round((tv + sp) * 0.1);
    $('#gt-o', body).innerHTML = hbar('Media pay for TV rights', tv, 200, 'var(--a2)', '£' + tv + 'm') + hbar('Sponsors pay for exposure', sp, 100, 'var(--a4)', '£' + sp + 'm') + hbar('Player wages', pay, 150, 'var(--a1)', '£' + pay + 'm') + hbar('Grassroots and facilities', gr, 30, 'var(--a3)', '£' + gr + 'm') +
      `<p class="small muted">${a >= 20 ? 'A huge audience: rich sport, high wages — but expect kick-off times and rules to suit TV, and pay-TV costs for fans.' : a <= 4 ? 'A small audience: little money — a minority sport struggles to attract sponsors and pay players.' : 'Bigger audiences bring more money from both the media and sponsors — each side of the triangle depends on the others.'}</p>`; });
});
SIMS.mediasort = sorterSim('Commercialisation and the media: who benefits?', 'Is each a positive or a negative effect?', ['Positive', 'Negative'], [
  ['TV money funds new facilities', 0, 'Investment.'], ['Kick-off moved to 8 pm for overseas TV', 1, 'Fans and players inconvenienced.'], ['Sponsorship lets athletes train full time', 0, 'Professional careers.'], ['Fans must pay subscriptions to watch', 1, 'Cost.'],
  ['Women’s sport on TV creates role models', 0, 'Inspiration.'], ['Media intrusion into players’ private lives', 1, 'Pressure.'], ['Replays and analysis educate viewers', 0, 'Educate role.'], ['Minority sports get little coverage or money', 1, 'Inequality.'], ['Fast-food sponsor conflicts with healthy image', 1, 'Inappropriate sponsor.']
]);
SIMS.ethics = sorterSim('Sportsmanship, gamesmanship or deviance?', 'Classify each behaviour.', ['Sportsmanship', 'Gamesmanship', 'Deviance'], [
  ['Kicking the ball out for an injured opponent', 0, 'Spirit of the game.'], ['Time-wasting when winning', 1, 'Bending the rules.'], ['Taking anabolic steroids', 2, 'Breaks rules — doping.'], ['Shaking hands with the opposition', 0, 'Respect.'],
  ['Sledging the batter', 1, 'Unsporting tactic.'], ['Deliberately bowling a no-ball for a bet', 2, 'Spot fixing.'], ['Feigning injury to stop the game', 1, 'Gamesmanship.'], ['Punching an opponent', 2, 'Violence.'], ['A golfer calling a penalty on themselves', 0, 'Honesty.'], ['Delaying a serve to upset the opponent', 1, 'Gamesmanship.']
]);
SIMS.drugmatch = sorterSim('Which drug — and why?', 'Match each effect or performer to the drug type.', ['Anabolic steroids', 'Stimulants', 'Beta blockers', 'Diuretics', 'EPO / blood doping'], [
  ['Steady hands for an archer', 2, 'Reduces heart rate and shaking.'], ['Bigger, stronger muscles for a weightlifter', 0, 'Muscle mass.'], ['More red blood cells for a cyclist', 4, 'Oxygen carrying.'], ['A jockey losing weight quickly', 3, 'Water loss.'],
  ['Feeling more alert and less tired', 1, 'Stimulates the nervous system.'], ['Masking other drugs in a sample', 3, 'Dilutes urine.'], ['Faster recovery and more power for a sprinter', 0, 'Steroids.'], ['Calming nerves for a snooker player', 2, 'Beta blockers.'], ['Endurance runner wanting more oxygen to muscles', 4, 'EPO.']
]);

/* ---------- Component 2 ---------- */
SIMS.pracband = DS('Practical performance band finder', 'Judge a performance against the four skill areas (plus the team criteria if it is a team activity). This gives an estimate of the band — your teacher uses the full Eduqas grid.', body => {
  const A = ['Competitive performance — control and rules', 'Variety of skills and techniques', 'Use of fitness components', 'Tactics and decision making'], T = ['Role in the team and team strategies', 'Awareness of others and communication'];
  body.innerHTML = `${dsSelect('pb-t', 'Activity type', [['ind', 'individual'], ['team', 'team']], 'team')}<div class="grid g2" style="margin-top:8px">${[...A, ...T].map((a, i) => dsSelect('pb' + i, a, [[1, 'limited'], [2, 'some success, inconsistent'], [3, 'good, mostly consistent'], [4, 'excellent, consistent under pressure']], 3)).join('')}</div><div id="pb-o" style="margin-top:12px"></div>`;
  dsWire(body, () => { const team = val(body, 'pb-t') === 'team'; T.forEach((_, j) => { const el = $('#pb' + (4 + j), body); if (el) el.closest('.ctl').style.display = team ? '' : 'none'; });
    const v = [...A, ...T].map((_, i) => +val(body, 'pb' + i)).slice(0, team ? 6 : 4), m = v.reduce((a, b) => a + b, 0) / v.length, band = Math.round(m), mark = Math.max(1, Math.min(20, Math.round((m - 1) / 3 * 19 + 1)));
    $('#pb-o', body).innerHTML = `<div class="row" style="align-items:baseline;gap:14px"><span style="font:800 40px var(--f-display);color:var(--u6)">BAND ${band}</span><span class="mono">≈ ${mark}/20</span></div><p class="small muted">Bands: 4 = 16–20 · 3 = 11–15 · 2 = 6–10 · 1 = 1–5. Higher bands need effective, consistent performance in demanding competitive situations.</p>`; });
});
SIMS.progplan = DS('Training programme planner', 'Set up a personal training programme. The checker tells you which principles of training you have applied and what to improve before you write your analysis.', body => {
  body.innerHTML = `<div class="grid g2">${dsSelect('pp-c', 'Weakest component', COMPS.map(c => [c, c]), 'CV endurance')}${dsSelect('pp-m', 'Main method', [['cont', 'continuous'], ['int', 'interval'], ['fart', 'fartlek'], ['circ', 'circuit'], ['wt', 'weight training'], ['ply', 'plyometrics'], ['flex', 'flexibility']], 'fart')}${dsRange('pp-w', 'Weeks', 2, 14, 1, 8, '')}${dsRange('pp-f', 'Sessions per week', 1, 7, 1, 3, '')}${dsRange('pp-i', 'Intensity (% max HR)', 50, 95, 5, 70, '%')}${dsRange('pp-p', 'Weekly increase (progression)', 0, 30, 5, 10, '%')}${dsSelect('pp-v', 'Variety of sessions', [['no', 'same session every time'], ['yes', 'two or more different sessions']], 'yes')}${dsSelect('pp-r', 'Retests planned', [['0', 'none'], ['1', 'start and end'], ['2', 'start, middle and end']], '2')}</div><div id="pp-o" style="margin-top:12px"></div>`;
  const fit = { 'CV endurance': ['cont', 'int', 'fart', 'circ'], 'Muscular endurance': ['circ', 'wt', 'cont'], 'Strength': ['wt'], 'Flexibility': ['flex'], 'Body composition': ['cont', 'fart', 'circ', 'int'], 'Agility': ['circ', 'int'], 'Speed': ['int', 'fart'], 'Power': ['ply', 'wt'], 'Co-ordination': ['circ'], 'Balance': ['circ', 'flex'], 'Reaction time': ['circ', 'int'] };
  dsWire(body, () => { const c = val(body, 'pp-c'), m = val(body, 'pp-m'), w = val(body, 'pp-w'), f = val(body, 'pp-f'), i = val(body, 'pp-i'), p = val(body, 'pp-p'), v = val(body, 'pp-v'), r = +val(body, 'pp-r');
    const ok = [[fit[c].includes(m), 'Specificity', fit[c].includes(m) ? 'Method suits the component.' : 'This method does not mainly develop ' + c + '.'], [p > 0 && p <= 15, 'Progression', p === 0 ? 'No progression — the body stops adapting.' : p > 15 ? 'Too fast — risk of injury/overtraining.' : 'Gradual weekly increase.'],
      [f >= 3 && i >= 60, 'Overload (FIT)', f < 3 ? 'At least 3 sessions a week.' : i < 60 ? 'Below 60% max HR — under the training threshold.' : 'Frequency and intensity give an overload.'], [v === 'yes', 'Variance', v === 'yes' ? 'Variety avoids boredom and overuse.' : 'Add a second type of session.'],
      [w >= 8, 'Length', w >= 8 ? 'Long enough (8+ weeks recommended).' : 'At least 8 weeks recommended.'], [r >= 1, 'Monitoring', r === 2 ? 'Mid-point retest lets you adjust.' : r === 1 ? 'Add a mid-point retest.' : 'You need retests to evaluate.']];
    $('#pp-o', body).innerHTML = ok.map(x => `<div class="sort-row ${x[0] ? 'ok' : 'no'}" style="margin-bottom:6px"><div class="sort-t"><b>${x[1]}</b> — ${x[2]}</div></div>`).join('') + `<p class="small muted">${ok.filter(x => x[0]).length}/6 checks met. Remember: in the NEA you are marked on your analysis and evaluation, not on how much you improve.</p>`; });
});
SIMS.profileG = DS('Performance profile', 'Rate yourself 1–10 in your chosen activity and compare with the level you are aiming for. The biggest gaps suggest the objective for your training programme.', body => {
  const attrs = ['CV endurance', 'Speed', 'Power', 'Agility', 'Main skill technique', 'Decision making', 'Concentration', 'Confidence'];
  body.innerHTML = `<div class="grid g2"><div>${attrs.map((a, i) => dsRange('pf' + i, a, 1, 10, 1, [5, 7, 6, 6, 7, 6, 7, 5][i], '')).join('')}</div><div id="pf-o"></div></div>`;
  dsWire(body, () => { const v = attrs.map((_, i) => val(body, 'pf' + i)), gaps = v.map((x, i) => [attrs[i], 9 - x]).sort((a, b) => b[1] - a[1]).slice(0, 2);
    $('#pf-o', body).innerHTML = starSVG(attrs.map(a => a.split(' ')[0]), [{ v: attrs.map(() => 9), c: 'var(--muted)' }, { v, c: 'var(--u6)' }], 10, 300) + `<div class="box tip"><b class="lbl">Priorities</b><p>${gaps.map(g => `<b>${g[0]}</b> (gap ${g[1]})`).join(' and ')}. Back this up with data — a fitness test compared with national norms, or match statistics — then write a SMART objective.</p></div>`; });
});
/* lever lab: GCSE wording */
SIMS.lever.note = 'Mechanical advantage = effort arm ÷ load arm. A second-class lever always has MA > 1 (small effort, large load); a third-class lever always has MA < 1 — the body trades force for speed and range of movement.';
