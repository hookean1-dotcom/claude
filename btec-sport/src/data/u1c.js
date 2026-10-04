/* ==========================================================
   UNIT 1 · ANATOMY AND PHYSIOLOGY — part 3
   E The energy systems · interrelationships between body systems
   ========================================================== */
TOPICS.push({
  id: '1.15', unit: '1', sys: 'E', area: 'cardio', ref: 'E1–E2 ATP and the ATP-PC system', title: 'ATP and the ATP-PC system', short: 'ATP breakdown and resynthesis; the alactic system — creatine phosphate, duration, recovery',
  summary: 'Adenosine triphosphate (ATP) is the only immediately usable form of energy for muscle contraction. Learn how ATP is broken down and resynthesised, and how the ATP-PC (alactic) system uses phosphocreatine to resynthesise ATP anaerobically for maximal efforts of up to about 10 seconds, with a recovery time of about 2–3 minutes.',
  spec: [
    'ATP: the immediately accessible form of energy for exercise',
    'Breakdown and resynthesis of ATP for muscle contraction',
    'ATP-PC (alactic) system: anaerobic; chemical source (phosphate and creatine); resynthesis of ATP; recovery time; contribution to energy (duration and intensity)'
  ],
  learn: [
    { h: 'ATP: the energy currency', html: `
[[d:atp]]
<p><b>Adenosine triphosphate (ATP)</b> is made of adenosine and three phosphate groups. When the bond to the last phosphate is broken by the enzyme ATPase, energy is released for muscle contraction:</p>
<p style="text-align:center;font-weight:700">ATP → ADP + P + energy</p>
<p>Muscles store only enough ATP for about <b>2–3 seconds</b> of maximal work, so ATP must be continually <b>resynthesised</b> (ADP + P + energy → ATP). The energy for resynthesis comes from three energy systems: the ATP-PC system, the lactate system and the aerobic system.</p>` },
    { h: 'The ATP-PC (alactic) system', html: `
<div class="tbl"><table><tr><th>Feature</th><th>ATP-PC system</th></tr>
<tr><td>Oxygen</td><td><b>anaerobic</b> — no oxygen needed</td></tr>
<tr><td>Fuel (chemical source)</td><td><b>phosphocreatine (PC)</b> — creatine + phosphate, stored in muscle</td></tr>
<tr><td>Process</td><td>PC → creatine + phosphate + energy; the energy is used to resynthesise ATP (ADP + P → ATP). One PC gives one ATP.</td></tr>
<tr><td>Site</td><td>sarcoplasm of the muscle cell</td></tr>
<tr><td>Duration</td><td>up to about <b>8–10 seconds</b> of maximal effort</td></tr>
<tr><td>Intensity</td><td>maximal — very high</td></tr>
<tr><td>By-products</td><td>none that cause fatigue (alactic = no lactate)</td></tr>
<tr><td>Recovery time</td><td>PC stores ≈ 50% restored in 30 s; ≈ 100% in <b>2–3 minutes</b> (needs oxygen)</td></tr>
<tr><td>Examples</td><td>100 m sprint, shot put, high jump, a tennis serve, a weightlifting clean</td></tr></table></div>
<div class="box tip"><b class="lbl">Advantages and disadvantages</b><p>+ very fast energy release; no fatiguing by-products; fast recovery. − tiny stores, so it lasts only about 10 s; only one ATP per PC.</p></div>` }
  ],
  eqs: [['"ATP" → "ADP" + "P" + "energy"', 'breakdown of ATP'], ['"PC" → "C" + "P" + "energy"', 'energy used to resynthesise ATP']],
  worked: [
    { q: 'Explain why the ATP-PC system is the main energy system in a high jump. (2 marks)', s: ['The high jump is a single maximal effort lasting only a few seconds.', 'The ATP-PC system releases energy very quickly, anaerobically, from phosphocreatine for up to about 10 s.'], a: 'Maximal, < 10 s — fast anaerobic energy from PC.' },
    { q: 'State the recovery time for fully restoring phosphocreatine. (1 mark)', s: ['About 2–3 minutes.'], a: '2–3 minutes.' }
  ],
  pitfalls: ['Saying ATP lasts 10 seconds — ATP stores last 2–3 s; the ATP-PC system lasts up to about 10 s.', 'Saying the ATP-PC system produces lactate.', 'Writing “PC breaks down ATP” — PC breakdown releases energy to RESYNTHESISE ATP.', 'Forgetting the recovery time (2–3 min).'],
  cards: [
    ['ATP?', 'Adenosine triphosphate — the only immediately usable energy for muscle contraction.'], ['ATP breakdown?', 'ATP → ADP + P + energy (enzyme ATPase).'], ['ATP stores last?', 'About 2–3 seconds.'],
    ['Fuel of the ATP-PC system?', 'Phosphocreatine (creatine + phosphate).'], ['Duration of ATP-PC system?', 'Up to about 8–10 seconds.'], ['Is the ATP-PC system aerobic?', 'No — anaerobic (alactic).'],
    ['PC recovery time?', '≈ 50% in 30 s; ≈ 100% in 2–3 minutes.'], ['By-products of ATP-PC?', 'None that cause fatigue.'], ['Sports using ATP-PC?', '100 m, shot put, high jump, tennis serve.']
  ],
  quiz: [
    { q: 'ATP stands for…', o: ['adenosine triphosphate', 'aerobic triglyceride phosphate', 'adenine tri-protein', 'anaerobic transfer process'], x: 'Energy currency.' },
    { q: 'The ATP-PC system lasts for about…', o: ['8–10 seconds', '2 minutes', '30 minutes', '1 second'], x: 'Maximal effort.' },
    { q: 'The fuel for the ATP-PC system is…', o: ['phosphocreatine', 'glycogen', 'fat', 'lactate'], x: 'Stored in muscle.' },
    { q: 'Full recovery of PC stores takes about…', o: ['2–3 minutes', '10 seconds', '1 hour', '24 hours'], x: 'Needs oxygen.' },
    { q: 'Which activity relies mostly on the ATP-PC system?', o: ['Shot put', 'Marathon', '800 m', 'Long-distance swim'], x: 'Single maximal effort.' },
    { q: 'ATP → ADP + P + …', o: ['energy', 'lactate', 'oxygen', 'glucose'], x: 'Breakdown releases energy.' },
    { q: '“Alactic” means…', o: ['no lactate is produced', 'it needs oxygen', 'it uses fat', 'it lasts for hours'], x: 'No lactic acid.' }
  ],
  exam: [
    { q: 'Describe the role of ATP in muscle contraction. [2]', m: 2, ms: ['ATP is the immediate source of energy for muscle contraction', 'broken down into ADP + phosphate, releasing energy'] },
    { q: 'Describe how the ATP-PC system resynthesises ATP. [3]', m: 3, ms: ['anaerobic (no oxygen needed)', 'phosphocreatine broken down into creatine and phosphate, releasing energy', 'energy used to rejoin ADP and phosphate to make ATP', '1 PC : 1 ATP; lasts up to ≈ 10 s'] },
    { q: 'Explain why a weightlifter rests for about 3 minutes between maximal lifts. [2]', m: 2, ms: ['maximal lifts use the ATP-PC system / phosphocreatine', 'PC stores take 2–3 minutes to be fully restored'] }
  ],
  sims: ['energy'], gens: ['pcrecover']
});

TOPICS.push({
  id: '1.16', unit: '1', sys: 'E', area: 'cardio', ref: 'E3 The lactate system', title: 'The lactate system', short: 'Anaerobic glycolysis, lactic acid, duration, recovery',
  summary: 'The lactate system resynthesises ATP anaerobically by anaerobic glycolysis — breaking down glucose (from glycogen) into lactic acid — for high-intensity exercise lasting from about 10 seconds to 2 minutes. Learn its process, by-products, recovery time and contribution to sport.',
  spec: [
    'Anaerobic',
    'Process of anaerobic glycolysis: glucose converted to lactic acid',
    'Recovery time',
    'Contribution to energy for exercise and sports performance (duration and intensity)'
  ],
  learn: [
    { h: 'Anaerobic glycolysis', html: `
<div class="tbl"><table><tr><th>Feature</th><th>Lactate system</th></tr>
<tr><td>Oxygen</td><td><b>anaerobic</b></td></tr>
<tr><td>Fuel</td><td><b>glucose</b> (from glycogen stored in muscle and liver)</td></tr>
<tr><td>Process</td><td><b>anaerobic glycolysis</b>: glucose is broken down to pyruvate, which without oxygen is converted to <b>lactic acid</b>. The energy released resynthesises <b>2 ATP</b> per glucose.</td></tr>
<tr><td>Site</td><td>sarcoplasm</td></tr>
<tr><td>Duration</td><td>about <b>10 seconds to 2 minutes</b></td></tr>
<tr><td>Intensity</td><td>high (just below maximal)</td></tr>
<tr><td>By-product</td><td><b>lactic acid</b> — it lowers the pH in the muscle, inhibiting enzymes and causing fatigue and a burning feeling</td></tr>
<tr><td>Recovery time</td><td>lactate removal takes about <b>1–2 hours</b> (faster with an active cool-down)</td></tr>
<tr><td>Examples</td><td>400 m run, 100 m swim, a long sprint in rugby, a 1-minute gymnastics floor routine</td></tr></table></div>
<p style="text-align:center;font-weight:700">glucose → 2 ATP + lactic acid</p>
<div class="box tip"><b class="lbl">Advantages and disadvantages</b><p>+ fast energy release for high intensity; larger fuel store than PC. − lactic acid causes fatigue; only 2 ATP per glucose (inefficient); long recovery.</p></div>` },
    { h: 'What happens to lactate?', html: `
<p>After exercise, with oxygen available, lactic acid is converted back to pyruvate and either oxidised in the mitochondria (to CO₂ and water) or carried in the blood to the liver and converted to glucose/glycogen. An <b>active recovery</b> (light jogging) keeps blood flowing and removes lactate faster than resting.</p>` }
  ],
  eqs: [['"glucose" → 2"ATP" + "lactic acid"', 'anaerobic glycolysis']],
  worked: [
    { q: 'Explain why a 400 m runner feels fatigue in the final 100 m. (3 marks)', s: ['The race is high intensity for 45–60 s, so the lactate system is the main energy system.', 'Anaerobic glycolysis produces lactic acid.', 'Lactic acid lowers muscle pH, inhibiting enzymes and causing fatigue.'], a: 'Lactate system → lactic acid → ↓ pH → fatigue.' }
  ],
  pitfalls: ['Saying the lactate system lasts 10 minutes — it is about 10 s to 2 min.', 'Saying lactic acid is produced in the aerobic system.', 'Saying the lactate system uses fat — it uses glucose/glycogen only.', 'Writing that lactate causes DOMS the next day — that is microtears.'],
  cards: [
    ['Process of the lactate system?', 'Anaerobic glycolysis: glucose → lactic acid.'], ['ATP per glucose (anaerobic)?', '2 ATP.'], ['Duration of lactate system?', 'About 10 s to 2 minutes.'],
    ['Fuel of lactate system?', 'Glucose (glycogen).'], ['By-product of lactate system?', 'Lactic acid.'], ['Why does lactic acid cause fatigue?', 'It lowers pH, inhibiting enzymes.'],
    ['Lactate recovery time?', 'About 1–2 hours.'], ['Best way to speed lactate removal?', 'Active recovery (light exercise).'], ['Sport using the lactate system?', '400 m, 100 m swim.']
  ],
  quiz: [
    { q: 'Anaerobic glycolysis converts glucose into…', o: ['lactic acid', 'carbon dioxide and water', 'phosphocreatine', 'fat'], x: 'Without oxygen.' },
    { q: 'The lactate system is the main system for…', o: ['a 400 m race', 'a marathon', 'a shot put', 'walking'], x: '45–60 s high intensity.' },
    { q: 'How many ATP are produced from one glucose anaerobically?', o: ['2', '38', '1', '0'], x: 'Inefficient.' },
    { q: 'Lactic acid causes fatigue because it…', o: ['lowers muscle pH', 'raises blood glucose', 'increases PC stores', 'cools the muscles'], x: 'Acidity.' },
    { q: 'Lactate is removed fastest by…', o: ['an active recovery', 'lying still', 'eating protein', 'stretching only'], x: 'Blood flow.' },
    { q: 'The lactate system operates for about…', o: ['10 s to 2 min', '0–3 s', '10–60 min', 'over 2 hours'], x: 'Duration.' }
  ],
  exam: [
    { q: 'Name the by-product of the lactate system. [1]', m: 1, ms: ['lactic acid (lactate)'] },
    { q: 'Describe how the lactate system produces ATP. [3]', m: 3, ms: ['anaerobic — without oxygen', 'glucose / glycogen broken down by anaerobic glycolysis', 'to lactic acid / pyruvate converted to lactic acid', 'energy releases resynthesises 2 ATP per glucose'] },
    { q: 'Compare the ATP-PC system and the lactate system. [4]', m: 4, ms: ['both anaerobic', 'fuel: PC v glucose/glycogen', 'duration: up to 10 s v 10 s–2 min', 'by-products: none v lactic acid (fatigue)', 'recovery: 2–3 min v 1–2 hours'] }
  ],
  sims: ['threshold', 'energysort'], gens: []
});

TOPICS.push({
  id: '1.17', unit: '1', sys: 'E', area: 'cardio', ref: 'E4 The aerobic system', title: 'The aerobic system', short: 'Mitochondria, food fuels, aerobic glycolysis, Krebs cycle, electron transport chain',
  summary: 'The aerobic energy system resynthesises large amounts of ATP using oxygen in the mitochondria, from carbohydrates and fats. Learn the three stages — aerobic glycolysis, the Krebs cycle and the electron transport chain — its fuels, recovery and contribution to long-duration, low-to-moderate intensity exercise.',
  spec: [
    'Site of reaction: mitochondria',
    'Food fuel sources: carbohydrates and fats (and protein)',
    'Process: aerobic glycolysis, Krebs cycle, electron transport chain',
    'Recovery time; contribution to energy (duration and intensity)'
  ],
  learn: [
    { h: 'Three stages', html: `
<div class="tbl"><table><tr><th>Stage</th><th>Where</th><th>What happens</th><th>ATP</th></tr>
<tr><td><b>1 Aerobic glycolysis</b></td><td>sarcoplasm</td><td>glucose is broken down into pyruvate (with oxygen present, no lactic acid)</td><td>2</td></tr>
<tr><td><b>2 Krebs cycle</b></td><td>mitochondria (matrix)</td><td>pyruvate (as acetyl-CoA) is oxidised; <b>carbon dioxide</b> is produced and hydrogen is released. Fats enter here after beta-oxidation.</td><td>2</td></tr>
<tr><td><b>3 Electron transport chain</b></td><td>mitochondria (cristae)</td><td>hydrogen is passed along carriers; the energy released makes most of the ATP; hydrogen combines with oxygen to form <b>water</b></td><td>≈ 34</td></tr></table></div>
<p style="text-align:center;font-weight:700">glucose + oxygen → carbon dioxide + water + ≈ 36–38 ATP</p>
[[d:energycont]]` },
    { h: 'Characteristics', html: `
<div class="tbl"><table><tr><th>Feature</th><th>Aerobic system</th></tr>
<tr><td>Oxygen</td><td>required — <b>aerobic</b></td></tr>
<tr><td>Site</td><td><b>mitochondria</b> (glycolysis in the sarcoplasm)</td></tr>
<tr><td>Fuels</td><td>carbohydrate (glucose/glycogen) and <b>fats</b> (fatty acids); protein only in extreme cases</td></tr>
<tr><td>Duration</td><td>from about 2 minutes to hours</td></tr>
<tr><td>Intensity</td><td>low to moderate</td></tr>
<tr><td>By-products</td><td>carbon dioxide and water — not fatiguing</td></tr>
<tr><td>Recovery</td><td>quick; the main limit is fuel — glycogen stores take 24–48 hours to refill</td></tr>
<tr><td>Examples</td><td>marathon, triathlon, long-distance cycling; jogging between efforts in games; recovery between sprints</td></tr></table></div>
<p>Fats release more ATP per molecule but need more oxygen, so they are used mainly at low intensity; carbohydrate becomes the main fuel as intensity rises.</p>` }
  ],
  eqs: [['"glucose" + O_2 → CO_2 + H_2O + 38"ATP"', 'aerobic respiration (≈ 36–38 ATP)']],
  worked: [
    { q: 'Name the three stages of the aerobic system and where each takes place. (3 marks)', s: ['Aerobic glycolysis — sarcoplasm.', 'Krebs cycle — mitochondria (matrix).', 'Electron transport chain — mitochondria (cristae).'], a: 'Glycolysis (sarcoplasm); Krebs cycle and ETC (mitochondria).' },
    { q: 'Explain why a marathon runner uses fat as well as carbohydrate. (2 marks)', s: ['A marathon is long and of moderate intensity, so plenty of oxygen is available to break down fat.', 'Using fat spares limited glycogen stores, delaying fatigue (“hitting the wall”).'], a: 'Moderate intensity allows fat use — spares glycogen.' }
  ],
  pitfalls: ['Saying the whole aerobic system happens in the mitochondria — glycolysis is in the sarcoplasm.', 'Getting by-products wrong — CO₂ (Krebs cycle) and water (ETC).', 'Saying fats are used in sprints.', 'Confusing aerobic glycolysis (to pyruvate) with anaerobic glycolysis (to lactic acid).'],
  cards: [
    ['Three stages of aerobic system?', 'Aerobic glycolysis, Krebs cycle, electron transport chain.'], ['Site of Krebs cycle and ETC?', 'Mitochondria.'], ['By-products of aerobic system?', 'Carbon dioxide and water.'],
    ['ATP from one glucose aerobically?', 'About 36–38.'], ['Where is most ATP made?', 'Electron transport chain.'], ['Aerobic fuels?', 'Carbohydrate and fat (protein in extremes).'],
    ['Where is CO₂ produced?', 'Krebs cycle.'], ['Where is water produced?', 'Electron transport chain.'], ['Duration of aerobic system as main system?', 'Beyond ≈ 2 minutes, for hours.']
  ],
  quiz: [
    { q: 'The Krebs cycle takes place in the…', o: ['mitochondria', 'sarcoplasm', 'blood plasma', 'alveoli'], x: 'Aerobic site.' },
    { q: 'Most ATP in the aerobic system is produced in the…', o: ['electron transport chain', 'Krebs cycle', 'glycolysis', 'ATP-PC system'], x: '≈ 34 ATP.' },
    { q: 'Which fuel is only used aerobically?', o: ['Fat', 'Glucose', 'Phosphocreatine', 'ATP'], x: 'Needs lots of oxygen.' },
    { q: 'The by-products of the aerobic system are…', o: ['carbon dioxide and water', 'lactic acid', 'creatine and phosphate', 'none'], x: 'Not fatiguing.' },
    { q: 'Aerobic glycolysis takes place in the…', o: ['sarcoplasm', 'mitochondria', 'nucleus', 'liver only'], x: 'Stage 1.' },
    { q: 'Roughly how many ATP come from one glucose aerobically?', o: ['36–38', '2', '1', '100'], x: 'Efficient.' }
  ],
  exam: [
    { q: 'State the site of the aerobic energy system. [1]', m: 1, ms: ['mitochondria'] },
    { q: 'Describe the process of the aerobic energy system. [4]', m: 4, ms: ['aerobic glycolysis — glucose to pyruvate (sarcoplasm), 2 ATP', 'Krebs cycle — in mitochondria; CO₂ produced; hydrogen released', 'electron transport chain — hydrogen carriers; most ATP (≈ 34); water formed', 'fats enter via beta-oxidation / Krebs cycle; ≈ 36–38 ATP per glucose'] },
    { q: 'Assess the contribution of the three energy systems during a 1500 m race. [6]', m: 6, lv: true, ms: ['race lasts ≈ 4 minutes at high intensity', 'start: ATP-PC system for the fast start (first ≈ 10 s)', 'lactate system contributes during surges and the final sprint — lactic acid causes fatigue at the end', 'aerobic system provides the majority of energy over the middle of the race', 'systems work together — energy continuum; intensity decides the predominant system', 'judgement: mainly aerobic (≈ 75–85%) with significant anaerobic contribution at start and finish'] }
  ],
  sims: ['fuel'], gens: []
});

TOPICS.push({
  id: '1.18', unit: '1', sys: 'E', area: 'cardio', ref: 'E5–E6 Adaptations and additional factors', title: 'Energy systems: adaptations and factors', short: 'Creatine stores, lactate tolerance, fat use, glycogen, mitochondria; diabetes, children',
  summary: 'How the energy systems adapt to training — increased creatine stores (ATP-PC), increased tolerance to lactate (lactate system), increased use of fat, increased glycogen storage and more mitochondria (aerobic) — and additional factors: diabetes and hypoglycaemic attacks, and children’s limited lactate system.',
  spec: [
    'ATP-PC adaptation: increased creatine stores',
    'Lactate system adaptation: increased tolerance to lactate',
    'Aerobic system adaptations: increased use of fats as an energy source, increased storage of glycogen, increased numbers of mitochondria',
    'Additional factors: diabetes (hypoglycaemic attack); children’s lack of lactate system'
  ],
  learn: [
    { h: 'Adaptations', html: `
<div class="tbl"><table><tr><th>System</th><th>Adaptation</th><th>Training that causes it</th><th>Benefit</th></tr>
<tr><td>ATP-PC</td><td><b>increased creatine (PC) stores</b></td><td>short maximal efforts, e.g. 10 × 30 m sprints with full recovery</td><td>maximal efforts last slightly longer; faster resynthesis</td></tr>
<tr><td>Lactate</td><td><b>increased tolerance to lactate</b> (better buffering)</td><td>high-intensity intervals of 30 s–2 min with short recovery</td><td>keep working at high intensity for longer before fatigue</td></tr>
<tr><td>Aerobic</td><td><b>increased use of fats</b> as fuel</td><td>long, steady aerobic training</td><td>spares glycogen — delays fatigue</td></tr>
<tr><td>Aerobic</td><td><b>increased glycogen storage</b></td><td>aerobic training (and diet)</td><td>more fuel for long events</td></tr>
<tr><td>Aerobic</td><td><b>more mitochondria</b> (number and size)</td><td>aerobic training</td><td>more aerobic ATP; higher intensity before lactate builds</td></tr></table></div>` },
    { h: 'Diabetes', html: `
<p>In diabetes the body cannot control blood glucose properly (type 1: no insulin made; type 2: the body does not respond well to insulin). Exercise uses glucose, so a diabetic performer risks a <b>hypoglycaemic attack</b> — blood glucose too low.</p>
<ul><li><b>Signs</b>: shaking, sweating, dizziness, confusion, pale skin, irritability; in severe cases loss of consciousness.</li>
<li><b>Treatment</b>: stop exercising; take fast-acting sugar (glucose tablets, sugary drink), then a longer-lasting carbohydrate snack.</li>
<li><b>Prevention</b>: check blood glucose before, during and after exercise; adjust insulin and food; carry a snack; tell the coach.</li></ul>
<p>Regular exercise helps prevent and manage type 2 diabetes by improving insulin sensitivity.</p>` },
    { h: 'Children’s energy systems', html: `
<p>Children have a less developed <b>lactate system</b> — lower levels of glycolytic enzymes, so they produce less lactate and cannot sustain high-intensity anaerobic work for long. They rely more on the aerobic system and recover quickly. Training for young people should focus on aerobic fitness, skills and short bursts with plenty of recovery, rather than long, intense lactate sessions.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain how increased tolerance to lactate benefits a 400 m runner. (2 marks)', s: ['The muscles and blood buffer lactic acid better, so pH falls more slowly.', 'The runner can maintain high intensity for longer before fatigue in the final 100 m.'], a: 'Better buffering — delays fatigue.' },
    { q: 'Describe two signs of a hypoglycaemic attack. (2 marks)', s: ['Shaking / sweating.', 'Dizziness / confusion / pale skin.'], a: 'Any two: shaking, sweating, dizziness, confusion, pale.' }
  ],
  pitfalls: ['Saying increased mitochondria is an ATP-PC adaptation — it is aerobic.', 'Confusing hypoglycaemia (low glucose) with hyperglycaemia (high glucose).', 'Saying children have a better lactate system than adults.', 'Not matching the training method to the adaptation.'],
  cards: [
    ['ATP-PC adaptation?', 'Increased creatine (PC) stores.'], ['Lactate system adaptation?', 'Increased tolerance to lactate.'], ['Three aerobic adaptations?', '↑ fat use, ↑ glycogen storage, ↑ mitochondria.'],
    ['Hypoglycaemic attack?', 'Blood glucose too low — shaking, sweating, dizziness, confusion.'], ['Treatment for hypoglycaemia?', 'Stop, fast-acting sugar, then a carbohydrate snack.'], ['Children’s energy systems?', 'Less developed lactate system — rely more on aerobic.'],
    ['Why use more fat as fuel?', 'Spares glycogen, delaying fatigue.']
  ],
  quiz: [
    { q: 'Increased creatine stores is an adaptation of the…', o: ['ATP-PC system', 'lactate system', 'aerobic system', 'respiratory system'], x: 'PC.' },
    { q: 'More mitochondria is an adaptation of the…', o: ['aerobic system', 'ATP-PC system', 'lactate system', 'skeletal system'], x: 'Aerobic.' },
    { q: 'A diabetic player becomes shaky and confused during training. This is most likely…', o: ['a hypoglycaemic attack', 'hyperthermia', 'cramp', 'asthma'], x: 'Low blood glucose.' },
    { q: 'First aid for a hypoglycaemic attack is…', o: ['fast-acting sugar', 'more exercise', 'an ice bath', 'a protein shake only'], x: 'Raise glucose.' },
    { q: 'Compared with adults, children…', o: ['have a less developed lactate system', 'produce more lactate', 'cannot use the aerobic system', 'have more PC'], x: 'Fewer glycolytic enzymes.' },
    { q: 'Increased tolerance to lactate is developed by…', o: ['high-intensity intervals', 'long slow walks', 'stretching', 'yoga'], x: 'Anaerobic training.' }
  ],
  exam: [
    { q: 'State one adaptation of the aerobic energy system to training. [1]', m: 1, ms: ['increased use of fat as fuel', 'increased glycogen storage', 'increased number / size of mitochondria'] },
    { q: 'Explain why young children should not take part in long, high-intensity anaerobic training sessions. [2]', m: 2, ms: ['children have a less developed lactate system / fewer glycolytic enzymes', 'cannot sustain high-intensity anaerobic work; training better focused on aerobic/skill work with recovery'] },
    { q: 'A type 1 diabetic plays in a netball team.', parts: [
      { q: 'Evaluate how the player and coach could manage the risks of diabetes during training and matches. [6]', m: 6, lv: true, ms: ['exercise uses glucose — risk of hypoglycaemic attack', 'check blood glucose before, during (breaks) and after exercise', 'adjust insulin dose and carbohydrate intake in consultation with medical advice', 'carry fast-acting sugar (glucose tablets, drinks) courtside', 'coach and team-mates know the signs (shaking, sweating, confusion) and first aid', 'benefits of exercise: improved insulin sensitivity, fitness, well-being', 'judgement: with planning, risks are manageable and participation is beneficial'] }
    ], tag: 'struct' }
  ],
  sims: ['energyadapt'], gens: []
});

TOPICS.push({
  id: '1.19', unit: '1', sys: 'F', area: 'cardio', ref: 'AO5 Interrelationships between body systems', title: 'Interrelationships between the body systems', short: 'Muscular–skeletal, cardio-respiratory, energy–cardiovascular links in sport',
  summary: 'The highest-mark Unit 1 questions (AO5, 8 marks) ask you to make connections between body systems: the muscular system with all other systems, the cardiovascular with the respiratory system, and the energy systems with the cardiovascular system — in response to short- and long-term exercise.',
  spec: [
    'Connections between the muscular and all other systems',
    'Connections between the cardiovascular and respiratory systems (the cardio-respiratory system)',
    'Connections between the energy and cardiovascular systems',
    'Connections in response to short-term exercise and long-term training'
  ],
  learn: [
    { h: 'The key links', html: `
[[d:systemsweb]]
<div class="tbl"><table><tr><th>Link</th><th>How the systems work together</th></tr>
<tr><td><b>Muscular + skeletal</b></td><td>muscles pull on bones (levers) across joints to create movement; bones provide attachment; muscle contraction needs calcium released from bones; weight-bearing loading strengthens both bones and tendons</td></tr>
<tr><td><b>Muscular + cardiovascular</b></td><td>working muscles need more O₂ and glucose: ↑ HR, SV and Q and vasodilation deliver them, and remove CO₂ and lactate; muscle contraction (the skeletal muscle pump) helps venous return; long term — capillarisation of muscle, more myoglobin</td></tr>
<tr><td><b>Muscular + energy systems</b></td><td>muscle contraction needs ATP; fibre type matches energy system (type I — aerobic; type IIx — ATP-PC/lactate); mitochondria in muscle are the site of aerobic respiration</td></tr>
<tr><td><b>Cardiovascular + respiratory</b></td><td>the respiratory system takes O₂ into the alveoli; the cardiovascular system carries it to the muscles and returns CO₂ for exhalation; gaseous exchange at alveoli and muscle capillaries; chemoreceptors raise both breathing and heart rate; long term — capillarisation of alveoli, ↑ blood volume, ↑ VC</td></tr>
<tr><td><b>Energy + cardiovascular</b></td><td>the aerobic system depends on O₂ delivered by the blood; the blood removes CO₂ and lactate; when O₂ delivery cannot keep up, the anaerobic systems take over (lactate builds); recovery (oxygen debt/EPOC) needs raised HR and breathing to restore PC and remove lactate</td></tr></table></div>` },
    { h: 'Writing an 8-mark AO5 answer', html: `
<ol><li>Identify the activity’s demands: duration, intensity, movements.</li>
<li>Explain each system’s role <i>in that activity</i>.</li>
<li>Make explicit <b>connections</b>: “because… this means that… so the…”.</li>
<li>Include short-term responses and long-term adaptations if asked.</li>
<li>Finish with a judgement (to what extent / which link matters most).</li></ol>
<div class="box good"><b class="lbl">Example chain</b><p>In the last lap of a 1500 m, intensity rises above the anaerobic threshold → the lactate system contributes more ATP → lactic acid lowers pH → chemoreceptors detect ↑ CO₂ / ↓ pH → the medulla raises breathing rate and heart rate → more O₂ is delivered and CO₂ removed, but lactate still accumulates and the athlete fatigues.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain how the respiratory and cardiovascular systems work together during a 10 km run. (4 marks)', s: ['Breathing rate and tidal volume increase so more oxygen reaches the alveoli.', 'Oxygen diffuses into the capillaries and binds to haemoglobin.', 'Increased HR and SV raise cardiac output, transporting oxygen to working muscles (vasodilation).', 'CO₂ is carried back to the lungs and breathed out; chemoreceptors adjust both rates.'], a: 'Respiratory takes in O₂ → CV transports it → CO₂ returned for exhalation.' }
  ],
  pitfalls: ['Describing each system separately without linking them.', 'Ignoring the sport or activity in the question.', 'Forgetting both short-term and long-term effects when asked.', 'Ending an evaluate / to what extent answer without a judgement.'],
  cards: [
    ['Muscular–skeletal link?', 'Muscles pull bones as levers across joints.'], ['Cardio-respiratory link?', 'Lungs take in O₂; blood transports it; CO₂ returned for exhalation.'], ['Energy–cardiovascular link?', 'Aerobic system depends on O₂ delivered by blood; blood removes CO₂ and lactate.'],
    ['Skeletal muscle pump?', 'Muscle contractions squeeze veins, aiding venous return.'], ['What links rising CO₂ to heart and breathing rates?', 'Chemoreceptors → medulla (respiratory and cardiac control centres).'], ['AO5 marks?', '8 marks — make connections between systems.']
  ],
  quiz: [
    { q: 'Which system takes oxygen into the body?', o: ['Respiratory', 'Cardiovascular', 'Skeletal', 'Energy'], x: 'Lungs.' },
    { q: 'Which system carries oxygen to the muscles?', o: ['Cardiovascular', 'Respiratory', 'Skeletal', 'Muscular'], x: 'Blood.' },
    { q: 'When oxygen delivery cannot meet demand, ATP increasingly comes from…', o: ['the anaerobic systems', 'fat oxidation', 'the electron transport chain', 'bone marrow'], x: 'Lactate builds.' },
    { q: 'The skeletal muscle pump helps…', o: ['venous return', 'gaseous exchange', 'bone growth', 'ATP breakdown'], x: 'Squeezes veins.' },
    { q: 'Calcium for muscle contraction is stored in…', o: ['bones', 'lungs', 'mitochondria only', 'plasma only'], x: 'Mineral store.' },
    { q: 'Capillarisation of muscle and alveoli links which systems?', o: ['Cardiovascular, respiratory and muscular', 'Skeletal and energy', 'Only skeletal', 'None'], x: 'Exchange at both ends.' }
  ],
  exam: [
    { q: 'Explain the link between the cardiovascular system and the aerobic energy system during a long-distance cycle. [4]', m: 4, ms: ['aerobic system needs oxygen to resynthesise ATP in mitochondria', 'cardiovascular system delivers O₂ (haemoglobin) and glucose / fatty acids to muscles', '↑ HR, SV, cardiac output and vasodilation to working muscles', 'removes CO₂ (and any lactate) for exhalation / liver'] },
    { q: 'A hockey player sprints repeatedly during a 70-minute match.', parts: [
      { q: 'Discuss how the muscular, cardiovascular, respiratory and energy systems interrelate during the match. [8]', m: 8, lv: true, ms: ['muscular: type IIa/IIx fibres for sprints, type I for jogging; contraction needs ATP', 'energy: ATP-PC for sprints (< 10 s); lactate system in repeated efforts; aerobic system for most of the match and recovery between sprints', 'cardiovascular: ↑ HR, SV, Q; vascular shunt delivers O₂ and removes CO₂/lactate', 'respiratory: ↑ breathing rate and tidal volume; gaseous exchange at alveoli', 'link: chemoreceptors detect CO₂/pH → medulla raises breathing and heart rate', 'link: recovery between sprints — aerobic system with O₂ supply restores PC (2–3 min) and removes lactate', 'skeletal: bones as levers; joints for running and hitting', 'judgement on the most important link, e.g. cardio-respiratory supply of O₂ to aerobic recovery'] }
    ], tag: 'ext' },
    { q: 'To what extent do long-term adaptations of the cardiovascular and respiratory systems improve the performance of an endurance athlete? [8]', m: 8, lv: true, ms: ['cardiac hypertrophy → ↑ SV → ↑ maximal cardiac output; ↓ resting HR', 'capillarisation of muscle and alveoli → ↑ O₂ delivery and diffusion', '↑ blood volume / red blood cells → more O₂ carried', '↑ vital capacity, stronger respiratory muscles', 'links to energy systems: more O₂ to mitochondria → more aerobic ATP; fat use spares glycogen', 'lactate accumulates at a higher intensity → faster pace sustained', 'limits: genetics, fibre type, glycogen stores, other factors (technique, psychology)', 'judgement'] }
  ],
  sims: ['systemsmatch'], gens: []
});
