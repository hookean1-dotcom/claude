/* ==========================================================
   YEAR 7 · UNIT 3 · MASS AND WEIGHT  (g = 10 N/kg on Earth)
   ========================================================== */
TOPICS.push({
  id: '3.1', unit: '3', title: 'Mass and weight are different', short: 'Kilograms and newtons',
  summary: 'Mass is the amount of matter in an object, measured in kilograms. Weight is the force of gravity on that mass, measured in newtons. Your mass is the same everywhere; your weight depends on where you are.',
  spec: [
    'I can define mass as the amount of matter in an object, measured in kilograms (kg)',
    'I can define weight as the force of gravity on an object, measured in newtons (N)',
    'I can explain that mass does not change from place to place but weight does',
    'I can describe how to measure mass (balance) and weight (newton meter)',
    '★ I can explain why astronauts are “weightless” in orbit'
  ],
  learn: [
    { h: 'Mass', html: `
<p><b>Mass</b> is the <b>amount of matter</b> (stuff) in an object. It is measured in <b>kilograms (kg)</b> or grams (g); 1 kg = 1000 g.</p>
<p>Mass does <b>not</b> depend on where you are. A 50 kg student has a mass of 50 kg on Earth, on the Moon and floating in space. We measure mass with a <b>balance</b> (scales).</p>` },
    { h: 'Weight', html: `
[[d:massweight]]
<p><b>Weight</b> is a <b>force</b> — the pull of <b>gravity</b> on an object’s mass. Like all forces it is measured in <b>newtons (N)</b>, using a <b>newton meter</b>. It always acts <b>downwards</b>, towards the centre of the Earth (or planet).</p>
<p>Weight depends on the <b>gravitational field strength</b>, g, where you are. On Earth each kilogram is pulled with a force of about <b>10 N</b>, so g = 10 N/kg. On the Moon, g is only 1.6 N/kg, so you weigh about one-sixth as much — but your mass is the same.</p>
<div class="tbl"><table><tr><th></th><th>Mass</th><th>Weight</th></tr><tr><td>What it is</td><td>amount of matter</td><td>force of gravity on the matter</td></tr><tr><td>Unit</td><td>kilogram (kg)</td><td>newton (N)</td></tr><tr><td>Measured with</td><td>a balance</td><td>a newton meter</td></tr><tr><td>Changes on the Moon?</td><td>no</td><td>yes — it gets smaller</td></tr></table></div>` },
    { h: 'Everyday language vs physics', html: `
<p>People say “I weigh 50 kilograms”. In physics this is wrong — 50 kg is your <b>mass</b>. Your <b>weight</b> on Earth would be 50 × 10 = <b>500 N</b>. Bathroom scales actually measure the force you push down with, then divide by 10 to show you your mass in kg.</p>
<div class="box why"><b class="lbl">★ Weightless astronauts?</b><p>Astronauts on the International Space Station are only about 400 km up, where gravity is still about 90% as strong as on the ground. They float because they and the station are <b>falling together</b> around the Earth — in orbit. Nothing pushes up on them, so they <i>feel</i> weightless, but gravity is still pulling on them.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'An astronaut has a mass of 80 kg on Earth. What is her mass on the Moon? Will her weight be bigger or smaller there?', s: ['Mass is the amount of matter, so it does not change: 80 kg.', 'Gravity on the Moon is weaker (1.6 N/kg rather than 10 N/kg).', 'So her weight is smaller on the Moon.'], a: '80 kg; weight smaller' },
    { q: 'Which is a mass and which is a weight: (a) 3 kg of potatoes, (b) 30 N, (c) 250 g of butter?', s: ['(a) kg is a unit of mass → mass.', '(b) N is a unit of force → weight.', '(c) g (grams) is a unit of mass → mass.'], a: '(a) mass (b) weight (c) mass' }
  ],
  pitfalls: ['Giving weight in kilograms — weight is a force, in newtons.', 'Saying mass changes on the Moon.', 'Saying there is no gravity in space.', 'Mixing up g (grams) with g (gravitational field strength) — read the question carefully.'],
  cards: [
    ['What is mass?', 'The amount of matter in an object.'],
    ['Unit of mass?', 'Kilogram (kg).'],
    ['What is weight?', 'The force of gravity on an object.'],
    ['Unit of weight?', 'Newton (N).'],
    ['What measures mass?', 'A balance.'],
    ['What measures weight?', 'A newton meter.'],
    ['Does your mass change on the Moon?', 'No — the amount of matter is the same.'],
    ['Does your weight change on the Moon?', 'Yes — it is smaller, because gravity is weaker.'],
    ['Gravitational field strength on Earth?', 'About 10 N/kg.'],
    ['★ Why do astronauts on the ISS float?', 'They and the station are in free fall together around the Earth; gravity still acts.']
  ],
  quiz: [
    { q: 'Mass is measured in', o: ['kilograms', 'newtons', 'metres', 'newtons per kilogram'], x: 'Mass is the amount of matter.' },
    { q: 'Weight is measured in', o: ['newtons', 'kilograms', 'grams', 'joules'], x: 'Weight is a force.' },
    { q: 'Which piece of equipment measures weight?', o: ['newton meter', 'balance', 'ruler', 'measuring cylinder'], x: 'It measures force.' },
    { q: 'A 60 kg astronaut goes to the Moon. Her mass there is', o: ['60 kg', '10 kg', '0 kg', '600 kg'], x: 'Mass does not change.' },
    { q: 'On the Moon, your weight is', o: ['smaller than on Earth', 'bigger than on Earth', 'the same as on Earth', 'zero'], x: 'Gravity is weaker there.' },
    { q: 'Weight is the force caused by', o: ['gravity', 'friction', 'air resistance', 'magnetism'], x: 'The pull of the planet on the mass.' },
    { q: 'Which statement is correct?', o: ['“The bag has a mass of 5 kg.”', '“The bag has a weight of 5 kg.”', '“The bag has a mass of 50 N.”', '“The bag weighs 5 kg of force.”'], x: 'kg is for mass; N is for weight.' },
    { q: 'Gravitational field strength on Earth is about', o: ['10 N/kg', '1 N/kg', '100 N/kg', '1.6 N/kg'], x: 'Each kg weighs about 10 N.' },
    { q: 'Astronauts on the space station float because', o: ['they are falling around the Earth with the station', 'there is no gravity in space', 'the station has no air', 'they have no mass'], x: 'Gravity still acts — they are in orbit.', ch: 1 }
  ],
  exam: [
    { q: 'Mass and weight are often confused.', tag: '', parts: [
      { q: 'Define mass and give its unit.', m: 2, ms: ['the amount of matter (stuff) in an object', 'kilograms / kg'] },
      { q: 'Define weight and give its unit.', m: 2, ms: ['the force of gravity on an object', 'newtons / N'] },
      { q: 'An astronaut travels from the Earth to the Moon. Describe and explain what happens to her mass and her weight.', m: 3, ms: ['mass stays the same', 'because the amount of matter does not change', 'weight decreases because gravity / gravitational field strength is weaker on the Moon'] }
    ] },
    { q: 'Name the piece of equipment you would use to measure (a) the mass of a stone, (b) the weight of the stone.', m: 2, ms: ['(a) balance / scales', '(b) newton meter / force meter'] }
  ],
  sims: ['planets'], gens: []
});

TOPICS.push({
  id: '3.2', unit: '3', title: 'Calculating weight', short: 'W = m × g',
  summary: 'Weight = mass × gravitational field strength. On Earth g = 10 N/kg, so every kilogram weighs 10 N. You can rearrange the equation to find mass from weight.',
  spec: [
    'I can recall and use weight = mass × gravitational field strength (W = m × g)',
    'I can use g = 10 N/kg on Earth',
    'I can convert grams to kilograms before calculating weight',
    'I can rearrange the equation to find mass or g',
    '★ I can show that weight is proportional to mass using a graph'
  ],
  learn: [
    { h: 'The weight equation', html: `
<div class="box def"><b class="lbl">Learn this</b><p>$"weight" = "mass" × "gravitational field strength"$ &nbsp; &nbsp; $W = m × g$</p><p>W in newtons (N) · m in kilograms (kg) · g in newtons per kilogram (N/kg)</p></div>
<p>On Earth, <b>g = 10 N/kg</b>. So a 5 kg bag weighs 5 × 10 = 50 N, and a 60 kg person weighs 600 N.</p>
<div class="box tip"><b class="lbl">Grams first!</b><p>Mass must be in <b>kilograms</b>. 250 g = 250 ÷ 1000 = 0.25 kg, so it weighs 0.25 × 10 = 2.5 N. A 100 g apple weighs about 1 N.</p></div>` },
    { h: 'Rearranging', html: `
[[d:tri_weight]]
<p>Cover the quantity you want:</p><ul><li>$W = m × g$</li><li>$m = @frac{W}{g}$ — e.g. a weight of 350 N on Earth means a mass of 350 ÷ 10 = 35 kg</li><li>$g = @frac{W}{m}$ — e.g. a 2 kg mass weighing 7.4 N means g = 3.7 N/kg (you are on Mars!)</li></ul>` },
    { h: '★ Weight is proportional to mass', html: `
[[d:wmgraph]]
<p>If you hang 100 g masses on a newton meter one at a time and plot weight against mass, you get a <b>straight line through the origin</b>. Double the mass → double the weight: weight is <b>proportional</b> to mass. The <b>gradient</b> of the line is g.</p>` }
  ],
  eqs: [['W = m × g', 'weight (N) = mass (kg) × gravitational field strength (N/kg)'], ['m = @frac{W}{g}', 'mass from weight']],
  worked: [
    { q: 'Calculate the weight of a 45 kg student on Earth (g = 10 N/kg).', s: ['$W = m × g$', '$W = 45 × 10$', '$W = 450 "N"$'], a: '450 N' },
    { q: 'A bag of sugar has a mass of 500 g. Calculate its weight on Earth.', s: ['Convert: 500 g = 0.5 kg', '$W = 0.5 × 10$', '$W = 5 "N"$'], a: '5 N' },
    { q: 'A crate weighs 1200 N on Earth. What is its mass?', s: ['$m = @frac{W}{g}$', '$m = @frac{1200}{10}$', '$m = 120 "kg"$'], a: '120 kg' }
  ],
  pitfalls: ['Forgetting to convert grams to kilograms.', 'Dividing when you should multiply — check: weight in N is always a bigger number than mass in kg on Earth.', 'Leaving out the unit, or giving weight in kg.', 'Using g = 10 on another planet — use that planet’s value.'],
  cards: [
    ['Weight equation?', '$W = m × g$ (weight = mass × gravitational field strength).'],
    ['g on Earth?', '10 N/kg.'],
    ['Weight of 1 kg on Earth?', '10 N.'],
    ['Weight of 100 g on Earth?', '1 N (0.1 kg × 10).'],
    ['Mass from weight?', '$m = W ÷ g$'],
    ['Weight of a 70 kg person on Earth?', '700 N.'],
    ['Convert 750 g to kg.', '0.75 kg.'],
    ['★ Shape of a weight–mass graph?', 'Straight line through the origin — weight is proportional to mass; gradient = g.']
  ],
  quiz: [
    { q: 'The weight of a 3 kg mass on Earth (g = 10 N/kg) is', o: ['30 N', '3 N', '0.3 N', '13 N'], x: '3 × 10.' },
    { q: 'An object weighs 80 N on Earth. Its mass is', o: ['8 kg', '800 kg', '80 kg', '0.8 kg'], x: '80 ÷ 10.' },
    { q: 'What is 400 g in kilograms?', o: ['0.4 kg', '4 kg', '40 kg', '0.04 kg'], x: '÷ 1000.' },
    { q: 'The weight of a 200 g apple on Earth is', o: ['2 N', '2000 N', '20 N', '0.2 N'], x: '0.2 kg × 10.' },
    { q: 'Which equation is correct?', o: ['W = m × g', 'W = m ÷ g', 'm = W × g', 'g = m × W'], x: 'Weight = mass × g.' },
    { q: 'A 50 kg student’s weight on Earth is', o: ['500 N', '50 N', '5 N', '5000 N'], x: '50 × 10.' },
    { q: 'The unit of gravitational field strength is', o: ['N/kg', 'kg/N', 'N', 'kg'], x: 'Newtons per kilogram.' },
    { q: 'A 4 kg mass weighs 14.8 N on a planet. The value of g there is', o: ['3.7 N/kg', '59.2 N/kg', '10 N/kg', '0.27 N/kg'], x: '14.8 ÷ 4.', ch: 1 }
  ],
  exam: [
    { q: 'A student has a mass of 52 kg. g on Earth = 10 N/kg.', tag: 'calc', parts: [
      { q: 'Write down the equation that links weight, mass and gravitational field strength.', m: 1, ms: ['weight = mass × gravitational field strength (W = mg)'] },
      { q: 'Calculate the student’s weight on Earth.', m: 2, ms: ['52 × 10', '= 520 N'] },
      { q: 'Her school bag weighs 60 N. Calculate its mass.', m: 2, ms: ['60 ÷ 10', '= 6 kg'] }
    ] },
    { q: 'A student hangs 100 g masses on a newton meter and records the weight. 100 g → 1.0 N; 200 g → 2.0 N; 300 g → 3.0 N; 400 g → 4.0 N.', tag: 'graph', parts: [
      { q: 'Describe the relationship between mass and weight.', m: 2, ms: ['as mass increases, weight increases', 'weight is proportional to mass / doubles when mass doubles'] },
      { q: 'Predict the weight of 650 g.', m: 1, ms: ['6.5 N'] },
      { q: 'Use the results to show that g = 10 N/kg.', m: 2, ms: ['e.g. 400 g = 0.4 kg; g = W ÷ m = 4.0 ÷ 0.4', '= 10 N/kg'], ch: 1 }
    ] }
  ],
  sims: ['planets'], gens: ['wt1', 'wt2', 'wt3']
});

TOPICS.push({
  id: '3.3', unit: '3', title: 'Weight on other planets', short: 'Gravitational field strength across the Solar System',
  summary: 'Gravitational field strength is different on each planet and moon, so your weight changes even though your mass does not. Bigger, more massive planets usually have a stronger pull.',
  spec: [
    'I can explain that g is different on different planets and moons',
    'I can calculate weight on another planet using its value of g',
    'I can explain that g depends on the mass of the planet (and how far you are from its centre)',
    'I can compare weights on different planets',
    '★ I can explain why it is easier to launch a rocket from the Moon than from the Earth'
  ],
  learn: [
    { h: 'g around the Solar System', html: `
[[d:gbars]]
<div class="tbl"><table><tr><th>Place</th><th>g (N/kg)</th><th>Weight of a 50 kg student</th></tr>
<tr><td>Moon</td><td>1.6</td><td>80 N</td></tr><tr><td>Mercury</td><td>3.7</td><td>185 N</td></tr><tr><td>Mars</td><td>3.7</td><td>185 N</td></tr><tr><td>Venus</td><td>8.9</td><td>445 N</td></tr><tr><td>Earth</td><td>10 (9.8)</td><td>500 N</td></tr><tr><td>Saturn</td><td>10.4</td><td>520 N</td></tr><tr><td>Neptune</td><td>11</td><td>550 N</td></tr><tr><td>Jupiter</td><td>25</td><td>1250 N</td></tr></table></div>
<p>(Gas giants have no solid surface; these are the values at the cloud tops.)</p>` },
    { h: 'What decides g?', html: `
<ul><li><b>Mass of the planet</b> — more mass, stronger gravity. Jupiter has over 300 times the Earth’s mass, so g is 2.5 times Earth’s.</li><li><b>Distance from the centre</b> — gravity gets weaker the further away you are. That is why Saturn, although it is 95 times more massive than Earth, has a surface g similar to ours: it is much wider, so its cloud tops are far from its centre.</li></ul>
<p>Out in deep space, far from any planet or star, g is almost zero — so you would be almost weightless, but your mass would still be the same.</p>` },
    { h: 'Calculating weight on another planet', html: `
<p>Use the same equation, $W = m × g$, but with <b>that planet’s value of g</b>.</p>
<div class="box why"><b class="lbl">★ Why launch from the Moon?</b><p>On the Moon a rocket weighs only about one-sixth of its weight on Earth, and there is no air resistance. So much less thrust — and fuel — is needed to lift off. That is why the Apollo lunar module could leave the Moon with a small engine, while it took the huge Saturn V rocket to leave Earth.</p></div>` }
  ],
  eqs: [['W = m × g', 'use the value of g for that planet']],
  worked: [
    { q: 'A 70 kg astronaut stands on Mars (g = 3.7 N/kg). Calculate her weight.', s: ['$W = m × g$', '$W = 70 × 3.7$', '$W = 259 "N"$'], a: '259 N' },
    { q: 'A rover weighs 1800 N on Earth. What does it weigh on the Moon (g = 1.6 N/kg)?', s: ['Mass first: $m = W ÷ g = 1800 ÷ 10 = 180 "kg"$', 'On the Moon: $W = 180 × 1.6$', '$W = 288 "N"$'], a: '288 N' }
  ],
  pitfalls: ['Changing the mass when moving to another planet — only the weight changes.', 'Using g = 10 N/kg for other planets.', 'Thinking bigger planets always have bigger g — distance from the centre matters too.', 'Saying g is zero in space near the Earth — it is only zero very far from everything.'],
  cards: [
    ['g on the Moon?', 'About 1.6 N/kg.'],
    ['g on Mars?', 'About 3.7 N/kg.'],
    ['g on Jupiter?', 'About 25 N/kg.'],
    ['What two things affect g on a planet?', 'The planet’s mass and the distance from its centre.'],
    ['Weight of a 10 kg mass on the Moon?', '16 N.'],
    ['Why is Saturn’s g similar to Earth’s despite its huge mass?', 'Its cloud tops are much further from its centre.'],
    ['What happens to your mass on Jupiter?', 'Nothing — it stays the same.'],
    ['★ Why is it easier to launch from the Moon?', 'Much smaller weight (weaker gravity) and no air resistance, so less thrust is needed.']
  ],
  quiz: [
    { q: 'On which of these would you weigh the most?', o: ['Jupiter', 'Earth', 'Mars', 'the Moon'], x: 'g = 25 N/kg.' },
    { q: 'A 30 kg dog on the Moon (g = 1.6 N/kg) weighs', o: ['48 N', '300 N', '18.75 N', '30 N'], x: '30 × 1.6.' },
    { q: 'A 50 kg student on Mars (g = 3.7 N/kg) has a mass of', o: ['50 kg', '185 kg', '13.5 kg', '500 kg'], x: 'Mass never changes.' },
    { q: 'The value of g on a planet depends on', o: ['its mass and the distance from its centre', 'its colour', 'its distance from the Sun', 'how fast it spins only'], x: 'More mass → stronger pull; further away → weaker.' },
    { q: 'A robot weighs 400 N on Earth. Its weight on the Moon is', o: ['64 N', '400 N', '2500 N', '40 N'], x: 'mass 40 kg × 1.6.' },
    { q: 'An 80 kg astronaut on Jupiter (g = 25 N/kg) would weigh', o: ['2000 N', '800 N', '105 N', '3.2 N'], x: '80 × 25.' },
    { q: 'Far out in deep space, far from any star or planet, your weight would be', o: ['almost zero', 'the same as on Earth', 'much bigger', 'negative'], x: 'g is almost zero.' },
    { q: 'An object weighs 45 N on Venus (g = 9 N/kg). Its mass is', o: ['5 kg', '405 kg', '45 kg', '0.2 kg'], x: '45 ÷ 9.', ch: 1 }
  ],
  exam: [
    { q: 'The table shows gravitational field strength on three worlds: Earth 10 N/kg, Moon 1.6 N/kg, Mars 3.7 N/kg. A space rover has a mass of 900 kg.', tag: 'calc', parts: [
      { q: 'Calculate the weight of the rover on Earth.', m: 2, ms: ['900 × 10', '= 9000 N'] },
      { q: 'Calculate its weight on Mars.', m: 2, ms: ['900 × 3.7', '= 3330 N'] },
      { q: 'State the mass of the rover on the Moon.', m: 1, ms: ['900 kg'] },
      { q: 'Explain why the rover’s weight is different on each world.', m: 2, ms: ['weight = mass × g / weight depends on g', 'g is different because each planet/moon has a different mass (and radius)'] }
    ] },
    { q: 'Suggest why a rocket needs much less fuel to take off from the Moon than from the Earth.', tag: 'ext', ch: 1, m: 3, ms: ['gravitational field strength is lower on the Moon', 'so the rocket’s weight is smaller / less thrust needed to be bigger than weight', 'no atmosphere / no air resistance on the Moon'] }
  ],
  sims: ['planets'], gens: ['planet1', 'planet2']
});
