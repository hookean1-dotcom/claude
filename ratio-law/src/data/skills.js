/* ==========================================================
   LEGAL SKILLS — exam technique across all components
   ========================================================== */
TOPICS.push({
  id: 'S1', unit: 'S', ref: 'Skills', title: 'Answering problem questions (AO2)',
  short: 'Component 1 Section A scenarios and all Component 2 questions: identify, state, apply, conclude',
  summary: 'Every Component 2 question — and the scenario question in Component 1 — gives you a set of facts and asks you to advise the parties. Most of the marks are for AO2: applying legal rules to the facts to build a legal argument using correct legal terminology. Examiners reward a methodical, issue-by-issue approach that uses authority and reaches a conclusion.',
  spec: ['Analyse a factual scenario by identifying the relevant legal issues', 'Apply legal rules and principles to a hypothetical scenario', 'Present a legal argument using appropriate legal terminology', 'Support the argument with legal authority (statute and case law)', 'Reach a reasoned, justified conclusion'],
  learn: [
    { h: 'What AO2 rewards', html: `
<p>AO2 is worth <b>30% of the A level</b>, and <b>22.5%</b> of that comes from Component 2 alone. It rewards <b>applying</b> the law — not just knowing it. A candidate who lists every rule of offer and acceptance but never says whether <i>this</i> letter was an offer will score in the lower bands.</p>
<div class="box tip"><b class="lbl">The golden rule</b><p>Every rule you state should be followed immediately by the facts it applies to. Use the parties’ names, quote the scenario, and say “therefore”.</p></div>` },
    { h: 'A method: IDEA (or IRAC)', html: `
<ol><li><b>Identify</b> each legal issue in the order it arises in the facts (e.g. “Was Ben’s advert an offer or an invitation to treat?”).</li>
<li><b>Define</b> the relevant rule precisely, citing the <b>statute section</b> or <b>leading case</b>.</li>
<li><b>Explain and apply</b>: compare the facts with the authority — are they similar, or can they be distinguished? Use the facts given; do not invent new ones. Where facts are unclear, say what depends on them (“If Amy knew…”).</li>
<li><b>Answer</b>: a mini-conclusion for that issue, then move on.</li></ol>
<p>Finish with an <b>overall conclusion</b> advising each party: likely liability, defences, and remedies or sentence where relevant.</p>` },
    { h: 'Using authority well', html: `
<ul><li>Cite a case by name, then the <b>principle</b>, then <b>compare facts</b>: “As in [[c:thomasthomas|Thomas v Thomas]], the £1 rent was sufficient consideration even though it was not adequate; similarly, Cara’s promise to…”.</li>
<li>You don’t need dates or citations — the name and principle are what matter. A short description (“the snail in the bottle case”) is acceptable if you forget the name.</li>
<li>Statute sections carry real credit: s1 Theft Act 1968; ss9–11 Consumer Rights Act 2015; s2(1) Occupiers’ Liability Act 1957.</li>
<li>Prefer <b>higher-court</b> and <b>more recent</b> authority where the law has moved on (e.g. <i>R v Ghosh</i> → [[c:ivey]]; [[c:caparo]] → [[c:robinson]]).</li></ul>` },
    { h: 'Structure by party and by issue', html: `
<ul><li><b>Contract</b>: formation (offer, acceptance, consideration, intention) → terms → vitiating factors → discharge → remedies.</li>
<li><b>Tort</b>: duty → breach → causation and remoteness → defences → remedies; or the occupiers’ liability route; nuisance/Rylands.</li>
<li><b>Criminal</b>: take each <b>defendant</b> and each <b>victim</b> in turn; for each offence, actus reus → mens rea → defences. Start with the most serious offence (murder) then consider alternatives (voluntary/involuntary manslaughter).</li>
<li><b>Human rights</b>: which Convention right is engaged → is the interference prescribed by law / legitimate aim / proportionate → domestic law (PACE, POA 1986) → remedies (HRA, JR, ECtHR).</li></ul>` },
    { h: 'Common ways to lose marks', html: `
<ul><li>Writing everything you know about a topic (“knowledge dumping”) instead of what the facts raise.</li>
<li>Missing issues — read the scenario twice and annotate every fact; examiners rarely include irrelevant details.</li>
<li>Getting the law wrong on a key element (e.g. using the old <i>Ghosh</i> test, or treating adverts as offers).</li>
<li>No conclusion, or “it depends” without explaining on what.</li>
<li>Spending too long on the first issue. In Component 2 you have about <b>45 minutes per 25-mark question</b>.</li></ul>` }
  ],
  debate: [],
  cases: ['thomasthomas', 'ivey', 'caparo', 'robinson'],
  worked: [{ q: '<b>Model paragraph (criminal law).</b> “Dev punched Eli once, intending only to frighten him. Eli fell, hit his head and died.” Consider Dev’s liability for unlawful act manslaughter.', s: ['<b class="st">Identify</b>Dev lacks the intention to kill or cause GBH needed for murder, so the issue is unlawful act manslaughter.', '<b class="st">Define</b>The prosecution must prove an unlawful act (a crime), which is dangerous on an objective test — sober and reasonable people would recognise it carries the risk of some harm ([[c:church]]) — and which causes death.', '<b class="st">Apply</b>The punch is a battery, a criminal act; Dev intended the application of force, so has the mens rea for battery. A reasonable person would see a punch as risking some harm, so it is dangerous. The punch caused Eli to fall and hit his head: but for the punch he would not have died, and it was an operating and substantial cause with no intervening act breaking the chain (compare [[c:pagett]]).', '<b class="st">Answer</b>Dev is likely to be guilty of unlawful act manslaughter.'], a: 'Notice that every sentence of application uses the facts: “the punch”, “Dev”, “Eli”.' }],
  pitfalls: ['Stating the law in one block and then applying it in another — integrate them.', 'Inventing facts not in the scenario.', 'Ignoring defences or remedies when the facts plainly raise them.', 'Forgetting to consider alternative outcomes where the facts are ambiguous.'],
  cards: [
    ['What does AO2 reward?', 'Applying legal rules and principles to a scenario to present a legal argument using legal terminology.'],
    ['What percentage of the A level is AO2?', '30% (7.5% Component 1; 22.5% Component 2).'],
    ['What are the four steps of IDEA?', 'Identify the issue; Define the law; Explain and apply to facts; Answer (conclude).'],
    ['Roughly how long for a 25-mark Component 2 question?', 'About 45 minutes.'],
    ['What should follow every rule you state in a problem answer?', 'Application to the specific facts, using the parties’ names.'],
    ['Where the facts are unclear, what should you do?', 'Explain the alternative outcomes depending on the missing fact.'],
    ['Order for criminal problems?', 'Each defendant, each victim, most serious offence first: actus reus, mens rea, defences.']
  ],
  quiz: [
    { q: 'Component 2 questions are mainly assessed on…', o: ['AO1 and AO2', 'AO1 and AO3', 'AO3 only', 'AO2 and AO3'], x: 'No AO3 in Component 2.' },
    { q: 'The best way to use a case in a problem answer is to…', o: ['state its principle and compare its facts with the scenario', 'give its full citation and date', 'describe its facts at length', 'list as many cases as possible'], x: 'Application.' },
    { q: 'If a key fact is missing from the scenario, you should…', o: ['explain how the outcome depends on it', 'invent the fact', 'ignore the issue', 'assume the worst'], x: 'Alternative outcomes.' },
    { q: '“Knowledge dumping” means…', o: ['writing everything you know about a topic rather than what the facts raise', 'using too many statute sections', 'writing a conclusion', 'citing recent cases'], x: 'Loses AO2 credit.' }
  ],
  exam: [{ q: 'Practise the method: advise Fatima. [10]', m: 10, scen: 'Fatima displays a vintage guitar in her shop window with a label “£500 — bargain!”. Gary walks in, puts £500 on the counter and says “I accept”. Fatima refuses to sell because she has had a better offer.', ms: ['identify issue: was the display an offer or invitation to treat?', 'define: invitation to treat — Fisher v Bell; Pharmaceutical Society v Boots', 'apply: the label in the window is an invitation to treat', 'Gary’s “I accept” is therefore an offer', 'Fatima is free to reject his offer', 'conclude: no contract; Gary has no claim'] }],
  tools: ['iracsteps']
});

TOPICS.push({
  id: 'S2', unit: 'S', ref: 'Skills', title: 'Writing evaluative essays (AO3)',
  short: 'Component 1 Section B part (b) and all Component 3 questions: analyse, evaluate, conclude',
  summary: 'Component 3 and the 15-mark essays in Component 1 reward AO3: analysing and evaluating legal rules, principles, concepts and issues. That means building an argument — explaining what the law is (AO1), then weighing its strengths and weaknesses with evidence, considering reform, and reaching a justified conclusion that answers the question set.',
  spec: ['Analyse and evaluate legal rules, principles, concepts and issues', 'Construct and develop a clear, logical argument', 'Use authority to support evaluation', 'Consider reform and the nature of law (law and morality, justice, society)', 'Reach a substantiated conclusion'],
  learn: [
    { h: 'What AO3 rewards', html: `
<p>AO3 is worth <b>30% of the A level</b> — 7.5% in Component 1 and <b>22.5% in Component 3</b>. Top-band answers are <b>arguments</b>, not descriptions: every paragraph makes a point that helps answer the question, supports it with authority, and links back to it.</p>
<div class="box tip"><b class="lbl">Read the question</b><p>“Analyse and evaluate the extent to which…” wants a judgment on a scale (“to a large extent, but…”). “Analyse and evaluate the law on…” wants strengths, weaknesses and reforms. “Consider whether…” wants a yes/no answer argued both ways.</p></div>` },
    { h: 'A structure that works', html: `
<ol><li><b>Introduction</b> (2–3 sentences): define the key terms and state your line of argument.</li>
<li><b>Point paragraphs</b> — PEEL: <b>P</b>oint (a strength or weakness); <b>E</b>vidence (case, statute, statistic, report); <b>E</b>valuate (why it matters; the counter-argument; how far it is true); <b>L</b>ink back to the question.</li>
<li>Cover <b>both sides</b>, then <b>reform</b>: Law Commission reports, recent statutes, academic or judicial criticism, other jurisdictions.</li>
<li><b>Conclusion</b>: answer the question directly, weighing the arguments — do not introduce new material.</li></ol>` },
    { h: 'Sources of evaluation', html: `
<ul><li><b>Judicial comment</b>: judges criticising the law (e.g. the Supreme Court abandoning the Ghosh test in [[c:ivey]]; the continuing uncertainty over oblique intent after [[c:woollin]]).</li>
<li><b>Law Commission</b> reports: e.g. <i>Murder, Manslaughter and Infanticide</i> (2006), <i>Offences Against the Person</i> (2015), <i>Unfair Terms</i>.</li>
<li><b>Legislation</b> that reformed the law: Consumer Rights Act 2015; Coroners and Justice Act 2009; Defamation Act 2013.</li>
<li><b>Principles</b>: certainty v flexibility; fairness; consistency; the role of judges v Parliament; the rule of law.</li>
<li><b>Nature of law</b> (Component 1 and synoptically): law and <b>morality</b> (e.g. euthanasia, consent), law and <b>justice</b> (distributive, corrective, social), law and <b>society</b> (balancing conflicting interests).</li></ul>` },
    { h: 'Component 1 Section B', html: `
<p>You answer <b>one question</b> from a choice of two, each with two parts: <b>part (a)</b> is explanatory (mainly AO1 — e.g. “Explain the role of lay magistrates”), and <b>part (b)</b> is evaluative (AO3 — e.g. “Analyse and evaluate the use of lay people in the criminal justice system”). Don’t repeat (a) in (b): build on it with argument.</p>` }
  ],
  debate: [],
  cases: ['ivey', 'woollin', 'majewski'],
  worked: [{ q: '<b>Model PEEL paragraph.</b> “Analyse and evaluate whether the law on intoxication is fair.”', s: ['<b class="st">Point</b>The rule that voluntary intoxication is no defence to basic intent crimes is arguably unfair because it convicts people who lacked mens rea.', '<b class="st">Evidence</b>In [[c:majewski]] the House of Lords held that becoming voluntarily intoxicated is itself a reckless course of conduct which supplies the mens rea for basic intent offences.', '<b class="st">Evaluate</b>This conflicts with the principle that mens rea and actus reus should coincide, since the “recklessness” occurred earlier when drinking and the defendant may not have foreseen any harm. However, it protects the public and reflects moral blame, as intoxication is a factor in many violent offences.', '<b class="st">Link</b>So the law is arguably unfair to defendants in principle, but it is justifiable on grounds of public policy.'], a: 'Each paragraph moves the argument forward and leads into the conclusion.' }],
  pitfalls: ['Describing the law with no evaluation until the final paragraph.', 'Only one side of the argument.', 'A conclusion that doesn’t answer the question or sits on the fence without reason.', 'Evaluation without authority (“this is unfair” — why? says who?).'],
  cards: [
    ['What does AO3 reward?', 'Analysing and evaluating legal rules, principles, concepts and issues.'],
    ['What percentage of the A level is AO3?', '30% (7.5% Component 1; 22.5% Component 3).'],
    ['What does PEEL stand for?', 'Point, Evidence, Evaluate, Link.'],
    ['Four sources of evaluation?', 'Judicial criticism; Law Commission reports; reforming legislation; principles such as certainty and fairness.'],
    ['What should a conclusion do?', 'Answer the question directly, weighing the arguments; no new material.'],
    ['Component 1 Section B structure?', 'One question from two; part (a) explain, part (b) analyse and evaluate.']
  ],
  quiz: [
    { q: 'Component 3 questions are mainly assessed on…', o: ['AO1 and AO3', 'AO1 and AO2', 'AO2 only', 'AO2 and AO3'], x: 'No AO2 in Component 3.' },
    { q: 'Which is evaluation rather than description?', o: ['“This rule creates uncertainty because juries may reach different verdicts on similar facts.”', '“Section 1 of the Theft Act 1968 defines theft.”', '“The case was decided in 1995.”', '“There are five elements of theft.”'], x: 'Judgment with a reason.' },
    { q: 'A good conclusion should…', o: ['answer the question and weigh the arguments', 'introduce new cases', 'repeat the introduction word for word', 'avoid taking a view'], x: 'Justified judgment.' },
    { q: 'Which is a strong source of evaluation?', o: ['A Law Commission report', 'Your personal opinion alone', 'A dictionary definition', 'The date of a case'], x: 'Authority for reform.' }
  ],
  exam: [{ q: 'Practise: Analyse and evaluate the role of juries in criminal trials. [15]', m: 15, ms: ['intro — role of juries in Crown Court trials', 'advantages — public participation, jury equity (Ponting), impartiality', 'disadvantages — no reasons, secrecy, media influence, internet research (Fraill)', 'bias and perverse verdicts', 'cost and time', 'reform — restricting jury trial (Leveson review 2025); judge-only trials', 'justified conclusion'] }],
  tools: ['aosort', 'essaysteps']
});

TOPICS.push({
  id: 'S3', unit: 'S', ref: 'Skills', title: 'The papers, command words and timing',
  short: 'What each component looks like, how the marks are split and how to plan your time',
  summary: 'Knowing exactly what each paper looks like — and what each command word asks for — lets you spend your time where the marks are. This topic sets out the structure of the three papers, the assessment objectives they test and a timing plan for each.',
  spec: ['Structure of Components 1, 2 and 3', 'Assessment objectives and weightings', 'Command words', 'Time management'],
  learn: [
    { h: 'The three papers', html: `
<div class="tbl"><table><tr><th>Paper</th><th>Time · marks</th><th>What you answer</th><th>AOs</th></tr>
<tr><td><b>Component 1</b><br>Nature of law and the English legal system (25%)</td><td>1 hr 30 · 50 marks</td><td><b>Section A</b>: two short-answer questions and one scenario question on law making. <b>Section B</b>: one question from two, each with parts (a) and (b), on the legal system.</td><td>AO1 10% · AO2 7.5% · AO3 7.5%</td></tr>
<tr><td><b>Component 2</b><br>Substantive law in practice (37.5%)</td><td>2 hrs 15 · 75 marks</td><td>One <b>scenario</b> question from each of your three areas (25 marks each)</td><td>AO1 15% · AO2 22.5%</td></tr>
<tr><td><b>Component 3</b><br>Perspectives of substantive law (37.5%)</td><td>2 hrs 15 · 75 marks</td><td>One <b>essay</b> question from each of your three areas (25 marks each)</td><td>AO1 15% · AO3 22.5%</td></tr></table></div>
<p>Your three areas must be <b>two private + one public</b> or <b>one private + two public</b> (contract and tort are private; criminal and human rights are public). You can change your areas in Settings.</p>` },
    { h: 'Command words', html: `
<div class="tbl"><table><tr><th>Command</th><th>What it wants</th></tr>
<tr><td><b>Explain / Describe / Outline</b></td><td>AO1 — accurate knowledge with examples and authority; no evaluation needed</td></tr>
<tr><td><b>Apply / Advise / Consider liability</b></td><td>AO2 — use the rules on the facts; conclude for each party</td></tr>
<tr><td><b>Analyse and evaluate</b></td><td>AO3 — break the law down, weigh strengths and weaknesses, consider reform, conclude</td></tr>
<tr><td><b>Discuss / Assess the extent to which</b></td><td>AO3 — a balanced argument leading to a judgment on how far a statement is true</td></tr></table></div>` },
    { h: 'Timing plan', html: `
<ul><li><b>Component 1</b> (90 min, 50 marks ≈ 1.8 min per mark): Section A about 45 minutes, Section B about 45 minutes. Short-answer questions should be short.</li>
<li><b>Component 2 and 3</b> (135 min, 75 marks): about <b>45 minutes per question</b> — 5 minutes planning, 38 writing, 2 checking.</li>
<li>Plan every 15+ mark answer: list the issues (Component 2) or your argument and conclusion (Component 3) before you write.</li>
<li>If you run out of time, bullet the remaining issues with authority — you may earn some credit.</li></ul>` }
  ],
  debate: [],
  cases: [],
  worked: [],
  pitfalls: ['Answering more than one area in the same section.', 'Spending an hour on the first question.', 'Treating “explain” like “evaluate” and running out of time.'],
  cards: [
    ['Component 1 length and marks?', '1 hour 30 minutes; 50 marks; 25%.'],
    ['Component 2 length and marks?', '2 hours 15 minutes; 75 marks; 37.5% — three scenarios.'],
    ['Component 3 length and marks?', '2 hours 15 minutes; 75 marks; 37.5% — three essays.'],
    ['Valid combinations of areas?', 'Two private + one public, or one private + two public.'],
    ['AO weightings overall?', 'AO1 40%, AO2 30%, AO3 30%.'],
    ['Time per question in Components 2 and 3?', 'About 45 minutes.']
  ],
  quiz: [
    { q: 'Component 3 consists of…', o: ['three essay questions, one from each area', 'three scenario questions', 'short-answer questions only', 'a coursework essay'], x: 'Perspectives of substantive law.' },
    { q: 'Which combination of areas is NOT allowed?', o: ['Contract, tort and one other private area — i.e. three private areas', 'Contract, tort and criminal', 'Tort, criminal and human rights', 'Contract, criminal and human rights'], x: 'Only two private areas exist, so you must take at least one public.' },
    { q: 'What is the overall weighting of AO1?', o: ['40%', '30%', '25%', '50%'], x: 'AO2 and AO3 are 30% each.' },
    { q: '“Advise” is a command word testing mainly…', o: ['AO2', 'AO3', 'AO1 only', 'none'], x: 'Application.' }
  ],
  exam: [],
  tools: ['aosort']
});

/* ---------- skills tools ---------- */
TOOLS.iracsteps = { type: 'steps', title: 'Problem question method', intro: 'Work through each issue in a scenario like this.', steps: [
  { h: '1 · Read and annotate', html: '<p>Read the scenario twice. Underline every fact that could raise a legal issue — dates, words used, injuries, states of mind, relationships. Note each party.</p>' },
  { h: '2 · Identify the issues', html: '<p>List the issues in order (e.g. offer? acceptance? term? breach? remedy?). For criminal law, list each defendant, each victim and the possible offences.</p>' },
  { h: '3 · Define the law', html: '<p>State the rule precisely: statute section or leading case. One or two sentences — this is AO1.</p>' },
  { h: '4 · Apply to the facts', html: '<p>Use the parties’ names and the facts. Compare with the case: similar or distinguishable? Where facts are unclear, argue both ways. This is AO2 — where most marks are.</p>' },
  { h: '5 · Mini-conclusion', html: '<p>Finish each issue: “Therefore Alia has accepted the offer.”</p>' },
  { h: '6 · Overall conclusion', html: '<p>Advise each party: liability, defences, and remedies or likely outcome.</p>' }
] };
TOOLS.essaysteps = { type: 'steps', title: 'Evaluative essay method', intro: 'A reliable plan for a 25-mark Component 3 essay.', steps: [
  { h: '1 · Decode the question', html: '<p>Underline the command words and the precise topic. What judgment is it asking for?</p>' },
  { h: '2 · Decide your line', html: '<p>Before writing, decide your conclusion. The whole essay should build towards it.</p>' },
  { h: '3 · Introduction', html: '<p>Define key terms and state your line of argument in 2–3 sentences.</p>' },
  { h: '4 · PEEL paragraphs', html: '<p>4–6 paragraphs: Point, Evidence (case, statute, report), Evaluate (counter-argument, how far?), Link back to the question.</p>' },
  { h: '5 · Reform', html: '<p>Law Commission proposals, recent statutes, alternatives from other jurisdictions — are they better?</p>' },
  { h: '6 · Conclusion', html: '<p>Answer the question, weighing the arguments. No new material.</p>' }
] };
TOOLS.aosort = { type: 'sort', title: 'Which assessment objective?', intro: 'Sort each piece of writing by the assessment objective it mainly shows.', cats: ['AO1 knowledge', 'AO2 application', 'AO3 evaluation'], items: [
  ['“Under s1 Theft Act 1968, theft is the dishonest appropriation of property belonging to another with intention to permanently deprive.”', 'AO1 knowledge', 'Stating the law.'],
  ['“Because Jamal took the phone from Kate’s bag, he appropriated property belonging to another.”', 'AO2 application', 'Applying to facts.'],
  ['“The Ivey test is fairer than Ghosh because it no longer excuses defendants with warped moral standards.”', 'AO3 evaluation', 'A judgment with a reason.'],
  ['“In Donoghue v Stevenson, Lord Atkin set out the neighbour principle.”', 'AO1 knowledge', 'Knowledge of authority.'],
  ['“As Pria’s email arrived during office hours, following Brinkibon, acceptance took effect when it was received.”', 'AO2 application', 'Applying case law to facts.'],
  ['“The Law Commission argued that the 1861 Act is outdated and inconsistent, and proposed a new statute.”', 'AO3 evaluation', 'Reform as evaluation.']
] };
