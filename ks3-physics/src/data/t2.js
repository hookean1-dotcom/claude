/* ==========================================================
   YEAR 7 · UNIT 2 · MEASURING FORCES
   ========================================================== */
TOPICS.push({
  id: '2.1', unit: '2', title: 'Resultant force', short: 'Adding and subtracting forces in a line',
  summary: 'The resultant force is the single force that has the same effect as all the forces acting on an object together. Forces in the same direction add; forces in opposite directions subtract.',
  spec: [
    'I can explain what the resultant force is',
    'I can calculate the resultant of forces acting in the same direction (add) and opposite directions (subtract)',
    'I can give the direction of the resultant force',
    'I can use the resultant force to predict how an object’s motion will change',
    '★ I can find the resultant when there are forces both horizontally and vertically'
  ],
  learn: [
    { h: 'What is the resultant force?', html: `
<p>Most objects have several forces acting on them. The <b>resultant force</b> is the <b>one single force</b> that would have the same effect as all of them together.</p>
<ul><li>Forces in the <b>same direction</b>: <b>add</b> them. Two people pushing a car forwards with 300 N and 200 N give a resultant of 500 N forwards.</li><li>Forces in <b>opposite directions</b>: <b>subtract</b> the smaller from the larger. The resultant acts in the direction of the <b>bigger</b> force.</li></ul>
[[d:k_resultant]]` },
    { h: 'Resultant force and motion', html: `
<div class="tbl"><table><tr><th>Resultant force</th><th>What happens</th></tr>
<tr><td><b>zero</b> (balanced)</td><td>no change: stays still, or keeps moving at a steady speed in a straight line</td></tr>
<tr><td>in the direction of motion</td><td>speeds up</td></tr>
<tr><td>opposite to the motion</td><td>slows down</td></tr>
<tr><td>at an angle to the motion</td><td>changes direction</td></tr></table></div>
<p>The bigger the resultant force, the faster the motion changes. A small car needs less resultant force than a lorry to speed up just as quickly.</p>` },
    { h: 'Tug of war', html: `
[[d:tugofwar]]
<p>Team A pulls left with 1200 N; team B pulls right with 1000 N. Resultant = 1200 − 1000 = <b>200 N to the left</b>, so the rope (and team B) starts moving to the left. If both teams pulled with 1100 N, the resultant would be zero and nobody would move.</p>
<div class="box why"><b class="lbl">★ Two directions at once</b><p>Deal with each direction separately. A plane has lift 50 000 N up and weight 50 000 N down (vertical resultant zero), and thrust 20 000 N forwards with drag 15 000 N backwards. The resultant is 5000 N forwards, so it speeds up but stays at the same height.</p></div>` }
  ],
  eqs: [['"resultant" = F_1 + F_2', 'forces in the same direction'], ['"resultant" = F_{"big"} - F_{"small"}', 'forces in opposite directions (acts in the direction of the bigger force)']],
  worked: [
    { q: 'A shopping trolley is pushed with 60 N. Friction is 15 N. Find the resultant force and describe the motion.', s: ['Opposite directions → subtract.', 'Resultant = 60 − 15 = 45 N', 'Acts forwards (the direction of the push), so the trolley speeds up.'], a: '45 N forwards — it speeds up' },
    { q: 'A cyclist’s driving force is 150 N. Air resistance is 90 N and friction is 60 N. What is the resultant force?', s: ['Backwards forces add: 90 + 60 = 150 N', 'Forwards 150 N − backwards 150 N = 0 N', 'Resultant is zero: the forces are balanced, so the speed stays the same.'], a: '0 N (steady speed)' }
  ],
  pitfalls: ['Adding forces that act in opposite directions.', 'Giving a size but no direction for the resultant.', 'Saying a resultant of zero means the object must be still — it may be moving steadily.', 'Forgetting to add up all the forces on one side before subtracting.'],
  cards: [
    ['What is the resultant force?', 'The single force that has the same effect as all the forces acting together.'],
    ['Resultant of forces in the same direction?', 'Add them.'],
    ['Resultant of forces in opposite directions?', 'Subtract the smaller from the larger; it acts in the direction of the larger.'],
    ['Resultant force of zero means…', 'balanced forces — no change in motion.'],
    ['8 N left and 5 N right. Resultant?', '3 N to the left.'],
    ['What does a resultant force in the direction of motion do?', 'Speeds the object up.'],
    ['What does a resultant force opposite to the motion do?', 'Slows the object down.'],
    ['★ How do you handle forces in two directions?', 'Find the resultant in each direction separately.']
  ],
  quiz: [
    { q: 'Forces of 40 N and 25 N act in the same direction. The resultant is', o: ['65 N', '15 N', '40 N', '1000 N'], x: 'Same direction: add.' },
    { q: 'Forces of 40 N right and 25 N left act on a box. The resultant is', o: ['15 N to the right', '65 N to the right', '15 N to the left', '0 N'], x: 'Subtract; direction of the bigger force.' },
    { q: 'The resultant force on a car is zero. The car could be', o: ['moving at a steady speed', 'speeding up', 'slowing down', 'turning a corner'], x: 'Balanced forces → no change in motion.' },
    { q: 'A 500 N push and 500 N of friction act on a crate. The crate', o: ['does not change its motion', 'speeds up', 'slows down', 'moves backwards'], x: 'Resultant is zero.' },
    { q: 'Team A pulls with 900 N, team B with 1100 N. Who wins?', o: ['team B, with a resultant of 200 N', 'team A, with a resultant of 200 N', 'nobody — it is balanced', 'team B, with a resultant of 2000 N'], x: '1100 − 900 = 200 N towards B.' },
    { q: 'A rocket has 30 000 N thrust and 22 000 N weight. The resultant is', o: ['8000 N up', '52 000 N up', '8000 N down', '0 N'], x: '30 000 − 22 000.' },
    { q: 'Forces of 10 N, 15 N and 20 N all push to the right. The resultant is', o: ['45 N right', '5 N right', '25 N right', '15 N right'], x: 'Add them all.' },
    { q: 'A bike: driving force 120 N; air resistance 50 N; friction 30 N. Resultant?', o: ['40 N forwards', '200 N forwards', '70 N forwards', '40 N backwards'], x: '120 − (50 + 30).' },
    { q: 'A plane: lift = weight; thrust 8000 N; drag 8000 N. The plane', o: ['flies at a steady speed and height', 'climbs', 'speeds up', 'slows down'], x: 'Resultant zero in both directions.', ch: 1 }
  ],
  exam: [
    { q: 'The diagram shows a box being pulled along the floor with a force of 80 N. The friction force on the box is 30 N.', tag: 'calc', parts: [
      { q: 'Calculate the resultant force on the box.', m: 2, ms: ['80 − 30', '= 50 N'] },
      { q: 'State the direction of the resultant force.', m: 1, ms: ['in the direction of the pull / forwards'] },
      { q: 'Describe what happens to the speed of the box.', m: 1, ms: ['it increases / speeds up'] },
      { q: 'A second person helps by pushing from behind with 20 N. Calculate the new resultant force.', m: 2, ms: ['80 + 20 − 30', '= 70 N (forwards)'] }
    ] },
    { q: 'A car travels along a straight road. The driving force is 2500 N. Air resistance is 1500 N and friction is 1000 N.', tag: 'calc', parts: [
      { q: 'Calculate the resultant force on the car.', m: 2, ms: ['backwards forces = 1500 + 1000 = 2500 N', 'resultant = 2500 − 2500 = 0 N'] },
      { q: 'Describe the motion of the car.', m: 2, ms: ['steady / constant speed', 'in a straight line (no change in motion)'] },
      { q: 'The driver takes her foot off the accelerator, so the driving force becomes zero. Explain what happens.', m: 2, ms: ['resultant force is 2500 N backwards / unbalanced backwards', 'the car slows down'] }
    ] }
  ],
  sims: ['k_forces'], gens: ['res1', 'res2', 'res3']
});

TOPICS.push({
  id: '2.2', unit: '2', title: 'Newton meters', short: 'Measuring forces with springs',
  summary: 'A newton meter (force meter) uses a spring: the bigger the force, the more the spring stretches. Choosing a meter with a sensible range, zeroing it, and reading the scale carefully give accurate measurements.',
  spec: [
    'I can describe how a newton meter measures force using a stretching spring',
    'I can read a newton meter scale, working out the value of each division',
    'I can choose a newton meter with a suitable range and zero it before use',
    'I can describe how the extension of a spring depends on the force (proportional, up to a limit)',
    '★ I can use proportion to predict the extension of a spring'
  ],
  learn: [
    { h: 'How a newton meter works', html: `
[[d:newtonmeter]]
<p>A <b>newton meter</b> (or <b>force meter</b>) has a <b>spring</b> inside. When you pull the hook, the spring <b>stretches</b>. The bigger the force, the more it stretches, and a pointer moves along a scale marked in <b>newtons</b>.</p>
<p>This works because, for a spring, the <b>extension</b> (how much longer it gets) is <b>proportional to the force</b>: double the force → double the extension.</p>` },
    { h: 'Using a newton meter properly', html: `
<ol><li><b>Choose the range.</b> Pick a meter whose maximum is a bit bigger than the force you expect. A 100 N meter is useless for a 2 N force — the pointer hardly moves; a 5 N meter would be over-stretched and damaged by a 20 N force.</li><li><b>Zero it.</b> Hold it the way you will use it (usually hanging vertically) and adjust it so it reads 0 with nothing attached. A meter that reads 0.2 N with nothing on it has a <b>zero error</b>.</li><li><b>Work out the scale.</b> Count how many small divisions there are between two numbered marks. If 0 to 1 N has 10 divisions, each is 0.1 N.</li><li><b>Read at eye level</b>, straight on, to avoid parallax error.</li><li>Pull gently and steadily, in line with the spring.</li></ol>
<div class="box tip"><b class="lbl">Resolution</b><p>The <b>resolution</b> is the smallest change the meter can show — the value of one division. A 10 N meter with 0.2 N divisions can measure to 0.2 N.</p></div>` },
    { h: 'Stretching springs: Hooke’s law', html: `
[[d:k_hooke]]
<p>If you hang masses on a spring and measure the extension, the graph of <b>force against extension</b> is a <b>straight line through the origin</b>: extension is <b>proportional</b> to force. This is <b>Hooke’s law</b>.</p>
<p>If you stretch the spring too far, past its <b>limit of proportionality</b>, the line curves and the spring may not go back to its original length — it is permanently stretched. That is why you must not overload a newton meter.</p>
<p><b>Extension = stretched length − original length.</b> A spring 5 cm long that stretches to 8 cm has an extension of 3 cm.</p>` }
  ],
  eqs: [['"extension" = "stretched length" - "original length"', 'spring extension'], ['"extension" ∝ "force"', 'Hooke’s law, up to the limit of proportionality']],
  worked: [
    { q: 'A newton meter scale goes from 0 to 10 N with 5 small divisions between each whole newton. What is the value of each division, and what is the reading if the pointer is 3 divisions past the 6 N mark?', s: ['1 N ÷ 5 divisions = 0.2 N per division', '6 N + 3 × 0.2 N = 6.6 N'], a: '0.2 N; 6.6 N' },
    { q: 'A spring stretches 4 cm when a 2 N weight hangs on it. How far will it stretch with 5 N (within its limit)?', s: ['Extension is proportional to force.', '2 N → 4 cm, so 1 N → 2 cm', '5 N → 5 × 2 = 10 cm'], a: '10 cm' }
  ],
  pitfalls: ['Forgetting to zero the meter first.', 'Assuming each small division is 1 N — always work out the scale.', 'Using a meter with the wrong range.', 'Confusing length with extension — extension is the increase in length.'],
  cards: [
    ['What is inside a newton meter?', 'A spring.'],
    ['How does a newton meter measure force?', 'The bigger the force, the more the spring stretches; the pointer shows the force on a scale in newtons.'],
    ['What does “zeroing” a newton meter mean?', 'Adjusting it so it reads 0 with nothing attached.'],
    ['What is a zero error?', 'A reading when nothing is attached — it must be removed or subtracted.'],
    ['How do you choose a newton meter?', 'Pick a range a bit bigger than the force expected.'],
    ['What is the resolution of a meter?', 'The smallest change it can show — the value of one division.'],
    ['Extension = ?', 'stretched length − original length.'],
    ['What is Hooke’s law?', 'The extension of a spring is proportional to the force on it (up to the limit of proportionality).'],
    ['What happens past the limit of proportionality?', 'The spring stretches more than expected and may not return to its original length.'],
    ['★ 3 N stretches a spring 6 cm. Extension for 4.5 N?', '9 cm.']
  ],
  quiz: [
    { q: 'A newton meter measures force using', o: ['a spring that stretches', 'a balance and masses', 'a magnet', 'a thermometer'], x: 'More force, more stretch.' },
    { q: 'Before using a newton meter you should', o: ['zero it', 'stretch it as far as it goes', 'hold it upside down', 'oil the spring'], x: 'It must read 0 with nothing attached.' },
    { q: 'A scale has 4 divisions between 0 N and 1 N. Each division is', o: ['0.25 N', '0.4 N', '4 N', '0.1 N'], x: '1 ÷ 4.' },
    { q: 'Which meter is best for measuring a force of about 3 N?', o: ['0–5 N', '0–100 N', '0–1 N', '0–50 N'], x: 'Just bigger than the force expected.' },
    { q: 'A spring is 12 cm long. With a weight on, it is 17 cm long. The extension is', o: ['5 cm', '17 cm', '29 cm', '12 cm'], x: '17 − 12.' },
    { q: 'A spring stretches 2 cm for each newton. Its extension with 7 N is', o: ['14 cm', '9 cm', '3.5 cm', '7 cm'], x: '7 × 2.' },
    { q: 'A newton meter reads 0.3 N with nothing attached. This is a', o: ['zero error', 'resolution', 'range', 'anomaly'], x: 'It should read 0.' },
    { q: 'Why read the scale at eye level?', o: ['to avoid parallax error', 'to zero the meter', 'to make the force bigger', 'to improve the range'], x: 'Looking from an angle makes the pointer seem in the wrong place.' },
    { q: 'A force–extension graph for a spring (before its limit) is', o: ['a straight line through the origin', 'a curve', 'a horizontal line', 'a straight line not through the origin'], x: 'Extension is proportional to force.' },
    { q: '2 N stretches a spring by 5 cm. What force gives 12 cm?', o: ['4.8 N', '6 N', '2.4 N', '30 N'], x: '1 N → 2.5 cm; 12 ÷ 2.5.', ch: 1 }
  ],
  exam: [
    { q: 'A student hangs weights on a spring and measures its length each time. Original length of the spring: 8.0 cm. Force 1 N → 10.0 cm; 2 N → 12.0 cm; 3 N → 14.0 cm; 4 N → 16.0 cm; 5 N → 19.5 cm.', tag: 'data', parts: [
      { q: 'Calculate the extension when the force is 3 N.', m: 1, ms: ['14.0 − 8.0 = 6.0 cm'] },
      { q: 'Describe the pattern shown by the results for 0–4 N.', m: 2, ms: ['extension increases by 2 cm for every 1 N / goes up in equal steps', 'extension is proportional to force'] },
      { q: 'Suggest why the result for 5 N does not follow the pattern.', m: 1, ms: ['the spring has gone past its limit of proportionality / been over-stretched'] },
      { q: 'Give one way the student could make sure the length readings are accurate.', m: 1, ms: ['read the ruler at eye level / use a pointer on the spring / keep the ruler vertical and close to the spring'] }
    ] },
    { q: 'Newton meters come with different ranges, such as 0–1 N, 0–10 N and 0–100 N.', tag: '', parts: [
      { q: 'Explain which meter you would choose to measure the weight of an apple (about 1.5 N).', m: 2, ms: ['0–10 N', '1 N meter would be overloaded / damaged; 100 N meter would barely move / poor resolution'] },
      { q: 'Explain why the meter should be zeroed before use.', m: 2, ms: ['so it reads 0 with nothing attached', 'otherwise every reading would be wrong by the same amount / zero error'] }
    ] }
  ],
  sims: ['newtonmeter', 'k_spring'], gens: ['nm1', 'nm2', 'ext1']
});

TOPICS.push({
  id: '2.3', unit: '2', title: 'Popping a party popper', short: 'Practical: repeat readings, means and anomalies',
  summary: 'How much force does it take to pop a party popper? A newton meter measures the pull at the moment it pops. Poppers are all a little different, so you need repeat readings, a mean, and to spot anomalies.',
  spec: [
    'I can plan how to measure the force needed to pop a party popper using a newton meter',
    'I can explain why repeat readings are needed and calculate a mean',
    'I can identify anomalous results and explain what to do with them',
    'I can describe the range of results and use it to comment on how reliable they are',
    '★ I can suggest improvements, such as using a force sensor and data logger'
  ],
  learn: [
    { h: 'The method', html: `
[[d:popper]]
<ol><li>Clamp the party popper <b>firmly</b> to a stand (or have a partner hold it) pointing <b>away from everyone</b>.</li><li>Hook a <b>newton meter</b> (0–10 N or 0–20 N) onto the string.</li><li>Pull the meter <b>slowly and steadily</b>, in line with the string, watching the pointer.</li><li>Note the <b>highest reading</b> just before it pops — that is the force needed.</li><li>Repeat with at least <b>five</b> poppers of the same type.</li></ol>
<div class="box warn"><b class="lbl">Safety</b><p>Wear <b>eye protection</b>, point poppers away from people, and do not hold your face near them — they are loud and fire streamers and card at speed. Check nobody in the room is sensitive to loud bangs.</p></div>` },
    { h: 'Why repeat? Mean, anomalies and range', html: `
<p>No two poppers are exactly the same, and it is hard to read a moving pointer at the instant of the bang. So one reading is not enough.</p>
<ul><li><b>Mean</b> = add up the readings ÷ how many there are. It is the best estimate of the true value.</li><li>An <b>anomalous result</b> (anomaly) does not fit the pattern — e.g. 15.0 N when the others are 5–6 N. Maybe the string snagged or the meter was pulled at an angle. <b>Leave anomalies out</b> of the mean (and repeat that test if you can).</li><li>The <b>range</b> is from the smallest to the largest value, e.g. 5.2 N to 6.1 N. A small range means the results are close together — they are <b>repeatable</b>.</li></ul>
<div class="box tip"><b class="lbl">Example</b><p>Readings: 5.6, 5.2, 6.0, 14.8, 5.7 N. The anomaly is 14.8 N. Mean = (5.6 + 5.2 + 6.0 + 5.7) ÷ 4 = 22.5 ÷ 4 = 5.6 N (to 1 decimal place). Range: 5.2–6.0 N.</p></div>` },
    { h: 'Errors and improvements', html: `
<ul><li><b>Hard to read at the moment of the pop</b> → film the meter on a phone and play back in slow motion; or use a meter with a <b>maximum-reading</b> marker; or use a <b>force sensor and data logger</b> that records the peak force automatically.</li><li><b>Pulling at an angle</b> gives a wrong reading → keep the meter in line with the string.</li><li><b>Pulling too fast</b> → pull slowly so the reading can keep up.</li><li>Use a meter with a <b>suitable range</b> and good resolution (e.g. 0.1 N divisions).</li></ul>
<p>You could extend the investigation: do different brands need different forces? Does the popper’s temperature matter?</p>` }
  ],
  eqs: [['"mean" = @frac{"sum of readings"}{"number of readings"}', 'leave out anomalies']],
  worked: [
    { q: 'Five poppers popped at 4.8 N, 5.1 N, 5.0 N, 4.9 N and 5.2 N. Find the mean and the range.', s: ['Sum = 4.8 + 5.1 + 5.0 + 4.9 + 5.2 = 25.0 N', 'Mean = 25.0 ÷ 5 = 5.0 N', 'Range: 4.8 N to 5.2 N'], a: 'mean 5.0 N; range 4.8–5.2 N' },
    { q: 'Readings: 6.2, 6.6, 2.1, 6.4 N. Which is anomalous? Calculate the mean without it.', s: ['2.1 N is far lower than the others — anomalous.', 'Mean = (6.2 + 6.6 + 6.4) ÷ 3 = 19.2 ÷ 3', '= 6.4 N'], a: '2.1 N; mean 6.4 N' }
  ],
  pitfalls: ['Including an anomalous result in the mean.', 'Giving a mean with too many decimal places — use the same as the readings.', 'Reading the meter after the pop, when it has sprung back.', 'Forgetting that the range is written as “lowest to highest”, with a unit.'],
  cards: [
    ['How do you calculate a mean?', 'Add the readings and divide by the number of readings.'],
    ['What is an anomalous result?', 'A result that does not fit the pattern of the others.'],
    ['What do you do with an anomaly?', 'Leave it out of the mean (and repeat the test if possible).'],
    ['What is the range of a set of results?', 'From the lowest to the highest value.'],
    ['Why take repeat readings?', 'To spot anomalies and calculate a more reliable mean.'],
    ['What reading gives the force to pop a popper?', 'The highest reading just before it pops.'],
    ['One safety precaution with party poppers?', 'Wear eye protection / point it away from people.'],
    ['★ How could you record the peak force more accurately?', 'Use a force sensor and data logger, or film the meter in slow motion.']
  ],
  quiz: [
    { q: 'Readings: 3.0, 3.4, 3.2 N. The mean is', o: ['3.2 N', '9.6 N', '3.4 N', '3.0 N'], x: '9.6 ÷ 3.' },
    { q: 'Readings: 7.1, 7.4, 12.9, 7.3 N. The anomaly is', o: ['12.9 N', '7.1 N', '7.4 N', '7.3 N'], x: 'It is far from the others.' },
    { q: 'What should you do with an anomalous result?', o: ['leave it out of the mean', 'double it', 'use it as the mean', 'always include it'], x: 'It would distort the mean.' },
    { q: 'Readings 5.4, 5.9, 5.6 N. The range is', o: ['5.4 N to 5.9 N', '0.5 N to 5.9 N', '5.6 N', '5.4 N to 5.6 N'], x: 'Lowest to highest.' },
    { q: 'Why is the force to pop a popper different each time?', o: ['each popper is slightly different', 'the newton meter changes', 'gravity changes', 'the unit changes'], x: 'Natural variation between poppers.' },
    { q: 'Which change would most improve the accuracy of the peak reading?', o: ['use a force sensor and data logger', 'pull faster', 'use a 100 N meter', 'take one reading only'], x: 'It records the peak automatically.' },
    { q: 'A small range of results means they are', o: ['close together (repeatable)', 'all wrong', 'anomalous', 'very large'], x: 'Consistent results.' },
    { q: 'Mean of 4.6, 4.9, 5.0, 4.7 N (to 1 d.p.)?', o: ['4.8 N', '19.2 N', '4.9 N', '5.0 N'], x: '19.2 ÷ 4 = 4.8.' }
  ],
  exam: [
    { q: 'A group measured the force needed to pop five party poppers. Their results were 5.5 N, 5.8 N, 5.3 N, 9.6 N and 5.4 N.', tag: 'data', parts: [
      { q: 'Identify the anomalous result.', m: 1, ms: ['9.6 N'] },
      { q: 'Suggest one reason for the anomalous result.', m: 1, ms: ['meter pulled at an angle / string snagged / read after it sprang back / different popper type / misread the scale'] },
      { q: 'Calculate the mean force, leaving out the anomaly.', m: 2, ms: ['(5.5 + 5.8 + 5.3 + 5.4) ÷ 4 = 22.0 ÷ 4', '= 5.5 N'] },
      { q: 'State the range of the results used.', m: 1, ms: ['5.3 N to 5.8 N'] }
    ] },
    { q: 'Describe how to measure the force needed to pop a party popper. Include how to make your result reliable and how to stay safe.', tag: 'ext', m: 6, ms: ['clamp/hold the popper firmly, pointing away from people', 'attach a newton meter (suitable range, zeroed) to the string', 'pull slowly and steadily in line with the string', 'record the maximum reading just before it pops', 'repeat with several poppers (at least 3–5), ignore anomalies, calculate a mean', 'safety: eye protection / keep face away / point away from others'] }
  ],
  sims: ['popper'], gens: ['mean1', 'mean2']
});
