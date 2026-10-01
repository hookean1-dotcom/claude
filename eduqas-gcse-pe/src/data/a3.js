/* ==========================================================
   KEY AREA 3 · MOVEMENT ANALYSIS
   Muscle contractions and antagonistic pairs; levers; planes and axes; sports technology
   ========================================================== */
TOPICS.push({
  id: '3.1', unit: '3', area: 'move', ref: 'Muscle contractions', title: 'Muscle contractions and antagonistic pairs', short: 'Isotonic (concentric, eccentric), isometric; agonist and antagonist',
  summary: 'How muscles contract: isotonic contractions (concentric — shortening; eccentric — lengthening) and isometric contractions (no change in length). How muscles work in antagonistic pairs, with the agonist (prime mover) contracting while the antagonist relaxes.',
  spec: [
    'Isotonic contractions including concentric and eccentric',
    'Isometric contractions',
    'Antagonistic muscle action: agonists (prime movers) and antagonists'
  ],
  learn: [
    { h: 'Types of contraction', html: `
<div class="tbl"><table><tr><th>Type</th><th>What happens</th><th>Example</th></tr>
<tr><td><b>Isotonic — concentric</b></td><td>The muscle <b>shortens</b> as it contracts, causing movement.</td><td>Biceps in the upward phase of a bicep curl; quadriceps as you stand up from a squat.</td></tr>
<tr><td><b>Isotonic — eccentric</b></td><td>The muscle <b>lengthens</b> while still under tension — it controls (brakes) a movement, usually against gravity.</td><td>Biceps in the downward phase of a curl; quadriceps when landing or lowering into a squat.</td></tr>
<tr><td><b>Isometric</b></td><td>The muscle contracts but <b>stays the same length</b>; there is no movement.</td><td>Holding a plank; a gymnast’s handstand; a rugby scrum that is not moving; holding a wall sit.</td></tr></table></div>
<div class="box tip"><b class="lbl">Spot the eccentric phase</b><p>If a body part is moving <b>downwards with gravity in a controlled way</b>, the working muscle is usually contracting eccentrically — e.g. lowering in a press-up (triceps), landing from a jump (quadriceps).</p></div>` },
    { h: 'Antagonistic pairs', html: `
[[d:antag]]
<p>Muscles can only <b>pull</b>, so they work in pairs on opposite sides of a joint.</p>
<ul><li>The <b>agonist</b> (prime mover) is the muscle that contracts to cause the movement.</li><li>The <b>antagonist</b> relaxes (lengthens) to allow the movement.</li></ul>
<p>When the movement reverses, the roles swap.</p>
<div class="tbl"><table><tr><th>Joint</th><th>Movement</th><th>Agonist</th><th>Antagonist</th></tr>
<tr><td>Elbow</td><td>flexion (bicep curl up)</td><td>biceps</td><td>triceps</td></tr>
<tr><td>Elbow</td><td>extension (chest pass)</td><td>triceps</td><td>biceps</td></tr>
<tr><td>Knee</td><td>extension (kicking)</td><td>quadriceps</td><td>hamstrings</td></tr>
<tr><td>Knee</td><td>flexion (preparing to kick)</td><td>hamstrings</td><td>quadriceps</td></tr>
<tr><td>Shoulder</td><td>abduction (raising arm sideways)</td><td>deltoid</td><td>latissimus dorsi</td></tr>
<tr><td>Shoulder</td><td>adduction (pulling arm down, front crawl)</td><td>latissimus dorsi</td><td>deltoid</td></tr>
<tr><td>Hip</td><td>extension (driving off in a sprint)</td><td>gluteals</td><td>hip flexors</td></tr>
<tr><td>Ankle</td><td>plantar flexion (push off)</td><td>gastrocnemius</td><td>tibialis anterior</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Identify the agonist and antagonist at the knee as a footballer kicks the ball. (2 marks)', s: ['Agonist: quadriceps (extending the knee).', 'Antagonist: hamstrings (relaxing).'], a: 'Quadriceps (agonist); hamstrings (antagonist).' },
    { q: 'Explain the type of contraction in the quadriceps when landing from a jump. (2 marks)', s: ['Eccentric (isotonic) contraction.', 'The muscle lengthens under tension to control the bending of the knee and absorb the landing.'], a: 'Eccentric — lengthens under tension to control landing.' }
  ],
  pitfalls: ['Saying the triceps is the agonist in the downward phase of a curl — the biceps is still working (eccentrically).', 'Saying isometric means “no contraction” — the muscle IS contracting, but its length does not change.', 'Saying the antagonist “contracts in the opposite direction” — it relaxes/lengthens.', 'Forgetting that concentric and eccentric are both ISOTONIC.'],
  cards: [
    ['Concentric contraction?', 'Muscle shortens under tension.'], ['Eccentric contraction?', 'Muscle lengthens under tension (controlling movement).'], ['Isometric contraction?', 'Muscle contracts without changing length — no movement.'],
    ['Isotonic contraction?', 'A contraction that causes movement — concentric or eccentric.'], ['Agonist?', 'The prime mover — the muscle that contracts to cause movement.'], ['Antagonist?', 'The muscle that relaxes to allow the movement.'],
    ['Agonist for elbow flexion?', 'Biceps (antagonist: triceps).'], ['Agonist for knee extension?', 'Quadriceps (antagonist: hamstrings).'], ['Example of isometric contraction?', 'Holding a plank or handstand.'],
    ['Why do muscles work in pairs?', 'Muscles can only pull, not push.']
  ],
  quiz: [
    { q: 'A muscle shortening as it contracts is…', o: ['concentric', 'eccentric', 'isometric', 'antagonistic'], x: 'Shortening = concentric.' },
    { q: 'Holding a handstand still is…', o: ['isometric', 'concentric', 'eccentric', 'circumduction'], x: 'No movement.' },
    { q: 'The muscle that relaxes to allow movement is the…', o: ['antagonist', 'agonist', 'prime mover', 'tendon'], x: 'Opposite muscle.' },
    { q: 'In the downward phase of a press-up, the triceps works…', o: ['eccentrically', 'concentrically', 'isometrically', 'not at all'], x: 'Lengthens to control lowering.' },
    { q: 'The agonist when extending the knee is the…', o: ['quadriceps', 'hamstrings', 'gastrocnemius', 'gluteals'], x: 'Front of thigh.' },
    { q: 'Concentric and eccentric contractions are both…', o: ['isotonic', 'isometric', 'involuntary', 'antagonistic'], x: 'They cause movement.' },
    { q: 'The antagonist to the deltoid in shoulder abduction is the…', o: ['latissimus dorsi', 'biceps', 'quadriceps', 'pectorals only'], x: 'Lats adduct.' },
    { q: 'Another name for the agonist is the…', o: ['prime mover', 'fixator', 'antagonist', 'ligament'], x: 'Prime mover.' }
  ],
  exam: [
    { q: 'Define an <b>isometric</b> contraction. [1]', m: 1, ms: ['muscle contracts but stays the same length / no movement'] },
    { q: 'Using a bicep curl, explain how muscles work as an antagonistic pair. [4]', m: 4, ms: ['upward phase: biceps is agonist / contracts (concentric)', 'triceps is antagonist / relaxes / lengthens', 'downward phase: biceps still working — eccentric — controlling the weight', 'muscles can only pull, so work in pairs on opposite sides of the joint'] },
    { q: 'The images show a gymnast landing from a vault and then holding a balance.', parts: [
      { q: 'Identify the type of contraction in the quadriceps (i) during landing and (ii) when holding the balance. [2]', m: 2, ms: ['(i) eccentric', '(ii) isometric'] },
      { q: 'Analyse the role of different types of muscle contraction in a basketball jump shot. [6]', m: 6, lv: true, ms: ['preparation: knees bend — quadriceps eccentric, controlling the lowering', 'take-off: quadriceps and gluteals concentric to extend knee and hip; gastrocnemius concentric (plantar flexion)', 'shot: triceps concentric extends elbow (agonist), biceps antagonist relaxes', 'holding the ball steady before release — isometric', 'landing: quadriceps eccentric to absorb force — reduces injury', 'antagonistic pairs coordinate for smooth, controlled movement'] }
    ], tag: 'struct' }
  ],
  sims: ['contract', 'pairs'], gens: []
});

TOPICS.push({
  id: '3.2', unit: '3', area: 'move', ref: 'Lever system', title: 'Levers', short: 'First, second and third class; fulcrum, load, effort; mechanical advantage',
  summary: 'How bones, joints and muscles act as levers. The three classes of lever (first, second, third), identified by what is in the middle; examples at the neck, elbow, ankle, knee, hip and shoulder; and mechanical advantage — why second-class levers move large loads and third-class levers give speed and range.',
  spec: [
    'Classification of levers: first, second and third class',
    'Lever systems at the shoulder, elbow, knee and hip',
    'Fulcrum, load and effort',
    'The mechanical advantages of different classes of lever'
  ],
  learn: [
    { h: 'Parts of a lever', html: `
<p>In the body: the <b>fulcrum</b> is the <b>joint</b> (pivot point); the <b>effort</b> is the force from the <b>muscle</b>; the <b>load</b> is the weight being moved (the body part plus anything held). The bone is the lever arm.</p>
[[d:levers]]` },
    { h: 'The three classes', html: `
<div class="tbl"><table><tr><th>Class</th><th>In the middle</th><th>Body examples</th></tr>
<tr><td><b>First</b></td><td><b>F</b>ulcrum (E–F–L)</td><td>Neck nodding (heading a ball); elbow <b>extension</b> (triceps throwing a ball — fulcrum at the elbow between triceps insertion and the hand)</td></tr>
<tr><td><b>Second</b></td><td><b>L</b>oad (F–L–E)</td><td>Ankle when rising onto the toes (plantar flexion) — fulcrum at the ball of the foot, load (body weight) through the tibia, effort from the gastrocnemius at the heel</td></tr>
<tr><td><b>Third</b></td><td><b>E</b>ffort (F–E–L)</td><td>Elbow <b>flexion</b> (biceps curl); knee extension (kicking); hip and shoulder movements — most joints in the body</td></tr></table></div>
<div class="box tip"><b class="lbl">Memory aid: F-L-E, 1-2-3</b><p>Which thing is in the middle? <b>F</b>ulcrum → 1st, <b>L</b>oad → 2nd, <b>E</b>ffort → 3rd.</p></div>` },
    { h: 'Mechanical advantage', html: `
<p>The <b>effort arm</b> is the distance from the fulcrum to the effort; the <b>load arm</b> is the distance from the fulcrum to the load.</p>
<p style="text-align:center;font-weight:700">mechanical advantage = effort arm ÷ load arm</p>
<div class="tbl"><table><tr><th>Class</th><th>Mechanical advantage</th><th>Means</th></tr>
<tr><td>Second</td><td><b>greater than 1</b> — effort arm longer than load arm</td><td>a small effort can move a large load (the calf lifts the whole body weight) — but the range and speed of movement are small</td></tr>
<tr><td>Third</td><td><b>less than 1</b> — a mechanical disadvantage</td><td>needs a large effort, but gives a <b>large range of movement and speed</b> at the end of the lever — great for throwing, kicking and hitting</td></tr>
<tr><td>First</td><td>can be more or less than 1, depending on where the fulcrum is</td><td>balance or speed</td></tr></table></div>
<p>Using equipment lengthens the lever (e.g. a racket or bat), increasing the speed at the end of the lever — so the ball is hit harder.</p>` }
  ],
  eqs: [['"MA" = @frac{"effort arm"}{"load arm"}', 'MA > 1: advantage; MA < 1: speed and range']],
  worked: [
    { q: 'Identify the class of lever at the elbow during the upward phase of a bicep curl. Justify your answer. (2 marks)', s: ['Third class.', 'The effort (biceps insertion on the radius) is between the fulcrum (elbow) and the load (weight in the hand).'], a: 'Third class — effort in the middle.' },
    { q: 'Explain the mechanical advantage of a second-class lever. (2 marks)', s: ['The effort arm is longer than the load arm (MA > 1).', 'So a relatively small effort can move a large load — e.g. the gastrocnemius lifting the body onto the toes.'], a: 'Long effort arm → small effort moves large load.' }
  ],
  pitfalls: ['Mixing up the elbow levers: flexion (biceps) is third class; extension (triceps) is first class.', 'Saying a third-class lever is “inefficient” without explaining the benefit — speed and range of movement.', 'Labelling the muscle as the fulcrum — the joint is the fulcrum.', 'Drawing lever diagrams without labelling F, L and E.'],
  cards: [
    ['Fulcrum in the body?', 'The joint.'], ['Effort in the body?', 'The force from the muscle.'], ['Load in the body?', 'The weight of the body part and anything being moved.'],
    ['First-class lever?', 'Fulcrum in the middle — e.g. neck nodding, elbow extension.'], ['Second-class lever?', 'Load in the middle — e.g. ankle rising onto the toes.'], ['Third-class lever?', 'Effort in the middle — e.g. elbow flexion, knee, hip, shoulder.'],
    ['Mechanical advantage formula?', 'Effort arm ÷ load arm.'], ['MA of a second-class lever?', 'Greater than 1 — small effort moves large load.'], ['Benefit of a third-class lever?', 'Large range of movement and speed.'],
    ['Memory aid for lever classes?', 'F-L-E, 1-2-3 (what is in the middle).']
  ],
  quiz: [
    { q: 'In a third-class lever, what is in the middle?', o: ['Effort', 'Load', 'Fulcrum', 'Nothing'], x: 'F-L-E 1-2-3.' },
    { q: 'Rising onto the toes uses a…', o: ['second-class lever', 'first-class lever', 'third-class lever', 'no lever'], x: 'Load in the middle.' },
    { q: 'Nodding the head (heading a ball) uses a…', o: ['first-class lever', 'second-class lever', 'third-class lever', 'pulley'], x: 'Fulcrum in the middle.' },
    { q: 'In the body, the fulcrum is the…', o: ['joint', 'muscle', 'bone', 'ball'], x: 'The pivot point.' },
    { q: 'Effort arm 12 cm, load arm 4 cm. Mechanical advantage =', o: ['3', '0.33', '48', '8'], x: '12 ÷ 4.' },
    { q: 'A benefit of third-class levers is…', o: ['a large range of movement and speed', 'moving very heavy loads with little effort', 'more stability', 'MA greater than 1'], x: 'Speed and range.' },
    { q: 'The elbow in a bicep curl is a…', o: ['third-class lever', 'first-class lever', 'second-class lever', 'hinge with no lever'], x: 'Biceps insertion between elbow and hand.' },
    { q: 'Using a hockey stick increases the…', o: ['length of the lever and speed at the end', 'mechanical advantage above 1', 'effort arm only', 'load on the joint only'], x: 'Longer lever → more speed.' }
  ],
  exam: [
    { q: 'Name the three parts of a lever system. [1]', m: 1, ms: ['fulcrum, effort and load (all three)'] },
    { q: 'Draw and label a second-class lever. Give a sporting example. [3]', m: 3, ms: ['correct order F–L–E (load in the middle)', 'all three parts labelled', 'example — ankle plantar flexion / rising onto toes / take-off in a jump'] },
    { q: 'A tennis player plays a forehand and then jumps to smash the ball.', parts: [
      { q: 'Identify the class of lever operating at the ankle as the player rises onto the toes. [1]', m: 1, ms: ['second class'] },
      { q: 'Explain the advantages and disadvantages of third-class levers for this tennis player. [6]', m: 6, lv: true, ms: ['third class — effort between fulcrum and load (e.g. elbow, shoulder, knee)', 'mechanical disadvantage / MA < 1 — large muscle effort needed', 'advantage: large range of movement', 'advantage: high speed at the end of the lever — racket head speed — more power on the ball', 'racket lengthens the lever — increases speed further', 'disadvantage: cannot move heavy loads efficiently; more stress on muscles/joints', 'conclusion: for striking sports, speed outweighs the disadvantage'] }
    ], tag: 'struct' }
  ],
  sims: ['lever', 'leverid'], gens: ['glever']
});

TOPICS.push({
  id: '3.3', unit: '3', area: 'move', ref: 'Planes of and axes of movement', title: 'Planes and axes of movement', short: 'Sagittal, frontal, transverse planes; frontal, sagittal, vertical axes; running, throwing, jumping, kicking',
  summary: 'The three planes (sagittal, frontal, transverse) and three axes (frontal, sagittal, vertical) of movement; which movements happen in each; and the joint movements in running, throwing, jumping and kicking.',
  spec: [
    'Sagittal, frontal and transverse planes — flexion, extension, adduction and abduction',
    'Axes of movement: sagittal, frontal and vertical, and the movements that occur through them',
    'Movements at joints during running, throwing, jumping and kicking',
    'Links between planes and axes and the muscular-skeletal system'
  ],
  learn: [
    { h: 'Planes and axes', html: `
<p>A <b>plane</b> is an imaginary flat surface that divides the body; movement happens <b>in</b> a plane. An <b>axis</b> is an imaginary line that the body or a limb rotates <b>around</b>. Each plane is paired with the axis at right angles to it.</p>
[[d:planes]]
<div class="tbl"><table><tr><th>Plane</th><th>Divides the body into</th><th>Axis</th><th>Movements</th><th>Examples</th></tr>
<tr><td><b>Sagittal</b></td><td>left and right</td><td><b>frontal</b> axis (side to side)</td><td>flexion, extension</td><td>running, a bicep curl, a front somersault, kicking a football, squat</td></tr>
<tr><td><b>Frontal</b></td><td>front and back</td><td><b>sagittal</b> axis (front to back)</td><td>abduction, adduction</td><td>star jump, cartwheel, side-step, lateral raise</td></tr>
<tr><td><b>Transverse</b></td><td>top and bottom</td><td><b>vertical</b> axis (head to toe)</td><td>rotation</td><td>full twist in trampolining, discus turn, golf swing, ice-skating spin</td></tr></table></div>
<div class="box tip"><b class="lbl">Check your answer</b><p>Forwards and backwards movement → sagittal plane / frontal axis. Sideways → frontal plane / sagittal axis. Turning → transverse plane / vertical axis.</p></div>` },
    { h: 'Movements in sporting actions', html: `
<div class="tbl"><table><tr><th>Action</th><th>Joint movements</th><th>Plane / axis</th></tr>
<tr><td><b>Running</b></td><td>hip and knee flexion (recovery leg) and extension (drive leg); ankle plantar flexion at push-off; shoulder flexion/extension (arm drive)</td><td>sagittal / frontal</td></tr>
<tr><td><b>Throwing</b> (e.g. javelin, cricket throw)</td><td>shoulder extension then flexion (and rotation); elbow extension at release; trunk rotation</td><td>sagittal; transverse for rotation</td></tr>
<tr><td><b>Jumping</b> (vertical jump, basketball)</td><td>hip and knee flexion (preparation), then extension; ankle plantar flexion; shoulder flexion (arm swing)</td><td>sagittal / frontal</td></tr>
<tr><td><b>Kicking</b></td><td>knee flexion then extension; hip extension then flexion</td><td>sagittal / frontal</td></tr>
<tr><td>Jumping jack</td><td>shoulder and hip abduction then adduction</td><td>frontal / sagittal</td></tr>
<tr><td>Discus throw</td><td>rotation of the trunk/hips; shoulder horizontal adduction</td><td>transverse / vertical</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Identify the plane and axis of movement for a front somersault. (2 marks)', s: ['Sagittal plane.', 'Frontal axis.'], a: 'Sagittal plane, frontal axis.' },
    { q: 'Identify the plane, axis and type of movement at the shoulder in a cartwheel. (3 marks)', s: ['Frontal plane.', 'Sagittal axis.', 'Abduction (arms moving away from the body) / adduction.'], a: 'Frontal plane, sagittal axis, abduction.' }
  ],
  pitfalls: ['Pairing the sagittal plane with the sagittal axis — the sagittal plane goes with the FRONTAL axis (and vice versa).', 'Saying rotation happens in the sagittal plane — rotation (twisting) is transverse plane / vertical axis.', 'Describing a jump without separating the preparation (flexion) and take-off (extension) phases.', 'Writing “longitudinal” at GCSE — the specification uses “vertical” axis.'],
  cards: [
    ['Sagittal plane?', 'Divides the body into left and right; flexion and extension.'], ['Frontal plane?', 'Divides the body into front and back; abduction and adduction.'], ['Transverse plane?', 'Divides the body into top and bottom; rotation.'],
    ['Axis paired with the sagittal plane?', 'Frontal axis.'], ['Axis paired with the frontal plane?', 'Sagittal axis.'], ['Axis paired with the transverse plane?', 'Vertical axis.'],
    ['Front somersault?', 'Sagittal plane, frontal axis.'], ['Cartwheel?', 'Frontal plane, sagittal axis.'], ['Full twist / discus spin?', 'Transverse plane, vertical axis.'],
    ['Plane for running?', 'Sagittal plane (frontal axis).'], ['Knee action when kicking?', 'Flexion then extension.']
  ],
  quiz: [
    { q: 'A cartwheel occurs in the…', o: ['frontal plane about the sagittal axis', 'sagittal plane about the frontal axis', 'transverse plane about the vertical axis', 'frontal plane about the vertical axis'], x: 'Sideways rotation.' },
    { q: 'Running mainly occurs in the…', o: ['sagittal plane', 'frontal plane', 'transverse plane', 'vertical plane'], x: 'Forwards and backwards.' },
    { q: 'A full twist in trampolining rotates about the…', o: ['vertical axis', 'frontal axis', 'sagittal axis', 'horizontal axis'], x: 'Head-to-toe line.' },
    { q: 'Which movements happen in the frontal plane?', o: ['Abduction and adduction', 'Flexion and extension', 'Rotation', 'Circumduction only'], x: 'Sideways.' },
    { q: 'The sagittal plane divides the body into…', o: ['left and right', 'front and back', 'top and bottom', 'arms and legs'], x: 'Midline split.' },
    { q: 'A bicep curl occurs in the…', o: ['sagittal plane about the frontal axis', 'frontal plane', 'transverse plane', 'vertical axis'], x: 'Flexion/extension.' },
    { q: 'A golf swing involves rotation in the…', o: ['transverse plane', 'sagittal plane', 'frontal plane', 'no plane'], x: 'Twisting.' },
    { q: 'At take-off in a vertical jump, the knees…', o: ['extend', 'flex', 'abduct', 'rotate'], x: 'Straighten to drive up.' }
  ],
  exam: [
    { q: 'Name the axis that a front somersault rotates around. [1]', m: 1, ms: ['frontal axis'] },
    { q: 'Complete the table for a star jump: plane, axis, movement at the shoulder. [3]', m: 3, ms: ['frontal plane', 'sagittal axis', 'abduction (and adduction)'] },
    { q: 'The sequence of images shows a long jumper during the approach, take-off and flight.', parts: [
      { q: 'Identify the movement at the knee of the take-off leg at take-off. [1]', m: 1, ms: ['extension'] },
      { q: 'Analyse the movements at the hip, knee and ankle of the running leg during the approach, using planes and axes. [6]', m: 6, lv: true, ms: ['all in the sagittal plane, about the frontal axis', 'drive phase: hip extension (gluteals), knee extension (quadriceps)', 'ankle plantar flexion at push-off (gastrocnemius)', 'recovery phase: hip flexion, knee flexion (hamstrings)', 'arm drive: shoulder flexion and extension — sagittal plane', 'concentric contractions of agonists, antagonists relaxing', 'linking movements to speed in the approach'] }
    ], tag: 'struct' }
  ],
  sims: ['planes'], gens: []
});

TOPICS.push({
  id: '3.4', unit: '3', area: 'move', ref: 'Sports technology', title: 'Sports technology', short: 'Analysis, performance, officiating and coaching; positive and negative effects',
  summary: 'How technology is used to analyse movement, improve performance, and support officiating and coaching — from video analysis apps, GPS trackers and heart-rate monitors to Hawk-Eye, VAR and goal-line technology — and the positive and negative effects of technological developments.',
  spec: [
    'The role of technology in analysis of movement and improvement in performance',
    'The role of technology in officiating and coaching',
    'The positive and negative effects of technological developments',
    'How to use technology to analyse movement and sports performance to improve performance'
  ],
  learn: [
    { h: 'Technology for analysis and coaching', html: `
<div class="tbl"><table><tr><th>Technology</th><th>Use</th></tr>
<tr><td><b>Video analysis</b> (apps on tablets, slow motion, frame-by-frame, split screen)</td><td>Break down technique; compare with an elite model; give visual feedback (knowledge of performance).</td></tr>
<tr><td><b>GPS trackers / wearables</b></td><td>Distance covered, sprint speeds, number of sprints, workload — used in football, rugby and hockey to plan training and avoid overtraining.</td></tr>
<tr><td><b>Heart-rate monitors and smart watches</b></td><td>Check athletes are in the correct training zone; monitor recovery.</td></tr>
<tr><td><b>Notational/match analysis software</b></td><td>Records events — passes completed, shots, tackles — to analyse tactics and set targets.</td></tr>
<tr><td><b>Fitness testing equipment</b></td><td>Timing gates, jump mats, dynamometers — more accurate, reliable results.</td></tr>
<tr><td><b>Performance equipment</b></td><td>Lighter/stronger rackets, carbon-fibre bikes, “super shoes”, swimsuits, prosthetics — improve performance and safety.</td></tr></table></div>` },
    { h: 'Technology in officiating', html: `
<div class="tbl"><table><tr><th>Technology</th><th>Sport</th><th>Role</th></tr>
<tr><td><b>Hawk-Eye</b></td><td>tennis, cricket</td><td>Line calls; ball tracking for LBW decisions (DRS)</td></tr>
<tr><td><b>Goal-line technology</b></td><td>football</td><td>Signals to the referee’s watch whether the whole ball crossed the line</td></tr>
<tr><td><b>VAR</b> (video assistant referee)</td><td>football</td><td>Reviews goals, penalties, red cards and mistaken identity</td></tr>
<tr><td><b>TMO</b> (television match official)</td><td>rugby</td><td>Checks tries and foul play</td></tr>
<tr><td>Photo finish, electronic timing, touch pads</td><td>athletics, swimming</td><td>Accurate times and placings to 0.01 s</td></tr>
<tr><td>Microphones/headsets</td><td>rugby, football</td><td>Communication between officials</td></tr></table></div>` },
    { h: 'Positive and negative effects', html: `
<div class="tbl"><table><tr><th>Positive</th><th>Negative</th></tr>
<tr><td>More accurate, fairer decisions — fewer injustices</td><td>Breaks the flow of the game; long delays (VAR)</td></tr>
<tr><td>Better, objective feedback to improve technique and tactics</td><td>Expensive — not available at grassroots or in poorer countries, widening the gap</td></tr>
<tr><td>Safer equipment reduces injuries</td><td>Undermines officials’ authority and confidence</td></tr>
<tr><td>Better monitoring of training load; fewer injuries</td><td>Too much data — “paralysis by analysis”; over-reliance on technology</td></tr>
<tr><td>More entertaining for spectators (replays, Hawk-Eye graphics)</td><td>Some equipment gives an unfair advantage (“technological doping”), e.g. banned full-body swimsuits in 2010</td></tr>
<tr><td>Inclusion — prosthetics and sports wheelchairs</td><td>Technology can fail; arguments about lines and interpretation remain</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain how a coach could use video analysis to improve a long jumper’s take-off. (2 marks)', s: ['Record the take-off and replay it in slow motion / frame by frame.', 'Show the jumper the faults (e.g. foot position, body lean) and compare with an elite model — giving knowledge of performance.'], a: 'Slow-motion replay, compare with model, give feedback.' },
    { q: 'Give one positive and one negative effect of VAR in football. (2 marks)', s: ['Positive: more accurate decisions on goals, penalties and red cards.', 'Negative: delays break the flow of the game / reduce spectator excitement.'], a: 'Accuracy v delays.' }
  ],
  pitfalls: ['Listing technologies without explaining HOW they improve performance or decisions.', 'Giving only positives when the question says “evaluate”.', 'Being vague (“technology helps”) — name the technology and the sport.', 'Confusing analysis technology (video, GPS) with officiating technology (Hawk-Eye, VAR).'],
  cards: [
    ['Two uses of video analysis?', 'Break down technique in slow motion; compare with an elite model; give feedback.'], ['What do GPS trackers measure?', 'Distance, speed, number of sprints, workload.'], ['Hawk-Eye is used in?', 'Tennis and cricket — line calls and ball tracking.'],
    ['VAR?', 'Video assistant referee — reviews key decisions in football.'], ['TMO?', 'Television match official in rugby.'], ['Positive effects of officiating technology?', 'Fairer, more accurate decisions; entertainment.'],
    ['Negative effects of officiating technology?', 'Delays, cost, undermines officials, can still be controversial.'], ['Technology to monitor training zones?', 'Heart-rate monitors / smart watches.'], ['Technological doping?', 'Equipment giving an unfair advantage — e.g. banned 2010 swimsuits.']
  ],
  quiz: [
    { q: 'Which technology tracks distance covered by a footballer in a match?', o: ['GPS tracker', 'Hawk-Eye', 'Photo finish', 'Stopwatch only'], x: 'Wearable GPS.' },
    { q: 'Hawk-Eye is used for…', o: ['line calls in tennis', 'measuring heart rate', 'timing swimming', 'weighing boxers'], x: 'Ball tracking.' },
    { q: 'A negative effect of VAR is…', o: ['delays that break the flow of play', 'more accurate decisions', 'fewer wrong red cards', 'better replays'], x: 'Stoppages.' },
    { q: 'Slow-motion video helps coaching by…', o: ['allowing technique to be analysed in detail', 'measuring VO₂max', 'replacing training', 'removing feedback'], x: 'Detailed analysis.' },
    { q: 'Expensive technology can…', o: ['widen the gap between rich and poor clubs/countries', 'make sport cheaper for all', 'make officials unnecessary', 'stop injuries entirely'], x: 'Access inequality.' },
    { q: 'Goal-line technology tells the referee…', o: ['whether the whole ball crossed the line', 'who touched the ball last', 'the player’s heart rate', 'the offside line'], x: 'Signal to watch.' },
    { q: 'Electronic touch pads are used in…', o: ['swimming', 'rugby', 'gymnastics', 'cricket'], x: 'Timing at the wall.' }
  ],
  exam: [
    { q: 'Name one technology used to help officials in a named sport. [1]', m: 1, ms: ['e.g. Hawk-Eye (tennis/cricket), VAR / goal-line technology (football), TMO (rugby), photo finish (athletics)'] },
    { q: 'Explain how GPS technology could help a rugby coach. [3]', m: 3, ms: ['measures distance covered / speed / number of sprints / workload', 'identifies fitness strengths and weaknesses', 'monitors training load to prevent overtraining / injury', 'plans training / selection / substitutions'] },
    { q: 'Evaluate the use of technology in officiating sport. [9]', m: 9, lv: true, ms: ['examples: VAR and goal-line technology (football), Hawk-Eye (tennis, cricket), TMO (rugby), photo finish', 'positive: more accurate decisions — fairness, fewer injustices', 'positive: players and fans accept decisions; entertainment (replays, graphics)', 'positive: deters cheating — foul play reviewed', 'negative: delays, breaks flow, less spontaneous celebration', 'negative: cost — not available at grassroots, so games officiated differently at different levels', 'negative: undermines referees’ authority/confidence; interpretation still subjective (e.g. handball)', 'conclusion: improves accuracy where objective (goal-line, line calls), more controversial where subjective (VAR)'] }
  ],
  sims: ['techsort'], gens: []
});
