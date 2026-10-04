/* ==========================================================
   4.1 ENERGY
   Spec tags: "(HT)" = Higher tier only, "(PO)" = physics only
   ========================================================== */
TOPICS.push({
  id: '1.1', unit: '1', ref: '4.1.1.1–4.1.1.2', title: 'Energy stores and systems', short: 'Stores, systems, Eₖ, Eₚ and Eₑ',
  summary: 'Energy is never made or destroyed — it moves between stores. Learn the stores, describe the changes in common situations, and calculate kinetic, gravitational potential and elastic potential energy.',
  spec: [
    'A system is an object or group of objects; the way energy is stored changes when a system changes',
    'Describe all the changes in the way energy is stored for common situations (object projected upwards, moving object hitting an obstacle, object accelerated by a constant force, vehicle slowing down, boiling water in a kettle)',
    'Calculate energy changes when a system is changed by heating, by work done by forces and by work done when a current flows',
    'Use calculations to show on a common scale how the overall energy in a system is redistributed',
    'Calculate kinetic energy: Eₖ = ½ m v² (recall)',
    'Calculate gravitational potential energy: Eₚ = m g h (recall)',
    'Calculate elastic potential energy: Eₑ = ½ k e² (given on the equation sheet), assuming the limit of proportionality is not exceeded'
  ],
  learn: [
    { h: 'Systems and energy stores', html: `
<p>A <b>system</b> is an object or group of objects that we choose to study. When a system changes — something speeds up, heats up, is lifted or stretched — the <b>way energy is stored</b> changes. The total amount of energy stays the same.</p>
<div class="tbl"><table><tr><th>Energy store</th><th>Energy is stored because…</th><th>Example</th></tr>
<tr><td>kinetic</td><td>an object is moving</td><td>a cyclist</td></tr>
<tr><td>gravitational potential</td><td>an object is raised in a gravitational field</td><td>a roller-coaster at the top</td></tr>
<tr><td>elastic potential</td><td>an object is stretched or squashed</td><td>a drawn bow</td></tr>
<tr><td>thermal (internal)</td><td>of the temperature of an object</td><td>a hot cup of tea</td></tr>
<tr><td>chemical</td><td>of chemical bonds</td><td>food, fuel, a battery</td></tr>
<tr><td>nuclear</td><td>of the arrangement of particles in the nucleus</td><td>uranium fuel</td></tr>
<tr><td>magnetic / electrostatic</td><td>of the positions of magnets or charges</td><td>two repelling magnets</td></tr></table></div>
<p>Energy is <b>transferred</b> between stores in four ways: <b>mechanically</b> (a force doing work), <b>electrically</b> (a current doing work), <b>by heating</b>, and <b>by radiation</b> (light, sound, infrared).</p>` },
    { h: 'Describing energy changes', html: `
<p>Exam questions ask you to describe <i>all</i> the changes in a situation. Name the store that decreases, the store that increases, and how the energy is transferred.</p>
<div class="tbl"><table><tr><th>Situation</th><th>Changes in the way energy is stored</th></tr>
<tr><td>Ball thrown upwards</td><td>kinetic store of the ball decreases → gravitational potential store increases (some dissipated to the thermal store of the surroundings by air resistance)</td></tr>
<tr><td>Car hits a wall</td><td>kinetic store of the car decreases → thermal stores of car and wall increase; energy also transferred by sound</td></tr>
<tr><td>Trolley pulled by a constant force</td><td>work is done by the force → kinetic store of the trolley increases</td></tr>
<tr><td>Vehicle braking</td><td>kinetic store decreases → thermal store of the brakes (and surroundings) increases; work done by friction</td></tr>
<tr><td>Kettle boiling water</td><td>energy transferred electrically to the heating element → thermal store of the water increases (some to thermal store of the kettle and air)</td></tr></table></div>
[[d:stores]]` },
    { h: 'Kinetic energy', html: `
<p>Any moving object has energy in its kinetic store:</p>
<div class="box def"><b class="lbl">Recall this equation</b><p>kinetic energy = 0.5 × mass × speed<sup>2</sup> &nbsp; $E_k = @frac{1}{2}mv^2$</p><p class="small">E<sub>k</sub> in joules (J), m in kilograms (kg), v in metres per second (m/s)</p></div>
<p>Because speed is <b>squared</b>, doubling the speed makes the kinetic energy <b>four times</b> bigger. That is why a car at 60 mph needs about four times the braking distance of one at 30 mph.</p>` },
    { h: 'Gravitational potential energy', html: `
<div class="box def"><b class="lbl">Recall this equation</b><p>g.p.e. = mass × gravitational field strength × height &nbsp; $E_p = mgh$</p><p class="small">E<sub>p</sub> in J, m in kg, g in newtons per kilogram (N/kg), h in metres (m). On Earth g = 9.8 N/kg — the value of g is always given in the question.</p></div>
<p>h is the <b>change in height</b>. When an object falls and air resistance is negligible, the energy lost from the gravitational store equals the energy gained by the kinetic store:</p>
<p style="text-align:center">$mgh = @frac{1}{2}mv^2$ &nbsp;so&nbsp; $v = @sqrt{2gh}$ — the mass cancels.</p>
<div class="box tip"><b class="lbl">Exam tip</b><p>“Show that” questions about falling objects almost always want you to equate the two stores. Write both equations out, substitute, then rearrange.</p></div>` },
    { h: 'Elastic potential energy', html: `
<div class="box def"><b class="lbl">Given on the equation sheet</b><p>elastic potential energy = 0.5 × spring constant × extension<sup>2</sup> &nbsp; $E_e = @frac{1}{2}ke^2$</p><p class="small">E<sub>e</sub> in J, k in newtons per metre (N/m), e in metres (m). Only valid if the <b>limit of proportionality</b> has not been exceeded.</p></div>
<p>Convert extensions in cm to metres before substituting: 5.0 cm = 0.050 m. Squaring a small number makes it much smaller — check your answer is sensible.</p>` },
    { h: 'Redistributing energy on a common scale', html: `
<p>You may be asked to track a system through several stages and show that the total stays constant. Draw up a table in joules for each stage:</p>
<div class="tbl"><table><tr><th>A 0.50 kg ball dropped from 2.0 m</th><th>E<sub>p</sub> / J</th><th>E<sub>k</sub> / J</th><th>Total / J</th></tr>
<tr><td>At the top</td><td>9.8</td><td>0</td><td>9.8</td></tr><tr><td>Half-way down</td><td>4.9</td><td>4.9</td><td>9.8</td></tr><tr><td>Just before landing</td><td>0</td><td>9.8</td><td>9.8</td></tr></table></div>
<p class="small muted">Using g = 9.8 N/kg and ignoring air resistance. In reality some energy is dissipated, so E<sub>k</sub> at the bottom is a little less.</p>` }
  ],
  eqs: [['E_k = @frac{1}{2}mv^2', 'kinetic energy (recall)'], ['E_p = mgh', 'gravitational potential energy (recall)'], ['E_e = @frac{1}{2}ke^2', 'elastic potential energy (equation sheet)']],
  worked: [
    { q: 'A 1200 kg car travels at 15 m/s. Calculate its kinetic energy.', s: ['Write the equation: $E_k = @frac{1}{2}mv^2$', 'Substitute: $E_k = 0.5 × 1200 × 15^2$', '$E_k = 0.5 × 1200 × 225 = 135 000 "J"$'], a: '135 000 J (135 kJ)' },
    { q: 'A 60 kg climber climbs 450 m up a hill. g = 9.8 N/kg. Calculate the increase in her gravitational potential energy.', s: ['$E_p = mgh$', '$E_p = 60 × 9.8 × 450$', '$E_p = 264 600 "J"$'], a: '265 000 J (2.6 × 10⁵ J to 2 s.f.)' },
    { q: 'A spring with spring constant 40 N/m is stretched by 15 cm. Calculate the elastic potential energy stored.', s: ['Convert: e = 15 cm = 0.15 m', '$E_e = @frac{1}{2}ke^2 = 0.5 × 40 × 0.15^2$', '$E_e = 0.45 "J"$'], a: '0.45 J' },
    { q: 'A stone is dropped from a bridge 20 m above a river. Ignoring air resistance, calculate the speed at which it hits the water. g = 9.8 N/kg.', s: ['Energy lost from gravitational store = energy gained by kinetic store: $mgh = @frac{1}{2}mv^2$', 'Mass cancels: $v^2 = 2gh = 2 × 9.8 × 20 = 392$', '$v = @sqrt{392} = 19.8 "m/s"$'], a: '20 m/s (19.8 m/s)' }
  ],
  pitfalls: ['Forgetting to square the speed in ½mv², or squaring the ½ as well.', 'Leaving the extension in cm when using ½ke².', 'Using the total height instead of the change in height.', 'Saying energy is “used up” or “lost” — it is transferred to other stores (often dissipated).', 'Writing “heat energy” — the correct term is the thermal energy store, or energy transferred by heating.'],
  cards: [
    ['What is a system?', 'An object or group of objects.'],
    ['Name eight energy stores.', 'Kinetic, gravitational potential, elastic potential, thermal, chemical, nuclear, magnetic, electrostatic.'],
    ['Four ways energy can be transferred?', 'Mechanically (by forces), electrically (by a current), by heating, by radiation.'],
    ['Equation for kinetic energy?', '$E_k = @frac{1}{2}mv^2$ (J, kg, m/s)'],
    ['Equation for gravitational potential energy?', '$E_p = mgh$ (J, kg, N/kg, m)'],
    ['Equation for elastic potential energy?', '$E_e = @frac{1}{2}ke^2$ — given on the equation sheet.'],
    ['What happens to Eₖ if speed doubles?', 'It becomes four times bigger (v is squared).'],
    ['Value of g on Earth used at GCSE?', '9.8 N/kg (it will be given in the question).'],
    ['When does ½ke² stop being valid?', 'When the limit of proportionality is exceeded.'],
    ['Energy changes for a ball thrown upwards?', 'Kinetic store decreases, gravitational potential store increases (some dissipated by air resistance).'],
    ['Energy changes when a car brakes?', 'Kinetic store decreases; thermal store of brakes and surroundings increases — work done by friction.'],
    ['Speed of an object dropped from height h (no air resistance)?', '$v = @sqrt{2gh}$ — found from mgh = ½mv².'],
    ['Convert 250 g to kg.', '0.25 kg'],
    ['Convert 3.5 kJ to J.', '3500 J']
  ],
  quiz: [
    { q: 'Which is the correct unit of kinetic energy?', o: ['joule (J)', 'watt (W)', 'newton (N)', 'kilogram metre per second (kg m/s)'], x: 'All energies are measured in joules.' },
    { q: 'A 2.0 kg ball moves at 3.0 m/s. Its kinetic energy is', o: ['9.0 J', '6.0 J', '18 J', '3.0 J'], x: '½ × 2.0 × 3.0² = 9.0 J.' },
    { q: 'The speed of a car doubles. Its kinetic energy', o: ['increases by a factor of 4', 'doubles', 'stays the same', 'halves'], x: 'Eₖ ∝ v², and 2² = 4.' },
    { q: 'A 5.0 kg box is lifted 2.0 m. g = 9.8 N/kg. The gain in gravitational potential energy is', o: ['98 J', '10 J', '49 J', '20 J'], x: '5.0 × 9.8 × 2.0 = 98 J.' },
    { q: 'Which energy store increases when a bow is drawn back?', o: ['elastic potential', 'kinetic', 'gravitational potential', 'chemical'], x: 'The bow is deformed, so energy is stored in its elastic potential store.' },
    { q: 'A spring (k = 200 N/m) is stretched by 0.10 m. The elastic potential energy stored is', o: ['1.0 J', '10 J', '2.0 J', '20 J'], x: '½ × 200 × 0.10² = 1.0 J.' },
    { q: 'When a moving car brakes to a stop, the main energy change is from the kinetic store to the', o: ['thermal store of the brakes and surroundings', 'chemical store of the fuel', 'gravitational potential store', 'elastic potential store of the tyres'], x: 'Friction in the brakes does work, heating them.' },
    { q: 'An electric kettle boils water. Energy is transferred to the water', o: ['electrically, then by heating from the element', 'by radiation only', 'mechanically', 'by the chemical store of the water'], x: 'Current does work in the element, which then heats the water.' },
    { q: 'Which quantity is NOT needed to calculate gravitational potential energy?', o: ['speed', 'mass', 'height', 'gravitational field strength'], x: 'Eₚ = mgh.' },
    { q: 'An object has 100 J of kinetic energy and a mass of 2.0 kg. Its speed is', o: ['10 m/s', '50 m/s', '100 m/s', '7.1 m/s'], x: 'v² = 2Eₖ/m = 100, so v = 10 m/s.' },
    { q: 'A ball is dropped from 5.0 m. Ignoring air resistance, its speed just before landing does NOT depend on', o: ['its mass', 'the height it falls', 'the gravitational field strength'], x: 'mgh = ½mv² — mass cancels, so v = √(2gh).' },
    { q: 'Which is the best description of a closed system?', o: ['a system where no energy enters or leaves, so the total energy is constant', 'a system where energy is destroyed', 'a system with no moving parts', 'a system that is not heated'], x: 'In a closed system there is no net change in total energy.' }
  ],
  exam: [
    { q: 'A skydiver jumps from a stationary balloon. Describe the changes in the way energy is stored as she falls before her parachute opens.', m: 3, ms: ['Gravitational potential energy store decreases.', 'Kinetic energy store increases (while she speeds up).', 'Some energy is dissipated to the thermal store of the surroundings / air by air resistance (work done against air resistance).'] },
    { q: 'A 0.20 kg ball is thrown vertically upwards at 12 m/s. Calculate the maximum height it reaches. Ignore air resistance. g = 9.8 N/kg.', m: 4, ms: ['Eₖ = ½ × 0.20 × 12² = 14.4 J', 'Eₖ lost = Eₚ gained, so mgh = 14.4', 'h = 14.4 / (0.20 × 9.8)', 'h = 7.3 m'] },
    { q: 'A spring has a spring constant of 25 N/m. Calculate the extension needed to store 0.50 J of elastic potential energy.', m: 3, ms: ['0.50 = ½ × 25 × e²', 'e² = 0.040', 'e = 0.20 m'] },
    { q: 'Explain why a car travelling at 30 m/s has much more kinetic energy than the same car at 15 m/s.', m: 2, ms: ['Kinetic energy is proportional to speed squared.', 'Doubling the speed gives four times the kinetic energy.'] }
  ],
  sims: ['energy'], gens: ['ke1', 'ke2', 'gpe1', 'gpe2', 'epe1', 'fall1']
});

TOPICS.push({
  id: '1.2', unit: '1', ref: '4.1.1.3–4.1.1.4', title: 'Specific heat capacity and power', short: 'ΔE = mcΔθ, P = E/t, P = W/t',
  summary: 'How much energy it takes to warm things up, how to measure it (Required Practical 1), and power as the rate of transferring energy.',
  spec: [
    'Calculate the energy stored in or released from a system as its temperature changes: ΔE = m c Δθ (equation sheet)',
    'Specific heat capacity is the energy required to raise the temperature of one kilogram of a substance by one degree Celsius',
    'Required practical 1: determine the specific heat capacity of one or more materials',
    'Power is the rate at which energy is transferred or the rate at which work is done: P = E/t and P = W/t (recall both)',
    'An energy transfer of 1 joule per second is a power of 1 watt',
    'Give examples that illustrate the definition of power, e.g. two motors lifting the same weight through the same height, one faster'
  ],
  learn: [
    { h: 'Specific heat capacity', html: `
<div class="box def"><b class="lbl">Definition</b><p>The <b>specific heat capacity</b> of a substance is the amount of energy required to raise the temperature of <b>one kilogram</b> of the substance by <b>one degree Celsius</b>.</p></div>
<div class="box def"><b class="lbl">Given on the equation sheet</b><p>change in thermal energy = mass × specific heat capacity × temperature change &nbsp; $ΔE = mcΔθ$</p><p class="small">ΔE in J, m in kg, c in J/kg °C, Δθ in °C</p></div>
<div class="tbl"><table><tr><th>Material</th><th>c / J/kg °C</th></tr><tr><td>water</td><td>4200</td></tr><tr><td>aluminium</td><td>900</td></tr><tr><td>concrete</td><td>≈ 880</td></tr><tr><td>steel / iron</td><td>≈ 450</td></tr><tr><td>copper</td><td>385</td></tr></table></div>
<p>Water’s very high specific heat capacity means it takes a lot of energy to warm up and releases a lot as it cools — ideal for central heating systems and hot water bottles. A material with a <b>low</b> c heats up quickly.</p>
<div class="box tip"><b class="lbl">Exam tip</b><p>Δθ is a <b>change</b>: final temperature − initial temperature. A rise from 18 °C to 43 °C is Δθ = 25 °C.</p></div>` },
    { h: 'Required practical 1: specific heat capacity', html: `
[[d:shcrig]]
<ol><li>Measure the mass of an aluminium (or copper) block with a top-pan balance.</li><li>Put an electric immersion heater and a thermometer in the holes in the block. Wrap the block in insulation.</li><li>Connect the heater to a joulemeter — or to a power supply with an ammeter and voltmeter.</li><li>Record the starting temperature, switch on and start a stopwatch.</li><li>Record the temperature and the energy supplied every minute for about 10 minutes.</li></ol>
<p><b>Analysis:</b> plot temperature (y-axis) against energy supplied (x-axis). Draw a line of best fit through the straight part. The gradient = Δθ/ΔE, so $c = @frac{1}{m × "gradient"}$. Or simply use $c = @frac{ΔE}{mΔθ}$.</p>
<p>If you use an ammeter and voltmeter, energy supplied E = VIt (power P = VI multiplied by time).</p>
<div class="box why"><b class="lbl">Why the answer is usually too high</b><p>Some energy is transferred to the surroundings and to the heater and thermometer, so the temperature rise is smaller than it “should” be. Using insulation, a drop of oil or water in the thermometer hole (for good thermal contact) and waiting for the temperature to stop rising after switching off improve accuracy.</p></div>
<p><b>Safety:</b> the heater gets very hot — don’t touch it, and let it cool before packing away. Stand the block on a heatproof mat.</p>` },
    { h: 'Power', html: `
<div class="box def"><b class="lbl">Definition</b><p><b>Power</b> is the rate at which energy is transferred, or the rate at which work is done. An energy transfer of <b>1 joule per second</b> is a power of <b>1 watt</b>.</p></div>
<div class="box def"><b class="lbl">Recall both equations</b><p>power = energy transferred ÷ time &nbsp; $P = @frac{E}{t}$ &nbsp;&nbsp;&nbsp; power = work done ÷ time &nbsp; $P = @frac{W}{t}$</p><p class="small">P in watts (W), E and W in joules (J), t in seconds (s)</p></div>
<p>Two motors lift identical loads through the same height, so they do the same work. The motor that does it <b>in less time</b> is more powerful.</p>
<p>Remember 1 kW = 1000 W and 1 minute = 60 s. A 2.0 kW kettle switched on for 3 minutes transfers $E = Pt = 2000 × 180 = 360 000 "J"$.</p>` }
  ],
  eqs: [['ΔE = mcΔθ', 'change in thermal energy (equation sheet)'], ['P = @frac{E}{t}', 'power (recall)'], ['P = @frac{W}{t}', 'power as rate of doing work (recall)']],
  worked: [
    { q: 'How much energy is needed to heat 2.0 kg of water from 20 °C to 100 °C? c(water) = 4200 J/kg °C.', s: ['Δθ = 100 − 20 = 80 °C', '$ΔE = mcΔθ = 2.0 × 4200 × 80$', '$ΔE = 672 000 "J"$'], a: '672 000 J (672 kJ)' },
    { q: 'A 1.0 kg aluminium block is heated by 18 000 J and its temperature rises by 20 °C. Calculate the specific heat capacity of aluminium.', s: ['Rearrange: $c = @frac{ΔE}{mΔθ}$', '$c = @frac{18 000}{1.0 × 20}$', '$c = 900 "J/kg °C"$'], a: '900 J/kg °C' },
    { q: 'A motor lifts a 50 kg load through 12 m in 20 s. g = 9.8 N/kg. Calculate its useful power output.', s: ['Work done = energy gained by gravitational store: $E_p = mgh = 50 × 9.8 × 12 = 5880 "J"$', '$P = @frac{W}{t} = @frac{5880}{20}$', '$P = 294 "W"$'], a: '294 W (≈ 290 W)' }
  ],
  pitfalls: ['Using the final temperature instead of the temperature change.', 'Leaving mass in grams (c is per kilogram).', 'Leaving time in minutes in P = E/t.', 'Confusing specific heat capacity (temperature change) with specific latent heat (change of state).', 'Saying power is “energy” — power is the rate of energy transfer.'],
  cards: [
    ['Define specific heat capacity.', 'The energy required to raise the temperature of 1 kg of a substance by 1 °C.'],
    ['Equation linking ΔE, m, c and Δθ?', '$ΔE = mcΔθ$ (equation sheet)'],
    ['Unit of specific heat capacity?', 'J/kg °C'],
    ['Specific heat capacity of water?', '4200 J/kg °C'],
    ['Define power.', 'The rate at which energy is transferred or the rate at which work is done.'],
    ['What is 1 watt?', 'An energy transfer of 1 joule per second.'],
    ['Two equations for power?', '$P = E/t$ and $P = W/t$'],
    ['RP1: what do you plot to find c?', 'Temperature against energy supplied; c = 1 ÷ (mass × gradient).'],
    ['RP1: why is the measured c usually too high?', 'Energy is transferred to the surroundings, so the temperature rise is smaller than expected.'],
    ['RP1: how can you improve accuracy?', 'Insulate the block; put water/oil in the thermometer hole; use a joulemeter.'],
    ['Two motors lift the same load the same height. Which is more powerful?', 'The one that does it in less time.'],
    ['How much energy does a 60 W lamp transfer in 1 minute?', '3600 J']
  ],
  quiz: [
    { q: 'The specific heat capacity of a substance is the energy needed to', o: ['raise the temperature of 1 kg by 1 °C', 'melt 1 kg of it', 'raise the temperature of 1 g by 1 °C', 'raise the temperature of any mass by 1 °C'], x: 'Per kilogram, per degree Celsius.' },
    { q: 'How much energy is needed to raise the temperature of 0.50 kg of water by 10 °C? (c = 4200 J/kg °C)', o: ['21 000 J', '42 000 J', '2100 J', '210 000 J'], x: '0.50 × 4200 × 10 = 21 000 J.' },
    { q: 'Equal masses of copper (c = 385 J/kg °C) and water (c = 4200 J/kg °C) receive the same energy. Which is true?', o: ['the copper has the bigger temperature rise', 'the water has the bigger temperature rise', 'both rise by the same amount', 'neither changes temperature'], x: 'Lower c → larger Δθ for the same energy.' },
    { q: 'The unit of power is the', o: ['watt', 'joule', 'newton', 'volt'], x: '1 W = 1 J/s.' },
    { q: 'A 1500 W hairdryer is used for 2 minutes. Energy transferred =', o: ['180 000 J', '3000 J', '750 J', '90 000 J'], x: 'E = Pt = 1500 × 120 = 180 000 J.' },
    { q: 'A machine does 600 J of work in 4.0 s. Its power is', o: ['150 W', '2400 W', '0.0067 W', '604 W'], x: 'P = W/t = 600/4.0.' },
    { q: 'In the specific heat capacity practical, wrapping the block in insulation', o: ['reduces energy transfer to the surroundings', 'increases the power of the heater', 'makes the thermometer read higher than the true value', 'is a safety measure only'], x: 'Less energy is dissipated, so more of it heats the block.' },
    { q: 'In RP1 you plot temperature against energy supplied. The specific heat capacity equals', o: ['1 ÷ (mass × gradient)', 'gradient × mass', 'gradient ÷ mass', 'the y-intercept'], x: 'gradient = Δθ/ΔE = 1/(mc).' },
    { q: 'Why is water used in central heating radiators?', o: ['it has a high specific heat capacity, so it stores a lot of energy', 'it has a low specific heat capacity', 'it is a good electrical conductor', 'it has a low density'], x: 'Each kilogram carries a lot of energy per degree.' },
    { q: 'Two cranes lift identical loads to the top of a building. Crane A takes 30 s, crane B takes 60 s. Which statement is correct?', o: ['crane A has twice the power of crane B', 'crane B has twice the power of crane A', 'both do different amounts of work', 'both have the same power'], x: 'Same work, half the time → double the power.' },
    { q: 'A block of mass 2.0 kg gains 9000 J and warms by 5.0 °C. Its specific heat capacity is', o: ['900 J/kg °C', '4500 J/kg °C', '90 000 J/kg °C', '1800 J/kg °C'], x: 'c = 9000/(2.0 × 5.0).' },
    { q: 'Which of these is 3.6 kW?', o: ['3600 J transferred per second', '3600 J in total', '3.6 J per second', '3600 W per second'], x: 'kilo = 1000; watt = joule per second.' }
  ],
  exam: [
    { q: 'Describe how a student could use an electric heater, a joulemeter and a thermometer to determine the specific heat capacity of an aluminium block.', m: 6, ms: ['Measure the mass of the block using a balance.', 'Place heater and thermometer in the holes in the block (add a little water/oil for good thermal contact).', 'Insulate the block.', 'Record the initial temperature and the joulemeter reading.', 'Heat the block and record the final temperature and energy supplied (or readings every minute).', 'Calculate c = ΔE / (m Δθ), or plot temperature against energy and use c = 1/(m × gradient).'] },
    { q: 'The student’s value for aluminium was 1100 J/kg °C. The accepted value is 900 J/kg °C. Suggest why her value was too high.', m: 2, ms: ['Energy was transferred to the surroundings / not all energy heated the block.', 'So the temperature rise was smaller, giving a larger calculated c.'] },
    { q: 'A 2.2 kW kettle heats 1.5 kg of water from 15 °C to 100 °C. c(water) = 4200 J/kg °C. Calculate the time taken, assuming all the energy heats the water.', m: 4, ms: ['ΔE = 1.5 × 4200 × 85 = 535 500 J', 't = E / P', 't = 535 500 / 2200', 't = 243 s (≈ 4 minutes)'] },
    { q: 'Two electric motors lift the same weight through the same height. Motor X takes 8 s; motor Y takes 12 s. Explain which motor has the greater power.', m: 2, ms: ['Both do the same work / transfer the same energy.', 'X does it in less time, so its rate of energy transfer (power) is greater.'] }
  ],
  sims: ['shc'], gens: ['shc1', 'shc2', 'shc3', 'power1', 'power2', 'power3']
});

TOPICS.push({
  id: '1.3', unit: '1', ref: '4.1.2', title: 'Conservation, dissipation and efficiency', short: 'Wasted energy, insulation, efficiency',
  summary: 'Energy cannot be created or destroyed, but in every real change some is dissipated. Learn how to reduce unwanted transfers, how insulation works (Required Practical 2), and how to calculate efficiency.',
  spec: [
    'Energy can be transferred usefully, stored or dissipated, but cannot be created or destroyed',
    'In a closed system there is no net change to the total energy',
    'In all system changes energy is dissipated, so that it is stored in less useful ways (“wasted”)',
    'Explain ways of reducing unwanted energy transfers, e.g. lubrication and thermal insulation',
    'The higher the thermal conductivity of a material, the higher the rate of energy transfer by conduction across it',
    'Describe how the rate of cooling of a building is affected by the thickness and thermal conductivity of its walls',
    '(PO) Required practical 2: investigate the effectiveness of different materials as thermal insulators',
    'Efficiency = useful output energy transfer ÷ total input energy transfer, and = useful power output ÷ total power input (recall both); as a decimal or percentage',
    '(HT) Describe ways to increase the efficiency of an intended energy transfer'
  ],
  learn: [
    { h: 'Conservation of energy', html: `
<div class="box def"><b class="lbl">Law of conservation of energy</b><p>Energy can be transferred usefully, stored or dissipated, but it <b>cannot be created or destroyed</b>.</p></div>
<p>In a <b>closed system</b> (nothing enters or leaves) there is <b>no net change</b> in the total energy. A pendulum swinging in a vacuum would keep swinging: energy just moves back and forth between its kinetic and gravitational potential stores.</p>
<p>In every real change some energy is <b>dissipated</b> — it spreads out into the surroundings, usually warming them slightly. It is stored in less useful ways, so we call it <b>wasted</b> energy. It has not been destroyed.</p>
[[d:sankey]]
<p>A <b>Sankey diagram</b> shows this: the width of each arrow is proportional to the energy. Input = useful output + wasted output.</p>` },
    { h: 'Reducing unwanted energy transfers', html: `
<ul><li><b>Lubrication</b> (oil, grease) reduces friction between moving parts, so less work is done against friction and less energy is dissipated by heating.</li>
<li><b>Thermal insulation</b> reduces energy transfer by heating: loft insulation, cavity-wall insulation, double glazing, draught excluders.</li>
<li>Streamlining reduces air resistance on vehicles.</li></ul>
<div class="box def"><b class="lbl">Thermal conductivity</b><p>The <b>higher the thermal conductivity</b> of a material, the <b>higher the rate</b> of energy transfer by conduction across it. Metals have high thermal conductivity; air, foam and wool have low thermal conductivity.</p></div>
<p>A building cools more slowly if its walls are <b>thicker</b> and made of a material with <b>lower thermal conductivity</b>. Cavity walls trap air (a poor conductor) — filling the cavity with foam also stops air moving and carrying energy by convection.</p>
<p class="small muted">You do not need to know the definition of thermal conductivity.</p>` },
    { h: 'Required practical 2: thermal insulators', po: true, html: `
<ol><li>Put a small beaker inside a larger beaker. Fill the gap with the insulating material being tested (e.g. cotton wool, bubble wrap, newspaper, polystyrene beads).</li>
<li>Pour a fixed volume of hot water (e.g. 80 cm³ at about 80 °C) into the small beaker; add a lid of the same material.</li>
<li>Record the temperature every 2 minutes for 20 minutes.</li>
<li>Repeat with each material, and with no insulation as a control. Keep the starting temperature, volume of water and thickness of material the same.</li></ol>
<p><b>Analysis:</b> plot cooling curves (temperature against time). The best insulator gives the smallest temperature drop in the same time.</p>
<p>A second version investigates <b>thickness</b>: wrap the beaker in 1, 2, 3… layers of newspaper — more layers, slower cooling.</p>
<div class="box warn"><b class="lbl">Variables</b><p>Independent: type (or thickness) of insulating material. Dependent: temperature drop in a fixed time. Control: volume and starting temperature of water, time, beaker size, room temperature.</p></div>
<p><b>Safety:</b> take care pouring hot water; stand beakers on a heatproof mat; wipe up spills.</p>` },
    { h: 'Efficiency', html: `
<div class="box def"><b class="lbl">Recall both equations</b><p>efficiency = useful output energy transfer ÷ total input energy transfer</p><p>efficiency = useful power output ÷ total power input</p></div>
<p>Efficiency has <b>no unit</b>. It can be written as a decimal (0.35) or a percentage (35%). No real device is 100% efficient, so efficiency is always less than 1.</p>
<p>Rearranged: useful output = efficiency × total input. A 40% efficient motor supplied with 500 J does 200 J of useful work — the other 300 J is wasted.</p>
<div class="box tip"><b class="lbl">Exam tip</b><p>If you get an efficiency above 1 (or 100%), you have divided the wrong way up.</p></div>` },
    { h: 'Increasing efficiency', ht: true, html: `
<p>To increase the efficiency of an intended transfer, reduce the energy that is dissipated:</p>
<ul><li>lubricate moving parts to reduce friction</li><li>use low-resistance wires to reduce heating in cables</li><li>insulate hot objects (e.g. a kettle) so less energy heats the surroundings</li><li>streamline vehicles to reduce air resistance</li><li>replace filament lamps with LEDs, which waste far less energy by heating</li><li>tighten loose parts so less energy is transferred as sound and vibration</li></ul>` }
  ],
  eqs: [['"efficiency" = @frac{"useful output energy transfer"}{"total input energy transfer"}', 'recall'], ['"efficiency" = @frac{"useful power output"}{"total power input"}', 'recall']],
  worked: [
    { q: 'A motor is supplied with 800 J of energy and does 560 J of useful work. Calculate its efficiency.', s: ['efficiency = useful output ÷ total input', '= 560 ÷ 800', '= 0.70'], a: '0.70 (70%)' },
    { q: 'An LED bulb has an efficiency of 0.80 and an input power of 5.0 W. Calculate its useful power output and the power wasted.', s: ['useful power output = efficiency × total power input', '= 0.80 × 5.0 = 4.0 W', 'wasted power = 5.0 − 4.0 = 1.0 W'], a: '4.0 W useful, 1.0 W wasted' },
    { q: 'A 25% efficient petrol engine gives a useful output of 15 kW. Calculate the total power input.', s: ['total power input = useful power output ÷ efficiency', '= 15 000 ÷ 0.25', '= 60 000 W'], a: '60 kW' }
  ],
  pitfalls: ['Dividing input by output and getting an efficiency above 1.', 'Saying wasted energy is “destroyed” or “lost” — it is dissipated to the surroundings.', 'Forgetting that efficiency has no unit.', 'Confusing thermal conductivity (how fast energy is conducted) with specific heat capacity.', 'In RP2, changing more than one variable at a time.'],
  cards: [
    ['State the law of conservation of energy.', 'Energy can be transferred usefully, stored or dissipated, but cannot be created or destroyed.'],
    ['What is a closed system?', 'One where there is no net change to the total energy.'],
    ['What does “dissipated” mean?', 'Spread out to the surroundings and stored in less useful ways (usually thermal).'],
    ['Two ways to reduce unwanted energy transfers?', 'Lubrication (less friction) and thermal insulation (less heating of surroundings).'],
    ['Effect of high thermal conductivity?', 'A higher rate of energy transfer by conduction through the material.'],
    ['How do thicker walls affect a building?', 'Slower rate of cooling.'],
    ['Efficiency equation (energy)?', 'useful output energy transfer ÷ total input energy transfer'],
    ['Efficiency equation (power)?', 'useful power output ÷ total power input'],
    ['Unit of efficiency?', 'None — decimal or percentage.'],
    ['What does a Sankey diagram show?', 'Energy transfers; the width of each arrow is proportional to the amount of energy.'],
    ['RP2: independent and dependent variables?', 'Independent: insulating material (or thickness); dependent: temperature change in a fixed time.', 'po'],
    ['(HT) Name three ways to increase efficiency.', 'Lubricate moving parts; insulate; streamline; use LEDs; use low-resistance wires.', 'ht']
  ],
  quiz: [
    { q: 'Which statement about energy is correct?', o: ['energy cannot be created or destroyed', 'energy is used up when a device works', 'wasted energy is destroyed', 'efficient devices create energy'], x: 'Conservation of energy.' },
    { q: 'A light bulb is supplied with 100 J and gives out 20 J of light. Its efficiency is', o: ['0.20', '5.0', '0.80', '80'], x: '20 ÷ 100.' },
    { q: 'A motor has an efficiency of 60%. It is supplied with 200 J. How much energy is wasted?', o: ['80 J', '120 J', '60 J', '140 J'], x: 'Useful = 120 J, so wasted = 80 J.' },
    { q: 'Oiling the chain of a bicycle', o: ['reduces friction, so less energy is dissipated', 'increases the thermal conductivity of the chain', 'increases the energy input', 'stores more elastic potential energy'], x: 'Lubrication reduces unwanted energy transfers.' },
    { q: 'Which change makes a house cool more slowly?', o: ['thicker walls made of a material with lower thermal conductivity', 'thinner walls', 'walls with a higher thermal conductivity', 'removing loft insulation'], x: 'Thicker walls with low thermal conductivity reduce the rate of energy transfer.' },
    { q: 'Wasted energy usually ends up', o: ['in the thermal store of the surroundings', 'in the chemical store of the device', 'destroyed', 'in the nuclear store of the air'], x: 'It is dissipated, warming the surroundings.' },
    { q: 'In a Sankey diagram the width of each arrow represents', o: ['the amount of energy', 'the time taken', 'the efficiency', 'the power rating'], x: 'Width ∝ energy.' },
    { q: 'An electric motor has an input power of 400 W and an efficiency of 0.75. Its useful power output is', o: ['300 W', '533 W', '100 W', '0.0019 W'], x: '0.75 × 400.' },
    { q: 'Which of these would give the highest rate of energy transfer by conduction through a wall of the same thickness?', o: ['a metal sheet', 'a brick wall', 'a layer of foam', 'a layer of trapped air'], x: 'Metals have the highest thermal conductivity.' },
    { q: 'In RP2 a student tests four insulators. Which should she keep the same?', o: ['the starting temperature and volume of water', 'the type of insulator', 'the temperature drop', 'nothing — change everything at once'], x: 'These are control variables.', po: 1 },
    { q: 'Which is NOT a way to increase the efficiency of an electric motor?', o: ['increase the input power', 'lubricate the bearings', 'use lower-resistance wire in the coil', 'reduce vibration by tightening loose parts'], x: 'Supplying more energy does not change the fraction that is useful.', ht: 1 },
    { q: 'An appliance has an efficiency of 1.2. This shows', o: ['a calculation error — efficiency cannot exceed 1', 'it creates energy', 'it is very efficient', 'it wastes no energy'], x: 'Efficiency is always less than 1 (100%).' }
  ],
  exam: [
    { q: 'Describe how you would investigate which of three materials is the best thermal insulator.', m: 6, ms: ['Place a small beaker inside a larger beaker with the insulating material packed in the gap (and a lid).', 'Pour in the same volume of hot water at the same starting temperature each time.', 'Measure the temperature at regular intervals / after a fixed time (e.g. every 2 min for 20 min) with a thermometer.', 'Repeat for each material (and with no insulation as a control).', 'Keep thickness of material, volume of water, starting temperature and room conditions the same.', 'The material giving the smallest temperature drop in the fixed time is the best insulator.'], po: 1 },
    { q: 'A crane motor is supplied with 50 000 J of energy. It lifts a 400 kg load through 8.0 m. g = 9.8 N/kg. Calculate the efficiency of the motor.', m: 4, ms: ['Useful energy = mgh = 400 × 9.8 × 8.0', '= 31 360 J', 'Efficiency = 31 360 / 50 000', '= 0.63 (63%)'] },
    { q: 'Explain how cavity-wall insulation reduces the rate of energy transfer from a house.', m: 3, ms: ['The insulating foam has a low thermal conductivity / traps air, which is a poor conductor.', 'It stops air moving in the cavity so reduces convection.', 'So the rate of energy transfer through the wall by heating is reduced.'] },
    { q: 'Suggest two ways the efficiency of a car engine could be improved.', m: 2, ms: ['Lubricate moving parts to reduce friction.', 'Streamline the car / insulate the engine / reduce mass (any sensible second point).'], ht: 1 }
  ],
  sims: ['sankey', 'cooling'], gens: ['eff1', 'eff2', 'eff3', 'eff4']
});

TOPICS.push({
  id: '1.4', unit: '1', ref: '4.1.3', title: 'National and global energy resources', short: 'Renewable vs non-renewable, reliability, impact',
  summary: 'Where our energy comes from, what we use it for, and how to weigh reliability, cost and environmental impact — plus why science cannot solve every problem on its own.',
  spec: [
    'The main energy resources: fossil fuels (coal, oil and gas), nuclear fuel, bio-fuel, wind, hydro-electricity, geothermal, the tides, the Sun and water waves',
    'A renewable energy resource is one that is being (or can be) replenished as it is used',
    'Uses of energy resources include transport, electricity generation and heating',
    'Distinguish between renewable and non-renewable resources; compare how resources are used',
    'Understand why some energy resources are more reliable than others',
    'Describe the environmental impact of using different energy resources; explain patterns and trends in their use',
    'Science can identify environmental issues but may not have the power to deal with them because of political, social, ethical or economic considerations',
    'Descriptions of how energy resources generate electricity are not required'
  ],
  learn: [
    { h: 'Renewable and non-renewable resources', html: `
<div class="box def"><b class="lbl">Definition</b><p>A <b>renewable</b> energy resource is one that is being (or can be) <b>replenished as it is used</b>. Non-renewable resources will run out.</p></div>
<div class="tbl"><table><tr><th>Non-renewable</th><th>Renewable</th></tr>
<tr><td>coal, oil, natural gas (fossil fuels)<br>nuclear fuel (uranium, plutonium)</td><td>bio-fuel, wind, hydro-electricity, geothermal, tides, the Sun (solar), water waves</td></tr></table></div>
<p>We use energy resources for three main things: <b>transport</b> (mostly petrol and diesel from oil; some bio-fuel and electricity), <b>electricity generation</b>, and <b>heating</b> (natural gas, electricity, some solar water heating and geothermal).</p>` },
    { h: 'Comparing resources', html: `
<div class="tbl"><table><tr><th>Resource</th><th>Reliable?</th><th>Environmental impact</th></tr>
<tr><td>Fossil fuels</td><td>Yes — available on demand, quick start-up for gas</td><td>CO₂ (global warming); coal and oil also release sulfur dioxide (acid rain); mining/spills damage habitats</td></tr>
<tr><td>Nuclear</td><td>Yes — steady output, but slow to start</td><td>No CO₂ when running; radioactive waste must be stored for thousands of years; risk of accidents</td></tr>
<tr><td>Bio-fuel</td><td>Fairly — can be stored</td><td>“Carbon neutral” in theory; land used for crops, deforestation</td></tr>
<tr><td>Wind</td><td>No — depends on the wind</td><td>Visual and noise pollution; no CO₂ when running</td></tr>
<tr><td>Solar</td><td>No — only in daylight, less in winter</td><td>No pollution when running; manufacture uses energy; land use</td></tr>
<tr><td>Hydro-electric</td><td>Yes — water can be stored and released on demand</td><td>Flooding valleys destroys habitats; rotting vegetation releases methane</td></tr>
<tr><td>Tidal</td><td>Yes — predictable, but output varies over the day</td><td>Barrages alter estuary habitats and affect shipping</td></tr>
<tr><td>Wave</td><td>No — depends on waves</td><td>Can disturb marine habitats; visual</td></tr>
<tr><td>Geothermal</td><td>Yes</td><td>Very little — but only possible in volcanic areas</td></tr></table></div>
<p><b>Reliable</b> means it can supply energy whenever it is needed. Renewables like wind and solar are unreliable, so we still need back-up (often gas) or energy storage.</p>` },
    { h: 'Patterns, trends and decisions', html: `
<p>In the UK the use of <b>coal</b> for electricity has fallen sharply, while <b>wind</b> and <b>solar</b> have grown quickly. Reasons: concern about global warming, government targets and subsidies, falling cost of renewables, and a desire for energy security.</p>
<p>Science can <b>identify</b> the problems (e.g. measuring rising CO₂ levels) and develop solutions, but it does not always have the power to <b>deal with</b> them. Decisions also depend on <b>political</b> (international agreements), <b>social</b> (people objecting to wind farms nearby), <b>ethical</b> (effects on future generations) and <b>economic</b> (cost of building new power stations) considerations.</p>
<div class="box tip"><b class="lbl">Exam tip</b><p>Six-mark “evaluate” questions want advantages <i>and</i> disadvantages of each option and then a justified conclusion. Use data from the question.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'A town needs electricity at night when demand rises in winter. Explain why a solar farm alone is not suitable.', s: ['The Sun does not shine at night, so solar cells produce no electricity then.', 'In winter there are fewer daylight hours and less intense sunlight.', 'So the output is unreliable — it cannot meet demand whenever it is needed; back-up or storage is required.'], a: 'Solar is unreliable: no output at night and less in winter.' },
    { q: 'In 2012 about 40% of UK electricity came from coal; by 2020 it was under 2%. Suggest two reasons for this trend.', s: ['Burning coal releases large amounts of CO₂ (and SO₂), contributing to global warming and acid rain.', 'Government targets/taxes on carbon, and the growth of cheaper wind and solar generation, made coal less attractive.'], a: 'Environmental concerns and policy/costs favouring cleaner resources.' }
  ],
  pitfalls: ['Calling nuclear fuel renewable.', 'Saying renewables “never run out” without explaining that they are replenished.', 'Saying wind turbines produce CO₂ when they are running.', 'Describing how a power station works — not required.', 'Giving only advantages in an “evaluate” question.'],
  cards: [
    ['Define a renewable energy resource.', 'One that is being (or can be) replenished as it is used.'],
    ['Name the three fossil fuels.', 'Coal, oil and (natural) gas.'],
    ['Is nuclear fuel renewable?', 'No.'],
    ['Three main uses of energy resources?', 'Transport, electricity generation and heating.'],
    ['Why is wind power unreliable?', 'The wind does not always blow (or can be too strong).'],
    ['Which renewable is predictable?', 'Tidal (and hydro-electric can be stored).'],
    ['Main environmental problem with fossil fuels?', 'Carbon dioxide — contributes to global warming (also SO₂ and acid rain).'],
    ['Main problem with nuclear power?', 'Long-lived radioactive waste (and risk of accidents).'],
    ['Downside of hydro-electric dams?', 'Flooding destroys habitats; rotting vegetation releases methane.'],
    ['Why can’t science alone solve environmental problems?', 'Political, social, ethical and economic considerations also affect decisions.'],
    ['Where is geothermal energy available?', 'Volcanic areas where hot rocks are near the surface.'],
    ['Why is bio-fuel described as carbon neutral?', 'Plants absorb CO₂ as they grow, balancing that released when burned.']
  ],
  quiz: [
    { q: 'Which is a renewable energy resource?', o: ['tides', 'coal', 'natural gas', 'uranium'], x: 'Tides are replenished continually.' },
    { q: 'Which is non-renewable?', o: ['nuclear fuel', 'bio-fuel', 'geothermal', 'wind'], x: 'Uranium will run out.' },
    { q: 'Which resource is most reliable for meeting a sudden rise in demand?', o: ['gas-fired power station', 'wind turbines', 'solar cells', 'wave generators'], x: 'Gas stations start quickly and burn fuel on demand.' },
    { q: 'Burning fossil fuels contributes to global warming because it releases', o: ['carbon dioxide', 'radioactive waste', 'oxygen', 'nitrogen'], x: 'CO₂ is a greenhouse gas.' },
    { q: 'Which is a disadvantage of hydro-electric power?', o: ['flooding valleys destroys habitats', 'it produces radioactive waste', 'it only works on windy days', 'it releases sulfur dioxide'], x: 'Reservoirs flood large areas.' },
    { q: 'Most road transport in the UK is powered by', o: ['oil (petrol and diesel)', 'nuclear fuel', 'geothermal energy', 'tidal power'], x: 'Fossil fuel from oil.' },
    { q: 'Why is solar power unreliable?', o: ['it produces no electricity at night', 'it releases CO₂', 'the Sun is non-renewable', 'it needs uranium'], x: 'Output depends on daylight and cloud cover.' },
    { q: 'A renewable resource is one that', o: ['is being replenished as it is used', 'produces no pollution at all', 'is cheap', 'is always reliable'], x: 'This is the spec definition.' },
    { q: 'Which is a political reason that might slow the building of new nuclear power stations?', o: ['government decisions and international agreements', 'the half-life of uranium', 'the cost of wind turbines', 'the speed of neutrons'], x: 'Political considerations are decisions by governments.' },
    { q: 'Which resource produces acid rain when burned?', o: ['coal', 'wind', 'geothermal', 'solar'], x: 'Coal releases sulfur dioxide.' },
    { q: 'UK use of coal for electricity has fallen mainly because of', o: ['concern about CO₂ emissions and global warming', 'coal becoming renewable', 'wind being more reliable than coal', 'coal producing radioactive waste'], x: 'Environmental concerns, targets and carbon costs.' },
    { q: 'Which of these is NOT an issue for wind farms?', o: ['producing CO₂ while running', 'visual pollution', 'noise', 'output depends on the weather'], x: 'Turbines produce no CO₂ when running.' }
  ],
  exam: [
    { q: 'A coastal town is choosing between a gas-fired power station and a wind farm. Evaluate the two options.', m: 6, ms: ['Gas: reliable / can meet demand at any time / quick start-up.', 'Gas: non-renewable; will run out.', 'Gas: releases CO₂ — contributes to global warming.', 'Wind: renewable; no CO₂ when running.', 'Wind: unreliable — depends on wind; needs back-up/storage; visual and noise pollution.', 'A justified conclusion (e.g. wind farm with gas back-up).'] },
    { q: 'Give two reasons why nuclear power is used to generate electricity even though it is non-renewable.', m: 2, ms: ['Reliable / steady output / not weather-dependent.', 'Produces no CO₂ when generating / a small mass of fuel releases a lot of energy.'] },
    { q: 'Explain why scientists may know about a problem caused by an energy resource but be unable to solve it.', m: 2, ms: ['Solutions may be too expensive / economic reasons.', 'Governments or people may not agree / political, social or ethical reasons.'] }
  ],
  sims: ['resources'], gens: []
});
