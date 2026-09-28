/* ==========================================================
   ASSESSMENT DATA · key facts, UMS grading, NEA guides, synoptic question bank
   ========================================================== */
const KEY_FACTS = [
  { h: 'Energy systems', unit: '1', rows: [
    ['ATP stores', '2–3 s of maximal work'], ['ATP-PC system', '≈ 8–10 s; 1 PC → 1 ATP; no fatiguing by-products; PC 50% restored in 30 s, ≈ 100% in 2–3 min'],
    ['Anaerobic glycolysis', '≈ 10 s – 2/3 min; 2 ATP per glucose; lactic acid (H⁺)'], ['Aerobic system', '> 2–3 min; ≈ 38 ATP per glucose; CO₂ + H₂O'],
    ['OBLA', '≈ 4 mmol/L blood lactate'], ['Lactate threshold', 'untrained ≈ 50–60% VO₂max; trained ≈ 70–85%'], ['VO₂max', 'untrained ≈ 35–45; elite endurance 70–85 ml/kg/min'] ] },
  { h: 'Training values', unit: '1', rows: [
    ['Maximum heart rate', '≈ 220 − age'], ['Aerobic training zone', '60–80% HRmax'], ['Maximum strength', '≥ 85% 1RM, 1–6 reps'], ['Hypertrophy', '70–85% 1RM, 8–12 reps'], ['Muscular endurance', '50–60% 1RM, 15–20+ reps'],
    ['ATP-PC intervals', '3–10 s at 95–100%, W:R ≥ 1:5'], ['Lactic intervals', '15–90 s at 80–95%, W:R 1:2–1:3'], ['PNF', 'stretch → isometric 6–10 s → relax → stretch further'], ['SMART (WJEC)', 'specific, measurable, agreed, realistic, time-phased'] ] },
  { h: 'Nutrition and hydration', unit: '1', rows: [
    ['Energy', 'carbohydrate 17 kJ/g · fat 37 kJ/g · protein 17 kJ/g'], ['Athlete diet', 'carbohydrate ≈ 55–65% · fat ≈ 20–30% · protein ≈ 12–20% of energy'], ['Protein needs', 'sedentary 0.75 · endurance 1.2–1.4 · strength 1.6–1.7 g/kg/day'],
    ['Glycaemic index', 'low ≤ 55 · medium 56–69 · high ≥ 70'], ['Pre-competition meal', '3–4 h before: high carbohydrate, low GI, low fat and fibre'], ['During long events', '30–60 g carbohydrate per hour'],
    ['Dehydration', '≥ 2% body mass lost impairs performance'], ['Rehydration', '≈ 1.5 L per kg body mass lost'], ['Isotonic', '6–8 g carbohydrate/100 ml — fluid + energy'], ['Hypotonic', '< 6 g/100 ml — fastest rehydration'], ['Hypertonic', '> 8 g/100 ml — energy, slow absorption'] ] },
  { h: 'Levers, planes and axes', unit: '1', rows: [
    ['1st order', 'fulcrum in the middle — neck; elbow extension'], ['2nd order', 'load in the middle — ankle plantar flexion'], ['3rd order', 'effort in the middle — elbow flexion, knee extension, most joints'],
    ['Sagittal plane', 'transverse axis — flexion/extension, somersault'], ['Frontal plane', 'frontal (AP) axis — abduction/adduction, cartwheel'], ['Transverse plane', 'longitudinal axis — rotation, twist, pirouette'] ] },
  { h: 'Cardio-respiratory values', unit: '3', rows: [
    ['Cardiac output', 'Q = HR × SV; rest ≈ 5 L/min; max ≈ 20–24 (untrained), 30–40 L/min (trained)'], ['Resting HR', '≈ 72 bpm; trained ≈ 50 (bradycardia < 60)'], ['Stroke volume', 'rest ≈ 70 ml untrained, ≈ 100 ml trained; plateaus at ≈ 40–60% intensity'],
    ['Minute ventilation', 'V_E = TV × f; rest ≈ 6–7.5 L/min; max ≈ 120–180 L/min'], ['Tidal volume', 'rest ≈ 0.5 L; max ≈ 2.5–3 L'], ['Blood to muscles', 'rest ≈ 15–20%; maximal exercise ≈ 80–85% of Q'],
    ['Ejection fraction', 'SV ÷ EDV × 100; rest ≈ 60%'], ['Blood pressure', 'BP = Q × resistance; ≈ 120/80 mmHg at rest'] ] },
  { h: 'Control centres and receptors', unit: '3', rows: [
    ['Cardiac control centre', 'medulla — sympathetic (accelerator) ↑ HR; parasympathetic (vagus) ↓ HR'], ['Vasomotor centre', 'medulla — vascular shunt via arterioles and pre-capillary sphincters'], ['Respiratory control centre', 'medulla — inspiratory and expiratory centres'],
    ['Chemoreceptors', '↑ CO₂, ↓ pH, ↓ O₂'], ['Baroreceptors', 'blood pressure'], ['Proprioceptors', 'movement and tension'], ['Thermoreceptors', 'temperature'] ] },
  { h: 'Biomechanics', unit: '3', rows: [
    ['Newton 1', 'inertia'], ['Newton 2', 'F = ma'], ['Newton 3', 'action–reaction'], ['Momentum', 'p = mv (kg m/s)'], ['Impulse', 'F × t = change in momentum (N s)'],
    ['Angular momentum', 'L = Iω — conserved in flight'], ['Projectile', 'speed, angle, height of release; 45° optimum only for equal heights'], ['Magnus', 'topspin ↓ dip · backspin ↑ float · sidespin curve'], ['Drag', '∝ velocity²; frontal area, shape, surface'], ['g', '9.8 N/kg'] ] },
  { h: 'Psychology and skill models', unit: '3', rows: [
    ['Weiner', 'ability (int/stable) · effort (int/unstable) · task difficulty (ext/stable) · luck (ext/unstable)'], ['Tuckman', 'forming, storming, norming, performing'], ['Steiner', 'actual = potential − faulty processes'],
    ['Chelladurai', 'required, actual, preferred behaviour → performance and satisfaction'], ['LSS', 'training/instruction, democratic, autocratic, social support, positive feedback'], ['Bandura self-efficacy', 'performance accomplishments, vicarious experience, verbal persuasion, emotional arousal'],
    ['DARMMM', 'demonstration, attention, retention, motor reproduction, motivation, matching'], ['STM', '7 ± 2 items, ≈ 30 s'], ['Hick’s law', 'choice RT ↑ with log of number of choices'] ] },
  { h: 'Sport and society', unit: '1', rows: [
    ['Arnold at Rugby', '1828–1842 — social control, Muscular Christianity'], ['FA / RFU / WRU', '1863 / 1871 / 1881'], ['Rugby split', '1895 — broken-time payments → Northern Union'], ['Rugby union professional', '1995'],
    ['Modern Olympics', 'IOC 1894; Athens 1896 — Pierre de Coubertin'], ['Mexico 1968', 'Black Power salute — Tommie Smith and John Carlos'], ['Gentlemen v Players', 'distinction abolished 1962'], ['London 2012', '≈ 30% of Team GB medallists privately educated (≈ 7% of population)'], ['Kick It Out', '1993 anti-racism campaign'] ] },
  { h: 'A2 sport and society', unit: '3', rows: [
    ['WADA', 'founded 1999; Code, Prohibited List, whereabouts, biological passport'], ['Coakley’s sports ethic', 'sacrifice, distinction, accept risk/pain, refuse limits'], ['Media functions', 'inform, interpret, educate, entertain, advertise'], ['Golden triangle', 'sport – media – sponsorship'],
    ['Cashmore’s levels', 'global competitions, satellite communications, sporting goods market'], ['Pyramid', 'foundation, participation, performance, excellence'], ['WCPP', 'Talent → Podium Potential → Podium'], ['Taylor Report', '1990 — all-seater stadiums'] ] }
];

/* ---- UMS grading (spec 4.2) ---- */
const UMS_UNITS = [['Unit 1', 120, [96, 84, 72, 60, 48]], ['Unit 2', 80, [64, 56, 48, 40, 32]], ['Unit 3', 180, [144, 126, 108, 90, 72]], ['Unit 4', 120, [96, 84, 72, 60, 48]]];
const QUAL_GRADES_AS = [['A', 160], ['B', 140], ['C', 120], ['D', 100], ['E', 80]];
const QUAL_GRADES_A = [['A', 400], ['B', 350], ['C', 300], ['D', 250], ['E', 200]];

/* ---- NEA guides (summary for the Assessment page) ---- */
const NEA_GUIDES = [
  { unit: '2', title: 'Unit 2 · Improving personal performance (AS)', time: '48 marks · 16% of A level · AO4',
    intro: 'Assessed as a player/performer (24) and as a coach or official (12) in one Appendix B activity, plus a Personal Performance Profile (12). Marked by your teacher with the Appendix A grids and moderated by a visiting WJEC moderator.',
    steps: [['Performer', 'Competitive/formal conditions; show the four Appendix D skills: competitive performance, variety of skills, fitness, tactics/decisions.'], ['Coach or official', 'Coach: plan and deliver a progressive session. Official: main official in a competitive situation (* activities only).'], ['PPP stage 1', 'Initial self-analysis with quantitative data.'], ['PPP stage 2', 'SMART targets justified by analysis and theory.'], ['PPP stage 3', 'Training programme ≥ 10 weeks; analyse the data.'], ['PPP stage 4', 'Evaluate the programme; recommendations.']],
    tips: ['1500–2500 words for the PPP; ≈ 8 hours (4 supervised for the evaluation).', 'Film off-site activities with candidate introductions.', 'Use data: norms, notational analysis, retests, % change.'] },
  { unit: '4', title: 'Unit 4 · Refining personal performance (A2)', time: '60 marks · 24% of A level · AO4',
    intro: 'Assessed in one role — player/performer, coach or official — out of 30, plus an Investigative Research assignment out of 30.',
    steps: [['Practical (30)', 'Five bands; A level criteria: analysis and evaluation of own and others’ performance, adaptation under pressure, leadership styles (coach), pre/post-match responsibility (official).'], ['IR stage 1 (6)', 'Initial analysis and research into subject content.'], ['IR stage 2 (8)', 'Evaluate the research and data → recommendations and a plan.'], ['IR stage 3 (8)', 'Carry out the programme (≥ 10 weeks); analyse effectiveness with data.'], ['IR stage 4 (8)', 'Evaluate the whole programme (supervised); strategies for the future.']],
    tips: ['2500–3500 words; ≈ 15 hours.', 'Reference a wide range of credible sources.', 'Writing accurately is assessed in the IR.'] }
];

/* ---- Synoptic question bank: deeper questions linking areas of study (used in topic tabs and practice papers) ---- */
const BANK = [
  { topic: '1.8', tag: 'synoptic', q: 'A 400 m hurdler trains six days a week in the pre-season.', parts: [
    { q: 'Identify the predominant energy system in a 400 m hurdles race and justify your answer. [2]', m: 2, ms: ['anaerobic glycolysis (lactic acid system)', 'high-intensity effort lasting ≈ 50–60 s'] },
    { q: 'Explain how lactic acid causes fatigue in the final 100 m. [3]', m: 3, ms: ['lactic acid dissociates, releasing H⁺ ions', 'pH falls / muscle becomes acidic', 'enzymes (e.g. PFK) inhibited → slower ATP resynthesis → force falls'] },
    { q: 'Design one interval session to improve her lactate tolerance, using precise values. [4]', m: 4, ms: ['work 30–90 s (e.g. 6 × 300 m)', 'intensity 80–95% max / race pace', 'recovery W:R ≈ 1:2–1:3 (e.g. 3 min)', 'sets/progression, e.g. 2 sets, add a rep every 2 weeks (overload)'] },
    { q: 'Discuss how periodisation and goal setting could help her peak for the championships. [8]', m: 8, lv: true, ms: ['macro-, meso- and microcycles planned back from the championship', 'preparation phase: general then specific conditioning', 'competition phase: race-specific work, taper — reduce volume, keep intensity', 'transition: active rest', 'SMART targets for each mesocycle (e.g. 300 m time trial)', 'short-term goals motivate, give feedback, build self-efficacy', 'avoid overtraining / reversibility; monitor with tests', 'judgement'] }
  ] },
  { topic: '1.11', tag: 'synoptic', q: 'A penalty taker in a rugby final prepares to kick a conversion to win the match.', parts: [
    { q: 'Using the inverted-U theory, explain how his arousal could affect the kick. [3]', m: 3, ms: ['moderate/optimal arousal → best performance', 'over-arousal → narrowed attention, muscle tension → poor kick', 'kicking is a fine, closed skill with a relatively low optimum (expert may cope with higher)'] },
    { q: 'Classify the conversion kick on the pacing and environmental continua. [2]', m: 2, ms: ['self-paced — kicker controls timing', 'closed — stable, predictable environment'] },
    { q: 'Explain how a pre-kick routine combining somatic and cognitive techniques could improve his performance. [4]', m: 4, ms: ['somatic: breathing control / centring lowers HR and muscle tension', 'cognitive: imagery of a successful kick / positive self-talk', 'selective attention on relevant cues (target, ball)', 'routine is automatic / builds self-efficacy; keeps arousal in ZOF'] }
  ] },
  { topic: '3.4', tag: 'synoptic', q: 'An amateur triathlete follows 16 weeks of endurance training.', parts: [
    { q: 'Explain how her resting heart rate will change and why. [3]', m: 3, ms: ['falls — bradycardia', 'cardiac hypertrophy → larger SV', 'resting Q unchanged so HR = Q ÷ SV falls'] },
    { q: 'Explain two adaptations that increase her lactate threshold. [4]', m: 4, ms: ['more mitochondria/aerobic enzymes → more pyruvate oxidised aerobically', 'so less lactate produced at a given intensity', 'more capillaries/myoglobin → more O₂ delivered and lactate removed', 'more buffering / fat oxidation → glycogen sparing'] },
    { q: 'Evaluate the use of GPS and heart-rate data to monitor her training. [6]', m: 6, lv: true, ms: ['HR shows internal load; zones/Karvonen guide intensity', 'GPS gives speed, distance, pacing in running/cycling', 'track progress: lower HR at same pace = adaptation', 'objective, real time, stored for analysis', 'limitations: GPS poor in pool/indoors; HR affected by heat, dehydration (drift), caffeine', 'cost/data overload; judgement: combine with RPE/tests'] }
  ] },
  { topic: '3.9', tag: 'synoptic', q: 'A springboard diver performs a forward 2½ somersault in the tuck position.', parts: [
    { q: 'Identify the plane and axis of rotation for the somersault. [2]', m: 2, ms: ['sagittal plane', 'transverse (horizontal) axis'] },
    { q: 'Leaving the board her moment of inertia is 14 kg m² and angular velocity 3 rad/s. In the tuck her moment of inertia is 3.5 kg m². Calculate her angular velocity in the tuck. [2]', m: 2, ms: ['L = 14 × 3 = 42 kg m²/s', 'ω = 42 ÷ 3.5 = 12 rad/s'] },
    { q: 'Explain how Newton’s third law helps her generate height and rotation at take-off. [3]', m: 3, ms: ['she pushes down (and back) on the board — action', 'board pushes up on her with an equal and opposite reaction force', 'reaction force acting outside her centre of mass (eccentric) creates torque → rotation'] },
    { q: 'Discuss how skill acquisition theory could help a coach teach this dive to a developing diver. [6]', m: 6, lv: true, ms: ['complex, high-organisation, dangerous skill', 'progressive part practice / whole–part–whole: dry-land somersaults, 1½ first', 'mechanical guidance: harness / trampoline with spotting belt — safety and confidence', 'visual guidance: video/demonstration, split-screen; verbal cues for tuck timing', 'feedback: KP from video; intrinsic kinaesthesis as she progresses', 'withdraw guidance to avoid dependence; distributed practice; judgement'] }
  ] },
  { topic: '3.20', tag: 'synoptic', q: 'An elite cyclist tests positive for EPO.', parts: [
    { q: 'Explain why EPO would improve the cyclist’s performance. [3]', m: 3, ms: ['increases red blood cell production / haematocrit', 'more haemoglobin → more O₂ carried to muscles', '↑ VO₂max / delays OBLA → higher sustainable power'] },
    { q: 'Suggest two reasons why the cyclist may have chosen to dope. [2]', m: 2, ms: ['desire to win / pressure from team, sponsors, nation', 'financial rewards / belief others dope / low chance of detection'] },
    { q: 'Evaluate the effectiveness of the biological passport in deterring doping in endurance sports. [6]', m: 6, lv: true, ms: ['records blood markers over time; detects abnormal changes indirectly', 'catches micro-dosing and new substances that direct tests miss', 'deterrent — samples stored and retested for 10 years', 'limitations: natural variation, altitude training, legal challenges; cost', 'not all athletes/countries tested equally', 'judgement'] }
  ] },
  { topic: '1.18', tag: 'synoptic', q: 'Participation data show that girls in Wales take part in extra-curricular sport less than boys, and the gap widens with age.', parts: [
    { q: 'Suggest how the self-fulfilling prophecy could contribute to this gap. [3]', m: 3, ms: ['teachers/coaches may hold lower expectations of girls (stereotypes)', 'girls then receive less attention/feedback/opportunities', 'they perform and participate less, “confirming” the expectation'] },
    { q: 'Use attribution theory to explain why some girls may drop out of sport. [3]', m: 3, ms: ['repeated failure attributed to lack of ability — internal, stable', 'leads to learned helplessness', 'low self-efficacy → disaffection and drop-out'] },
    { q: 'Evaluate strategies that Sport Wales, schools and NGBs could use to increase girls’ participation. [8]', m: 8, lv: true, ms: ['barriers: body image, stereotypes, provision, media, role models', 'girls-only sessions and choice of activities (esteem, provision)', 'female coaches/role models, This Girl Can-style campaigns, media coverage of women’s sport', 'mastery climate, attributional retraining, praise effort (psychology)', 'NGB programmes, school–club links, affordable/accessible provision', 'use of data (School Sport Survey) to target interventions', 'limitations: funding, deep-rooted attitudes, need for sustained change', 'judgement'], tag: 'ext' }
  ] }
];
