/* ==========================================================
   YEAR 8 · UNIT 8 · FURTHER FORCES
   ========================================================== */
TOPICS.push({
  id: '8.1', unit: '8', title: 'Moments', short: 'Turning forces and the principle of moments',
  summary: 'A force can make an object turn around a pivot. The turning effect is called a moment: moment = force × perpendicular distance from the pivot. When the clockwise and anticlockwise moments are equal, the object balances.',
  spec: [
    'I can describe a moment as the turning effect of a force about a pivot',
    'I can recall and use moment = force × perpendicular distance from the pivot, in newton metres (Nm)',
    'I can state the principle of moments: balanced when total clockwise moment = total anticlockwise moment',
    'I can use the principle of moments to find an unknown force or distance',
    '★ I can explain how levers act as force multipliers and why stability depends on the centre of mass'
  ],
  learn: [
    { h: 'Turning forces', html: `
[[d:k_moment]]
<p>When you push a door, turn a spanner or sit on a seesaw, a force makes something <b>turn</b> about a fixed point called the <b>pivot</b> (or fulcrum). The turning effect is the <b>moment</b>.</p>
<div class="box def"><b class="lbl">Learn this</b><p>$"moment" = "force" × "perpendicular distance from the pivot"$ &nbsp; &nbsp; $M = F × d$</p><p>Force in N, distance in m → moment in <b>newton metres (Nm)</b>. (Distance in cm → Ncm.)</p></div>
<p>Bigger force <b>or</b> bigger distance → bigger moment. That is why door handles are far from the hinges, and a long spanner undoes a tight nut more easily.</p>` },
    { h: 'The principle of moments', html: `
[[d:seesaw]]
<div class="box def"><b class="lbl">Principle of moments</b><p>When an object is <b>balanced</b>, the <b>total clockwise moment</b> about the pivot = the <b>total anticlockwise moment</b>.</p></div>
<p>A 400 N child sits 1.5 m from the pivot of a seesaw (anticlockwise moment = 600 Nm). Where must a 600 N adult sit to balance? 600 × d = 600 → d = <b>1.0 m</b>. Heavier people sit closer to the pivot.</p>` },
    { h: 'Levers and stability', html: `
<p><b>Levers</b> use moments to make a small force lift a big load: a small force far from the pivot gives the same moment as a big force close to it. Crowbars, wheelbarrows, scissors, bottle openers and even your forearm are levers.</p>
<div class="box why"><b class="lbl">★ Force multipliers and toppling</b><p>A crowbar with the pivot 0.1 m from the load and your hand 1.0 m away multiplies your force by 10: push with 50 N, lift 500 N. <br>Objects topple when their weight acts <b>outside</b> their base — the weight then has a moment that turns them over. A <b>low centre of mass</b> and a <b>wide base</b> make things stable (racing cars, buses with heavy parts low down).</p></div>` }
  ],
  eqs: [['M = F × d', 'moment (Nm) = force (N) × perpendicular distance from pivot (m)'], ['"clockwise moment" = "anticlockwise moment"', 'principle of moments (balanced)']],
  worked: [
    { q: 'A 30 N force is applied to a spanner 0.25 m from the nut. Calculate the moment.', s: ['$M = F × d$', '$M = 30 × 0.25$', '$M = 7.5 "Nm"$'], a: '7.5 Nm' },
    { q: 'On a balanced seesaw, Sam (500 N) sits 2.0 m left of the pivot. Mia sits 2.5 m right of the pivot. What is Mia’s weight?', s: ['Anticlockwise moment = 500 × 2.0 = 1000 Nm', 'Balanced: clockwise moment = 1000 Nm', 'Mia’s weight = 1000 ÷ 2.5 = 400 N'], a: '400 N' },
    { q: 'A metre rule balances at 50 cm. A 2 N weight hangs at the 20 cm mark. Where must a 3 N weight hang to balance it?', s: ['2 N is 30 cm left of the pivot: moment = 2 × 30 = 60 Ncm', '3 N must give 60 Ncm: d = 60 ÷ 3 = 20 cm', 'Hang it 20 cm right of the pivot, at the 70 cm mark.'], a: 'at 70 cm' }
  ],
  pitfalls: ['Measuring the distance from the end of the object instead of from the pivot.', 'Mixing cm and m in the same calculation.', 'Forgetting to add all the moments on one side.', 'Writing the unit as N/m instead of Nm.'],
  cards: [
    ['What is a moment?', 'The turning effect of a force about a pivot.'],
    ['Moment equation?', '$M = F × d$ (force × perpendicular distance from the pivot).'],
    ['Unit of moment?', 'Newton metre (Nm).'],
    ['Principle of moments?', 'When balanced, total clockwise moment = total anticlockwise moment.'],
    ['Why is a door handle far from the hinge?', 'Bigger distance gives a bigger moment for the same force.'],
    ['Moment of 20 N at 3 m?', '60 Nm.'],
    ['Where does a heavier person sit to balance a seesaw?', 'Closer to the pivot.'],
    ['What is a lever?', 'A rigid bar turning about a pivot, used to make a small force move a big load.'],
    ['★ What makes an object stable?', 'A low centre of mass and a wide base.']
  ],
  quiz: [
    { q: 'The unit of moment is', o: ['Nm', 'N/m', 'N', 'kg m'], x: 'Newton metre.' },
    { q: 'A 50 N force acts 0.4 m from a pivot. The moment is', o: ['20 Nm', '125 Nm', '50.4 Nm', '200 Nm'], x: '50 × 0.4.' },
    { q: 'Which gives the biggest moment?', o: ['30 N at 2 m', '50 N at 1 m', '100 N at 0.5 m', '20 N at 2.5 m'], x: '60 Nm.' },
    { q: 'A seesaw is balanced. The anticlockwise moment is 900 Nm. The clockwise moment is', o: ['900 Nm', '0 Nm', '1800 Nm', '450 Nm'], x: 'Principle of moments.' },
    { q: 'A 200 N child sits 3 m from the pivot. A 600 N adult balances them at', o: ['1 m', '9 m', '3 m', '2 m'], x: '600 ÷ 600.' },
    { q: 'It is easier to open a door by pushing', o: ['far from the hinges', 'near the hinges', 'on the hinges', 'it makes no difference'], x: 'Larger distance, larger moment.' },
    { q: 'A long spanner helps undo a tight nut because it', o: ['increases the distance, so a bigger moment for the same force', 'increases the force of gravity', 'reduces friction', 'is heavier'], x: 'M = F × d.' },
    { q: 'A 12 N force gives a 3 Nm moment. The distance from the pivot is', o: ['0.25 m', '4 m', '36 m', '15 m'], x: 'd = M ÷ F.' },
    { q: 'A bus is designed with heavy parts low down so that', o: ['its centre of mass is low and it is less likely to topple', 'it goes faster', 'it uses less fuel', 'it weighs less'], x: 'Stability.', ch: 1 }
  ],
  exam: [
    { q: 'Two children sit on a seesaw. Aisha weighs 450 N and sits 1.6 m to the left of the pivot.', tag: 'calc', parts: [
      { q: 'Calculate the moment of Aisha’s weight about the pivot.', m: 2, ms: ['450 × 1.6', '= 720 Nm'] },
      { q: 'Ben weighs 480 N. Calculate how far to the right of the pivot he must sit to balance the seesaw.', m: 3, ms: ['clockwise moment must = 720 Nm (principle of moments)', 'd = 720 ÷ 480', '= 1.5 m'] },
      { q: 'Ben moves further from the pivot. Describe what happens and explain why.', m: 2, ms: ['Ben’s side goes down / seesaw turns clockwise', 'his moment increases so clockwise moment > anticlockwise moment'] }
    ] },
    { q: 'A student balances a metre rule at its centre (50 cm mark). She hangs a 4.0 N weight at the 10 cm mark.', tag: 'calc', parts: [
      { q: 'Calculate the moment of the 4.0 N weight about the pivot in N cm.', m: 2, ms: ['distance = 40 cm; 4.0 × 40', '= 160 N cm'] },
      { q: 'She hangs a 5.0 N weight on the other side. At which mark must it hang for the rule to balance?', m: 2, ms: ['d = 160 ÷ 5.0 = 32 cm from the pivot', 'at the 82 cm mark'] }
    ] }
  ],
  sims: ['k_moments'], gens: ['mom1', 'mom2', 'mom3']
});

TOPICS.push({
  id: '8.2', unit: '8', title: 'Friction', short: 'Useful or not? Practical investigation',
  summary: 'Friction is a force that opposes motion when surfaces slide over each other. It lets us walk, grip and brake, but it also wastes energy and wears things out. You can measure it with a newton meter by pulling a block across different surfaces.',
  spec: [
    'I can explain what causes friction and which way it acts',
    'I can give examples where friction is useful and where it is a nuisance',
    'I can describe ways to increase or reduce friction',
    'I can investigate how the surface or the weight of a block affects friction using a newton meter',
    '★ I can explain the difference between static and sliding friction'
  ],
  learn: [
    { h: 'What causes friction?', html: `
[[d:friction]]
<p>Even smooth-looking surfaces are <b>rough</b> when magnified: tiny bumps catch on each other when the surfaces slide. <b>Friction</b> always acts <b>opposite to the direction of motion</b> (or the direction something is trying to move).</p>
<p>Friction increases when the surfaces are <b>rougher</b> and when they are <b>pressed together harder</b> (a heavier object). Friction transfers energy to the <b>thermal store</b> — rub your hands together and they warm up.</p>
<p><b>Drag</b> — air resistance and water resistance — is friction from a fluid. It increases with <b>speed</b>.</p>` },
    { h: 'Useful or a nuisance?', html: `
<div class="tbl"><table><tr><th>Useful friction</th><th>Unwanted friction</th></tr>
<tr><td>walking without slipping (shoe soles)</td><td>wears out shoes, tyres, brake pads and machine parts</td></tr>
<tr><td>brakes on bikes and cars</td><td>wastes energy by heating in engines and gears</td></tr>
<tr><td>tyres gripping the road</td><td>slows down a sledge or a skier</td></tr>
<tr><td>holding a pen or a rope; matches lighting</td><td>air resistance increases fuel use</td></tr></table></div>
<p><b>Increase friction</b>: rougher surfaces, treads on tyres and shoes, grit on icy roads, chalk on gymnasts’ hands. <b>Reduce friction</b>: lubricants (oil, grease, water on a slide), smoother surfaces, ball bearings and wheels, streamlining (for drag), air cushions (hovercraft).</p>` },
    { h: 'Investigating friction', html: `
<ol><li>Attach a <b>newton meter</b> to a wooden block.</li><li>Pull the block <b>horizontally</b> across a surface at a <b>slow, steady speed</b>. Read the newton meter — at steady speed the pull equals the friction (balanced forces).</li><li>Repeat three times and find the mean.</li><li>Change the surface (wood, carpet, sandpaper, plastic) — <b>or</b> add masses to the block — one variable at a time.</li></ol>
<p>Typical results: sandpaper and carpet give more friction than smooth plastic; doubling the weight roughly doubles the friction.</p>
<div class="box why"><b class="lbl">★ Static and sliding friction</b><p>It takes a bigger force to <b>start</b> a block moving (static friction) than to <b>keep</b> it moving (sliding friction). Watch the newton meter: the reading peaks just before the block starts to slide, then drops a little.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'A block is pulled at a steady speed across carpet. The newton meter reads 4.5 N. What is the friction force? Explain.', s: ['Steady speed → the forces are balanced.', 'So friction = pull = 4.5 N (acting backwards).'], a: '4.5 N' },
    { q: 'Explain why a cyclist oils the chain but also wants grippy tyres.', s: ['Oil reduces friction in the chain, so less energy is wasted by heating and the parts wear less.', 'Grippy tyres increase friction with the road, so the bike does not skid and the brakes work.'], a: 'unwanted friction in the chain; useful friction at the tyres' }
  ],
  pitfalls: ['Saying friction acts in the direction of motion.', 'Pulling the block at an angle or jerkily — the reading will be wrong.', 'Changing both the surface and the weight at once.', 'Forgetting that friction can be useful.'],
  cards: [
    ['What is friction?', 'A force that opposes motion when surfaces slide (or try to slide) over each other.'],
    ['Which way does friction act?', 'Opposite to the direction of motion.'],
    ['Two things that increase friction?', 'Rougher surfaces; pressing the surfaces together harder (more weight).'],
    ['Three ways to reduce friction?', 'Lubricants, smoother surfaces, ball bearings/wheels (and streamlining for drag).'],
    ['Two examples of useful friction?', 'Walking, brakes, tyres gripping, holding things.'],
    ['What energy transfer does friction cause?', 'To the thermal store (heating).'],
    ['How do you measure friction on a block?', 'Pull it at a steady speed with a newton meter; the reading = friction.'],
    ['What is drag?', 'Friction from a fluid (air or water resistance).'],
    ['★ Static vs sliding friction?', 'Static (to start moving) is bigger than sliding (to keep moving).']
  ],
  quiz: [
    { q: 'Friction acts', o: ['opposite to the motion', 'in the direction of motion', 'always upwards', 'always downwards'], x: 'It opposes motion.' },
    { q: 'Which is an example of useful friction?', o: ['brakes stopping a bike', 'a car engine getting hot', 'shoes wearing out', 'a sledge slowing down in a race'], x: 'Brakes rely on friction.' },
    { q: 'Which reduces friction?', o: ['oiling the moving parts', 'adding treads to tyres', 'spreading grit on ice', 'using rough sandpaper'], x: 'Lubrication.' },
    { q: 'A block pulled at a steady speed reads 3 N on a newton meter. The friction is', o: ['3 N', '0 N', '6 N', 'more than 3 N'], x: 'Balanced forces.' },
    { q: 'Adding masses to the block will make the friction', o: ['bigger', 'smaller', 'the same', 'zero'], x: 'Surfaces pressed together harder.' },
    { q: 'Rubbing your hands together makes them warm because friction transfers energy to the', o: ['thermal store', 'chemical store', 'elastic store', 'nuclear store'], x: 'Heating.' },
    { q: 'Why do Formula 1 cars have wide tyres?', o: ['more grip (friction) on the road', 'less friction', 'to look good', 'to go more slowly'], x: 'Useful friction for cornering and braking.' },
    { q: 'In a friction investigation, the block must be pulled', o: ['horizontally at a steady speed', 'upwards', 'as fast as possible', 'in a circle'], x: 'Then pull = friction.' },
    { q: 'The force needed to start a block moving is', o: ['a little bigger than the force to keep it moving', 'smaller than the force to keep it moving', 'zero', 'the same as its weight'], x: 'Static friction is bigger.', ch: 1 }
  ],
  exam: [
    { q: 'A student investigates friction on different surfaces. She pulls a wooden block across each surface with a newton meter. Results: plastic 1.2 N; wood 2.0 N; carpet 3.4 N; sandpaper 5.1 N.', tag: 'prac', parts: [
      { q: 'State the independent variable.', m: 1, ms: ['type of surface'] },
      { q: 'Give two control variables.', m: 2, ms: ['same block / same mass on the block', 'same (steady) speed / pull horizontally / same newton meter'] },
      { q: 'Explain why she must pull the block at a steady speed.', m: 2, ms: ['forces are balanced at steady speed', 'so the pull (reading) equals the friction'] },
      { q: 'Which type of graph should she draw? Explain.', m: 2, ms: ['bar chart', 'the independent variable (surface) is categoric / not numbers'] },
      { q: 'Write a conclusion.', m: 1, ms: ['the rougher the surface, the greater the friction (sandpaper most, plastic least)'] }
    ] },
    { q: 'Friction can be useful or a nuisance. Describe one example of each and, for each, a way of changing the friction.', tag: 'ext', m: 4, ms: ['useful example, e.g. brakes / tyres / walking', 'way to increase, e.g. treads / rough surface / grit', 'nuisance example, e.g. moving parts in an engine / bike chain', 'way to reduce, e.g. oil / lubricant / ball bearings'] }
  ],
  sims: ['friction'], gens: ['mean1']
});

TOPICS.push({
  id: '8.3', unit: '8', title: 'Speed', short: 'speed = distance ÷ time; investigating speed',
  summary: 'Speed tells you how far something travels in each unit of time: speed = distance ÷ time, measured in metres per second (m/s). Average speed uses the total distance and total time. You can measure speed with a tape measure and a stopwatch, or with light gates.',
  spec: [
    'I can define speed and state its unit, metres per second (m/s)',
    'I can recall and use speed = distance ÷ time, and rearrange it',
    'I can calculate average speed for a whole journey',
    'I can describe how to measure speed experimentally and explain the effect of reaction time',
    '★ I can convert between units (km/h and m/s, minutes and seconds) and explain relative speed'
  ],
  learn: [
    { h: 'What is speed?', html: `
<div class="box def"><b class="lbl">Learn this</b><p>$"speed" = @frac{"distance"}{"time"}$ &nbsp; &nbsp; $v = @frac{d}{t}$</p><p>distance in metres (m), time in seconds (s) → speed in <b>metres per second (m/s)</b>. Other units: km/h, mph.</p></div>
<p>A speed of 5 m/s means travelling 5 metres every second. Walking ≈ 1.5 m/s; cycling ≈ 6 m/s; a car in town ≈ 13 m/s (30 mph); sound in air ≈ 330 m/s.</p>
[[d:tri_speed]]
<p>Rearranged: $d = v × t$ and $t = @frac{d}{v}$.</p>` },
    { h: 'Average speed', html: `
<p>On a journey your speed changes — you speed up, slow down and stop. The <b>average speed</b> is:</p>
<p style="text-align:center">$"average speed" = @frac{"total distance"}{"total time"}$</p>
<p>A bus travels 12 km in 40 minutes (including stops). Average speed = 12 000 m ÷ 2400 s = <b>5 m/s</b>. At some moments it was faster, at others stopped. A car’s speedometer shows the <b>instantaneous</b> speed — the speed at that moment.</p>` },
    { h: 'Investigating speed', html: `
<ol><li>Mark out a known distance (e.g. 20 m on the field, or 1 m on a ramp) with a tape measure or metre rule.</li><li>Time the runner, trolley or ball from the start line to the finish line with a stopwatch.</li><li>Repeat three times; calculate the mean time.</li><li>Speed = distance ÷ mean time.</li></ol>
<p><b>Reaction time</b> (≈ 0.2–0.3 s) matters: pressing the stopwatch late at the start and finish causes errors, which are worst for short times. Improvements: use a <b>longer distance</b>, use the same person to time, or use <b>light gates</b> connected to a data logger, which start and stop automatically.</p>
<div class="box why"><b class="lbl">★ Units and relative speed</b><p>km/h → m/s: ÷ 3.6 (72 km/h = 20 m/s). m/s → km/h: × 3.6.<br><b>Relative speed:</b> two cars on a motorway both doing 30 m/s in the same direction have a relative speed of 0 — they stay the same distance apart. Driving towards each other, their relative speed is 60 m/s.</p></div>` }
  ],
  eqs: [['v = @frac{d}{t}', 'speed (m/s) = distance (m) ÷ time (s)'], ['d = v × t', 'distance = speed × time'], ['"average speed" = @frac{"total distance"}{"total time"}', 'for a whole journey']],
  worked: [
    { q: 'A sprinter runs 100 m in 12.5 s. Calculate her average speed.', s: ['$v = @frac{d}{t}$', '$v = @frac{100}{12.5}$', '$v = 8 "m/s"$'], a: '8 m/s' },
    { q: 'A cyclist rides at 6 m/s for 5 minutes. How far does he travel?', s: ['Convert: 5 min = 300 s', '$d = v × t = 6 × 300$', '$d = 1800 "m"$ (1.8 km)'], a: '1800 m' },
    { q: 'A family drives 150 km in 2 hours, stops for 30 minutes, then drives 90 km in 1 hour. Find the average speed in km/h.', s: ['Total distance = 150 + 90 = 240 km', 'Total time = 2 + 0.5 + 1 = 3.5 h', 'Average speed = 240 ÷ 3.5 = 69 km/h'], a: '69 km/h' }
  ],
  pitfalls: ['Dividing time by distance.', 'Forgetting to convert minutes to seconds or km to m.', 'Leaving out stops when working out total time for average speed.', 'Averaging two speeds instead of using total distance ÷ total time.'],
  cards: [
    ['Speed equation?', '$v = d ÷ t$ (speed = distance ÷ time).'],
    ['Unit of speed?', 'Metres per second (m/s).'],
    ['Distance equation?', '$d = v × t$'],
    ['Time equation?', '$t = d ÷ v$'],
    ['Average speed?', 'Total distance ÷ total time.'],
    ['Typical walking speed?', 'About 1.5 m/s.'],
    ['Why do light gates give more accurate times?', 'They remove human reaction time.'],
    ['How long is human reaction time?', 'About 0.2–0.3 s.'],
    ['★ Convert 36 km/h to m/s.', '36 ÷ 3.6 = 10 m/s.']
  ],
  quiz: [
    { q: 'A car travels 300 m in 20 s. Its speed is', o: ['15 m/s', '6000 m/s', '0.067 m/s', '320 m/s'], x: '300 ÷ 20.' },
    { q: 'The unit m/s means', o: ['metres per second', 'miles per second', 'metres × seconds', 'minutes per second'], x: 'Distance per time.' },
    { q: 'A horse runs at 10 m/s for 30 s. It travels', o: ['300 m', '3 m', '40 m', '0.33 m'], x: 'd = v × t.' },
    { q: 'How long does it take to walk 450 m at 1.5 m/s?', o: ['300 s', '675 s', '0.003 s', '30 s'], x: 't = d ÷ v.' },
    { q: 'Average speed is calculated using', o: ['total distance ÷ total time', 'fastest speed ÷ 2', 'distance × time', 'the speedometer reading'], x: 'Whole journey.' },
    { q: '2 minutes in seconds is', o: ['120 s', '200 s', '60 s', '2 s'], x: '2 × 60.' },
    { q: 'Light gates are more accurate than a stopwatch because they', o: ['have no reaction time', 'are heavier', 'measure distance', 'are more expensive'], x: 'Automatic timing.' },
    { q: 'A runner does 400 m in 50 s then 400 m in 70 s. The average speed is', o: ['6.7 m/s', '8 m/s', '5.7 m/s', '7 m/s'], x: '800 ÷ 120.' },
    { q: '90 km/h in m/s is', o: ['25 m/s', '324 m/s', '9 m/s', '1.5 m/s'], x: '90 ÷ 3.6.', ch: 1 }
  ],
  exam: [
    { q: 'Students measure how fast they can run. Each runs 40 m while another student times them with a stopwatch.', tag: 'prac', parts: [
      { q: 'Write down the equation linking speed, distance and time.', m: 1, ms: ['speed = distance ÷ time'] },
      { q: 'Priya runs 40 m in 6.4 s. Calculate her speed.', m: 2, ms: ['40 ÷ 6.4', '= 6.25 m/s (6.3 m/s)'] },
      { q: 'Explain why the timing may not be accurate.', m: 2, ms: ['human reaction time (in starting and stopping the stopwatch)', 'is a significant fraction of such a short time'] },
      { q: 'Suggest two improvements to make the result more accurate.', m: 2, ms: ['use light gates / data logger', 'use a longer distance / repeat and take a mean / same timer each time'] }
    ] },
    { q: 'A train travels 180 km from Leeds to London in 2 hours, stops for 15 minutes, then travels 60 km in 45 minutes.', tag: 'calc', ch: 1, parts: [
      { q: 'Calculate the total distance and the total time taken in hours.', m: 2, ms: ['240 km', '3 hours'] },
      { q: 'Calculate the average speed in km/h.', m: 2, ms: ['240 ÷ 3', '= 80 km/h'] },
      { q: 'Explain why the train’s speed was sometimes more than this.', m: 1, ms: ['it stopped / slowed down at times, so it must have been faster at others to average 80 km/h'] }
    ] }
  ],
  sims: ['speedtrap'], gens: ['spd1', 'spd2', 'spd3', 'spd4']
});

TOPICS.push({
  id: '8.4', unit: '8', title: 'Distance–time graphs', short: 'Describing motion with graphs',
  summary: 'A distance–time graph shows how far something has travelled over time. The steeper the line, the faster it is going; a flat line means it has stopped. The gradient of the line is the speed.',
  spec: [
    'I can describe motion from a distance–time graph: stationary, steady speed, faster or slower',
    'I can calculate speed from a straight section of a distance–time graph',
    'I can draw a distance–time graph from a description or a table of results',
    'I can find total distance, total time and average speed from a graph',
    '★ I can recognise curved lines as speeding up or slowing down'
  ],
  learn: [
    { h: 'Reading a distance–time graph', html: `
[[d:k_dtgraph]]
<ul><li>Time goes along the <b>x-axis</b>; distance goes up the <b>y-axis</b>.</li><li><b>Straight sloping line</b> → moving at a <b>steady speed</b>.</li><li><b>Steeper line</b> → <b>faster</b>.</li><li><b>Horizontal (flat) line</b> → <b>stationary</b> (stopped) — time passes but distance does not change.</li><li><b>Line coming back down</b> to 0 → returning to the start.</li></ul>` },
    { h: 'Speed from the gradient', html: `
<p>For a straight section, pick two points and work out:</p>
<p style="text-align:center">$"speed" = @frac{"distance travelled"}{"time taken"} = @frac{"change in distance"}{"change in time"}$</p>
<p>From the graph above, the first section goes from 0 m to 200 m in 20 s: speed = 200 ÷ 20 = <b>10 m/s</b>. This “rise ÷ run” is the <b>gradient</b> of the line.</p>` },
    { h: 'Drawing distance–time graphs', html: `
<ol><li>Put time on the x-axis and distance on the y-axis, with units, e.g. “time / s”.</li><li>Choose scales that use most of the grid, going up in equal steps.</li><li>Plot each point with a small neat cross.</li><li>Join the points with straight lines (for a journey in stages) using a ruler.</li></ol>
<div class="box why"><b class="lbl">★ Curves</b><p>A line that gets <b>steeper</b> (curving upwards) shows <b>speeding up</b> (accelerating). A line that gets <b>less steep</b>, flattening out, shows <b>slowing down</b> (decelerating).</p></div>` }
  ],
  eqs: [['"speed" = "gradient" = @frac{"change in distance"}{"change in time"}', 'from a distance–time graph']],
  worked: [
    { q: 'A walker’s graph goes from (0 s, 0 m) to (200 s, 300 m), is flat until 300 s, then rises to 600 m at 500 s. Describe the walk and find the speed in each moving section.', s: ['0–200 s: steady speed = 300 ÷ 200 = 1.5 m/s', '200–300 s: flat — stationary (resting)', '300–500 s: steady speed = (600 − 300) ÷ (500 − 300) = 300 ÷ 200 = 1.5 m/s'], a: '1.5 m/s, rest, 1.5 m/s' },
    { q: 'For the same walk, find the average speed for the whole 500 s.', s: ['Total distance = 600 m, total time = 500 s', 'Average speed = 600 ÷ 500 = 1.2 m/s'], a: '1.2 m/s' }
  ],
  pitfalls: ['Reading the height of the line as the speed — speed is the steepness (gradient).', 'Saying a flat line means steady speed — it means stopped.', 'Using the total distance and time for one section only.', 'Plotting time on the y-axis.'],
  cards: [
    ['Flat line on a distance–time graph?', 'Stationary (stopped).'],
    ['Straight sloping line?', 'Steady speed.'],
    ['Steeper line?', 'Faster.'],
    ['How do you find speed from the graph?', 'Gradient = change in distance ÷ change in time.'],
    ['Which axis is time on?', 'The x-axis (horizontal).'],
    ['Line going back down to zero?', 'Returning to the starting point.'],
    ['Average speed from a graph?', 'Total distance ÷ total time.'],
    ['★ Curve getting steeper?', 'Speeding up (accelerating).']
  ],
  quiz: [
    { q: 'A horizontal line on a distance–time graph shows the object is', o: ['stationary', 'moving at steady speed', 'speeding up', 'going backwards'], x: 'Distance not changing.' },
    { q: 'The steeper the line on a distance–time graph, the', o: ['faster the object', 'slower the object', 'heavier the object', 'further it has gone'], x: 'Gradient = speed.' },
    { q: 'A line goes from (0 s, 0 m) to (10 s, 50 m). The speed is', o: ['5 m/s', '500 m/s', '0.2 m/s', '60 m/s'], x: '50 ÷ 10.' },
    { q: 'The speed on a distance–time graph is given by the', o: ['gradient', 'area underneath', 'height of the line', 'length of the line'], x: 'Change in distance ÷ change in time.' },
    { q: 'A line from (20 s, 40 m) to (60 s, 200 m) shows a speed of', o: ['4 m/s', '3.3 m/s', '10 m/s', '160 m/s'], x: '160 ÷ 40.' },
    { q: 'A graph line going back down towards 0 m means', o: ['returning to the start', 'stopping', 'speeding up', 'going uphill'], x: 'Distance from the start is decreasing.' },
    { q: 'A journey: 1200 m in 400 s in total. Average speed?', o: ['3 m/s', '0.33 m/s', '1600 m/s', '800 m/s'], x: '1200 ÷ 400.' },
    { q: 'A distance–time line that curves and becomes flatter shows', o: ['slowing down', 'speeding up', 'steady speed', 'stopped the whole time'], x: 'Gradient decreasing.', ch: 1 }
  ],
  exam: [
    { q: 'A student cycles to a friend’s house. Her distance–time graph: 0–100 s straight line from 0 to 500 m; 100–160 s flat at 500 m; 160–260 s straight line from 500 m to 1100 m.', tag: 'graph', parts: [
      { q: 'Describe her motion between 100 s and 160 s.', m: 1, ms: ['stationary / stopped'] },
      { q: 'Calculate her speed in the first 100 s.', m: 2, ms: ['500 ÷ 100', '= 5 m/s'] },
      { q: 'Calculate her speed between 160 s and 260 s.', m: 2, ms: ['600 ÷ 100', '= 6 m/s'] },
      { q: 'In which moving section was she faster? How can you tell from the graph?', m: 2, ms: ['160–260 s', 'the line is steeper'] },
      { q: 'Calculate her average speed for the whole journey.', m: 2, ms: ['1100 ÷ 260', '= 4.2 m/s'] }
    ] },
    { q: 'Sketch a distance–time graph for this journey: a dog walks at a steady speed away from its owner, stops to sniff a tree, then runs back to its owner faster than it walked away.', tag: 'graph', m: 3, ms: ['straight line sloping up from the origin', 'horizontal line', 'steeper straight line sloping down to 0 (distance axis)'] }
  ],
  sims: ['journey'], gens: ['dtg1', 'dtg2']
});

TOPICS.push({
  id: '8.5', unit: '8', title: 'Pressure in solids', short: 'p = F ÷ A; your own pressure on the ground',
  summary: 'Pressure is how concentrated a force is: pressure = force ÷ area, in N/m² (pascals). The same force on a small area gives a big pressure — sharp knives cut, stiletto heels dent floors. Spreading the force over a large area reduces the pressure — snowshoes and tractor tyres stop sinking.',
  spec: [
    'I can define pressure and state its unit (N/m² = Pa, or N/cm²)',
    'I can recall and use pressure = force ÷ area',
    'I can explain everyday examples of high and low pressure',
    'I can measure my own pressure on the ground using squared paper and my weight',
    '★ I can convert between N/cm² and N/m², and rearrange the pressure equation'
  ],
  learn: [
    { h: 'What is pressure?', html: `
<div class="box def"><b class="lbl">Learn this</b><p>$"pressure" = @frac{"force"}{"area"}$ &nbsp; &nbsp; $p = @frac{F}{A}$</p><p>force in N, area in m² → pressure in <b>N/m²</b>, also called <b>pascals (Pa)</b>. Area in cm² → pressure in N/cm².</p></div>
[[d:pressure]]
<p>The <b>same force</b> spread over a <b>bigger area</b> gives a <b>smaller pressure</b>. Squeeze a drawing pin: the flat head spreads the force over your thumb (low pressure), but the sharp point concentrates it into a tiny area (huge pressure) so it goes into the board.</p>` },
    { h: 'High and low pressure in real life', html: `
<div class="tbl"><table><tr><th>High pressure (small area) — useful for…</th><th>Low pressure (large area) — useful for…</th></tr>
<tr><td>knives, scissors, axes (sharp edges cut)</td><td>snowshoes and skis (do not sink in snow)</td></tr>
<tr><td>drawing pins, nails, needles</td><td>tractors and tanks with wide tyres or tracks (do not sink in mud)</td></tr>
<tr><td>football studs (grip)</td><td>camel’s wide feet on sand; wide straps on a heavy bag</td></tr>
<tr><td>ice skates (the thin blade)</td><td>lying flat to spread your weight on thin ice</td></tr></table></div>
<p>High pressure can also be a problem: stiletto heels can dent wooden floors — a 600 N person on one 1 cm² heel puts 600 N/cm² on it, more than an elephant’s foot!</p>` },
    { h: 'Practical: your pressure on the ground', html: `
[[d:footprint]]
<ol><li>Find your <b>weight</b>: mass (from bathroom scales) × 10. e.g. 50 kg → 500 N.</li><li>Stand on <b>1 cm squared paper</b> and draw round your shoe.</li><li>Count the squares: count a square if <b>half or more</b> of it is inside the outline; ignore it if less than half. e.g. 180 cm².</li><li>Standing on <b>two feet</b>, the area is doubled: 360 cm².</li><li>Pressure = 500 ÷ 360 = <b>1.4 N/cm²</b>. On one foot it is 500 ÷ 180 = 2.8 N/cm² — twice as much.</li></ol>
<div class="box why"><b class="lbl">★ Units</b><p>1 m² = 100 cm × 100 cm = <b>10 000 cm²</b>. So 1 N/cm² = 10 000 N/m² (Pa). 1.4 N/cm² = 14 000 Pa.<br>Rearranged: $F = p × A$ and $A = @frac{F}{p}$.</p></div>` }
  ],
  eqs: [['p = @frac{F}{A}', 'pressure (N/m² or Pa) = force (N) ÷ area (m²)'], ['F = p × A', 'force from pressure'], ['1 "N/cm"^2 = 10 000 "N/m"^2', '★ unit conversion']],
  worked: [
    { q: 'A box weighs 300 N and its base is 0.5 m². Calculate the pressure on the floor.', s: ['$p = @frac{F}{A}$', '$p = @frac{300}{0.5}$', '$p = 600 "N/m"^2$ (600 Pa)'], a: '600 Pa' },
    { q: 'An elephant weighs 50 000 N and stands on four feet, each 0.1 m². A woman weighing 600 N balances on one stiletto heel of 0.0001 m² (1 cm²). Who exerts more pressure?', s: ['Elephant: area = 4 × 0.1 = 0.4 m²; $p = 50 000 ÷ 0.4 = 125 000 "Pa"$', 'Heel: $p = 600 ÷ 0.0001 = 6 000 000 "Pa"$', 'The heel exerts about 48 times more pressure!'], a: 'the heel' }
  ],
  pitfalls: ['Multiplying force and area instead of dividing.', 'Forgetting that two feet means double the area.', 'Mixing cm² and m² — say which unit you are using.', 'Counting part squares that are less than half inside the outline.'],
  cards: [
    ['Pressure equation?', '$p = F ÷ A$ (pressure = force ÷ area).'],
    ['Units of pressure?', 'N/m² = pascal (Pa); also N/cm².'],
    ['Why do knives cut?', 'The sharp edge has a tiny area, giving a very high pressure.'],
    ['Why do snowshoes stop you sinking?', 'They spread your weight over a larger area, lowering the pressure.'],
    ['Pressure of 200 N on 4 m²?', '50 Pa.'],
    ['How do you find the area of your foot?', 'Draw round it on 1 cm squared paper and count squares (half or more).'],
    ['Pressure standing on one foot vs two?', 'Twice as big on one foot.'],
    ['Force from pressure and area?', '$F = p × A$'],
    ['★ 1 m² in cm²?', '10 000 cm².']
  ],
  quiz: [
    { q: 'A 100 N force acts on 2 m². The pressure is', o: ['50 Pa', '200 Pa', '102 Pa', '0.02 Pa'], x: '100 ÷ 2.' },
    { q: 'The unit of pressure is', o: ['N/m² (pascal)', 'N m', 'kg/m³', 'N/kg'], x: 'Force per area.' },
    { q: 'Which has the smallest pressure on the snow?', o: ['a person on skis', 'a person in trainers', 'a person on one foot', 'a person in high heels'], x: 'Biggest area.' },
    { q: 'A drawing pin goes into wood easily because its point has', o: ['a tiny area, so a very high pressure', 'a large area', 'a large mass', 'no friction'], x: 'p = F ÷ A.' },
    { q: 'A 600 N person stands on 300 cm². Their pressure is', o: ['2 N/cm²', '0.5 N/cm²', '180 000 N/cm²', '900 N/cm²'], x: '600 ÷ 300.' },
    { q: 'Tractors have wide tyres so that they', o: ['do not sink into soft ground', 'go faster', 'grip less', 'weigh less'], x: 'Lower pressure.' },
    { q: 'If the area stays the same and the force doubles, the pressure', o: ['doubles', 'halves', 'stays the same', 'quadruples'], x: 'p = F ÷ A.' },
    { q: 'When counting squares for a footprint you count a square if', o: ['half or more of it is inside the outline', 'any part is inside', 'only if it is fully inside', 'it touches the toe'], x: 'Standard rule.' },
    { q: 'A pressure of 2 N/cm² is how many N/m²?', o: ['20 000 N/m²', '200 N/m²', '0.0002 N/m²', '2 N/m²'], x: '× 10 000.', ch: 1 }
  ],
  exam: [
    { q: 'A student measures the pressure she exerts on the floor. Her mass is 45 kg (g = 10 N/kg). She draws around one shoe on 1 cm squared paper and counts 150 squares.', tag: 'prac', parts: [
      { q: 'Calculate her weight.', m: 2, ms: ['45 × 10', '= 450 N'] },
      { q: 'Calculate the area she stands on when she uses both feet.', m: 1, ms: ['300 cm²'] },
      { q: 'Calculate her pressure on the floor standing on both feet. Give the unit.', m: 3, ms: ['pressure = force ÷ area', '450 ÷ 300 = 1.5', 'N/cm²'] },
      { q: 'Explain how her pressure changes when she stands on one foot.', m: 2, ms: ['pressure doubles (to 3.0 N/cm²)', 'same force on half the area'] },
      { q: 'Describe how she should decide which part squares to count.', m: 1, ms: ['count a square if half or more is inside the outline; ignore it if less than half'] }
    ] },
    { q: 'Explain why a sharp knife cuts better than a blunt knife, even when the same force is used.', tag: 'ext', m: 3, ms: ['sharp edge has a much smaller area (in contact)', 'pressure = force ÷ area', 'so the same force gives a much bigger pressure'] }
  ],
  sims: ['pressure'], gens: ['pr1', 'pr2', 'pr3', 'pr4']
});

TOPICS.push({
  id: '8.6', unit: '8', title: 'Pressure in liquids', short: 'Depth, dams, submarines and hydraulics',
  summary: 'Liquids push on everything in them and on the walls of their containers. Pressure in a liquid acts in all directions and increases with depth and with the density of the liquid. Liquids cannot be squashed, so they can transmit pressure — which is how hydraulic machines work.',
  spec: [
    'I can explain that pressure in a liquid acts in all directions',
    'I can explain why pressure increases with depth, using the idea of the weight of liquid above',
    'I can explain how dams, divers and submarines are affected by water pressure',
    'I can calculate pressure = force ÷ area for liquids, including in hydraulic systems',
    '★ I can use pressure = height × density × g'
  ],
  learn: [
    { h: 'Pressure increases with depth', html: `
[[d:k_depth]]
<p>The deeper you go in a liquid, the more liquid there is <b>above</b> you, pushing down with its <b>weight</b>. So pressure <b>increases with depth</b>. Punch holes down the side of a bottle full of water: water spurts <b>furthest from the bottom hole</b>, where the pressure is biggest.</p>
<p>Pressure in a liquid acts <b>in all directions</b> — up, down and sideways — at right angles to any surface. That is why the water squirts sideways from the holes and pushes upwards on a boat.</p>
<p>A <b>denser liquid</b> gives a bigger pressure at the same depth (sea water more than fresh water).</p>` },
    { h: 'Dams, divers and submarines', html: `
<ul><li><b>Dams</b> are much <b>thicker at the bottom</b> than at the top, because the water pressure is biggest at the bottom.</li><li><b>Divers</b> feel the pressure in their ears as they go deeper; very deep dives need special suits. Every 10 m of water adds about the same pressure as the whole atmosphere.</li><li><b>Submarines</b> have thick, curved steel hulls to withstand huge pressures deep in the ocean.</li><li>Water towers are built high up so the water comes out of taps with plenty of pressure.</li></ul>` },
    { h: 'Hydraulics', html: `
[[d:hydraulic]]
<p>Liquids are <b>incompressible</b> (their particles are already touching, so they cannot be squashed). A force on a liquid in a closed system creates a pressure that is passed on to <b>every part</b> of the liquid.</p>
<p>In a <b>hydraulic jack</b>: a small force on a <b>small piston</b> creates a pressure (p = F ÷ A). The same pressure acts on a <b>large piston</b> and gives a much bigger force (F = p × A). Car brakes, diggers and barber’s chairs work this way.</p>
<p>Example: 50 N on a 5 cm² piston → p = 10 N/cm². On a 200 cm² piston: F = 10 × 200 = <b>2000 N</b>.</p>
<div class="box why"><b class="lbl">★ Calculating liquid pressure</b><p>$p = h × ρ × g$ &nbsp; (Pa = m × kg/m³ × N/kg). At the bottom of a 2 m deep pool: p = 2 × 1000 × 10 = 20 000 Pa (on top of atmospheric pressure).</p></div>` }
  ],
  eqs: [['p = @frac{F}{A}', 'pressure = force ÷ area (also in hydraulics)'], ['p = h × ρ × g', '★ pressure due to a liquid column']],
  worked: [
    { q: 'In a hydraulic lift a 40 N force pushes a piston of area 2 cm². The large piston has an area of 150 cm². What force does it produce?', s: ['Pressure: $p = F ÷ A = 40 ÷ 2 = 20 "N/cm"^2$', 'The same pressure acts on the large piston.', '$F = p × A = 20 × 150 = 3000 "N"$'], a: '3000 N' },
    { q: 'Calculate the pressure due to water 5 m deep. (density of water 1000 kg/m³, g = 10 N/kg)', s: ['$p = h × ρ × g$', '$p = 5 × 1000 × 10$', '$p = 50 000 "Pa"$'], a: '50 000 Pa' }
  ],
  pitfalls: ['Saying water pressure only pushes downwards.', 'Saying pressure depends on the total amount of water — it depends on depth (and density).', 'Saying liquids can be squashed.', 'Using the force on the small piston as the force on the large piston — it is the pressure that is the same.'],
  cards: [
    ['How does pressure in a liquid change with depth?', 'It increases.'],
    ['Why does pressure increase with depth?', 'More weight of liquid above.'],
    ['Which direction does pressure act in a liquid?', 'In all directions.'],
    ['Why are dams thicker at the bottom?', 'The water pressure is greatest at the bottom.'],
    ['Why can hydraulic systems work?', 'Liquids cannot be compressed, so pressure is transmitted through them.'],
    ['What stays the same on both pistons of a hydraulic jack?', 'The pressure.'],
    ['Which gives a bigger pressure at 10 m: sea water or fresh water?', 'Sea water (denser).'],
    ['★ Equation for liquid pressure?', '$p = h × ρ × g$']
  ],
  quiz: [
    { q: 'Water spurts furthest from a hole near the', o: ['bottom of the bottle', 'top of the bottle', 'middle', 'they are all the same'], x: 'Greatest pressure at the greatest depth.' },
    { q: 'Pressure in a liquid acts', o: ['in all directions', 'only downwards', 'only upwards', 'only sideways'], x: 'At right angles to surfaces.' },
    { q: 'Dams are thicker at the bottom because', o: ['water pressure is greatest there', 'it looks better', 'the top holds more water', 'water is lighter at the bottom'], x: 'Pressure increases with depth.' },
    { q: 'Hydraulic systems work because liquids', o: ['cannot be compressed', 'are very light', 'are easily squashed', 'are always hot'], x: 'They transmit pressure.' },
    { q: 'A 20 N force on a 4 cm² piston gives a pressure of', o: ['5 N/cm²', '80 N/cm²', '24 N/cm²', '0.2 N/cm²'], x: '20 ÷ 4.' },
    { q: 'That pressure acts on a 100 cm² piston. The force produced is', o: ['500 N', '20 N', '25 N', '5 N'], x: '5 × 100.' },
    { q: 'At the same depth, the pressure is bigger in', o: ['a denser liquid', 'a less dense liquid', 'a wider tank', 'a colder room'], x: 'Pressure depends on density.' },
    { q: 'Pressure due to 3 m of water (ρ = 1000 kg/m³, g = 10 N/kg) is', o: ['30 000 Pa', '3000 Pa', '300 Pa', '13 000 Pa'], x: 'p = hρg.', ch: 1 }
  ],
  exam: [
    { q: 'A plastic bottle full of water has three holes, A (near the top), B (middle) and C (near the bottom).', tag: '', parts: [
      { q: 'From which hole does the water spurt out furthest?', m: 1, ms: ['C'] },
      { q: 'Explain your answer.', m: 2, ms: ['pressure increases with depth', 'because there is more water above (more weight) pushing down'] },
      { q: 'Explain why the water comes out sideways, not only downwards.', m: 1, ms: ['pressure in a liquid acts in all directions'] }
    ] },
    { q: 'A mechanic uses a hydraulic jack. She pushes on a small piston (area 5 cm²) with a force of 150 N. The large piston has an area of 250 cm².', tag: 'calc', parts: [
      { q: 'Calculate the pressure in the liquid.', m: 2, ms: ['150 ÷ 5', '= 30 N/cm²'] },
      { q: 'Calculate the force on the large piston.', m: 2, ms: ['30 × 250', '= 7500 N'] },
      { q: 'Explain why the liquid used must not be a gas.', m: 2, ms: ['gases can be compressed / squashed', 'so the pressure would not be passed on / the piston would just squash the gas'] }
    ] }
  ],
  sims: ['k_fluid', 'hydraulic'], gens: ['pr5', 'pr6']
});

TOPICS.push({
  id: '8.7', unit: '8', title: 'Pressure in gases', short: 'Particles, the atmosphere and the crushed can',
  summary: 'Gas particles move fast in all directions and hit the walls of their container, causing gas pressure. The air around us exerts atmospheric pressure — about 100 000 Pa. The crushed-can experiment shows how strong it is when the air inside a can is removed.',
  spec: [
    'I can explain gas pressure in terms of particles colliding with the walls',
    'I can explain how heating, adding more gas or squashing a gas increases its pressure',
    'I can describe atmospheric pressure and how it changes with height',
    'I can explain the crushed-can experiment using particles and pressure differences',
    '★ I can explain everyday effects of atmospheric pressure, like drinking straws and suction cups'
  ],
  learn: [
    { h: 'Gas pressure and particles', html: `
[[d:k_gasbox]]
<p>Gas particles move <b>quickly</b> in <b>random directions</b>. When they hit the walls of their container, each collision gives a tiny push. Billions of collisions every second add up to a steady force on the walls — the <b>gas pressure</b>.</p>
<p>The pressure goes <b>up</b> when:</p><ul><li>the gas is <b>heated</b> — particles move faster, so they hit the walls <b>harder and more often</b>;</li><li><b>more gas</b> is added (pumping up a tyre) — more particles, more collisions;</li><li>the gas is <b>squashed into a smaller volume</b> — particles hit the walls more often. (This is why a bicycle pump gets harder to push.)</li></ul>` },
    { h: 'Atmospheric pressure', html: `
[[d:k_atmosphere]]
<p>We live at the bottom of an ocean of air. The weight of the air above us causes <b>atmospheric pressure</b>: about <b>100 000 Pa</b> (100 kPa, or 10 N on every square centimetre) at sea level.</p>
<p>It acts in <b>all directions</b>, which is why we do not notice it — the fluids in our bodies push back out equally. Atmospheric pressure <b>decreases with height</b>, because there is less air above and the air is less dense. At the top of Everest it is only about one-third of the sea-level value; aircraft cabins are pressurised.</p>` },
    { h: 'The crushed-can experiment', html: `
[[d:can]]
<ol><li>Put a little water (about 1 cm deep) in an empty drinks can and heat it until it <b>boils</b> and steam comes out for about 30 seconds. The steam <b>pushes most of the air out</b> of the can.</li><li>Using tongs, quickly turn the can <b>upside down</b> into a bowl of <b>cold water</b>.</li><li>The steam inside <b>condenses</b> into a few drops of water. Now there are <b>very few gas particles</b> inside the can, so the pressure inside is very low.</li><li>Atmospheric pressure outside is much bigger than the pressure inside. The <b>pressure difference</b> produces a huge force that <b>crushes the can</b> instantly — with a loud crunch!</li></ol>
<div class="box warn"><b class="lbl">Safety</b><p>Use tongs and eye protection; the can and steam are very hot. This is usually a teacher demonstration.</p></div>
<div class="box why"><b class="lbl">★ Atmospheric pressure at work</b><p><b>Drinking straws:</b> sucking lowers the pressure inside the straw; atmospheric pressure on the drink’s surface pushes the drink up. <b>Suction cups:</b> pushing out the air leaves low pressure behind the cup; the air outside holds it on. The same idea explains how a syringe fills.</p></div>` }
  ],
  eqs: [['"atmospheric pressure" ≈ 100 000 "Pa" = 10 "N/cm"^2', 'at sea level']],
  worked: [
    { q: 'Explain, using particles, why a sealed bag of crisps swells up when taken up a mountain.', s: ['Inside the bag, the gas pressure stays about the same as at sea level.', 'Higher up, atmospheric pressure outside is lower (less air above).', 'The pressure inside is now bigger than outside, so the bag is pushed outwards and swells.'], a: 'outside pressure falls; inside pressure pushes the bag out' },
    { q: 'Atmospheric pressure is 10 N/cm². What force does it exert on a 300 cm² side of a can?', s: ['$F = p × A$', '$F = 10 × 300$', '$F = 3000 "N"$ — the weight of about 300 kg! It is normally balanced by the air inside.'], a: '3000 N' }
  ],
  pitfalls: ['Saying the can is crushed by suction or a vacuum “pulling” — it is pushed in by the air outside.', 'Forgetting that the steam condensing is what removes the gas particles.', 'Saying heating a gas makes the particles bigger — they move faster.', 'Saying atmospheric pressure acts only downwards.'],
  cards: [
    ['What causes gas pressure?', 'Gas particles colliding with the walls of the container.'],
    ['Why does heating a gas increase its pressure?', 'The particles move faster and hit the walls harder and more often.'],
    ['Why does squashing a gas increase its pressure?', 'The particles hit the walls more often.'],
    ['Atmospheric pressure at sea level?', 'About 100 000 Pa (10 N/cm²).'],
    ['How does atmospheric pressure change with height?', 'It decreases.'],
    ['In the crushed-can experiment, what removes the air?', 'The steam pushes it out.'],
    ['Why does the can crush when turned into cold water?', 'The steam condenses, leaving very low pressure inside; atmospheric pressure outside crushes it.'],
    ['★ How does a drinking straw work?', 'Sucking lowers the pressure in the straw; atmospheric pressure pushes the drink up.']
  ],
  quiz: [
    { q: 'Gas pressure is caused by', o: ['particles hitting the walls of the container', 'particles sticking to the walls', 'the gas being heavy', 'the colour of the gas'], x: 'Collisions.' },
    { q: 'Heating a sealed can of gas makes the pressure', o: ['increase', 'decrease', 'stay the same', 'drop to zero'], x: 'Faster particles.' },
    { q: 'Atmospheric pressure is caused by', o: ['the weight of the air above us', 'the Sun', 'the wind', 'the Earth spinning'], x: 'An ocean of air.' },
    { q: 'At the top of a high mountain, atmospheric pressure is', o: ['lower', 'higher', 'the same', 'zero'], x: 'Less air above.' },
    { q: 'In the crushed-can experiment, the can crushes because', o: ['the air pressure outside is bigger than the pressure inside', 'the cold water pulls it in', 'the steam gets heavier', 'the can melts'], x: 'Pressure difference.' },
    { q: 'Why is the can heated first?', o: ['so steam pushes the air out', 'to make it weaker', 'to make it lighter', 'to make it shine'], x: 'Then the steam condenses.' },
    { q: 'Pumping more air into a tyre increases the pressure because', o: ['there are more particles hitting the walls', 'the particles get bigger', 'the tyre gets colder', 'the air becomes liquid'], x: 'More collisions.' },
    { q: 'Atmospheric pressure at sea level is about', o: ['100 000 Pa', '100 Pa', '10 Pa', '1 000 000 000 Pa'], x: '100 kPa.' },
    { q: 'A suction cup sticks to a window because', o: ['atmospheric pressure outside pushes it on', 'the cup pulls the glass', 'glue on the cup', 'static electricity'], x: 'Low pressure behind the cup.', ch: 1 }
  ],
  exam: [
    { q: 'A teacher heats a small amount of water in an open metal can until it boils. She then quickly turns the can upside down into a bowl of cold water. The can is crushed.', tag: 'ext', parts: [
      { q: 'Explain why the can is crushed.', m: 4, ms: ['steam pushed the air out of the can', 'cold water makes the steam condense (to water)', 'so there are very few gas particles inside / very low pressure inside', 'atmospheric pressure outside is much greater, so it pushes the can in'] },
      { q: 'Give one safety precaution for this demonstration.', m: 1, ms: ['use tongs / heat-proof gloves / eye protection / stand back'] }
    ] },
    { q: 'A sealed plastic bottle of air is taken from a warm car into a cold room.', tag: '', parts: [
      { q: 'Describe what happens to the speed of the air particles in the bottle.', m: 1, ms: ['they slow down'] },
      { q: 'Explain what happens to the pressure inside the bottle and suggest what might happen to the bottle.', m: 3, ms: ['particles hit the walls less often and less hard', 'so the pressure inside decreases', 'the bottle is squashed / dents in slightly by the air outside'] }
    ] }
  ],
  sims: ['can', 'k_gas'], gens: ['pr7']
});
