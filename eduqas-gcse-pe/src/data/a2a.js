/* ==========================================================
   KEY AREA 2 · EXERCISE PHYSIOLOGY — part 1
   Skeleton; joints and movement; muscular system; fibre types, ligaments and tendons
   ========================================================== */
TOPICS.push({
  id: '2.1', unit: '2', area: 'phys', ref: 'Muscular-skeletal system', title: 'The skeletal system', short: 'Major bones, flat bones, functions of the skeleton',
  summary: 'The structure and functions of the skeleton: the major long bones (humerus, radius, ulna, femur, tibia, fibula), the flat bones (cranium, scapula, ribs) that protect organs, and the four functions — movement, support, protection and production of blood cells — with sporting examples.',
  spec: [
    'Major bones: radius, ulna, humerus, femur, tibia, fibula',
    'Flat bones such as the scapula, cranium and ribs for protection',
    'Functions of the skeleton: movement, support, protection, production of blood cells',
    'Applying functions of the skeleton to sporting examples'
  ],
  learn: [
    { h: 'The major bones', html: `
[[d:skeleton]]
<div class="tbl"><table><tr><th>Bone</th><th>Where</th><th>Type</th><th>In sport</th></tr>
<tr><td><b>Humerus</b></td><td>upper arm</td><td>long</td><td>lever for throwing and hitting</td></tr>
<tr><td><b>Radius</b> and <b>ulna</b></td><td>forearm (radius on the thumb side)</td><td>long</td><td>wrist and elbow movement in a netball pass</td></tr>
<tr><td><b>Femur</b></td><td>thigh — the longest, strongest bone</td><td>long</td><td>lever for kicking and running</td></tr>
<tr><td><b>Tibia</b> and <b>fibula</b></td><td>lower leg (tibia is the shin bone, fibula on the outside)</td><td>long</td><td>weight bearing in landing; shin pads protect the tibia</td></tr>
<tr><td><b>Cranium</b></td><td>skull</td><td>flat</td><td>protects the brain when heading or in a fall</td></tr>
<tr><td><b>Scapula</b></td><td>shoulder blade</td><td>flat</td><td>large area for muscle attachment (e.g. deltoid) for arm movement</td></tr>
<tr><td><b>Ribs</b></td><td>chest</td><td>flat</td><td>protect heart and lungs in a rugby tackle; move during breathing</td></tr></table></div>
<p><b>Long bones</b> act as levers for movement and contain bone marrow. <b>Flat bones</b> protect vital organs and provide a broad, flat surface for muscles to attach to.</p>` },
    { h: 'Functions of the skeleton', html: `
<div class="tbl"><table><tr><th>Function</th><th>Explanation</th><th>Sporting example</th></tr>
<tr><td><b>Movement</b></td><td>Bones act as levers; muscles attached by tendons pull on them at joints.</td><td>The femur and tibia move at the knee when kicking a ball.</td></tr>
<tr><td><b>Support</b></td><td>Gives the body its shape and holds it upright; supports muscles and organs.</td><td>Maintaining good posture in a gymnastic balance.</td></tr>
<tr><td><b>Protection</b></td><td>Flat bones surround and protect vital organs.</td><td>The cranium protects the brain in a clash of heads; ribs protect the heart and lungs in a tackle.</td></tr>
<tr><td><b>Production of blood cells</b></td><td>Red and white blood cells (and platelets) are made in the bone marrow of long bones (and flat bones).</td><td>Red blood cells carry oxygen to the working muscles; white cells fight infection.</td></tr></table></div>
<div class="box tip"><b class="lbl">Other functions you may see</b><p>Bones also store minerals such as calcium and phosphorus. Weight-bearing exercise increases <b>bone density</b>, making bones stronger (see 2.8).</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Name the two bones of the forearm. (1 mark)', s: ['Radius and ulna.'], a: 'Radius and ulna.' },
    { q: 'Using a sporting example, explain the protective function of the skeleton. (2 marks)', s: ['Flat bones such as the cranium surround vital organs.', 'e.g. the cranium protects the brain when a footballer heads the ball.'], a: 'Flat bone protects organ — named sporting example.' }
  ],
  pitfalls: ['Writing “red blood cells are made in the heart” — they are made in bone marrow.', 'Mixing up tibia (shin, inside, larger) and fibula (outside, thinner).', 'Mixing up humerus (upper arm) and femur (thigh).', 'Giving a function without a sporting example when the question asks for one.'],
  cards: [
    ['Bone of the upper arm?', 'Humerus.'], ['Bones of the forearm?', 'Radius (thumb side) and ulna.'], ['Bone of the thigh?', 'Femur.'],
    ['Bones of the lower leg?', 'Tibia (shin) and fibula (outer side).'], ['Three flat bones?', 'Cranium, scapula, ribs.'], ['Main role of flat bones?', 'Protection of organs; broad area for muscle attachment.'],
    ['Four functions of the skeleton?', 'Movement, support, protection, production of blood cells.'], ['Where are blood cells made?', 'In the bone marrow.'], ['What protects the heart and lungs?', 'Ribs (and sternum).'],
    ['Which bone is the shoulder blade?', 'Scapula.']
  ],
  quiz: [
    { q: 'The femur is found in the…', o: ['thigh', 'upper arm', 'forearm', 'lower leg'], x: 'Longest bone in the body.' },
    { q: 'Which is a flat bone?', o: ['Scapula', 'Humerus', 'Tibia', 'Radius'], x: 'Shoulder blade.' },
    { q: 'Blood cells are produced in the…', o: ['bone marrow', 'heart', 'lungs', 'cartilage'], x: 'Marrow of bones.' },
    { q: 'The cranium protecting the brain when heading is the function of…', o: ['protection', 'movement', 'support', 'blood cell production'], x: 'Flat bone protecting an organ.' },
    { q: 'The radius and ulna are in the…', o: ['forearm', 'lower leg', 'thigh', 'chest'], x: 'Between elbow and wrist.' },
    { q: 'Which bone is on the outside of the lower leg?', o: ['Fibula', 'Tibia', 'Femur', 'Ulna'], x: 'Tibia is the shin.' },
    { q: 'Long bones mainly act as…', o: ['levers for movement', 'protection for the brain', 'storage for oxygen', 'joints'], x: 'Muscles pull on them.' },
    { q: 'Red blood cells are important in sport because they…', o: ['carry oxygen to working muscles', 'fight infection', 'clot blood', 'store fat'], x: 'Haemoglobin carries O₂.' }
  ],
  exam: [
    { q: 'Name the bone labelled X (upper arm) and the bone labelled Y (shin). [2]', m: 2, ms: ['X — humerus', 'Y — tibia'] },
    { q: 'Identify two functions of the skeleton and give a sporting example of each. [4]', m: 4, ms: ['movement — e.g. femur/tibia levers when kicking', 'protection — e.g. ribs protect heart/lungs in a tackle', 'support — e.g. upright posture / holding a balance', 'blood cell production — e.g. red cells carry oxygen to muscles in a run', '(1 mark per function, 1 per linked example)'] },
    { q: 'Explain how the skeletal system helps a basketball player to perform a jump shot. [6]', m: 6, lv: true, ms: ['movement: long bones act as levers — femur, tibia, fibula in the jump; humerus, radius, ulna in the shot', 'joints — knee and elbow (hinge), hip and shoulder (ball and socket) allow flexion/extension', 'muscles attach to bones by tendons and pull on them', 'support — skeleton holds body upright and balanced in the air', 'protection — cranium/ribs in contact under the basket', 'blood cell production — red blood cells supply oxygen for repeated efforts', 'flat bone (scapula) provides attachment for shoulder muscles in the shot'] }
  ],
  sims: ['bonequiz'], gens: []
});

TOPICS.push({
  id: '2.2', unit: '2', area: 'phys', ref: 'Muscular-skeletal system', title: 'Joints and movement', short: 'Ball and socket, hinge, pivot; flexion, extension, abduction, adduction, rotation, circumduction',
  summary: 'Synovial joints — ball and socket, hinge and pivot — where they are found, and the movements they allow: flexion, extension, abduction, adduction, rotation and circumduction, applied to sporting actions.',
  spec: [
    'Synovial joints: ball and socket, hinge and pivot',
    'Types of movement: flexion, extension, adduction, abduction, circumduction, rotation',
    'Types of movement at different joints in sporting actions'
  ],
  learn: [
    { h: 'Synovial joints', html: `
<p>A <b>joint</b> is where two or more bones meet. <b>Synovial joints</b> are freely movable and are the joints used in sport.</p>
[[d:synovial]]
<div class="tbl"><table><tr><th>Joint type</th><th>Examples</th><th>Movements</th></tr>
<tr><td><b>Ball and socket</b></td><td>shoulder, hip</td><td>flexion, extension, abduction, adduction, rotation, circumduction — the greatest range</td></tr>
<tr><td><b>Hinge</b></td><td>elbow, knee (and ankle)</td><td>flexion and extension only</td></tr>
<tr><td><b>Pivot</b></td><td>neck (atlas and axis vertebrae); radio-ulnar joint</td><td>rotation</td></tr></table></div>` },
    { h: 'Types of movement', html: `
<div class="tbl"><table><tr><th>Movement</th><th>Meaning</th><th>Sporting example</th></tr>
<tr><td><b>Flexion</b></td><td>Decreasing the angle at a joint (bending).</td><td>Knee bending as you prepare to kick; elbow bending in a bicep curl.</td></tr>
<tr><td><b>Extension</b></td><td>Increasing the angle at a joint (straightening).</td><td>Knee straightening as you kick; elbow straightening in a chest pass.</td></tr>
<tr><td><b>Abduction</b></td><td>Movement away from the midline of the body.</td><td>Arms and legs moving out in a star jump; a goalkeeper reaching sideways.</td></tr>
<tr><td><b>Adduction</b></td><td>Movement towards the midline of the body.</td><td>Arms and legs returning in a star jump; breaststroke leg kick together.</td></tr>
<tr><td><b>Rotation</b></td><td>Turning a bone around its own long axis.</td><td>The hip in a golf swing; the shoulder in a discus throw; turning the head.</td></tr>
<tr><td><b>Circumduction</b></td><td>Movement of a limb in a circle (a cone shape) — a combination of the others.</td><td>The shoulder when bowling in cricket; arm circles in a warm-up.</td></tr></table></div>
<div class="box tip"><b class="lbl">Memory aid</b><p><b>Ab</b>duction = <b>ab</b>sent from the body (away). <b>Add</b>uction = <b>add</b>ed back to the body (towards).</p></div>` },
    { h: 'Movements in sporting actions', html: `
<div class="tbl"><table><tr><th>Action</th><th>Joint</th><th>Movement</th></tr>
<tr><td>Running — driving leg</td><td>hip, knee</td><td>extension</td></tr>
<tr><td>Running — recovery leg</td><td>hip, knee</td><td>flexion</td></tr>
<tr><td>Kicking — preparation</td><td>knee</td><td>flexion</td></tr>
<tr><td>Kicking — contact</td><td>knee</td><td>extension</td></tr>
<tr><td>Jumping — take-off</td><td>hip, knee</td><td>extension</td></tr>
<tr><td>Throwing — overarm release</td><td>elbow</td><td>extension</td></tr>
<tr><td>Bowling in cricket</td><td>shoulder</td><td>circumduction</td></tr>
<tr><td>Cartwheel</td><td>shoulder, hip</td><td>abduction</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Name the type of joint at the knee and the movement that occurs at the knee when a footballer kicks a ball. (2 marks)', s: ['Hinge joint.', 'Extension (the leg straightens as the ball is struck).'], a: 'Hinge; extension.' },
    { q: 'Describe abduction and give an example. (2 marks)', s: ['Movement of a limb away from the midline of the body.', 'e.g. the arms moving outwards in a star jump.'], a: 'Away from midline — star jump.' }
  ],
  pitfalls: ['Saying the knee allows rotation like a ball and socket — at GCSE, the knee is a hinge: flexion and extension.', 'Confusing rotation (turning around its own axis) with circumduction (a circle/cone).', 'Writing “the knee extends” for the preparation phase of a kick — it flexes first.', 'Mixing up abduction and adduction.'],
  cards: [
    ['Three types of synovial joint at GCSE?', 'Ball and socket, hinge, pivot.'], ['Examples of ball and socket joints?', 'Shoulder, hip.'], ['Examples of hinge joints?', 'Elbow, knee (ankle).'],
    ['Example of a pivot joint?', 'Neck (atlas/axis); radio-ulnar.'], ['Flexion?', 'Decreasing the angle at a joint.'], ['Extension?', 'Increasing the angle at a joint.'],
    ['Abduction?', 'Movement away from the midline.'], ['Adduction?', 'Movement towards the midline.'], ['Rotation?', 'Turning a bone around its own long axis.'],
    ['Circumduction?', 'Moving a limb in a circle — e.g. bowling in cricket.'], ['Movements at a hinge joint?', 'Flexion and extension only.'], ['Which joint allows the most movement?', 'Ball and socket.']
  ],
  quiz: [
    { q: 'The elbow is a…', o: ['hinge joint', 'ball and socket joint', 'pivot joint', 'fixed joint'], x: 'Flexion and extension.' },
    { q: 'Bowling in cricket shows which movement at the shoulder?', o: ['Circumduction', 'Flexion only', 'Adduction', 'Rotation of the neck'], x: 'Arm moves in a circle.' },
    { q: 'Movement towards the midline of the body is…', o: ['adduction', 'abduction', 'extension', 'rotation'], x: 'Add = towards.' },
    { q: 'Straightening the knee to kick a ball is…', o: ['extension', 'flexion', 'abduction', 'circumduction'], x: 'Angle increases.' },
    { q: 'Turning the head to watch the ball happens at a…', o: ['pivot joint', 'hinge joint', 'ball and socket joint', 'cartilaginous joint'], x: 'Atlas and axis.' },
    { q: 'Which joint type allows rotation, abduction and circumduction?', o: ['Ball and socket', 'Hinge', 'Pivot', 'None'], x: 'Greatest range.' },
    { q: 'Bending the elbow in a bicep curl is…', o: ['flexion', 'extension', 'abduction', 'rotation'], x: 'Angle decreases.' },
    { q: 'The arms moving outwards in a star jump is…', o: ['abduction', 'adduction', 'flexion', 'rotation'], x: 'Away from midline.' }
  ],
  exam: [
    { q: 'Name the type of joint found at the hip. [1]', m: 1, ms: ['ball and socket'] },
    { q: 'Describe the difference between rotation and circumduction. Give a sporting example of each. [4]', m: 4, ms: ['rotation — a bone turns around its own (long) axis', 'example, e.g. hip/trunk in a golf swing, discus turn', 'circumduction — limb moves in a circle / cone shape', 'example, e.g. shoulder when bowling in cricket'] },
    { q: 'The photographs show the preparation and contact phases of a football penalty kick.', parts: [
      { q: 'Identify the movement at the knee of the kicking leg in each phase. [2]', m: 2, ms: ['preparation — flexion', 'contact — extension'] },
      { q: 'Identify the movement at the hip of the kicking leg during the contact phase. [1]', m: 1, ms: ['flexion'] },
      { q: 'Explain why the joints at the shoulder and the knee allow different ranges of movement. [3]', m: 3, ms: ['shoulder is a ball and socket joint', 'allows flexion, extension, abduction, adduction, rotation, circumduction', 'knee is a hinge joint — flexion and extension only (one plane)'] }
    ], tag: 'struct' }
  ],
  sims: ['joints', 'jointmove'], gens: []
});

TOPICS.push({
  id: '2.3', unit: '2', area: 'phys', ref: 'Muscular-skeletal system', title: 'The muscular system', short: 'Muscle types; nine major muscles and their actions; contraction types',
  summary: 'The three types of muscle — skeletal (voluntary), smooth and cardiac (involuntary) — and the nine major skeletal muscles in the specification: biceps, triceps, deltoid, pectorals, latissimus dorsi, gluteals, quadriceps, hamstrings and gastrocnemius, with the movements they cause and the type of contraction.',
  spec: [
    'Types of muscle: smooth, cardiac, skeletal; involuntary and voluntary',
    'Major muscles: biceps, triceps, deltoid, pectorals, latissimus dorsi, gluteals, quadriceps, hamstrings, gastrocnemius',
    'Links of major muscles to types of movement at different joints',
    'Links of major muscles to types of contraction (concentric, eccentric, isometric)'
  ],
  learn: [
    { h: 'Three types of muscle', html: `
<div class="tbl"><table><tr><th>Type</th><th>Control</th><th>Found</th><th>Role in exercise</th></tr>
<tr><td><b>Skeletal</b></td><td><b>voluntary</b> — we choose to move it</td><td>attached to bones by tendons</td><td>produces movement in every sporting action</td></tr>
<tr><td><b>Smooth</b></td><td><b>involuntary</b> — works automatically</td><td>walls of blood vessels, stomach, intestines</td><td>vasodilation and vasoconstriction redirect blood to working muscles</td></tr>
<tr><td><b>Cardiac</b></td><td><b>involuntary</b>; never tires</td><td>only in the walls of the heart</td><td>contracts harder and faster in exercise to pump more blood</td></tr></table></div>` },
    { h: 'The nine major muscles', html: `
[[d:musclemap]]
<div class="tbl"><table><tr><th>Muscle</th><th>Location</th><th>Joint</th><th>Main action</th><th>Sporting example</th></tr>
<tr><td><b>Biceps</b></td><td>front of upper arm</td><td>elbow</td><td>flexion</td><td>upward phase of a bicep curl; pulling in rowing</td></tr>
<tr><td><b>Triceps</b></td><td>back of upper arm</td><td>elbow</td><td>extension</td><td>chest pass; throwing; upward phase of a press-up</td></tr>
<tr><td><b>Deltoid</b></td><td>top of the shoulder</td><td>shoulder</td><td>abduction (and flexion/extension, rotation)</td><td>lifting the arms to block in volleyball</td></tr>
<tr><td><b>Pectorals</b></td><td>chest</td><td>shoulder</td><td>adduction (horizontal) / flexion</td><td>forehand drive in tennis; press-up</td></tr>
<tr><td><b>Latissimus dorsi</b></td><td>side of the back</td><td>shoulder</td><td>adduction and extension</td><td>pull phase of front crawl; pull-up</td></tr>
<tr><td><b>Gluteals</b></td><td>buttocks</td><td>hip</td><td>extension (and abduction)</td><td>driving out of the blocks; jumping</td></tr>
<tr><td><b>Quadriceps</b></td><td>front of thigh</td><td>knee</td><td>extension</td><td>kicking a ball; take-off in a jump</td></tr>
<tr><td><b>Hamstrings</b></td><td>back of thigh</td><td>knee (and hip)</td><td>flexion at the knee (extension at the hip)</td><td>recovery phase of the running leg; preparing to kick</td></tr>
<tr><td><b>Gastrocnemius</b></td><td>calf</td><td>ankle</td><td>plantar flexion (pointing the toes)</td><td>pushing off in sprinting; rising onto the toes</td></tr></table></div>` },
    { h: 'Muscles and contractions', html: `
<p>Muscles can only <b>pull</b>, never push, so they work in <b>antagonistic pairs</b> (see 3.1): biceps/triceps, quadriceps/hamstrings, deltoid/latissimus dorsi, gluteals/hip flexors.</p>
<div class="tbl"><table><tr><th>Contraction</th><th>What happens</th><th>Example</th></tr>
<tr><td><b>Concentric</b></td><td>muscle shortens under tension</td><td>biceps in the upward phase of a curl</td></tr>
<tr><td><b>Eccentric</b></td><td>muscle lengthens under tension (controls a movement)</td><td>biceps in the downward phase of a curl; quadriceps when landing</td></tr>
<tr><td><b>Isometric</b></td><td>muscle stays the same length; no movement</td><td>holding a plank; a gymnast holding a balance</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Name the muscle that extends the knee when kicking a ball. (1 mark)', s: ['Quadriceps.'], a: 'Quadriceps.' },
    { q: 'Explain why cardiac muscle is described as involuntary. (1 mark)', s: ['It contracts automatically — we cannot consciously control it.'], a: 'Works without conscious control.' },
    { q: 'Identify the muscle and the type of contraction in the upward phase of a press-up. (2 marks)', s: ['Triceps (also pectorals).', 'Concentric — the triceps shortens as the elbow extends.'], a: 'Triceps; concentric.' }
  ],
  pitfalls: ['Saying the biceps extends the elbow — biceps flexes, triceps extends.', 'Saying smooth muscle is voluntary — it is involuntary.', 'Naming the “calf muscle” — use the term gastrocnemius.', 'Forgetting that in the downward phase of a press-up the triceps works ECCENTRICALLY (it is still the working muscle).'],
  cards: [
    ['Three types of muscle?', 'Skeletal, smooth, cardiac.'], ['Voluntary muscle?', 'Skeletal muscle — under conscious control.'], ['Where is smooth muscle found?', 'Walls of blood vessels and digestive organs.'],
    ['Where is cardiac muscle found?', 'Only in the heart.'], ['Action of the biceps?', 'Flexion of the elbow.'], ['Action of the triceps?', 'Extension of the elbow.'],
    ['Action of the deltoid?', 'Abduction (and flexion/extension) of the shoulder.'], ['Action of the pectorals?', 'Adduction/flexion of the shoulder.'], ['Action of the latissimus dorsi?', 'Adduction and extension of the shoulder.'],
    ['Action of the gluteals?', 'Extension of the hip.'], ['Action of the quadriceps?', 'Extension of the knee.'], ['Action of the hamstrings?', 'Flexion of the knee.'],
    ['Action of the gastrocnemius?', 'Plantar flexion of the ankle.'], ['Concentric contraction?', 'Muscle shortens under tension.'], ['Eccentric contraction?', 'Muscle lengthens under tension.'],
    ['Isometric contraction?', 'Muscle stays the same length — no movement.']
  ],
  quiz: [
    { q: 'Which muscle extends the elbow?', o: ['Triceps', 'Biceps', 'Deltoid', 'Pectorals'], x: 'Back of the upper arm.' },
    { q: 'Which muscle plantar flexes the ankle?', o: ['Gastrocnemius', 'Hamstrings', 'Quadriceps', 'Gluteals'], x: 'Calf.' },
    { q: 'Cardiac muscle is…', o: ['involuntary and found only in the heart', 'voluntary and attached to bones', 'found in blood vessels', 'under conscious control'], x: 'Heart only.' },
    { q: 'Smooth muscle in artery walls helps with…', o: ['vasodilation and vasoconstriction', 'kicking', 'breathing out', 'bone growth'], x: 'Redirects blood flow.' },
    { q: 'The hamstrings mainly cause…', o: ['flexion of the knee', 'extension of the knee', 'abduction of the shoulder', 'plantar flexion'], x: 'Back of thigh.' },
    { q: 'Holding a plank is an example of…', o: ['isometric contraction', 'concentric contraction', 'eccentric contraction', 'circumduction'], x: 'No change in length.' },
    { q: 'The quadriceps when landing from a jump work…', o: ['eccentrically', 'concentrically', 'isometrically', 'not at all'], x: 'Lengthening under tension to control landing.' },
    { q: 'Which muscle abducts the shoulder?', o: ['Deltoid', 'Latissimus dorsi', 'Biceps', 'Gluteals'], x: 'Raises arm sideways.' },
    { q: 'The pull phase of front crawl mainly uses the…', o: ['latissimus dorsi', 'gastrocnemius', 'quadriceps', 'deltoid only'], x: 'Shoulder extension/adduction.' },
    { q: 'Driving out of the sprint blocks extends the hip using the…', o: ['gluteals', 'biceps', 'pectorals', 'deltoid'], x: 'Hip extensors.' }
  ],
  exam: [
    { q: 'Name the type of muscle that is found in the walls of blood vessels. [1]', m: 1, ms: ['smooth (involuntary) muscle'] },
    { q: 'Complete the table: muscle — action. (i) gluteals (ii) hamstrings (iii) deltoid. [3]', m: 3, ms: ['gluteals — extension of the hip', 'hamstrings — flexion of the knee (extension of the hip)', 'deltoid — abduction of the shoulder (flexion/extension)'] },
    { q: 'A volleyball player jumps to block the ball at the net.', parts: [
      { q: 'Name the muscle that causes plantar flexion of the ankle at take-off and state the type of contraction. [2]', m: 2, ms: ['gastrocnemius', 'concentric'] },
      { q: 'Analyse the role of the muscular system in the take-off and landing of the jump. [6]', m: 6, lv: true, ms: ['take-off: quadriceps extend the knees — concentric', 'gluteals extend the hips — concentric', 'gastrocnemius plantar flexes the ankle — concentric', 'deltoid abducts/flexes the shoulders to raise the arms to block', 'landing: quadriceps lengthen under tension — eccentric — to control landing and absorb force', 'antagonists (hamstrings) relax / co-ordinate', 'cardiac muscle increases heart rate; smooth muscle redirects blood to leg muscles'] }
    ], tag: 'struct' }
  ],
  sims: ['muscles', 'contract'], gens: []
});

TOPICS.push({
  id: '2.4', unit: '2', area: 'phys', ref: 'Muscular-skeletal system', title: 'Muscle fibre types, ligaments and tendons', short: 'Type I (slow) and type II (fast) fibres; ligaments and tendons',
  summary: 'Slow-twitch (type I) and fast-twitch (type II) muscle fibres: their characteristics and which sports and types of exercise (aerobic and anaerobic) they suit. Plus the functions of ligaments (bone to bone) and tendons (muscle to bone).',
  spec: [
    'Muscle fibre types: slow twitch (type I) and fast twitch (type II)',
    'Characteristics of each fibre type and their function in a variety of sports and in aerobic and anaerobic exercise',
    'The function of ligaments and tendons'
  ],
  learn: [
    { h: 'Slow-twitch and fast-twitch fibres', html: `
<p>Skeletal muscles contain a mix of fibre types. The proportion is mostly <b>inherited</b> (genetic), though training can improve how well each type works.</p>
<div class="tbl"><table><tr><th></th><th>Slow twitch (type I)</th><th>Fast twitch (type II)</th></tr>
<tr><td>Speed of contraction</td><td>slow</td><td>fast</td></tr>
<tr><td>Force of contraction</td><td>low</td><td>high</td></tr>
<tr><td>Fatigue</td><td>very resistant — can work for a long time</td><td>tire quickly</td></tr>
<tr><td>Energy</td><td><b>aerobic</b> (uses oxygen)</td><td><b>anaerobic</b> (without oxygen)</td></tr>
<tr><td>Blood supply (capillaries)</td><td>large — lots of oxygen delivered</td><td>smaller</td></tr>
<tr><td>Colour</td><td>red (lots of myoglobin)</td><td>white/pale</td></tr>
<tr><td>Suited to</td><td>marathon, long-distance cycling, triathlon, endurance swimming; posture</td><td>100 m sprint, shot put, weightlifting, jumping</td></tr></table></div>
<div class="box why"><b class="lbl">Mixed sports</b><p>Games such as football, hockey and netball need both: slow-twitch fibres for jogging and repeated efforts over the whole game, fast-twitch for sprints, jumps and shots. A 1500 m runner also relies on both.</p></div>` },
    { h: 'Ligaments and tendons', html: `
<div class="tbl"><table><tr><th></th><th>Ligaments</th><th>Tendons</th></tr>
<tr><td>Join</td><td><b>bone to bone</b></td><td><b>muscle to bone</b></td></tr>
<tr><td>Function</td><td>Stabilise the joint; prevent dislocation and unwanted movement</td><td>Transfer the pull of the muscle to the bone to create movement</td></tr>
<tr><td>Properties</td><td>Tough, slightly elastic</td><td>Strong, inelastic</td></tr>
<tr><td>Sport</td><td>Knee ligaments (e.g. ACL) keep the knee stable when changing direction</td><td>The Achilles tendon links the gastrocnemius to the heel bone for push-off</td></tr></table></div>
<div class="box tip"><b class="lbl">Memory aid</b><p><b>L</b>igaments <b>L</b>ink bones; <b>T</b>endons <b>T</b>ie muscle to bone.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why a marathon runner benefits from a high proportion of slow-twitch fibres. (2 marks)', s: ['Slow-twitch fibres are very resistant to fatigue and work aerobically.', 'They allow the runner to keep contracting the leg muscles for over 2 hours.'], a: 'Fatigue resistant, aerobic → long duration.' },
    { q: 'State the function of a tendon. (1 mark)', s: ['Attaches muscle to bone so the muscle can pull the bone to create movement.'], a: 'Muscle to bone; transmits force.' }
  ],
  pitfalls: ['Swapping ligaments (bone–bone) and tendons (muscle–bone).', 'Saying fast-twitch fibres are aerobic — they are anaerobic.', 'Saying you can change one fibre type into another by training — at GCSE: proportions are mainly genetic.', 'Writing “fast twitch for long events” — they fatigue quickly.'],
  cards: [
    ['Type I fibres are also called?', 'Slow-twitch fibres.'], ['Type II fibres are also called?', 'Fast-twitch fibres.'], ['Characteristics of slow-twitch fibres?', 'Slow, low force, fatigue resistant, aerobic, good blood supply, red.'],
    ['Characteristics of fast-twitch fibres?', 'Fast, high force, fatigue quickly, anaerobic.'], ['Sports suited to slow-twitch fibres?', 'Marathon, triathlon, long-distance cycling.'], ['Sports suited to fast-twitch fibres?', 'Sprinting, shot put, weightlifting, jumping.'],
    ['Ligament?', 'Joins bone to bone; stabilises the joint.'], ['Tendon?', 'Joins muscle to bone; transmits the pull of the muscle.'], ['What decides your fibre type proportion?', 'Mainly genetics (inheritance).']
  ],
  quiz: [
    { q: 'Which fibre type is best suited to a marathon?', o: ['Slow twitch (type I)', 'Fast twitch (type II)', 'Cardiac', 'Smooth'], x: 'Fatigue resistant.' },
    { q: 'Fast-twitch fibres…', o: ['contract quickly and forcefully but tire quickly', 'are aerobic', 'never tire', 'are found only in the heart'], x: 'Anaerobic, powerful.' },
    { q: 'A ligament joins…', o: ['bone to bone', 'muscle to bone', 'muscle to muscle', 'nerve to muscle'], x: 'Stability.' },
    { q: 'A tendon joins…', o: ['muscle to bone', 'bone to bone', 'cartilage to bone', 'heart to lungs'], x: 'Transmits force.' },
    { q: 'Slow-twitch fibres mainly use…', o: ['aerobic energy', 'anaerobic energy only', 'creatine phosphate only', 'no energy'], x: 'Lots of oxygen supply.' },
    { q: 'A shot putter would benefit most from…', o: ['fast-twitch fibres', 'slow-twitch fibres', 'long tendons', 'more ligaments'], x: 'Maximal power.' },
    { q: 'The Achilles is a…', o: ['tendon', 'ligament', 'bone', 'muscle'], x: 'Calf muscle to heel.' },
    { q: 'Which fibre has the better blood (capillary) supply?', o: ['Slow twitch', 'Fast twitch', 'Both equal', 'Neither'], x: 'Delivers oxygen for aerobic work.' }
  ],
  exam: [
    { q: 'State the function of a ligament. [1]', m: 1, ms: ['joins bone to bone / stabilises the joint / prevents dislocation'] },
    { q: 'Give two characteristics of fast-twitch (type II) muscle fibres. [2]', m: 2, ms: ['contract quickly', 'produce high force', 'fatigue quickly', 'work anaerobically', 'low capillary / blood supply'] },
    { q: 'Compare the importance of slow-twitch and fast-twitch muscle fibres for a football midfielder. [6]', m: 6, lv: true, ms: ['slow twitch: fatigue resistant, aerobic — needed to cover 10–12 km over 90 minutes', 'slow twitch: maintain jogging, repeated runs, posture', 'fast twitch: fast, powerful, anaerobic — sprints to win the ball, jumps for headers, shots', 'fast twitch fatigue quickly — so recovery between sprints needed', 'football is intermittent so both are needed', 'conclusion, e.g. slow twitch underpins the whole game; fast twitch decides key moments'] }
  ],
  sims: ['fibresort'], gens: []
});
