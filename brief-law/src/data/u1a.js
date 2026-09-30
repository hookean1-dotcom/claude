/* ==========================================================
   UNIT 1 · DISPUTE SOLVING IN CIVIL LAW — A Civil dispute resolution, B Enforcement of civil law
   ========================================================== */
addCases([
  { id: 'reb', n: 'Re B (Children)', y: 2008, a: '1', t: '1.A1', c: 'HL', f: 'A family case in which the House of Lords was asked whether a higher standard of proof applies in civil cases where the allegation is very serious.', p: 'The standard of proof in civil proceedings is simply the balance of probabilities, “neither more nor less” — there is no sliding scale. The burden is on the party making the allegation.' },
  { id: 'simpsoncivil', n: 'Criminal acquittal, civil liability', y: 1997, a: '1', t: '1.A1', c: 'Illustration', f: 'In the USA, O. J. Simpson was acquitted of murder in a criminal trial in 1995 but found liable for wrongful death in a civil trial in 1997 and ordered to pay damages.', p: 'Illustrates the different purposes and standards of proof: criminal law punishes on proof beyond reasonable doubt; civil law compensates on the balance of probabilities.' },
  { id: 'multitrack', n: 'Woolf reforms and the Civil Procedure Rules', y: 1998, a: '1', t: '1.A2', c: 'Report', f: 'Lord Woolf’s report Access to Justice (1996) found civil justice too slow, expensive and complex. The Civil Procedure Rules 1998 introduced the “overriding objective” of dealing with cases justly and at proportionate cost, active case management by judges, pre-action protocols and the track system.', p: 'The foundation of today’s civil process. Later reforms: Jackson’s costs review (2010) led to changes in 2013, the intermediate track and fixed costs came in 2023, and in 2024 the rules were amended so the court can order parties to use ADR.' },
  { id: 'fos', n: 'Financial Ombudsman Service', y: 2001, a: '1', t: '1.A3', c: 'Illustration', f: 'A free service that settles complaints between consumers and financial businesses such as banks and insurers, after the business has had a chance to resolve the complaint itself.', p: 'An example of an ombudsman: free, informal and investigative. If the consumer accepts the decision it is binding on the business; if not, the consumer can still go to court.' },
  { id: 'acas', n: 'Acas early conciliation', y: 2014, a: '1', t: '1.A3', c: 'Illustration', f: 'Before most employment tribunal claims, the claimant must contact Acas, which offers free early conciliation between the worker and employer.', p: 'An example of conciliation: the conciliator can suggest possible terms of settlement, unlike a mediator who only helps the parties reach their own solution.' },
  { id: 'lawworks', n: 'Pro bono: LawWorks and Advocate', y: 2024, a: '1', t: '1.B2', c: 'Illustration', f: 'LawWorks (for solicitors) and Advocate (for barristers) arrange free legal help for people who cannot afford it and cannot get legal aid. University law clinics also give free advice under supervision.', p: 'Pro bono work fills some of the gaps left by cuts to legal aid, but it depends on volunteers and cannot meet all demand.' }
]);

/* ---------- A1 Features of civil law ---------- */
TOPICS.push({
  id: '1.A1', unit: '1', ref: 'A1', title: 'Features of civil law',
  short: 'The aim and purpose of civil law; the standard and burden of proof in civil cases',
  summary: 'Civil law deals with disputes between private individuals and organisations — for example, a claim for compensation after a car crash. Its purpose is to put right a wrong, usually by awarding compensation, rather than to punish. The person bringing the claim must prove it on the balance of probabilities.',
  spec: ['Aim and purpose of civil law', 'Standard of proof in civil cases', 'Burden of proof in civil cases'],
  learn: [
    { h: 'Civil and criminal law compared', html: `
<div class="tbl"><table><tr><th></th><th>Civil law</th><th>Criminal law</th></tr>
<tr><td><b>Purpose</b></td><td>To resolve disputes and compensate for loss; put the claimant back in the position they would have been in</td><td>To punish wrongdoing and protect society</td></tr>
<tr><td><b>Parties</b></td><td>Claimant v defendant (e.g. <i>Smith v Jones</i>)</td><td>The Crown (R) v defendant (e.g. <i>R v Jones</i>)</td></tr>
<tr><td><b>Who starts the case</b></td><td>The person wronged (claimant)</td><td>Usually the state — police and CPS</td></tr>
<tr><td><b>Standard of proof</b></td><td><b>Balance of probabilities</b></td><td>Beyond reasonable doubt</td></tr>
<tr><td><b>Outcome</b></td><td>Liable or not liable; remedies such as damages or an injunction</td><td>Guilty or not guilty; sentence</td></tr>
<tr><td><b>Courts</b></td><td>County Court, High Court</td><td>Magistrates’ court, Crown Court</td></tr>
<tr><td><b>Examples</b></td><td>Negligence, contract, family, employment, housing</td><td>Assault, theft, murder</td></tr></table></div>
<p>The same event can lead to both: a driver who injures a pedestrian may be prosecuted for careless driving <i>and</i> sued in negligence ([[c:simpsoncivil]]).</p>` },
    { h: 'Aim and purpose of civil law', html: `
<ul><li>To provide a way of <b>resolving disputes</b> peacefully between individuals, businesses and public bodies.</li>
<li>To <b>compensate</b> people who have suffered loss because of another’s wrongdoing — in negligence, <b>damages</b> aim to put the claimant in the position they would have been in if the tort had not happened (D4).</li>
<li>To set <b>standards of behaviour</b> — for example, the duty to take reasonable care — and encourage safety.</li>
<li>To provide other <b>remedies</b>: injunctions (orders to do or stop doing something), specific performance, declarations.</li></ul>` },
    { h: 'Burden and standard of proof', html: `
<ul><li>The <b>burden of proof</b> is on the <b>claimant</b> — they must prove each element of their claim ([[c:reb]]).</li>
<li>The <b>standard of proof</b> is the <b>balance of probabilities</b>: the court must be satisfied the claimant’s version is more likely than not (more than 50%) to be true.</li>
<li>In some negligence cases, <b>res ipsa loquitur</b> (“the thing speaks for itself”) helps the claimant by allowing the court to infer negligence from the facts (D5).</li></ul>` }
  ],
  debate: [{ q: 'Is the lower standard of proof in civil cases fair?', for: ['The consequences (compensation) are less severe than criminal punishment.', 'Victims would rarely win if they had to prove beyond reasonable doubt.', 'Defendants are usually insured, so the real loss falls on insurers.'], ag: ['Findings of liability can damage reputations.', 'Defendants may face costly claims on limited evidence.', 'Two different outcomes from the same event (acquittal and liability) can confuse the public.'] }],
  cases: ['reb', 'simpsoncivil'],
  worked: [],
  pitfalls: ['Using criminal words in civil answers: “guilty”, “prosecution”, “sentence”. Use “liable”, “claimant”, “damages”.', 'Saying the standard of proof is “beyond reasonable doubt”.'],
  cards: [
    ['Aim of civil law?', 'To resolve disputes and compensate people for loss caused by others.'],
    ['Standard of proof in civil cases?', 'Balance of probabilities — more likely than not.'],
    ['Who has the burden of proof in a negligence claim?', 'The claimant.'],
    ['Civil equivalent of “guilty”?', 'Liable.'],
    ['What are damages?', 'Money compensation awarded to the claimant.'],
    ['Name two civil remedies other than damages.', 'Injunction; specific performance; declaration.']
  ],
  quiz: [
    { q: 'The standard of proof in a negligence claim is…', o: ['the balance of probabilities', 'beyond reasonable doubt', 'certainty', 'reasonable suspicion'], x: 'More likely than not.' },
    { q: 'In a civil case the person bringing the claim is called the…', o: ['claimant', 'prosecutor', 'defendant', 'appellant'], x: 'Formerly “plaintiff”.' },
    { q: 'The main purpose of damages in negligence is to…', o: ['compensate the claimant', 'punish the defendant', 'deter society', 'rehabilitate the defendant'], x: 'Restore the claimant’s position.' },
    { q: 'Which is a civil matter?', o: ['A claim for injuries from a car crash', 'A prosecution for theft', 'A murder trial', 'A conviction for assault'], x: '' }
  ],
  exam: [{ q: 'Explain the differences between civil and criminal law, using the scenario. [6]', m: 6, scen: 'Priya was knocked off her bike by a van driver who was using his phone. The police are considering a prosecution for careless driving. Priya wants compensation for her injuries and her damaged bike.', ms: ['purpose — compensation v punishment', 'parties — Priya (claimant) v driver/insurer; R v driver', 'standard of proof — balance of probabilities v beyond reasonable doubt', 'burden on claimant / prosecution', 'outcomes — liable/damages v guilty/sentence', 'courts — County Court v magistrates’ court'] }],
  tools: ['civcrimsort']
});

/* ---------- A2 Civil courts ---------- */
TOPICS.push({
  id: '1.A2', unit: '1', ref: 'A2', title: 'The civil courts and appeals',
  short: 'Civil courts of first instance and appeal, tracks, reasons and permission to appeal, and the role of judges',
  summary: 'Most negligence claims are heard in the County Court; larger and more complex claims go to the High Court. Claims are allocated to a track according to their value and complexity. Appeals need permission and go up the hierarchy to the Court of Appeal and, rarely, the Supreme Court. Judges manage cases, decide liability and damages, and create precedent.',
  spec: ['Civil court hierarchy: civil courts of first instance', 'Civil courts of appeal', 'Reasons, permissions and how to appeal', 'Role of judges in civil cases'],
  learn: [
    { h: 'Courts of first instance', html: `
<ul><li><b>County Court</b> — a single national court sitting in local hearing centres. It hears most negligence and other civil claims.</li>
<li><b>High Court</b> — three divisions. The <b>King’s Bench Division</b> hears larger negligence and personal injury claims (personal injury claims worth £50,000 or more can be started there); the Chancery Division deals with business and property; the Family Division with family cases.</li>
<li>Claims are started with a claim form (many money claims online). Before starting, parties should follow the relevant <b>pre-action protocol</b> (e.g. for personal injury) — exchanging information and trying to settle ([[c:multitrack]]).</li></ul>` },
    { h: 'The track system', html: `
<p>If the defendant defends the claim, a judge allocates it to a track (Civil Procedure Rules Part 26), mainly by value but also by complexity:</p>
<div class="tbl"><table><tr><th>Track</th><th>Value</th><th>Features</th></tr>
<tr><td><b>Small claims</b></td><td>Up to £10,000 (personal injury where the injury part is up to £1,000; road traffic whiplash claims up to £5,000)</td><td>District Judge, informal hearing, parties often unrepresented, costs generally not recoverable; many claims referred first to free mediation</td></tr>
<tr><td><b>Fast track</b></td><td>£10,000–£25,000</td><td>Trial usually within a day; strict timetable; fixed recoverable costs</td></tr>
<tr><td><b>Intermediate track</b></td><td>£25,000–£100,000 (since October 2023)</td><td>Trial of up to three days; limited expert evidence; fixed recoverable costs</td></tr>
<tr><td><b>Multi-track</b></td><td>Over £100,000, or complex cases</td><td>Circuit Judge or High Court judge; case management conferences; costs budgeting</td></tr></table></div>
<p>Try the <b>track allocation</b> tool in Explore.</p>` },
    { h: 'Appeals', html: `
<ul><li><b>Reasons to appeal</b>: the decision was <b>wrong</b> (e.g. the judge misapplied the law or reached a finding on the facts no reasonable judge could make), or <b>unjust because of a serious procedural irregularity</b> (CPR 52.21). A party may appeal against liability or the amount of damages.</li>
<li><b>Permission</b> is needed for almost all appeals — from the trial court or the appeal court. It is granted only if the appeal has a <b>real prospect of success</b> or there is some other compelling reason (CPR 52.6). A second appeal needs an <b>important point of principle or practice</b>.</li>
<li><b>Routes</b>: District Judge → Circuit Judge; County Court (Circuit Judge) → High Court judge, or to the <b>Court of Appeal (Civil Division)</b>; High Court → Court of Appeal (Civil Division) → <b>Supreme Court</b> (only on arguable points of law of general public importance). A “leapfrog” appeal can go straight from the High Court to the Supreme Court.</li>
<li><b>How</b>: file an appellant’s notice within 21 days of the decision (usually), with grounds of appeal.</li>
<li><b>Powers</b> of the appeal court: affirm, set aside or vary the decision; order a new trial; award costs.</li></ul>` },
    { h: 'The role of judges', html: `
<ul><li><b>District Judges</b> — small claims and fast-track cases, case management.</li><li><b>Circuit Judges</b> — multi-track cases in the County Court, appeals from District Judges.</li><li><b>High Court judges</b> — high-value and complex claims.</li><li><b>Lord and Lady Justices of Appeal; Justices of the Supreme Court</b> — appeals and precedent.</li></ul>
<p>In negligence cases there is <b>no jury</b>: the judge decides the facts, liability and the amount of damages, gives a reasoned judgment and manages the case under the <b>overriding objective</b> (dealing with cases justly and at proportionate cost). Appeal judges develop the law through precedent (C1).</p>` }
  ],
  debate: [{ q: 'Is the civil court system accessible and efficient?', for: ['Tracks match procedure and cost to the size of the claim.', 'Online claims and mediation make small claims simpler.', 'Fixed costs make spending predictable.'], ag: ['Delays: waiting times for fast- and multi-track trials have been long.', 'Court fees and legal costs are high.', 'Many people represent themselves after legal aid cuts.', 'Permission to appeal is hard to get.'] }],
  cases: ['multitrack'],
  worked: [],
  pitfalls: ['Saying negligence cases are heard by a jury.', 'Forgetting that permission is needed to appeal.', 'Out-of-date track limits — the intermediate track has existed since October 2023.'],
  cards: [
    ['Which court hears most negligence claims?', 'The County Court.'],
    ['Which High Court division hears negligence claims?', 'The King’s Bench Division.'],
    ['Small claims track limit?', '£10,000 (lower for personal injury and whiplash claims).'],
    ['Fast track limit?', '£25,000.'],
    ['Intermediate track?', '£25,000–£100,000, since October 2023.'],
    ['Test for permission to appeal?', 'A real prospect of success, or some other compelling reason.'],
    ['Highest civil appeal court?', 'The Supreme Court.'],
    ['What is the overriding objective?', 'Dealing with cases justly and at proportionate cost (CPR 1998).']
  ],
  quiz: [
    { q: 'A defended claim for £18,000 would normally be allocated to the…', o: ['fast track', 'small claims track', 'multi-track', 'intermediate track'], x: '£10,000–£25,000.' },
    { q: 'Appeals from the High Court usually go to…', o: ['the Court of Appeal (Civil Division)', 'the Crown Court', 'the County Court', 'the magistrates’ court'], x: '' },
    { q: 'Who decides liability in a negligence trial?', o: ['A judge', 'A jury', 'Magistrates', 'An ombudsman'], x: 'No jury in negligence.' },
    { q: 'Permission to appeal is usually granted only if…', o: ['there is a real prospect of success', 'the claimant is unhappy', 'the damages are over £1,000', 'the judge agrees to be overruled'], x: 'CPR 52.6.' }
  ],
  exam: [{ q: 'Advise Tom which court and track his claim is likely to be heard in, and how he could appeal if he loses. [8]', m: 8, scen: 'Tom suffered a back injury at work when a shelf collapsed. His lawyer values the claim at £60,000. The employer denies negligence.', ms: ['County Court (or High Court if £50,000+ PI and complex)', 'intermediate track (£25k–£100k) — features, fixed costs', 'judge decides — District or Circuit Judge', 'appeal needs permission; real prospect of success', 'route to High Court or Court of Appeal; possible Supreme Court', 'time limit and grounds'] }],
  tools: ['track', 'appealsteps']
});

/* ---------- A3 ADR ---------- */
TOPICS.push({
  id: '1.A3', unit: '1', ref: 'A3', title: 'Alternatives to the courts',
  short: 'Arbitration, conciliation, mediation, negotiation and ombudsmen — and when each is suitable',
  summary: 'Going to court is expensive, slow and stressful, so many civil disputes are settled by alternative dispute resolution (ADR). This topic covers negotiation, mediation, conciliation, arbitration and ombudsmen — how each works and the situations where it is most suitable — and the courts’ growing push for ADR.',
  spec: ['Arbitration', 'Conciliation', 'Mediation', 'Negotiation', 'Ombudsman', 'Situations for use of each method'],
  learn: [
    { h: 'The five methods', html: `
<div class="tbl"><table><tr><th>Method</th><th>How it works</th><th>Binding?</th><th>Suitable situations</th></tr>
<tr><td><b>Negotiation</b></td><td>Parties (or their lawyers or insurers) discuss and agree a settlement themselves</td><td>Only if a settlement is agreed</td><td>Most negligence claims settle this way, e.g. insurers negotiating a car-crash claim; Part 36 offers</td></tr>
<tr><td><b>Mediation</b></td><td>A neutral mediator helps the parties reach their own agreement; does not suggest the outcome (facilitative)</td><td>Only if agreed (then a contract)</td><td>Neighbour, family, small claims (HMCTS Small Claims Mediation Service), clinical negligence where an apology matters</td></tr>
<tr><td><b>Conciliation</b></td><td>Like mediation, but the conciliator can suggest terms of settlement</td><td>Only if agreed</td><td>Employment disputes — [[c:acas]]</td></tr>
<tr><td><b>Arbitration</b></td><td>Parties agree to submit the dispute to an arbitrator, who decides it (Arbitration Act 1996); private and often by documents</td><td><b>Yes</b> — the award is enforceable in the courts; very limited appeals</td><td>Commercial contracts, construction, international trade, consumer schemes (e.g. holiday complaints)</td></tr>
<tr><td><b>Ombudsman</b></td><td>An independent official investigates complaints about organisations; free to the complainant</td><td>Binding on the business if the complainant accepts</td><td>Complaints against banks ([[c:fos]]), the NHS, lawyers (Legal Ombudsman), energy companies</td></tr></table></div>` },
    { h: 'The courts and ADR', html: `
<ul><li>Pre-action protocols require parties to consider ADR before issuing a claim.</li>
<li>A party who unreasonably refuses ADR can be penalised in costs, even if they win ([[c:dunnett]]; [[c:halsey]]).</li>
<li>In [[c:churchill]] (2023) the Court of Appeal held that courts <b>can order</b> parties to engage in ADR. Since October 2024 the Civil Procedure Rules expressly include promoting ADR in the overriding objective.</li>
<li>Most small claims for a fixed sum are referred to a free one-hour telephone mediation before a hearing (since 2024).</li></ul>` },
    { h: 'Advantages and disadvantages', html: `
<div class="debate"><div class="for"><h5>Advantages of ADR</h5><ul><li>Cheaper and quicker than court</li><li>Private and confidential</li><li>Less formal and stressful</li><li>Parties keep control (except arbitration)</li><li>Preserves relationships</li><li>Flexible solutions (apologies, explanations)</li></ul></div><div class="ag"><h5>Disadvantages</h5><ul><li>No guarantee of settlement — may add cost if it fails</li><li>Imbalance of power (an individual v an insurer)</li><li>No precedent is created</li><li>Limited appeal from arbitration</li><li>No legal aid for most ADR</li><li>Complex legal points may need a judge</li></ul></div></div>` }
  ],
  debate: [{ q: 'Should ADR be compulsory for negligence claims?', for: ['Most claims settle anyway; ADR speeds this up.', 'Reduces court backlogs and costs.', 'Churchill confirms courts can require it.'], ag: ['Serious injury claims involve complex legal and medical issues.', 'Power imbalance between claimants and insurers.', 'Forcing ADR may delay access to a court (Article 6).'] }],
  cases: ['halsey', 'churchill', 'dunnett', 'acas', 'fos'],
  worked: [],
  pitfalls: ['Confusing mediation (no suggestions) with conciliation (suggestions).', 'Saying arbitration is not binding.', 'Describing methods without saying which situations they suit — the specification asks for “situations for use”.'],
  cards: [
    ['Difference between mediation and conciliation?', 'A conciliator may suggest terms; a mediator helps the parties reach their own solution.'],
    ['Which ADR method gives a binding decision?', 'Arbitration (Arbitration Act 1996).'],
    ['What is an ombudsman?', 'An independent official who investigates complaints against organisations, free to the complainant.'],
    ['Churchill v Merthyr Tydfil (2023)?', 'Courts can order parties to engage in ADR.'],
    ['Dunnett v Railtrack (2002)?', 'A winning party who refused ADR was denied its costs.'],
    ['Which body provides conciliation in employment disputes?', 'Acas.'],
    ['How do most negligence claims end?', 'By negotiated settlement, often between insurers.']
  ],
  quiz: [
    { q: 'Which method involves a neutral third party who makes a binding decision?', o: ['Arbitration', 'Mediation', 'Negotiation', 'Conciliation'], x: '' },
    { q: 'A complaint that a bank mis-sold insurance is best taken to…', o: ['the Financial Ombudsman Service', 'the Crown Court', 'Acas', 'a jury'], x: '' },
    { q: 'Which case held that courts can order parties to try ADR?', o: ['Churchill v Merthyr Tydfil CBC', 'Halsey v Milton Keynes', 'Donoghue v Stevenson', 'Caparo v Dickman'], x: '2023.' },
    { q: 'A disadvantage of ADR is that…', o: ['it does not create precedent', 'it is always more expensive', 'it is always public', 'it needs a jury'], x: '' }
  ],
  exam: [{ q: 'Evaluate whether Mrs Ahmed should use ADR instead of going to court. [10]', m: 10, scen: 'Mrs Ahmed, 70, tripped on a broken paving slab outside a supermarket and broke her wrist. The supermarket’s insurer has offered £2,500. She thinks her claim is worth more and is anxious about going to court.', ms: ['negotiation — insurer offer; counter-offer; Part 36', 'mediation — small claims mediation; control; cheap', 'arbitration/ombudsman less suitable here', 'advantages — cost, speed, less stress for an elderly client', 'disadvantages — power imbalance with insurer; no precedent; may still need court', 'courts’ attitude — Halsey, Churchill, costs penalties', 'justified recommendation'] }],
  tools: ['adrsort']
});

/* ---------- A4 Legal skills ---------- */
TOPICS.push({
  id: '1.A4', unit: '1', ref: 'A4', title: 'Legal skills: research, referencing and communication',
  short: 'Legal sources, researching and referencing legal information, and professional communication with colleagues, lawyers and clients',
  summary: 'Unit 1 assesses legal skills as well as knowledge. You need to know where the law is found, how to research and reference it accurately, and how to communicate it professionally — in a file note for a colleague, a letter to a client or a presentation.',
  spec: ['Legal sources', 'Researching and referencing legal information', 'Methods of appropriate professional communication with colleagues, lawyers and clients'],
  learn: [
    { h: 'Legal sources', html: `
<ul><li><b>Primary sources</b> — the law itself: <b>legislation</b> (Acts of Parliament and statutory instruments) and <b>case law</b> (judgments and law reports).</li>
<li><b>Secondary sources</b> — commentary on the law: textbooks, practitioner works, journal articles, reliable websites, reports of the Law Commission.</li>
<li><b>Where to find them</b>: legislation.gov.uk (legislation); the National Archives’ Find Case Law service and BAILII (free judgments); subscription databases such as Westlaw and LexisNexis; official law reports.</li></ul>` },
    { h: 'Researching and reading a case', html: `
<ol><li>Find the case by name or citation.</li><li>Identify the <b>court</b> (its place in the hierarchy decides how binding it is — C1).</li><li>Note the <b>material facts</b>.</li><li>Identify the <b>legal issue</b>.</li><li>Find the <b>decision</b> and the <b>ratio decidendi</b>; note any important <b>obiter dicta</b> and dissents.</li><li>Consider its <b>impact</b> on later cases and on your client’s case (AO3).</li></ol>
<p>In the Unit 1 assessment you receive a real case one week in advance to research in this way.</p>` },
    { h: 'Referencing', html: `
<ul><li><b>Cases</b>: name in italics, year and citation — e.g. <i>Donoghue v Stevenson</i> [1932] AC 562; <i>Robinson v Chief Constable of West Yorkshire Police</i> [2018] UKSC 4 (a <b>neutral citation</b>, used since 2001, shows the court and number).</li>
<li><b>Legislation</b>: short title and section — e.g. s1 Law Reform (Contributory Negligence) Act 1945.</li>
<li><b>Secondary sources</b>: author, title, publisher/website, date, and date accessed for websites.</li>
<li>OSCOLA (the Oxford University Standard for the Citation of Legal Authorities) is the standard referencing style in UK law.</li></ul>` },
    { h: 'Professional communication', html: `
<div class="tbl"><table><tr><th>Format</th><th>Audience and style</th></tr>
<tr><td><b>Solicitor’s letter to a client</b></td><td>A formal letter containing legal information written for a non-lawyer: clear heading and reference; summary of facts; explanation of the law in plain English; advice on the likely outcome; options (courts, ADR, funding); next steps; polite close</td></tr>
<tr><td><b>File note / case summary</b></td><td>For colleagues and lawyers: a brief but comprehensive synopsis with detailed legal research — facts, issues, authorities with citations, analysis, recommendations</td></tr>
<tr><td><b>Email and presentation</b></td><td>Concise and professional; presentations use clear slides and speaker notes</td></tr></table></div>
<p>Always be accurate, concise, confidential (client data is protected) and professional in tone. See the <b>letter structure</b> tool in Explore.</p>` }
  ],
  debate: [],
  cases: ['donoghue', 'robinson'],
  worked: [{ q: 'Rewrite this legal sentence for a client letter: “Pursuant to <i>Caparo</i>, the tripartite test for the imposition of a duty of care is satisfied.”', s: ['<b class="st">Identify the audience</b>A client is not a lawyer, so avoid Latin and jargon.', '<b class="st">Explain simply</b>“The courts use a three-part test to decide whether someone owed you a legal duty to take care.”', '<b class="st">Apply</b>“In your case, the driver could clearly foresee that careless driving might injure you; you were close by on the same road; and it is fair to make drivers responsible for this.”', '<b class="st">Conclude</b>“We are therefore confident the driver owed you a duty of care.”'], a: 'Plain English, applied to the client’s own facts, with a clear conclusion.' }],
  pitfalls: ['Writing a client letter full of legal jargon.', 'Citing cases without the court or year.', 'Copying from sources instead of explaining and referencing them.'],
  cards: [
    ['Primary v secondary legal sources?', 'Primary: legislation and case law. Secondary: textbooks, articles, commentary.'],
    ['What is a neutral citation?', 'A court-assigned reference showing year, court and number, e.g. [2018] UKSC 4.'],
    ['Where can you find free legislation?', 'legislation.gov.uk.'],
    ['What is a file note?', 'A brief but comprehensive synopsis of a case for colleagues, with detailed legal research.'],
    ['What is a solicitor’s letter in the assessment?', 'A formal letter with legal information written for a non-lawyer client.'],
    ['What referencing standard is used in UK law?', 'OSCOLA.']
  ],
  quiz: [
    { q: 'Which is a primary source of law?', o: ['An Act of Parliament', 'A textbook', 'A journal article', 'A news report'], x: '' },
    { q: 'In [2018] UKSC 4, “UKSC” shows…', o: ['the court — the UK Supreme Court', 'the judge', 'the claimant', 'the law report series'], x: 'Neutral citation.' },
    { q: 'A letter to a client should…', o: ['explain the law in plain English', 'use as much Latin as possible', 'include only case citations', 'avoid giving advice'], x: '' }
  ],
  exam: [{ q: 'Prepare a file note for your supervising solicitor summarising a negligence case you have researched. [8]', m: 8, ms: ['citation and court', 'material facts', 'legal issue', 'decision and ratio decidendi', 'obiter/dissent if relevant', 'impact on later cases and on the client', 'professional format and accurate referencing'] }],
  tools: ['lettersteps', 'sourcesort']
});

/* ---------- B1 Sources of advice ---------- */
TOPICS.push({
  id: '1.B1', unit: '1', ref: 'B1', title: 'Sources of advice',
  short: 'Solicitors, barristers, Citizens Advice, law centres, insurance companies and the internet',
  summary: 'Someone injured by another’s negligence needs advice about whether they have a claim and how to pursue it. This topic covers the main sources of advice, what each offers, their cost and their suitability for different clients.',
  spec: ['Solicitors', 'Barristers', 'Citizens Advice', 'Law centres', 'Insurance companies', 'The internet'],
  learn: [
    { h: 'Legal professionals', html: `
<ul><li><b>Solicitors</b> — the usual first point of contact. Personal injury solicitors advise on liability and value, gather evidence (medical reports), negotiate with insurers and run the claim, often on a conditional fee agreement. Regulated by the Solicitors Regulation Authority.</li>
<li><b>Barristers</b> — specialist advocates and advisers, usually instructed by a solicitor to give an opinion on the merits or value of a claim, draft documents, and represent at trial. Members of the public can go direct to some barristers under the public access scheme. Regulated by the Bar Standards Board.</li>
<li><b>Chartered legal executives</b> and <b>paralegals</b> also handle much personal injury work.</li></ul>` },
    { h: 'Free and other advice', html: `
<ul><li><b>Citizens Advice</b> — a national charity with local offices, phone and online help. Free, general advice on many problems; can help people understand options and refer them to solicitors.</li>
<li><b>Law centres</b> — free, specialist legal advice and representation in social welfare law (housing, employment, immigration, benefits) for people who cannot afford a lawyer. There are relatively few, and many have closed because of funding cuts.</li>
<li><b>Insurance companies</b> — legal expenses insurance often includes a legal helpline; motor insurers handle claims and may refer the policyholder to panel solicitors.</li>
<li><b>The internet</b> — official sites (gov.uk, the court service), charities (Advicenow), solicitors’ websites and forums. Convenient and free, but quality varies: information may be out of date, inaccurate or from another jurisdiction (e.g. US law). Claims management companies advertise online and are regulated by the Financial Conduct Authority.</li>
<li>Also: trade unions (for workplace injuries), university law clinics, and pro bono schemes ([[c:lawworks]]).</li></ul>` },
    { h: 'Choosing the right source', html: `<div class="tbl"><table><tr><th>Client situation</th><th>Suitable source</th></tr><tr><td>Serious injury claim worth thousands</td><td>Personal injury solicitor on a conditional fee agreement; barrister for opinion and trial</td></tr><tr><td>Small claim, wants to act alone</td><td>Citizens Advice, gov.uk guidance, legal expenses helpline</td></tr><tr><td>Injured at work, union member</td><td>Trade union legal service</td></tr><tr><td>Low income, housing disrepair injury</td><td>Law centre, Citizens Advice</td></tr><tr><td>Car crash, has motor insurance with legal cover</td><td>Insurer’s legal helpline and panel solicitor</td></tr></table></div>` }
  ],
  debate: [{ q: 'Is there enough free legal advice for people injured by negligence?', for: ['Citizens Advice is widely available and free.', 'Many solicitors give free initial consultations and work on no win, no fee.', 'Online guidance is extensive.'], ag: ['Law centres have closed; “advice deserts” in some areas.', 'Online information may be unreliable.', 'People with low-value or complex claims may struggle to find a lawyer.'] }],
  cases: ['lawworks'],
  worked: [],
  pitfalls: ['Treating all sources as equally reliable — evaluate them.', 'Saying barristers are always the first point of contact.', 'Forgetting cost and suitability for the client in the scenario.'],
  cards: [
    ['Usual first point of contact for a negligence claim?', 'A solicitor.'],
    ['When is a barrister usually instructed?', 'For a specialist opinion, drafting, and advocacy at trial — usually via a solicitor.'],
    ['What does Citizens Advice offer?', 'Free, general advice through a national network.'],
    ['What do law centres offer?', 'Free specialist advice and representation in social welfare law.'],
    ['Main risk of internet advice?', 'It may be inaccurate, out of date or about another country’s law.'],
    ['Who regulates solicitors?', 'The Solicitors Regulation Authority.']
  ],
  quiz: [
    { q: 'Which source gives free specialist advice mainly in housing, employment and benefits law?', o: ['Law centres', 'Barristers', 'Insurance companies', 'Claims companies'], x: '' },
    { q: 'A barrister is usually instructed by…', o: ['a solicitor', 'the court', 'the police', 'an ombudsman'], x: 'Public access is also possible.' },
    { q: 'A weakness of online legal advice is that…', o: ['it may relate to another jurisdiction', 'it is always expensive', 'it is regulated by the SRA', 'it is only available in person'], x: '' }
  ],
  exam: [{ q: 'Advise Jake on suitable sources of advice for his claim. [6]', m: 6, scen: 'Jake, 19, works part-time in a café and was burned when a faulty coffee machine exploded. He is not in a union and has no legal expenses insurance. He found conflicting information online.', ms: ['solicitor — PI specialist, free first meeting, CFA', 'Citizens Advice — free general help', 'law centre — may not cover PI', 'internet — reliability issues (evaluate what Jake found)', 'barrister via solicitor if it goes to trial', 'justified recommendation'] }],
  tools: ['advicesort']
});

/* ---------- B2 Funding ---------- */
TOPICS.push({
  id: '1.B2', unit: '1', ref: 'B2', title: 'Sources of funding',
  short: 'Own resources, insurance, state funding, conditional fees, trade union membership, Citizens Advice and pro bono',
  summary: 'Legal action can be very expensive. This topic covers how claimants can pay for advice and representation in a negligence claim, and which funding suits which client — especially conditional fee (“no win, no fee”) agreements, which fund most personal injury claims since civil legal aid was cut.',
  spec: ['Own resources', 'Insurance', 'State funding', 'Conditional fees', 'Trade union membership', 'Citizens Advice', 'Pro bono'],
  learn: [
    { h: 'Conditional fee agreements (CFAs)', html: `
<ul><li>A “<b>no win, no fee</b>” agreement (Courts and Legal Services Act 1990 s58). If the claim fails, the client pays no fee to their own lawyer. If it succeeds, the lawyer receives their normal fee plus a <b>success fee</b> (up to 100% of basic costs).</li>
<li>Since the <b>Legal Aid, Sentencing and Punishment of Offenders Act 2012</b> (LASPO), the success fee is <b>not recoverable</b> from the losing defendant — it comes out of the claimant’s damages, and in personal injury claims it is capped at <b>25%</b> of general damages and past losses.</li>
<li>Usually combined with <b>after-the-event (ATE) insurance</b> to cover the other side’s costs and disbursements (such as expert fees) if the claim fails. In personal injury, claimants are largely protected from paying the defendant’s costs by qualified one-way costs shifting (B3).</li>
<li>Damages-based agreements (the lawyer takes a percentage of the damages) are also possible.</li></ul>` },
    { h: 'Other sources', html: `
<div class="tbl"><table><tr><th>Source</th><th>How it works</th><th>Limitations</th></tr>
<tr><td><b>Own resources</b></td><td>Paying privately — hourly rates or fixed fees</td><td>Expensive; risk of paying the other side’s costs</td></tr>
<tr><td><b>Insurance</b></td><td>Before-the-event (BTE) legal expenses insurance, often added to home or motor policies</td><td>Many people do not know they have it; limits on cover; insurer may choose the lawyer</td></tr>
<tr><td><b>State funding</b></td><td>Civil legal aid from the Legal Aid Agency, means- and merits-tested</td><td>Since LASPO 2012, most negligence and personal injury claims are <b>out of scope</b>. Exceptions include clinical negligence causing severe brain injury to babies around birth; exceptional case funding may be granted where human rights require it</td></tr>
<tr><td><b>Trade union membership</b></td><td>Unions fund members’ claims, especially workplace injuries</td><td>Only for members; usually work-related claims</td></tr>
<tr><td><b>Citizens Advice</b></td><td>Free advice and help with small claims</td><td>Rarely provides representation</td></tr>
<tr><td><b>Pro bono</b></td><td>Free work by lawyers and law clinics ([[c:lawworks]])</td><td>Limited capacity; not for large claims</td></tr></table></div>` }
  ],
  debate: [{ q: 'Have conditional fee agreements improved access to justice?', for: ['Allow people without money to bring claims.', 'Lawyers screen out weak claims.', 'No cost to the taxpayer.'], ag: ['Claimants lose up to 25% of their damages to success fees.', 'Lawyers may “cherry-pick” strong claims.', 'Low-value or complex claims may not be taken on.', 'Removal of legal aid left gaps.'] }],
  cases: ['lawworks'],
  worked: [],
  pitfalls: ['Saying legal aid is available for most negligence claims — it has not been since 2013.', 'Saying the loser pays the success fee — not since LASPO.', 'Forgetting to match funding to the client’s situation.'],
  cards: [
    ['What is a CFA?', 'A conditional fee agreement — no win, no fee; success fee if the claim succeeds.'],
    ['Which Act allowed CFAs?', 'Courts and Legal Services Act 1990 s58.'],
    ['Cap on success fee in personal injury claims?', '25% of general damages and past losses.'],
    ['Is civil legal aid available for most negligence claims?', 'No — removed by LASPO 2012 (with limited exceptions).'],
    ['What is BTE insurance?', 'Before-the-event legal expenses insurance, often part of home or motor cover.'],
    ['What is ATE insurance?', 'After-the-event insurance to cover the other side’s costs if the claim fails.'],
    ['What is pro bono work?', 'Free legal work by lawyers for those who cannot pay.']
  ],
  quiz: [
    { q: 'Since LASPO 2012, a CFA success fee in a personal injury claim is paid by…', o: ['the claimant, out of damages', 'the losing defendant', 'the state', 'the court'], x: 'Capped at 25%.' },
    { q: 'Which funding would suit an injured factory worker who is a union member?', o: ['Trade union funding', 'Civil legal aid', 'Pro bono only', 'Criminal legal aid'], x: '' },
    { q: 'Legal expenses cover added to a home insurance policy is…', o: ['before-the-event insurance', 'after-the-event insurance', 'a CFA', 'legal aid'], x: '' }
  ],
  exam: [{ q: 'Evaluate the funding options available to Leanne. [10]', m: 10, scen: 'Leanne, a single parent on a low income, was seriously injured when a bus braked sharply. Her claim may be worth £40,000. She has home insurance and is not in a trade union.', ms: ['legal aid — not available for PI after LASPO', 'CFA — no win no fee; success fee up to 25% of damages; ATE insurance', 'BTE insurance — check her home policy', 'own resources — unrealistic', 'Citizens Advice / pro bono — limited', 'QOCS protection from defendant’s costs', 'justified recommendation'] }],
  tools: ['fundsort']
});

/* ---------- B3 Costs ---------- */
TOPICS.push({
  id: '1.B3', unit: '1', ref: 'B3', title: 'The cost of taking legal action',
  short: 'Court costs, legal representation costs, costs against the unsuccessful party, and hidden costs including reputation and enforcing an award',
  summary: 'Before advising a client to sue, a lawyer must explain the costs and risks. This topic covers court fees, lawyers’ fees, the “loser pays” rule and its exceptions, and hidden costs such as time, stress, damage to reputation and the difficulty of enforcing a judgment.',
  spec: ['Court costs', 'Legal representation costs', 'Awarding of costs against the unsuccessful party', 'Hidden costs, loss of reputation, enforcement of award'],
  learn: [
    { h: 'Court and legal costs', html: `
<ul><li><b>Court fees</b> — an issue fee to start the claim (rising with the value of the claim; for larger claims it is a percentage of the amount claimed) and a hearing fee. People on low incomes may get help with fees (fee remission).</li>
<li><b>Legal representation costs</b> — solicitors’ and barristers’ fees, often charged by the hour, plus <b>disbursements</b> such as medical experts’ reports.</li>
<li><b>Fixed recoverable costs</b> apply to most fast-track and intermediate-track claims (extended in October 2023), so the amount the winner can recover from the loser is set in advance.</li></ul>` },
    { h: 'Who pays? Costs orders', html: `
<ul><li>The general rule is that <b>the loser pays the winner’s costs</b> (“costs follow the event”, CPR Part 44), though the court has discretion.</li>
<li><b>Small claims track</b>: costs are generally <b>not</b> recoverable, apart from fixed court fees and limited expenses.</li>
<li><b>Qualified one-way costs shifting (QOCS)</b>: since 2013, in personal injury claims an unsuccessful claimant usually does not have to pay the defendant’s costs (unless the claim is fundamentally dishonest or struck out).</li>
<li><b>Part 36 offers</b>: if a party rejects a settlement offer and then does no better at trial, it faces costs penalties — a strong incentive to settle.</li>
<li>Unreasonable refusal of ADR can lead to a costs penalty (A3).</li></ul>` },
    { h: 'Hidden costs and enforcement', html: `
<ul><li><b>Hidden costs</b>: time off work, travel, stress and anxiety, damaged relationships, the length of proceedings (often years for serious injury claims).</li>
<li><b>Loss of reputation</b>: public hearings and judgments can harm the reputation of both individuals and businesses (e.g. a hospital or a company found negligent).</li>
<li><b>Enforcement of the award</b>: winning does not guarantee payment. If the defendant does not pay, the claimant must apply to enforce — a <b>warrant of control</b> (enforcement agents seize goods), an <b>attachment of earnings order</b>, a <b>charging order</b> on property or a <b>third-party debt order</b> (freezing a bank account). A defendant with no money or insurance may never pay. In most negligence cases the defendant is insured, which makes recovery more likely.</li></ul>` }
  ],
  debate: [{ q: 'Does the risk of costs deter people with valid claims?', for: ['Fear of paying the other side’s costs.', 'Court fees and experts are expensive up front.', 'Hidden costs of stress and time.'], ag: ['QOCS largely protects personal injury claimants.', 'CFAs and ATE insurance remove most financial risk.', 'Small claims are designed to be low-cost.'] }],
  cases: ['dunnett'],
  worked: [],
  pitfalls: ['Forgetting QOCS in personal injury claims.', 'Assuming the winner always gets paid — enforcement may be needed.', 'Forgetting non-financial hidden costs.'],
  cards: [
    ['General rule on costs?', 'The loser pays the winner’s costs (costs follow the event).'],
    ['Costs on the small claims track?', 'Generally not recoverable, apart from fixed fees.'],
    ['What is QOCS?', 'Qualified one-way costs shifting — an unsuccessful PI claimant usually does not pay the defendant’s costs.'],
    ['What is a Part 36 offer?', 'A formal settlement offer; rejecting it and doing no better at trial brings costs penalties.'],
    ['Name three ways to enforce a judgment.', 'Warrant of control, attachment of earnings, charging order, third-party debt order.'],
    ['Name two hidden costs.', 'Time off work, stress, delay, loss of reputation.']
  ],
  quiz: [
    { q: 'Under QOCS, an unsuccessful personal injury claimant usually…', o: ['does not pay the defendant’s costs', 'pays double costs', 'pays the court’s costs only', 'goes to prison'], x: 'Unless dishonest.' },
    { q: 'An order that the debtor’s employer pays part of their wages to the claimant is…', o: ['an attachment of earnings order', 'a warrant of control', 'a Part 36 offer', 'an injunction'], x: '' },
    { q: 'Costs are generally not recoverable on…', o: ['the small claims track', 'the multi-track', 'the fast track', 'appeals'], x: '' }
  ],
  exam: [{ q: 'Explain the costs and risks Ben should consider before suing. [8]', m: 8, scen: 'Ben’s car was damaged by a builder’s skip that rolled into the road. Repairs cost £3,200 and he lost two weeks’ earnings as a delivery driver. The builder’s small company may not be insured.', ms: ['small claims track — costs not recoverable; court fees', 'legal representation may not be worthwhile', 'loser pays principle — limited on small claims', 'hidden costs — time, stress', 'enforcement risk — uninsured company; warrant of control, charging order', 'recommendation — negotiate/mediation first'] }],
  tools: ['costsort']
});

/* ---------- Unit 1 A–B tools ---------- */
TOOLS.civcrimsort = { type: 'sort', title: 'Civil or criminal?', intro: 'Sort each feature.', cats: ['Civil', 'Criminal'], items: [
  ['Balance of probabilities', 'Civil', ''], ['Beyond reasonable doubt', 'Criminal', ''], ['Claimant', 'Civil', ''], ['Prosecution', 'Criminal', ''], ['Liable', 'Civil', ''], ['Damages', 'Civil', ''], ['Sentence', 'Criminal', ''], ['County Court', 'Civil', ''], ['Crown Court', 'Criminal', '']
] };
TOOLS.appealsteps = { type: 'steps', title: 'Appealing a civil decision', intro: 'The steps to appeal after losing a negligence claim.', steps: [
  { h: 'Is there a ground?', html: '<p>The decision was <b>wrong</b> (law misapplied, or findings no reasonable judge could make) or <b>unjust</b> because of a serious procedural irregularity.</p>' },
  { h: 'Ask for permission', html: '<p>Ask the trial judge at the end of the hearing, or the appeal court. Test: a <b>real prospect of success</b> or some other compelling reason.</p>' },
  { h: 'File the appellant’s notice', html: '<p>Usually within <b>21 days</b>, with grounds of appeal.</p>' },
  { h: 'The right court', html: '<p>District Judge → Circuit Judge; County Court → High Court or Court of Appeal; High Court → Court of Appeal (Civil Division); then the Supreme Court on points of law of general public importance.</p>' },
  { h: 'Decision', html: '<p>The appeal court may affirm, set aside or vary the decision, order a retrial and award costs.</p>' }
] };
TOOLS.adrsort = { type: 'sort', title: 'Which ADR method suits?', intro: 'Choose the most suitable method for each dispute.', cats: ['Negotiation', 'Mediation', 'Conciliation', 'Arbitration', 'Ombudsman'], items: [
  ['An insurer and a solicitor discuss the value of a whiplash claim.', 'Negotiation', 'Most claims settle this way.'],
  ['Two neighbours fall out over a fallen tree that damaged a car and want to stay friends.', 'Mediation', 'Preserves the relationship.'],
  ['A worker disputes an unfair dismissal; Acas becomes involved.', 'Conciliation', ''],
  ['Two companies have a contract clause requiring disputes to go to a binding private decision.', 'Arbitration', ''],
  ['A customer complains that her bank mishandled a compensation payment.', 'Ombudsman', 'Financial Ombudsman Service.'],
  ['A patient wants an explanation and apology from a hospital after a surgical error.', 'Mediation', 'Flexible outcomes such as apologies.']
] };
TOOLS.lettersteps = { type: 'steps', title: 'Structure of a solicitor’s letter', intro: 'A reliable structure for advising a client in the Unit 1 task.', steps: [
  { h: 'Heading', html: '<p>Firm’s details, date, client’s name and address, reference, “Private and confidential”, and a subject line (Re: Your claim against …).</p>' },
  { h: 'Opening', html: '<p>Thank the client and explain the purpose of the letter.</p>' },
  { h: 'Summary of facts', html: '<p>Briefly set out the facts as you understand them, so the client can correct errors.</p>' },
  { h: 'The law in plain English', html: '<p>Explain duty, breach and damage simply, with key cases named but explained, not just cited.</p>' },
  { h: 'Application and likely outcome', html: '<p>Apply each element to the client’s facts; assess the strength of the claim and possible defences (contributory negligence).</p>' },
  { h: 'Practical advice', html: '<p>Where the case would be heard, ADR options, funding, likely damages, costs and time.</p>' },
  { h: 'Next steps and close', html: '<p>What you need from the client, what you will do next, and a professional sign-off.</p>' }
] };
TOOLS.sourcesort = { type: 'sort', title: 'Primary or secondary source?', intro: 'Classify each legal source.', cats: ['Primary', 'Secondary'], items: [
  ['The Law Reform (Contributory Negligence) Act 1945', 'Primary', 'Legislation.'],
  ['The Supreme Court judgment in Robinson [2018] UKSC 4', 'Primary', 'Case law.'],
  ['A tort law textbook', 'Secondary', ''],
  ['A Law Commission report', 'Secondary', 'Commentary and proposals.'],
  ['A statutory instrument', 'Primary', 'Delegated legislation.'],
  ['A legal blog explaining a new case', 'Secondary', 'Check reliability.']
] };
TOOLS.advicesort = { type: 'sort', title: 'Which source of advice?', intro: 'Pick the most suitable source of advice.', cats: ['Solicitor', 'Barrister', 'Citizens Advice', 'Law centre', 'Insurer'], items: [
  ['A serious injury claim needs evidence gathering and negotiation.', 'Solicitor', ''],
  ['The solicitor needs a specialist opinion on the value of a complex claim.', 'Barrister', ''],
  ['A student wants free general help with a £400 claim.', 'Citizens Advice', ''],
  ['A tenant on benefits was injured by housing disrepair and needs free specialist help.', 'Law centre', ''],
  ['A driver with legal cover on her motor policy wants to claim for her injuries.', 'Insurer', 'Legal expenses helpline.']
] };
TOOLS.fundsort = { type: 'sort', title: 'Which funding fits?', intro: 'Match each client to the most suitable funding.', cats: ['CFA', 'BTE insurance', 'Trade union', 'Own resources', 'Pro bono'], items: [
  ['A cyclist with a £60,000 injury claim and no savings', 'CFA', 'No win, no fee.'],
  ['A homeowner whose policy includes legal expenses cover', 'BTE insurance', ''],
  ['A nurse, union member, injured lifting a patient', 'Trade union', ''],
  ['A wealthy business owner who wants a lawyer of her choice', 'Own resources', ''],
  ['A low-income tenant with a small claim who cannot find a lawyer', 'Pro bono', 'Law clinic or LawWorks.']
] };
TOOLS.costsort = { type: 'sort', title: 'What kind of cost or rule?', intro: 'Classify each item.', cats: ['Court cost', 'Legal cost', 'Costs rule', 'Hidden cost', 'Enforcement'], items: [
  ['An issue fee to start a claim', 'Court cost', ''],
  ['A barrister’s fee for attending trial', 'Legal cost', ''],
  ['An unsuccessful personal injury claimant not paying the defendant’s costs', 'Costs rule', 'QOCS.'],
  ['Weeks of anxiety and time off work', 'Hidden cost', ''],
  ['Bailiffs taking goods to pay a judgment debt', 'Enforcement', 'Warrant of control.'],
  ['A medical expert’s report fee', 'Legal cost', 'A disbursement.']
] };
