/* ==========================================================
   SKILLS · Working scientifically (WS 1–4) and Mathematical requirements (MS 1–5)
   ========================================================== */
TOPICS.push({
  id: 'S.1', unit: 'S', ref: 'WS 1–4', title: 'Working scientifically', short: 'Variables, errors, accuracy, precision',
  summary: 'The skills tested on every paper: planning fair tests, identifying variables and hazards, spotting random and systematic errors, and judging accuracy, precision, repeatability and reproducibility.',
  spec: [
    'WS 1.1 Understand how scientific methods and theories develop over time; why new data can change models',
    'WS 1.2 Use models (representational, spatial, descriptive, computational, mathematical) to solve problems and make predictions',
    'WS 1.3–1.6 Power and limitations of science; applications and implications; evaluate risks (perceived vs measured); importance of peer review',
    'WS 2.1–2.2 Develop hypotheses; plan experiments; identify independent, dependent and control variables and explain why controls are kept the same',
    'WS 2.3–2.7 Select apparatus; carry out experiments safely and accurately; identify hazards and reduce risks; sampling; record measurements; evaluate methods and suggest improvements',
    'WS 3.1–3.3 Present data (tables, bar charts, histograms, line graphs); translate between forms; mean, range, significant figures, slope and intercept, tangents and areas',
    'WS 3.4 Uncertainty: use the range of a set of measurements about the mean as a measure of uncertainty',
    'WS 3.5–3.6 Identify patterns and trends, draw conclusions, relate data to hypotheses',
    'WS 3.7 Evaluate data in terms of accuracy, precision, repeatability and reproducibility; identify random and systematic errors; examine anomalous results',
    'WS 3.8 Communicate rationale, methods, findings and reasoned conclusions',
    'WS 4.1–4.6 Scientific vocabulary; SI units and prefixes (tera to nano); interconvert units; appropriate significant figures'
  ],
  learn: [
    { h: 'Variables and fair tests', html: `
<div class="tbl"><table><tr><th>Variable</th><th>Meaning</th><th>Example (springs, RP6)</th></tr>
<tr><td><b>Independent</b></td><td>the one you change or select</td><td>force (weight) added</td></tr>
<tr><td><b>Dependent</b></td><td>the one you measure for each change</td><td>extension of the spring</td></tr>
<tr><td><b>Control</b></td><td>kept the same so the test is fair (valid)</td><td>the same spring; same ruler position</td></tr></table></div>
<p>A <b>hypothesis</b> is a proposed explanation that can be tested, often based on a theory: “The extension of a spring is directly proportional to the force applied, because…”.</p>
<p>A <b>valid</b> investigation actually answers the question it sets out to — only the independent variable affects the dependent variable.</p>` },
    { h: 'Accuracy, precision, repeatability, reproducibility', html: `
<div class="tbl"><table><tr><th>Term</th><th>Meaning</th></tr>
<tr><td><b>Accurate</b></td><td>close to the true value</td></tr>
<tr><td><b>Precise</b></td><td>measurements cluster closely together (little spread)</td></tr>
<tr><td><b>Repeatable</b></td><td>the same investigator, repeating the experiment under the same conditions, gets similar results</td></tr>
<tr><td><b>Reproducible</b></td><td>similar results are obtained by different investigators with different equipment</td></tr>
<tr><td><b>Resolution</b></td><td>the smallest change an instrument can show (e.g. 1 mm on a ruler)</td></tr></table></div>
[[d:accuracy]]` },
    { h: 'Errors and anomalies', html: `
<ul><li><b>Random error</b> — results vary unpredictably (e.g. reaction time with a stopwatch, reading a fluctuating meter). Reduce it by <b>taking more measurements and calculating a mean</b>.</li>
<li><b>Systematic error</b> — results differ from the true value by a <b>consistent amount</b> each time (e.g. a <b>zero error</b> on a balance that reads 0.2 g with nothing on it; reading a scale from the same wrong angle). Repeating does not remove it; recalibrate or correct the readings. On a graph it often shows as a line that doesn’t pass through the origin.</li>
<li><b>Anomalous result</b> — one that doesn’t fit the pattern. Check it (repeat the reading); if it came from a poor measurement, ignore it when calculating the mean or drawing the line of best fit.</li></ul>
<div class="box def"><b class="lbl">Uncertainty</b><p>Every measurement has some uncertainty. Use the <b>range</b> of repeat readings about the mean: uncertainty ≈ ± half the range. Readings 4.2, 4.6, 4.4 s → mean 4.4 s, range 0.4 s → 4.4 ± 0.2 s.</p></div>` },
    { h: 'Presenting data and drawing conclusions', html: `
<ul><li><b>Tables:</b> independent variable in the first column; units in the headings, not with each number; consistent decimal places.</li><li><b>Bar charts</b> for categoric data (e.g. type of insulating material); <b>line graphs</b> when both variables are continuous (numbers).</li><li>Plot the independent variable on the x-axis; use more than half the grid; draw a <b>line or smooth curve of best fit</b> — don’t join the dots.</li><li><b>Conclusion:</b> describe the pattern (“as F increases, e increases”); say if it is proportional (straight line through origin); relate it to the hypothesis and explain using science; use data.</li></ul>` },
    { h: 'Risk, ethics and peer review', html: `
<p><b>Hazard</b> = something that could cause harm (hot water, a falling mass, a radioactive source). <b>Risk</b> = the chance of harm. Reduce risk with sensible precautions: heatproof mats, eye protection, clamping stands, low pds, tongs for sources.</p>
<p><b>Perceived risk</b> often differs from the measured risk: people fear risks that are imposed rather than voluntary, unfamiliar rather than familiar, or invisible (like radiation) more than visible ones.</p>
<p><b>Peer review</b> — other scientists check work before it is published, which helps detect false claims and build a consensus. Reports in the popular media are <b>not</b> peer reviewed and may be oversimplified, inaccurate or biased.</p>
<p>Scientific <b>models change</b> when new evidence appears — for example the plum pudding model was replaced after the alpha scattering experiment.</p>` }
  ],
  eqs: [['"mean" = @frac{"sum of values"}{"number of values"}', 'ignore anomalies'], ['"uncertainty" ≈ ± @frac{"range"}{2}', 'range of repeat readings']],
  worked: [
    { q: 'A student times a trolley five times: 2.31 s, 2.28 s, 2.95 s, 2.33 s, 2.30 s. Find the mean and the uncertainty.', s: ['2.95 s is anomalous — ignore it.', 'Mean = (2.31 + 2.28 + 2.33 + 2.30) ÷ 4 = 2.305 ≈ 2.31 s', 'Range = 2.33 − 2.28 = 0.05 s, so uncertainty ≈ ± 0.03 s'], a: '2.31 ± 0.03 s' },
    { q: 'A balance reads 0.5 g before anything is placed on it. What type of error is this, and how should the student deal with it?', s: ['It is a systematic (zero) error — every reading is 0.5 g too high.', 'Zero (tare) the balance before use, or subtract 0.5 g from every reading.'], a: 'Systematic zero error — tare the balance or correct each reading.' }
  ],
  pitfalls: ['Confusing accuracy with precision.', 'Saying repeating readings removes systematic errors.', 'Joining points dot-to-dot instead of a line of best fit.', 'Putting units in every cell of a table.', 'Giving answers to more significant figures than the data justify.'],
  cards: [
    ['Independent variable?', 'The one you change or select.'],
    ['Dependent variable?', 'The one you measure.'],
    ['Control variable?', 'One kept the same so the test is fair.'],
    ['Accurate?', 'Close to the true value.'],
    ['Precise?', 'Measurements cluster closely together.'],
    ['Repeatable?', 'Same person, same method, similar results.'],
    ['Reproducible?', 'Different people/equipment, similar results.'],
    ['Random error — how to reduce?', 'Take more readings and calculate a mean.'],
    ['Systematic error?', 'Readings differ from the true value by a consistent amount (e.g. zero error).'],
    ['How to estimate uncertainty?', 'Half the range of repeat readings about the mean.'],
    ['What is an anomalous result?', 'One that doesn’t fit the pattern — check it and, if a poor measurement, ignore it.'],
    ['What is peer review?', 'Checking of scientific work by other scientists before publication.'],
    ['Bar chart or line graph for “type of material”?', 'Bar chart (categoric data).'],
    ['What is resolution?', 'The smallest change an instrument can detect.']
  ],
  quiz: [
    { q: 'Measurements that cluster closely together are', o: ['precise', 'accurate', 'reproducible', 'valid'], x: 'Precision = little spread.' },
    { q: 'A measurement close to the true value is', o: ['accurate', 'precise', 'repeatable', 'anomalous'], x: 'Accuracy.' },
    { q: 'Taking more readings and calculating a mean reduces', o: ['random errors', 'systematic errors', 'zero errors', 'calibration errors'], x: 'Random errors average out.' },
    { q: 'A thermometer always reads 2 °C too high. This is', o: ['a systematic error', 'a random error', 'an anomaly', 'a resolution problem'], x: 'Consistent offset.' },
    { q: 'Results are reproducible if', o: ['different investigators with different equipment get similar results', 'the same person gets the same results', 'they are accurate', 'the graph is a straight line'], x: 'Definition.' },
    { q: 'In an investigation of how length affects the resistance of a wire, the dependent variable is', o: ['resistance', 'length', 'temperature', 'wire material'], x: 'What is measured.' },
    { q: 'Readings of 5.2, 5.6 and 5.4 cm have a mean and uncertainty of', o: ['5.4 ± 0.2 cm', '5.4 ± 0.4 cm', '16.2 ± 0.2 cm', '5.6 ± 0.1 cm'], x: 'Range 0.4 → ± 0.2.' },
    { q: 'Which is the best way to display the results of testing four different insulating materials?', o: ['bar chart', 'line graph', 'scatter graph with line of best fit', 'pie chart'], x: 'Categoric independent variable.' },
    { q: 'Peer review helps to', o: ['detect false claims before publication', 'guarantee a result is true', 'replace experiments', 'make results more precise'], x: 'Other experts check the work.' },
    { q: 'The resolution of a ruler marked in millimetres is', o: ['1 mm', '1 cm', '0.1 mm', '1 m'], x: 'Smallest division.' },
    { q: 'A result that does not fit the pattern of the others is called', o: ['anomalous', 'precise', 'systematic', 'reproducible'], x: 'Check and repeat it.' },
    { q: 'Why are control variables kept the same?', o: ['so only the independent variable affects the dependent variable', 'to make results precise', 'to save time', 'to reduce random error only'], x: 'Fair (valid) test.' }
  ],
  exam: [
    { q: 'A student measures the time for a ball to roll down a ramp five times. Explain the difference between random and systematic errors, using this experiment as an example.', m: 4, ms: ['Random error: results vary unpredictably, e.g. reaction time starting/stopping the stopwatch.', 'Reduced by repeating and calculating a mean.', 'Systematic error: results differ from the true value by the same amount, e.g. always starting the watch late / a zero error.', 'Not reduced by repeating; must change method/instrument (e.g. use light gates).'] },
    { q: 'Explain why it is important for scientific results to be reproducible.', m: 2, ms: ['Other scientists with different equipment get similar results.', 'This increases confidence that the results are valid / not due to error in one experiment.'] }
  ],
  sims: [], gens: ['mean1', 'unc1']
});

TOPICS.push({
  id: 'S.2', unit: 'S', ref: 'MS 1–5', title: 'Maths skills, units and equations', short: 'Standard form, rearranging, graphs, prefixes',
  summary: 'The mathematical toolkit examined in at least 30% of the marks: standard form, significant figures, prefixes, rearranging and substituting, proportionality symbols, and extracting gradients, tangents and areas from graphs.',
  spec: [
    'MS 1a–d Decimal and standard form; ratios, fractions and percentages; estimates of calculations',
    'MS 2a–h Significant figures; arithmetic mean; frequency tables, bar charts and histograms; mean, mode and median; scatter diagrams and correlation; order of magnitude calculations',
    'MS 3a Understand and use the symbols =, <, <<, >>, >, ∝, ~',
    'MS 3b–d Change the subject of an equation; substitute values using appropriate units; solve simple equations',
    'MS 4a–f Translate between graphs and numbers; y = mx + c; plot two variables; slope and intercept; tangent to a curve as rate of change; area under a curve by counting squares',
    'MS 5a–c Angles in degrees; 2D representations of 3D forms; areas of triangles and rectangles, surface areas and volumes of cubes',
    'WS 4.3–4.6 SI units; prefixes tera, giga, mega, kilo, centi, milli, micro, nano; interconvert units; appropriate significant figures',
    'Recall and apply the 23 listed equations; select and apply equations from the Physics equation sheet'
  ],
  learn: [
    { h: 'Prefixes and standard form', html: `
<div class="tbl"><table><tr><th>Prefix</th><th>Symbol</th><th>Multiply by</th><th>Prefix</th><th>Symbol</th><th>Multiply by</th></tr>
<tr><td>tera</td><td>T</td><td>10<sup>12</sup></td><td>centi</td><td>c</td><td>10<sup>−2</sup></td></tr>
<tr><td>giga</td><td>G</td><td>10<sup>9</sup></td><td>milli</td><td>m</td><td>10<sup>−3</sup></td></tr>
<tr><td>mega</td><td>M</td><td>10<sup>6</sup></td><td>micro</td><td>μ</td><td>10<sup>−6</sup></td></tr>
<tr><td>kilo</td><td>k</td><td>10<sup>3</sup></td><td>nano</td><td>n</td><td>10<sup>−9</sup></td></tr></table></div>
<p><b>Standard form:</b> a number between 1 and 10 multiplied by a power of ten. 0.000 34 = 3.4 × 10<sup>−4</sup>; 5 600 000 = 5.6 × 10<sup>6</sup>. On a calculator use the ×10<sup>x</sup> (or EXP) key.</p>
<p><b>Order of magnitude</b> = the nearest power of ten. The radius of an atom is of order 10<sup>−10</sup> m.</p>` },
    { h: 'Rearranging and substituting', html: `
<ol><li>Write the equation.</li><li>Convert every quantity to SI units (kg, m, s, A…).</li><li>Substitute the numbers.</li><li>Rearrange (before or after substituting) and calculate.</li><li>Give the answer with a unit and a sensible number of significant figures (usually the same as the data, often 2 or 3).</li></ol>
<p>Rearranging tips: to “undo” × divide both sides; to undo a square take a square root. From $E_k = @frac{1}{2}mv^2$: $v = @sqrt{@frac{2E_k}{m}}$.</p>
<div class="box tip"><b class="lbl">Symbols</b><p>∝ means “directly proportional to”; ~ means “approximately”; ≪ means “much less than”; ≫ means “much greater than”.</p></div>` },
    { h: 'Graphs: gradients, intercepts, tangents and areas', html: `
<p>A straight-line graph has the form $y = mx + c$: m is the <b>gradient</b> (slope) and c is the <b>y-intercept</b>. If the line passes through the origin, y is <b>directly proportional</b> to x.</p>
<p><b>Gradient</b> = change in y ÷ change in x. Use a large triangle (at least half the line). Include units: the gradient of a distance–time graph is in m/s.</p>
<p><b>Tangent:</b> for a curve, draw a straight line that just touches the curve at the point of interest; its gradient gives the rate of change at that point.</p>
<p><b>Area under a curve:</b> split into rectangles and triangles, or count squares (count part-squares of more than half as whole squares) and multiply by the value of one square. The area under a velocity–time graph is the distance travelled.</p>
[[d:gradient]]` },
    { h: 'Equations to recall vs equations given', html: `
<p>AQA lists <b>23 equations you must recall</b> and <b>12 given on the Physics equation sheet</b> in the exam. The full lists, with Higher-tier-only equations marked, are on the <a href="#/equations">Equations</a> page — and you can drill them in the <a href="#/game/rush">Equation Rush</a> game.</p>` }
  ],
  eqs: [['y = mx + c', 'straight-line graph'], ['"gradient" = @frac{"change in y"}{"change in x"}', ''], ['"area of triangle" = @frac{1}{2} × "base" × "height"', '']],
  worked: [
    { q: 'Write 0.000 045 m in standard form and in micrometres.', s: ['Standard form: 4.5 × 10<sup>−5</sup> m', 'micro = 10<sup>−6</sup>, so divide by 10<sup>−6</sup>: 45 μm'], a: '4.5 × 10⁻⁵ m = 45 μm' },
    { q: 'Rearrange $P = I^2R$ to make I the subject, then find I when P = 36 W and R = 4.0 Ω.', s: ['$I^2 = @frac{P}{R}$', '$I = @sqrt{@frac{P}{R}} = @sqrt{@frac{36}{4.0}} = @sqrt{9.0}$', 'I = 3.0 A'], a: '3.0 A' }
  ],
  pitfalls: ['Using a small triangle for a gradient.', 'Not converting prefixes (e.g. kJ, mA, cm) before substituting.', 'Rounding in the middle of a calculation.', 'Forgetting units on gradients.', 'Giving 8 significant figures copied from a calculator.'],
  cards: [
    ['Value of mega (M)?', '10⁶'],
    ['Value of micro (μ)?', '10⁻⁶'],
    ['Value of nano (n)?', '10⁻⁹'],
    ['Value of giga (G)?', '10⁹'],
    ['What does ∝ mean?', 'Directly proportional to.'],
    ['What does ~ mean?', 'Approximately.'],
    ['What does y = mx + c represent?', 'A linear relationship; m = gradient, c = y-intercept.'],
    ['How do you show direct proportion on a graph?', 'A straight line through the origin.'],
    ['How do you find a rate of change on a curve?', 'Gradient of a tangent at that point.'],
    ['Write 3 500 000 in standard form.', '3.5 × 10⁶'],
    ['How many equations must you recall for AQA GCSE Physics?', '23 (the other 12 are on the equation sheet).']
  ],
  quiz: [
    { q: '4.7 kΩ is equal to', o: ['4700 Ω', '0.0047 Ω', '470 Ω', '4 700 000 Ω'], x: 'kilo = 10³.' },
    { q: '0.0062 written in standard form is', o: ['6.2 × 10⁻³', '6.2 × 10³', '62 × 10⁻⁴', '0.62 × 10⁻²'], x: 'Mantissa between 1 and 10.' },
    { q: '250 mA in amperes is', o: ['0.25 A', '250 000 A', '2.5 A', '0.025 A'], x: 'milli = 10⁻³.' },
    { q: 'Rearranging v = fλ for f gives', o: ['f = v/λ', 'f = vλ', 'f = λ/v', 'f = v − λ'], x: 'Divide both sides by λ.' },
    { q: 'The symbol ∝ means', o: ['is directly proportional to', 'is approximately equal to', 'is much greater than', 'is less than'], x: 'MS 3a.' },
    { q: 'On a graph of y against x, a straight line through the origin shows that', o: ['y is directly proportional to x', 'y is inversely proportional to x', 'y does not depend on x', 'there is a systematic error'], x: 'y = mx.' },
    { q: 'The gradient of a straight line from (0, 2) to (4, 10) is', o: ['2', '0.5', '8', '12'], x: '(10 − 2)/(4 − 0).' },
    { q: '3.456 rounded to 2 significant figures is', o: ['3.5', '3.4', '3.46', '35'], x: 'Round the second figure.' },
    { q: 'The rate of change at a point on a curved graph is found from', o: ['the gradient of the tangent at that point', 'the area under the curve', 'the y-intercept', 'the highest point'], x: 'MS 4e.' },
    { q: 'Rearranging Eₖ = ½mv² for v gives', o: ['v = √(2Eₖ/m)', 'v = 2Eₖ/m', 'v = √(Eₖ/2m)', 'v = Eₖ/(½m)'], x: 'Multiply by 2, divide by m, square root.' },
    { q: 'Which prefix means 10⁹?', o: ['giga', 'mega', 'tera', 'nano'], x: 'G.' },
    { q: 'The radius of an atom is of the order of', o: ['10⁻¹⁰ m', '10⁻⁶ m', '10⁻¹⁴ m', '10⁻³ m'], x: 'About 1 × 10⁻¹⁰ m.' }
  ],
  exam: [
    { q: 'A student plots a graph of distance against time. Describe how to find the speed at 4.0 s if the graph is curved.', m: 3, ms: ['Draw a tangent to the curve at t = 4.0 s.', 'Draw a large triangle on the tangent and measure Δy and Δx.', 'Speed = gradient = Δy ÷ Δx.'] },
    { q: 'Convert 2.5 × 10⁶ mW into kW.', m: 2, ms: ['2.5 × 10⁶ mW = 2.5 × 10³ W', '= 2.5 kW'] }
  ],
  sims: [], gens: ['sf1', 'prefix1', 'rearr1']
});
