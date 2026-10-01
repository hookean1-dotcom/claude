/* ==========================================================
   KEY AREA 2 · EXERCISE PHYSIOLOGY — part 2
   Cardiovascular system; respiratory system; aerobic and anaerobic exercise; short- and long-term effects
   ========================================================== */
TOPICS.push({
  id: '2.5', unit: '2', area: 'phys', ref: 'Cardio-respiratory and vascular system', title: 'The cardiovascular system', short: 'Heart structure, double circulation, functions of blood, cardiac values',
  summary: 'The structure of the heart (atria, ventricles) and the pulmonary and systemic circulations; the functions of the cardiovascular system — transport of oxygen, nutrients and waste, thermoregulation, vasodilation and vasoconstriction; and cardiac output, heart rate, stroke volume and blood pressure at rest and during exercise.',
  spec: [
    'Structure of the heart: atria, ventricles; pulmonary and systemic circulatory systems',
    'Functions: transportation of nutrients, oxygen and waste products; thermoregulation; vasodilation and vasoconstriction',
    'Cardiac values at rest and during exercise: cardiac output, heart rate, stroke volume',
    'Blood pressure: systolic and diastolic, values at rest and during exercise'
  ],
  learn: [
    { h: 'The heart and double circulation', html: `
[[d:heart]]
<p>The heart is a muscular pump with four chambers: two <b>atria</b> at the top (receive blood) and two <b>ventricles</b> below (pump blood out). The right side deals with <b>deoxygenated</b> blood; the left side with <b>oxygenated</b> blood. The left ventricle has the thickest wall because it pumps blood all round the body.</p>
<div class="tbl"><table><tr><th>Circulation</th><th>Route</th><th>Job</th></tr>
<tr><td><b>Pulmonary</b></td><td>right ventricle → pulmonary artery → <b>lungs</b> → pulmonary vein → left atrium</td><td>Picks up oxygen and gets rid of carbon dioxide.</td></tr>
<tr><td><b>Systemic</b></td><td>left ventricle → aorta → <b>body</b> (muscles and organs) → vena cava → right atrium</td><td>Delivers oxygen and nutrients; collects waste.</td></tr></table></div>
<p>This is called a <b>double circulation</b>: blood passes through the heart twice on each complete circuit. Arteries carry blood <b>a</b>way from the heart; veins carry it back.</p>` },
    { h: 'Functions of the cardiovascular system', html: `
<div class="tbl"><table><tr><th>Function</th><th>In exercise</th></tr>
<tr><td><b>Transport of oxygen</b></td><td>Red blood cells (haemoglobin) carry oxygen from the lungs to the working muscles.</td></tr>
<tr><td><b>Transport of nutrients</b></td><td>Glucose and fatty acids are carried to muscles for energy.</td></tr>
<tr><td><b>Removal of waste products</b></td><td>Carbon dioxide is carried to the lungs; lactic acid is carried away from muscles.</td></tr>
<tr><td><b>Thermoregulation</b></td><td>Blood carries heat from working muscles to the skin, where it is lost (sweating, radiation).</td></tr>
<tr><td><b>Vasodilation</b></td><td>Blood vessels <b>widen</b> — more blood to the working muscles and to the skin (to lose heat).</td></tr>
<tr><td><b>Vasoconstriction</b></td><td>Blood vessels <b>narrow</b> — less blood to organs such as the stomach and intestines during exercise.</td></tr></table></div>
<div class="box why"><b class="lbl">Redistribution of blood</b><p>Vasodilation and vasoconstriction together redirect blood: at rest only about 15–20% of cardiac output goes to the skeletal muscles; in hard exercise it can be over 80%. This is why you should not exercise straight after a big meal.</p></div>` },
    { h: 'Cardiac values: rest v exercise', html: `
<div class="tbl"><table><tr><th>Term</th><th>Meaning</th><th>Rest (typical)</th><th>Maximal exercise</th></tr>
<tr><td><b>Heart rate (HR)</b></td><td>Number of heart beats per minute (bpm)</td><td>60–80 bpm (trained athlete ≈ 50 or lower)</td><td>up to 220 − age</td></tr>
<tr><td><b>Stroke volume (SV)</b></td><td>Volume of blood pumped out of the left ventricle in one beat</td><td>≈ 70 ml</td><td>≈ 120 ml (up to 200 ml in elite athletes)</td></tr>
<tr><td><b>Cardiac output (Q)</b></td><td>Volume of blood pumped out of the left ventricle per minute</td><td>≈ 5 L/min</td><td>≈ 20–30 L/min</td></tr></table></div>
<p style="text-align:center;font-weight:700">cardiac output = heart rate × stroke volume</p>
[[d:hrresponse]]
<p><b>Blood pressure</b> is the force of blood against the artery walls, written as systolic/diastolic (e.g. 120/80 mmHg).</p>
<ul><li><b>Systolic</b> — the pressure when the ventricles contract (the higher number). It <b>rises</b> during exercise (e.g. to 180+ mmHg).</li>
<li><b>Diastolic</b> — the pressure when the ventricles relax and fill (the lower number). It stays <b>about the same</b> during aerobic exercise.</li></ul>
<p>Before exercise, heart rate often rises slightly because of adrenaline — the <b>anticipatory rise</b>.</p>` }
  ],
  eqs: [['Q = "HR" × "SV"', 'cardiac output = heart rate × stroke volume']],
  worked: [
    { q: 'An athlete has a heart rate of 160 bpm and a stroke volume of 120 ml. Calculate cardiac output in L/min. (2 marks)', s: ['Q = HR × SV = 160 × 120 = 19 200 ml/min.', '÷ 1000 = 19.2 L/min.'], a: '19.2 L/min' },
    { q: 'Explain the role of vasodilation during a long run. (2 marks)', s: ['Arteries/arterioles to working muscles widen…', '…so more blood (oxygen and glucose) reaches the muscles; vessels near the skin widen to lose heat.'], a: 'More blood (O₂) to muscles; heat loss via skin.' },
    { q: 'Describe the pathway of blood in the pulmonary circulation. (2 marks)', s: ['Right ventricle → pulmonary artery → lungs (oxygen picked up)', '→ pulmonary vein → left atrium.'], a: 'RV → pulmonary artery → lungs → pulmonary vein → LA.' }
  ],
  pitfalls: ['Writing that the pulmonary artery carries oxygenated blood — it carries DEoxygenated blood to the lungs.', 'Defining stroke volume “per minute” — it is per BEAT; cardiac output is per minute.', 'Forgetting to convert ml to litres (÷ 1000).', 'Saying diastolic pressure rises a lot in aerobic exercise — systolic rises; diastolic stays similar.'],
  cards: [
    ['Heart chambers that receive blood?', 'Atria.'], ['Heart chambers that pump blood out?', 'Ventricles.'], ['Pulmonary circulation?', 'Heart → lungs → heart: picks up oxygen, removes CO₂.'],
    ['Systemic circulation?', 'Heart → body → heart: delivers oxygen and nutrients.'], ['Heart rate?', 'Number of beats per minute.'], ['Stroke volume?', 'Volume of blood pumped from the left ventricle per beat.'],
    ['Cardiac output?', 'Volume of blood pumped from the left ventricle per minute = HR × SV.'], ['Resting cardiac output?', 'About 5 L/min.'], ['Vasodilation?', 'Widening of blood vessels — more blood flow.'],
    ['Vasoconstriction?', 'Narrowing of blood vessels — less blood flow.'], ['Systolic pressure?', 'Pressure when the ventricles contract (higher number).'], ['Diastolic pressure?', 'Pressure when the ventricles relax (lower number).'],
    ['Thermoregulation?', 'Controlling body temperature — blood carries heat to the skin.'], ['Anticipatory rise?', 'HR increases before exercise because of adrenaline.']
  ],
  quiz: [
    { q: 'Cardiac output = …', o: ['heart rate × stroke volume', 'stroke volume ÷ heart rate', 'tidal volume × breathing rate', 'heart rate − age'], x: 'Q = HR × SV.' },
    { q: 'Which chamber pumps oxygenated blood to the body?', o: ['Left ventricle', 'Right ventricle', 'Left atrium', 'Right atrium'], x: 'Thickest wall.' },
    { q: 'The pulmonary circulation takes blood to the…', o: ['lungs', 'muscles', 'brain', 'liver'], x: 'Pulmonary = lungs.' },
    { q: 'During exercise, vessels to the stomach…', o: ['vasoconstrict', 'vasodilate', 'disappear', 'carry more blood'], x: 'Blood diverted to muscles.' },
    { q: 'Typical resting stroke volume is about…', o: ['70 ml', '5 L', '200 bpm', '120 mmHg'], x: '≈ 70 ml per beat.' },
    { q: 'Which value rises most during aerobic exercise?', o: ['Systolic pressure', 'Diastolic pressure', 'Both fall', 'Neither changes'], x: 'Systolic rises; diastolic stays similar.' },
    { q: 'HR 100 bpm and SV 80 ml gives a cardiac output of…', o: ['8 L/min', '0.8 L/min', '80 L/min', '180 L/min'], x: '100 × 80 = 8000 ml.' },
    { q: 'Blood carries heat to the skin to cool the body. This is…', o: ['thermoregulation', 'gaseous exchange', 'vasoconstriction', 'oxygen debt'], x: 'Temperature control.' },
    { q: 'Heart rate rising just before a race starts is the…', o: ['anticipatory rise', 'oxygen debt', 'steady state', 'anaerobic threshold'], x: 'Adrenaline.' }
  ],
  exam: [
    { q: 'State the meaning of <b>stroke volume</b>. [1]', m: 1, ms: ['volume of blood pumped out of the (left) ventricle per beat'] },
    { q: 'Explain how vasodilation and vasoconstriction help a performer during exercise. [4]', m: 4, ms: ['vasodilation — widening of blood vessels', 'to working muscles — more oxygen / glucose delivered, waste removed', 'vasoconstriction — narrowing of blood vessels', 'to non-essential organs (e.g. digestive system) — blood redirected to muscles', 'vasodilation near skin — heat loss / thermoregulation'] },
    { q: 'The table shows data for a student at rest and during exercise. Rest: HR 70 bpm, SV 70 ml. Exercise: HR 170 bpm, SV 115 ml.', parts: [
      { q: 'Calculate the student’s cardiac output during exercise. Show your working and give units. [2]', m: 2, ms: ['170 × 115 = 19 550 ml/min', '= 19.55 L/min'] },
      { q: 'Explain why cardiac output increases during exercise. [3]', m: 3, ms: ['working muscles need more oxygen / glucose', 'and more removal of CO₂ / lactic acid', 'heart rate increases and stroke volume increases (Q = HR × SV)', 'more blood pumped to muscles per minute'] },
      { q: 'Describe what happens to systolic and diastolic blood pressure during exercise. [2]', m: 2, ms: ['systolic increases', 'diastolic stays about the same (may fall slightly)'] }
    ], tag: 'data' }
  ],
  sims: ['cardiacG', 'bloodpath'], gens: ['gcardout', 'gsv']
});

TOPICS.push({
  id: '2.6', unit: '2', area: 'phys', ref: 'Cardio-respiratory and vascular system', title: 'The respiratory system', short: 'Airway structure, gaseous exchange, lung volumes',
  summary: 'The structure of the respiratory system (trachea, bronchus, bronchioles, alveoli, diaphragm), how gaseous exchange oxygenates the blood, and lung volumes — tidal volume, breathing frequency, minute ventilation and vital capacity — at rest and during exercise.',
  spec: [
    'Structure: trachea, bronchus, bronchioles, alveoli, diaphragm',
    'Functions: gaseous exchange and oxygenation of blood',
    'Lung volumes: vital capacity, minute ventilation, breathing frequency (rate), tidal volume',
    'Values at rest and during exercise'
  ],
  learn: [
    { h: 'Structure', html: `
[[d:lungs]]
<div class="tbl"><table><tr><th>Part</th><th>Description and role</th></tr>
<tr><td><b>Trachea</b></td><td>The windpipe; rings of cartilage keep it open.</td></tr>
<tr><td><b>Bronchus</b> (plural bronchi)</td><td>The trachea divides into two bronchi, one to each lung.</td></tr>
<tr><td><b>Bronchioles</b></td><td>Smaller and smaller branches spreading through the lungs.</td></tr>
<tr><td><b>Alveoli</b></td><td>Millions of tiny air sacs at the end of the bronchioles where gaseous exchange happens.</td></tr>
<tr><td><b>Diaphragm</b></td><td>A sheet of muscle below the lungs. When it contracts it flattens, the chest gets bigger and air is drawn in (inspiration). When it relaxes it domes upwards and air is pushed out (expiration).</td></tr></table></div>
<p>During exercise, extra muscles help: the intercostal muscles lift the ribs further, and the abdominal muscles force air out.</p>` },
    { h: 'Gaseous exchange', html: `
[[d:gasex]]
<p>Gaseous exchange happens by <b>diffusion</b>: gases move from an area of <b>high concentration to low concentration</b>.</p>
<ul><li><b>Oxygen</b> diffuses from the alveoli (high O₂) into the blood in the capillaries (low O₂) — this <b>oxygenates</b> the blood. It is carried by haemoglobin in red blood cells.</li>
<li><b>Carbon dioxide</b> diffuses from the blood (high CO₂) into the alveoli (low CO₂) and is breathed out.</li></ul>
<div class="box tip"><b class="lbl">Why the alveoli are so efficient</b><p>Walls are one cell thick (short diffusion distance); a huge surface area (about the size of a tennis court); surrounded by a dense network of capillaries; moist surface.</p></div>` },
    { h: 'Lung volumes', html: `
<div class="tbl"><table><tr><th>Term</th><th>Meaning</th><th>Rest</th><th>Exercise</th></tr>
<tr><td><b>Tidal volume (TV)</b></td><td>Volume of air breathed in or out in one normal breath</td><td>≈ 0.5 L</td><td>increases (up to ≈ 2.5–3 L)</td></tr>
<tr><td><b>Breathing frequency (rate)</b></td><td>Number of breaths per minute</td><td>12–15</td><td>increases (up to 40–50)</td></tr>
<tr><td><b>Minute ventilation (VE)</b></td><td>Volume of air breathed in or out per minute = TV × breathing frequency</td><td>≈ 6–7.5 L/min</td><td>increases (up to 100+ L/min)</td></tr>
<tr><td><b>Vital capacity (VC)</b></td><td>The maximum volume of air that can be breathed out after a maximum breath in</td><td>≈ 4–5 L</td><td>does not change during exercise; increases slightly with long-term training</td></tr></table></div>
<p style="text-align:center;font-weight:700">minute ventilation = tidal volume × breathing frequency</p>
[[d:veresponse]]` }
  ],
  eqs: [['"VE" = "TV" × f', 'minute ventilation = tidal volume × breathing frequency']],
  worked: [
    { q: 'At rest a student’s tidal volume is 0.5 L and breathing frequency is 14 breaths per minute. Calculate minute ventilation. (1 mark)', s: ['0.5 × 14 = 7 L/min.'], a: '7 L/min' },
    { q: 'Explain how gaseous exchange takes place at the alveoli. (3 marks)', s: ['By diffusion from high to low concentration.', 'Oxygen moves from the alveoli into the blood in the capillaries.', 'Carbon dioxide moves from the blood into the alveoli to be breathed out.'], a: 'Diffusion: O₂ alveoli → blood; CO₂ blood → alveoli.' }
  ],
  pitfalls: ['Saying gases “are pumped” — they move by diffusion, high to low concentration.', 'Confusing vital capacity with tidal volume.', 'Saying vital capacity increases during exercise — it is a fixed maximum (it can increase slightly with training).', 'Mixing up bronchi and bronchioles.'],
  cards: [
    ['Trachea?', 'The windpipe — kept open by rings of cartilage.'], ['Bronchi?', 'Two tubes from the trachea, one to each lung.'], ['Bronchioles?', 'Small branching airways leading to the alveoli.'],
    ['Alveoli?', 'Tiny air sacs where gaseous exchange takes place.'], ['Role of the diaphragm?', 'Contracts and flattens to draw air in; relaxes to push air out.'], ['How does gaseous exchange happen?', 'Diffusion, from high to low concentration.'],
    ['Tidal volume?', 'Volume of air breathed in/out in one normal breath.'], ['Breathing frequency?', 'Number of breaths per minute.'], ['Minute ventilation?', 'Volume of air breathed per minute = TV × frequency.'],
    ['Vital capacity?', 'Maximum volume breathed out after a maximum breath in.'], ['Three features of alveoli?', 'One cell thick, large surface area, good blood supply (moist).'], ['Resting minute ventilation?', 'About 6–7.5 L/min.']
  ],
  quiz: [
    { q: 'Gaseous exchange takes place in the…', o: ['alveoli', 'trachea', 'bronchus', 'diaphragm'], x: 'Air sacs.' },
    { q: 'Gases move across the alveoli by…', o: ['diffusion', 'pumping', 'osmosis of water', 'vasoconstriction'], x: 'High to low concentration.' },
    { q: 'Minute ventilation = …', o: ['tidal volume × breathing frequency', 'heart rate × stroke volume', 'vital capacity − tidal volume', '220 − age'], x: 'VE = TV × f.' },
    { q: 'What happens to tidal volume during exercise?', o: ['It increases', 'It decreases', 'It stays the same', 'It becomes zero'], x: 'Deeper breaths.' },
    { q: 'The muscle that flattens to draw air in is the…', o: ['diaphragm', 'trachea', 'gastrocnemius', 'deltoid'], x: 'Main breathing muscle.' },
    { q: 'Maximum air breathed out after a maximum breath in is…', o: ['vital capacity', 'tidal volume', 'minute ventilation', 'breathing rate'], x: 'VC.' },
    { q: 'TV 2 L and frequency 30 breaths/min gives VE of…', o: ['60 L/min', '15 L/min', '32 L/min', '6 L/min'], x: '2 × 30.' },
    { q: 'The windpipe is the…', o: ['trachea', 'bronchiole', 'alveolus', 'oesophagus'], x: 'Kept open by cartilage.' },
    { q: 'Oxygen moves from alveoli into blood because…', o: ['concentration of O₂ is higher in the alveoli', 'blood has more O₂', 'the heart pulls it', 'CO₂ pushes it'], x: 'Concentration gradient.' }
  ],
  exam: [
    { q: 'Name the structures labelled A (air sacs) and B (sheet of muscle below the lungs). [2]', m: 2, ms: ['A — alveoli', 'B — diaphragm'] },
    { q: 'Describe two features of the alveoli that make gaseous exchange efficient. [2]', m: 2, ms: ['walls one cell thick / short diffusion distance', 'large surface area', 'surrounded by capillaries / good blood supply', 'moist'] },
    { q: 'A student’s breathing was measured at rest and at the end of a 10-minute run. Rest: TV 0.5 L, 12 breaths/min. Run: TV 2.2 L, 40 breaths/min.', parts: [
      { q: 'Calculate minute ventilation during the run. [1]', m: 1, ms: ['2.2 × 40 = 88 L/min'] },
      { q: 'Explain why tidal volume and breathing frequency increase during the run. [4]', m: 4, ms: ['muscles need more oxygen for aerobic energy', 'more carbon dioxide produced must be removed', 'deeper breaths (TV) — more air into the alveoli each breath', 'faster breathing — more breaths per minute', 'more gaseous exchange / more oxygen into the blood'] }
    ], tag: 'data' }
  ],
  sims: ['breathe'], gens: ['gve']
});

TOPICS.push({
  id: '2.7', unit: '2', area: 'phys', ref: 'Aerobic and anaerobic exercise', title: 'Aerobic and anaerobic exercise', short: 'Creatine phosphate, lactic acid, aerobic; oxygen debt; anaerobic threshold',
  summary: 'How muscles get energy with and without oxygen: aerobic exercise (long, low–moderate intensity, oxygen present), and anaerobic exercise using creatine phosphate (up to ≈ 10 s) and the lactic acid system (up to ≈ 1–2 min). Oxygen debt, the anaerobic threshold, and how intensity and duration decide which is used.',
  spec: [
    'Overview of aerobic and anaerobic exercise: creatine phosphate, lactic acid, aerobic characteristics, oxygen debt',
    'Anaerobic threshold and links to intensity of exercise',
    'Characteristics and factors affecting aerobic/anaerobic exercise including intensity and duration',
    'Links to training zones and diet'
  ],
  learn: [
    { h: 'Aerobic exercise', html: `
<p><b>Aerobic</b> means “with oxygen”. Aerobic exercise is <b>low to moderate intensity</b> and <b>long duration</b> — the heart and lungs can supply all the oxygen the muscles need.</p>
<p style="text-align:center;font-weight:700">glucose + oxygen → energy + carbon dioxide + water</p>
<ul><li>Fuel: carbohydrate (glucose/glycogen) and fat.</li><li>Waste products: carbon dioxide (breathed out) and water (sweat, breath) — not tiring.</li><li>Examples: marathon, long-distance swimming, cycling; jogging in a game; walking.</li><li>Trained in the <b>aerobic training zone</b> (60–80% max HR).</li></ul>` },
    { h: 'Anaerobic exercise', html: `
<p><b>Anaerobic</b> means “without oxygen”. It is <b>high intensity</b> and <b>short duration</b> — the body cannot supply oxygen fast enough.</p>
<div class="tbl"><table><tr><th></th><th>Creatine phosphate system</th><th>Lactic acid system</th></tr>
<tr><td>Fuel</td><td>creatine phosphate stored in muscles</td><td>glucose (glycogen) without oxygen</td></tr>
<tr><td>Duration</td><td>up to about <b>8–10 seconds</b></td><td>about 10 seconds to <b>1–2 minutes</b></td></tr>
<tr><td>Intensity</td><td>maximal</td><td>very high</td></tr>
<tr><td>Waste</td><td>none that causes fatigue — but stores run out quickly; take about 2–3 minutes to recover</td><td><b>lactic acid</b> — causes muscle fatigue and pain</td></tr>
<tr><td>Examples</td><td>100 m sprint, shot put, a jump, a tennis serve</td><td>400 m run, 100 m swim, a long sprint in rugby</td></tr></table></div>
<p style="text-align:center;font-weight:700">glucose → energy + lactic acid</p>
<div class="box why"><b class="lbl">The anaerobic threshold</b><p>The anaerobic threshold is the point (intensity) at which the body cannot supply enough oxygen, so lactic acid builds up faster than it can be removed. Above it, fatigue comes quickly. Training raises the threshold, so athletes can work harder before fatigue. It is roughly at the boundary of the aerobic and anaerobic training zones (≈ 80% max HR).</p></div>` },
    { h: 'Oxygen debt', html: `
[[d:o2debt]]
<p>At the start of exercise, and during anaerobic work, the muscles use more oxygen than is supplied. After exercise, breathing and heart rate stay high to take in the extra oxygen needed. This extra oxygen is the <b>oxygen debt</b> (also called EPOC). It is used to:</p>
<ul><li>break down and remove <b>lactic acid</b> (into carbon dioxide and water);</li><li>restore <b>creatine phosphate</b> stores;</li><li>re-oxygenate the blood and muscles;</li><li>bring body temperature and heart rate back to resting levels.</li></ul>` },
    { h: 'Intensity and duration — the energy continuum', html: `
<p>Most activities use <b>both</b> types — the balance depends on intensity and duration.</p>
<div class="tbl"><table><tr><th>Activity</th><th>Mainly</th></tr>
<tr><td>100 m sprint, shot put, high jump</td><td>anaerobic — creatine phosphate</td></tr>
<tr><td>400 m, 100 m swim</td><td>anaerobic — lactic acid</td></tr>
<tr><td>800 m–1500 m</td><td>mixed aerobic and anaerobic</td></tr>
<tr><td>Football, hockey, netball</td><td>mainly aerobic (jogging, walking) with anaerobic bursts (sprints, jumps, shots)</td></tr>
<tr><td>Marathon, triathlon</td><td>aerobic</td></tr></table></div>
<div class="box tip"><b class="lbl">Link to diet</b><p>Carbohydrate fuels both aerobic and anaerobic exercise; fat is used only aerobically (at lower intensities). Endurance athletes eat high-carbohydrate diets to fill glycogen stores.</p></div>` }
  ],
  eqs: [['"glucose" + "oxygen" → "energy" + CO_2 + "water"', 'aerobic'], ['"glucose" → "energy" + "lactic acid"', 'anaerobic']],
  worked: [
    { q: 'Explain why a 100 m sprint is an anaerobic activity. (2 marks)', s: ['It is maximal intensity and very short duration (about 10 s).', 'The body cannot supply oxygen quickly enough, so energy comes without oxygen — from creatine phosphate.'], a: 'Maximal, short — energy without oxygen (creatine phosphate).' },
    { q: 'Why does a runner keep breathing heavily after a 400 m race? (2 marks)', s: ['To repay the oxygen debt.', 'The extra oxygen is used to remove lactic acid / restore creatine phosphate stores.'], a: 'Repaying oxygen debt — removing lactic acid.' }
  ],
  pitfalls: ['Saying anaerobic exercise uses no energy from glucose — the lactic acid system uses glucose without oxygen.', 'Saying lactic acid is produced by aerobic exercise.', 'Describing football as “anaerobic” — it is mainly aerobic with anaerobic bursts.', 'Saying the anaerobic threshold is “when you stop” — it is the intensity at which lactic acid starts to build up rapidly.'],
  cards: [
    ['Aerobic exercise?', 'Exercise with enough oxygen — low/moderate intensity, long duration.'], ['Aerobic word equation?', 'Glucose + oxygen → energy + carbon dioxide + water.'], ['Anaerobic exercise?', 'Exercise without enough oxygen — high intensity, short duration.'],
    ['Anaerobic word equation?', 'Glucose → energy + lactic acid.'], ['Creatine phosphate system lasts?', 'About 8–10 seconds.'], ['Lactic acid system lasts?', 'About 10 s to 1–2 minutes.'],
    ['Effect of lactic acid?', 'Muscle fatigue and pain.'], ['Oxygen debt?', 'Extra oxygen taken in after exercise to recover (remove lactic acid, restore CP).'], ['Anaerobic threshold?', 'The intensity above which lactic acid builds up rapidly.'],
    ['Example of creatine phosphate activity?', '100 m sprint, shot put, tennis serve.'], ['Example of lactic acid activity?', '400 m run.'], ['Example of aerobic activity?', 'Marathon, long-distance swim.']
  ],
  quiz: [
    { q: 'Which activity is mainly aerobic?', o: ['Marathon', '100 m sprint', 'Shot put', 'High jump'], x: 'Long, steady.' },
    { q: 'The by-product of anaerobic exercise that causes fatigue is…', o: ['lactic acid', 'carbon dioxide', 'water', 'oxygen'], x: 'Lactic acid.' },
    { q: 'Creatine phosphate provides energy for about…', o: ['8–10 seconds', '2 minutes', '30 minutes', '2 hours'], x: 'Short, maximal efforts.' },
    { q: 'Aerobic respiration produces…', o: ['energy, carbon dioxide and water', 'energy and lactic acid', 'only lactic acid', 'oxygen'], x: 'With oxygen.' },
    { q: 'After a 400 m race, heavy breathing repays the…', o: ['oxygen debt', 'stroke volume', 'vital capacity', 'anticipatory rise'], x: 'Extra O₂ to recover.' },
    { q: 'A 400 m run mainly uses…', o: ['the lactic acid system', 'creatine phosphate only', 'aerobic only', 'fat'], x: '≈ 45–60 s high intensity.' },
    { q: 'Training raises the anaerobic threshold, which means…', o: ['the athlete can work harder before lactic acid builds up', 'they produce more lactic acid at rest', 'they cannot sprint', 'their heart rate falls to zero'], x: 'Delays fatigue.' },
    { q: 'Football is best described as…', o: ['mainly aerobic with anaerobic bursts', 'purely anaerobic', 'purely creatine phosphate', 'not using energy systems'], x: 'Intermittent.' },
    { q: 'Which fuel is used only aerobically?', o: ['Fat', 'Creatine phosphate', 'Glucose', 'Lactic acid'], x: 'Fat needs oxygen.' }
  ],
  exam: [
    { q: 'Complete the word equation for aerobic respiration: glucose + oxygen → energy + ______ + ______. [2]', m: 2, ms: ['carbon dioxide', 'water'] },
    { q: 'Explain what is meant by oxygen debt. [2]', m: 2, ms: ['the extra oxygen needed / taken in after exercise', 'to remove lactic acid / restore creatine phosphate / return body to resting state'] },
    { q: 'Explain the difference between aerobic and anaerobic exercise. Use examples from sport. [4]', m: 4, ms: ['aerobic — with oxygen; low to moderate intensity', 'long duration — e.g. marathon / jogging in a game', 'anaerobic — without (enough) oxygen; high intensity', 'short duration — e.g. 100 m sprint / shot put / 400 m'] },
    { q: 'Evaluate the importance of aerobic and anaerobic exercise for a netball centre during a 60-minute match. [9]', m: 9, lv: true, ms: ['aerobic: centre runs throughout — moderate intensity movement, repositioning, jogging', 'aerobic allows long duration without fatigue; waste CO₂/water easily removed', 'anaerobic (creatine phosphate): sprint to receive the ball, jump to intercept — maximal, < 10 s', 'anaerobic (lactic acid): repeated high-intensity efforts without recovery — lactic acid builds up — fatigue', 'recovery between efforts uses aerobic system to repay oxygen debt / restore CP', 'raising anaerobic threshold allows more intense play before fatigue', 'link to training zones — fartlek/interval training', 'conclusion: aerobic underpins whole match; anaerobic decides key moments; both vital'] }
  ],
  sims: ['aerosort', 'energyG'], gens: []
});

TOPICS.push({
  id: '2.8', unit: '2', area: 'phys', ref: 'Short and long term effects of exercise', title: 'Short- and long-term effects of exercise', short: 'Immediate responses and training adaptations; social and mental benefits',
  summary: 'The short-term (immediate) effects of exercise — raised heart rate, tidal volume, breathing rate, temperature, waste products — and the long-term adaptations from regular training: bone density, muscle hypertrophy and elasticity, improved energy systems, larger stroke volume, lower resting heart rate and blood pressure, lower breathing frequency and higher vital capacity; plus social and mental benefits.',
  spec: [
    'Short-term effects linked to intensity and duration: increased heart rate, tidal volume, temperature, production of waste products',
    'Long-term effects: bone density, increased elasticity of muscles, hypertrophy, improved energy systems, increased stroke volume, decreased resting heart rate, blood pressure, decreased breathing frequency, increased vital capacity',
    'Links of intensity and duration to different short- and long-term effects',
    'Effects of exercise on social and mental well-being and long-term physical benefits; benefits to health and to sporting performance'
  ],
  learn: [
    { h: 'Short-term effects (during and just after exercise)', html: `
<div class="tbl"><table><tr><th>System</th><th>Short-term effect</th><th>Why</th></tr>
<tr><td>Cardiovascular</td><td>↑ heart rate, ↑ stroke volume, ↑ cardiac output, ↑ systolic blood pressure</td><td>deliver more oxygen and glucose to the muscles</td></tr>
<tr><td>Respiratory</td><td>↑ tidal volume, ↑ breathing frequency, ↑ minute ventilation</td><td>take in more oxygen, remove more CO₂</td></tr>
<tr><td>Temperature</td><td>↑ body temperature; sweating; red skin</td><td>energy production releases heat; vasodilation to skin</td></tr>
<tr><td>Muscles</td><td>production of waste products (CO₂, lactic acid); fatigue; muscle soreness the next day (DOMS)</td><td>energy release, especially anaerobically</td></tr></table></div>
<p>The <b>higher the intensity</b>, the bigger the increases and the more lactic acid; the <b>longer the duration</b>, the more fluid is lost and the more fatigue builds up.</p>` },
    { h: 'Long-term effects (training adaptations)', html: `
<p>Adaptations happen after weeks and months of regular training (with rest to recover). They depend on the type, intensity and duration of the training.</p>
<div class="tbl"><table><tr><th>Adaptation</th><th>Benefit</th></tr>
<tr><td>↑ <b>Bone density</b> (weight-bearing exercise)</td><td>stronger bones; less risk of fractures and osteoporosis</td></tr>
<tr><td>↑ <b>Elasticity</b> of muscles; stronger ligaments and tendons</td><td>greater flexibility; fewer injuries</td></tr>
<tr><td>Muscle <b>hypertrophy</b> (muscles get bigger)</td><td>more strength and power (resistance training)</td></tr>
<tr><td>Improved <b>energy systems</b></td><td>more creatine phosphate stored; better tolerance of lactic acid; higher anaerobic threshold; more efficient aerobic system</td></tr>
<tr><td>Heart hypertrophy → ↑ <b>stroke volume</b></td><td>more blood per beat</td></tr>
<tr><td>↓ <b>Resting heart rate</b> (bradycardia)</td><td>heart works less hard; faster recovery after exercise</td></tr>
<tr><td>↓ resting <b>blood pressure</b></td><td>lower risk of hypertension, heart attack and stroke</td></tr>
<tr><td>↓ resting <b>breathing frequency</b></td><td>more efficient breathing</td></tr>
<tr><td>↑ <b>Vital capacity</b>; stronger respiratory muscles</td><td>more air per breath; more oxygen into the blood</td></tr>
<tr><td>More capillaries; more red blood cells</td><td>better oxygen delivery</td></tr></table></div>
` },
    { h: 'Wider benefits', html: `
<p>Regular exercise also brings <b>mental</b> benefits (less stress and anxiety, better mood, self-esteem, confidence, sleep) and <b>social</b> benefits (friendships, teamwork, belonging). These link directly to health and well-being in key area 1 (1.1).</p>
<div class="box why"><b class="lbl">Health v performance</b><p>For <b>health</b>, the key adaptations are lower resting HR and BP, stronger bones and better body composition — reducing disease risk. For <b>performance</b>, they allow an athlete to train harder, recover faster and delay fatigue.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why a trained athlete has a lower resting heart rate. (2 marks)', s: ['Training causes cardiac hypertrophy — the heart becomes bigger and stronger — so stroke volume increases.', 'The same cardiac output at rest can be produced with fewer beats (Q = HR × SV).'], a: '↑ SV from cardiac hypertrophy → fewer beats needed.' },
    { q: 'State two short-term effects of exercise on the respiratory system. (2 marks)', s: ['Increased tidal volume.', 'Increased breathing frequency (and so minute ventilation).'], a: '↑ TV, ↑ breathing frequency.' }
  ],
  pitfalls: ['Mixing short-term effects (during exercise, e.g. ↑ HR) with long-term effects (after months, e.g. ↓ resting HR).', 'Saying resting heart rate INCREASES with training.', 'Saying vital capacity increases during a single session — it is a long-term change.', 'Not stating “resting” when describing long-term heart rate and blood pressure changes.'],
  cards: [
    ['Three short-term effects of exercise?', '↑ heart rate, ↑ tidal volume/breathing rate, ↑ temperature, production of waste products.'], ['Long-term effect on resting heart rate?', 'Decreases.'], ['Long-term effect on stroke volume?', 'Increases (cardiac hypertrophy).'],
    ['Long-term effect on bones?', 'Increased bone density.'], ['Hypertrophy?', 'An increase in the size of a muscle (including the heart).'], ['Long-term effect on vital capacity?', 'Increases.'],
    ['Long-term effect on resting breathing frequency?', 'Decreases.'], ['Long-term effect on resting blood pressure?', 'Decreases.'], ['Long-term effect on energy systems?', 'More CP stored; better lactic acid tolerance; higher anaerobic threshold.'],
    ['Mental benefits of regular exercise?', 'Less stress/anxiety, better mood, self-esteem, confidence.'], ['Why does body temperature rise during exercise?', 'Energy release produces heat.']
  ],
  quiz: [
    { q: 'Which is a long-term effect of exercise?', o: ['Lower resting heart rate', 'Increased heart rate during a run', 'Sweating', 'Lactic acid build-up'], x: 'Adaptation over months.' },
    { q: 'Which is a short-term effect of exercise?', o: ['Increased tidal volume', 'Increased bone density', 'Hypertrophy of the heart', 'Lower resting BP'], x: 'Immediate response.' },
    { q: 'Increased bone density comes mainly from…', o: ['weight-bearing exercise', 'swimming only', 'stretching', 'sleep'], x: 'Load stimulates bone.' },
    { q: 'Stroke volume increases with training because…', o: ['the heart becomes bigger and stronger', 'heart rate rises at rest', 'blood gets thicker', 'lungs get smaller'], x: 'Cardiac hypertrophy.' },
    { q: 'Hypertrophy means…', o: ['an increase in muscle size', 'a decrease in muscle size', 'high blood pressure', 'low heart rate'], x: 'Bigger muscle.' },
    { q: 'Which is a long-term respiratory adaptation?', o: ['Increased vital capacity', 'Increased breathing rate at rest', 'Smaller alveoli', 'More lactic acid'], x: 'More air per breath.' },
    { q: 'Muscle soreness the day after hard exercise is…', o: ['DOMS', 'hypertension', 'oxygen debt', 'bradycardia'], x: 'Delayed onset muscle soreness.' },
    { q: 'A long-term effect of exercise on resting blood pressure is…', o: ['it decreases', 'it increases', 'no change ever', 'it doubles'], x: 'Lower hypertension risk.' }
  ],
  exam: [
    { q: 'State two long-term effects of regular aerobic training on the cardiovascular system. [2]', m: 2, ms: ['increased stroke volume', 'decreased resting heart rate', 'decreased resting blood pressure', 'cardiac hypertrophy / stronger heart', 'more capillaries / red blood cells'] },
    { q: 'A student completes a 30-minute circuit session. Describe three short-term effects of the session on her body. [3]', m: 3, ms: ['increased heart rate / stroke volume / cardiac output', 'increased breathing rate / tidal volume', 'increased body temperature / sweating / red skin', 'production of lactic acid / CO₂ / fatigue'] },
    { q: 'Analyse how the long-term effects of exercise could benefit both the health and the sporting performance of a 16-year-old swimmer. [9]', m: 9, lv: true, ms: ['cardiac hypertrophy → ↑ stroke volume → ↓ resting HR — healthier heart; more O₂ delivered in races', '↓ resting blood pressure — lower risk of hypertension/heart disease', '↑ vital capacity, stronger respiratory muscles — more O₂ in, better breath control', 'improved aerobic system / higher anaerobic threshold — swim faster before fatigue', 'hypertrophy of muscles (lats, deltoids) — more strength/power per stroke', 'increased muscle elasticity — flexibility for stroke technique; fewer injuries', 'bone density — limited benefit from non-weight-bearing swimming, so land training helps', 'mental/social: confidence, reduced stress, friendships in the squad', 'conclusion — adaptations improve both health and performance; depend on intensity/duration and adherence'] }
  ],
  sims: ['effects'], gens: ['grecov']
});
