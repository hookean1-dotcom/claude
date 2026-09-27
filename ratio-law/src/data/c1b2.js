/* ==========================================================
   COMPONENT 1 · SECTION B (continued): 1.2.3 – 1.2.4 + tools for Section B
   ========================================================== */
addCases([
  { id: 'hallsimons', n: 'Arthur JS Hall & Co v Simons', y: 2000, a: '1B', t: '1.2.3a', c: 'HL', f: 'Clients sued their solicitors for negligence in the conduct of litigation; the solicitors claimed advocates’ immunity.', p: 'Advocates (barristers and solicitors) no longer have immunity from being sued for negligence in the conduct of cases, overruling Rondel v Worsley (1969).' },
  { id: 'pinochet', n: 'R v Bow Street Metropolitan Stipendiary Magistrate, ex p Pinochet Ugarte (No 2)', y: 1999, a: '1B', t: '1.2.3b', c: 'HL', f: 'The House of Lords decided the former Chilean dictator could be extradited. One of the Law Lords, Lord Hoffmann, was an unpaid director of a charity linked to Amnesty International, which had intervened in the case.', p: 'The decision was set aside and reheard by a new panel: a judge is automatically disqualified if they have an interest in the outcome, to preserve impartiality and public confidence.' },
  { id: 'dimes', n: 'Dimes v Proprietors of Grand Junction Canal', y: 1852, a: '1B', t: '1.2.3b', c: 'HL', f: 'The Lord Chancellor, Lord Cottenham, decided cases in favour of a canal company in which he held shares.', p: 'His decisions were set aside: “no man can be a judge in his own cause”, even without actual bias.' },
  { id: 'sirros', n: 'Sirros v Moore', y: 1975, a: '1B', t: '1.2.3b', c: 'CA', f: 'A Crown Court judge wrongly ordered the detention of a man, who sued for false imprisonment.', p: 'Judges are immune from being sued for acts done in their judicial capacity in good faith — protecting judicial independence.' },
  { id: 'paccar', n: 'R (PACCAR Inc) v Competition Appeal Tribunal', y: 2023, a: '1B', t: '1.2.4', c: 'UKSC', f: 'Lorry manufacturers argued that the litigation funding agreements behind a large competition claim were unenforceable.', p: 'Litigation funding agreements that give the funder a percentage of damages are damages-based agreements, and so unenforceable unless they comply with the DBA rules. Threw third-party funding into doubt; reform was recommended by the Civil Justice Council in 2025.' }
]);

/* ---------- 1.2.3a The legal professions ---------- */
TOPICS.push({
  id: '1.2.3a', unit: '1B', ref: '1.2.3', title: 'Barristers, solicitors and legal executives',
  short: 'Education, training and role; structure; fusion; regulation; social background',
  summary: 'England and Wales has a “split” legal profession: solicitors and barristers, with growing roles for chartered legal executives and paralegals. You need to know how each qualifies, what they do, how they are regulated and disciplined, the debate about fusion, and how representative the professions are.',
  spec: ['Solicitors: education and training (the SQE), role, rights of audience, business structures', 'Barristers: education and training (Inns of Court, vocational training, pupillage), role, the cab-rank rule, King’s Counsel', 'Chartered legal executives and paralegals', 'Regulation of the legal professions: Legal Services Act 2007, SRA, BSB, Legal Ombudsman', 'Fusion of the professions', 'Social background and diversity'],
  learn: [
    { h: 'Solicitors', html: `
<p>There are about 160,000 practising solicitors — the largest branch. Most work in private firms; others work in-house for companies, local authorities, the CPS and the Government Legal Department.</p>
<h4>Qualifying (since September 2021)</h4><ol><li>A <b>degree</b> in any subject (or equivalent, e.g. a solicitor apprenticeship).</li><li>Pass the <b>Solicitors Qualifying Examination</b>: <b>SQE1</b> (functioning legal knowledge — multiple-choice) and <b>SQE2</b> (practical legal skills: advocacy, interviewing, drafting, research).</li><li><b>Two years’ qualifying work experience</b> (with up to four organisations).</li><li>Satisfy the SRA’s <b>character and suitability</b> requirements, then be admitted to the roll.</li></ol>
<p>Earlier routes (law degree or conversion, Legal Practice Course and a two-year training contract) remain available to some students until 2032. The SQE was designed to widen access, but it is expensive and pass rates for SQE1 have been around 50%.</p>
<h4>Role</h4><p>Advising clients, drafting documents, conveyancing, wills and probate, family, crime, commercial work. Solicitors have <b>rights of audience</b> in the magistrates’ courts, County Court and tribunals; with a <b>Higher Rights of Audience</b> qualification (Courts and Legal Services Act 1990; Access to Justice Act 1999) they can act as solicitor-advocates in the higher courts. They can practise as sole practitioners, partnerships, LLPs and — since the Legal Services Act 2007 — <b>Alternative Business Structures</b> owned by non-lawyers (e.g. Co-op Legal Services).</p>` },
    { h: 'Barristers', html: `
<p>There are about 17,500 practising barristers. Around 80% are <b>self-employed</b>, sharing <b>chambers</b> and a clerk; others are employed (e.g. by the CPS).</p>
<h4>Qualifying</h4><ol><li>An academic stage: a law degree, or a non-law degree plus a conversion course.</li><li>Join one of the four <b>Inns of Court</b> (Lincoln’s Inn, Gray’s Inn, Inner Temple, Middle Temple) and complete qualifying sessions.</li><li>The <b>vocational component</b> (Bar course) — advocacy, drafting, opinion writing, conference skills.</li><li><b>Called to the Bar</b> by the Inn.</li><li><b>Pupillage</b>: a year of work-based training with a pupil supervisor. Competition is fierce — far fewer pupillages than Bar course graduates.</li><li><b>Tenancy</b>: a permanent place in chambers.</li></ol>
<h4>Role</h4><p>Specialist <b>advocates</b> with rights of audience in all courts; they also give expert opinions and draft documents. Traditionally instructed by solicitors, but since 2004 the <b>public access</b> scheme lets clients go to a barrister directly. The <b>cab-rank rule</b> requires a self-employed barrister to accept any case within their competence and availability, whatever they think of the client. Senior barristers (and some solicitor-advocates) can apply to become <b>King’s Counsel</b> (“taking silk”) through an independent selection panel; about 10% of barristers are KCs.</p>` },
    { h: 'Legal executives and paralegals', html: `
<p><b>Chartered Legal Executives</b> (members of CILEx) are qualified lawyers who specialise in one area of law (e.g. conveyancing, family, crime). They qualify through the CILEx Professional Qualification plus three years’ qualifying experience, often while working and without a degree — a more accessible and cheaper route. They can become partners in firms, gain advocacy rights, and are eligible for some judicial posts such as District Judge. They are regulated by CILEx Regulation.</p>
<p><b>Paralegals</b> carry out legal work under the supervision of lawyers. Most are not regulated, though there are voluntary registers. Other regulated specialists include licensed conveyancers and costs lawyers.</p>` },
    { h: 'Regulation and complaints', html: `
<p>After the <b>Clementi Review</b> (2004), the <b>Legal Services Act 2007</b> separated the professions’ <b>representative</b> and <b>regulatory</b> functions:</p>
<div class="tbl"><table><tr><th>Profession</th><th>Representative body</th><th>Regulator</th><th>Disciplinary</th></tr>
<tr><td>Solicitors</td><td>The Law Society</td><td>Solicitors Regulation Authority (SRA)</td><td>Solicitors Disciplinary Tribunal</td></tr>
<tr><td>Barristers</td><td>The Bar Council</td><td>Bar Standards Board (BSB)</td><td>Disciplinary tribunals (Bar Tribunals and Adjudication Service)</td></tr>
<tr><td>Legal executives</td><td>CILEx</td><td>CILEx Regulation</td><td>—</td></tr></table></div>
<p>The <b>Legal Services Board</b> oversees all the regulators. Complaints about poor service go to the <b>Legal Ombudsman</b> (run by the Office for Legal Complaints), which can order an apology, a refund or compensation (up to £50,000). Clients can also sue for negligence in contract or tort: [[c:hallsimons]] removed advocates’ immunity. The SRA was criticised for its handling of the collapse of the firm Axiom Ince (2023).</p>` },
    { h: 'Fusion', html: `
<div class="debate"><div class="for"><h5>For fusing the professions</h5><ul><li>Avoids paying two lawyers — cheaper for clients</li><li>No gap in communication; continuity from start to trial</li><li>Most countries (e.g. the USA) have one profession</li><li>Roles already overlap: solicitor-advocates, public access to barristers</li></ul></div><div class="ag"><h5>Against</h5><ul><li>Barristers provide specialist, independent advocacy for firms of any size — the cab-rank rule gives access to top advocates</li><li>The judiciary is largely drawn from a specialist Bar</li><li>Separate training suits different skills</li><li>“De facto” fusion has already happened where it is useful</li></ul></div></div>` },
    { h: 'Social background and diversity', html: `
<p>The professions have become more diverse at entry level: over half of practising solicitors are women, and ethnic minority solicitors are well represented relative to the population. But progress at the top is slower: women and ethnic minority lawyers are under-represented among partners in large firms, KCs and senior barristers. Barristers, KCs and senior judges remain disproportionately privately educated (Sutton Trust research). Barriers include the cost of training, unpaid work experience, the scarcity of pupillages, and working cultures that are hard to combine with caring responsibilities. The SQE and CILEx routes and apprenticeships aim to widen access.</p>` }
  ],
  debate: [{ q: 'Is the legal profession now open to people from all backgrounds?', for: ['SQE, apprenticeships and CILEx routes avoid the cost of the old LPC and training contract.', 'More than half of new solicitors are women.', 'Scholarships from the Inns of Court; outreach schemes.', 'Legal Services Act 2007 created new, more competitive business models.'], ag: ['Bar training and pupillage remain costly and highly competitive.', 'Senior ranks (partners, KCs) are still mostly male, white and privately educated.', 'SQE preparation courses are expensive; pass rates are low.', 'Unpaid work experience favours those with money and contacts.'] }],
  cases: ['hallsimons'],
  worked: [],
  pitfalls: ['Describing only the old training route (LPC and training contract) for solicitors.', 'Saying barristers can only be instructed by solicitors — public access has existed since 2004.', 'Confusing the Law Society (representative) with the SRA (regulator).', 'Saying CILEx lawyers cannot become judges — they are eligible for some posts.'],
  cards: [
    ['What is the SQE?', 'The Solicitors Qualifying Examination (SQE1 knowledge, SQE2 skills), introduced in 2021.'],
    ['How much work experience does a solicitor need under the SQE?', 'Two years’ qualifying work experience.'],
    ['Name the four Inns of Court.', 'Lincoln’s Inn, Gray’s Inn, Inner Temple, Middle Temple.'],
    ['What is pupillage?', 'A year of practical training under a pupil supervisor before a barrister can practise independently.'],
    ['What is the cab-rank rule?', 'A self-employed barrister must accept any case within their competence and availability, regardless of the client.'],
    ['What is “taking silk”?', 'Being appointed King’s Counsel.'],
    ['Which Act created the Legal Services Board and Legal Ombudsman?', 'Legal Services Act 2007.'],
    ['Regulator of solicitors?', 'Solicitors Regulation Authority (SRA).'],
    ['Regulator of barristers?', 'Bar Standards Board (BSB).'],
    ['Hall v Simons (2000)?', 'Removed advocates’ immunity from negligence claims.'],
    ['What is an Alternative Business Structure?', 'A legal business owned or managed by non-lawyers — allowed by the LSA 2007.'],
    ['What is public access?', 'Clients instructing a barrister directly without a solicitor (since 2004).']
  ],
  quiz: [
    { q: 'Since 2021, the main route to qualifying as a solicitor is…', o: ['the SQE plus two years’ qualifying work experience', 'the Bar course and pupillage', 'the CILEx qualification only', 'a law degree alone'], x: 'Plus a degree or equivalent and character checks.' },
    { q: 'Which body regulates barristers?', o: ['Bar Standards Board', 'Bar Council', 'Law Society', 'Legal Services Board'], x: 'The Bar Council represents them.' },
    { q: 'The cab-rank rule means that barristers…', o: ['must accept cases within their competence if available', 'can refuse unpopular clients', 'take cases in order of payment', 'must work in taxis'], x: 'Ensures representation for all.' },
    { q: 'Which case removed advocates’ immunity from negligence claims?', o: ['Arthur JS Hall v Simons', 'Rondel v Worsley', 'Sirros v Moore', 'Pinochet'], x: 'Overruled Rondel v Worsley.' },
    { q: 'Complaints about poor service by lawyers are handled by…', o: ['the Legal Ombudsman', 'the CPS', 'the Judicial Appointments Commission', 'the Supreme Court'], x: 'Compensation up to £50,000.' },
    { q: 'Which is an argument FOR fusion?', o: ['Clients would not need to pay two lawyers', 'It protects the cab-rank rule', 'It keeps a specialist advocacy Bar', 'It maintains the Inns of Court'], x: 'Cost saving and continuity.' },
    { q: 'Chartered Legal Executives are members of…', o: ['CILEx', 'the Bar Council', 'the Inns of Court', 'the Magistrates’ Association'], x: 'Regulated by CILEx Regulation.' }
  ],
  exam: [
    { q: 'Explain the training of barristers. [5]', m: 5, ms: ['academic stage — law degree or conversion', 'join an Inn of Court; qualifying sessions', 'vocational component / Bar course', 'call to the Bar', 'pupillage — one year; tenancy'] },
    { q: '(a) Explain the role and regulation of solicitors and barristers. [10]<br>(b) Analyse and evaluate whether the legal professions should be fused. [15]', m: 25, ms: ['solicitors’ role, rights of audience, structures', 'barristers’ role — advocacy, opinions, cab-rank, KC', 'regulation — LSA 2007, SRA, BSB, LSB, Legal Ombudsman', 'cost of two lawyers', 'continuity / communication', 'specialist advocacy and independence', 'existing overlap — higher rights, public access', 'effect on judiciary', 'international comparison', 'conclusion'] }
  ],
  tools: ['profsort']
});

/* ---------- 1.2.3b The judiciary and the magistracy ---------- */
TOPICS.push({
  id: '1.2.3b', unit: '1B', ref: '1.2.3', title: 'Judges and magistrates',
  short: 'Judicial hierarchy, selection, training, composition, independence; magistrates and District Judges',
  summary: 'Judges interpret and apply the law and, through precedent and judicial review, shape it. Their independence from government is a cornerstone of the rule of law. This topic covers the judicial hierarchy, how judges and magistrates are selected, appointed and trained, how representative they are, how they are disciplined and removed, and how judicial independence is protected.',
  spec: ['Judicial hierarchy and roles (superior and inferior judges)', 'Selection and appointment: the Judicial Appointments Commission, eligibility, merit', 'Training (Judicial College) and composition (diversity)', 'Regulation: complaints, discipline, removal, retirement', 'Constitutional position, judicial independence and the rule of law', 'Magistrates and District Judges (Magistrates’ Courts): role, selection, appointment, training'],
  learn: [
    { h: 'The judicial hierarchy', html: `
<div class="tbl"><table><tr><th>Level</th><th>Judges</th><th>Where they sit</th></tr>
<tr><td rowspan="4"><b>Superior</b></td><td>Justices of the Supreme Court (12)</td><td>Supreme Court; Privy Council</td></tr>
<tr><td>Heads of Division: Lord Chief Justice (head of the judiciary), Master of the Rolls, President of the King’s Bench Division, President of the Family Division, Chancellor of the High Court</td><td>Court of Appeal and High Court</td></tr>
<tr><td>Lords and Lady Justices of Appeal</td><td>Court of Appeal</td></tr>
<tr><td>High Court judges (“puisne” judges)</td><td>High Court; serious Crown Court trials</td></tr>
<tr><td rowspan="3"><b>Inferior</b></td><td>Circuit Judges</td><td>Crown Court, County Court</td></tr>
<tr><td>Recorders (part-time, often the first step)</td><td>Crown Court, County Court</td></tr>
<tr><td>District Judges; District Judges (Magistrates’ Courts); Tribunal judges</td><td>County Court; magistrates’ courts; tribunals</td></tr></table></div>
<p><b>Roles:</b> trial judges manage the trial, rule on law and evidence, direct the jury and sentence (criminal), or decide liability and remedies (civil). Appellate judges decide appeals and develop the law through precedent and statutory interpretation. Senior judges also review government action (judicial review) and make declarations of incompatibility under the HRA.</p>` },
    { h: 'Selection and appointment', html: `
<p>Before 2006 judges were appointed on the Lord Chancellor’s recommendation after “secret soundings” — criticised for favouring a narrow group. The <b>Constitutional Reform Act 2005</b> created the independent <b>Judicial Appointments Commission</b> (JAC), with lay, legal and judicial members.</p>
<ul><li><b>Eligibility</b> (Tribunals, Courts and Enforcement Act 2007): a relevant legal qualification plus years gaining legal experience — 5 years for District Judge and tribunal posts, 7 years for Circuit and High Court judges. Solicitors, barristers and chartered legal executives (for some posts) can apply.</li>
<li><b>Process</b>: open competition advertised by the JAC; online qualifying tests; shortlisting; <b>selection days</b> with role play, a situational exercise and an interview; references.</li>
<li><b>Merit</b>: selection must be <b>solely on merit</b>, and candidates must be of good character. Since the Crime and Courts Act 2013 the “<b>equal merit</b>” provision lets the JAC prefer a candidate to increase diversity where two are equally meritorious.</li>
<li>The JAC recommends one candidate; the <b>Lord Chancellor</b> may accept, reject (once) or ask for reconsideration. Appointments are formally made by the King (senior posts) or the Lord Chancellor/Lord Chief Justice.</li>
<li><b>Supreme Court Justices</b> are chosen by an ad hoc selection commission; they need two years in high judicial office or 15 years’ qualifying experience.</li></ul>` },
    { h: 'Training and composition', html: `
<p>The <b>Judicial College</b> (2011) provides induction and continuing training for all judges and magistrates: law updates, sentencing, courtroom skills, equality (the <i>Equal Treatment Bench Book</i>), dealing with litigants in person and vulnerable witnesses. New judges usually start part-time (Recorder, Deputy District Judge) to gain experience.</p>
<p><b>Composition:</b> in 2024 about a third of court judges were women and around one in ten from an ethnic minority background; the proportions are lower in the senior courts. Judges are typically older and a high proportion of senior judges went to private schools and Oxford or Cambridge. The first woman Lord Chief Justice (Baroness Carr) was appointed in 2023. Diversity matters for <b>public confidence</b> and for bringing a range of experience to decisions — Baroness Hale argued that a more diverse judiciary produces better justice.</p>` },
    { h: 'Discipline, removal and retirement', html: `
<ul><li><b>Complaints</b> about a judge’s personal conduct go to the <b>Judicial Conduct Investigations Office</b> (JCIO). The Lord Chancellor and Lord Chief Justice together can advise, warn, reprimand or remove inferior judges. Complaints about decisions must be dealt with by appeal.</li>
<li><b>Superior judges</b> hold office “during good behaviour” and can only be removed by the King on an address of <b>both Houses of Parliament</b> (Act of Settlement 1701; Senior Courts Act 1981 s11). This has never happened to an English judge.</li>
<li><b>Inferior judges</b> can be removed by the Lord Chancellor (with the Lord Chief Justice’s agreement) for incapacity or misbehaviour — e.g. judges removed for viewing pornography on court computers (2015).</li>
<li><b>Retirement</b> at 75 (Public Service Pensions and Judicial Offices Act 2022).</li></ul>` },
    { h: 'Independence and the rule of law', html: `
<p>Judicial independence means judges decide cases impartially, according to law, free from pressure by the government, Parliament, the media or the parties. It is essential to the rule of law and to Art 6 (fair hearing before an independent and impartial tribunal).</p>
<ul><li><b>Security of tenure</b> for superior judges; <b>salaries</b> paid from the Consolidated Fund without an annual vote.</li>
<li><b>Immunity from suit</b> for judicial acts: [[c:sirros]].</li>
<li><b>Separation of powers</b> under the CRA 2005: the Supreme Court is separate from Parliament; the Lord Chief Justice heads the judiciary; the JAC appoints; s3 CRA requires ministers to uphold judicial independence, and the Lord Chancellor must defend it.</li>
<li>Judges do not take part in politics; by convention MPs do not criticise judges in Parliament in pending cases (the sub judice rule).</li>
<li><b>Impartiality</b>: a judge must not hear a case in which they have an interest — [[c:dimes]]; [[c:pinochet]].</li></ul>
<p><b>Pressures:</b> newspaper attacks such as the <i>Daily Mail</i>’s “Enemies of the People” headline after [[c:miller2017|Miller (2017)]], and ministers criticising judges in immigration cases, have raised concern that the Lord Chancellor (no longer a senior lawyer in every case) does not defend the judiciary strongly enough.</p>` },
    { h: 'Magistrates and District Judges', html: `
<h4>Lay magistrates: selection and appointment</h4>
<ul><li><b>Qualifications</b>: aged 18–74 on appointment (retire at 75 since 2022); no legal qualification needed; must sit at least 13 days (26 half-days) a year; live or work near the court.</li>
<li><b>Six key qualities</b>: good character; understanding and communication; social awareness; maturity and sound temperament; sound judgement; commitment and reliability.</li>
<li><b>Disqualified</b>: people with serious criminal convictions, undischarged bankrupts, serving police officers and others whose work conflicts (e.g. traffic wardens), close relatives of people working in the local justice system.</li>
<li><b>Process</b>: local <b>Advisory Committees</b> advertise (national recruitment campaigns, social media), shortlist, hold two interviews (the second with case-study discussion) and recommend candidates. Appointment is by the <b>Lord Chief Justice</b> (on behalf of the Crown).</li>
<li><b>Training</b> (Judicial College framework, delivered locally): induction, observations, a mentor for the first year, core training, regular appraisal; further training for chairing the bench and for youth and family courts.</li></ul>
<h4>District Judges (Magistrates’ Courts)</h4>
<p>Legally qualified, salaried, full-time judges (at least 5 years’ experience; appointed through the JAC). They sit alone, often on longer or more complex cases, extradition and serious fraud or terrorism preliminary hearings. They are quicker and more consistent than lay benches but much more expensive, and some argue their growth undermines lay justice.</p>` }
  ],
  debate: [{ q: 'Is the judiciary sufficiently independent and representative?', for: ['CRA 2005 separated the judiciary from Parliament and the executive.', 'JAC appoints on merit in open competition; equal merit provision.', 'Security of tenure, immunity and protected salaries.', 'Judges have ruled against the government (Miller, UNISON).'], ag: ['Lord Chancellor retains a veto; political attacks on judges.', 'Senior judges remain largely white, male and privately educated.', 'Merit criteria may favour barristers from traditional backgrounds.', 'Part-time work and career breaks can still be obstacles.'] }],
  cases: ['pinochet', 'dimes', 'sirros', 'miller2017'],
  worked: [],
  pitfalls: ['Saying the Lord Chancellor still appoints judges alone — the JAC selects.', 'Confusing lay magistrates (unpaid volunteers) with District Judges (qualified and salaried).', 'Stating the old retirement age of 70 — it has been 75 since 2022.', 'Saying judges can be sacked by the Prime Minister.'],
  cards: [
    ['Who heads the judiciary of England and Wales?', 'The Lord Chief Justice.'],
    ['What body selects judges?', 'The Judicial Appointments Commission (CRA 2005).'],
    ['What does the “equal merit” provision allow?', 'Preferring a candidate who increases diversity where candidates are of equal merit (Crime and Courts Act 2013).'],
    ['How can a superior judge be removed?', 'By the Monarch on an address of both Houses of Parliament.'],
    ['Judicial retirement age?', '75 (since 2022).'],
    ['Who trains judges and magistrates?', 'The Judicial College.'],
    ['Where do complaints about a judge’s conduct go?', 'The Judicial Conduct Investigations Office (JCIO).'],
    ['Re Pinochet (1999)?', 'A Law Lord’s link to Amnesty International meant the decision had to be set aside — impartiality.'],
    ['Six key qualities of a magistrate?', 'Good character; understanding and communication; social awareness; maturity and sound temperament; sound judgement; commitment and reliability.'],
    ['Who recommends lay magistrates for appointment?', 'Local Advisory Committees; appointed by the Lord Chief Justice.'],
    ['Minimum sittings for a magistrate?', '13 days (26 half-days) a year.'],
    ['District Judge (Magistrates’ Courts)?', 'A legally qualified, salaried judge who sits alone in the magistrates’ court.']
  ],
  quiz: [
    { q: 'The Judicial Appointments Commission was created by…', o: ['the Constitutional Reform Act 2005', 'the Courts Act 1971', 'the Human Rights Act 1998', 'the Legal Services Act 2007'], x: 'Began work in 2006.' },
    { q: 'Superior judges can be removed only by…', o: ['the Monarch on an address of both Houses of Parliament', 'the Prime Minister', 'the Lord Chancellor alone', 'the JCIO'], x: 'Act of Settlement 1701.' },
    { q: 'Which case established that a judge must not decide a case in which he has a financial interest?', o: ['Dimes v Grand Junction Canal', 'Sirros v Moore', 'Hall v Simons', 'Pinochet'], x: 'The Lord Chancellor held shares.' },
    { q: 'Which is NOT one of the six key qualities for magistrates?', o: ['A law degree', 'Sound judgement', 'Social awareness', 'Commitment and reliability'], x: 'No legal qualification is needed.' },
    { q: 'Judges are immune from being sued for judicial acts, according to…', o: ['Sirros v Moore', 'Pepper v Hart', 'Young v Bristol Aeroplane', 'R v Abdroikov'], x: 'Protects independence.' },
    { q: 'Magistrates must retire at…', o: ['75', '70', '65', '80'], x: 'Raised from 70 in 2022.' },
    { q: 'The JAC must select candidates…', o: ['solely on merit', 'by seniority', 'by political balance', 'by lottery'], x: 'With an equal merit tie-break for diversity.' }
  ],
  exam: [
    { q: 'Explain how lay magistrates are selected and appointed. [5]', m: 5, ms: ['qualifications — 18–74, commitment, locality; no legal qualifications', 'six key qualities', 'disqualifications', 'Advisory Committees — advertise, two interviews', 'appointed by Lord Chief Justice; training / mentor'] },
    { q: '(a) Explain the selection and appointment of judges. [10]<br>(b) Analyse and evaluate the extent to which the judiciary is independent. [15]', m: 25, ms: ['JAC — CRA 2005; eligibility TCEA 2007', 'process — tests, selection days, merit, equal merit', 'Lord Chancellor’s role; Supreme Court commission', 'security of tenure, removal procedure', 'salary; immunity — Sirros', 'CRA 2005 s3 duty; separation of powers', 'impartiality — Dimes, Pinochet', 'political/media attacks', 'diversity and public confidence', 'conclusion'] }
  ],
  tools: ['jacsteps']
});

/* ---------- 1.2.4 Access to justice and funding ---------- */
TOPICS.push({
  id: '1.2.4', unit: '1B', ref: '1.2.4', title: 'Access to justice and funding',
  short: 'Civil and criminal legal aid, LASPO 2012, Legal Aid Agency, Public Defender Service, CFAs and other funding',
  summary: 'Rights mean little if people cannot afford to enforce them. This topic covers state funding through civil and criminal legal aid, run by the Legal Aid Agency under the Legal Aid, Sentencing and Punishment of Offenders Act 2012 (LASPO), advice schemes, and private alternatives such as conditional fee (“no win, no fee”) agreements. The key evaluative question is whether cuts since 2013 have created barriers to justice.',
  spec: ['The need for legal services; unmet legal need', 'Civil legal aid under LASPO 2012: scope, means and merits tests, exceptional case funding', 'Criminal legal aid: police station advice, the interests of justice and means tests; the Public Defender Service', 'The Legal Aid Agency and advice schemes', 'Alternative methods of funding: conditional fee agreements, damages-based agreements, insurance, pro bono, advice agencies, trade unions', 'Evaluation: access to justice and barriers to justice'],
  learn: [
    { h: 'Why funding matters', html: `
<p>Access to justice is part of the rule of law (Bingham’s principle that disputes should be resolved without prohibitive cost; [[c:unison]]). Legal problems — housing, debt, employment, family breakdown — cluster among people who can least afford lawyers. Without help, people may not know their rights, may give up, or may represent themselves at a disadvantage (an “inequality of arms”).</p>
<p>State-funded legal aid began with the Legal Aid and Advice Act 1949. The <b>Access to Justice Act 1999</b> created the Legal Services Commission. <b>LASPO 2012</b> abolished it and created the <b>Legal Aid Agency</b> (LAA), an executive agency of the Ministry of Justice, which contracts with solicitors’ firms and not-for-profit organisations to provide legal aid.</p>` },
    { h: 'Civil legal aid after LASPO', html: `
<p>LASPO (in force April 2013) cut spending by removing many areas from <b>scope</b>:</p>
<div class="tbl"><table><tr><th>Still in scope (examples)</th><th>Removed from scope (examples)</th></tr>
<tr><td>Family cases involving domestic abuse or child abuse (with evidence); care proceedings; housing where the home is at risk; homelessness; asylum; mental health; community care; discrimination; judicial review; special educational needs</td><td>Most private family law (divorce, child arrangements without abuse); most clinical negligence (except birth injuries); employment; most welfare benefits (except appeals on law); most debt; non-asylum immigration; most consumer and contract disputes</td></tr></table></div>
<ul><li><b>Means test</b>: gross income, disposable income and capital limits. The thresholds were frozen for years so fewer people qualified; a Means Test Review (2022–23) proposed raising them.</li>
<li><b>Merits test</b>: the prospects of success (usually at least 50%) and whether the likely benefit justifies the cost.</li>
<li><b>Exceptional Case Funding</b> (s10 LASPO) for out-of-scope cases where refusal would breach Convention rights (e.g. Art 6) — but few applications succeed.</li>
<li><b>Civil Legal Advice</b> — a telephone service for some areas.</li></ul>` },
    { h: 'Criminal legal aid', html: `
<ul><li><b>Advice at the police station</b>: free, not means-tested, for anyone detained (s58 PACE; the Duty Solicitor Scheme via the Defence Solicitor Call Centre).</li>
<li><b>Duty solicitors</b> at magistrates’ courts for unrepresented defendants.</li>
<li><b>Representation</b> in court needs a representation order. Two tests:
<ol><li><b>Interests of justice</b> (the “Widgery criteria”, Sch 3 LASPO): the defendant is likely to lose their liberty, livelihood or suffer serious damage to reputation; a substantial question of law; inability to understand the proceedings or state their own case; witnesses need to be traced or cross-examined by an expert; it is in the interests of another person (e.g. a child witness) that the defendant is represented. Crown Court cases automatically pass.</li>
<li><b>Means test</b>: in the magistrates’ court, under-18s and those on certain benefits pass automatically; others are assessed on income. In the Crown Court defendants may have to pay contributions from income or capital, and those with high disposable income are ineligible.</li></ol></li></ul>
<p>The <b>Public Defender Service</b> (2001) employs salaried defence lawyers directly through the LAA — a small service compared with private firms.</p>
<p><b>Problems</b>: low fees have driven firms and barristers away from criminal work — the Bellamy Review (2021) recommended an immediate 15% increase; criminal barristers went on strike in 2022. Some police stations and courts struggle to find duty solicitors. People just above the means threshold must pay privately or represent themselves.</p>` },
    { h: 'Alternative methods of funding', html: `
<ul><li><b>Conditional fee agreements (CFAs)</b> — “no win, no fee” (Courts and Legal Services Act 1990 s58). If the case is lost, the lawyer gets no fee; if it is won, the lawyer receives normal fees plus a <b>success fee</b> of up to 100% of base costs. Since LASPO the success fee is paid by the <b>client</b> (not the losing side), capped at 25% of damages (excluding future losses) in personal injury cases. <b>After-the-event insurance</b> covers the risk of paying the other side’s costs.</li>
<li><b>Damages-based agreements (DBAs)</b> (s45 LASPO) — the lawyer takes a percentage of the damages (capped at 25% in personal injury, 35% in employment, 50% otherwise).</li>
<li><b>Before-the-event legal expenses insurance</b>, often added to home or car insurance.</li>
<li><b>Third-party litigation funding</b> — investors fund big claims in return for a share of damages; thrown into doubt by [[c:paccar]] (2023) and the subject of reform proposals.</li>
<li><b>Trade unions</b> fund members’ employment and injury claims.</li>
<li><b>Free advice</b>: Citizens Advice, law centres, university law clinics, pro bono work by lawyers (e.g. Advocate, LawWorks), the Money and Pensions Service, charities such as Shelter.</li>
<li><b>Litigants in person</b> — representing yourself, sometimes with a McKenzie friend.</li></ul>` },
    { h: 'Evaluation: access to justice or barriers to justice?', html: `
<p><b>Criticisms of LASPO:</b> sharp rise in <b>litigants in person</b>, especially in family courts, causing delay; “<b>advice deserts</b>” — the Law Society reported that many areas have no housing legal aid provider; early advice that could stop problems escalating was removed; exceptional case funding is hard to obtain; frozen means thresholds exclude low-income working people; providers are leaving legal aid. The government’s own post-implementation review (2019) accepted some of these problems. The Bach Commission (2017) proposed a statutory right to justice.</p>
<p><b>Defences of the system:</b> the state still spends around £2 billion a year on legal aid; criminal defendants facing prison still get representation; cases involving the most serious issues (liberty, homes, children at risk, domestic abuse) remain in scope; CFAs make personal injury claims accessible without public money; mediation and online processes can resolve disputes more cheaply.</p>` }
  ],
  debate: [{ q: 'Has LASPO created barriers to justice?', for: ['Litigants in person rose sharply, especially in family cases.', 'Advice deserts: no local housing or immigration legal aid provider in many areas.', 'Loss of early advice leads to bigger problems later (and costs elsewhere).', 'Frozen means test thresholds; ECF rarely granted.', 'Criminal legal aid fees too low (Bellamy).'], ag: ['Public money had to be saved; legal aid remains for the most serious matters.', 'Domestic abuse victims and children are still protected.', 'CFAs, insurance and pro bono fill some gaps.', 'ADR and online courts offer cheaper alternatives.', 'Police station advice remains free for all.'] }],
  cases: ['unison', 'paccar'],
  worked: [{ q: '<b>Scenario.</b> Jess, who works part-time, has been charged with assault occasioning ABH and faces trial in the magistrates’ court. Her neighbour Leo is being evicted by his landlord. Her friend Mo wants to sue his employer for unfair dismissal. Advise each on funding.', s: ['<b class="st">Jess</b>At the police station she was entitled to free advice. For representation she needs a representation order: interests of justice (likely — she could lose her liberty and may need witnesses cross-examined) and the magistrates’ means test (depends on her income; part-time earnings may pass).', '<b class="st">Leo</b>Possession proceedings where the home is at risk remain within the scope of civil legal aid under LASPO. He must pass the means and merits tests. A duty adviser at the possession hearing may help.', '<b class="st">Mo</b>Employment claims were removed from scope (except discrimination). He could use a trade union, legal expenses insurance, a CFA or DBA (up to 35% of damages), Citizens Advice or a law clinic, or represent himself; ACAS early conciliation is compulsory first.'], a: 'Jess: criminal legal aid likely. Leo: civil legal aid in scope. Mo: alternatives to legal aid.' }],
  pitfalls: ['Describing the pre-2013 system (Legal Services Commission, Community Legal Service) as current.', 'Saying CFA success fees are paid by the loser — since LASPO the client pays them.', 'Forgetting that police station advice is free for everyone.', 'Evaluating without evidence (litigants in person, advice deserts, Bellamy, Bach).'],
  cards: [
    ['Which Act governs legal aid today?', 'Legal Aid, Sentencing and Punishment of Offenders Act 2012 (LASPO).'],
    ['Which body administers legal aid?', 'The Legal Aid Agency (an executive agency of the MoJ).'],
    ['Two tests for civil legal aid?', 'Means test and merits test (plus the case must be in scope).'],
    ['What is Exceptional Case Funding?', 'Funding for out-of-scope cases where refusal would breach Convention rights (s10 LASPO).'],
    ['Is police station advice means-tested?', 'No — free for anyone detained (s58 PACE).'],
    ['Two tests for criminal legal aid representation?', 'Interests of justice (Widgery criteria) and means test.'],
    ['Name two Widgery criteria.', 'Risk of losing liberty/livelihood/reputation; substantial question of law; can’t understand proceedings; witnesses to trace/cross-examine; interests of another.'],
    ['What is the Public Defender Service?', 'Salaried criminal defence lawyers employed through the LAA (since 2001).'],
    ['What is a CFA?', 'A “no win, no fee” agreement; success fee up to 100% of base costs, paid by the client, capped at 25% of damages in PI.'],
    ['What is a DBA?', 'A damages-based agreement: the lawyer takes a percentage of damages (s45 LASPO).'],
    ['What did the Bellamy Review (2021) recommend?', 'An immediate 15% increase in criminal legal aid funding.'],
    ['What is an advice desert?', 'An area with no (or very few) legal aid providers for a type of law, e.g. housing.']
  ],
  quiz: [
    { q: 'Legal aid is administered by…', o: ['the Legal Aid Agency', 'the Legal Services Commission', 'the Law Society', 'the CPS'], x: 'Since April 2013.' },
    { q: 'Which is still generally within the scope of civil legal aid after LASPO?', o: ['Possession proceedings where the home is at risk', 'Most employment claims', 'Most divorces without abuse', 'Consumer contract disputes'], x: 'Housing where the home is at risk.' },
    { q: 'Advice for a suspect at the police station is…', o: ['free and not means-tested', 'means-tested', 'only for under-18s', 'only for indictable offences'], x: 's58 PACE.' },
    { q: 'The “interests of justice” test applies to…', o: ['criminal legal aid for representation', 'civil legal aid', 'CFAs', 'arbitration'], x: 'The Widgery criteria.' },
    { q: 'Since LASPO, a CFA success fee is paid by…', o: ['the client, out of damages', 'the losing party', 'the Legal Aid Agency', 'the court'], x: 'Capped at 25% of damages in PI.' },
    { q: 'Which review recommended a 15% increase in criminal legal aid?', o: ['The Bellamy Review', 'The Woolf Report', 'The Leggatt Review', 'The Clementi Review'], x: '2021.' },
    { q: 'Exceptional Case Funding is available where…', o: ['refusing funding would breach Convention rights', 'the claim is worth over £1 million', 'the claimant is a company', 'the case is in the Supreme Court'], x: 's10 LASPO.' },
    { q: 'A “damages-based agreement” means the lawyer…', o: ['takes a percentage of the damages won', 'is paid by the state', 'works for free', 'charges a fixed fee'], x: 's45 LASPO.' }
  ],
  exam: [
    { q: 'Explain how criminal legal aid is provided. [5]', m: 5, ms: ['free police station advice — s58 PACE; duty solicitor', 'representation order — interests of justice (Widgery)', 'means test — magistrates vs Crown Court contributions', 'Legal Aid Agency contracts with firms', 'Public Defender Service'] },
    { q: '(a) Explain the availability of civil legal aid and alternative methods of funding civil cases. [10]<br>(b) Analyse and evaluate whether there is adequate access to justice in England and Wales. [15]', m: 25, ms: ['LASPO scope — in and out', 'means and merits tests; ECF', 'LAA and CLA', 'CFAs — success fee, ATE insurance', 'DBAs, BTE, unions, pro bono, advice agencies', 'litigants in person; advice deserts', 'criminal legal aid fees — Bellamy', 'rule of law — UNISON', 'counter-arguments — cost, alternatives', 'conclusion'] }
  ],
  tools: ['legalaid', 'fundsort']
});

/* ---------- Section B tools ---------- */
TOOLS.adrsort = { type: 'sort', title: 'Which method of dispute resolution?', intro: 'Identify the method described.', cats: ['Negotiation', 'Mediation', 'Conciliation', 'Arbitration', 'Tribunal'], items: [
  ['The parties’ solicitors exchange offers by email and settle.', 'Negotiation', 'No third party.'],
  ['A neutral third party helps separating parents reach their own agreement about the children, without suggesting terms.', 'Mediation', 'Facilitative; not binding unless agreed.'],
  ['ACAS contacts both sides and suggests possible terms for settling an unfair dismissal claim.', 'Conciliation', 'The conciliator takes an active role.'],
  ['A construction contract says disputes go to an expert whose decision is final and enforceable.', 'Arbitration', 'Arbitration Act 1996; binding award.'],
  ['A judge and two lay members hear a claim for disability benefits.', 'Tribunal', 'First-tier Tribunal (Social Entitlement Chamber).'],
  ['A holiday company’s trade body scheme decides a customer’s complaint on the papers.', 'Arbitration', 'Consumer arbitration scheme.'],
  ['A one-hour free telephone session is arranged by HMCTS for a £3,000 claim.', 'Mediation', 'Small Claims Mediation Service.']
] };
TOOLS.appealroute = { type: 'tree', title: 'Find the appeal route', intro: 'Work out where a criminal appeal goes.', nodes: {
  start: { q: 'Where was the case tried?', o: [['Magistrates’ court', 'mag'], ['Crown Court', 'cc']] },
  mag: { q: 'Who wants to appeal, and on what?', o: [['The defendant — against conviction or sentence on the facts', 'mcc'], ['Either side — a point of law', 'mdc']] },
  mcc: { end: true, tone: 'good', v: 'Appeal to the Crown Court', x: 'As of right. A full rehearing before a judge and two magistrates. The Crown Court may confirm, reverse or vary the decision, and could increase the sentence.' },
  mdc: { end: true, tone: 'good', v: 'Case stated to the Divisional Court (KBD)', x: 'The magistrates state a case. The Divisional Court can confirm, reverse or vary, or send it back. Further appeal to the Supreme Court on a certified point of law of general public importance.' },
  cc: { q: 'Who wants to appeal?', o: [['The defendant', 'cd'], ['The prosecution', 'cp']] },
  cd: { q: 'Against what?', o: [['Conviction', 'cdc'], ['Sentence', 'cds']] },
  cdc: { end: true, tone: 'good', v: 'Court of Appeal (Criminal Division), with leave', x: 'The only ground: the conviction is <b>unsafe</b> (s2 Criminal Appeal Act 1968). The court may quash the conviction, order a retrial or substitute an alternative offence. Then the Supreme Court on a certified point of law. If appeals are exhausted: the CCRC.' },
  cds: { end: true, tone: 'good', v: 'Court of Appeal (Criminal Division), with leave', x: 'The court can reduce the sentence but cannot increase it on the defendant’s appeal.' },
  cp: { q: 'What does the prosecution want?', o: [['To challenge a sentence as too low', 'ulr'], ['To clarify a point of law after an acquittal', 'agr'], ['To retry an acquitted person with new evidence', 'dj'], ['To challenge a judge’s ruling that ended the case', 'term']] },
  ulr: { end: true, tone: 'good', v: 'Unduly lenient sentence reference', x: 'Within 28 days, via the Attorney General (s36 Criminal Justice Act 1988). The Court of Appeal can increase the sentence.' },
  agr: { end: true, tone: 'mid', v: 'Attorney General’s reference on a point of law', x: 'Section 36 Criminal Justice Act 1972. The Court of Appeal clarifies the law, but the acquittal stands.' },
  dj: { end: true, tone: 'mid', v: 'Double jeopardy application', x: 'For serious offences listed in the Criminal Justice Act 2003 Part 10, with DPP consent, if there is new and compelling evidence and a retrial is in the interests of justice.', cases: ['dobson'] },
  term: { end: true, tone: 'good', v: 'Appeal against a terminating ruling', x: 'Section 58 Criminal Justice Act 2003, to the Court of Appeal.' }
} };
TOOLS.bailtree = { type: 'tree', title: 'Should the court grant bail?', intro: 'Follow the Bail Act 1976 as a magistrates’ court would.', nodes: {
  start: { q: 'Is the defendant charged with murder?', o: [['Yes', 'murder'], ['No', 'rape']] },
  murder: { end: true, tone: 'mid', v: 'Only a Crown Court judge can grant bail', x: 'Coroners and Justice Act 2009 s115, and not unless there is no significant risk of the defendant committing an offence likely to cause physical or mental injury.' },
  rape: { q: 'Is the charge murder, manslaughter, rape or a similar serious offence, AND does the defendant have a previous conviction for such an offence?', o: [['Yes', 's25'], ['No', 'onbail']] },
  s25: { end: true, tone: 'bad', v: 'Bail only in exceptional circumstances', x: 'Section 25 Criminal Justice and Public Order Act 1994.' },
  onbail: { q: 'Was the offence allegedly committed while the defendant was already on bail?', o: [['Yes', 'onbail2'], ['No', 'grounds']] },
  onbail2: { end: true, tone: 'bad', v: 'Bail likely refused', x: 'Section 14 Criminal Justice Act 2003: bail may not be granted unless the court is satisfied there is no significant risk of further offending.' },
  grounds: { q: 'Are there substantial grounds for believing the defendant would fail to surrender, commit an offence on bail, or interfere with witnesses?', help: 'Consider the seriousness of the offence, character, previous convictions, community ties, previous bail record and the strength of the evidence (Schedule 1).', o: [['Yes — but conditions could manage the risk', 'cond'], ['Yes — and no conditions would be enough', 'refuse'], ['No', 'grant']] },
  cond: { end: true, tone: 'mid', v: 'Conditional bail', x: 'E.g. residence, reporting to the police, curfew with electronic tag, surrendering a passport, no contact with witnesses, a surety or security.' },
  refuse: { end: true, tone: 'bad', v: 'Remand in custody', x: 'The defendant is remanded. They can make one further full bail application and appeal to the Crown Court. Custody time limits apply.' },
  grant: { end: true, tone: 'good', v: 'Unconditional bail', x: 'The presumption in favour of bail (s4 Bail Act 1976) applies. Failing to surrender would be an offence under s6. The prosecution may appeal under the Bail (Amendment) Act 1993.' }
} };
TOOLS.aimsort = { type: 'sort', title: 'Which aim of sentencing?', intro: 'Match each sentence or comment to the aim it most clearly serves.', cats: ['Retribution', 'Deterrence', 'Rehabilitation', 'Protection', 'Reparation'], items: [
  ['A drug rehabilitation requirement in a community order.', 'Rehabilitation', 'Tackling the cause of offending.'],
  ['“This sentence will send a message to anyone thinking of joining a riot.”', 'Deterrence', 'General deterrence.'],
  ['An extended sentence for a dangerous violent offender.', 'Protection', 'Incapacitation.'],
  ['A compensation order to pay the victim for a smashed window.', 'Reparation', 'Making amends.'],
  ['A sentence set by the guideline’s starting point for the harm and culpability involved.', 'Retribution', 'Proportionate, just deserts.'],
  ['A driving disqualification for a dangerous driver.', 'Protection', 'Removes the ability to reoffend in that way.'],
  ['200 hours of unpaid work cleaning graffiti.', 'Reparation', 'Paying back the community (also punishment).'],
  ['A suspended sentence warning the offender what will happen if they reoffend.', 'Deterrence', 'Individual deterrence.']
] };
TOOLS.jurytree = { type: 'tree', title: 'Can this person sit on a jury?', intro: 'Apply the Juries Act 1974 (as amended).', nodes: {
  start: { q: 'Is the person aged 18 to 75 and on the electoral register?', o: [['Yes', 'res'], ['No', 'no1']] },
  no1: { end: true, tone: 'bad', v: 'Not eligible', x: 'Jurors must be 18–75 and registered to vote.' },
  res: { q: 'Have they lived in the UK for at least five years since age 13?', o: [['Yes', 'crim'], ['No', 'no2']] },
  no2: { end: true, tone: 'bad', v: 'Not eligible', x: 'The five-year residence rule.' },
  crim: { q: 'Criminal record?', o: [['Ever sentenced to 5 years or more in custody', 'dq'], ['Served a prison sentence, or had a suspended sentence or community order, in the last 10 years', 'dq'], ['Currently on bail', 'dq'], ['None of these', 'mental']] },
  dq: { end: true, tone: 'bad', v: 'Disqualified', x: 'Serving would be an offence.' },
  mental: { q: 'Do they lack capacity or have a mental disorder that disqualifies them?', o: [['Yes', 'dq2'], ['No', 'excuse']] },
  dq2: { end: true, tone: 'bad', v: 'Disqualified', x: 'Those lacking capacity cannot serve.' },
  excuse: { q: 'Do they have a good reason not to serve now (illness, caring, exams, a booked holiday)?', o: [['Yes', 'defer'], ['No', 'job']] },
  defer: { end: true, tone: 'mid', v: 'Eligible — may ask for deferral or discretionary excusal', x: 'Since 2003 there is no right to be excused; the court usually defers service to a more convenient time.' },
  job: { q: 'Are they a police officer, prosecutor or someone with a close link to a party or witness in this case?', o: [['Yes', 'bias'], ['No', 'yes']] },
  bias: { end: true, tone: 'mid', v: 'Eligible in general — but not for this trial', x: 'Police and lawyers can serve, but a close link to the prosecution may give an appearance of bias.', cases: ['abdroikov'] },
  yes: { end: true, tone: 'good', v: 'Eligible to serve', x: 'They go into the panel; 12 are chosen at random in court. Either side can challenge for cause.' }
} };
TOOLS.profsort = { type: 'sort', title: 'Solicitor, barrister or legal executive?', intro: 'Who does this describe?', cats: ['Solicitor', 'Barrister', 'Chartered legal executive'], items: [
  ['Must pass SQE1 and SQE2 and complete two years’ qualifying work experience.', 'Solicitor', 'Since 2021.'],
  ['Must join an Inn of Court and complete pupillage.', 'Barrister', 'Then seek tenancy in chambers.'],
  ['Bound by the cab-rank rule.', 'Barrister', 'Self-employed barristers must accept work within competence.'],
  ['Qualifies through CILEx, often while working and without a degree, specialising in one area.', 'Chartered legal executive', 'Regulated by CILEx Regulation.'],
  ['Regulated by the SRA; represented by the Law Society.', 'Solicitor', 'Separated by the LSA 2007.'],
  ['Most are self-employed, sharing chambers and a clerk.', 'Barrister', 'About 80%.'],
  ['Can work in a firm owned by a supermarket through an Alternative Business Structure.', 'Solicitor', 'LSA 2007.'],
  ['Can appear as of right in every court, from the magistrates’ court to the Supreme Court.', 'Barrister', 'Solicitors need higher rights for the senior courts.']
] };
TOOLS.jacsteps = { type: 'steps', title: 'How a judge is appointed', intro: 'The Judicial Appointments Commission process for a Circuit Judge vacancy.', steps: [
  { h: 'Vacancy request', html: '<p>The Lord Chancellor asks the JAC to fill vacancies. The JAC publishes the eligibility rules: for a Circuit Judge, a relevant qualification plus at least seven years gaining legal experience (TCEA 2007).</p>' },
  { h: 'Application', html: '<p>Anyone eligible can apply online — barristers, solicitors, and (for some posts) chartered legal executives. Previous judicial experience (e.g. as a Recorder) is often expected.</p>' },
  { h: 'Qualifying test', html: '<p>Online tests of situational judgement and critical analysis — scenarios about fairness, managing a courtroom and applying the law.</p>' },
  { h: 'Shortlisting and references', html: '<p>Candidates are sifted against the JAC’s competency framework (e.g. exercising judgement, possessing and building knowledge, assimilating and clarifying information, working and engaging with others, managing work efficiently). Independent assessors and referees comment.</p>' },
  { h: 'Selection day', html: '<p>A role play (e.g. dealing with a difficult litigant in person), a situational exercise and an interview with a panel including a lay member and a judge.</p>' },
  { h: 'Recommendation', html: '<p>The JAC selects <b>solely on merit</b>, applying the <b>equal merit</b> provision where two candidates are equally strong. It checks good character and consults senior judges. It recommends one candidate per vacancy.</p>' },
  { h: 'Lord Chancellor’s decision', html: '<p>The Lord Chancellor can accept the recommendation, reject it (once, with reasons) or ask the JAC to reconsider. In practice rejections are extremely rare.</p>' },
  { h: 'Appointment and training', html: '<p>Formally appointed (for Circuit Judges, by the King on the Lord Chancellor’s recommendation). Induction by the Judicial College, then continuing training. Holds office until 75, subject to removal for misbehaviour or incapacity.</p>' }
] };
TOOLS.legalaid = { type: 'tree', title: 'Can I get legal aid?', intro: 'A simplified guide to the LASPO 2012 scheme.', nodes: {
  start: { q: 'Is it a criminal or civil matter?', o: [['Criminal', 'cr'], ['Civil', 'cv']] },
  cr: { q: 'At what stage?', o: [['Being questioned at a police station', 'ps'], ['Charged and going to court', 'ioj']] },
  ps: { end: true, tone: 'good', v: 'Free legal advice — yes', x: 'Anyone detained has the right to free legal advice, not means-tested (s58 PACE), through the Duty Solicitor Scheme.' },
  ioj: { q: 'Is it in the interests of justice (e.g. risk of prison, a hard point of law, difficulty understanding the case, witnesses to cross-examine)?', o: [['Yes', 'means'], ['No', 'nocr']] },
  nocr: { end: true, tone: 'bad', v: 'Probably no representation order', x: 'For minor matters the defendant may use the court duty solicitor or pay privately.' },
  means: { q: 'Which court, and do they pass the means test?', o: [['Magistrates’ — under 18 or on a passporting benefit, or low income', 'crok'], ['Crown Court', 'crc'], ['Magistrates’ — income too high', 'crno']] },
  crok: { end: true, tone: 'good', v: 'Criminal legal aid granted', x: 'A representation order covers a solicitor (and a barrister where needed).' },
  crc: { end: true, tone: 'mid', v: 'Legal aid granted — contributions may be payable', x: 'Crown Court defendants automatically pass the interests of justice test but may pay contributions from income or capital; those with very high disposable income are not eligible.' },
  crno: { end: true, tone: 'bad', v: 'Pay privately or represent themselves', x: 'A common criticism: people just above the threshold cannot afford lawyers.' },
  cv: { q: 'Is the problem within the scope of LASPO?', o: [['Home at risk / homelessness', 'meritsm'], ['Family case with evidence of domestic abuse', 'meritsm'], ['Divorce or child arrangements without abuse', 'out'], ['Employment dispute (not discrimination)', 'out'], ['Contract or consumer dispute', 'out']] },
  out: { q: 'Would refusing funding breach a Convention right (e.g. Art 6 fair hearing)?', o: [['Possibly', 'ecf'], ['No', 'alt']] },
  ecf: { end: true, tone: 'mid', v: 'Apply for Exceptional Case Funding', x: 'Section 10 LASPO. Few applications succeed and the process is complex.' },
  alt: { end: true, tone: 'bad', v: 'No legal aid — look at alternatives', x: 'CFA or DBA, insurance, a trade union, Citizens Advice, a law centre or university clinic, pro bono help, mediation, or representing yourself.' },
  meritsm: { q: 'Does the applicant pass the means test (income and capital) and the merits test (reasonable prospects of success; benefit justifies cost)?', o: [['Yes', 'cvok'], ['No', 'alt']] },
  cvok: { end: true, tone: 'good', v: 'Civil legal aid likely', x: 'Provided by a firm or organisation with an LAA contract. The client may have to contribute, and the statutory charge can take back costs from money or property recovered.' }
} };
TOOLS.fundsort = { type: 'sort', title: 'Match the funding method', intro: 'Which source of funding or advice fits each description?', cats: ['Civil legal aid', 'Criminal legal aid', 'CFA', 'Trade union', 'Pro bono / advice agency'], items: [
  ['A tenant facing eviction passes the means and merits tests.', 'Civil legal aid', 'Housing where the home is at risk is in scope.'],
  ['A lawyer agrees to take no fee if a personal injury claim fails, and a success fee if it wins.', 'CFA', 'Courts and Legal Services Act 1990 s58.'],
  ['A nurse injured at work gets her claim funded through her membership.', 'Trade union', 'Unions fund members’ employment and injury claims.'],
  ['A student law clinic helps a consumer write a letter before claim for free.', 'Pro bono / advice agency', 'University clinics and LawWorks.'],
  ['A teenager charged with robbery is granted a representation order.', 'Criminal legal aid', 'Interests of justice and means tests.'],
  ['Citizens Advice helps someone with benefit debts.', 'Pro bono / advice agency', 'Free advice charity.']
] };
