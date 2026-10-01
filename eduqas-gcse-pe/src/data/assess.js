/* ==========================================================
   ASSESSMENT DATA · key facts and the synoptic question bank
   ========================================================== */
const KEY_FACTS = [
  { h: 'Health and fitness', unit: '1', rows: [
    ['Health', 'complete physical, mental and social well-being, not merely the absence of disease'], ['Fitness', 'the ability to meet the demands of the environment'], ['Activity guideline', 'young people: average 60+ min a day; adults: 150 min a week'],
    ['Hypertension', 'persistently high blood pressure'], ['Atherosclerosis', 'fatty deposits narrow and harden arteries'], ['Obesity', 'very high body fat (BMI > 30)'] ] },
  { h: 'Diet and nutrition', unit: '1', rows: [
    ['Energy balance', 'energy in − energy out: positive → gain; negative → loss'], ['Daily guide', '≈ 2000 kcal (women), ≈ 2500 kcal (men)'], ['Carbohydrate', 'main energy source; stored as glycogen'],
    ['Protein', 'growth and repair'], ['Fat', 'energy at low intensity; insulation'], ['Minerals', 'calcium — bone; iron — red blood cells'], ['Water', 'hydration, temperature control'], ['Dehydration', '≈ 2% body mass lost reduces performance'] ] },
  { h: 'Fitness tests', unit: '1', rows: [
    ['CV endurance', 'multi-stage fitness test / Cooper 12-min run'], ['Muscular endurance', 'abdominal curl / press-up test'], ['Strength', 'hand grip dynamometer / 1RM'], ['Flexibility', 'sit and reach'],
    ['Body composition', 'skinfold callipers'], ['Agility', 'Illinois agility run'], ['Speed', '30 m / 50 m sprint'], ['Power', 'vertical jump'], ['Balance', 'stork balance'], ['Co-ordination', 'alternate-hand wall throw'], ['Reaction time', 'ruler drop'] ] },
  { h: 'Training', unit: '1', rows: [
    ['Max HR', '220 − age'], ['Aerobic zone', '60–80% max HR — CV endurance'], ['Anaerobic zone', '80–90% max HR — lactic acid system'], ['SPOV', 'specificity, progression, overload, variance'],
    ['FIT', 'frequency, intensity, time'], ['Strength', 'heavy load, low reps'], ['Muscular endurance', 'light load, high reps'], ['Plyometrics', 'power'], ['Fartlek', 'continuous, changing speed/terrain'] ] },
  { h: 'Skeleton and muscles', unit: '2', rows: [
    ['Long bones', 'humerus, radius, ulna, femur, tibia, fibula'], ['Flat bones', 'cranium, scapula, ribs'], ['Functions', 'movement, support, protection, blood cell production'],
    ['Ball and socket', 'shoulder, hip'], ['Hinge', 'elbow, knee'], ['Pivot', 'neck (atlas/axis)'], ['Ligament', 'bone to bone'], ['Tendon', 'muscle to bone'],
    ['Type I', 'slow twitch — aerobic, fatigue resistant'], ['Type II', 'fast twitch — anaerobic, powerful, tire quickly'] ] },
  { h: 'Heart and lungs', unit: '2', rows: [
    ['Cardiac output', 'HR × SV; ≈ 5 L/min at rest, 20–30 L/min max'], ['Stroke volume', '≈ 70 ml rest; ≈ 120+ ml exercise'], ['Resting HR', '60–80 bpm'], ['Blood pressure', '≈ 120/80 mmHg (systolic/diastolic)'],
    ['Minute ventilation', 'TV × breathing frequency; ≈ 6–7.5 L/min at rest'], ['Tidal volume', '≈ 0.5 L at rest'], ['Breathing rate', '12–15 breaths/min at rest'], ['Vital capacity', '≈ 4–5 L'] ] },
  { h: 'Energy', unit: '2', rows: [
    ['Aerobic', 'glucose + oxygen → energy + CO₂ + water'], ['Anaerobic', 'glucose → energy + lactic acid'], ['Creatine phosphate', 'up to ≈ 8–10 s'], ['Lactic acid system', '≈ 10 s – 1/2 min'],
    ['Oxygen debt', 'extra O₂ after exercise to remove lactic acid, restore CP'], ['Anaerobic threshold', 'intensity where lactic acid builds up rapidly'] ] },
  { h: 'Movement analysis', unit: '3', rows: [
    ['Concentric', 'muscle shortens'], ['Eccentric', 'muscle lengthens under tension'], ['Isometric', 'no change in length'], ['Agonist', 'prime mover'], ['Antagonist', 'relaxes to allow movement'],
    ['1st class', 'fulcrum in middle — neck, elbow extension'], ['2nd class', 'load in middle — ankle on tiptoe'], ['3rd class', 'effort in middle — elbow flexion, knee, hip, shoulder'], ['MA', 'effort arm ÷ load arm'],
    ['Sagittal plane', 'frontal axis — flexion/extension'], ['Frontal plane', 'sagittal axis — abduction/adduction'], ['Transverse plane', 'vertical axis — rotation'] ] },
  { h: 'Psychology', unit: '4', rows: [
    ['SMART', 'specific, measurable, agreed, realistic, time-phased'], ['IP model', 'input → decision making → output → feedback'], ['KR / KP', 'result / quality of technique'],
    ['Guidance', 'visual, verbal, manual, mechanical'], ['Stages of learning', 'cognitive, associative, autonomous'], ['Motivation', 'intrinsic (within) / extrinsic (rewards)'],
    ['Continua', 'basic–complex, open–closed, self–externally paced'], ['Practice', 'whole/part, fixed/varied'] ] },
  { h: 'Socio-cultural', unit: '5', rows: [
    ['Participation factors', 'family, gender, society, peers, cost, access, role models'], ['Target groups', 'gender, race, disability'], ['Golden triangle', 'sport – media – sponsorship'],
    ['Media roles', 'inform, educate, entertain, advertise'], ['Sportsmanship', 'fair play, spirit of the game'], ['Gamesmanship', 'bending the rules to gain an advantage'], ['WADA', 'World Anti-Doping Agency'] ] },
  { h: 'Component 2', unit: 'P', rows: [
    ['Practical', '3 activities × 20 (≥ 1 team, ≥ 1 individual)'], ['Analysis and evaluation', '10 + 10 marks'], ['Programme', '≥ 8 weeks recommended'], ['Practical bands', '4: 16–20 · 3: 11–15 · 2: 6–10 · 1: 1–5'] ] }
];

/* ---- Synoptic question bank: questions that link key areas (used in topic tabs and practice papers) ---- */
const BANK = [
  { topic: '1.6', tag: 'synoptic', q: 'A Year 11 student plays as a winger in rugby and wants to improve her speed and power over 8 weeks.', parts: [
    { q: 'Identify one fitness test she could use to measure power. [1]', m: 1, ms: ['vertical jump'] },
    { q: 'Explain how she could apply the principles of progression and specificity to her training. [4]', m: 4, ms: ['progression — gradually increase the training (more reps/sets/height of boxes) as she adapts', 'avoid injury / keep improving', 'specificity — training matches her role: short sprints, acceleration, plyometric bounds', 'anaerobic zone / fast-twitch fibres / energy system used in rugby sprints'] },
    { q: 'Evaluate plyometric training as a method of improving her performance as a winger. [6]', m: 6, lv: true, ms: ['plyometrics = explosive jumping/bounding — eccentric then concentric contraction', 'develops power — acceleration off the mark, side-steps, jumping in line-outs', 'targets fast-twitch fibres / anaerobic creatine phosphate system — matches short sprints', 'can be made specific (bounds, single-leg hops)', 'disadvantages: high stress on joints, injury risk; needs strength base and correct technique', 'does not develop CV endurance needed for 80 minutes', 'conclusion: very suitable as part of a programme combined with sprint and endurance work'] }
  ] },
  { topic: '2.7', tag: 'synoptic', q: 'The graph shows a 15-year-old midfielder’s heart rate during a hockey match: mostly 140–165 bpm, with frequent short peaks of 180–190 bpm.', parts: [
    { q: 'Calculate the midfielder’s maximum heart rate. [1]', m: 1, ms: ['220 − 15 = 205 bpm'] },
    { q: 'Explain which energy systems are being used at 150 bpm and at 188 bpm. [4]', m: 4, ms: ['150 bpm ≈ 73% max HR — aerobic', 'moderate intensity, long duration; oxygen supply meets demand', '188 bpm ≈ 92% max HR — anaerobic', 'sprints/high intensity; lactic acid / creatine phosphate'] },
    { q: 'Analyse how carbohydrate intake and hydration could affect the midfielder’s performance in the second half. [6]', m: 6, lv: true, ms: ['carbohydrate is the main fuel for both aerobic and anaerobic exercise', 'glycogen stores deplete over the match — fatigue, slower sprints late on', 'pre-match high-carbohydrate meal / half-time carbohydrate maintains stores', 'sweat losses → dehydration (≈ 2% body mass) → thicker blood, higher HR, overheating', 'dehydration slows reactions and decisions — mistakes', 'drinking water/sports drinks at half-time replaces fluid and salts', 'avoid over-hydration'] }
  ] },
  { topic: '3.3', tag: 'synoptic', q: 'A javelin thrower runs in, plants the front leg and throws.', parts: [
    { q: 'Name the agonist that extends the elbow at release and state the type of contraction. [2]', m: 2, ms: ['triceps', 'concentric'] },
    { q: 'Identify the class of lever at the elbow during extension. [1]', m: 1, ms: ['first class'] },
    { q: 'Explain how technology could be used to improve the thrower’s technique. [3]', m: 3, ms: ['video analysis — slow motion / frame by frame', 'compare with an elite model / identify faults in release angle or planting', 'gives knowledge of performance / visual feedback', 'measure release speed / distance accurately'] }
  ] },
  { topic: '4.3', tag: 'synoptic', q: 'A PE teacher is teaching a group of beginners to swim front crawl.', parts: [
    { q: 'Identify the stage of learning the swimmers are in. [1]', m: 1, ms: ['cognitive'] },
    { q: 'Explain one type of guidance and one type of practice that would suit these swimmers. [4]', m: 4, ms: ['guidance: visual (demonstration) / mechanical (float)', 'builds a mental picture / safety and confidence', 'practice: part practice — legs, arms, breathing separately', 'complex skill that can be broken down; reduces overload'] },
    { q: 'Evaluate the use of feedback to help these beginners improve. [6]', m: 6, lv: true, ms: ['beginners need extrinsic feedback — cannot yet use intrinsic feel', 'simple, positive feedback motivates and builds confidence', 'KR (did they reach the end / time) is easy to understand', 'KP on one key point (e.g. head position) corrects errors', 'too much / negative feedback overloads and demotivates', 'video/visual feedback can help; must be timely', 'judgement: simple, positive, extrinsic feedback mixing KR and limited KP is best'] }
  ] },
  { topic: '5.1', tag: 'synoptic', q: 'A town council wants to increase participation in physical activity among adults with sedentary lifestyles.', parts: [
    { q: 'State two health risks of a sedentary lifestyle. [2]', m: 2, ms: ['obesity', 'hypertension', 'atherosclerosis / heart disease', 'type 2 diabetes', 'stress / poor self-esteem / poor body image'] },
    { q: 'Evaluate strategies the council could use to increase participation and adherence in this group. [9]', m: 9, lv: true, ms: ['barriers: cost, time, access, low confidence, lack of motivation', 'low-cost / free sessions (park run, walking groups) — remove cost barrier', 'flexible times, local venues, childcare — remove time/access barriers', 'beginner-friendly, low-intensity sessions (60–70% max HR) with gradual progression — safe, realistic', 'social groups — friends, enjoyment → intrinsic motivation → adherence', 'SMART goals and monitoring (step counts, resting HR) — see progress', 'campaigns and local role models', 'limitations: funding; people may drop out when novelty/rewards end', 'conclusion: combine removing barriers with building enjoyment for long-term adherence'] }
  ] },
  { topic: '2.5', tag: 'synoptic', q: 'Explain how the cardiovascular and respiratory systems work together to supply oxygen to the working muscles during a 5 km run. [6]', m: 6, lv: true, ms: ['breathing rate and tidal volume increase → minute ventilation rises', 'oxygen diffuses from alveoli into capillaries (high to low concentration)', 'carried by haemoglobin in red blood cells', 'heart rate and stroke volume increase → higher cardiac output', 'vasodilation to working muscles, vasoconstriction to gut — redistribution', 'oxygen diffuses into muscle; CO₂ carried back to lungs and breathed out', 'aerobic energy for the run'] },
  { topic: '1.8', tag: 'synoptic', q: 'Analyse how a coach could use goal setting and the principles of training to plan a programme for a 1500 m runner. [9]', m: 9, lv: true, ms: ['SMART target, e.g. 5:10 → 5:00 in 10 weeks, agreed with coach', 'goal setting focuses attention, increases effort and motivation', 'specificity — aerobic and anaerobic work at race pace; legs; running', 'overload via FIT — more sessions, faster intervals, longer runs', 'progression — gradual increases to avoid injury', 'variance — fartlek, hills, continuous, intervals; avoids boredom/overuse', 'training zones — aerobic 60–80%, anaerobic 80–90% for race-specific intervals', 'monitoring — retests and diary; adjust goals', 'conclusion: goals and principles together give a structured, motivating plan'] },
  { topic: '5.4', tag: 'synoptic', q: 'An elite sprinter is offered a large sponsorship deal if she wins a gold medal.', parts: [
    { q: 'Explain how commercialisation might increase the pressure on the sprinter. [2]', m: 2, ms: ['sponsors/money depend on winning', 'pressure to win → anxiety / temptation to cheat'] },
    { q: 'Name a performance-enhancing drug a sprinter might be tempted to take and explain its effect. [2]', m: 2, ms: ['anabolic steroids (or stimulants)', 'increase muscle mass / strength / power (or alertness)'] }
  ] },
  { topic: '4.5', tag: 'synoptic', q: 'Compare the type of practice and guidance a coach should use for a basketball free throw and for passing in a basketball match. [6]', m: 6, lv: true, ms: ['free throw: closed, self-paced, fairly basic', '→ fixed practice — repetition from the same spot to groove technique', 'match pass: open, externally paced, decisions needed', '→ varied practice — small-sided games, defenders', 'guidance depends on stage: visual demonstration for beginners; verbal tactical guidance for experts', 'both can use whole practice; part practice if a technical fault appears', 'justified comparison'] },
  { topic: '2.8', tag: 'synoptic', q: 'Describe the short-term effects of exercise on the heart and explain the long-term effects of regular aerobic training on resting heart rate. [4]', m: 4, ms: ['short-term: heart rate increases / stroke volume increases / cardiac output increases', 'long-term: cardiac hypertrophy — heart becomes bigger, stronger', 'stroke volume increases', 'so resting heart rate decreases — same cardiac output with fewer beats'] }
];
