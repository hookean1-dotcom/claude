/* ==========================================================
   YEAR 7 · UNIT 1 · BASIC FORCES
   ========================================================== */
TOPICS.push({
  id: '1.1', unit: '1', title: 'What forces do', short: 'Pushes and pulls, contact and non-contact forces',
  summary: 'A force is a push or a pull. Forces can change how fast something moves, the direction it moves in, and its shape. Some forces need objects to touch (contact forces); others act at a distance (non-contact forces).',
  spec: [
    'I can describe a force as a push or a pull that acts when two objects interact',
    'I can list what forces can do: start or stop motion, speed up, slow down, change direction, change shape',
    'I can name common contact forces: friction, air resistance, water resistance, upthrust, tension, normal (reaction) force, thrust',
    'I can name the non-contact forces: gravity (weight), magnetic force and electrostatic force',
    '★ I can explain that forces always come in pairs when two objects interact'
  ],
  learn: [
    { h: 'A force is a push or a pull', html: `
<p>A <b>force</b> is a <b>push</b> or a <b>pull</b>. Forces happen when two objects <b>interact</b> — your foot and a football, the Earth and the Moon, a magnet and a paper clip.</p>
<p>Forces are measured in <b>newtons (N)</b>, named after Isaac Newton. An apple weighs about 1 N.</p>
<div class="box def"><b class="lbl">What forces can do</b><ul><li><b>start</b> something moving, or <b>stop</b> it</li><li>make something <b>speed up</b> or <b>slow down</b></li><li>change the <b>direction</b> something is moving in</li><li>change the <b>shape</b> of something — squash, stretch, bend or twist it</li></ul></div>
<p>Kicking a ball does several of these at once: it starts the ball moving, changes its direction, and squashes it for a moment.</p>` },
    { h: 'Contact forces', html: `
[[d:contact]]
<p><b>Contact forces</b> only act when objects are <b>touching</b>.</p>
<div class="tbl"><table><tr><th>Force</th><th>What it does</th><th>Example</th></tr>
<tr><td><b>Friction</b></td><td>acts when two surfaces slide (or try to slide) over each other; it opposes the motion</td><td>brakes on a bike; walking without slipping</td></tr>
<tr><td><b>Air resistance</b> (drag)</td><td>friction from air as something moves through it; opposes motion</td><td>a parachute slowing a skydiver</td></tr>
<tr><td><b>Water resistance</b> (drag)</td><td>friction from water; opposes motion</td><td>a swimmer; a boat</td></tr>
<tr><td><b>Upthrust</b></td><td>the upward push of a liquid or gas on an object in it</td><td>a boat floating; a helium balloon</td></tr>
<tr><td><b>Tension</b></td><td>the pull in a stretched rope, string or spring</td><td>tug of war; a lamp hanging on a cable</td></tr>
<tr><td><b>Normal (reaction) force</b></td><td>the push of a surface back on an object resting on it</td><td>a table holding up a book</td></tr>
<tr><td><b>Thrust</b></td><td>the driving force from an engine or rocket</td><td>a rocket lifting off</td></tr></table></div>` },
    { h: 'Non-contact forces', html: `
<p><b>Non-contact forces</b> act <b>at a distance</b> — the objects do not need to touch. They act through a <b>field</b>.</p>
<ul><li><b>Gravity</b> — every object with mass attracts every other object. The pull of the Earth on you is your <b>weight</b>. Gravity keeps the Moon in orbit.</li><li><b>Magnetic force</b> — between magnets, and between a magnet and a magnetic material such as iron.</li><li><b>Electrostatic force</b> — between charged objects, like a rubbed balloon sticking to a wall or pulling your hair.</li></ul>
<div class="box tip"><b class="lbl">Quick test</b><p>Ask: “would the force still act if there was a tiny gap between the objects?” If yes, it is a non-contact force.</p></div>
<div class="box why"><b class="lbl">★ Challenge: forces come in pairs</b><p>When two objects interact, they <b>both</b> feel a force. If you push on a wall, the wall pushes back on you with a force of the same size in the opposite direction. The Earth pulls you down; you pull the Earth up just as hard — but the Earth is so massive that it hardly moves.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'A footballer heads a moving ball back the way it came. List three things the force from her head does to the ball.', s: ['It stops the ball (slows it down to zero)…', '…then changes its direction and speeds it up the other way.', 'It also squashes the ball — changes its shape — for a moment.'], a: 'slows it, changes its direction (and speed), changes its shape' },
    { q: 'Classify these forces as contact or non-contact: friction on a sledge; the pull of a fridge magnet; a rope pulling a boat; the weight of a book.', s: ['Friction on the sledge: surfaces touching → <b>contact</b>.', 'Fridge magnet: acts across a gap → <b>non-contact</b> (magnetic).', 'Rope: tension, touching → <b>contact</b>.', 'Weight: gravity acts at a distance → <b>non-contact</b>.'], a: 'contact, non-contact, contact, non-contact' }
  ],
  pitfalls: ['Saying “gravity” and “weight” are contact forces — they act at a distance.', 'Writing the unit of force as “n” or “Newtons” — it is the newton, symbol N.', 'Forgetting that forces can change shape as well as motion.', 'Thinking friction only slows things down — without friction you could not walk, and car tyres could not grip.'],
  cards: [
    ['What is a force?', 'A push or a pull that acts when two objects interact.'],
    ['Unit of force?', 'The newton (N).'],
    ['Four things a force can do?', 'Change speed (start, stop, speed up, slow down), change direction, change shape.'],
    ['What is a contact force?', 'A force that only acts when the objects are touching.'],
    ['Name five contact forces.', 'Friction, air resistance, water resistance, upthrust, tension, normal force, thrust.'],
    ['Name three non-contact forces.', 'Gravity (weight), magnetic force, electrostatic force.'],
    ['What is weight?', 'The force of gravity pulling an object towards the Earth (a non-contact force).'],
    ['What is upthrust?', 'The upward push of a liquid or gas on an object in it.'],
    ['What is tension?', 'The pulling force in a stretched rope, string or spring.'],
    ['★ If you push a wall with 50 N, what does the wall do?', 'Pushes back on you with 50 N in the opposite direction.']
  ],
  quiz: [
    { q: 'What is the unit of force?', o: ['newton (N)', 'kilogram (kg)', 'joule (J)', 'metre (m)'], x: 'Forces are measured in newtons.' },
    { q: 'Which of these is a non-contact force?', o: ['magnetic force', 'friction', 'tension', 'air resistance'], x: 'Magnets attract across a gap.' },
    { q: 'Which force slows a skydiver down?', o: ['air resistance', 'upthrust', 'weight', 'magnetic force'], x: 'Air pushes against the moving skydiver.' },
    { q: 'A ball of modelling clay is squashed flat. The force has changed its', o: ['shape', 'mass', 'weight', 'direction only'], x: 'Forces can change shape.' },
    { q: 'The force in a stretched rope is called', o: ['tension', 'thrust', 'upthrust', 'friction'], x: 'Ropes and strings pull with tension.' },
    { q: 'Which force keeps a boat afloat?', o: ['upthrust', 'friction', 'gravity', 'tension'], x: 'Water pushes up on the boat.' },
    { q: 'Weight is caused by', o: ['gravity', 'friction', 'air pressure', 'magnetism'], x: 'The Earth’s gravity pulls on the object’s mass.' },
    { q: 'A balloon rubbed on a jumper sticks to the wall. The force is', o: ['electrostatic', 'magnetic', 'friction', 'upthrust'], x: 'Charged objects attract.' },
    { q: 'Which is NOT something a force can do?', o: ['change an object’s mass', 'change its speed', 'change its direction', 'change its shape'], x: 'Mass is the amount of matter; forces do not change it.' },
    { q: 'You push down on a table with 20 N. The table pushes up on your hand with', o: ['20 N', '0 N', '10 N', '40 N'], x: 'Forces come in pairs: equal size, opposite direction.', ch: 1 }
  ],
  exam: [
    { q: 'Forces can be contact forces or non-contact forces.', tag: '', parts: [
      { q: 'Explain the difference between a contact force and a non-contact force.', m: 2, ms: ['contact forces act only when objects touch', 'non-contact forces act at a distance / without touching'] },
      { q: 'Give one example of each type of force.', m: 2, ms: ['contact: friction / air resistance / tension / upthrust / normal force / thrust', 'non-contact: gravity / weight / magnetic / electrostatic'] },
      { q: 'A cyclist brakes. Name the force that slows the bicycle down and say whether it is a contact or non-contact force.', m: 2, ms: ['friction (between the brake pads and the wheel / tyres and road)', 'contact force'] }
    ] },
    { q: 'A tennis player hits a ball that is moving towards her. The ball goes back over the net.', tag: '', parts: [
      { q: 'Describe three effects the force from the racket has on the ball.', m: 3, ms: ['changes its direction', 'changes its speed (stops it then speeds it up)', 'changes its shape / squashes it'] },
      { q: 'Name the non-contact force that makes the ball fall towards the ground.', m: 1, ms: ['gravity / weight'] }
    ] }
  ],
  sims: ['forcepick'], gens: []
});

TOPICS.push({
  id: '1.2', unit: '1', title: 'Representing forces', short: 'Force arrows, the newton, force diagrams',
  summary: 'We draw forces as arrows. The length shows the size of the force and the arrowhead shows its direction. A force diagram shows every force acting on one object.',
  spec: [
    'I can state that forces are measured in newtons (N)',
    'I can draw a force arrow showing the size and direction of a force',
    'I can draw a force diagram with arrows starting on the object, labelled with the name and size of each force',
    '★ I can draw force arrows to scale, e.g. 1 cm = 10 N'
  ],
  learn: [
    { h: 'Force arrows', html: `
[[d:arrows]]
<p>A force has a <b>size</b> and a <b>direction</b>, so we draw it as an <b>arrow</b>:</p>
<ul><li>The <b>length</b> of the arrow shows the <b>size</b> of the force — a bigger force gets a longer arrow.</li><li>The <b>arrowhead</b> shows the <b>direction</b> the force acts.</li><li>The arrow starts on the object the force acts on.</li><li>Label it with the <b>name</b> of the force and its <b>size in newtons</b>.</li></ul>` },
    { h: 'Force diagrams', html: `
[[d:k_freebody]]
<p>A <b>force diagram</b> shows all the forces acting on <b>one object</b>. Draw the object as a simple box or dot, then add an arrow for every force.</p>
<ol><li>Is it on Earth? Then there is <b>weight</b>, pointing straight down.</li><li>Is it resting on something? That surface pushes up: <b>normal (reaction) force</b>.</li><li>Is it moving through air or water? Add <b>air or water resistance</b>, opposite to the motion.</li><li>Is something pulling or driving it? Add <b>tension</b>, <b>thrust</b> or a <b>push</b>.</li><li>Is it sliding? Add <b>friction</b>, opposite to the motion.</li></ol>` },
    { h: '★ Drawing to scale', html: `
<p>Choose a <b>scale</b>, such as <b>1 cm = 10 N</b>. Then a 30 N force is drawn 3 cm long and a 45 N force 4.5 cm long. Scale drawings let you compare forces — and later, find the resultant force by measuring.</p>
<div class="box tip"><b class="lbl">Tip</b><p>Use a ruler and a sharp pencil. Pick a scale that makes your longest arrow fit the space — about 5–10 cm long.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Draw a force diagram for a book resting on a table. Its weight is 8 N.', s: ['Draw a box for the book.', 'Weight: an arrow 8 N pointing down from the book.', 'Normal force from the table: an arrow pointing up, the same length (8 N), because the book is not moving up or down.'], a: 'weight 8 N down; normal force 8 N up' },
    { q: 'Using the scale 1 cm = 5 N, how long should you draw a 35 N force?', s: ['Length = 35 ÷ 5', '= 7 cm'], a: '7 cm' }
  ],
  pitfalls: ['Drawing arrows the same length when the forces are different sizes.', 'Starting arrows away from the object — they should start on it.', 'Leaving off the labels or units (N).', 'Drawing weight from the ground instead of from the object.'],
  cards: [
    ['What does the length of a force arrow show?', 'The size of the force.'],
    ['What does the arrowhead show?', 'The direction of the force.'],
    ['What is a force diagram?', 'A drawing of one object with an arrow for every force acting on it.'],
    ['Which way does weight always act?', 'Straight down, towards the centre of the Earth.'],
    ['What pushes up on a book resting on a table?', 'The normal (reaction) force from the table.'],
    ['Which way does friction act?', 'Opposite to the direction of motion (or the direction it would slide).'],
    ['What should every force arrow be labelled with?', 'The name of the force and its size in newtons.'],
    ['★ Scale 1 cm = 20 N. How long is a 50 N arrow?', '2.5 cm.']
  ],
  quiz: [
    { q: 'On a force diagram, a longer arrow means', o: ['a bigger force', 'a faster object', 'a heavier object', 'a smaller force'], x: 'Length shows size.' },
    { q: 'Which arrow shows the weight of a car?', o: ['an arrow pointing down from the car', 'an arrow pointing up from the road', 'an arrow pointing forwards', 'an arrow pointing backwards'], x: 'Weight acts downwards.' },
    { q: 'A car drives forwards. Air resistance on it acts', o: ['backwards', 'forwards', 'upwards', 'downwards'], x: 'Resistance opposes motion.' },
    { q: 'Forces on a force diagram should be labelled in', o: ['newtons', 'kilograms', 'metres', 'joules'], x: 'N is the unit of force.' },
    { q: 'A lamp hangs from the ceiling on a cable. The two forces on the lamp are', o: ['weight and tension', 'weight and friction', 'thrust and tension', 'upthrust and friction'], x: 'The cable pulls up; gravity pulls down.' },
    { q: 'Scale: 1 cm = 10 N. A 60 N force is drawn', o: ['6 cm long', '60 cm long', '0.6 cm long', '10 cm long'], x: '60 ÷ 10 = 6.', ch: 1 },
    { q: 'A force diagram shows the forces acting on', o: ['one object', 'every object nearby', 'the ground', 'the air'], x: 'Pick one object and show every force on it.' },
    { q: 'A boat floats still on a lake. The upthrust arrow should be', o: ['the same length as the weight arrow, pointing up', 'longer than the weight arrow', 'shorter than the weight arrow', 'pointing down'], x: 'Balanced: equal size, opposite direction.' }
  ],
  exam: [
    { q: 'A skydiver is falling through the air.', tag: '', parts: [
      { q: 'Name the two forces acting on the skydiver.', m: 2, ms: ['weight / gravity', 'air resistance / drag'] },
      { q: 'Draw a force diagram for the skydiver, showing the direction of each force.', m: 2, ms: ['arrow pointing down labelled weight', 'arrow pointing up labelled air resistance'] },
      { q: 'At one moment the weight is 700 N and the air resistance is 300 N. Explain how the lengths of the two arrows should compare.', m: 2, ms: ['weight arrow longer', 'because it is the bigger force / length shows size (about 7 : 3)'] }
    ] },
    { q: 'A student draws forces to a scale of 1 cm = 20 N.', tag: 'calc', ch: 1, parts: [
      { q: 'How long should the arrow be for a force of 120 N?', m: 1, ms: ['6 cm'] },
      { q: 'An arrow is 3.5 cm long. What force does it show?', m: 2, ms: ['3.5 × 20', '= 70 N'] }
    ] }
  ],
  sims: ['fdiagram'], gens: ['scale1']
});

TOPICS.push({
  id: '1.3', unit: '1', title: 'Balanced and unbalanced forces', short: 'How forces affect motion',
  summary: 'If the forces on an object are balanced, its motion does not change: it stays still, or keeps moving at the same speed in the same direction. Unbalanced forces make it speed up, slow down or change direction.',
  spec: [
    'I can decide whether the forces on an object are balanced or unbalanced',
    'I can explain that balanced forces mean no change in motion: stationary objects stay still; moving objects keep the same speed and direction',
    'I can explain that unbalanced forces change motion: speeding up, slowing down or changing direction',
    'I can describe the forces on a skydiver during a jump',
    '★ I can explain why a moving object with balanced forces keeps moving'
  ],
  learn: [
    { h: 'Balanced forces', html: `
[[d:balanced]]
<p>Forces are <b>balanced</b> when they are the <b>same size</b> but act in <b>opposite directions</b>. They cancel out: the <b>resultant force is zero</b>.</p>
<ul><li>A <b>stationary</b> object with balanced forces <b>stays still</b> — a book on a table, a boat floating at rest.</li><li>A <b>moving</b> object with balanced forces keeps moving at a <b>steady speed in a straight line</b> — a car cruising at 30 mph when the driving force equals the drag.</li></ul>
<div class="box why"><b class="lbl">★ The surprising part</b><p>You do <b>not</b> need an overall force to keep something moving. On Earth, things slow down because friction and air resistance act on them. In space, far from anything, a probe keeps going at the same speed for ever with its engines off.</p></div>` },
    { h: 'Unbalanced forces', html: `
<p>If the forces are <b>unbalanced</b>, there is a <b>resultant force</b> and the motion <b>changes</b>:</p>
<ul><li>bigger force <b>forwards</b> → the object <b>speeds up</b> (accelerates)</li><li>bigger force <b>backwards</b> → it <b>slows down</b> (decelerates)</li><li>a force at an angle to the motion → it <b>changes direction</b></li></ul>
<p>Examples: a car pulling away (driving force &gt; drag), a cyclist braking (friction &gt; driving force), a rocket lifting off (thrust &gt; weight).</p>` },
    { h: 'The skydiver', html: `
[[d:k_terminal]]
<ol><li><b>Just jumped:</b> weight is much bigger than air resistance → unbalanced downwards → speeds up.</li><li><b>Falling faster:</b> air resistance grows with speed → still unbalanced, but speeds up more slowly.</li><li><b>Terminal velocity:</b> air resistance = weight → balanced → steady speed (about 55 m/s).</li><li><b>Parachute opens:</b> huge air resistance, now bigger than weight → unbalanced upwards → slows down.</li><li><b>New terminal velocity:</b> air resistance = weight again → steady, slow speed (about 5 m/s) for a safe landing.</li></ol>` }
  ],
  eqs: [],
  worked: [
    { q: 'A car’s engine gives a driving force of 2000 N. Air resistance and friction add up to 2000 N. Describe the car’s motion.', s: ['Forwards force = backwards force = 2000 N.', 'The forces are balanced, so the resultant force is zero.', 'The car keeps moving at a steady speed in a straight line.'], a: 'steady speed in a straight line' },
    { q: 'A rocket has a weight of 5000 N and its engines give 8000 N of thrust. Will it take off? Explain.', s: ['Thrust (up) 8000 N is bigger than weight (down) 5000 N.', 'The forces are unbalanced upwards (by 3000 N).', 'So yes — it speeds up upwards and lifts off.'], a: 'yes — unbalanced upwards by 3000 N' }
  ],
  pitfalls: ['Saying a moving object must have an overall force forwards — balanced forces can mean steady motion.', 'Saying “balanced forces means it is not moving” — it could be moving at a steady speed.', 'Forgetting that air resistance increases as speed increases.', 'Saying the parachute makes the skydiver go up — it makes them slow down.'],
  cards: [
    ['What are balanced forces?', 'Forces that are equal in size and opposite in direction — the resultant force is zero.'],
    ['Balanced forces on a stationary object?', 'It stays still.'],
    ['Balanced forces on a moving object?', 'It keeps moving at a steady speed in a straight line.'],
    ['What do unbalanced forces do?', 'Change the motion: speed up, slow down or change direction.'],
    ['What happens to air resistance as a skydiver speeds up?', 'It increases.'],
    ['What is terminal velocity?', 'The steady top speed reached when air resistance equals weight.'],
    ['Why does a skydiver slow down when the parachute opens?', 'Air resistance becomes bigger than weight — unbalanced upwards.'],
    ['What makes a rocket take off?', 'Thrust bigger than weight.'],
    ['★ Why does a space probe keep moving with its engines off?', 'There is no friction or air resistance, so no unbalanced force to slow it.']
  ],
  quiz: [
    { q: 'A car moves at a steady 20 m/s in a straight line. The forces on it are', o: ['balanced', 'unbalanced forwards', 'unbalanced backwards', 'zero — there are no forces'], x: 'Steady speed = balanced (driving force = drag).' },
    { q: 'A skydiver has just jumped. Her weight is 700 N and air resistance is 100 N. She is', o: ['speeding up', 'slowing down', 'at a steady speed', 'stationary'], x: 'Unbalanced downwards.' },
    { q: 'At terminal velocity, air resistance is', o: ['equal to weight', 'bigger than weight', 'smaller than weight', 'zero'], x: 'Balanced forces, steady speed.' },
    { q: 'A cyclist brakes. The forces on the bike are', o: ['unbalanced backwards', 'unbalanced forwards', 'balanced', 'all acting upwards'], x: 'Friction is bigger than the forward force.' },
    { q: 'A book rests on a shelf. Its weight is 5 N. The normal force from the shelf is', o: ['5 N upwards', '5 N downwards', '0 N', '10 N upwards'], x: 'Balanced — it stays still.' },
    { q: 'Which will make an object change direction?', o: ['an unbalanced force at an angle to its motion', 'balanced forces', 'no forces at all', 'a force exactly backwards'], x: 'A sideways force turns it.' },
    { q: 'Why does a rolling ball on grass eventually stop?', o: ['friction and air resistance act against its motion', 'it runs out of force', 'gravity pulls it backwards', 'the forces are balanced'], x: 'An unbalanced force backwards slows it.' },
    { q: 'A parachutist has reached a slow, steady speed. The forces are', o: ['balanced', 'unbalanced upwards', 'unbalanced downwards', 'impossible to tell'], x: 'Steady speed means balanced.' },
    { q: 'In deep space, a probe with its engines off moving at 10 km/s will', o: ['keep moving at 10 km/s', 'slowly stop', 'speed up', 'fall back to Earth straight away'], x: 'No unbalanced force, so no change in motion.', ch: 1 }
  ],
  exam: [
    { q: 'A skydiver jumps from a plane.', tag: 'ext', parts: [
      { q: 'Describe and explain how the forces on the skydiver and her speed change from the moment she jumps until she reaches a steady speed.', m: 4, ms: ['at first weight is bigger than air resistance / unbalanced downwards', 'so she speeds up', 'air resistance increases as speed increases', 'until air resistance = weight / balanced — steady (terminal) speed'] },
      { q: 'She opens her parachute. Explain why she slows down.', m: 2, ms: ['air resistance increases / becomes bigger than weight', 'unbalanced force upwards / opposite to motion so she slows down'] }
    ] },
    { q: 'A boat is being pushed through the water by its engine. The thrust is 3000 N.', tag: '', parts: [
      { q: 'The water resistance is also 3000 N. Describe the motion of the boat.', m: 2, ms: ['forces balanced', 'steady speed in a straight line'] },
      { q: 'The captain increases the thrust to 4500 N. Describe and explain what happens to the speed of the boat at first.', m: 2, ms: ['speeds up', 'thrust bigger than water resistance / unbalanced forwards'] },
      { q: 'Suggest why the boat later settles at a new, higher steady speed.', m: 2, ms: ['water resistance increases as the boat goes faster', 'until it equals the thrust again / balanced'], ch: 1 }
    ] }
  ],
  sims: ['k_skydiver', 'fdiagram'], gens: []
});

TOPICS.push({
  id: '1.4', unit: '1', title: 'Film-canister rockets', short: 'Practical: gas pressure, thrust and weight',
  summary: 'A film canister with water and a fizzy tablet makes a rocket. Gas builds up until the pressure pops the lid off; the water and gas shoot down and the canister shoots up. It is a great way to see unbalanced forces — and to plan a fair test.',
  spec: [
    'I can explain how a film-canister rocket works using the ideas of gas pressure, thrust and weight',
    'I can explain why the rocket moves up while the water and gas move down (forces come in pairs)',
    'I can plan a fair test: independent, dependent and control variables',
    'I can suggest how to measure the rocket’s flight fairly and safely',
    '★ I can explain why the height depends on the amount of water and tablet'
  ],
  learn: [
    { h: 'How it works', html: `
[[d:canister]]
<ol><li>Put a little <b>water</b> and a piece of <b>effervescent (fizzy) tablet</b> in the canister, snap on the lid and stand it <b>lid-down</b>.</li><li>The tablet reacts with the water and makes <b>carbon dioxide gas</b>.</li><li>Gas builds up. The gas particles hit the walls and the lid more and more — the <b>pressure</b> rises.</li><li>When the force from the gas pressure is bigger than the force holding the lid on, the lid <b>pops off</b>.</li><li>Gas and water are pushed <b>down</b> out of the canister; they push the canister <b>up</b>. This upward push is <b>thrust</b>.</li><li><b>Thrust &gt; weight</b> → unbalanced force upwards → the rocket speeds up into the air. Then only weight (and air resistance) act, so it slows, stops and falls back.</li></ol>` },
    { h: 'Forces in pairs — why the rocket goes up', html: `
<p>The canister pushes the water and gas <b>down</b>; the water and gas push the canister <b>up</b> with an equal and opposite force. This is how <b>all rockets</b> work — even in space, where there is no air to push against. A real rocket pushes hot exhaust gas down at high speed, and the gas pushes the rocket up.</p>` },
    { h: 'Planning a fair test', html: `
<div class="tbl"><table><tr><th>Variable</th><th>Example</th></tr>
<tr><td><b>Independent</b> (the one you change)</td><td>volume of water (e.g. 5, 10, 15, 20 ml) — or amount of tablet, or water temperature</td></tr>
<tr><td><b>Dependent</b> (the one you measure)</td><td>height reached, or time until launch</td></tr>
<tr><td><b>Control</b> (kept the same)</td><td>amount of tablet, type of canister, water temperature, same launch surface</td></tr></table></div>
<p><b>Measuring height:</b> launch next to a tall wall with a scale (metre rules or tape), film it on a phone and pause at the top. Repeat each launch <b>three times</b> and find the <b>mean</b>.</p>
<div class="box warn"><b class="lbl">Safety</b><ul><li>Wear <b>eye protection</b> — the lid flies off at speed.</li><li>Never lean over a canister that has not launched; wait at least a minute, then tip it away from you with tongs.</li><li>Launch outdoors or in a clear space; everyone stands back.</li><li>Do not eat the tablets.</li></ul></div>` },
    { h: '★ What affects the height?', html: `
<p><b>More tablet</b> (to a point) → more gas made quickly → higher pressure when the lid pops → more thrust. <b>Warmer water</b> → faster reaction → faster pressure build-up. <b>Water volume</b> has a best value: too little water and the tablet does not react well; too much and there is less space for gas, and the rocket is heavier. Most classes find a peak at around a third to half full.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'A student investigates how the volume of water affects the height of a film-canister rocket. Identify the independent, dependent and two control variables.', s: ['Independent: the volume of water (the thing she changes).', 'Dependent: the height the rocket reaches (what she measures).', 'Control: the amount of tablet; the same canister; the same water temperature.'], a: 'IV water volume; DV height; CVs tablet amount, canister, temperature' },
    { q: 'Her three heights for 10 ml are 1.8 m, 2.2 m and 2.0 m. Calculate the mean.', s: ['Add them: 1.8 + 2.2 + 2.0 = 6.0 m', 'Divide by 3: 6.0 ÷ 3 = 2.0 m'], a: '2.0 m' }
  ],
  pitfalls: ['Saying the rocket goes up because the gas “pushes on the ground” — it pushes the water and gas down, and they push the rocket up.', 'Changing two things at once (e.g. water and tablet) — not a fair test.', 'Forgetting eye protection in a plan.', 'Measuring only once — repeats let you spot anomalies and find a mean.'],
  cards: [
    ['What gas is made in a film-canister rocket?', 'Carbon dioxide.'],
    ['Why does the lid pop off?', 'Gas builds up and the pressure pushes the lid off.'],
    ['Why does the rocket go up?', 'It pushes water and gas down; they push it up (thrust). Thrust > weight.'],
    ['What is thrust?', 'The driving force from a rocket or engine.'],
    ['Independent variable?', 'The variable you change.'],
    ['Dependent variable?', 'The variable you measure.'],
    ['Control variables?', 'Variables kept the same to make it a fair test.'],
    ['One safety precaution for canister rockets?', 'Wear eye protection / stand well back / do not lean over an unlaunched canister.'],
    ['How can you measure the height reached?', 'Film the launch beside a scale on a wall and pause at the top.']
  ],
  quiz: [
    { q: 'What makes the pressure rise inside the canister?', o: ['carbon dioxide gas building up', 'the water getting heavier', 'air leaking in', 'the lid getting hotter'], x: 'More gas particles hitting the walls.' },
    { q: 'The rocket lifts off because', o: ['thrust is bigger than weight', 'weight is bigger than thrust', 'the forces are balanced', 'air resistance pushes it up'], x: 'Unbalanced upwards.' },
    { q: 'Which is the dependent variable in “does the amount of tablet affect the height?”', o: ['the height reached', 'the amount of tablet', 'the canister', 'the water temperature'], x: 'You measure the height.' },
    { q: 'Which safety precaution is most important?', o: ['wear eye protection', 'wear gloves to hold the water', 'use cold water only', 'launch indoors'], x: 'The lid flies off fast.' },
    { q: 'Why repeat each launch three times?', o: ['to spot anomalies and calculate a mean', 'to make the rocket go higher', 'to use up the tablets', 'to change the variable'], x: 'Repeats make results more reliable.' },
    { q: 'The rocket pushes gas and water downwards. The gas and water push the rocket', o: ['upwards with an equal force', 'downwards', 'sideways', 'upwards with a smaller force'], x: 'Forces come in pairs.' },
    { q: 'After the rocket leaves the ground, why does it slow down?', o: ['weight (and air resistance) act downwards with no thrust', 'the gas pulls it back', 'upthrust pulls it down', 'the forces are balanced'], x: 'Unbalanced downwards.' },
    { q: 'Heights: 1.4 m, 1.6 m, 1.5 m. The mean is', o: ['1.5 m', '4.5 m', '1.6 m', '1.4 m'], x: '4.5 ÷ 3.' },
    { q: 'Using warmer water is likely to make the lid pop', o: ['sooner', 'later', 'at the same time', 'never'], x: 'The reaction is faster when warmer.', ch: 1 }
  ],
  exam: [
    { q: 'A class investigates film-canister rockets. They put water and part of a fizzy tablet into a canister, close the lid and stand it lid-down.', tag: 'prac', parts: [
      { q: 'Explain why the lid eventually pops off.', m: 3, ms: ['the tablet reacts with the water to make (carbon dioxide) gas', 'gas builds up / more gas particles hit the walls', 'the pressure increases until the force on the lid is big enough to push it off'] },
      { q: 'Use ideas about forces to explain why the canister moves upwards.', m: 2, ms: ['canister pushes gas and water down; they push the canister up / thrust', 'thrust is bigger than weight / unbalanced upwards'] },
      { q: 'Give two safety precautions.', m: 2, ms: ['eye protection', 'stand back / do not lean over the canister / wait before approaching a canister that has not launched / launch in a clear space'] }
    ] },
    { q: 'Amir tests how the volume of water affects the height of the rocket. His results are shown. Water 5 ml: 1.2, 1.4, 1.3 m. Water 10 ml: 2.1, 1.9, 0.6 m. Water 15 ml: 2.4, 2.6, 2.5 m.', tag: 'data', parts: [
      { q: 'Identify the anomalous result.', m: 1, ms: ['0.6 m (at 10 ml)'] },
      { q: 'Calculate the mean height for 10 ml, ignoring the anomaly.', m: 2, ms: ['(2.1 + 1.9) ÷ 2', '= 2.0 m'] },
      { q: 'Write a conclusion for his results.', m: 1, ms: ['the more water (from 5 to 15 ml), the higher the rocket goes'] },
      { q: 'Suggest how Amir could measure the heights more accurately.', m: 1, ms: ['film against a height scale on a wall and pause the video at the top / use a larger scale / view from further away at the height of the peak'] }
    ] }
  ],
  sims: ['rocket'], gens: ['mean1']
});
