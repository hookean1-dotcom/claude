/* ==========================================================
   UNIT 5 · Electricity
   Strand 1: conduction · Strand 2: circuit analysis · Strand 3: resistance of a component
   ========================================================== */
TOPICS.push(lw('2.6', {
  id: '5.1', unit: '5', strand: 1, as: [1], ref: 'Strand 1 · AS 1', title: 'Charge, conductors, semiconductors and insulators', short: 'Free electrons, the metal lattice, charging',
  summary: 'Materials are labelled conductors, semiconductors or insulators from the pattern of how easily charge flows through them. Explain metallic conduction with the free-electron model, and charging by friction with the transfer of electrons.',
  spec: ['Describe charge as a property of particles: electrons (−) and protons (+); unit coulomb (C); charge is conserved', 'Describe a metal as a lattice of positive ions in a “sea” of free (delocalised) electrons', 'Explain why metals are good electrical conductors and insulators are not', 'Describe semiconductors (e.g. silicon) as having few free charge carriers, increasing with temperature or light; uses in electronics and solar cells', 'Explain charging by friction as the transfer of electrons; like charges repel, unlike attract'],
  learn: [
    { h: 'Conductors, semiconductors and insulators', html: `
<p>When a potential difference is applied, some materials let charge flow easily and others hardly at all. Scientists sorted materials into three groups <b>from the patterns observed</b>:</p>
<div class="tbl"><table><tr><th>Group</th><th>Free charge carriers</th><th>Examples</th></tr>
<tr><td><b>Conductors</b></td><td>very many (≈ 10²⁹ free electrons per m³ in copper)</td><td>metals, graphite, salt solutions</td></tr>
<tr><td><b>Semiconductors</b></td><td>few — but the number rises with temperature, light or added impurities</td><td>silicon, germanium</td></tr>
<tr><td><b>Insulators</b></td><td>almost none — electrons are tightly bound to atoms</td><td>plastics, glass, rubber, dry air</td></tr></table></div>` },
    { h: 'The metal lattice: why metals conduct', html: `
[[d:lattice]]
<p>A metal is a regular <b>lattice of positive ions</b> surrounded by a “sea” of <b>free (delocalised) electrons</b> that came from the outer shells of the atoms. The free electrons move randomly at high speed. When a potential difference is applied, they also <b>drift</b> slowly towards the positive terminal — this drift is the current.</p>
<p>Each electron drifts surprisingly slowly (less than 1 mm/s), yet a lamp lights instantly: the electric field travels round the circuit at nearly the speed of light and sets all the electrons moving at once — like pushing marbles into a full tube.</p>
<p><b>Conventional current</b> is drawn from + to −, the direction positive charge would flow; electrons actually move the other way. This convention was agreed before the electron was discovered — an example of an international convention that persists.</p>` },
    { h: 'Semiconductors', html: `
<p>In a semiconductor such as silicon, most electrons are held in bonds. A few gain enough energy (from heat or light) to break free and carry current. So, unlike a metal, a semiconductor’s resistance <b>falls</b> as temperature or light intensity rises — the principle of <b>thermistors</b>, <b>LDRs</b> and <b>solar cells</b>. Adding tiny amounts of other elements (doping) controls the number of carriers precisely; this is the basis of diodes, LEDs, transistors and every computer chip.</p>` },
    0, 1],
  quiz: [0, 1, 2, 6, 7],
  addQuiz: [
    { q: 'Metals are good electrical conductors because they contain', o: ['free (delocalised) electrons', 'free protons', 'free neutrons', 'positive ions that move easily'], x: 'Sea of electrons.' },
    { q: 'Which is a semiconductor?', o: ['silicon', 'copper', 'rubber', 'glass'], x: 'Group 14 element.' },
    { q: 'As a semiconductor is warmed, its resistance', o: ['decreases', 'increases', 'stays the same', 'becomes infinite'], x: 'More free carriers.' },
    { q: 'Conventional current flows', o: ['from + to −', 'from − to +', 'in both directions', 'only in insulators'], x: 'Electrons go the other way.' },
    { q: 'In a metal wire carrying a current, the particles that move along the wire are', o: ['electrons', 'positive ions', 'protons', 'atoms'], x: 'Ions vibrate in place.' }
  ],
  cards: [0, 1, 2, 3, 4, 5],
  addCards: [['Conductor, semiconductor, insulator — difference?', 'Number of free charge carriers.'], ['Structure of a metal?', 'Lattice of positive ions in a sea of free electrons.'], ['Semiconductor resistance with temperature?', 'Falls (more carriers freed).'], ['Conventional current direction?', '+ to − (opposite to electron flow).'], ['Unit of charge?', 'Coulomb (C).'], ['Uses of semiconductors?', 'Diodes, LEDs, transistors/chips, solar cells, thermistors, LDRs.']],
  exam: [0], addExam: [{ q: 'Explain, using a particle model, why copper is a good conductor of electricity and why polythene is a good insulator.', m: 4, cr: 'A', ms: ['Copper: lattice of positive ions with free/delocalised electrons.', 'Free electrons drift through the lattice when a pd is applied = current.', 'Polythene: electrons tightly bound in covalent bonds / no free electrons.', 'So charge cannot flow (very high resistance).'] }],
  worked: [0],
  eqs: [['Q = It', 'charge = current × time']],
  pitfalls: ['Saying protons or positive ions flow in a metal wire.', 'Saying current is “used up” by components.', 'Thinking semiconductors behave like metals with temperature.', 'Confusing static charge (charge that stays put) with current electricity (moving charge).'],
  sims: ['conductors', 'static'], gens: ['qit1', 'qit2']
}));

TOPICS.push(lw('2.1', {
  id: '5.2', unit: '5', strand: 2, as: [2, 3], ref: 'Strand 2 · AS 2–3', title: 'Current, potential difference and circuit models', short: 'I = Q ÷ t, V = E ÷ Q, symbols and analogies',
  summary: 'Current is the rate of flow of charge; potential difference is the energy transferred per unit charge. Draw circuits with standard symbols, measure I and V correctly, and test the strengths and limits of the models we use to picture them.',
  spec: ['Draw series and parallel circuits using standard (IEC) circuit symbols', 'Define current I = Q ÷ t (ampere, A = C s⁻¹); measure it with an ammeter in series', 'Define potential difference V = E ÷ Q (volt, V = J C⁻¹); measure it with a voltmeter in parallel', 'Distinguish the emf of a supply from the pd across a component', 'Use models (water, rope loop, roller-coaster) to describe components and evaluate their limitations'],
  learn: [0, 1, { h: 'Potential difference: energy per coulomb', html: `
<div class="box def"><b class="lbl">Potential difference</b><p>$V = @frac{E}{Q}$ &nbsp; 1 volt = 1 joule per coulomb</p></div>
<p>A 9 V battery gives each coulomb passing through it 9 J of energy (its <b>emf</b>). As the coulomb passes through the components, it transfers that energy to them — the <b>potential difference</b> across each component is the energy transferred per coulomb there. A voltmeter is connected in <b>parallel</b> because it compares the energy per charge at two points.</p>
<p>The symbols on circuit diagrams are an <b>international convention</b> (IEC 60617), so an engineer in any country can read a circuit drawn anywhere else.</p>` },
    { h: 'Models of circuits: do they help or limit understanding?', html: `
<div class="tbl"><table><tr><th>Model</th><th>Current is…</th><th>Potential difference is…</th><th>Where it breaks down</th></tr>
<tr><td>Water in pipes</td><td>flow rate of water</td><td>pressure difference from a pump</td><td>water flows out of a broken pipe; charge does not leave a broken wire</td></tr>
<tr><td>Rope loop</td><td>speed of the rope (same everywhere)</td><td>the push from the hands</td><td>hard to show parallel branches splitting</td></tr>
<tr><td>Roller-coaster</td><td>rate cars pass a point</td><td>height gained in the lift hill, lost on each drop</td><td>cars only follow one track; real charges are not lifted</td></tr></table></div>
<p>Every model gets something right and something wrong. A good scientist uses a model to make a prediction, tests it, and says where it fails.</p>
[[d:symbols]]` }],
  quiz: [0, 1, 2, 5, 9, 11],
  addQuiz: [
    { q: 'One volt is equal to', o: ['one joule per coulomb', 'one coulomb per second', 'one joule per second', 'one ampere per ohm'], x: 'V = E/Q.' },
    { q: 'A battery transfers 54 J of energy to 6.0 C of charge. Its emf is', o: ['9.0 V', '324 V', '0.11 V', '60 V'], x: '54 ÷ 6.0.' },
    { q: 'In the water-pipe model, the potential difference corresponds to', o: ['the pressure difference', 'the flow rate', 'the pipe width', 'the amount of water'], x: 'The “push”.' },
    { q: 'An ammeter must be connected', o: ['in series', 'in parallel', 'across the supply', 'either way'], x: 'Same current flows through it.' }
  ],
  cards: [0, 1, 2, 3, 5, 6, 10, 11],
  addCards: [['Define potential difference.', 'Energy transferred per unit charge, V = E/Q.'], ['1 volt?', '1 joule per coulomb.'], ['1 ampere?', '1 coulomb per second.'], ['emf?', 'Energy given to each coulomb by the supply.'], ['A limitation of the water model?', 'Water spills from a broken pipe; charge does not leave a broken circuit.']],
  exam: [0, 2],
  addExam: [{ q: 'A student says “a battery stores charge, and the charge is used up by the bulb”. Use a model of your choice to explain what really happens in a simple circuit, and state one limitation of your model.', m: 5, cr: 'A', ms: ['Charge is already in the wires/components (free electrons); the battery does not store it.', 'The battery gives energy to the charge (pd/emf = energy per coulomb).', 'Charge flows round the whole circuit and is not used up — current is the same everywhere in a series loop.', 'Energy is transferred to the bulb (thermal/light) — model described, e.g. rope loop or roller-coaster.', 'Valid limitation of the chosen model.'] }],
  worked: [0, 1],
  eqs: [['I = @frac{Q}{t}', 'current'], ['V = @frac{E}{Q}', 'potential difference'], ['E = QV', 'energy transferred']],
  sims: ['ohm'], gens: ['qit1', 'qit2', 'eqv1', 'eqv2']
}));

TOPICS.push(lw('2.2', {
  id: '5.3', unit: '5', strand: 2, as: [5, 6, 7], ref: 'Strand 2 · AS 5–7', title: 'Resistance, Ohm’s law and V–I graphs', short: 'V ∝ I for ohmic conductors; lamps, diodes, thermistors',
  summary: 'For an ohmic conductor at constant temperature the potential difference is proportional to the current, and the constant of proportionality is the resistance. Measure R with an ammeter and voltmeter, and use V–I graphs to identify ohmic and non-ohmic components.',
  spec: ['Define resistance R = V ÷ I (ohm, Ω = V A⁻¹)', 'State Ohm’s law: for an ohmic conductor at constant temperature, V ∝ I; the constant of proportionality is R', 'Determine the resistance of a component experimentally with a voltmeter and ammeter', 'Sketch and interpret V–I (and I–V) graphs for a resistor, filament lamp and diode', 'Identify ohmic and non-ohmic conductors from their V–I relationship and explain the limitations of Ohm’s law', 'Describe how the resistance of thermistors and LDRs changes'],
  learn: [
    { h: 'Resistance and Ohm’s law', html: `
<div class="box def"><b class="lbl">Resistance</b><p>$R = @frac{V}{I}$ &nbsp; (ohm, Ω; 1 Ω = 1 V A⁻¹)</p></div>
<div class="box def"><b class="lbl">Ohm’s law</b><p>For a metallic conductor at <b>constant temperature</b>, the potential difference across it is <b>directly proportional</b> to the current through it: $V ∝ I$, so $V = IR$ with R constant.</p></div>
<p>On a <b>V–I graph</b> (V on the y-axis) an ohmic conductor gives a straight line through the origin with <b>gradient = R</b>. On an <b>I–V graph</b> (I on the y-axis) the gradient is 1/R. Always check which way round the axes are!</p>` },
    0, 1, 2,
    { h: 'The limitations of Ohm’s law', html: `
<p>Ohm’s law is a <b>generalisation that only holds under conditions</b>:</p>
<ul><li>It applies to metals (and resistors) only if the <b>temperature is constant</b>. A filament lamp heats up as the current rises, so its resistance increases and V is not proportional to I.</li><li>It does not apply to <b>diodes</b> (resistance depends on direction and pd), <b>thermistors</b> or <b>LDRs</b>.</li><li>Even for a resistor, R = V/I can be calculated at any point; the component is ohmic only if R is the <b>same</b> at every point.</li></ul>
<p>Testing a generalisation means looking for the conditions where it fails — a key part of thinking critically.</p>` },
    3],
  quiz: 'all',
  addQuiz: [{ q: 'On a V–I graph (V on the y-axis) for an ohmic resistor, the gradient equals', o: ['the resistance', '1 ÷ resistance', 'the power', 'the current'], x: 'V/I = R.' }, { q: 'Ohm’s law applies to a metal wire only if', o: ['its temperature is constant', 'the current is large', 'the pd is reversed', 'it is very long'], x: 'Condition of the law.' }],
  addCards: [['State Ohm’s law.', 'For a conductor at constant temperature, V ∝ I.'], ['Gradient of a V–I graph for a resistor?', 'R'], ['Gradient of an I–V graph for a resistor?', '1/R'], ['Main limitation of Ohm’s law?', 'Only holds at constant temperature / for ohmic conductors.']],
  addExam: [{ q: 'A student records for a component: V/V = 1.0, 2.0, 3.0, 4.0, 5.0 and I/A = 0.10, 0.20, 0.30, 0.40, 0.50. (a) Calculate the resistance. (b) State, with a reason, whether the component is ohmic. (c) Explain how the results would differ for a filament lamp.', m: 5, cr: 'C', ms: ['R = V/I = 10 Ω (for every pair).', 'Ohmic: V/I constant / V ∝ I, straight line through origin.', 'Lamp: current increases less than proportionally at higher V …', '… because the filament heats up, so resistance increases …', '… curve on graph / V/I not constant.'] }],
  eqs: [['V = IR', 'resistance (Ohm’s law if R constant)'], ['R = @frac{V}{I}', 'definition of resistance']],
  sims: ['ivg', 'sensors'], gens: ['vir1', 'vir2', 'vir3', 'ivr1']
}));

TOPICS.push(lw('2.3', {
  id: '5.4', unit: '5', strand: 2, as: [3, 4], ref: 'Strand 2 · AS 3–4', title: 'Series and parallel circuits: Kirchhoff’s laws', short: 'Conservation of charge and energy in circuits',
  summary: 'Two conservation laws explain every circuit. Charge is conserved at a junction (Kirchhoff’s first law) and energy is conserved round a loop (Kirchhoff’s second law). Use them to find currents and potential differences in series and parallel circuits.',
  spec: ['State Kirchhoff’s first law: the sum of currents into a junction equals the sum of currents out (conservation of charge)', 'State Kirchhoff’s second law: around any closed loop the sum of the emfs equals the sum of the pds (conservation of energy)', 'In series: the same current everywhere; the supply pd is shared', 'In parallel: the same pd across each branch; branch currents add to the total', 'Calculate currents and potential differences in simple series and parallel circuits'],
  learn: [
    { h: 'Kirchhoff’s first law: charge is conserved', html: `
<div class="box def"><b class="lbl">Kirchhoff’s first law</b><p>$ΣI_{in} = ΣI_{out}$ at any junction</p></div>
<p>Charge cannot pile up or disappear, so whatever flows into a junction must flow out. In a <b>series</b> circuit there are no junctions, so the current is the same everywhere. In a <b>parallel</b> circuit the current splits between the branches and recombines: $I = I_1 + I_2 + …$</p>
[[d:kirchhoff]]` },
    { h: 'Kirchhoff’s second law: energy is conserved', html: `
<div class="box def"><b class="lbl">Kirchhoff’s second law</b><p>Around any closed loop: $Σ"emf" = Σ"pd"$</p></div>
<p>Each coulomb gains energy in the supply and gives it all away as it goes round the loop. In <b>series</b>, the supply pd is shared: $V = V_1 + V_2 + …$ In <b>parallel</b>, each branch is its own loop through the supply, so <b>every branch has the full supply pd</b>.</p>` },
    0, 1],
  quiz: [0, 2, 6, 7, 8, 9],
  addQuiz: [
    { q: 'Currents of 2.0 A and 0.5 A flow into a junction; one wire leads out. The current in it is', o: ['2.5 A', '1.5 A', '1.0 A', '4.0 A'], x: 'Kirchhoff 1.' },
    { q: 'Kirchhoff’s second law is a consequence of conservation of', o: ['energy', 'charge', 'momentum', 'mass'], x: 'Energy per coulomb round a loop.' },
    { q: 'A 12 V supply is connected to two lamps in series. One has 7.5 V across it. The other has', o: ['4.5 V', '12 V', '7.5 V', '19.5 V'], x: '12 − 7.5.' },
    { q: 'Three identical lamps are in parallel with a 6.0 V supply. The pd across each is', o: ['6.0 V', '2.0 V', '18 V', '3.0 V'], x: 'Full supply pd.' }
  ],
  cards: [0, 1, 3, 4, 9],
  addCards: [['Kirchhoff’s first law?', 'Current into a junction = current out (charge conserved).'], ['Kirchhoff’s second law?', 'Sum of emfs = sum of pds round a loop (energy conserved).'], ['pd across parallel branches?', 'Equal to the supply pd.'], ['Series current?', 'Same everywhere.']],
  exam: [2],
  addExam: [{ q: 'A 9.0 V battery is connected to lamp A in series with a parallel pair of lamps B and C. The current from the battery is 0.60 A and the pd across A is 5.0 V. The current in B is 0.25 A. (a) State the pd across B and across C. (b) Calculate the current in C. (c) State which conservation law you used in each part.', m: 5, cr: 'A', ms: ['pd across B = 9.0 − 5.0 = 4.0 V', 'pd across C = 4.0 V (parallel)', 'I_C = 0.60 − 0.25 = 0.35 A', '(a) Kirchhoff 2 / conservation of energy', '(b) Kirchhoff 1 / conservation of charge'] }],
  worked: 'all',
  eqs: [['ΣI_{in} = ΣI_{out}', 'Kirchhoff’s first law'], ['Σ"emf" = Σ"pd"', 'Kirchhoff’s second law (round a loop)']],
  sims: ['serpar', 'kirchhoff'], gens: ['ser1', 'par1', 'kirch1', 'kirch2']
}));

TOPICS.push(lw('2.3', {
  id: '5.5', unit: '5', strand: 2, as: [8, 9], ref: 'Strand 2 · AS 8–9', title: 'Combining resistors and sharing potential difference', short: 'R = R₁ + R₂, 1/R = 1/R₁ + 1/R₂, potential dividers',
  summary: 'Find the total resistance of resistors in series, in parallel and in combinations, and calculate how a supply potential difference is shared between resistors in series — the potential divider.',
  spec: ['Total resistance in series: R = R₁ + R₂ + …', 'Total resistance in parallel: 1/R = 1/R₁ + 1/R₂ + … (always less than the smallest)', 'Reduce combination circuits step by step to find the total resistance and supply current', 'Determine the pd across resistors in series: the larger resistor has the larger share, V₁/V₂ = R₁/R₂', 'Use the potential divider equation V_out = V_in × R₂ ÷ (R₁ + R₂); describe sensor circuits with a thermistor or LDR'],
  learn: [
    { h: 'Resistors in series and in parallel', html: `
<div class="box def"><b class="lbl">Series</b><p>$R = R_1 + R_2 + R_3 + …$</p></div>
<div class="box def"><b class="lbl">Parallel</b><p>$@frac{1}{R} = @frac{1}{R_1} + @frac{1}{R_2} + …$ &nbsp; for two: $R = @frac{R_1R_2}{R_1 + R_2}$</p></div>
<p>Both rules come from Kirchhoff’s laws. In series, V = V₁ + V₂ with the same I, so IR = IR₁ + IR₂. In parallel, I = I₁ + I₂ with the same V, so V/R = V/R₁ + V/R₂.</p>
<p><b>Check:</b> the total in parallel is always <b>less than the smallest</b> resistor — adding a branch gives charge another route. Two equal resistors in parallel give half of one.</p>` },
    2,
    { h: 'Combination circuits', html: `
<p>Work from the inside out: replace each parallel group by its single equivalent resistance, then add the series parts. Example: a 4 Ω resistor in series with 6 Ω ∥ 3 Ω: the parallel pair is 6 × 3 ÷ 9 = 2 Ω, so the total is 4 + 2 = 6 Ω. With a 12 V supply, I = 2 A; the 4 Ω takes 8 V and the pair takes 4 V.</p>` },
    { h: 'Sharing pd: the potential divider', html: `
[[d:potdiv]]
<p>In series the current is the same, so V = IR means the pd is shared <b>in the ratio of the resistances</b>: $@frac{V_1}{V_2} = @frac{R_1}{R_2}$.</p>
<div class="box def"><b class="lbl">Potential divider</b><p>$V_{out} = V_{in} × @frac{R_2}{R_1 + R_2}$</p></div>
<p>Replace one resistor by a <b>thermistor</b> or <b>LDR</b> and V_out changes with temperature or light — a sensor circuit that can switch on a fan or a street light.</p>` }],
  quiz: [1, 3, 4, 5, 10],
  addQuiz: [
    { q: 'Two 10 Ω resistors in parallel have a total resistance of', o: ['5 Ω', '20 Ω', '10 Ω', '0.2 Ω'], x: 'Half of one.' },
    { q: 'A 4.0 Ω resistor in series with (6.0 Ω ∥ 3.0 Ω). Total resistance?', o: ['6.0 Ω', '13 Ω', '1.5 Ω', '4.0 Ω'], x: '4 + 2.' },
    { q: 'A potential divider has R₁ = 2.0 kΩ and R₂ = 8.0 kΩ across 10 V. The pd across R₂ is', o: ['8.0 V', '2.0 V', '5.0 V', '10 V'], x: '10 × 8/10.' },
    { q: 'Adding another resistor in parallel to a circuit makes the total resistance', o: ['decrease', 'increase', 'stay the same', 'become infinite'], x: 'Extra path.' }
  ],
  cards: [2, 5, 6, 7, 8],
  addCards: [['Series resistance?', 'R = R₁ + R₂ + …'], ['Parallel resistance?', '1/R = 1/R₁ + 1/R₂ + …'], ['Two equal resistors in parallel?', 'Half of one resistor.'], ['pd sharing in series?', 'In the ratio of the resistances, V₁/V₂ = R₁/R₂.'], ['Potential divider equation?', 'V_out = V_in R₂/(R₁ + R₂)']],
  exam: [0, 1],
  addExam: [{ q: 'A 12 V supply is connected to a 2.0 Ω resistor in series with a parallel combination of 6.0 Ω and 12 Ω. (a) Calculate the total resistance. (b) Calculate the current from the supply. (c) Calculate the pd across the 2.0 Ω resistor and across the parallel pair. (d) Calculate the current in the 6.0 Ω resistor.', m: 6, cr: 'A', ms: ['Parallel pair = 6 × 12 ÷ 18 = 4.0 Ω', 'Total = 6.0 Ω', 'I = 12 ÷ 6.0 = 2.0 A', 'V(2 Ω) = 4.0 V', 'V(pair) = 8.0 V', 'I(6 Ω) = 8.0 ÷ 6.0 = 1.3 A'] }],
  worked: 'all',
  eqs: [['R = R_1 + R_2', 'series'], ['@frac{1}{R} = @frac{1}{R_1} + @frac{1}{R_2}', 'parallel'], ['V_{out} = V_{in} @frac{R_2}{R_1 + R_2}', 'potential divider']],
  sims: ['serpar', 'potdiv'], gens: ['ser2', 'ser3', 'rpar1', 'rcombo', 'pdiv1']
}));

TOPICS.push({
  id: '5.6', unit: '5', strand: 3, as: [5, 6], ref: 'Strand 3 · AS 5–6', title: 'Factors affecting resistance', short: 'Length, area, material and temperature; resistivity',
  summary: 'Resistance depends on the physical properties of a component — its length, cross-sectional area, material and temperature — which can all be explained by how free electrons move through a vibrating lattice.',
  spec: ['Describe how the resistance of a wire depends on its length (R ∝ L) and cross-sectional area (R ∝ 1/A)', 'Use R = ρL ÷ A, where ρ is the resistivity of the material (Ω m)', 'Explain using the particle model why resistance increases with temperature in a metal (lattice vibrations, more collisions)', 'Plan and carry out an investigation into a factor affecting resistance, including controlling variables and calculating uncertainties', 'Evaluate the validity of conclusions, including the effect of the wire heating up'],
  learn: [
    { h: 'Length and cross-sectional area', html: `
<p>Free electrons drifting through a wire keep colliding with the vibrating ions of the lattice.</p>
<ul><li><b>Longer wire:</b> more ions to collide with along the way → resistance <b>proportional to length</b>: double L, double R.</li><li><b>Thicker wire:</b> more free electrons side by side can carry charge at once (more parallel paths) → resistance <b>inversely proportional to cross-sectional area</b>: double A, halve R.</li></ul>
<div class="box def"><b class="lbl">Resistivity</b><p>$R = @frac{ρL}{A}$ &nbsp; ρ (rho) is the <b>resistivity</b> of the material, in Ω m</p></div>
<div class="tbl"><table><tr><th>Material</th><th>ρ / Ω m</th></tr><tr><td>copper</td><td>1.7 × 10⁻⁸</td></tr><tr><td>aluminium</td><td>2.8 × 10⁻⁸</td></tr><tr><td>constantan</td><td>4.9 × 10⁻⁷</td></tr><tr><td>nichrome</td><td>1.1 × 10⁻⁶</td></tr><tr><td>silicon (pure)</td><td>≈ 2 × 10³</td></tr><tr><td>glass</td><td>≈ 10¹²</td></tr></table></div>
<p>The enormous range of resistivity — over 20 orders of magnitude — is the pattern that separates conductors, semiconductors and insulators.</p>` },
    { h: 'Temperature: why does resistance increase?', html: `
[[d:lattice]]
<p>When a metal is heated, its positive ions <b>vibrate with larger amplitude</b>. The drifting free electrons collide with them <b>more often</b>, transferring more energy and being slowed more. So for the same pd, the current is smaller: the resistance has increased. This is exactly why a filament lamp’s V–I graph curves.</p>
<p>Semiconductors behave the other way: heating frees more charge carriers, which outweighs the extra collisions, so their resistance <b>falls</b> (thermistors).</p>` },
    { ...lwDeep(LW['2.1'].learn[3]), h: 'The resistance lab: length of a wire' },
    { h: 'Evaluating the investigation', html: `
<ul><li>Use a <b>low pd</b> and switch off between readings so the wire does not heat up — otherwise temperature becomes an uncontrolled variable.</li><li>Measure the diameter with a <b>micrometer</b> at several points (A = πd²/4); small uncertainties in d are doubled in A.</li><li>Crocodile clips have width — a constant uncertainty in L shows as an <b>intercept</b> on the R–L graph (systematic error). The gradient (ρ/A) is still valid.</li><li>Plot R against L: a straight line supports R ∝ L; gradient × A gives ρ.</li></ul>` }
  ],
  eqs: [['R = @frac{ρL}{A}', 'resistance and resistivity'], ['A = @frac{πd^2}{4}', 'cross-sectional area of a wire']],
  worked: [
    { q: 'A copper wire (ρ = 1.7 × 10⁻⁸ Ω m) is 25 m long with a cross-sectional area of 1.0 mm². Find its resistance.', s: ['A = 1.0 mm² = 1.0 × 10⁻⁶ m²', '$R = @frac{ρL}{A} = @frac{1.7 × 10^{-8} × 25}{1.0 × 10^{-6}}$', '$R = 0.43 "Ω"$'], a: '0.43 Ω' },
    { q: 'A wire has a resistance of 6.0 Ω. What is the resistance of a wire of the same material that is twice as long and has twice the diameter?', s: ['Doubling L doubles R: × 2', 'Doubling d multiplies A by 4: ÷ 4', 'R = 6.0 × 2 ÷ 4 = 3.0 Ω'], a: '3.0 Ω' }
  ],
  pitfalls: ['Thinking a thicker wire has more resistance.', 'Forgetting that doubling the diameter quadruples the area.', 'Converting mm² to m² by × 10⁻³ instead of × 10⁻⁶.', 'Letting the wire heat up during the investigation.', 'Saying the electrons “get tired”.'],
  cards: [
    ['How does R depend on length?', 'R ∝ L'], ['How does R depend on cross-sectional area?', 'R ∝ 1/A'], ['Resistivity equation?', 'R = ρL/A'], ['Unit of resistivity?', 'Ω m'],
    ['Why does a metal’s resistance rise with temperature?', 'Ions vibrate more; more electron collisions.'], ['Why does a thermistor’s resistance fall with temperature?', 'More charge carriers released.'], ['Why use a low pd in the resistance lab?', 'To stop the wire heating up.'], ['What does an intercept on an R–L graph show?', 'A systematic error (e.g. contact/clip resistance or length offset).'], ['Doubling diameter does what to R?', 'Divides R by 4.']
  ],
  quiz: [
    { q: 'Doubling the length of a wire makes its resistance', o: ['double', 'half', 'four times as big', 'unchanged'], x: 'R ∝ L.' },
    { q: 'Doubling the cross-sectional area of a wire makes its resistance', o: ['half', 'double', 'a quarter', 'unchanged'], x: 'R ∝ 1/A.' },
    { q: 'The resistance of a metal wire increases with temperature because', o: ['the ions vibrate more, so electrons collide more often', 'the wire gets shorter', 'there are fewer free electrons', 'the electrons move faster'], x: 'Lattice vibrations.' },
    { q: 'The unit of resistivity is', o: ['Ω m', 'Ω/m', 'Ω m²', 'Ω'], x: 'ρ = RA/L.' },
    { q: 'Which has the lowest resistivity?', o: ['copper', 'nichrome', 'silicon', 'glass'], x: 'Good conductor.' },
    { q: 'Doubling the diameter of a wire changes its resistance by a factor of', o: ['¼', '½', '2', '4'], x: 'A ∝ d².' },
    { q: 'In the resistance-of-a-wire lab, why is the current switched off between readings?', o: ['to stop the wire heating up and changing its resistance', 'to save the battery', 'to reset the ammeter', 'to measure the length'], x: 'Control temperature.' },
    { q: 'A graph of R against length is straight but does not pass through the origin. This suggests', o: ['a systematic error such as contact resistance', 'R is not proportional to L at all', 'a random error', 'the wire is too thin'], x: 'Constant offset.' }
  ],
  exam: [
    { q: 'Plan an investigation into how the cross-sectional area of a wire affects its resistance. Include the variables, the apparatus, how you would make the results reliable and how you would analyse them.', m: 8, cr: 'B', ms: ['Independent: cross-sectional area (different diameters/gauges of the same material); measured with a micrometer, A = πd²/4.', 'Dependent: resistance, from R = V/I using voltmeter in parallel and ammeter in series.', 'Control: length, material, temperature (low pd, switch off between readings).', 'Circuit diagram/description with power supply, ammeter, voltmeter, wire on a metre rule, crocodile clips.', 'At least five areas; repeat each reading and calculate mean and uncertainty.', 'Safety: wire can get hot.', 'Analysis: plot R against 1/A — straight line through origin supports R ∝ 1/A.', 'Gradient = ρL; error bars and max/min lines for uncertainty.'] },
    { q: 'Use the particle model of a metal to explain why the resistance of a filament lamp increases as the current through it increases.', m: 4, cr: 'A', ms: ['Current = free electrons drifting through a lattice of positive ions.', 'Electrons collide with ions, transferring energy → filament heats up.', 'Higher temperature → ions vibrate with larger amplitude.', 'More frequent collisions → greater resistance.'] }
  ],
  sims: ['wire'], gens: ['resist1', 'resist2', 'resscale']
});

TOPICS.push(lw('2.5', {
  id: '5.7', unit: '5', strand: 1, as: [1, 2], ref: 'Strand 1 · AS 1–2', title: 'Electrical energy, power and global access', short: 'P = VI, E = Pt, kWh, storage, fair distribution',
  summary: 'How do we gain energy from electricity? Calculate electrical power and energy, the cost of using appliances, how electrical energy can be stored — and why fair access to electricity is one of the great challenges of development.',
  spec: ['Calculate power P = VI = I²R = V²/R', 'Calculate energy transferred E = Pt = VIt = QV', 'Use the kilowatt-hour (1 kWh = 3.6 MJ) to calculate the cost of electricity', 'Describe ways of storing electrical energy (batteries, capacitors, pumped hydro) and why storage matters for renewables', 'Discuss the benefits and costs of electricity and the challenges of fair and equitable access worldwide'],
  learn: [0, 1,
    { h: 'Paying for electricity: the kilowatt-hour', html: `
<div class="box def"><b class="lbl">Kilowatt-hour</b><p>energy (kWh) = power (kW) × time (h) &nbsp; 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J</p></div>
<p>Electricity bills count kWh (“units”) because joules are too small: a 2 kW heater on for 3 hours uses 6 kWh. At $0.20 per kWh it costs $1.20.</p>` },
    { h: 'Can electrical energy be stored?', html: `
<p>Electricity itself must be used as it is generated, so energy is stored in other forms and converted back when needed:</p>
<ul><li><b>Chemical</b> — rechargeable batteries (phones, electric cars, grid-scale lithium-ion banks).</li><li><b>Electric field</b> — capacitors (camera flashes, very fast release).</li><li><b>Gravitational</b> — pumped-storage hydroelectricity: water is pumped uphill when demand is low and released through turbines at peak times.</li><li><b>Kinetic</b> — flywheels; <b>thermal</b> — molten-salt stores at solar plants.</li></ul>
<p>Storage is the key to using solar and wind power, which do not generate when the Sun sets or the wind drops.</p>` },
    { h: 'Electricity and fairness', html: `
<div class="box why"><b class="lbl">Global context</b><p>Around 700 million people — mostly in sub-Saharan Africa — have no electricity, and over two billion cook with polluting fuels. Access to electricity is closely linked with health (refrigerated vaccines, lit clinics), education (studying after dark, internet) and income. Extending national grids to remote villages is expensive; off-grid solar panels with batteries and community mini-grids are now often cheaper and faster. Fair access also depends on affordable prices, maintenance skills and stable institutions.</p></div>` }],
  quiz: [0, 1, 2, 3, 7, 8, 10],
  addQuiz: [{ q: 'A 2.0 kW heater runs for 3.0 hours. The energy used is', o: ['6.0 kWh', '0.67 kWh', '6000 kWh', '1.5 kWh'], x: 'kW × h.' }, { q: '1 kWh is equal to', o: ['3.6 × 10⁶ J', '1000 J', '3600 J', '3.6 × 10³ kJ s'], x: '1000 × 3600.' }, { q: 'Pumped-storage hydroelectricity stores energy as', o: ['gravitational potential energy', 'chemical energy', 'kinetic energy of electrons', 'nuclear energy'], x: 'Water raised uphill.' }, { q: 'A 6.0 Ω heater has 12 V across it. Its power is', o: ['24 W', '72 W', '2.0 W', '0.5 W'], x: 'V²/R = 144/6.' }],
  cards: [0, 1, 2, 3, 4, 5, 10, 11],
  addCards: [['1 kWh in joules?', '3.6 × 10⁶ J'], ['Cost of electricity?', 'kWh used × price per kWh.'], ['Ways to store electrical energy?', 'Batteries, capacitors, pumped hydro, flywheels.'], ['Why is storage needed for renewables?', 'Solar and wind output varies with weather and time of day.'], ['P in terms of V and R?', 'P = V²/R']],
  exam: [2],
  addExam: [
    { q: 'A family uses a 2.5 kW electric shower for 20 minutes each day. (a) Calculate the energy used per day in kWh and in J. (b) Electricity costs $0.18 per kWh. Calculate the cost for 30 days.', m: 4, cr: 'A', ms: ['2.5 × (20/60) = 0.83 kWh', '0.83 × 3.6 × 10⁶ = 3.0 × 10⁶ J', '30 × 0.83 = 25 kWh', 'Cost = 25 × 0.18 = $4.50'] },
    { q: 'Discuss the challenges of achieving fair and equitable electricity distribution for everyone, and evaluate one possible solution.', m: 8, cr: 'D', ms: ['Describes the problem with evidence (e.g. ≈ 700 million people without access; rural areas).', 'Economic factor: cost of grid extension / affordability for households.', 'Environmental factor: fossil-fuel generation and emissions vs renewables.', 'Social/political factor: maintenance, skills, governance, corruption.', 'Solution described with relevant physics (e.g. off-grid solar + battery storage).', 'Strengths of the solution.', 'Limitations of the solution (e.g. battery cost/lifetime, low power for industry).', 'Balanced, justified conclusion.'] }
  ],
  worked: 'all',
  eqs: [['P = VI', 'power'], ['P = I^2R = @frac{V^2}{R}', 'power in a resistor'], ['E = Pt = VIt', 'energy transferred'], ['1 "kWh" = 3.6 × 10^6 "J"', 'kilowatt-hour']],
  sims: ['grid'], gens: ['pvi1', 'pvi2', 'pi2r1', 'ept1', 'ept2', 'kwh1', 'kwhcost']
}));
