/* ==========================================================
   ASSESSMENT DATA · key facts, internal-unit criteria, guides and the synoptic question bank
   ========================================================== */
const KEY_FACTS = [
  { h: 'Skeletal system', unit: '1', rows: [
    ['Bone types', 'long · short · flat · sesamoid · irregular'], ['Vertebrae', 'cervical 7 · thoracic 12 · lumbar 5 · sacrum 5 fused · coccyx 4 fused'], ['Axial', 'cranium, vertebral column, ribs, sternum'],
    ['Functions', 'support, protection, muscle attachment, blood cell production, mineral store, leverage, weight bearing, reduce friction'], ['Bone growth', 'osteoblasts build · osteoclasts break down · epiphyseal plate'],
    ['Synovial joints', 'ball and socket (shoulder, hip) · hinge (elbow, knee, ankle) · condyloid (wrist) · pivot (atlas/axis) · gliding (carpals) · saddle (thumb)'] ] },
  { h: 'Muscular system', unit: '1', rows: [
    ['Muscle types', 'cardiac (involuntary, non-fatiguing) · skeletal (voluntary, fatiguing) · smooth (involuntary, slow)'], ['Roles', 'agonist · antagonist · synergist · fixator'], ['Contractions', 'concentric (shortens) · eccentric (lengthens) · isometric (no change)'],
    ['Type I', 'slow oxidative — fatigue resistant, aerobic'], ['Type IIa', 'fast oxidative glycolytic'], ['Type IIx', 'fast glycolytic — very powerful, fatigues quickly'], ['All or none law', 'a motor unit contracts fully or not at all'] ] },
  { h: 'Respiratory system', unit: '1', rows: [
    ['Pathway', 'nasal cavity → pharynx → larynx → trachea → bronchi → bronchioles → alveoli'], ['Inspiration', 'diaphragm + external intercostals contract'], ['Active expiration', 'internal intercostals + abdominals'],
    ['Tidal volume', '≈ 0.5 L at rest'], ['Vital capacity', '≈ 4–5 L'], ['Residual volume', '≈ 1–1.5 L'], ['Minute ventilation', 'TV × breathing rate; ≈ 6–7.5 L/min at rest'], ['Control', 'medulla oblongata; chemoreceptors (↑ CO₂, ↓ pH)'] ] },
  { h: 'Cardiovascular system', unit: '1', rows: [
    ['Valves', 'tricuspid (right) · bicuspid (left) · semi-lunar'], ['Conduction', 'SAN → AVN → bundle of His → Purkinje fibres'], ['Nervous control', 'sympathetic ↑ HR · parasympathetic ↓ HR'],
    ['Cardiac output', 'HR × SV; ≈ 5 L/min at rest'], ['Blood', 'RBC (O₂) · WBC (infection) · platelets (clotting) · plasma (transport)'], ['Adaptations', 'hypertrophy, ↑ SV, ↓ RHR, capillarisation, ↓ resting BP, faster recovery, ↑ blood volume'] ] },
  { h: 'Energy systems', unit: '1', rows: [
    ['ATP', 'ATP → ADP + P + energy; stores ≈ 2–3 s'], ['ATP-PC', 'anaerobic · PC fuel · ≈ 8–10 s · recovery 2–3 min'], ['Lactate', 'anaerobic glycolysis · ≈ 10 s–2 min · lactic acid · 2 ATP · recovery ≈ 1–2 h'],
    ['Aerobic', 'mitochondria · glycolysis, Krebs cycle, ETC · ≈ 36–38 ATP · CO₂ + water'], ['Adaptations', '↑ creatine stores · ↑ lactate tolerance · ↑ fat use, glycogen, mitochondria'] ] },
  { h: 'Health monitoring norms', unit: '2', rows: [
    ['BMI', '< 18.5 under · 18.5–24.9 healthy · 25–29.9 overweight · 30+ obese'], ['Blood pressure', 'ideal 90/60–120/80 · pre-high to 139/89 · high ≥ 140/90'], ['Resting HR', 'average 60–80 · athletes 50–60 · elite 40–50'],
    ['WHR men', '< 0.90 low · 0.90–0.99 moderate · ≥ 1.0 high risk'], ['WHR women', '< 0.80 low · 0.80–0.84 moderate · ≥ 0.85 high risk'] ] },
  { h: 'Guidelines and nutrition', unit: '2', rows: [
    ['Activity (adults)', '150 min moderate or 75 vigorous per week + strength 2 days'], ['Activity (5–18)', 'average 60 min a day'], ['Alcohol', '≤ 14 units a week, spread over 3+ days'], ['Salt', '≤ 6 g a day'],
    ['Energy', '1 kcal = 4.184 kJ · carb/protein 4 kcal/g · fat 9 kcal/g'], ['Sports drinks', 'hypotonic < 6% · isotonic 6–8% · hypertonic > 8%'], ['Rehydration', '≈ 1.5 L per kg lost'] ] },
  { h: 'Training', unit: '2', rows: [
    ['HRmax', '220 − age'], ['Aerobic zone', '≈ 60–85% HRmax'], ['Karvonen', 'THR = RHR + % × (HRmax − RHR)'], ['Strength', '80–100% 1RM · 1–6 reps · long rest · pyramid sets'],
    ['Muscular endurance', '50–60% 1RM · 15–20+ reps · short rest'], ['FITT', 'frequency, intensity, time, type'], ['SMARTER', 'specific, measurable, achievable, realistic, time-related, exciting, recorded'], ['Periodisation', 'macro (season) · meso (4–6 weeks) · micro (1 week)'] ] },
  { h: 'Professional development', unit: '3', rows: [
    ['Sectors', 'public · private · voluntary · third sector · public/private partnership'], ['Employment', 'full time · part time · fixed term · self-employed · zero-hours · apprenticeship'], ['DBS', 'enhanced + barred list for regulated activity'],
    ['Bodies', 'CIMSPA · UK Coaching · NGBs · AALA · (REPs)'], ['Documents', 'advert · job analysis · job description · person spec · application form · CV · letter'], ['SWOT', 'strengths, weaknesses (internal) · opportunities, threats (external)'] ] },
  { h: 'Sports psychology', unit: '6', rows: [
    ['Personality', 'trait · social learning · interactional'], ['Arousal', 'drive · inverted U · catastrophe · IZOF'], ['Anxiety', 'state/trait · cognitive/somatic/behavioural'], ['Stress process', 'demand → perception → response → consequences'],
    ['TARGET', 'task, authority, reward, grouping, evaluation, timing'], ['Bandura', 'performance accomplishments, vicarious experience, verbal persuasion, emotional arousal'], ['Tuckman', 'forming, storming, norming, performing'], ['Steiner', 'actual = potential − faulty processes'],
    ['Carron', 'environmental, personal, leadership, team'], ['Leadership', 'trait, behavioural, interactional, multidimensional; prescribed/emergent; autocratic/democratic'] ] }
];

/* Internal unit assessment criteria (summarised from the specification) */
const AIMS = {
  '3': { A: 'Understand the career and job opportunities in the sports industry', B: 'Explore own skills using a skills audit to inform a career development action plan', AB: 'Learning aims A and B', C: 'Undertake a recruitment activity to demonstrate the processes that can lead to a successful job offer', D: 'Reflect on the recruitment and selection process and your individual performance', CD: 'Learning aims C and D' },
  '6': { A: 'Understand how personality, motivation and competitive pressure can affect sport performance', B: 'Examine the impact of group dynamics in team sports and its effect on performance', C: 'Explore psychological skills training programmes designed to improve performance' }
};
const CRITERIA = {
  '3': [
    { aim: 'A', grade: 'P', id: 'A.P1', text: 'Explain the different career pathways, the associated job opportunities and their requirements in the sports industry.' },
    { aim: 'A', grade: 'P', id: 'A.P2', text: 'Explain the development pathway into a selected career in the sports industry.' },
    { aim: 'A', grade: 'M', id: 'A.M1', text: 'Analyse the professional development requirements and opportunities for specialism or promotion in different career pathways and the associated job opportunities.' },
    { aim: 'B', grade: 'P', id: 'B.P3', text: 'Explain how a selected sports industry career matches own personal skills audit outcomes.' },
    { aim: 'B', grade: 'P', id: 'B.P4', text: 'Develop a career development action plan to meet the requirements of an intended sports career, using skills audit outcomes.' },
    { aim: 'B', grade: 'M', id: 'B.M2', text: 'Analyse own personal skills audit outcomes against a selected career in the sports industry.' },
    { aim: 'B', grade: 'M', id: 'B.M3', text: 'Develop a career development action plan with specific relevance to the requirements of the intended career and skills audit outcomes.' },
    { aim: 'AB', grade: 'D', id: 'AB.D1', text: 'Justify how own skills audit outcomes and development action plan align to the chosen career pathway, based on comprehensive knowledge of the career.' },
    { aim: 'C', grade: 'P', id: 'C.P5', text: 'Prepare appropriate documentation for use in selection and recruitment activities.' },
    { aim: 'C', grade: 'P', id: 'C.P6', text: 'Participate in the selection interviews and activities as an interviewee.' },
    { aim: 'C', grade: 'M', id: 'C.M4', text: 'In interviews and activities, demonstrate analytical responses and questioning, and activities that allow assessment of skills and knowledge.' },
    { aim: 'D', grade: 'P', id: 'D.P7', text: 'Review own performance in role in the interviewing activities, supported by an updated SWOT analysis.' },
    { aim: 'D', grade: 'M', id: 'D.M5', text: 'Analyse the results of the process and how your skills development will contribute to your future success.' },
    { aim: 'CD', grade: 'D', id: 'CD.D2', text: 'Demonstrate individual responsibility and effective self-management during the recruitment activity.' },
    { aim: 'CD', grade: 'D', id: 'CD.D3', text: 'Evaluate how well the documents prepared, and own performance in the interview activities, supported the process for accessing the selected career pathway.' }
  ],
  '6': [
    { aim: 'A', grade: 'P', id: 'A.P1', text: 'Describe how personality and motivational factors may impact on sports performance.' },
    { aim: 'A', grade: 'P', id: 'A.P2', text: 'Describe how differing levels of arousal, anxiety and self-confidence can affect sports performance.' },
    { aim: 'A', grade: 'M', id: 'A.M1', text: 'Explain how personality and motivational factors may impact on sports performance.' },
    { aim: 'A', grade: 'M', id: 'A.M2', text: 'Explain how control of arousal, anxiety and stress and self-confidence can impact on sports performance.' },
    { aim: 'A', grade: 'D', id: 'A.D1', text: 'Analyse the relationship between motivational factors, anxiety and stress and self-confidence and their impact on sports performance.' },
    { aim: 'B', grade: 'P', id: 'B.P3', text: 'Describe how group cohesion and leadership contribute to the development of a successful sports team.' },
    { aim: 'B', grade: 'P', id: 'B.P4', text: 'Produce sociograms showing relationships between members of a sports group.' },
    { aim: 'B', grade: 'M', id: 'B.M3', text: 'Explain sociogram results and how they can be used to improve group cohesion and leadership potential in sport.' },
    { aim: 'B', grade: 'D', id: 'B.D2', text: 'Analyse how group cohesion and leadership can contribute to the success of a sports team.' },
    { aim: 'C', grade: 'P', id: 'C.P5', text: 'Describe different psychological skills that could be used to improve performance.' },
    { aim: 'C', grade: 'P', id: 'C.P6', text: 'Design a psychological skills training programme to improve performance.' },
    { aim: 'C', grade: 'M', id: 'C.M4', text: 'Explain the design of your psychological skills training programme, making comparisons between your design and others.' },
    { aim: 'C', grade: 'D', id: 'C.D3', text: 'Evaluate the design of your psychological skills training programme, suggesting and justifying alternative techniques that could be used to improve performance.' }
  ]
};

/* Guides shown on the Assessment page (named NEA_GUIDES for the shared engine) */
const NEA_GUIDES = [
  { unit: '2', title: 'Unit 2 · the set task', time: 'External · 60 marks · Part A one week before · Part B 2½ hours supervised',
    intro: 'You receive a client case study a week before the supervised assessment. In Part B you interpret the client’s lifestyle and screening data, then develop and justify a fitness training programme and nutritional advice.',
    steps: [['Read and annotate', 'Highlight every piece of data and every barrier, preference and goal in the case study.'], ['Interpret', 'Compare BP, resting HR, BMI and WHR with norms; identify health risks and lifestyle factors and how they interact.'], ['Lifestyle', 'Recommend and justify lifestyle modification techniques that fit the client’s barriers.'], ['Nutrition', 'Energy balance, macro- and micronutrients, hydration, timing, any ergogenic aids — all justified for this client.'], ['Programme', 'Aims, objectives, SMARTER goals, resources; methods for each component; FITT with numbers; progression; rest; periodisation.'], ['Justify throughout', 'Every recommendation linked to the client’s data, goals and preferences.']],
    tips: ['Practise with the Unit 2 practice set tasks in this app.', 'Pre-calculate HRmax, training zones, BMI and WHR in Part A.', 'Refer to a GP when screening shows a risk.'] },
  { unit: '3', title: 'Unit 3 · assignments', time: 'Internal · 60 GLH · maximum two assignments',
    intro: 'Assignment 1 (aims A and B): a report investigating two contrasting career pathways and justifying your choice, with a personal skills audit and career development action plan. Assignment 2 (aims C and D): recruitment documents, interviews (as interviewee and interviewer), a 15–20 minute practical activity, and reflection with an updated SWOT.',
    steps: [['Research two contrasting pathways', 'Jobs, sectors, employment types, entry routes, standards, professional bodies, local and national examples.'], ['Skills audit and SWOT', 'Rate your skills with evidence against the chosen career.'], ['CDAP', 'Aims, timescales (now to 10 years), milestones, measures, development activities.'], ['Recruitment documents', 'Advert, job analysis, job description, person specification, application form, CV, letter.'], ['Interviews and practical activity', 'Interview and be interviewed; micro-coach/teach/instruct or test administration; feedback forms.'], ['Reflect', 'Review your roles; updated SWOT; action plan.']],
    tips: ['Reference credible sources (CIMSPA, NGBs, UK Coaching).', 'Keep all documents and feedback forms for your portfolio.', 'Use the criteria tracker on this page.'] },
  { unit: '6', title: 'Unit 6 · assignments', time: 'Internal · 60 GLH · maximum three assignments',
    intro: 'Assignment A: a report on personality (including personality tests), motivation, arousal, anxiety, stress and self-confidence. Assignment B: a report on group development, cohesion and leadership, with sociograms. Assignment C: a psychological skills training programme.',
    steps: [['Personality tests', 'Administer and interpret a personality test (e.g. EPI-style questionnaire); discuss limitations.'], ['Motivation and pressure', 'Motivational climate, TARGET, attribution; arousal theories; anxiety and stress; self-confidence and Bandura.'], ['Sociograms', 'Collect choices from a real team; draw and interpret (stars, isolates, cliques).'], ['Cohesion and leadership', 'Tuckman, Steiner, Carron, leadership theories, applied to teams at different levels.'], ['PST programme', 'Assess an athlete; choose techniques; aims, action plan, weekly content, evaluation, milestones, timeframe.'], ['Evaluate', 'Compare with others’ designs; suggest and justify alternatives.']],
    tips: ['Use real athletes and teams for authentic evidence.', 'Link theory to performance throughout.', 'For Distinction, analyse relationships and justify alternatives.'] }
];

/* ---- Synoptic question bank: questions linking units/systems (used in topic tabs and papers) ---- */
const BANK = [
  { topic: '1.19', tag: 'synoptic', q: 'A rugby union prop competes in an 80-minute match involving scrums, rucks, tackles and short sprints.', parts: [
    { q: 'Identify the energy system mainly used during a scrum lasting 6 seconds. [1]', m: 1, ms: ['ATP-PC (alactic) system'] },
    { q: 'Explain how the skeletal and muscular systems work together during a scrum. [4]', m: 4, ms: ['muscles (quadriceps, gluteals, gastrocnemius) contract to extend hip/knee/ankle', 'pull on long bones acting as levers at hinge/ball-and-socket joints', 'isometric contractions of trunk muscles (erector spinae, abdominals) and trapezius stabilise the spine/shoulders', 'skeleton supports and bears weight; flat bones (ribs, cranium) protect organs; ligaments stabilise joints'] },
    { q: 'Evaluate how the cardiovascular and energy systems interrelate to allow the prop to repeat high-intensity efforts throughout the match. [8]', m: 8, lv: true, ms: ['high-intensity efforts use ATP-PC and lactate systems', 'between efforts the aerobic system resynthesises PC (2–3 min) and removes lactate — needs O₂', 'cardiovascular system delivers O₂ (↑ HR, SV, Q, vascular shunt) and removes CO₂ and lactate', 'insufficient recovery time → lactate accumulates, fatigue', 'long-term adaptations: cardiac hypertrophy, capillarisation, ↑ creatine stores and lactate tolerance improve repeat effort ability', 'respiratory links: gaseous exchange, ↑ ventilation', 'judgement: aerobic fitness/cardiovascular function underpins repeated anaerobic efforts'] }
  ] },
  { topic: '1.14', tag: 'synoptic', q: 'A 17-year-old cyclist has trained aerobically five times a week for two years.', parts: [
    { q: 'State two long-term adaptations of the cardiovascular system she is likely to have. [2]', m: 2, ms: ['cardiac hypertrophy', 'increased stroke volume', 'decreased resting heart rate', 'capillarisation', 'reduced resting BP', 'increased blood volume', 'faster HR recovery'] },
    { q: 'Assess how adaptations of the muscular and energy systems improve her endurance performance. [6]', m: 6, lv: true, ms: ['↑ mitochondria (number and size) — more aerobic ATP', '↑ myoglobin — more O₂ stored/transported in muscle', '↑ glycogen and fat stores; ↑ fat use — spares glycogen, delays fatigue', '↑ capillarisation (link) — better O₂ delivery', 'type I/IIa fibres more fatigue resistant', 'judgement'] }
  ] },
  { topic: '1.11', tag: 'synoptic', q: 'Discuss how the respiratory, cardiovascular and muscular systems respond during the first 5 minutes of a 10 km run. [8]', m: 8, lv: true, ms: ['anticipatory rise in HR (adrenaline) before the start', 'muscles: ↑ blood supply, temperature, pliability; type I fibres recruited; lactate early before steady state', 'respiratory: ↑ breathing rate and tidal volume; chemoreceptors/medulla', 'cardiovascular: ↑ HR, SV, cardiac output; ↑ systolic BP; vascular shunt', 'oxygen deficit at start → anaerobic contribution until aerobic system meets demand (steady state)', 'gaseous exchange at alveoli and muscle', 'links between systems clearly made', 'conclusion'] },
  { topic: '1.3', tag: 'synoptic', q: 'Analyse the role of the skeletal and muscular systems in the upward phase of a squat. [6]', m: 6, lv: true, ms: ['hip extension (ball and socket: femur/pelvis) — gluteals agonist concentric, hip flexors antagonist', 'knee extension (hinge: femur/tibia) — quadriceps agonist concentric, hamstrings antagonist', 'ankle plantarflexion — gastrocnemius/soleus', 'erector spinae/abdominals isometric to keep neutral spine (fixators)', 'synovial joint structures reduce friction and stabilise', 'long bones as levers; links to safe technique'] },
  { topic: '2.14', tag: 'synoptic', q: 'Mia is 32, works in an office, walks 20 minutes a day and wants to complete a 10 km run in 16 weeks. Resting HR 74 bpm, BP 124/82 mmHg, BMI 24.', parts: [
    { q: 'Calculate Mia’s aerobic training zone (60–85% of HRmax). [2]', m: 2, ms: ['HRmax = 220 − 32 = 188 bpm', '60% = 113 bpm; 85% = 160 bpm (zone 113–160 bpm)'] },
    { q: 'Justify the training methods and principles of training you would use in Mia’s 16-week programme. [10]', m: 10, lv: true, ms: ['interpret data: healthy BMI, slightly pre-high BP, average RHR — suitable to start progressive aerobic training', 'continuous training early (mesocycle 1): 3 × 20–30 min at 60–70% HRmax; walk–run progression', 'fartlek and interval training later to improve pace and anaerobic threshold', 'muscular endurance/core (circuits, bands) 1–2×/week for running economy and injury prevention', 'FITT with numbers; progression ≈ 10% per week; recovery week every 4th week', 'specificity (running), overload, reversibility, variation, individual needs (time at work, preferences)', 'periodisation: macro 16 weeks, meso blocks, micro weekly plan; taper before race', 'SMARTER goal and recording progress', 'resources: outdoor routes, park run, heart-rate monitor', 'reasoned justification throughout'] }
  ] },
  { topic: '2.8', tag: 'synoptic', q: 'A 24-year-old amateur triathlete trains twice a day and competes in an Olympic-distance triathlon (≈ 2–2½ hours).', parts: [
    { q: 'Recommend a sports drink for use during the race and justify your choice. [2]', m: 2, ms: ['isotonic (6–8% carbohydrate)', 'replaces fluid and provides glucose; absorbed quickly during a long event'] },
    { q: 'Evaluate the use of carbohydrate loading and energy gels for this athlete. [6]', m: 6, lv: true, ms: ['event > 90 min — glycogen depletion likely', 'carbohydrate loading: taper + 8–10 g/kg/day for 3–4 days maximises glycogen — delays fatigue', 'negatives: weight gain from water, bloating; need to practise in training', 'energy gels during cycle/run every 30–45 min maintain blood glucose', 'negatives: GI upset, need water, cost', 'judgement: both appropriate if practised; links to aerobic energy system'] }
  ] },
  { topic: '2.5', tag: 'synoptic', q: 'Explain how regular aerobic training could improve the results of a client’s health monitoring tests over six months. [6]', m: 6, lv: true, ms: ['resting HR decreases — cardiac hypertrophy and ↑ stroke volume (Unit 1 link)', 'resting BP decreases — ↓ peripheral resistance, healthier arteries', 'BMI may fall with negative energy balance — more energy expenditure', 'WHR falls as abdominal fat is used — lower CHD/diabetes risk', 'changes depend on adherence, diet and intensity/duration', 'interpretation against norms before and after'] },
  { topic: '6.4', tag: 'synoptic', q: 'A county netball shooter’s shooting percentage drops from 85% in training to 60% in important matches. Her coach notes that she worries about missing and her hands shake.', parts: [
    { q: 'Identify the type of anxiety shown by (a) worrying about missing (b) shaking hands. [2]', m: 2, ms: ['(a) cognitive anxiety', '(b) somatic anxiety'] },
    { q: 'Evaluate psychological skills the coach could use to improve her performance in matches. [8]', m: 8, lv: true, ms: ['assess: interview/questionnaire — high cognitive and somatic anxiety', 'relaxation: breathing control, PMR to reduce somatic symptoms', 'positive and instructional self-talk to replace negative thoughts; thought stopping', 'imagery/mental rehearsal of successful shots; pre-shot routine', 'process goals rather than outcome goals (shooting %)', 'reversal theory — reinterpret arousal; self-efficacy through performance accomplishments in pressure practice', 'evaluation: some techniques take weeks; must be practised in training; individual differences', 'judgement'] }
  ] }
];
