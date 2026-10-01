/* ==========================================================
   SKILLS · EXAM TECHNIQUE AND QUANTITATIVE SKILLS (all units)
   ========================================================== */
const COMMAND_WORDS = [
  ['Analyse', 'Break down a performance, data or an issue into its parts, show how they link and what they mean.', 'AO3'],
  ['Apply', 'Use your knowledge in a given sporting situation or example.', 'AO2'],
  ['Assess', 'Weigh up the importance of factors or arguments to reach a judgement.', 'AO3'],
  ['Calculate', 'Work out a numerical answer, showing working and giving units.', 'AO2'],
  ['Compare', 'Identify similarities and/or differences between two or more things — use “whereas”, “both”.', 'AO2'],
  ['Define', 'Give the precise meaning of a term.', 'AO1'],
  ['Describe', 'Give an account of the main features or steps — what happens, not why.', 'AO1'],
  ['Discuss', 'Present different viewpoints or factors, with reasons and examples, leading to a conclusion.', 'AO3'],
  ['Evaluate', 'Consider strengths and weaknesses, or evidence for and against, and reach a supported judgement.', 'AO3'],
  ['Explain', 'Give reasons for, or causes of, something — use “because”, “so”, “this means that”.', 'AO2'],
  ['Identify / Name / State', 'Give a short answer, a name or a fact — no explanation needed.', 'AO1'],
  ['Interpret', 'Explain what data, a graph or a diagram shows, using figures from it.', 'AO3'],
  ['Justify', 'Give evidence and reasons to support a choice, decision or conclusion.', 'AO3'],
  ['Outline', 'Give the main points briefly.', 'AO1'],
  ['Plot / Sketch / Label', 'Draw a graph or diagram with correctly labelled axes, units and features.', 'AO2'],
  ['Suggest', 'Apply knowledge to an unfamiliar situation to propose a sensible idea.', 'AO2']
];

const AO_TABLE = {
  names: [
    ['AO1', 'Demonstrate knowledge and understanding of the factors that underpin performance and involvement in physical activity and sport'],
    ['AO2', 'Apply knowledge and understanding of the factors that underpin performance and involvement in physical activity and sport'],
    ['AO3', 'Analyse and evaluate the factors that underpin performance and involvement in physical activity and sport'],
    ['AO4', 'Demonstrate and apply relevant skills and techniques in physical activity and sport; analyse and evaluate performance']
  ],
  rows: [
    ['AS Unit 1 · exam', '8%', '8%', '8%', '', '72 marks · 24%'],
    ['AS Unit 2 · NEA', '', '', '', '16%', '48 marks · 16%'],
    ['A2 Unit 3 · exam', '12%', '12%', '12%', '', '90 marks · 36%'],
    ['A2 Unit 4 · NEA', '', '', '', '24%', '60 marks · 24%']
  ],
  qual: ['20%', '20%', '20%', '40%']
};

TOPICS.push({
  id: 'S.1', unit: 'S', area: 'skills', ref: 'Assessment objectives; writing accurately', title: 'Exam technique and extended answers', short: 'Command words, AOs, levels-marked answers, data response, synoptic links',
  summary: 'Knowing the content is only half the job. Learn how WJEC PE papers are structured, what each command word and assessment objective demands, how extended answers are marked in bands, how to plan a top-band answer that analyses and evaluates, and how to tackle multiple-choice and data-response questions.',
  spec: [
    'AO1 knowledge, AO2 application and AO3 analysis and evaluation — each worth one third of the exam marks',
    'Question types: multiple choice, data response, short and extended answers (Unit 1); data response, short and extended answers (Unit 3)',
    'Writing accurately: specialist language, spelling, punctuation and grammar in specified extended questions',
    'Any area of study can be assessed in any unit; Unit 3 assesses all A level content',
    'Understand the interrelationships between the areas of study and apply them in a variety of contexts'
  ],
  learn: [
    { h: 'The two papers', html: `
<div class="tbl"><table><tr><th></th><th>AS Unit 1: Exploring PE</th><th>A2 Unit 3: Evaluating PE</th></tr>
<tr><td>Time</td><td>1¾ hours</td><td>2 hours</td></tr>
<tr><td>Marks</td><td>72 (24% of A level; 60% of AS)</td><td>90 (36% of A level)</td></tr>
<tr><td>Questions</td><td>contextualised: multiple choice, data response, short and extended answers</td><td>data response, short and extended answers</td></tr>
<tr><td>Content</td><td>all AS content</td><td>all A level content (AS topics can appear)</td></tr>
<tr><td>AOs</td><td colspan="2">AO1, AO2 and AO3 equally weighted — so two-thirds of the marks are for <b>applying</b> and <b>analysing/evaluating</b>, not just knowing</td></tr></table></div>
<p>A mark rate of about <b>1.4 minutes per mark</b> (Unit 1: 105 min ÷ 72 ≈ 1.46; Unit 3: 120 ÷ 90 ≈ 1.33) helps you pace yourself: an 8-mark question deserves about 11 minutes.</p>` },
    { h: 'Command words and the AOs', html: `
<p>The command word tells you what the examiner wants:</p>
<ul><li><b>AO1</b> — <i>state, name, identify, define, describe, outline</i>: accurate knowledge; short and precise.</li>
<li><b>AO2</b> — <i>explain, apply, compare, calculate, suggest</i>: use knowledge in the sporting context given; always link to the example.</li>
<li><b>AO3</b> — <i>analyse, evaluate, discuss, assess, justify, interpret</i>: break down, weigh up strengths and weaknesses, and reach a <b>judgement</b>.</li></ul>
<p>See the full list on the <a href="#/assess">Assessment</a> page.</p>` },
    { h: 'Levels-marked extended answers', html: `
<p>Extended questions (usually 6–10 marks) are marked in <b>bands</b>, not by ticking points. Examiners decide the band from the overall quality, then the mark within it.</p>
<div class="tbl"><table><tr><th>Band</th><th>Typical descriptor</th></tr>
<tr><td><b>Top</b></td><td>detailed, accurate knowledge; consistently <b>applied</b> to the context with relevant examples; thorough <b>analysis and evaluation</b>, weighing both sides; a <b>supported conclusion</b>; specialist terms used accurately; well structured, accurate spelling, punctuation and grammar</td></tr>
<tr><td><b>Middle</b></td><td>good knowledge with some application; some analysis or evaluation but one-sided or undeveloped; a conclusion that is not fully supported</td></tr>
<tr><td><b>Bottom</b></td><td>limited knowledge, mostly descriptive; little application or evaluation; few or inaccurate technical terms</td></tr></table></div>
<div class="box tip"><b class="lbl">Plan in one minute: P-E-E-L-J</b><ol><li><b>Point</b> — make a relevant point using technical terms (AO1).</li><li><b>Explain</b> it — how or why it works (AO2).</li><li><b>Example</b> — apply it to the sport or performer in the question (AO2).</li><li><b>Link / limitation</b> — a counter-point, condition or weakness (AO3).</li><li><b>Judge</b> — finish with a conclusion that answers the question (AO3).</li></ol></div>
<p>Aim for 4–5 developed points rather than 10 undeveloped ones. Synoptic links (e.g. arousal and energy systems, or biomechanics and training) are credited.</p>` },
    { h: 'Multiple choice, short answers and data response', html: `
<ul><li><b>Multiple choice:</b> read every option; eliminate the clearly wrong ones; beware options that are true but do not answer the question.</li>
<li><b>Short answers:</b> match the number of points to the marks. For “explain”, each point needs a reason.</li>
<li><b>Data response:</b> quote figures with units (“heart rate rose from 72 to 168 bpm”); describe the trend before explaining it; calculate differences or percentage change where useful; link to the theory; note anomalies or limitations of the data.</li>
<li><b>Calculations:</b> write the formula, substitute, give the answer with units, and use sensible significant figures.</li></ul>` }
  ],
  eqs: [],
  worked: [
    { q: 'Evaluate the use of plyometrics for a netball player. (6 marks) — plan an answer.', s: ['<b>Point + explain:</b> plyometrics use the stretch–shortening cycle — an eccentric contraction followed rapidly by a concentric one — to develop power.', '<b>Apply:</b> a netballer needs power for jumping to intercept, rebounds and quick first steps; bounding and depth jumps are specific to landing and re-jumping.', '<b>Evaluate +:</b> improves the type II fibre recruitment and elastic energy use; can be done with little equipment and on court.', '<b>Evaluate −:</b> high injury risk to knees and ankles, needs a strength base and good technique; DOMS; not suitable for young or unfit players.', '<b>Judge:</b> highly specific and effective for a trained netballer if volume is controlled and it is periodised in the pre-season.'], a: 'Point → explain → apply → strengths and limitations → judgement.' }
  ],
  pitfalls: ['Describing when the question says evaluate — AO3 marks need a judgement.', 'Writing about a general sport when the question gives a specific context.', 'Answering with a list in a levels-marked question.', 'Forgetting units in calculations.', 'Spending too long on low-mark questions.'],
  cards: [
    ['AO1?', 'Knowledge and understanding.'], ['AO2?', 'Application of knowledge and understanding.'], ['AO3?', 'Analysis and evaluation.'], ['AO4?', 'Practical skills and analysis/evaluation of performance (NEA only).'],
    ['Unit 1 paper?', '1¾ hours, 72 marks, 24% of A level.'], ['Unit 3 paper?', '2 hours, 90 marks, 36% of A level.'], ['“Evaluate” means…', 'Weigh strengths and weaknesses and reach a supported judgement.'],
    ['“Explain” means…', 'Give reasons or causes.'], ['How are extended answers marked?', 'In bands, by overall quality — knowledge, application, analysis/evaluation, structure and accuracy of writing.'], ['P-E-E-L-J?', 'Point, explain, example, link/limitation, judge.']
  ],
  quiz: [
    { q: 'Which command word requires a judgement?', o: ['Evaluate', 'Describe', 'State', 'Identify'], x: 'AO3.' },
    { q: 'What proportion of the exam marks is for AO3?', o: ['About one third', 'None', 'Two thirds', 'All'], x: 'AO1, AO2 and AO3 are equally weighted.' },
    { q: 'How long is the Unit 3 exam?', o: ['2 hours', '1¾ hours', '1½ hours', '3 hours'], x: '90 marks.' },
    { q: 'An 8-mark extended question should take about…', o: ['11 minutes', '2 minutes', '30 minutes', '5 minutes'], x: '≈ 1.4 min per mark.' },
    { q: 'In a data-response answer you should…', o: ['quote figures with units from the data', 'ignore the data', 'give only theory', 'copy the question'], x: 'Use the evidence.' },
    { q: 'Which content can appear in the Unit 3 exam?', o: ['All A level content, including AS topics', 'Only Unit 3 topics', 'Only NEA content', 'Only biomechanics'], x: 'Synoptic.' }
  ],
  exam: [
    { q: 'Explain why examiners reward a supported conclusion in extended answers. [2]', m: 2, ms: ['extended questions assess AO3 — analysis and evaluation', 'a judgement weighing both sides shows evaluation / answers the question'] }
  ],
  sims: ['commandw', 'bands'], gens: []
});

TOPICS.push({
  id: 'S.2', unit: 'S', area: 'skills', ref: 'Appendix C · Quantitative skills', title: 'Quantitative skills: data, graphs and equations', short: 'Percentages, means, rates; plotting and reading graphs; equations and units',
  summary: 'Quantitative skills are assessed in both exams and in the NEA. Practise reading and plotting graphs, calculating means, percentages and percentage change, and using the key equations and units of exercise physiology and biomechanics.',
  spec: [
    'Interpret data and graphs relating to changes in the musculo-skeletal, cardio-respiratory and neuro-muscular systems; energy systems and recovery; planning, monitoring and evaluating training',
    'Biomechanics: knowledge and use of definitions, equations, formulae and units; plot, label and interpret graphs and diagrams',
    'Sport psychology and skill acquisition: understand and interpret graphical representations of theories',
    'Sport and society: interpret and analyse data and graphs relating to participation',
    'Sport technology: types and use of data analysis to optimise performance'
  ],
  learn: [
    { h: 'Core calculations', html: `
<div class="tbl"><table><tr><th>Calculation</th><th>Formula</th><th>Example</th></tr>
<tr><td>Mean</td><td>sum ÷ number of values</td><td>sprint times 4.2, 4.4, 4.3 → 12.9 ÷ 3 = 4.3 s</td></tr>
<tr><td>Median / range</td><td>middle value / highest − lowest</td><td>range shows consistency (reliability)</td></tr>
<tr><td>Percentage</td><td>part ÷ whole × 100</td><td>32 of 40 passes completed = 80%</td></tr>
<tr><td>Percentage change</td><td>(new − old) ÷ old × 100</td><td>VO₂max 45 → 50 = +11.1%</td></tr>
<tr><td>Rate</td><td>quantity ÷ time</td><td>distance ÷ time = speed</td></tr>
<tr><td>Ratio</td><td>work : rest</td><td>30 s work, 90 s rest = 1 : 3</td></tr></table></div>` },
    { h: 'Key equations and units', html: `
<div class="tbl"><table><tr><th>Quantity</th><th>Equation</th><th>Unit</th></tr>
<tr><td>Cardiac output</td><td>$Q = "HR" × "SV"$</td><td>L/min</td></tr>
<tr><td>Minute ventilation</td><td>$V_E = "TV" × f$</td><td>L/min</td></tr>
<tr><td>Maximum heart rate (estimate)</td><td>$220 − "age"$</td><td>bpm</td></tr>
<tr><td>Karvonen training heart rate</td><td>HR<sub>rest</sub> + x% × (HR<sub>max</sub> − HR<sub>rest</sub>)</td><td>bpm</td></tr>
<tr><td>Speed / velocity</td><td>distance (displacement) ÷ time</td><td>m/s</td></tr>
<tr><td>Acceleration</td><td>$(v − u)/t$</td><td>m/s²</td></tr>
<tr><td>Force</td><td>$F = ma$; weight $W = mg$</td><td>N</td></tr>
<tr><td>Momentum</td><td>$p = mv$</td><td>kg m/s</td></tr>
<tr><td>Impulse</td><td>$F × t = m(v − u)$</td><td>N s</td></tr>
<tr><td>Angular velocity</td><td>$ω = θ/t$</td><td>rad/s</td></tr>
<tr><td>Angular momentum</td><td>$L = Iω$</td><td>kg m²/s</td></tr>
<tr><td>Moment of inertia</td><td>$I = Σ m r^2$</td><td>kg m²</td></tr>
<tr><td>Mechanical advantage</td><td>effort arm ÷ load arm</td><td>—</td></tr></table></div>
<p>Take g = 9.8 N/kg. Convert units first: ml → L (÷ 1000), minutes → seconds (× 60), km/h → m/s (÷ 3.6), revolutions → radians (× 2π).</p>` },
    { h: 'Plotting and reading graphs', html: `
<ul><li><b>Axes:</b> independent variable (usually time or intensity) on the x-axis; dependent variable on the y-axis; both labelled with <b>quantity and unit</b> (e.g. “heart rate (bpm)”).</li>
<li><b>Scale:</b> even, sensible, using at least half the grid; do not start at zero if the data are clustered (show a break).</li>
<li><b>Points and lines:</b> plot accurately; join points for time series or draw a smooth curve/line of best fit for trends; bar charts for categories (participation by sport).</li>
<li><b>Reading:</b> describe the overall <b>trend</b>, then key points with figures (peak, plateau, rate of change), then explain using theory.</li>
<li><b>Gradient</b> = rate of change (e.g. acceleration on a velocity–time graph); <b>area</b> under a curve = accumulated quantity (distance under a velocity–time graph; impulse under a force–time graph).</li></ul>
<p>Graphs of theories you should be able to draw and interpret: learning curves, inverted-U, drive and catastrophe theories, Hick’s law, the Ringelmann effect, HR and ventilation responses, energy continuum, force–time graphs, motion graphs.</p>` }
  ],
  eqs: [['"% change" = (("new" − "old")/"old") × 100', 'percentage change']],
  worked: [
    { q: 'A player’s sit and reach scores over three trials were 21, 24 and 23 cm. Calculate the mean and the range and comment on reliability. (3 marks)', s: ['Mean = (21 + 24 + 23) ÷ 3 = <b>22.7 cm</b>.', 'Range = 24 − 21 = <b>3 cm</b>.', 'A small range suggests the test was fairly reliable; the first trial may be lower because the player was not fully warmed up.'], a: 'Mean 22.7 cm; range 3 cm.' }
  ],
  pitfalls: ['Calculating percentage change using the new value as the denominator.', 'Leaving units off axes.', 'Describing a graph without quoting any figures.', 'Mixing ml and L, or minutes and seconds.'],
  cards: [
    ['Percentage change?', '(new − old) ÷ old × 100.'], ['Gradient of a velocity–time graph?', 'Acceleration.'], ['Area under a force–time graph?', 'Impulse.'], ['Karvonen formula?', 'HRrest + % × (HRmax − HRrest).'],
    ['km/h to m/s?', 'Divide by 3.6.'], ['What goes on the x-axis?', 'The independent variable (often time or intensity).'], ['Range tells you…', 'The spread of results — useful for judging consistency/reliability.']
  ],
  quiz: [
    { q: 'A VO₂max rises from 40 to 46 ml/kg/min. The percentage increase is…', o: ['15%', '6%', '13%', '87%'], x: '6 ÷ 40 × 100.' },
    { q: 'Mean of 12, 15 and 18 is…', o: ['15', '45', '6', '12'], x: '45 ÷ 3.' },
    { q: '36 km/h in m/s is…', o: ['10 m/s', '36 m/s', '129.6 m/s', '3.6 m/s'], x: '÷ 3.6.' },
    { q: 'On a velocity–time graph, the area under the line gives…', o: ['displacement', 'acceleration', 'force', 'momentum'], x: 'velocity × time.' },
    { q: 'A graph axis label should include…', o: ['the quantity and its unit', 'only a number', 'the question number', 'the title of the paper'], x: 'e.g. heart rate (bpm).' }
  ],
  exam: [
    { q: 'A swimmer’s 50 m times fell from 32.5 s to 30.9 s after training. Calculate the percentage improvement. [2]', m: 2, ms: ['(32.5 − 30.9) ÷ 32.5 × 100', '= 4.9%'] }
  ],
  sims: ['grapher'], gens: ['pctchange', 'mean1', 'cardout', 'vecalc', 'karvonen', 'speed', 'accel', 'fma', 'momentum', 'impulse', 'angmom', 'unitconv']
});
