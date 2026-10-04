/* ==========================================================
   TOPIC 5 · SOLIDS, LIQUIDS AND GASES
   ========================================================== */
TOPICS.push({
  id: '5.1', unit: '5', ref: '5.1, 5.3–5.4', title: 'Density', short: 'ρ = m/V, measuring density',
  summary: 'Density as mass per unit volume, and the practical measuring the density of regular and irregular solids and of liquids.',
  spec: [
    '5.1 use the following units: degree Celsius (°C), Kelvin (K), joule (J), kilogram (kg), kilogram/metre³ (kg/m³), metre (m), metre² (m²), metre³ (m³), metre/second (m/s), metre/second² (m/s²), newton (N) and pascal (Pa)',
    '5.3 know and use the relationship between density, mass and volume: ρ = m/V',
    '5.4 practical: investigate density using direct measurements of mass and volume'
  ],
  learn: [
    { h: 'Density', html: `
<div class="box def"><b class="lbl">Recall</b><p>$"density" = @frac{"mass"}{"volume"}$ &nbsp; $ρ = @frac{m}{V}$ &nbsp; (kg/m³ = kg ÷ m³, or g/cm³)</p></div>
<p>Density depends on how much mass is packed into each cubic metre. Water: 1000 kg/m³ (1.0 g/cm³). Air: about 1.2 kg/m³. Aluminium: 2700 kg/m³. Iron: 7900 kg/m³. An object floats in a liquid if its density is less than the liquid’s.</p>
<div class="box tip"><b class="lbl">Unit conversions</b><p>1 g/cm³ = 1000 kg/m³. 1 m³ = 1 000 000 cm³ (10⁶). 1 cm³ = 1 ml.</p></div>` },
    { h: 'Practical: measuring density (5.4)', html: `
[[d:eureka]]
<ul><li><b>Regular solid</b> (e.g. a cuboid): measure the mass on a top-pan balance. Measure the length, width and height with a ruler (or Vernier callipers/micrometer for small objects); V = l × w × h. ρ = m/V.</li><li><b>Irregular solid</b> (e.g. a stone): measure the mass. Find the volume by <b>displacement</b>: fill a eureka (displacement) can to the spout, lower the object in on a thread, and collect the displaced water in a measuring cylinder; or read the rise in level in a measuring cylinder.</li><li><b>Liquid:</b> put an empty measuring cylinder on a balance and zero (tare) it; pour in liquid; read the volume (at eye level, bottom of the meniscus) and the mass.</li></ul>
<p>Repeat and average; a graph of mass against volume for several samples of a material has gradient = density.</p>` }
  ],
  eqs: [['ρ = @frac{m}{V}', 'density (recall)']],
  worked: [
    { q: 'A block measures 4.0 cm × 5.0 cm × 2.0 cm and has a mass of 108 g. Calculate its density in g/cm³ and kg/m³.', s: ['V = 4.0 × 5.0 × 2.0 = 40 cm³', 'ρ = 108 ÷ 40 = 2.7 g/cm³', '= 2700 kg/m³ (aluminium)'], a: '2.7 g/cm³ = 2700 kg/m³' },
    { q: 'A stone of mass 150 g raises the water level in a measuring cylinder from 50.0 cm³ to 110.0 cm³. Find its density.', s: ['V = 110.0 − 50.0 = 60.0 cm³', 'ρ = 150 ÷ 60.0 = 2.5 g/cm³'], a: '2.5 g/cm³ (2500 kg/m³)' }
  ],
  pitfalls: ['Mixing grams with m³ or kilograms with cm³.', 'Reading the meniscus from above instead of at eye level.', 'Forgetting to subtract the starting water level.'],
  cards: [
    ['Density equation?', '$ρ = m/V$'],
    ['Units of density?', 'kg/m³ (or g/cm³).'],
    ['Density of water?', '1000 kg/m³ = 1.0 g/cm³.'],
    ['How to find the volume of an irregular solid?', 'Displacement — eureka can or rise in level in a measuring cylinder.'],
    ['1 g/cm³ in kg/m³?', '1000 kg/m³'],
    ['When does an object float?', 'When its density is less than that of the liquid.']
  ],
  quiz: [
    { q: 'An object of mass 600 kg has a volume of 0.20 m³. Its density is', o: ['3000 kg/m³', '120 kg/m³', '0.00033 kg/m³', '600 kg/m³'], x: '600 ÷ 0.20.' },
    { q: 'What volume does 400 g of a liquid of density 0.80 g/cm³ occupy?', o: ['500 cm³', '320 cm³', '0.002 cm³', '480 cm³'], x: 'V = m/ρ.' },
    { q: 'The volume of an irregular stone is best found by', o: ['displacement of water', 'a ruler', 'weighing it twice', 'a newtonmeter'], x: 'Eureka can.' },
    { q: '2.5 g/cm³ in kg/m³ is', o: ['2500', '0.0025', '25', '250 000'], x: '× 1000.' },
    { q: 'Which will float in water?', o: ['wood of density 600 kg/m³', 'iron of density 7900 kg/m³', 'glass of density 2500 kg/m³', 'lead'], x: 'Less dense than water.' }
  ],
  exam: [
    { q: 'A student wants to find the density of a small, irregular piece of rock.', tag: 'prac', parts: [
      { q: 'Describe how she should measure the volume of the rock.', m: 3, ms: ['fill a eureka/displacement can to the spout (or part-fill a measuring cylinder and record level)', 'lower the rock in gently on a thread', 'measure the volume of water displaced / rise in level with a measuring cylinder'] },
      { q: 'Her results: mass = 62.4 g, volume = 24 cm³. Calculate the density in kg/m³.', m: 3, ms: ['ρ = 62.4 ÷ 24 = 2.6 g/cm³', '× 1000', '= 2600 kg/m³'] },
      { q: 'Suggest two ways she could improve the accuracy of her result.', m: 2, ms: ['read the measuring cylinder at eye level / bottom of meniscus', 'use a narrower measuring cylinder (better resolution) / repeat and take mean / avoid splashing'] }
    ] },
    { q: 'A tank holds 2.4 m³ of oil of density 850 kg/m³. Calculate the mass and weight of the oil (g = 10 N/kg).', tag: 'calc', m: 4, ms: ['m = ρ × V = 850 × 2.4', '= 2040 kg', 'W = mg = 2040 × 10', '= 20 400 N'] }
  ],
  sims: ['densitylab'], gens: ['dens1', 'dens2', 'dens3']
});

TOPICS.push({
  id: '5.2', unit: '5', ref: '5.5–5.7', title: 'Pressure', short: 'p = F/A, pressure in fluids, p = hρg',
  summary: 'Pressure as force per unit area, pressure at a point in a fluid acting equally in all directions, and pressure difference = height × density × g.',
  spec: [
    '5.5 know and use the relationship between pressure, force and area: p = F/A',
    '5.6 understand how the pressure at a point in a gas or liquid at rest acts equally in all directions',
    '5.7 know and use the relationship for pressure difference: p = h × ρ × g'
  ],
  learn: [
    { h: 'Pressure', html: `
<div class="box def"><b class="lbl">Recall</b><p>$"pressure" = @frac{"force"}{"area"}$ &nbsp; $p = @frac{F}{A}$ &nbsp; (Pa = N/m²)</p></div>
<p>The same force on a <b>smaller area</b> gives a <b>larger pressure</b> (sharp knives, drawing pins, stiletto heels); a larger area reduces pressure (snowshoes, tractor tyres, wide straps, foundations of buildings).</p>
<div class="box tip"><b class="lbl">Area units</b><p>1 m² = 10 000 cm² (10⁴). So divide cm² by 10 000 to get m².</p></div>` },
    { h: 'Pressure in fluids', html: `
[[d:depth]]
<p>In a liquid or gas at rest, the pressure at a point <b>acts equally in all directions</b>. Water squirts out horizontally from holes in the side of a container; divers feel pressure from all sides.</p>
<div class="box def"><b class="lbl">Recall</b><p>$"pressure difference" = "height" × "density" × g$ &nbsp; $p = h × ρ × g$</p></div>
<p>Pressure increases with <b>depth</b> and with the <b>density</b> of the fluid (the weight of fluid above pushing down), but does <b>not</b> depend on the shape or width of the container. That is why dams are thicker at the bottom and water spurts furthest from the lowest hole.</p>
<p>The <b>total</b> pressure under water = atmospheric pressure (≈ 100 000 Pa) + hρg. Atmospheric pressure decreases with height because there is less air above.</p>` }
  ],
  eqs: [['p = @frac{F}{A}', 'recall'], ['p = h × ρ × g', 'pressure difference (recall)']],
  worked: [
    { q: 'A 600 N person stands on one foot of area 150 cm². Calculate the pressure on the floor.', s: ['A = 150 ÷ 10 000 = 0.015 m²', '$p = @frac{F}{A} = @frac{600}{0.015}$', '$p = 40 000 "Pa"$'], a: '40 000 Pa' },
    { q: 'Calculate the pressure difference between the surface and a depth of 12 m in sea water (density 1030 kg/m³, g = 10 N/kg).', s: ['p = hρg = 12 × 1030 × 10', '= 123 600 Pa ≈ 1.2 × 10⁵ Pa'], a: '1.2 × 10⁵ Pa' }
  ],
  pitfalls: ['Leaving area in cm² when the answer is in Pa.', 'Thinking wider containers have more pressure at the bottom.', 'Using mass instead of weight for the force.'],
  cards: [
    ['Pressure equation?', '$p = F/A$'],
    ['Unit of pressure?', 'pascal (Pa) = N/m².'],
    ['Pressure difference in a fluid?', '$p = hρg$'],
    ['Direction of pressure at a point in a fluid?', 'Equally in all directions.'],
    ['Why are dams thicker at the bottom?', 'Pressure increases with depth.'],
    ['Why do snowshoes stop you sinking?', 'Larger area → smaller pressure.'],
    ['cm² to m²?', 'Divide by 10 000.']
  ],
  quiz: [
    { q: 'A force of 50 N acts on 0.25 m². The pressure is', o: ['200 Pa', '12.5 Pa', '0.005 Pa', '50.25 Pa'], x: '50 ÷ 0.25.' },
    { q: 'The pressure difference at 5 m depth in water (1000 kg/m³, g = 10 N/kg) is', o: ['50 000 Pa', '5000 Pa', '500 Pa', '2 Pa'], x: '5 × 1000 × 10.' },
    { q: 'Pressure at a point in a liquid acts', o: ['equally in all directions', 'only downwards', 'only sideways', 'only upwards'], x: 'Spec 5.6.' },
    { q: 'Sharp knives cut well because', o: ['small area gives large pressure', 'large area gives large pressure', 'they are heavy', 'they reduce force'], x: 'p = F/A.' },
    { q: 'Pressure at the bottom of a tank of water depends on', o: ['depth and density of the water', 'the width of the tank', 'the shape of the tank', 'the total volume only'], x: 'hρg.' },
    { q: 'A 20 N book rests on 400 cm². The pressure is', o: ['500 Pa', '0.05 Pa', '8000 Pa', '20 Pa'], x: '20 ÷ 0.04.' }
  ],
  exam: [
    { q: 'A diver swims in a lake. The density of the water is 1000 kg/m³ and g = 10 N/kg. Atmospheric pressure is 1.0 × 10⁵ Pa.', tag: 'calc', parts: [
      { q: 'Calculate the pressure difference due to the water at a depth of 25 m.', m: 2, ms: ['p = 25 × 1000 × 10', '= 2.5 × 10⁵ Pa'] },
      { q: 'Calculate the total pressure on the diver at this depth.', m: 1, ms: ['1.0 × 10⁵ + 2.5 × 10⁵ = 3.5 × 10⁵ Pa'] },
      { q: 'The diver’s mask has a glass window of area 0.012 m². Calculate the force of the water on the window at 25 m (due to the water alone).', m: 2, ms: ['F = pA = 2.5 × 10⁵ × 0.012', '= 3000 N'] },
      { q: 'Explain why the pressure on the diver acts on all parts of her body, not just her head.', m: 1, ms: ['pressure at a point in a liquid acts equally in all directions'] }
    ] },
    { q: 'A tall container has three holes at different heights in its side, and is filled with water. Describe and explain what is seen.', m: 3, ms: ['water squirts out horizontally from each hole', 'water from the lowest hole goes furthest / fastest', 'pressure increases with depth (p = hρg) and acts in all directions'] }
  ],
  sims: ['fluid'], gens: ['pfa1', 'pfa2', 'phrg1', 'phrg2']
});

TOPICS.push({
  id: '5.3', unit: '5', ref: '5.8–5.11', po: true, title: 'Changes of state and particle model', short: 'Heating, melting, boiling, evaporation, particles',
  summary: 'How heating changes the energy stored in a system — raising temperature or changing state; melting, evaporation and boiling; the arrangement and motion of particles; and the temperature–time graph practical.',
  spec: [
    '5.8P explain why heating a system will change the energy stored within the system and raise its temperature or produce changes of state',
    '5.9P describe the changes that occur when a solid melts to form a liquid, and when a liquid evaporates or boils to form a gas',
    '5.10P describe the arrangement and motion of particles in solids, liquids and gases',
    '5.11P practical: obtain a temperature–time graph to show the constant temperature during a change of state'
  ],
  learn: [
    { h: 'Particles in solids, liquids and gases', html: `
[[d:states]]
<div class="tbl"><table><tr><th></th><th>Solid</th><th>Liquid</th><th>Gas</th></tr>
<tr><td>Arrangement</td><td>close together, regular pattern (lattice)</td><td>close together, irregular, random</td><td>far apart, random</td></tr>
<tr><td>Motion</td><td>vibrate about fixed positions</td><td>move around each other (slide past)</td><td>move quickly and randomly in all directions</td></tr>
<tr><td>Forces between particles</td><td>strong</td><td>weaker</td><td>very weak (negligible)</td></tr>
<tr><td>Properties</td><td>fixed shape and volume</td><td>fixed volume, takes shape of container</td><td>no fixed shape or volume; compressible</td></tr></table></div>` },
    { h: 'Heating and changes of state', html: `
[[d:statechanges]]
<p>Heating a system transfers energy to its <b>thermal (internal) store</b>. This either:</p>
<ul><li><b>raises the temperature</b> — the particles move/vibrate faster (increasing their kinetic energy), <b>or</b></li><li><b>changes the state</b> — the energy is used to <b>break the bonds</b> (overcome the forces) between particles, increasing their potential energy, while the <b>temperature stays constant</b>.</li></ul>
<p><b>Melting</b> (solid → liquid): particles gain enough energy to break free of fixed positions. <b>Boiling</b> (liquid → gas) happens throughout the liquid at the boiling point, forming bubbles. <b>Evaporation</b> happens only at the <b>surface</b>, at any temperature: the most energetic particles escape, so the average kinetic energy of those left falls — evaporation causes <b>cooling</b> (sweating). Evaporation is faster when warmer, with a larger surface area, or with air moving over the surface.</p>
<p>Condensing and freezing are the reverse: energy is transferred to the surroundings at constant temperature. Changes of state are <b>physical</b> changes — mass is conserved.</p>` },
    { h: 'Practical: temperature–time graph (5.11P)', html: `
[[d:heatcurve]]
<ol><li>Put crushed ice (or solid stearic acid/salol in a boiling tube) in a beaker with a thermometer.</li><li>Heat gently (or let a melted substance cool) and record the temperature every 30 s, stirring.</li><li>Plot temperature against time.</li></ol>
<p>The graph shows <b>flat sections</b> (constant temperature) at the melting point and boiling point: the energy is being used to change state, not to raise the temperature. Stearic acid cooling shows a flat section at about 69 °C as it solidifies.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why the temperature of ice water stays at 0 °C while it is being heated until all the ice has melted.', s: ['The energy transferred is used to break the bonds/overcome forces between particles in the ice.', 'This increases the potential energy of the particles, not their kinetic energy.', 'So the temperature (average kinetic energy) stays constant until all the ice has melted.'], a: 'Energy breaks bonds, not raising temperature.' }
  ],
  pitfalls: ['Saying particles themselves expand or melt.', 'Saying evaporation only happens at the boiling point.', 'Saying no energy is supplied during a change of state — it is, but it changes state rather than temperature.'],
  cards: [
    ['Particles in a solid?', 'Close together, regular pattern, vibrate about fixed positions.', 'po'],
    ['Particles in a liquid?', 'Close together, random arrangement, move around each other.', 'po'],
    ['Particles in a gas?', 'Far apart, random, move quickly in all directions.', 'po'],
    ['Why is temperature constant during melting?', 'Energy breaks bonds between particles (potential energy increases), not kinetic energy.', 'po'],
    ['Evaporation vs boiling?', 'Evaporation: surface only, any temperature. Boiling: throughout the liquid at the boiling point.', 'po'],
    ['Why does evaporation cool a liquid?', 'The fastest particles escape, lowering the average kinetic energy of the rest.', 'po'],
    ['What do flat sections on a heating curve show?', 'Changes of state at constant temperature.', 'po']
  ],
  quiz: [
    { q: 'In which state do particles vibrate about fixed positions?', o: ['solid', 'liquid', 'gas', 'all three'], x: 'Lattice.', po: 1 },
    { q: 'During boiling, the temperature of water', o: ['stays constant', 'increases', 'decreases', 'fluctuates'], x: 'Energy breaks bonds.', po: 1 },
    { q: 'Evaporation happens', o: ['at the surface at any temperature', 'only at 100 °C', 'throughout the liquid', 'only in gases'], x: 'Surface.', po: 1 },
    { q: 'Which increases the rate of evaporation?', o: ['a larger surface area', 'a lower temperature', 'still air', 'a narrow container'], x: 'More escaping particles.', po: 1 },
    { q: 'When a gas condenses, energy is', o: ['transferred to the surroundings', 'absorbed from the surroundings', 'destroyed', 'created'], x: 'Reverse of boiling.', po: 1 }
  ],
  exam: [
    { q: 'A student heats some ice from −20 °C until it has all turned to steam, recording the temperature every 30 s.', tag: 'prac', po: 1, parts: [
      { q: 'Sketch the temperature–time graph she would expect, labelling the states present in each section.', m: 4, ms: ['rising line from −20 °C (solid)', 'flat at 0 °C (melting, solid + liquid)', 'rising line to 100 °C (liquid)', 'flat at 100 °C (boiling, liquid + gas)'] },
      { q: 'Explain, in terms of particles, why the temperature does not change while the ice is melting.', m: 3, ms: ['energy is used to break bonds/overcome forces between particles', 'kinetic energy (speed) of particles does not increase', 'temperature depends on average kinetic energy, so stays constant'] },
      { q: 'Suggest why she should stir the mixture.', m: 1, ms: ['so the temperature is the same throughout / thermometer reads a representative temperature'] }
    ] },
    { q: 'Compare evaporation and boiling, and explain why a person feels cold after swimming when they stand in a breeze.', tag: 'ext', po: 1, m: 5, ms: ['evaporation occurs at the surface only; boiling throughout the liquid', 'evaporation at any temperature; boiling at a fixed boiling point', 'fastest-moving water particles escape from the skin', 'average kinetic energy of remaining water falls — cools the skin', 'breeze removes water vapour so evaporation is faster'] }
  ],
  sims: ['states'], gens: []
});

TOPICS.push({
  id: '5.4', unit: '5', ref: '5.2, 5.12–5.14', po: true, title: 'Specific heat capacity', short: 'ΔQ = mcΔT and the practical',
  summary: 'Specific heat capacity as the energy needed to raise 1 kg by 1 °C, the equation ΔQ = mcΔT, and the practical to measure it for water and solids.',
  spec: [
    '5.2P use the following unit: joules/kilogram degree Celsius (J/kg °C)',
    '5.12P know that specific heat capacity is the energy required to change the temperature of an object by one degree Celsius per kilogram of mass (J/kg °C)',
    '5.13P use the equation: change in thermal energy = mass × specific heat capacity × change in temperature, ΔQ = m × c × ΔT',
    '5.14P practical: investigate the specific heat capacity of materials including water and some solids'
  ],
  learn: [
    { h: 'Specific heat capacity', html: `
<div class="box def"><b class="lbl">Definition</b><p>The <b>specific heat capacity</b> of a substance is the energy required to change the temperature of 1 kg of it by 1 °C. Unit: <b>J/kg °C</b>.</p></div>
<div class="box def"><b class="lbl">Given</b><p>$ΔQ = m × c × ΔT$ &nbsp; (J = kg × J/kg °C × °C)</p></div>
<p>Water has a very high specific heat capacity (4200 J/kg °C): it takes a lot of energy to heat and it releases a lot when it cools — used in central heating systems and hot-water bottles, and the reason coastal climates are milder. Metals have low values (copper 390, aluminium 900 J/kg °C) so they heat up quickly.</p>` },
    { h: 'Practical: measuring specific heat capacity (5.14P)', html: `
[[d:shcrig]]
<ol><li>Measure the mass of the metal block (or of water in an insulated beaker) on a balance.</li><li>Insert an electric immersion heater and a thermometer (a drop of water in the thermometer hole improves contact). Wrap the block in insulation.</li><li>Connect the heater to a joulemeter, or to a power supply with an ammeter and voltmeter.</li><li>Record the starting temperature; switch on for a measured time (e.g. 10 minutes); record the energy supplied (joulemeter, or E = IVt) and the highest temperature reached.</li><li>Calculate $c = @frac{ΔQ}{mΔT}$.</li></ol>
<p><b>Why the value is usually too high:</b> some energy is transferred to the surroundings (and heats the heater and thermometer), so the temperature rise is smaller than it would be — insulate well, use a lid for water, and stir water. Plotting temperature against energy gives a straight line of gradient 1/(mc).</p>` }
  ],
  eqs: [['ΔQ = m × c × ΔT', 'given']],
  worked: [
    { q: 'How much energy is needed to heat 2.0 kg of water from 20 °C to 80 °C? (c = 4200 J/kg °C)', s: ['ΔT = 60 °C', 'ΔQ = mcΔT = 2.0 × 4200 × 60', '= 504 000 J (5.0 × 10⁵ J)'], a: '5.0 × 10⁵ J' },
    { q: 'A 1.0 kg aluminium block is heated by a 50 W heater for 5.0 minutes; its temperature rises by 15 °C. Calculate c.', s: ['E = Pt = 50 × 300 = 15 000 J', 'c = ΔQ/(mΔT) = 15 000 ÷ (1.0 × 15)', '= 1000 J/kg °C (true value 900 — energy lost to surroundings)'], a: '1000 J/kg °C' }
  ],
  pitfalls: ['Using the final temperature instead of the change in temperature.', 'Forgetting to convert grams to kg or minutes to s.', 'Saying heat losses make c too low — they make it too high.'],
  cards: [
    ['Define specific heat capacity.', 'Energy needed to raise the temperature of 1 kg by 1 °C.', 'po'],
    ['Unit of specific heat capacity?', 'J/kg °C', 'po'],
    ['Equation?', '$ΔQ = mcΔT$', 'po'],
    ['Specific heat capacity of water?', '4200 J/kg °C', 'po'],
    ['Why is the measured value of c usually too high?', 'Energy lost to surroundings, so ΔT smaller than expected.', 'po'],
    ['How to reduce energy losses in the practical?', 'Insulate the block/beaker, use a lid, stir.', 'po']
  ],
  quiz: [
    { q: 'Energy to heat 0.5 kg of water by 10 °C (c = 4200 J/kg °C) is', o: ['21 000 J', '2100 J', '42 000 J', '840 J'], x: '0.5 × 4200 × 10.', po: 1 },
    { q: 'Which material heats up fastest for the same energy per kg?', o: ['one with a low specific heat capacity', 'one with a high specific heat capacity', 'water', 'any liquid'], x: 'Small c → large ΔT.', po: 1 },
    { q: 'The unit of specific heat capacity is', o: ['J/kg °C', 'J/kg', 'J/°C', 'W/kg'], x: 'Per kg per °C.', po: 1 },
    { q: '9000 J raises 2 kg of a metal by 5 °C. Its specific heat capacity is', o: ['900 J/kg °C', '22 500 J/kg °C', '3600 J/kg °C', '1800 J/kg °C'], x: '9000/(2×5).', po: 1 },
    { q: 'Wrapping the block in insulation', o: ['reduces energy transfer to the surroundings', 'increases the specific heat capacity', 'increases the heater power', 'makes the thermometer more precise'], x: 'Improves accuracy.', po: 1 }
  ],
  exam: [
    { q: 'A student measures the specific heat capacity of a 1.00 kg copper block using a 12 V immersion heater. The current is 4.0 A. After 5.0 minutes the temperature has risen from 20.0 °C to 56.0 °C.', tag: 'prac', po: 1, parts: [
      { q: 'Calculate the energy supplied by the heater.', m: 3, ms: ['t = 300 s', 'E = IVt = 4.0 × 12 × 300', '= 14 400 J'] },
      { q: 'Calculate the specific heat capacity of copper from these results.', m: 3, ms: ['ΔT = 36.0 °C', 'c = 14 400 ÷ (1.00 × 36.0)', '= 400 J/kg °C'] },
      { q: 'The accepted value is 385 J/kg °C. Explain why the student’s value is higher, and suggest one improvement.', m: 3, ms: ['energy transferred to surroundings / heats heater and thermometer', 'so temperature rise is less than it should be, making c larger', 'improvement: insulate the block / put oil or water in thermometer hole for good contact'] }
    ] },
    { q: 'Explain why water is used in central heating systems. Refer to its specific heat capacity.', po: 1, m: 3, ms: ['water has a high specific heat capacity', 'it can store/carry a lot of energy per kg for a given temperature change', 'releases a lot of energy to the room as it cools (also cheap, flows easily)'] }
  ],
  sims: ['shc'], gens: ['shc1', 'shc2', 'shc3']
});

TOPICS.push({
  id: '5.5', unit: '5', ref: '5.15–5.19', title: 'Gas molecules and the Kelvin scale', short: 'Gas pressure, absolute zero, Kelvin',
  summary: 'How the random motion of gas molecules produces pressure, why there is an absolute zero at −273 °C, the Kelvin scale, and how temperature relates to molecular speed and kinetic energy.',
  spec: [
    '5.15 explain how molecules in a gas have random motion and that they exert a force, and hence a pressure, on the walls of a container',
    '5.16 understand why there is an absolute zero of temperature, which is –273 °C',
    '5.17 describe the Kelvin scale of temperature and be able to convert between the Kelvin and Celsius scales',
    '5.18 understand why an increase in temperature results in an increase in the average speed of gas molecules',
    '5.19 know that the Kelvin temperature of a gas is proportional to the average kinetic energy of its molecules'
  ],
  learn: [
    { h: 'Gas pressure', html: `
[[d:gasbox]]
<p>Gas molecules move <b>randomly</b> at high speeds in all directions (Brownian motion of smoke particles is evidence of this). When they <b>collide with the walls</b> of the container they change momentum, so they exert a <b>force</b> on the walls. The force spread over the area of the walls is the <b>pressure</b> (p = F/A).</p>
<p>More frequent or harder collisions → greater pressure.</p>` },
    { h: 'Temperature and molecular speed', html: `
<p>Heating a gas transfers energy to the kinetic store of its molecules, so they move <b>faster</b> on average. The <b>Kelvin temperature is proportional to the average kinetic energy</b> of the molecules: double the Kelvin temperature → double the average kinetic energy.</p>` },
    { h: 'Absolute zero and the Kelvin scale', html: `
<p>As a gas is cooled, its molecules slow down and its pressure falls. Extrapolating a graph of pressure against temperature (at constant volume) reaches zero pressure at <b>−273 °C</b>. This is <b>absolute zero</b> — the lowest possible temperature, where the molecules would have no kinetic energy (they stop moving), so there can be no lower temperature.</p>
<div class="box def"><b class="lbl">Converting</b><p>$"K" = "°C" + 273$ &nbsp; and &nbsp; $"°C" = "K" - 273$</p></div>
<p>A change of 1 K is the same size as a change of 1 °C. 0 K = −273 °C; 273 K = 0 °C; 373 K = 100 °C.</p>` }
  ],
  eqs: [['"T (K)" = "θ (°C)" + 273', 'Kelvin conversion']],
  worked: [
    { q: 'A gas is heated from 27 °C to 327 °C. Convert both to kelvin and state how the average kinetic energy of the molecules changes.', s: ['27 + 273 = 300 K', '327 + 273 = 600 K', 'Kelvin temperature doubles, so the average kinetic energy doubles (even though the Celsius temperature is multiplied by about 12).'], a: '300 K → 600 K; average KE doubles' }
  ],
  pitfalls: ['Writing “°K” — the unit is K.', 'Using Celsius in gas-law calculations.', 'Saying molecules get bigger when heated.', 'Saying average KE doubles when the Celsius temperature doubles.'],
  cards: [
    ['How do gas molecules exert pressure?', 'They collide with the walls, exerting a force; force per unit area = pressure.'],
    ['Absolute zero in °C?', '−273 °C'],
    ['What happens at absolute zero?', 'Molecules have minimum (zero) kinetic energy — cannot get colder.'],
    ['Convert °C to K?', 'Add 273.'],
    ['Why does heating a gas increase molecular speed?', 'Energy transferred to the kinetic store of molecules.'],
    ['Kelvin temperature is proportional to…', 'the average kinetic energy of the molecules.']
  ],
  quiz: [
    { q: '100 °C in kelvin is', o: ['373 K', '173 K', '−173 K', '100 K'], x: '+273.' },
    { q: '0 K in °C is', o: ['−273 °C', '0 °C', '273 °C', '−100 °C'], x: 'Absolute zero.' },
    { q: 'Gas pressure is caused by', o: ['molecules colliding with the container walls', 'molecules attracting the walls', 'the weight of the container', 'molecules expanding'], x: 'Collisions.' },
    { q: 'If the Kelvin temperature of a gas doubles, the average kinetic energy of its molecules', o: ['doubles', 'quadruples', 'halves', 'is unchanged'], x: 'Proportional.' },
    { q: 'A temperature change of 20 °C is a change of', o: ['20 K', '293 K', '253 K', '−253 K'], x: 'Same size degree.' }
  ],
  exam: [
    { q: 'A sealed container of gas is heated.', parts: [
      { q: 'Describe the motion of the gas molecules.', m: 2, ms: ['random / in all directions', 'high speeds; collide with each other and the walls'] },
      { q: 'Explain how the molecules exert a pressure on the walls of the container.', m: 3, ms: ['molecules collide with the walls', 'each collision exerts a force (change in momentum)', 'pressure = total force ÷ area of the walls'] },
      { q: 'Explain why the pressure increases as the gas is heated.', m: 3, ms: ['molecules gain kinetic energy / move faster', 'collide with the walls more often', 'and with greater force → greater pressure'] }
    ] },
    { q: 'Explain what is meant by absolute zero and why there cannot be a lower temperature.', m: 3, ms: ['the lowest possible temperature, −273 °C / 0 K', 'molecules have (minimum/) no kinetic energy / stop moving', 'cannot have less than zero kinetic energy, so cannot be colder'] }
  ],
  sims: ['gas'], gens: ['kelvin1']
});

TOPICS.push({
  id: '5.6', unit: '5', ref: '5.20–5.22', title: 'The gas laws', short: 'p₁V₁ = p₂V₂, p₁/T₁ = p₂/T₂',
  summary: 'For a fixed amount of gas: pressure and volume at constant temperature (p₁V₁ = p₂V₂), and pressure and Kelvin temperature at constant volume (p₁/T₁ = p₂/T₂), explained with the particle model.',
  spec: [
    '5.20 explain, for a fixed amount of gas, the qualitative relationship between: pressure and volume at constant temperature; pressure and Kelvin temperature at constant volume',
    '5.21 use the relationship between the pressure and Kelvin temperature of a fixed mass of gas at constant volume: p₁/T₁ = p₂/T₂',
    '5.22 use the relationship between the pressure and volume of a fixed mass of gas at constant temperature: p₁V₁ = p₂V₂'
  ],
  learn: [
    { h: 'Pressure and volume (constant temperature)', html: `
<div class="box def"><b class="lbl">Given</b><p>$p_1V_1 = p_2V_2$ &nbsp; (fixed mass, constant temperature)</p></div>
<p>If the volume of a gas is <b>decreased</b>, the molecules have less space, so they hit the walls <b>more often</b> — the pressure <b>increases</b>. Pressure is inversely proportional to volume: halve the volume → double the pressure. The average speed is unchanged because the temperature is constant.</p>
<p>A graph of p against V is a curve; p against 1/V is a straight line through the origin.</p>` },
    { h: 'Pressure and temperature (constant volume)', html: `
<div class="box def"><b class="lbl">Given</b><p>$@frac{p_1}{T_1} = @frac{p_2}{T_2}$ &nbsp; (fixed mass, constant volume, T in kelvin)</p></div>
<p>Heating the gas makes the molecules move <b>faster</b>: they hit the walls <b>more often</b> and <b>harder</b>, so the pressure increases. Pressure is directly proportional to the <b>Kelvin</b> temperature. This is why aerosol cans must not be heated and tyre pressures rise on a hot day.</p>
<p>A graph of p against temperature in °C is a straight line that meets the temperature axis at −273 °C (absolute zero).</p>` }
  ],
  eqs: [['p_1V_1 = p_2V_2', 'constant temperature (given)'], ['@frac{p_1}{T_1} = @frac{p_2}{T_2}', 'constant volume, T in K (given)']],
  worked: [
    { q: 'A bubble of volume 2.0 cm³ at a pressure of 300 kPa rises to where the pressure is 100 kPa. Assuming constant temperature, find its new volume.', s: ['$V_2 = @frac{p_1V_1}{p_2} = @frac{300 × 2.0}{100}$', '$V_2 = 6.0 "cm"^3$'], a: '6.0 cm³' },
    { q: 'A tyre at 17 °C has a pressure of 290 kPa. After a drive it is at 37 °C. Assuming constant volume, find the new pressure.', s: ['T₁ = 290 K, T₂ = 310 K', '$p_2 = p_1 × @frac{T_2}{T_1} = 290 × @frac{310}{290}$', '$p_2 = 310 "kPa"$'], a: '310 kPa' }
  ],
  pitfalls: ['Using °C in p₁/T₁ = p₂/T₂.', 'Forgetting the conditions (fixed mass; constant T or V).', 'Explaining with molecules “getting bigger” or “pushing harder” without mentioning frequency of collisions.'],
  cards: [
    ['Pressure–volume law?', '$p_1V_1 = p_2V_2$ at constant temperature.'],
    ['Pressure–temperature law?', '$p_1/T_1 = p_2/T_2$ at constant volume (kelvin).'],
    ['Why does squashing a gas increase pressure?', 'Molecules hit the walls more often (less space).'],
    ['Why does heating a gas at constant volume increase pressure?', 'Molecules move faster: more frequent and harder collisions.'],
    ['Halve the volume at constant T → pressure?', 'Doubles.'],
    ['p against °C graph meets the axis at?', '−273 °C (absolute zero).']
  ],
  quiz: [
    { q: 'A gas at 100 kPa is squashed from 6 L to 2 L at constant temperature. The new pressure is', o: ['300 kPa', '33 kPa', '200 kPa', '600 kPa'], x: 'p₂ = 600/2.' },
    { q: 'A gas at 200 K and 50 kPa is heated to 400 K at constant volume. New pressure?', o: ['100 kPa', '25 kPa', '50 kPa', '200 kPa'], x: 'Doubles.' },
    { q: 'In p₁/T₁ = p₂/T₂, temperature must be in', o: ['kelvin', '°C', '°F', 'either'], x: 'Absolute scale.' },
    { q: 'At constant temperature, increasing the volume of a gas makes its pressure', o: ['decrease', 'increase', 'stay the same', 'double'], x: 'Inverse.' },
    { q: 'Why do aerosol cans carry the warning “do not heat”?', o: ['pressure increases with temperature and the can may explode', 'volume decreases', 'molecules slow down', 'the gas becomes liquid'], x: 'p ∝ T.' }
  ],
  exam: [
    { q: 'A student traps air in a syringe connected to a pressure gauge and slowly pushes the plunger in, keeping the temperature constant.', tag: 'prac', parts: [
      { q: 'The initial volume is 40 cm³ at 100 kPa. Calculate the pressure when the volume is 25 cm³.', m: 3, ms: ['p₁V₁ = p₂V₂', 'p₂ = 100 × 40 ÷ 25', '= 160 kPa'] },
      { q: 'Explain, using the particle model, why the pressure increases.', m: 3, ms: ['same number of molecules in a smaller volume', 'molecules hit the walls more frequently', 'greater force per unit area / pressure (speed unchanged since temperature constant)'] },
      { q: 'Explain why the student pushes the plunger in slowly.', m: 2, ms: ['work done on the gas would raise its temperature', 'pushing slowly lets energy transfer to surroundings so temperature stays constant'] }
    ] },
    { q: 'A sealed flask of gas at 20 °C has a pressure of 1.0 × 10⁵ Pa. It is placed in boiling water at 100 °C.', tag: 'calc', parts: [
      { q: 'Calculate the new pressure of the gas.', m: 3, ms: ['T₁ = 293 K, T₂ = 373 K', 'p₂ = 1.0 × 10⁵ × 373 ÷ 293', '= 1.3 × 10⁵ Pa'] },
      { q: 'Explain why the temperatures must be in kelvin.', m: 1, ms: ['pressure is proportional to absolute (Kelvin) temperature, which starts at absolute zero'] }
    ] }
  ],
  sims: ['gas'], gens: ['boyle1', 'boyle2', 'press1', 'press2']
});
