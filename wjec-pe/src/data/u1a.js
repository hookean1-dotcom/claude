/* ==========================================================
   UNIT 1 · EXPLORING PHYSICAL EDUCATION (AS) — part 1
   Area of study 1: Exercise physiology, performance analysis and training
   ========================================================== */
TOPICS.push({
  id: '1.1', unit: '1', area: 'phys', ref: 'Performance analysis in sport', title: 'Performance analysis and fitness testing', short: 'Coaching process, video, notation, GPS, lab and field tests',
  summary: 'Why coaches cannot rely on what they see in real time, and the tools they use instead: qualitative and quantitative analysis, video (split-screen, slow motion, frame by frame), notational and time-motion analysis, GPS, and laboratory and field fitness tests judged by validity, reliability and relevance.',
  spec: [
    'The coaching process and its limitations: the need for performance analysis technology',
    'Why coaches observe and analyse performance; limitations of real-time observation',
    'Qualitative and quantitative approaches; choosing the correct method and analysing data',
    'Analysing physical, technical, tactical and behavioural aspects of performance',
    'Video analysis (split-screen, slow motion, frame analysis): advantages, disadvantages and uses',
    'Notational analysis: advantages, disadvantages and uses; simple data collection and computerised systems',
    'Time-motion analysis and GPS tracking systems',
    'Laboratory and field-based fitness testing: advantages and disadvantages; VO₂max and lactate threshold tests',
    'Interpreting test results: normative tables and previous results; relevance, validity and reliability',
    'Sport-specific (maximal) tests compared with tests for sedentary people'
  ],
  learn: [
    { h: 'The coaching process and why real-time observation fails', html: `
[[d:coachcycle]]
<p>Coaching is a cycle: <b>plan → deliver → observe → analyse → give feedback → plan again</b>. Every step after “deliver” depends on what the coach actually saw. Research on coaches’ recall (Franks and Miller) found that even experienced coaches remember well under half of the key events in a half of play, so decisions based only on real-time observation are unreliable.</p>
<div class="tbl"><table><tr><th>Limitation of real-time observation</th><th>Why it matters</th></tr>
<tr><td>Limited memory and selective attention</td><td>Coaches remember the dramatic moments (a goal, a mistake) and forget the build-up.</td></tr>
<tr><td>Bias and emotion</td><td>Expectations and the score colour what the coach “sees”; favourites are judged more kindly.</td></tr>
<tr><td>Speed and viewing position</td><td>Fast actions (a golf swing, a sprint start) cannot be broken down by eye; one position on the touchline hides half the pitch.</td></tr>
<tr><td>No record</td><td>Nothing can be replayed, measured, compared or shown to the athlete.</td></tr></table></div>
<p>Performance analysis technology solves these problems by <b>recording objective data</b> that can be replayed, measured and compared.</p>` },
    { h: 'Qualitative and quantitative analysis; what is being analysed', html: `
<div class="grid g2"><div class="box"><b class="lbl">Qualitative</b><p>Describes the <b>quality</b> of a performance by observation and judgement — e.g. “her follow-through is short and her elbow drops”. Quick, cheap and good for technique, but subjective.</p></div>
<div class="box"><b class="lbl">Quantitative</b><p>Measures performance with <b>numbers</b> — pass completion 78%, distance covered 10.6 km, sprint time 4.21 s. Objective and comparable, but numbers alone may not explain <i>why</i>.</p></div></div>
<p>Good analysis usually combines both. Coaches analyse four aspects:</p>
<div class="tbl"><table><tr><th>Aspect</th><th>Question</th><th>Typical method</th></tr>
<tr><td><b>Physical</b></td><td>Is the athlete fit enough for the demands?</td><td>fitness tests, GPS, heart-rate monitors, time-motion analysis</td></tr>
<tr><td><b>Technical</b></td><td>Is the skill performed correctly?</td><td>video (slow motion, frame by frame, split-screen)</td></tr>
<tr><td><b>Tactical</b></td><td>Are the right decisions being made?</td><td>notational analysis, match video, heat maps</td></tr>
<tr><td><b>Behavioural</b></td><td>Is attitude, discipline and effort right?</td><td>notation of fouls/cards, observation, questionnaires</td></tr></table></div>` },
    { h: 'Video analysis', html: `
<ul><li><b>Slow motion</b> — shows the phases of a fast skill (e.g. the release of a javelin).</li>
<li><b>Frame-by-frame analysis</b> — pauses on individual frames so joint angles and positions can be measured.</li>
<li><b>Split-screen</b> — puts two clips side by side: the athlete and an elite model, or the athlete before and after training.</li></ul>
<div class="grid g2"><div class="box good"><b class="lbl">Advantages</b><ul><li>Actions can be replayed as often as needed</li><li>Visual feedback helps learners in the cognitive stage</li><li>Precise and permanent: progress can be tracked</li><li>Can be tagged and shared (apps, tablets)</li></ul></div>
<div class="box warn"><b class="lbl">Disadvantages</b><ul><li>Cost of equipment and software</li><li>Time to film, edit and analyse; expertise needed</li><li>One camera gives a 2-D view from one angle</li><li>Too much information can overload a beginner</li></ul></div></div>` },
    { h: 'Notational, time-motion and GPS analysis', html: `
<p><b>Notational analysis</b> records events (passes, tackles, shots, errors) as they happen, with a tally sheet (simple data collection) or computer software that links each event to video (computerised systems). It turns a game into data that shows <b>patterns</b> — where possession is lost, which player makes most tackles.</p>
<div class="grid g2"><div class="box good"><b class="lbl">Advantages</b><ul><li>Objective, quantitative data</li><li>Shows tactical patterns and trends over many matches</li><li>A hand tally is cheap and simple</li></ul></div>
<div class="box warn"><b class="lbl">Disadvantages</b><ul><li>Observer error: events missed or miscoded (reliability)</li><li>Counts events but not quality or context</li><li>Computer systems are expensive; live coding is demanding</li></ul></div></div>
<p><b>Time-motion analysis</b> records how long and how far a player spends walking, jogging, running and sprinting. <b>GPS tracking</b> (a pod in a vest) does this automatically: total distance, speed zones, number of sprints, accelerations and decelerations, often with heart rate. It is used to plan training loads and spot fatigue or injury risk. Limitations: cost, poor signal indoors, and less accuracy for very short, sharp movements.</p>` },
    { h: 'Laboratory and field fitness tests', html: `
<div class="tbl"><table><tr><th></th><th>Laboratory tests</th><th>Field tests</th></tr>
<tr><td>Examples</td><td><b>VO₂max test</b>: incremental treadmill or cycle test to exhaustion with gas analysis of expired air. <b>Lactate threshold test</b>: blood samples at each stage to find where lactate rises sharply (OBLA ≈ 4 mmol/L).</td><td>Multi-stage fitness test, Cooper 12-minute run, sit and reach, 30 m sprint, vertical jump, handgrip dynamometer, Illinois agility run</td></tr>
<tr><td>Advantages</td><td>controlled conditions; accurate, valid and reliable; direct measurement</td><td>cheap, quick, many people at once; can be sport-specific and done in the athlete’s own environment</td></tr>
<tr><td>Disadvantages</td><td>expensive; specialist staff and equipment; one person at a time; unfamiliar environment may not reflect the sport</td><td>less accurate (predicts rather than measures); weather, surface and motivation reduce reliability</td></tr></table></div>
<div class="box why"><b class="lbl">Three key concepts</b><ul><li><b>Validity</b> — does the test measure what it claims to? (A sit-up test does not measure leg power.)</li>
<li><b>Reliability</b> — would it give the same result if repeated under the same conditions? Standardise warm-up, equipment, surface, time of day and tester.</li>
<li><b>Relevance</b> — is the component tested important for this sport and this athlete?</li></ul></div>
<p><b>Interpreting results:</b> compare with <b>normative tables</b> (average results for the same age and sex) and with the athlete’s <b>previous results</b> to show progress. Elite athletes need <b>sport-specific, maximal</b> tests (a rower on an ergometer, a footballer on the Yo-Yo intermittent recovery test); sedentary people are tested with <b>submaximal</b> tests (e.g. a step test) because maximal tests carry more risk and need high motivation.</p>` }
  ],
  eqs: [['"% change" = (("new" − "old")/"old") × 100', 'percentage improvement in a test'], ['"mean" = "sum of results"/"number of results"', 'average of repeated trials']],
  worked: [
    { q: 'A hockey coach wants to know why her team keeps losing possession in their own half. Justify the method of analysis she should use. (4 marks)', s: ['This is a <b>tactical</b> question about patterns, so she needs quantitative data over the whole match.', 'Use <b>notational analysis</b>: code every loss of possession with its location on a pitch grid and the player involved.', 'Link the codes to <b>video</b> so each loss can be replayed to see the technical or decision-making cause.', 'Repeat over several matches so that the pattern is reliable, not a one-off.'], a: 'Notational analysis linked to match video, repeated over several games.' },
    { q: 'A footballer’s multi-stage fitness test result improved from level 10.2 to level 11.6. Explain two ways the coach can judge whether this improvement is meaningful. (4 marks)', s: ['Compare with a <b>normative table</b> for his age and sex to see whether he has moved into a higher rating (e.g. from “above average” to “excellent”).', 'Compare with his <b>previous results</b> and the team’s mean: a consistent upward trend across several tests is more convincing than one result.', 'Check <b>reliability</b>: were the conditions standardised (same surface, warm-up, time of day, motivation)? If not, the change may be error.', 'Consider <b>validity/relevance</b>: the test is a valid predictor of aerobic capacity, which is relevant to football, but it is not intermittent like a match.'], a: 'Use norms and previous results, and check the test was reliable and relevant.' }
  ],
  pitfalls: ['Confusing validity (measures the right thing) with reliability (gives consistent results).', 'Saying video analysis is “better” without saying for what — it suits technique, while notation suits tactics.', 'Listing advantages of technology without linking them to the limitation of real-time observation they overcome.', 'Describing the multi-stage fitness test as a laboratory test — it is a field test that <i>predicts</i> VO₂max.', 'Forgetting that sedentary people should be given submaximal tests.'],
  cards: [
    ['Stages of the coaching process?', 'Plan, deliver, observe, analyse, give feedback, then plan again.'],
    ['Why is real-time observation unreliable?', 'Limited memory, selective attention, bias/emotion, speed of actions, poor viewing position, no record.'],
    ['Qualitative analysis?', 'Describing the quality of performance by observation and judgement — subjective.'],
    ['Quantitative analysis?', 'Measuring performance with numbers (times, distances, percentages) — objective.'],
    ['Four aspects of performance a coach analyses?', 'Physical, technical, tactical and behavioural.'],
    ['Three forms of video analysis?', 'Split-screen, slow motion and frame-by-frame analysis.'],
    ['What is notational analysis?', 'Recording events in a performance (by hand or computer) to build a statistical picture and show patterns.'],
    ['What does GPS tracking measure?', 'Distance covered, speed zones, sprints, accelerations/decelerations (often with heart rate).'],
    ['Two laboratory tests named in the specification?', 'VO₂max test (gas analysis) and lactate threshold test (blood samples).'],
    ['Validity?', 'The extent to which a test measures what it claims to measure.'],
    ['Reliability?', 'The extent to which a test gives consistent results when repeated in the same conditions.'],
    ['Two ways to interpret a test result?', 'Compare with normative tables and with the athlete’s previous results.'],
    ['Why do elite athletes need sport-specific maximal tests?', 'General tests are not sensitive or relevant enough; maximal sport-specific tests mimic the real demands.']
  ],
  quiz: [
    { q: 'A coach watching live remembers the goal but not the three passes before it. This shows…', o: ['selective attention and limited memory', 'reliability of observation', 'quantitative analysis', 'validity of observation'], x: 'Real-time observation is limited by memory and attention.' },
    { q: 'Which is quantitative analysis?', o: ['A tennis player lands 64% of first serves', 'The coach says the serve looks rushed', 'The player feels tired in the third set', 'A commentator praises the backhand'], x: 'Quantitative = numbers.' },
    { q: 'Which form of video analysis is best to compare a learner with an elite model?', o: ['Split-screen', 'Frame counting', 'Heat map', 'GPS overlay'], x: 'Two clips side by side.' },
    { q: 'A disadvantage of notational analysis is that it…', o: ['records how often events happen but not their quality or context', 'cannot be done by hand', 'gives only qualitative data', 'needs a laboratory'], x: 'A pass counted as “completed” may still have been poor.' },
    { q: 'GPS is least accurate for…', o: ['very short, sharp changes of direction and indoor sport', 'total distance in a rugby match', 'top speed in a football match', 'distance in a road race'], x: 'Satellite signals are weak indoors, and sampling limits short movements.' },
    { q: 'Which is a laboratory test?', o: ['Lactate threshold test with blood sampling on a treadmill', 'Multi-stage fitness test', 'Cooper 12-minute run', 'Sit and reach'], x: 'Controlled conditions and direct measurement.' },
    { q: 'A test that gives consistent results when repeated is…', o: ['reliable', 'valid', 'relevant', 'maximal'], x: 'Reliability = consistency.' },
    { q: 'Using a sit-up test to measure a sprinter’s leg power has poor…', o: ['validity', 'reliability', 'objectivity', 'normative data'], x: 'It does not measure what it claims.' },
    { q: 'Why are sedentary people usually given submaximal tests?', o: ['Maximal tests carry greater health risk and need high motivation', 'Submaximal tests are more valid', 'Maximal tests need no equipment', 'Norms only exist for submaximal tests'], x: 'Safety and practicality.' },
    { q: 'An advantage of field tests over laboratory tests is that they…', o: ['can test many athletes cheaply in a sport-specific setting', 'are always more reliable', 'measure VO₂max directly', 'control the environment precisely'], x: 'Cheap, quick and specific, but less precise.' },
    { q: 'Normative tables allow a coach to…', o: ['compare an athlete’s score with typical scores for the same age and sex', 'predict match results', 'measure reliability', 'avoid standardising the test'], x: 'Norms give a rating.' }
  ],
  exam: [
    { q: 'State two limitations of a coach relying only on real-time observation. [2]', m: 2, ms: ['limited memory / cannot recall all events', 'selective attention / focus on dramatic events', 'bias / emotion / expectations', 'actions too fast to see detail', 'poor viewing position', 'no permanent record to replay or compare'] },
    { q: 'Explain the difference between the validity and the reliability of a fitness test. [2]', m: 2, ms: ['validity: whether the test measures what it claims to measure', 'reliability: whether the test gives consistent results when repeated in the same conditions'] },
    { q: 'A netball coach analyses her centre’s performance.', parts: [
      { q: 'Suggest one quantitative method she could use to analyse the player’s physical performance. [1]', m: 1, ms: ['GPS / time-motion analysis / heart-rate monitoring / a fitness test (e.g. Yo-Yo, MSFT)'] },
      { q: 'Explain two advantages of using video analysis to improve the player’s technique. [4]', m: 4, ms: ['can replay / slow motion / frame by frame', 'so fine detail of the technique (e.g. landing footwork) is seen', 'split-screen comparison with an elite model / previous performance', 'gives visual feedback the player can understand / helps a cognitive learner / tracks progress'] },
      { q: 'Evaluate the use of laboratory-based testing compared with field-based testing for elite performers. [6]', m: 6, lv: true, ms: ['lab tests (e.g. VO₂max, lactate threshold) measure directly — accurate / valid', 'controlled conditions → high reliability, useful for tracking small changes in elite athletes', 'but expensive, specialist staff, one athlete at a time', 'unfamiliar environment / ergometer may not be sport-specific (e.g. a netballer on a treadmill)', 'field tests cheap, whole squad, sport-specific (e.g. Yo-Yo test)', 'but predict rather than measure; weather, surface and motivation reduce reliability', 'judgement: elite performers benefit most from sport-specific maximal lab tests backed by regular field tests'] }
    ], tag: 'ext' },
    { q: 'Discuss the use of notational analysis and GPS technology by a professional rugby coach. [8]', m: 8, lv: true, ms: ['notational analysis records events: tackles made/missed, turnovers, line-outs won', 'shows tactical patterns / weaknesses in defence; objective quantitative data', 'computerised systems link each event to video for replay and feedback', 'limitation: counts events but not quality / context; observer error affects reliability', 'GPS measures distance, sprints, speed zones, accelerations, collisions (with accelerometers)', 'used to plan training load, manage fatigue and reduce injury risk / return to play', 'limitations: cost, data overload, accuracy in short sharp movements, needs expertise to interpret', 'judgement: together they cover tactical and physical aspects but still need the coach’s qualitative judgement'], tag: 'ext' }
  ],
  sims: ['notation', 'normtest'], gens: ['pctchange', 'mean1']
});

TOPICS.push({
  id: '1.2', unit: '1', area: 'phys', ref: 'Levers', title: 'Levers', short: 'Fulcrum, effort, load; 1st, 2nd and 3rd order; mechanical advantage',
  summary: 'Bones act as levers, joints as fulcrums and muscles supply the effort. Learn the three orders of lever, where they occur in the body, and why third-order levers give speed and range of movement while second-order levers give force.',
  spec: [
    'Components of a lever system: pivot/fulcrum, effort and load/resistance',
    '1st, 2nd and 3rd order levers',
    'Mechanical advantages and disadvantages of different types of lever',
    'Sporting examples: shoulder and elbow actions (e.g. press-ups); hip, knee and ankle actions (e.g. running and kicking)'
  ],
  learn: [
    { h: 'The parts of a lever system', html: `
<p>A lever is a rigid bar that turns about a fixed point. In the body:</p>
<ul><li><b>Fulcrum (pivot)</b> — the joint.</li><li><b>Effort</b> — the force applied by the muscle, acting where its tendon inserts on the bone.</li><li><b>Load (resistance)</b> — the weight of the body part plus anything it moves (a ball, a dumbbell, the whole body).</li></ul>
<p>The <b>effort arm</b> is the distance from the fulcrum to the effort; the <b>load (resistance) arm</b> is the distance from the fulcrum to the load.</p>
[[d:levers]]
<div class="box tip"><b class="lbl">Memory aid: “FLE, 1-2-3”</b><p>Say which component is <b>in the middle</b>: <b>F</b>ulcrum in the middle = 1st order; <b>L</b>oad in the middle = 2nd order; <b>E</b>ffort in the middle = 3rd order.</p></div>` },
    { h: 'The three orders in the body', html: `
<div class="tbl"><table><tr><th>Order</th><th>Middle</th><th>Body example</th><th>Sporting action</th></tr>
<tr><td><b>1st</b></td><td>Fulcrum</td><td>Neck: atlanto-occipital joint (fulcrum), neck extensors (effort), weight of head (load). Elbow <i>extension</i>: triceps pulls on the olecranon behind the joint.</td><td>Heading a football (neck); the extension phase of a press-up or overhead throw (elbow)</td></tr>
<tr><td><b>2nd</b></td><td>Load</td><td>Ankle plantar flexion: ball of the foot (fulcrum), body weight through the ankle (load), gastrocnemius via Achilles tendon on the heel (effort).</td><td>Take-off in the high jump; rising onto the toes when sprinting</td></tr>
<tr><td><b>3rd</b></td><td>Effort</td><td>Most joints: elbow <i>flexion</i> (biceps), knee extension (quadriceps via patellar tendon), hip flexion and extension, shoulder abduction.</td><td>Bicep curl; kicking a ball; the leg action in running</td></tr></table></div>` },
    { h: 'Mechanical advantage and disadvantage', html: `
<p>$"mechanical advantage" = "effort arm"/"load arm"$</p>
<ul><li><b>2nd-order levers</b>: effort arm is always longer than load arm → <b>mechanical advantage</b> (MA &gt; 1). A small muscle force moves a large load — ideal for lifting the whole body onto the toes. The trade-off is a small range and slower movement.</li>
<li><b>3rd-order levers</b>: effort arm is always shorter than load arm → <b>mechanical disadvantage</b> (MA &lt; 1). A large muscle force is needed, but the end of the lever (hand, foot) moves through a <b>large range of movement at high speed</b> — ideal for throwing, kicking and striking.</li>
<li><b>1st-order levers</b>: can give either, depending on where the fulcrum is. Mostly used for <b>balance</b> (the head on the neck).</li></ul>
<div class="box why"><b class="lbl">Why the body is built this way</b><p>Muscles are strong, so the body “spends” force to gain speed and range. Holding a racket, bat or club lengthens the load arm even more, so the tip moves even faster.</p></div>` },
    { h: 'Analysing levers in an exam answer', html: `
<ol><li>Identify the joint and the movement (e.g. knee extension).</li><li>Name the fulcrum (knee joint), effort (quadriceps via patellar tendon on the tibia) and load (weight of lower leg + ball).</li><li>Say which is in the middle, so name the order (effort in the middle → 3rd order).</li><li>State the mechanical advantage or disadvantage and link it to the <b>sporting outcome</b> (large range and speed of the foot → a powerful kick).</li></ol>` }
  ],
  eqs: [['"MA" = "effort arm"/"load arm"', 'mechanical advantage (> 1 advantage, < 1 disadvantage)']],
  worked: [
    { q: 'Identify the order of lever at the ankle during the take-off of a long jump and explain one advantage of this lever. (3 marks)', s: ['Fulcrum = ball of the foot / metatarsophalangeal joints; effort = gastrocnemius (and soleus) via the Achilles tendon on the calcaneus; load = body weight acting through the ankle joint.', 'The load is between the fulcrum and effort → <b>second-order lever</b>.', 'The effort arm is longer than the load arm, giving a <b>mechanical advantage</b>: large loads (the whole body) can be moved with relatively little muscle force, giving a powerful take-off.'], a: '2nd order; mechanical advantage to move the body weight.' },
    { q: 'In a biceps curl the effort arm is 4 cm and the load arm is 32 cm. Calculate the mechanical advantage and comment. (2 marks)', s: ['$"MA" = 4/32 = 0.125$.', 'MA &lt; 1: a <b>mechanical disadvantage</b> — the biceps must produce eight times the load force, but the hand moves through a large range at high speed.'], a: '0.125 — mechanical disadvantage (3rd-order lever).' }
  ],
  pitfalls: ['Naming the order from what is at the end rather than what is in the middle.', 'Saying 3rd-order levers are “weak” — they trade force for speed and range of movement.', 'Placing the effort where the muscle belly is — it acts where the tendon inserts.', 'Forgetting that elbow extension (triceps) is 1st order, while elbow flexion (biceps) is 3rd order.', 'Stating the lever order without linking it to the sporting advantage asked for.'],
  cards: [
    ['Three components of a lever?', 'Fulcrum (pivot), effort, load (resistance).'],
    ['What is in the middle of a 1st-order lever?', 'The fulcrum.'],
    ['What is in the middle of a 2nd-order lever?', 'The load.'],
    ['What is in the middle of a 3rd-order lever?', 'The effort.'],
    ['Example of a 2nd-order lever in the body?', 'The ankle during plantar flexion (take-off, rising on the toes).'],
    ['Two examples of a 1st-order lever?', 'The neck (nodding / heading a ball) and the elbow during extension (triceps).'],
    ['Example of a 3rd-order lever?', 'Elbow flexion (biceps curl); knee extension when kicking; hip in running.'],
    ['Mechanical advantage formula?', 'Effort arm ÷ load arm.'],
    ['Advantage of a 2nd-order lever?', 'Mechanical advantage: large loads moved with small effort.'],
    ['Advantage of a 3rd-order lever?', 'Large range of movement and high speed at the end of the lever.'],
    ['Disadvantage of a 3rd-order lever?', 'Mechanical disadvantage: needs a large effort for a small load.']
  ],
  quiz: [
    { q: 'In a 2nd-order lever, which component is in the middle?', o: ['Load', 'Effort', 'Fulcrum', 'None'], x: 'FLE 1-2-3: Load is in the middle for 2nd order.' },
    { q: 'Which order of lever operates at the elbow during a biceps curl?', o: ['Third', 'First', 'Second', 'It changes each rep'], x: 'Effort (biceps insertion) lies between the elbow and the weight.' },
    { q: 'Which order of lever operates at the elbow during the upward phase of a press-up?', o: ['First', 'Second', 'Third', 'None'], x: 'Triceps pulls on the olecranon, behind the joint: fulcrum in the middle.' },
    { q: 'The ankle when a sprinter rises onto the toes is a…', o: ['2nd-order lever', '1st-order lever', '3rd-order lever', 'pulley'], x: 'The load (body weight) is between the fulcrum (ball of foot) and effort.' },
    { q: 'A 3rd-order lever always has a…', o: ['mechanical disadvantage', 'mechanical advantage', 'mechanical advantage equal to 1', 'fulcrum in the middle'], x: 'Effort arm is shorter than load arm.' },
    { q: 'Effort arm 5 cm, load arm 30 cm. The mechanical advantage is…', o: ['0.17', '6', '25', '1.5'], x: '5 ÷ 30 = 0.17.' },
    { q: 'Why is a 3rd-order lever useful when kicking a ball?', o: ['The foot moves through a large range at high speed', 'Little muscle force is needed', 'It increases stability', 'It reduces the load arm'], x: 'Speed and range at the expense of force.' },
    { q: 'In the body, the effort acts…', o: ['where the muscle’s tendon inserts on the bone', 'at the centre of the muscle belly', 'at the joint', 'at the centre of mass'], x: 'The insertion is where the pull is applied.' },
    { q: 'Using a longer racket increases…', o: ['the load arm, so the racket head moves faster', 'the effort arm', 'the mechanical advantage', 'the force needed from the fulcrum'], x: 'Greater radius → greater speed at the tip, but more effort needed.' }
  ],
  exam: [
    { q: 'Name the three components of a lever system. [3]', m: 3, ms: ['fulcrum / pivot', 'effort', 'load / resistance'] },
    { q: 'A footballer kicks a ball.', parts: [
      { q: 'Identify the order of lever at the knee as the leg extends to kick the ball. [1]', m: 1, ms: ['third-order lever'] },
      { q: 'Label the fulcrum, effort and load for this lever. [3]', m: 3, ms: ['fulcrum: knee joint', 'effort: quadriceps (via patellar tendon inserting on the tibia)', 'load: weight of the lower leg (and foot/ball)'] },
      { q: 'Explain one mechanical advantage and one mechanical disadvantage of this type of lever for the footballer. [4]', m: 4, ms: ['advantage: large range of movement', 'high speed of the foot → greater force/velocity given to the ball', 'disadvantage: effort arm shorter than load arm (MA < 1)', 'a large muscular effort is needed / cannot move heavy loads'] }
    ] },
    { q: 'Compare the use of second- and third-order levers in the body during sprinting. [4]', m: 4, ms: ['ankle plantar flexion at push-off is a 2nd-order lever', '2nd order gives mechanical advantage — whole body weight moved with less effort', 'knee/hip extension and flexion in the leg drive are 3rd-order levers', '3rd order gives speed and range of movement of the limbs (long stride / fast leg speed)'] }
  ],
  sims: ['lever'], gens: ['lever1']
});

TOPICS.push({
  id: '1.3', unit: '1', area: 'phys', ref: 'Analysis of movement in physical activities', title: 'Planes, axes and movement patterns', short: 'Sagittal, frontal and transverse planes; three axes; joint actions',
  summary: 'Every movement happens in a plane and turns about an axis at right angles to it. Learn the three planes and three axes, the joint actions in each — flexion and extension, abduction and adduction, rotation and more — and how to analyse a sporting action.',
  spec: [
    'Planes of the body: frontal, sagittal and horizontal/transverse',
    'Axes of rotation: longitudinal, horizontal/transverse and frontal/anterior-posterior',
    'Movement patterns: flexion/extension, abduction/adduction, circumduction, pronation/supination, rotation, plantar flexion/dorsi flexion, lateral flexion, horizontal adduction and abduction',
    'Different movement patterns that occur along planes of the body (e.g. flexion/extension in the sagittal plane)',
    'Identify movement patterns in sporting actions'
  ],
  learn: [
    { h: 'Three planes, three axes', html: `
[[d:planes]]
<div class="tbl"><table><tr><th>Plane</th><th>Divides the body into</th><th>Axis it turns about</th><th>Axis direction</th><th>Whole-body example</th></tr>
<tr><td><b>Sagittal</b></td><td>left and right</td><td><b>Horizontal / transverse</b> (frontal) axis</td><td>side to side</td><td>front somersault</td></tr>
<tr><td><b>Frontal</b></td><td>front and back</td><td><b>Frontal / anterior–posterior</b> axis</td><td>front to back</td><td>cartwheel</td></tr>
<tr><td><b>Horizontal / transverse</b></td><td>top and bottom</td><td><b>Longitudinal</b> axis</td><td>head to toe</td><td>full twist, discus turn, pirouette</td></tr></table></div>
<div class="box warn"><b class="lbl">The word “transverse”</b><p>WJEC uses “horizontal/transverse” for both a <i>plane</i> (dividing top from bottom) and an <i>axis</i> (running side to side). Always say which you mean: e.g. “sagittal plane about the transverse axis”.</p></div>
<p>A plane and its axis are always <b>at right angles</b>: the movement happens <i>in</i> the plane and turns <i>about</i> the axis.</p>` },
    { h: 'Movements in the sagittal plane', html: `
<ul><li><b>Flexion</b> — decreasing the angle at a joint (bending the knee, bringing the arm forwards and up at the shoulder).</li>
<li><b>Extension</b> — increasing the angle (straightening the knee; hyperextension goes beyond straight, e.g. arching the back).</li>
<li><b>Plantar flexion</b> — pointing the toes (increasing the angle at the ankle): take-off, pointed toes in gymnastics.</li>
<li><b>Dorsiflexion</b> — pulling the toes up towards the shin: the recovery phase of running, landing.</li></ul>
<p>Sporting examples: running, squat, bicep curl, somersault, chest pass, sit-up.</p>` },
    { h: 'Movements in the frontal plane', html: `
<ul><li><b>Abduction</b> — moving a limb <b>away</b> from the midline (arms out sideways in a star jump).</li>
<li><b>Adduction</b> — moving a limb <b>towards</b> the midline (bringing the arms back down).</li>
<li><b>Lateral flexion</b> — bending the trunk sideways (a side bend, a netballer leaning to reach a pass).</li></ul>
<p>Sporting examples: star jump, cartwheel, side-step, breaststroke leg kick (hip abduction/adduction).</p>` },
    { h: 'Movements in the transverse plane — and circumduction', html: `
<ul><li><b>Rotation</b> — turning a bone about its long axis (medial rotation towards the midline, lateral rotation away): the shoulder in a tennis serve, the spine in a golf swing.</li>
<li><b>Horizontal abduction</b> — arm held horizontal, moved backwards away from the midline (the backswing of a discus throw).</li>
<li><b>Horizontal adduction</b> — arm held horizontal, moved forwards across the body (the throw in discus, a chest fly).</li>
<li><b>Pronation</b> — turning the palm down (topspin forehand); <b>supination</b> — turning the palm up (carrying a tray). These happen at the radio-ulnar joint.</li></ul>
<p><b>Circumduction</b> is a cone-shaped movement that combines flexion, abduction, extension and adduction — e.g. arm circles in bowling or butterfly. It only happens at ball-and-socket joints (and to a smaller extent the wrist), and it does not belong to a single plane.</p>` },
    { h: 'Analysing an action', html: `
<p>Use a table: <b>joint · joint type · movement · plane · axis · agonist</b>.</p>
<div class="tbl"><table><tr><th>Phase of a squat (downward)</th><th>Joint type</th><th>Movement</th><th>Plane / axis</th></tr>
<tr><td>Hip</td><td>ball and socket</td><td>flexion</td><td>sagittal / transverse</td></tr>
<tr><td>Knee</td><td>hinge</td><td>flexion</td><td>sagittal / transverse</td></tr>
<tr><td>Ankle</td><td>hinge</td><td>dorsiflexion</td><td>sagittal / transverse</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Identify the plane and axis of a gymnast’s cartwheel, and name the movement at the hip. (3 marks)', s: ['A cartwheel rotates the body sideways, dividing it front from back → <b>frontal plane</b>.', 'It turns about an axis running from front to back → <b>frontal / anterior–posterior axis</b>.', 'The legs move away from the midline → hip <b>abduction</b> (then adduction to close).'], a: 'Frontal plane, frontal (anterior–posterior) axis, hip abduction.' },
    { q: 'Analyse the shoulder action as a discus thrower swings the arm forwards to release. (3 marks)', s: ['The arm is held horizontally and moves forwards across the body → <b>horizontal adduction</b>.', 'This happens in the <b>transverse (horizontal) plane</b> about the <b>longitudinal axis</b>.', 'Joint: shoulder, a <b>ball-and-socket</b> joint; agonist: <b>pectoralis major</b>.'], a: 'Horizontal adduction; transverse plane; longitudinal axis.' }
  ],
  pitfalls: ['Pairing the wrong axis with a plane — the sagittal plane uses the transverse (side-to-side) axis.', 'Calling pointing the toes “extension” in the exam — use plantar flexion.', 'Mixing up abduction (away) and adduction (towards — “add” to the body).', 'Saying circumduction is rotation — it is a combination of four movements forming a cone.', 'Giving a plane for a whole action that includes several; analyse one joint and one phase at a time.'],
  cards: [
    ['Sagittal plane divides the body into…', 'Left and right halves.'],
    ['Frontal plane divides the body into…', 'Front and back (anterior and posterior).'],
    ['Transverse (horizontal) plane divides the body into…', 'Upper and lower halves.'],
    ['Axis for the sagittal plane?', 'Horizontal/transverse (side-to-side) axis.'],
    ['Axis for the frontal plane?', 'Frontal/anterior–posterior (front-to-back) axis.'],
    ['Axis for the transverse plane?', 'Longitudinal (head-to-toe) axis.'],
    ['Plane of flexion and extension?', 'Sagittal.'],
    ['Plane of abduction, adduction and lateral flexion?', 'Frontal.'],
    ['Plane of rotation and horizontal abduction/adduction?', 'Transverse (horizontal).'],
    ['Plantar flexion?', 'Pointing the toes — increasing the angle at the ankle.'],
    ['Dorsiflexion?', 'Pulling the toes up towards the shin.'],
    ['Pronation and supination?', 'Turning the palm down (pronation) or up (supination) at the radio-ulnar joint.'],
    ['Circumduction?', 'A cone-shaped movement combining flexion, abduction, extension and adduction.'],
    ['Plane and axis of a somersault?', 'Sagittal plane, transverse axis.'],
    ['Plane and axis of a full twist?', 'Transverse plane, longitudinal axis.']
  ],
  quiz: [
    { q: 'A front somersault occurs in the…', o: ['sagittal plane about the transverse axis', 'frontal plane about the frontal axis', 'transverse plane about the longitudinal axis', 'sagittal plane about the longitudinal axis'], x: 'Forward rotation divides left from right.' },
    { q: 'A cartwheel occurs about the…', o: ['frontal (anterior–posterior) axis', 'transverse axis', 'longitudinal axis', 'sagittal axis only'], x: 'The axis runs front to back through the body.' },
    { q: 'A pirouette in dance rotates about the…', o: ['longitudinal axis', 'transverse axis', 'frontal axis', 'sagittal plane'], x: 'Head-to-toe axis; transverse plane.' },
    { q: 'Raising the arms sideways in a star jump is…', o: ['abduction at the shoulder', 'adduction at the shoulder', 'flexion at the shoulder', 'rotation at the shoulder'], x: 'Moving away from the midline.' },
    { q: 'The movement at the ankle as a sprinter drives off the blocks is…', o: ['plantar flexion', 'dorsiflexion', 'inversion', 'extension'], x: 'Pointing the foot pushes the body forward.' },
    { q: 'Turning the palm to face down in a topspin forehand is…', o: ['pronation', 'supination', 'circumduction', 'abduction'], x: 'Palm down = pronation.' },
    { q: 'Circumduction can occur at the…', o: ['shoulder', 'knee', 'elbow', 'ankle'], x: 'Ball-and-socket joints allow the cone movement.' },
    { q: 'The upward phase of a sit-up is spinal…', o: ['flexion in the sagittal plane', 'extension in the sagittal plane', 'lateral flexion in the frontal plane', 'rotation in the transverse plane'], x: 'The angle of the trunk decreases.' },
    { q: 'A golfer’s trunk turning in the backswing is…', o: ['rotation in the transverse plane', 'flexion in the sagittal plane', 'lateral flexion', 'abduction'], x: 'Rotation about the longitudinal axis.' },
    { q: 'Leaning sideways to reach a pass is…', o: ['lateral flexion', 'hyperextension', 'horizontal abduction', 'pronation'], x: 'Side-bending of the spine in the frontal plane.' }
  ],
  exam: [
    { q: 'Identify the plane and axis in which a diver performs a full twist. [2]', m: 2, ms: ['transverse / horizontal plane', 'longitudinal axis'] },
    { q: 'Complete a movement analysis of the knee and ankle during the upward (drive) phase of a vertical jump. For each joint give the joint type, movement and plane. [4]', m: 4, ms: ['knee: hinge joint', 'knee: extension, sagittal plane', 'ankle: hinge joint', 'ankle: plantar flexion, sagittal plane'] },
    { q: 'Using a sporting example, explain the difference between horizontal abduction and abduction at the shoulder. [4]', m: 4, ms: ['abduction: moving the arm away from the midline in the frontal plane', 'e.g. arms lifting sideways in a star jump / jumping jack', 'horizontal abduction: arm held horizontal, moved backwards away from the midline in the transverse plane', 'e.g. backswing of a discus throw / reverse fly'] }
  ],
  sims: ['planes'], gens: []
});

TOPICS.push({
  id: '1.4', unit: '1', area: 'phys', ref: 'Joints and articulations; musculo-skeletal system', title: 'Joints and the skeleton', short: 'Fibrous, cartilaginous, synovial; hinge, pivot, ball and socket, gliding, ellipsoid',
  summary: 'The skeleton supports, protects, moves, makes blood cells and stores minerals. Joints are classified by structure and range of movement; synovial joints are the freely movable ones used in sport. Learn the joint types, examples, and the roles of ligaments, tendons and cartilage.',
  spec: [
    'Classification of joints: fibrous, cartilaginous and synovial — by range and type of movement',
    'Types of synovial joint: hinge, pivot, ball and socket, gliding and ellipsoid, with sporting examples',
    'How joint types are linked to movement patterns when analysing sporting activities',
    'Overview of the skeletal system: functions; axial and appendicular skeleton',
    'Different types of bone and the role of ligaments, tendons and cartilage'
  ],
  learn: [
    { h: 'The skeleton: functions and divisions', html: `
<div class="tbl"><table><tr><th>Function</th><th>Sporting relevance</th></tr>
<tr><td><b>Support and shape</b></td><td>a rigid frame for muscles and posture</td></tr>
<tr><td><b>Protection</b></td><td>cranium protects the brain in a rugby tackle; ribs protect heart and lungs</td></tr>
<tr><td><b>Movement</b></td><td>bones are levers and give attachment points for muscles (via tendons)</td></tr>
<tr><td><b>Blood cell production</b></td><td>red bone marrow (in flat bones and the ends of long bones) makes red blood cells for oxygen transport</td></tr>
<tr><td><b>Mineral storage</b></td><td>calcium and phosphorus for bone strength and muscle contraction</td></tr></table></div>
<p>The <b>axial skeleton</b> (skull, vertebral column, ribs, sternum) forms the central axis and protects organs. The <b>appendicular skeleton</b> (shoulder girdle, arms, pelvic girdle, legs) is mainly for movement.</p>
<div class="tbl"><table><tr><th>Bone type</th><th>Examples</th><th>Role</th></tr>
<tr><td>Long</td><td>femur, humerus, tibia</td><td>levers for movement; red marrow at the ends</td></tr>
<tr><td>Short</td><td>carpals, tarsals</td><td>strength and weight-bearing with small movements</td></tr>
<tr><td>Flat</td><td>cranium, sternum, scapula, ribs, pelvis</td><td>protection; broad surface for muscle attachment</td></tr>
<tr><td>Irregular</td><td>vertebrae</td><td>protection of the spinal cord; attachment</td></tr>
<tr><td>Sesamoid</td><td>patella</td><td>sits in a tendon; improves the leverage of the quadriceps</td></tr></table></div>` },
    { h: 'Classifying joints', html: `
<div class="tbl"><table><tr><th>Class</th><th>Movement</th><th>Structure</th><th>Example</th></tr>
<tr><td><b>Fibrous</b> (immovable)</td><td>none</td><td>bones joined by tough fibrous tissue</td><td>sutures of the cranium</td></tr>
<tr><td><b>Cartilaginous</b> (slightly movable)</td><td>slight</td><td>bones separated by a pad of cartilage</td><td>between vertebrae (intervertebral discs); pubic symphysis</td></tr>
<tr><td><b>Synovial</b> (freely movable)</td><td>most</td><td>joint capsule filled with synovial fluid</td><td>knee, hip, shoulder, elbow</td></tr></table></div>
[[d:synovial]]
<p>Key structures of a synovial joint: <b>articular (hyaline) cartilage</b> covers the ends of bones to reduce friction and absorb shock; <b>synovial membrane</b> secretes <b>synovial fluid</b> to lubricate and nourish the cartilage; the <b>joint capsule</b> encloses the joint; <b>ligaments</b> join bone to bone and stabilise the joint; some joints have <b>bursae</b> and <b>menisci</b> (the knee) for cushioning.</p>
<div class="box tip"><b class="lbl">Ligaments vs tendons</b><p><b>L</b>igaments <b>l</b>ink bone to bone (stability). <b>T</b>endons <b>t</b>ie muscle to bone (transmit the muscle’s pull). Cartilage protects the bone ends.</p></div>` },
    { h: 'Types of synovial joint', html: `
<div class="tbl"><table><tr><th>Type</th><th>Movements allowed</th><th>Example in body</th><th>Sporting example</th></tr>
<tr><td><b>Hinge</b></td><td>flexion and extension</td><td>elbow, knee, ankle</td><td>knee bending in a squat</td></tr>
<tr><td><b>Pivot</b></td><td>rotation</td><td>atlas and axis (neck); radio-ulnar joint</td><td>turning the head to watch a pass; pronation in a topspin forehand</td></tr>
<tr><td><b>Ball and socket</b></td><td>flexion, extension, abduction, adduction, rotation, circumduction</td><td>shoulder, hip</td><td>bowling in cricket; hip in a hurdle trail leg</td></tr>
<tr><td><b>Gliding</b> (plane)</td><td>small sliding movements in all directions</td><td>between carpals; tarsals; articular processes of vertebrae</td><td>wrist flick in hockey or netball shooting</td></tr>
<tr><td><b>Ellipsoid</b> (condyloid)</td><td>flexion, extension, abduction, adduction (and circumduction)</td><td>wrist (radiocarpal joint)</td><td>wrist action in a basketball shot</td></tr></table></div>
<p>The more movement a joint allows, the less stable it usually is: the shoulder has the greatest range but dislocates more easily than the hip, whose deep socket gives stability.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain how the structure of a synovial joint helps a rugby player to perform repeated scrums. (4 marks)', s: ['Articular cartilage on the ends of the bones absorbs shock and reduces friction.', 'Synovial fluid lubricates the joint and nourishes the cartilage, allowing smooth movement.', 'Ligaments hold bone to bone, giving stability under large forces.', 'The joint capsule (and, at the knee, menisci) adds stability and cushioning, reducing injury risk.'], a: 'Cartilage, synovial fluid, ligaments and capsule.' }
  ],
  pitfalls: ['Calling the knee a ball-and-socket joint — it is a hinge (with slight rotation).', 'Mixing up ligaments (bone to bone) and tendons (muscle to bone).', 'Saying fibrous joints are “slightly movable” — they are immovable; cartilaginous joints are slightly movable.', 'Naming a joint type without the sporting example and movement the question asks for.', 'Forgetting that the radio-ulnar joint (pivot) produces pronation and supination.'],
  cards: [
    ['Five functions of the skeleton?', 'Support/shape, protection, movement, blood cell production, mineral storage.'],
    ['Axial skeleton?', 'Skull, vertebral column, ribs and sternum.'],
    ['Appendicular skeleton?', 'Shoulder and pelvic girdles and the limbs.'],
    ['Three classes of joint?', 'Fibrous (immovable), cartilaginous (slightly movable), synovial (freely movable).'],
    ['Example of a fibrous joint?', 'Sutures of the cranium.'],
    ['Example of a cartilaginous joint?', 'Between vertebrae (intervertebral discs).'],
    ['Five types of synovial joint in the specification?', 'Hinge, pivot, ball and socket, gliding, ellipsoid.'],
    ['Hinge joint movements and example?', 'Flexion/extension — knee, elbow, ankle.'],
    ['Pivot joint example?', 'Atlas/axis (head rotation); radio-ulnar (pronation/supination).'],
    ['Ellipsoid joint example?', 'The wrist (radiocarpal joint).'],
    ['Role of articular cartilage?', 'Reduces friction and absorbs shock at the ends of bones.'],
    ['Role of synovial fluid?', 'Lubricates the joint and nourishes cartilage.'],
    ['Ligament vs tendon?', 'Ligament: bone to bone (stability). Tendon: muscle to bone (transmits force).'],
    ['Example of a sesamoid bone?', 'The patella (kneecap).']
  ],
  quiz: [
    { q: 'The joints between the bones of the cranium are…', o: ['fibrous', 'cartilaginous', 'synovial', 'gliding'], x: 'Immovable sutures.' },
    { q: 'Which joint allows circumduction?', o: ['Shoulder', 'Elbow', 'Knee', 'Atlas/axis'], x: 'Ball and socket.' },
    { q: 'The radio-ulnar joint is a…', o: ['pivot joint', 'hinge joint', 'gliding joint', 'ellipsoid joint'], x: 'Allows rotation (pronation/supination).' },
    { q: 'What joins bone to bone?', o: ['Ligament', 'Tendon', 'Cartilage', 'Synovial membrane'], x: 'Ligaments give stability.' },
    { q: 'Which is an irregular bone?', o: ['Vertebra', 'Femur', 'Scapula', 'Patella'], x: 'Irregular shape protects the spinal cord.' },
    { q: 'Red blood cells are made in…', o: ['red bone marrow', 'synovial fluid', 'articular cartilage', 'ligaments'], x: 'Found in flat bones and the ends of long bones.' },
    { q: 'The wrist (radiocarpal) joint is…', o: ['ellipsoid', 'hinge', 'pivot', 'fibrous'], x: 'Flexion, extension, abduction, adduction.' },
    { q: 'Which part of a synovial joint secretes synovial fluid?', o: ['Synovial membrane', 'Joint capsule', 'Ligament', 'Articular cartilage'], x: 'The membrane lines the capsule.' },
    { q: 'Which statement about the shoulder is correct?', o: ['It has the greatest range of movement but is less stable than the hip', 'It is a hinge joint', 'It is part of the axial skeleton', 'It cannot rotate'], x: 'Shallow socket → range but less stability.' }
  ],
  exam: [
    { q: 'Identify the type of synovial joint at the hip and the knee, and give one movement possible at the hip that is not possible at the knee. [3]', m: 3, ms: ['hip: ball and socket', 'knee: hinge', 'abduction / adduction / rotation / circumduction at the hip'] },
    { q: 'Describe two functions of the skeleton, applying each to a sporting example. [4]', m: 4, ms: ['protection', 'e.g. cranium protects the brain when heading / ribs protect lungs in a tackle', 'movement / levers / muscle attachment', 'e.g. femur as a lever when kicking', '(also accept) blood cell production — more red cells for oxygen transport in endurance; mineral storage; support'] },
    { q: 'Explain the role of ligaments, tendons and cartilage in a netballer landing from a jump. [3]', m: 3, ms: ['ligaments join bone to bone and stabilise the knee/ankle on landing', 'tendons attach muscle to bone and transmit force (e.g. eccentric quadriceps contraction via patellar tendon)', 'articular cartilage/menisci absorb shock and reduce friction'] }
  ],
  sims: ['joints'], gens: []
});

TOPICS.push({
  id: '1.5', unit: '1', area: 'phys', ref: 'Musculo-skeletal system', title: 'Skeletal muscle, fibre types and contractions', short: 'Major muscles, type I/IIa/IIb fibres, antagonistic pairs, isotonic and isometric',
  summary: 'Skeletal muscle pulls on bones to create movement. Learn the fourteen major muscles and what they do in sport, the three fibre types and how they suit different events, how muscles work in antagonistic pairs with fixators and synergists, and the three types of contraction.',
  spec: [
    'Structure and functions of skeletal muscle',
    'Major muscles: pectoralis major, deltoid, erector spinae, latissimus dorsi, trapezius, biceps brachii, triceps brachii, abdominals, gluteus maximus, quadriceps, hamstring, tibialis anterior, gastrocnemius, soleus',
    'Muscle fibres: slow twitch (Type I) and fast twitch (Type IIa and IIb) and their characteristics; how they influence performance',
    'Antagonistic muscle action: prime mover (agonist), antagonist, fixator and synergist',
    'Types of contraction: isotonic (concentric and eccentric) and isometric; application to sport',
    'Microscopic detail and the sliding filament theory are not required'
  ],
  learn: [
    { h: 'What skeletal muscle does', html: `
<p>Skeletal (voluntary) muscle is attached to bones by tendons. It can only <b>pull</b> — so muscles work in pairs. Its functions: producing <b>movement</b>, maintaining <b>posture</b> (low-level continuous contraction), stabilising joints, and generating <b>heat</b>.</p>
<p>A muscle is made of bundles of long cells called <b>muscle fibres</b>. A <b>motor neurone</b> and all the fibres it controls form a <b>motor unit</b>; all fibres in one motor unit are the same type and contract together (“all or none”).</p>` },
    { h: 'The major muscles and their actions', html: `
[[d:musclemap]]
<div class="tbl"><table><tr><th>Muscle</th><th>Main action</th><th>Sporting example</th></tr>
<tr><td>Pectoralis major</td><td>horizontal adduction and flexion of the shoulder</td><td>chest pass; forehand drive; press-up</td></tr>
<tr><td>Deltoid</td><td>abduction (also flexion and extension) of the shoulder</td><td>raising the arms to block in volleyball</td></tr>
<tr><td>Trapezius</td><td>elevates, retracts and stabilises the scapula</td><td>shrugging; holding the shoulders in a scrum</td></tr>
<tr><td>Latissimus dorsi</td><td>adduction and extension of the shoulder</td><td>pull-up; the pull phase of front crawl</td></tr>
<tr><td>Erector spinae</td><td>extension of the spine; posture</td><td>straightening up in a deadlift</td></tr>
<tr><td>Abdominals (rectus abdominis)</td><td>flexion of the spine</td><td>sit-up; pike in trampolining</td></tr>
<tr><td>Biceps brachii</td><td>flexion of the elbow</td><td>upward phase of a biceps curl; pulling in rowing</td></tr>
<tr><td>Triceps brachii</td><td>extension of the elbow</td><td>upward phase of a press-up; shot put release</td></tr>
<tr><td>Gluteus maximus</td><td>extension (and abduction) of the hip</td><td>driving up from a squat; sprinting drive phase</td></tr>
<tr><td>Quadriceps</td><td>extension of the knee</td><td>kicking a ball; jumping</td></tr>
<tr><td>Hamstrings</td><td>flexion of the knee (and extension of the hip)</td><td>recovery phase of the running leg</td></tr>
<tr><td>Tibialis anterior</td><td>dorsiflexion of the ankle</td><td>lifting the toes in the recovery phase of running</td></tr>
<tr><td>Gastrocnemius</td><td>plantar flexion (and knee flexion)</td><td>take-off in a jump; sprint start</td></tr>
<tr><td>Soleus</td><td>plantar flexion (especially with the knee bent)</td><td>long-distance running; landing</td></tr></table></div>` },
    { h: 'Muscle fibre types', html: `
<div class="tbl"><table><tr><th>Characteristic</th><th>Type I (slow oxidative)</th><th>Type IIa (fast oxidative glycolytic)</th><th>Type IIb (fast glycolytic)</th></tr>
<tr><td>Speed of contraction</td><td>slow</td><td>fast</td><td>fastest</td></tr>
<tr><td>Force produced</td><td>low</td><td>high</td><td>highest</td></tr>
<tr><td>Fatigue resistance</td><td>high</td><td>moderate</td><td>low</td></tr>
<tr><td>Mitochondria, myoglobin, capillaries</td><td>many / high / dense (red)</td><td>moderate</td><td>few / low / sparse (white)</td></tr>
<tr><td>Main energy system</td><td>aerobic</td><td>aerobic and anaerobic</td><td>anaerobic (ATP-PC, glycolysis)</td></tr>
<tr><td>PC and glycogen stores</td><td>low PC</td><td>high</td><td>high</td></tr>
<tr><td>Motor neurone size</td><td>small</td><td>large</td><td>large</td></tr>
<tr><td>Suited to</td><td>marathon, triathlon, posture</td><td>800–1500 m, games players</td><td>100 m, shot put, weightlifting</td></tr></table></div>
<p>Fibre-type proportions are largely <b>genetic</b>. Training can change the <i>characteristics</i> of fibres (endurance training makes IIa fibres more oxidative; power training enlarges type II fibres), but it hardly converts type I into type II. Fibres are <b>recruited in order</b>: type I first at low intensity, then IIa, then IIb as force demands rise.</p>` },
    { h: 'Antagonistic pairs', html: `
[[d:antag]]
<ul><li><b>Agonist (prime mover)</b> — the muscle contracting to cause the movement.</li>
<li><b>Antagonist</b> — relaxes and lengthens to allow the movement, controlling it.</li>
<li><b>Fixator</b> — stabilises the origin bone so the agonist can pull effectively (e.g. trapezius steadying the scapula during a biceps curl).</li>
<li><b>Synergist</b> — assists the agonist or reduces unwanted movement (e.g. brachialis helping biceps with elbow flexion).</li></ul>
<div class="tbl"><table><tr><th>Movement</th><th>Agonist</th><th>Antagonist</th></tr>
<tr><td>Elbow flexion</td><td>biceps brachii</td><td>triceps brachii</td></tr><tr><td>Knee extension</td><td>quadriceps</td><td>hamstrings</td></tr>
<tr><td>Hip extension</td><td>gluteus maximus</td><td>hip flexors (iliopsoas)</td></tr><tr><td>Ankle plantar flexion</td><td>gastrocnemius/soleus</td><td>tibialis anterior</td></tr>
<tr><td>Spine flexion</td><td>abdominals</td><td>erector spinae</td></tr></table></div>` },
    { h: 'Types of contraction', html: `
<ul><li><b>Isotonic concentric</b> — muscle <b>shortens</b> under tension: biceps in the upward phase of a curl; quadriceps as you rise from a squat.</li>
<li><b>Isotonic eccentric</b> — muscle <b>lengthens</b> under tension, controlling a movement against gravity: quadriceps in the downward phase of a squat or on landing; triceps lowering into a press-up.</li>
<li><b>Isometric</b> — muscle contracts but its <b>length does not change</b> and there is no movement: holding a plank, a gymnast’s crucifix on the rings, a rugby scrum at a stalemate.</li></ul>
<div class="box warn"><b class="lbl">Trick question</b><p>In the downward phase of a squat the <b>quadriceps</b> are the agonist, working eccentrically. It is not the hamstrings — gravity causes the movement and the quadriceps control it.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Identify the agonist and type of contraction at the knee during the downward phase of a squat. (2 marks)', s: ['Gravity pulls the body down; the quadriceps lengthen while under tension to control the descent.', 'Agonist: <b>quadriceps</b>; contraction: <b>isotonic eccentric</b>.'], a: 'Quadriceps, eccentric.' },
    { q: 'Explain why an elite 100 m sprinter is likely to have a high proportion of type IIb fibres. (3 marks)', s: ['Type IIb fibres have the fastest contraction speed and produce the greatest force.', 'They have high PC stores and use the anaerobic ATP-PC system, matching the ~10 s maximal effort.', 'Their low fatigue resistance does not matter in a race that short.'], a: 'Fast, forceful, anaerobic fibres suit a 10 s maximal event.' }
  ],
  pitfalls: ['Assuming the “obvious” muscle works in the downward phase — lowering against gravity uses the same muscle eccentrically.', 'Describing type I fibres as “weak” without mentioning fatigue resistance and aerobic capacity.', 'Saying training converts slow-twitch into fast-twitch fibres.', 'Confusing the fixator (stabilises the origin) with the synergist (assists the agonist).', 'Calling isometric contraction “isotonic” because the muscle is tense — isotonic means the length changes.'],
  cards: [
    ['Muscle that extends the knee?', 'Quadriceps.'], ['Muscle that flexes the knee?', 'Hamstrings.'], ['Muscle that dorsiflexes the ankle?', 'Tibialis anterior.'],
    ['Two muscles that plantar flex the ankle?', 'Gastrocnemius and soleus.'], ['Main action of pectoralis major?', 'Horizontal adduction (and flexion) of the shoulder.'],
    ['Main action of latissimus dorsi?', 'Adduction and extension of the shoulder.'], ['Main action of the deltoid?', 'Abduction of the shoulder.'],
    ['Erector spinae?', 'Extends the spine and maintains posture.'], ['Type I fibre characteristics?', 'Slow, low force, fatigue resistant, many mitochondria and capillaries, high myoglobin, aerobic.'],
    ['Type IIb fibre characteristics?', 'Fastest, highest force, fatigue quickly, high PC and glycogen, anaerobic.'], ['Type IIa fibres?', 'Fast and forceful but moderately fatigue resistant; aerobic and anaerobic.'],
    ['Agonist?', 'Prime mover: the muscle causing the movement.'], ['Antagonist?', 'Relaxes and lengthens to allow the movement.'], ['Fixator?', 'Stabilises the origin bone so the agonist can work.'],
    ['Synergist?', 'Assists the agonist / prevents unwanted movement.'], ['Concentric contraction?', 'Muscle shortens under tension.'], ['Eccentric contraction?', 'Muscle lengthens under tension (controls a movement).'],
    ['Isometric contraction?', 'Muscle contracts without changing length; no movement.']
  ],
  quiz: [
    { q: 'Which muscle extends the elbow in the upward phase of a press-up?', o: ['Triceps brachii', 'Biceps brachii', 'Deltoid', 'Latissimus dorsi'], x: 'Triceps extends the elbow.' },
    { q: 'The agonist in the downward phase of a squat is the…', o: ['quadriceps, contracting eccentrically', 'hamstrings, contracting concentrically', 'gluteus maximus, contracting isometrically', 'tibialis anterior'], x: 'Quadriceps control the descent.' },
    { q: 'Holding a handstand still is mainly…', o: ['isometric contraction', 'concentric contraction', 'eccentric contraction', 'isokinetic contraction'], x: 'No change in length.' },
    { q: 'Which fibre type has the most mitochondria?', o: ['Type I', 'Type IIa', 'Type IIb', 'They are equal'], x: 'Aerobic fibres.' },
    { q: 'A marathon runner will rely mainly on…', o: ['type I fibres', 'type IIb fibres', 'type IIa fibres only', 'no fibres after 20 minutes'], x: 'Fatigue resistant, aerobic.' },
    { q: 'Which is recruited first as exercise intensity increases?', o: ['Type I', 'Type IIb', 'Type IIa', 'All at once'], x: 'Recruitment follows size: small motor units first.' },
    { q: 'A muscle that stabilises the origin bone is the…', o: ['fixator', 'synergist', 'antagonist', 'agonist'], x: 'It gives the agonist a stable base.' },
    { q: 'Which muscle dorsiflexes the ankle?', o: ['Tibialis anterior', 'Gastrocnemius', 'Soleus', 'Hamstrings'], x: 'Lifts the toes.' },
    { q: 'The main action of the latissimus dorsi is…', o: ['adduction/extension of the shoulder', 'flexion of the elbow', 'extension of the knee', 'flexion of the spine'], x: 'The pull in swimming and pull-ups.' },
    { q: 'Type IIb fibres fatigue quickly because they…', o: ['rely on anaerobic energy and have few mitochondria', 'have high myoglobin', 'have many capillaries', 'contract slowly'], x: 'Low oxidative capacity; lactate builds up.' }
  ],
  exam: [
    { q: 'Identify the agonist, antagonist and type of contraction at the elbow during the upward phase of a biceps curl. [3]', m: 3, ms: ['agonist: biceps brachii', 'antagonist: triceps brachii', 'isotonic concentric'] },
    { q: 'An 800 m runner and a shot putter have different muscle fibre profiles.', parts: [
      { q: 'Describe two characteristics of type IIb fibres. [2]', m: 2, ms: ['fast contraction speed', 'high force / power', 'low fatigue resistance / fatigue quickly', 'high PC / glycogen stores; anaerobic', 'few mitochondria / capillaries / low myoglobin'] },
      { q: 'Explain why type IIa fibres are important for an 800 m runner. [3]', m: 3, ms: ['race lasts ~2 minutes and needs both aerobic and anaerobic energy', 'IIa fibres are fast and forceful but more fatigue resistant than IIb', 'allow a high pace to be sustained and a fast finish / kick'] },
      { q: 'Explain the role of the agonist, antagonist and fixator during the extension of the arm in the shot put. [3]', m: 3, ms: ['agonist: triceps contracts concentrically to extend the elbow', 'antagonist: biceps relaxes/lengthens to allow extension', 'fixator: e.g. deltoid/trapezius/rotator muscles stabilise the shoulder (origin) so force is transferred'] }
    ] },
    { q: 'Using examples, explain the difference between eccentric and isometric contractions. [4]', m: 4, ms: ['eccentric: muscle lengthens under tension', 'e.g. quadriceps when landing / lowering into a squat', 'isometric: muscle contracts without changing length / no movement', 'e.g. holding a plank / crucifix on rings / static scrum'] }
  ],
  sims: ['fibremix', 'muscles'], gens: []
});

TOPICS.push({
  id: '1.6', unit: '1', area: 'phys', ref: 'Preparation and training methods', title: 'Components of fitness and methods of training', short: 'Health- and skill-related fitness; continuous, fartlek, interval, HIT, weights, plyometrics, circuits, flexibility',
  summary: 'Fitness has health-related and skill-related components, each linked to particular sports and tests. Learn the training methods in the specification, what each develops, how to design sessions (sets, reps, % intensity, work:rest ratios) and the four types of stretching including PNF.',
  spec: [
    'Health-related components: aerobic capacity, muscular strength, muscular endurance, body composition, flexibility',
    'Skill-related components: agility, balance, co-ordination, speed, power, reaction time',
    'Links between components of fitness, methods of training and specific sports',
    'Methods of training: weight, continuous, fartlek, interval including high intensity training (HIT), plyometrics, circuit, mobility/flexibility',
    'Flexibility training: active, passive and ballistic stretching; proprioceptive neuromuscular facilitation (PNF)',
    'Weight training to develop strength, power or muscular endurance'
  ],
  learn: [
    { h: 'Components of fitness', html: `
<div class="tbl"><table><tr><th>Component</th><th>Definition</th><th>Sport where it matters</th><th>Typical test</th></tr>
<tr><td colspan="4"><b>Health-related</b></td></tr>
<tr><td>Aerobic capacity</td><td>ability to take in, transport and use oxygen to sustain prolonged exercise</td><td>marathon, midfield in football</td><td>multi-stage fitness test; VO₂max test</td></tr>
<tr><td>Muscular strength</td><td>maximum force a muscle or group can produce in one contraction</td><td>weightlifting, rugby scrum</td><td>1RM; handgrip dynamometer</td></tr>
<tr><td>Muscular endurance</td><td>ability of a muscle to contract repeatedly without fatigue</td><td>rowing, swimming</td><td>sit-up / press-up test</td></tr>
<tr><td>Body composition</td><td>proportions of fat, muscle, bone and other tissue</td><td>jockeys, gymnasts, sumo</td><td>skinfold callipers; bioelectrical impedance</td></tr>
<tr><td>Flexibility</td><td>range of movement possible at a joint</td><td>gymnastics, hurdling</td><td>sit and reach</td></tr>
<tr><td colspan="4"><b>Skill-related</b></td></tr>
<tr><td>Agility</td><td>ability to change direction quickly and in control</td><td>rugby, netball</td><td>Illinois agility run</td></tr>
<tr><td>Balance</td><td>keeping the centre of mass over the base of support</td><td>gymnastics beam</td><td>stork stand</td></tr>
<tr><td>Co-ordination</td><td>moving two or more body parts together smoothly</td><td>tennis serve</td><td>alternate-hand wall toss</td></tr>
<tr><td>Speed</td><td>the ability to move the body or a part quickly (distance ÷ time)</td><td>100 m</td><td>30 m sprint</td></tr>
<tr><td>Power</td><td>strength × speed — force applied quickly</td><td>long jump, shot put</td><td>vertical jump; standing broad jump</td></tr>
<tr><td>Reaction time</td><td>time from stimulus to the start of a response</td><td>sprint start, goalkeeping</td><td>ruler drop test</td></tr></table></div>` },
    { h: 'Aerobic methods: continuous and fartlek', html: `
<p><b>Continuous training</b> — steady, submaximal exercise for at least 20–30 minutes at about <b>60–80% of maximum heart rate</b> (running, cycling, swimming). Develops aerobic capacity and burns fat; suits endurance athletes. Drawbacks: can be monotonous, not specific to games with changes of pace.</p>
<p><b>Fartlek</b> (“speed play”) — continuous running with changes of pace and terrain (jog, stride, sprint, hills). It develops aerobic <i>and</i> anaerobic fitness and suits games players whose matches are intermittent. It needs self-motivation and is hard to monitor.</p>` },
    { h: 'Interval training and HIT', html: `
<p><b>Interval training</b> alternates periods of work with rest or active recovery. It can be designed precisely using four variables: <b>intensity</b> (% max effort or HR), <b>duration</b> of work, <b>duration of recovery</b>, and <b>number</b> of repetitions and sets.</p>
<div class="tbl"><table><tr><th>Target system</th><th>Work</th><th>Intensity</th><th>Work : rest</th></tr>
<tr><td>ATP-PC</td><td>3–10 s</td><td>95–100%</td><td>1 : 5 or more (full PC recovery takes 2–3 min)</td></tr>
<tr><td>Anaerobic glycolysis (lactic acid)</td><td>15–90 s</td><td>80–95%</td><td>1 : 2 to 1 : 3</td></tr>
<tr><td>Aerobic</td><td>2–5 min+</td><td>60–80%</td><td>1 : 1 or 1 : 0.5</td></tr></table></div>
<p><b>High intensity (interval) training (HIT/HIIT)</b> uses short bursts at 85–100% effort with brief recovery (e.g. 30 s all-out sprints, 4 min recovery, 4–6 reps; or Tabata 20 s on/10 s off). It improves both aerobic and anaerobic fitness in less time, but it is very demanding and needs a base level of fitness and motivation.</p>` },
    { h: 'Weight training, plyometrics and circuits', html: `
<div class="tbl"><table><tr><th>Goal</th><th>Load (% of 1RM)</th><th>Reps</th><th>Sets</th><th>Recovery</th></tr>
<tr><td>Maximum strength</td><td>≥ 85%</td><td>1–6</td><td>3–6</td><td>2–5 min</td></tr>
<tr><td>Power (explosive strength)</td><td>30–60% moved fast (or heavy Olympic lifts)</td><td>1–5</td><td>3–5</td><td>2–5 min</td></tr>
<tr><td>Hypertrophy</td><td>70–85%</td><td>8–12</td><td>3–4</td><td>60–90 s</td></tr>
<tr><td>Muscular endurance</td><td>50–60%</td><td>15–20+</td><td>2–3</td><td>30–60 s</td></tr></table></div>
<p><b>Plyometrics</b> develop <b>power</b> using the stretch–shortening cycle: a rapid <b>eccentric</b> stretch (landing) is followed immediately by a powerful <b>concentric</b> contraction (bounding, depth jumps, clap press-ups, medicine-ball throws). The stretch stores elastic energy and triggers the stretch reflex. High injury risk — needs a strength base and good technique.</p>
<p><b>Circuit training</b> — a series of exercise stations (e.g. 30 s work, 30 s rest) that can target muscular endurance, aerobic fitness or sport-specific skills. Easy to adapt for large groups; varied, so it maintains interest.</p>` },
    { h: 'Mobility and flexibility training', html: `
<div class="tbl"><table><tr><th>Type</th><th>How</th><th>Notes</th></tr>
<tr><td><b>Static active</b></td><td>performer holds the stretch using their own muscles (e.g. holding a leg out)</td><td>safe; 10–30 s</td></tr>
<tr><td><b>Static passive</b></td><td>a partner, gravity or equipment pushes the limb beyond its normal range</td><td>greater range; partner must be careful</td></tr>
<tr><td><b>Ballistic</b></td><td>swinging or bouncing movements using momentum</td><td>risky — can trigger the stretch reflex and tear muscle; only for trained athletes after a thorough warm-up (e.g. dancers, hurdlers)</td></tr>
<tr><td><b>PNF</b></td><td>stretch (often with a partner) → contract the stretched muscle <b>isometrically</b> for 6–10 s → relax → stretch further</td><td>most effective; the isometric contraction triggers <b>autogenic inhibition</b> (Golgi tendon organs relax the muscle), overriding the stretch reflex</td></tr></table></div>` }
  ],
  eqs: [['"power" = "strength" × "speed"', 'power (conceptual)'], ['"HR"_max ≈ 220 − "age"', 'estimated maximum heart rate']],
  worked: [
    { q: 'Design an interval training session to develop the ATP-PC system of a 100 m sprinter. (4 marks)', s: ['<b>Intensity:</b> 95–100% maximal effort.', '<b>Work:</b> sprints of 30–60 m (about 4–7 s), within the life of the ATP-PC system.', '<b>Recovery:</b> 2–3 minutes (work : rest at least 1 : 5) so PC stores are fully restored.', '<b>Volume:</b> e.g. 3 sets of 4 reps, with longer recovery between sets.'], a: 'Short maximal sprints with long, full recoveries.' },
    { q: 'Explain how PNF stretching increases flexibility more than static stretching. (3 marks)', s: ['The muscle is taken to its end of range, then contracted isometrically against resistance for 6–10 s.', 'This triggers the Golgi tendon organs, which cause <b>autogenic inhibition</b> — the muscle relaxes.', 'The stretch reflex (from muscle spindles) is inhibited, so the muscle can be stretched further on the next attempt.'], a: 'Isometric contraction → autogenic inhibition → greater range.' }
  ],
  pitfalls: ['Giving a training method without matching it to a component of fitness and a sport.', 'Describing interval training without the variables (intensity, work time, rest time, reps/sets).', 'Saying speed is a health-related component — it is skill-related.', 'Recommending ballistic stretching to beginners.', 'Forgetting that plyometrics rely on an eccentric contraction immediately before a concentric one.'],
  cards: [
    ['Five health-related components?', 'Aerobic capacity, muscular strength, muscular endurance, body composition, flexibility.'],
    ['Six skill-related components?', 'Agility, balance, co-ordination, speed, power, reaction time.'],
    ['Power?', 'Strength × speed: applying force quickly.'], ['Reaction time?', 'Time from the stimulus to the start of the response.'],
    ['Continuous training intensity and duration?', '60–80% HRmax for at least 20–30 minutes.'], ['Fartlek?', '“Speed play”: continuous running with varied pace and terrain.'],
    ['Four variables of interval training?', 'Intensity, work duration, recovery duration, number of reps/sets.'], ['ATP-PC interval work:rest?', '3–10 s maximal work, at least 1:5 (2–3 min recovery).'],
    ['HIT?', 'Short bursts at 85–100% with brief recovery; improves aerobic and anaerobic fitness quickly.'], ['Weights for maximum strength?', '≥ 85% 1RM, 1–6 reps.'],
    ['Weights for muscular endurance?', '50–60% 1RM, 15–20+ reps.'], ['Plyometrics?', 'Eccentric stretch immediately followed by a powerful concentric contraction (stretch–shortening cycle) to develop power.'],
    ['PNF?', 'Stretch, isometric contraction 6–10 s, relax, stretch further — autogenic inhibition.'], ['Ballistic stretching?', 'Bouncing/swinging using momentum; risky, only for trained, warmed-up athletes.']
  ],
  quiz: [
    { q: 'Which is a skill-related component of fitness?', o: ['Reaction time', 'Flexibility', 'Body composition', 'Muscular endurance'], x: 'Skill-related: agility, balance, co-ordination, speed, power, reaction time.' },
    { q: 'The best test of leg power is the…', o: ['vertical jump', 'sit and reach', 'handgrip dynamometer', 'stork stand'], x: 'Explosive jump.' },
    { q: 'Fartlek suits a hockey player because it…', o: ['mimics the changing pace of a match', 'is performed at one steady pace', 'only trains the ATP-PC system', 'needs no motivation'], x: 'Games are intermittent.' },
    { q: 'An interval session of 6 × 10 s sprints with 2 min recovery trains mainly the…', o: ['ATP-PC system', 'aerobic system', 'lactic acid system', 'fat metabolism'], x: 'Short maximal efforts with full PC recovery.' },
    { q: 'Weight training for maximum strength uses…', o: ['heavy loads (≥ 85% 1RM) and few reps', 'light loads and many reps', 'no rest between sets', '50% 1RM for 20 reps'], x: 'High load, low reps.' },
    { q: 'Plyometric training is based on…', o: ['an eccentric contraction immediately before a concentric one', 'isometric holds', 'continuous low intensity work', 'static passive stretching'], x: 'The stretch–shortening cycle.' },
    { q: 'In PNF stretching, the stretched muscle is contracted…', o: ['isometrically for about 6–10 seconds', 'concentrically for 1 minute', 'eccentrically with bouncing', 'not at all'], x: 'Causes autogenic inhibition.' },
    { q: 'Which type of stretching has the highest injury risk?', o: ['Ballistic', 'Static active', 'Static passive', 'PNF with a trained partner'], x: 'Momentum can overstretch and trigger the stretch reflex.' },
    { q: 'Continuous training is usually performed at…', o: ['60–80% of maximum heart rate', '95–100% of maximum heart rate', '30% of maximum heart rate', 'maximal effort for 10 s'], x: 'Aerobic training zone.' },
    { q: 'Circuit training is especially useful because…', o: ['it can be adapted to train several components and large groups', 'it only develops flexibility', 'it needs a laboratory', 'it cannot be sport-specific'], x: 'Stations can be chosen for any goal.' }
  ],
  exam: [
    { q: 'Define power and give one sporting example where it is important. [2]', m: 2, ms: ['strength × speed / ability to apply force quickly / explosive strength', 'e.g. long jump take-off / shot put / sprint start / smash'] },
    { q: 'A rugby union forward wants to improve his strength and power.', parts: [
      { q: 'Describe a weight training programme to develop maximum strength. [3]', m: 3, ms: ['high load ≥ 85% 1RM', 'low reps (1–6)', '3–6 sets with long recovery 2–5 min / exercises specific to scrummaging (e.g. squats, deadlifts)'] },
      { q: 'Explain how plyometric training develops power. [3]', m: 3, ms: ['rapid eccentric contraction/stretch (e.g. landing from a box)', 'stores elastic energy / stimulates the stretch reflex (muscle spindles)', 'followed immediately by a more powerful concentric contraction / trains the stretch–shortening cycle'] },
      { q: 'Evaluate the use of high intensity training (HIT) for a rugby player. [6]', m: 6, lv: true, ms: ['HIT: short bursts 85–100% with short recovery (e.g. 30 s on / 30 s off)', 'rugby is intermittent: sprints, tackles and rucks with short recovery — HIT is specific', 'improves anaerobic capacity/lactate tolerance and aerobic fitness at the same time', 'time-efficient during a busy playing season', 'but very demanding; risk of overtraining/injury; needs a fitness base and motivation', 'needs careful periodisation around matches; judgement'] }
    ] },
    { q: 'Compare static passive stretching and PNF as methods of developing flexibility. [4]', m: 4, ms: ['static passive: partner/gravity/equipment moves the limb beyond normal range and holds it', 'relatively safe and simple; 10–30 s holds', 'PNF: stretch → isometric contraction 6–10 s → relax → stretch further', 'PNF gives greater gains via autogenic inhibition but needs a skilled partner / can be uncomfortable'] }
  ],
  sims: ['interval', 'fitcomp'], gens: ['maxhr', 'karvonen', 'wr1', 'rm1']
});

TOPICS.push({
  id: '1.7', unit: '1', area: 'phys', ref: 'Preparation and training methods', title: 'Environmental training, periodisation and goal setting', short: 'Altitude, heat and cold; macro/meso/micro cycles; SMART goals',
  summary: 'Training has to be planned across a season and adapted to the environment. Learn how altitude and hot or cold climates affect the body and how athletes prepare for them, how the training year is divided into macro-, meso- and microcycles with tapering and peaking, and how SMART goals improve performance.',
  spec: [
    'Environmental training: altitude training; training in and for different climates',
    'Periodisation: macro, meso and micro cycles and the structure of the training year',
    'Setting goals: SMART (specific, measurable, agreed, realistic, time-phased)',
    'Factors affecting the setting of goals and their links to sporting activities',
    'Relative benefits of short-, medium- and long-term goals'
  ],
  learn: [
    { h: 'Altitude training', html: `
<p>At altitude the air pressure is lower, so the <b>partial pressure of oxygen</b> is lower. Less oxygen diffuses into the blood, haemoglobin is less saturated, and performance in aerobic events falls.</p>
<p>After a few weeks at altitude (typically 2000–3000 m for 3–4 weeks) the kidneys release more <b>erythropoietin (EPO)</b>, which increases the number of <b>red blood cells</b> and the concentration of <b>haemoglobin</b>. On returning to sea level the athlete can carry more oxygen, improving aerobic capacity for a few weeks.</p>
<div class="grid g2"><div class="box good"><b class="lbl">Benefits</b><ul><li>more red blood cells and haemoglobin</li><li>greater oxygen-carrying capacity</li><li>better buffering of lactic acid</li></ul></div>
<div class="box warn"><b class="lbl">Drawbacks</b><ul><li>training intensity must drop at first — loss of fitness (detraining)</li><li>altitude sickness, poor sleep, dehydration</li><li>expensive; time away from home</li><li>benefits are lost within weeks of returning; individual responses vary</li></ul></div></div>
<p><b>“Live high, train low”</b> — living at altitude to gain the red cell adaptation but training lower down to keep intensity high — overcomes some drawbacks. Hypoxic tents and chambers simulate altitude at home.</p>` },
    { h: 'Training in and for different climates', html: `
<p><b>Heat:</b> the body loses heat mainly by sweating. In hot, humid conditions sweat evaporates poorly, so core temperature rises; blood is diverted to the skin, reducing blood to muscles; dehydration reduces plasma volume and stroke volume (cardiovascular drift: heart rate rises).</p>
<p><b>Heat acclimatisation</b> — training in the heat for 7–14 days (or in a heat chamber) causes: increased plasma volume, earlier onset of sweating, a greater sweat rate, less salt lost in sweat, and a lower heart rate at the same workload. Other strategies: pre-cooling (ice vests), hydration plans, light clothing, training at cooler times.</p>
<p><b>Cold:</b> muscles and nerves work more slowly and injury risk rises. Strategies: a thorough and longer warm-up, layered clothing that traps air, hats and gloves, keeping warm between efforts, carbohydrate intake (shivering uses energy).</p>` },
    { h: 'Periodisation', html: `
[[d:periodise]]
<p><b>Periodisation</b> divides training into cycles so that the athlete <b>peaks</b> for the main competition and avoids overtraining.</p>
<div class="tbl"><table><tr><th>Cycle</th><th>Length</th><th>Purpose</th></tr>
<tr><td><b>Macrocycle</b></td><td>a season or year (or a 4-year Olympic cycle)</td><td>the long-term goal, e.g. peak at the national championships</td></tr>
<tr><td><b>Mesocycle</b></td><td>usually 4–12 weeks</td><td>a block with one focus, e.g. building aerobic base, then power</td></tr>
<tr><td><b>Microcycle</b></td><td>about one week (a few days)</td><td>the pattern of individual sessions, including rest days</td></tr></table></div>
<p><b>Phases of the training year:</b></p><ul><li><b>Preparation (pre-season)</b> — general conditioning (high volume, lower intensity) then specific preparation (higher intensity, skills).</li>
<li><b>Competition</b> — maintain fitness, refine skills and tactics; <b>tapering</b> before the key event (volume reduced but intensity maintained so the athlete is fresh).</li>
<li><b>Transition</b> — active rest to recover physically and mentally while limiting reversibility.</li></ul>
<p><b>Double periodisation</b> has two peaks in one year (e.g. indoor and outdoor athletics seasons). Games players with long seasons use shorter cycles and aim to maintain fitness week to week.</p>` },
    { h: 'Setting goals: SMART', html: `
<div class="tbl"><table><tr><th>Letter</th><th>Meaning</th><th>Example for a 400 m runner</th></tr>
<tr><td><b>S</b>pecific</td><td>clear and related to the sport</td><td>improve my 400 m time</td></tr>
<tr><td><b>M</b>easurable</td><td>progress can be checked</td><td>from 52.4 s to 51.8 s</td></tr>
<tr><td><b>A</b>greed</td><td>agreed between performer and coach — builds ownership</td><td>set together at the review meeting</td></tr>
<tr><td><b>R</b>ealistic</td><td>challenging but achievable</td><td>0.6 s is achievable in one season at this level</td></tr>
<tr><td><b>T</b>ime-phased</td><td>a deadline</td><td>by the county championships in June</td></tr></table></div>
<p>Goals improve performance by directing attention, increasing effort and persistence, building confidence (self-efficacy) and reducing anxiety. Factors affecting goal setting: the performer’s ability and experience, personality (e.g. high NAch), injury, time and resources available, the level of competition.</p>
<ul><li><b>Short-term goals</b> (days–weeks) give frequent success and feedback — motivating, especially for beginners and in the cognitive phase.</li>
<li><b>Medium-term goals</b> (weeks–months) link sessions to the season plan (a mesocycle).</li>
<li><b>Long-term goals</b> (a season, several years) give direction and a vision. Short-term goals are the steps to the long-term goal.</li></ul>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why an endurance athlete might train at altitude before a sea-level championship. (4 marks)', s: ['At altitude the partial pressure of oxygen is lower, so less oxygen diffuses into the blood.', 'The body responds by releasing more EPO, increasing red blood cells and haemoglobin.', 'On return to sea level more oxygen can be carried to the working muscles.', 'Aerobic capacity/VO₂max improves, so the athlete can work at a higher intensity before fatigue — for a few weeks only, so timing is critical.'], a: 'Low pO₂ → EPO → more red cells → more O₂ carried at sea level.' }
  ],
  pitfalls: ['Saying there is “less oxygen” in the air at altitude — the percentage is the same (≈ 21%) but the partial pressure is lower.', 'Mixing up meso- and microcycles.', 'Describing tapering as stopping training — volume falls but intensity is kept.', 'Writing SMART as “specific, measurable, achievable…” — WJEC’s A is <b>agreed</b>.', 'Listing SMART letters without applying them to the performer in the question.'],
  cards: [
    ['Why is altitude training used?', 'Lower partial pressure of O₂ triggers EPO → more red blood cells and haemoglobin → greater O₂ transport at sea level.'],
    ['Three drawbacks of altitude training?', 'Lower training intensity/detraining, altitude sickness/dehydration, expense; benefits lost within weeks.'],
    ['“Live high, train low”?', 'Live at altitude for the adaptation, train lower down to maintain intensity.'],
    ['Adaptations to heat acclimatisation?', 'Greater plasma volume, earlier and greater sweating, less salt lost, lower HR at the same workload.'],
    ['Preparing for the cold?', 'Longer warm-up, layers, hats/gloves, staying warm between efforts.'],
    ['Macrocycle?', 'Long-term plan: a season, year or Olympic cycle.'], ['Mesocycle?', 'A 4–12 week block with one training focus.'], ['Microcycle?', 'About a week of sessions.'],
    ['Three phases of the training year?', 'Preparation, competition, transition.'], ['Tapering?', 'Reducing training volume while maintaining intensity before a key competition.'],
    ['SMART (WJEC)?', 'Specific, measurable, agreed, realistic, time-phased.'], ['Benefit of short-term goals?', 'Frequent success and feedback — motivation and confidence.']
  ],
  quiz: [
    { q: 'At altitude, the main problem for endurance athletes is the…', o: ['lower partial pressure of oxygen', 'lower percentage of oxygen in air', 'higher temperature', 'higher air resistance'], x: 'The fraction is ~21% but the pressure is lower.' },
    { q: 'Which hormone increases red blood cell production at altitude?', o: ['Erythropoietin (EPO)', 'Adrenaline', 'Insulin', 'Testosterone'], x: 'EPO is released by the kidneys.' },
    { q: 'A 4–12 week training block with one focus is a…', o: ['mesocycle', 'microcycle', 'macrocycle', 'transition phase'], x: 'Medium-length cycle.' },
    { q: 'Tapering involves…', o: ['reducing volume but maintaining intensity before competition', 'stopping all training for a month', 'increasing volume before competition', 'training only at altitude'], x: 'Fresh but sharp.' },
    { q: 'The transition phase is used for…', o: ['active rest and recovery', 'peaking', 'maximal strength work', 'competition'], x: 'Recover while limiting reversibility.' },
    { q: 'In WJEC’s SMART, “A” stands for…', o: ['agreed', 'achievable', 'accurate', 'aerobic'], x: 'Agreed between performer and coach.' },
    { q: 'Heat acclimatisation causes…', o: ['increased plasma volume and earlier sweating', 'fewer sweat glands', 'higher HR at the same workload', 'lower plasma volume'], x: 'Better cooling and cardiovascular stability.' },
    { q: 'Double periodisation is used by athletes who…', o: ['need two peaks in one year', 'train twice a day', 'play two sports', 'use two coaches'], x: 'E.g. indoor and outdoor seasons.' },
    { q: 'Short-term goals are most useful for…', o: ['beginners who need frequent success', 'replacing long-term goals', 'avoiding feedback', 'elite athletes only'], x: 'They give regular reinforcement.' }
  ],
  exam: [
    { q: 'Define the terms macrocycle and microcycle. [2]', m: 2, ms: ['macrocycle: long-term training period / a season, year or Olympic cycle with a long-term goal', 'microcycle: short period of about a week / a few days of sessions'] },
    { q: 'A triathlete is preparing for a championship in a hot climate.', parts: [
      { q: 'Explain two effects of exercising in the heat on performance. [4]', m: 4, ms: ['sweating → dehydration → reduced plasma volume', 'reduced stroke volume / increased HR (cardiovascular drift) → earlier fatigue', 'core temperature rises / heat illness', 'blood diverted to skin → less to muscles → reduced performance / concentration'] },
      { q: 'Describe two strategies she could use to prepare for the heat. [2]', m: 2, ms: ['heat acclimatisation 7–14 days / heat chamber', 'hydration strategy / pre-cooling (ice vest) / light clothing / race at cooler time'] },
      { q: 'Using SMART principles, explain how she could set a goal for the championship. [5]', m: 5, ms: ['specific: e.g. improve the run leg of the triathlon', 'measurable: e.g. from 38:30 to 37:45 for 10 km', 'agreed with her coach — ownership / commitment', 'realistic: challenging but achievable for her level', 'time-phased: by the championship date / checked at the end of each mesocycle'] }
    ] },
    { q: 'Evaluate altitude training as a method of preparing for an endurance event at sea level. [8]', m: 8, lv: true, ms: ['lower partial pressure of O₂ at altitude', 'EPO ↑ → more red blood cells / haemoglobin', 'greater O₂-carrying capacity → higher VO₂max / better buffering at sea level', 'live high, train low / hypoxic tents overcome loss of intensity', 'drawbacks: reduced training intensity / detraining at first', 'altitude sickness, dehydration, poor sleep', 'cost and time away; benefits lost within weeks — timing crucial; individual responses vary', 'judgement: useful for elite endurance athletes if timed and managed well; less value for anaerobic athletes'], tag: 'ext' }
  ],
  sims: ['periodise', 'altitude'], gens: []
});

TOPICS.push({
  id: '1.8', unit: '1', area: 'phys', ref: 'Energy systems and their application to training principles', title: 'Energy systems and principles of training', short: 'ATP, ATP-PC, anaerobic and aerobic glycolysis; thresholds, VO₂max; specificity, overload, reversibility, variance',
  summary: 'Muscles run on ATP, which is only stored for a couple of seconds. It is rebuilt by three energy systems that work together along a continuum, their contribution depending on intensity and duration. Learn how each system works, how VO₂max and the anaerobic threshold matter, and how to apply the principles of training when planning programmes.',
  spec: [
    'Role of adenosine triphosphate (ATP) and how it is restored using creatine phosphate (ATP-PC system), anaerobic glycolysis (lactic acid system) and aerobic glycolysis',
    'The predominant energy system used in relation to the type of exercise',
    'The inter-changing between thresholds depending on intensity and duration and the fitness of the performer',
    'The importance of knowledge of VO₂max and the anaerobic threshold',
    'Principles of training: specificity, progressive overload, reversibility and variance',
    'Applying principles using % of maximum effort and precise exercise and recovery times when designing programmes'
  ],
  learn: [
    { h: 'ATP: the energy currency', html: `
[[d:atp]]
<p><b>ATP (adenosine triphosphate)</b> is the only molecule muscles can use directly for contraction. The enzyme <b>ATPase</b> breaks the bond to the last phosphate:</p>
<p>$"ATP" → "ADP" + "P"_i + "energy"$</p>
<p>Muscles store only enough ATP for about <b>2–3 seconds</b> of maximal work, so ATP must be <b>resynthesised</b> continually by joining ADP and phosphate again. The energy for this comes from one of three systems.</p>` },
    { h: 'The ATP-PC (alactic) system', html: `
<p><b>Creatine phosphate (PC)</b> is stored in the muscle. The enzyme <b>creatine kinase</b> breaks it down, and the energy released resynthesises ATP:</p>
<p>$"PC" → "P"_i + "C" + "energy"$ &nbsp; then &nbsp; $"energy" + "ADP" + "P"_i → "ATP"$</p>
<ul><li>Anaerobic; happens in the sarcoplasm; very fast — one PC gives one ATP.</li><li>Lasts about <b>8–10 seconds</b> of maximal work.</li><li>No fatiguing by-products.</li><li>Recovery: about 50% of PC is restored in 30 s and almost 100% in <b>2–3 minutes</b> (using aerobic energy).</li><li>Used in: 100 m, shot put, a tennis serve, a tackle.</li></ul>` },
    { h: 'Anaerobic glycolysis (the lactic acid system)', html: `
<p>Glycogen is broken down to glucose, then glucose to <b>pyruvic acid</b> in a series of enzyme-controlled steps (key enzymes glycogen phosphorylase and phosphofructokinase, PFK). Without enough oxygen, pyruvic acid is converted to <b>lactic acid</b> (lactate dehydrogenase). This yields <b>2 ATP per molecule of glucose</b>.</p>
<ul><li>Anaerobic; in the sarcoplasm; fast, but less energy per glucose.</li><li>Dominant from about <b>10 seconds to 2–3 minutes</b> of high-intensity work (e.g. 400 m, a 200 m swim, a long rally).</li><li>Lactic acid releases <b>hydrogen ions</b>, lowering pH, inhibiting enzymes and causing fatigue and pain.</li></ul>` },
    { h: 'The aerobic system', html: `
<p>With oxygen available, glucose (and fatty acids) are broken down completely in three stages:</p>
<ol><li><b>Glycolysis</b> (sarcoplasm) — glucose → pyruvic acid, 2 ATP.</li><li><b>Krebs cycle</b> (mitochondria) — produces carbon dioxide, hydrogen and 2 ATP.</li><li><b>Electron transport chain</b> (mitochondria) — hydrogen combines with oxygen to form water; about 34 ATP.</li></ol>
<p>Total: about <b>38 ATP per glucose</b>. Fats (via beta-oxidation) give even more ATP but need more oxygen, so they are used at lower intensities. The aerobic system is slow to start and cannot supply energy fast enough for maximal work, but it provides almost unlimited energy with no fatiguing by-products (CO₂ and water). It dominates in exercise lasting more than about 2–3 minutes at submaximal intensity.</p>` },
    { h: 'The energy continuum and thresholds', html: `
[[d:energycont]]
<p>All three systems work <b>all the time</b>; what changes is which one <b>predominates</b>. The point where one system’s stores are exhausted and another takes over is a <b>threshold</b> (e.g. the ATP-PC/lactic threshold at about 10 s). In team games performers <b>switch between systems</b> as intensity changes — sprinting (ATP-PC), a long run with the ball (lactic), jogging back (aerobic, which also restores PC).</p>
<p>Which system predominates depends on <b>intensity</b> (the main factor), <b>duration</b>, the <b>fitness</b> of the performer (a trained athlete stays aerobic at a higher intensity), and the availability of oxygen and fuel.</p>
<div class="box why"><b class="lbl">VO₂max and the anaerobic threshold</b><p><b>VO₂max</b> is the maximum volume of oxygen that can be taken in, transported and used per minute (ml/kg/min). Untrained adults ≈ 35–45; elite endurance athletes 70–85. It sets the ceiling for aerobic work.</p><p>The <b>anaerobic (lactate) threshold</b> is the intensity at which lactic acid starts to accumulate faster than it is removed (OBLA ≈ 4 mmol/L). Untrained ≈ 50–60% of VO₂max; trained endurance athletes ≈ 70–85%. A higher threshold lets an athlete sustain a faster pace without fatigue — it often predicts endurance performance better than VO₂max. Coaches use both to set training intensities.</p></div>` },
    { h: 'Principles of training', html: `
<div class="tbl"><table><tr><th>Principle</th><th>Meaning</th><th>Applied</th></tr>
<tr><td><b>Specificity</b></td><td>training must match the demands of the sport: energy system, muscles, movements, fibre types</td><td>a 400 m runner does lactate intervals at race pace; a swimmer trains in the pool</td></tr>
<tr><td><b>Progressive overload</b></td><td>gradually increase the demands (FITT: frequency, intensity, time, type) so the body keeps adapting</td><td>add 2.5 kg a week; move from 70% to 75% of max HR</td></tr>
<tr><td><b>Reversibility</b></td><td>fitness gains are lost when training stops or reduces (“use it or lose it”); aerobic gains are lost faster than strength</td><td>injury or the off-season → plan maintenance work</td></tr>
<tr><td><b>Variance</b></td><td>vary the training to avoid boredom (tedium), overuse injury and plateaus</td><td>alternate running with cycling, swimming or circuits</td></tr></table></div>
<p>Precise design uses <b>% of maximum effort</b> (e.g. % 1RM, % max HR, % of best time) and exact <b>work and recovery times</b> based on the energy system being targeted (see interval training in 1.6).</p>` }
  ],
  eqs: [['"ATP" → "ADP" + "P"_i + "energy"', 'ATP breakdown (ATPase)'], ['"PC" → "P"_i + "C" + "energy"', 'creatine phosphate breakdown (creatine kinase)'], ['"glucose" + "O"_2 → "CO"_2 + "H"_2"O" + "energy (≈38 ATP)"', 'aerobic respiration']],
  worked: [
    { q: 'Explain which energy systems a netball centre uses during a match. (4 marks)', s: ['Short sprints to receive a centre pass or intercept (under ~10 s, maximal) use the <b>ATP-PC system</b>.', 'Repeated high-intensity efforts without recovery, e.g. a long passage of play, use <b>anaerobic glycolysis</b>, producing lactic acid.', 'Most of the match (60 minutes, jogging and walking between efforts) is fuelled by the <b>aerobic system</b>.', 'The aerobic system also restores PC during low-intensity periods, so she switches between thresholds depending on intensity.'], a: 'All three, switching with intensity; aerobic predominates overall.' }
  ],
  pitfalls: ['Saying one system “switches off” when another takes over — all three contribute; one predominates.', 'Stating that the ATP-PC system produces lactic acid — it has no fatiguing by-products.', 'Confusing VO₂max (maximum oxygen uptake) with the anaerobic threshold (the intensity where lactate accumulates).', 'Writing “progressive overload” without saying how (FITT) and by how much.', 'Forgetting that reversibility also applies to injured athletes, and that variance prevents tedium.'],
  cards: [
    ['Why must ATP be resynthesised?', 'Stores last only 2–3 s of maximal exercise.'], ['Enzyme that breaks down ATP?', 'ATPase.'], ['Enzyme that breaks down PC?', 'Creatine kinase.'],
    ['Duration of the ATP-PC system?', 'About 8–10 s of maximal work.'], ['PC recovery time?', '~50% in 30 s; ~100% in 2–3 minutes.'], ['ATP from anaerobic glycolysis?', '2 ATP per glucose.'],
    ['By-product of anaerobic glycolysis?', 'Lactic acid (H⁺ ions lower pH → fatigue).'], ['Three stages of the aerobic system?', 'Glycolysis, Krebs cycle, electron transport chain.'], ['ATP from aerobic breakdown of glucose?', 'About 38.'],
    ['By-products of the aerobic system?', 'Carbon dioxide and water.'], ['VO₂max?', 'Maximum volume of O₂ taken in, transported and used per minute (ml/kg/min).'],
    ['Anaerobic (lactate) threshold?', 'Intensity at which lactic acid accumulates faster than it is removed (OBLA ≈ 4 mmol/L).'], ['Main factor deciding the predominant system?', 'Intensity (then duration and fitness).'],
    ['Specificity?', 'Training must match the demands of the sport.'], ['Progressive overload?', 'Gradually increasing demands (FITT) so adaptation continues.'], ['Reversibility?', 'Gains are lost when training stops.'], ['Variance?', 'Varying training to avoid boredom, overuse and plateaus.']
  ],
  quiz: [
    { q: 'How long do stored ATP supplies last during maximal work?', o: ['2–3 seconds', '10 seconds', '1 minute', '3 minutes'], x: 'Very small store.' },
    { q: 'The ATP-PC system is the main supplier during…', o: ['a 60 m sprint', 'a 1500 m race', 'a marathon', 'a 400 m race'], x: 'Maximal work under ~10 s.' },
    { q: 'Anaerobic glycolysis yields how many ATP per glucose?', o: ['2', '1', '38', '34'], x: 'Only partial breakdown.' },
    { q: 'Where do the Krebs cycle and electron transport chain take place?', o: ['Mitochondria', 'Sarcoplasm', 'Blood plasma', 'Liver only'], x: 'Aerobic stages happen in mitochondria.' },
    { q: 'Which system has no fatiguing by-products and is used for 5 s efforts?', o: ['ATP-PC', 'Lactic acid system', 'Aerobic system', 'Beta-oxidation'], x: 'Creatine and phosphate are recycled.' },
    { q: 'Full recovery of PC stores takes about…', o: ['2–3 minutes', '10 seconds', '30 minutes', '24 hours'], x: '50% in 30 s, ~100% in 3 min.' },
    { q: 'A trained endurance athlete’s anaerobic threshold is typically around…', o: ['70–85% of VO₂max', '20–30% of VO₂max', '100% of VO₂max', '40% of VO₂max'], x: 'Training raises the threshold.' },
    { q: 'Adding 5 kg to a lift each fortnight applies…', o: ['progressive overload', 'reversibility', 'variance', 'specificity'], x: 'Gradually increasing load.' },
    { q: 'Cross-training in the pool to avoid boredom applies…', o: ['variance', 'overload', 'specificity', 'reversibility'], x: 'Variety prevents tedium.' },
    { q: 'The main factor determining which energy system predominates is…', o: ['intensity of exercise', 'time of day', 'body mass', 'age'], x: 'Intensity first, then duration.' },
    { q: 'Lactic acid causes fatigue because…', o: ['hydrogen ions lower pH and inhibit enzymes', 'it uses up oxygen', 'it is stored in bones', 'it increases PC stores'], x: 'Acidity disrupts enzyme activity.' }
  ],
  exam: [
    { q: 'Explain how ATP is resynthesised by the ATP-PC system. [3]', m: 3, ms: ['creatine phosphate broken down by creatine kinase', 'into creatine and phosphate, releasing energy', 'energy used to rejoin ADP and Pi → ATP (1 PC : 1 ATP); anaerobic, in the sarcoplasm'] },
    { q: 'Define VO₂max and explain why knowledge of it is important to a coach. [3]', m: 3, ms: ['maximum volume of oxygen taken in, transported and used per minute', 'indicates aerobic capacity / endurance potential', 'used to set training intensities (% VO₂max) / monitor improvement / talent identification'] },
    { q: 'A 400 m swimmer trains using interval training.', parts: [
      { q: 'Identify the energy system that predominates in a 400 m swim lasting about 4 minutes and justify your answer. [2]', m: 2, ms: ['aerobic system (with large anaerobic glycolysis contribution)', 'duration over 2–3 minutes at high but submaximal intensity'] },
      { q: 'Using the principles of training, design an interval session for the swimmer. Include precise values. [5]', m: 5, ms: ['specificity: in the pool, front crawl / race stroke', 'intensity: e.g. 80–90% of race pace / % of max HR', 'work: e.g. 8 × 100 m or 2–4 min efforts', 'recovery: e.g. 1:1 or 30 s rest / precise times', 'progressive overload: e.g. add a rep or cut recovery each week; variance: vary distances/strokes'] },
      { q: 'Discuss how the swimmer’s energy systems interact during the race. [6]', m: 6, lv: true, ms: ['all systems contribute throughout — the energy continuum', 'start/dive and first strokes: ATP-PC predominates', 'then anaerobic glycolysis — lactic acid builds', 'aerobic system predominates for most of the race once O₂ supply increases', 'final sprint: anaerobic glycolysis rises again → fatigue from H⁺ ions', 'fitness/anaerobic threshold determines how fast she can swim before lactate accumulates; judgement'] }
    ] },
    { q: 'Explain the principle of reversibility and suggest how an injured footballer could limit its effects. [3]', m: 3, ms: ['reversibility: fitness gains are lost when training stops/reduces', 'aerobic adaptations lost faster (weeks) than strength', 'e.g. cross-training that avoids the injury: swimming / upper-body ergometer / aqua-jogging'] }
  ],
  sims: ['energy', 'threshold'], gens: ['pcrecover', 'vo2rel']
});

TOPICS.push({
  id: '1.9', unit: '1', area: 'phys', ref: 'Diet and nutrition and performance', title: 'Diet, nutrition and hydration', short: 'Balanced diet, energy balance, GI, fuel use, pre-competition meals, sports drinks',
  summary: 'What athletes eat and drink changes how well they train and compete. Learn the proportions of a balanced diet, energy balance, the roles of carbohydrate, fat and protein, the glycaemic index, how fuel use changes with intensity and fitness, what to eat before, during and after exercise, and how to stay hydrated with isotonic, hypotonic and hypertonic drinks.',
  spec: [
    'Constituents of a balanced diet: relative proportions of carbohydrate, fat and protein',
    'Kilojoules/calorific intake and energy balance for health and performance',
    'Functions of carbohydrates, fats and proteins in relation to health and sport-specific performance',
    'Glycaemic index (GI): high, medium and low GI foods and their use in nutrition programmes',
    'Variations in diets for different activities, sports and types of training',
    'Food fuel usage with different exercise intensities, durations and fitness levels',
    'Pre-competition meals; what to consume before, during and after exercise',
    'Hydration in sport and the effects of dehydration; isotonic, hypotonic and hypertonic drinks; volumes and timings'
  ],
  learn: [
    { h: 'A balanced diet and energy balance', html: `
<div class="tbl"><table><tr><th>Nutrient</th><th>% of energy (general)</th><th>Athletes</th><th>Energy</th></tr>
<tr><td>Carbohydrate</td><td>≈ 50–55%</td><td>≈ 55–65% (endurance higher)</td><td>17 kJ/g (4 kcal)</td></tr>
<tr><td>Fat</td><td>≈ 30–35% (≤ 35%)</td><td>≈ 20–30%</td><td>37 kJ/g (9 kcal)</td></tr>
<tr><td>Protein</td><td>≈ 10–15%</td><td>≈ 12–20% (strength higher)</td><td>17 kJ/g (4 kcal)</td></tr></table></div>
<p>A balanced diet also contains vitamins, minerals, fibre and water. <b>Energy balance</b>: if energy intake = energy expenditure, body mass stays the same. Intake &gt; expenditure → weight gain (useful for a rugby prop building muscle); intake &lt; expenditure → weight loss (a boxer making weight). Energy expenditure = basal metabolic rate + energy used in daily activity and training; elite endurance athletes may need 15 000–25 000 kJ a day.</p>` },
    { h: 'Carbohydrates, fats and proteins in sport', html: `
<div class="tbl"><table><tr><th>Nutrient</th><th>Function</th><th>In sport</th></tr>
<tr><td><b>Carbohydrate</b></td><td>main energy source; stored as glycogen in muscles and liver</td><td>fuel for anaerobic glycolysis and high-intensity aerobic work; low glycogen = fatigue (“hitting the wall”). Needs: 5–7 g/kg/day for moderate training, 8–10 g/kg for heavy endurance training.</td></tr>
<tr><td><b>Fat</b></td><td>energy store; insulation; transports fat-soluble vitamins; cell membranes</td><td>main fuel at low intensity and in long events; spares glycogen. Too much saturated fat raises cholesterol and body fat.</td></tr>
<tr><td><b>Protein</b></td><td>growth and repair of muscle and tissue; enzymes and hormones</td><td>recovery and hypertrophy. Sedentary 0.75 g/kg/day; endurance ≈ 1.2–1.4 g/kg; strength ≈ 1.6–1.7 g/kg. Only a minor fuel (when glycogen is very low).</td></tr></table></div>` },
    { h: 'Glycaemic index', html: `
[[d:gicurve]]
<p>The <b>glycaemic index (GI)</b> ranks carbohydrate foods by how quickly they raise blood glucose compared with pure glucose (GI 100).</p>
<div class="tbl"><table><tr><th>GI</th><th>Value</th><th>Examples</th><th>Use</th></tr>
<tr><td>High</td><td>≥ 70</td><td>glucose, sports drinks, white bread, jelly sweets, baked potato</td><td>during long exercise and immediately after, for rapid glucose and glycogen replacement</td></tr>
<tr><td>Medium</td><td>56–69</td><td>bananas, honey, basmati rice, porridge oats</td><td>snacks; general meals</td></tr>
<tr><td>Low</td><td>≤ 55</td><td>pasta, wholegrain bread, lentils, beans, apples</td><td>pre-competition meal (2–4 h before): slow, steady release; avoids a blood-sugar dip</td></tr></table></div>
<p>High-GI food eaten just before exercise can cause a rapid rise then fall in blood glucose (rebound hypoglycaemia), bringing early fatigue.</p>` },
    { h: 'Fuel use, diets for different sports, and timing', html: `
<p><b>Fuel usage:</b> at rest and low intensity, <b>fat</b> provides most energy; as intensity rises, <b>carbohydrate</b> takes over (the “crossover point”), and at maximal intensity almost all energy comes from carbohydrate (and PC). As <b>duration</b> increases and glycogen runs low, fat use rises. <b>Trained</b> athletes use more fat at the same absolute workload, sparing glycogen.</p>
<div class="tbl"><table><tr><th>When</th><th>What and why</th></tr>
<tr><td>Pre-competition meal (3–4 h before)</td><td>high carbohydrate, low GI; low fat and fibre (slow to digest, may cause discomfort); moderate protein; familiar foods; fluid</td></tr>
<tr><td>Snack 1–2 h before</td><td>small, easily digested carbohydrate (a banana)</td></tr>
<tr><td>During (events &gt; 60–90 min)</td><td>30–60 g carbohydrate per hour — high GI (sports drinks, gels) — plus fluid</td></tr>
<tr><td>After (within 30 min–2 h)</td><td>high-GI carbohydrate to restore glycogen (glycogen synthesis is fastest in this “window”) plus protein for repair (carbohydrate:protein ≈ 3:1–4:1); rehydrate</td></tr></table></div>
<p><b>Diet varies by sport:</b> endurance athletes need more carbohydrate; power athletes need more protein and total energy; weight-category and aesthetic sports (boxing, gymnastics) must control energy intake; games players need carbohydrate for repeated sprints.</p>` },
    { h: 'Hydration and sports drinks', html: `
<p>Sweat losses can reach 1–2 litres an hour. Losing just <b>2% of body mass</b> as fluid reduces performance.</p>
<p><b>Effects of dehydration:</b> reduced plasma volume → thicker, more viscous blood → reduced venous return and stroke volume → heart rate rises (cardiovascular drift); reduced sweating → core temperature rises (heat exhaustion); reduced concentration, slower reactions and poorer decisions; cramp.</p>
<div class="tbl"><table><tr><th>When</th><th>Guideline</th></tr>
<tr><td>Before</td><td>about 5–7 ml/kg (roughly 400–600 ml) 2–4 hours before; check urine is pale</td></tr>
<tr><td>During</td><td>about 150–350 ml every 15–20 minutes, depending on sweat rate</td></tr>
<tr><td>After</td><td>about 1.5 litres for every 1 kg of body mass lost (150%), with some sodium</td></tr></table></div>
<div class="tbl"><table><tr><th>Drink</th><th>Concentration</th><th>Use</th></tr>
<tr><td><b>Hypotonic</b></td><td>lower than body fluids (&lt; 4–6 g carbohydrate/100 ml)</td><td>fastest fluid absorption, little energy — for rehydration when energy is not needed (jockeys, gymnasts)</td></tr>
<tr><td><b>Isotonic</b></td><td>the same as body fluids (6–8 g/100 ml)</td><td>fluid <i>and</i> energy — most sports; during endurance and team games</td></tr>
<tr><td><b>Hypertonic</b></td><td>higher than body fluids (&gt; 8 g/100 ml)</td><td>energy/glycogen replacement after exercise or in ultra-endurance; absorbed slowly, so not ideal for rehydration</td></tr></table></div>` }
  ],
  eqs: [['"energy balance": "intake" = "expenditure"', 'weight stable'], ['"fluid to drink after" ≈ 1.5 × "mass lost (kg)" "litres"', 'rehydration'], ['"% dehydration" = "mass lost"/"starting mass" × 100', 'fluid loss as % body mass']],
  worked: [
    { q: 'A 70 kg runner weighs 68.6 kg after a training run. Calculate the percentage of body mass lost and how much fluid she should drink to rehydrate. (3 marks)', s: ['Mass lost = 70 − 68.6 = 1.4 kg.', '% loss = 1.4 ÷ 70 × 100 = <b>2%</b> — enough to impair performance.', 'Rehydration ≈ 1.5 × 1.4 = <b>2.1 litres</b>, drunk over the next few hours.'], a: '2%; about 2.1 L.' },
    { q: 'Explain the timing and content of a marathon runner’s pre-race meal. (4 marks)', s: ['Eat 3–4 hours before the race, so food is digested and blood flow is not diverted to the gut.', 'High in carbohydrate to top up liver and muscle glycogen.', 'Low GI (pasta, porridge, wholegrain bread) for a slow, steady release of glucose.', 'Low in fat and fibre (slow digestion, discomfort) and familiar foods; include fluid.'], a: '3–4 h before; high-carbohydrate, low-GI, low fat/fibre, fluid.' }
  ],
  pitfalls: ['Saying fat is the main fuel in high-intensity exercise — carbohydrate is.', 'Recommending high-GI food just before exercise (risk of a blood-sugar crash).', 'Mixing up hypotonic (dilute, fast rehydration) and hypertonic (concentrated, energy).', 'Saying protein is a major fuel for exercise.', 'Giving vague hydration advice — use volumes and timings.'],
  cards: [
    ['Energy in 1 g of carbohydrate, fat and protein?', '17 kJ, 37 kJ and 17 kJ (4, 9, 4 kcal).'], ['Energy balance?', 'Intake equals expenditure, so body mass is stable.'], ['Main fuel at low intensity?', 'Fat.'], ['Main fuel at high intensity?', 'Carbohydrate (glycogen).'],
    ['Protein needs of a strength athlete?', 'About 1.6–1.7 g/kg/day.'], ['High GI value?', '70 or more.'], ['Low GI value?', '55 or less.'], ['Pre-competition meal?', '3–4 h before; high carbohydrate, low GI, low fat and fibre, familiar.'],
    ['Post-exercise nutrition?', 'Within 30 min–2 h: high-GI carbohydrate + protein (≈3:1), and fluid.'], ['Dehydration that impairs performance?', 'About 2% of body mass.'], ['Rehydration volume after exercise?', 'About 1.5 L per kg lost.'],
    ['Isotonic drink?', 'Same concentration as body fluids (6–8 g/100 ml): fluid and energy.'], ['Hypotonic drink?', 'More dilute than body fluids: fastest rehydration.'], ['Hypertonic drink?', 'More concentrated: energy/glycogen replacement, slow absorption.'],
    ['Why does dehydration raise heart rate?', 'Lower plasma volume → lower venous return and stroke volume → HR rises to maintain cardiac output.']
  ],
  quiz: [
    { q: 'Which provides the most energy per gram?', o: ['Fat', 'Carbohydrate', 'Protein', 'Water'], x: '37 kJ/g.' },
    { q: 'A low-GI food is best eaten…', o: ['3–4 hours before competition', 'during the final sprint', 'immediately after exercise to refuel fast', 'never'], x: 'Slow, steady glucose release.' },
    { q: 'Which drink gives the fastest rehydration?', o: ['Hypotonic', 'Hypertonic', 'Isotonic', 'A protein shake'], x: 'Most dilute → absorbed fastest.' },
    { q: 'An isotonic drink contains roughly…', o: ['6–8 g carbohydrate per 100 ml', '20 g per 100 ml', 'no carbohydrate', '1 g per 100 ml'], x: 'Same concentration as body fluids.' },
    { q: 'As exercise intensity increases, the proportion of energy from carbohydrate…', o: ['increases', 'decreases', 'stays the same', 'falls to zero'], x: 'Crossover from fat to carbohydrate.' },
    { q: 'Losing 2% of body mass through sweat will…', o: ['reduce performance', 'improve performance by reducing weight', 'have no effect', 'increase plasma volume'], x: 'Cardiovascular and thermoregulatory strain.' },
    { q: 'After exercise the athlete should drink about…', o: ['1.5 L per kg of body mass lost', '0.5 L per kg lost', 'nothing for 2 hours', 'only hypertonic drinks'], x: '150% of losses.' },
    { q: 'The main role of protein in an athlete’s diet is…', o: ['growth and repair of muscle', 'main energy source', 'insulation', 'fast rehydration'], x: 'Repair and adaptation.' },
    { q: 'Trained endurance athletes use more fat at the same workload, which…', o: ['spares glycogen', 'raises lactate', 'lowers VO₂max', 'causes dehydration'], x: 'Delays fatigue.' },
    { q: 'Energy intake greater than expenditure leads to…', o: ['weight gain', 'weight loss', 'no change', 'dehydration'], x: 'Positive energy balance.' }
  ],
  exam: [
    { q: 'State the recommended percentage of energy an endurance athlete should obtain from carbohydrate. [1]', m: 1, ms: ['about 55–65% (accept 60%+)'] },
    { q: 'Explain the difference between isotonic and hypotonic sports drinks and when each should be used. [4]', m: 4, ms: ['isotonic: same concentration as body fluids / 6–8 g carbohydrate per 100 ml', 'gives fluid and energy — during endurance events / games', 'hypotonic: lower concentration than body fluids', 'fastest rehydration with little energy — e.g. jockeys / gymnasts / short sessions'] },
    { q: 'A rugby player loses 1.8 kg of body mass during an 80-minute match.', parts: [
      { q: 'Calculate how much fluid he should drink after the match. [1]', m: 1, ms: ['1.5 × 1.8 = 2.7 litres'] },
      { q: 'Explain how dehydration could affect his performance late in the match. [4]', m: 4, ms: ['reduced plasma volume / increased blood viscosity', 'reduced venous return / stroke volume → increased HR / cardiovascular drift', 'reduced sweating → higher core temperature → earlier fatigue', 'poorer concentration / decision making / reaction time'] },
      { q: 'Describe what he should eat and drink in the two hours after the match, justifying your answer. [3]', m: 3, ms: ['high-GI carbohydrate soon after (within 30 min–2 h) — fastest glycogen resynthesis', 'protein (e.g. 3:1 carbohydrate:protein) — muscle repair after collisions', 'fluid with sodium / 1.5 L per kg lost — rehydration'] }
    ] },
    { q: 'Discuss how knowledge of the glycaemic index and food fuel usage can help a triathlete plan her nutrition. [8]', m: 8, lv: true, ms: ['GI ranks how fast carbohydrate raises blood glucose; high ≥70, low ≤55', 'pre-race meal: low GI 3–4 h before for sustained release / avoid rebound hypoglycaemia', 'during race: high-GI drinks/gels, 30–60 g carbohydrate per hour to maintain blood glucose', 'after: high-GI carbohydrate + protein to restore glycogen quickly', 'fuel use: fat predominates at low intensity; carbohydrate as intensity rises (crossover)', 'long duration → glycogen depletion → fat use rises but pace falls ("hitting the wall")', 'trained athlete spares glycogen — daily carbohydrate 8–10 g/kg in heavy training / carbo-loading', 'judgement: plan must match race intensity and duration; practise in training'], tag: 'ext' }
  ],
  sims: ['fuel', 'hydration', 'gi'], gens: ['dehyd', 'rehyd', 'energybal', 'carbneed']
});
