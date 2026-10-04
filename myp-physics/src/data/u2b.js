/* ==========================================================
   UNIT 2 · Motion of a particle (part 2)
   Strand 2: modelling forces (friction) · Strand 3: momentum · Strand 4: energy
   ========================================================== */
TOPICS.push({
  id: '2.7', unit: '2', strand: 2, as: [8], ref: 'Strand 2 · AS 8', title: 'Friction and resistance', short: 'Static and dynamic friction, μ = F ÷ R, drag',
  summary: 'Every moving particle meets resistance. Friction opposes sliding; its maximum size depends on the normal force through the coefficient of friction, μ. Drag in fluids grows with speed and leads to terminal velocity.',
  spec: ['State that friction acts parallel to the surfaces and opposes relative motion (or the tendency to move)', 'Distinguish static friction (no sliding; adjusts up to a maximum) from dynamic (kinetic) friction (sliding)', 'Define the coefficient of friction μ = F ÷ R, the ratio of the frictional force to the normal force', 'Calculate static (μₛ, at the point of slipping) and dynamic (μ_d) coefficients', 'Determine μₛ from the angle at which an object starts to slide: μₛ = tan θ', 'Describe drag (air and water resistance) and how it depends on speed and shape'],
  learn: [
    { h: 'What all friction has in common', html: `
<p>Friction arises from the interactions between two surfaces in contact — microscopic bumps catching and molecules attracting. Whatever the surfaces, friction always:</p>
<ul><li>acts <b>parallel</b> to the surfaces,</li><li>opposes the <b>relative motion</b> (or the tendency to move),</li><li>transfers energy from kinetic stores to <b>thermal</b> stores when sliding happens.</li></ul>
<p>Friction is not always unhelpful: it lets us walk, lets tyres grip and brakes work.</p>` },
    { h: 'Static and dynamic friction', html: `
[[d:frictiongraph]]
<p>Push gently on a heavy box and it does not move: <b>static friction</b> exactly matches your push. Push harder and static friction grows — up to a maximum. Beyond that the box slips and <b>dynamic (kinetic) friction</b> takes over. Dynamic friction is roughly constant and usually <b>smaller</b> than the maximum static friction, which is why it is harder to start something sliding than to keep it sliding.</p>` },
    { h: 'The coefficient of friction', html: `
<div class="box def"><b class="lbl">Definition</b><p>$μ = @frac{F_{friction}}{R}$ &nbsp; (ratio of frictional force to normal force — no units)</p><p class="small">Static: $F ≤ μ_s R$ (equal at the point of slipping). Dynamic: $F = μ_d R$.</p></div>
<div class="tbl"><table><tr><th>Surfaces</th><th>μₛ</th><th>μ_d</th></tr><tr><td>rubber on dry concrete</td><td>1.0</td><td>0.8</td></tr><tr><td>rubber on wet concrete</td><td>0.7</td><td>0.5</td></tr><tr><td>wood on wood</td><td>0.5</td><td>0.3</td></tr><tr><td>steel on steel (dry)</td><td>0.7</td><td>0.6</td></tr><tr><td>steel on ice</td><td>0.03</td><td>0.01</td></tr></table></div>
<p><b>Measuring μₛ with a ramp:</b> tilt a ramp until the block just starts to slide at angle θ. Then mg sin θ = μₛ mg cos θ, so $μ_s = tan θ$ — the mass cancels.</p>
<p><b>Measuring μ_d with a force meter:</b> drag the block at constant speed (resultant force zero) so the pull equals the dynamic friction; divide by R = mg.</p>` },
    { h: 'Drag and terminal velocity', html: `
<p>Drag (air or water resistance) is friction from a fluid. Unlike sliding friction, it <b>increases with speed</b> (roughly with v² at everyday speeds) and depends on the cross-sectional area and shape. Streamlining reduces it.</p>
<p>A falling object speeds up until drag equals its weight. The resultant force is then zero and it falls at <b>terminal velocity</b>. Opening a parachute increases the area, so drag suddenly exceeds weight and the skydiver decelerates to a new, lower terminal velocity.</p>
[[d:terminal]]` }
  ],
  eqs: [['μ = @frac{F}{R}', 'coefficient of friction'], ['F ≤ μ_s R', 'static friction (maximum at the point of slipping)'], ['F = μ_d R', 'dynamic friction'], ['μ_s = tan θ', 'from the slipping angle of a ramp']],
  worked: [
    { q: 'A 4.0 kg wooden block on a horizontal bench needs a horizontal pull of 19.6 N to start it moving, and 11.8 N to keep it moving at constant speed. Find μₛ and μ_d.', s: ['R = mg = 4.0 × 9.8 = 39.2 N', '$μ_s = @frac{19.6}{39.2} = 0.50$', '$μ_d = @frac{11.8}{39.2} = 0.30$'], a: 'μₛ = 0.50, μ_d = 0.30' },
    { q: 'A box starts to slide when a ramp is raised to 27°. Find μₛ.', s: ['At the point of slipping mg sin θ = μₛ mg cos θ', '$μ_s = tan 27°$', '$μ_s = 0.51$'], a: '0.51' },
    { q: 'A 1200 kg car brakes on a wet road (μ_d = 0.5). What is the maximum deceleration if the wheels skid?', s: ['F = μ_d R = 0.5 × 1200 × 9.8 = 5880 N', '$a = @frac{F}{m} = @frac{5880}{1200}$', '$a = 4.9 "m s"^{-2}$ (= μg)'], a: '4.9 m s⁻²' }
  ],
  pitfalls: ['Using the weight instead of the normal reaction on a slope (R = mg cos θ).', 'Thinking static friction always equals μₛR — it only reaches that value when the object is about to slip.', 'Giving μ a unit.', 'Saying friction acts in the direction of motion.'],
  cards: [
    ['Direction of friction?', 'Parallel to the surfaces, opposing relative motion.'], ['Static vs dynamic friction?', 'Static: no sliding, adjusts up to a maximum. Dynamic: while sliding, roughly constant.'], ['Coefficient of friction?', 'μ = F ÷ R (frictional force ÷ normal force).'],
    ['Units of μ?', 'None (ratio of two forces).'], ['Usually bigger: μₛ or μ_d?', 'μₛ'], ['μₛ from a ramp?', 'tan θ at the angle of slipping.'], ['How to measure μ_d with a force meter?', 'Pull at constant speed; pull = friction; μ_d = F/mg.'],
    ['How does drag depend on speed?', 'Increases with speed (≈ v²).'], ['Terminal velocity?', 'Drag = weight, resultant force zero, constant velocity.'], ['Energy transfer by friction?', 'Kinetic → thermal.']
  ],
  quiz: [
    { q: 'The coefficient of friction is defined as', o: ['frictional force ÷ normal force', 'normal force ÷ frictional force', 'frictional force × normal force', 'weight ÷ mass'], x: 'μ = F/R.' },
    { q: 'A 2.0 kg block (R = 19.6 N) needs 7.8 N to keep it sliding at constant speed. μ_d is', o: ['0.40', '2.5', '3.9', '0.20'], x: '7.8 ÷ 19.6.' },
    { q: 'A box at rest on a floor is pushed with 10 N but does not move. The friction force is', o: ['10 N', 'zero', 'μₛR', 'more than 10 N'], x: 'Static friction matches the push.' },
    { q: 'A block starts to slip on a ramp at 35°. μₛ is', o: ['0.70', '0.57', '0.82', '35'], x: 'tan 35°.' },
    { q: 'It is usually harder to start a heavy box moving than to keep it moving because', o: ['μₛ is greater than μ_d', 'the box gets lighter', 'drag increases', 'the normal force decreases'], x: 'Static > dynamic.' },
    { q: 'Which change increases drag on a cyclist?', o: ['sitting upright', 'crouching low', 'wearing a tight suit', 'riding slower'], x: 'Bigger area.' },
    { q: 'When a skydiver reaches terminal velocity', o: ['drag equals weight', 'drag is zero', 'weight is zero', 'she is decelerating'], x: 'Balanced.' },
    { q: 'On a wet road the maximum braking force on a car is smaller because', o: ['μ between tyres and road is lower', 'the car is heavier', 'the normal force is bigger', 'drag is larger'], x: 'F = μR.' },
    { q: 'Friction always', o: ['opposes relative motion of the surfaces', 'acts in the direction of motion', 'acts perpendicular to the surface', 'increases speed'], x: 'Definition.' }
  ],
  exam: [
    { q: 'Describe how to determine the dynamic coefficient of friction between a wooden block and a bench, using a force meter and a balance. Include how to make the result reliable.', m: 6, cr: 'B', ms: ['Measure the mass of the block; R = mg.', 'Attach a force meter horizontally and pull the block at constant speed.', 'Constant speed → resultant force zero → pull = dynamic friction.', 'μ_d = F ÷ R.', 'Repeat with added masses (vary R) and plot F against R — gradient = μ_d.', 'Repeat readings and average; keep the same surfaces and clean them; read the meter while moving steadily.'] },
    { q: 'A 50 kg crate rests on a ramp. μₛ = 0.45. Find the largest ramp angle at which the crate stays at rest.', m: 3, cr: 'A', ms: ['On the point of slipping tan θ = μₛ', 'θ = tan⁻¹ 0.45', 'θ = 24°'] },
    { q: 'Using the idea of resistance, explain why a cyclist needs to keep pedalling to travel at a constant speed on a level road.', m: 3, cr: 'A', ms: ['Friction/drag act backwards on the moving cyclist.', 'A driving force equal to the resistive forces gives zero resultant → constant velocity (Newton 1).', 'Pedalling replaces the energy dissipated by resistance as thermal energy.'] }
  ],
  sims: ['incline', 'skydiver'], gens: ['mustat', 'mudyn', 'mutan']
});

TOPICS.push(lw('5.8', {
  id: '2.8', unit: '2', strand: 3, as: [9], ref: 'Strand 3 · AS 9', title: 'Momentum and impulse', short: 'p = mv, impulse = FΔt = Δp, safety design',
  summary: 'Momentum is mass in motion. Newton’s second law says force is the rate of change of momentum, so the impulse FΔt equals the change in momentum — the physics behind every crumple zone, airbag and helmet.',
  spec: ['Calculate momentum p = mv (a vector, unit kg m s⁻¹ = N s)', 'State Newton’s second law as F = Δp ÷ Δt', 'Define impulse as FΔt and show that impulse = change in momentum', 'Find the impulse from the area under a force–time graph', 'Explain how safety features (airbags, crumple zones, seat belts, helmets, crash mats) reduce forces by increasing the collision time', 'Evaluate safety improvements in transport'],
  learn: [0,
    { h: 'Newton’s second law and impulse', html: `
<p>Newton actually stated his second law in terms of momentum: the resultant force equals the <b>rate of change of momentum</b>.</p>
<div class="box def"><b class="lbl">Newton’s second law</b><p>$F = @frac{Δp}{Δt} = @frac{mv - mu}{t}$ &nbsp; which gives F = ma when the mass is constant.</p></div>
<div class="box def"><b class="lbl">Impulse</b><p>impulse = $FΔt = Δp$ &nbsp; (unit N s = kg m s⁻¹)</p></div>
<p>For a force that varies, the impulse is the <b>area under the force–time graph</b>. Two collisions with the same change in momentum have the same area: a short, tall spike (hard impact) or a long, low hump (soft impact).</p>
[[d:impulse]]` },
    { h: 'Designing for safety', html: `
<p>In a crash the change in momentum is fixed (from full speed to zero). Since $F = @frac{Δp}{Δt}$, the only way to reduce the force on the occupants is to make the stopping time <b>longer</b>.</p>
<div class="tbl"><table><tr><th>Feature</th><th>How it increases Δt</th></tr><tr><td>crumple zones</td><td>the front of the car deforms progressively</td></tr><tr><td>seat belts</td><td>stretch slightly, so the body stops over a longer time</td></tr><tr><td>airbags</td><td>inflate and deflate, so the head decelerates gradually; also spread the force over a larger area</td></tr><tr><td>cycle and climbing helmets</td><td>crushable foam liner</td></tr><tr><td>crash mats, trainers, sand pits</td><td>soft surfaces deform</td></tr></table></div>
<p>The same idea, in reverse, makes sports more effective: <b>following through</b> in golf or tennis keeps the force acting for longer, giving the ball a bigger impulse and so a bigger change in momentum.</p>` }],
  quiz: [0, 1, 5, 6, 7, 8],
  addQuiz: [{ q: 'Impulse is equal to', o: ['the change in momentum', 'mass × acceleration', 'force × distance', 'momentum ÷ time'], x: 'FΔt = Δp.' }, { q: 'The area under a force–time graph gives', o: ['the impulse', 'the work done', 'the power', 'the acceleration'], x: 'F × t.' }, { q: 'A tennis player follows through when hitting a ball. This', o: ['increases the contact time, increasing the change in momentum', 'decreases the force on the ball', 'reduces the ball’s momentum', 'makes the ball lighter'], x: 'Bigger impulse.' }],
  cards: [0, 1, 4, 5, 6], addCards: [['Impulse?', 'FΔt = Δp (N s).'], ['Area under F–t graph?', 'Impulse = change in momentum.'], ['Why do crumple zones reduce injury?', 'Longer collision time → smaller force for the same Δp.'], ['Newton 2 in momentum form?', 'F = Δp ÷ Δt']],
  exam: [0], addExam: [
    { q: 'A 0.16 kg cricket ball travelling at 30 m/s is caught and brought to rest. (a) Calculate the impulse on the ball. (b) A fielder stops the ball in 0.05 s with stiff hands, and another in 0.40 s by drawing the hands back. Calculate the average force in each case and explain which technique is better.', m: 5, cr: 'A', ms: ['Δp = 0.16 × 30 = 4.8 N s (kg m/s)', 'F = 4.8 ÷ 0.05 = 96 N', 'F = 4.8 ÷ 0.40 = 12 N', 'Drawing the hands back increases the stopping time …', '… so the force on the hands is smaller (less pain/injury).'] },
    { q: 'Evaluate the claim that improvements in car safety features have made roads safer for everyone.', m: 6, cr: 'D', ms: ['Safety features (crumple zones, airbags, seat belts) increase collision time → smaller forces → fewer deaths/injuries for occupants.', 'Data: road deaths per vehicle-km have fallen greatly in countries with these features.', 'Risk compensation: drivers who feel safer may drive faster or less carefully.', 'Pedestrians and cyclists gain less protection from in-car features (though some cars have pedestrian airbags / softer bonnets).', 'Other factors also matter (speed limits, laws, road design, education).', 'A reasoned conclusion that weighs the evidence.'] }
  ],
  worked: [0, 2],
  eqs: [['p = mv', 'momentum'], ['F = @frac{Δp}{Δt}', 'Newton’s second law'], ['"impulse" = FΔt = Δp', 'impulse']],
  pitfalls: ['Forgetting that momentum is a vector — a bounce reverses the sign of v, doubling Δp.', 'Saying safety features reduce the change in momentum (they reduce the force by increasing the time).', 'Using kg m/s² as the unit of momentum.'],
  sims: ['crash'], gens: ['mom4', 'fmdt1', 'impulse1', 'bounce']
}));

TOPICS.push(lw('5.8', {
  id: '2.9', unit: '2', strand: 3, as: [10], ref: 'Strand 3 · AS 10', title: 'Conservation of momentum', short: 'Collisions, explosions, rockets and ion drives',
  summary: 'In an isolated system the total momentum never changes. Use this to predict the outcome of collisions and explosions, and to explain how rockets, thrusters and ion drives move through empty space.',
  spec: ['State that in an isolated system the total momentum before an event equals the total momentum after', 'Use m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂ for collisions, including objects that stick together', 'Apply conservation of momentum to explosions and recoil (total momentum zero before)', 'Explain rocket and ion-drive propulsion using conservation of momentum or Newton’s third law', 'Compare kinetic energy before and after to classify collisions as elastic or inelastic'],
  learn: [1,
    { h: 'Solving collision problems', html: `
<ol><li>Choose a positive direction.</li><li>Write the total momentum before: $m_1u_1 + m_2u_2$ (with signs).</li><li>Write the total momentum after: $m_1v_1 + m_2v_2$ (or $(m_1 + m_2)v$ if they stick together).</li><li>Set them equal and solve.</li></ol>
<p>Momentum is always conserved in an isolated system, but <b>kinetic energy usually is not</b>: some is transferred to thermal energy and sound, and to deforming the objects. A collision in which kinetic energy is also conserved is <b>elastic</b> (nearly true for snooker balls and gas molecules); otherwise it is <b>inelastic</b>. If the objects stick together, the maximum possible kinetic energy is lost.</p>
[[d:collision]]` },
    { h: 'Rockets, thrusters and ion drives', html: `
<p>A rocket in space has nothing to “push against”. It works because it throws mass backwards: hot exhaust gas leaves the nozzle at high speed with backward momentum, so the rocket gains equal forward momentum (equivalently, the rocket pushes the gas back and the gas pushes the rocket forward — Newton’s third law).</p>
<div class="box def"><b class="lbl">Thrust</b><p>thrust = rate of change of momentum of the exhaust = (mass ejected per second) × (exhaust speed)</p></div>
<p>An <b>ion drive</b> ionises xenon and uses an electric field to accelerate the ions to about 30 km/s — ten times faster than chemical exhaust. The thrust is tiny (about the weight of a sheet of paper) but it can run for years using very little fuel, so deep-space probes such as Dawn and BepiColombo reach very high speeds.</p>` }],
  quiz: [2, 3, 4, 9],
  addQuiz: [
    { q: 'A 2.0 kg trolley at 3.0 m/s hits a stationary 1.0 kg trolley and they move off together. Their speed is', o: ['2.0 m/s', '3.0 m/s', '1.5 m/s', '6.0 m/s'], x: '6.0 ÷ 3.0.' },
    { q: 'In an explosion from rest, the total momentum afterwards is', o: ['zero', 'equal to the total kinetic energy', 'positive', 'impossible to know'], x: 'Same as before.' },
    { q: 'A rocket accelerates in space because', o: ['exhaust gas is given backward momentum, so the rocket gains forward momentum', 'the exhaust pushes against the air', 'gravity pushes it forward', 'momentum is not conserved in space'], x: 'Conservation of momentum.' },
    { q: 'In an inelastic collision', o: ['momentum is conserved but kinetic energy is not', 'kinetic energy is conserved but momentum is not', 'neither is conserved', 'both are always conserved'], x: 'KE → thermal, sound.' },
    { q: 'An ion drive produces a very small thrust because', o: ['only a tiny mass of ions is ejected each second', 'the ions are very slow', 'there is no air in space', 'ions have no momentum'], x: 'Thrust = (mass/second) × speed.' }
  ],
  cards: [2, 3, 7], addCards: [['Elastic collision?', 'Kinetic energy is conserved (as well as momentum).'], ['Inelastic collision?', 'Kinetic energy is not conserved — some transferred to thermal/sound.'], ['Why can a rocket accelerate in a vacuum?', 'It ejects exhaust backwards; momentum is conserved so the rocket moves forwards.'], ['How does an ion drive work?', 'Electric field accelerates ions out at very high speed — small thrust for a long time.']],
  exam: [1, 2], addExam: [{ q: 'A 75 kg astronaut floating at rest throws a 3.0 kg tool at 6.0 m/s away from her spacecraft. (a) Calculate her recoil velocity. (b) Explain why this could help her return to the spacecraft. (c) Calculate the total kinetic energy produced and state where it came from.', m: 6, cr: 'A', ms: ['Total momentum before = 0', '75v = −3.0 × 6.0 → v = −0.24 m/s', 'She moves at 0.24 m/s in the opposite direction to the tool — towards the spacecraft if she throws it away from it.', 'KE of tool = ½ × 3.0 × 36 = 54 J', 'KE of astronaut = ½ × 75 × 0.24² = 2.2 J; total ≈ 56 J', 'Came from chemical energy in her muscles.'] }],
  worked: [1], addWorked: [{ q: 'A 0.17 kg snooker ball at 2.0 m/s hits an identical stationary ball head-on and stops. Find the velocity of the second ball and check whether the collision is elastic.', s: ['Before: 0.17 × 2.0 = 0.34 kg m/s', 'After: 0.17 × v = 0.34 → v = 2.0 m/s', 'KE before = ½ × 0.17 × 4 = 0.34 J; KE after = 0.34 J — elastic'], a: '2.0 m/s; elastic' }],
  eqs: [['m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2', 'conservation of momentum'], ['0 = m_1v_1 + m_2v_2', 'explosion from rest']],
  pitfalls: ['Ignoring signs for objects moving in opposite directions.', 'Assuming kinetic energy is conserved in every collision.', 'Saying a rocket pushes against the air.', 'Forgetting to add the masses when objects stick together.'],
  sims: ['collisions'], gens: ['mom5', 'mom6', 'recoil', 'stick']
}));

TOPICS.push(lw('1.1', {
  id: '2.10', unit: '2', strand: 4, as: [11], ref: 'Strand 4 · AS 11', title: 'Work, energy and conservation', short: 'Eₖ, ΔEₚ, Eₑ, W = Fs, Sankey diagrams',
  summary: 'Energy is transformed but conserved in an isolated system. Calculate kinetic, gravitational and elastic energy, link force to energy through work done, and use conservation to predict the speed of a roller-coaster.',
  spec: ['Identify energy stores and transfers in common situations', 'Calculate Eₖ = ½mv², ΔEₚ = mgΔh and Eₑ = ½kx²', 'Calculate work done W = Fs (force × distance moved in the direction of the force)', 'Apply conservation of energy: total energy before = total energy after in an isolated system', 'Include work done against friction as energy dissipated', 'Draw and interpret Sankey diagrams'],
  learn: [0, 1, 2, 3, 4,
    { h: 'Work: the link between force and energy', html: `
<div class="box def"><b class="lbl">Work done</b><p>work done = force × distance moved in the direction of the force &nbsp; $W = Fs$</p><p class="small">W in joules (J), F in newtons (N), s in metres (m). 1 J = 1 N m.</p></div>
<p>When a force moves an object, energy is transferred. Work done <b>against friction</b> transfers energy to thermal stores, warming the surfaces. If the force is at an angle θ to the motion, only the component F cos θ does work.</p>` },
    { h: 'Conservation of energy: the roller-coaster', html: `
<p>For a roller-coaster car released from rest at height h, with friction ignored:</p>
<div class="box def"><b class="lbl">Energy conservation</b><p>$mgΔh = @frac{1}{2}mv^2$ &nbsp; so &nbsp; $v = @sqrt{2gΔh}$ — independent of mass.</p></div>
<p>With friction: <b>GPE lost = KE gained + work done against friction</b>. If a 500 kg car drops 30 m and arrives at 22 m/s, then GPE lost = 147 000 J, KE gained = 121 000 J, so 26 000 J was dissipated — the track does 26 000 J of work against friction.</p>
[[d:sankey]]
<p>A <b>Sankey diagram</b> shows the same accounting: the width of each arrow is proportional to the energy, and the arrows out add up to the arrow in — just as atoms balance in a chemical equation.</p>` }],
  quiz: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11], addQuiz: [{ q: 'A ball is dropped from 5.0 m. Ignoring air resistance, its speed just before landing does NOT depend on', o: ['its mass', 'the height it falls', 'the gravitational field strength', 'the distance fallen'], x: 'mgh = ½mv² — mass cancels, so v = √(2gh).' }, { q: 'A force of 20 N pushes a box 3.0 m along the floor. The work done is', o: ['60 J', '6.7 J', '23 J', '0.15 J'], x: 'W = Fs.' }, { q: 'A roller-coaster car drops 20 m from rest (no friction). Its speed at the bottom is', o: ['19.8 m/s', '392 m/s', '14 m/s', '9.8 m/s'], x: '√(2 × 9.8 × 20).' }],
  addCards: [['Work done?', 'W = Fs (force × distance in direction of the force).'], ['1 joule?', '1 N m — work done when 1 N moves 1 m.'], ['Speed after falling h from rest (no friction)?', 'v = √(2gh)'], ['Energy equation with friction?', 'GPE lost = KE gained + work done against friction.']],
  addExam: [{ q: 'A roller-coaster car of mass 600 kg is pulled to the top of a 40 m hill and released from rest. (a) Calculate its maximum possible speed at the bottom. (b) Its actual speed at the bottom is 25 m/s. Calculate the energy dissipated. (c) The track from the top to the bottom is 120 m long. Calculate the average frictional force.', m: 6, cr: 'A', ms: ['GPE = 600 × 9.8 × 40 = 235 200 J', 'v = √(2 × 9.8 × 40) = 28 m/s', 'KE = ½ × 600 × 25² = 187 500 J', 'Energy dissipated = 47 700 J (≈ 48 kJ)', 'W = Fs → F = 47 700 ÷ 120', 'F ≈ 400 N'] }],
  eqs: [['E_k = @frac{1}{2}mv^2', 'kinetic energy'], ['ΔE_p = mgΔh', 'change in gravitational potential energy'], ['E_e = @frac{1}{2}kx^2', 'elastic potential energy'], ['W = Fs', 'work done']],
  sims: ['energy', 'coaster', 'sankey'], gens: ['ke1', 'ke2', 'gpe1', 'gpe2', 'epe1', 'fall1', 'work1', 'work2', 'coaster']
}));

TOPICS.push(lw('1.3', {
  id: '2.11', unit: '2', strand: 4, as: [12], ref: 'Strand 4 · AS 12', title: 'Power and efficiency', short: 'P = E ÷ t = Fv, efficiency, dissipation',
  summary: 'Power is the rate of energy change. Calculate power from energy and time or from force and velocity, find efficiencies, and connect wasted energy with global warming.',
  spec: ['Define power as the rate of energy transfer: P = E ÷ t = W ÷ t (watt = J s⁻¹)', 'Derive and use P = Fv for a constant force moving at constant velocity', 'Calculate efficiency = useful output ÷ total input (energy or power), as a decimal or percentage', 'Explain why no real energy transfer is 100% efficient', 'Describe ways of reducing unwanted energy transfers (lubrication, insulation, streamlining)', 'Link energy efficiency to reducing fuel use and CO₂ emissions'],
  learn: [
    { h: 'Power', html: `
<div class="box def"><b class="lbl">Power</b><p>$P = @frac{E}{t} = @frac{W}{t}$ &nbsp; (watt, W = J s⁻¹)</p></div>
<p>Two cranes lift the same load to the same height: they do the same work, but the one that does it faster is more <b>powerful</b>. A sprinter climbing stairs transfers about 1 kW; a car engine 50–100 kW; a large power station 2 GW.</p>
<div class="box def"><b class="lbl">Power from force and velocity</b><p>$P = @frac{Fs}{t} = Fv$</p><p class="small">At a steady speed, the driving force equals the resistive forces, so the engine power needed is (resistive force) × v — doubling speed needs much more power because drag also grows.</p></div>` },
    0, 3, 1, 4],
  quiz: [0, 1, 2, 3, 5, 6, 7, 10, 11],
  addQuiz: [{ q: 'A car moves at 25 m/s against resistive forces of 800 N. The power needed is', o: ['20 kW', '32 W', '825 W', '800 W'], x: 'P = Fv.' }, { q: 'A motor lifts a 50 kg load 12 m in 20 s. Its useful power is', o: ['294 W', '30 W', '600 W', '5880 W'], x: '50 × 9.8 × 12 ÷ 20.' }, { q: 'The watt is equivalent to', o: ['J s⁻¹', 'J s', 'N s', 'N m'], x: 'Energy per second.' }],
  cards: [0, 2, 6, 7, 8, 9, 11], addCards: [['Define power.', 'Rate of energy transfer: P = E/t.'], ['P in terms of force and velocity?', 'P = Fv'], ['1 W?', '1 J per second.']],
  exam: [1, 2, 3], addExam: [{ q: 'An electric car has a motor with an input power of 60 kW and an efficiency of 85%. At a steady 30 m/s, calculate (a) the useful output power, (b) the total resistive force on the car. (c) Suggest why the efficiency of an electric car is higher than that of a petrol car.', m: 5, cr: 'A', ms: ['Useful power = 0.85 × 60 000 = 51 000 W', 'F = P ÷ v = 51 000 ÷ 30', 'F = 1700 N', 'Petrol engines dissipate most energy as heat in combustion / exhaust (≈ 25–30% efficient).', 'Electric motors have fewer moving parts and little heating; regenerative braking recovers energy.'] }],
  worked: 'all', addWorked: [{ q: 'A cyclist produces 300 W of useful power to ride at a constant 10 m/s. Find the total resistive force.', s: ['At constant speed, driving force = resistive force', '$F = @frac{P}{v} = @frac{300}{10}$', '$F = 30 "N"$'], a: '30 N' }],
  eqs: [['P = @frac{E}{t}', 'power'], ['P = Fv', 'power from force and velocity'], ['"efficiency" = @frac{"useful output"}{"total input"}', 'energy or power']],
  pitfalls: ['Giving efficiency greater than 1 (or 100%).', 'Forgetting to convert kW to W or minutes to s.', 'Using P = Fv when the force is not in the direction of motion.', 'Saying wasted energy is “lost” or destroyed — it is dissipated.'],
  sims: ['sankey', 'cooling'], gens: ['power1', 'power2', 'power3', 'eff1', 'eff2', 'eff3', 'eff4', 'pfv']
}));
