/* ==========================================================
   UNIT 1 · Motion, Energy and Matter
   ========================================================== */
TOPICS.push({
  id: '1.1', unit: '1', title: 'Basic Physics', short: 'Units, vectors, density, moments',
  summary: 'The toolkit for everything else: SI base units, checking equations, handling vectors, density and the principle of moments.',
  spec: [
    'State the SI base units (kg, m, s, A, K, mol) and express derived units in base units',
    'Use prefixes from pico (10⁻¹²) to tera (10¹²)',
    'Use base units to check that an equation is homogeneous',
    'Distinguish between scalar and vector quantities with examples',
    'Add and subtract coplanar vectors by drawing and by calculation',
    'Resolve a vector into two perpendicular components',
    'Use density ρ = m / V',
    'Define the moment of a force and apply the principle of moments',
    'Understand centre of gravity and use it in calculations',
    'State and apply the two conditions for a body to be in equilibrium'
  ],
  learn: [
    { h: 'SI base units', html: `
<p>Every physical quantity is a <b>number × unit</b>. The Système International defines six base units that you need at A level; every other unit is built from them.</p>
<div class="tbl"><table><tr><th>Base quantity</th><th>Unit</th><th>Symbol</th></tr>
<tr><td>mass</td><td>kilogram</td><td>kg</td></tr><tr><td>length</td><td>metre</td><td>m</td></tr><tr><td>time</td><td>second</td><td>s</td></tr>
<tr><td>electric current</td><td>ampere</td><td>A</td></tr><tr><td>temperature</td><td>kelvin</td><td>K</td></tr><tr><td>amount of substance</td><td>mole</td><td>mol</td></tr></table></div>
<p>Derived units come from the defining equation. For example, force $F = ma$ so the newton is kg m s<sup>−2</sup>; energy $W = Fx$ so the joule is kg m<sup>2</sup> s<sup>−2</sup>; charge $Q = It$ so the coulomb is A s.</p>
<div class="tbl"><table><tr><th>Prefix</th><th>Symbol</th><th>Factor</th><th>Prefix</th><th>Symbol</th><th>Factor</th></tr>
<tr><td>pico</td><td>p</td><td>10<sup>−12</sup></td><td>kilo</td><td>k</td><td>10<sup>3</sup></td></tr>
<tr><td>nano</td><td>n</td><td>10<sup>−9</sup></td><td>mega</td><td>M</td><td>10<sup>6</sup></td></tr>
<tr><td>micro</td><td>μ</td><td>10<sup>−6</sup></td><td>giga</td><td>G</td><td>10<sup>9</sup></td></tr>
<tr><td>milli</td><td>m</td><td>10<sup>−3</sup></td><td>tera</td><td>T</td><td>10<sup>12</sup></td></tr></table></div>
<div class="box tip"><b class="lbl">Exam tip</b><p>Area and volume prefixes catch people out: 1 mm<sup>2</sup> = 10<sup>−6</sup> m<sup>2</sup> and 1 cm<sup>3</sup> = 10<sup>−6</sup> m<sup>3</sup>. Square or cube the factor, not just the number.</p></div>` },
    { h: 'Homogeneity of equations', html: `
<p>An equation is <b>homogeneous</b> if the base units on both sides are the same. Every correct physics equation must be homogeneous, so this is a quick way to spot mistakes.</p>
<div class="box def"><b class="lbl">Worked check</b><p>Is $v^2 = u^2 + 2ax$ homogeneous?</p><p>LHS: (m s<sup>−1</sup>)<sup>2</sup> = m<sup>2</sup> s<sup>−2</sup>. RHS: m<sup>2</sup> s<sup>−2</sup> + (m s<sup>−2</sup>)(m) = m<sup>2</sup> s<sup>−2</sup>. Both sides match, so it is homogeneous.</p></div>
<p>Homogeneity is necessary but <b>not sufficient</b>: pure numbers such as the ½ in $@frac{1}{2}mv^2$ or 2π have no units, so a homogeneous equation can still have the wrong numerical factor.</p>` },
    { h: 'Scalars and vectors', html: `
<div class="box def"><b class="lbl">Definitions</b><p>A <b>scalar</b> has magnitude only. A <b>vector</b> has magnitude and direction.</p></div>
<div class="tbl"><table><tr><th>Scalars</th><th>Vectors</th></tr>
<tr><td>distance, speed, mass, time, energy, power, temperature, density, charge, pd</td><td>displacement, velocity, acceleration, force (including weight), momentum, electric and gravitational field strength</td></tr></table></div>
<p>To add vectors draw them <b>tip-to-tail</b>; the resultant runs from the start of the first to the tip of the last. For two perpendicular vectors use Pythagoras and trigonometry. To subtract a vector, add its negative.</p>
[[d:vectors]]
<p>Any vector can be <b>resolved</b> into two perpendicular components: $F @,"cos"@,θ$ along the reference direction and $F @,"sin"@,θ$ perpendicular to it. Resolving turns a 2-D problem into two separate 1-D problems.</p>` },
    { h: 'Density', html: `
<p>$ρ = @frac{m}{V}$, measured in kg m<sup>−3</sup>. Water is about 1000 kg m<sup>−3</sup>; steel about 7800 kg m<sup>−3</sup>; air about 1.2 kg m<sup>−3</sup>.</p>
<p>For a regular solid, find V from measured dimensions (vernier callipers or micrometer). For an irregular solid, use displacement of water in a measuring cylinder or a displacement can. Mass comes from a top-pan balance.</p>` },
    { h: 'Moments and equilibrium', html: `
<div class="box def"><b class="lbl">Definition</b><p>The <b>moment</b> of a force about a point = force × <b>perpendicular</b> distance from the point to the line of action of the force. Unit: N m.</p></div>
<div class="box def"><b class="lbl">Principle of moments</b><p>For a body in equilibrium, the sum of the clockwise moments about any point equals the sum of the anticlockwise moments about the same point.</p></div>
[[d:moments]]
<p>The <b>centre of gravity</b> is the point at which the whole weight of a body may be considered to act. For a uniform beam it is at the midpoint.</p>
<div class="box def"><b class="lbl">Conditions for equilibrium</b><ol><li>The resultant force is zero (forces balance in every direction).</li><li>The resultant moment about any point is zero.</li></ol></div>
<div class="box tip"><b class="lbl">Exam tip</b><p>Take moments about the point where an unknown force acts. That force then has zero moment and disappears from the equation.</p></div>` }
  ],
  eqs: [['ρ = @frac{m}{V}', 'density'], ['"moment" = Fd', 'd is the perpendicular distance to the line of action'], ['F_x = F@,"cos"@,θ,  F_y = F@,"sin"@,θ', 'resolving a vector']],
  worked: [
    { q: 'Express the unit of pressure, the pascal, in SI base units.', s: ['Pressure $p = @frac{F}{A}$.', 'Newton = kg m s<sup>−2</sup>; area = m<sup>2</sup>.', 'So Pa = kg m s<sup>−2</sup> ÷ m<sup>2</sup>.'], a: 'kg m<sup>−1</sup> s<sup>−2</sup>' },
    { q: 'Forces of 5.0 N east and 12.0 N north act on a point. Find the resultant.', s: ['Perpendicular, so use Pythagoras: $R = @sqrt{5.0^2 + 12.0^2} = 13.0 "N"$.', 'Angle from east: $"tan"@,θ = 12.0 / 5.0$ so θ = 67.4°.'], a: '13.0 N at 67° north of east' },
    { q: 'A uniform plank 4.0 m long, weight 200 N, rests on supports at each end, A and B. A person of weight 600 N stands 1.0 m from A. Find the support forces.', s: ['Take moments about A (so R<sub>A</sub> has no moment).', 'Clockwise: 200 × 2.0 + 600 × 1.0 = 1000 N m.', 'Anticlockwise: R<sub>B</sub> × 4.0. So R<sub>B</sub> = 250 N.', 'Resultant force zero: R<sub>A</sub> + R<sub>B</sub> = 800 N, so R<sub>A</sub> = 550 N.'], a: 'R<sub>A</sub> = 550 N, R<sub>B</sub> = 250 N' }
  ],
  pitfalls: ['Using the distance along the beam instead of the perpendicular distance to the line of action.', 'Forgetting the weight of the beam itself acts at its centre of gravity.', 'Converting cm<sup>3</sup> to m<sup>3</sup> by dividing by 100 instead of 10<sup>6</sup>.', 'Calling weight a scalar: it is a force, so it is a vector.', 'Claiming a homogeneous equation must be correct.'],
  cards: [
    ['Name the six SI base units needed at A level.', 'kg, m, s, A, K, mol'],
    ['Base units of the newton?', 'kg m s<sup>−2</sup>'],
    ['Base units of the joule?', 'kg m<sup>2</sup> s<sup>−2</sup>'],
    ['Base units of the watt?', 'kg m<sup>2</sup> s<sup>−3</sup>'],
    ['Define a vector quantity.', 'A quantity with both magnitude and direction.'],
    ['What does it mean for an equation to be homogeneous?', 'The base units of every term on each side are the same.'],
    ['Why can a homogeneous equation still be wrong?', 'Dimensionless constants (like ½ or 2π) cannot be checked with units.'],
    ['Define the moment of a force.', 'Force × perpendicular distance from the pivot to the line of action of the force.'],
    ['State the principle of moments.', 'For a body in equilibrium, sum of clockwise moments = sum of anticlockwise moments about any point.'],
    ['Two conditions for equilibrium?', 'Resultant force = 0 and resultant moment = 0.'],
    ['Define centre of gravity.', 'The point through which the entire weight of the body may be considered to act.'],
    ['Components of force F at angle θ to the horizontal?', 'Horizontal $F@,"cos"@,θ$, vertical $F@,"sin"@,θ$.'],
    ['1 cm<sup>3</sup> in m<sup>3</sup>?', '1 × 10<sup>−6</sup> m<sup>3</sup>'],
    ['Density of water?', '1000 kg m<sup>−3</sup> (1.00 g cm<sup>−3</sup>)']
  ],
  quiz: [
    { q: 'Which of these is an SI base unit?', o: ['kelvin', 'newton', 'joule', 'volt'], x: 'The kelvin is the base unit of temperature. The others are derived units.' },
    { q: 'The newton expressed in SI base units is', o: ['kg m s<sup>−2</sup>', 'kg m<sup>2</sup> s<sup>−2</sup>', 'kg m s<sup>−1</sup>', 'kg s<sup>−2</sup>'], x: '$F = ma$: kg × m s<sup>−2</sup>.' },
    { q: 'Which of these is a vector quantity?', o: ['momentum', 'kinetic energy', 'mass', 'temperature'], x: 'Momentum = mass × velocity, so it has a direction.' },
    { q: 'Forces of 3.0 N and 4.0 N act at right angles to each other. The magnitude of their resultant is', o: ['5.0 N', '7.0 N', '1.0 N', '12 N'], x: '√(3² + 4²) = 5.0 N.' },
    { q: 'A 50 N force acts at 30° above the horizontal. Its horizontal component is', o: ['43 N', '25 N', '58 N', '50 N'], x: '50 cos 30° = 43.3 N. (50 sin 30° = 25 N is the vertical component.)' },
    { q: 'The unit of pressure (Pa) in SI base units is', o: ['kg m<sup>−1</sup> s<sup>−2</sup>', 'kg m s<sup>−2</sup>', 'kg m<sup>−2</sup> s<sup>−2</sup>', 'kg m<sup>2</sup> s<sup>−2</sup>'], x: 'Pa = N m<sup>−2</sup> = kg m s<sup>−2</sup> m<sup>−2</sup>.' },
    { q: 'A cube of side 2.0 cm has a mass of 64 g. Its density is', o: ['8000 kg m<sup>−3</sup>', '32 000 kg m<sup>−3</sup>', '2000 kg m<sup>−3</sup>', '8.0 kg m<sup>−3</sup>'], x: 'V = 8.0 cm³, so ρ = 8.0 g cm<sup>−3</sup> = 8000 kg m<sup>−3</sup>.' },
    { q: 'A body is in equilibrium when', o: ['the resultant force and the resultant moment are both zero', 'the resultant force is zero only', 'it is stationary', 'the clockwise moments exceed the anticlockwise moments'], x: 'Both conditions are needed. A body can be in equilibrium while moving at constant velocity.' },
    { q: 'The moment of a force about a point is', o: ['force × perpendicular distance from the point to the line of action', 'force × distance from the point to where the force acts', 'force ÷ distance', 'force × distance moved'], x: 'Only the perpendicular distance counts.' },
    { q: 'A homogeneous equation may still be incorrect because', o: ['numerical factors have no units and cannot be checked', 'base units can cancel', 'vectors cannot be checked', 'homogeneity only works for SI units'], x: 'Pure numbers such as ½ or 2π are dimensionless.' },
    { q: '3.2 μm written in metres is', o: ['3.2 × 10<sup>−6</sup> m', '3.2 × 10<sup>−3</sup> m', '3.2 × 10<sup>−9</sup> m', '3.2 × 10<sup>−12</sup> m'], x: 'micro = 10<sup>−6</sup>.' },
    { q: 'A 0.80 m spanner is used to apply a 25 N force perpendicular to the handle. The moment is', o: ['20 N m', '31 N m', '0.032 N m', '25 N m'], x: '25 × 0.80 = 20 N m.' }
  ],
  exam: [
    { q: 'Explain the difference between a scalar and a vector quantity, giving one example of each.', m: 2, ms: ['Scalar has magnitude only; vector has magnitude and direction.', 'Correct example of each (e.g. mass / force).'] },
    { q: 'Show that the equation $x = ut + @frac{1}{2}at^2$ is homogeneous.', m: 3, ms: ['LHS unit: m.', 'ut: m s<sup>−1</sup> × s = m.', '½at²: m s<sup>−2</sup> × s² = m, so all terms are in m.'] },
    { q: 'A uniform metre rule of weight 1.2 N is pivoted at its 30.0 cm mark. A mass hangs at the 5.0 cm mark so that the rule balances horizontally. Calculate the weight of the hanging mass.', m: 3, ms: ['Weight of rule acts at 50.0 cm, i.e. 0.200 m from pivot.', 'Moments: W × 0.250 = 1.2 × 0.200.', 'W = 0.96 N.'] },
    { q: 'Describe how you would determine the density of an irregularly shaped stone.', m: 4, ms: ['Measure mass with a top-pan balance (tare first).', 'Partly fill a measuring cylinder / displacement can with water; record volume.', 'Lower stone in fully submerged; volume displaced = volume of stone (read at eye level, bottom of meniscus).', 'ρ = m / V; repeat and average.'] }
  ],
  sims: ['moments'], gens: ['vecres', 'moments1', 'density1']
});

TOPICS.push({
  id: '1.2', unit: '1', title: 'Kinematics', short: 'Describing motion, suvat, projectiles',
  summary: 'Describing motion with displacement, velocity and acceleration: graphs, the equations of uniformly accelerated motion, free fall and projectiles.',
  spec: [
    'Define displacement, mean and instantaneous speed and velocity, and acceleration',
    'Interpret displacement–time and velocity–time graphs (gradients and areas)',
    'Derive and use the equations for uniformly accelerated motion in a straight line',
    'Describe the motion of bodies falling in the Earth’s gravitational field',
    'Apply the equations to projectiles, treating horizontal and vertical motion independently',
    'Describe how to determine g by free fall (specified practical)'
  ],
  learn: [
    { h: 'Definitions', html: `
<div class="box def"><b class="lbl">Definitions</b><ul>
<li><b>Displacement</b> — the distance in a straight line from a fixed point in a specified direction (vector).</li>
<li><b>Mean speed</b> = total distance ÷ total time (scalar). <b>Instantaneous speed</b> is the rate of change of distance at one instant.</li>
<li><b>Velocity</b> = rate of change of displacement (vector).</li>
<li><b>Acceleration</b> = rate of change of velocity (vector), unit m s<sup>−2</sup>.</li></ul></div>
<p>A runner completing one lap of a 400 m track in 50 s has mean speed 8.0 m s<sup>−1</sup> but mean velocity zero, because the displacement is zero.</p>` },
    { h: 'Motion graphs', html: `
<p>Two rules cover almost everything:</p>
<ul><li>Gradient of a displacement–time graph = velocity. For a curve, draw a tangent to find the instantaneous value.</li>
<li>Gradient of a velocity–time graph = acceleration. <b>Area</b> under a velocity–time graph = displacement.</li></ul>
[[d:st-graph]]
[[d:vt-area]]
<div class="box tip"><b class="lbl">Exam tip</b><p>When calculating an area under a v–t graph, split it into rectangles and triangles, and read the scales carefully (km h<sup>−1</sup> or minutes are common traps).</p></div>` },
    { h: 'Equations of uniformly accelerated motion', html: `
<p>For <b>constant acceleration</b> in a straight line, with u = initial velocity, v = final velocity, a = acceleration, t = time and x = displacement:</p>
<div class="box eq">$v = u + at$ &nbsp;&nbsp; $x = @frac{1}{2}(u + v)t$ &nbsp;&nbsp; $x = ut + @frac{1}{2}at^2$ &nbsp;&nbsp; $v^2 = u^2 + 2ax$</div>
<h4>Where they come from</h4>
<p>From the definition of acceleration, $a = (v - u)/t$, so $v = u + at$. The v–t graph is a straight line, so the displacement (area) is the average velocity × time: $x = @frac{1}{2}(u + v)t$. Substituting for v gives $x = ut + @frac{1}{2}at^2$; eliminating t gives $v^2 = u^2 + 2ax$.</p>
<div class="box tip"><b class="lbl">Method</b><p>List s, u, v, a, t. Mark the one you want and the three you know, then pick the equation that contains exactly those four. Choose a positive direction and stick to it (e.g. up = positive so g = −9.81 m s<sup>−2</sup>).</p></div>` },
    { h: 'Free fall and terminal velocity', html: `
<p>Near the Earth’s surface, with negligible air resistance, all bodies fall with the same acceleration g = 9.81 m s<sup>−2</sup>, independent of mass.</p>
<p>With air resistance, drag increases with speed. The resultant force (weight − drag) falls, so acceleration decreases until drag equals weight. The body then falls at <b>terminal velocity</b>.</p>
[[d:terminal]]` },
    { h: 'Projectiles', html: `
<p>Horizontal and vertical motions are <b>independent</b>. With no air resistance:</p>
<ul><li>Horizontal: no force, so constant velocity $u_x = u@,"cos"@,θ$ and $x = u_x t$.</li>
<li>Vertical: constant acceleration g downwards, initial velocity $u_y = u@,"sin"@,θ$; use suvat.</li></ul>
<p>Time links the two. At the top of the path, the vertical velocity is zero but the horizontal velocity is unchanged, and the acceleration is still g downwards.</p>
[[d:projectile]]
<div class="box why"><b class="lbl">Why?</b><p>A ball dropped and a ball projected horizontally from the same height land at the same time: the horizontal motion has no effect on the vertical motion.</p></div>` },
    { h: 'Specified practical: g by free fall', html: `
<p>Drop a steel ball from rest through a measured height h, timing the fall with an electromagnet and trapdoor switch connected to an electronic timer (or with light gates). Repeat for a range of heights.</p>
<p>Since $h = @frac{1}{2}gt^2$, a graph of h against t<sup>2</sup> is a straight line through the origin with gradient g/2 (or 2h against t<sup>2</sup> has gradient g). Measure h to the bottom of the ball; keep the ball small and dense so that air resistance is negligible.</p>` }
  ],
  eqs: [['v = u + at', ''], ['x = @frac{1}{2}(u + v)t', ''], ['x = ut + @frac{1}{2}at^2', ''], ['v^2 = u^2 + 2ax', ''], ['u_x = u@,"cos"@,θ, u_y = u@,"sin"@,θ', 'projectile components']],
  worked: [
    { q: 'A car travelling at 25 m s<sup>−1</sup> brakes uniformly and stops in 50 m. Find the deceleration and the stopping time.', s: ['Known: u = 25, v = 0, x = 50. Use $v^2 = u^2 + 2ax$.', '0 = 625 + 100a, so a = −6.25 m s<sup>−2</sup>.', 't = (v − u)/a = (0 − 25)/(−6.25) = 4.0 s.'], a: 'Deceleration 6.25 m s<sup>−2</sup>; time 4.0 s' },
    { q: 'A ball is kicked horizontally at 15 m s<sup>−1</sup> from the top of a 20 m cliff. Find (a) the time to land, (b) how far out it lands, (c) its speed on landing.', s: ['Vertical: u<sub>y</sub> = 0, x = 20 m, a = 9.81 m s<sup>−2</sup>. $20 = @frac{1}{2}(9.81)t^2$ so t = 2.02 s.', 'Horizontal: 15 × 2.02 = 30.3 m.', 'Vertical velocity at landing: v<sub>y</sub> = 9.81 × 2.02 = 19.8 m s<sup>−1</sup>.', 'Speed = √(15² + 19.8²) = 24.8 m s<sup>−1</sup>.'], a: '(a) 2.02 s (b) 30 m (c) 25 m s<sup>−1</sup>' },
    { q: 'A ball is launched at 20 m s<sup>−1</sup> at 30° above horizontal ground. Find its maximum height and range.', s: ['u<sub>x</sub> = 20 cos 30° = 17.3 m s<sup>−1</sup>; u<sub>y</sub> = 20 sin 30° = 10.0 m s<sup>−1</sup>.', 'Max height: 0 = 10.0² − 2(9.81)h, so h = 5.10 m.', 'Time to top = 10.0/9.81 = 1.02 s; total time = 2.04 s.', 'Range = 17.3 × 2.04 = 35.3 m.'], a: 'Height 5.1 m; range 35 m' }
  ],
  pitfalls: ['Using suvat when the acceleration is not constant.', 'Mixing sign conventions: if up is positive, g is −9.81 m s<sup>−2</sup>.', 'Thinking the velocity is zero at the top of a projectile path — only the vertical component is.', 'Using the whole launch speed in the horizontal or vertical equation instead of the component.', 'Reading a displacement–time gradient from a chord when an instantaneous value (tangent) is needed.'],
  cards: [
    ['Define acceleration.', 'Rate of change of velocity.'],
    ['What does the gradient of a v–t graph give?', 'Acceleration.'],
    ['What does the area under a v–t graph give?', 'Displacement.'],
    ['What does the gradient of an s–t graph give?', 'Velocity.'],
    ['Condition for suvat equations?', 'Constant (uniform) acceleration in a straight line.'],
    ['State the suvat equation without t.', '$v^2 = u^2 + 2ax$'],
    ['State the suvat equation without v.', '$x = ut + @frac{1}{2}at^2$'],
    ['State the suvat equation without a.', '$x = @frac{1}{2}(u + v)t$'],
    ['Horizontal acceleration of a projectile (no air resistance)?', 'Zero — horizontal velocity is constant.'],
    ['Acceleration at the top of a projectile’s path?', 'g = 9.81 m s<sup>−2</sup> downwards.'],
    ['Why does a skydiver reach terminal velocity?', 'Drag rises with speed until it equals the weight; resultant force and acceleration become zero.'],
    ['Launch angle for maximum range on level ground (no air resistance)?', '45°'],
    ['Graph to plot for g by free fall?', 'h against t<sup>2</sup>: gradient = g/2.']
  ],
  quiz: [
    { q: 'The gradient of a displacement–time graph represents', o: ['velocity', 'acceleration', 'displacement', 'force'], x: 'Velocity = rate of change of displacement.' },
    { q: 'The area under a velocity–time graph represents', o: ['displacement', 'acceleration', 'velocity', 'momentum'], x: 'v × t has units of m.' },
    { q: 'An object is dropped from rest and falls freely for 3.0 s. How far does it fall? (g = 9.81 m s<sup>−2</sup>)', o: ['44 m', '29 m', '88 m', '15 m'], x: 'x = ½ × 9.81 × 3.0² = 44.1 m.' },
    { q: 'A car accelerates uniformly from rest to 20 m s<sup>−1</sup> in 8.0 s. The distance it travels is', o: ['80 m', '160 m', '40 m', '20 m'], x: 'x = ½(u + v)t = ½ × 20 × 8.0 = 80 m.' },
    { q: 'At the highest point of a projectile’s path (no air resistance)', o: ['its acceleration is 9.81 m s<sup>−2</sup> downwards', 'its acceleration is zero', 'its velocity is zero', 'its horizontal velocity is zero'], x: 'Only the vertical velocity is zero; gravity still acts.' },
    { q: 'Ball P is dropped from rest; ball Q is thrown horizontally at the same instant from the same height. Ignoring air resistance', o: ['both land at the same time', 'P lands first', 'Q lands first', 'it depends on their masses'], x: 'Vertical motions are identical; horizontal motion is independent.' },
    { q: 'A runner completes one 400 m lap in 50 s, finishing where they started. Their mean velocity is', o: ['0', '8.0 m s<sup>−1</sup>', '4.0 m s<sup>−1</sup>', '16 m s<sup>−1</sup>'], x: 'Displacement is zero, so mean velocity is zero (mean speed is 8.0 m s<sup>−1</sup>).' },
    { q: 'The equations of uniformly accelerated motion can only be used when', o: ['acceleration is constant', 'velocity is constant', 'the object starts from rest', 'there is no gravity'], x: 'They are derived assuming a straight-line v–t graph.' },
    { q: 'A ball is thrown vertically upwards at 12 m s<sup>−1</sup>. Its maximum height is about', o: ['7.3 m', '14.7 m', '1.2 m', '3.7 m'], x: '0 = 12² − 2(9.81)h, so h = 7.3 m.' },
    { q: 'A horizontal line above the time axis on a velocity–time graph means', o: ['constant velocity', 'constant acceleration', 'the object is stationary', 'increasing displacement at an increasing rate'], x: 'Gradient zero → acceleration zero.' },
    { q: 'Ignoring air resistance, the launch angle that gives the greatest range on level ground is', o: ['45°', '30°', '60°', '90°'], x: 'Range = u² sin 2θ / g, maximum when 2θ = 90°.' },
    { q: 'In a g by free fall experiment, a graph of h (y-axis) against t² (x-axis) has gradient', o: ['g / 2', 'g', '2g', '√g'], x: 'h = ½gt², so gradient = ½g.' }
  ],
  exam: [
    { q: 'A cyclist accelerates uniformly from 4.0 m s<sup>−1</sup> to 10.0 m s<sup>−1</sup> in 5.0 s. Calculate (i) the acceleration and (ii) the distance travelled in this time.', m: 3, ms: ['a = (10.0 − 4.0)/5.0', '= 1.2 m s<sup>−2</sup>', 'x = ½(4.0 + 10.0) × 5.0 = 35 m'] },
    { q: 'Describe how to determine the acceleration due to gravity, g, using a free-fall method. Include how the result is obtained from a graph.', m: 6, ms: ['Steel ball held by electromagnet above trapdoor/light gates; timer starts on release, stops on arrival.', 'Measure height h with a metre rule (to bottom of ball); vary h over a suitable range.', 'Repeat each timing and take the mean; identify anomalies.', 'Plot h against t².', 'Straight line through origin as h = ½gt².', 'g = 2 × gradient; state one source of error / improvement (e.g. switch delay, air resistance, use a small dense ball).'] },
    { q: 'A stone is thrown at 18 m s<sup>−1</sup> at 40° above the horizontal from ground level. Calculate its maximum height and horizontal range, assuming air resistance is negligible.', m: 5, ms: ['u<sub>y</sub> = 18 sin 40° = 11.6 m s<sup>−1</sup>; u<sub>x</sub> = 18 cos 40° = 13.8 m s<sup>−1</sup>', 'h = u<sub>y</sub>²/2g = 6.82 m', 't to top = 11.6/9.81 = 1.18 s', 'total time 2.36 s', 'range = 13.8 × 2.36 = 32.5 m'] },
    { q: 'Explain, in terms of forces, why a parachutist reaches a terminal velocity.', m: 3, ms: ['Initially weight > air resistance so she accelerates.', 'Air resistance increases with speed, so resultant force (and acceleration) decreases.', 'When air resistance = weight, resultant force is zero so velocity is constant.'] }
  ],
  sims: ['projectile'], gens: ['suvat1', 'suvat2', 'proj1', 'proj2']
});

TOPICS.push({
  id: '1.3', unit: '1', title: 'Dynamics', short: 'Newton’s laws and momentum',
  summary: 'Why things move the way they do: Newton’s three laws, free-body diagrams, momentum, collisions and explosions.',
  spec: [
    'Draw and interpret free-body diagrams',
    'State and apply Newton’s three laws of motion',
    'Identify Newton’s third law pairs',
    'Define momentum p = mv and apply F = Δp / Δt',
    'State and apply the principle of conservation of momentum',
    'Distinguish between elastic and inelastic collisions',
    'Recognise that the area under a force–time graph equals the change of momentum',
    'Investigate Newton’s 2nd law (specified practical)'
  ],
  learn: [
    { h: 'Newton’s laws', html: `
<div class="box def"><b class="lbl">Newton’s 1st law</b><p>A body continues at rest or moving with constant velocity unless acted on by a resultant force.</p></div>
<div class="box def"><b class="lbl">Newton’s 2nd law</b><p>The rate of change of momentum of a body is proportional to the resultant force and takes place in the direction of the force: $F = @frac{Δp}{Δt}$. For constant mass this becomes $F = ma$.</p></div>
<div class="box def"><b class="lbl">Newton’s 3rd law</b><p>If body A exerts a force on body B, then B exerts a force on A that is equal in magnitude and opposite in direction.</p></div>
<p>A third-law pair: acts on <b>different</b> bodies, is the <b>same type</b> of force, equal in size, opposite in direction. Your weight (Earth pulls you) pairs with you pulling the Earth — not with the floor’s push on you.</p>` },
    { h: 'Free-body diagrams', html: `
<p>Draw <b>one</b> body and only the forces acting <b>on</b> it: weight (mg), normal contact force, tension, friction, drag, thrust, upthrust. Arrows start on the body and point in the direction of the force.</p>
<p>Then resolve and apply $ΣF = ma$ in each direction. For a car of mass 1200 kg with driving force 3000 N and resistive forces 600 N: $a = (3000 - 600)/1200 = 2.0 "m s"^{-2}$.</p>` },
    { h: 'Momentum', html: `
<p>$p = mv$ — a vector, unit kg m s<sup>−1</sup> or N s.</p>
<div class="box def"><b class="lbl">Principle of conservation of momentum</b><p>The total momentum of a system of interacting bodies remains constant, provided no resultant external force acts on the system.</p></div>
<p>In an <b>explosion</b> from rest, total momentum is zero before and after: the pieces move off in opposite directions with $m_1 v_1 = m_2 v_2$.</p>
[[d:fx-impulse]]
<p>Rearranging $F = Δp/Δt$: for the same change in momentum, a longer impact time means a smaller force. That is how crumple zones, airbags, crash mats and bending your knees on landing all reduce injury.</p>` },
    { h: 'Elastic and inelastic collisions', html: `
<div class="tbl"><table><tr><th></th><th>Momentum</th><th>Kinetic energy</th></tr>
<tr><td><b>Elastic</b></td><td>conserved</td><td>conserved</td></tr><tr><td><b>Inelastic</b></td><td>conserved</td><td>not conserved (some transferred to heat, sound, deformation)</td></tr></table></div>
<p>Total energy is always conserved. When bodies stick together the collision is inelastic (though not every inelastic collision involves sticking).</p>
<div class="box tip"><b class="lbl">Exam tip</b><p>To decide if a collision is elastic, calculate the total KE before and after. Always check momentum with directions: a velocity to the left is negative.</p></div>` },
    { h: 'Specified practical: Newton’s 2nd law', html: `
<p>Use a trolley on a friction-compensated runway pulled by a hanging mass. Keep the <b>total</b> mass of the system constant by moving masses from the trolley to the hanger, so the accelerating force changes but the mass being accelerated does not. Measure acceleration with light gates or a motion sensor. A graph of a against F should be a straight line through the origin with gradient 1/(total mass).</p>` }
  ],
  eqs: [['F = ma', 'constant mass'], ['F = @frac{Δp}{Δt}', 'Newton’s 2nd law'], ['p = mv', 'momentum'], ['"impulse" = FΔt = Δp', 'area under F–t graph']],
  worked: [
    { q: 'A 2.0 kg trolley moving at 3.0 m s<sup>−1</sup> collides with a stationary 1.0 kg trolley and they stick together. Find their common velocity and decide whether the collision is elastic.', s: ['Momentum before = 2.0 × 3.0 = 6.0 kg m s<sup>−1</sup>.', 'After: 3.0 v = 6.0, so v = 2.0 m s<sup>−1</sup>.', 'KE before = ½ × 2.0 × 3.0² = 9.0 J; KE after = ½ × 3.0 × 2.0² = 6.0 J.', 'KE is not conserved (3.0 J transferred), so it is inelastic.'], a: '2.0 m s<sup>−1</sup>; inelastic' },
    { q: 'A 58 g tennis ball arrives at a racket at 20 m s<sup>−1</sup> and leaves at 30 m s<sup>−1</sup> in the opposite direction. Contact lasts 5.0 ms. Find the mean force.', s: ['Take the leaving direction as positive: u = −20, v = +30 m s<sup>−1</sup>.', 'Δp = 0.058 × (30 − (−20)) = 2.9 kg m s<sup>−1</sup>.', 'F = Δp/Δt = 2.9 / 5.0 × 10<sup>−3</sup> = 580 N.'], a: '580 N' },
    { q: 'A 4.0 kg rifle fires a 10 g bullet at 400 m s<sup>−1</sup>. Find the recoil velocity of the rifle.', s: ['Total momentum before = 0.', '0 = 0.010 × 400 + 4.0 v.', 'v = −1.0 m s<sup>−1</sup> (opposite to the bullet).'], a: '1.0 m s<sup>−1</sup> backwards' }
  ],
  pitfalls: ['Pairing weight with the normal contact force as a “third law pair”. They act on the same body and are different types.', 'Forgetting that velocity (and momentum) are vectors: a rebound doubles the change in momentum.', 'Assuming kinetic energy is conserved in every collision.', 'Using F = ma when the mass is changing (use F = Δp/Δt).', 'Converting grams and milliseconds: 58 g = 0.058 kg; 5.0 ms = 5.0 × 10<sup>−3</sup> s.'],
  cards: [
    ['State Newton’s 1st law.', 'A body stays at rest or moves with constant velocity unless a resultant force acts on it.'],
    ['State Newton’s 2nd law (momentum form).', 'Rate of change of momentum ∝ resultant force, in the direction of the force.'],
    ['State Newton’s 3rd law.', 'If A exerts a force on B, B exerts an equal and opposite force on A.'],
    ['Four features of a Newton’s 3rd law pair?', 'Equal magnitude, opposite direction, same type of force, act on different bodies.'],
    ['Define momentum.', 'Mass × velocity (vector).'],
    ['Units of momentum?', 'kg m s<sup>−1</sup> or N s.'],
    ['State the principle of conservation of momentum.', 'Total momentum of a system is constant if no resultant external force acts.'],
    ['What is conserved in an elastic collision?', 'Momentum and kinetic energy.'],
    ['What is conserved in an inelastic collision?', 'Momentum (and total energy) but not kinetic energy.'],
    ['Area under a force–time graph?', 'Change in momentum (impulse).'],
    ['Why do crumple zones reduce injury?', 'Increase impact time so, for the same Δp, the force F = Δp/Δt is smaller.'],
    ['Total momentum after an explosion from rest?', 'Zero.']
  ],
  quiz: [
    { q: 'A book rests on a table. The Newton’s 3rd law partner of the book’s weight is', o: ['the gravitational pull of the book on the Earth', 'the normal contact force of the table on the book', 'the push of the book on the table', 'the friction on the book'], x: 'Weight is Earth-on-book (gravitational); its pair is book-on-Earth (gravitational).' },
    { q: 'Which is a unit of momentum?', o: ['N s', 'N s<sup>−1</sup>', 'J s', 'kg m s<sup>−2</sup>'], x: 'Δp = FΔt, so N s. Equivalent to kg m s<sup>−1</sup>.' },
    { q: 'In an elastic collision', o: ['both momentum and kinetic energy are conserved', 'only kinetic energy is conserved', 'only momentum is conserved', 'neither is conserved'], x: 'Elastic means no KE is transferred to other forms.' },
    { q: 'A 0.50 kg ball hits a wall at 4.0 m s<sup>−1</sup> and rebounds at 4.0 m s<sup>−1</sup>. The magnitude of its change in momentum is', o: ['4.0 kg m s<sup>−1</sup>', 'zero', '2.0 kg m s<sup>−1</sup>', '8.0 kg m s<sup>−1</sup>'], x: '0.50 × (4.0 − (−4.0)) = 4.0 kg m s<sup>−1</sup>.' },
    { q: 'An object moves at constant velocity. The resultant force on it is', o: ['zero', 'in the direction of motion', 'opposite to the motion', 'equal to its weight'], x: 'Newton’s 1st law.' },
    { q: 'A 1500 kg car accelerates at 2.0 m s<sup>−2</sup>. The resultant force on it is', o: ['3000 N', '750 N', '1500 N', '14 700 N'], x: 'F = ma = 1500 × 2.0.' },
    { q: 'The total momentum of a system is conserved provided', o: ['no resultant external force acts', 'the collision is elastic', 'all bodies are at rest', 'no friction acts between the bodies'], x: 'Internal forces (including friction between the bodies) cancel in pairs.' },
    { q: 'In an inelastic collision', o: ['momentum is conserved but kinetic energy is not', 'kinetic energy is conserved but momentum is not', 'neither momentum nor total energy is conserved', 'the bodies must stick together'], x: 'Total energy is conserved, but some KE is transferred to other forms.' },
    { q: 'A skydiver falls at terminal velocity. Which is correct?', o: ['air resistance = weight', 'air resistance > weight', 'air resistance = 0', 'acceleration = g'], x: 'Resultant force zero → constant velocity.' },
    { q: 'The area under a force–time graph for an impact is equal to', o: ['the change in momentum', 'the work done', 'the change in kinetic energy', 'the average force'], x: 'Impulse FΔt = Δp.' },
    { q: 'A stationary 3.0 kg object explodes into two pieces. A 1.0 kg piece moves off at 6.0 m s<sup>−1</sup>. The other piece moves at', o: ['3.0 m s<sup>−1</sup> in the opposite direction', '6.0 m s<sup>−1</sup> in the opposite direction', '2.0 m s<sup>−1</sup> in the same direction', '12 m s<sup>−1</sup> in the opposite direction'], x: '1.0 × 6.0 = 2.0 × v, so v = 3.0 m s<sup>−1</sup> opposite.' },
    { q: 'An airbag reduces the force on a passenger in a crash mainly because it', o: ['increases the time over which the momentum changes', 'reduces the passenger’s change in momentum', 'increases the passenger’s change in momentum', 'absorbs all of the passenger’s momentum instantly'], x: 'Same Δp, longer Δt → smaller F.' }
  ],
  exam: [
    { q: 'State the principle of conservation of momentum.', m: 2, ms: ['Total momentum of a system remains constant…', '…provided no (resultant) external force acts.'] },
    { q: 'A railway truck of mass 12 000 kg moving at 3.0 m s<sup>−1</sup> collides and couples with a stationary truck of mass 8000 kg. Calculate the velocity after coupling and the kinetic energy transferred to other forms.', m: 5, ms: ['12 000 × 3.0 = 20 000 v', 'v = 1.8 m s<sup>−1</sup>', 'KE before = ½ × 12 000 × 3.0² = 54 000 J', 'KE after = ½ × 20 000 × 1.8² = 32 400 J', 'Transferred = 21 600 J (≈ 22 kJ)'] },
    { q: 'Use Newton’s 2nd law to explain how the crumple zone of a car reduces the force on its occupants in a collision.', m: 3, ms: ['F = Δp/Δt (rate of change of momentum).', 'Δp is the same (car/occupants brought to rest from same speed).', 'Crumple zone increases the collision time so the (mean) force is smaller.'] },
    { q: 'Explain why the weight of a person standing on the floor and the normal contact force of the floor on the person are NOT a Newton’s third law pair.', m: 2, ms: ['They act on the same body (the person).', 'They are different types of force (gravitational vs contact/electromagnetic).'] }
  ],
  sims: ['collisions'], gens: ['mom1', 'mom2', 'fma1']
});

TOPICS.push({
  id: '1.4', unit: '1', title: 'Energy Concepts', short: 'Work, energy, power, efficiency',
  summary: 'Energy is the currency of physics. Work transfers it, power is its rate, and it is always conserved.',
  spec: [
    'Define work done W = Fx cos θ and understand the joule',
    'Recognise that the area under a force–displacement graph is the work done',
    'State and apply the principle of conservation of energy',
    'Derive and use Ek = ½mv² and ΔEp = mgΔh',
    'Apply the work–energy relationship Fx = ½mv² − ½mu²',
    'Define power as the rate of energy transfer and use P = W/t and P = Fv',
    'Calculate efficiency'
  ],
  learn: [
    { h: 'Work', html: `
<div class="box def"><b class="lbl">Definition</b><p><b>Work done</b> = force × distance moved in the direction of the force: $W = Fx@,"cos"@,θ$, where θ is the angle between F and the displacement. 1 J is the work done when a force of 1 N moves its point of application 1 m in the direction of the force.</p></div>
<p>If the force is perpendicular to the motion (θ = 90°) no work is done — e.g. the tension in a string keeping a ball in circular motion.</p>
<p>When the force varies, work done = <b>area under the force–displacement graph</b>.</p>` },
    { h: 'Kinetic and potential energy', html: `
<p>$E_k = @frac{1}{2}mv^2$ and, near the Earth’s surface, $ΔE_p = mgΔh$.</p>
<h4>Deriving the kinetic energy formula</h4>
<p>A constant resultant force F accelerates a mass m from rest through distance x. Work done $= Fx = ma × x$. From $v^2 = 0 + 2ax$, $ax = @frac{1}{2}v^2$, so work done $= @frac{1}{2}mv^2$. This is the energy the body now has because of its motion.</p>
<div class="box def"><b class="lbl">Work–energy relationship</b><p>Work done by the resultant force = change in kinetic energy: $Fx = @frac{1}{2}mv^2 - @frac{1}{2}mu^2$.</p></div>` },
    { h: 'Conservation of energy', html: `
<div class="box def"><b class="lbl">Principle of conservation of energy</b><p>Energy cannot be created or destroyed, only transferred from one form to another. The total energy of a closed system is constant.</p></div>
<p>For a falling body with no air resistance, loss in E<sub>p</sub> = gain in E<sub>k</sub>: $mgh = @frac{1}{2}mv^2$ so $v = @sqrt{2gh}$, independent of mass. With friction, the missing energy equals the work done against friction: <i>loss of E<sub>p</sub> = gain in E<sub>k</sub> + work done against friction</i>.</p>` },
    { h: 'Power and efficiency', html: `
<p>Power is the rate of doing work (rate of energy transfer): $P = @frac{W}{t}$, unit W = J s<sup>−1</sup>.</p>
<p>For a force moving at constant velocity: $P = @frac{Fx}{t} = Fv$. A car at constant speed has driving force = resistive force, so power output = resistive force × speed.</p>
<div class="box eq">$"efficiency" = @frac{"useful energy (or power) out"}{"total energy (or power) in"} × 100%$</div>` }
  ],
  eqs: [['W = Fx@,"cos"@,θ', 'work done'], ['E_k = @frac{1}{2}mv^2', 'kinetic energy'], ['ΔE_p = mgΔh', 'change in GPE near Earth'], ['Fx = @frac{1}{2}mv^2 - @frac{1}{2}mu^2', 'work–energy'], ['P = @frac{W}{t} = @frac{ΔE}{t}', 'power'], ['P = Fv', 'power at constant velocity']],
  worked: [
    { q: 'A sledge is pulled 50 m along level snow by a rope at 25° to the horizontal with tension 60 N. How much work is done by the tension?', s: ['$W = Fx@,"cos"@,θ = 60 × 50 × "cos"@,25°$', '= 2719 J'], a: '2.7 kJ' },
    { q: 'A car travels at a constant 30 m s<sup>−1</sup>. The total resistive force is 800 N. What is the useful power output of the engine?', s: ['Constant velocity, so driving force = resistive force = 800 N.', 'P = Fv = 800 × 30 = 24 000 W.'], a: '24 kW' },
    { q: 'A motor with input power 400 W lifts a 50 kg load through 12 m in 20 s. Find its efficiency.', s: ['Useful energy = mgh = 50 × 9.81 × 12 = 5886 J.', 'Useful power = 5886 / 20 = 294 W.', 'Efficiency = 294 / 400 = 0.736.'], a: '74%' }
  ],
  pitfalls: ['Using W = Fx when the force is at an angle — include cos θ.', 'Forgetting to square the velocity in ½mv².', 'Using P = Fv with the wrong force: at constant speed the driving force equals the total resistive force.', 'Giving efficiency greater than 100%.'],
  cards: [
    ['Define work done.', 'Force × distance moved in the direction of the force.'],
    ['Define the joule.', 'Work done when a 1 N force moves its point of application 1 m in the direction of the force.'],
    ['Work done by a force perpendicular to motion?', 'Zero.'],
    ['Area under a force–displacement graph?', 'Work done.'],
    ['Define power.', 'Rate of doing work / rate of energy transfer.'],
    ['Derive P = Fv.', 'P = W/t = Fx/t = Fv (constant force and velocity).'],
    ['State the principle of conservation of energy.', 'Energy cannot be created or destroyed; total energy of a closed system is constant.'],
    ['Speed after falling h from rest (no drag)?', '$v = @sqrt{2gh}$'],
    ['Work–energy relationship?', 'Work done by resultant force = change in kinetic energy.'],
    ['Base units of the watt?', 'kg m<sup>2</sup> s<sup>−3</sup>'],
    ['If speed doubles, KE…', 'quadruples.']
  ],
  quiz: [
    { q: 'A force acts perpendicular to the direction of motion. The work done by the force is', o: ['zero', 'maximum', 'negative', 'equal to force × distance'], x: 'cos 90° = 0.' },
    { q: 'A 2.0 kg ball moves at 3.0 m s<sup>−1</sup>. Its kinetic energy is', o: ['9.0 J', '6.0 J', '3.0 J', '18 J'], x: '½ × 2.0 × 3.0² = 9.0 J.' },
    { q: 'If the speed of a car doubles, its kinetic energy', o: ['increases by a factor of 4', 'doubles', 'halves', 'is unchanged'], x: 'E<sub>k</sub> ∝ v².' },
    { q: 'One watt is equal to', o: ['1 J s<sup>−1</sup>', '1 J s', '1 N s', '1 N m<sup>−1</sup>'], x: 'Power = energy / time.' },
    { q: 'A car’s engine delivers 40 kW of useful power at a constant 20 m s<sup>−1</sup>. The driving force is', o: ['2000 N', '800 kN', '500 N', '20 N'], x: 'F = P/v = 40 000 / 20.' },
    { q: 'A 5.0 kg mass is lifted through 2.0 m. Its gravitational potential energy increases by about', o: ['98 J', '10 J', '49 J', '25 J'], x: 'mgh = 5.0 × 9.81 × 2.0 = 98.1 J.' },
    { q: 'A machine is 25% efficient. It is supplied with 800 J. The useful energy output is', o: ['200 J', '600 J', '3200 J', '25 J'], x: '0.25 × 800.' },
    { q: 'The work done in stretching a spring is given by', o: ['the area under the force–extension graph', 'the gradient of the force–extension graph', 'force × extension', 'extension ÷ force'], x: 'Area = ½Fx for a Hooke’s law spring.' },
    { q: 'The watt in SI base units is', o: ['kg m<sup>2</sup> s<sup>−3</sup>', 'kg m<sup>2</sup> s<sup>−2</sup>', 'kg m s<sup>−3</sup>', 'kg m<sup>2</sup> s<sup>−1</sup>'], x: 'J s<sup>−1</sup> = kg m<sup>2</sup> s<sup>−2</sup> s<sup>−1</sup>.' },
    { q: 'A ball is dropped from rest from 5.0 m. Ignoring air resistance, its speed just before landing is', o: ['9.9 m s<sup>−1</sup>', '49 m s<sup>−1</sup>', '7.0 m s<sup>−1</sup>', '98 m s<sup>−1</sup>'], x: 'v = √(2 × 9.81 × 5.0) = 9.9 m s<sup>−1</sup>.' },
    { q: 'Two objects of different mass slide from rest down the same frictionless slope. At the bottom', o: ['they have the same speed', 'the heavier one is faster', 'the lighter one is faster', 'they have the same kinetic energy'], x: 'v = √(2gh) is independent of mass (their KEs differ).' }
  ],
  exam: [
    { q: 'Starting from the equations of motion, show that the kinetic energy of a body of mass m moving at speed v is ½mv².', m: 3, ms: ['Work done by constant force from rest: W = Fx = max.', 'v² = u² + 2ax with u = 0 gives ax = ½v².', 'W = ½mv² = kinetic energy gained.'] },
    { q: 'A cyclist and bike (total mass 80 kg) freewheel from rest down a slope, descending a vertical height of 15 m. At the bottom their speed is 12 m s<sup>−1</sup>. Calculate the work done against resistive forces.', m: 4, ms: ['Loss of E<sub>p</sub> = 80 × 9.81 × 15 = 11 772 J', 'Gain of E<sub>k</sub> = ½ × 80 × 12² = 5760 J', 'Work against resistance = difference', '= 6000 J (6.0 kJ)'] },
    { q: 'A lorry’s engine provides a useful power of 150 kW when travelling at a constant 25 m s<sup>−1</sup>. Calculate the total resistive force and explain your reasoning.', m: 3, ms: ['P = Fv', 'F = 150 000 / 25 = 6000 N', 'Constant velocity so resultant force zero: resistive force = driving force.'] }
  ],
  sims: ['energy'], gens: ['work1', 'power1', 'energy1', 'eff1']
});

TOPICS.push({
  id: '1.5', unit: '1', title: 'Solids under Stress', short: 'Hooke’s law, Young modulus, materials',
  summary: 'How materials respond to forces: stiffness, strength, the Young modulus, and what dislocations, cracks and tangled polymer chains have to do with it.',
  spec: [
    'Apply Hooke’s law F = kx and understand the spring constant',
    'Show that the elastic potential energy stored is ½Fx = ½kx²',
    'Define stress, strain and the Young modulus',
    'Distinguish between elastic and plastic deformation; define the elastic limit',
    'Describe stress–strain curves for ductile (e.g. copper), brittle (e.g. glass) and polymeric (e.g. rubber) materials',
    'Classify solids as crystalline, amorphous or polymeric',
    'Explain ductility and plastic deformation in metals in terms of dislocations; how grain boundaries and foreign atoms strengthen metals',
    'Explain brittle fracture in terms of crack propagation, and how it is reduced (e.g. prestressed concrete, toughened glass)',
    'Explain rubber’s behaviour, including hysteresis, in terms of its molecular structure',
    'Determine the Young modulus of a metal wire (specified practical)'
  ],
  learn: [
    { h: 'Hooke’s law', html: `
<div class="box def"><b class="lbl">Hooke’s law</b><p>The extension of a spring (or wire) is directly proportional to the applied force, provided the limit of proportionality is not exceeded: $F = kx$, where k is the spring constant (N m<sup>−1</sup>).</p></div>
[[d:hooke]]
<p>Work done stretching = area under the F–x graph. Within the Hooke’s law region this is a triangle, so the elastic potential energy stored is $@frac{1}{2}Fx = @frac{1}{2}kx^2$.</p>` },
    { h: 'Stress, strain and the Young modulus', html: `
<div class="box def"><b class="lbl">Definitions</b><ul>
<li><b>Stress</b> $σ = @frac{F}{A}$ — force per unit cross-sectional area (Pa).</li>
<li><b>Strain</b> $ε = @frac{Δl}{l}$ — extension ÷ original length (no units).</li>
<li><b>Young modulus</b> $E = @frac{σ}{ε}$ — stress ÷ strain within the Hooke’s law region (Pa).</li></ul></div>
<p>Combining: $E = @frac{Fl}{AΔl}$. The Young modulus is a property of the material, not of a particular sample. Steel: about 2 × 10<sup>11</sup> Pa; rubber: about 10<sup>6</sup>–10<sup>7</sup> Pa.</p>
<div class="box def"><b class="lbl">Elastic vs plastic</b><p><b>Elastic</b> deformation: the material returns to its original shape when the load is removed. <b>Plastic</b> deformation: permanent deformation that remains after the load is removed. The <b>elastic limit</b> is the point beyond which deformation is plastic.</p></div>` },
    { h: 'Types of solid and stress–strain curves', html: `
<div class="tbl"><table><tr><th>Type</th><th>Structure</th><th>Examples</th></tr>
<tr><td>Crystalline</td><td>atoms in a regular, repeating 3-D lattice (metals: many small crystals or grains)</td><td>metals, salt, diamond</td></tr>
<tr><td>Amorphous</td><td>no long-range order</td><td>glass</td></tr>
<tr><td>Polymeric</td><td>long chain molecules</td><td>rubber, polythene</td></tr></table></div>
[[d:stress-strain]]
<ul><li><b>Ductile</b> (copper): elastic region, then yields and undergoes large plastic deformation before necking and breaking. Can be drawn into wires.</li>
<li><b>Brittle</b> (glass, cast iron): elastic almost to breaking; fractures suddenly with little or no plastic deformation.</li>
<li><b>Polymeric</b> (rubber): very large elastic strains (several hundred per cent), non-linear curve, hysteresis.</li></ul>
<p>The <b>ultimate tensile stress</b> (UTS) is the maximum stress the material can withstand.</p>` },
    { h: 'Metals: dislocations and strength', html: `
<p>Metal crystals contain <b>dislocations</b> — lines where an extra half-plane of atoms ends. Under stress, a dislocation moves through the lattice one row of bonds at a time, so planes of atoms slip past each other much more easily than if all the bonds broke at once. This slip is <b>plastic deformation</b> and is why metals are <b>ductile</b>.</p>
<p>Anything that blocks dislocation movement makes a metal stronger and harder (but less ductile):</p>
<ul><li><b>Grain boundaries</b> — dislocations cannot easily cross from one grain to the next, so smaller grains mean a stronger metal.</li>
<li><b>Foreign atoms</b> (alloying, e.g. carbon in steel) — they distort the lattice and pin dislocations.</li>
<li><b>Work hardening</b> — dislocations become tangled and jam each other.</li></ul>` },
    { h: 'Brittle fracture', html: `
<p>Brittle materials such as glass have no mechanism (no mobile dislocations) for plastic flow. Surface scratches and cracks act as <b>stress concentrators</b>: under <b>tension</b> the stress at the sharp tip of a crack is many times the average, so bonds there break, the crack lengthens, the tip stays sharp and the crack propagates rapidly across the material.</p>
<p>In <b>compression</b> cracks are pushed closed, so brittle materials are much stronger in compression than tension. <b>Prestressed concrete</b> is cast around steel rods held under tension; when released, the rods keep the concrete in compression so cracks cannot open. <b>Toughened glass</b> has surface layers in compression for the same reason.</p>` },
    { h: 'Rubber and hysteresis', html: `
<p>Rubber consists of long, tangled, coiled polymer chains with a few cross-links. With a small stress the chains uncoil and straighten easily (low stiffness); once they are nearly straight, further strain requires stretching the bonds within the chains, so it becomes much stiffer. When released, the thermal motion of the chains makes them re-tangle, so rubber returns to its original length.</p>
[[d:hysteresis]]
<p>Rubber shows <b>elastic hysteresis</b>: the unloading curve lies below the loading curve. The area of the loop is the energy transferred to internal energy (heating) in one loading–unloading cycle. Rubber tyres get warm for this reason.</p>` },
    { h: 'Specified practical: Young modulus of a wire', html: `
<p>A long (≈2 m) thin wire is clamped and loaded. A reference wire with a vernier (Searle’s apparatus) or a marker against a fixed scale measures the extension. Measure the diameter at several points and orientations with a micrometer and average; $A = πd^2/4$. Plot F against Δl: gradient = EA/l, so $E = "gradient" × @frac{l}{A}$.</p>
<p>A long, thin wire gives a larger, more measurable extension. The diameter causes the largest percentage uncertainty, which is doubled because it is squared.</p>` }
  ],
  eqs: [['F = kx', 'Hooke’s law'], ['E_p = @frac{1}{2}Fx = @frac{1}{2}kx^2', 'elastic PE'], ['σ = @frac{F}{A}', 'stress'], ['ε = @frac{Δl}{l}', 'strain'], ['E = @frac{σ}{ε} = @frac{Fl}{AΔl}', 'Young modulus']],
  worked: [
    { q: 'A steel wire 2.0 m long with diameter 0.50 mm supports a load of 50 N. E for steel = 2.0 × 10<sup>11</sup> Pa. Find the extension.', s: ['A = π(0.25 × 10<sup>−3</sup>)² = 1.96 × 10<sup>−7</sup> m².', 'σ = 50 / 1.96 × 10<sup>−7</sup> = 2.55 × 10<sup>8</sup> Pa.', 'ε = σ/E = 1.27 × 10<sup>−3</sup>.', 'Δl = εl = 1.27 × 10<sup>−3</sup> × 2.0 = 2.5 × 10<sup>−3</sup> m.'], a: '2.5 mm' },
    { q: 'A spring of spring constant 40 N m<sup>−1</sup> is stretched by 15 cm. Find the force and the energy stored.', s: ['F = kx = 40 × 0.15 = 6.0 N.', 'E = ½kx² = ½ × 40 × 0.15² = 0.45 J.'], a: '6.0 N; 0.45 J' }
  ],
  pitfalls: ['Using diameter instead of radius in A = πr² (or forgetting to square).', 'Giving strain a unit; it is a ratio.', 'Saying brittle materials are “weak” — glass can have a high UTS in compression; brittleness is about the lack of plastic deformation.', 'Explaining metal ductility by “bonds breaking” rather than dislocation movement.', 'Confusing limit of proportionality with elastic limit.'],
  cards: [
    ['State Hooke’s law.', 'Extension ∝ force applied, provided the limit of proportionality is not exceeded.'],
    ['Define stress.', 'Force per unit cross-sectional area, σ = F/A.'],
    ['Define strain.', 'Extension ÷ original length.'],
    ['Define Young modulus.', 'Stress ÷ strain (in the Hooke’s law region).'],
    ['Define elastic deformation.', 'Returns to original shape and size when the load is removed.'],
    ['Define plastic deformation.', 'Permanent deformation remaining after the load is removed.'],
    ['How do metals deform plastically?', 'Dislocations move through the lattice, letting planes of atoms slip.'],
    ['Why do grain boundaries strengthen metals?', 'Dislocations cannot easily cross them, so movement is blocked.'],
    ['Why is glass weaker in tension than compression?', 'In tension, surface cracks open and propagate (stress concentration at tip); in compression cracks are closed.'],
    ['What is prestressed concrete?', 'Concrete kept under compression by tensioned steel rods, so cracks cannot open.'],
    ['What does the hysteresis loop area represent?', 'Energy transferred to heat per loading–unloading cycle.'],
    ['Why is rubber easy to stretch at first?', 'Tangled chains uncoil/straighten; only later are bonds within chains stretched.'],
    ['Elastic PE stored in a spring?', '½Fx = ½kx²'],
    ['Why use a long thin wire for Young modulus?', 'Gives a larger (measurable) extension, reducing percentage uncertainty.']
  ],
  quiz: [
    { q: 'The unit of the Young modulus is', o: ['Pa', 'N m<sup>−1</sup>', 'N', 'no unit'], x: 'Stress (Pa) ÷ strain (no unit).' },
    { q: 'Strain has', o: ['no unit', 'unit m', 'unit Pa', 'unit N m<sup>−2</sup>'], x: 'It is a ratio of two lengths.' },
    { q: 'A material that fractures with little or no plastic deformation is described as', o: ['brittle', 'ductile', 'polymeric', 'elastic'], x: 'e.g. glass, cast iron.' },
    { q: 'Plastic deformation of a metal occurs mainly by', o: ['the movement of dislocations', 'the breaking of all bonds across a plane at once', 'the uncoiling of long chain molecules', 'crack propagation'], x: 'Dislocations let planes slip one row of bonds at a time.' },
    { q: 'Adding carbon atoms to iron to make steel makes it harder because the carbon atoms', o: ['impede the movement of dislocations', 'increase the number of dislocations that can move', 'make the grains larger', 'remove the grain boundaries'], x: 'Foreign atoms pin dislocations.' },
    { q: 'The area of a rubber hysteresis loop represents', o: ['energy transferred to heat in one cycle', 'energy stored in the rubber', 'the Young modulus', 'work done by the rubber on unloading'], x: 'Loading work minus unloading work.' },
    { q: 'A steel wire (E = 2.0 × 10<sup>11</sup> Pa) is under a stress of 2.0 × 10<sup>8</sup> Pa. The strain is', o: ['1.0 × 10<sup>−3</sup>', '1.0 × 10<sup>3</sup>', '4.0 × 10<sup>19</sup>', '1.0 × 10<sup>−2</sup>'], x: 'ε = σ/E.' },
    { q: 'Glass is much weaker in tension than in compression because', o: ['surface cracks propagate when under tension', 'it has no dislocations in compression', 'its atoms form a regular lattice', 'it is polymeric'], x: 'Tension opens cracks and concentrates stress at the tip.' },
    { q: 'When rubber is first stretched, its long molecules', o: ['uncoil and straighten', 'slip via dislocations', 'form a crystalline lattice immediately', 'break apart'], x: 'Tangled chains straightening needs little force.' },
    { q: 'A spring obeying Hooke’s law extends by x under force F. The energy stored is', o: ['½Fx', 'Fx', '2Fx', 'F/x'], x: 'Area of triangle under the F–x graph.' },
    { q: 'The elastic limit is', o: ['the point beyond which the material will not return to its original length', 'the point where the material breaks', 'the maximum stress the material can withstand', 'the point where extension stops being proportional to force'], x: 'That last one is the limit of proportionality.' },
    { q: 'Glass is an example of', o: ['an amorphous solid', 'a crystalline solid', 'a polymeric solid', 'a ductile solid'], x: 'Glass has no long-range order.' }
  ],
  exam: [
    { q: 'Describe how you would determine the Young modulus of copper in the form of a wire.', m: 6, ms: ['Long thin wire clamped at one end, passing over a pulley / Searle’s apparatus with reference wire.', 'Measure original length (metre rule) from clamp to marker.', 'Measure diameter with a micrometer at several points; average; A = πd²/4.', 'Add loads in steps, record extension each time (vernier/travelling microscope); check for return to zero on unloading.', 'Plot F against Δl; gradient in linear region.', 'E = gradient × l / A.'] },
    { q: 'Explain, in terms of dislocations, why copper is ductile, and why adding a small amount of another metal to copper reduces its ductility.', m: 4, ms: ['Dislocations (extra half-planes of atoms) move easily through the lattice under stress.', 'This allows planes of atoms to slip – plastic deformation – so copper can be drawn into wires.', 'Foreign atoms distort the lattice / pin dislocations.', 'Dislocations cannot move so easily, so less plastic deformation – less ductile (harder).'] },
    { q: 'Explain why glass is brittle and why it is much stronger in compression than tension.', m: 4, ms: ['Glass is amorphous; no dislocations to allow plastic flow.', 'Surface cracks concentrate stress at the (sharp) tip under tension.', 'Bonds at the tip break and the crack propagates rapidly → sudden fracture.', 'In compression cracks are pushed closed so they do not propagate.'] }
  ],
  sims: ['stress'], gens: ['young1', 'hooke1']
});

TOPICS.push({
  id: '1.6', unit: '1', title: 'Using Radiation to Investigate Stars', short: 'Black bodies, Wien, Stefan, spectra',
  summary: 'Everything we know about stars comes from their light. Black-body radiation gives temperature and size; absorption lines give composition.',
  spec: [
    'Describe the continuous spectrum of a black body and how it changes with temperature',
    'Use Wien’s displacement law λmax = W/T',
    'Use the Stefan–Boltzmann law P = AσT⁴',
    'Use the inverse square law I = P/4πd² for the intensity of radiation from a star',
    'Understand the kelvin temperature scale',
    'Explain how stellar absorption (line) spectra reveal the composition of a star’s atmosphere',
    'Recall the approximate wavelength ranges of the regions of the electromagnetic spectrum',
    'Understand the value of multiwavelength astronomy'
  ],
  learn: [
    { h: 'Black bodies', html: `
<div class="box def"><b class="lbl">Definition</b><p>A <b>black body</b> is a body that absorbs all the electromagnetic radiation that falls on it. It is also the best possible emitter: at any temperature it emits a continuous spectrum with the maximum possible power at each wavelength.</p></div>
<p>Stars are good approximations to black bodies. Their spectra have a characteristic shape that depends only on temperature.</p>
[[d:blackbody]]
<p>As temperature rises, (1) the peak moves to shorter wavelength and (2) the intensity at every wavelength rises, so total power rises steeply.</p>` },
    { h: 'Wien’s law and Stefan’s law', html: `
<div class="box def"><b class="lbl">Wien’s displacement law</b><p>$λ_{max} = @frac{W}{T}$, where W = 2.90 × 10<sup>−3</sup> m K is Wien’s constant and T is the absolute temperature.</p></div>
<p>The Sun peaks at about 500 nm, so $T = 2.90 × 10^{-3} / 500 × 10^{-9} = 5800 "K"$. Red stars are cooler; blue-white stars are hotter.</p>
<div class="box def"><b class="lbl">Stefan–Boltzmann law</b><p>The total power emitted by a black body is $P = AσT^4$, where A is surface area and σ = 5.67 × 10<sup>−8</sup> W m<sup>−2</sup> K<sup>−4</sup>. For a spherical star, $A = 4πr^2$.</p></div>
<p>A star’s total power output is its <b>luminosity</b>. Two stars at the same temperature: the one with the larger luminosity must be bigger (e.g. red giants are cool but very luminous, so they are enormous).</p>
<p>Temperatures must be in kelvin: $T/"K" = θ/"°C" + 273.15$.</p>` },
    { h: 'Intensity and the inverse square law', html: `
<p>Radiation from a star spreads out over a sphere. At distance d, the intensity (power per unit area) is $I = @frac{P}{4πd^2}$, unit W m<sup>−2</sup>.</p>
<p>Example: the Sun’s luminosity 3.85 × 10<sup>26</sup> W at 1.50 × 10<sup>11</sup> m gives I ≈ 1.36 kW m<sup>−2</sup> at the top of the atmosphere.</p>
<div class="box tip"><b class="lbl">Chain of reasoning</b><p>Measure λ<sub>max</sub> → T (Wien). Measure intensity at Earth and know distance → luminosity P. Then P and T → surface area → radius (Stefan).</p></div>` },
    { h: 'Absorption spectra and composition', html: `
<p>The hot, dense interior of a star emits a continuous spectrum. Light passing through the cooler gas of the star’s outer atmosphere is absorbed at particular wavelengths — photons whose energy exactly matches the difference between energy levels of the atoms there. This leaves <b>dark absorption lines</b> on the continuous spectrum.</p>
<p>Each element has its own unique pattern of lines (its “fingerprint”), so comparing the lines with laboratory spectra identifies the elements present in the star’s atmosphere. Hydrogen and helium lines dominate in most stars.</p>` },
    { h: 'The electromagnetic spectrum and multiwavelength astronomy', html: `
<div class="tbl"><table><tr><th>Region</th><th>Approx. wavelength range</th></tr>
<tr><td>gamma rays</td><td>&lt; 10<sup>−11</sup> m (overlaps X-rays)</td></tr><tr><td>X-rays</td><td>10<sup>−13</sup> – 10<sup>−8</sup> m</td></tr>
<tr><td>ultraviolet</td><td>10<sup>−8</sup> – 4 × 10<sup>−7</sup> m</td></tr><tr><td>visible</td><td>4 × 10<sup>−7</sup> – 7 × 10<sup>−7</sup> m (400–700 nm)</td></tr>
<tr><td>infrared</td><td>7 × 10<sup>−7</sup> – 10<sup>−3</sup> m</td></tr><tr><td>microwaves</td><td>10<sup>−3</sup> – 10<sup>−1</sup> m</td></tr><tr><td>radio</td><td>&gt; 10<sup>−1</sup> m</td></tr></table></div>
<p>Different objects and processes emit in different regions: cool dust clouds and forming stars in the infrared, very hot gas (e.g. near black holes) in X-rays, cold hydrogen at 21 cm radio. Observing across the whole spectrum — <b>multiwavelength astronomy</b> — gives a far more complete picture than visible light alone.</p>
<p>Earth’s atmosphere absorbs most gamma, X-ray, UV and much infrared radiation, so telescopes for these regions must be in space. Visible light and most radio waves reach the ground.</p>` }
  ],
  eqs: [['λ_{max} = @frac{W}{T}', 'Wien, W = 2.90 × 10⁻³ m K'], ['P = AσT^4', 'Stefan–Boltzmann'], ['I = @frac{P}{4πd^2}', 'intensity at distance d'], ['T/"K" = θ/"°C" + 273.15', 'kelvin conversion']],
  worked: [
    { q: 'The spectrum of the star Rigel peaks at 240 nm. Find its surface temperature.', s: ['$T = W/λ_{max} = 2.90 × 10^{-3} / 240 × 10^{-9}$', '= 12 100 K'], a: '1.2 × 10<sup>4</sup> K' },
    { q: 'The Sun has radius 6.96 × 10<sup>8</sup> m and surface temperature 5780 K. Find its luminosity and the intensity at Earth, 1.50 × 10<sup>11</sup> m away.', s: ['A = 4πr² = 6.09 × 10<sup>18</sup> m².', 'P = AσT⁴ = 6.09 × 10<sup>18</sup> × 5.67 × 10<sup>−8</sup> × 5780⁴ = 3.85 × 10<sup>26</sup> W.', 'I = P/4πd² = 3.85 × 10<sup>26</sup> / (4π × (1.50 × 10<sup>11</sup>)²) = 1360 W m<sup>−2</sup>.'], a: 'P = 3.9 × 10<sup>26</sup> W; I ≈ 1.4 kW m<sup>−2</sup>' },
    { q: 'Star X has the same surface temperature as the Sun but is 100 times as luminous. How does its radius compare with the Sun’s?', s: ['P ∝ r²T⁴; T is the same so P ∝ r².', 'r² is 100 times greater, so r is 10 times greater.'], a: '10 × the Sun’s radius' }
  ],
  pitfalls: ['Using °C instead of K in Wien’s or Stefan’s law.', 'Forgetting that P ∝ T⁴ — doubling T multiplies power by 16.', 'Using the diameter for r in 4πr².', 'Saying absorption lines come from the core of the star; they come from cooler gas in the outer layers / atmosphere.', 'Confusing luminosity (total power, W) with intensity (W m<sup>−2</sup>).'],
  cards: [
    ['Define a black body.', 'A body that absorbs all the EM radiation incident on it (and is the best possible emitter).'],
    ['State Wien’s law.', 'λ<sub>max</sub> = W/T, W = 2.90 × 10<sup>−3</sup> m K.'],
    ['State the Stefan–Boltzmann law.', 'P = AσT⁴.'],
    ['Value and unit of σ?', '5.67 × 10<sup>−8</sup> W m<sup>−2</sup> K<sup>−4</sup>'],
    ['Intensity at distance d from a star?', 'I = P / 4πd².'],
    ['What causes dark lines in a star’s spectrum?', 'Cooler gas in the star’s atmosphere absorbs photons whose energies match energy-level differences.'],
    ['How do absorption lines reveal composition?', 'Each element has a unique set of line wavelengths; compare with lab spectra.'],
    ['Wavelength range of visible light?', 'About 400 nm to 700 nm.'],
    ['Why put X-ray telescopes in space?', 'Earth’s atmosphere absorbs X-rays.'],
    ['If T of a star doubles (same radius), luminosity…', 'increases by a factor of 16.'],
    ['What is multiwavelength astronomy?', 'Observing objects across many regions of the EM spectrum to reveal different processes.'],
    ['Convert 27 °C to kelvin.', '300 K']
  ],
  quiz: [
    { q: 'Star A has λ<sub>max</sub> = 400 nm; star B has λ<sub>max</sub> = 800 nm. Compared with B, the surface temperature of A is', o: ['twice as high', 'half as high', 'four times as high', 'the same'], x: 'λ<sub>max</sub> ∝ 1/T.' },
    { q: 'The absolute temperature of a black body is doubled with no change in size. Its emitted power increases by a factor of', o: ['16', '2', '4', '8'], x: 'P ∝ T⁴.' },
    { q: 'Two stars have the same temperature, but star P has three times the radius of star Q. The ratio of luminosities P : Q is', o: ['9 : 1', '3 : 1', '27 : 1', '81 : 1'], x: 'P ∝ r².' },
    { q: 'The dark lines in the spectrum of a star are caused by', o: ['absorption by cooler gas in the star’s atmosphere', 'emission by hot gas in the core', 'absorption in the Earth’s atmosphere only', 'diffraction in the telescope'], x: 'Photons of specific energies excite atoms in the outer layers.' },
    { q: 'The distance from a star is doubled. The intensity received', o: ['falls to one quarter', 'halves', 'is unchanged', 'falls to one eighth'], x: 'Inverse square law.' },
    { q: 'The approximate wavelength range of visible light is', o: ['400–700 nm', '4–7 nm', '400–700 μm', '40–70 nm'], x: '4 × 10<sup>−7</sup> to 7 × 10<sup>−7</sup> m.' },
    { q: 'A black body is best described as a body that', o: ['absorbs all radiation incident on it', 'reflects all radiation incident on it', 'emits radiation of one wavelength only', 'is always black in colour'], x: 'A hot black body glows — the Sun is a near black body.' },
    { q: 'The peak wavelength of radiation from a body at 290 K is about', o: ['10 μm (infrared)', '10 nm (UV)', '500 nm (visible)', '10 mm (microwave)'], x: '2.90 × 10<sup>−3</sup> / 290 = 1.0 × 10<sup>−5</sup> m.' },
    { q: 'X-ray telescopes are placed in orbit because', o: ['the atmosphere absorbs X-rays', 'X-rays are too faint to detect', 'X-rays are deflected by Earth’s magnetic field', 'X-rays only come from the Sun'], x: 'Similarly for gamma, most UV and much IR.' },
    { q: 'The unit of the Stefan constant σ is', o: ['W m<sup>−2</sup> K<sup>−4</sup>', 'W m<sup>2</sup> K<sup>4</sup>', 'W K<sup>−4</sup>', 'm K'], x: 'σ = P / (AT⁴).' },
    { q: 'A red star and a blue star have the same luminosity. Which statement is correct?', o: ['The red star has the larger radius', 'The blue star has the larger radius', 'They have the same radius', 'The red star is hotter'], x: 'Red → cooler; same P needs a larger area.' }
  ],
  exam: [
    { q: 'Explain how the spectrum of a star can be used to determine (i) its surface temperature and (ii) the elements in its atmosphere.', m: 4, ms: ['Measure the wavelength of peak intensity in the continuous spectrum.', 'Use Wien’s law T = W/λ<sub>max</sub>.', 'Dark absorption lines at specific wavelengths due to absorption by atoms in the cooler outer layers.', 'Compare line wavelengths with those of known elements in the laboratory.'] },
    { q: 'The star Betelgeuse has λ<sub>max</sub> = 850 nm and luminosity 4.5 × 10<sup>31</sup> W. Calculate its surface temperature and radius.', m: 5, ms: ['T = 2.90 × 10<sup>−3</sup> / 850 × 10<sup>−9</sup> = 3410 K', 'P = 4πr²σT⁴', 'r² = P / (4πσT⁴)', 'r² = 4.5 × 10<sup>31</sup> / (4π × 5.67 × 10<sup>−8</sup> × 3410⁴)', 'r ≈ 6.8 × 10<sup>11</sup> m'] },
    { q: 'Explain what is meant by multiwavelength astronomy and why it is useful.', m: 3, ms: ['Observing astronomical objects in several regions of the EM spectrum (radio, IR, visible, UV, X-ray…).', 'Different processes / temperatures emit in different regions (e.g. cool dust → IR, very hot gas → X-rays).', 'Gives more complete information; some regions need space telescopes because the atmosphere absorbs them.'] }
  ],
  sims: ['blackbody'], gens: ['wien1', 'stefan1', 'inv1']
});

TOPICS.push({
  id: '1.7', unit: '1', title: 'Particles and Nuclear Structure', short: 'Quarks, leptons, forces, conservation',
  summary: 'The Standard Model at A level: first-generation quarks and leptons, how they build hadrons, the four forces and the conservation laws that decide which reactions happen.',
  spec: [
    'Describe the structure of the nucleus in terms of protons and neutrons; use nuclide notation',
    'Know the charges and lepton/baryon numbers of the up and down quarks, the electron and the electron neutrino, and their antiparticles',
    'Describe hadrons as baryons (three quarks) or mesons (quark–antiquark), e.g. p, n, Δ, π',
    'Know that every particle has a corresponding antiparticle',
    'Know the four interactions (strong, weak, electromagnetic, gravitational), their relative strengths, ranges and which particles they act on',
    'Apply conservation of charge, baryon number and lepton number to particle reactions',
    'Know that the weak interaction can change quark flavour (e.g. in β decay) and that neutrinos take part only in weak interactions'
  ],
  learn: [
    { h: 'Nuclear structure', html: `
<p>A nucleus contains <b>protons</b> and <b>neutrons</b> (nucleons). Nuclide notation $^A_Z"X"$: Z = proton (atomic) number, A = nucleon (mass) number, so the number of neutrons is N = A − Z. <b>Isotopes</b> have the same Z but different N.</p>
<p>Example: $^{235}_{92}"U"$ has 92 protons and 143 neutrons.</p>` },
    { h: 'The fundamental particles (first generation)', html: `
<div class="tbl"><table><tr><th>Particle</th><th>Symbol</th><th>Charge / e</th><th>Baryon no. B</th><th>Lepton no. L</th></tr>
<tr><td>up quark</td><td>u</td><td>+⅔</td><td>+⅓</td><td>0</td></tr>
<tr><td>down quark</td><td>d</td><td>−⅓</td><td>+⅓</td><td>0</td></tr>
<tr><td>electron</td><td>e<sup>−</sup></td><td>−1</td><td>0</td><td>+1</td></tr>
<tr><td>electron neutrino</td><td>ν<sub>e</sub></td><td>0</td><td>0</td><td>+1</td></tr>
<tr><td>anti-up</td><td>ū</td><td>−⅔</td><td>−⅓</td><td>0</td></tr>
<tr><td>anti-down</td><td>d̄</td><td>+⅓</td><td>−⅓</td><td>0</td></tr>
<tr><td>positron</td><td>e<sup>+</sup></td><td>+1</td><td>0</td><td>−1</td></tr>
<tr><td>electron antineutrino</td><td>ν̄<sub>e</sub></td><td>0</td><td>0</td><td>−1</td></tr></table></div>
<p>Every particle has an <b>antiparticle</b> with the same mass but opposite charge, baryon number and lepton number.</p>` },
    { h: 'Hadrons: baryons and mesons', html: `
<p>Particles made of quarks are <b>hadrons</b>. Quarks are never found on their own.</p>
<ul><li><b>Baryons</b> — three quarks, B = +1. Proton <b>uud</b> (charge +1), neutron <b>udd</b> (0), Δ<sup>++</sup> <b>uuu</b> (+2), Δ<sup>−</sup> <b>ddd</b> (−1). Antibaryons are three antiquarks, B = −1.</li>
<li><b>Mesons</b> — a quark and an antiquark, B = 0. π<sup>+</sup> = <b>ud̄</b>, π<sup>−</sup> = <b>dū</b>, π<sup>0</sup> = uū or dd̄.</li></ul>
<p><b>Leptons</b> (electron, neutrino) are fundamental — not made of quarks — and do not feel the strong force.</p>
<div class="box tip"><b class="lbl">Try it</b><p>Open the <b>Explore</b> tab to build hadrons from quarks in the Particle Forge.</p></div>` },
    { h: 'The four interactions', html: `
<div class="tbl"><table><tr><th>Interaction</th><th>Relative strength</th><th>Range</th><th>Acts on</th></tr>
<tr><td>strong</td><td>1</td><td>~10<sup>−15</sup> m</td><td>quarks (hadrons) only</td></tr>
<tr><td>electromagnetic</td><td>~10<sup>−2</sup></td><td>infinite</td><td>charged particles</td></tr>
<tr><td>weak</td><td>~10<sup>−6</sup></td><td>~10<sup>−18</sup> m</td><td>all quarks and leptons</td></tr>
<tr><td>gravitational</td><td>~10<sup>−38</sup></td><td>infinite</td><td>all particles with mass (negligible between individual particles)</td></tr></table></div>
<ul><li>The <b>strong</b> interaction holds quarks together in hadrons and nucleons together in the nucleus.</li>
<li>The <b>weak</b> interaction is the only one that can change one quark flavour into another (d → u) and the only one that involves neutrinos.</li></ul>` },
    { h: 'Conservation laws and deciding which interaction', html: `
<div class="box def"><b class="lbl">Always conserved</b><p>Charge Q, baryon number B and lepton number L are conserved in <b>every</b> interaction. If any one fails, the reaction cannot happen.</p></div>
<p>Also: in <b>strong</b> and <b>electromagnetic</b> interactions the number of up quarks and the number of down quarks (counting antiquarks as −1) are each conserved. Only the <b>weak</b> interaction changes quark flavour.</p>
<div class="box def"><b class="lbl">β<sup>−</sup> decay</b><p>n → p + e<sup>−</sup> + ν̄<sub>e</sub>, which at quark level is d → u + e<sup>−</sup> + ν̄<sub>e</sub>.</p><p>Check: Q: 0 = 1 − 1 + 0 ✓ B: 1 = 1 ✓ L: 0 = +1 − 1 ✓. A neutrino is involved and the quark flavour changes, so it is weak.</p></div>
<div class="box def"><b class="lbl">β<sup>+</sup> decay (inside a nucleus)</b><p>p → n + e<sup>+</sup> + ν<sub>e</sub>, i.e. u → d + e<sup>+</sup> + ν<sub>e</sub>.</p></div>
<div class="box tip"><b class="lbl">Deciding which interaction</b><ol><li>Any neutrino, or a change in quark flavour → <b>weak</b>.</li><li>Only hadrons, with u and d numbers unchanged → <b>strong</b>.</li><li>Charged leptons/photons without neutrinos, no flavour change → <b>electromagnetic</b>.</li></ol></div>` }
  ],
  eqs: [['N = A - Z', 'neutron number'], ['"p" = "uud",  "n" = "udd"', 'nucleon quark content'], ['"d" → "u" + "e"^- + @bar{ν}_e', 'β⁻ decay at quark level']],
  worked: [
    { q: 'Is the reaction p + p → p + n + π<sup>+</sup> possible? If so, by which interaction?', s: ['Charge: +1 +1 = +2; after: +1 + 0 + 1 = +2 ✓', 'Baryon number: 1 + 1 = 2; after: 1 + 1 + 0 = 2 ✓', 'Lepton number: 0 = 0 ✓', 'Quarks before: uud + uud → 4u, 2d. After: uud + udd + ud̄ → u: 2+1+1 = 4; d: 1+2 −1 = 2 ✓', 'All conserved, no neutrinos, no flavour change → strong interaction.'], a: 'Possible, via the strong interaction' },
    { q: 'Identify particle X: ν<sub>e</sub> + n → p + X.', s: ['Charge: 0 + 0 = +1 + Q<sub>X</sub>, so Q<sub>X</sub> = −1.', 'Lepton number: +1 + 0 = 0 + L<sub>X</sub>, so L<sub>X</sub> = +1.', 'Baryon number: 0 + 1 = 1 + B<sub>X</sub>, so B<sub>X</sub> = 0.', 'Charge −1, L = +1, B = 0 → electron. A neutrino is involved → weak interaction.'], a: 'X is an electron, e<sup>−</sup>' },
    { q: 'A hadron has charge +1 and baryon number 0. Suggest its quark composition.', s: ['B = 0 → a meson (quark + antiquark).', 'Charge +1 = +⅔ + ⅓ → up quark + anti-down.'], a: 'ud̄ (the π<sup>+</sup>)' }
  ],
  pitfalls: ['Giving the antineutrino lepton number +1 — antileptons have L = −1.', 'Saying electrons feel the strong force.', 'Writing π<sup>+</sup> as “ud”: the second quark must be an antiquark, d̄.', 'Forgetting quark charges are fractions of e.', 'Checking only charge — baryon and lepton numbers must also balance.'],
  cards: [
    ['Quark composition of a proton?', 'uud'],
    ['Quark composition of a neutron?', 'udd'],
    ['Charge of an up quark?', '+⅔ e'],
    ['Charge of a down quark?', '−⅓ e'],
    ['Charge of an anti-down quark?', '+⅓ e'],
    ['Baryon number of a quark?', '+⅓'],
    ['What is a meson?', 'A hadron made of a quark and an antiquark (B = 0).'],
    ['Quark composition of π<sup>−</sup>?', 'dū'],
    ['Which particles do not feel the strong force?', 'Leptons (electron, neutrino).'],
    ['Three quantities always conserved in particle interactions?', 'Charge, baryon number, lepton number.'],
    ['Which interaction changes quark flavour?', 'The weak interaction.'],
    ['β<sup>−</sup> decay at quark level?', 'd → u + e<sup>−</sup> + ν̄<sub>e</sub>'],
    ['Range of the strong interaction?', '~10<sup>−15</sup> m'],
    ['Lepton number of a positron?', '−1'],
    ['Quark composition of Δ<sup>++</sup>?', 'uuu']
  ],
  quiz: [
    { q: 'The quark composition of a proton is', o: ['uud', 'udd', 'uuu', 'ud̄'], x: '⅔ + ⅔ − ⅓ = +1.' },
    { q: 'The charge on an anti-down quark is', o: ['+⅓ e', '−⅓ e', '+⅔ e', '−⅔ e'], x: 'Antiparticle has the opposite charge to d (−⅓).' },
    { q: 'Which of these is a lepton?', o: ['electron neutrino', 'proton', 'π<sup>+</sup>', 'up quark'], x: 'Leptons: electron and electron neutrino (and antiparticles).' },
    { q: 'The π<sup>−</sup> meson consists of', o: ['dū', 'ud̄', 'ddu', 'd̄u'], x: '−⅓ + (−⅔) = −1.' },
    { q: 'Which interaction does NOT act on leptons?', o: ['strong', 'weak', 'gravitational', 'electromagnetic (on charged leptons)'], x: 'Leptons are not made of quarks.' },
    { q: 'In β<sup>−</sup> decay, the quark change is', o: ['d → u', 'u → d', 'u → s', 'd → d̄'], x: 'udd (n) → uud (p).' },
    { q: 'The baryon number of a meson is', o: ['0', '+1', '+⅓', '−1'], x: '+⅓ − ⅓ = 0.' },
    { q: 'Which quantities are conserved in ALL particle interactions?', o: ['charge, baryon number and lepton number', 'charge only', 'charge and quark flavour', 'baryon number and quark flavour only'], x: 'Quark flavour can change in the weak interaction.' },
    { q: 'An interaction that involves a neutrino must be', o: ['weak', 'strong', 'electromagnetic', 'gravitational'], x: 'Neutrinos only feel the weak interaction (and gravity).' },
    { q: 'A particle with quark composition ddd has charge', o: ['−1 e', '0', '+1 e', '−3 e'], x: '3 × (−⅓) = −1 (the Δ<sup>−</sup>).' },
    { q: 'The approximate range of the strong interaction is', o: ['10<sup>−15</sup> m', '10<sup>−10</sup> m', '10<sup>−18</sup> m', 'infinite'], x: 'About the size of a nucleus.' },
    { q: 'The number of neutrons in $^{235}_{92}"U"$ is', o: ['143', '235', '92', '327'], x: '235 − 92.' },
    { q: 'The reaction p → n + e<sup>+</sup> + ν<sub>e</sub> conserves lepton number because', o: ['e<sup>+</sup> has L = −1 and ν<sub>e</sub> has L = +1', 'both e<sup>+</sup> and ν<sub>e</sub> have L = 0', 'both have L = +1', 'lepton number is not conserved in weak interactions'], x: '0 = −1 + 1.' }
  ],
  exam: [
    { q: 'State the quark composition of the neutron and show that its charge and baryon number are consistent with this.', m: 3, ms: ['udd', 'Charge: +⅔ − ⅓ − ⅓ = 0', 'Baryon number: ⅓ + ⅓ + ⅓ = 1'] },
    { q: 'The following reaction is proposed: p + ν̄<sub>e</sub> → n + e<sup>+</sup>. Show that it obeys the conservation laws and state, with a reason, the interaction responsible.', m: 4, ms: ['Charge: +1 + 0 = 0 + 1 ✓', 'Baryon number: 1 + 0 = 1 + 0 ✓', 'Lepton number: 0 − 1 = 0 − 1 ✓', 'Weak — a neutrino is involved / quark flavour changes (u → d).'] },
    { q: 'Explain why the reaction p + p → p + π<sup>+</sup> cannot occur.', m: 2, ms: ['Baryon number before = 2, after = 1.', 'Baryon number is not conserved (charge is conserved, so it is B that fails).'] },
    { q: 'Compare the strong and weak interactions in terms of relative strength, range and the particles on which they act.', m: 4, ms: ['Strong much stronger (≈10<sup>6</sup> times).', 'Strong range ~10<sup>−15</sup> m; weak range much shorter (~10<sup>−18</sup> m).', 'Strong acts on quarks/hadrons only.', 'Weak acts on both quarks and leptons (and changes quark flavour).'] }
  ],
  sims: ['forge'], gens: ['nuclide1']
});
