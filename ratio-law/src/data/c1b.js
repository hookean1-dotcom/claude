/* ==========================================================
   COMPONENT 1 · SECTION B — THE ENGLISH LEGAL SYSTEM (1.2.1 – 1.2.2)
   ========================================================== */
addCases([
  { id: 'halsey', n: 'Halsey v Milton Keynes General NHS Trust', y: 2004, a: '1B', t: '1.2.1b', c: 'CA', f: 'A widow claimed her husband’s death was caused by hospital negligence; the hospital refused mediation and won at trial.', p: 'Courts cannot compel ADR (a view later overruled), but a party who unreasonably refuses ADR may be penalised in costs, even if it wins.' },
  { id: 'churchill', n: 'Churchill v Merthyr Tydfil County Borough Council', y: 2023, a: '1B', t: '1.2.1b', c: 'CA', f: 'Mr Churchill sued the council in nuisance over Japanese knotweed spreading from its land, without using the council’s complaints procedure.', p: 'Courts can lawfully order parties to engage in ADR, or stay proceedings for it, provided this does not impair the essence of the right to a fair trial and is proportionate. Led to CPR changes in October 2024.' },
  { id: 'dunnett', n: 'Dunnett v Railtrack', y: 2002, a: '1B', t: '1.2.1b', c: 'CA', f: 'Railtrack refused an offer of ADR suggested by the court and then won the appeal.', p: 'Railtrack was denied its costs because it had unreasonably refused to consider ADR.' },
  { id: 'cart', n: 'R (Cart) v Upper Tribunal', y: 2011, a: '1B', t: '1.2.1b', c: 'UKSC', f: 'A claimant sought judicial review of the Upper Tribunal’s refusal of permission to appeal.', p: 'Such decisions could be judicially reviewed only on narrow grounds (an important point of principle or other compelling reason). Section 2 Judicial Review and Courts Act 2022 later removed “Cart” judicial reviews altogether.' },
  { id: 'abdroikov', n: 'R v Abdroikov', y: 2007, a: '1B', t: '1.2.2d', c: 'HL', f: 'In three appeals, juries included a police officer, a police officer who knew a prosecution witness, and a CPS solicitor.', p: 'Since 2003 police and lawyers can serve on juries, but where a juror has a close link to the prosecution there may be an appearance of bias. Two convictions were quashed.' },
  { id: 'mirza', n: 'R v Mirza; R v Connor and Rollock', y: 2004, a: '1B', t: '1.2.2d', c: 'HL', f: 'After conviction, jurors wrote alleging other jurors had shown racial prejudice or wanted to convict to get home quickly.', p: 'The courts cannot inquire into what was said in the jury room: jury secrecy is essential. Evidence of outside influence is different.' },
  { id: 'young', n: 'R v Young', y: 1995, a: '1B', t: '1.2.2d', c: 'CA', f: 'In a double murder trial, some jurors used a Ouija board in their hotel overnight to “contact” one of the victims.', p: 'The conviction was quashed and a retrial ordered. Because it happened in the hotel, not the jury room, the court could investigate it.' },
  { id: 'fraill', n: 'Attorney General v Fraill', y: 2011, a: '1B', t: '1.2.2d', c: 'Divisional Court', f: 'A juror contacted an acquitted defendant on Facebook during a drugs trial and discussed the case.', p: 'Contempt of court: the juror was jailed for eight months. The trial collapsed at great cost. Now an offence under the Juries Act 1974 (as amended in 2015).' },
  { id: 'dallas', n: 'Attorney General v Dallas', y: 2012, a: '1B', t: '1.2.2d', c: 'Divisional Court', f: 'A juror researched the defendant online, found he had been accused of rape before, and told other jurors.', p: 'Jailed for six months for contempt. Led to specific offences of juror research and sharing information (Criminal Justice and Courts Act 2015).' },
  { id: 'bushell', n: 'Bushell’s Case', y: 1670, a: '1B', t: '1.2.2d', c: 'Court of Common Pleas', f: 'Jurors refused to convict Quakers William Penn and William Mead of unlawful assembly and were imprisoned by the judge.', p: 'Jurors cannot be punished for their verdict; they are the sole judges of fact. The foundation of “jury equity”.' },
  { id: 'ponting', n: 'R v Ponting', y: 1985, a: '1B', t: '1.2.2d', c: 'Crown Court', f: 'A civil servant leaked documents about the sinking of the General Belgrano. The judge said there was no defence under the Official Secrets Act 1911.', p: 'The jury acquitted anyway — jury equity. Parliament responded with the Official Secrets Act 1989.' },
  { id: 'twomey', n: 'R v Twomey', y: 2009, a: '1B', t: '1.2.2d', c: 'CA', f: 'Three earlier trials for an armed robbery at Heathrow collapsed, one because of serious attempted jury tampering.', p: 'The first Crown Court trial without a jury in England and Wales for over 350 years was ordered under s44 Criminal Justice Act 2003.' },
  { id: 'gregory', n: 'Gregory v United Kingdom', y: 1997, a: '1B', t: '1.2.2d', c: 'ECtHR', f: 'During a robbery trial of a black defendant, a juror passed a note saying “Jury showing racial overtones. 1 member to be excused”. The judge gave a warning instead.', p: 'No breach of Art 6: the judge’s clear redirection was enough. Contrast Sander v UK (2000), where racist jokes by jurors meant the trial was unfair.' },
  { id: 'hanson', n: 'R v Aramah', y: 1982, a: '1B', t: '1.2.2c', c: 'CA', f: 'An appeal against sentence for importing cannabis.', p: 'A guideline judgment: the Court of Appeal set out sentencing guidance for drug offences to be followed by lower courts. Guideline judgments were later replaced by Sentencing Council guidelines.' },
  { id: 'killick', n: 'R v Killick', y: 2011, a: '1B', t: '1.2.2b', c: 'CA', f: 'The CPS decided not to prosecute for sexual offences, then reversed its decision after the complainants complained. The defendant argued this was an abuse of process.', p: 'Victims have a right to seek a review of a decision not to prosecute. Led to the CPS Victims’ Right to Review scheme (2013).' },
  { id: 'dobson', n: 'R v Dobson', y: 2011, a: '1B', t: '1.2.2a', c: 'CA', f: 'Gary Dobson had been acquitted of Stephen Lawrence’s murder in 1996. New scientific evidence (fibres and a blood spot) emerged.', p: 'The Court of Appeal quashed the acquittal under Part 10 Criminal Justice Act 2003 (new and compelling evidence); Dobson and David Norris were convicted in 2012.' }
]);

/* ---------- 1.2.1a Civil courts ---------- */
TOPICS.push({
  id: '1.2.1a', unit: '1B', ref: '1.2.1', title: 'Civil courts and the civil process',
  short: 'Woolf reforms, CPR 1998, tracks, County Court and High Court, civil appeals',
  summary: 'Civil disputes are between individuals or organisations — contract, tort, family, property. The claimant sues to obtain a remedy, usually damages, and must prove the case on the balance of probabilities. This topic covers the civil courts, their powers and appeal routes, how a claim progresses under the Civil Procedure Rules, and whether the system delivers justice.',
  spec: ['The civil process: pre-action protocols, issuing a claim, defending, allocation to a track', 'The Woolf reforms and the Civil Procedure Rules 1998: the overriding objective and case management', 'Civil courts: County Court and High Court — structure, powers and jurisdiction', 'Appellate functions: appeal routes to the Court of Appeal and Supreme Court', 'Evaluation: cost, delay, complexity; later reforms (Jackson, online court, intermediate track)'],
  learn: [
    { h: 'Civil and criminal law', html: `
<div class="tbl"><table><tr><th></th><th>Civil</th><th>Criminal</th></tr>
<tr><td>Purpose</td><td>Resolve disputes; compensate</td><td>Punish offenders; protect society</td></tr>
<tr><td>Parties</td><td>Claimant v defendant</td><td>Prosecution (R — the Crown) v defendant</td></tr>
<tr><td>Standard of proof</td><td>Balance of probabilities</td><td>Beyond reasonable doubt</td></tr>
<tr><td>Outcome</td><td>Liable / not liable; remedies (damages, injunctions)</td><td>Guilty / not guilty; sentence</td></tr>
<tr><td>Courts</td><td>County Court, High Court</td><td>Magistrates’ courts, Crown Court</td></tr></table></div>` },
    { h: 'The Woolf reforms', html: `
<p>Lord Woolf’s report <i>Access to Justice</i> (1996) found the civil system was too <b>expensive</b>, too <b>slow</b>, too <b>complex</b> and too <b>adversarial</b>, with parties (not judges) controlling the pace. His recommendations became the <b>Civil Procedure Rules 1998</b> (in force April 1999).</p>
<div class="box def"><b class="lbl">The overriding objective (CPR r1.1)</b><p>To enable the court to deal with cases <b>justly and at proportionate cost</b>: ensuring the parties are on an equal footing, saving expense, dealing with cases proportionately to the money involved, importance and complexity, dealing with them expeditiously and fairly, allotting a fair share of court resources, and enforcing compliance with the rules. Since October 2024 it also includes promoting or using ADR.</p></div>
<ul><li><b>Pre-action protocols</b> — parties must exchange information and try to settle before issuing a claim.</li>
<li><b>Judicial case management</b> — judges set timetables and can strike out claims or impose costs sanctions.</li>
<li><b>Tracks</b> — small claims, fast track and multi-track (plus the intermediate track since October 2023).</li>
<li><b>Part 36 offers</b> — costs penalties for a party who refuses a reasonable settlement offer.</li>
<li>Plain English: “claimant” instead of “plaintiff”; “claim form” instead of “writ”.</li></ul>` },
    { h: 'Starting and defending a claim', html: `
<ol><li><b>Pre-action protocol</b>: a letter of claim; the defendant replies; exchange of documents; consider ADR.</li>
<li><b>Issuing</b>: a claim form (N1) is issued in the County Court (or online through Money Claims Online / Online Civil Money Claims), with a court fee based on the value.</li>
<li><b>Response</b>: the defendant can admit, file a defence within 14 days (28 if an acknowledgment of service is filed), or counterclaim. If they do nothing, the claimant can get <b>default judgment</b>.</li>
<li><b>Allocation</b>: if defended, the parties complete a directions questionnaire and a judge allocates the case to a track.</li>
<li><b>Directions, disclosure, witness statements, expert reports</b>, then <b>trial</b> — unless the case settles (most do).</li>
<li><b>Enforcement</b>: if the loser does not pay — warrants of control (bailiffs), attachment of earnings, charging orders.</li></ol>` },
    { h: 'The tracks', html: `
<div class="tbl"><table><tr><th>Track</th><th>Typical value</th><th>Features</th></tr>
<tr><td><b>Small claims</b></td><td>Up to £10,000 (personal injury and housing disrepair: £1,000; road traffic whiplash: £5,000)</td><td>District Judge; informal hearing; parties usually represent themselves; limited costs recoverable. Free HMCTS mediation (compulsory for most money claims since May 2024)</td></tr>
<tr><td><b>Fast track</b></td><td>£10,000 – £25,000</td><td>Circuit or District Judge; trial of up to one day; strict timetable; fixed recoverable costs</td></tr>
<tr><td><b>Intermediate track</b></td><td>£25,000 – £100,000</td><td>Since October 2023; trial up to three days; limited expert evidence; fixed recoverable costs</td></tr>
<tr><td><b>Multi-track</b></td><td>Over £100,000, or complex</td><td>Case management conferences; costs budgeting; High Court or County Court</td></tr></table></div>
<p>Use the <b>Explore</b> tab to allocate claims.</p>` },
    { h: 'The civil courts and appeals', html: `
<ul><li><b>County Court</b> — a single national court (since 2014) sitting in local hearing centres. Hears most civil claims: contract, tort, debt, housing, consumer claims. Judges: District Judges and Circuit Judges.</li>
<li><b>High Court</b> — three divisions: the <b>King’s Bench Division</b> (renamed from Queen’s Bench in 2022; contract and tort; includes the Administrative Court for judicial review and specialist courts in the Business and Property Courts), the <b>Chancery Division</b> (trusts, wills, companies, insolvency, intellectual property) and the <b>Family Division</b>. Claims over £100,000 (£50,000 for personal injury) may start here. Each division has a <b>Divisional Court</b> hearing some appeals and judicial review.</li></ul>
<div class="tbl"><table><tr><th>Decision of</th><th>Appeal to</th></tr>
<tr><td>District Judge (County Court)</td><td>Circuit Judge</td></tr>
<tr><td>Circuit Judge</td><td>High Court judge (or the Court of Appeal for some multi-track claims)</td></tr>
<tr><td>High Court</td><td>Court of Appeal (Civil Division); in rare cases “leapfrog” to the Supreme Court</td></tr>
<tr><td>Court of Appeal</td><td>Supreme Court — with permission, on a point of law of general public importance</td></tr></table></div>
<p>Permission to appeal is almost always needed. A <b>second appeal</b> needs an important point of principle or practice, or another compelling reason (Access to Justice Act 1999 s55).</p>` },
    { h: 'Evaluating the civil justice system', html: `
<p><b>Improvements since Woolf:</b> fewer claims issued and more early settlements; pre-action protocols encourage cooperation; judges control timetables; the small claims track gives cheap access to justice; fixed costs make fees more predictable (Jackson reforms 2013, extended 2023); online money claims.</p>
<p><b>Continuing problems:</b> <b>cost</b> — litigation remains expensive and costs can exceed the value of the claim; <b>delay</b> — in 2024–25 small claims and fast track claims took well over a year to reach trial on average; <b>complexity</b> — the CPR run to hundreds of pages; the rise in <b>litigants in person</b> after legal aid cuts (LASPO 2012) creates an inequality of arms; courts closed and court staff reduced; Lord Briggs’ online court (2016) only partly implemented.</p>` }
  ],
  debate: [{ q: 'Have the Woolf reforms delivered access to justice?', for: ['Cases settle earlier; pre-action protocols encourage cooperation.', 'Judicial case management reduced some delays.', 'Small claims track is cheap and informal.', 'Plain English and simpler forms.'], ag: ['Costs “front-loaded” — pre-action work is expensive.', 'Delays have grown again; court backlogs.', 'Complexity remains; litigants in person struggle.', 'Lord Justice Jackson (2010) found costs still disproportionate.'] }],
  cases: [],
  worked: [{ q: '<b>Scenario.</b> Priya’s kitchen was badly fitted by BuildRight Ltd. It will cost £18,000 to fix. Advise Priya on the civil process and which court and track will hear her claim.', s: ['<b class="st">Pre-action</b>Priya must follow the pre-action conduct rules: send a letter of claim, give BuildRight time to respond and consider ADR such as mediation.', '<b class="st">Issue</b>She issues a claim form in the County Court (online if possible), paying a fee based on £18,000.', '<b class="st">Track</b>If defended, a judge allocates it. At £18,000 it is likely to go to the fast track (£10,000–£25,000): trial within about 30 weeks, lasting no more than a day, with fixed costs.', '<b class="st">Appeal</b>If she loses, she needs permission to appeal from a District Judge to a Circuit Judge (or from a Circuit Judge to a High Court judge).', '<b class="st">Evaluate</b>She may face delay and legal costs; if she is not represented, the case may be hard to run against a company with lawyers.'], a: 'County Court, fast track.' }],
  pitfalls: ['Mixing up civil and criminal terminology (“prosecute”, “guilty” in a civil case).', 'Stating out-of-date track limits: small claims are £10,000; intermediate track £25,000–£100,000.', 'Calling the King’s Bench Division the Queen’s Bench Division after 2022.', 'Describing appeals without saying permission is needed.'],
  cards: [
    ['Who wrote “Access to Justice” (1996)?', 'Lord Woolf.'],
    ['Four problems Woolf identified?', 'Expensive, slow, complex, too adversarial.'],
    ['What is the overriding objective?', 'To deal with cases justly and at proportionate cost (CPR r1.1).'],
    ['Small claims track limit?', '£10,000 (personal injury and housing disrepair £1,000; road traffic whiplash £5,000).'],
    ['Fast track range?', '£10,000 to £25,000; trial of up to one day.'],
    ['Intermediate track?', '£25,000 to £100,000, since October 2023; trial of up to three days.'],
    ['What is a pre-action protocol?', 'Steps parties must take before issuing a claim: exchanging information and considering settlement or ADR.'],
    ['Three divisions of the High Court?', 'King’s Bench, Chancery, Family.'],
    ['What is default judgment?', 'Judgment for the claimant when the defendant fails to respond to the claim.'],
    ['Appeal from the Court of Appeal (Civil Division)?', 'To the Supreme Court, with permission, on a point of law of general public importance.'],
    ['Standard of proof in civil cases?', 'On the balance of probabilities.']
  ],
  quiz: [
    { q: 'A defended claim worth £7,500 for faulty goods will normally be allocated to…', o: ['the small claims track', 'the fast track', 'the intermediate track', 'the multi-track'], x: 'Up to £10,000.' },
    { q: 'The Civil Procedure Rules came into force as a result of…', o: ['the Woolf Report', 'the Jackson Review', 'the Leggatt Report', 'the Auld Review'], x: 'In force April 1999.' },
    { q: 'The overriding objective requires cases to be dealt with…', o: ['justly and at proportionate cost', 'as cheaply as possible', 'only by trial', 'without judicial involvement'], x: 'CPR r1.1.' },
    { q: 'Which division of the High Court deals mainly with contract and tort claims?', o: ['King’s Bench Division', 'Chancery Division', 'Family Division', 'Admiralty Division'], x: 'Renamed from Queen’s Bench in 2022.' },
    { q: 'The intermediate track, introduced in 2023, covers claims of…', o: ['£25,000 – £100,000', '£10,000 – £25,000', 'up to £10,000', 'over £1 million'], x: 'With fixed recoverable costs.' },
    { q: 'Which is a criticism of the civil justice system today?', o: ['Delays and the number of litigants in person', 'Too many small claims hearings are held in the Supreme Court', 'Judges cannot manage cases', 'There is no appeal system'], x: 'Legal aid cuts increased self-representation.' },
    { q: 'The standard of proof in a civil claim is…', o: ['on the balance of probabilities', 'beyond reasonable doubt', 'on the evidence as a whole', 'certainty'], x: 'More likely than not.' },
    { q: 'A “leapfrog” appeal goes directly from…', o: ['the High Court to the Supreme Court', 'the County Court to the Court of Appeal', 'the magistrates to the Supreme Court', 'a tribunal to the Privy Council'], x: 'Skipping the Court of Appeal.' }
  ],
  exam: [
    { q: 'Explain the three main tracks used in civil cases. [5]', m: 5, ms: ['allocation by a judge after a defence — directions questionnaire', 'small claims — up to £10,000; informal; DJ', 'fast track — £10,000–£25,000; one-day trial; fixed costs', 'multi-track — over £100,000 / complex; case management', 'intermediate track (2023) / factors other than value'] },
    { q: '(a) Explain the civil courts’ structure and appeal routes. [10]<br>(b) Analyse and evaluate whether the civil courts provide access to justice. [15]', m: 25, ms: ['County Court and High Court (three divisions) jurisdiction', 'appeal routes and permission; Supreme Court', 'Woolf reforms; CPR; overriding objective', 'tracks and case management', 'positive: settlement, small claims, online claims', 'cost remains high; proportionality', 'delay and backlogs', 'litigants in person after LASPO', 'ADR as an alternative', 'conclusion'] }
  ],
  tools: ['track']
});

/* ---------- 1.2.1b Tribunals and ADR ---------- */
TOPICS.push({
  id: '1.2.1b', unit: '1B', ref: '1.2.1', title: 'Tribunals, arbitration and ADR',
  short: 'Tribunals Courts and Enforcement Act 2007, negotiation, mediation, conciliation, arbitration',
  summary: 'Most disputes never reach a courtroom. Tribunals decide hundreds of thousands of cases a year on employment, benefits, immigration and tax. Alternative dispute resolution — negotiation, mediation, conciliation and arbitration — offers cheaper, quicker, more private routes. You need to explain how each works and weigh its advantages against its disadvantages, including the recent shift towards compulsory ADR.',
  spec: ['Development of tribunals: Franks Report, Leggatt Review, Tribunals, Courts and Enforcement Act 2007', 'Structure: First-tier Tribunal, Upper Tribunal, Employment Tribunals', 'Role and control of tribunals; appeals and judicial review', 'Negotiation, mediation and conciliation', 'Arbitration within and outside the court system: Arbitration Act 1996', 'Advantages and disadvantages of tribunals and ADR; courts encouraging and ordering ADR'],
  learn: [
    { h: 'Tribunals: development', html: `
<p>Tribunals grew with the welfare state after 1945 to decide disputes about social rights (benefits, rents, employment) quickly and cheaply, using experts. By 2000 there were over 70 different tribunals, each run separately.</p>
<ul><li><b>Franks Report (1957)</b>: tribunals should be <b>open, fair and impartial</b>; led to the Council on Tribunals.</li>
<li><b>Leggatt Review (2001)</b>, <i>Tribunals for Users: One System, One Service</i>: the system was confusing and not independent enough (tribunals were often run by the department whose decisions they reviewed).</li>
<li><b>Tribunals, Courts and Enforcement Act 2007</b>: created a unified two-tier structure led by the <b>Senior President of Tribunals</b>, administered by HM Courts & Tribunals Service; tribunal judges became part of the judiciary.</li></ul>` },
    { h: 'Structure and control', html: `
<div class="tbl"><table><tr><th>Tier</th><th>Chambers / examples</th></tr>
<tr><td><b>First-tier Tribunal</b></td><td>Social Entitlement (benefits, criminal injuries compensation), Immigration and Asylum, Tax, Property, Health Education and Social Care (mental health, special educational needs), General Regulatory, War Pensions</td></tr>
<tr><td><b>Upper Tribunal</b></td><td>Hears appeals on points of law from the First-tier Tribunal; four chambers; some judicial review functions. Its decisions create precedent</td></tr>
<tr><td><b>Employment Tribunals and Employment Appeal Tribunal</b></td><td>Outside the two tiers but part of the same system: unfair dismissal, discrimination, redundancy pay</td></tr></table></div>
<p>A tribunal panel usually has a <b>tribunal judge</b> (legally qualified) and may have two <b>lay members</b> with expertise (e.g. a doctor, or employer and employee representatives in employment cases).</p>
<p><b>Control:</b> appeals on points of law go from the Upper Tribunal to the Court of Appeal. The Administrative Justice and Tribunals Council (successor to the Council on Tribunals) was abolished in 2013. Judicial review of Upper Tribunal refusals of permission ([[c:cart]]) was ended by the Judicial Review and Courts Act 2022 s2.</p>` },
    { h: 'Tribunals: advantages and disadvantages', html: `
<div class="debate"><div class="for"><h5>Advantages</h5><ul><li>Cheaper: usually no fee (employment tribunal fees were abolished after [[c:unison]]); parties often represent themselves</li><li>Quicker than courts; informal hearings</li><li>Expert lay members</li><li>Independent since 2007; clear appeal route</li><li>Less formal, less intimidating</li></ul></div><div class="ag"><h5>Disadvantages</h5><ul><li>Legal aid is rarely available — an inequality of arms when an employer or government department has lawyers</li><li>Delays and backlogs, especially immigration and employment</li><li>Less formal can mean less consistent; limited precedent below the Upper Tribunal</li><li>Hearings can still feel legalistic</li></ul></div></div>` },
    { h: 'Negotiation, mediation and conciliation', html: `
<ul><li><b>Negotiation</b> — the parties (or their lawyers) try to settle between themselves. Private, free, flexible; but depends on goodwill and can be unequal.</li>
<li><b>Mediation</b> — a neutral <b>mediator</b> helps the parties reach their own agreement. The mediator does not impose a decision or usually suggest one. Any agreement can be made binding as a contract. Used in family disputes (a Mediation Information and Assessment Meeting is normally required before applying to court about children or finances), neighbour and commercial disputes. The free HMCTS <b>Small Claims Mediation Service</b> (one-hour telephone session) is compulsory for most specified money claims up to £10,000 since May 2024.</li>
<li><b>Conciliation</b> — like mediation, but the <b>conciliator</b> plays a more active role and may suggest grounds for settlement. <b>ACAS early conciliation</b> has been compulsory before most employment tribunal claims since 2014.</li></ul>` },
    { h: 'Arbitration', html: `
<p><b>Arbitration</b> is the most formal type of ADR: the parties agree that their dispute will be decided by an independent <b>arbitrator</b>, whose decision (the <b>award</b>) is <b>binding</b> and enforceable through the courts. It is governed by the <b>Arbitration Act 1996</b> (updated by the Arbitration Act 2025).</p>
<ul><li>Parties usually agree in advance through an <b>arbitration clause</b> (a “Scott v Avery clause”) in their contract; if one party sues in court anyway, the court will normally stay the proceedings (s9).</li>
<li>The parties choose the arbitrator (often an expert from the Chartered Institute of Arbitrators), the place, the procedure and whether there is a hearing or a “paper” arbitration.</li>
<li>The tribunal must act fairly and impartially (s33).</li>
<li>Very limited appeals: challenges for lack of jurisdiction (s67), serious irregularity (s68), or on a point of law if the parties have not excluded it (s69).</li></ul>
<p><b>Within the court system:</b> the courts enforce awards (s66), stay litigation in favour of arbitration and hear limited challenges. The County Court small claims procedure began in 1973 as “small claims arbitration”. <b>Outside the court system:</b> commercial and international arbitration (London is a leading centre), and consumer schemes run by trade bodies (e.g. travel industry schemes).</p>
<p><b>For:</b> binding and enforceable; expert decision-maker; private; parties control the process; often quicker. <b>Against:</b> can be expensive (arbitrator’s and venue fees); few appeal rights; no legal aid; unequal bargaining power if clauses are imposed on consumers (the Consumer Rights Act 2015 treats compulsory arbitration clauses for small consumer claims as unfair).</p>` },
    { h: 'Courts and ADR', html: `
<p>The courts increasingly push parties towards ADR. In [[c:dunnett]] and [[c:halsey]] a winning party lost its costs for unreasonably refusing ADR, though Halsey said the court could not compel ADR. In [[c:churchill]] (2023) the Court of Appeal held that courts <b>can order</b> parties to engage in ADR. Since October 2024 the CPR expressly allow courts to order ADR, and the overriding objective includes promoting it.</p>
<p><b>Evaluation:</b> ADR saves court time and costs and preserves relationships, but critics argue that compulsion may deny access to the courts (Art 6), that weaker parties may accept poor settlements, and that private settlements do not develop the law through precedent.</p>` }
  ],
  debate: [{ q: 'Should ADR be compulsory before going to court?', for: ['Most disputes can settle — saves court time and public money.', 'Cheaper and quicker; reduces backlogs.', 'Preserves relationships (neighbours, employers, families).', 'Churchill (2023): orders to mediate are compatible with Art 6 if proportionate.'], ag: ['Forcing parties into ADR may deny access to justice.', 'Power imbalances: a weaker party may accept an unfair deal.', 'Adds cost and delay if ADR fails.', 'Private settlements do not create precedent or publicly vindicate rights.'] }],
  cases: ['halsey', 'dunnett', 'churchill', 'cart', 'unison'],
  worked: [],
  pitfalls: ['Confusing mediation (mediator facilitates) with conciliation (conciliator suggests solutions) and arbitration (arbitrator decides).', 'Saying mediation decisions are binding — only an agreement the parties sign is.', 'Saying arbitration awards can be appealed like court decisions — appeals are very limited.', 'Forgetting that legal aid is generally not available for tribunals.'],
  cards: [
    ['Which Act created the First-tier and Upper Tribunals?', 'Tribunals, Courts and Enforcement Act 2007.'],
    ['What did the Leggatt Review (2001) recommend?', 'A single, independent tribunal system — “One System, One Service”.'],
    ['Who heads the tribunal judiciary?', 'The Senior President of Tribunals.'],
    ['Mediation vs conciliation?', 'A mediator facilitates the parties’ own agreement; a conciliator takes a more active role and suggests solutions.'],
    ['What is ACAS early conciliation?', 'A compulsory step (since 2014) before most employment tribunal claims.'],
    ['Which Act governs arbitration?', 'Arbitration Act 1996 (updated by the Arbitration Act 2025).'],
    ['What is a Scott v Avery clause?', 'A clause in a contract requiring disputes to be sent to arbitration.'],
    ['Halsey v Milton Keynes (2004)?', 'Unreasonable refusal of ADR can lead to a costs penalty.'],
    ['Churchill v Merthyr Tydfil (2023)?', 'Courts can order parties to engage in ADR if proportionate.'],
    ['Can an arbitration award be appealed?', 'Only on limited grounds: jurisdiction (s67), serious irregularity (s68), point of law (s69).']
  ],
  quiz: [
    { q: 'In which form of ADR does a neutral third party make a binding decision?', o: ['Arbitration', 'Mediation', 'Conciliation', 'Negotiation'], x: 'The award is enforceable through the courts.' },
    { q: 'The Leggatt Review of tribunals led to…', o: ['the Tribunals, Courts and Enforcement Act 2007', 'the Arbitration Act 1996', 'the Civil Procedure Rules', 'LASPO 2012'], x: 'A unified two-tier system.' },
    { q: 'Before most employment tribunal claims, the claimant must first use…', o: ['ACAS early conciliation', 'arbitration', 'the small claims track', 'the Upper Tribunal'], x: 'Compulsory since 2014.' },
    { q: 'In Churchill v Merthyr Tydfil (2023) the Court of Appeal held that…', o: ['courts can order parties to engage in ADR', 'courts can never compel ADR', 'mediation is binding', 'arbitration awards cannot be enforced'], x: 'Moved on from Halsey.' },
    { q: 'Which is a disadvantage of tribunals?', o: ['Legal aid is rarely available', 'They are more formal than the Crown Court', 'They have no expert members', 'They charge high fees in every case'], x: 'Inequality of arms.' },
    { q: 'Appeals from the First-tier Tribunal on a point of law go to…', o: ['the Upper Tribunal', 'the Crown Court', 'the County Court', 'the magistrates’ court'], x: 'Then to the Court of Appeal.' },
    { q: 'A mediator’s role is to…', o: ['help the parties reach their own agreement', 'impose a binding decision', 'act as the judge', 'represent one side'], x: 'Facilitative.' },
    { q: 'Since May 2024, most small money claims up to £10,000 must first go to…', o: ['a free HMCTS mediation session', 'arbitration', 'a tribunal', 'the High Court'], x: 'Small Claims Mediation Service.' }
  ],
  exam: [
    { q: 'Explain the role of arbitration as a method of dispute resolution. [5]', m: 5, ms: ['independent arbitrator decides; award binding', 'Arbitration Act 1996; arbitration clause / Scott v Avery', 'parties choose arbitrator, procedure, venue', 'court enforcement; limited challenge (ss67–69)', 'example — commercial / consumer schemes'] },
    { q: 'Analyse and evaluate the use of alternative dispute resolution in civil disputes. [15]', m: 15, ms: ['forms of ADR distinguished', 'cheaper and quicker than court', 'private; preserves relationships', 'expertise (arbitration)', 'no precedent; power imbalance', 'mediation not binding; may fail and add cost', 'arbitration costs; limited appeal', 'courts’ encouragement — Dunnett, Halsey, Churchill, CPR 2024', 'compulsory small claims mediation', 'conclusion'] }
  ],
  tools: ['adrsort']
});

/* ---------- 1.2.2a Criminal courts and appeals ---------- */
TOPICS.push({
  id: '1.2.2a', unit: '1B', ref: '1.2.2', title: 'Criminal courts and appeals',
  short: 'Classification of offences, magistrates’ and Crown Court powers, appeal routes, CCRC',
  summary: 'Every criminal case starts in the magistrates’ court. Where it is tried depends on whether the offence is summary, triable either way or indictable only. This topic covers the powers of the magistrates’ courts and Crown Court, the pre-trial procedure, and the routes of appeal for both the defence and the prosecution.',
  spec: ['Classification of offences: summary, triable either way, indictable', 'Powers of the magistrates’ courts and Crown Court; pre-trial procedure (plea before venue, allocation, sending)', 'Appeals from the magistrates’ court: to the Crown Court; by case stated to the Divisional Court', 'Appeals from the Crown Court to the Court of Appeal (Criminal Division) and Supreme Court', 'Prosecution appeals; Attorney General’s references; double jeopardy; the Criminal Cases Review Commission', 'Court of Appeal and Sentencing Council guidelines'],
  learn: [
    { h: 'Classification of offences', html: `
<div class="tbl"><table><tr><th>Type</th><th>Where tried</th><th>Examples</th></tr>
<tr><td><b>Summary</b></td><td>Magistrates’ court only</td><td>Most driving offences, common assault and battery, criminal damage under £5,000</td></tr>
<tr><td><b>Triable either way</b></td><td>Magistrates’ court or Crown Court</td><td>Theft, assault occasioning ABH (s47), s20 wounding/GBH, burglary (most), fraud</td></tr>
<tr><td><b>Indictable only</b></td><td>Crown Court only (first hearing in the magistrates’ court)</td><td>Murder, manslaughter, rape, robbery, s18 wounding/GBH with intent</td></tr></table></div>` },
    { h: 'Pre-trial procedure', html: `
<ul><li><b>Summary offences</b>: the defendant pleads at the first hearing; if not guilty, a trial is fixed in the magistrates’ court.</li>
<li><b>Either-way offences</b>: <b>plea before venue</b> — the defendant indicates a plea. If guilty, the magistrates sentence or commit to the Crown Court for sentence. If not guilty, there is an <b>allocation</b> hearing: the magistrates decide if the case is suitable for summary trial (considering the Sentencing Council allocation guideline and their powers). If they accept jurisdiction, the defendant can still <b>elect</b> jury trial in the Crown Court.</li>
<li><b>Indictable offences</b>: sent straight to the Crown Court (s51 Crime and Disorder Act 1998). The first Crown Court hearing is the <b>Plea and Trial Preparation Hearing</b>.</li></ul>` },
    { h: 'The courts and their powers', html: `
<p><b>Magistrates’ courts</b> deal with over 90% of criminal cases. They are staffed by lay magistrates (a bench of two or three) or a District Judge, advised by a legal adviser. Powers: up to <b>six months’</b> imprisonment for one summary offence, and up to <b>12 months</b> for a single either-way offence (restored in November 2024); unlimited fines (since 2015); community orders. They also deal with bail, warrants and the <b>Youth Court</b> (ages 10–17).</p>
<p><b>The Crown Court</b> tries indictable and serious either-way cases before a judge and jury. It also hears appeals from the magistrates’ courts and sentences cases committed from them. Its sentencing powers go up to the statutory maximum for each offence, including life imprisonment. It had a record backlog of over 75,000 cases in 2025.</p>` },
    { h: 'Appeals from the magistrates’ court', html: `
<ul><li><b>To the Crown Court</b> (defendant only): against conviction (a full rehearing before a judge and two magistrates) and/or sentence. As of right — no permission needed. The Crown Court can confirm, vary or even increase the sentence.</li>
<li><b>By way of case stated to the Divisional Court of the King’s Bench Division</b> (either side): the magistrates are asked to “state a case” showing how they applied the law. On a point of law or excess of jurisdiction. The court can confirm, reverse or vary the decision, or send it back.</li>
<li><b>Further appeal</b> from the Divisional Court to the <b>Supreme Court</b> on a point of law of general public importance, with permission.</li></ul>` },
    { h: 'Appeals from the Crown Court', html: `
<p><b>Defence:</b> to the <b>Court of Appeal (Criminal Division)</b> with leave (permission) from the Court of Appeal or a certificate from the trial judge. Against <b>conviction</b>: the only ground is that the conviction is <b>unsafe</b> (s2 Criminal Appeal Act 1968, as amended in 1995). The court may quash the conviction, order a retrial or substitute a lesser offence. Against <b>sentence</b>: the court can reduce it but cannot increase it on the defendant’s appeal. Further appeal to the <b>Supreme Court</b> requires a certified point of law of general public importance.</p>
<p><b>Prosecution:</b> cannot appeal against a jury’s acquittal as such, but:</p>
<ul><li><b>Attorney General’s reference on a point of law</b> after an acquittal (s36 Criminal Justice Act 1972) — clarifies the law without affecting the acquittal.</li>
<li><b>Unduly lenient sentence</b> references (s36 Criminal Justice Act 1988) — anyone can ask the Attorney General within 28 days; the Court of Appeal can increase the sentence.</li>
<li><b>Terminating rulings</b> — appeal against a judge’s ruling that ends the case (s58 Criminal Justice Act 2003).</li>
<li><b>Tainted acquittals</b> where a juror or witness was intimidated (Criminal Procedure and Investigations Act 1996).</li>
<li><b>Double jeopardy</b> exception: for serious offences, the Court of Appeal may quash an acquittal and order a retrial if there is <b>new and compelling evidence</b> (Part 10 Criminal Justice Act 2003) — [[c:dobson]].</li></ul>
<p>The <b>Criminal Cases Review Commission</b> (Criminal Appeal Act 1995), set up after miscarriages of justice such as the Birmingham Six, investigates possible miscarriages and can refer cases back to the appeal courts if there is a “real possibility” the conviction would not be upheld. It referred the case of Andrew Malkinson, whose rape conviction was quashed in 2023 after 17 years in prison; a review criticised the CCRC’s handling of his case.</p>` },
    { h: 'Guidelines', html: `
<p>The Court of Appeal historically issued <b>guideline judgments</b> for sentencing — e.g. [[c:hanson|R v Aramah]] (1982) on drugs. Since 2010 the <b>Sentencing Council</b> (Coroners and Justice Act 2009) issues definitive guidelines, which every court <b>must follow</b> unless it would be contrary to the interests of justice (s59 Sentencing Act 2020). The Court of Appeal still gives guidance on applying them and on procedure (e.g. directions to juries).</p>` }
  ],
  debate: [{ q: 'Should the double jeopardy rule have been relaxed?', for: ['Justice for victims where new evidence proves guilt (Dobson — Stephen Lawrence).', 'Limited to serious offences with new and compelling evidence; needs DPP consent and the Court of Appeal’s approval.', 'Advances in DNA science can now provide near-certain evidence.'], ag: ['Finality: acquitted people may never feel safe.', 'Risk of police investigating less thoroughly the first time.', 'Fairness of a retrial after publicity.', 'Traditional safeguard against state oppression.'] }],
  cases: ['dobson', 'hanson'],
  worked: [{ q: '<b>Scenario.</b> Kai is charged with theft of a £400 phone. He pleads not guilty and is convicted by magistrates, who give him a community order. He thinks the magistrates got the law on “dishonesty” wrong. Advise Kai on his appeal options.', s: ['<b class="st">Classify</b>Theft is triable either way; Kai was tried summarily in the magistrates’ court.', '<b class="st">Crown Court</b>He can appeal as of right to the Crown Court against conviction (a full rehearing before a judge and two magistrates) and/or sentence. Risk: the Crown Court can increase the sentence.', '<b class="st">Case stated</b>Because his complaint is a point of law (the test for dishonesty), he could instead ask the magistrates to state a case for the Divisional Court of the King’s Bench Division.', '<b class="st">Further</b>From the Divisional Court, a further appeal lies to the Supreme Court only on a certified point of law of general public importance, with permission.'], a: 'Crown Court rehearing, or case stated on the point of law.' }],
  pitfalls: ['Saying magistrates can impose up to 12 months for any offence — 12 months applies to a single either-way offence; six months for summary offences.', 'Saying the prosecution can appeal against a jury acquittal in the normal way.', 'Stating the Court of Appeal can increase a sentence on the defendant’s own appeal.', 'Forgetting that all criminal cases start in the magistrates’ court.'],
  cards: [
    ['Three categories of offence?', 'Summary, triable either way, indictable only.'],
    ['Example of an indictable-only offence?', 'Murder, manslaughter, rape, robbery, s18 GBH with intent.'],
    ['What is plea before venue?', 'The defendant indicates a plea for an either-way offence before the venue is decided.'],
    ['Magistrates’ maximum custodial sentence for one either-way offence?', '12 months (since November 2024); six months for a summary offence.'],
    ['Ground of appeal against conviction to the Court of Appeal?', 'The conviction is unsafe (s2 Criminal Appeal Act 1968).'],
    ['What is an appeal by way of case stated?', 'An appeal on a point of law from the magistrates to the Divisional Court of the KBD.'],
    ['Unduly lenient sentence scheme?', 'Attorney General can refer a Crown Court sentence to the Court of Appeal within 28 days (CJA 1988 s36).'],
    ['Double jeopardy exception?', 'Retrial after acquittal for serious offences with new and compelling evidence (CJA 2003 Part 10).'],
    ['What does the CCRC do?', 'Investigates possible miscarriages of justice and refers cases to the appeal courts.'],
    ['Which body issues sentencing guidelines?', 'The Sentencing Council (since 2010).']
  ],
  quiz: [
    { q: 'Theft is an example of which type of offence?', o: ['Triable either way', 'Summary', 'Indictable only', 'Civil wrong'], x: 'Can be tried in either court.' },
    { q: 'A defendant convicted in the magistrates’ court can appeal against conviction to the Crown Court…', o: ['as of right (no permission needed)', 'only with permission', 'only on a point of law', 'only if the prosecution agrees'], x: 'A full rehearing.' },
    { q: 'The Court of Appeal (Criminal Division) will allow an appeal against conviction if the conviction is…', o: ['unsafe', 'unpopular', 'too lenient', 'unreported'], x: 's2 Criminal Appeal Act 1968.' },
    { q: 'Which lets the prosecution have a sentence reviewed for being too low?', o: ['Attorney General’s reference for an unduly lenient sentence', 'Case stated', 'Judicial review', 'Plea before venue'], x: 'CJA 1988 s36.' },
    { q: 'An Attorney General’s reference on a point of law after an acquittal…', o: ['clarifies the law but does not affect the acquittal', 'leads to an automatic retrial', 'increases the sentence', 'is decided by the CCRC'], x: 'CJA 1972 s36.' },
    { q: 'Which case was the first high-profile use of the double jeopardy exception?', o: ['R v Dobson', 'R v Twomey', 'R v Mirza', 'R v Young'], x: 'Stephen Lawrence murder.' },
    { q: 'All criminal cases begin in…', o: ['the magistrates’ court', 'the Crown Court', 'the Court of Appeal', 'the High Court'], x: 'Indictable cases are then sent to the Crown Court.' },
    { q: 'Sentencing guidelines are now mainly issued by…', o: ['the Sentencing Council', 'the Law Commission', 'the CPS', 'the Home Office'], x: 'Courts must follow them unless contrary to the interests of justice.' }
  ],
  exam: [
    { q: 'Explain the appeal routes available to a defendant convicted in the Crown Court. [5]', m: 5, ms: ['Court of Appeal (Criminal Division) with leave', 'against conviction — unsafe (s2 CAA 1968)', 'against sentence — can be reduced, not increased', 'powers — quash / retrial / substitute', 'Supreme Court — point of law of general public importance; CCRC'] },
    { q: '(a) Explain the powers of the magistrates’ courts and the Crown Court. [10]<br>(b) Analyse and evaluate the appeal system in criminal cases. [15]', m: 25, ms: ['classification and allocation', 'magistrates’ powers — 6/12 months, fines, youth court', 'Crown Court — jury trials, sentencing up to maximum, appeals', 'defence appeal routes', 'prosecution routes — AG references, double jeopardy', 'CCRC — strengths and criticisms (Malkinson)', 'unsafe test', 'cost and time; permission filter', 'miscarriages of justice', 'conclusion'] }
  ],
  tools: ['appealroute']
});

/* ---------- 1.2.2b CPS and bail ---------- */
TOPICS.push({
  id: '1.2.2b', unit: '1B', ref: '1.2.2', title: 'The CPS and bail',
  short: 'Crown Prosecution Service: powers, duties, Code for Crown Prosecutors; police and court bail',
  summary: 'The Crown Prosecution Service decides whether suspects are charged and prosecutes them in court. Bail decides whether a suspect or defendant is released while the case continues. Both involve balancing the public interest in convicting the guilty against the rights of people who have not been convicted of anything.',
  spec: ['The Crown Prosecution Service: history, structure, role and powers', 'The Director of Public Prosecutions and the Attorney General', 'The Code for Crown Prosecutors: the Full Code Test', 'Police bail (pre-charge and post-charge)', 'Court bail: the Bail Act 1976, exceptions and conditions; restrictions on bail', 'Problems with bail; balancing the interests of the defendant and the public'],
  learn: [
    { h: 'The Crown Prosecution Service', html: `
<p>Before 1986 the police investigated and prosecuted most crimes. The <b>Philips Royal Commission (1981)</b> said this created a conflict of interest, and the <b>Prosecution of Offences Act 1985</b> set up the <b>CPS</b> as an independent national prosecuting authority.</p>
<ul><li>Headed by the <b>Director of Public Prosecutions (DPP)</b>, a senior lawyer, who is accountable to the <b>Attorney General</b> (the government’s chief legal adviser, who superintends the CPS and answers to Parliament).</li>
<li>Organised into 14 areas plus CPS Direct (an out-of-hours charging service) and specialist divisions.</li></ul>
<h4>Functions</h4><ul><li><b>Deciding the charge</b> in all but minor cases (statutory charging since the Criminal Justice Act 2003).</li><li>Advising the police during investigations.</li><li><b>Reviewing</b> cases continuously; it can discontinue them.</li><li>Preparing cases and presenting them in court (Crown Prosecutors and Crown Advocates, or instructing barristers).</li><li>Disclosure of unused material to the defence.</li></ul>` },
    { h: 'The Code for Crown Prosecutors', html: `
<div class="box def"><b class="lbl">The Full Code Test</b><ol><li><b>Evidential stage</b>: is there enough evidence to provide a <b>realistic prospect of conviction</b> — is a conviction more likely than not? Evidence must be admissible, reliable and credible.</li>
<li><b>Public interest stage</b>: is a prosecution required in the public interest? Factors: seriousness of the offence; the suspect’s culpability; the circumstances of and harm to the victim; the suspect’s age and maturity; impact on the community; whether prosecution is proportionate; whether sources of information need protecting.</li></ol></div>
<p>The <b>Threshold Test</b> may be used where the suspect is too dangerous to release and more evidence is expected: there must be reasonable grounds to suspect the person committed the offence.</p>
<p>Victims can ask for a decision not to prosecute to be reviewed under the <b>Victims’ Right to Review</b> scheme, following [[c:killick]]. Private prosecutions are also possible (e.g. by the Post Office in the Horizon cases), but the DPP can take them over and stop them.</p>
<p><b>Criticisms:</b> failures of <b>disclosure</b> have caused collapsed trials (Liam Allan, 2017); low charge rates for rape; staff shortages and case backlogs; early criticism that it was too close to the police (Glidewell Report, 1998).</p>` },
    { h: 'Police bail', html: `
<ul><li><b>Pre-charge bail</b> (s37 PACE 1984): a suspect is released while the police investigate further, often with conditions. After criticism of people being left on bail for years, the Policing and Crime Act 2017 limited it; the Police, Crime, Sentencing and Courts Act 2022 set initial periods of three months, extendable with authorisation.</li>
<li><b>Post-charge bail</b> (s38 PACE): the custody officer must release a charged person unless a reason applies — e.g. their name or address is unknown, or there are reasonable grounds to believe they will fail to appear, commit an offence or interfere with witnesses. Conditions can be imposed. If refused, the defendant must be brought before magistrates as soon as practicable.</li></ul>` },
    { h: 'Court bail and the Bail Act 1976', html: `
<p>Section 4 <b>Bail Act 1976</b> creates a <b>presumption in favour of bail</b> for unconvicted defendants. Bail may be refused (Schedule 1) for an imprisonable offence if there are <b>substantial grounds</b> for believing the defendant would:</p>
<ul><li>fail to surrender to custody;</li><li>commit an offence while on bail;</li><li>interfere with witnesses or obstruct justice;</li></ul>
<p>or for their own protection. The court considers the nature and seriousness of the offence, the defendant’s character, previous convictions and community ties, their record on previous bail, and the strength of the evidence.</p>
<h4>Conditions</h4><p>Residence at an address, reporting to a police station, curfew (often with an electronic tag), surrendering a passport, not contacting named people, a <b>surety</b> (someone promising to pay money if the defendant absconds) or a <b>security</b>.</p>
<h4>Restrictions</h4><ul><li>Murder, manslaughter, rape and similar offences, where the defendant has a previous conviction for such an offence: bail only in exceptional circumstances (s25 Criminal Justice and Public Order Act 1994).</li><li>Murder: bail can only be granted by a Crown Court judge (Coroners and Justice Act 2009 s115).</li><li>An offence committed while already on bail: bail refused unless no significant risk (Criminal Justice Act 2003 s14).</li><li>The prosecution can appeal against a grant of bail (Bail (Amendment) Act 1993).</li></ul>
<p>Failing to surrender is itself an offence (s6 Bail Act).</p>` },
    { h: 'Problems with bail', html: `
<div class="debate"><div class="for"><h5>Risks of granting bail</h5><ul><li>Offending while on bail, sometimes very serious</li><li>Absconding — trials delayed</li><li>Witness intimidation</li><li>Public confidence damaged</li></ul></div><div class="ag"><h5>Risks of refusing bail</h5><ul><li>Innocent people held in custody — the remand population reached record levels in 2024–25 (around one in five prisoners)</li><li>Loss of job, home, family contact; harder to prepare a defence</li><li>Remand prisoners in overcrowded prisons; custody time limits (182 days) often extended because of backlogs</li><li>Article 5 ECHR — right to liberty; presumption of innocence</li></ul></div></div>` }
  ],
  debate: [{ q: 'Does the bail system strike the right balance?', for: ['Presumption in favour of bail protects liberty and Art 5.', 'Conditions and tags allow release while managing risk.', 'Clear statutory exceptions for serious offences.', 'Prosecution can appeal a grant of bail.'], ag: ['Offences committed by people on bail undermine public safety.', 'Record remand numbers; backlogs mean long waits in custody.', 'Decisions made quickly with limited information.', 'Inconsistency between courts.'] }],
  cases: ['killick'],
  worked: [],
  pitfalls: ['Saying the police decide on charges in serious cases — the CPS does (except minor offences).', 'Mixing up the evidential test (“realistic prospect of conviction”) with the criminal standard of proof.', 'Saying bail is refused whenever the offence is serious — there is a presumption in favour of bail.', 'Confusing police bail (PACE) with court bail (Bail Act 1976).'],
  cards: [
    ['Which Act set up the CPS?', 'Prosecution of Offences Act 1985.'],
    ['Who heads the CPS?', 'The Director of Public Prosecutions, superintended by the Attorney General.'],
    ['Two stages of the Full Code Test?', 'Evidential (realistic prospect of conviction) and public interest.'],
    ['What is the Threshold Test?', 'Used when a suspect is too risky to release and more evidence is expected: reasonable grounds to suspect guilt.'],
    ['Victims’ Right to Review arose from which case?', 'R v Killick (2011).'],
    ['Section 4 Bail Act 1976?', 'Presumption in favour of bail for unconvicted defendants.'],
    ['Three main grounds for refusing bail?', 'Substantial grounds to believe D would fail to surrender, commit an offence on bail, or interfere with witnesses.'],
    ['What is a surety?', 'A person who promises to pay a sum if the defendant fails to surrender.'],
    ['Who can grant bail in a murder case?', 'Only a Crown Court judge (Coroners and Justice Act 2009).'],
    ['Which Act allows the prosecution to appeal a grant of bail?', 'Bail (Amendment) Act 1993.']
  ],
  quiz: [
    { q: 'The first stage of the Full Code Test asks whether there is…', o: ['a realistic prospect of conviction', 'proof beyond reasonable doubt', 'a confession', 'public support for prosecution'], x: 'Evidential stage.' },
    { q: 'The CPS is headed by…', o: ['the Director of Public Prosecutions', 'the Lord Chief Justice', 'the Home Secretary', 'the Chief Constable'], x: 'Superintended by the Attorney General.' },
    { q: 'The Bail Act 1976 s4 creates…', o: ['a presumption in favour of bail', 'a presumption against bail', 'bail only for summary offences', 'bail only with a surety'], x: 'Subject to Schedule 1 exceptions.' },
    { q: 'Which is NOT a ground for refusing bail under Schedule 1?', o: ['The defendant is unemployed', 'Risk of failing to surrender', 'Risk of offending on bail', 'Risk of interfering with witnesses'], x: 'Employment is only relevant to community ties.' },
    { q: 'A promise by a third party to pay money if the defendant absconds is…', o: ['a surety', 'a security', 'a curfew', 'a caution'], x: 'A security is money deposited by the defendant.' },
    { q: 'Before the CPS was set up, most prosecutions were brought by…', o: ['the police', 'the magistrates', 'the Attorney General personally', 'victims’ solicitors'], x: 'Philips Commission criticised this.' },
    { q: 'Under s25 CJPOA 1994, a defendant charged with rape who has a previous rape conviction can only get bail…', o: ['in exceptional circumstances', 'automatically', 'from the police', 'if they pay a surety'], x: 'Restriction on bail.' },
    { q: 'Which is a public interest factor in the Code for Crown Prosecutors?', o: ['The suspect’s age and maturity', 'The suspect’s wealth', 'The suspect’s political views', 'Media demand'], x: 'Also seriousness, culpability, harm to victim.' }
  ],
  exam: [
    { q: 'Explain the role of the Crown Prosecution Service. [5]', m: 5, ms: ['independent — Prosecution of Offences Act 1985; DPP; Attorney General', 'decides charge (CJA 2003)', 'Full Code Test — evidential and public interest', 'reviews, discontinues, prepares and presents cases', 'advises police; disclosure; right to review'] },
    { q: '(a) Explain the law on bail. [10]<br>(b) Analyse and evaluate whether the law on bail achieves a fair balance between the rights of the defendant and the protection of the public. [15]', m: 25, ms: ['police bail — pre-charge s37, post-charge s38 PACE', 'Bail Act 1976 s4 presumption', 'Schedule 1 grounds and factors', 'conditions — sureties, tags, curfews', 'restrictions — CJPOA 1994 s25, CJA 2003 s14, murder', 'prosecution appeal', 'Art 5 / presumption of innocence', 'offending on bail / absconding', 'remand population and backlogs', 'conclusion'] }
  ],
  tools: ['bailtree']
});

/* ---------- 1.2.2c Sentencing ---------- */
TOPICS.push({
  id: '1.2.2c', unit: '1B', ref: '1.2.2', title: 'Sentencing adults and young offenders',
  short: 'Aims of sentencing, Sentencing Act 2020, types of sentence, guidelines, youth justice',
  summary: 'Once a defendant is convicted, the court must choose a sentence. The Sentencing Act 2020 sets out the purposes of sentencing, the available sentences and how courts decide. Different theories — retribution, deterrence, rehabilitation, protection and reparation — pull in different directions. Young offenders are sentenced under a separate framework with the principal aim of preventing offending.',
  spec: ['Aims of sentencing for adults: s57 Sentencing Act 2020', 'Theories: retribution, deterrence, rehabilitation, protection of the public (incapacitation), reparation, denunciation', 'Types of sentence: custodial, suspended, community, fines, discharges', 'Factors: seriousness (culpability and harm), aggravating and mitigating factors, guilty plea, Sentencing Council guidelines', 'Sentencing young offenders: aims and sentences', 'Evaluation of sentencing and current reforms'],
  learn: [
    { h: 'The purposes of sentencing', html: `
<div class="box stat"><b class="lbl">Sentencing Act 2020 s57 (adults, 18+)</b><p>The court must have regard to: (a) the <b>punishment</b> of offenders; (b) the <b>reduction of crime</b> (including its reduction by deterrence); (c) the <b>reform and rehabilitation</b> of offenders; (d) the <b>protection of the public</b>; (e) the making of <b>reparation</b> by offenders to persons affected by their offences.</p></div>
<div class="tbl"><table><tr><th>Theory</th><th>Looks</th><th>Idea</th><th>Sentences</th></tr>
<tr><td><b>Retribution</b></td><td>Back</td><td>Punishment deserved for the crime (“just deserts”); proportionate. Not revenge</td><td>Tariff sentences; Sentencing Council guidelines</td></tr>
<tr><td><b>Denunciation</b></td><td>Back</td><td>Society expresses its disapproval</td><td>Long sentences for crimes that shock the public</td></tr>
<tr><td><b>Deterrence</b></td><td>Forward</td><td><b>Individual</b>: stop this offender reoffending. <b>General</b>: warn others (e.g. harsh sentences after the 2011 riots)</td><td>Prison, suspended sentences, heavy fines</td></tr>
<tr><td><b>Rehabilitation</b></td><td>Forward</td><td>Reform the offender’s behaviour</td><td>Community orders with drug rehabilitation, mental health or programme requirements</td></tr>
<tr><td><b>Protection of the public</b></td><td>Forward</td><td>Incapacitate dangerous offenders</td><td>Life and extended sentences; curfews; driving bans</td></tr>
<tr><td><b>Reparation</b></td><td>Forward</td><td>Offender makes amends to the victim or community</td><td>Compensation orders, unpaid work, restorative justice</td></tr></table></div>
<p>Evidence on deterrence is weak: offenders rarely expect to be caught. Reoffending within a year is high — around a quarter of all offenders and over a third of those released from short prison sentences.</p>` },
    { h: 'Types of sentence', html: `
<ul><li><b>Custodial sentences</b> — only if the offence is so serious that neither a fine nor a community sentence can be justified (s230). <b>Mandatory life</b> for murder, with a minimum term set under Schedule 21 (whole life order, 30, 25 or 15-year starting points). <b>Discretionary life</b> and <b>extended sentences</b> for dangerous offenders. Most determinate sentences are served half in custody and half on licence (40% for some offences from September 2024 to relieve overcrowding).</li>
<li><b>Suspended sentence orders</b> — prison of 14 days to 2 years, suspended for 6 months to 2 years, usually with requirements. Breach can lead to activation.</li>
<li><b>Community orders</b> — one or more requirements: unpaid work (40–300 hours), curfew, electronic monitoring, drug or alcohol treatment, mental health treatment, programmes, exclusion zones, rehabilitation activity.</li>
<li><b>Fines</b> — the most common sentence, set according to the offender’s income; unlimited in the magistrates’ court since 2015.</li>
<li><b>Discharges</b> — <b>absolute</b> (no penalty) or <b>conditional</b> (no penalty if no further offence within a set period of up to three years).</li>
<li>Ancillary orders: compensation, confiscation, driving disqualification, criminal behaviour orders.</li></ul>` },
    { h: 'How courts decide', html: `
<p><b>Seriousness</b> (s63) is assessed by the offender’s <b>culpability</b> and the <b>harm</b> caused or intended. The court follows the relevant <b>Sentencing Council guideline</b> (s59), which sets categories, starting points and ranges.</p>
<ul><li><b>Statutory aggravating factors</b>: previous convictions (s65); offending while on bail (s64); hostility based on race, religion, disability, sexual orientation or transgender identity (s66); assaults on emergency workers (s67).</li>
<li><b>Other aggravating factors</b>: use of a weapon, planning, vulnerable victim, group offending.</li>
<li><b>Mitigating factors</b>: no previous convictions, genuine remorse, youth or age, mental illness, a minor role.</li>
<li><b>Guilty plea</b>: up to one-third reduction if entered at the first stage (s73) — see Explore.</li>
<li>A <b>pre-sentence report</b> by the Probation Service helps the court.</li></ul>` },
    { h: 'Young offenders', html: `
<p>The age of criminal responsibility is <b>10</b>. Most 10–17-year-olds are tried in the <b>Youth Court</b>, before specially trained magistrates or a District Judge, in private.</p>
<p>The principal aim of the youth justice system is <b>to prevent offending</b> by children and young persons (Crime and Disorder Act 1998 s37), and courts must have regard to the child’s <b>welfare</b> (Children and Young Persons Act 1933 s44; s58 Sentencing Act 2020).</p>
<ul><li>Out-of-court: youth cautions and youth conditional cautions.</li>
<li><b>Referral order</b>: usually compulsory for a first-time offender pleading guilty; the young person agrees a contract with a youth offender panel (3–12 months).</li>
<li><b>Youth Rehabilitation Order</b>: a community sentence with requirements (curfew, supervision, education, intensive supervision and surveillance).</li>
<li><b>Detention and Training Order</b>: 4 months to 2 years, half in custody and half under supervision.</li>
<li><b>Long-term detention</b> (s250) for grave crimes; <b>detention at His Majesty’s pleasure</b> for murder.</li></ul>` },
    { h: 'Evaluation and reform', html: `
<p>England and Wales imprisons a higher proportion of its population than most Western European countries, and prisons reached capacity in 2024. The <b>Independent Sentencing Review</b> (David Gauke, 2025) recommended fewer short prison sentences, more use of suspended sentences and community orders, and an “earned progression” release model. The government introduced a <b>Sentencing Bill</b> in 2025 to implement much of this, including a presumption that sentences of 12 months or less are suspended. Check the latest position when you revise.</p>
<p><b>Arguments:</b> short sentences have the worst reoffending rates and disrupt jobs, housing and families; community sentences are cheaper and can rehabilitate. But victims and the public may see them as too lenient (denunciation, public confidence), and the Probation Service is overstretched.</p>` }
  ],
  debate: [{ q: 'Should short prison sentences be replaced by community sentences?', for: ['Short sentences have high reoffending rates.', 'Community orders tackle causes (drugs, mental health) — rehabilitation.', 'Much cheaper; reduces prison overcrowding.', 'Keeps offenders in work and housing.'], ag: ['Retribution and denunciation — victims may feel justice is not done.', 'Protection of the public from persistent offenders.', 'Probation is overstretched; breaches common.', 'Deterrence may be weakened.'] }],
  cases: ['hanson'],
  worked: [],
  pitfalls: ['Listing aims without linking each to a sentence type.', 'Confusing retribution (proportionate punishment) with revenge.', 'Forgetting s57 Sentencing Act 2020 (not the old CJA 2003 s142).', 'Saying all life sentences mean life in prison — most have a minimum term.'],
  cards: [
    ['Five purposes of sentencing in s57 Sentencing Act 2020?', 'Punishment; reduction of crime (incl. deterrence); reform and rehabilitation; protection of the public; reparation.'],
    ['Individual vs general deterrence?', 'Individual: stop this offender reoffending. General: deter others by example.'],
    ['What is retribution?', 'Punishment the offender deserves, proportionate to the crime — “just deserts”.'],
    ['Range of unpaid work in a community order?', '40 to 300 hours.'],
    ['Suspended sentence order?', 'Custody of 14 days to 2 years, suspended for 6 months to 2 years.'],
    ['Absolute vs conditional discharge?', 'Absolute: no penalty. Conditional: no penalty unless the offender reoffends within the set period.'],
    ['Maximum guilty plea reduction?', 'One-third, for a plea at the first stage.'],
    ['Principal aim of the youth justice system?', 'To prevent offending by children and young persons (CDA 1998 s37).'],
    ['Age of criminal responsibility in England and Wales?', '10.'],
    ['What is a referral order?', 'For young first-time offenders pleading guilty: a contract with a youth offender panel.'],
    ['How is seriousness assessed?', 'Culpability and harm (s63), then aggravating and mitigating factors, following Sentencing Council guidelines.']
  ],
  quiz: [
    { q: 'Which aim of sentencing looks back at the offence committed?', o: ['Retribution', 'Deterrence', 'Rehabilitation', 'Reparation'], x: 'The others look forward.' },
    { q: 'Unpaid work is most closely linked with which aim?', o: ['Reparation', 'Incapacitation', 'Denunciation only', 'General deterrence only'], x: 'Paying back the community.' },
    { q: 'The purposes of sentencing adults are now found in…', o: ['s57 Sentencing Act 2020', 's142 Criminal Justice Act 1988', 's4 Bail Act 1976', 's1 Theft Act 1968'], x: 'The Sentencing Code.' },
    { q: 'The maximum reduction for a guilty plea at the first stage is…', o: ['one-third', 'one-half', 'one-quarter', 'one-tenth'], x: 'Reducing to one-quarter after the first stage and one-tenth on the day of trial.' },
    { q: 'Which is a statutory aggravating factor?', o: ['Committing the offence while on bail', 'Showing remorse', 'Pleading guilty', 'Having no previous convictions'], x: 's64.' },
    { q: 'The principal aim of the youth justice system is to…', o: ['prevent offending', 'punish severely', 'deter adults', 'raise revenue'], x: 'CDA 1998 s37.' },
    { q: 'The mandatory sentence for murder is…', o: ['life imprisonment with a minimum term', '25 years', 'a suspended sentence', 'a whole life order in every case'], x: 'Schedule 21 starting points.' },
    { q: 'Which sentence is for a young offender and splits time between custody and supervision?', o: ['Detention and Training Order', 'Referral order', 'Conditional discharge', 'Youth caution'], x: '4 months to 2 years.' }
  ],
  exam: [
    { q: 'Explain the aims of sentencing adult offenders. [10]', m: 10, ms: ['s57 Sentencing Act 2020 listed', 'retribution — just deserts, tariff', 'deterrence — individual and general; example', 'rehabilitation — community requirements', 'protection — life/extended sentences, curfews', 'reparation — compensation, unpaid work', 'denunciation', 'link to seriousness and guidelines'] },
    { q: 'Analyse and evaluate how effectively sentencing achieves its aims. [15]', m: 15, ms: ['retribution achieved via guidelines — consistency', 'deterrence — limited evidence; certainty of detection', 'rehabilitation — reoffending statistics; community orders', 'prison — protection vs reoffending, overcrowding', 'reparation — restorative justice success', 'conflicting aims', 'youth sentencing — referral orders', 'Gauke review / Sentencing Bill', 'public confidence', 'conclusion'] }
  ],
  tools: ['plea', 'aimsort']
});

/* ---------- 1.2.2d Lay people ---------- */
TOPICS.push({
  id: '1.2.2d', unit: '1B', ref: '1.2.2', title: 'Lay people: magistrates and juries',
  short: 'Role of magistrates; jury selection, operation, secrecy, criticisms and alternatives',
  summary: 'Ordinary citizens play a central part in criminal justice. Unpaid lay magistrates decide most criminal cases, and juries of twelve decide guilt in the Crown Court. This topic covers who can serve, how they are selected and what they do, and the long-running debate about whether lay involvement is a strength or a weakness — sharpened by 2025 proposals to restrict jury trial.',
  spec: ['The role of lay magistrates in criminal cases', 'Jury trial: qualification, disqualification, excusal, selection, vetting and challenges', 'The operation of the jury system: role, majority verdicts, secrecy', 'Criticisms of juries: bias, media, internet, perverse verdicts, complex cases, cost', 'Alternatives to jury trial', 'Advantages and disadvantages of using lay people'],
  learn: [
    { h: 'Lay magistrates', html: `
<p>There are around 14,500 <b>lay magistrates</b> (Justices of the Peace) in England and Wales — unpaid volunteers without legal qualifications. (Selection, appointment and training are covered in topic 1.2.3b.)</p>
<p><b>Criminal role:</b> they deal with over 90% of criminal cases — all early hearings, bail applications, trials of summary and either-way offences, sentencing within their powers, issuing search and arrest warrants, and the Youth Court. They usually sit as a bench of three (sometimes two), with a legally qualified <b>legal adviser</b> who advises on law, procedure and sentencing but must not take part in the decision.</p>
<div class="debate"><div class="for"><h5>Advantages</h5><ul><li>Cheap — unpaid (expenses only)</li><li>Local knowledge</li><li>Lay involvement: justice by ordinary people; public confidence</li><li>Bench of three balances views</li><li>Few appeals — decisions generally sound</li><li>Improved diversity: over half are women</li></ul></div><div class="ag"><h5>Disadvantages</h5><ul><li>Not representative of age (mostly over 50) or social class</li><li>Accused of being prosecution-minded and trusting police evidence</li><li>Inconsistent sentencing between benches</li><li>Reliance on the legal adviser</li><li>Falling numbers; recruitment difficult</li></ul></div></div>` },
    { h: 'Who can serve on a jury', html: `
<div class="box stat"><b class="lbl">Juries Act 1974 (as amended)</b><p>A juror must be aged <b>18–75</b>, on the <b>electoral register</b>, and have lived in the UK for at least <b>five years</b> since age 13.</p></div>
<ul><li><b>Disqualified</b>: anyone who has ever been sentenced to five years or more in prison (or life); anyone who has served any prison sentence, or had a suspended sentence or community order, in the last ten years; anyone currently on bail; people with certain mental disorders or who lack capacity; anyone convicted of juror offences.</li>
<li><b>Excusal and deferral</b>: since the Criminal Justice Act 2003 there is no right to be excused (except serving armed forces members whose commanding officer certifies it would harm efficiency). Jurors can ask for <b>discretionary</b> excusal (e.g. illness, caring responsibilities) or, more usually, deferral to a later date.</li>
<li>Since 2003 judges, lawyers and police officers can serve. This raised concerns about bias — [[c:abdroikov]].</li></ul>` },
    { h: 'Selection, vetting and challenges', html: `
<ul><li>The <b>Jury Central Summoning Bureau</b> selects names at random from the electoral register; people are summoned for (usually) two weeks.</li>
<li>In court, 12 jurors are chosen at random from the panel of about 15 by the court clerk.</li>
<li><b>Vetting</b>: routine police checks for disqualifying convictions; <b>authorised checks</b> of security records in national security and terrorism cases, with the Attorney General’s permission.</li>
<li><b>Challenges</b>: to the whole panel (“to the array”) if it was chosen in a biased way; <b>for cause</b> by either side (e.g. a juror knows the defendant); the prosecution’s right to “<b>stand by</b>” a juror (used rarely). The defence’s peremptory challenge was abolished in 1988.</li></ul>` },
    { h: 'The jury’s role and secrecy', html: `
<p>The judge decides points of law and directs the jury; the jury decides the facts and delivers the verdict — guilty or not guilty. Juries sit in fewer than 2% of criminal cases (Crown Court trials where the defendant pleads not guilty), and in a few civil cases (fraud, malicious prosecution, false imprisonment — Senior Courts Act 1981 s69; defamation juries were effectively removed by the Defamation Act 2013) and coroners’ inquests (e.g. deaths in custody).</p>
<p><b>Majority verdicts</b> (Juries Act 1974 s17, introduced 1967): 11–1 or 10–2 are allowed after at least two hours of deliberation.</p>
<p><b>Secrecy</b>: it is an offence to disclose or obtain information about a jury’s deliberations (s20D Juries Act 1974, added in 2015; previously s8 Contempt of Court Act 1981). Courts will not inquire into what happened in the jury room — [[c:mirza]] — but can investigate events outside it — [[c:young]]. Since 2015 it is also an offence for jurors to research the case (including online) or share research: see [[c:fraill]] and [[c:dallas]].</p>
<p><b>Jury equity</b>: jurors cannot be punished for their verdict ([[c:bushell]]) and may acquit against the evidence if they think the law is unjust — [[c:ponting]]; the 2022 acquittal of protesters who toppled the Colston statue in Bristol.</p>` },
    { h: 'Criticisms and research', html: `
<ul><li><b>Bias</b>: racial bias ([[c:gregory]]; Sander v UK, 2000); but Professor Cheryl Thomas’s study <i>Are Juries Fair?</i> (2010) found no evidence of racial bias in verdicts and that juries convicted more often than they acquitted.</li>
<li><b>Understanding</b>: Thomas found some jurors misunderstood the judge’s directions — judges now give written directions and a “route to verdict”.</li>
<li><b>Media and the internet</b>: prejudicial publicity; jurors searching online.</li>
<li><b>Perverse verdicts</b> — a strength (jury equity) or a weakness (ignoring the law)?</li>
<li><b>Complex fraud trials</b>: long and hard to follow — the Jubilee Line trial collapsed in 2005 after almost two years.</li>
<li><b>Jury tampering</b> and intimidation.</li>
<li><b>Cost and time</b>: jury trials are longer and more expensive; jurors lose earnings.</li>
<li><b>Unrepresentative</b> juries in some areas; no reasons given for verdicts, so appeals are hard.</li></ul>` },
    { h: 'Alternatives and reform', html: `
<ul><li><b>Trial by judge alone</b>: allowed where there is a real risk of <b>jury tampering</b> (s44 Criminal Justice Act 2003) — [[c:twomey]]. A proposed power for complex fraud (s43) was never used and was repealed in 2012.</li>
<li><b>A panel of judges</b> — as in the Diplock courts in Northern Ireland (1973–2007).</li>
<li><b>Judge with lay assessors</b> or a mixed panel of judge and magistrates, as in many European systems.</li></ul>
<div class="box news"><b class="lbl">Current debate</b><p>Sir Brian Leveson’s <i>Independent Review of the Criminal Courts</i> (July 2025) recommended a new <b>Crown Court Bench Division</b> — a judge sitting with two magistrates — for many either-way cases, and judge-only trials for some serious fraud, to tackle the record backlog. In late 2025 the government announced plans to go further and limit jury trials mainly to offences likely to attract sentences of more than three years. These proposals are highly controversial; check whether they have been enacted.</p></div>` }
  ],
  debate: [{ q: 'Should jury trial be restricted to the most serious cases?', for: ['Record Crown Court backlog; victims wait years for trial.', 'Judges give reasons, so decisions can be appealed.', 'Complex fraud is hard for lay jurors.', 'Magistrates already decide over 90% of cases fairly.', 'Most European systems use judges or mixed panels.'], ag: ['Juries are a “lamp that shows that freedom lives” (Lord Devlin); public confidence.', 'Jury equity protects against unjust laws (Ponting).', 'Thomas (2010): juries are fair and effective.', 'Backlog is caused by underfunding, not juries.', 'Defendants lose an ancient right; risk of case-hardened judges.'] }],
  cases: ['abdroikov', 'mirza', 'young', 'fraill', 'dallas', 'bushell', 'ponting', 'twomey', 'gregory'],
  worked: [{ q: '<b>Scenario.</b> Four people are summoned for jury service: Ada (77), a retired teacher; Ben (30), who received a community order eight years ago; Chen (25), who moved to the UK three years ago; and Dee (45), a police officer in the same force that investigated the case. Advise whether each can serve.', s: ['<b class="st">Ada</b>Jurors must be 18–75 (Juries Act 1974, as amended). At 77 she is not eligible.', '<b class="st">Ben</b>A community order within the last ten years disqualifies him; eight years ago is within ten years, so he is disqualified.', '<b class="st">Chen</b>Jurors must have lived in the UK for at least five years since age 13. Three years is not enough — ineligible (and may not be on the electoral register).', '<b class="st">Dee</b>Police officers can serve since the CJA 2003, but R v Abdroikov shows a close link to the prosecution (same force, possibly shared witnesses) may create an appearance of bias. She should raise this, and the judge is likely to excuse her from this trial.'], a: 'None of the four should sit on this jury.' }],
  pitfalls: ['Saying magistrates are paid or legally qualified — lay magistrates are unpaid volunteers; District Judges are qualified.', 'Stating the old juror age range (18–70) — it is 18–75.', 'Saying jurors can be questioned about their deliberations — secrecy is protected (Mirza).', 'Describing jury equity without an example.'],
  cards: [
    ['Jury age range?', '18–75.'],
    ['Residence requirement for jurors?', 'At least five years in the UK since age 13.'],
    ['What majority verdicts are allowed?', '11–1 or 10–2, after at least two hours.'],
    ['R v Mirza (2004)?', 'Courts will not inquire into jury deliberations — secrecy.'],
    ['R v Young (1995)?', 'Ouija board used in the hotel; conviction quashed — outside the jury room so could be investigated.'],
    ['AG v Fraill (2011)?', 'Juror contacted defendant on Facebook; jailed eight months.'],
    ['What is jury equity?', 'The jury’s power to acquit against the law or evidence if it thinks justice requires — Bushell’s Case; R v Ponting.'],
    ['R v Twomey (2009)?', 'First judge-alone Crown Court trial under s44 CJA 2003 due to jury tampering.'],
    ['R v Abdroikov (2007)?', 'Police/CPS jurors with close links to the prosecution — appearance of bias; convictions quashed.'],
    ['What did Cheryl Thomas’s 2010 research find?', 'No racial bias in verdicts; juries convict more than they acquit; some misunderstanding of directions.'],
    ['What did the Leveson review (2025) propose?', 'A Crown Court Bench Division: a judge plus two magistrates for many either-way cases.'],
    ['What does the legal adviser do in the magistrates’ court?', 'Advises the magistrates on law, procedure and sentencing, but does not take part in decisions.']
  ],
  quiz: [
    { q: 'Which person is eligible for jury service?', o: ['A 40-year-old nurse who has lived in the UK all her life', 'A 76-year-old retired builder', 'A person currently on bail', 'Someone who served a life sentence'], x: 'Age 18–75, registered, 5 years’ residence.' },
    { q: 'In R v Young, the conviction was quashed because…', o: ['jurors used a Ouija board in their hotel', 'a juror was a police officer', 'the jury was all male', 'a juror used Facebook'], x: 'Outside the jury room, so the court could investigate.' },
    { q: 'The minimum majority verdict allowed is…', o: ['10–2', '9–3', '8–4', '11–1 only'], x: 'After at least two hours.' },
    { q: 'Jury equity was shown in…', o: ['R v Ponting', 'R v Mirza', 'R v Abdroikov', 'R v Twomey'], x: 'Acquitted despite the judge’s direction.' },
    { q: 'A trial without a jury because of jury tampering is allowed by…', o: ['s44 Criminal Justice Act 2003', 's17 Juries Act 1974', 's8 Contempt of Court Act 1981', 's4 Bail Act 1976'], x: 'R v Twomey.' },
    { q: 'Lay magistrates deal with approximately what share of criminal cases?', o: ['Over 90%', 'About 50%', 'About 10%', 'Under 2%'], x: 'Juries sit in fewer than 2%.' },
    { q: 'Which statement about jury secrecy is correct?', o: ['It is an offence to disclose what was said in deliberations', 'Jurors must publish their reasons', 'Appeal courts routinely question jurors', 'Secrecy only applies in civil cases'], x: 's20D Juries Act 1974.' },
    { q: 'Cheryl Thomas’s research “Are Juries Fair?” found…', o: ['no evidence of racial bias in jury verdicts', 'juries acquit in most cases', 'juries always understand directions', 'juries should be abolished'], x: 'Published 2010.' }
  ],
  exam: [
    { q: 'Explain the qualifications and selection of jurors. [10]', m: 10, ms: ['Juries Act 1974 — 18–75, electoral register, 5 years’ residence', 'disqualifications — custody/community orders, bail, mental disorder', 'excusal/deferral; CJA 2003 changes', 'police/lawyers — Abdroikov', 'random summons; 12 from panel', 'vetting — routine and authorised', 'challenges — for cause, stand by, array', 'peremptory challenge abolished'] },
    { q: 'Analyse and evaluate whether juries should continue to be used in criminal trials. [15]', m: 15, ms: ['public confidence / democratic participation', 'impartiality — random selection', 'jury equity — Bushell, Ponting', 'Thomas research', 'bias — Gregory, Sander', 'secrecy prevents review — Mirza', 'internet and media — Fraill, Dallas', 'complex cases, cost, tampering — Twomey', 'alternatives; Leveson 2025 proposals', 'conclusion'] }
  ],
  tools: ['jurytree']
});
