/* ==========================================================
   COMPONENT 1 · THE NATURE OF LAW (compulsory themes)
   Law and rules · Law and society · Law and morality · Law and justice
   ========================================================== */
addCases([
  { id: 'mercer', n: 'Mercer v Denne', y: 1905, a: 'N', t: 'N1', c: 'CA', f: 'Local fishermen had dried their nets on a particular beach for centuries. The landowner wanted to build on it.', p: 'A valid local custom existed and was enforced by the court: custom can be a source of law if it satisfies the legal tests.' },
  { id: 'wolstanton', n: 'Wolstanton Ltd v Newcastle-under-Lyme Corporation', y: 1940, a: 'N', t: 'N1', c: 'HL', f: 'A lord of the manor claimed a customary right to mine under tenants’ land without paying compensation for damage to their houses.', p: 'The custom was unreasonable and therefore not legally valid.' },
  { id: 'shaw', n: 'Shaw v DPP', y: 1962, a: 'N', t: 'N3', c: 'HL', f: 'Shaw published a “Ladies’ Directory” advertising the services of prostitutes.', p: 'Convicted of “conspiracy to corrupt public morals”. Viscount Simonds said courts have a residual power to protect the moral welfare of the state — judicial enforcement of morality.' },
  { id: 'knuller', n: 'Knuller v DPP', y: 1973, a: 'N', t: 'N3', c: 'HL', f: 'A magazine published contact adverts for gay men, when homosexual acts in private had been decriminalised by the Sexual Offences Act 1967.', p: 'The conviction for conspiracy to corrupt public morals was upheld: legal acts could still be “corrupting”. Shows judges enforcing a conventional morality.' },
  { id: 'brown', n: 'R v Brown', y: 1993, a: 'CR', t: 'N3', c: 'HL', f: 'A group of men took part in consensual sadomasochistic activities in private, causing injuries amounting to actual bodily harm and wounding.', p: 'Consent is not a defence to ABH or more serious harm unless there is a good reason recognised by law (e.g. sport, surgery, tattooing). The majority protected society from “a cult of violence”; the dissent argued it was private morality. Upheld by the ECtHR in Laskey v UK (1997).' },
  { id: 'wilson', n: 'R v Wilson', y: 1996, a: 'CR', t: 'N3', c: 'CA', f: 'A husband branded his initials on his wife’s buttocks with a hot knife at her request.', p: 'Consent was a defence: this was comparable to tattooing, and consensual activity between spouses in private is not a proper matter for criminal investigation. Distinguished from Brown.' },
  { id: 'gillick', n: 'Gillick v West Norfolk and Wisbech Area Health Authority', y: 1986, a: 'N', t: 'N3', c: 'HL', f: 'A mother challenged guidance allowing doctors to give contraceptive advice to girls under 16 without parental consent.', p: 'A child under 16 with sufficient maturity and understanding (“Gillick competent”) can consent to medical treatment. A moral issue decided by judges.' },
  { id: 'bland', n: 'Airedale NHS Trust v Bland', y: 1993, a: 'N', t: 'N3', c: 'HL', f: 'Tony Bland was left in a persistent vegetative state after the Hillsborough disaster. His doctors and family wanted to withdraw artificial feeding.', p: 'Withdrawing treatment that was no longer in the patient’s best interests was lawful — an omission, not murder. The Lords said the wider moral questions were for Parliament.' },
  { id: 'rea', n: 'Re A (Children) (Conjoined Twins: Surgical Separation)', y: 2000, a: 'CR', t: 'N3', c: 'CA', f: 'Conjoined twins Jodie and Mary would both die within months unless separated. Separation would save Jodie but kill Mary. The parents objected on religious grounds.', p: 'The operation was lawful: necessity can be a defence even where death is foreseen as virtually certain, in these exceptional circumstances. Shows law, medicine and morality in conflict.' },
  { id: 'pretty', n: 'Pretty v United Kingdom', y: 2002, a: 'HR', t: 'N3', c: 'ECtHR', f: 'Diane Pretty, who had motor neurone disease, wanted assurance that her husband would not be prosecuted for helping her to die.', p: 'Art 2 (right to life) does not include a right to die. The ban on assisted suicide interfered with Art 8 but was justified to protect vulnerable people.' },
  { id: 'nicklinson', n: 'R (Nicklinson) v Ministry of Justice', y: 2014, a: 'HR', t: 'N3', c: 'UKSC', f: 'Tony Nicklinson, paralysed by a stroke, challenged the ban on assisted suicide in s2 Suicide Act 1961.', p: 'The Supreme Court declined to make a declaration of incompatibility: a majority said Parliament was the proper body to decide such a controversial moral issue first. Parliament rejected a Bill in 2015; a new Bill passed the Commons in 2025.' },
  { id: 'dudley', n: 'R v Dudley and Stephens', y: 1884, a: 'CR', t: 'N3', c: 'Queen’s Bench Division', f: 'After weeks adrift in a lifeboat, two shipwrecked sailors killed and ate the cabin boy, Richard Parker, to survive.', p: 'Necessity is not a defence to murder. The death sentence was commuted to six months — the law upheld the moral principle while mercy softened the result.' },
  { id: 'millerjackson', n: 'Miller v Jackson', y: 1977, a: 'TO', t: 'N2', c: 'CA', f: 'Cricket balls from a village club that had played there for 70 years kept landing in the gardens of new houses built next to the ground.', p: 'The club was liable in negligence and nuisance, but the majority refused an injunction, preferring the public interest in cricket to the private interests of the householders (damages instead). Lord Denning dissented on liability.' },
  { id: 'mcilkenny', n: 'R v McIlkenny (the Birmingham Six)', y: 1991, a: 'N', t: 'N4', c: 'CA', f: 'Six men convicted of the 1974 Birmingham pub bombings served 16 years. Forensic evidence was flawed and police evidence fabricated.', p: 'Convictions quashed as unsafe. With the Guildford Four, the case led to the Runciman Royal Commission and the creation of the Criminal Cases Review Commission.' },
  { id: 'hamilton', n: 'Hamilton v Post Office Ltd', y: 2021, a: 'N', t: 'N4', c: 'CA', f: 'Sub-postmasters had been prosecuted, often privately by the Post Office, on the basis of shortfalls produced by the faulty Horizon IT system.', p: 'Convictions quashed: the prosecutions were an affront to the public conscience and an abuse of process. Led to the Post Office (Horizon System) Offences Act 2024 quashing hundreds more.' }
]);

/* ---------- N1 Law, rules and sources ---------- */
TOPICS.push({
  id: 'N1', unit: 'N', ref: 'Nature of law', title: 'What is law?',
  short: 'Law and other rules, criminal and civil law, sources of law including custom',
  summary: 'Law is one kind of rule among many. This topic distinguishes legal rules from other rules and norms, explains the difference between criminal and civil law, and surveys the sources of English law — custom, statute, common law and equity, and international sources. It gives you the vocabulary the rest of the course depends on.',
  spec: ['The distinction between enforceable legal rules and principles and other rules and norms of behaviour', 'Criminal and civil law: purpose, parties, standard of proof, outcomes', 'Sources of law: custom, statute (and delegated legislation), the common law, equity', 'International sources: EU law (historic and assimilated) and the ECHR', 'Theories of law: natural law and legal positivism'],
  learn: [
    { h: 'Legal rules and other rules', html: `
<p>Societies are governed by many kinds of rules: <b>moral</b> rules (do not lie), <b>social</b> norms and etiquette (queue; do not interrupt), <b>religious</b> rules, <b>organisational</b> rules (school rules, sports rules), and <b>legal</b> rules.</p>
<div class="tbl"><table><tr><th>Legal rules…</th><th>Other rules…</th></tr>
<tr><td>are made by recognised authorities (Parliament, courts)</td><td>develop informally or are made by private bodies</td></tr>
<tr><td>are <b>enforceable by the state</b> through courts, with sanctions (fines, prison, damages)</td><td>rely on informal sanctions: disapproval, exclusion, conscience</td></tr>
<tr><td>apply to everyone in the jurisdiction</td><td>apply to members of a group</td></tr>
<tr><td>change by a formal process (legislation, precedent)</td><td>change gradually</td></tr></table></div>
<p><b>Legal positivists</b> (Bentham, Austin, Hart) define law by its source: Austin’s law is a command of a sovereign backed by a sanction; Hart saw law as a system of primary rules (duties) and secondary rules (including a “rule of recognition” identifying valid law). <b>Natural lawyers</b> (Aquinas, Finnis; Fuller’s “inner morality of law”) argue that an unjust law is not truly law — a view tested after the Nazi era (the Hart–Fuller debate about the “grudge informer”).</p>` },
    { h: 'Criminal and civil law', html: `
<div class="tbl"><table><tr><th></th><th>Criminal law</th><th>Civil law</th></tr>
<tr><td>Purpose</td><td>Maintain order, punish wrongdoing against society</td><td>Resolve disputes; uphold rights; compensate</td></tr>
<tr><td>Started by</td><td>The state (usually the CPS): <i>R v Smith</i></td><td>The claimant: <i>Smith v Jones</i></td></tr>
<tr><td>Standard of proof</td><td>Beyond reasonable doubt (burden on the prosecution — <i>Woolmington v DPP</i>, 1935)</td><td>Balance of probabilities (burden usually on the claimant)</td></tr>
<tr><td>Outcome</td><td>Guilty or not guilty; sentence</td><td>Liable or not liable; remedy (damages, injunction)</td></tr>
<tr><td>Examples</td><td>Theft, assault, murder</td><td>Contract, tort, family, property</td></tr></table></div>
<p>One event can give rise to both: a drunk driver who injures a pedestrian may be prosecuted (criminal) and sued for negligence (civil). <b>Public law</b> (criminal, constitutional, human rights, administrative) concerns the state and individuals; <b>private law</b> (contract, tort, family) concerns relations between individuals.</p>` },
    { h: 'Custom', html: `
<p>Much of the <b>common law</b> began as general customs that judges recognised and applied throughout England after 1066. Today, a <b>local custom</b> can still be recognised by the courts if it meets strict tests:</p>
<ul><li>existed since “<b>time immemorial</b>” (1189, the reign of Richard I) — in practice, as long as anyone can remember;</li><li><b>reasonable</b> ([[c:wolstanton]]);</li><li><b>certain</b> as to area and people affected;</li><li>exercised <b>peaceably, openly and as of right</b> (not by permission);</li><li><b>continuous</b>;</li><li>regarded as <b>obligatory</b>;</li><li>consistent with statute and other customs.</li></ul>
<p>Example: [[c:mercer]] (fishermen drying nets). Custom is now a minor source because statute and precedent cover most areas, but commercial custom still shapes implied terms in contracts.</p>` },
    { h: 'Statute, common law and equity', html: `
<ul><li><b>Legislation</b>: Acts of Parliament (primary) and delegated legislation (secondary). The highest source of law because of parliamentary sovereignty.</li>
<li><b>The common law</b>: law developed by judges through precedent — e.g. murder, negligence ([[c:donoghue]]), most of contract law.</li>
<li><b>Equity</b>: developed by the Lord Chancellor and Court of Chancery to soften the rigidity of the common law, based on fairness and conscience. Equitable remedies — injunctions, specific performance, rescission, rectification — are <b>discretionary</b>. Maxims include “he who comes to equity must come with clean hands” and “delay defeats equity”. The Judicature Acts 1873–75 merged the courts; where common law and equity conflict, equity prevails.</li>
<li><b>International sources</b>: EU law (1973–2020, now assimilated law), and the European Convention on Human Rights, given effect by the Human Rights Act 1998.</li></ul>` }
  ],
  debate: [{ q: 'Is an unjust law still “law”?', for: ['Positivists: law is valid if made by the right procedure (Hart’s rule of recognition) — morality is a separate question.', 'Certainty: citizens and officials need to know what the law is, even if they think it is unjust.', 'Parliament can change unjust laws democratically.'], ag: ['Natural law: an unjust law is a corruption of law (Aquinas).', 'Fuller: law must meet minimum standards (published, clear, prospective) to count as law.', 'Nazi laws show legality alone is not enough (the grudge informer cases).', 'Jury equity (Ponting) shows citizens sometimes refuse to apply unjust law.'] }],
  cases: ['mercer', 'wolstanton'],
  worked: [],
  pitfalls: ['Saying civil cases are “prosecuted” or result in “guilty” verdicts.', 'Confusing custom (a source of law) with convention (constitutional practice).', 'Saying equity replaces the common law — it supplements it, and prevails in a conflict.'],
  cards: [
    ['How do legal rules differ from moral rules?', 'Legal rules are made by recognised authorities and enforced by the state with sanctions; moral rules rely on conscience and social disapproval.'],
    ['Standard of proof in criminal cases?', 'Beyond reasonable doubt.'],
    ['What is “time immemorial”?', '1189 — the date from which a custom must have existed.'],
    ['Tests for a valid custom?', 'Time immemorial, reasonable, certain, peaceable/open/as of right, continuous, obligatory, consistent with statute.'],
    ['Mercer v Denne (1905)?', 'Fishermen’s custom of drying nets on a beach was upheld.'],
    ['What is equity?', 'A body of law based on fairness developed by the Court of Chancery; its remedies are discretionary.'],
    ['Public vs private law?', 'Public: state and individual (criminal, constitutional). Private: between individuals (contract, tort).'],
    ['Austin’s definition of law?', 'A command of a sovereign, backed by a sanction.'],
    ['Natural law theory?', 'Law must conform to higher moral principles; an unjust law is not true law (Aquinas).']
  ],
  quiz: [
    { q: 'Which is a feature of legal rules but NOT of social norms?', o: ['Enforcement by the state through the courts', 'Guidance on behaviour', 'Disapproval if broken', 'Change over time'], x: 'State enforcement and sanctions.' },
    { q: 'The standard of proof in a civil claim is…', o: ['balance of probabilities', 'beyond reasonable doubt', 'certainty', 'prima facie'], x: 'More likely than not.' },
    { q: 'For a local custom to be valid it must have existed since…', o: ['time immemorial (1189)', '1066', '1215', 'living memory only'], x: 'Reign of Richard I.' },
    { q: 'In Wolstanton v Newcastle-under-Lyme the claimed custom failed because it was…', o: ['unreasonable', 'too recent', 'uncertain', 'not continuous'], x: 'Mining without compensation.' },
    { q: 'Which of these is an equitable remedy?', o: ['Specific performance', 'Damages as of right', 'A fine', 'Imprisonment'], x: 'Discretionary.' },
    { q: 'A legal positivist would say a law is valid because…', o: ['it was made by the proper procedure', 'it is morally just', 'the public likes it', 'God commands it'], x: 'Validity depends on source, not content.' }
  ],
  exam: [{ q: 'Explain the differences between civil and criminal law. [5]', m: 5, ms: ['purpose — punish vs compensate/resolve', 'parties — prosecution (R v) vs claimant v defendant', 'standard of proof — BRD vs balance of probabilities', 'outcomes — guilty/sentence vs liable/remedy', 'courts / example of same event giving both'] }],
  tools: ['customtree']
});

/* ---------- N2 Law and society ---------- */
TOPICS.push({
  id: 'N2', unit: 'N', ref: 'Law and society', title: 'Law and society',
  short: 'The rule of law, human rights, fault, balancing conflicting interests, public v private interests',
  summary: 'Law exists to serve society: it keeps order, settles disputes, protects rights and reflects (and shapes) social values. The specification asks you to consider the rule of law, human rights, the importance of fault, how the law balances conflicting interests, and when individual rights give way to community interests. These themes earn AO3 marks across every paper.',
  spec: ['The rule of law and human rights in society', 'The meaning and importance of fault in civil and criminal law', 'Balancing conflicting interests; identifying the different interests of parties to disputes', 'Public interests against private interests; the subordination of individual rights to community interests', 'Law as a means of social control and social change'],
  learn: [
    { h: 'What law does for society', html: `
<ul><li><b>Social control</b>: defines unacceptable behaviour and punishes it (criminal law).</li>
<li><b>Dispute resolution</b>: peaceful settlement through courts, tribunals and ADR.</li>
<li><b>Protecting rights and freedoms</b>: the Human Rights Act 1998, equality law.</li>
<li><b>Regulating</b> activities: health and safety, consumer protection, the environment.</li>
<li><b>Social change</b>: law can lead opinion (the Race Relations Act 1965, the smoking ban 2007, the Marriage (Same Sex Couples) Act 2013) or follow it (decriminalising homosexuality in 1967 after the Wolfenden Report).</li></ul>
<p><b>Consensus</b> theorists (Durkheim) see law as reflecting shared values; <b>conflict</b> theorists (Marx) see it as protecting the interests of the powerful.</p>` },
    { h: 'Balancing conflicting interests', html: `
<p>The American jurist <b>Roscoe Pound</b> described law as “<b>social engineering</b>”: balancing competing interests to satisfy as many as possible with the least friction. He identified <b>individual</b> interests (personal, property), <b>public</b> interests (of the state) and <b>social</b> interests (general security, morals, conservation, progress).</p>
<p>Examples across the course:</p>
<ul><li><b>Nuisance</b>: a landowner’s right to use land versus a neighbour’s enjoyment of theirs; the community’s interest in recreation — [[c:millerjackson]].</li>
<li><b>Negligence</b>: the courts weigh the cost of precautions and the social value of an activity; the Compensation Act 2006 s1 and the Social Action, Responsibility and Heroism Act 2015 protect “desirable activities” and volunteers.</li>
<li><b>Human rights</b>: privacy (Art 8) against freedom of expression (Art 10) in celebrity cases; protest (Art 11) against the rights of others.</li>
<li><b>Criminal law</b>: autonomy (consent) against protection from harm — [[c:brown]].</li>
<li><b>Contract</b>: freedom of contract against consumer protection.</li></ul>` },
    { h: 'Public versus private interests', html: `
<p>Sometimes individual rights are <b>subordinated</b> to community interests:</p>
<ul><li>Qualified Convention rights (Arts 8–11) may be restricted where necessary in a democratic society for public safety, health, the prevention of crime or the rights of others.</li>
<li>COVID-19 regulations (2020–21) restricted liberty, assembly and worship to protect public health.</li>
<li>Compulsory purchase of land for infrastructure (e.g. HS2).</li>
<li>Police powers of stop and search (PACE 1984) and terrorism powers.</li>
<li>Public policy limits on duty of care — the police are generally not liable for failing to catch a criminal (Hill v Chief Constable of West Yorkshire, 1988).</li></ul>
<p>But the courts also protect individuals against the state: [[c:entick]], [[c:belmarsh]], [[c:unison]].</p>` },
    { h: 'The rule of law and human rights in society', html: `
<p>The rule of law (see topic 1.1.1b) means the state is bound by law, laws are clear and public, everyone is equal before the law, and there is access to independent courts. Human rights — protected by the ECHR and the Human Rights Act 1998 — set minimum standards the state must respect. Both limit what a democratic majority can do to individuals and minorities, and both depend on independent judges and access to justice (legal aid).</p>` },
    { h: 'The importance of fault', html: `
<p><b>Fault</b> means blameworthiness: the defendant could and should have acted differently. It is a basic principle of fairness that people should only be punished or made to pay for harm they are responsible for.</p>
<h4>Criminal law</h4><ul><li>Most offences require <b>mens rea</b>: intention, recklessness or (for gross negligence manslaughter) gross negligence. The level of fault affects the offence (murder v manslaughter) and the sentence (culpability under s63 Sentencing Act 2020).</li>
<li>Defences such as insanity, duress and self-defence remove or reduce fault.</li>
<li><b>Strict liability</b> offences need no fault as to at least one element (e.g. selling alcohol to a child, some pollution and food safety offences) — justified by public protection and ease of enforcement, criticised as unjust (see topic 2.3.2).</li></ul>
<h4>Civil law</h4><ul><li><b>Negligence</b> is fault-based: the defendant must fall below the standard of the reasonable person. Contributory negligence reduces damages by the claimant’s own fault.</li>
<li><b>Strict liability</b> in tort: Rylands v Fletcher, defective products (Consumer Protection Act 1987), and <b>vicarious liability</b>, where an employer is liable without personal fault.</li>
<li>Contract liability is largely strict: breach is enough, whatever the reason.</li>
<li><b>No-fault compensation</b>: the Criminal Injuries Compensation Scheme, vaccine damage payments; New Zealand’s accident compensation scheme replaced personal injury litigation. The Pearson Commission (1978) considered but did not adopt it.</li></ul>` }
  ],
  debate: [{ q: 'Should liability always depend on fault?', for: ['Fairness: people should only be punished for what they could have avoided.', 'Moral blame justifies the stigma of a criminal conviction.', 'Fault-based rules encourage care (deterrence).', 'Strict liability can convict the blameless (Callow v Tillstone).'], ag: ['Strict liability protects the public in regulated activities (food, pollution, alcohol sales).', 'Easier and cheaper to enforce; encourages the highest standards.', 'Victims need compensation whether or not anyone is at fault.', 'Fault-based negligence claims are slow and expensive; no-fault schemes are fairer to victims.'] }],
  cases: ['millerjackson', 'brown', 'entick', 'belmarsh', 'unison'],
  worked: [],
  pitfalls: ['Writing general essays about “society” without legal examples.', 'Forgetting that the specification themes can be credited in any Component 1 answer.', 'Treating fault only as a criminal concept — it matters in tort and contract too.'],
  cards: [
    ['Who described law as “social engineering”?', 'Roscoe Pound.'],
    ['Pound’s three types of interest?', 'Individual, public and social.'],
    ['Example of balancing interests in tort?', 'Miller v Jackson (1977): cricket club v neighbours; injunction refused.'],
    ['What is fault?', 'Blameworthiness — the defendant could and should have acted differently.'],
    ['Examples of strict liability in civil law?', 'Rylands v Fletcher; Consumer Protection Act 1987; vicarious liability.'],
    ['What is a no-fault compensation scheme?', 'Compensation without proving fault — e.g. Criminal Injuries Compensation Scheme; New Zealand ACC.'],
    ['Example of individual rights subordinated to the community?', 'COVID-19 restrictions; qualified rights restricted for public safety; compulsory purchase.'],
    ['Consensus vs conflict view of law?', 'Consensus: law reflects shared values (Durkheim). Conflict: law serves the powerful (Marx).']
  ],
  quiz: [
    { q: 'Roscoe Pound saw law as a form of…', o: ['social engineering', 'divine command', 'class oppression', 'pure logic'], x: 'Balancing interests.' },
    { q: 'In Miller v Jackson the Court of Appeal refused an injunction because…', o: ['the public interest in cricket outweighed the householders’ interests', 'the club was not at fault', 'the houses were built illegally', 'nuisance cannot apply to sport'], x: 'Damages instead.' },
    { q: 'Which is an example of no-fault liability in tort?', o: ['Vicarious liability of an employer', 'Negligence', 'Contributory negligence', 'Occupiers’ liability to visitors'], x: 'The employer need not personally be at fault.' },
    { q: 'Which statute protects people carrying out “desirable activities” in negligence cases?', o: ['Compensation Act 2006', 'Theft Act 1968', 'Legal Services Act 2007', 'Juries Act 1974'], x: 's1.' },
    { q: 'A strict liability offence requires no…', o: ['mens rea as to at least one element of the actus reus', 'actus reus', 'prosecution', 'trial'], x: 'The act must still be proved.' }
  ],
  exam: [{ q: 'Analyse and evaluate the importance of fault in the law. [15]', m: 15, ms: ['meaning of fault', 'criminal law — mens rea; levels of fault; sentencing', 'strict liability — Callow v Tillstone / Harrow v Shah — justification and criticism', 'defences removing fault', 'negligence as fault liability', 'strict and vicarious liability in tort', 'contributory negligence', 'no-fault compensation schemes', 'conclusion'] }],
  tools: ['interestsort']
});

/* ---------- N3 Law and morality ---------- */
TOPICS.push({
  id: 'N3', unit: 'N', ref: 'Law and morality', title: 'Law and morality',
  short: 'Distinguishing law and morals, pluralism, the Hart–Devlin debate, enforcing moral values',
  summary: 'Law and morality overlap — murder is both illegal and immoral — but they are not the same. This topic asks how they differ, how a law can reflect morality in a society with many moral views, and whether the state should enforce morality at all: the famous Hart–Devlin debate. Judges and Parliament have faced this question in cases about sexual behaviour, consent to harm, abortion and the end of life.',
  spec: ['The distinction between law and morals', 'The diversity of moral views in a pluralist society', 'The relationship between law and morals and its importance', 'The legal enforcement of moral values: the Hart–Devlin debate, Mill’s harm principle', 'Case law and statute illustrating law and morality'],
  learn: [
    { h: 'How law and morality differ', html: `
<div class="tbl"><table><tr><th>Law</th><th>Morality</th></tr>
<tr><td>Made deliberately by Parliament or judges on a particular date</td><td>Develops gradually; no single author</td></tr>
<tr><td>Enforced by the state; formal sanctions</td><td>Enforced by conscience and social pressure</td></tr>
<tr><td>Clear (ideally) and ascertainable</td><td>Often uncertain and disputed</td></tr>
<tr><td>Can be broken without being immoral (parking offences, strict liability)</td><td>Can be immoral without being illegal (lying, adultery, failing to help a stranger in danger)</td></tr></table></div>
<p>The overlap is large: murder, theft, assault and fraud are both. But in England there is <b>no general legal duty to rescue</b> a stranger — a clear gap between law and morality (see omissions, topic 2.3.2).</p>` },
    { h: 'A pluralist society', html: `
<p>England and Wales is a <b>pluralist</b> society: people hold different religious and secular moral views. Issues on which views sharply differ include abortion, assisted dying, drug use, same-sex relationships, surrogacy and gender identity. Law-makers must decide whether to reflect a majority view, protect minorities, or leave choices to individuals.</p>
<p>Examples of changing law reflecting changing morality: the <b>Suicide Act 1961</b> (suicide decriminalised); the <b>Sexual Offences Act 1967</b> (decriminalised homosexual acts in private, following the Wolfenden Report); the <b>Abortion Act 1967</b>; the abolition of the death penalty (1965); [[c:rvr]] (1991); the <b>Marriage (Same Sex Couples) Act 2013</b>; the Children (Abolition of Defence of Reasonable Punishment) (Wales) Act 2020; the debate on the Terminally Ill Adults (End of Life) Bill (2024–).</p>` },
    { h: 'The Hart–Devlin debate', html: `
<p>The <b>Wolfenden Report</b> (1957) recommended decriminalising private homosexual acts between consenting adults, stating that there must remain “a realm of private morality and immorality which is, in brief and crude terms, not the law’s business”.</p>
<div class="debate"><div class="for"><h5>Lord Devlin — enforce shared morality</h5><ul><li>Society is held together by a <b>shared morality</b>; undermining it threatens society, like treason.</li><li>The law may enforce morality where conduct provokes “<b>intolerance, indignation and disgust</b>” in the reasonable person — “the man on the Clapham omnibus” or the jury box.</li><li>There should be toleration of maximum individual freedom consistent with the integrity of society.</li></ul></div><div class="ag"><h5>Professor Hart — the harm principle</h5><ul><li>Based on <b>John Stuart Mill</b>’s <i>On Liberty</i> (1859): the only purpose for which power can rightfully be exercised over anyone, against their will, is to <b>prevent harm to others</b>.</li><li>No evidence that private immorality threatens society’s survival.</li><li>Disgust is not a reliable guide — majorities can be prejudiced.</li><li>Accepted limited <b>paternalism</b> (protecting people from themselves, e.g. drugs) but not enforcing morality as such.</li></ul></div></div>` },
    { h: 'Morality in the courts', html: `
<ul><li><b>Judges enforcing morality</b>: [[c:shaw]] and [[c:knuller]] (conspiracy to corrupt public morals); [[c:brown]] (no consent to sadomasochistic injuries).</li>
<li><b>Judges respecting autonomy</b>: [[c:wilson]]; [[c:gillick]]; the dissent in Brown (Lords Mustill and Slynn).</li>
<li><b>Life and death</b>: [[c:dudley]] (necessity no defence to murder); [[c:bland]]; [[c:rea]]; [[c:pretty]]; [[c:nicklinson]] — judges repeatedly said the most divisive moral issues are for Parliament.</li>
<li><b>Judge-led moral change</b>: [[c:rvr]] (marital rape).</li>
<li><b>Consent in statute</b>: the Domestic Abuse Act 2021 s71 confirmed that consent to serious harm for sexual gratification is no defence (the “rough sex” defence).</li></ul>` }
  ],
  debate: [{ q: 'Should the law enforce moral values?', for: ['Devlin: a shared morality holds society together.', 'Law protects the vulnerable from exploitation (Brown; Pretty).', 'Public disgust reflects values most citizens share.', 'Law expresses society’s values (e.g. hate crime aggravation).'], ag: ['Hart and Mill: only harm to others justifies coercion.', 'Pluralism: there is no single shared morality to enforce.', 'Enforcing majority morality oppresses minorities (Knuller).', 'Moral values change — the law can become outdated and cruel.'] }],
  cases: ['shaw', 'knuller', 'brown', 'wilson', 'gillick', 'bland', 'rea', 'pretty', 'nicklinson', 'dudley', 'rvr'],
  worked: [],
  pitfalls: ['Describing the Hart–Devlin debate without applying it to cases or statutes.', 'Saying law and morality are the same thing.', 'Forgetting that judges have often sent moral issues back to Parliament (Bland, Nicklinson).'],
  cards: [
    ['What did the Wolfenden Report (1957) recommend?', 'Decriminalising private homosexual acts between consenting adults; private morality is “not the law’s business”.'],
    ['Devlin’s view?', 'Society may enforce a shared morality where conduct provokes intolerance, indignation and disgust.'],
    ['Hart’s view?', 'Following Mill’s harm principle, law should only restrict liberty to prevent harm to others.'],
    ['Mill’s harm principle?', 'The only purpose for which power can rightfully be exercised over anyone, against their will, is to prevent harm to others.'],
    ['Shaw v DPP (1962)?', 'Conspiracy to corrupt public morals — courts guarding the moral welfare of the state.'],
    ['R v Brown (1993)?', 'Consent is no defence to ABH or worse in sadomasochistic activity.'],
    ['R v Wilson (1996)?', 'Consensual branding between spouses — consent a defence; like tattooing.'],
    ['Airedale NHS Trust v Bland (1993)?', 'Withdrawing treatment from a PVS patient lawful; moral issues for Parliament.'],
    ['What is a pluralist society?', 'One with many different moral, religious and cultural views.'],
    ['Example of no legal duty despite a moral duty?', 'No general duty to rescue a stranger.']
  ],
  quiz: [
    { q: 'Which theorist argued that law should only prevent harm to others?', o: ['John Stuart Mill (followed by Hart)', 'Lord Devlin', 'Thomas Aquinas', 'Karl Marx'], x: 'On Liberty (1859).' },
    { q: 'Lord Devlin’s test for enforcing morality focused on…', o: ['intolerance, indignation and disgust', 'harm to others', 'the greatest happiness', 'religious texts'], x: 'The reasonable person’s reaction.' },
    { q: 'In R v Brown the House of Lords held that…', o: ['consent is no defence to ABH in sadomasochistic activity', 'consent is always a defence in private', 'branding is lawful', 'homosexuality is a crime'], x: 'Distinguished in Wilson.' },
    { q: 'Which case concerned conspiracy to corrupt public morals?', o: ['Shaw v DPP', 'Gillick', 'Bland', 'Wilson'], x: 'The Ladies’ Directory.' },
    { q: 'In R (Nicklinson) v MoJ, the Supreme Court…', o: ['declined to declare the assisted suicide ban incompatible, deferring to Parliament', 'legalised assisted suicide', 'struck down s2 Suicide Act', 'made a declaration of incompatibility'], x: 'Institutional competence.' },
    { q: 'The Wolfenden Report led to…', o: ['the Sexual Offences Act 1967', 'the Abortion Act 1967', 'the Suicide Act 1961', 'the Human Rights Act 1998'], x: 'Partial decriminalisation of homosexuality.' }
  ],
  exam: [{ q: 'Analyse and evaluate the extent to which the law should enforce moral values. [15]', m: 15, ms: ['law and morality distinguished', 'pluralist society', 'Devlin — shared morality, disgust test', 'Hart / Mill — harm principle; paternalism', 'Shaw / Knuller — judicial moralism', 'Brown v Wilson — consent', 'life and death cases — Bland, Pretty, Nicklinson', 'statutory change — 1967 Acts, 2013 Act, DAA 2021', 'role of Parliament vs judges', 'conclusion'] }],
  tools: ['moralsort']
});

/* ---------- N4 Law and justice ---------- */
TOPICS.push({
  id: 'N4', unit: 'N', ref: 'Law and justice', title: 'Law and justice',
  short: 'Meaning of justice, theories of justice, whether rules, institutions and processes achieve justice',
  summary: 'Justice is the ideal the law aims at — but what does it mean? Philosophers from Aristotle to Rawls have given different answers: fairness, desert, equality, utility, entitlement. This topic introduces the main theories and then asks the specification’s question: to what extent do substantive legal rules, legal institutions and processes achieve justice or create barriers to it?',
  spec: ['The meaning of justice: formal, substantive, procedural and natural justice', 'Theories of justice: Aristotle, utilitarianism (Bentham, Mill), natural law, Rawls, Nozick, Marx', 'The extent to which substantive legal rules achieve justice', 'The extent to which legal institutions and processes achieve justice or create barriers to justice'],
  learn: [
    { h: 'Meanings of justice', html: `
<ul><li><b>Formal justice</b>: treating like cases alike (Perelman) — the basis of precedent.</li>
<li><b>Substantive justice</b>: whether the rules themselves are fair in content.</li>
<li><b>Procedural justice</b>: fair procedures — independent judges, a fair hearing, legal representation, a right of appeal.</li>
<li><b>Natural justice</b>: two rules of procedural fairness — <i>audi alteram partem</i> (hear the other side) and <i>nemo iudex in causa sua</i> (no one should be a judge in their own cause: [[c:dimes]], [[c:pinochet]]).</li>
<li><b>Distributive</b> justice (fair sharing of benefits and burdens) and <b>corrective</b> justice (putting right wrongs between individuals — damages in tort) — both from Aristotle.</li></ul>` },
    { h: 'Theories of justice', html: `
<div class="tbl"><table><tr><th>Theory</th><th>Key idea</th><th>Legal example</th></tr>
<tr><td><b>Aristotle</b></td><td>Justice as giving each their due; distributive and corrective justice; equals treated equally</td><td>Tort damages restore the claimant (corrective); taxation and legal aid (distributive)</td></tr>
<tr><td><b>Natural law</b> (Aquinas)</td><td>Human law must conform to a higher moral law</td><td>Human rights; jury equity; [[c:sigsworth]]</td></tr>
<tr><td><b>Utilitarianism</b> (Bentham, Mill)</td><td>The right act produces “the greatest happiness of the greatest number”</td><td>Public policy limits in negligence; [[c:millerjackson]]; strict liability; majority verdicts</td></tr>
<tr><td><b>Rawls</b> (<i>A Theory of Justice</i>, 1971)</td><td>Justice as fairness: principles chosen behind a “<b>veil of ignorance</b>” in the “original position”. (1) Equal basic liberties; (2) inequalities only if they benefit the least advantaged (the <b>difference principle</b>) and offices are open to all</td><td>Legal aid; human rights; equal access to the professions and judiciary</td></tr>
<tr><td><b>Nozick</b> (<i>Anarchy, State and Utopia</i>, 1974)</td><td>Entitlement theory: a distribution is just if property was acquired and transferred justly; a minimal state; redistribution violates rights</td><td>Freedom of contract; property rights; criticism of legal aid funded by taxation</td></tr>
<tr><td><b>Marx</b></td><td>Law is a tool of the ruling class; true justice needs a classless society</td><td>Criticisms of unequal access to justice; the Post Office scandal</td></tr></table></div>` },
    { h: 'Do substantive rules achieve justice?', html: `
<p>Examples you can use from your options:</p>
<ul><li><b>Criminal</b>: the mandatory life sentence for murder treats mercy killers like contract killers; the Law Commission called the law of murder “a rambling edifice”; the OAPA 1861 is outdated; strict liability can convict the blameless; loss of control and diminished responsibility reforms (2009) aimed at fairer outcomes; consent in [[c:brown]].</li>
<li><b>Tort</b>: fault-based negligence leaves many victims uncompensated; limits on psychiatric injury and pure economic loss; contributory negligence achieves fairer apportionment.</li>
<li><b>Contract</b>: consumer protection (Consumer Rights Act 2015) corrects inequality of bargaining power; the postal rule and privity can produce unfair results.</li>
<li><b>Human rights</b>: the HRA gives remedies against the state, but declarations of incompatibility do not help the claimant directly.</li>
<li><b>Precedent and statutory interpretation</b>: rigidity ([[c:berriman]]) versus flexibility (the Practice Statement; the purposive approach).</li></ul>` },
    { h: 'Do institutions and processes achieve justice?', html: `
<ul><li><b>Juries</b>: lay participation and jury equity versus bias and unexplained verdicts.</li>
<li><b>Appeals and the CCRC</b>: correcting miscarriages of justice — [[c:mcilkenny]], the Guildford Four, Stefan Kiszko, Sally Clark, Andrew Malkinson (2023), the Post Office Horizon scandal ([[c:hamilton]]).</li>
<li><b>Access to justice</b>: LASPO cuts and litigants in person; court fees ([[c:unison]]); delays (“justice delayed is justice denied”) with record Crown Court backlogs.</li>
<li><b>Judiciary</b>: independence and impartiality versus lack of diversity.</li>
<li><b>ADR and tribunals</b>: cheaper and quicker, but an inequality of arms.</li></ul>` }
  ],
  debate: [{ q: 'Does the English legal system achieve justice?', for: ['Independent judiciary; natural justice protected by judicial review.', 'Appeals and the CCRC correct miscarriages.', 'Human Rights Act protects individuals against the state.', 'Precedent gives formal justice — like cases alike.', 'Juries give lay involvement and equity.'], ag: ['Miscarriages of justice: Birmingham Six, Post Office, Malkinson.', 'Legal aid cuts and cost create barriers — justice depends on wealth.', 'Delays and backlogs.', 'Outdated rules (OAPA 1861, mandatory life sentence).', 'Lack of diversity in the judiciary and professions.'] }],
  cases: ['dimes', 'pinochet', 'sigsworth', 'millerjackson', 'brown', 'berriman', 'mcilkenny', 'hamilton', 'unison'],
  worked: [],
  pitfalls: ['Describing theories without linking them to real rules, cases or institutions.', 'Saying justice has one agreed meaning.', 'Forgetting procedural justice (fair process) as well as substantive justice (fair outcomes).'],
  cards: [
    ['Formal justice?', 'Treating like cases alike (Perelman).'],
    ['Two rules of natural justice?', 'Audi alteram partem (hear both sides); nemo iudex in causa sua (no one judges their own cause).'],
    ['Aristotle’s two types of justice?', 'Distributive and corrective (rectificatory).'],
    ['Utilitarian principle?', 'The greatest happiness of the greatest number (Bentham).'],
    ['Rawls’ veil of ignorance?', 'Choose principles of justice without knowing your own place in society.'],
    ['Rawls’ difference principle?', 'Inequalities are just only if they benefit the least advantaged.'],
    ['Nozick’s theory?', 'Entitlement: holdings are just if justly acquired and transferred; minimal state.'],
    ['Birmingham Six?', 'Convictions for the 1974 bombings quashed in 1991; led to the Runciman Commission and CCRC.'],
    ['Post Office Horizon scandal response?', 'Post Office (Horizon System) Offences Act 2024 quashed hundreds of convictions.']
  ],
  quiz: [
    { q: 'Treating like cases alike is known as…', o: ['formal justice', 'distributive justice', 'utilitarianism', 'entitlement theory'], x: 'The basis of precedent.' },
    { q: 'The “veil of ignorance” is associated with…', o: ['John Rawls', 'Robert Nozick', 'Jeremy Bentham', 'Aristotle'], x: 'A Theory of Justice (1971).' },
    { q: 'Which theorist argued for a minimal state and entitlement theory?', o: ['Robert Nozick', 'John Rawls', 'Karl Marx', 'Lord Devlin'], x: 'Anarchy, State and Utopia.' },
    { q: 'Corrective justice is most clearly seen in…', o: ['damages in tort restoring the claimant', 'progressive taxation', 'jury selection', 'Royal Assent'], x: 'Aristotle.' },
    { q: 'The rule that no one should be a judge in their own cause was applied in…', o: ['Re Pinochet', 'R v Brown', 'Mercer v Denne', 'Miller v Jackson'], x: 'Also Dimes v Grand Junction Canal.' },
    { q: 'The Birmingham Six case contributed to the creation of…', o: ['the Criminal Cases Review Commission', 'the Supreme Court', 'the Law Commission', 'the Legal Aid Agency'], x: 'Criminal Appeal Act 1995.' }
  ],
  exam: [{ q: 'Analyse and evaluate the extent to which legal institutions and processes achieve justice. [15]', m: 15, ms: ['meaning of justice — formal, substantive, procedural', 'theory applied — Rawls / utilitarian / Aristotle', 'judiciary — independence, natural justice', 'juries — equity v bias', 'appeals and CCRC — miscarriages', 'access to justice — LASPO, fees (UNISON)', 'delay and backlogs', 'ADR/tribunals', 'examples of injustice — Post Office, Malkinson', 'conclusion'] }],
  tools: ['justicesort']
});

/* ---------- Nature of law tools ---------- */
TOOLS.customtree = { type: 'tree', title: 'Is it a valid local custom?', intro: 'Villagers claim a customary right to hold a fair on a field every May Day. The new landowner objects. Apply the legal tests.', nodes: {
  start: { q: 'Has the practice existed since “time immemorial” — as far back as anyone can show, with no evidence it began after 1189?', o: [['Yes', 'reas'], ['No — it started in 1950', 'fail1']] },
  fail1: { end: true, tone: 'bad', v: 'Not a valid custom', x: 'A custom must have existed since time immemorial. Evidence that it began later defeats it.' },
  reas: { q: 'Is it reasonable?', o: [['Yes — a one-day fair causes limited harm', 'cert'], ['No — it destroys the landowner’s use of the land all year', 'fail2']] },
  fail2: { end: true, tone: 'bad', v: 'Not a valid custom', x: 'An unreasonable custom is invalid.', cases: ['wolstanton'] },
  cert: { q: 'Is it certain as to the place, the people who benefit and what can be done?', o: [['Yes — this field, the villagers, a May Day fair', 'peace'], ['No — vague', 'fail3']] },
  fail3: { end: true, tone: 'bad', v: 'Not a valid custom', x: 'It must be certain.' },
  peace: { q: 'Has it been exercised peaceably, openly and as of right (not by the landowner’s permission), and continuously?', o: [['Yes', 'ok'], ['No — the owner always gave permission each year', 'fail4']] },
  fail4: { end: true, tone: 'bad', v: 'Not a valid custom', x: 'A practice carried out with permission is not exercised as of right.' },
  ok: { end: true, tone: 'good', v: 'Valid custom — enforceable', x: 'Like the fishermen’s custom of drying nets, the court would recognise it as law for that locality (provided it does not conflict with statute).', cases: ['mercer'] }
} };
TOOLS.interestsort = { type: 'sort', title: 'Whose interest wins?', intro: 'In each situation, which interest did the law prefer?', cats: ['Individual / private interest', 'Public / community interest'], items: [
  ['[[c:millerjackson]] — the court refused an injunction to stop cricket.', 'Public / community interest', 'Damages instead: the community’s recreation won.'],
  ['[[c:entick]] — the King’s messengers had no lawful authority to seize papers.', 'Individual / private interest', 'Rule of law protecting property and liberty.'],
  ['COVID-19 regulations banned most gatherings in 2020.', 'Public / community interest', 'Public health.'],
  ['[[c:belmarsh]] — indefinite detention of foreign terror suspects was incompatible with Convention rights.', 'Individual / private interest', 'Liberty and non-discrimination.'],
  ['Police are generally not liable in negligence for failing to catch a criminal (Hill v CC West Yorkshire).', 'Public / community interest', 'Public policy: avoid defensive policing and diverting resources.'],
  ['[[c:unison]] — tribunal fees quashed.', 'Individual / private interest', 'Access to justice.']
] };
TOOLS.moralsort = { type: 'sort', title: 'Hart or Devlin?', intro: 'Which side of the debate would each statement or decision support?', cats: ['Devlin (enforce morality)', 'Hart (harm principle)'], items: [
  ['The majority in [[c:brown]] — protecting society against a cult of violence.', 'Devlin (enforce morality)', 'Consent overridden despite privacy.'],
  ['The Wolfenden Report — private morality is not the law’s business.', 'Hart (harm principle)', 'Led to the 1967 Act.'],
  ['[[c:shaw]] — conspiracy to corrupt public morals.', 'Devlin (enforce morality)', 'Courts as guardians of public morals.'],
  ['[[c:wilson]] — consensual branding between spouses is not a matter for the criminal law.', 'Hart (harm principle)', 'Autonomy; no harm to others.'],
  ['“The reasonable man on the Clapham omnibus” reacting with disgust.', 'Devlin (enforce morality)', 'Devlin’s test.'],
  ['Decriminalising suicide (Suicide Act 1961).', 'Hart (harm principle)', 'Harm only to self.'],
  ['[[c:knuller]] — contact adverts for gay men corrupt public morals.', 'Devlin (enforce morality)', 'Criticised as enforcing prejudice.']
] };
TOOLS.justicesort = { type: 'sort', title: 'Match the theory of justice', intro: 'Which theory best supports each argument?', cats: ['Aristotle', 'Utilitarianism', 'Rawls', 'Nozick', 'Natural law'], items: [
  ['Damages in tort should put the claimant back in the position they were in before the wrong.', 'Aristotle', 'Corrective justice.'],
  ['The police should not owe a duty of care to individual victims, because it would harm policing for everyone.', 'Utilitarianism', 'Greatest good.'],
  ['Legal aid should be available so that the poorest can enforce their rights.', 'Rawls', 'Difference principle; equal liberty.'],
  ['People should be free to make any contract they like; the state should not redistribute.', 'Nozick', 'Entitlement; minimal state.'],
  ['A murderer should not inherit from the victim even though the statute says so.', 'Natural law', 'Re Sigsworth — law must conform to a higher moral order.'],
  ['Principles chosen without knowing whether you will be rich or poor.', 'Rawls', 'Veil of ignorance.'],
  ['Majority jury verdicts are acceptable if they produce the best overall outcomes.', 'Utilitarianism', 'Consequences.']
] };
