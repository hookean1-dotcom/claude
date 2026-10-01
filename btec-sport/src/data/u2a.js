/* ==========================================================
   UNIT 2 · FITNESS TRAINING AND PROGRAMMING FOR HEALTH, SPORT AND WELL-BEING — part 1
   A Lifestyle factors · B Screening · C Nutrition
   ========================================================== */
TOPICS.push({
  id: '2.1', unit: '2', area: 'fit', ref: 'A1 Positive lifestyle factors', title: 'Positive lifestyle factors', short: 'Physical activity, balanced diet, positive risk-taking, government guidelines',
  summary: 'The lifestyle factors that maintain health and well-being: physical activity (physical, psychological, social and economic benefits), a balanced diet (the Eatwell Guide, fluid, strategies to improve diet), positive risk-taking activities, and UK government recommendations for physical activity, alcohol and healthy eating.',
  spec: [
    'Exercise/physical activity: physical, reduced risk of chronic disease, psychological, social and economic benefits',
    'Balanced diet: eatwell plate (food groups), benefits of a healthy diet, fluid intake (moderation of caffeine), strategies for improving dietary intake',
    'Positive risk-taking activities: outdoor and adventurous activities, endorphin release, improved confidence',
    'UK Government recommendations/guidelines: physical activity, alcohol, healthy eating'
  ],
  learn: [
    { h: 'Benefits of physical activity', html: `
<div class="tbl"><table><tr><th>Type</th><th>Benefits</th></tr>
<tr><td><b>Physical</b></td><td>strengthens bones; improves posture; improves body shape (body composition)</td></tr>
<tr><td><b>Reduced risk of chronic disease</b></td><td>coronary heart disease (CHD), some cancers (e.g. bowel, breast), type 2 diabetes; also hypertension, obesity, osteoporosis</td></tr>
<tr><td><b>Psychological</b></td><td>relieves stress; reduces depression and anxiety; improves mood (endorphins); better sleep</td></tr>
<tr><td><b>Social</b></td><td>improves social skills; meet people; enhances self-esteem</td></tr>
<tr><td><b>Economic</b></td><td>reduces costs to the NHS; reduces absenteeism from work (more productive workforce)</td></tr></table></div>` },
    { h: 'A balanced diet', html: `
<p>The <b>Eatwell Guide</b> (which replaced the eatwell plate) shows the proportions of food groups for a healthy diet:</p>
<div class="tbl"><table><tr><th>Group</th><th>Proportion and advice</th></tr>
<tr><td>Fruit and vegetables</td><td>just over a third; at least <b>5 portions a day</b></td></tr>
<tr><td>Potatoes, bread, rice, pasta and other starchy carbohydrates</td><td>just over a third; choose wholegrain/higher fibre</td></tr>
<tr><td>Beans, pulses, fish, eggs, meat and other proteins</td><td>eat more beans and pulses; 2 portions of fish a week (one oily)</td></tr>
<tr><td>Dairy and alternatives</td><td>lower fat and lower sugar options</td></tr>
<tr><td>Oils and spreads</td><td>unsaturated, in small amounts</td></tr>
<tr><td>Foods high in fat, salt and sugar</td><td>eat less often and in small amounts (outside the main guide)</td></tr></table></div>
<p><b>Benefits of a healthy diet</b>: improved immune function; maintenance of body weight; reduced risk of chronic diseases (diabetes, osteoporosis, hypertension, high cholesterol).</p>
<p><b>Fluid</b>: about 6–8 glasses (≈ 1.2–2 litres) a day, more when active or hot; caffeine in moderation (≈ up to 400 mg/day for adults).</p>
<p><b>Strategies</b> for improving diet: regular timing of meals (do not skip breakfast); eat less of some food groups (saturated fat, sugar) and more of others (fruit, vegetables, fibre); five a day; reduce salt (no more than 6 g/day); choose healthy alternatives (grill not fry, water not fizzy drinks).</p>` },
    { h: 'Positive risk-taking and government guidelines', html: `
<p><b>Positive risk-taking activities</b> — outdoor and adventurous activities such as climbing, kayaking, mountain biking, surfing — release <b>endorphins</b>, give a sense of achievement and improve <b>confidence</b> and self-esteem, while risks are managed (qualified instructors, equipment).</p>
<div class="tbl"><table><tr><th>UK guideline</th><th>Recommendation (Chief Medical Officers)</th></tr>
<tr><td>Physical activity — adults (19–64)</td><td>at least <b>150 minutes moderate</b> or <b>75 minutes vigorous</b> activity a week (or a mix), plus strengthening activities on at least <b>2 days</b>; reduce sitting time</td></tr>
<tr><td>Physical activity — children and young people (5–18)</td><td>an average of at least <b>60 minutes</b> moderate-to-vigorous activity a day</td></tr>
<tr><td>Alcohol</td><td>no more than <b>14 units a week</b> for men and women, spread over 3 or more days, with several alcohol-free days</td></tr>
<tr><td>Healthy eating</td><td>Eatwell Guide; 5 a day; salt ≤ 6 g/day; free sugars ≤ 30 g/day (≈ 5% of energy); 30 g fibre/day</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Give two economic benefits of increasing physical activity levels in the UK. (2 marks)', s: ['Reduces costs to the NHS (fewer people with chronic disease).', 'Reduces absenteeism from work — more productive employees.'], a: 'Lower NHS costs; less absenteeism.' },
    { q: 'Does a client who does 3 × 30 minutes of brisk walking and one 25-minute run each week meet the UK guideline? (2 marks)', s: ['Moderate: 90 min; vigorous 25 min counts double = 50 min → 140 min equivalent.', 'Just under the 150-minute guideline, and no strength activities mentioned, so no.'], a: 'No — ≈ 140 min equivalent and no strength work.' }
  ],
  pitfalls: ['Mixing up the adult (150 min/week) and young people (60 min/day) guidelines.', 'Forgetting strength activities (2 days a week) in the adult guideline.', 'Saying the alcohol guideline is different for men and women — both are 14 units a week.', 'Listing benefits without linking them to the client in the scenario.'],
  cards: [
    ['Adult activity guideline?', '150 min moderate or 75 min vigorous a week + strength on 2 days.'], ['Children’s activity guideline?', 'Average 60 min moderate-to-vigorous a day.'], ['Alcohol guideline?', 'No more than 14 units a week, spread over 3+ days.'],
    ['Salt guideline?', 'No more than 6 g a day.'], ['Five a day?', 'At least 5 portions of fruit and vegetables daily.'], ['Chronic diseases reduced by activity?', 'CHD, some cancers, type 2 diabetes.'],
    ['Economic benefits of activity?', 'Lower NHS costs; less absenteeism.'], ['Positive risk-taking activities?', 'Outdoor and adventurous activities — endorphins, confidence.'], ['Eatwell Guide largest groups?', 'Fruit and vegetables; starchy carbohydrates.']
  ],
  quiz: [
    { q: 'UK adults should do at least how much moderate activity a week?', o: ['150 minutes', '60 minutes', '300 minutes', '30 minutes'], x: 'Or 75 vigorous.' },
    { q: 'The UK low-risk alcohol guideline is…', o: ['14 units a week', '21 units a week for men', '7 units a day', '28 units a week'], x: 'Same for men and women.' },
    { q: 'Reducing absenteeism from work is which type of benefit?', o: ['Economic', 'Psychological', 'Physical', 'Social'], x: 'Productivity.' },
    { q: 'Rock climbing as a positive risk-taking activity improves…', o: ['confidence', 'cholesterol levels only', 'salt intake', 'BMI directly'], x: 'Endorphins, achievement.' },
    { q: 'The maximum recommended daily salt intake for adults is…', o: ['6 g', '20 g', '1 g', '12 g'], x: 'About a teaspoon.' },
    { q: 'Improved mood after exercise is a…', o: ['psychological benefit', 'economic benefit', 'physical benefit', 'social benefit'], x: 'Mood.' },
    { q: 'How often should adults do muscle-strengthening activity?', o: ['At least 2 days a week', 'Every day', 'Once a month', 'Never'], x: 'Guideline.' }
  ],
  exam: [
    { q: 'State the UK Government physical activity recommendation for adults. [2]', m: 2, ms: ['150 minutes moderate (or 75 minutes vigorous) activity per week', 'strength activities on at least 2 days a week'] },
    { q: 'Explain two psychological benefits of regular physical activity for an office worker. [4]', m: 4, ms: ['relieves stress', '— e.g. work pressure; release of tension / endorphins', 'reduces depression / anxiety', '— improved mood / sense of achievement', 'improves sleep / self-esteem'] },
    { q: 'Ali is 42, works long hours, rarely exercises and eats takeaway meals five times a week.', parts: [
      { q: 'Assess how adopting positive lifestyle factors could improve Ali’s health and well-being. [6]', m: 6, lv: true, ms: ['physical activity to guideline levels: ↓ risk of CHD, type 2 diabetes, some cancers; better body composition', 'psychological: stress relief from long hours, improved mood and sleep', 'social: team or club activities — social skills, self-esteem', 'balanced diet (Eatwell): fewer takeaways → less saturated fat, salt and sugar → lower cholesterol, BP, weight', 'strategies: meal planning, healthier alternatives, five a day', 'economic: fewer sick days', 'judgement: combining activity and diet gives the greatest benefit; changes must be realistic for his time'] }
    ], tag: 'struct' }
  ],
  sims: ['guidelinecheck', 'benefitsort'], gens: []
});

TOPICS.push({
  id: '2.2', unit: '2', area: 'fit', ref: 'A2 Negative lifestyle factors', title: 'Negative lifestyle factors', short: 'Smoking, alcohol, stress, lack of sleep, sedentary lifestyle',
  summary: 'The factors that contribute to an unhealthy lifestyle and their health risks: smoking (CHD, cancer, lung disease, bronchitis, infertility), excessive alcohol (stroke, cirrhosis, hypertension, depression), excessive stress (hypertension, angina, stroke, heart attack, stomach ulcers, depression), lack of sleep (depression, overeating) and a sedentary lifestyle.',
  spec: [
    'Smoking: CHD, cancer, lung disease, bronchitis, infertility',
    'Alcohol: stroke, cirrhosis, hypertension, depression',
    'Stress: hypertension, angina, stroke, heart attack, stomach ulcers, depression',
    'Sleep: problems associated with lack of sleep (depression, overeating)',
    'Sedentary lifestyle: health risks associated with inactivity'
  ],
  learn: [
    { h: 'Health risks', html: `
<div class="tbl"><table><tr><th>Factor</th><th>Health risks</th><th>How</th></tr>
<tr><td><b>Smoking</b></td><td>coronary heart disease (CHD), cancer (lung, mouth, throat), lung disease (emphysema, COPD), bronchitis, infertility</td><td>tar damages alveoli and cilia; carbon monoxide binds to haemoglobin (less O₂ carried); nicotine raises HR and BP and narrows arteries</td></tr>
<tr><td><b>Excessive alcohol</b></td><td>stroke, cirrhosis of the liver, hypertension, depression (also some cancers, weight gain)</td><td>damages liver cells; raises BP; is a depressant; empty calories</td></tr>
<tr><td><b>Stress</b> (excessive, long term)</td><td>hypertension, angina, stroke, heart attack, stomach ulcers, depression</td><td>constant adrenaline and cortisol raise HR and BP; may lead to smoking, drinking, poor diet</td></tr>
<tr><td><b>Lack of sleep</b></td><td>depression, overeating (weight gain), poor concentration, weakened immunity</td><td>disrupts appetite hormones and mood; slower recovery from training</td></tr>
<tr><td><b>Sedentary lifestyle</b></td><td>obesity, CHD, hypertension, type 2 diabetes, osteoporosis, some cancers, poor mental health</td><td>low energy expenditure; weak heart, muscles and bones</td></tr></table></div>
<div class="box why"><b class="lbl">Factors cluster</b><p>Negative factors often go together — a stressed person may sleep badly, drink more, smoke and stop exercising. In the set task, look for these links in the client’s lifestyle questionnaire and explain how they combine to raise risk.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain how smoking reduces aerobic performance. (2 marks)', s: ['Carbon monoxide binds to haemoglobin more readily than oxygen…', '…so less oxygen is carried to the working muscles (and tar reduces gaseous exchange at the alveoli).'], a: 'CO binds to haemoglobin → less O₂ delivered.' },
    { q: 'Give two health risks associated with excessive stress. (2 marks)', s: ['Hypertension.', 'Heart attack / angina / stroke / stomach ulcers / depression.'], a: 'Any two from the list.' }
  ],
  pitfalls: ['Giving generic risks (“it is bad for you”) instead of named diseases.', 'Mixing up cirrhosis (liver — alcohol) and bronchitis (airways — smoking).', 'Forgetting overeating as a consequence of lack of sleep.', 'Not linking the risk to the client’s specific data.'],
  cards: [
    ['Five health risks of smoking?', 'CHD, cancer, lung disease, bronchitis, infertility.'], ['Four health risks of alcohol?', 'Stroke, cirrhosis, hypertension, depression.'], ['Six health risks of stress?', 'Hypertension, angina, stroke, heart attack, stomach ulcers, depression.'],
    ['Two problems of lack of sleep?', 'Depression, overeating.'], ['Cirrhosis?', 'Scarring of the liver from long-term alcohol misuse.'], ['How does carbon monoxide affect performance?', 'Binds to haemoglobin, reducing O₂ transport.'],
    ['Angina?', 'Chest pain caused by reduced blood flow to the heart muscle.']
  ],
  quiz: [
    { q: 'Cirrhosis is linked mainly to…', o: ['excessive alcohol', 'smoking', 'lack of sleep', 'stress only'], x: 'Liver damage.' },
    { q: 'Bronchitis is linked mainly to…', o: ['smoking', 'alcohol', 'sleep', 'diet'], x: 'Airways.' },
    { q: 'Which is a health risk of excessive stress?', o: ['Stomach ulcers', 'Cirrhosis', 'Infertility only', 'Osteoporosis only'], x: 'Stress risk.' },
    { q: 'Lack of sleep is associated with…', o: ['overeating', 'lower blood pressure', 'improved recovery', 'better concentration'], x: 'Appetite hormones.' },
    { q: 'Carbon monoxide in cigarette smoke…', o: ['binds to haemoglobin', 'increases vital capacity', 'lowers heart rate', 'improves diffusion'], x: 'Less O₂ carried.' },
    { q: 'Chest pain from reduced blood flow to the heart is…', o: ['angina', 'asthma', 'cramp', 'cirrhosis'], x: 'Angina.' }
  ],
  exam: [
    { q: 'State two health risks associated with excessive alcohol consumption. [2]', m: 2, ms: ['stroke', 'cirrhosis', 'hypertension', 'depression'] },
    { q: 'A client smokes 15 cigarettes a day and sleeps about 5 hours a night. Explain how each factor could affect her health. [4]', m: 4, ms: ['smoking increases risk of CHD / cancer / lung disease / bronchitis', 'because of tar, carbon monoxide, nicotine (narrowed arteries, less O₂)', 'lack of sleep linked to depression / overeating', 'weight gain, poor concentration, weaker immunity, poorer recovery from exercise'] }
  ],
  sims: ['risksort'], gens: []
});

TOPICS.push({
  id: '2.3', unit: '2', area: 'fit', ref: 'A3 Lifestyle modification techniques', title: 'Lifestyle modification techniques', short: 'Barriers to change; strategies for activity, smoking, alcohol and stress',
  summary: 'How to help a client reduce unhealthy behaviours: common barriers to change (time, cost, transport, location); strategies to increase physical activity; smoking cessation strategies; ways to reduce alcohol consumption; and stress management techniques.',
  spec: [
    'Common barriers to change: time, cost, transport, location',
    'Strategies to increase physical activity: at home, at work, during leisure time, method of transport',
    'Smoking cessation strategies: acupuncture, NHS smoking helpline, NHS smoking services, nicotine replacement therapy, Quit Kit support packs',
    'Strategies to reduce alcohol consumption: counselling, self-help groups, alternative treatments',
    'Stress management techniques: assertiveness training, goal setting, time management, physical activity, positive self-talk, relaxation, breathing techniques, meditation, alternative therapies, changes to work-life balance'
  ],
  learn: [
    { h: 'Barriers and physical activity strategies', html: `
<div class="tbl"><table><tr><th>Barrier</th><th>Possible solutions</th></tr>
<tr><td>Time</td><td>short bouts (3 × 10 min); active commuting; exercise in the lunch break; home workouts</td></tr>
<tr><td>Cost</td><td>free activities — walking, running, park run, home body-weight circuits, online classes; council concessions</td></tr>
<tr><td>Transport</td><td>activities from the doorstep; cycle; car-share; facilities near work</td></tr>
<tr><td>Location</td><td>use local parks; home-based exercise; workplace facilities</td></tr></table></div>
<div class="tbl"><table><tr><th>Setting</th><th>Strategies to increase activity</th></tr>
<tr><td>At home</td><td>exercise videos; gardening; housework at pace; stairs</td></tr>
<tr><td>At work</td><td>take stairs not the lift; walking meetings; standing desk; lunchtime walk; workplace gym/classes</td></tr>
<tr><td>Leisure time</td><td>join a club or class; family activities (cycling, swimming); dog walking</td></tr>
<tr><td>Method of transport</td><td>walk or cycle to work/school; get off the bus a stop early; park further away</td></tr></table></div>` },
    { h: 'Smoking and alcohol', html: `
<div class="tbl"><table><tr><th>Smoking cessation strategy</th><th>How it helps</th></tr>
<tr><td><b>Nicotine replacement therapy</b> (patches, gum, inhalators)</td><td>supplies nicotine without the tar and CO, easing withdrawal; doses reduced gradually</td></tr>
<tr><td><b>NHS smoking helpline</b></td><td>free telephone advice and support</td></tr>
<tr><td><b>NHS smoking services</b> (Stop Smoking Services)</td><td>local advisers, group or one-to-one support, prescribed medication</td></tr>
<tr><td><b>Quit Kit</b> support packs</td><td>practical tools and tips to manage cravings</td></tr>
<tr><td><b>Acupuncture</b></td><td>an alternative therapy some people use to reduce cravings (limited evidence)</td></tr></table></div>
<div class="tbl"><table><tr><th>Strategy to reduce alcohol</th><th>How it helps</th></tr>
<tr><td><b>Counselling</b></td><td>explores the reasons for drinking and plans change</td></tr>
<tr><td><b>Self-help groups</b> (e.g. Alcoholics Anonymous)</td><td>peer support and accountability</td></tr>
<tr><td><b>Alternative treatments</b></td><td>e.g. hypnotherapy, acupuncture; alcohol-free days, smaller glasses, low-alcohol drinks, tracking units with an app</td></tr></table></div>` },
    { h: 'Stress management', html: `
<div class="tbl"><table><tr><th>Technique</th><th>What it involves</th></tr>
<tr><td>Assertiveness training</td><td>learning to say no and express needs calmly — reduces overload</td></tr>
<tr><td>Goal setting</td><td>breaking problems into manageable steps</td></tr>
<tr><td>Time management</td><td>prioritising, planning, to-do lists</td></tr>
<tr><td>Physical activity</td><td>releases endorphins; burns off stress hormones</td></tr>
<tr><td>Positive self-talk</td><td>replacing negative thoughts with positive statements</td></tr>
<tr><td>Relaxation, breathing techniques, meditation</td><td>lower heart rate and muscle tension; calm the mind</td></tr>
<tr><td>Alternative therapies</td><td>massage, yoga, aromatherapy, reflexology</td></tr>
<tr><td>Changes to work-life balance</td><td>reduce overtime; protect time for family, hobbies and sleep</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'A client says she has no time to exercise because she works full time and has two young children. Suggest two strategies. (2 marks)', s: ['Active transport — walk or cycle part of the way to work.', 'Short home workouts or family activities at weekends (e.g. cycling together).'], a: 'Active commuting; home/family activity.' },
    { q: 'Explain how nicotine replacement therapy helps someone stop smoking. (2 marks)', s: ['It provides nicotine (patch/gum) without the tar and carbon monoxide…', '…reducing withdrawal symptoms and cravings, with the dose reduced gradually.'], a: 'Nicotine without smoke; eases withdrawal.' }
  ],
  pitfalls: ['Giving strategies that ignore the client’s stated barrier (e.g. suggesting a gym to someone who cannot afford it).', 'Listing strategies without justifying them for the client.', 'Confusing smoking cessation strategies with alcohol strategies.', 'Forgetting work-life balance as a stress strategy.'],
  cards: [
    ['Four barriers to change?', 'Time, cost, transport, location.'], ['Activity strategies at work?', 'Stairs, walking meetings, lunchtime walks, standing desk.'], ['Activity through transport?', 'Walk/cycle, get off a stop early, park further away.'],
    ['Five smoking cessation strategies?', 'NRT, NHS helpline, NHS stop smoking services, Quit Kit, acupuncture.'], ['Three alcohol strategies (spec)?', 'Counselling, self-help groups, alternative treatments.'], ['Stress techniques?', 'Assertiveness, goal setting, time management, activity, self-talk, relaxation, breathing, meditation, alternative therapies, work-life balance.'],
    ['NRT?', 'Nicotine replacement therapy — patches, gum, inhalators.']
  ],
  quiz: [
    { q: 'Nicotine patches are an example of…', o: ['nicotine replacement therapy', 'counselling', 'assertiveness training', 'a self-help group'], x: 'NRT.' },
    { q: 'Taking the stairs at work addresses which barrier?', o: ['Time', 'Cost of alcohol', 'Smoking', 'Sleep'], x: 'Fits activity into the day.' },
    { q: 'Alcoholics Anonymous is an example of a…', o: ['self-help group', 'smoking service', 'relaxation technique', 'Quit Kit'], x: 'Peer support.' },
    { q: 'Learning to say no to extra work is…', o: ['assertiveness training', 'goal setting', 'meditation', 'NRT'], x: 'Stress management.' },
    { q: 'Which is a free way for a low-income client to be more active?', o: ['Walking or park run', 'Personal trainer', 'Golf membership', 'Ski holiday'], x: 'Cost barrier.' },
    { q: 'Which is NOT a stress management technique in the specification?', o: ['Carbohydrate loading', 'Time management', 'Breathing techniques', 'Positive self-talk'], x: 'Nutrition strategy.' }
  ],
  exam: [
    { q: 'Identify two strategies a client could use to reduce alcohol consumption. [2]', m: 2, ms: ['counselling', 'self-help groups (e.g. AA)', 'alternative treatments (e.g. hypnotherapy)', 'alcohol-free days / tracking units / lower-strength drinks'] },
    { q: 'Explain two stress management techniques for a client with a demanding job. [4]', m: 4, ms: ['time management — prioritising tasks', '— reduces overload and pressure', 'physical activity — e.g. lunchtime walk', '— endorphins, burns off stress hormones', 'relaxation / breathing / meditation — lowers HR, muscle tension', 'change work-life balance — protect time for rest, family, sleep'] },
    { q: 'Sam is 35, smokes 20 a day, drinks about 30 units a week and says his job is very stressful. He has no car and little spare money.', parts: [
      { q: 'Justify lifestyle modification techniques that would help Sam improve his health. [8]', m: 8, lv: true, ms: ['prioritise smoking: NHS stop smoking service + NRT — free, supported, eases withdrawal', 'alcohol 30 units > 14 guideline: counselling / self-help group; alcohol-free days; track units', 'stress: time management, assertiveness, relaxation/breathing; physical activity as stress relief', 'barriers: cost — free activities (walking, park run, home workouts); transport — walk/cycle locally', 'links between factors: stress → smoking and drinking; addressing stress supports the others', 'realistic, gradual changes and SMART goals; one change at a time to aid adherence', 'monitor progress (units, cigarettes, resting HR/BP)', 'judgement on order and likely success'] }
    ], tag: 'ext' }
  ],
  sims: ['modmatch'], gens: []
});

TOPICS.push({
  id: '2.4', unit: '2', area: 'fit', ref: 'B1 Screening processes', title: 'Screening and legal considerations', short: 'Lifestyle questionnaires, PAR-Q, referral to a doctor, informed consent, data protection, confidentiality',
  summary: 'How fitness professionals screen clients before training: lifestyle questionnaires and the Physical Activity Readiness Questionnaire (PAR-Q), when to refer a client to a doctor, and the legal considerations — informed consent, data protection and client confidentiality.',
  spec: [
    'Screening questionnaires: lifestyle questionnaires, physical activity readiness questionnaires (PAR-Q)',
    'Interpreting the lifestyle of an individual using screening documentation; knowing when to refer to a doctor',
    'Legal considerations: informed consent form, data protection, client confidentiality'
  ],
  learn: [
    { h: 'Screening questionnaires', html: `
<div class="tbl"><table><tr><th>Document</th><th>Purpose</th><th>Typical content</th></tr>
<tr><td><b>Lifestyle questionnaire</b></td><td>builds a picture of the client’s current lifestyle and goals</td><td>activity levels, diet, alcohol units, smoking, sleep, stress, occupation, previous exercise, goals and preferences, barriers</td></tr>
<tr><td><b>PAR-Q</b> (Physical Activity Readiness Questionnaire)</td><td>identifies people for whom exercise could be unsafe without medical advice</td><td>yes/no questions: heart condition; chest pain at rest or in activity; dizziness or loss of consciousness; bone or joint problems made worse by activity; medication for BP or a heart condition; any other reason not to exercise; (pregnancy, age)</td></tr></table></div>
<div class="box warn"><b class="lbl">When to refer to a doctor</b><p>If the client answers <b>yes</b> to any PAR-Q question, or screening shows very high blood pressure (e.g. ≥ 160/100 mmHg), chest pain, uncontrolled diabetes, recent surgery or injury, or pregnancy complications — they should get clearance from a GP before starting or increasing exercise.</p></div>` },
    { h: 'Legal considerations', html: `
<div class="tbl"><table><tr><th>Consideration</th><th>Meaning</th></tr>
<tr><td><b>Informed consent</b></td><td>the client signs a form confirming they understand the programme, the tests and the risks and agree to take part voluntarily (a parent/guardian signs for under-18s)</td></tr>
<tr><td><b>Data protection</b></td><td>personal data must be collected only for a stated purpose, kept accurate, stored securely (locked cabinet, password protected) and not kept longer than needed — under the Data Protection Act 2018 / UK GDPR</td></tr>
<tr><td><b>Client confidentiality</b></td><td>information about the client must not be shared with others without their permission (except where there is a safeguarding or safety concern)</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why a PAR-Q should be completed before a client starts a training programme. (2 marks)', s: ['It identifies medical conditions or symptoms (e.g. heart problems, chest pain, dizziness) that could make exercise unsafe…', '…so the client can be referred to a doctor for clearance before training.'], a: 'Identifies risks → referral.' },
    { q: 'Describe how a personal trainer should comply with data protection. (2 marks)', s: ['Store client records securely (locked cabinet / password-protected files).', 'Use the data only for its purpose and do not share it without consent; delete when no longer needed.'], a: 'Secure storage; limited use and sharing.' }
  ],
  pitfalls: ['Saying a client who answers yes on a PAR-Q cannot ever exercise — they need medical clearance first.', 'Mixing up confidentiality (not sharing) and data protection (how data is stored and used).', 'Forgetting that under-18s need parental consent.', 'Treating the lifestyle questionnaire and PAR-Q as the same document.'],
  cards: [
    ['PAR-Q?', 'Physical Activity Readiness Questionnaire — identifies people needing medical advice before exercise.'], ['Lifestyle questionnaire?', 'Records activity, diet, smoking, alcohol, sleep, stress, goals.'], ['When to refer to a GP?', 'Any yes on the PAR-Q, very high BP, chest pain, etc.'],
    ['Informed consent?', 'Client agrees in writing after understanding the programme and risks.'], ['Data protection?', 'Secure storage and proper use of personal data (DPA 2018 / UK GDPR).'], ['Client confidentiality?', 'Not sharing client information without permission.']
  ],
  quiz: [
    { q: 'A client answers “yes” to having chest pain during activity. The trainer should…', o: ['refer them to a doctor before training', 'start a high-intensity programme', 'ignore it', 'do a maximal fitness test'], x: 'Medical clearance.' },
    { q: 'Signing a form agreeing to take part after the risks are explained is…', o: ['informed consent', 'data protection', 'confidentiality', 'a PAR-Q'], x: 'Consent.' },
    { q: 'Keeping client files in a locked cabinet is part of…', o: ['data protection', 'informed consent', 'periodisation', 'a PAR-Q'], x: 'Secure storage.' },
    { q: 'Telling a client’s workmates about their health condition breaks…', o: ['client confidentiality', 'the FITT principle', 'specificity', 'informed consent'], x: 'Privacy.' },
    { q: 'Information about sleep, alcohol and stress is collected on a…', o: ['lifestyle questionnaire', 'PAR-Q only', 'consent form', 'heart-rate monitor'], x: 'Lifestyle.' },
    { q: 'Who signs the consent form for a 15-year-old?', o: ['Parent or guardian', 'Nobody', 'The gym manager', 'Their PE teacher only'], x: 'Under-18.' }
  ],
  exam: [
    { q: 'State the purpose of a PAR-Q. [1]', m: 1, ms: ['to identify whether a person is safe to start exercise / needs to see a doctor first'] },
    { q: 'Describe three legal considerations when screening a new client. [3]', m: 3, ms: ['informed consent — client agrees in writing having understood the programme and risks', 'data protection — data stored securely and used only for its purpose', 'client confidentiality — information not shared without permission'] },
    { q: 'A client’s PAR-Q shows he takes medication for high blood pressure. Explain what the trainer should do and why. [3]', m: 3, ms: ['refer him to a GP / obtain medical clearance before starting', 'because exercise raises BP and could be unsafe without advice', 'then design a programme within the doctor’s guidance (e.g. moderate aerobic, avoid heavy isometric lifting)'] }
  ],
  sims: ['parq'], gens: []
});

TOPICS.push({
  id: '2.5', unit: '2', area: 'fit', ref: 'B2–B3 Health monitoring tests and interpretation', title: 'Health monitoring tests', short: 'Blood pressure, resting heart rate, BMI, waist-to-hip ratio; interpreting against norms',
  summary: 'The four health monitoring tests — blood pressure, resting heart rate, body mass index and waist-to-hip ratio — how to carry them out, how to calculate BMI and waist-to-hip ratio, and how to interpret results against normative data (population norms, norms for sports performers and elite athletes, accepted health ranges) to make recommendations.',
  spec: [
    'Health monitoring tests: blood pressure, resting heart rate, body mass index (BMI), waist-to-hip ratio',
    'Interpreting results against normative data: population norms, norms for sports performers, norms for elite athletes, accepted health ranges',
    'Making judgements and appropriate recommendations'
  ],
  learn: [
    { h: 'Blood pressure and resting heart rate', html: `
<p><b>Blood pressure</b> is measured with a sphygmomanometer (cuff) or digital monitor after 5 minutes seated rest, written systolic/diastolic in mmHg.</p>
<div class="tbl"><table><tr><th>Category</th><th>Blood pressure (mmHg)</th></tr>
<tr><td>Low (hypotension)</td><td>below 90/60</td></tr>
<tr><td>Ideal / normal</td><td>90/60 to 120/80</td></tr>
<tr><td>Pre-high (elevated)</td><td>120/80 to 139/89</td></tr>
<tr><td>High (hypertension)</td><td>140/90 or above</td></tr></table></div>
<p><b>Resting heart rate</b> is taken on waking or after 5 minutes seated (radial or carotid pulse for 60 s, or 15 s × 4; or a heart-rate monitor).</p>
<div class="tbl"><table><tr><th>Group</th><th>Typical resting HR (bpm)</th></tr>
<tr><td>Elite endurance athletes</td><td>40–50 (or lower)</td></tr>
<tr><td>Sports performers / very fit</td><td>50–60</td></tr>
<tr><td>Average adult</td><td>60–80</td></tr>
<tr><td>Poor / may indicate low fitness or health issue</td><td>over 80 (over 100 = tachycardia)</td></tr></table></div>` },
    { h: 'BMI and waist-to-hip ratio', html: `
<p style="text-align:center;font-weight:700">BMI = body mass (kg) ÷ height² (m²)</p>
<div class="tbl"><table><tr><th>BMI</th><th>Classification</th></tr>
<tr><td>below 18.5</td><td>underweight</td></tr><tr><td>18.5–24.9</td><td>healthy weight</td></tr><tr><td>25–29.9</td><td>overweight</td></tr><tr><td>30–39.9</td><td>obese</td></tr><tr><td>40 and over</td><td>severely (morbidly) obese</td></tr></table></div>
<div class="box warn"><b class="lbl">Limitation of BMI</b><p>BMI does not distinguish muscle from fat — a muscular rugby player may be “overweight” or “obese” on BMI while having low body fat. Always interpret it alongside other data (waist-to-hip ratio, body fat).</p></div>
<p style="text-align:center;font-weight:700">waist-to-hip ratio = waist circumference ÷ hip circumference</p>
<p>Measure the waist at the narrowest point (or midway between the lowest rib and the hip bone) and the hips at the widest point of the buttocks, in the same units.</p>
<div class="tbl"><table><tr><th>Risk of CHD / type 2 diabetes</th><th>Men</th><th>Women</th></tr>
<tr><td>Low</td><td>below 0.90</td><td>below 0.80</td></tr>
<tr><td>Moderate</td><td>0.90–0.99</td><td>0.80–0.84</td></tr>
<tr><td>High</td><td>1.0 or above</td><td>0.85 or above</td></tr></table></div>
<p class="small muted">Published norm tables differ slightly; the set task will give the norms to use. Abdominal (central) fat is linked to higher risk than fat elsewhere.</p>` },
    { h: 'Interpreting results', html: `
<ol><li><b>Compare</b> each result with the norm table: population norms, norms for sports performers, elite athletes, accepted health ranges.</li>
<li><b>Judge</b> what it means for health risk (e.g. BP 145/92 = hypertension → higher risk of CHD and stroke).</li>
<li><b>Link</b> results to lifestyle factors (smoking, alcohol, stress, inactivity, diet).</li>
<li><b>Recommend</b>: referral to a GP if needed, lifestyle modifications, and how the programme should be adapted (e.g. moderate aerobic work to lower BP; avoid heavy isometric work).</li></ol>` }
  ],
  eqs: [['"BMI" = @frac{"mass (kg)"}{"height"^2 " (m"^2")"}', ''], ['"WHR" = @frac{"waist"}{"hip"}', 'same units']],
  worked: [
    { q: 'A client has a mass of 92 kg and a height of 1.78 m. Calculate her BMI and classify it. (2 marks)', s: ['BMI = 92 ÷ 1.78² = 92 ÷ 3.17 = 29.0.', '25–29.9 → overweight.'], a: '29.0 — overweight.' },
    { q: 'A man’s waist is 102 cm and his hips 100 cm. Calculate and interpret his waist-to-hip ratio. (2 marks)', s: ['WHR = 102 ÷ 100 = 1.02.', 'For men, ≥ 1.0 = high risk of CHD / type 2 diabetes.'], a: '1.02 — high risk.' }
  ],
  pitfalls: ['Forgetting to square the height (in metres) in BMI.', 'Measuring waist and hips in different units.', 'Using male WHR norms for a female client.', 'Interpreting BMI without mentioning its limitation for muscular athletes.'],
  cards: [
    ['BMI formula?', 'Mass (kg) ÷ height² (m²).'], ['Healthy BMI range?', '18.5–24.9.'], ['Obese BMI?', '30 and over.'], ['WHR formula?', 'Waist ÷ hip circumference.'],
    ['High-risk WHR for men?', '1.0 or above.'], ['High-risk WHR for women?', '0.85 or above.'], ['Ideal blood pressure?', '90/60 to 120/80 mmHg.'], ['High blood pressure?', '140/90 mmHg or above.'],
    ['Average adult resting HR?', '60–80 bpm.'], ['Elite endurance athlete resting HR?', '≈ 40–50 bpm.'], ['Limitation of BMI?', 'Does not distinguish muscle from fat.'], ['Equipment for BP?', 'Sphygmomanometer / digital BP monitor.']
  ],
  quiz: [
    { q: 'A BMI of 27 is classified as…', o: ['overweight', 'healthy', 'obese', 'underweight'], x: '25–29.9.' },
    { q: 'Blood pressure of 150/95 mmHg is…', o: ['high (hypertension)', 'ideal', 'low', 'pre-high'], x: '≥ 140/90.' },
    { q: 'A woman with a WHR of 0.88 is at…', o: ['high risk', 'low risk', 'no risk', 'moderate risk'], x: '≥ 0.85.' },
    { q: 'BMI = 80 kg ÷ (2.0 m)² = ', o: ['20', '40', '160', '80'], x: '80 ÷ 4.' },
    { q: 'Why might a rugby player have a high BMI but be healthy?', o: ['BMI does not distinguish muscle from fat', 'BMI measures blood pressure', 'Muscle weighs nothing', 'BMI only applies to women'], x: 'Limitation.' },
    { q: 'An average adult resting heart rate is about…', o: ['60–80 bpm', '30–40 bpm', '100–120 bpm', '150 bpm'], x: 'Norm.' },
    { q: 'WHR for a man with waist 90 cm and hips 100 cm is…', o: ['0.90', '1.11', '10', '0.10'], x: '90 ÷ 100.' }
  ],
  exam: [
    { q: 'A client is 1.65 m tall and has a mass of 75 kg. Calculate his BMI. Show your working. [2]', m: 2, ms: ['75 ÷ 1.65² (2.7225)', '= 27.5 (accept 27.5–27.6)'] },
    { q: 'Interpret the following results for a 45-year-old female office worker: BP 138/88 mmHg, resting HR 84 bpm, BMI 31, WHR 0.87. [4]', m: 4, ms: ['BP pre-high / elevated — at risk of developing hypertension', 'resting HR above average — suggests low cardiovascular fitness', 'BMI 31 — obese', 'WHR 0.87 — high risk (≥ 0.85) of CHD / type 2 diabetes; central fat'] },
    { q: 'Evaluate the use of BMI and waist-to-hip ratio to assess the health of different clients. [6]', m: 6, lv: true, ms: ['BMI: quick, cheap, easy, only scales and a stadiometer needed; good population indicator', 'BMI limitation: no distinction between muscle and fat — misclassifies muscular athletes; ignores fat distribution, age, sex', 'WHR: indicates central (abdominal) fat, closely linked to CHD and type 2 diabetes risk', 'WHR limitation: measurement technique/landmarks vary; different norms for men and women', 'best used together and alongside other measures (BP, resting HR, body fat)', 'judgement: useful screening tools but must be interpreted for the individual'] }
  ],
  sims: ['healthcheck'], gens: ['bmi', 'whr', 'bpclass']
});

TOPICS.push({
  id: '2.6', unit: '2', area: 'fit', ref: 'C1 Common nutritional terminology', title: 'Nutritional terminology and energy balance', short: 'RDA, calories and joules; energy balance — BMR, age, gender, climate, activity',
  summary: 'Common nutritional terms — recommended daily allowance (RDA) and energy measures (calories, joules, kilocalories, kilojoules) — and energy balance: how basal metabolism, age, gender, climate and physical activity affect energy needs, and the calories used in different activities.',
  spec: [
    'Recommended daily allowance (RDA)',
    'Energy measures: calories, joules, kilocalories, kilojoules',
    'Energy balance: basal metabolism, age, gender, climate, physical activity; calories used in different activities (intensity and length of time)'
  ],
  learn: [
    { h: 'Terminology', html: `
<div class="tbl"><table><tr><th>Term</th><th>Meaning</th></tr>
<tr><td><b>Recommended daily allowance (RDA)</b></td><td>the amount of a nutrient that meets the needs of most healthy people each day (now often called the reference nutrient intake, RNI)</td></tr>
<tr><td><b>Calorie</b> (cal)</td><td>energy to raise 1 g of water by 1 °C</td></tr>
<tr><td><b>Kilocalorie</b> (kcal)</td><td>1000 calories — the “Calories” on food labels</td></tr>
<tr><td><b>Joule</b> (J) / <b>kilojoule</b> (kJ)</td><td>SI units of energy; <b>1 kcal = 4.184 kJ</b></td></tr></table></div>
<p>Energy per gram: carbohydrate ≈ 4 kcal (17 kJ), protein ≈ 4 kcal (17 kJ), fat ≈ 9 kcal (37 kJ), alcohol ≈ 7 kcal (29 kJ).</p>` },
    { h: 'Energy balance', html: `
<p style="text-align:center;font-weight:700">energy balance = energy intake (food and drink) − energy expenditure</p>
<p>Positive balance → weight gain; negative → weight loss; equal → weight maintained.</p>
<div class="tbl"><table><tr><th>Factor</th><th>Effect on energy expenditure</th></tr>
<tr><td><b>Basal metabolism</b> (BMR)</td><td>energy used at complete rest to keep the body alive — about 60–75% of daily expenditure</td></tr>
<tr><td><b>Age</b></td><td>BMR falls with age (less muscle mass)</td></tr>
<tr><td><b>Gender</b></td><td>men usually have a higher BMR (more muscle, larger size)</td></tr>
<tr><td><b>Climate</b></td><td>extreme cold or heat raises energy use (shivering, cooling)</td></tr>
<tr><td><b>Physical activity</b></td><td>the most variable part — depends on intensity and duration</td></tr></table></div>
<div class="tbl"><table><tr><th>Activity (70 kg adult)</th><th>Approx. kcal per hour</th></tr>
<tr><td>Walking (moderate)</td><td>250–300</td></tr><tr><td>Cycling (moderate)</td><td>450–550</td></tr><tr><td>Swimming (moderate)</td><td>500</td></tr><tr><td>Running (10 km/h)</td><td>700</td></tr><tr><td>Football / hockey match</td><td>550–650</td></tr><tr><td>Circuit training</td><td>500–600</td></tr></table></div>
<p class="small muted">Guide daily intakes are ≈ 2000 kcal (women) and ≈ 2500 kcal (men), more for active people.</p>` }
  ],
  eqs: [['1 "kcal" = 4.184 "kJ"', ''], ['"energy balance" = "intake" - "expenditure"', '']],
  worked: [
    { q: 'Convert 2500 kcal to kilojoules. (1 mark)', s: ['2500 × 4.184 = 10 460 kJ.'], a: '10 460 kJ' },
    { q: 'Explain why an older client may need fewer calories than a younger one of the same size. (2 marks)', s: ['Basal metabolic rate falls with age, mainly because of loss of muscle mass…', '…so less energy is used at rest; if intake stays the same, weight gain is likely.'], a: 'Lower BMR with age.' }
  ],
  pitfalls: ['Confusing calories and kilocalories (food labels use kcal).', 'Forgetting that BMR is the largest part of daily energy use.', 'Saying climate has no effect on energy needs.', 'Converting kJ to kcal by multiplying instead of dividing by 4.184.'],
  cards: [
    ['RDA?', 'Recommended daily allowance — amount of a nutrient meeting most people’s needs.'], ['1 kcal in kJ?', '4.184 kJ.'], ['Energy in 1 g of fat?', '≈ 9 kcal (37 kJ).'], ['Energy in 1 g of carbohydrate?', '≈ 4 kcal (17 kJ).'],
    ['BMR?', 'Basal metabolic rate — energy used at complete rest.'], ['Factors affecting energy expenditure?', 'Basal metabolism, age, gender, climate, physical activity.'], ['Positive energy balance?', 'Intake > expenditure → weight gain.']
  ],
  quiz: [
    { q: '1 kcal equals about…', o: ['4.2 kJ', '1000 kJ', '0.24 kJ', '42 kJ'], x: '4.184.' },
    { q: 'Which nutrient provides the most energy per gram?', o: ['Fat', 'Carbohydrate', 'Protein', 'Water'], x: '≈ 9 kcal/g.' },
    { q: 'Energy used at complete rest is the…', o: ['basal metabolic rate', 'RDA', 'energy balance', 'kilojoule'], x: 'BMR.' },
    { q: 'BMR generally…', o: ['falls with age', 'rises with age', 'is the same for everyone', 'depends only on climate'], x: 'Less muscle.' },
    { q: 'An activity that uses about 700 kcal per hour is…', o: ['running at 10 km/h', 'sleeping', 'reading', 'slow walking'], x: 'High expenditure.' },
    { q: 'Men usually have a higher BMR than women because they…', o: ['have more muscle mass', 'eat more salt', 'sleep less', 'drink more water'], x: 'Body composition.' }
  ],
  exam: [
    { q: 'Define basal metabolic rate. [1]', m: 1, ms: ['the energy needed to maintain body functions at complete rest'] },
    { q: 'Explain how two factors could increase a client’s daily energy requirements. [4]', m: 4, ms: ['physical activity — more/longer/more intense exercise', '— more calories used', 'climate — training in very cold/hot conditions', '— energy for shivering / cooling', 'gender / body size / muscle mass — higher BMR', 'age — younger clients higher BMR'] }
  ],
  sims: ['energyin'], gens: ['kcal', 'kcalact', 'kjconv']
});

TOPICS.push({
  id: '2.7', unit: '2', area: 'fit', ref: 'C2 Components of a balanced diet', title: 'Macronutrients, micronutrients and hydration', short: 'Carbohydrates, fats, protein; vitamins A, B, C, D, calcium, iron; fluid needs; de- and hyperhydration',
  summary: 'The components of a balanced diet: macronutrients (carbohydrates, fats, protein), micronutrients (vitamins A, B, C and D; minerals calcium and iron) with food sources and quantities, hydration requirements and how they vary, and the effects, signs and symptoms of dehydration and hyperhydration.',
  spec: [
    'Macronutrients: carbohydrates, fats, protein — food sources and quantities',
    'Micronutrients: vitamins A, B, C and D; minerals calcium and iron — food sources and quantities',
    'Hydration: requirements vary with climate, levels of exercise, programme type and time of year',
    'Effects on performance of dehydration and hyperhydration; signs and symptoms of each'
  ],
  learn: [
    { h: 'Macronutrients', html: `
<div class="tbl"><table><tr><th>Macronutrient</th><th>Function</th><th>Sources</th><th>Quantity (guide)</th></tr>
<tr><td><b>Carbohydrates</b> (simple sugars and complex starches)</td><td>main energy source, especially moderate–high intensity; stored as glycogen</td><td>pasta, rice, bread, potatoes, cereals, fruit</td><td>≈ 50–60% of energy; endurance athletes 5–10 g/kg/day</td></tr>
<tr><td><b>Fats</b> (saturated, unsaturated)</td><td>energy for low-intensity, long-duration exercise; insulation; protects organs; carries vitamins A and D</td><td>oils, butter, nuts, oily fish, avocado, cheese</td><td>≤ 35% of energy; saturated ≤ 11%</td></tr>
<tr><td><b>Protein</b></td><td>growth and repair of muscle and tissue; enzymes and hormones</td><td>meat, fish, eggs, dairy, beans, lentils, nuts</td><td>≈ 0.75 g/kg/day (general); 1.2–1.7 g/kg/day for athletes</td></tr></table></div>` },
    { h: 'Micronutrients', html: `
<div class="tbl"><table><tr><th>Micronutrient</th><th>Function</th><th>Sources</th><th>Quantity (adult guide)</th></tr>
<tr><td><b>Vitamin A</b></td><td>vision, immune function, healthy skin</td><td>liver, dairy, eggs; orange vegetables (carrots)</td><td>≈ 0.6–0.7 mg/day</td></tr>
<tr><td><b>B vitamins</b></td><td>release energy from food; nervous system; red blood cell production (B12, folate)</td><td>wholegrains, meat, eggs, dairy, green vegetables</td><td>small amounts (e.g. B1 ≈ 1 mg/day)</td></tr>
<tr><td><b>Vitamin C</b></td><td>immune system; healing; helps absorb iron; antioxidant</td><td>citrus fruit, berries, peppers, broccoli</td><td>≈ 40 mg/day</td></tr>
<tr><td><b>Vitamin D</b></td><td>helps absorb calcium — strong bones</td><td>sunlight on skin; oily fish, eggs, fortified foods</td><td>≈ 10 µg/day</td></tr>
<tr><td><b>Calcium</b></td><td>bone and teeth strength; muscle contraction; nerve function</td><td>dairy, green leafy vegetables, fortified foods</td><td>≈ 700 mg/day (more for teenagers)</td></tr>
<tr><td><b>Iron</b></td><td>forms haemoglobin — oxygen transport; deficiency causes anaemia and fatigue</td><td>red meat, liver, beans, green vegetables, fortified cereals</td><td>≈ 8.7 mg/day men; 14.8 mg/day women</td></tr></table></div>` },
    { h: 'Hydration', html: `
<p>Fluid needs (≈ 2–2.5 L/day from food and drink for adults) increase with a <b>hot or humid climate</b>, <b>higher levels of exercise</b>, the <b>programme type</b> (long endurance sessions) and the <b>time of year</b> (summer). Drink before, during and after exercise; weigh before and after sessions — about 1.5 L for every 1 kg lost.</p>
<div class="tbl"><table><tr><th></th><th>Dehydration</th><th>Hyperhydration (over-hydration)</th></tr>
<tr><td>Cause</td><td>fluid loss (sweat) greater than intake</td><td>drinking too much water, diluting blood sodium (hyponatraemia)</td></tr>
<tr><td>Effects on performance</td><td>thicker blood → ↑ HR, ↓ stroke volume; poorer thermoregulation; fatigue; reduced concentration and skill (≈ 2% body mass loss reduces performance)</td><td>reduced performance; nausea; in severe cases dangerous</td></tr>
<tr><td>Signs and symptoms</td><td>thirst, dark urine, headache, dizziness, dry mouth, cramp, fatigue</td><td>headache, nausea, confusion, swelling of hands/feet, fits, coma</td></tr></table></div>` }
  ],
  eqs: [['"fluid to drink" = 1.5 × "mass lost (kg)"', 'litres']],
  worked: [
    { q: 'Explain why a female endurance runner needs to monitor her iron intake. (2 marks)', s: ['Iron forms haemoglobin, which carries oxygen in red blood cells.', 'Women need more iron (menstruation); deficiency causes anaemia and fatigue, reducing aerobic performance.'], a: 'Iron → haemoglobin → O₂ transport; risk of anaemia.' },
    { q: 'A footballer weighs 1.2 kg less after training. How much fluid should he drink? (1 mark)', s: ['1.5 × 1.2 = 1.8 L.'], a: '1.8 L' }
  ],
  pitfalls: ['Saying protein is the main energy source.', 'Mixing up vitamin D (calcium absorption) and vitamin C (immune system, iron absorption).', 'Saying “drink as much water as possible” — hyperhydration is dangerous.', 'Giving functions without food sources when asked for both.'],
  cards: [
    ['Function of carbohydrates?', 'Main energy source; stored as glycogen.'], ['Function of fats?', 'Energy at low intensity; insulation; protect organs; carry vitamins A, D.'], ['Function of protein?', 'Growth and repair.'],
    ['Protein needs of athletes?', '≈ 1.2–1.7 g/kg/day.'], ['Vitamin A?', 'Vision, immunity — liver, dairy, carrots.'], ['B vitamins?', 'Energy release from food.'], ['Vitamin C?', 'Immune system, iron absorption — citrus fruit.'],
    ['Vitamin D?', 'Calcium absorption — sunlight, oily fish.'], ['Calcium?', 'Bones, muscle contraction — dairy.'], ['Iron?', 'Haemoglobin — red meat, beans.'], ['Signs of dehydration?', 'Thirst, dark urine, headache, dizziness, cramp, fatigue.'],
    ['Hyperhydration?', 'Too much water — low blood sodium; nausea, confusion.'], ['Rehydration rule?', '≈ 1.5 L per kg body mass lost.']
  ],
  quiz: [
    { q: 'Which vitamin helps the body absorb calcium?', o: ['Vitamin D', 'Vitamin C', 'Vitamin A', 'Vitamin B12'], x: 'Bones.' },
    { q: 'Iron is needed to make…', o: ['haemoglobin', 'insulin', 'glycogen', 'bone marrow fat'], x: 'O₂ transport.' },
    { q: 'Dark urine and headache are signs of…', o: ['dehydration', 'hyperhydration', 'carbo-loading', 'anaemia'], x: 'Fluid loss.' },
    { q: 'Hyperhydration can cause…', o: ['low blood sodium', 'thicker blood', 'higher haematocrit', 'more sweat'], x: 'Hyponatraemia.' },
    { q: 'B vitamins mainly help…', o: ['release energy from food', 'clot blood', 'absorb calcium', 'store fat'], x: 'Metabolism.' },
    { q: 'A good source of vitamin C is…', o: ['oranges', 'butter', 'white bread', 'chicken'], x: 'Citrus.' },
    { q: 'Fluid needs increase in…', o: ['hot climates', 'cold sedentary days', 'sleep', 'reading'], x: 'Sweat.' }
  ],
  exam: [
    { q: 'Give one function and one food source of calcium. [2]', m: 2, ms: ['bone/teeth strength or muscle contraction / nerve function', 'dairy (milk, cheese, yoghurt) / green leafy vegetables / fortified foods'] },
    { q: 'Describe two effects of dehydration on performance. [2]', m: 2, ms: ['blood more viscous → higher HR / lower stroke volume', 'poorer thermoregulation / overheating', 'fatigue / cramp', 'reduced concentration / decision making / skill'] },
    { q: 'Explain the importance of macronutrients for a client training for a half marathon. [6]', m: 6, lv: true, ms: ['carbohydrate: main fuel for moderate–high intensity running; glycogen stores; 5–7 g/kg/day; before and after long runs', 'fat: fuel for long, low-intensity runs; spares glycogen; unsaturated sources; limit saturated', 'protein: repair of muscle after long runs; 1.2–1.4 g/kg/day; recovery snacks', 'balance with energy balance — enough total energy to avoid fatigue/weight loss', 'timing: pre-run carbohydrate, post-run carbohydrate + protein', 'judgement: carbohydrate most critical for performance; protein for recovery; fat in moderation'] }
  ],
  sims: ['nutrimatch', 'hydration'], gens: ['ghydr', 'rehyd']
});

TOPICS.push({
  id: '2.8', unit: '2', area: 'fit', ref: 'C3 Nutritional strategies', title: 'Nutritional strategies, ergogenic aids and sports drinks', short: 'Diet for weight gain/loss; energy gels and bars, protein drinks, carbohydrate loading; isotonic, hypertonic, hypotonic drinks',
  summary: 'Nutritional strategies for clients on training programmes: adapting diet to gain or lose weight; ergogenic aids (energy gels and bars, protein drinks, carbohydrate loading) with their positive and negative effects and timings; and sports drinks — isotonic, hypertonic and hypotonic — with recommended timings and amounts.',
  spec: [
    'Adapting diet to gain or lose weight',
    'Ergogenic aids: energy gels and bars, protein drinks, carbohydrate loading — positive and negative effects, recommended timings',
    'Sports drinks: isotonic, hypertonic, hypotonic — use for different training requirements, recommended timings and amounts'
  ],
  learn: [
    { h: 'Gaining or losing weight', html: `
<div class="tbl"><table><tr><th>Goal</th><th>Strategy</th></tr>
<tr><td><b>Lose weight</b> (fat)</td><td>a moderate <b>negative energy balance</b> (≈ 500 kcal/day → ≈ 0.5 kg/week); reduce saturated fat, sugar and alcohol; more fruit, vegetables and fibre to stay full; keep protein adequate to preserve muscle; regular meals; increase activity</td></tr>
<tr><td><b>Gain weight</b> (muscle)</td><td>a moderate <b>positive energy balance</b> (≈ 300–500 kcal/day) with resistance training; higher protein (1.6–2 g/kg) spread across the day; enough carbohydrate to fuel training; healthy energy-dense foods (nuts, milk, oily fish)</td></tr></table></div>` },
    { h: 'Ergogenic aids', html: `
<p>An <b>ergogenic aid</b> is anything that enhances performance.</p>
<div class="tbl"><table><tr><th>Aid</th><th>Positive effects</th><th>Negative effects</th><th>Timing</th></tr>
<tr><td><b>Energy gels and bars</b></td><td>quick, convenient carbohydrate; maintain blood glucose in long events; delay fatigue</td><td>gastrointestinal upset; need water; high sugar for non-athletes; cost</td><td>during events over ≈ 60–90 min (e.g. a gel every 30–45 min) or just before</td></tr>
<tr><td><b>Protein drinks</b></td><td>convenient protein for muscle repair and growth; supports recovery</td><td>expensive; excess is unnecessary (stored as fat / excreted); can replace whole foods</td><td>within ≈ 30–60 min after training (or before bed)</td></tr>
<tr><td><b>Carbohydrate loading</b></td><td>maximises muscle glycogen stores (supercompensation) — delays “hitting the wall” in events over 90 min</td><td>weight gain (water stored with glycogen); bloating, lethargy; only useful for long endurance events</td><td>last 3–4 days before an event: taper training and eat ≈ 8–10 g carbohydrate per kg per day</td></tr></table></div>` },
    { h: 'Sports drinks', html: `
<div class="tbl"><table><tr><th>Drink</th><th>Carbohydrate</th><th>Concentration v blood</th><th>Use and timing</th></tr>
<tr><td><b>Isotonic</b></td><td>6–8 g per 100 ml</td><td>same as blood</td><td>replaces fluid <i>and</i> provides energy — during exercise over 60 min (e.g. games, middle distance); ≈ 400–800 ml per hour in small amounts</td></tr>
<tr><td><b>Hypotonic</b></td><td>less than 6 g per 100 ml</td><td>weaker than blood</td><td>fastest fluid absorption — before or during exercise when hydration is the priority (e.g. hot conditions, jockeys, gymnasts)</td></tr>
<tr><td><b>Hypertonic</b></td><td>more than 8 g per 100 ml</td><td>stronger than blood</td><td>energy top-up after exercise (recovery, refuel glycogen) or during ultra-endurance events alongside water; absorbed slowly</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why an isotonic drink suits a football player at half-time. (2 marks)', s: ['It contains 6–8% carbohydrate, the same concentration as blood…', '…so it replaces fluid lost in sweat and provides glucose for the second half.'], a: 'Fluid + energy, absorbed quickly.' },
    { q: 'Describe carbohydrate loading for a marathon runner. (3 marks)', s: ['In the 3–4 days before the race, reduce (taper) training.', 'Increase carbohydrate intake to ≈ 8–10 g/kg/day.', 'This maximises (supercompensates) muscle glycogen stores, delaying fatigue.'], a: 'Taper + high-carbohydrate diet for 3–4 days → full glycogen stores.' }
  ],
  pitfalls: ['Mixing up hypotonic (more dilute) and hypertonic (more concentrated).', 'Recommending carbohydrate loading for short events.', 'Saying protein drinks are essential for everyone — food can provide enough.', 'Forgetting recommended timings.'],
  cards: [
    ['Ergogenic aid?', 'Anything that enhances performance.'], ['Isotonic drink?', '6–8 g carbohydrate/100 ml; fluid + energy.'], ['Hypotonic drink?', '< 6 g/100 ml; fastest rehydration.'], ['Hypertonic drink?', '> 8 g/100 ml; energy, recovery; slow absorption.'],
    ['Carbohydrate loading?', 'Taper training + 8–10 g/kg/day carbohydrate 3–4 days before an endurance event.'], ['Negative of carbo-loading?', 'Weight gain (water), bloating, lethargy.'], ['When to take a protein drink?', '≈ 30–60 min after training.'],
    ['When to use energy gels?', 'During events over 60–90 min.'], ['Safe rate of weight loss?', '≈ 0.5–1 kg a week (≈ 500 kcal/day deficit).']
  ],
  quiz: [
    { q: 'A drink with 7 g carbohydrate per 100 ml is…', o: ['isotonic', 'hypotonic', 'hypertonic', 'protein'], x: '6–8 g.' },
    { q: 'Which drink rehydrates fastest?', o: ['Hypotonic', 'Hypertonic', 'Isotonic', 'Protein shake'], x: 'More dilute.' },
    { q: 'Carbohydrate loading is most useful for…', o: ['a marathon', 'a 100 m sprint', 'a shot put', 'a 400 m race'], x: '> 90 min.' },
    { q: 'A disadvantage of carbohydrate loading is…', o: ['weight gain from stored water', 'lower glycogen', 'dehydration', 'muscle loss'], x: 'Glycogen stored with water.' },
    { q: 'Protein drinks are best taken…', o: ['soon after training', 'during a sprint', 'only before bed for weight loss', 'never'], x: 'Recovery window.' },
    { q: 'To lose weight, a client needs a…', o: ['negative energy balance', 'positive energy balance', 'hypertonic drink', 'carb-loading phase'], x: 'Intake < expenditure.' },
    { q: 'Hypertonic drinks are mainly used…', o: ['after exercise to refuel', 'for fastest rehydration', 'to lose weight', 'as a protein source'], x: 'Concentrated energy.' }
  ],
  exam: [
    { q: 'State the carbohydrate concentration of an isotonic sports drink. [1]', m: 1, ms: ['6–8 g per 100 ml (6–8%)'] },
    { q: 'Give one positive and one negative effect of energy gels for an endurance cyclist. [2]', m: 2, ms: ['positive: quick, convenient carbohydrate / maintain blood glucose / delay fatigue', 'negative: stomach upset / need to drink water / cost / high sugar'] },
    { q: 'Jo, 28, wants to lose 6 kg of body fat in 12 weeks while training for a 10 km run.', parts: [
      { q: 'Justify nutritional strategies that would help Jo meet her goals. [8]', m: 8, lv: true, ms: ['6 kg in 12 weeks = 0.5 kg/week — realistic; ≈ 500 kcal/day negative balance', 'reduce intake of saturated fat, sugar, alcohol; more fruit, vegetables, fibre (satiety)', 'keep carbohydrate adequate around runs for energy; time meals before/after training', 'protein ≈ 1.2–1.4 g/kg to preserve muscle and aid recovery', 'hydration: water normally; isotonic only for long, hot runs; avoid sugary drinks', 'avoid unnecessary ergogenic aids (gels, carb-loading not needed for 10 km)', 'micronutrients: iron and calcium for female runner', 'monitor weight, energy levels; adjust', 'judgement linking diet to both goals'] }
    ], tag: 'ext' }
  ],
  sims: ['drinksort', 'carbload'], gens: ['carbneed']
});
