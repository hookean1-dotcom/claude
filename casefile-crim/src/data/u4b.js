/* ==========================================================
   UNIT 4 · CRIME AND PUNISHMENT — LO3 (AC3.1 – AC3.4)
   ========================================================== */
addCases([
  { id: 'casey', n: 'The Casey Review of the Metropolitan Police', y: 2023, a: '4', t: '4.3.4', c: 'Report', f: 'After Sarah Everard’s murder by a serving officer, Baroness Louise Casey reviewed the culture and standards of the Met. She found it was institutionally racist, misogynistic and homophobic, and had failed to root out officers who abused their position.', p: 'Key evidence for evaluating police effectiveness and legitimacy: policing by consent depends on public trust, which had been badly damaged.' },
  { id: 'transforming', n: 'Transforming Rehabilitation', y: 2014, a: '4', t: '4.3.4', c: 'Case', f: 'Probation in England and Wales was split in 2014: a public National Probation Service managed high-risk offenders, and private Community Rehabilitation Companies managed low and medium-risk offenders, paid partly by results.', p: 'The Chief Inspector of Probation called the model “irredeemably flawed”. The contracts were ended early and probation was reunified in the public sector in 2021 — an example of a policy failing to achieve social control.' },
  { id: 'zaraaleena', n: 'Murder of Zara Aleena', y: 2022, a: '4', t: '4.3.3', c: 'Case', f: 'Zara Aleena was murdered in east London by Jordan McSweeney, who had been released from prison on licence nine days earlier. He had many previous convictions and had already breached his licence conditions.', p: 'The Chief Inspector of Probation found serious failings: he had been wrongly assessed as medium risk and the recall process was too slow. Shows the limitations of probation — resources, risk assessment and information sharing.' },
  { id: 'berwyn', n: 'HMP Berwyn', y: 2017, a: '4', t: '4.3.1', c: 'Case', f: 'Opened in Wrexham in 2017, Berwyn is one of the largest prisons in the UK, holding about 2,000 men. It was designed around a “rehabilitative culture”: prisoners are called “men”, cells are called “rooms”, and there is an emphasis on education and work.', p: 'Shows a prison philosophy based on rehabilitation. Inspections have found both progress and serious problems such as drugs and staffing, so it is useful for evaluating effectiveness.' },
  { id: 'hmpbirmingham', n: 'HMP Birmingham taken over from G4S', y: 2018, a: '4', t: '4.3.4', c: 'Case', f: 'After an inspection in 2018 found appalling conditions — violence, drugs, blood and vomit left in corridors, and staff locking themselves in offices — the government took over the running of the privately run prison.', p: 'Evidence of prison failure and the risks of privatisation. Also shows the role of HM Inspectorate of Prisons in holding agencies to account.' },
  { id: 'newman', n: 'Newman: defensible space', y: 1972, a: '4', t: '4.3.2', c: 'Study', f: 'Oscar Newman compared housing projects in New York and argued that crime was lower where design created “defensible space”: territory residents could see, feel ownership of and control.', p: 'The basis of environmental crime prevention such as Secured by Design and alley-gating. Critics say it ignores social causes and can displace crime.' },
  { id: 'asbo', n: 'ASBOs and their replacements', y: 2014, a: '4', t: '4.3.2', c: 'Case', f: 'Anti-social behaviour orders were introduced by the Crime and Disorder Act 1998: civil orders banning behaviour, where breach was a crime. They were replaced by civil injunctions and criminal behaviour orders under the Anti-social Behaviour, Crime and Policing Act 2014.', p: 'A behavioural measure of social control. Critics said ASBOs were breached by many young people, criminalised them and became a “badge of honour” (labelling).' },
  { id: 'stgiles', n: 'St Giles Trust', y: 1962, a: '4', t: '4.3.1', c: 'Case', f: 'A charity that trains ex-offenders as peer advisers to support people leaving prison, young people at risk of county lines exploitation, and others with complex needs.', p: 'Shows charities filling gaps in state provision, with a philosophy of using lived experience. Relies on grants and contracts, so funding is insecure.' },
  { id: 'nacro', n: 'Nacro', y: 1966, a: '4', t: '4.3.1', c: 'Case', f: 'A national social justice charity (originally the National Association for the Care and Resettlement of Offenders) that provides housing, education, and resettlement support for people leaving prison.', p: 'An example of a charity contributing to social control by supporting desistance, and of a pressure group campaigning on issues such as criminal records.' },
  { id: 'victimsupport', n: 'Victim Support', y: 1974, a: '4', t: '4.3.1', c: 'Case', f: 'An independent charity that provides free, confidential support to victims and witnesses of crime in England and Wales, funded mainly by grants from Police and Crime Commissioners and the Ministry of Justice.', p: 'Contributes to social control by supporting victims and encouraging reporting. Shows how state and charity work together.' },
  { id: 'hallam', n: 'Just Stop Oil sentences', y: 2024, a: '4', t: '4.3.3', c: 'Case', f: 'Roger Hallam and other Just Stop Oil activists were jailed in 2024 for conspiring to cause a public nuisance by blocking the M25 motorway. Hallam’s five-year sentence was reduced on appeal in 2025.', p: 'An example of crime committed by people with moral imperatives: activists believe they have a moral duty to break the law, so deterrence and rehabilitation have limited effect. It also raises civil liberties questions about protest.' },
  { id: 'uplift', n: 'Police Uplift Programme', y: 2023, a: '4', t: '4.3.3', c: 'Case', f: 'After police officer numbers in England and Wales fell by around 20,000 between 2010 and 2017 because of budget cuts, the government funded the recruitment of 20,000 additional officers between 2019 and 2023.', p: 'Shows how finance limits and shapes social control. Many new officers were inexperienced, and detective shortages remained.' }
]);

/* ---------- AC3.1 Role of agencies ---------- */
TOPICS.push({
  id: '4.3.1', unit: '4', ref: 'AC3.1', title: 'The role of agencies in social control',
  short: 'Aims and objectives, funding, philosophy and working practices of the police, CPS, judiciary, prisons, probation, charities and pressure groups',
  summary: 'Many agencies contribute to social control. This criterion asks you to explain the role of each — its aims and objectives, how it is funded, its philosophy, and its working practices (the types of crime and offenders it deals with, and whether it works locally or nationally).',
  spec: ['Role: aims and objectives, funding, philosophy, working practices (types of criminality, types of offenders, reach — local, national)', 'Government-sponsored agencies: police, CPS, judiciary, prisons, probation', 'Charities', 'Pressure groups', 'Synoptic: apply understanding from Unit 3'],
  learn: [
    { h: 'Government-sponsored agencies', html: `
<div class="tbl"><table><tr><th>Agency</th><th>Aims and philosophy</th><th>Funding</th><th>Working practices and reach</th></tr>
<tr><td><b>Police</b></td><td>Prevent and detect crime, keep the peace, protect the public; <b>policing by consent</b> ([[c:peel]])</td><td>Home Office grant plus local council tax precept set by the PCC</td><td>43 local forces; neighbourhood, response, CID, specialist units; national bodies such as the NCA for serious organised crime</td></tr>
<tr><td><b>CPS</b></td><td>Prosecute fairly, independently and effectively; the Code for Crown Prosecutors</td><td>Government funding through the Attorney General’s Office</td><td>National body in 14 areas (including Wales); specialist units for complex casework, fraud, counter-terrorism</td></tr>
<tr><td><b>Judiciary</b></td><td>Independent and impartial application of the law; fair trials; sentencing</td><td>Salaries paid from the Consolidated Fund; courts run by HMCTS (Ministry of Justice)</td><td>Magistrates (local), district and circuit judges, High Court and appeal judges (national)</td></tr>
<tr><td><b>Prisons</b></td><td>HMPPS: protect the public and reduce reoffending; keep prisoners safe and secure; philosophies range from security to a rehabilitative culture ([[c:berwyn]])</td><td>Ministry of Justice; some prisons run by private companies under contract</td><td>Categories A–D for men; women’s prisons; young offender institutions; national estate</td></tr>
<tr><td><b>Probation</b></td><td>Protect the public, reduce reoffending, rehabilitate; supervise offenders on community sentences and licence</td><td>Ministry of Justice (HMPPS)</td><td>Regional probation services; risk assessment; MAPPA; approved premises (hostels)</td></tr></table></div>` },
    { h: 'Charities', html: `
<ul><li>Independent, non-profit organisations, often with a philosophy of care, rehabilitation or support.</li>
<li>Funded by donations, grants (lottery, trusts), and contracts from government and PCCs.</li>
<li>Examples: [[c:victimsupport]] (victims and witnesses), [[c:nacro]] (resettlement, housing), [[c:stgiles]] (peer mentoring), Women’s Aid and Refuge (domestic abuse), the Prison Advice and Care Trust, Catch22, Samaritans in prisons (Listener schemes).</li>
<li>Reach: national charities with local services; often fill gaps in state provision.</li></ul>` },
    { h: 'Pressure groups', html: `
<ul><li>Aim to influence policy and law rather than provide services (though some do both).</li>
<li>Funded by members, donations and grants.</li>
<li>Examples: [[c:howardleague]] and the Prison Reform Trust (penal reform), Liberty (civil liberties), INQUEST (deaths in custody), Unlock (people with convictions), Women in Prison.</li>
<li>Methods: research, lobbying, legal challenges, media campaigns (Unit 1).</li></ul>` }
  ],
  debate: [],
  cases: ['peel', 'berwyn', 'victimsupport', 'nacro', 'stgiles', 'howardleague'],
  worked: [],
  pitfalls: ['Describing agencies without covering aims, funding, philosophy and working practices.', 'Forgetting charities and pressure groups.'],
  cards: [
    ['Four aspects of an agency’s role in AC3.1?', 'Aims and objectives, funding, philosophy, working practices.'],
    ['How are the police funded?', 'Home Office grant plus local council tax precept.'],
    ['Philosophy of British policing?', 'Policing by consent (Peelian principles).'],
    ['Aim of HMPPS?', 'Protect the public and reduce reoffending.'],
    ['What does the probation service do?', 'Supervises offenders in the community and on licence; assesses risk.'],
    ['Charity v pressure group?', 'Charities provide services and support; pressure groups campaign to influence policy.'],
    ['Example of a charity for victims?', 'Victim Support.'],
    ['What is distinctive about HMP Berwyn?', 'A large prison designed around a rehabilitative culture.']
  ],
  quiz: [
    { q: 'Which agency supervises offenders released on licence?', o: ['Probation', 'The CPS', 'The judiciary', 'Victim Support'], x: '' },
    { q: 'Police funding comes from…', o: ['a Home Office grant and the council tax precept', 'the CPS', 'private donations only', 'fines only'], x: '' },
    { q: 'Nacro mainly supports…', o: ['people leaving prison to resettle', 'judges', 'the police', 'juries'], x: '' },
    { q: 'A pressure group’s main aim is to…', o: ['influence policy and law', 'prosecute offenders', 'run prisons', 'sentence offenders'], x: '' }
  ],
  exam: [{ q: 'Explain the role of two agencies in achieving social control in the scenario. [6]', m: 6, scen: 'Jay, 20, has been released from prison on licence after a sentence for burglary. He has nowhere to live and wants to stop offending.', ms: ['probation — aims, supervision of licence, risk assessment, funding, philosophy', 'charity (e.g. Nacro/St Giles) — housing, peer mentoring, filling gaps', 'police — monitoring, recall', 'aims, funding, philosophy, working practices covered', 'applied to Jay'] }],
  tools: ['agencysort']
});

/* ---------- AC3.2 Contribution of agencies ---------- */
TOPICS.push({
  id: '4.3.2', unit: '4', ref: 'AC3.2', title: 'How agencies contribute to social control',
  short: 'Environmental, behavioural and institutional tactics, disciplinary procedures, and gaps in state provision',
  summary: 'Agencies use a range of tactics and measures to achieve social control. This criterion asks you to describe their contribution: environmental measures such as design and gated lanes, behavioural measures such as ASBOs and token economies, institutional measures, disciplinary procedures, and how charities and others fill gaps in state provision.',
  spec: ['Tactics and measures used by agencies: environmental (design, gated lanes)', 'Behavioural (ASBO, token economy)', 'Institutional', 'Disciplinary procedures (rule making, staged/phased)', 'Gaps in state provision', 'Synoptic: policy and campaigns (Unit 1), theories (Unit 2), processes (Unit 3)'],
  learn: [
    { h: 'Environmental measures', html: `
<ul><li><b>Design</b> — Crime Prevention Through Environmental Design and the police’s <b>Secured by Design</b> standards: natural surveillance, good lighting, defensible space ([[c:newman]]), secure doors and windows.</li>
<li><b>Gated lanes</b> (alley-gating) — locked gates on back alleys to cut burglary routes; evaluated as reducing burglary in areas such as Liverpool.</li>
<li>CCTV, street lighting, target hardening (steering locks, immobilisers), “designing out” crime from products.</li>
<li>Theory: right realism and rational choice (Clarke) — Unit 2.</li></ul>` },
    { h: 'Behavioural measures', html: `
<ul><li><b>ASBOs</b> and now civil injunctions and criminal behaviour orders ([[c:asbo]]); dispersal orders; public spaces protection orders.</li>
<li><b>Token economy</b> — rewarding good behaviour with tokens exchangeable for privileges (operant conditioning). Prisons’ <b>Incentives</b> scheme (basic, standard and enhanced levels) is a version of this.</li>
<li>Offending behaviour programmes (CBT), anger management, drug treatment.</li></ul>` },
    { h: 'Institutional measures and disciplinary procedures', html: `
<ul><li><b>Institutional</b> — the regimes of prisons, young offender institutions and secure hospitals; probation supervision; schools and workplaces as institutions of control.</li>
<li><b>Disciplinary procedures</b>: <b>rule making</b> — prison rules, codes of conduct, licence conditions; and <b>staged or phased</b> responses — warnings, then sanctions, then more serious sanctions (e.g. prison adjudications, loss of privileges, recall to prison for breach of licence; schools’ behaviour policies from detention to exclusion).</li></ul>` },
    { h: 'Gaps in state provision', html: `<p>Where the state does not provide enough, charities, voluntary groups and communities fill the gaps: resettlement and housing ([[c:nacro]]), peer mentoring ([[c:stgiles]]), victim support ([[c:victimsupport]]), refuges, youth clubs, food banks, neighbourhood watch. Their contribution is real but depends on funding and volunteers.</p>` }
  ],
  debate: [{ q: 'Which kind of measure contributes most to social control?', for: ['Environmental measures cut opportunities cheaply and permanently (alley-gating).', 'Behavioural measures target individuals’ conduct.', 'Institutional measures protect the public from serious offenders.'], ag: ['Environmental measures may displace crime.', 'ASBOs were often breached and labelled young people.', 'Institutions are expensive with high reoffending.', 'Charities depend on insecure funding.'] }],
  cases: ['newman', 'asbo', 'kirkholt', 'nacro', 'stgiles', 'victimsupport'],
  worked: [],
  pitfalls: ['Confusing environmental and behavioural measures.', 'Forgetting gaps in state provision.', 'No link to theory.'],
  cards: [
    ['Examples of environmental measures?', 'Secured by Design, alley-gating (gated lanes), CCTV, lighting.'],
    ['Examples of behavioural measures?', 'ASBOs (now CBOs and injunctions), token economy, CBT programmes.'],
    ['What replaced ASBOs in 2014?', 'Civil injunctions and criminal behaviour orders.'],
    ['What is a token economy?', 'Rewarding good behaviour with tokens exchanged for privileges.'],
    ['What is a staged disciplinary procedure?', 'Escalating responses: warning, then sanction, then more serious sanction.'],
    ['What is defensible space?', 'Design that lets residents see and control their territory (Newman).']
  ],
  quiz: [
    { q: 'Alley-gating is a…', o: ['environmental measure', 'behavioural measure', 'disciplinary procedure', 'pressure group'], x: '' },
    { q: 'The prison Incentives scheme is based on…', o: ['operant conditioning (token economy)', 'labelling', 'Lombroso', 'Marxism'], x: '' },
    { q: 'Recall to prison for breaching licence is part of…', o: ['a staged disciplinary procedure', 'environmental design', 'a campaign', 'a victim survey'], x: '' },
    { q: 'Which theory underpins environmental crime prevention?', o: ['Right realism / rational choice', 'Labelling', 'Freud', 'Functionalism'], x: '' }
  ],
  exam: [{ q: 'Describe the contribution of agencies to achieving social control in the scenario. [6]', m: 6, scen: 'Residents on an estate complain of burglaries through back alleys and groups of teenagers drinking and intimidating people.', ms: ['environmental — alley-gating, lighting, Secured by Design, CCTV', 'behavioural — civil injunctions, CBOs, dispersal orders; youth diversion', 'institutional — police patrols, youth justice services', 'charities/community — youth work, neighbourhood watch', 'link to theories (right realism, left realism)'] }],
  tools: ['tacticsort']
});

/* ---------- AC3.3 Limitations of agencies ---------- */
TOPICS.push({
  id: '4.3.3', unit: '4', ref: 'AC3.3', title: 'Limitations of agencies in achieving social control',
  short: 'Recidivism, civil liberties and legal barriers, access to resources and support, finance, local and national policies, environment, and crime by those with moral imperatives',
  summary: 'Agencies cannot achieve perfect social control. This criterion asks you to examine the limitations they face — from repeat offending and legal safeguards to money, policy, the environment and offenders who believe they are morally right — and the implications of those limitations.',
  spec: ['Repeat offenders / recidivism', 'Civil liberties and legal barriers', 'Access to resources and support', 'Finance', 'Local and national policies', 'Environment', 'Crime committed by those with moral imperatives', 'Synoptic: theories (Unit 2) and policy and campaigns (Unit 1)'],
  learn: [
    { h: 'Recidivism and access to support', html: `
<ul><li><b>Repeat offenders</b> — Ministry of Justice figures consistently show that around a quarter of adult offenders are proven to reoffend within a year, rising to more than half for those released from short prison sentences. A small group of prolific offenders commits a large share of crime.</li>
<li><b>Access to resources and support</b> — offenders often have complex needs: addiction, mental illness, learning disabilities, homelessness, low literacy. Waiting lists for treatment and lack of housing on release undermine rehabilitation.</li></ul>` },
    { h: 'Civil liberties, legal barriers and finance', html: `
<ul><li><b>Civil liberties and legal barriers</b> — agencies must respect human rights and legal safeguards: PACE time limits, the right to silence, limits on stop and search and DNA retention, the presumption of innocence. These protect everyone but can limit what agencies can do (a due process v crime control tension).</li>
<li><b>Finance</b> — budget cuts after 2010 reduced police officer numbers by around 20,000 before the [[c:uplift]]; court closures and backlogs; prison overcrowding ([[c:sds40]]); probation workloads.</li></ul>` },
    { h: 'Policies and environment', html: `
<ul><li><b>Local and national policies</b> — priorities vary between forces and PCCs (a “postcode lottery”); national policies change with governments and may conflict (tough sentencing increases prison numbers; early release reduces them). Failed policies such as [[c:transforming]].</li>
<li><b>Environment</b> — physical (old Victorian prisons, rural areas with few police, urban estates) and social (deprived communities, gang culture, drugs markets inside prisons). Environmental measures may simply displace crime.</li></ul>` },
    { h: 'Crime by those with moral imperatives', html: `<p>Some people break the law because they believe they have a moral duty to: protesters ([[c:hallam]]), animal rights activists, some people who help loved ones to die, and terrorists motivated by ideology. Fear of punishment does not deter them — they may welcome punishment as publicity or martyrdom — and rehabilitation is difficult when they do not accept they did wrong. Heavy punishment may increase sympathy for their cause.</p>` }
  ],
  debate: [],
  cases: ['uplift', 'sds40', 'transforming', 'zaraaleena', 'hallam'],
  worked: [],
  pitfalls: ['Listing limitations without examining their implications.', 'Forgetting crime by those with moral imperatives.', 'No link to theories — e.g. labelling explains recidivism; strain explains why resources matter.'],
  cards: [
    ['Seven limitations in AC3.3?', 'Recidivism, civil liberties/legal barriers, access to resources and support, finance, local and national policies, environment, moral imperatives.'],
    ['What is recidivism?', 'Reoffending after punishment.'],
    ['Roughly what proportion of adult offenders reoffend within a year?', 'Around a quarter (over half after short prison sentences).'],
    ['How did budget cuts affect policing?', 'Officer numbers fell by around 20,000 between 2010 and 2017.'],
    ['Why is deterrence weak for people with moral imperatives?', 'They believe they are right and may welcome punishment as publicity.'],
    ['What was the murder of Zara Aleena evidence of?', 'Probation failings in risk assessment and recall.']
  ],
  quiz: [
    { q: 'Which limitation is shown by protesters who see prison as publicity?', o: ['Crime by those with moral imperatives', 'Finance', 'Environment', 'Recidivism'], x: '' },
    { q: 'PACE time limits on detention are an example of…', o: ['civil liberties and legal barriers', 'finance', 'moral imperatives', 'environmental design'], x: '' },
    { q: 'Differences in priorities between police forces are an example of…', o: ['local and national policies', 'recidivism', 'moral imperatives', 'token economy'], x: 'Postcode lottery.' },
    { q: 'Transforming Rehabilitation is an example of a limitation caused by…', o: ['national policy', 'moral imperatives', 'environment only', 'civil liberties'], x: '' }
  ],
  exam: [{ q: 'Examine the limitations of agencies in achieving social control in the scenario. [9]', m: 9, scen: 'Liam, 28, has 40 previous convictions for theft linked to drug addiction. Each time he is released from short prison sentences he is homeless within weeks. His local probation office has high staff vacancies.', ms: ['recidivism — revolving door; short sentences', 'access to resources — drug treatment, housing', 'finance — probation vacancies, workloads', 'local and national policies — sentencing, early release, housing', 'environment — drugs in prisons, deprived area', 'implications of each limitation', 'theory links (labelling, strain, right realism)', 'judgement on the most significant limitation'] }],
  tools: ['limitsort']
});

/* ---------- AC3.4 Effectiveness of agencies ---------- */
TOPICS.push({
  id: '4.3.4', unit: '4', ref: 'AC3.4', title: 'Evaluating the effectiveness of agencies',
  short: 'The success or failure of the police, CPS, judiciary, prisons, probation, charities and pressure groups in achieving social control',
  summary: 'The final criterion draws the whole course together. You need to evaluate how successful the agencies are at achieving social control, using evidence — and, as in Unit 3, judging that evidence for bias, opinion, circumstances, currency and accuracy.',
  spec: ['Government-sponsored agencies: police, CPS, judiciary, prisons, probation', 'Charities', 'Pressure groups', 'Synoptic: evaluate information in terms of bias, opinion, circumstances, currency and accuracy (Unit 3); types of evidence including trial transcripts, media reports, judgements and Law Reports'],
  learn: [
    { h: 'How to evaluate effectiveness', html: `
<ol><li><b>Set the aim</b>: what is the agency trying to achieve (AC3.1)?</li><li><b>Find evidence</b> of success and failure: statistics (crime, charge, conviction and reoffending rates), inspection reports (HMICFRS, HMI Prisons, HMI Probation), inquiries, case studies, public confidence surveys (CSEW).</li><li><b>Judge the evidence</b> for bias, opinion, circumstances, currency and accuracy (Unit 3 AC3.1).</li><li><b>Weigh limitations</b> (AC3.3) — are failures the agency’s fault?</li><li><b>Reach a judgement</b> — how effective, and compared with what?</li></ol>` },
    { h: 'The police and the CPS', html: `
<div class="debate"><div class="for"><h5>Successes</h5><ul><li>Long-term falls in CSEW crime since the mid-1990s</li><li>Major investigations solved with DNA and digital evidence</li><li>Neighbourhood policing and partnerships</li><li>CPS convictions in most cases it prosecutes</li></ul></div><div class="ag"><h5>Failures</h5><ul><li>Only around 6–7% of recorded crimes lead to a charge</li><li>Low charge rates for rape</li><li>Loss of trust — [[c:casey]]; [[c:everard]]</li><li>Disclosure failures ([[c:liamallan]])</li><li>Record Crown Court backlogs delaying justice</li></ul></div></div>` },
    { h: 'Judiciary, prisons and probation', html: `
<div class="debate"><div class="for"><h5>Successes</h5><ul><li>Independent judiciary; appeal courts correct errors</li><li>Prisons protect the public from dangerous offenders</li><li>Some prisons and programmes support rehabilitation ([[c:berwyn]]; education and work schemes)</li><li>MAPPA manages high-risk offenders — serious further offences are rare</li></ul></div><div class="ag"><h5>Failures</h5><ul><li>Overcrowding, violence, self-harm and drugs in prisons; [[c:hmpbirmingham]]</li><li>High reoffending after short sentences</li><li>[[c:transforming]] and failures such as [[c:zaraaleena]]</li><li>Sentencing inconsistency; IPP ([[c:ipp]])</li></ul></div></div>` },
    { h: 'Charities and pressure groups', html: `<ul><li><b>Charities</b>: effective at reaching people the state does not (peer mentoring, victim support) and often cheaper; but funding is short-term and uneven, and outcomes are hard to measure.</li><li><b>Pressure groups</b>: have won changes (Howard League on children in custody; campaigns in Unit 1); but influence depends on the government’s agenda, and success is often partial or slow.</li></ul>` }
  ],
  debate: [{ q: 'Is the criminal justice system effective in achieving social control?', for: ['Crime (as measured by the CSEW) is far lower than in the mid-1990s.', 'Most people are law-abiding and have confidence in the courts.', 'Serious offenders are caught and imprisoned.'], ag: ['Low charge rates and high reoffending.', 'Overcrowded prisons and court backlogs.', 'Loss of trust in the police among women and ethnic minorities.', 'Falls in crime may be due to other factors (security technology, economics).'] }],
  cases: ['casey', 'transforming', 'zaraaleena', 'hmpbirmingham', 'berwyn', 'everard'],
  worked: [],
  pitfalls: ['One-sided evaluation — give successes and failures.', 'Unsupported claims without evidence.', 'Forgetting to judge the evidence itself (bias, currency etc.).', 'No overall judgement.'],
  cards: [
    ['Name three inspectorates.', 'HMICFRS (police), HM Inspectorate of Prisons, HM Inspectorate of Probation.'],
    ['What did the Casey Review find?', 'The Met was institutionally racist, misogynistic and homophobic.'],
    ['Why was Transforming Rehabilitation reversed?', 'Inspectors found it failing; probation was reunified in 2021.'],
    ['What happened at HMP Birmingham in 2018?', 'The government took it back from G4S after an inspection found appalling conditions.'],
    ['Five criteria for judging evidence (from Unit 3)?', 'Bias, opinion, circumstances, currency, accuracy.'],
    ['Approximate charge rate for recorded crime?', 'Around 6–7% in recent years.']
  ],
  quiz: [
    { q: 'Which report found the Met institutionally racist and misogynistic in 2023?', o: ['The Casey Review', 'The Macpherson Report', 'The Byford Report', 'The Jay Report'], x: 'Macpherson (1999) also found institutional racism.' },
    { q: 'Which body inspects prisons?', o: ['HM Inspectorate of Prisons', 'The CPS', 'The Sentencing Council', 'The Senedd'], x: '' },
    { q: 'A newspaper editorial saying “prisons are holiday camps” should be judged mainly for…', o: ['bias and opinion', 'currency only', 'Law Report accuracy', 'relevance to Unit 1'], x: 'Evaluate sources.' },
    { q: 'Evidence that probation failed in the Zara Aleena case came from…', o: ['HM Inspectorate of Probation', 'a jury', 'the CCRC', 'a pressure group advert'], x: '' }
  ],
  exam: [{ q: 'Evaluate the effectiveness of agencies in achieving social control. Use the scenario and examples. [9]', m: 9, scen: 'A local newspaper reports that burglary in the town has fallen, but that a man released from prison last month has been charged with a violent attack while on licence.', ms: ['police — falling burglary; detection; partnerships; limitations', 'probation — licence supervision; risk assessment; Zara Aleena', 'prisons — rehabilitation, reoffending, overcrowding', 'charities and pressure groups', 'evidence judged for bias/currency (newspaper report)', 'balanced judgement'] }],
  tools: ['evalagencysteps']
});

/* ---------- Unit 4 LO3 tools ---------- */
TOOLS.agencysort = { type: 'sort', title: 'Which agency?', intro: 'Match each description to the agency.', cats: ['Police', 'CPS', 'Prisons', 'Probation', 'Charity', 'Pressure group'], items: [
  ['Supervises a man released on licence and can recall him to prison', 'Probation', ''],
  ['Decides whether there is a realistic prospect of conviction', 'CPS', ''],
  ['Campaigns for fewer children to be locked up', 'Pressure group', 'e.g. Howard League.'],
  ['Provides free support to a burglary victim', 'Charity', 'Victim Support.'],
  ['Holds a remanded defendant securely before trial', 'Prisons', ''],
  ['Runs neighbourhood patrols and responds to 999 calls', 'Police', '']
] };
TOOLS.tacticsort = { type: 'sort', title: 'What kind of measure?', intro: 'Classify each social control measure.', cats: ['Environmental', 'Behavioural', 'Institutional', 'Disciplinary'], items: [
  ['Locked gates across back alleys', 'Environmental', 'Gated lanes.'],
  ['A criminal behaviour order banning someone from a shopping centre', 'Behavioural', ''],
  ['A category B prison regime', 'Institutional', ''],
  ['Loss of privileges after a prison adjudication', 'Disciplinary', 'Staged/phased.'],
  ['Points exchanged for extra phone calls in a young offender institution', 'Behavioural', 'Token economy.'],
  ['Houses designed so front doors can be seen by neighbours', 'Environmental', 'Defensible space.']
] };
TOOLS.limitsort = { type: 'sort', title: 'Which limitation?', intro: 'Identify the main limitation in each example.', cats: ['Recidivism', 'Civil liberties', 'Resources and support', 'Finance', 'Moral imperatives'], items: [
  ['A prolific shoplifter returns to prison six times in two years.', 'Recidivism', ''],
  ['Police must release a suspect after 24 hours without enough evidence to charge.', 'Civil liberties', 'PACE.'],
  ['A released prisoner waits months for a mental health appointment.', 'Resources and support', ''],
  ['A force closes its rural police stations to save money.', 'Finance', ''],
  ['Activists glue themselves to a motorway, saying they must act to save the planet.', 'Moral imperatives', '']
] };
TOOLS.evalagencysteps = { type: 'steps', title: 'Evaluating an agency', intro: 'A structure for AC3.4 answers.', steps: [
  { h: 'Aim', html: '<p>What is the agency trying to achieve? (AC3.1)</p>' },
  { h: 'Evidence of success', html: '<p>Statistics, inspection reports, case studies, public confidence data.</p>' },
  { h: 'Evidence of failure', html: '<p>Reoffending, inquiries, scandals, backlogs, inspection criticisms.</p>' },
  { h: 'Judge the evidence', html: '<p>Bias, opinion, circumstances, currency, accuracy — the Unit 3 skills.</p>' },
  { h: 'Explain limitations', html: '<p>Is failure the agency’s fault, or caused by finance, policy or the environment? (AC3.3)</p>' },
  { h: 'Judgement', html: '<p>How effective overall — and compared with what?</p>' }
] };
