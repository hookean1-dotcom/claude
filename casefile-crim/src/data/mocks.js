/* ==========================================================
   ASSESSMENT GUIDE, MOCK EXAMS and PRACTICE BRIEFS
   ========================================================== */
const ASSESS_HTML = rich(`
<div class="eyebrow">WJEC Level 3 Applied Diploma in Criminology</div>
<h1 class="display" style="font-size:clamp(32px,5vw,50px);margin-top:6px">How you are assessed</h1>
<p class="lede">Four mandatory units, each worth 25% of the Diploma. Two are exams, two are controlled assessments. The Applied Certificate is Units 1 and 2 only, each worth 50%. Since 2020 you must pass every unit to receive a qualification grade.</p>

<h2>The four units</h2>
<div class="tbl"><table><tr><th>Unit</th><th>Assessment</th><th>Marks</th><th>Purpose</th></tr>
<tr><td><b>1 · Changing awareness of crime</b></td><td>Internal controlled assessment</td><td>100</td><td>Plan campaigns for change relating to crime</td></tr>
<tr><td><b>2 · Criminological theories</b></td><td>External exam, 1 h 30</td><td>75</td><td>Apply theories and Unit 1 learning to examine how policy is set</td></tr>
<tr><td><b>3 · Crime scene to courtroom</b></td><td>Internal controlled assessment</td><td>100</td><td>Examine information to review the justice of verdicts</td></tr>
<tr><td><b>4 · Crime and punishment</b></td><td>External exam, 1 h 30</td><td>75</td><td>Evaluate social control in delivering policy (synoptic)</td></tr></table></div>

<h2>The exams (Units 2 and 4)</h2>
<ul><li>90 minutes, 75 marks, <b>three questions</b>, each with an applied, problem-solving scenario.</li><li>Short and extended answers based on stimulus material.</li><li>Every paper assesses all learning outcomes; assessment criteria are sampled each year.</li><li>Available on screen or on paper; sat in the summer series.</li><li>Two resit opportunities per external unit — the best result counts.</li></ul>
<div class="grid g2"><div class="tbl"><table><tr><th>Unit 2 LO</th><th>Marks</th></tr><tr><td>LO1 Social constructions of criminality</td><td>11–19</td></tr><tr><td>LO2 Theories of criminality</td><td>11–19</td></tr><tr><td>LO3 Causes of criminality</td><td>19–26</td></tr><tr><td>LO4 Causes of policy change</td><td>19–26</td></tr></table></div>
<div class="tbl"><table><tr><th>Unit 4 LO</th><th>Marks</th></tr><tr><td>LO1 The criminal justice system</td><td>19–26</td></tr><tr><td>LO2 Punishment</td><td>23–30</td></tr><tr><td>LO3 Social control</td><td>26–34</td></tr></table></div></div>

<h2>Controlled assessment (Units 1 and 3)</h2>
<ul><li>Based on a WJEC model assignment (which your centre may adapt) with an <b>applied purpose</b>.</li><li>Controls on <b>time, resources, supervision, collaboration and resubmission</b>. Teachers can explain the task and criteria but cannot give feedback on your work during the assessment.</li><li>Marked by your teacher against the <b>mark bands</b> for each assessment criterion, then moderated by WJEC.</li><li>You sign a declaration that the work is your own. One resit opportunity per internal unit.</li></ul>
<p>The exact mark bands for every criterion are in each topic’s <b>Assessment practice</b> tab, and the <a href="#/t/S.2">controlled assessment skills</a> topic shows how the 100 marks are spread.</p>

<h2>Grading</h2>
<div class="tbl"><table><tr><th>Unit grade (UMS out of 100)</th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th></tr><tr><td>Uniform mark</td><td>80</td><td>70</td><td>60</td><td>50</td><td>40</td></tr></table></div>
<div class="tbl"><table><tr><th>Qualification</th><th>Max UMS</th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr>
<tr><td>Applied Diploma</td><td>400</td><td>320</td><td>280</td><td>240</td><td>200</td><td>160</td></tr>
<tr><td>Applied Certificate</td><td>200</td><td>160</td><td>140</td><td>120</td><td>100</td><td>80</td></tr></table></div>
<p><b>A*</b> (Diploma only): an overall grade A <i>and</i> at least 90% of the UMS for Units 3 and 4 combined. A “near pass” rule applies to the external units.</p>

<h2>What the grades look like</h2>
<ul><li><b>A</b> — depth of knowledge; applies it accurately and independently to a range of issues; uses a wide range of information; valid conclusions and reasoned judgements; well-structured writing with specialist vocabulary.</li><li><b>C</b> — clear knowledge; applies it; uses a range of sources; some analysis; valid conclusions; some specialist vocabulary.</li><li><b>E</b> — basic knowledge; limited application; limited sources; basic analysis and conclusions; non-specialist language.</li></ul>

<h2>Synoptic assessment</h2>
<p>Unit 2 requires you to draw on Unit 1; Unit 4 requires you to draw on Units 1, 2 and 3. See <a href="#/t/S.3">synoptic links</a>.</p>`);

/* ---------- helpers ---------- */
const Q = (q, m, ms, scen) => scen ? { q, m, ms, scen } : { q, m, ms };

const MOCKS = [
  { id: 'u2a', unit: '2', title: 'Unit 2 · Paper A', meta: '1 hr 30 · 75 marks', mins: 90, blurb: 'Theories and policy: a teenage offender, a corporate fraud and a campaign after a tragedy.', instr: 'Answer all three questions. Each question is worth 25 marks. Refer to the scenario throughout and draw on Unit 1 where relevant.', build: () => [
    { h: 'Question 1', css: 'var(--u2)', qs: [
      Q('(a) Using the scenario, compare criminal behaviour and deviance. [6]', 6, ['definitions of crime and deviance', 'swearing and truancy — deviant; formal school sanctions', 'criminal damage and theft — criminal and deviant', 'formal v informal sanctions', 'implications for Callum — record, labelling'], 'Callum, 15, has been excluded from school twice for swearing at teachers and truanting. Last month he was arrested with friends for spraying graffiti on a railway bridge and stealing from a shop. His older brother is in prison, and neighbours now call Callum “trouble”. Callum’s mother says he spends hours playing violent video games.'),
      Q('(b) Describe one individualistic theory that could explain Callum’s behaviour. [4]', 4, ['e.g. Bandura’s social learning — observing and imitating brother, video games, vicarious reinforcement', 'or Eysenck, Freud/Bowlby', 'accurate description', 'reference to research']),
      Q('(c) Analyse Callum’s behaviour using two sociological theories. [6]', 6, ['labelling — neighbours’ label; master status; self-fulfilling prophecy', 'subculture/status frustration — excluded from school', 'strain or left realism', 'clear links to the scenario']),
      Q('(d) Evaluate the effectiveness of labelling theory in explaining Callum’s behaviour. [9]', 9, ['strengths — explains effect of reactions; secondary deviance', 'weaknesses — does not explain primary deviance; ignores choice; other theories fit (social learning)', 'evidence (Becker, Lemert)', 'judgement'])
    ] },
    { h: 'Question 2', css: 'var(--u2)', qs: [
      Q('(a) Explain why white-collar crime like this is often not seen as “real” crime. [5]', 5, ['low public awareness; complexity', 'victims diffuse/unaware', 'social construction — seen as not deviant', 'media coverage limited (Unit 1)', 'Marxist view'], 'Directors of a large housing company knowingly used cheaper, unsafe materials in blocks of flats to increase profits. A fire later injured several residents. The directors were given fines but no prison sentences. A local newspaper says “these are the real criminals”.'),
      Q('(b) Analyse the directors’ behaviour using Merton’s strain theory and Marxism. [8]', 8, ['Merton — innovation: goal of profit by illegitimate means', 'Marxism — capitalism encourages profit over safety; selective enforcement; lenient punishment', 'links to scenario', 'comparison of the two']),
      Q('(c) Assess how criminological theories have informed policies to deal with corporate crime. [12]', 12, ['Marxism — regulation; corporate manslaughter law (2007); failure to prevent offences', 'rational choice/right realism — deterrence through large fines', 'labelling — naming and shaming companies', 'effectiveness — few prosecutions (Grenfell pending)', 'judgement'])
    ] },
    { h: 'Question 3', css: 'var(--u2)', qs: [
      Q('(a) Explain how social changes have affected policy on this kind of crime. [6]', 6, ['changing values — attitudes to women and online abuse', 'public perception — media coverage', 'cultural/technological change — smartphones, social media', 'examples: upskirting 2019, cyber-flashing, Online Safety Act 2023'], 'After a teenager took her own life following online abuse, her parents started a petition and a campaign on social media, supported by a national newspaper and a charity, calling for a new law to make tech companies responsible for harmful content.'),
      Q('(b) Discuss how campaigns like this affect policy making. [9]', 9, ['individual campaigns — parents (e.g. Molly Russell’s family)', 'newspaper campaigns — reach and pressure', 'pressure groups/charities — expertise and lobbying', 'examples from Unit 1 (Helen’s Law, Gina Martin, Sarah’s Law)', 'limits — slow, watered down', 'conclusion']),
      Q('(c) Describe one biological theory of criminality. [4]', 4, ['e.g. Lombroso, Sheldon, Jacobs, twin/adoption studies', 'key idea', 'research', 'accurate detail']),
      Q('(d) Explain the social construction of criminality, using one example. [6]', 6, ['laws vary by culture, time, circumstances', 'example explained in detail', 'reasons — values, power, media, campaigns'])
    ] }
  ] },
  { id: 'u2b', unit: '2', title: 'Unit 2 · Paper B', meta: '1 hr 30 · 75 marks', mins: 90, blurb: 'Riots, a violent offender and a local anti-social behaviour policy.', instr: 'Answer all three questions. Each question is worth 25 marks.', build: () => [
    { h: 'Question 1', css: 'var(--u2)', qs: [
      Q('(a) Using the scenario, explain how the law is applied differently according to circumstances. [5]', 5, ['same act, different outcomes: protest v riot; self-defence', 'age of those involved', 'police discretion', 'context of disorder — deterrent sentencing'], 'After a man was shot by police, a peaceful protest turned into rioting in a city. Shops were looted by people of all ages. Some said they were angry at the police; others admitted they joined in because “everyone was getting free stuff”. Messages spread quickly on social media.'),
      Q('(b) Analyse the rioters’ behaviour using left realism and right realism. [8]', 8, ['left realism — relative deprivation, marginalisation (anger at police), subculture', 'right realism — rational choice, opportunity, weak control', 'social media and social learning', 'links to 2011 riots']),
      Q('(c) Evaluate the effectiveness of sociological theories in explaining the riots. [12]', 12, ['strengths of realism, strain, anomie', 'weaknesses — cannot explain why most did not riot; individual factors', 'evidence — Reading the Riots', 'comparison with individualistic theories', 'judgement'])
    ] },
    { h: 'Question 2', css: 'var(--u2)', qs: [
      Q('(a) Describe genetic theories of criminality. [5]', 5, ['XYY — Jacobs', 'twin studies — Lange, Christiansen', 'adoption studies — Mednick', 'MAOA — Brunner'], 'Jordan, 26, has convictions for several violent assaults. His biological father, whom he has never met, also had convictions for violence. Jordan was adopted as a baby by a caring family. After a fight, a brain scan showed damage to his frontal lobe.'),
      Q('(b) Analyse Jordan’s behaviour using biological theories. [8]', 8, ['adoption — resemblance to biological father supports genetic influence', 'brain damage — prefrontal cortex (Raine)', 'links to scenario', 'possible gene–environment interaction']),
      Q('(c) Evaluate the use of biological theories in explaining Jordan’s criminality. [12]', 12, ['strengths — adoption evidence (Mednick); brain imaging', 'weaknesses — determinism; methodology; other explanations (peers)', 'ethical issues', 'judgement'])
    ] },
    { h: 'Question 3', css: 'var(--u2)', qs: [
      Q('(a) Assess the use of criminological theories in informing the council’s possible policies. [12]', 12, ['right realism — dispersal orders, CCTV, zero tolerance', 'left realism — multi-agency, youth provision', 'labelling — avoid criminalising young people', 'effectiveness evidence', 'judgement'], 'A council is under pressure from a local newspaper campaign about gangs of young people in a town centre. Some councillors want a dispersal order and more CCTV. Others want a youth centre and mentoring run with the police and a local charity.'),
      Q('(b) Explain how public perception of crime affects policy development. [6]', 6, ['media and moral panics shape perception', 'penal populism', 'examples — knife crime minimum sentences; Dangerous Dogs Act', 'gap between perception and statistics']),
      Q('(c) Compare criminal behaviour and deviance, with examples. [7]', 7, ['definitions', 'criminal and deviant; deviant only; criminal only', 'sanctions', 'implications'])
    ] }
  ] },
  { id: 'u4a', unit: '4', title: 'Unit 4 · Paper A', meta: '1 hr 30 · 75 marks', mins: 90, blurb: 'A new law, sentencing a repeat offender, and agencies managing a released prisoner.', instr: 'Answer all three questions. Each question is worth 25 marks. Draw on Units 1, 2 and 3.', build: () => [
    { h: 'Question 1', css: 'var(--u4)', qs: [
      Q('(a) Describe the government processes that would be used to make this law. [6]', 6, ['Green and White Papers', 'Bill stages in Commons and Lords', 'Royal Assent', 'campaign origins (synoptic Unit 1)'], 'After several high-profile deaths, campaigners persuade the government to create a new offence of causing death through dangerous use of an e-scooter. Later, a judge must decide whether a rider who killed a pedestrian while using a phone falls within the new law.'),
      Q('(b) Describe the judicial processes by which judges make criminal law. [6]', 6, ['precedent — hierarchy, ratio, overruling (Jogee)', 'statutory interpretation — literal, golden, mischief, purposive', 'application to the e-scooter law']),
      Q('(c) Describe the due process and crime control models of criminal justice. [6]', 6, ['Packer', 'crime control — efficiency, presumption of guilt', 'due process — rights, presumption of innocence', 'examples']),
      Q('(d) Describe the organisation of the criminal justice system that would deal with the rider. [7]', 7, ['police investigation', 'CPS charging', 'courts', 'punishment — HMPPS', 'relationships between agencies'])
    ] },
    { h: 'Question 2', css: 'var(--u4)', qs: [
      Q('(a) Explain forms of social control that failed to prevent Dani’s offending. [6]', 6, ['internal — internalisation, rational ideology', 'external — fear of punishment, coercion', 'control theory — Hirschi’s bonds, Reckless', 'application to Dani'], 'Dani, 30, has been convicted of her eighth theft offence. She is addicted to heroin, has been homeless on and off, and has a young child in foster care. The shopkeeper she stole from says his business is struggling. The magistrates are considering either a short prison sentence or a community order with drug treatment.'),
      Q('(b) Discuss the aims of punishment in sentencing Dani. [9]', 9, ['retribution', 'rehabilitation — addiction', 'individual and general deterrence', 'public protection', 'reparation — shopkeeper', 'tensions and theory links']),
      Q('(c) Assess how well the two sentences being considered would meet the aims of punishment. [10]', 10, ['short prison — retribution, short incapacitation; high reoffending; loses support', 'community order with DRR — rehabilitation, reparation; lower reoffending evidence', 'cost and overcrowding', 'synoptic theory', 'judgement'])
    ] },
    { h: 'Question 3', css: 'var(--u4)', qs: [
      Q('(a) Explain the role of two agencies in achieving social control in this case. [6]', 6, ['probation — supervision, risk assessment, recall', 'police — monitoring, MAPPA', 'charity — housing, mentoring', 'aims, funding, philosophy, working practices'], 'Ellis, 35, is released on licence after serving a sentence for serious assault. He is supervised by probation under MAPPA, and a charity helps him find housing. Two months later he breaches his licence and commits another assault. An inspection report criticises the probation service’s workload.'),
      Q('(b) Examine the limitations of agencies in achieving social control. [9]', 9, ['recidivism', 'finance — workloads', 'access to resources', 'local and national policies', 'civil liberties', 'implications — Zara Aleena comparison']),
      Q('(c) Evaluate the effectiveness of probation and prisons in achieving social control. [10]', 10, ['evidence of success and failure', 'Transforming Rehabilitation; reunification 2021', 'reoffending and overcrowding', 'sources judged for bias/currency (inspection report)', 'judgement'])
    ] }
  ] },
  { id: 'u4b', unit: '4', title: 'Unit 4 · Paper B', meta: '1 hr 30 · 75 marks', mins: 90, blurb: 'Protest and moral imperatives, a youth crime prevention scheme and a police force under scrutiny.', instr: 'Answer all three questions. Each question is worth 25 marks.', build: () => [
    { h: 'Question 1', css: 'var(--u4)', qs: [
      Q('(a) Explain why agencies find it hard to control crime committed by people with moral imperatives. [6]', 6, ['belief in moral duty; deterrence ineffective', 'punishment as publicity/martyrdom', 'civil liberties — right to protest', 'examples — climate activists'], 'Climate protesters repeatedly block a motorway, causing long delays. They say they have a moral duty to act. Several are jailed for conspiracy to cause a public nuisance. Some members of the public call the sentences too harsh; others say they should be longer.'),
      Q('(b) Discuss the aims of punishment in sentencing the protesters. [9]', 9, ['retribution — harm caused', 'general deterrence — riot sentences comparison', 'individual deterrence — limited', 'public protection', 'reparation', 'proportionality debate']),
      Q('(c) Describe the due process and crime control models and apply them to the protesters’ case. [10]', 10, ['Packer’s models', 'crime control features — new protest powers, fast processing', 'due process — right to fair trial, jury', 'application and judgement'])
    ] },
    { h: 'Question 2', css: 'var(--u4)', qs: [
      Q('(a) Describe the contribution of agencies to achieving social control using environmental and behavioural measures. [8]', 8, ['environmental — alley-gating, lighting, CCTV, design', 'behavioural — injunctions, CBOs, token economy', 'institutional and disciplinary procedures', 'gaps in state provision — charities'], 'A Community Safety Partnership in a Welsh town launches a scheme to reduce youth crime. It includes alley-gates and better lighting, criminal behaviour orders for persistent offenders, a points-based reward scheme at a youth centre, and mentoring from a local charity.'),
      Q('(b) Explain forms of social control shown in the scheme, with reference to theory. [7]', 7, ['internal and external forms', 'control theory — Hirschi; Reckless', 'right realism — situational measures', 'operant conditioning — token economy']),
      Q('(c) Describe the organisation and relationships of the agencies involved. [10]', 10, ['Community Safety Partnership — Crime and Disorder Act 1998', 'police, PCC, council, youth justice, charities', 'co-operation and tensions', 'Welsh context — devolved and reserved powers'])
    ] },
    { h: 'Question 3', css: 'var(--u4)', qs: [
      Q('(a) Evaluate the effectiveness of the police in achieving social control. [12]', 12, ['successes — falling crime, burglary detection, partnerships', 'failures — trust (Casey Review), low charge rates', 'limitations — finance, officer experience', 'judging the evidence (newspaper v inspection)', 'judgement'], 'A report by the police inspectorate finds that a force has improved how it answers 999 calls, but that it charges very few suspects of rape and has lost the trust of some communities. A newspaper headline says “Police failing us all”. The force says it has recruited hundreds of new officers.'),
      Q('(b) Examine the information in the scenario for bias, opinion, currency and accuracy. [6]', 6, ['inspectorate report — independent, evidence-based', 'newspaper headline — opinion, sensational', 'force statement — self-interest/bias', 'currency and accuracy considered']),
      Q('(c) Explain the role of the CPS and the judiciary in social control. [7]', 7, ['CPS — Full Code Test, charging, prosecution', 'judiciary — independence, sentencing, fair trial', 'aims, funding, philosophy'])
    ] }
  ] },
  { id: 'u1brief', unit: '1', title: 'Unit 1 · Practice brief', meta: 'Controlled assessment practice · 100 marks', mins: 480, blurb: 'Hate crime against disabled people in a Welsh town: analyse, compare campaigns, plan and design.', instr: 'This is a practice brief to rehearse the whole controlled assessment. Your centre’s real brief and time allowance may differ (WJEC model assignments have typically allowed around 8 hours). Use the mark bands under each task to aim for the top band.', build: () => [
    { h: 'The brief', css: 'var(--u1)', note: 'A disability charity in Aberbrân has asked you to help. Local residents with learning disabilities report name-calling, theft of their benefits and damage to their homes, but few incidents reach the police. The charity has also discovered that a former manager fraudulently claimed expenses for years. The charity wants a campaign for change.', qs: [
      { q: 'AC1.1 Analyse two types of crime evident in the brief. [4]', m: 4, ms: ['disability hate crime and occupational white-collar crime', 'offences, victims, offenders, public awareness'], bands: U1_BANDS['1.1'] },
      { q: 'AC1.2 Explain the reasons these two crimes are unreported. [4]', m: 4, ms: ['fear, shame, not recognised as a crime, dependence on abusers', 'complexity and “not affected” for fraud'], bands: U1_BANDS['1.2'] },
      { q: 'AC1.3 Explain the consequences of unreported crime. [4]', m: 4, ms: ['ripple effect, police prioritisation, unrecorded crime', 'positive change — Pilkington case'], bands: U1_BANDS['1.3'] },
      { q: 'AC1.4 Describe media representation of crime. [6]', m: 6, ms: ['a range of media, factual and fictional', 'examples'], bands: U1_BANDS['1.4'] },
      { q: 'AC1.5 Explain the impact of media representations on public perception of crime. [6]', m: 6, ms: ['moral panic, stereotyping, perceptions of trends', 'theory'], bands: U1_BANDS['1.5'] },
      { q: 'AC1.6 Evaluate two methods of collecting statistics about crime. [6]', m: 6, ms: ['police recorded crime and CSEW', 'reliability, validity, ethics, strengths/limitations, purpose'], bands: U1_BANDS['1.6'] },
      { q: 'AC2.1 Compare campaigns for change. [10]', m: 10, ms: ['range of campaigns', 'links to your planned campaign'], bands: U1_BANDS['2.1'] },
      { q: 'AC2.2 Evaluate the effectiveness of media used in campaigns for change. [15]', m: 15, ms: ['range of media and materials', 'reasoned judgements'], bands: U1_BANDS['2.2'] },
      { q: 'AC3.1 Plan a campaign for change relating to a crime in the brief. [10]', m: 10, ms: ['aims and SMART objectives, justification, audience, methods, materials, finances, timescales, resources'], bands: U1_BANDS['3.1'] },
      { q: 'AC3.2 Design materials for your campaign. [20]', m: 20, ms: ['structure, images, persuasive language, call to action, audience, alignment, accuracy'], bands: U1_BANDS['3.2'] },
      { q: 'AC3.3 Justify your campaign. [15]', m: 15, ms: ['case for action, evidence, persuasive language, counter-arguments'], bands: U1_BANDS['3.3'] }
    ] }
  ] },
  { id: 'u3brief', unit: '3', title: 'Unit 3 · Practice brief', meta: 'Controlled assessment practice · 100 marks', mins: 480, blurb: 'An innocence project reviews a murder conviction based on DNA, an eyewitness and a confession.', instr: 'This is a practice brief. Your centre’s real brief and time allowance may differ (WJEC model assignments have typically allowed around 8 hours). Use the mark bands under each task.', build: () => [
    { h: 'The brief', css: 'var(--u3)', note: 'In 2012 Rhys Morgan was convicted of murdering a man outside a nightclub in Swansea. The evidence was: a partial DNA profile on the victim’s jacket consistent with Rhys; an eyewitness who picked him from a video identification parade after seeing his photo in a newspaper; and a confession made after 20 hours in custody without a solicitor. A local newspaper called him “the nightclub monster” before the trial. An innocence project at a university has asked you to review the case.', qs: [
      { q: 'AC1.1 Evaluate the effectiveness of the roles of personnel involved in the investigation. [10]', m: 10, ms: ['CSIs, forensic scientists, detectives, pathologist, CPS', 'limitations: cost, expertise, availability'], bands: U3_BANDS['1.1'] },
      { q: 'AC1.2 Assess the usefulness of investigative techniques in this and other investigations. [20]', m: 20, ms: ['forensic, surveillance, profiling, databases, interviews', 'situations and types of crime'], bands: U3_BANDS['1.2'] },
      { q: 'AC1.3 Explain how the evidence was processed. [6]', m: 6, ms: ['physical (DNA) and testimonial (eyewitness, confession)', 'collection, transfer, storage, analysis; case studies'], bands: U3_BANDS['1.3'] },
      { q: 'AC1.4 Examine the rights of the suspect, victim and witnesses from investigation to appeal. [6]', m: 6, ms: ['PACE rights (s58 breach?)', 'victim’s family — Victims’ Code', 'witness — special measures', 'appeal routes, CCRC'], bands: U3_BANDS['1.4'] },
      { q: 'AC2.1 Explain the requirements of the CPS for prosecuting Rhys. [4]', m: 4, ms: ['Full Code Test — evidential and public interest stages'], bands: U3_BANDS['2.1'] },
      { q: 'AC2.2 Describe the trial process in this case. [4]', m: 4, ms: ['first appearance, bail/remand, PTPH, Crown Court trial, roles, appeals'], bands: U3_BANDS['2.2'] },
      { q: 'AC2.3 Explain the rules of evidence that apply. [4]', m: 4, ms: ['s76/s78 PACE — the confession', 'Turnbull — identification', 'disclosure — CPIA 1996'], bands: U3_BANDS['2.3'] },
      { q: 'AC2.4 Assess the key influences affecting the outcome. [10]', m: 10, ms: ['evidence, media (“nightclub monster”), witness, experts, politics, judiciary, legal teams'], bands: U3_BANDS['2.4'] },
      { q: 'AC2.5 Discuss the use of laypeople in criminal cases. [6]', m: 6, ms: ['juries and magistrates — strengths and weaknesses'], bands: U3_BANDS['2.5'] },
      { q: 'AC3.1 Examine the information in the brief and other cases for validity. [15]', m: 15, ms: ['evidence, media reports, judgements', 'bias, opinion, circumstances, currency, accuracy'], bands: U3_BANDS['3.1'] },
      { q: 'AC3.2 Draw conclusions: was the verdict safe and just, and the sentence just? [15]', m: 15, ms: ['objective, evidence-based conclusion', 'comparison with other miscarriages of justice'], bands: U3_BANDS['3.2'] }
    ] }
  ] }
];
