/* ==========================================================
   KEY AREA 4 · PSYCHOLOGY OF SPORT AND PHYSICAL ACTIVITY
   Goal setting; information processing; guidance and stages of learning; mental preparation and motivation;
   skilled performance and classification; types of practice
   ========================================================== */
TOPICS.push({
  id: '4.1', unit: '4', area: 'psych', ref: 'Goal-setting', title: 'Goal setting and SMART targets', short: 'Why set goals; specific, measurable, agreed, realistic, time-phased',
  summary: 'How goal setting improves health, well-being and performance — focusing attention, raising effort and concentration, and developing strategies for success — and how to write SMART targets (specific, measurable, agreed, realistic, time-phased) for a specific activity.',
  spec: [
    'How goal setting impacts upon health, well-being and performance: focusing attention, improving effort, concentration, developing strategies for success',
    'SMART targets: specific, measurable, agreed, realistic and time-phased',
    'Linking targets to specific activities'
  ],
  learn: [
    { h: 'Why set goals?', html: `
<div class="tbl"><table><tr><th>Benefit</th><th>How</th></tr>
<tr><td>Focuses attention</td><td>The performer knows exactly what to work on.</td></tr>
<tr><td>Improves effort and motivation</td><td>A clear target gives a reason to train hard; achieving it gives satisfaction.</td></tr>
<tr><td>Improves concentration</td><td>Less distraction in training and competition.</td></tr>
<tr><td>Develops strategies for success</td><td>Planning how to reach the goal (training methods, tactics).</td></tr>
<tr><td>Builds confidence and controls anxiety</td><td>Achieving short-term goals shows progress; realistic goals reduce pressure.</td></tr>
<tr><td>Supports adherence to exercise</td><td>For health, seeing progress keeps people active (link to 1.1).</td></tr></table></div>
<p>Goals can be <b>performance goals</b> (improving your own performance, e.g. a personal best) or <b>outcome goals</b> (winning). Performance goals are more under the performer’s control and are usually better for motivation. Short-term goals act as stepping stones to long-term goals.</p>` },
    { h: 'SMART targets', html: `
[[d:smart]]
<div class="tbl"><table><tr><th>Letter</th><th>Meaning</th><th>Example for a 1500 m runner</th></tr>
<tr><td><b>S</b>pecific</td><td>Clear and precise, related to the activity</td><td>“Improve my 1500 m time…”</td></tr>
<tr><td><b>M</b>easurable</td><td>Progress can be measured — a time, distance or score</td><td>“…from 5:20 to 5:10…”</td></tr>
<tr><td><b>A</b>greed</td><td>Agreed between performer and coach/teacher — shared ownership</td><td>“…agreed with my coach…”</td></tr>
<tr><td><b>R</b>ealistic</td><td>Challenging but achievable</td><td>(10 s is realistic in this time)</td></tr>
<tr><td><b>T</b>ime-phased</td><td>Has a deadline</td><td>“…by the end of the 8-week programme.”</td></tr></table></div>
<div class="box warn"><b class="lbl">When goals go wrong</b><p>Goals that are too hard lead to failure, anxiety and giving up; goals that are too easy lead to boredom and no improvement; vague goals (“get better at netball”) cannot be measured.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Write a SMART target for a footballer who wants to improve their passing. (2 marks)', s: ['e.g. “To increase my pass completion rate in matches from 70% to 80% (measured by video analysis), agreed with my coach, by the end of the 8-week block.”', 'It must be specific (passing), measurable (%) and time-phased (8 weeks).'], a: 'A target containing a measurable figure and a deadline, specific to passing.' },
    { q: 'Explain why a goal should be realistic. (2 marks)', s: ['If it is too hard, the performer will fail, lose confidence/motivation and may give up.', 'A realistic but challenging goal keeps effort high and gives a sense of achievement.'], a: 'Avoids failure and demotivation; still challenging.' }
  ],
  pitfalls: ['Writing “A = achievable” — in this specification A stands for AGREED.', 'Writing a target with no number or deadline — it is not measurable or time-phased.', 'Listing what SMART stands for without applying it to the sport in the question.', 'Saying goal setting “makes you better” — explain HOW (focus, effort, concentration, strategies).'],
  cards: [
    ['SMART stands for (Eduqas)?', 'Specific, measurable, agreed, realistic, time-phased.'], ['Specific?', 'Clear and precise; related to the activity.'], ['Measurable?', 'Progress can be measured — a number, time or score.'],
    ['Agreed?', 'Agreed between performer and coach/teacher.'], ['Realistic?', 'Challenging but achievable.'], ['Time-phased?', 'Has a deadline.'],
    ['Four benefits of goal setting?', 'Focuses attention, improves effort, improves concentration, develops strategies for success (also confidence).'], ['Performance goal?', 'Improving your own performance, e.g. a personal best.'], ['Outcome goal?', 'Based on the result, e.g. winning.'],
    ['Danger of an unrealistic goal?', 'Failure → loss of motivation and confidence.']
  ],
  quiz: [
    { q: 'In SMART, the A stands for…', o: ['agreed', 'active', 'awesome', 'aerobic'], x: 'Agreed with the coach.' },
    { q: '“Improve my sprint time” is NOT SMART because it is not…', o: ['measurable or time-phased', 'agreed by a parent', 'aerobic', 'about sport'], x: 'No figures, no deadline.' },
    { q: 'A goal with a deadline is…', o: ['time-phased', 'specific', 'realistic', 'agreed'], x: 'T.' },
    { q: 'Goal setting improves concentration by…', o: ['focusing attention on what matters', 'increasing anxiety', 'making training random', 'removing feedback'], x: 'Focus.' },
    { q: 'A goal that is too difficult may cause…', o: ['loss of motivation', 'better adherence', 'boredom from ease', 'improved confidence'], x: 'Repeated failure.' },
    { q: 'Which is a performance goal?', o: ['Run a personal best in the 800 m', 'Win the county final', 'Beat our rivals', 'Get a medal'], x: 'Own performance.' },
    { q: 'Which is the most SMART target?', o: ['Increase my vertical jump from 45 to 50 cm in 6 weeks, agreed with my coach', 'Jump higher', 'Be the best in the team', 'Train more'], x: 'Specific, measurable, agreed, realistic, time-phased.' }
  ],
  exam: [
    { q: 'State what the letters M and T stand for in SMART targets. [2]', m: 2, ms: ['M — measurable', 'T — time-phased'] },
    { q: 'Write a SMART target for a named performer in a named activity. [3]', m: 3, ms: ['specific to the activity / skill', 'measurable — includes a number/time/score', 'time-phased — includes a deadline', '(agreed / realistic indicated)'] },
    { q: 'A sedentary adult wants to start exercising to improve her health.', parts: [
      { q: 'Analyse how setting SMART targets could help her to adhere to an exercise programme. [6]', m: 6, lv: true, ms: ['specific — clear activity (e.g. brisk walking 30 min) so she knows what to do', 'measurable — sees progress (e.g. resting HR, time/distance) — motivation', 'agreed — with a trainer/GP — commitment and support', 'realistic — avoids failure, injury and giving up; builds confidence', 'time-phased — short-term deadlines give urgency and regular success', 'goal setting focuses attention and raises effort', 'achieving targets → intrinsic motivation → adherence → health benefits'] }
    ], tag: 'ext' }
  ],
  sims: ['smartcheck'], gens: []
});

TOPICS.push({
  id: '4.2', unit: '4', area: 'psych', ref: 'Information processing', title: 'Information processing and feedback', short: 'Input, decision making, output, feedback; knowledge of results and performance',
  summary: 'The simple information processing model — input, decision making, output and feedback — applied to sport; and the functions and types of feedback, especially knowledge of results and knowledge of performance (and intrinsic and extrinsic feedback).',
  spec: [
    'Information processing model: input, decision making, output and feedback',
    'The function of feedback, including knowledge of results and knowledge of performance'
  ],
  learn: [
    { h: 'The information processing model', html: `
[[d:ipm]]
<div class="tbl"><table><tr><th>Stage</th><th>What happens</th><th>Example: a cricket batter facing a delivery</th></tr>
<tr><td><b>Input</b></td><td>Information is taken in from the environment through the senses (sight, hearing, touch, balance). <b>Selective attention</b> filters out irrelevant information and focuses on what matters.</td><td>Watches the bowler’s hand and the ball; ignores the crowd.</td></tr>
<tr><td><b>Decision making</b></td><td>The information is compared with past experience stored in the memory, and a response is chosen.</td><td>Recognises a short ball and decides to play a pull shot.</td></tr>
<tr><td><b>Output</b></td><td>The decision is sent to the muscles and the movement is carried out.</td><td>Plays the pull shot.</td></tr>
<tr><td><b>Feedback</b></td><td>Information about the movement and its result, used to improve next time.</td><td>Sees the ball go for four; coach says “good weight transfer”.</td></tr></table></div>
<p>Experience speeds up decision making: an expert has more stored in memory, so recognises situations and chooses responses faster.</p>` },
    { h: 'Feedback', html: `
<p><b>Feedback</b> is information a performer receives about their performance. Its functions are to correct errors, reinforce correct actions, motivate, and build confidence.</p>
<div class="tbl"><table><tr><th>Type</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>Knowledge of results (KR)</b></td><td>Information about the <b>outcome</b> of the movement</td><td>“You scored”; the time on the clock; the distance thrown</td></tr>
<tr><td><b>Knowledge of performance (KP)</b></td><td>Information about the <b>quality of the movement / technique</b></td><td>“Your elbow was too low in that serve”; watching video of your technique</td></tr>
<tr><td><b>Intrinsic</b></td><td>From within — the “feel” of the movement (kinaesthesis)</td><td>A gymnast feels the landing was balanced</td></tr>
<tr><td><b>Extrinsic</b></td><td>From outside — coach, team-mates, video, scoreboard</td><td>Coach’s comments; a replay</td></tr>
<tr><td>Positive / negative</td><td>Praise for what went well / information about what went wrong</td><td>“Great follow-through!” / “You leaned back”</td></tr></table></div>
<div class="box tip"><b class="lbl">Which feedback for whom?</b><p><b>Beginners</b> (cognitive stage) need simple, positive, extrinsic feedback and KR. <b>Experts</b> (autonomous stage) can use intrinsic feedback and detailed KP to fine-tune technique. See 4.3.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Using an example, explain knowledge of performance. (2 marks)', s: ['Feedback about the quality of the technique / how the movement was performed…', '…e.g. a coach telling a swimmer their head position is too high in front crawl.'], a: 'Feedback on technique — e.g. coach on head position.' },
    { q: 'Describe the output stage of the information processing model. (1 mark)', s: ['The chosen response is sent to the muscles and the movement is carried out.'], a: 'Carrying out the chosen response.' }
  ],
  pitfalls: ['Confusing KR (the outcome) with KP (the technique).', 'Describing input without mentioning the senses or selective attention.', 'Leaving out feedback when drawing the model — it loops back to input.', 'Saying beginners should rely on intrinsic feedback — they do not yet know what a good movement feels like.'],
  cards: [
    ['Four stages of the information processing model?', 'Input, decision making, output, feedback.'], ['Input?', 'Information taken in through the senses.'], ['Selective attention?', 'Filtering out irrelevant information, focusing on what matters.'],
    ['Decision making?', 'Comparing information with memory and choosing a response.'], ['Output?', 'Carrying out the chosen movement.'], ['Feedback?', 'Information about the performance used to improve.'],
    ['Knowledge of results?', 'Feedback about the outcome — e.g. score, time, distance.'], ['Knowledge of performance?', 'Feedback about the quality of technique.'], ['Intrinsic feedback?', 'From within — the feel of the movement.'],
    ['Extrinsic feedback?', 'From outside — coach, video, scoreboard.'], ['Functions of feedback?', 'Correct errors, reinforce correct actions, motivate, build confidence.']
  ],
  quiz: [
    { q: 'Watching the ball leave the bowler’s hand is part of…', o: ['input', 'output', 'decision making', 'feedback'], x: 'Taking in information.' },
    { q: '“You ran 12.4 seconds” is…', o: ['knowledge of results', 'knowledge of performance', 'intrinsic feedback', 'guidance'], x: 'Outcome.' },
    { q: '“Keep your elbow high in the pull” is…', o: ['knowledge of performance', 'knowledge of results', 'input', 'output'], x: 'Technique.' },
    { q: 'The feel of a movement is…', o: ['intrinsic feedback', 'extrinsic feedback', 'knowledge of results', 'visual guidance'], x: 'Kinaesthesis.' },
    { q: 'Choosing to pass rather than shoot happens at the…', o: ['decision-making stage', 'input stage', 'output stage', 'feedback stage'], x: 'Selecting a response.' },
    { q: 'Ignoring crowd noise to focus on the ball is…', o: ['selective attention', 'output', 'knowledge of results', 'manual guidance'], x: 'Filtering.' },
    { q: 'Which feedback suits a beginner best?', o: ['Simple, positive, extrinsic feedback', 'Detailed intrinsic feedback only', 'No feedback', 'Complex negative feedback'], x: 'Beginners need help from outside.' }
  ],
  exam: [
    { q: 'Name the four stages of the information processing model. [2]', m: 2, ms: ['input and decision making (1 mark for both)', 'output and feedback (1 mark for both)'] },
    { q: 'Explain the difference between knowledge of results and knowledge of performance. Use examples. [4]', m: 4, ms: ['KR — feedback about the outcome / result', 'example, e.g. distance of a long jump / whether a shot went in', 'KP — feedback about the quality of the technique / movement', 'example, e.g. coach says the take-off foot was flat'] },
    { q: 'A netball goal shooter is practising shooting.', parts: [
      { q: 'Apply the information processing model to the goal shooter taking a shot in a match. [6]', m: 6, lv: true, ms: ['input — sees the ring, defender’s position, hears team-mates/umpire; selective attention filters out crowd', 'decision making — compares with memory of previous shots; chooses type of shot / power / whether to pass', 'output — sends message to muscles; performs the shot', 'feedback — KR: did it go in?; KP: coach comments on elbow/follow-through', 'intrinsic feedback — feel of the release', 'feedback used to adjust next attempt — improves decisions', 'experience speeds up decision making'] }
    ], tag: 'ext' }
  ],
  sims: ['ipmodelG', 'krkp'], gens: []
});

TOPICS.push({
  id: '4.3', unit: '4', area: 'psych', ref: 'Guidance', title: 'Guidance and stages of learning', short: 'Visual, verbal, manual, mechanical; cognitive, associative, autonomous',
  summary: 'The four types of guidance — visual, verbal, manual and mechanical — with their advantages and disadvantages, and the three stages of learning — cognitive, associative and autonomous — with the guidance and feedback that suit each stage.',
  spec: [
    'Types of guidance: verbal, visual, manual, mechanical',
    'Stages of learning: cognitive, associative, autonomous',
    'The relationship of guidance and feedback to the stages of learning'
  ],
  learn: [
    { h: 'Types of guidance', html: `
<p><b>Guidance</b> is information given to a learner to help them learn or improve a skill.</p>
<div class="tbl"><table><tr><th>Type</th><th>What it is</th><th>Advantages</th><th>Disadvantages</th></tr>
<tr><td><b>Visual</b></td><td>Seeing a demonstration, video, diagram or poster</td><td>Creates a clear mental picture; good for beginners; quick</td><td>Demonstration must be accurate; too much detail at once for complex skills</td></tr>
<tr><td><b>Verbal</b></td><td>Spoken instructions or explanations</td><td>Can give detail and tactics; used during performance; good for experts</td><td>Beginners may not understand technical terms; too much information overloads</td></tr>
<tr><td><b>Manual</b></td><td>The coach physically moves or supports the learner’s body</td><td>Builds confidence and safety; gives the feel of the movement</td><td>Learner may rely on it; not the true feel; physical contact must be appropriate</td></tr>
<tr><td><b>Mechanical</b></td><td>Using equipment or aids — a harness, float, twisting belt, ball machine</td><td>Safe for dangerous skills; builds confidence; repetition</td><td>Over-reliance; equipment can be expensive; feel is different</td></tr></table></div>` },
    { h: 'Stages of learning', html: `
[[d:stagesL]]
<div class="tbl"><table><tr><th>Stage</th><th>Characteristics</th><th>Best guidance</th><th>Best feedback</th></tr>
<tr><td><b>Cognitive</b> (beginner)</td><td>Trying to understand the skill; many errors; slow, jerky movements; needs to think about every part</td><td><b>Visual</b> demonstrations; <b>manual/mechanical</b> for safety</td><td>Extrinsic, simple, positive; KR</td></tr>
<tr><td><b>Associative</b> (practising)</td><td>Fewer errors; movements more fluent; starting to “feel” the skill</td><td>Visual and <b>verbal</b></td><td>KP and KR; some intrinsic</td></tr>
<tr><td><b>Autonomous</b> (expert)</td><td>Skill is automatic, consistent and fluent; can focus on tactics and opponents</td><td><b>Verbal</b> — detailed technical and tactical; mechanical for fine-tuning</td><td>Intrinsic; detailed KP; negative feedback can be used</td></tr></table></div>
<div class="box why"><b class="lbl">Why it matters</b><p>Matching guidance and feedback to the stage speeds up learning and keeps the learner motivated. Detailed verbal guidance overwhelms a beginner; simple demonstrations bore an expert.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why manual guidance is suitable for a beginner learning a forward roll. (2 marks)', s: ['The coach physically supports the learner through the movement…', '…which makes it safe, builds confidence and lets them feel the correct shape.'], a: 'Safety, confidence, feel of the movement.' },
    { q: 'Describe two characteristics of a performer in the autonomous stage of learning. (2 marks)', s: ['Movements are automatic, fluent and consistent.', 'Can concentrate on tactics/opponents rather than technique; few errors.'], a: 'Automatic, consistent; attention on tactics.' }
  ],
  pitfalls: ['Confusing manual (the coach physically moves you) with mechanical (equipment or aids).', 'Recommending complex verbal guidance for a beginner.', 'Describing the stages without saying which guidance/feedback suits each one when asked.', 'Saying autonomous performers never make mistakes — they make few, and can correct them themselves.'],
  cards: [
    ['Visual guidance?', 'Seeing a demonstration, video or diagram.'], ['Verbal guidance?', 'Spoken instructions or explanations.'], ['Manual guidance?', 'Coach physically moves or supports the learner.'],
    ['Mechanical guidance?', 'Equipment or aids — harness, float, twisting belt.'], ['Three stages of learning?', 'Cognitive, associative, autonomous.'], ['Cognitive stage?', 'Beginner: many errors, thinks about every part.'],
    ['Associative stage?', 'Practising: fewer errors, more fluent.'], ['Autonomous stage?', 'Expert: automatic, consistent, focuses on tactics.'], ['Best guidance for beginners?', 'Visual (and manual/mechanical for safety).'],
    ['Best feedback for experts?', 'Intrinsic and detailed knowledge of performance.'], ['Disadvantage of manual guidance?', 'Over-reliance; does not give the true feel.']
  ],
  quiz: [
    { q: 'A trampolinist in a twisting belt is receiving…', o: ['mechanical guidance', 'manual guidance', 'verbal guidance', 'visual guidance'], x: 'Equipment.' },
    { q: 'A coach holding a gymnast through a handspring is…', o: ['manual guidance', 'mechanical guidance', 'visual guidance', 'feedback'], x: 'Physical support.' },
    { q: 'A performer making many errors and thinking about each part is in the…', o: ['cognitive stage', 'associative stage', 'autonomous stage', 'output stage'], x: 'Beginner.' },
    { q: 'Detailed verbal tactical guidance best suits a performer in the…', o: ['autonomous stage', 'cognitive stage', 'first lesson', 'warm-up only'], x: 'Experts can process detail.' },
    { q: 'A demonstration is…', o: ['visual guidance', 'verbal guidance', 'manual guidance', 'knowledge of results'], x: 'Seeing.' },
    { q: 'A disadvantage of verbal guidance for beginners is…', o: ['too much information or technical terms', 'it is unsafe', 'it needs expensive equipment', 'it requires touching'], x: 'Overload.' },
    { q: 'In the associative stage, the learner…', o: ['makes fewer errors and becomes more fluent', 'performs automatically', 'cannot do the skill at all', 'needs no feedback'], x: 'Practice stage.' }
  ],
  exam: [
    { q: 'Identify the type of guidance being used when a swimmer uses a float. [1]', m: 1, ms: ['mechanical'] },
    { q: 'Describe the characteristics of a performer in the cognitive stage of learning. [3]', m: 3, ms: ['beginner / trying to understand the skill', 'many errors / inconsistent', 'slow / jerky / uncoordinated movements', 'has to think about each part of the skill', 'needs extrinsic feedback'] },
    { q: 'Evaluate the use of visual, verbal, manual and mechanical guidance for a beginner learning to serve in volleyball. [9]', m: 9, lv: true, ms: ['beginner is in the cognitive stage', 'visual: demonstration builds a mental picture — very effective for beginners; must be accurate and simple', 'verbal: short key points support demo; too much detail/jargon overloads beginners', 'manual: coach guides arm through action — feel of movement; risk of over-reliance; limited for a serve', 'mechanical: lowered net, lighter ball — success and confidence; feel differs from real serve', 'combination of visual + brief verbal is best for beginners', 'feedback: positive, simple, extrinsic, KR (did it go over?)', 'as they move to associative stage, more verbal and KP'] }
  ],
  sims: ['guidance', 'stagematch'], gens: []
});

TOPICS.push({
  id: '4.4', unit: '4', area: 'psych', ref: 'Mental preparation and motivation', title: 'Mental preparation and motivation', short: 'Imagery, visualisation, mental rehearsal; intrinsic and extrinsic motivation',
  summary: 'How mental preparation — imagery, visualisation and mental rehearsal — improves motivation, confidence and performance; and the two types of motivation, intrinsic and extrinsic, and how they link to adherence and sporting success.',
  spec: [
    'How mental preparation can help with motivation and improve performance: imagery, visualisation, mental rehearsal',
    'Types of motivation: intrinsic and extrinsic',
    'Links of motivation to adherence and sporting success; links to well-being'
  ],
  learn: [
    { h: 'Mental preparation', html: `
<div class="tbl"><table><tr><th>Technique</th><th>What it involves</th><th>Example</th></tr>
<tr><td><b>Imagery</b></td><td>Creating or recreating an experience in the mind using all the senses — sights, sounds, the feel of the movement. Can also be used to imagine a calm place to relax.</td><td>A footballer recalls the feeling of scoring a perfect penalty.</td></tr>
<tr><td><b>Visualisation</b></td><td>Seeing a picture of the successful performance or outcome in the mind’s eye.</td><td>A high jumper sees themselves clearing the bar.</td></tr>
<tr><td><b>Mental rehearsal</b></td><td>Going through the skill step by step in the mind before performing it, without moving.</td><td>A gymnast runs through a routine before mounting the beam; a diver before a dive.</td></tr></table></div>
<div class="box good"><b class="lbl">Benefits</b><p>Increases confidence and motivation; controls anxiety and nerves; improves concentration and focus; helps the performer get “in the zone”; prepares the muscles and nervous system; useful when injured (practice without physical stress). Works best for closed, self-paced skills and for experienced performers who know what success looks and feels like.</p></div>` },
    { h: 'Motivation', html: `
<p><b>Motivation</b> is the drive to succeed — the internal and external forces that make a person start, continue and try hard in an activity.</p>
<div class="tbl"><table><tr><th>Type</th><th>Meaning</th><th>Examples</th></tr>
<tr><td><b>Intrinsic</b></td><td>From within — doing the activity for its own sake</td><td>Enjoyment, fun, satisfaction, pride, the challenge, feeling healthy</td></tr>
<tr><td><b>Extrinsic</b></td><td>From outside — rewards or pressure from others</td><td>Tangible: trophies, medals, money, certificates. Intangible: praise, applause, recognition, selection</td></tr></table></div>
<div class="tbl"><table><tr><th></th><th>Advantages</th><th>Disadvantages</th></tr>
<tr><td>Intrinsic</td><td>Longer lasting; leads to <b>adherence</b>; performer keeps trying even when losing</td><td>Hard to create in someone who does not enjoy the activity</td></tr>
<tr><td>Extrinsic</td><td>Attracts beginners; quick boost; recognises achievement</td><td>Can reduce intrinsic motivation if over-used; motivation may disappear when rewards stop; pressure → anxiety</td></tr></table></div>
<div class="box why"><b class="lbl">Adherence and success</b><p>People with strong intrinsic motivation are more likely to keep exercising for life (health and well-being) and to keep training through setbacks (sporting success). Rewards are best used to help beginners start and to celebrate progress — not as the only reason to take part.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain how mental rehearsal could help a basketball player taking free throws. (2 marks)', s: ['The player goes through the shot step by step in their mind before shooting…', '…which improves concentration and confidence and controls anxiety, so the shot is more likely to go in.'], a: 'Run through shot mentally → focus, confidence, calm.' },
    { q: 'Give one example of intrinsic and one example of extrinsic motivation. (2 marks)', s: ['Intrinsic: enjoying the game / satisfaction from improving.', 'Extrinsic: winning a trophy / praise from the coach / prize money.'], a: 'Enjoyment v trophy/praise.' }
  ],
  pitfalls: ['Saying praise is intrinsic — praise comes from others, so it is extrinsic (intangible).', 'Treating imagery, visualisation and mental rehearsal as identical without describing each.', 'Saying extrinsic motivation is always bad — it helps beginners; it is over-reliance that is the problem.', 'Not linking motivation to adherence when the question asks about health.'],
  cards: [
    ['Imagery?', 'Creating/recreating an experience in the mind using the senses.'], ['Visualisation?', 'Seeing a picture of successful performance in the mind.'], ['Mental rehearsal?', 'Going through a skill step by step in the mind without moving.'],
    ['Benefits of mental preparation?', 'Confidence, motivation, focus, controls anxiety, in the zone.'], ['Motivation?', 'The drive to succeed.'], ['Intrinsic motivation?', 'From within — enjoyment, satisfaction, pride.'],
    ['Extrinsic motivation?', 'From outside — rewards, trophies, praise.'], ['Tangible extrinsic reward?', 'Something you can touch — trophy, medal, money.'], ['Intangible extrinsic reward?', 'Praise, applause, recognition.'],
    ['Which motivation best supports adherence?', 'Intrinsic.'], ['Danger of over-using rewards?', 'Can reduce intrinsic motivation; drive disappears when rewards stop.']
  ],
  quiz: [
    { q: 'Playing football because you love it is…', o: ['intrinsic motivation', 'extrinsic motivation', 'mechanical guidance', 'knowledge of results'], x: 'From within.' },
    { q: 'A medal is a…', o: ['tangible extrinsic reward', 'intangible extrinsic reward', 'intrinsic reward', 'form of guidance'], x: 'You can touch it.' },
    { q: 'Praise from a coach is…', o: ['extrinsic (intangible)', 'intrinsic', 'tangible', 'manual guidance'], x: 'From someone else.' },
    { q: 'Going through a routine in your head step by step is…', o: ['mental rehearsal', 'manual guidance', 'knowledge of performance', 'warm-up'], x: 'Mental practice.' },
    { q: 'Mental preparation helps performance by…', o: ['improving focus and controlling anxiety', 'increasing lactic acid', 'raising resting heart rate', 'replacing physical training entirely'], x: 'Psychological benefits.' },
    { q: 'Which type of motivation is longest lasting?', o: ['Intrinsic', 'Extrinsic', 'Tangible', 'Negative'], x: 'Enjoyment persists.' },
    { q: 'A high jumper seeing themselves clear the bar is using…', o: ['visualisation', 'mechanical guidance', 'KR', 'variance'], x: 'Mental picture.' }
  ],
  exam: [
    { q: 'Define intrinsic motivation. [1]', m: 1, ms: ['motivation from within / doing the activity for its own sake / enjoyment, satisfaction'] },
    { q: 'Describe how a golfer could use imagery before a putt. [2]', m: 2, ms: ['creates a picture/feel of the putt in the mind using the senses', 'e.g. sees the line, feels the stroke, hears the ball drop — or imagines a calm place to relax'] },
    { q: 'Many teenagers stop playing sport when they leave school.', parts: [
      { q: 'Evaluate the use of intrinsic and extrinsic motivation to help teenagers adhere to physical activity. [9]', m: 9, lv: true, ms: ['intrinsic — enjoyment, fun, satisfaction, friends — long-lasting → adherence', 'how to build it: choice of activity, success, variety, social element, achievable goals', 'extrinsic — tangible (certificates, kit, discounts) and intangible (praise, recognition)', 'extrinsic attracts beginners / gives a quick boost', 'over-reliance on extrinsic → motivation stops when rewards stop / can reduce intrinsic motivation', 'pressure to win can cause anxiety and drop-out', 'mental preparation/goal setting can support confidence and motivation', 'conclusion: use extrinsic to start, develop intrinsic for long-term adherence and well-being'] }
    ], tag: 'ext' }
  ],
  sims: ['motivsort'], gens: []
});

TOPICS.push({
  id: '4.5', unit: '4', area: 'psych', ref: 'Characteristics of a skilled performance; classification of skills', title: 'Skilled performance and classification of skills', short: 'Characteristics of skill; basic–complex, open–closed, self–externally paced',
  summary: 'What makes a performance skilled — technique, consistency, accuracy, efficiency, effectiveness, confidence, control and aesthetics — and how skills are classified on continua: basic–complex, open–closed and self-paced–externally paced.',
  spec: [
    'Characteristics of a skilled performance: technique, consistency, accuracy, efficiency, effectiveness, confidence, control, aesthetics',
    'Classification of activities along continua: basic/complex, open/closed, self/externally paced',
    'Connections between the classification of a skill and the type of practice'
  ],
  learn: [
    { h: 'Characteristics of a skilled performance', html: `
<div class="tbl"><table><tr><th>Characteristic</th><th>Meaning</th></tr>
<tr><td><b>Technique</b></td><td>Correct, well-co-ordinated movements</td></tr>
<tr><td><b>Consistency</b></td><td>Able to repeat the skill to a high standard time after time</td></tr>
<tr><td><b>Accuracy</b></td><td>Achieves the intended target (e.g. a pass to a team-mate’s feet)</td></tr>
<tr><td><b>Efficiency</b></td><td>No wasted energy or unnecessary movement; looks effortless</td></tr>
<tr><td><b>Effectiveness</b></td><td>Achieves the goal of the skill (e.g. scores, beats the defender)</td></tr>
<tr><td><b>Confidence</b></td><td>Performer believes they will succeed</td></tr>
<tr><td><b>Control</b></td><td>Movements are controlled, even under pressure</td></tr>
<tr><td><b>Aesthetics</b></td><td>The movement looks good / pleasing to watch</td></tr></table></div>
<p>A skilled performance is <b>learned</b>, with a pre-determined outcome, achieved with maximum certainty and minimum time and energy. Compare an expert’s smooth, consistent tennis serve with a beginner’s.</p>` },
    { h: 'Classification continua', html: `
[[d:continua]]
<div class="tbl"><table><tr><th>Continuum</th><th>One end</th><th>Other end</th></tr>
<tr><td><b>Basic – complex</b></td><td><b>Basic</b>: simple, few decisions, little information to process, easy to learn (e.g. running, a simple chest pass)</td><td><b>Complex</b>: many decisions, lots of information, high co-ordination (e.g. a tennis serve, a somersault with a twist, a rugby pass under pressure)</td></tr>
<tr><td><b>Open – closed</b></td><td><b>Open</b>: environment changes all the time; performer must adapt and make decisions (e.g. a pass in a football match)</td><td><b>Closed</b>: stable environment, not affected by others; same each time (e.g. a free throw, a golf putt, a gymnastics vault)</td></tr>
<tr><td><b>Self-paced – externally paced</b></td><td><b>Self-paced</b>: performer controls when and how fast to start (e.g. a tennis serve, a javelin throw)</td><td><b>Externally paced</b>: timing set by others or the environment (e.g. a sprint start, receiving a serve, a goalkeeper saving a shot)</td></tr></table></div>
<p>Skills are placed on a <b>continuum</b> (a line) rather than in a box, because most skills have features of both ends. Always <b>justify</b> the placement.</p>
<div class="box tip"><b class="lbl">Link to practice (4.6)</b><p>Closed, basic skills → fixed practice. Open skills → varied practice. Complex skills → part practice (or whole–part–whole).</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Classify a penalty kick in football on the open–closed continuum. Justify your answer. (2 marks)', s: ['Closer to the closed end.', 'The environment is stable — the ball is still, the distance fixed — though the goalkeeper adds some unpredictability.'], a: 'Mostly closed — stable environment.' },
    { q: 'Describe two characteristics of a skilled performance in a named activity. (2 marks)', s: ['Consistency — e.g. a netball shooter scores most of their shots.', 'Efficiency — e.g. a swimmer’s stroke wastes no energy.'], a: 'Two characteristics linked to the activity.' }
  ],
  pitfalls: ['Putting a skill at one end without justification — explain WHY (environment, decisions, timing).', 'Confusing open/closed (environment) with self/externally paced (who controls timing).', 'Saying a skill is “easy” for basic — say it has few decisions and little information to process.', 'Mixing up efficiency (no wasted energy) and effectiveness (achieves the goal).'],
  cards: [
    ['Eight characteristics of a skilled performance?', 'Technique, consistency, accuracy, efficiency, effectiveness, confidence, control, aesthetics.'], ['Efficiency?', 'No wasted energy or movement.'], ['Aesthetics?', 'Pleasing to watch.'],
    ['Basic skill?', 'Few decisions, little information, simple (e.g. running).'], ['Complex skill?', 'Many decisions, lots of information, high co-ordination (e.g. tennis serve).'], ['Open skill?', 'Environment constantly changing; must adapt (e.g. a pass in a match).'],
    ['Closed skill?', 'Stable environment; same each time (e.g. free throw).'], ['Self-paced skill?', 'Performer controls timing (e.g. javelin throw).'], ['Externally paced skill?', 'Timing set by others/environment (e.g. sprint start).'],
    ['Why use a continuum?', 'Most skills have features of both ends.']
  ],
  quiz: [
    { q: 'A golf putt is near the…', o: ['closed end', 'open end', 'externally paced end', 'complex end only'], x: 'Stable environment.' },
    { q: 'Receiving a serve in tennis is…', o: ['externally paced', 'self-paced', 'closed', 'basic'], x: 'Timing set by opponent.' },
    { q: 'A pass in a hockey match is mostly…', o: ['open', 'closed', 'self-paced', 'basic'], x: 'Changing environment.' },
    { q: 'Achieving a skill with no wasted energy shows…', o: ['efficiency', 'aesthetics', 'accuracy', 'confidence'], x: 'Efficient.' },
    { q: 'A skill with many decisions and lots of information is…', o: ['complex', 'basic', 'closed', 'self-paced'], x: 'Complex.' },
    { q: 'A sprint start is externally paced because…', o: ['the starter’s gun controls the timing', 'the runner chooses when to go', 'it is a basic skill', 'it is open'], x: 'Others set the timing.' },
    { q: 'Repeating a skill successfully time after time shows…', o: ['consistency', 'aesthetics', 'adherence', 'variance'], x: 'Consistency.' }
  ],
  exam: [
    { q: 'Identify two characteristics of a skilled performance. [2]', m: 2, ms: ['first characteristic from: technique, consistency, accuracy, efficiency, effectiveness, confidence, control, aesthetics', 'a second, different characteristic from the list'] },
    { q: 'Place a basketball free throw on the open–closed and self–externally paced continua. Justify each. [4]', m: 4, ms: ['closed', 'stable environment / no opponents interfering / same each time', 'self-paced', 'player decides when to shoot (within the time allowed)'] },
    { q: 'Using examples, analyse why skills are classified on continua rather than into fixed categories. [6]', m: 6, lv: true, ms: ['most skills show characteristics of both ends', 'e.g. a penalty kick: mostly closed but goalkeeper adds unpredictability', 'e.g. a tennis serve: self-paced but complex', 'the same skill changes with context — a pass in a drill (closed) v in a match (open)', 'continua let coaches judge where a skill sits and choose practice/guidance', 'link to practice: closed → fixed; open → varied; complex → part', 'justification is needed for placement'] }
  ],
  sims: ['classifyG'], gens: []
});

TOPICS.push({
  id: '4.6', unit: '4', area: 'psych', ref: 'Types of practice', title: 'Types of practice', short: 'Whole and part practice; fixed and varied practice',
  summary: 'How to practise: whole practice and part practice (and whole–part–whole), fixed and varied practice; when to use each, depending on the skill (classification), the learner (stage of learning) and the situation.',
  spec: [
    'Types of practice: whole/part, fixed/varied',
    'Links between practice, the learner and the type of skill',
    'How concepts in sports psychology contribute to improving performance'
  ],
  learn: [
    { h: 'Whole and part practice', html: `
<div class="tbl"><table><tr><th>Type</th><th>What it is</th><th>Best for</th><th>Advantages / disadvantages</th></tr>
<tr><td><b>Whole practice</b></td><td>The skill is practised in its entirety, as it would be performed</td><td>Basic skills; skills that are fast or hard to break down (e.g. a cartwheel, a golf swing, a sprint start); experienced learners</td><td>+ Learner gets the feel and flow (kinaesthesis) of the whole skill; time-efficient. − Can overwhelm beginners with complex skills; can be unsafe</td></tr>
<tr><td><b>Part practice</b></td><td>The skill is broken into parts which are practised separately (and then put together)</td><td>Complex skills that can be broken down (e.g. the arm action of front crawl, the toss in a tennis serve, the triple jump phases); beginners; dangerous skills</td><td>+ Focus on weak parts; less overload; safer; builds confidence. − Loses the flow; transferring parts back to the whole can be difficult; time-consuming</td></tr>
<tr><td><b>Whole–part–whole</b></td><td>Try the whole, practise a weak part, then return to the whole</td><td>Most learners — combines both</td><td>+ Keeps the feel of the whole while fixing errors</td></tr></table></div>` },
    { h: 'Fixed and varied practice', html: `
<div class="tbl"><table><tr><th>Type</th><th>What it is</th><th>Best for</th><th>Example</th></tr>
<tr><td><b>Fixed practice</b> (drill)</td><td>Repeating the skill in the same way, in the same conditions, many times</td><td><b>Closed</b> skills; beginners grooving a technique</td><td>Practising 50 free throws from the same spot; repeated golf putts</td></tr>
<tr><td><b>Varied practice</b></td><td>Practising the skill in different situations and conditions, often game-like</td><td><b>Open</b> skills that must be adapted; experienced learners</td><td>Passing in a 3 v 2 game, with defenders and changing positions</td></tr></table></div>
<div class="box why"><b class="lbl">Choosing practice</b><p>Consider: the <b>skill</b> (open/closed, basic/complex), the <b>learner</b> (stage of learning, age, motivation, fitness) and the <b>situation</b> (time, equipment, safety). A beginner learning a complex open skill might start with fixed part practice, then move on to varied whole practice in games.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Justify the use of part practice when teaching the front crawl. (2 marks)', s: ['Front crawl is complex and can be broken into parts (legs, arms, breathing).', 'Each part can be practised separately (e.g. leg kick with a float) before being put together — less overload for a beginner.'], a: 'Complex skill, easily split; reduces overload.' },
    { q: 'Explain why varied practice suits an open skill such as passing in hockey. (2 marks)', s: ['The environment in a match keeps changing.', 'Varied practice develops the ability to adapt the pass to different situations and make decisions.'], a: 'Prepares for changing situations; decision making.' }
  ],
  pitfalls: ['Recommending part practice for a fast, continuous skill that cannot be broken down (e.g. a cartwheel).', 'Confusing fixed practice (same conditions) with whole practice (the whole skill).', 'Not linking the choice of practice to BOTH the skill and the learner.', 'Saying varied practice is always better — closed skills benefit from fixed practice.'],
  cards: [
    ['Whole practice?', 'Practising the skill in its entirety.'], ['Part practice?', 'Breaking the skill into parts and practising them separately.'], ['Whole–part–whole?', 'Try the whole, practise a weak part, return to the whole.'],
    ['Fixed practice?', 'Repeating a skill in the same way and conditions (drill).'], ['Varied practice?', 'Practising a skill in changing, game-like situations.'], ['Practice for closed skills?', 'Fixed practice.'],
    ['Practice for open skills?', 'Varied practice.'], ['Practice for complex skills that can be broken down?', 'Part practice (or whole–part–whole).'], ['Advantage of whole practice?', 'Keeps the feel and flow of the skill.'],
    ['Disadvantage of part practice?', 'Loses flow; hard to transfer back to the whole.']
  ],
  quiz: [
    { q: 'Practising 50 free throws from the same spot is…', o: ['fixed practice', 'varied practice', 'part practice', 'mental rehearsal'], x: 'Same conditions.' },
    { q: 'A 3 v 2 passing game is…', o: ['varied practice', 'fixed practice', 'part practice', 'manual guidance'], x: 'Changing situations.' },
    { q: 'Practising just the leg kick in swimming is…', o: ['part practice', 'whole practice', 'fixed only', 'varied only'], x: 'One part.' },
    { q: 'Whole practice is best for skills that are…', o: ['fast and hard to break into parts', 'very complex and dangerous', 'open only', 'unfamiliar to experts'], x: 'e.g. a cartwheel.' },
    { q: 'Varied practice is best for…', o: ['open skills', 'closed skills', 'all beginners only', 'warm-ups only'], x: 'Adaptability.' },
    { q: 'A disadvantage of part practice is…', o: ['the flow of the skill is lost', 'it overloads beginners', 'it is always unsafe', 'it cannot be used for swimming'], x: 'Transfer problem.' },
    { q: 'Try the whole skill, work on one weak part, then the whole again is…', o: ['whole–part–whole', 'fixed practice', 'varied practice', 'visualisation'], x: 'Combination.' }
  ],
  exam: [
    { q: 'Describe fixed practice. [1]', m: 1, ms: ['repeating a skill in the same way / same conditions / drills'] },
    { q: 'Explain why a coach might use part practice for a beginner learning a tennis serve. [3]', m: 3, ms: ['tennis serve is complex', 'can be broken into parts — ball toss, backswing, contact, follow-through', 'beginner (cognitive stage) — less information overload', 'focus on weak parts / build confidence before putting it together'] },
    { q: 'A football coach is working with a group of beginners.', parts: [
      { q: 'Evaluate the use of whole, part, fixed and varied practice to develop the beginners’ passing. [9]', m: 9, lv: true, ms: ['passing in football is an open, fairly basic skill in a match', 'beginners — cognitive stage, need success and simple information', 'fixed practice: passing in pairs, unopposed — grooves technique, builds confidence', 'fixed practice alone does not prepare for decisions in a match', 'varied practice: small-sided games, moving targets, defenders — adapt pass, decision making, open skill', 'varied too early can overwhelm and cause failure', 'whole practice suits passing — it is basic and quick; part practice could isolate e.g. body shape/contact surface if a fault appears', 'progression from fixed to varied as they reach associative stage', 'conclusion: begin with fixed whole practice, move to varied, game-like practice'] }
    ], tag: 'ext' }
  ],
  sims: ['practiceG'], gens: []
});
