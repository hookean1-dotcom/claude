/* ==========================================================
   YEAR 7 · UNIT 7 · MAGNETISM (additional topic, if time allows)
   ========================================================== */
TOPICS.push({
  id: '7.1', unit: '7', title: 'Magnets and magnetic fields', short: 'Poles, materials and field lines',
  summary: 'Magnets have a north and a south pole. Like poles repel, unlike poles attract. Only a few materials are magnetic. The region around a magnet where it has an effect is its magnetic field, which we map with plotting compasses or iron filings.',
  spec: [
    'I can describe the forces between magnetic poles: like poles repel, unlike poles attract',
    'I can name the magnetic materials: iron, steel, nickel and cobalt',
    'I can investigate the magnetic field around a bar magnet using plotting compasses or iron filings',
    'I can draw the field around a bar magnet: lines from N to S, never crossing, closest at the poles, symmetric on both sides',
    '★ I can explain how a compass works using the Earth’s magnetic field'
  ],
  learn: [
    { h: 'Poles and forces', html: `
<p>Every magnet has two ends called <b>poles</b>: a <b>north-seeking (N)</b> pole and a <b>south-seeking (S)</b> pole. The magnetic force is strongest at the poles.</p>
[[d:poles]]
<ul><li><b>Like poles repel</b> (N–N or S–S push apart).</li><li><b>Unlike poles attract</b> (N–S pull together).</li></ul>
<p>Magnetic force is a <b>non-contact</b> force — it acts across a gap, and even through paper, wood or plastic.</p>
<p>Only <b>repulsion</b> proves that something is a magnet: a magnet attracts both poles of an unmagnetised iron bar, but only a magnet can be repelled.</p>` },
    { h: 'Magnetic materials', html: `
<p>Only four elements are <b>magnetic</b>: <b>iron, nickel and cobalt</b>, plus <b>steel</b> (mostly iron). Magnets attract these materials.</p>
<p>Most metals are <b>not</b> magnetic — aluminium, copper, gold, silver and brass are not attracted. That is how recycling plants separate steel cans from aluminium cans.</p>` },
    { h: 'Magnetic field patterns', html: `
[[d:k_barfield]]
<p>The <b>magnetic field</b> is the region around a magnet where a magnetic material or another magnet feels a force. We draw it with <b>field lines</b>:</p>
<ul><li>Lines go <b>from N to S</b> outside the magnet (the arrows show the way a compass needle’s N end points).</li><li>Lines <b>never cross</b> or touch.</li><li>Lines are <b>closest together at the poles</b>, where the field is strongest.</li><li>The pattern is <b>symmetrical</b> — the same shape on both sides and at both ends.</li></ul>
<p><b>Plotting compasses:</b> place a small compass near one pole, mark where its needle points with a dot, move the compass so its tail is on the dot, and repeat. Join the dots to make a field line. <b>Iron filings</b> sprinkled on paper over the magnet show the whole pattern at once.</p>` },
    { h: '★ The Earth’s magnetic field', html: `
<p>The Earth behaves like a giant bar magnet (made by currents in its molten iron core). A compass is a small, freely turning magnet: its north-seeking pole points towards the Earth’s <b>geographic North</b>. Since unlike poles attract, there must be a magnetic <b>south</b> pole near the geographic North Pole!</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Two bar magnets are placed end to end with their north poles facing. What happens? What if one is turned round?', s: ['N facing N: like poles → they repel (push apart).', 'Turn one round: N faces S → unlike poles → they attract.'], a: 'repel; then attract' },
    { q: 'A student has three metal bars that look the same: one is a magnet, one is iron, one is aluminium. How can she find out which is which using only the bars?', s: ['The aluminium bar is not attracted to either of the others — it is not magnetic.', 'The other two attract each other. Hang one (call it X) so it can turn, and bring each end of the other (Y) near each end of X.', 'Only two magnets can repel. The magnet and the iron bar never repel — so hold the middle of X against an end of Y: if Y is the magnet, the middle of X (the iron) is still attracted; if Y is the iron, the middle of the magnet X has almost no pull.', 'Magnetism is strongest at the poles and weakest in the middle, so the bar whose end attracts the other’s middle is the magnet.'], a: 'aluminium: never attracted; the magnet’s END attracts the MIDDLE of the iron bar, but the iron’s end hardly attracts the magnet’s middle' }
  ],
  pitfalls: ['Saying all metals are magnetic.', 'Drawing field lines that cross, or that go from S to N.', 'Drawing field lines only on one side of the magnet — the field is symmetrical.', 'Saying attraction proves something is a magnet — only repulsion does.'],
  cards: [
    ['Like poles…', 'repel.'],
    ['Unlike poles…', 'attract.'],
    ['The four magnetic materials?', 'Iron, steel, nickel and cobalt.'],
    ['Is aluminium magnetic?', 'No.'],
    ['What is a magnetic field?', 'The region around a magnet where magnetic materials feel a force.'],
    ['Which way do field lines point?', 'From north to south (outside the magnet).'],
    ['Where is the field strongest?', 'At the poles, where the lines are closest together.'],
    ['Two ways to see a magnetic field?', 'Plotting compasses; iron filings.'],
    ['What is the only proof that an object is a magnet?', 'Repulsion.'],
    ['★ Why does a compass point north?', 'It is a small magnet lined up with the Earth’s magnetic field.']
  ],
  quiz: [
    { q: 'Two south poles are brought together. They', o: ['repel', 'attract', 'do nothing', 'stick together'], x: 'Like poles repel.' },
    { q: 'Which is a magnetic material?', o: ['nickel', 'copper', 'aluminium', 'gold'], x: 'Iron, steel, nickel, cobalt.' },
    { q: 'Magnetic field lines go from', o: ['north to south', 'south to north', 'the middle outwards', 'nowhere in particular'], x: 'N → S outside the magnet.' },
    { q: 'The magnetic field is strongest', o: ['at the poles', 'in the middle of the magnet', 'far from the magnet', 'everywhere the same'], x: 'Lines closest together.' },
    { q: 'Field lines on a diagram should never', o: ['cross', 'curve', 'have arrows', 'touch the magnet'], x: 'A compass can only point one way at each place.' },
    { q: 'Which test proves that a bar is a magnet?', o: ['it repels one end of another magnet', 'it attracts a paper clip', 'it is attracted to a magnet', 'it is shiny'], x: 'Only magnets repel.' },
    { q: 'Iron filings sprinkled around a magnet show', o: ['the shape of the magnetic field', 'the mass of the magnet', 'the temperature', 'the current'], x: 'They line up with the field.' },
    { q: 'The field pattern around a single bar magnet is', o: ['the same shape on both sides', 'only on the north side', 'only on the south side', 'a straight line'], x: 'Symmetrical.' },
    { q: 'A compass needle’s north pole points to geographic North because there is', o: ['a magnetic south pole near geographic North', 'a magnetic north pole there', 'iron in the Arctic ice', 'no magnetic field'], x: 'Unlike poles attract.', ch: 1 }
  ],
  exam: [
    { q: 'A student investigates the magnetic field around a bar magnet using a plotting compass.', tag: 'prac', parts: [
      { q: 'Describe how she can use the plotting compass to draw one field line.', m: 3, ms: ['place the compass near the N pole and mark (dot) where the needle points', 'move the compass so its tail is at the dot, and mark again', 'repeat until reaching the S pole and join the dots (add an arrow N → S)'] },
      { q: 'Give three features of the field pattern around a bar magnet.', m: 3, ms: ['lines go from N to S', 'lines never cross', 'closest together at the poles / field strongest at the poles', 'symmetrical on both sides'] },
      { q: 'Name one other way to show the field pattern.', m: 1, ms: ['iron filings (sprinkled on paper over the magnet)'] }
    ] },
    { q: 'A recycling plant needs to separate steel cans from aluminium cans.', tag: '', parts: [
      { q: 'Explain how a magnet can be used to do this.', m: 2, ms: ['steel is magnetic / is attracted to the magnet', 'aluminium is not magnetic / not attracted, so the cans are separated'] }
    ] }
  ],
  sims: ['magfield'], gens: []
});

TOPICS.push({
  id: '7.2', unit: '7', title: 'Making magnets', short: 'Domains, stroking and induced magnetism',
  summary: 'Magnetic materials contain tiny regions called domains, each like a mini-magnet. In an unmagnetised bar they point every which way; stroking the bar with a magnet, or putting it in a coil with a current, lines them up and makes a magnet.',
  spec: [
    'I can describe the domain model of magnetism',
    'I can describe how to make a magnet by stroking and by using an electric current in a coil',
    'I can describe how to demagnetise a magnet (heating, hammering, alternating current)',
    'I can explain the difference between permanent and induced (temporary) magnets, and between steel and iron',
    '★ I can explain why a magnet cut in half makes two magnets'
  ],
  learn: [
    { h: 'Domains: mini-magnets inside', html: `
[[d:domains]]
<p>Iron, steel, nickel and cobalt are made of tiny regions called <b>domains</b>. Each domain acts like a very small magnet.</p>
<ul><li><b>Unmagnetised</b>: the domains point in <b>random directions</b>, so their effects cancel out.</li><li><b>Magnetised</b>: the domains are <b>lined up</b> in the same direction, so their effects add together to make a magnet.</li></ul>` },
    { h: 'How to make a magnet', html: `
<p><b>1. Stroking.</b> Stroke a steel needle or nail <b>many times</b> from one end to the other with <b>one pole</b> of a magnet, always in the <b>same direction</b>, lifting the magnet well away between strokes. The domains gradually line up.</p>
<p><b>2. Using electricity.</b> Put the steel bar inside a <b>coil of wire</b> (a solenoid) and pass a <b>direct current</b> (from a battery) through it for a moment. The magnetic field of the coil lines up the domains. This is how most magnets are made in factories.</p>
<p><b>Demagnetising:</b> <b>heat</b> the magnet strongly, <b>hammer</b> or drop it repeatedly, or put it in a coil carrying <b>alternating current</b> and slowly pull it out. All of these jumble the domains up again.</p>` },
    { h: 'Permanent and induced magnets', html: `
<ul><li><b>Steel</b> is a <b>hard</b> magnetic material: once magnetised it <b>keeps</b> its magnetism → good for <b>permanent magnets</b>.</li><li><b>Iron</b> is a <b>soft</b> magnetic material: it magnetises easily but <b>loses</b> its magnetism as soon as the magnet is taken away → good for <b>electromagnet cores</b>.</li></ul>
<p>A paper clip hanging from a magnet becomes an <b>induced magnet</b> — it can pick up another clip. Take the magnet away and the chain falls apart (for an iron clip).</p>
<div class="box why"><b class="lbl">★ Cutting a magnet</b><p>Cut a bar magnet in half and you get <b>two smaller magnets</b>, each with its own N and S pole — never a lone N or lone S. That fits the domain model: every little piece is still made of lined-up domains.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Use the domain model to explain how stroking a steel needle with a magnet magnetises it.', s: ['At first the domains in the needle point in random directions, cancelling out.', 'Each stroke of the magnet’s pole pulls more of the domains round to point the same way.', 'When most domains are lined up, their fields add together: the needle is a magnet.'], a: 'domains line up' },
    { q: 'Why is soft iron used for the core of an electromagnet in a scrapyard crane, but steel used for a fridge magnet?', s: ['The crane must drop the scrap when the current is switched off — soft iron loses its magnetism straight away.', 'A fridge magnet must stay magnetic for years — steel (a hard magnetic material) keeps its magnetism.'], a: 'iron is temporary; steel is permanent' }
  ],
  pitfalls: ['Stroking backwards and forwards — this jumbles the domains.', 'Saying iron makes good permanent magnets — steel does.', 'Saying a cut magnet has one N piece and one S piece.', 'Using alternating current to try to make a magnet — it demagnetises.'],
  cards: [
    ['What is a domain?', 'A tiny region in a magnetic material that acts like a mini-magnet.'],
    ['Domains in an unmagnetised bar?', 'Point in random directions.'],
    ['Domains in a magnet?', 'Lined up in the same direction.'],
    ['How do you make a magnet by stroking?', 'Stroke many times in one direction with one pole of a magnet.'],
    ['How do you make a magnet with electricity?', 'Put the bar in a coil and pass a direct current through it.'],
    ['Three ways to demagnetise a magnet?', 'Heat it, hammer/drop it, or use alternating current in a coil.'],
    ['Why is steel used for permanent magnets?', 'It keeps its magnetism (hard magnetic material).'],
    ['Why is iron used for electromagnet cores?', 'It loses its magnetism easily (soft magnetic material).'],
    ['What is an induced magnet?', 'A magnetic material that becomes a magnet while it is in a magnetic field.'],
    ['★ What happens if you cut a magnet in half?', 'You get two smaller magnets, each with N and S poles.']
  ],
  quiz: [
    { q: 'In an unmagnetised iron bar, the domains', o: ['point in random directions', 'are all lined up', 'do not exist', 'point north'], x: 'Their effects cancel.' },
    { q: 'To make a magnet by stroking, you should stroke', o: ['in one direction with one pole', 'backwards and forwards', 'with both poles at once', 'only once'], x: 'Lines the domains up.' },
    { q: 'Which would demagnetise a magnet?', o: ['heating it strongly', 'keeping it with a keeper', 'stroking it', 'putting it in a coil with direct current'], x: 'Heat jumbles the domains.' },
    { q: 'Which material is best for a permanent magnet?', o: ['steel', 'soft iron', 'copper', 'aluminium'], x: 'Steel keeps its magnetism.' },
    { q: 'A paper clip hanging from a magnet can pick up another clip. The first clip is', o: ['an induced magnet', 'a permanent magnet', 'not magnetic', 'charged'], x: 'Temporarily magnetised.' },
    { q: 'Factories magnetise steel by', o: ['passing direct current through a coil around it', 'heating it', 'hammering it', 'freezing it'], x: 'The coil’s field lines up the domains.' },
    { q: 'Soft iron is used in electromagnets because it', o: ['loses its magnetism when the current stops', 'keeps its magnetism for ever', 'is not magnetic', 'is very light'], x: 'Temporary magnet.' },
    { q: 'A bar magnet is cut in half. You get', o: ['two magnets, each with N and S', 'a north piece and a south piece', 'two non-magnetic pieces', 'one magnet and one iron bar'], x: 'Every piece has lined-up domains.', ch: 1 }
  ],
  exam: [
    { q: 'A student makes a magnet from a steel nail.', tag: 'prac', parts: [
      { q: 'Describe how she can magnetise the nail by stroking.', m: 2, ms: ['stroke with one pole of a magnet', 'many times in the same direction (lifting it away between strokes)'] },
      { q: 'Use the idea of domains to explain what happens inside the nail.', m: 2, ms: ['domains start pointing in random directions', 'stroking lines the domains up in the same direction'] },
      { q: 'Suggest how she could test how strong her magnet is.', m: 1, ms: ['count how many paper clips / pins it can pick up'] },
      { q: 'Give one way the magnet could be demagnetised.', m: 1, ms: ['heat it / hammer or drop it / put it in a coil with ac and withdraw it'] }
    ] },
    { q: 'Explain why steel is used to make permanent magnets but soft iron is used to make the core of an electromagnet.', tag: 'ext', m: 3, ms: ['steel keeps its magnetism (hard magnetic material)', 'iron magnetises easily but loses its magnetism quickly (soft)', 'an electromagnet must turn off when the current stops'] }
  ],
  sims: ['domains'], gens: []
});

TOPICS.push({
  id: '7.3', unit: '7', title: 'Electromagnets', short: 'Practical: current, turns and cores',
  summary: 'A current in a wire makes a magnetic field. Coil the wire into a solenoid and add an iron core to make a strong electromagnet — a magnet you can switch on and off. More current, more turns and an iron core all make it stronger.',
  spec: [
    'I can explain that an electric current produces a magnetic field',
    'I can describe how to make an electromagnet from a coil of wire, a cell and an iron core',
    'I can investigate how the number of turns and the current affect the strength of an electromagnet',
    'I can describe the field of a solenoid (like a bar magnet outside, strong and uniform inside, lines never crossing)',
    '★ I can use the right-hand grip rule to find the poles of an electromagnet'
  ],
  learn: [
    { h: 'Current makes a magnetic field', html: `
<p>In 1820 Hans Christian Ørsted noticed that a compass needle moved when a current flowed in a nearby wire. <b>Every electric current makes a magnetic field</b> — circles around the wire.</p>
<p>Wind the wire into a <b>coil</b> (a <b>solenoid</b>) and the fields of all the loops add together, making a field just like a bar magnet’s.</p>
[[d:k_solenoid]]` },
    { h: 'Making an electromagnet', html: `
<p>Wrap insulated wire many times around an <b>iron nail</b> (the <b>core</b>), connect the ends to a cell or low-voltage power supply, and it will pick up paper clips. Switch off and the clips drop — an <b>electromagnet</b> is a magnet you can <b>turn on and off</b>.</p>
<p>Ways to make it <b>stronger</b>:</p><ul><li>more <b>turns</b> of wire on the coil</li><li>a bigger <b>current</b> (a bigger potential difference)</li><li>an <b>iron core</b> — an iron core makes it hundreds of times stronger than an air core</li></ul>
<p><b>Reverse the current</b> and the poles swap round.</p>` },
    { h: 'Investigating electromagnets', html: `
<div class="tbl"><table><tr><th>Variable</th><th>Example</th></tr><tr><td><b>Independent</b></td><td>number of turns (10, 20, 30, 40, 50)</td></tr><tr><td><b>Dependent</b></td><td>number of paper clips picked up (strength)</td></tr><tr><td><b>Control</b></td><td>current (same cell / power-supply setting), same nail, same size of paper clips</td></tr></table></div>
<p>You should find that the more turns, the more clips are picked up. Plot a <b>line graph</b> of clips against turns.</p>
<div class="box warn"><b class="lbl">Safety</b><p>The wire can get <b>hot</b> — switch off between readings and use a low voltage. Do not connect a bare wire straight across a cell (a short circuit).</p></div>
<div class="box why"><b class="lbl">★ Right-hand grip rule</b><p>Curl the fingers of your right hand around the coil in the direction of the (conventional) current. Your thumb points to the <b>north pole</b>.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'An electromagnet with 20 turns picks up 6 paper clips. Suggest two changes that would let it pick up more.', s: ['Increase the number of turns (e.g. to 40).', 'Increase the current (use a bigger p.d.).', '(Or make sure it has an iron core.)'], a: 'more turns; more current' },
    { q: 'Why is paper clips picked up a rough measure of strength? Suggest a better one.', s: ['Clips come in whole numbers and may hang in chains, so the result is not precise.', 'Better: measure the force needed to pull an iron block off it with a newton meter, or use a magnetic field sensor.'], a: 'whole numbers only; use a newton meter or field sensor' }
  ],
  pitfalls: ['Changing the number of turns and the current at the same time — not a fair test.', 'Forgetting that an electromagnet needs a current: no current, no magnetism.', 'Using a steel core — it would stay magnetised.', 'Letting the wire overheat.'],
  cards: [
    ['What does an electric current produce?', 'A magnetic field.'],
    ['What is a solenoid?', 'A coil of wire.'],
    ['What is an electromagnet?', 'A coil of wire (usually with an iron core) that is magnetic when a current flows.'],
    ['Three ways to make an electromagnet stronger?', 'More turns, more current, an iron core.'],
    ['What happens if you reverse the current?', 'The poles swap.'],
    ['Field of a solenoid outside?', 'Like a bar magnet’s.'],
    ['Field inside a solenoid?', 'Strong and uniform (parallel lines).'],
    ['How can you measure the strength of an electromagnet?', 'Count the paper clips it holds (or measure the pull with a newton meter).'],
    ['★ Right-hand grip rule?', 'Fingers curl with the current; thumb points to the north pole.']
  ],
  quiz: [
    { q: 'An electromagnet only works when', o: ['a current flows in the coil', 'the coil is hot', 'it is made of copper only', 'it is near the Earth’s pole'], x: 'No current, no field.' },
    { q: 'Which would make an electromagnet weaker?', o: ['fewer turns of wire', 'more current', 'adding an iron core', 'more turns'], x: 'Fewer turns, weaker field.' },
    { q: 'The best core for an electromagnet is', o: ['soft iron', 'steel', 'wood', 'plastic'], x: 'Strong but temporary.' },
    { q: 'In an investigation of turns vs strength, the current should be', o: ['kept the same', 'increased each time', 'turned off', 'reversed each time'], x: 'Control variable.' },
    { q: 'Reversing the current in an electromagnet', o: ['swaps the N and S poles', 'switches it off', 'makes it twice as strong', 'makes it attract aluminium'], x: 'The field reverses.' },
    { q: 'The field outside a solenoid looks like the field of', o: ['a bar magnet', 'a single straight wire', 'a horseshoe only', 'nothing at all'], x: 'N at one end, S at the other.' },
    { q: 'Inside a long solenoid, the field lines are', o: ['parallel and evenly spaced', 'circles', 'crossing', 'absent'], x: 'Strong and uniform.' },
    { q: 'Who first showed that a current affects a compass?', o: ['Ørsted', 'Newton', 'Archimedes', 'Einstein'], x: '1820.', ch: 1 }
  ],
  exam: [
    { q: 'A student investigates how the number of turns on an electromagnet affects how many paper clips it picks up. Results: 10 turns → 3 clips; 20 → 7; 30 → 10; 40 → 14; 50 → 17.', tag: 'prac', parts: [
      { q: 'State the independent and dependent variables.', m: 2, ms: ['independent: number of turns', 'dependent: number of paper clips picked up'] },
      { q: 'Give two control variables.', m: 2, ms: ['current / power supply setting', 'same core / same size clips / same wire'] },
      { q: 'Write a conclusion.', m: 1, ms: ['the more turns, the more clips / the stronger the electromagnet'] },
      { q: 'Suggest why the wire should be disconnected between readings.', m: 1, ms: ['it gets hot / to stop it overheating (which would change the current)'] }
    ] },
    { q: 'Describe how to make an electromagnet and state three ways to make it stronger.', tag: 'ext', m: 5, ms: ['coil insulated wire around a core', 'connect the ends to a cell / power supply so a current flows', 'more turns', 'bigger current', 'use a soft iron core'] }
  ],
  sims: ['k_solenoid'], gens: []
});

TOPICS.push({
  id: '7.4', unit: '7', title: 'Uses of electromagnets', short: 'Cranes, bells, relays, maglev and MRI',
  summary: 'Because electromagnets can be switched on and off, and made very strong, they are used in scrapyard cranes, electric bells, relays, door locks, loudspeakers, maglev trains and MRI scanners.',
  spec: [
    'I can explain why an electromagnet is more useful than a permanent magnet for some jobs',
    'I can explain how a scrapyard crane and an electric door lock work',
    'I can explain how an electric bell uses an electromagnet to make the hammer vibrate',
    'I can describe other uses: relays, loudspeakers, maglev trains, MRI scanners',
    '★ I can explain how a relay lets a small current switch on a large current safely'
  ],
  learn: [
    { h: 'Why electromagnets?', html: `
<ul><li>They can be <b>switched on and off</b>.</li><li>Their <b>strength can be changed</b> by changing the current.</li><li>They can be made <b>much stronger</b> than permanent magnets.</li><li>Their poles can be <b>reversed</b> by reversing the current.</li></ul>` },
    { h: 'Cranes, locks and bells', html: `
<p><b>Scrapyard crane:</b> switch on → the iron core attracts steel scrap; swing it over; switch off → the scrap drops. It also separates magnetic metals from non-magnetic ones.</p>
<p><b>Electric door lock:</b> an electromagnet holds a steel plate on the door. Swipe your card, the current switches off, and the door can open.</p>
[[d:bell]]
<p><b>Electric bell:</b> press the switch → current flows → electromagnet attracts the iron armature → the hammer hits the gong → but moving the armature <b>breaks the circuit</b> at the contact → electromagnet switches off → a spring pulls the armature back → circuit is made again → … This repeats many times a second, so the bell rings continuously.</p>` },
    { h: 'More uses', html: `
<ul><li><b>Loudspeakers</b>: a changing current in a coil next to a magnet makes the cone vibrate, producing sound.</li><li><b>Maglev trains</b>: powerful electromagnets make the train <b>float</b> above the track (no friction with the rails) and pull it along. Shanghai’s maglev reaches 430 km/h.</li><li><b>MRI scanners</b>: huge electromagnets (with super-cold coils) help make detailed images of the inside of the body.</li><li><b>Relays</b>: an electromagnetic switch.</li><li><b>Recycling plants</b>: separating steel from other waste.</li></ul>
<div class="box why"><b class="lbl">★ Relays</b><p>A small current (from a safe, low-voltage circuit such as a car ignition key) flows through the relay’s coil. The electromagnet pulls an iron switch closed in a <b>second circuit</b> that carries a large current (to the car’s starter motor). The person is kept safe from the big current, and thin wires can be used in the control circuit.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why a scrapyard uses an electromagnet rather than a permanent magnet to lift cars.', s: ['The crane must pick up the car, then drop it somewhere else.', 'An electromagnet can be switched off to release the car.', 'It can also be made very strong by using a large current.'], a: 'can be switched off to drop the load; very strong' },
    { q: 'In an electric bell, what makes the hammer move back after it hits the gong?', s: ['When the armature moves, the contact opens and the circuit breaks.', 'The electromagnet switches off.', 'A springy strip pulls the armature (and hammer) back.'], a: 'circuit breaks; spring pulls it back' }
  ],
  pitfalls: ['Saying the bell’s hammer moves back because the magnet “repels” it — the electromagnet switches off and a spring pulls it back.', 'Forgetting that electromagnets only attract magnetic materials (steel, not aluminium).', 'Saying maglev trains use wheels on rails.', 'Mixing up the two circuits in a relay.'],
  cards: [
    ['Four advantages of electromagnets?', 'Switch on/off; adjustable strength; very strong; poles can be reversed.'],
    ['How does a scrapyard crane drop its load?', 'The current is switched off.'],
    ['What makes an electric bell ring continuously?', 'The armature breaks the circuit, the magnet switches off, the spring pulls it back, the circuit is made again — repeatedly.'],
    ['How do maglev trains avoid friction with the track?', 'Electromagnets make them float (levitate) above the track.'],
    ['What does MRI use?', 'Very strong electromagnets to image the inside of the body.'],
    ['What is a relay?', 'An electromagnetic switch.'],
    ['What part of a loudspeaker moves?', 'The cone (driven by a coil next to a magnet).'],
    ['★ Why use a relay to start a car?', 'A small safe current in the key circuit switches a large current in the starter motor circuit.']
  ],
  quiz: [
    { q: 'Why does a scrapyard crane use an electromagnet?', o: ['it can be switched off to drop the load', 'it attracts aluminium', 'it works without electricity', 'it is lighter'], x: 'On/off control.' },
    { q: 'In an electric bell, when the armature is pulled towards the electromagnet', o: ['the circuit is broken', 'the current gets bigger', 'the bell stops forever', 'the spring breaks'], x: 'That switches the magnet off.' },
    { q: 'Maglev trains', o: ['float above the track on magnetic forces', 'run on steel wheels', 'use diesel engines', 'are pulled by cables'], x: 'Magnetic levitation.' },
    { q: 'Which is NOT a use of an electromagnet?', o: ['a compass needle', 'an electric bell', 'a relay', 'an MRI scanner'], x: 'A compass needle is a permanent magnet.' },
    { q: 'An electric door lock opens when', o: ['the electromagnet is switched off', 'the current is increased', 'the door gets hot', 'the magnet is reversed'], x: 'The steel plate is released.' },
    { q: 'A loudspeaker makes sound because', o: ['a coil and magnet make the cone vibrate', 'the magnet gets hot', 'air is sucked in', 'the current is switched off'], x: 'Vibrations make sound.' },
    { q: 'The strength of an electromagnet in a crane can be changed by', o: ['changing the current', 'painting it', 'changing the colour of the wire', 'changing the scrap'], x: 'More current, stronger magnet.' },
    { q: 'A relay allows', o: ['a small current to switch a large current', 'a large current to make a small one', 'magnets to work without current', 'current to flow without wires'], x: 'Two separate circuits.', ch: 1 }
  ],
  exam: [
    { q: 'The diagram shows an electric bell.', tag: 'ext', parts: [
      { q: 'Explain how the bell rings continuously while the switch is held down.', m: 5, ms: ['current flows through the coil / electromagnet is switched on', 'it attracts the (iron) armature and the hammer hits the gong', 'moving the armature breaks the circuit at the contact', 'electromagnet switches off and the spring pulls the armature back', 'circuit is made again and the process repeats'] },
      { q: 'Explain why the armature must be made of iron rather than aluminium.', m: 1, ms: ['iron is magnetic / attracted by the electromagnet (aluminium is not)'] }
    ] },
    { q: 'Give two advantages of using an electromagnet instead of a permanent magnet in a scrapyard crane.', m: 2, ms: ['can be switched off to release the scrap', 'strength can be changed / can be made stronger'] }
  ],
  sims: ['bell'], gens: []
});
