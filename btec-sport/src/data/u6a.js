/* ==========================================================
   UNIT 6 · SPORTS PSYCHOLOGY (internal) — part 1
   A Personality, motivation, arousal, anxiety and self-confidence
   ========================================================== */
TOPICS.push({
  id: '6.1', unit: '6', area: 'psych', ref: 'A1 Personality factors and assessment', title: 'Personality', short: 'Trait, situational (social learning) and interactional theories; Eysenck, Cattell 16PF, type A/B; limitations of testing',
  summary: 'What personality is and the three main approaches — trait theory, situational (social learning) theory and the interactional approach — and how personality is assessed (Eysenck’s personality inventory, Cattell’s 16PF, type A and type B), with the limitations, reliability and validity of personality testing.',
  spec: [
    'Personality traits: relatively consistent ways of behaving across a range of situations',
    'Situational or social learning theory: behaviour determined mainly by environment, learnt through modelling and social reinforcement',
    'Interactional theory: situational and personal traits are equal determinants of behaviour',
    'Assessment: Eysenck’s personality inventory, Cattell’s 16 personality factor model, type A/type B personality; limitations; reliability and validity of testing'
  ],
  learn: [
    { h: 'Three approaches', html: `
<div class="tbl"><table><tr><th>Approach</th><th>Key idea</th><th>Sport example</th><th>Criticism</th></tr>
<tr><td><b>Trait theory</b></td><td>personality is made of stable, inherited traits — relatively consistent ways of behaving across a range of situations</td><td>an extrovert enjoys team sports in every setting</td><td>ignores the situation; poor at predicting behaviour in a particular moment</td></tr>
<tr><td><b>Situational (social learning) theory</b> (Bandura)</td><td>behaviour is determined mainly by the <b>environment</b> and is <b>learnt</b> by observing and copying others (<b>modelling</b>) and through <b>social reinforcement</b> (praise, rewards)</td><td>a young player copies a professional’s celebration or aggression; a calm player becomes aggressive in a hostile derby</td><td>ignores inherited traits; people react differently to the same situation</td></tr>
<tr><td><b>Interactional approach</b></td><td>behaviour = f(personality traits × situation): <b>traits and the situation are equal</b> determinants</td><td>a normally calm player stays calm in training but loses control when fouled in a cup final</td><td>widely accepted — better predicts behaviour; harder to measure</td></tr></table></div>` },
    { h: 'Assessing personality', html: `
[[d:eysenck]]
<div class="tbl"><table><tr><th>Test / model</th><th>What it measures</th></tr>
<tr><td><b>Eysenck’s personality inventory</b> (EPI)</td><td>two dimensions: <b>introversion–extroversion</b> and <b>stability–neuroticism</b> (stable–unstable). Extroverts seek stimulation and suit team, high-arousal sports; introverts prefer individual, precise, self-paced sports.</td></tr>
<tr><td><b>Cattell’s 16 personality factors</b> (16PF)</td><td>a questionnaire measuring 16 traits (e.g. warmth, dominance, emotional stability, liveliness, apprehension) to produce a personality profile</td></tr>
<tr><td><b>Type A / type B</b></td><td><b>Type A</b>: competitive, impatient, highly driven, works fast, prone to stress/anger. <b>Type B</b>: relaxed, patient, less competitive, more tolerant.</td></tr></table></div>
<div class="box warn"><b class="lbl">Limitations of personality testing</b><p><b>Reliability</b> — answers may change with mood or day, so results are not always consistent. <b>Validity</b> — questionnaires may not measure true personality: people give socially desirable answers, misunderstand questions, or answer as they think a coach wants. Tests do not predict performance well, should not be used for team selection, and need qualified interpretation.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain the interactional approach to personality, using a sporting example. (3 marks)', s: ['Behaviour is determined equally by a person’s traits and the situation they are in.', 'e.g. a usually calm (stable) hockey player…', '…may lose their temper in a high-pressure final after a bad decision — the situation interacts with their traits.'], a: 'Traits × situation; example.' },
    { q: 'Give one limitation of using questionnaires such as Cattell’s 16PF with athletes. (1 mark)', s: ['Athletes may give socially desirable answers, reducing validity / results vary day to day, reducing reliability.'], a: 'Validity or reliability issue.' }
  ],
  pitfalls: ['Saying trait theory considers the environment.', 'Mixing up reliability (consistent results) and validity (measures what it claims).', 'Describing type A as calm.', 'Claiming personality tests predict who will win.'],
  cards: [
    ['Trait theory?', 'Personality is stable, inherited traits shown consistently across situations.'], ['Social learning theory?', 'Behaviour is learnt from the environment through modelling and reinforcement.'], ['Interactional approach?', 'Traits and situation equally determine behaviour.'],
    ['Eysenck’s dimensions?', 'Introversion–extroversion and stability–neuroticism.'], ['Cattell’s 16PF?', 'Questionnaire measuring 16 personality traits.'], ['Type A personality?', 'Competitive, impatient, driven, stress-prone.'],
    ['Type B personality?', 'Relaxed, patient, less competitive.'], ['Reliability of a test?', 'Gives consistent results when repeated.'], ['Validity of a test?', 'Measures what it claims to measure.']
  ],
  quiz: [
    { q: 'Which approach says behaviour is learnt by watching others?', o: ['Social learning (situational)', 'Trait theory', 'Type A/B', 'Drive theory'], x: 'Modelling.' },
    { q: 'Eysenck’s two dimensions are introversion–extroversion and…', o: ['stability–neuroticism', 'type A–type B', 'intrinsic–extrinsic', 'task–social'], x: 'EPI.' },
    { q: 'An impatient, highly competitive athlete is likely to be…', o: ['type A', 'type B', 'an introvert', 'stable'], x: 'Type A.' },
    { q: 'The interactional approach states that behaviour depends on…', o: ['traits and the situation equally', 'traits only', 'the situation only', 'genetics only'], x: 'B = f(P × E).' },
    { q: 'Athletes giving “ideal” answers on a questionnaire reduces its…', o: ['validity', 'reliability', 'cohesion', 'arousal'], x: 'Social desirability.' },
    { q: 'Cattell’s model measures how many factors?', o: ['16', '2', '5', '4'], x: '16PF.' }
  ],
  exam: [
    { q: 'Describe trait theory of personality. [2]', m: 2, tag: 'nea', ms: ['personality is made up of stable, (inherited) traits', 'that are consistent across a range of situations'] },
    { q: 'Explain how personality may impact on sports performance. [6]', m: 6, lv: true, tag: 'nea', ms: ['extroverts: seek stimulation, may suit team/fast high-arousal sports; perform better at higher arousal', 'introverts: prefer individual, precise, self-paced activities (e.g. archery, golf)', 'stable v neurotic: anxiety, emotional control under pressure', 'type A: highly competitive and driven but prone to stress, anger, poor decisions', 'interactional approach: performance depends on traits and situation', 'limitations: personality alone is a poor predictor; coaches should adapt motivation/communication'] }
  ],
  sims: ['eysenck', 'typeab'], gens: []
});

TOPICS.push({
  id: '6.2', unit: '6', area: 'psych', ref: 'A2 Motivational factors', title: 'Motivation', short: 'Intrinsic and extrinsic; achievement motivation; environment; the coach; mastery v competitive climate; TARGET; attribution',
  summary: 'The motivational factors that affect performance: intrinsic and extrinsic motivation; achievement motivation (mastery v comparing with others); the effect of the environment; the influence of the coach; mastery and competitive motivational climates and the TARGET model (task, authority, reward, grouping, evaluation, timing); and attribution theory and how coaches can use it.',
  spec: [
    'Types of motivation: intrinsic and extrinsic',
    'Achievement motivation: setting realistic but challenging goals; mastering skills v comparing ability with others',
    'The effect of the environment on motivation, e.g. facilities, equipment',
    'The influence of the coach, teacher or instructor: task and mastery directed behaviour',
    'Mastery climate and TARGET (task, authority, reward, grouping, evaluation, timing); competitive climate',
    'Attribution theory and how a coach can use it in the motivation process'
  ],
  learn: [
    { h: 'Types of motivation', html: `
<p><b>Motivation</b> is the direction and intensity of effort.</p>
<div class="tbl"><table><tr><th>Type</th><th>Meaning</th><th>Examples</th></tr>
<tr><td><b>Intrinsic</b></td><td>from within — taking part for enjoyment, satisfaction, challenge, mastery</td><td>loving the feeling of improving a personal best</td></tr>
<tr><td><b>Extrinsic</b></td><td>from outside — tangible (trophies, money, medals) or intangible (praise, recognition, selection)</td><td>prize money; coach’s praise; avoiding being dropped</td></tr></table></div>
<p>Intrinsic motivation is linked to long-term adherence and enjoyment; extrinsic rewards can boost effort but, if overused or seen as controlling, can undermine intrinsic motivation.</p>` },
    { h: 'Achievement motivation and the climate', html: `
<p><b>Achievement motivation</b> is the drive to succeed. Performers may be <b>task (mastery) oriented</b> — judging success by mastering skills and self-improvement — or <b>ego (competitive) oriented</b> — judging success by comparing their ability and performance with others. Setting <b>realistic but challenging goals</b> keeps motivation high.</p>
<p><b>Environment</b>: good facilities and equipment, a supportive atmosphere and appropriate competition increase motivation; poor facilities can reduce it.</p>
<p>The <b>coach</b> strongly shapes motivation through task- and mastery-directed behaviour — praising effort and improvement rather than only results.</p>
<div class="tbl"><table><tr><th>Mastery climate</th><th>Competitive climate</th></tr>
<tr><td>positive reinforcement for <b>working hard</b>, <b>showing improvement</b>, <b>helping others</b> and <b>valuing each person’s contribution</b>; mistakes are part of learning</td><td>athletes believe <b>poor performance and mistakes will be punished</b>; the <b>highest-ability athletes get most attention</b>; <b>competition between team members</b> is encouraged</td></tr>
<tr><td>→ higher intrinsic motivation, effort, enjoyment, persistence; lower anxiety</td><td>→ can raise anxiety and drop-out in less able players; may suit some elite settings</td></tr></table></div>
<div class="tbl"><table><tr><th>TARGET</th><th>Creating a mastery climate</th></tr>
<tr><td><b>T</b>ask</td><td>varied, challenging tasks matched to each athlete</td></tr>
<tr><td><b>A</b>uthority</td><td>athletes share decisions and leadership roles</td></tr>
<tr><td><b>R</b>eward</td><td>recognise effort and individual improvement, not just winning</td></tr>
<tr><td><b>G</b>rouping</td><td>mixed-ability, cooperative groups</td></tr>
<tr><td><b>E</b>valuation</td><td>judge progress against personal goals, privately</td></tr>
<tr><td><b>T</b>iming</td><td>give athletes enough time to learn and improve at their own pace</td></tr></table></div>` },
    { h: 'Attribution theory', html: `
[[d:weiner]]
<p><b>Attributions</b> are the reasons people give for success or failure. Weiner’s model classifies them by <b>locus of causality</b> (internal — ability, effort; external — task difficulty, luck) and <b>stability</b> (stable — ability, task difficulty; unstable — effort, luck).</p>
<ul><li>After <b>success</b>, coaches should encourage <b>internal, stable</b> attributions (“you won because you’re skilful”) to build confidence and pride.</li>
<li>After <b>failure</b>, encourage <b>external</b> or <b>unstable, controllable</b> attributions (“you didn’t put in enough effort / bad luck”) so the athlete believes things can change — avoiding <b>learned helplessness</b>.</li>
<li><b>Attribution retraining</b>: coaches help athletes change unhelpful attributions, focusing on effort, which is controllable.</li></ul>` }
  ],
  eqs: [],
  worked: [
    { q: 'Describe two features of a mastery motivational climate. (2 marks)', s: ['Players are positively reinforced for working hard and showing improvement.', 'Helping others and valuing each person’s contribution are rewarded; mistakes are seen as part of learning.'], a: 'Effort/improvement rewarded; everyone valued.' },
    { q: 'Explain how a coach could use attribution theory after a heavy defeat. (2 marks)', s: ['Encourage players to attribute the defeat to unstable, controllable causes such as effort or tactics rather than lack of ability.', 'This keeps motivation and confidence up because players believe they can improve — avoiding learned helplessness.'], a: 'Unstable/controllable attributions → maintain motivation.' }
  ],
  pitfalls: ['Mixing up the mastery climate (effort, improvement) and competitive climate (comparison, punishment).', 'Getting the TARGET letters wrong.', 'Saying extrinsic rewards always increase motivation.', 'Recommending “lack of ability” as an attribution after failure.'],
  cards: [
    ['Intrinsic motivation?', 'From within — enjoyment, satisfaction, mastery.'], ['Extrinsic motivation?', 'From outside — tangible or intangible rewards.'], ['Achievement motivation?', 'The drive to succeed; set realistic but challenging goals.'],
    ['Task (mastery) orientation?', 'Success = mastering skills and self-improvement.'], ['Ego (competitive) orientation?', 'Success = beating others.'], ['Mastery climate?', 'Rewards effort, improvement, helping others; values everyone.'],
    ['Competitive climate?', 'Mistakes punished; best players get attention; rivalry within the team.'], ['TARGET?', 'Task, authority, reward, grouping, evaluation, timing.'], ['Attribution?', 'Reason given for success or failure.'],
    ['Weiner’s dimensions?', 'Locus of causality (internal/external) and stability (stable/unstable).'], ['Attribution after success?', 'Internal and stable (ability).'], ['Attribution after failure?', 'External or unstable (effort, luck).'], ['Learned helplessness?', 'Belief that failure is inevitable and outside one’s control.']
  ],
  quiz: [
    { q: 'Rewarding effort and improvement creates a…', o: ['mastery climate', 'competitive climate', 'social loafing', 'catastrophe'], x: 'Mastery.' },
    { q: 'In TARGET, the A stands for…', o: ['authority', 'ability', 'arousal', 'attribution'], x: 'Shared decisions.' },
    { q: '“We lost because we didn’t try hard enough” is an attribution to…', o: ['effort — internal, unstable', 'ability — internal, stable', 'luck — external, unstable', 'task difficulty — external, stable'], x: 'Effort.' },
    { q: 'Praise from a coach is…', o: ['extrinsic motivation', 'intrinsic motivation', 'a trait', 'a type A behaviour'], x: 'Intangible reward.' },
    { q: 'A competitive climate is characterised by…', o: ['rivalry between team members', 'valuing every contribution', 'rewarding improvement', 'shared authority'], x: 'Comparison.' },
    { q: 'After a win, coaches should encourage attributions that are…', o: ['internal and stable', 'external and unstable', 'all luck', 'blaming referees'], x: 'Build pride/confidence.' },
    { q: 'Judging success by comparing yourself with others is…', o: ['ego (competitive) orientation', 'task orientation', 'mastery climate', 'intrinsic motivation'], x: 'Ego.' }
  ],
  exam: [
    { q: 'Describe the TARGET model. [3]', m: 3, tag: 'nea', ms: ['task — varied, challenging tasks; authority — athletes involved in decisions', 'reward — effort and improvement recognised; grouping — mixed-ability, cooperative', 'evaluation — personal progress, private; timing — time to learn at own pace'] },
    { q: 'Explain how different motivational factors may impact on sports performance. [8]', m: 8, lv: true, tag: 'nea', ms: ['intrinsic motivation: enjoyment, persistence, adherence, effort in training', 'extrinsic: rewards boost effort short term; may undermine intrinsic if controlling', 'achievement motivation: task v ego orientation; realistic, challenging goals', 'environment: facilities, equipment, atmosphere', 'coach behaviour: mastery climate (TARGET) v competitive climate — effects on effort, anxiety, drop-out', 'attribution: helpful attributions maintain motivation; learned helplessness', 'examples from a named sport', 'links between factors and performance outcomes'] }
  ],
  sims: ['targetsort', 'weiner'], gens: []
});

TOPICS.push({
  id: '6.3', unit: '6', area: 'psych', ref: 'A3 Arousal–performance relationship theories', title: 'Arousal and performance', short: 'Drive theory, inverted U, catastrophe theory, individual zones of optimal functioning',
  summary: 'Arousal is the level of physiological and psychological activation. Learn the four theories of the arousal–performance relationship in the specification — drive theory, the inverted U hypothesis, catastrophe theory and individual zones of optimal functioning (IZOF) — and how they apply under competitive pressure.',
  spec: [
    'Drive theory: as arousal rises, so does performance',
    'Inverted U hypothesis: performance improves with arousal up to an optimal point, then decreases steadily',
    'Catastrophe theory: after the optimal point, performance declines rapidly at the point of catastrophe',
    'Individual zones of optimal functioning: athletes have optimal zones dependent on personality and the activity'
  ],
  learn: [
    { h: 'Four theories', html: `
[[d:arousalB]]
<div class="tbl"><table><tr><th>Theory</th><th>Key idea</th><th>Evaluation</th></tr>
<tr><td><b>Drive theory</b></td><td>a linear relationship: as arousal rises, performance rises — especially for well-learned (dominant) skills of experts; for beginners, high arousal brings out errors</td><td>explains why experts thrive under pressure, but cannot explain why experts sometimes “choke”</td></tr>
<tr><td><b>Inverted U hypothesis</b></td><td>performance improves as arousal increases up to an <b>optimal</b> point (moderate arousal), then <b>decreases steadily</b> as arousal goes higher</td><td>intuitive; the optimum varies with the skill (lower for fine/complex skills, higher for gross/simple), personality and experience; but the decline is not always gradual</td></tr>
<tr><td><b>Catastrophe theory</b></td><td>a development of the inverted U: with high <b>cognitive anxiety</b>, once arousal passes the optimal point performance <b>drops suddenly and dramatically</b> (catastrophe); recovery needs a large reduction in arousal</td><td>explains sudden collapses (“choking”) — e.g. a golfer missing short putts</td></tr>
<tr><td><b>Individual zones of optimal functioning</b> (IZOF, Hanin)</td><td>each athlete has their own <b>zone</b> (a band, not a point) of optimal arousal that depends on their personality and the activity</td><td>more individual and realistic; coaches must find each athlete’s zone</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Compare the inverted U hypothesis and catastrophe theory. (3 marks)', s: ['Both say performance improves as arousal increases up to an optimal point.', 'In the inverted U, performance then decreases gradually as arousal increases further…', '…whereas in catastrophe theory, combined with high cognitive anxiety, performance drops suddenly and dramatically.'], a: 'Same rise; gradual v sudden decline.' }
  ],
  pitfalls: ['Saying drive theory predicts a decline at high arousal.', 'Describing IZOF as a single optimal point — it is a zone.', 'Forgetting that the optimal arousal depends on the skill and the person.', 'Drawing the catastrophe curve with a gradual decline.'],
  cards: [
    ['Arousal?', 'Level of physiological and psychological activation.'], ['Drive theory?', 'Performance increases as arousal increases (linear).'], ['Inverted U?', 'Performance best at moderate arousal; declines steadily after the optimum.'],
    ['Catastrophe theory?', 'After the optimum, a sudden dramatic drop in performance (with high cognitive anxiety).'], ['IZOF?', 'Each athlete has their own zone of optimal arousal.'], ['Optimal arousal for fine skills?', 'Lower.'], ['Optimal arousal for gross skills?', 'Higher.']
  ],
  quiz: [
    { q: 'Which theory predicts a sudden collapse in performance?', o: ['Catastrophe theory', 'Drive theory', 'Inverted U', 'IZOF'], x: 'Catastrophe.' },
    { q: 'Drive theory predicts that as arousal increases, performance…', o: ['increases', 'decreases', 'stays the same', 'first increases then falls'], x: 'Linear.' },
    { q: 'IZOF stands for…', o: ['individual zones of optimal functioning', 'inverted zone of focus', 'intrinsic zone of functioning', 'internal zone of fitness'], x: 'Hanin.' },
    { q: 'An archer would usually need…', o: ['lower optimal arousal', 'very high arousal', 'no arousal', 'maximal arousal'], x: 'Fine skill.' },
    { q: 'In the inverted U, the best performance occurs at…', o: ['moderate arousal', 'very low arousal', 'very high arousal', 'any arousal'], x: 'Optimal point.' },
    { q: 'Inverted U theory states that performance is best at…', o: ['a moderate level of arousal', 'very low arousal', 'very high arousal', 'any arousal level equally'], x: 'Optimum point.' },
    { q: 'In drive theory, high arousal improves performance when the skill is…', o: ['well learnt', 'new', 'complex', 'fine'], x: 'Dominant response.' }
  ],
  exam: [
    { q: 'Describe how differing levels of arousal can affect sports performance, using two theories. [6]', m: 6, lv: true, tag: 'nea', ms: ['arousal defined', 'inverted U: under-arousal — poor focus, low effort; optimal — best performance; over-arousal — errors, tension', 'catastrophe: high cognitive anxiety + over-arousal → sudden collapse; hard to recover', 'drive theory: higher arousal helps experts on dominant skills; beginners make errors', 'IZOF: zone varies by individual and activity', 'sporting examples for each'] }
  ],
  sims: ['arousal'], gens: []
});

TOPICS.push({
  id: '6.4', unit: '6', area: 'psych', ref: 'A4 Stress, anxiety and sports performance', title: 'Stress and anxiety', short: 'Eustress and distress; state/trait, cognitive/somatic/behavioural anxiety; stress process; multidimensional and reversal theories',
  summary: 'Stress (the non-specific response of the body to any demand) and anxiety (the negative form of stress): eustress and distress; state and trait anxiety; cognitive, somatic and behavioural anxiety and their symptoms; the four-stage stress process; the fight-or-flight response; consequences of stress and anxiety; and multidimensional anxiety theory and reversal theory.',
  spec: [
    'Stress: the non-specific response of the body to any demand made on it; anxiety: the negative form of stress',
    'Types of stress: eustress and distress; types of anxiety: state and trait, cognitive, somatic and behavioural',
    'The stress process: environmental demands, perception of demand, stress response, behavioural consequences',
    'Cortisol and adrenaline (fight or flight); cognitive, somatic and behavioural symptoms; consequences',
    'Multidimensional anxiety theory; reversal theory'
  ],
  learn: [
    { h: 'Definitions and types', html: `
<ul><li><b>Stress</b>: the non-specific response of the body to any demand made on it.</li>
<li><b>Eustress</b>: positive stress — challenge, excitement, motivation (e.g. enjoying the buzz of a big match). <b>Distress</b>: negative stress — worry, overload.</li>
<li><b>Anxiety</b>: the negative form of stress, which can increase arousal and potentially decrease performance.</li></ul>
<div class="tbl"><table><tr><th>Type of anxiety</th><th>Meaning / symptoms</th></tr>
<tr><td><b>Trait</b></td><td>a general disposition to perceive situations as threatening — part of personality</td></tr>
<tr><td><b>State</b></td><td>anxiety felt at a particular moment in a specific situation — changes from moment to moment</td></tr>
<tr><td><b>Cognitive</b></td><td>mental: worry, negative thoughts, inability to concentrate, self-doubt</td></tr>
<tr><td><b>Somatic</b></td><td>physical: increased pulse rate and blood pressure, muscle tension, sweating, butterflies, needing the toilet</td></tr>
<tr><td><b>Behavioural</b></td><td>actions: rushing, talking quickly, fidgeting, nail biting, yawning, pacing</td></tr></table></div>` },
    { h: 'The stress process', html: `
[[d:stressproc]]
<ol><li><b>Environmental demands</b> — a physical or psychological demand (e.g. a penalty in a shoot-out).</li>
<li><b>Perception of demand</b> — the athlete judges whether they can meet it; if they think they cannot, they feel threatened.</li>
<li><b>Stress response</b> — increased arousal: the body releases <b>adrenaline</b> and <b>cortisol</b> to mobilise for “fight or flight”; cognitive and somatic anxiety.</li>
<li><b>Behavioural consequences</b> — performance improves or worsens (e.g. scores or misses).</li></ol>
<p><b>Consequences of stress and anxiety</b>: negative mental state; loss of self-confidence; poor concentration and attentional narrowing; muscle tension and loss of coordination; poor decisions; in the long term, burnout or drop-out.</p>` },
    { h: 'Theories', html: `
[[d:multianx]]
<ul><li><b>Multidimensional anxiety theory</b>: cognitive and somatic anxiety affect performance differently. <b>Cognitive anxiety has a negative effect</b> — as it increases, performance decreases. <b>Somatic anxiety has a positive effect up to a certain point</b> (an inverted U), after which it harms performance.</li>
<li><b>Reversal theory</b>: how the athlete <b>interprets</b> their arousal matters. If they see high arousal as <b>pleasant excitement</b>, performance improves; if they see it as <b>unpleasant worry</b> (anxiety), performance suffers. Athletes can “reverse” their interpretation.</li></ul>` }
  ],
  eqs: [],
  worked: [
    { q: 'Give one cognitive, one somatic and one behavioural symptom of anxiety. (3 marks)', s: ['Cognitive: worry / negative thoughts / inability to concentrate.', 'Somatic: increased heart rate / muscle tension / sweating.', 'Behavioural: fidgeting / rushing / talking quickly.'], a: 'One of each.' },
    { q: 'Explain reversal theory using a sporting example. (2 marks)', s: ['Performance depends on how the athlete interprets their arousal.', 'e.g. a sprinter who sees a racing heart before a final as excitement performs well; one who sees it as worry performs poorly.'], a: 'Interpretation: excitement v anxiety.' }
  ],
  pitfalls: ['Mixing up state (now) and trait (personality) anxiety.', 'Saying somatic anxiety is always negative.', 'Getting the stress process stages in the wrong order.', 'Confusing eustress (positive) with distress.'],
  cards: [
    ['Stress?', 'The non-specific response of the body to any demand made on it.'], ['Anxiety?', 'Negative form of stress — increased arousal, possible decrease in performance.'], ['Eustress?', 'Positive stress.'], ['Distress?', 'Negative stress.'],
    ['Trait anxiety?', 'General tendency to feel anxious — part of personality.'], ['State anxiety?', 'Anxiety at a specific moment.'], ['Cognitive anxiety?', 'Worry, negative thoughts, poor concentration.'], ['Somatic anxiety?', '↑ HR and BP, muscle tension, sweating.'],
    ['Behavioural anxiety?', 'Rushing, talking quickly, fidgeting.'], ['Four stages of the stress process?', 'Environmental demands, perception, stress response, behavioural consequences.'], ['Fight or flight hormones?', 'Adrenaline and cortisol.'],
    ['Multidimensional anxiety theory?', 'Cognitive anxiety harms performance; somatic helps up to a point.'], ['Reversal theory?', 'Interpretation of arousal — excitement v anxiety — decides the effect.']
  ],
  quiz: [
    { q: 'Muscle tension and a racing heart are signs of…', o: ['somatic anxiety', 'cognitive anxiety', 'trait anxiety only', 'eustress'], x: 'Physical.' },
    { q: 'A tendency to feel anxious in most situations is…', o: ['trait anxiety', 'state anxiety', 'eustress', 'somatic anxiety'], x: 'Personality.' },
    { q: 'Fidgeting and talking quickly are…', o: ['behavioural anxiety', 'cognitive anxiety', 'eustress', 'catastrophe'], x: 'Actions.' },
    { q: 'The second stage of the stress process is…', o: ['perception of demand', 'stress response', 'behavioural consequences', 'environmental demands'], x: 'Order.' },
    { q: 'Multidimensional anxiety theory says cognitive anxiety…', o: ['has a negative effect on performance', 'always helps performance', 'helps up to a point', 'has no effect'], x: 'Negative linear.' },
    { q: 'Seeing high arousal as excitement rather than worry is explained by…', o: ['reversal theory', 'drive theory', 'trait theory', 'Steiner’s model'], x: 'Interpretation.' },
    { q: 'Positive stress is called…', o: ['eustress', 'distress', 'trait anxiety', 'cortisol'], x: 'Eu = good.' }
  ],
  exam: [
    { q: 'Describe the stress process. [4]', m: 4, tag: 'nea', ms: ['environmental demands — physical/psychological demand placed on the athlete', 'perception of demand — whether the athlete believes they can cope', 'stress response — increased arousal; adrenaline/cortisol; cognitive/somatic anxiety', 'behavioural consequences — effect on performance'] },
    { q: 'Explain how control of arousal, anxiety and stress can impact on sports performance. [8]', m: 8, lv: true, tag: 'nea', ms: ['uncontrolled anxiety: cognitive (worry, poor concentration) and somatic (tension, ↑ HR) symptoms reduce performance', 'multidimensional theory: reducing cognitive anxiety improves performance; moderate somatic can help', 'inverted U / catastrophe: controlling arousal keeps the athlete in the optimal zone and avoids catastrophe', 'reversal theory: reinterpreting arousal as excitement', 'techniques: relaxation, breathing, PMR, imagery, self-talk, goal setting (link to C1)', 'eustress v distress', 'sporting examples', 'well-reasoned links between control and performance'] }
  ],
  sims: ['anxsort', 'stressorder'], gens: []
});

TOPICS.push({
  id: '6.5', unit: '6', area: 'psych', ref: 'A5 Self-confidence and sports performance', title: 'Self-confidence and self-efficacy', short: 'Benefits; optimal confidence; expectations; Bandura’s self-efficacy theory',
  summary: 'How self-confidence affects performance under competitive pressure: its benefits (positive emotions, concentration, effort, game strategy); optimal self-confidence and the problems of too little or too much (link to the inverted U); how the expectations of self and coach influence performance (self-fulfilling prophecy); and Bandura’s self-efficacy theory and its application.',
  spec: [
    'Benefits of self-confidence: arousing positive emotions, facilitating concentration, increasing effort, influencing game strategy',
    'Optimal self-confidence: lack of confidence, problems of overconfidence, link with inverted U hypothesis',
    'How expectations influence performance: expectations of self and of coach',
    'Bandura’s self-efficacy theory: performance accomplishments, vicarious experiences, verbal persuasion, emotional arousal, efficacy expectations, athletic performance; application to sport'
  ],
  learn: [
    { h: 'Self-confidence', html: `
<p><b>Self-confidence</b> is the belief that you can successfully perform a desired behaviour.</p>
<div class="tbl"><table><tr><th>Benefit</th><th>Effect</th></tr>
<tr><td>Arousing positive emotions</td><td>calm, excited, enjoyment rather than fear</td></tr>
<tr><td>Facilitating concentration</td><td>attention on the task, not on worries</td></tr>
<tr><td>Increasing effort</td><td>persists longer, tries harder</td></tr>
<tr><td>Influencing game strategy</td><td>plays to win — takes positive risks rather than playing safe</td></tr></table></div>
<p><b>Optimal self-confidence</b> follows an inverted-U shape: <b>too little</b> confidence brings anxiety, doubt and low effort; <b>overconfidence</b> (false confidence) brings complacency, reduced effort and poor preparation; the best performance comes at an optimal level.</p>
<p><b>Expectations</b>: athletes tend to perform to the level expected of them. High expectations from the <b>coach</b> (and of <b>self</b>) — shown through more attention, feedback and opportunities — can raise performance (a self-fulfilling prophecy); low expectations can lower it.</p>` },
    { h: 'Bandura’s self-efficacy theory', html: `
[[d:bandura]]
<p><b>Self-efficacy</b> is situation-specific self-confidence. Bandura identified four sources of <b>efficacy expectations</b>, which influence <b>athletic performance</b>:</p>
<div class="tbl"><table><tr><th>Source</th><th>Meaning</th><th>How a coach can use it</th></tr>
<tr><td><b>Performance accomplishments</b> (strongest)</td><td>past success at the task</td><td>break skills into achievable steps; remind the athlete of previous successes; video of best performances</td></tr>
<tr><td><b>Vicarious experiences</b></td><td>watching someone similar succeed</td><td>demonstrations by a peer of similar ability; watching role models</td></tr>
<tr><td><b>Verbal persuasion</b></td><td>encouragement from others</td><td>positive feedback and encouragement from coach, team-mates, crowd</td></tr>
<tr><td><b>Emotional arousal</b></td><td>how the athlete interprets their physiological and emotional state</td><td>teach relaxation, breathing and imagery to control anxiety; reinterpret nerves as readiness</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain how a coach could use vicarious experiences to improve a gymnast’s self-efficacy. (2 marks)', s: ['Vicarious experience means watching someone else succeed.', 'The coach could have a gymnast of similar ability demonstrate the new skill successfully — “if they can do it, so can I”.'], a: 'Peer of similar ability demonstrates success.' }
  ],
  pitfalls: ['Saying more confidence is always better — overconfidence harms performance.', 'Confusing vicarious experience (watching others) and verbal persuasion (being told).', 'Forgetting that performance accomplishments are the strongest source.', 'Not applying the model to a specific sport when asked.'],
  cards: [
    ['Self-confidence?', 'Belief that you can successfully perform a desired behaviour.'], ['Four benefits of self-confidence?', 'Positive emotions, concentration, effort, game strategy.'], ['Overconfidence?', 'Complacency, reduced effort and preparation.'],
    ['Self-efficacy?', 'Situation-specific self-confidence.'], ['Bandura’s four sources?', 'Performance accomplishments, vicarious experiences, verbal persuasion, emotional arousal.'], ['Strongest source of self-efficacy?', 'Performance accomplishments.'],
    ['Self-fulfilling prophecy?', 'Athletes perform to the level expected of them.']
  ],
  quiz: [
    { q: 'Watching a team-mate of similar ability succeed is…', o: ['vicarious experience', 'performance accomplishment', 'verbal persuasion', 'emotional arousal'], x: 'Modelling.' },
    { q: 'The strongest source of self-efficacy is…', o: ['performance accomplishments', 'verbal persuasion', 'vicarious experience', 'emotional arousal'], x: 'Past success.' },
    { q: 'A coach shouting “you can do this!” uses…', o: ['verbal persuasion', 'vicarious experience', 'reversal theory', 'TARGET'], x: 'Encouragement.' },
    { q: 'Overconfidence can lead to…', o: ['reduced effort and complacency', 'more preparation', 'less arousal always', 'higher cohesion'], x: 'False confidence.' },
    { q: 'Optimal self-confidence links to which theory?', o: ['Inverted U', 'Drive theory', 'Steiner’s model', 'Tuckman'], x: 'Inverted-U shape.' },
    { q: 'Watching a team-mate of similar ability succeed is…', o: ['vicarious experience', 'performance accomplishment', 'verbal persuasion', 'emotional arousal'], x: 'Modelling.' },
    { q: 'The strongest source of self-efficacy is…', o: ['performance accomplishments', 'verbal persuasion', 'emotional arousal', 'vicarious experiences'], x: 'Past success.' }
  ],
  exam: [
    { q: 'Describe how self-confidence can benefit performance. [4]', m: 4, tag: 'nea', ms: ['arouses positive emotions', 'facilitates concentration', 'increases effort / persistence', 'influences game strategy — plays to win'] },
    { q: 'Analyse the relationship between motivational factors, anxiety and stress, and self-confidence and their impact on sports performance. [8]', m: 8, lv: true, tag: 'nea', ms: ['self-confidence reduces anxiety — confident athletes perceive demands as challenges (eustress)', 'low confidence → cognitive anxiety → poor performance (multidimensional theory)', 'motivation: mastery climate and helpful attributions build confidence; ego climate can raise anxiety', 'Bandura: performance accomplishments, vicarious experience, verbal persuasion and emotional arousal (anxiety control) interact', 'optimal confidence and arousal (inverted U); overconfidence lowers motivation/effort', 'cycle: success → confidence → motivation → effort → success', 'sporting examples', 'reasoned conclusion'] }
  ],
  sims: ['efficacy'], gens: []
});
