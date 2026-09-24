/* ==========================================================
   UNIT 2 · Electricity and Light
   ========================================================== */
TOPICS.push({
  id: '2.1', unit: '2', title: 'Conduction of Electricity', short: 'Charge, current, drift velocity',
  summary: 'What a current actually is: charge carriers drifting slowly through a conductor, and how I = nAve links the microscopic and macroscopic pictures.',
  spec: [
    'Understand that electric charge is carried by charge carriers and is quantised in units of e',
    'Define electric current as the rate of flow of charge, I = ΔQ/Δt, and the coulomb',
    'Know the direction of conventional current compared with electron flow',
    'Derive and use I = nAve for the current in a conductor',
    'Understand that the mean drift velocity of electrons is small, and explain why a lamp lights almost instantly',
    'Compare charge-carrier densities in metals, semiconductors and insulators'
  ],
  learn: [
    { h: 'Charge and current', html: `
<p>Electric charge is carried by <b>charge carriers</b>: free electrons in metals, ions in electrolytes and gases, electrons and holes in semiconductors. Charge comes in whole-number multiples of $e = 1.60 × 10^{-19} "C"$.</p>
<div class="box def"><b class="lbl">Definitions</b><p><b>Current</b> is the rate of flow of charge: $I = @frac{ΔQ}{Δt}$.</p><p>The <b>coulomb</b> is the charge that passes a point when a current of 1 A flows for 1 s (1 C = 1 A s).</p></div>
<p>Conventional current flows from + to − around a circuit. In a metal the electrons actually move the other way, from − to +.</p>` },
    { h: 'The equation I = nAve', html: `
<p>Consider a conductor of cross-sectional area A containing n free electrons per cubic metre, each with charge e, moving with mean drift velocity v.</p>
<ul><li>In time Δt each electron moves a distance vΔt, so all the electrons in a volume AvΔt pass through a cross-section.</li>
<li>Number of electrons = nAvΔt, carrying charge ΔQ = nAvΔt e.</li>
<li>$I = ΔQ/Δt$, so $I = nAve$.</li></ul>
<p>For copper n ≈ 8.5 × 10<sup>28</sup> m<sup>−3</sup>. A current of a few amps in a 1 mm<sup>2</sup> wire gives a drift velocity of only about 0.1–0.3 mm s<sup>−1</sup>.</p>
<div class="box why"><b class="lbl">Why does a lamp light instantly?</b><p>When the switch closes, an electric field is set up throughout the circuit almost at the speed of light. Free electrons everywhere in the circuit, including those already in the filament, start drifting at almost the same moment.</p></div>
<p>In a series circuit the current is the same everywhere, so in a thinner section (smaller A) the electrons must drift faster.</p>` },
    { h: 'Metals, semiconductors and insulators', html: `
<div class="tbl"><table><tr><th>Material</th><th>Free carrier density n</th><th>Consequence</th></tr>
<tr><td>metal</td><td>very high, ~10<sup>28</sup>–10<sup>29</sup> m<sup>−3</sup></td><td>good conductor; low drift velocity</td></tr>
<tr><td>semiconductor</td><td>much lower, rises steeply with temperature</td><td>for the same I and A, much higher drift velocity</td></tr>
<tr><td>insulator</td><td>almost zero</td><td>negligible current</td></tr></table></div>` }
  ],
  eqs: [['I = @frac{ΔQ}{Δt}', 'current'], ['I = nAve', 'n = carriers per m³, v = drift velocity']],
  worked: [
    { q: 'A current of 3.0 A flows for 2.0 minutes. How much charge flows, and how many electrons is this?', s: ['Q = It = 3.0 × 120 = 360 C.', 'N = Q/e = 360 / 1.60 × 10<sup>−19</sup> = 2.25 × 10<sup>21</sup>.'], a: '360 C; 2.3 × 10<sup>21</sup> electrons' },
    { q: 'A copper wire of cross-sectional area 1.0 mm² carries 2.0 A. n = 8.5 × 10<sup>28</sup> m<sup>−3</sup>. Find the drift velocity.', s: ['A = 1.0 × 10<sup>−6</sup> m².', 'v = I / nAe = 2.0 / (8.5 × 10<sup>28</sup> × 1.0 × 10<sup>−6</sup> × 1.60 × 10<sup>−19</sup>).', 'v = 1.5 × 10<sup>−4</sup> m s<sup>−1</sup>.'], a: '0.15 mm s<sup>−1</sup>' },
    { q: 'Two copper wires are connected in series. Wire Y has half the diameter of wire X. Compare the drift velocities.', s: ['Same current (series); same n and e.', 'Half the diameter → one quarter of the area.', 'v ∝ 1/A so v<sub>Y</sub> = 4v<sub>X</sub>.'], a: 'Drift velocity in Y is 4 times that in X' }
  ],
  pitfalls: ['Forgetting to convert mm² to m² (× 10<sup>−6</sup>).', 'Using the diameter rather than the area.', 'Thinking the electrons travel round the circuit at high speed.', 'Saying current is “used up” in a component.'],
  cards: [
    ['Define electric current.', 'The rate of flow of charge, I = ΔQ/Δt.'],
    ['Define the coulomb.', 'The charge passing a point when 1 A flows for 1 s.'],
    ['Charge on an electron?', '−1.60 × 10<sup>−19</sup> C'],
    ['State I = nAve and define n.', 'n = number of free charge carriers per unit volume.'],
    ['Typical drift velocity in a copper wire?', '~10<sup>−4</sup> m s<sup>−1</sup> (a fraction of a mm per second).'],
    ['Why does a lamp light instantly despite slow drift?', 'The electric field is established throughout the circuit almost instantly, so all free electrons start moving at once.'],
    ['Direction of conventional current?', 'From + to − (opposite to electron flow).'],
    ['Why is drift velocity larger in a semiconductor for the same I and A?', 'n is much smaller, so v = I/nAe is larger.'],
    ['Electrons per second in 1.0 A?', '6.25 × 10<sup>18</sup>']
  ],
  quiz: [
    { q: 'The coulomb is equivalent to', o: ['A s', 'A s<sup>−1</sup>', 'J V', 'W s'], x: 'Q = It.' },
    { q: 'In I = nAve, n is', o: ['the number of free charge carriers per unit volume', 'the total number of electrons in the wire', 'the number of atoms per unit volume', 'the number of electrons passing per second'], x: 'Units m<sup>−3</sup>.' },
    { q: 'A typical drift velocity for electrons in a copper wire carrying a few amps is about', o: ['10<sup>−4</sup> m s<sup>−1</sup>', '3 × 10<sup>8</sup> m s<sup>−1</sup>', '300 m s<sup>−1</sup>', '10<sup>4</sup> m s<sup>−1</sup>'], x: 'Tiny because n is huge.' },
    { q: 'A wire’s diameter is halved but it carries the same current. The drift velocity', o: ['increases by a factor of 4', 'doubles', 'halves', 'is unchanged'], x: 'A ∝ d², v ∝ 1/A.' },
    { q: 'A current of 0.25 A flows for 1 minute. The charge that passes is', o: ['15 C', '0.25 C', '4.2 × 10<sup>−3</sup> C', '240 C'], x: '0.25 × 60.' },
    { q: 'The number of electrons passing a point each second when the current is 1.0 A is', o: ['6.25 × 10<sup>18</sup>', '1.60 × 10<sup>−19</sup>', '1.0', '6.02 × 10<sup>23</sup>'], x: '1 / 1.60 × 10<sup>−19</sup>.' },
    { q: 'For the same current and dimensions, the drift velocity in a semiconductor is much larger than in a metal because', o: ['the density of free charge carriers is much smaller', 'the charge on each carrier is greater', 'the resistance is lower', 'the carriers are heavier'], x: 'v = I/nAe.' },
    { q: 'Conventional current in a metal wire flows', o: ['in the opposite direction to the electron flow', 'in the same direction as the electron flow', 'in both directions equally', 'only in the direction of the positive ions'], x: 'Historical convention: + to −.' },
    { q: 'A lamp lights almost immediately when switched on because', o: ['free electrons throughout the circuit start drifting almost simultaneously', 'electrons travel from the cell at nearly the speed of light', 'the drift velocity is very large', 'charge is stored in the filament'], x: 'The field is set up at close to c.' },
    { q: 'Which is the smallest possible magnitude of charge on a free particle observed in circuits?', o: ['1.60 × 10<sup>−19</sup> C', '1 C', '9.11 × 10<sup>−31</sup> C', '6.25 × 10<sup>18</sup> C'], x: 'Charge is quantised in units of e.' }
  ],
  exam: [
    { q: 'Derive the equation I = nAve, defining each symbol.', m: 4, ms: ['n = number of free electrons per unit volume, A = cross-sectional area, v = mean drift velocity, e = electron charge.', 'In time Δt electrons move vΔt, so volume AvΔt passes a point.', 'Charge passing ΔQ = nAvΔt e.', 'I = ΔQ/Δt = nAve.'] },
    { q: 'A copper wire of diameter 0.80 mm carries a current of 1.5 A. n = 8.5 × 10<sup>28</sup> m<sup>−3</sup>. Calculate the drift velocity.', m: 3, ms: ['A = π(0.40 × 10<sup>−3</sup>)² = 5.03 × 10<sup>−7</sup> m²', 'v = I / nAe', '= 2.2 × 10<sup>−4</sup> m s<sup>−1</sup>'] },
    { q: 'Explain why a lamp lights almost as soon as it is switched on even though the drift velocity of the electrons is very small.', m: 2, ms: ['Electric field established around the circuit (almost) instantaneously / at close to the speed of light.', 'Free electrons already in the filament begin to move at the same time.'] }
  ],
  sims: ['drift'], gens: ['charge1', 'drift1']
});

TOPICS.push({
  id: '2.2', unit: '2', title: 'Resistance', short: 'Ohm’s law, resistivity, superconductors',
  summary: 'Potential difference, resistance and resistivity; why a filament lamp is non-ohmic; how temperature affects resistance; and the strange world of superconductors.',
  spec: [
    'Define potential difference and the volt (V = W/q)',
    'Define resistance, R = V/I, and the ohm; state Ohm’s law',
    'Sketch and explain I–V characteristics for a metal wire at constant temperature and a filament lamp',
    'Use P = IV = I²R = V²/R',
    'Use R = ρl/A and define resistivity',
    'Explain how the resistance of a metal varies with temperature in terms of lattice vibrations',
    'Describe superconductivity, the critical temperature and applications of superconductors',
    'Determine resistivity; investigate R–T for a metal and I–V characteristics (specified practicals)'
  ],
  learn: [
    { h: 'Potential difference and resistance', html: `
<div class="box def"><b class="lbl">Definitions</b><ul>
<li><b>Potential difference</b> between two points is the energy converted from electrical potential energy to other forms per unit charge passing between them: $V = @frac{W}{q}$. 1 V = 1 J C<sup>−1</sup>.</li>
<li><b>Resistance</b> $R = @frac{V}{I}$. 1 Ω = 1 V A<sup>−1</sup>.</li>
<li><b>Ohm’s law</b>: the current in a metal conductor is directly proportional to the pd across it, provided the temperature (and other physical conditions) remain constant.</li></ul></div>` },
    { h: 'I–V characteristics', html: `
[[d:iv-curves]]
<p><b>Metal wire (constant temperature):</b> a straight line through the origin — it obeys Ohm’s law.</p>
<p><b>Filament lamp:</b> as the current increases, the filament gets hotter. The metal lattice ions vibrate with larger amplitude, so the free electrons collide with them more often. It is harder for them to drift, so resistance increases and the graph curves towards the V axis.</p>
<div class="box tip"><b class="lbl">Exam tip</b><p>Resistance at a point is V/I at that point, <b>not</b> the gradient of the tangent.</p></div>` },
    { h: 'Power', html: `<p>Energy transferred = VIt, so power $P = IV$. Using V = IR: $P = I^2R = @frac{V^2}{R}$.</p>` },
    { h: 'Resistivity', html: `
<p>For a uniform conductor, $R = @frac{ρl}{A}$, where ρ is the <b>resistivity</b> of the material (Ω m). Resistivity is a property of the material; resistance depends on the sample’s shape too.</p>
<div class="tbl"><table><tr><th>Material</th><th>ρ at 20 °C / Ω m</th></tr><tr><td>copper</td><td>1.7 × 10<sup>−8</sup></td></tr><tr><td>nichrome</td><td>1.1 × 10<sup>−6</sup></td></tr><tr><td>silicon (pure)</td><td>~10<sup>3</sup></td></tr><tr><td>glass</td><td>~10<sup>10</sup>–10<sup>14</sup></td></tr></table></div>
<div class="box def"><b class="lbl">Specified practical: resistivity</b><p>Measure the wire’s diameter at several places with a micrometer; A = πd²/4. Measure R for several lengths l using an ammeter and voltmeter (or ohmmeter), keeping the current small so the wire doesn’t heat up. Plot R against l: gradient = ρ/A, so ρ = gradient × A.</p></div>` },
    { h: 'Temperature and superconductivity', html: `
<p>For a metal, resistance increases roughly linearly with temperature: hotter lattice ions vibrate more, increasing the collision rate of free electrons. (Specified practical: heat a coil of wire in a water bath, measure R at a range of temperatures.)</p>
<p>A <b>superconductor</b> is a material whose resistance becomes exactly zero below a <b>critical temperature</b> T<sub>c</sub>.</p>
[[d:rt-sc]]
<p>Applications: very strong electromagnets with no heating loss, e.g. MRI scanners and particle accelerators (such as the LHC); lossless power transmission; maglev trains. Their main drawback is the need to cool them — liquid helium for many metals; “high-temperature” ceramic superconductors can use cheaper liquid nitrogen (77 K).</p>` }
  ],
  eqs: [['V = @frac{W}{q}', 'pd'], ['R = @frac{V}{I}', 'resistance'], ['P = IV = I^2R = @frac{V^2}{R}', 'power'], ['R = @frac{ρl}{A}', 'resistivity']],
  worked: [
    { q: 'Find the resistance of 0.80 m of nichrome wire (ρ = 1.1 × 10<sup>−6</sup> Ω m) with diameter 0.30 mm.', s: ['A = π(0.15 × 10<sup>−3</sup>)² = 7.07 × 10<sup>−8</sup> m².', 'R = ρl/A = 1.1 × 10<sup>−6</sup> × 0.80 / 7.07 × 10<sup>−8</sup>.'], a: '12 Ω' },
    { q: 'A 2.0 kW kettle runs on 230 V mains. Find the current and resistance of the element.', s: ['I = P/V = 2000/230 = 8.7 A.', 'R = V²/P = 230²/2000 = 26 Ω.'], a: '8.7 A; 26 Ω' },
    { q: 'A 12 V, 24 W lamp is lit for 10 minutes. How much charge flows through it, and how much energy does each coulomb transfer?', s: ['I = P/V = 2.0 A.', 'Q = It = 2.0 × 600 = 1200 C.', 'Energy per coulomb = pd = 12 J.'], a: '1200 C; 12 J C<sup>−1</sup>' }
  ],
  pitfalls: ['Using the gradient of an I–V curve to find resistance.', 'Using diameter for r in πr².', 'Saying resistance increases because “electrons move faster”. It is increased ion vibration → more frequent collisions.', 'Confusing resistivity (material) with resistance (object).'],
  cards: [
    ['Define potential difference.', 'Energy converted from electrical to other forms per unit charge passing between two points.'],
    ['Define the volt.', '1 J C<sup>−1</sup>'],
    ['State Ohm’s law.', 'I ∝ V for a metallic conductor at constant temperature.'],
    ['Why does a lamp’s resistance increase with current?', 'Filament heats; lattice ions vibrate more; more frequent collisions with free electrons.'],
    ['Resistivity equation?', 'R = ρl/A'],
    ['Unit of resistivity?', 'Ω m'],
    ['Define a superconductor.', 'A material whose resistance falls to zero below its critical temperature.'],
    ['Two uses of superconductors?', 'MRI magnets, particle accelerator magnets (also power cables, maglev).'],
    ['Three power equations?', 'P = IV = I²R = V²/R'],
    ['Graph for resistivity practical?', 'R against l: gradient = ρ/A.'],
    ['Resistance at a point on an I–V graph?', 'V ÷ I at that point (not the gradient).']
  ],
  quiz: [
    { q: 'The volt is equivalent to', o: ['J C<sup>−1</sup>', 'C J<sup>−1</sup>', 'J s<sup>−1</sup>', 'A Ω<sup>−1</sup>'], x: 'V = W/q.' },
    { q: 'The resistance of a filament lamp increases as the current increases because', o: ['the lattice ions vibrate more, so electrons collide with them more often', 'the number of free electrons decreases', 'the filament gets longer', 'the electrons move faster and collide less'], x: 'Temperature rise → greater amplitude of lattice vibration.' },
    { q: 'A wire is replaced by one of the same material with twice the length and twice the diameter. The new resistance is', o: ['half', 'the same', 'double', 'a quarter'], x: 'R ∝ l/d²: 2/4 = ½.' },
    { q: 'The unit of resistivity is', o: ['Ω m', 'Ω m<sup>−1</sup>', 'Ω m<sup>2</sup>', 'Ω'], x: 'ρ = RA/l.' },
    { q: 'The power dissipated in a 10 Ω resistor carrying 2.0 A is', o: ['40 W', '20 W', '5 W', '200 W'], x: 'P = I²R.' },
    { q: 'Below its critical temperature a superconductor has', o: ['zero resistance', 'infinite resistance', 'a resistance that increases with temperature', 'a very high resistivity'], x: 'Current flows with no energy dissipation.' },
    { q: 'The I–V graph for a metal wire at constant temperature is', o: ['a straight line through the origin', 'a curve bending towards the V axis', 'a horizontal line', 'zero until a threshold then steep'], x: 'It obeys Ohm’s law.' },
    { q: 'Which is an application of superconductors?', o: ['magnets in MRI scanners', 'heating elements in kettles', 'fuses', 'filament lamps'], x: 'Strong fields without heating losses.' },
    { q: 'A 60 W lamp operates at 240 V. Its resistance is', o: ['960 Ω', '4.0 Ω', '0.25 Ω', '14 400 Ω'], x: 'R = V²/P = 57 600/60.' },
    { q: '5.0 C of charge passes through a pd of 12 V. The energy transferred is', o: ['60 J', '2.4 J', '0.42 J', '17 J'], x: 'W = qV.' },
    { q: 'In the resistivity practical a graph of R against length l has gradient equal to', o: ['ρ/A', 'ρA', 'A/ρ', 'ρ'], x: 'R = (ρ/A) l.' }
  ],
  exam: [
    { q: 'Sketch the I–V characteristic of a filament lamp and explain its shape in terms of the behaviour of the free electrons and metal ions.', m: 5, ms: ['Curve through origin, symmetric in both quadrants, gradient decreasing as V increases.', 'Current causes heating; temperature of filament rises.', 'Lattice ions vibrate with greater amplitude.', 'Free electrons collide more frequently with ions (drift impeded).', 'So resistance (V/I) increases.'] },
    { q: 'Describe how you would determine the resistivity of the metal of a wire.', m: 6, ms: ['Measure diameter with micrometer at several points/orientations; average; A = πd²/4.', 'Connect wire in circuit with ammeter and voltmeter (or ohmmeter); measure R = V/I.', 'Vary length l with crocodile clip/jockey measured with metre rule.', 'Keep current small / switch off between readings to avoid heating.', 'Plot R against l.', 'ρ = gradient × A.'] },
    { q: 'Explain what is meant by a superconductor and give one use and one disadvantage.', m: 3, ms: ['Resistance becomes zero below the critical temperature.', 'Use: MRI / particle accelerator magnets / power transmission.', 'Disadvantage: needs expensive cooling (liquid helium or nitrogen).'] }
  ],
  sims: ['iv'], gens: ['resist1', 'power2', 'resist2']
});

TOPICS.push({
  id: '2.3', unit: '2', title: 'D.C. Circuits', short: 'Kirchhoff, dividers, internal resistance',
  summary: 'Solving circuits: the two conservation laws, combining resistors, potential dividers, and why a battery’s terminal pd falls when it delivers current.',
  spec: [
    'Apply conservation of charge (Kirchhoff’s first law) and energy (second law) to circuits',
    'Derive and use the formulae for resistors in series and in parallel',
    'Use the potential divider equation, including with LDRs and thermistors',
    'Define emf, and understand internal resistance: V = E − Ir',
    'Determine the internal resistance of a cell (specified practical)'
  ],
  learn: [
    { h: 'Kirchhoff’s laws', html: `
<div class="box def"><b class="lbl">Kirchhoff’s first law (conservation of charge)</b><p>The sum of the currents entering a junction equals the sum of the currents leaving it.</p></div>
<div class="box def"><b class="lbl">Kirchhoff’s second law (conservation of energy)</b><p>Around any closed loop, the sum of the emfs equals the sum of the pds.</p></div>` },
    { h: 'Series and parallel', html: `
<p><b>Series:</b> the same current flows through each; the pds add: $V = V_1 + V_2$, so $IR = IR_1 + IR_2$ and $R = R_1 + R_2$.</p>
<p><b>Parallel:</b> the same pd across each; the currents add: $I = I_1 + I_2$, so $@frac{V}{R} = @frac{V}{R_1} + @frac{V}{R_2}$ and $@frac{1}{R} = @frac{1}{R_1} + @frac{1}{R_2}$.</p>
<p>The combined resistance of resistors in parallel is always less than the smallest individual resistance. Two equal resistors in parallel give half of one.</p>` },
    { h: 'Potential dividers', html: `
<p>Two resistors in series across a supply V<sub>in</sub> share the pd in the ratio of their resistances:</p>
<div class="box eq">$V_{out} = V_{in} @frac{R_2}{R_1 + R_2}$ (pd across R<sub>2</sub>)</div>
<p>Replacing R<sub>2</sub> with a sensor makes an output that responds to the environment. A <b>thermistor</b> (NTC): resistance falls as temperature rises. An <b>LDR</b>: resistance falls as light intensity rises.</p>
<div class="box tip"><b class="lbl">Exam tip</b><p>Loading: a voltmeter or other load connected across part of a divider forms a parallel combination, lowering that section’s resistance and hence its pd.</p></div>` },
    { h: 'EMF and internal resistance', html: `
<div class="box def"><b class="lbl">Definition</b><p>The <b>emf</b> of a source is the energy converted into electrical potential energy per unit charge passing through the source. Unit: V.</p></div>
<p>Real sources have <b>internal resistance</b> r. When current I flows, some energy per coulomb (Ir, the “lost volts”) is dissipated inside the source, so the terminal pd is:</p>
<div class="box eq">$V = E - Ir$ &nbsp;&nbsp; and &nbsp;&nbsp; $E = I(R + r)$</div>
[[d:vi-internal]]
<div class="box def"><b class="lbl">Specified practical</b><p>Connect the cell to a variable resistor with an ammeter in series and a voltmeter across the cell terminals. Record V and I for a range of settings; plot V against I. The y-intercept is E and the gradient is −r. Keep currents modest and open the switch between readings so r does not change as the cell warms.</p></div>` }
  ],
  eqs: [['R = R_1 + R_2 + …', 'series'], ['@frac{1}{R} = @frac{1}{R_1} + @frac{1}{R_2} + …', 'parallel'], ['V_{out} = V_{in}@frac{R_2}{R_1 + R_2}', 'potential divider'], ['V = E - Ir', 'terminal pd'], ['E = I(R + r)', 'whole circuit']],
  worked: [
    { q: 'A 4.0 Ω resistor is in series with a parallel pair of 6.0 Ω and 12 Ω, across a 12 V supply of negligible internal resistance. Find all the currents.', s: ['Parallel: 1/R = 1/6 + 1/12 = 3/12, so R = 4.0 Ω.', 'Total = 8.0 Ω, so I = 12/8.0 = 1.5 A through the 4.0 Ω.', 'pd across parallel pair = 1.5 × 4.0 = 6.0 V.', 'I<sub>6</sub> = 6.0/6.0 = 1.0 A; I<sub>12</sub> = 6.0/12 = 0.50 A.'], a: '1.5 A, 1.0 A and 0.50 A' },
    { q: 'A cell of emf 1.5 V and internal resistance 0.50 Ω is connected to a 2.5 Ω resistor. Find the current, the terminal pd and the lost volts.', s: ['I = E/(R + r) = 1.5/3.0 = 0.50 A.', 'V = IR = 1.25 V.', 'Lost volts = Ir = 0.25 V (check: 1.25 + 0.25 = 1.5 V).'], a: '0.50 A; 1.25 V; 0.25 V' },
    { q: 'A 9.0 V supply is connected across a 2.0 kΩ resistor in series with a thermistor of resistance 4.0 kΩ. Find the pd across the thermistor, and state what happens as the temperature rises.', s: ['V = 9.0 × 4.0/(2.0 + 4.0) = 6.0 V.', 'Temperature rises → thermistor resistance falls → it takes a smaller share of the pd.'], a: '6.0 V, falling as temperature rises' }
  ],
  pitfalls: ['Forgetting to take the reciprocal at the end of 1/R = 1/R<sub>1</sub> + 1/R<sub>2</sub>.', 'Using the emf instead of the terminal pd for the external circuit.', 'Assuming the current splits equally at a junction.', 'Plotting V against R instead of V against I for internal resistance.'],
  cards: [
    ['Kirchhoff’s first law is a consequence of…', 'conservation of charge.'],
    ['Kirchhoff’s second law is a consequence of…', 'conservation of energy.'],
    ['Define emf.', 'Energy converted to electrical potential energy per unit charge passing through the source.'],
    ['Terminal pd equation?', 'V = E − Ir'],
    ['What are “lost volts”?', 'The pd Ir across the internal resistance.'],
    ['V–I graph for a cell: intercept and gradient?', 'Intercept = E; gradient = −r.'],
    ['Potential divider equation?', 'V<sub>out</sub> = V<sub>in</sub> R<sub>2</sub>/(R<sub>1</sub> + R<sub>2</sub>)'],
    ['NTC thermistor resistance as T rises?', 'Decreases.'],
    ['LDR resistance as light increases?', 'Decreases.'],
    ['Two 10 Ω resistors in parallel?', '5 Ω']
  ],
  quiz: [
    { q: 'Kirchhoff’s first law is a consequence of the conservation of', o: ['charge', 'energy', 'momentum', 'current'], x: 'Charge cannot accumulate at a junction.' },
    { q: 'Kirchhoff’s second law is a consequence of the conservation of', o: ['energy', 'charge', 'resistance', 'power'], x: 'Energy per unit charge around a loop.' },
    { q: 'Three 6.0 Ω resistors are connected in parallel. The combined resistance is', o: ['2.0 Ω', '18 Ω', '6.0 Ω', '0.50 Ω'], x: '1/R = 3/6.' },
    { q: '4.0 Ω and 12 Ω in parallel have a combined resistance of', o: ['3.0 Ω', '16 Ω', '8.0 Ω', '0.33 Ω'], x: '(4 × 12)/(4 + 12) = 3.0 Ω.' },
    { q: 'The emf of a cell is', o: ['the energy converted to electrical energy per unit charge passing through it', 'the pd across its terminals when current flows', 'the maximum current it can supply', 'the energy dissipated in its internal resistance per coulomb'], x: 'Terminal pd equals emf only when I = 0.' },
    { q: 'A cell of emf 6.0 V and internal resistance 1.0 Ω is connected to a 5.0 Ω resistor. The terminal pd is', o: ['5.0 V', '6.0 V', '1.0 V', '4.0 V'], x: 'I = 6/6 = 1.0 A; V = 1.0 × 5.0.' },
    { q: 'For a graph of terminal pd (y) against current (x) for a cell, the gradient is', o: ['−r', 'r', 'E', '1/r'], x: 'V = E − Ir.' },
    { q: 'A 10 V supply is across 2.0 kΩ and 3.0 kΩ in series. The pd across the 3.0 kΩ is', o: ['6.0 V', '4.0 V', '3.0 V', '10 V'], x: '10 × 3/5.' },
    { q: 'A current of 3.0 A enters a junction. 1.0 A leaves by one wire. The current in the only other wire is', o: ['2.0 A out', '4.0 A out', '2.0 A in', '1.0 A out'], x: 'Kirchhoff 1.' },
    { q: 'The terminal pd of a cell is less than its emf when current flows because', o: ['work is done against the internal resistance', 'charge is lost inside the cell', 'the emf falls whenever current flows', 'the external resistance is too high'], x: 'Lost volts = Ir.' },
    { q: 'Adding another resistor in parallel with an existing network', o: ['decreases the total resistance', 'increases the total resistance', 'does not change it', 'doubles it'], x: 'Extra path for current.' }
  ],
  exam: [
    { q: 'Describe how to determine the emf and internal resistance of a cell by a graphical method.', m: 6, ms: ['Cell in series with ammeter and variable resistor; voltmeter across cell terminals.', 'Vary resistance to obtain a range of currents; record V and I.', 'Switch off between readings to prevent heating / change of r.', 'Plot V against I; straight line.', 'Intercept on V axis = E.', 'Gradient = −r.'] },
    { q: 'A battery of emf 12 V and internal resistance 0.40 Ω delivers 5.0 A to a load. Calculate the terminal pd, the power delivered to the load and the power wasted in the battery.', m: 4, ms: ['V = 12 − 5.0 × 0.40 = 10 V', 'P<sub>load</sub> = IV = 50 W', 'P<sub>wasted</sub> = I²r = 10 W', '(Check: total EI = 60 W)'] },
    { q: 'Explain why the brightness of the headlamps of a car dims when the starter motor is operated.', m: 3, ms: ['Starter motor draws a very large current from the battery.', 'Large lost volts Ir across internal resistance.', 'Terminal pd (across lamps in parallel) falls, so lamp power V²/R falls.'] }
  ],
  sims: ['circuit'], gens: ['circ1', 'emf1', 'div1']
});

TOPICS.push({
  id: '2.4', unit: '2', title: 'The Nature of Waves', short: 'Progressive waves, polarisation, phase',
  summary: 'What a wave is, how to describe it with amplitude, wavelength, frequency and phase, and why polarisation proves light is transverse.',
  spec: [
    'Understand that a progressive wave transfers energy without transferring matter',
    'Distinguish between transverse and longitudinal waves, with examples',
    'Understand polarisation and that only transverse waves can be polarised',
    'Define displacement, amplitude, wavelength, period, frequency, wave speed; use c = fλ',
    'Understand phase and phase difference (in radians or degrees)',
    'Interpret graphs of displacement against distance and against time'
  ],
  learn: [
    { h: 'Progressive waves', html: `
<p>A <b>progressive wave</b> is a disturbance that transfers energy from one place to another without transferring matter. The particles of the medium oscillate about fixed equilibrium positions.</p>
<div class="box def"><b class="lbl">Transverse and longitudinal</b><p><b>Transverse</b>: particle oscillations are perpendicular to the direction of energy transfer (e.g. EM waves, waves on a string, S-waves).</p><p><b>Longitudinal</b>: oscillations are parallel to the direction of energy transfer, forming compressions and rarefactions (e.g. sound, P-waves).</p></div>` },
    { h: 'Describing a wave', html: `
<ul><li><b>Displacement</b> — distance of a particle from its equilibrium position (in a given direction).</li>
<li><b>Amplitude</b> A — the maximum displacement from the equilibrium position.</li>
<li><b>Wavelength</b> λ — the distance between adjacent points oscillating in phase (e.g. crest to crest).</li>
<li><b>Period</b> T — the time for one complete oscillation; <b>frequency</b> f = 1/T is the number of oscillations per second (Hz).</li>
<li><b>Wave speed</b> c — the distance a wave front moves per unit time.</li></ul>
<div class="box eq">$c = fλ$</div>
<p>In one period the wave moves forward one wavelength, so c = λ/T = fλ.</p>
[[d:wave-xd]]
<p>A displacement–<b>distance</b> graph is a snapshot of the whole wave at one instant. A displacement–<b>time</b> graph shows how one particle moves; the horizontal spacing of peaks gives T.</p>` },
    { h: 'Phase difference', html: `
<p>Phase difference tells us how far one oscillation is ahead of another, as a fraction of a cycle. One whole cycle = 2π rad = 360°.</p>
<div class="box eq">$"phase difference" = @frac{2πx}{λ}$ for two points a distance x apart</div>
<p>Points one wavelength apart are <b>in phase</b> (difference 2π, equivalent to 0). Points half a wavelength apart are in <b>antiphase</b> (π rad, 180°).</p>` },
    { h: 'Polarisation', html: `
<div class="box def"><b class="lbl">Definition</b><p>A wave is <b>plane polarised</b> if its oscillations take place in one plane only (a plane containing the direction of propagation).</p></div>
<p>Only transverse waves can be polarised; longitudinal oscillations are already along the direction of travel. So polarisation of light shows that light is transverse.</p>
<ul><li>Unpolarised light through a Polaroid filter: transmitted light is plane polarised with half the intensity.</li>
<li>A second Polaroid (the analyser) rotated through 90° relative to the first blocks the light completely (crossed Polaroids). Rotating it through 360° gives two maxima and two minima.</li>
<li>Microwaves from a transmitter are already polarised: a metal grille rotated between transmitter and receiver shows the same effect.</li></ul>
<p>Applications: Polaroid sunglasses (reducing glare from reflected light, which is partially polarised), LCD screens, photographic filters, stress analysis in plastics.</p>` }
  ],
  eqs: [['c = fλ', 'wave equation'], ['f = @frac{1}{T}', 'frequency and period'], ['"phase difference" = @frac{2πx}{λ}', 'in radians']],
  worked: [
    { q: 'A radio station broadcasts at 97.4 MHz. Find the wavelength.', s: ['λ = c/f = 3.00 × 10<sup>8</sup> / 97.4 × 10<sup>6</sup>.'], a: '3.08 m' },
    { q: 'Two points on a progressive wave of wavelength 0.60 m are 0.15 m apart. What is their phase difference?', s: ['Fraction of a wavelength: 0.15/0.60 = ¼.', 'Phase difference = ¼ × 2π.'], a: 'π/2 rad (90°)' },
    { q: 'A particle on a sound wave takes 2.5 ms to complete one oscillation. The wave speed is 340 m s<sup>−1</sup>. Find the frequency and wavelength.', s: ['f = 1/T = 1/2.5 × 10<sup>−3</sup> = 400 Hz.', 'λ = c/f = 340/400 = 0.85 m.'], a: '400 Hz; 0.85 m' }
  ],
  pitfalls: ['Saying waves transfer matter.', 'Calling sound transverse or claiming it can be polarised.', 'Reading the period from a displacement–distance graph (that axis gives λ).', 'Confusing amplitude with peak-to-trough height (that is 2A).'],
  cards: [
    ['What does a progressive wave transfer?', 'Energy (not matter).'],
    ['Define a transverse wave.', 'Oscillations perpendicular to the direction of energy transfer.'],
    ['Define a longitudinal wave.', 'Oscillations parallel to the direction of energy transfer.'],
    ['Define wavelength.', 'Distance between adjacent points oscillating in phase.'],
    ['Define amplitude.', 'Maximum displacement from equilibrium.'],
    ['Wave equation?', 'c = fλ'],
    ['Phase difference between points λ/2 apart?', 'π rad (antiphase).'],
    ['Define plane polarised.', 'Oscillations in one plane only.'],
    ['Which waves can be polarised?', 'Only transverse waves.'],
    ['What does polarisation show about light?', 'Light is a transverse wave.'],
    ['Crossed Polaroids transmit…', 'no light.']
  ],
  quiz: [
    { q: 'Which type of wave can be polarised?', o: ['light', 'sound in air', 'ultrasound', 'a compression wave on a slinky'], x: 'Only transverse waves.' },
    { q: 'Which is a longitudinal wave?', o: ['sound', 'microwaves', 'a wave on a guitar string', 'X-rays'], x: 'Compressions and rarefactions.' },
    { q: 'A wave has frequency 50 Hz and wavelength 6.0 m. Its speed is', o: ['300 m s<sup>−1</sup>', '8.3 m s<sup>−1</sup>', '0.12 m s<sup>−1</sup>', '56 m s<sup>−1</sup>'], x: 'c = fλ.' },
    { q: 'Two points on a progressive wave are half a wavelength apart. They oscillate', o: ['in antiphase', 'in phase', 'with a phase difference of π/2', 'with different frequencies'], x: 'Phase difference π rad.' },
    { q: 'A wave has period 20 ms. Its frequency is', o: ['50 Hz', '20 Hz', '0.05 Hz', '500 Hz'], x: 'f = 1/0.020.' },
    { q: 'Progressive waves transfer', o: ['energy but not matter', 'matter but not energy', 'both energy and matter', 'neither energy nor matter'], x: 'Particles oscillate about fixed positions.' },
    { q: 'The amplitude of a wave is', o: ['the maximum displacement from equilibrium', 'the distance from crest to trough', 'the distance between two crests', 'the speed of the particles'], x: 'Crest to trough is 2A.' },
    { q: 'Plane polarised light has oscillations', o: ['in one plane only', 'in all planes perpendicular to its motion', 'parallel to its direction of travel', 'of one frequency only'], x: 'One plane containing the direction of propagation.' },
    { q: 'Unpolarised light passes through two Polaroids whose transmission axes are at 90°. The transmitted intensity is', o: ['zero', 'half the original', 'a quarter of the original', 'the original'], x: 'The first polarises, the second blocks.' },
    { q: 'Two points one wavelength apart have a phase difference of', o: ['2π rad (in phase)', 'π rad', 'π/2 rad', '4π rad'], x: 'A whole cycle.' },
    { q: 'The horizontal axis of a graph used to read off the wavelength directly is', o: ['distance', 'time', 'frequency', 'amplitude'], x: 'Displacement–distance snapshot.' }
  ],
  exam: [
    { q: 'Distinguish between transverse and longitudinal waves, giving an example of each.', m: 3, ms: ['Transverse: oscillations perpendicular to direction of energy transfer/propagation.', 'Longitudinal: oscillations parallel to direction of energy transfer.', 'Examples, e.g. light (transverse), sound (longitudinal).'] },
    { q: 'Describe how you would show that microwaves are transverse, using a microwave transmitter and receiver.', m: 4, ms: ['Place receiver facing transmitter; note signal.', 'Rotate receiver (or insert metal grille and rotate it) about the line joining them.', 'Signal falls to (near) zero at 90° and rises to maximum at 0°/180°.', 'Waves are polarised; only transverse waves can be polarised.'] },
    { q: 'A wave on a rope has frequency 4.0 Hz and wavelength 0.75 m. Calculate the wave speed and the phase difference between two points 0.25 m apart.', m: 3, ms: ['c = fλ = 3.0 m s<sup>−1</sup>', 'x/λ = 0.25/0.75 = ⅓', 'Phase difference = 2π/3 rad (120°)'] }
  ],
  sims: ['wave'], gens: ['wave1', 'phase1']
});

TOPICS.push({
  id: '2.5', unit: '2', title: 'Wave Properties', short: 'Diffraction, interference, stationary waves',
  summary: 'What waves do when they meet gaps and each other: diffraction, two-source interference, the diffraction grating and stationary waves.',
  spec: [
    'Describe diffraction at a slit or obstacle and how it depends on the gap relative to the wavelength',
    'State the principle of superposition; understand coherence and path difference',
    'State the conditions for constructive and destructive interference',
    'Use λ = ay/D for Young’s double-slit experiment',
    'Use d sin θ = nλ for a diffraction grating',
    'Explain the formation of stationary waves; identify nodes and antinodes',
    'Compare stationary and progressive waves',
    'Determine wavelength using double slits and a grating; determine the speed of sound using stationary waves (specified practicals)'
  ],
  learn: [
    { h: 'Diffraction', html: `
<p><b>Diffraction</b> is the spreading out of waves as they pass through a gap or around an obstacle. It is most noticeable when the gap is similar in size to the wavelength. A gap much wider than λ gives little spreading.</p>
<p>This is why you can hear round corners (sound λ ~ 1 m) but not see round them (light λ ~ 500 nm), and why long-wave radio reaches places behind hills.</p>` },
    { h: 'Superposition and interference', html: `
<div class="box def"><b class="lbl">Principle of superposition</b><p>When two or more waves meet at a point, the resultant displacement is the (vector) sum of the individual displacements.</p></div>
<div class="box def"><b class="lbl">Coherence</b><p>Two sources are <b>coherent</b> if they have a constant phase difference (which requires the same frequency).</p></div>
<p><b>Path difference</b> is the difference in distance travelled from the two sources to a point. For coherent sources oscillating <b>in phase</b>:</p>
<ul><li>Constructive interference (maximum) when path difference = nλ.</li><li>Destructive interference (minimum) when path difference = (n + ½)λ.</li></ul>
<p>For a clear pattern, the waves should also have similar amplitudes (so minima are nearly zero).</p>` },
    { h: 'Young’s double slits', html: `
[[d:double-slit]]
<div class="box eq">$λ = @frac{ay}{D}$</div>
<p>a = slit separation, y = fringe separation (centre-to-centre spacing of adjacent bright fringes), D = slit-to-screen distance. Valid when D ≫ a and y.</p>
<p>Increase the fringe spacing by increasing D or λ, or by decreasing a. Measure across several fringes (e.g. 10y) with a ruler to reduce percentage uncertainty.</p>
<div class="box warn"><b class="lbl">Safety</b><p>Never look directly into a laser beam or its reflection.</p></div>` },
    { h: 'The diffraction grating', html: `
[[d:grating]]
<div class="box eq">$d@,"sin"@,θ = nλ$</div>
<p>d = spacing between adjacent lines (d = 1/N where N is lines per metre), θ = angle of the n<sup>th</sup> order maximum from the straight-through direction. Since sin θ ≤ 1, the highest order visible is the largest whole number ≤ d/λ.</p>
<p>A grating gives sharper, brighter and more widely spaced maxima than double slits, so λ can be measured more precisely. With white light, the central maximum is white and each order is a spectrum with violet (shortest λ) nearest the centre.</p>` },
    { h: 'Stationary waves', html: `
<p>A <b>stationary (standing) wave</b> forms when two progressive waves of the same frequency (and similar amplitude) travelling in opposite directions superpose — typically a wave and its reflection.</p>
<ul><li><b>Nodes</b>: points of zero amplitude. <b>Antinodes</b>: points of maximum amplitude.</li><li>Adjacent nodes (or antinodes) are λ/2 apart.</li></ul>
[[d:harmonics]]
<div class="tbl"><table><tr><th></th><th>Progressive</th><th>Stationary</th></tr>
<tr><td>Energy</td><td>transferred</td><td>no net transfer</td></tr>
<tr><td>Amplitude</td><td>same for all points (no losses)</td><td>varies from zero (node) to maximum (antinode)</td></tr>
<tr><td>Phase</td><td>varies continuously along one λ</td><td>all points between adjacent nodes in phase; antiphase with the next segment</td></tr>
<tr><td>Wavelength</td><td>distance between adjacent points in phase</td><td>twice the node–node distance</td></tr></table></div>
<p>A string fixed at both ends has nodes at the ends. The fundamental (first harmonic) has λ = 2L, so $f_1 = @frac{c}{2L}$; the higher harmonics are 2f<sub>1</sub>, 3f<sub>1</sub>, …</p>
<div class="box def"><b class="lbl">Specified practical: speed of sound</b><p>A loudspeaker faces a flat reflector; a small microphone connected to an oscilloscope is moved along the line between them to locate successive nodes (minimum signal). Node–node spacing = λ/2. Measure the distance across several nodes, find λ, then c = fλ using the signal generator frequency.</p></div>` }
  ],
  eqs: [['λ = @frac{ay}{D}', 'Young’s double slits'], ['d@,"sin"@,θ = nλ', 'diffraction grating'], ['"node–node" = @frac{λ}{2}', 'stationary wave'], ['f_1 = @frac{c}{2L}', 'string fixed at both ends']],
  worked: [
    { q: 'In a double-slit experiment, a = 0.50 mm, D = 2.0 m and ten fringe spacings measure 26 mm. Find λ.', s: ['y = 26/10 = 2.6 mm.', 'λ = ay/D = 0.50 × 10<sup>−3</sup> × 2.6 × 10<sup>−3</sup> / 2.0.'], a: '6.5 × 10<sup>−7</sup> m (650 nm)' },
    { q: 'Light of wavelength 590 nm falls normally on a grating with 300 lines per mm. Find the angle of the first order and the highest order visible.', s: ['d = 1/300 000 = 3.33 × 10<sup>−6</sup> m.', 'sin θ<sub>1</sub> = λ/d = 0.177, so θ<sub>1</sub> = 10.2°.', 'n<sub>max</sub> ≤ d/λ = 5.65, so the highest order is 5.'], a: '10.2°; 5th order' },
    { q: 'A guitar string 0.65 m long vibrates at its fundamental frequency of 196 Hz. Find the speed of waves on the string.', s: ['Fundamental: λ = 2L = 1.30 m.', 'c = fλ = 196 × 1.30.'], a: '255 m s<sup>−1</sup>' }
  ],
  pitfalls: ['Calling sources coherent just because they have the same frequency — the phase difference must be constant.', 'Using lines per mm directly as d; d = 1/N in metres.', 'Rounding n<sub>max</sub> up instead of down.', 'Saying stationary-wave nodes are λ apart (they are λ/2 apart).', 'Measuring a single fringe spacing instead of across many.'],
  cards: [
    ['State the principle of superposition.', 'Resultant displacement = vector sum of individual displacements where waves meet.'],
    ['Define coherent sources.', 'Sources with a constant phase difference (same frequency).'],
    ['Condition for constructive interference (in-phase sources)?', 'Path difference = nλ.'],
    ['Condition for destructive interference (in-phase sources)?', 'Path difference = (n + ½)λ.'],
    ['Young’s slits equation?', 'λ = ay/D'],
    ['Grating equation?', 'd sin θ = nλ'],
    ['When is diffraction greatest?', 'When the gap is about the same size as the wavelength.'],
    ['How is a stationary wave formed?', 'Superposition of two waves of the same frequency travelling in opposite directions.'],
    ['Node to adjacent node distance?', 'λ/2'],
    ['Phase of points between adjacent nodes?', 'All in phase.'],
    ['Does a stationary wave transfer energy?', 'No net energy transfer.'],
    ['Fundamental wavelength of a string of length L?', '2L'],
    ['Advantage of a grating over double slits?', 'Sharper, brighter, more widely spaced maxima → more precise λ.']
  ],
  quiz: [
    { q: 'Two sources are coherent if they have', o: ['a constant phase difference', 'the same amplitude', 'the same intensity', 'zero phase difference only'], x: 'Constant phase difference (hence the same frequency).' },
    { q: 'For two coherent sources in phase, destructive interference occurs where the path difference is', o: ['(n + ½)λ', 'nλ', '2nλ', 'nλ/4'], x: 'Waves arrive in antiphase.' },
    { q: 'In a Young’s double-slit experiment, which change increases the fringe separation?', o: ['moving the screen further from the slits', 'using slits closer to the screen', 'increasing the slit separation', 'using blue light instead of red'], x: 'y = λD/a.' },
    { q: 'The distance between adjacent nodes on a stationary wave is', o: ['λ/2', 'λ', 'λ/4', '2λ'], x: 'Node–antinode is λ/4.' },
    { q: 'Points between two adjacent nodes of a stationary wave oscillate', o: ['in phase with each other', 'in antiphase with each other', 'with equal amplitudes', 'with a phase that varies along the wave'], x: 'All in phase, different amplitudes.' },
    { q: 'A grating has 500 lines per mm. The line spacing d is', o: ['2.0 × 10<sup>−6</sup> m', '5.0 × 10<sup>−4</sup> m', '2.0 × 10<sup>−3</sup> m', '5.0 × 10<sup>5</sup> m'], x: '1/(5.0 × 10<sup>5</sup> m<sup>−1</sup>).' },
    { q: 'With d = 2.0 μm and λ = 600 nm, the highest order maximum visible is', o: ['3', '4', '2', '6'], x: 'd/λ = 3.33 → n = 3.' },
    { q: 'Diffraction is most noticeable when the gap width is', o: ['about equal to the wavelength', 'much larger than the wavelength', 'much smaller than the amplitude', 'zero'], x: '' },
    { q: 'Which statement about a stationary wave is correct?', o: ['There is no net transfer of energy', 'All points have the same amplitude', 'It is formed by two waves travelling in the same direction', 'Adjacent antinodes are λ apart'], x: 'Energy is stored, not transferred.' },
    { q: 'For a string fixed at both ends vibrating at its fundamental frequency, the string length is', o: ['λ/2', 'λ', 'λ/4', '2λ'], x: 'One loop: node–antinode–node.' },
    { q: 'White light is shone on a diffraction grating. In each first-order spectrum, the colour closest to the central maximum is', o: ['violet', 'red', 'green', 'white'], x: 'Smaller λ → smaller θ.' },
    { q: 'Monochromatic light of wavelength 500 nm passes through a grating and the first order is at 30°. The grating spacing is', o: ['1.0 × 10<sup>−6</sup> m', '2.5 × 10<sup>−7</sup> m', '5.0 × 10<sup>−7</sup> m', '1.0 × 10<sup>−3</sup> m'], x: 'd = λ/sin 30°.' }
  ],
  exam: [
    { q: 'Describe how you would determine the wavelength of laser light using a diffraction grating.', m: 6, ms: ['Laser shone normally onto grating; pattern on screen/wall ~1–2 m away.', 'd calculated from lines per mm (d = 1/N).', 'Measure distance D grating–screen and distance between symmetrical orders (2x) with metre rule.', 'θ from tan θ = x/D (using half the separation of ± orders).', 'λ = d sin θ / n; repeat for several orders and average.', 'Safety: do not look into beam; avoid reflections.'] },
    { q: 'State three differences between a progressive wave and a stationary wave.', m: 3, ms: ['Energy: transferred vs no net transfer.', 'Amplitude: same everywhere vs varies (zero at nodes).', 'Phase: varies along wave vs in phase between adjacent nodes.'] },
    { q: 'Explain how a stationary wave is formed on a string fixed at both ends and why only certain frequencies are possible.', m: 4, ms: ['Wave travels along string and is reflected at the fixed end.', 'Incident and reflected waves (same f, speed, similar A) superpose.', 'Fixed ends must be nodes.', 'Only wavelengths where L = nλ/2 fit, so f = nc/2L.'] }
  ],
  sims: ['slits', 'standing', 'grating'], gens: ['yds1', 'grat1', 'string1']
});

TOPICS.push({
  id: '2.6', unit: '2', title: 'Refraction of Light', short: 'Snell’s law, TIR, optical fibres',
  summary: 'Light changes speed between media. Snell’s law, total internal reflection and why multimode fibres limit how fast data can travel.',
  spec: [
    'Define refractive index n = c/v',
    'Use Snell’s law n₁ sin θ₁ = n₂ sin θ₂',
    'Understand that frequency is unchanged on refraction while speed and wavelength change',
    'State the conditions for total internal reflection and use sin θc = n₂/n₁',
    'Describe the structure of a multimode optical fibre and the role of the cladding',
    'Explain multimode dispersion and how it limits data rate; calculate time differences',
    'Measure refractive index (specified practical)'
  ],
  learn: [
    { h: 'Refractive index and Snell’s law', html: `
<div class="box def"><b class="lbl">Definition</b><p>The <b>refractive index</b> of a medium is $n = @frac{c}{v}$, the speed of light in a vacuum divided by the speed of light in the medium. n ≥ 1; for air n ≈ 1.00.</p></div>
[[d:snell]]
<div class="box eq">$n_1@,"sin"@,θ_1 = n_2@,"sin"@,θ_2$</div>
<p>Angles are measured from the normal. Going into a medium of higher n, light slows down and bends <b>towards</b> the normal. The <b>frequency stays the same</b>, so the wavelength decreases in proportion to the speed.</p>` },
    { h: 'Total internal reflection', html: `
<p>When light travels from a higher to a lower refractive index, the refracted ray bends away from the normal. At the <b>critical angle</b> θ<sub>c</sub> the refracted ray travels along the boundary (θ<sub>2</sub> = 90°):</p>
<div class="box eq">$"sin"@,θ_c = @frac{n_2}{n_1}$</div>
<div class="box def"><b class="lbl">Conditions for TIR</b><ol><li>Light travels from a medium of higher refractive index towards one of lower refractive index.</li><li>The angle of incidence is greater than the critical angle.</li></ol></div>
<p>Glass (n = 1.50) to air: θ<sub>c</sub> = sin<sup>−1</sup>(1/1.50) = 41.8°.</p>` },
    { h: 'Optical fibres and multimode dispersion', html: `
<p>A step-index fibre has a <b>core</b> surrounded by <b>cladding</b> of slightly lower refractive index. Light travels along the core by repeated total internal reflection at the core–cladding boundary. The cladding also protects the core surface from scratches and prevents light leaking into adjacent fibres (crosstalk).</p>
[[d:fibre]]
<p>In a <b>multimode</b> fibre (wide core), rays can take many paths. A ray reflecting at close to the critical angle travels further than a ray along the axis, so it arrives later. A short pulse of light therefore spreads out in time — <b>multimode dispersion</b>. Adjacent pulses can overlap, so this limits the rate at which data can be sent and the distance between repeaters.</p>
<div class="box def"><b class="lbl">Time difference</b><p>Axial ray: $t_1 = @frac{L}{v} = @frac{Ln_1}{c}$. Ray at the critical angle travels $L/"sin"@,θ_c$, so $t_2 = @frac{t_1}{"sin"@,θ_c} = t_1 @frac{n_1}{n_2}$.</p></div>
<p>Multimode dispersion is reduced by using a very narrow core (a <b>monomode</b> fibre) so there is essentially one path, or by making the core and cladding indices very close.</p>
<div class="box def"><b class="lbl">Specified practical: refractive index</b><p>Trace rays through a rectangular glass block with ray box (or pins) for a range of incidence angles. Measure θ<sub>1</sub> and θ<sub>2</sub> with a protractor; plot sin θ<sub>1</sub> against sin θ<sub>2</sub>: gradient = n of the glass.</p></div>` }
  ],
  eqs: [['n = @frac{c}{v}', 'refractive index'], ['n_1@,"sin"@,θ_1 = n_2@,"sin"@,θ_2', 'Snell’s law'], ['"sin"@,θ_c = @frac{n_2}{n_1}', 'critical angle']],
  worked: [
    { q: 'Light in air hits glass (n = 1.52) at 40° to the normal. Find the angle of refraction and the speed of light in the glass.', s: ['sin θ<sub>2</sub> = sin 40° / 1.52 = 0.423, so θ<sub>2</sub> = 25.0°.', 'v = c/n = 3.00 × 10<sup>8</sup> / 1.52 = 1.97 × 10<sup>8</sup> m s<sup>−1</sup>.'], a: '25°; 1.97 × 10<sup>8</sup> m s<sup>−1</sup>' },
    { q: 'An optical fibre has core index 1.50 and cladding index 1.45. Find the critical angle.', s: ['sin θ<sub>c</sub> = 1.45/1.50 = 0.967.'], a: '75.2°' },
    { q: 'For the fibre above, 1.0 km long, find the difference in time between the axial ray and a ray travelling at the critical angle.', s: ['Axial: t<sub>1</sub> = Ln<sub>1</sub>/c = 1000 × 1.50 / 3.00 × 10<sup>8</sup> = 5.00 μs.', 'Critical ray: t<sub>2</sub> = t<sub>1</sub> × n<sub>1</sub>/n<sub>2</sub> = 5.00 × 1.50/1.45 = 5.17 μs.', 'Δt = 0.17 μs.'], a: '≈ 1.7 × 10<sup>−7</sup> s' }
  ],
  pitfalls: ['Measuring angles from the surface rather than the normal.', 'Saying frequency changes on refraction.', 'Writing sin θ<sub>c</sub> = n<sub>1</sub>/n<sub>2</sub> (it must be less than 1: lower index over higher).', 'Saying cladding “reflects” light — TIR happens because of its lower refractive index.'],
  cards: [
    ['Define refractive index.', 'n = c/v: speed in vacuum ÷ speed in medium.'],
    ['State Snell’s law.', 'n₁ sin θ₁ = n₂ sin θ₂'],
    ['What stays constant when light refracts?', 'Frequency.'],
    ['Two conditions for TIR?', 'Travelling to a lower n; angle of incidence > critical angle.'],
    ['Critical angle formula?', 'sin θ<sub>c</sub> = n₂/n₁ (n₁ > n₂)'],
    ['Critical angle of glass n = 1.50 in air?', '41.8°'],
    ['Purpose of cladding?', 'Lower n for TIR at the core boundary; protects core; prevents crosstalk.'],
    ['What is multimode dispersion?', 'Different ray paths take different times → pulses spread out.'],
    ['How to reduce multimode dispersion?', 'Use a very narrow core (monomode fibre).'],
    ['Graph for n of a glass block?', 'sin θ<sub>1</sub> (air) against sin θ<sub>2</sub> (glass): gradient = n.']
  ],
  quiz: [
    { q: 'Light travels at 2.26 × 10<sup>8</sup> m s<sup>−1</sup> in water. The refractive index of water is', o: ['1.33', '0.75', '2.26', '1.50'], x: 'n = 3.00/2.26.' },
    { q: 'When light passes from air into glass, which quantity is unchanged?', o: ['frequency', 'wavelength', 'speed', 'direction (at non-zero incidence)'], x: 'Frequency is set by the source.' },
    { q: 'Total internal reflection can occur when light travels', o: ['from glass towards air at more than the critical angle', 'from air towards glass at more than the critical angle', 'from glass towards air at less than the critical angle', 'from air to glass at any angle'], x: 'Higher n → lower n and θ > θ<sub>c</sub>.' },
    { q: 'The critical angle for glass of refractive index 1.50 in air is about', o: ['42°', '48°', '34°', '56°'], x: 'sin<sup>−1</sup>(1/1.50).' },
    { q: 'The cladding of an optical fibre must have', o: ['a lower refractive index than the core', 'a higher refractive index than the core', 'the same refractive index as the core', 'a reflective metal coating'], x: 'Otherwise TIR cannot happen.' },
    { q: 'Multimode dispersion occurs because', o: ['rays taking different paths take different times', 'different wavelengths travel at different speeds', 'the fibre absorbs light', 'the cladding scatters light'], x: 'Path length differences.' },
    { q: 'Multimode dispersion can be reduced by', o: ['making the core narrower', 'making the core wider', 'increasing the difference between core and cladding indices', 'using a brighter source'], x: 'A monomode fibre has a very narrow core.' },
    { q: 'A ray enters glass from air at an angle to the normal. It', o: ['bends towards the normal', 'bends away from the normal', 'does not change direction', 'is totally internally reflected'], x: 'Speed decreases.' },
    { q: 'When the angle of incidence equals the critical angle, the angle of refraction is', o: ['90°', '0°', '45°', 'equal to the critical angle'], x: 'Refracted ray along the boundary.' },
    { q: 'Light travels from glass (n = 1.50) into water (n = 1.33). The critical angle is about', o: ['62°', '42°', '49°', '28°'], x: 'sin θ<sub>c</sub> = 1.33/1.50 = 0.887.' }
  ],
  exam: [
    { q: 'Explain what is meant by multimode dispersion in an optical fibre and why it is a problem for data transmission.', m: 4, ms: ['Rays travel along different paths (axial vs repeated TIR at large angles).', 'Longer paths take longer time.', 'A pulse spreads out (broadens) in time.', 'Pulses may overlap, limiting data rate / distance before regeneration.'] },
    { q: 'A step-index fibre has a core of refractive index 1.48 and cladding of 1.46. Calculate the critical angle at the core–cladding boundary and the speed of light in the core.', m: 3, ms: ['sin θ<sub>c</sub> = 1.46/1.48', 'θ<sub>c</sub> = 80.6°', 'v = c/n = 2.03 × 10<sup>8</sup> m s<sup>−1</sup>'] },
    { q: 'Describe how you would determine the refractive index of a glass block.', m: 5, ms: ['Place block on paper, draw round it; draw normal.', 'Ray box/pins: incident ray at measured θ<sub>1</sub>; mark emergent ray; join to find refracted ray.', 'Measure θ<sub>2</sub> with protractor.', 'Repeat for several θ<sub>1</sub>.', 'Plot sin θ<sub>1</sub> vs sin θ<sub>2</sub>; gradient = n.'] }
  ],
  sims: ['refraction'], gens: ['snell1', 'crit1', 'fibre1']
});

TOPICS.push({
  id: '2.7', unit: '2', title: 'Photons', short: 'Photoelectric effect, energy levels, de Broglie',
  summary: 'Light comes in packets. The photoelectric effect, energy levels and line spectra, and the discovery that particles behave as waves.',
  spec: [
    'Describe the photoelectric effect and the observations that wave theory cannot explain',
    'Use E = hf and Einstein’s equation Ek max = hf − φ; define work function and threshold frequency',
    'Describe how Ek max can be measured using a stopping potential',
    'Use the electron volt as a unit of energy',
    'Explain line emission and absorption spectra in terms of discrete energy levels; hf = E₁ − E₂',
    'Understand ionisation and excitation',
    'Use photon momentum p = h/λ and the de Broglie equation λ = h/p; electron diffraction as evidence',
    'Determine the Planck constant using LEDs (specified practical)'
  ],
  learn: [
    { h: 'Photons', html: `
<p>EM radiation is emitted and absorbed in discrete packets called <b>photons</b>. Each photon carries energy:</p>
<div class="box eq">$E = hf = @frac{hc}{λ}$ &nbsp;&nbsp; h = 6.63 × 10<sup>−34</sup> J s</div>
<p>The <b>electron volt</b> is the energy gained by an electron accelerated through a pd of 1 V: 1 eV = 1.60 × 10<sup>−19</sup> J. A 500 nm photon has E = 3.98 × 10<sup>−19</sup> J = 2.49 eV.</p>` },
    { h: 'The photoelectric effect', html: `
<p>When EM radiation of high enough frequency shines on a clean metal surface, electrons are emitted. Observations:</p>
<ol><li>No electrons are emitted below a <b>threshold frequency</b> f<sub>0</sub>, however intense the light.</li>
<li>Above f<sub>0</sub>, the maximum kinetic energy of the photoelectrons depends on frequency, not intensity.</li>
<li>The rate of emission is proportional to the intensity.</li>
<li>Emission is effectively instantaneous, even for very dim light.</li></ol>
<p>Wave theory predicts energy should build up gradually with any frequency. It cannot explain 1, 2 or 4.</p>
<div class="box def"><b class="lbl">Einstein’s explanation</b><p>Each photon gives <b>all</b> its energy to <b>one</b> electron. Some of it (at least φ) is needed to escape; the rest becomes kinetic energy:</p><p style="text-align:center">$E_{k max} = hf - φ$</p><p>The <b>work function</b> φ is the minimum energy needed to remove an electron from the surface of the metal. Threshold: $hf_0 = φ$.</p></div>
<p>More intense light means more photons per second, so more electrons per second — but each photon still has the same energy.</p>
[[d:ek-f]]` },
    { h: 'Measuring E<sub>k max</sub>: stopping potential', html: `
<p>In a vacuum photocell, make the collecting electrode negative relative to the emitting surface. Increase this reverse pd until the photocurrent just falls to zero. This <b>stopping potential</b> V<sub>s</sub> stops even the fastest electrons:</p>
<div class="box eq">$eV_s = E_{k max} = hf - φ$</div>
<p>A graph of V<sub>s</sub> against f is a straight line with gradient h/e and x-intercept f<sub>0</sub>.</p>` },
    { h: 'Energy levels and line spectra', html: `
<p>Electrons in atoms can only have certain discrete energies — <b>energy levels</b>. Energies are negative, with zero corresponding to a free (ionised) electron.</p>
[[d:levels]]
<ul><li><b>Excitation</b>: an electron moves to a higher level by absorbing a photon of exactly the right energy or by collision with another particle.</li>
<li><b>De-excitation</b>: the electron drops to a lower level, emitting a photon with $hf = E_{upper} - E_{lower}$.</li>
<li><b>Ionisation</b>: an electron gains enough energy to escape the atom completely.</li></ul>
<p>Only certain energy differences are possible, so a hot gas gives a <b>line emission spectrum</b>. Cool gas in front of a continuous source absorbs the same wavelengths, giving a <b>line absorption spectrum</b> (see 1.6).</p>` },
    { h: 'Wave–particle duality', html: `
<p>Photons carry momentum: $p = @frac{h}{λ}$. Conversely, de Broglie proposed that any particle of momentum p has a wavelength:</p>
<div class="box eq">$λ = @frac{h}{p} = @frac{h}{mv}$</div>
<p>Evidence: <b>electron diffraction</b>. A beam of electrons through a thin film of graphite produces diffraction rings on a fluorescent screen, just as waves would. Their de Broglie wavelength (~10<sup>−10</sup> m) is similar to the spacing between atoms. Faster electrons have shorter wavelength, so the rings get smaller.</p>
<div class="box def"><b class="lbl">Specified practical: h using LEDs</b><p>Each LED only starts to conduct and emit light when the pd reaches a threshold V, where eV ≈ hc/λ. Measure V for LEDs of known λ (several colours). Plot V against 1/λ: gradient = hc/e, so h = gradient × e/c.</p></div>` }
  ],
  eqs: [['E = hf = @frac{hc}{λ}', 'photon energy'], ['E_{k max} = hf - φ', 'Einstein photoelectric'], ['eV_s = E_{k max}', 'stopping potential'], ['hf = E_1 - E_2', 'transition between levels'], ['p = @frac{h}{λ}', 'photon momentum'], ['λ = @frac{h}{p}', 'de Broglie'], ['1 "eV" = 1.60 × 10^{-19} "J"', '']],
  worked: [
    { q: 'Find the energy of a 450 nm photon in J and eV.', s: ['E = hc/λ = 6.63 × 10<sup>−34</sup> × 3.00 × 10<sup>8</sup> / 450 × 10<sup>−9</sup> = 4.42 × 10<sup>−19</sup> J.', '÷ 1.60 × 10<sup>−19</sup> = 2.76 eV.'], a: '4.4 × 10<sup>−19</sup> J = 2.8 eV' },
    { q: 'Light of wavelength 400 nm falls on potassium (φ = 2.30 eV). Find the maximum kinetic energy and maximum speed of the photoelectrons.', s: ['Photon energy = hc/λ = 4.97 × 10<sup>−19</sup> J.', 'φ = 2.30 × 1.60 × 10<sup>−19</sup> = 3.68 × 10<sup>−19</sup> J.', 'E<sub>k max</sub> = 4.97 − 3.68 = 1.29 × 10<sup>−19</sup> J (0.81 eV).', 'v = √(2E<sub>k</sub>/m) = √(2 × 1.29 × 10<sup>−19</sup> / 9.11 × 10<sup>−31</sup>) = 5.3 × 10<sup>5</sup> m s<sup>−1</sup>.'], a: '1.3 × 10<sup>−19</sup> J; 5.3 × 10<sup>5</sup> m s<sup>−1</sup>' },
    { q: 'An electron in hydrogen drops from −1.51 eV to −3.40 eV. Find the wavelength of the photon emitted.', s: ['ΔE = 1.89 eV = 3.02 × 10<sup>−19</sup> J.', 'λ = hc/ΔE = 1.99 × 10<sup>−25</sup> / 3.02 × 10<sup>−19</sup>.'], a: '6.6 × 10<sup>−7</sup> m (red, H-α)' },
    { q: 'Find the de Broglie wavelength of an electron travelling at 3.0 × 10<sup>6</sup> m s<sup>−1</sup>.', s: ['p = mv = 9.11 × 10<sup>−31</sup> × 3.0 × 10<sup>6</sup> = 2.73 × 10<sup>−24</sup> kg m s<sup>−1</sup>.', 'λ = h/p = 6.63 × 10<sup>−34</sup> / 2.73 × 10<sup>−24</sup>.'], a: '2.4 × 10<sup>−10</sup> m' }
  ],
  pitfalls: ['Saying brighter light gives faster electrons.', 'Mixing eV and J in the same equation.', 'Forgetting that it is the <b>maximum</b> kinetic energy (many electrons lose energy before escaping).', 'Describing emission by an electron “jumping up”: emission is when it drops down.', 'Using E = hf with λ in nm without converting.'],
  cards: [
    ['Photon energy equation?', 'E = hf = hc/λ'],
    ['Define work function.', 'The minimum energy needed to remove an electron from the surface of a metal.'],
    ['Define threshold frequency.', 'The minimum frequency of radiation that causes photoelectric emission: f<sub>0</sub> = φ/h.'],
    ['Einstein’s photoelectric equation?', 'E<sub>k max</sub> = hf − φ'],
    ['Effect of increasing intensity (above f<sub>0</sub>)?', 'More electrons per second; same E<sub>k max</sub>.'],
    ['Why can’t wave theory explain the threshold frequency?', 'Waves would deliver energy continuously; any frequency should eventually work.'],
    ['Define the electron volt.', 'Energy gained by an electron accelerated through 1 V: 1.60 × 10<sup>−19</sup> J.'],
    ['What is the stopping potential?', 'Minimum reverse pd that stops the most energetic photoelectrons: eV<sub>s</sub> = E<sub>k max</sub>.'],
    ['Why are emission spectra lines?', 'Discrete energy levels → only specific photon energies emitted.'],
    ['Define ionisation.', 'Removal of an electron from an atom.'],
    ['de Broglie equation?', 'λ = h/p = h/mv'],
    ['Evidence that electrons behave as waves?', 'Electron diffraction (e.g. through graphite).'],
    ['Gradient of E<sub>k max</sub> against f?', 'h'],
    ['LED method for h: graph?', 'V against 1/λ; gradient = hc/e.']
  ],
  quiz: [
    { q: 'Light above the threshold frequency is made more intense. The effect on photoemission is', o: ['more electrons per second, same maximum kinetic energy', 'same number per second, greater maximum kinetic energy', 'more electrons, greater maximum kinetic energy', 'no change'], x: 'More photons, each with the same energy.' },
    { q: 'The work function of a metal is', o: ['the minimum energy needed to remove an electron from its surface', 'the energy of each incident photon', 'the maximum kinetic energy of photoelectrons', 'the pd needed to stop photoelectrons'], x: 'φ = hf<sub>0</sub>.' },
    { q: 'A metal has φ = 3.0 × 10<sup>−19</sup> J. Its threshold frequency is about', o: ['4.5 × 10<sup>14</sup> Hz', '2.0 × 10<sup>−53</sup> Hz', '6.6 × 10<sup>−7</sup> Hz', '1.9 × 10<sup>15</sup> Hz'], x: 'f<sub>0</sub> = φ/h.' },
    { q: 'One electron volt is equal to', o: ['1.60 × 10<sup>−19</sup> J', '1.60 × 10<sup>19</sup> J', '9.11 × 10<sup>−31</sup> J', '1 J C<sup>−1</sup>'], x: '' },
    { q: 'Line emission spectra provide evidence that', o: ['electrons in atoms occupy discrete energy levels', 'light is a transverse wave', 'electrons have wave properties', 'atoms have a nucleus'], x: '' },
    { q: 'Electron diffraction provides evidence that', o: ['electrons can behave as waves', 'electrons have negative charge', 'light consists of photons', 'electrons have discrete energy levels'], x: '' },
    { q: 'If an electron’s speed is halved, its de Broglie wavelength', o: ['doubles', 'halves', 'quadruples', 'is unchanged'], x: 'λ = h/mv.' },
    { q: 'Photoelectric emission is instantaneous even in very dim light because', o: ['each photon transfers all its energy to one electron at once', 'the light is absorbed by the whole surface', 'electrons store energy over time', 'dim light has a higher frequency'], x: '' },
    { q: 'On a graph of E<sub>k max</sub> against frequency, the gradient is', o: ['the Planck constant', 'the work function', 'the threshold frequency', 'the electron charge'], x: 'E<sub>k max</sub> = hf − φ.' },
    { q: 'The stopping potential for some photoelectrons is 1.2 V. The maximum kinetic energy is', o: ['1.2 eV', '1.2 J', '0.83 eV', '1.9 × 10<sup>−18</sup> J'], x: 'eV<sub>s</sub> = E<sub>k max</sub>; 1.2 eV = 1.9 × 10<sup>−19</sup> J.' },
    { q: 'An electron drops from −1.51 eV to −3.40 eV. The emitted photon has energy', o: ['1.89 eV', '4.91 eV', '3.40 eV', '1.51 eV'], x: 'Difference of the levels.' },
    { q: 'The momentum of a photon of wavelength 663 nm is', o: ['1.0 × 10<sup>−27</sup> kg m s<sup>−1</sup>', '3.0 × 10<sup>−19</sup> kg m s<sup>−1</sup>', '1.0 × 10<sup>27</sup> kg m s<sup>−1</sup>', '4.4 × 10<sup>−40</sup> kg m s<sup>−1</sup>'], x: 'p = h/λ = 6.63 × 10<sup>−34</sup>/6.63 × 10<sup>−7</sup>.' }
  ],
  exam: [
    { q: 'Describe the photoelectric effect and explain how the photon model accounts for the existence of a threshold frequency.', m: 5, ms: ['Electrons emitted from metal surface when EM radiation shone on it.', 'Photon energy E = hf.', 'One photon interacts with one electron, giving all its energy.', 'Electron needs at least φ to escape.', 'If hf < φ no emission regardless of intensity; threshold f<sub>0</sub> = φ/h.'] },
    { q: 'Ultraviolet light of wavelength 250 nm falls on a zinc plate (φ = 4.3 eV). Calculate the maximum kinetic energy of the emitted electrons in eV and the stopping potential.', m: 4, ms: ['E = hc/λ = 7.96 × 10<sup>−19</sup> J', '= 4.97 eV', 'E<sub>k max</sub> = 4.97 − 4.3 = 0.67 eV', 'Stopping potential = 0.67 V'] },
    { q: 'Explain how the dark lines in the spectrum of light that has passed through a cool gas are formed.', m: 3, ms: ['Photons with energy equal to a difference between energy levels are absorbed.', 'Electrons are excited to higher levels.', 'Re-emitted photons go in all directions, so those wavelengths are reduced in the original direction → dark lines.'] }
  ],
  sims: ['photo', 'levels'], gens: ['photon1', 'pe1', 'dbl1', 'level1']
});

TOPICS.push({
  id: '2.8', unit: '2', title: 'Lasers', short: 'Stimulated emission, population inversion',
  summary: 'How a laser works: stimulated emission, population inversion, pumping, three- and four-level systems, the optical cavity and semiconductor lasers.',
  spec: [
    'Distinguish between spontaneous and stimulated emission',
    'Understand population inversion and why it is needed for light amplification',
    'Understand pumping as the process that produces a population inversion',
    'Explain why population inversion is easier in a four-level system than a three-level system',
    'Describe the role of the optical cavity and mirrors',
    'Recall the advantages and uses of semiconductor lasers'
  ],
  learn: [
    { h: 'Emission processes', html: `
<ul><li><b>Absorption</b>: a photon of energy exactly E<sub>2</sub> − E<sub>1</sub> is absorbed and an electron is excited to E<sub>2</sub>.</li>
<li><b>Spontaneous emission</b>: an excited electron drops to a lower level at a random time, emitting a photon in a random direction and with random phase.</li>
<li><b>Stimulated emission</b>: an incident photon of energy exactly E<sub>2</sub> − E<sub>1</sub> causes an excited electron to drop, emitting a second photon identical to the first — same frequency, phase, direction and polarisation. One photon in, two out.</li></ul>
<p>LASER stands for <b>L</b>ight <b>A</b>mplification by <b>S</b>timulated <b>E</b>mission of <b>R</b>adiation.</p>` },
    { h: 'Population inversion and pumping', html: `
<p>Normally most atoms are in the lower level. A photon passing through is then far more likely to be absorbed than to cause stimulated emission, so light is attenuated, not amplified.</p>
<div class="box def"><b class="lbl">Population inversion</b><p>More atoms in the upper level of the laser transition than in the lower level. Only then does stimulated emission outweigh absorption, giving amplification.</p></div>
<p><b>Pumping</b> is supplying energy (by light, an electric current or discharge) to excite atoms and create the population inversion. The upper laser level must be <b>metastable</b> (a relatively long lifetime) so atoms accumulate there.</p>` },
    { h: 'Three-level and four-level systems', html: `
<p><b>Three-level</b>: atoms are pumped from the ground state to a pump level, fall quickly to the metastable upper laser level, and the laser transition goes down to the <b>ground state</b>. Because the lower level is the ground state, which starts full, more than half of all the atoms must be pumped out of it to get an inversion — hard, needs intense pumping.</p>
[[d:laser4]]
<p><b>Four-level</b>: the lower laser level is above the ground state and empties very rapidly. It is almost always nearly empty, so even a small number of atoms in the upper level gives an inversion. Pumping is far more efficient.</p>` },
    { h: 'The optical cavity', html: `
<p>The gain medium sits between two parallel mirrors. Photons travelling along the axis are reflected back and forth, passing through the medium many times and triggering more stimulated emission each time, so the beam builds up. One mirror is fully reflecting; the other is <b>partially transmitting</b> (e.g. 99% reflecting) to let out the laser beam.</p>
<p>Laser light is monochromatic, coherent, highly directional (parallel) and can be very intense.</p>` },
    { h: 'Semiconductor lasers', html: `
<p>The most common lasers are semiconductor (diode) lasers, pumped by an electric current through a junction. Advantages: very small, cheap to mass produce, efficient, low voltage, and easily switched on and off very fast.</p>
<p>Uses: optical fibre communications, reading CDs/DVDs/Blu-ray discs, barcode scanners, laser pointers and printers. Other lasers are used in surgery, eye correction, cutting and welding, and measurement.</p>` }
  ],
  eqs: [['hf = E_2 - E_1', 'energy of laser photon'], ['N = @frac{P}{hf}', 'photons per second from a beam of power P']],
  worked: [
    { q: 'A 5.0 mW laser pointer emits light of wavelength 650 nm. How many photons does it emit per second?', s: ['E = hc/λ = 6.63 × 10<sup>−34</sup> × 3.00 × 10<sup>8</sup> / 650 × 10<sup>−9</sup> = 3.06 × 10<sup>−19</sup> J.', 'N = P/E = 5.0 × 10<sup>−3</sup> / 3.06 × 10<sup>−19</sup>.'], a: '1.6 × 10<sup>16</sup> s<sup>−1</sup>' },
    { q: 'An Nd:YAG laser emits at 1064 nm. What is the energy gap of the laser transition in eV?', s: ['E = hc/λ = 1.87 × 10<sup>−19</sup> J.', '÷ 1.60 × 10<sup>−19</sup>.'], a: '1.17 eV' }
  ],
  pitfalls: ['Saying population inversion means “more atoms excited than before” — it means more in the upper laser level than the lower.', 'Forgetting that the stimulating photon is not absorbed; it continues along with the new one.', 'Describing a three-level laser’s lower level as empty — it is the ground state.', 'Saying the mirrors “create” photons.'],
  cards: [
    ['What does LASER stand for?', 'Light Amplification by Stimulated Emission of Radiation.'],
    ['Define stimulated emission.', 'An incident photon (energy = E₂ − E₁) causes an excited electron to drop, emitting an identical photon.'],
    ['Properties shared by stimulated and stimulating photons?', 'Same frequency, phase, direction and polarisation.'],
    ['Define population inversion.', 'More atoms in the upper laser level than in the lower level.'],
    ['What is pumping?', 'Supplying energy to create a population inversion.'],
    ['What is a metastable state?', 'An excited state with a relatively long lifetime.'],
    ['Why is a four-level laser more efficient?', 'Lower laser level empties quickly, so inversion needs few excited atoms.'],
    ['Why is a three-level inversion difficult?', 'Lower level is the ground state; over half the atoms must be pumped.'],
    ['Why is one mirror partially transmitting?', 'To let part of the light out as the beam.'],
    ['Advantages of semiconductor lasers?', 'Small, cheap, efficient, low voltage.']
  ],
  quiz: [
    { q: 'In stimulated emission, the emitted photon has the same', o: ['frequency, phase and direction as the stimulating photon', 'frequency but random phase', 'direction but lower energy', 'phase but a random direction'], x: 'The photons are identical.' },
    { q: 'Population inversion means that', o: ['more atoms are in the upper laser level than the lower laser level', 'all atoms are in the ground state', 'more atoms are in the ground state than excited', 'atoms have been ionised'], x: '' },
    { q: 'A four-level laser is more efficient than a three-level laser because', o: ['the lower laser level empties rapidly, so inversion is easy', 'it has more energy levels to emit from', 'the ground state is the lower laser level', 'the upper level is not metastable'], x: '' },
    { q: 'The purpose of pumping in a laser is to', o: ['produce a population inversion', 'cool the laser medium', 'reflect photons back and forth', 'polarise the light'], x: '' },
    { q: 'One mirror in a laser cavity is partially transmitting in order to', o: ['let some of the light out to form the beam', 'reduce the intensity inside the cavity', 'absorb unwanted wavelengths', 'allow pumping light in'], x: '' },
    { q: 'In a three-level laser, the lower level of the laser transition is', o: ['the ground state', 'a metastable state', 'the pump level', 'an ionised state'], x: '' },
    { q: 'An advantage of semiconductor lasers is that they are', o: ['small, cheap and efficient', 'always very high power', 'able to emit all wavelengths', 'not dependent on stimulated emission'], x: '' },
    { q: 'A metastable state is an excited state that', o: ['has a relatively long lifetime', 'decays immediately', 'is below the ground state', 'cannot be reached by pumping'], x: '' },
    { q: 'Without a population inversion, photons passing through the medium are more likely to', o: ['be absorbed', 'stimulate emission', 'be reflected', 'be polarised'], x: 'Most atoms are in the lower level.' },
    { q: 'Spontaneous emission produces photons that are', o: ['random in direction and phase', 'coherent with each other', 'all travelling along the laser axis', 'of higher energy than stimulated photons'], x: '' }
  ],
  exam: [
    { q: 'Explain why a population inversion is necessary for a laser to operate, and why this is easier to achieve in a four-level system.', m: 5, ms: ['Photons can cause absorption (lower→upper) or stimulated emission (upper→lower).', 'Amplification requires stimulated emission to exceed absorption.', 'Needs more atoms in the upper level than lower: population inversion.', 'Four-level: lower laser level is above ground and empties quickly.', 'So only a small number of atoms need to be pumped to achieve inversion.'] },
    { q: 'Describe the function of the two mirrors in a laser.', m: 3, ms: ['Photons reflected back and forth through the gain medium.', 'Each pass causes more stimulated emission → amplification / beam builds up.', 'One partially transmitting to let the beam out.'] },
    { q: 'A laser emits 2.0 × 10<sup>17</sup> photons per second of wavelength 530 nm. Calculate its output power.', m: 3, ms: ['E = hc/λ = 3.75 × 10<sup>−19</sup> J', 'P = NE', '= 0.075 W'] }
  ],
  sims: ['laser'], gens: ['laser1']
});
