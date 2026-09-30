/* ==========================================================
   UNIT 1 · DISPUTE SOLVING IN CIVIL LAW — C How precedent works, D The law of negligence
   ========================================================== */
addCases([
  { id: 'anns', n: 'Anns v Merton London Borough Council', y: 1978, a: '1', t: '1.C1b', c: 'HL', f: 'Flats were built on inadequate foundations and the council’s inspector failed to spot this. Tenants sued the council in negligence for the cost of repairs.', p: 'Lord Wilberforce set out a broad two-stage test for a duty of care: sufficient proximity, then any policy reasons to limit it. It greatly expanded negligence liability — and was later overruled.' },
  { id: 'murphy', n: 'Murphy v Brentwood District Council', y: 1991, a: '1', t: '1.C1b', c: 'HL', f: 'A house built on a defective raft foundation developed cracks. The owner sued the council, which had approved the plans.', p: 'Using the Practice Statement, the House of Lords overruled Anns: the two-stage test had gone too far. A clear example of overruling in the development of negligence.' },
  { id: 'dorsetyacht', n: 'Home Office v Dorset Yacht Co', y: 1970, a: '1', t: '1.C1b', c: 'HL', f: 'Young offenders escaped from supervision on an island because officers were asleep, and damaged yachts.', p: 'The Home Office owed a duty of care to the yacht owners. Lord Reid said the neighbour principle in Donoghue should apply unless there was a good reason to exclude it — showing how precedent developed the law of negligence.' },
  { id: 'blyth', n: 'Blyth v Birmingham Waterworks', y: 1856, a: '1', t: '1.D2', c: 'Court of Exchequer', f: 'A water main burst in an exceptionally severe frost and flooded a house.', p: 'Negligence is “the omission to do something which a reasonable man … would do, or doing something which a prudent and reasonable man would not do.” The defendants had taken reasonable precautions and were not liable.' },
  { id: 'bolitho', n: 'Bolitho v City and Hackney Health Authority', y: 1997, a: '1', t: '1.D2', c: 'HL', f: 'A doctor failed to attend a child with breathing difficulties. She argued that even if she had attended she would not have intubated, and some doctors would have agreed.', p: 'Refined the Bolam test: the body of professional opinion must be capable of withstanding logical analysis. The court decides whether a professional practice is reasonable.' },
  { id: 'daborn', n: 'Daborn v Bath Tramways', y: 1946, a: '1', t: '1.D2', c: 'CA', f: 'During the Second World War, a left-hand-drive ambulance had no signal for turning right. A bus driver ran into it.', p: 'Social utility: “the purpose to be served, if sufficiently important, justifies the assumption of abnormal risk.” The ambulance driver was not negligent.' },
  { id: 'mahon', n: 'Mahon v Osborne', y: 1939, a: '1', t: '1.D5', c: 'CA', f: 'A patient died after a swab was left inside him following an abdominal operation.', p: 'Res ipsa loquitur can apply in surgical cases where something left inside a patient would not normally happen without negligence.' },
  { id: 'wardtesco', n: 'Ward v Tesco Stores', y: 1976, a: '1', t: '1.D5', c: 'CA', f: 'A customer slipped on yoghurt spilled on a supermarket floor. There was no evidence of how long it had been there.', p: 'Res ipsa loquitur applied: floors kept properly do not usually have spillages left on them. The burden shifted to Tesco to show it had a reasonable cleaning system, which it could not do.' },
  { id: 'geest', n: 'Geest plc v Lansiquot', y: 2002, a: '1', t: '1.D4', c: 'Privy Council', f: 'An injured claimant refused to have surgery that her doctors recommended, which would probably have improved her condition.', p: 'A claimant must take reasonable steps to mitigate their loss, but the burden of proving a failure to mitigate is on the defendant.' },
  { id: 'heil', n: 'Heil v Rankin', y: 2000, a: '1', t: '1.D4', c: 'CA (five judges)', f: 'The Court of Appeal considered whether awards of general damages for pain, suffering and loss of amenity were too low, after a Law Commission report.', p: 'Increased awards for the most serious injuries (by up to a third). Shows how judges set levels of general damages.' },
  { id: 'simmons', n: 'Simmons v Castle', y: 2012, a: '1', t: '1.D4', c: 'CA', f: 'A case used to implement the Jackson reforms to civil costs, which stopped claimants recovering success fees from defendants.', p: 'General damages for pain, suffering and loss of amenity were increased by 10% from April 2013 to compensate claimants for having to pay their lawyers’ success fees.' },
  { id: 'wellswells', n: 'Wells v Wells', y: 1998, a: '1', t: '1.D4', c: 'HL', f: 'The House of Lords considered how to calculate lump sums for future losses, such as care, for seriously injured claimants.', p: 'Lump sums should be calculated on the assumption that claimants invest cautiously (in index-linked government stock), so they are fully compensated. Shows the difficulty of predicting future loss with a lump sum.' }
]);

/* ---------- C1a Precedent: the doctrine ---------- */
TOPICS.push({
  id: '1.C1a', unit: '1', ref: 'C1', title: 'The doctrine of precedent',
  short: 'Stare decisis, the hierarchy of courts, ratio decidendi, obiter dicta, law reporting, binding and persuasive precedent',
  summary: 'Much of the law of negligence was made by judges, not Parliament. The doctrine of precedent means that decisions of higher courts bind lower courts in later cases with similar facts. This topic explains how precedent works in the civil court hierarchy, how to find the binding part of a judgment and how cases are reported.',
  spec: ['The doctrine of precedent in the court hierarchy and its role in the development of the law of negligence', 'Hierarchy of courts', 'Ratio decidendi', 'Obiter dicta', 'Law reporting of decisions', 'Following precedent: powers of the appeal courts, binding precedents, persuasive precedents'],
  learn: [
    { h: 'Stare decisis and the hierarchy', html: `
<p><b>Stare decisis</b> — “stand by what has been decided”. Like cases should be decided alike, giving certainty and fairness.</p>
<div class="tbl"><table><tr><th>Court</th><th>Bound by</th><th>Binds</th></tr>
<tr><td><b>Supreme Court</b></td><td>Not bound by its own decisions — can depart under the Practice Statement ([[c:ps1966]]) when “it appears right to do so”</td><td>All lower courts</td></tr>
<tr><td><b>Court of Appeal (Civil Division)</b></td><td>The Supreme Court; normally its own past decisions, except in the [[c:youngbristol]] situations</td><td>The High Court and County Court</td></tr>
<tr><td><b>High Court</b></td><td>The Supreme Court and Court of Appeal</td><td>The County Court</td></tr>
<tr><td><b>County Court</b></td><td>All higher courts</td><td>Does not create binding precedent</td></tr></table></div>
<p>Before 1966 the House of Lords was bound by its own decisions ([[c:londonstreet]]). Try the <b>Is it binding?</b> tool in Explore.</p>` },
    { h: 'Ratio decidendi and obiter dicta', html: `
<ul><li><b>Ratio decidendi</b> — “the reason for deciding”: the legal principle needed to decide the case on its material facts. This is the <b>binding</b> part. In [[c:donoghue]], the ratio is that a manufacturer owes a duty of care to the ultimate consumer of its products.</li>
<li><b>Obiter dicta</b> — “things said by the way”: other comments, such as Lord Atkin’s wider <b>neighbour principle</b>, or what would have happened on different facts. Obiter is <b>persuasive</b> only — but can later become law: the obiter in [[c:hedleybyrne]] on negligent misstatement became accepted law.</li>
<li>Finding the ratio can be hard: judgments are long, and in appeal courts several judges may give different reasons.</li></ul>` },
    { h: 'Binding and persuasive precedents', html: `
<ul><li><b>Binding precedent</b> — the ratio of a higher court (or the same court in some cases) must be followed.</li>
<li><b>Persuasive precedent</b> — may be followed but need not be: obiter dicta; decisions of lower courts; dissenting judgments; decisions of the Judicial Committee of the Privy Council (which can bind English courts if the Board expressly says it states English law — [[c:willers]]); decisions from other common law countries.</li>
<li><b>Powers of the appeal courts</b> — to affirm, reverse or vary decisions; to overrule earlier precedents (the Supreme Court) or depart from their own decisions in limited situations (the Court of Appeal under Young, and see [[c:davisjohnson]]).</li></ul>` },
    { h: 'Law reporting', html: `
<p>Precedent depends on accurate reports of judgments. The official <b>Law Reports</b> (published by the Incorporated Council of Law Reporting since 1865) include the judges’ checked text and arguments; other series include the Weekly Law Reports (WLR) and All England Law Reports (All ER). Since 2001 judgments have <b>neutral citations</b> (e.g. [2018] UKSC 4), and many are free online through the National Archives’ Find Case Law and BAILII. A case is cited by name, year, volume, report series and page: <i>Caparo Industries plc v Dickman</i> [1990] 2 AC 605.</p>` },
    { h: 'Precedent and the development of negligence', html: `
<ol><li><b>[[c:donoghue]] (1932)</b> — the modern law of negligence begins: the neighbour principle.</li>
<li><b>[[c:hedleybyrne]] (1964)</b> — extended to careless statements causing financial loss.</li>
<li><b>[[c:dorsetyacht]] (1970)</b> — the neighbour principle applies unless there is a reason to exclude it.</li>
<li><b>[[c:anns]] (1978)</b> — a broad two-stage test.</li>
<li><b>[[c:murphy]] (1991)</b> — Anns overruled; <b>[[c:caparo]] (1990)</b> — the three-stage test.</li>
<li><b>[[c:robinson]] (2018)</b> — Caparo applies to new situations; established categories follow existing precedent; the law develops incrementally by analogy.</li></ol>` }
  ],
  debate: [{ q: 'Is precedent a good way to develop the law of negligence?', for: ['Certainty — lawyers can predict outcomes and advise clients.', 'Flexibility — judges adapt the law to new situations (Donoghue).', 'Based on real facts; practical.', 'Consistency and fairness.'], ag: ['Rigid — lower courts must follow bad decisions.', 'Slow — depends on cases reaching appeal courts.', 'Hard to find the ratio in long judgments.', 'Retrospective — changes apply to past events.', 'Judges are unelected; policy choices (Hill) may be for Parliament.'] }],
  cases: ['ps1966', 'youngbristol', 'londonstreet', 'donoghue', 'hedleybyrne', 'willers', 'davisjohnson', 'dorsetyacht', 'anns', 'murphy', 'caparo', 'robinson'],
  worked: [],
  pitfalls: ['Saying the Court of Appeal can freely overrule itself.', 'Confusing ratio and obiter.', 'Forgetting that lower court decisions are persuasive, not binding, on higher courts.'],
  cards: [
    ['What does stare decisis mean?', 'Stand by what has been decided.'],
    ['What is the ratio decidendi?', 'The legal reason for the decision on the material facts — the binding part.'],
    ['What are obiter dicta?', 'Things said by the way — persuasive only.'],
    ['What allowed the House of Lords to depart from its own decisions?', 'The Practice Statement 1966.'],
    ['Young v Bristol Aeroplane exceptions?', 'Conflicting CA decisions; conflict with a later HL/UKSC decision; decision made per incuriam.'],
    ['Give an example of obiter becoming law.', 'Hedley Byrne — negligent misstatement.'],
    ['When can a Privy Council decision bind English courts?', 'When the Board expressly says it states English law (Willers v Joyce).'],
    ['Who publishes the official Law Reports?', 'The Incorporated Council of Law Reporting.']
  ],
  quiz: [
    { q: 'The binding part of a judgment is the…', o: ['ratio decidendi', 'obiter dicta', 'headnote', 'dissent'], x: '' },
    { q: 'Which court is not bound by its own previous decisions?', o: ['The Supreme Court', 'The Court of Appeal', 'The High Court', 'The County Court'], x: 'Practice Statement.' },
    { q: 'A Court of Appeal decision binds…', o: ['the High Court and County Court', 'the Supreme Court', 'no court', 'only criminal courts'], x: '' },
    { q: 'Lord Atkin’s neighbour principle in Donoghue v Stevenson is usually regarded as…', o: ['obiter dicta', 'the only ratio', 'a statute', 'a dissent'], x: 'The narrow ratio concerns manufacturers.' },
    { q: 'Which case set out the three-stage test for duty of care?', o: ['Caparo v Dickman', 'Anns v Merton', 'Hedley Byrne', 'Murphy v Brentwood'], x: '1990.' }
  ],
  exam: [{ q: 'Analyse the likely impact of the pre-release case on future negligence claims, explaining its status in the hierarchy of courts. [10]', m: 10, ms: ['identifies court and binding force', 'identifies ratio and any obiter', 'binding/persuasive for which courts', 'how later courts could follow, distinguish or overrule it', 'place in the development of negligence (Donoghue → Caparo → Robinson)', 'impact on clients and insurers'] }],
  tools: ['binding', 'ratiosort']
});

/* ---------- C1b Following and avoiding precedent ---------- */
TOPICS.push({
  id: '1.C1b', unit: '1', ref: 'C1', title: 'Avoiding precedent and reading case law',
  short: 'Distinguishing, overruling and reversing; how to research, find, read and interpret case law',
  summary: 'Precedent is not completely rigid. Judges can avoid following an earlier decision by distinguishing it on its facts, higher courts can overrule earlier precedents, and appeal courts reverse decisions in the same case. This topic explains each method, with examples from negligence, and how to read and interpret a case.',
  spec: ['Avoiding binding precedents: distinguishing', 'Overruling', 'Reversing', 'How to research, find, read and interpret case law'],
  learn: [
    { h: 'Distinguishing', html: `
<p>A court finds that the <b>material facts</b> of the present case are sufficiently different from the precedent, so it does not have to follow it. Any court can do this.</p>
<ul><li>[[c:boltonstone]] (1951): a cricket ball hit someone about six times in 30 years — the risk was so small it was not negligent. [[c:millerjackson]] (1977): balls were hit out about eight or nine times a season — distinguished; the club was liable (in negligence and nuisance).</li>
<li>[[c:balfour]] and [[c:merritt]]: agreements between spouses — living together v separated.</li></ul>` },
    { h: 'Overruling and reversing', html: `
<ul><li><b>Overruling</b> — a higher court (or the Supreme Court using the Practice Statement) decides that the legal rule in an <b>earlier, different case</b> was wrong. [[c:murphy]] overruled [[c:anns]]; [[c:herrington]] (1972) used the Practice Statement to overrule Addie v Dumbreck (1929) and hold that occupiers owe a duty of common humanity to child trespassers; [[c:shivpuri]] overruled a decision made only a year earlier.</li>
<li><b>Reversing</b> — a higher court changes the decision of a lower court <b>in the same case</b> on appeal. In [[c:robinson]], the Court of Appeal held the police owed no duty; the Supreme Court reversed that decision in 2018.</li>
<li>Also: departing from own decisions (Court of Appeal under [[c:youngbristol]]); the Privy Council’s influence ([[c:holley]] and [[c:jameskarimi]]).</li></ul>` },
    { h: 'Reading and interpreting a case', html: `
<ol><li><b>Headnote</b> — the reporter’s summary (useful, but not part of the judgment).</li><li><b>Facts and procedural history</b> — which courts heard it before.</li><li><b>Issues</b> the court had to decide.</li><li><b>Judgments</b> — lead judgment, concurring and dissenting judgments.</li><li><b>Ratio</b> — the principle necessary for the decision on the material facts.</li><li><b>Obiter</b> — wider comments.</li><li><b>Outcome</b> — appeal allowed or dismissed.</li></ol>
<p>Then <b>interpret</b>: how wide is the principle? Which future cases will it affect? Can your client’s case be distinguished from it? This is AO3 in the Unit 1 assessment.</p>` }
  ],
  debate: [{ q: 'Does distinguishing give judges too much freedom?', for: ['Allows justice in individual cases.', 'Keeps the law flexible without overruling.'], ag: ['Fine distinctions make the law complex and uncertain.', 'Can be used to avoid precedents judges dislike.'] }],
  cases: ['boltonstone', 'millerjackson', 'balfour', 'merritt', 'anns', 'murphy', 'herrington', 'shivpuri', 'robinson', 'holley', 'jameskarimi', 'knuller', 'gould', 'horncastle', 'rtaylor'],
  worked: [{ q: 'A local football club’s balls regularly land in a neighbouring garden, injuring a visitor. The club relies on <i>Bolton v Stone</i>. Advise.', s: ['<b class="st">Precedent</b>In Bolton v Stone (HL) the risk was so small (about six balls in 30 years) that there was no breach.', '<b class="st">Status</b>A House of Lords decision binds the courts below.', '<b class="st">Distinguish</b>The material facts differ: here balls land regularly, so the risk is foreseeable and significant — like Miller v Jackson.', '<b class="st">Conclude</b>A court is likely to distinguish Bolton and find a breach of duty.'], a: 'Distinguishing on material facts is the key AO3 skill.' }],
  pitfalls: ['Confusing overruling (a different, earlier case) with reversing (the same case on appeal).', 'Saying only the Supreme Court can distinguish — any court can.'],
  cards: [
    ['What is distinguishing?', 'Finding the material facts are different, so a precedent need not be followed.'],
    ['What is overruling?', 'A higher court decides the legal rule in an earlier, different case was wrong.'],
    ['What is reversing?', 'A higher court changes the lower court’s decision in the same case on appeal.'],
    ['Which case overruled Anns v Merton?', 'Murphy v Brentwood DC (1991).'],
    ['Bolton v Stone v Miller v Jackson?', 'Cricket balls: rare (not liable) v frequent (liable) — distinguished on facts.'],
    ['What did Herrington overrule?', 'Addie v Dumbreck (1929) on duties to child trespassers.']
  ],
  quiz: [
    { q: 'Murphy v Brentwood overruling Anns v Merton is an example of…', o: ['overruling', 'reversing', 'distinguishing', 'obiter'], x: '' },
    { q: 'When the Supreme Court changed the Court of Appeal’s decision in Robinson, it…', o: ['reversed it', 'overruled it', 'distinguished it', 'followed it'], x: 'Same case.' },
    { q: 'Which court can distinguish a precedent?', o: ['Any court', 'Only the Supreme Court', 'Only the Court of Appeal', 'No court'], x: '' }
  ],
  exam: [{ q: 'Explain how the courts could avoid following the pre-release case if a similar claim arose. [8]', m: 8, ms: ['distinguishing on material facts — example', 'overruling by a higher court — Practice Statement; Anns/Murphy', 'reversing on appeal in the same case — Robinson', 'Court of Appeal limits — Young v Bristol', 'application to the facts of the case'] }],
  tools: ['avoidsort']
});

/* ---------- D1 Duty of care ---------- */
TOPICS.push({
  id: '1.D1', unit: '1', ref: 'D1', title: 'Duty of care',
  short: 'The neighbour principle and the three-stage test: proximity, foreseeability, and whether it is fair, just and reasonable',
  summary: 'The first thing a claimant in negligence must prove is that the defendant owed them a duty of care. Established categories (drivers to road users, doctors to patients, employers to employees) are straightforward; in new situations the courts use the three-stage Caparo test.',
  spec: ['Three stage test: proximity', 'Foreseeability', 'Fair, just and reasonable'],
  learn: [
    { h: 'From Donoghue to Robinson', html: `
<p>In [[c:donoghue]], Lord Atkin said: “You must take reasonable care to avoid acts or omissions which you can reasonably foresee would be likely to injure your neighbour.” Neighbours are “persons who are so closely and directly affected by my act that I ought reasonably to have them in contemplation”.</p>
<p>[[c:robinson]] (2018) explained that where there is an <b>established category</b> of duty (road users, doctor and patient, employer and employee, manufacturer and consumer), the court simply applies the existing law. The three-stage test in [[c:caparo]] is used for <b>novel</b> situations.</p>` },
    { h: 'The three-stage test (Caparo)', html: `
<ol><li><b>Was damage to the claimant reasonably foreseeable?</b> Would a reasonable person foresee harm to someone in the claimant’s position? In [[c:bourhill]] a pregnant woman who heard a crash and later saw blood was not a foreseeable victim.</li>
<li><b>Was there sufficient proximity</b> (closeness) between the parties — in time, space or relationship? In [[c:kent]], once the ambulance service accepted the 999 call, it owed a duty to the patient.</li>
<li><b>Is it fair, just and reasonable to impose a duty?</b> A policy question: would a duty open the “floodgates”, be unfair to the defendant, or harm public services? In [[c:hillccwy]] police owed no duty to a future victim of a serial killer they had not caught. In [[c:michael]] (2015) the police owed no general duty to protect a woman from an attacker.</li></ol>
<p>But police (and other public bodies) do owe a duty for their own <b>positive acts</b> that cause harm — [[c:robinson]], where officers knocked over a pedestrian while arresting a suspect.</p>` }
  ],
  debate: [{ q: 'Should the police owe a duty of care to victims of crime?', for: ['Accountability and compensation for serious failures (Michael).', 'Other public services owe duties once they take on responsibility (Kent).', 'Human rights claims already allow some remedies.'], ag: ['Defensive policing and diversion of resources (Hill).', 'Floodgates — many claims.', 'Police cannot prevent all crime.', 'Robinson already covers positive acts.'] }],
  cases: ['donoghue', 'caparo', 'robinson', 'bourhill', 'kent', 'hillccwy', 'michael'],
  worked: [{ q: 'Sam, a learner driver, loses control and crashes into a garden wall, injuring Priti, who was standing behind it. Does Sam owe Priti a duty of care?', s: ['<b class="st">Established category?</b>Yes — drivers owe a duty to other road users and people nearby who may be injured by careless driving (Robinson: apply existing law).', '<b class="st">If Caparo were applied</b>Foreseeable: a reasonable driver can foresee injury to people near the road. Proximity: Priti was physically close. Fair, just and reasonable: drivers must be insured; no policy reason to deny a duty.', '<b class="st">Conclusion</b>Sam owes Priti a duty of care. Next consider breach (Nettleship — learners judged as competent drivers).'], a: 'Duty established.' }],
  pitfalls: ['Applying the full Caparo test to obvious established categories without mentioning Robinson.', 'Mixing up foreseeability of harm (duty) with remoteness of damage (D3).', 'Forgetting the policy stage.'],
  cards: [
    ['What is the neighbour principle?', 'Take reasonable care to avoid acts or omissions you can reasonably foresee would be likely to injure your neighbour (Donoghue).'],
    ['Three stages of the Caparo test?', 'Foreseeability of damage, proximity, fair just and reasonable.'],
    ['What did Robinson (2018) decide?', 'Caparo is for novel cases; established categories follow existing law; police owe a duty for positive acts.'],
    ['Bourhill v Young?', 'Claimant not a foreseeable victim — no duty.'],
    ['Kent v Griffiths?', 'Ambulance service owed a duty once the call was accepted.'],
    ['Hill v CC West Yorkshire?', 'No duty on police to a victim of a criminal not yet caught — not fair, just and reasonable.'],
    ['What is the floodgates argument?', 'A duty would lead to a flood of claims.']
  ],
  quiz: [
    { q: 'Which is NOT one of the Caparo stages?', o: ['Causation', 'Foreseeability', 'Proximity', 'Fair, just and reasonable'], x: 'Causation is part of damage (D3).' },
    { q: 'In Kent v Griffiths, the ambulance service owed a duty because…', o: ['it had accepted the call', 'it was a private company', 'the patient was a relative', 'there was a contract'], x: '' },
    { q: 'Which case says Caparo need not be applied to established categories?', o: ['Robinson v CC West Yorkshire', 'Hill v CC West Yorkshire', 'Bourhill v Young', 'Anns v Merton'], x: '2018.' }
  ],
  exam: [{ q: 'Apply the law on duty of care to the scenario. [8]', m: 8, scen: 'A council gym instructor tells Asha to lift weights far heavier than she is used to, without supervision. She is injured. The council argues it should not owe duties to gym users because it is a public body.', ms: ['established category? instructor/customer; Robinson', 'Caparo — foreseeability of injury', 'proximity — direct instruction', 'fair, just and reasonable — public body argument; positive act (Robinson), not an omission', 'distinguish Hill/Michael', 'conclusion: duty owed'] }],
  tools: ['negtree', 'dutysort']
});

/* ---------- D2 Breach of duty ---------- */
TOPICS.push({
  id: '1.D2', unit: '1', ref: 'D2', title: 'Breach of duty',
  short: 'The objective reasonable person test; special characteristics of defendants (professionals, learners, children) and risk factors (risk of harm, social utility, precautions)',
  summary: 'Once a duty is established, the claimant must show the defendant breached it — that they fell below the standard of the reasonable person. The standard is objective, but it is adjusted for professionals and children, and the court weighs risk factors such as the likelihood and seriousness of harm, the social value of the activity and the cost of precautions.',
  spec: ['Objective standard', 'The reasonable person test', 'Special characteristics of the defendant: professionals, learners, children', 'Special characteristics and risk factors of the claimant: the risk of harm, social utility, taking of precautions'],
  learn: [
    { h: 'The objective standard', html: `<p>The defendant is judged against a <b>reasonable person</b> doing the same activity ([[c:blyth]]): what would a reasonable, careful person have done in the circumstances? It is <b>objective</b> — the defendant’s own inexperience or personal failings do not lower the standard.</p>` },
    { h: 'Special characteristics of the defendant', html: `
<div class="tbl"><table><tr><th>Defendant</th><th>Standard</th><th>Case</th></tr>
<tr><td><b>Professionals</b></td><td>The standard of a reasonably competent member of that profession. Not negligent if acting in accordance with a practice accepted as proper by a responsible body of professional opinion — which must be logical</td><td>[[c:bolam]]; [[c:bolitho]]</td></tr>
<tr><td><b>Learners</b></td><td>Judged as a reasonably competent, experienced person doing the task — no allowance for inexperience</td><td>[[c:nettleship]] (learner driver)</td></tr>
<tr><td><b>Children</b></td><td>The standard of a reasonable child of the same age</td><td>[[c:mullin]] (15-year-old schoolgirls fencing with rulers)</td></tr>
<tr><td><b>Amateurs doing DIY</b></td><td>A reasonably competent amateur</td><td>[[c:wellscooper]]</td></tr></table></div>` },
    { h: 'Risk factors', html: `
<ul><li><b>Likelihood of harm</b> — the greater the risk, the more care needed. Small risk: [[c:boltonstone]]. Foreseeable risk to the blind: [[c:haley]].</li>
<li><b>Seriousness of harm and special characteristics of the claimant</b> — more care for a vulnerable claimant. [[c:paris]]: a worker with one good eye should have been given goggles because the consequences for him were more serious.</li>
<li><b>Social utility</b> — a valuable purpose can justify some risk. [[c:watthert]] (firefighters rushing to save a life); [[c:daborn]].</li>
<li><b>Cost and practicality of precautions</b> — the defendant need only take reasonable precautions. [[c:latimer]]: closing the factory was out of proportion to the risk.</li>
<li><b>State of knowledge</b> at the time — [[c:roe]].</li></ul>` }
  ],
  debate: [{ q: 'Is it fair to judge learners by the standard of experienced people?', for: ['Victims need protection whoever injured them.', 'Insurance covers learner drivers.', 'An objective standard gives certainty.'], ag: ['Learners cannot meet an experienced standard.', 'Inconsistent with the lower standard for children.', 'Driven by insurance, not fault.'] }],
  cases: ['blyth', 'bolam', 'bolitho', 'nettleship', 'mullin', 'wellscooper', 'boltonstone', 'haley', 'paris', 'watthert', 'daborn', 'latimer', 'roe'],
  worked: [],
  pitfalls: ['Treating the standard as subjective (“he did his best”).', 'Forgetting to balance the risk factors against each other.', 'Applying Bolam to non-professionals.'],
  cards: [
    ['What is the standard of care?', 'The objective standard of the reasonable person doing the activity.'],
    ['Bolam test?', 'A professional is not negligent if acting in line with a responsible body of professional opinion.'],
    ['What did Bolitho add?', 'The professional opinion must withstand logical analysis.'],
    ['Standard for learner drivers?', 'Reasonably competent driver — Nettleship v Weston.'],
    ['Standard for children?', 'A reasonable child of the same age — Mullin v Richards.'],
    ['Bolton v Stone?', 'Very small risk — no breach.'],
    ['Paris v Stepney?', 'Greater precautions for a claimant with special characteristics (one eye).'],
    ['Latimer v AEC?', 'Precautions need only be reasonable — no need to close the factory.'],
    ['Watt v Hertfordshire?', 'Social utility of saving life justified the risk.']
  ],
  quiz: [
    { q: 'A doctor’s treatment is judged by…', o: ['the Bolam test', 'the thin skull rule', 'the but for test', 'res ipsa loquitur'], x: '' },
    { q: 'Which case concerned a learner driver?', o: ['Nettleship v Weston', 'Mullin v Richards', 'Paris v Stepney', 'Latimer v AEC'], x: '' },
    { q: 'Paris v Stepney shows that the court considers…', o: ['the claimant’s special characteristics', 'the defendant’s wealth', 'the jury’s view', 'the claimant’s age only'], x: '' },
    { q: 'Bolton v Stone was decided in the defendant’s favour because…', o: ['the risk was very small', 'the claimant consented', 'the club was a charity', 'there was no duty'], x: '' }
  ],
  exam: [{ q: 'Advise whether the defendants breached their duty of care. [10]', m: 10, scen: 'A newly qualified dentist, Dr Lee, uses an older technique that most dentists have abandoned, and a patient’s nerve is damaged. Separately, the dental practice leaves a wet floor unmarked because putting out signs “takes too long”, and an elderly patient slips.', ms: ['objective standard — Blyth', 'Dr Lee — Bolam; inexperience irrelevant (Nettleship); Bolitho — logical body of opinion?', 'wet floor — likelihood of harm; vulnerable claimant (Paris)', 'cost of precautions minimal (Latimer)', 'no social utility justification', 'conclusions on breach'] }],
  tools: ['breachsort']
});

/* ---------- D3 Damage ---------- */
TOPICS.push({
  id: '1.D3', unit: '1', ref: 'D3', title: 'Damage: causation and remoteness',
  short: 'Factual causation — the “but for” test; remoteness — reasonable foreseeability, the type of damage and the thin skull rule',
  summary: 'The claimant must prove that the breach caused their damage (factual causation) and that the damage was not too remote — it must be of a type that was reasonably foreseeable. Once the type of damage is foreseeable, the defendant must take the victim as they find them.',
  spec: ['Factual causation: the “but for” test', 'Remoteness of damage: reasonable foreseeability', 'The type of damage caused', 'The thin skull rule'],
  learn: [
    { h: 'Factual causation', html: `<p><b>“But for” the defendant’s breach, would the claimant have suffered the damage?</b> If the damage would have happened anyway, the breach did not cause it. In [[c:barnett]], a doctor negligently refused to examine a night watchman who had drunk poisoned tea, but he would have died even with treatment — so the hospital was not liable.</p>` },
    { h: 'Remoteness: reasonable foreseeability', html: `
<ul><li>The defendant is liable only for damage of a <b>type</b> that was <b>reasonably foreseeable</b> — [[c:wagonmound]] (1961), which rejected the older rule of liability for all direct consequences.</li>
<li>If the <b>type</b> of damage was foreseeable, it does not matter that it happened in an unforeseeable <b>way</b> or was more extensive than expected: [[c:hughes]] (burns from a paraffin lamp in an unexpected explosion); [[c:jolley]] (children and an abandoned boat).</li>
<li>If the type was not foreseeable, the defendant is not liable: [[c:doughty]] (an asbestos lid falling into molten liquid caused an unforeseeable explosion, not a splash).</li>
<li>[[c:bradford]]: frostbite from a long journey in an unheated van was a foreseeable type of harm.</li></ul>` },
    { h: 'The thin skull rule', html: `<p>“You take your victim as you find them.” If some injury was foreseeable, the defendant is liable for the full extent of the harm, even if it is much worse because of the claimant’s pre-existing weakness. In [[c:smithleech]], a burn to the lip from molten metal triggered cancer in a man with a pre-cancerous condition — the employers were liable for his death.</p>` }
  ],
  debate: [],
  cases: ['barnett', 'wagonmound', 'hughes', 'doughty', 'jolley', 'bradford', 'smithleech'],
  worked: [{ q: 'A shop negligently leaves a box in an aisle. Mo trips over it and bruises his leg, but because he has a rare blood disorder the bruise becomes a serious injury needing surgery. Is the shop liable for the full injury?', s: ['<b class="st">But for</b>But for the box, Mo would not have tripped — factual causation is satisfied (Barnett).', '<b class="st">Remoteness</b>Some physical injury from tripping is a reasonably foreseeable type of damage (Wagon Mound).', '<b class="st">Thin skull</b>The shop must take Mo as it finds him; it is liable for the full extent even though his blood disorder made it worse (Smith v Leech Brain).'], a: 'Liable for the whole injury.' }],
  pitfalls: ['Confusing causation (but for) with remoteness (foreseeability of type).', 'Saying the defendant must foresee the exact way the harm happened (Hughes says not).', 'Forgetting the thin skull rule when the claimant has a pre-existing condition.'],
  cards: [
    ['What is the but for test?', 'But for the breach, would the damage have happened? If yes anyway, no causation.'],
    ['Barnett v Chelsea & Kensington HMC?', 'The patient would have died anyway — no causation.'],
    ['Test for remoteness?', 'Was the type of damage reasonably foreseeable? (Wagon Mound No 1)'],
    ['Hughes v Lord Advocate?', 'Type of harm (burns) foreseeable — liable though the way it happened was not.'],
    ['Doughty v Turner?', 'Explosion was an unforeseeable type of harm — not liable.'],
    ['Thin skull rule?', 'Take your victim as you find them — liable for full extent (Smith v Leech Brain).']
  ],
  quiz: [
    { q: 'Which case is the leading authority on the but for test?', o: ['Barnett v Chelsea & Kensington HMC', 'Wagon Mound', 'Hughes v Lord Advocate', 'Caparo'], x: '' },
    { q: 'The Wagon Mound established that damage must be…', o: ['of a reasonably foreseeable type', 'a direct consequence', 'intended', 'physical only'], x: '' },
    { q: 'The thin skull rule means the defendant…', o: ['takes the victim as they find them', 'is liable only for foreseeable extent', 'is never liable for illness', 'can blame the claimant'], x: '' }
  ],
  exam: [{ q: 'Apply the rules on causation and remoteness to the scenario. [8]', m: 8, scen: 'A builder negligently leaves a trench unguarded. Ella, 8, climbs in to play and knocks over a heater, which unexpectedly explodes and burns her badly. Her burns are worse because she has a skin condition.', ms: ['but for — Barnett; satisfied', 'remoteness — type of harm (burns) foreseeable — Hughes; children’s behaviour — Jolley', 'distinguish Doughty', 'thin skull — full extent despite skin condition', 'conclusion'] }],
  tools: ['remotetree']
});

/* ---------- D4 Damages ---------- */
TOPICS.push({
  id: '1.D4', unit: '1', ref: 'D4', title: 'Damages',
  short: 'The aim of damages; special and general damages; mitigation; contributory negligence; lump sums and structured settlements',
  summary: 'If the claimant proves negligence, the court awards damages — money compensation. This topic covers the aim of damages, the difference between special and general damages, how damages are reduced if the claimant failed to mitigate their loss or was partly to blame, and how damages are paid.',
  spec: ['The aim of awarding damages in negligence', 'Special damages (pecuniary)', 'General damages: pain and suffering, loss of earnings, loss of amenity, future medical expenses', 'Mitigation of loss', 'Contributory negligence', 'Payment: lump sum, structured settlement'],
  learn: [
    { h: 'Aim and types of damages', html: `
<p>Compensatory damages aim to put the claimant, as far as money can, in the position they would have been in if the tort had not happened (<i>restitutio in integrum</i>).</p>
<div class="tbl"><table><tr><th>Special damages</th><th>General damages</th></tr>
<tr><td>Pecuniary losses that can be calculated precisely up to the date of trial or settlement: lost earnings to date, medical and care bills paid, travel costs, repairs to property</td><td>Losses that cannot be precisely calculated: <b>pain, suffering and loss of amenity</b> (PSLA — set using the Judicial College Guidelines and increased by 10% since 2013, [[c:simmons]]; [[c:heil]]); <b>future loss of earnings</b>; <b>future medical and care expenses</b></td></tr></table></div>
<p><b>Loss of amenity</b> means losing the ability to enjoy life as before — hobbies, sport, relationships.</p>` },
    { h: 'Reducing damages', html: `
<ul><li><b>Mitigation of loss</b> — the claimant must take reasonable steps to limit their loss (e.g. follow medical advice, return to suitable work). The defendant must prove a failure to mitigate ([[c:geest]]).</li>
<li><b>Contributory negligence</b> — under s1 <b>Law Reform (Contributory Negligence) Act 1945</b>, damages are reduced “to such extent as the court thinks just and equitable” according to the claimant’s share of responsibility. [[c:froom]] (seatbelts: 25% / 15% / 0%); [[c:jonesliviox]] (riding on the back of a vehicle); [[c:sayers]]; [[c:owens]] (accepting a lift from a drunk driver); [[c:gough]] (children are rarely contributorily negligent). A 100% reduction is not possible ([[c:pittshunt]]). Try the calculator in Explore.</li></ul>` },
    { h: 'Payment', html: `
<ul><li><b>Lump sum</b> — a single, once-and-for-all payment. Simple and final, but future needs must be predicted, so the claimant may be over- or under-compensated ([[c:wellswells]]).</li>
<li><b>Structured settlement / periodical payments</b> — regular payments (often for life), usually for future care and loss of earnings in serious injury cases. The court can order periodical payments for future pecuniary loss (Damages Act 1996, as amended in 2003). They protect against the money running out and can be index-linked.</li>
<li><b>Interim payments</b> can be made before trial where liability is admitted.</li></ul>` }
  ],
  debate: [{ q: 'Is a lump sum or a structured settlement better for a seriously injured claimant?', for: ['Lump sum: finality and control; can buy an adapted home.', 'Structured: security for life; no risk of running out; adjusts for inflation.'], ag: ['Lump sum: may run out if life expectancy is underestimated.', 'Structured: less flexibility; depends on the payer’s security.'] }],
  cases: ['simmons', 'heil', 'geest', 'froom', 'jonesliviox', 'sayers', 'owens', 'gough', 'pittshunt', 'jayes', 'wellswells'],
  worked: [{ q: 'Ali is injured in a crash caused by Beth. His agreed damages are £40,000. He was not wearing a seatbelt, and wearing one would have made his injuries less severe. What will he receive?', s: ['<b class="st">Contributory negligence</b>Ali’s failure to wear a seatbelt contributed to his injuries (s1 1945 Act).', '<b class="st">Guideline</b>Froom v Butcher: a seatbelt would have reduced severity, so a 15% reduction.', '<b class="st">Calculate</b>15% of £40,000 = £6,000. Ali receives £34,000.'], a: '£34,000.' }],
  pitfalls: ['Mixing up special and general damages.', 'Saying contributory negligence defeats the claim — it only reduces damages.', 'Forgetting the claimant’s duty to mitigate.'],
  cards: [
    ['Aim of damages in negligence?', 'To put the claimant in the position they would have been in if the tort had not happened.'],
    ['Special damages?', 'Calculable pecuniary losses up to trial — lost earnings, bills.'],
    ['General damages?', 'Non-calculable losses — pain, suffering, loss of amenity, future losses.'],
    ['What is loss of amenity?', 'Loss of enjoyment of life — hobbies, activities.'],
    ['Who must prove failure to mitigate?', 'The defendant (Geest v Lansiquot).'],
    ['Which Act governs contributory negligence?', 'Law Reform (Contributory Negligence) Act 1945 s1.'],
    ['Froom v Butcher reductions?', '25% if a seatbelt would have prevented injury; 15% if it would have reduced it.'],
    ['Lump sum v structured settlement?', 'One payment v regular periodical payments.']
  ],
  quiz: [
    { q: 'Medical bills paid before trial are…', o: ['special damages', 'general damages', 'exemplary damages', 'nominal damages'], x: '' },
    { q: 'Damages for being unable to play football again are for…', o: ['loss of amenity', 'special damages', 'mitigation', 'contributory negligence'], x: '' },
    { q: 'Contributory negligence…', o: ['reduces damages', 'defeats the claim completely', 'increases damages', 'is a criminal offence'], x: '' },
    { q: 'Regular payments for future care are a…', o: ['structured settlement / periodical payment', 'lump sum', 'costs order', 'Part 36 offer'], x: '' }
  ],
  exam: [{ q: 'Advise Carla on the damages she can expect and how they might be paid. [10]', m: 10, scen: 'Carla, 30, a nurse, was seriously injured when a delivery lorry hit her car. She cannot work for two years and may never return to nursing. She has had to pay for physiotherapy and adapt her home. She refused a recommended operation. She was wearing her seatbelt.', ms: ['aim — restitutio in integrum', 'special damages — lost earnings to date, physio, home adaptations', 'general damages — PSLA, future loss of earnings, future care', 'mitigation — refused operation (Geest)', 'no contributory negligence — seatbelt worn', 'lump sum v periodical payments — future care', 'justified advice'] }],
  tools: ['apportion', 'damagessort']
});

/* ---------- D5 Burden of proof and res ipsa loquitur ---------- */
TOPICS.push({
  id: '1.D5', unit: '1', ref: 'D5', title: 'Burden of proof and res ipsa loquitur',
  short: 'Who must prove what in a negligence claim, and when “the thing speaks for itself”',
  summary: 'In negligence the claimant must prove duty, breach and damage on the balance of probabilities. Sometimes the claimant cannot know exactly what the defendant did wrong. Res ipsa loquitur — “the thing speaks for itself” — allows the court to infer negligence from the circumstances, shifting the burden to the defendant to explain.',
  spec: ['Burden of proof in negligence cases', 'Res ipsa loquitur'],
  learn: [
    { h: 'The burden of proof', html: `<p>The <b>claimant</b> must prove, on the <b>balance of probabilities</b> ([[c:reb]]), that the defendant owed a duty, breached it, and caused foreseeable damage. The defendant must prove any defence (such as contributory negligence or a failure to mitigate).</p>` },
    { h: 'Res ipsa loquitur', html: `
<p>From [[c:scottdocks]] (1865), where bags of sugar fell from a warehouse onto a customs officer, res ipsa loquitur applies where:</p>
<ol><li>the thing causing the damage was <b>under the control</b> of the defendant (or their employees);</li><li>the accident is one that would <b>not normally happen without negligence</b>; and</li><li>there is <b>no other explanation</b> for the accident.</li></ol>
<p>Examples: [[c:mahon]] (a swab left inside a patient after surgery); [[c:wardtesco]] (yoghurt on a supermarket floor).</p>
<p><b>Effect</b>: the court may infer negligence, so the defendant must provide an explanation showing they took reasonable care. If they cannot, the claimant wins.</p>` }
  ],
  debate: [{ q: 'Is res ipsa loquitur fair to defendants?', for: ['Claimants often cannot know what happened inside a defendant’s business or operating theatre.', 'The defendant is best placed to explain.'], ag: ['Defendants may be found liable without proof of actual fault.', 'It can be hard to prove a negative (that reasonable care was taken).'] }],
  cases: ['scottdocks', 'mahon', 'wardtesco', 'reb'],
  worked: [],
  pitfalls: ['Treating res ipsa as a separate tort — it is a rule of evidence.', 'Forgetting the three conditions.'],
  cards: [
    ['What does res ipsa loquitur mean?', 'The thing speaks for itself.'],
    ['Three conditions for res ipsa loquitur?', 'Defendant in control; would not normally happen without negligence; no other explanation.'],
    ['Effect of res ipsa?', 'Negligence may be inferred; the defendant must explain.'],
    ['Scott v London & St Katherine Docks?', 'Sugar bags falling from a warehouse — origin of res ipsa.'],
    ['Ward v Tesco?', 'Yoghurt spill — Tesco could not show a reasonable cleaning system.']
  ],
  quiz: [
    { q: 'Which is NOT a condition of res ipsa loquitur?', o: ['The claimant was a child', 'The defendant controlled the thing', 'It would not normally happen without negligence', 'No other explanation'], x: '' },
    { q: 'Leaving a swab inside a patient is an example from…', o: ['Mahon v Osborne', 'Bolam', 'Paris v Stepney', 'Barnett'], x: '' }
  ],
  exam: [{ q: 'Explain whether res ipsa loquitur would help the claimant. [6]', m: 6, scen: 'While Dan is walking past a building site, a scaffolding pole falls and injures him. The builder says it does not know how the pole came loose.', ms: ['burden on claimant normally', 'three conditions applied — control, not normally without negligence, no explanation', 'Scott v London & St Katherine Docks', 'effect — builder must explain reasonable care', 'likely outcome'] }],
  tools: ['resipsatree']
});

/* ---------- Unit 1 C–D tools ---------- */
TOOLS.ratiosort = { type: 'sort', title: 'Binding or persuasive?', intro: 'For a High Court judge hearing a negligence claim, is each source binding or persuasive?', cats: ['Binding', 'Persuasive'], items: [
  ['The ratio of a Supreme Court decision', 'Binding', ''],
  ['Obiter dicta in a Supreme Court decision', 'Persuasive', ''],
  ['The ratio of a Court of Appeal decision', 'Binding', ''],
  ['A County Court decision', 'Persuasive', 'Lower court.'],
  ['A dissenting judgment in the Court of Appeal', 'Persuasive', ''],
  ['A decision of the High Court of Australia', 'Persuasive', 'Another jurisdiction.']
] };
TOOLS.avoidsort = { type: 'sort', title: 'Distinguish, overrule or reverse?', intro: 'Identify the method used.', cats: ['Distinguishing', 'Overruling', 'Reversing'], items: [
  ['Murphy v Brentwood (1991) and Anns v Merton (1978)', 'Overruling', ''],
  ['Miller v Jackson and Bolton v Stone', 'Distinguishing', 'Frequency of cricket balls.'],
  ['The Supreme Court allowing the appeal in Robinson (2018)', 'Reversing', 'Same case.'],
  ['Herrington (1972) and Addie v Dumbreck (1929)', 'Overruling', 'Practice Statement.'],
  ['Merritt v Merritt and Balfour v Balfour', 'Distinguishing', 'Separated spouses.']
] };
TOOLS.negtree = { type: 'tree', title: 'Is the defendant liable in negligence?', intro: 'Work through the elements in order.', nodes: {
  start: { q: 'Is this an established duty category (road users, doctor–patient, employer–employee, manufacturer–consumer)?', o: [['Yes', 'breach'], ['No — a new situation', 'fs']] },
  fs: { q: 'Was harm to someone in the claimant’s position reasonably foreseeable?', o: [['Yes', 'prox'], ['No', 'noduty']] },
  prox: { q: 'Was there sufficient proximity between the parties?', o: [['Yes', 'fjr'], ['No', 'noduty']] },
  fjr: { q: 'Is it fair, just and reasonable to impose a duty (no strong policy reason against)?', o: [['Yes', 'breach'], ['No — floodgates, public service concerns', 'noduty']] },
  noduty: { end: true, tone: 'bad', v: 'No duty of care — the claim fails', x: '', cases: ['bourhill', 'hillccwy'] },
  breach: { q: 'Did the defendant fall below the standard of the reasonable person (adjusted for professionals and children; weighing risk, seriousness, utility and cost of precautions)?', o: [['Yes', 'bf'], ['No', 'nobreach']] },
  nobreach: { end: true, tone: 'bad', v: 'No breach — the claim fails', x: '', cases: ['boltonstone', 'latimer'] },
  bf: { q: 'But for the breach, would the damage have happened anyway?', o: [['No — the breach caused it', 'rem'], ['Yes — it would have happened anyway', 'nocause']] },
  nocause: { end: true, tone: 'bad', v: 'No causation — the claim fails', x: '', cases: ['barnett'] },
  rem: { q: 'Was the type of damage reasonably foreseeable?', o: [['Yes', 'liable'], ['No', 'remote']] },
  remote: { end: true, tone: 'bad', v: 'Too remote — no liability for that damage', x: '', cases: ['wagonmound', 'doughty'] },
  liable: { end: true, tone: 'good', v: 'Negligence established', x: 'Now assess damages, any contributory negligence and mitigation. Thin skull rule applies to the extent of harm.', cases: ['donoghue', 'smithleech'] }
} };
TOOLS.dutysort = { type: 'sort', title: 'Which Caparo stage?', intro: 'Which stage of the duty test does each argument address?', cats: ['Foreseeability', 'Proximity', 'Fair, just and reasonable'], items: [
  ['“A reasonable person would have realised someone might be hurt.”', 'Foreseeability', ''],
  ['“The ambulance service had accepted the call and knew the patient’s name.”', 'Proximity', 'Kent v Griffiths.'],
  ['“Imposing a duty would lead to defensive policing.”', 'Fair, just and reasonable', 'Hill.'],
  ['“The claimant was a quarter of a mile away and could not be seen.”', 'Proximity', 'Also foreseeability — Bourhill.'],
  ['“There would be a flood of claims.”', 'Fair, just and reasonable', '']
] };
TOOLS.breachsort = { type: 'sort', title: 'Which breach factor?', intro: 'Match each example to the factor the court considers.', cats: ['Professional standard', 'Learner/child standard', 'Likelihood of harm', 'Special characteristics of claimant', 'Social utility', 'Cost of precautions'], items: [
  ['A surgeon followed a practice supported by a responsible body of surgeons.', 'Professional standard', 'Bolam.'],
  ['A 15-year-old playing with rulers injured a friend’s eye.', 'Learner/child standard', 'Mullin.'],
  ['A cricket ball left the ground only six times in 30 years.', 'Likelihood of harm', 'Bolton v Stone.'],
  ['The worker was already blind in one eye.', 'Special characteristics of claimant', 'Paris.'],
  ['Firefighters rushed a heavy jack on an unsuitable lorry to save a trapped woman.', 'Social utility', 'Watt.'],
  ['The only way to remove all risk was to close the whole factory.', 'Cost of precautions', 'Latimer.']
] };
TOOLS.remotetree = { type: 'tree', title: 'Causation and remoteness', intro: 'Test the link between breach and damage.', nodes: {
  start: { q: 'But for the defendant’s breach, would the claimant have suffered this damage?', o: [['No', 'type'], ['Yes, it would have happened anyway', 'no1']] },
  no1: { end: true, tone: 'bad', v: 'No factual causation', x: '', cases: ['barnett'] },
  type: { q: 'Was this type of damage reasonably foreseeable?', o: [['Yes, even if it happened in an unusual way', 'extent'], ['No, a different type of harm', 'no2']] },
  no2: { end: true, tone: 'bad', v: 'Too remote', x: '', cases: ['wagonmound', 'doughty'] },
  extent: { q: 'Was the harm worse than expected because of the claimant’s pre-existing condition?', o: [['Yes', 'thin'], ['No', 'ok']] },
  thin: { end: true, tone: 'good', v: 'Liable for the full extent — thin skull rule', x: '', cases: ['smithleech'] },
  ok: { end: true, tone: 'good', v: 'Causation and remoteness satisfied', x: '', cases: ['hughes', 'jolley'] }
} };
TOOLS.damagessort = { type: 'sort', title: 'Special or general damages?', intro: 'Classify each head of loss.', cats: ['Special damages', 'General damages'], items: [
  ['Wages lost between the accident and the trial', 'Special damages', ''],
  ['Pain and suffering', 'General damages', ''],
  ['Cost of repairing the claimant’s car', 'Special damages', ''],
  ['Loss of the ability to play the guitar', 'General damages', 'Loss of amenity.'],
  ['Future care costs', 'General damages', 'Not yet incurred.'],
  ['Physiotherapy already paid for', 'Special damages', ''],
  ['Future loss of earnings', 'General damages', '']
] };
TOOLS.resipsatree = { type: 'tree', title: 'Does res ipsa loquitur apply?', intro: 'Test the three conditions.', nodes: {
  start: { q: 'Was the thing that caused the damage under the defendant’s control?', o: [['Yes', 'normal'], ['No', 'no']] },
  normal: { q: 'Is it the kind of accident that does not normally happen without negligence?', o: [['Yes', 'expl'], ['No', 'no']] },
  expl: { q: 'Is there no other explanation for the accident?', o: [['No explanation', 'yes'], ['There is another explanation', 'no']] },
  no: { end: true, tone: 'bad', v: 'Res ipsa does not apply', x: 'The claimant must prove breach in the normal way.' },
  yes: { end: true, tone: 'good', v: 'Res ipsa loquitur applies', x: 'Negligence can be inferred; the defendant must show reasonable care was taken.', cases: ['scottdocks', 'wardtesco', 'mahon'] }
} };
