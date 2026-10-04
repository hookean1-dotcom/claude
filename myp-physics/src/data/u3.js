/* ==========================================================
   UNIT 3 · Thermal physics
   Strand 1: describing internal energy · Strand 2: quantifying energy change
   ========================================================== */
TOPICS.push(lw('3.1', {
  id: '3.1', unit: '3', strand: 1, as: [1], ref: 'Strand 1 · AS 1', title: 'Particles, temperature and internal energy', short: 'States of matter, kelvin, internal energy',
  summary: 'Matter is made of particles in constant motion. Temperature measures their average kinetic energy; internal energy is the total kinetic and potential energy of all the particles. Changing internal energy changes either the temperature or the state.',
  spec: ['Describe the arrangement and motion of particles in solids, liquids and gases', 'Define internal energy as the total kinetic and potential energy of the particles in a system', 'Relate temperature to the average kinetic energy of the particles', 'Convert between °C and kelvin (T/K = θ/°C + 273); describe absolute zero', 'Explain that heating increases internal energy, either raising the temperature or changing the state', 'Use density ρ = m ÷ V and the particle model to compare states'],
  learn: [1,
    LW['3.2'].learn[0],
    { h: 'Temperature and the kelvin scale', html: `
<p><b>Temperature</b> is a measure of the <b>average kinetic energy</b> of the particles. Hotter particles move (or vibrate) faster on average.</p>
<p>If you cool a substance, its particles slow down. At <b>absolute zero</b>, −273 °C (more precisely −273.15 °C), the particles have the minimum possible kinetic energy — nothing can be colder. The <b>kelvin</b> scale starts there:</p>
<div class="box def"><b class="lbl">Converting temperatures</b><p>$T / "K" = θ / °"C" + 273$ &nbsp; e.g. 27 °C = 300 K; 0 K = −273 °C</p><p class="small">A temperature <b>change</b> is the same on both scales: a rise of 10 °C is a rise of 10 K.</p></div>
<p>Temperature is <b>not</b> the same as internal energy. A bath of warm water at 40 °C has far more internal energy than a red-hot pin at 800 °C, because it contains vastly more particles.</p>` },
    3, 0],
  quiz: [0, 1, 3, 4, 5, 8],
  addQuiz: [
    { q: 'Temperature is a measure of', o: ['the average kinetic energy of the particles', 'the total energy of the particles', 'the potential energy of the particles', 'the number of particles'], x: 'Average KE.' },
    { q: '−73 °C in kelvin is', o: ['200 K', '346 K', '−200 K', '73 K'], x: '−73 + 273.' },
    { q: 'Absolute zero is', o: ['−273 °C, where particles have minimum kinetic energy', '0 °C, where water freezes', '−100 °C', 'the temperature of outer space'], x: '0 K.' },
    { q: 'Internal energy is the total of', o: ['the kinetic and potential energies of all the particles', 'the kinetic energy of the object', 'the temperature and the mass', 'the heat in an object'], x: 'Definition.' },
    { q: 'A warm bath and a red-hot needle. Which has more internal energy?', o: ['the bath', 'the needle', 'they are equal', 'it depends only on temperature'], x: 'Far more particles.' }
  ],
  cards: [1, 2, 3, 4, 6, 7, 8],
  addCards: [['Define internal energy.', 'Total kinetic + potential energy of all the particles in a system.'], ['What does temperature measure?', 'The average kinetic energy of the particles.'], ['Absolute zero?', '0 K = −273 °C, minimum particle kinetic energy.'], ['°C to K?', 'Add 273.'], ['Two possible effects of heating?', 'Raise the temperature or change the state.']],
  exam: [1], addExam: [
    { q: 'Use the particle model to describe what happens to the particles of a block of ice as it is heated from −10 °C until it has completely melted. Refer to kinetic and potential energy.', m: 5, cr: 'A', ms: ['From −10 °C to 0 °C the particles vibrate faster.', 'Average kinetic energy increases so temperature rises.', 'At 0 °C energy is used to break bonds/overcome forces between particles.', 'Potential energy of the particles increases; kinetic energy (temperature) stays constant.', 'Particles become free to move past each other (liquid); internal energy increases throughout.'] }
  ],
  worked: [], addWorked: [{ q: 'Convert 37 °C and −196 °C (liquid nitrogen) into kelvin, and find the temperature difference in kelvin.', s: ['37 + 273 = 310 K', '−196 + 273 = 77 K', 'Difference = 310 − 77 = 233 K (also 233 °C)'], a: '310 K, 77 K; 233 K' }],
  eqs: [['T / "K" = θ / °"C" + 273', 'kelvin conversion'], ['ρ = @frac{m}{V}', 'density']],
  pitfalls: ['Confusing temperature (average KE) with internal energy (total energy).', 'Saying particles in a solid do not move — they vibrate.', 'Writing degrees kelvin (°K) — it is just K.', 'Thinking particles themselves expand when heated.'],
  sims: ['states'], gens: ['kelvin', 'dens1']
}));

TOPICS.push({
  id: '3.2', unit: '3', strand: 2, as: [2, 4, 6], ref: 'Strand 2 · AS 2, 4, 6', title: 'Heat transfer: conduction, convection, radiation and evaporation', short: 'How energy moves from hot to cold',
  summary: 'Heating is the movement of energy from hotter to colder regions. Explain conduction, convection and evaporation in terms of particle movement, infrared radiation as electromagnetic waves, and how insulation reduces each.',
  spec: ['Explain that energy is transferred by heating from regions of higher temperature to lower temperature', 'Explain conduction in terms of particle vibrations and free electrons (why metals are good conductors)', 'Explain convection in fluids in terms of density changes; describe convection in weather', 'Explain cooling by evaporation in terms of the fastest particles escaping', 'Describe infrared radiation as an electromagnetic wave needing no medium; compare emitters and absorbers (black/matt vs shiny/white)', 'Explain how insulation reduces energy transfer (e.g. a vacuum flask, double glazing, clothing)'],
  learn: [
    { h: 'Heat flows from hot to cold', html: `
<p>When two regions are at different temperatures, energy is transferred from the <b>hotter</b> to the <b>colder</b> until they reach the same temperature — <b>thermal equilibrium</b>. This happens by three mechanisms (plus evaporation, which carries energy away with escaping particles).</p>
<p>The greater the temperature difference, the faster the rate of transfer — which is why a hot drink cools quickly at first and then more slowly.</p>
[[d:heatmodes]]` },
    { h: 'Conduction', html: `
<p>In a solid, particles at the hot end vibrate more vigorously and pass energy to their neighbours through the bonds between them. This is slow on its own.</p>
<p><b>Metals</b> conduct far better because they contain <b>free (delocalised) electrons</b> that move quickly through the lattice, carrying energy from hot to cold regions. Gases are very poor conductors because their particles are far apart — so trapped air (in wool, foam, feathers, double glazing) is an excellent <b>insulator</b>.</p>` },
    { h: 'Convection', html: `
<p>Convection happens in <b>fluids</b> (liquids and gases). When part of a fluid is heated, its particles move faster and spread out, so that part expands and becomes <b>less dense</b>. It rises; cooler, denser fluid sinks to take its place. The result is a circulating <b>convection current</b>.</p>
<p><b>In weather:</b> land warms faster than sea by day, so warm air rises over the land and cool air flows in from the sea — a <b>sea breeze</b>. Strong convection forms thunderclouds; on a planetary scale, convection drives the trade winds and monsoons.</p>` },
    { h: 'Evaporation', html: `
<p>Particles in a liquid have a range of speeds. The <b>fastest</b> particles near the surface can escape. Because the most energetic particles leave, the <b>average kinetic energy</b> of those that remain falls — so the liquid <b>cools</b>. This is why sweating cools you and why wet clothes feel cold.</p>
<p>Evaporation is faster with a higher temperature, a larger surface area, moving air (a breeze) and lower humidity.</p>` },
    { h: 'Radiation (infrared)', html: `
<p>All objects emit and absorb <b>infrared (IR) radiation</b> — electromagnetic waves. Radiation needs <b>no medium</b>, so it is the only way energy reaches us from the Sun across the vacuum of space. Hotter objects emit more, and at shorter wavelengths.</p>
<div class="tbl"><table><tr><th>Surface</th><th>Emitting</th><th>Absorbing</th></tr><tr><td>matt black</td><td>best emitter</td><td>best absorber</td></tr><tr><td>shiny silver / white</td><td>worst emitter</td><td>worst absorber (best reflector)</td></tr></table></div>
[[d:leslie]]` },
    lwDeep(LW['1.3'].learn[1]),
    { h: 'Putting it together: the vacuum flask', html: `
<div class="tbl"><table><tr><th>Feature</th><th>Reduces</th></tr><tr><td>vacuum between two glass walls</td><td>conduction and convection (no particles)</td></tr><tr><td>silvered inner surfaces</td><td>radiation (poor emitter, good reflector)</td></tr><tr><td>stopper</td><td>convection and evaporation from the top</td></tr><tr><td>plastic case and supports</td><td>conduction (poor conductors)</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why a metal spoon in hot soup quickly feels hot, but a wooden spoon does not.', s: ['Both conduct by particle vibrations passing energy along.', 'Metals also have free electrons that move quickly and transfer energy rapidly.', 'Wood has no free electrons, so it is a poor conductor (insulator).'], a: 'Free electrons make metals good conductors' },
    { q: 'Explain why a puddle dries faster on a windy day.', s: ['The fastest-moving water particles escape from the surface (evaporation).', 'Wind carries water vapour away from above the puddle.', 'Fewer particles return to the liquid, so the net rate of evaporation increases.'], a: 'Wind removes the vapour, increasing net evaporation' }
  ],
  pitfalls: ['Saying “heat rises” — hot fluid rises because it is less dense.', 'Saying “cold” is transferred — energy always moves from hot to cold.', 'Describing convection in solids (particles cannot flow).', 'Saying radiation needs a medium.', 'Explaining insulation by air without saying it is trapped (otherwise convection occurs).'],
  cards: [
    ['Direction of energy transfer by heating?', 'From hotter to colder regions.'], ['Thermal equilibrium?', 'Same temperature — no net energy transfer.'], ['Why are metals good conductors?', 'Free electrons carry energy quickly through the lattice.'], ['Why is trapped air a good insulator?', 'Gas particles far apart (poor conductor) and trapped (no convection).'],
    ['Convection — why does hot fluid rise?', 'It expands and becomes less dense.'], ['Sea breeze?', 'Land warms faster by day; warm air rises over land; cooler air flows in from the sea.'], ['Why does evaporation cool a liquid?', 'Fastest particles escape, lowering the average kinetic energy of the rest.'],
    ['Factors increasing evaporation?', 'Higher temperature, larger surface area, wind, lower humidity.'], ['Which transfer works in a vacuum?', 'Radiation (infrared).'], ['Best emitter and absorber of IR?', 'Matt black.'], ['Vacuum flask: what does the vacuum stop?', 'Conduction and convection.'], ['Vacuum flask: silvered walls?', 'Reduce radiation.']
  ],
  quiz: [
    { q: 'Energy is transferred by heating from', o: ['a hotter region to a colder region', 'a colder region to a hotter region', 'a denser region to a less dense one', 'a liquid to a solid'], x: 'Hot → cold.' },
    { q: 'Metals are good thermal conductors because they have', o: ['free electrons', 'large particles', 'a high density', 'shiny surfaces'], x: 'Delocalised electrons.' },
    { q: 'Convection cannot occur in', o: ['solids', 'liquids', 'gases', 'the atmosphere'], x: 'Particles must flow.' },
    { q: 'In a convection current, hot air rises because it', o: ['is less dense', 'has more particles', 'is lighter than heat', 'is attracted upwards'], x: 'Expands → lower density.' },
    { q: 'Evaporation cools a liquid because', o: ['the fastest particles escape', 'the slowest particles escape', 'particles get smaller', 'the liquid absorbs infrared'], x: 'Average KE of remaining particles falls.' },
    { q: 'The Sun’s energy reaches the Earth by', o: ['radiation', 'conduction', 'convection', 'evaporation'], x: 'Space is a vacuum.' },
    { q: 'Which surface is the best absorber of infrared?', o: ['matt black', 'shiny silver', 'gloss white', 'polished aluminium'], x: 'Dark and dull.' },
    { q: 'The vacuum in a vacuum flask reduces', o: ['conduction and convection', 'radiation only', 'evaporation only', 'all transfers equally'], x: 'No particles.' },
    { q: 'A sea breeze blows from the sea to the land during the day because', o: ['air over the warmer land rises, and cooler air from the sea replaces it', 'the sea is warmer than the land', 'cold air rises over the sea', 'the wind follows the tide'], x: 'Convection.' },
    { q: 'Double glazing reduces energy loss mainly because', o: ['the gap of trapped gas is a poor conductor', 'glass is a good reflector', 'it stops all radiation', 'it is thicker glass'], x: 'Gas gap.' }
  ],
  exam: [
    { q: 'A vacuum flask keeps a drink hot. Explain how each of these features reduces the rate of energy transfer: (a) the vacuum, (b) the silvered surfaces, (c) the stopper.', m: 5, cr: 'A', ms: ['Vacuum: no particles, so no conduction …', '… and no convection.', 'Silvered surfaces: poor emitters and good reflectors of infrared radiation.', 'Stopper: prevents convection currents carrying warm air out …', '… and reduces evaporation from the surface.'] },
    { q: 'Explain, in terms of particles, why a metal pan conducts energy faster than a ceramic one.', m: 3, cr: 'A', ms: ['In both, vibrating particles pass energy to neighbours.', 'Metals contain free/delocalised electrons …', '… which move rapidly through the metal, transferring energy quickly.'] },
    { q: 'A student designs an insulation poster for homes in a cold climate. Evaluate two methods of reducing heat loss from a house, considering cost and effectiveness.', m: 6, cr: 'D', ms: ['Method 1 identified and physics explained (e.g. loft insulation traps air, reducing conduction/convection).', 'Method 2 identified and explained (e.g. double glazing, cavity wall insulation, draught excluders, curtains).', 'Comparison of cost / payback time.', 'Comparison of effectiveness (e.g. most heat lost through roof/walls).', 'Consideration of environmental/social impact (fuel use, CO₂, affordability).', 'Justified conclusion.'] }
  ],
  sims: ['conduction', 'leslie', 'cooling'], gens: []
});

TOPICS.push(lw('1.2', {
  id: '3.3', unit: '3', strand: 2, as: [7], ref: 'Strand 2 · AS 7', title: 'Specific heat capacity', short: 'ΔE = mcΔT',
  summary: 'Different materials need different amounts of energy to warm up. The specific heat capacity tells you how much, and ΔE = mcΔT quantifies the sloping sections of a heating curve.',
  spec: ['Define specific heat capacity: the energy needed to raise the temperature of 1 kg of a substance by 1 °C (1 K)', 'Use ΔE = mcΔT (J kg⁻¹ K⁻¹ or J/kg °C)', 'Relate ΔE = mcΔT to the sloping sections of a change of state graph', 'Describe an experiment to measure specific heat capacity using an electrical heater (E = Pt or VIt)', 'Explain why measured values are usually too high (energy lost to the surroundings) and how to reduce this', 'Explain the consequences of water’s high specific heat capacity (coastal climates, cooling systems, body temperature)'],
  learn: [0, 1, { h: 'Why water’s high c matters', html: `
<p>Water has an unusually high specific heat capacity (4200 J kg⁻¹ K⁻¹) — about five times that of rock or sand. So:</p>
<ul><li>seas warm and cool slowly, giving <b>coastal regions</b> milder climates than continental interiors;</li><li>water is used in <b>central heating</b> and <b>car cooling systems</b> — it carries a lot of energy per kilogram;</li><li>our bodies (≈ 60% water) resist sudden temperature changes.</li></ul>
<p>The <b>slope</b> of a heating curve shows this too: for the same power, the steepness of a sloping section is $@frac{ΔT}{Δt} = @frac{P}{mc}$ — a larger c gives a shallower slope.</p>` }],
  quiz: [0, 1, 2, 6, 7, 8, 10],
  cards: [0, 1, 2, 3, 7, 8, 9],
  exam: [0, 1, 2],
  worked: [0, 1],
  addQuiz: [{ q: 'On a heating curve, the steepness of a sloping section is greater when', o: ['the specific heat capacity is smaller', 'the specific heat capacity is larger', 'the mass is larger', 'the power is smaller'], x: 'ΔT/Δt = P/mc.' }, { q: 'The unit of specific heat capacity is', o: ['J kg⁻¹ K⁻¹', 'J kg⁻¹', 'J K⁻¹', 'W kg⁻¹'], x: 'Energy per kg per degree.' }],
  addCards: [['Why do coastal places have milder climates?', 'Water’s high specific heat capacity — the sea warms and cools slowly.'], ['Gradient of a heating curve (sloping part)?', 'ΔT/Δt = P/(mc)']],
  eqs: [['ΔE = mcΔT', 'specific heat capacity'], ['E = Pt = VIt', 'electrical energy supplied']],
  sims: ['shc'], gens: ['shc1', 'shc2', 'shc3', 'shc4']
}));

TOPICS.push(lw('3.2', {
  id: '3.4', unit: '3', strand: 2, as: [3, 5, 7], ref: 'Strand 2 · AS 3, 5, 7', title: 'Latent heat and the change of state graph', short: 'E = mL, heating and cooling curves',
  summary: 'During melting and boiling the temperature stays constant even though energy is supplied: the energy breaks bonds between particles. Use E = mL for the flat sections and ΔE = mcΔT for the slopes of a change of state graph.',
  spec: ['Define specific latent heat of fusion and of vaporisation', 'Use E = mL (J kg⁻¹)', 'Identify on a change of state graph which energy store changes in each section (kinetic → temperature rises; potential → state changes)', 'Relate each section of the graph to particle motion and to the heat transfers involved', 'Calculate the total energy for a multi-stage heating process (e.g. ice at −10 °C to steam at 100 °C)', 'Explain why L_v is much larger than L_f'],
  learn: [2, 3, { h: 'Reading every section of the graph', html: `
[[d:heatcurve]]
<div class="tbl"><table><tr><th>Section</th><th>What the particles do</th><th>Energy store increasing</th><th>Equation</th></tr>
<tr><td>solid warming</td><td>vibrate faster</td><td>kinetic (temperature rises)</td><td>ΔE = mc<sub>ice</sub>ΔT</td></tr>
<tr><td>melting (flat)</td><td>bonds break; particles begin to move past each other</td><td>potential (temperature constant)</td><td>E = mL<sub>f</sub></td></tr>
<tr><td>liquid warming</td><td>move faster</td><td>kinetic</td><td>ΔE = mc<sub>water</sub>ΔT</td></tr>
<tr><td>boiling (flat)</td><td>particles separate completely</td><td>potential</td><td>E = mL<sub>v</sub></td></tr>
<tr><td>gas warming</td><td>move faster still</td><td>kinetic</td><td>ΔE = mc<sub>steam</sub>ΔT</td></tr></table></div>
<p>The boiling section is much <b>longer</b> than the melting section because separating particles completely (L<sub>v</sub> = 2.26 MJ/kg for water) needs far more energy than loosening them (L<sub>f</sub> = 0.334 MJ/kg).</p>
<p>The sloping sections have different gradients because the solid, liquid and gas have different specific heat capacities. A <b>cooling curve</b> is the mirror image: the flat sections are where the substance releases latent heat while condensing or freezing.</p>` }],
  quiz: 'all',
  addQuiz: [{ q: 'The energy needed to turn 0.50 kg of water at 100 °C into steam (L = 2.26 × 10⁶ J/kg) is', o: ['1.13 × 10⁶ J', '4.52 × 10⁶ J', '2.26 × 10⁶ J', '1.13 × 10³ J'], x: 'mL.' }, { q: 'On a heating curve the boiling section is longer than the melting section because', o: ['the specific latent heat of vaporisation is larger', 'water boils at a higher temperature', 'the specific heat capacity of steam is high', 'the heater is less powerful'], x: 'L_v ≫ L_f.' }],
  addExam: [{ q: '0.20 kg of ice at −15 °C is heated until it becomes water at 40 °C. c(ice) = 2100 J/kg K, c(water) = 4200 J/kg K, L_f = 3.34 × 10⁵ J/kg. (a) Calculate the total energy needed. (b) Sketch and label the temperature–time graph, assuming constant power.', m: 7, cr: 'A', ms: ['Ice warming: 0.20 × 2100 × 15 = 6300 J', 'Melting: 0.20 × 3.34 × 10⁵ = 66 800 J', 'Water warming: 0.20 × 4200 × 40 = 33 600 J', 'Total = 106 700 J ≈ 1.07 × 10⁵ J', 'Graph: slope from −15 to 0 °C …', '… flat section at 0 °C (longest section) …', '… then slope to 40 °C, shallower than the ice slope (larger c).'] }],
  eqs: [['E = mL', 'specific latent heat'], ['ΔE = mcΔT', 'specific heat capacity']],
  sims: ['heating'], gens: ['slh1', 'slh2', 'slh3', 'multistage']
}));

TOPICS.push({
  id: '3.5', unit: '3', strand: 1, as: [2, 7], ref: 'Strands 1–2 · AS 2, 7', title: 'Thermal equilibrium and degraded energy', short: 'Mixing, equilibrium, efficiency, where energy goes',
  summary: 'Isolated systems change until they reach equilibrium. Use energy conservation to predict the final temperature when things are mixed, and explain why energy that spreads out is “degraded” — still there, but no longer useful.',
  spec: ['Describe thermal equilibrium: no net energy transfer between objects at the same temperature', 'Apply conservation of energy to mixing: energy lost by the hot object = energy gained by the cold object (isolated system)', 'Calculate a final temperature of a mixture', 'Explain that dissipated (“lost”) energy spreads into the surroundings as thermal energy and becomes less useful (degraded)', 'Explain why no energy transfer is 100% efficient and why useful energy resources can “run out”', 'Trace the origin of energy resources back to the Sun and to nuclear processes'],
  learn: [
    { h: 'Isolated systems seek equilibrium', html: `
<p>Put a hot metal block into cold water inside an insulated container. Energy flows from the block to the water until both reach the same temperature: <b>thermal equilibrium</b>. In an <b>isolated</b> system no energy enters or leaves, so:</p>
<div class="box def"><b class="lbl">Method of mixtures</b><p>energy lost by the hot object = energy gained by the cold object</p><p>$m_hc_h(T_h - T_f) = m_cc_c(T_f - T_c)$</p></div>
<p>The final temperature is always between the two starting temperatures, nearer to the object with the larger mc (“heat capacity”).</p>
[[d:mixing]]` },
    { h: 'Using the method of mixtures to measure c', html: `
<p>Heat a metal block of known mass in boiling water (100 °C), transfer it quickly into a known mass of cold water in an insulated cup, and record the highest temperature reached. Rearranging gives the specific heat capacity of the metal. Energy lost to the cup and air during the transfer makes the result less accurate — a systematic error to discuss in the evaluation.</p>` },
    { h: 'Degraded energy: will useful energy run out?', html: `
<p>Energy is conserved, but every real transfer spreads some of it out into the surroundings — the air, the floor, the table — as <b>thermal energy</b> at a temperature only slightly above the surroundings. Energy that is spread out in this way is <b>dissipated</b> or <b>degraded</b>: it still exists, but it cannot easily be used to do work.</p>
<p>This is why no real machine is 100% efficient, why perpetual motion machines are impossible, and why we must keep supplying concentrated energy (fuel, sunlight, electricity). Useful energy is being degraded all the time, even though the total amount of energy in the Universe is constant.</p>` },
    { h: 'Where did the energy originally come from?', html: `
<ul><li><b>Fossil fuels, biofuels, food:</b> sunlight captured by photosynthesis, millions of years ago or this year.</li><li><b>Wind, waves, hydroelectric:</b> the Sun heats the atmosphere (convection → wind) and evaporates water (rain fills reservoirs).</li><li><b>The Sun itself:</b> nuclear fusion of hydrogen into helium in its core.</li><li><b>Nuclear and geothermal:</b> uranium and other radioactive elements made in exploding stars before the Earth formed; geothermal heat is partly left over from Earth’s formation.</li><li><b>Tidal:</b> the gravitational interaction of the Earth and Moon (and the Earth’s rotation).</li></ul>` }
  ],
  eqs: [['m_hc_h(T_h - T_f) = m_cc_c(T_f - T_c)', 'method of mixtures (isolated system)']],
  worked: [
    { q: '0.20 kg of water at 80 °C is mixed with 0.30 kg of water at 20 °C in an insulated cup. Find the final temperature.', s: ['Energy lost by hot = energy gained by cold; c cancels (both water)', '$0.20(80 - T) = 0.30(T - 20)$', '$16 - 0.20T = 0.30T - 6$ → $0.50T = 22$', '$T = 44 °"C"$'], a: '44 °C' },
    { q: 'A 0.50 kg iron block (c = 450 J/kg K) at 100 °C is placed in 0.40 kg of water at 18 °C. Find the final temperature.', s: ['$0.50 × 450 × (100 - T) = 0.40 × 4200 × (T - 18)$', '$22500 - 225T = 1680T - 30240$', '$1905T = 52740$ → $T = 27.7 °"C"$'], a: '28 °C' }
  ],
  pitfalls: ['Writing (T_f − T_h) for the hot object, giving a negative energy.', 'Forgetting that the final temperature must lie between the two starting temperatures.', 'Saying dissipated energy is destroyed.', 'Ignoring the container and surroundings when evaluating the experiment.'],
  cards: [
    ['Thermal equilibrium?', 'Same temperature, no net energy transfer.'], ['Isolated system?', 'No energy enters or leaves.'], ['Method of mixtures?', 'Energy lost by hot = energy gained by cold.'], ['Where must the final temperature lie?', 'Between the two starting temperatures.'],
    ['Degraded energy?', 'Energy spread out in the surroundings at low temperature — hard to use.'], ['Why is no machine 100% efficient?', 'Some energy is always dissipated, usually by heating.'], ['Original source of most of our energy?', 'The Sun (nuclear fusion).'], ['Source of nuclear and geothermal energy?', 'Radioactive elements made in earlier stars; Earth’s formation.']
  ],
  quiz: [
    { q: 'Two objects are in thermal equilibrium when they', o: ['are at the same temperature', 'have the same internal energy', 'have the same mass', 'are made of the same material'], x: 'No net transfer.' },
    { q: 'Equal masses of water at 70 °C and 30 °C are mixed. The final temperature is', o: ['50 °C', '40 °C', '100 °C', '60 °C'], x: 'Midway when mc is equal.' },
    { q: 'In the method of mixtures we assume that', o: ['no energy is lost to the surroundings', 'the temperature stays constant', 'the masses are equal', 'c is the same for both'], x: 'Isolated system.' },
    { q: 'Energy that has been dissipated', o: ['still exists but is spread out and less useful', 'has been destroyed', 'has turned into mass', 'returns to the fuel'], x: 'Conservation.' },
    { q: 'The energy in fossil fuels originally came from', o: ['the Sun', 'the Earth’s core', 'the Moon', 'nuclear fission'], x: 'Ancient photosynthesis.' },
    { q: 'A hot iron block is put into a large mass of cold water. The final temperature will be', o: ['close to the water’s starting temperature', 'close to the iron’s starting temperature', 'exactly halfway', 'higher than both'], x: 'Water has much larger mc.' },
    { q: 'Which energy resource does NOT come from the Sun?', o: ['tidal', 'wind', 'coal', 'hydroelectric'], x: 'Earth–Moon gravity.' }
  ],
  exam: [
    { q: 'A student heats a 0.25 kg aluminium block in boiling water, then transfers it to 0.15 kg of water at 20 °C in a polystyrene cup. The final temperature is 40 °C. c(water) = 4200 J/kg K. (a) Calculate the specific heat capacity of aluminium. (b) The accepted value is 900 J/kg K. Explain one reason for the difference and suggest an improvement.', m: 6, cr: 'C', ms: ['Energy gained by water = 0.15 × 4200 × 20 = 12 600 J', 'Energy lost by block = 0.25 × c × 60', 'c = 12 600 ÷ 15 = 840 J/kg K', 'Lower than accepted: energy lost by the block to the air during transfer / to the cup and surroundings', '(or water carried over on the block)', 'Improvement: transfer quickly, use a lid / more insulation, stir and record the maximum temperature.'] },
    { q: '“Energy is conserved, so we can never run out of energy.” Discuss this statement.', m: 4, cr: 'D', ms: ['Total energy is conserved (cannot be created or destroyed).', 'Each transfer dissipates some energy into the surroundings as low-temperature thermal energy.', 'This degraded energy is spread out and cannot easily do useful work.', 'Concentrated resources (fossil fuels) are finite; so useful energy can run out — conclusion.'] }
  ],
  sims: ['mixing'], gens: ['mix1', 'mix2']
});
