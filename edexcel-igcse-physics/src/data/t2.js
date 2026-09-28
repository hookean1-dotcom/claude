/* ==========================================================
   TOPIC 2 · ELECTRICITY
   ========================================================== */
TOPICS.push({
  id: '2.1', unit: '2', ref: '2.2, 2.6', title: 'Mains electricity and safety', short: 'a.c./d.c., fuses, earthing, double insulation',
  summary: 'The difference between a.c. mains and d.c. from cells, and how insulation, double insulation, earthing, fuses and circuit breakers protect appliances and users.',
  spec: [
    '2.2 understand how the use of insulation, double insulation, earthing, fuses and circuit breakers protects the device or user in a range of domestic appliances',
    '2.6 know the difference between mains electricity being alternating current (a.c.) and direct current (d.c.) being supplied by a cell or battery'
  ],
  learn: [
    { h: 'a.c. and d.c.', html: `
[[d:acdc]]
<ul><li><b>Direct current (d.c.)</b> flows in one direction only — supplied by cells and batteries. On an oscilloscope/voltage–time graph it is a horizontal line.</li><li><b>Alternating current (a.c.)</b> repeatedly reverses direction — mains electricity. In the UK the mains supply is about 230 V at 50 Hz (many countries use 110–240 V at 50 or 60 Hz).</li></ul>` },
    { h: 'Wiring and safety devices', html: `
[[d:plug]]
<div class="tbl"><table><tr><th>Wire / device</th><th>What it does</th></tr>
<tr><td><b>Live</b> (brown)</td><td>carries the alternating voltage from the supply; the dangerous wire</td></tr>
<tr><td><b>Neutral</b> (blue)</td><td>completes the circuit; at or near 0 V</td></tr>
<tr><td><b>Earth</b> (green and yellow)</td><td>a safety wire connecting the metal case to the ground</td></tr>
<tr><td><b>Insulation</b></td><td>plastic/rubber coating on wires and plastic casings stop people touching live conductors</td></tr>
<tr><td><b>Fuse</b></td><td>a thin wire in the <b>live</b> line that <b>melts</b> if the current is too large, breaking the circuit</td></tr>
<tr><td><b>Circuit breaker</b></td><td>an automatic switch in the live line that trips when the current is too large; can be reset, and acts faster than a fuse</td></tr>
<tr><td><b>Earthing</b></td><td>if the live wire touches a metal case, a large current flows to earth through the low-resistance earth wire, blowing the fuse/tripping the breaker — so the case does not stay live</td></tr>
<tr><td><b>Double insulation</b></td><td>appliances with a plastic (non-conducting) casing and no exposed metal cannot become live, so need no earth wire (symbol: a square inside a square)</td></tr></table></div>
<p>Fuses and breakers are placed in the <b>live</b> wire so that when they break the circuit, the appliance is disconnected from the high voltage.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'A metal kettle develops a fault: the live wire touches its metal casing. Explain how the earth wire and fuse protect the user.', s: ['Current flows from live, through the case, down the low-resistance earth wire.', 'This large current exceeds the fuse rating, so the fuse melts.', 'The live supply is disconnected, so the case is no longer live and cannot give a shock.'], a: 'Earth provides a low-resistance path; fuse melts and isolates the live supply.' }
  ],
  pitfalls: ['Saying the fuse protects the user from all shocks — it mainly protects wiring/appliances; the earth + fuse together protect the user.', 'Putting the fuse in the neutral wire.', 'Saying double-insulated appliances need an earth wire.'],
  cards: [
    ['a.c. vs d.c.?', 'a.c. repeatedly reverses direction (mains); d.c. flows one way (cells, batteries).'],
    ['Colour of live, neutral, earth?', 'Brown, blue, green-and-yellow.'],
    ['How does a fuse work?', 'Thin wire melts when current too large, breaking the circuit.'],
    ['Why is the fuse in the live wire?', 'So the appliance is disconnected from the high voltage when it blows.'],
    ['Advantage of a circuit breaker over a fuse?', 'Faster, and can be reset.'],
    ['What is double insulation?', 'Plastic casing with no exposed metal — cannot become live, so no earth wire needed.'],
    ['What does the earth wire do?', 'Provides a low-resistance path to ground from a metal case so a fault current blows the fuse.']
  ],
  quiz: [
    { q: 'Mains electricity is', o: ['alternating current', 'direct current', 'always 12 V', 'supplied by batteries'], x: 'a.c.' },
    { q: 'The fuse is connected in the', o: ['live wire', 'neutral wire', 'earth wire', 'plastic casing'], x: 'Isolates the supply.' },
    { q: 'An appliance with a plastic case and no earth wire is', o: ['double insulated', 'earthed', 'unsafe', 'd.c. only'], x: 'Cannot become live.' },
    { q: 'The earth wire is connected to', o: ['the metal case of the appliance', 'the fuse only', 'the neutral terminal', 'the plastic casing'], x: 'Safety path.' },
    { q: 'A circuit breaker', o: ['can be reset after it trips', 'melts when it operates', 'is in the neutral wire', 'only works with d.c.'], x: 'Automatic switch.' },
    { q: 'A battery supplies', o: ['direct current', 'alternating current', '230 V a.c.', 'mains electricity'], x: 'One direction.' }
  ],
  exam: [
    { q: 'An electric heater has a metal case and is connected to the mains with a three-core cable.', tag: 'ext', parts: [
      { q: 'Name the three wires in the cable and state which one carries the alternating voltage.', m: 2, ms: ['live, neutral and earth', 'live carries the alternating voltage'] },
      { q: 'Explain how the earth wire and the fuse together make the heater safe if the live wire touches the metal case.', m: 4, ms: ['earth wire connects case to ground / low resistance path', 'large current flows (from live to earth)', 'current greater than fuse rating so fuse melts', 'live supply disconnected so case not live / user not electrocuted'] },
      { q: 'A hair dryer has a plastic case and only two wires. Explain why it is still safe.', m: 2, ms: ['it is double insulated', 'no exposed metal parts can become live / casing does not conduct'] }
    ] },
    { q: 'State two differences between the current from a battery and the current from the mains.', m: 2, ms: ['battery: d.c. (one direction); mains: a.c. (reverses direction)', 'mains has a much higher voltage (≈ 230 V) / frequency 50 Hz'] }
  ],
  sims: ['plug', 'acdc'], gens: []
});

TOPICS.push({
  id: '2.2', unit: '2', ref: '2.3–2.5', title: 'Electrical power and energy', short: 'Heating effect, P = IV, E = IVt, fuse ratings',
  summary: 'Why a current in a resistor heats it and how this is used at home; power P = IV and how to choose a fuse; energy transferred E = IVt.',
  spec: [
    '2.3 understand why a current in a resistor results in the electrical transfer of energy and an increase in temperature, and how this can be used in a variety of domestic contexts',
    '2.4 know and use the relationship between power, current and voltage: P = I × V, and apply the relationship to the selection of appropriate fuses',
    '2.5 use the relationship between energy transferred, current, voltage and time: E = I × V × t'
  ],
  learn: [
    { h: 'The heating effect', html: `
<p>When a current flows through a resistor, the electrons collide with the ions (atoms) of the metal lattice. Energy is transferred <b>electrically</b> from the supply to the <b>thermal</b> store of the resistor, so its temperature rises.</p>
<p><b>Useful:</b> electric kettles, toasters, heaters, irons, hair dryers, immersion heaters, electric showers, cookers and the filament of a lamp. <b>Wasteful:</b> heating in cables, chargers and motors. Fuses rely on the heating effect to melt.</p>` },
    { h: 'Power', html: `
<div class="box def"><b class="lbl">Recall</b><p>$"power" = "current" × "voltage"$ &nbsp; $P = I × V$ &nbsp; (W = A × V)</p></div>
<p><b>Choosing a fuse:</b> calculate the normal working current $I = P ÷ V$, then choose the fuse with the <b>next rating above</b> it (common fuses are 3 A, 5 A and 13 A). Too low → it blows in normal use; too high → it won’t protect against a fault.</p>
<p>Example: a 2300 W kettle on 230 V draws 10 A → use a 13 A fuse.</p>` },
    { h: 'Energy transferred', html: `
<div class="box def"><b class="lbl">Given</b><p>$"energy transferred" = "current" × "voltage" × "time"$ &nbsp; $E = I × V × t$ &nbsp; (J = A × V × s)</p></div>
<p>Since P = IV, E = P × t. Remember t must be in <b>seconds</b>.</p>` }
  ],
  eqs: [['P = I × V', 'electrical power (recall)'], ['E = I × V × t', 'energy transferred (given)']],
  worked: [
    { q: 'A 1.2 kW microwave runs on 230 V. Calculate the current and choose a fuse (3 A, 5 A or 13 A).', s: ['P = 1200 W', '$I = @frac{P}{V} = @frac{1200}{230} = 5.2 "A"$', 'Next rating above 5.2 A is 13 A'], a: '5.2 A; 13 A fuse' },
    { q: 'A 12 V car headlamp draws 4.5 A for 20 minutes. Calculate the energy transferred.', s: ['t = 20 × 60 = 1200 s', '$E = IVt = 4.5 × 12 × 1200$', '$E = 64 800 "J"$ ≈ 65 kJ'], a: '65 kJ' }
  ],
  pitfalls: ['Choosing a fuse below the working current.', 'Leaving time in minutes or hours in E = IVt.', 'Forgetting to convert kW to W.'],
  cards: [
    ['Why does a resistor heat up when current flows?', 'Electrons collide with ions in the lattice, transferring energy to the thermal store.'],
    ['Power equation?', '$P = IV$'],
    ['Energy transferred equation?', '$E = IVt$'],
    ['How do you choose a fuse?', 'Calculate I = P/V; choose the next rating above.'],
    ['Three domestic uses of the heating effect?', 'Kettle, toaster, electric heater (also iron, shower, hair dryer).'],
    ['Unit of power?', 'watt (W) = J/s']
  ],
  quiz: [
    { q: 'A 3.0 A current flows from a 230 V supply. The power is', o: ['690 W', '77 W', '233 W', '0.013 W'], x: '3.0 × 230.' },
    { q: 'An 800 W toaster on 230 V should be fitted with which fuse?', o: ['5 A', '3 A', '13 A', '1 A'], x: 'I = 3.5 A.' },
    { q: 'A 60 W lamp is on for 1 minute. Energy transferred?', o: ['3600 J', '60 J', '1 J', '0.017 J'], x: '60 × 60.' },
    { q: 'Energy transferred by 2 A at 6 V for 10 s is', o: ['120 J', '30 J', '1.2 J', '12 J'], x: '2 × 6 × 10.' },
    { q: 'Which appliance mainly uses the heating effect of a current?', o: ['a kettle', 'a fan', 'a radio', 'a phone screen'], x: 'Thermal store.' }
  ],
  exam: [
    { q: 'An electric shower is rated 9.2 kW, 230 V.', tag: 'calc', parts: [
      { q: 'Calculate the current in the shower.', m: 3, ms: ['I = P ÷ V', '= 9200 ÷ 230', '= 40 A'] },
      { q: 'Explain why the shower is connected to its own circuit with a 45 A circuit breaker rather than using a 13 A plug.', m: 2, ms: ['working current (40 A) exceeds 13 A', 'a 13 A fuse would melt/trip in normal use; the breaker must be just above 40 A'] },
      { q: 'Calculate the energy transferred in an 8.0 minute shower.', m: 3, ms: ['t = 480 s', 'E = IVt = 40 × 230 × 480 (or P × t)', '= 4.4 × 10⁶ J'] },
      { q: 'Explain, in terms of particles, why the heating element gets hot.', m: 2, ms: ['electrons collide with ions/atoms in the metal', 'energy transferred to the thermal store / ions vibrate more'] }
    ] },
    { q: 'A laptop charger uses 65 W from a 230 V supply. Show that a 3 A fuse is suitable.', m: 3, ms: ['I = 65 ÷ 230', '= 0.28 A', '3 A is above the working current but not too far above, so it protects in a fault'] }
  ],
  sims: ['ohm'], gens: ['pvi1', 'pvi2', 'ept1', 'ept2']
});

TOPICS.push({
  id: '2.3', unit: '2', ref: '2.1, 2.14–2.16, 2.20–2.21', title: 'Current, charge and voltage', short: 'Q = It, E = QV, electrons',
  summary: 'Electric current as the rate of flow of charge (electrons in metals), Q = It, voltage as energy per unit charge, and E = QV.',
  spec: [
    '2.1 use the following units: ampere (A), coulomb (C), joule (J), ohm (Ω), second (s), volt (V) and watt (W)',
    '2.14 know that current is the rate of flow of charge',
    '2.15 know and use the relationship between charge, current and time: Q = I × t',
    '2.16 know that electric current in solid metallic conductors is a flow of negatively charged electrons',
    '2.20 know that voltage is the energy transferred per unit charge passed, and that the volt is a joule per coulomb',
    '2.21 know and use the relationship between energy transferred, charge and voltage: E = Q × V'
  ],
  learn: [
    { h: 'Current and charge', html: `
<div class="box def"><b class="lbl">Recall</b><p>$"charge" = "current" × "time"$ &nbsp; $Q = I × t$ &nbsp; (C = A × s)</p></div>
<p><b>Current is the rate of flow of charge.</b> 1 ampere = 1 coulomb per second. In <b>metals</b>, current is a flow of <b>negatively charged electrons</b> (free/delocalised electrons) from the negative terminal towards the positive. <b>Conventional current</b> is drawn from + to −.</p>
<p>Current is measured with an <b>ammeter</b> connected in <b>series</b>.</p>` },
    { h: 'Voltage', html: `
<div class="box def"><b class="lbl">Recall</b><p>$"energy transferred" = "charge" × "voltage"$ &nbsp; $E = Q × V$ &nbsp; (J = C × V)</p></div>
<p><b>Voltage is the energy transferred per unit charge passed.</b> <b>1 volt = 1 joule per coulomb.</b> A 6 V battery gives each coulomb 6 J of energy; a lamp with 6 V across it transfers 6 J for each coulomb passing through.</p>
<p>Voltage is measured with a <b>voltmeter</b> connected in <b>parallel</b> across the component.</p>` }
  ],
  eqs: [['Q = I × t', 'charge (recall)'], ['E = Q × V', 'energy transferred (recall)']],
  worked: [
    { q: 'A current of 0.25 A flows for 4.0 minutes. Calculate the charge.', s: ['t = 240 s', '$Q = It = 0.25 × 240$', '$Q = 60 "C"$'], a: '60 C' },
    { q: '60 C passes through a 12 V lamp. How much energy is transferred?', s: ['$E = QV = 60 × 12$', '$E = 720 "J"$'], a: '720 J' }
  ],
  pitfalls: ['Saying current is the flow of positive charge in metals — it is electrons.', 'Connecting voltmeters in series or ammeters in parallel.', 'Forgetting to convert minutes to seconds.'],
  cards: [
    ['What is electric current?', 'The rate of flow of charge.'],
    ['Charge equation?', '$Q = It$'],
    ['Unit of charge?', 'coulomb (C)'],
    ['What carries current in a metal?', 'Negatively charged (free) electrons.'],
    ['Define voltage.', 'Energy transferred per unit charge passed.'],
    ['1 volt = ?', '1 joule per coulomb.'],
    ['Energy, charge and voltage equation?', '$E = QV$'],
    ['How is a voltmeter connected?', 'In parallel across the component.']
  ],
  quiz: [
    { q: 'A charge of 30 C flows in 10 s. The current is', o: ['3 A', '300 A', '0.33 A', '40 A'], x: '30 ÷ 10.' },
    { q: 'Current in a copper wire is a flow of', o: ['electrons', 'protons', 'positive ions', 'neutrons'], x: 'Free electrons.' },
    { q: 'A volt is a', o: ['joule per coulomb', 'coulomb per second', 'joule per second', 'ampere per ohm'], x: 'Definition.' },
    { q: '5 C of charge passes through a 9 V battery. Energy transferred?', o: ['45 J', '1.8 J', '14 J', '0.56 J'], x: '5 × 9.' },
    { q: 'An ammeter is connected', o: ['in series', 'in parallel', 'across the battery', 'either way'], x: 'Measures current through.' },
    { q: 'The unit of charge is the', o: ['coulomb', 'ampere', 'volt', 'ohm'], x: 'C.' }
  ],
  exam: [
    { q: 'A phone battery supplies a current of 0.40 A for 2.5 hours. Its voltage is 3.7 V.', tag: 'calc', parts: [
      { q: 'Calculate the charge that flows.', m: 3, ms: ['t = 2.5 × 3600 = 9000 s', 'Q = It = 0.40 × 9000', '= 3600 C'] },
      { q: 'Calculate the energy transferred.', m: 2, ms: ['E = QV = 3600 × 3.7', '= 13 000 J (13.3 kJ)'] },
      { q: 'Explain what is meant by “the voltage of the battery is 3.7 V”.', m: 2, ms: ['3.7 J of energy is transferred', 'for each coulomb of charge'] }
    ] },
    { q: 'Describe what is meant by an electric current in a metal wire.', m: 2, ms: ['flow of (free/delocalised) electrons', 'rate of flow of charge'] }
  ],
  sims: ['ohm'], gens: ['qit1', 'qit2', 'eqv1', 'eqv2']
});

TOPICS.push({
  id: '2.4', unit: '2', ref: '2.9–2.13', title: 'Resistance and I–V characteristics', short: 'V = IR, lamps, diodes, LDRs, thermistors',
  summary: 'How current varies with voltage for wires, resistors, filament lamps and diodes (and how to investigate it); V = IR; LDRs and thermistors; LEDs and lamps as current indicators.',
  spec: [
    '2.9 describe how current varies with voltage in wires, resistors, metal filament lamps and diodes, and how to investigate this experimentally',
    '2.10 describe the qualitative effect of changing resistance on the current in a circuit',
    '2.11 describe the qualitative variation of resistance of light-dependent resistors (LDRs) with illumination and thermistors with temperature',
    '2.12 know that lamps and LEDs can be used to indicate the presence of a current in a circuit',
    '2.13 know and use the relationship between voltage, current and resistance: V = I × R'
  ],
  learn: [
    { h: 'V = IR', html: `
<div class="box def"><b class="lbl">Recall</b><p>$"voltage" = "current" × "resistance"$ &nbsp; $V = I × R$ &nbsp; (V = A × Ω)</p></div>
<p>Resistance opposes the current. For a fixed voltage, <b>increasing the resistance decreases the current</b>. Resistance increases with the length of a wire and decreases with its thickness.</p>` },
    { h: 'Current–voltage graphs', html: `
[[d:ivall]]
<div class="tbl"><table><tr><th>Component</th><th>I–V graph</th><th>Why</th></tr>
<tr><td>Wire / fixed resistor (constant temperature)</td><td>straight line through origin</td><td>current ∝ voltage — constant resistance (ohmic)</td></tr>
<tr><td>Metal filament lamp</td><td>S-shaped curve, getting flatter</td><td>filament heats up; ions vibrate more, so electrons collide more → resistance increases</td></tr>
<tr><td>Diode</td><td>current only flows one way (forward bias) above ≈ 0.6 V; very high resistance in reverse</td><td>used to allow current in one direction only</td></tr></table></div>` },
    { h: 'Investigating I–V characteristics', html: `
[[d:ivrig]]
<ol><li>Connect the component in series with an ammeter and a variable resistor (or use a variable power supply); connect a voltmeter in parallel across the component.</li><li>Change the voltage in steps with the variable resistor; record V and I each time.</li><li>Reverse the power supply connections to obtain negative values.</li><li>Plot current (y) against voltage (x).</li></ol>
<p>Use a protective resistor in series with a diode. Keep currents small for a resistor so it doesn’t heat up; switch off between readings.</p>` },
    { h: 'LDRs, thermistors, lamps and LEDs', html: `
[[d:sensors]]
<ul><li><b>Light-dependent resistor (LDR):</b> resistance <b>decreases</b> as light intensity (illumination) increases. Used in automatic street lights and light meters.</li><li><b>Thermistor</b> (NTC): resistance <b>decreases</b> as temperature increases. Used in thermostats and electronic thermometers, fire alarms.</li><li><b>Lamps and LEDs</b> can show that a current is flowing — they light up. An LED (light-emitting diode) only lights when current flows in its forward direction.</li></ul>` }
  ],
  eqs: [['V = I × R', 'recall']],
  worked: [
    { q: 'A 9.0 V battery is connected to a 45 Ω resistor. Calculate the current.', s: ['$I = @frac{V}{R} = @frac{9.0}{45}$', '$I = 0.20 "A"$'], a: '0.20 A' },
    { q: 'A filament lamp draws 0.10 A at 1.0 V and 0.25 A at 6.0 V. Calculate its resistance at each voltage and explain the difference.', s: ['R = 1.0 ÷ 0.10 = 10 Ω', 'R = 6.0 ÷ 0.25 = 24 Ω', 'At higher current the filament is hotter; ions vibrate more, so resistance increases'], a: '10 Ω and 24 Ω' }
  ],
  pitfalls: ['Saying a filament lamp obeys Ohm’s law.', 'Getting the LDR the wrong way round: more light → less resistance.', 'Forgetting that a diode has a very high resistance in reverse.'],
  cards: [
    ['V, I, R equation?', '$V = IR$'],
    ['I–V graph for a fixed resistor?', 'Straight line through the origin.'],
    ['Why does a lamp’s resistance increase?', 'Filament gets hotter; ions vibrate more; more collisions with electrons.'],
    ['What does a diode do?', 'Lets current flow in one direction only.'],
    ['LDR resistance in bright light?', 'Low.'],
    ['Thermistor resistance when hot?', 'Low.'],
    ['What can indicate the presence of a current?', 'A lamp or LED lighting up.'],
    ['Increasing resistance at fixed voltage does what to current?', 'Decreases it.']
  ],
  quiz: [
    { q: 'A 12 V supply drives 0.5 A through a resistor. Its resistance is', o: ['24 Ω', '6 Ω', '0.04 Ω', '12.5 Ω'], x: '12 ÷ 0.5.' },
    { q: 'The resistance of an LDR decreases when', o: ['light intensity increases', 'it gets darker', 'temperature falls', 'current reverses'], x: 'More light, lower R.' },
    { q: 'Which has a curved I–V graph that flattens at higher voltage?', o: ['filament lamp', 'fixed resistor', 'long wire at constant temperature', 'ammeter'], x: 'Heats up.' },
    { q: 'A diode connected in reverse', o: ['lets almost no current flow', 'lets a large current flow', 'has zero resistance', 'lights up'], x: 'High reverse resistance.' },
    { q: 'A thermistor could be used in', o: ['a fire alarm or thermostat', 'a light meter', 'a fuse', 'a transformer'], x: 'Temperature sensor.' },
    { q: 'A current of 2.0 A flows through a 15 Ω resistor. The voltage is', o: ['30 V', '7.5 V', '0.13 V', '17 V'], x: '2.0 × 15.' }
  ],
  exam: [
    { q: 'A student investigates how the current in a filament lamp varies with the voltage across it.', tag: 'prac', parts: [
      { q: 'Draw a circuit diagram the student could use.', m: 3, ms: ['lamp in series with ammeter and variable resistor/variable supply', 'voltmeter in parallel with the lamp', 'correct symbols'] },
      { q: 'Describe how the student would obtain a set of results.', m: 3, ms: ['adjust the variable resistor to change the voltage', 'record voltage and current for each setting (at least 6 values)', 'reverse the connections to get negative values / repeat'] },
      { q: 'Sketch the I–V graph for the lamp and explain its shape.', m: 4, ms: ['curve through origin, gradient decreasing (S-shape through origin)', 'as current increases the filament gets hotter', 'ions vibrate more / more collisions with electrons', 'so resistance increases'] }
    ] },
    { q: 'A circuit contains a 6.0 V battery, an LDR and an ammeter in series. In dim light the current is 2.0 mA.', tag: 'calc', parts: [
      { q: 'Calculate the resistance of the LDR in dim light.', m: 3, ms: ['I = 0.0020 A', 'R = V ÷ I = 6.0 ÷ 0.0020', '= 3000 Ω'] },
      { q: 'Describe and explain what happens to the ammeter reading when a torch is shone on the LDR.', m: 2, ms: ['reading increases', 'resistance of LDR decreases in brighter light'] }
    ] }
  ],
  sims: ['ivg', 'sensors'], gens: ['vir1', 'vir2', 'vir3', 'ivr1']
});

TOPICS.push({
  id: '2.5', unit: '2', ref: '2.7–2.8, 2.17–2.19', title: 'Series and parallel circuits', short: 'Current and voltage rules, domestic lighting',
  summary: 'The rules for current and voltage in series and parallel circuits, calculations for two resistors in series, and why parallel circuits are used for domestic lighting.',
  spec: [
    '2.7 explain why a series or parallel circuit is more appropriate for particular applications, including domestic lighting',
    '2.8 understand how the current in a series circuit depends on the applied voltage and the number and nature of other components',
    '2.17 understand why current is conserved at a junction in a circuit',
    '2.18 know that the voltage across two components connected in parallel is the same',
    '2.19 calculate the currents, voltages and resistances of two resistive components connected in a series circuit'
  ],
  learn: [
    { h: 'Series circuits', html: `
[[d:series]]
<ul><li>The <b>current is the same</b> everywhere in a series circuit.</li><li>The supply voltage is <b>shared</b> between the components: $V = V_1 + V_2$.</li><li>Total resistance $R = R_1 + R_2$. Adding more components (more resistance) <b>reduces the current</b>; a larger applied voltage increases it.</li><li>The component with the larger resistance has the larger share of the voltage.</li><li>If one component breaks, the whole circuit stops.</li></ul>` },
    { h: 'Parallel circuits', html: `
[[d:parallel]]
<ul><li>The <b>voltage across each branch is the same</b> (equal to the supply voltage).</li><li>The current splits at a junction: $I = I_1 + I_2$. <b>Current is conserved at a junction</b> because charge is not created or destroyed — the charge flowing in per second must equal the charge flowing out per second.</li><li>Each branch can be switched independently; if one lamp fails, the others stay lit.</li></ul>` },
    { h: 'Why domestic lighting is in parallel', html: `
<p>In a house, lamps are wired in <b>parallel</b>: each gets the full mains voltage (so is fully bright), each can be switched on and off separately, and one failing does not turn off the rest. Series circuits are used where the same current must pass through everything — e.g. a switch or fuse in series with what it controls, or some decorative fairy lights.</p>` }
  ],
  eqs: [['R = R_1 + R_2', 'series resistance'], ['V = V_1 + V_2', 'series voltages'], ['I = I_1 + I_2', 'current at a junction']],
  worked: [
    { q: 'A 12 V supply is connected to a 4.0 Ω and an 8.0 Ω resistor in series. Calculate the current and the voltage across each resistor.', s: ['R = 4.0 + 8.0 = 12 Ω', 'I = V/R = 12 ÷ 12 = 1.0 A (same through both)', 'V₁ = 1.0 × 4.0 = 4.0 V; V₂ = 1.0 × 8.0 = 8.0 V (total 12 V ✓)'], a: '1.0 A; 4.0 V and 8.0 V' }
  ],
  pitfalls: ['Saying current is “used up” by components in series.', 'Adding voltages across parallel branches.', 'Forgetting that the same current flows through series components.'],
  cards: [
    ['Current in a series circuit?', 'The same at every point.'],
    ['Voltage in a series circuit?', 'Shared between components; adds up to the supply voltage.'],
    ['Voltage across parallel components?', 'The same.'],
    ['Why is current conserved at a junction?', 'Charge is not created or destroyed; charge in per second = charge out per second.'],
    ['Total resistance of two resistors in series?', '$R = R_1 + R_2$'],
    ['Why are house lights in parallel?', 'Full voltage each, independent switching, one failing doesn’t affect the others.']
  ],
  quiz: [
    { q: 'Resistors of 3 Ω and 6 Ω in series have a total resistance of', o: ['9 Ω', '2 Ω', '18 Ω', '3 Ω'], x: 'Add.' },
    { q: 'In a parallel circuit, the voltage across each branch is', o: ['the same as the supply', 'shared equally', 'zero', 'doubled'], x: 'Same voltage.' },
    { q: 'At a junction, 0.8 A enters and one branch carries 0.3 A. The other carries', o: ['0.5 A', '1.1 A', '0.3 A', '0.24 A'], x: 'Conservation.' },
    { q: 'Adding another lamp in series with a battery will make the current', o: ['decrease', 'increase', 'stay the same', 'reverse'], x: 'More resistance.' },
    { q: 'A 9 V battery with two identical resistors in series gives a voltage across each of', o: ['4.5 V', '9 V', '18 V', '3 V'], x: 'Shared equally.' }
  ],
  exam: [
    { q: 'A 6.0 V battery is connected in series with a 10 Ω resistor and a 20 Ω resistor.', tag: 'calc', parts: [
      { q: 'Calculate the total resistance.', m: 1, ms: ['30 Ω'] },
      { q: 'Calculate the current in the circuit.', m: 2, ms: ['I = 6.0 ÷ 30', '= 0.20 A'] },
      { q: 'Calculate the voltage across the 20 Ω resistor.', m: 2, ms: ['V = 0.20 × 20', '= 4.0 V'] },
      { q: 'The 10 Ω resistor is replaced by a thermistor. Describe how the voltage across the 20 Ω resistor changes as the thermistor is heated. Explain your answer.', m: 3, ms: ['thermistor resistance decreases', 'total resistance decreases so current increases', 'voltage across 20 Ω resistor increases (larger share)'] }
    ] },
    { q: 'Explain why the lights in a house are connected in parallel rather than in series.', m: 3, ms: ['each lamp gets the full mains voltage', 'lamps can be switched on/off independently', 'if one lamp fails the others still work'] }
  ],
  sims: ['serpar'], gens: ['ser1', 'ser2', 'ser3', 'par1']
});

TOPICS.push({
  id: '2.6', unit: '2', ref: '2.22–2.28', po: true, title: 'Electric charge and static electricity', short: 'Charging by friction, dangers and uses',
  summary: 'Conductors and insulators; charging insulators by friction through the transfer of electrons; forces between charges; the dangers of static when refuelling; and uses in photocopiers and inkjet printers.',
  spec: [
    '2.22P identify common materials that are electrical conductors or insulators, including metals and plastics',
    '2.23P practical: investigate how insulating materials can be charged by friction',
    '2.24P explain how positive and negative electrostatic charges are produced on materials by the loss and gain of electrons',
    '2.25P know that there are forces of attraction between unlike charges and forces of repulsion between like charges',
    '2.26P explain electrostatic phenomena in terms of the movement of electrons',
    '2.27P explain the potential dangers of electrostatic charges, e.g. when fuelling aircraft and tankers',
    '2.28P explain some uses of electrostatic charges, e.g. in photocopiers and inkjet printers'
  ],
  learn: [
    { h: 'Conductors, insulators and charging by friction', html: `
[[d:rub]]
<p><b>Conductors</b> (metals, graphite) contain free electrons that move easily. <b>Insulators</b> (plastics such as polythene and acetate, rubber, glass, wood, dry air) do not let charge flow, so charge stays where it is put.</p>
<p>When two insulators are <b>rubbed</b> together, friction transfers <b>electrons</b> from one surface to the other. Only electrons move — protons stay in the nuclei.</p>
<ul><li>The material that <b>gains electrons</b> becomes <b>negatively</b> charged (e.g. a polythene rod rubbed with a cloth).</li><li>The material that <b>loses electrons</b> becomes <b>positively</b> charged (e.g. an acetate rod; the cloth rubbed on polythene).</li></ul>
<p><b>Practical (2.23P):</b> rub rods of polythene, acetate, Perspex etc. with a dry cloth; hang one rod in a paper stirrup from a thread and bring another charged rod close. Observe attraction or repulsion. A gold-leaf electroscope or a stream of water/small pieces of paper can also show charge.</p>` },
    { h: 'Forces between charges', html: `
<p><b>Like charges repel; unlike charges attract.</b> A charged object also attracts small <b>uncharged</b> objects (e.g. a charged balloon sticks to a wall): it repels electrons in the surface away (or attracts them towards itself), leaving an opposite charge nearby, which is attracted.</p>
<p>A charged conductor held in the hand is discharged because electrons flow through you to/from earth.</p>` },
    { h: 'Dangers and uses', html: `
<p><b>Dangers:</b> when fuel flows quickly through a pipe into an aircraft or tanker, <b>friction</b> transfers electrons and charge builds up. A <b>spark</b> could jump to earth and ignite the fuel vapour — an explosion. <b>Prevention:</b> connect the aircraft/tanker to the fuel truck and to earth with a conducting bonding cable (earthing) so charge flows away safely before and during refuelling. Similar risks: grain silos (dust explosions), synthetic clothing, lightning.</p>
<p><b>Uses:</b></p>
<ul><li><b>Photocopier:</b> a drum is charged; light reflected from the white parts of the original discharges those areas, leaving a charged image of the dark parts. Oppositely charged toner powder is attracted to the charged image, transferred to paper, then fused by heat.</li><li><b>Inkjet printer:</b> tiny ink droplets are given a charge; charged deflecting plates (whose voltage is controlled by the computer) deflect each droplet to the correct position on the paper.</li><li>Others: electrostatic paint spraying, precipitators removing smoke particles from chimneys, defibrillators.</li></ul>` }
  ],
  eqs: [],
  worked: [
    { q: 'A polythene rod is rubbed with a woollen cloth and becomes negatively charged. Explain why, and state the charge on the cloth.', s: ['Friction transfers electrons from the cloth to the rod.', 'The rod gains electrons → negative charge.', 'The cloth loses electrons → equal positive charge.'], a: 'Electrons transferred to the rod; cloth positive.' }
  ],
  pitfalls: ['Saying positive charges (protons) move when objects are rubbed.', 'Saying metals can be charged by friction while held in the hand — the charge flows away.', 'Forgetting to explain how the spark causes danger (ignites fuel vapour).'],
  cards: [
    ['How does rubbing charge an insulator?', 'Friction transfers electrons from one material to the other.', 'po'],
    ['Object that gains electrons becomes…', 'negatively charged.', 'po'],
    ['Forces between charges?', 'Like charges repel; unlike charges attract.', 'po'],
    ['Why is refuelling an aircraft dangerous?', 'Friction charges the plane; a spark could ignite fuel vapour.', 'po'],
    ['How is refuelling made safe?', 'Earth the aircraft/tanker with a conducting bonding wire.', 'po'],
    ['How does an inkjet printer use static?', 'Charged droplets are deflected by charged plates to the right place.', 'po'],
    ['How does a photocopier use static?', 'Charged drum image attracts oppositely charged toner, transferred to paper.', 'po'],
    ['Examples of insulators?', 'Plastics (polythene, acetate), rubber, glass, dry wood.', 'po']
  ],
  quiz: [
    { q: 'An acetate rod becomes positive when rubbed because it', o: ['loses electrons', 'gains protons', 'gains electrons', 'loses protons'], x: 'Only electrons move.', po: 1 },
    { q: 'Two negatively charged balloons will', o: ['repel', 'attract', 'not affect each other', 'discharge'], x: 'Like charges repel.', po: 1 },
    { q: 'Which material is an electrical conductor?', o: ['copper', 'polythene', 'rubber', 'glass'], x: 'Free electrons.', po: 1 },
    { q: 'A bonding cable is used when refuelling an aircraft to', o: ['conduct charge safely to earth', 'speed up the flow of fuel', 'charge the fuel', 'insulate the plane'], x: 'Prevents sparks.', po: 1 },
    { q: 'In an inkjet printer, droplets are directed by', o: ['charged deflecting plates', 'magnets', 'gravity only', 'lasers'], x: 'Electrostatic deflection.', po: 1 },
    { q: 'A charged balloon sticks to an uncharged wall because', o: ['it induces an opposite charge on the wall surface', 'the wall is positively charged', 'of gravity', 'of magnetism'], x: 'Induced charge.', po: 1 }
  ],
  exam: [
    { q: 'A student investigates charging by friction using a polythene rod, an acetate rod and a dry cloth.', tag: 'prac', po: 1, parts: [
      { q: 'Describe how the student could show that the two rods, after rubbing, carry opposite charges.', m: 3, ms: ['suspend one rubbed rod in a paper stirrup on a thread / balanced on a watch glass', 'bring the other rubbed rod near it', 'the suspended rod moves towards it (attraction) — unlike charges'] },
      { q: 'Explain, in terms of electrons, why the polythene rod becomes negatively charged.', m: 2, ms: ['electrons are transferred from the cloth to the rod (by friction)', 'the rod has more electrons than protons'] },
      { q: 'Explain why the experiment does not work well on a humid day.', m: 2, ms: ['moist air/water on surfaces conducts', 'charge leaks away'] }
    ] },
    { q: 'Explain why a fuel tanker must be connected to earth before it unloads fuel at a petrol station.', tag: 'ext', po: 1, m: 4, ms: ['fuel flowing through pipes causes friction', 'electrons transferred so charge builds up on the tanker', 'a spark could jump to earth and ignite fuel vapour / explosion', 'earthing lets charge flow away safely so no spark'] },
    { q: 'Describe how an inkjet printer uses electrostatic charge to form letters on paper.', po: 1, m: 3, ms: ['ink droplets are given a charge', 'they pass between charged (deflecting) plates', 'the voltage on the plates is varied to deflect each drop to the right place'] }
  ],
  sims: ['static'], gens: []
});
