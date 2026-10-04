/* ==========================================================
   UNIT 1 · What is validity?
   Strand 1: communicating data · Strand 2: validity
   ========================================================== */
TOPICS.push({
  id: '1.1', unit: '1', strand: 1, as: [2], ref: 'Strand 1 · AS 2', title: 'SI units and global conventions', short: 'Base units, derived units, prefixes',
  summary: 'Why the world agreed on one system of units, the seven SI base units, how derived units are built from them, and how to convert confidently between unit prefixes.',
  spec: [
    'State the seven SI base quantities and their units (kg, m, s, A, K, mol, cd)',
    'Express derived units in terms of base units (e.g. N = kg m s⁻², J = kg m² s⁻²)',
    'Use the prefixes tera (T) to nano (n) and convert between them',
    'Convert non-SI units (km/h, minutes, g, cm³, kWh) into SI units before substituting into equations',
    'Explain, with examples, why international agreement on units supports global collaboration'
  ],
  learn: [
    { h: 'Why agree on units?', html: `
<p>Science is a global conversation. A measurement is only useful if everyone reads it the same way. In 1999 NASA lost the <b>Mars Climate Orbiter</b> ($125 million) because one engineering team worked in pound-force seconds and another in newton seconds. In 1983 an Air Canada jet ran out of fuel mid-flight after a mix-up between pounds and kilograms.</p>
<p>The <b>Système international d’unités (SI)</b> is the agreement, maintained by the International Bureau of Weights and Measures (BIPM) in France, that lets a laboratory in Nairobi check a result from Tokyo. Since 2019 every SI unit is defined from fixed constants of nature (such as the speed of light and Planck’s constant), so anyone, anywhere, can reproduce them.</p>
<div class="box why"><b class="lbl">Global context</b><p>Globalisation and sustainability: a shared framework of knowledge is the basis for global advancement. Shared units make trade, medicine, engineering and climate data comparable worldwide.</p></div>` },
    { h: 'The seven base units', html: `
<div class="tbl"><table><tr><th>Base quantity</th><th>Symbol</th><th>SI unit</th><th>Unit symbol</th></tr>
<tr><td>mass</td><td><i>m</i></td><td>kilogram</td><td>kg</td></tr>
<tr><td>length</td><td><i>l</i>, <i>x</i>, <i>s</i></td><td>metre</td><td>m</td></tr>
<tr><td>time</td><td><i>t</i></td><td>second</td><td>s</td></tr>
<tr><td>electric current</td><td><i>I</i></td><td>ampere</td><td>A</td></tr>
<tr><td>temperature</td><td><i>T</i></td><td>kelvin</td><td>K</td></tr>
<tr><td>amount of substance</td><td><i>n</i></td><td>mole</td><td>mol</td></tr>
<tr><td>luminous intensity</td><td><i>I</i>ᵥ</td><td>candela</td><td>cd</td></tr></table></div>
<p>Note that the base unit of mass is the <b>kilogram</b>, not the gram. Every other unit in physics is <b>derived</b> from these seven.</p>` },
    { h: 'Derived units', html: `
<p>A derived unit is built by combining base units through the defining equation of the quantity.</p>
<div class="tbl"><table><tr><th>Quantity</th><th>Defining equation</th><th>Named unit</th><th>In base units</th></tr>
<tr><td>speed / velocity</td><td>v = s ÷ t</td><td>—</td><td>m s⁻¹</td></tr>
<tr><td>acceleration</td><td>a = Δv ÷ t</td><td>—</td><td>m s⁻²</td></tr>
<tr><td>force</td><td>F = ma</td><td>newton (N)</td><td>kg m s⁻²</td></tr>
<tr><td>energy / work</td><td>W = Fs</td><td>joule (J)</td><td>kg m² s⁻²</td></tr>
<tr><td>power</td><td>P = E ÷ t</td><td>watt (W)</td><td>kg m² s⁻³</td></tr>
<tr><td>charge</td><td>Q = It</td><td>coulomb (C)</td><td>A s</td></tr>
<tr><td>momentum</td><td>p = mv</td><td>—</td><td>kg m s⁻¹ (= N s)</td></tr></table></div>
<p>Writing m s⁻¹ means the same as m/s. Checking that both sides of an equation have the same base units (<b>homogeneity</b>) is a quick way to catch mistakes.</p>` },
    { h: 'Prefixes and conversions', html: `
<div class="tbl"><table><tr><th>Prefix</th><th>Symbol</th><th>× 10ⁿ</th><th>Prefix</th><th>Symbol</th><th>× 10ⁿ</th></tr>
<tr><td>tera</td><td>T</td><td>10¹²</td><td>centi</td><td>c</td><td>10⁻²</td></tr>
<tr><td>giga</td><td>G</td><td>10⁹</td><td>milli</td><td>m</td><td>10⁻³</td></tr>
<tr><td>mega</td><td>M</td><td>10⁶</td><td>micro</td><td>μ</td><td>10⁻⁶</td></tr>
<tr><td>kilo</td><td>k</td><td>10³</td><td>nano</td><td>n</td><td>10⁻⁹</td></tr></table></div>
<p><b>Method:</b> replace the prefix by its power of ten. 450 nm = 450 × 10⁻⁹ m = 4.5 × 10⁻⁷ m. 2.2 MW = 2.2 × 10⁶ W.</p>
<div class="box tip"><b class="lbl">Squared and cubed units</b><p>The prefix is squared or cubed too: 1 cm² = (10⁻² m)² = 10⁻⁴ m²; 1 cm³ = 10⁻⁶ m³; 1 mm² = 10⁻⁶ m². So 250 cm³ = 2.5 × 10⁻⁴ m³.</p></div>
<p><b>Common non-SI units:</b> km/h ÷ 3.6 = m/s; 1 minute = 60 s; 1 hour = 3600 s; 1 tonne = 1000 kg; 1 kWh = 3.6 × 10⁶ J; 0 °C = 273 K.</p>` }
  ],
  eqs: [['1 "km/h" = @frac{1}{3.6} "m/s"', 'speed conversion'], ['1 "cm"^3 = 10^{-6} "m"^3', 'volume conversion'], ['1 "kWh" = 3.6 × 10^6 "J"', 'energy conversion']],
  worked: [
    { q: 'Express the joule in SI base units.', s: ['$W = Fs$ and $F = ma$', 'Units of F: kg × m s⁻² = kg m s⁻²', 'Units of W: kg m s⁻² × m = kg m² s⁻²'], a: '1 J = 1 kg m² s⁻²' },
    { q: 'A car travels at 90 km/h. Convert this to m/s.', s: ['90 km = 90 000 m; 1 h = 3600 s', '$v = @frac{90 000}{3600}$', '$v = 25 "m/s"$'], a: '25 m/s' },
    { q: 'A drop of water has a volume of 0.050 cm³. Express this in m³ in standard form.', s: ['1 cm³ = 10⁻⁶ m³', '0.050 × 10⁻⁶ m³', '= 5.0 × 10⁻⁸ m³'], a: '5.0 × 10⁻⁸ m³' }
  ],
  pitfalls: ['Using grams instead of kilograms in equations — the SI base unit of mass is the kilogram.', 'Forgetting to square or cube the prefix: 1 cm² is 10⁻⁴ m², not 10⁻² m².', 'Writing units with the wrong case: mW (milliwatt) and MW (megawatt) differ by 10⁹.', 'Substituting minutes or km/h straight into equations.'],
  cards: [
    ['The seven SI base units?', 'kg, m, s, A, K, mol, cd'],
    ['SI base unit of mass?', 'kilogram (kg)'],
    ['Newton in base units?', 'kg m s⁻²'],
    ['Joule in base units?', 'kg m² s⁻²'],
    ['Watt in base units?', 'kg m² s⁻³'],
    ['Coulomb in base units?', 'A s'],
    ['Value of μ (micro)?', '10⁻⁶'],
    ['Value of n (nano)?', '10⁻⁹'],
    ['Value of G (giga)?', '10⁹'],
    ['1 cm³ in m³?', '10⁻⁶ m³'],
    ['km/h to m/s?', 'Divide by 3.6'],
    ['Why was the Mars Climate Orbiter lost?', 'One team used imperial units (pound-force seconds), another used SI (newton seconds).']
  ],
  quiz: [
    { q: 'Which of these is an SI base unit?', o: ['ampere', 'newton', 'joule', 'volt'], x: 'The others are derived units.' },
    { q: 'The SI base unit of mass is the', o: ['kilogram', 'gram', 'newton', 'tonne'], x: 'Kilogram — the only base unit with a prefix.' },
    { q: 'The newton expressed in base units is', o: ['kg m s⁻²', 'kg m s⁻¹', 'kg m² s⁻²', 'kg s⁻²'], x: 'F = ma.' },
    { q: '3.2 GW in watts is', o: ['3.2 × 10⁹ W', '3.2 × 10⁶ W', '3.2 × 10¹² W', '3.2 × 10³ W'], x: 'giga = 10⁹.' },
    { q: '650 nm in metres is', o: ['6.5 × 10⁻⁷ m', '6.5 × 10⁻⁹ m', '6.5 × 10⁻⁶ m', '6.5 × 10⁻¹¹ m'], x: '650 × 10⁻⁹.' },
    { q: '1 cm² is equal to', o: ['10⁻⁴ m²', '10⁻² m²', '10⁻⁶ m²', '10² m²'], x: '(10⁻² m)².' },
    { q: '54 km/h in m/s is', o: ['15 m/s', '194 m/s', '54 m/s', '5.4 m/s'], x: '54 ÷ 3.6.' },
    { q: 'The unit kg m² s⁻² is the', o: ['joule', 'watt', 'newton', 'pascal'], x: 'Work = force × distance.' },
    { q: 'Which body maintains the SI system?', o: ['the International Bureau of Weights and Measures (BIPM)', 'the IB Organization', 'NASA', 'the United Nations'], x: 'BIPM in Sèvres, France.' },
    { q: 'Which statement best explains why scientists use SI units?', o: ['Results can be shared, compared and checked worldwide without conversion errors', 'SI units give more accurate measurements', 'SI units are easier to remember', 'Imperial units are illegal'], x: 'Communication and collaboration.' }
  ],
  exam: [
    { q: 'Show that the unit of power, the watt, is equivalent to kg m² s⁻³.', m: 3, cr: 'A', ms: ['P = E ÷ t (or W ÷ t).', 'J = N m = kg m s⁻² × m = kg m² s⁻².', 'W = J s⁻¹ = kg m² s⁻³.'] },
    { q: 'A medicine dose is written as “5 mg per kg of body mass”. A patient has a mass of 64 kg. Calculate the dose in kg and explain why the unit prefix matters.', m: 3, cr: 'A', ms: ['5 mg × 64 = 320 mg.', '= 3.2 × 10⁻⁴ kg.', 'Confusing m (milli) with μ (micro) or M (mega) changes the dose by 1000× or more — potentially fatal.'] },
    { q: 'Discuss the benefits and limitations of all countries using the SI system of units.', m: 6, cr: 'D', ms: ['Benefit: data from different countries can be compared/combined directly.', 'Benefit: avoids costly or dangerous conversion errors (example, e.g. Mars Climate Orbiter).', 'Benefit: global trade/engineering/medicine use the same standards.', 'Limitation: cost of changing signs, tools, education, legacy equipment.', 'Limitation: cultural attachment to traditional units; some industries use their own (aviation feet, nautical miles).', 'A balanced concluding judgement supported by the points made.'] }
  ],
  sims: [], gens: ['prefix1', 'unitconv']
});

TOPICS.push({
  id: '1.2', unit: '1', strand: 1, as: [1], ref: 'Strand 1 · AS 1', title: 'Standard form and significant figures', short: 'Writing numbers clearly and honestly',
  summary: 'Scientific communication is precise. Write very large and very small numbers in standard form, round answers to a justified number of significant figures, and estimate orders of magnitude.',
  spec: [
    'Write numbers in standard form, a × 10ⁿ with 1 ≤ a < 10',
    'Count the significant figures in a number, including zeros',
    'Round a calculated answer to the number of significant figures justified by the data (the least precise value)',
    'Use a calculator’s ×10ˣ / EXP key correctly',
    'Estimate the order of magnitude of a quantity'
  ],
  learn: [
    { h: 'Standard form', html: `
<p>A number in <b>standard form</b> is written as $a × 10^n$ where $1 ≤ a < 10$ and n is a whole number.</p>
<div class="tbl"><table><tr><th>Ordinary number</th><th>Standard form</th></tr><tr><td>5 600 000 W</td><td>5.6 × 10⁶ W</td></tr><tr><td>0.000 34 m</td><td>3.4 × 10⁻⁴ m</td></tr><tr><td>299 792 458 m/s</td><td>3.00 × 10⁸ m/s (3 s.f.)</td></tr><tr><td>0.000 000 000 16 C</td><td>1.6 × 10⁻¹⁹ C</td></tr></table></div>
<p>Moving the decimal point one place to the <b>left</b> increases the power by one. On a calculator, type 3.4 then the <b>×10ˣ</b> (or EXP) key then −4. Do not type “× 10” as well.</p>
<p>Standard form also shows the <b>number of significant figures</b> unambiguously: 2000 m could be 1, 2, 3 or 4 s.f., but 2.0 × 10³ m is clearly 2 s.f.</p>` },
    { h: 'Significant figures', html: `
<p>Significant figures are the digits that carry meaning about the precision of a value.</p>
<ul><li>Non-zero digits are always significant: 3.47 has 3 s.f.</li><li>Zeros <b>between</b> digits are significant: 4.05 has 3 s.f.</li><li><b>Leading</b> zeros are not: 0.0062 has 2 s.f.</li><li><b>Trailing</b> zeros after a decimal point are significant: 2.50 has 3 s.f. — the 0 says “measured to the nearest 0.01”.</li></ul>
<div class="box def"><b class="lbl">The rule for calculations</b><p>Give a calculated answer to the <b>same number of significant figures as the least precise piece of data</b> used. 12.4 m ÷ 3.1 s = 4.0 m/s (2 s.f., because 3.1 has 2 s.f.).</p></div>
<p>Keep all the calculator digits during working and round only the final answer — rounding early creates errors.</p>` },
    { h: 'Order of magnitude', html: `
<p>The <b>order of magnitude</b> is the power of ten nearest to a value. It lets us compare sizes quickly and check that answers are sensible.</p>
<div class="tbl"><table><tr><th>Quantity</th><th>Order of magnitude</th></tr><tr><td>radius of an atom</td><td>10⁻¹⁰ m</td></tr><tr><td>radius of a nucleus</td><td>10⁻¹⁵ m</td></tr><tr><td>height of a person</td><td>10⁰ m</td></tr><tr><td>radius of the Earth</td><td>10⁷ m</td></tr><tr><td>age of the Universe</td><td>10¹⁷ s</td></tr></table></div>
<p>An atom is about 10⁵ (one hundred thousand) times bigger than its nucleus.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Write 0.000 045 0 m in standard form and state its number of significant figures.', s: ['Move the decimal point 5 places right: 4.50', '4.50 × 10⁻⁵ m', 'Leading zeros are not significant; the trailing zero is: 3 s.f.'], a: '4.50 × 10⁻⁵ m, 3 s.f.' },
    { q: 'A trolley travels 1.25 m in 0.83 s. Calculate its average speed to an appropriate number of significant figures.', s: ['$v = @frac{1.25}{0.83} = 1.506…$', 'Least precise data: 0.83 s (2 s.f.)', '$v = 1.5 "m/s"$'], a: '1.5 m/s' },
    { q: 'Estimate the order of magnitude of the number of seconds in a human lifetime of 80 years.', s: ['80 × 365 × 24 × 3600', '≈ 2.5 × 10⁹ s', 'Order of magnitude 10⁹ s'], a: '≈ 10⁹ s' }
  ],
  pitfalls: ['Writing 45 × 10⁻⁶ — the number in front must be between 1 and 10.', 'Counting leading zeros as significant.', 'Rounding in the middle of a calculation.', 'Typing “× 10 EXP” on a calculator, which multiplies by ten twice.', 'Quoting 8 s.f. straight from the calculator — it claims precision the data do not have.'],
  cards: [
    ['Standard form?', 'a × 10ⁿ with 1 ≤ a < 10'],
    ['0.0062 in standard form?', '6.2 × 10⁻³'],
    ['How many s.f. in 0.00450?', '3'],
    ['How many s.f. in 4.05?', '3'],
    ['Are leading zeros significant?', 'No.'],
    ['Are trailing zeros after a decimal point significant?', 'Yes — they show precision.'],
    ['Rule for s.f. in a calculated answer?', 'Same as the least precise data value.'],
    ['When should you round?', 'Only the final answer.'],
    ['Order of magnitude of an atom’s radius?', '10⁻¹⁰ m'],
    ['Why use standard form?', 'Compact for very large/small numbers and shows the number of s.f. clearly.']
  ],
  quiz: [
    { q: '0.000 72 written in standard form is', o: ['7.2 × 10⁻⁴', '7.2 × 10⁻³', '72 × 10⁻⁵', '7.2 × 10⁴'], x: 'Move the point 4 places.' },
    { q: 'How many significant figures are in 0.0305?', o: ['3', '4', '5', '2'], x: '3, 0, 5 — leading zeros do not count.' },
    { q: '6 482 rounded to 2 s.f. is', o: ['6 500', '6 400', '65', '6 480'], x: '6.5 × 10³.' },
    { q: 'A student calculates 4.2 × 1.37. The answer should be given to', o: ['2 s.f.', '3 s.f.', '4 s.f.', '1 s.f.'], x: '4.2 has 2 s.f.' },
    { q: 'Which number is written to 3 s.f.?', o: ['2.50 × 10³', '2.5 × 10³', '2500.0', '0.25'], x: 'The trailing zero after the point counts.' },
    { q: '3.0 × 10⁸ ÷ 1.5 × 10⁻³ equals', o: ['2.0 × 10¹¹', '2.0 × 10⁵', '4.5 × 10⁵', '2.0 × 10⁻¹¹'], x: '10⁸ ÷ 10⁻³ = 10¹¹.' },
    { q: 'The order of magnitude of the radius of a nucleus is', o: ['10⁻¹⁵ m', '10⁻¹⁰ m', '10⁻⁵ m', '10⁻²⁰ m'], x: '≈ 1 fm.' },
    { q: 'Why is 2.0 × 10³ m clearer than “2000 m”?', o: ['it shows the value has 2 significant figures', 'it is more accurate', 'it is a different number', 'it is in SI units'], x: '2000 is ambiguous.' }
  ],
  exam: [
    { q: 'A student measures a pendulum swing time of 1.42 s and the length as 0.80 m. She calculates g = 15.6638… m s⁻². State how many significant figures she should quote and justify your answer.', m: 2, cr: 'C', ms: ['2 s.f. (16 m s⁻²).', 'The length is only given to 2 s.f. — the answer cannot be more precise than the least precise data.'] },
    { q: 'The diameter of a human hair is 0.000 080 m and of a red blood cell 0.000 0075 m. Write both in standard form and find how many times wider the hair is.', m: 3, cr: 'A', ms: ['8.0 × 10⁻⁵ m', '7.5 × 10⁻⁶ m', '≈ 11 times'] }
  ],
  sims: [], gens: ['sf1', 'stdform', 'sfround']
});

TOPICS.push({
  id: '1.3', unit: '1', strand: 2, as: [3, 5], ref: 'Strand 2 · AS 3, 5', title: 'Measurement, precision and uncertainty', short: 'Instrumental and experimental uncertainty',
  summary: 'Every measurement has an uncertainty. Read instruments to their resolution, quote values as “value ± uncertainty”, summarise repeats with a mean and half the range, and combine percentage uncertainties for calculated results.',
  spec: [
    'State the instrumental uncertainty of analogue (± half the smallest division) and digital (± the last digit) instruments',
    'Distinguish accuracy, precision, repeatability, reproducibility and resolution',
    'Calculate the mean of repeated readings and the uncertainty as half the range',
    'Calculate absolute, fractional and percentage uncertainties',
    'Combine uncertainties: add absolute uncertainties when adding or subtracting; add percentage uncertainties when multiplying or dividing',
    'Distinguish random and systematic errors and how each can be reduced'
  ],
  learn: [
    { h: 'Instrumental uncertainty', html: `
<p>The <b>resolution</b> of an instrument is the smallest change it can show. It sets the <b>instrumental uncertainty</b> of a single reading.</p>
<div class="tbl"><table><tr><th>Instrument</th><th>Resolution</th><th>Typical uncertainty</th></tr>
<tr><td>metre rule (mm marks)</td><td>1 mm</td><td>± 0.5 mm per reading (± 1 mm for a length, which needs two readings)</td></tr>
<tr><td>vernier calliper</td><td>0.1 mm</td><td>± 0.1 mm</td></tr>
<tr><td>micrometer screw gauge</td><td>0.01 mm</td><td>± 0.01 mm</td></tr>
<tr><td>liquid-in-glass thermometer (1 °C marks)</td><td>1 °C</td><td>± 0.5 °C</td></tr>
<tr><td>digital balance (0.01 g)</td><td>0.01 g</td><td>± 0.01 g</td></tr>
<tr><td>digital stopwatch (hand timed)</td><td>0.01 s</td><td>± 0.2 s or more — human reaction time dominates</td></tr></table></div>
<div class="box def"><b class="lbl">Rule of thumb</b><p><b>Analogue</b> scale: ± half the smallest division. <b>Digital</b> display: ± one in the last digit. Quote the value and uncertainty to the same decimal place: 23.5 ± 0.5 °C, not 23.52 ± 0.5 °C.</p></div>` },
    { h: 'Accuracy, precision and the language of measurement', html: `
<div class="tbl"><table><tr><th>Term</th><th>Meaning</th></tr>
<tr><td><b>Accurate</b></td><td>close to the true value</td></tr>
<tr><td><b>Precise</b></td><td>repeated measurements are close together (small spread, small uncertainty)</td></tr>
<tr><td><b>Repeatable</b></td><td>the same person with the same method and equipment gets similar results</td></tr>
<tr><td><b>Reproducible</b></td><td>different people, methods or equipment get similar results</td></tr>
<tr><td><b>Valid</b></td><td>the experiment measures what it claims to, with other variables controlled, so the conclusion is justified</td></tr></table></div>
[[d:accuracy]]` },
    { h: 'Random and systematic errors', html: `
<ul><li><b>Random errors</b> make readings scatter unpredictably either side of the true value — reaction time, fluctuating readings, judging a meniscus. They affect <b>precision</b>. Reduce them by <b>repeating and averaging</b>, or by measuring a larger quantity (time 10 swings, not 1).</li>
<li><b>Systematic errors</b> shift every reading by the same amount or in the same direction — a <b>zero error</b>, a miscalibrated meter, parallax from always reading at the same wrong angle, heat lost to the surroundings. They affect <b>accuracy</b>. Repeating does <b>not</b> help; correct the readings or change the method.</li></ul>
<p>On a graph, random errors scatter points about the line; a systematic error often shifts the whole line, giving an unexpected <b>intercept</b>.</p>` },
    { h: 'Experimental uncertainty from repeats', html: `
<p>When readings are repeated, the spread is usually larger than the instrumental uncertainty. Summarise them as:</p>
<div class="box def"><b class="lbl">Mean ± half the range</b><p>$"mean" = @frac{"sum of readings"}{"number of readings"}$ &nbsp; $Δx = @frac{x_{max} - x_{min}}{2}$</p></div>
<p>Example: 2.31, 2.28, 2.35, 2.30 s → mean = 2.31 s, range = 0.07 s, so t = 2.31 ± 0.04 s. Use whichever is larger — this or the instrumental uncertainty. Discard clear anomalies first (and say so).</p>` },
    { h: 'Percentage uncertainty and combining uncertainties', html: `
<div class="box def"><b class="lbl">Percentage uncertainty</b><p>$"% uncertainty" = @frac{Δx}{x} × 100$</p><p class="small">A length of 50.0 ± 0.5 cm has a percentage uncertainty of 1%. A length of 5.0 ± 0.5 cm has 10% — the same instrument gives worse precision on a small measurement.</p></div>
<div class="tbl"><table><tr><th>Calculation</th><th>Rule</th><th>Example</th></tr>
<tr><td>adding or subtracting</td><td>add the <b>absolute</b> uncertainties</td><td>(20.0 ± 0.1) − (12.0 ± 0.1) = 8.0 ± 0.2 cm</td></tr>
<tr><td>multiplying or dividing</td><td>add the <b>percentage</b> uncertainties</td><td>v = s ÷ t: 2% in s + 5% in t = 7% in v</td></tr>
<tr><td>raising to a power</td><td>multiply the % uncertainty by the power</td><td>A = πr²: 3% in r → 6% in A</td></tr></table></div>
<p>Finally convert back: v = 4.0 m/s ± 7% → 4.0 ± 0.3 m/s. Quote the uncertainty to 1 (or 2) significant figures and the value to the same decimal place.</p>` }
  ],
  eqs: [['Δx = @frac{x_{max} - x_{min}}{2}', 'uncertainty from repeats (half the range)'], ['"% uncertainty" = @frac{Δx}{x} × 100', 'percentage uncertainty'], ['"%"(xy) = "%"x + "%"y', 'multiplying or dividing: add % uncertainties']],
  worked: [
    { q: 'A student times a trolley five times: 2.31 s, 2.28 s, 2.95 s, 2.33 s, 2.30 s. Find the mean and its uncertainty.', s: ['2.95 s is anomalous (far from the others) — discard it.', 'Mean = (2.31 + 2.28 + 2.33 + 2.30) ÷ 4 = 2.305 s', 'Range = 2.33 − 2.28 = 0.05 s, so uncertainty = ± 0.025 s ≈ ± 0.03 s', 't = 2.31 ± 0.03 s'], a: '2.31 ± 0.03 s' },
    { q: 'A block of mass 250 ± 1 g has a volume of 92 ± 2 cm³. Calculate its density with an absolute uncertainty.', s: ['ρ = 250 ÷ 92 = 2.717 g/cm³', '% in m = 1/250 × 100 = 0.4%; % in V = 2/92 × 100 = 2.2%', '% in ρ = 0.4 + 2.2 = 2.6%', 'Δρ = 2.6% of 2.717 = 0.07 g/cm³ → ρ = 2.72 ± 0.07 g/cm³'], a: '2.72 ± 0.07 g cm⁻³' },
    { q: 'A thermometer reads 1.5 °C when placed in melting ice. What kind of error is this and how should the readings be corrected?', s: ['Every reading is shifted by the same amount: a systematic (zero) error.', 'Repeating will not remove it.', 'Subtract 1.5 °C from every reading (or recalibrate).'], a: 'Systematic zero error — subtract 1.5 °C' }
  ],
  pitfalls: ['Quoting the uncertainty to more decimal places than the value (or the other way round).', 'Thinking repeats reduce a systematic error.', 'Adding absolute uncertainties when multiplying or dividing.', 'Using the full range instead of half the range.', 'Confusing precise with accurate.'],
  cards: [
    ['Uncertainty of an analogue scale?', '± half the smallest division'],
    ['Uncertainty of a digital display?', '± 1 in the last digit'],
    ['Accurate?', 'Close to the true value.'],
    ['Precise?', 'Repeated readings close together (small spread).'],
    ['Repeatable vs reproducible?', 'Same person/method vs different people/methods/equipment.'],
    ['Random error — effect and fix?', 'Scatter (precision); repeat and average.'],
    ['Systematic error — effect and fix?', 'Shift (accuracy); recalibrate or correct — repeats do not help.'],
    ['Uncertainty from repeats?', 'Half the range: (max − min) ÷ 2'],
    ['% uncertainty?', 'Δx ÷ x × 100'],
    ['Combining for x × y or x ÷ y?', 'Add percentage uncertainties.'],
    ['Combining for x + y or x − y?', 'Add absolute uncertainties.'],
    ['Uncertainty in r² if r has 3%?', '6%'],
    ['Zero error?', 'An instrument reads non-zero when it should read zero — a systematic error.'],
    ['Why time 10 swings instead of 1?', 'Reaction-time uncertainty is spread over 10 swings — percentage uncertainty is 10× smaller.']
  ],
  quiz: [
    { q: 'A ruler is marked in millimetres. The uncertainty in a single reading is', o: ['± 0.5 mm', '± 1 mm', '± 0.1 mm', '± 1 cm'], x: 'Half the smallest division.' },
    { q: 'A digital balance reads 12.37 g. Its uncertainty is', o: ['± 0.01 g', '± 0.005 g', '± 0.1 g', '± 1 g'], x: 'One in the last digit.' },
    { q: 'Readings: 5.2, 5.6, 5.4 cm. Mean and uncertainty?', o: ['5.4 ± 0.2 cm', '5.4 ± 0.4 cm', '5.4 ± 0.1 cm', '5.2 ± 0.2 cm'], x: 'Range 0.4 → ± 0.2.' },
    { q: 'A thermometer always reads 2 °C too high. This is', o: ['a systematic error', 'a random error', 'an anomaly', 'a precision error'], x: 'Same shift every time.' },
    { q: 'Taking more readings and calculating a mean reduces', o: ['the effect of random errors', 'systematic errors', 'zero errors', 'parallax errors from always reading at the same angle'], x: 'Averaging cancels scatter.' },
    { q: 'Results that are close together but far from the true value are', o: ['precise but not accurate', 'accurate but not precise', 'accurate and precise', 'reproducible'], x: 'Likely a systematic error.' },
    { q: 'The percentage uncertainty of 40.0 ± 0.2 cm is', o: ['0.5%', '0.2%', '5%', '2%'], x: '0.2/40 × 100.' },
    { q: 'Speed = distance ÷ time. Distance has 2% uncertainty and time 3%. The speed has', o: ['5%', '1%', '6%', '1.5%'], x: 'Add percentages.' },
    { q: 'The radius of a wire has a 4% uncertainty. Its cross-sectional area (πr²) has', o: ['8%', '4%', '16%', '2%'], x: 'Power 2 → × 2.' },
    { q: 'Results are reproducible if', o: ['different people with different equipment get similar results', 'one person gets the same result twice', 'they are close to the true value', 'they have no uncertainty'], x: 'Definition.' },
    { q: 'Why does timing 20 oscillations of a pendulum improve precision?', o: ['the reaction-time uncertainty is shared over 20 oscillations', 'the pendulum swings faster', 'it removes systematic error', 'the stopwatch becomes more accurate'], x: 'Smaller % uncertainty per swing.' },
    { q: '(12.0 ± 0.1) cm − (7.5 ± 0.1) cm =', o: ['4.5 ± 0.2 cm', '4.5 ± 0.1 cm', '4.5 ± 0 cm', '4.5 ± 0.05 cm'], x: 'Subtracting: add absolute uncertainties.' }
  ],
  exam: [
    { q: 'A student measures the period of a pendulum by timing one swing with a hand-held stopwatch. Suggest two improvements to reduce the uncertainty and explain each.', m: 4, cr: 'B', ms: ['Time several (e.g. 10/20) oscillations and divide.', 'Reaction-time uncertainty becomes a smaller percentage of the total time.', 'Repeat and calculate a mean (discarding anomalies).', 'Reduces the effect of random errors / use a light gate or video to remove reaction time.'] },
    { q: 'A cube has sides of 2.0 ± 0.1 cm and mass 64.8 ± 0.1 g. Calculate its density and the absolute uncertainty.', m: 4, cr: 'C', ms: ['V = 2.0³ = 8.0 cm³; ρ = 64.8 ÷ 8.0 = 8.1 g/cm³', '% in side = 5%, so % in V = 15%', '% in m ≈ 0.15% (negligible) → total ≈ 15%', 'ρ = 8.1 ± 1.2 g/cm³ (≈ 8 ± 1 g/cm³)'] },
    { q: 'Explain the difference between random and systematic errors, using the measurement of temperature with a liquid-in-glass thermometer as an example.', m: 4, cr: 'A', ms: ['Random: unpredictable scatter, e.g. reading the scale at different angles / fluctuations in temperature.', 'Reduced by repeating and averaging.', 'Systematic: same shift each reading, e.g. thermometer miscalibrated/zero error/always reading from above.', 'Not reduced by repeating; corrected by calibration (e.g. in ice and boiling water).'] }
  ],
  sims: ['readscale', 'targets'], gens: ['mean1', 'unc1', 'pctunc', 'combunc']
});

TOPICS.push({
  id: '1.4', unit: '1', strand: 2, as: [4, 6, 7], ref: 'Strand 2 · AS 4, 6, 7', title: 'Data tables, graphs and error bars', short: 'Raw vs processed data, best-fit lines, gradient uncertainty',
  summary: 'Design tables that separate raw from processed data, plot graphs that answer the question, add error bars, and use best-fit, steepest and shallowest lines to find a gradient with its uncertainty — and to spot random and systematic errors.',
  spec: [
    'Design data tables with the independent variable first, quantity and unit in each heading, raw data separated from processed data, and consistent decimal places',
    'Choose an appropriate graph: line graph for continuous variables; plot the independent variable on the x-axis; use more than half the grid',
    'Draw error bars from the uncertainty of each plotted value',
    'Draw a line or smooth curve of best fit; identify anomalous points',
    'Find a gradient using a large triangle; find its uncertainty from the steepest and shallowest lines through the error bars',
    'Identify direct proportionality (straight line through the origin, within the error bars) and use the intercept to identify systematic error',
    'Linearise a relationship to test a proportionality (e.g. plot T² against l)'
  ],
  learn: [
    { h: 'Designing a data table', html: `
<div class="tbl"><table><tr><th>Load F / N<br><span class="small">± 0.01 N</span></th><th>Length 1 / cm<br><span class="small">± 0.1 cm</span></th><th>Length 2 / cm<br><span class="small">± 0.1 cm</span></th><th>Length 3 / cm<br><span class="small">± 0.1 cm</span></th><th style="background:color-mix(in srgb,var(--u1) 14%,transparent)">Mean extension x / cm</th><th style="background:color-mix(in srgb,var(--u1) 14%,transparent)">Δx / cm</th></tr>
<tr><td>1.00</td><td>12.4</td><td>12.6</td><td>12.5</td><td>2.5</td><td>0.1</td></tr><tr><td>2.00</td><td>14.9</td><td>15.1</td><td>15.0</td><td>5.0</td><td>0.1</td></tr></table></div>
<ul><li><b>Independent variable</b> in the first column; <b>raw data</b> (what you actually read) next; <b>processed data</b> (means, extensions, calculated values) clearly separated, e.g. shaded or on the right.</li>
<li>Each heading has the <b>quantity / unit</b> and its <b>uncertainty</b>; numbers in the body have no units.</li>
<li>Raw data are recorded to the resolution of the instrument — every value in a column has the same number of decimal places.</li></ul>` },
    { h: 'Drawing a graph that answers the question', html: `
<ul><li>Independent variable on the <b>x-axis</b>, dependent on the <b>y-axis</b>, both labelled with quantity and unit, e.g. “extension / cm”.</li>
<li>Choose scales that use more than half of the grid and are easy to read (steps of 1, 2, 5, 10).</li>
<li>Plot points as small crosses; add <b>error bars</b> showing ± the uncertainty of each value.</li>
<li>Draw a <b>line of best fit</b> (straight or a smooth curve) with points evenly scattered either side — do not join the dots and do not force it through the origin.</li>
<li>Give the graph a title that states the relationship being tested.</li></ul>
<p>A line graph suits <b>continuous</b> data. Use a bar chart for categories (e.g. type of material).</p>` },
    { h: 'Gradient, intercept and gradient uncertainty', html: `
<p>For a straight line $y = mx + c$, the gradient m = Δy ÷ Δx — use a triangle covering at least half of the line, and include units.</p>
[[d:errbars]]
<div class="box def"><b class="lbl">Uncertainty in the gradient</b><p>Draw the <b>steepest</b> and <b>shallowest</b> lines that still pass through all the error bars.</p><p>$Δm = @frac{m_{max} - m_{min}}{2}$</p></div>
<p>The physical meaning of the gradient is what makes a graph powerful: for force against extension it is the <b>spring constant</b>; for distance against time it is the <b>speed</b>.</p>` },
    { h: 'Reading errors from a graph', html: `
<ul><li><b>Random error</b> shows as scatter of the points about the line. Large error bars mean large random uncertainty.</li>
<li><b>Systematic error</b> shows as a line that is shifted: a theory predicts “through the origin” but the line cuts an axis at a non-zero <b>intercept</b>, e.g. a ruler zero error adds the same length to every extension.</li>
<li>An <b>anomalous</b> point lies well away from the line beyond its error bar. Re-measure it if possible; otherwise ignore it when drawing the line and comment on it.</li>
<li><b>Direct proportion</b>: a straight line through the origin — or, more honestly, a straight line where the origin lies within the range of the best-fit and worst-fit lines.</li></ul>` },
    { h: 'Linearising a relationship', html: `
<p>Curves are hard to test by eye, so we plot quantities that should give a straight line if the theory is right.</p>
<div class="tbl"><table><tr><th>Theory</th><th>Plot</th><th>Straight line through origin with gradient…</th></tr>
<tr><td>Pendulum: $T = 2π@sqrt{l/g}$</td><td>T² against l</td><td>4π²/g</td></tr>
<tr><td>Free fall from rest: $s = @frac{1}{2}gt^2$</td><td>s against t²</td><td>g/2</td></tr>
<tr><td>Kinetic energy: $E_k = @frac{1}{2}mv^2$</td><td>Eₖ against v²</td><td>m/2</td></tr></table></div>` }
  ],
  eqs: [['m = @frac{Δy}{Δx}', 'gradient of a straight line'], ['Δm = @frac{m_{max} - m_{min}}{2}', 'uncertainty in the gradient']],
  worked: [
    { q: 'A student plots force (y) against extension (x) for a spring. Best-fit gradient 24.6 N/m; steepest line 26.1 N/m; shallowest 23.0 N/m. State the spring constant with its uncertainty.', s: ['$Δk = @frac{26.1 - 23.0}{2} = 1.55 "N/m"$', 'Round the uncertainty to 1 or 2 s.f.: ± 1.6 N/m (or ± 2 N/m)', 'k = 24.6 ± 1.6 N/m'], a: 'k = 25 ± 2 N/m' },
    { q: 'A graph of extension against load should pass through the origin but cuts the extension axis at +0.4 cm. Explain what this shows.', s: ['All extensions are 0.4 cm too large — a constant shift.', 'This is a systematic error (e.g. the original length was misread or the ruler has a zero error).', 'The gradient (and so k) is unaffected; the intercept reveals the error.'], a: 'A systematic error of +0.4 cm' }
  ],
  pitfalls: ['Joining the dots instead of drawing a best-fit line.', 'Using a small triangle — or data points that are not on the line — to find the gradient.', 'Forcing the line through the origin.', 'Putting units in the body of the table instead of the heading.', 'Mixing raw and processed data with no distinction.'],
  cards: [
    ['Where does the independent variable go in a table?', 'First column.'],
    ['Raw vs processed data?', 'Raw: readings as taken. Processed: calculated from them (means, extensions…).'],
    ['What goes in a column heading?', 'Quantity / unit and the uncertainty.'],
    ['What do error bars show?', 'The uncertainty (± range) of each plotted value.'],
    ['Uncertainty in a gradient?', '(steepest − shallowest) ÷ 2 using lines through all error bars.'],
    ['How does a systematic error show on a graph?', 'An unexpected intercept / shifted line.'],
    ['How does random error show on a graph?', 'Scatter of points about the line.'],
    ['Direct proportion on a graph?', 'Straight line through the origin (within uncertainties).'],
    ['To test T = 2π√(l/g), plot…', 'T² against l.'],
    ['Line graph or bar chart for type of material?', 'Bar chart (categoric).']
  ],
  quiz: [
    { q: 'In a data table the units should appear', o: ['in the column heading', 'after every number', 'in a separate row at the bottom', 'only in the title'], x: 'Quantity / unit.' },
    { q: 'Processed data include', o: ['the mean of repeated readings', 'the readings on the ruler', 'the time on the stopwatch', 'the reading on the balance'], x: 'Calculated values.' },
    { q: 'The independent variable is plotted', o: ['on the x-axis', 'on the y-axis', 'on either axis', 'as error bars'], x: 'Convention.' },
    { q: 'Steepest gradient 5.4, shallowest 4.6. The gradient uncertainty is', o: ['± 0.4', '± 0.8', '± 0.2', '± 5.0'], x: '(5.4 − 4.6) ÷ 2.' },
    { q: 'A best-fit line should', o: ['have points evenly scattered either side', 'pass through every point', 'always pass through the origin', 'join the first and last points'], x: 'Best fit, not dot-to-dot.' },
    { q: 'A straight line that should pass through the origin has a large positive intercept. This suggests', o: ['a systematic error', 'a random error', 'an anomalous point', 'too few repeats'], x: 'Constant shift.' },
    { q: 'To test whether s = ½gt² for a falling ball, plot', o: ['s against t²', 's against t', 's² against t', '√s against t²'], x: 'Gives a straight line through the origin.' },
    { q: 'The gradient of a distance–time graph has units of', o: ['m/s', 'm', 's', 'm/s²'], x: 'Δy/Δx = m/s.' },
    { q: 'Error bars that are all very large indicate', o: ['large uncertainty / poor precision', 'a systematic error', 'high accuracy', 'a proportional relationship'], x: 'Spread of readings.' }
  ],
  exam: [
    { q: 'Design a results table for an experiment to find how the length of a wire affects its resistance. Five lengths are tested, each measured three times with a voltmeter and ammeter.', m: 4, cr: 'B', ms: ['Length (independent) in first column with unit and uncertainty.', 'Columns for V and I readings (raw) for each repeat, units in headings.', 'Processed columns: R = V/I for each repeat and mean R, clearly separated.', 'Consistent decimal places matching instrument resolution.'] },
    { q: 'A student’s graph of force against extension has a best-fit gradient of 40 N/m. The steepest line through the error bars has gradient 44 N/m and the shallowest 37 N/m. (a) Calculate the uncertainty in the spring constant. (b) The line passes 0.3 cm from the origin, within the error bars. Comment on whether F is proportional to x.', m: 4, cr: 'C', ms: ['Δk = (44 − 37)/2 = 3.5 N/m', 'k = 40 ± 4 N/m', 'Straight line …', '… and the origin lies within the uncertainty, so the data support F ∝ x (within this range).'] }
  ],
  sims: ['gradlines'], gens: ['gradunc', 'gradcalc']
});

TOPICS.push(lw('5.2', {
  id: '1.5', unit: '1', strand: 2, as: [1, 2, 3, 4, 5, 6, 7], ref: 'Summative task · AS 1–7', title: 'Hooke’s law: an investigation', short: 'F = kx, the spring constant and its uncertainty',
  summary: 'The Unit 1 summative task brings every skill together: investigate how the extension of a spring depends on the load, record raw and processed data with uncertainties, and determine the spring constant from a gradient — with its uncertainty.',
  spec: ['State Hooke’s law: F = kx up to the limit of proportionality', 'Distinguish elastic and inelastic (plastic) deformation', 'Calculate the extension (new length − original length)', 'Determine k from the gradient of a force–extension graph, with an uncertainty', 'Calculate the elastic potential energy stored, Eₑ = ½kx²', 'Evaluate the method and suggest improvements'],
  learn: [1, 2, 3, { h: 'Planning the investigation', html: `
<p class="small muted">Extension is written x here; some books (and the notes above) use e.</p><div class="tbl"><table><tr><th>Variable</th><th>In this investigation</th></tr><tr><td>Independent</td><td>load (weight) F — add 100 g masses (≈ 0.98 N each)</td></tr><tr><td>Dependent</td><td>extension x — new length minus original length</td></tr><tr><td>Controlled</td><td>the same spring; same position of the ruler; temperature; allow the spring to stop oscillating before reading</td></tr></table></div>
<ol><li>Clamp a stand, spring and vertical metre rule (G-clamp the stand to the bench). Fix a pointer to the bottom of the spring.</li><li>Record the original length (or pointer position) at eye level to avoid parallax.</li><li>Add masses one at a time; record the pointer reading each time (raw data, ± 0.5 mm).</li><li>Repeat by unloading, and repeat the whole set; calculate the mean extension and the uncertainty (half the range).</li><li>Plot F (y-axis) against x with error bars; the gradient of the straight section is k.</li></ol>
<div class="box warn"><b class="lbl">Safety</b><p>Wear eye protection (a spring can snap back). Keep feet clear of the masses; do not overload the spring.</p></div>` },
    { h: 'Evaluating validity', html: `
<ul><li>Is the line straight and does it pass through the origin within the uncertainty? If so, F ∝ x is supported for this range of loads.</li>
<li>Does the line curve at high loads? The limit of proportionality has been passed — conclusions apply only below it.</li>
<li>Compare loading and unloading readings: if they differ, the spring has been deformed inelastically.</li>
<li>Improvements: use a pointer and set-square to reduce parallax; take more load values near the expected limit; use a travelling microscope or motion sensor for small extensions.</li></ul>` }],
  quiz: [3, 4, 5, 6, 7, 8, 9, 10], exam: [0, 1, 2], worked: [1, 2], cards: [4, 5, 6, 7, 8, 9, 10, 11],
  addExam: [{ q: 'A student obtains these results for a spring: loads 1.0, 2.0, 3.0, 4.0, 5.0 N give mean extensions 2.1, 4.0, 6.1, 8.0, 11.5 cm. (a) Identify the value that suggests the limit of proportionality was passed. (b) Calculate the spring constant from the linear region in N/m. (c) Suggest one way to make the extension readings more precise.', m: 5, cr: 'C', ms: ['5.0 N → 11.5 cm does not fit the pattern (≈ 2 cm per newton).', 'Linear region: k = 4.0 N ÷ 0.080 m …', '… = 50 N/m (accept 48–50 N/m).', 'Use a pointer / read at eye level / set-square to avoid parallax.', 'Repeat and take a mean / use a more precise instrument such as a travelling microscope.'] }],
  eqs: [['F = kx', 'Hooke’s law'], ['E_e = @frac{1}{2}kx^2', 'elastic potential energy']],
  sims: ['spring'], gens: ['hooke1', 'hooke2', 'epe2', 'gradunc']
}));
