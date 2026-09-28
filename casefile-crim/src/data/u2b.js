/* ==========================================================
   UNIT 2 · CRIMINOLOGICAL THEORIES — LO3 and LO4 (AC3.1 – AC4.3)
   ========================================================== */
addCases([
  // situations of criminality
  { id: 'shipman', n: 'Harold Shipman', y: 2000, a: '2', t: '2.3.1', c: 'Case', f: 'A family doctor in Hyde, Greater Manchester, convicted in 2000 of murdering 15 patients with lethal injections of diamorphine. The Shipman Inquiry concluded he had probably killed around 250 people over more than 20 years.', p: 'Hard to explain with most theories: a respected, middle-class professional. Explanations include psychodynamic theory (he watched his mother die while receiving morphine), rational choice and opportunity, and occupational crime. It led to reforms of death certification and doctors’ oversight.' },
  { id: 'venables', n: 'Jon Venables and Robert Thompson', y: 1993, a: '2', t: '2.3.1', c: 'Case', f: 'The two 10-year-olds who killed James Bulger. Both had troubled home lives. They were released on licence with new identities in 2001. Venables was later recalled to prison for possessing child abuse images (2010 and 2017).', p: 'Used to test biological, psychodynamic, social learning and labelling explanations — and to debate the age of criminal responsibility and whether rehabilitation can work.' },
  { id: 'riots2011', n: 'England riots', y: 2011, a: '2', t: '2.3.1', c: 'Case', f: 'After police shot Mark Duggan in Tottenham in August 2011, rioting and looting spread to many English cities over five days. Five people died and thousands were arrested. The Guardian/LSE “Reading the Riots” study interviewed rioters, who cited anger at the police, poverty and opportunism.', p: 'A situation that can be analysed with several theories: left realism (relative deprivation, marginalisation), right realism (opportunity, weak deterrence), strain, anomie and social learning (spreading via social media).' },
  { id: 'marybell', n: 'Mary Bell', y: 1968, a: '2', t: '2.3.1', c: 'Case', f: 'Aged 11, Mary Bell killed two small boys in Newcastle. Her childhood involved neglect and reported abuse by her mother.', p: 'Often analysed with psychodynamic theory (maternal deprivation, Bowlby) and social learning. She was released in 1980 and given lifelong anonymity for herself and her daughter.' },
  { id: 'krays', n: 'The Kray twins', y: 1969, a: '2', t: '2.3.1', c: 'Case', f: 'Ronnie and Reggie Kray ran an organised crime gang in London’s East End in the 1950s and 1960s, involved in protection rackets, armed robbery and murder. They became celebrities and were jailed for life in 1969.', p: 'Analysed with differential association and subcultural theory (a criminal area and family), twin and genetic ideas, and labelling (celebrity status and a “hard man” identity).' },
  { id: 'madoff', n: 'Bernie Madoff', y: 2008, a: '2', t: '2.3.1', c: 'Case', f: 'A respected New York financier who ran the largest Ponzi scheme in history, using new investors’ money to pay returns to earlier investors. Losses on paper were about $65 billion. He was sentenced to 150 years in prison in 2009.', p: 'A white-collar crime that fits Merton’s innovation, Sutherland’s differential association and the Marxist view that the crimes of the powerful go undetected for years — but was eventually heavily punished.' },
  // policy
  { id: 'zerotolerance', n: 'Zero tolerance policing in New York', y: 1994, a: '2', t: '2.4.1', c: 'Case', f: 'Under Mayor Giuliani and Police Commissioner Bratton, New York police cracked down on minor offences such as fare-dodging, graffiti and aggressive begging, based on broken windows theory. Serious crime fell sharply during the 1990s.', p: 'A policy informed by right realism. Critics point out that crime also fell in cities without zero tolerance (such as San Diego), and that aggressive stop-and-frisk damaged relations with Black and Latino communities.' },
  { id: 'kirkholt', n: 'Kirkholt Burglary Prevention Project', y: 1985, a: '2', t: '2.4.1', c: 'Case', f: 'On a Rochdale estate with a high burglary rate, police, probation and residents targeted houses that had already been burgled: removing coin-operated meters, improving security and setting up “cocoon” neighbourhood watch schemes.', p: 'Situational crime prevention and a multi-agency approach. Burglary fell dramatically. It shows the value of focusing on repeat victimisation, though some question how long the effects lasted.' },
  { id: 'cctvstudy', n: 'Welsh and Farrington: CCTV review', y: 2009, a: '2', t: '2.4.1', c: 'Study', f: 'A systematic review of dozens of evaluations of CCTV in the UK and elsewhere.', p: 'Found CCTV had a modest effect on crime overall, with the largest reductions in car parks and little effect in city centres. The UK has very high numbers of cameras, so this questions whether situational measures are value for money.' },
  { id: 'sotp', n: 'Sex Offender Treatment Programme evaluation', y: 2017, a: '2', t: '2.4.1', c: 'Study', f: 'A Ministry of Justice evaluation of the prison-based Core Sex Offender Treatment Programme, a cognitive behavioural course, compared treated and untreated offenders.', p: 'Found treated offenders were slightly more likely to reoffend. The programme was replaced. Shows that individualistic treatment policies must be tested — good intentions do not guarantee effectiveness.' },
  { id: 'gesch', n: 'Gesch: diet and behaviour in prison', y: 2002, a: '2', t: '2.4.1', c: 'Study', f: 'Bernard Gesch gave 231 young adult prisoners at HMP Aylesbury either vitamin, mineral and fatty acid supplements or a placebo.', p: 'Those taking supplements committed about a quarter fewer disciplinary offences, and fewer violent ones. Suggests biological factors such as nutrition can inform policy, although the study was small and needs replicating.' },
  { id: 'chemcast', n: 'Chemical suppression for sex offenders', y: 2025, a: '2', t: '2.4.1', c: 'Case', f: 'Medication to reduce sexual urges has been offered voluntarily to some sex offenders in England, starting with a pilot at HMP Whatton. In 2025 the government announced it would expand the scheme to more prisons, following the Independent Sentencing Review.', p: 'A policy informed by biological theory (hormones and sexual offending). It is voluntary and used alongside psychological treatment; critics raise ethical concerns and say it does not address the psychological causes.' },
  { id: 'surestart', n: 'Sure Start', y: 1998, a: '2', t: '2.4.1', c: 'Case', f: 'A Labour government programme of children’s centres offering childcare, parenting support and health services in deprived areas. Many centres closed after 2010 because of funding cuts.', p: 'Early intervention informed by individualistic (parenting, attachment) and sociological (deprivation) theories. Later research by the Institute for Fiscal Studies linked access to Sure Start with better health and fewer serious youth justice outcomes.' },
  { id: 'rjstudy', n: 'Sherman and Strang: restorative justice review', y: 2007, a: '2', t: '2.4.1', c: 'Study', f: 'A review of research on restorative justice, in which offenders meet their victims to understand the harm caused and make amends.', p: 'Found restorative justice reduced reoffending for some crimes, especially violent crimes, and increased victim satisfaction. Linked to labelling theory and Braithwaite’s idea of reintegrative shaming.' },
  { id: 'prisonworks', n: '“Prison works”', y: 1993, a: '2', t: '2.4.1', c: 'Case', f: 'Home Secretary Michael Howard told the 1993 Conservative Party conference that “prison works”. The prison population in England and Wales roughly doubled over the following two decades.', p: 'A key example of penal populism and right realist thinking (incapacitation and deterrence). Critics link it to overcrowding and high reoffending.' },
  // social change
  { id: 'psychoactive', n: 'Psychoactive Substances Act 2016', y: 2016, a: '2', t: '2.4.2', c: 'Case', f: 'New “legal highs” such as mephedrone and synthetic cannabinoids (“spice”) were being sold legally in shops and online. The Act made it an offence to produce or supply any substance intended to produce a psychoactive effect, with some exemptions.', p: 'A policy response to cultural and technological change in drug use, and to media concern. Head shops closed, but spice use continued, particularly in prisons.' },
  { id: 'onlinesafety', n: 'Online Safety Act 2023', y: 2023, a: '2', t: '2.4.2', c: 'Case', f: 'The Act places duties on social media and search companies to tackle illegal content and protect children, enforced by Ofcom. It also created new offences such as sending false or threatening communications and cyber-flashing.', p: 'A policy response to cultural and technological change: the growth of social media, online abuse and harmful content. Campaigns by bereaved parents (such as Molly Russell’s family) influenced it.' },
  { id: 'knifemin', n: 'Minimum sentences for repeat knife possession', y: 2015, a: '2', t: '2.4.2', c: 'Case', f: 'The Criminal Justice and Courts Act 2015 introduced a minimum sentence of six months’ custody for adults convicted of a second offence of possessing a knife or offensive weapon (four-month detention and training order for 16–17-year-olds).', p: 'Policy driven by public perception of rising knife crime and media coverage. Critics say evidence that minimum sentences deter is weak.' },
  // campaigns
  { id: 'howardleague', n: 'The Howard League for Penal Reform', y: 1866, a: '2', t: '2.4.3', c: 'Campaign', f: 'The oldest penal reform charity in the world, named after the 18th-century prison reformer John Howard. It campaigns for less crime, safer communities and fewer people in prison, using research, legal action and lobbying.', p: 'An example of a pressure group campaign aiming to change policy, for example on children in custody and short prison sentences. It shows the role of expert, evidence-based campaigning.' },
  { id: 'postoffice', n: 'Post Office Horizon scandal', y: 2024, a: '2', t: '2.4.3', c: 'Case', f: 'Between 1999 and 2015 the Post Office prosecuted hundreds of sub-postmasters for theft and fraud based on data from its faulty Horizon computer system. Alan Bates led a long campaign. After the ITV drama Mr Bates vs The Post Office (January 2024) caused a public outcry, Parliament passed the Post Office (Horizon System) Offences Act 2024, quashing convictions.', p: 'The UK’s most widespread miscarriage of justice, and a powerful example of an individual campaign combined with television drama changing policy almost overnight. Also relevant to Unit 3 (evidence and miscarriages of justice).' }
]);

/* ---------- AC3.1 Analyse situations of criminality ---------- */
TOPICS.push({
  id: '2.3.1', unit: '2', ref: 'AC3.1', title: 'Analysing situations of criminality',
  short: 'Applying biological, individualistic and sociological theories to different types of crime and individual criminal behaviour',
  summary: 'In the exam you will be given scenarios about crimes and offenders. This criterion asks you to analyse them — to apply the theories you have learned to explain the possible causes of the behaviour. Real cases are good practice: which theories best explain a serial-killing doctor, a riot, a child who kills or a fraudster?',
  spec: ['Situations relating to different types of crime', 'Situations relating to individual criminal behaviour', 'A range of crimes, e.g. crimes against the person or property, white-collar and corporate crime', 'Understand possible causes through the application of the theories from LO2'],
  learn: [
    { h: 'How to analyse a scenario', html: `
<ol><li><b>Pick out clues</b> in the scenario: family background, peers, age, class, area, personality, physical characteristics, opportunity, motive, the reaction of others.</li>
<li><b>Match clues to theories</b>: a violent father → social learning; a label at school → labelling; unemployment in a wealthy area → relative deprivation; a muscular build → Sheldon.</li>
<li><b>Explain the link</b>: don’t just name the theory — show how it explains the behaviour, using the person’s name and the facts.</li>
<li><b>Use more than one theory</b> where the question allows — top-band answers consider alternatives.</li></ol>
<div class="box tip"><b class="lbl">Clue spotter</b><p>Try the scenario sorter in Explore — each clue points to a family of theories.</p></div>` },
    { h: 'Crimes against the person and property', html: `
<ul><li><b>Violent crime</b>: biological (testosterone, MAOA, prefrontal damage), social learning (violent role models), psychodynamic (weak superego, deprivation), subcultures of violence.</li>
<li><b>Child killers</b>: [[c:venables]]; [[c:marybell]] — often analysed with Bowlby and social learning; debate about the age of criminal responsibility.</li>
<li><b>Property crime</b>: Merton’s innovation; rational choice and opportunity; relative deprivation; drug-related theft (retreatism).</li>
<li><b>Collective disorder</b>: [[c:riots2011]] — relative deprivation and marginalisation (left realism), opportunism (right realism), anomie, social learning through social media.</li></ul>` },
    { h: 'White-collar, corporate and organised crime', html: `
<ul><li><b>White-collar crime</b> is hard for biological and many individualistic theories to explain: offenders are often respectable, educated and well-off ([[c:madoff]]; [[c:shipman]] as occupational crime).</li>
<li>Better explanations: <b>Sutherland</b> (learned in the workplace culture), <b>Merton</b> (innovation — the pressure to succeed at any cost), <b>Marxism</b> (capitalism encourages greed; selective enforcement), <b>rational choice</b> (low risk of detection, high reward).</li>
<li><b>Organised crime</b> ([[c:krays]]): differential association, subcultures, illegitimate opportunity structures (Cloward and Ohlin).</li></ul>` }
  ],
  debate: [],
  cases: ['shipman', 'venables', 'riots2011', 'marybell', 'krays', 'madoff'],
  worked: [{ q: '<b>Scenario.</b> Kyle, 16, lives on an estate with high unemployment. His father has served prison sentences for assault, and his older brother’s friends deal drugs and wear expensive clothes. Teachers have described Kyle as “trouble” since Year 7. He has been arrested for shoplifting designer trainers. Analyse Kyle’s behaviour using <b>two</b> theories.', s: ['<b class="st">Clues</b>Unemployment and consumer goods; violent/offending father; delinquent older peers; labelled by teachers; theft of status goods.', '<b class="st">Theory 1: social learning</b>Kyle may have observed and imitated his father’s and his brother’s friends’ offending. The friends are rewarded with money and status (vicarious reinforcement), making Kyle more likely to copy them (Bandura). Sutherland’s differential association would add that he has learned motives and techniques in these intimate groups.', '<b class="st">Theory 2: Merton’s strain</b>Kyle shares the cultural goal of material success (designer trainers) but lacks legitimate means on an estate with high unemployment, so he adopts innovation — theft.', '<b class="st">Alternative</b>Labelling: being called “trouble” since Year 7 may have become a master status, leading to secondary deviance (Becker; Lemert).'], a: 'Each theory is linked to specific facts about Kyle — that is analysis.' }],
  pitfalls: ['Describing theories in general without linking them to the scenario.', 'Forcing one theory to fit everything.', 'Ignoring clues about the offender’s circumstances that point to other theories.'],
  cards: [
    ['First step in analysing a scenario?', 'Pick out clues: family, peers, area, personality, biology, opportunity, reaction of others.'],
    ['Which theories suit white-collar crime?', 'Sutherland, Merton’s innovation, Marxism, rational choice.'],
    ['Which theories were used to explain the 2011 riots?', 'Relative deprivation and marginalisation (left realism), opportunism (right realism), anomie, social learning.'],
    ['Why is Shipman hard to explain?', 'A respected, middle-class professional — most theories focus on disadvantage.'],
    ['Which theories fit the Kray twins?', 'Differential association, subculture, labelling (celebrity), possibly genetic.']
  ],
  quiz: [
    { q: 'A scenario says an offender’s older siblings are rewarded with money for crime. Which theory fits best?', o: ['Social learning', 'Lombroso', 'Durkheim', 'Eysenck'], x: 'Vicarious reinforcement.' },
    { q: 'A teenager called “a waste of space” by teachers begins truanting and offending. Which theory fits?', o: ['Labelling', 'XYY', 'Sheldon', 'Broken windows'], x: 'Self-fulfilling prophecy.' },
    { q: 'Madoff’s Ponzi scheme is best explained by…', o: ['Merton’s innovation', 'Lombroso’s atavism', 'Bowlby’s deprivation', 'Sheldon’s body types'], x: 'Pursuing success by illegitimate means.' },
    { q: 'Rioters who felt poorer than others and ignored by police fit…', o: ['left realism', 'Freud', 'Jacobs', 'Kohlberg'], x: 'Relative deprivation and marginalisation.' }
  ],
  exam: [
    { q: 'Analyse the scenario using two theories of criminality. [9]', m: 9, scen: 'Amira, 34, is a successful finance manager at a large company. She has been taking small amounts from the company for years to fund her lifestyle, and says “everyone in my department fiddles their expenses”. When the company was fined for polluting a river, the directors were not prosecuted.', ms: ['white-collar/occupational crime and corporate crime identified', 'Sutherland — learned in the workplace: “everyone fiddles”', 'Merton — innovation to maintain a lifestyle', 'Marxism — directors not prosecuted: selective enforcement; crimes of the powerful', 'rational choice — low risk of detection', 'theories linked to specific facts', 'comparison or judgement of which fits best'] },
    { q: 'Using the scenario, explain one biological explanation for Leon’s behaviour. [4]', m: 4, scen: 'Leon, 19, has a history of impulsive violence. His father and uncle both have convictions for violence. After a head injury in a car crash at 15, his behaviour got worse.', ms: ['genetic explanation — family history; twin/adoption evidence; MAOA', 'or brain abnormality — head injury damaging prefrontal cortex (Raine); impulse control', 'linked to Leon’s facts', 'accurate detail'] }
  ],
  tools: ['cluesort']
});

/* ---------- AC3.2 Evaluate theories ---------- */
TOPICS.push({
  id: '2.3.2', unit: '2', ref: 'AC3.2', title: 'Evaluating criminological theories',
  short: 'Strengths and weaknesses of biological, individualistic and sociological theories in explaining the causes of crime',
  summary: 'Evaluation means judging how well each theory explains crime. Use a consistent set of criteria — evidence, methods, what the theory can and cannot explain, determinism, practical use — and reach a judgement. Top answers compare theories and apply the evaluation to the scenario in the question.',
  spec: ['Evaluate the strengths and weaknesses of individualistic theories', 'Evaluate the strengths and weaknesses of biological theories', 'Evaluate the strengths and weaknesses of sociological theories', 'In terms of explaining crime'],
  learn: [
    { h: 'Evaluation criteria', html: `
<ul><li><b>Evidence</b> — is it supported by research? How good were the methods (sample size, control groups, ecological validity)?</li>
<li><b>Scope</b> — which crimes and offenders can it explain? Can it explain white-collar crime, female crime, crime by the middle class?</li>
<li><b>Determinism v free will</b> — does it ignore choice?</li>
<li><b>Nature v nurture</b> — does it ignore biology or environment?</li>
<li><b>Reductionism</b> — does it reduce complex behaviour to one cause?</li>
<li><b>Practical applications</b> — has it led to useful policies (AC4.1)?</li>
<li><b>Ethical and social implications</b> — could it lead to discrimination (eugenics, stereotyping)?</li></ul>` },
    { h: 'Biological theories', html: `
<div class="debate"><div class="for"><h5>Strengths</h5><ul><li>Scientific methods — twin, adoption and brain-scanning studies ([[c:christiansen]]; [[c:mednick]]; [[c:raine]])</li><li>Explain why individuals in the same environment behave differently</li><li>Link to treatments (medication, diet — [[c:gesch]])</li></ul></div><div class="ag"><h5>Weaknesses</h5><ul><li>Early studies flawed ([[c:lombroso]] — no control group; [[c:sheldon]] — subjective)</li><li>Concordance is never 100% — environment matters</li><li>Deterministic; ignore social construction of crime</li><li>Cannot explain white-collar crime or why crime rates change quickly</li><li>Risk of discrimination and eugenics</li></ul></div></div>` },
    { h: 'Individualistic theories', html: `
<div class="debate"><div class="for"><h5>Strengths</h5><ul><li>Social learning is backed by experiments ([[c:bandura]]) and explains peer and family influence</li><li>Longitudinal evidence of risk factors ([[c:farrington]])</li><li>Useful treatments: CBT, anger management, token economies</li></ul></div><div class="ag"><h5>Weaknesses</h5><ul><li>Lab experiments lack ecological validity</li><li>Freud’s ideas are untestable; Bowlby relied on retrospective data</li><li>Eysenck’s personality tests are self-report; mixed support</li><li>Ignore structural causes such as poverty and inequality</li><li>Treatment is not always effective ([[c:sotp]])</li></ul></div></div>` },
    { h: 'Sociological theories', html: `
<div class="debate"><div class="for"><h5>Strengths</h5><ul><li>Explain patterns in crime rates by class, area and time</li><li>Marxism explains white-collar crime and selective enforcement</li><li>Labelling explains the harmful effect of the justice system</li><li>Realism is practical and has influenced policy (zero tolerance, multi-agency work)</li></ul></div><div class="ag"><h5>Weaknesses</h5><ul><li>Strain and subculture over-predict working-class crime and ignore female crime</li><li>Marxism ignores working-class victims and non-economic crime</li><li>Labelling does not explain primary deviance</li><li>Right realism ignores structural causes; left realism relies on victim surveys</li><li>Cannot explain why most people in the same circumstances do not offend</li></ul></div></div>` },
    { h: 'Reaching a judgement', html: `<p>Most criminologists now accept that <b>no single theory</b> explains all crime. Interactionist models (biology × environment, e.g. Caspi’s MAOA research) and multi-factor risk approaches combine theories. In the exam, judge which theory <b>best explains the specific crime in the scenario</b>, and why.</p>` }
  ],
  debate: [],
  cases: ['lombroso', 'sheldon', 'christiansen', 'mednick', 'raine', 'bandura', 'farrington', 'sotp', 'gesch'],
  worked: [],
  pitfalls: ['Listing strengths and weaknesses without applying them to the crime in the scenario.', 'Only criticising — give strengths too.', 'No overall judgement.'],
  cards: [
    ['Five criteria for evaluating a theory?', 'Evidence, scope, determinism, reductionism, practical applications (and ethics).'],
    ['Main weakness of twin studies?', 'Identical twins share more similar environments; concordance never 100%.'],
    ['What is ecological validity?', 'How far findings apply to real-life settings.'],
    ['What does determinism mean?', 'Behaviour is caused by factors outside the person’s control.'],
    ['Why can biological theories not explain changing crime rates?', 'Genes do not change quickly, but crime rates do.'],
    ['Main weakness of labelling theory?', 'It does not explain why primary deviance happens.'],
    ['What is reductionism?', 'Explaining complex behaviour with one simple cause.']
  ],
  quiz: [
    { q: 'A weakness of Lombroso’s research was…', o: ['no proper control group', 'too large a sample', 'use of brain scans', 'being too recent'], x: 'He did not compare with non-criminals properly.' },
    { q: 'Which theory best explains selective enforcement against the poor?', o: ['Marxism', 'Sheldon', 'Eysenck', 'Jacobs'], x: 'Crimes of the powerful are under-policed.' },
    { q: 'A strength of social learning theory is…', o: ['experimental evidence from Bandura', 'it explains all white-collar crime', 'it is untestable', 'it is purely biological'], x: 'Bobo doll studies.' },
    { q: 'Why might twin studies overestimate genetic influence?', o: ['Identical twins may be treated more alike', 'Twins never offend', 'The samples are always huge', 'They use brain scans'], x: 'Shared environment.' }
  ],
  exam: [{ q: 'Evaluate the effectiveness of biological theories in explaining the criminality in the scenario. [9]', m: 9, scen: 'Dan, 22, has been convicted of several violent assaults. His father and grandfather also had convictions for violence. Dan grew up in a violent household on a deprived estate and left school at 14.', ms: ['biological explanations applied — genetic (family history), possibly MAOA', 'strengths — twin/adoption evidence; explains individual differences', 'weaknesses — family environment could explain it (social learning); deprivation (sociological)', 'methodological criticisms of studies', 'determinism and ethics', 'judgement: biology may interact with environment in Dan’s case'] }],
  tools: ['evalsort']
});

/* ---------- AC4.1 Theories and policy ---------- */
TOPICS.push({
  id: '2.4.1', unit: '2', ref: 'AC4.1', title: 'How theories inform policy',
  short: 'Informal and formal policy making, crime control and state punishment policies based on biological, individualistic and sociological theories',
  summary: 'Governments, police and other agencies use criminological theories — sometimes openly, sometimes implicitly — to design policies to control crime and punish offenders. This criterion asks you to assess how far each type of theory has informed policy: from zero tolerance and CCTV to CBT programmes, restorative justice and early intervention.',
  spec: ['Informal policy making (e.g. by communities, schools, workplaces)', 'Formal policy making: crime control policies and state punishment policies', 'Assess the use of individualistic, biological and sociological theories in informing policy', 'Examples: penal populism, zero tolerance, CCTV, restorative justice, multi-agency approach'],
  learn: [
    { h: 'Formal and informal policy', html: `<ul><li><b>Formal policy</b> is made by the state — Parliament, the Home Office and Ministry of Justice, police forces, the CPS, courts and prisons. It includes <b>crime control policies</b> (policing, prevention, surveillance) and <b>state punishment policies</b> (sentencing, prisons, probation).</li><li><b>Informal policy</b> is made by organisations and communities without legislation — school behaviour policies, workplace codes, neighbourhood watch, shops banning known shoplifters.</li></ul>` },
    { h: 'Biological theories and policy', html: `
<ul><li><b>Historic</b>: eugenics and forced sterilisation laws in the USA and elsewhere in the early 20th century — now seen as abuses.</li>
<li><b>Medical treatment</b>: voluntary drugs to suppress sexual urges in sex offenders ([[c:chemcast]]); medication for ADHD; treatment for addiction (methadone).</li>
<li><b>Diet and environment</b>: supplements to reduce aggression ([[c:gesch]]); removing lead from petrol has been linked to falling crime.</li>
<li><b>Screening and data</b>: the National DNA Database; brain scanning evidence occasionally raised in sentencing.</li>
<li><b>Assessment</b>: limited direct influence because of ethical concerns and the risk of labelling people as “born criminals”.</li></ul>` },
    { h: 'Individualistic theories and policy', html: `
<ul><li><b>Cognitive behavioural therapy (CBT)</b>: accredited offending behaviour programmes in prisons and probation to change thinking errors (e.g. the Thinking Skills Programme). Evidence is mixed ([[c:sotp]]).</li>
<li><b>Token economy</b> (operant conditioning): rewards for good behaviour in young offender institutions; the Incentives and Earned Privileges scheme in prisons.</li>
<li><b>Anger management</b> and <b>restorative justice</b> ([[c:rjstudy]]).</li>
<li><b>Early intervention and parenting support</b> ([[c:surestart]]; Family Nurse Partnership) — informed by attachment theory and risk factor research ([[c:farrington]]).</li>
<li><b>Controlling media influence</b> — film classification after [[c:bulger]] (social learning).</li></ul>` },
    { h: 'Sociological theories and policy', html: `
<ul><li><b>Right realism</b>: [[c:zerotolerance]]; situational crime prevention — [[c:kirkholt]], alley-gating, CCTV ([[c:cctvstudy]]), designing out crime; ASBOs (1998, replaced in 2014 by civil injunctions and criminal behaviour orders); deterrent sentences and <b>penal populism</b> ([[c:prisonworks]]).</li>
<li><b>Left realism</b>: the <b>multi-agency approach</b> — Community Safety Partnerships under the Crime and Disorder Act 1998; Youth Offending Teams; Violence Reduction Units (public health approach to serious violence, from 2019); community policing.</li>
<li><b>Labelling</b>: diverting young people from court (cautions, youth diversion), anonymity for young offenders, restorative justice, “ban the box” on job applications.</li>
<li><b>Strain and subcultural theories</b>: education, training and youth programmes; tackling inequality.</li>
<li><b>Marxism</b>: little direct influence, but used to argue for regulation of corporate crime (Corporate Manslaughter Act 2007; the Economic Crime and Corporate Transparency Act 2023 “failure to prevent fraud” offence).</li></ul>` }
  ],
  debate: [{ q: 'Have sociological theories influenced policy more than biological or individualistic ones?', for: ['Right realism shaped policing and sentencing for decades.', 'Left realism created multi-agency partnerships.', 'Labelling led to youth diversion.'], ag: ['CBT programmes are everywhere in prisons and probation (individualistic).', 'Early intervention draws on attachment theory.', 'Biological ideas are returning (chemical suppression, DNA database).', 'Politics and public opinion often matter more than any theory (penal populism).'] }],
  cases: ['zerotolerance', 'kirkholt', 'cctvstudy', 'prisonworks', 'sotp', 'rjstudy', 'surestart', 'chemcast', 'gesch'],
  worked: [],
  pitfalls: ['Describing policies without linking them to a specific theory.', 'Not assessing — the command word is “assess”: how successful, how far informed by theory?', 'Forgetting informal policy making.'],
  cards: [
    ['Which theory inspired zero tolerance?', 'Right realism — broken windows (Wilson and Kelling).'],
    ['Which theory inspired the multi-agency approach?', 'Left realism.'],
    ['Which theory supports diverting young offenders?', 'Labelling theory.'],
    ['What is penal populism?', 'Politicians adopting tough punishment policies to win public support.'],
    ['Give a policy based on operant conditioning.', 'Token economy or the Incentives and Earned Privileges scheme.'],
    ['Give a biological policy.', 'Chemical suppression for sex offenders; diet supplements; historic eugenics.'],
    ['What did the 2017 SOTP evaluation find?', 'Treated sex offenders were slightly more likely to reoffend.'],
    ['What did Welsh and Farrington find about CCTV?', 'A modest effect overall, strongest in car parks.']
  ],
  quiz: [
    { q: 'Alley-gating is an example of…', o: ['situational crime prevention (right realism)', 'labelling theory', 'psychodynamic therapy', 'eugenics'], x: 'Clarke’s rational choice approach.' },
    { q: 'Youth Offending Teams reflect which approach?', o: ['Multi-agency (left realism)', 'Zero tolerance', 'Biological screening', 'Penal populism'], x: 'Crime and Disorder Act 1998.' },
    { q: 'Which policy is linked to labelling theory?', o: ['Diverting young people from court', 'Longer prison sentences', 'CCTV', 'DNA screening'], x: 'Avoids a criminal label.' },
    { q: 'Michael Howard’s “prison works” is an example of…', o: ['penal populism', 'restorative justice', 'multi-agency work', 'social learning'], x: '1993.' },
    { q: 'CBT offending behaviour programmes are informed by…', o: ['individualistic theories', 'Marxism', 'Durkheim', 'Sheldon'], x: 'Changing thinking and behaviour.' }
  ],
  exam: [{ q: 'Assess the use of criminological theories in informing policies to reduce youth crime in the scenario. [9]', m: 9, scen: 'A town council is worried about groups of teenagers causing damage in the town centre at night. Some councillors want CCTV and a curfew; others want a youth centre and mentoring.', ms: ['CCTV and curfew — right realism/situational prevention; effectiveness (Welsh and Farrington); displacement', 'youth centre — strain/subculture; Hirschi’s involvement bond', 'mentoring — social learning; labelling — avoid criminalising', 'multi-agency approach — left realism', 'evidence of effectiveness', 'judgement on the best combination'] }],
  tools: ['policysort']
});

/* ---------- AC4.2 Social change and policy ---------- */
TOPICS.push({
  id: '2.4.2', unit: '2', ref: 'AC4.2', title: 'How social changes affect policy',
  short: 'Changes in social values, norms and mores, public perception of crime, the structure of society and culture — and their effect on policy',
  summary: 'Crime policy reflects the society that makes it. As values, norms and mores change, as public perceptions of crime shift, as the population changes and as culture and technology develop, policy changes too. This criterion asks you to explain how, with examples.',
  spec: ['Social values, norms and mores', 'Public perception of crime', 'Structure of society: demographic changes', 'Cultural changes', 'How social changes have affected policy development'],
  learn: [
    { h: 'Values, norms and mores', html: `
<ul><li><b>Sexuality</b>: decriminalisation of homosexual acts ([[c:wolfenden]]), equal age of consent (2000), same-sex marriage (2013).</li>
<li><b>Women’s rights</b>: marital rape criminalised ([[c:rvr]]); coercive control (2015); Domestic Abuse Act 2021; violence against women and girls strategy (2021 onwards).</li>
<li><b>Children’s rights</b>: smacking ban in Wales and Scotland ([[c:smacking]]).</li>
<li><b>Race</b>: race hate offences and the recording changes after the Macpherson Report (1999).</li>
<li><b>Drink-driving and smoking</b>: changes in attitude supported tougher laws.</li></ul>` },
    { h: 'Public perception of crime', html: `<p>What the public fears shapes policy, even when statistics show crime falling (Unit 1: media and moral panics). Examples: minimum sentences for repeat knife possession ([[c:knifemin]]); the Dangerous Dogs Act 1991; tougher counter-terrorism laws after attacks (Counter-Terrorism and Border Security Act 2019; the Terrorist Offenders (Restriction of Early Release) Act 2020 passed within weeks of the Streatham attack).</p>` },
    { h: 'Structure of society and demographic change', html: `
<ul><li><b>Ageing population</b>: more older prisoners (prisons adapting for dementia and disability); recognition of elder abuse and fraud against older people.</li>
<li><b>Migration and diversity</b>: hate crime laws; forced marriage and FGM offences; modern slavery (Modern Slavery Act 2015).</li>
<li><b>Changing family structures</b>: more lone-parent families (linked by right realists to crime — Murray); parenting orders (Crime and Disorder Act 1998).</li>
<li><b>Youth population and urbanisation</b>: youth justice reforms; gang and county lines policies.</li></ul>` },
    { h: 'Cultural change', html: `
<ul><li><b>Technology and the internet</b>: Computer Misuse Act 1990; revenge porn offence (2015); [[c:onlinesafety]].</li>
<li><b>Drug culture</b>: [[c:psychoactive]]; debates on cannabis and drug consumption rooms (Glasgow opened a pilot in 2025).</li>
<li><b>Drinking culture</b>: the Licensing Act 2003 allowed longer opening hours; later “late night levies” and minimum unit pricing in Scotland (2018) and Wales (2020).</li>
<li><b>Celebrity and social media culture</b>: influencer fraud, online hate, misinformation.</li></ul>` }
  ],
  debate: [{ q: 'Should policy follow public opinion?', for: ['Democratic legitimacy — laws must reflect values.', 'Old laws that no longer fit society lose respect (e.g. homosexuality before 1967).', 'Public concern can highlight real harms (online abuse).'], ag: ['Public perceptions can be distorted by the media (moral panics).', 'Knee-jerk laws may be poorly drafted (Dangerous Dogs Act).', 'Minorities need protection from majority opinion.', 'Evidence should drive policy.'] }],
  cases: ['wolfenden', 'rvr', 'smacking', 'knifemin', 'psychoactive', 'onlinesafety'],
  worked: [],
  pitfalls: ['Examples without explaining the social change that caused them.', 'Only covering values — include perceptions, demographics and culture.'],
  cards: [
    ['Four types of social change in the specification?', 'Values/norms/mores, public perception of crime, structure of society (demographics), cultural changes.'],
    ['Example of policy changing because of values?', 'Same-sex marriage (2013); marital rape criminalised (1991); smacking ban in Wales (2022).'],
    ['Example of policy driven by public perception?', 'Minimum sentences for repeat knife possession (2015).'],
    ['Example of policy driven by demographic change?', 'Prisons adapting for older prisoners; Modern Slavery Act 2015.'],
    ['Example of policy driven by cultural change?', 'Psychoactive Substances Act 2016; Online Safety Act 2023.']
  ],
  quiz: [
    { q: 'The Psychoactive Substances Act 2016 responded mainly to…', o: ['cultural change in drug use', 'an ageing population', 'the Macpherson Report', 'the Wolfenden Report'], x: 'Legal highs.' },
    { q: 'Minimum sentences for repeat knife possession reflect…', o: ['public perception of crime', 'decriminalisation', 'eugenics', 'Durkheim’s functions'], x: 'Concern about knife crime.' },
    { q: 'More older prisoners is an example of…', o: ['demographic change', 'cultural change', 'a moral panic', 'labelling'], x: 'Structure of society.' },
    { q: 'The Online Safety Act 2023 is mainly a response to…', o: ['technological and cultural change', 'demographic change', 'decriminalisation', 'right realism'], x: 'Social media.' }
  ],
  exam: [{ q: 'Explain how social changes have affected policy development. Use examples. [6]', m: 6, ms: ['values/norms — e.g. sexuality, women’s and children’s rights', 'public perception — knife crime minimum sentences; terrorism laws', 'demographic — ageing prisoners; migration and hate crime', 'cultural — technology, Online Safety Act; drugs', 'clear link between change and policy', 'accurate examples'] }],
  tools: ['socialchangesort']
});

/* ---------- AC4.3 Campaigns and policy ---------- */
TOPICS.push({
  id: '2.4.3', unit: '2', ref: 'AC4.3', title: 'How campaigns affect policy making',
  short: 'Newspaper, individual and pressure group campaigns and their effect on different types of policy',
  summary: 'This criterion brings your Unit 1 campaign knowledge into Unit 2. You need to discuss how newspaper campaigns, individual campaigns and pressure group campaigns have affected policy making — and weigh up how much influence campaigns really have.',
  spec: ['Newspaper campaigns', 'Individual campaigns', 'Pressure group campaigns', 'Synoptic: use knowledge of campaigning for change from Unit 1 to consider the effect on different types of policy'],
  learn: [
    { h: 'Newspaper campaigns', html: `<ul><li>[[c:sarahslaw]] — the News of the World’s “name and shame” campaign led to a disclosure scheme, but also vigilante attacks.</li><li>The Daily Mail’s 1997 “Murderers” front page named five men suspected of killing Stephen Lawrence ([[c:doreen]]).</li><li>[[c:lillianslaw]] — a local newspaper supported the family.</li></ul><p><b>Assessment</b>: mass reach and political pressure, but papers may simplify issues, pursue sales and encourage punitive policies (penal populism).</p>` },
    { h: 'Individual campaigns', html: `<ul><li>[[c:helenslaw]]; [[c:clareslaw]]; [[c:ginamartin]]; [[c:purdy]]; [[c:postoffice]] (Alan Bates).</li></ul><p><b>Assessment</b>: powerful personal stories attract sympathy and media coverage, but individuals have limited resources and campaigns can take decades.</p>` },
    { h: 'Pressure group campaigns', html: `<ul><li>[[c:snowdrop]] (Dunblane parents); [[c:howardleague]]; the Prison Reform Trust; Liberty (civil liberties); Women’s Aid and Refuge (domestic abuse); Dignity in Dying; Stonewall.</li><li><b>Insider groups</b> are consulted by government (e.g. Howard League giving evidence to committees); <b>outsider groups</b> use direct action and protest.</li></ul><p><b>Assessment</b>: expertise and research give credibility; insider groups have access; but campaigns compete with other priorities and the government’s agenda.</p>` },
    { h: 'Effects on different types of policy', html: `
<div class="tbl"><table><tr><th>Type of policy</th><th>Campaign example</th></tr>
<tr><td>New legislation</td><td>Snowdrop (handgun ban); Gina Martin (upskirting); Post Office Horizon Act 2024</td></tr>
<tr><td>Police procedures</td><td>Clare’s Law; Sophie Lancaster (hate crime recording)</td></tr>
<tr><td>Prosecution policy</td><td>Debbie Purdy (DPP assisted suicide policy)</td></tr>
<tr><td>Sentencing and parole</td><td>Helen’s Law; campaigns for longer sentences for dangerous driving (life sentences for causing death by dangerous driving since 2022)</td></tr>
<tr><td>Funding and priorities</td><td>Violence against women and girls after Sarah Everard</td></tr></table></div>` }
  ],
  debate: [{ q: 'How much influence do campaigns have on policy?', for: ['Clear examples of new laws (Snowdrop, Helen’s Law, upskirting).', 'Campaigns overturned injustice (Post Office, Hillsborough).', 'Media coverage forces politicians to act quickly.'], ag: ['Many campaigns fail or take decades.', 'Governments decide the agenda; campaigns succeed when they fit it.', 'Outcomes are often watered down (Sarah’s Law).', 'Hard to separate the campaign’s effect from other causes.'] }],
  cases: ['sarahslaw', 'doreen', 'helenslaw', 'clareslaw', 'ginamartin', 'snowdrop', 'howardleague', 'postoffice', 'purdy'],
  worked: [],
  pitfalls: ['Describing campaigns without linking them to policy change.', 'Only covering one of the three types of campaign.', 'Not discussing how far campaigns succeed.'],
  cards: [
    ['Three types of campaign in AC4.3?', 'Newspaper, individual and pressure group campaigns.'],
    ['Example of a newspaper campaign?', 'News of the World and Sarah’s Law.'],
    ['Example of an individual campaign?', 'Helen’s Law (Marie McCourt); Gina Martin; Alan Bates and the Post Office.'],
    ['Example of a pressure group?', 'Howard League for Penal Reform; Snowdrop; Liberty.'],
    ['Insider v outsider groups?', 'Insider groups are consulted by government; outsider groups use protest and direct action.'],
    ['What law followed Mr Bates vs The Post Office?', 'Post Office (Horizon System) Offences Act 2024.']
  ],
  quiz: [
    { q: 'The Post Office (Horizon System) Offences Act 2024 followed…', o: ['a TV drama and an individual campaign', 'a newspaper campaign about sex offenders', 'a Home Office advert', 'a riot'], x: 'Mr Bates vs The Post Office.' },
    { q: 'The Howard League is an example of…', o: ['a pressure group', 'a newspaper', 'a court', 'an individual campaign'], x: 'Penal reform charity.' },
    { q: 'A group regularly consulted by ministers is called…', o: ['an insider group', 'an outsider group', 'a moral panic', 'a folk devil'], x: 'Access to government.' },
    { q: 'Which campaign resulted in a DPP policy on assisted suicide?', o: ['Debbie Purdy', 'Snowdrop', 'Sarah’s Law', 'Finn’s Law'], x: '2009–2010.' }
  ],
  exam: [{ q: 'Discuss how campaigns have affected policy making. [9]', m: 9, ms: ['newspaper campaigns — Sarah’s Law; effects and problems', 'individual campaigns — Helen’s Law, Clare’s Law, Post Office', 'pressure groups — Snowdrop, Howard League', 'types of policy affected — law, procedure, prosecution, sentencing', 'discussion of limits — time, watered-down outcomes, government agenda', 'reasoned conclusion'] }],
  tools: ['pressuresort']
});

/* ---------- Unit 2 LO3–LO4 tools ---------- */
TOOLS.cluesort = { type: 'sort', title: 'Clue spotter', intro: 'Each clue from a scenario points to a theory. Which is the best fit?', cats: ['Biological', 'Social learning', 'Psychodynamic', 'Strain/realism', 'Labelling'], items: [
  ['“His father and grandfather were both violent men.” (raised apart from them)', 'Biological', 'Shared genes without shared environment.'],
  ['“She idolised her older cousin, who drove a car bought with drug money.”', 'Social learning', 'Role model rewarded.'],
  ['“He was separated from his mother for two years as a baby.”', 'Psychodynamic', 'Maternal deprivation.'],
  ['“Everyone around him had money; he had none and no job prospects.”', 'Strain/realism', 'Relative deprivation / strain.'],
  ['“After his first caution, the local paper called him a thug and neighbours avoided him.”', 'Labelling', 'Master status.'],
  ['“A head injury at 14 changed his personality.”', 'Biological', 'Prefrontal damage.'],
  ['“Teachers said she would never amount to anything.”', 'Labelling', 'Self-fulfilling prophecy.']
] };
TOOLS.evalsort = { type: 'sort', title: 'Strength or weakness?', intro: 'Is each point a strength or a weakness of the theory named?', cats: ['Strength', 'Weakness'], items: [
  ['Twin studies: MZ concordance is well below 100%.', 'Weakness', 'Environment must matter.'],
  ['Bandura: controlled experiments show imitation of aggression.', 'Strength', 'Scientific evidence.'],
  ['Freud: concepts like the superego cannot be measured.', 'Weakness', 'Untestable.'],
  ['Marxism: explains why corporate crime is under-prosecuted.', 'Strength', 'Selective enforcement.'],
  ['Labelling: does not explain why the first act of deviance happens.', 'Weakness', 'Primary deviance.'],
  ['Left realism: takes working-class victims seriously.', 'Strength', 'Victim-focused.'],
  ['Lombroso: no proper comparison with non-criminals.', 'Weakness', 'No control group.']
] };
TOOLS.policysort = { type: 'sort', title: 'Which theory informs this policy?', intro: 'Match each policy to the theory behind it.', cats: ['Biological', 'Individualistic', 'Right realism', 'Left realism', 'Labelling'], items: [
  ['Zero tolerance of graffiti and begging', 'Right realism', 'Broken windows.'],
  ['CBT course in prison to change thinking errors', 'Individualistic', 'Cognitive-behavioural.'],
  ['Voluntary medication to suppress sexual urges', 'Biological', 'Hormonal.'],
  ['Community Safety Partnership of police, council and health services', 'Left realism', 'Multi-agency.'],
  ['Youth diversion instead of court for a first offence', 'Labelling', 'Avoid the label.'],
  ['Alley-gating and CCTV', 'Right realism', 'Situational crime prevention.'],
  ['Token economy in a young offender institution', 'Individualistic', 'Operant conditioning.'],
  ['Diet supplements to reduce aggression', 'Biological', 'Gesch.']
] };
TOOLS.socialchangesort = { type: 'sort', title: 'Which social change?', intro: 'Classify the social change behind each policy.', cats: ['Values/norms', 'Public perception', 'Demographic', 'Cultural/technological'], items: [
  ['Same-sex marriage legalised in 2013', 'Values/norms', 'Changed attitudes to sexuality.'],
  ['Minimum sentences for repeat knife possession', 'Public perception', 'Fear of knife crime.'],
  ['Prisons adapting cells for elderly prisoners', 'Demographic', 'Ageing population.'],
  ['Online Safety Act 2023', 'Cultural/technological', 'Social media.'],
  ['Smacking ban in Wales', 'Values/norms', 'Children’s rights.'],
  ['Psychoactive Substances Act 2016', 'Cultural/technological', 'Legal highs.']
] };
TOOLS.pressuresort = { type: 'sort', title: 'What kind of campaign?', intro: 'Classify each campaign.', cats: ['Newspaper', 'Individual', 'Pressure group'], items: [
  ['News of the World: “name and shame”', 'Newspaper', 'Sarah’s Law.'],
  ['Marie McCourt: Helen’s Law', 'Individual', ''],
  ['Snowdrop Campaign', 'Pressure group', 'Dunblane parents.'],
  ['Howard League for Penal Reform', 'Pressure group', ''],
  ['Gina Martin: upskirting', 'Individual', ''],
  ['Daily Mail “Murderers” front page', 'Newspaper', 'Stephen Lawrence.']
] };
