/* ==========================================================
   ASSESSMENT SKILLS — exams, controlled assessment and synoptic links
   ========================================================== */
TOPICS.push({
  id: 'S.1', unit: 'S', ref: 'Exams', title: 'Succeeding in the Unit 2 and Unit 4 exams',
  short: 'The paper format, scenario-based questions, command words, mark allocation and timing',
  summary: 'Units 2 and 4 are each assessed by a 90-minute, 75-mark exam with three questions, each built around an applied scenario. Every learning outcome is assessed every year, and assessment criteria are sampled. The key skill is applying your knowledge to the people and situations in the scenario.',
  spec: ['Format: 1 hour 30 minutes, 75 marks, three questions, short and extended answers based on stimulus material and applied contexts', 'Every paper assesses all learning outcomes; assessment criteria are sampled in each series', 'Available on screen or on paper', 'Command words and how to respond'],
  learn: [
    { h: 'The papers', html: `
<div class="tbl"><table><tr><th>Unit 2: Criminological theories</th><th>Marks</th></tr>
<tr><td>LO1 Social constructions of criminality (AC1.1–1.2)</td><td>11–19 (15–25%)</td></tr>
<tr><td>LO2 Theories of criminality (AC2.1–2.3)</td><td>11–19 (15–25%)</td></tr>
<tr><td>LO3 Causes of criminality (AC3.1–3.2)</td><td>19–26 (25–35%)</td></tr>
<tr><td>LO4 Causes of policy change (AC4.1–4.3)</td><td>19–26 (25–35%)</td></tr></table></div>
<div class="tbl"><table><tr><th>Unit 4: Crime and punishment</th><th>Marks</th></tr>
<tr><td>LO1 The criminal justice system (AC1.1–1.3)</td><td>19–26 (25–35%)</td></tr>
<tr><td>LO2 Punishment (AC2.1–2.3)</td><td>23–30 (30–40%)</td></tr>
<tr><td>LO3 Social control (AC3.1–3.4)</td><td>26–34 (35–45%)</td></tr></table></div>
<p>About <b>1.2 minutes per mark</b>: roughly 30 minutes per 25-mark question. Unit 2 draws on Unit 1; Unit 4 draws on Units 1, 2 and 3.</p>` },
    { h: 'Command words', html: `
<div class="tbl"><table><tr><th>Command</th><th>What to do</th></tr>
<tr><td><b>Identify / state</b></td><td>Name or give a brief point — no explanation needed</td></tr>
<tr><td><b>Describe</b></td><td>Give the main features in detail</td></tr>
<tr><td><b>Explain</b></td><td>Give reasons — say why or how, with examples</td></tr>
<tr><td><b>Compare</b></td><td>Similarities <i>and</i> differences, point by point</td></tr>
<tr><td><b>Analyse</b></td><td>Break down the scenario and link it to theory or concepts</td></tr>
<tr><td><b>Assess / Evaluate</b></td><td>Weigh strengths and weaknesses with evidence and reach a judgement</td></tr>
<tr><td><b>Discuss</b></td><td>Present different views or sides, with evidence, and conclude</td></tr>
<tr><td><b>Examine</b></td><td>Look closely at something and its implications</td></tr></table></div>` },
    { h: 'Using the scenario', html: `
<ul><li>Read the scenario twice and underline clues: ages, backgrounds, behaviours, reactions of others, the type of crime, policies mentioned.</li>
<li>Name the people in your answer (“Ryan’s father…”). A generic answer caps your marks.</li>
<li>For analysis and evaluation questions, use <b>more than one</b> theory or view and reach a <b>judgement</b>.</li>
<li>Use real examples and evidence (cases, studies, statistics) from the case files — they show depth.</li>
<li>Match length to marks: a 2-mark question needs two clear points; a 9-mark question needs developed, evaluated paragraphs.</li></ul>` }
  ],
  debate: [],
  cases: [],
  worked: [{ q: '<b>Question.</b> “Using the scenario, evaluate the effectiveness of biological theories in explaining Kai’s behaviour. [9]” How should you plan?', s: ['<b class="st">Decode</b>“Evaluate” means strengths, weaknesses and a judgement. “Using the scenario” means every paragraph refers to Kai.', '<b class="st">Explain</b>Briefly apply one or two biological theories to clues about Kai (e.g. family history → genetic theories).', '<b class="st">Strengths</b>Evidence from twin or adoption studies; explains why Kai differs from his siblings.', '<b class="st">Weaknesses</b>Environmental alternatives fit Kai too (social learning, deprivation); methodological problems; determinism.', '<b class="st">Judge</b>Conclude how far biology explains Kai — perhaps as one factor interacting with environment.'], a: 'About 9–11 minutes; three or four developed paragraphs.' }],
  pitfalls: ['Ignoring the scenario.', 'Describing when the command word is evaluate or assess.', 'Spending too long on low-mark questions.', 'No judgement on evaluation questions.'],
  cards: [
    ['Length and marks of each exam?', '1 hour 30 minutes, 75 marks, three questions.'],
    ['Which unit does Unit 2 draw on?', 'Unit 1.'],
    ['Which units does Unit 4 draw on?', 'Units 1, 2 and 3.'],
    ['Highest-weighted LO in Unit 4?', 'LO3 social control (35–45%).'],
    ['What does “evaluate” require?', 'Strengths and weaknesses weighed with evidence, leading to a judgement.'],
    ['How many resits are allowed for each external unit?', 'Two; the best result counts.']
  ],
  quiz: [
    { q: 'Each Unit 2 and Unit 4 exam lasts…', o: ['1 hour 30 minutes', '2 hours 15 minutes', '1 hour', '3 hours'], x: '75 marks.' },
    { q: '“Compare” requires…', o: ['similarities and differences', 'only a definition', 'a list', 'a campaign plan'], x: '' },
    { q: 'In a scenario question you should…', o: ['refer to the people and facts in the scenario', 'write everything you know', 'avoid theories', 'ignore the command word'], x: '' }
  ],
  exam: [],
  tools: ['commandsort']
});

TOPICS.push({
  id: 'S.2', unit: 'S', ref: 'Controlled', title: 'Succeeding in controlled assessment',
  short: 'How Units 1 and 3 are assessed: the brief, time and supervision, evidence, mark bands and authenticity',
  summary: 'Units 1 and 3 are internally assessed by controlled assessment: you complete tasks based on a WJEC assignment brief, under supervision, and your teacher marks your work against the mark bands for each assessment criterion. WJEC then moderates a sample. Understanding the controls and the mark bands helps you target the top band.',
  spec: ['Task setting: the assignment brief with an applied purpose', 'Task taking: time, resources, supervision, collaboration, resubmission', 'Task marking: mark bands for each assessment criterion; annotation', 'Authenticity: declarations that the work is your own'],
  learn: [
    { h: 'How it works', html: `
<ul><li>WJEC provides <b>model assignments</b>; your centre may adapt them. Each has an <b>applied purpose</b> — for example, planning a campaign for a charity (Unit 1) or reviewing a conviction for an innocence project (Unit 3).</li>
<li><b>Time</b>: the model assignment sets the total time for summative assessment (your centre will tell you — WJEC model assignments have typically allowed around 8 hours per unit).</li>
<li><b>Supervision</b>: you work under supervision; teachers cannot give feedback on your drafts during the assessment but can explain the task and the criteria.</li>
<li><b>Resources</b>: the brief says which notes and resources you may use.</li>
<li><b>Collaboration</b>: group work may be allowed in places, but your evidence must be individual and clearly attributed.</li>
<li><b>Authenticity</b>: you and your teacher sign declarations that the work is your own.</li>
<li><b>Resits</b>: one resit opportunity for each internal unit, with a new piece of work.</li></ul>` },
    { h: 'Marks for each criterion', html: `
<div class="tbl"><table><tr><th>Unit 1 (100 marks)</th><th>Marks</th><th>Unit 3 (100 marks)</th><th>Marks</th></tr>
<tr><td>AC1.1 Analyse types of crime</td><td>4</td><td>AC1.1 Personnel</td><td>10</td></tr>
<tr><td>AC1.2 Reasons unreported</td><td>4</td><td>AC1.2 Investigative techniques</td><td>20</td></tr>
<tr><td>AC1.3 Consequences</td><td>4</td><td>AC1.3 Evidence processing</td><td>6</td></tr>
<tr><td>AC1.4 Media representation</td><td>6</td><td>AC1.4 Rights</td><td>6</td></tr>
<tr><td>AC1.5 Impact of media</td><td>6</td><td>AC2.1 CPS</td><td>4</td></tr>
<tr><td>AC1.6 Crime statistics</td><td>6</td><td>AC2.2 Trial processes</td><td>4</td></tr>
<tr><td>AC2.1 Compare campaigns</td><td>10</td><td>AC2.3 Rules of evidence</td><td>4</td></tr>
<tr><td>AC2.2 Media in campaigns</td><td>15</td><td>AC2.4 Influences</td><td>10</td></tr>
<tr><td>AC3.1 Plan a campaign</td><td>10</td><td>AC2.5 Laypeople</td><td>6</td></tr>
<tr><td>AC3.2 Design materials</td><td>20</td><td>AC3.1 Validity</td><td>15</td></tr>
<tr><td>AC3.3 Justify</td><td>15</td><td>AC3.2 Conclusions</td><td>15</td></tr></table></div>
<p>Spend time in proportion to marks: AC3.2 in Unit 1 and AC1.2 in Unit 3 are worth 20 each.</p>` },
    { h: 'Reaching the top band', html: `<ul><li><b>Use the brief</b>: many criteria require reference to the assignment brief (e.g. Unit 1 AC1.1; Unit 3 AC3.1–3.2).</li><li><b>Match the command verb</b>: analyse, explain, evaluate, assess, examine, justify — description alone stays in the lowest band.</li><li><b>Use specific examples and sources</b>: named cases, campaigns and statistics.</li><li><b>Cover the full range</b>: several bands require “a range” or “the required range”.</li><li><b>Reach judgements and conclusions</b> supported by evidence.</li></ul>` }
  ],
  debate: [],
  cases: [],
  worked: [],
  pitfalls: ['Writing generally without reference to the brief.', 'Spending the same time on a 4-mark and a 20-mark criterion.', 'Pre-writing answers outside supervised time — this breaks the controls.'],
  cards: [
    ['How many marks is each internal unit worth?', '100 raw marks (100 UMS).'],
    ['Highest-mark criterion in Unit 1?', 'AC3.2 Design materials — 20 marks.'],
    ['Highest-mark criterion in Unit 3?', 'AC1.2 Investigative techniques — 20 marks.'],
    ['Can teachers give feedback during the controlled assessment?', 'No — only explain the task and the criteria.'],
    ['Resits for internal units?', 'One resit opportunity, with a new piece of work.']
  ],
  quiz: [
    { q: 'Unit 3 AC1.2 (investigative techniques) is worth…', o: ['20 marks', '4 marks', '6 marks', '10 marks'], x: '' },
    { q: 'During controlled assessment teachers can…', o: ['explain the task and the criteria', 'correct your drafts', 'write your plan', 'give you model answers'], x: '' },
    { q: 'Who moderates internal assessment?', o: ['WJEC', 'The CPS', 'Ofsted', 'The Home Office'], x: '' }
  ],
  exam: [],
  tools: ['synopticsort']
});

TOPICS.push({
  id: 'S.3', unit: 'S', ref: 'Synoptic', title: 'Synoptic links across the units',
  short: 'How the units connect, and how to use earlier learning in Units 2 and 4',
  summary: 'Synoptic assessment means using knowledge and skills from across the course together. Unit 2 requires you to draw on Unit 1, and Unit 4 on Units 1, 2 and 3. The grade you receive for those units depends on making these links.',
  spec: ['Unit 2 draws on Unit 1', 'Unit 4 draws on Units 1, 2 and 3', 'Using learning from other units in an integrated way'],
  learn: [
    { h: 'Key links', html: `
<div class="tbl"><table><tr><th>In…</th><th>Draw on…</th></tr>
<tr><td>Unit 2 AC1.1 crime and deviance</td><td>Unit 1: the impact of reporting and media on perceptions of crime and deviance</td></tr>
<tr><td>Unit 2 AC1.2 social construction</td><td>Unit 1: media, moral panics and campaigns shaping what is criminal; unreported crime</td></tr>
<tr><td>Unit 2 AC4.3 campaigns and policy</td><td>Unit 1: campaigns for change and their media</td></tr>
<tr><td>Unit 4 AC1.1 law making</td><td>Unit 1 campaigns; Unit 3 review of verdicts (e.g. Post Office Act 2024)</td></tr>
<tr><td>Unit 4 AC1.2 organisation of the CJS</td><td>Unit 3 personnel, CPS, courts and trial process</td></tr>
<tr><td>Unit 4 AC1.3 models</td><td>Unit 2 theories (right realism and crime control); Unit 3 miscarriages of justice</td></tr>
<tr><td>Unit 4 AC2.1–2.3 social control and punishment</td><td>Unit 2 theories (control theory, labelling, realism, individualistic theories)</td></tr>
<tr><td>Unit 4 AC3.1–3.4 agencies</td><td>Unit 1 policy and campaigns; Unit 2 theories; Unit 3 processes and the validity criteria (bias, opinion, circumstances, currency, accuracy)</td></tr></table></div>` },
    { h: 'Using links in an answer', html: `<p>Make links explicit and purposeful: “Right realists such as Wilson and Kelling (Unit 2) would support zero tolerance policing, which reflects Packer’s crime control model…”. Use cases in more than one unit: the Stephen Lawrence case illustrates hate crime (Unit 1), campaigns and policy change (Unit 2), investigation failures (Unit 3) and police effectiveness and legitimacy (Unit 4).</p>` }
  ],
  debate: [],
  cases: ['lawrence', 'postoffice', 'packer'],
  worked: [],
  pitfalls: ['Treating each unit separately in the Unit 4 exam.', 'Name-dropping links without explaining them.'],
  cards: [
    ['What is synoptic assessment?', 'Using knowledge and skills from across the course in an integrated way.'],
    ['Which unit must Unit 2 draw on?', 'Unit 1.'],
    ['Which units must Unit 4 draw on?', 'Units 1, 2 and 3.'],
    ['Give a case that links all four units.', 'Stephen Lawrence (or the Post Office Horizon scandal).']
  ],
  quiz: [{ q: 'The validity criteria used in Unit 4 AC3.4 come from…', o: ['Unit 3', 'Unit 1', 'Unit 2', 'the Skills unit only'], x: 'Bias, opinion, circumstances, currency, accuracy.' }],
  exam: [],
  tools: ['synopticsort']
});

TOOLS.commandsort = { type: 'sort', title: 'What does the command word want?', intro: 'Match each command word to what the examiner wants.', cats: ['Knowledge', 'Explanation', 'Application', 'Judgement'], items: [
  ['Identify', 'Knowledge', 'A brief point.'],
  ['Describe', 'Knowledge', 'Main features.'],
  ['Explain', 'Explanation', 'Reasons: why or how.'],
  ['Analyse', 'Application', 'Break down and link to theory.'],
  ['Evaluate', 'Judgement', 'Strengths, weaknesses, conclusion.'],
  ['Assess', 'Judgement', 'Weigh up and decide.'],
  ['Discuss', 'Judgement', 'Different views and a conclusion.']
] };
TOOLS.synopticsort = { type: 'sort', title: 'Which unit does this come from?', intro: 'Identify the unit each concept belongs to — then think where else you could use it.', cats: ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4'], items: [
  ['Moral panic', 'Unit 1', 'Useful in Unit 2 (social construction) and Unit 4 (penal populism).'],
  ['Labelling theory', 'Unit 2', 'Useful in Unit 4 (punishment, youth diversion).'],
  ['The Full Code Test', 'Unit 3', 'Useful in Unit 4 (CPS effectiveness).'],
  ['Due process model', 'Unit 4', 'Links to Unit 3 rights and miscarriages.'],
  ['Crime Survey for England and Wales', 'Unit 1', 'Useful in Unit 4 to evaluate police effectiveness.'],
  ['Bias, currency and accuracy of sources', 'Unit 3', 'Required in Unit 4 AC3.4.']
] };
