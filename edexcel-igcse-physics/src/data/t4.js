/* ==========================================================
   TOPIC 4 · ENERGY RESOURCES AND ENERGY TRANSFERS
   ========================================================== */
TOPICS.push({
  id: '4.1', unit: '4', ref: '4.1–4.5', title: 'Energy stores, transfers and efficiency', short: 'Stores, conservation, efficiency, Sankey diagrams',
  summary: 'The eight energy stores and four ways of transferring energy, the principle of conservation of energy, efficiency, and Sankey diagrams for everyday and scientific devices.',
  spec: [
    '4.1 use the following units: kilogram (kg), joule (J), metre (m), metre/second (m/s), metre/second² (m/s²), newton (N), second (s) and watt (W)',
    '4.2 describe energy transfers involving energy stores: chemical, kinetic, gravitational, elastic, thermal, magnetic, electrostatic, nuclear; energy transfers: mechanically, electrically, by heating, by radiation (light and sound)',
    '4.3 use the principle of conservation of energy',
    '4.4 know and use the relationship between efficiency, useful energy output and total energy output: efficiency = (useful energy output ÷ total energy output) × 100%',
    '4.5 describe a variety of everyday and scientific devices and situations, explaining the transfer of the input energy in terms of the above relationship, including their representation by Sankey diagrams'
  ],
  learn: [
    { h: 'Stores and transfers', html: `
[[d:stores]]
<div class="tbl"><table><tr><th>Energy stores</th><th>Examples</th></tr>
<tr><td>chemical</td><td>food, fuels, batteries</td></tr><tr><td>kinetic</td><td>any moving object</td></tr><tr><td>gravitational (potential)</td><td>an object raised above the ground</td></tr><tr><td>elastic (potential)</td><td>stretched spring, bent bow</td></tr><tr><td>thermal (internal)</td><td>hot objects — particles moving faster</td></tr><tr><td>magnetic</td><td>two magnets attracting or repelling</td></tr><tr><td>electrostatic</td><td>charges attracting or repelling</td></tr><tr><td>nuclear</td><td>atomic nuclei — released in fission, fusion, decay</td></tr></table></div>
<p>Energy is transferred between stores in four ways: <b>mechanically</b> (a force moving through a distance — work done), <b>electrically</b> (a current flowing), <b>by heating</b> (from hotter to cooler), and <b>by radiation</b> (light and sound waves).</p>
<p>Example — a battery-powered torch: chemical store (battery) → electrically → light radiation and heating → thermal store of the surroundings.</p>` },
    { h: 'Conservation of energy', html: `
<div class="box def"><b class="lbl">Principle</b><p>Energy cannot be created or destroyed — only transferred from one store to another. The total energy is always the same.</p></div>
<p>In every real transfer, some energy is <b>wasted</b>: usually transferred by heating to the thermal store of the surroundings (friction, air resistance, electrical resistance, sound). It spreads out (dissipates) and becomes less useful.</p>` },
    { h: 'Efficiency and Sankey diagrams', html: `
[[d:sankey]]
<div class="box def"><b class="lbl">Recall</b><p>$"efficiency" = @frac{"useful energy output"}{"total energy output"} × 100"%"$ &nbsp; (total output = total input)</p></div>
<p>Efficiency can also be calculated with power. It can never be more than 100%.</p>
<p>A <b>Sankey diagram</b> shows energy transfers to scale: the width of each arrow is proportional to the amount of energy. The input arrow on the left splits into a useful output (straight on) and wasted outputs (bending away, usually downwards).</p>
<p>Examples: filament lamp ≈ 10% efficient (most energy heats the surroundings); LED ≈ 40–90%; electric motor ≈ 70–80%; car engine ≈ 25–30%; power station ≈ 35–40%; kettle ≈ 90%.</p>` }
  ],
  eqs: [['"efficiency" = @frac{"useful energy output"}{"total energy output"} × 100"%"', 'recall']],
  worked: [
    { q: 'A motor is supplied with 500 J and lifts a load, gaining 350 J of gravitational energy. Calculate its efficiency and the energy wasted.', s: ['Efficiency = 350 ÷ 500 × 100% = 70%', 'Wasted = 500 − 350 = 150 J (heating the surroundings, sound)'], a: '70%; 150 J wasted' },
    { q: 'An LED lamp is 40% efficient. It gives 12 J of light each second. What is the total energy supplied each second?', s: ['Total = useful ÷ efficiency = 12 ÷ 0.40', '= 30 J'], a: '30 J' }
  ],
  pitfalls: ['Saying energy is “used up” or “lost” — it is transferred and dissipated.', 'Giving efficiency greater than 100%.', 'Drawing Sankey arrows not to scale.'],
  cards: [
    ['Name the 8 energy stores.', 'Chemical, kinetic, gravitational, elastic, thermal, magnetic, electrostatic, nuclear.'],
    ['Four ways energy is transferred?', 'Mechanically, electrically, by heating, by radiation (light and sound).'],
    ['Conservation of energy?', 'Energy cannot be created or destroyed, only transferred.'],
    ['Efficiency equation?', 'useful energy output ÷ total energy output × 100%'],
    ['What does a Sankey diagram show?', 'Energy transfers with arrow widths proportional to the energy.'],
    ['Where does wasted energy usually go?', 'Thermal store of the surroundings (dissipated).']
  ],
  quiz: [
    { q: 'A device transfers 200 J usefully from 800 J input. Its efficiency is', o: ['25%', '400%', '75%', '4%'], x: '200/800.' },
    { q: 'A stretched catapult stores energy in its', o: ['elastic store', 'kinetic store', 'chemical store', 'nuclear store'], x: 'Stretched.' },
    { q: 'Energy transferred by a current is transferred', o: ['electrically', 'mechanically', 'by heating', 'by radiation'], x: 'Current.' },
    { q: 'In a Sankey diagram, the width of an arrow represents', o: ['the amount of energy', 'the time', 'the efficiency only', 'the power'], x: 'To scale.' },
    { q: 'The principle of conservation of energy says energy', o: ['cannot be created or destroyed', 'is always wasted', 'is always useful', 'is created by batteries'], x: 'Definition.' },
    { q: 'A kettle is 90% efficient. For 2000 J input, the wasted energy is', o: ['200 J', '1800 J', '90 J', '2222 J'], x: '10% wasted.' }
  ],
  exam: [
    { q: 'A filament lamp is supplied with 60 J of energy each second. It emits 6 J of light each second.', tag: 'calc', parts: [
      { q: 'Calculate the efficiency of the lamp.', m: 2, ms: ['6 ÷ 60 × 100%', '= 10%'] },
      { q: 'Draw a labelled Sankey diagram for the lamp.', m: 3, ms: ['input arrow labelled 60 J electrical', 'useful arrow 6 J light, one tenth of the width', 'wasted arrow 54 J thermal/heating, nine tenths of width'] },
      { q: 'An LED lamp gives the same light output with an efficiency of 40%. Calculate the energy it needs each second and explain why replacing filament lamps with LEDs saves money.', m: 3, ms: ['total = 6 ÷ 0.40 = 15 J per second', 'less energy input for same light', 'so less electricity bought/lower bills'] }
    ] },
    { q: 'Describe the energy transfers when a ball is thrown upwards, reaches its highest point and falls back to the ground. Refer to the principle of conservation of energy.', tag: 'ext', m: 5, ms: ['chemical store (muscles) → kinetic store of ball, mechanically', 'rising: kinetic → gravitational store', 'at the top: minimum kinetic, maximum gravitational', 'falling: gravitational → kinetic', 'some energy dissipated to thermal store of surroundings by air resistance / on impact (sound, heating); total energy constant'] }
  ],
  sims: ['sankey'], gens: ['eff1', 'eff2', 'eff3', 'eff4']
});

TOPICS.push({
  id: '4.2', unit: '4', ref: '4.6–4.10', title: 'Thermal energy transfer', short: 'Conduction, convection, radiation, insulation',
  summary: 'How thermal energy is transferred by conduction, convection and radiation; convection in everyday life; how surface and temperature affect emission and absorption; the practical; and reducing unwanted transfer.',
  spec: [
    '4.6 describe how thermal energy transfer may take place by conduction, convection and radiation',
    '4.7 explain the role of convection in everyday phenomena',
    '4.8 explain how emission and absorption of radiation are related to surface and temperature',
    '4.9 practical: investigate thermal energy transfer by conduction, convection and radiation',
    '4.10 explain ways of reducing unwanted energy transfer, such as insulation'
  ],
  learn: [
    { h: 'Conduction', html: `
<p><b>Conduction</b> happens mainly in <b>solids</b>. When one end is heated its particles vibrate more; they pass energy to neighbouring particles by collisions. In <b>metals</b>, <b>free (delocalised) electrons</b> move through the lattice and transfer energy quickly, so metals are good conductors. Non-metals, liquids and especially gases (particles far apart) are poor conductors — <b>insulators</b>. Trapped air is an excellent insulator.</p>` },
    { h: 'Convection', html: `
<p><b>Convection</b> happens in <b>fluids</b> (liquids and gases). The heated fluid <b>expands</b>, becomes <b>less dense</b> and <b>rises</b>; cooler, denser fluid sinks to take its place, forming a <b>convection current</b>. Convection cannot happen in solids because particles cannot move from place to place.</p>
<p><b>Everyday phenomena:</b> a room heated by a radiator (warm air rises, circulates); a kettle heating from the element at the bottom; the freezer compartment at the top of a fridge (cold air sinks); sea breezes by day (land heats faster, air above rises, cooler air from the sea replaces it) and land breezes at night; hot-air balloons; gliders using thermals; weather and ocean currents.</p>` },
    { h: 'Radiation', html: `
[[d:leslie]]
<p><b>Thermal radiation</b> is <b>infrared</b> electromagnetic radiation. All objects emit and absorb it; it needs <b>no medium</b> — it travels through a vacuum (e.g. from the Sun).</p>
<ul><li><b>Hotter</b> objects emit more radiation (and the rate rises steeply with temperature).</li><li><b>Dull, black</b> surfaces are the <b>best emitters and best absorbers</b>.</li><li><b>Shiny, silvered or white</b> surfaces are poor emitters and poor absorbers — good <b>reflectors</b>.</li></ul>
<p>Examples: solar panels painted black; houses in hot countries painted white; emergency blankets shiny; radiators… mostly transfer energy by convection despite their name.</p>` },
    { h: 'Practicals (4.9)', html: `
<ul><li><b>Conduction:</b> rods of different metals (same length and thickness) with wax/drawing pins attached at the far end; heat one end equally; the pin falls first from the best conductor. Or time how long a thermometer at the end takes to rise.</li><li><b>Convection:</b> drop a potassium permanganate crystal at the side of a beaker of water and heat gently below it — the purple streak shows the convection current rising above the heat and sinking elsewhere. Or a smoke/candle convection box.</li><li><b>Radiation:</b> a <b>Leslie cube</b> filled with hot water has faces that are matt black, shiny black, matt white and shiny silver. Measure the radiation from each face at the same distance with an infrared detector/thermometer: matt black emits most, shiny silver least. For <b>absorption</b>: two cans (black, silver) with thermometers at equal distances from a heater — the black can warms faster. Or wax-stuck coins on black and shiny plates either side of a heater.</li></ul>
<p>Control variables: same volume/starting temperature of water, same distance from the source, same time.</p>` },
    { h: 'Reducing unwanted energy transfer', html: `
<div class="tbl"><table><tr><th>Method</th><th>How it works</th></tr>
<tr><td>Loft insulation (fibreglass, mineral wool)</td><td>traps air, a poor conductor; stops convection in the loft</td></tr>
<tr><td>Cavity wall insulation (foam)</td><td>traps air in pockets, preventing convection currents in the cavity</td></tr>
<tr><td>Double/triple glazing</td><td>gap of air or vacuum between panes reduces conduction and convection</td></tr>
<tr><td>Draught excluders, carpets, curtains</td><td>reduce convection and conduction</td></tr>
<tr><td>Reflective foil behind radiators, shiny surfaces</td><td>reflect infrared radiation back</td></tr>
<tr><td><b>Vacuum flask</b></td><td>vacuum between walls stops conduction and convection; silvered walls reduce radiation; stopper reduces convection and evaporation</td></tr>
<tr><td>Clothing, animal fur, feathers, duvets</td><td>trap layers of air</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why the element of an electric kettle is at the bottom.', s: ['Water near the element is heated, expands and becomes less dense, so it rises.', 'Cooler, denser water sinks to replace it and is heated in turn.', 'A convection current forms, heating all the water. An element at the top would only heat the top layer.'], a: 'So convection currents heat all the water.' }
  ],
  pitfalls: ['Saying “heat rises” — hot fluid rises because it is less dense.', 'Saying particles “get bigger” when heated — they move faster/further apart.', 'Saying radiation needs a medium.', 'Saying black surfaces reflect infrared well.'],
  cards: [
    ['How does conduction work in metals?', 'Free electrons transfer energy quickly, plus vibrating particles colliding.'],
    ['Why are gases poor conductors?', 'Particles are far apart, so collisions transfer energy slowly.'],
    ['What is convection?', 'Heated fluid expands, becomes less dense and rises; cooler fluid sinks — a current.'],
    ['Why can’t convection happen in solids?', 'Particles cannot move from place to place.'],
    ['What type of wave is thermal radiation?', 'Infrared (electromagnetic).'],
    ['Best emitter and absorber of radiation?', 'Dull (matt) black surface.'],
    ['Best reflector?', 'Shiny, silvered (or white) surface.'],
    ['How does a vacuum flask work?', 'Vacuum stops conduction/convection; silvered walls reduce radiation; stopper reduces convection/evaporation.'],
    ['What is a Leslie cube used for?', 'Comparing radiation emitted from different surfaces at the same temperature.']
  ],
  quiz: [
    { q: 'Thermal energy from the Sun reaches Earth by', o: ['radiation', 'conduction', 'convection', 'all three'], x: 'Through a vacuum.' },
    { q: 'Which surface is the best absorber of infrared?', o: ['matt black', 'shiny silver', 'matt white', 'shiny white'], x: 'Dark, dull.' },
    { q: 'Convection cannot occur in', o: ['solids', 'liquids', 'gases', 'air'], x: 'No flow.' },
    { q: 'Cavity wall insulation reduces energy transfer mainly by', o: ['preventing convection in the cavity', 'reflecting radiation', 'conducting heat away', 'increasing the air gap'], x: 'Traps air.' },
    { q: 'Metals are good conductors because they have', o: ['free electrons', 'large atoms', 'a high density', 'a shiny surface'], x: 'Delocalised electrons.' },
    { q: 'A freezer compartment is at the top of a fridge because', o: ['cold air sinks, setting up convection currents', 'cold air rises', 'it conducts better', 'radiation travels upwards'], x: 'Denser air sinks.' },
    { q: 'In a Leslie cube, which face emits the least radiation?', o: ['shiny silver', 'matt black', 'shiny black', 'matt white'], x: 'Poor emitter.' }
  ],
  exam: [
    { q: 'A student uses a Leslie cube to compare the infrared radiation emitted by different surfaces.', tag: 'prac', parts: [
      { q: 'Describe how the student should carry out the investigation.', m: 4, ms: ['fill the cube with hot (boiling) water', 'place an infrared detector/thermometer at the same distance from each face', 'measure the reading for each face (after the same time / quickly so temperature is the same)', 'repeat and compare'] },
      { q: 'State the independent and one control variable.', m: 2, ms: ['independent: type of surface', 'control: distance from face / temperature of water / same detector'] },
      { q: 'Predict which face gives the highest reading and explain why.', m: 2, ms: ['matt black', 'dull black surfaces are the best emitters of infrared'] }
    ] },
    { q: 'Explain how a vacuum flask keeps a hot drink hot. Refer to conduction, convection and radiation.', tag: 'ext', m: 6, ms: ['vacuum between the double walls', 'so no conduction (no particles) across the gap', 'and no convection across the gap', 'silvered surfaces reflect infrared radiation back towards the drink', 'poor emitters so little radiation emitted', 'stopper (insulating) reduces convection / evaporation / conduction at the top'] },
    { q: 'On a sunny day, a breeze blows from the sea towards the land. Explain why.', m: 4, ms: ['land heats up faster than the sea', 'air above the land is heated, expands, becomes less dense and rises', 'cooler (denser) air from over the sea moves in to replace it', 'a convection current / sea breeze'] }
  ],
  sims: ['leslie', 'heating'], gens: []
});

TOPICS.push({
  id: '4.3', unit: '4', ref: '4.11–4.17', title: 'Work, energy and power', short: 'W = Fd, GPE = mgh, KE = ½mv², P = W/t',
  summary: 'Work done W = Fd equals energy transferred; gravitational potential energy mgh; kinetic energy ½mv²; how conservation links them; and power as the rate of transfer of energy.',
  spec: [
    '4.11 know and use the relationship between work done, force and distance moved in the direction of the force: W = F × d',
    '4.12 know that work done is equal to energy transferred',
    '4.13 know and use the relationship between gravitational potential energy, mass, gravitational field strength and height: GPE = m × g × h',
    '4.14 know and use the relationship: KE = ½ × m × v²',
    '4.15 understand how conservation of energy produces a link between gravitational potential energy, kinetic energy and work',
    '4.16 describe power as the rate of transfer of energy or the rate of doing work',
    '4.17 use the relationship between power, work done (energy transferred) and time taken: P = W/t'
  ],
  learn: [
    { h: 'Work done', html: `
<div class="box def"><b class="lbl">Recall</b><p>$"work done" = "force" × "distance moved in the direction of the force"$ &nbsp; $W = F × d$ &nbsp; (J = N × m)</p></div>
<p><b>Work done = energy transferred.</b> 1 joule of work is done when a force of 1 N moves through 1 m. Work done against friction transfers energy to the thermal store (things get warm).</p>` },
    { h: 'GPE and KE', html: `
<div class="box def"><b class="lbl">Recall</b><p>$"GPE" = m × g × h$ &nbsp; (g = 10 N/kg) &nbsp; &nbsp; $"KE" = @frac{1}{2} × m × v^2$</p></div>
<p>The GPE equation gives the <b>change</b> in gravitational store when an object is raised through height h. Doubling speed <b>quadruples</b> kinetic energy.</p>` },
    { h: 'Linking GPE, KE and work', html: `
<p>For a falling object (no air resistance): <b>GPE lost = KE gained</b>, so $mgh = @frac{1}{2}mv^2$ and $v = @sqrt{2gh}$ — independent of mass.</p>
<p>When a moving car brakes to rest: <b>work done by brakes = KE lost</b>, so $F × d = @frac{1}{2}mv^2$. This is why braking distance ∝ v².</p>
<p>A roller coaster, pendulum or ski jump continually swaps GPE and KE; friction and air resistance do work that dissipates some energy as thermal energy, so it never quite returns to its starting height.</p>` },
    { h: 'Power', html: `
<div class="box def"><b class="lbl">Given</b><p>$"power" = @frac{"work done"}{"time taken"}$ &nbsp; $P = @frac{W}{t}$ &nbsp; (W = J/s)</p></div>
<p><b>Power is the rate of transfer of energy, or the rate of doing work.</b> 1 watt = 1 joule per second. Two people climbing the same stairs do the same work; the one who climbs faster develops more power.</p>` }
  ],
  eqs: [['W = F × d', 'work done (recall)'], ['"GPE" = m × g × h', 'recall'], ['"KE" = @frac{1}{2} × m × v^2', 'recall'], ['P = @frac{W}{t}', 'power (given)']],
  worked: [
    { q: 'A 50 kg student runs up stairs 4.0 m high in 5.0 s. Calculate the GPE gained and her power (g = 10 N/kg).', s: ['GPE = mgh = 50 × 10 × 4.0 = 2000 J', 'P = W/t = 2000 ÷ 5.0 = 400 W'], a: '2000 J; 400 W' },
    { q: 'A 0.20 kg ball is dropped from 5.0 m. Ignoring air resistance, calculate its speed just before hitting the ground.', s: ['GPE lost = mgh = 0.20 × 10 × 5.0 = 10 J', 'KE gained = 10 J = ½ × 0.20 × v²', 'v² = 100 → v = 10 m/s'], a: '10 m/s' },
    { q: 'A 1000 kg car at 20 m/s brakes to rest over 40 m. Calculate the average braking force.', s: ['KE = ½ × 1000 × 20² = 200 000 J', 'Work done by brakes = KE = F × d', 'F = 200 000 ÷ 40 = 5000 N'], a: '5000 N' }
  ],
  pitfalls: ['Forgetting to square v in KE.', 'Using the distance not in the direction of the force.', 'Using mass instead of weight in W = F × d when lifting (F = mg).', 'Mixing up power (W) and energy (J).'],
  cards: [
    ['Work done equation?', '$W = F × d$'],
    ['Work done equals…', 'energy transferred.'],
    ['GPE equation?', '$GPE = mgh$'],
    ['KE equation?', '$KE = ½mv^2$'],
    ['Speed of object falling from height h (no air resistance)?', '$v = @sqrt{2gh}$'],
    ['Define power.', 'Rate of transfer of energy / rate of doing work.'],
    ['Power equation?', '$P = W ÷ t$'],
    ['1 watt = ?', '1 joule per second.']
  ],
  quiz: [
    { q: 'A 20 N force pushes a box 3 m. Work done?', o: ['60 J', '6.7 J', '23 J', '0.15 J'], x: '20 × 3.' },
    { q: 'KE of a 2 kg ball at 3 m/s is', o: ['9 J', '6 J', '18 J', '3 J'], x: '½ × 2 × 9.' },
    { q: 'GPE gained by a 5 kg mass lifted 2 m (g = 10 N/kg) is', o: ['100 J', '10 J', '25 J', '1000 J'], x: '5 × 10 × 2.' },
    { q: 'A 60 W motor works for 10 s. It transfers', o: ['600 J', '6 J', '0.17 J', '70 J'], x: 'W = Pt.' },
    { q: 'If an object’s speed doubles, its kinetic energy', o: ['quadruples', 'doubles', 'halves', 'stays the same'], x: 'v².' },
    { q: 'Power is measured in', o: ['watts', 'joules', 'newtons', 'kg m/s'], x: 'J/s.' },
    { q: 'A crane lifts 800 N through 15 m in 20 s. Its useful power is', o: ['600 W', '12 000 W', '240 W', '53 W'], x: '12 000 J ÷ 20.' }
  ],
  exam: [
    { q: 'A skier of mass 70 kg starts from rest at the top of a slope 45 m high. g = 10 N/kg.', tag: 'calc', parts: [
      { q: 'Calculate the gravitational potential energy lost by the skier in reaching the bottom.', m: 2, ms: ['GPE = 70 × 10 × 45', '= 31 500 J'] },
      { q: 'Calculate the maximum possible speed at the bottom.', m: 3, ms: ['KE = GPE = 31 500 J', 'v² = 2 × 31 500 ÷ 70 = 900', 'v = 30 m/s'] },
      { q: 'Her actual speed at the bottom is 24 m/s. Calculate the work done against friction and air resistance.', m: 3, ms: ['actual KE = ½ × 70 × 24² = 20 160 J', 'work against resistance = 31 500 − 20 160', '= 11 340 J'] },
      { q: 'The slope is 150 m long. Calculate the average resistive force.', m: 2, ms: ['F = W ÷ d = 11 340 ÷ 150', '= 76 N'] }
    ] },
    { q: 'A student wants to measure her own power by running up a flight of stairs.', tag: 'prac', parts: [
      { q: 'List the measurements she needs to take and the equipment she would use.', m: 3, ms: ['her mass — bathroom scales', 'vertical height of the stairs — metre rule/tape (height of one step × number of steps)', 'time taken — stopwatch'] },
      { q: 'Explain how she would calculate her power.', m: 2, ms: ['work done = mgh', 'power = work done ÷ time'] },
      { q: 'Suggest why her calculated power is less than the power her muscles actually develop.', m: 1, ms: ['energy also transferred to kinetic/thermal stores (not only GPE) / inefficiency of muscles'] }
    ] },
    { q: 'Use ideas about energy to explain why the braking distance of a car is four times greater when its speed is doubled.', m: 3, ms: ['work done by brakes = kinetic energy lost (F × d = ½mv²)', 'KE ∝ v², so doubling v gives four times the KE', 'with the same braking force, distance is four times greater'] }
  ],
  sims: ['energy'], gens: ['work1', 'work2', 'gpe1', 'gpe2', 'ke1', 'ke2', 'fall1', 'power1', 'power2', 'power3']
});

TOPICS.push({
  id: '4.4', unit: '4', ref: '4.18–4.19', po: true, title: 'Energy resources and electricity generation', short: 'Renewables, fossil fuels, nuclear',
  summary: 'The energy transfers involved in generating electricity from wind, water, geothermal, solar heating, solar cells, fossil fuels and nuclear power, and the advantages and disadvantages of each for large-scale production.',
  spec: [
    '4.18P describe the energy transfers involved in generating electricity using: wind, water, geothermal resources, solar heating systems, solar cells, fossil fuels, nuclear power',
    '4.19P describe the advantages and disadvantages of methods of large-scale electricity production from various renewable and non-renewable resources'
  ],
  learn: [
    { h: 'Thermal power stations', html: `
[[d:grid]]
<p>In <b>fossil-fuel</b> (coal, oil, gas) and <b>nuclear</b> power stations the same basic steps happen: <b>energy released → water heated → steam → turbine turns → generator → electricity</b>.</p>
<ul><li><b>Fossil fuels:</b> chemical store of the fuel → (burning) thermal store of the water/steam → kinetic store of the turbine → generator → transferred electrically.</li><li><b>Nuclear:</b> nuclear store of uranium → (fission) thermal store of coolant/water → steam → kinetic (turbine) → electrically.</li></ul>
<p>Efficiency is only about 35–40% — most energy is dissipated to the surroundings (cooling towers).</p>` },
    { h: 'Renewable resources', html: `
<div class="tbl"><table><tr><th>Resource</th><th>Energy transfers</th></tr>
<tr><td><b>Wind</b></td><td>kinetic store of moving air → kinetic store of turbine blades → generator → electrically</td></tr>
<tr><td><b>Water — hydroelectric</b></td><td>gravitational store of water held behind a dam → kinetic as it falls → turbine → generator</td></tr>
<tr><td><b>Water — tidal / wave</b></td><td>kinetic (and gravitational) store of moving sea water → turbine or floating generator</td></tr>
<tr><td><b>Geothermal</b></td><td>thermal store of hot rocks underground (from radioactive decay) → water pumped down, returns as steam → turbine → generator</td></tr>
<tr><td><b>Solar heating systems</b></td><td>radiation from the Sun → thermal store of water in black panels (heating homes/water; large solar towers can make steam for turbines)</td></tr>
<tr><td><b>Solar cells</b></td><td>light radiation → transferred electrically directly (no turbine)</td></tr></table></div>` },
    { h: 'Advantages and disadvantages', html: `
<div class="tbl"><table><tr><th>Resource</th><th>Advantages</th><th>Disadvantages</th></tr>
<tr><td>Fossil fuels</td><td>reliable, available on demand; high power output; gas stations start quickly; relatively cheap to build</td><td>non-renewable; CO₂ → global warming; SO₂ → acid rain (coal); mining/spills</td></tr>
<tr><td>Nuclear</td><td>no CO₂ in operation; very large output from little fuel; reliable</td><td>radioactive waste lasting thousands of years; risk of accidents; very expensive to build and decommission; non-renewable</td></tr>
<tr><td>Wind</td><td>renewable; no fuel cost; no CO₂ in operation</td><td>unreliable (no wind); noisy; visual impact; many turbines needed</td></tr>
<tr><td>Hydroelectric</td><td>renewable; reliable; responds quickly to demand; can store energy (pumped storage)</td><td>floods valleys, destroys habitats; expensive dams; few suitable sites</td></tr>
<tr><td>Tidal/wave</td><td>renewable; tides predictable</td><td>affect habitats and shipping; expensive; wave output variable</td></tr>
<tr><td>Geothermal</td><td>renewable; reliable; little pollution</td><td>only in volcanic/suitable areas; drilling costs</td></tr>
<tr><td>Solar</td><td>renewable; no fuel; good in remote areas</td><td>not at night; depends on weather; low power per m² — needs large areas</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Describe the energy transfers in a hydroelectric power station.', s: ['Water stored high behind a dam has a gravitational store.', 'As it flows down it transfers energy to its kinetic store.', 'The moving water turns turbines (kinetic store), which drive generators, transferring energy electrically.'], a: 'Gravitational → kinetic → turbine → generator → electrical.' }
  ],
  pitfalls: ['Saying renewable resources produce no pollution at all (manufacture, habitats).', 'Saying solar cells use a turbine.', 'Forgetting reliability when evaluating resources.'],
  cards: [
    ['Energy chain in a fossil-fuel power station?', 'Chemical → thermal (steam) → kinetic (turbine) → generator → electrical.', 'po'],
    ['Energy chain in a nuclear power station?', 'Nuclear → thermal → kinetic (turbine) → generator → electrical.', 'po'],
    ['Energy transfer in a solar cell?', 'Light → electrical, directly.', 'po'],
    ['Energy transfer in hydroelectric?', 'Gravitational store of water → kinetic → turbine/generator → electrical.', 'po'],
    ['Where does geothermal energy come from?', 'Hot rocks underground, heated by radioactive decay.', 'po'],
    ['Main disadvantage of wind power?', 'Unreliable — depends on wind.', 'po'],
    ['Main disadvantage of nuclear?', 'Long-lived radioactive waste; accident risk; costly decommissioning.', 'po'],
    ['Main disadvantage of fossil fuels?', 'Non-renewable; CO₂ causes global warming.', 'po']
  ],
  quiz: [
    { q: 'Which resource transfers energy directly to electricity without a turbine?', o: ['solar cells', 'wind', 'geothermal', 'coal'], x: 'Photovoltaic.', po: 1 },
    { q: 'Which is non-renewable?', o: ['nuclear (uranium)', 'wind', 'tidal', 'geothermal'], x: 'Finite fuel.', po: 1 },
    { q: 'Hydroelectric power uses the', o: ['gravitational store of water', 'thermal store of rocks', 'chemical store of fuel', 'nuclear store'], x: 'Water held high.', po: 1 },
    { q: 'A disadvantage of solar power is', o: ['it does not work at night', 'it releases CO₂ in use', 'it uses up fuel', 'it produces radioactive waste'], x: 'Needs sunlight.', po: 1 },
    { q: 'Which can respond quickly to a sudden increase in demand?', o: ['hydroelectric / gas', 'nuclear', 'solar at night', 'coal from cold'], x: 'Quick start.', po: 1 }
  ],
  exam: [
    { q: 'A country is deciding between building a gas-fired power station and a wind farm.', tag: 'ext', po: 1, parts: [
      { q: 'Describe the energy transfers in a gas-fired power station.', m: 3, ms: ['chemical store of gas → thermal (burning heats water to steam)', 'steam turns turbine (kinetic store)', 'turbine drives generator → energy transferred electrically'] },
      { q: 'Evaluate the two options for providing the country’s electricity.', m: 6, ms: ['gas: reliable / available on demand / quick start-up', 'gas: non-renewable, produces CO₂ → global warming', 'wind: renewable, no fuel cost, no CO₂ during operation', 'wind: unreliable — no output when wind is too slow or too fast', 'wind: needs large area / visual and noise impact; many turbines for same output', 'judgement, e.g. wind with gas as back-up / depends on local wind conditions'] }
    ] },
    { q: 'Describe how a geothermal power station generates electricity and give one advantage and one disadvantage.', po: 1, m: 5, ms: ['cold water pumped down into hot rocks', 'water heated and returns as steam', 'steam drives turbine and generator', 'advantage: renewable / reliable / little CO₂', 'disadvantage: only possible in certain (volcanic) locations / drilling expensive'] }
  ],
  sims: ['resources'], gens: []
});
