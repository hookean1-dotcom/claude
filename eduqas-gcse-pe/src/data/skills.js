/* ==========================================================
   SKILLS · EXAM TECHNIQUE AND DATA SKILLS (both components)
   ========================================================== */
const COMMAND_WORDS = [
  ['Analyse', 'Break something down into its parts and show how they link and what they mean — e.g. how each muscle contributes to a jump.', 'AO3'],
  ['Apply', 'Use your knowledge in the sporting situation given in the question.', 'AO2'],
  ['Calculate', 'Work out a numerical answer, showing your working and giving units.', 'AO2'],
  ['Compare', 'Give similarities and/or differences between two things — use “whereas”, “both”, “however”.', 'AO2'],
  ['Complete', 'Fill in missing information in a table, diagram or equation.', 'AO1'],
  ['Define', 'Give the precise meaning of a term.', 'AO1'],
  ['Describe', 'Give an account of the main features or steps — what happens, not why.', 'AO1'],
  ['Discuss', 'Present different viewpoints or factors, with reasons and examples, leading to a conclusion.', 'AO3'],
  ['Evaluate', 'Weigh up strengths and weaknesses, or arguments for and against, and reach a supported judgement.', 'AO3'],
  ['Explain', 'Give reasons for, or causes of, something — use “because”, “so”, “this means that”.', 'AO2'],
  ['Give / Identify / Name / State', 'Give a short answer, a name or a fact — no explanation needed.', 'AO1'],
  ['Interpret', 'Explain what data, a graph or a diagram shows, using figures from it.', 'AO3'],
  ['Justify', 'Give evidence and reasons to support a choice or decision.', 'AO3'],
  ['Label', 'Add the correct names to a diagram.', 'AO1'],
  ['Outline', 'Give the main points briefly.', 'AO1'],
  ['Suggest', 'Use your knowledge to propose a sensible idea in an unfamiliar situation.', 'AO2']
];

const AO_TABLE = {
  names: [
    ['AO1', 'Demonstrate knowledge and understanding of the factors that underpin performance and involvement in physical activity and sport'],
    ['AO2', 'Apply knowledge and understanding of the factors that underpin performance and involvement in physical activity and sport'],
    ['AO3', 'Analyse and evaluate the factors that underpin performance and involvement in physical activity and sport'],
    ['AO4', 'Demonstrate and apply relevant skills and techniques in physical activity and sport; analyse and evaluate performance']
  ],
  rows: [
    ['Component 1 · exam', '25%', '20%', '15%', '', '120 marks · 60%'],
    ['Component 2 · NEA', '', '', '', '40%', '80 marks · 40%']
  ],
  qual: ['25%', '20%', '15%', '40%']
};

TOPICS.push({
  id: 'S.1', unit: 'S', area: 'skills', ref: 'Assessment objectives; command words', title: 'Exam technique and extended answers', short: 'Command words, AOs, stimulus-based questions, levels-marked answers',
  summary: 'How the Component 1 paper works and how to pick up marks: the assessment objectives, what each command word wants, using the stimulus (photo, data, scenario), and how to plan and write the extended, levels-marked answers that carry the most marks.',
  spec: [
    'Component 1: 2 hours, 120 marks, short and extended answers based on stimuli/sources',
    'Assessment objectives AO1 (knowledge), AO2 (application), AO3 (analysis and evaluation)',
    'Command words and what they require',
    'Planning and writing levels-marked extended answers; using specialist terms'
  ],
  learn: [
    { h: 'The paper', html: `
<p>Component 1 lasts <b>2 hours</b> and is worth <b>120 marks</b> — about <b>one mark per minute</b>. All questions are compulsory. Questions are based on <b>stimuli or sources</b>: a photograph of a performer, a data table, a graph or a short scenario. They range from 1-mark recall to longer extended answers marked in bands.</p>
<div class="tbl"><table><tr><th>AO</th><th>What it rewards</th><th>Share of the GCSE</th></tr>
<tr><td><b>AO1</b></td><td>Knowledge — definitions, names, facts</td><td>25%</td></tr>
<tr><td><b>AO2</b></td><td>Application — using knowledge in the context of the stimulus</td><td>20%</td></tr>
<tr><td><b>AO3</b></td><td>Analysis and evaluation — breaking down, weighing up, judging</td><td>15%</td></tr></table></div>
<div class="box tip"><b class="lbl">Use the stimulus</b><p>If the question shows a hockey player, every point should be about hockey. If it gives data, quote numbers from it. Answers that ignore the context lose AO2 marks.</p></div>` },
    { h: 'Command words', html: `
<p>The command word tells you what the examiner wants. Common ones (see <a href="#/assess">Assessment</a> for the full list):</p>
<ul><li><b>State / Name / Identify</b> — a word or short phrase. Do not waste time explaining.</li>
<li><b>Describe</b> — say what happens.</li>
<li><b>Explain</b> — say <i>why</i> or <i>how</i>; one point + development (“…because…”) usually = 2 marks.</li>
<li><b>Analyse</b> — break it down and link the parts.</li>
<li><b>Evaluate / Discuss</b> — both sides, then a judgement.</li></ul>` },
    { h: 'Extended answers (levels marked)', html: `
<p>Longer questions (often 6 or 9 marks) are marked in <b>bands</b>. The examiner reads the whole answer and judges its overall quality — knowledge, application, analysis/evaluation and use of specialist terms — rather than counting points.</p>
<ol><li><b>Underline</b> the command word and the context.</li>
<li><b>Plan</b> briefly: 3–4 main points, each with an example from the context.</li>
<li><b>Write in paragraphs</b>: Point → Explain → Example → Link back to the question.</li>
<li>For <b>evaluate</b>: include strengths <i>and</i> weaknesses, then a clear <b>conclusion</b> that answers the question.</li>
<li>Use <b>specialist terminology</b> accurately (e.g. “cardiac output”, not “blood flow”).</li></ol>
<div class="box good"><b class="lbl">What separates the bands</b><p><b>Top band</b>: detailed, accurate knowledge consistently applied to the context; analysis and evaluation weighing both sides; a supported conclusion; accurate terms. <b>Middle band</b>: sound knowledge, some application, one-sided or undeveloped evaluation. <b>Bottom band</b>: mostly descriptive lists with little application.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Rewrite this answer to gain 2 marks: “Explain why a footballer warms up. — To stop injury.” (2 marks)', s: ['Add the development: “A warm-up raises muscle temperature and increases the elasticity of muscles…', '…so muscles can stretch further without tearing, reducing the risk of a strain when sprinting for the ball.”'], a: 'Point + explanation + context.' },
    { q: 'How should you plan a 9-mark “evaluate” question on fartlek training for a hockey player? (3 marks)', s: ['List 2–3 strengths (specific to hockey’s changes of pace, aerobic and anaerobic) with examples.', 'List 2–3 weaknesses (hard to monitor intensity, not skill-based).', 'Decide your conclusion before you start writing, and finish with it.'], a: 'Strengths, weaknesses, judgement — all applied to hockey.' }
  ],
  pitfalls: ['Writing lists for “explain” or “evaluate” questions — develop each point.', 'Ignoring the stimulus — generic answers lose application marks.', 'Writing far more than the marks need on 1–2 mark questions and running out of time.', 'Ending an evaluation without a judgement.'],
  cards: [
    ['Component 1 length and marks?', '2 hours, 120 marks (60%).'], ['AO1?', 'Knowledge and understanding (25%).'], ['AO2?', 'Application of knowledge (20%).'],
    ['AO3?', 'Analysis and evaluation (15%).'], ['AO4?', 'Practical skills and analysis/evaluation of performance (NEA, 40%).'], ['What does “explain” need?', 'Reasons — point plus development (because/so).'],
    ['What does “evaluate” need?', 'Strengths and weaknesses and a supported judgement.'], ['How are extended answers marked?', 'In bands, judging overall quality.'], ['Time per mark?', 'About one minute.']
  ],
  quiz: [
    { q: 'Component 1 lasts…', o: ['2 hours', '1 hour', '1½ hours', '3 hours'], x: '120 marks in 120 minutes.' },
    { q: '“State” questions need…', o: ['a short answer, no explanation', 'both sides and a judgement', 'a calculation', 'a diagram'], x: 'AO1 recall.' },
    { q: '“Evaluate” questions need…', o: ['strengths, weaknesses and a judgement', 'a definition only', 'a list of names', 'a labelled diagram only'], x: 'AO3.' },
    { q: 'AO2 rewards…', o: ['applying knowledge to the context', 'recall only', 'practical performance', 'spelling only'], x: 'Application.' },
    { q: 'Which AO is assessed only in Component 2?', o: ['AO4', 'AO1', 'AO2', 'AO3'], x: 'Practical and performance analysis.' },
    { q: 'The best way to start a 9-mark answer is to…', o: ['make a quick plan', 'copy out the question', 'write a definition list', 'skip it'], x: 'Plan first.' }
  ],
  exam: [
    { q: 'A question asks you to “explain” one benefit of a cool-down for a swimmer. Write an answer that would gain 2 marks. [2]', m: 2, ms: ['benefit identified, e.g. removes lactic acid / waste products', 'developed with explanation and context, e.g. light swimming keeps blood flowing, reducing soreness before the next race'] }
  ],
  sims: ['commandw', 'bands'], gens: []
});

TOPICS.push({
  id: 'S.2', unit: 'S', area: 'skills', ref: 'Data analysis', title: 'Data analysis', short: 'Collecting, presenting and analysing data; percentages, means, graphs',
  summary: 'Every key area includes “the collection, analysis and presentation of appropriate data”. Learn the difference between qualitative and quantitative data, how to present data in tables and graphs, how to calculate means, ranges and percentage change, and how to describe trends using figures.',
  spec: [
    'Collection, analysis and presentation of appropriate data for each key area',
    'Qualitative and quantitative data; primary and secondary data',
    'Tables, bar charts and line graphs; reading values from graphs',
    'Calculations: mean, range, percentage, percentage change'
  ],
  learn: [
    { h: 'Types of data', html: `
<div class="tbl"><table><tr><th>Type</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>Quantitative</b></td><td>Numbers that can be measured</td><td>MSFT level, heart rate, % of girls participating</td></tr>
<tr><td><b>Qualitative</b></td><td>Descriptions, opinions, feelings</td><td>“The session felt hard”; coach’s comments on technique</td></tr>
<tr><td><b>Primary</b></td><td>Collected yourself</td><td>Your own fitness test results; a class survey</td></tr>
<tr><td><b>Secondary</b></td><td>Collected by someone else</td><td>National norms; Sport Wales survey figures</td></tr></table></div>` },
    { h: 'Presenting data', html: `
<ul><li><b>Tables</b> — clear headings with units.</li>
<li><b>Bar charts</b> — compare categories (e.g. participation by age group).</li>
<li><b>Line graphs</b> — show change over time (e.g. heart rate during a session, test results across 8 weeks).</li>
<li>Always: a title, labelled axes with units, a sensible scale, and a key if needed.</li></ul>` },
    { h: 'Analysing data', html: `
<div class="tbl"><table><tr><th>Calculation</th><th>How</th></tr>
<tr><td>Mean</td><td>add the values ÷ number of values</td></tr>
<tr><td>Range</td><td>highest − lowest</td></tr>
<tr><td>Percentage</td><td>part ÷ total × 100</td></tr>
<tr><td>Percentage change</td><td>(new − old) ÷ old × 100</td></tr>
<tr><td>% of max HR</td><td>HR ÷ (220 − age) × 100</td></tr></table></div>
<div class="box tip"><b class="lbl">Describing a trend: TEA</b><p><b>T</b>rend — what is the general pattern (rising, falling, levelling off)? <b>E</b>vidence — quote numbers from the data. <b>A</b>nomalies — anything that does not fit. Then <b>explain</b> it using PE theory.</p></div>` }
  ],
  eqs: [['"mean" = @frac{"sum of values"}{"number of values"}', ''], ['"% change" = @frac{"new" - "old"}{"old"} × 100', '']],
  worked: [
    { q: 'A student’s vertical jump results are 42, 45 and 45 cm. Calculate the mean. (1 mark)', s: ['(42 + 45 + 45) ÷ 3 = 132 ÷ 3 = 44 cm.'], a: '44 cm' },
    { q: 'Participation in a club rises from 120 to 150 members. Calculate the percentage increase. (2 marks)', s: ['(150 − 120) ÷ 120 × 100', '= 25%'], a: '25%' }
  ],
  pitfalls: ['Describing a graph without quoting values.', 'Dividing by the NEW value in percentage change — divide by the original.', 'Forgetting units on answers and axes.', 'For times (sprints, agility), forgetting that a decrease is an improvement.'],
  cards: [
    ['Quantitative data?', 'Numerical, measurable data.'], ['Qualitative data?', 'Descriptive — opinions, feelings, observations.'], ['Primary data?', 'Collected yourself.'],
    ['Secondary data?', 'Collected by others — e.g. national norms.'], ['Mean?', 'Sum ÷ number of values.'], ['Range?', 'Highest − lowest.'],
    ['Percentage change?', '(new − old) ÷ old × 100.'], ['Best graph for change over time?', 'Line graph.'], ['TEA?', 'Trend, evidence, anomalies.']
  ],
  quiz: [
    { q: 'Heart rate readings are…', o: ['quantitative data', 'qualitative data', 'opinions', 'guidance'], x: 'Numbers.' },
    { q: 'National norms are an example of…', o: ['secondary data', 'primary data', 'qualitative data', 'feedback'], x: 'Collected by others.' },
    { q: 'Mean of 10, 12 and 14 is…', o: ['12', '36', '14', '4'], x: '36 ÷ 3.' },
    { q: 'A score rising from 40 to 50 is a change of…', o: ['25%', '20%', '10%', '50%'], x: '10 ÷ 40 × 100.' },
    { q: 'Which graph best shows heart rate during a session?', o: ['Line graph', 'Pie chart', 'Table of names', 'Venn diagram'], x: 'Change over time.' },
    { q: 'Range of 3, 8 and 12 is…', o: ['9', '23', '8', '4'], x: '12 − 3.' }
  ],
  exam: [
    { q: 'A student’s Illinois agility times were 18.6 s before training and 17.4 s after. Calculate the percentage change and state whether this is an improvement. [3]', m: 3, ms: ['(17.4 − 18.6) ÷ 18.6 × 100', '= −6.5% (6.45%)', 'improvement — lower time is faster'] },
    { q: 'Explain the difference between qualitative and quantitative data, using examples from a training programme. [4]', m: 4, ms: ['qualitative — descriptive / opinions / feelings', 'e.g. diary comments on how the session felt / coach feedback', 'quantitative — numerical / measurable', 'e.g. heart rate, test scores, reps'] }
  ],
  sims: ['grapher'], gens: ['gpct', 'gmean', 'grange', 'gpart', 'zonepc']
});
