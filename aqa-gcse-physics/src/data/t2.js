/* ==========================================================
   4.2 ELECTRICITY
   ========================================================== */
TOPICS.push({
  id: '2.1', unit: '2', ref: '4.2.1.1–4.2.1.3', title: 'Current, potential difference and resistance', short: 'Symbols, Q = It, V = IR',
  summary: 'Draw and read circuit diagrams, understand current as a flow of charge, and use V = IR. Includes Required Practical 3 on the factors that affect resistance.',
  spec: [
    'Circuit diagrams use standard symbols; draw and interpret circuit diagrams',
    'For charge to flow through a closed circuit the circuit must include a source of potential difference',
    'Electric current is a flow of electrical charge; its size is the rate of flow of charge: Q = I t (recall)',
    'A current has the same value at any point in a single closed loop',
    'The current through a component depends on its resistance and the potential difference across it; greater resistance → smaller current for a given pd',
    'Potential difference = current × resistance: V = I R (recall)',
    'Required practical 3: investigate factors affecting resistance — the length of a wire at constant temperature, and combinations of resistors in series and parallel'
  ],
  learn: [
    { h: 'Circuit symbols', html: `
<p>Circuit diagrams use standard symbols so anyone can read them. Learn to draw each one neatly — examiners do not give credit for symbols they cannot recognise.</p>
[[d:symbols]]
<div class="box tip"><b class="lbl">Exam tip</b><p>An <b>ammeter</b> is always connected in <b>series</b> with the component. A <b>voltmeter</b> is always connected in <b>parallel</b> across the component. Use a ruler for wires, and make sure the circuit is a closed loop.</p></div>` },
    { h: 'Charge and current', html: `
<p>For charge to flow round a circuit there must be a <b>closed circuit</b> and a <b>source of potential difference</b> (a cell, battery or power supply).</p>
<div class="box def"><b class="lbl">Definition</b><p><b>Electric current</b> is a flow of electrical charge. The size of the current is the <b>rate of flow of charge</b>.</p></div>
<div class="box def"><b class="lbl">Recall this equation</b><p>charge flow = current × time &nbsp; $Q = It$</p><p class="small">Q in coulombs (C), I in amperes (A), t in seconds (s)</p></div>
<p>In metal wires the charge is carried by <b>electrons</b>. The current has <b>the same value at any point in a single closed loop</b> — charge is not used up by components.</p>` },
    { h: 'Potential difference and resistance', html: `
<p>The current through a component depends on both the <b>resistance</b> R of the component and the <b>potential difference</b> V across it. For a given pd, a <b>greater resistance</b> gives a <b>smaller current</b>.</p>
<div class="box def"><b class="lbl">Recall this equation</b><p>potential difference = current × resistance &nbsp; $V = IR$</p><p class="small">V in volts (V), I in amperes (A), R in ohms (Ω)</p></div>
<p>Questions use the term <b>potential difference</b> (pd); “voltage” also gets credit. Rearranging: $I = @frac{V}{R}$ and $R = @frac{V}{I}$.</p>
<div class="box why"><b class="lbl">Measuring resistance</b><p>Put an ammeter in series with the component and a voltmeter across it. Measure I and V, then calculate R = V ÷ I. Use a variable resistor to take several readings and find a mean.</p></div>` },
    { h: 'Required practical 3: factors affecting resistance', html: `
[[d:wirerig]]
<p><b>Part 1 — length of a wire.</b> Attach a constantan wire to a metre rule. Connect a crocodile clip at 0 cm and a second clip at a distance L. Measure the current (ammeter in series) and pd (voltmeter across the length L). Calculate R = V/I. Repeat for L = 10, 20, 30 … 100 cm.</p>
<p>Plot R against L: a <b>straight line through the origin</b> (or close to it) shows R ∝ L. Doubling the length doubles the resistance.</p>
<p><b>Keep the temperature constant:</b> use a low pd and switch off between readings. If the wire gets hot its resistance rises and the results are no longer valid.</p>
<p><b>Part 2 — combinations of resistors.</b> Measure I and V for a single resistor, then for two identical resistors in series, then in parallel. Series: total R increases. Parallel: total R is less than either resistor alone.</p>
<div class="box warn"><b class="lbl">Common errors</b><p>A line that does not pass through the origin shows a <b>systematic error</b> — often the resistance of the crocodile clips or poor contact, or a zero error on the rule. Random errors come from reading the length or meters.</p></div>` }
  ],
  eqs: [['Q = It', 'charge flow (recall)'], ['V = IR', 'potential difference (recall)']],
  worked: [
    { q: 'A current of 0.40 A flows through a lamp for 2.0 minutes. Calculate the charge that flows.', s: ['Convert time: 2.0 min = 120 s', '$Q = It = 0.40 × 120$', '$Q = 48 "C"$'], a: '48 C' },
    { q: 'A 12 V supply is connected across a 48 Ω resistor. Calculate the current.', s: ['$V = IR$, so $I = @frac{V}{R}$', '$I = @frac{12}{48}$', '$I = 0.25 "A"$'], a: '0.25 A' },
    { q: 'A current of 150 mA flows through a component when the pd across it is 4.5 V. Calculate its resistance.', s: ['Convert: 150 mA = 0.150 A', '$R = @frac{V}{I} = @frac{4.5}{0.150}$', '$R = 30 Ω$'], a: '30 Ω' }
  ],
  pitfalls: ['Connecting an ammeter in parallel or a voltmeter in series.', 'Forgetting to convert mA to A or minutes to seconds.', 'Saying current is “used up” by a lamp — it is the same all round a series loop.', 'In RP3, letting the wire heat up (use a low pd and switch off between readings).', 'Drawing symbols freehand so a resistor looks like a lamp.'],
  cards: [
    ['What is electric current?', 'A flow of electrical charge; its size is the rate of flow of charge.'],
    ['Equation linking Q, I and t?', '$Q = It$ (C, A, s)'],
    ['What two things are needed for current to flow?', 'A closed circuit and a source of potential difference.'],
    ['How does current vary round a single loop?', 'It has the same value at every point.'],
    ['Equation linking V, I and R?', '$V = IR$ (V, A, Ω)'],
    ['How is an ammeter connected?', 'In series with the component.'],
    ['How is a voltmeter connected?', 'In parallel across the component.'],
    ['For a fixed pd, what happens to I if R increases?', 'The current decreases.'],
    ['RP3: how does resistance depend on wire length?', 'Directly proportional — double the length, double the resistance.'],
    ['RP3: why use a low pd?', 'So the wire does not heat up — temperature must stay constant.'],
    ['Unit of charge?', 'coulomb (C)'],
    ['Convert 250 mA to amps.', '0.25 A']
  ],
  quiz: [
    { q: 'Electric current is', o: ['the rate of flow of electrical charge', 'the energy carried by charge', 'the push that makes charge flow', 'the opposition to the flow of charge'], x: 'I = Q/t.' },
    { q: 'A charge of 30 C flows in 10 s. The current is', o: ['3.0 A', '300 A', '0.33 A', '20 A'], x: 'I = Q/t.' },
    { q: 'Which meter must be connected in parallel with a component?', o: ['voltmeter', 'ammeter', 'both', 'neither'], x: 'A voltmeter measures the pd across a component.' },
    { q: 'A 6.0 V battery drives 0.50 A through a resistor. The resistance is', o: ['12 Ω', '3.0 Ω', '0.083 Ω', '6.5 Ω'], x: 'R = V/I.' },
    { q: 'The current through a 20 Ω resistor is 0.30 A. The pd across it is', o: ['6.0 V', '67 V', '0.015 V', '20 V'], x: 'V = IR.' },
    { q: 'In a single series loop, the current', o: ['is the same everywhere', 'is largest near the positive terminal', 'is used up by each component', 'is zero after the last component'], x: 'Charge is not used up.' },
    { q: 'For a fixed pd, increasing the resistance of a component', o: ['decreases the current', 'increases the current', 'does not affect the current', 'reverses the current'], x: 'I = V/R.' },
    { q: 'In RP3 the resistance of a wire is found to double when its length doubles. This shows that', o: ['resistance is directly proportional to length', 'resistance is inversely proportional to length', 'resistance does not depend on length', 'the wire heated up'], x: 'R ∝ L.' },
    { q: 'Why should the current be switched off between readings in RP3?', o: ['to stop the wire heating up and changing resistance', 'to save the battery only', 'to reset the ammeter to zero', 'to make the wire longer'], x: 'Temperature must stay constant.' },
    { q: 'How much charge flows when 2.0 A passes for 1 minute?', o: ['120 C', '2.0 C', '30 C', '0.033 C'], x: 'Q = 2.0 × 60.' },
    { q: 'A graph of R against length for a wire is a straight line that does not pass through the origin. The most likely cause is', o: ['a systematic error such as contact resistance at the clips', 'a random error in reading the ammeter', 'the wire being too long', 'the resistance being proportional to length'], x: 'A consistent offset is a systematic error.' },
    { q: 'Which symbol represents a component whose resistance falls as light intensity increases?', o: ['LDR', 'thermistor', 'diode', 'fuse'], x: 'Light-dependent resistor.' }
  ],
  exam: [
    { q: 'Draw a circuit diagram you could use to find the resistance of a fixed resistor, and explain how you would use it.', m: 4, ms: ['Resistor in series with a cell/power supply and an ammeter.', 'Voltmeter connected in parallel across the resistor.', 'Record the ammeter and voltmeter readings (for several settings of a variable resistor).', 'Calculate R = V / I and find the mean.'] },
    { q: 'Describe how to investigate how the resistance of a wire depends on its length.', m: 6, ms: ['Fix the wire along a metre rule; connect crocodile clips at 0 and at length L.', 'Ammeter in series; voltmeter across the length L of wire.', 'Record V and I for a range of lengths (e.g. 10 cm to 100 cm in 10 cm steps).', 'Calculate R = V/I for each length.', 'Use a low pd / switch off between readings so the temperature of the wire stays constant.', 'Plot R against L; a straight line through the origin shows R ∝ L.'] },
    { q: 'A phone charger supplies a current of 1.5 A for 45 minutes. Calculate the charge that flows.', m: 3, ms: ['t = 45 × 60 = 2700 s', 'Q = It = 1.5 × 2700', 'Q = 4050 C'] }
  ],
  sims: ['ohm'], gens: ['qit1', 'qit2', 'vir1', 'vir2', 'vir3']
});

TOPICS.push({
  id: '2.2', unit: '2', ref: '4.2.1.4', title: 'Resistors and I–V characteristics', short: 'Ohmic conductor, lamp, diode, thermistor, LDR',
  summary: 'Why some components obey Ohm’s law and others do not. Sketch and explain I–V graphs (Required Practical 4), and use thermistors and LDRs as sensors.',
  spec: [
    'For some resistors the value of R stays constant, but for others it changes as the current changes',
    'The current through an ohmic conductor (at constant temperature) is directly proportional to the pd across it — its resistance is constant',
    'The resistance of lamps, diodes, thermistors and LDRs is not constant',
    'The resistance of a filament lamp increases as the temperature of the filament increases',
    'The current through a diode flows in one direction only; it has a very high resistance in the reverse direction',
    'The resistance of a thermistor decreases as temperature increases (application: a thermostat)',
    'The resistance of an LDR decreases as light intensity increases (application: switching lights on when it gets dark)',
    'Explain the design and use of a circuit to measure resistance; draw circuit diagrams with correct symbols',
    'Use graphs to explore whether circuit elements are linear or non-linear and relate the curves to their function',
    'Required practical 4: investigate the I–V characteristics of a filament lamp, a diode and a resistor at constant temperature'
  ],
  learn: [
    { h: 'Ohmic conductors', html: `
<div class="box def"><b class="lbl">Key idea</b><p>The current through an <b>ohmic conductor</b> at <b>constant temperature</b> is <b>directly proportional</b> to the potential difference across it. Its resistance stays constant as the current changes.</p></div>
<p>The I–V graph is a <b>straight line through the origin</b>. Reversing the pd just reverses the current, so the line continues into the third quadrant. A fixed resistor and a wire at constant temperature are ohmic.</p>
[[d:ivall]]` },
    { h: 'Filament lamp and diode', html: `
<p><b>Filament lamp:</b> as the current increases the filament gets hotter. The metal ions vibrate more, so electrons collide with them more often — the <b>resistance increases as the temperature increases</b>. The I–V graph curves and becomes less steep (an S-shape through the origin).</p>
<p><b>Diode:</b> current flows in <b>one direction only</b>. In the forward direction, above about 0.6 V, the resistance becomes low and the current rises steeply. In the <b>reverse direction</b> the diode has a <b>very high resistance</b>, so the current is almost zero. An <b>LED</b> is a diode that emits light.</p>
<div class="box tip"><b class="lbl">Exam tip</b><p>For any point on an I–V graph, R = V ÷ I at that point. Do <b>not</b> use the gradient.</p></div>` },
    { h: 'Thermistors and LDRs', html: `
<p><b>Thermistor:</b> resistance <b>decreases</b> as <b>temperature increases</b>. Used as a temperature sensor, for example in a <b>thermostat</b> that switches a heater off when a room gets warm, or in a car engine temperature gauge.</p>
<p><b>LDR (light-dependent resistor):</b> resistance <b>decreases</b> as <b>light intensity increases</b>. Used in circuits that <b>switch lights on when it gets dark</b> (street lamps, security lights).</p>
[[d:sensors]]
<p>You can investigate each one: put the thermistor in a beaker of water heated with a kettle, and measure R (with an ohmmeter or V and I) at different temperatures; move a lamp to different distances from an LDR to vary light intensity.</p>` },
    { h: 'Required practical 4: I–V characteristics', html: `
[[d:ivrig]]
<ol><li>Set up the component in series with an ammeter and a variable resistor (or use a variable power supply). Connect a voltmeter across the component.</li><li>Adjust the variable resistor to change the pd. Record the current and pd for a range of values.</li><li>Reverse the connections to the power supply and repeat to get negative values.</li><li>Plot current (y-axis) against potential difference (x-axis).</li><li>Repeat for a resistor, a filament lamp and a diode (use a protective resistor in series with the diode).</li></ol>
<p><b>Keeping a resistor at constant temperature:</b> keep the current small and switch off between readings.</p>
<p><b>Safety:</b> a filament lamp becomes very hot; don’t touch it. Keep the current low to avoid overheating components.</p>` }
  ],
  eqs: [['R = @frac{V}{I}', 'at any point on an I–V graph']],
  worked: [
    { q: 'From an I–V graph a filament lamp has a current of 0.20 A at 2.0 V and 0.30 A at 6.0 V. Calculate its resistance at each point and explain the change.', s: ['At 2.0 V: $R = @frac{2.0}{0.20} = 10 Ω$', 'At 6.0 V: $R = @frac{6.0}{0.30} = 20 Ω$', 'The larger current heats the filament; its resistance increases as temperature increases.'], a: '10 Ω then 20 Ω — resistance rises as the filament heats up.' },
    { q: 'A thermistor is used in a circuit to switch on a fan when a room gets hot. Explain how its resistance changes and why this is useful.', s: ['As the temperature rises, the resistance of the thermistor decreases.', 'This changes the current (or the pd across other components), which can be used to trigger a switch that turns the fan on.'], a: 'Resistance falls as temperature rises, triggering the switch.' }
  ],
  pitfalls: ['Calculating resistance from the gradient of an I–V graph instead of V ÷ I.', 'Saying a diode has zero resistance forwards — it is low only above about 0.6 V.', 'Mixing up thermistor (temperature) and LDR (light).', 'Saying the resistance of a thermistor “increases with temperature” — it decreases.', 'Drawing the lamp graph as a straight line.'],
  cards: [
    ['What is an ohmic conductor?', 'One where I is directly proportional to V at constant temperature — constant resistance.'],
    ['Shape of I–V graph for a resistor at constant temperature?', 'Straight line through the origin.'],
    ['Shape of I–V graph for a filament lamp?', 'S-shaped curve through the origin — gets less steep as V increases.'],
    ['Why does a filament lamp’s resistance increase?', 'Its temperature increases as current increases.'],
    ['What does a diode do?', 'Allows current in one direction only; very high resistance in reverse.'],
    ['Thermistor: effect of increasing temperature?', 'Resistance decreases.'],
    ['LDR: effect of increasing light intensity?', 'Resistance decreases.'],
    ['Application of a thermistor?', 'Thermostat / temperature sensor.'],
    ['Application of an LDR?', 'Switching lights on when it gets dark.'],
    ['How do you find R from an I–V graph?', 'R = V ÷ I at that point.'],
    ['RP4: how do you get negative values?', 'Reverse the connections to the power supply.'],
    ['Which component gives current only above about 0.6 V?', 'A diode (forward biased).']
  ],
  quiz: [
    { q: 'Which I–V graph is a straight line through the origin?', o: ['resistor at constant temperature', 'filament lamp', 'diode', 'thermistor being heated'], x: 'Constant resistance → proportional.' },
    { q: 'The resistance of a filament lamp increases as the current increases because', o: ['the filament gets hotter', 'the filament gets longer', 'the pd decreases', 'electrons travel faster so collide less'], x: 'Resistance increases with temperature.' },
    { q: 'A diode', o: ['lets current flow in one direction only', 'has the same resistance both ways', 'glows when heated', 'has a resistance that increases with light'], x: 'Very high resistance in reverse.' },
    { q: 'The resistance of a thermistor', o: ['decreases as temperature increases', 'increases as temperature increases', 'decreases as light intensity increases', 'is constant'], x: 'Thermistor = temperature sensor.' },
    { q: 'Which component would be used to switch on a street light at dusk?', o: ['LDR', 'thermistor', 'diode', 'fuse'], x: 'Its resistance rises as it gets dark.' },
    { q: 'A component has a current of 0.25 A when the pd is 5.0 V. Its resistance at that point is', o: ['20 Ω', '1.25 Ω', '0.05 Ω', '5.25 Ω'], x: 'R = V/I.' },
    { q: 'On an I–V graph for a filament lamp, as V increases the graph', o: ['becomes less steep', 'becomes steeper', 'stays equally steep', 'falls to zero'], x: 'Increasing resistance → smaller increase in I.' },
    { q: 'In RP4, why is a resistor put in series with a diode?', o: ['to protect the diode from too large a current', 'to make the diode work in reverse', 'to measure the pd', 'to keep the diode cool by adding resistance to the wires only'], x: 'Limits the current.' },
    { q: 'Which is an application of a thermistor?', o: ['a thermostat', 'a dimmer switch for lights', 'a security light that switches on at night', 'a mobile phone screen'], x: 'Temperature-controlled switching.' },
    { q: 'Which statement about an ohmic conductor is correct?', o: ['its resistance is constant at constant temperature', 'its resistance increases with current', 'current flows one way only', 'its resistance depends on light'], x: 'I ∝ V.' },
    { q: 'An LDR is moved from a bright room into the dark. Its resistance', o: ['increases', 'decreases', 'stays the same', 'becomes zero'], x: 'Less light → higher resistance.' },
    { q: 'For a diode in reverse, the current is', o: ['almost zero', 'very large', 'the same as forwards', 'proportional to pd'], x: 'Very high resistance in reverse.' }
  ],
  exam: [
    { q: 'Describe how a student could obtain the data to plot an I–V graph for a filament lamp.', m: 6, ms: ['Lamp in series with an ammeter and a variable resistor / variable supply.', 'Voltmeter in parallel across the lamp.', 'Change the pd using the variable resistor and record V and I.', 'Take a range of readings (e.g. at least 5–10 values).', 'Reverse the supply connections and repeat for negative values.', 'Plot current against pd.'] },
    { q: 'Sketch the I–V graph for a diode and explain its shape.', m: 3, ms: ['Almost zero current for negative pd (reverse).', 'Current rises steeply above a small forward pd (about 0.6 V).', 'Diode has very high resistance in reverse / only lets current flow one way.'] },
    { q: 'Explain how the resistance of an LDR changes when a cloud covers the Sun, and suggest a use for this.', m: 3, ms: ['Light intensity decreases.', 'Resistance of the LDR increases.', 'Use: automatically switching on lights when it gets dark.'] }
  ],
  sims: ['ivg', 'sensors'], gens: ['ivr1']
});

TOPICS.push({
  id: '2.3', unit: '2', ref: '4.2.2', title: 'Series and parallel circuits', short: 'Sharing current and potential difference',
  summary: 'The rules for current, potential difference and resistance in series and parallel — and why adding resistors in parallel lowers the total resistance.',
  spec: [
    'Components can be joined in series or in parallel; some circuits include both',
    'Series: the same current through each component; the total pd of the supply is shared; total resistance R_total = R₁ + R₂',
    'Parallel: the pd across each component is the same; the total current is the sum of the currents in the branches; the total resistance of two resistors is less than the smallest individual resistance',
    'Use circuit diagrams to construct and check series and parallel circuits',
    'Explain qualitatively why adding resistors in series increases total resistance while adding resistors in parallel decreases it',
    'Explain the design and use of dc series circuits for measurement and testing',
    'Calculate currents, potential differences and resistances in dc series circuits; use equivalent resistance',
    'Calculating the total resistance of two resistors in parallel is not required'
  ],
  learn: [
    { h: 'Series circuits', html: `
[[d:series]]
<ul><li>There is <b>the same current</b> through each component.</li><li>The total pd of the supply is <b>shared</b> between the components: $V_{"total"} = V_1 + V_2$.</li><li>The total resistance is the sum of the resistances: $R_{"total"} = R_1 + R_2$.</li></ul>
<p>The component with the <b>larger resistance</b> gets the <b>larger share</b> of the pd (because V = IR and I is the same for both).</p>` },
    { h: 'Parallel circuits', html: `
[[d:parallel]]
<ul><li>The pd across each branch is <b>the same</b> (equal to the supply pd).</li><li>The total current is the <b>sum</b> of the currents through the separate branches: $I_{"total"} = I_1 + I_2$.</li><li>The total resistance of two resistors in parallel is <b>less than the smallest</b> individual resistance.</li></ul>
<p>Houses are wired in parallel: each appliance gets the full mains pd and can be switched on and off independently.</p>
<p class="small muted">You do not need to calculate the total resistance of resistors in parallel.</p>` },
    { h: 'Why resistance adds up (or down)', html: `
<p><b>Series:</b> the charge has to pass through every resistor in turn, so there is more opposition to the current — total resistance <b>increases</b>.</p>
<p><b>Parallel:</b> adding another branch gives the charge <b>another path</b> to flow through. The total current increases for the same pd, so the total resistance <b>decreases</b>.</p>
<div class="box tip"><b class="lbl">Exam tip</b><p>To solve a series problem: (1) add the resistances; (2) find the current with I = V<sub>total</sub> ÷ R<sub>total</sub>; (3) find each pd with V = IR.</p></div>` }
  ],
  eqs: [['R_{"total"} = R_1 + R_2', 'resistors in series'], ['V_{"total"} = V_1 + V_2', 'series: pd is shared'], ['I_{"total"} = I_1 + I_2', 'parallel: currents add']],
  worked: [
    { q: 'A 6.0 V battery is connected to a 4.0 Ω and an 8.0 Ω resistor in series. Calculate the current and the pd across each resistor.', s: ['$R_{"total"} = 4.0 + 8.0 = 12 Ω$', '$I = @frac{V}{R} = @frac{6.0}{12} = 0.50 "A"$', '$V_1 = 0.50 × 4.0 = 2.0 "V"$; $V_2 = 0.50 × 8.0 = 4.0 "V"$ (check: 2.0 + 4.0 = 6.0 V)'], a: '0.50 A; 2.0 V and 4.0 V' },
    { q: 'Two lamps are in parallel with a 12 V supply. One takes 0.50 A and the other 0.30 A. Find the total current and the pd across each lamp.', s: ['Parallel: currents add. $I = 0.50 + 0.30 = 0.80 "A"$', 'Parallel: each branch has the full supply pd, 12 V.'], a: '0.80 A; 12 V across each' }
  ],
  pitfalls: ['Saying current is shared in series — it is the pd that is shared.', 'Saying pd is shared in parallel — each branch gets the full pd.', 'Adding parallel resistances like series ones.', 'Thinking two resistors in parallel give a larger total resistance.'],
  cards: [
    ['Series: current?', 'Same through each component.'],
    ['Series: potential difference?', 'Shared between components; adds up to the supply pd.'],
    ['Series: total resistance?', '$R_{"total"} = R_1 + R_2$'],
    ['Parallel: potential difference?', 'The same across each branch.'],
    ['Parallel: current?', 'Total current = sum of branch currents.'],
    ['Parallel: total resistance of two resistors?', 'Less than the smallest individual resistance.'],
    ['Why does adding a resistor in parallel reduce total resistance?', 'It provides another path, so more current flows for the same pd.'],
    ['Why does adding a resistor in series increase total resistance?', 'Charge must pass through both, so there is more opposition.'],
    ['In series, which resistor gets the bigger pd?', 'The one with the larger resistance.'],
    ['Why are houses wired in parallel?', 'Each appliance gets full mains pd and can be switched independently.']
  ],
  quiz: [
    { q: 'In a series circuit, the current', o: ['is the same through each component', 'is shared between components', 'is largest in the biggest resistor', 'adds up across the branches'], x: 'One loop, one current.' },
    { q: 'Two resistors of 5 Ω and 10 Ω are in series. The total resistance is', o: ['15 Ω', '5 Ω', '3.3 Ω', '50 Ω'], x: 'R = R₁ + R₂.' },
    { q: 'In a parallel circuit, the potential difference across each branch', o: ['is the same as the supply pd', 'is shared equally', 'adds up to the supply pd', 'is zero'], x: 'Each branch connects directly across the supply.' },
    { q: 'Two resistors, 6 Ω and 12 Ω, are connected in parallel. The total resistance is', o: ['less than 6 Ω', 'between 6 Ω and 12 Ω', '18 Ω', 'more than 18 Ω'], x: 'Less than the smallest individual resistance.' },
    { q: 'A 9.0 V supply is connected to 1.0 Ω and 2.0 Ω resistors in series. The current is', o: ['3.0 A', '9.0 A', '4.5 A', '27 A'], x: 'I = 9.0/3.0.' },
    { q: 'A 9.0 V supply is connected to 1.0 Ω and 2.0 Ω resistors in series. The pd across the 2.0 Ω resistor is', o: ['6.0 V', '3.0 V', '9.0 V', '4.5 V'], x: 'V = IR = 3.0 × 2.0.' },
    { q: 'The branch currents in a parallel circuit are 0.2 A, 0.3 A and 0.5 A. The current from the supply is', o: ['1.0 A', '0.5 A', '0.33 A', '0.03 A'], x: 'Currents add in parallel.' },
    { q: 'Adding another lamp in parallel to a circuit', o: ['increases the total current', 'decreases the total current', 'makes the other lamps dimmer', 'increases the total resistance'], x: 'Another path → lower total resistance → larger total current.' },
    { q: 'Two identical lamps in series across 12 V. The pd across each is', o: ['6 V', '12 V', '24 V', '3 V'], x: 'Shared equally between identical lamps.' },
    { q: 'Why are Christmas tree lights in series a nuisance?', o: ['if one bulb fails the whole string goes out', 'they draw too much current', 'each bulb gets the full mains pd', 'they cannot be switched off'], x: 'Only one path — break it and the current stops.' },
    { q: 'In series, a 30 Ω resistor and a 10 Ω resistor share 8.0 V. The pd across the 30 Ω resistor is', o: ['6.0 V', '2.0 V', '4.0 V', '8.0 V'], x: 'I = 8/40 = 0.2 A; V = 0.2 × 30.' }
  ],
  exam: [
    { q: 'Explain why the total resistance of two resistors in parallel is less than the resistance of either resistor.', m: 2, ms: ['There are more paths for the charge to flow through.', 'So for the same pd the total current is larger, meaning the total resistance is smaller.'] },
    { q: 'A 12 V battery is connected in series with a 20 Ω resistor and a lamp. The current is 0.40 A. Calculate the resistance of the lamp.', m: 3, ms: ['R_total = 12 / 0.40 = 30 Ω', 'R_lamp = 30 − 20', '= 10 Ω'] },
    { q: 'Describe two differences between series and parallel circuits.', m: 2, ms: ['Series: same current everywhere; parallel: current splits between branches (sum of branch currents).', 'Series: pd shared; parallel: same pd across each branch.'] }
  ],
  sims: ['serpar'], gens: ['ser1', 'ser2', 'ser3', 'par1']
});

TOPICS.push({
  id: '2.4', unit: '2', ref: '4.2.3', title: 'Mains electricity', short: 'ac and dc, three-core cable, safety',
  summary: 'The difference between direct and alternating pd, the UK mains supply, the job of each wire in a three-core cable, and why the live wire can be dangerous.',
  spec: [
    'Mains electricity is an ac supply; in the UK it has a frequency of 50 Hz and is about 230 V',
    'Explain the difference between direct and alternating potential difference',
    'Most appliances connect to the mains using three-core cable, colour coded: live – brown, neutral – blue, earth – green and yellow stripes',
    'The live wire carries the alternating pd; the neutral wire completes the circuit; the earth wire is a safety wire to stop the appliance becoming live',
    'The pd between live and earth is about 230 V; neutral is at or close to 0 V; the earth wire is at 0 V and only carries a current if there is a fault',
    'Explain that a live wire may be dangerous even when a switch in the mains circuit is open',
    'Explain the dangers of providing any connection between the live wire and earth'
  ],
  learn: [
    { h: 'Direct and alternating potential difference', html: `
<p>A <b>direct</b> pd (dc) has a constant direction — cells and batteries give dc, so the current always flows the same way.</p>
<p>An <b>alternating</b> pd (ac) continually <b>reverses direction</b>, so the current flows one way, then the other, many times a second.</p>
[[d:acdc]]
<div class="box def"><b class="lbl">UK mains supply</b><p>Mains electricity is an <b>ac</b> supply with a frequency of <b>50 Hz</b> and a potential difference of about <b>230 V</b>.</p></div>` },
    { h: 'Three-core cable', html: `
[[d:plug]]
<div class="tbl"><table><tr><th>Wire</th><th>Colour</th><th>Job</th><th>Potential</th></tr>
<tr><td>Live</td><td style="color:#8B5A2B"><b>brown</b></td><td>carries the alternating pd from the supply</td><td>about 230 V</td></tr>
<tr><td>Neutral</td><td style="color:#1C6FA8"><b>blue</b></td><td>completes the circuit</td><td>at or close to 0 V</td></tr>
<tr><td>Earth</td><td><b>green and yellow stripes</b></td><td>safety wire — stops the appliance becoming live</td><td>0 V; only carries a current if there is a fault</td></tr></table></div>
<p>The earth wire is connected to the metal case of an appliance. If the live wire touches the case, a large current flows to earth instead of through a person.</p>` },
    { h: 'Dangers of the live wire', html: `
<p>Your body is at about 0 V (earth potential). If you touch the live wire there is a pd of about 230 V across your body, so a current flows through you to earth — an <b>electric shock</b>, which can kill.</p>
<p>A <b>live wire may be dangerous even when a switch is open</b>: if the switch is off, no current flows through the appliance, but the live wire is still at 230 V. Touching it still gives a pd across your body.</p>
<p>Any <b>connection between the live wire and earth</b> is dangerous — for example a damaged cable touching a metal pipe, or a screwdriver bridging live and earth. A very large current flows, which can cause fires or shocks.</p>
<div class="box tip"><b class="lbl">Exam tip</b><p>Always explain danger in terms of <b>potential difference</b> across the body and the resulting <b>current</b>.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why touching the live wire of a lamp can give an electric shock even when the lamp is switched off.', s: ['The switch breaks the circuit through the lamp, but the live wire is still at about 230 V.', 'The body is at 0 V, so there is a large pd across it.', 'A current flows through the person to earth — an electric shock.'], a: 'The live wire stays at 230 V; a pd across the body drives a current to earth.' }
  ],
  pitfalls: ['Mixing up the colours: brown = live, blue = neutral, green/yellow = earth.', 'Saying the earth wire carries current all the time.', 'Saying the neutral wire is at 230 V.', 'Saying a switched-off appliance is always safe to touch inside.', 'Confusing frequency (50 Hz) with pd (230 V).'],
  cards: [
    ['UK mains: frequency and pd?', '50 Hz, about 230 V (ac).'],
    ['Difference between ac and dc?', 'ac continually reverses direction; dc is in one direction only.'],
    ['Colour of the live wire?', 'Brown'],
    ['Colour of the neutral wire?', 'Blue'],
    ['Colour of the earth wire?', 'Green and yellow stripes'],
    ['Job of the live wire?', 'Carries the alternating pd from the supply.'],
    ['Job of the neutral wire?', 'Completes the circuit.'],
    ['Job of the earth wire?', 'Safety — stops the appliance becoming live; carries current only if there is a fault.'],
    ['Potential of the neutral wire?', 'At or close to 0 V.'],
    ['Why can a live wire be dangerous when a switch is open?', 'It is still at 230 V, so touching it puts a pd across you.'],
    ['Why is connecting live to earth dangerous?', 'A very large current flows — risk of fire/shock.'],
    ['Do batteries supply ac or dc?', 'dc']
  ],
  quiz: [
    { q: 'The UK mains supply is', o: ['ac, 50 Hz, about 230 V', 'dc, 50 Hz, about 230 V', 'ac, 230 Hz, about 50 V', 'dc, 12 V'], x: 'Spec values.' },
    { q: 'The live wire is coloured', o: ['brown', 'blue', 'green and yellow', 'red'], x: 'Brown = live.' },
    { q: 'The earth wire', o: ['only carries a current if there is a fault', 'carries the alternating pd', 'completes the circuit', 'is at 230 V'], x: 'It is a safety wire at 0 V.' },
    { q: 'The neutral wire is at a potential of about', o: ['0 V', '230 V', '115 V', '50 V'], x: 'At or close to earth potential.' },
    { q: 'Which is a direct pd supply?', o: ['a battery', 'the mains', 'a generator with slip rings', 'a UK wall socket'], x: 'Cells and batteries give dc.' },
    { q: 'An alternating pd', o: ['continually reverses direction', 'always has the same direction', 'is always 230 V', 'is only produced by batteries'], x: 'ac alternates.' },
    { q: 'Why can touching the live wire give a shock?', o: ['there is a large pd between it and the body, so a current flows', 'the live wire is at 0 V', 'the body is at 230 V', 'current only flows in the neutral wire'], x: 'Pd across the body drives a current.' },
    { q: 'A lamp is switched off. Which wire could still be dangerous to touch?', o: ['live', 'neutral', 'earth', 'none of them'], x: 'Live stays at 230 V.' },
    { q: 'The earth wire is connected to', o: ['the metal case of an appliance', 'the fuse only', 'the neutral terminal', 'the switch'], x: 'So a fault current flows to earth.' },
    { q: 'What does a frequency of 50 Hz mean for the mains?', o: ['it completes 50 cycles each second', 'it is 50 V', 'it reverses once every 50 seconds', 'it supplies 50 A'], x: 'Hz = cycles per second.' },
    { q: 'Which connection is most dangerous?', o: ['live wire to earth', 'neutral wire to earth', 'earth wire to the metal case', 'neutral wire to the appliance'], x: 'Creates a very large current.' }
  ],
  exam: [
    { q: 'Describe the difference between an alternating pd and a direct pd.', m: 2, ms: ['An alternating pd continually changes direction / reverses.', 'A direct pd is always in the same direction.'] },
    { q: 'Explain the purpose of the earth wire in a kettle with a metal case.', m: 3, ms: ['The earth wire is connected to the metal case.', 'If a fault makes the live wire touch the case, current flows through the earth wire (instead of through a person).', 'This stops the case becoming live / prevents electric shock.'] },
    { q: 'A child pushes a metal pin into the live socket of a wall plug. Explain why this is dangerous.', m: 3, ms: ['The live terminal is at about 230 V; the child is at 0 V (earth).', 'There is a large pd across the child’s body.', 'A current flows through the body to earth — electric shock.'] }
  ],
  sims: ['acdc', 'plug'], gens: []
});

TOPICS.push({
  id: '2.5', unit: '2', ref: '4.2.4', title: 'Energy transfers and the National Grid', short: 'P = VI, P = I²R, E = Pt, E = QV',
  summary: 'How appliances transfer energy, the four equations linking power, energy, current, pd and charge — and why the National Grid transmits at very high pd.',
  spec: [
    'Explain how the power of a device is related to the pd across it, the current through it and the energy transferred over time',
    'P = V I and P = I² R (recall both)',
    'Everyday appliances are designed to bring about energy transfers; energy transferred depends on the power and how long the appliance is on',
    'Describe how appliances transfer energy from batteries or ac mains to the kinetic energy of motors or to heating devices',
    'Work is done when charge flows in a circuit: E = P t and E = Q V (recall both)',
    'Describe the relationship between power ratings of domestic appliances and the changes in stored energy when they are used',
    'The National Grid is a system of cables and transformers linking power stations to consumers',
    'Step-up transformers increase the pd from the power station to the transmission cables; step-down transformers decrease it for domestic use',
    'Explain why the National Grid is an efficient way to transfer energy'
  ],
  learn: [
    { h: 'Power in circuits', html: `
<div class="box def"><b class="lbl">Recall both equations</b><p>power = potential difference × current &nbsp; $P = VI$</p><p>power = current<sup>2</sup> × resistance &nbsp; $P = I^2R$</p><p class="small">P in watts (W), V in volts (V), I in amperes (A), R in ohms (Ω)</p></div>
<p>$P = I^2R$ comes from substituting V = IR into P = VI. Use it when you know the current and resistance — for example, the power wasted heating a transmission cable.</p>` },
    { h: 'Energy transferred by appliances', html: `
<p>Everyday appliances are designed to bring about energy transfers — from the chemical store of a battery or from the ac mains to the <b>kinetic store</b> of a motor (fan, drill, washing machine) or the <b>thermal store</b> of a heating element (kettle, toaster, iron).</p>
<p><b>Work is done when charge flows</b> through a component.</p>
<div class="box def"><b class="lbl">Recall both equations</b><p>energy transferred = power × time &nbsp; $E = Pt$</p><p>energy transferred = charge flow × potential difference &nbsp; $E = QV$</p><p class="small">E in joules (J), P in W, t in s, Q in coulombs (C), V in V</p></div>
<p>The energy an appliance transfers depends on its <b>power rating</b> and <b>how long it is switched on</b>. A 3 kW kettle on for 2 minutes transfers the same energy as a 1 kW heater on for 6 minutes.</p>
<p>A pd of 1 volt means <b>1 joule of energy is transferred per coulomb</b> of charge.</p>` },
    { h: 'The National Grid', html: `
[[d:grid]]
<p>The <b>National Grid</b> is a system of cables and transformers linking power stations to consumers.</p>
<ol><li>A <b>step-up transformer</b> increases the pd from the power station (about 25 kV) to a very high value for the transmission cables (up to 400 kV).</li><li>Electricity is transmitted across the country.</li><li><b>Step-down transformers</b> decrease the pd to a much lower value (230 V) for homes.</li></ol>
<div class="box why"><b class="lbl">Why is this efficient?</b><p>For a given power, P = VI, so increasing the pd <b>decreases the current</b>. The power wasted heating the cables is P = I²R, so a smaller current means <b>much less energy is dissipated</b> in the cables (halving I cuts the loss to a quarter). High pd also means thinner, cheaper cables can be used.</p></div>
<p class="small muted">How transformers work is covered in topic 7.3 (Higher tier).</p>` }
  ],
  eqs: [['P = VI', 'power (recall)'], ['P = I^2R', 'power (recall)'], ['E = Pt', 'energy transferred (recall)'], ['E = QV', 'energy transferred (recall)']],
  worked: [
    { q: 'A kettle draws 10 A from the 230 V mains. Calculate its power.', s: ['$P = VI = 230 × 10$', '$P = 2300 "W"$'], a: '2300 W (2.3 kW)' },
    { q: 'A current of 3.0 A flows through a 40 Ω heating element. Calculate the power.', s: ['$P = I^2R = 3.0^2 × 40$', '$P = 9.0 × 40 = 360 "W"$'], a: '360 W' },
    { q: 'A 2.0 kW heater is switched on for 30 minutes. Calculate the energy transferred.', s: ['P = 2000 W, t = 30 × 60 = 1800 s', '$E = Pt = 2000 × 1800$', '$E = 3 600 000 "J"$'], a: '3.6 × 10⁶ J' },
    { q: '600 C of charge passes through a 12 V motor. Calculate the energy transferred.', s: ['$E = QV = 600 × 12$', '$E = 7200 "J"$'], a: '7200 J' }
  ],
  pitfalls: ['Forgetting to square the current in P = I²R.', 'Using minutes or hours in E = Pt instead of seconds.', 'Saying step-up transformers increase the current.', 'Saying the grid is efficient because high pd “pushes electricity faster”.', 'Forgetting kW → W.'],
  cards: [
    ['Power, pd and current?', '$P = VI$'],
    ['Power, current and resistance?', '$P = I^2R$'],
    ['Energy, power and time?', '$E = Pt$'],
    ['Energy, charge and pd?', '$E = QV$'],
    ['What does 1 volt mean?', '1 joule of energy transferred per coulomb of charge.'],
    ['Energy transferred by an appliance depends on?', 'Its power and how long it is switched on.'],
    ['What is the National Grid?', 'A system of cables and transformers linking power stations to consumers.'],
    ['Job of a step-up transformer in the grid?', 'Increases the pd (so decreases the current) for transmission.'],
    ['Job of a step-down transformer?', 'Decreases the pd to a safer, lower value (230 V) for homes.'],
    ['Why is transmitting at high pd efficient?', 'Current is lower for the same power, so less energy is lost heating the cables (P = I²R).'],
    ['Energy change in an electric drill?', 'Energy transferred electrically → kinetic store of the motor (some wasted as sound/thermal).'],
    ['Energy change in a toaster?', 'Energy transferred electrically → thermal store of the element and bread.']
  ],
  quiz: [
    { q: 'A lamp draws 0.50 A from a 12 V supply. Its power is', o: ['6.0 W', '24 W', '0.042 W', '12.5 W'], x: 'P = VI.' },
    { q: 'A current of 2.0 A flows in a 5.0 Ω resistor. The power is', o: ['20 W', '10 W', '2.5 W', '50 W'], x: 'P = I²R = 4 × 5.' },
    { q: 'A 60 W lamp is on for 10 s. Energy transferred =', o: ['600 J', '6.0 J', '70 J', '0.17 J'], x: 'E = Pt.' },
    { q: 'A charge of 50 C passes through a pd of 230 V. Energy transferred =', o: ['11 500 J', '4.6 J', '280 J', '0.22 J'], x: 'E = QV.' },
    { q: 'Step-up transformers in the National Grid', o: ['increase the pd and decrease the current', 'increase the current', 'decrease the pd for homes', 'increase the power'], x: 'For the same power, higher V → lower I.' },
    { q: 'Transmitting electricity at a high pd reduces energy losses because', o: ['the current is smaller, so less heating of the cables', 'the resistance of the cables is zero', 'the current is larger', 'the energy travels faster'], x: 'P_loss = I²R.' },
    { q: 'If the current in a transmission cable is halved, the power wasted in the cable', o: ['falls to a quarter', 'halves', 'doubles', 'stays the same'], x: 'P = I²R — (½)² = ¼.' },
    { q: 'Which appliance mainly transfers energy to a kinetic store?', o: ['electric fan', 'toaster', 'electric heater', 'kettle'], x: 'It contains a motor.' },
    { q: 'A 3.0 kW oven and a 1.0 kW microwave are each used for 10 minutes. Compared with the microwave, the oven transfers', o: ['3 times as much energy', 'the same energy', 'one third as much energy', '30 times as much'], x: 'E = Pt with the same t.' },
    { q: 'The potential difference supplied to UK homes after the step-down transformer is about', o: ['230 V', '400 kV', '25 kV', '12 V'], x: 'Domestic mains.' },
    { q: 'A 1.2 kW hairdryer runs on 230 V. The current is about', o: ['5.2 A', '0.19 A', '276 A', '1.2 A'], x: 'I = P/V = 1200/230.' },
    { q: 'Which is NOT a reason for using a very high pd in the National Grid?', o: ['it makes the electricity safer in homes', 'it reduces the current', 'it reduces energy losses in the cables', 'thinner cables can be used'], x: 'The pd is stepped down before reaching homes; high pd itself is dangerous.' }
  ],
  exam: [
    { q: 'Explain why the National Grid uses step-up and step-down transformers.', m: 4, ms: ['Step-up transformers increase the pd for transmission.', 'This decreases the current (for the same power).', 'Less energy is lost heating the cables (P = I²R), so the system is more efficient.', 'Step-down transformers reduce the pd to a safer, lower value for homes (230 V).'] },
    { q: 'An electric kettle has a power of 2.8 kW and is used on 230 V mains. (a) Calculate the current. (b) Calculate the energy transferred in 150 s.', m: 4, ms: ['I = P/V = 2800/230', 'I = 12 A (12.2 A)', 'E = Pt = 2800 × 150', 'E = 420 000 J'] },
    { q: 'A battery transfers 540 J of energy while 45 C of charge flows. Calculate the pd of the battery.', m: 2, ms: ['V = E / Q = 540 / 45', 'V = 12 V'] }
  ],
  sims: ['grid'], gens: ['pvi1', 'pvi2', 'pi2r1', 'ept1', 'ept2', 'eqv1', 'eqv2']
});

TOPICS.push({
  id: '2.6', unit: '2', ref: '4.2.5', po: true, title: 'Static electricity and electric fields', short: 'Charging by friction, attraction, fields',
  summary: 'Rubbing insulators transfers electrons. Charged objects attract or repel without touching, because each creates an electric field — which also explains sparking.',
  spec: [
    '(PO) When certain insulating materials are rubbed together, electrons are rubbed off one material onto the other; the material that gains electrons becomes negative, the one that loses them is left with an equal positive charge',
    '(PO) Like charges repel; unlike charges attract; these are non-contact forces',
    '(PO) Describe the production of static electricity, and sparking, by rubbing surfaces',
    '(PO) Describe evidence that charged objects exert forces on one another when not in contact',
    '(PO) Explain static electricity in terms of the transfer of electrons',
    '(PO) A charged object creates an electric field around itself; the field is strongest close to the object and weaker further away',
    '(PO) A second charged object in the field experiences a force, which gets stronger as the distance between them decreases',
    '(PO) Draw the electric field pattern for an isolated charged sphere; explain how the field explains non-contact forces and sparking'
  ],
  learn: [
    { h: 'Charging by friction', html: `
<p>When two <b>insulating</b> materials are rubbed together, <b>electrons</b> (negatively charged) are rubbed off one material and onto the other. Only electrons move — protons stay in the nuclei.</p>
<ul><li>The material that <b>gains electrons</b> becomes <b>negatively</b> charged.</li><li>The material that <b>loses electrons</b> is left with an <b>equal positive</b> charge.</li></ul>
[[d:rub]]
<p>Example: rubbing a polythene rod with a duster moves electrons onto the rod (rod negative, duster positive). An acetate rod loses electrons to the duster (rod positive).</p>` },
    { h: 'Forces between charges', html: `
<p>Two charged objects exert a force on each other even when they are not touching — a <b>non-contact force</b>.</p>
<ul><li><b>Like charges repel</b> (+ and +, or − and −).</li><li><b>Unlike charges attract</b> (+ and −).</li></ul>
<p><b>Evidence:</b> hang a charged rod from a thread; bring a second charged rod near. The suspended rod moves away (repulsion) or towards (attraction) without contact. A charged balloon sticks to a wall; charged hair strands spread apart.</p>` },
    { h: 'Electric fields', html: `
<div class="box def"><b class="lbl">Electric field</b><p>A charged object creates an <b>electric field</b> around itself. A second charged object placed in the field <b>experiences a force</b>.</p></div>
[[d:efield]]
<p>For an isolated charged sphere the field lines are <b>radial</b> — straight lines pointing <b>away from a positive</b> sphere (or <b>towards a negative</b> one). The lines are closest together near the sphere: the field is <b>strongest close to the object</b> and weaker further away. The force on a second charge gets <b>stronger as the distance decreases</b>.</p>
<p><b>Sparking:</b> when a large charge builds up, the electric field becomes very strong. It can pull electrons from air molecules (ionising the air), and the air conducts — electrons jump across the gap as a <b>spark</b>. This is why refuelling aircraft and fuel tankers are earthed.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'A polythene rod is rubbed with a cloth and becomes negatively charged. Explain, in terms of electrons, what has happened to the cloth.', s: ['Electrons have been transferred from the cloth to the rod.', 'The cloth has lost electrons, so it is left with an equal positive charge.'], a: 'The cloth loses electrons and becomes positively charged (equal in size to the rod’s charge).' }
  ],
  pitfalls: ['Saying positive charges (protons) move during charging — only electrons move.', 'Saying the rubbed objects have unequal charges — the charges are equal and opposite.', 'Drawing field lines around a positive sphere pointing inwards.', 'Using conductors in examples of charging by friction (they need to be insulators).'],
  cards: [
    ['What moves when insulators are rubbed together?', 'Electrons.', 'po'],
    ['Material that gains electrons becomes?', 'Negatively charged.', 'po'],
    ['Material that loses electrons becomes?', 'Positively charged (equal size of charge).', 'po'],
    ['Like charges…?', 'Repel.', 'po'],
    ['Unlike charges…?', 'Attract.', 'po'],
    ['Is the force between charges contact or non-contact?', 'Non-contact.', 'po'],
    ['What is an electric field?', 'A region around a charged object where another charge experiences a force.', 'po'],
    ['Where is the field strongest?', 'Close to the charged object.', 'po'],
    ['Field lines of a positive isolated sphere?', 'Radial, pointing outwards.', 'po'],
    ['What causes a spark?', 'A strong field ionises the air, and electrons jump across the gap.', 'po'],
    ['What happens to the force as two charges get closer?', 'It gets stronger.', 'po']
  ],
  quiz: [
    { q: 'When a balloon is rubbed on a jumper and becomes negatively charged, the balloon has', o: ['gained electrons', 'lost electrons', 'gained protons', 'lost protons'], x: 'Negative = extra electrons.', po: 1 },
    { q: 'A negatively charged rod is brought near another negatively charged rod hanging on a thread. The hanging rod', o: ['moves away', 'moves towards', 'does not move', 'becomes positive'], x: 'Like charges repel.', po: 1 },
    { q: 'The charge left on a duster after rubbing a polythene rod (which becomes negative) is', o: ['positive and equal in size', 'negative and equal in size', 'positive and larger', 'zero'], x: 'Electrons transferred to the rod.', po: 1 },
    { q: 'The electric field around a charged sphere is', o: ['strongest close to the sphere', 'the same everywhere', 'strongest far from the sphere', 'zero at the surface'], x: 'Field lines are closest together near the sphere.', po: 1 },
    { q: 'Electric field lines around an isolated positive sphere', o: ['point radially outwards', 'point radially inwards', 'form circles around the sphere', 'are parallel'], x: 'Direction = force on a positive charge.', po: 1 },
    { q: 'Sparks jump from a charged object when', o: ['the field is strong enough to make the air conduct', 'the object is an insulator', 'protons move through the air', 'the charge is very small'], x: 'The air is ionised.', po: 1 },
    { q: 'The force between two charged objects', o: ['increases as they get closer', 'decreases as they get closer', 'does not depend on distance', 'is always attractive'], x: 'Stronger at shorter distance.', po: 1 },
    { q: 'Which materials can be charged by rubbing?', o: ['insulators', 'metals only', 'any conductor that is earthed', 'only liquids'], x: 'Charge stays where it is on an insulator.', po: 1 },
    { q: 'Why is a fuel tanker earthed before refuelling a plane?', o: ['to stop charge building up and causing a spark', 'to increase the flow of fuel', 'to charge the fuel', 'to make the plane positive'], x: 'Sparks could ignite fuel vapour.', po: 1 },
    { q: 'Attraction between a charged rod and a charged rod on a thread is an example of', o: ['a non-contact force', 'a contact force', 'friction', 'tension only'], x: 'The rods do not touch.', po: 1 }
  ],
  exam: [
    { q: 'Explain how rubbing an acetate rod with a cloth makes the rod positively charged.', m: 3, ms: ['Electrons are transferred (rubbed off)', 'from the rod to the cloth.', 'The rod has lost electrons, so it has an overall positive charge.'], po: 1 },
    { q: 'Draw the electric field pattern around an isolated negatively charged sphere.', m: 2, ms: ['Radial straight lines from the surface of the sphere.', 'Arrows pointing inwards (towards the sphere).'], po: 1 },
    { q: 'Explain, using the idea of an electric field, why a small charged ball moves towards a large charged dome of opposite charge.', m: 3, ms: ['The dome creates an electric field around it.', 'The charged ball is in the field so experiences a force.', 'Opposite charges attract, so the force is towards the dome (and increases as it gets closer).'], po: 1 }
  ],
  sims: ['static'], gens: []
});
