/* ==========================================================
   SKILLS · EXAM, SET-TASK AND ASSIGNMENT TECHNIQUE
   ========================================================== */
const COMMAND_WORDS = [
  ['Analyse', 'Examine in detail: break something into its components, say how they are related and explain how each contributes.', 'U1 AO3/AO5 · internal M/D'],
  ['Assess', 'Carefully consider varied factors that apply to a situation, identify the most important or relevant, and reach a conclusion.', 'U1 AO3–AO5'],
  ['Describe', 'Give an account or the details of something or of a process.', 'U1 AO1/AO2 · internal P'],
  ['Discuss', 'Identify the issue being assessed and explore all its aspects, investigating fully.', 'U1 AO5'],
  ['Evaluate', 'Review information and bring it together to reach a supported judgement — strengths, weaknesses, alternatives, data.', 'U1 AO4/AO5 · internal D'],
  ['Explain', 'Make a point and link it with a justification or expansion (“because…”, “so…”).', 'U1 AO2 · internal P/M'],
  ['Give', 'Provide examples, justifications or reasons in a context.', 'U1 AO1/AO2'],
  ['Identify', 'Assess factual information — a single word, a few words or one sentence.', 'U1 AO1'],
  ['State / Name', 'Give a definition or an example.', 'U1 AO1/AO2'],
  ['To what extent', 'Review the information and form a judgement or conclusion after a balanced, reasoned argument.', 'U1 AO5'],
  ['Justify', 'Give reasons or evidence to support an opinion or decision, or show it is right or reasonable.', 'U2 AO5 · internal D'],
  ['Interpret', 'Draw the meaning, purpose or qualities of something from the stimulus (e.g. screening data).', 'U2 AO3'],
  ['Develop / Design / Produce', 'Create a plan, programme or document that meets the requirements.', 'U2 AO5 · internal P'],
  ['Compare', 'Identify similarities and differences between two or more things.', 'internal M']
];

/* Assessment outcomes for the two external units: [AO, description, marks/weighting note] */
const AO_TABLE = {
  '1': [['AO1', 'Demonstrate knowledge of body systems, structures, functions, characteristics, definitions and additional factors affecting each body system', '1–4 marks'],
    ['AO2', 'Demonstrate understanding of each body system, the short- and long-term effects of sport and exercise, and additional factors', '1–4 marks'],
    ['AO3', 'Analyse exercise and sports movements, how the body responds to short- and long-term exercise and additional factors', '6 marks'],
    ['AO4', 'Evaluate how body systems are used and interrelate to carry out exercise and sporting movements', '6 marks'],
    ['AO5', 'Make connections between body systems in response to short- and long-term exercise and sport participation', '8 marks']],
  '2': [['AO1', 'Demonstrate knowledge and understanding of the effects of lifestyle choices on an individual’s health and well-being', ''],
    ['AO2', 'Apply knowledge and understanding of fitness principles and theory, lifestyle modification techniques, nutritional requirements and training methods to an individual’s needs and goals', ''],
    ['AO3', 'Analyse and interpret screening information relating to an individual’s lifestyle questionnaire and health monitoring tests', ''],
    ['AO4', 'Evaluate qualitative and quantitative evidence to make informed judgements about how an individual’s health and well-being could be improved', ''],
    ['AO5', 'Be able to develop a fitness training programme with appropriate justification', '']]
};

TOPICS.push({
  id: 'S.1', unit: 'S', area: 'skills', ref: 'Unit 1 exam technique', title: 'Unit 1 exam technique', short: '80 marks in 1½ hours; AO1–AO5; 6- and 8-mark levels-marked answers',
  summary: 'How the Unit 1 Anatomy and Physiology exam works and how to maximise marks: the assessment outcomes and their mark ranges, command words, timing, and how to plan and write the levels-marked 6-mark (AO3/AO4) and 8-mark (AO5) answers that link body systems.',
  spec: [
    'Paper: 1 hour 30 minutes, 80 marks; short- and long-answer questions on all five body systems and their interrelationships',
    'AO1 and AO2: 1–4 marks; AO3 and AO4: 6 marks; AO5: 8 marks',
    'Command words and their meaning',
    'Planning and writing extended, levels-marked answers'
  ],
  learn: [
    { h: 'The paper', html: `
<p>90 minutes for 80 marks — just over <b>1 minute per mark</b>. Questions are usually grouped by body system (skeletal, muscular, respiratory, cardiovascular, energy) and often set in a sporting context, with longer questions that ask you to link systems.</p>
<div class="tbl"><table><tr><th>AO</th><th>Command words</th><th>Marks</th></tr>
<tr><td>AO1 knowledge</td><td>describe, give, identify, name, state</td><td>1–4</td></tr>
<tr><td>AO2 understanding</td><td>describe, explain, give, name, state</td><td>1–4</td></tr>
<tr><td>AO3 analyse</td><td>analyse, assess</td><td>6</td></tr>
<tr><td>AO4 evaluate</td><td>assess, evaluate</td><td>6</td></tr>
<tr><td>AO5 make connections</td><td>analyse, assess, discuss, evaluate, to what extent</td><td>8</td></tr></table></div>` },
    { h: 'Levels-marked answers', html: `
<p>6- and 8-mark questions are marked in <b>levels</b> using “best fit”: the examiner judges the overall quality — accurate knowledge, application to the context, analysis/evaluation, links between systems and a supported conclusion.</p>
<ol><li>Underline the command word, the sport/context and any systems named.</li>
<li>Plan 3–4 points; for each, think <b>what happens → why → effect on performance</b>.</li>
<li>For AO5, make explicit <b>connections</b> between systems (“this increases… which means the cardiovascular system…”).</li>
<li>Use accurate terminology (e.g. “stroke volume”, “anaerobic glycolysis”).</li>
<li>Finish with a judgement for assess / evaluate / to what extent.</li></ol>
<div class="box good"><b class="lbl">Top-level answers</b><p>Accurate and thorough knowledge; consistently applied to the context; clear, logical chains of reasoning; balanced judgements; connections between systems; correct technical language.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'How long should you spend on an 8-mark AO5 question? (1 mark)', s: ['About 9–10 minutes (just over a minute per mark), including a quick plan.'], a: '≈ 9–10 minutes.' }
  ],
  pitfalls: ['Writing everything you know about one system for an AO5 question that asks for connections.', 'Ignoring the sport in the question.', 'Running out of time — keep to about a minute a mark.', 'Ending an evaluation without a judgement.'],
  cards: [
    ['Unit 1 exam length and marks?', '1½ hours, 80 marks.'], ['AO3 and AO4 marks?', '6 marks each.'], ['AO5 marks?', '8 marks — make connections between systems.'],
    ['“To what extent”?', 'Balanced, reasoned argument leading to a judgement.'], ['“Explain”?', 'Point + justification/expansion.'], ['Three links AO5 often asks for?', 'Muscular–all systems; cardiovascular–respiratory; energy–cardiovascular.']
  ],
  quiz: [
    { q: 'The Unit 1 exam is worth…', o: ['80 marks', '60 marks', '120 marks', '90 marks'], x: '1½ hours.' },
    { q: 'An 8-mark question in Unit 1 assesses…', o: ['AO5 — connections between systems', 'AO1 — recall', 'AO2 — understanding only', 'set-task skills'], x: 'AO5.' },
    { q: '“Identify” usually needs…', o: ['a single word or short phrase', 'a full essay', 'a diagram', 'a calculation'], x: 'AO1.' },
    { q: '“Evaluate” needs…', o: ['a supported judgement', 'a list of facts', 'a definition', 'a sketch'], x: 'AO4/AO5.' },
    { q: 'In the Unit 1 exam, the 8-mark questions mainly target…', o: ['AO5 — evaluation and synoptic links across systems', 'recall only', 'definitions only', 'calculations only'], x: 'Extended writing.' },
    { q: '“Explain” questions need…', o: ['a point plus the reason or effect', 'one word', 'a list only', 'a diagram only'], x: 'Point + why.' },
    { q: 'A good habit for every question is to…', o: ['link the answer to the sport or performer in the question', 'write as much as possible', 'skip the context', 'answer in bullet points with no reasons'], x: 'Application.' }
  ],
  exam: [
    { q: 'Explain why a candidate who writes a detailed description of the muscular system would not reach the top level for an AO5 question about a marathon. [2]', m: 2, ms: ['AO5 requires connections between body systems', 'answer must link e.g. muscular to cardiovascular/energy/respiratory systems in the context of a marathon'] }
  ],
  sims: ['commandw', 'bands'], gens: []
});

TOPICS.push({
  id: 'S.2', unit: 'S', area: 'skills', ref: 'Unit 2 set task technique', title: 'Unit 2 set-task technique', short: 'Part A preparation; Part B 2½ hours, 60 marks; interpret, justify, design',
  summary: 'How the Unit 2 set task works and how to prepare: the case study released a week before (Part A), the 2½-hour supervised task (Part B, 60 marks), the five assessment outcomes, and how to interpret screening data, justify recommendations and design a programme that is specific to the client.',
  spec: [
    'Part A: case study released one week before; preparatory work and research',
    'Part B: 2½ hours supervised, written submission, 60 marks',
    'Assessment outcomes AO1–AO5; interpretation, justification, qualitative and quantitative evidence, relevance',
    'Drawing on Units 1 and 3 and wider learning (synoptic)'
  ],
  learn: [
    { h: 'Preparing in Part A', html: `
<ul><li>Read the case study several times; highlight every piece of <b>data</b> (age, BP, resting HR, BMI, WHR, diet, alcohol, smoking, sleep, stress, activity, goals, barriers, preferences).</li>
<li>Compare each result with norms; note the health risks and how they link.</li>
<li>Research suitable lifestyle modifications, nutritional strategies and training methods <b>for this client</b>.</li>
<li>Calculate HRmax and training zones, BMI and WHR in advance.</li>
<li>Follow your centre’s rules on what notes you may take into Part B.</li></ul>` },
    { h: 'Writing in Part B', html: `
<ul><li><b>Interpret</b> (AO3): use the numbers — “BP 145/95 mmHg is in the high range (≥ 140/90), increasing his risk of CHD and stroke”.</li>
<li><b>Evaluate</b> (AO4): weigh qualitative (questionnaire answers) and quantitative (test results) evidence and prioritise.</li>
<li><b>Apply and justify</b> (AO2, AO5): every recommendation needs a <b>reason linked to the client</b> — goal, health risk, barrier, preference.</li>
<li><b>Programme</b>: aims, objectives, SMARTER goals, resources; methods for each component; FITT with real numbers (sessions, %HRmax, reps, sets, rest); progression week by week; rest; periodisation; safety (referral if needed).</li>
<li>Show <b>interrelationships</b> — e.g. how reducing alcohol helps weight loss, BP and sleep.</li></ul>
<div class="box warn"><b class="lbl">Common reasons for low marks</b><p>Generic advice that could apply to anyone; recommendations not justified; ignoring barriers (cost, time); unsafe intensities for a client with health risks; no progression.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Turn this into a justified recommendation: “Do some running.” (2 marks)', s: ['“Three 30-minute continuous runs a week at 60–70% HRmax (108–126 bpm for this 40-year-old)…', '…because he wants to lose weight and lower his blood pressure; moderate, steady aerobic exercise uses fat as fuel and lowers resting BP, and he says he enjoys running outdoors.”'], a: 'Specific FITT + reasons linked to the client.' }
  ],
  pitfalls: ['Not using the data from the case study.', 'Recommendations that ignore the client’s barriers or preferences.', 'Programme without progression or numbers.', 'Forgetting to refer to a GP when screening shows risk.'],
  cards: [
    ['Part A?', 'Case study released one week before; prepare and research.'], ['Part B?', '2½ hours supervised; 60 marks; written submission.'], ['Qualitative evidence?', 'Descriptive information from interviews or questionnaires.'], ['Quantitative evidence?', 'Numerical or statistical information.'],
    ['Justification?', 'Reasons or evidence supporting a decision.'], ['Interpretation?', 'Drawing meaning from stimulus data.']
  ],
  quiz: [
    { q: 'The Unit 2 Part B supervised session lasts…', o: ['2½ hours', '1½ hours', '1 hour', '3 hours'], x: 'Pearson-timetabled.' },
    { q: 'Questionnaire answers are…', o: ['qualitative evidence', 'quantitative evidence', 'normative data', 'periodisation'], x: 'Descriptive.' },
    { q: 'BP and BMI results are…', o: ['quantitative evidence', 'qualitative evidence', 'opinions', 'aims'], x: 'Numerical.' },
    { q: 'The Unit 2 task is worth…', o: ['60 marks', '80 marks', '20 marks', '100 marks'], x: 'Written submission.' },
    { q: 'In Part B of the set task you should…', o: ['use the case study and notes to justify every choice for the client', 'write a generic programme', 'ignore the client’s data', 'copy notes word for word'], x: 'Client-specific.' },
    { q: 'A programme for the client should apply…', o: ['FITT and the principles of training', 'random sessions', 'only one training method', 'no progression'], x: 'Principles.' },
    { q: 'Before planning training, a client with high blood pressure should…', o: ['be referred to a GP for clearance', 'start maximal sprints', 'be ignored', 'do heavy lifting immediately'], x: 'Safety.' }
  ],
  exam: [
    { q: 'Explain the difference between qualitative and quantitative evidence, using examples from a client case study. [4]', m: 4, ms: ['qualitative — descriptive information from interviews/questionnaires', 'e.g. client says she feels stressed / sleeps badly / dislikes gyms', 'quantitative — numerical/statistical', 'e.g. BP 142/91 mmHg, BMI 31, resting HR 82 bpm'] }
  ],
  sims: ['casepractice'], gens: ['bmi', 'whr', 'zone']
});

TOPICS.push({
  id: 'S.3', unit: 'S', area: 'skills', ref: 'Internal assignments', title: 'Writing assignments for Pass, Merit and Distinction', short: 'Describe → explain → analyse → evaluate; evidence; referencing',
  summary: 'How internal units (3 and 6) are assessed against Pass, Merit and Distinction criteria, what the command verbs require at each grade, how to plan evidence for every criterion, and good practice in research, referencing and authenticity.',
  spec: [
    'Pass, Merit and Distinction criteria for each learning aim; maximum number of assignments',
    'Command verbs: describe, explain, produce, develop (Pass); explain, analyse, compare (Merit); analyse, evaluate, justify (Distinction)',
    'Using sources and referencing; authenticity of work',
    'Planning evidence to meet every criterion'
  ],
  learn: [
    { h: 'The grade ladder', html: `
<div class="tbl"><table><tr><th>Grade</th><th>Typical verbs</th><th>What you must do</th></tr>
<tr><td><b>Pass</b></td><td>describe, explain, produce, develop, participate</td><td>give clear, accurate detail; produce the required document/programme</td></tr>
<tr><td><b>Merit</b></td><td>explain, analyse, compare</td><td>break it down, show how factors link, compare options, use reasons and evidence</td></tr>
<tr><td><b>Distinction</b></td><td>analyse, evaluate, justify, demonstrate (independently)</td><td>weigh strengths and weaknesses, reach supported conclusions, suggest and justify alternatives, link across learning aims</td></tr></table></div>
<p>To achieve a <b>Merit</b> for the unit you must meet <b>all Pass and Merit</b> criteria; a <b>Distinction</b> requires <b>all</b> criteria. Use the <a href="#/assess">criteria tracker</a>.</p>` },
    { h: 'Good practice', html: `
<ul><li>Read the assignment brief: scenario, tasks and which criteria each task covers.</li>
<li>Plan headings that match the criteria.</li>
<li>Use a range of credible sources (CIMSPA, NGBs, journals, textbooks) and <b>reference</b> them (Harvard style); include a bibliography.</li>
<li>Use real, local and national examples and data.</li>
<li>Write in your own words — sign an authenticity declaration; never copy.</li>
<li>Check against the criteria before submitting; you may get one resubmission opportunity if allowed by your centre.</li></ul>` }
  ],
  eqs: [],
  worked: [
    { q: 'What turns a description into an analysis? (2 marks)', s: ['Analysis breaks the topic into parts and explains how they are related…', '…and how each contributes, with reasons and evidence, rather than just saying what it is.'], a: 'Relationships and reasons, not just details.' }
  ],
  pitfalls: ['Only answering the Pass criteria when aiming for higher grades.', 'No references or bibliography.', 'Generic examples instead of local and national ones.', 'Evaluation without a conclusion.'],
  cards: [
    ['Merit unit grade needs?', 'All Pass and all Merit criteria.'], ['Distinction unit grade needs?', 'All criteria.'], ['Pass verbs?', 'Describe, explain, produce, develop.'], ['Merit verbs?', 'Explain, analyse, compare.'], ['Distinction verbs?', 'Analyse, evaluate, justify.'], ['Referencing style often used?', 'Harvard.']
  ],
  quiz: [
    { q: 'To get a Merit for an internal unit you need…', o: ['all Pass and Merit criteria', 'any two Merit criteria', 'only Distinction criteria', 'an exam'], x: 'All P + M.' },
    { q: '“Evaluate” is typically a…', o: ['Distinction verb', 'Pass verb', 'Merit-only verb', 'not used'], x: 'Judgement.' },
    { q: 'An authenticity declaration confirms…', o: ['the work is your own', 'you passed', 'your DBS check', 'your attendance'], x: 'Own work.' },
    { q: '“Analyse” is usually linked to which grade?', o: ['Merit', 'Pass', 'Distinction only', 'Near Pass'], x: 'Merit.' },
    { q: '“Evaluate” usually targets…', o: ['Distinction', 'Pass', 'Merit only', 'no grade'], x: 'Distinction.' },
    { q: 'To reach Merit you must…', o: ['achieve all Pass and all Merit criteria', 'achieve any two criteria', 'write more words', 'achieve one Distinction criterion'], x: 'Criteria-based.' },
    { q: 'Assignments must be…', o: ['your own work, with sources referenced', 'copied from a website', 'written by a friend', 'left unreferenced'], x: 'Authenticity.' }
  ],
  exam: [],
  sims: ['verbsort'], gens: []
});
