/* ==========================================================
   SKILLS · WORKING SCIENTIFICALLY (both years)
   ========================================================== */
TOPICS.push({
  id: 'S.1', unit: 'S', title: 'Planning a fair test', short: 'Variables, predictions, hazards',
  summary: 'A good investigation starts with a question and a prediction. Change one variable (independent), measure one (dependent) and keep everything else the same (control variables). Think about hazards and how to reduce the risks.',
  spec: [
    'I can identify the independent, dependent and control variables in an investigation',
    'I can write a prediction (hypothesis) with a scientific reason',
    'I can choose suitable equipment and a sensible range and number of values',
    'I can identify hazards and describe how to reduce the risks',
    '★ I can explain why some variables cannot be controlled and what to do about it'
  ],
  learn: [
    { h: 'Variables', html: `
<div class="tbl"><table><tr><th>Variable</th><th>Meaning</th><th>Example: electromagnet</th></tr>
<tr><td><b>Independent</b></td><td>the one you <b>change</b> on purpose</td><td>number of turns of wire</td></tr>
<tr><td><b>Dependent</b></td><td>the one you <b>measure</b> (it depends on the independent)</td><td>number of paper clips picked up</td></tr>
<tr><td><b>Control</b></td><td>the ones you <b>keep the same</b> to make it a <b>fair test</b></td><td>current, core, size of paper clips</td></tr></table></div>
<p>Change <b>only one</b> variable at a time — otherwise you cannot tell which change caused the result.</p>
<p><b>Categoric</b> variables are words or groups (type of surface, colour). <b>Continuous</b> variables are numbers that can take any value (length, time, temperature).</p>` },
    { h: 'Predictions and plans', html: `
<p>A <b>prediction</b> says what you think will happen <b>and why</b>: “I predict that the more turns of wire, the more paper clips the electromagnet will pick up, because each turn adds to the magnetic field.”</p>
<p>A good plan includes: the equipment; the <b>range</b> of values (e.g. 10 to 50 turns) and the <b>interval</b> (steps of 10); at least <b>five</b> different values; <b>repeats</b> (usually 3); the variables; and a risk assessment.</p>` },
    { h: 'Hazards and risks', html: `
<p>A <b>hazard</b> is something that could cause harm (a hot wire, boiling water, a flying lid). The <b>risk</b> is how likely harm is. Reduce risks with <b>precautions</b>:</p>
<ul><li>eye protection for anything that could fly or splash</li><li>low voltages; switch off between readings</li><li>tongs and heat-proof mats for hot objects</li><li>stand up during practicals; keep bags out of the way</li><li>clamp stands weighted so they do not topple; keep feet clear of hanging masses</li></ul>
<div class="box why"><b class="lbl">★ Uncontrolled variables</b><p>Outdoors you cannot control the wind or temperature. Instead, <b>monitor</b> them (write them down), do all the tests in the same session, and take more repeats so that random changes average out.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Hana tests whether the height a ball is dropped from affects the height it bounces. Name the variables.', s: ['Independent: drop height.', 'Dependent: bounce height.', 'Control: same ball, same floor, measure from the bottom of the ball each time, drop without throwing.'], a: 'IV drop height; DV bounce height; CVs ball, floor, method' },
    { q: 'Write a prediction for “does the surface affect friction?”', s: ['Say what will happen: “I predict rougher surfaces will need a bigger force to pull the block.”', 'Give a reason: “because rough surfaces have bigger bumps that catch on each other more.”'], a: 'rougher surface → more friction, because the bumps catch more' }
  ],
  pitfalls: ['Changing two things at once.', 'Writing a prediction without a reason.', 'Listing “safety” as a control variable.', 'Choosing too few values (fewer than five) for a line graph.'],
  cards: [
    ['Independent variable?', 'The one you change.'],
    ['Dependent variable?', 'The one you measure.'],
    ['Control variables?', 'Ones you keep the same to make it a fair test.'],
    ['What is a fair test?', 'Only the independent variable is changed; everything else is kept the same.'],
    ['What makes a good prediction?', 'It says what will happen and gives a scientific reason.'],
    ['Hazard vs risk?', 'Hazard: something that could cause harm. Risk: the chance of harm happening.'],
    ['Categoric variable?', 'One described by words or groups (e.g. type of material).'],
    ['Continuous variable?', 'One measured with numbers that can take any value (e.g. length).'],
    ['★ What do you do with variables you cannot control?', 'Monitor and record them; repeat to average out their effects.']
  ],
  quiz: [
    { q: 'The variable you change is the', o: ['independent variable', 'dependent variable', 'control variable', 'anomaly'], x: 'You choose its values.' },
    { q: 'The variable you measure is the', o: ['dependent variable', 'independent variable', 'control variable', 'hazard'], x: 'It depends on the independent.' },
    { q: 'In a fair test you should', o: ['change only one variable', 'change as many variables as possible', 'measure nothing', 'repeat nothing'], x: 'So you know what caused the result.' },
    { q: '“Type of surface” is a', o: ['categoric variable', 'continuous variable', 'dependent variable', 'control variable'], x: 'Described in words.' },
    { q: 'Which is the best prediction?', o: ['“A heavier block will need more force to pull because the surfaces are pressed together harder.”', '“Something will happen.”', '“Heavier.”', '“The block will move.”'], x: 'What and why.' },
    { q: 'A hazard is', o: ['something that could cause harm', 'a result that does not fit', 'a variable you control', 'a type of graph'], x: 'E.g. boiling water.' },
    { q: 'In an investigation of spring length vs weight added, the dependent variable is', o: ['the length (extension) of the spring', 'the weight added', 'the type of spring', 'the clamp stand'], x: 'What you measure.' },
    { q: 'Outdoors, the wind changes during a speed-of-sound experiment. The best approach is to', o: ['record it and repeat measurements in both directions', 'ignore it completely', 'stop the wind', 'change the distance each time'], x: 'Monitor and average.', ch: 1 }
  ],
  exam: [
    { q: 'A student plans to investigate how the length of a pendulum affects the time for one swing.', tag: 'prac', parts: [
      { q: 'Name the independent and dependent variables.', m: 2, ms: ['independent: length of the pendulum', 'dependent: time for one swing'] },
      { q: 'Give two control variables.', m: 2, ms: ['mass of the bob', 'angle it is released from / same stopwatch / same person timing'] },
      { q: 'Write a prediction with a reason.', m: 2, ms: ['longer pendulum → longer time for a swing', 'reason, e.g. the bob has further to travel'] },
      { q: 'Suggest how many different lengths she should test, and why.', m: 2, ms: ['at least five', 'so a pattern / line graph can be seen'] }
    ] }
  ],
  sims: [], gens: []
});

TOPICS.push({
  id: 'S.2', unit: 'S', title: 'Measuring and recording', short: 'Scales, units, repeats, means, anomalies',
  summary: 'Accurate results come from choosing the right instrument, reading scales carefully, repeating measurements and recording them clearly in a table with units. Calculate a mean without anomalies, and use the range to judge how repeatable results are.',
  spec: [
    'I can read scales on rulers, measuring cylinders, thermometers, newton meters and meters',
    'I can use the correct units and convert between them (mm, cm, m, km; g, kg; s, min)',
    'I can draw a results table with units in the headings',
    'I can calculate a mean, identify anomalies and state the range',
    '★ I can explain accuracy, precision, repeatability and the difference between random and systematic errors'
  ],
  learn: [
    { h: 'Reading scales', html: `
<ol><li>Find the value of one small division: difference between two numbered marks ÷ number of divisions between them.</li><li>Read at <b>eye level</b>, straight on, to avoid <b>parallax error</b>.</li><li>For liquids, read the <b>bottom of the meniscus</b>.</li><li>Check the instrument reads <b>zero</b> before you start.</li></ol>
<p>The <b>resolution</b> of an instrument is its smallest division — a ruler with mm marks has a resolution of 1 mm.</p>` },
    { h: 'Units and tables', html: `
<div class="tbl"><table><tr><th>Quantity</th><th>Unit</th><th>Converting</th></tr><tr><td>length</td><td>m</td><td>1 m = 100 cm = 1000 mm; 1 km = 1000 m</td></tr><tr><td>mass</td><td>kg</td><td>1 kg = 1000 g</td></tr><tr><td>time</td><td>s</td><td>1 min = 60 s; 1 h = 3600 s</td></tr><tr><td>volume</td><td>cm³ or m³</td><td>1 cm³ = 1 ml; 1 litre = 1000 cm³</td></tr></table></div>
<p><b>Results table:</b> independent variable in the <b>first column</b>, then the repeats of the dependent variable, then the <b>mean</b>. Put <b>units in the column headings</b> (e.g. “Length (cm)”) — not next to every number. Use the same number of decimal places throughout.</p>` },
    { h: 'Means, anomalies and range', html: `
<ul><li><b>Mean</b> = sum of the repeats ÷ number of repeats (leaving out anomalies).</li><li><b>Anomaly</b>: a result that does not fit the pattern. Check it; repeat that test if possible.</li><li><b>Range</b>: lowest to highest value. A small range means <b>repeatable</b> results.</li></ul>
<div class="box why"><b class="lbl">★ Accuracy and errors</b><p><b>Accurate</b>: close to the true value. <b>Precise</b>: repeat readings are close together. <b>Random errors</b> (e.g. reaction time) scatter results either side of the true value — reduce them by repeating and averaging. <b>Systematic errors</b> (e.g. a newton meter that reads 0.2 N with nothing on it — a zero error) shift every result the same way — fix the instrument or correct every reading.</p></div>` }
  ],
  eqs: [['"mean" = @frac{"sum of values"}{"number of values"}', 'leave out anomalies']],
  worked: [
    { q: 'A thermometer scale has 5 divisions between 20 °C and 30 °C. What is the reading 3 divisions above 20 °C?', s: ['Each division = (30 − 20) ÷ 5 = 2 °C', 'Reading = 20 + 3 × 2 = 26 °C'], a: '26 °C' },
    { q: 'Times: 2.31 s, 2.28 s, 2.95 s, 2.33 s. Find the mean and range, ignoring any anomaly.', s: ['2.95 s is anomalous.', 'Mean = (2.31 + 2.28 + 2.33) ÷ 3 = 6.92 ÷ 3 = 2.31 s', 'Range: 2.28 s to 2.33 s'], a: 'mean 2.31 s; range 2.28–2.33 s' }
  ],
  pitfalls: ['Writing units next to every number instead of in the heading.', 'Including an anomaly in the mean.', 'Rounding the mean to more decimal places than the readings.', 'Assuming every small division is 1 unit.'],
  cards: [
    ['How do you find the value of one division?', 'Difference between two numbered marks ÷ number of divisions between them.'],
    ['What is parallax error?', 'Error from reading a scale at an angle — read at eye level.'],
    ['Where do units go in a results table?', 'In the column headings.'],
    ['Which column comes first in a results table?', 'The independent variable.'],
    ['1 km = ? m', '1000 m.'],
    ['1 kg = ? g', '1000 g.'],
    ['What is resolution?', 'The smallest change an instrument can measure (one division).'],
    ['★ Accurate vs precise?', 'Accurate: close to the true value. Precise: repeats close together.'],
    ['★ Example of a systematic error?', 'A zero error on a newton meter or balance.']
  ],
  quiz: [
    { q: 'A ruler marked in mm has a resolution of', o: ['1 mm', '1 cm', '1 m', '0.1 mm'], x: 'Smallest division.' },
    { q: 'Units in a results table should be written', o: ['in the column heading', 'after every number', 'at the bottom', 'nowhere'], x: 'Keeps it clear.' },
    { q: '2.5 kg in grams is', o: ['2500 g', '250 g', '25 g', '0.0025 g'], x: '× 1000.' },
    { q: '3 minutes 20 seconds is', o: ['200 s', '320 s', '180 s', '3.2 s'], x: '180 + 20.' },
    { q: 'The mean of 12, 14 and 13 is', o: ['13', '39', '14', '12.5'], x: '39 ÷ 3.' },
    { q: 'Reading a scale at an angle causes', o: ['parallax error', 'zero error', 'no error', 'an anomaly always'], x: 'Read at eye level.' },
    { q: 'A balance reads 0.5 g with nothing on it. This is a', o: ['zero (systematic) error', 'random error', 'anomaly', 'resolution'], x: 'Every reading is 0.5 g too high.', ch: 1 },
    { q: 'Repeat readings that are very close together are', o: ['precise', 'anomalous', 'categoric', 'hazardous'], x: 'Small spread.', ch: 1 }
  ],
  exam: [
    { q: 'A student times a toy car rolling down a ramp three times: 1.85 s, 1.92 s, 1.89 s.', tag: 'data', parts: [
      { q: 'Calculate the mean time.', m: 2, ms: ['(1.85 + 1.92 + 1.89) ÷ 3 = 5.66 ÷ 3', '= 1.89 s'] },
      { q: 'State the range of her results.', m: 1, ms: ['1.85 s to 1.92 s'] },
      { q: 'Explain why she repeated her measurements.', m: 2, ms: ['to identify anomalies', 'to calculate a mean / make results more reliable / reduce the effect of random errors'] },
      { q: 'Draw a suitable table heading row for her results if she tests five ramp heights.', m: 2, ms: ['first column: ramp height (cm)', 'columns for time 1, 2, 3 (s) and mean time (s) — units in the headings'] }
    ] }
  ],
  sims: [], gens: ['mean1', 'mean2', 'conv1', 'conv2']
});

TOPICS.push({
  id: 'S.3', unit: 'S', title: 'Graphs and conclusions', short: 'Bar charts, line graphs, patterns and evaluation',
  summary: 'Use a bar chart when the independent variable is categoric and a line graph when it is continuous. Plot carefully, draw a line of best fit, then describe the pattern, write a conclusion that explains it, and evaluate how good your method was.',
  spec: [
    'I can choose between a bar chart and a line graph',
    'I can draw a line graph with labelled axes, sensible scales, accurate points and a line of best fit',
    'I can describe patterns, including “directly proportional”',
    'I can write a conclusion that uses scientific ideas and evaluate the method',
    '★ I can read values from a graph by interpolation and extrapolation'
  ],
  learn: [
    { h: 'Choosing a graph', html: `
<ul><li><b>Bar chart</b>: independent variable is <b>categoric</b> (e.g. type of surface, material). Bars do not touch.</li><li><b>Line graph</b>: both variables are <b>continuous</b> (numbers), e.g. length and resistance.</li></ul>` },
    { h: 'Drawing a line graph', html: `
[[d:k_graphskills]]
<ol><li>Independent variable on the <b>x-axis</b> (across), dependent on the <b>y-axis</b> (up).</li><li>Label each axis with the quantity and <b>unit</b>, e.g. “Force (N)”.</li><li>Choose <b>scales</b> that go up in equal steps (1, 2, 5, 10…) and use <b>more than half</b> of the grid.</li><li>Plot points with neat <b>crosses</b> (×) in pencil.</li><li>Draw a <b>line of best fit</b>: a straight line or smooth curve that goes through or near most points, with about the same number either side. <b>Ignore anomalies.</b> Do not join dot-to-dot.</li></ol>` },
    { h: 'Patterns, conclusions and evaluations', html: `
<ul><li><b>Describe</b> the pattern: “As the length increases, the resistance increases.”</li><li>If the line is <b>straight and goes through the origin</b>, the variables are <b>directly proportional</b>: double one and the other doubles.</li><li><b>Conclusion</b>: say what you found, use data, and <b>explain</b> it with science: “Resistance increases with length because the electrons collide with more ions.” Say whether your prediction was right.</li><li><b>Evaluate</b>: were there anomalies? Was the range big enough? Were the results repeatable? Suggest <b>specific</b> improvements (e.g. “use light gates instead of a stopwatch to remove reaction time”).</li></ul>
<div class="box why"><b class="lbl">★ Reading between and beyond</b><p><b>Interpolation</b>: reading a value from the graph <b>between</b> your plotted points — fairly reliable. <b>Extrapolation</b>: extending the line <b>beyond</b> your data to predict — less reliable, because the pattern might change (a spring can pass its limit of proportionality).</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Which type of graph should you draw for (a) how the type of ball affects bounce height, (b) how drop height affects bounce height?', s: ['(a) Type of ball is categoric → bar chart.', '(b) Drop height is continuous → line graph.'], a: '(a) bar chart (b) line graph' },
    { q: 'A graph of weight against mass is a straight line through (0, 0) and (2 kg, 20 N). Describe the relationship and read off the weight of 1.5 kg.', s: ['Straight line through the origin → weight is directly proportional to mass.', 'Gradient = 20 ÷ 2 = 10 N per kg.', 'Weight of 1.5 kg = 1.5 × 10 = 15 N (interpolation).'], a: 'directly proportional; 15 N' }
  ],
  pitfalls: ['Joining points dot-to-dot instead of a line of best fit.', 'Missing units on the axes.', 'Uneven scales (e.g. 0, 5, 20, 25…).', 'Saying “proportional” when the line does not go through the origin.'],
  cards: [
    ['When do you draw a bar chart?', 'When the independent variable is categoric (words/groups).'],
    ['When do you draw a line graph?', 'When both variables are continuous (numbers).'],
    ['Which axis does the independent variable go on?', 'The x-axis (horizontal).'],
    ['What is a line of best fit?', 'A straight line or smooth curve through or near most points, ignoring anomalies.'],
    ['What does “directly proportional” look like?', 'A straight line through the origin.'],
    ['What goes in a conclusion?', 'What you found, with data, explained using science.'],
    ['What is an evaluation?', 'Judging the method and results, and suggesting improvements.'],
    ['★ Interpolation?', 'Reading a value between plotted points.'],
    ['★ Extrapolation?', 'Extending the line beyond the data — less reliable.']
  ],
  quiz: [
    { q: '“Type of material” vs “time to cool” should be shown on a', o: ['bar chart', 'line graph', 'pie chart', 'scatter of words'], x: 'Categoric independent variable.' },
    { q: 'The independent variable is plotted on the', o: ['x-axis', 'y-axis', 'title', 'key'], x: 'Across.' },
    { q: 'A line of best fit should', o: ['pass through or near most points, ignoring anomalies', 'join every point', 'go through every anomaly', 'always be a curve'], x: 'Shows the trend.' },
    { q: 'A straight line through the origin shows the variables are', o: ['directly proportional', 'not related', 'inversely related', 'categoric'], x: 'Double one, double the other.' },
    { q: 'Axis labels should include', o: ['the quantity and the unit', 'only the unit', 'only the quantity', 'nothing'], x: 'e.g. Length (cm).' },
    { q: 'Which is a good specific improvement?', o: ['use light gates to remove reaction time', 'be more careful', 'do it better', 'use better equipment'], x: 'Say exactly what and why.' },
    { q: 'Reading a value between your plotted points is called', o: ['interpolation', 'extrapolation', 'evaluation', 'calibration'], x: 'Within the data.', ch: 1 },
    { q: 'Extrapolation is less reliable because', o: ['the pattern may change beyond the data', 'the graph paper ends', 'it uses a ruler', 'it ignores units'], x: 'e.g. a spring’s limit.', ch: 1 }
  ],
  exam: [
    { q: 'A student investigates how the number of turns on an electromagnet affects the number of paper clips it picks up. Results: 10 → 4; 20 → 8; 30 → 12; 40 → 9; 50 → 20.', tag: 'graph', parts: [
      { q: 'Which result is anomalous?', m: 1, ms: ['40 turns → 9 clips'] },
      { q: 'Describe how to draw a line graph of these results.', m: 4, ms: ['turns on the x-axis, clips on the y-axis', 'axes labelled (with units where needed)', 'sensible even scales using most of the grid; points plotted as crosses', 'straight line of best fit ignoring the anomaly'] },
      { q: 'Describe the relationship shown.', m: 2, ms: ['more turns, more clips', 'directly proportional (straight line through the origin) — 0.4 clips per turn'] },
      { q: 'Predict the number of clips for 40 turns from the pattern.', m: 1, ms: ['16'] }
    ] }
  ],
  sims: [], gens: ['grad1']
});
