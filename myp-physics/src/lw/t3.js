/* ==========================================================
   4.3 PARTICLE MODEL OF MATTER
   ========================================================== */
TOPICS.push({
  id: '3.1', unit: '3', ref: '4.3.1', title: 'Density and changes of state', short: 'ρ = m/V, particle diagrams, RP5',
  summary: 'Use the particle model to explain solids, liquids and gases and why their densities differ. Measure density (Required Practical 5) and see why mass is conserved when a substance changes state.',
  spec: [
    'Density: ρ = m / V (recall) — kg/m³, kg, m³; apply to changes where mass is conserved',
    'The particle model explains the different states of matter and differences in density',
    'Recognise and draw simple diagrams to model the difference between solids, liquids and gases',
    'Explain the differences in density between states in terms of the arrangement of atoms or molecules',
    'Required practical 5: determine the densities of regular and irregular solid objects and liquids (dimensions with ruler, micrometer or Vernier callipers; displacement for irregular objects)',
    'When substances change state (melt, freeze, boil, evaporate, condense or sublimate) mass is conserved',
    'Changes of state are physical changes: the material recovers its original properties if the change is reversed'
  ],
  learn: [
    { h: 'Density', html: `
<div class="box def"><b class="lbl">Recall this equation</b><p>density = mass ÷ volume &nbsp; $ρ = @frac{m}{V}$</p><p class="small">ρ (the Greek letter rho) in kilograms per metre cubed (kg/m³), m in kg, V in m³</p></div>
<p>Density tells you how much mass is packed into each cubic metre. Water: 1000 kg/m³. Air: about 1.2 kg/m³. Iron: about 7900 kg/m³.</p>
<div class="box tip"><b class="lbl">Units</b><p>1 g/cm³ = 1000 kg/m³. And 1 m³ = 1 000 000 cm³ (because 1 m = 100 cm, and 100³ = 10⁶). You may use g and cm³ in practicals — just keep the units consistent.</p></div>` },
    { h: 'The particle model of solids, liquids and gases', html: `
[[d:states]]
<div class="tbl"><table><tr><th></th><th>Solid</th><th>Liquid</th><th>Gas</th></tr>
<tr><td>Arrangement</td><td>regular, closely packed</td><td>close together, random</td><td>far apart, random</td></tr>
<tr><td>Movement</td><td>vibrate about fixed positions</td><td>move around each other</td><td>move quickly in all directions</td></tr>
<tr><td>Density</td><td>high</td><td>high (usually a little less than solid)</td><td>low</td></tr></table></div>
<p>Solids and liquids have <b>similar densities</b> because their particles are close together. A gas has a much <b>lower density</b> because its particles are much further apart — the same mass takes up a much bigger volume.</p>` },
    { h: 'Required practical 5: measuring density', html: `
<p><b>Regular solid</b> (e.g. a cuboid): measure the mass on a top-pan balance. Measure the length, width and height with a ruler, Vernier callipers or a micrometer (choose the instrument with the best resolution for the size). Volume = l × w × h. Then ρ = m/V.</p>
<p><b>Irregular solid</b> (e.g. a stone): measure its mass. Fill a <b>displacement (eureka) can</b> with water to the spout; lower the object in gently on a thread and collect the displaced water in a measuring cylinder. The volume of water = the volume of the object. (Or note the rise in level in a measuring cylinder.)</p>
[[d:eureka]]
<p><b>Liquid:</b> put an empty measuring cylinder on a balance and zero (tare) it. Pour in, say, 50 cm³ of liquid and read the mass. ρ = m/V. Add more liquid, re-read the mass and volume and repeat.</p>
<div class="box warn"><b class="lbl">Accuracy tips</b><p>Read the measuring cylinder at eye level from the bottom of the meniscus. Use a thread, not fingers, to avoid splashing. Take several measurements of each dimension and use the mean. Wipe up spills to avoid slipping.</p></div>` },
    { h: 'Changes of state', html: `
[[d:statechanges]]
<p>Melting (s → l), freezing (l → s), boiling and evaporating (l → g), condensing (g → l) and <b>sublimating</b> (s → g directly, like dry ice).</p>
<p>When a substance changes state, <b>mass is conserved</b> — the number of particles does not change, only their arrangement and energy. If 100 g of ice melts, you get 100 g of water.</p>
<p>Changes of state are <b>physical changes</b>: if the change is reversed, the material <b>recovers its original properties</b>. A chemical change (like burning) forms new substances.</p>
<p>Because volume changes but mass does not, the <b>density changes</b>. Water is unusual: ice is less dense than liquid water, which is why ice floats.</p>` }
  ],
  eqs: [['ρ = @frac{m}{V}', 'density (recall)']],
  worked: [
    { q: 'A block of metal is 2.0 cm × 3.0 cm × 5.0 cm and has a mass of 270 g. Calculate its density in kg/m³.', s: ['$V = 2.0 × 3.0 × 5.0 = 30 "cm"^3$', '$ρ = @frac{m}{V} = @frac{270}{30} = 9.0 "g/cm"^3$', '1 g/cm³ = 1000 kg/m³, so ρ = 9000 kg/m³'], a: '9000 kg/m³' },
    { q: 'A stone of mass 0.12 kg displaces 45 cm³ of water. Calculate its density in kg/m³.', s: ['$V = 45 "cm"^3 = 45 × 10^{-6} "m"^3 = 4.5 × 10^{-5} "m"^3$', '$ρ = @frac{0.12}{4.5 × 10^{-5}}$', '$ρ = 2670 "kg/m"^3$'], a: '2700 kg/m³ (2670 kg/m³)' },
    { q: 'A 0.50 m³ tank is filled with oil of density 800 kg/m³. What is the mass of the oil?', s: ['$m = ρV$', '$m = 800 × 0.50$', '$m = 400 "kg"$'], a: '400 kg' }
  ],
  pitfalls: ['Converting cm³ to m³ by dividing by 100 instead of 1 000 000.', 'Saying gas particles are larger — they are further apart.', 'Saying mass changes when ice melts.', 'Reading a measuring cylinder from the top of the meniscus or at an angle.', 'Calling a change of state a chemical change.'],
  cards: [
    ['Equation for density?', '$ρ = m/V$ (kg/m³, kg, m³)'],
    ['Why is a gas much less dense than a solid?', 'Its particles are much further apart, so the same mass takes a larger volume.'],
    ['Particle arrangement in a solid?', 'Regular, closely packed, vibrating about fixed positions.'],
    ['Particle arrangement in a liquid?', 'Close together, random, moving around each other.'],
    ['Particle arrangement in a gas?', 'Far apart, random, moving quickly in all directions.'],
    ['How do you find the volume of an irregular solid?', 'Displacement — use a eureka can and measuring cylinder.'],
    ['What is sublimation?', 'Changing directly from solid to gas.'],
    ['What happens to mass during a change of state?', 'It is conserved.'],
    ['Why is a change of state a physical change?', 'The material recovers its original properties when the change is reversed.'],
    ['1 g/cm³ in kg/m³?', '1000 kg/m³'],
    ['How many cm³ in 1 m³?', '1 000 000 (10⁶)'],
    ['Which instrument measures the thickness of a coin best?', 'A micrometer (or Vernier callipers).']
  ],
  quiz: [
    { q: 'An object has a mass of 600 kg and a volume of 0.20 m³. Its density is', o: ['3000 kg/m³', '120 kg/m³', '0.00033 kg/m³', '600 kg/m³'], x: 'ρ = 600 / 0.20.' },
    { q: 'Why is the density of steam much lower than that of water?', o: ['the particles in steam are much further apart', 'steam particles are smaller', 'steam has fewer particles per kilogram', 'water particles are heavier'], x: 'Same mass, much bigger volume.' },
    { q: 'Which method finds the volume of an irregular stone?', o: ['measure the water it displaces', 'measure its length with a ruler', 'weigh it in air', 'multiply its mass by g'], x: 'Displacement technique.' },
    { q: 'When 50 g of ice melts completely, the mass of water produced is', o: ['50 g', 'more than 50 g', 'less than 50 g', 'it depends on the temperature'], x: 'Mass is conserved in a change of state.' },
    { q: 'Changing directly from solid to gas is called', o: ['sublimation', 'evaporation', 'condensation', 'melting'], x: 'e.g. solid CO₂.' },
    { q: 'Which statement about changes of state is correct?', o: ['they are physical changes that can be reversed', 'they produce new substances', 'mass increases when a liquid freezes', 'they are chemical changes'], x: 'The material recovers its properties.' },
    { q: '1 m³ is equal to', o: ['1 000 000 cm³', '100 cm³', '1000 cm³', '10 000 cm³'], x: '(100 cm)³.' },
    { q: 'A liquid has a mass of 40 g and a volume of 50 cm³. Its density is', o: ['800 kg/m³', '1250 kg/m³', '0.8 kg/m³', '2000 kg/m³'], x: '0.80 g/cm³ = 800 kg/m³.' },
    { q: 'In a solid, particles', o: ['vibrate about fixed positions', 'move freely in all directions', 'are far apart', 'slide past each other'], x: 'Held in a regular arrangement.' },
    { q: 'To measure the side of a small cube (about 1 cm) as precisely as possible, use', o: ['a micrometer or Vernier callipers', 'a metre rule', 'a tape measure', 'a measuring cylinder'], x: 'Best resolution for small lengths.' },
    { q: 'When reading a measuring cylinder, you should read', o: ['the bottom of the meniscus at eye level', 'the top of the meniscus from above', 'the level from below', 'any point on the curve'], x: 'Avoids parallax error.' },
    { q: 'An object of mass 2.0 kg has a density of 4000 kg/m³. Its volume is', o: ['0.00050 m³', '8000 m³', '2000 m³', '0.50 m³'], x: 'V = m/ρ.' }
  ],
  exam: [
    { q: 'Describe how to determine the density of an irregularly shaped piece of rock.', m: 4, ms: ['Measure the mass of the rock on a (top-pan) balance.', 'Fill a displacement/eureka can with water to the spout (or part-fill a measuring cylinder and record the reading).', 'Lower the rock in fully; collect/measure the volume of water displaced = volume of rock.', 'Density = mass ÷ volume.'] },
    { q: 'Use the particle model to explain why a gas has a much lower density than a solid of the same substance.', m: 2, ms: ['Gas particles are much further apart than solid particles.', 'So the same mass occupies a much larger volume, giving a lower density.'] },
    { q: 'A 3.5 kg block of ice has a density of 920 kg/m³. Calculate its volume.', m: 2, ms: ['V = m / ρ = 3.5 / 920', 'V = 0.0038 m³'] }
  ],
  sims: ['states', 'densitylab'], gens: ['dens1', 'dens2', 'dens3']
});

TOPICS.push({
  id: '3.2', unit: '3', ref: '4.3.2', title: 'Internal energy and specific latent heat', short: 'Heating curves, E = mL',
  summary: 'Internal energy is the energy stored by particles. Heating either raises the temperature or changes the state — learn to tell specific heat capacity and specific latent heat apart and read heating and cooling graphs.',
  spec: [
    'Internal energy is the total kinetic energy and potential energy of all the particles that make up a system',
    'Heating increases the energy of the particles: it either raises the temperature or produces a change of state',
    'The temperature increase depends on the mass heated, the type of material and the energy input: ΔE = m c Δθ (equation sheet)',
    'Specific heat capacity: the energy required to raise the temperature of 1 kg of a substance by 1 °C',
    'Latent heat is the energy needed for a change of state; during a change of state the internal energy changes but not the temperature',
    'Specific latent heat: the energy required to change the state of 1 kg of a substance with no change in temperature: E = m L (equation sheet)',
    'Specific latent heat of fusion (solid → liquid) and of vaporisation (liquid → vapour)',
    'Interpret heating and cooling graphs that include changes of state; distinguish between specific heat capacity and specific latent heat'
  ],
  learn: [
    { h: 'Internal energy', html: `
<div class="box def"><b class="lbl">Definition</b><p><b>Internal energy</b> is the total <b>kinetic energy</b> and <b>potential energy</b> of all the particles (atoms and molecules) that make up a system.</p></div>
<p>Particles move (kinetic energy) and are held by forces between them (potential energy). Heating a system increases the energy of its particles. This <b>either</b>:</p>
<ul><li>raises the <b>temperature</b> (the particles move faster — more kinetic energy), <b>or</b></li><li>produces a <b>change of state</b> (bonds are broken or weakened — more potential energy, temperature stays constant).</li></ul>` },
    { h: 'Specific heat capacity (again)', html: `
<p>How much the temperature rises depends on the <b>mass</b>, the <b>material</b> and the <b>energy input</b>:</p>
<div class="box def"><b class="lbl">Given on the equation sheet</b><p>$ΔE = mcΔθ$ &nbsp; (J, kg, J/kg °C, °C)</p></div>
<p>This is the same equation as in topic 1.2 — it appears in both the Energy and Particle model sections of the specification.</p>` },
    { h: 'Specific latent heat', html: `
<p>The energy needed for a substance to change state is called <b>latent heat</b>. During a change of state the energy supplied changes the <b>internal energy</b> but <b>not the temperature</b>.</p>
<div class="box def"><b class="lbl">Definition</b><p>The <b>specific latent heat</b> of a substance is the amount of energy required to change the state of <b>one kilogram</b> of the substance <b>with no change in temperature</b>.</p></div>
<div class="box def"><b class="lbl">Given on the equation sheet</b><p>energy for a change of state = mass × specific latent heat &nbsp; $E = mL$</p><p class="small">E in J, m in kg, L in joules per kilogram (J/kg)</p></div>
<ul><li><b>Specific latent heat of fusion</b> — solid ↔ liquid. Water: 334 000 J/kg.</li><li><b>Specific latent heat of vaporisation</b> — liquid ↔ vapour. Water: 2 260 000 J/kg.</li></ul>
<p>It takes about seven times more energy to boil water away than to melt the same mass of ice — the particles must be separated completely.</p>` },
    { h: 'Heating and cooling graphs', html: `
[[d:heatcurve]]
<p>On a heating graph for ice:</p>
<ul><li><b>Sloping sections</b>: the temperature rises — the energy increases the kinetic energy of the particles (use ΔE = mcΔθ).</li><li><b>Flat sections</b>: a change of state — the energy breaks bonds, increasing potential energy; the temperature stays constant (use E = mL).</li></ul>
<p>A <b>cooling</b> graph is the reverse: flat sections occur while the substance condenses or freezes, releasing latent heat.</p>
<div class="box tip"><b class="lbl">Tell them apart</b><p>Specific <b>heat capacity</b> → temperature changes, no change of state (units J/kg °C). Specific <b>latent heat</b> → change of state, no temperature change (units J/kg).</p></div>` }
  ],
  eqs: [['ΔE = mcΔθ', 'temperature change (equation sheet)'], ['E = mL', 'change of state (equation sheet)']],
  worked: [
    { q: 'Calculate the energy needed to melt 0.25 kg of ice at 0 °C. Specific latent heat of fusion of water = 334 000 J/kg.', s: ['$E = mL$', '$E = 0.25 × 334 000$', '$E = 83 500 "J"$'], a: '83 500 J' },
    { q: 'A kettle boils 0.080 kg of water away after 180 s at 1000 W (all the energy goes into the water). Calculate the specific latent heat of vaporisation.', s: ['Energy supplied $E = Pt = 1000 × 180 = 180 000 "J"$', '$L = @frac{E}{m} = @frac{180 000}{0.080}$', '$L = 2 250 000 "J/kg"$'], a: '2.25 × 10⁶ J/kg' },
    { q: 'How much energy is needed to turn 2.0 kg of water at 20 °C completely into steam at 100 °C? c = 4200 J/kg °C, L_v = 2 260 000 J/kg.', s: ['Heat to 100 °C: $ΔE = 2.0 × 4200 × 80 = 672 000 "J"$', 'Boil: $E = mL = 2.0 × 2 260 000 = 4 520 000 "J"$', 'Total = 672 000 + 4 520 000 = 5 192 000 J'], a: '5.19 × 10⁶ J' }
  ],
  pitfalls: ['Using ΔE = mcΔθ during a change of state (there is no Δθ).', 'Saying the temperature rises while a substance is melting.', 'Saying internal energy is only kinetic energy.', 'Mixing up fusion (melting) and vaporisation (boiling).', 'Giving specific latent heat the unit J/kg °C.'],
  cards: [
    ['Define internal energy.', 'The total kinetic and potential energy of all the particles in a system.'],
    ['Two possible effects of heating a system?', 'It raises the temperature or produces a change of state.'],
    ['What is latent heat?', 'The energy needed for a substance to change state.'],
    ['Define specific latent heat.', 'Energy to change the state of 1 kg of a substance with no change in temperature.'],
    ['Equation for energy in a change of state?', '$E = mL$ (equation sheet)'],
    ['Unit of specific latent heat?', 'J/kg'],
    ['Latent heat of fusion refers to?', 'Solid ↔ liquid.'],
    ['Latent heat of vaporisation refers to?', 'Liquid ↔ vapour.'],
    ['What happens to temperature during a change of state?', 'It stays constant.'],
    ['Flat part of a heating graph shows?', 'A change of state — energy increases potential energy of particles.'],
    ['Sloping part of a heating graph shows?', 'Temperature rising — energy increases kinetic energy of particles.'],
    ['Heat capacity vs latent heat?', 'SHC: temperature change, no state change. SLH: state change, no temperature change.']
  ],
  quiz: [
    { q: 'Internal energy is', o: ['the total kinetic and potential energy of the particles', 'the kinetic energy of the particles only', 'the temperature of the substance', 'the energy needed to melt 1 kg'], x: 'Both kinds of energy of all particles.' },
    { q: 'While ice is melting at 0 °C, its temperature', o: ['stays constant', 'rises steadily', 'falls', 'rises then falls'], x: 'Energy goes into changing state.' },
    { q: 'The energy to melt 2.0 kg of a solid with L = 100 000 J/kg is', o: ['200 000 J', '50 000 J', '100 002 J', '2 000 000 J'], x: 'E = mL.' },
    { q: 'The unit of specific latent heat is', o: ['J/kg', 'J/kg °C', 'J', 'W/kg'], x: 'No temperature in the unit.' },
    { q: 'Specific latent heat of vaporisation refers to the change from', o: ['liquid to vapour', 'solid to liquid', 'solid to vapour', 'vapour to solid'], x: 'Boiling / condensing.' },
    { q: 'On a heating graph, the flat sections show', o: ['changes of state', 'the substance cooling', 'the temperature rising fastest', 'the particles slowing down'], x: 'Temperature constant during a change of state.' },
    { q: 'During melting, the energy supplied mainly increases the', o: ['potential energy of the particles', 'kinetic energy of the particles', 'mass of the substance', 'temperature'], x: 'Bonds between particles are weakened.' },
    { q: '6.8 × 10⁵ J melts 2.0 kg of a substance at its melting point. Its specific latent heat of fusion is', o: ['340 000 J/kg', '1 360 000 J/kg', '680 000 J/kg', '0.0000029 J/kg'], x: 'L = E/m.' },
    { q: 'Heating a system can', o: ['raise its temperature or change its state', 'only raise its temperature', 'only change its state', 'reduce its mass'], x: 'Spec statement.' },
    { q: 'Which quantity would you use to find the energy to warm water from 20 °C to 60 °C?', o: ['specific heat capacity', 'specific latent heat of fusion', 'specific latent heat of vaporisation', 'density'], x: 'Temperature change, no state change.' },
    { q: 'When steam condenses on a cold window, energy is', o: ['released to the window', 'absorbed from the window', 'destroyed', 'not transferred'], x: 'Latent heat is released on condensing.' },
    { q: 'Why does it take more energy to boil 1 kg of water than to melt 1 kg of ice?', o: ['particles must be separated completely to form a gas', 'water has a higher mass than ice', 'boiling happens at a lower temperature', 'ice has no internal energy'], x: 'L_v ≫ L_f.' }
  ],
  exam: [
    { q: 'Describe how the internal energy of a block of ice changes as it is heated from −10 °C until it has completely melted.', m: 4, ms: ['From −10 °C to 0 °C the temperature rises / particles vibrate faster.', 'So the kinetic energy of the particles (internal energy) increases.', 'At 0 °C the ice melts at constant temperature.', 'Energy increases the potential energy of the particles (internal energy increases) as bonds are weakened/broken.'] },
    { q: 'Explain the difference between specific heat capacity and specific latent heat.', m: 2, ms: ['Specific heat capacity: energy to raise the temperature of 1 kg by 1 °C.', 'Specific latent heat: energy to change the state of 1 kg with no temperature change.'] },
    { q: 'A 2.0 kW heater melts 0.60 kg of wax at its melting point in 45 s. Calculate the specific latent heat of fusion of the wax.', m: 3, ms: ['E = Pt = 2000 × 45 = 90 000 J', 'L = E / m = 90 000 / 0.60', 'L = 150 000 J/kg'] }
  ],
  sims: ['heating'], gens: ['slh1', 'slh2', 'slh3', 'shc4']
});

TOPICS.push({
  id: '3.3', unit: '3', ref: '4.3.3', title: 'Particle model and pressure', short: 'Gas pressure, temperature, pV = constant',
  summary: 'Gas molecules in constant random motion collide with container walls — that is pressure. Explain how temperature and volume affect pressure, use pV = constant, and see why pumping a tyre warms the gas.',
  spec: [
    'The molecules of a gas are in constant random motion; the temperature of a gas is related to the average kinetic energy of its molecules',
    'Changing the temperature of a gas held at constant volume changes the pressure it exerts',
    'Explain how the motion of the molecules in a gas is related to its temperature and pressure; explain qualitatively the relation between temperature and pressure at constant volume',
    '(PO) A gas can be compressed or expanded by pressure changes; the pressure produces a net force at right angles to the container wall (or any surface)',
    '(PO) Use the particle model to explain how increasing the volume of a gas at constant temperature can lead to a decrease in pressure',
    '(PO) For a fixed mass of gas at constant temperature: pV = constant (equation sheet); calculate changes in pressure or volume',
    '(PO) (HT) Work is the transfer of energy by a force; doing work on a gas increases its internal energy and can increase its temperature (e.g. a bicycle pump)'
  ],
  learn: [
    { h: 'Molecules in motion', html: `
<p>The molecules of a gas are in <b>constant random motion</b>. The <b>temperature</b> of the gas is related to the <b>average kinetic energy</b> of its molecules: hotter gas → faster molecules.</p>
<p>When a molecule hits a wall of the container it changes direction, so it exerts a <b>force</b> on the wall. Millions of collisions every second produce a steady <b>pressure</b>.</p>
[[d:gasbox]]` },
    { h: 'Temperature and pressure at constant volume', html: `
<p>If a gas is heated in a sealed container of fixed volume:</p>
<ol><li>the molecules gain kinetic energy and move faster;</li><li>they hit the walls <b>more often</b> and <b>with more force</b>;</li><li>so the <b>pressure increases</b>.</li></ol>
<p>That is why aerosol cans carry a warning not to heat them, and why tyre pressures rise after a long drive.</p>` },
    { h: 'Pressure and volume (physics only)', po: true, html: `
<p>A gas can be compressed or expanded by changing the pressure. The pressure produces a <b>net force at right angles</b> to the wall of the container (or any surface).</p>
<p>If the volume of a gas is <b>increased</b> at constant temperature, the molecules have further to travel, so they hit the walls <b>less often</b>. The rate of collisions falls, so the <b>pressure decreases</b>.</p>
<div class="box def"><b class="lbl">Given on the equation sheet</b><p>For a fixed mass of gas at constant temperature: pressure × volume = constant &nbsp; $pV = "constant"$</p><p class="small">p in pascals (Pa), V in m³</p></div>
<p>So $p_1V_1 = p_2V_2$. Halve the volume → double the pressure.</p>` },
    { h: 'Doing work on a gas', po: true, ht: true, html: `
<p><b>Work</b> is the transfer of energy by a force. When you push the piston of a <b>bicycle pump</b>, you do work on the gas inside.</p>
<ul><li>Energy is transferred to the gas, so its <b>internal energy increases</b>.</li><li>The molecules move faster, so the <b>temperature of the gas rises</b> — you can feel the pump barrel get warm.</li></ul>
<p>Moving molecules bounce off the moving piston faster than they arrived, gaining kinetic energy each time.</p>` }
  ],
  eqs: [['pV = "constant"', 'fixed mass of gas at constant temperature (equation sheet, physics only)'], ['p_1V_1 = p_2V_2', 'same thing, before and after']],
  worked: [
    { q: 'A gas syringe contains 60 cm³ of air at 100 000 Pa. The plunger is pushed in slowly (constant temperature) until the volume is 40 cm³. Calculate the new pressure.', s: ['$p_1V_1 = p_2V_2$', '$100 000 × 60 = p_2 × 40$', '$p_2 = 150 000 "Pa"$'], a: '150 000 Pa (1.5 × 10⁵ Pa)' },
    { q: 'Explain why the pressure in a sealed can rises when it is heated.', s: ['The gas molecules gain kinetic energy and move faster.', 'They collide with the walls more often and with more force.', 'So the force on the walls per unit area — the pressure — increases.'], a: 'Faster molecules → more frequent, harder collisions → higher pressure.' }
  ],
  pitfalls: ['Saying molecules “expand” when heated.', 'Saying pressure rises because molecules hit “each other” more — it is collisions with the walls that matter.', 'Using pV = constant when the temperature changes.', 'Mixing units: p₁V₁ = p₂V₂ works with any volume unit if both are the same.', 'Saying heating a gas in a sealed container increases its volume.'],
  cards: [
    ['How do gas molecules move?', 'Constant random motion.'],
    ['What is temperature related to?', 'The average kinetic energy of the molecules.'],
    ['What causes gas pressure?', 'Molecules colliding with the container walls, exerting a force.'],
    ['Effect of heating a gas at constant volume?', 'Pressure increases — molecules move faster, hit walls more often and harder.'],
    ['Direction of the force from gas pressure?', 'At right angles to the surface.', 'po'],
    ['Increasing volume at constant temperature does what to pressure?', 'Decreases it — fewer collisions per second with the walls.', 'po'],
    ['Equation for a fixed mass of gas at constant temperature?', '$pV = "constant"$', 'po'],
    ['Halve the volume at constant T — pressure?', 'Doubles.', 'po'],
    ['Why does a bicycle pump get warm?', 'Work done on the gas increases its internal energy, so its temperature rises.', 'htpo'],
    ['Define work.', 'The transfer of energy by a force.', 'htpo']
  ],
  quiz: [
    { q: 'The temperature of a gas is related to', o: ['the average kinetic energy of its molecules', 'the size of its molecules', 'the number of molecules', 'the volume of its container'], x: 'Hotter = faster on average.' },
    { q: 'Gas pressure is caused by', o: ['molecules colliding with the walls of the container', 'molecules colliding with each other only', 'the weight of the gas', 'molecules expanding'], x: 'Each collision exerts a force.' },
    { q: 'A sealed container of gas is heated. Its pressure', o: ['increases', 'decreases', 'stays the same', 'becomes zero'], x: 'Faster molecules, more frequent and harder collisions.' },
    { q: 'Why does the pressure of a gas rise when heated at constant volume?', o: ['molecules hit the walls more often and with more force', 'molecules get bigger', 'more molecules are created', 'molecules slow down'], x: 'Speed increases.' },
    { q: 'A gas occupies 2.0 m³ at 100 kPa. At constant temperature it is compressed to 1.0 m³. The new pressure is', o: ['200 kPa', '50 kPa', '100 kPa', '400 kPa'], x: 'pV constant.', po: 1 },
    { q: 'If the volume of a gas increases at constant temperature, its pressure decreases because', o: ['molecules collide with the walls less often', 'molecules move more slowly', 'molecules lose mass', 'molecules stick to the walls'], x: 'Same speed, further to travel.', po: 1 },
    { q: 'The force exerted by a gas on a surface acts', o: ['at right angles to the surface', 'parallel to the surface', 'only downwards', 'towards the centre of the gas'], x: 'Spec statement.', po: 1 },
    { q: 'pV = constant only applies to', o: ['a fixed mass of gas at constant temperature', 'any gas at any temperature', 'liquids', 'gases at constant pressure'], x: 'Conditions matter.', po: 1 },
    { q: 'When air is pumped into a tyre with a bicycle pump, the air in the pump gets warmer because', o: ['work is done on the gas, increasing its internal energy', 'friction heats the tyre', 'the pressure falls', 'the molecules lose kinetic energy'], x: 'Work → internal energy → temperature.', po: 1, ht: 1 },
    { q: 'Gas at 120 kPa in 30 cm³ expands at constant temperature to 90 cm³. The new pressure is', o: ['40 kPa', '360 kPa', '120 kPa', '10 kPa'], x: '120 × 30 = p × 90.', po: 1 }
  ],
  exam: [
    { q: 'Use the particle model to explain why the pressure of the air in a car tyre increases after a long journey.', m: 3, ms: ['The temperature of the air in the tyre increases.', 'Air molecules gain kinetic energy / move faster.', 'They collide with the tyre walls more often and with greater force, so the pressure increases.'] },
    { q: 'A diver’s lungs hold 6.0 litres of air at a pressure of 300 kPa. As she rises slowly the pressure drops to 100 kPa at the same temperature. Calculate the new volume of the air.', m: 3, ms: ['p₁V₁ = p₂V₂', '300 × 6.0 = 100 × V₂', 'V₂ = 18 litres'], po: 1 },
    { q: 'Explain, in terms of molecules, why pushing in the handle of a sealed bicycle pump increases the temperature of the air inside.', m: 3, ms: ['Work is done on the gas (by the force on the piston).', 'This increases the internal energy of the gas.', 'Molecules move faster / gain kinetic energy, so the temperature increases.'], po: 1, ht: 1 }
  ],
  sims: ['gas'], gens: ['boyle1', 'boyle2']
});
