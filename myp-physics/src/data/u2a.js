/* ==========================================================
   UNIT 2 · Motion of a particle (part 1)
   Strand 1: storytelling with graphs · Strand 2: modelling forces
   ========================================================== */
TOPICS.push(lw('5.5', {
  id: '2.1', unit: '2', strand: 1, as: [1], ref: 'Strand 1 · AS 1', title: 'Scalars, vectors and describing motion', short: 'Distance, displacement, speed, velocity',
  summary: 'A kinematic model treats a moving object as a particle. Describe its motion with scalars (distance, speed) and vectors (displacement, velocity, acceleration), add vectors, and calculate average speed.',
  spec: ['Distinguish scalars (magnitude only) from vectors (magnitude and direction), giving examples of each', 'Distinguish distance from displacement and speed from velocity', 'Calculate average speed = total distance ÷ total time', 'Add vectors in a line and at right angles (Pythagoras and trigonometry, or a scale drawing)', 'Use a sign convention (+ and −) for direction in one dimension', 'Recall typical everyday speeds'],
  learn: [
    { h: 'The particle model', html: `
<p>In kinematics we usually treat a moving object — a car, a ball, a planet — as a <b>particle</b>: a point with mass but no size. This simplifies the problem so we can describe the motion with a few quantities and predict what happens next. The model breaks down if rotation, size or shape matter (a spinning ball, a deforming car in a crash).</p>
<p>To describe the motion we choose an <b>origin</b> and a <b>positive direction</b>. Anything moving the other way gets a negative sign.</p>` },
    { h: 'Scalars and vectors', html: `
<div class="tbl"><table><tr><th>Scalars (magnitude only)</th><th>Vectors (magnitude and direction)</th></tr>
<tr><td>distance, speed, time, mass, energy, temperature, power</td><td>displacement, velocity, acceleration, force, weight, momentum, impulse</td></tr></table></div>
<p>Vectors are drawn as arrows: the length shows the magnitude and the arrow the direction.</p>` },
    0, 1,
    { h: 'Adding vectors', html: `
<p><b>In a straight line:</b> choose a positive direction and add with signs. 5 m east then 3 m west: s = +5 + (−3) = +2 m (2 m east).</p>
<p><b>At right angles:</b> draw the arrows tip-to-tail; the resultant is the hypotenuse.</p>
<div class="box def"><b class="lbl">Perpendicular vectors</b><p>$R = @sqrt{a^2 + b^2}$ &nbsp; $θ = tan^{-1}(@frac{b}{a})$</p></div>
<p>A boat heading north at 4.0 m/s across a river flowing east at 3.0 m/s moves at $@sqrt{4.0^2 + 3.0^2}$ = 5.0 m/s, at 37° east of north. A scale drawing gives the same answer.</p>
[[d:resultant]]` }
  ],
  quiz: [0, 1, 2, 12, 8],
  addQuiz: [
    { q: 'A runner completes one 400 m lap and finishes where she started. Her displacement is', o: ['0 m', '400 m', '200 m', '800 m'], x: 'Start = finish.' },
    { q: 'Which list contains only vectors?', o: ['velocity, force, momentum', 'speed, mass, force', 'distance, time, velocity', 'energy, weight, acceleration'], x: 'All have direction.' },
    { q: 'Velocities of 3.0 m/s east and 4.0 m/s north combine to', o: ['5.0 m/s', '7.0 m/s', '1.0 m/s', '12 m/s'], x: '√(9 + 16).' },
    { q: 'A ball is thrown up at +8 m/s (up positive). On the way down it moves at 8 m/s. Its velocity is', o: ['−8 m/s', '+8 m/s', '0 m/s', '16 m/s'], x: 'Opposite direction → negative.' }
  ],
  cards: [0, 1, 2, 3, 4], addCards: [['Scalar vs vector?', 'Scalar: magnitude only. Vector: magnitude and direction.'], ['Four vectors?', 'Displacement, velocity, acceleration, force (also momentum, weight).'], ['Resultant of perpendicular vectors?', '√(a² + b²) at angle tan⁻¹(b/a).'], ['Particle model?', 'Treat the object as a point mass, ignoring its size and rotation.']],
  exam: false, addExam: [
    { q: 'A walker goes 3.0 km north in 40 minutes and then 4.0 km east in 50 minutes. Calculate (a) the average speed in m/s, (b) the magnitude of the displacement, and (c) the average velocity.', m: 5, cr: 'A', ms: ['Distance 7.0 km = 7000 m; time 90 min = 5400 s', 'Average speed = 1.3 m/s', 'Displacement = √(3² + 4²) = 5.0 km', 'Direction tan⁻¹(4/3) = 53° east of north (bearing 053°)', 'Average velocity = 5000 ÷ 5400 = 0.93 m/s at 53° east of north'] },
    { q: 'Explain why the speed of a satellite in a circular orbit can be constant while its velocity changes.', m: 2, cr: 'A', ms: ['Velocity is a vector (has direction).', 'Direction of motion constantly changes, so velocity changes (it accelerates towards the centre).'] }
  ],
  worked: [0], addWorked: [{ q: 'A plane flies north at 200 m/s in a crosswind of 50 m/s from the west. Find its resultant velocity.', s: ['Wind from the west blows east: 50 m/s east', '$v = @sqrt{200^2 + 50^2} = 206 "m/s"$', '$θ = tan^{-1}(50/200) = 14°$ east of north'], a: '206 m/s at 14° east of north' }],
  eqs: [['v = @frac{s}{t}', 'average speed'], ['R = @sqrt{a^2 + b^2}', 'resultant of perpendicular vectors']],
  pitfalls: ['Calling displacement “distance” — displacement needs a direction.', 'Adding perpendicular vectors arithmetically (3 + 4 = 7) instead of with Pythagoras.', 'Forgetting a sign convention, so velocities in opposite directions are added.', 'Leaving time in minutes or hours.'],
  sims: ['vectors'], gens: ['svt1', 'svt2', 'vecadd']
}));

TOPICS.push(lw('5.5', {
  id: '2.2', unit: '2', strand: 1, as: [3, 4], ref: 'Strand 1 · AS 3–4', title: 'Storytelling with motion graphs', short: 'Gradients and areas of d–t and v–t graphs',
  summary: 'A motion graph tells a story. Draw displacement–time and velocity–time graphs from a description, read velocity and acceleration from gradients (including instantaneous values from tangents), and displacement from the area under a v–t graph.',
  spec: ['Draw d–t and v–t graphs from a description of motion', 'The gradient of a d–t graph is the velocity; a tangent gives the instantaneous velocity', 'The gradient of a v–t graph is the acceleration', 'The area under a v–t graph is the displacement (distance if motion is in one direction)', 'Describe terminal velocity and sketch the v–t graph of a falling object reaching terminal velocity', 'Translate between a graph, a description and an equation'],
  learn: [
    { h: 'Reading the story', html: `
<p>Every graph answers the same three questions: <b>where</b> is it, <b>how fast</b> is it going, and <b>is it speeding up or slowing down</b>?</p>
<div class="tbl"><table><tr><th>Story</th><th>d–t graph</th><th>v–t graph</th></tr>
<tr><td>at rest</td><td>horizontal line</td><td>line on the time axis (v = 0)</td></tr>
<tr><td>constant velocity</td><td>straight sloping line</td><td>horizontal line</td></tr>
<tr><td>speeding up (constant a)</td><td>curve getting steeper</td><td>straight line sloping up</td></tr>
<tr><td>slowing down</td><td>curve getting less steep</td><td>straight line sloping down</td></tr>
<tr><td>moving back towards the start</td><td>line sloping down</td><td>below the time axis (negative v)</td></tr></table></div>` },
    3,
    { h: 'Instantaneous rate of change', html: `
<p>On a curved graph the gradient changes from moment to moment. The gradient <b>at a particular point</b> is the gradient of the <b>tangent</b> — a straight line that just touches the curve there. This is the <b>instantaneous</b> velocity (on a d–t graph) or acceleration (on a v–t graph). The average over an interval is the gradient of the chord joining two points.</p>
[[d:gradient]]` },
    5,
    { h: 'Area under a velocity–time graph', html: `
<p>Area = velocity × time = displacement. Split the area into rectangles and triangles, or count squares and multiply by what one square represents. Area <b>below</b> the time axis counts as negative displacement (moving backwards) but still adds to the total distance.</p>
<div class="box tip"><b class="lbl">Check the units</b><p>Area of one square = (value per square on y) × (value per square on x), e.g. 2 m/s × 5 s = 10 m.</p></div>` },
    6
  ],
  quiz: [3, 4, 7, 9, 10, 11],
  addQuiz: [
    { q: 'On a velocity–time graph, a straight line sloping downwards to the axis shows', o: ['uniform deceleration to rest', 'moving backwards', 'constant velocity', 'increasing acceleration'], x: 'Negative gradient.' },
    { q: 'A v–t graph rises from 0 to 12 m/s in 4 s. The distance travelled in this time is', o: ['24 m', '48 m', '3 m', '12 m'], x: '½ × 4 × 12.' },
    { q: 'The instantaneous velocity at a point on a curved d–t graph is', o: ['the gradient of the tangent at that point', 'the area under the curve', 'the y-value at that point', 'total distance ÷ total time'], x: 'Tangent.' },
    { q: 'A d–t graph line slopes downwards. The object is', o: ['moving back towards the origin', 'slowing down', 'stationary', 'accelerating'], x: 'Displacement decreasing.' }
  ],
  cards: [6, 7, 8, 11], addCards: [['Gradient of a tangent on a d–t graph?', 'Instantaneous velocity.'], ['Area under a v–t graph?', 'Displacement (distance travelled).'], ['v–t graph below the time axis?', 'Moving in the negative direction.'], ['Shape of a d–t graph for constant acceleration?', 'A curve that gets steeper (parabola).']],
  exam: [0, 1, 3],
  addExam: [{ q: 'A lift starts from rest, accelerates uniformly to 3.0 m/s in 2.0 s, moves at constant speed for 6.0 s, then decelerates uniformly to rest in 3.0 s. (a) Sketch the velocity–time graph. (b) Calculate the acceleration in the first 2.0 s. (c) Calculate the total distance travelled.', m: 6, cr: 'A', ms: ['Graph: straight rise 0–2 s, horizontal 2–8 s, straight fall 8–11 s with labelled axes.', 'a = 3.0 ÷ 2.0 = 1.5 m/s²', 'Area 1 = ½ × 2.0 × 3.0 = 3.0 m', 'Area 2 = 6.0 × 3.0 = 18 m', 'Area 3 = ½ × 3.0 × 3.0 = 4.5 m', 'Total = 25.5 m (≈ 26 m)'] }],
  worked: [3],
  eqs: [['v = "gradient of" s"–"t', 'velocity from a displacement–time graph'], ['a = "gradient of" v"–"t', 'acceleration from a velocity–time graph'], ['s = "area under" v"–"t', 'displacement from a velocity–time graph']],
  pitfalls: ['Reading a d–t graph as if it were a v–t graph.', 'Finding the area under a d–t graph (it has no meaning).', 'Using the gradient of a chord when the question asks for an instantaneous value.', 'Forgetting to convert the area of one square into real units.'],
  sims: ['motion', 'skydiver'], gens: ['vtarea1', 'acc1', 'acc2']
}));

TOPICS.push({
  id: '2.3', unit: '2', strand: 1, as: [2], ref: 'Strand 1 · AS 2', title: 'The suvat equations', short: 'Predicting uniformly accelerated motion',
  summary: 'For uniform acceleration, five quantities — s, u, v, a, t — are linked by four equations. Choose the right one, keep a sign convention, and you can predict where a particle will be and how fast it will be moving.',
  spec: ['Define acceleration as the rate of change of velocity', 'Use v = u + at, s = ½(u + v)t, s = ut + ½at² and v² = u² + 2as for uniform acceleration', 'Select the appropriate equation by listing known and unknown quantities', 'Apply a sign convention, including for objects thrown upwards', 'Solve free-fall problems using a = g = 9.8 m/s² (air resistance negligible)', 'Recognise when suvat cannot be used (non-uniform acceleration)'],
  learn: [
    { h: 'Acceleration', html: `
<div class="box def"><b class="lbl">Definition</b><p>acceleration = change in velocity ÷ time taken &nbsp; $a = @frac{v - u}{t}$</p><p class="small">a in m s⁻², u = initial velocity, v = final velocity (m s⁻¹), t in s. A negative acceleration in the direction of motion is a deceleration.</p></div>
<p>Typical values: a car pulling away 2–3 m s⁻²; a sprinter’s start 5 m s⁻²; free fall 9.8 m s⁻²; emergency braking −7 m s⁻².</p>` },
    { h: 'The equations of uniformly accelerated motion', html: `
<div class="tbl"><table><tr><th>Equation</th><th>Missing quantity</th></tr>
<tr><td>$v = u + at$</td><td>s</td></tr>
<tr><td>$s = @frac{(u + v)}{2}t$</td><td>a</td></tr>
<tr><td>$s = ut + @frac{1}{2}at^2$</td><td>v</td></tr>
<tr><td>$v^2 = u^2 + 2as$</td><td>t</td></tr></table></div>
<p>Each equation leaves out one of the five quantities. <b>List what you know and what you want</b>; pick the equation that does not contain the quantity you neither know nor need.</p>
<p>The equations come from the v–t graph of uniform acceleration: the gradient is a (giving v = u + at) and the area of the trapezium is s (giving s = ½(u + v)t). Combining these gives the other two.</p>` },
    { h: 'Signs and free fall', html: `
<p>Choose a positive direction (usually up, or the initial direction of motion) and stick to it. For a ball thrown <b>upwards</b> at 15 m/s with up positive: u = +15 m s⁻¹, a = −9.8 m s⁻². At the highest point v = 0.</p>
<ul><li>Time to the top: 0 = 15 − 9.8t → t = 1.53 s.</li><li>Maximum height: 0 = 15² − 2 × 9.8 × s → s = 11.5 m.</li><li>Back at the hand: s = 0, so 0 = 15t − 4.9t² → t = 3.06 s (twice the time to the top).</li></ul>
<div class="box warn"><b class="lbl">Limits of the model</b><p>suvat only works for <b>uniform</b> (constant) acceleration. A skydiver, a car with changing engine force, or anything where air resistance matters needs graphs or a computer model instead.</p></div>` }
  ],
  eqs: [['v = u + at', ''], ['s = @frac{(u + v)}{2}t', ''], ['s = ut + @frac{1}{2}at^2', ''], ['v^2 = u^2 + 2as', '']],
  worked: [
    { q: 'A car accelerates uniformly from 8.0 m/s to 20 m/s over 84 m. Find its acceleration and the time taken.', s: ['Known: u = 8.0, v = 20, s = 84. Want a: use $v^2 = u^2 + 2as$', '$400 = 64 + 168a$ → $a = 2.0 "m s"^{-2}$', 'Time: $v = u + at$ → $20 = 8.0 + 2.0t$ → $t = 6.0 "s"$'], a: 'a = 2.0 m s⁻², t = 6.0 s' },
    { q: 'A stone is dropped from rest from a bridge and hits the water 2.5 s later. How high is the bridge? (g = 9.8 m s⁻², ignore air resistance)', s: ['Down positive: u = 0, a = 9.8, t = 2.5, want s', '$s = ut + @frac{1}{2}at^2 = 0 + 0.5 × 9.8 × 2.5^2$', '$s = 30.6 "m"$ ≈ 31 m'], a: '31 m' },
    { q: 'A ball is kicked vertically upwards at 12 m/s. How high does it rise?', s: ['Up positive: u = 12, v = 0, a = −9.8', '$v^2 = u^2 + 2as$ → $0 = 144 - 19.6s$', '$s = 7.3 "m"$'], a: '7.3 m' }
  ],
  pitfalls: ['Using suvat when the acceleration is not constant.', 'Mixing up u and v.', 'Forgetting that g is negative when up is positive.', 'Assuming v = 0 at the bottom — it is zero at the top of the flight.', 'Using s = vt when the object is accelerating.'],
  cards: [
    ['What do s, u, v, a, t stand for?', 'Displacement, initial velocity, final velocity, acceleration, time.'],
    ['Equation without s?', 'v = u + at'], ['Equation without a?', 's = ½(u + v)t'], ['Equation without v?', 's = ut + ½at²'], ['Equation without t?', 'v² = u² + 2as'],
    ['Condition for suvat?', 'Uniform (constant) acceleration.'], ['Velocity at the top of a vertical throw?', 'Zero.'], ['Acceleration of free fall?', '9.8 m s⁻² downwards.'],
    ['How do you choose the equation?', 'List known and wanted; use the one without the quantity you don’t have or need.']
  ],
  quiz: [
    { q: 'Which equation does NOT contain time?', o: ['v² = u² + 2as', 'v = u + at', 's = ut + ½at²', 's = ½(u + v)t'], x: 'Use it when t is not given.' },
    { q: 'A bike accelerates from rest at 2.0 m/s² for 5.0 s. Its final velocity is', o: ['10 m/s', '2.5 m/s', '25 m/s', '7.0 m/s'], x: 'v = 0 + 2.0 × 5.0.' },
    { q: 'A car slows from 20 m/s to 0 in 4.0 s. The distance travelled is', o: ['40 m', '80 m', '20 m', '160 m'], x: 's = ½(20 + 0) × 4.0.' },
    { q: 'An object falls from rest for 3.0 s (g = 9.8 m/s²). It falls', o: ['44 m', '29 m', '88 m', '15 m'], x: '½ × 9.8 × 9.' },
    { q: 'A ball is thrown straight up. At its highest point', o: ['its velocity is zero and its acceleration is 9.8 m/s² downwards', 'its velocity and acceleration are both zero', 'its acceleration is zero', 'its velocity is 9.8 m/s'], x: 'Gravity still acts.' },
    { q: 'The suvat equations apply only when', o: ['the acceleration is constant', 'the velocity is constant', 'the object starts from rest', 'air resistance is large'], x: 'Uniform acceleration.' },
    { q: 'A train accelerates from 10 m/s to 30 m/s at 0.50 m/s². The distance covered is', o: ['800 m', '400 m', '40 m', '1600 m'], x: '(900 − 100)/(2 × 0.5).' },
    { q: 'A sprinter accelerates uniformly from rest and covers 9.0 m in 2.0 s. Her acceleration is', o: ['4.5 m/s²', '2.25 m/s²', '9.0 m/s²', '18 m/s²'], x: '9.0 = ½a × 4.' }
  ],
  exam: [
    { q: 'A stone is thrown vertically upwards from the edge of a cliff at 8.0 m/s. It lands in the sea 30 m below the cliff top. Taking g = 9.8 m/s² and ignoring air resistance, calculate (a) the maximum height above the cliff top, (b) the speed with which it hits the sea.', m: 5, cr: 'A', ms: ['Up positive: 0 = 8.0² − 2 × 9.8 × s', 's = 3.3 m above the cliff', 'For the whole flight s = −30 m: v² = 8.0² + 2 × (−9.8) × (−30)', 'v² = 64 + 588 = 652', 'v = 25.5 m/s (≈ 26 m/s)'] },
    { q: 'Explain why the suvat equations give a poor prediction for the fall of a feather but a good prediction for a falling steel ball over a few metres.', m: 3, cr: 'A', ms: ['suvat assumes constant acceleration (g).', 'For the feather, air resistance is large compared with its weight, so acceleration decreases rapidly / it reaches terminal velocity.', 'For the steel ball, air resistance is negligible over short distances, so acceleration ≈ 9.8 m/s² constant.'] },
    { q: 'Derive v² = u² + 2as from v = u + at and s = ½(u + v)t.', m: 3, cr: 'A', ms: ['t = (v − u)/a', 's = ½(u + v)(v − u)/a', '2as = v² − u² → v² = u² + 2as'] }
  ],
  sims: ['suvat'], gens: ['suv1', 'suv2', 'suvatv', 'suvats', 'suvatup']
});

TOPICS.push(lw('5.1', {
  id: '2.4', unit: '2', strand: 2, as: [5, 6], ref: 'Strand 2 · AS 5–6', title: 'Forces, mass, weight and fields', short: 'Contact and non-contact forces, resultant forces',
  summary: 'Forces are interactions. Identify contact and non-contact (field) forces, distinguish mass from weight, find the gravitational field strength on other worlds, and add forces to find the resultant.',
  spec: ['Classify forces as contact (friction, drag, normal reaction, tension, upthrust) or non-contact (gravitational, electric, magnetic)', 'Describe the difference between mass (kg, amount of matter, same everywhere) and weight (N, the gravitational force, depends on g)', 'Use W = mg; g = 9.8 N/kg on Earth', 'Describe a gravitational field and how its strength decreases with distance', 'Draw free-body diagrams and determine the resultant of several forces'],
  learn: [1, 2,
    { h: 'Gravitational fields: how far can forces reach?', html: `
<p>A <b>field</b> is a region where an object feels a force without contact. Every mass is surrounded by a gravitational field; the <b>gravitational field strength</b> g is the force per kilogram: $g = @frac{W}{m}$ (N/kg).</p>
<div class="tbl"><table><tr><th>Place</th><th>g / N kg⁻¹</th></tr><tr><td>Earth (surface)</td><td>9.8</td></tr><tr><td>Moon</td><td>1.6</td></tr><tr><td>Mars</td><td>3.7</td></tr><tr><td>Jupiter (cloud tops)</td><td>25</td></tr><tr><td>International Space Station (400 km up)</td><td>8.7</td></tr></table></div>
<p>Field strength falls with distance — for a planet it follows an <b>inverse-square law</b>: double the distance from the centre and g falls to a quarter. It never reaches exactly zero, which is why the Sun holds Neptune in orbit 4.5 billion km away. Astronauts on the ISS still have 89% of their Earth weight; they float because they are in free fall around the Earth.</p>
[[d:fieldfall]]` },
    3, 4],
  quiz: 'all',
  addQuiz: [{ q: 'An astronaut of mass 80 kg stands on Mars (g = 3.7 N/kg). Her weight is', o: ['296 N', '784 N', '80 N', '21.6 N'], x: '80 × 3.7.' }, { q: 'Moving twice as far from the centre of a planet, the gravitational field strength becomes', o: ['one quarter', 'one half', 'twice as big', 'zero'], x: 'Inverse square.' }],
  addCards: [['Gravitational field strength?', 'Force per unit mass, g = W/m (N/kg).'], ['g on the Moon?', '1.6 N/kg'], ['How does g change with distance from a planet?', 'Inverse square: double distance → quarter g.']],
  addExam: [{ q: 'A space probe of mass 500 kg is weighed on Earth (g = 9.8 N/kg) and later lands on Mars (g = 3.7 N/kg). (a) State its mass on Mars. (b) Calculate the difference in its weight. (c) Explain why the probe is still pulled by the Earth when it is far into space.', m: 4, cr: 'A', ms: ['500 kg — mass does not change.', 'Weight on Earth 4900 N; on Mars 1850 N', 'Difference 3050 N (≈ 3.1 kN)', 'The gravitational field gets weaker with distance (inverse square) but never becomes zero.'] }],
  sims: ['forces'], gens: ['wmg1', 'wmg2', 'res1']
}));

TOPICS.push(lw('5.6', {
  id: '2.5', unit: '2', strand: 2, as: [7], ref: 'Strand 2 · AS 7', title: 'Newton’s laws of motion', short: 'Resultant force and change in motion',
  summary: 'Newton’s three laws connect forces to motion: a resultant force changes velocity, F = ma predicts how much, and forces always come in equal and opposite pairs.',
  spec: ['State Newton’s first law: an object stays at rest or at constant velocity unless a resultant force acts', 'Apply F = ma, with F the resultant force', 'Describe inertia and inertial mass', 'State Newton’s third law and identify third-law pairs (same type, equal size, opposite direction, acting on different objects)', 'Relate the resultant force on an object to its change in motion, including falling objects'],
  learn: [0, 1, 3],
  quiz: [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11],
  cards: [0, 1, 2, 3, 4, 5, 6, 7, 11],
  exam: [1, 2],
  addExam: [{ q: 'A 1200 kg car pulls a 600 kg trailer. The engine provides a driving force of 4500 N; total resistive forces on the car and trailer are 900 N. Calculate (a) the acceleration, (b) the tension in the tow bar if the trailer experiences 300 N of the resistance.', m: 5, cr: 'A', ms: ['Resultant = 4500 − 900 = 3600 N', 'a = 3600 ÷ 1800 = 2.0 m/s²', 'Trailer: T − 300 = 600 × 2.0', 'T = 1200 + 300', 'T = 1500 N'] }],
  sims: ['newton2'], gens: ['fma1', 'fma2', 'fma3', 'fma4']
}));

TOPICS.push({
  id: '2.6', unit: '2', strand: 2, as: [6, 7], ref: 'Strand 2 · AS 6–7', title: 'Resolving forces and inclined planes', short: 'Components parallel and perpendicular to a slope',
  summary: 'On a slope, resolve the weight into a component down the slope (mg sin θ) and one into the slope (mg cos θ). The normal reaction balances the perpendicular part; friction and the parallel part decide what happens next.',
  spec: ['Resolve a force F into perpendicular components F cos θ and F sin θ', 'On an incline of angle θ, resolve the weight into mg sin θ (parallel) and mg cos θ (perpendicular to the plane)', 'State that the normal reaction R = mg cos θ when there is no acceleration perpendicular to the plane', 'Find the resultant force along the plane and hence the acceleration', 'Draw clear free-body diagrams for objects on slopes'],
  learn: [
    { h: 'Resolving a force', html: `
<p>Any force can be replaced by two perpendicular <b>components</b> that have the same overall effect. For a force F at angle θ to the horizontal:</p>
<div class="box def"><b class="lbl">Components</b><p>horizontal: $F_x = F cos θ$ &nbsp; vertical: $F_y = F sin θ$</p></div>
<p>A suitcase pulled with 50 N at 30° above the horizontal: horizontal 50 cos 30° = 43 N (moves it along) and vertical 50 sin 30° = 25 N (partly lifts it, reducing the normal reaction and friction).</p>` },
    { h: 'Objects on an inclined plane', html: `
[[d:incline]]
<p>Resolve <b>parallel</b> and <b>perpendicular</b> to the slope, not horizontally and vertically:</p>
<ul><li>Down the slope: $mg sin θ$ — this tries to slide the object down.</li><li>Into the slope: $mg cos θ$ — balanced by the <b>normal reaction</b> R, so $R = mg cos θ$.</li><li>Friction acts along the slope, opposing motion (or the tendency to move).</li></ul>
<p>Check with the extremes: at θ = 0° (flat), sin 0 = 0 so nothing pulls it along and R = mg; at θ = 90° (vertical), the whole weight acts down the “slope”.</p>` },
    { h: 'Finding the acceleration down a slope', html: `
<div class="box def"><b class="lbl">Newton’s second law along the slope</b><p>$ma = mg sin θ - F_{friction}$</p></div>
<p>Without friction, a = g sin θ — independent of mass. Galileo used gentle slopes to “slow down” free fall so he could time it. With friction F = μR = μmg cos θ, a = g(sin θ − μ cos θ).</p>` }
  ],
  eqs: [['F_x = F cos θ', 'component along the reference direction'], ['F_y = F sin θ', 'perpendicular component'], ['F_{∥} = mg sin θ', 'weight component down a slope'], ['R = mg cos θ', 'normal reaction on a slope']],
  worked: [
    { q: 'A 12 kg box rests on a ramp at 25° to the horizontal. Calculate the components of its weight parallel and perpendicular to the ramp.', s: ['W = mg = 12 × 9.8 = 117.6 N', 'Parallel: 117.6 sin 25° = 49.7 N', 'Perpendicular: 117.6 cos 25° = 106.6 N'], a: '50 N down the ramp; 107 N into the ramp' },
    { q: 'A skier of mass 70 kg slides down a 20° slope. Friction is 60 N. Find her acceleration.', s: ['Down-slope component: 70 × 9.8 × sin 20° = 234.6 N', 'Resultant = 234.6 − 60 = 174.6 N', '$a = @frac{174.6}{70} = 2.5 "m s"^{-2}$'], a: '2.5 m s⁻²' }
  ],
  pitfalls: ['Resolving horizontally and vertically instead of along and perpendicular to the slope.', 'Swapping sin and cos — check with θ = 0.', 'Drawing the normal reaction vertically instead of perpendicular to the surface.', 'Leaving the calculator in radians.'],
  cards: [
    ['Horizontal component of F at θ above horizontal?', 'F cos θ'], ['Vertical component?', 'F sin θ'], ['Weight component down a slope?', 'mg sin θ'], ['Weight component into a slope?', 'mg cos θ'],
    ['Normal reaction on a slope (no lift)?', 'R = mg cos θ'], ['Acceleration down a frictionless slope?', 'g sin θ'], ['Direction of the normal reaction?', 'Perpendicular to the surface.'], ['Why did Galileo use slopes?', 'To slow down free fall so it could be timed.']
  ],
  quiz: [
    { q: 'The component of weight down a slope at angle θ is', o: ['mg sin θ', 'mg cos θ', 'mg tan θ', 'mg'], x: 'Zero when θ = 0.' },
    { q: 'The normal reaction on a block resting on a slope is', o: ['mg cos θ', 'mg sin θ', 'mg', 'zero'], x: 'Balances the perpendicular component.' },
    { q: 'A 10 N force acts at 60° to the horizontal. Its horizontal component is', o: ['5.0 N', '8.7 N', '10 N', '17 N'], x: '10 cos 60°.' },
    { q: 'As a ramp is made steeper, the normal reaction on a block', o: ['decreases', 'increases', 'stays the same', 'becomes equal to the weight'], x: 'cos θ falls.' },
    { q: 'A frictionless slope is at 30°. The acceleration of a sliding block is', o: ['4.9 m/s²', '9.8 m/s²', '8.5 m/s²', '0 m/s²'], x: 'g sin 30°.' },
    { q: 'The normal reaction force acts', o: ['perpendicular to the surface', 'vertically upwards always', 'down the slope', 'parallel to the surface'], x: 'Normal = at right angles.' },
    { q: 'A 5.0 kg block on a frictionless 30° slope has a resultant force of', o: ['24.5 N down the slope', '49 N down the slope', '42 N down the slope', 'zero'], x: '5.0 × 9.8 × 0.5.' }
  ],
  exam: [
    { q: 'A 20 kg crate is pulled up a 15° ramp at constant speed by a rope parallel to the ramp. Friction on the crate is 40 N. (a) Draw a free-body diagram. (b) Calculate the tension in the rope. (c) Calculate the normal reaction.', m: 6, cr: 'A', ms: ['Four forces: weight vertically down, normal reaction perpendicular to ramp, tension up the ramp, friction down the ramp.', 'Constant speed → resultant force zero.', 'Weight component down ramp = 20 × 9.8 × sin 15° = 50.7 N', 'T = 50.7 + 40 = 91 N', 'R = 20 × 9.8 × cos 15°', 'R = 189 N'] },
    { q: 'Explain why a cyclist freewheeling down a steeper hill accelerates more quickly.', m: 2, cr: 'A', ms: ['Component of weight down the slope (mg sin θ) is larger.', 'Bigger resultant force → bigger acceleration (F = ma).'] }
  ],
  sims: ['incline'], gens: ['resolve', 'slopeacc']
});
