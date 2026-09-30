/* ==========================================================
   UNIT 2 · CRIMINAL LAW AND THE LEGAL SYSTEM — Learning aims C and D
   ========================================================== */

/* ---------- C1 The legal profession ---------- */
TOPICS.push({
  id: '2.C1', unit: '2', ref: 'C1', title: 'The legal profession in criminal cases',
  short: 'The work of solicitors, barristers and legal executives in criminal cases; how they are paid; regulation and complaints',
  summary: 'Defendants in criminal cases are advised and represented by solicitors, barristers and chartered legal executives. This topic explains what each does in a criminal case, how they are paid, and how they are regulated and held to account.',
  spec: ['The work of solicitors in criminal cases and how they are paid', 'The work of barristers in criminal cases and how they are paid', 'The work of legal executives in criminal cases and how they are paid', 'Regulation and complaints against legal professionals'],
  learn: [
    { h: 'Who does what', html: `
<div class="tbl"><table><tr><th>Professional</th><th>Work in criminal cases</th><th>How paid</th></tr>
<tr><td><b>Solicitors</b></td><td>Advise suspects at the police station (often as duty solicitors); prepare the defence case — take instructions, gather evidence, instruct experts and barristers; represent clients in the magistrates’ court; <b>solicitor-advocates</b> with higher rights can appear in the Crown Court. Crown Prosecutors (CPS) are also solicitors or barristers</td><td>Criminal legal aid fixed fees (Legal Aid Agency), or privately by the client</td></tr>
<tr><td><b>Barristers</b></td><td>Specialist advocates, mainly in the Crown Court and appeal courts; advise on evidence and plea; cross-examine witnesses; make speeches to the jury. Usually self-employed in chambers; must follow the <b>cab-rank rule</b>. Senior barristers may become King’s Counsel</td><td>Legal aid (the Advocates’ Graduated Fee Scheme) or private fees; usually instructed through a solicitor</td></tr>
<tr><td><b>Chartered legal executives</b></td><td>Trained through CILEx; do much criminal case preparation and police station work (accredited representatives); can qualify as advocates and some can run their own practices</td><td>Employed by firms, paid a salary; the firm is paid by legal aid or clients</td></tr></table></div>` },
    { h: 'Training in brief', html: `<ul><li><b>Solicitors</b>: since 2021, a degree (in any subject) or equivalent, the <b>Solicitors Qualifying Examination</b> (SQE1 and SQE2), two years’ qualifying work experience and character checks.</li><li><b>Barristers</b>: a law degree or conversion course, the Bar course, joining an Inn of Court, and pupillage (usually 12 months).</li><li><b>Chartered legal executives</b>: CILEx qualifications while working, then qualifying experience.</li></ul>` },
    { h: 'Regulation and complaints', html: `
<ul><li><b>Solicitors</b> — regulated by the <b>Solicitors Regulation Authority</b> (SRA); the Law Society is their professional body. Serious misconduct goes to the <b>Solicitors Disciplinary Tribunal</b>, which can strike solicitors off.</li>
<li><b>Barristers</b> — regulated by the <b>Bar Standards Board</b>; the Bar Council represents them. Disciplinary tribunals can disbar.</li>
<li><b>Legal executives</b> — regulated by <b>CILEx Regulation</b>.</li>
<li><b>Complaints about service</b>: first to the firm or chambers, then to the <b>Legal Ombudsman</b> (since 2010), which can order an apology, a refund or compensation.</li>
<li><b>Negligence claims</b>: advocates can be sued for negligence ([[c:hallsimons]]).</li></ul>` }
  ],
  debate: [{ q: 'Is the criminal legal profession in good health?', for: ['Highly trained, regulated professionals.', 'The cab-rank rule ensures representation for everyone.', 'Legal Ombudsman provides free redress.'], ag: ['Low legal aid fees have led to shortages of criminal solicitors and barristers ([[c:bellamy]]); strikes in 2022.', 'Ageing duty solicitor workforce; “advice deserts” in some areas.', 'Lack of diversity at senior levels.'] }],
  cases: ['hallsimons', 'bellamy'],
  worked: [],
  pitfalls: ['Saying only barristers can appear in the Crown Court — solicitor-advocates can.', 'Confusing the SRA (regulator) with the Law Society (professional body).'],
  cards: [
    ['Who usually advises a suspect at the police station?', 'A solicitor (often the duty solicitor) or accredited representative.'],
    ['Who mainly represents defendants in the Crown Court?', 'Barristers (and solicitor-advocates).'],
    ['What is the cab-rank rule?', 'A barrister must accept a case in their field if available and properly paid.'],
    ['Who regulates solicitors?', 'The Solicitors Regulation Authority.'],
    ['Who regulates barristers?', 'The Bar Standards Board.'],
    ['Where do service complaints go?', 'First the firm, then the Legal Ombudsman.'],
    ['Arthur JS Hall v Simons (2000)?', 'Advocates can be sued in negligence.'],
    ['What is the SQE?', 'The Solicitors Qualifying Examination, since 2021.']
  ],
  quiz: [
    { q: 'Which body regulates barristers?', o: ['Bar Standards Board', 'Law Society', 'SRA', 'CPS'], x: '' },
    { q: 'Legal aid fees for barristers in the Crown Court are paid under…', o: ['the Advocates’ Graduated Fee Scheme', 'conditional fee agreements', 'QOCS', 'the SQE'], x: '' },
    { q: 'The Legal Ombudsman deals with…', o: ['complaints about legal services', 'criminal appeals', 'jury selection', 'sentencing'], x: '' }
  ],
  exam: [{ q: 'Assignment practice (C.P5): using the case study, explain the roles of the legal personnel involved. [8]', m: 8, scen: 'Kyle is arrested for a serious assault. At the police station he asks for legal advice. He is charged, appears in the magistrates’ court and is sent to the Crown Court for trial.', ms: ['duty solicitor or accredited legal executive at police station', 'solicitor prepares case, magistrates’ court appearance', 'barrister or solicitor-advocate in Crown Court', 'CPS prosecutors', 'judge (C4) and lay personnel (C3)', 'how each is paid'], bands: CRIT.C }],
  tools: ['proftasksort']
});

/* ---------- C2 Financing advice ---------- */
TOPICS.push({
  id: '2.C2', unit: '2', ref: 'C2', title: 'Financing advice and representation in criminal cases',
  short: 'Free legal advice at the police station; funding representation in the magistrates’ court and the Crown Court',
  summary: 'Anyone arrested has the right to free legal advice at the police station. In court, criminal legal aid depends on the interests of justice and on the defendant’s means. This topic explains the rules for each stage and evaluates whether the system gives fair access to justice.',
  spec: ['Legal advice at the police station', 'Funding for representation at the magistrates’ court', 'Funding for representation at the Crown Court'],
  learn: [
    { h: 'At the police station', html: `
<ul><li>Under <b>s58 PACE 1984</b>, anyone detained has the right to consult a solicitor privately and free of charge, at any time. It is <b>not means-tested</b>.</li>
<li>Requests go through the Defence Solicitor Call Centre to the suspect’s own solicitor or the <b>duty solicitor</b>. For some minor offences, advice may be by phone (CDS Direct).</li>
<li>Delay is allowed only in limited circumstances for indictable offences. See the <b>detention clock</b> in Explore.</li></ul>` },
    { h: 'In the magistrates’ court', html: `
<ul><li>A <b>court duty solicitor</b> can give free advice and representation at a first hearing.</li>
<li>For full representation, the defendant applies to the Legal Aid Agency for a <b>representation order</b>. Two tests:
<ol><li><b>Interests of justice</b> test (the “Widgery criteria”): likely loss of liberty, livelihood or serious damage to reputation; a substantial question of law; inability to understand the proceedings or present their case (e.g. language, disability); the need to trace or cross-examine witnesses; or it is in someone else’s interests that the defendant is represented.</li>
<li><b>Means test</b>: based on household income. People on certain benefits and under-18s pass automatically. Those above the limit must pay privately.</li></ol></li></ul>` },
    { h: 'In the Crown Court', html: `
<ul><li>The interests of justice test is automatically met.</li>
<li>A <b>means test</b> decides whether the defendant must pay a <b>contribution</b> from income during the case and, if convicted, from capital. Those with very high household disposable income are not eligible.</li>
<li>Defendants who pay privately and are acquitted can usually recover only part of their costs, at legal aid rates — sometimes called the “innocence tax”.</li>
<li>Barristers are paid under the Advocates’ Graduated Fee Scheme. After the [[c:bellamy]] review and the 2022 barristers’ strike, fees were increased, but many argue the system remains under-funded.</li></ul>` }
  ],
  debate: [{ q: 'Does the criminal legal aid system provide fair access to justice?', for: ['Free advice at the police station for everyone.', 'Interests of justice test protects those facing prison.', 'Crown Court defendants are almost always represented.'], ag: ['Means test excludes many people on modest incomes in the magistrates’ court.', 'Low fees cause shortages of criminal lawyers and duty solicitors.', 'Acquitted defendants who paid privately lose money (“innocence tax”).', 'Court backlogs increase costs and delays.'] }],
  cases: ['bellamy'],
  worked: [],
  pitfalls: ['Saying police station advice is means-tested — it is free for everyone.', 'Forgetting the two tests for magistrates’ court legal aid.'],
  cards: [
    ['Is police station advice free?', 'Yes, for everyone — s58 PACE; not means-tested.'],
    ['Two tests for a representation order in the magistrates’ court?', 'Interests of justice and means test.'],
    ['Name two interests of justice factors.', 'Likely loss of liberty; loss of livelihood; substantial question of law; inability to understand proceedings.'],
    ['Crown Court legal aid?', 'Interests of justice automatically met; means test decides contributions.'],
    ['Who administers legal aid?', 'The Legal Aid Agency.'],
    ['What is the “innocence tax”?', 'Acquitted defendants who paid privately recover only part of their costs.']
  ],
  quiz: [
    { q: 'Free legal advice at the police station is available…', o: ['to anyone detained, regardless of means', 'only to people on benefits', 'only to under-18s', 'only for murder suspects'], x: '' },
    { q: 'In the Crown Court, the interests of justice test is…', o: ['automatically passed', 'never passed', 'decided by the jury', 'the only test'], x: '' },
    { q: 'Which is an interests of justice factor?', o: ['The defendant is likely to lose their liberty', 'The defendant is wealthy', 'The victim is a child', 'The case is on TV'], x: '' }
  ],
  exam: [{ q: 'Assignment practice (C.P6, C.M4): explain the advice and representation available to each defendant, and compare their positions. [10]', m: 10, scen: 'Amir, a student with no income, is charged with common assault. Beth, a well-paid manager, is charged with wounding with intent (s18) and will be tried in the Crown Court.', ms: ['both: free police station advice (s58 PACE)', 'Amir — duty solicitor; representation order: interests of justice (liberty?) and means (passes)', 'Beth — Crown Court: IoJ automatic; means test contributions; may pay privately', 'comparison of positions and fairness', 'innocence tax if Beth acquitted'], bands: CRIT.C }],
  tools: ['detention', 'crimfundtree']
});

/* ---------- C3 Lay people ---------- */
TOPICS.push({
  id: '2.C3', unit: '2', ref: 'C3', title: 'Lay people: magistrates and juries',
  short: 'Magistrates — selection, appointment, training and role; juries — qualification, disqualification, selection, challenging and role',
  summary: 'Ordinary people with no legal training decide most criminal cases. Lay magistrates deal with over 90% of criminal cases in the magistrates’ courts; juries decide guilt in Crown Court trials. For C.D2 you evaluate the impact of using lay people rather than legal professionals.',
  spec: ['Magistrates: selection and appointment, training, role in a criminal trial', 'Juries: qualification and disqualification, selection (e.g. summoning and challenging), role in a criminal trial'],
  learn: [
    { h: 'Magistrates', html: `
<ul><li><b>Who</b>: unpaid volunteers (justices of the peace), aged 18 or over, who must retire at 75 (raised from 70 in 2022). They must show six key qualities: good character, understanding and communication, social awareness, maturity and sound temperament, sound judgement, commitment and reliability. There are around 14,000 in England and Wales.</li>
<li><b>Selection and appointment</b>: applicants apply to a local <b>Advisory Committee</b>, which interviews them and recommends candidates. They are appointed by the <b>Lord Chief Justice</b>. They must sit at least 13 days (26 half-days) a year.</li>
<li><b>Training</b>: overseen by the Judicial College — initial training, a mentor, observations and regular appraisals.</li>
<li><b>Role</b>: usually sit as a bench of three with a qualified <b>legal adviser</b> who advises on law. They try summary and many either-way cases, decide guilt and sentence (up to 12 months’ custody for a single either-way offence, restored in November 2024), deal with bail and early hearings, send serious cases to the Crown Court, and sit in the youth court.</li></ul>` },
    { h: 'Juries: qualification and disqualification', html: `
<ul><li><b>Qualified</b> (Juries Act 1974 s1): aged 18–75; registered to vote; resident in the UK for at least five years since the age of 13.</li>
<li><b>Disqualified</b>: anyone sentenced to life or 5+ years’ imprisonment (for life); anyone who has served a prison sentence, a suspended sentence or a community order in the last 10 years; anyone currently on bail; some people with mental disorders. Serving jurors must not research the case or disclose deliberations (offences since 2015 — [[c:fraill]]; [[c:dallas]]).</li>
<li><b>Excusal and deferral</b>: people can ask to defer or be excused for good reason (illness, caring, exams); serving members of the armed forces may be excused if their commanding officer certifies absence would harm efficiency.</li></ul>` },
    { h: 'Juries: selection and role', html: `
<ul><li><b>Summoning</b>: the Jury Central Summoning Bureau randomly selects names from the electoral register. From the panel at court, 12 are chosen by ballot.</li>
<li><b>Vetting</b>: police checks for disqualifying convictions; wider “authorised checks” only in national security or terrorism cases.</li>
<li><b>Challenging</b>: <b>challenge to the array</b> (the whole panel was chosen unfairly); <b>challenge for cause</b> (a juror knows a party or is biased); the prosecution’s right to <b>stand by</b> a juror (rarely used). Peremptory challenges without reason were abolished in 1988.</li>
<li><b>Role</b>: in the Crown Court, the jury decides the facts and gives the verdict — guilty or not guilty — after the judge’s directions on law. Verdicts should be unanimous, but a <b>majority verdict</b> of 10–2 or 11–1 can be accepted after at least two hours. Deliberations are secret ([[c:mirza]]). Juries do not give reasons; they can acquit against the law (<b>jury equity</b> — [[c:ponting]]).</li>
<li>Trial without a jury is possible where there is a danger of jury tampering ([[c:twomey]]).</li></ul>` },
    { h: 'Lay people v legal professionals', html: `
<div class="tbl"><table><tr><th></th><th>Advantages</th><th>Disadvantages</th></tr>
<tr><td><b>Magistrates</b></td><td>Cheap (unpaid); local knowledge; public participation; bench of three balances views; legal adviser on law</td><td>Inconsistent sentencing between areas; may be prosecution-minded or “case-hardened”; older and less diverse; slower than a District Judge</td></tr>
<tr><td><b>Juries</b></td><td>Public confidence and participation; random and independent; twelve views; jury equity</td><td>No reasons given; may not understand complex evidence or directions ([[c:thomasjuries]]); media and internet influence; possible bias; jury tampering; cost and time; perverse verdicts ([[c:young]])</td></tr></table></div>
<p>In 2025 the government announced plans to restrict jury trial for some either-way cases after Sir Brian Leveson’s review of the criminal courts — check the current position before writing your C.D2 conclusion.</p>` }
  ],
  debate: [{ q: 'Should lay people continue to decide criminal cases?', for: ['Democratic participation and public confidence.', 'Juries protect against oppressive prosecutions (Ponting).', 'Research shows juries are generally fair (Thomas).', 'Magistrates are cheap and local.'], ag: ['Professional judges give reasons and are consistent.', 'Complex cases may be beyond lay people.', 'Internet research and media influence.', 'Court backlogs — judge-only trials are quicker.'] }],
  cases: ['fraill', 'dallas', 'mirza', 'ponting', 'twomey', 'young', 'thomasjuries'],
  worked: [],
  pitfalls: ['Confusing jury and magistrate roles — magistrates decide guilt and sentence.', 'Out-of-date details (magistrates retire at 75; sentencing powers 12 months).', 'Describing without evaluating (C.D2 needs a justified conclusion).'],
  cards: [
    ['Who appoints magistrates?', 'The Lord Chief Justice, on the advice of local Advisory Committees.'],
    ['Six key qualities of magistrates?', 'Good character, understanding and communication, social awareness, maturity and sound temperament, sound judgement, commitment and reliability.'],
    ['Who advises magistrates on law?', 'A qualified legal adviser.'],
    ['Juror qualification?', '18–75, on the electoral register, lived in the UK 5 years since age 13.'],
    ['Who is disqualified from jury service for life?', 'Anyone sentenced to life or 5+ years’ imprisonment.'],
    ['What is a challenge for cause?', 'Removing a juror for a specific reason, such as knowing the defendant.'],
    ['What is a majority verdict?', '10–2 or 11–1 after at least two hours.'],
    ['What did Cheryl Thomas (2010) find?', 'Juries were generally fair but many did not fully understand directions.']
  ],
  quiz: [
    { q: 'Jurors are selected from…', o: ['the electoral register', 'volunteers', 'magistrates', 'police lists'], x: '' },
    { q: 'Magistrates usually sit as…', o: ['a bench of three', 'a jury of twelve', 'a single judge', 'a panel of five'], x: '' },
    { q: 'Someone who served a community order six years ago is…', o: ['disqualified from jury service', 'qualified', 'excused automatically', 'required to serve twice'], x: 'Within 10 years.' },
    { q: 'Which case involved a juror contacting a defendant on Facebook?', o: ['Attorney General v Fraill', 'R v Twomey', 'R v Ponting', 'R v Mirza'], x: '' }
  ],
  exam: [{ q: 'Assignment practice (C.D2): evaluate the impact of using lay people in the criminal trial process as opposed to legal personnel, with a justified conclusion. [12]', m: 12, ms: ['roles of magistrates and juries described accurately', 'advantages — participation, cost, local knowledge, equity', 'disadvantages — inconsistency, bias, no reasons, understanding, internet', 'comparison with District Judges and professional judges', 'research and data (Thomas; statistics)', 'reforms (e.g. restricting jury trial)', 'justified conclusion'], bands: CRIT.C }],
  tools: ['jurytree', 'laysort']
});

/* ---------- C4 Judiciary ---------- */
TOPICS.push({
  id: '2.C4', unit: '2', ref: 'C4', title: 'The judiciary in criminal trials',
  short: 'The role of judges in criminal trials and appeals',
  summary: 'Professional judges run criminal trials, decide questions of law, direct juries, pass sentence and hear appeals. This topic explains who they are and what they do, and why judicial independence matters.',
  spec: ['The role of judges in criminal trials'],
  learn: [
    { h: 'Judges in the criminal courts', html: `
<div class="tbl"><table><tr><th>Court</th><th>Judges</th><th>Role</th></tr>
<tr><td>Magistrates’ court</td><td>District Judges (Magistrates’ Courts) — full-time professional judges, sitting alone</td><td>Hear complex or long summary trials; decide guilt and sentence</td></tr>
<tr><td>Crown Court</td><td>Circuit Judges, Recorders (part-time), High Court judges for the most serious cases (e.g. murder)</td><td>Control the trial; decide law and admissibility of evidence; direct and sum up to the jury; sentence if guilty</td></tr>
<tr><td>Court of Appeal (Criminal Division)</td><td>Lord and Lady Justices of Appeal, led by the Lord Chief Justice</td><td>Hear appeals against conviction (is it unsafe?) and sentence; set precedent and sentencing guidance</td></tr>
<tr><td>Supreme Court</td><td>Justices of the Supreme Court</td><td>Final appeals on points of law of general public importance</td></tr></table></div>` },
    { h: 'The trial judge’s role', html: `<ul><li>Manages the trial and ensures it is fair.</li><li>Decides questions of <b>law</b>, including whether evidence is admissible (in the jury’s absence).</li><li>Can direct an acquittal if there is no case to answer.</li><li><b>Sums up</b> the evidence and directs the jury on the law and the burden of proof.</li><li>Accepts a majority verdict when appropriate.</li><li><b>Sentences</b> following Sentencing Council guidelines (D4).</li></ul>` },
    { h: 'Independence', html: `<p>Judges must be independent of government so they can decide cases fairly. Senior judges have security of tenure (they can be removed only by an address from both Houses of Parliament); salaries are protected; the <b>Constitutional Reform Act 2005</b> s3 places a duty on ministers to uphold judicial independence; appointments are made on merit through the <b>Judicial Appointments Commission</b>. Judges must not sit where there could be bias ([[c:pinochet]]).</p>` }
  ],
  debate: [{ q: 'Are professional judges better than lay people at deciding criminal cases?', for: ['Legal expertise and experience.', 'Give reasons; decisions can be appealed and scrutinised.', 'Consistency in sentencing.'], ag: ['Less diverse — mostly older, white, privately educated (though improving).', 'Expensive.', 'Removing lay participation may reduce public confidence.'] }],
  cases: ['pinochet'],
  worked: [],
  pitfalls: ['Saying judges decide guilt in Crown Court jury trials — the jury does.', 'Forgetting District Judges in the magistrates’ courts.'],
  cards: [
    ['Who decides law and admissibility in a Crown Court trial?', 'The judge.'],
    ['Who decides guilt in a Crown Court jury trial?', 'The jury.'],
    ['What is summing up?', 'The judge’s summary of the evidence and directions on the law to the jury.'],
    ['District Judge (Magistrates’ Courts)?', 'A professional judge sitting alone in the magistrates’ court.'],
    ['Which body recommends judicial appointments?', 'The Judicial Appointments Commission.'],
    ['Which Act protects judicial independence?', 'Constitutional Reform Act 2005 s3.']
  ],
  quiz: [
    { q: 'Sentencing in the Crown Court is done by…', o: ['the judge', 'the jury', 'the CPS', 'the victim'], x: '' },
    { q: 'Which judges hear criminal appeals in the Court of Appeal?', o: ['Lord and Lady Justices of Appeal', 'Magistrates', 'Recorders only', 'Jurors'], x: '' }
  ],
  exam: [{ q: 'Assignment practice (C.P5, C.M4): compare the roles of the judge, jury and magistrates in the case studies. [8]', m: 8, scen: 'Case 1: Jo is tried by magistrates for common assault. Case 2: Ravi is tried in the Crown Court for s18 wounding with intent and appeals against his conviction.', ms: ['magistrates decide guilt and sentence with a legal adviser (Case 1)', 'Crown Court — judge decides law, sums up, sentences; jury decides guilt (Case 2)', 'Court of Appeal judges on the appeal', 'comparison of roles, training, accountability'], bands: CRIT.C }],
  tools: ['courtroles']
});

/* ---------- D1 Elements of a crime ---------- */
TOPICS.push({
  id: '2.D1', unit: '2', ref: 'D1', title: 'Elements of a crime',
  short: 'Actus reus (acts, omissions, causation), mens rea (intention and recklessness), strict liability, and coincidence of actus reus and mens rea',
  summary: 'Most crimes need a guilty act (actus reus) and a guilty mind (mens rea) at the same time. This topic explains each element — including when failing to act is a crime, how causation is established, the types of mens rea and crimes that need no mens rea at all.',
  spec: ['Actus reus: acts and omissions', 'Causation', 'Mens rea', 'Strict liability', 'Coincidence of actus reus and mens rea'],
  learn: [
    { h: 'Actus reus: acts and omissions', html: `
<p>The actus reus is the physical element: a voluntary act, an omission (failure to act) where there is a duty, or a state of affairs. An omission is only criminal where there is a <b>duty to act</b>:</p>
<ul><li><b>Contractual duty</b> — [[c:pittwood]] (a level-crossing keeper who left the gate open).</li><li><b>Duty from a relationship</b> — [[c:gibbins]] (a father who starved his child).</li><li><b>Voluntarily assumed duty</b> — [[c:stone]] (a couple who took in a relative and neglected her).</li><li><b>Duty from creating a dangerous situation</b> — [[c:miller]] (a squatter who started a fire and did nothing).</li><li><b>Statutory duty</b> — e.g. failing to provide a breath specimen.</li></ul>` },
    { h: 'Causation', html: `
<ul><li><b>Factual causation</b> — “but for” the defendant’s act, would the result have happened? [[c:white]] (the poisoned mother died of a heart attack — not caused by D).</li>
<li><b>Legal causation</b> — the act must be an operating and substantial cause ([[c:smith]]); it need not be the only cause ([[c:pagett]]).</li>
<li><b>Intervening acts</b> — medical treatment rarely breaks the chain unless it is “palpably wrong” ([[c:jordan]]) or so independent that the original wound is insignificant ([[c:cheshire]]).</li>
<li><b>Thin skull rule</b> — take the victim as you find them, including their beliefs ([[c:blaue]]).</li></ul>` },
    { h: 'Mens rea', html: `
<ul><li><b>Intention</b> — <b>direct</b>: the defendant’s aim or purpose; <b>oblique</b>: the jury may find intention where the result was a virtual certainty and the defendant appreciated this ([[c:woollin]]).</li>
<li><b>Recklessness</b> — subjective: the defendant foresaw the risk and unreasonably took it ([[c:cunningham]]; [[c:rvg]]).</li></ul>` },
    { h: 'Strict liability and coincidence', html: `
<ul><li><b>Strict liability</b> offences need no mens rea for at least one element of the actus reus — usually regulatory offences (selling alcohol to under-18s, food safety, driving). [[c:storkwain]]; [[c:shah]]. Courts presume mens rea is required unless Parliament clearly excludes it ([[c:sweetparsley]]). Justification: public protection and efficiency; criticism: unfair to people who took care.</li>
<li><b>Coincidence</b> — actus reus and mens rea must coincide in time. A <b>continuing act</b> ([[c:fagan]]) or a single <b>series of acts</b> ([[c:thabomeli]]) satisfies this.</li></ul>` }
  ],
  debate: [{ q: 'Is strict liability justified?', for: ['Protects the public (food, alcohol, pollution).', 'Easier to enforce; encourages high standards.', 'Mostly minor penalties.'], ag: ['Convicts people who were not at fault.', 'May not improve standards if care makes no difference.', 'Stigma of a criminal record.'] }],
  cases: ['pittwood', 'gibbins', 'stone', 'miller', 'white', 'smith', 'pagett', 'jordan', 'cheshire', 'blaue', 'woollin', 'cunningham', 'rvg', 'storkwain', 'shah', 'sweetparsley', 'fagan', 'thabomeli'],
  worked: [],
  pitfalls: ['Saying any failure to act is a crime — a duty is needed.', 'Using objective recklessness — since R v G it is subjective.', 'Forgetting legal causation after factual causation.'],
  cards: [
    ['Actus reus?', 'The guilty act (or omission or state of affairs).'],
    ['Mens rea?', 'The guilty mind — intention or recklessness.'],
    ['Five situations creating a duty to act?', 'Contract, relationship, voluntary assumption, creating danger, statute.'],
    ['R v White?', 'Factual causation — no “but for” link.'],
    ['R v Pagett?', 'D’s act need not be the only cause.'],
    ['R v Blaue?', 'Thin skull rule — take the victim as you find them.'],
    ['Oblique intent test?', 'Virtual certainty of the result, and D appreciated it (Woollin).'],
    ['Recklessness test?', 'D foresaw the risk and unreasonably took it (Cunningham; R v G).'],
    ['What is strict liability?', 'No mens rea needed for at least one element.'],
    ['Fagan v MPC?', 'A continuing act allows coincidence of actus reus and mens rea.']
  ],
  quiz: [
    { q: 'R v Pittwood created a duty to act based on…', o: ['a contract', 'a relationship', 'statute', 'creating danger'], x: '' },
    { q: 'The but for test establishes…', o: ['factual causation', 'legal causation', 'mens rea', 'strict liability'], x: '' },
    { q: 'Recklessness in criminal law is…', o: ['subjective', 'objective', 'irrelevant', 'the same as negligence'], x: 'R v G (2003).' },
    { q: 'Selling alcohol to a 17-year-old, even believing they were 18, can be…', o: ['a strict liability offence', 'a common law offence', 'a civil wrong only', 'never an offence'], x: '' }
  ],
  exam: [{ q: 'Assignment practice (D.P7): explain the elements of crime in the case study. [8]', m: 8, scen: 'Lena, a paid carer, leaves an elderly client without food for three days. The client collapses and is taken to hospital, where a doctor gives the wrong medication, making her condition worse.', ms: ['omission — contractual duty (Pittwood); voluntary assumption', 'factual causation — but for', 'legal causation — medical treatment rarely breaks chain (Smith, Cheshire; Jordan exception)', 'mens rea — intention or recklessness', 'coincidence'], bands: CRIT.D }],
  tools: ['omissionsort', 'mrsort']
});

/* ---------- D2a Assault and battery ---------- */
TOPICS.push({
  id: '2.D2a', unit: '2', ref: 'D2', title: 'Assault and battery',
  short: 'Common assault and battery: actus reus and mens rea (s39 Criminal Justice Act 1988)',
  summary: 'Assault and battery — together called common assault — are the least serious non-fatal offences. They are common law offences, charged under s39 Criminal Justice Act 1988, and are summary only, with a maximum of six months’ imprisonment.',
  spec: ['The actus reus and mens rea of assault', 'The actus reus and mens rea of battery'],
  learn: [
    { h: 'Assault', html: `
<ul><li><b>Actus reus</b>: causing the victim to <b>apprehend</b> (expect) the application of <b>immediate unlawful force</b>. No touching is needed.</li>
<li>Can be committed by acts, gestures, words (including silent phone calls — [[c:ireland]]; letters — [[c:constanza]]). A fake gun can be enough ([[c:logdon]]).</li>
<li>Words can also cancel a threat ([[c:tuberville]]).</li>
<li>“Immediate” means imminent, not instantaneous ([[c:smithwoking]]).</li>
<li><b>Mens rea</b>: intention to cause the victim to apprehend immediate unlawful force, or recklessness as to whether they would ([[c:savage]]).</li></ul>` },
    { h: 'Battery', html: `
<ul><li><b>Actus reus</b>: the <b>application of unlawful force</b> to another. Any touching without consent can be enough — no injury needed ([[c:collinswilcock]]). Touching clothes counts ([[c:thomas]]).</li>
<li>Can be <b>indirect</b>: [[c:dppk]] (acid in a hand dryer); [[c:haystead]] (punching a woman so she dropped her baby).</li>
<li>Can be a <b>continuing act</b> ([[c:fagan]]).</li>
<li>Everyday touching (jostling in a crowd, a tap on the shoulder) is generally accepted as lawful.</li>
<li><b>Mens rea</b>: intention to apply unlawful force, or recklessness as to whether it is applied ([[c:venna]]).</li></ul>
<p><b>Sentence</b>: summary only; maximum <b>six months’</b> imprisonment and/or a fine (two years for assaulting an emergency worker; higher if racially or religiously aggravated).</p>` }
  ],
  debate: [],
  cases: ['ireland', 'constanza', 'logdon', 'tuberville', 'smithwoking', 'savage', 'collinswilcock', 'thomas', 'dppk', 'haystead', 'fagan', 'venna'],
  worked: [{ q: 'Mia shouts “I’m going to smash your face in!” at Zoe across a car park and runs towards her, but trips before reaching her. Zoe is terrified. Has Mia committed an offence?', s: ['<b class="st">Actus reus</b>Zoe apprehended immediate unlawful force: Mia’s words and running towards her caused fear of imminent violence (Smith v Woking — “immediate” means imminent).', '<b class="st">Mens rea</b>Mia intended Zoe to fear violence, or at least was reckless (Savage).', '<b class="st">Conclusion</b>Mia is guilty of assault (common assault, s39 CJA 1988). There is no battery because no force was applied.'], a: 'Assault, not battery.' }],
  pitfalls: ['Saying assault requires touching — that is battery.', 'Forgetting that words and silence can be an assault.', 'Stating the wrong maximum sentence.'],
  cards: [
    ['Actus reus of assault?', 'Causing V to apprehend immediate unlawful force.'],
    ['Actus reus of battery?', 'Application of unlawful force.'],
    ['Mens rea of assault and battery?', 'Intention or recklessness.'],
    ['Where are assault and battery charged?', 's39 Criminal Justice Act 1988 — summary offences.'],
    ['Maximum sentence for common assault?', 'Six months (two years for an emergency worker).'],
    ['R v Ireland?', 'Silent phone calls can be an assault.'],
    ['Tuberville v Savage?', 'Words can negate an assault.'],
    ['DPP v K?', 'Battery can be indirect.']
  ],
  quiz: [
    { q: 'Spitting at someone who is hit by the spit is…', o: ['battery', 'assault only', 'ABH', 's18 GBH'], x: 'Application of force.' },
    { q: 'Which case held silent phone calls can be an assault?', o: ['R v Ireland', 'Collins v Wilcock', 'DPP v K', 'R v Thomas'], x: '' },
    { q: 'Common assault is tried in…', o: ['the magistrates’ court', 'the Crown Court only', 'the County Court', 'the Court of Appeal'], x: 'Summary offence.' }
  ],
  exam: [{ q: 'Assignment practice (D.P7, D.M5): apply the law on assault and battery to the case study and suggest a possible sentence. [8]', m: 8, scen: 'At a bus stop, Tom threatens to punch Ali, then grabs Ali’s coat and pushes him. Ali is not injured.', ms: ['assault — apprehension of immediate force; mens rea', 'battery — grabbing coat (Thomas), push (Collins v Wilcock)', 'mens rea — intention/recklessness (Venna)', 'charge — common assault/battery s39 CJA 1988', 'sentence — magistrates; guideline; fine or community order likely'], bands: CRIT.D }],
  tools: ['nfotree']
});

/* ---------- D2b ABH ---------- */
TOPICS.push({
  id: '2.D2b', unit: '2', ref: 'D2', title: 'Actual bodily harm (s47)',
  short: 'Assault occasioning actual bodily harm under s47 Offences Against the Person Act 1861',
  summary: 's47 OAPA 1861 makes it an offence to commit an assault (or battery) occasioning actual bodily harm. It is an either-way offence with a maximum of five years’ imprisonment. The mens rea is only that of the assault or battery.',
  spec: ['The actus reus of s47 ABH', 'The mens rea of s47 ABH'],
  learn: [
    { h: 'Actus reus', html: `
<ul><li>An <b>assault or battery</b>, which <b>occasions</b> (causes) <b>actual bodily harm</b>.</li>
<li><b>ABH</b> is “any hurt or injury calculated to interfere with the health or comfort” of the victim ([[c:rmiller]]). It need not be serious or permanent but must be more than “transient or trifling”. Examples: bruising, grazes, minor fractures, loss of a tooth, temporary loss of consciousness, cutting hair ([[c:dppsmith2006]]).</li>
<li>Recognised <b>psychiatric</b> injury can be ABH, but not mere emotions such as fear or panic ([[c:chanfook]]; [[c:ireland]]).</li>
<li>Causation: the victim’s reaction must be reasonably foreseeable — [[c:roberts]] (jumping from a moving car).</li></ul>` },
    { h: 'Mens rea and sentence', html: `<p>The mens rea is the same as for assault or battery: <b>intention or recklessness as to the assault or battery</b>. There is no need to intend or foresee any harm ([[c:roberts]]; [[c:savage]]).</p><p><b>Either-way</b> offence; maximum <b>five years’</b> imprisonment (seven if racially or religiously aggravated). The Sentencing Council’s assault guideline (2021) sets ranges from a fine or community order to custody depending on culpability and harm.</p>` }
  ],
  debate: [{ q: 'Is it fair that s47 needs no foresight of harm?', for: ['The defendant chose to use unlawful force and should bear the consequences.', 'Makes prosecution simpler.'], ag: ['Breaks the principle that mens rea should match the actus reus.', 'Same maximum as s20, which needs serious harm — illogical (Law Commission).'] }],
  cases: ['rmiller', 'dppsmith2006', 'chanfook', 'roberts', 'savage'],
  worked: [],
  pitfalls: ['Saying the defendant must intend or foresee ABH.', 'Treating fear alone as ABH.'],
  cards: [
    ['Definition of ABH?', 'Any hurt or injury calculated to interfere with health or comfort (R v Miller 1954).'],
    ['Mens rea of s47?', 'Intention or recklessness as to the assault or battery only.'],
    ['Maximum sentence for s47?', 'Five years.'],
    ['Can cutting hair be ABH?', 'Yes — DPP v Smith (2006).'],
    ['Is fear or panic ABH?', 'No — only a recognised psychiatric illness (Chan-Fook).'],
    ['R v Roberts?', 'No need to foresee harm; victim’s foreseeable reaction does not break the chain.']
  ],
  quiz: [
    { q: 'For s47, the defendant must intend or be reckless as to…', o: ['the assault or battery', 'actual bodily harm', 'serious harm', 'death'], x: 'Roberts; Savage.' },
    { q: 'Which is likely to be ABH?', o: ['A broken tooth', 'A moment’s fright', 'A light tap', 'Hurt feelings'], x: '' },
    { q: 'The maximum sentence for s47 ABH is…', o: ['five years', 'six months', 'life', 'two years'], x: '' }
  ],
  exam: [{ q: 'Assignment practice (D.M5): analyse and apply the law to decide the charge and possible sentence. [8]', m: 8, scen: 'Sara pushes Kim in a nightclub queue. Kim falls, breaking a tooth and badly bruising her arm. Sara says she never meant to hurt her.', ms: ['battery — push', 'ABH — broken tooth, bruising (Miller)', 'causation — fall', 'mens rea — only for battery; Sara’s lack of intent to injure irrelevant (Roberts, Savage)', 'charge s47 OAPA', 'sentence — guideline factors; likely community order or short custody'], bands: CRIT.D }],
  tools: ['nfotree']
});

/* ---------- D2c GBH s20 and s18 ---------- */
TOPICS.push({
  id: '2.D2c', unit: '2', ref: 'D2', title: 'Grievous bodily harm and wounding (s20 and s18)',
  short: 's20 malicious wounding or inflicting GBH; s18 wounding or causing GBH with intent',
  summary: 'The most serious non-fatal offences are in ss20 and 18 of the Offences Against the Person Act 1861. Both require a wound or grievous bodily harm; the difference is the mens rea. s20 needs only foresight of some harm; s18 needs an intention to cause really serious harm, and carries life imprisonment.',
  spec: ['The actus reus and mens rea of s20 GBH', 'The actus reus and mens rea of s18 GBH with intent'],
  learn: [
    { h: 'Wound and GBH', html: `
<ul><li><b>Wound</b>: a break in both layers of the skin ([[c:eisenhower]]); internal bleeding without a break is not a wound.</li>
<li><b>Grievous bodily harm</b>: “really serious harm” ([[c:dppsmith]]) — e.g. broken limbs, permanent injury, serious disfigurement. The victim’s age and health are considered ([[c:bollom]]). It can include serious psychiatric injury ([[c:ireland]]) and infecting someone with a serious disease ([[c:dica]]).</li></ul>` },
    { h: 's20: unlawfully and maliciously wounding or inflicting GBH', html: `<ul><li><b>Actus reus</b>: unlawfully wounding or inflicting GBH. “Inflict” does not require a direct assault ([[c:ireland]]).</li><li><b>Mens rea</b>: “maliciously” — intention or recklessness as to causing <b>some harm</b>; the defendant need not foresee serious harm ([[c:mowatt]]; [[c:savage]]).</li><li><b>Either-way</b>; maximum <b>five years</b>.</li></ul>` },
    { h: 's18: wounding or causing GBH with intent', html: `<ul><li><b>Actus reus</b>: unlawfully wounding or causing GBH.</li><li><b>Mens rea</b>: <b>intention</b> to cause GBH, or intention to resist or prevent lawful arrest (with at least recklessness as to some harm). Recklessness as to GBH is not enough ([[c:belfon]]). Intention can be direct or oblique ([[c:woollin]]).</li><li><b>Indictable only</b>; maximum <b>life imprisonment</b>.</li></ul>` },
    { h: 'Evaluating the current law', html: `
<ul><li>The 1861 Act uses outdated language (“maliciously”, “grievous”, “occasioning”) that is hard for juries to understand.</li><li>The ladder is illogical: s47 and s20 have the same five-year maximum although s20 requires more serious harm; s47 and s20 need no foresight of the level of harm caused (a “constructive” approach).</li><li>“Inflict” and “cause” had to be interpreted by the courts.</li><li>The Law Commission proposed a clear new structure in 2015 ([[c:lawcomoapa]]), but Parliament has not acted.</li><li><b>Sentencing trends</b>: the Sentencing Council’s assault guideline (in force July 2021) introduced culpability and harm categories. Sentences for serious violence and knife crime have become longer over recent years, while prison overcrowding led to early release schemes in 2024 and the Independent Sentencing Review (2025) recommended fewer short prison sentences — check the latest position for D.D3.</li></ul>` }
  ],
  debate: [{ q: 'Should the Offences Against the Person Act 1861 be replaced?', for: ['Outdated, confusing language.', 'Illogical ladder of sentences.', 'Mens rea does not match the harm caused.', 'Law Commission proposals are ready.'], ag: ['Courts have clarified most terms through case law.', 'Reform takes parliamentary time.', 'Juries and lawyers are used to it.'] }],
  cases: ['eisenhower', 'dppsmith', 'bollom', 'dica', 'ireland', 'mowatt', 'savage', 'belfon', 'woollin', 'lawcomoapa'],
  worked: [{ q: 'In a fight, Jay hits Kofi with a bottle, cutting his head (both layers of skin) and fracturing his skull. Jay says he only wanted to scare him. Which offence?', s: ['<b class="st">Harm</b>A cut through both layers of skin is a wound (Eisenhower); a fractured skull is GBH (DPP v Smith).', '<b class="st">s18?</b>Did Jay intend GBH? Hitting someone on the head with a bottle may allow a jury to infer intention, but Jay says he only meant to scare — the prosecution must prove intent (Belfon).', '<b class="st">s20?</b>At least, Jay must have foreseen some harm when hitting Kofi with a bottle (Mowatt) — very likely.', '<b class="st">Conclusion</b>Charge s18, with s20 as an alternative the jury can convict of if intent is not proved.'], a: 's18 (alternative s20).' }],
  pitfalls: ['Saying s20 needs foresight of serious harm — only some harm.', 'Saying recklessness is enough for s18.', 'Forgetting that a wound needs both layers of skin broken.'],
  cards: [
    ['What is a wound?', 'A break in both layers of the skin (JCC v Eisenhower).'],
    ['What is GBH?', 'Really serious harm (DPP v Smith 1961).'],
    ['Mens rea of s20?', 'Intention or recklessness as to some harm (Mowatt).'],
    ['Mens rea of s18?', 'Intention to cause GBH (or to resist arrest) — Belfon.'],
    ['Maximum for s20?', 'Five years.'],
    ['Maximum for s18?', 'Life imprisonment.'],
    ['Can psychiatric injury be GBH?', 'Yes — R v Burstow (with Ireland).'],
    ['Main criticism of the 1861 Act?', 'Outdated language and an illogical structure.']
  ],
  quiz: [
    { q: 'Which offence carries a maximum of life imprisonment?', o: ['s18', 's20', 's47', 'Common assault'], x: '' },
    { q: 'The mens rea for s20 requires foresight of…', o: ['some harm', 'really serious harm', 'death', 'no harm'], x: 'Mowatt.' },
    { q: 'A cut that breaks both layers of the skin is…', o: ['a wound', 'always GBH', 'common assault', 'ABH only'], x: 'Eisenhower.' },
    { q: 'In R v Belfon, the court held that s18 requires…', o: ['intention', 'recklessness', 'negligence', 'strict liability'], x: '' }
  ],
  exam: [{ q: 'Assignment practice (D.D3): evaluate the current law on non-fatal offences against the person and related current sentencing trends. [12]', m: 12, ms: ['summary of the ladder: assault/battery, s47, s20, s18', 'problems — language, structure, mens rea mismatch, same maximum for s47 and s20', 'case law clarifications (Ireland, Savage, Mowatt)', 'Law Commission 2015 proposals', 'sentencing guideline 2021; trends; prison capacity and reforms', 'justified conclusion with reforms'], bands: CRIT.D }],
  tools: ['nfotree', 'nfosort']
});

/* ---------- D3 Aims of sentencing ---------- */
TOPICS.push({
  id: '2.D3', unit: '2', ref: 'D3', title: 'Aims of sentencing',
  short: 'Reducing crime, protecting the public, punishment, deterrence, rehabilitation and reparation',
  summary: 'When sentencing adults, courts must have regard to the purposes of sentencing set out in the Sentencing Act 2020. This topic explains each aim and how different sentences meet them.',
  spec: ['Purposes of sentences imposed by the criminal courts: reducing crime, protecting the public, punishing the offender, deterrence, rehabilitating the offender'],
  learn: [
    { h: 'The statutory purposes', html: `<p><b>s57 Sentencing Act 2020</b> — for offenders aged 18 and over, the court must have regard to: (a) the <b>punishment</b> of offenders; (b) the <b>reduction of crime</b>, including by deterrence; (c) the <b>reform and rehabilitation</b> of offenders; (d) the <b>protection of the public</b>; and (e) the making of <b>reparation</b> by offenders to people affected by their offences. For under-18s, the main aim of the youth justice system is to prevent offending, having regard to the child’s welfare.</p>` },
    { h: 'Each aim', html: `
<div class="tbl"><table><tr><th>Aim</th><th>Meaning</th><th>Typical sentences</th></tr>
<tr><td><b>Punishment (retribution)</b></td><td>The offender deserves punishment proportionate to the seriousness of the offence</td><td>Custody, fines, curfews, unpaid work</td></tr>
<tr><td><b>Deterrence</b></td><td><b>Individual</b>: deter this offender; <b>general</b>: deter others by example</td><td>Suspended sentences, custody, exemplary sentences</td></tr>
<tr><td><b>Reducing crime</b></td><td>Any means of cutting future offending</td><td>All of the above, plus treatment</td></tr>
<tr><td><b>Rehabilitation</b></td><td>Reform the offender’s behaviour</td><td>Community order requirements: drug rehabilitation, alcohol treatment, programmes, mental health treatment</td></tr>
<tr><td><b>Protection of the public</b></td><td>Incapacitate dangerous offenders</td><td>Long or extended custody, curfews, electronic tags, driving bans</td></tr>
<tr><td><b>Reparation</b></td><td>Offender makes amends</td><td>Compensation orders, unpaid work, restorative justice</td></tr></table></div>` }
  ],
  debate: [{ q: 'Which aim should matter most?', for: ['Rehabilitation — most offenders are released, so reform protects the public long-term.', 'Public protection — for violent offenders, safety comes first.'], ag: ['Retribution — victims and society expect punishment.', 'Deterrence evidence is weak: certainty of being caught deters more than severity.'] }],
  cases: [],
  worked: [],
  pitfalls: ['Confusing individual and general deterrence.', 'Forgetting that s57 does not apply to under-18s.'],
  cards: [
    ['Which section sets out the purposes of sentencing adults?', 's57 Sentencing Act 2020.'],
    ['Five purposes?', 'Punishment, reduction of crime (inc. deterrence), rehabilitation, protection of the public, reparation.'],
    ['Individual v general deterrence?', 'Deter this offender v deter others.'],
    ['Main aim for under-18s?', 'Preventing offending, having regard to welfare.']
  ],
  quiz: [
    { q: 'A compensation order mainly achieves…', o: ['reparation', 'general deterrence', 'incapacitation', 'retribution only'], x: '' },
    { q: 'A drug rehabilitation requirement mainly achieves…', o: ['rehabilitation', 'reparation', 'public protection only', 'general deterrence'], x: '' }
  ],
  exam: [{ q: 'Assignment practice (D.P8): discuss the aims of sentencing for the offender in the case study. [8]', m: 8, scen: 'Leo, 22, has pleaded guilty to s47 ABH after punching a man outside a pub while drunk. He has one previous conviction for criminal damage, has a job and says he is ashamed.', ms: ['punishment proportionate to harm', 'individual deterrence — repeat offending', 'rehabilitation — alcohol treatment', 'reparation — compensation', 'public protection — low risk', 'link aims to possible sentences'], bands: CRIT.D }],
  tools: ['aimsort']
});

/* ---------- D4 Factors in sentencing ---------- */
TOPICS.push({
  id: '2.D4', unit: '2', ref: 'D4', title: 'Factors in sentencing',
  short: 'Aggravating and mitigating factors; sentencing guidelines; guilty pleas',
  summary: 'Judges and magistrates follow a structured process set by the Sentencing Council’s guidelines: assess culpability and harm, find the starting point, adjust for aggravating and mitigating factors, give credit for a guilty plea, and check the total is proportionate.',
  spec: ['Mitigating and aggravating factors', 'Sentencing guidelines'],
  learn: [
    { h: 'Sentencing guidelines', html: `
<p>The <b>Sentencing Council</b> (created in 2010) issues guidelines for offences. Courts <b>must follow</b> them unless it would be contrary to the interests of justice (s59 Sentencing Act 2020). Guidelines work in steps:</p>
<ol><li>Decide the <b>category</b> by <b>culpability</b> (e.g. use of a weapon, planning, intent) and <b>harm</b> (the level of injury).</li><li>Find the <b>starting point</b> and category range.</li><li>Adjust for <b>aggravating and mitigating factors</b>.</li><li>Reduce for a <b>guilty plea</b> — up to one-third if at the first stage (s73; see the tool).</li><li>Consider <b>totality</b>, ancillary orders (e.g. compensation) and give reasons.</li></ol>` },
    { h: 'Aggravating and mitigating factors', html: `
<div class="debate"><div class="for"><h5>Aggravating (increase)</h5><ul><li>Previous convictions (s65 — statutory)</li><li>Offending while on bail (s64 — statutory)</li><li>Hostility based on race, religion, disability, sexual orientation or transgender identity (s66)</li><li>Assaulting an emergency worker (s67)</li><li>Use of a weapon; planning; group offending</li><li>Vulnerable victim; offence in the victim’s home</li><li>Under the influence of alcohol or drugs</li></ul></div><div class="ag"><h5>Mitigating (reduce)</h5><ul><li>No previous convictions or good character</li><li>Genuine remorse</li><li>Youth or lack of maturity; old age</li><li>Mental disorder or learning disability</li><li>Minor role in a group offence</li><li>Provocation</li><li>Serious medical condition; sole carer for dependants</li></ul></div></div>` }
  ],
  debate: [{ q: 'Do sentencing guidelines produce fair sentences?', for: ['Consistency across courts.', 'Transparency — sentences can be explained.', 'Structured approach reduces bias.'], ag: ['Less judicial discretion to reflect individual circumstances.', 'Guidelines have contributed to longer sentences and a larger prison population.', 'Complexity.'] }],
  cases: [],
  worked: [],
  pitfalls: ['Listing factors without applying them to the case study.', 'Forgetting guilty plea credit.'],
  cards: [
    ['Who issues sentencing guidelines?', 'The Sentencing Council.'],
    ['Must courts follow guidelines?', 'Yes, unless contrary to the interests of justice (s59).'],
    ['Two statutory aggravating factors?', 'Previous convictions (s65); offending on bail (s64); hostility (s66).'],
    ['Three mitigating factors?', 'Remorse, good character, youth/lack of maturity, mental disorder.'],
    ['Maximum guilty plea reduction?', 'One-third, at the first stage.']
  ],
  quiz: [
    { q: 'Committing an offence while on bail is…', o: ['a statutory aggravating factor', 'a mitigating factor', 'irrelevant', 'a defence'], x: 's64.' },
    { q: 'Genuine remorse is usually…', o: ['a mitigating factor', 'an aggravating factor', 'a defence', 'a sentence'], x: '' },
    { q: 'The first step in the assault guideline is to assess…', o: ['culpability and harm', 'the victim’s wishes', 'the media interest', 'the defendant’s income'], x: '' }
  ],
  exam: [{ q: 'Assignment practice (D.M5): identify the aggravating and mitigating factors and suggest a sentence. [8]', m: 8, scen: 'Nadia, 19, pleaded guilty at the first hearing to s20 GBH. She broke a woman’s arm in a planned attack while on bail for another offence. She has a learning disability and shows remorse.', ms: ['category — planning (high culpability), serious harm', 'aggravating — on bail (s64), planning', 'mitigating — age/immaturity, learning disability, remorse', 'guilty plea — one-third reduction', 'likely sentence range and type', 'reasons'], bands: CRIT.D }],
  tools: ['aggmitsort', 'plea']
});

/* ---------- D5 Types of sentence ---------- */
TOPICS.push({
  id: '2.D5', unit: '2', ref: 'D5', title: 'Types of sentences',
  short: 'Custody, suspended sentences, community orders, fines and discharges',
  summary: 'Courts can choose from a range of sentences depending on the seriousness of the offence. This topic explains each type and the “custody threshold” and “community threshold” that guide the choice.',
  spec: ['Prison', 'Suspended sentences', 'Community orders', 'Fines', 'Discharges'],
  learn: [
    { h: 'The types of sentence', html: `
<div class="tbl"><table><tr><th>Sentence</th><th>Key features</th></tr>
<tr><td><b>Immediate custody</b></td><td>Only if the offence is so serious that neither a fine nor a community sentence can be justified (the custody threshold). Most prisoners are released automatically part-way through (often halfway, or 40% for many since 2024) and serve the rest on licence</td></tr>
<tr><td><b>Suspended sentence order</b></td><td>A prison sentence of 14 days to 2 years, suspended for 6 months to 2 years; the offender may have to comply with community requirements; breach or reoffending can lead to activation</td></tr>
<tr><td><b>Community order</b></td><td>Up to 3 years with one or more requirements: unpaid work (40–300 hours), curfew with electronic tag, rehabilitation activity, programme, drug rehabilitation, alcohol treatment or abstinence monitoring, mental health treatment, exclusion, residence. Offence must be “serious enough” (the community threshold)</td></tr>
<tr><td><b>Fine</b></td><td>The most common sentence; set by seriousness and weekly income (bands A–F); plus victim surcharge</td></tr>
<tr><td><b>Discharge</b></td><td><b>Conditional</b> — no penalty unless the offender reoffends within a set period (up to 3 years); <b>absolute</b> — no penalty at all, where the offender is technically guilty but not blameworthy</td></tr></table></div>
<p>Courts can also make <b>compensation orders</b>, restraining orders and other ancillary orders.</p>` },
    { h: 'Sentencing trends', html: `<ul><li>The prison population in England and Wales reached record levels of around 87,000–88,000 in 2025.</li><li>Average custodial sentence lengths increased over the last decade, particularly for serious violent and sexual offences.</li><li>Prisons became so full that early release was introduced in 2024.</li><li>The Independent Sentencing Review (2025), led by David Gauke, recommended fewer short prison sentences and more robust community sentences; the government brought forward a Sentencing Bill — check its current status before writing about current trends.</li></ul>` }
  ],
  debate: [{ q: 'Should short prison sentences be abolished?', for: ['High reoffending after short sentences.', 'They disrupt jobs, housing and families.', 'Community orders are cheaper and more effective for similar offenders.'], ag: ['Some offenders repeatedly breach community orders.', 'Victims and the public expect punishment.', 'Courts need custody as a last resort for persistent offending.'] }],
  cases: [],
  worked: [],
  pitfalls: ['Saying a suspended sentence is a community sentence — it is a custodial sentence.', 'Forgetting discharges and fines.'],
  cards: [
    ['Custody threshold?', 'The offence is so serious that neither a fine nor a community sentence can be justified.'],
    ['Length of a suspended sentence?', '14 days to 2 years, suspended for 6 months to 2 years.'],
    ['Maximum length of a community order?', 'Three years.'],
    ['Unpaid work range?', '40–300 hours.'],
    ['Conditional v absolute discharge?', 'Conditional: no penalty unless reoffending within the period; absolute: no penalty.'],
    ['Most common sentence?', 'A fine.']
  ],
  quiz: [
    { q: 'A suspended sentence order is a form of…', o: ['custodial sentence', 'community order', 'fine', 'discharge'], x: '' },
    { q: 'Unpaid work of 150 hours is part of…', o: ['a community order', 'an absolute discharge', 'a fine', 'bail'], x: '' },
    { q: 'An absolute discharge means…', o: ['no penalty', 'prison', 'a fine', 'a curfew'], x: '' }
  ],
  exam: [{ q: 'Assignment practice (D.P8): discuss the types of sentence available for the offences in the case studies. [8]', m: 8, scen: 'Case 1: Omar, 40, no previous convictions, common assault after pushing a neighbour. Case 2: Faye, 28, s18 wounding with a knife.', ms: ['Omar — fine, conditional discharge or community order; magistrates’ powers', 'Faye — immediate custody; long sentence; up to life', 'suspended sentence considered for mid-level cases', 'link to aims (D3) and factors (D4)'], bands: CRIT.D }],
  tools: ['sentsort']
});

/* ---------- Unit 2 C–D tools ---------- */
TOOLS.proftasksort = { type: 'sort', title: 'Who does it?', intro: 'Match each task in a criminal case to the professional.', cats: ['Solicitor', 'Barrister', 'Legal executive', 'CPS'], items: [
  ['Advises a suspect at the police station at 2am as duty solicitor', 'Solicitor', ''],
  ['Cross-examines a witness in a Crown Court murder trial', 'Barrister', ''],
  ['Prepares the case file under a solicitor’s supervision after CILEx training', 'Legal executive', ''],
  ['Decides whether to charge a suspect', 'CPS', 'Full Code Test.'],
  ['Represents a client at a magistrates’ court bail hearing', 'Solicitor', '']
] };
TOOLS.crimfundtree = { type: 'tree', title: 'Can the defendant get legal aid?', intro: 'A simplified guide to criminal legal aid.', nodes: {
  start: { q: 'At what stage is the advice needed?', o: [['At the police station', 'ps'], ['Magistrates’ court', 'ijm'], ['Crown Court', 'cc']] },
  ps: { end: true, tone: 'good', v: 'Free advice for everyone', x: 's58 PACE; duty solicitor scheme; not means-tested.' },
  ijm: { q: 'Is it in the interests of justice (likely loss of liberty or livelihood, complex law, inability to understand)?', o: [['Yes', 'means'], ['No', 'noij']] },
  noij: { end: true, tone: 'bad', v: 'No representation order', x: 'Court duty solicitor may help at the first hearing; otherwise pay privately.' },
  means: { q: 'Does the defendant pass the means test (e.g. on benefits, under 18, low income)?', o: [['Yes', 'ok'], ['No', 'priv']] },
  ok: { end: true, tone: 'good', v: 'Representation order granted', x: '' },
  priv: { end: true, tone: 'mid', v: 'Must pay privately', x: 'If acquitted, only part of costs may be recovered.' },
  cc: { q: 'Is household disposable income very high (above the upper limit)?', o: [['No', 'contrib'], ['Yes', 'priv']] },
  contrib: { end: true, tone: 'good', v: 'Legal aid granted — contributions may be payable', x: 'Interests of justice automatically met in the Crown Court.' }
} };
TOOLS.jurytree = { type: 'tree', title: 'Can this person serve on a jury?', intro: 'Test eligibility under the Juries Act 1974.', nodes: {
  start: { q: 'Is the person aged 18–75, on the electoral register, and resident in the UK for 5 years since age 13?', o: [['Yes', 'life'], ['No', 'noq']] },
  noq: { end: true, tone: 'bad', v: 'Not qualified', x: '' },
  life: { q: 'Have they ever been sentenced to life or 5+ years in prison?', o: [['Yes', 'disq'], ['No', 'ten']] },
  ten: { q: 'In the last 10 years, have they served a prison sentence, a suspended sentence or a community order — or are they on bail now?', o: [['Yes', 'disq'], ['No', 'exc']] },
  disq: { end: true, tone: 'bad', v: 'Disqualified', x: '' },
  exc: { q: 'Do they have a good reason to be excused or deferred (illness, caring, exams)?', o: [['Yes', 'defer'], ['No', 'serve']] },
  defer: { end: true, tone: 'mid', v: 'May be excused or deferred', x: 'At the discretion of the Jury Central Summoning Bureau.' },
  serve: { end: true, tone: 'good', v: 'Must serve', x: 'Could still be challenged for cause at court.' }
} };
TOOLS.laysort = { type: 'sort', title: 'Lay people: advantage or disadvantage?', intro: 'Sort each point.', cats: ['Advantage', 'Disadvantage'], items: [
  ['Magistrates are unpaid', 'Advantage', ''],
  ['Juries give no reasons', 'Disadvantage', ''],
  ['Juries can acquit against an unjust law', 'Advantage', 'Jury equity.'],
  ['Sentencing varies between magistrates’ benches', 'Disadvantage', ''],
  ['Jurors may research cases online', 'Disadvantage', 'Fraill.'],
  ['Ordinary people take part in justice', 'Advantage', '']
] };
TOOLS.courtroles = { type: 'sort', title: 'Who decides?', intro: 'In each court, who decides each question?', cats: ['Magistrates', 'Judge', 'Jury'], items: [
  ['Guilt in a trial for common assault', 'Magistrates', ''],
  ['Whether evidence is admissible in the Crown Court', 'Judge', ''],
  ['Guilt in a Crown Court trial for s18', 'Jury', ''],
  ['Sentence after a Crown Court conviction', 'Judge', ''],
  ['Sentence after a conviction for s47 in the magistrates’ court', 'Magistrates', 'Within their powers.']
] };
TOOLS.omissionsort = { type: 'sort', title: 'Which duty to act?', intro: 'Identify the source of the duty in each case.', cats: ['Contract', 'Relationship', 'Voluntary assumption', 'Created danger'], items: [
  ['A lifeguard ignores a drowning swimmer', 'Contract', 'Pittwood.'],
  ['A mother fails to feed her baby', 'Relationship', 'Gibbins and Proctor.'],
  ['A couple take in an ill relative, then neglect her', 'Voluntary assumption', 'Stone and Dobinson.'],
  ['A man accidentally starts a fire and walks away', 'Created danger', 'Miller.']
] };
TOOLS.mrsort = { type: 'sort', title: 'Intention, recklessness or strict liability?', intro: 'Classify the mental element.', cats: ['Direct intention', 'Oblique intention', 'Recklessness', 'Strict liability'], items: [
  ['D stabs V because he wants to kill him', 'Direct intention', ''],
  ['D throws a baby at a wall, knowing serious injury is virtually certain', 'Oblique intention', 'Woollin.'],
  ['D throws a brick near people, aware it might hit someone', 'Recklessness', 'Cunningham.'],
  ['A pharmacist supplies drugs on a forged prescription, without fault', 'Strict liability', 'Storkwain.']
] };
TOOLS.nfotree = { type: 'tree', title: 'Which non-fatal offence?', intro: 'Work up the ladder of offences from the harm caused.', nodes: {
  start: { q: 'Was any force applied to the victim?', o: [['No — but they feared immediate force', 'asl'], ['Yes', 'harm']] },
  asl: { end: true, tone: 'mid', v: 'Assault (s39 CJA 1988)', x: 'Mens rea: intention or recklessness as to causing apprehension. Max 6 months.', cases: ['ireland', 'logdon'] },
  harm: { q: 'What harm was caused?', o: [['None or trivial', 'bat'], ['Actual bodily harm (bruises, minor fracture)', 'abh'], ['A wound or really serious harm', 'gbh']] },
  bat: { end: true, tone: 'mid', v: 'Battery (s39 CJA 1988)', x: 'Mens rea: intention or recklessness as to applying force. Max 6 months.', cases: ['collinswilcock'] },
  abh: { end: true, tone: 'mid', v: 's47 ABH (OAPA 1861)', x: 'Mens rea only for the assault or battery. Max 5 years.', cases: ['rmiller', 'savage'] },
  gbh: { q: 'Did D intend to cause really serious harm (or to resist arrest)?', o: [['Yes', 's18'], ['No, but foresaw some harm', 's20'], ['Did not foresee any harm', 's47b']] },
  s18: { end: true, tone: 'bad', v: 's18 wounding / causing GBH with intent', x: 'Indictable only. Max life.', cases: ['belfon'] },
  s20: { end: true, tone: 'bad', v: 's20 malicious wounding / inflicting GBH', x: 'Max 5 years.', cases: ['mowatt'] },
  s47b: { end: true, tone: 'mid', v: 'Probably s47 ABH (if there was an assault or battery)', x: 'Without foresight of some harm, s20 fails.' }
} };
TOOLS.nfosort = { type: 'sort', title: 'Match the harm to the offence', intro: 'Assume the necessary mens rea is present.', cats: ['Assault', 'Battery', 's47 ABH', 's20/s18 GBH'], items: [
  ['Raising a fist at someone across a room', 'Assault', ''],
  ['A shove with no injury', 'Battery', ''],
  ['A black eye', 's47 ABH', ''],
  ['A broken leg', 's20/s18 GBH', ''],
  ['A cut through both layers of skin', 's20/s18 GBH', 'Wound.'],
  ['Cutting off a ponytail', 's47 ABH', 'DPP v Smith 2006.']
] };
TOOLS.aimsort = { type: 'sort', title: 'Which aim of sentencing?', intro: 'Identify the main aim of each sentence or remark.', cats: ['Punishment', 'Deterrence', 'Rehabilitation', 'Public protection', 'Reparation'], items: [
  ['“This sentence must warn others not to carry knives.”', 'Deterrence', 'General.'],
  ['A drug rehabilitation requirement', 'Rehabilitation', ''],
  ['An order to pay £500 to the victim', 'Reparation', ''],
  ['A long sentence for a dangerous offender', 'Public protection', ''],
  ['“You deserve to be punished for the harm you caused.”', 'Punishment', '']
] };
TOOLS.aggmitsort = { type: 'sort', title: 'Aggravating or mitigating?', intro: 'Sort each factor.', cats: ['Aggravating', 'Mitigating'], items: [
  ['Previous convictions', 'Aggravating', 's65.'],
  ['Genuine remorse', 'Mitigating', ''],
  ['Use of a weapon', 'Aggravating', ''],
  ['Offender aged 18 and immature', 'Mitigating', ''],
  ['Victim was a paramedic on duty', 'Aggravating', 's67.'],
  ['Offender is sole carer for young children', 'Mitigating', ''],
  ['Offence committed while on bail', 'Aggravating', 's64.']
] };
TOOLS.sentsort = { type: 'sort', title: 'Which type of sentence?', intro: 'Classify each sentence.', cats: ['Custody', 'Community', 'Fine', 'Discharge'], items: [
  ['18 months’ imprisonment suspended for 2 years', 'Custody', 'Suspended sentence.'],
  ['200 hours’ unpaid work and a curfew', 'Community', ''],
  ['£300 plus a victim surcharge', 'Fine', ''],
  ['No penalty unless reoffending within a year', 'Discharge', 'Conditional.'],
  ['Six years’ imprisonment', 'Custody', '']
] };
