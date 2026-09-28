/* ==========================================================
   UNIT 4 · CRIME AND PUNISHMENT — LO1 and LO2 (AC1.1 – AC2.3)
   ========================================================== */
addCases([
  { id: 'jogee', n: 'R v Jogee', y: 2016, a: '4', t: '4.1.1', c: 'Case', f: 'Jogee was convicted of murder under the “joint enterprise” rule because he foresaw that his friend might use a knife. The rule came from a Privy Council case in 1984.', p: 'The Supreme Court held that the law had taken a “wrong turn” for over 30 years: foresight is only evidence of intention to assist, not a substitute for it. An example of judges changing criminal law. Campaigners (JENGbA) had argued joint enterprise was unjust, particularly for young Black men.' },
  { id: 'smithhughes', n: 'Smith v Hughes', y: 1960, a: '4', t: '4.1.1', c: 'Case', f: 'Sex workers tapped on windows and called to men from balconies. The Street Offences Act 1959 made it an offence to solicit “in a street”.', p: 'Using the mischief rule, the court held they were guilty: the Act aimed to stop people being harassed in the street. An example of statutory interpretation by judges.' },
  { id: 'packer', n: 'Packer: two models of criminal justice', y: 1964, a: '4', t: '4.1.3', c: 'Theory', f: 'Herbert Packer, an American law professor, described two competing value systems in criminal justice: the crime control model and the due process model.', p: 'Crime control is like a conveyor belt — fast, efficient processing, presuming guilt, prioritising the control of crime. Due process is like an obstacle course — protecting the rights of the accused and the presumption of innocence. Real systems mix both.' },
  { id: 'thomascommission', n: 'Commission on Justice in Wales', y: 2019, a: '4', t: '4.1.2', c: 'Report', f: 'A commission chaired by Lord Thomas of Cwmgiedd, a former Lord Chief Justice, reviewed the justice system in Wales. Policing and criminal justice are controlled from Westminster, while related services such as health, education and housing are devolved to the Welsh Government.', p: 'Recommended that justice and policing should be devolved to Wales. It shows the complex relationships between agencies and governments in Wales.' },
  { id: 'peel', n: 'Peelian principles and policing by consent', y: 1829, a: '4', t: '4.1.2', c: 'Report', f: 'The Metropolitan Police Act 1829, promoted by Home Secretary Robert Peel, created the first modern police force in London. Principles attributed to Peel say the police’s basic mission is to prevent crime and disorder and that “the police are the public and the public are the police”.', p: 'The foundation of “policing by consent”: police effectiveness depends on public approval and co-operation, not force. Used to evaluate controversies over stop and search and police misconduct.' },
  { id: 'reckless', n: 'Reckless: containment theory', y: 1961, a: '4', t: '4.2.1', c: 'Theory', f: 'Walter Reckless argued that people are kept from crime by inner containment (self-control, a good self-concept, tolerance of frustration) and outer containment (family, community, supervision, discipline).', p: 'A control theory explaining why most people conform even when pushed or pulled towards crime. Links internal and external forms of social control.' },
  { id: 'riotsentences', n: 'Riot sentences: R v Blackshaw', y: 2011, a: '4', t: '4.2.2', c: 'Case', f: 'Two young men were jailed for four years for using Facebook to encourage riots in their towns in August 2011, even though no riots took place.', p: 'The Court of Appeal upheld the sentences, saying the riots were an aggravating context and deterrent sentences were justified. A clear example of general deterrence — critics said the sentences were disproportionate.' },
  { id: 'martinson', n: 'Martinson: “nothing works”', y: 1974, a: '4', t: '4.2.2', c: 'Study', f: 'Robert Martinson reviewed over 200 studies of rehabilitation programmes in the USA and concluded that, with few exceptions, they had no appreciable effect on reoffending.', p: 'Contributed to a shift away from rehabilitation towards retribution and incapacitation in the USA and UK. Martinson later partly withdrew his conclusion, and newer research shows some programmes do work.' },
  { id: 'halden', n: 'Norway’s prisons (Halden)', y: 2010, a: '4', t: '4.2.3', c: 'Case', f: 'Halden prison in Norway has private rooms, kitchens, education and work, and staff trained to build relationships with prisoners. Norway emphasises “normality” — life inside should be as close as possible to life outside.', p: 'Norway’s reoffending rates are reported to be among the lowest in Europe. Used to argue that rehabilitation works better than punishment, though Norway’s lower inequality and smaller prison population make comparison difficult.' },
  { id: 'sds40', n: 'Early release to ease overcrowding (SDS40)', y: 2024, a: '4', t: '4.2.3', c: 'Case', f: 'With prisons in England and Wales almost full, the government moved many prisoners serving standard determinate sentences to automatic release at 40% of their sentence rather than 50% in September and October 2024. Serious violent, sexual and domestic abuse offences were excluded.', p: 'Shows that the use of imprisonment is limited by capacity and cost. The Independent Sentencing Review (2025), led by David Gauke, recommended fewer short prison sentences and more community punishment; the government brought forward a Sentencing Bill — check its current status.' }
]);

/* ---------- AC1.1 Law making ---------- */
TOPICS.push({
  id: '4.1.1', unit: '4', ref: 'AC1.1', title: 'How criminal law is made',
  short: 'Government processes (the legislative process) and judicial processes (precedent and statutory interpretation)',
  summary: 'Criminal law in England and Wales comes from two main sources: Parliament, which passes Acts through the legislative process, and judges, who develop the common law through precedent and interpret statutes. This criterion asks you to describe both processes.',
  spec: ['Government processes: the legislative process', 'Judicial processes: the role of judges in making criminal law', 'Synoptic: relate to the review of verdicts in Unit 3 and to campaigns and policy change in Unit 1'],
  learn: [
    { h: 'Government processes: making an Act', html: `
<ol><li><b>Ideas</b> come from government manifestos, the Law Commission, public inquiries, campaigns (Unit 1), judges, media and events.</li>
<li><b>Consultation</b> — a <b>Green Paper</b> sets out proposals for discussion; a <b>White Paper</b> sets out firm plans.</li>
<li><b>Bill</b> — most criminal justice Bills are Public Bills introduced by the Home Office or Ministry of Justice (some Private Members’ Bills also succeed, e.g. the Voyeurism (Offences) Act 2019 began as a Private Member’s Bill before the government took it on).</li>
<li><b>Stages in each House</b>: First Reading (formal introduction) → Second Reading (main debate on principles, vote) → Committee Stage (detailed line-by-line scrutiny and amendments) → Report Stage (consider amendments) → Third Reading (final vote). Then the same in the other House, with “ping-pong” to agree amendments.</li>
<li><b>Royal Assent</b> — the monarch signs it into law; a <b>commencement order</b> may bring it into force later.</li></ol>
<p>The House of Commons can override the Lords using the <b>Parliament Acts 1911 and 1949</b> (e.g. the Hunting Act 2004). Ministers can also make <b>delegated legislation</b> (statutory instruments) under powers in an Act. The <b>Senedd Cymru</b> can make laws in devolved areas, including creating offences — for example the smacking ban — but policing and most criminal justice are reserved to Westminster.</p>` },
    { h: 'Judicial processes: precedent', html: `
<ul><li><b>Common law</b> offences such as murder and manslaughter are defined by judges, not statute.</li>
<li><b>Judicial precedent</b> (<i>stare decisis</i> — stand by what has been decided): lower courts must follow the <b>ratio decidendi</b> (the legal reason for a decision) of higher courts. The <b>Supreme Court</b> can depart from its own previous decisions (Practice Statement 1966).</li>
<li>Judges can <b>overrule</b> earlier cases ([[c:jogee]]), <b>distinguish</b> cases on their facts, and develop new law to fit changing values ([[c:rvr]] abolished the marital rape exemption).</li></ul>` },
    { h: 'Judicial processes: statutory interpretation', html: `
<p>When the words of an Act are unclear, judges interpret them using:</p>
<ul><li><b>Literal rule</b> — the ordinary meaning of the words, even if the result is harsh.</li><li><b>Golden rule</b> — modify the literal meaning to avoid an absurd result.</li><li><b>Mischief rule</b> — what problem was the Act meant to remedy? ([[c:smithhughes]])</li><li><b>Purposive approach</b> — what was Parliament’s purpose? Judges may look at Hansard (Pepper v Hart, 1993).</li></ul>
<p>Judges must also interpret laws compatibly with human rights where possible (Human Rights Act 1998 s3).</p>` },
    { h: 'Synoptic links', html: `<p>Unit 1: campaigns lead to new Acts (Helen’s Law, Finn’s Law). Unit 3: miscarriages of justice led to the Criminal Appeal Act 1995 and the Post Office (Horizon System) Offences Act 2024 ([[c:postoffice]]). Unit 2: social change and theories influence what Parliament decides to criminalise.</p>` }
  ],
  debate: [{ q: 'Should judges make criminal law?', for: ['Judges can respond quickly to injustice (R v R; Jogee).', 'Parliament may be slow or reluctant to act on controversial issues.', 'Judges have legal expertise and deal with real cases.'], ag: ['Judges are unelected — Parliament is democratically accountable.', 'Judge-made law is retrospective, applying to past acts.', 'Judges depend on cases reaching court.', 'Parliament can consult widely and plan comprehensive reform.'] }],
  cases: ['jogee', 'smithhughes', 'rvr', 'postoffice'],
  worked: [],
  pitfalls: ['Mixing up the order of the parliamentary stages.', 'Forgetting that judges make law as well as Parliament.', 'Saying criminal justice is devolved to Wales — it is not.'],
  cards: [
    ['Green Paper v White Paper?', 'Green: consultation on proposals. White: firm plans for legislation.'],
    ['Order of stages in the Commons?', 'First Reading, Second Reading, Committee, Report, Third Reading.'],
    ['What is Royal Assent?', 'The monarch’s formal approval, making a Bill an Act.'],
    ['What do the Parliament Acts 1911 and 1949 allow?', 'The Commons to pass a Bill without the Lords’ consent after a delay.'],
    ['What is stare decisis?', 'Stand by what has been decided — the doctrine of precedent.'],
    ['What is the ratio decidendi?', 'The legal reason for a decision, which is binding.'],
    ['What did R v Jogee decide?', 'Joint enterprise law had taken a wrong turn; foresight is only evidence of intent.'],
    ['Four approaches to statutory interpretation?', 'Literal, golden, mischief, purposive.']
  ],
  quiz: [
    { q: 'The main debate on the principles of a Bill happens at…', o: ['Second Reading', 'First Reading', 'Royal Assent', 'Report Stage'], x: '' },
    { q: 'Smith v Hughes is an example of…', o: ['the mischief rule', 'the Parliament Acts', 'Royal Assent', 'a White Paper'], x: 'Soliciting from windows.' },
    { q: 'Which court can depart from its own previous decisions?', o: ['The Supreme Court', 'The magistrates’ court', 'The Crown Court', 'The youth court'], x: 'Practice Statement 1966.' },
    { q: 'Is policing devolved to the Senedd?', o: ['No — it is reserved to Westminster', 'Yes, fully', 'Only in North Wales', 'Only for youth crime'], x: 'The Thomas Commission recommended devolution.' }
  ],
  exam: [{ q: 'Using the scenario, describe how the proposed law could be made. [6]', m: 6, scen: 'After a campaign by the family of a teenager killed by a driver using a phone, the government proposes tougher penalties for using a mobile phone while driving.', ms: ['ideas from campaigns/media (synoptic Unit 1)', 'Green Paper and White Paper consultation', 'Bill stages in the Commons: First, Second Reading, Committee, Report, Third Reading', 'House of Lords stages; ping-pong', 'Royal Assent and commencement', 'possible delegated legislation; judges then interpret the Act'] }],
  tools: ['billsteps', 'lawmakingsort']
});

/* ---------- AC1.2 Organisation of the CJS ---------- */
TOPICS.push({
  id: '4.1.2', unit: '4', ref: 'AC1.2', title: 'The organisation of the criminal justice system',
  short: 'Police, law creation, courts, formal punishment and the relationships between agencies in England and Wales',
  summary: 'The criminal justice system is not one organisation but many agencies with different roles, funders and government departments. This criterion asks you to describe how the police, law creation, courts and formal punishment are organised, and the relationships and co-operation between the agencies.',
  spec: ['Police', 'Law creation', 'Courts', 'Formal punishment', 'Relationships between agencies and the extent of co-operation', 'Synoptic: roles of personnel from Unit 3; campaigns and policy change from Unit 1'],
  learn: [
    { h: 'Government departments', html: `
<ul><li><b>Home Office</b> — policing, crime prevention, immigration, counter-terrorism.</li><li><b>Ministry of Justice</b> — courts (through HM Courts &amp; Tribunals Service), prisons and probation (through HM Prison and Probation Service), sentencing policy, legal aid, the Youth Justice Board.</li><li><b>Attorney General’s Office</b> — oversees the CPS and the Serious Fraud Office.</li></ul>` },
    { h: 'The agencies', html: `
<div class="tbl"><table><tr><th>Area</th><th>Organisation</th></tr>
<tr><td><b>Police</b></td><td>43 territorial police forces in England and Wales, including four in Wales (Dyfed-Powys, Gwent, North Wales, South Wales). Each has a chief constable and an elected <b>Police and Crime Commissioner</b> (since 2012) who sets priorities and the budget. National bodies: the National Crime Agency, British Transport Police, the College of Policing, and inspectors (HMICFRS) and the IOPC (complaints)</td></tr>
<tr><td><b>Law creation</b></td><td>Parliament and the Senedd (AC1.1); the Sentencing Council issues sentencing guidelines</td></tr>
<tr><td><b>Prosecution</b></td><td>The CPS (Unit 3, AC2.1)</td></tr>
<tr><td><b>Courts</b></td><td>Magistrates’ courts, the Crown Court, youth courts, the Court of Appeal and the Supreme Court; run by HMCTS; independent judiciary led by the Lord Chief Justice</td></tr>
<tr><td><b>Formal punishment</b></td><td><b>HMPPS</b> runs public prisons and the <b>Probation Service</b> (reunified in 2021); some prisons are run privately (e.g. HMP Parc in Bridgend); the Parole Board decides release of some prisoners; youth justice services supervise young offenders</td></tr></table></div>` },
    { h: 'Relationships and co-operation', html: `
<ul><li><b>Multi-agency partnerships</b>: Community Safety Partnerships (Crime and Disorder Act 1998); Multi-Agency Public Protection Arrangements (<b>MAPPA</b>) for managing violent and sexual offenders (police, probation and prisons); Multi-Agency Risk Assessment Conferences (<b>MARACs</b>) for high-risk domestic abuse; Local Criminal Justice Boards.</li>
<li><b>Police and CPS</b> work together on charging; disagreements and delays can occur.</li>
<li><b>Wales</b>: the Welsh Government funds related services (health, housing, education) and has worked with justice agencies on blueprints for youth justice and female offending, but justice is not devolved ([[c:thomascommission]]).</li>
<li><b>Tensions</b>: different priorities and budgets; information-sharing failures ([[c:soham]]); prison capacity limits court and sentencing decisions ([[c:sds40]]).</li></ul>` }
  ],
  debate: [{ q: 'Do the agencies work together effectively?', for: ['MAPPA and MARACs bring agencies together on high-risk cases.', 'Community Safety Partnerships share local priorities.', 'Joint inspections by the justice inspectorates.'], ag: ['Information-sharing failures (Soham).', 'Different departments and budgets cause conflicts.', 'Capacity problems in one agency (prisons, courts) affect all the others.', 'Complex arrangements in Wales between devolved and reserved powers.'] }],
  cases: ['thomascommission', 'peel', 'soham', 'sds40'],
  worked: [],
  pitfalls: ['Listing agencies without explaining relationships — the specification asks for co-operation too.', 'Saying the Home Office runs prisons (it is the MoJ through HMPPS).'],
  cards: [
    ['How many territorial police forces in England and Wales?', '43, including four in Wales.'],
    ['What do Police and Crime Commissioners do?', 'Elected since 2012; set police priorities and budget, and hold the chief constable to account.'],
    ['Which department runs prisons and probation?', 'The Ministry of Justice, through HMPPS.'],
    ['What is MAPPA?', 'Multi-Agency Public Protection Arrangements for managing violent and sexual offenders.'],
    ['What is a MARAC?', 'A Multi-Agency Risk Assessment Conference for high-risk domestic abuse cases.'],
    ['Who oversees the CPS?', 'The Attorney General.'],
    ['What did the Thomas Commission recommend?', 'Devolving justice and policing to Wales.'],
    ['When was the Probation Service reunified?', '2021.']
  ],
  quiz: [
    { q: 'Which department is responsible for policing?', o: ['The Home Office', 'The Ministry of Justice', 'The Department for Education', 'The Treasury'], x: '' },
    { q: 'MAPPA brings together…', o: ['police, probation and prisons to manage dangerous offenders', 'juries and magistrates', 'newspapers and campaigners', 'the Senedd and the Lords'], x: '' },
    { q: 'Which of these is a police force in Wales?', o: ['Gwent Police', 'West Mercia Police', 'Avon and Somerset Police', 'Merseyside Police'], x: 'Also Dyfed-Powys, North Wales and South Wales.' },
    { q: 'Police and Crime Commissioners were first elected in…', o: ['2012', '1829', '1985', '2021'], x: '' }
  ],
  exam: [{ q: 'Describe the organisation of the criminal justice system in England and Wales, including the relationships between agencies. [6]', m: 6, ms: ['police — 43 forces, PCCs, Home Office, NCA', 'CPS — Attorney General', 'courts — HMCTS, judiciary', 'formal punishment — HMPPS prisons and probation, Parole Board', 'relationships — MAPPA, MARAC, CSPs; tensions', 'Welsh context'] }],
  tools: ['cjssort']
});

/* ---------- AC1.3 Models of criminal justice ---------- */
TOPICS.push({
  id: '4.1.3', unit: '4', ref: 'AC1.3', title: 'Models of criminal justice',
  short: 'The due process model and the crime control model (Packer)',
  summary: 'Herbert Packer described two models that capture the tension at the heart of criminal justice: the crime control model, which prioritises efficiently suppressing crime, and the due process model, which prioritises protecting the individual from wrongful conviction. This criterion asks you to describe both and apply them.',
  spec: ['Due process', 'Crime control', 'Synoptic: understanding of criminological theories from Unit 2 and review of verdicts from Unit 3'],
  learn: [
    { h: 'The two models', html: `
<div class="tbl"><table><tr><th></th><th>Crime control model</th><th>Due process model</th></tr>
<tr><td><b>Metaphor</b></td><td>A conveyor belt / assembly line</td><td>An obstacle course</td></tr>
<tr><td><b>Main aim</b></td><td>Repress crime efficiently to protect society</td><td>Protect the individual from the power of the state</td></tr>
<tr><td><b>Presumption</b></td><td>Presumption of guilt once arrested — trust police screening</td><td>Presumption of innocence until proven guilty in court</td></tr>
<tr><td><b>Values</b></td><td>Speed, efficiency, finality, police powers, guilty pleas</td><td>Fairness, accuracy, rights, legal safeguards, appeals</td></tr>
<tr><td><b>Attitude to errors</b></td><td>Some wrongful convictions are an acceptable cost</td><td>Better that the guilty go free than the innocent are convicted (Blackstone: ten guilty to one innocent)</td></tr>
<tr><td><b>Linked to</b></td><td>Right realism, penal populism</td><td>Human rights, liberal and left perspectives, labelling concerns</td></tr></table></div>
<p>Source: [[c:packer]].</p>` },
    { h: 'Examples in England and Wales', html: `
<div class="debate"><div class="for"><h5>Crime control features</h5><ul><li>Adverse inferences from silence (Criminal Justice and Public Order Act 1994)</li><li>Double jeopardy exception (CJA 2003)</li><li>Extended detention for terrorism suspects (up to 14 days)</li><li>Guilty plea discounts encouraging quick pleas</li><li>Plans to restrict jury trial to reduce the court backlog</li><li>Stop and search powers; DNA database</li></ul></div><div class="ag"><h5>Due process features</h5><ul><li>PACE rights: legal advice, detention limits, recorded interviews</li><li>Exclusion of evidence (s76 and s78 PACE)</li><li>Disclosure duties (CPIA 1996)</li><li>Jury trial; burden of proof beyond reasonable doubt</li><li>Appeals and the CCRC</li><li>Human Rights Act 1998, Article 6</li></ul></div></div>` },
    { h: 'Applying the models', html: `<p>Use the models to analyse cases and policies: miscarriages of justice such as the [[c:birminghamsix]] show crime control values (pressure to convict) overriding due process; the Post Office scandal ([[c:postoffice]]) shows what happens when the reliability of evidence is presumed. After such cases, reforms usually strengthen due process (PACE 1984 after the Confait case; the CCRC after the Birmingham Six), while terrorism and public fear push towards crime control.</p>` }
  ],
  debate: [{ q: 'Is the system in England and Wales closer to crime control or due process?', for: ['Crime control: over 90% of cases are dealt with in magistrates’ courts, many by guilty plea.', 'Erosion of the right to silence and double jeopardy.', 'Pressure from backlogs to speed cases up.'], ag: ['Due process: strong PACE safeguards and the presumption of innocence.', 'Appeals and the CCRC correct errors.', 'Human Rights Act protections.', 'Most systems blend both — the balance shifts with politics.'] }],
  cases: ['packer', 'birminghamsix', 'postoffice'],
  worked: [],
  pitfalls: ['Describing the models without examples from the real system.', 'Presenting one model as good and the other as bad — both have justifications.'],
  cards: [
    ['Who described the two models?', 'Herbert Packer (1964).'],
    ['Crime control metaphor?', 'A conveyor belt.'],
    ['Due process metaphor?', 'An obstacle course.'],
    ['Crime control presumption?', 'Presumption of guilt after police screening.'],
    ['Due process presumption?', 'Presumption of innocence.'],
    ['Give a crime control feature of the system.', 'Adverse inferences from silence; double jeopardy exception; guilty plea discounts.'],
    ['Give a due process feature.', 'PACE rights; exclusion of evidence; disclosure; appeals; jury trial.']
  ],
  quiz: [
    { q: 'Which model values speed and efficiency?', o: ['Crime control', 'Due process', 'Neither', 'Both equally'], x: 'Conveyor belt.' },
    { q: 'The right to free legal advice in custody reflects…', o: ['due process', 'crime control', 'right realism', 'penal populism'], x: '' },
    { q: 'Allowing a retrial after acquittal reflects…', o: ['crime control', 'due process', 'labelling', 'Durkheim'], x: 'Double jeopardy exception.' },
    { q: 'Packer compared due process to…', o: ['an obstacle course', 'a conveyor belt', 'a funnel', 'a panopticon'], x: '' }
  ],
  exam: [{ q: 'Using the scenario, describe the due process and crime control models of criminal justice. [6]', m: 6, scen: 'After a terror attack, a government minister says: “We must give the police whatever powers they need to lock up the people responsible — quickly.” A civil liberties group replies that rushing to convict risks another Birmingham Six.', ms: ['crime control — efficiency, presumption of guilt, police powers; the minister’s view', 'due process — rights, presumption of innocence, safeguards; the civil liberties view', 'Packer’s metaphors', 'examples from the system (PACE, extended detention, CCRC)', 'synoptic link to Unit 3 miscarriages'] }],
  tools: ['modelsort']
});

/* ---------- AC2.1 Forms of social control ---------- */
TOPICS.push({
  id: '4.2.1', unit: '4', ref: 'AC2.1', title: 'Forms of social control',
  short: 'Internal forms (rational ideology, tradition, internalisation of rules and morality), external forms (coercion, fear of punishment) and control theory',
  summary: 'Why do most people obey the law, even when it is against their interests? This criterion asks you to explain the forms of social control: internal controls that make us police ourselves, external controls that force us to conform, and control theories that explain why people abide by the law.',
  spec: ['Internal forms: rational ideology, tradition, internalisation of social rules and morality', 'External forms: coercion, fear of punishment', 'Control theory: reasons for abiding by the law', 'Reference to theory; synoptic links to Unit 2'],
  learn: [
    { h: 'Internal social control', html: `
<ul><li><b>Internalisation of social rules and morality</b> — through socialisation by family, school, religion and peers, we learn norms and values and come to feel they are right. Our conscience (Freud’s superego) makes us feel guilt.</li>
<li><b>Rational ideology</b> — we obey because we accept that laws are reasonable and serve a purpose (e.g. speed limits protect lives); obeying is in our long-term interest.</li>
<li><b>Tradition</b> — we follow rules because “that is how things have always been done”, and respect long-established institutions and customs.</li></ul>` },
    { h: 'External social control', html: `
<ul><li><b>Coercion</b> — force or the threat of force by the state: arrest, imprisonment, police powers. Marxists see the police, courts and prisons as the “repressive state apparatus” (Althusser).</li>
<li><b>Fear of punishment</b> — deterrence: people obey to avoid being caught and punished (links to right realism and rational choice).</li>
<li>Informal external control — disapproval, gossip, exclusion by family, peers and employers; surveillance (CCTV, social media).</li></ul>` },
    { h: 'Control theory: why people abide by the law', html: `
<ul><li><b>Hirschi</b> ([[c:hirschi]]): four social bonds — attachment, commitment, involvement, belief.</li>
<li><b>Reckless</b> ([[c:reckless]]): inner and outer containment.</li>
<li><b>Gottfredson and Hirschi</b> (1990): low self-control, formed by poor parenting in early childhood, is the main cause of crime.</li>
<li><b>Durkheim</b> ([[c:durkheim]]): punishment reinforces the collective conscience; anomie weakens control.</li>
<li>Other reasons people obey: respect for authority and legitimacy (Tyler), fear of shame, religious belief, habit.</li></ul>` }
  ],
  debate: [{ q: 'Is internal control more effective than external control?', for: ['Most people obey without any threat of punishment.', 'Internalised values work when no one is watching.', 'External control is costly and can damage legitimacy.'], ag: ['Some people are not socialised to accept norms.', 'Fear of punishment deters opportunistic crime (rational choice).', 'Both work together — laws also shape morality over time (drink-driving).'] }],
  cases: ['hirschi', 'reckless', 'durkheim'],
  worked: [],
  pitfalls: ['Not referring to theory — the specification requires it.', 'Confusing internal (self-control) with informal control (by others).'],
  cards: [
    ['Three internal forms of social control?', 'Rational ideology, tradition, internalisation of social rules and morality.'],
    ['Two external forms?', 'Coercion and fear of punishment.'],
    ['What is internalisation?', 'Accepting social rules as our own through socialisation, so we control ourselves.'],
    ['Hirschi’s four bonds?', 'Attachment, commitment, involvement, belief.'],
    ['Reckless’s containment theory?', 'Inner containment (self-control) and outer containment (family, community) keep people from crime.'],
    ['What is coercion?', 'Force or the threat of force by the state.']
  ],
  quiz: [
    { q: 'Obeying a law because you think it is sensible is…', o: ['rational ideology', 'coercion', 'fear of punishment', 'tradition'], x: '' },
    { q: 'Which is an external form of social control?', o: ['Fear of punishment', 'Conscience', 'Internalised morality', 'Tradition'], x: '' },
    { q: 'Hirschi’s theory is a…', o: ['control theory', 'strain theory', 'biological theory', 'labelling theory'], x: '' },
    { q: 'Inner and outer containment was described by…', o: ['Reckless', 'Merton', 'Lombroso', 'Packer'], x: '' }
  ],
  exam: [{ q: 'Using the scenario, explain forms of social control that influence Sam’s behaviour. [6]', m: 6, scen: 'Sam, 17, has a part-time job and plays for a local football team. He says he would never steal because his parents would be ashamed and he might lose his place at college. He drives carefully because he has seen speed cameras on his route.', ms: ['internalisation — family values; shame', 'rational ideology — understands consequences', 'Hirschi — attachment (parents), commitment (college), involvement (job, football), belief', 'external — fear of punishment (speed cameras); coercion', 'theory linked to scenario (Hirschi, Reckless)'] }],
  tools: ['controlsort']
});

/* ---------- AC2.2 Aims of punishment ---------- */
TOPICS.push({
  id: '4.2.2', unit: '4', ref: 'AC2.2', title: 'Aims of punishment',
  short: 'Retribution, rehabilitation, deterrence (individual and general), public protection and reparation',
  summary: 'Why do we punish? This criterion asks you to discuss the aims of punishment — retribution, rehabilitation, deterrence (of the individual and of others), public protection and reparation — and to link them to the criminological theories from Unit 2.',
  spec: ['Retribution', 'Rehabilitation', 'Deterrence: prevention of reoffending (individual); deterrence of others from committing similar crimes (general)', 'Public protection', 'Reparation', 'Synoptic: consider the aims in the context of criminological theories'],
  learn: [
    { h: 'The five aims', html: `
<div class="tbl"><table><tr><th>Aim</th><th>Meaning</th><th>Looks</th><th>Theory links</th></tr>
<tr><td><b>Retribution</b></td><td>Punishment because it is deserved — “just deserts”, proportionate to the seriousness of the crime; expresses society’s disapproval</td><td>Backward</td><td>Durkheim (boundary maintenance); Kant</td></tr>
<tr><td><b>Rehabilitation</b></td><td>Reform the offender so they do not reoffend — education, treatment, offending behaviour programmes</td><td>Forward</td><td>Individualistic and biological theories; left realism</td></tr>
<tr><td><b>Deterrence</b></td><td><b>Individual</b>: put this offender off reoffending. <b>General</b>: put others off by making an example ([[c:riotsentences]])</td><td>Forward</td><td>Right realism; rational choice</td></tr>
<tr><td><b>Public protection</b></td><td>Incapacitation — make it impossible or harder to reoffend (prison, curfews, tagging, driving bans, extended sentences)</td><td>Forward</td><td>Right realism; biological (dangerous offenders)</td></tr>
<tr><td><b>Reparation</b></td><td>Making amends to the victim or community — compensation, unpaid work, restorative justice</td><td>Forward</td><td>Labelling; Braithwaite’s reintegrative shaming</td></tr></table></div>
<p>The <b>Sentencing Act 2020 s57</b> requires courts sentencing adults to have regard to: punishment, the reduction of crime (including by deterrence), reform and rehabilitation, protection of the public, and reparation. For young offenders the main aim is to prevent offending, with regard to their welfare.</p>` },
    { h: 'Tensions between aims', html: `<ul><li>Retribution and rehabilitation can conflict: a long sentence may be deserved but disrupt family and work ties that help rehabilitation.</li><li>General deterrence may produce sentences harsher than the individual deserves ([[c:riotsentences]]).</li><li>Research on deterrence suggests the <b>certainty</b> of being caught deters more than the <b>severity</b> of punishment.</li><li>Views on rehabilitation have swung: [[c:martinson]]’s “nothing works” (1974) led away from it; later evidence shows some programmes work.</li></ul>` }
  ],
  debate: [{ q: 'Should rehabilitation be the main aim of punishment?', for: ['Most prisoners are released, so reducing reoffending protects the public.', 'Countries emphasising rehabilitation (Norway) report low reoffending.', 'Cheaper in the long run.'], ag: ['Victims and the public expect retribution.', 'Some offenders are too dangerous — public protection comes first.', 'Rehabilitation programmes have mixed results (SOTP).', 'General deterrence needs visible punishment.'] }],
  cases: ['riotsentences', 'martinson', 'halden'],
  worked: [],
  pitfalls: ['Confusing individual and general deterrence.', 'Confusing reparation with retribution.', 'Not linking aims to theories — the specification asks for this.'],
  cards: [
    ['Five aims of punishment?', 'Retribution, rehabilitation, deterrence, public protection, reparation.'],
    ['Individual v general deterrence?', 'Individual: deter this offender. General: deter others by example.'],
    ['What is retribution?', 'Deserved punishment proportionate to the crime — just deserts.'],
    ['What is reparation?', 'Making amends to the victim or community.'],
    ['What is incapacitation?', 'Removing the ability to reoffend — public protection.'],
    ['Which section sets out the purposes of sentencing adults?', 's57 Sentencing Act 2020.'],
    ['What did Martinson (1974) claim?', '“Nothing works” in rehabilitation.'],
    ['Which theory links to deterrence?', 'Right realism / rational choice.']
  ],
  quiz: [
    { q: 'Four-year sentences for inciting riots on Facebook were mainly aimed at…', o: ['general deterrence', 'reparation', 'rehabilitation', 'individual reform'], x: 'Blackshaw 2011.' },
    { q: 'Unpaid work in the community mainly serves…', o: ['reparation', 'general deterrence only', 'retribution only', 'incapacitation'], x: 'Paying back the community.' },
    { q: '“Just deserts” refers to…', o: ['retribution', 'rehabilitation', 'reparation', 'deterrence'], x: '' },
    { q: 'Which aim looks backwards at the crime committed?', o: ['Retribution', 'Rehabilitation', 'Deterrence', 'Public protection'], x: 'The others look forward.' }
  ],
  exam: [{ q: 'Discuss the aims of punishment that a judge might consider in sentencing Kerry. [9]', m: 9, scen: 'Kerry, 24, has been convicted of her fifth shoplifting offence. She is addicted to heroin and has two young children. The shop owner says the thefts have hit his small business hard.', ms: ['retribution — proportionate to seriousness and repeat offending', 'rehabilitation — drug rehabilitation requirement; addiction as cause', 'individual deterrence — repeat offending', 'general deterrence — limited relevance', 'public protection — low risk of violence', 'reparation — compensation to the shop owner', 'tensions between aims; welfare of children', 'theory links; judgement'] }],
  tools: ['aimsort']
});

/* ---------- AC2.3 Forms of punishment ---------- */
TOPICS.push({
  id: '4.2.3', unit: '4', ref: 'AC2.3', title: 'How forms of punishment meet the aims',
  short: 'Imprisonment, community sentences, financial penalties and discharges — assessed against the aims of punishment',
  summary: 'Courts can imprison, impose community sentences, fine or discharge offenders. This criterion asks you to assess how well each form of punishment meets the aims of punishment, drawing on evidence and on your learning from Units 1, 2 and 3.',
  spec: ['Imprisonment', 'Community sentences', 'Financial penalties', 'Discharge', 'Assess how different forms of punishment meet the aims of punishment', 'Synoptic: draw on learning from Units 1, 2 and 3 to make objective, evidence-based conclusions'],
  learn: [
    { h: 'Imprisonment', html: `
<ul><li><b>Types</b>: mandatory life for murder (with a minimum term; whole life orders for the most serious); discretionary life; extended determinate sentences for dangerous offenders; standard determinate sentences (usually released automatically at the halfway point, or later for serious offences, then on licence); suspended sentence orders (up to two years, suspended for up to two years).</li>
<li><b>Aims met</b>: retribution and public protection strongly; deterrence weakly; rehabilitation limited by overcrowding and short stays; little reparation.</li>
<li><b>Evidence</b>: the prison population in England and Wales reached record highs of around 87,000 in 2025; each prison place costs tens of thousands of pounds a year; reoffending after short sentences is high. Early release was needed in 2024 because prisons were full ([[c:sds40]]).</li></ul>` },
    { h: 'Community sentences', html: `
<ul><li>A <b>community order</b> (up to three years) with one or more requirements: unpaid work (40–300 hours), rehabilitation activity, programme requirement, curfew with electronic tag, exclusion zone, drug rehabilitation, alcohol treatment or alcohol abstinence monitoring (“sobriety tags”), mental health treatment, residence, prohibited activity. Youth rehabilitation orders for under-18s.</li>
<li><b>Aims met</b>: rehabilitation (treatment), reparation (unpaid work), some public protection (curfews, tags) and punishment; offenders keep jobs, homes and families.</li>
<li><b>Evidence</b>: Ministry of Justice studies have found lower reoffending for community orders than for short prison sentences with similar offenders. The public may see them as a “soft option”.</li></ul>` },
    { h: 'Financial penalties and discharges', html: `
<ul><li><b>Fines</b> — the most common sentence; set by the offence and the offender’s weekly income (bands A–F); plus a victim surcharge. Meets retribution and some deterrence; no rehabilitation or protection; unpaid fines are a problem; unequal impact on poor and rich.</li>
<li><b>Compensation orders</b> — payment to the victim: reparation.</li>
<li><b>Conditional discharge</b> — no punishment unless the offender reoffends within the set period (up to three years): individual deterrence.</li>
<li><b>Absolute discharge</b> — guilty, but no penalty because the offender is not morally to blame or the offence is trivial.</li></ul>` },
    { h: 'Assessing — use the tool', html: `<p>The Explore tab has an interactive assessment of each sentence against the aims. For top marks, back up judgements with evidence — reoffending data, cost, case examples, comparisons with other countries ([[c:halden]]) — and use theories from Unit 2 (right realists favour prison and deterrence; left realists and labelling theorists favour community sentences and restorative justice).</p>` }
  ],
  debate: [{ q: 'Does prison work?', for: ['Protects the public by incapacitating dangerous offenders.', 'Delivers retribution the public expects.', 'Time in custody can allow education and treatment.'], ag: ['High reoffending, especially after short sentences.', 'Very expensive; overcrowding and violence.', 'Separates families and loses jobs and homes.', 'Community sentences achieve lower reoffending for similar offenders.', 'Norway’s rehabilitative model suggests alternatives.'] }],
  cases: ['sds40', 'halden', 'martinson', 'riotsentences'],
  worked: [],
  pitfalls: ['Describing sentences without assessing how they meet the aims.', 'Unsupported judgements — use evidence.', 'Forgetting discharges and financial penalties.'],
  cards: [
    ['Sentence for murder?', 'Mandatory life imprisonment with a minimum term (or a whole life order).'],
    ['Maximum length of a community order?', 'Three years.'],
    ['Range of unpaid work hours?', '40–300 hours.'],
    ['What is a suspended sentence?', 'A prison sentence not served unless the offender breaches conditions or reoffends.'],
    ['Conditional v absolute discharge?', 'Conditional: no penalty unless reoffending within up to 3 years. Absolute: no penalty at all.'],
    ['How are fines calculated?', 'By offence seriousness and weekly income (bands).'],
    ['What is SDS40?', 'The 2024 change releasing many standard determinate sentence prisoners at 40% to ease overcrowding.'],
    ['Which aims does a community order with unpaid work and drug treatment meet?', 'Reparation, rehabilitation and punishment.']
  ],
  quiz: [
    { q: 'Which sentence best meets public protection?', o: ['Imprisonment', 'Absolute discharge', 'A fine', 'Conditional discharge'], x: 'Incapacitation.' },
    { q: 'A “sobriety tag” is part of…', o: ['a community order', 'a fine', 'an absolute discharge', 'a whole life order'], x: 'Alcohol abstinence monitoring.' },
    { q: 'A compensation order mainly meets…', o: ['reparation', 'general deterrence', 'incapacitation', 'retribution only'], x: '' },
    { q: 'Why were prisoners released at 40% of their sentence in 2024?', o: ['Prisons were almost full', 'A court ordered it', 'Crime had stopped', 'To punish more'], x: 'Overcrowding.' }
  ],
  exam: [{ q: 'Assess how well imprisonment and community sentences meet the aims of punishment. [9]', m: 9, ms: ['imprisonment — retribution, protection strong; rehabilitation weak; reoffending data; cost; overcrowding', 'community sentences — rehabilitation, reparation, some protection; lower reoffending; public perception', 'deterrence evidence (certainty v severity)', 'synoptic theories (right realism, labelling)', 'examples (SDS40, Norway)', 'balanced judgement'] }],
  tools: ['aims', 'sentencesort']
});

/* ---------- Unit 4 LO1–LO2 tools ---------- */
TOOLS.billsteps = { type: 'steps', title: 'From idea to Act of Parliament', intro: 'The legislative process for a government Bill starting in the House of Commons.', steps: [
  { h: 'Idea and consultation', html: '<p>A problem is identified — by a campaign, an inquiry, the Law Commission or a manifesto. A Green Paper consults; a White Paper sets out firm proposals.</p>' },
  { h: 'First Reading', html: '<p>The Bill’s title is read out. No debate.</p>' },
  { h: 'Second Reading', html: '<p>The main debate on the principles of the Bill, followed by a vote.</p>' },
  { h: 'Committee Stage', html: '<p>A Public Bill Committee examines the Bill clause by clause and may amend it.</p>' },
  { h: 'Report Stage', html: '<p>The whole House considers the amendments and may make more.</p>' },
  { h: 'Third Reading', html: '<p>A final debate and vote on the Bill as amended.</p>' },
  { h: 'House of Lords', html: '<p>The same stages again. Amendments go back to the Commons (“ping-pong”). The Parliament Acts let the Commons override the Lords after a delay.</p>' },
  { h: 'Royal Assent', html: '<p>The monarch approves the Bill and it becomes an Act. It comes into force on a set date or by commencement order.</p>' },
  { h: 'Judges apply it', html: '<p>Courts interpret the Act (literal, golden, mischief and purposive approaches) and their decisions create precedent.</p>' }
] };
TOOLS.lawmakingsort = { type: 'sort', title: 'Government or judicial law making?', intro: 'Classify each example.', cats: ['Government (Parliament)', 'Judicial'], items: [
  ['The Domestic Abuse Act 2021', 'Government (Parliament)', ''],
  ['R v R abolishes the marital rape exemption', 'Judicial', 'Common law change.'],
  ['R v Jogee corrects joint enterprise law', 'Judicial', 'Supreme Court.'],
  ['A White Paper on sentencing reform', 'Government (Parliament)', 'Part of the legislative process.'],
  ['Smith v Hughes interprets “in a street”', 'Judicial', 'Mischief rule.'],
  ['A statutory instrument changing drug classifications', 'Government (Parliament)', 'Delegated legislation.']
] };
TOOLS.cjssort = { type: 'sort', title: 'Which organisation?', intro: 'Match each role to the organisation responsible.', cats: ['Home Office', 'Ministry of Justice', 'CPS', 'PCC', 'MAPPA'], items: [
  ['Sets policing policy nationally', 'Home Office', ''],
  ['Runs prisons and probation through HMPPS', 'Ministry of Justice', ''],
  ['Decides whether to charge in serious cases', 'CPS', ''],
  ['Elected to set a local police force’s priorities and budget', 'PCC', 'Police and Crime Commissioner.'],
  ['Brings police, probation and prisons together to manage a released sex offender', 'MAPPA', ''],
  ['Runs the courts through HMCTS', 'Ministry of Justice', '']
] };
TOOLS.modelsort = { type: 'sort', title: 'Due process or crime control?', intro: 'Which model does each feature reflect?', cats: ['Due process', 'Crime control'], items: [
  ['The right to free legal advice at the police station', 'Due process', ''],
  ['Inferences from a suspect’s silence', 'Crime control', 'CJPOA 1994.'],
  ['Retrial after acquittal with new evidence', 'Crime control', 'Double jeopardy exception.'],
  ['The Criminal Cases Review Commission', 'Due process', ''],
  ['Detaining terror suspects for up to 14 days', 'Crime control', ''],
  ['Excluding a confession obtained by oppression', 'Due process', 's76 PACE.'],
  ['Encouraging early guilty pleas with discounts', 'Crime control', 'Efficiency.']
] };
TOOLS.controlsort = { type: 'sort', title: 'Internal or external control?', intro: 'Classify each reason for obeying the law.', cats: ['Internal', 'External'], items: [
  ['“I’d feel guilty if I stole.”', 'Internal', 'Internalised morality.'],
  ['“There are cameras everywhere in town.”', 'External', 'Fear of punishment / surveillance.'],
  ['“Speed limits make sense — they save lives.”', 'Internal', 'Rational ideology.'],
  ['“The police would arrest me.”', 'External', 'Coercion.'],
  ['“My family has always respected the law.”', 'Internal', 'Tradition.'],
  ['“I don’t want a criminal record and to lose my job.”', 'External', 'Fear of the consequences of punishment.']
] };
TOOLS.aimsort = { type: 'sort', title: 'Which aim of punishment?', intro: 'Identify the main aim in each sentencing remark.', cats: ['Retribution', 'Rehabilitation', 'Individual deterrence', 'General deterrence', 'Public protection', 'Reparation'], items: [
  ['“This sentence must send a message to anyone thinking of carrying a knife.”', 'General deterrence', ''],
  ['“You will complete 200 hours of unpaid work for the community you harmed.”', 'Reparation', ''],
  ['“You deserve to be punished for the terrible harm you caused.”', 'Retribution', ''],
  ['“You will attend a drug rehabilitation programme.”', 'Rehabilitation', ''],
  ['“If you reoffend within two years, you will be brought back and sentenced for this offence.”', 'Individual deterrence', 'Conditional discharge / suspended sentence.'],
  ['“You pose a serious danger to women, so I impose an extended sentence.”', 'Public protection', '']
] };
TOOLS.sentencesort = { type: 'sort', title: 'Which form of punishment?', intro: 'Classify each sentence.', cats: ['Imprisonment', 'Community', 'Financial', 'Discharge'], items: [
  ['A suspended sentence order', 'Imprisonment', 'It is a custodial sentence, suspended.'],
  ['150 hours of unpaid work and a curfew', 'Community', ''],
  ['£400 fine and a victim surcharge', 'Financial', ''],
  ['No penalty unless the offender reoffends within 12 months', 'Discharge', 'Conditional.'],
  ['Compensation of £250 to the victim', 'Financial', ''],
  ['A whole life order', 'Imprisonment', '']
] };
