/* ==========================================================
   COMPONENT 2 · THE ACTIVE PARTICIPANT IN PHYSICAL EDUCATION (non-exam assessment)
   Practical performance (3 × 20) and performance analysis and evaluation (20)
   ========================================================== */
const NEA_GUIDES = [
  { unit: 'P', title: 'Practical performance in three activities', time: '60 marks · 30% of the GCSE · AO4',
    intro: 'You are assessed as a player/performer in three activities from the approved list: at least one team activity and at least one individual activity, plus a third of either type. Each is marked out of 20 by your teacher using the assessment grid and moderated by Eduqas.',
    steps: [['Choose your activities', 'Pick three from the approved list (Appendix B) — at least one team and one individual. Check the restrictions (e.g. football must be 11-a-side or futsal, not five-a-side; track running up to 5000 m).'],
      ['Know the four skill areas', 'Every activity is assessed on: (1) competitive performance with emotional control and applying the rules; (2) a variety of skills and techniques; (3) effective use of the components of fitness; (4) strategic/tactical awareness and decision making.'],
      ['Team activities', 'You are also assessed on your individual role in the team, applying team strategies, awareness of others and communication.'],
      ['Perform in demanding situations', 'Show skills in competitive, full or conditioned games, not just drills — the top band needs consistent, effective performance under pressure.'],
      ['Gather evidence', 'Off-site activities (e.g. skiing, horse riding, sailing) need video evidence that clearly identifies you; your teacher will advise on filming.'],
      ['Health and safety', 'Show safe practice: warm-up, correct kit, risk awareness and following the rules.']],
    tips: ['Band 4 = 16–20, Band 3 = 11–15, Band 2 = 6–10, Band 1 = 1–5.', 'Choose activities where you have regular, competitive experience — club activities count if they are on the list.', 'Keep a log of matches and results; they help your teacher and the moderator.'] },
  { unit: 'P', title: 'Performance analysis and evaluation', time: '20 marks · 10% of the GCSE · AO4',
    intro: 'In one of your three assessed activities, you design, carry out and evaluate a personal training programme to improve your performance. Analysis (10 marks) and evaluation (10 marks) are completed under supervision — at least 3 hours for each part — and can be written or verbal.',
    steps: [['Self-analysis', 'Analyse your current performance in the activity — strengths and weaknesses in skills, fitness and tactics — using data: fitness tests compared with national norms, match statistics, video, performance profiles.'],
      ['Clear objective', 'Set a SMART objective for your programme based on your main weakness, and justify it with theory (components of fitness, principles of training, training zones).'],
      ['Plan the programme', 'At least 8 weeks recommended. Choose training methods, apply SPOV and FIT, set intensities using training zones; include warm-ups and cool-downs.'],
      ['Complete and monitor', 'Keep a training diary: heart rates, reps, times, how you felt. Retest during and at the end of the programme.'],
      ['Evaluate the programme and results', 'Analyse your data (tables, graphs, % change). Was the programme effective? Which principles were applied well or badly? What affected the results?'],
      ['Recommendations', 'Give specific, justified recommendations for future training and for improving your performance in the activity.']],
    tips: ['You are NOT marked on whether you improved — you are marked on the quality of your analysis, use of data and theory, and evaluation.', 'Present data clearly: tables and labelled graphs, with values quoted in your writing.', 'Use specialist terms throughout: SMART, specificity, progression, overload, variance, aerobic/anaerobic zones.'] }
];

TOPICS.push({
  id: 'P.1', unit: 'P', area: 'nea', ref: 'Component 2 · practical performance', title: 'Practical performance', short: 'Three activities (team and individual), the four skill areas and the bands',
  summary: 'How your three practical activities are assessed: the approved activity list, the requirement for at least one team and one individual activity, the four generic skill areas for every activity, the extra team criteria, and what each band (out of 20) looks like — with tips for showing your best performance.',
  spec: [
    'Three activities from the approved list: at least one individual and one team activity (each out of 20)',
    'Skills and techniques, decision making, problem solving, physical characteristics, psychological control, health and safety',
    'In team activities: participation as an active team member — team strategies, awareness of others, communication',
    'The four skill areas used in Appendix C for every activity',
    'Assessment bands: Band 4 (16–20), Band 3 (11–15), Band 2 (6–10), Band 1 (1–5)'
  ],
  learn: [
    { h: 'The requirements', html: `
<div class="tbl"><table><tr><th></th><th>Detail</th></tr>
<tr><td>Number of activities</td><td><b>Three</b>, each marked out of 20 (60 marks = 30% of the GCSE)</td></tr>
<tr><td>Mix</td><td>At least <b>one team</b> and at least <b>one individual</b> activity; the third can be either</td></tr>
<tr><td>Role</td><td>Player/performer</td></tr>
<tr><td>Activity list</td><td>The approved list set by the Department for Education (Appendix B) — e.g. team: association football, badminton (doubles), basketball, cricket, hockey, netball, rugby union/league, volleyball, camogie, Gaelic football, handball, hurling, lacrosse, water polo; individual: athletics, badminton (singles), boxing, canoeing/kayaking, cycling, dance, diving, golf, gymnastics, equestrian, rock climbing, skiing, snowboarding, squash, swimming, table tennis, tennis, trampolining. Some have restrictions (e.g. football is not five-a-side; track athletics up to 5000 m). One activity cannot count as both team and individual.</td></tr>
<tr><td>Marking</td><td>By your teacher, using the assessment grid; a sample is moderated by Eduqas</td></tr></table></div>` },
    { h: 'What is assessed', html: `
<p>In <b>every activity</b>, four skill areas are assessed (Appendix C):</p>
<ol><li><b>Competitive performance</b> — perform in a competitive situation, showing emotional control and applying the rules and regulations.</li>
<li><b>Variety of skills and techniques</b> — show a range of the activity’s core skills (e.g. football: passing, receiving, shooting, heading, tackling, dribbling).</li>
<li><b>Fitness</b> — demonstrate effective use of the relevant components of fitness (e.g. a 1500 m runner’s pacing and endurance).</li>
<li><b>Tactics and decision making</b> — show strategic/tactical awareness and good decisions (e.g. applying zonal marking at a corner; when to kick for touch).</li></ol>
<p>In <b>team activities</b>, you are also judged on your <b>individual role</b>, how you apply <b>team strategies</b> (taking account of team-mates’ strengths and weaknesses), <b>awareness of others</b> and <b>communication</b>.</p>
<div class="box why"><b class="lbl">The generic performance skills</b><p>Across all activities you should show: skills and techniques applied in demanding situations; decision making and strategies; problem solving (predetermined and spontaneous) under pressure; appropriate physical characteristics; psychological (emotional) control; and adherence to health and safety (risk management). In creative activities such as dance and gymnastics, compositional ideas are applied.</p></div>` },
    { h: 'The bands', html: `
<div class="tbl"><table><tr><th>Band</th><th>Marks</th><th>Typical performance</th></tr>
<tr><td><b>4</b></td><td>16–20</td><td>Excellent, consistent and effective skills in demanding competitive situations; excellent decisions and tactics; high fitness used effectively; excellent emotional control; (team) leads and communicates, applies strategies</td></tr>
<tr><td><b>3</b></td><td>11–15</td><td>Good, mostly consistent skills in competition; good decisions; fitness supports most of the performance; good control; contributes effectively to the team</td></tr>
<tr><td><b>2</b></td><td>6–10</td><td>Some skills performed with some success in competition but inconsistent under pressure; some appropriate decisions; fitness limits performance</td></tr>
<tr><td><b>1</b></td><td>1–5</td><td>Limited skills with little success in competition; few appropriate decisions; limited fitness and control</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'A student wants to be assessed in netball, swimming and trampolining. Is this a valid combination? (1 mark)', s: ['Yes — netball is a team activity; swimming and trampolining are individual activities, so there is at least one of each.'], a: 'Yes: one team + two individual.' },
    { q: 'Name the four skill areas assessed in every practical activity. (4 marks)', s: ['Competitive performance with emotional control and applying the rules.', 'A variety of skills and techniques.', 'Effective use of the components of fitness.', 'Strategic/tactical awareness and decision making.'], a: 'Competition/control/rules; skills; fitness; tactics/decisions.' }
  ],
  pitfalls: ['Choosing three team activities or three individual activities — you need at least one of each.', 'Thinking drills alone are enough — the higher bands need effective performance in competitive situations.', 'Forgetting that team activities also assess communication, team strategies and awareness of others.', 'Choosing an activity that is not on the approved list, or a restricted version (e.g. five-a-side football).'],
  cards: [
    ['How many practical activities?', 'Three, each out of 20.'], ['Required mix?', 'At least one team and one individual activity.'], ['Weighting of practical performance?', '60 marks — 30% of the GCSE.'],
    ['Four skill areas in every activity?', 'Competitive performance (control, rules); variety of skills; fitness; tactics and decision making.'], ['Extra criteria for team activities?', 'Individual role, team strategies, awareness of others, communication.'], ['Band 4 marks?', '16–20.'],
    ['Band 3 marks?', '11–15.'], ['Band 2 marks?', '6–10.'], ['Band 1 marks?', '1–5.'],
    ['Who marks the practical?', 'Your teacher; moderated by Eduqas.']
  ],
  quiz: [
    { q: 'How many practical activities are assessed?', o: ['Three', 'Two', 'Four', 'One'], x: 'Three × 20 marks.' },
    { q: 'Which combination is NOT allowed?', o: ['Football, hockey and netball', 'Football, swimming and athletics', 'Netball, tennis and hockey', 'Rugby, golf and dance'], x: 'Needs at least one individual activity.' },
    { q: 'Each practical activity is marked out of…', o: ['20', '10', '40', '80'], x: '20 each.' },
    { q: 'Communication with team-mates is assessed in…', o: ['team activities', 'individual activities only', 'the written exam only', 'no activities'], x: 'Team criteria.' },
    { q: 'A mark of 13/20 is in…', o: ['Band 3', 'Band 4', 'Band 2', 'Band 1'], x: '11–15.' },
    { q: 'Which is one of the four skill areas?', o: ['Strategic/tactical awareness and decision making', 'Writing a diary', 'Refereeing', 'Coaching younger pupils'], x: 'Decision making.' },
    { q: 'Practical performance is worth what % of the GCSE?', o: ['30%', '10%', '40%', '60%'], x: '60 of 80 NEA marks.' }
  ],
  exam: [
    { q: 'State the four skill areas used to assess performance in a practical activity. [4]', m: 4, ms: ['competitive performance — emotional control / applying rules', 'a variety of skills and techniques', 'effective use of components of fitness', 'strategic / tactical awareness and decision making'] },
    { q: 'For one team activity, explain how a player can show “awareness of others” and “communication”. [4]', m: 4, ms: ['awareness: reads team-mates’ and opponents’ positions / movement', 'e.g. passes into space for a running team-mate / covers a team-mate’s position', 'communication: calls for the ball / organises the defence / gives instructions', 'e.g. goalkeeper organising the wall / setter calling plays in volleyball'], tag: 'nea' }
  ],
  sims: ['pracband'], gens: []
});

TOPICS.push({
  id: 'P.2', unit: 'P', area: 'nea', ref: 'Component 2 · performance analysis and evaluation', title: 'Performance analysis and evaluation', short: 'Self-analysis, SMART objective, 8-week programme, monitoring, evaluation, recommendations',
  summary: 'How to complete the 20-mark performance analysis and evaluation: analyse your own performance with data and theory, set a clear objective, plan and complete a personal training programme (8+ weeks), monitor it, then evaluate the programme and its results and make recommendations.',
  spec: [
    'Design a personal training programme to provide recommendations to improve performance in one assessed practical activity',
    'Self-analysis of current performance; a plan with a clear objective; completion and monitoring; evaluation of the programme and results; recommendations',
    'Include appropriate theory; collect, present, analyse and evaluate appropriate data',
    'Programme recommended to last at least 8 weeks; not assessed on whether improvement occurred',
    'Analysis (10 marks) and evaluation (10 marks): at least 3 supervised hours for each'
  ],
  learn: [
    { h: 'Structure of the task', html: `
<div class="tbl"><table><tr><th>Part</th><th>What to include</th><th>Marks</th></tr>
<tr><td><b>Analysis</b></td><td>Self-analysis of current performance (strengths and weaknesses) using data: fitness test results compared with <b>national norms</b>, match statistics, video, a performance profile. Identify the main weakness. A <b>plan</b> of the training programme with a <b>clear (SMART) objective</b>, justified with theory: components of fitness, methods, principles of training, training zones.</td><td>10</td></tr>
<tr><td><b>Evaluation</b></td><td>Evidence that the programme was <b>completed and monitored</b> (training diary, heart rates, retests). <b>Evaluate</b> the programme and the results — use data, graphs and % change; explain what worked, what did not and why. <b>Recommendations</b> to improve future training and performance.</td><td>10</td></tr></table></div>
<p>Each part is completed under supervision (at least 3 hours each) and can be written, verbal or a mix. You are <b>not</b> assessed on whether you actually improved.</p>` },
    { h: 'A model plan: a netball centre', html: `
<ol><li><b>Analysis:</b> MSFT level 7.2 (below average for age); match notation shows interceptions drop in the last quarter; video shows slow recovery runs. Weakness: cardiovascular endurance.</li>
<li><b>Objective (SMART):</b> “Improve my MSFT score from 7.2 to 8.5 in 8 weeks, agreed with my teacher, to maintain my work rate in the final quarter.”</li>
<li><b>Plan:</b> 3 sessions a week; weeks 1–3 continuous running 20–30 min at 60–75% max HR (max HR 204 → 122–153 bpm); weeks 4–8 fartlek and court-based intervals touching 80–85% max HR. Apply specificity (court movement), progression (+5 min / +1 rep a week), overload (FIT), variance (swap one run for a circuit).</li>
<li><b>Monitor:</b> heart-rate monitor data, diary, retest MSFT at week 4 and week 8.</li>
<li><b>Evaluate:</b> final score 8.4 (+16.7%) — almost met objective; interceptions in quarter 4 rose from 1 to 3 per match. Missed 2 sessions due to illness (reversibility). Weeks 4–5 progression too fast (very sore).</li>
<li><b>Recommendations:</b> continue with more court-specific intervals; add agility; progress more gradually; plan rest days.</li></ol>` },
    { h: 'Using data well', html: `
<ul><li>Use <b>tables and labelled graphs</b> (test results over time, heart rate in sessions).</li>
<li>Quote figures in your writing and calculate <b>percentage change</b>: (new − old) ÷ old × 100.</li>
<li>Compare with <b>national norms</b> for your age and sex.</li>
<li>Consider <b>reliability</b>: same protocol, time of day, surface and tester for retests.</li>
<li>Explain results using theory — principles of training, adaptations (2.8), energy systems (2.7), motivation (4.4).</li></ul>` }
  ],
  eqs: [['"% change" = @frac{"new" - "old"}{"old"} × 100', '']],
  worked: [
    { q: 'Why should a student compare fitness test results with national norms in the analysis? (2 marks)', s: ['Norms show whether a score is above or below average for their age and sex.', 'This identifies genuine strengths and weaknesses to target in the programme.'], a: 'Shows strengths/weaknesses relative to peers.' },
    { q: 'A student’s 30 m sprint time falls from 4.80 s to 4.62 s. Calculate the percentage change. (2 marks)', s: ['(4.62 − 4.80) ÷ 4.80 × 100', '= −3.75% — a 3.75% improvement (lower time is better).'], a: '−3.75% (an improvement)' }
  ],
  pitfalls: ['Writing about fitness in general instead of analysing YOUR performance in ONE assessed activity.', 'An objective that is not SMART (no figure or deadline).', 'Describing what you did without evaluating WHY it worked or not.', 'Making vague recommendations (“train harder”) — be specific and justify with theory.'],
  cards: [
    ['Marks for performance analysis and evaluation?', '20 — analysis 10, evaluation 10.'], ['Recommended programme length?', 'At least 8 weeks.'], ['Supervised time?', 'At least 3 hours for analysis and 3 for evaluation.'],
    ['Five required elements?', 'Self-analysis; plan with clear objective; completion and monitoring; evaluation of programme and results; recommendations.'], ['Are you marked on improvement?', 'No — on the quality of analysis, theory, data and evaluation.'], ['Data sources for self-analysis?', 'Fitness tests v norms, match statistics, video, performance profile.'],
    ['How to monitor a programme?', 'Training diary, heart-rate data, retests.'], ['What must the plan be based on?', 'The main weakness identified, justified with theory.']
  ],
  quiz: [
    { q: 'The analysis and evaluation is worth…', o: ['20 marks', '60 marks', '10 marks', '120 marks'], x: '10 + 10.' },
    { q: 'Recommended minimum length of the training programme is…', o: ['8 weeks', '1 week', '6 months', '2 days'], x: 'At least 8 weeks.' },
    { q: 'Which is NOT required?', o: ['Proof that performance improved', 'Self-analysis', 'Recommendations', 'Monitoring the programme'], x: 'Improvement itself is not assessed.' },
    { q: 'The programme should be based on…', o: ['one of your assessed practical activities', 'any sport you like watching', 'a professional athlete’s plan', 'the written exam'], x: 'Your own activity.' },
    { q: 'Comparing your bleep test level with averages for your age uses…', o: ['national norms', 'mechanical guidance', 'knowledge of results only', 'variance'], x: 'Norms.' },
    { q: 'Which is the best objective?', o: ['Increase my vertical jump from 42 cm to 48 cm in 8 weeks', 'Get fitter', 'Play better netball', 'Train every day'], x: 'SMART.' }
  ],
  exam: [
    { q: 'List the five elements that must be included in the performance analysis and evaluation. [5]', m: 5, tag: 'nea', ms: ['self-analysis of current performance', 'plan of the training programme with a clear objective', 'completion and monitoring of the programme', 'evaluation of the programme and the results', 'recommendations for improving performance'] },
    { q: 'A student’s training diary shows that their programme improved their 1500 m time by only 1%. Explain how they could still achieve high marks in the evaluation. [4]', m: 4, tag: 'nea', ms: ['not marked on whether improvement occurred', 'analyse why improvement was small — e.g. progression too slow / missed sessions / not specific / test reliability', 'use data and theory (principles, energy systems) to support the evaluation', 'make specific, justified recommendations for future training'] }
  ],
  sims: ['progplan', 'profileG'], gens: ['gpct']
});
