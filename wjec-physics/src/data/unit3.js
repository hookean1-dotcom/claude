/* ==========================================================
   UNIT 3 · Oscillations and Nuclei
   ========================================================== */
TOPICS.push({
  id: '3.1', unit: '3', title: 'Circular Motion', short: 'Angular velocity, centripetal force',
  summary: 'Moving in a circle at constant speed is still accelerating. Radians, angular velocity and the resultant force that points to the centre.',
  spec: [
    'Express angular displacement in radians',
    'Define period, frequency and angular velocity ω; use ω = 2π/T = 2πf',
    'Use v = ωr',
    'Understand that a body moving in a circle at constant speed is accelerating towards the centre',
    'Use a = v²/r = ω²r',
    'Use F = mv²/r = mω²r, identifying the physical force(s) providing the centripetal force'
  ],
  learn: [
    { h: 'Radians and angular velocity', html: `
<p>An angle in <b>radians</b> is arc length ÷ radius: $θ = @frac{s}{r}$. One complete turn is 2π rad = 360°.</p>
<div class="box def"><b class="lbl">Definitions</b><ul>
<li><b>Period</b> T: time for one complete revolution. <b>Frequency</b> f: revolutions per second, f = 1/T.</li>
<li><b>Angular velocity</b> ω: the angle swept out per unit time, $ω = @frac{Δθ}{Δt}$, unit rad s<sup>−1</sup>.</li></ul></div>
<p>$ω = @frac{2π}{T} = 2πf$ and the linear speed is $v = ωr$ (because in one period the body travels 2πr).</p>` },
    { h: 'Centripetal acceleration', html: `
<p>In uniform circular motion the <b>speed</b> is constant but the <b>direction</b> of the velocity changes continuously, so the velocity changes — the body is accelerating. The acceleration is directed towards the centre of the circle (centripetal):</p>
<div class="box eq">$a = @frac{v^2}{r} = ω^2 r$</div>
<p>Newton’s 2nd law then requires a <b>resultant force</b> towards the centre:</p>
<div class="box eq">$F = @frac{mv^2}{r} = mω^2 r$</div>
<div class="box warn"><b class="lbl">Common misconception</b><p>“Centripetal force” is not an extra force. It is the name for the resultant force towards the centre, provided by real forces: tension (ball on string), gravity (orbits), friction (car on a bend), normal contact force (rollercoaster), or a combination.</p></div>
<p>The centripetal force is perpendicular to the velocity, so it does no work: the kinetic energy stays constant. If the force is removed (the string breaks), the body moves off along a <b>tangent</b>.</p>` },
    { h: 'Vertical circles', html: `
<p>For a ball of mass m on a string of length r whirled in a vertical circle:</p>
<ul><li>At the bottom: tension and weight act in opposite directions: $T - mg = @frac{mv^2}{r}$, so the tension is largest here.</li>
<li>At the top: both act towards the centre: $T + mg = @frac{mv^2}{r}$. The string just stays taut when T = 0, i.e. $v = @sqrt{gr}$.</li></ul>` }
  ],
  eqs: [['ω = @frac{Δθ}{Δt} = @frac{2π}{T} = 2πf', 'angular velocity'], ['v = ωr', 'linear speed'], ['a = @frac{v^2}{r} = ω^2r', 'centripetal acceleration'], ['F = @frac{mv^2}{r} = mω^2r', 'centripetal (resultant) force']],
  worked: [
    { q: 'A record turntable rotates at 33⅓ revolutions per minute. Find ω, and the speed and acceleration of a point 15 cm from the centre.', s: ['f = 33.33/60 = 0.556 Hz, so ω = 2πf = 3.49 rad s<sup>−1</sup>.', 'v = ωr = 3.49 × 0.15 = 0.524 m s<sup>−1</sup>.', 'a = ω²r = 3.49² × 0.15 = 1.83 m s<sup>−2</sup>.'], a: '3.5 rad s<sup>−1</sup>; 0.52 m s<sup>−1</sup>; 1.8 m s<sup>−2</sup>' },
    { q: 'A 1200 kg car rounds a flat bend of radius 50 m at 15 m s<sup>−1</sup>. What friction force is needed?', s: ['F = mv²/r = 1200 × 15² / 50.'], a: '5400 N towards the centre' },
    { q: 'A 0.20 kg ball on a 0.80 m string moves in a vertical circle, with speed 5.0 m s<sup>−1</sup> at the bottom. Find the tension there.', s: ['T − mg = mv²/r.', 'T = 0.20 × 9.81 + 0.20 × 5.0²/0.80 = 1.96 + 6.25.'], a: '8.2 N' }
  ],
  pitfalls: ['Drawing “centripetal force” as an extra arrow on a free-body diagram alongside tension or gravity.', 'Forgetting to convert rpm to rad s<sup>−1</sup> (× 2π ÷ 60).', 'Saying the body is in equilibrium because its speed is constant.', 'Using degrees in θ = s/r.'],
  cards: [
    ['Define the radian.', 'The angle subtended at the centre of a circle by an arc equal in length to the radius.'],
    ['Define angular velocity.', 'Angle swept per unit time: ω = Δθ/Δt.'],
    ['ω in terms of T and f?', 'ω = 2π/T = 2πf'],
    ['Link between v and ω?', 'v = ωr'],
    ['Centripetal acceleration formulae?', 'a = v²/r = ω²r'],
    ['Direction of centripetal acceleration?', 'Towards the centre of the circle.'],
    ['Why is uniform circular motion accelerated?', 'Direction of velocity changes, so velocity changes.'],
    ['Work done by a centripetal force?', 'Zero — it is perpendicular to the velocity.'],
    ['What provides the centripetal force for a car on a flat bend?', 'Friction between tyres and road.'],
    ['Minimum speed at the top of a vertical circle on a string?', 'v = √(gr)'],
    ['What happens if the string breaks?', 'The body moves off along the tangent.']
  ],
  quiz: [
    { q: 'The unit of angular velocity is', o: ['rad s<sup>−1</sup>', 'm s<sup>−1</sup>', 'rad s<sup>−2</sup>', 'Hz m'], x: '' },
    { q: 'An object moves in a circle with period 0.50 s. Its angular velocity is', o: ['12.6 rad s<sup>−1</sup>', '2.0 rad s<sup>−1</sup>', '3.1 rad s<sup>−1</sup>', '0.080 rad s<sup>−1</sup>'], x: 'ω = 2π/0.50 = 4π.' },
    { q: 'For an object in uniform circular motion, the acceleration is', o: ['towards the centre', 'along the tangent', 'away from the centre', 'zero'], x: '' },
    { q: 'An object moves in a circle at constant speed. Which statement is correct?', o: ['Its velocity changes, so it accelerates', 'Its velocity is constant', 'The resultant force on it is zero', 'Its kinetic energy changes continuously'], x: '' },
    { q: 'The work done by the centripetal force during one revolution is', o: ['zero', 'F × 2πr', 'mv²', '½mv²'], x: 'Force is perpendicular to motion.' },
    { q: 'The speed of a car on a bend of fixed radius is doubled. The centripetal force needed', o: ['increases by a factor of 4', 'doubles', 'halves', 'stays the same'], x: 'F ∝ v².' },
    { q: 'An angle of 90° expressed in radians is', o: ['π/2', 'π', '2π', 'π/4'], x: '' },
    { q: 'A car travels round a flat, horizontal bend. The centripetal force is provided by', o: ['friction between the tyres and the road', 'the engine’s driving force', 'the car’s weight', 'the normal contact force'], x: '' },
    { q: 'A ball on a string moves in a vertical circle. At the lowest point the tension is', o: ['greater than the weight', 'equal to the weight', 'less than the weight', 'zero'], x: 'T − mg = mv²/r.' },
    { q: 'A body moves in a circle of radius 3.0 m with ω = 2.0 rad s<sup>−1</sup>. Its centripetal acceleration is', o: ['12 m s<sup>−2</sup>', '6.0 m s<sup>−2</sup>', '1.3 m s<sup>−2</sup>', '36 m s<sup>−2</sup>'], x: 'ω²r = 4 × 3.' },
    { q: 'A stone whirled in a horizontal circle is released. It moves off', o: ['along the tangent to the circle', 'radially outwards', 'radially inwards', 'in a spiral'], x: 'Newton’s 1st law.' }
  ],
  exam: [
    { q: 'Explain why a body moving in a circle at constant speed is accelerating, and state the direction of the acceleration.', m: 3, ms: ['Velocity is a vector; its direction is continuously changing.', 'So velocity changes, i.e. acceleration.', 'Directed towards the centre of the circle.'] },
    { q: 'A satellite of mass 500 kg orbits at a radius of 7.0 × 10<sup>6</sup> m with a period of 5800 s. Calculate its angular velocity, speed and the centripetal force on it.', m: 4, ms: ['ω = 2π/5800 = 1.08 × 10<sup>−3</sup> rad s<sup>−1</sup>', 'v = ωr = 7.58 × 10<sup>3</sup> m s<sup>−1</sup>', 'F = mω²r', '= 4.1 × 10<sup>3</sup> N'] },
    { q: 'A child on a swing (total mass 30 kg, length 2.5 m) passes the lowest point at 4.0 m s<sup>−1</sup>. Calculate the tension in the chains at that point.', m: 3, ms: ['T − mg = mv²/r', 'T = 30 × 9.81 + 30 × 16/2.5', '= 486 N (≈ 490 N)'] }
  ],
  sims: ['circular'], gens: ['circ2', 'circ3']
});

TOPICS.push({
  id: '3.2', unit: '3', title: 'Vibrations', short: 'SHM, damping, resonance',
  summary: 'Simple harmonic motion — the most important oscillation in physics — plus energy, damping, forced vibrations and resonance.',
  spec: [
    'Define simple harmonic motion as a = −ω²x',
    'Use x = A cos(ωt + ε) and the corresponding expressions for velocity and acceleration',
    'Recall vmax = Aω and amax = Aω²; understand phase',
    'Use T = 2π/ω, T = 2π√(m/k) and T = 2π√(l/g)',
    'Describe the interchange of kinetic and potential energy during SHM',
    'Describe free, damped (light, critical, heavy) and forced oscillations',
    'Describe resonance and the effect of damping on the resonance curve; give useful and unwanted examples',
    'Investigate SHM of a mass on a spring and damping (specified practicals)'
  ],
  learn: [
    { h: 'Defining SHM', html: `
<div class="box def"><b class="lbl">Definition</b><p>A body moves with <b>simple harmonic motion</b> if its acceleration is directly proportional to its displacement from a fixed point (the equilibrium position) and is always directed towards that point:</p><p style="text-align:center">$a = -ω^2 x$</p></div>
<p>The minus sign says the acceleration is opposite to the displacement. The solution is:</p>
<div class="box eq">$x = A@,"cos"(ωt + ε)$</div>
<p>A = amplitude, ω = angular frequency (rad s<sup>−1</sup>), ε = phase constant. The period does not depend on amplitude: $T = @frac{2π}{ω}$.</p>
<p>Differentiating: $v = -Aω@,"sin"(ωt + ε)$ and $a = -Aω^2@,"cos"(ωt + ε) = -ω^2x$.</p>
<ul><li>At the equilibrium position (x = 0): speed is maximum, $v_{max} = Aω$; acceleration is zero.</li>
<li>At the extremes (x = ±A): speed is zero; acceleration is maximum, $a_{max} = Aω^2$.</li></ul>
[[d:shm-graphs]]
<div class="box tip"><b class="lbl">Calculator</b><p>ωt is in <b>radians</b>. Switch your calculator to RAD for x = A cos(ωt + ε).</p></div>` },
    { h: 'Mass–spring and pendulum', html: `
<p><b>Mass on a spring</b>: restoring force F = −kx, so a = −(k/m)x. Comparing with a = −ω²x gives ω² = k/m:</p>
<div class="box eq">$T = 2π@sqrt{@frac{m}{k}}$</div>
<p><b>Simple pendulum</b> (small amplitude, less than about 10°):</p>
<div class="box eq">$T = 2π@sqrt{@frac{l}{g}}$</div>
<p>The pendulum’s period is independent of the mass of the bob and (for small swings) the amplitude.</p>
<div class="box def"><b class="lbl">Specified practical</b><p>Measure the time for 10–20 oscillations for a range of masses on a spring (use a fiducial marker at the equilibrium position). Plot T² against m: a straight line of gradient 4π²/k. For damping, attach a card to the mass and record the amplitude over successive oscillations.</p></div>` },
    { h: 'Energy in SHM', html: `
<p>Energy transfers continuously between kinetic and potential. With no damping the total is constant. For a mass–spring system:</p>
<div class="box eq">$E_{total} = @frac{1}{2}kA^2 = @frac{1}{2}mv_{max}^2$</div>
<p>E<sub>k</sub> is maximum at the equilibrium position; E<sub>p</sub> is maximum at the extremes. Total energy ∝ A².</p>` },
    { h: 'Free, damped and forced oscillations', html: `
<ul><li><b>Free oscillation</b>: the system oscillates at its natural frequency with no external force acting other than the restoring force (no energy lost).</li>
<li><b>Damped oscillation</b>: resistive forces remove energy, so the amplitude decreases.</li>
<li><b>Forced oscillation</b>: an external periodic driving force makes the system oscillate at the driving frequency.</li></ul>
[[d:damping]]
<ul><li><b>Light damping</b>: amplitude decays gradually (exponentially); many oscillations.</li>
<li><b>Critical damping</b>: returns to equilibrium in the shortest possible time without oscillating (e.g. car suspension, meter needles).</li>
<li><b>Heavy damping</b>: returns slowly, without oscillating.</li></ul>` },
    { h: 'Resonance', html: `
<div class="box def"><b class="lbl">Resonance</b><p>When the driving frequency equals the natural frequency of the system, the amplitude of the forced oscillation is a maximum, because energy is transferred most efficiently from the driver.</p></div>
[[d:resonance]]
<p>Increasing the damping lowers and broadens the peak, and moves it to slightly lower frequency.</p>
<p><b>Useful</b>: tuning a radio circuit, musical instruments, MRI. <b>Problematic</b>: bridges (Tacoma Narrows; Millennium Bridge wobble caused by pedestrians), vibrating machinery, car panels at certain engine speeds — reduced by adding damping or changing the natural frequency.</p>` }
  ],
  eqs: [['a = -ω^2x', 'definition of SHM'], ['x = A@,"cos"(ωt + ε)', 'displacement'], ['v = -Aω@,"sin"(ωt + ε)', 'velocity'], ['v_{max} = Aω,  a_{max} = Aω^2', 'maxima'], ['T = @frac{2π}{ω}', 'period'], ['T = 2π@sqrt{@frac{m}{k}}', 'mass–spring'], ['T = 2π@sqrt{@frac{l}{g}}', 'simple pendulum'], ['E = @frac{1}{2}kA^2', 'total energy (spring)']],
  worked: [
    { q: 'A 0.50 kg mass on a spring (k = 20 N m<sup>−1</sup>) is pulled down 4.0 cm and released. Find T, v<sub>max</sub>, a<sub>max</sub> and the total energy.', s: ['ω = √(k/m) = √40 = 6.32 rad s<sup>−1</sup>; T = 2π/ω = 0.99 s.', 'v<sub>max</sub> = Aω = 0.040 × 6.32 = 0.25 m s<sup>−1</sup>.', 'a<sub>max</sub> = Aω² = 0.040 × 40 = 1.6 m s<sup>−2</sup>.', 'E = ½kA² = ½ × 20 × 0.040² = 0.016 J.'], a: 'T = 0.99 s; 0.25 m s<sup>−1</sup>; 1.6 m s<sup>−2</sup>; 16 mJ' },
    { q: 'What length of simple pendulum has a period of 2.0 s?', s: ['l = gT²/4π² = 9.81 × 4.0 / 39.5.'], a: '0.99 m' },
    { q: 'A body moves with x = 0.050 cos(10t) m. Find x and v at t = 0.10 s.', s: ['ωt = 1.0 rad (calculator in radians!).', 'x = 0.050 cos 1.0 = 0.027 m.', 'v = −Aω sin(ωt) = −0.050 × 10 × sin 1.0 = −0.42 m s<sup>−1</sup>.'], a: 'x = 0.027 m; v = −0.42 m s<sup>−1</sup>' }
  ],
  pitfalls: ['Calculator in degree mode for cos(ωt).', 'Thinking amplitude affects the period of SHM.', 'Saying acceleration is maximum at equilibrium (it is zero there).', 'Confusing the frequency f with the angular frequency ω = 2πf.', 'Saying critical damping means “stops immediately”.'],
  cards: [
    ['Define SHM.', 'Acceleration ∝ displacement from equilibrium and always directed towards it: a = −ω²x.'],
    ['Displacement equation for SHM?', 'x = A cos(ωt + ε)'],
    ['Maximum speed in SHM?', 'v<sub>max</sub> = Aω (at x = 0)'],
    ['Maximum acceleration in SHM?', 'a<sub>max</sub> = Aω² (at x = ±A)'],
    ['Period of a mass on a spring?', 'T = 2π√(m/k)'],
    ['Period of a simple pendulum?', 'T = 2π√(l/g)'],
    ['Phase relationship between x and a in SHM?', 'Antiphase (π rad).'],
    ['Define free oscillation.', 'Oscillation at natural frequency with no energy loss or external driving force.'],
    ['Define forced oscillation.', 'Oscillation driven by an external periodic force, at the driving frequency.'],
    ['Define critical damping.', 'Returns to equilibrium in the shortest time without oscillating.'],
    ['Define resonance.', 'Maximum amplitude when driving frequency = natural frequency.'],
    ['Effect of more damping on a resonance curve?', 'Lower, broader peak (at a slightly lower frequency).'],
    ['Total energy of SHM (spring)?', '½kA² — proportional to A².'],
    ['Graph to find k from mass–spring timings?', 'T² against m: gradient 4π²/k.']
  ],
  quiz: [
    { q: 'The defining equation of simple harmonic motion is', o: ['a = −ω²x', 'a = ω²x', 'v = −ω²x', 'x = −ω²a'], x: '' },
    { q: 'At the equilibrium position of an SHM oscillator', o: ['speed is maximum and acceleration is zero', 'speed is zero and acceleration is maximum', 'both are maximum', 'both are zero'], x: '' },
    { q: 'The mass on a spring is increased by a factor of 4. The period', o: ['doubles', 'quadruples', 'halves', 'is unchanged'], x: 'T ∝ √m.' },
    { q: 'The period of a simple pendulum depends on', o: ['its length and g', 'its mass and length', 'its amplitude and mass', 'its mass only'], x: '' },
    { q: 'An oscillator has A = 0.020 m and ω = 50 rad s<sup>−1</sup>. Its maximum speed is', o: ['1.0 m s<sup>−1</sup>', '50 m s<sup>−1</sup>', '0.0004 m s<sup>−1</sup>', '2500 m s<sup>−1</sup>'], x: 'Aω.' },
    { q: 'In SHM the phase difference between displacement and acceleration is', o: ['π rad', 'π/2 rad', '0', '2π rad'], x: 'a = −ω²x.' },
    { q: 'Critical damping means the system', o: ['returns to equilibrium in the shortest time without oscillating', 'oscillates with gradually decreasing amplitude', 'never returns to equilibrium', 'oscillates at double the natural frequency'], x: '' },
    { q: 'Resonance occurs when', o: ['the driving frequency equals the natural frequency', 'damping is at its maximum', 'the amplitude is zero', 'the driving force is removed'], x: '' },
    { q: 'Increasing the damping of a driven oscillator', o: ['reduces and broadens the resonance peak', 'raises and sharpens the peak', 'moves the peak to much higher frequency', 'has no effect'], x: '' },
    { q: 'The amplitude of an SHM oscillator doubles. Its total energy', o: ['increases by a factor of 4', 'doubles', 'is unchanged', 'halves'], x: 'E ∝ A².' },
    { q: 'A pendulum is taken to the Moon, where g is one sixth of that on Earth. Its period', o: ['increases by a factor of √6', 'increases by a factor of 6', 'decreases by a factor of √6', 'is unchanged'], x: 'T ∝ 1/√g.' },
    { q: 'A mass on a spring oscillates with ω = 4.0 rad s<sup>−1</sup>. When its displacement is +0.050 m its acceleration is', o: ['−0.80 m s<sup>−2</sup>', '+0.80 m s<sup>−2</sup>', '−0.20 m s<sup>−2</sup>', '0'], x: 'a = −16 × 0.050.' }
  ],
  exam: [
    { q: 'Define simple harmonic motion.', m: 2, ms: ['Acceleration proportional to displacement from equilibrium (fixed point).', 'Always directed towards the equilibrium point (a = −ω²x).'] },
    { q: 'Describe how you would use a mass–spring system to determine the spring constant k by a graphical method.', m: 6, ms: ['Hang known mass on spring; displace slightly and release (vertical oscillation).', 'Time 10–20 oscillations with stopwatch; divide for T; repeat and average.', 'Use a fiducial marker at equilibrium to start/stop timing.', 'Repeat for a range of masses.', 'Plot T² against m: straight line through origin (or intercept for spring mass).', 'k = 4π² / gradient.'] },
    { q: 'Explain, using an example, why resonance can be a problem in engineering and describe one way to reduce it.', m: 3, ms: ['Structure has a natural frequency; a periodic force (wind, footsteps, engine) at that frequency causes large amplitude.', 'e.g. Millennium Bridge / Tacoma Narrows / machinery → damage.', 'Add damping (dampers) or change natural frequency (stiffen / change mass).'] }
  ],
  sims: ['shm', 'resonance'], gens: ['shm1', 'shm2', 'pend1']
});

TOPICS.push({
  id: '3.3', unit: '3', title: 'Kinetic Theory', short: 'Ideal gases, pV = nRT, molecular speeds',
  summary: 'Linking the behaviour of gases to billions of molecules in random motion: the gas laws, the mole, and why temperature measures mean molecular kinetic energy.',
  spec: [
    'Understand the mole, the Avogadro constant and molar mass',
    'Recall the experimental gas laws (Boyle, Charles, pressure law) and the ideal gas equation pV = nRT = NkT',
    'State the assumptions of the kinetic theory of an ideal gas',
    'Derive p = ⅓ρc̄² (c̄² = mean square speed)',
    'Show that the mean kinetic energy of a molecule is ½mc̄² = (3/2)kT, and calculate rms speeds',
    'Understand absolute zero and the kelvin scale; estimate absolute zero (specified practical)'
  ],
  learn: [
    { h: 'The mole', html: `
<p>The <b>mole</b> is the SI unit of amount of substance. One mole contains N<sub>A</sub> = 6.02 × 10<sup>23</sup> particles (the <b>Avogadro constant</b>). Molar mass M is the mass of one mole (e.g. 0.028 kg mol<sup>−1</sup> for N<sub>2</sub>).</p>
<p>Number of moles $n = @frac{"mass"}{M}$; number of molecules $N = nN_A$.</p>` },
    { h: 'The gas laws and the ideal gas equation', html: `
<ul><li><b>Boyle’s law</b>: pV = constant at constant temperature.</li>
<li><b>Charles’s law</b>: V ∝ T at constant pressure.</li>
<li><b>Pressure law</b>: p ∝ T at constant volume.</li></ul>
<p>Combined, these give the <b>ideal gas equation</b>:</p>
<div class="box eq">$pV = nRT = NkT$</div>
<p>R = 8.31 J mol<sup>−1</sup> K<sup>−1</sup> (molar gas constant); $k = R/N_A = 1.38 × 10^{-23} "J K"^{-1}$ (Boltzmann constant). T <b>must</b> be in kelvin.</p>
[[d:isotherms]]
<p>Extrapolating p against θ (°C) at constant volume to p = 0 gives <b>absolute zero</b>, about −273 °C (0 K) — the temperature at which the molecules would have minimum kinetic energy.</p>` },
    { h: 'Assumptions of kinetic theory', html: `
<ol><li>A gas consists of a very large number of molecules in continuous, random motion.</li>
<li>The volume of the molecules themselves is negligible compared with the volume of the container.</li>
<li>There are no intermolecular forces except during collisions.</li>
<li>Collisions (with each other and the walls) are perfectly elastic.</li>
<li>The duration of a collision is negligible compared with the time between collisions.</li>
<li>Newton’s laws apply to the molecules.</li></ol>` },
    { h: 'Deriving p = ⅓ρc̄²', html: `
<p>Consider N molecules each of mass m in a cube of side l.</p>
<ol><li>A molecule with velocity component u along x hits a wall and rebounds: change of momentum = 2mu.</li>
<li>Time between hits on the same wall = 2l/u, so rate of change of momentum (force) = 2mu ÷ 2l/u = mu²/l.</li>
<li>Total force from all molecules = (m/l)Σu². Pressure = force ÷ l² = (m/l³)Σu² = (Nm/V) × mean(u²).</li>
<li>Motion is random, so mean(u²) = mean(v²) = mean(w²) and c̄² = mean(u²) + mean(v²) + mean(w²) = 3 mean(u²).</li>
<li>So $p = @frac{1}{3}@frac{Nm}{V}@bar{c^2}$, and since ρ = Nm/V: $p = @frac{1}{3}ρ@bar{c^2}$.</li></ol>` },
    { h: 'Temperature and molecular kinetic energy', html: `
<p>From $pV = @frac{1}{3}Nm@bar{c^2}$ and $pV = NkT$:</p>
<div class="box eq">$@frac{1}{2}m@bar{c^2} = @frac{3}{2}kT$</div>
<p>The mean translational kinetic energy of a molecule is proportional to the absolute temperature, and is the same for all ideal gases at the same temperature. Lighter molecules therefore move faster: the <b>rms speed</b> is $c_{rms} = @sqrt{@bar{c^2}} = @sqrt{@frac{3kT}{m}}$.</p>
<p>At 300 K, nitrogen molecules have c<sub>rms</sub> ≈ 520 m s<sup>−1</sup>; hydrogen molecules about 1900 m s<sup>−1</sup>.</p>` }
  ],
  eqs: [['pV = nRT', 'ideal gas (n moles)'], ['pV = NkT', 'ideal gas (N molecules)'], ['k = @frac{R}{N_A}', 'Boltzmann constant'], ['p = @frac{1}{3}ρ@bar{c^2}', 'kinetic theory'], ['@frac{1}{2}m@bar{c^2} = @frac{3}{2}kT', 'mean KE of a molecule'], ['n = @frac{"mass"}{M}', 'moles from mass']],
  worked: [
    { q: 'How many moles and molecules are in 0.024 m³ of gas at 1.01 × 10<sup>5</sup> Pa and 20 °C?', s: ['T = 293 K.', 'n = pV/RT = 1.01 × 10<sup>5</sup> × 0.024 / (8.31 × 293) = 0.996 mol.', 'N = nN<sub>A</sub> = 6.0 × 10<sup>23</sup>.'], a: '1.0 mol; 6.0 × 10<sup>23</sup> molecules' },
    { q: 'Find the rms speed of nitrogen molecules (M = 0.028 kg mol<sup>−1</sup>) at 300 K.', s: ['m = M/N<sub>A</sub> = 0.028 / 6.02 × 10<sup>23</sup> = 4.65 × 10<sup>−26</sup> kg.', 'c<sub>rms</sub> = √(3kT/m) = √(3 × 1.38 × 10<sup>−23</sup> × 300 / 4.65 × 10<sup>−26</sup>).'], a: '517 m s<sup>−1</sup>' },
    { q: 'A sealed container of gas at 1.0 × 10<sup>5</sup> Pa is heated from 20 °C to 100 °C. Find the new pressure.', s: ['Constant V: p/T = constant.', 'p<sub>2</sub> = 1.0 × 10<sup>5</sup> × 373/293.'], a: '1.27 × 10<sup>5</sup> Pa' }
  ],
  pitfalls: ['Using °C in pV = nRT.', 'Confusing n (moles) and N (molecules), or R and k.', 'Using molar mass (per mole) as the mass of one molecule.', 'Calling c̄² the “mean speed squared”: it is the mean of the squares of the speeds.', 'Forgetting that doubling T increases c<sub>rms</sub> by √2, not 2.'],
  cards: [
    ['Value of the Avogadro constant?', '6.02 × 10<sup>23</sup> mol<sup>−1</sup>'],
    ['Ideal gas equation (moles)?', 'pV = nRT'],
    ['Ideal gas equation (molecules)?', 'pV = NkT'],
    ['k in terms of R?', 'k = R/N<sub>A</sub>'],
    ['State Boyle’s law.', 'pV = constant for a fixed mass of gas at constant temperature.'],
    ['Kinetic theory pressure equation?', 'p = ⅓ρc̄²'],
    ['Mean KE of a molecule?', '½mc̄² = (3/2)kT'],
    ['rms speed formula?', 'c<sub>rms</sub> = √(3kT/m)'],
    ['Give four kinetic theory assumptions.', 'Random motion; negligible molecular volume; no forces except in collisions; elastic collisions; negligible collision time.'],
    ['What causes gas pressure?', 'Molecules’ change of momentum on collision with walls → force on walls.'],
    ['Same T, different gases: what is equal?', 'Mean kinetic energy per molecule.'],
    ['Absolute zero in °C?', '−273.15 °C']
  ],
  quiz: [
    { q: 'Which is NOT an assumption of the kinetic theory of an ideal gas?', o: ['Molecules attract each other strongly at all times', 'Collisions are elastic', 'The volume of the molecules is negligible', 'Molecules move randomly'], x: 'No intermolecular forces except during collisions.' },
    { q: 'The absolute temperature of an ideal gas is doubled. The rms speed of its molecules', o: ['increases by a factor of √2', 'doubles', 'quadruples', 'is unchanged'], x: 'c<sub>rms</sub> ∝ √T.' },
    { q: 'A fixed mass of gas at constant temperature is compressed to half its volume. The pressure', o: ['doubles', 'halves', 'quadruples', 'is unchanged'], x: 'Boyle’s law.' },
    { q: 'The Boltzmann constant k is equal to', o: ['R/N<sub>A</sub>', 'RN<sub>A</sub>', 'N<sub>A</sub>/R', 'R/T'], x: '' },
    { q: 'Hydrogen and oxygen are at the same temperature. Which is correct?', o: ['Their molecules have the same mean kinetic energy', 'Their molecules have the same rms speed', 'Oxygen molecules move faster', 'Hydrogen molecules have more kinetic energy'], x: 'Hydrogen molecules are lighter so move faster, with the same mean KE.' },
    { q: 'The pressure of a gas on the walls of its container is due to', o: ['the change of momentum of molecules colliding with the walls', 'the weight of the gas molecules', 'attractive forces between molecules', 'the molecules sticking to the walls'], x: '' },
    { q: 'The number of molecules in 2.0 mol of gas is', o: ['1.2 × 10<sup>24</sup>', '3.0 × 10<sup>23</sup>', '6.0 × 10<sup>23</sup>', '2.0'], x: '' },
    { q: 'A gas has density 1.2 kg m<sup>−3</sup> and mean square speed 2.5 × 10<sup>5</sup> m² s<sup>−2</sup>. Its pressure is', o: ['1.0 × 10<sup>5</sup> Pa', '3.0 × 10<sup>5</sup> Pa', '3.3 × 10<sup>4</sup> Pa', '1.0 × 10<sup>4</sup> Pa'], x: '⅓ × 1.2 × 2.5 × 10<sup>5</sup>.' },
    { q: 'In the equation pV = nRT, T must be measured in', o: ['kelvin', 'degrees Celsius', 'joules', 'either K or °C'], x: '' },
    { q: 'The mean kinetic energy of a gas molecule at 27 °C is about', o: ['6.2 × 10<sup>−21</sup> J', '5.6 × 10<sup>−22</sup> J', '3.7 × 10<sup>3</sup> J', '4.1 × 10<sup>−21</sup> J'], x: '1.5 × 1.38 × 10<sup>−23</sup> × 300.' },
    { q: 'For a fixed mass of gas at constant volume, the pressure is directly proportional to', o: ['absolute temperature', 'Celsius temperature', 'volume', '1/temperature'], x: 'Pressure law.' }
  ],
  exam: [
    { q: 'State four assumptions of the kinetic theory of gases.', m: 4, ms: ['Large number of molecules in random motion.', 'Volume of molecules negligible compared to container.', 'No intermolecular forces except during collisions.', 'Collisions elastic / duration negligible compared to time between collisions.'] },
    { q: 'Starting from the motion of a single molecule in a cubic box, derive p = ⅓ρc̄².', m: 6, ms: ['Momentum change at wall = 2mu.', 'Time between collisions with same wall = 2l/u.', 'Force = rate of change of momentum = mu²/l.', 'Sum over N molecules; pressure = F/l² = Nm⟨u²⟩/V.', '⟨u²⟩ = c̄²/3 by randomness/symmetry.', 'ρ = Nm/V so p = ⅓ρc̄².'] },
    { q: 'A cylinder contains 0.50 kg of helium (M = 0.004 kg mol<sup>−1</sup>) at 290 K. Calculate the number of moles and the total kinetic energy of the molecules.', m: 4, ms: ['n = 0.50/0.004 = 125 mol', 'N = 125 × 6.02 × 10<sup>23</sup> = 7.5 × 10<sup>25</sup>', 'Mean KE = 1.5kT = 6.0 × 10<sup>−21</sup> J', 'Total = 4.5 × 10<sup>5</sup> J (or 1.5nRT)'] }
  ],
  sims: ['gas'], gens: ['gas1', 'gas2', 'rms1']
});

TOPICS.push({
  id: '3.4', unit: '3', title: 'Thermal Physics', short: 'Internal energy, first law, heat capacity',
  summary: 'Internal energy, heat and work, and the first law of thermodynamics — plus specific heat capacity and reading p–V diagrams.',
  spec: [
    'Define internal energy as the sum of the random kinetic and potential energies of the molecules',
    'Use U = (3/2)nRT for an ideal monatomic gas',
    'Understand heat as energy transferred due to a temperature difference, and thermal equilibrium',
    'Use W = pΔV and understand that work is the area under a p–V graph',
    'Apply the first law of thermodynamics ΔU = Q − W',
    'Define and use specific heat capacity, Q = mcΔθ',
    'Determine the specific heat capacity of a solid (specified practical)'
  ],
  learn: [
    { h: 'Internal energy', html: `
<div class="box def"><b class="lbl">Definition</b><p>The <b>internal energy</b> U of a system is the sum of the random kinetic energies and potential energies of all its molecules.</p></div>
<p>In an ideal gas there are no intermolecular forces, so the potential energy is zero and U is all kinetic. For a <b>monatomic</b> ideal gas (e.g. He, Ne, Ar):</p>
<div class="box eq">$U = N × @frac{3}{2}kT = @frac{3}{2}nRT$</div>
<p>U depends only on T: heat an ideal gas and its internal energy rises in proportion to its kelvin temperature.</p>` },
    { h: 'Heat, work and the first law', html: `
<ul><li><b>Heat</b> Q: energy transferred from a hotter to a colder region because of a temperature difference.</li>
<li><b>Work</b> W: energy transferred by a force moving — for a gas, expanding against an external pressure.</li>
<li><b>Thermal equilibrium</b>: no net flow of heat between bodies; they are at the same temperature.</li></ul>
<div class="box def"><b class="lbl">First law of thermodynamics</b><p>$ΔU = Q - W$</p><p>ΔU = increase in internal energy, Q = heat supplied <b>to</b> the system, W = work done <b>by</b> the system.</p></div>
<p>At constant pressure, $W = pΔV$. More generally, W = area under the p–V graph. Expansion: W positive. Compression: W negative (work done on the gas).</p>
<div class="tbl"><table><tr><th>Process</th><th>What’s zero</th><th>First law becomes</th></tr>
<tr><td>constant volume</td><td>W = 0</td><td>ΔU = Q</td></tr>
<tr><td>constant temperature (ideal gas)</td><td>ΔU = 0</td><td>Q = W</td></tr>
<tr><td>no heat exchange (fast / insulated)</td><td>Q = 0</td><td>ΔU = −W</td></tr>
<tr><td>complete cycle</td><td>ΔU = 0</td><td>net Q = net W = area enclosed by the loop</td></tr></table></div>` },
    { h: 'Specific heat capacity', html: `
<div class="box def"><b class="lbl">Definition</b><p>The <b>specific heat capacity</b> c of a substance is the energy needed to raise the temperature of 1 kg of it by 1 K (or 1 °C). $Q = mcΔθ$, unit J kg<sup>−1</sup> K<sup>−1</sup>.</p></div>
<p>Water: 4200 J kg<sup>−1</sup> K<sup>−1</sup>; aluminium ≈ 900; copper ≈ 390.</p>
<div class="box def"><b class="lbl">Specified practical: c of a solid</b><p>Insert an electrical heater and a thermometer into holes in an insulated metal block (a drop of oil improves thermal contact). Record V and I, and the temperature every 30 s. Energy supplied = VIt. Plot θ against t: in the linear region the gradient = VI/(mc), so c = VI/(m × gradient). Insulation reduces heat loss; using the gradient (not start/end values) avoids the effect of the heater warming up.</p></div>` }
  ],
  eqs: [['U = @frac{3}{2}nRT', 'monatomic ideal gas'], ['ΔU = Q - W', 'first law (W by the gas)'], ['W = pΔV', 'work at constant pressure'], ['Q = mcΔθ', 'specific heat capacity']],
  worked: [
    { q: '2.0 mol of helium is heated from 300 K to 400 K. Find the increase in internal energy.', s: ['ΔU = (3/2)nRΔT = 1.5 × 2.0 × 8.31 × 100.'], a: '2.5 kJ' },
    { q: 'A gas at a constant 1.0 × 10<sup>5</sup> Pa expands from 2.0 × 10<sup>−3</sup> m³ to 3.0 × 10<sup>−3</sup> m³ while 250 J of heat is supplied. Find W and ΔU.', s: ['W = pΔV = 1.0 × 10<sup>5</sup> × 1.0 × 10<sup>−3</sup> = 100 J (done by the gas).', 'ΔU = Q − W = 250 − 100.'], a: 'W = 100 J; ΔU = 150 J' },
    { q: 'A 50 W heater raises the temperature of a 1.0 kg aluminium block at 0.055 K s<sup>−1</sup>. Estimate c for aluminium.', s: ['Power = mc × (rate of temperature rise).', 'c = 50 / (1.0 × 0.055).'], a: '910 J kg<sup>−1</sup> K<sup>−1</sup> (an overestimate if heat is lost)' }
  ],
  pitfalls: ['Mixing sign conventions: in ΔU = Q − W, W is work done BY the gas.', 'Using U = (3/2)nRT for a diatomic gas or a solid.', 'Saying heat and temperature are the same thing.', 'Forgetting that ΔU = 0 over a complete cycle.'],
  cards: [
    ['Define internal energy.', 'Sum of the random kinetic and potential energies of the molecules.'],
    ['Internal energy of an ideal monatomic gas?', 'U = (3/2)nRT (kinetic only).'],
    ['State the first law of thermodynamics.', 'ΔU = Q − W (Q supplied to, W done by, the system).'],
    ['Work done by a gas at constant pressure?', 'W = pΔV'],
    ['Area under a p–V graph?', 'Work done by (or on) the gas.'],
    ['First law at constant volume?', 'W = 0 so ΔU = Q.'],
    ['ΔU over a complete cycle?', 'Zero.'],
    ['Define specific heat capacity.', 'Energy to raise the temperature of 1 kg by 1 K.'],
    ['c of water?', '4200 J kg<sup>−1</sup> K<sup>−1</sup>'],
    ['Define thermal equilibrium.', 'No net heat flow between bodies — same temperature.'],
    ['Why is PE zero in an ideal gas?', 'No intermolecular forces.']
  ],
  quiz: [
    { q: 'The internal energy of a system is', o: ['the sum of the random kinetic and potential energies of its molecules', 'the heat it contains', 'its temperature in kelvin', 'the kinetic energy of the system as a whole'], x: '' },
    { q: 'The internal energy of an ideal gas consists of', o: ['kinetic energy only', 'potential energy only', 'both kinetic and potential energy', 'neither'], x: 'No intermolecular forces.' },
    { q: 'In ΔU = Q − W, W represents', o: ['work done by the system', 'work done on the system', 'heat lost by the system', 'the weight of the gas'], x: '' },
    { q: '500 J of heat is supplied to a gas, which does 200 J of work. The change in internal energy is', o: ['+300 J', '+700 J', '−300 J', '+200 J'], x: '500 − 200.' },
    { q: 'A gas is heated at constant volume. Which is correct?', o: ['W = 0 so ΔU = Q', 'Q = 0 so ΔU = −W', 'ΔU = 0 so Q = W', 'Q = W = ΔU = 0'], x: '' },
    { q: 'The area under a pressure–volume graph represents', o: ['work done', 'heat supplied', 'internal energy', 'temperature'], x: '' },
    { q: 'The energy needed to raise 2.0 kg of aluminium (c = 900 J kg<sup>−1</sup> K<sup>−1</sup>) by 10 K is', o: ['18 kJ', '1.8 kJ', '4.5 kJ', '180 kJ'], x: '' },
    { q: 'The unit of specific heat capacity is', o: ['J kg<sup>−1</sup> K<sup>−1</sup>', 'J K<sup>−1</sup>', 'J kg<sup>−1</sup>', 'W kg<sup>−1</sup> K<sup>−1</sup>'], x: '' },
    { q: 'Over one complete cycle of a heat engine, the change in internal energy of the gas is', o: ['zero', 'equal to the work done', 'equal to the heat supplied', 'always negative'], x: 'Back to the same state.' },
    { q: 'The internal energy of a fixed mass of ideal monatomic gas doubles when', o: ['its kelvin temperature doubles', 'its Celsius temperature doubles', 'its volume doubles at constant pressure only', 'its pressure halves'], x: 'U ∝ T.' },
    { q: 'A gas is compressed quickly so no heat is exchanged. 300 J of work is done on it. The gas', o: ['gains 300 J of internal energy and warms up', 'loses 300 J of internal energy', 'has no change in internal energy', 'loses 300 J of heat'], x: 'Q = 0, W = −300 J, ΔU = +300 J.' }
  ],
  exam: [
    { q: 'State the first law of thermodynamics, defining each term.', m: 3, ms: ['ΔU = Q − W', 'ΔU = increase in internal energy; Q = heat supplied to system', 'W = work done by system'] },
    { q: 'A gas expands at a constant pressure of 2.0 × 10<sup>5</sup> Pa from 1.5 × 10<sup>−3</sup> m³ to 4.0 × 10<sup>−3</sup> m³. Its internal energy increases by 750 J. Calculate the heat supplied.', m: 3, ms: ['W = pΔV = 2.0 × 10<sup>5</sup> × 2.5 × 10<sup>−3</sup> = 500 J', 'Q = ΔU + W', '= 1250 J'] },
    { q: 'Describe how to determine the specific heat capacity of a metal block using an electrical method, explaining how you would reduce the effect of heat losses.', m: 6, ms: ['Measure mass of block on balance.', 'Heater and thermometer in holes; oil for thermal contact.', 'Record V and I (constant); temperature at regular time intervals.', 'Insulate block (lagging).', 'Plot θ against t; use gradient of linear section.', 'c = VI / (m × gradient); (or start below room temperature and finish equally above).'] }
  ],
  sims: ['pv'], gens: ['intu1', 'first1', 'shc1']
});

TOPICS.push({
  id: '3.5', unit: '3', title: 'Nuclear Decay', short: 'α, β, γ, half-life, exponential decay',
  summary: 'Unstable nuclei decay randomly. The properties of the radiations, background radiation, and the exponential mathematics of half-life.',
  spec: [
    'Describe the nature and properties (ionising, penetrating, range) of α, β⁻, β⁺ and γ radiation',
    'Write balanced nuclear equations for α and β decay',
    'Account for background radiation and correct for it',
    'Understand the spontaneous and random nature of decay',
    'Define activity and the becquerel; decay constant λ; half-life',
    'Use A = λN, N = N₀e^(−λt), A = A₀e^(−λt) and λ = ln 2 / T½',
    'Use the inverse square law for γ radiation',
    'Investigate decay using a dice analogy and γ absorption/inverse square law (specified practicals)'
  ],
  learn: [
    { h: 'The three radiations', html: `
<div class="tbl"><table><tr><th></th><th>α</th><th>β<sup>−</sup></th><th>γ</th></tr>
<tr><td>Nature</td><td>helium nucleus $^4_2"He"$</td><td>fast electron (β<sup>+</sup>: positron)</td><td>high-energy EM photon</td></tr>
<tr><td>Charge</td><td>+2e</td><td>−e (β<sup>+</sup>: +e)</td><td>0</td></tr>
<tr><td>Ionising</td><td>strongly</td><td>moderately</td><td>weakly</td></tr>
<tr><td>Range in air</td><td>a few cm</td><td>up to about 1 m</td><td>very large (intensity follows inverse square law)</td></tr>
<tr><td>Stopped by</td><td>paper / skin</td><td>a few mm of aluminium</td><td>reduced by several cm of lead</td></tr></table></div>
<p>The more strongly a radiation ionises, the faster it loses energy, so the shorter its range.</p>` },
    { h: 'Nuclear equations', html: `
<p>Nucleon number and proton number (charge) are conserved.</p>
<ul><li><b>α decay</b>: $^A_Z"X" → ^{A-4}_{Z-2}"Y" + ^4_2"α"$, e.g. $^{238}_{92}"U" → ^{234}_{90}"Th" + ^4_2"α"$.</li>
<li><b>β<sup>−</sup> decay</b> (a neutron becomes a proton): $^A_Z"X" → ^A_{Z+1}"Y" + ^0_{-1}"β" + @bar{ν}_e$.</li>
<li><b>β<sup>+</sup> decay</b> (a proton becomes a neutron): $^A_Z"X" → ^A_{Z-1}"Y" + ^0_{+1}"β" + ν_e$.</li>
<li><b>γ emission</b> often follows α or β decay as the daughter nucleus loses excess energy; A and Z are unchanged.</li></ul>` },
    { h: 'Background radiation and randomness', html: `
<p><b>Background radiation</b> is always present: radon gas from rocks (the largest source in much of the UK, especially granite areas), rocks and buildings, cosmic rays, food and drink, and medical sources. Measure the background count rate with no source present and subtract it from every reading.</p>
<p>Decay is <b>random</b> — it is impossible to predict which nucleus will decay next or when — and <b>spontaneous</b> — it is not affected by external conditions such as temperature, pressure or chemical combination. However, with huge numbers of nuclei, the fraction that decays per second is predictable.</p>` },
    { h: 'Activity, decay constant and half-life', html: `
<div class="box def"><b class="lbl">Definitions</b><ul>
<li><b>Activity</b> A: the number of nuclei decaying per second. Unit: becquerel, 1 Bq = 1 decay per second.</li>
<li><b>Decay constant</b> λ: the probability per unit time that a nucleus will decay (s<sup>−1</sup>). $A = λN$.</li>
<li><b>Half-life</b> T<sub>½</sub>: the time taken for the number of undecayed nuclei (or the activity) to halve.</li></ul></div>
<div class="box eq">$N = N_0e^{-λt}$ &nbsp;&nbsp; $A = A_0e^{-λt}$ &nbsp;&nbsp; $λ = @frac{"ln"@,2}{T_{½}}$</div>
[[d:decay]]
<p>After x half-lives, $N = N_0/2^x$. Taking logs: $"ln"@,A = "ln"@,A_0 - λt$, so a graph of ln A against t is a straight line of gradient −λ.</p>
[[d:ln-decay]]
<p>Example: carbon-14 (T<sub>½</sub> = 5730 years) dating. If a sample’s activity per gram is 25% of that of living material, two half-lives have passed: about 11 500 years.</p>` },
    { h: 'Practical work', html: `
<p><b>Dice analogy</b>: roll a large number of dice; remove those showing a six (“decayed”); record the number remaining each throw. The probability per throw is 1/6, playing the role of λ. Plot N against throw number, and ln N against throw number.</p>
<p><b>γ inverse square law</b>: measure count rate at various distances d from a γ source with a GM tube, correcting for background. Since I ∝ 1/d², plot (corrected count rate)<sup>−½</sup> against d: a straight line. Handle sources with tongs, keep them at arm’s length and minimise exposure time.</p>` }
  ],
  eqs: [['A = λN', 'activity'], ['N = N_0e^{-λt}', 'undecayed nuclei'], ['A = A_0e^{-λt}', 'activity'], ['λ = @frac{"ln"@,2}{T_{½}}', 'half-life'], ['N = @frac{N_0}{2^x}', 'x half-lives'], ['I ∝ @frac{1}{d^2}', 'γ intensity']],
  worked: [
    { q: 'Iodine-131 has a half-life of 8.0 days. A sample has initial activity 4.0 MBq. Find its activity after (a) 24 days and (b) 30 days.', s: ['(a) 24 days = 3 half-lives: A = 4.0/2³ = 0.50 MBq.', '(b) λ = ln 2/8.0 = 0.0866 day<sup>−1</sup>.', 'A = 4.0 e<sup>−0.0866 × 30</sup> = 4.0 × 0.0743.'], a: '(a) 0.50 MBq (b) 0.30 MBq' },
    { q: 'A sample of carbon-14 (T<sub>½</sub> = 5730 years) has activity 3.7 × 10<sup>4</sup> Bq. How many C-14 nuclei does it contain? (1 year = 3.16 × 10<sup>7</sup> s)', s: ['T<sub>½</sub> = 5730 × 3.16 × 10<sup>7</sup> = 1.81 × 10<sup>11</sup> s.', 'λ = 0.693 / 1.81 × 10<sup>11</sup> = 3.83 × 10<sup>−12</sup> s<sup>−1</sup>.', 'N = A/λ.'], a: '9.7 × 10<sup>15</sup> nuclei' },
    { q: 'Complete the equation for the α decay of radium-226 (Z = 88).', s: ['A: 226 − 4 = 222. Z: 88 − 2 = 86 (radon).'], a: '$^{226}_{88}"Ra" → ^{222}_{86}"Rn" + ^4_2"α"$' }
  ],
  pitfalls: ['Using λ in day<sup>−1</sup> with A in Bq to find N (λ must be in s<sup>−1</sup> for A = λN in Bq).', 'Forgetting to subtract background count.', 'Saying γ is stopped completely by lead — it is only reduced.', 'Saying half-life is “half the time for the sample to decay”.', 'Getting Z wrong in β decay: β<sup>−</sup> increases Z by 1.'],
  cards: [
    ['What is an α particle?', 'A helium nucleus: 2 protons + 2 neutrons.'],
    ['What stops α?', 'Paper (or a few cm of air).'],
    ['What stops β<sup>−</sup>?', 'A few mm of aluminium.'],
    ['Change in A and Z in α decay?', 'A − 4, Z − 2'],
    ['Change in A and Z in β<sup>−</sup> decay?', 'A unchanged, Z + 1'],
    ['Define activity.', 'Number of decays per second (Bq).'],
    ['Define decay constant.', 'Probability per unit time of a nucleus decaying.'],
    ['Define half-life.', 'Time for number of undecayed nuclei (or activity) to halve.'],
    ['Link λ and T<sub>½</sub>?', 'λ = ln 2 / T<sub>½</sub>'],
    ['Exponential decay equation?', 'N = N<sub>0</sub>e<sup>−λt</sup>'],
    ['Meaning of “random” decay?', 'Cannot predict which nucleus decays or when.'],
    ['Meaning of “spontaneous” decay?', 'Unaffected by external conditions (T, p, chemistry).'],
    ['Largest source of UK background radiation?', 'Radon gas.'],
    ['Graph of ln A against t: gradient?', '−λ']
  ],
  quiz: [
    { q: 'An α particle is', o: ['a helium nucleus', 'a fast electron', 'a high-energy photon', 'a hydrogen nucleus'], x: '' },
    { q: 'The most penetrating radiation is', o: ['γ', 'α', 'β<sup>−</sup>', 'β<sup>+</sup>'], x: '' },
    { q: 'In β<sup>−</sup> decay', o: ['Z increases by 1 and A is unchanged', 'Z decreases by 1 and A is unchanged', 'Z decreases by 2 and A by 4', 'A increases by 1'], x: 'n → p + e<sup>−</sup> + ν̄<sub>e</sub>.' },
    { q: 'In α decay the nucleon number', o: ['decreases by 4', 'decreases by 2', 'is unchanged', 'increases by 4'], x: '' },
    { q: 'The unit of the decay constant is', o: ['s<sup>−1</sup>', 's', 'Bq s', 'no unit'], x: '' },
    { q: 'A radioactive isotope has a half-life of 2.0 hours. After 6.0 hours the fraction remaining is', o: ['1/8', '1/3', '1/6', '1/4'], x: 'Three half-lives.' },
    { q: 'An isotope has a half-life of 10 s. Its decay constant is', o: ['0.069 s<sup>−1</sup>', '6.9 s<sup>−1</sup>', '0.10 s<sup>−1</sup>', '14 s<sup>−1</sup>'], x: 'ln 2 / 10.' },
    { q: 'Radioactive decay is described as random because', o: ['it is impossible to predict when a particular nucleus will decay', 'nuclei decay at a constant rate', 'it depends on temperature', 'all nuclei decay at once'], x: '' },
    { q: 'A sample has 1.0 × 10<sup>20</sup> nuclei and λ = 1.0 × 10<sup>−10</sup> s<sup>−1</sup>. Its activity is', o: ['1.0 × 10<sup>10</sup> Bq', '1.0 × 10<sup>30</sup> Bq', '1.0 × 10<sup>−10</sup> Bq', '6.9 × 10<sup>9</sup> Bq'], x: 'A = λN.' },
    { q: 'The largest contribution to background radiation in most of the UK is from', o: ['radon gas', 'nuclear power stations', 'cosmic rays', 'medical X-rays'], x: '' },
    { q: 'The distance between a γ source and a detector is doubled. The corrected count rate', o: ['falls to one quarter', 'halves', 'is unchanged', 'falls to one eighth'], x: 'Inverse square law.' },
    { q: 'Heating a radioactive sample strongly would', o: ['not change its half-life', 'decrease its half-life', 'increase its half-life', 'stop it decaying'], x: 'Decay is spontaneous.' }
  ],
  exam: [
    { q: 'Describe an experiment to determine whether a source emits α, β or γ radiation.', m: 5, ms: ['Measure background count rate with GM tube (no source) and subtract.', 'Measure count rate with source close to GM tube.', 'Insert paper: large drop → α present.', 'Insert few mm aluminium: large drop → β present.', 'Count still above background with several cm lead reducing it → γ. Safety: tongs, distance, limit time.'] },
    { q: 'A radioactive sample has an initial activity of 6.4 × 10<sup>5</sup> Bq and a half-life of 12 minutes. Calculate the decay constant, the initial number of nuclei and the activity after 1.0 hour.', m: 5, ms: ['λ = ln 2 / (12 × 60) = 9.6 × 10<sup>−4</sup> s<sup>−1</sup>', 'N<sub>0</sub> = A<sub>0</sub>/λ', '= 6.6 × 10<sup>8</sup>', '1 hour = 5 half-lives', 'A = 6.4 × 10<sup>5</sup>/32 = 2.0 × 10<sup>4</sup> Bq'] },
    { q: 'Explain what is meant by the random and spontaneous nature of radioactive decay.', m: 2, ms: ['Random: cannot predict when a given nucleus will decay (only probability).', 'Spontaneous: not affected by external factors such as temperature or pressure.'] }
  ],
  sims: ['decay'], gens: ['decay1', 'decay2', 'decay3']
});

TOPICS.push({
  id: '3.6', unit: '3', title: 'Nuclear Energy', short: 'E = mc², binding energy, fission, fusion',
  summary: 'Mass and energy are equivalent. Binding energy per nucleon explains why both fission of heavy nuclei and fusion of light nuclei release energy.',
  spec: [
    'Use E = mc² and understand mass–energy equivalence',
    'Use the unified atomic mass unit, u, and 1 u ≡ 931 MeV',
    'Define mass defect and binding energy; calculate binding energy per nucleon',
    'Sketch and interpret the graph of binding energy per nucleon against nucleon number',
    'Explain why fission of heavy nuclei and fusion of light nuclei release energy',
    'Calculate the energy released in nuclear reactions from masses',
    'Describe the conditions needed for fusion and the principle of a fission chain reaction'
  ],
  learn: [
    { h: 'Mass–energy equivalence', html: `
<div class="box eq">$E = mc^2$</div>
<p>Mass is a form of energy. Any change in energy ΔE of a system is accompanied by a change in mass Δm = ΔE/c². In chemistry the changes are tiny; in nuclear reactions they are measurable.</p>
<p>Nuclear masses are given in <b>unified atomic mass units</b>: 1 u = 1.66 × 10<sup>−27</sup> kg (one twelfth of the mass of a carbon-12 atom). Its energy equivalent is <b>931 MeV</b>.</p>` },
    { h: 'Mass defect and binding energy', html: `
<p>The mass of a nucleus is always <b>less</b> than the total mass of its separate protons and neutrons.</p>
<div class="box def"><b class="lbl">Definitions</b><ul>
<li><b>Mass defect</b> Δm = (total mass of the separated nucleons) − (mass of the nucleus).</li>
<li><b>Binding energy</b> = the energy needed to separate a nucleus completely into its individual nucleons = Δm c².</li></ul></div>
<p>When the nucleus forms, this energy is released, which is why the nucleus has less mass.</p>
<p>Example: ⁴He. 2m<sub>p</sub> + 2m<sub>n</sub> = 2(1.007276) + 2(1.008665) = 4.031882 u; nucleus = 4.001506 u. Δm = 0.030376 u → 0.030376 × 931 = 28.3 MeV, or 7.07 MeV per nucleon.</p>` },
    { h: 'Binding energy per nucleon', html: `
[[d:binding]]
<p>The higher the binding energy per nucleon, the more stable the nucleus. The curve peaks near iron-56 (about 8.8 MeV per nucleon).</p>
<ul><li><b>Fusion</b>: joining light nuclei (left of the peak) makes nuclei with higher binding energy per nucleon → energy released.</li>
<li><b>Fission</b>: splitting a heavy nucleus (right of the peak) into two medium nuclei with higher binding energy per nucleon → energy released.</li></ul>
<div class="box tip"><b class="lbl">Energy released</b><p>Energy released = (total mass before − total mass after) × c² = (total binding energy after − total binding energy before).</p></div>` },
    { h: 'Fission', html: `
<p>A uranium-235 nucleus absorbs a slow (thermal) neutron, becomes unstable U-236 and splits into two smaller nuclei plus 2 or 3 fast neutrons, releasing about 200 MeV, mostly as kinetic energy of the fragments:</p>
<div class="box eq">$^{235}_{92}"U" + ^1_0"n" → ^{141}_{56}"Ba" + ^{92}_{36}"Kr" + 3^1_0"n"$</div>
<p>The released neutrons can cause further fissions — a <b>chain reaction</b>. In a reactor it is controlled so that on average exactly one neutron per fission causes another fission.</p>` },
    { h: 'Fusion', html: `
<div class="box eq">$^2_1"H" + ^3_1"H" → ^4_2"He" + ^1_0"n" + 17.6 "MeV"$</div>
<p>Nuclei are positively charged and repel. To get close enough (~10<sup>−15</sup> m) for the strong interaction to act, they need very high kinetic energies: temperatures of order 10<sup>7</sup>–10<sup>8</sup> K, and a high density so collisions are frequent. This happens in stars; on Earth, magnetic confinement (tokamaks) is being developed.</p>
<p>Per kilogram of fuel, fusion releases more energy than fission.</p>` }
  ],
  eqs: [['E = mc^2', 'mass–energy'], ['1 "u" = 1.66 × 10^{-27} "kg" ≡ 931 "MeV"', ''], ['Δm = Zm_p + (A - Z)m_n - m_{nucleus}', 'mass defect'], ['"BE" = Δmc^2', 'binding energy']],
  worked: [
    { q: 'Find the energy released in the fusion ²H + ³H → ⁴He + n. Nuclear masses: ²H 2.013553 u, ³H 3.015501 u, ⁴He 4.001506 u, n 1.008665 u.', s: ['Mass before = 5.029054 u.', 'Mass after = 5.010171 u.', 'Δm = 0.018883 u.', 'E = 0.018883 × 931 MeV.'], a: '17.6 MeV (2.8 × 10<sup>−12</sup> J)' },
    { q: 'For ²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + 3n, the masses are U 235.043930 u, Ba 140.914411 u, Kr 91.926156 u, n 1.008665 u. Find the energy released.', s: ['Before: 235.043930 + 1.008665 = 236.052595 u.', 'After: 140.914411 + 91.926156 + 3 × 1.008665 = 235.866562 u.', 'Δm = 0.186033 u.', 'E = 0.186033 × 931.'], a: '173 MeV' },
    { q: 'What is the energy equivalent of 1.0 g of mass?', s: ['E = mc² = 1.0 × 10<sup>−3</sup> × (3.00 × 10<sup>8</sup>)².'], a: '9.0 × 10<sup>13</sup> J' }
  ],
  pitfalls: ['Saying binding energy is energy “stored in” or “released by” a nucleus to hold it together: it is the energy needed to separate it.', 'Subtracting the wrong way: mass before − mass after gives the energy released.', 'Using the total binding energy (not per nucleon) to compare stability.', 'Mixing atomic and nuclear masses without accounting for electrons.'],
  cards: [
    ['Define mass defect.', 'Mass of separate nucleons − mass of nucleus.'],
    ['Define binding energy.', 'Energy needed to separate a nucleus completely into its nucleons.'],
    ['Energy equivalent of 1 u?', '931 MeV'],
    ['Most stable nucleus (peak BE/nucleon)?', 'Iron-56 (≈ 8.8 MeV per nucleon).'],
    ['Why does fission release energy?', 'Products have higher BE per nucleon than the heavy nucleus.'],
    ['Why does fusion release energy?', 'Product has higher BE per nucleon than the light nuclei.'],
    ['Why does fusion need very high temperatures?', 'Nuclei need high KE to overcome electrostatic repulsion.'],
    ['What is a chain reaction?', 'Neutrons released by fission cause further fissions.'],
    ['Energy per U-235 fission?', 'About 200 MeV.'],
    ['D–T fusion energy?', '17.6 MeV']
  ],
  quiz: [
    { q: 'The binding energy of a nucleus is', o: ['the energy needed to separate it into its individual nucleons', 'the energy released when it decays', 'the kinetic energy of its nucleons', 'the energy of the strong force per nucleon'], x: '' },
    { q: 'The nucleus with the greatest binding energy per nucleon is approximately', o: ['⁵⁶Fe', '²³⁵U', '⁴He', '²H'], x: '' },
    { q: 'The energy equivalent of 1 u is about', o: ['931 MeV', '1 MeV', '0.511 MeV', '9.31 MeV'], x: '' },
    { q: 'Fusion requires very high temperatures because', o: ['the nuclei must overcome electrostatic repulsion', 'neutrons must be slowed down', 'the nuclei must be ionised', 'the strong force is repulsive at short range'], x: '' },
    { q: 'Fission of a heavy nucleus releases energy because', o: ['the products have greater binding energy per nucleon', 'the products have less binding energy per nucleon', 'mass is created', 'neutrons are absorbed'], x: '' },
    { q: 'A nucleus has a mass defect of 0.0304 u. Its binding energy is about', o: ['28.3 MeV', '0.0304 MeV', '931 MeV', '2.83 MeV'], x: '0.0304 × 931.' },
    { q: 'The energy equivalent of 1.0 g of matter is', o: ['9.0 × 10<sup>13</sup> J', '9.0 × 10<sup>16</sup> J', '3.0 × 10<sup>5</sup> J', '3.0 × 10<sup>8</sup> J'], x: '' },
    { q: 'In a fission chain reaction', o: ['neutrons released by one fission cause further fissions', 'protons released cause further fissions', 'the products fuse together', 'γ rays split more nuclei'], x: '' },
    { q: 'In any nuclear reaction, which are conserved?', o: ['nucleon number and charge', 'nucleon number only', 'rest mass only', 'number of neutrons'], x: 'Rest mass is not conserved; mass-energy is.' },
    { q: 'The mass of a nucleus compared with the total mass of its separate nucleons is', o: ['smaller', 'larger', 'equal', 'sometimes larger, sometimes smaller'], x: '' }
  ],
  exam: [
    { q: 'Define binding energy and explain, with reference to the graph of binding energy per nucleon against nucleon number, why both fission and fusion release energy.', m: 5, ms: ['Energy needed to separate nucleus into its constituent nucleons.', 'Graph rises steeply to a peak near Fe-56 then falls gradually.', 'Fusion of light nuclei → products further up the curve (higher BE/nucleon).', 'Fission of heavy nuclei → products nearer the peak.', 'Increase in total binding energy = energy released (mass decreases).'] },
    { q: 'Calculate the binding energy per nucleon of ⁵⁶Fe. Mass of ⁵⁶Fe nucleus = 55.920664 u; m<sub>p</sub> = 1.007276 u; m<sub>n</sub> = 1.008665 u.', m: 4, ms: ['26 protons, 30 neutrons: 26(1.007276) + 30(1.008665) = 56.449126 u', 'Δm = 0.528462 u', 'BE = 0.528462 × 931 = 492 MeV', 'Per nucleon = 8.79 MeV'] },
    { q: 'Explain why fusion reactions in stars require very high temperatures and high densities.', m: 3, ms: ['Nuclei are positive and repel electrostatically.', 'High temperature → high KE to get close enough (~fm) for strong force.', 'High density → high collision rate.'] }
  ],
  sims: ['binding'], gens: ['mass1', 'be1']
});
