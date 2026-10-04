/* ==========================================================
   4.5 FORCES
   ========================================================== */
TOPICS.push({
  id: '5.1', unit: '5', ref: '4.5.1', title: 'Forces and their interactions', short: 'Vectors, weight, resultant forces',
  summary: 'Scalars and vectors, contact and non-contact forces, weight and mass, and how to combine forces into a single resultant — including (Higher) free body diagrams and resolving forces.',
  spec: [
    'Scalar quantities have magnitude only; vector quantities have magnitude and direction; a vector can be represented by an arrow (length = magnitude)',
    'A force is a push or pull on an object due to interaction with another object; forces are contact (friction, air resistance, tension, normal contact force) or non-contact (gravitational, electrostatic, magnetic)',
    'Force is a vector; describe the interaction between pairs of objects which produce a force on each object',
    'Weight is the force acting on an object due to gravity; it depends on the gravitational field strength where the object is',
    'W = m g (recall); weight acts at a single point called the centre of mass; weight ∝ mass; weight is measured with a calibrated spring-balance (newtonmeter)',
    'The resultant force is a single force with the same effect as all the forces acting together; calculate the resultant of two forces in a straight line',
    '(HT) Describe the forces acting on an isolated object; use free body diagrams to describe qualitatively how several forces lead to a resultant force, including balanced forces',
    '(HT) Resolve a single force into two components at right angles; use vector (scale) diagrams to show resolution, equilibrium and the resultant of two forces (magnitude and direction)'
  ],
  learn: [
    { h: 'Scalars and vectors', html: `
<div class="box def"><b class="lbl">Definitions</b><p><b>Scalar</b> quantities have <b>magnitude only</b>. <b>Vector</b> quantities have <b>magnitude and an associated direction</b>.</p></div>
<div class="tbl"><table><tr><th>Scalars</th><th>Vectors</th></tr><tr><td>distance, speed, mass, time, energy, temperature</td><td>displacement, velocity, acceleration, force (including weight), momentum</td></tr></table></div>
<p>A vector can be drawn as an <b>arrow</b>: the <b>length</b> shows the magnitude and the <b>direction</b> of the arrow shows the direction.</p>` },
    { h: 'Contact and non-contact forces', html: `
<p>A <b>force</b> is a push or a pull that acts on an object because of an interaction with another object. Forces always come in pairs — each object exerts a force on the other.</p>
<div class="tbl"><table><tr><th>Contact forces (objects touching)</th><th>Non-contact forces (objects separated)</th></tr><tr><td>friction, air resistance, tension, normal contact force</td><td>gravitational force, electrostatic force, magnetic force</td></tr></table></div>
<p>Example: a book on a table pushes down on the table, and the table pushes up on the book (normal contact force). The Earth pulls the book down (weight), and the book pulls the Earth up with an equal gravitational force.</p>` },
    { h: 'Weight and mass', html: `
<p><b>Weight</b> is the force acting on an object due to gravity. Near the Earth this is due to the Earth’s <b>gravitational field</b>. An object’s weight depends on the <b>gravitational field strength</b> where it is — you weigh less on the Moon, but your mass is the same.</p>
<div class="box def"><b class="lbl">Recall this equation</b><p>weight = mass × gravitational field strength &nbsp; $W = mg$</p><p class="small">W in newtons (N), m in kg, g in N/kg (on Earth g = 9.8 N/kg — always given in the question)</p></div>
<p>Weight and mass are <b>directly proportional</b>: $W ∝ m$. Weight acts at a single point called the <b>centre of mass</b>. It is measured with a calibrated <b>spring-balance (newtonmeter)</b>.</p>` },
    { h: 'Resultant forces', html: `
<p>The <b>resultant force</b> is the single force that has the same effect as all the original forces acting together.</p>
<ul><li>Forces in the <b>same direction</b>: add them.</li><li>Forces in <b>opposite directions</b>: subtract; the resultant acts in the direction of the larger force.</li></ul>
[[d:resultant]]
<p>If the resultant force is <b>zero</b>, the forces are <b>balanced</b>: the object stays still or keeps moving at a constant velocity.</p>` },
    { h: 'Free body diagrams and resolving forces', ht: true, html: `
<p>A <b>free body diagram</b> shows a single object as a dot or box with an arrow for every force acting <b>on</b> it, drawn from the point where the force acts.</p>
[[d:freebody]]
<p>A single force can be <b>resolved</b> into two components at right angles that together have the same effect. Two forces at an angle can be combined by drawing a <b>scale vector diagram</b>: draw the arrows tip-to-tail to scale; the resultant goes from the tail of the first to the tip of the last. Measure its length (magnitude) and angle (direction).</p>
<p>An object is in <b>equilibrium</b> when the force arrows drawn tip-to-tail make a <b>closed shape</b> — the resultant is zero.</p>
<p class="small muted">Only scale drawings are required — not trigonometry.</p>` }
  ],
  eqs: [['W = mg', 'weight (recall)'], ['W ∝ m', 'weight is proportional to mass']],
  worked: [
    { q: 'An astronaut has a mass of 80 kg. Calculate her weight on Earth (g = 9.8 N/kg) and on the Moon (g = 1.6 N/kg).', s: ['Earth: $W = mg = 80 × 9.8 = 784 "N"$', 'Moon: $W = 80 × 1.6 = 128 "N"$', 'Her mass is 80 kg in both places.'], a: '784 N on Earth, 128 N on the Moon' },
    { q: 'A car’s engine provides a driving force of 3000 N. Air resistance is 800 N and friction is 400 N. Calculate the resultant force.', s: ['Resistive forces act backwards: 800 + 400 = 1200 N', 'Resultant = 3000 − 1200 = 1800 N', 'Direction: forwards (the direction of the larger force)'], a: '1800 N forwards' },
    { ht: 1, q: 'Forces of 30 N east and 40 N north act on an object. Use a scale drawing to find the resultant.', s: ['Choose a scale, e.g. 1 cm = 10 N. Draw 3.0 cm east, then from its tip 4.0 cm north.', 'Draw the resultant from the start to the end point and measure it: 5.0 cm = 50 N.', 'Measure the angle with a protractor: about 53° north of east.'], a: '50 N at about 53° north of east' }
  ],
  pitfalls: ['Giving mass in newtons or weight in kilograms.', 'Saying weight is the same on the Moon.', 'Adding forces that act in opposite directions.', 'Forgetting to give the direction of a resultant force.', 'Drawing forces that act on other objects in a free body diagram.'],
  cards: [
    ['Scalar vs vector?', 'Scalar: magnitude only. Vector: magnitude and direction.'],
    ['Three vector quantities?', 'Force, velocity, displacement (also acceleration, momentum).'],
    ['Four contact forces?', 'Friction, air resistance, tension, normal contact force.'],
    ['Three non-contact forces?', 'Gravitational, electrostatic, magnetic.'],
    ['Define weight.', 'The force acting on an object due to gravity.'],
    ['Equation for weight?', '$W = mg$ (N, kg, N/kg)'],
    ['What is the centre of mass?', 'The single point at which the weight of an object may be considered to act.'],
    ['How is weight measured?', 'With a calibrated spring-balance (newtonmeter).'],
    ['Define resultant force.', 'A single force with the same effect as all the forces acting together.'],
    ['What does zero resultant force mean?', 'Balanced forces — object stationary or at constant velocity.'],
    ['(HT) What is a free body diagram?', 'A diagram of one object showing all the forces acting on it as arrows.', 'ht'],
    ['(HT) What does it mean to resolve a force?', 'Split it into two components at right angles with the same overall effect.', 'ht']
  ],
  quiz: [
    { q: 'Which is a vector quantity?', o: ['velocity', 'speed', 'mass', 'energy'], x: 'Has a direction.' },
    { q: 'Which is a non-contact force?', o: ['magnetic force', 'friction', 'tension', 'air resistance'], x: 'Acts at a distance.' },
    { q: 'A 5.0 kg bag on Earth (g = 9.8 N/kg) has a weight of', o: ['49 N', '5.0 N', '0.51 N', '14.8 N'], x: 'W = mg.' },
    { q: 'Weight is measured using', o: ['a newtonmeter', 'a top-pan balance in kg', 'a ruler', 'a stopwatch'], x: 'A calibrated spring-balance.' },
    { q: 'Forces of 12 N to the right and 5 N to the left act on a box. The resultant is', o: ['7 N to the right', '17 N to the right', '7 N to the left', '60 N'], x: 'Subtract opposite forces.' },
    { q: 'An astronaut goes from Earth to the Moon. Her', o: ['mass stays the same but weight decreases', 'mass and weight both decrease', 'weight stays the same but mass decreases', 'mass increases'], x: 'g is smaller on the Moon.' },
    { q: 'Weight and mass are', o: ['directly proportional', 'inversely proportional', 'unrelated', 'the same quantity'], x: 'W = mg.' },
    { q: 'When the resultant force on a moving object is zero, the object', o: ['continues at constant velocity', 'slows down', 'speeds up', 'stops immediately'], x: 'Balanced forces.' },
    { q: 'Which is an example of tension?', o: ['the force in a rope pulling a trailer', 'the pull of the Earth on a satellite', 'the force between two magnets', 'air resistance on a car'], x: 'Tension is a contact force in a stretched rope or cable.' },
    { q: 'Two forces of 6 N and 8 N act at right angles. The resultant has magnitude', o: ['10 N', '14 N', '2 N', '48 N'], x: 'A scale drawing gives 10 N (a 6-8-10 triangle).', ht: 1 },
    { q: 'In a free body diagram, you draw', o: ['all the forces acting on one object', 'all forces in the system', 'only the resultant force', 'only contact forces'], x: 'One object, all forces on it.', ht: 1 },
    { q: 'An object is in equilibrium if the force arrows drawn tip-to-tail', o: ['form a closed shape', 'all point the same way', 'are all the same length', 'form a straight line'], x: 'Resultant = 0.', ht: 1 }
  ],
  exam: [
    { q: 'Explain the difference between mass and weight.', m: 3, ms: ['Mass is the amount of matter / measured in kg / scalar.', 'Weight is the force due to gravity / measured in N / vector.', 'Weight depends on gravitational field strength; mass does not change with location.'] },
    { q: 'A skydiver of mass 70 kg falls with an air resistance force of 400 N. g = 9.8 N/kg. Calculate the resultant force on her.', m: 3, ms: ['W = 70 × 9.8 = 686 N', 'Resultant = 686 − 400 = 286 N', 'Downwards'] },
    { q: 'A 20 N force acts at 30° above the horizontal. Describe how to find its horizontal component using a scale drawing.', m: 3, ms: ['Draw the 20 N force to scale at 30° to the horizontal.', 'Draw horizontal and vertical lines from its ends to make a right-angled triangle.', 'Measure the horizontal side and convert with the scale (≈ 17 N).'], ht: 1 }
  ],
  sims: ['forces'], gens: ['wmg1', 'wmg2', 'res1']
});

TOPICS.push({
  id: '5.2', unit: '5', ref: '4.5.2–4.5.3', title: 'Work done and elasticity', short: 'W = Fs, Hooke’s law, RP6',
  summary: 'A force does work when it moves an object. Stretching a spring stores elastic potential energy — investigate force and extension (Required Practical 6) and the limit of proportionality.',
  spec: [
    'When a force causes an object to move through a distance, work is done on the object',
    'Work done = force × distance moved along the line of action of the force: W = F s (recall)',
    'One joule of work is done when a force of one newton causes a displacement of one metre: 1 J = 1 N m; convert between newton-metres and joules',
    'Describe the energy transfer involved when work is done; work done against friction causes a rise in temperature',
    'Give examples of forces involved in stretching, bending or compressing; explain why more than one force is needed to change the shape of a stationary object',
    'Describe the difference between elastic and inelastic deformation',
    'Extension of an elastic object is directly proportional to the force applied, provided the limit of proportionality is not exceeded: F = k e (recall); also applies to compression',
    'Work done stretching a spring equals the elastic potential energy stored (if not inelastically deformed): Eₑ = ½ k e² (equation sheet)',
    'Describe the difference between linear and non-linear force–extension relationships; calculate a spring constant; interpret force–extension data',
    'Required practical 6: investigate the relationship between force and extension for a spring'
  ],
  learn: [
    { h: 'Work done', html: `
<p>When a force causes an object to move through a distance, <b>work is done</b> on the object. Doing work <b>transfers energy</b>.</p>
<div class="box def"><b class="lbl">Recall this equation</b><p>work done = force × distance (moved along the line of action of the force) &nbsp; $W = Fs$</p><p class="small">W in joules (J), F in newtons (N), s in metres (m)</p></div>
<p><b>1 joule</b> of work is done when a force of <b>1 newton</b> causes a displacement of <b>1 metre</b>: 1 J = 1 N m.</p>
<p>Work done against <b>friction</b> transfers energy to the thermal store, causing a <b>rise in temperature</b> — rub your hands together or feel hot brakes.</p>` },
    { h: 'Deforming objects', html: `
<p>To stretch, bend or compress a stationary object you need <b>more than one force</b>. With only one force the object would simply move (accelerate) instead of changing shape. For example, to stretch a spring you pull on one end while the clamp pulls on the other end.</p>
<ul><li><b>Elastic deformation</b>: the object returns to its original shape and length when the forces are removed.</li><li><b>Inelastic deformation</b>: the object does <b>not</b> return to its original shape — it is permanently deformed.</li></ul>` },
    { h: 'Hooke’s law and the spring constant', html: `
<p>The extension of an elastic object such as a spring is <b>directly proportional</b> to the force applied, provided the <b>limit of proportionality</b> is not exceeded.</p>
<div class="box def"><b class="lbl">Recall this equation</b><p>force = spring constant × extension &nbsp; $F = ke$</p><p class="small">F in N, k in newtons per metre (N/m), e in m. The same equation works for compression.</p></div>
[[d:hooke]]
<p>The graph of force against extension is a <b>straight line through the origin</b> (a <b>linear</b> relationship) up to the limit of proportionality; after that it curves (<b>non-linear</b>). The gradient of the straight part is the spring constant k. A stiffer spring has a larger k.</p>` },
    { h: 'Energy stored in a spring', html: `
<p>A force that stretches or compresses a spring does work, and <b>elastic potential energy</b> is stored in it. If the spring is not inelastically deformed, the work done equals the energy stored.</p>
<div class="box def"><b class="lbl">Given on the equation sheet</b><p>$E_e = @frac{1}{2}ke^2$ &nbsp; (up to the limit of proportionality)</p></div>
<p>This is also the <b>area under</b> the force–extension graph (a triangle: ½ × F × e = ½ × ke × e).</p>` },
    { h: 'Required practical 6: force and extension', html: `
[[d:springrig]]
<ol><li>Clamp a spring to a stand and hang it vertically next to a metre rule. Fix a pointer to the bottom of the spring.</li><li>Record the original position of the pointer (unstretched length).</li><li>Add a 1 N weight (100 g mass) and record the new position. Extension = new length − original length.</li><li>Keep adding weights, one at a time, recording the extension each time.</li><li>Plot force (weight) against extension.</li></ol>
<div class="box warn"><b class="lbl">Accuracy &amp; safety</b><p>Read the ruler at eye level to avoid parallax; use a pointer and keep the ruler vertical. Wait for the spring to stop moving. Clamp the stand to the bench or use a counterweight so it can’t topple; wear eye protection in case the spring snaps; don’t stand with feet under the masses.</p></div>
<p>Variables — independent: force (weight added); dependent: extension; control: the same spring, the same ruler position.</p>` }
  ],
  eqs: [['W = Fs', 'work done (recall)'], ['F = ke', 'force on a spring (recall)'], ['E_e = @frac{1}{2}ke^2', 'elastic potential energy (equation sheet)']],
  worked: [
    { q: 'A person pushes a trolley with a force of 60 N through a distance of 25 m. Calculate the work done.', s: ['$W = Fs$', '$W = 60 × 25$', '$W = 1500 "J"$'], a: '1500 J' },
    { q: 'A spring extends by 4.0 cm when a force of 2.0 N is applied. Calculate the spring constant.', s: ['Convert: e = 4.0 cm = 0.040 m', '$k = @frac{F}{e} = @frac{2.0}{0.040}$', '$k = 50 "N/m"$'], a: '50 N/m' },
    { q: 'The same spring (k = 50 N/m) is stretched by 0.10 m. Calculate the energy stored.', s: ['$E_e = @frac{1}{2}ke^2$', '$E_e = 0.5 × 50 × 0.10^2$', '$E_e = 0.25 "J"$'], a: '0.25 J' }
  ],
  pitfalls: ['Using the length of the spring instead of the extension.', 'Leaving extension in cm when calculating k.', 'Saying a spring obeys Hooke’s law beyond the limit of proportionality.', 'Using W = Fs with a distance not in the direction of the force.', 'Plotting mass (g) instead of force (N).'],
  cards: [
    ['When is work done?', 'When a force causes an object to move through a distance.'],
    ['Equation for work done?', '$W = Fs$ (J, N, m)'],
    ['What is 1 joule?', 'Work done when 1 N causes a displacement of 1 m (1 J = 1 N m).'],
    ['Effect of work done against friction?', 'Temperature of the object rises.'],
    ['Why are two forces needed to stretch a spring?', 'With one force it would just accelerate instead of changing shape.'],
    ['Elastic deformation?', 'Returns to original shape when forces are removed.'],
    ['Inelastic deformation?', 'Does not return to original shape.'],
    ['Hooke’s law equation?', '$F = ke$'],
    ['What is the limit of proportionality?', 'The point beyond which extension is no longer proportional to force.'],
    ['What does the gradient of an F–e graph give?', 'The spring constant k.'],
    ['Energy stored in a spring?', '$E_e = @frac{1}{2}ke^2$ = area under the F–e graph.'],
    ['RP6: how do you calculate extension?', 'New length − original (unstretched) length.']
  ],
  quiz: [
    { q: 'A force of 20 N pushes a box 3.0 m. The work done is', o: ['60 J', '6.7 J', '23 J', '0.15 J'], x: 'W = Fs.' },
    { q: '1 joule is equal to', o: ['1 newton-metre', '1 newton per metre', '1 watt per second', '1 kilogram metre'], x: '1 J = 1 N m.' },
    { q: 'Work done against friction causes', o: ['a rise in temperature', 'a fall in temperature', 'no energy transfer', 'an increase in mass'], x: 'Energy goes to the thermal store.' },
    { q: 'An object that returns to its original shape after the force is removed has undergone', o: ['elastic deformation', 'inelastic deformation', 'plastic flow', 'compression only'], x: 'Elastic = returns.' },
    { q: 'A spring with k = 40 N/m is stretched by 0.050 m. The force applied is', o: ['2.0 N', '800 N', '0.00125 N', '40 N'], x: 'F = ke.' },
    { q: 'A spring stretches 6.0 cm with a force of 3.0 N. Its spring constant is', o: ['50 N/m', '0.5 N/m', '18 N/m', '2.0 N/m'], x: '3.0 / 0.060.' },
    { q: 'Up to the limit of proportionality, a force–extension graph for a spring is', o: ['a straight line through the origin', 'a curve', 'horizontal', 'a straight line that does not pass through the origin'], x: 'Linear relationship.' },
    { q: 'The area under a force–extension graph (up to the limit of proportionality) represents', o: ['the elastic potential energy stored', 'the spring constant', 'the maximum force', 'the length of the spring'], x: 'Work done = energy stored.' },
    { q: 'A spring (k = 100 N/m) is compressed by 0.20 m. The energy stored is', o: ['2.0 J', '20 J', '10 J', '4.0 J'], x: '½ × 100 × 0.04.' },
    { q: 'In RP6, why is a pointer attached to the bottom of the spring?', o: ['to read the position on the ruler more precisely', 'to make the spring stretch more', 'to measure the force', 'to stop the spring moving'], x: 'Reduces reading error.' },
    { q: 'In RP6, the extension is', o: ['stretched length − original length', 'the stretched length', 'the original length', 'force ÷ length'], x: 'Change in length.' },
    { q: 'To bend a ruler you need', o: ['more than one force', 'one force only', 'no force', 'a non-contact force'], x: 'Otherwise it would just move.' }
  ],
  exam: [
    { q: 'Describe how to investigate the relationship between force and extension for a spring.', m: 6, ms: ['Hang the spring from a clamp stand next to a vertical ruler (with a pointer).', 'Measure the original (unstretched) length/position.', 'Add masses/weights one at a time (e.g. 1 N each).', 'Measure the new length each time; extension = new length − original length.', 'Read the ruler at eye level; wait for the spring to stop moving.', 'Plot force against extension; straight line through origin shows proportionality (until the limit of proportionality).'] },
    { q: 'Explain the difference between elastic and inelastic deformation.', m: 2, ms: ['Elastic: returns to original shape/length when the force is removed.', 'Inelastic: does not return to original shape / permanently deformed.'] },
    { q: 'A spring has a spring constant of 80 N/m. It is stretched by 15 cm. Calculate the force needed and the energy stored.', m: 4, ms: ['e = 0.15 m', 'F = ke = 80 × 0.15 = 12 N', 'Eₑ = ½ × 80 × 0.15²', 'Eₑ = 0.90 J'] }
  ],
  sims: ['spring'], gens: ['work1', 'work2', 'hooke1', 'hooke2', 'epe2']
});

TOPICS.push({
  id: '5.3', unit: '5', ref: '4.5.4', po: true, title: 'Moments, levers and gears', short: 'M = Fd, balance, force multipliers',
  summary: 'Forces can make objects turn. Calculate moments, use the principle of moments to balance objects, and explain how levers and gears transmit turning effects.',
  spec: [
    '(PO) A force or system of forces may cause an object to rotate; describe examples',
    '(PO) The turning effect of a force is its moment: M = F d (recall), where d is the perpendicular distance from the pivot to the line of action of the force',
    '(PO) If an object is balanced, the total clockwise moment about a pivot equals the total anticlockwise moment about that pivot',
    '(PO) Calculate the size of a force, or its distance from a pivot, acting on a balanced object',
    '(PO) A simple lever and a simple gear system can both be used to transmit the rotational effects of forces; explain how'
  ],
  learn: [
    { h: 'Moments', html: `
<p>A force can make an object <b>rotate</b> — opening a door, turning a spanner, using a seesaw. The turning effect of a force is called its <b>moment</b>.</p>
<div class="box def"><b class="lbl">Recall this equation</b><p>moment of a force = force × distance &nbsp; $M = Fd$</p><p class="small">M in newton-metres (Nm), F in newtons (N), d = the <b>perpendicular distance</b> from the pivot to the line of action of the force, in metres (m)</p></div>
[[d:moment]]
<p>To get a bigger turning effect, use a bigger force or apply it further from the pivot — that is why door handles are far from the hinges.</p>` },
    { h: 'The principle of moments', html: `
<div class="box def"><b class="lbl">Principle of moments</b><p>If an object is <b>balanced</b>, the total <b>clockwise</b> moment about a pivot equals the total <b>anticlockwise</b> moment about that pivot.</p></div>
<p>Example: a seesaw. A 400 N child sits 1.5 m from the pivot. How far from the pivot must a 600 N adult sit? 400 × 1.5 = 600 × d, so d = 1.0 m.</p>` },
    { h: 'Levers and gears', html: `
<p><b>Levers</b> transmit the rotational effect of a force. A small <b>effort</b> applied a long way from the pivot produces a large moment, which can move a large <b>load</b> close to the pivot. Crowbars, wheelbarrows, bottle openers and scissors are levers — they act as <b>force multipliers</b>.</p>
[[d:gears]]
<p><b>Gears</b> are toothed wheels that transmit rotation. When a small gear drives a large gear:</p>
<ul><li>the large gear turns <b>more slowly</b>,</li><li>but with a <b>larger moment</b> (turning effect), because the same force acts at a larger radius.</li><li>Adjacent gears turn in <b>opposite directions</b>.</li></ul>
<p>A bicycle in a low gear uses a small front cog and a large rear cog — easier to pedal uphill (larger moment on the wheel) but slower.</p>` }
  ],
  eqs: [['M = Fd', 'moment of a force (recall; physics only)'], ['"clockwise moments" = "anticlockwise moments"', 'balanced object']],
  worked: [
    { q: 'A force of 40 N is applied at the end of a 0.25 m spanner, at right angles. Calculate the moment.', s: ['$M = Fd$', '$M = 40 × 0.25$', '$M = 10 "Nm"$'], a: '10 Nm' },
    { q: 'A uniform beam is pivoted at its centre. A 30 N weight hangs 0.40 m to the left. Where must a 20 N weight hang on the right to balance it?', s: ['Anticlockwise moment = 30 × 0.40 = 12 Nm', 'Clockwise moment = 20 × d', 'Balanced: 20d = 12, so d = 0.60 m'], a: '0.60 m to the right of the pivot' }
  ],
  pitfalls: ['Using a distance that is not perpendicular to the line of action of the force.', 'Leaving distances in cm and getting Nm answers 100× too large.', 'Saying gears “create” energy — they change force and speed, not energy.', 'Forgetting that meshing gears rotate in opposite directions.'],
  cards: [
    ['What is a moment?', 'The turning effect of a force.', 'po'],
    ['Equation for a moment?', '$M = Fd$ (Nm, N, m)', 'po'],
    ['What is d in M = Fd?', 'The perpendicular distance from the pivot to the line of action of the force.', 'po'],
    ['State the principle of moments.', 'For a balanced object, total clockwise moment = total anticlockwise moment about a pivot.', 'po'],
    ['How do levers make jobs easier?', 'A small effort far from the pivot gives a large moment that moves a large load near the pivot.', 'po'],
    ['What happens when a small gear drives a large gear?', 'The large gear turns more slowly but with a larger moment.', 'po'],
    ['Direction of adjacent gears?', 'Opposite directions.', 'po'],
    ['Why is a door handle far from the hinge?', 'A larger distance gives a larger moment for the same force.', 'po']
  ],
  quiz: [
    { q: 'The moment of a force is', o: ['force × perpendicular distance from the pivot', 'force ÷ distance', 'force × time', 'mass × distance'], x: 'M = Fd.', po: 1 },
    { q: 'A 50 N force acts 0.30 m from a pivot. The moment is', o: ['15 Nm', '167 Nm', '0.006 Nm', '50.3 Nm'], x: '50 × 0.30.', po: 1 },
    { q: 'For a balanced seesaw', o: ['clockwise moments = anticlockwise moments', 'the heavier person must sit further away', 'both people must weigh the same', 'there are no moments'], x: 'Principle of moments.', po: 1 },
    { q: 'A 200 N weight is 2.0 m from a pivot. What force 0.50 m on the other side balances it?', o: ['800 N', '50 N', '200 N', '400 N'], x: '200 × 2.0 = F × 0.50.', po: 1 },
    { q: 'To undo a tight nut more easily, you should', o: ['use a longer spanner', 'use a shorter spanner', 'push closer to the nut', 'push along the spanner handle'], x: 'Larger d, larger moment.', po: 1 },
    { q: 'When a small gear drives a larger gear, the larger gear', o: ['turns more slowly with a larger moment', 'turns faster with a larger moment', 'turns faster with a smaller moment', 'turns at the same speed'], x: 'Force multiplier.', po: 1 },
    { q: 'Two meshing gears rotate', o: ['in opposite directions', 'in the same direction', 'at the same speed always', 'only if they are the same size'], x: 'Teeth push each other the opposite way.', po: 1 },
    { q: 'The unit of moment is', o: ['newton-metre (Nm)', 'newton per metre (N/m)', 'joule per second', 'kilogram metre'], x: 'Force × distance.', po: 1 },
    { q: 'Which is NOT a lever?', o: ['a pulley rope alone', 'a crowbar', 'a wheelbarrow', 'a pair of scissors'], x: 'A rope on its own has no pivot.', po: 1 },
    { q: 'A 600 N adult sits 1.0 m from the pivot of a seesaw. A 300 N child balances her by sitting', o: ['2.0 m from the pivot on the other side', '0.5 m on the other side', '1.0 m on the same side', '3.0 m on the other side'], x: '600 × 1.0 = 300 × d.', po: 1 }
  ],
  exam: [
    { q: 'Explain how a crowbar allows a person to lift a heavy rock with a small force.', m: 3, ms: ['The crowbar is a lever / rotates about a pivot.', 'The effort is applied a long way from the pivot, giving a large moment.', 'The load is close to the pivot, so a large force is exerted on the rock (moments balance).'], po: 1 },
    { q: 'A uniform plank is balanced at its centre. A 250 N child sits 1.6 m from the pivot. Calculate how far from the pivot a 400 N child must sit to balance the plank.', m: 3, ms: ['Anticlockwise moment = 250 × 1.6 = 400 Nm', '400 × d = 400', 'd = 1.0 m (on the other side)'], po: 1 },
    { q: 'Explain how a small gear driving a large gear changes the rotational effect.', m: 2, ms: ['The large gear rotates more slowly.', 'But with a larger moment/turning effect (force acts at a larger radius).'], po: 1 }
  ],
  sims: ['moments', 'gears'], gens: ['mom1', 'mom2', 'mom3']
});

TOPICS.push({
  id: '5.4', unit: '5', ref: '4.5.5', po: true, title: 'Pressure in fluids', short: 'p = F/A, p = hρg, upthrust, atmosphere',
  summary: 'Pressure in liquids and gases acts at right angles to surfaces. Calculate pressure, explain why it increases with depth (Higher), why objects float or sink, and why the atmosphere thins with height.',
  spec: [
    '(PO) A fluid can be a liquid or a gas; pressure in a fluid causes a force normal (at right angles) to any surface',
    '(PO) Pressure at the surface of a fluid: p = F / A (recall) — Pa, N, m²',
    '(PO) (HT) Pressure due to a column of liquid: p = h ρ g (equation sheet)',
    '(PO) (HT) Explain why pressure at a point in a liquid increases with the height of the column above it and with the density of the liquid; calculate pressure differences at different depths',
    '(PO) (HT) A submerged object experiences greater pressure on its bottom surface than its top, giving a resultant upward force — upthrust; describe the factors which influence floating and sinking',
    '(PO) The atmosphere is a thin layer of air round the Earth that gets less dense with increasing altitude',
    '(PO) Air molecules colliding with a surface create atmospheric pressure; there is less air above a higher surface, so atmospheric pressure decreases with height',
    '(PO) Describe a simple model of the atmosphere and of atmospheric pressure'
  ],
  learn: [
    { h: 'Pressure', html: `
<p>A <b>fluid</b> is a liquid or a gas. The pressure in a fluid produces a force <b>normal</b> (at right angles) to any surface it touches.</p>
<div class="box def"><b class="lbl">Recall this equation</b><p>pressure = force normal to a surface ÷ area of that surface &nbsp; $p = @frac{F}{A}$</p><p class="small">p in pascals (Pa), F in newtons (N), A in metres squared (m²). 1 Pa = 1 N/m².</p></div>
<p>Spreading a force over a larger area gives a smaller pressure (snowshoes, wide tractor tyres). Concentrating it on a small area gives a large pressure (knives, drawing pins).</p>
<div class="box tip"><b class="lbl">Area units</b><p>1 cm² = 0.0001 m² (10<sup>−4</sup> m²). Convert before dividing!</p></div>` },
    { h: 'Pressure in a liquid', ht: true, html: `
<div class="box def"><b class="lbl">Given on the equation sheet</b><p>pressure = height of the column × density of the liquid × gravitational field strength &nbsp; $p = hρg$</p><p class="small">p in Pa, h in m, ρ in kg/m³, g in N/kg</p></div>
<p>The deeper you go, the <b>taller the column of liquid</b> above you, so the <b>greater the weight</b> of liquid pressing down — the pressure increases. A <b>denser</b> liquid has more mass (and weight) in the same column, so it also gives a greater pressure.</p>
[[d:depth]]
<p>Pressure <b>difference</b> between two depths: $Δp = Δh × ρ × g$. Dams are thicker at the bottom for this reason.</p>` },
    { h: 'Upthrust, floating and sinking', ht: true, html: `
<p>An object partly or fully submerged in a fluid has a <b>greater pressure on its bottom surface</b> than on its top surface (because the bottom is deeper). This creates a <b>resultant upward force</b> called <b>upthrust</b>.</p>
<ul><li>An object <b>floats</b> if the upthrust can equal its weight. It sinks until the weight of water it displaces equals its own weight.</li><li>An object <b>sinks</b> if its weight is greater than the upthrust even when fully submerged.</li></ul>
<p>Whether an object floats depends on its <b>density compared with the fluid</b>: less dense than the fluid → floats; more dense → sinks. A steel ship floats because its hollow shape displaces a lot of water, so its average density is less than water’s.</p>` },
    { h: 'Atmospheric pressure', html: `
[[d:atmosphere]]
<p>The atmosphere is a <b>thin layer</b> of air around the Earth (relative to the Earth’s size). It gets <b>less dense</b> with increasing altitude.</p>
<p>Air molecules <b>colliding with a surface</b> create atmospheric pressure. At sea level it is about 100 000 Pa.</p>
<p>The higher you go, the <b>fewer air molecules</b> (and so the less weight of air) there are <b>above</b> you. So <b>atmospheric pressure decreases with height</b>. Climbers on Everest experience about a third of sea-level pressure; aircraft cabins are pressurised.</p>` }
  ],
  eqs: [['p = @frac{F}{A}', 'pressure (recall; physics only)'], ['p = hρg', 'pressure in a liquid (equation sheet; HT, physics only)']],
  worked: [
    { q: 'A box of weight 600 N rests on a base of area 0.20 m². Calculate the pressure on the floor.', s: ['$p = @frac{F}{A}$', '$p = @frac{600}{0.20}$', '$p = 3000 "Pa"$'], a: '3000 Pa' },
    { ht: 1, q: 'Calculate the pressure due to the water at the bottom of a 3.0 m deep swimming pool. Density of water = 1000 kg/m³, g = 9.8 N/kg.', s: ['$p = hρg$', '$p = 3.0 × 1000 × 9.8$', '$p = 29 400 "Pa"$'], a: '29 400 Pa' },
    { ht: 1, q: 'A diver descends from 5.0 m to 15.0 m in seawater (ρ = 1030 kg/m³, g = 9.8 N/kg). Calculate the increase in pressure.', s: ['Δh = 15.0 − 5.0 = 10.0 m', '$Δp = Δhρg = 10.0 × 1030 × 9.8$', '$Δp = 100 940 "Pa"$'], a: '≈ 1.0 × 10⁵ Pa' }
  ],
  pitfalls: ['Using an area in cm² in p = F/A.', 'Saying pressure in a liquid acts only downwards — it acts in all directions, at right angles to surfaces.', 'Saying heavy objects always sink.', 'Saying atmospheric pressure decreases because it is colder higher up — it is because there is less air above.', 'Forgetting that p = hρg gives the pressure due to the liquid only (not including the atmosphere above).'],
  cards: [
    ['What is a fluid?', 'A liquid or a gas.', 'po'],
    ['Direction of the force from fluid pressure?', 'Normal (at right angles) to the surface.', 'po'],
    ['Equation for pressure?', '$p = F/A$ (Pa, N, m²)', 'po'],
    ['What is 1 Pa?', '1 N/m²', 'po'],
    ['Pressure due to a column of liquid?', '$p = hρg$', 'htpo'],
    ['Why does pressure increase with depth?', 'A taller column of liquid above — greater weight pressing down.', 'htpo'],
    ['What is upthrust?', 'The resultant upward force on a submerged object due to greater pressure on its bottom surface.', 'htpo'],
    ['When does an object float?', 'When the upthrust equals its weight / it is less dense than the fluid.', 'htpo'],
    ['Why does atmospheric pressure decrease with height?', 'There is less air (fewer molecules, less weight) above.', 'po'],
    ['What causes atmospheric pressure?', 'Air molecules colliding with a surface.', 'po']
  ],
  quiz: [
    { q: 'A force of 200 N acts on an area of 0.50 m². The pressure is', o: ['400 Pa', '100 Pa', '0.0025 Pa', '200.5 Pa'], x: 'p = F/A.', po: 1 },
    { q: 'Pressure in a fluid acts', o: ['at right angles to any surface', 'only downwards', 'only upwards', 'parallel to surfaces'], x: 'Normal to surfaces.', po: 1 },
    { q: 'Camels have wide feet so they', o: ['exert less pressure on the sand', 'exert more pressure', 'weigh less', 'have more upthrust'], x: 'Larger area → lower pressure.', po: 1 },
    { q: 'Atmospheric pressure decreases with altitude because', o: ['there is less air above', 'the air is colder', 'gravity is stronger', 'molecules move faster'], x: 'Less weight of air above.', po: 1 },
    { q: 'The pressure due to 2.0 m of water (ρ = 1000 kg/m³, g = 9.8 N/kg) is', o: ['19 600 Pa', '2000 Pa', '490 Pa', '9800 Pa'], x: 'p = hρg.', po: 1, ht: 1 },
    { q: 'Upthrust on a submerged object is caused by', o: ['greater pressure on its bottom surface than its top', 'the object’s weight', 'friction with the water', 'air trapped inside the object'], x: 'Bottom is deeper.', po: 1, ht: 1 },
    { q: 'An object will float if', o: ['its density is less than that of the fluid', 'it is heavy', 'it is made of metal', 'its density is greater than the fluid’s'], x: 'Upthrust can match its weight.', po: 1, ht: 1 },
    { q: 'At the same depth, the pressure in seawater compared with fresh water is', o: ['greater, because seawater is denser', 'smaller', 'the same', 'zero'], x: 'p ∝ ρ.', po: 1, ht: 1 },
    { q: '1 cm² is equal to', o: ['0.0001 m²', '0.01 m²', '100 m²', '0.001 m²'], x: '(0.01 m)².', po: 1 },
    { q: 'The atmosphere compared with the size of the Earth is', o: ['a thin layer', 'thicker than the Earth’s radius', 'the same thickness as the Earth', 'of uniform density'], x: 'Most of the air is within about 10 km.', po: 1 }
  ],
  exam: [
    { q: 'Explain why the pressure at the bottom of a lake is greater than the pressure near the surface.', m: 2, ms: ['There is a greater height/column of water above.', 'So a greater weight of water pushes on each square metre / p = hρg increases with h.'], po: 1, ht: 1 },
    { q: 'Explain why a block of wood floats in water.', m: 3, ms: ['Pressure on the bottom surface is greater than on the top, producing upthrust.', 'The wood is less dense than water.', 'It sinks until the upthrust equals its weight / the resultant force is zero.'], po: 1, ht: 1 },
    { q: 'Describe a simple model of the Earth’s atmosphere and explain why atmospheric pressure decreases with height.', m: 3, ms: ['Thin layer of air around the Earth, less dense at higher altitude.', 'Pressure caused by air molecules colliding with surfaces.', 'At greater height there are fewer molecules / less weight of air above, so pressure is lower.'], po: 1 },
    { q: 'A person of weight 700 N stands on one foot of area 0.014 m². Calculate the pressure on the floor.', m: 2, ms: ['p = 700 / 0.014', 'p = 50 000 Pa'], po: 1 }
  ],
  sims: ['fluid'], gens: ['pfa1', 'pfa2', 'phrg1', 'phrg2']
});

TOPICS.push({
  id: '5.5', unit: '5', ref: '4.5.6.1', title: 'Describing motion', short: 'Speed, velocity, acceleration, motion graphs',
  summary: 'Distance and displacement, speed and velocity, typical speeds, acceleration, v² − u² = 2as, and how to read distance–time and velocity–time graphs.',
  spec: [
    'Distance is how far an object moves (scalar); displacement is the straight-line distance and direction from start to finish (vector)',
    'Speed is a scalar; typical speeds: walking ≈ 1.5 m/s, running ≈ 3 m/s, cycling ≈ 6 m/s; speed of sound in air ≈ 330 m/s; recall typical speeds for transport',
    'Distance travelled = speed × time: s = v t (recall); calculate average speed for non-uniform motion',
    'Velocity is speed in a given direction (vector)',
    '(HT) Motion in a circle involves constant speed but changing velocity',
    'Speed from the gradient of a distance–time graph; draw and interpret distance–time graphs',
    '(HT) Speed of an accelerating object from the gradient of a tangent to a distance–time graph',
    'Acceleration = change in velocity ÷ time: a = Δv / t (recall); an object slowing down is decelerating; estimate everyday accelerations',
    'Acceleration from the gradient of a velocity–time graph; draw and interpret velocity–time graphs',
    '(HT) Distance travelled (or displacement) from the area under a velocity–time graph, including counting squares',
    'v² − u² = 2 a s for uniform acceleration (equation sheet); objects falling freely near Earth accelerate at about 9.8 m/s²',
    'An object falling through a fluid initially accelerates; eventually the resultant force is zero and it moves at terminal velocity',
    '(PO) Draw and interpret velocity–time graphs for objects that reach terminal velocity; interpret the changing motion in terms of the forces'
  ],
  learn: [
    { h: 'Distance, displacement, speed and velocity', html: `
<div class="tbl"><table><tr><th>Scalar</th><th>Vector</th></tr><tr><td><b>Distance</b> — how far an object moves</td><td><b>Displacement</b> — straight-line distance from start to finish <i>and</i> its direction</td></tr><tr><td><b>Speed</b> — how fast</td><td><b>Velocity</b> — speed in a given direction</td></tr></table></div>
<p>A runner completing one lap of a 400 m track has run a distance of 400 m but has a displacement of <b>zero</b>.</p>
<div class="box def"><b class="lbl">Typical speeds (recall these)</b><p>walking ≈ 1.5 m/s · running ≈ 3 m/s · cycling ≈ 6 m/s · car in town ≈ 13 m/s (30 mph) · car on motorway ≈ 31 m/s (70 mph) · train ≈ 50 m/s · aircraft ≈ 250 m/s · speed of sound in air ≈ 330 m/s</p></div>
<p>Speeds are rarely constant — they depend on age, terrain, fitness and distance travelled. Even the speed of sound and of the wind vary.</p>` },
    { h: 'Speed and average speed', html: `
<div class="box def"><b class="lbl">Recall this equation</b><p>distance travelled = speed × time &nbsp; $s = vt$</p><p class="small">s in metres (m), v in metres per second (m/s), t in seconds (s)</p></div>
<p>For non-uniform motion, <b>average speed = total distance ÷ total time</b>.</p>
<p>Converting: 1 km/h ÷ 3.6 = m/s. E.g. 72 km/h = 20 m/s.</p>` },
    { h: 'Circular motion', ht: true, html: `
<p>An object moving in a circle at constant speed is <b>constantly changing direction</b>. Because velocity is a vector, its <b>velocity is changing</b> even though its <b>speed is constant</b>. A changing velocity means it is accelerating — towards the centre of the circle. Examples: a satellite in orbit, a car going round a roundabout, a hammer thrower’s hammer.</p>` },
    { h: 'Distance–time graphs', html: `
[[d:dtgraph]]
<ul><li>The <b>gradient</b> of a distance–time graph = <b>speed</b>.</li><li>Straight sloping line → constant speed. Steeper → faster.</li><li>Horizontal line → stationary.</li><li>Curve getting steeper → accelerating; getting less steep → decelerating.</li></ul>
<p class="ht-inline"><b>(HT)</b> For an accelerating object, find the speed at a particular time by drawing a <b>tangent</b> to the curve at that time and measuring its gradient.</p>` },
    { h: 'Acceleration', html: `
<div class="box def"><b class="lbl">Recall this equation</b><p>acceleration = change in velocity ÷ time taken &nbsp; $a = @frac{Δv}{t}$</p><p class="small">a in metres per second squared (m/s²), Δv in m/s, t in s</p></div>
<p>An object that slows down is <b>decelerating</b> (negative acceleration). Everyday values: a car pulling away ≈ 2–3 m/s²; a sprinter at the start ≈ 5 m/s²; free fall ≈ 9.8 m/s².</p>
<div class="box def"><b class="lbl">Given on the equation sheet</b><p>(final velocity)² − (initial velocity)² = 2 × acceleration × distance &nbsp; $v^2 - u^2 = 2as$</p><p class="small">Use it for uniform acceleration when time is not given.</p></div>
<p>Near the Earth’s surface any object falling freely under gravity has an acceleration of about <b>9.8 m/s²</b>.</p>` },
    { h: 'Velocity–time graphs', html: `
[[d:vtgraph]]
<ul><li>The <b>gradient</b> of a velocity–time graph = <b>acceleration</b>.</li><li>Horizontal line → constant velocity. Negative gradient → deceleration.</li><li><b>(HT)</b> The <b>area under</b> the graph = <b>distance travelled</b> (displacement). Split it into rectangles and triangles, or count squares for curved graphs.</li></ul>` },
    { h: 'Terminal velocity', html: `
<p>An object falling through a fluid first <b>accelerates</b> because of its weight. As its speed increases, the <b>drag</b> (air resistance) increases. Eventually drag equals weight, the <b>resultant force is zero</b>, and it falls at a steady <b>terminal velocity</b>.</p>
<div data-po="1"><p><b>Skydiver (physics only):</b></p>
[[d:terminal]]
<ol><li>Jumps: only weight acts → acceleration 9.8 m/s² (steep start to the v–t graph).</li><li>Speeds up: air resistance increases, resultant force decreases → acceleration decreases (graph gets less steep).</li><li>Air resistance = weight → terminal velocity (graph horizontal).</li><li>Opens parachute: much larger surface area, air resistance > weight → decelerates.</li><li>Air resistance falls as she slows, until it equals weight again → a new, lower terminal velocity.</li></ol></div>` }
  ],
  eqs: [['s = vt', 'distance travelled at constant speed (recall)'], ['a = @frac{Δv}{t}', 'acceleration (recall)'], ['v^2 - u^2 = 2as', 'uniform acceleration (equation sheet)']],
  worked: [
    { q: 'A cyclist travels 3.6 km in 10 minutes. Calculate her average speed in m/s.', s: ['s = 3600 m; t = 600 s', '$v = @frac{s}{t} = @frac{3600}{600}$', '$v = 6.0 "m/s"$'], a: '6.0 m/s' },
    { q: 'A car accelerates from 12 m/s to 30 m/s in 6.0 s. Calculate its acceleration.', s: ['Δv = 30 − 12 = 18 m/s', '$a = @frac{Δv}{t} = @frac{18}{6.0}$', '$a = 3.0 "m/s"^2$'], a: '3.0 m/s²' },
    { q: 'A stone is dropped from rest. How fast is it moving after falling 20 m? (a = 9.8 m/s², ignore air resistance)', s: ['$v^2 - u^2 = 2as$ with u = 0', '$v^2 = 2 × 9.8 × 20 = 392$', '$v = @sqrt{392} = 19.8 "m/s"$'], a: '20 m/s (19.8 m/s)' },
    { ht: 1, q: 'A car accelerates uniformly from rest to 20 m/s in 8.0 s, then travels at 20 m/s for 10 s. Use the velocity–time graph to find the total distance.', s: ['Area of triangle (0–8 s): ½ × 8.0 × 20 = 80 m', 'Area of rectangle (8–18 s): 10 × 20 = 200 m', 'Total = 280 m'], a: '280 m' }
  ],
  pitfalls: ['Using the gradient of a d–t graph as acceleration.', 'Calculating area under a d–t graph (meaningless) instead of v–t.', 'Forgetting to square v and u in v² − u² = 2as.', 'Giving a displacement without a direction.', 'Leaving time in minutes or distance in km.'],
  cards: [
    ['Distance vs displacement?', 'Distance: how far (scalar). Displacement: straight-line distance + direction (vector).'],
    ['Speed vs velocity?', 'Velocity is speed in a given direction (vector).'],
    ['Typical walking, running, cycling speeds?', '1.5 m/s, 3 m/s, 6 m/s.'],
    ['Typical speed of sound in air?', '330 m/s'],
    ['Equation linking s, v and t?', '$s = vt$'],
    ['Equation for acceleration?', '$a = Δv/t$ (m/s²)'],
    ['Gradient of a d–t graph gives?', 'Speed.'],
    ['Gradient of a v–t graph gives?', 'Acceleration.'],
    ['(HT) Area under a v–t graph gives?', 'Distance travelled (displacement).', 'ht'],
    ['Acceleration of free fall near Earth?', 'About 9.8 m/s²'],
    ['Equation without time for uniform acceleration?', '$v^2 - u^2 = 2as$ (equation sheet)'],
    ['What is terminal velocity?', 'The steady velocity reached when the resultant force on a falling object is zero.'],
    ['(HT) Why is circular motion at constant speed an acceleration?', 'Direction changes, so velocity changes.', 'ht'],
    ['(HT) Speed of an accelerating object from a d–t graph?', 'Gradient of the tangent at that time.', 'ht']
  ],
  quiz: [
    { q: 'Which is a scalar quantity?', o: ['speed', 'velocity', 'displacement', 'acceleration'], x: 'No direction.' },
    { q: 'A typical speed for a person walking is', o: ['1.5 m/s', '15 m/s', '0.15 m/s', '6 m/s'], x: 'Spec value.' },
    { q: 'A train travels 1200 m in 60 s. Its average speed is', o: ['20 m/s', '72 000 m/s', '0.05 m/s', '1260 m/s'], x: 's/t.' },
    { q: 'The gradient of a distance–time graph gives', o: ['speed', 'acceleration', 'distance', 'force'], x: 'Change in distance ÷ time.' },
    { q: 'A horizontal line on a velocity–time graph shows', o: ['constant velocity', 'the object is stationary', 'constant acceleration', 'deceleration'], x: 'Velocity not changing.' },
    { q: 'A car goes from 5 m/s to 25 m/s in 4.0 s. Its acceleration is', o: ['5.0 m/s²', '7.5 m/s²', '80 m/s²', '1.25 m/s²'], x: '20/4.0.' },
    { q: 'A ball is dropped from rest and falls 5.0 m. Its speed just before landing is (a = 9.8 m/s²)', o: ['9.9 m/s', '49 m/s', '98 m/s', '4.9 m/s'], x: 'v² = 2 × 9.8 × 5.0 = 98.' },
    { q: 'The area under a velocity–time graph represents', o: ['distance travelled', 'acceleration', 'speed', 'force'], x: 'v × t = s.', ht: 1 },
    { q: 'A satellite moves in a circular orbit at constant speed. Its velocity', o: ['is changing because its direction changes', 'is constant', 'is zero', 'increases steadily'], x: 'Velocity is a vector.', ht: 1 },
    { q: 'A skydiver reaches terminal velocity when', o: ['air resistance equals her weight', 'air resistance is zero', 'her weight is zero', 'she opens her parachute'], x: 'Resultant force zero.' },
    { q: 'Immediately after a skydiver opens her parachute, she', o: ['decelerates', 'accelerates downwards faster', 'moves upwards', 'stops'], x: 'Air resistance > weight — a resultant upward force slows her down (she is still moving downwards).', po: 1 },
    { q: 'The speed of an accelerating object at a given time is found from a distance–time graph by', o: ['the gradient of a tangent at that time', 'the area under the graph', 'reading the y-value', 'dividing total distance by total time'], x: 'Instantaneous gradient.', ht: 1 },
    { q: '72 km/h is equal to', o: ['20 m/s', '72 m/s', '259 m/s', '2 m/s'], x: '÷ 3.6.' }
  ],
  exam: [
    { q: 'Describe the motion of a skydiver from jumping until she reaches terminal velocity, in terms of the forces acting.', m: 4, ms: ['At first only weight acts / resultant force downwards so she accelerates (at 9.8 m/s²).', 'As speed increases, air resistance increases.', 'Resultant force decreases so acceleration decreases.', 'When air resistance equals weight, resultant force is zero and she moves at terminal velocity.'] },
    { q: 'Sketch the velocity–time graph for a skydiver who jumps, reaches terminal velocity, opens her parachute and reaches a new terminal velocity.', m: 3, ms: ['Curve rising with decreasing gradient to a horizontal line (first terminal velocity).', 'Sharp fall in velocity when parachute opens (curving).', 'Levels off at a lower horizontal line (second terminal velocity).'], po: 1 },
    { q: 'A car decelerates uniformly from 25 m/s to rest over 50 m. Calculate the deceleration.', m: 3, ms: ['v² − u² = 2as: 0 − 25² = 2 × a × 50', 'a = −625 / 100', 'a = −6.25 m/s² (deceleration 6.25 m/s²)'] },
    { q: 'Explain how the distance travelled can be found from a velocity–time graph.', m: 2, ms: ['Distance = area under the graph.', 'Split into rectangles/triangles, or count squares and multiply by the value of one square.'], ht: 1 }
  ],
  sims: ['motion', 'skydiver'], gens: ['svt1', 'svt2', 'acc1', 'acc2', 'suv1', 'suv2', 'vtarea1']
});

TOPICS.push({
  id: '5.6', unit: '5', ref: '4.5.6.2', title: 'Newton’s laws of motion', short: 'F = ma, inertia, RP7, action–reaction',
  summary: 'Newton’s three laws explain every motion question at GCSE. Use F = ma, investigate acceleration (Required Practical 7), estimate forces in road transport and identify force pairs.',
  spec: [
    'Newton’s First Law: if the resultant force on an object is zero, a stationary object stays stationary and a moving object continues at the same velocity',
    'When a vehicle travels at a steady speed the resistive forces balance the driving force; velocity only changes if a resultant force acts',
    'Apply Newton’s First Law to objects with uniform velocity and objects whose speed and/or direction changes',
    '(HT) The tendency of objects to continue in their state of rest or of uniform motion is called inertia',
    'Newton’s Second Law: acceleration is proportional to the resultant force and inversely proportional to the mass; F = m a (recall); use the symbols ∝ and ~',
    '(HT) Inertial mass is a measure of how difficult it is to change the velocity of an object; it is defined as force ÷ acceleration',
    'Estimate the speeds, accelerations and forces involved in large accelerations for everyday road transport',
    'Required practical 7: investigate the effect of varying force on the acceleration of an object of constant mass, and of varying mass with a constant force',
    'Newton’s Third Law: whenever two objects interact, the forces they exert on each other are equal and opposite; apply it to equilibrium situations'
  ],
  learn: [
    { h: 'Newton’s First Law', html: `
<div class="box def"><b class="lbl">Newton’s First Law</b><p>If the resultant force acting on an object is <b>zero</b>: a stationary object <b>remains stationary</b>; a moving object <b>continues to move at the same speed and in the same direction</b> (the same velocity).</p></div>
<p>So when a car travels at a steady speed, the <b>resistive forces</b> (friction, air resistance) <b>balance</b> the <b>driving force</b>. The velocity (speed and/or direction) changes <b>only</b> if a resultant force acts.</p>
<p class="ht-inline"><b>(HT)</b> The tendency of objects to continue in their state of rest or uniform motion is called <b>inertia</b>.</p>` },
    { h: 'Newton’s Second Law', html: `
<div class="box def"><b class="lbl">Newton’s Second Law</b><p>The acceleration of an object is <b>proportional to the resultant force</b> acting on it, and <b>inversely proportional to its mass</b>: $a ∝ F$ and $a ∝ @frac{1}{m}$.</p></div>
<div class="box def"><b class="lbl">Recall this equation</b><p>resultant force = mass × acceleration &nbsp; $F = ma$</p><p class="small">F in newtons (N), m in kg, a in m/s²</p></div>
<p class="ht-inline"><b>(HT)</b> <b>Inertial mass</b> measures how difficult it is to change an object’s velocity. It is defined as the ratio <b>force ÷ acceleration</b> (m = F/a).</p>
<div class="box why"><b class="lbl">Estimating (~)</b><p>A family car (~1000 kg) accelerating at ~3 m/s² needs a resultant force of ~3000 N. An emergency stop from 30 m/s in ~3 s is a deceleration of ~10 m/s² — a braking force of ~10 000 N.</p></div>` },
    { h: 'Required practical 7: force, mass and acceleration', html: `
[[d:trolley]]
<ol><li>Set up a trolley on a flat bench, attached by a string over a pulley to a hanging mass holder. Mark a start line and use light gates (or a ruler, stopwatch and chalk marks) to measure the acceleration.</li><li><b>Varying force:</b> start with all the slotted masses on the trolley. Move one mass at a time from the trolley to the hanger. This increases the accelerating force (weight of hanger) while keeping the <b>total mass of the system constant</b>.</li><li>Release the trolley and record the acceleration for each force. Repeat and take a mean.</li><li><b>Varying mass:</b> keep the hanging mass the same (constant force) and add masses to the trolley.</li></ol>
<p><b>Results:</b> a graph of acceleration against force is a straight line through the origin (a ∝ F). Acceleration decreases as mass increases (a ∝ 1/m).</p>
<div class="box warn"><b class="lbl">Tips &amp; safety</b><p>Tilt the runway slightly to compensate for friction. Use a light string. Put a cushion or box under the falling masses so they don’t land on feet; don’t let the trolley fly off the bench.</p></div>` },
    { h: 'Newton’s Third Law', html: `
<div class="box def"><b class="lbl">Newton’s Third Law</b><p>Whenever two objects <b>interact</b>, the forces they exert on each other are <b>equal and opposite</b>.</p></div>
<p>Third-law pairs always: act on <b>different objects</b>; are the <b>same type</b> of force; are equal in size and opposite in direction.</p>
[[d:thirdlaw]]
<p>A book resting on a table (equilibrium): Earth pulls the book down (weight) and the book pulls the Earth up — one pair. The book pushes down on the table and the table pushes up on the book — another pair. The weight and the table’s normal force on the book balance, but they are <b>not</b> a third-law pair (they act on the same object and are different types).</p>` }
  ],
  eqs: [['F = ma', 'resultant force (recall)'], ['a ∝ F,  a ∝ @frac{1}{m}', 'Newton’s second law'], ['m = @frac{F}{a}', 'inertial mass (HT)']],
  worked: [
    { q: 'A 1200 kg car accelerates at 2.5 m/s². Calculate the resultant force.', s: ['$F = ma$', '$F = 1200 × 2.5$', '$F = 3000 "N"$'], a: '3000 N' },
    { q: 'A resultant force of 30 N acts on a 6.0 kg trolley. Calculate the acceleration.', s: ['$a = @frac{F}{m}$', '$a = @frac{30}{6.0}$', '$a = 5.0 "m/s"^2$'], a: '5.0 m/s²' },
    { q: 'Estimate the braking force needed to stop a 1500 kg car from 20 m/s in 4 s.', s: ['$a = @frac{Δv}{t} = @frac{20}{4} = 5 "m/s"^2$', '$F = ma = 1500 × 5$', '$F ≈ 7500 "N"$'], a: '~7500 N' }
  ],
  pitfalls: ['Saying an object moving at constant velocity has no forces on it — the forces are balanced.', 'Using the driving force instead of the resultant force in F = ma.', 'Saying third-law pairs cancel out — they act on different objects.', 'In RP7, changing the total mass while varying the force.', 'Using mass in grams.'],
  cards: [
    ['State Newton’s First Law.', 'Zero resultant force → stationary objects stay still; moving objects keep the same velocity.'],
    ['Car at steady speed: what can you say about the forces?', 'Driving force = resistive forces (balanced).'],
    ['State Newton’s Second Law.', 'Acceleration ∝ resultant force and inversely ∝ mass; F = ma.'],
    ['Equation for resultant force?', '$F = ma$ (N, kg, m/s²)'],
    ['State Newton’s Third Law.', 'When two objects interact, they exert equal and opposite forces on each other.'],
    ['Features of a third-law pair?', 'Same size, opposite directions, same type, act on different objects.'],
    ['(HT) What is inertia?', 'The tendency to stay at rest or in uniform motion.', 'ht'],
    ['(HT) Define inertial mass.', 'Force ÷ acceleration — how hard it is to change velocity.', 'ht'],
    ['RP7: how is total mass kept constant?', 'Move masses from the trolley to the hanger.'],
    ['RP7: graph of a against F?', 'Straight line through the origin: a ∝ F.'],
    ['What does ~ mean?', 'Approximately.'],
    ['Typical deceleration of a car in an emergency stop?', 'About 5–10 m/s².']
  ],
  quiz: [
    { q: 'An object moves at a constant velocity. The resultant force on it is', o: ['zero', 'in the direction of motion', 'opposite to the motion', 'equal to its weight'], x: 'Newton’s First Law.' },
    { q: 'A 2.0 kg mass accelerates at 3.0 m/s². The resultant force is', o: ['6.0 N', '1.5 N', '0.67 N', '5.0 N'], x: 'F = ma.' },
    { q: 'A force of 500 N acts on a 250 kg motorbike and rider. The acceleration is', o: ['2.0 m/s²', '0.5 m/s²', '125 000 m/s²', '750 m/s²'], x: 'a = F/m.' },
    { q: 'If the resultant force on an object doubles (mass constant), its acceleration', o: ['doubles', 'halves', 'quadruples', 'stays the same'], x: 'a ∝ F.' },
    { q: 'If the mass doubles with the same resultant force, the acceleration', o: ['halves', 'doubles', 'stays the same', 'quadruples'], x: 'a ∝ 1/m.' },
    { q: 'A car travels at a steady 30 m/s. The driving force is 2000 N. The total resistive force is', o: ['2000 N', '0 N', '4000 N', '60 000 N'], x: 'Balanced forces.' },
    { q: 'You push on a wall with 50 N. The wall pushes on you with', o: ['50 N in the opposite direction', '0 N', '50 N in the same direction', 'less than 50 N'], x: 'Newton’s Third Law.' },
    { q: 'Which pair is a Newton’s Third Law pair?', o: ['Earth pulls apple down; apple pulls Earth up', 'weight of a book; table pushes book up', 'driving force; friction on a car', 'thrust; drag on a rocket'], x: 'Same type, different objects.' },
    { q: 'In RP7, masses are moved from the trolley to the hanger so that', o: ['the total mass stays constant while the force changes', 'the force stays constant', 'friction is reduced', 'the trolley goes faster'], x: 'Control variable.' },
    { q: 'The tendency of an object to stay at rest or keep moving at constant velocity is called', o: ['inertia', 'momentum', 'weight', 'friction'], x: 'HT definition.', ht: 1 },
    { q: 'Inertial mass is defined as', o: ['force ÷ acceleration', 'force × acceleration', 'weight ÷ g only', 'acceleration ÷ force'], x: 'm = F/a.', ht: 1 },
    { q: 'The approximate resultant force on a 70 kg sprinter accelerating at 5 m/s² is', o: ['~350 N', '~14 N', '~75 N', '~3500 N'], x: '70 × 5.' }
  ],
  exam: [
    { q: 'Describe how to investigate how the acceleration of a trolley depends on the resultant force, with mass kept constant.', m: 6, ms: ['Trolley on a bench/runway attached by string over a pulley to a hanging mass.', 'Measure acceleration using light gates / stopwatch over a measured distance.', 'Vary the force by changing the hanging mass (weight = force).', 'Keep total mass constant by moving masses from the trolley to the hanger.', 'Repeat each measurement and calculate a mean.', 'Plot acceleration against force — expect a straight line through the origin.'] },
    { q: 'A 1500 kg car is travelling at a constant speed. Explain, using Newton’s laws, what happens when the driver increases the driving force.', m: 3, ms: ['At constant speed the driving force equals the resistive forces (First Law).', 'Increasing the driving force gives a resultant force forwards.', 'The car accelerates (F = ma); resistive forces increase until balanced again at a higher speed.'] },
    { q: 'A 60 kg cyclist accelerates from 0 to 6 m/s in 4 s. Calculate the resultant force.', m: 3, ms: ['a = 6/4 = 1.5 m/s²', 'F = ma = 60 × 1.5', 'F = 90 N'] }
  ],
  sims: ['newton2'], gens: ['fma1', 'fma2', 'fma3', 'fma4']
});

TOPICS.push({
  id: '5.7', unit: '5', ref: '4.5.6.3', title: 'Stopping distances', short: 'Thinking + braking distance, reaction time',
  summary: 'Why a car’s stopping distance increases so rapidly with speed, what affects reaction time and braking distance, and the dangers of large decelerations.',
  spec: [
    'Stopping distance = thinking distance (during the driver’s reaction time) + braking distance (under the braking force); for a given braking force, greater speed → greater stopping distance',
    '(PO) Estimate how the distance for an emergency stop varies over a range of typical speeds; interpret graphs relating speed to stopping distance for a range of vehicles',
    'Reaction times vary from person to person, typically 0.2 s to 0.9 s; affected by tiredness, drugs, alcohol and distractions',
    'Explain methods to measure human reaction times and recall typical results; interpret and evaluate measurements; evaluate the effect of factors on thinking distance',
    'Braking distance is affected by adverse road and weather conditions (wet or icy) and poor condition of the brakes or tyres',
    'Explain the factors which affect stopping distance in emergencies and the implications for safety; estimate how stopping distance varies over typical speeds',
    'Braking: work done by friction between brakes and wheel reduces the kinetic energy and the temperature of the brakes increases',
    'The greater the speed, the greater the braking force needed to stop in a certain distance; greater braking force → greater deceleration; large decelerations can make brakes overheat and/or cause loss of control',
    '(HT) Estimate the forces involved in the deceleration of road vehicles in typical situations'
  ],
  learn: [
    { h: 'Thinking distance + braking distance', html: `
<div class="box def"><b class="lbl">Stopping distance</b><p><b>stopping distance = thinking distance + braking distance</b></p><p><b>Thinking distance</b>: distance travelled during the driver’s <b>reaction time</b>. <b>Braking distance</b>: distance travelled while the <b>braking force</b> acts.</p></div>
[[d:stopping]]
<p>Thinking distance = speed × reaction time, so it is <b>proportional to speed</b>. Braking distance is proportional to <b>speed squared</b> (because kinetic energy ∝ v²), so it rises very rapidly: doubling the speed doubles the thinking distance but <b>quadruples</b> the braking distance.</p>` },
    { h: 'Reaction time', html: `
<p>Reaction times vary from person to person — typically <b>0.2 s to 0.9 s</b>. They are made longer by <b>tiredness</b>, <b>drugs</b>, <b>alcohol</b> and <b>distractions</b> (such as using a phone). A longer reaction time increases the thinking distance, but not the braking distance.</p>
<div class="box why"><b class="lbl">Measuring reaction time: the ruler drop test</b><p>A partner holds a ruler vertically with the zero mark between your open finger and thumb. Without warning they let go; you catch it as fast as you can. Read the distance fallen. The further it falls, the longer your reaction time (use a conversion table or $s = @frac{1}{2}gt^2$). Repeat several times and take a mean. Computer tests (clicking when the screen changes colour) give similar results, around 0.2–0.3 s.</p></div>` },
    { h: 'Braking distance', html: `
<p>When the brakes are applied, <b>work done by the friction force</b> between the brake pads and the wheel <b>reduces the kinetic energy</b> of the vehicle, and the <b>temperature of the brakes increases</b>.</p>
<p>Braking distance is increased by:</p>
<ul><li><b>adverse road and weather conditions</b> — wet or icy roads reduce the friction between the tyres and the road;</li><li><b>poor condition of the vehicle</b> — worn brakes or worn/under-inflated tyres.</li></ul>
<p>The greater the speed, the greater the braking force needed to stop in a certain distance. The greater the braking force, the greater the <b>deceleration</b>. <b>Large decelerations</b> can make the brakes <b>overheat</b> and/or the driver <b>lose control</b> (skidding), and cause injuries to passengers.</p>` },
    { h: 'Estimating forces in braking', ht: true, html: `
<p>Use F = ma with sensible estimates. A 1000 kg car travelling at 20 m/s (≈ 45 mph) that stops in about 25 m:</p>
<p>$v^2 - u^2 = 2as$: $0 - 20^2 = 2 × a × 25$, so a = −8 m/s². Braking force F = ma ≈ 1000 × 8 = <b>8000 N</b>.</p>
<p>Alternatively, work done by brakes = kinetic energy lost: F × 25 = ½ × 1000 × 20² = 200 000 J, so F = 8000 N.</p>` }
  ],
  eqs: [['"stopping distance" = "thinking distance" + "braking distance"', ''], ['"thinking distance" = "speed" × "reaction time"', ''], ['Fs = @frac{1}{2}mv^2', 'braking: work done by friction = kinetic energy lost']],
  worked: [
    { q: 'A driver with a reaction time of 0.70 s is travelling at 20 m/s. Calculate the thinking distance.', s: ['thinking distance = speed × reaction time', '= 20 × 0.70', '= 14 m'], a: '14 m' },
    { q: 'The braking distance of a car at 15 m/s is 14 m. Estimate the braking distance at 30 m/s.', s: ['Braking distance ∝ speed².', 'Speed doubles, so braking distance × 2² = × 4.', '14 × 4 = 56 m'], a: '≈ 56 m' },
    { ht: 1, q: 'A 1200 kg car travelling at 25 m/s brakes to a stop in 40 m. Estimate the average braking force.', s: ['Kinetic energy = ½ × 1200 × 25² = 375 000 J', 'Work done by brakes = F × 40 = 375 000', 'F ≈ 9400 N'], a: '≈ 9400 N' }
  ],
  pitfalls: ['Saying alcohol increases the braking distance — it increases thinking distance (reaction time).', 'Saying wet roads increase thinking distance.', 'Saying stopping distance is proportional to speed.', 'Forgetting that brakes heat up because work is done by friction.'],
  cards: [
    ['Define stopping distance.', 'Thinking distance + braking distance.'],
    ['What is thinking distance?', 'Distance travelled during the driver’s reaction time.'],
    ['What is braking distance?', 'Distance travelled under the braking force.'],
    ['Typical reaction time range?', '0.2 s to 0.9 s'],
    ['Four factors increasing reaction time?', 'Tiredness, drugs, alcohol, distractions.'],
    ['Factors increasing braking distance?', 'Wet/icy roads, worn brakes, worn tyres (and higher speed, more mass).'],
    ['What happens to kinetic energy when braking?', 'Work done by friction transfers it to the thermal store of the brakes.'],
    ['Dangers of large decelerations?', 'Brakes overheat; loss of control; injury to occupants.'],
    ['Speed doubles — effect on thinking distance?', 'Doubles.'],
    ['Speed doubles — effect on braking distance?', 'Roughly quadruples.'],
    ['How can you measure reaction time simply?', 'Ruler drop test — the distance it falls before you catch it.'],
    ['(HT) Typical braking force for a car?', 'Several thousand newtons (~10⁴ N).', 'ht']
  ],
  quiz: [
    { q: 'Stopping distance equals', o: ['thinking distance + braking distance', 'thinking distance × braking distance', 'braking distance − thinking distance', 'speed × reaction time'], x: 'Definition.' },
    { q: 'Which factor increases thinking distance?', o: ['the driver being tired', 'an icy road', 'worn tyres', 'worn brakes'], x: 'Reaction time increases.' },
    { q: 'Which factor increases braking distance but not thinking distance?', o: ['a wet road', 'drinking alcohol', 'using a phone', 'tiredness'], x: 'Less friction between tyres and road.' },
    { q: 'Typical human reaction times are', o: ['0.2 s to 0.9 s', '2 s to 9 s', '0.02 s to 0.09 s', '5 s to 10 s'], x: 'Spec values.' },
    { q: 'A car at 30 m/s; reaction time 0.5 s. The thinking distance is', o: ['15 m', '60 m', '30.5 m', '0.017 m'], x: '30 × 0.5.' },
    { q: 'When a car brakes, the brakes get hot because', o: ['work done by friction transfers energy to their thermal store', 'the engine heats them', 'air resistance heats them', 'kinetic energy is destroyed'], x: 'Work done against friction.' },
    { q: 'If the speed of a car doubles, the braking distance', o: ['increases about four times', 'doubles', 'stays the same', 'halves'], x: '∝ v².' },
    { q: 'Large decelerations are dangerous because', o: ['brakes may overheat and the driver may lose control', 'the car speeds up', 'thinking distance increases', 'tyres get more grip'], x: 'Spec statement.' },
    { q: 'In a ruler drop test, a longer reaction time means the ruler falls', o: ['further before it is caught', 'a shorter distance', 'at a slower speed', 'the same distance'], x: 'It accelerates for longer.' },
    { q: 'Estimate the braking force needed to decelerate a 1000 kg car at 6 m/s².', o: ['~6000 N', '~170 N', '~600 N', '~60 000 N'], x: 'F = ma.', ht: 1 },
    { q: 'For a given braking force, a greater speed results in', o: ['a greater stopping distance', 'a smaller stopping distance', 'the same stopping distance', 'a shorter reaction time'], x: 'Spec statement.' }
  ],
  exam: [
    { q: 'Explain the factors that affect the stopping distance of a car.', m: 6, ms: ['Stopping distance = thinking distance + braking distance.', 'Thinking distance increases with speed and with reaction time.', 'Reaction time increased by tiredness, alcohol, drugs, distractions.', 'Braking distance increases with speed (∝ v²) and mass.', 'Wet or icy roads reduce friction → longer braking distance.', 'Worn tyres or brakes increase braking distance.'] },
    { q: 'Describe how to measure a person’s reaction time using a ruler.', m: 4, ms: ['One person holds a ruler vertically with zero between the other’s finger and thumb.', 'Ruler dropped without warning; the other catches it.', 'Record the distance fallen and convert to a time (table or s = ½gt²).', 'Repeat several times and calculate a mean.'] },
    { q: 'A 1100 kg car travelling at 18 m/s brakes and stops in 3.0 s. Estimate the braking force.', m: 3, ms: ['a = 18/3.0 = 6.0 m/s²', 'F = ma = 1100 × 6.0', 'F ≈ 6600 N'], ht: 1 }
  ],
  sims: ['stopping'], gens: ['think1', 'brake1', 'brake2']
});

TOPICS.push({
  id: '5.8', unit: '5', ref: '4.5.7', ht: true, title: 'Momentum', short: 'p = mv, conservation, F = mΔv/Δt',
  summary: 'Momentum is mass × velocity. It is conserved in collisions and explosions, and a force changes momentum — which is why airbags and crash mats save lives by increasing the time of impact.',
  spec: [
    '(HT) Momentum = mass × velocity: p = m v (recall) — kg m/s',
    '(HT) In a closed system the total momentum before an event equals the total momentum after — conservation of momentum',
    '(HT) Describe and explain examples of momentum in an event, such as a collision',
    '(HT) (PO) Complete calculations involving an event, such as the collision of two objects',
    '(HT) (PO) When a force acts on an object that is moving or able to move, a change in momentum occurs: F = m Δv / Δt (equation sheet) — force equals the rate of change of momentum',
    '(HT) (PO) Explain safety features (air bags, seat belts, crash mats, cycle helmets, cushioned playground surfaces) using the rate of change of momentum',
    '(HT) (PO) Apply equations relating force, mass, velocity and acceleration to explain how the changes involved are inter-related'
  ],
  learn: [
    { h: 'Momentum', html: `
<div class="box def"><b class="lbl">Recall this equation</b><p>momentum = mass × velocity &nbsp; $p = mv$</p><p class="small">p in kilogram metres per second (kg m/s), m in kg, v in m/s</p></div>
<p>Momentum is a <b>vector</b> — it has the same direction as the velocity. Choose a positive direction (e.g. right) and give velocities in the opposite direction a negative sign.</p>` },
    { h: 'Conservation of momentum', html: `
<div class="box def"><b class="lbl">Conservation of momentum</b><p>In a <b>closed system</b>, the <b>total momentum before</b> an event equals the <b>total momentum after</b> the event.</p></div>
[[d:collision]]
<p><b>Collision:</b> a moving trolley hits a stationary one and they stick together. They move off more slowly together, but the total momentum is unchanged.</p>
<p><b>Explosion (recoil):</b> before firing, a gun and bullet are at rest — total momentum zero. Afterwards the bullet moves forward and the gun recoils backwards with equal and opposite momentum, so the total is still zero.</p>
<div data-po="1"><p><b>Calculation (physics only):</b> a 2.0 kg trolley at 3.0 m/s hits a stationary 1.0 kg trolley; they stick together. Before: 2.0 × 3.0 + 0 = 6.0 kg m/s. After: (2.0 + 1.0) × v = 6.0, so v = 2.0 m/s.</p></div>` },
    { h: 'Force and rate of change of momentum', po: true, html: `
<p>When a force acts on a moving object (or one able to move), its momentum changes. Combining F = ma and a = (v − u)/t:</p>
<div class="box def"><b class="lbl">Given on the equation sheet</b><p>force = change in momentum ÷ time taken &nbsp; $F = @frac{mΔv}{Δt}$</p><p class="small">mΔv is the change in momentum. Force equals the <b>rate of change of momentum</b>.</p></div>
<div class="box why"><b class="lbl">Safety features</b><p>In a crash, the change in momentum is fixed (from full speed to zero). <b>Air bags, seat belts, crash mats, cycle helmets and cushioned playground surfaces</b> all <b>increase the time</b> taken for the momentum to change. A longer time means a <b>smaller rate of change of momentum</b>, so a <b>smaller force</b> on the person — fewer injuries.</p></div>
<p>Seat belts stretch slightly and airbags squash; crumple zones in a car’s bonnet crush over a longer time. Crash mats and helmets compress as you land.</p>` }
  ],
  eqs: [['p = mv', 'momentum (recall; HT)'], ['m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2', 'conservation of momentum'], ['F = @frac{mΔv}{Δt}', 'force = rate of change of momentum (equation sheet; HT, physics only)']],
  worked: [
    { q: 'Calculate the momentum of a 70 kg runner travelling at 8.0 m/s.', s: ['$p = mv$', '$p = 70 × 8.0$', '$p = 560 "kg m/s"$'], a: '560 kg m/s' },
    { po: 1, q: 'A 0.020 kg bullet is fired at 400 m/s from a 4.0 kg rifle. Calculate the recoil velocity of the rifle.', s: ['Total momentum before = 0', 'After: 0.020 × 400 + 4.0 × v = 0', '8.0 + 4.0v = 0, so v = −2.0 m/s'], a: '2.0 m/s backwards' },
    { po: 1, q: 'A 60 kg gymnast lands at 5.0 m/s and stops in 0.50 s on a crash mat. Calculate the average force on her.', s: ['Change in momentum = 60 × 5.0 = 300 kg m/s', '$F = @frac{mΔv}{Δt} = @frac{300}{0.50}$', '$F = 600 "N"$'], a: '600 N (compared with 6000 N if she stopped in 0.050 s on a hard floor)' }
  ],
  pitfalls: ['Ignoring direction — objects moving in opposite directions need opposite signs.', 'Adding masses but forgetting velocities in conservation problems.', 'Saying airbags reduce the change in momentum — they increase the time.', 'Mixing up momentum (kg m/s) with kinetic energy (J).'],
  cards: [
    ['Equation for momentum?', '$p = mv$ (kg m/s)', 'ht'],
    ['Is momentum a scalar or vector?', 'Vector.', 'ht'],
    ['State conservation of momentum.', 'In a closed system, total momentum before = total momentum after.', 'ht'],
    ['Total momentum before an explosion from rest?', 'Zero — so total after is also zero.', 'ht'],
    ['Force and momentum equation?', '$F = mΔv/Δt$ — force = rate of change of momentum.', 'htpo'],
    ['How do airbags reduce injury?', 'They increase the time for momentum to change, so the force is smaller.', 'htpo'],
    ['Name four safety features that use momentum ideas.', 'Air bags, seat belts, crash mats, cycle helmets (and cushioned playground surfaces).', 'htpo'],
    ['Why does a gun recoil?', 'Bullet gains forward momentum; gun gains equal backward momentum (total stays zero).', 'ht']
  ],
  quiz: [
    { q: 'The momentum of a 1000 kg car at 20 m/s is', o: ['20 000 kg m/s', '50 kg m/s', '200 000 kg m/s', '1020 kg m/s'], x: 'p = mv.', ht: 1 },
    { q: 'The unit of momentum is', o: ['kg m/s', 'N/m', 'J', 'kg m/s²'], x: 'mass × velocity.', ht: 1 },
    { q: 'In a closed system, momentum is', o: ['conserved', 'always destroyed in collisions', 'only conserved if nothing moves', 'converted into energy'], x: 'Conservation of momentum.', ht: 1 },
    { q: 'A skater pushes off from a wall. Before pushing, the total momentum of the skater and wall is', o: ['zero', 'equal to her weight', 'positive', 'impossible to know'], x: 'Nothing moving.', ht: 1 },
    { q: 'A 3.0 kg trolley at 4.0 m/s collides with a stationary 1.0 kg trolley and they stick together. Their velocity afterwards is', o: ['3.0 m/s', '4.0 m/s', '12 m/s', '1.0 m/s'], x: '12 = 4.0 × v.', ht: 1, po: 1 },
    { q: 'Force equals', o: ['the rate of change of momentum', 'momentum × time', 'mass ÷ velocity', 'the change in kinetic energy'], x: 'F = mΔv/Δt.', ht: 1, po: 1 },
    { q: 'A seat belt reduces injuries because it', o: ['increases the time taken to stop, reducing the force', 'reduces the change in momentum', 'increases the force', 'makes the car stop faster'], x: 'Smaller rate of change of momentum.', ht: 1, po: 1 },
    { q: 'A ball’s momentum changes by 12 kg m/s in 0.04 s. The average force is', o: ['300 N', '0.48 N', '12 N', '3.3 N'], x: '12 / 0.04.', ht: 1, po: 1 },
    { q: 'Which safety feature works by increasing the time of impact?', o: ['cycle helmet', 'ABS brakes', 'headlights', 'a speedometer'], x: 'Padding compresses.', ht: 1, po: 1 },
    { q: 'A 50 kg girl jumps from a 150 kg boat at 3.0 m/s. The boat moves backwards at', o: ['1.0 m/s', '3.0 m/s', '9.0 m/s', '0.33 m/s'], x: '50 × 3 = 150 × v.', ht: 1, po: 1 }
  ],
  exam: [
    { q: 'Explain, in terms of momentum, why a car airbag reduces the risk of injury in a crash.', m: 4, ms: ['The person’s momentum must change from a high value to zero.', 'The airbag increases the time taken for this change.', 'Force = rate of change of momentum (F = mΔv/Δt).', 'So the force on the person is smaller, reducing injury.'], ht: 1, po: 1 },
    { q: 'A 1200 kg car moving at 15 m/s collides with a stationary 800 kg car. They move off together. Calculate their velocity just after the collision.', m: 3, ms: ['Momentum before = 1200 × 15 = 18 000 kg m/s', 'After: 2000 × v = 18 000', 'v = 9.0 m/s'], ht: 1, po: 1 },
    { q: 'Describe what is meant by conservation of momentum and give an example.', m: 2, ms: ['Total momentum before an event equals total momentum after (in a closed system).', 'Example: collision of trolleys / recoil of a gun / explosion.'], ht: 1 }
  ],
  sims: ['collisions', 'crash'], gens: ['mom4', 'mom5', 'mom6', 'fmdt1']
});
