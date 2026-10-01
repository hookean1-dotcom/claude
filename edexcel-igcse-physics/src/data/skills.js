/* ==========================================================
   SKILLS · EXPERIMENTAL SKILLS (AO3), COMMAND WORDS AND MATHS (Appendices 4 and 5)
   ========================================================== */
const COMMAND_WORDS = [
  ['Add/Label', 'Add or label stimulus material given in the question, e.g. labelling a diagram or adding units to a table.'],
  ['Calculate', 'Obtain a numerical answer, showing relevant working.'],
  ['Comment on', 'Synthesise a number of variables from data/information to form a judgement.'],
  ['Complete', 'Complete a table or diagram.'],
  ['Deduce', 'Draw or reach conclusion(s) from the information provided.'],
  ['Describe', 'Give an account of something. Statements need to be developed and are often linked, but do not need a justification or reason.'],
  ['Design', 'Plan or invent a procedure from existing principles or ideas.'],
  ['Determine', 'The answer must have a quantitative element from the stimulus, or show how it can be reached quantitatively.'],
  ['Discuss', 'Identify the issue, explore all aspects of it, and investigate it by reasoning or argument.'],
  ['Draw', 'Produce a diagram using a ruler or freehand.'],
  ['Estimate', 'Find an approximate value, number or quantity from a diagram, given data or a calculation.'],
  ['Evaluate', 'Review information, bring it together to form a conclusion drawing on evidence (strengths, weaknesses, alternatives, data); come to a supported judgement.'],
  ['Explain', 'Give a justification or exemplification of a point — the answer must contain reasoning (this can be mathematical).'],
  ['Give/State/Name', 'Recall one or more pieces of information.'],
  ['Give a reason/reasons', 'A statement has been made; give only the reason(s) why.'],
  ['Identify', 'Select key information from a given stimulus or resource.'],
  ['Justify', 'Give evidence to support a statement or an earlier answer.'],
  ['Plot', 'Mark points accurately on a grid from data and draw a line of best fit; include suitable scales and labelled axes if not given.'],
  ['Predict', 'Give an expected result.'],
  ['Show that', 'Verify the statement given in the question (show full working to a more precise value).'],
  ['Sketch', 'Produce a freehand drawing; for a graph, a line and labelled axes with important features shown — axes not scaled.'],
  ['State what is meant by', 'Give the meaning of a term where it could be described in different ways.'],
  ['Suggest', 'Use your knowledge to propose a solution to a problem in a novel context.'],
  ['Analyse the data/graph to explain', 'Examine the data or graph in detail to provide an explanation.']
];

TOPICS.push({
  id: 'S.1', unit: 'S', ref: 'AO3 · Appendix 5', title: 'Experimental skills and command words', short: 'Variables, accuracy, reliability, planning, command words',
  summary: 'The experimental skills examined in written questions (about 20% of the marks): planning, variables, measurements, tables and graphs, reliability, accuracy and evaluation — plus the command words used in Edexcel papers and what each demands.',
  spec: [
    'solve problems set in a practical context; apply knowledge in questions with a practical context',
    'devise and plan investigations, selecting appropriate techniques; describe safe and skilful methods',
    'make observations and measurements with appropriate precision, record them methodically and present them appropriately',
    'identify independent, dependent and control variables',
    'analyse and interpret data to draw conclusions consistent with the evidence; communicate findings with technical language, calculations and graphs',
    'assess the reliability of an experimental activity; evaluate data and methods, taking into account factors that affect accuracy and validity'
  ],
  learn: [
    { h: 'Variables and planning', html: `
<ul><li><b>Independent variable</b> — the one you change deliberately.</li><li><b>Dependent variable</b> — the one you measure.</li><li><b>Control variables</b> — kept the same so the test is fair (valid).</li></ul>
<p>A good plan names the equipment, what is measured and with what instrument, the range and number of values of the independent variable (at least 5–6), repeats, control variables and how, safety, and how results will be analysed (table, graph, calculation).</p>
<div class="box tip"><b class="lbl">6-mark “describe an experiment” answers</b><p>Cover: equipment; what to measure and how; independent variable changed over a range; control variables; repeats and means; how to process results (graph/equation); a safety point.</p></div>` },
    { h: 'Measurements, tables and graphs', html: `
<ul><li>Choose instruments with suitable <b>resolution</b> (smallest scale division) — e.g. a micrometer for a wire’s diameter.</li><li>Read scales at <b>eye level</b> to avoid parallax error; check for <b>zero errors</b>.</li><li>Tables: independent variable in the first column; headings with quantity and <b>unit</b> (e.g. “time / s”); consistent decimal places.</li><li>Graphs: independent variable on the x-axis; scales using more than half the grid and easy to read; labelled axes with units; points plotted accurately (± half a square); a line or smooth curve of best fit (not dot-to-dot).</li></ul>` },
    { h: 'Errors, accuracy and reliability', html: `
[[d:accuracy]]
<div class="tbl"><table><tr><th>Term</th><th>Meaning</th></tr>
<tr><td><b>Accurate</b></td><td>close to the true value</td></tr>
<tr><td><b>Precise</b></td><td>repeat readings close together (little spread)</td></tr>
<tr><td><b>Reliable / repeatable</b></td><td>the same results when repeated by the same person with the same method</td></tr>
<tr><td><b>Valid</b></td><td>the experiment tests what it sets out to (fair test, controls)</td></tr>
<tr><td><b>Random error</b></td><td>unpredictable scatter (e.g. reaction time) — reduce by repeating and averaging</td></tr>
<tr><td><b>Systematic error</b></td><td>all readings shifted the same way (e.g. zero error, heat loss) — reduce by improving the method/calibration</td></tr>
<tr><td><b>Anomalous result</b></td><td>a reading that does not fit the pattern — repeat it or leave it out of the mean</td></tr></table></div>` },
    { h: 'Command words', html: `
<div class="tbl"><table><tr><th>Command word</th><th>What you must do</th></tr>${COMMAND_WORDS.map(c => `<tr><td><b>${c[0]}</b></td><td>${c[1]}</td></tr>`).join('')}</table></div>
<p class="small muted">From Appendix 5 of the specification. Multiple-choice questions use “What”, “Why” and “Which”.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'A student times a trolley rolling down a ramp five times: 2.31 s, 2.28 s, 2.95 s, 2.30 s, 2.33 s. Find the mean time.', s: ['2.95 s is anomalous — leave it out (or repeat it).', 'Mean = (2.31 + 2.28 + 2.30 + 2.33) ÷ 4 = 9.22 ÷ 4', '= 2.31 s'], a: '2.31 s' }
  ],
  pitfalls: ['Confusing accuracy with precision.', 'Joining points dot-to-dot instead of a line of best fit.', 'Missing units in table headings.', 'Saying “repeat to make it more accurate” — repeats improve reliability; accuracy needs a better method.'],
  cards: [
    ['Independent variable?', 'The variable you change.'],
    ['Dependent variable?', 'The variable you measure.'],
    ['Control variable?', 'Kept constant for a fair test.'],
    ['Accurate vs precise?', 'Accurate: close to true value. Precise: repeats close together.'],
    ['How to reduce random error?', 'Repeat readings and take a mean.'],
    ['Example of systematic error?', 'Zero error on a balance; energy lost to surroundings.'],
    ['What is resolution?', 'The smallest change an instrument can measure.'],
    ['What does “Explain” require?', 'Reasoning/justification, not just a description.'],
    ['What does “Show that” require?', 'Verify the given value with full working, usually to more significant figures.'],
    ['What does “Evaluate” require?', 'Weigh strengths and weaknesses and reach a supported judgement.']
  ],
  quiz: [
    { q: 'Results that are close to the true value are', o: ['accurate', 'precise', 'reliable', 'anomalous'], x: 'Definition.' },
    { q: 'A balance reads 0.3 g with nothing on it. This causes', o: ['a systematic (zero) error', 'a random error', 'better precision', 'an anomaly'], x: 'All readings shifted.' },
    { q: 'Repeating readings and taking a mean mainly reduces', o: ['random error', 'systematic error', 'zero error', 'parallax'], x: 'Averaging.' },
    { q: 'The independent variable is plotted on the', o: ['x-axis', 'y-axis', 'either axis', 'a bar chart only'], x: 'Convention.' },
    { q: '“Suggest” means', o: ['propose a solution using your knowledge in a new context', 'recall a fact', 'draw a graph', 'calculate'], x: 'Appendix 5.' },
    { q: 'Reading a scale at eye level avoids', o: ['parallax error', 'zero error', 'random error in timing', 'anomalies'], x: 'Line of sight.' }
  ],
  exam: [
    { q: 'A student investigates how the time period of a pendulum depends on its length.', tag: 'prac', parts: [
      { q: 'State the independent variable, the dependent variable and two control variables.', m: 3, ms: ['independent: length of pendulum', 'dependent: time period', 'control (any two): mass of bob, angle of release/amplitude, same string'] },
      { q: 'Explain why she should time 10 swings and divide by 10 rather than time one swing.', m: 2, ms: ['one swing is a short time so reaction time is a large fraction / percentage error large', 'timing 10 swings reduces the percentage uncertainty'] },
      { q: 'Describe how she could make her timing more accurate.', m: 2, ms: ['start/stop timing as the bob passes the centre (fiducial marker)', 'use light gates / repeat and take a mean'] }
    ] },
    { q: 'Explain the difference between random and systematic errors, giving an example of each from a physics practical.', m: 4, ms: ['random: unpredictable variation between readings', 'e.g. human reaction time in timing', 'systematic: consistent shift in all readings in the same direction', 'e.g. zero error on a meter / energy lost to surroundings in SHC'] }
  ],
  sims: [], gens: ['mean1', 'unc1']
});

TOPICS.push({
  id: 'S.2', unit: 'S', ref: 'Appendix 4', title: 'Maths skills, units and equations', short: 'Standard form, rearranging, graphs, sin⁻¹, prefixes',
  summary: 'The maths used in Edexcel physics: decimals and standard form, ratios and percentages, significant figures, rearranging equations, sin and sin⁻¹, gradients and areas of graphs, and unit prefixes. Plus the recall and given equation lists.',
  spec: [
    'recognise and use numbers in decimal and standard form; use ratios, fractions, percentages, powers and roots',
    'make estimates without a calculator; use calculators to handle sin x and sin⁻¹ x in degrees',
    'use an appropriate number of significant figures; find the arithmetic mean; order of magnitude calculations',
    'understand and use <, >, ∝, ~; change the subject of an equation; substitute values with appropriate units; solve simple equations',
    'translate between graphical and numerical form; y = mx + c; plot graphs; determine the slope and intercept of a linear graph',
    'draw and use the slope of a tangent to a curve as a rate of change; understand the area between a curve and the x-axis and measure it by counting squares',
    'use angles in degrees; calculate areas of triangles and rectangles, surface areas and volumes of cubes'
  ],
  learn: [
    { h: 'Standard form and prefixes', html: `
<p>Standard form writes a number as A × 10ⁿ with 1 ≤ A &lt; 10: 3 000 000 = 3 × 10⁶; 0.00052 = 5.2 × 10⁻⁴.</p>
<div class="tbl"><table><tr><th>Prefix</th><th>Symbol</th><th>Multiply by</th></tr><tr><td>giga</td><td>G</td><td>10⁹</td></tr><tr><td>mega</td><td>M</td><td>10⁶</td></tr><tr><td>kilo</td><td>k</td><td>10³</td></tr><tr><td>centi</td><td>c</td><td>10⁻²</td></tr><tr><td>milli</td><td>m</td><td>10⁻³</td></tr><tr><td>micro</td><td>µ</td><td>10⁻⁶</td></tr><tr><td>nano</td><td>n</td><td>10⁻⁹</td></tr></table></div>` },
    { h: 'Rearranging and substituting', html: `
<p>Rearrange first, then substitute values <b>in SI units</b>, then calculate. Show every step — marks are awarded for the equation, the substitution and the answer with unit.</p>
<p>Example: from $v^2 = u^2 + 2as$, find a: subtract u² → $v^2 - u^2 = 2as$ → divide by 2s → $a = @frac{v^2 - u^2}{2s}$.</p>
<p>Give answers to a sensible number of <b>significant figures</b> — usually the same as the least precise data (often 2 or 3).</p>` },
    { h: 'Graphs', html: `
[[d:gradient]]
<ul><li>A straight line through the origin shows <b>direct proportion</b> (y ∝ x).</li><li>$y = mx + c$: m = gradient = Δy ÷ Δx (use a large triangle), c = y-intercept.</li><li>For a curve, the gradient at a point is the gradient of the <b>tangent</b> there (e.g. speed from a distance–time curve).</li><li>The <b>area under</b> a graph can have meaning (distance under a velocity–time graph) — count squares for curves.</li></ul>` },
    { h: 'Trigonometry in refraction', html: `
<p>In calculator <b>degree</b> mode: sin 30° = 0.5. To find an angle from its sine use $sin^{-1}$: if sin r = 0.42, r = sin⁻¹(0.42) = 24.8°.</p>
<p>Critical angle: $c = sin^{-1}(1/n)$.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Rearrange p₁V₁ = p₂V₂ to find V₂ and calculate it when p₁ = 100 kPa, V₁ = 30 cm³, p₂ = 250 kPa.', s: ['$V_2 = @frac{p_1V_1}{p_2}$', '$V_2 = @frac{100 × 30}{250}$', '$V_2 = 12 "cm"^3$'], a: '12 cm³' }
  ],
  pitfalls: ['Calculator in radians mode.', 'Rounding too early in multi-step calculations.', 'Forgetting to convert prefixes (kJ, mA, cm²) into base units.', 'Reading the gradient from a small triangle.'],
  cards: [
    ['Standard form of 0.00047?', '4.7 × 10⁻⁴'],
    ['1 MHz = ? Hz', '10⁶ Hz'],
    ['1 mA = ? A', '10⁻³ A'],
    ['What does y ∝ x look like on a graph?', 'Straight line through the origin.'],
    ['How to find the gradient of a curve?', 'Draw a tangent and find its gradient.'],
    ['sin⁻¹ is used to…', 'find an angle from its sine value.'],
    ['1 m² in cm²?', '10 000 cm²']
  ],
  quiz: [
    { q: '4.5 kJ in joules is', o: ['4500 J', '0.0045 J', '450 J', '45 000 J'], x: '× 10³.' },
    { q: 'Rearranging V = IR for R gives', o: ['R = V/I', 'R = VI', 'R = I/V', 'R = V − I'], x: 'Divide by I.' },
    { q: 'sin⁻¹(0.5) is', o: ['30°', '60°', '45°', '0.5°'], x: 'Degree mode.' },
    { q: '0.004 56 to 2 significant figures is', o: ['0.0046', '0.0045', '0.005', '0.00456'], x: 'Round.' },
    { q: 'The gradient of a velocity–time graph gives', o: ['acceleration', 'distance', 'speed', 'force'], x: 'Δv/Δt.' }
  ],
  exam: [
    { q: 'Show that the kinetic energy of a 1500 kg car travelling at 31 m/s is about 720 kJ.', m: 2, ms: ['KE = ½ × 1500 × 31²', '= 720 750 J ≈ 720 kJ (answer given to more figures than 720)'] }
  ],
  sims: [], gens: ['sf1', 'prefix1', 'rearr1']
});
