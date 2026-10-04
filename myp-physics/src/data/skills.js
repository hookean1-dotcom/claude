/* ==========================================================
   SKILLS · MYP sciences objectives A–D
   ========================================================== */
TOPICS.push({
  id: 'S.1', unit: 'S', ref: 'Criteria A–D', title: 'MYP criteria and command terms', short: 'How MYP science is assessed',
  summary: 'Every MYP science task is assessed against four criteria, each marked out of 8. Know what each criterion rewards, how the levels work, and what each command term asks you to do.',
  spec: ['Describe what each of the four MYP sciences criteria (A–D) assesses', 'Explain how achievement levels 1–8 work and how the four criteria combine into a final grade 1–7', 'Use command terms correctly: state, outline, describe, explain, discuss, evaluate, justify, analyse, suggest, predict, design, formulate', 'Use a self-assessment against the applications and skills of each unit to track progress'],
  learn: [
    { h: 'The four criteria', html: `
<div class="tbl"><table><tr><th>Criterion</th><th>Title</th><th>What it rewards (Year 5 / Grade 10)</th></tr>
<tr><td><b>A</b></td><td>Knowing and understanding</td><td>explaining scientific knowledge; applying it to solve problems in familiar and unfamiliar situations; analysing and evaluating information to make scientifically supported judgements</td></tr>
<tr><td><b>B</b></td><td>Inquiring and designing</td><td>explaining the problem or question to be tested; formulating a testable hypothesis with scientific reasoning; explaining how to manipulate the variables and collect data; designing a safe, logical, complete method</td></tr>
<tr><td><b>C</b></td><td>Processing and evaluating</td><td>presenting collected and transformed data; interpreting data and explaining results with scientific reasoning; evaluating the validity of the hypothesis and of the method; explaining improvements or extensions</td></tr>
<tr><td><b>D</b></td><td>Reflecting on the impacts of science</td><td>explaining how science is applied to address a problem or issue; discussing and evaluating the implications (social, economic, environmental, ethical…); applying scientific language effectively; documenting sources</td></tr></table></div>
<p>Each criterion is marked out of <b>8</b> in bands of 1–2, 3–4, 5–6 and 7–8. Over the year your teacher makes a best-fit judgement for each criterion; the four levels add up to a total out of 32 that converts to a grade from 1 to 7. Use the <a href="#/criteria">Criteria &amp; grades</a> page to track your levels.</p>` },
    { h: 'From levels to the MYP grade', html: `
<div class="tbl"><table><tr><th>Total (A + B + C + D)</th><th>Grade</th></tr><tr><td>1–5</td><td>1</td></tr><tr><td>6–9</td><td>2</td></tr><tr><td>10–14</td><td>3</td></tr><tr><td>15–18</td><td>4</td></tr><tr><td>19–23</td><td>5</td></tr><tr><td>24–27</td><td>6</td></tr><tr><td>28–32</td><td>7</td></tr></table></div>
<p>These are the general MYP grade boundaries; your school may moderate them.</p>` },
    { h: 'Command terms', html: `
<div class="tbl"><table><tr><th>Term</th><th>What to do</th></tr>
<tr><td>State / identify</td><td>give a specific name, value or short answer, no explanation</td></tr>
<tr><td>Outline</td><td>give a brief account or summary</td></tr>
<tr><td>Describe</td><td>give a detailed account (what happens), without reasons</td></tr>
<tr><td>Explain</td><td>give a detailed account including reasons or causes — use “because” and the physics</td></tr>
<tr><td>Calculate / determine</td><td>obtain a numerical answer, showing the working</td></tr>
<tr><td>Derive</td><td>manipulate equations to give a new equation</td></tr>
<tr><td>Predict</td><td>give an expected result</td></tr>
<tr><td>Suggest</td><td>propose a solution, hypothesis or other possible answer</td></tr>
<tr><td>Analyse</td><td>break down to bring out the essential elements or structure; identify parts and relationships</td></tr>
<tr><td>Discuss</td><td>offer a considered and balanced review including a range of arguments, factors or hypotheses, supported by evidence</td></tr>
<tr><td>Evaluate</td><td>make an appraisal by weighing up strengths and limitations</td></tr>
<tr><td>Justify</td><td>give valid reasons or evidence to support an answer or conclusion</td></tr>
<tr><td>Formulate</td><td>express precisely and systematically (e.g. a hypothesis)</td></tr>
<tr><td>Design</td><td>produce a plan, simulation or model</td></tr></table></div>` },
    { h: 'Self-assessment and the evidence log', html: `
<p>Each unit lists its <b>applications and skills</b> (AS). At the end of a unit, rate yourself on each one and collect evidence — a quiz score, a lab report, a worked problem. In this app, the red/amber/green checklist beside every topic is your evidence log: rate each statement, then use the quizzes and exam questions to test whether your rating is honest.</p>` }
  ],
  eqs: [],
  worked: [{ q: 'A student’s best-fit levels are A 6, B 5, C 7, D 4. What MYP grade is this?', s: ['Total = 6 + 5 + 7 + 4 = 22', '19–23 → grade 5'], a: 'Grade 5' }],
  pitfalls: ['Describing when the question says explain — no reasons, no marks.', 'Giving a one-sided answer to discuss or evaluate.', 'Forgetting that a criterion level is a best fit across the year, not an average of percentages.'],
  cards: [
    ['Criterion A?', 'Knowing and understanding.'], ['Criterion B?', 'Inquiring and designing.'], ['Criterion C?', 'Processing and evaluating.'], ['Criterion D?', 'Reflecting on the impacts of science.'], ['Maximum level per criterion?', '8'], ['Total for a grade 7?', '28–32'], ['Total for a grade 4?', '15–18'],
    ['Describe vs explain?', 'Describe = what happens; explain = what happens and why.'], ['Evaluate?', 'Weigh up strengths and limitations to reach a judgement.'], ['Discuss?', 'Balanced review of arguments/factors with evidence and a conclusion.'], ['Justify?', 'Give reasons or evidence that support an answer.'], ['Formulate (a hypothesis)?', 'Express it precisely, with a scientific reason.']
  ],
  quiz: [
    { q: 'Criterion B assesses', o: ['inquiring and designing', 'knowing and understanding', 'processing and evaluating', 'reflecting on the impacts of science'], x: 'Planning investigations.' },
    { q: 'Criterion D assesses', o: ['reflecting on the impacts of science', 'designing a method', 'graphing data', 'recall of facts'], x: 'Science in society.' },
    { q: 'A student scores A 7, B 6, C 6, D 5. The total is 24, which is grade', o: ['6', '5', '7', '4'], x: '24–27 → 6.' },
    { q: 'The command term “explain” requires', o: ['a detailed account including reasons or causes', 'a single word answer', 'a list of facts', 'a balanced argument with a conclusion'], x: 'Why.' },
    { q: 'The command term “evaluate” requires you to', o: ['weigh up strengths and limitations', 'state a value', 'describe a method', 'list equipment'], x: 'Appraisal.' },
    { q: 'Each MYP criterion is marked out of', o: ['8', '10', '7', '32'], x: 'Levels 0–8.' },
    { q: 'Presenting, interpreting and evaluating data belongs to criterion', o: ['C', 'A', 'B', 'D'], x: 'Processing and evaluating.' },
    { q: 'Which command term asks for a balanced review with a conclusion?', o: ['discuss', 'state', 'outline', 'calculate'], x: 'Range of arguments.' }
  ],
  exam: [
    { q: 'Explain the difference between the command terms “describe” and “explain”, using the cooling of a cup of tea as an example of each.', m: 4, cr: 'A', ms: ['Describe: an account of what happens …', '… e.g. the temperature falls quickly at first, then more slowly.', 'Explain: an account with reasons …', '… e.g. the rate of energy transfer depends on the temperature difference, which decreases as the tea cools.'] }
  ],
  sims: ['grades'], gens: []
});

TOPICS.push({
  id: 'S.2', unit: 'S', ref: 'Criteria B and C', title: 'Designing investigations and writing lab reports', short: 'Hypothesis, variables, method, data, evaluation',
  summary: 'The labs in every unit are assessed with criteria B and C. Learn the structure of a strong lab report: a focused research question, a reasoned hypothesis, controlled variables, a safe and detailed method, processed data with uncertainties, and a critical evaluation.',
  spec: ['Write a focused research question naming the independent and dependent variables', 'Formulate a testable hypothesis and explain it using scientific reasoning', 'Identify independent, dependent and control variables and explain how each will be manipulated, measured or controlled', 'Design a logical, complete and safe method with sufficient, relevant data (at least 5 values, repeats)', 'Present raw and processed data with uncertainties and appropriate graphs', 'Interpret the data, evaluate the hypothesis and the validity of the method, and explain improvements and extensions'],
  learn: [
    { h: 'Criterion B: designing', html: `
<ol><li><b>Research question</b> — specific and measurable: “How does the length of a constantan wire (20–100 cm) affect its resistance?”</li><li><b>Hypothesis</b> — a prediction with a scientific reason: “If the length doubles, the resistance will double, because electrons collide with twice as many lattice ions.”</li><li><b>Variables</b> — a table showing the independent variable (range and how it will be changed), the dependent variable (how and with what instrument it will be measured) and each control variable (why it matters and how it will be kept constant).</li><li><b>Equipment</b> — with sizes and resolutions.</li><li><b>Method</b> — numbered steps that someone else could follow exactly; at least five values of the independent variable; repeats; a labelled diagram.</li><li><b>Safety</b> — specific hazards and precautions (hot wires, falling masses, eye protection).</li></ol>` },
    lwDeep(LW['S.1'].learn[0]),
    { h: 'Criterion C: processing and evaluating', html: `
<ol><li><b>Present</b> raw data in a clear table with units and uncertainties; process it (means, calculated values) and show a sample calculation.</li><li><b>Graph</b> the processed data with error bars and a best-fit line; find gradients and intercepts with uncertainties.</li><li><b>Interpret</b>: describe the trend with data (“R increased from 1.1 Ω to 5.4 Ω”), state whether it is proportional, and explain it with physics.</li><li><b>Evaluate the hypothesis</b>: is it supported, partly supported or not supported — and how sure are you, given the uncertainties?</li><li><b>Evaluate the method</b>: identify sources of random and systematic error and their effect on the results; comment on how well variables were controlled.</li><li><b>Improve and extend</b>: specific, realistic improvements linked to each weakness, and a further question to investigate.</li></ol>` },
    lwDeep(LW['S.1'].learn[2])
  ],
  eqs: [],
  worked: [{ q: 'Write a hypothesis for an investigation into how the angle of a ramp affects the acceleration of a trolley (friction negligible).', s: ['State the relationship: as the angle increases, the acceleration increases.', 'Be precise: acceleration should be proportional to sin θ (a = g sin θ).', 'Give the reason: the component of the weight down the slope is mg sin θ, and a = F/m.'], a: '“If the ramp angle increases, the acceleration will increase in proportion to sin θ, because the component of weight down the slope is mg sin θ.”' }],
  pitfalls: ['A research question that does not name both variables.', 'A hypothesis with no scientific reason.', 'Listing control variables without saying how they will be controlled.', 'Fewer than five values of the independent variable.', 'Generic evaluations such as “human error” — name the specific error and its effect.'],
  cards: [
    ['Good research question?', 'Names the independent and dependent variables (and the range).'], ['Testable hypothesis?', 'Prediction of the relationship + scientific reasoning.'], ['Independent variable?', 'The one you change deliberately.'], ['Dependent variable?', 'The one you measure.'], ['Control variable?', 'Kept constant so the test is fair/valid.'],
    ['Minimum number of values for a trend?', 'At least five, with repeats.'], ['Sample calculation?', 'One worked example of how processed data were calculated.'], ['Evaluating the method?', 'Identify specific random/systematic errors and their effect.'], ['Good improvement?', 'Specific, realistic and linked to a weakness.'], ['Extension?', 'A further question that builds on the investigation.']
  ],
  quiz: [
    { q: 'Which is the best research question?', o: ['How does the length of a wire (20–100 cm) affect its resistance?', 'What affects resistance?', 'Is electricity dangerous?', 'Do wires work?'], x: 'Specific variables and range.' },
    { q: 'A good hypothesis includes', o: ['a prediction and a scientific reason', 'only a prediction', 'only the equipment list', 'the final results'], x: 'Criterion B.' },
    { q: '“Human error” in an evaluation is weak because', o: ['it does not identify a specific error or its effect', 'humans never make errors', 'it is too detailed', 'it refers to the hypothesis'], x: 'Be specific.' },
    { q: 'In criterion C, a sample calculation shows', o: ['how processed data were obtained from raw data', 'the equipment used', 'the safety precautions', 'the research question'], x: 'Transparency.' },
    { q: 'How many values of the independent variable should usually be tested to establish a trend?', o: ['at least five', 'one', 'two', 'exactly three'], x: 'Enough for a graph.' },
    { q: 'An extension to an investigation is', o: ['a further question that builds on the findings', 'repeating the same experiment', 'drawing the graph larger', 'adding a title'], x: 'Next inquiry.' }
  ],
  exam: [
    { q: 'Design an investigation to find how the height from which a ball is dropped affects its bounce height. Include a hypothesis with reasoning, the variables, the method and how you will make the data reliable.', m: 8, cr: 'B', ms: ['Research question naming both variables.', 'Hypothesis (e.g. bounce height ∝ drop height) with energy reasoning (fixed fraction of energy dissipated).', 'Independent variable: drop height, at least five values (e.g. 0.50–1.50 m).', 'Dependent variable: bounce height measured with a metre rule/video at eye level.', 'Controls: same ball, surface, temperature of ball, dropped not thrown.', 'Method steps clear and repeatable.', 'Repeats (≥ 3) and mean; uncertainty from half the range.', 'Safety/practical detail, e.g. video analysis to reduce parallax.'] }
  ],
  sims: [], gens: ['mean1', 'unc1']
});

TOPICS.push({
  id: 'S.3', unit: 'S', ref: 'Criterion D', title: 'Reflecting on the impacts of science', short: 'Applications, implications, perspectives, sources',
  summary: 'Criterion D asks how physics is used to address real problems — and what that means for people, economies, the environment and fairness. Learn to structure a balanced discussion that uses scientific language precisely and references its sources.',
  spec: ['Explain how a scientific application addresses a specific problem or issue, using correct physics', 'Discuss and evaluate implications: social, economic, environmental, ethical, political, cultural, moral', 'Consider different perspectives and stakeholders and reach a justified conclusion', 'Apply scientific language effectively and accurately', 'Document sources using a consistent referencing style (in-text citations and a bibliography)'],
  learn: [
    { h: 'Structure of a strong Criterion D response', html: `
<ol><li><b>The problem</b> — what issue is being addressed, and for whom? (e.g. 1 billion people lack vision correction.)</li><li><b>The science</b> — explain how the application works with correct, specific physics (refraction by a diverging lens…).</li><li><b>Implications</b> — at least two different kinds, each with evidence: social, economic, environmental, ethical, political, cultural.</li><li><b>Perspectives</b> — how different stakeholders (patients, governments, companies, future generations) see it.</li><li><b>Evaluation</b> — weigh benefits against limitations; decide.</li><li><b>Conclusion</b> — a justified judgement that follows from your arguments.</li><li><b>Sources</b> — cite in the text and list in a bibliography (e.g. APA or MLA, as your school uses).</li></ol>` },
    { h: 'Implications — a checklist', html: `
<div class="tbl"><table><tr><th>Type</th><th>Ask…</th></tr>
<tr><td>Social</td><td>How does it affect people’s lives, health, safety, education?</td></tr>
<tr><td>Economic</td><td>Who pays? Costs and savings; jobs; affordability.</td></tr>
<tr><td>Environmental</td><td>Emissions, waste, land use, resources, sustainability.</td></tr>
<tr><td>Ethical / moral</td><td>Is it fair? Who benefits and who carries the risk? Duty to future generations?</td></tr>
<tr><td>Political</td><td>Laws, regulation, international agreements, security.</td></tr>
<tr><td>Cultural</td><td>Traditions, beliefs, acceptance in different communities.</td></tr></table></div>` },
    { h: 'Debatable questions in this course', html: `
<p>Each unit includes debatable inquiry questions — ideal Criterion D practice. Open a unit page to see the arguments on each side:</p>
<ul><li>Unit 1 — Does the SI system improve global engagement?</li><li>Unit 2 — Have improvements in safety made people better or worse drivers?</li><li>Unit 3 — Where did the energy originally come from?</li><li>Unit 4 — Is the developed world doing enough to support the treatment of diseases in developing countries?</li><li>Unit 5 — What challenges are there in achieving fair and equitable electricity distribution?</li><li>Unit 6 — Is nuclear power the answer to our sustainable energy needs?</li></ul>` }
  ],
  eqs: [],
  worked: [{ q: 'Turn this weak sentence into a strong Criterion D sentence: “Nuclear power is bad because of waste.”', s: ['Name the specific implication: environmental and ethical.', 'Use precise science: spent fuel contains isotopes with half-lives of thousands of years, emitting ionising radiation.', 'Weigh it: this burdens future generations who do not benefit from the electricity, although the volume is small and can be stored securely.'], a: '“Spent nuclear fuel contains isotopes with half-lives of thousands of years, so it must be isolated from people for many generations — an ethical burden on future generations, even though its small volume makes secure storage technically possible.”' }],
  pitfalls: ['Describing the technology without discussing implications.', 'One-sided answers — always consider at least two perspectives.', 'Conclusions that do not follow from your arguments.', 'No references, or copying sources without citation.', 'Vague language: “it is good for the environment”.'],
  cards: [
    ['Six types of implication?', 'Social, economic, environmental, ethical/moral, political, cultural.'], ['What makes a conclusion strong?', 'It weighs the arguments and is justified by them.'], ['What is a stakeholder?', 'A person or group affected by the issue.'], ['Why reference sources?', 'Academic honesty and so readers can check the evidence.'], ['Criterion D strand iii?', 'Apply scientific language effectively.'], ['A balanced discussion includes…', 'Arguments for and against, from different perspectives, with evidence, then a judgement.']
  ],
  quiz: [
    { q: 'Criterion D asks you mainly to', o: ['discuss and evaluate the implications of applying science', 'design a method', 'process raw data', 'recall definitions'], x: 'Impacts of science.' },
    { q: 'Which is an economic implication of electric cars?', o: ['lower running costs but a high purchase price', 'reduced air pollution in cities', 'quieter streets', 'changing attitudes to car ownership'], x: 'Money.' },
    { q: 'A strong conclusion in a Criterion D task', o: ['follows from and weighs the arguments made', 'introduces new evidence', 'repeats the question', 'is always in favour of the technology'], x: 'Justified.' },
    { q: 'Referencing sources is required because', o: ['it shows academic honesty and lets readers check evidence', 'it makes the essay longer', 'teachers like lists', 'it replaces the need for explanation'], x: 'Strand iv.' },
    { q: 'Which of these is the best Criterion D statement?', o: ['Solar panels cut CO₂ emissions per kWh by about 90% compared with coal, but mining for their materials has local environmental costs', 'Solar panels are good', 'Solar panels use light', 'Everyone should buy solar panels'], x: 'Specific, evidenced and balanced.' },
    { q: 'Considering how a decision affects future generations is an example of', o: ['an ethical perspective', 'a calculation', 'a control variable', 'a systematic error'], x: 'Fairness over time.' }
  ],
  exam: [
    { q: 'Optical fibres and satellites both carry global communications. Discuss the implications of increasing worldwide access to the internet.', m: 8, cr: 'D', ms: ['Explains the physics of at least one technology (TIR in fibres / microwaves to satellites).', 'Social implication with example (education, health information, family contact).', 'Economic implication (trade, jobs, cost of infrastructure).', 'Environmental implication (energy use of data centres, cables, satellites/space debris).', 'Ethical/political implication (digital divide, privacy, misinformation, censorship).', 'Different perspectives considered.', 'Scientific language used accurately.', 'Justified conclusion; sources referenced.'] }
  ],
  sims: [], gens: []
});
