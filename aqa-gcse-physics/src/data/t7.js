/* ==========================================================
   4.7 MAGNETISM AND ELECTROMAGNETISM
   ========================================================== */
TOPICS.push({
  id: '7.1', unit: '7', ref: '4.7.1', title: 'Magnets and magnetic fields', short: 'Poles, induced magnets, field lines, compasses',
  summary: 'Like poles repel and unlike poles attract. Learn the difference between permanent and induced magnets, draw field patterns, plot them with a compass, and see why the Earth must have a magnetic core.',
  spec: [
    'The poles of a magnet are where the magnetic forces are strongest; like poles repel, unlike poles attract — examples of non-contact force',
    'A permanent magnet produces its own magnetic field; an induced magnet becomes a magnet when placed in a magnetic field; induced magnetism always causes attraction and is lost quickly when removed from the field',
    'Describe attraction and repulsion between poles, and the difference between permanent and induced magnets',
    'The magnetic field is the region around a magnet where a force acts on another magnet or a magnetic material (iron, steel, cobalt and nickel); the force between a magnet and a magnetic material is always attraction',
    'Field strength depends on distance from the magnet; it is strongest at the poles',
    'The direction of the field at a point is the direction of the force on a north pole placed there; field lines go from north (seeking) pole to south (seeking) pole',
    'A compass contains a small bar magnet; the Earth has a magnetic field; the compass needle points in the direction of the Earth’s field',
    'Describe how to plot a field pattern with a compass; draw the field of a bar magnet showing how strength and direction change; explain how compass behaviour is evidence that the Earth’s core is magnetic'
  ],
  learn: [
    { h: 'Poles and forces', html: `
<p>The <b>poles</b> of a magnet are the places where the magnetic forces are <b>strongest</b>. Every magnet has a north (seeking) pole and a south (seeking) pole.</p>
<ul><li><b>Like poles repel</b> (N–N or S–S).</li><li><b>Unlike poles attract</b> (N–S).</li></ul>
<p>These forces act without the magnets touching — they are <b>non-contact forces</b>.</p>` },
    { h: 'Permanent and induced magnets', html: `
<div class="tbl"><table><tr><th>Permanent magnet</th><th>Induced magnet</th></tr>
<tr><td>produces its own magnetic field all the time</td><td>becomes a magnet only when placed in a magnetic field</td></tr>
<tr><td>can attract or repel</td><td>induced magnetism <b>always causes attraction</b></td></tr>
<tr><td>e.g. a bar magnet, fridge magnet</td><td>e.g. an iron nail near a magnet; loses most or all of its magnetism <b>quickly</b> when removed</td></tr></table></div>
<p><b>Magnetic materials</b> are iron, steel, cobalt and nickel. The force between a magnet and a magnetic material is <b>always attraction</b>. That is how you can tell a magnet from an unmagnetised piece of iron: only a magnet can repel another magnet.</p>` },
    { h: 'Magnetic fields', html: `
<div class="box def"><b class="lbl">Magnetic field</b><p>The region around a magnet where a force acts on another magnet or on a magnetic material.</p></div>
[[d:barfield]]
<ul><li>Field lines go from the <b>north</b> pole to the <b>south</b> pole — the direction of the force on a north pole placed there.</li><li>The field is <b>strongest at the poles</b>, where the lines are closest together; it gets weaker further from the magnet.</li><li>Field lines never cross.</li></ul>
<p><b>Plotting a field with a compass:</b> place the magnet on paper and draw round it. Put a small plotting compass near the north pole and mark the direction the needle points with a dot at its tip. Move the compass so its tail is at the dot; mark again. Continue until you reach the south pole, then join the dots to make a field line. Repeat from different starting points.</p>` },
    { h: 'The Earth’s magnetic field', html: `
<p>A compass contains a small, freely pivoted bar magnet. Away from any magnets, it always points in the same direction — north. This shows that the <b>Earth has a magnetic field</b>, and the compass needle lines up with it.</p>
<p>The field pattern around the Earth is like that of a giant bar magnet, which is <b>evidence that the core of the Earth must be magnetic</b> (made largely of iron and nickel).</p>
<p class="small muted">Because opposite poles attract, the Earth’s magnetic pole near the geographic North Pole is actually a magnetic south pole.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'You have two identical-looking iron bars. Only one is a magnet. How can you tell which, using only the two bars?', s: ['Bring the end of bar A towards the middle of bar B.', 'If A is the magnet, it attracts B strongly (B is magnetic material) — even at B’s middle.', 'If B is the magnet, its middle is not a pole, so A is attracted only weakly there. (Repulsion can only happen between two magnets.)'], a: 'The end of the magnet attracts the middle of the iron bar strongly; the reverse is weak.' }
  ],
  pitfalls: ['Saying field lines go from south to north.', 'Saying all metals are magnetic (only iron, steel, cobalt, nickel).', 'Saying an induced magnet can repel.', 'Drawing field lines that cross or start in mid-air.'],
  cards: [
    ['Where are the magnetic forces strongest?', 'At the poles.'],
    ['Like poles…? Unlike poles…?', 'Repel; attract.'],
    ['What is a permanent magnet?', 'One that produces its own magnetic field.'],
    ['What is an induced magnet?', 'A material that becomes a magnet when placed in a magnetic field.'],
    ['What force does induced magnetism always cause?', 'Attraction.'],
    ['Four magnetic materials?', 'Iron, steel, cobalt, nickel.'],
    ['Define a magnetic field.', 'Region around a magnet where a force acts on another magnet or magnetic material.'],
    ['Direction of magnetic field lines?', 'From north pole to south pole.'],
    ['How is field direction defined?', 'The direction of the force on a north pole placed at that point.'],
    ['How do you plot a field line?', 'Move a plotting compass step by step, marking where the needle points.'],
    ['What does a compass show about the Earth?', 'It has a magnetic field — evidence of a magnetic core.'],
    ['What happens to an induced magnet when removed from the field?', 'It loses most/all of its magnetism quickly.']
  ],
  quiz: [
    { q: 'Two north poles are brought together. They', o: ['repel', 'attract', 'do nothing', 'become south poles'], x: 'Like poles repel.' },
    { q: 'Which is a magnetic material?', o: ['nickel', 'copper', 'aluminium', 'brass'], x: 'Iron, steel, cobalt, nickel.' },
    { q: 'An induced magnet', o: ['becomes a magnet only when in a magnetic field', 'can repel a permanent magnet', 'keeps its magnetism for ever', 'is always made of copper'], x: 'And always attracts.' },
    { q: 'Magnetic field lines point', o: ['from north to south', 'from south to north', 'towards both poles', 'in circles around the magnet'], x: 'Outside the magnet.' },
    { q: 'The magnetic field of a bar magnet is strongest', o: ['at the poles', 'in the middle', 'far from the magnet', 'equally everywhere'], x: 'Field lines closest there.' },
    { q: 'The force between a magnet and an iron nail is', o: ['always attraction', 'always repulsion', 'attraction or repulsion', 'zero'], x: 'Induced magnetism attracts.' },
    { q: 'Which is the best evidence that the Earth’s core is magnetic?', o: ['a compass needle points north', 'the Earth is round', 'iron rusts', 'the Earth rotates'], x: 'The compass aligns with Earth’s field.' },
    { q: 'The direction of a magnetic field at a point is the direction of the force on', o: ['a north pole placed there', 'a south pole placed there', 'an iron nail', 'an electric charge'], x: 'Definition.' },
    { q: 'The only sure test that an object is a permanent magnet is', o: ['it repels another magnet', 'it attracts iron', 'it is metal', 'it is attracted to a magnet'], x: 'Repulsion needs two magnets.' },
    { q: 'Magnetic attraction and repulsion are examples of', o: ['non-contact forces', 'contact forces', 'friction', 'tension'], x: 'They act at a distance.' }
  ],
  exam: [
    { q: 'Describe how a plotting compass can be used to draw the magnetic field pattern around a bar magnet.', m: 4, ms: ['Place the magnet on paper and draw round it.', 'Place the compass near one pole; mark the direction the needle points (dot at its tip).', 'Move the compass so its tail is on the dot and mark again; repeat until reaching the other pole.', 'Join the dots and add arrows (N → S); repeat for other starting positions.'] },
    { q: 'Describe the difference between a permanent magnet and an induced magnet.', m: 3, ms: ['A permanent magnet produces its own magnetic field.', 'An induced magnet only becomes magnetic when placed in a magnetic field.', 'Induced magnetism always attracts and is lost quickly when removed from the field.'] },
    { q: 'Draw the magnetic field pattern around a bar magnet.', m: 3, ms: ['Lines from N to S curving around the magnet.', 'Arrows from N to S.', 'Lines closer together at the poles; no lines crossing.'] }
  ],
  sims: ['magfield'], gens: []
});

TOPICS.push({
  id: '7.2', unit: '7', ref: '4.7.2', title: 'Electromagnetism and the motor effect', short: 'Solenoids, F = BIl, motors, loudspeakers',
  summary: 'A current makes a magnetic field. Coil the wire into a solenoid and add iron to make an electromagnet. In a magnetic field a current feels a force (Higher): Fleming’s left-hand rule, F = BIl, motors and loudspeakers.',
  spec: [
    'A current in a wire produces a magnetic field around it; its strength depends on the current and the distance from the wire',
    'Shaping a wire into a solenoid increases the field; the field inside a solenoid is strong and uniform; outside it is like a bar magnet’s; an iron core increases the strength — an electromagnet is a solenoid with an iron core',
    'Describe how to demonstrate the magnetic effect of a current; draw the field for a straight wire and a solenoid (with direction); explain how a solenoid increases the magnetic effect',
    '(PO) Interpret diagrams of electromagnetic devices to explain how they work',
    '(HT) Motor effect: a current-carrying conductor in a magnetic field and the magnet exert a force on each other',
    '(HT) Fleming’s left-hand rule gives the relative orientation of force, current and field; recall the factors affecting the size of the force',
    '(HT) F = B I l for a conductor at right angles to the field (equation sheet) — N, tesla (T), A, m',
    '(HT) A coil carrying a current in a magnetic field tends to rotate — the basis of an electric motor; explain how the force causes rotation',
    '(PO) (HT) Loudspeakers and headphones use the motor effect to convert variations in current into pressure variations in sound waves; explain how a moving-coil loudspeaker works'
  ],
  learn: [
    { h: 'The magnetic effect of a current', html: `
<p>When a current flows through a wire, a <b>magnetic field</b> is produced around it. You can demonstrate this by placing plotting compasses around a vertical wire — they line up in a circle when the current is on, and reverse when the current is reversed.</p>
[[d:wirefield]]
<ul><li>The field lines are <b>concentric circles</b> around the wire.</li><li>The <b>right-hand grip rule</b>: grip the wire with your right thumb pointing along the current — your fingers curl in the direction of the field.</li><li>The field is <b>stronger</b> for a <b>larger current</b> and <b>closer to the wire</b>.</li></ul>` },
    { h: 'Solenoids and electromagnets', html: `
[[d:solenoid]]
<p>Shaping a wire into a coil called a <b>solenoid</b> makes the fields of all the turns add together, <b>increasing the strength</b> of the field.</p>
<ul><li>The field <b>inside</b> a solenoid is <b>strong and uniform</b> (parallel, evenly spaced lines).</li><li>The field <b>outside</b> has the same shape as a <b>bar magnet’s</b>.</li><li>Adding an <b>iron core</b> increases the strength further — the iron becomes an induced magnet. A solenoid with an iron core is an <b>electromagnet</b>.</li></ul>
<p>Electromagnets can be switched on and off and their strength controlled by the current (and number of turns). Uses: scrap-yard cranes, electric bells, relays, circuit breakers, door locks.</p>
<div data-po="1"><div class="box why"><b class="lbl">Interpreting devices (physics only)</b><p>In a <b>relay</b>, a small current in the coil magnetises the iron core, which attracts an iron armature and closes a switch in a second circuit (e.g. to switch on a car’s starter motor safely with a small current). In an <b>electric bell</b>, the electromagnet pulls the hammer to the gong, which breaks the circuit; a spring pulls it back, completing the circuit again — so it repeats.</p></div></div>` },
    { h: 'The motor effect and Fleming’s left-hand rule', ht: true, html: `
<p>When a conductor carrying a current is placed in a magnetic field, the magnet and the conductor <b>exert a force on each other</b>. This is the <b>motor effect</b>. The force is largest when the wire is at right angles to the field, and zero when parallel.</p>
[[d:fleming]]
<div class="box def"><b class="lbl">Fleming’s left-hand rule</b><p>Hold the thumb, first finger and second finger of your <b>left</b> hand at right angles: <b>F</b>irst finger = <b>F</b>ield (N → S); se<b>C</b>ond finger = <b>C</b>urrent; th<b>u</b>mb = motion (force).</p></div>
<div class="box def"><b class="lbl">Given on the equation sheet</b><p>force = magnetic flux density × current × length &nbsp; $F = BIl$</p><p class="small">F in N, B in tesla (T), I in A, l in m — for a conductor at right angles to the field</p></div>
<p>The force increases with the <b>magnetic flux density</b> (stronger magnet), the <b>current</b> and the <b>length</b> of conductor in the field.</p>` },
    { h: 'Electric motors', ht: true, html: `
[[d:motor]]
<p>A <b>coil</b> of wire carrying a current in a magnetic field <b>tends to rotate</b>:</p>
<ol><li>Current flows in <b>opposite directions</b> in the two sides of the coil.</li><li>By Fleming’s left-hand rule, one side is pushed <b>up</b> and the other <b>down</b> — together they make the coil turn.</li><li>A <b>split-ring commutator</b> reverses the current in the coil every half turn, so the forces keep turning the coil the <b>same way</b>.</li></ol>
<p>The motor turns faster with a larger current, a stronger magnet or more turns on the coil. Reversing the current or the field reverses the direction of rotation.</p>` },
    { h: 'Loudspeakers and headphones', po: true, ht: true, html: `
[[d:speaker]]
<p>Loudspeakers and headphones use the <b>motor effect</b> to convert <b>variations in current</b> into <b>pressure variations</b> in sound waves:</p>
<ol><li>An alternating current from the amplifier flows through a coil attached to a paper (or plastic) cone.</li><li>The coil sits in the field of a permanent magnet, so it experiences a force.</li><li>As the current changes direction, the force changes direction, so the coil and cone <b>vibrate</b> back and forth.</li><li>The cone pushes the air, creating compressions and rarefactions — a sound wave. The frequency of the sound matches the frequency of the current; a larger current gives a louder sound.</li></ol>` }
  ],
  eqs: [['F = BIl', 'force on a current-carrying conductor at right angles to a field (equation sheet; HT)']],
  worked: [
    { ht: 1, q: 'A wire 0.050 m long carries a current of 3.0 A at right angles to a magnetic field of flux density 0.20 T. Calculate the force on the wire.', s: ['$F = BIl$', '$F = 0.20 × 3.0 × 0.050$', '$F = 0.030 "N"$'], a: '0.030 N' },
    { ht: 1, q: 'A force of 0.12 N acts on a 0.40 m wire carrying 1.5 A at right angles to a field. Calculate the magnetic flux density.', s: ['$B = @frac{F}{Il}$', '$B = @frac{0.12}{1.5 × 0.40}$', '$B = 0.20 "T"$'], a: '0.20 T' }
  ],
  pitfalls: ['Using the right hand for the motor effect (it is the LEFT hand).', 'Saying the field inside a solenoid is weak — it is strong and uniform.', 'Forgetting that F = BIl only applies when the wire is at right angles to the field.', 'Saying the commutator reverses the magnetic field — it reverses the current in the coil.'],
  cards: [
    ['Shape of the field around a straight wire?', 'Concentric circles.'],
    ['What affects the strength of the field around a wire?', 'The current and the distance from the wire.'],
    ['Field inside a solenoid?', 'Strong and uniform.'],
    ['Field outside a solenoid?', 'Like a bar magnet’s.'],
    ['What is an electromagnet?', 'A solenoid with an iron core.'],
    ['How can you make an electromagnet stronger?', 'More current, more turns, an iron core.'],
    ['(HT) What is the motor effect?', 'A current-carrying conductor in a magnetic field experiences a force.', 'ht'],
    ['(HT) Fleming’s left-hand rule?', 'First finger = Field, seCond finger = Current, thuMb = Motion/force.', 'ht'],
    ['(HT) Equation for force on a conductor?', '$F = BIl$ (N, T, A, m)', 'ht'],
    ['(HT) Unit of magnetic flux density?', 'Tesla (T)', 'ht'],
    ['(HT) What makes a motor coil keep turning the same way?', 'A split-ring commutator reverses the current every half turn.', 'ht'],
    ['(HT) How does a loudspeaker make sound?', 'Changing current in a coil in a magnetic field makes the coil and cone vibrate.', 'htpo']
  ],
  quiz: [
    { q: 'The magnetic field around a straight current-carrying wire is', o: ['concentric circles', 'straight lines parallel to the wire', 'like a bar magnet’s', 'zero'], x: 'Circles around the wire.' },
    { q: 'Which change increases the strength of a solenoid’s field?', o: ['adding an iron core', 'reducing the current', 'using fewer turns', 'using a copper core'], x: 'Iron becomes magnetised.' },
    { q: 'The field inside a long solenoid is', o: ['strong and uniform', 'weak and circular', 'zero', 'strongest at the edges'], x: 'Parallel field lines.' },
    { q: 'An electromagnet is', o: ['a solenoid with an iron core', 'a permanent magnet', 'a coil with no current', 'a copper bar'], x: 'Definition.' },
    { q: 'The field around a wire is stronger', o: ['closer to the wire and with a larger current', 'further from the wire', 'with a smaller current', 'when the current is off'], x: 'Spec statement.' },
    { q: 'In Fleming’s left-hand rule, the first finger represents', o: ['the magnetic field', 'the current', 'the force', 'the voltage'], x: 'First = Field.', ht: 1 },
    { q: 'A 0.10 m wire carries 2.0 A at right angles to a 0.50 T field. The force is', o: ['0.10 N', '10 N', '1.0 N', '0.025 N'], x: 'F = BIl.', ht: 1 },
    { q: 'The unit of magnetic flux density is the', o: ['tesla', 'weber', 'henry', 'gauss-metre'], x: 'T.', ht: 1 },
    { q: 'In an electric motor, the split-ring commutator', o: ['reverses the current every half turn', 'reverses the magnetic field', 'increases the current', 'stops the coil'], x: 'Keeps rotation in one direction.', ht: 1 },
    { q: 'The force on a current-carrying wire is zero when the wire is', o: ['parallel to the magnetic field', 'at right angles to the field', 'at 45° to the field', 'carrying a large current'], x: 'Motor effect needs a component across the field.', ht: 1 },
    { q: 'A loudspeaker converts', o: ['variations in current into pressure variations in sound', 'sound into current', 'dc into ac', 'light into sound'], x: 'Motor effect.', po: 1, ht: 1 }
  ],
  exam: [
    { q: 'Explain how a solenoid can be made into a strong electromagnet.', m: 3, ms: ['Coiling the wire into a solenoid makes the fields from each turn add together.', 'Adding an iron core increases the strength (iron becomes magnetised).', 'Increasing the current / number of turns increases the strength further.'] },
    { q: 'Explain how the forces on a coil in a magnetic field make an electric motor rotate.', m: 4, ms: ['Current flows in opposite directions on the two sides of the coil.', 'Each side experiences a force (motor effect / Fleming’s LHR) in opposite directions — one up, one down.', 'These forces produce a turning effect so the coil rotates.', 'The split-ring commutator reverses the current every half turn so rotation continues in the same direction.'], ht: 1 },
    { q: 'Explain how a moving-coil loudspeaker produces sound.', m: 4, ms: ['An alternating current passes through the coil in the field of a permanent magnet.', 'The coil experiences a force (motor effect).', 'The force changes direction as the current changes, so the coil and cone vibrate.', 'The cone makes the air vibrate, producing pressure variations / sound waves.'], po: 1, ht: 1 },
    { q: 'A wire carrying 4.0 A has 0.25 m of its length at right angles to a magnetic field. The force on it is 0.080 N. Calculate the magnetic flux density.', m: 3, ms: ['B = F / (I l)', 'B = 0.080 / (4.0 × 0.25)', 'B = 0.080 T'], ht: 1 }
  ],
  sims: ['solenoid', 'motor'], gens: ['bil1', 'bil2']
});

TOPICS.push({
  id: '7.3', unit: '7', ref: '4.7.3', po: true, ht: true, title: 'Induced potential, generators and transformers', short: 'Generator effect, alternators, microphones, transformers',
  summary: 'Move a wire through a magnetic field and a potential difference is induced. This generator effect runs power stations, dynamos and microphones — and transformers use it to step voltages up and down.',
  spec: [
    '(PO) (HT) If a conductor moves relative to a magnetic field, or the field around it changes, a pd is induced across its ends; in a complete circuit a current is induced — the generator effect',
    '(PO) (HT) An induced current generates a magnetic field that opposes the original change',
    '(PO) (HT) Recall the factors that affect the size and direction of the induced pd/current; apply the generator effect in a given context',
    '(PO) (HT) The generator effect is used in an alternator to generate ac and in a dynamo to generate dc; draw/interpret graphs of pd against time',
    '(PO) (HT) Microphones use the generator effect to convert pressure variations in sound into variations in current; explain how a moving-coil microphone works',
    '(PO) (HT) A transformer has a primary coil and a secondary coil wound on an iron core; iron is used because it is easily magnetised',
    '(PO) (HT) Vp / Vs = np / ns (equation sheet); step-up: Vs > Vp; step-down: Vs < Vp',
    '(PO) (HT) If 100% efficient, power output = power input: Vs × Is = Vp × Ip (equation sheet)',
    '(PO) (HT) Explain how an alternating current in one coil induces a current in the other; calculate the current drawn from the input supply; relate this to the advantages of transmission at high pd'
  ],
  learn: [
    { h: 'The generator effect', html: `
<p>If an electrical conductor <b>moves relative to a magnetic field</b>, or the <b>magnetic field around a conductor changes</b>, a <b>potential difference is induced</b> across the ends of the conductor. If the conductor is part of a complete circuit, a <b>current is induced</b>. This is the <b>generator effect</b>.</p>
[[d:induction]]
<div class="tbl"><table><tr><th>Size of induced pd increases with…</th><th>Direction of induced pd reverses if…</th></tr><tr><td>faster movement (speed of the wire or magnet)<br>a stronger magnetic field<br>more turns on the coil</td><td>the direction of movement is reversed<br>the magnetic field (poles) is reversed</td></tr></table></div>
<p>An <b>induced current</b> produces its own magnetic field that <b>opposes the original change</b>. Push a north pole into a coil and the end of the coil nearest the magnet becomes a north pole, repelling it. That’s why you must do work to generate electricity.</p>` },
    { h: 'Alternators and dynamos', html: `
[[d:generator]]
<p>A coil rotating in a magnetic field has a pd induced across it, which changes as the coil turns.</p>
<ul><li>An <b>alternator</b> generates <b>ac</b>. It uses <b>slip rings</b> and brushes, so each end of the coil stays connected to the same side of the circuit — the output pd reverses every half turn.</li><li>A <b>dynamo</b> generates <b>dc</b>. It uses a <b>split-ring commutator</b>, which swaps the connections every half turn, so the output never reverses (it rises and falls but stays positive).</li></ul>
<p>On a pd–time graph, spinning the coil <b>faster</b> gives peaks that are <b>higher</b> (larger pd) and <b>closer together</b> (higher frequency).</p>` },
    { h: 'Microphones', html: `
<p>A moving-coil <b>microphone</b> uses the generator effect to convert <b>pressure variations in sound waves</b> into <b>variations in current</b>:</p>
<ol><li>Sound waves make a flexible diaphragm vibrate.</li><li>The diaphragm is attached to a coil of wire around a permanent magnet.</li><li>The coil moves back and forth in the magnetic field, so a changing pd is induced.</li><li>This produces an alternating current that matches the sound wave’s frequency and amplitude.</li></ol>
<p>It is a loudspeaker working in reverse.</p>` },
    { h: 'Transformers', html: `
[[d:transformer]]
<p>A transformer has a <b>primary coil</b> and a <b>secondary coil</b> wound on an <b>iron core</b>. Iron is used because it is <b>easily magnetised</b>.</p>
<ol><li>An <b>alternating current</b> in the primary coil produces a <b>changing magnetic field</b> in the iron core.</li><li>This changing field passes through the secondary coil.</li><li>So an alternating pd is <b>induced</b> across the secondary coil.</li></ol>
<p>Transformers only work with ac — a steady dc would give an unchanging field and no induced pd.</p>
<div class="box def"><b class="lbl">Given on the equation sheet</b><p>$@frac{V_p}{V_s} = @frac{n_p}{n_s}$ &nbsp;&nbsp; and (if 100% efficient) &nbsp;&nbsp; $V_s × I_s = V_p × I_p$</p><p class="small">power output (secondary) = power input (primary)</p></div>
<ul><li><b>Step-up</b> transformer: more turns on the secondary, $V_s > V_p$ (and the current is stepped down).</li><li><b>Step-down</b> transformer: fewer turns on the secondary, $V_s < V_p$.</li></ul>
<p>In the <b>National Grid</b>, stepping the pd up by a factor of 16 steps the current down by 16, so the power lost heating the cables ($P = I^2R$) falls by a factor of 256.</p>
<p class="small muted">Knowledge of laminations and eddy currents is not required.</p>` }
  ],
  eqs: [['@frac{V_p}{V_s} = @frac{n_p}{n_s}', 'transformer turns ratio (equation sheet; HT)'], ['V_s I_s = V_p I_p', 'power in = power out, 100% efficient (equation sheet; HT)']],
  worked: [
    { q: 'A transformer has 200 turns on its primary coil and 4000 turns on its secondary. The primary pd is 12 V. Calculate the secondary pd.', s: ['$@frac{V_p}{V_s} = @frac{n_p}{n_s}$', '$@frac{12}{V_s} = @frac{200}{4000}$', '$V_s = 12 × 20 = 240 "V"$ — a step-up transformer'], a: '240 V' },
    { q: 'A 100% efficient transformer steps 230 V down to 11.5 V for a lamp drawing 2.0 A. Calculate the current in the primary coil.', s: ['$V_pI_p = V_sI_s$', '$230 × I_p = 11.5 × 2.0 = 23 "W"$', '$I_p = 0.10 "A"$'], a: '0.10 A' }
  ],
  pitfalls: ['Saying a transformer works with dc.', 'Saying a step-up transformer increases the power.', 'Mixing up slip rings (ac, alternator) and split-ring commutator (dc, dynamo).', 'Saying the induced current helps the motion — it opposes the change.', 'Putting the turns ratio upside down.'],
  cards: [
    ['What is the generator effect?', 'A pd is induced when a conductor moves relative to a magnetic field (or the field changes).', 'htpo'],
    ['Three ways to increase induced pd?', 'Faster movement, stronger field, more turns.', 'htpo'],
    ['Two ways to reverse induced pd?', 'Reverse the motion or reverse the magnetic field.', 'htpo'],
    ['Direction of the field from an induced current?', 'It opposes the change that caused it.', 'htpo'],
    ['Alternator vs dynamo?', 'Alternator: slip rings, ac. Dynamo: split-ring commutator, dc.', 'htpo'],
    ['Effect of spinning a generator faster?', 'Higher peak pd and higher frequency.', 'htpo'],
    ['How does a microphone work?', 'Sound vibrates a diaphragm and coil in a magnetic field, inducing a changing current.', 'htpo'],
    ['Why is the transformer core made of iron?', 'Iron is easily magnetised.', 'htpo'],
    ['Why must transformers use ac?', 'A changing magnetic field is needed to induce a pd in the secondary.', 'htpo'],
    ['Transformer pd–turns equation?', '$V_p/V_s = n_p/n_s$', 'htpo'],
    ['Transformer power equation?', '$V_sI_s = V_pI_p$ (100% efficient)', 'htpo'],
    ['Step-up transformer?', 'Vs > Vp; more turns on the secondary.', 'htpo']
  ],
  quiz: [
    { q: 'A pd is induced in a wire when', o: ['it moves across a magnetic field', 'it is stationary in a steady field', 'it carries a steady current', 'it is heated'], x: 'Generator effect.', po: 1, ht: 1 },
    { q: 'Which change would NOT increase the induced pd in a generator?', o: ['reversing the magnet', 'rotating the coil faster', 'using a stronger magnet', 'adding more turns'], x: 'Reversing changes the direction, not the size.', po: 1, ht: 1 },
    { q: 'An alternator produces ac because it has', o: ['slip rings', 'a split-ring commutator', 'no magnet', 'an iron core only'], x: 'Connections never swap.', po: 1, ht: 1 },
    { q: 'A dynamo produces', o: ['dc', 'ac', 'no current', 'only static charge'], x: 'Split-ring commutator.', po: 1, ht: 1 },
    { q: 'A microphone converts', o: ['pressure variations in sound into variations in current', 'current into sound', 'ac into dc', 'light into current'], x: 'Generator effect.', po: 1, ht: 1 },
    { q: 'A transformer core is made of iron because iron', o: ['is easily magnetised', 'is a good electrical conductor', 'is cheap and heavy', 'does not heat up'], x: 'Spec reason.', po: 1, ht: 1 },
    { q: 'A transformer has 100 primary turns and 500 secondary turns. With 20 V across the primary, the secondary pd is', o: ['100 V', '4.0 V', '20 V', '2500 V'], x: '20 × 500/100.', po: 1, ht: 1 },
    { q: 'In a step-down transformer', o: ['Vs < Vp', 'Vs > Vp', 'Vs = Vp', 'the current is stepped down'], x: 'Fewer secondary turns.', po: 1, ht: 1 },
    { q: 'A 100% efficient transformer has Vp = 240 V, Ip = 0.5 A, Vs = 12 V. The secondary current is', o: ['10 A', '0.025 A', '120 A', '2.0 A'], x: '240 × 0.5 = 12 × Is.', po: 1, ht: 1 },
    { q: 'A transformer will not work with a battery because', o: ['dc produces an unchanging magnetic field', 'batteries have too low a pd', 'dc heats the coils', 'batteries have no current'], x: 'No changing field → no induced pd.', po: 1, ht: 1 },
    { q: 'When a magnet is pushed into a coil, the induced current', o: ['creates a field that opposes the magnet’s motion', 'attracts the magnet in', 'does nothing magnetic', 'flows only when the magnet is still'], x: 'Opposes the change.', po: 1, ht: 1 }
  ],
  exam: [
    { q: 'Explain how a transformer can produce a pd in the secondary coil.', m: 4, ms: ['An alternating current flows in the primary coil.', 'This produces a changing magnetic field in the iron core.', 'The changing field passes through / links the secondary coil.', 'A (changing/alternating) pd is induced in the secondary coil.'], po: 1, ht: 1 },
    { q: 'Explain how a moving-coil microphone works.', m: 4, ms: ['Sound waves make the diaphragm vibrate.', 'The coil attached to the diaphragm moves in the magnetic field of a permanent magnet.', 'A pd/current is induced in the coil (generator effect).', 'The induced current varies in the same way as the pressure variations of the sound.'], po: 1, ht: 1 },
    { q: 'A step-down transformer changes 400 kV to 11 kV. The primary coil has 8000 turns. Calculate the number of turns on the secondary coil.', m: 3, ms: ['Vp/Vs = np/ns', '400/11 = 8000/ns', 'ns = 220 turns'], po: 1, ht: 1 },
    { q: 'Sketch and explain the graph of pd against time for an alternator, and how it changes if the coil turns twice as fast.', m: 4, ms: ['Sinusoidal alternating graph (positive and negative).', 'pd reverses every half turn because of slip rings / coil sides swap direction of motion.', 'Twice as fast: peaks twice as high.', 'Twice as fast: twice as many cycles in the same time (period halves).'], po: 1, ht: 1 }
  ],
  sims: ['induction', 'generator', 'transformer'], gens: ['trans1', 'trans2', 'trans3']
});
