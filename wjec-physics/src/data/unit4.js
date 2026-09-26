/* ==========================================================
   UNIT 4 · Fields and Options (Section A core)
   ========================================================== */
TOPICS.push({
  id: '4.1', unit: '4', title: 'Capacitance', short: 'C = Q/V, energy, RC circuits',
  summary: 'Storing charge and energy: parallel-plate capacitors, dielectrics, combinations, and the exponential charge and discharge through a resistor.',
  spec: [
    "(a) A parallel-plate capacitor: a pair of equal parallel metal plates separated by vacuum or air",
    "(b) A capacitor stores energy by transferring charge from one plate to the other: equal but opposite charges, net charge zero",
    "(c) Capacitance C = Q/V",
    "(d) C = ε₀A/d for a parallel-plate capacitor with no dielectric",
    "(e) A dielectric increases the capacitance",
    "(f) The E-field inside a parallel-plate capacitor is uniform: E = V/d",
    "(g) U = ½QV for the energy stored",
    "(h) The equations for capacitors in series and in parallel",
    "(i) How a capacitor charges and discharges through a resistor",
    "(j) Q = Q₀(1 − e^(−t/RC)) and Q = Q₀e^(−t/RC); RC is the time constant"
  ],
  learn: [
    { h: 'Capacitors and capacitance', html: `
<p>A <b>capacitor</b> is two conducting plates separated by an insulator. Connected to a supply, electrons are pushed onto one plate and pulled off the other, so the plates carry equal and opposite charges +Q and −Q. (“The charge on a capacitor” means Q — the net charge is zero.)</p>
<div class="box def"><b class="lbl">Definition</b><p><b>Capacitance</b> $C = @frac{Q}{V}$: charge stored per unit pd. Unit: farad, 1 F = 1 C V<sup>−1</sup>. Practical values are μF, nF or pF.</p></div>` },
    { h: 'Parallel plates and dielectrics', html: `
<div class="box eq">$C = @frac{ε_0 A}{d}$ &nbsp;&nbsp; ε<sub>0</sub> = 8.85 × 10<sup>−12</sup> F m<sup>−1</sup></div>
<p>A = area of overlap of the plates, d = separation (vacuum or air). Larger plates hold more charge; closer plates give a larger C.</p>
<p>The field between the plates is <b>uniform</b> (except near the edges): $E = @frac{V}{d}$.</p>
<p>Inserting a <b>dielectric</b> (an insulator such as polythene) between the plates <b>increases</b> the capacitance. Its molecules become polarised in the field, creating an internal field that opposes the plates’ field; for the same charge the pd is smaller, so C = Q/V is larger.</p>` },
    { h: 'Energy stored', html: `
<p>As charge is added, the pd rises in proportion (V = Q/C). The work done adding a small charge ΔQ at pd V is VΔQ, so the total energy stored is the <b>area under the V–Q graph</b> — a triangle:</p>
<div class="box eq">$U = @frac{1}{2}QV = @frac{1}{2}CV^2 = @frac{Q^2}{2C}$</div>
<p>When a capacitor is charged from a battery, the battery supplies QV but only ½QV is stored; the other half is dissipated as heat in the resistance of the circuit, whatever its value.</p>` },
    { h: 'Combinations', html: `
<p><b>Parallel</b>: same pd, charges add, $C = C_1 + C_2 + …$</p>
<p><b>Series</b>: same charge on each, pds add, $@frac{1}{C} = @frac{1}{C_1} + @frac{1}{C_2} + …$</p>
<div class="box tip"><b class="lbl">Watch out</b><p>These are the <b>opposite</b> way round to the resistor formulae.</p></div>` },
    { h: 'Charging and discharging through a resistor', html: `
<p><b>Discharging</b>: the current is I = V/R = Q/RC, so the rate of loss of charge is proportional to the charge remaining → exponential decay:</p>
<div class="box eq">$Q = Q_0e^{-t/RC}$ &nbsp; (and likewise V and I)</div>
<p><b>Charging</b> from a supply V<sub>0</sub>: $Q = Q_0(1 - e^{-t/RC})$ and V<sub>C</sub> rises likewise, while the current $I = I_0e^{-t/RC}$ falls.</p>
[[d:rc]]
<div class="box def"><b class="lbl">Time constant</b><p>RC (unit: s) is the time for the charge on a discharging capacitor to fall to 1/e ≈ 37% of its initial value. The time to halve is $t_{½} = RC@,"ln"@,2 ≈ 0.69RC$. After about 5RC the capacitor is effectively fully charged or discharged.</p></div>
<p>The area under an I–t graph is the charge that flowed.</p>
<div class="box def"><b class="lbl">Specified practical</b><p>Charge a large capacitor (e.g. 1000 μF) to V<sub>0</sub>, then discharge it through a known resistor (e.g. 47 kΩ), recording V every 10 s (or using a datalogger). Plot ln V against t: a straight line of gradient −1/RC. Compare the time constant with R × C.</p></div>` }
  ],
  eqs: [['C = @frac{Q}{V}', 'capacitance'], ['C = @frac{ε_0 A}{d}', 'parallel plates'], ['E = @frac{V}{d}', 'uniform field'], ['U = @frac{1}{2}QV = @frac{1}{2}CV^2 = @frac{Q^2}{2C}', 'energy'], ['C = C_1 + C_2', 'parallel'], ['@frac{1}{C} = @frac{1}{C_1} + @frac{1}{C_2}', 'series'], ['Q = Q_0e^{-t/RC}', 'discharge'], ['Q = Q_0(1 - e^{-t/RC})', 'charge']],
  worked: [
    { q: 'Two square plates of side 0.20 m are 1.0 mm apart in air and connected to 12 V. Find C, Q, E and the energy stored.', s: ['C = ε<sub>0</sub>A/d = 8.85 × 10<sup>−12</sup> × 0.040 / 1.0 × 10<sup>−3</sup> = 3.54 × 10<sup>−10</sup> F.', 'Q = CV = 4.25 × 10<sup>−9</sup> C.', 'E = V/d = 1.2 × 10<sup>4</sup> V m<sup>−1</sup>.', 'U = ½CV² = 2.5 × 10<sup>−8</sup> J.'], a: '354 pF; 4.2 nC; 1.2 × 10<sup>4</sup> V m<sup>−1</sup>; 25 nJ' },
    { q: 'A 2200 μF capacitor charged to 9.0 V discharges through 10 kΩ. Find the time constant and the pd after 30 s.', s: ['RC = 10 × 10<sup>3</sup> × 2200 × 10<sup>−6</sup> = 22 s.', 'V = 9.0 e<sup>−30/22</sup> = 9.0 × 0.256.'], a: 'RC = 22 s; V = 2.3 V' },
    { q: 'Find the combined capacitance of 4.0 μF and 12 μF (a) in series, (b) in parallel.', s: ['Series: 1/C = 1/4 + 1/12 = 4/12, C = 3.0 μF.', 'Parallel: C = 16 μF.'], a: '(a) 3.0 μF (b) 16 μF' }
  ],
  pitfalls: ['Using resistor combination rules for capacitors.', 'Forgetting μF = 10<sup>−6</sup> F when finding RC.', 'Writing the charging equation for the current (current decays in both charging and discharging).', 'Saying the net charge on a charged capacitor is Q.'],
  cards: [
    ['Define capacitance.', 'Charge stored per unit pd: C = Q/V.'],
    ['Define the farad.', '1 C V<sup>−1</sup>'],
    ['Parallel plate capacitance?', 'C = ε<sub>0</sub>A/d'],
    ['Effect of a dielectric?', 'Increases C (molecules polarise, reducing the field for a given Q).'],
    ['Energy stored in a capacitor?', '½QV = ½CV² = Q²/2C'],
    ['Area under a V–Q graph?', 'Energy stored.'],
    ['Capacitors in parallel?', 'C = C<sub>1</sub> + C<sub>2</sub>'],
    ['Capacitors in series?', '1/C = 1/C<sub>1</sub> + 1/C<sub>2</sub>'],
    ['Discharge equation?', 'Q = Q<sub>0</sub>e<sup>−t/RC</sup>'],
    ['Define time constant.', 'RC: time for Q to fall to 1/e (37%) when discharging.'],
    ['Fraction of charge after 1 RC when charging?', '63%'],
    ['Graph to find RC from a discharge?', 'ln V against t: gradient −1/RC.'],
    ['Area under an I–t graph?', 'Charge.']
  ],
  quiz: [
    { q: 'The farad is equivalent to', o: ['C V<sup>−1</sup>', 'V C<sup>−1</sup>', 'J V<sup>−1</sup>', 'C s<sup>−1</sup>'], x: '' },
    { q: 'The separation of the plates of a parallel-plate capacitor is doubled. Its capacitance', o: ['halves', 'doubles', 'is unchanged', 'quadruples'], x: 'C ∝ 1/d.' },
    { q: 'The pd across a capacitor is doubled. The energy stored', o: ['increases by a factor of 4', 'doubles', 'halves', 'is unchanged'], x: 'U = ½CV².' },
    { q: 'A 100 μF capacitor discharges through 50 kΩ. The time constant is', o: ['5.0 s', '0.50 s', '2.0 s', '5000 s'], x: '100 × 10<sup>−6</sup> × 50 × 10<sup>3</sup>.' },
    { q: 'After one time constant, a discharging capacitor retains what fraction of its initial charge?', o: ['37%', '50%', '63%', '0%'], x: 'e<sup>−1</sup> = 0.37.' },
    { q: '6.0 μF and 3.0 μF capacitors in series have a combined capacitance of', o: ['2.0 μF', '9.0 μF', '4.5 μF', '18 μF'], x: '1/C = 1/6 + 1/3 = 1/2.' },
    { q: 'The area under a graph of pd against charge for a capacitor gives', o: ['the energy stored', 'the capacitance', 'the current', 'the time constant'], x: '' },
    { q: 'A dielectric is inserted between the plates of a capacitor. The capacitance', o: ['increases', 'decreases', 'stays the same', 'becomes zero'], x: '' },
    { q: 'A pd of 200 V is applied across plates 4.0 mm apart. The field strength between them is', o: ['5.0 × 10<sup>4</sup> V m<sup>−1</sup>', '800 V m<sup>−1</sup>', '50 V m<sup>−1</sup>', '0.80 V m<sup>−1</sup>'], x: 'E = V/d.' },
    { q: 'During the discharge of a capacitor through a resistor, the current', o: ['decreases exponentially', 'is constant', 'increases exponentially', 'decreases linearly'], x: '' },
    { q: 'For a discharging capacitor, a graph of ln V against t has a gradient of', o: ['−1/RC', '−RC', 'RC', '1/RC'], x: 'ln V = ln V<sub>0</sub> − t/RC.' },
    { q: 'Two capacitors in parallel have a combined capacitance equal to', o: ['C<sub>1</sub> + C<sub>2</sub>', '1/(1/C<sub>1</sub> + 1/C<sub>2</sub>)', 'C<sub>1</sub>C<sub>2</sub>', '(C<sub>1</sub> + C<sub>2</sub>)/2'], x: '' }
  ],
  exam: [
    { q: 'Explain how a capacitor becomes charged when connected to a battery, and why the current falls to zero.', m: 4, ms: ['Electrons flow from negative terminal onto one plate; electrons removed from the other plate to positive terminal.', 'Plates acquire equal and opposite charges; no charge crosses the dielectric.', 'pd across capacitor increases as charge builds.', 'Current stops when pd across capacitor equals battery emf.'] },
    { q: 'A 470 μF capacitor is charged to 12 V and then discharged through a 22 kΩ resistor. Calculate the energy initially stored, the time constant, and the time for the pd to fall to 3.0 V.', m: 5, ms: ['U = ½CV² = ½ × 470 × 10<sup>−6</sup> × 144 = 0.034 J', 'RC = 470 × 10<sup>−6</sup> × 22 × 10<sup>3</sup> = 10.3 s', '3.0 = 12 e<sup>−t/RC</sup>', 't = RC ln 4', '= 14.3 s'] },
    { q: 'Describe how to determine the time constant of a capacitor–resistor circuit experimentally using a graphical method.', m: 6, ms: ['Circuit: supply, switch, capacitor, resistor, voltmeter (high resistance)/datalogger across capacitor.', 'Charge capacitor then switch to discharge through R; start timer.', 'Record V at regular time intervals.', 'Plot ln V against t.', 'Straight line gradient = −1/RC.', 'RC = −1/gradient; compare with nominal R × C.'] }
  ],
  sims: ['capacitor'], gens: ['cap1', 'cap2', 'cap3', 'cap4']
});

TOPICS.push({
  id: '4.2', unit: '4', title: 'Electrostatic and Gravitational Fields', short: 'Coulomb, Newton, field strength, potential',
  summary: 'Two inverse-square laws with the same mathematics: field strength, potential and potential energy for point charges and point masses.',
  spec: [
    "(a) The features of electric and gravitational fields (field strength, inverse-square force laws, potential, potential energy, changes of PE qΔV and mΔV_g, field = − slope of V–r graph)",
    "(b) The gravitational field outside a spherical body is as if all its mass were at its centre",
    "(c) Field lines give the direction of the field; radially outward for a positive point charge",
    "(d) Equipotential surfaces join points of equal potential — spherical for a point charge",
    "(e) Calculate the net potential and resultant field strength for a number of point charges or masses",
    "(f) ΔU_P = mgΔh where the variation of g is negligible"
  ],
  learn: [
    { h: 'Field lines and equipotentials', html: `
<p>A <b>field</b> is a region where a body experiences a force: a charge in an electric field, a mass in a gravitational field. Field lines show the direction of the force on a positive test charge (or a test mass); their spacing shows the strength.</p>
[[d:field-radial]]
<p><b>Equipotentials</b> are surfaces joining points of equal potential — <b>spherical</b> (concentric) around a point charge or point mass. They are always perpendicular to field lines, and no work is done moving along one.</p>` },
    { h: 'Force laws', html: `
<div class="box def"><b class="lbl">Coulomb’s law</b><p>$F = @frac{Q_1Q_2}{4πε_0 r^2}$ — the force between two point charges is proportional to the product of the charges and inversely proportional to the square of their separation. 1/4πε<sub>0</sub> = 8.99 × 10<sup>9</sup> F<sup>−1</sup> m (9 × 10<sup>9</sup> is an acceptable approximation). Like charges repel.</p></div>
<div class="box def"><b class="lbl">Newton’s law of gravitation</b><p>$F = @frac{GM_1M_2}{r^2}$ — always attractive. G = 6.67 × 10<sup>−11</sup> N m<sup>2</sup> kg<sup>−2</sup>.</p></div>
<p>A uniform sphere behaves, for points outside it, as if all its mass (or charge) were at its centre.</p>` },
    { h: 'Field strength', html: `
<div class="box def"><b class="lbl">Definitions</b><p><b>Electric field strength</b> E at a point is the force per unit charge on a small positive test charge placed there: E = F/q (N C<sup>−1</sup> ≡ V m<sup>−1</sup>).</p><p><b>Gravitational field strength</b> g is the force per unit mass: g = F/m (N kg<sup>−1</sup>).</p></div>
<div class="box eq">$E = @frac{Q}{4πε_0 r^2}$ &nbsp;&nbsp;&nbsp; $g = @frac{GM}{r^2}$</div>
<p>Field strengths are <b>vectors</b>: to combine fields from two sources, add them as vectors.</p>` },
    { h: 'Potential and potential energy', html: `
<div class="box def"><b class="lbl">Definitions</b><p>The <b>electric potential</b> at a point is the work done per unit charge in bringing a small positive test charge from infinity to that point. The <b>gravitational potential</b> is the work done per unit mass in bringing a small test mass from infinity to the point.</p></div>
<div class="box eq">$V_E = @frac{Q}{4πε_0 r}$ &nbsp;&nbsp;&nbsp; $V_g = -@frac{GM}{r}$</div>
<p>Potentials are <b>scalars</b>: add them algebraically. Gravitational potential is always negative (zero at infinity), because gravity is attractive — work must be done <i>on</i> a mass to take it to infinity.</p>
[[d:grav-potential]]
<p>Potential energy = qV (electric) or mV<sub>g</sub> (gravitational). Work done moving between two points: $W = qΔV$ or $W = mΔV_g$.</p>
<p>Field strength is minus the potential gradient: $E = -@frac{ΔV}{Δr}$. For a uniform field between plates, E = V/d. The area under an E–r graph gives a potential difference.</p>
<div class="box def"><b class="lbl">Near the Earth’s surface</b><p>Over heights where the variation of g is negligible, the change in gravitational potential energy is simply $ΔU_P = mgΔh$ — the Unit 1 result is a special case of mΔV<sub>g</sub>.</p></div>` },
    { h: 'Comparing the fields', html: `
<div class="tbl"><table><tr><th></th><th>Electric (point charge)</th><th>Gravitational (point mass)</th></tr>
<tr><td>Force law</td><td>F = Q<sub>1</sub>Q<sub>2</sub>/4πε<sub>0</sub>r²</td><td>F = GM<sub>1</sub>M<sub>2</sub>/r²</td></tr>
<tr><td>Field strength</td><td>E = Q/4πε<sub>0</sub>r²</td><td>g = GM/r²</td></tr>
<tr><td>Potential</td><td>V = Q/4πε<sub>0</sub>r (+ or −)</td><td>V<sub>g</sub> = −GM/r (always −)</td></tr>
<tr><td>Nature</td><td>attractive or repulsive</td><td>attractive only</td></tr>
<tr><td>Similarities</td><td colspan="2">inverse-square force; 1/r potential; field lines radial; potential is zero at infinity</td></tr></table></div>
<p>Between two protons, the electric force is about 10<sup>36</sup> times the gravitational force.</p>` }
  ],
  eqs: [['F = @frac{Q_1Q_2}{4πε_0r^2}', 'Coulomb'], ['E = @frac{Q}{4πε_0r^2}', 'point charge field'], ['V_E = @frac{Q}{4πε_0r}', 'electric potential'], ['F = @frac{GM_1M_2}{r^2}', 'Newton'], ['g = @frac{GM}{r^2}', 'point mass field'], ['V_g = -@frac{GM}{r}', 'grav. potential'], ['W = qΔV_E,  W = mΔV_g', 'work between points'], ['ΔU_P = mgΔh', 'where g is constant'], ['E = -@frac{ΔV}{Δr}', 'field = −potential gradient']],
  worked: [
    { q: 'Find the electric force between the proton and electron in a hydrogen atom (separation 5.3 × 10<sup>−11</sup> m).', s: ['F = (8.99 × 10<sup>9</sup>)(1.60 × 10<sup>−19</sup>)² / (5.3 × 10<sup>−11</sup>)².'], a: '8.2 × 10<sup>−8</sup> N (attractive)' },
    { q: 'Find g at the height of the ISS, 400 km above the Earth’s surface. (M = 5.97 × 10<sup>24</sup> kg, R = 6.37 × 10<sup>6</sup> m)', s: ['r = 6.37 × 10<sup>6</sup> + 0.40 × 10<sup>6</sup> = 6.77 × 10<sup>6</sup> m.', 'g = GM/r² = 6.67 × 10<sup>−11</sup> × 5.97 × 10<sup>24</sup> / (6.77 × 10<sup>6</sup>)².'], a: '8.7 N kg<sup>−1</sup>' },
    { q: 'Find the potential 0.20 m from a +5.0 nC point charge and the work needed to bring a +2.0 nC charge there from infinity.', s: ['V = 8.99 × 10<sup>9</sup> × 5.0 × 10<sup>−9</sup> / 0.20 = 225 V.', 'W = qV = 2.0 × 10<sup>−9</sup> × 225.'], a: '225 V; 4.5 × 10<sup>−7</sup> J' }
  ],
  pitfalls: ['Measuring r from the surface rather than the centre of a planet.', 'Adding field strengths as scalars (they are vectors) or potentials as vectors (they are scalars).', 'Forgetting the minus sign in V<sub>g</sub>.', 'Using r² in the potential formula.'],
  cards: [
    ['State Coulomb’s law.', 'F = Q<sub>1</sub>Q<sub>2</sub>/4πε<sub>0</sub>r²'],
    ['Define electric field strength.', 'Force per unit positive charge (on a small test charge).'],
    ['Define gravitational field strength.', 'Force per unit mass.'],
    ['Define electric potential.', 'Work done per unit positive charge bringing a test charge from infinity to the point.'],
    ['Why is gravitational potential negative?', 'Zero at infinity and gravity is attractive, so work is done by the field bringing mass in.'],
    ['Relationship between field strength and potential?', 'E = −dV/dr (minus the potential gradient).'],
    ['Work done moving along an equipotential?', 'Zero.'],
    ['Units of E?', 'N C<sup>−1</sup> or V m<sup>−1</sup>'],
    ['g at distance 2R from a planet’s centre (vs surface)?', 'g/4'],
    ['Are potentials vectors or scalars?', 'Scalars.'],
    ['Angle between field lines and equipotentials?', '90°'],
    ['Shape of equipotentials around a point charge?', 'Concentric spheres.']
  ],
  quiz: [
    { q: 'The separation between two point charges is doubled. The force between them', o: ['falls to one quarter', 'halves', 'doubles', 'is unchanged'], x: 'Inverse square.' },
    { q: 'Which is a unit of electric field strength?', o: ['V m<sup>−1</sup>', 'V m', 'N C', 'J C<sup>−1</sup>'], x: 'N C<sup>−1</sup> ≡ V m<sup>−1</sup>.' },
    { q: 'Gravitational potential near a planet is', o: ['always negative', 'always positive', 'zero at the surface', 'maximum at the surface'], x: '' },
    { q: 'Equipotential surfaces are always', o: ['perpendicular to field lines', 'parallel to field lines', 'at 45° to field lines', 'circular'], x: '' },
    { q: 'At distance r from a point charge the potential is V. At 2r it is', o: ['V/2', 'V/4', '2V', 'V'], x: 'V ∝ 1/r.' },
    { q: 'The work done moving a charge along an equipotential surface is', o: ['zero', 'qV', 'maximum', 'negative'], x: 'ΔV = 0.' },
    { q: 'Electric field strength at a point is equal to', o: ['minus the potential gradient', 'the potential', 'the potential × distance', 'the gradient of potential energy × q'], x: '' },
    { q: 'A key difference between gravitational and electric fields is that gravitational forces', o: ['are always attractive', 'obey an inverse-square law', 'act over infinite range', 'can be represented by field lines'], x: '' },
    { q: 'A pd of 500 V is applied between plates 2.0 cm apart. The field strength is', o: ['2.5 × 10<sup>4</sup> V m<sup>−1</sup>', '250 V m<sup>−1</sup>', '10 V m<sup>−1</sup>', '1.0 × 10<sup>4</sup> V m<sup>−1</sup>'], x: '500 / 0.020.' },
    { q: 'g at the surface of a planet is 12 N kg<sup>−1</sup>. At a height equal to the planet’s radius above the surface, g is', o: ['3.0 N kg<sup>−1</sup>', '6.0 N kg<sup>−1</sup>', '12 N kg<sup>−1</sup>', '4.0 N kg<sup>−1</sup>'], x: 'Distance from centre doubles.' },
    { q: 'A +3.0 μC charge moves from a point at 200 V to a point at 50 V. The work done by the field on it is', o: ['4.5 × 10<sup>−4</sup> J', '6.0 × 10<sup>−4</sup> J', '1.5 × 10<sup>−4</sup> J', '4.5 × 10<sup>−2</sup> J'], x: 'qΔV = 3.0 × 10<sup>−6</sup> × 150.' },
    { q: 'Equipotential surfaces around an isolated point mass are', o: ['concentric spheres', 'parallel planes', 'radial lines', 'ellipses'], x: '' }
  ],
  exam: [
    { q: 'Define gravitational potential at a point and explain why it has a negative value.', m: 3, ms: ['Work done per unit mass in bringing a (small test) mass from infinity to the point.', 'Potential is zero at infinity.', 'Gravitational force is attractive so work is done by the field (negative work done on the mass) → negative potential.'] },
    { q: 'Two point charges, +4.0 nC at A and −2.0 nC at B, are 0.30 m apart. Calculate the potential at the midpoint of AB and the magnitude of the electric field there.', m: 5, ms: ['r = 0.15 m', 'V = 8.99 × 10<sup>9</sup> (4.0 − 2.0) × 10<sup>−9</sup>/0.15 = 120 V', 'E<sub>A</sub> = 8.99 × 10<sup>9</sup> × 4.0 × 10<sup>−9</sup>/0.15² = 1600 V m<sup>−1</sup> (towards B)', 'E<sub>B</sub> = 800 V m<sup>−1</sup> (towards B)', 'Both in same direction: E = 2400 V m<sup>−1</sup>'] },
    { q: 'Compare the gravitational and electric forces between two protons.', m: 3, ms: ['F<sub>E</sub> = ke²/r², F<sub>G</sub> = Gm²/r² — both ∝ 1/r².', 'Ratio F<sub>E</sub>/F<sub>G</sub> = ke²/Gm<sub>p</sub>² ≈ 1.2 × 10<sup>36</sup> (independent of r).', 'Electric repulsive, gravitational attractive.'] }
  ],
  sims: ['field'], gens: ['coul1', 'gfield1', 'epot1', 'gpot1']
});

TOPICS.push({
  id: '4.3', unit: '4', title: 'Orbits and the Wider Universe', short: 'Kepler, dark matter, Hubble, binaries',
  summary: 'From planetary orbits to the expanding universe: Kepler’s laws, orbital mechanics, dark matter, the Doppler effect, exoplanets and cosmology.',
  spec: [
    "(a) Kepler’s three laws of planetary motion",
    "(b) Newton’s law of gravitation in simple examples, including planets and satellites",
    "(c) Derive Kepler’s 3rd law for a circular orbit from Newton’s law of gravitation and centripetal acceleration",
    "(d) Use orbital data (period or orbital speed) to find the mass of the central object",
    "(e) How orbital speeds of objects in spiral galaxies imply dark matter",
    "(f) How the recently discovered Higgs boson may be related to dark matter",
    "(g) Position of the centre of mass of two spherically symmetric objects, and their mutual orbital period for circular orbits",
    "(h) The Doppler relationship Δλ/λ = v/c",
    "(i) Determine a star’s radial velocity from the Doppler shift of spectral lines",
    "(j) Use radial-velocity data for a double system (e.g. star and exoplanet) and the orbital period to find the masses (circular orbit, edge on)",
    "(k) The Hubble constant: v = H₀D",
    "(l) Why 1/H₀ approximates the age of the universe",
    "(m) Derive ρc = 3H₀²/8πG for a flat universe using conservation of energy"
  ],
  learn: [
    { h: 'Kepler’s laws', html: `
<ol><li>Each planet moves in an <b>ellipse</b> with the Sun at one focus.</li>
<li>The line joining a planet to the Sun sweeps out <b>equal areas in equal times</b>. (So a planet moves fastest when closest to the Sun.)</li>
<li>The square of the orbital period is proportional to the cube of the semi-major axis (mean radius): <b>T² ∝ r³</b>.</li></ol>` },
    { h: 'Circular orbits', html: `
<p>Gravity provides the centripetal force: $@frac{GMm}{r^2} = mω^2 r = m(@frac{2π}{T})^2 r$</p>
<div class="box eq">$T^2 = @frac{4π^2}{GM}r^3$ &nbsp;&nbsp;&nbsp; $v = @sqrt{@frac{GM}{r}}$</div>
<p>This is Kepler’s third law, and it lets us “weigh” a central body from any satellite’s period and radius. The satellite’s own mass cancels.</p>
<p>A <b>geostationary</b> satellite orbits above the equator with a period of 24 h, radius ≈ 4.2 × 10<sup>7</sup> m, so it stays above the same point on Earth.</p>` },
    { h: 'Dark matter', html: `
[[d:rotation-curve]]
<p>If most of a galaxy’s mass were in the bright central bulge, stars far out should orbit more slowly, with v ∝ 1/√r. Observed rotation curves (from Doppler shifts of stars and hydrogen gas) stay roughly <b>flat</b> out to large radii.</p>
<div class="box why"><b class="lbl">Dark matter and the Higgs boson</b><p>Dark matter does not emit or absorb light, so it is thought to be made of particles that interact only through gravity (and perhaps the weak interaction). The Higgs boson, discovered at the Large Hadron Collider in 2012, is associated with the field that gives fundamental particles their mass. One proposal is that dark-matter particles gain their mass through the Higgs field, so Higgs bosons might decay into dark-matter particles — searches at the LHC look for such “invisible” decays.</p></div>
<p>From $v = @sqrt{GM/r}$, the mass inside radius r is $M = @frac{v^2 r}{G}$. A flat curve means M keeps increasing in proportion to r beyond the visible edge. The extra, invisible mass is called <b>dark matter</b>. Most of a galaxy’s mass appears to be dark matter.</p>` },
    { h: 'Doppler shift, binaries and exoplanets', html: `
<div class="box eq">$@frac{Δλ}{λ} = @frac{v}{c}$ &nbsp; (for v ≪ c; v = radial velocity)</div>
<p>Receding sources are <b>red-shifted</b> (λ increases); approaching sources are blue-shifted.</p>
<p>In a <b>binary system</b>, two bodies orbit their common <b>centre of mass</b> with the same period. The centre of mass satisfies $m_1r_1 = m_2r_2$, so the more massive body moves in a smaller circle, more slowly. For separation d:</p>
<div class="box eq">$T = 2π@sqrt{@frac{d^3}{G(M_1 + M_2)}}$</div>
<p>The <b>radial velocity</b> of a star is the component of its velocity along the line joining it to an observer on Earth; it is found from the Doppler shift of its spectral lines.</p>
<h4>Finding the masses in a double system</h4><p>For a circular orbit seen edge on, each body’s radial velocity varies sinusoidally with the orbital period T. The maximum radial velocities v₁ and v₂ are the orbital speeds, so:</p><ol><li>orbit radii r₁ = v₁T/2π and r₂ = v₂T/2π; separation d = r₁ + r₂;</li><li>total mass from $M_1 + M_2 = @frac{4π^2d^3}{GT^2}$;</li><li>mass ratio from the centre of mass: $@frac{M_1}{M_2} = @frac{r_2}{r_1} = @frac{v_2}{v_1}$.</li></ol>
<p><b>Exoplanets</b>: a planet and its star orbit their common centre of mass, so the star “wobbles”. Its spectral lines shift periodically — red then blue — with the planet’s orbital period. Knowing the star’s mass, Kepler’s third law gives the planet’s orbit radius, hence its orbital speed; then $M_{planet} = M_{star} v_{star}/v_{planet}$.</p>` },
    { h: 'Hubble’s law and the expanding universe', html: `
<div class="box def"><b class="lbl">Hubble’s law</b><p>The recession velocity of a distant galaxy is proportional to its distance: $v = H_0 D$. H<sub>0</sub> ≈ 2.2 × 10<sup>−18</sup> s<sup>−1</sup> (≈ 68 km s<sup>−1</sup> Mpc<sup>−1</sup>).</p></div>
<p>The redshift of almost all distant galaxies shows the universe is expanding. Running the expansion backwards at a constant rate, all galaxies were together at time $t ≈ 1/H_0 ≈ 14$ billion years — an estimate of the age of the universe.</p>
<h4>Critical density</h4>
<p>Consider a galaxy of mass m at the edge of a sphere of radius r and density ρ, moving at v = H<sub>0</sub>r. It just escapes to infinity if its total energy is zero: $@frac{1}{2}mv^2 = @frac{GMm}{r}$ with $M = @frac{4}{3}πr^3ρ$. Substituting:</p>
<div class="box eq">$ρ_c = @frac{3H_0^2}{8πG}$ ≈ 9 × 10<sup>−27</sup> kg m<sup>−3</sup></div>
<p>If the mean density is greater than ρ<sub>c</sub>, gravity would eventually stop the expansion; if less, it would expand forever.</p>` }
  ],
  eqs: [['T^2 = @frac{4π^2}{GM}r^3', 'Kepler 3 (circular orbit)'], ['v = @sqrt{@frac{GM}{r}}', 'orbital speed'], ['M = @frac{v^2r}{G}', 'mass inside orbit'], ['@frac{Δλ}{λ} = @frac{v}{c}', 'Doppler'], ['T = 2π@sqrt{@frac{d^3}{G(M_1 + M_2)}}', 'binary system'], ['v = H_0D', 'Hubble'], ['ρ_c = @frac{3H_0^2}{8πG}', 'critical density']],
  worked: [
    { q: 'Find the orbital radius of a geostationary satellite (T = 86 400 s; GM<sub>Earth</sub> = 3.98 × 10<sup>14</sup> m³ s<sup>−2</sup>).', s: ['r³ = GMT²/4π² = 3.98 × 10<sup>14</sup> × 86 400² / 39.5 = 7.53 × 10<sup>22</sup> m³.', 'r = ∛(7.53 × 10<sup>22</sup>).'], a: '4.2 × 10<sup>7</sup> m' },
    { q: 'Use the Earth’s orbit (r = 1.50 × 10<sup>11</sup> m, T = 3.16 × 10<sup>7</sup> s) to find the mass of the Sun.', s: ['M = 4π²r³/GT².', '= 39.5 × 3.38 × 10<sup>33</sup> / (6.67 × 10<sup>−11</sup> × 9.99 × 10<sup>14</sup>).'], a: '2.0 × 10<sup>30</sup> kg' },
    { q: 'The H-α line (656.3 nm) from a galaxy is observed at 689.1 nm. Find its recession velocity and distance (H<sub>0</sub> = 2.2 × 10<sup>−18</sup> s<sup>−1</sup>).', s: ['Δλ = 32.8 nm; v = cΔλ/λ = 3.00 × 10<sup>8</sup> × 32.8/656.3 = 1.50 × 10<sup>7</sup> m s<sup>−1</sup>.', 'D = v/H<sub>0</sub> = 1.50 × 10<sup>7</sup> / 2.2 × 10<sup>−18</sup>.'], a: '1.5 × 10<sup>7</sup> m s<sup>−1</sup>; 6.8 × 10<sup>24</sup> m' },
    { q: 'Two stars of masses 2.0 × 10<sup>30</sup> kg and 1.0 × 10<sup>30</sup> kg are 3.0 × 10<sup>11</sup> m apart. Find the distance of the heavier star from the centre of mass and the orbital period.', s: ['m<sub>1</sub>r<sub>1</sub> = m<sub>2</sub>r<sub>2</sub> with r<sub>1</sub> + r<sub>2</sub> = d: r<sub>1</sub> = d × m<sub>2</sub>/(m<sub>1</sub> + m<sub>2</sub>) = 1.0 × 10<sup>11</sup> m.', 'T = 2π√(d³/G(M<sub>1</sub> + M<sub>2</sub>)) = 2π√(2.7 × 10<sup>34</sup> / (6.67 × 10<sup>−11</sup> × 3.0 × 10<sup>30</sup>)).'], a: '1.0 × 10<sup>11</sup> m; 7.3 × 10<sup>7</sup> s (≈ 2.3 years)' },
    { q: 'Two stars orbit their common centre of mass with period 2.0 years (6.32 × 10<sup>7</sup> s). Their maximum radial velocities are 20 km s<sup>−1</sup> and 40 km s<sup>−1</sup> (circular orbits, edge on). Find their masses.', s: ['r₁ = v₁T/2π = 2.0 × 10<sup>4</sup> × 6.32 × 10<sup>7</sup>/2π = 2.01 × 10<sup>11</sup> m; r₂ = 4.02 × 10<sup>11</sup> m.', 'd = r₁ + r₂ = 6.04 × 10<sup>11</sup> m.', 'M₁ + M₂ = 4π²d³/GT² = 3.26 × 10<sup>31</sup> kg.', 'M₁/M₂ = v₂/v₁ = 2, so M₁ = 2.17 × 10<sup>31</sup> kg and M₂ = 1.09 × 10<sup>31</sup> kg.'], a: '2.2 × 10<sup>31</sup> kg and 1.1 × 10<sup>31</sup> kg' }
  ],
  pitfalls: ['Using the altitude instead of the orbital radius (from the centre).', 'Thinking a satellite’s mass affects its period.', 'In binary problems, using each star’s orbital radius instead of their separation in the period formula.', 'Using nm for Δλ and m for λ in Δλ/λ.', 'Forgetting to convert km s<sup>−1</sup> Mpc<sup>−1</sup> to s<sup>−1</sup>.'],
  cards: [
    ['Kepler’s first law?', 'Planets move in ellipses with the Sun at one focus.'],
    ['Kepler’s second law?', 'The Sun–planet line sweeps equal areas in equal times.'],
    ['Kepler’s third law?', 'T² ∝ r³'],
    ['Orbital period formula (circular)?', 'T² = 4π²r³/GM'],
    ['Orbital speed formula?', 'v = √(GM/r)'],
    ['Evidence for dark matter?', 'Flat galaxy rotation curves: outer stars orbit faster than visible mass allows.'],
    ['Doppler equation for light?', 'Δλ/λ = v/c'],
    ['What is a binary system?', 'Two bodies orbiting their common centre of mass with the same period.'],
    ['How are exoplanets detected (Doppler)?', 'Periodic Doppler shift of the star’s lines as it wobbles about the common centre of mass.'],
    ['State Hubble’s law.', 'v = H<sub>0</sub>D'],
    ['Age of universe estimate?', 't ≈ 1/H<sub>0</sub>'],
    ['Critical density formula?', 'ρ<sub>c</sub> = 3H<sub>0</sub>²/8πG'],
    ['Geostationary orbit period and radius?', '24 h; ≈ 4.2 × 10<sup>7</sup> m'],
    ['Define radial velocity.', 'The component of a star’s velocity along the line joining it to an observer on Earth.'],
    ['How might the Higgs boson relate to dark matter?', 'Dark-matter particles may get mass via the Higgs field, so Higgs bosons could decay into dark-matter particles (searched for at the LHC).'],
    ['Mass ratio of two bodies in a binary from radial velocities?', 'M₁/M₂ = v₂/v₁ (= r₂/r₁).']
  ],
  quiz: [
    { q: 'According to Kepler’s second law, a planet in an elliptical orbit moves', o: ['fastest when closest to the Sun', 'fastest when furthest from the Sun', 'at constant speed', 'fastest halfway between'], x: 'Equal areas in equal times.' },
    { q: 'Kepler’s third law states that', o: ['T² ∝ r³', 'T ∝ r²', 'T³ ∝ r²', 'T ∝ r'], x: '' },
    { q: 'A satellite’s orbital radius is increased by a factor of 4. Its period increases by a factor of', o: ['8', '4', '16', '2'], x: 'T ∝ r<sup>3/2</sup>.' },
    { q: 'As the radius of a circular orbit increases, the orbital speed', o: ['decreases', 'increases', 'is unchanged', 'first increases then decreases'], x: 'v ∝ 1/√r.' },
    { q: 'Flat galaxy rotation curves provide evidence for', o: ['dark matter', 'the Big Bang', 'black holes at galaxy centres only', 'exoplanets'], x: '' },
    { q: 'Light from a galaxy is red-shifted. This means the galaxy is', o: ['moving away from us', 'moving towards us', 'very hot', 'rotating'], x: '' },
    { q: 'An estimate of the age of the universe is given by', o: ['1/H<sub>0</sub>', 'H<sub>0</sub>', 'H<sub>0</sub>²', 'c/H<sub>0</sub>'], x: '' },
    { q: 'The critical density of the universe is given by', o: ['3H<sub>0</sub>²/8πG', '8πG/3H<sub>0</sub>²', '3H<sub>0</sub>/8πG', 'H<sub>0</sub>²/G'], x: '' },
    { q: 'Two stars in a binary system orbit', o: ['their common centre of mass with the same period', 'the heavier star’s centre', 'with periods in the ratio of their masses', 'with the same speed'], x: '' },
    { q: 'The main Doppler method of detecting exoplanets measures', o: ['the periodic shift in the star’s spectral lines', 'the planet’s own emission lines', 'the change in the star’s temperature', 'the planet’s reflected light intensity only'], x: '' },
    { q: 'A spectral line is shifted by 0.10% of its wavelength. The radial speed of the source is', o: ['3.0 × 10<sup>5</sup> m s<sup>−1</sup>', '3.0 × 10<sup>7</sup> m s<sup>−1</sup>', '3.0 × 10<sup>3</sup> m s<sup>−1</sup>', '0.10 m s<sup>−1</sup>'], x: 'v = 0.001c.' },
    { q: 'The period of a satellite in circular orbit does NOT depend on', o: ['the mass of the satellite', 'the mass of the planet', 'the orbital radius', 'G'], x: 'm cancels.' },
    { q: 'In a binary system, star A has maximum radial velocity 15 km s<sup>−1</sup> and star B 45 km s<sup>−1</sup>. The ratio of masses M<sub>A</sub>/M<sub>B</sub> is', o: ['3', '1/3', '9', '1'], x: 'M_A r_A = M_B r_B and r ∝ v, so M_A/M_B = v_B/v_A.' }
  ],
  exam: [
    { q: 'Show that for a satellite in a circular orbit of radius r around a planet of mass M, T² = (4π²/GM)r³.', m: 3, ms: ['Gravitational force provides centripetal force: GMm/r² = mω²r.', 'ω = 2π/T.', 'Rearrange: T² = 4π²r³/GM.'] },
    { q: 'Explain how the rotation curves of spiral galaxies provide evidence for dark matter.', m: 4, ms: ['Orbital speeds of stars/gas measured from Doppler shift.', 'If mass concentrated in visible centre, v ∝ 1/√r at large r (Kepler-like decrease).', 'Observed speeds roughly constant at large r.', 'M = v²r/G increases with r → more mass than visible → dark matter.'] },
    { q: 'Derive an expression for the critical density of the universe and calculate its value for H<sub>0</sub> = 2.2 × 10<sup>−18</sup> s<sup>−1</sup>.', m: 5, ms: ['Galaxy at edge of sphere: ½mv² = GMm/r for escape (total energy zero).', 'v = H<sub>0</sub>r and M = (4/3)πr³ρ.', '½H<sub>0</sub>²r² = G(4/3)πr²ρ.', 'ρ<sub>c</sub> = 3H<sub>0</sub>²/8πG.', '= 8.7 × 10<sup>−27</sup> kg m<sup>−3</sup>.'] }
  ],
  sims: ['orbit', 'galaxy'], gens: ['orbit1', 'orbit2', 'dopp1', 'hub1', 'bin1']
});

TOPICS.push({
  id: '4.4', unit: '4', title: 'Magnetic Fields', short: 'F = BIl, F = Bqv, Hall effect, accelerators',
  summary: 'Forces on currents and moving charges, the Hall effect, fields around wires and solenoids, and how accelerators use it all.',
  spec: [
    "(a) Determine the direction of the force on a current-carrying conductor in a magnetic field",
    "(b) Use F = BIl sin θ, including to find B",
    "(c) Use F = Bqv sin θ for a moving charge",
    "(d) The processes producing a Hall voltage; V_H ∝ B for constant I",
    "(e) The field shapes for a long straight wire and a long solenoid",
    "(f) Use B = μ₀I/2πa and B = μ₀nI",
    "(g) Adding an iron core increases the field strength in a solenoid",
    "(h) Current-carrying conductors exert forces on each other; predict the directions",
    "(i) Quantitatively, how ion beams are deflected in uniform electric and magnetic fields",
    "(j) The motion of charged particles in linear accelerators, cyclotrons and synchrotrons"
  ],
  learn: [
    { h: 'Force on a current', html: `
<div class="box eq">$F = BIl@,"sin"@,θ$</div>
<p>θ is the angle between the wire and the field. The force is maximum when the wire is perpendicular to the field and zero when parallel. The direction is given by <b>Fleming’s left-hand rule</b>: First finger = Field, seCond finger = Current, thuMb = Motion (force).</p>
<div class="box def"><b class="lbl">The tesla</b><p>Magnetic flux density B is 1 T when a wire of length 1 m carrying 1 A at right angles to the field experiences a force of 1 N. 1 T = 1 N A<sup>−1</sup> m<sup>−1</sup>.</p></div>
<div class="box def"><b class="lbl">Specified practical</b><p>Place a magnet (on a top-pan balance) with a horizontal wire passing between its poles, clamped rigidly. Pass currents I through the wire; the force on the wire is equal and opposite to the force on the magnet, so the change in reading × g = F. A graph of F against I has gradient Bl.</p></div>` },
    { h: 'Force on a moving charge', html: `
<div class="box eq">$F = Bqv@,"sin"@,θ$</div>
<p>The force is always perpendicular to the velocity, so it does no work: the speed is unchanged but the direction changes. A particle moving perpendicular to a uniform field follows a <b>circle</b>:</p>
<div class="box eq">$Bqv = @frac{mv^2}{r}$ &nbsp;⇒&nbsp; $r = @frac{mv}{Bq}$</div>
<p>The period $T = 2πr/v = 2πm/Bq$ does not depend on speed (non-relativistic) — the key to the cyclotron.</p>
<p>In a uniform <b>electric</b> field (e.g. between plates), a charged particle experiences a constant force qE, so it follows a <b>parabola</b>, like a projectile.</p>
<div class="box def"><b class="lbl">Crossed fields (velocity selector)</b><p>With E and B perpendicular to each other and to the beam, particles pass straight through undeflected when qE = Bqv, i.e. $v = E/B$.</p></div>` },
    { h: 'The Hall effect', html: `
<p>Current flows through a thin slice of conductor in a magnetic field perpendicular to its face. The charge carriers are pushed to one side by the magnetic force, building up a pd across the slice — the <b>Hall voltage</b>. The build-up of charge creates an electric field across the slice that pushes carriers the other way. Equilibrium is reached when the electric force on each carrier balances the magnetic force Bqv, and then the Hall voltage stays constant.</p>
<div class="box def"><b class="lbl">Key result</b><p>For a constant current, <b>V<sub>H</sub> ∝ B</b>. A larger B deflects carriers more strongly, so a larger pd is needed to balance it.</p></div>
<p>A <b>Hall probe</b> uses this to measure magnetic flux density. The probe face must be perpendicular to the field; rotate it to find the maximum reading.</p>` },
    { h: 'Fields of currents', html: `
[[d:bfield-wire]]
<div class="box eq">$B = @frac{μ_0 I}{2πa}$ (long straight wire) &nbsp;&nbsp;&nbsp; $B = μ_0 nI$ (long solenoid, n = turns per metre)</div>
<p>μ<sub>0</sub> = 4π × 10<sup>−7</sup> H m<sup>−1</sup>. Field direction: right-hand grip rule. Inside a solenoid the field is uniform and independent of the solenoid’s cross-sectional area. Adding an <b>iron core</b> greatly increases the field strength.</p>
<p><b>Two parallel wires</b>: each lies in the field of the other and so experiences a force. Currents in the <b>same</b> direction attract; opposite directions repel. The forces are equal and opposite (Newton’s 3rd law).</p>` },
    { h: 'Particle accelerators', html: `
<ul><li><b>Linear accelerator (linac)</b>: charged particles pass through a line of hollow drift tubes connected to an alternating pd. They are accelerated across each gap; inside the tubes there is no field. The pd reverses while the particle is inside a tube, so it is always accelerated at the next gap. Tubes get longer because the particles speed up, so each tube takes the same half-period to cross.</li>
<li><b>Cyclotron</b>: two hollow D-shaped electrodes (“dees”) in a uniform magnetic field, with an alternating pd across the gap. Particles are accelerated at each gap crossing and spiral outwards with increasing radius. Because T = 2πm/Bq is independent of speed, a fixed-frequency supply keeps in step (until relativistic speeds).</li>
<li><b>Synchrotron</b>: particles travel round a ring of fixed radius. Accelerating cavities increase their energy, and the magnetic field of the bending magnets is increased in step (r = p/Bq) to keep the radius constant. Used for the highest energies (e.g. the LHC).</li></ul>` }
  ],
  eqs: [['F = BIl@,"sin"@,θ', 'force on current'], ['F = Bqv@,"sin"@,θ', 'force on moving charge'], ['r = @frac{mv}{Bq}', 'radius in B field'], ['V_H ∝ B', 'Hall voltage (constant I)'], ['B = @frac{μ_0I}{2πa}', 'long wire'], ['B = μ_0nI', 'solenoid'], ['v = @frac{E}{B}', 'velocity selector']],
  worked: [
    { q: 'A 5.0 cm length of wire carrying 3.0 A lies at right angles to a 0.20 T field. Find the force.', s: ['F = BIl = 0.20 × 3.0 × 0.050.'], a: '0.030 N' },
    { q: 'An electron moves at 2.0 × 10<sup>7</sup> m s<sup>−1</sup> perpendicular to a 5.0 mT field. Find the radius of its path.', s: ['r = mv/Bq = 9.11 × 10<sup>−31</sup> × 2.0 × 10<sup>7</sup> / (5.0 × 10<sup>−3</sup> × 1.60 × 10<sup>−19</sup>).'], a: '2.3 cm' },
    { q: 'Find B at 5.0 cm from a long straight wire carrying 10 A, and inside a solenoid with 2000 turns per metre carrying 1.5 A.', s: ['Wire: B = μ<sub>0</sub>I/2πa = 4π × 10<sup>−7</sup> × 10 / (2π × 0.050) = 4.0 × 10<sup>−5</sup> T.', 'Solenoid: B = μ<sub>0</sub>nI = 4π × 10<sup>−7</sup> × 2000 × 1.5 = 3.8 × 10<sup>−3</sup> T.'], a: '40 μT; 3.8 mT' }
  ],
  pitfalls: ['Using Fleming’s right-hand rule for motor effect problems.', 'For electrons, remember the current direction is opposite to their motion.', 'Saying a magnetic field speeds up a charged particle.', 'Using turns (N) instead of turns per metre (n) in B = μ<sub>0</sub>nI.'],
  cards: [
    ['Force on a current in a B field?', 'F = BIl sin θ'],
    ['Define the tesla.', 'Field giving 1 N on 1 m of wire carrying 1 A perpendicular to the field.'],
    ['Fleming’s left-hand rule fingers?', 'First = Field, seCond = Current, thuMb = Motion/force.'],
    ['Force on a moving charge?', 'F = Bqv sin θ'],
    ['Radius of a charged particle’s path?', 'r = mv/Bq'],
    ['Why does a magnetic force do no work on a charge?', 'It is always perpendicular to the velocity.'],
    ['How does the Hall voltage depend on B?', 'V<sub>H</sub> ∝ B for a constant current.'],
    ['Effect of an iron core in a solenoid?', 'It greatly increases the field strength.'],
    ['B near a long straight wire?', 'B = μ<sub>0</sub>I/2πa'],
    ['B inside a solenoid?', 'B = μ<sub>0</sub>nI'],
    ['Parallel currents in the same direction…', 'attract.'],
    ['Why do linac drift tubes get longer?', 'Particles speed up; each tube must take the same time (half a period).'],
    ['Why can a cyclotron use a fixed frequency?', 'Orbital period 2πm/Bq is independent of speed (non-relativistic).'],
    ['How does a synchrotron keep radius constant?', 'B is increased as the particle momentum increases.'],
    ['Velocity selector condition?', 'v = E/B']
  ],
  quiz: [
    { q: 'The tesla is equivalent to', o: ['N A<sup>−1</sup> m<sup>−1</sup>', 'N A m', 'N A<sup>−1</sup> m', 'Wb m'], x: 'B = F/Il.' },
    { q: 'A current-carrying wire lies parallel to a magnetic field. The force on it is', o: ['zero', 'maximum', 'BIl/2', 'along the wire'], x: 'sin 0° = 0.' },
    { q: 'A charged particle enters a uniform magnetic field at right angles. Its subsequent motion is', o: ['circular at constant speed', 'a parabola', 'straight at increasing speed', 'a spiral with decreasing speed'], x: '' },
    { q: 'The speed of a charged particle in a uniform magnetic field is doubled. The radius of its circular path', o: ['doubles', 'halves', 'quadruples', 'is unchanged'], x: 'r = mv/Bq.' },
    { q: 'The magnetic flux density at distance a from a long straight wire is B. At 2a it is', o: ['B/2', 'B/4', '2B', 'B'], x: 'B ∝ 1/a.' },
    { q: 'Two long parallel wires carry currents in the same direction. They', o: ['attract each other', 'repel each other', 'experience no force', 'twist'], x: '' },
    { q: 'A cyclotron can use an alternating pd of fixed frequency because', o: ['the period of a particle’s orbit does not depend on its speed', 'the particles move at constant speed', 'the magnetic field increases with time', 'the radius is constant'], x: 'T = 2πm/Bq (non-relativistic).' },
    { q: 'In a synchrotron, as the particles gain energy', o: ['the magnetic field strength is increased', 'the radius of the orbit increases', 'the magnetic field is switched off', 'the frequency is kept constant'], x: '' },
    { q: 'The field inside a long solenoid is', o: ['uniform and equal to μ<sub>0</sub>nI', 'zero', 'strongest near the walls', 'proportional to its area'], x: '' },
    { q: 'In crossed electric and magnetic fields, particles pass undeflected if their speed is', o: ['E/B', 'B/E', 'EB', '√(E/B)'], x: 'qE = Bqv.' },
    { q: 'The work done by a magnetic field on a moving charged particle is', o: ['zero', 'Bqv × distance', 'positive', 'negative'], x: 'Force ⊥ velocity.' },
    { q: 'For a Hall probe carrying a constant current, the Hall voltage is', o: ['directly proportional to the magnetic flux density', 'inversely proportional to the flux density', 'independent of the flux density', 'proportional to the square of the flux density'], x: 'V_H ∝ B for constant I.' },
    { q: 'Inserting an iron core into a current-carrying solenoid', o: ['increases the magnetic field strength inside it', 'reduces the field to zero', 'reverses the field', 'has no effect on the field'], x: '' }
  ],
  exam: [
    { q: 'Explain why a charged particle moving at right angles to a uniform magnetic field moves in a circle, and derive an expression for the radius.', m: 4, ms: ['Force Bqv is perpendicular to velocity at all times.', 'Magnitude constant (speed unchanged since no work done) → centripetal force.', 'Bqv = mv²/r', 'r = mv/Bq'] },
    { q: 'Describe the Hall effect in a thin slice of conductor and explain how a Hall probe is used to measure magnetic flux density.', m: 6, ms: ['Current flows through slice; B perpendicular to the slice face.', 'Charge carriers experience force Bqv and are deflected to one side.', 'Charge builds up, creating an electric field / pd across the slice.', 'Equilibrium when electric force on carriers balances magnetic force; V_H then constant.', 'For constant current V_H ∝ B, so V_H measures B (after calibration).', 'Hold probe face perpendicular to field (rotate for maximum reading).'] },
    { q: 'Describe the principles of operation of a cyclotron.', m: 5, ms: ['Two hollow D-shaped electrodes (dees) in uniform magnetic field perpendicular to them.', 'Alternating pd across the gap between dees.', 'Particles accelerated each time they cross the gap; move in semicircles inside dees (no electric field inside).', 'Radius increases with speed (r = mv/Bq) — spiral path.', 'Time for each semicircle independent of speed so fixed frequency pd stays in step.'] }
  ],
  sims: ['bfield'], gens: ['mag1', 'mag2', 'mag3', 'sel1']
});

TOPICS.push({
  id: '4.5', unit: '4', title: 'Electromagnetic Induction', short: 'Flux, Faraday, Lenz',
  summary: 'Changing magnetic flux linkage induces an emf. Faraday’s law gives its size; Lenz’s law gives its direction — and is just conservation of energy.',
  spec: [
    "(a) Magnetic flux Φ = AB cos θ and flux linkage = NΦ",
    "(b) The laws of Faraday and Lenz",
    "(c) Apply them: emf = − rate of change of flux linkage",
    "(d) An emf is induced in a linear conductor moving at right angles to a uniform field",
    "(e) Qualitatively, how the instantaneous emf in a coil rotating in a magnetic field depends on the coil’s position, B, area and angular velocity"
  ],
  learn: [
    { h: 'Flux and flux linkage', html: `
<div class="box def"><b class="lbl">Definitions</b><p><b>Magnetic flux</b> Φ through an area A in a field B: $Φ = AB@,"cos"@,θ$, where θ is the angle between B and the normal to the area. Unit: weber, 1 Wb = 1 T m<sup>2</sup>.</p><p><b>Flux linkage</b> for a coil of N turns = NΦ (Wb or Wb-turns).</p></div>
<p>The flux is maximum when the coil’s plane is perpendicular to the field (θ = 0) and zero when the plane is parallel to the field.</p>` },
    { h: 'Faraday’s and Lenz’s laws', html: `
<div class="box def"><b class="lbl">Faraday’s law</b><p>The induced emf is equal to the rate of change of magnetic flux linkage: $E = -@frac{Δ(NΦ)}{Δt}$.</p></div>
<div class="box def"><b class="lbl">Lenz’s law</b><p>The direction of the induced emf (current) is such as to oppose the change that produces it.</p></div>
<p>Lenz’s law is a consequence of <b>conservation of energy</b>. If the induced current helped the change, it would produce more current from nothing — energy would be created. Instead, work must be done against the opposing force, and that work becomes the electrical energy.</p>
<p>Examples: push a north pole into a coil and the coil’s near end becomes a north pole, repelling the magnet. A magnet dropped down a copper pipe falls slowly because eddy currents induced in the pipe oppose its motion. Eddy-current brakes on trains and rollercoasters work the same way.</p>
<p>On a graph of flux linkage against time, the magnitude of the induced emf is the <b>gradient</b>.</p>` },
    { h: 'A moving straight conductor', html: `
<p>A rod of length l moves at speed v perpendicular to a field B. In time Δt it sweeps an area lvΔt, so the flux cut is BlvΔt:</p>
<div class="box eq">$E = Blv$</div>
<p>If the rod is part of a complete circuit, the induced current experiences a force BIl opposing the motion (Lenz). The mechanical power needed to keep it moving, Fv = BIlv = EI, equals the electrical power generated.</p>
<p>Example: an aircraft with a 30 m wingspan flying at 250 m s<sup>−1</sup> through a vertical field component of 4.0 × 10<sup>−5</sup> T has an emf of 0.30 V between its wingtips.</p>` },
    { h: 'A coil rotating in a magnetic field', html: `
<p>When a flat coil of N turns and area A rotates at angular velocity ω in a uniform field B, the angle between the coil’s normal and the field keeps changing, so its flux linkage changes and an emf is induced (this is how an a.c. generator works).</p>
<ul><li><b>Coil plane perpendicular to B</b> (normal parallel to B): flux linkage is <b>maximum</b> but momentarily not changing, so the emf is <b>zero</b>.</li>
<li><b>Coil plane parallel to B</b>: flux linkage is <b>zero</b> but changing fastest, so the emf is <b>maximum</b>.</li>
<li>The emf alternates sinusoidally. Its peak value is larger if B, the coil area, the number of turns or the angular velocity is increased (and a faster rotation also increases the frequency).</li></ul>
<div class="box tip"><b class="lbl">Link</b><p>The quantitative treatment (V = ωBAN sin ωt) is part of Option A, Alternating Currents.</p></div>` }
  ],
  eqs: [['Φ = AB@,"cos"@,θ', 'magnetic flux'], ['"flux linkage" = NΦ', ''], ['E = -@frac{Δ(NΦ)}{Δt}', 'Faraday + Lenz'], ['E = Blv', 'moving rod']],
  worked: [
    { q: 'A 200-turn coil of area 4.0 × 10<sup>−4</sup> m² is perpendicular to a 0.30 T field. It is pulled out of the field in 0.10 s. Find the mean induced emf.', s: ['Initial flux linkage = NBA = 200 × 0.30 × 4.0 × 10<sup>−4</sup> = 0.024 Wb.', 'E = Δ(NΦ)/Δt = 0.024 / 0.10.'], a: '0.24 V' },
    { q: 'A 0.20 m rod moves at 5.0 m s<sup>−1</sup> along rails through a 0.40 T field; the circuit resistance is 2.0 Ω. Find the emf, the current, the opposing force and the power needed.', s: ['E = Blv = 0.40 × 0.20 × 5.0 = 0.40 V.', 'I = E/R = 0.20 A.', 'F = BIl = 0.40 × 0.20 × 0.20 = 0.016 N (opposing motion).', 'P = Fv = 0.080 W = EI ✓.'], a: '0.40 V; 0.20 A; 0.016 N; 80 mW' }
  ],
  pitfalls: ['Using θ as the angle between the field and the plane of the coil instead of the normal.', 'Forgetting N in flux linkage.', 'Saying emf depends on flux rather than rate of change of flux (a magnet at rest in a coil induces nothing).', 'Getting the direction wrong: the induced current opposes the change, not the field itself.'],
  cards: [
    ['Define magnetic flux.', 'Φ = AB cos θ (θ between B and the normal).'],
    ['Unit of flux?', 'Weber: 1 Wb = 1 T m²'],
    ['Define flux linkage.', 'NΦ for N turns.'],
    ['State Faraday’s law.', 'Induced emf = rate of change of flux linkage.'],
    ['State Lenz’s law.', 'Induced current opposes the change producing it.'],
    ['Lenz’s law is a consequence of…', 'conservation of energy.'],
    ['emf in a moving rod?', 'E = Blv'],
    ['Gradient of a flux linkage–time graph?', 'Induced emf (magnitude).'],
    ['Why does a magnet fall slowly through a copper tube?', 'Induced eddy currents create a field opposing its motion.'],
    ['emf when a magnet sits still inside a coil?', 'Zero — no change of flux.'],
    ['Coil rotating in a field: position of maximum emf?', 'When the plane of the coil is parallel to B (flux linkage zero but changing fastest).']
  ],
  quiz: [
    { q: 'The weber is equivalent to', o: ['T m<sup>2</sup>', 'T m<sup>−2</sup>', 'T m', 'T s'], x: '' },
    { q: 'Faraday’s law states that the induced emf is equal to', o: ['the rate of change of flux linkage', 'the flux linkage', 'the rate of change of current', 'the flux density × area'], x: '' },
    { q: 'Lenz’s law is a consequence of the conservation of', o: ['energy', 'charge', 'momentum', 'flux'], x: '' },
    { q: 'A flat coil is turned so that its plane is parallel to a uniform field. The flux through it is', o: ['zero', 'maximum', 'BA/2', 'negative'], x: 'Normal ⊥ B, cos 90° = 0.' },
    { q: 'A magnet dropped through a vertical copper tube falls slowly because', o: ['eddy currents induced in the tube oppose its motion', 'copper is magnetic', 'air resistance inside the tube is large', 'copper attracts the magnet electrostatically'], x: '' },
    { q: 'A magnet is pushed into a coil twice as fast. The induced emf', o: ['doubles', 'halves', 'is unchanged', 'quadruples'], x: 'Rate of change of flux doubles.' },
    { q: 'A 0.20 m rod moves at 3.0 m s<sup>−1</sup> perpendicular to a 0.50 T field. The induced emf is', o: ['0.30 V', '3.0 V', '0.033 V', '7.5 V'], x: 'Blv.' },
    { q: 'A 500-turn coil has a flux of 2.0 × 10<sup>−4</sup> Wb through it. The flux linkage is', o: ['0.10 Wb', '2.0 × 10<sup>−4</sup> Wb', '2.5 × 10<sup>6</sup> Wb', '1.0 × 10<sup>−2</sup> Wb'], x: '' },
    { q: 'For a graph of flux linkage against time, the induced emf is given by', o: ['the gradient', 'the area under the graph', 'the maximum value', 'the intercept'], x: '' },
    { q: 'A magnet is held stationary inside a coil. The induced emf is', o: ['zero', 'maximum', 'constant and non-zero', 'alternating'], x: 'No change of flux.' },
    { q: 'A flat coil rotates steadily in a uniform magnetic field. The induced emf is zero when', o: ['the plane of the coil is perpendicular to the field', 'the plane of the coil is parallel to the field', 'the flux linkage is zero', 'the coil rotates fastest'], x: 'Flux linkage is maximum there, so its rate of change is zero.' },
    { q: 'The rotation rate of a generator coil is doubled. The peak emf', o: ['doubles', 'halves', 'quadruples', 'is unchanged'], x: 'Peak emf ∝ ω (flux linkage changes twice as fast).' }
  ],
  exam: [
    { q: 'State Faraday’s and Lenz’s laws of electromagnetic induction.', m: 3, ms: ['Faraday: induced emf ∝ / = rate of change of flux linkage.', 'Lenz: direction of induced emf/current is such as to oppose the change', 'that produces it.'] },
    { q: 'Explain, in terms of energy, why Lenz’s law must be true.', m: 3, ms: ['If induced current aided the change, motion would accelerate and current increase without input.', 'Energy would be created — violates conservation of energy.', 'Opposition means work must be done, which is transferred to electrical energy.'] },
    { q: 'A square coil of side 5.0 cm and 150 turns is placed perpendicular to a field that increases uniformly from 0 to 0.60 T in 0.25 s. Calculate the induced emf.', m: 3, ms: ['A = 2.5 × 10<sup>−3</sup> m²', 'Δ(NΦ) = 150 × 0.60 × 2.5 × 10<sup>−3</sup> = 0.225 Wb', 'E = 0.225/0.25 = 0.90 V'] }
  ],
  sims: ['induction'], gens: ['emi1', 'emi2', 'emi3']
});
