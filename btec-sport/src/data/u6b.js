/* ==========================================================
   UNIT 6 · SPORTS PSYCHOLOGY (internal) — part 2
   B Group dynamics · C Psychological skills training
   ========================================================== */
TOPICS.push({
  id: '6.6', unit: '6', area: 'psych', ref: 'B1 Group processes', title: 'Group processes', short: 'Forming, storming, norming, performing; Steiner’s model; Ringelmann effect and social loafing',
  summary: 'How groups develop and how productive they are: Tuckman’s four stages of group development (forming, storming, norming, performing), Steiner’s model of group productivity (actual productivity = potential productivity − losses due to faulty processes), and the Ringelmann effect and social loafing.',
  spec: [
    'The four stages of group development: forming, storming, norming and performing',
    'Steiner’s model of group productivity',
    'The Ringelmann effect and social loafing'
  ],
  learn: [
    { h: 'Stages of group development', html: `
[[d:tuckman]]
<div class="tbl"><table><tr><th>Stage</th><th>What happens</th></tr>
<tr><td><b>Forming</b></td><td>members get to know each other, find out about the task and their roles; rely on the leader</td></tr>
<tr><td><b>Storming</b></td><td>conflict as members compete for roles and status and challenge the leader</td></tr>
<tr><td><b>Norming</b></td><td>conflicts are resolved; norms, roles and cooperation develop; cohesion increases</td></tr>
<tr><td><b>Performing</b></td><td>the group works together effectively towards shared goals; roles are clear; focus on performance</td></tr></table></div>` },
    { h: 'Steiner’s model and social loafing', html: `
<p style="text-align:center;font-weight:700">actual productivity = potential productivity − losses due to faulty group processes</p>
<ul><li><b>Potential productivity</b>: the best possible performance given the individuals’ abilities and resources.</li>
<li><b>Faulty processes</b>: <b>coordination losses</b> (poor timing, teamwork, communication, tactics) and <b>motivation losses</b> (members not giving full effort).</li></ul>
[[d:ringelmann]]
<p>The <b>Ringelmann effect</b>: as group size increases, the average performance of each individual decreases (shown in rope-pulling studies). <b>Social loafing</b> is the motivational part of this — individuals reduce effort in a group because their contribution is not identifiable, they lack confidence, they think others will do the work, or they do not value the goal.</p>
<div class="box tip"><b class="lbl">Reducing social loafing</b><p>Make individual effort identifiable (statistics, video); give specific roles and responsibilities; set individual and team goals; build cohesion; give feedback and praise for effort; keep groups smaller.</p></div>` }
  ],
  eqs: [['"actual productivity" = "potential productivity" - "faulty processes"', 'Steiner']],
  worked: [
    { q: 'Using Steiner’s model, explain why a team of talented players may underperform. (3 marks)', s: ['Actual productivity = potential productivity − losses due to faulty processes.', 'Coordination losses — players do not work together, poor communication or tactics.', 'Motivation losses — some players social loaf, so actual performance falls below potential.'], a: 'Faulty processes (coordination + motivation losses).' }
  ],
  pitfalls: ['Getting Tuckman’s stages in the wrong order.', 'Treating the Ringelmann effect and social loafing as identical — loafing is the motivational cause.', 'Forgetting coordination losses in Steiner’s model.', 'Giving strategies without explaining why they reduce loafing.'],
  cards: [
    ['Tuckman’s four stages?', 'Forming, storming, norming, performing.'], ['Storming?', 'Conflict over roles and status.'], ['Norming?', 'Norms, roles and cooperation develop.'],
    ['Steiner’s model?', 'Actual productivity = potential productivity − losses due to faulty processes.'], ['Two faulty processes?', 'Coordination losses and motivation losses.'], ['Ringelmann effect?', 'Individual performance decreases as group size increases.'],
    ['Social loafing?', 'Individuals reduce effort in a group.'], ['Reduce social loafing?', 'Identify individual effort, specific roles, goals, feedback, cohesion.']
  ],
  quiz: [
    { q: 'Conflict over roles happens at which stage?', o: ['Storming', 'Forming', 'Norming', 'Performing'], x: 'Tuckman.' },
    { q: 'Steiner: actual productivity = potential productivity − …', o: ['losses due to faulty processes', 'social cohesion', 'leadership', 'arousal'], x: 'Faulty processes.' },
    { q: 'A player hiding in a team and not trying hard is…', o: ['social loafing', 'storming', 'reversal', 'catastrophe'], x: 'Loafing.' },
    { q: 'The Ringelmann effect shows that as group size increases, individual performance…', o: ['decreases', 'increases', 'stays the same', 'doubles'], x: 'Rope pull.' },
    { q: 'Using GPS statistics to show each player’s work rate helps reduce…', o: ['social loafing', 'cohesion', 'self-efficacy', 'IZOF'], x: 'Identifiability.' },
    { q: 'Two players arguing over penalties is which stage?', o: ['Storming', 'Forming', 'Norming', 'Performing'], x: 'Conflict.' },
    { q: 'Social loafing is…', o: ['reduced individual effort in a group', 'increased effort when watched', 'a leadership style', 'a type of anxiety'], x: 'Ringelmann effect.' }
  ],
  exam: [
    { q: 'Describe Tuckman’s four stages of group development. [4]', m: 4, tag: 'nea', ms: ['forming — getting to know each other / the task', 'storming — conflict over roles and status', 'norming — norms, roles and cooperation develop', 'performing — work together effectively towards goals'] },
    { q: 'Explain strategies a coach could use to reduce social loafing in a team. [4]', m: 4, tag: 'nea', ms: ['make individual effort identifiable (statistics, video)', 'give each player a specific role/responsibility', 'set individual and team goals', 'praise and feedback on effort; build cohesion; smaller groups'] }
  ],
  sims: ['loafing', 'tuckmansort'], gens: ['steiner']
});

TOPICS.push({
  id: '6.7', unit: '6', area: 'psych', ref: 'B2 Cohesion in effective group performance', title: 'Cohesion', short: 'Task and social cohesion; Carron’s antecedents; cohesion and performance; strategies',
  summary: 'Cohesion — the tendency of a group to stick together in pursuit of its goals: task and social cohesion, Carron’s antecedents (environmental, personal, leadership and team factors), the relationship between cohesion and performance, and strategies to develop an effective, cohesive group.',
  spec: [
    'Task and social cohesion and how they create an effective team climate',
    'Factors affecting cohesion: environmental factors, member characteristics, leadership styles, team elements (Carron’s antecedents)',
    'Relationship between cohesion and performance',
    'Strategies to develop an effective group and cohesion'
  ],
  learn: [
    { h: 'Task and social cohesion', html: `
<div class="tbl"><table><tr><th>Type</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>Task cohesion</b></td><td>members work together to achieve a shared goal</td><td>a rowing crew committed to winning, even if not friends</td></tr>
<tr><td><b>Social cohesion</b></td><td>members like each other and enjoy each other’s company</td><td>a club team that socialises together</td></tr></table></div>
<p>Task cohesion is more strongly linked to performance, especially in <b>interactive</b> sports (football, netball) that need coordination. Very high social cohesion can sometimes harm performance (e.g. friends avoid hard decisions or form cliques).</p>` },
    { h: 'Carron’s antecedents', html: `
[[d:carron]]
<div class="tbl"><table><tr><th>Factor</th><th>Examples</th></tr>
<tr><td><b>Environmental</b></td><td>group size (smaller groups more cohesive), contracts, geography, time together</td></tr>
<tr><td><b>Personal</b> (member characteristics)</td><td>similar goals, motivation, background, commitment, satisfaction; personality</td></tr>
<tr><td><b>Leadership</b></td><td>leader’s style, behaviour, communication and decisions; democratic styles often build cohesion</td></tr>
<tr><td><b>Team</b> (team elements)</td><td>shared experiences of success/failure, stability of the squad, clear roles, team norms, desire for group success</td></tr></table></div>
<div class="box tip"><b class="lbl">Strategies to build cohesion</b><p>Clear, shared team goals; clear roles; team-building activities and social events; consistent squad (stability); good communication; involve players in decisions; reward team effort; deal quickly with conflict and cliques.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain the difference between task and social cohesion. (2 marks)', s: ['Task cohesion is how well members work together to achieve a shared goal.', 'Social cohesion is how much members like each other and enjoy each other’s company.'], a: 'Working together for a goal v liking each other.' }
  ],
  pitfalls: ['Saying social cohesion always improves performance.', 'Forgetting one of Carron’s four antecedents.', 'Listing strategies without explaining which type of cohesion they build.', 'Not linking cohesion to interactive v co-active sports.'],
  cards: [
    ['Cohesion?', 'The tendency of a group to stick together in pursuit of its goals.'], ['Task cohesion?', 'Working together to achieve a shared goal.'], ['Social cohesion?', 'Liking each other and enjoying each other’s company.'],
    ['Carron’s antecedents?', 'Environmental, personal, leadership, team factors.'], ['Which cohesion is more linked to performance?', 'Task cohesion, especially in interactive sports.'], ['Strategies?', 'Shared goals, clear roles, team building, stability, communication, involvement.']
  ],
  quiz: [
    { q: 'Players committed to a shared goal even though they are not friends show…', o: ['task cohesion', 'social cohesion', 'social loafing', 'storming'], x: 'Task.' },
    { q: 'Group size is which of Carron’s factors?', o: ['Environmental', 'Personal', 'Leadership', 'Team'], x: 'Environmental.' },
    { q: 'Squad stability and shared success are…', o: ['team factors', 'environmental factors', 'personal factors', 'leadership factors'], x: 'Team elements.' },
    { q: 'Task cohesion is most important in…', o: ['interactive team sports', 'individual time trials', 'golf', 'archery'], x: 'Coordination.' },
    { q: 'Which strategy builds cohesion?', o: ['Setting shared team goals', 'Encouraging cliques', 'Constantly changing the squad', 'Ignoring conflict'], x: 'Shared goals.' },
    { q: 'Task cohesion is…', o: ['working together to achieve a shared goal', 'liking each other socially', 'team size', 'a leadership style'], x: 'Task.' },
    { q: 'In Carron’s model, group size is an…', o: ['environmental factor', 'personal factor', 'leadership factor', 'team factor'], x: 'Environmental.' }
  ],
  exam: [
    { q: 'Describe how group cohesion contributes to the development of a successful sports team. [6]', m: 6, lv: true, tag: 'nea', ms: ['task cohesion — coordinated effort towards shared goals; fewer coordination losses', 'social cohesion — positive atmosphere, support, commitment, adherence', 'Carron’s antecedents: environmental, personal, leadership, team factors with examples', 'links to Steiner — reduces faulty processes', 'risks of high social cohesion (cliques, avoiding conflict)', 'strategies to develop cohesion with a named team'] }
  ],
  sims: ['carronsort'], gens: []
});

TOPICS.push({
  id: '6.8', unit: '6', area: 'psych', ref: 'B3 Leadership in creating effective groups', title: 'Leadership', short: 'Trait, behavioural, interactional and multidimensional approaches; prescribed v emergent; autocratic v democratic',
  summary: 'How leaders create effective groups: the trait, behavioural and interactional approaches and Chelladurai’s multidimensional model; prescribed and emergent leaders; and autocratic and democratic leadership styles and when each is effective.',
  spec: [
    'Theories of leadership: trait approach, behavioural approach, interactional approach, multidimensional model',
    'Prescribed and emergent leaders and how this might affect a sports group',
    'Leadership styles: autocratic, democratic'
  ],
  learn: [
    { h: 'Theories of leadership', html: `
<div class="tbl"><table><tr><th>Approach</th><th>Key idea</th></tr>
<tr><td><b>Trait approach</b> (“great man” theory)</td><td>leaders are born with leadership qualities (confidence, intelligence, assertiveness) that work in any situation</td></tr>
<tr><td><b>Behavioural approach</b></td><td>leadership is learnt by observing and copying effective leaders (social learning) — anyone can become a leader</td></tr>
<tr><td><b>Interactional approach</b></td><td>effective leadership depends on the interaction between the leader’s qualities and the <b>situation</b> (e.g. Fiedler — task-oriented v person-oriented leaders suit different situations)</td></tr>
<tr><td><b>Multidimensional model</b> (Chelladurai)</td><td>performance and satisfaction are highest when the leader’s <b>actual</b> behaviour matches both the <b>required</b> behaviour (what the situation demands) and the <b>preferred</b> behaviour (what the group wants)</td></tr></table></div>
[[d:chelladurai]]` },
    { h: 'Types and styles of leader', html: `
<ul><li><b>Prescribed leader</b>: appointed from outside the group (e.g. a coach appointed by the club). May lack the group’s respect at first; can bring new ideas; may cause conflict if the group preferred another leader.</li>
<li><b>Emergent leader</b>: comes from within the group because of their skill or respect (e.g. a player who becomes captain). Already respected and understands the group; may find it hard to discipline former equals.</li></ul>
<div class="tbl"><table><tr><th>Style</th><th>Features</th><th>Best when…</th></tr>
<tr><td><b>Autocratic</b></td><td>leader makes decisions alone; task-oriented; gives commands</td><td>large groups; dangerous situations; little time (e.g. a time-out); beginners; hostile groups; male team sports (traditionally)</td></tr>
<tr><td><b>Democratic</b></td><td>leader shares decisions with the group; person-oriented; listens</td><td>small, experienced groups; time available; individual sports; building cohesion and motivation</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain one advantage and one disadvantage of an emergent leader. (2 marks)', s: ['Advantage: already respected by the group and understands its members.', 'Disadvantage: may find it hard to discipline friends / former equals; jealousy.'], a: 'Respect v difficulty disciplining peers.' },
    { q: 'When might an autocratic style be most effective? (2 marks)', s: ['In a situation needing quick decisions, e.g. a 1-minute time-out in basketball…', '…or when safety is at risk, or with a large or inexperienced group.'], a: 'Quick decisions, danger, large/novice groups.' }
  ],
  pitfalls: ['Confusing prescribed (appointed externally) and emergent (from within).', 'Saying one leadership style is always best.', 'Getting Chelladurai’s three behaviours wrong (required, actual, preferred).', 'Describing the trait approach as learnt.'],
  cards: [
    ['Trait approach?', 'Leaders are born with leadership qualities.'], ['Behavioural approach?', 'Leadership is learnt by observing effective leaders.'], ['Interactional approach?', 'Leader qualities interact with the situation.'],
    ['Chelladurai’s multidimensional model?', 'Match required, actual and preferred behaviour → performance and satisfaction.'], ['Prescribed leader?', 'Appointed from outside the group.'], ['Emergent leader?', 'Comes from within the group.'],
    ['Autocratic style?', 'Leader decides alone; task-oriented.'], ['Democratic style?', 'Decisions shared; person-oriented.']
  ],
  quiz: [
    { q: 'A coach appointed by the club board is a…', o: ['prescribed leader', 'emergent leader', 'social loafer', 'fixator'], x: 'From outside.' },
    { q: 'Leaders are “born not made” is the…', o: ['trait approach', 'behavioural approach', 'interactional approach', 'multidimensional model'], x: 'Great man theory.' },
    { q: 'Chelladurai’s model compares required, actual and…', o: ['preferred behaviour', 'emergent behaviour', 'trait behaviour', 'social behaviour'], x: 'Three behaviours.' },
    { q: 'A captain consulting the team about tactics is using…', o: ['a democratic style', 'an autocratic style', 'social loafing', 'prescribed authority'], x: 'Shared decisions.' },
    { q: 'An autocratic style is most suitable when…', o: ['a quick decision is needed', 'there is plenty of time', 'the group is small and expert', 'building social cohesion'], x: 'Time-outs, danger.' },
    { q: 'A captain chosen by team-mates is an…', o: ['emergent leader', 'prescribed leader', 'autocratic leader', 'trait leader'], x: 'From within.' },
    { q: 'An autocratic style suits…', o: ['dangerous situations or large groups with little time', 'a relaxed friendly session always', 'experienced groups wanting a say', 'every situation'], x: 'Quick decisions.' }
  ],
  exam: [
    { q: 'Describe Chelladurai’s multidimensional model of leadership. [3]', m: 3, tag: 'nea', ms: ['required behaviour — what the situation demands', 'preferred behaviour — what the group wants', 'actual behaviour — what the leader does; the closer they match, the better performance and satisfaction'] },
    { q: 'Analyse how group cohesion and leadership can contribute to the success of a sports team. [8]', m: 8, lv: true, tag: 'nea', ms: ['task and social cohesion and their links to performance', 'Carron’s antecedents — leadership is one of them', 'leadership theories: trait, behavioural, interactional, multidimensional (match required/preferred/actual)', 'prescribed v emergent leaders — effect on respect and cohesion', 'autocratic v democratic — matched to situation; democratic can build cohesion', 'links to Steiner and social loafing — leadership reduces faulty processes', 'named team examples', 'reasoned conclusion on the relationship'] }
  ],
  sims: ['leader', 'leadersort'], gens: []
});

TOPICS.push({
  id: '6.9', unit: '6', area: 'psych', ref: 'B4–B5 Impact on performance; sociograms', title: 'Team effectiveness and sociograms', short: 'Positive and negative impacts; constructing and interpreting sociograms',
  summary: 'How group processes, cohesion and leadership impact on a team’s performance — positively (improved performance, clear roles, common goal, clear communication) and negatively (social loafing, misunderstanding, unclear communication, selfishness and greed) — and how sociograms are constructed and used to measure interactions, relationships, cohesion and leadership potential.',
  spec: [
    'Positive impact: improved performance, clear assigned roles, common goal, clear communication',
    'Negative impact: social loafing, misunderstanding, unclear communication, selfishness and greediness',
    'A sociogram monitors interactions, choices or preferences of individuals in a group',
    'Using a sociogram to identify relationships, effectiveness of group processes, cohesion and leadership potential',
    'Construction: interactions within the team, social relations, channels of influence, lines of communication'
  ],
  learn: [
    { h: 'Impact on performance', html: `
<div class="tbl"><table><tr><th>Positive impact</th><th>Negative impact</th></tr>
<tr><td>improved performance</td><td>social loafing</td></tr>
<tr><td>clear assigned roles</td><td>misunderstanding</td></tr>
<tr><td>common goal</td><td>unclear communication</td></tr>
<tr><td>clear communication</td><td>selfishness and greediness</td></tr></table></div>` },
    { h: 'Sociograms', html: `
[[d:sociogram]]
<p>A <b>sociogram</b> is a diagram that shows the interactions, choices or preferences of the members of a group. To construct one:</p>
<ol><li>Ask each member a question privately, e.g. “Who would you most like to <b>train with</b>?” (task), “Who would you <b>socialise</b> with?” (social), or record <b>passes</b>/communication in a match (interactions).</li>
<li>Draw each member as a circle; draw an arrow from the chooser to the person chosen (a two-headed arrow for a mutual choice).</li>
<li>Count the choices each person receives.</li></ol>
<div class="tbl"><table><tr><th>Term</th><th>Meaning</th><th>Implication</th></tr>
<tr><td><b>Star</b></td><td>chosen by many</td><td>leadership potential; influence</td></tr>
<tr><td><b>Isolate</b></td><td>chosen by no one</td><td>low cohesion; risk of loafing or drop-out — coach should integrate them</td></tr>
<tr><td><b>Mutual pair</b></td><td>choose each other</td><td>strong link; good partnership</td></tr>
<tr><td><b>Clique</b></td><td>a sub-group choosing only each other</td><td>can damage team cohesion</td></tr></table></div>
<p>Coaches can use sociograms to pick captains (stars), plan training groups, integrate isolates, break up cliques and track how cohesion and communication change over a season.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'What does an “isolate” on a sociogram show and how could a coach respond? (2 marks)', s: ['An isolate is a member chosen by no one — they may be poorly integrated, reducing cohesion.', 'The coach could pair them with a star in training, give them a role and include them in team-building activities.'], a: 'Unchosen member; integrate them.' }
  ],
  pitfalls: ['Drawing arrows without direction.', 'Not stating the question used to collect the data.', 'Describing the sociogram without interpreting it (stars, isolates, cliques).', 'Forgetting to say how a coach would use the results.'],
  cards: [
    ['Sociogram?', 'Diagram of interactions, choices or preferences in a group.'], ['Star?', 'Member chosen by many — leadership potential.'], ['Isolate?', 'Member chosen by no one.'], ['Mutual choice?', 'Two members choose each other.'],
    ['Clique?', 'Sub-group choosing only each other.'], ['Positive impacts of good group dynamics?', 'Improved performance, clear roles, common goal, clear communication.'], ['Negative impacts?', 'Social loafing, misunderstanding, unclear communication, selfishness and greed.']
  ],
  quiz: [
    { q: 'A player chosen by most of the team on a sociogram is a…', o: ['star', 'isolate', 'clique', 'loafer'], x: 'Many choices.' },
    { q: 'A sociogram can help identify…', o: ['leadership potential', 'VO₂max', 'blood pressure', 'BMI'], x: 'Stars.' },
    { q: 'Which is a negative impact of poor group processes?', o: ['Unclear communication', 'Common goal', 'Clear roles', 'Improved performance'], x: 'Spec list.' },
    { q: 'Three players who only choose each other form a…', o: ['clique', 'mutual pair', 'star', 'prescribed group'], x: 'Sub-group.' },
    { q: 'In a sociogram, a player chosen by nobody is an…', o: ['isolate', 'star', 'mutual pair', 'leader'], x: 'No choices received.' },
    { q: 'A player chosen by most team-mates is a…', o: ['star', 'isolate', 'loafer', 'storming player'], x: 'Popular.' },
    { q: 'Steiner’s model: actual productivity equals…', o: ['potential productivity minus losses due to faulty processes', 'potential plus losses', 'motivation only', 'team size times effort'], x: 'AP = PP − FP.' }
  ],
  exam: [
    { q: 'Explain sociogram results and how they can be used to improve group cohesion and leadership potential in sport. [6]', m: 6, lv: true, tag: 'nea', ms: ['how the sociogram was constructed (question, arrows, mutual choices)', 'identification of stars, isolates, mutual pairs and cliques', 'stars — leadership potential (captain, vice-captain)', 'isolates — integrate through pairing, roles, team building', 'cliques — mix training groups, shared goals', 'repeat over time to monitor cohesion; link to task v social questions'] }
  ],
  sims: ['sociobuild'], gens: []
});

TOPICS.push({
  id: '6.10', unit: '6', area: 'psych', ref: 'C1 Psychological skills', title: 'Psychological skills', short: 'Self-talk; goal setting; relaxation and energising techniques; imagery',
  summary: 'The psychological skills used to improve performance: self-talk (positive and negative; uses), goal setting (short-, medium- and long-term; outcome, process, mastery, competitive and task goals; SMART), arousal control (relaxation — PMR, mind-to-muscle, breathing control, autogenic training, hypnosis; energising — breathing rate, pep talks, music, energising imagery, positive statements) and imagery (visual, auditory, kinaesthetic; uses).',
  spec: [
    'Self-talk: positive, negative; uses — self-confidence, arousal control, pre-performance routines',
    'Goal setting: short-, medium- and long-term; outcome and process, mastery and competitive, task goals; SMART (specific, measurable, achievable, realistic, time-constrained)',
    'Relaxation techniques: progressive muscular relaxation, mind-to-muscle, breathing control, autogenic training, hypnosis',
    'Energising techniques: increasing breathing rate, pep talks, listening to music, energising imagery, positive statements',
    'Imagery: definition; types — visual, auditory, kinaesthetic; uses — relaxation, self-confidence, imagining goals, mental rehearsal, pre-performance routines'
  ],
  learn: [
    { h: 'Self-talk and goal setting', html: `
<p><b>Self-talk</b> is what athletes say to themselves. <b>Positive</b> self-talk (motivational: “come on, you’ve got this”; instructional: “high elbow, follow through”) improves confidence and focus. <b>Negative</b> self-talk (“I always miss these”) reduces confidence and raises anxiety — replace it with positive statements (thought stopping).</p>
<p><b>Uses</b>: build <b>self-confidence</b>; <b>control arousal</b> (calm or psych up); part of <b>pre-performance routines</b> (e.g. before a free kick).</p>
<div class="tbl"><table><tr><th>Goal type</th><th>Meaning</th></tr>
<tr><td><b>Outcome</b></td><td>based on the result — winning, a medal (less controllable)</td></tr>
<tr><td><b>Process</b></td><td>actions/technique needed to perform well (“keep my head still on contact”)</td></tr>
<tr><td><b>Mastery</b></td><td>self-referenced improvement in skill</td></tr>
<tr><td><b>Competitive</b></td><td>comparing with or beating others</td></tr>
<tr><td><b>Task</b></td><td>focused on completing a task to a set standard</td></tr></table></div>
<p>Timescales: <b>short-term</b> (days–weeks) → <b>medium-term</b> (weeks–months) → <b>long-term</b> (season or more). Principles: <b>SMART</b> — specific, measurable, achievable, realistic, time-constrained.</p>` },
    { h: 'Arousal control techniques', html: `
<div class="tbl"><table><tr><th>Relaxation (lower arousal)</th><th>How</th></tr>
<tr><td><b>Progressive muscular relaxation</b> (PMR)</td><td>tense then relax each muscle group in turn, learning to notice and release tension (muscle-to-mind)</td></tr>
<tr><td><b>Mind-to-muscle techniques</b></td><td>using the mind (e.g. calming imagery, meditation) to relax the body</td></tr>
<tr><td><b>Breathing control</b></td><td>slow, deep diaphragmatic breathing (e.g. in for 4, out for 6) to slow heart rate</td></tr>
<tr><td><b>Autogenic training</b></td><td>self-hypnosis: focusing on sensations of warmth and heaviness in body parts</td></tr>
<tr><td><b>Hypnosis</b></td><td>a trained hypnotist induces deep relaxation and suggestion</td></tr></table></div>
<div class="tbl"><table><tr><th>Energising (raise arousal)</th><th>How</th></tr>
<tr><td>Increasing breathing rate</td><td>short, quick breaths to “psych up”</td></tr>
<tr><td>Pep talks</td><td>motivational talk from coach/captain</td></tr>
<tr><td>Listening to music</td><td>upbeat music before competing</td></tr>
<tr><td>Energising imagery</td><td>images of power, speed, energy</td></tr>
<tr><td>Positive statements</td><td>“I’m strong, I’m ready”</td></tr></table></div>` },
    { h: 'Imagery', html: `
<p><b>Imagery</b> is creating or recreating images in the mind rather than physically practising a skill or technique. Best images use all the senses.</p>
<ul><li><b>Visual</b> — seeing the movement (internal: own eyes; external: as if on video).</li><li><b>Auditory</b> — hearing sounds (crowd, ball on racket).</li><li><b>Kinaesthetic</b> — feeling the movement and muscle sensations.</li></ul>
<p><b>Uses</b>: relaxation (calm place); influencing self-confidence (recalling successes); imagining goals; <b>mental rehearsal</b> of skills and tactics; pre-performance routines.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Describe progressive muscular relaxation. (2 marks)', s: ['The athlete tenses a muscle group for a few seconds and then relaxes it…', '…working through the body in turn, learning to recognise and release tension.'], a: 'Tense–relax each muscle group in turn.' },
    { q: 'Give an example of a process goal for a basketball player. (1 mark)', s: ['e.g. “Keep my elbow under the ball and follow through on every free throw.”'], a: 'Technique-focused goal.' }
  ],
  pitfalls: ['Mixing up relaxation and energising techniques.', 'Defining imagery only as “seeing” — include auditory and kinaesthetic.', 'Confusing outcome goals (results) with process goals (technique).', 'Using SMARTER here — Unit 6 uses SMART (time-constrained).'],
  cards: [
    ['Positive self-talk uses?', 'Self-confidence, arousal control, pre-performance routines.'], ['Outcome goal?', 'Based on result — winning.'], ['Process goal?', 'Based on technique/actions.'], ['SMART (Unit 6)?', 'Specific, measurable, achievable, realistic, time-constrained.'],
    ['PMR?', 'Tense and relax each muscle group.'], ['Autogenic training?', 'Self-hypnosis — warmth and heaviness.'], ['Energising techniques?', 'Faster breathing, pep talks, music, energising imagery, positive statements.'],
    ['Imagery?', 'Creating/recreating images in the mind instead of physical practice.'], ['Three types of imagery?', 'Visual, auditory, kinaesthetic.'], ['Kinaesthetic imagery?', 'Imagining the feel of the movement.']
  ],
  quiz: [
    { q: 'Tensing and relaxing each muscle group in turn is…', o: ['progressive muscular relaxation', 'autogenic training', 'a pep talk', 'kinaesthetic imagery'], x: 'PMR.' },
    { q: 'Listening to upbeat music before a match is an…', o: ['energising technique', 'relaxation technique', 'outcome goal', 'isolate'], x: 'Psych up.' },
    { q: 'Imagining the feel of a perfect golf swing is…', o: ['kinaesthetic imagery', 'auditory imagery', 'a pep talk', 'social loafing'], x: 'Feel.' },
    { q: '“Win the league” is…', o: ['an outcome goal', 'a process goal', 'a task goal', 'a mastery goal'], x: 'Result.' },
    { q: 'Self-hypnosis focusing on warmth and heaviness is…', o: ['autogenic training', 'PMR', 'breathing control', 'energising imagery'], x: 'Autogenic.' },
    { q: '“Keep your head still” said to yourself is…', o: ['instructional positive self-talk', 'negative self-talk', 'a pep talk', 'hypnosis'], x: 'Instructional.' }
  ],
  exam: [
    { q: 'Describe different psychological skills that could be used to improve performance. [8]', m: 8, lv: true, tag: 'nea', ms: ['self-talk: positive v negative; motivational and instructional; uses', 'goal setting: short/medium/long; outcome, process, mastery, competitive, task; SMART', 'relaxation: PMR, mind-to-muscle, breathing control, autogenic training, hypnosis', 'energising: breathing rate, pep talks, music, imagery, positive statements', 'imagery: visual, auditory, kinaesthetic; uses incl. mental rehearsal and routines', 'when each is used (pre-competition, during, recovery)', 'sporting examples', 'link to arousal/anxiety theory'] }
  ],
  sims: ['pstsort', 'imagerysort'], gens: []
});

TOPICS.push({
  id: '6.11', unit: '6', area: 'psych', ref: 'C2 Designing a psychological skills training programme', title: 'Psychological skills training programme', short: 'Assessing needs; choosing techniques; benefits; aims, action plan, weekly/daily content, evaluation, milestones, timeframes',
  summary: 'How to design a psychological skills training (PST) programme: identifying an appropriate individual; assessing their psychological skills (strengths and weaknesses, the demands of the sport, questionnaires and interviews); choosing techniques (goal setting, arousal control, imagery, self-talk); the benefits; and devising the programme — situation, aims and objectives, action plan, weekly and daily content, evaluation methods, milestones and timeframes.',
  spec: [
    'Identification of an appropriate individual',
    'Techniques: goal setting, arousal control techniques, imagery, self-talk',
    'Assessment of psychological skills: strengths and weaknesses, psychological demands of sports, questionnaires and interviews',
    'Benefits: performance enhancement, increased enjoyment, enhanced self-satisfaction',
    'Devising a programme: individual situation; aims and objectives; action plan; weekly and daily content; methods of evaluating effectiveness; measurements of key milestones; timeframe — short, medium, long'
  ],
  learn: [
    { h: 'Three phases', html: `
<div class="tbl"><table><tr><th>Phase</th><th>What happens</th></tr>
<tr><td><b>1 Assessment</b></td><td>interview the athlete; questionnaires (e.g. SCAT/CSAI-2-style anxiety measures, performance profiling); identify psychological strengths and weaknesses and the psychological demands of the sport and position</td></tr>
<tr><td><b>2 Education and acquisition</b></td><td>explain the techniques and why they help; learn and practise them in training (e.g. PMR 15 min daily)</td></tr>
<tr><td><b>3 Practice and application</b></td><td>use the techniques in simulated pressure, then competition; build into routines</td></tr></table></div>` },
    { h: 'Writing the programme', html: `
<ul><li><b>Individual situation</b>: who, sport, level, current issues (e.g. a county tennis player whose first-serve percentage falls under pressure; high cognitive anxiety on questionnaires).</li>
<li><b>Aims and objectives</b>: e.g. aim — reduce pre-match cognitive anxiety; objectives — learn breathing control and a pre-serve routine with self-talk.</li>
<li><b>Action plan</b>: which techniques, when, how often, with whom.</li>
<li><b>Weekly and daily content</b>: e.g. week 1–2: PMR daily 15 min; week 3–4: add imagery 3×/week; week 5–6: pre-serve routine in practice matches.</li>
<li><b>Evaluation</b>: repeat questionnaires, interviews, performance statistics (first-serve %), self-report diary.</li>
<li><b>Milestones</b>: checkpoints with measures (e.g. anxiety score down 20% by week 4).</li>
<li><b>Timeframe</b>: short-, medium- and long-term.</li></ul>
<div class="box good"><b class="lbl">Benefits</b><p>Performance enhancement, increased enjoyment and enhanced self-satisfaction — and life skills such as managing stress.</p></div>
<div class="box why"><b class="lbl">Merit and Distinction</b><p>Merit: <b>explain</b> your design and <b>compare</b> it with others’ programmes. Distinction: <b>evaluate</b> your design, suggesting and justifying <b>alternative techniques</b> that could be used.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Give two ways to evaluate the effectiveness of a PST programme. (2 marks)', s: ['Repeat the anxiety questionnaire and compare scores with the start.', 'Compare performance statistics (e.g. penalty conversion) / interview the athlete / diary.'], a: 'Retest questionnaires; performance data; interviews.' }
  ],
  pitfalls: ['A programme without assessment data to justify the techniques chosen.', 'No timescales, milestones or evaluation methods.', 'Choosing energising techniques for an over-aroused athlete.', 'Not suggesting alternatives (needed for Distinction).'],
  cards: [
    ['Three phases of PST?', 'Assessment, education/acquisition, practice/application.'], ['Ways to assess psychological skills?', 'Questionnaires, interviews, performance profiling, demands of the sport.'], ['Benefits of PST?', 'Performance enhancement, enjoyment, self-satisfaction.'],
    ['Programme content?', 'Situation, aims and objectives, action plan, weekly/daily content, evaluation, milestones, timeframe.'], ['Evaluating PST?', 'Retest questionnaires, performance statistics, interviews, diaries.'],
    ['PST programme structure?', 'Assess needs → choose techniques → plan weeks and milestones → apply → evaluate.']
  ],
  quiz: [
    { q: 'The first phase of a PST programme is…', o: ['assessment', 'competition', 'evaluation only', 'pep talks'], x: 'Find needs first.' },
    { q: 'An athlete with high cognitive anxiety would most benefit from…', o: ['relaxation and positive self-talk', 'more pep talks', 'energising music', 'nothing'], x: 'Lower anxiety.' },
    { q: 'A checkpoint showing progress in a PST programme is a…', o: ['milestone', 'isolate', 'clique', 'antecedent'], x: 'Milestone.' },
    { q: 'Which is a benefit of PST in the specification?', o: ['Increased enjoyment', 'Increased BMI', 'Lower vital capacity', 'Higher lactate'], x: 'Spec list.' },
    { q: 'The first step in designing a PST programme is to…', o: ['assess the athlete’s needs', 'choose the music', 'pick a goal at random', 'compete'], x: 'Assessment.' },
    { q: 'A sensible way to evaluate a PST programme is to…', o: ['repeat the questionnaire and compare performance data', 'ask nobody', 'change the technique every day', 'stop after one session'], x: 'Pre/post comparison.' },
    { q: 'Techniques should first be practised…', o: ['in calm, low-pressure settings', 'only in finals', 'never in training', 'after competition only'], x: 'Then transfer.' }
  ],
  exam: [
    { q: 'Design a psychological skills training programme to improve performance, and explain your design. [8]', m: 8, lv: true, tag: 'nea', ms: ['individual and situation described with assessment evidence (questionnaire/interview, demands of sport)', 'clear aims and objectives', 'techniques chosen and justified (goal setting, arousal control, imagery, self-talk)', 'action plan with weekly and daily content', 'progression from learning to competition application', 'evaluation methods and milestones', 'short-, medium-, long-term timeframe', 'comparison with others’ designs / alternatives justified'] }
  ],
  sims: ['pstplanner'], gens: []
});
