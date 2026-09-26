/* ==========================================================
   SKILLS · EXAM TECHNIQUE AND FOOD MATHS (cross-unit)
   ========================================================== */
const COMMAND_WORDS = [
  ['Analyse', 'Separate information into parts and identify their characteristics, how they link and what they mean.', 'AO3'],
  ['Assess', 'Consider several options or arguments and weigh them up to reach a judgement about their importance or success.', 'AO3'],
  ['Calculate', 'Work out a numerical answer, showing working and units.', 'AO2'],
  ['Compare', 'Identify similarities and differences between two or more things — use “whereas” and “both”.', 'AO2'],
  ['Complete', 'Finish a table, diagram or statement.', 'AO1'],
  ['Define', 'Give the precise meaning of a term.', 'AO1'],
  ['Describe', 'Give an account of the main features or steps — what, not why.', 'AO1'],
  ['Discuss', 'Present key points from different viewpoints, with reasons and evidence, and reach a conclusion.', 'AO3'],
  ['Evaluate', 'Review the evidence for and against, strengths and weaknesses, and come to a supported judgement.', 'AO3'],
  ['Explain', 'Give reasons for, or causes of, something — use “because”, “so”, “this means that”.', 'AO2'],
  ['Identify', 'Select or recognise a key feature from information given.', 'AO1'],
  ['Justify', 'Give evidence and reasons to support a choice, decision or conclusion.', 'AO3'],
  ['Name / State', 'Give a short answer with no explanation needed.', 'AO1'],
  ['Outline', 'Give the main points briefly, without detail.', 'AO1'],
  ['Plan', 'Set out the steps, resources, timings and controls needed to carry out a task.', 'AO4'],
  ['Suggest', 'Apply knowledge to an unfamiliar situation to put forward a sensible idea.', 'AO2']
];

const AO_TABLE = {
  names: [
    ['AO1', 'Demonstration of knowledge of content from across the specification'],
    ['AO2', 'Application of knowledge and understanding'],
    ['AO3', 'Synthesis and evaluation'],
    ['AO4', 'Selection, use and application of practical skills and techniques']
  ],
  rows: [
    ['Unit 1', 18, 32, 30, 0, 80],
    ['Unit 2', 0, 32, 28, 40, 100],
    ['Unit 3', 25, 37, 18, 0, 80],
    ['Unit 4', 0, 30, 30, 40, 100],
    ['Unit 5', 0, 30, 30, 40, 100]
  ],
  qual: ['12%', '36.4%', '29.4%', '22.2%']
};

TOPICS.push({
  id: 'S.1', unit: 'S', ref: 'Assessment', title: 'Command words and assessment objectives', short: 'What the question is asking and how marks are awarded',
  summary: 'Every question is built from a command word and an assessment objective. Recognise what each command word demands, how the four AOs are weighted in each unit, and how the Unit 1 and Unit 3 papers are structured into Sections A, B and C.',
  spec: [
    'Written papers only use the command words listed in the WJEC Assessment Guide',
    'AO1 knowledge; AO2 application; AO3 synthesis and evaluation; AO4 practical skills',
    'Units 1 and 3: 1 hour 30 minutes, 80 marks, Section A short answer, Section B extended answer, Section C case study; all compulsory; graded A–E'
  ],
  learn: [
    { h: 'The four assessment objectives', html: `
<div class="tbl"><table><tr><th>AO</th><th>What it rewards</th><th>Qualification weighting</th></tr>
<tr><td><b>AO1</b></td><td>Demonstration of knowledge of content from across the specification</td><td>12%</td></tr>
<tr><td><b>AO2</b></td><td>Application of knowledge and understanding</td><td>36.4%</td></tr>
<tr><td><b>AO3</b></td><td>Synthesis and evaluation</td><td>29.4%</td></tr>
<tr><td><b>AO4</b></td><td>Selection, use and application of practical skills and techniques</td><td>22.2%</td></tr></table></div>
<p>Pure recall (AO1) is only 12% of the qualification. Most marks come from <b>applying</b> knowledge to a context (AO2) and <b>evaluating</b> (AO3) — so always link your answer to the person, product or situation in the question.</p>
<div class="tbl"><table><tr><th>Unit (marks)</th><th>AO1</th><th>AO2</th><th>AO3</th><th>AO4</th></tr>
<tr><td>Unit 1 exam (80)</td><td>18</td><td>32</td><td>30</td><td>–</td></tr>
<tr><td>Unit 2 NEA (100)</td><td>–</td><td>32</td><td>28</td><td>40</td></tr>
<tr><td>Unit 3 exam (80)</td><td>25</td><td>37</td><td>18</td><td>–</td></tr>
<tr><td>Unit 4 NEA (100)</td><td>–</td><td>30</td><td>30</td><td>40</td></tr>
<tr><td>Unit 5 NEA (100)</td><td>–</td><td>30</td><td>30</td><td>40</td></tr></table></div>` },
    { h: 'Command words', html: `
<p class="muted">WJEC publishes the definitive list in its Assessment Guide for this qualification. These are the standard WJEC meanings — check them against your centre’s copy.</p>
<div class="tbl"><table><tr><th>Word</th><th>Meaning</th><th>Usually</th></tr>
${COMMAND_WORDS.map(c => `<tr><td><b>${c[0]}</b></td><td>${c[1]}</td><td>${c[2]}</td></tr>`).join('')}</table></div>
<div class="box tip"><b class="lbl">Describe vs explain</b><p>“Describe how vitamin D deficiency affects bones” → rickets / osteomalacia; soft, bowed bones. “Explain…” → vitamin D is needed to absorb calcium, <b>so</b> without it bones cannot be mineralised properly, <b>which means</b> they are soft and bend.</p></div>` },
    { h: 'The exam papers', html: `
<div class="tbl"><table><tr><th>Section</th><th>Question style</th><th>Tips</th></tr>
<tr><td><b>A</b></td><td>short answer questions, often with stimulus material (tables, labels, diagrams)</td><td>one mark ≈ one precise point; use the data given; units in calculations</td></tr>
<tr><td><b>B</b></td><td>extended answer questions (typically 6–12 marks), marked in levels</td><td>plan quickly; develop each point (point → explain → apply); balance; reach a judgement</td></tr>
<tr><td><b>C</b></td><td>questions based on a case study — a person, family, setting or business</td><td>use the case study details in every answer; quote them; tailor recommendations</td></tr></table></div>
<p>You have <b>90 minutes for 80 marks</b> — just over <b>1 minute per mark</b>. A 12-mark question deserves about 13–15 minutes including planning.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'How should you approach “Evaluate the suitability of a vegan diet for a pregnant woman.” (8 marks)', s: ['Command word “evaluate” → strengths AND weaknesses → supported judgement (AO3).', 'Apply to pregnancy (AO2): increased needs for protein, iron, calcium, folate, vitamin B12, iodine, omega-3 (DHA).', 'Benefits: high fibre (constipation), folate from leafy greens, lower saturated fat.', 'Risks: B12 (only from fortified foods/supplements), iodine, iron bioavailability (non-haem), calcium, DHA; protein complementation needed.', 'Judgement: can be suitable if well planned with fortified foods and supplements (folic acid 400 µg, vitamin D 10 µg, B12, possibly iodine/algal DHA) and professional advice.'], a: 'Balanced, applied, ends with a qualified judgement.' }
  ],
  pitfalls: ['Describing when the question says explain.', 'Writing everything you know about a topic instead of applying it to the context.', 'Giving a one-sided answer to evaluate / discuss.', 'Ignoring the marks: 2 marks will not need a paragraph; 12 marks need a developed, structured answer.', 'Running out of time for the Section C case study.'],
  cards: COMMAND_WORDS.map(c => [`Command word: ${c[0]}`, c[1]]).concat([
    ['AO1?', 'Knowledge of content.'],
    ['AO2?', 'Application of knowledge and understanding.'],
    ['AO3?', 'Synthesis and evaluation.'],
    ['AO4?', 'Selection, use and application of practical skills and techniques.'],
    ['Unit 1/3 exam structure?', '1 h 30, 80 marks; A short answer, B extended, C case study; all compulsory.'],
    ['Time per mark in Units 1 and 3?', 'About 1 minute 7 seconds (90 min ÷ 80).']
  ]),
  quiz: [
    { q: '“Give reasons for…” describes which command word?', o: ['Explain', 'Describe', 'State', 'Identify'], x: 'Causes and reasons.' },
    { q: 'Which command word requires a supported judgement?', o: ['Evaluate', 'State', 'Describe', 'Outline'], x: 'AO3.' },
    { q: 'Which AO carries the most weight across the qualification?', o: ['AO2 (36.4%)', 'AO1 (12%)', 'AO3 (29.4%)', 'AO4 (22.2%)'], x: 'Application.' },
    { q: 'Section C of the Unit 1 and Unit 3 papers is based on…', o: ['a case study', 'multiple choice', 'a practical', 'an essay of choice'], x: 'All compulsory.' },
    { q: 'Which unit has the most AO1 marks?', o: ['Unit 3 (25)', 'Unit 1 (18)', 'Unit 2 (0)', 'Unit 5 (0)'], x: 'Food safety knowledge.' },
    { q: '“Compare” requires…', o: ['similarities and differences', 'a definition', 'a single fact', 'a calculation'], x: 'Use “whereas”.' },
    { q: 'AO4 is assessed in…', o: ['the NEA units (2, 4 and 5)', 'the Unit 1 exam only', 'the Unit 3 exam only', 'no units'], x: 'Practical skills.' },
    { q: 'How long should you spend on a 12-mark question in a 90-minute, 80-mark paper?', o: ['About 13–15 minutes', 'About 2 minutes', 'About 45 minutes', 'About 5 minutes'], x: '~1.1 min per mark.' }
  ],
  exam: [
    { q: 'Explain the difference between “describe” and “explain” questions, using an example from food safety. [4]', m: 4, ms: ['describe: give features / what happens', 'e.g. describe the symptoms of salmonella food poisoning (diarrhoea, vomiting, fever)', 'explain: give reasons / why / how', 'e.g. explain why chicken must reach 75 °C — kills Salmonella/Campylobacter, so prevents food poisoning'] }
  ],
  sims: ['command'], gens: []
});

TOPICS.push({
  id: 'S.2', unit: 'S', ref: 'Assessment', title: 'Extended answers and case studies', short: 'Levels of response, PEEL, using the case study',
  summary: 'Extended answers are marked with levels of response: the top band needs accurate, detailed knowledge applied to the context, well-developed analysis and a supported judgement. Learn a structure that works (PEEL), how to plan in a minute, and how to squeeze the case study for evidence.',
  spec: ['Extended answer questions (Section B) and case study questions (Section C) on Units 1 and 3 papers'],
  learn: [
    { h: 'Levels of response', html: `
<p>Extended questions are marked in <b>bands</b> — the examiner decides which band fits best, then the mark within it.</p>
<div class="tbl"><table><tr><th>Band</th><th>Typical description</th></tr>
<tr><td>Top</td><td>accurate, detailed knowledge; consistently applied to the context; well-developed analysis/evaluation; clear, supported judgement; logical structure, correct terminology</td></tr>
<tr><td>Middle</td><td>mostly accurate knowledge; some application; some analysis but unbalanced or partly developed; judgement may be unsupported</td></tr>
<tr><td>Bottom</td><td>limited or generic knowledge; little application; list-like; no judgement</td></tr></table></div>
<p class="muted">Indicative wording — WJEC’s published mark schemes give the exact bands for each question.</p>` },
    { h: 'A structure that works: PEEL', html: `
<ul><li><b>P</b>oint — make a clear, relevant point.</li><li><b>E</b>xplain — why/how, with science and terminology.</li><li><b>E</b>xample / evidence — from the case study, data or a food example.</li><li><b>L</b>ink — back to the question: so what does this mean for this person/business?</li></ul>
<p>Write 3–4 developed PEEL paragraphs for a 12-mark question, covering both sides for evaluate/discuss, and finish with a <b>conclusion</b> that answers the question directly (“Overall… because…”).</p>
<div class="box tip"><b class="lbl">One-minute plan</b><p>Underline the command word and the context. Jot 4–6 key words (nutrients, risks, controls). Tick which side each is on. Decide your judgement before you start writing.</p></div>` },
    { h: 'Using a case study', html: `
<ul><li>Read the case study <b>twice</b>; highlight age, gender, life stage, activity, health conditions, culture/religion, budget, cooking skills, facilities, setting.</li>
<li>Every answer should mention <b>specific details</b> (“As Dafydd is 72 and lives alone…”).</li>
<li>Recommendations must be <b>realistic</b> for the person or business (budget, equipment, skills, preferences).</li>
<li>Use numbers given — calculate BMI, energy, cost or temperatures if data are supplied.</li>
<li>For food safety settings, identify hazards → risk → control measures → monitoring, and link to legislation (e.g. the Food Safety Act, HACCP, allergen rules, Natasha’s Law).</li></ul>` }
  ],
  eqs: [],
  worked: [
    { q: 'Case study: “Mair, 78, lives alone, has arthritis in her hands, a limited pension and a small appetite.” Write one PEEL paragraph for “Discuss how Mair’s diet could be improved.”', s: ['Point: Mair should eat nutrient-dense foods such as eggs, oily fish, fortified cereals and milk.', 'Explain: with a small appetite, small portions must supply more nutrients per bite — protein to prevent muscle loss (sarcopenia) and vitamin D and calcium for bone health.', 'Example: canned sardines on wholemeal toast provide protein, calcium (from the bones), vitamin D and fibre, are cheap and need no chopping — suitable for her arthritis and budget.', 'Link: this helps Mair meet her needs despite her low energy intake, reducing the risk of malnutrition and fractures.'], a: 'Developed, applied, realistic.' }
  ],
  pitfalls: ['Generic answers that could apply to anyone.', 'Lists of points with no development.', 'No conclusion in evaluate/discuss/assess questions.', 'Ignoring constraints in the case study (budget, skills, religion, equipment).'],
  cards: [
    ['PEEL?', 'Point, Explain, Example/Evidence, Link.'],
    ['How are extended answers marked?', 'Levels of response — bands of quality.'],
    ['What separates the top band?', 'Detailed accurate knowledge applied throughout, developed evaluation, supported judgement.'],
    ['What to highlight in a case study?', 'Age, life stage, activity, health, culture/religion, budget, skills, facilities, setting.'],
    ['How to end an evaluate answer?', 'A conclusion with a supported judgement: “Overall… because…”.']
  ],
  quiz: [
    { q: 'An extended answer that lists points without development will usually reach…', o: ['a low band', 'full marks', 'the top band', 'a middle band automatically'], x: 'Development and application are needed.' },
    { q: 'In a case study question, the best answers…', o: ['use specific details from the case study', 'avoid mentioning the person', 'copy the case study out', 'give general healthy-eating advice'], x: 'Apply (AO2).' },
    { q: 'The “L” in PEEL stands for…', o: ['Link back to the question', 'List', 'Label', 'Learn'], x: 'So what?' },
    { q: 'A “discuss” answer should finish with…', o: ['a conclusion / judgement', 'a new point', 'a list', 'a question'], x: 'Reach a conclusion.' }
  ],
  exam: [],
  sims: [], gens: []
});

TOPICS.push({
  id: 'S.3', unit: 'S', ref: 'Maths', title: 'Food maths', short: 'Energy, percentages, nutrient content, scaling, costing, BMI, statistics',
  summary: 'Calculations appear across the qualification: energy from macronutrients, % energy and % reference intake, nutrient content per portion, salt from sodium, scaling and costing recipes, gross profit, BMI and waist-to-height ratio, BMR and energy balance, nutrient losses, and descriptive statistics for investigations.',
  spec: ['Mathematical skills applied in nutrition (Unit 1), practical food production (Unit 2), food safety (Unit 3) and investigations/research (Units 4 and 5)'],
  learn: [
    { h: 'Energy', html: `
<div class="tbl"><table><tr><th>Nutrient</th><th>kcal/g</th><th>kJ/g</th></tr>
<tr><td>Carbohydrate</td><td>4 (3.75 for sugars on some tables)</td><td>17</td></tr>
<tr><td>Protein</td><td>4</td><td>17</td></tr>
<tr><td>Fat</td><td>9</td><td>37</td></tr>
<tr><td>Alcohol</td><td>7</td><td>29</td></tr>
<tr><td>Fibre</td><td>2</td><td>8</td></tr></table></div>
<p>$E = 4C + 4P + 9F$ (kcal). $1 "kcal" ≈ 4.2 "kJ"$ (4.184). % energy from a nutrient $= @frac{"energy from nutrient"}{"total energy"} × 100$.</p>` },
    { h: 'Labels and portions', html: `
<ul><li>Per portion $= "per 100 g" × @frac{"portion (g)"}{100}$.</li>
<li>Salt $= "sodium" × 2.5$.</li>
<li>% Reference Intake $= @frac{"amount"}{"RI"} × 100$ — adult RIs: energy 8400 kJ / 2000 kcal, fat 70 g, saturates 20 g, carbohydrate 260 g, sugars 90 g, protein 50 g, salt 6 g.</li>
<li>Traffic lights per 100 g (food): fat low ≤ 3 g, high &gt; 17.5 g; saturates low ≤ 1.5 g, high &gt; 5 g; sugars low ≤ 5 g, high &gt; 22.5 g; salt low ≤ 0.3 g, high &gt; 1.5 g.</li></ul>` },
    { h: 'Body measures', html: `
<ul><li>$"BMI" = @frac{"mass (kg)"}{"height (m)"^2}$ — underweight &lt; 18.5, healthy 18.5–24.9, overweight 25–29.9, obese ≥ 30.</li>
<li>Waist-to-height ratio $= @frac{"waist"}{"height"}$ (same units): &lt; 0.5 healthy, 0.5–0.59 increased risk, ≥ 0.6 high risk.</li>
<li>Estimated energy requirement $= "BMR" × "PAL"$.</li>
<li>Energy balance: a deficit of about 7700 kcal ≈ 1 kg of body fat (a rule of thumb).</li></ul>` },
    { h: 'Recipes, cost and profit', html: `
<ul><li>Scale factor $= @frac{"new yield"}{"original yield"}$; multiply every ingredient.</li>
<li>Ingredient cost $= @frac{"amount used"}{"pack size"} × "pack price"$.</li>
<li>Cost per portion $= @frac{"total cost"}{"portions"}$.</li>
<li>Gross profit $= "selling price" - "food cost"$; GP % $= @frac{"gross profit"}{"selling price"} × 100$ (catering often targets about 65–70%).</li>
<li>Selling price for a target food cost % $= @frac{"food cost"}{"target food cost %"} × 100$.</li>
<li>% loss $= @frac{"original" - "final"}{"original"} × 100$ (e.g. vitamin C loss, cooking weight loss).</li></ul>` },
    { h: 'Microbes and statistics', html: `
<ul><li>Binary fission: $N = N_0 × 2^n$ where $n = @frac{"time"}{"generation time"}$.</li>
<li>Mean, median, mode, range and standard deviation — see Unit 4.8.</li></ul>` }
  ],
  eqs: [
    ['E = 4C + 4P + 9F', 'energy in kcal from carbohydrate, protein and fat (grams)'],
    ['1 "kcal" ≈ 4.2 "kJ"', 'energy conversion'],
    ['"salt" = "sodium" × 2.5', 'salt from sodium'],
    ['"%RI" = @frac{"amount"}{"RI"} × 100', 'percentage reference intake'],
    ['"BMI" = @frac{"mass"}{"height"^2}', 'body mass index (kg, m)'],
    ['"GP%" = @frac{"price" - "cost"}{"price"} × 100', 'gross profit percentage'],
    ['N = N_0 × 2^n', 'bacterial growth by binary fission']
  ],
  worked: [
    { q: 'A 45 g flapjack contains 28 g carbohydrate, 3 g protein and 9 g fat. Calculate its energy in kcal and kJ and the % energy from fat.', s: ['E = 4(28) + 4(3) + 9(9) = 112 + 12 + 81 = 205 kcal', 'kJ = 205 × 4.2 ≈ 861 kJ', '% from fat = 81 ÷ 205 × 100 ≈ 39.5%'], a: '205 kcal, ≈ 861 kJ, ≈ 40% from fat' },
    { q: 'A chilli costs £6.30 to make and serves 6. The café wants 65% gross profit. Find the selling price per portion.', s: ['cost per portion = 6.30 ÷ 6 = £1.05', 'food cost must be 35% of the price', 'price = 1.05 ÷ 0.35 = £3.00'], a: '£3.00 per portion' }
  ],
  pitfalls: ['Forgetting to square the height in BMI (and using cm instead of m).', 'Mixing kJ and kcal.', 'Calculating GP % as a percentage of cost instead of selling price.', 'Rounding too early.', 'Missing units in the final answer.'],
  cards: [
    ['kcal per gram: carb, protein, fat, alcohol?', '4, 4, 9, 7.'],
    ['kJ per gram: carb, protein, fat?', '17, 17, 37.'],
    ['Salt from sodium?', 'Salt = sodium × 2.5.'],
    ['Adult RI energy?', '8400 kJ / 2000 kcal.'],
    ['Adult RI salt / sugars / fat / saturates?', '6 g / 90 g / 70 g / 20 g.'],
    ['BMI formula?', 'kg ÷ m².'],
    ['GP % formula?', '(price − cost) ÷ price × 100.'],
    ['Scale factor?', 'New yield ÷ original yield.'],
    ['Binary fission formula?', 'N = N₀ × 2ⁿ.'],
    ['Healthy waist-to-height ratio?', 'Below 0.5.']
  ],
  quiz: [
    { q: 'Energy from 10 g fat is…', o: ['90 kcal', '40 kcal', '37 kcal', '9 kcal'], x: '9 kcal/g.' },
    { q: '0.4 g sodium is equivalent to…', o: ['1.0 g salt', '0.16 g salt', '2.5 g salt', '4 g salt'], x: '× 2.5.' },
    { q: 'A person 1.60 m tall, 64 kg, has a BMI of…', o: ['25.0', '40.0', '20.0', '32.0'], x: '64 ÷ 2.56.' },
    { q: 'A dish costs £2 and sells for £5. GP % is…', o: ['60%', '40%', '150%', '250%'], x: '3 ÷ 5.' },
    { q: '18 g sugars as % RI (90 g) is…', o: ['20%', '18%', '5%', '50%'], x: '18/90.' },
    { q: 'Starting with 100 bacteria and a 20-minute generation time, after 1 hour there are…', o: ['800', '300', '600', '200'], x: '2³ = 8.' },
    { q: '500 kcal is about…', o: ['2100 kJ', '120 kJ', '500 kJ', '8400 kJ'], x: '× 4.2.' },
    { q: 'Scaling a 4-portion recipe to 10 portions uses a scale factor of…', o: ['2.5', '0.4', '6', '40'], x: '10 ÷ 4.' }
  ],
  exam: [
    { q: 'A 30 g portion of cereal has 0.12 g sodium per 100 g. Calculate the salt per portion. [2]', m: 2, ms: ['sodium per portion = 0.12 × 30/100 = 0.036 g', 'salt = 0.036 × 2.5 = 0.09 g'] },
    { q: 'A 250 g lasagne portion provides 480 kcal of which fat provides 22 g. Calculate the percentage of energy from fat and comment on it. [3]', m: 3, ms: ['22 × 9 = 198 kcal', '198 ÷ 480 × 100 = 41.25%', 'above the recommended ≤ 35% of energy from fat'] }
  ],
  sims: ['calc'], gens: ['energy1', 'energy2', 'energyconv1', 'salt1', 'ri1', 'bmi1', 'whtr1', 'cost1', 'gp1', 'scale1', 'fission1', 'loss1', 'mean1', 'pct1']
});
