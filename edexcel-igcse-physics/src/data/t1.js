/* ==========================================================
   TOPIC 1 · FORCES AND MOTION  (g = 10 N/kg throughout, as on Edexcel papers)
   ========================================================== */
TOPICS.push({
  id: '1.1', unit: '1', ref: '1.1–1.5', title: 'Speed and distance–time graphs', short: 'Average speed, distance–time graphs',
  summary: 'Units of motion, average speed, and how to read and draw distance–time graphs — the gradient is the speed. Includes the practical on the motion of everyday objects.',
  spec: [
    '1.1 use the following units: kilogram (kg), metre (m), metre/second (m/s), metre/second² (m/s²), newton (N), second (s) and newton/kilogram (N/kg)',
    '1.2P use the following units: newton metre (Nm), kilogram metre/second (kg m/s)',
    '1.3 plot and explain distance−time graphs',
    '1.4 know and use the relationship between average speed, distance moved and time taken: average speed = distance moved ÷ time taken',
    '1.5 practical: investigate the motion of everyday objects such as toy cars or tennis balls'
  ],
  learn: [
    { h: 'Average speed', html: `
<div class="box def"><b class="lbl">Recall</b><p>$"average speed" = @frac{"distance moved"}{"time taken"}$ &nbsp; $v = @frac{s}{t}$ &nbsp; (m/s = m ÷ s)</p></div>
<p><b>Average</b> speed is the total distance divided by the total time — it ignores speeding up and slowing down along the way. The <b>instantaneous</b> speed is the speed at one moment (what a speedometer shows).</p>
<div class="box tip"><b class="lbl">Convert first</b><p>km → m: × 1000. minutes → s: × 60. hours → s: × 3600. km/h → m/s: ÷ 3.6. Example: 72 km/h = 72 ÷ 3.6 = 20 m/s.</p></div>` },
    { h: 'Distance–time graphs', html: `
[[d:dtgraph]]
<ul><li><b>Gradient = speed.</b> Steeper line → faster.</li><li><b>Horizontal line</b> → stationary (distance not changing).</li><li><b>Straight sloping line</b> → constant speed.</li><li><b>Curve getting steeper</b> → accelerating; <b>curve getting less steep</b> → decelerating.</li></ul>
<p>For a curve, find the speed at an instant by drawing a <b>tangent</b> and measuring its gradient: $"speed" = @frac{Δ"distance"}{Δ"time"}$ using a large triangle.</p>
<p>When you <b>plot</b> a graph: time on the x-axis, sensible scales using at least half the grid, label axes with quantity and unit, plot points with small crosses, and draw a single smooth line or curve of best fit.</p>` },
    { h: 'Practical: motion of everyday objects (1.5)', html: `
<ol><li>Mark distances (e.g. every 0.50 m) along a runway or corridor with a metre rule/tape.</li><li>Release a toy car (or roll a tennis ball) and time it passing each mark — with several stopwatches, a light gate and data logger, or a video with a timer in view.</li><li>Repeat each run 3 times and calculate mean times.</li><li>Plot distance against time; the gradient gives the speed. Average speed = total distance ÷ total time.</li></ol>
<p><b>Improving accuracy:</b> light gates or video analysis remove human reaction time (≈ 0.2 s), which is significant for short times; use longer distances so timing errors are a smaller fraction. Release from the same point each time without pushing.</p>
<p><b>Variables</b> you could investigate: height of the ramp, mass of the car, surface. Control the others.</p>` }
  ],
  eqs: [['v = @frac{s}{t}', 'average speed = distance moved ÷ time taken (recall)']],
  worked: [
    { q: 'A runner completes 5.0 km in 25 minutes. Calculate her average speed in m/s.', s: ['s = 5.0 km = 5000 m; t = 25 × 60 = 1500 s', '$v = @frac{s}{t} = @frac{5000}{1500}$', '$v = 3.3 "m/s"$'], a: '3.3 m/s' },
    { q: 'A distance–time graph for a cyclist is a straight line from (0 s, 0 m) to (40 s, 240 m), then horizontal until 60 s. Describe the motion and find the average speed over 60 s.', s: ['0–40 s: constant speed = gradient = 240 ÷ 40 = 6.0 m/s', '40–60 s: stationary (horizontal line)', 'Average speed = total distance ÷ total time = 240 ÷ 60 = 4.0 m/s'], a: '6.0 m/s then stopped; average 4.0 m/s' }
  ],
  pitfalls: ['Forgetting to convert km and minutes into m and s.', 'Reading the height of a distance–time graph as the speed — speed is the gradient.', 'Calling a horizontal line on a distance–time graph “constant speed” — it means stationary.', 'Using the average speed formula for instantaneous speed on a curve — draw a tangent.'],
  cards: [
    ['Equation for average speed?', '$v = s ÷ t$ — distance moved ÷ time taken.'],
    ['Unit of speed?', 'metre/second (m/s).'],
    ['Gradient of a distance–time graph gives…', 'speed.'],
    ['Horizontal line on a distance–time graph?', 'Object is stationary.'],
    ['Distance–time graph curving upwards?', 'Speed increasing — accelerating.'],
    ['How do you find speed from a curved distance–time graph?', 'Draw a tangent at that time and find its gradient.'],
    ['Convert 90 km/h to m/s.', '90 ÷ 3.6 = 25 m/s.'],
    ['Why use light gates rather than a stopwatch?', 'Removes human reaction time — more accurate for short times.'],
    ['Units for moment and momentum (1.2P)?', 'Moment: newton metre (Nm). Momentum: kilogram metre/second (kg m/s).', 'po']
  ],
  quiz: [
    { q: 'A car travels 150 m in 6.0 s. Its average speed is', o: ['25 m/s', '900 m/s', '0.04 m/s', '156 m/s'], x: '150 ÷ 6.0.' },
    { q: 'On a distance–time graph, a steeper straight line means', o: ['a greater constant speed', 'a greater acceleration', 'the object is stationary', 'a smaller speed'], x: 'Gradient = speed.' },
    { q: 'How far does a train travelling at 40 m/s go in 2.0 minutes?', o: ['4800 m', '80 m', '20 m', '2400 m'], x: '40 × 120 s.' },
    { q: 'A horizontal line on a distance–time graph shows the object is', o: ['stationary', 'moving at constant speed', 'accelerating', 'decelerating'], x: 'Distance does not change.' },
    { q: 'The unit of momentum is', o: ['kg m/s', 'Nm', 'N/kg', 'm/s²'], x: 'p = mv.', po: 1 },
    { q: 'Which change would most improve the accuracy of timing a toy car over 0.5 m?', o: ['Use light gates and a data logger', 'Use a longer stopwatch', 'Time only one run', 'Use a heavier car'], x: 'Removes reaction time.' },
    { q: '54 km/h in m/s is', o: ['15 m/s', '54 m/s', '194 m/s', '0.9 m/s'], x: '54 ÷ 3.6.' },
    { q: 'A distance–time graph that curves and becomes less steep shows', o: ['deceleration', 'acceleration', 'constant speed', 'stationary'], x: 'Gradient decreasing.' }
  ],
  exam: [
    { q: 'A student investigates how the height of a ramp affects the average speed of a toy car travelling 1.20 m along the floor after leaving the ramp.', tag: 'prac', parts: [
      { q: 'State the independent variable and one control variable.', m: 2, ms: ['independent: height of the ramp', 'control: e.g. same car / same distance / same surface / release from the same point without pushing'] },
      { q: 'Describe how the student should measure the average speed of the car.', m: 3, ms: ['mark start and end points 1.20 m apart and measure with a metre rule/tape', 'time the car between the marks with a stopwatch / light gates', 'average speed = distance ÷ time; repeat and find a mean time'] },
      { q: 'The student’s mean time is 0.80 s. Calculate the average speed.', m: 2, ms: ['v = 1.20 ÷ 0.80', '= 1.5 m/s'] },
      { q: 'Explain why timing with light gates would give a more accurate result than a hand-operated stopwatch.', m: 2, ms: ['human reaction time (≈ 0.2 s) is large compared with 0.80 s', 'light gates start/stop automatically / reduce random error'] }
    ] },
    { q: 'The graph shows a journey: 0–100 s straight line from 0 to 1500 m; 100–160 s horizontal; 160–260 s straight line from 1500 m to 2500 m.', tag: 'graph', parts: [
      { q: 'Calculate the speed during the first 100 s.', m: 2, ms: ['1500 ÷ 100', '= 15 m/s'] },
      { q: 'Describe the motion between 100 s and 160 s.', m: 1, ms: ['stationary / stopped'] },
      { q: 'Calculate the average speed for the whole journey.', m: 3, ms: ['total distance = 2500 m', 'total time = 260 s', 'average speed = 2500 ÷ 260 = 9.6 m/s'] }
    ] },
    { q: 'Explain how to find the speed of an object at a particular time from a curved distance–time graph.', m: 3, ms: ['draw a tangent to the curve at that time', 'draw a large right-angled triangle on the tangent', 'speed = gradient = change in distance ÷ change in time'] }
  ],
  sims: ['motion'], gens: ['svt1', 'svt2']
});

TOPICS.push({
  id: '1.2', unit: '1', ref: '1.6–1.10', title: 'Acceleration and velocity–time graphs', short: 'a = (v − u)/t, v–t graphs, v² = u² + 2as',
  summary: 'Acceleration as the rate of change of velocity; velocity–time graphs, where the gradient is acceleration and the area underneath is the distance travelled; and the equation v² = u² + 2as.',
  spec: [
    '1.6 know and use the relationship between acceleration, change in velocity and time taken: acceleration = change in velocity ÷ time taken, a = (v − u)/t',
    '1.7 plot and explain velocity−time graphs',
    '1.8 determine acceleration from the gradient of a velocity−time graph',
    '1.9 determine the distance travelled from the area between a velocity−time graph and the time axis',
    '1.10 use the relationship between final speed, initial speed, acceleration and distance moved: v² = u² + (2 × a × s)'
  ],
  learn: [
    { h: 'Acceleration', html: `
<div class="box def"><b class="lbl">Recall</b><p>$"acceleration" = @frac{"change in velocity"}{"time taken"}$ &nbsp; $a = @frac{(v - u)}{t}$ &nbsp; (m/s² = m/s ÷ s)</p></div>
<p><b>u</b> = initial velocity, <b>v</b> = final velocity. A <b>negative</b> acceleration is a <b>deceleration</b> (slowing down). An acceleration of 3 m/s² means the velocity increases by 3 m/s every second.</p>
<p><b>Velocity</b> is speed in a given direction — a <b>vector</b>. An object moving in a circle at constant speed is accelerating, because its direction (and so velocity) keeps changing.</p>` },
    { h: 'Velocity–time graphs', html: `
[[d:vtgraph]]
<ul><li><b>Gradient = acceleration.</b> A negative gradient is a deceleration.</li><li><b>Horizontal line</b> = constant velocity (zero acceleration).</li><li><b>Area under the line</b> (between the line and the time axis) = <b>distance travelled</b>. Split into rectangles and triangles; for curves, count squares.</li><li>A curved line = changing acceleration.</li></ul>
<div class="box tip"><b class="lbl">Area of a triangle</b><p>½ × base × height. For a trapezium, ½ × (sum of parallel sides) × width.</p></div>` },
    { h: 'v² = u² + 2as', html: `
<p>For <b>uniform</b> (constant) acceleration, use $v^2 = u^2 + 2as$ when <b>time is not given</b>. (Given on the paper — you must be able to use and rearrange it.)</p>
<p>Rearranged: $a = @frac{v^2 - u^2}{2s}$ and $s = @frac{v^2 - u^2}{2a}$.</p>
<p>Example — an object dropped from rest falls 20 m (a = g = 10 m/s², no air resistance): $v^2 = 0 + 2 × 10 × 20 = 400$, so v = 20 m/s.</p>` }
  ],
  eqs: [['a = @frac{(v - u)}{t}', 'acceleration (recall)'], ['v^2 = u^2 + (2 × a × s)', 'uniform acceleration (given)']],
  worked: [
    { q: 'A car accelerates from 12 m/s to 30 m/s in 6.0 s. Calculate its acceleration.', s: ['$a = @frac{(v - u)}{t} = @frac{(30 - 12)}{6.0}$', '$a = 3.0 "m/s"^2$'], a: '3.0 m/s²' },
    { q: 'A plane needs a take-off speed of 80 m/s and accelerates uniformly from rest at 2.5 m/s². Calculate the minimum length of runway needed.', s: ['$v^2 = u^2 + 2as$ so $s = @frac{v^2 - u^2}{2a}$', '$s = @frac{80^2 - 0}{2 × 2.5} = @frac{6400}{5.0}$', '$s = 1280 "m"$ ≈ 1300 m'], a: '1300 m (1280 m)' },
    { q: 'A velocity–time graph rises uniformly from 0 to 12 m/s in 4.0 s, stays at 12 m/s until 10 s, then falls uniformly to 0 at 16 s. Find the total distance.', s: ['Area 1 (triangle) = ½ × 4 × 12 = 24 m', 'Area 2 (rectangle) = 6 × 12 = 72 m', 'Area 3 (triangle) = ½ × 6 × 12 = 36 m', 'Total = 132 m'], a: '132 m' }
  ],
  pitfalls: ['Mixing up distance–time and velocity–time graphs — always read the axis labels.', 'Forgetting to square u and v in v² = u² + 2as, or forgetting the square root at the end.', 'Using v² = u² + 2as when acceleration is not uniform.', 'Leaving out the minus sign for a deceleration (or reporting “−3 m/s² deceleration”).'],
  cards: [
    ['Equation for acceleration?', '$a = (v − u) ÷ t$'],
    ['Unit of acceleration?', 'm/s²'],
    ['Gradient of a velocity–time graph?', 'Acceleration.'],
    ['Area under a velocity–time graph?', 'Distance travelled.'],
    ['Horizontal line on a v–t graph?', 'Constant velocity (zero acceleration).'],
    ['When do you use v² = u² + 2as?', 'Uniform acceleration when the time is not known/needed.'],
    ['What is deceleration?', 'Negative acceleration — slowing down.'],
    ['Why is velocity a vector?', 'It has magnitude and direction.'],
    ['Speed of an object dropped from 5 m (g = 10)?', '$v^2 = 2 × 10 × 5 = 100$, v = 10 m/s.']
  ],
  quiz: [
    { q: 'A bike goes from 2 m/s to 10 m/s in 4 s. Its acceleration is', o: ['2 m/s²', '3 m/s²', '32 m/s²', '0.5 m/s²'], x: '(10 − 2) ÷ 4.' },
    { q: 'The area under a velocity–time graph represents', o: ['distance travelled', 'acceleration', 'speed', 'force'], x: 'velocity × time.' },
    { q: 'A negative gradient on a velocity–time graph means', o: ['deceleration', 'moving backwards at constant speed', 'stationary', 'constant velocity'], x: 'Velocity decreasing.' },
    { q: 'A car decelerates at 5 m/s² from 20 m/s. How long does it take to stop?', o: ['4 s', '100 s', '0.25 s', '15 s'], x: '20 ÷ 5.' },
    { q: 'A ball dropped from rest reaches 30 m/s. Ignoring air resistance (g = 10 m/s²), it fell', o: ['45 m', '90 m', '3 m', '300 m'], x: 's = v²/2a = 900/20.' },
    { q: 'Which quantity is a vector?', o: ['velocity', 'speed', 'distance', 'time'], x: 'Has direction.' },
    { q: 'A v–t graph is a straight line from 0 to 8 m/s over 4 s. Distance travelled?', o: ['16 m', '32 m', '2 m', '8 m'], x: '½ × 4 × 8.' },
    { q: 'A car accelerates uniformly from 10 m/s to 20 m/s over 75 m. Its acceleration is', o: ['2 m/s²', '4 m/s²', '1 m/s²', '0.13 m/s²'], x: '(400 − 100) ÷ 150.' },
    { q: 'An object moving in a circle at constant speed is', o: ['accelerating', 'in equilibrium', 'decelerating', 'moving at constant velocity'], x: 'Direction changes.' }
  ],
  exam: [
    { q: 'A train starts from rest. It accelerates uniformly to 24 m/s in 60 s, travels at 24 m/s for 120 s, then decelerates uniformly to rest in 40 s.', tag: 'graph', parts: [
      { q: 'Sketch the velocity–time graph for the journey, labelling the key values.', m: 3, ms: ['straight line from origin to 24 m/s at 60 s', 'horizontal at 24 m/s from 60 s to 180 s', 'straight line down to 0 at 220 s; axes labelled with units'] },
      { q: 'Calculate the acceleration in the first 60 s.', m: 2, ms: ['a = 24 ÷ 60', '= 0.40 m/s²'] },
      { q: 'Calculate the total distance travelled.', m: 4, ms: ['½ × 60 × 24 = 720 m', '120 × 24 = 2880 m', '½ × 40 × 24 = 480 m', 'total = 4080 m'] },
      { q: 'Calculate the average speed for the whole journey.', m: 2, ms: ['4080 ÷ 220', '= 18.5 m/s (≈ 19 m/s)'] }
    ] },
    { q: 'A car travelling at 25 m/s brakes with a uniform deceleration of 6.0 m/s².', tag: 'calc', parts: [
      { q: 'Calculate the braking distance.', m: 3, ms: ['s = (v² − u²) ÷ 2a', '= (0 − 625) ÷ (2 × −6.0)', '= 52 m'] },
      { q: 'Calculate the time taken to stop.', m: 2, ms: ['t = (v − u) ÷ a = 25 ÷ 6.0', '= 4.2 s'] },
      { q: 'Explain how the braking distance would change if the car were travelling at 50 m/s with the same deceleration.', m: 2, ms: ['s ∝ u² (for the same deceleration)', 'so the braking distance is four times greater (≈ 210 m)'] }
    ] },
    { q: 'A velocity–time graph for a falling ball is a curve that starts steep and becomes horizontal. Explain what the graph shows about the acceleration of the ball and how you would estimate the distance fallen in the first 3 s.', m: 4, ms: ['gradient decreases so acceleration decreases', 'horizontal part: zero acceleration / terminal velocity', 'distance = area under the graph from 0 to 3 s', 'count squares (and multiply by the value of one square)'] }
  ],
  sims: ['motion'], gens: ['acc1', 'acc2', 'suv1', 'suv2', 'vtarea1']
});

TOPICS.push({
  id: '1.3', unit: '1', ref: '1.11–1.16', title: 'Forces, vectors and resultant force', short: 'Types of force, scalars/vectors, resultants, friction',
  summary: 'What forces do, the different types of force, scalar and vector quantities, how to calculate the resultant of forces acting along a line, and friction.',
  spec: [
    '1.11 describe the effects of forces between bodies such as changes in speed, shape or direction',
    '1.12 identify different types of force such as gravitational or electrostatic',
    '1.13 understand how vector quantities differ from scalar quantities',
    '1.14 understand that force is a vector quantity',
    '1.15 calculate the resultant force of forces that act along a line',
    '1.16 know that friction is a force that opposes motion'
  ],
  learn: [
    { h: 'What forces do', html: `
<p>A force is a push or pull that acts between two bodies. Forces can change an object’s <b>speed</b> (start, stop, speed up, slow down), its <b>direction</b> of motion, or its <b>shape</b> (stretch, squash, bend, twist).</p>
<div class="tbl"><table><tr><th>Type of force</th><th>Acts between…</th></tr>
<tr><td>gravitational (weight)</td><td>any two masses — e.g. Earth and you</td></tr>
<tr><td>electrostatic</td><td>charged objects</td></tr>
<tr><td>magnetic</td><td>magnets / magnetic materials / currents</td></tr>
<tr><td>friction, air resistance (drag), upthrust</td><td>surfaces in contact; objects moving through fluids</td></tr>
<tr><td>tension, normal reaction (contact force)</td><td>stretched strings; surfaces pressed together</td></tr></table></div>` },
    { h: 'Scalars and vectors', html: `
<p><b>Scalars</b> have size (magnitude) only: mass, distance, speed, time, energy, temperature. <b>Vectors</b> have size <b>and direction</b>: force, weight, velocity, displacement, acceleration, momentum.</p>
<p>Force is a vector, so the direction matters when forces are combined. Forces are drawn as arrows: length = size, arrow = direction.</p>` },
    { h: 'Resultant force', html: `
[[d:resultant]]
<p>The <b>resultant</b> force is the single force that has the same effect as all the forces acting together. For forces along a line, choose a positive direction, then <b>add forces in the same direction and subtract forces in opposite directions</b>.</p>
<ul><li>Resultant = 0 (<b>balanced</b> forces): the object stays at rest or moves at <b>constant velocity</b>.</li><li>Resultant ≠ 0 (<b>unbalanced</b>): the object accelerates in the direction of the resultant.</li></ul>
<p><b>Friction</b> opposes motion (or attempted motion) between surfaces. Air resistance and water resistance are types of friction (drag). Friction transfers energy to the thermal store of the surfaces.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'A car’s engine provides a driving force of 3000 N. Air resistance is 1200 N and road friction is 600 N. Find the resultant force.', s: ['Forces forward: 3000 N; backward: 1200 + 600 = 1800 N', 'Resultant = 3000 − 1800 = 1200 N forwards'], a: '1200 N forwards' }
  ],
  pitfalls: ['Saying balanced forces mean the object must be stationary — it may be moving at constant velocity.', 'Giving a resultant force without a direction.', 'Calling mass a force — weight is the force, mass is not.'],
  cards: [
    ['Three effects of a force?', 'Change speed, direction or shape.'],
    ['Scalar vs vector?', 'Scalar: magnitude only. Vector: magnitude and direction.'],
    ['Examples of vectors?', 'Force, weight, velocity, acceleration, displacement, momentum.'],
    ['Examples of scalars?', 'Mass, speed, distance, time, energy.'],
    ['What is the resultant force?', 'The single force with the same effect as all the forces combined.'],
    ['Balanced forces on a moving object?', 'It continues at constant velocity.'],
    ['What does friction do?', 'Opposes motion between surfaces.'],
    ['Name two non-contact forces.', 'Gravitational, electrostatic (also magnetic).']
  ],
  quiz: [
    { q: 'Which is a scalar quantity?', o: ['speed', 'force', 'velocity', 'acceleration'], x: 'No direction.' },
    { q: 'Forces of 8 N east and 5 N west act on a box. The resultant is', o: ['3 N east', '13 N east', '3 N west', '13 N west'], x: '8 − 5.' },
    { q: 'An object moving with balanced forces', o: ['continues at constant velocity', 'slows down', 'speeds up', 'must stop'], x: 'Zero resultant.' },
    { q: 'The force between two charged balloons is', o: ['electrostatic', 'gravitational only', 'friction', 'tension'], x: 'Charges.' },
    { q: 'Friction always', o: ['opposes motion', 'acts in the direction of motion', 'increases speed', 'acts downwards'], x: 'Opposes relative motion.' },
    { q: 'Which is NOT an effect of a force?', o: ['changing an object’s mass', 'changing its shape', 'changing its speed', 'changing its direction'], x: 'Mass is unchanged.' }
  ],
  exam: [
    { q: 'A boat is pulled forward by a 450 N force from its sail and a 150 N force from its motor. Water resistance is 520 N.', parts: [
      { q: 'Calculate the resultant force on the boat and state its direction.', m: 2, ms: ['450 + 150 − 520 = 80 N', 'forwards'] },
      { q: 'Describe the motion of the boat.', m: 1, ms: ['it accelerates forwards / speeds up'] },
      { q: 'The water resistance increases as the boat speeds up. Explain what happens to the speed of the boat eventually.', m: 3, ms: ['water resistance increases until it equals 600 N', 'resultant force becomes zero', 'boat reaches a constant (maximum) speed'] }
    ] },
    { q: 'Explain the difference between a scalar and a vector quantity. Use speed and velocity as examples.', m: 3, ms: ['scalar has magnitude only', 'vector has magnitude and direction', 'speed is scalar; velocity is speed in a given direction (vector)'] }
  ],
  sims: ['forces'], gens: ['res1']
});

TOPICS.push({
  id: '1.4', unit: '1', ref: '1.17–1.18, 1.21', title: 'Force, mass, acceleration and falling objects', short: 'F = ma, W = mg, terminal velocity',
  summary: 'Newton’s second law F = ma, weight W = mg (g = 10 N/kg on Earth), and why falling objects — skydivers, raindrops, parachutes — reach a terminal velocity.',
  spec: [
    '1.17 know and use the relationship between unbalanced force, mass and acceleration: force = mass × acceleration, F = m × a',
    '1.18 know and use the relationship between weight, mass and gravitational field strength: weight = mass × gravitational field strength, W = m × g',
    '1.21 describe the forces acting on falling objects (and explain why falling objects reach a terminal velocity)'
  ],
  learn: [
    { h: 'F = ma', html: `
<div class="box def"><b class="lbl">Recall</b><p>$"force" = "mass" × "acceleration"$ &nbsp; $F = m × a$ &nbsp; (N = kg × m/s²)</p></div>
<p>F is the <b>unbalanced (resultant)</b> force. For a given force, a larger mass has a smaller acceleration; for a given mass, a larger resultant force gives a larger acceleration (a ∝ F).</p>
<p><b>1 newton</b> is the force that gives a 1 kg mass an acceleration of 1 m/s².</p>` },
    { h: 'Weight and mass', html: `
<div class="box def"><b class="lbl">Recall</b><p>$"weight" = "mass" × "gravitational field strength"$ &nbsp; $W = m × g$ &nbsp; (N = kg × N/kg)</p></div>
<ul><li><b>Mass</b> (kg) is the amount of matter — the same everywhere.</li><li><b>Weight</b> (N) is the gravitational force on the mass — it depends on g. On Earth g ≈ 10 N/kg; on the Moon about 1.6 N/kg.</li><li>g in N/kg is also the acceleration of free fall in m/s².</li></ul>` },
    { h: 'Falling objects and terminal velocity', html: `
[[d:terminal]]
<ol><li><b>Just released:</b> only weight acts (no air resistance yet) → acceleration = g = 10 m/s².</li><li><b>Speeding up:</b> air resistance increases with speed, so the resultant force (W − drag) decreases → acceleration decreases.</li><li><b>Terminal velocity:</b> air resistance = weight → resultant force zero → constant (terminal) velocity.</li><li><b>Parachute opens:</b> much larger area → drag ≫ weight → resultant force upwards → decelerates. Drag falls as speed falls until drag = weight again → a new, <b>lower</b> terminal velocity, safe for landing.</li></ol>
<p>In a vacuum (e.g. on the Moon) there is no air resistance: a hammer and a feather fall with the same acceleration.</p>` }
  ],
  eqs: [['F = m × a', 'resultant force (recall)'], ['W = m × g', 'weight (recall); g = 10 N/kg']],
  worked: [
    { q: 'A 1200 kg car accelerates at 2.5 m/s². Friction is 800 N. Calculate the driving force.', s: ['Resultant force F = ma = 1200 × 2.5 = 3000 N', 'Driving force − friction = resultant', 'Driving force = 3000 + 800 = 3800 N'], a: '3800 N' },
    { q: 'A skydiver of mass 80 kg is falling. Air resistance is 600 N. Calculate her acceleration (g = 10 N/kg).', s: ['W = mg = 80 × 10 = 800 N', 'Resultant = 800 − 600 = 200 N downwards', 'a = F/m = 200 ÷ 80 = 2.5 m/s² downwards'], a: '2.5 m/s²' }
  ],
  pitfalls: ['Using the driving force rather than the resultant force in F = ma.', 'Giving weight in kg — weight is a force, in N.', 'Saying a skydiver goes upwards when the parachute opens — she decelerates while still moving down.', 'Saying terminal velocity is when there are no forces — the forces are balanced.'],
  cards: [
    ['Equation linking force, mass and acceleration?', '$F = ma$ — F is the resultant force.'],
    ['Equation for weight?', '$W = mg$'],
    ['g on Earth (Edexcel)?', '10 N/kg'],
    ['Mass vs weight?', 'Mass: amount of matter, kg, constant. Weight: gravitational force, N, depends on g.'],
    ['Why does a falling object reach terminal velocity?', 'Air resistance increases with speed until it equals weight; resultant force zero.'],
    ['Acceleration of a skydiver at the moment of jumping?', '10 m/s² (only weight acts).'],
    ['Why does opening a parachute slow a skydiver?', 'Larger area → drag greater than weight → upward resultant → deceleration.'],
    ['Define 1 N.', 'The force that accelerates 1 kg at 1 m/s².']
  ],
  quiz: [
    { q: 'A resultant force of 60 N acts on a 12 kg mass. The acceleration is', o: ['5 m/s²', '720 m/s²', '0.2 m/s²', '48 m/s²'], x: '60 ÷ 12.' },
    { q: 'The weight of a 65 kg person on Earth is', o: ['650 N', '65 N', '6.5 N', '6500 N'], x: '65 × 10.' },
    { q: 'At terminal velocity, the air resistance on a falling object is', o: ['equal to its weight', 'zero', 'greater than its weight', 'less than its weight'], x: 'Balanced.' },
    { q: 'An astronaut’s mass on the Moon compared with Earth is', o: ['the same', 'one-sixth', 'six times greater', 'zero'], x: 'Mass does not change.' },
    { q: 'Immediately after a parachute opens, the skydiver', o: ['decelerates', 'moves upwards', 'accelerates downwards', 'moves at constant speed'], x: 'Upward resultant.' },
    { q: 'A 2000 kg lorry has a resultant force of 5000 N. Its acceleration is', o: ['2.5 m/s²', '0.4 m/s²', '10 m/s²', '7000 m/s²'], x: '5000 ÷ 2000.' },
    { q: 'The unit N/kg is equivalent to', o: ['m/s²', 'm/s', 'kg m/s', 'Nm'], x: 'g is also an acceleration.' },
    { q: 'Doubling the mass of a trolley and keeping the resultant force the same will', o: ['halve the acceleration', 'double the acceleration', 'not change the acceleration', 'quarter the acceleration'], x: 'a = F/m.' }
  ],
  exam: [
    { q: 'A skydiver of total mass 90 kg jumps from a plane. g = 10 N/kg.', tag: 'ext', parts: [
      { q: 'Calculate the weight of the skydiver.', m: 2, ms: ['W = 90 × 10', '= 900 N'] },
      { q: 'At one moment the air resistance is 540 N. Calculate the acceleration.', m: 3, ms: ['resultant force = 900 − 540 = 360 N', 'a = F ÷ m = 360 ÷ 90', '= 4.0 m/s²'] },
      { q: 'Describe and explain the motion of the skydiver from the moment she jumps until she lands with her parachute open. You may refer to forces and velocity.', m: 6, ms: ['initially only weight acts / acceleration = 10 m/s²', 'air resistance increases as speed increases', 'resultant force (and acceleration) decreases', 'air resistance = weight → terminal velocity', 'parachute opens → air resistance greater than weight → decelerates', 'air resistance decreases until equal to weight → new lower terminal velocity'] }
    ] },
    { q: 'A student investigates how the acceleration of a trolley depends on the resultant force, using a trolley on a runway pulled by a string over a pulley with slotted masses.', tag: 'prac', parts: [
      { q: 'Explain why the student should transfer masses from the trolley to the hanger, rather than adding new masses, when increasing the force.', m: 2, ms: ['keeps the total mass being accelerated constant', 'so only one variable (force) changes / fair test'] },
      { q: 'Describe how the acceleration could be measured.', m: 3, ms: ['light gates (with a card of known length / double interrupt card) and data logger', 'measure two speeds and the time between them', 'a = (v − u) ÷ t'] },
      { q: 'State the relationship the student should find, and how a graph would show it.', m: 2, ms: ['acceleration ∝ resultant force', 'straight line through the origin on a graph of a against F'] }
    ] },
    { q: 'A 1500 kg car accelerates from rest to 20 m/s in 8.0 s. The average resistive force is 500 N. Calculate the average driving force.', tag: 'calc', m: 4, ms: ['a = 20 ÷ 8.0 = 2.5 m/s²', 'resultant F = 1500 × 2.5 = 3750 N', 'driving force = resultant + resistance', '= 4250 N'] }
  ],
  sims: ['newton2', 'skydiver'], gens: ['fma1', 'fma2', 'fma3', 'fma4', 'wmg1', 'wmg2']
});

TOPICS.push({
  id: '1.5', unit: '1', ref: '1.19–1.20', title: 'Stopping distances', short: 'Thinking + braking distance',
  summary: 'A vehicle’s stopping distance is the thinking distance plus the braking distance. Speed, mass, road conditions, tyres, brakes and the driver’s reaction time all affect it.',
  spec: [
    '1.19 know that the stopping distance of a vehicle is made up of the sum of the thinking distance and the braking distance',
    '1.20 describe the factors affecting vehicle stopping distance, including speed, mass, road condition and reaction time'
  ],
  learn: [
    { h: 'Stopping distance', html: `
[[d:stopping]]
<div class="box def"><b class="lbl">Definition</b><p><b>Stopping distance = thinking distance + braking distance.</b></p></div>
<ul><li><b>Thinking distance</b> — travelled during the driver’s reaction time, at constant speed: thinking distance = speed × reaction time. It is <b>proportional to speed</b>.</li><li><b>Braking distance</b> — travelled while the brakes slow the car to rest. For the same braking force it is proportional to <b>speed²</b> (double the speed → four times the braking distance), because the kinetic energy (½mv²) must all be transferred by the work done by the brakes.</li></ul>` },
    { h: 'Factors', html: `
<div class="tbl"><table><tr><th>Affects thinking distance (reaction time)</th><th>Affects braking distance</th></tr>
<tr><td>tiredness, alcohol, drugs (including some medicines), distractions such as mobile phones, age and experience — and <b>speed</b></td><td><b>speed</b>, <b>mass</b> of the vehicle (and load), <b>road condition</b> (wet, icy, gravel — less friction), worn <b>tyres</b> (less grip), worn <b>brakes</b></td></tr></table></div>
<p>Typical reaction times are 0.2–0.9 s. Braking distance for a given braking force: more mass → smaller deceleration (a = F/m) → longer distance.</p>` }
  ],
  eqs: [['"stopping distance" = "thinking distance" + "braking distance"', ''], ['"thinking distance" = "speed" × "reaction time"', '']],
  worked: [
    { q: 'A driver with a reaction time of 0.70 s is travelling at 20 m/s. The braking distance is 30 m. Calculate the stopping distance.', s: ['Thinking distance = 20 × 0.70 = 14 m', 'Stopping distance = 14 + 30 = 44 m'], a: '44 m' },
    { q: 'At 15 m/s a car’s braking distance is 18 m. Estimate the braking distance at 30 m/s (same braking force).', s: ['Braking distance ∝ v²', 'Speed doubles → braking distance × 4', '18 × 4 = 72 m'], a: '72 m' }
  ],
  pitfalls: ['Saying a tired driver increases the braking distance — it increases the thinking distance.', 'Saying wet roads increase the thinking distance.', 'Assuming braking distance doubles when speed doubles — it quadruples.'],
  cards: [
    ['Stopping distance = ?', 'Thinking distance + braking distance.'],
    ['What affects thinking distance?', 'Speed and reaction time (tiredness, alcohol, drugs, distractions).'],
    ['What affects braking distance?', 'Speed, mass, road condition, tyres, brakes.'],
    ['How does thinking distance depend on speed?', 'Directly proportional.'],
    ['How does braking distance depend on speed?', 'Proportional to speed² (double speed → ×4).'],
    ['Why does an icy road increase braking distance?', 'Less friction between tyres and road → smaller braking force/deceleration.']
  ],
  quiz: [
    { q: 'Which increases thinking distance but not braking distance?', o: ['the driver being tired', 'an icy road', 'worn brakes', 'a heavy load'], x: 'Reaction time.' },
    { q: 'A car travels at 25 m/s; reaction time 0.6 s. Thinking distance is', o: ['15 m', '41.7 m', '25.6 m', '1.5 m'], x: '25 × 0.6.' },
    { q: 'If speed doubles, the braking distance (same braking force)', o: ['quadruples', 'doubles', 'halves', 'stays the same'], x: '∝ v².' },
    { q: 'Which factor affects braking distance?', o: ['the mass of the car', 'using a mobile phone', 'drinking alcohol', 'tiredness'], x: 'a = F/m.' },
    { q: 'Stopping distance is', o: ['thinking distance + braking distance', 'braking distance − thinking distance', 'speed × braking time', 'thinking distance × braking distance'], x: 'Sum.' }
  ],
  exam: [
    { q: 'The table shows stopping distances for a car: at 10 m/s thinking 7 m, braking 8 m; at 20 m/s thinking 14 m, braking 32 m.', tag: 'data', parts: [
      { q: 'Calculate the driver’s reaction time.', m: 2, ms: ['reaction time = thinking distance ÷ speed = 7 ÷ 10', '= 0.7 s'] },
      { q: 'Use the data to show that braking distance is proportional to speed squared.', m: 2, ms: ['speed doubles (×2)', 'braking distance ×4 (8 → 32), which is 2²'] },
      { q: 'Predict the stopping distance at 30 m/s.', m: 3, ms: ['thinking = 21 m', 'braking = 8 × 9 = 72 m', 'stopping = 93 m'] },
      { q: 'Explain how driving on a wet road would affect each part of the stopping distance.', m: 2, ms: ['thinking distance unchanged (reaction time/speed same)', 'braking distance increases — less friction/grip so smaller deceleration'] }
    ] },
    { q: 'Discuss the factors that affect the stopping distance of a car. Your answer should refer to both thinking distance and braking distance.', tag: 'ext', m: 6, ms: ['stopping distance = thinking + braking distance', 'thinking distance depends on speed and reaction time', 'reaction time increased by tiredness/alcohol/drugs/distraction', 'braking distance increases with speed (∝ v²)', 'greater mass → smaller deceleration → longer braking distance', 'wet/icy roads, worn tyres or brakes reduce friction → longer braking distance'] }
  ],
  sims: ['stopping'], gens: ['think1', 'brake1']
});

TOPICS.push({
  id: '1.6', unit: '1', ref: '1.22–1.24', title: 'Springs, wires and Hooke’s law', short: 'Force–extension graphs, elastic behaviour',
  summary: 'The practical investigating how extension varies with force for springs, metal wires and rubber bands; Hooke’s law in the initial linear region; and elastic behaviour.',
  spec: [
    '1.22 practical: investigate how extension varies with applied force for helical springs, metal wires and rubber bands',
    '1.23 know that the initial linear region of a force-extension graph is associated with Hooke’s law',
    '1.24 describe elastic behaviour as the ability of a material to recover its original shape after the forces causing deformation have been removed'
  ],
  learn: [
    { h: 'Practical: force and extension (1.22)', html: `
[[d:springrig]]
<ol><li>Hang the spring from a clamp stand with a metre rule clamped vertically beside it. Use a pointer (or the bottom of the spring) and read the scale at eye level.</li><li>Record the <b>original length</b>.</li><li>Add 100 g masses one at a time (each adds 1.0 N of weight, since W = mg = 0.1 × 10). Record the new length each time.</li><li><b>Extension = new length − original length.</b></li><li>Remove the masses to check whether the spring returns to its original length (elastic).</li><li>Plot <b>force (y) against extension (x)</b>, or extension against force.</li></ol>
<p><b>Metal wire:</b> use a long wire (several metres) along a bench over a pulley, with a marker and a scale, because the extension is tiny. <b>Rubber band:</b> hangs like a spring; the graph is curved and the unloading curve differs from loading (hysteresis).</p>
<p><b>Safety:</b> goggles (wires can snap); keep feet clear of falling masses; don’t overload.</p>` },
    { h: 'Hooke’s law and elastic behaviour', html: `
[[d:hooke]]
<ul><li><b>Hooke’s law:</b> extension is directly proportional to the force applied, as long as the <b>limit of proportionality</b> is not exceeded. This is the <b>initial linear region</b> (straight line through the origin) of a force–extension graph.</li><li>Beyond the limit, the graph curves — extension increases more for each newton added.</li><li><b>Elastic behaviour</b> is the ability of a material to recover its original shape after the forces causing deformation are removed. Beyond the <b>elastic limit</b> the material is permanently deformed (plastic behaviour).</li></ul>
<div class="tbl"><table><tr><th>Material</th><th>Force–extension graph</th></tr><tr><td>Helical spring</td><td>straight line (Hooke’s law) then curves after the limit of proportionality</td></tr><tr><td>Metal wire</td><td>straight line for small extensions; then large extension for little extra force (plastic) before breaking</td></tr><tr><td>Rubber band</td><td>curved from the start — does not obey Hooke’s law; elastic but with hysteresis</td></tr></table></div>
<p>The gradient of the straight region (force ÷ extension) tells you the stiffness of the spring.</p>` }
  ],
  eqs: [['"extension" = "new length" - "original length"', '']],
  worked: [
    { q: 'A spring has an original length of 12.0 cm. With a 300 g mass hung on it the length is 18.0 cm. Assuming Hooke’s law, predict the length with a 500 g mass.', s: ['300 g → weight 3.0 N → extension 6.0 cm', 'Extension per newton = 2.0 cm/N', '500 g → 5.0 N → extension 10.0 cm', 'Length = 12.0 + 10.0 = 22.0 cm'], a: '22.0 cm' }
  ],
  pitfalls: ['Plotting length instead of extension.', 'Saying Hooke’s law applies to the whole graph.', 'Confusing the limit of proportionality with the elastic limit (they are close but not the same).', 'Forgetting to convert grams to kilograms when finding the weight of masses.'],
  cards: [
    ['State Hooke’s law.', 'Extension is directly proportional to force, up to the limit of proportionality.'],
    ['Which part of a force–extension graph shows Hooke’s law?', 'The initial linear region (straight line through the origin).'],
    ['Define elastic behaviour.', 'The ability of a material to recover its original shape after the deforming forces are removed.'],
    ['How do you calculate extension?', 'New length − original length.'],
    ['Weight of a 100 g mass (g = 10)?', '1.0 N'],
    ['Force–extension graph for a rubber band?', 'Curved — does not obey Hooke’s law.'],
    ['Why use a long wire when testing a metal wire?', 'Extension is very small; a long wire gives a measurable extension.'],
    ['What happens beyond the elastic limit?', 'Permanent (plastic) deformation — does not return to original shape.']
  ],
  quiz: [
    { q: 'A spring obeys Hooke’s law. A 2 N force stretches it 4 cm. A 5 N force stretches it', o: ['10 cm', '8 cm', '20 cm', '2.5 cm'], x: '2 cm per N.' },
    { q: 'Which graph shows Hooke’s law?', o: ['a straight line through the origin', 'a curve through the origin', 'a horizontal line', 'a straight line not through the origin'], x: 'Direct proportion.' },
    { q: 'A material that returns to its original shape when the force is removed is', o: ['elastic', 'plastic', 'brittle', 'ductile'], x: 'Definition.' },
    { q: 'Original length 20 cm, stretched length 26 cm. The extension is', o: ['6 cm', '26 cm', '46 cm', '1.3 cm'], x: '26 − 20.' },
    { q: 'Which does NOT obey Hooke’s law for small forces?', o: ['a rubber band', 'a steel spring', 'a copper wire (small extensions)', 'a stiff spring'], x: 'Rubber is non-linear.' },
    { q: 'Why should you read the scale at eye level?', o: ['to avoid parallax error', 'to reduce the extension', 'to keep the spring elastic', 'for safety'], x: 'Line of sight.' }
  ],
  exam: [
    { q: 'A student investigates how the extension of a spring depends on the force applied. The results are: 0 N 0 cm; 1 N 2.0 cm; 2 N 4.1 cm; 3 N 5.9 cm; 4 N 8.0 cm; 5 N 10.6 cm; 6 N 14.0 cm.', tag: 'prac', parts: [
      { q: 'Describe how the student should measure the extension accurately.', m: 3, ms: ['measure original length with a metre rule clamped vertically', 'read the scale at eye level / use a pointer attached to the spring', 'extension = new length − original length'] },
      { q: 'Plot a graph of force against extension and draw a line of best fit.', m: 4, ms: ['suitable scales using over half the grid', 'axes labelled with units', 'all points plotted correctly (±½ square)', 'straight line through origin to about 4 N then curve'] },
      { q: 'Estimate the force at the limit of proportionality.', m: 1, ms: ['about 4 N (accept 4–5 N)'] },
      { q: 'The student removes the 6 N load and finds the spring is 0.8 cm longer than at the start. Explain what this shows.', m: 2, ms: ['the spring has gone past its elastic limit', 'permanently (plastically) deformed / not elastic'] }
    ] },
    { q: 'Compare the force–extension behaviour of a metal wire and a rubber band.', m: 4, ms: ['wire: straight line / obeys Hooke’s law for small extensions', 'wire: beyond limit, large plastic extension, then breaks', 'rubber band: curved graph from the start / does not obey Hooke’s law', 'rubber: elastic over large extensions / unloading curve differs'] }
  ],
  sims: ['spring'], gens: []
});

TOPICS.push({
  id: '1.7', unit: '1', ref: '1.25–1.29', po: true, title: 'Momentum', short: 'p = mv, conservation, F = Δp/t, Newton’s third law',
  summary: 'Momentum (p = mv), the conservation of momentum in collisions and explosions, force as rate of change of momentum, car safety features, and Newton’s third law.',
  spec: [
    '1.25P know and use the relationship between momentum, mass and velocity: p = m × v',
    '1.26P use the idea of momentum to explain safety features',
    '1.27P use the conservation of momentum to calculate the mass, velocity or momentum of objects',
    '1.28P use the relationship between force, change in momentum and time taken: F = (mv − mu)/t',
    '1.29P demonstrate an understanding of Newton’s third law'
  ],
  learn: [
    { h: 'Momentum', html: `
<div class="box def"><b class="lbl">Recall</b><p>$"momentum" = "mass" × "velocity"$ &nbsp; $p = m × v$ &nbsp; (kg m/s)</p></div>
<p>Momentum is a <b>vector</b> — direction matters. Choose a positive direction; momentum in the opposite direction is negative.</p>` },
    { h: 'Conservation of momentum', html: `
[[d:collision]]
<p>In a <b>closed system</b> (no external forces), <b>total momentum before = total momentum after</b> a collision or explosion.</p>
<ul><li><b>Collision where objects stick together:</b> $m_1u_1 + m_2u_2 = (m_1 + m_2)v$.</li><li><b>Explosion / recoil</b> (starting at rest): total momentum before = 0, so after, the two parts have equal and opposite momenta — e.g. a gun recoils as the bullet is fired.</li></ul>` },
    { h: 'Force and change in momentum', html: `
<div class="box def"><b class="lbl">Given on the paper</b><p>$"force" = @frac{"change in momentum"}{"time taken"}$ &nbsp; $F = @frac{(mv - mu)}{t}$</p></div>
<p>This is Newton’s second law in another form (since (v − u)/t = a, it gives F = ma). For a given change in momentum, <b>increasing the time</b> of the collision <b>decreases the force</b>.</p>
<p><b>Safety features</b> — crumple zones, seat belts (which stretch slightly), air bags, cycle and motorcycle helmets, crash barriers, soft playground surfaces — all increase the time over which a person’s momentum changes, so the force on them (and the deceleration) is smaller, reducing injury.</p>` },
    { h: 'Newton’s third law', html: `
[[d:thirdlaw]]
<p><b>When body A exerts a force on body B, body B exerts an equal and opposite force on body A.</b> The two forces are the same <b>type</b>, equal in <b>size</b>, opposite in <b>direction</b>, and act on <b>different bodies</b> — so they never cancel each other out.</p>
<p>Examples: you push on the ground backwards, the ground pushes you forwards; a rocket pushes gas backwards, the gas pushes the rocket forwards; the Earth pulls the Moon, the Moon pulls the Earth.</p>
<div class="box warn"><b class="lbl">Not a third-law pair</b><p>A book on a table: its weight (Earth pulls book) and the normal reaction (table pushes book) both act on the <b>book</b> — they are balanced forces, not a third-law pair.</p></div>` }
  ],
  eqs: [['p = m × v', 'momentum (recall)'], ['F = @frac{(mv - mu)}{t}', 'force and change in momentum (given)']],
  worked: [
    { q: 'A 0.80 kg trolley moving at 3.0 m/s hits a stationary 1.2 kg trolley and they move off together. Find their velocity.', s: ['Momentum before = 0.80 × 3.0 + 0 = 2.4 kg m/s', 'After: (0.80 + 1.2) × v = 2.0v', '2.0v = 2.4 → v = 1.2 m/s'], a: '1.2 m/s in the original direction' },
    { q: 'A 60 kg passenger is brought to rest from 15 m/s by a seat belt in 0.30 s. Calculate the average force. How does an air bag that increases the time to 0.50 s help?', s: ['Change in momentum = 60 × 0 − 60 × 15 = −900 kg m/s', 'F = 900 ÷ 0.30 = 3000 N', 'With 0.50 s: F = 900 ÷ 0.50 = 1800 N — smaller force, less injury'], a: '3000 N; reduced to 1800 N' },
    { q: 'A 4.0 kg gun fires a 0.010 kg bullet at 400 m/s. Calculate the recoil velocity of the gun.', s: ['Total momentum before = 0', 'Bullet momentum = 0.010 × 400 = 4.0 kg m/s forwards', 'Gun momentum = −4.0 kg m/s → v = −4.0 ÷ 4.0 = −1.0 m/s'], a: '1.0 m/s backwards' }
  ],
  pitfalls: ['Forgetting that momentum is a vector — objects moving in opposite directions have opposite signs.', 'Adding speeds instead of momenta.', 'Saying safety features reduce the change in momentum — they increase the time, reducing the force.', 'Choosing weight and normal reaction as a Newton’s third law pair.'],
  cards: [
    ['Equation for momentum?', '$p = mv$', 'po'],
    ['Unit of momentum?', 'kg m/s', 'po'],
    ['Principle of conservation of momentum?', 'In a closed system, total momentum before = total momentum after.', 'po'],
    ['Force and momentum equation?', '$F = (mv − mu) ÷ t$', 'po'],
    ['How do crumple zones reduce injury?', 'Increase collision time → smaller rate of change of momentum → smaller force.', 'po'],
    ['State Newton’s third law.', 'If A exerts a force on B, B exerts an equal and opposite force on A.', 'po'],
    ['Features of a third-law pair?', 'Same type, equal size, opposite direction, act on different bodies.', 'po'],
    ['Total momentum of a gun and bullet before firing?', 'Zero — so after, equal and opposite momenta.', 'po']
  ],
  quiz: [
    { q: 'The momentum of a 1500 kg car at 20 m/s is', o: ['30 000 kg m/s', '75 kg m/s', '3000 kg m/s', '300 000 kg m/s'], x: '1500 × 20.', po: 1 },
    { q: 'An air bag reduces injury because it', o: ['increases the time taken to stop', 'reduces the change in momentum', 'increases the force', 'reduces the mass'], x: 'F = Δp/t.', po: 1 },
    { q: 'A 2 kg ball moving at 3 m/s hits a stationary 1 kg ball and stops. The 1 kg ball moves at', o: ['6 m/s', '3 m/s', '1.5 m/s', '2 m/s'], x: '6 kg m/s ÷ 1 kg.', po: 1 },
    { q: 'A change in momentum of 12 kg m/s happens in 0.04 s. The average force is', o: ['300 N', '0.48 N', '12 N', '3 N'], x: '12 ÷ 0.04.', po: 1 },
    { q: 'Which is a Newton’s third law pair?', o: ['Earth pulls the Moon; the Moon pulls the Earth', 'a book’s weight and the table’s push on the book', 'thrust and drag on a plane', 'weight and air resistance on a skydiver'], x: 'Different bodies, same type.', po: 1 },
    { q: 'Before an explosion, a stationary object has a total momentum of', o: ['zero', 'its mass × g', 'infinite', 'equal to its kinetic energy'], x: 'At rest.', po: 1 },
    { q: 'Two identical trolleys move towards each other at 2 m/s each and stick. Afterwards they', o: ['stop', 'move at 2 m/s', 'move at 4 m/s', 'move at 1 m/s'], x: 'Momenta cancel.', po: 1 }
  ],
  exam: [
    { q: 'A 900 kg car travelling at 18 m/s crashes into the back of a stationary 1200 kg van. After the collision they move together.', tag: 'calc', po: 1, parts: [
      { q: 'Calculate the momentum of the car before the collision.', m: 2, ms: ['p = 900 × 18', '= 16 200 kg m/s'] },
      { q: 'Calculate the velocity of the car and van just after the collision.', m: 3, ms: ['total momentum after = 16 200 kg m/s', 'total mass = 2100 kg', 'v = 16 200 ÷ 2100 = 7.7 m/s'] },
      { q: 'The collision lasts 0.12 s. Calculate the average force on the van.', m: 3, ms: ['change in momentum of van = 1200 × 7.7 ≈ 9260 kg m/s (accept 9240–9260)', 'F = Δp ÷ t = 9260 ÷ 0.12', '≈ 77 000 N'] },
      { q: 'Use ideas about momentum to explain how the car’s crumple zone reduces the force on the driver.', m: 3, ms: ['crumple zone increases the time of the collision', 'driver’s change in momentum is the same', 'force = change in momentum ÷ time, so the force is smaller'] }
    ] },
    { q: 'An ice skater of mass 50 kg, standing still, pushes a 70 kg skater, also standing still. The 70 kg skater moves off at 2.0 m/s.', tag: 'calc', po: 1, parts: [
      { q: 'Calculate the velocity of the 50 kg skater.', m: 3, ms: ['total momentum before = 0', '70 × 2.0 = 140 kg m/s', 'v = −140 ÷ 50 = 2.8 m/s in the opposite direction'] },
      { q: 'Explain, using Newton’s third law, why both skaters move.', m: 3, ms: ['the first skater exerts a force on the second', 'the second exerts an equal and opposite force on the first', 'forces act on different bodies so each accelerates (in opposite directions)'] }
    ] },
    { q: 'Explain why a cyclist’s helmet contains a layer of foam that crushes on impact.', po: 1, m: 3, ms: ['foam crushes, increasing the time for the head to stop', 'same change in momentum over a longer time', 'smaller force on the head / smaller deceleration → less injury'] }
  ],
  sims: ['collisions', 'crash'], gens: ['mom4', 'mom5', 'mom6', 'fmdt1']
});

TOPICS.push({
  id: '1.8', unit: '1', ref: '1.30–1.33', po: true, title: 'Moments', short: 'Moment = F × d, centre of gravity, beams',
  summary: 'The turning effect of a force, the principle of moments for parallel forces, centre of gravity, and how the support forces on a beam change as a load moves along it.',
  spec: [
    '1.30P know and use the relationship between the moment of a force and its perpendicular distance from the pivot: moment = force × perpendicular distance from the pivot',
    '1.31P know that the weight of a body acts through its centre of gravity',
    '1.32P use the principle of moments for a simple system of parallel forces acting in one plane',
    '1.33P understand how the upward forces on a light beam, supported at its ends, vary with the position of a heavy object placed on the beam'
  ],
  learn: [
    { h: 'Moments', html: `
[[d:moment]]
<div class="box def"><b class="lbl">Recall</b><p>$"moment" = "force" × "perpendicular distance from the pivot"$ &nbsp; (Nm)</p></div>
<p>A moment is the <b>turning effect</b> of a force. It is larger for a bigger force or a force applied further from the pivot — which is why a long spanner makes a nut easier to turn and door handles are far from the hinges.</p>` },
    { h: 'Principle of moments and centre of gravity', html: `
<p><b>Principle of moments:</b> when an object is balanced (in equilibrium), <b>the sum of the clockwise moments about any point = the sum of the anticlockwise moments about that point</b>. Also, the upward forces equal the downward forces.</p>
<p>The <b>weight</b> of a body acts through its <b>centre of gravity</b> — the single point where all the weight appears to act. For a uniform ruler it is at the middle. A freely suspended object hangs with its centre of gravity directly below the pivot (used to find the centre of gravity of a lamina with a plumb line).</p>
<p>An object is <b>stable</b> if it has a low centre of gravity and a wide base; it topples when the line of action of its weight falls outside its base.</p>` },
    { h: 'Beams supported at both ends', html: `
<p>A light beam rests on two supports, A and B. When a heavy object is placed on it, the two upward forces add up to the object’s weight. <b>The support nearer the object carries the larger share.</b> If the object is in the middle, each support takes half; as the object moves towards A, the force at A increases and the force at B decreases (by the same amount).</p>
<p>To calculate: take moments about one support (this eliminates that support’s force), then use upward forces = downward forces.</p>
<p>Example: a 3.0 m light beam with a 600 N load 1.0 m from A. Moments about A: $F_B × 3.0 = 600 × 1.0$ → F<sub>B</sub> = 200 N; F<sub>A</sub> = 600 − 200 = 400 N.</p>` }
  ],
  eqs: [['"moment" = "force" × "perpendicular distance from the pivot"', 'recall; Nm']],
  worked: [
    { q: 'A 400 N child sits 1.5 m from the pivot of a seesaw. Where must a 600 N adult sit to balance it?', s: ['Anticlockwise moment = 400 × 1.5 = 600 Nm', 'Clockwise moment = 600 × d', '600d = 600 → d = 1.0 m on the other side'], a: '1.0 m from the pivot' },
    { q: 'A uniform 2.0 m plank of weight 80 N rests on supports at each end. A 120 N box is placed 0.50 m from the left end. Find the force from each support.', s: ['Take moments about the left support: F_R × 2.0 = 120 × 0.50 + 80 × 1.0', 'F_R × 2.0 = 60 + 80 = 140 → F_R = 70 N', 'F_L = (120 + 80) − 70 = 130 N'], a: 'Left 130 N, right 70 N' }
  ],
  pitfalls: ['Using the distance along the lever instead of the perpendicular distance.', 'Forgetting the weight of the beam itself (acting at its centre of gravity) when it is not “light”.', 'Mixing cm and m within one calculation — keep units consistent.'],
  cards: [
    ['Equation for a moment?', 'Moment = force × perpendicular distance from pivot (Nm).', 'po'],
    ['Principle of moments?', 'When balanced, sum of clockwise moments = sum of anticlockwise moments.', 'po'],
    ['Where does weight act?', 'Through the centre of gravity.', 'po'],
    ['Why is a long spanner easier to use?', 'Larger distance → larger moment for the same force.', 'po'],
    ['Heavy object moved towards support A on a beam: force at A?', 'Increases (force at B decreases).', 'po'],
    ['When does an object topple?', 'When the line of action of its weight falls outside its base.', 'po']
  ],
  quiz: [
    { q: 'A 50 N force acts 0.4 m from a pivot. The moment is', o: ['20 Nm', '125 Nm', '0.008 Nm', '50.4 Nm'], x: '50 × 0.4.', po: 1 },
    { q: 'A seesaw balances with 300 N at 2 m on the left. A 400 N person on the right must sit', o: ['1.5 m from the pivot', '2.7 m from the pivot', '2 m from the pivot', '0.67 m from the pivot'], x: '600 ÷ 400.', po: 1 },
    { q: 'A load is placed exactly in the middle of a light beam on two supports. Each support provides', o: ['half the load', 'all the load', 'zero', 'twice the load'], x: 'Symmetry.', po: 1 },
    { q: 'The weight of a uniform metre rule acts at', o: ['the 50 cm mark', 'the 0 cm end', 'the pivot always', 'the 100 cm end'], x: 'Centre of gravity.', po: 1 },
    { q: 'The unit of a moment is', o: ['Nm', 'N/m', 'kg m/s', 'J/s'], x: 'Force × distance.', po: 1 }
  ],
  exam: [
    { q: 'A uniform beam 4.0 m long weighing 200 N is supported at its ends, P and Q. A 500 N crate sits 1.0 m from P.', tag: 'calc', po: 1, parts: [
      { q: 'State where the weight of the beam acts.', m: 1, ms: ['at its centre (of gravity), 2.0 m from each end'] },
      { q: 'Calculate the upward force at Q.', m: 3, ms: ['moments about P: F_Q × 4.0 = 500 × 1.0 + 200 × 2.0', 'F_Q × 4.0 = 900', 'F_Q = 225 N'] },
      { q: 'Calculate the upward force at P.', m: 2, ms: ['F_P = 700 − 225', '= 475 N'] },
      { q: 'The crate is slid towards Q. Describe how the forces at P and Q change.', m: 2, ms: ['force at P decreases', 'force at Q increases (total stays 700 N)'] }
    ] },
    { q: 'A student uses a metre rule pivoted at its centre to test the principle of moments. Describe how she could do this and how she would use her results.', tag: 'prac', po: 1, m: 5, ms: ['balance the rule on the pivot at its centre of gravity (50 cm)', 'hang known weights at measured distances on each side', 'adjust position of one weight until the rule balances horizontally', 'calculate clockwise and anticlockwise moments (F × d)', 'compare — they should be equal; repeat for different loads/positions'] }
  ],
  sims: ['moments'], gens: ['mom1', 'mom2', 'mom3']
});
