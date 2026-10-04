/* ==========================================================
   YEAR 7 · UNIT 4 · DENSITY
   ========================================================== */
TOPICS.push({
  id: '4.1', unit: '4', title: 'What is density?', short: 'How tightly packed the mass is',
  summary: 'Density tells you how much mass is packed into a certain volume. A brick is heavier than a sponge of the same size because it is denser. The particle model explains why solids are usually denser than liquids, and liquids much denser than gases.',
  spec: [
    'I can describe density as the mass of a certain volume of a material',
    'I can explain why objects of the same size can have different masses',
    'I can use the particle model to explain the densities of solids, liquids and gases',
    'I can explain that density is a property of the material, not the size of the object',
    '★ I can explain why ice is less dense than water'
  ],
  learn: [
    { h: 'Density', html: `
[[d:samesize]]
<p>Pick up a cube of wood and a cube of steel of the <b>same size</b>. The steel is much heavier: it has more <b>mass</b> packed into the same <b>volume</b>. We say steel is <b>denser</b>.</p>
<div class="box def"><b class="lbl">Density</b><p>Density is the <b>mass per unit volume</b> — how much mass there is in each cubic centimetre (or cubic metre) of a material.</p></div>
<p>Water has a density of <b>1 g/cm³</b>: each cubic centimetre of water has a mass of 1 gram. Steel is about 8 g/cm³; cork about 0.24 g/cm³.</p>` },
    { h: 'Density and particles', html: `
[[d:k_states]]
<ul><li><b>Solids</b>: particles closely packed in a regular pattern → usually the <b>densest</b>.</li><li><b>Liquids</b>: particles still close together but random → similar density to the solid (a little less, usually).</li><li><b>Gases</b>: particles far apart → <b>very low</b> density, about 1000 times less than a liquid.</li></ul>
<p>Two things make one material denser than another: <b>heavier particles</b> (atoms with more mass — lead atoms are much heavier than aluminium atoms) and particles <b>packed more closely</b>.</p>` },
    { h: 'A property of the material', html: `
<p>Cut a steel bar in half: each half has half the mass and half the volume, so the <b>density stays the same</b>. Density depends on <b>what</b> something is made of, not <b>how much</b> of it there is. That is why you can use density to <b>identify a material</b> — Archimedes is said to have checked whether a king’s crown was pure gold this way.</p>
<div class="box why"><b class="lbl">★ Why does ice float?</b><p>Water is unusual. When it freezes, its particles line up in an open pattern that takes up <b>more space</b> than in the liquid. Same mass, bigger volume → <b>lower density</b> (0.92 g/cm³). So ice floats on water — which lets fish survive under frozen ponds.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'A block of wood and a block of iron have the same volume. The iron has a greater mass. Which is denser, and why?', s: ['Same volume.', 'Iron has more mass in that volume.', 'So iron is denser: more mass per cm³.'], a: 'iron — more mass in the same volume' },
    { q: 'Use the particle model to explain why air has a much lower density than water.', s: ['In air (a gas) the particles are far apart.', 'In water (a liquid) the particles are close together.', 'So a cm³ of air contains far fewer particles — much less mass — than a cm³ of water.'], a: 'gas particles are far apart, so less mass per cm³' }
  ],
  pitfalls: ['Saying heavy objects are always dense — a big log is heavy but not dense.', 'Thinking cutting something in half halves its density.', 'Confusing density with weight or mass.', 'Saying gas particles are “smaller” — they are the same size, just further apart.'],
  cards: [
    ['What is density?', 'The mass per unit volume of a material.'],
    ['Density of water?', '1 g/cm³ (1000 kg/m³).'],
    ['Which state of matter is least dense?', 'Gas — the particles are far apart.'],
    ['Why is a solid usually denser than its gas?', 'Its particles are much closer together.'],
    ['If you cut a block in half, what happens to its density?', 'It stays the same.'],
    ['Two reasons one material is denser than another?', 'Heavier particles, and particles packed more closely.'],
    ['Why can density identify a material?', 'Each material has its own density, whatever the size of the sample.'],
    ['★ Why does ice float on water?', 'Ice is less dense: its particles are arranged in an open pattern that takes up more space.']
  ],
  quiz: [
    { q: 'Density is', o: ['mass per unit volume', 'mass × volume', 'the weight of an object', 'volume per unit mass'], x: 'How much mass in each cm³.' },
    { q: 'A 1 cm³ cube of gold has more mass than a 1 cm³ cube of wood. This is because gold', o: ['is denser', 'is bigger', 'has a bigger volume', 'is a liquid'], x: 'More mass in the same volume.' },
    { q: 'Which is usually the least dense?', o: ['a gas', 'a liquid', 'a solid', 'they are all the same'], x: 'Particles far apart.' },
    { q: 'A steel bar is cut in half. The density of each half', o: ['stays the same', 'halves', 'doubles', 'becomes zero'], x: 'Mass and volume both halve.' },
    { q: 'The density of water is', o: ['1 g/cm³', '10 g/cm³', '0.1 g/cm³', '100 g/cm³'], x: '1 cm³ of water has a mass of 1 g.' },
    { q: 'Using the particle model, gases have a low density because', o: ['their particles are far apart', 'their particles are tiny', 'their particles have no mass', 'they are hot'], x: 'Few particles per cm³.' },
    { q: 'Lead is denser than aluminium mainly because', o: ['lead atoms have much more mass', 'lead is a bigger object', 'lead atoms are further apart', 'aluminium is a liquid'], x: 'Heavier particles.' },
    { q: 'Ice floats on water because', o: ['ice is less dense than water', 'ice is lighter than water', 'ice has no mass', 'ice is a gas'], x: 'Its particles take up more space.', ch: 1 }
  ],
  exam: [
    { q: 'The diagram shows the particles in a solid, a liquid and a gas.', tag: '', parts: [
      { q: 'Which state has the lowest density?', m: 1, ms: ['gas'] },
      { q: 'Use the arrangement of the particles to explain your answer.', m: 2, ms: ['particles in a gas are far apart', 'so there is less mass in each cm³ / fewer particles in the same volume'] },
      { q: 'A student says “a big block of polystyrene must be denser than a small stone because it is bigger.” Explain why the student is wrong.', m: 2, ms: ['density depends on mass per unit volume / the material, not the size', 'polystyrene has much less mass in each cm³ than stone'] }
    ] }
  ],
  sims: ['densityparticles'], gens: []
});

TOPICS.push({
  id: '4.2', unit: '4', title: 'Calculating density', short: 'density = mass ÷ volume',
  summary: 'Density = mass ÷ volume. With mass in grams and volume in cm³, density is in g/cm³. The equation rearranges to find mass or volume.',
  spec: [
    'I can recall and use density = mass ÷ volume',
    'I can use the units g/cm³ (and kg/m³)',
    'I can calculate the volume of a cube or cuboid (length × width × height)',
    'I can rearrange the equation to find mass or volume',
    '★ I can convert between g/cm³ and kg/m³'
  ],
  learn: [
    { h: 'The density equation', html: `
<div class="box def"><b class="lbl">Learn this</b><p>$"density" = @frac{"mass"}{"volume"}$ &nbsp; &nbsp; $ρ = @frac{m}{V}$ &nbsp; (ρ is the Greek letter rho)</p><p>mass in g and volume in cm³ → density in <b>g/cm³</b> · mass in kg and volume in m³ → density in <b>kg/m³</b></p></div>
<p>Example: a stone has a mass of 60 g and a volume of 24 cm³. Density = 60 ÷ 24 = <b>2.5 g/cm³</b>.</p>` },
    { h: 'Rearranging', html: `
[[d:tri_density]]
<ul><li>$m = ρ × V$ — mass = density × volume</li><li>$V = @frac{m}{ρ}$ — volume = mass ÷ density</li></ul>
<p>Example: what is the mass of 50 cm³ of iron (density 7.9 g/cm³)? m = 7.9 × 50 = 395 g.</p>` },
    { h: 'Volume of a regular shape', html: `
<p>For a <b>cube or cuboid</b>: $V = "length" × "width" × "height"$. A block 5 cm × 4 cm × 2 cm has a volume of 40 cm³.</p>
<div class="tbl"><table><tr><th>Material</th><th>Density (g/cm³)</th></tr><tr><td>air</td><td>0.0012</td></tr><tr><td>cork</td><td>0.24</td></tr><tr><td>ice</td><td>0.92</td></tr><tr><td>water</td><td>1.00</td></tr><tr><td>glass</td><td>2.5</td></tr><tr><td>aluminium</td><td>2.7</td></tr><tr><td>iron</td><td>7.9</td></tr><tr><td>copper</td><td>8.9</td></tr><tr><td>lead</td><td>11.3</td></tr><tr><td>gold</td><td>19.3</td></tr></table></div>
<div class="box why"><b class="lbl">★ Changing units</b><p>1 m³ = 1 000 000 cm³ and 1 kg = 1000 g, so <b>1 g/cm³ = 1000 kg/m³</b>. Multiply g/cm³ by 1000 to get kg/m³: aluminium is 2.7 g/cm³ = 2700 kg/m³.</p></div>` }
  ],
  eqs: [['ρ = @frac{m}{V}', 'density = mass ÷ volume'], ['m = ρ × V', 'mass = density × volume'], ['V = l × w × h', 'volume of a cuboid']],
  worked: [
    { q: 'A metal block measures 2 cm × 3 cm × 5 cm and has a mass of 81 g. Calculate its density and identify the metal using the table.', s: ['Volume: $V = 2 × 3 × 5 = 30 "cm"^3$', 'Density: $ρ = @frac{m}{V} = @frac{81}{30}$', '$ρ = 2.7 "g/cm"^3$ → aluminium'], a: '2.7 g/cm³ — aluminium' },
    { q: 'Olive oil has a density of 0.92 g/cm³. What volume of oil has a mass of 46 g?', s: ['$V = @frac{m}{ρ}$', '$V = @frac{46}{0.92}$', '$V = 50 "cm"^3$'], a: '50 cm³' }
  ],
  pitfalls: ['Dividing volume by mass instead of mass by volume.', 'Mixing units — grams with m³, or kg with cm³.', 'Adding the lengths instead of multiplying them for volume.', 'Leaving the unit off, or writing g/cm instead of g/cm³.'],
  cards: [
    ['Density equation?', '$ρ = m ÷ V$ (density = mass ÷ volume).'],
    ['Units of density?', 'g/cm³ or kg/m³.'],
    ['Mass from density and volume?', '$m = ρ × V$'],
    ['Volume from mass and density?', '$V = m ÷ ρ$'],
    ['Volume of a cuboid?', 'length × width × height.'],
    ['Density of 20 g in 10 cm³?', '2 g/cm³.'],
    ['What is ρ?', 'The Greek letter rho — the symbol for density.'],
    ['★ 1 g/cm³ in kg/m³?', '1000 kg/m³.']
  ],
  quiz: [
    { q: 'A 40 g object has a volume of 20 cm³. Its density is', o: ['2 g/cm³', '800 g/cm³', '0.5 g/cm³', '60 g/cm³'], x: '40 ÷ 20.' },
    { q: 'The volume of a 3 cm × 3 cm × 3 cm cube is', o: ['27 cm³', '9 cm³', '18 cm³', '6 cm³'], x: '3 × 3 × 3.' },
    { q: 'Which equation is correct?', o: ['density = mass ÷ volume', 'density = volume ÷ mass', 'density = mass × volume', 'mass = density ÷ volume'], x: 'ρ = m/V.' },
    { q: '10 cm³ of lead (11.3 g/cm³) has a mass of', o: ['113 g', '1.13 g', '21.3 g', '0.88 g'], x: 'm = ρ × V.' },
    { q: 'A block has mass 158 g and volume 20 cm³. Using the table, it is most likely', o: ['iron (7.9 g/cm³)', 'aluminium (2.7 g/cm³)', 'gold (19.3 g/cm³)', 'glass (2.5 g/cm³)'], x: '158 ÷ 20 = 7.9.' },
    { q: 'What volume of gold (19.3 g/cm³) has a mass of 193 g?', o: ['10 cm³', '3725 cm³', '0.1 cm³', '19.3 cm³'], x: 'V = m ÷ ρ.' },
    { q: 'A unit of density is', o: ['g/cm³', 'g/cm', 'cm³/g', 'N/kg'], x: 'mass ÷ volume.' },
    { q: 'Aluminium is 2.7 g/cm³. In kg/m³ this is', o: ['2700 kg/m³', '0.0027 kg/m³', '27 kg/m³', '270 kg/m³'], x: '× 1000.', ch: 1 }
  ],
  exam: [
    { q: 'A student measures a rectangular block: length 5.0 cm, width 4.0 cm, height 2.0 cm. Its mass is 316 g.', tag: 'calc', parts: [
      { q: 'Calculate the volume of the block.', m: 2, ms: ['5.0 × 4.0 × 2.0', '= 40 cm³'] },
      { q: 'Calculate the density of the block. Give the unit.', m: 3, ms: ['density = mass ÷ volume', '316 ÷ 40 = 7.9', 'g/cm³'] },
      { q: 'Use the table (aluminium 2.7, iron 7.9, copper 8.9 g/cm³) to identify the metal.', m: 1, ms: ['iron'] }
    ] },
    { q: 'Sea water has a density of 1.03 g/cm³.', tag: 'calc', parts: [
      { q: 'Calculate the mass of 500 cm³ of sea water.', m: 2, ms: ['1.03 × 500', '= 515 g'] },
      { q: 'A bucket holds 5150 g of sea water. Calculate the volume of the sea water.', m: 2, ms: ['5150 ÷ 1.03', '= 5000 cm³'], ch: 1 }
    ] }
  ],
  sims: ['k_densitylab'], gens: ['den1', 'den2', 'den3', 'den4']
});

TOPICS.push({
  id: '4.3', unit: '4', title: 'Measuring density of solids', short: 'Practical: regular and irregular objects',
  summary: 'To find density you need mass (from a balance) and volume. For a regular block, measure its sides and multiply. For an irregular object, use displacement: it pushes aside its own volume of water.',
  spec: [
    'I can measure mass with a balance and zero (tare) it first',
    'I can find the volume of a regular object by measuring its sides with a ruler',
    'I can find the volume of an irregular object by displacement, using a measuring cylinder or a eureka can',
    'I can read a measuring cylinder at eye level from the bottom of the meniscus',
    '★ I can evaluate sources of error and suggest improvements'
  ],
  learn: [
    { h: 'Regular objects', html: `
<ol><li>Measure the <b>mass</b> on a balance (press <b>zero / tare</b> first).</li><li>Measure the <b>length, width and height</b> with a ruler (to the nearest mm).</li><li>Volume = length × width × height.</li><li>Density = mass ÷ volume.</li></ol>
<p>Measure each length in two or three places and take a mean — the block may not be perfectly square.</p>` },
    { h: 'Irregular objects: displacement', html: `
[[d:displace]]
<p>An irregular object (a stone, a key, a lump of modelling clay) has no simple formula for volume. But when it sinks in water it <b>pushes aside (displaces) its own volume</b> of water.</p>
<p><b>Measuring cylinder method:</b></p><ol><li>Half-fill a measuring cylinder with water. Read the volume (e.g. 50 cm³).</li><li>Gently lower in the object on a thread so it is fully under water.</li><li>Read the new volume (e.g. 62 cm³).</li><li>Volume of the object = 62 − 50 = 12 cm³.</li></ol>
<p><b>Eureka (displacement) can method</b> — for bigger objects:</p>[[d:k_eureka]]<ol><li>Fill the eureka can until water drips from the spout; wait until it stops.</li><li>Put an empty measuring cylinder under the spout.</li><li>Lower the object in. The water that overflows into the cylinder = the object’s volume.</li></ol>` },
    { h: 'Reading a measuring cylinder', html: `
[[d:meniscus]]
<p>Water curves up at the edges of the cylinder, forming a <b>meniscus</b>. Put your eye <b>level with the water surface</b> and read the scale at the <b>bottom of the meniscus</b>. Check the value of each division first — it may be 1 cm³, 2 cm³ or 5 cm³.</p>
<p>Remember <b>1 ml = 1 cm³</b>.</p>
<div class="box why"><b class="lbl">★ Errors and improvements</b><ul><li>Splashing water out when dropping the object in → lower it gently on a thread.</li><li>Air bubbles stuck to the object make the volume seem too big → tap to remove them.</li><li>The thread adds a tiny volume → use thin thread.</li><li>A narrow measuring cylinder with small divisions gives a more precise reading than a wide one.</li><li>Objects that absorb water (like wood) or float do not work with this method.</li></ul></div>` }
  ],
  eqs: [['V = V_{"after"} - V_{"before"}', 'volume by displacement'], ['ρ = @frac{m}{V}', 'density = mass ÷ volume']],
  worked: [
    { q: 'A stone has a mass of 78 g. The water in a measuring cylinder rises from 40 cm³ to 70 cm³ when the stone is added. Calculate the density of the stone.', s: ['Volume = 70 − 40 = 30 cm³', '$ρ = @frac{m}{V} = @frac{78}{30}$', '$ρ = 2.6 "g/cm"^3$'], a: '2.6 g/cm³' },
    { q: 'A key displaces 3.5 cm³ of water from a eureka can. Its mass is 30 g. What is its density?', s: ['Volume = 3.5 cm³', '$ρ = 30 ÷ 3.5$', '$ρ = 8.6 "g/cm"^3$ (probably brass or copper)'], a: '8.6 g/cm³' }
  ],
  pitfalls: ['Using the final water level as the object’s volume — subtract the starting level.', 'Reading the top of the meniscus.', 'Dropping the object in and splashing water out.', 'Forgetting to zero the balance.'],
  cards: [
    ['How do you find the volume of a regular block?', 'Measure length, width and height; multiply them.'],
    ['How do you find the volume of an irregular object?', 'Displacement: measure the rise in water level (or overflow from a eureka can).'],
    ['Volume of object by displacement?', 'final reading − starting reading.'],
    ['What is a meniscus?', 'The curved surface of a liquid in a narrow container.'],
    ['Where do you read a meniscus?', 'At the bottom of the curve, with your eye level with it.'],
    ['1 ml = ?', '1 cm³.'],
    ['What does a eureka can do?', 'Collects the water displaced by an object so you can measure its volume.'],
    ['★ How can air bubbles affect a displacement reading?', 'They make the volume (and so the density) seem wrong — volume too big, density too small.']
  ],
  quiz: [
    { q: 'Water rises from 25 cm³ to 33 cm³ when a pebble is added. The pebble’s volume is', o: ['8 cm³', '33 cm³', '58 cm³', '25 cm³'], x: '33 − 25.' },
    { q: 'Which equipment is best for measuring the volume of an irregular stone?', o: ['a measuring cylinder with water', 'a ruler', 'a newton meter', 'a thermometer'], x: 'Displacement.' },
    { q: 'You should read a measuring cylinder', o: ['at eye level, at the bottom of the meniscus', 'from above, at the top of the meniscus', 'from below', 'at an angle'], x: 'Avoids parallax.' },
    { q: 'A block is 4 cm × 2 cm × 1 cm. Its volume is', o: ['8 cm³', '7 cm³', '16 cm³', '6 cm³'], x: 'Multiply.' },
    { q: 'An object has mass 54 g and displaces 20 cm³ of water. Its density is', o: ['2.7 g/cm³', '1080 g/cm³', '0.37 g/cm³', '34 g/cm³'], x: '54 ÷ 20.' },
    { q: 'A eureka can is used to', o: ['collect the water an object displaces', 'measure mass', 'heat water', 'measure force'], x: 'Overflow = volume.' },
    { q: 'Before placing an object on a balance you should', o: ['zero (tare) it', 'wet it', 'turn it upside down', 'add water'], x: 'So it reads 0 with nothing on.' },
    { q: 'Air bubbles stuck to a stone in a measuring cylinder make the measured volume', o: ['too big', 'too small', 'exactly right', 'zero'], x: 'The bubbles displace water too.', ch: 1 }
  ],
  exam: [
    { q: 'A student wants to find the density of a small irregular stone.', tag: 'prac', parts: [
      { q: 'Describe how she could measure the volume of the stone.', m: 3, ms: ['partly fill a measuring cylinder with water and read the volume', 'lower the stone in gently (fully under water) and read the new volume', 'volume = difference between the two readings'] },
      { q: 'Name the instrument used to measure the mass of the stone.', m: 1, ms: ['(top-pan) balance'] },
      { q: 'Her readings: mass 45 g; water level 60 cm³ before, 78 cm³ after. Calculate the density of the stone.', m: 3, ms: ['volume = 78 − 60 = 18 cm³', 'density = 45 ÷ 18', '= 2.5 g/cm³'] },
      { q: 'Suggest one reason why her value of density might be inaccurate.', m: 1, ms: ['water splashed out / air bubbles on the stone / misread meniscus / parallax / thread volume'], ch: 1 }
    ] },
    { q: 'Describe how you would find the density of a large irregular rock that will not fit in a measuring cylinder.', tag: 'ext', m: 4, ms: ['measure its mass with a balance', 'fill a eureka can until water stops dripping from the spout', 'lower the rock in and collect the overflow in a measuring cylinder; this volume = volume of rock', 'density = mass ÷ volume'] }
  ],
  sims: ['k_densitylab'], gens: ['den4', 'den5']
});

TOPICS.push({
  id: '4.4', unit: '4', title: 'Density of liquids and gases', short: 'Density columns, balloons, weighing air',
  summary: 'Liquids have densities too — measure a known volume and its mass. Less dense liquids float on denser ones, making density columns. Gases are very light but still have mass; denser gases sink in air and less dense ones rise.',
  spec: [
    'I can measure the density of a liquid using a balance and a measuring cylinder',
    'I can explain why liquids form layers in order of density in a density column',
    'I can explain that gases have mass and density, and describe how to show this',
    'I can explain why helium balloons rise and carbon dioxide sinks',
    '★ I can explain why hot air balloons rise'
  ],
  learn: [
    { h: 'Measuring the density of a liquid', html: `
<ol><li>Put an <b>empty</b> measuring cylinder on a balance and press <b>tare</b> (or record its mass).</li><li>Pour in a known volume of the liquid, e.g. 50 cm³.</li><li>Read the mass of the liquid (subtract the empty cylinder’s mass if you did not tare).</li><li>Density = mass ÷ volume.</li></ol>
<p>Example: 50 cm³ of cooking oil has a mass of 46 g → density = 46 ÷ 50 = 0.92 g/cm³.</p>` },
    { h: 'Density columns', html: `
[[d:tower]]
<p>Pour liquids that do not mix into a tall cylinder, one at a time. They settle into <b>layers</b>: the <b>densest at the bottom</b>, least dense at the top. Honey (1.4 g/cm³) sinks under washing-up liquid (1.05), which sinks under water (1.00), which sinks under oil (0.92).</p>
<p>Solid objects dropped in stop at the layer where they are <b>less dense than the liquid below</b> but denser than the liquid above: a grape might float on honey but sink in water.</p>` },
    { h: 'Gases have mass too', html: `
<p>Air is about <b>1.2 kg per m³</b> (0.0012 g/cm³) — the air in your classroom has a mass of around 200 kg!</p>
<ul><li><b>Weighing a gas:</b> weigh a sealed plastic bottle or a deflated ball, pump in extra air, and weigh it again — the mass goes up. Or weigh a canister of CO₂ before and after letting gas out.</li><li><b>Less dense gases rise:</b> <b>helium</b> (0.00017 g/cm³) is about 7 times less dense than air, so a helium balloon floats up.</li><li><b>Denser gases sink:</b> <b>carbon dioxide</b> (0.0018 g/cm³) is denser than air. You can “pour” it from a beaker onto a candle and put the flame out.</li></ul>
<div class="box why"><b class="lbl">★ Hot air balloons</b><p>Heating air makes its particles move faster and spread out, so the same mass of air takes up more volume — the hot air is <b>less dense</b> than the cooler air around it. The balloon full of hot air (plus basket) weighs less than the cold air it displaces, so it rises.</p></div>` }
  ],
  eqs: [['ρ = @frac{m}{V}', 'density of a liquid or gas']],
  worked: [
    { q: 'An empty measuring cylinder has a mass of 120 g. With 80 cm³ of milk in it, the mass is 202.4 g. Calculate the density of the milk.', s: ['Mass of milk = 202.4 − 120 = 82.4 g', '$ρ = @frac{82.4}{80}$', '$ρ = 1.03 "g/cm"^3$'], a: '1.03 g/cm³' },
    { q: 'Syrup (1.4 g/cm³), oil (0.92 g/cm³) and water (1.0 g/cm³) are poured into a jar. In what order, from the bottom, do they settle?', s: ['Densest at the bottom: syrup (1.4).', 'Then water (1.0).', 'Least dense at the top: oil (0.92).'], a: 'syrup, water, oil' }
  ],
  pitfalls: ['Forgetting to subtract the mass of the container.', 'Saying gases have no mass.', 'Saying the heaviest amount of liquid goes to the bottom — it is the densest, whatever the amount.', 'Saying hot air rises because heat rises — it is because hot air is less dense.'],
  cards: [
    ['How do you measure the density of a liquid?', 'Measure the mass of a known volume (tare the cylinder), then density = mass ÷ volume.'],
    ['In a density column, which liquid is at the bottom?', 'The densest one.'],
    ['Do gases have mass?', 'Yes — air is about 1.2 kg per m³.'],
    ['Why does a helium balloon rise?', 'Helium is much less dense than air.'],
    ['Why can carbon dioxide be “poured”?', 'It is denser than air, so it sinks.'],
    ['How can you show air has mass?', 'Weigh a ball or bottle, pump more air in, weigh again — the mass increases.'],
    ['Density of oil 46 g in 50 cm³?', '0.92 g/cm³.'],
    ['★ Why is hot air less dense?', 'Its particles move faster and spread out, so the same mass takes up more volume.']
  ],
  quiz: [
    { q: 'In a density column the liquid at the top is', o: ['the least dense', 'the densest', 'the one with the most volume', 'always water'], x: 'Less dense floats on denser.' },
    { q: '25 cm³ of a liquid has a mass of 30 g. Its density is', o: ['1.2 g/cm³', '0.83 g/cm³', '750 g/cm³', '55 g/cm³'], x: '30 ÷ 25.' },
    { q: 'A helium balloon rises because helium is', o: ['less dense than air', 'denser than air', 'hot', 'magnetic'], x: 'About 7× less dense.' },
    { q: 'Carbon dioxide can put out a candle when poured from a beaker because it', o: ['is denser than air and sinks onto the flame', 'is lighter than air', 'is a liquid', 'is cold'], x: 'Denser gases sink.' },
    { q: 'To find the mass of a liquid in a measuring cylinder you must', o: ['subtract the mass of the empty cylinder (or tare it)', 'add the mass of the cylinder', 'measure the height', 'heat the liquid'], x: 'Only the liquid’s mass counts.' },
    { q: 'A ball is pumped up with more air. Its mass', o: ['increases slightly', 'decreases', 'stays exactly the same', 'becomes zero'], x: 'Air has mass.' },
    { q: 'Oil (0.92 g/cm³) is poured onto water (1.0 g/cm³). The oil', o: ['floats on top', 'sinks', 'mixes in', 'turns solid'], x: 'Less dense.' },
    { q: 'A hot air balloon rises because', o: ['the hot air inside is less dense than the cold air outside', 'heat is lighter than air', 'the flames push it up', 'hot air has no mass'], x: 'Particles spread out when heated.', ch: 1 }
  ],
  exam: [
    { q: 'A student makes a density column with four liquids: honey (1.42 g/cm³), water (1.00 g/cm³), vegetable oil (0.92 g/cm³) and washing-up liquid (1.06 g/cm³).', tag: 'data', parts: [
      { q: 'List the liquids in order from the bottom of the column to the top.', m: 2, ms: ['honey, washing-up liquid, water, vegetable oil', '(1 mark for honey at bottom and oil at top)'] },
      { q: 'A plastic bead with a density of 1.02 g/cm³ is dropped in. Explain where it stops.', m: 2, ms: ['it floats on the washing-up liquid / sinks through the water and oil', 'because it is denser than water but less dense than washing-up liquid'] }
    ] },
    { q: 'Describe how to measure the density of cooking oil in the lab.', tag: 'prac', m: 4, ms: ['place an empty measuring cylinder on a balance and zero / tare it (or record its mass)', 'pour in a known volume of oil, e.g. 50 cm³ (read at eye level)', 'record the mass of the oil', 'density = mass ÷ volume'] },
    { q: 'Explain why a balloon filled with helium rises but a balloon filled with carbon dioxide sinks.', tag: 'ext', m: 3, ms: ['helium is less dense than air', 'carbon dioxide is denser than air', 'less dense things rise / float in a denser fluid; denser things sink'] }
  ],
  sims: ['tower'], gens: ['den6', 'den2']
});
