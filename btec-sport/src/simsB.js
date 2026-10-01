/* ==========================================================
   BTEC explorations (Podium · BTEC Level 3 National Extended Certificate in Sport).
   Unit 1 anatomy and physiology; Unit 2 fitness training and programming; Unit 3 professional development;
   Unit 6 sports psychology. Replaces the GCSE joint and muscle explorers with the full BTEC lists.
   ========================================================== */

/* ---------- Unit 1 · skeletal ---------- */
SIMS.bonetype = sorterSim('Which type of bone?', 'Classify each bone by type.', ['Long', 'Short', 'Flat', 'Sesamoid', 'Irregular'], [
  ['Femur', 0, 'Longer than wide — lever.'], ['Carpals', 1, 'Cube-shaped wrist bones.'], ['Scapula', 2, 'Broad and flat.'], ['Patella', 3, 'Sits inside the quadriceps tendon.'], ['Vertebrae', 4, 'Complex shape.'],
  ['Humerus', 0, 'Long bone of the upper arm.'], ['Tarsals', 1, 'Ankle — weight bearing.'], ['Cranium', 2, 'Protects the brain.'], ['Sternum', 2, 'Flat — protects the heart.'], ['Phalanges', 0, 'Small but long-bone shape.'], ['Sacrum', 4, 'Fused irregular bones.'], ['Ribs', 2, 'Flat, curved — protection.']
]);
SIMS.skelfunc = sorterSim('Function of the skeleton', 'Which function of the skeleton does each example show?', ['Support', 'Protection', 'Muscle attachment', 'Blood cell production', 'Mineral store', 'Leverage', 'Weight bearing', 'Reduce friction'], [
  ['Cranium shields the brain in a clash of heads', 1, 'Flat bone protection.'], ['Femur and tibia swing to kick a ball', 5, 'Bones as levers.'], ['Tarsals take the load as a sprinter drives off', 6, 'Short bones.'], ['Patella lets the quadriceps tendon glide over the knee', 7, 'Sesamoid.'],
  ['Red blood cells for a marathon runner are made in marrow', 3, 'Marrow.'], ['Calcium released for muscle contraction', 4, 'Mineral store.'], ['Biceps tendon attached to the radius', 2, 'Attachment.'], ['Holding an upright posture in a balance', 0, 'Framework.']
]);
SIMS.skeladapt = sorterSim('Skeletal response, adaptation or additional factor?', 'Classify each statement.', ['Response (one session)', 'Long-term adaptation', 'Additional factor'], [
  ['Increased mineral uptake after a weight-bearing session', 0, 'Short term.'], ['Increased bone density after a year of running', 1, 'Adaptation.'], ['Stronger ligaments', 1, 'Adaptation.'], ['Osteoporosis in an older client', 2, 'Disease.'],
  ['Arthritis in the knees', 2, 'Disease.'], ['Heavy lifting may damage a child’s growth plates', 2, 'Age factor.']
]);
SIMS.joints = explorerSim('Joint explorer', 'The six synovial joint types in the specification, plus fibrous and cartilaginous joints.', [
  ['Ball and socket', '<b>Movements:</b> flexion, extension, abduction, adduction, rotation, circumduction, horizontal flexion/extension.<br><b>Found:</b> shoulder (humerus + scapula), hip (femur + pelvis).<br><b>Sport:</b> bowling in cricket; hip extension in sprinting.', 'synovial'],
  ['Hinge', '<b>Movements:</b> flexion and extension (dorsiflexion/plantarflexion at the ankle).<br><b>Found:</b> elbow (humerus, radius, ulna), knee (femur, tibia), ankle (tibia, fibula, talus).<br><b>Sport:</b> kicking; chest pass; take-off.', 'synovial'],
  ['Condyloid', '<b>Movements:</b> flexion, extension, abduction, adduction, circumduction.<br><b>Found:</b> wrist (radius, ulna, carpals).<br><b>Sport:</b> wrist flick in a basketball shot.', 'synovial'],
  ['Pivot', '<b>Movements:</b> rotation.<br><b>Found:</b> atlas and axis (cervical vertebrae); radio-ulnar joint.<br><b>Sport:</b> turning the head to track the ball; pronation in a forehand.', 'synovial'],
  ['Gliding', '<b>Movements:</b> small sliding movements.<br><b>Found:</b> between carpals and tarsals; vertebral articular processes.<br><b>Sport:</b> small wrist adjustments in a hockey push.', 'synovial'],
  ['Saddle', '<b>Movements:</b> flexion, extension, abduction, adduction, circumduction.<br><b>Found:</b> base of the thumb (carpometacarpal).<br><b>Sport:</b> gripping a racket or a ball.', 'synovial'],
  ['Cartilaginous', '<b>Movement:</b> slight.<br><b>Found:</b> intervertebral discs.<br><b>Sport:</b> small movements add up to spinal flexion in a sit-up; discs absorb shock.', 'slightly moveable'],
  ['Fibrous', '<b>Movement:</b> none.<br><b>Found:</b> cranial sutures.<br><b>Sport:</b> protection of the brain.', 'fixed']
]);
SIMS.jointmove = sorterSim('Name the movement', 'Which movement occurs?', ['Flexion', 'Extension', 'Hyperextension', 'Dorsiflexion', 'Plantarflexion', 'Lateral flexion', 'Abduction', 'Adduction', 'Horizontal abd/add', 'Rotation', 'Circumduction'], [
  ['Knee — preparing to kick', 0, 'Angle decreases.'], ['Knee — striking the ball', 1, 'Angle increases.'], ['Spine — arching back over the high-jump bar', 2, 'Beyond anatomical position.'], ['Ankle — toes pulled up in the running recovery', 3, 'Dorsiflexion.'],
  ['Ankle — pushing off the blocks', 4, 'Plantarflexion.'], ['Trunk — side bend to reach a wide ball', 5, 'Lateral flexion.'], ['Shoulder — arms out in a star jump', 6, 'Away from midline.'], ['Hip — legs together in breaststroke', 7, 'Towards midline.'],
  ['Shoulder — chest fly / discus follow-through', 8, 'Horizontal adduction.'], ['Hip — golf swing', 9, 'Rotation.'], ['Shoulder — bowling in cricket', 10, 'Cone shape.']
]);

/* ---------- Unit 1 · muscular ---------- */
SIMS.muscles = explorerSim('Muscle finder', 'The 19 major skeletal muscles in Unit 1: action and a sporting example.', [
  ['Deltoids', 'Abduction, flexion and extension of the shoulder — raising the arms to block in volleyball.'], ['Biceps', 'Elbow flexion — upward phase of a curl; pull-up.'], ['Triceps', 'Elbow extension — chest pass; press-up.'],
  ['Wrist flexors', 'Wrist flexion — basketball shot follow-through.'], ['Wrist extensors', 'Wrist extension — tennis backhand.'], ['Supinators', 'Turn the palm up — receiving an underarm throw.'], ['Pronators', 'Turn the palm down — topspin forehand.'],
  ['Pectorals', 'Horizontal adduction/flexion of the shoulder — press-up; forehand.'], ['Abdominals', 'Spinal flexion; core — sit-up; plank.'], ['Obliques', 'Lateral flexion and rotation of the trunk — golf swing; discus.'],
  ['Hip flexors', 'Hip flexion — knee drive in sprinting.'], ['Quadriceps', 'Knee extension — kicking; jumping; squat.'], ['Tibialis anterior', 'Dorsiflexion — toes up in running recovery.'], ['Erector spinae', 'Spinal extension; posture — deadlift.'],
  ['Trapezius', 'Elevates, retracts and stabilises the scapula — shrug; scrum.'], ['Latissimus dorsi', 'Shoulder adduction/extension — front crawl pull; pull-up.'], ['Gluteals', 'Hip extension — driving off the blocks; squat.'],
  ['Hamstrings', 'Knee flexion, hip extension — running recovery phase.'], ['Gastrocnemius', 'Plantarflexion (knee straight) — take-off.'], ['Soleus', 'Plantarflexion (knee bent) — distance running.']
]);
SIMS.musclematch = sorterSim('Muscle type', 'Cardiac, skeletal or smooth?', ['Cardiac', 'Skeletal', 'Smooth'], [
  ['Non-fatiguing and involuntary', 0, 'Heart.'], ['Voluntary and fatiguing', 1, 'Skeletal.'], ['Involuntary with slow contraction', 2, 'Smooth.'], ['Found in arteriole walls — vasodilation', 2, 'Smooth.'],
  ['Biceps', 1, 'Skeletal.'], ['Walls of the heart', 0, 'Cardiac.'], ['Walls of the stomach and intestines', 2, 'Smooth.'], ['Attached to bones by tendons', 1, 'Skeletal.']
]);
SIMS.fibresortB = sorterSim('Type I, IIa or IIx?', 'Which fibre type matches each statement?', ['Type I', 'Type IIa', 'Type IIx'], [
  ['Most mitochondria and myoglobin', 0, 'Slow oxidative.'], ['Fastest, most forceful, fatigues quickly', 2, 'Fast glycolytic.'], ['Fast but moderately fatigue resistant', 1, 'Fast oxidative glycolytic.'], ['Recruited first at low intensity', 0, 'Recruitment order.'],
  ['Recruited only near maximal effort', 2, 'Last.'], ['Marathon runner', 0, 'Endurance.'], ['800 m runner', 1, 'Mixed.'], ['Shot putter', 2, 'Explosive.'], ['White in colour', 2, 'Low myoglobin.']
]);
SIMS.muscresp = sorterSim('Muscular response, adaptation or additional factor?', 'Classify each statement.', ['Response (one session)', 'Long-term adaptation', 'Additional factor'], [
  ['Increased muscle temperature', 0, 'Short term.'], ['Microtears after resistance exercise', 0, 'Short term.'], ['Hypertrophy', 1, 'Adaptation.'], ['More mitochondria', 1, 'Adaptation.'], ['Increased myoglobin stores', 1, 'Adaptation.'],
  ['Lactate in a 400 m race', 0, 'Short term.'], ['Loss of muscle mass with age', 2, 'Age.'], ['Cramp', 2, 'Involuntary sustained contraction.'], ['Increased tolerance to lactate', 1, 'Adaptation.'], ['Increased muscle pliability', 0, 'Short term.']
]);

/* ---------- Unit 1 · respiratory, cardiovascular, energy ---------- */
SIMS.breathmech = DS('Mechanics of breathing', 'Choose a phase to see what the muscles do and why air moves.', body => {
  const P = { 'Inspiration at rest': ['contracts and flattens', 'external intercostals contract — ribs up and out', '↑', '↓', 'in'], 'Expiration at rest': ['relaxes and domes up', 'external intercostals relax; lungs recoil (passive)', '↓', '↑', 'out'],
    'Inspiration in exercise': ['contracts strongly', 'external intercostals + sternocleidomastoid and pectorals lift ribs further', '↑↑', '↓↓', 'in — deeper'], 'Expiration in exercise': ['pushed up by abdominals', 'internal intercostals pull ribs down and in (active)', '↓↓', '↑↑', 'out — faster'] };
  body.innerHTML = `${dsSelect('bm-p', 'Phase', Object.keys(P).map(k => [k, k]), 'Inspiration at rest')}<div id="bm-o" style="margin-top:12px"></div>`;
  dsWire(body, () => { const k = val(body, 'bm-p'), v = P[k]; $('#bm-o', body).innerHTML = `<div class="tbl"><table><tr><td>Diaphragm</td><td>${v[0]}</td></tr><tr><td>Intercostals / other muscles</td><td>${v[1]}</td></tr><tr><td>Thoracic cavity volume</td><td class="mono">${v[2]}</td></tr><tr><td>Pressure in lungs</td><td class="mono">${v[3]}</td></tr><tr><td>Air moves</td><td><b>${v[4]}</b></td></tr></table></div><p class="small muted">Air always moves from high pressure to low pressure.</p>`; });
});
SIMS.airwayorder = DS('The pathway of air', 'Tap the structures in the order air passes through them on the way in.', body => {
  const steps = ['Nasal cavity', 'Pharynx', 'Larynx', 'Trachea', 'Bronchus', 'Bronchioles', 'Alveoli']; let order, got;
  const draw = () => { body.innerHTML = `<div class="row" style="justify-content:space-between;margin-bottom:10px"><span class="pill">${got.length} / ${steps.length}</span><button class="btn sm ghost" data-r>Restart</button></div><ol class="small">${got.map(i => `<li>${steps[i]}</li>`).join('')}</ol><div class="opt-grid">${order.filter(i => !got.includes(i)).map(i => `<button class="pickb" data-i="${i}">${steps[i]}</button>`).join('')}</div>${got.length === steps.length ? '<div class="box good"><b class="lbl">Correct</b><p>The epiglottis closes over the larynx when swallowing so food does not enter the trachea.</p></div>' : ''}`;
    $('[data-r]', body).onclick = start; $$('[data-i]', body).forEach(b => b.onclick = () => { const i = +b.dataset.i; if (i === got.length) { got.push(i); sfx.good(); if (got.length === steps.length) burst(); } else sfx.bad(); draw(); }); };
  const start = () => { order = shuffle(steps.map((_, i) => i)); got = []; draw(); }; start();
});
SIMS.respadapt = sorterSim('Respiratory response, adaptation or factor?', 'Classify each statement.', ['Response (one session)', 'Long-term adaptation', 'Additional factor'], [
  ['Increased breathing rate', 0, 'Short term.'], ['Increased tidal volume', 0, 'Short term.'], ['Increased vital capacity', 1, 'Adaptation.'], ['Stronger respiratory muscles', 1, 'Adaptation.'], ['Faster O₂/CO₂ diffusion', 1, 'Capillarisation.'],
  ['Asthma', 2, 'Condition.'], ['Lower partial pressure of O₂ at altitude', 2, 'Altitude.']
]);
SIMS.bloodparts = sorterSim('Blood components and vessels', 'Match each description.', ['Red blood cells', 'White blood cells', 'Platelets', 'Plasma', 'Artery', 'Vein', 'Capillary'], [
  ['Carries oxygen on haemoglobin', 0, 'RBC.'], ['Fights infection', 1, 'WBC.'], ['Clots blood at a graze', 2, 'Platelets.'], ['Liquid that carries glucose, CO₂, hormones and heat', 3, 'Plasma.'],
  ['Thick, muscular, elastic walls; high pressure', 4, 'Artery.'], ['Thin walls with valves; low pressure', 5, 'Vein.'], ['Walls one cell thick for exchange', 6, 'Capillary.']
]);
SIMS.conductorder = DS('The conduction system', 'Tap the parts of the heart’s conduction system in the order the impulse travels.', body => {
  const steps = ['Sinoatrial node (SAN)', 'Atria contract', 'Atrioventricular node (AVN) — delay', 'Bundle of His', 'Purkinje fibres', 'Ventricles contract']; let order, got;
  const draw = () => { body.innerHTML = `<div class="row" style="justify-content:space-between;margin-bottom:10px"><span class="pill">${got.length} / ${steps.length}</span><button class="btn sm ghost" data-r>Restart</button></div><ol class="small">${got.map(i => `<li>${steps[i]}</li>`).join('')}</ol><div class="opt-grid">${order.filter(i => !got.includes(i)).map(i => `<button class="pickb" data-i="${i}">${steps[i]}</button>`).join('')}</div>${got.length === steps.length ? '<div class="box good"><b class="lbl">Correct</b><p>The sympathetic system speeds the SAN up; the parasympathetic (vagus nerve) slows it down.</p></div>' : ''}`;
    $('[data-r]', body).onclick = start; $$('[data-i]', body).forEach(b => b.onclick = () => { const i = +b.dataset.i; if (i === got.length) { got.push(i); sfx.good(); if (got.length === steps.length) burst(); } else sfx.bad(); draw(); }); };
  const start = () => { order = shuffle(steps.map((_, i) => i)); got = []; draw(); }; start();
});
SIMS.cvsort = sorterSim('Cardiovascular response, adaptation or factor?', 'Classify each statement.', ['Response (one session)', 'Long-term adaptation', 'Additional factor'], [
  ['Anticipatory rise in heart rate', 0, 'Before exercise.'], ['Increased cardiac output', 0, 'During.'], ['Redirection of blood flow', 0, 'Vascular shunt.'], ['Cardiac hypertrophy', 1, 'Adaptation.'], ['Decreased resting heart rate', 1, 'Adaptation.'],
  ['Capillarisation of muscle and alveoli', 1, 'Adaptation.'], ['Increased blood volume', 1, 'Adaptation.'], ['SADS', 2, 'Condition.'], ['Hypothermia', 2, 'Temperature.'], ['High blood pressure', 2, 'Condition.']
]);
SIMS.energysort = sorterSim('Which energy system?', 'Which energy system is the main one for each activity or statement?', ['ATP-PC', 'Lactate', 'Aerobic'], [
  ['100 m sprint', 0, '< 10 s maximal.'], ['400 m run', 1, '≈ 45–60 s.'], ['Marathon', 2, 'Hours.'], ['Shot put', 0, 'One maximal effort.'], ['100 m freestyle swim', 1, '≈ 50–60 s.'], ['Triathlon', 2, 'Long.'],
  ['Uses phosphocreatine', 0, 'PC.'], ['Produces lactic acid', 1, 'Anaerobic glycolysis.'], ['Takes place in mitochondria', 2, 'Krebs cycle and ETC.'], ['Uses fat as a fuel', 2, 'Aerobic only.'], ['Recovers in 2–3 minutes', 0, 'PC restored.'], ['Produces about 38 ATP per glucose', 2, 'Efficient.']
]);
SIMS.energyadapt = sorterSim('Energy system adaptations and factors', 'Which system or factor?', ['ATP-PC adaptation', 'Lactate adaptation', 'Aerobic adaptation', 'Additional factor'], [
  ['Increased creatine stores', 0, 'PC.'], ['Increased tolerance to lactate', 1, 'Buffering.'], ['More mitochondria', 2, 'Aerobic.'], ['Increased use of fat as fuel', 2, 'Aerobic.'], ['Increased glycogen storage', 2, 'Aerobic.'],
  ['Hypoglycaemic attack in a diabetic player', 3, 'Diabetes.'], ['Children’s limited lactate system', 3, 'Age.']
]);
SIMS.systemsmatch = sorterSim('Which systems are being linked?', 'Each statement connects two body systems. Which pair?', ['Muscular–skeletal', 'Cardiovascular–respiratory', 'Energy–cardiovascular', 'Muscular–cardiovascular', 'Muscular–energy'], [
  ['The quadriceps pull on the tibia to extend the knee', 0, 'Levers.'], ['O₂ diffuses from the alveoli into the capillaries', 1, 'Gaseous exchange.'], ['Blood carries lactate away so it can be oxidised', 2, 'Waste removal.'], ['Vasodilation sends more blood to working leg muscles', 3, 'Vascular shunt.'],
  ['Type IIx fibres rely on PC and anaerobic glycolysis', 4, 'Fibres and energy.'], ['Chemoreceptors raise both breathing and heart rate', 1, 'Cardio-respiratory control.'], ['The aerobic system needs O₂ delivered by haemoglobin', 2, 'O₂ supply.'], ['Calcium from bone is needed for muscle contraction', 0, 'Mineral store.']
]);

/* ---------- Unit 2 ---------- */
SIMS.guidelinecheck = DS('Does the client meet the guidelines?', 'Enter a client’s week. The checker compares it with the UK Chief Medical Officers’ physical activity and alcohol guidelines.', body => {
  body.innerHTML = `<div class="grid g2">${dsRange('gc-m', 'Moderate activity (min/week)', 0, 400, 10, 90, '')}${dsRange('gc-v', 'Vigorous activity (min/week)', 0, 200, 5, 20, '')}${dsRange('gc-s', 'Strength sessions (days/week)', 0, 5, 1, 0, '')}${dsRange('gc-a', 'Alcohol (units/week)', 0, 50, 1, 18, '')}${dsRange('gc-d', 'Drinking days per week', 0, 7, 1, 2, '')}</div><div id="gc-o" style="margin-top:12px"></div>`;
  dsWire(body, () => { const m = val(body, 'gc-m'), v = val(body, 'gc-v'), s = val(body, 'gc-s'), a = val(body, 'gc-a'), d = val(body, 'gc-d'), eq = m + 2 * v;
    const rows = [[eq >= 150, `Aerobic: ${m} + 2 × ${v} = ${eq} moderate-equivalent minutes (target 150)`], [s >= 2, `Strength: ${s} day(s) (target 2)`], [a <= 14, `Alcohol: ${a} units (limit 14)`], [a === 0 || d >= 3 || a <= 7, `Spread: ${d} drinking day(s) — the guideline advises spreading over 3+ days with alcohol-free days`]];
    $('#gc-o', body).innerHTML = rows.map(r => `<div class="sort-row ${r[0] ? 'ok' : 'no'}" style="margin-bottom:6px"><div class="sort-t">${r[0] ? '✓' : '✗'} ${r[1]}</div></div>`).join(''); });
});
SIMS.benefitsort = sorterSim('Type of benefit', 'Which type of benefit of physical activity is each?', ['Physical', 'Psychological', 'Social', 'Economic'], [
  ['Strengthens bones', 0, 'Physical.'], ['Reduces depression', 1, 'Psychological.'], ['Improves social skills', 2, 'Social.'], ['Reduces costs to the NHS', 3, 'Economic.'], ['Improves posture', 0, 'Physical.'],
  ['Relieves stress', 1, 'Psychological.'], ['Enhances self-esteem through belonging to a club', 2, 'Social.'], ['Reduces absenteeism from work', 3, 'Economic.'], ['Reduces risk of type 2 diabetes', 0, 'Chronic disease.']
]);
SIMS.risksort = sorterSim('Which lifestyle factor?', 'Which negative lifestyle factor is most associated with each health risk (as listed in the specification)?', ['Smoking', 'Alcohol', 'Stress', 'Lack of sleep'], [
  ['Cirrhosis', 1, 'Liver.'], ['Bronchitis', 0, 'Airways.'], ['Stomach ulcers', 2, 'Stress.'], ['Overeating', 3, 'Appetite hormones.'], ['Infertility', 0, 'Smoking.'], ['Angina', 2, 'Stress.'], ['Stroke', 1, 'Alcohol (also stress).'], ['Lung disease', 0, 'Smoking.']
]);
SIMS.modmatch = sorterSim('Which strategy for which behaviour?', 'Match each strategy to the behaviour it targets.', ['Smoking', 'Alcohol', 'Stress', 'Physical inactivity'], [
  ['Nicotine replacement therapy', 0, 'NRT.'], ['Quit Kit', 0, 'Support pack.'], ['Self-help groups such as AA', 1, 'Alcohol.'], ['Counselling to reduce drinking', 1, 'Alcohol.'], ['Assertiveness training', 2, 'Stress.'],
  ['Time management', 2, 'Stress.'], ['Cycling to work', 3, 'Active transport.'], ['Walking meetings', 3, 'At work.'], ['Meditation', 2, 'Stress.'], ['NHS stop smoking services', 0, 'Smoking.']
]);
SIMS.parq = DS('PAR-Q screening', 'Answer the questions for a fictional client. The tool shows whether they can start, or need medical clearance first.', body => {
  const Q = ['Has a doctor said you have a heart condition or high blood pressure?', 'Do you feel pain in your chest at rest, in daily activities, or when you exercise?', 'Do you lose balance because of dizziness, or have you lost consciousness in the last year?', 'Do you have a bone or joint problem that could be made worse by activity?', 'Are you taking medication for blood pressure or a heart condition?', 'Do you know of any other reason why you should not do physical activity?'];
  body.innerHTML = Q.map((q, i) => `<label class="small" style="display:flex;gap:8px;margin-bottom:8px"><input type="checkbox" id="pq${i}"><span>${q}</span></label>`).join('') + `<div id="pq-o"></div>`;
  const draw = () => { const yes = Q.filter((_, i) => $('#pq' + i, body).checked).length;
    $('#pq-o', body).innerHTML = yes ? `<div class="box warn"><b class="lbl">Refer to GP</b><p>${yes} “yes” answer${yes > 1 ? 's' : ''}: the client should get medical clearance before starting or increasing exercise. Record informed consent and keep data confidential.</p></div>` : `<div class="box good"><b class="lbl">Can start</b><p>All “no”: the client can begin a gradual, progressive programme. Rescreen if their health changes.</p></div>`; };
  $$('input', body).forEach(c => c.onchange = draw); draw();
});
SIMS.healthcheck = DS('Health monitoring calculator', 'Enter a client’s measurements to calculate BMI and waist-to-hip ratio and interpret all four health monitoring results against norms.', body => {
  body.innerHTML = `<div class="grid g2">${dsSelect('hc-s', 'Sex', [['m', 'male'], ['f', 'female']], 'm')}${dsRange('hc-h', 'Height (cm)', 145, 205, 1, 178, '')}${dsRange('hc-m', 'Mass (kg)', 40, 140, 1, 92, '')}${dsRange('hc-w', 'Waist (cm)', 55, 140, 1, 98, '')}${dsRange('hc-hp', 'Hips (cm)', 75, 140, 1, 102, '')}${dsRange('hc-sys', 'Systolic BP (mmHg)', 90, 180, 1, 138, '')}${dsRange('hc-dia', 'Diastolic BP (mmHg)', 55, 110, 1, 88, '')}${dsRange('hc-r', 'Resting HR (bpm)', 40, 100, 1, 78, '')}</div><div id="hc-o" style="margin-top:12px"></div>`;
  dsWire(body, () => { const sx = val(body, 'hc-s'), h = val(body, 'hc-h') / 100, m = val(body, 'hc-m'), b = m / (h * h), w = val(body, 'hc-w') / val(body, 'hc-hp'), s = val(body, 'hc-sys'), d = val(body, 'hc-dia'), r = val(body, 'hc-r');
    const wr = sx === 'm' ? (w < 0.9 ? ['low risk', 'good'] : w < 1 ? ['moderate risk', 'warn'] : ['high risk', 'bad']) : (w < 0.8 ? ['low risk', 'good'] : w < 0.85 ? ['moderate risk', 'warn'] : ['high risk', 'bad']);
    const bc = b < 18.5 ? ['underweight', 'warn'] : b < 25 ? ['healthy', 'good'] : b < 30 ? ['overweight', 'warn'] : ['obese', 'bad'];
    const bp = s >= 140 || d >= 90 ? ['high — refer to GP', 'bad'] : s > 120 || d > 80 ? ['pre-high', 'warn'] : s < 90 || d < 60 ? ['low', 'warn'] : ['ideal', 'good'];
    const hr = r < 50 ? ['elite / very fit', 'good'] : r < 60 ? ['athletic', 'good'] : r <= 80 ? ['average', 'warn'] : ['poor', 'bad'];
    $('#hc-o', body).innerHTML = `<div class="tbl"><table><tr><th>Test</th><th>Result</th><th>Interpretation</th></tr><tr><td>BMI</td><td class="mono">${m} ÷ ${h.toFixed(2)}² = ${b.toFixed(1)}</td><td><span class="pill ${bc[1]}">${bc[0]}</span></td></tr><tr><td>Waist-to-hip ratio</td><td class="mono">${w.toFixed(2)}</td><td><span class="pill ${wr[1]}">${wr[0]}</span></td></tr><tr><td>Blood pressure</td><td class="mono">${s}/${d} mmHg</td><td><span class="pill ${bp[1]}">${bp[0]}</span></td></tr><tr><td>Resting HR</td><td class="mono">${r} bpm</td><td><span class="pill ${hr[1]}">${hr[0]}</span></td></tr></table></div><p class="small muted">Remember: BMI does not distinguish muscle from fat — interpret it with the other results.</p>`; });
});
SIMS.nutrimatch = sorterSim('Macro- or micronutrient?', 'Match each function or source to the nutrient.', ['Carbohydrate', 'Fat', 'Protein', 'Vitamin A', 'B vitamins', 'Vitamin C', 'Vitamin D', 'Calcium', 'Iron'], [
  ['Main energy source; stored as glycogen', 0, 'Carbohydrate.'], ['Insulation; carries vitamins A and D', 1, 'Fat.'], ['Growth and repair', 2, 'Protein.'], ['Vision and immune function; carrots, liver', 3, 'Vitamin A.'], ['Release energy from food', 4, 'B vitamins.'],
  ['Immune system; helps absorb iron; citrus fruit', 5, 'Vitamin C.'], ['Absorb calcium; made with sunlight', 6, 'Vitamin D.'], ['Bone strength; dairy', 7, 'Calcium.'], ['Haemoglobin; red meat, beans', 8, 'Iron.']
]);
SIMS.drinksort = sorterSim('Which sports drink?', 'Choose the most suitable drink.', ['Hypotonic', 'Isotonic', 'Hypertonic'], [
  ['Fastest rehydration in hot weather, little energy needed', 0, '< 6%.'], ['Half-time in a football match', 1, 'Fluid + energy.'], ['Refuelling glycogen straight after a long ride', 2, '> 8%.'], ['A gymnast who needs fluid but not calories', 0, 'Dilute.'],
  ['During a 90-minute hockey match', 1, '6–8%.'], ['Contains 4 g carbohydrate per 100 ml', 0, 'Hypotonic.'], ['Contains 7 g per 100 ml', 1, 'Isotonic.'], ['Contains 10 g per 100 ml', 2, 'Hypertonic.']
]);
SIMS.compsort = sorterSim('Physical or skill-related fitness?', 'Classify each component as defined in Unit 2.', ['Physical fitness', 'Skill-related fitness'], [
  ['Aerobic endurance', 0, 'Physical.'], ['Strength', 0, 'Physical.'], ['Muscular endurance', 0, 'Physical.'], ['Flexibility', 0, 'Physical.'], ['Speed', 0, 'Physical.'], ['Body composition', 0, 'Physical.'],
  ['Agility', 1, 'Skill.'], ['Balance', 1, 'Skill.'], ['Coordination', 1, 'Skill.'], ['Reaction time', 1, 'Skill.'], ['Power', 1, 'Skill-related in this specification.']
]);
SIMS.loadcalc = DS('Resistance load calculator', 'Enter a 1RM and choose a goal to get a load, reps, sets and rest period.', body => {
  body.innerHTML = `<div class="grid g2">${dsRange('lc-r', '1RM (kg)', 20, 250, 5, 80, ' kg')}${dsSelect('lc-g', 'Goal', [['s', 'maximum strength'], ['h', 'hypertrophy'], ['e', 'muscular endurance'], ['p', 'pyramid (strength)']], 's')}</div><div id="lc-o" style="margin-top:12px"></div>`;
  dsWire(body, () => { const r = val(body, 'lc-r'), g = val(body, 'lc-g');
    const plan = g === 's' ? [[85, 90], '3–6', '3–5', '2–5 min'] : g === 'h' ? [[70, 80], '8–12', '3–4', '60–90 s'] : g === 'e' ? [[50, 60], '15–20+', '2–4', '30–60 s'] : null;
    $('#lc-o', body).innerHTML = plan ? `<div class="tbl"><table><tr><td>Load</td><td class="mono">${plan[0][0]}–${plan[0][1]}% of ${r} kg = ${Math.round(r * plan[0][0] / 100)}–${Math.round(r * plan[0][1] / 100)} kg</td></tr><tr><td>Reps</td><td>${plan[1]}</td></tr><tr><td>Sets</td><td>${plan[2]}</td></tr><tr><td>Rest</td><td>${plan[3]}</td></tr></table></div>`
      : `<div class="tbl"><table><tr><th>Set</th><th>% 1RM</th><th>Load</th><th>Reps</th></tr>${[[60, 10], [70, 8], [75, 6], [80, 4], [85, 2]].map((x, i) => `<tr><td>${i + 1}</td><td>${x[0]}%</td><td class="mono">${Math.round(r * x[0] / 100)} kg</td><td>${x[1]}</td></tr>`).join('')}</table></div><p class="small muted">Pyramid: load rises and reps fall each set.</p>`; });
});
SIMS.repsort = sorterSim('Strength or muscular endurance?', 'Which does each prescription mainly develop?', ['Strength', 'Muscular endurance'], [
  ['4 × 4 at 85% 1RM, 3 min rest', 0, 'High load, low reps.'], ['3 × 20 at 50% 1RM, 45 s rest', 1, 'Low load, high reps.'], ['Pyramid sets up to 90% 1RM', 0, 'Strength method.'], ['Circuit with resistance bands, 40 s stations', 1, 'Endurance.'],
  ['5 × 3 heavy squats', 0, 'Strength.'], ['2 × 25 body-weight lunges', 1, 'Endurance.']
]);
SIMS.flexsort = sorterSim('Flexibility and speed methods', 'Classify each method.', ['Static active', 'Static passive', 'PNF', 'Hollow sprints', 'Acceleration sprints', 'Resistance drill'], [
  ['Holding a hamstring stretch using only your own muscles', 0, 'Active.'], ['A partner holds your leg in a stretch', 1, 'Passive.'], ['Stretch, contract against partner 6–10 s, relax, stretch further', 2, 'PNF.'], ['Using a towel to pull into a calf stretch', 1, 'External aid.'],
  ['Sprint 30 m, jog 30 m, sprint 30 m, walk 30 m', 3, 'Hollow.'], ['Jog → stride → sprint over 60 m', 4, 'Gradual build-up.'], ['Sprinting with a parachute', 5, 'Resistance.'], ['Hill runs', 5, 'Resistance.'], ['Pulling a sled', 5, 'Resistance.']
]);
SIMS.skilldrill = sorterSim('Which component does the drill train?', 'Match each drill to the skill-related component.', ['Agility', 'Balance', 'Coordination', 'Reaction time', 'Power'], [
  ['Ladder footwork and cone weaves (SAQ)', 0, 'Agility.'], ['Single-leg squats on a wobble board', 1, 'Balance.'], ['Juggling and dribbling patterns', 2, 'Coordination.'], ['Catching a reaction ball', 3, 'Reaction time.'],
  ['Box jumps and bounding', 4, 'Plyometrics.'], ['Sprint starts to a whistle', 3, 'Auditory stimulus.'], ['T-drill', 0, 'Agility.'], ['Medicine-ball chest throws', 4, 'Power.'], ['Stork stand with eyes closed', 1, 'Static balance.']
]);
SIMS.progplanB = SIMS.progplan;
SIMS.principlesB = sorterSim('Which principle of training?', 'Which principle is being applied?', ['FITT', 'Specificity', 'Overload', 'Progression', 'Reversibility', 'Rest and recovery', 'Variation', 'Individual needs'], [
  ['Choosing low-impact cycling for an obese client with sore knees', 7, 'Individual needs.'], ['Training at 70% HRmax, 3 times a week, for 30 minutes, cycling', 0, 'FITT.'], ['A swimmer training in the pool', 1, 'Specificity.'], ['Working harder than normal to cause adaptation', 2, 'Overload.'],
  ['Adding 5 minutes a week to a run', 3, 'Progression.'], ['Losing fitness after 4 weeks of injury', 4, 'Reversibility.'], ['A lighter week every fourth week', 5, 'Rest and recovery.'], ['Swapping a run for a circuit to avoid boredom', 6, 'Variation.']
]);
SIMS.casepractice = DS('Interpret a client quickly', 'A random client is generated. Decide for each result whether it is healthy, borderline or a concern — then check.', body => {
  const mk = () => { const sx = pk(['m', 'f']), h = rnd(1.55, 1.92, 0.01), b = rnd(19, 35, 0.1), m = Math.round(b * h * h), s = rnd(108, 158, 1), d = rnd(68, 98, 1), r = rnd(50, 92, 1), w = rnd(sx === 'm' ? 0.82 : 0.70, sx === 'm' ? 1.06 : 0.93, 0.01); return { sx, h, m, s, d, r, w, b: m / (h * h) }; };
  let c = mk(); const draw = () => { const a = { BMI: c.b < 25 && c.b >= 18.5 ? 0 : c.b < 30 ? 1 : 2, WHR: c.sx === 'm' ? (c.w < .9 ? 0 : c.w < 1 ? 1 : 2) : (c.w < .8 ? 0 : c.w < .85 ? 1 : 2), BP: c.s >= 140 || c.d >= 90 ? 2 : c.s > 120 || c.d > 80 ? 1 : 0, RHR: c.r <= 70 ? 0 : c.r <= 80 ? 1 : 2 };
    const vals = { BMI: `${c.m} kg, ${c.h} m → ${c.b.toFixed(1)}`, WHR: c.w.toFixed(2) + (c.sx === 'm' ? ' (male)' : ' (female)'), BP: `${c.s}/${c.d} mmHg`, RHR: `${c.r} bpm` };
    body.innerHTML = Object.keys(a).map(k => `<div class="sort-row" data-k="${k}" style="margin-bottom:6px"><div class="sort-t"><b>${k}</b> ${vals[k]}</div><div class="sort-b">${['healthy', 'borderline', 'concern'].map((n, j) => `<button class="pickb" data-j="${j}">${n}</button>`).join('')}</div></div>`).join('') + `<button class="btn sm" data-new>New client</button>`;
    $$('[data-k]', body).forEach(row => $$('[data-j]', row).forEach(bt => bt.onclick = () => { const ok = +bt.dataset.j === a[row.dataset.k]; row.classList.add(ok ? 'ok' : 'no'); bt.classList.add('on'); ok ? sfx.good() : sfx.bad(); }));
    $('[data-new]', body).onclick = () => { c = mk(); draw(); }; };
  draw();
});

/* ---------- Unit 3 ---------- */
SIMS.factorsort = sorterSim('Which factor affects provision?', 'Classify each example.', ['Geographical', 'Socio-economic', 'Seasonal'], [
  ['A surf school on the coast', 0, 'Environment.'], ['Private golf clubs in a wealthy area', 1, 'Wealth.'], ['An outdoor pool that opens only in summer', 2, 'Season.'], ['A new tram line making a leisure centre viable', 0, 'Infrastructure.'],
  ['Rugby tradition in the Welsh valleys', 1, 'History and culture.'], ['Growth of padel courts', 1, 'Fashion and trend.'], ['Holiday sports camps in August', 2, 'Season.'], ['A growing city population', 0, 'Population.']
]);
SIMS.sectorsort = sorterSim('Which sector?', 'Classify each organisation.', ['Public', 'Private', 'Voluntary', 'Third sector', 'Public/private partnership'], [
  ['Council-owned leisure centre run by the council', 0, 'Public.'], ['Commercial gym chain', 1, 'Private.'], ['Local volunteer-run athletics club', 2, 'Voluntary.'], ['Leisure trust (not-for-profit) running centres', 3, 'Third sector.'],
  ['Premier League football club', 1, 'Private.'], ['A sports charity for young people', 3, 'Third sector.'], ['Private company contracted to build and run a council pool', 4, 'Partnership.'], ['Sport England', 0, 'Public body.']
]);
SIMS.jobtypes = sorterSim('Type of employment', 'Classify each job.', ['Full time', 'Part time', 'Fixed term', 'Self-employed', 'Zero-hours', 'Apprenticeship'], [
  ['Duty manager, 37.5 hours a week, permanent', 0, 'Full time.'], ['Lifeguard, Saturday and Sunday mornings', 1, 'Part time.'], ['Summer camp coach for six weeks', 2, 'Fixed term.'], ['Personal trainer running her own business', 3, 'Self-employed.'],
  ['Casual instructor called in when needed', 4, 'Zero-hours.'], ['Trainee community sports officer working towards a Level 3', 5, 'Apprenticeship.'], ['Two-year funded development officer post', 2, 'Fixed term.']
]);
SIMS.dbsquiz = sorterSim('Safeguarding and checks', 'Choose the right answer type for each statement.', ['Enhanced DBS + barred list', 'Basic DBS', 'Self-disclosure', 'Safeguarding policy'], [
  ['Required for a coach of an under-12 team', 0, 'Regulated activity.'], ['Shows unspent convictions only', 1, 'Basic.'], ['Applicant declares convictions on the form', 2, 'Self-disclosure.'], ['The club’s procedure if a child discloses abuse', 3, 'Policy.'],
  ['Needed by a swimming teacher of children', 0, 'Regulated activity.'], ['Named welfare officer and reporting steps', 3, 'Policy.']
]);
SIMS.bodymatch = sorterSim('Professional bodies', 'Match each description to the body.', ['CIMSPA', 'UK Coaching', 'NGB', 'AALA', 'REPs'], [
  ['Chartered professional body for the sport and physical activity workforce', 0, 'CIMSPA.'], ['Formerly Sports Coach UK; supports coaches', 1, 'UK Coaching.'], ['Runs coaching awards for one sport, e.g. the FA', 2, 'NGB.'], ['Licenses adventure activity providers for under-18s', 3, 'AALA.'], ['Former register of exercise professionals', 4, 'REPs.']
]);
SIMS.cpdsort = sorterSim('Type of CPD', 'Classify each CPD activity.', ['Professional body membership', 'Required update', 'Progression training', 'Cross-sector experience'], [
  ['Keeping a CPD log for CIMSPA', 0, 'Membership.'], ['Renewing a first aid certificate', 1, 'Required.'], ['Safeguarding refresher', 1, 'Required.'], ['Studying a BSc Sport Science', 2, 'Higher education.'],
  ['Level 4 strength and conditioning course', 2, 'Progression.'], ['Joining a regional sport board working group', 3, 'Cross-sector.'], ['Shadowing on an elite performance programme', 3, 'Cross-sector.']
]);
SIMS.skillsaudit = DS('Personal skills audit', 'Rate yourself 1–5 for each area against your chosen career. The tool turns the results into a SWOT starter.', body => {
  const A = ['Communication', 'Teamwork', 'Problem solving', 'Organisation', 'Reliability and commitment', 'Resilience', 'Empathy', 'Literacy', 'Numeracy', 'IT', 'Coaching / instructing', 'Leading groups', 'Administering test protocols', 'Relevant experience', 'Sector qualifications'];
  body.innerHTML = `<label class="small">Chosen career <input id="sa-c" class="ds-sel" value="sports coach" style="width:100%"></label><div class="grid g3" style="margin-top:8px">${A.map((a, i) => dsRange('sa' + i, a, 1, 5, 1, 3, '')).join('')}</div><div id="sa-o" style="margin-top:12px"></div>`;
  const draw = () => { const v = A.map((_, i) => val(body, 'sa' + i)), st = A.filter((_, i) => v[i] >= 4), wk = A.filter((_, i) => v[i] <= 2);
    $('#sa-o', body).innerHTML = `<div class="grid g2"><div class="card flat"><b>Strengths</b><div class="small">${st.join(', ') || '—'}</div></div><div class="card flat"><b>Weaknesses</b><div class="small">${wk.join(', ') || '—'}</div></div><div class="card flat"><b>Opportunities</b><div class="small">e.g. volunteering, holiday camps, NGB courses, apprenticeships for a ${esc($('#sa-c', body).value)}</div></div><div class="card flat"><b>Threats</b><div class="small">e.g. competition for jobs, course costs, travel, time</div></div></div><p class="small muted">Back up every rating with evidence (certificates, feedback, experience) — and turn weaknesses into CDAP goals.</p>`; };
  dsWire(body, draw); $('#sa-c', body).oninput = draw;
});
SIMS.swotsort = sorterSim('SWOT', 'Place each statement in the right part of a SWOT analysis for a trainee coach.', ['Strength', 'Weakness', 'Opportunity', 'Threat'], [
  ['I hold an NGB Level 1 award', 0, 'Internal, helpful.'], ['I get nervous speaking to large groups', 1, 'Internal, harmful.'], ['A local club needs volunteer coaches', 2, 'External, helpful.'], ['Many applicants for few paid coaching jobs', 3, 'External, harmful.'],
  ['I have strong communication skills', 0, 'Internal.'], ['Little experience with disability sport', 1, 'Internal.'], ['A funded apprenticeship scheme has opened', 2, 'External.'], ['The cost of the next coaching course', 3, 'External.']
]);
SIMS.cdapbuilder = DS('Career development action plan builder', 'Fill in your aim and a goal for each timescale. The checker looks for measures and actions in each goal.', body => {
  const T = [['Now', 'e.g. volunteer at my club every Saturday from September'], ['1 year', 'e.g. pass NGB Level 2 by next June'], ['2 years', 'e.g. start a BSc Sports Coaching'], ['5 years', 'e.g. graduate; academy coach'], ['10 years', 'e.g. head of academy']];
  body.innerHTML = `<label class="small">Career aim <input id="cd-a" class="ds-sel" style="width:100%" value="Become a performance football coach"></label>${T.map((t, i) => `<label class="small" style="display:block;margin-top:8px">${t[0]} <input id="cd${i}" class="ds-sel" style="width:100%" placeholder="${t[1]}"></label>`).join('')}<div id="cd-o" style="margin-top:12px"></div>`;
  const draw = () => { const g = T.map((_, i) => $('#cd' + i, body).value.trim()), ok = g.map(x => x.length > 8 && /\d|by |pass|complete|start|gain|achieve|volunteer|apply/i.test(x));
    $('#cd-o', body).innerHTML = T.map((t, i) => `<div class="sort-row ${g[i] ? (ok[i] ? 'ok' : 'no') : ''}" style="margin-bottom:6px"><div class="sort-t"><b>${t[0]}</b> ${esc(g[i]) || '<span class="muted">—</span>'} ${g[i] && !ok[i] ? '<span class="small muted">— add an action and a measure or date</span>' : ''}</div></div>`).join('') + `<p class="small muted">${ok.filter(x => x).length}/5 goals include an action and a measure. Add milestones, methods and resources in your written plan.</p>`; };
  $$('input', body).forEach(i => i.oninput = draw); draw();
});
SIMS.docmatch = sorterSim('Recruitment documents', 'Which document does each feature belong to?', ['Job advert', 'Job description', 'Person specification', 'Application form', 'CV', 'Letter of application'], [
  ['Closing date and how to apply', 0, 'Advert.'], ['List of duties and responsibilities', 1, 'JD.'], ['Essential and desirable criteria', 2, 'Person spec.'], ['Equal opportunities monitoring section', 3, 'Form.'],
  ['The applicant’s own summary of education and experience', 4, 'CV.'], ['Explains why you want the job and how you meet the criteria', 5, 'Letter.'], ['Who the post-holder reports to', 1, 'JD.'], ['“Must hold a current first aid certificate”', 2, 'Person spec.']
]);
SIMS.interviewq = sorterSim('Good interview question?', 'Is each question appropriate for a coaching job interview?', ['Appropriate', 'Not appropriate'], [
  ['Tell us about a time you managed a difficult participant.', 0, 'Open, competency-based.'], ['How old are you?', 1, 'Age is protected.'], ['What would you do if a child was injured in your session?', 0, 'Scenario.'], ['Are you planning to have children?', 1, 'Discriminatory.'],
  ['How would you adapt a drill for a mixed-ability group?', 0, 'Technical.'], ['What is your religion?', 1, 'Protected characteristic.'], ['Why do you want to work for our club?', 0, 'Motivation.']
]);
SIMS.reflectsort = sorterSim('Gibbs’ reflective cycle', 'Which stage does each sentence belong to?', ['Description', 'Feelings', 'Evaluation', 'Analysis', 'Conclusion', 'Action plan'], [
  ['I delivered a 15-minute passing drill to six peers.', 0, 'What happened.'], ['I felt nervous at the start but more confident later.', 1, 'Feelings.'], ['The demonstration went well but my timings overran.', 2, 'Good and bad.'], ['I overran because I did not plan transitions between drills.', 3, 'Why.'],
  ['Overall, better planning would have improved my session.', 4, 'Conclusion.'], ['I will plan timings and practise two micro-coaches before March.', 5, 'Next steps.']
]);

/* ---------- Unit 6 ---------- */
SIMS.typeab = DS('Type A or type B?', 'Rate how true each statement is for you (1–5). This short illustrative questionnaire is not a validated test — it shows how personality questionnaires work, and their limitations.', body => {
  const Q = ['I get impatient when I have to wait.', 'I always want to win, even in friendly games.', 'I do several things at once.', 'I get angry quickly when things go wrong.', 'I find it hard to relax.', 'I work at a fast pace.'];
  body.innerHTML = Q.map((q, i) => dsRange('ta' + i, q, 1, 5, 1, 3, '')).join('') + `<div id="ta-o" style="margin-top:12px"></div>`;
  dsWire(body, () => { const t = Q.reduce((a, _, i) => a + val(body, 'ta' + i), 0), p = (t - 6) / 24;
    $('#ta-o', body).innerHTML = `<div style="position:relative;height:24px;border-radius:12px;background:linear-gradient(90deg,var(--a3),var(--a1))"><div style="position:absolute;left:calc(${p * 100}% - 8px);top:-4px;width:16px;height:32px;border-radius:6px;background:var(--ink)"></div></div><div class="row" style="justify-content:space-between;margin-top:6px"><span class="small">Type B — relaxed, patient</span><b class="mono">${t}/30</b><span class="small">Type A — competitive, impatient</span></div><div class="box warn"><b class="lbl">Limitations</b><p>Answers can change with mood (reliability) and people may answer as they wish to be seen (validity). Never use a test like this to select players.</p></div>`; });
});
SIMS.targetsort = sorterSim('TARGET: which element?', 'Which element of TARGET does each coaching action create?', ['Task', 'Authority', 'Reward', 'Grouping', 'Evaluation', 'Timing'], [
  ['Varied, challenging drills matched to each player', 0, 'Task.'], ['Players help choose the warm-up and set tactics', 1, 'Authority.'], ['Praise for effort and personal improvement', 2, 'Reward.'], ['Mixed-ability, cooperative small groups', 3, 'Grouping.'],
  ['Progress judged against personal goals, in private', 4, 'Evaluation.'], ['Enough time to master a skill at own pace', 5, 'Timing.']
]);
SIMS.anxsort = sorterSim('Cognitive, somatic or behavioural?', 'Classify each symptom of anxiety.', ['Cognitive', 'Somatic', 'Behavioural'], [
  ['Worry about letting the team down', 0, 'Mental.'], ['Racing heart', 1, 'Physical.'], ['Fidgeting with kit', 2, 'Action.'], ['Inability to concentrate', 0, 'Mental.'], ['Muscle tension', 1, 'Physical.'],
  ['Talking quickly', 2, 'Action.'], ['Butterflies in the stomach', 1, 'Physical.'], ['Negative thoughts about failing', 0, 'Mental.'], ['Rushing the pre-shot routine', 2, 'Action.']
]);
SIMS.stressorder = DS('The stress process', 'Put the four stages in order.', body => {
  const steps = ['Environmental demands', 'Perception of demand', 'Stress response', 'Behavioural consequences']; let order, got;
  const draw = () => { body.innerHTML = `<ol class="small">${got.map(i => `<li>${steps[i]}</li>`).join('')}</ol><div class="opt-grid">${order.filter(i => !got.includes(i)).map(i => `<button class="pickb" data-i="${i}">${steps[i]}</button>`).join('')}</div>${got.length === 4 ? '<div class="box good"><b class="lbl">Correct</b><p>Stage 3 includes adrenaline and cortisol release for “fight or flight”.</p></div>' : ''}`;
    $$('[data-i]', body).forEach(b => b.onclick = () => { const i = +b.dataset.i; if (i === got.length) { got.push(i); sfx.good(); } else sfx.bad(); draw(); }); };
  order = shuffle([0, 1, 2, 3]); got = []; draw();
});
SIMS.efficacy = sorterSim('Bandura’s sources of self-efficacy', 'Which source does each example use?', ['Performance accomplishments', 'Vicarious experiences', 'Verbal persuasion', 'Emotional arousal'], [
  ['Reminding a player of the penalty she scored last week', 0, 'Past success.'], ['Watching a team-mate of similar ability land the vault', 1, 'Modelling.'], ['The coach saying “You’ve trained for this — you can do it”', 2, 'Encouragement.'], ['Using breathing control to calm nerves before a serve', 3, 'Interpreting arousal.'],
  ['Breaking a skill into steps so it is achieved in training', 0, 'Success.'], ['Team-mates cheering from the bench', 2, 'Persuasion.']
]);
SIMS.tuckmansort = sorterSim('Tuckman’s stages', 'Which stage of group development?', ['Forming', 'Storming', 'Norming', 'Performing'], [
  ['New players introduce themselves at pre-season', 0, 'Getting to know each other.'], ['Two players argue over who takes free kicks', 1, 'Conflict.'], ['The squad agrees standards for punctuality', 2, 'Norms.'], ['The team works smoothly towards winning the league', 3, 'Effective.'],
  ['Players challenge the new coach’s methods', 1, 'Conflict.'], ['Roles are clear and accepted', 2, 'Norming.']
]);
SIMS.carronsort = sorterSim('Carron’s antecedents', 'Which antecedent of cohesion?', ['Environmental', 'Personal', 'Leadership', 'Team'], [
  ['A squad of 12 rather than 30', 0, 'Group size.'], ['Players share the same goals and commitment', 1, 'Member characteristics.'], ['The coach involves players in decisions', 2, 'Leadership.'], ['The team has a long, stable history together', 3, 'Team stability.'],
  ['Players on contracts to the club', 0, 'Environmental.'], ['Shared experience of winning a cup', 3, 'Team.']
]);
SIMS.leadersort = sorterSim('Leadership', 'Classify each statement.', ['Trait approach', 'Behavioural approach', 'Interactional approach', 'Prescribed leader', 'Emergent leader', 'Autocratic style', 'Democratic style'], [
  ['Leaders are born, not made', 0, 'Trait.'], ['Leadership is learnt by watching good leaders', 1, 'Behavioural.'], ['Effective leadership depends on the situation and the leader', 2, 'Interactional.'], ['A coach appointed by the club board', 3, 'Prescribed.'],
  ['A player chosen as captain by team-mates', 4, 'Emergent.'], ['A coach makes all decisions in a 1-minute time-out', 5, 'Autocratic.'], ['A coach asks players to vote on the training focus', 6, 'Democratic.']
]);
SIMS.sociobuild = DS('Build a sociogram', 'Choose who each player would most like to train with. The sociogram updates and identifies stars, isolates and mutual choices.', body => {
  const N = ['Amy', 'Bea', 'Cal', 'Dee', 'Eve', 'Fay'], ch = [1, 0, 0, 0, 5, 4];
  const draw = () => { const W = 360, cx = 180, cy = 170, R = 120, P = N.map((_, i) => [cx + R * Math.cos(-Math.PI / 2 + i * Math.PI * 2 / N.length), cy + R * Math.sin(-Math.PI / 2 + i * Math.PI * 2 / N.length)]), recv = N.map((_, i) => ch.filter(c => c === i).length);
    let s = ''; ch.forEach((b, a) => { const [x1, y1] = P[a], [x2, y2] = P[b], L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, mu = ch[b] === a; s += arrow(x1 + ux * 24, y1 + uy * 24, x2 - ux * 24, y2 - uy * 24, mu ? 'var(--a3)' : 'var(--muted)', mu ? 2.4 : 1.5); });
    N.forEach((n, i) => s += circ(P[i][0], P[i][1], 22, 'var(--surface-2)', recv[i] >= 3 ? 'var(--a1)' : recv[i] === 0 ? 'var(--a4)' : 'var(--a2)', 2.4) + tx(P[i][0], P[i][1] + 4, n, { a: 'middle', fs: 12, w: 700, c: 'var(--ink)' }));
    const stars = N.filter((_, i) => recv[i] === Math.max(...recv)), iso = N.filter((_, i) => recv[i] === 0), mutual = N.filter((_, i) => ch[ch[i]] === i && ch[i] > i).map((n, _, __) => n + '–' + N[ch[N.indexOf(n)]]);
    body.innerHTML = `<div class="grid g2" style="align-items:center"><div>${N.map((n, i) => dsSelect('sg' + i, n + ' chooses', N.map((m, j) => [j, m]).filter(x => x[0] !== i), ch[i])).join('')}</div><div><svg viewBox="0 0 ${W} 340" width="100%">${s}</svg></div></div><div class="small"><b style="color:var(--a1)">Star(s):</b> ${stars.join(', ')} · <b style="color:var(--a4)">Isolate(s):</b> ${iso.join(', ') || 'none'} · <b style="color:var(--a3)">Mutual pairs:</b> ${mutual.join(', ') || 'none'}</div>`;
    N.forEach((_, i) => $('#sg' + i, body).onchange = e => { ch[i] = +e.target.value; draw(); }); };
  draw();
});
SIMS.pstsort = sorterSim('Psychological skill', 'Classify each technique.', ['Self-talk', 'Goal setting', 'Relaxation', 'Energising', 'Imagery'], [
  ['“Head still, follow through” said before a putt', 0, 'Instructional self-talk.'], ['Process goal: hit 70% first serves', 1, 'Goal.'], ['Progressive muscular relaxation', 2, 'Relaxation.'], ['Pep talk in the changing room', 3, 'Energising.'],
  ['Feeling the movement of a perfect dive in your mind', 4, 'Kinaesthetic imagery.'], ['Autogenic training', 2, 'Relaxation.'], ['Upbeat music before a race', 3, 'Energising.'], ['Mental rehearsal of a routine', 4, 'Imagery.'], ['Replacing “I’ll miss” with “I’ve scored hundreds”', 0, 'Positive self-talk.']
]);
SIMS.imagerysort = sorterSim('Type and use of imagery', 'Which type of imagery is described?', ['Visual', 'Auditory', 'Kinaesthetic'], [
  ['Seeing the ball fly into the top corner', 0, 'Seeing.'], ['Hearing the crowd roar as you cross the line', 1, 'Hearing.'], ['Feeling your legs drive out of the blocks', 2, 'Feel.'], ['Watching yourself on an imagined video', 0, 'External visual.'], ['The sound of the racket striking the ball', 1, 'Auditory.'], ['Sensing the tension in your arm before a throw', 2, 'Kinaesthetic.']
]);
SIMS.pstplanner = DS('PST programme planner', 'Choose the athlete’s main issue. The planner suggests techniques, a 6-week outline, milestones and evaluation methods — then adapt it to your athlete.', body => {
  const I = { cog: ['High cognitive anxiety (worry, negative thoughts)', ['positive self-talk and thought stopping', 'breathing control', 'imagery of success', 'process goals'], 'CSAI-2-style questionnaire; interview'], som: ['High somatic anxiety (tension, racing heart)', ['progressive muscular relaxation', 'breathing control', 'autogenic training'], 'questionnaire; heart rate before competition'],
    low: ['Under-aroused / lacks intensity', ['energising techniques — music, pep talk, energising imagery', 'positive statements', 'short-term goals'], 'self-rating of arousal; coach observation'], conf: ['Low self-confidence', ['performance accomplishments through graded tasks', 'imagery of past success', 'positive self-talk', 'SMART goals'], 'confidence questionnaire; performance statistics'] };
  body.innerHTML = `${dsSelect('ps-i', 'Main issue', Object.entries(I).map(([k, v]) => [k, v[0]]), 'cog')}<div id="ps-o" style="margin-top:12px"></div>`;
  dsWire(body, () => { const v = I[val(body, 'ps-i')];
    $('#ps-o', body).innerHTML = `<div class="tbl"><table><tr><td>Assessment</td><td>${v[2]}; performance profile; demands of the sport</td></tr><tr><td>Techniques</td><td>${v[1].join('; ')}</td></tr><tr><td>Weeks 1–2</td><td>education; learn techniques in calm settings (daily 10–15 min)</td></tr><tr><td>Weeks 3–4</td><td>practise in training; build into a pre-performance routine</td></tr><tr><td>Weeks 5–6</td><td>apply in practice matches, then competition</td></tr><tr><td>Milestones</td><td>e.g. routine used in every training session by week 4; anxiety score ↓ 20% by week 6</td></tr><tr><td>Evaluation</td><td>repeat questionnaire; performance data; interview; diary</td></tr></table></div><p class="small muted">For Distinction: evaluate your design and justify alternative techniques you could have used.</p>`; });
});
SIMS.verbsort = sorterSim('Command verb level', 'Which grade does each verb usually target in internal units?', ['Pass', 'Merit', 'Distinction'], [
  ['Describe', 0, 'Pass.'], ['Produce', 0, 'Pass.'], ['Analyse', 1, 'Merit (also Distinction).'], ['Compare', 1, 'Merit.'], ['Evaluate', 2, 'Distinction.'], ['Justify', 2, 'Distinction.']
]);

/* ---------- Skills: BTEC Unit 1 AOs and levels ---------- */
SIMS.commandw = sorterSim('Which Unit 1 question type?', 'Sort each command word by the assessment objective it usually targets in the Unit 1 exam.', ['AO1/AO2 short answer', 'AO3 analyse', 'AO4 evaluate', 'AO5 synoptic (8 marks)'], [
  ['State', 0, 'Recall.'], ['Identify', 0, 'Pick out.'], ['Give', 0, 'Recall.'], ['Describe', 0, 'Knowledge and understanding.'], ['Explain', 0, 'Understanding with reasons.'],
  ['Analyse (how one factor affects performance)', 1, 'Break down and link.'], ['Evaluate (one training effect)', 2, 'Strengths, limitations and a judgement.'], ['Assess', 2, 'Weigh up and judge.'],
  ['Discuss how two body systems work together', 3, 'Synoptic: links between systems.'], ['Evaluate how several body systems respond together', 3, 'AO5 links systems.']
]);
SIMS.bands = sorterSim('Which level is this answer?', 'Short descriptions of answers to “Discuss how the cardiovascular and respiratory systems work together during a 10 km run (8 marks)”. Place each in the level it would most likely reach.', ['Level 1 (1–3)', 'Level 2 (4–6)', 'Level 3 (7–8)'], [
  ['Lists “heart rate goes up” and “breathing goes up” with no links', 0, 'Isolated facts.'], ['Explains increased cardiac output and ventilation, but treats the systems separately', 1, 'Accurate knowledge, limited linkage.'],
  ['Explains how ventilation, gaseous exchange at the alveoli, cardiac output and vascular shunting combine to deliver O₂ for aerobic ATP, with a reasoned conclusion', 2, 'Systems fully integrated, applied to the run.'],
  ['Says “you breathe more and your heart pumps faster to get more oxygen”', 0, 'Basic, generic.'], ['Links breathing and heart rate to O₂ delivery but with errors and no conclusion', 1, 'Some links, partly accurate.'],
  ['Links chemoreceptors, the cardiac control centre and haemoglobin saturation, using technical terms accurately throughout', 2, 'Detailed, synoptic.']
]);
