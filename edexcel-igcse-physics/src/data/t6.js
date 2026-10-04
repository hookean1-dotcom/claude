/* ==========================================================
   TOPIC 6 · MAGNETISM AND ELECTROMAGNETISM
   ========================================================== */
TOPICS.push({
  id: '6.1', unit: '6', ref: '6.1–6.7', title: 'Magnets and magnetic fields', short: 'Poles, hard/soft materials, field lines, uniform fields',
  summary: 'Attraction and repulsion between magnets, magnetic materials, magnetically hard and soft materials, magnetic field lines, induced magnetism, the field-pattern practical and producing a uniform field.',
  spec: [
    '6.1 use the following units: ampere (A), volt (V) and watt (W)',
    '6.2 know that magnets repel and attract other magnets and attract magnetic substances',
    '6.3 describe the properties of magnetically hard and soft materials',
    '6.4 understand the term ‘magnetic field line’',
    '6.5 know that magnetism is induced in some materials when they are placed in a magnetic field',
    '6.6 practical: investigate the magnetic field pattern for a permanent bar magnet and between two bar magnets',
    '6.7 describe how to use two permanent magnets to produce a uniform magnetic field pattern'
  ],
  learn: [
    { h: 'Magnets and magnetic materials', html: `
<p>Every magnet has a north (N) and south (S) pole. <b>Like poles repel; unlike poles attract.</b> Magnets also <b>attract magnetic substances</b> — iron, steel, nickel and cobalt — which are not themselves magnets. Only <b>repulsion</b> proves that an object is a magnet.</p>
<p><b>Induced magnetism:</b> a magnetic material placed in a magnetic field becomes a magnet itself (e.g. a chain of paper clips hanging from a magnet). The end nearest the magnet’s N pole becomes an S pole, so it is always attracted.</p>
<div class="tbl"><table><tr><th>Magnetically hard (e.g. steel)</th><th>Magnetically soft (e.g. iron)</th></tr>
<tr><td>hard to magnetise, but <b>keeps</b> its magnetism</td><td>easily magnetised, but <b>loses</b> its magnetism easily when the field is removed</td></tr>
<tr><td>permanent magnets (fridge magnets, compasses, loudspeakers, motors)</td><td>temporary magnets: electromagnet cores, transformer cores, relays</td></tr></table></div>` },
    { h: 'Magnetic field lines', html: `
[[d:barfield]]
<p>A <b>magnetic field</b> is the region around a magnet where a force acts on magnetic materials. A <b>magnetic field line</b> shows the direction of the force on a N pole placed at that point: lines go <b>from N to S</b> outside the magnet. <b>The closer the lines, the stronger the field</b> (strongest at the poles). Field lines never cross.</p>` },
    { h: 'Practical: plotting field patterns (6.6)', html: `
<ul><li><b>Plotting compasses:</b> place the magnet on paper and draw round it. Put a small compass near the N pole and mark where its needle points; move the compass so its tail is at that dot and mark again. Join the dots to make a field line, adding arrows (N → S). Repeat from other starting points.</li><li><b>Iron filings:</b> place a sheet of paper or card over the magnet, sprinkle iron filings thinly, and tap gently — the filings line up along the field lines (but show no direction).</li><li><b>Two magnets:</b> with unlike poles facing (N–S), lines go straight across the gap — they attract. With like poles facing (N–N), the lines push apart and there is a <b>neutral point</b> midway where the fields cancel.</li></ul>` },
    { h: 'A uniform magnetic field (6.7)', html: `
[[d:uniform]]
<p>Place two flat (slab/bar) magnets with <b>opposite poles facing</b> (N facing S), close together and parallel. In the gap between them the field lines are <b>straight, parallel and equally spaced</b> — a <b>uniform</b> field (the same strength and direction everywhere in the gap). The field is non-uniform at the edges. A U-shaped (horseshoe) magnet with flat pole faces does the same.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Describe a test to find out whether a metal bar is a magnet or just a magnetic material.', s: ['Bring each end of the bar near one pole of a known magnet (e.g. the N pole).', 'If one end is repelled, the bar is a magnet (repulsion only happens between two magnets).', 'If both ends are attracted, it is an unmagnetised magnetic material.'], a: 'Test for repulsion.' }
  ],
  pitfalls: ['Saying attraction proves an object is a magnet.', 'Drawing field lines crossing or going S to N outside the magnet.', 'Saying iron is magnetically hard.'],
  cards: [
    ['Like poles…', 'repel.'],
    ['Four magnetic elements?', 'Iron, steel (alloy), nickel, cobalt.'],
    ['What is induced magnetism?', 'A magnetic material becomes a magnet when placed in a magnetic field.'],
    ['Magnetically hard material?', 'Hard to magnetise, keeps magnetism — steel; used for permanent magnets.'],
    ['Magnetically soft material?', 'Easily magnetised and demagnetised — iron; used in electromagnet cores.'],
    ['Direction of field lines?', 'From N to S (direction of force on a N pole).'],
    ['What does closer field lines mean?', 'Stronger field.'],
    ['How do you make a uniform field?', 'Two flat magnets with opposite poles facing, close and parallel.'],
    ['Only sure test for a magnet?', 'Repulsion.']
  ],
  quiz: [
    { q: 'Which material is attracted by a magnet?', o: ['nickel', 'copper', 'aluminium', 'brass'], x: 'Magnetic element.' },
    { q: 'A magnetically soft material is best for', o: ['an electromagnet core', 'a compass needle', 'a fridge magnet', 'a permanent magnet'], x: 'Loses magnetism easily.' },
    { q: 'Magnetic field lines outside a magnet point', o: ['from N to S', 'from S to N', 'towards both poles', 'in circles around the magnet'], x: 'Convention.' },
    { q: 'Where is the field of a bar magnet strongest?', o: ['at the poles', 'at the centre', 'far away', 'it is the same everywhere'], x: 'Lines closest.' },
    { q: 'A uniform field is produced between', o: ['opposite poles of two flat magnets facing each other', 'like poles facing each other', 'two poles at right angles', 'a single bar magnet'], x: 'Parallel lines.' },
    { q: 'Iron filings show', o: ['the pattern of the field but not its direction', 'the direction of the field', 'the strength in tesla', 'the poles only'], x: 'Use compasses for direction.' }
  ],
  exam: [
    { q: 'A student investigates the magnetic field around a bar magnet using a plotting compass.', tag: 'prac', parts: [
      { q: 'Describe how she can use the compass to draw the field lines.', m: 4, ms: ['place magnet on paper and draw round it', 'place compass near one pole and mark the direction the needle points (dot at N end)', 'move the compass so the tail is on the dot; mark again; repeat to the other pole', 'join dots with a smooth line, add arrow N → S; repeat for other lines'] },
      { q: 'She then places a second bar magnet with its N pole 6 cm from the N pole of the first. Sketch the field pattern between them and label the neutral point.', m: 3, ms: ['lines from each N pole curving away from each other', 'no lines crossing', 'neutral point (X) midway between the poles'] }
    ] },
    { q: 'Compare magnetically hard and soft materials, giving an example and a use of each.', m: 4, ms: ['hard: difficult to magnetise/demagnetise, keeps magnetism', 'hard example/use: steel — permanent magnet / compass', 'soft: easily magnetised and loses magnetism easily', 'soft example/use: iron — electromagnet / transformer core'] }
  ],
  sims: ['magfield'], gens: []
});

TOPICS.push({
  id: '6.2', unit: '6', ref: '6.8–6.11', title: 'Electromagnetism', short: 'Fields around wires and coils, electromagnets',
  summary: 'A current produces a magnetic field. Physics only: building electromagnets, field patterns for a straight wire, flat coil and solenoid, and the force on a moving charged particle in a magnetic field.',
  spec: [
    '6.8 know that an electric current in a conductor produces a magnetic field around it',
    '6.9P describe the construction of electromagnets',
    '6.10P draw magnetic field patterns for a straight wire, a flat circular coil and a solenoid when each is carrying a current',
    '6.11P know that there is a force on a charged particle when it moves in a magnetic field as long as its motion is not parallel to the field'
  ],
  learn: [
    { h: 'A current makes a magnetic field', html: `
[[d:wirefield]]
<p>An electric current in a conductor produces a <b>magnetic field</b> around it (Ørsted’s discovery — a compass near a wire deflects when current flows). Reversing the current reverses the field; a larger current gives a stronger field.</p>` },
    { h: 'Field patterns (6.10P)', html: `
<div data-po="1">
[[d:solenoid]]
<ul><li><b>Straight wire:</b> concentric circles around the wire, closer together near the wire. Direction by the <b>right-hand grip rule</b>: thumb along the current, fingers curl in the field direction.</li><li><b>Flat circular coil:</b> circles around each side of the coil, combining to give nearly straight lines through the centre of the coil.</li><li><b>Solenoid</b> (long coil): a field like a bar magnet’s outside the coil; <b>inside, the field is strong and uniform</b> (parallel, equally spaced lines). Use the grip rule with fingers along the current in the turns — the thumb points to the N pole.</li></ul></div>` },
    { h: 'Electromagnets (6.9P)', html: `
<div data-po="1">
<p>An <b>electromagnet</b> is a coil of insulated wire (a solenoid) wrapped around a <b>soft iron core</b>. When current flows, the core is magnetised and greatly strengthens the field; when the current is switched off, the soft iron loses its magnetism, so the magnet turns off.</p>
<p>Strength increases with: <b>more current</b>, <b>more turns</b> of wire, and an <b>iron core</b>. Uses: scrap-yard cranes, electric bells, relays, circuit breakers, MRI scanners, maglev trains.</p></div>` },
    { h: 'Force on a moving charge (6.11P)', html: `
<div data-po="1">
<p>A <b>charged particle moving</b> through a magnetic field experiences a force, <b>as long as its motion is not parallel to the field</b>. The force is at right angles to both the field and the motion (so it changes the particle’s direction, e.g. into a circle). A current is a flow of charges, which is why a current-carrying wire in a field experiences a force (the motor effect). Examples: electron beams in old cathode-ray TVs, charged particles from the Sun deflected by Earth’s field (aurora).</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Suggest three ways to make an electromagnet pick up more paper clips.', s: ['Increase the current (e.g. higher voltage supply).', 'Increase the number of turns of wire on the coil.', 'Use a soft iron core (if it has none) — or a larger core.'], a: 'More current, more turns, iron core.', po: 1 }
  ],
  pitfalls: ['Using a steel core for an electromagnet (it stays magnetised).', 'Drawing field lines around a straight wire as radiating straight lines.', 'Saying a charged particle moving parallel to a field feels a force.'],
  cards: [
    ['What does a current in a wire produce?', 'A magnetic field around it.'],
    ['Field around a straight wire?', 'Concentric circles, closer near the wire.', 'po'],
    ['Field inside a solenoid?', 'Strong and uniform (parallel lines).', 'po'],
    ['Field outside a solenoid?', 'Like a bar magnet’s.', 'po'],
    ['Construction of an electromagnet?', 'Coil of insulated wire around a soft iron core.', 'po'],
    ['Why a soft iron core?', 'Strengthens the field and loses magnetism when current switched off.', 'po'],
    ['Three ways to strengthen an electromagnet?', 'More current, more turns, iron core.', 'po'],
    ['When does a moving charge feel no magnetic force?', 'When moving parallel to the field.', 'po']
  ],
  quiz: [
    { q: 'The magnetic field around a straight current-carrying wire is', o: ['circles around the wire', 'straight lines along the wire', 'straight lines away from the wire', 'zero'], x: 'Concentric circles.', po: 1 },
    { q: 'The core of an electromagnet should be made of', o: ['soft iron', 'steel', 'copper', 'aluminium'], x: 'Magnetically soft.', po: 1 },
    { q: 'The field inside a long solenoid is', o: ['uniform and strong', 'zero', 'circular', 'weakest at the centre'], x: 'Parallel lines.', po: 1 },
    { q: 'Which will NOT increase the strength of an electromagnet?', o: ['using thicker insulation', 'more turns', 'more current', 'an iron core'], x: 'Insulation irrelevant.', po: 1 },
    { q: 'An electron moving parallel to a magnetic field experiences', o: ['no magnetic force', 'a force along its motion', 'a force at right angles', 'a force towards N'], x: 'Must not be parallel.', po: 1 },
    { q: 'Reversing the current in a wire', o: ['reverses its magnetic field', 'removes the field', 'doubles the field', 'has no effect'], x: 'Direction depends on current.' }
  ],
  exam: [
    { q: 'A student makes an electromagnet by winding insulated wire around an iron nail and connecting it to a power supply.', tag: 'prac', po: 1, parts: [
      { q: 'Explain why the nail should be made of iron rather than steel.', m: 2, ms: ['iron is magnetically soft', 'it loses its magnetism when the current is switched off (steel would stay magnetised)'] },
      { q: 'She measures the strength of the electromagnet by counting the paper clips it can hold. Plan how she could investigate the effect of the number of turns. Include variables.', m: 5, ms: ['independent: number of turns (e.g. 10, 20, 30…)', 'dependent: number of paper clips lifted', 'control: current (check with ammeter), same nail, same paper clips', 'repeat each and take a mean', 'expect more turns → more clips / stronger'] }
    ] },
    { q: 'Draw the magnetic field pattern of a solenoid carrying a current, and describe how it differs from the field of a flat circular coil.', po: 1, m: 4, ms: ['inside: parallel, equally spaced lines (uniform)', 'outside: like a bar magnet, lines from one end to the other', 'arrows consistent (N end)', 'flat coil: circles around each side, only nearly straight at the very centre / field much less uniform'] }
  ],
  sims: ['solenoid'], gens: []
});

TOPICS.push({
  id: '6.3', unit: '6', ref: '6.12–6.14', title: 'The motor effect', short: 'Force on a wire, left-hand rule, motors, loudspeakers',
  summary: 'Why a current-carrying wire in a magnetic field experiences a force, Fleming’s left-hand rule, how the force depends on current and field, and simple d.c. motors and loudspeakers.',
  spec: [
    '6.12 understand why a force is exerted on a current-carrying wire in a magnetic field and how this effect is applied in simple d.c. electric motors and loudspeakers',
    '6.13 use the left-hand rule to predict the direction of the resulting force when a wire carries a current perpendicular to a magnetic field',
    '6.14 describe how the force on a current-carrying conductor in a magnetic field changes with the magnitude and direction of the field and current'
  ],
  learn: [
    { h: 'The motor effect', html: `
[[d:fleming]]
<p>A current-carrying wire produces its own magnetic field. When placed in another magnetic field, the <b>two fields interact</b> and a <b>force</b> acts on the wire. The force is greatest when the wire is <b>perpendicular</b> to the field and zero when parallel.</p>
<p><b>Fleming’s left-hand rule:</b> hold the thumb, first finger and second finger of your <b>left</b> hand at right angles. <b>F</b>irst finger = <b>F</b>ield (N → S), se<b>C</b>ond finger = <b>C</b>urrent (+ → −), thu<b>M</b>b = <b>M</b>otion (force).</p>
<ul><li>Bigger <b>current</b> or stronger <b>field</b> → bigger force.</li><li>Reversing <b>either</b> the current or the field reverses the force; reversing both leaves it unchanged.</li></ul>` },
    { h: 'The d.c. motor', html: `
[[d:motor]]
<p>A rectangular coil sits between magnet poles. Current flows in opposite directions along the two long sides, so the forces on them are <b>opposite</b> (one up, one down) — a turning effect (moment) that rotates the coil.</p>
<p>A <b>split-ring commutator</b> reverses the current in the coil every half turn, so the forces keep turning it the same way. <b>Brushes</b> (carbon) make contact with the rotating commutator.</p>
<p>Faster/more powerful motor: more current, stronger magnets, more turns on the coil, a soft iron core in the coil. Reverse the direction by reversing the current or the field.</p>` },
    { h: 'Loudspeakers', html: `
[[d:speaker]]
<p>A coil attached to a paper/plastic <b>cone</b> sits in the field of a permanent magnet. An <b>alternating current</b> from the amplifier flows in the coil, so the force on it keeps reversing — the coil and cone vibrate back and forth, making the air vibrate and producing <b>sound waves</b> of the same frequency as the current. A larger current → larger amplitude → louder.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'A wire runs from left to right between the poles of a magnet, N on top and S below. Current flows left to right. Use the left-hand rule to find the direction of the force.', s: ['Field: N → S, so downwards (first finger down).', 'Current: left → right (second finger to the right).', 'Thumb points out of the page (towards you) — that is the force direction.'], a: 'Out of the page' }
  ],
  pitfalls: ['Using the right hand for the motor effect.', 'Pointing the current finger from − to +.', 'Saying the commutator reverses the magnetic field.'],
  cards: [
    ['What is the motor effect?', 'A force on a current-carrying wire in a magnetic field, due to interacting fields.'],
    ['Fleming’s left-hand rule?', 'First finger = Field, seCond = Current, thuMb = Motion.'],
    ['When is the force zero?', 'When the wire is parallel to the field.'],
    ['How to reverse the force?', 'Reverse the current or the field (not both).'],
    ['What does a split-ring commutator do?', 'Reverses the current in the coil every half turn so it keeps turning one way.'],
    ['How do you make a motor turn faster?', 'More current, stronger field, more turns, iron core.'],
    ['How does a loudspeaker work?', 'a.c. in coil in a magnetic field → alternating force → cone vibrates → sound.']
  ],
  quiz: [
    { q: 'In Fleming’s left-hand rule the thumb represents', o: ['force (motion)', 'current', 'field', 'voltage'], x: 'thuMb = Motion.' },
    { q: 'Reversing both the current and the field makes the force', o: ['the same direction', 'the opposite direction', 'zero', 'double'], x: 'Two reversals cancel.' },
    { q: 'The force on a wire parallel to a magnetic field is', o: ['zero', 'maximum', 'upwards', 'twice as large'], x: 'Must be perpendicular.' },
    { q: 'In a d.c. motor, the commutator', o: ['reverses the current every half turn', 'reverses the field', 'produces a.c.', 'stops the coil'], x: 'Keeps rotation.' },
    { q: 'A loudspeaker cone vibrates because', o: ['alternating current in the coil causes an alternating force', 'the magnet vibrates', 'd.c. flows in the coil', 'static charge builds up'], x: 'Motor effect with a.c.' },
    { q: 'Which would increase the force on a wire in a field?', o: ['a larger current', 'a thinner wire', 'turning the wire parallel to the field', 'weaker magnets'], x: 'F ∝ I.' }
  ],
  exam: [
    { q: 'A simple d.c. motor has a rectangular coil between two magnets.', tag: 'ext', parts: [
      { q: 'Explain why the coil rotates when there is a current in it.', m: 3, ms: ['current in the coil produces a magnetic field that interacts with the magnet’s field', 'forces act on the sides of the coil perpendicular to the field', 'currents in the two sides are opposite so forces are opposite (up and down) → moment/turning effect'] },
      { q: 'Explain the purpose of the split-ring commutator.', m: 2, ms: ['reverses the direction of the current in the coil every half turn', 'so the force on each side keeps the coil turning in the same direction'] },
      { q: 'State two changes that would make the motor turn faster.', m: 2, ms: ['increase the current / voltage', 'stronger magnets / more turns on the coil / soft iron core'] }
    ] },
    { q: 'Describe how a loudspeaker produces sound from an electrical signal.', tag: 'ext', m: 5, ms: ['alternating current (signal) flows in the coil', 'coil is in the magnetic field of a permanent magnet', 'force on the coil (motor effect) which reverses as the current reverses', 'coil and cone vibrate back and forth', 'cone makes air vibrate → sound wave with same frequency as the current'] }
  ],
  sims: ['motor'], gens: []
});

TOPICS.push({
  id: '6.4', unit: '6', ref: '6.15–6.16', title: 'Electromagnetic induction and generators', short: 'Induced voltage, a.c. generators',
  summary: 'A voltage is induced when a conductor moves through a magnetic field or when the field through a coil changes; generating electricity by rotating a magnet in a coil or a coil in a field, and the factors affecting the induced voltage.',
  spec: [
    '6.15 know that a voltage is induced in a conductor or a coil when it moves through a magnetic field or when a magnetic field changes through it and describe the factors that affect the size of the induced voltage',
    '6.16 describe the generation of electricity by the rotation of a magnet within a coil of wire and of a coil of wire within a magnetic field, and describe the factors that affect the size of the induced voltage'
  ],
  learn: [
    { h: 'Electromagnetic induction', html: `
[[d:induction]]
<p>A <b>voltage is induced</b> across a conductor when it <b>moves through a magnetic field</b> (cutting field lines), or when the <b>magnetic field through a coil changes</b>. If the conductor is part of a complete circuit, the induced voltage drives a <b>current</b>.</p>
<ul><li>Moving a magnet into a coil connected to a sensitive meter makes the needle flick; pulling it out makes it flick the <b>other way</b>. No movement → no induced voltage, even with the magnet inside the coil.</li></ul>
<p><b>The induced voltage is larger when:</b> the movement is <b>faster</b> (field changes more quickly), the <b>magnetic field is stronger</b>, or the coil has <b>more turns</b> (and a larger area). Reversing the direction of motion or the field reverses the voltage.</p>` },
    { h: 'Generators', html: `
[[d:generator]]
<p><b>Rotating a magnet inside a coil</b> (like a bicycle dynamo, or a power-station generator) or <b>rotating a coil in a magnetic field</b> makes the field through the coil change continuously. The induced voltage reverses every half turn, so the output is <b>alternating (a.c.)</b>. In a coil-rotating generator, <b>slip rings</b> and brushes connect the coil to the external circuit.</p>
<p>The peak voltage (and frequency) increases with <b>faster rotation</b>; the peak voltage also increases with a <b>stronger magnet</b>, <b>more turns</b> and a <b>soft iron core</b> in the coil.</p>
<p>The output on an oscilloscope is a sine wave: faster rotation gives taller <b>and</b> closer-together peaks.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'A magnet is pushed into a coil connected to a centre-zero meter and the needle moves 3 divisions to the right. Predict what happens when (a) the magnet is held still inside, (b) it is pulled out quickly, (c) it is pushed in twice as fast.', s: ['(a) 0 — no relative movement, no changing field.', '(b) needle moves to the left — reversed direction of motion.', '(c) about 6 divisions to the right — faster change of field, larger induced voltage.'], a: '0; left; larger to the right' }
  ],
  pitfalls: ['Saying a stationary magnet in a coil induces a voltage.', 'Confusing the motor effect (current → force) with induction (motion → voltage).', 'Saying a generator makes d.c. — a simple rotating generator makes a.c.'],
  cards: [
    ['When is a voltage induced?', 'When a conductor moves through a magnetic field or the field through a coil changes.'],
    ['Factors increasing induced voltage?', 'Faster movement, stronger field, more turns (larger area).'],
    ['How to reverse the induced voltage?', 'Reverse the motion or the field.'],
    ['Output of a simple generator?', 'Alternating voltage (a.c.).'],
    ['Effect of rotating a generator faster?', 'Higher peak voltage and higher frequency.'],
    ['What do slip rings do?', 'Connect the rotating coil to the circuit without twisting the wires.'],
    ['Motor effect vs induction?', 'Motor: current + field → force/motion. Induction: motion + field → voltage.']
  ],
  quiz: [
    { q: 'A voltage is induced in a coil when a magnet is', o: ['moved in or out of it', 'held still inside it', 'placed next to it without moving', 'painted'], x: 'Changing field.' },
    { q: 'Which increases the induced voltage?', o: ['more turns on the coil', 'a weaker magnet', 'moving more slowly', 'fewer turns'], x: 'Factors.' },
    { q: 'A bicycle dynamo produces', o: ['a.c.', 'd.c.', 'static charge', 'no current'], x: 'Rotating magnet.' },
    { q: 'Rotating a generator faster', o: ['increases the voltage and the frequency', 'increases only the frequency', 'decreases the voltage', 'makes d.c.'], x: 'Both increase.' },
    { q: 'Pulling a magnet out of a coil instead of pushing it in', o: ['reverses the induced voltage', 'doubles it', 'stops it', 'has no effect'], x: 'Opposite direction.' }
  ],
  exam: [
    { q: 'A student investigates electromagnetic induction by dropping a bar magnet through a coil connected to a data logger.', tag: 'prac', parts: [
      { q: 'Explain why a voltage is induced in the coil.', m: 2, ms: ['the magnetic field through the coil changes (magnet moves relative to coil)', 'so a voltage is induced across the coil'] },
      { q: 'The trace shows a positive pulse followed by a larger negative pulse. Explain why the second pulse is in the opposite direction and larger.', m: 3, ms: ['magnet leaving the coil — field changing in the opposite sense → opposite voltage', 'magnet is moving faster as it leaves (accelerating under gravity)', 'faster change of field → larger induced voltage'] },
      { q: 'Suggest two ways to increase the size of the induced voltage.', m: 2, ms: ['more turns on the coil', 'stronger magnet / drop from greater height (faster)'] }
    ] },
    { q: 'Describe how an a.c. generator produces a voltage and how the output would change if the coil were rotated at twice the speed.', tag: 'ext', m: 5, ms: ['coil rotates in a magnetic field (or magnet rotates in coil)', 'field through coil changes / coil cuts field lines → voltage induced', 'direction reverses each half turn → a.c.', 'slip rings and brushes connect to external circuit', 'twice the speed: peak voltage larger and frequency doubled'] }
  ],
  sims: ['induction', 'generator'], gens: []
});

TOPICS.push({
  id: '6.5', unit: '6', ref: '6.17–6.20', po: true, title: 'Transformers and the National Grid', short: 'Vp/Vs = Np/Ns, VpIp = VsIs, transmission',
  summary: 'The structure of a transformer, how it changes the size of an alternating voltage, step-up and step-down transformers in the National Grid, the turns-ratio equation and input power = output power.',
  spec: [
    '6.17P describe the structure of a transformer and understand that a transformer changes the size of an alternating voltage by having different numbers of turns on the input and output sides',
    '6.18P explain the use of step-up and step-down transformers in the large-scale generation and transmission of electrical energy',
    '6.19P know and use the relationship between input (primary) and output (secondary) voltages and the turns ratio for a transformer: Vp/Vs = np/ns',
    '6.20P know and use the relationship: input power = output power, VpIp = VsIs for 100% efficiency'
  ],
  learn: [
    { h: 'How a transformer works', html: `
[[d:transformer]]
<p>A transformer has two coils of insulated wire — the <b>primary</b> (input) and <b>secondary</b> (output) — wound on a laminated <b>soft iron core</b>.</p>
<ol><li>An <b>alternating</b> current in the primary coil produces a <b>changing (alternating) magnetic field</b> in the core.</li><li>The soft iron core carries this changing field through the secondary coil.</li><li>The changing field induces an alternating voltage in the secondary coil.</li></ol>
<p>Transformers only work with <b>a.c.</b> — a steady d.c. gives a constant field, so no voltage is induced. More turns on the secondary than the primary → <b>step-up</b> (voltage increases); fewer → <b>step-down</b>.</p>` },
    { h: 'Equations', html: `
<div class="box def"><b class="lbl">Recall</b><p>$@frac{"input (primary) voltage"}{"output (secondary) voltage"} = @frac{"primary turns"}{"secondary turns"}$ &nbsp; $@frac{V_p}{V_s} = @frac{n_p}{n_s}$</p></div>
<div class="box def"><b class="lbl">Recall</b><p>$"input power" = "output power"$ &nbsp; $V_pI_p = V_sI_s$ &nbsp; (100% efficiency)</p></div>
<p>So a step-up transformer that increases the voltage <b>decreases the current</b> by the same factor.</p>` },
    { h: 'The National Grid', html: `
[[d:grid]]
<p>Power stations generate electricity at about 25 kV. <b>Step-up transformers</b> increase the voltage to very high values (e.g. 132–400 kV) for transmission along the grid. For the same power (P = IV), a high voltage means a <b>low current</b>. A low current causes much <b>less heating of the cables</b>, so far less energy is wasted and thinner (cheaper) cables can be used. <b>Step-down transformers</b> near towns reduce the voltage to safer levels (e.g. 230 V) for homes.</p>` }
  ],
  eqs: [['@frac{V_p}{V_s} = @frac{n_p}{n_s}', 'turns ratio (recall)'], ['V_pI_p = V_sI_s', 'input power = output power (recall)']],
  worked: [
    { q: 'A transformer steps 230 V down to 11.5 V. The primary has 2000 turns. How many turns are on the secondary?', s: ['$n_s = n_p × @frac{V_s}{V_p} = 2000 × @frac{11.5}{230}$', '$n_s = 100$ turns'], a: '100 turns' },
    { q: 'A 100% efficient transformer has Vp = 230 V, Ip = 0.50 A and Vs = 23 V. Find Is.', s: ['Input power = 230 × 0.50 = 115 W', '$I_s = @frac{115}{23} = 5.0 "A"$'], a: '5.0 A' },
    { q: 'A power station transmits 20 MW. Compare the current at 25 kV with the current at 400 kV.', s: ['At 25 kV: I = P/V = 20 × 10⁶ ÷ 25 000 = 800 A', 'At 400 kV: I = 20 × 10⁶ ÷ 400 000 = 50 A', 'The current is 16 times smaller at 400 kV, so much less energy is wasted heating the cables.'], a: '800 A vs 50 A' }
  ],
  pitfalls: ['Saying transformers work on d.c.', 'Saying the grid uses high voltage to “make electricity travel faster”.', 'Getting the turns ratio upside down — keep primary with primary.', 'Forgetting that stepping up voltage steps down current.'],
  cards: [
    ['Structure of a transformer?', 'Primary and secondary coils on a soft iron core.', 'po'],
    ['Why must the input be a.c.?', 'Only a changing field induces a voltage in the secondary.', 'po'],
    ['Turns-ratio equation?', '$V_p/V_s = n_p/n_s$', 'po'],
    ['Power equation for an ideal transformer?', '$V_pI_p = V_sI_s$', 'po'],
    ['Step-up transformer?', 'More secondary turns; increases voltage, decreases current.', 'po'],
    ['Why transmit at high voltage?', 'Lower current → less heating of cables → less energy wasted.', 'po'],
    ['Why step down near homes?', 'Lower voltage is safer to use.', 'po']
  ],
  quiz: [
    { q: 'A transformer with 100 primary and 500 secondary turns has 12 V input. Output?', o: ['60 V', '2.4 V', '12 V', '600 V'], x: '×5.', po: 1 },
    { q: 'Transformers do not work with d.c. because', o: ['the magnetic field does not change', 'd.c. is too small', 'the core melts', 'd.c. flows too fast'], x: 'Need changing field.', po: 1 },
    { q: 'Electricity is transmitted at high voltage to', o: ['reduce the current and the energy wasted in cables', 'make it travel faster', 'increase the current', 'make it safer in homes'], x: 'Less heating.', po: 1 },
    { q: 'An ideal step-down transformer halves the voltage. The current', o: ['doubles', 'halves', 'stays the same', 'quadruples'], x: 'VI constant.', po: 1 },
    { q: 'The core of a transformer is made of', o: ['soft iron', 'steel', 'copper', 'plastic'], x: 'Easily magnetised.', po: 1 }
  ],
  exam: [
    { q: 'A phone charger contains a transformer that changes 230 V a.c. to 5.0 V a.c. The primary coil has 4600 turns.', tag: 'calc', po: 1, parts: [
      { q: 'State whether this is a step-up or step-down transformer.', m: 1, ms: ['step-down'] },
      { q: 'Calculate the number of turns on the secondary coil.', m: 3, ms: ['Vp/Vs = np/ns', 'ns = 4600 × 5.0 ÷ 230', '= 100 turns'] },
      { q: 'The output current is 2.0 A. Calculate the input current, assuming 100% efficiency.', m: 3, ms: ['output power = 5.0 × 2.0 = 10 W', 'Ip = 10 ÷ 230', '= 0.043 A'] },
      { q: 'Explain how the transformer produces a voltage in the secondary coil.', m: 3, ms: ['alternating current in the primary produces a changing magnetic field', 'the iron core carries the changing field to the secondary', 'changing field through secondary induces an (alternating) voltage'] }
    ] },
    { q: 'Explain why step-up and step-down transformers are used in the transmission of electrical energy across a country.', tag: 'ext', po: 1, m: 6, ms: ['step-up transformers at the power station increase the voltage', 'for the same power (P = IV) the current is reduced', 'smaller current → less heating in the cables', 'so less energy is wasted / more efficient transmission', 'thinner cables can be used (cheaper)', 'step-down transformers reduce the voltage to a safe level (230 V) for consumers'] }
  ],
  sims: ['transformer'], gens: ['trans1', 'trans2', 'trans3']
});
