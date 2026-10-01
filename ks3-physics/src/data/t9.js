/* ==========================================================
   YEAR 8 · UNIT 9 · ELECTRICITY
   ========================================================== */
TOPICS.push({
  id: '9.1', unit: '9', title: 'Circuit symbols and diagrams', short: 'Drawing circuits the standard way',
  summary: 'Circuit diagrams use standard symbols so anyone can read them. A circuit needs a complete loop from one terminal of the cell back to the other; a gap anywhere stops the current.',
  spec: [
    'I can recognise and draw the symbols for a cell, battery, switch, lamp, resistor, variable resistor, ammeter, voltmeter, motor, buzzer and fuse',
    'I can draw neat circuit diagrams with straight lines and a ruler',
    'I can explain that current only flows in a complete circuit',
    'I can explain the difference between a cell and a battery',
    '★ I can explain what a short circuit is and why it is dangerous'
  ],
  learn: [
    { h: 'Standard symbols', html: `
[[d:k_symbols]]
<p>A <b>cell</b> has a long line (positive, +) and a short, thick line (negative, −). A <b>battery</b> is two or more cells joined together. A <b>switch</b> opens (breaks) or closes (completes) the circuit.</p>` },
    { h: 'Drawing circuit diagrams', html: `
<ul><li>Use a <b>ruler and pencil</b>; draw wires as <b>straight lines</b> with square corners.</li><li>Do not leave <b>gaps</b> in the wires, except inside a switch symbol.</li><li>Put a <b>dot</b> where wires join (a junction).</li><li>Draw components on the straight parts, not the corners.</li><li>Label the values if you know them (e.g. 3 V, 0.2 A).</li></ul>` },
    { h: 'Complete circuits', html: `
<p>Current can only flow if there is a <b>complete circuit</b> — an unbroken path of conductors from one terminal of the cell, through the components, back to the other terminal. Open a switch, or break a wire, and the current stops <b>everywhere</b> in that loop.</p>
<p><b>Conductors</b> (metals like copper, graphite) let current pass; <b>insulators</b> (plastic, rubber, wood, glass) do not. Wires are copper covered in plastic.</p>
<div class="box why"><b class="lbl">★ Short circuits</b><p>A <b>short circuit</b> is a path with almost no resistance — e.g. a wire joined straight across a cell. A huge current flows, the wire gets very hot, and the cell quickly goes flat or can even burn. A <b>fuse</b> is a thin wire that melts if the current gets too big, breaking the circuit to keep us safe.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Draw a circuit diagram with a battery of two cells, a closed switch and two lamps in one loop.', s: ['Draw a rectangle of wires with a ruler.', 'On the top side: two cell symbols joined (+ to −) — a battery.', 'On the left side: a closed switch; on the right and bottom: a lamp symbol each.', 'No gaps in the loop.'], a: 'one loop: battery, switch, lamp, lamp' },
    { q: 'A lamp does not light. Suggest three possible reasons.', s: ['The switch is open.', 'A wire is loose or broken — the circuit is not complete.', 'The cell is flat, or the lamp’s filament is broken.'], a: 'open switch; broken circuit; flat cell or blown bulb' }
  ],
  pitfalls: ['Drawing the lamp symbol without the cross, or the cell lines the same length.', 'Leaving gaps at the corners of wires.', 'Calling one cell a battery.', 'Drawing wires with curves or freehand.'],
  cards: [
    ['Symbol for a lamp?', 'A circle with a cross inside.'],
    ['Symbol for a cell?', 'A long thin line (+) and a short thick line (−).'],
    ['What is a battery?', 'Two or more cells joined together.'],
    ['Symbol for an ammeter?', 'A circle with A inside.'],
    ['Symbol for a voltmeter?', 'A circle with V inside.'],
    ['Symbol for a resistor?', 'A small rectangle.'],
    ['What does a switch do?', 'Opens or closes (breaks or completes) the circuit.'],
    ['When does current flow?', 'Only in a complete circuit.'],
    ['What is a conductor?', 'A material that lets current flow easily (e.g. metals).'],
    ['★ What is a short circuit?', 'A very low-resistance path, causing a dangerously large current.']
  ],
  quiz: [
    { q: 'A circle with a cross inside is the symbol for a', o: ['lamp', 'motor', 'ammeter', 'fuse'], x: 'Lamp (bulb).' },
    { q: 'A battery is', o: ['two or more cells joined together', 'one cell', 'a type of lamp', 'a switch'], x: 'In physics, a battery is several cells.' },
    { q: 'On a cell symbol, the longer line is the', o: ['positive terminal', 'negative terminal', 'switch', 'wire'], x: 'Long = +.' },
    { q: 'Current flows only when the circuit is', o: ['complete', 'broken', 'open', 'cut'], x: 'A closed loop.' },
    { q: 'Which is an electrical insulator?', o: ['plastic', 'copper', 'iron', 'graphite'], x: 'Plastic does not conduct.' },
    { q: 'A circle with M inside is the symbol for a', o: ['motor', 'meter', 'magnet', 'microphone'], x: 'Motor.' },
    { q: 'A rectangle with an arrow through it is a', o: ['variable resistor', 'fuse', 'lamp', 'cell'], x: 'Its resistance can be changed.' },
    { q: 'Where wires join on a circuit diagram you draw', o: ['a dot', 'a gap', 'a cross', 'a circle'], x: 'A junction.' },
    { q: 'A fuse protects a circuit by', o: ['melting when the current is too big', 'storing energy', 'making the current bigger', 'switching on lights'], x: 'It breaks the circuit.', ch: 1 }
  ],
  exam: [
    { q: 'A student builds a circuit with a cell, a switch, a lamp and an ammeter all in one loop.', tag: '', parts: [
      { q: 'Draw the circuit diagram using the correct symbols.', m: 3, ms: ['correct cell and switch symbols', 'correct lamp and ammeter symbols', 'all in one complete loop / series, no gaps'] },
      { q: 'The switch is opened. What happens to the lamp? Explain.', m: 2, ms: ['lamp goes out', 'circuit is broken / incomplete, so no current flows'] }
    ] },
    { q: 'Name the components represented by: (a) a circle with V inside; (b) a rectangle; (c) a rectangle with a line through it lengthways.', m: 3, ms: ['(a) voltmeter', '(b) resistor', '(c) fuse'] }
  ],
  sims: ['k_ohm'], gens: []
});

TOPICS.push({
  id: '9.2', unit: '9', title: 'Current and potential difference', short: 'Ammeters, voltmeters and models',
  summary: 'Current is the flow of electric charge, measured in amps with an ammeter placed in series. Potential difference (voltage) is the push that drives the current and the energy each charge carries; it is measured in volts with a voltmeter placed in parallel.',
  spec: [
    'I can describe current as a flow of charge, measured in amps (A) with an ammeter in series',
    'I can describe potential difference (voltage) as the push from the cell and the energy transferred, measured in volts (V) with a voltmeter in parallel',
    'I can explain that current is not used up in a circuit',
    'I can use a model (such as the rope or water model) to explain current and potential difference',
    '★ I can explain what happens to the energy carried by the charges'
  ],
  learn: [
    { h: 'Current', html: `
<p>An electric <b>current</b> is a <b>flow of charge</b>. In metal wires, the charges are tiny particles called <b>electrons</b>. Current is measured in <b>amps (A)</b>, or milliamps (mA): 1 A = 1000 mA.</p>
<p>Measure current with an <b>ammeter</b>, connected <b>in series</b> — in the loop, so the current flows <b>through</b> it.</p>
<div class="box def"><b class="lbl">Current is not used up</b><p>In a single loop, the current is the <b>same everywhere</b> — before a lamp and after it. The charges are not used up; they carry <b>energy</b> from the cell to the components and return to the cell.</p></div>` },
    { h: 'Potential difference', html: `
[[d:meters]]
<p><b>Potential difference</b> (p.d., or <b>voltage</b>) is the “push” that drives the current around the circuit. It tells you how much <b>energy</b> is transferred by the charge. It is measured in <b>volts (V)</b>.</p>
<p>Measure p.d. with a <b>voltmeter</b> connected <b>in parallel</b> — <b>across</b> a component, one lead on each side, to compare the two ends.</p>
<p>A cell might provide 1.5 V; a bigger p.d. gives a bigger push and a bigger current (for the same components).</p>` },
    { h: 'Models of a circuit', html: `
[[d:ropemodel]]
<p><b>The rope model:</b> a loop of rope passes through everyone’s hands. The teacher (the <b>cell</b>) pulls it round; the rope moves at the same speed everywhere (the <b>current</b> is the same everywhere). A student gripping the rope (a <b>lamp</b> or <b>resistor</b>) feels their hands get warm — energy is transferred there. Gripping harder is like a bigger <b>resistance</b>: the rope slows down (less current).</p>
<p><b>The water model:</b> a pump (cell) pushes water (charge) round pipes; the pressure difference is like p.d.; a narrow pipe is like a resistor.</p>
<div class="box why"><b class="lbl">★ Where does the energy go?</b><p>The cell transfers energy from its <b>chemical store</b> to the charges. The charges transfer this energy to the components — in a lamp, to light and to the thermal store of the surroundings. The p.d. across the lamp tells you how much energy each unit of charge gives it.</p></div>` }
  ],
  eqs: [['1 "A" = 1000 "mA"', 'amps and milliamps']],
  worked: [
    { q: 'An ammeter before a lamp reads 0.3 A. What will an ammeter after the lamp read? Explain.', s: ['It will also read 0.3 A.', 'In a single loop (series circuit) the current is the same everywhere.', 'Charge is not used up by the lamp — energy is transferred.'], a: '0.3 A' },
    { q: 'How should you connect a voltmeter to measure the p.d. across a lamp?', s: ['In parallel with the lamp.', 'One lead on each side of the lamp, across it — not in the main loop.'], a: 'in parallel, across the lamp' }
  ],
  pitfalls: ['Saying current is used up by a lamp.', 'Connecting a voltmeter in series or an ammeter in parallel.', 'Mixing up the units: current in A, p.d. in V.', 'Saying p.d. flows — current flows; p.d. is across components.'],
  cards: [
    ['What is current?', 'A flow of charge (electrons in wires).'],
    ['Unit of current?', 'Amp (A).'],
    ['What measures current and how is it connected?', 'An ammeter, in series.'],
    ['What is potential difference?', 'The push that drives current / the energy transferred by the charge.'],
    ['Unit of potential difference?', 'Volt (V).'],
    ['What measures p.d. and how is it connected?', 'A voltmeter, in parallel (across the component).'],
    ['Is current used up by a lamp?', 'No — it is the same all round a series circuit.'],
    ['1 A in mA?', '1000 mA.'],
    ['★ In the rope model, what is the rope moving?', 'The current (flow of charge).']
  ],
  quiz: [
    { q: 'Current is measured in', o: ['amps', 'volts', 'ohms', 'newtons'], x: 'A.' },
    { q: 'An ammeter must be connected', o: ['in series', 'in parallel', 'across the cell only', 'anywhere outside the circuit'], x: 'Current flows through it.' },
    { q: 'A voltmeter must be connected', o: ['in parallel across the component', 'in series', 'with no wires', 'only next to the switch'], x: 'It compares two points.' },
    { q: 'The current before a lamp is 0.2 A. After the lamp it is', o: ['0.2 A', '0 A', '0.1 A', '0.4 A'], x: 'Not used up.' },
    { q: 'Potential difference is measured in', o: ['volts', 'amps', 'watts', 'joules'], x: 'V.' },
    { q: 'In metal wires, the charges that move are', o: ['electrons', 'protons', 'atoms', 'neutrons'], x: 'Tiny negative particles.' },
    { q: '250 mA is', o: ['0.25 A', '25 A', '2.5 A', '250 A'], x: '÷ 1000.' },
    { q: 'In the rope model, a person gripping the rope tightly represents', o: ['a resistance', 'the cell', 'the current', 'a switch'], x: 'Friction transfers energy.', ch: 1 }
  ],
  exam: [
    { q: 'A student sets up a circuit with a cell and a lamp. She wants to measure the current through the lamp and the potential difference across it.', tag: 'prac', parts: [
      { q: 'Name the meter used to measure current and state how it is connected.', m: 2, ms: ['ammeter', 'in series (with the lamp)'] },
      { q: 'Name the meter used to measure potential difference and state how it is connected.', m: 2, ms: ['voltmeter', 'in parallel / across the lamp'] },
      { q: 'She says “the current is used up by the lamp, so it will be smaller after the lamp.” Explain why she is wrong.', m: 2, ms: ['the current is the same everywhere in a series circuit', 'charge is not used up; energy is transferred to the lamp'] }
    ] },
    { q: 'Explain how the rope model represents a simple circuit with a cell and a lamp.', tag: 'ext', m: 4, ms: ['person pulling the rope = the cell (provides the push / p.d.)', 'moving rope = the current / flow of charge', 'person gripping the rope = the lamp / resistance', 'their hands warm up = energy transferred in the lamp; rope moves at the same speed everywhere = current same everywhere'] }
  ],
  sims: ['k_ohm'], gens: ['ma1']
});

TOPICS.push({
  id: '9.3', unit: '9', title: 'Series and parallel circuits', short: 'Rules for current and potential difference',
  summary: 'In a series circuit the components are in one loop: the current is the same everywhere and the potential difference is shared. In a parallel circuit there are branches: each branch gets the full potential difference and the currents in the branches add up.',
  spec: [
    'I can identify series and parallel circuits',
    'I can state that current is the same everywhere in a series circuit and that the p.d. of the supply is shared between the components',
    'I can state that in a parallel circuit the branch currents add up to the total current and each branch has the full supply p.d.',
    'I can explain why lights in a house are wired in parallel',
    '★ I can calculate missing currents and p.d.s in series and parallel circuits'
  ],
  learn: [
    { h: 'Series circuits', html: `
[[d:k_series]]
<p>In a <b>series</b> circuit all the components are in <b>one loop</b>.</p>
<ul><li><b>Current</b>: the <b>same</b> at every point.</li><li><b>Potential difference</b>: the supply p.d. is <b>shared</b> between the components. 6 V supply → e.g. 2 V + 4 V.</li><li>Adding more lamps makes each one <b>dimmer</b> (the current falls and the p.d. is shared more ways).</li><li>If one lamp breaks, the circuit is broken and <b>all</b> the lamps go out.</li></ul>` },
    { h: 'Parallel circuits', html: `
[[d:k_parallel]]
<p>In a <b>parallel</b> circuit there are <b>branches</b>; the current splits at a junction and joins up again.</p>
<ul><li><b>Current</b>: the branch currents <b>add up</b> to the total current from the supply. 0.5 A + 0.3 A = 0.8 A.</li><li><b>Potential difference</b>: each branch gets the <b>full supply p.d.</b></li><li>Adding lamps in parallel: each stays <b>just as bright</b>, but the cell supplies more current, so it runs down faster.</li><li>If one lamp breaks, the others <b>stay on</b>. Each branch can have its own switch.</li></ul>` },
    { h: 'Why homes use parallel circuits', html: `
<ul><li>Each light and socket gets the <b>full mains p.d.</b> (230 V) and works properly.</li><li>They can be <b>switched on and off independently</b>.</li><li>If one bulb blows, the <b>others stay on</b>.</li></ul>
<p>Old-fashioned Christmas tree lights were wired in series — when one bulb failed, they all went out, and you had to test every bulb to find the broken one!</p>
<div class="box why"><b class="lbl">★ Quick rules</b><p>Series: $I$ same everywhere; $V_{"supply"} = V_1 + V_2 + …$ &nbsp; Parallel: $I_{"total"} = I_1 + I_2 + …$; $V$ same across each branch.</p></div>` }
  ],
  eqs: [['V_{"supply"} = V_1 + V_2', 'series: p.d. is shared'], ['I_{"total"} = I_1 + I_2', 'parallel: branch currents add up']],
  worked: [
    { q: 'Two lamps are in series with a 9 V battery. The p.d. across lamp 1 is 4 V. What is the p.d. across lamp 2?', s: ['Series: the supply p.d. is shared.', '$V_2 = 9 - 4$', '$V_2 = 5 "V"$'], a: '5 V' },
    { q: 'Three identical lamps are in parallel. The total current from the cell is 0.9 A. What is the current in each lamp?', s: ['Parallel: branch currents add up to the total.', 'Identical lamps share equally: 0.9 ÷ 3', '= 0.3 A each'], a: '0.3 A' }
  ],
  pitfalls: ['Saying the current is shared in series — the p.d. is shared; current is the same.', 'Saying the p.d. is shared in parallel — each branch gets the full p.d.', 'Forgetting that adding branches increases the total current.', 'Drawing a “parallel” circuit where both lamps are actually in the same branch.'],
  cards: [
    ['Current in a series circuit?', 'The same everywhere.'],
    ['P.d. in a series circuit?', 'Shared between the components (adds up to the supply p.d.).'],
    ['Current in a parallel circuit?', 'Splits; branch currents add up to the total.'],
    ['P.d. in a parallel circuit?', 'Each branch has the full supply p.d.'],
    ['What happens in series if one lamp breaks?', 'All the lamps go out.'],
    ['What happens in parallel if one lamp breaks?', 'The others stay on.'],
    ['Why are houses wired in parallel?', 'Full p.d. to each device; independent switches; one failing does not stop the others.'],
    ['Adding lamps in series makes them…', 'dimmer.'],
    ['★ Branches of 0.2 A and 0.6 A: total current?', '0.8 A.']
  ],
  quiz: [
    { q: 'In a series circuit, the current', o: ['is the same everywhere', 'is shared between components', 'is biggest after the lamps', 'is zero'], x: 'One loop.' },
    { q: 'In a parallel circuit, each branch has', o: ['the full supply p.d.', 'half the p.d.', 'no p.d.', 'double the p.d.'], x: 'Same p.d. across each branch.' },
    { q: 'Two lamps in series with a 6 V cell. Lamp 1 has 2.5 V. Lamp 2 has', o: ['3.5 V', '8.5 V', '6 V', '2.5 V'], x: '6 − 2.5.' },
    { q: 'Branch currents of 0.4 A and 0.4 A. The total current is', o: ['0.8 A', '0.4 A', '0.2 A', '0 A'], x: 'They add.' },
    { q: 'If one bulb breaks in a series circuit', o: ['all the bulbs go out', 'the others get brighter', 'nothing changes', 'only that one goes out'], x: 'The loop is broken.' },
    { q: 'Lights in a house are wired in parallel so that', o: ['each can be switched on and off separately', 'they share the p.d.', 'they are dimmer', 'they use less wire'], x: 'Independent control.' },
    { q: 'Adding a third lamp in series with two others makes all the lamps', o: ['dimmer', 'brighter', 'the same', 'go out'], x: 'Less current, shared p.d.' },
    { q: 'Total current 1.5 A; one branch 0.9 A. The other branch carries', o: ['0.6 A', '2.4 A', '1.5 A', '0.9 A'], x: '1.5 − 0.9.' },
    { q: 'Three identical lamps in parallel draw 1.2 A in total. Each carries', o: ['0.4 A', '1.2 A', '3.6 A', '0.3 A'], x: 'Share equally.', ch: 1 }
  ],
  exam: [
    { q: 'Circuit X has two identical lamps in series with a 6.0 V battery. Circuit Y has two identical lamps in parallel with a 6.0 V battery.', tag: '', parts: [
      { q: 'What is the p.d. across each lamp in circuit X?', m: 1, ms: ['3.0 V'] },
      { q: 'What is the p.d. across each lamp in circuit Y?', m: 1, ms: ['6.0 V'] },
      { q: 'In which circuit are the lamps brighter? Explain.', m: 2, ms: ['Y (parallel)', 'each lamp has the full 6 V / bigger p.d. and current'] },
      { q: 'One lamp in each circuit is unscrewed. Describe what happens to the other lamp in each circuit.', m: 2, ms: ['X: other lamp goes out (circuit broken)', 'Y: other lamp stays on (its branch is still complete)'] }
    ] },
    { q: 'In a parallel circuit, the ammeter by the cell reads 1.2 A. The current in branch A is 0.5 A.', tag: 'calc', parts: [
      { q: 'Calculate the current in branch B.', m: 2, ms: ['1.2 − 0.5', '= 0.7 A'] },
      { q: 'A third branch is added with a current of 0.4 A. What does the ammeter by the cell now read?', m: 1, ms: ['1.6 A'] }
    ] }
  ],
  sims: ['k_serpar'], gens: ['ser1', 'par1']
});

TOPICS.push({
  id: '9.4', unit: '9', title: 'Resistance', short: 'R = V ÷ I; practical: resistance of a wire',
  summary: 'Resistance measures how much a component opposes the current. Resistance = potential difference ÷ current, in ohms (Ω). A longer or thinner wire has more resistance — which you can show by measuring the current and p.d. for different lengths of wire.',
  spec: [
    'I can describe resistance as opposition to current, measured in ohms (Ω)',
    'I can recall and use resistance = potential difference ÷ current (R = V ÷ I)',
    'I can explain how the length and thickness of a wire affect its resistance',
    'I can investigate how the length of a wire affects its resistance using an ammeter and voltmeter',
    '★ I can explain resistance using electrons colliding with metal ions, and why resistance makes wires warm'
  ],
  learn: [
    { h: 'What is resistance?', html: `
<p><b>Resistance</b> tells you how hard it is for current to flow through a component. A bigger resistance means a <b>smaller current</b> for the same p.d. It is measured in <b>ohms (Ω)</b>.</p>
<div class="box def"><b class="lbl">Learn this</b><p>$"resistance" = @frac{"potential difference"}{"current"}$ &nbsp; &nbsp; $R = @frac{V}{I}$</p><p>R in ohms (Ω), V in volts (V), I in amps (A)</p></div>
[[d:tri_ohm]]
<p>Rearranged: $V = I × R$ and $I = @frac{V}{R}$. Example: 6 V across a lamp with 0.5 A through it → R = 6 ÷ 0.5 = 12 Ω.</p>` },
    { h: 'What affects the resistance of a wire?', html: `
<ul><li><b>Length</b>: a longer wire has <b>more</b> resistance (double the length, double the resistance).</li><li><b>Thickness</b>: a thinner wire has <b>more</b> resistance.</li><li><b>Material</b>: copper has very low resistance (used for wires); nichrome and constantan have higher resistance (used in heaters and resistors).</li><li><b>Temperature</b>: most metals have more resistance when hot.</li></ul>` },
    { h: 'Practical: length of a wire and its resistance', html: `
[[d:wirerig]]
<ol><li>Tape a length of thin constantan (or nichrome) wire along a metre rule.</li><li>Connect it in series with a cell (or low-voltage supply) and an ammeter, using two <b>crocodile clips</b> on the wire. Connect a voltmeter in parallel across the clipped length.</li><li>Set the clips 10 cm apart. Switch on, read the current and p.d., switch off.</li><li>Repeat for 20, 30 … 100 cm.</li><li>Calculate R = V ÷ I for each length. Plot resistance (y-axis) against length (x-axis).</li></ol>
<p><b>Result:</b> a straight line through the origin — resistance is <b>proportional</b> to length.</p>
<div class="box warn"><b class="lbl">Safety</b><p>Use a low p.d.; switch off between readings (the wire gets <b>hot</b>, which also changes its resistance). Do not touch the wire while the current is on.</p></div>
<div class="box why"><b class="lbl">★ Why is there resistance?</b><p>As electrons flow through a metal they <b>collide</b> with the metal ions (atoms), which gets in their way and transfers energy to the thermal store — the wire warms up. A longer wire means more collisions; a thinner wire means fewer paths for the electrons.</p></div>` }
  ],
  eqs: [['R = @frac{V}{I}', 'resistance (Ω) = p.d. (V) ÷ current (A)'], ['V = I × R', 'p.d. = current × resistance']],
  worked: [
    { q: 'The p.d. across a resistor is 12 V and the current is 0.4 A. Calculate its resistance.', s: ['$R = @frac{V}{I}$', '$R = @frac{12}{0.4}$', '$R = 30 "Ω"$'], a: '30 Ω' },
    { q: 'A 20 Ω resistor is connected to a 5 V cell. What current flows?', s: ['$I = @frac{V}{R}$', '$I = @frac{5}{20}$', '$I = 0.25 "A"$'], a: '0.25 A' },
    { q: 'A 50 cm length of wire has a resistance of 4 Ω. Predict the resistance of 1.5 m of the same wire.', s: ['Resistance is proportional to length.', '1.5 m = 150 cm = 3 × 50 cm', 'R = 3 × 4 = 12 Ω'], a: '12 Ω' }
  ],
  pitfalls: ['Calculating I ÷ V instead of V ÷ I.', 'Using mA without converting to A.', 'Leaving the current on so the wire heats up and changes resistance.', 'Saying a thicker wire has more resistance — it has less.'],
  cards: [
    ['What is resistance?', 'Opposition to the current.'],
    ['Unit of resistance?', 'Ohm (Ω).'],
    ['Resistance equation?', '$R = V ÷ I$'],
    ['p.d. equation?', '$V = I × R$'],
    ['How does length affect a wire’s resistance?', 'Longer → more resistance (proportional).'],
    ['How does thickness affect a wire’s resistance?', 'Thinner → more resistance.'],
    ['Why switch off between readings in the wire practical?', 'The wire heats up, which changes its resistance (and could burn you).'],
    ['R for 3 V and 0.1 A?', '30 Ω.'],
    ['★ What causes resistance in a metal?', 'Electrons colliding with metal ions.']
  ],
  quiz: [
    { q: 'Resistance is measured in', o: ['ohms (Ω)', 'amps', 'volts', 'watts'], x: 'Ω.' },
    { q: 'R = V ÷ I. A 10 V p.d. and a 2 A current give', o: ['5 Ω', '20 Ω', '12 Ω', '0.2 Ω'], x: '10 ÷ 2.' },
    { q: 'A longer wire has', o: ['more resistance', 'less resistance', 'the same resistance', 'no resistance'], x: 'More collisions.' },
    { q: 'Increasing the resistance in a circuit (same p.d.) makes the current', o: ['smaller', 'bigger', 'the same', 'reverse'], x: 'I = V ÷ R.' },
    { q: 'A 6 Ω resistor carries 2 A. The p.d. across it is', o: ['12 V', '3 V', '8 V', '0.33 V'], x: 'V = I × R.' },
    { q: 'A thicker wire of the same material and length has', o: ['less resistance', 'more resistance', 'the same resistance', 'infinite resistance'], x: 'More room for current.' },
    { q: 'In the wire investigation, the independent variable is', o: ['the length of the wire', 'the current', 'the p.d.', 'the resistance'], x: 'You change the length.' },
    { q: '150 mA through a 20 Ω resistor. The p.d. is', o: ['3 V', '3000 V', '133 V', '0.13 V'], x: '0.15 × 20.' },
    { q: 'Resistance in a metal is caused by', o: ['electrons colliding with metal ions', 'protons blocking the wire', 'air in the wire', 'the plastic coating'], x: 'Collisions transfer energy.', ch: 1 }
  ],
  exam: [
    { q: 'A student investigates how the length of a wire affects its resistance. Results: 20 cm: V = 0.6 V, I = 0.30 A; 40 cm: V = 1.2 V, I = 0.30 A; 60 cm: V = 1.8 V, I = 0.30 A; 80 cm: V = 2.4 V, I = 0.30 A.', tag: 'prac', parts: [
      { q: 'Calculate the resistance of the 60 cm length.', m: 2, ms: ['1.8 ÷ 0.30', '= 6 Ω'] },
      { q: 'Calculate the resistance of each of the other lengths.', m: 1, ms: ['2 Ω, 4 Ω, 8 Ω'] },
      { q: 'Describe the relationship between length and resistance.', m: 2, ms: ['resistance increases as length increases', 'proportional / doubling length doubles resistance'] },
      { q: 'Explain why the student should switch off the current between readings.', m: 2, ms: ['the wire heats up', 'which would change the resistance / make it unfair / could burn'] }
    ] },
    { q: 'A lamp has a resistance of 24 Ω and is connected to a 12 V supply.', tag: 'calc', parts: [
      { q: 'Calculate the current in the lamp.', m: 2, ms: ['12 ÷ 24', '= 0.5 A'] },
      { q: 'A second identical lamp is added in series. Explain what happens to the current.', m: 2, ms: ['total resistance increases / doubles', 'so the current decreases / halves (0.25 A)'], ch: 1 }
    ] }
  ],
  sims: ['wire', 'k_ohm'], gens: ['ohm1', 'ohm2', 'ohm3', 'wire1']
});

TOPICS.push({
  id: '9.5', unit: '9', title: 'One-way and two-way switches', short: 'Controlling circuits; landing lights',
  summary: 'A one-way switch simply opens or closes a circuit. A two-way switch connects one wire to either of two others. Two two-way switches let you turn a light on or off from either end of a staircase.',
  spec: [
    'I can explain how a one-way switch controls a circuit',
    'I can place switches to control all or part of a parallel circuit',
    'I can describe what a two-way switch does',
    'I can explain how two two-way switches control a landing light from upstairs or downstairs',
    '★ I can use truth tables for switches in series (AND) and parallel (OR)'
  ],
  learn: [
    { h: 'One-way switches', html: `
<p>A <b>one-way switch</b> has two terminals. <b>Closed</b> (on): it completes the circuit and current flows. <b>Open</b> (off): it makes a gap and the current stops.</p>
<ul><li>A switch <b>in the main part</b> of a circuit (next to the cell) controls <b>everything</b>.</li><li>A switch <b>in a branch</b> of a parallel circuit controls <b>only that branch</b> — like separate light switches for each room.</li></ul>` },
    { h: 'Two-way switches and the staircase light', html: `
[[d:twoway]]
<p>A <b>two-way switch</b> has <b>three</b> terminals. It connects its <b>common</b> terminal to <b>either</b> the upper <b>or</b> the lower contact — it is never fully “off”, it just changes the route.</p>
<p>For a staircase, put one two-way switch at the bottom and one at the top, joined by <b>two wires</b>:</p>
<ul><li>Both switches pointing to the <b>same</b> wire → complete circuit → light <b>on</b>.</li><li>Pointing to <b>different</b> wires → gap → light <b>off</b>.</li><li>Flicking <b>either</b> switch changes the state, so you can turn the light on downstairs and off again upstairs.</li></ul>` },
    { h: '★ Switches as logic', html: `
<p><b>Two switches in series</b> (AND): the lamp is on only if switch A <b>and</b> switch B are closed — like a machine that needs two buttons pressed for safety.</p>
<p><b>Two switches in parallel</b> (OR): the lamp is on if A <b>or</b> B (or both) are closed — like a bell with a push button at the front and the back door.</p>
<div class="tbl"><table><tr><th>A</th><th>B</th><th>Series (AND)</th><th>Parallel (OR)</th><th>Two-way pair</th></tr><tr><td>off/down</td><td>off/down</td><td>off</td><td>off</td><td>on</td></tr><tr><td>on/up</td><td>off/down</td><td>off</td><td>on</td><td>off</td></tr><tr><td>off/down</td><td>on/up</td><td>off</td><td>on</td><td>off</td></tr><tr><td>on/up</td><td>on/up</td><td>on</td><td>on</td><td>on</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Two lamps are in parallel. Where should switches go so that each lamp can be turned on and off separately?', s: ['Put one switch in each branch, in series with its own lamp.', 'Each switch then opens or closes only its own branch.', '(A switch next to the cell would control both lamps.)'], a: 'one switch in each branch' },
    { q: 'A landing light is on. Someone flicks the top switch. What happens, and what if someone then flicks the bottom switch?', s: ['Flicking the top switch changes it to the other wire, so the switches now point to different wires → gap → light off.', 'Flicking the bottom switch makes them match again → complete circuit → light on.'], a: 'off, then on again' }
  ],
  pitfalls: ['Putting a branch switch next to the cell — it then controls every branch.', 'Thinking a two-way switch has an “off” position — it only chooses between two routes.', 'Drawing only one wire between the two staircase switches — you need two.', 'Mixing up AND (series) and OR (parallel).'],
  cards: [
    ['What does a one-way switch do?', 'Opens or closes a single path in a circuit.'],
    ['Where should a switch go to control every lamp?', 'In the main part of the circuit (next to the cell).'],
    ['Where should a switch go to control one lamp in a parallel circuit?', 'In that lamp’s branch.'],
    ['How many terminals does a two-way switch have?', 'Three.'],
    ['What are two-way switches used for at home?', 'Controlling a landing/staircase light from upstairs and downstairs.'],
    ['When is a two-way staircase light on?', 'When both switches connect to the same linking wire.'],
    ['★ Two switches in series act like…', 'AND — both must be closed.'],
    ['★ Two switches in parallel act like…', 'OR — either one closed works.']
  ],
  quiz: [
    { q: 'In a parallel circuit, a switch in one branch controls', o: ['only that branch', 'every branch', 'nothing', 'only the cell'], x: 'Its own branch.' },
    { q: 'A two-way switch has', o: ['three terminals', 'two terminals', 'one terminal', 'four terminals'], x: 'Common + two contacts.' },
    { q: 'Two-way switches are used on stairs so that', o: ['the light can be switched from either end', 'the light is brighter', 'less wire is needed', 'the light never turns off'], x: 'Top or bottom.' },
    { q: 'A switch next to the cell in a parallel circuit controls', o: ['all the lamps', 'one lamp', 'no lamps', 'only the lamp furthest away'], x: 'Main part of the circuit.' },
    { q: 'A staircase light is off. Flicking either two-way switch will', o: ['turn it on', 'keep it off', 'blow the fuse', 'make it dimmer'], x: 'Either switch changes the state.' },
    { q: 'Two switches in series: the lamp is on when', o: ['both are closed', 'either is closed', 'both are open', 'one is open'], x: 'AND.' },
    { q: 'A doorbell with a button at the front and back door uses switches in', o: ['parallel', 'series', 'neither', 'a two-way pair'], x: 'Either button works: OR.' },
    { q: 'A machine must only start when a worker presses two buttons at once, keeping both hands safe. The buttons should be in', o: ['series', 'parallel', 'a two-way pair', 'the lamp'], x: 'AND logic.', ch: 1 }
  ],
  exam: [
    { q: 'A house has a light on the landing above the stairs. It is controlled by a switch at the bottom of the stairs and a switch at the top.', tag: '', parts: [
      { q: 'Name the type of switch used.', m: 1, ms: ['two-way switch'] },
      { q: 'Explain how the switches allow the light to be turned on at the bottom and off at the top.', m: 3, ms: ['each switch connects to one of two wires joining them', 'when both switches connect to the same wire the circuit is complete and the lamp is on', 'changing either switch breaks the circuit / changing either switch changes whether the lamp is on'] }
    ] },
    { q: 'Draw a circuit with a cell, two lamps in parallel and three switches, so that one switch controls both lamps and each of the other switches controls one lamp only.', tag: '', m: 3, ms: ['lamps in parallel branches', 'one switch in the main part (by the cell)', 'one switch in each branch in series with its lamp'] }
  ],
  sims: ['switches'], gens: []
});
