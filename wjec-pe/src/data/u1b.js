/* ==========================================================
   UNIT 1 · EXPLORING PHYSICAL EDUCATION (AS) — part 2
   Areas of study 2–4: Sport psychology, Skill acquisition, Sport and society
   ========================================================== */
TOPICS.push({
  id: '1.10', unit: '1', area: 'psych', ref: 'Personality', title: 'Personality', short: 'Trait, social learning and interactionist theories; types; profiling and POMS',
  summary: 'Does personality decide how people behave in sport, or does the situation? Learn the trait, social learning and interactionist theories, Eysenck’s extrovert–introvert and stable–neurotic dimensions, Type A and Type B, and the methods used to profile personality — including the Profile of Mood States.',
  spec: [
    'Personality theories: trait, interactionist and social learning theories and their relationship with sport',
    'Personality types: extrovert, introvert, stable and neurotic; Type A and Type B',
    'Possible impacts of personality types on sporting performance',
    'Personality profiling: observation, questionnaires, interviews, profile of mood states (POMS)',
    'Benefits and limitations of each profiling method'
  ],
  learn: [
    { h: 'Three theories of personality', html: `
<div class="tbl"><table><tr><th>Theory</th><th>Key idea</th><th>In sport</th><th>Criticism</th></tr>
<tr><td><b>Trait theory</b> (Eysenck, Cattell)</td><td>personality is made of <b>innate, stable</b> traits; behaviour is consistent and predictable across situations. $"B" = f("P")$</td><td>an aggressive player will be aggressive in every match and away from sport</td><td>ignores the situation; people behave differently in different contexts; poor predictor of sporting behaviour</td></tr>
<tr><td><b>Social learning theory</b> (Bandura)</td><td>personality is <b>learned</b> by observing and imitating <b>significant others</b> (parents, coaches, role models), especially if their behaviour is reinforced. $"B" = f("E")$</td><td>a young player copies a professional who argues with referees and is praised for “passion”</td><td>ignores genetic influences; explains learned behaviours better than whole personality</td></tr>
<tr><td><b>Interactionist theory</b> (Lewin; Hollander)</td><td>behaviour is the result of <b>personality interacting with the situation</b>. $"B" = f("P" × "E")$</td><td>a normally calm player reacts aggressively after a bad refereeing decision in a derby</td><td>the most accepted view — but harder to predict because every situation differs</td></tr></table></div>
[[d:hollander]]
<p><b>Hollander’s model</b> has three layers: the <b>psychological core</b> (deep, stable beliefs and values), <b>typical responses</b> (the usual way we react), and <b>role-related behaviour</b> (the most changeable, shaped by the situation — e.g. captain vs substitute).</p>` },
    { h: 'Personality types', html: `
[[d:eysenck]]
<p><b>Eysenck</b> described two dimensions:</p>
<ul><li><b>Extrovert ↔ introvert.</b> Extroverts are sociable, outgoing and seek excitement; they have low natural arousal of the reticular activating system (RAS), so they look for stimulation — often preferring team games, gross skills and fast-paced activities, and perform better with an audience. Introverts are quiet and reserved, have high natural RAS arousal, and often prefer individual sports, fine and closed skills requiring concentration (archery, golf, long-distance running).</li>
<li><b>Stable ↔ neurotic.</b> Stable people are calm and even-tempered, with predictable emotions; neurotic people are anxious, moody and react strongly to stress. Stable performers generally cope better with pressure.</li></ul>
<div class="tbl"><table><tr><th>Type A</th><th>Type B</th></tr>
<tr><td>highly competitive, impatient, time-urgent, works fast, strong desire to succeed, prone to stress and aggression, likes control</td><td>relaxed, patient, less competitive, works steadily, lower stress, more tolerant</td></tr>
<tr><td>may thrive in pressured competition and leadership roles but risks anxiety, hostility and burnout</td><td>copes calmly with setbacks; may lack drive in highly competitive environments</td></tr></table></div>
<div class="box warn"><b class="lbl">Evidence</b><p>Research has found no “sporting personality” that predicts success. Personality tests can help coaches understand and manage athletes, not select them.</p></div>` },
    { h: 'Profiling personality', html: `
<div class="tbl"><table><tr><th>Method</th><th>Benefits</th><th>Limitations</th></tr>
<tr><td><b>Observation</b> — watching behaviour in a real setting (training, matches)</td><td>behaviour seen in a real sporting context (valid); performer not influenced by being asked questions</td><td>subjective and open to observer bias; time-consuming; needs a trained observer; one situation may not show typical behaviour</td></tr>
<tr><td><b>Questionnaires</b> — e.g. Eysenck Personality Inventory, Cattell’s 16PF</td><td>quick, cheap, easy to give to large groups; produces quantitative data that can be compared</td><td>answers may be dishonest or chosen to please (social desirability); questions misunderstood; limited answers; not sport-specific</td></tr>
<tr><td><b>Interviews</b></td><td>detailed, in-depth information; questions can be clarified and followed up</td><td>time-consuming; interviewer bias; performer may not be honest; hard to compare</td></tr>
<tr><td><b>POMS</b> — Profile of Mood States (Morgan)</td><td>measures six moods: tension, depression, anger, <b>vigour</b>, fatigue, confusion. Successful athletes show the <b>iceberg profile</b>: vigour above average, the others below</td><td>measures mood (changeable) rather than personality; self-report; the iceberg profile does not reliably predict who will win</td></tr></table></div>
[[d:iceberg]]` }
  ],
  eqs: [['"B" = f("P" × "E")', 'interactionist theory (Lewin)']],
  worked: [
    { q: 'A hockey player is usually quiet and calm but becomes aggressive when her team is losing a cup final. Explain this using the interactionist theory. (3 marks)', s: ['Interactionist theory states that behaviour = f(personality × environment).', 'Her stable traits (calm, quiet) usually determine her behaviour — the psychological core.', 'The situation (a cup final, losing, high arousal) interacts with her personality to change her role-related behaviour, so she becomes aggressive.'], a: 'B = f(P × E): the situation changes her role-related behaviour.' }
  ],
  pitfalls: ['Writing that trait theory is “correct” — examiners reward criticism and the interactionist view.', 'Saying extroverts have high arousal — they have low natural RAS arousal and seek stimulation.', 'Confusing neurotic (emotionally unstable) with introvert.', 'Describing POMS as a personality test — it measures mood states.', 'Listing profiling methods without a benefit and a limitation for each.'],
  cards: [
    ['Trait theory?', 'Personality is innate and stable; behaviour is consistent and predictable (B = f(P)).'], ['Social learning theory?', 'Personality/behaviour is learned by observing and imitating significant others (B = f(E)).'],
    ['Interactionist theory?', 'Behaviour results from personality interacting with the environment (B = f(P × E)).'], ['Hollander’s three layers?', 'Psychological core, typical responses, role-related behaviour.'],
    ['Extrovert?', 'Sociable, seeks excitement, low natural RAS arousal; often team and gross-skill sports.'], ['Introvert?', 'Quiet, reserved, high natural RAS arousal; often individual, fine and closed skills.'],
    ['Stable vs neurotic?', 'Stable: calm, even emotions. Neurotic: anxious, moody, reacts strongly to stress.'], ['Type A personality?', 'Competitive, impatient, time-urgent, prone to stress.'], ['Type B personality?', 'Relaxed, patient, less competitive.'],
    ['POMS measures…', 'Tension, depression, anger, vigour, fatigue, confusion.'], ['Iceberg profile?', 'Elite athletes: high vigour, below-average tension, depression, anger, fatigue and confusion.'],
    ['Limitation of questionnaires?', 'Dishonest or socially desirable answers; misunderstanding; not sport-specific.']
  ],
  quiz: [
    { q: 'B = f(P × E) describes…', o: ['interactionist theory', 'trait theory', 'social learning theory', 'drive theory'], x: 'Personality interacts with the environment.' },
    { q: 'A young player copies her idol’s celebration. This supports…', o: ['social learning theory', 'trait theory', 'Type A theory', 'catastrophe theory'], x: 'Learning by observing a significant other.' },
    { q: 'Extroverts are thought to have…', o: ['low natural arousal, so they seek stimulation', 'high natural arousal', 'no arousal', 'high neuroticism'], x: 'Low RAS arousal.' },
    { q: 'Which is a characteristic of a Type A personality?', o: ['Impatient and highly competitive', 'Relaxed and tolerant', 'Introverted', 'Low stress'], x: 'Time-urgency and competitiveness.' },
    { q: 'In Hollander’s model the most changeable layer is…', o: ['role-related behaviour', 'psychological core', 'typical responses', 'traits'], x: 'Shaped by the situation.' },
    { q: 'The iceberg profile shows high…', o: ['vigour', 'tension', 'fatigue', 'confusion'], x: 'Successful athletes’ mood profile.' },
    { q: 'A limitation of observation as a profiling method is…', o: ['it is subjective and time-consuming', 'it cannot be used in sport', 'it produces too much numerical data', 'the athlete answers dishonestly'], x: 'Observer bias.' },
    { q: 'A major criticism of trait theory is that it…', o: ['ignores the influence of the situation', 'ignores genetics', 'is based on the environment only', 'uses POMS'], x: 'Behaviour changes with context.' }
  ],
  exam: [
    { q: 'Describe the social learning theory of personality. [2]', m: 2, ms: ['personality/behaviour is learned from the environment / B = f(E)', 'by observing and imitating significant others / role models, especially if behaviour is reinforced'] },
    { q: 'Explain one benefit and one limitation of using questionnaires to profile an athlete’s personality. [2]', m: 2, ms: ['benefit: quick / cheap / large numbers / quantitative, comparable data', 'limitation: dishonest / socially desirable answers / misunderstood questions / not sport-specific'] },
    { q: 'Evaluate the usefulness of personality theories and profiling to a coach of a team sport. [8]', m: 8, lv: true, ms: ['trait theory: stable, predictable behaviour — could predict reactions but ignores situation', 'social learning: behaviour copied from significant others — coach can model and reinforce desired behaviour', 'interactionist B = f(P×E) most realistic — coach can manage situations to influence behaviour', 'Eysenck: extroverts may suit team/high-arousal roles; stable players cope with pressure', 'Type A/B: competitive players may be good leaders but prone to stress/aggression', 'profiling: questionnaires/interviews/observation each with limitations (honesty, bias, time)', 'POMS: iceberg profile can monitor mood/overtraining but does not predict success', 'judgement: useful to understand and manage individuals, not to select or predict performance'], tag: 'ext' }
  ],
  sims: ['eysenck'], gens: []
});

TOPICS.push({
  id: '1.11', unit: '1', area: 'psych', ref: 'Stress, arousal and anxiety in sport', title: 'Stress, arousal and anxiety', short: 'Drive, inverted-U, catastrophe; ZOF and flow; SCAT, CSAI-2; somatic and cognitive control',
  summary: 'Arousal can lift or wreck a performance. Learn how stress, arousal and anxiety differ, the drive, inverted-U and catastrophe theories, the zone of optimal functioning and flow, how arousal and anxiety are measured (physiological measures, observation, SCAT, CSAI-2), and the somatic and cognitive techniques used to control them.',
  spec: [
    'Definitions of stress, arousal and anxiety; different types of anxiety (trait and state)',
    'Theories of arousal: drive theory, inverted-U and catastrophe theories',
    'Zone of optimal functioning (ZOF) and peak flow experiences',
    'Relationship between arousal and performance for different skills and levels of expertise; arousal and personality; the effect of an audience',
    'Measurement: physiological measures (heart rate, breathing rate, muscle response, sweating, hormones), observation and questionnaires — SCAT and CSAI-2',
    'Controlling stress, arousal and anxiety: somatic techniques (biofeedback, breathing and relaxation) and cognitive techniques (goal setting, imagery, self-talk)'
  ],
  learn: [
    { h: 'Definitions', html: `
<div class="tbl"><table><tr><th>Term</th><th>Meaning</th></tr>
<tr><td><b>Stress</b></td><td>a response to a stressor when a performer perceives that the demands of a situation exceed their ability to cope. It can be positive (<b>eustress</b> — challenge, excitement) or negative (<b>distress</b>).</td></tr>
<tr><td><b>Arousal</b></td><td>the general level of physiological and psychological activation or readiness, on a continuum from deep sleep to intense excitement. It is neutral — neither good nor bad.</td></tr>
<tr><td><b>Anxiety</b></td><td>a negative emotional state of worry, nervousness and apprehension, associated with high arousal.</td></tr></table></div>
<ul><li><b>Trait anxiety</b> — a stable, general tendency to perceive many situations as threatening (part of personality).</li>
<li><b>State anxiety</b> — temporary anxiety in a specific situation (e.g. before a penalty). People high in trait anxiety tend to have higher state anxiety in competition.</li>
<li><b>Cognitive anxiety</b> — worry, negative thoughts, fear of failure. <b>Somatic anxiety</b> — the physical symptoms: raised heart rate, sweating, butterflies, muscle tension.</li></ul>` },
    { h: 'Drive theory and the inverted-U', html: `
[[d:arousaltheories]]
<p><b>Drive theory</b> (Hull): performance increases in a straight line with arousal — $"P" = "H" × "D"$ (performance = habit × drive). High arousal makes the <b>dominant response</b> (the best-learned response) more likely. For an expert in the autonomous stage the dominant response is correct, so high arousal helps; for a beginner it is likely to be wrong, so high arousal harms performance. It suits simple and gross skills. Criticism: experts also choke at very high arousal.</p>
<p><b>Inverted-U theory</b> (Yerkes–Dodson): performance improves as arousal rises to an <b>optimum</b> at a moderate level, then gradually declines if arousal keeps rising. The optimum depends on:</p>
<ul><li><b>skill type</b> — gross, simple skills (a rugby tackle, weightlifting) have a higher optimum; fine, complex skills (a snooker shot, a golf putt) a lower one;</li>
<li><b>expertise</b> — experts cope with higher arousal than beginners;</li>
<li><b>personality</b> — extroverts have a higher optimum than introverts.</li></ul>
<p>Criticism: it assumes a smooth decline after the optimum, and one optimum point for everyone.</p>` },
    { h: 'Catastrophe theory, ZOF and flow', html: `
<p><b>Catastrophe theory</b> (Hardy and Fazey) adds cognitive anxiety. With low cognitive anxiety, arousal and performance follow an inverted U. With <b>high cognitive anxiety</b>, performance rises with somatic arousal to an optimum, but a small further increase causes a <b>sudden, dramatic drop</b> — the “catastrophe” (choking). Performance does not recover simply by reducing arousal a little; the performer must relax substantially and rebuild.</p>
<p><b>Zone of optimal functioning (ZOF)</b> (Hanin): each performer has their own <b>band</b> of arousal (not a single point) in which they perform best. Some athletes perform best at low arousal, others at high arousal; the coach must identify each athlete’s zone.</p>
<p><b>Peak flow experience</b> (Csikszentmihalyi): the “in the zone” state — total absorption, clear goals, a sense of control, effortless movement, loss of self-consciousness and distorted time. It is most likely when the <b>challenge matches the performer’s skill</b>, arousal is optimal, confidence is high and preparation is thorough; it is prevented by distractions, fatigue, poor preparation and anxiety.</p>` },
    { h: 'Arousal, the audience and personality', html: `
<p>High arousal narrows attention (useful for gross skills, harmful for decision-making in open skills). An <b>audience</b> raises arousal: this helps experienced, extrovert performers doing simple or gross skills, but hinders novices, introverts and those doing complex or fine skills (see social facilitation, 3.13).</p>` },
    { h: 'Measuring stress, arousal and anxiety', html: `
<div class="tbl"><table><tr><th>Method</th><th>What it involves</th><th>Pros and cons</th></tr>
<tr><td><b>Physiological measures</b></td><td>heart rate, breathing rate, muscle tension (electromyography), sweating (galvanic skin response), hormone levels (adrenaline, cortisol in blood or saliva)</td><td>objective data; but equipment can be intrusive, expensive, and hard to use during competition; a raised HR may be due to exercise not anxiety</td></tr>
<tr><td><b>Observation</b></td><td>a trained observer watches behaviour (fidgeting, pacing, yawning, errors)</td><td>real setting; but subjective and time-consuming</td></tr>
<tr><td><b>Questionnaires</b></td><td><b>SCAT</b> (Sport Competition Anxiety Test, Martens) measures <b>trait</b> anxiety in competition. <b>CSAI-2</b> (Competitive State Anxiety Inventory-2) measures <b>state</b> anxiety in three parts: cognitive anxiety, somatic anxiety and self-confidence</td><td>quick, cheap, quantitative; but may be answered dishonestly, given at the wrong time, or misunderstood</td></tr></table></div>` },
    { h: 'Controlling stress, arousal and anxiety', html: `
<div class="grid g2"><div class="box"><b class="lbl">Somatic techniques (the body)</b><ul><li><b>Biofeedback</b> — monitors (HR, skin conductance, muscle tension) show the performer their physiological state so they learn to lower it.</li><li><b>Breathing control / centring</b> — slow, deep breathing focused on the diaphragm to lower HR and refocus.</li><li><b>Progressive muscular relaxation (PMR)</b> — tensing and relaxing muscle groups in turn to recognise and release tension.</li></ul></div>
<div class="box"><b class="lbl">Cognitive techniques (the mind)</b><ul><li><b>Goal setting</b> — performance and process goals shift attention away from the outcome.</li><li><b>Imagery</b> — picturing a calm place or a successful performance.</li><li><b>Self-talk</b> — positive statements (“I’ve done this a hundred times”) replace negative thoughts; thought stopping.</li><li>Mental rehearsal and attentional control.</li></ul></div></div>
<p>Match the technique to the anxiety: somatic techniques for physical symptoms, cognitive techniques for worry. Some performers need to <b>raise</b> arousal (psyching up — music, pep talks).</p>` }
  ],
  eqs: [['"P" = "H" × "D"', 'drive theory: performance = habit × drive']],
  worked: [
    { q: 'Use the inverted-U theory to explain why a beginner golfer putts badly in her first competition. (3 marks)', s: ['Inverted-U: performance is best at a moderate, optimal level of arousal.', 'A putt is a fine, complex skill, and she is a beginner — both give a <b>low optimum</b>.', 'The competition raises her arousal above this optimum (over-arousal), narrowing attention and causing muscle tension, so performance declines.'], a: 'Over-arousal beyond a low optimum for a fine skill and a novice.' },
    { q: 'Explain how catastrophe theory differs from the inverted-U theory. (3 marks)', s: ['Both predict performance improving as arousal rises to an optimum.', 'Inverted-U predicts a gradual decline beyond the optimum.', 'Catastrophe theory predicts a sudden, dramatic drop when somatic arousal rises past the optimum while cognitive anxiety is high, and recovery requires a large reduction in arousal.'], a: 'Sudden drop vs gradual decline; the role of cognitive anxiety.' }
  ],
  pitfalls: ['Using arousal and anxiety as if they mean the same thing — anxiety is a negative response to high arousal.', 'Mixing up SCAT (trait) and CSAI-2 (state; cognitive, somatic, self-confidence).', 'Saying drive theory is correct for all performers — it ignores over-arousal.', 'Writing “stay calm” as a control technique — name the technique (e.g. PMR, centring, self-talk) and explain how it works.', 'Forgetting that ZOF is a band that differs between individuals.'],
  cards: [
    ['Arousal?', 'Level of physiological and psychological activation/readiness, from deep sleep to intense excitement.'], ['Anxiety?', 'Negative emotional state of worry and apprehension linked to high arousal.'],
    ['Stress?', 'Response when perceived demands exceed ability to cope; eustress or distress.'], ['Trait vs state anxiety?', 'Trait: general, stable tendency. State: temporary, in a specific situation.'],
    ['Cognitive vs somatic anxiety?', 'Cognitive: worry/negative thoughts. Somatic: physical symptoms.'], ['Drive theory?', 'Linear: performance increases with arousal; dominant response more likely (P = H × D).'],
    ['Inverted-U theory?', 'Performance best at moderate arousal; declines gradually either side.'], ['Catastrophe theory?', 'With high cognitive anxiety, arousal past the optimum causes a sudden dramatic drop.'],
    ['ZOF?', 'An individual band of arousal in which a performer performs best.'], ['Peak flow?', 'Optimal experience: total absorption, control, effortless — when challenge matches skill.'],
    ['SCAT measures?', 'Trait competitive anxiety.'], ['CSAI-2 measures?', 'State anxiety: cognitive, somatic, and self-confidence.'], ['Physiological measures of arousal?', 'HR, breathing rate, muscle tension (EMG), sweating, hormone levels.'],
    ['Three somatic techniques?', 'Biofeedback, breathing control/centring, progressive muscular relaxation.'], ['Three cognitive techniques?', 'Goal setting, imagery, self-talk (also thought stopping, mental rehearsal).']
  ],
  quiz: [
    { q: 'Which theory predicts a sudden drop in performance when arousal is too high and cognitive anxiety is high?', o: ['Catastrophe theory', 'Drive theory', 'Inverted-U theory', 'Social learning theory'], x: 'The “catastrophe”.' },
    { q: 'According to the inverted-U theory, which skill has the highest optimum arousal?', o: ['A rugby tackle', 'A snooker shot', 'An archery shot', 'A golf putt'], x: 'Gross, simple skills.' },
    { q: 'CSAI-2 measures cognitive anxiety, somatic anxiety and…', o: ['self-confidence', 'trait anxiety', 'vigour', 'aggression'], x: 'Three sub-scales.' },
    { q: 'SCAT measures…', o: ['trait anxiety', 'state anxiety', 'mood', 'arousal hormones'], x: 'Sport Competition Anxiety Test.' },
    { q: 'Butterflies and sweaty palms are signs of…', o: ['somatic anxiety', 'cognitive anxiety', 'trait anxiety only', 'flow'], x: 'Physical symptoms.' },
    { q: 'Drive theory suggests high arousal helps…', o: ['experts, because the dominant response is correct', 'beginners', 'fine skills only', 'introverts'], x: 'Dominant response is well learned.' },
    { q: 'Tensing then relaxing muscle groups is…', o: ['progressive muscular relaxation', 'imagery', 'self-talk', 'goal setting'], x: 'A somatic technique.' },
    { q: 'The zone of optimal functioning is best described as…', o: ['an individual band of arousal', 'the same arousal point for everyone', 'a type of anxiety', 'a questionnaire'], x: 'Hanin’s ZOF.' },
    { q: 'Flow is most likely when…', o: ['the challenge matches the performer’s skill', 'arousal is very low', 'the task is far too hard', 'the performer is distracted'], x: 'Balance of challenge and skill.' },
    { q: 'A limitation of physiological measures of arousal is…', o: ['exercise itself raises HR, so it may not reflect anxiety', 'they are always subjective', 'they are questionnaires', 'they are cheap'], x: 'Hard to separate effects in competition.' }
  ],
  exam: [
    { q: 'Explain the difference between trait anxiety and state anxiety. [2]', m: 2, ms: ['trait: a stable/general disposition to perceive situations as threatening', 'state: temporary anxiety in a specific situation'] },
    { q: 'A penalty taker in football becomes very anxious before a shoot-out.', parts: [
      { q: 'Describe two physiological measures that could be used to assess her arousal. [2]', m: 2, ms: ['heart rate / breathing rate', 'muscle tension (EMG) / sweating (GSR) / hormone levels (adrenaline, cortisol)'] },
      { q: 'Use catastrophe theory to explain why her performance may suddenly deteriorate. [3]', m: 3, ms: ['performance improves with arousal to an optimum', 'if cognitive anxiety is high and arousal goes past the optimum', 'there is a sudden, dramatic drop in performance / choking, not a gradual decline; hard to recover'] },
      { q: 'Explain two cognitive techniques she could use to control her anxiety. [4]', m: 4, ms: ['self-talk: positive statements replace negative thoughts', 'boosts confidence / focuses on the process', 'imagery/mental rehearsal: pictures a successful penalty / calm place', 'reduces worry / builds confidence; (accept goal setting — process goals)'] }
    ] },
    { q: 'Discuss how the relationship between arousal and performance depends on the type of skill and the level of expertise of the performer. [6]', m: 6, lv: true, ms: ['inverted-U: best performance at an optimal level of arousal', 'gross/simple skills (e.g. weightlifting) have a higher optimum; fine/complex (e.g. putting) lower', 'experts cope with higher arousal — skills are autonomous and attention can narrow', 'novices need low arousal — cognitive stage, many cues to process', 'drive theory: dominant response — correct for experts, incorrect for novices', 'personality (extroverts higher optimum) and audience also affect arousal; judgement'] }
  ],
  sims: ['arousal'], gens: []
});

TOPICS.push({
  id: '1.12', unit: '1', area: 'psych', ref: 'Motivation', title: 'Motivation, achievement motivation and self-efficacy', short: 'Intrinsic and extrinsic; NAch and NAF; competitiveness; Bandura’s self-efficacy',
  summary: 'Motivation drives people to start, keep going and try hard. Learn intrinsic and extrinsic motivation and the use of tangible and intangible rewards, why people take part in sport, achievement motivation (need to achieve vs need to avoid failure), competitiveness, and Bandura’s self-efficacy with its four sources.',
  spec: [
    'Intrinsic and extrinsic motivation: the use of tangible and intangible rewards; benefits and drawbacks of different forms of motivation',
    'Motives for involvement in exercise and sport; reasons for participation',
    'Achievement motivation and links with personality and situation; need to achieve (NAch) and need to avoid failure (NAF)',
    'Development of achievement motivation and implications for coaching young children',
    'Competitiveness: sport-specific achievement motivation and links with competitive trait anxiety',
    'Self-efficacy (Bandura, 1977): past performance, vicarious experiences, verbal persuasion and arousal; links with self-confidence and expectations of success; how coaches can develop it',
    'Understand and interpret graphical representations linked to sport psychology theories'
  ],
  learn: [
    { h: 'Intrinsic and extrinsic motivation', html: `
<p><b>Motivation</b> is the internal mechanisms and external stimuli that arouse and direct behaviour — the <b>direction</b> and <b>intensity</b> of effort.</p>
<div class="tbl"><table><tr><th></th><th>Intrinsic</th><th>Extrinsic</th></tr>
<tr><td>Source</td><td>from within: enjoyment, satisfaction, pride, mastery, fun</td><td>from outside: rewards from others</td></tr>
<tr><td>Examples</td><td>a runner enjoys the feeling of a good session</td><td><b>tangible</b> rewards (trophies, medals, money, certificates); <b>intangible</b> rewards (praise, applause, recognition, status)</td></tr>
<tr><td>Benefits</td><td>long-lasting; leads to lifelong participation; linked to mastery goals</td><td>attracts beginners; reinforces correct actions; motivates when intrinsic motivation is low</td></tr>
<tr><td>Drawbacks</td><td>may take time to develop in beginners</td><td>over-use can <b>undermine intrinsic motivation</b> (“doing it for the reward”); rewards lose value; focus on outcome; participation may stop when rewards stop</td></tr></table></div>
<p><b>Why people take part:</b> health and fitness, enjoyment, social contact and friendship, challenge and competition, weight control and body image, stress relief, achievement and status, family influence, rewards. Coaches should use extrinsic rewards sparingly to build intrinsic motivation.</p>` },
    { h: 'Achievement motivation', html: `
<p><b>Achievement motivation</b> (Atkinson and McClelland) is a person’s drive to succeed, which depends on their <b>personality</b> and the <b>situation</b>.</p>
<div class="tbl"><table><tr><th>Need to achieve (NAch) — approach</th><th>Need to avoid failure (NAF) — avoidance</th></tr>
<tr><td>seeks challenges; prefers tasks with a 50:50 chance of success; persists after failure; takes risks; not afraid of evaluation; attributes success to internal factors (ability, effort)</td><td>avoids challenges or chooses very easy or impossibly hard tasks; gives up easily; fears evaluation; high competitive anxiety; attributes failure to internal, stable factors</td></tr></table></div>
<p><b>Situational factors:</b> the <b>probability of success</b> and the <b>incentive value</b> of success. Beating a much stronger opponent has high incentive value but a low probability of success. A high-NAch performer is most motivated when the probability of success is about 50%.</p>
<p><b>Developing achievement motivation in young children</b> — the coach should: set challenging but achievable tasks; praise effort and improvement (mastery climate) rather than just winning; give positive reinforcement and early success; gradually increase difficulty; use attributional retraining (attribute failure to controllable factors like effort); avoid public criticism and punishment; use peer demonstrations; allow choice.</p>` },
    { h: 'Competitiveness', html: `
<p><b>Competitiveness</b> is a <b>sport-specific</b> form of achievement motivation — the desire to strive for success in competitive sport (Gill and Deeter). It is closely linked to <b>competitive trait anxiety</b>: performers who see competition as a threat to their self-esteem (high NAF) have high competitive trait anxiety and avoid competition, while high-NAch performers see competition as a challenge.</p>` },
    { h: 'Self-efficacy (Bandura, 1977)', html: `
[[d:bandura]]
<p><b>Self-efficacy</b> is the belief in your ability to succeed in a <b>specific</b> situation — situation-specific self-confidence. It affects the <b>expectation of success</b>, which affects choice of activity, effort, persistence and performance. It has four sources:</p>
<div class="tbl"><table><tr><th>Source</th><th>Meaning</th><th>How a coach develops it</th></tr>
<tr><td><b>Performance accomplishments</b> (past performance)</td><td>previous success in the task — the strongest source</td><td>plan early successes; break skills into achievable steps; remind of past successes</td></tr>
<tr><td><b>Vicarious experiences</b></td><td>watching someone similar succeed</td><td>peer demonstrations by performers of similar ability, age and gender</td></tr>
<tr><td><b>Verbal persuasion</b></td><td>encouragement from significant others</td><td>positive feedback, praise and encouragement from coaches, teammates, parents</td></tr>
<tr><td><b>Emotional arousal</b></td><td>how the performer interprets physiological arousal</td><td>teach arousal control (breathing, imagery) and to interpret nerves as readiness</td></tr></table></div>
<p>Links: high self-efficacy supports positive attitudes, NAch behaviour and persistence; low self-efficacy links with learned helplessness (3.16).</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain how a coach could raise the self-efficacy of a nervous swimmer learning to dive. (4 marks)', s: ['<b>Performance accomplishments:</b> start with sitting dives, then kneeling, then standing — build success step by step.', '<b>Vicarious experience:</b> let a swimmer of similar age and ability demonstrate the dive successfully.', '<b>Verbal persuasion:</b> encourage and praise each improvement.', '<b>Emotional arousal:</b> teach slow breathing before the dive and explain that butterflies are normal readiness.'], a: 'Use all four of Bandura’s sources.' }
  ],
  pitfalls: ['Confusing self-efficacy (situation-specific) with general self-confidence.', 'Calling praise a tangible reward — it is intangible.', 'Stating NAF performers avoid all tasks — they often choose very easy or impossibly hard tasks.', 'Listing Bandura’s four sources without explaining how a coach uses them.', 'Forgetting that too many extrinsic rewards can reduce intrinsic motivation.'],
  cards: [
    ['Intrinsic motivation?', 'Motivation from within — enjoyment, satisfaction, pride.'], ['Extrinsic motivation?', 'Motivation from external rewards.'],
    ['Tangible reward example?', 'Trophy, medal, money, certificate.'], ['Intangible reward example?', 'Praise, applause, recognition.'], ['Drawback of extrinsic rewards?', 'Can undermine intrinsic motivation; participation may stop when rewards stop.'],
    ['NAch characteristics?', 'Seeks challenge, persists, takes risks, likes evaluation, 50:50 tasks.'], ['NAF characteristics?', 'Avoids challenge, gives up, fears evaluation, chooses very easy/very hard tasks.'],
    ['Two situational factors in achievement motivation?', 'Probability of success and incentive value of success.'], ['Competitiveness?', 'Sport-specific achievement motivation; linked with competitive trait anxiety.'],
    ['Self-efficacy?', 'Situation-specific self-confidence (Bandura, 1977).'], ['Four sources of self-efficacy?', 'Performance accomplishments, vicarious experiences, verbal persuasion, emotional arousal.'],
    ['Strongest source of self-efficacy?', 'Performance accomplishments (past success).']
  ],
  quiz: [
    { q: 'A player of the match award is an example of…', o: ['extrinsic, tangible reward', 'intrinsic motivation', 'intangible reward', 'vicarious experience'], x: 'A physical reward from outside.' },
    { q: 'Which is an intangible reward?', o: ['Applause from the crowd', 'A medal', 'Prize money', 'A certificate'], x: 'Not a physical object.' },
    { q: 'A high-NAch performer prefers tasks with…', o: ['about a 50:50 chance of success', 'guaranteed success', 'no chance of success', 'no evaluation'], x: 'Realistic challenge.' },
    { q: 'Which is typical of a high-NAF performer?', o: ['Avoiding situations where they might be evaluated', 'Seeking challenging opponents', 'Taking risks', 'Persisting after failure'], x: 'Fear of failure.' },
    { q: 'Watching a teammate of similar ability succeed raises self-efficacy through…', o: ['vicarious experience', 'verbal persuasion', 'performance accomplishments', 'emotional arousal'], x: 'Observing a similar model.' },
    { q: 'The strongest source of self-efficacy is…', o: ['performance accomplishments', 'verbal persuasion', 'vicarious experience', 'emotional arousal'], x: 'Past success.' },
    { q: 'Competitiveness is best described as…', o: ['sport-specific achievement motivation', 'trait theory', 'a form of aggression', 'extrinsic motivation'], x: 'Gill and Deeter.' },
    { q: 'To develop achievement motivation in children, a coach should…', o: ['praise effort and improvement', 'reward only winning', 'publicly criticise errors', 'set impossible tasks'], x: 'Mastery climate.' }
  ],
  exam: [
    { q: 'Using examples, explain the difference between tangible and intangible rewards. [2]', m: 2, ms: ['tangible: physical rewards, e.g. trophy / medal / money', 'intangible: non-physical, e.g. praise / applause / recognition'] },
    { q: 'Explain the characteristics of a performer with a high need to achieve (NAch). [3]', m: 3, ms: ['seeks challenges / competition / prefers 50:50 tasks', 'persists / keeps trying after failure', 'takes risks / welcomes evaluation / attributes success internally'] },
    { q: 'A coach is working with a group of young gymnasts who lack confidence.', parts: [
      { q: 'Define self-efficacy. [1]', m: 1, ms: ['situation-specific self-confidence / belief in ability to succeed in a specific situation'] },
      { q: 'Explain how the coach could use Bandura’s model to improve the gymnasts’ self-efficacy. [4]', m: 4, ms: ['performance accomplishments: early success, progressions (e.g. forward roll → dive roll)', 'vicarious: demonstration by a gymnast of similar ability/age', 'verbal persuasion: encouragement / praise / positive feedback', 'emotional arousal: control arousal (breathing, relaxation) / reinterpret nerves'] },
      { q: 'Discuss the benefits and drawbacks of using extrinsic motivation with the young gymnasts. [6]', m: 6, lv: true, ms: ['extrinsic rewards (badges, certificates, praise) attract and reward beginners', 'reinforce correct actions / strengthen S–R bond', 'raise confidence / self-efficacy (verbal persuasion)', 'drawbacks: can undermine intrinsic motivation if over-used', 'rewards lose value / children stop when rewards stop / focus on outcome not mastery', 'judgement: use sparingly and link to effort/improvement to build intrinsic motivation'] }
    ] }
  ],
  sims: ['achieve'], gens: []
});

TOPICS.push({
  id: '1.13', unit: '1', area: 'skill', ref: 'Skill, ability and application to practical activity', title: 'Skill, ability and classifying skills', short: 'Definitions, characteristics of skill, gross motor and psychomotor abilities, six continua',
  summary: 'A skill is learned; an ability is inherited. Learn the definitions of skill, ability, learning and performance, what skilled performance looks like, gross motor and psychomotor abilities, and how to place skills on the six continua — then use the classification to choose the right type of practice.',
  spec: [
    'Definitions of skill, ability, learning and performance; characteristics of skilled performance',
    'Abilities: gross motor and psychomotor; examples of different abilities used within sport',
    'Skill continuums: pacing (internal/external), difficulty (complex/simple), organisation (low/high), continuity (discrete, serial, continuous), muscular involvement (fine/gross) and environmental influence (open/closed)',
    'How the classification of skills can aid teaching and coaching, e.g. variable practice for open skills'
  ],
  learn: [
    { h: 'Skill, ability, learning and performance', html: `
<div class="tbl"><table><tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Skill</b></td><td>the learned ability to bring about pre-determined results with maximum certainty, often with the minimum outlay of time, energy or both (Knapp)</td></tr>
<tr><td><b>Ability</b></td><td>an inherited, stable and enduring trait that underpins the performance of skills (e.g. co-ordination, strength)</td></tr>
<tr><td><b>Learning</b></td><td>a relatively permanent change in performance brought about by experience or practice</td></tr>
<tr><td><b>Performance</b></td><td>a temporary occurrence — what happens on a particular occasion; it fluctuates (fatigue, anxiety, luck)</td></tr></table></div>
<p><b>Characteristics of skilled performance:</b> learned; goal-directed; consistent; efficient (minimum energy); fluent and aesthetically pleasing; controlled and co-ordinated; accurate; adaptable to changing situations; uses good decision-making.</p>` },
    { h: 'Abilities', html: `
<ul><li><b>Gross motor abilities</b> (physical proficiency) involve movement and are linked to fitness: strength (static, dynamic, explosive), flexibility, stamina, speed, body co-ordination.</li>
<li><b>Psychomotor abilities</b> (perceptual-motor) involve processing information and making movements: reaction time, multi-limb co-ordination, manual dexterity, aiming, response orientation, rate control.</li></ul>
<p>Abilities are general; a skill needs a <b>specific combination</b> of abilities (e.g. a tennis serve: co-ordination, explosive strength, aiming, reaction time). People with high abilities often learn skills faster, but abilities do not guarantee skill — practice is needed.</p>` },
    { h: 'The six continua', html: `
[[d:continua]]
<div class="tbl"><table><tr><th>Continuum</th><th>One end</th><th>Other end</th></tr>
<tr><td><b>Environmental influence</b></td><td><b>closed</b> — stable, predictable environment; not affected by others (free throw, gymnastics vault)</td><td><b>open</b> — changing, unpredictable environment; decisions needed (a pass in football)</td></tr>
<tr><td><b>Pacing</b></td><td><b>internally (self-) paced</b> — the performer controls the timing (a tennis serve)</td><td><b>externally paced</b> — timing set by the environment/opponent (receiving a serve)</td></tr>
<tr><td><b>Difficulty</b></td><td><b>simple</b> — little information, few decisions (sprint start)</td><td><b>complex</b> — lots of information and decisions, high attention (a pass in rugby under pressure)</td></tr>
<tr><td><b>Organisation</b></td><td><b>low</b> — easily broken into sub-routines (a swimming stroke, triple jump)</td><td><b>high</b> — sub-routines closely linked, hard to separate (a golf swing, cartwheel)</td></tr>
<tr><td><b>Continuity</b></td><td><b>discrete</b> — clear beginning and end (a penalty kick)</td><td><b>serial</b> — discrete skills linked in order (triple jump) → <b>continuous</b> — no obvious start or end, the end of one cycle is the start of the next (cycling, running)</td></tr>
<tr><td><b>Muscular involvement</b></td><td><b>fine</b> — small muscle groups, precision (a snooker shot, darts)</td><td><b>gross</b> — large muscle groups (a shot put, sprinting)</td></tr></table></div>
<p>Skills are placed on a <b>continuum</b>, not in boxes, because most have elements of both ends; always justify where you place a skill.</p>` },
    { h: 'Using classification in coaching', html: `
<div class="tbl"><table><tr><th>Classification</th><th>Suggested practice</th><th>Reason</th></tr>
<tr><td>Open</td><td><b>variable</b> practice</td><td>builds a range of experiences (a schema) for changing situations</td></tr>
<tr><td>Closed</td><td><b>fixed</b> practice</td><td>repetition grooves a consistent motor programme</td></tr>
<tr><td>Low organisation, complex, serial</td><td><b>part</b> or <b>progressive part</b> practice</td><td>sub-routines can be separated; reduces information overload</td></tr>
<tr><td>High organisation, simple, discrete</td><td><b>whole</b> practice</td><td>parts cannot be separated without losing the feel (kinaesthesis) and flow</td></tr>
<tr><td>Self-paced</td><td>fixed practice, mental rehearsal</td><td>performer controls timing</td></tr>
<tr><td>Gross skills</td><td>distributed practice for beginners</td><td>fatigue; allow rest and feedback</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Classify a netball pass on the open–closed and pacing continua, and justify one practice method for it. (4 marks)', s: ['<b>Open:</b> the passer must respond to the positions of teammates and defenders, which keep changing.', '<b>Externally paced:</b> the timing depends on the receiver’s movement and the defender, not just the passer.', 'Practice: <b>variable practice</b> — passing in small-sided games and changing drills (e.g. 3 v 2).', 'This builds a wide range of experiences (schema) so the player can adapt the pass to any situation.'], a: 'Open, externally paced → variable practice.' }
  ],
  pitfalls: ['Treating classifications as fixed categories — place skills on a continuum and justify.', 'Confusing skill (learned) with ability (inherited).', 'Confusing learning (relatively permanent) with performance (temporary).', 'Saying a “simple” skill is easy — simple means little information to process and few decisions.', 'Classifying a skill without linking to the practice method asked for.'],
  cards: [
    ['Skill (Knapp)?', 'The learned ability to bring about pre-determined results with maximum certainty, often with minimum outlay of time, energy or both.'], ['Ability?', 'An inherited, stable and enduring trait that underpins skill.'],
    ['Learning?', 'A relatively permanent change in performance due to practice/experience.'], ['Performance?', 'A temporary occurrence; fluctuates.'],
    ['Characteristics of skilled performance?', 'Learned, goal-directed, consistent, efficient, fluent, controlled, adaptable.'], ['Gross motor abilities?', 'Physical proficiency: strength, flexibility, stamina, speed.'],
    ['Psychomotor abilities?', 'Perceptual-motor: reaction time, co-ordination, dexterity, aiming.'], ['Open skill?', 'Performed in a changing, unpredictable environment.'], ['Closed skill?', 'Performed in a stable, predictable environment.'],
    ['Self-paced vs externally paced?', 'Performer controls timing vs environment/opponent controls timing.'], ['Low organisation?', 'Sub-routines easily separated (e.g. swimming stroke).'], ['High organisation?', 'Sub-routines closely linked (e.g. golf swing).'],
    ['Discrete, serial, continuous?', 'Clear start/end; linked discrete skills in order; no clear start/end.'], ['Fine vs gross?', 'Small muscle groups/precision vs large muscle groups.'], ['Practice for open skills?', 'Variable practice.']
  ],
  quiz: [
    { q: 'A tennis serve is best described as…', o: ['self-paced', 'externally paced', 'continuous', 'low organisation'], x: 'The server controls the timing.' },
    { q: 'A triple jump is a good example of a…', o: ['serial skill', 'continuous skill', 'fine skill', 'open skill'], x: 'Hop, step and jump linked in order.' },
    { q: 'Which skill is most open?', o: ['A tackle in rugby', 'A free throw', 'A gymnastics vault', 'A 100 m start'], x: 'Changing environment.' },
    { q: 'A golf swing is high in organisation because…', o: ['its sub-routines are closely linked and hard to separate', 'it involves many players', 'it is continuous', 'it is externally paced'], x: 'Hard to break down.' },
    { q: 'Reaction time is an example of a…', o: ['psychomotor ability', 'gross motor ability', 'skill', 'performance'], x: 'Perceptual-motor.' },
    { q: 'A relatively permanent change in performance due to practice is…', o: ['learning', 'performance', 'ability', 'transfer'], x: 'Definition of learning.' },
    { q: 'Variable practice is recommended for…', o: ['open skills', 'closed skills', 'discrete skills only', 'all beginners only'], x: 'Builds schema for changing situations.' },
    { q: 'A darts throw is…', o: ['fine', 'gross', 'open', 'continuous'], x: 'Small muscle groups, precision.' },
    { q: 'Which is an inherited, stable trait?', o: ['Ability', 'Skill', 'Technique', 'Learning'], x: 'Abilities are largely innate.' }
  ],
  exam: [
    { q: 'Define the term ability and explain how it differs from skill. [2]', m: 2, ms: ['ability: inherited / innate, stable, enduring trait that underpins skill', 'skill is learned (through practice) whereas ability is inherited'] },
    { q: 'State four characteristics of a skilled performance. [4]', m: 4, ms: ['consistent', 'efficient / minimal energy', 'fluent / aesthetically pleasing / co-ordinated', 'goal-directed / accurate / controlled / adaptable / learned'] },
    { q: 'Using a sporting example, classify a skill on the organisation and continuity continua and explain how this classification affects the choice of practice. [6]', m: 6, lv: true, ms: ['valid skill chosen, e.g. front crawl', 'organisation: low — arm, leg and breathing sub-routines can be separated', 'continuity: continuous — no clear start/end', 'low organisation suits part / progressive part practice (e.g. leg kick with float)', 'reduces information overload; parts then combined (whole–part–whole)', 'high organisation skills (e.g. golf swing) would need whole practice to keep kinaesthesis / flow; judgement'] }
  ],
  sims: ['classify'], gens: []
});

TOPICS.push({
  id: '1.14', unit: '1', area: 'skill', ref: 'Learning processes and variables', title: 'Learning curves, theories of learning and stages of learning', short: 'Learning curves and plateaus; DARMMM; reinforcement and drive reduction; Fitts and Posner',
  summary: 'How do people learn movement skills? Learn to read learning curves and explain plateaus, Bandura’s observational learning (DARMMM), reinforcement and punishment, drive reduction theory, and Fitts and Posner’s cognitive, associative and autonomous stages — with the coaching that suits each.',
  spec: [
    'Learning/performance curves: positive, negative, linear and plateau; causes of plateaus and how a coach may overcome them',
    'Observational learning: demonstration, attention, retention, motor reproduction, motivation, matching performance (DARMMM)',
    'Reinforcement: positive, negative and punishment; drive reduction theory',
    'Stages of learning (Fitts and Posner): cognitive, associative and autonomous',
    'Links between stages of learning, learning curves, reinforcement, methods of practice and guidance',
    'Understand and interpret graphical representations linked to skill acquisition theories'
  ],
  learn: [
    { h: 'Learning curves', html: `
[[d:curves]]
<p>A learning (performance) curve plots performance against trials or time.</p>
<ul><li><b>Linear</b> — performance improves in direct proportion to practice (rare; short periods).</li>
<li><b>Positive (positively accelerated)</b> — slow improvement at first, then rapid. Typical of a complex skill, a learner with low ability, or low early motivation.</li>
<li><b>Negative (negatively accelerated)</b> — rapid improvement at first, then slowing. Typical of a simple skill, a highly able or motivated learner, or the easy early gains of a new skill.</li>
<li><b>Plateau</b> — a period of no improvement, even though the performer is still practising.</li></ul>
<div class="tbl"><table><tr><th>Causes of a plateau</th><th>How a coach can overcome it</th></tr>
<tr><td>loss of motivation or boredom</td><td>vary the practice; new goals; rewards; competition</td></tr>
<tr><td>fatigue or overtraining</td><td>rest; distributed practice; recovery</td></tr>
<tr><td>reaching the limit of ability or fitness</td><td>fitness training; realistic goals</td></tr>
<tr><td>poor coaching or goals; task too complex</td><td>new coach/techniques; break into parts; clear feedback</td></tr>
<tr><td>moving between stages of learning (consolidating)</td><td>reassure; mental rehearsal; patience</td></tr>
<tr><td>drive reduction (skill learned, drive falls)</td><td>new challenge or sub-goal to renew drive</td></tr></table></div>` },
    { h: 'Observational learning (Bandura): DARMMM', html: `
[[d:darmmm]]
<ol><li><b>Demonstration</b> — by a competent, high-status, similar model; accurate; repeated.</li>
<li><b>Attention</b> — the learner must focus on the key points (cues); the model should be attractive and relevant; highlight 1–2 cues.</li>
<li><b>Retention</b> — the learner must remember the demonstration: repeat it, use mental rehearsal, keep it short and clear.</li>
<li><b>Motor reproduction</b> — the learner must be physically and mentally able to copy it — practise soon after; break it down if needed.</li>
<li><b>Motivation</b> — the learner must want to copy it: reinforcement, praise, a desirable model.</li>
<li><b>Matching performance</b> — the learner’s performance matches the model.</li></ol>` },
    { h: 'Reinforcement, punishment and drive reduction', html: `
<p>Operant conditioning shapes behaviour by strengthening the <b>stimulus–response (S–R) bond</b>.</p>
<div class="tbl"><table><tr><th>Type</th><th>What happens</th><th>Effect</th><th>Example</th></tr>
<tr><td><b>Positive reinforcement</b></td><td>a pleasant stimulus is given after a correct response</td><td>strengthens the S–R bond</td><td>praise after a good pass</td></tr>
<tr><td><b>Negative reinforcement</b></td><td>an unpleasant stimulus is removed when the correct response occurs</td><td>strengthens the S–R bond</td><td>the coach stops shouting once the player tracks back</td></tr>
<tr><td><b>Punishment</b></td><td>an unpleasant stimulus is given after an incorrect response</td><td>weakens/breaks the S–R bond</td><td>being substituted or sin-binned for a foul</td></tr></table></div>
<p>Beginners (cognitive stage) respond best to <b>positive reinforcement</b>; punishment should be used sparingly and can demotivate.</p>
<p><b>Drive reduction theory</b> (Hull): the learner has a <b>drive</b> (motivation) to learn a skill. Practice satisfies the drive; once the skill is learned the drive falls, practice becomes boring (inhibition), and a plateau follows. The coach must set <b>new goals</b> to renew drive and keep practice varied. Practice must be correctly reinforced so the correct habit is formed.</p>` },
    { h: 'Stages of learning (Fitts and Posner)', html: `
<div class="tbl"><table><tr><th></th><th>Cognitive</th><th>Associative</th><th>Autonomous</th></tr>
<tr><td>What happens</td><td>understanding the skill; trial and error; forming a mental picture</td><td>practising; linking sub-routines; comparing with the mental model; the longest stage</td><td>skill is automatic; performed without conscious thought; attention free for tactics</td></tr>
<tr><td>Performance</td><td>many errors; inconsistent; jerky</td><td>fewer and less serious errors; improving consistency</td><td>consistent, fluent, efficient; few errors</td></tr>
<tr><td>Feedback</td><td>extrinsic; knowledge of results; positive</td><td>kinaesthesis developing; intrinsic plus knowledge of performance</td><td>intrinsic; knowledge of performance; can use negative feedback</td></tr>
<tr><td>Guidance</td><td>visual (demonstrations), manual and mechanical</td><td>visual and verbal</td><td>verbal (detailed, technical)</td></tr>
<tr><td>Practice</td><td>part / progressive part; distributed; fixed</td><td>whole–part–whole; variable</td><td>variable; massed; mental rehearsal of tactics</td></tr>
<tr><td>Learning curve</td><td>slow start (positive curve) or rapid simple gains</td><td>steady improvement; plateaus common</td><td>curve levels off</td></tr></table></div>
<p>Performers in the autonomous stage must keep practising or they may drop back to the associative stage.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'A beginner netball shooter’s success rate rises slowly for six sessions, then rapidly, then levels off. Name and explain the shape of this curve up to the levelling off. (3 marks)', s: ['Slow improvement then rapid improvement = a <b>positive (positively accelerated)</b> curve.', 'Early on she is in the cognitive stage: shooting is a fine, complex skill, so she is still forming a mental picture and making many errors.', 'Once she understands the skill (associative stage) improvement speeds up; the levelling off is a plateau.'], a: 'Positive curve: slow start (cognitive stage), then rapid gains.' }
  ],
  pitfalls: ['Calling a plateau a decline — performance stays the same, it does not fall.', 'Confusing negative reinforcement with punishment — negative reinforcement removes something unpleasant to <i>strengthen</i> a response.', 'Listing DARMMM without applying it to the sporting example.', 'Saying performers in the autonomous stage need no feedback — they use intrinsic feedback and KP.', 'Describing stages without linking to guidance, feedback and practice.'],
  cards: [
    ['Positive learning curve?', 'Slow improvement at first, then rapid.'], ['Negative learning curve?', 'Rapid improvement at first, then slowing.'], ['Plateau?', 'A period of no improvement despite practice.'],
    ['Four causes of a plateau?', 'Boredom/loss of motivation, fatigue, limit of ability/fitness, poor coaching/goals, task complexity, drive reduction.'], ['DARMMM?', 'Demonstration, attention, retention, motor reproduction, motivation, matching performance.'],
    ['Positive reinforcement?', 'Giving a pleasant stimulus after a correct response to strengthen the S–R bond.'], ['Negative reinforcement?', 'Removing an unpleasant stimulus when the correct response occurs.'],
    ['Punishment?', 'Giving an unpleasant stimulus to weaken an incorrect response.'], ['Drive reduction theory?', 'Drive to learn falls once a skill is learned → boredom → plateau; new goals renew drive.'],
    ['Cognitive stage?', 'Understanding; many errors; needs demonstrations, extrinsic feedback, KR.'], ['Associative stage?', 'Practising; fewer errors; kinaesthesis develops; longest stage.'], ['Autonomous stage?', 'Automatic; consistent; attention free for tactics; intrinsic feedback.']
  ],
  quiz: [
    { q: 'A learning curve showing rapid early improvement that then slows is…', o: ['negative (negatively accelerated)', 'positive', 'linear', 'a plateau'], x: 'Quick early gains.' },
    { q: 'Which is a likely cause of a plateau?', o: ['Boredom from repetitive practice', 'Positive reinforcement', 'Good goal setting', 'Distributed practice'], x: 'Loss of drive/motivation.' },
    { q: 'In DARMMM, “retention” means…', o: ['the learner must remember the demonstration', 'the learner must be fit enough', 'the learner must want to copy it', 'the model must be high status'], x: 'Memory of the model.' },
    { q: 'A coach stops criticising once a player uses the correct technique. This is…', o: ['negative reinforcement', 'positive reinforcement', 'punishment', 'drive reduction'], x: 'Removing an unpleasant stimulus.' },
    { q: 'A player is sent to the sin bin for a professional foul. This is…', o: ['punishment', 'negative reinforcement', 'positive reinforcement', 'vicarious experience'], x: 'Unpleasant stimulus to weaken behaviour.' },
    { q: 'Which stage of learning is usually the longest?', o: ['Associative', 'Cognitive', 'Autonomous', 'Reproduction'], x: 'Practising and refining.' },
    { q: 'A performer who can concentrate on tactics while dribbling is in the…', o: ['autonomous stage', 'cognitive stage', 'associative stage', 'plateau'], x: 'Skill is automatic.' },
    { q: 'Manual and mechanical guidance are most useful in the…', o: ['cognitive stage', 'autonomous stage', 'associative stage only', 'none'], x: 'Beginners need support and a feel for the movement.' }
  ],
  exam: [
    { q: 'Describe the characteristics of a performer in the cognitive stage of learning. [3]', m: 3, ms: ['trying to understand the skill / forming a mental picture', 'many errors / inconsistent / jerky', 'relies on extrinsic feedback / demonstrations / needs positive reinforcement / trial and error'] },
    { q: 'A coach uses demonstrations to teach a group of young basketball players a lay-up.', parts: [
      { q: 'Explain how the coach should use Bandura’s model of observational learning to make the demonstration effective. [5]', m: 5, ms: ['demonstration: accurate, by a high-status / similar model, repeated', 'attention: highlight key cues (e.g. step–step–jump), limit information', 'retention: repeat; mental rehearsal; simple', 'motor reproduction: practise soon after; within capability / break down', 'motivation: praise / reinforcement / relevant model → matching performance'] },
      { q: 'Explain two ways the coach could overcome a plateau in the group’s performance. [4]', m: 4, ms: ['identify cause, e.g. boredom → vary practice / add competition', 'set new goals / sub-goals to renew drive (drive reduction)', 'fatigue → rest / distributed practice', 'new technique / feedback / break skill into parts / rewards'] }
    ] },
    { q: 'Discuss how a coach should adapt guidance, feedback and practice as a performer moves through the three stages of learning. [8]', m: 8, lv: true, ms: ['cognitive: visual guidance (demonstrations), manual/mechanical for safety and feel', 'cognitive: extrinsic feedback, KR, positive reinforcement; part/fixed/distributed practice', 'associative: visual and verbal guidance; KP; kinaesthesis developing', 'associative: whole–part–whole; variable practice; plateaus likely — renew drive', 'autonomous: detailed verbal guidance; intrinsic feedback and KP; negative feedback acceptable', 'autonomous: variable/massed practice; mental rehearsal of tactics; must practise to avoid regression', 'links to learning curves: positive or negative curves early; levelling off later', 'judgement: guidance should reduce as dependence risks rise; tailor to the individual'], tag: 'ext' }
  ],
  sims: ['curves'], gens: []
});

TOPICS.push({
  id: '1.15', unit: '1', area: 'skill', ref: 'Learning processes and variables', title: 'Transfer, practice, guidance and feedback', short: 'Types of transfer; whole/part, variable/fixed, massed/distributed, mental rehearsal; guidance; feedback',
  summary: 'How a coach organises learning matters as much as what is taught. Learn the five types of transfer, the methods of practice and when to use each, mental rehearsal, visual, verbal, manual and mechanical guidance, and the types and characteristics of effective feedback.',
  spec: [
    'Transfer of learning: positive/negative, proactive/retroactive, bilateral',
    'Methods of practice: whole/part/progressive part; variable/fixed; massed/distributed; mental rehearsal and practice — advantages, disadvantages and application',
    'Methods of guidance: visual, verbal, manual and mechanical — advantages, disadvantages and when to use them',
    'Types of feedback: intrinsic, extrinsic, knowledge of results, knowledge of performance',
    'How feedback motivates, reinforces and informs; characteristics of effective feedback'
  ],
  learn: [
    { h: 'Transfer of learning', html: `
<div class="tbl"><table><tr><th>Type</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>Positive</b></td><td>learning one skill helps the learning of another</td><td>an overarm throw helps the javelin throw</td></tr>
<tr><td><b>Negative</b></td><td>learning one skill hinders another</td><td>a badminton player’s wristy shot spoils a tennis forehand</td></tr>
<tr><td><b>Proactive</b></td><td>a skill learned earlier affects one learned later</td><td>earlier rounders batting affects later cricket batting</td></tr>
<tr><td><b>Retroactive</b></td><td>learning a new skill affects a skill learned earlier</td><td>learning squash affects an established tennis stroke</td></tr>
<tr><td><b>Bilateral</b></td><td>transfer from one limb to the other</td><td>learning to dribble with the left hand after the right</td></tr></table></div>
<p>To <b>maximise positive transfer</b>: make practice realistic (similar to the game); ensure the first skill is well learned; point out similarities; use progressive practices; reinforce. To <b>avoid negative transfer</b>: point out differences; separate practice of similar-but-different skills.</p>` },
    { h: 'Methods of practice', html: `
<div class="tbl"><table><tr><th>Method</th><th>What it is</th><th>Advantages</th><th>Disadvantages</th><th>Best for</th></tr>
<tr><td><b>Whole</b></td><td>the skill practised in full</td><td>keeps flow and kinaesthesis; realistic; time-efficient</td><td>information overload for beginners; may be unsafe</td><td>high organisation, simple, discrete skills; autonomous performers</td></tr>
<tr><td><b>Part</b></td><td>sub-routines practised separately</td><td>reduces overload; builds confidence; safe; focus on weak parts</td><td>loses flow and kinaesthesis; poor transfer back to the whole; time-consuming</td><td>low organisation, complex, serial skills; beginners</td></tr>
<tr><td><b>Progressive part</b> (chaining)</td><td>part 1, then parts 1+2, then 1+2+3…</td><td>links sub-routines gradually; keeps some flow</td><td>time-consuming</td><td>serial skills (triple jump, a gymnastics routine)</td></tr>
<tr><td><b>Variable</b></td><td>practice in changing situations</td><td>builds adaptable schema; realistic; motivating</td><td>can overload beginners</td><td>open skills</td></tr>
<tr><td><b>Fixed</b></td><td>repetition in the same conditions (a drill)</td><td>grooves a consistent motor programme</td><td>boring; not realistic for open skills</td><td>closed skills</td></tr>
<tr><td><b>Massed</b></td><td>little or no rest between practice</td><td>grooves habits; mimics fatigue of the game</td><td>fatigue, boredom, risk of injury</td><td>simple, discrete skills; fit, motivated, experienced performers</td></tr>
<tr><td><b>Distributed</b></td><td>practice with rest intervals</td><td>time for feedback and mental rehearsal; reduces fatigue</td><td>takes longer; may lose momentum</td><td>beginners, complex or dangerous skills, low fitness</td></tr></table></div>` },
    { h: 'Mental rehearsal and mental practice', html: `
<p><b>Mental rehearsal</b> is going over a skill in the mind without physical movement. Benefits: builds a mental picture in the cognitive stage; strengthens the motor programme (small nerve impulses fire in the muscles); lets the performer rehearse tactics and responses in the autonomous stage; improves reaction time and concentration; controls arousal and anxiety; can be used during rest in distributed practice or when injured. It is most effective combined with physical practice.</p>` },
    { h: 'Guidance', html: `
<div class="tbl"><table><tr><th>Type</th><th>How</th><th>Advantages</th><th>Disadvantages</th><th>When</th></tr>
<tr><td><b>Visual</b></td><td>demonstrations, video, posters, cues (targets, cones)</td><td>builds a mental picture quickly; highlights key points</td><td>must be accurate; too much detail overloads; model may be too advanced</td><td>cognitive stage (and all stages)</td></tr>
<tr><td><b>Verbal</b></td><td>instructions and explanations</td><td>can give detailed technical and tactical points; used during performance</td><td>too much talking overloads beginners; hard to describe movements; depends on understanding</td><td>associative and autonomous stages</td></tr>
<tr><td><b>Manual</b></td><td>the coach physically moves or supports the performer</td><td>safety; builds confidence; gives a feel of the movement</td><td>incorrect kinaesthesis; dependence; physical contact issues</td><td>cognitive stage; dangerous skills (a somersault support)</td></tr>
<tr><td><b>Mechanical</b></td><td>an aid: harness, float, twisting belt, arm bands</td><td>safety for dangerous skills; confidence</td><td>dependence; the movement feels different without the aid</td><td>cognitive stage; complex or dangerous skills</td></tr></table></div>` },
    { h: 'Feedback', html: `
<ul><li><b>Intrinsic</b> — from within: kinaesthesis via proprioceptors (“it felt right”). Used most by autonomous performers.</li>
<li><b>Extrinsic</b> — from outside: coach, teammates, video, scoreboard. Essential for beginners.</li>
<li><b>Knowledge of results (KR)</b> — about the outcome (the ball went in; 12.4 s). Useful at all stages, especially the cognitive stage.</li>
<li><b>Knowledge of performance (KP)</b> — about the quality of the movement (“your elbow dropped”). Most useful in the associative and autonomous stages.</li></ul>
<p>Feedback can also be positive (what was good) or negative (what was wrong), and terminal (after) or concurrent (during).</p>
<p><b>Feedback motivates</b> (encourages effort), <b>reinforces</b> (strengthens correct S–R bonds) and <b>informs</b> (tells the performer what to change). <b>Effective feedback</b> is: immediate; accurate; specific and clear; limited in amount (1–2 points); appropriate to the stage of learning; positive with constructive criticism; understood; linked to goals.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Justify the use of manual and mechanical guidance for a beginner learning a backward somersault on a trampoline. (4 marks)', s: ['The skill is dangerous and complex, and the performer is in the cognitive stage.', '<b>Mechanical guidance</b> (a harness/twisting belt) keeps the performer safe and lets them attempt the full movement.', '<b>Manual guidance</b> (a coach supporting the back) builds confidence and gives a feel (kinaesthesis) of the rotation.', 'Both should be reduced as soon as possible to avoid dependence and incorrect kinaesthesis.'], a: 'Safety, confidence and feel for a dangerous skill; withdraw to prevent dependence.' }
  ],
  pitfalls: ['Mixing up proactive (earlier affects later) and retroactive (later affects earlier) transfer.', 'Confusing KR (outcome) and KP (quality of movement).', 'Recommending massed practice for beginners or dangerous skills.', 'Saying verbal guidance is best for beginners — too much talking overloads them.', 'Listing “characteristics of effective feedback” without applying them to the example.'],
  cards: [
    ['Positive transfer?', 'One skill helps the learning of another.'], ['Negative transfer?', 'One skill hinders the learning of another.'], ['Proactive transfer?', 'An earlier skill affects a later one.'], ['Retroactive transfer?', 'A later skill affects an earlier one.'], ['Bilateral transfer?', 'Transfer from one limb to the other.'],
    ['Progressive part practice?', 'Chaining: part 1, then 1+2, then 1+2+3…'], ['Variable practice?', 'Practice in changing situations — for open skills.'], ['Massed practice?', 'Little or no rest — experienced, fit performers; simple skills.'],
    ['Distributed practice?', 'Practice with rest intervals — beginners, complex/dangerous skills.'], ['Mental rehearsal?', 'Going over a skill in the mind without movement.'],
    ['Four types of guidance?', 'Visual, verbal, manual, mechanical.'], ['Intrinsic feedback?', 'From within — kinaesthesis.'], ['Extrinsic feedback?', 'From an outside source — coach, video.'], ['KR?', 'Knowledge of results: the outcome.'], ['KP?', 'Knowledge of performance: the quality of the movement.'],
    ['Three purposes of feedback?', 'To motivate, reinforce and inform.']
  ],
  quiz: [
    { q: 'A footballer who learns to kick with the left foot after the right shows…', o: ['bilateral transfer', 'proactive transfer', 'negative transfer', 'retroactive transfer'], x: 'Limb to limb.' },
    { q: 'Learning squash spoils a player’s established tennis forehand. This is…', o: ['negative retroactive transfer', 'positive proactive transfer', 'bilateral transfer', 'zero transfer'], x: 'The new skill harms the old one.' },
    { q: 'Which practice suits a beginner learning a complex, dangerous skill?', o: ['Distributed', 'Massed', 'Whole with no breaks', 'Variable from the start'], x: 'Rest, feedback and safety.' },
    { q: 'Progressive part practice is best for…', o: ['serial skills', 'continuous skills', 'high-organisation skills', 'open skills'], x: 'Chaining linked sub-routines.' },
    { q: '“Your follow-through was too short” is…', o: ['knowledge of performance', 'knowledge of results', 'intrinsic feedback', 'negative reinforcement'], x: 'About movement quality.' },
    { q: 'A float in swimming is…', o: ['mechanical guidance', 'manual guidance', 'visual guidance', 'verbal guidance'], x: 'An aid.' },
    { q: 'A disadvantage of manual guidance is…', o: ['the performer may become dependent on it', 'it cannot be used for dangerous skills', 'it overloads with words', 'it gives no feel'], x: 'And incorrect kinaesthesis.' },
    { q: 'Which is a characteristic of effective feedback?', o: ['It is limited to one or two key points', 'It is delayed as long as possible', 'It covers every error at once', 'It is always negative'], x: 'Avoid overload.' },
    { q: 'Intrinsic feedback is mainly used by…', o: ['autonomous performers', 'cognitive performers', 'coaches', 'spectators'], x: 'They can feel what is right.' }
  ],
  exam: [
    { q: 'Using examples, explain the difference between proactive and retroactive transfer. [4]', m: 4, ms: ['proactive: a previously learned skill affects the learning of a new skill', 'e.g. overarm throw helps later javelin learning', 'retroactive: learning a new skill affects a previously learned skill', 'e.g. learning badminton affects an existing tennis stroke'] },
    { q: 'State three characteristics of effective feedback. [3]', m: 3, ms: ['immediate', 'accurate / specific / clear', 'limited amount / not overloading', 'appropriate to stage / positive with constructive criticism / understood'] },
    { q: 'A coach is teaching a group of beginners to swim breaststroke.', parts: [
      { q: 'Justify the use of part practice for this skill. [3]', m: 3, ms: ['breaststroke is low organisation — arm, leg, breathing sub-routines easily separated', 'complex for beginners — reduces information overload', 'allows focus on the leg kick (with a float) / safe / builds confidence'] },
      { q: 'Evaluate the use of visual and verbal guidance for these beginners. [6]', m: 6, lv: true, ms: ['visual: demonstrations / video build a mental picture — ideal in the cognitive stage', 'must be accurate, from a suitable model, highlighting key cues', 'visual can be at the poolside or underwater video; posters of key positions', 'verbal: explanations of key points and safety', 'but too much verbal overloads beginners; hard to describe movements; noise in pools', 'judgement: mainly visual supported by brief verbal cues; more verbal as they progress'] }
    ] }
  ],
  sims: ['practice'], gens: []
});

TOPICS.push({
  id: '1.16', unit: '1', area: 'soc', ref: 'Sport, culture and society', title: 'Sport, culture and society', short: 'Culture, society, social institutions; social control, socialisation, national identity; government use',
  summary: 'Sport is part of the fabric of society. Learn what culture, society and social institutions are, how sport acts as a means of social control, a social institution, a mechanism of socialisation and a form of national identity, the values it promotes, and why governments invest in it — with Welsh examples.',
  spec: [
    'Definitions of culture, society and social institution',
    'The role of sport within society: a means of social control; a social institution; a mechanism of socialisation; a form of national identity',
    'Sport as a vehicle for promoting societal and cultural values: respect for authority, conforming to rules and regulations, importance of competition',
    'The use that governments make of sport'
  ],
  learn: [
    { h: 'Key definitions', html: `
<div class="tbl"><table><tr><th>Term</th><th>Meaning</th></tr>
<tr><td><b>Culture</b></td><td>the shared values, beliefs, customs, traditions, language and behaviour of a group of people, passed on from generation to generation</td></tr>
<tr><td><b>Society</b></td><td>a large group of people who live together in an organised community with shared laws, institutions and relationships</td></tr>
<tr><td><b>Social institution</b></td><td>an established, organised structure that shapes how people behave and passes on norms and values — e.g. family, education, religion, the media, government, and sport</td></tr></table></div>` },
    { h: 'The roles of sport in society', html: `
<div class="tbl"><table><tr><th>Role</th><th>Meaning</th><th>Examples</th></tr>
<tr><td><b>Social control</b></td><td>sport channels energy and aggression into acceptable, rule-governed activity, keeps people occupied and reduces anti-social behaviour</td><td>19th-century public schools used games to control unruly boys; factory owners provided works teams; modern late-night sports schemes and Street Games projects in deprived areas</td></tr>
<tr><td><b>Social institution</b></td><td>sport is organised, has rules, officials, governing bodies and traditions, and transmits values like other institutions</td><td>the WRU, Sport Wales, school PE, professional leagues</td></tr>
<tr><td><b>Socialisation</b></td><td>the process of learning the norms, values and behaviour of society; sport is a mechanism of <b>secondary socialisation</b> (after the family)</td><td>learning teamwork, fair play, discipline, respect for officials, dealing with winning and losing, gender roles</td></tr>
<tr><td><b>National identity</b></td><td>sport creates a sense of belonging and pride in the nation and shows the nation to the world</td><td>Wales rugby and the anthem “Hen Wlad Fy Nhadau” at the Principality Stadium; Wales at Euro 2016 and the 2022 World Cup; separate Welsh teams at the Commonwealth Games</td></tr></table></div>` },
    { h: 'Values promoted through sport', html: `
<ul><li><b>Respect for authority</b> — accepting the decisions of referees, umpires, coaches and captains.</li>
<li><b>Conforming to rules and regulations</b> — playing within the written rules and the unwritten etiquette (fair play).</li>
<li><b>The importance of competition</b> — striving to win, effort, reward for merit; reflects a capitalist society.</li>
<li>Also: teamwork and co-operation, discipline, hard work, loyalty, leadership, sportsmanship, equality of opportunity.</li></ul>
<p>Sport can also transmit negative values: win-at-all-costs, cheating, discrimination, violence.</p>` },
    { h: 'How governments use sport', html: `
<div class="tbl"><table><tr><th>Reason</th><th>Example</th></tr>
<tr><td>Health — reduce obesity and inactivity and NHS costs</td><td>Welsh Government and Sport Wales campaigns to get “every child hooked on sport”; daily PE; community sport</td></tr>
<tr><td>Social cohesion and integration</td><td>community projects bringing groups together; inclusion programmes</td></tr>
<tr><td>Reducing crime and anti-social behaviour</td><td>diversionary schemes for young people (social control)</td></tr>
<tr><td>National identity and prestige (“soft power”)</td><td>funding elite sport for medals; hosting events (Ryder Cup 2010 at Celtic Manor, 2017 Champions League final in Cardiff)</td></tr>
<tr><td>Economic benefits</td><td>tourism, jobs and regeneration from events and facilities</td></tr>
<tr><td>Political ideology and propaganda</td><td>showing the success of a political system (see 1.17)</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain how sport acts as a mechanism of socialisation for young people. (3 marks)', s: ['Socialisation is learning the norms and values of society.', 'Through sport, young people learn values such as teamwork, fair play, discipline and respect for authority (the referee).', 'They learn from significant others — coaches and teammates — and carry these values into adult life (secondary socialisation).'], a: 'Sport teaches norms and values through coaches and peers.' }
  ],
  pitfalls: ['Defining culture and society as the same thing.', 'Writing “sport keeps people fit” for social control — explain channelling energy and reducing anti-social behaviour.', 'Giving no example: examiners reward specific, preferably Welsh, examples.', 'Forgetting that sport can transmit negative values.'],
  cards: [
    ['Culture?', 'Shared values, beliefs, customs and traditions of a group, passed between generations.'], ['Society?', 'A large group living in an organised community with shared laws and institutions.'], ['Social institution?', 'An established structure (family, education, religion, media, sport) that shapes behaviour and transmits values.'],
    ['Sport as social control?', 'Channels energy/aggression into rule-governed activity; reduces anti-social behaviour.'], ['Socialisation?', 'Learning the norms and values of society; sport is secondary socialisation.'],
    ['Sport and national identity?', 'Creates belonging and national pride, e.g. Wales rugby and the anthem.'], ['Three values sport promotes?', 'Respect for authority, conforming to rules, importance of competition.'],
    ['Five reasons governments use sport?', 'Health, social cohesion, crime reduction, national prestige, economic benefit (and propaganda).']
  ],
  quiz: [
    { q: 'Learning to accept the referee’s decision through sport is an example of…', o: ['socialisation', 'globalisation', 'commercialisation', 'stacking'], x: 'Learning the norms of society.' },
    { q: 'A late-night basketball scheme to reduce youth crime uses sport as…', o: ['social control', 'national identity', 'commercialisation', 'a golden triangle'], x: 'Channels energy into acceptable activity.' },
    { q: 'Singing the Welsh national anthem before a rugby international reflects…', o: ['national identity', 'social stratification', 'deviance', 'americanisation'], x: 'Pride and belonging.' },
    { q: 'Which is a social institution?', o: ['Education', 'An individual athlete', 'A training session', 'A heart rate'], x: 'An established structure that transmits values.' },
    { q: 'Governments fund elite sport partly to…', o: ['raise national prestige through medals', 'reduce taxes', 'increase deviance', 'stop grassroots sport'], x: 'Soft power and national pride.' },
    { q: 'The shared values and customs of a group passed between generations are its…', o: ['culture', 'society', 'institution', 'stratification'], x: 'Definition of culture.' }
  ],
  exam: [
    { q: 'Define the term social institution and give one example other than sport. [2]', m: 2, ms: ['an established / organised structure in society that shapes behaviour and transmits norms and values', 'e.g. family / education / religion / media / government / the law'] },
    { q: 'Explain how sport can be used as a form of national identity. [3]', m: 3, ms: ['national teams represent the nation / create belonging and pride', 'symbols: anthems, flags, colours, e.g. Wales rugby / football', 'success raises the nation’s profile / unites people across divisions'] },
    { q: 'Discuss the roles that sport plays within society. [8]', m: 8, lv: true, ms: ['social control: channels energy; historically public schools and works teams; diversionary schemes', 'social institution: organised with rules, governing bodies, traditions', 'socialisation: teaches norms/values — teamwork, fair play, respect for authority', 'national identity: Wales rugby, anthem, Euro 2016 — unites the nation', 'promotes values: conformity to rules, competition, discipline', 'government uses: health, cohesion, prestige, economy', 'negative roles: violence, deviance, discrimination, excessive nationalism', 'judgement: sport reflects and reinforces society’s values, positive and negative'], tag: 'ext' }
  ],
  sims: ['socroles'], gens: []
});

TOPICS.push({
  id: '1.17', unit: '1', area: 'soc', ref: 'Emergence of modern sport', title: 'Emergence of modern sport', short: 'Public schools and Arnold; codification; amateurism to commercialisation; Olympism; sport and politics',
  summary: 'Modern sport was shaped in the 19th-century English public schools and universities, then spread across the world. Learn the three stages of development and Thomas Arnold’s influence, codification and rationalisation, the move from amateurism to professionalism and commercialisation (cricket, the rugby split and the broken-time debate, the modern Olympics), shamateurism, and the use of sport as a political tool.',
  spec: [
    'The role of the 19th-century English public school and university system (three stages of development) in the codification and rationalisation of modern sport',
    'The influence of Thomas Arnold of Rugby School; sport as social control and for building character and moral integrity; how sports spread throughout the world',
    'The movement from amateurism to professionalism to commercialisation; spectatorism and gate money',
    'Developments in cricket, rugby (league and union divide; the broken-time debate) and the modern Olympic Games',
    'Amateurism and Olympism; issues of shamateurism; how professionalism has affected sporting ethics',
    'Sport as a political tool: boycotts, protests, diplomacy and promotion of national identity, e.g. the Black Power salute, Mexico 1968'
  ],
  learn: [
    { h: 'The public schools: three stages of development', html: `
[[d:stages]]
<div class="tbl"><table><tr><th>Stage</th><th>Period (approx.)</th><th>Characteristics</th></tr>
<tr><td><b>1. Boy culture, bullying and brutality</b></td><td>to about 1828</td><td>boys brought mob games and activities from their home villages; games were violent, unorganised, with few rules; gambling, poaching, fighting, rebellion; masters had little control; the “fagging” system</td></tr>
<tr><td><b>2. Dr Thomas Arnold and social control</b></td><td>about 1828–1842 (Arnold at Rugby School)</td><td>reform: games used to <b>control</b> the boys and channel their energy; sixth-form prefects given responsibility; games became more regular and organised with house matches; schools began to write rules (Rugby School’s first written rules, 1845); <b>Muscular Christianity</b> — linking physical endeavour with Christian morality; developing “Christian gentlemen”</td></tr>
<tr><td><b>3. The cult of athleticism</b></td><td>about 1842–1914</td><td>games compulsory and central to school life; inter-school fixtures, colours, facilities, professional coaches; <b>athleticism</b> = physical endeavour combined with moral integrity; games built <b>character</b>: leadership, loyalty, courage, teamwork, self-discipline, fair play</td></tr></table></div>` },
    { h: 'Codification, rationalisation and the spread of sport', html: `
<p>Old boys from different schools met at <b>Oxford and Cambridge</b>. To play together they needed common rules, so they <b>codified</b> sports (e.g. the Cambridge Rules of football, 1848). Graduates then formed <b>national governing bodies</b>: the Football Association (1863), the Rugby Football Union (1871), and the Welsh Rugby Union (1881).</p>
<p><b>Rationalisation</b> is the process by which sport became organised, regulated and rule-based: written rules, governing bodies, fixed pitches and times, officials, leagues and national competitions. It was helped by the industrial revolution: urbanisation, railways (travel to fixtures), the Saturday half-day, improved literacy and newspapers.</p>
<p><b>Spread</b>: public-school and university graduates became teachers, clergy, army officers, factory owners and colonial administrators, and took games to the working classes and across the <b>British Empire</b> (cricket to India, Australia and the West Indies; rugby to New Zealand and South Africa; football via traders, sailors and engineers).</p>` },
    { h: 'Amateurism, professionalism and commercialisation', html: `
<p>The <b>amateur ideal</b>: play for the love of the game, not money; fair play and sportsmanship; taking part matters more than winning. It suited the upper and middle classes who had time and money. The working classes could not afford to lose wages to play.</p>
<p><b>Spectatorism and gate money:</b> urban workers with free Saturday afternoons and railway travel paid to watch; clubs enclosed grounds and charged admission; this revenue let clubs pay players, so professionalism grew (football legalised professionalism in 1885).</p>
<div class="tbl"><table><tr><th>Sport</th><th>Development</th></tr>
<tr><td><b>Cricket</b></td><td>amateurs (“<b>Gentlemen</b>”) and professionals (“<b>Players</b>”) played in the same teams but had separate changing rooms and entrances, and amateurs were captains; the annual Gentlemen v Players match. The distinction was abolished in 1962 (from the 1963 season).</td></tr>
<tr><td><b>Rugby</b></td><td>northern clubs with working-class players wanted <b>broken-time payments</b> — compensation for wages lost when players missed Saturday work. The RFU refused. In <b>1895</b>, 22 northern clubs formed the <b>Northern Union</b> (Rugby League from 1922), which allowed payments and later changed rules (13 players, the play-the-ball) to be more attractive to spectators. Rugby union stayed amateur until it went “open” in <b>1995</b>.</td></tr>
<tr><td><b>Modern Olympics</b></td><td>Baron <b>Pierre de Coubertin</b>, inspired by Arnold’s Rugby School and William Penny Brookes’s Wenlock Olympian Games, founded the IOC in 1894; the first modern Games were in Athens in 1896. Originally strictly amateur (Jim Thorpe was stripped of his 1912 medals for having been paid for baseball); professionals were gradually admitted from the 1980s.</td></tr></table></div>
<p><b>Olympism</b> — a philosophy of life that blends sport with culture and education, seeking the joy of effort, the educational value of good example, and respect for universal ethical principles (the Olympic Charter).</p>
<p><b>Shamateurism</b> — athletes who were officially amateur but received illegal payments: “boot money”, inflated expenses (W. G. Grace), trust funds, and Eastern bloc “state amateurs” employed as soldiers or students but training full time.</p>
<p><b>Commercialisation</b> — sport becomes a commodity bought and sold, driven by TV rights, sponsorship and advertising (see 3.21). <b>Effects on ethics</b>: high rewards increase pressure to win at all costs → gamesmanship, cheating and doping; less emphasis on fair play; but also higher standards and opportunities.</p>` },
    { h: 'Sport as a political tool', html: `
<p>Governments and individuals use sport’s global audience to promote ideologies, national identity and causes.</p>
<div class="tbl"><table><tr><th>Use</th><th>Examples</th></tr>
<tr><td><b>Propaganda / promoting a political system</b></td><td>Berlin 1936 (Nazi ideology); Cold War medal tables between the USA and USSR/East Germany</td></tr>
<tr><td><b>Boycotts</b></td><td>Montreal 1976 (African nations over New Zealand’s rugby tour of apartheid South Africa); Moscow 1980 (US-led, over the Soviet invasion of Afghanistan); Los Angeles 1984 (Soviet bloc retaliation); sporting isolation of apartheid South Africa (Gleneagles Agreement, 1977)</td></tr>
<tr><td><b>Protests</b></td><td>Mexico City 1968 — <b>Tommie Smith and John Carlos</b> raised black-gloved fists (the Black Power salute) on the 200 m podium to protest against racial injustice in the USA; Peter Norman wore a human-rights badge in support. Later: taking the knee (Colin Kaepernick, 2016)</td></tr>
<tr><td><b>Diplomacy</b></td><td>“ping-pong diplomacy” between the USA and China (1971); joint Korean team entry at events</td></tr>
<tr><td><b>National identity and prestige</b></td><td>hosting mega-events; state investment in medals</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain the reasons for the split between rugby union and rugby league in 1895. (4 marks)', s: ['Northern clubs had many working-class players who could not afford to miss Saturday work to play.', 'They wanted <b>broken-time payments</b> to compensate for lost wages.', 'The RFU, controlled by southern middle-class amateurs, refused, seeing payment as against the amateur ideal.', 'So the northern clubs broke away to form the <b>Northern Union</b> (later Rugby League), which allowed payments and adapted rules to attract spectators and gate money.'], a: 'Class, the amateur ideal and broken-time payments.' }
  ],
  pitfalls: ['Confusing the stages — Arnold is stage 2 (social control), athleticism is stage 3.', 'Saying Thomas Arnold invented rugby — he reformed Rugby School and used games for social control and character.', 'Writing “the rugby split was about rules” — it was about broken-time payments and class.', 'Describing the 1968 salute without explaining its political purpose.', 'Confusing shamateurism with professionalism.'],
  cards: [
    ['Stage 1 of public school development?', 'Boy culture, bullying and brutality — unorganised, violent mob games.'], ['Stage 2?', 'Thomas Arnold and social control — reform, prefects, organised games, Muscular Christianity.'], ['Stage 3?', 'Cult of athleticism — compulsory games, fixtures, character building.'],
    ['Athleticism?', 'Physical endeavour combined with moral integrity.'], ['Muscular Christianity?', 'Linking sport and physical strength with Christian morality.'], ['Codification?', 'Writing down rules so sports are played the same way everywhere.'],
    ['Rationalisation?', 'Sport becoming organised, rule-based and regulated (NGBs, leagues, officials).'], ['Gentlemen and Players?', 'Cricket’s amateurs and professionals; distinction abolished 1962.'], ['Broken-time payments?', 'Compensation for wages lost by working-class rugby players; refused by the RFU → 1895 split.'],
    ['When did rugby union turn professional?', '1995.'], ['Founder of the modern Olympics?', 'Pierre de Coubertin (IOC 1894, Athens 1896).'], ['Olympism?', 'A philosophy blending sport with culture and education; joy of effort, good example, ethical principles.'],
    ['Shamateurism?', 'Officially amateur athletes receiving illegal payments.'], ['Mexico 1968?', 'Tommie Smith and John Carlos gave the Black Power salute to protest racial injustice.'], ['Moscow 1980 boycott?', 'US-led boycott over the Soviet invasion of Afghanistan.']
  ],
  quiz: [
    { q: 'Thomas Arnold was headmaster of…', o: ['Rugby School', 'Eton', 'Harrow', 'Cambridge University'], x: '1828–1842.' },
    { q: 'The cult of athleticism belongs to which stage?', o: ['Stage 3', 'Stage 1', 'Stage 2', 'Before stage 1'], x: 'Compulsory games and character building.' },
    { q: 'Broken-time payments were…', o: ['compensation for wages lost playing rugby', 'bonuses for winning', 'illegal Olympic payments', 'TV rights fees'], x: 'The cause of the 1895 split.' },
    { q: 'Rugby union became professional in…', o: ['1995', '1895', '1963', '1922'], x: 'It went “open” in 1995.' },
    { q: 'Who founded the modern Olympic Games?', o: ['Pierre de Coubertin', 'Thomas Arnold', 'W. G. Grace', 'William Webb Ellis'], x: 'IOC 1894.' },
    { q: 'An Eastern bloc soldier who trained full time while classed as amateur is an example of…', o: ['shamateurism', 'Olympism', 'athleticism', 'codification'], x: 'Amateur in name only.' },
    { q: 'The Black Power salute took place at the…', o: ['1968 Mexico City Olympics', '1936 Berlin Olympics', '1980 Moscow Olympics', '2012 London Olympics'], x: 'Tommie Smith and John Carlos.' },
    { q: 'Which factor helped the growth of spectator sport?', o: ['The Saturday half-day and railways', 'The decline of cities', 'Banning gate money', 'The amateur ideal'], x: 'Free time and travel.' },
    { q: 'University graduates helped spread sport mainly by…', o: ['becoming teachers, clergy, officers and administrators', 'refusing to play', 'banning working-class sport', 'selling TV rights'], x: 'They took games into society and the Empire.' }
  ],
  exam: [
    { q: 'Explain the term shamateurism, giving an example. [2]', m: 2, ms: ['athletes officially amateur but receiving illegal payments / being paid while claiming amateur status', 'e.g. boot money / inflated expenses (W. G. Grace) / Eastern bloc state amateurs / trust funds'] },
    { q: 'Describe the role of Thomas Arnold in the development of games in 19th-century public schools. [4]', m: 4, ms: ['headmaster of Rugby School (1828–42) — reformed the school', 'used games as social control — to channel boys’ energy and reduce disorder', 'gave responsibility to sixth-form prefects / organised house games', 'games to build character / moral integrity / Muscular Christianity — Christian gentlemen'] },
    { q: 'Using examples, explain how sport has been used as a political tool. [6]', m: 6, lv: true, ms: ['propaganda: Berlin 1936 / Cold War medal tables', 'boycotts: Moscow 1980 over Afghanistan / Montreal 1976 / LA 1984', 'protest: Mexico 1968 Black Power salute — racial injustice in the USA', 'diplomacy: ping-pong diplomacy USA–China 1971', 'sporting isolation of apartheid South Africa / Gleneagles Agreement', 'national identity/prestige through hosting and medals; reasons: global audience, symbolic power'] },
    { q: 'Discuss how the move from amateurism to professionalism and commercialisation has affected modern sport. [8]', m: 8, lv: true, ms: ['amateur ideal: play for love, fair play — upper/middle-class ethos', 'gate money and spectatorism allowed payment of working-class players', 'rugby split 1895 / Gentlemen v Players in cricket show class tensions', 'professionalism raised standards, allowed full-time training / social mobility', 'commercialisation: TV, sponsorship — more money, global audiences', 'negative: win at all costs, gamesmanship, doping, deviance; ethics eroded', 'rule changes and scheduling to suit media / spectators', 'judgement: positive for standards and access, but challenges to Olympism and fair play'], tag: 'ext' }
  ],
  sims: ['timeline'], gens: []
});

TOPICS.push({
  id: '1.18', unit: '1', area: 'soc', ref: 'Social differentiation within sport', title: 'Social differentiation within sport', short: 'Stratification; prejudice, stereotyping, discrimination; barriers; stacking; strategies',
  summary: 'Not everyone has the same chance to take part or succeed in sport. Learn social stratification, prejudice, stereotyping and discrimination towards ethnic minorities, women, disabled and socially deprived people, barriers of opportunity, provision and esteem, the self-fulfilling prophecy, centrality and racial stacking, social mobility, and the strategies used to widen participation.',
  spec: [
    'Definition of social stratification and its application to sport',
    'Prejudice, stereotyping and discrimination towards ethnic minorities, women, disabled and socially deprived people',
    'Barriers to participation: opportunity, provision and esteem for disadvantaged groups',
    'Economic and socio-cultural factors affecting participation and achievement; class divisions',
    'Indicators relating to education, location, culture and social capital, e.g. independently educated Team GB medallists at London 2012',
    'Self-fulfilling prophecy; centrality and racial stacking and the lack of BAME managers and coaches',
    'Sport as an avenue for social mobility; influence of the media and role models',
    'Strategies and reformative policies, e.g. Kick It Out, adapted sports for disabled people'
  ],
  learn: [
    { h: 'Stratification, prejudice, stereotyping and discrimination', html: `
<p><b>Social stratification</b> is the division of society into a <b>hierarchy of layers</b> (strata) based on factors such as social class, wealth, income, occupation, education, ethnicity and gender. Those higher up usually have more power, wealth and opportunity — including in sport.</p>
<div class="tbl"><table><tr><th>Term</th><th>Meaning</th><th>Sporting example</th></tr>
<tr><td><b>Prejudice</b></td><td>a pre-judgement; an unfavourable attitude towards a group formed without knowledge</td><td>believing women are not interested in watching football</td></tr>
<tr><td><b>Stereotyping</b></td><td>a simplified, generalised belief about all members of a group</td><td>“black players lack the intelligence to be quarterbacks”; “girls can’t play contact sports”</td></tr>
<tr><td><b>Discrimination</b></td><td>acting unfairly towards a person or group because of prejudice. <b>Overt</b>: open (racist chanting); <b>covert</b>: hidden (not selecting, fewer opportunities)</td><td>fewer coaching jobs for BAME candidates; unequal pay and media coverage for women</td></tr></table></div>` },
    { h: 'Barriers to participation', html: `
<p>Barriers can be grouped as <b>opportunity</b> (the chance to take part: time, money, family commitments, transport), <b>provision</b> (facilities, clubs, coaches, equipment, programmes being available and accessible) and <b>esteem</b> (confidence, self-worth, feeling welcome, role models).</p>
<div class="tbl"><table><tr><th>Group</th><th>Typical barriers</th></tr>
<tr><td><b>Ethnic minorities</b></td><td>racism and abuse; religious and cultural factors (dress, single-sex provision, fasting); stereotyping and stacking; few role models in coaching and management</td></tr>
<tr><td><b>Women</b></td><td>stereotypes about femininity; less media coverage and sponsorship; lower pay and prize money; family and caring commitments; body-image concerns; fewer female coaches and officials; fewer clubs and teams</td></tr>
<tr><td><b>Disabled people</b></td><td>inaccessible facilities and transport; cost of specialist equipment; lack of trained coaches and adapted clubs; negative attitudes; low confidence; fewer role models (improving since London 2012)</td></tr>
<tr><td><b>Socially deprived / lower socio-economic groups</b></td><td>cost (fees, equipment, travel); poorer local facilities; less time (shift work); fewer school opportunities; less family support and social capital</td></tr></table></div>` },
    { h: 'Class, education, location and social capital', html: `
<p>Historically, sports were class-divided: the upper classes had polo, rowing, real tennis and amateur rugby union; the working classes football, rugby league and boxing. Class still affects participation and achievement today:</p>
<ul><li><b>Education</b> — independent schools have better facilities, specialist coaches, more PE time and fixtures. About 30% of Team GB’s medallists at <b>London 2012</b> were privately educated, compared with about 7% of the population; in sports like rowing, equestrian and sailing the proportion was far higher.</li>
<li><b>Location</b> — urban/rural differences and deprived areas with fewer facilities; distance and transport.</li>
<li><b>Culture</b> — family traditions and community values (e.g. rugby in the valleys of south Wales).</li>
<li><b>Social capital</b> — the networks, contacts and support that help people progress (parents who can drive to training, knowledge of pathways, connections).</li></ul>` },
    { h: 'Self-fulfilling prophecy, centrality and stacking', html: `
<p><b>Self-fulfilling prophecy</b> (Rosenthal): a coach’s expectations of a performer (often based on stereotypes) affect how the coach treats them — more attention and feedback for those expected to succeed — and the performer’s behaviour then matches the expectation. E.g. if a coach believes girls are poor at football and gives them less coaching, they do perform worse, “confirming” the stereotype.</p>
[[d:stacking]]
<p><b>Centrality</b> (Loy and McElvogue): <b>central</b> positions involve more interaction, decision-making and leadership (e.g. quarterback, central midfield, fly-half, pitcher). <b>Racial stacking</b> is the over-representation of ethnic-minority players in <b>non-central</b> positions that emphasise speed and power (e.g. wingers), and of white players in central positions — reflecting stereotypes about intelligence and leadership.</p>
<p>Because coaches and managers are often recruited from central-position players, stacking contributes to the <b>lack of BAME managers and coaches</b>. Responses include the NFL’s <b>Rooney Rule</b> (interview at least one minority candidate) and the English Football League’s voluntary recruitment code.</p>` },
    { h: 'Social mobility, media and strategies', html: `
<p><b>Social mobility</b> is the movement of a person between levels of the social hierarchy. Sport can be an avenue for upward mobility (professional footballers and boxers from working-class backgrounds), but only a tiny minority make it, and many who try miss out on education.</p>
<p><b>The media and role models</b>: under-representation of women, disabled and minority athletes limits role models; positive coverage (the 2012 Paralympics, the growth of women’s football and rugby) raises esteem and participation.</p>
<div class="tbl"><table><tr><th>Strategy / policy</th><th>Aim</th></tr>
<tr><td><b>Kick It Out</b> (1993) and Show Racism the Red Card</td><td>anti-racism campaigns in football: education, reporting, sanctions</td></tr>
<tr><td>Adapted sports (wheelchair basketball, boccia, goalball, polybat) and Disability Sport Wales</td><td>provision and inclusion for disabled people</td></tr>
<tr><td>This Girl Can (Sport England) and Sport Wales campaigns for women and girls</td><td>esteem and participation among women</td></tr>
<tr><td>Equality Act 2010; targeted funding; subsidised or free sessions; women-only sessions; accessible facilities</td><td>opportunity and provision</td></tr>
<tr><td>Coaching courses for under-represented groups; positive-action recruitment</td><td>diversity in coaching and leadership</td></tr></table></div>
<p>Effects on sports: more diverse participation and talent pools, changing attitudes; but progress is uneven and deep-rooted barriers remain.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain how racial stacking may lead to a lack of BAME managers in football. (3 marks)', s: ['Stacking places ethnic-minority players disproportionately in non-central, peripheral positions (e.g. wingers) that emphasise speed and power, based on stereotypes.', 'Central positions involve decision-making and leadership, so players in these positions are seen as having leadership qualities.', 'Managers are often recruited from former central players, so fewer BAME players are considered — reinforced by the self-fulfilling prophecy and lack of role models.'], a: 'Stacking → fewer central/leadership roles → fewer seen as future managers.' }
  ],
  pitfalls: ['Using prejudice and discrimination interchangeably — prejudice is an attitude, discrimination is an action.', 'Listing barriers without classifying them (opportunity, provision, esteem) or linking to a group.', 'Describing stacking without explaining centrality.', 'Claiming sport guarantees social mobility.', 'Naming a strategy without explaining how it removes a barrier.'],
  cards: [
    ['Social stratification?', 'Division of society into a hierarchy of layers by class, wealth, ethnicity, gender etc.'], ['Prejudice?', 'An unfavourable pre-judgement/attitude towards a group.'], ['Stereotyping?', 'A generalised, simplified belief about all members of a group.'],
    ['Discrimination?', 'Unfair treatment based on prejudice (overt or covert).'], ['Three categories of barrier?', 'Opportunity, provision, esteem.'], ['Social capital?', 'Networks, contacts and support that help people progress.'],
    ['London 2012 statistic?', 'About 30% of Team GB medallists were privately educated vs about 7% of the population.'], ['Self-fulfilling prophecy?', 'Expectations change treatment, so performance matches the expectation.'],
    ['Centrality?', 'Central positions involve more interaction and decision-making.'], ['Racial stacking?', 'Over-representation of ethnic minorities in non-central positions.'], ['Rooney Rule?', 'NFL rule requiring minority candidates to be interviewed for head-coach jobs.'],
    ['Social mobility?', 'Movement between levels of the social hierarchy.'], ['Kick It Out?', 'Anti-racism campaign in football (1993).']
  ],
  quiz: [
    { q: 'An unfavourable attitude towards a group formed without knowledge is…', o: ['prejudice', 'discrimination', 'stacking', 'socialisation'], x: 'Pre-judgement.' },
    { q: 'Not selecting a player because of her ethnicity is…', o: ['discrimination', 'prejudice only', 'social mobility', 'centrality'], x: 'Unfair action.' },
    { q: 'Racial stacking places ethnic-minority players mainly in…', o: ['non-central positions', 'central decision-making positions', 'coaching roles', 'officiating'], x: 'Positions emphasising speed and power.' },
    { q: 'A lack of affordable transport to a leisure centre is a barrier of…', o: ['opportunity', 'esteem', 'stacking', 'stratification'], x: 'The chance to take part.' },
    { q: 'Low confidence and few role models are barriers of…', o: ['esteem', 'provision', 'opportunity', 'legislation'], x: 'Self-worth and belief.' },
    { q: 'Kick It Out aims to tackle…', o: ['racism in football', 'doping in cycling', 'gender pay gaps in tennis', 'hooliganism in cricket'], x: 'Anti-racism campaign.' },
    { q: 'A coach expects a player to fail, gives less feedback, and the player fails. This is…', o: ['a self-fulfilling prophecy', 'catharsis', 'social loafing', 'centrality'], x: 'Expectation shapes outcome.' },
    { q: 'Social capital refers to…', o: ['networks and support that help progress', 'money in the bank', 'the capital city', 'government funding'], x: 'Connections and support.' }
  ],
  exam: [
    { q: 'Define social stratification. [1]', m: 1, ms: ['division of society into a hierarchy of layers based on factors such as class, wealth, ethnicity or gender'] },
    { q: 'Explain the terms centrality and racial stacking. [2]', m: 2, ms: ['centrality: central positions involve more interaction/decision-making/leadership', 'stacking: over-representation of ethnic minorities in non-central positions based on stereotypes'] },
    { q: 'Participation in sport by disabled people is lower than that of non-disabled people.', parts: [
      { q: 'Identify two barriers to participation for disabled people, classifying each as opportunity, provision or esteem. [4]', m: 4, ms: ['e.g. inaccessible facilities / lack of adapted equipment or clubs', 'provision', 'e.g. low confidence / fear of negative attitudes / few role models', 'esteem (or cost/transport — opportunity)'] },
      { q: 'Evaluate strategies that could increase participation in sport among disabled people in Wales. [6]', m: 6, lv: true, ms: ['adapted sports (boccia, wheelchair basketball) — provision of suitable activities', 'Disability Sport Wales / inclusive clubs, trained coaches — provision', 'accessible facilities and transport, subsidised costs — opportunity', 'media coverage / Paralympic role models — esteem', 'Equality Act / funding requirements', 'limitations: cost, uneven local provision, attitudes change slowly; judgement'] }
    ] },
    { q: 'Discuss the reasons why independently educated athletes are over-represented among Team GB medallists. [6]', m: 6, lv: true, ms: ['~30% of London 2012 medallists privately educated vs ~7% of population', 'better facilities (boathouses, pools, equestrian) and specialist coaches', 'more curriculum time, fixtures and competition', 'social capital: family wealth, networks, knowledge of pathways', 'sports like rowing, sailing, equestrian are expensive / class-linked', 'judgement: reflects stratification; state school provision and talent programmes can reduce the gap'] }
  ],
  sims: ['barriers'], gens: ['partdata']
});
