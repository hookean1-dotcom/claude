/* ==========================================================
   YEAR 7 · UNIT 6 · ENERGY
   ========================================================== */
TOPICS.push({
  id: '6.1', unit: '6', title: 'Energy stores', short: 'Where energy is stored',
  summary: 'Energy is measured in joules. It is stored in different ways — kinetic, gravitational potential, elastic, thermal, chemical, nuclear, magnetic and electrostatic stores. Energy is never created or destroyed; it is only moved between stores.',
  spec: [
    'I can name the energy stores and give an example of each',
    'I can state that energy is measured in joules (J) and kilojoules (kJ)',
    'I can identify which stores are filled or emptied in an everyday situation',
    'I can state the law of conservation of energy',
    '★ I can explain what makes the kinetic and gravitational potential stores bigger'
  ],
  learn: [
    { h: 'The energy stores', html: `
[[d:storeicons]]
<div class="tbl"><table><tr><th>Store</th><th>Energy is stored in…</th><th>Example</th></tr>
<tr><td><b>Kinetic</b></td><td>anything that is moving</td><td>a running dog, a moving car</td></tr>
<tr><td><b>Gravitational potential</b> (GPE)</td><td>an object raised up against gravity</td><td>a book on a high shelf, water behind a dam</td></tr>
<tr><td><b>Elastic potential</b></td><td>something stretched or squashed</td><td>a stretched elastic band, a wound-up spring</td></tr>
<tr><td><b>Thermal</b> (internal)</td><td>anything hot — the moving particles</td><td>a hot cup of tea, a radiator</td></tr>
<tr><td><b>Chemical</b></td><td>fuels, food and batteries</td><td>petrol, a sandwich, a battery</td></tr>
<tr><td><b>Nuclear</b></td><td>the nuclei of atoms</td><td>uranium in a power station; the Sun</td></tr>
<tr><td><b>Magnetic</b></td><td>magnets attracting or repelling</td><td>two magnets held apart</td></tr>
<tr><td><b>Electrostatic</b></td><td>charges attracting or repelling</td><td>a charged balloon; a thundercloud</td></tr></table></div>` },
    { h: 'Joules and conservation', html: `
<p>Energy is measured in <b>joules (J)</b>. 1000 J = 1 <b>kilojoule (kJ)</b>. Lifting an apple 1 metre takes about 1 J; a banana contains about 400 000 J (400 kJ) in its chemical store. Food labels often use kJ (or kilocalories).</p>
<div class="box def"><b class="lbl">Conservation of energy</b><p>Energy cannot be <b>created</b> or <b>destroyed</b>. It can only be <b>transferred</b> from one store to another. The total amount of energy is always the same.</p></div>
<p>When a ball is thrown up, energy moves from the kinetic store to the gravitational store and back again — the total stays the same (ignoring air resistance).</p>
[[d:k_stores]]` },
    { h: '★ Bigger stores', html: `
<ul><li><b>Kinetic store</b>: bigger for a greater <b>mass</b>, and much bigger for a greater <b>speed</b>. Doubling the speed gives <b>four times</b> the kinetic energy — which is why speeding cars are so dangerous.</li><li><b>Gravitational potential store</b>: bigger for a greater <b>mass</b>, a greater <b>height</b> and a stronger <b>gravity</b>: $"GPE" = m × g × h$.</li><li><b>Thermal store</b>: bigger for a greater <b>mass</b> and a higher <b>temperature</b> (see topic 6.3).</li></ul>` }
  ],
  eqs: [['1 "kJ" = 1000 "J"', 'kilojoules and joules']],
  worked: [
    { q: 'A child sits at the top of a slide, then slides down and stops at the bottom. Which stores are emptied and filled?', s: ['At the top: energy in the gravitational potential store.', 'Sliding down: GPE store empties, kinetic store fills; friction heats the slide and child (thermal store fills).', 'At the bottom, stopped: the energy has ended up in thermal stores of the child, slide and surroundings.'], a: 'GPE → kinetic → thermal' },
    { q: 'A battery-powered torch is switched on. Which store is emptied? Which stores end up with the energy?', s: ['The chemical store of the battery empties.', 'Energy is transferred electrically to the bulb, then by light and heating.', 'It ends up in the thermal store of the surroundings (after the light is absorbed).'], a: 'chemical → thermal store of surroundings' }
  ],
  pitfalls: ['Saying energy is “used up” — it is transferred to other stores, often the thermal store of the surroundings.', 'Calling light or sound a store — they are ways of transferring energy.', 'Saying food contains “calories” instead of energy in a chemical store.', 'Forgetting that thermal energy is stored in the moving particles.'],
  cards: [
    ['Unit of energy?', 'The joule (J).'],
    ['1 kJ = ?', '1000 J.'],
    ['Energy store of a moving object?', 'Kinetic.'],
    ['Energy store of an object raised up?', 'Gravitational potential.'],
    ['Energy store of a stretched elastic band?', 'Elastic potential.'],
    ['Energy store of food and fuels?', 'Chemical.'],
    ['Energy store of a hot object?', 'Thermal.'],
    ['Law of conservation of energy?', 'Energy cannot be created or destroyed, only transferred between stores.'],
    ['Name the eight energy stores.', 'Kinetic, gravitational potential, elastic potential, thermal, chemical, nuclear, magnetic, electrostatic.'],
    ['★ Doubling speed does what to kinetic energy?', 'Makes it four times bigger.']
  ],
  quiz: [
    { q: 'Energy is measured in', o: ['joules', 'newtons', 'watts', 'kilograms'], x: 'J.' },
    { q: 'A stretched bow stores energy in its', o: ['elastic potential store', 'kinetic store', 'chemical store', 'nuclear store'], x: 'Stretched or squashed.' },
    { q: 'Petrol stores energy in its', o: ['chemical store', 'thermal store', 'kinetic store', 'elastic store'], x: 'Fuels are chemical stores.' },
    { q: 'A plane flying high above the ground has energy in its', o: ['kinetic and gravitational potential stores', 'elastic store only', 'nuclear store only', 'magnetic store'], x: 'Moving and high up.' },
    { q: 'The law of conservation of energy says energy', o: ['cannot be created or destroyed', 'is always used up', 'can be made from nothing', 'is destroyed by friction'], x: 'It is only transferred.' },
    { q: '3.5 kJ is', o: ['3500 J', '350 J', '0.0035 J', '35 J'], x: '× 1000.' },
    { q: 'Which is NOT an energy store?', o: ['light', 'thermal', 'kinetic', 'chemical'], x: 'Light transfers energy; it is not a store.' },
    { q: 'The Sun’s energy comes from its', o: ['nuclear store', 'chemical store', 'elastic store', 'kinetic store'], x: 'Nuclear fusion.' },
    { q: 'A car doubles its speed. Its kinetic energy', o: ['becomes four times bigger', 'doubles', 'halves', 'stays the same'], x: 'KE depends on speed squared.', ch: 1 }
  ],
  exam: [
    { q: 'A girl stands on a diving board, then jumps and dives into the pool.', tag: '', parts: [
      { q: 'Name the energy store that is biggest when she is standing on the board.', m: 1, ms: ['gravitational potential'] },
      { q: 'Describe how energy is transferred between stores as she falls.', m: 2, ms: ['gravitational potential store decreases', 'kinetic store increases'] },
      { q: 'When she enters the water, she slows down and stops. Which store does the energy end up in?', m: 1, ms: ['thermal (of the water / surroundings)'] },
      { q: 'State the law of conservation of energy.', m: 1, ms: ['energy cannot be created or destroyed, only transferred (the total stays the same)'] }
    ] },
    { q: 'Complete: A torch battery stores energy in its ______ store. A moving bicycle has energy in its ______ store. A rubber band that is stretched stores energy in its ______ store.', m: 3, ms: ['chemical', 'kinetic', 'elastic (potential)'] }
  ],
  sims: ['k_energy'], gens: ['kj1']
});

TOPICS.push({
  id: '6.2', unit: '6', title: 'Energy transfers', short: 'Heating, forces, electricity and waves',
  summary: 'Energy moves between stores in four ways: by forces doing work (mechanically), electrically, by heating, and by waves such as light and sound. Some energy is always wasted, usually heating the surroundings.',
  spec: [
    'I can name the four ways energy is transferred: mechanically, electrically, by heating, by radiation (waves)',
    'I can draw an energy transfer diagram showing stores and transfers',
    'I can identify useful and wasted energy and explain where wasted energy goes',
    'I can investigate energy transfer between stores experimentally',
    '★ I can calculate efficiency as useful energy out ÷ total energy in'
  ],
  learn: [
    { h: 'Four ways energy is transferred', html: `
<ul><li><b>Mechanically</b> — a force moves something (doing <b>work</b>): kicking a ball, a crane lifting a load.</li><li><b>Electrically</b> — a current flows: a battery powering a motor.</li><li><b>By heating</b> — from hotter to colder objects: a hob heating a pan.</li><li><b>By radiation</b> — light, sound and other waves: the Sun warming the Earth, a speaker.</li></ul>
[[d:transferdiag]]
<p>An <b>energy transfer diagram</b> shows the stores as boxes and the transfers as arrows between them.</p>` },
    { h: 'Useful and wasted energy', html: `
[[d:k_sankey]]
<p>Most energy transfers are not perfect. <b>Useful energy</b> goes where we want it; <b>wasted energy</b> goes somewhere we do not want — usually <b>heating the surroundings</b> (and sometimes sound).</p>
<ul><li>A filament bulb: 100 J in → 10 J light (useful) + 90 J heating (wasted).</li><li>A car engine: chemical energy → kinetic (useful) + heating and sound (wasted).</li></ul>
<p>Wasted energy is not destroyed — it spreads out into the surroundings and becomes hard to use again. <b>Useful + wasted = total energy in.</b></p>
<p>We reduce waste by <b>lubricating</b> moving parts (less friction), <b>insulating</b> hot things, and using more efficient devices such as LED bulbs.</p>` },
    { h: 'Investigating energy transfer', html: `
<p><b>Bouncing ball:</b> drop a ball from 1.0 m and measure the height of the first bounce (film it against a metre rule). The bounce is lower because some energy is transferred to the thermal store and to sound on each bounce. Try different balls, or different drop heights.</p>
<p><b>Elastic band launcher:</b> stretch a band by different amounts and measure how far it launches a toy car — more stretch, more elastic energy, more kinetic energy.</p>
<div class="box why"><b class="lbl">★ Efficiency</b><p>$"efficiency" = @frac{"useful energy out"}{"total energy in"} × 100"%"$. The bulb above: 10 ÷ 100 × 100% = 10%. An LED might be 40% efficient. No device can be more than 100% efficient.</p></div>` }
  ],
  eqs: [['"total energy in" = "useful energy" + "wasted energy"', 'energy is conserved'], ['"efficiency" = @frac{"useful energy out"}{"total energy in"} × 100"%"', '★ efficiency']],
  worked: [
    { q: 'An electric kettle is supplied with 200 000 J. 180 000 J heats the water. How much is wasted, and where does it go?', s: ['Wasted = total − useful = 200 000 − 180 000', '= 20 000 J', 'It heats the kettle itself and the surrounding air (and some sound).'], a: '20 000 J, heating the surroundings' },
    { q: 'A motor is given 500 J and lifts a load, giving it 150 J of gravitational potential energy. Calculate its efficiency.', s: ['$"efficiency" = @frac{150}{500} × 100"%"$', '= 30%'], a: '30%' }
  ],
  pitfalls: ['Saying wasted energy disappears — it spreads out into the surroundings.', 'Mixing up stores (e.g. kinetic) and transfers (e.g. by heating).', 'Getting an efficiency above 100% — you have divided the wrong way.', 'Forgetting sound as a wasted transfer.'],
  cards: [
    ['Four ways energy is transferred?', 'Mechanically (forces), electrically, by heating, by radiation (waves).'],
    ['Where does most wasted energy go?', 'Heating the surroundings.'],
    ['Total energy in = ?', 'Useful energy + wasted energy.'],
    ['How can you reduce friction losses?', 'Lubricate moving parts.'],
    ['Why does a bouncing ball not return to its starting height?', 'Some energy is transferred to thermal and sound on each bounce.'],
    ['What does an energy transfer diagram show?', 'Stores as boxes, transfers as arrows.'],
    ['A bulb: 60 J in, 6 J light. Wasted?', '54 J.'],
    ['★ Efficiency equation?', 'useful energy out ÷ total energy in × 100%.']
  ],
  quiz: [
    { q: 'Energy from the Sun reaches Earth by', o: ['radiation (light waves)', 'electrically', 'mechanically', 'sound'], x: 'Waves can cross space.' },
    { q: 'A bulb uses 100 J and gives 20 J of light. The wasted energy is', o: ['80 J', '120 J', '20 J', '5 J'], x: '100 − 20.' },
    { q: 'Wasted energy usually ends up', o: ['heating the surroundings', 'destroyed', 'in the chemical store', 'turned back into electricity'], x: 'It spreads out.' },
    { q: 'Oiling a bicycle chain', o: ['reduces friction, so less energy is wasted', 'increases friction', 'adds energy', 'makes it heavier'], x: 'Lubrication.' },
    { q: 'A ball dropped from 1.0 m bounces to 0.7 m because', o: ['energy is transferred to thermal and sound stores', 'energy is destroyed', 'gravity changes', 'the ball gains mass'], x: 'Some energy is wasted.' },
    { q: 'A battery lighting a lamp transfers energy', o: ['electrically', 'mechanically', 'by heating only', 'magnetically'], x: 'A current flows.' },
    { q: 'Which is a store, not a transfer?', o: ['kinetic', 'by heating', 'electrically', 'by radiation'], x: 'Kinetic is a store.' },
    { q: 'A device takes in 400 J and gives 100 J of useful energy. Its efficiency is', o: ['25%', '4%', '300%', '75%'], x: '100 ÷ 400 × 100.', ch: 1 }
  ],
  exam: [
    { q: 'A student drops a tennis ball from a height of 100 cm and measures how high it bounces.', tag: 'prac', parts: [
      { q: 'Describe the energy transfers from when the ball is dropped until it hits the ground.', m: 2, ms: ['gravitational potential store decreases', 'kinetic store increases'] },
      { q: 'The ball bounces to 60 cm. Explain why it does not return to 100 cm.', m: 2, ms: ['some energy is transferred to the thermal store (of ball/floor) / by sound', 'so less energy is available for the gravitational potential store'] },
      { q: 'Suggest how she could measure the bounce height accurately.', m: 1, ms: ['film against a metre rule and pause at the top / view at eye level / repeat and take a mean'] }
    ] },
    { q: 'An LED bulb is given 50 J of electrical energy. It gives out 20 J of light.', tag: 'calc', parts: [
      { q: 'Calculate the wasted energy.', m: 1, ms: ['30 J'] },
      { q: 'Name the form in which the energy is wasted.', m: 1, ms: ['heating (the surroundings) / thermal'] },
      { q: 'Calculate the efficiency of the LED bulb.', m: 2, ms: ['20 ÷ 50 × 100', '= 40%'], ch: 1 }
    ] }
  ],
  sims: ['k_sankey', 'bounce'], gens: ['waste1', 'eff1']
});

TOPICS.push({
  id: '6.3', unit: '6', title: 'Thermal energy and temperature', short: 'Not the same thing',
  summary: 'Temperature tells you how hot something is — how fast its particles move on average. Thermal energy is the total energy in all its moving particles, so it depends on the mass too. A bath of warm water has more thermal energy than a cup of boiling tea.',
  spec: [
    'I can explain the difference between temperature (°C) and thermal energy (J)',
    'I can explain using particles why a larger mass at the same temperature has more thermal energy',
    'I can explain that energy is transferred by heating from hotter to colder objects until they reach the same temperature',
    'I can measure temperature with a thermometer and read it correctly',
    '★ I can explain why the same energy raises the temperature of different amounts or materials by different amounts'
  ],
  learn: [
    { h: 'Temperature vs thermal energy', html: `
[[d:bathcup]]
<div class="tbl"><table><tr><th></th><th>Temperature</th><th>Thermal energy</th></tr><tr><td>What it tells you</td><td>how hot or cold something is</td><td>how much energy is in the thermal store</td></tr><tr><td>Particles</td><td>the <b>average</b> energy of each particle (how fast they move)</td><td>the <b>total</b> energy of all the particles</td></tr><tr><td>Unit</td><td>degrees Celsius (°C)</td><td>joules (J)</td></tr><tr><td>Measured with</td><td>a thermometer</td><td>calculated, not measured directly</td></tr><tr><td>Depends on mass?</td><td>no</td><td>yes</td></tr></table></div>
<p>A spark from a sparkler is about 1000 °C, but it hardly hurts because it has <b>tiny mass</b> — very little thermal energy. A warm bath at 40 °C has a much <b>lower temperature</b> than a cup of tea at 90 °C, but far <b>more thermal energy</b>, because it has many more particles.</p>` },
    { h: 'Heating: from hot to cold', html: `
<p>Energy is transferred by <b>heating</b> from a <b>hotter</b> object to a <b>colder</b> one. The hot object cools down; the cold one warms up. This continues until they reach the <b>same temperature</b> (thermal equilibrium).</p>
<p>Cold is not a “thing” that moves: when you hold an ice cube, energy flows <b>from your hand into the ice</b>, so your hand feels cold.</p>
<p>The <b>bigger the temperature difference</b>, the faster the energy transfer — so a cup of tea cools quickly at first, then more slowly.</p>` },
    { h: 'Measuring temperature', html: `
<p>Use a <b>thermometer</b> (liquid-in-glass or digital). Read a liquid thermometer at <b>eye level</b>, with the bulb fully in the liquid, and wait for the reading to stop changing. Stir the water so it is the same temperature all through.</p>
<div class="box why"><b class="lbl">★ Same energy, different temperature rise</b><p>Give 10 000 J to 1 kg of water and it warms by about 2.4 °C; give the same energy to 0.5 kg and it warms twice as much, by 4.8 °C. The energy is shared among fewer particles. Different materials also need different amounts of energy to warm up: water needs about 4200 J to warm 1 kg by 1 °C, but aluminium only 900 J. That is why a metal spoon in the sun gets hot much faster than a bowl of water.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'A swimming pool is at 28 °C and a mug of cocoa is at 70 °C. Which has the higher temperature? Which has more thermal energy? Explain.', s: ['The cocoa has the higher temperature (70 °C > 28 °C): its particles move faster on average.', 'The pool has far more thermal energy.', 'It has a huge mass — many more particles — so the total energy is much bigger even though each particle has less.'], a: 'cocoa hotter; pool more thermal energy' },
    { q: 'A hot 80 °C metal block is dropped into 20 °C water. Describe what happens.', s: ['Energy transfers by heating from the block (hotter) to the water (colder).', 'The block cools and the water warms.', 'This stops when they are both at the same temperature (somewhere between 20 °C and 80 °C).'], a: 'energy flows block → water until equal temperatures' }
  ],
  pitfalls: ['Using “heat” and “temperature” as the same thing.', 'Giving thermal energy in °C, or temperature in J.', 'Saying “cold flows into” something — energy flows from hot to cold.', 'Saying the bigger object is always hotter.'],
  cards: [
    ['What does temperature measure?', 'How hot something is — the average energy of its particles.'],
    ['Unit of temperature?', 'Degrees Celsius (°C).'],
    ['What is thermal energy?', 'The total energy of all the particles in an object.'],
    ['Unit of thermal energy?', 'Joules (J).'],
    ['Which has more thermal energy: a bath at 40 °C or a cup at 80 °C?', 'The bath — much more mass.'],
    ['Which way does energy flow by heating?', 'From hotter to colder objects.'],
    ['When does heating stop?', 'When both objects reach the same temperature.'],
    ['Why does a sparkler spark not burn you badly?', 'Very high temperature but tiny mass, so very little thermal energy.'],
    ['★ Why does a metal spoon heat up faster than water?', 'Metal needs less energy per kg to raise its temperature by 1 °C.']
  ],
  quiz: [
    { q: 'Temperature is measured in', o: ['°C', 'J', 'N', 'kg'], x: 'Degrees Celsius.' },
    { q: 'Thermal energy is measured in', o: ['joules', '°C', 'newtons', 'metres'], x: 'It is energy.' },
    { q: 'Which has the most thermal energy?', o: ['a swimming pool at 25 °C', 'a cup of tea at 80 °C', 'a sparkler spark at 1000 °C', 'a kettle of water at 100 °C'], x: 'Huge mass.' },
    { q: 'Energy is transferred by heating from', o: ['hotter to colder objects', 'colder to hotter objects', 'bigger to smaller objects', 'solids to gases only'], x: 'Hot → cold.' },
    { q: 'Temperature tells us about the', o: ['average energy of the particles', 'total energy of the particles', 'mass of the object', 'number of particles'], x: 'Average, not total.' },
    { q: 'A 60 °C drink is left in a 20 °C room. It will', o: ['cool until it reaches 20 °C', 'cool to 0 °C', 'stay at 60 °C', 'warm the room to 60 °C'], x: 'Until equal temperatures.' },
    { q: 'When you hold an ice cube, your hand feels cold because', o: ['energy flows from your hand to the ice', 'cold flows into your hand', 'the ice makes energy', 'the ice has no energy'], x: 'Hot → cold.' },
    { q: 'The same energy is given to 1 kg and 2 kg of water. The 2 kg rises in temperature by', o: ['half as much', 'twice as much', 'the same amount', 'four times as much'], x: 'Shared among twice as many particles.', ch: 1 }
  ],
  exam: [
    { q: 'A bath contains 100 kg of water at 40 °C. A cup contains 0.25 kg of tea at 85 °C.', tag: 'ext', parts: [
      { q: 'Which has the higher temperature?', m: 1, ms: ['the tea'] },
      { q: 'Explain which contains more thermal energy.', m: 3, ms: ['the bath', 'it has a much greater mass / many more particles', 'thermal energy is the total energy of all the particles'] },
      { q: 'The tea is left in a room at 20 °C. Describe what happens to its temperature and explain why.', m: 3, ms: ['temperature decreases (cools)', 'energy is transferred by heating from the tea to the (colder) surroundings', 'until the tea reaches 20 °C / room temperature'] }
    ] },
    { q: 'Explain, in terms of particles, what happens when a cold spoon is placed in hot soup.', tag: 'ext', m: 3, ms: ['particles in the soup move faster / have more energy than those in the spoon', 'they collide with / pass energy to the spoon’s particles, which vibrate faster', 'spoon warms up and soup cools until they are at the same temperature'] }
  ],
  sims: ['thermal'], gens: []
});

TOPICS.push({
  id: '6.4', unit: '6', title: 'The physics of rollercoasters', short: 'GPE, kinetic and thermal energy',
  summary: 'A rollercoaster is hauled up the first hill, filling its gravitational potential store. As it swoops down, that energy moves to the kinetic store and back again. Friction and air resistance waste energy by heating, so each hill must be lower than the one before.',
  spec: [
    'I can describe the energy transfers on a rollercoaster between the gravitational potential, kinetic and thermal stores',
    'I can explain why the first hill is the highest',
    'I can explain where the car is fastest and slowest',
    'I can explain how friction and air resistance waste energy and how brakes stop the ride',
    '★ I can calculate the gravitational potential energy using GPE = m × g × h and predict speeds'
  ],
  learn: [
    { h: 'A ride through the energy stores', html: `
[[d:coaster]]
<ol><li><b>Lift hill:</b> a motor and chain pull the cars to the top. Energy is transferred <b>electrically</b> then <b>mechanically</b> into the <b>gravitational potential store</b> of the cars.</li><li><b>First drop:</b> GPE store empties, <b>kinetic store</b> fills — the cars speed up. They are <b>fastest at the lowest point</b>.</li><li><b>Next hill:</b> kinetic store empties, GPE store fills again — the cars slow down as they climb. They are <b>slowest at the top</b> of each hill.</li><li>All the way, <b>friction</b> (wheels on track) and <b>air resistance</b> transfer energy to the <b>thermal store</b> of the track and air, and some to sound.</li><li><b>Brakes</b> at the end use friction (or magnets) to transfer the remaining kinetic energy to the thermal store.</li></ol>` },
    { h: 'Why the first hill is the highest', html: `
<p>The cars get all their energy at the lift hill; after that, there is no motor. Because energy is wasted along the way, the cars <b>never have enough energy to climb higher</b> than the first hill. Each later hill (and loop) must be <b>lower</b>, with some energy to spare, or the cars would stop and roll back.</p>
<div class="box tip"><b class="lbl">Designers’ tricks</b><p>Smooth, well-oiled wheels and streamlined cars reduce waste. Some modern coasters use launch motors (linear motors) instead of lift hills to fill the kinetic store directly.</p></div>` },
    { h: '★ Calculating energy on a coaster', html: `
<div class="box def"><b class="lbl">Gravitational potential energy</b><p>$"GPE" = m × g × h$ &nbsp; (J = kg × N/kg × m)</p></div>
<p>A 500 kg car at the top of a 40 m hill: GPE = 500 × 10 × 40 = <b>200 000 J</b>. At the bottom, ignoring friction, all of this is kinetic energy. If 50 000 J is wasted by friction on the way down, there is 150 000 J of kinetic energy at the bottom.</p>
<p>The kinetic energy depends on mass and speed: $"KE" = @frac{1}{2} × m × v^2$. For the car above with no losses: $v^2 = 2 × 200 000 ÷ 500 = 800$, so v ≈ 28 m/s (about 63 mph)!</p>` }
  ],
  eqs: [['"GPE" = m × g × h', '★ gravitational potential energy (J)'], ['"KE" = @frac{1}{2} × m × v^2', '★ kinetic energy (J)']],
  worked: [
    { q: 'Where on a rollercoaster is the car fastest? Explain using energy stores.', s: ['At the lowest point of the track.', 'Here the gravitational potential store is at its smallest.', 'So the most energy has moved into the kinetic store → highest speed.'], a: 'at the lowest point' },
    { q: 'A 600 kg coaster car is at the top of a 30 m hill (g = 10 N/kg). Calculate its GPE. If 40 000 J is wasted on the way down, how much kinetic energy does it have at the bottom?', s: ['$"GPE" = m × g × h = 600 × 10 × 30$', '= 180 000 J', 'KE at bottom = 180 000 − 40 000 = 140 000 J'], a: '180 000 J; 140 000 J' }
  ],
  pitfalls: ['Saying the car is fastest at the top.', 'Saying energy is lost or used up — it is transferred to thermal stores.', 'Forgetting the role of the motor on the lift hill.', 'Making later hills higher than the first in a design question.'],
  cards: [
    ['Store filled on the lift hill?', 'Gravitational potential.'],
    ['Where is a coaster car fastest?', 'At the lowest point.'],
    ['Where is it slowest?', 'At the top of a hill.'],
    ['Why must each hill be lower than the first?', 'Energy is wasted by friction and air resistance, so there is less energy for each later hill.'],
    ['Where does wasted energy go on a coaster?', 'The thermal store of the track and the air (and sound).'],
    ['How do brakes stop the ride?', 'Friction transfers kinetic energy to the thermal store.'],
    ['★ GPE equation?', '$"GPE" = m × g × h$'],
    ['★ GPE of a 100 kg car 20 m up?', '100 × 10 × 20 = 20 000 J.']
  ],
  quiz: [
    { q: 'As a coaster car rolls down a hill, energy moves from the', o: ['GPE store to the kinetic store', 'kinetic store to the GPE store', 'thermal store to the kinetic store', 'chemical store to the GPE store'], x: 'Losing height, gaining speed.' },
    { q: 'Why is the first hill the tallest?', o: ['energy is wasted along the ride, so the cars cannot climb higher later', 'to make the ride longer', 'because the motor is at the end', 'gravity is stronger at the start'], x: 'Friction and air resistance waste energy.' },
    { q: 'A car is slowest', o: ['at the top of a hill', 'at the bottom of a dip', 'half way down', 'on the brakes run only'], x: 'Most energy in the GPE store.' },
    { q: 'Friction on the coaster transfers energy to the', o: ['thermal store', 'chemical store', 'nuclear store', 'GPE store'], x: 'It heats the track and wheels.' },
    { q: 'The motor on the lift hill fills the', o: ['gravitational potential store', 'elastic store', 'chemical store', 'magnetic store'], x: 'It raises the cars.' },
    { q: 'A car at the top of a hill has 50 000 J of GPE. At the bottom, 8000 J has been wasted. The kinetic energy is', o: ['42 000 J', '58 000 J', '50 000 J', '8000 J'], x: '50 000 − 8000.' },
    { q: 'Which change would waste less energy?', o: ['smoother, oiled wheels', 'rougher track', 'bigger, boxier cars', 'adding more brakes'], x: 'Less friction.' },
    { q: 'GPE of a 400 kg car on a 25 m hill (g = 10 N/kg)?', o: ['100 000 J', '10 000 J', '4000 J', '425 J'], x: '400 × 10 × 25.', ch: 1 }
  ],
  exam: [
    { q: 'The diagram shows a rollercoaster track: A (top of the lift hill, 40 m), B (bottom of the first drop, 0 m), C (top of the second hill, 25 m), D (the brakes at the end).', tag: 'ext', parts: [
      { q: 'Describe the energy transfer as the car travels from A to B.', m: 2, ms: ['gravitational potential store decreases', 'kinetic store increases (car speeds up)'] },
      { q: 'At which point is the car travelling fastest?', m: 1, ms: ['B'] },
      { q: 'Explain why hill C must be lower than hill A.', m: 3, ms: ['energy is transferred / wasted to thermal stores by friction and air resistance', 'so the car has less total energy after A', 'so it cannot reach the height of A (would stop / roll back)'] },
      { q: 'Describe the energy transfer at D.', m: 2, ms: ['brakes use friction', 'kinetic store → thermal store (of brakes/surroundings)'] }
    ] },
    { q: 'A coaster car of mass 500 kg is pulled to the top of a 50 m lift hill (g = 10 N/kg).', tag: 'calc', ch: 1, parts: [
      { q: 'Calculate the gain in gravitational potential energy.', m: 2, ms: ['500 × 10 × 50', '= 250 000 J'] },
      { q: 'At the bottom of the first drop the car has 210 000 J of kinetic energy. Calculate the energy wasted.', m: 1, ms: ['40 000 J'] }
    ] }
  ],
  sims: ['coaster'], gens: ['gpe1', 'coast1']
});
