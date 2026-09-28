/* ==========================================================
   UNIT 3 · CRIME SCENE TO COURTROOM — LO1 (AC1.1 – AC1.4)
   ========================================================== */
const U3_BANDS = {
  '1.1': [['1–3', 'Limited evaluation of the effectiveness of the relevant roles. Response is largely descriptive and may only be a list of personnel involved.'], ['4–7', 'Some evaluation of the effectiveness of relevant roles. Description of the roles of personnel involved is also evident.'], ['8–10', 'Clear and detailed evaluation of the effectiveness of roles. The personnel involved are clearly discussed in terms of potential limitations.']],
  '1.2': [['1–5', 'A largely descriptive response with very limited, basic/simple assessment. At the lower end, investigative techniques may be simply listed.'], ['6–10', 'Limited evidence of relevant assessment of the use of investigative techniques. At the lower end, some investigative techniques are described.'], ['11–15', 'A range of investigative techniques are used to make some assessment of their usefulness in criminal investigations.'], ['16–20', 'Clear and detailed assessment is made of the required range of investigative techniques.']],
  '1.3': [['1–3', 'Basic response that may only list procedures or mention case studies.'], ['4–6', 'Clear and detailed explanation of how both types of evidence are processed using relevant examples.']],
  '1.4': [['1–3', 'The rights of individuals in criminal investigations are simply listed or may have limited description.'], ['4–6', 'The rights of individuals in criminal investigations are clearly examined from investigation through to appeal.']],
  '2.1': [['1–2', 'A simple/basic explanation of the CPS with little or no reference to the prosecution of suspects.'], ['3–4', 'Detailed explanation including clear and relevant examples of the requirements (tests) of the CPS in prosecuting suspects.']],
  '2.2': [['1–2', 'A simple/basic description of trial processes and/or personnel involved. May only be a list.'], ['3–4', 'Describes in some detail the stages of the trial process, including the personnel involved.']],
  '2.3': [['1–2', 'A simple/basic understanding of the rules in relation to the use of evidence in criminal cases.'], ['3–4', 'Detailed understanding of the rules in relation to the use of evidence in criminal cases.']],
  '2.4': [['1–3', 'Key influences affecting the outcomes of criminal cases are largely described.'], ['4–7', 'Some understanding of the key influences affecting the outcomes of criminal cases is shown and some assessment made of their impact.'], ['8–10', 'Assesses the required range of key influences affecting the outcomes of criminal cases. There is clear and detailed understanding of their impact.']],
  '2.5': [['1–3', 'A basic/simple description of juries and magistrates.'], ['4–6', 'The use of laypeople (juries and magistrates) are discussed fully in relation to their strengths and weaknesses in criminal cases.']],
  '3.1': [['1–5', 'Limited information sources are described (listed at the lower end). At the top end, some information sources are discussed in relation to validity.'], ['6–10', 'A range of information sources are examined and reviewed in terms of their validity. At the bottom end, the range of information sources and/or the review will be limited.'], ['11–15', 'Detailed examination of a relevant range of information sources (including reference to the brief). There is a clear review of their suitability in terms of validity.']],
  '3.2': [['1–5', 'Draws conclusions on criminal cases. Conclusions may be mainly subjective, with limited evidence used in support.'], ['6–10', 'Draws some objective conclusions on criminal cases, using some evidence and reasoning in support of conclusions.'], ['11–15', 'Draws objective conclusions on criminal cases (including reference to the brief), using evidence and clear reasoning/argument in support of conclusions.']]
};

addCases([
  { id: 'ripper', n: 'The Yorkshire Ripper investigation', y: 1981, a: '3', t: '3.1.1', c: 'Case', f: 'Peter Sutcliffe murdered 13 women in the north of England between 1975 and 1980. He was interviewed by police nine times but not identified. Detectives were misled by a hoax tape and letters from “Wearside Jack”, and the paper card-index system was overwhelmed.', p: 'The Byford Report (1981) exposed poor co-ordination, information overload and failures of leadership. It led to the HOLMES computer system for major inquiries — a key example for evaluating the effectiveness of personnel and techniques.' },
  { id: 'soham', n: 'Soham murders and the Bichard Inquiry', y: 2002, a: '3', t: '3.1.1', c: 'Case', f: 'Ian Huntley, a school caretaker, murdered Holly Wells and Jessica Chapman in Soham. He had previously come to police attention over sexual offences, but the information was not shared between forces and did not show up in his vetting.', p: 'The Bichard Inquiry (2004) led to the Police National Database for sharing intelligence and to a stronger vetting system (now the Disclosure and Barring Service). Shows how database and information-sharing failures limit investigations.' },
  { id: 'fss', n: 'Closure of the Forensic Science Service', y: 2012, a: '3', t: '3.1.1', c: 'Case', f: 'The government-owned Forensic Science Service was closed in 2012 because it was losing money. Forensic work moved to private companies and in-house police laboratories.', p: 'Critics, including Parliament’s Science and Technology Committee, warned about the loss of expertise, research and quality. Later problems such as the Randox data manipulation scandal (2017) raised concerns about the forensic market.' },
  { id: 'pitchfork', n: 'Colin Pitchfork — the first DNA conviction', y: 1988, a: '3', t: '3.1.2', c: 'Case', f: 'Two teenage girls were raped and murdered in Leicestershire in 1983 and 1986. Professor Alec Jeffreys’ new DNA profiling first cleared a suspect who had confessed, then police screened thousands of local men. Pitchfork persuaded a friend to give a sample for him but was caught.', p: 'The first murder conviction using DNA profiling. It shows DNA can both convict the guilty and clear the innocent, and it changed investigations worldwide.' },
  { id: 'harman', n: 'Craig Harman — familial DNA', y: 2004, a: '3', t: '3.1.2', c: 'Case', f: 'Harman threw a brick from a motorway bridge which killed a lorry driver. His blood on the brick did not match anyone on the National DNA Database, but a partial match to a relative led police to him.', p: 'The first UK conviction using a familial DNA search, showing the power of the National DNA Database. It also raises privacy concerns about relatives.' },
  { id: 'nickell', n: 'Rachel Nickell and Colin Stagg', y: 1992, a: '3', t: '3.1.2', c: 'Case', f: 'Rachel Nickell was murdered on Wimbledon Common. Guided by a psychological profile, police targeted Colin Stagg in an undercover “honeytrap” operation. The judge threw out the case in 1994 as an attempt to incriminate him by deceptive conduct. In 2008 Robert Napper was convicted after new DNA analysis.', p: 'The key example of the dangers of offender profiling and entrapment. Stagg received compensation; the case damaged confidence in profiling in the UK.' },
  { id: 'duffy', n: 'John Duffy — the Railway Rapist', y: 1988, a: '3', t: '3.1.2', c: 'Case', f: 'A series of rapes and murders near railway lines in south-east England. Psychologist David Canter produced a profile, including where the offender was likely to live, which helped police prioritise Duffy from a large list of suspects.', p: 'The first use of offender profiling in a British investigation. Canter’s “bottom-up” statistical approach led to geographical profiling.' },
  { id: 'loftus', n: 'Loftus and Palmer: leading questions', y: 1974, a: '3', t: '3.1.2', c: 'Study', f: 'Participants watched a film of a car crash. Those asked how fast the cars were going when they “smashed” into each other estimated higher speeds, and were more likely to report seeing broken glass that was not there, than those asked with the word “hit”.', p: 'Shows eyewitness memory is reconstructive and easily distorted by questioning. It led to better interview techniques such as the cognitive interview and the PEACE model.' },
  // evidence case studies from the specification
  { id: 'barrygeorge', n: 'Barry George and the murder of Jill Dando', y: 2008, a: '3', t: '3.1.3', c: 'Case', f: 'TV presenter Jill Dando was shot dead on her doorstep in 1999. Barry George was convicted in 2001, partly because of a single microscopic particle of firearm discharge residue found in his coat pocket a year later.', p: 'The Court of Appeal quashed his conviction in 2007: the residue evidence had been presented as more significant than it was, and contamination could not be ruled out. He was acquitted at a retrial in 2008. A key case on how physical evidence is transferred, stored and interpreted.' },
  { id: 'sallyclark', n: 'Sally Clark', y: 2003, a: '3', t: '3.1.3', c: 'Case', f: 'A solicitor convicted in 1999 of murdering her two baby sons. Paediatrician Professor Sir Roy Meadow told the jury the chance of two cot deaths in such a family was “1 in 73 million”. A pathologist had not disclosed test results showing one baby had a serious infection.', p: 'Her conviction was quashed in 2003. The statistic was wrong because it assumed the deaths were independent. A key example of flawed expert testimony and failures in disclosure. She never recovered and died in 2007.' },
  { id: 'cannings', n: 'Angela Cannings', y: 2003, a: '3', t: '3.1.3', c: 'Case', f: 'Convicted in 2002 of murdering two of her babies, largely on expert evidence including Roy Meadow’s. There was no other evidence of harm.', p: 'The Court of Appeal quashed the conviction in 2003 and said that where experts seriously disagree, and there is no other evidence, a prosecution should not proceed. Hundreds of similar cases were reviewed.' },
  { id: 'knox', n: 'Amanda Knox and Meredith Kercher', y: 2015, a: '3', t: '3.1.3', c: 'Case', f: 'British student Meredith Kercher was murdered in Perugia, Italy, in 2007. Her flatmate Amanda Knox and Knox’s boyfriend were convicted, acquitted, convicted again and finally acquitted by Italy’s highest court in 2015. A man whose DNA was found at the scene, Rudy Guede, was convicted separately.', p: 'Independent experts found DNA evidence against Knox had been collected and handled poorly (a bra clasp was recovered 46 days later) with a high risk of contamination. Intense international media coverage also shaped perceptions.' },
  { id: 'adamscott', n: 'Adam Scott — DNA contamination', y: 2012, a: '3', t: '3.1.3', c: 'Case', f: 'Adam Scott was charged with a rape in Manchester and held in custody for months, although he had been in Plymouth at the time. His DNA had been transferred at a private laboratory when a plastic tray used for a sample from an unrelated incident was reused.', p: 'Shows how contamination in the laboratory stage of processing can lead to wrongful charges, and why the chain of continuity and quality standards matter.' }
]);

/* ---------- AC1.1 Personnel in investigations ---------- */
TOPICS.push({
  id: '3.1.1', unit: '3', ref: 'AC1.1', title: 'Personnel in criminal investigations',
  short: 'Crime scene investigators, forensic specialists and scientists, police officers and detectives, the CPS, pathologists and other agencies — and how effective they are',
  summary: 'An investigation involves many people, from the first officer at the scene to the prosecutor who decides whether to charge. This criterion asks you to evaluate how effective each role is, considering limitations of cost, expertise and availability.',
  spec: ['Crime scene investigators', 'Forensic specialists', 'Forensic scientists', 'Police officers and detectives', 'Crown Prosecution Service (CPS)', 'Pathologist', 'Other investigative agencies, e.g. the Serious and Organised Crime Agency (now the National Crime Agency), HM Revenue & Customs', 'Limitations: cost, expertise, availability'],
  learn: [
    { h: 'The roles', html: `
<div class="tbl"><table><tr><th>Personnel</th><th>Role</th></tr>
<tr><td><b>First officer attending</b></td><td>Preserves life, secures the scene, sets a cordon, starts the scene log, records first accounts</td></tr>
<tr><td><b>Crime scene investigators (CSIs)</b> / scenes of crime officers</td><td>Often civilian staff: photograph, record and recover physical evidence (fingerprints, DNA, footwear marks, fibres), package and label it</td></tr>
<tr><td><b>Crime scene manager</b></td><td>Co-ordinates CSIs and specialists at major scenes</td></tr>
<tr><td><b>Forensic specialists</b></td><td>Experts called in for particular evidence: forensic anthropologists (bones), entomologists (insects and time of death), odontologists (teeth and bite marks), blood pattern analysts, digital forensic examiners</td></tr>
<tr><td><b>Forensic scientists</b></td><td>Analyse evidence in laboratories (DNA, drugs, toxicology, fibres, firearms) and give expert evidence in court</td></tr>
<tr><td><b>Police officers and detectives</b></td><td>Response officers; CID detectives interview witnesses and suspects, follow lines of enquiry; the Senior Investigating Officer (SIO) leads a major inquiry</td></tr>
<tr><td><b>Pathologist</b></td><td>A doctor who carries out the post-mortem to establish cause and time of death</td></tr>
<tr><td><b>CPS</b></td><td>Advises police on evidence during investigations and decides whether to charge in serious cases (AC2.1)</td></tr>
<tr><td><b>Other agencies</b></td><td>National Crime Agency (replaced SOCA in 2013): organised crime, trafficking, cyber-crime. HM Revenue &amp; Customs: tax evasion, smuggling. Also the Serious Fraud Office and the Independent Office for Police Conduct</td></tr></table></div>` },
    { h: 'Evaluating effectiveness', html: `
<p>For each role, weigh its contribution against the three limitations in the specification:</p>
<ul><li><b>Cost</b> — forensic analysis is expensive; since the [[c:fss]] closure, forces buy services from private providers and may limit tests to save money. Long investigations (such as [[c:ripper]]) cost millions.</li>
<li><b>Expertise</b> — errors by experts can cause miscarriages of justice ([[c:sallyclark]]); inexperienced officers may miss evidence; specialists such as forensic odontologists are rare.</li>
<li><b>Availability</b> — shortages of detectives (a national shortfall of thousands has been reported by HMICFRS), backlogs in digital forensics and toxicology, and pathologist shortages delay cases.</li></ul>
<p>Also consider: human error and bias (tunnel vision on one suspect — [[c:nickell]]); information sharing between agencies ([[c:soham]]); the institutional racism found in the [[c:lawrence]] investigation.</p>` }
  ],
  debate: [{ q: 'Are investigations more effective today than in the past?', for: ['DNA and digital evidence solve cases once impossible (Pitchfork).', 'HOLMES 2 and the Police National Database improve information sharing.', 'Specialist roles and accreditation of forensic providers.'], ag: ['Budget cuts and detective shortages.', 'Forensic market problems since 2012 (Randox).', 'Digital evidence backlogs.', 'Human error, bias and tunnel vision still cause failures.'] }],
  cases: ['ripper', 'soham', 'fss', 'lawrence', 'nickell', 'sallyclark'],
  worked: [],
  pitfalls: ['Listing personnel without evaluating effectiveness — band 1.', 'Not discussing the three limitations: cost, expertise, availability.', 'Confusing forensic scientists (laboratory) with CSIs (scene).'],
  cards: [
    ['Role of a CSI?', 'Record, recover and package physical evidence at the scene.'],
    ['Role of a pathologist?', 'Carry out the post-mortem and establish cause of death.'],
    ['What replaced SOCA in 2013?', 'The National Crime Agency.'],
    ['What does an SIO do?', 'The Senior Investigating Officer leads a major investigation.'],
    ['Three limitations in AC1.1?', 'Cost, expertise, availability.'],
    ['What did the Byford Report criticise?', 'Poor co-ordination and information overload in the Yorkshire Ripper inquiry.'],
    ['What did the Bichard Inquiry lead to?', 'The Police National Database and better vetting after Soham.'],
    ['What happened to the Forensic Science Service?', 'Closed in 2012; forensic work moved to private providers.']
  ],
  quiz: [
    { q: 'Who establishes the cause of death?', o: ['A pathologist', 'A CSI', 'The CPS', 'A magistrate'], x: 'Post-mortem.' },
    { q: 'The HOLMES computer system was introduced after…', o: ['the Yorkshire Ripper investigation', 'Soham', 'the Birmingham Six', 'Hillsborough'], x: 'Byford Report.' },
    { q: 'Which agency investigates serious organised crime nationally?', o: ['National Crime Agency', 'HM Courts Service', 'Probation Service', 'Victim Support'], x: 'Since 2013.' },
    { q: 'A forensic entomologist studies…', o: ['insects to estimate time of death', 'teeth', 'bones', 'handwriting'], x: 'Specialist.' }
  ],
  exam: [{ q: 'Practice task: evaluate the effectiveness of the personnel involved in investigating this crime. [10]', m: 10, scen: 'A man is found stabbed to death in a park. There is a bloody fingerprint on a bench and blood trails leading to the car park.', ms: ['first officer — scene preservation', 'CSIs — fingerprint and blood recovery; limitations (weather, contamination)', 'forensic scientists — DNA and fingerprint comparison; cost and backlogs', 'pathologist — cause and time of death', 'detectives/SIO — witnesses, CCTV, suspects', 'CPS — charging advice', 'limitations of cost, expertise and availability evaluated', 'examples from real cases'], bands: U3_BANDS['1.1'] }],
  tools: ['personnelsort']
});

/* ---------- AC1.2 Investigative techniques ---------- */
TOPICS.push({
  id: '3.1.2', unit: '3', ref: 'AC1.2', title: 'Investigative techniques',
  short: 'Forensic, surveillance, profiling, intelligence databases and interview techniques — their usefulness across situations and types of crime',
  summary: 'This is the highest-mark criterion in Unit 3. You need to understand five investigative techniques — forensic, surveillance, profiling, intelligence databases and interviews — and assess how useful each is in different situations (crime scene, laboratory, police station, “street”) and for different types of crime (violent, e-crime, property).',
  spec: ['Forensic techniques', 'Surveillance techniques', 'Profiling techniques', 'Use of intelligence databases, e.g. the National DNA Database', 'Interview techniques, e.g. eyewitness interviews, expert interviews', 'Situations: crime scene, laboratory, police station, “street”', 'Types of crime: violent crime, e-crime, property crime'],
  learn: [
    { h: 'Forensic techniques', html: `
<ul><li><b>DNA profiling</b> — from blood, saliva, semen, skin cells, hair roots ([[c:pitchfork]]). Highly discriminating, but risk of contamination and secondary transfer; presence does not prove guilt.</li>
<li><b>Fingerprints</b> — unique ridge patterns; the IDENT1 database. Partial prints and human interpretation errors (e.g. the Shirley McKie case in Scotland, 1997).</li>
<li><b>Trace evidence</b> — fibres, hair, glass, paint, soil, firearm residue ([[c:barrygeorge]]); relies on Locard’s exchange principle (AC1.3).</li>
<li><b>Blood pattern analysis, footwear marks, toxicology, ballistics</b>.</li>
<li><b>Digital forensics</b> — phones, computers, cloud data: vital for e-crime and most modern cases, but huge backlogs.</li></ul>` },
    { h: 'Surveillance techniques', html: `
<ul><li><b>CCTV</b> — the UK has one of the highest camera densities in the world; images helped identify the [[c:bulger]] killers and many others. Quality, coverage and the time needed to review footage are limits.</li>
<li><b>ANPR</b> (automatic number plate recognition) — tracks vehicles; useful for property crime and organised crime.</li>
<li><b>Phone and communications data</b> — cell-site analysis shows where a phone was.</li>
<li><b>Covert surveillance and undercover officers</b> — regulated by the Regulation of Investigatory Powers Act 2000 and the Investigatory Powers Act 2016. Scandals over undercover officers deceiving women into relationships led to the Undercover Policing Inquiry.</li>
<li><b>Live facial recognition</b> — increasingly used by some forces; concerns about accuracy and privacy.</li></ul>` },
    { h: 'Profiling techniques', html: `
<ul><li><b>Top-down (FBI) profiling</b> — the crime scene is classified as organised or disorganised, and a profile is drawn from a database of interviews with serial killers.</li>
<li><b>Bottom-up (British) profiling</b> — David Canter’s statistical approach, including <b>geographical profiling</b>: offenders tend to commit crimes within a comfort zone near home ([[c:duffy]]).</li>
<li><b>Usefulness</b> — narrows down suspects in serial violent crimes but rarely identifies the offender; it can mislead investigators ([[c:nickell]]). It is less useful for one-off, property or e-crime.</li></ul>` },
    { h: 'Intelligence databases', html: `
<ul><li><b>National DNA Database</b> (1995) — millions of profiles; speculative searches and familial searching ([[c:harman]]). After the European Court of Human Rights ruled against the UK in S and Marper v UK (2008), the Protection of Freedoms Act 2012 required most DNA from people not convicted to be deleted.</li>
<li><b>Police National Computer</b> (criminal records, vehicles) and <b>Police National Database</b> (intelligence, after [[c:soham]]).</li>
<li><b>IDENT1</b> (fingerprints); <b>HOLMES 2</b> (major inquiry management, after [[c:ripper]]).</li>
<li>Usefulness: fast identification and links between crimes; limits include data quality, privacy and bias in who is on the database.</li></ul>` },
    { h: 'Interview techniques', html: `
<ul><li><b>Eyewitness interviews</b> — memory is reconstructive and can be distorted by leading questions ([[c:loftus]]). The <b>cognitive interview</b> (Fisher and Geiselman) uses context reinstatement, reporting everything, changing order and changing perspective to improve recall.</li>
<li><b>Suspect interviews</b> — the <b>PEACE model</b> (Planning and preparation, Engage and explain, Account, Closure, Evaluate) replaced oppressive questioning after cases such as the Cardiff Three. Interviews are recorded (PACE Codes).</li>
<li><b>Identification procedures</b> — video identification parades (VIPER) under PACE Code D.</li>
<li><b>Expert interviews</b> — consulting specialists such as forensic psychologists or financial investigators.</li></ul>` },
    { h: 'Matching techniques to situations and crimes', html: `
<div class="tbl"><table><tr><th></th><th>Most useful techniques</th></tr>
<tr><td><b>Violent crime</b></td><td>DNA, blood pattern analysis, pathology, CCTV, witness interviews, profiling for serial offences</td></tr>
<tr><td><b>E-crime</b></td><td>Digital forensics, communications data, intelligence sharing (NCA), expert interviews</td></tr>
<tr><td><b>Property crime</b></td><td>Fingerprints, footwear marks, CCTV, ANPR, databases, geographical patterns</td></tr>
<tr><td><b>Crime scene / laboratory / police station / street</b></td><td>Scene: recovery. Laboratory: analysis. Police station: interviews and identification. Street: CCTV, stop and search, surveillance, house-to-house enquiries</td></tr></table></div>` }
  ],
  debate: [{ q: 'Is forensic science the most useful investigative technique?', for: ['DNA is highly discriminating and has solved cold cases (Pitchfork; Napper).', 'Objective and scientific compared with eyewitnesses.', 'Can clear the innocent.'], ag: ['Contamination and interpretation errors (Barry George, Adam Scott).', 'Expensive and slow; backlogs.', 'Presence of DNA does not prove guilt.', 'CCTV, phone data and interviews solve more everyday crimes.', 'The “CSI effect” may raise juries’ expectations.'] }],
  cases: ['pitchfork', 'harman', 'duffy', 'nickell', 'loftus', 'bulger', 'barrygeorge', 'soham', 'ripper'],
  worked: [],
  pitfalls: ['Describing techniques without assessing usefulness.', 'Not covering all five techniques — the top band needs the required range.', 'Ignoring situations and types of crime.'],
  cards: [
    ['Five investigative techniques in AC1.2?', 'Forensic, surveillance, profiling, intelligence databases, interview techniques.'],
    ['First murder conviction using DNA?', 'Colin Pitchfork (1988).'],
    ['What is familial DNA searching?', 'Using partial matches to relatives on the database to find a suspect (Craig Harman, 2004).'],
    ['Top-down v bottom-up profiling?', 'Top-down: FBI organised/disorganised typology. Bottom-up: Canter’s statistical and geographical approach.'],
    ['What went wrong in the Rachel Nickell case?', 'Profiling and a honeytrap targeted the innocent Colin Stagg.'],
    ['What is the cognitive interview?', 'A technique to improve eyewitness recall: context reinstatement, report everything, change order, change perspective.'],
    ['What is the PEACE model?', 'Planning, Engage and explain, Account, Closure, Evaluate — a non-oppressive interviewing model.'],
    ['What did Loftus and Palmer show?', 'Leading questions distort eyewitness memory.'],
    ['What changed after S and Marper v UK?', 'The Protection of Freedoms Act 2012 limited retention of DNA from people not convicted.']
  ],
  quiz: [
    { q: 'Which technique is most useful for investigating e-crime?', o: ['Digital forensics', 'Blood pattern analysis', 'Sheldon’s body types', 'A pathologist'], x: 'Devices and data.' },
    { q: 'Geographical profiling is associated with…', o: ['David Canter', 'Roy Meadow', 'Alec Jeffreys', 'Lombroso'], x: 'John Duffy case.' },
    { q: 'Loftus and Palmer’s study shows that eyewitness memory is…', o: ['reconstructive and affected by leading questions', 'perfect', 'unaffected by wording', 'the same as DNA evidence'], x: '“Smashed” v “hit”.' },
    { q: 'The first familial DNA conviction in the UK was…', o: ['Craig Harman', 'Colin Pitchfork', 'Barry George', 'Robert Napper'], x: '2004.' },
    { q: 'Suspect interviews in England and Wales follow the…', o: ['PEACE model', 'Reid technique', 'Full Code Test', 'Turnbull rules'], x: 'Non-coercive interviewing.' }
  ],
  exam: [{ q: 'Practice task: assess the usefulness of five investigative techniques in investigating (a) a series of burglaries and (b) an online fraud. [20]', m: 20, ms: ['forensic — fingerprints, footwear, DNA (burglary); digital forensics (fraud)', 'surveillance — CCTV and ANPR (burglary); communications data (fraud)', 'profiling — geographical patterns of burglaries; limited use for fraud', 'databases — PNC, IDENT1, NDNAD; financial intelligence', 'interviews — witnesses and victims; suspects (PEACE); experts', 'situations considered (scene, laboratory, station, street)', 'clear assessment of strengths and limits, with examples'], bands: U3_BANDS['1.2'] }],
  tools: ['techniquesort']
});

/* ---------- AC1.3 How evidence is processed ---------- */
TOPICS.push({
  id: '3.1.3', unit: '3', ref: 'AC1.3', title: 'How evidence is processed',
  short: 'Physical and testimonial evidence: collection, transfer, storage, analysis and the personnel involved — with case studies',
  summary: 'Evidence is only useful if it is collected, moved, stored and analysed properly. This criterion asks you to explain how physical and testimonial evidence are processed, and to use case studies — Barry George, Sally Clark, Angela Cannings and Amanda Knox — to show what happens when processing goes wrong.',
  spec: ['Types of evidence: physical evidence, testimonial evidence', 'Process: collection, transfer, storage, analysis, personnel involved', 'Case studies, e.g. Barry George, Sally Clark, Angela Cannings, Amanda Knox'],
  learn: [
    { h: 'Types of evidence', html: `<ul><li><b>Physical (real) evidence</b>: objects and traces — weapons, clothing, DNA, fingerprints, fibres, documents, digital data, CCTV footage.</li><li><b>Testimonial evidence</b>: what people say — witness statements, victim accounts, suspect interviews and confessions, expert opinion given in court.</li></ul>` },
    { h: 'Processing physical evidence', html: `
<ol><li><b>Collection</b> — the scene is secured with a cordon and a scene log records everyone who enters. CSIs wear protective suits, gloves and masks to prevent contamination; evidence is photographed in place, then recovered using swabs, tape lifts or tweezers.</li>
<li><b>Packaging and labelling</b> — each item is sealed in an evidence bag (paper for biological material so it does not rot; plastic for dry items), labelled with a unique exhibit number, time, place and collector, and signed.</li>
<li><b>Transfer</b> — every movement is recorded, creating the <b>chain of continuity</b> (chain of custody) so the court can be sure the item was not tampered with. <b>Locard’s exchange principle</b>: “every contact leaves a trace” — which also means evidence can be transferred innocently or by contamination.</li>
<li><b>Storage</b> — in secure stores at the right conditions (biological samples refrigerated or frozen), managed by an exhibits officer.</li>
<li><b>Analysis</b> — in accredited laboratories by forensic scientists; results are written up in expert reports.</li></ol>
<p><b>Personnel</b>: first officer, CSIs, crime scene manager, exhibits officer, forensic scientists, pathologist, digital examiners.</p>` },
    { h: 'Processing testimonial evidence', html: `
<ul><li><b>Collection</b> — first accounts at the scene; written statements (MG11 form); video-recorded interviews for vulnerable and intimidated witnesses (Achieving Best Evidence guidance); suspect interviews recorded under PACE.</li>
<li><b>Transfer and storage</b> — statements and recordings are logged and stored securely and disclosed to the defence as required (AC2.3).</li>
<li><b>Analysis</b> — detectives and the CPS assess reliability and credibility; experts may be instructed and their reports tested.</li>
<li>Risks: leading questions ([[c:loftus]]), witness contamination by media coverage, pressure in interviews, and experts overstating their evidence.</li></ul>` },
    { h: 'Case studies', html: `
<div class="tbl"><table><tr><th>Case</th><th>Evidence problem</th></tr>
<tr><td>[[c:barrygeorge]]</td><td>A single particle of firearm residue, recovered a year later from a coat that had been handled and photographed in a room used for firearms — risk of contamination; significance overstated</td></tr>
<tr><td>[[c:sallyclark]]</td><td>Testimonial (expert) evidence: a misleading statistic; a pathologist’s failure to disclose test results</td></tr>
<tr><td>[[c:cannings]]</td><td>Conviction based almost entirely on disputed expert opinion</td></tr>
<tr><td>[[c:knox]]</td><td>DNA collected late and handled with risk of contamination; confession obtained without a lawyer</td></tr>
<tr><td>[[c:adamscott]]</td><td>Laboratory contamination from a reused tray</td></tr></table></div>` }
  ],
  debate: [],
  cases: ['barrygeorge', 'sallyclark', 'cannings', 'knox', 'adamscott', 'loftus'],
  worked: [],
  pitfalls: ['Covering only physical evidence — both types are needed for the top band.', 'Listing the stages without explaining them.', 'Mentioning case studies without explaining what went wrong in the processing.'],
  cards: [
    ['Physical v testimonial evidence?', 'Physical: objects and traces. Testimonial: what people say — witnesses, suspects, experts.'],
    ['Stages of processing evidence?', 'Collection, transfer, storage, analysis (with packaging and labelling).'],
    ['What is the chain of continuity?', 'A record of every person who handled an item, proving it was not tampered with.'],
    ['What is Locard’s exchange principle?', 'Every contact leaves a trace.'],
    ['Why are biological samples stored in paper bags?', 'Plastic traps moisture, which degrades DNA.'],
    ['What went wrong in the Barry George case?', 'Firearm residue evidence was overstated and at risk of contamination.'],
    ['What went wrong in Sally Clark’s case?', 'Misleading statistical evidence from Roy Meadow and non-disclosure of test results.']
  ],
  quiz: [
    { q: 'Who records everyone entering a crime scene?', o: ['The scene log (kept by an officer at the cordon)', 'The jury', 'The judge', 'The pathologist'], x: 'Part of preserving the scene.' },
    { q: 'Locard’s principle states that…', o: ['every contact leaves a trace', 'DNA is always reliable', 'witnesses never forget', 'confessions are proof'], x: 'Transfer of trace evidence.' },
    { q: 'Sally Clark’s conviction was quashed partly because…', o: ['expert statistical evidence was misleading', 'the DNA was contaminated', 'CCTV was missing', 'she was under 18'], x: '“1 in 73 million”.' },
    { q: 'Which is testimonial evidence?', o: ['A witness statement', 'A fingerprint', 'A knife', 'CCTV footage'], x: 'What a person says.' }
  ],
  exam: [{ q: 'Practice task: explain how physical and testimonial evidence would be processed in this case, using case studies. [6]', m: 6, scen: 'A shop owner is assaulted during a robbery. The robber drops a baseball cap. Two customers saw the attack.', ms: ['physical — cap: collection by CSI, packaging in paper bag, labelling, chain of continuity, storage, DNA analysis', 'testimonial — witness statements, cognitive interview, identification procedure', 'personnel involved', 'risks — contamination (Barry George, Adam Scott); witness error (Loftus)', 'clear explanation of both types'], bands: U3_BANDS['1.3'] }],
  tools: ['chainsteps']
});

/* ---------- AC1.4 Rights of individuals ---------- */
TOPICS.push({
  id: '3.1.4', unit: '3', ref: 'AC1.4', title: 'Rights of suspects, victims and witnesses',
  short: 'The rights of suspects, victims and witnesses from investigation through to appeal',
  summary: 'The criminal justice system must balance the rights of those accused with the rights of victims and witnesses. This criterion asks you to examine the rights of all three groups at every stage, from the investigation to the appeal.',
  spec: ['Rights of suspects', 'Rights of victims', 'Rights of witnesses', 'From investigation through to appeal'],
  learn: [
    { h: 'Suspects', html: `
<ul><li><b>Stop and search and arrest</b> — must be based on reasonable grounds (PACE 1984 and Code A/Code G); must be told the grounds of arrest.</li>
<li><b>In custody</b> — the right to free legal advice (s58 PACE), to have someone informed (s56), to consult the Codes of Practice, to medical help and an interpreter; an appropriate adult for under-18s and vulnerable adults; detention limits of 24 hours, extendable to 36 and then 96 hours for indictable offences (see the detention clock).</li>
<li><b>Interviews</b> — the caution; the right to silence (though adverse inferences can be drawn — Criminal Justice and Public Order Act 1994); interviews recorded; confessions obtained by oppression are excluded (s76 PACE).</li>
<li><b>Trial</b> — Article 6 ECHR fair trial; presumption of innocence; the prosecution must prove guilt beyond reasonable doubt; disclosure of unused material; legal aid (means and merits tested); jury trial for indictable offences.</li>
<li><b>Appeal</b> — to the Crown Court from the magistrates; to the Court of Appeal from the Crown Court if the conviction is unsafe; to the Criminal Cases Review Commission after appeals fail.</li></ul>` },
    { h: 'Victims', html: `
<ul><li>The <b>Code of Practice for Victims of Crime</b> (Victims’ Code) sets out 12 rights, including to be kept informed about the investigation and prosecution, to be referred to support services, to make a <b>Victim Personal Statement</b>, and to be told about the offender’s release.</li>
<li>The <b>Victims’ Right to Review</b> scheme (2013) lets victims ask for a CPS decision not to charge to be reviewed.</li>
<li>Special measures if vulnerable or intimidated; anonymity for victims of sexual offences (lifelong).</li>
<li>Compensation through court compensation orders or the Criminal Injuries Compensation Authority.</li>
<li>The <b>Victims and Prisoners Act 2024</b> places the principles of the Victims’ Code in law and requires criminal justice agencies to monitor how well they deliver it.</li></ul>` },
    { h: 'Witnesses', html: `
<ul><li><b>Special measures</b> (Youth Justice and Criminal Evidence Act 1999) for vulnerable and intimidated witnesses: screens, live video link, evidence in private, removal of wigs and gowns, video-recorded evidence-in-chief, pre-recorded cross-examination (s28), intermediaries and communication aids.</li>
<li><b>Witness anonymity orders</b> in rare cases where a witness’s life is at risk (Coroners and Justice Act 2009).</li>
<li>Witness Care Units keep witnesses informed; expenses; protection from intimidation (an offence under the Criminal Justice and Public Order Act 1994).</li></ul>` },
    { h: 'Examining the balance', html: `<p>Band 2 needs the rights to be <b>examined</b>, not just listed. Consider tensions: disclosure protects suspects but can intrude on victims’ privacy (demands for complainants’ phone data); special measures help witnesses but may affect the defendant’s ability to challenge evidence; delays in the courts harm both defendants on remand and victims waiting for justice.</p>` }
  ],
  debate: [{ q: 'Does the system favour suspects over victims?', for: ['Extensive PACE safeguards and the high burden of proof.', 'Victims’ Code rights are often not delivered in practice.', 'Low charge rates for rape leave victims without justice.'], ag: ['Miscarriages of justice show suspects’ rights are sometimes ignored.', 'Legal aid cuts limit defence representation.', 'Special measures, the Victims’ Code and the 2024 Act have strengthened victims’ position.', 'Court backlogs harm both sides.'] }],
  cases: ['sallyclark', 'barrygeorge'],
  worked: [],
  pitfalls: ['Only covering suspects — victims and witnesses are equally required.', 'Stopping at the police station — the specification says through to appeal.', 'Listing rights without examining how well they work.'],
  cards: [
    ['s58 PACE?', 'Right to free legal advice in custody.'],
    ['s56 PACE?', 'Right to have someone informed of the arrest.'],
    ['Maximum detention without charge for an indictable offence (non-terrorism)?', '96 hours, with magistrates’ warrants.'],
    ['What is the Victims’ Code?', 'The Code of Practice for Victims of Crime — 12 rights for victims.'],
    ['What is a Victim Personal Statement?', 'A statement explaining the impact of the crime, considered at sentencing.'],
    ['Name three special measures.', 'Screens, live video link, pre-recorded cross-examination, removal of wigs, intermediaries.'],
    ['What is the Victims’ Right to Review?', 'Victims can ask for a CPS decision not to prosecute to be reviewed (2013).'],
    ['Where do cases go after appeals fail?', 'The Criminal Cases Review Commission.']
  ],
  quiz: [
    { q: 'Special measures for witnesses come from…', o: ['the Youth Justice and Criminal Evidence Act 1999', 'PACE 1984 s1', 'the Bail Act 1976', 'the Juries Act 1974'], x: 'Screens, video links, etc.' },
    { q: 'A suspect’s right to free legal advice is in…', o: ['s58 PACE', 's76 PACE', 'the Victims’ Code', 'Article 3 ECHR'], x: '' },
    { q: 'Which gives victims the right to ask for a CPS decision not to charge to be looked at again?', o: ['Victims’ Right to Review', 'Clare’s Law', 'The Full Code Test', 'The Turnbull guidelines'], x: '2013 scheme.' },
    { q: 'The burden of proof in a criminal trial is on…', o: ['the prosecution, beyond reasonable doubt', 'the defence, on balance of probabilities', 'the judge', 'the jury'], x: 'Presumption of innocence.' }
  ],
  exam: [{ q: 'Practice task: examine the rights of the suspect, the victim and a witness in this case, from investigation to appeal. [6]', m: 6, scen: 'Nina, 15, says she was assaulted by a neighbour, Craig. Her friend Leah saw part of the attack. Craig is arrested.', ms: ['Craig — PACE rights in custody (s58, s56, detention limits), caution and interview, fair trial, disclosure, appeal routes', 'Nina — Victims’ Code, VPS, special measures as a child, anonymity if sexual, Right to Review', 'Leah — special measures (under 18), Witness Care, protection from intimidation', 'examination of how well rights work — tensions and limitations', 'covers investigation through to appeal'], bands: U3_BANDS['1.4'] }],
  tools: ['detention', 'rightsort']
});

/* ---------- Unit 3 LO1 tools ---------- */
TOOLS.personnelsort = { type: 'sort', title: 'Who does what?', intro: 'Match each task to the person responsible.', cats: ['CSI', 'Forensic scientist', 'Pathologist', 'Detective', 'CPS'], items: [
  ['Lifts fingerprints from a door handle at the scene', 'CSI', ''],
  ['Compares a DNA profile with the database in a laboratory', 'Forensic scientist', ''],
  ['Determines that the victim died of a single stab wound', 'Pathologist', 'Post-mortem.'],
  ['Interviews the suspect under caution', 'Detective', 'PACE and PEACE.'],
  ['Applies the Full Code Test to decide on a murder charge', 'CPS', ''],
  ['Photographs and bags a knife found in a bin', 'CSI', ''],
  ['Tests blood for alcohol and drugs', 'Forensic scientist', 'Toxicology.']
] };
TOOLS.techniquesort = { type: 'sort', title: 'Which technique is most useful?', intro: 'Choose the technique that would be most useful first in each situation.', cats: ['Forensic', 'Surveillance', 'Profiling', 'Database', 'Interview'], items: [
  ['A burglar left blood on a broken window.', 'Forensic', 'DNA from blood.'],
  ['A car used in a robbery was driven along a motorway.', 'Surveillance', 'ANPR.'],
  ['Five similar sexual assaults near railway stations; no suspect.', 'Profiling', 'Geographical profiling.'],
  ['A DNA profile from a scene has no direct match.', 'Database', 'Familial search on the NDNAD.'],
  ['A bus driver saw a man running from the scene.', 'Interview', 'Cognitive interview.'],
  ['A company’s network was hacked and data stolen.', 'Forensic', 'Digital forensics.']
] };
TOOLS.chainsteps = { type: 'steps', title: 'The journey of an exhibit', intro: 'Follow a knife from a crime scene to the courtroom.', steps: [
  { h: 'Secure the scene', html: '<p>The first officer sets a cordon and starts the scene log. Nobody enters without being recorded.</p>' },
  { h: 'Record in place', html: '<p>The CSI photographs the knife where it lies, with a scale, before touching it.</p>' },
  { h: 'Recover and package', html: '<p>Wearing gloves and a suit, the CSI places the knife in a rigid tube or box, seals it, labels it with an exhibit number and signs across the seal.</p>' },
  { h: 'Chain of continuity', html: '<p>Every transfer — to the exhibits officer, the store, the laboratory — is signed and dated.</p>' },
  { h: 'Storage', html: '<p>The exhibit is kept in a secure store in the right conditions until it is analysed.</p>' },
  { h: 'Laboratory analysis', html: '<p>A forensic scientist swabs the handle for DNA and tests blood on the blade, working in clean conditions to avoid contamination.</p>' },
  { h: 'Report and disclosure', html: '<p>Results are written in an expert statement and disclosed to the defence, who may commission their own expert.</p>' },
  { h: 'Court', html: '<p>The scientist gives evidence and is cross-examined. If the chain of continuity is broken, the defence may argue the evidence is unreliable.</p>' }
] };
TOOLS.rightsort = { type: 'sort', title: 'Whose right is it?', intro: 'Decide whether each right belongs mainly to suspects, victims or witnesses.', cats: ['Suspect', 'Victim', 'Witness'], items: [
  ['Free legal advice at the police station', 'Suspect', 's58 PACE.'],
  ['Making a personal statement about the impact of the crime', 'Victim', 'VPS.'],
  ['Giving evidence from behind a screen', 'Witness', 'Special measures — also available to victims who are witnesses.'],
  ['Being presumed innocent until proven guilty', 'Suspect', 'Article 6.'],
  ['Asking for review of a decision not to charge', 'Victim', 'Right to Review.'],
  ['Being released or charged within 24 hours unless extended', 'Suspect', 'PACE.'],
  ['Being told when the offender will be released', 'Victim', 'Victim Contact Scheme.']
] };
