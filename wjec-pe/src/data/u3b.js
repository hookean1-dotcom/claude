/* ==========================================================
   UNIT 3 · EVALUATING PHYSICAL EDUCATION (A2) — part 2
   Biomechanics: Newton's laws, momentum and impulse, stability and friction,
   linear and angular motion, projectile motion, fluid mechanics.  g = 9.8 N/kg.
   ========================================================== */
TOPICS.push({
  id: '3.6', unit: '3', area: 'bio', ref: 'Biomechanical principles', title: 'Newton’s laws, momentum and impulse', short: 'Inertia, F = ma, action–reaction; p = mv; impulse = F × t; force–time graphs',
  summary: 'Newton’s three laws explain every movement in sport. Learn the laws of inertia, acceleration and action–reaction with sporting applications, momentum and why it is a vector, impulse as force × time, and how to read force–time graphs for a sprinter’s foot contact and for impacts.',
  spec: [
    'Newton’s three laws of motion — inertia, acceleration and action/reaction — and their application within sport',
    'Momentum, impact and impulse; impulse as a vector quantity',
    'Force–time graphs: definitions of key terms and how to interpret them in a sporting context',
    'Use definitions, equations, formulae and units of measurement relevant to biomechanics'
  ],
  learn: [
    { h: 'Forces and Newton’s three laws', html: `
<p>A <b>force</b> is a push or pull that can change a body’s state of motion or shape; unit: newton (N). Forces are <b>vectors</b> (size and direction). Weight $W = mg$ (g = 9.8 N/kg) acts downward from the centre of mass; the <b>ground reaction force</b> acts upward from the ground.</p>
<div class="tbl"><table><tr><th>Law</th><th>Statement</th><th>Sporting application</th></tr>
<tr><td><b>1st — inertia</b></td><td>a body continues in a state of rest or uniform velocity unless acted on by an external (unbalanced) force</td><td>a football on the penalty spot stays still until kicked; a sprinter in the blocks stays still until force is applied; a heavy prop is hard to start moving (large inertia)</td></tr>
<tr><td><b>2nd — acceleration</b></td><td>the acceleration of a body is proportional to the force applied and in the direction of the force: $F = ma$ (the rate of change of momentum is proportional to the force)</td><td>the harder a ball is kicked, the faster it accelerates; a lighter hammer accelerates more for the same force</td></tr>
<tr><td><b>3rd — action–reaction</b></td><td>for every action there is an equal and opposite reaction</td><td>a sprinter pushes back and down on the blocks; the blocks push forward and up on the sprinter (ground reaction force)</td></tr></table></div>
[[d:freebody]]
<p><b>Net (resultant) force</b>: if forces are <b>balanced</b> the body stays at rest or constant velocity; if <b>unbalanced</b> it accelerates in the direction of the net force.</p>` },
    { h: 'Momentum', html: `
<p>$p = m × v$ — <b>momentum</b> is the quantity of motion a body possesses (kg m/s). Because velocity has direction, momentum is a <b>vector</b>.</p>
<ul><li>A heavy rugby player running fast has a lot of momentum and is hard to stop.</li><li>In a collision, momentum is conserved (the total before = total after), so a heavier, faster tackler drives the opponent backwards.</li><li>Momentum can be transferred through the body in a kinetic chain (legs → hips → trunk → arm → ball in a javelin throw).</li></ul>` },
    { h: 'Impulse', html: `
<p>$"impulse" = F × t = "change in momentum" = m(v − u)$ — units N s (= kg m/s). Impulse is a <b>vector</b>.</p>
<ul><li><b>Increasing impulse to increase speed:</b> apply force for longer (a longer follow-through in golf or a longer drive phase in a sprint start) or apply more force.</li>
<li><b>Reducing the peak force of an impact:</b> the change in momentum is fixed, so increasing the <b>time</b> of contact reduces the <b>force</b>: bending the knees on landing, “giving” with the hands to catch a hard ball, crash mats, padded gloves.</li></ul>` },
    { h: 'Force–time graphs', html: `
[[d:forcetime]]
<p>A force–time graph shows the horizontal ground reaction force during a foot contact. The <b>area under the curve = impulse</b>.</p>
<ul><li><b>Negative impulse</b> (below the axis) — at foot strike, the ground pushes backwards on the foot: braking.</li>
<li><b>Positive impulse</b> (above the axis) — at toe-off, the ground pushes forwards: propulsion.</li></ul>
<div class="tbl"><table><tr><th>Phase of a race</th><th>Net impulse</th><th>Result</th></tr>
<tr><td>Start / acceleration</td><td>positive area &gt; negative area</td><td>net positive impulse → acceleration</td></tr>
<tr><td>Constant maximum speed</td><td>positive = negative</td><td>net impulse zero → constant velocity</td></tr>
<tr><td>End of race / slowing</td><td>negative area &gt; positive area</td><td>net negative impulse → deceleration</td></tr></table></div>
<p>An <b>impact</b> force–time graph (landing, catching) with a longer time has a lower peak force for the same area.</p>` }
  ],
  eqs: [['F = m a', 'Newton’s 2nd law: force (N) = mass (kg) × acceleration (m/s²)'], ['W = m g', 'weight (N); g = 9.8 N/kg'], ['p = m v', 'momentum (kg m/s)'], ['"impulse" = F t = m(v − u)', 'impulse (N s) = change in momentum']],
  worked: [
    { q: 'A 70 kg sprinter accelerates at 5.2 m/s² from the blocks. Calculate the net horizontal force. (2 marks)', s: ['$F = ma = 70 × 5.2$', '<b>= 364 N</b> forward (net).'], a: '364 N.' },
    { q: 'A 0.43 kg football is kicked from rest to 26 m/s, with a foot contact time of 0.012 s. Calculate the impulse and the average force. (3 marks)', s: ['Impulse = change in momentum = $0.43 × (26 − 0) = 11.2$ N s.', 'Average force = impulse ÷ time = $11.18 ÷ 0.012$', '<b>≈ 930 N</b>.'], a: '11.2 N s; ≈ 930 N.' }
  ],
  pitfalls: ['Stating the 3rd law without naming the two forces and the two bodies (sprinter pushes on blocks; blocks push on sprinter).', 'Forgetting that momentum and impulse are vectors.', 'Reading the net impulse from only the positive part of a force–time graph.', 'Saying a larger force is always needed for more speed — applying force for longer also increases impulse.', 'Leaving out units (N, kg m/s, N s).'],
  cards: [
    ['Newton’s 1st law?', 'A body stays at rest or constant velocity unless acted on by an external (unbalanced) force.'], ['Newton’s 2nd law?', 'Acceleration is proportional to the force and in its direction: F = ma.'], ['Newton’s 3rd law?', 'For every action there is an equal and opposite reaction.'],
    ['Momentum?', 'p = mv; quantity of motion; kg m/s; a vector.'], ['Impulse?', 'Force × time = change in momentum; N s.'], ['How to reduce impact force?', 'Increase the time of contact (bend knees, “give”, padding).'],
    ['Area under a force–time graph?', 'Impulse.'], ['Negative impulse in running?', 'Braking force at foot strike.'], ['Net impulse at constant speed?', 'Zero (positive = negative).'], ['Weight?', 'W = mg (g = 9.8 N/kg), acting from the centre of mass.']
  ],
  quiz: [
    { q: 'A ball stays on the tee until struck. This illustrates Newton’s…', o: ['first law', 'second law', 'third law', 'law of gravitation'], x: 'Inertia.' },
    { q: 'A 60 kg athlete accelerates at 3 m/s². The net force is…', o: ['180 N', '20 N', '63 N', '588 N'], x: 'F = ma.' },
    { q: 'The unit of momentum is…', o: ['kg m/s', 'N', 'm/s²', 'J'], x: 'mass × velocity.' },
    { q: 'Impulse equals…', o: ['force × time', 'mass × acceleration', 'force ÷ time', 'mass ÷ velocity'], x: 'Also = change in momentum.' },
    { q: 'Bending the knees on landing reduces the peak force because it…', o: ['increases the time of contact', 'increases the change in momentum', 'reduces mass', 'increases velocity'], x: 'Same impulse, longer time.' },
    { q: 'On a force–time graph for a sprinter accelerating, the positive area is…', o: ['greater than the negative area', 'equal to the negative area', 'smaller than the negative area', 'zero'], x: 'Net positive impulse.' },
    { q: 'The upward force from the ground on a jumper is the…', o: ['ground reaction force', 'weight', 'friction', 'drag'], x: 'Newton’s 3rd law reaction.' },
    { q: 'A 90 kg player running at 6 m/s has momentum of…', o: ['540 kg m/s', '15 kg m/s', '96 kg m/s', '54 kg m/s'], x: '90 × 6.' }
  ],
  exam: [
    { q: 'State Newton’s third law and apply it to a basketball player jumping for a rebound. [2]', m: 2, ms: ['for every action there is an equal and opposite reaction', 'player pushes down on the floor (action); floor pushes up on the player (ground reaction force) — equal and opposite'] },
    { q: 'A 75 kg rugby player running at 7 m/s is tackled and brought to rest in 0.5 s.', parts: [
      { q: 'Calculate the player’s momentum before the tackle. [1]', m: 1, ms: ['75 × 7 = 525 kg m/s'] },
      { q: 'Calculate the average force applied by the tackler. [2]', m: 2, ms: ['impulse = change in momentum = 525 N s', 'F = 525 ÷ 0.5 = 1050 N'] },
      { q: 'Explain why a rugby player with greater mass is harder to stop. [2]', m: 2, ms: ['greater mass → greater momentum at the same velocity (p = mv) / greater inertia', 'greater impulse (force × time) needed to change momentum'] }
    ], tag: 'calc' },
    { q: 'Sketch and explain the horizontal force–time graphs for a sprinter at the start of a race and at constant maximum speed. [6]', m: 6, lv: true, ms: ['axes labelled force (N) and time (s); negative (braking) at foot strike, positive (propulsive) at toe-off', 'area under curve = impulse', 'start: positive area much larger than negative area', '→ net positive impulse → acceleration (F = ma / change in momentum)', 'constant speed: positive and negative areas equal', '→ net impulse zero → constant velocity (Newton’s 1st law)'] }
  ],
  sims: ['forcetime', 'newton'], gens: ['fma', 'weight', 'momentum', 'impulse', 'impforce']
});

TOPICS.push({
  id: '3.7', unit: '3', area: 'bio', ref: 'Biomechanical principles', title: 'Stability, centre of mass and friction', short: 'Stable, unstable and neutral equilibrium; base of support; centre of mass; coefficient of friction',
  summary: 'Some performers want to be as stable as possible, others want to be ready to move instantly. Learn the three states of equilibrium, how the base of support, the height of the centre of mass, the line of gravity and mass affect stability, and the factors that influence the coefficient of friction.',
  spec: [
    'Stability: stable, unstable and neutral equilibrium',
    'Factors affecting stability: base of support and centre of mass',
    'Factors influencing the size of the coefficient of friction'
  ],
  learn: [
    { h: 'Centre of mass and equilibrium', html: `
<p>The <b>centre of mass (COM)</b> is the point at which the mass of a body is concentrated and balanced — the point through which weight acts. In a standing person it is roughly at the hips; it moves as the body changes shape, and can lie <b>outside</b> the body (a Fosbury flop, a pike).</p>
<div class="tbl"><table><tr><th>Equilibrium</th><th>What happens when disturbed</th><th>Example</th></tr>
<tr><td><b>Stable</b></td><td>the COM is raised by a small displacement and returns to its original position</td><td>a wrestler on all fours; a rugby front row in a crouched, wide stance</td></tr>
<tr><td><b>Unstable</b></td><td>a small displacement lowers the COM and the body topples</td><td>a sprinter in the “set” position; a gymnast in a handstand; a diver balancing on the toes</td></tr>
<tr><td><b>Neutral</b></td><td>the COM stays at the same height; the body stays in its new position</td><td>a ball rolling on flat ground; a swimmer floating</td></tr></table></div>` },
    { h: 'Factors affecting stability', html: `
[[d:stability]]
<ul><li><b>Size of the base of support</b> — the area enclosed by the points of contact with the ground. Wider = more stable (a wide stance in judo; a three-point stance).</li>
<li><b>Height of the centre of mass</b> — lower = more stable (bending the knees before a tackle).</li>
<li><b>Position of the line of gravity</b> — the vertical line down from the COM. The more central within the base, the more stable; if it falls outside the base, the body topples. A sprinter in the set position moves the line of gravity to the front edge of the base so they can move off quickly.</li>
<li><b>Mass</b> — greater mass = greater inertia = more stable (sumo, front-row forwards).</li>
<li><b>Number of points of contact</b> and <b>friction</b> with the surface.</li></ul>
<p>Performers <b>maximise</b> stability to resist being moved (rugby scrum, judo defence, a golfer’s stance) and <b>minimise</b> it to move quickly (sprint start, a goalkeeper’s ready position, a swimmer’s dive).</p>` },
    { h: 'Friction', html: `
<p><b>Friction</b> is a force that opposes the motion (or attempted motion) of two surfaces in contact. It acts parallel to the surfaces. $F = μR$, where <b>μ</b> is the <b>coefficient of friction</b> and <b>R</b> is the normal reaction force.</p>
<p><b>Factors affecting the coefficient of friction</b> (how “grippy” the two surfaces are):</p>
<ul><li><b>Surface characteristics</b> — rougher surfaces grip more: spikes, studs, tread, chalk on a gymnast’s hands, grip tape on a racket.</li>
<li><b>Materials</b> of the two surfaces — rubber on a sprung floor, a tyre on tarmac.</li>
<li><b>Temperature</b> — warm racing tyres grip better (F1 tyre warmers); cold ice is slipperier for skaters at very low temperatures.</li>
<li><b>Dry or wet, clean or dirty</b> — water, mud or dust act as lubricants and reduce μ (wet-weather tyres, clean boots).</li></ul>
<p>The friction <b>force</b> also rises with the <b>normal reaction</b> (heavier body or downforce: F1 wings, see 3.10). Friction is sometimes reduced on purpose: waxed skis, smooth curling stones, sweeping the ice in curling.</p>` }
  ],
  eqs: [['F = μ R', 'friction force = coefficient of friction × normal reaction']],
  worked: [
    { q: 'Explain how a sprinter reduces stability in the “set” position and why. (3 marks)', s: ['The hips are raised, raising the centre of mass.', 'The body leans forward so the line of gravity moves to the front edge of the base of support (the hands), creating unstable equilibrium.', 'A small force then makes the sprinter move forward quickly, reducing the time to leave the blocks.'], a: 'Raise COM; line of gravity at the edge of the base; ready to move.' }
  ],
  pitfalls: ['Confusing centre of mass with the line of gravity.', 'Saying a larger base of support is always better — sprinters and goalkeepers want to be able to move.', 'Stating that friction depends on contact area — for sports purposes, give surface type, materials, temperature and dry/wet.', 'Forgetting that the COM can lie outside the body.'],
  cards: [
    ['Centre of mass?', 'The point at which a body’s mass is concentrated and balanced.'], ['Stable equilibrium?', 'Displacement raises the COM; body returns to position.'], ['Unstable equilibrium?', 'Small displacement lowers the COM; body topples.'], ['Neutral equilibrium?', 'COM stays at the same height; body stays in new position.'],
    ['Four factors affecting stability?', 'Base of support, height of COM, line of gravity position, mass (also contact points and friction).'], ['Line of gravity?', 'Vertical line through the COM to the ground.'],
    ['Friction?', 'Force opposing motion between surfaces in contact; F = μR.'], ['Factors affecting μ?', 'Surface roughness/type, materials, temperature, dry/wet/clean.']
  ],
  quiz: [
    { q: 'Which position is most stable?', o: ['Wide base, low centre of mass', 'Narrow base, high centre of mass', 'On one foot', 'Handstand'], x: 'Both factors increase stability.' },
    { q: 'A sprinter in the set position is in…', o: ['unstable equilibrium', 'stable equilibrium', 'neutral equilibrium', 'no equilibrium'], x: 'Ready to fall forward.' },
    { q: 'A body topples when its line of gravity…', o: ['falls outside the base of support', 'is central in the base', 'is vertical', 'passes through the feet'], x: 'No longer supported.' },
    { q: 'Friction force equals…', o: ['μ × normal reaction', 'mass × acceleration', 'force × time', 'mass × velocity'], x: 'F = μR.' },
    { q: 'Which would reduce the coefficient of friction between boot and grass?', o: ['A wet, muddy surface', 'Longer studs', 'Dry grass', 'A rougher sole'], x: 'Water acts as a lubricant.' },
    { q: 'A ball rolling on a flat floor is in…', o: ['neutral equilibrium', 'stable equilibrium', 'unstable equilibrium', 'dynamic imbalance'], x: 'COM height unchanged.' },
    { q: 'Gymnasts use chalk to…', o: ['increase the coefficient of friction', 'reduce friction', 'lower the COM', 'increase mass'], x: 'Dry, better grip.' }
  ],
  exam: [
    { q: 'Define the term centre of mass. [1]', m: 1, ms: ['the point at which the mass of a body is concentrated / balanced (the point through which weight acts)'] },
    { q: 'Explain how a rugby forward makes himself as stable as possible in a scrum. [4]', m: 4, ms: ['wide base of support (feet apart)', 'low centre of mass (bent knees / hips)', 'line of gravity central within the base', 'large mass / many contact points / studs increase friction'] },
    { q: 'Identify three factors that affect the coefficient of friction and give a sporting example of each. [3]', m: 3, ms: ['surface roughness/type — e.g. spikes / studs / chalk', 'temperature — e.g. warm F1 tyres', 'dry or wet/clean — e.g. wet pitch / waxed skis / sweeping in curling'] }
  ],
  sims: ['stability'], gens: ['friction']
});

TOPICS.push({
  id: '3.8', unit: '3', area: 'bio', ref: 'Linear motion', title: 'Linear motion', short: 'Distance and displacement, speed and velocity, acceleration; motion graphs and calculations',
  summary: 'Describe movement precisely. Learn the difference between scalars and vectors, distance and displacement, speed and velocity, calculate acceleration, and interpret distance–time, speed–time and velocity–time graphs for a sprint.',
  spec: [
    'Position, distance, displacement, speed, velocity, acceleration and their application to sport',
    'Definitions of key terms; interpret distance–time, speed–time and velocity–time graphs',
    'Carry out calculations relating to these concepts',
    'Plot, label and interpret graphs'
  ],
  learn: [
    { h: 'Scalars and vectors', html: `
<p>A <b>scalar</b> has size (magnitude) only; a <b>vector</b> has size and direction.</p>
<div class="tbl"><table><tr><th>Quantity</th><th>Definition</th><th>Type</th><th>Unit</th></tr>
<tr><td>Distance</td><td>total path length travelled</td><td>scalar</td><td>m</td></tr>
<tr><td>Displacement</td><td>shortest straight-line distance from start to finish, in a stated direction</td><td>vector</td><td>m</td></tr>
<tr><td>Speed</td><td>$"speed" = "distance"/"time"$</td><td>scalar</td><td>m/s</td></tr>
<tr><td>Velocity</td><td>$"velocity" = "displacement"/"time"$</td><td>vector</td><td>m/s</td></tr>
<tr><td>Acceleration</td><td>rate of change of velocity: $a = (v − u)/t$</td><td>vector</td><td>m/s²</td></tr></table></div>
<p>A 400 m runner on a standard track runs a <b>distance</b> of 400 m but finishes where they started, so their <b>displacement is 0 m</b> and their average velocity is 0 m/s — even though their average speed might be 8 m/s. A swimmer doing 2 lengths of a 25 m pool: distance 50 m, displacement 0 m.</p>` },
    { h: 'Motion graphs', html: `
[[d:motiongraphs]]
<div class="tbl"><table><tr><th>Graph</th><th>Gradient means</th><th>Area means</th><th>Shapes</th></tr>
<tr><td>Distance–time</td><td>speed</td><td>—</td><td>straight rising line = constant speed; steeper = faster; horizontal = stationary; curve upward = accelerating</td></tr>
<tr><td>Speed/velocity–time</td><td>acceleration</td><td>distance (displacement)</td><td>horizontal = constant velocity; rising = accelerating; falling = decelerating; below the axis (velocity) = moving in the opposite direction</td></tr></table></div>
<p><b>A 100 m sprint velocity–time graph:</b> rapid acceleration for the first 30–40 m (steep gradient), maximum velocity (≈ 11–12 m/s for elite men) at about 50–70 m, then a slight deceleration as fatigue sets in (PC depletion). A team-game player’s graph shows repeated accelerations and decelerations, and negative velocity when running back.</p>` }
  ],
  eqs: [['"speed" = "distance"/"time"', 'm/s'], ['"velocity" = "displacement"/"time"', 'm/s, with direction'], ['a = (v − u)/t', 'acceleration (m/s²): final velocity − initial velocity ÷ time']],
  worked: [
    { q: 'A sprinter goes from 0 to 10.8 m/s in 4.5 s. Calculate her average acceleration. (2 marks)', s: ['$a = (v − u)/t = (10.8 − 0)/4.5$', '<b>= 2.4 m/s²</b>.'], a: '2.4 m/s².' },
    { q: 'A swimmer completes a 200 m race in a 50 m pool in 2 min 5 s. Calculate her average speed and average velocity. (3 marks)', s: ['Time = 125 s; distance = 200 m → average speed = 200 ÷ 125 = <b>1.6 m/s</b>.', '4 lengths of a 50 m pool → she finishes at the start: displacement = 0 m.', 'Average velocity = 0 ÷ 125 = <b>0 m/s</b>.'], a: '1.6 m/s; 0 m/s.' }
  ],
  pitfalls: ['Using “speed” and “velocity” interchangeably — velocity needs a direction.', 'Forgetting to convert minutes to seconds before calculating.', 'Reading distance from the gradient of a velocity–time graph — distance is the area.', 'Stating acceleration without units (m/s²) or sign.'],
  cards: [
    ['Scalar vs vector?', 'Scalar: size only. Vector: size and direction.'], ['Distance?', 'Total path length travelled (scalar).'], ['Displacement?', 'Straight-line distance from start to finish in a direction (vector).'], ['Speed?', 'Distance ÷ time (m/s).'], ['Velocity?', 'Displacement ÷ time (m/s, vector).'],
    ['Acceleration?', '(v − u) ÷ t (m/s²).'], ['Gradient of a distance–time graph?', 'Speed.'], ['Gradient of a velocity–time graph?', 'Acceleration.'], ['Area under a velocity–time graph?', 'Displacement (distance).'], ['Displacement after a 400 m lap?', '0 m.']
  ],
  quiz: [
    { q: 'Which is a vector?', o: ['Velocity', 'Speed', 'Distance', 'Time'], x: 'Has direction.' },
    { q: 'An athlete runs 800 m (two laps) in 100 s. Average speed is…', o: ['8 m/s', '0 m/s', '80 m/s', '0.125 m/s'], x: '800 ÷ 100.' },
    { q: 'For the same 800 m race, average velocity is…', o: ['0 m/s', '8 m/s', '16 m/s', '4 m/s'], x: 'Displacement is zero.' },
    { q: 'The gradient of a velocity–time graph gives…', o: ['acceleration', 'distance', 'speed', 'momentum'], x: 'Change in velocity per second.' },
    { q: 'From 2 m/s to 8 m/s in 3 s the acceleration is…', o: ['2 m/s²', '3.3 m/s²', '6 m/s²', '18 m/s²'], x: '(8 − 2) ÷ 3.' },
    { q: 'A horizontal line on a distance–time graph shows…', o: ['the performer is stationary', 'constant speed', 'acceleration', 'deceleration'], x: 'Distance not changing.' },
    { q: 'The area under a speed–time graph gives…', o: ['distance', 'acceleration', 'force', 'velocity'], x: 'Speed × time.' }
  ],
  exam: [
    { q: 'Explain the difference between distance and displacement using a sporting example. [2]', m: 2, ms: ['distance: total path length (scalar); displacement: straight-line distance start to finish with direction (vector)', 'e.g. 400 m race: distance 400 m, displacement 0 m'] },
    { q: 'The table shows split times for a 100 m sprinter: 0 m 0 s; 20 m 3.0 s; 40 m 5.0 s; 60 m 6.8 s; 80 m 8.6 s; 100 m 10.5 s.', parts: [
      { q: 'Calculate the average speed over the whole race. [1]', m: 1, ms: ['100 ÷ 10.5 = 9.52 m/s'] },
      { q: 'Calculate the average speed between 40 m and 60 m and between 80 m and 100 m. [2]', m: 2, ms: ['40–60 m: 20 ÷ 1.8 = 11.1 m/s', '80–100 m: 20 ÷ 1.9 = 10.5 m/s'] },
      { q: 'Plot/sketch the velocity–time graph for this race and explain its shape with reference to energy systems. [5]', m: 5, ms: ['axes labelled velocity (m/s) and time (s)', 'steep rise (acceleration phase) in first ~4–5 s', 'peak/plateau around 11 m/s mid-race (60 m)', 'slight fall at the end — deceleration', 'fatigue as PC stores deplete (ATP-PC ~8–10 s) / inability to maintain force'] }
    ], tag: 'graph' }
  ],
  sims: ['sprint'], gens: ['speed', 'accel', 'splits', 'displace']
});

TOPICS.push({
  id: '3.9', unit: '3', area: 'bio', ref: 'Linear motion', title: 'Angular motion', short: 'Angular displacement, velocity and acceleration; moment of inertia; conservation of angular momentum',
  summary: 'Divers, gymnasts, skaters and throwers all rotate. Learn angular displacement, velocity and acceleration, moment of inertia and how it depends on mass and its distribution (radius of gyration), and how the conservation of angular momentum lets a performer spin faster or slower by changing body shape — with calculations.',
  spec: [
    'Angular displacement, angular velocity and angular acceleration',
    'Moment of inertia: factors affecting it — mass and distribution of mass about the axis of rotation (radius of gyration)',
    'Conservation of angular momentum; the rate of spin and its links to body shape',
    'Definitions of key terms and calculations involving spinning subjects'
  ],
  learn: [
    { h: 'Angular quantities', html: `
<p>Angular motion is movement around an axis (see 1.3), caused by an <b>eccentric force</b> (a force applied off-centre, creating a <b>torque</b>).</p>
<div class="tbl"><table><tr><th>Quantity</th><th>Definition</th><th>Unit</th></tr>
<tr><td>Angular displacement (θ)</td><td>the smallest change in angle between the start and finish position</td><td>degrees or radians (1 rad ≈ 57.3°; 360° = 2π rad)</td></tr>
<tr><td>Angular velocity (ω)</td><td>$ω = θ/t$ — rate of change of angular displacement</td><td>rad/s (or °/s)</td></tr>
<tr><td>Angular acceleration (α)</td><td>$α = (ω_2 − ω_1)/t$ — rate of change of angular velocity</td><td>rad/s²</td></tr></table></div>
<p>A gymnast who completes 1.5 somersaults has turned 540° (3π rad) — but their angular displacement from the start is 180° (π rad), since only the difference in position counts.</p>` },
    { h: 'Moment of inertia', html: `
<p>The <b>moment of inertia (I)</b> is a body’s resistance to change in its state of angular motion (kg m²) — the rotational equivalent of mass (inertia). $I = Σ m r^2$</p>
<p>It depends on:</p>
<ul><li><b>Mass</b> — more mass → greater I.</li>
<li><b>Distribution of mass about the axis</b> — the further the mass is from the axis, the greater I. Because r is squared, distribution has a large effect. The <b>radius of gyration</b> is the effective distance of the body’s mass from the axis ($I = m k^2$).</li></ul>
[[d:inertia]]
<p>A diver in a <b>tuck</b> has a small I (mass close to the axis); in a <b>straight/layout</b> position a large I (mass spread out). A sprinter flexes the knee tightly in the recovery phase to reduce the leg’s I, so it swings through faster.</p>` },
    { h: 'Angular momentum and its conservation', html: `
<p>$L = I × ω$ — <b>angular momentum</b> is the quantity of angular motion (kg m²/s).</p>
<p><b>Conservation of angular momentum:</b> angular momentum remains constant unless an external torque acts. In the air (flight), no external torque acts (ignoring air resistance), so <b>L is constant</b>. Therefore <b>I and ω are inversely proportional</b>:</p>
<ul><li>tucking reduces I → ω <b>increases</b> (spins faster);</li><li>opening out increases I → ω <b>decreases</b> (spin slows) — to control entry into the water or a landing.</li></ul>
[[d:angmom]]
<p>The amount of angular momentum is generated <b>at take-off</b> (from the board, floor or ice), where external forces can act; after that the performer can only redistribute it. An ice skater in a spin pulls the arms in to spin faster and spreads them out to slow down.</p>` }
  ],
  eqs: [['ω = θ/t', 'angular velocity (rad/s)'], ['α = (ω_2 − ω_1)/t', 'angular acceleration (rad/s²)'], ['I = Σ m r^2', 'moment of inertia (kg m²)'], ['L = I ω', 'angular momentum (kg m²/s)'], ['I_1 ω_1 = I_2 ω_2', 'conservation of angular momentum in flight']],
  worked: [
    { q: 'A diver has a moment of inertia of 15 kg m² in a straight position and 3.5 kg m² in a tuck. Leaving the board straight, her angular velocity is 4 rad/s. Calculate her angular velocity in the tuck. (3 marks)', s: ['Angular momentum is conserved in flight: $L = Iω = 15 × 4 = 60$ kg m²/s.', 'In the tuck: $ω = L/I = 60 ÷ 3.5$', '<b>≈ 17.1 rad/s</b> — more than four times faster.'], a: '≈ 17.1 rad/s.' },
    { q: 'A discus thrower turns through 1.5 revolutions in 1.2 s. Calculate the average angular velocity in rad/s. (2 marks)', s: ['1.5 revolutions = 1.5 × 2π = 9.42 rad.', '$ω = 9.42 ÷ 1.2 ≈$ <b>7.85 rad/s</b>.'], a: '≈ 7.9 rad/s.' }
  ],
  pitfalls: ['Saying angular momentum increases when a performer tucks — L stays the same; ω increases.', 'Forgetting that distribution of mass matters more than mass because r is squared.', 'Believing a performer can create more spin in the air — L is fixed at take-off.', 'Mixing degrees and radians in calculations.'],
  cards: [
    ['Angular velocity?', 'Rate of change of angular displacement; ω = θ ÷ t (rad/s).'], ['Angular acceleration?', 'Rate of change of angular velocity (rad/s²).'], ['Moment of inertia?', 'Resistance to change in angular motion; I = Σmr² (kg m²).'],
    ['Two factors affecting moment of inertia?', 'Mass and distribution of mass about the axis.'], ['Radius of gyration?', 'Effective distance of a body’s mass from the axis of rotation.'], ['Angular momentum?', 'L = Iω (kg m²/s).'],
    ['Conservation of angular momentum?', 'L stays constant unless an external torque acts — in flight, I↓ → ω↑.'], ['Why do divers tuck?', 'Smaller I → greater ω → more somersaults.'], ['Why open out before entry?', 'Larger I → smaller ω → controlled entry.'], ['1 revolution in radians?', '2π rad (≈ 6.28 rad).']
  ],
  quiz: [
    { q: 'When a diver changes from a straight position into a tuck, her angular velocity…', o: ['increases', 'decreases', 'stays the same', 'becomes zero'], x: 'I decreases, L constant.' },
    { q: 'Moment of inertia depends on mass and…', o: ['the distribution of mass about the axis', 'velocity', 'gravity', 'friction'], x: 'Radius of gyration.' },
    { q: 'L = 40 kg m²/s and I = 5 kg m². Angular velocity is…', o: ['8 rad/s', '200 rad/s', '45 rad/s', '0.125 rad/s'], x: 'ω = L ÷ I.' },
    { q: 'The unit of moment of inertia is…', o: ['kg m²', 'kg m/s', 'rad/s', 'N s'], x: 'Mass × distance².' },
    { q: 'Angular momentum during flight is…', o: ['constant', 'always increasing', 'always decreasing', 'zero'], x: 'No external torque.' },
    { q: 'A sprinter flexes the knee in the recovery phase to…', o: ['reduce the leg’s moment of inertia', 'increase angular momentum from the air', 'increase mass', 'reduce ground reaction'], x: 'Leg swings through faster.' },
    { q: 'Two revolutions equal…', o: ['4π rad', '2π rad', 'π rad', '720 rad'], x: '2 × 2π.' }
  ],
  exam: [
    { q: 'Define moment of inertia and state two factors that affect it. [3]', m: 3, ms: ['resistance of a body to change its state of angular motion / rotation', 'mass of the body', 'distribution of mass about the axis of rotation / radius of gyration'] },
    { q: 'A trampolinist performs a straight back somersault then a tucked back somersault.', parts: [
      { q: 'State the law of conservation of angular momentum. [1]', m: 1, ms: ['angular momentum remains constant unless an external torque/eccentric force acts'] },
      { q: 'Her moment of inertia is 12 kg m² straight and 4 kg m² tucked. If her angular velocity is 5 rad/s straight, calculate her angular velocity in the tuck. [2]', m: 2, ms: ['L = 12 × 5 = 60 kg m²/s', 'ω = 60 ÷ 4 = 15 rad/s'] },
      { q: 'Explain how she controls her landing using the same principle. [3]', m: 3, ms: ['opens out / extends body before landing', 'increases moment of inertia', 'angular velocity decreases (L constant) → controlled, stable landing'] }
    ], tag: 'calc' },
    { q: 'Using sporting examples, discuss how performers manipulate their moment of inertia to improve performance. [6]', m: 6, lv: true, ms: ['I depends on mass and distribution about the axis; L = Iω conserved in flight', 'diver/gymnast tucks → I↓ → ω↑ → more rotations', 'opens out before entry/landing → I↑ → ω↓ → control', 'ice skater arms in → faster spin; arms out → slow', 'sprinter’s recovery leg flexed → I↓ → faster leg swing', 'L generated at take-off; judgement on importance to scoring/efficiency'] }
  ],
  sims: ['spin'], gens: ['angvel', 'angacc', 'angmom', 'inertia1', 'rpm']
});

TOPICS.push({
  id: '3.10', unit: '3', area: 'bio', ref: 'Projectile motion', title: 'Projectile motion, lift and spin', short: 'Release velocity, angle and height; air resistance; Bernoulli lift; Magnus effect',
  summary: 'Why does a shot fly in a parabola but a shuttlecock does not, and how does a free kick bend? Learn the factors affecting the flight of a projectile, free-body diagrams in flight, the Bernoulli principle and lift (discus, javelin, F1 downforce), and the Magnus effect of topspin, backspin and sidespin on flight and bounce.',
  spec: [
    'Gravity and weight; factors affecting flight: velocity, height of release and air resistance',
    'Newton’s laws and the flight path of an object following a parabolic arc',
    'Lift forces: the Bernoulli principle — upward lift (discus) and downward lift (Formula 1 cornering); boundary layer',
    'Spin: Magnus effect, pressure differentials and Magnus force; topspin, backspin and sidespin/swerve and their effect on flight and bounce'
  ],
  learn: [
    { h: 'Factors affecting horizontal distance', html: `
<ul><li><b>Speed (velocity) of release</b> — the most important factor: the faster the release, the further the projectile travels (distance increases with the square of speed).</li>
<li><b>Angle of release</b> — when release and landing heights are equal, <b>45°</b> gives the maximum distance. When release height is <b>above</b> landing height (shot put), the optimum is <b>less than 45°</b> (about 38–42°). When the landing is above the release, the optimum is more than 45°. Long jumpers take off at about 20–22° because they cannot keep their speed at steeper angles.</li>
<li><b>Height of release</b> — the higher the release, the further the flight (tall shot putters release above head height).</li>
<li><b>Air resistance</b> and aerodynamic lift.</li></ul>
[[d:projectile]]` },
    { h: 'Parabolic and non-parabolic flight', html: `
<p>In flight, the forces are <b>weight</b> (down) and <b>air resistance</b> (opposite to the direction of motion). If weight is much larger than air resistance (a shot, a hammer, a long jumper) the path is a <b>symmetrical parabola</b>. If air resistance is large relative to weight (a shuttlecock, a table-tennis ball with spin) the path is <b>non-parabolic</b> — it drops steeply at the end.</p>
<p><b>Free-body diagrams</b>: draw the weight arrow from the centre of mass straight down; air resistance opposite to the direction of travel, sized relative to weight. The resultant force determines the flight.</p>` },
    { h: 'Lift and the Bernoulli principle', html: `
[[d:bernoulli]]
<p><b>Bernoulli principle:</b> the faster a fluid (air) flows, the lower the pressure it exerts. A discus or javelin held at a small <b>angle of attack</b> acts like an <b>aerofoil</b>: air travelling over the top has further to go and moves faster, so pressure above is lower than below. The <b>pressure differential</b> creates an upward <b>lift force</b>, keeping the discus in the air longer and increasing distance. Too great an angle of attack increases drag and the object “stalls”.</p>
<p><b>Downward lift:</b> Formula 1 cars and some racing bikes have inverted aerofoils (wings/spoilers). The air under the wing moves faster → lower pressure below → a <b>downforce</b> that pushes the tyres into the track, increasing the normal reaction and friction so the car can corner faster without skidding.</p>` },
    { h: 'Spin and the Magnus effect', html: `
[[d:magnus]]
<p>A spinning ball drags a thin <b>boundary layer</b> of air round with it. On one side the ball’s surface moves <b>in the same direction</b> as the air flowing past it (air speeds up → <b>lower pressure</b>); on the other side it moves <b>against</b> the airflow (air slows → <b>higher pressure</b>). The pressure differential creates the <b>Magnus force</b> from high to low pressure, and the ball swerves in that direction.</p>
<div class="tbl"><table><tr><th>Spin</th><th>Magnus force</th><th>Flight</th><th>Bounce</th><th>Example</th></tr>
<tr><td><b>Topspin</b> (top of ball rotates forwards)</td><td>downwards</td><td>dips sharply — shorter flight</td><td>skids on, lower and faster; bounces further forward</td><td>tennis topspin forehand, table-tennis loop</td></tr>
<tr><td><b>Backspin</b> (bottom rotates forwards)</td><td>upwards (lift)</td><td>floats — longer flight</td><td>checks, bounces higher and slows or stops</td><td>golf drive and approach shots, tennis slice, snooker screw shot</td></tr>
<tr><td><b>Sidespin</b></td><td>sideways</td><td>curves (hook or slice; swerve)</td><td>kicks sideways</td><td>a curling free kick, a spin bowler’s delivery</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain how topspin affects the flight of a tennis ball. (4 marks)', s: ['Topspin: the top of the ball rotates forwards, against the oncoming airflow; the bottom rotates with it.', 'Air above the ball slows → higher pressure; air below speeds up → lower pressure (Bernoulli).', 'The pressure differential produces a downward Magnus force.', 'The ball dips sharply, so it can be hit hard yet land in the court, and it skids on quickly after the bounce.'], a: 'Downward Magnus force → dipping flight, fast low bounce.' }
  ],
  pitfalls: ['Saying 45° is always optimal — only when release and landing heights are equal.', 'Getting the pressure sides of the Magnus effect the wrong way round — the force goes from high to low pressure.', 'Forgetting to draw air resistance opposite to the direction of motion (not just horizontal).', 'Saying Bernoulli’s principle creates lift because air “pushes up” — explain the pressure differential.', 'Ignoring release height and speed when explaining distance.'],
  cards: [
    ['Three factors affecting projectile distance?', 'Speed, angle and height of release (plus air resistance/lift).'], ['Most important factor?', 'Speed of release.'], ['Optimum angle with equal release and landing heights?', '45°.'], ['Optimum for shot put?', 'Less than 45° (≈ 38–42°) because release is above landing.'],
    ['Parabolic flight?', 'Symmetrical path when weight dominates air resistance (shot put).'], ['Non-parabolic flight?', 'When air resistance is large relative to weight (shuttlecock).'],
    ['Bernoulli principle?', 'Faster-moving air exerts lower pressure.'], ['How does a discus gain lift?', 'Angle of attack → faster air over top → lower pressure above → upward lift.'], ['Downward lift example?', 'F1 inverted wings → downforce → more friction for cornering.'],
    ['Magnus force?', 'Force from high to low pressure caused by a spinning ball’s boundary layer.'], ['Topspin effect?', 'Downward force: dips in flight; fast, low bounce.'], ['Backspin effect?', 'Upward force: longer flight; ball checks on bounce.'], ['Sidespin effect?', 'Ball curves (swerve, hook, slice).']
  ],
  quiz: [
    { q: 'The most important factor for the horizontal distance of a projectile is…', o: ['speed of release', 'mass of the projectile', 'colour', 'angle of attack'], x: 'Distance rises with speed².' },
    { q: 'A shot putter releases above landing height, so the optimum angle is…', o: ['less than 45°', 'exactly 45°', 'more than 45°', '90°'], x: 'About 38–42°.' },
    { q: 'A shuttlecock follows a non-parabolic path because…', o: ['air resistance is large compared with its weight', 'it has no weight', 'it spins', 'gravity is weaker indoors'], x: 'Drag dominates.' },
    { q: 'Bernoulli’s principle states that faster-moving air…', o: ['exerts lower pressure', 'exerts higher pressure', 'has no effect', 'increases weight'], x: 'Pressure differential.' },
    { q: 'Backspin on a golf ball produces…', o: ['an upward Magnus force and a longer flight', 'a downward force and shorter flight', 'no force', 'sideways curve'], x: 'Lift.' },
    { q: 'Topspin makes a tennis ball…', o: ['dip in flight and skid on after bouncing', 'float and stop on bouncing', 'curve sideways', 'fly in a perfect parabola'], x: 'Downward Magnus force.' },
    { q: 'An F1 car’s rear wing creates…', o: ['downforce, increasing grip', 'upward lift', 'more drag only', 'backspin'], x: 'Inverted aerofoil.' },
    { q: 'The Magnus force acts…', o: ['from high pressure to low pressure', 'from low pressure to high pressure', 'in the direction of spin', 'straight down'], x: 'Pressure differential.' }
  ],
  exam: [
    { q: 'Identify three factors that affect the horizontal distance travelled by a shot. [3]', m: 3, ms: ['speed / velocity of release', 'angle of release', 'height of release (also air resistance)'] },
    { q: 'Explain, using the Bernoulli principle, how a discus gains lift. [4]', m: 4, ms: ['discus acts as an aerofoil / thrown at an angle of attack', 'air travels further/faster over the top surface', 'faster air → lower pressure above than below (pressure differential)', 'creates upward lift force → longer flight / greater distance'] },
    { q: 'A footballer curls a free kick around a defensive wall.', parts: [
      { q: 'Draw a diagram to show the airflow, pressure and Magnus force on a ball with sidespin. [3]', m: 3, ms: ['ball with direction of spin shown', 'airflow faster on side moving with the air → low pressure; slower on other side → high pressure', 'Magnus force arrow from high to low pressure → curved path'] },
      { q: 'Explain the effect of backspin on the flight and bounce of a ball in golf. [4]', m: 4, ms: ['top of the ball moves with the airflow → faster air, lower pressure above; bottom moves against it → higher pressure below', 'upward Magnus force / lift', 'longer flight / floats', 'on landing ball checks / stops quickly / bounces up'] }
    ] },
    { q: 'Discuss how the forces acting on a projectile in flight determine its flight path, comparing a shot put and a badminton shuttle. [6]', m: 6, lv: true, ms: ['forces in flight: weight (down, from COM) and air resistance (opposite to motion)', 'shot: large mass → weight dominates → air resistance negligible', '→ parabolic, symmetrical flight path', 'shuttle: low mass, large surface area/feathers → air resistance large relative to weight', '→ non-parabolic; decelerates rapidly and drops steeply', 'free-body diagrams / resultant force; release speed, angle and height also matter; judgement'] }
  ],
  sims: ['projectile', 'magnus', 'bernoulli'], gens: ['projrange']
});

TOPICS.push({
  id: '3.11', unit: '3', area: 'bio', ref: 'Fluid mechanics', title: 'Fluid mechanics: drag and streamlining', short: 'Fluid friction; factors affecting drag; laminar and turbulent flow; cycling and swimming',
  summary: 'Air and water resist motion. Learn what affects fluid resistance (drag) — velocity, frontal cross-sectional area, shape and surface — the difference between laminar and turbulent flow, and how cyclists and swimmers streamline to reduce drag.',
  spec: [
    'Fluid friction: factors affecting fluid resistance — drag',
    'Air resistance, turbulent flow, drag, streamlining and the importance of laminar flow',
    'Factors that affect streamlining (surface area, surface effects and speed) and their application to cycling and swimming',
    'Developments in cycling and swimming to reduce air resistance'
  ],
  learn: [
    { h: 'Drag', html: `
<p><b>Drag</b> (fluid friction) is a force that opposes the motion of a body through a fluid — <b>air resistance</b> in air, water resistance in water. Water is about 800 times denser than air, so drag is a far bigger factor in swimming.</p>
<div class="tbl"><table><tr><th>Factor</th><th>Effect</th><th>Example</th></tr>
<tr><td><b>Velocity</b></td><td>drag rises steeply with speed (roughly ∝ v²): double the speed → about four times the drag</td><td>sprint cyclists; downhill skiers</td></tr>
<tr><td><b>Frontal cross-sectional area</b></td><td>larger area facing the flow → more drag</td><td>tucked ski position; cyclist’s low crouch</td></tr>
<tr><td><b>Shape (streamlining)</b></td><td>teardrop/aerofoil shapes allow smooth flow and a small wake</td><td>aero helmets, streamlined bikes</td></tr>
<tr><td><b>Surface characteristics</b></td><td>smooth surfaces reduce skin friction</td><td>shaved legs, Lycra skinsuits, swim caps</td></tr>
<tr><td><b>Density of the fluid</b></td><td>denser fluid → more drag</td><td>water vs air; thinner air at altitude</td></tr></table></div>
<p>Drag matters most when the body is <b>light</b> relative to the drag force or moving <b>fast</b>.</p>` },
    { h: 'Laminar and turbulent flow', html: `
[[d:flow]]
<p><b>Laminar flow</b> — the fluid moves in smooth, parallel layers around the body with little mixing. It produces a small wake and <b>low drag</b>.</p>
<p><b>Turbulent flow</b> — the flow separates from the body and forms swirling eddies. This creates a low-pressure <b>wake</b> behind the body, so there is higher pressure in front than behind: <b>high drag</b>.</p>
<p><b>Streamlining</b> means shaping the body or equipment so that the flow stays laminar as long as possible and the wake is small.</p>` },
    { h: 'Cycling and swimming', html: `
<div class="grid g2"><div class="box"><b class="lbl">Cycling</b><ul><li>low, crouched position with the back flat and arms tucked (aero bars) → smaller frontal area</li><li>teardrop-shaped aero helmets, skinsuits, overshoes, shaved legs</li><li>disc and deep-rim wheels, aerofoil tubing, carbon frames</li><li><b>drafting / slipstreaming</b> in a peloton or team pursuit — riders behind sit in the leader’s low-pressure wake, saving up to about 30% of effort</li><li>velodromes kept warm (less dense air)</li></ul></div>
<div class="box"><b class="lbl">Swimming</b><ul><li>horizontal, streamlined body position; head in line; arms extended in a tight glide after starts and turns</li><li>underwater dolphin kick after starts and turns (less wave drag underwater)</li><li>shaving body hair; caps and goggles; smooth tech suits (full-body polyurethane suits were banned in 2010 because they gave too great an advantage)</li><li>anti-wave lane ropes and deeper pools reduce turbulence</li></ul></div></div>` }
  ],
  eqs: [['"drag" ∝ v^2', 'drag rises roughly with the square of velocity']],
  worked: [
    { q: 'Explain why a track cyclist adopts a low position and wears a teardrop helmet. (4 marks)', s: ['Drag increases with velocity and track cyclists ride at high speed, so air resistance is the main force opposing them.', 'A low, crouched position reduces the frontal cross-sectional area facing the air.', 'A teardrop helmet is streamlined, so air flows smoothly (laminar flow) over the head and back.', 'This reduces the turbulent wake behind the rider, lowering drag so a higher speed is possible for the same power.'], a: 'Smaller frontal area + laminar flow → less drag.' }
  ],
  pitfalls: ['Saying drag is the same as friction with the ground — it is fluid friction.', 'Describing streamlining only as “aerodynamic” without explaining laminar flow and the wake.', 'Forgetting that velocity has the biggest effect on drag.', 'Ignoring the fact that water is much denser than air.'],
  cards: [
    ['Drag?', 'A force opposing motion through a fluid (air or water resistance).'], ['Four factors affecting drag?', 'Velocity, frontal cross-sectional area, shape/streamlining, surface characteristics (and fluid density).'], ['Effect of doubling velocity on drag?', 'About four times the drag (∝ v²).'],
    ['Laminar flow?', 'Smooth, parallel layers of fluid; small wake; low drag.'], ['Turbulent flow?', 'Separated, swirling flow; large low-pressure wake; high drag.'], ['Streamlining?', 'Shaping the body/equipment to keep flow laminar and reduce drag.'],
    ['Drafting?', 'Riding in another’s low-pressure wake to reduce drag.'], ['Swimming streamlining?', 'Horizontal body, head in line, tight glide, shaving, caps, suits.']
  ],
  quiz: [
    { q: 'Which factor has the greatest effect on air resistance for a cyclist?', o: ['Velocity', 'Colour of kit', 'Mass of the bike', 'Tyre pressure'], x: 'Drag ∝ v².' },
    { q: 'Laminar flow is…', o: ['smooth, parallel layers of fluid', 'swirling eddies behind a body', 'flow with high drag', 'the same as turbulence'], x: 'Low drag.' },
    { q: 'A turbulent wake behind a body causes…', o: ['a low-pressure region that increases drag', 'lift', 'less drag', 'more friction with the ground'], x: 'Pressure difference front to back.' },
    { q: 'Riding behind another cyclist to save energy is…', o: ['drafting', 'tapering', 'stacking', 'loafing'], x: 'Slipstreaming.' },
    { q: 'Full-body polyurethane swimsuits were banned because they…', o: ['reduced drag too much, giving an unfair advantage', 'increased drag', 'were too cheap', 'were too heavy'], x: 'Banned in 2010.' },
    { q: 'A crouched ski position reduces drag by…', o: ['reducing frontal cross-sectional area', 'increasing speed', 'increasing mass', 'increasing turbulence'], x: 'Less area facing the air.' }
  ],
  exam: [
    { q: 'Explain the difference between laminar and turbulent flow. [2]', m: 2, ms: ['laminar: smooth, parallel layers of fluid / low drag', 'turbulent: irregular, swirling flow / eddies / large wake → high drag'] },
    { q: 'Identify four factors that affect the drag acting on a swimmer and explain how the swimmer can reduce drag. [5]', m: 5, ms: ['velocity', 'frontal cross-sectional area', 'shape / streamlining', 'surface characteristics (and fluid density)', 'reduce: horizontal body position / tight glide / head in line / shaved body / cap / suits / underwater kick'] },
    { q: 'Evaluate developments in cycling designed to reduce air resistance. [6]', m: 6, lv: true, ms: ['drag rises with velocity² — critical at racing speeds', 'aero position / aero bars → smaller frontal area', 'teardrop helmets, skinsuits → streamlining, laminar flow, smaller wake', 'disc/deep-rim wheels and aerofoil frames', 'drafting in team pursuit/peloton — up to ~30% saving', 'limits: cost, regulations (UCI rules), comfort/power output trade-off; judgement'] }
  ],
  sims: ['drag'], gens: ['dragcalc']
});
