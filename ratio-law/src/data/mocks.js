/* ==========================================================
   ASSESSMENT GUIDE and MOCK PAPERS
   ========================================================== */
const ASSESS_HTML = rich(`
<div class="eyebrow">Eduqas GCE A level Law · A150QS</div>
<h1 class="display" style="font-size:clamp(32px,5vw,50px);margin-top:6px">How you are assessed</h1>
<p class="lede">Three written exams, all taken at the end of the course. No coursework. Every paper rewards the same three assessment objectives, in different proportions.</p>

<h2>Assessment objectives</h2>
<div class="tbl"><table><tr><th></th><th>AO1 knowledge and understanding</th><th>AO2 application</th><th>AO3 analysis and evaluation</th><th>Total</th></tr>
<tr><td><b>Component 1</b></td><td>10%</td><td>7.5%</td><td>7.5%</td><td>25%</td></tr>
<tr><td><b>Component 2</b></td><td>15%</td><td>22.5%</td><td>—</td><td>37.5%</td></tr>
<tr><td><b>Component 3</b></td><td>15%</td><td>—</td><td>22.5%</td><td>37.5%</td></tr>
<tr><td><b>Overall</b></td><td><b>40%</b></td><td><b>30%</b></td><td><b>30%</b></td><td>100%</td></tr></table></div>
<ul><li><b>AO1</b> — demonstrate knowledge and understanding of the English legal system and legal rules and principles.</li>
<li><b>AO2</b> — apply legal rules and principles to given scenarios in order to present a legal argument using appropriate legal terminology.</li>
<li><b>AO3</b> — analyse and evaluate legal rules, principles, concepts and issues.</li></ul>

<h2>The papers</h2>
<div class="tbl"><table><tr><th>Paper</th><th>Format</th><th>Typical question pattern</th></tr>
<tr><td><b>Component 1</b> · The nature of law and the English legal system<br><span class="small muted">1 hr 30 · 50 marks · 25%</span></td><td><b>Section A</b> (law making and the nature of law): two short-answer questions and one scenario-based question — all compulsory.<br><b>Section B</b> (the English legal system and the nature of law): one question from a choice of two, each with parts (a) and (b).</td><td>Section A: two short explanations (around 5 marks each) and a scenario applying statutory interpretation, precedent or law making (around 15).<br>Section B: (a) an explanation (around 10) and (b) an analyse-and-evaluate essay (around 15).</td></tr>
<tr><td><b>Component 2</b> · Substantive law in practice<br><span class="small muted">2 hrs 15 · 75 marks · 37.5%</span></td><td>One <b>scenario-based</b> question from each of your three areas.</td><td>3 × 25 marks. AO1 + AO2: identify the issues, state the law, apply it and advise.</td></tr>
<tr><td><b>Component 3</b> · Perspectives of substantive law<br><span class="small muted">2 hrs 15 · 75 marks · 37.5%</span></td><td>One <b>essay</b> question from each of the same three areas.</td><td>3 × 25 marks. AO1 + AO3: analyse and evaluate the law, with reform, and conclude.</td></tr></table></div>
<p class="small muted">The mark splits shown are the usual pattern; exact allocations can vary slightly from series to series, so always check the marks printed on the paper.</p>

<h2>Choosing your areas</h2>
<p>You study three of the four substantive areas: <b>two private + one public</b> or <b>one private + two public</b>. Contract and tort are private law; criminal and human rights law are public law. The same three areas are tested in Components 2 and 3. Set yours in <a href="#" data-settings>Settings</a> so the topics, games and mocks match.</p>

<h2>Command words</h2>
<div class="tbl"><table><tr><th>Command</th><th>What the examiner wants</th><th>Main AO</th></tr>
<tr><td>Explain · Describe · Outline</td><td>Accurate, detailed knowledge with examples and authority</td><td>AO1</td></tr>
<tr><td>Apply · Advise · Consider the liability of · Using the rules of…</td><td>Identify the issues in the facts; state the rule; apply it; conclude for each party</td><td>AO2</td></tr>
<tr><td>Analyse and evaluate · Discuss · Assess the extent to which</td><td>Weigh strengths and weaknesses with authority; consider reform; reach a justified judgment</td><td>AO3</td></tr></table></div>

<h2>Answer structures that work</h2>
<div class="grid g2"><div class="card"><div class="eyebrow">Scenario · AO2</div><h3 class="h3">IDEA</h3><p><b>I</b>dentify the issue → <b>D</b>efine the law with authority → <b>E</b>xplain and apply it to the facts → <b>A</b>nswer with a mini-conclusion. End by advising each party.</p><p><a href="#/t/S1/learn">Problem questions →</a></p></div>
<div class="card"><div class="eyebrow">Essay · AO3</div><h3 class="h3">PEEL</h3><p><b>P</b>oint → <b>E</b>vidence (case, statute, report) → <b>E</b>valuate (counter-argument, how far?) → <b>L</b>ink to the question. Cover both sides and reform, then conclude.</p><p><a href="#/t/S2/learn">Evaluative essays →</a></p></div></div>

<h2>Timing</h2>
<ul><li>Component 1: roughly 45 minutes per section; keep short-answer questions short.</li><li>Components 2 and 3: about <b>45 minutes per 25-mark question</b> — 5 planning, 38 writing, 2 checking.</li></ul>

<h2>Synoptic themes</h2>
<p>The nature of law — law and <b>society</b>, <b>morality</b> and <b>justice</b> — runs through every component. Use it for evaluation, e.g. [[c:brown]] (consent and morality), [[c:gillick]] (autonomy), or corrective and distributive justice in tort damages.</p>`);

/* ---------- question banks ---------- */
const C1_BANK = [
  { A: [
    { q: 'Explain what is meant by the <b>rule of law</b>. [5]', m: 5, ms: ['no one is above the law — Dicey', 'no punishment except for breach of law established in the ordinary courts', 'equality before the law', 'rights secured by the ordinary courts', 'example — Entick v Carrington; Miller (2019); s1 CRA 2005'] },
    { q: 'Explain the role of the <b>Law Commission</b> in reforming the law. [5]', m: 5, ms: ['Law Commissions Act 1965; independent; chaired by a senior judge', 'reviews areas of law; consults; publishes reports with draft Bills', 'codification, consolidation and repeal of obsolete law', 'implementation rate — e.g. Fraud Act 2006', 'Law Commission Act 2009 — ministers report to Parliament'] },
    { q: 'Using the rules of statutory interpretation, consider whether Zoe has committed an offence. [15]', m: 15, scen: 'The (fictional) Park Safety Act 2025 s1 states: “It is an offence to ride any bicycle, scooter or other vehicle in a public park.” Zoe rides an electric wheelchair along a park path. Yusuf, aged 6, rides a toy pedal car on the grass.', ms: ['literal rule — “vehicle” in its ordinary meaning; Whiteley v Chappell; may include both', 'golden rule — avoid absurdity; Adler v George; Re Sigsworth', 'mischief rule — Heydon’s Case; safety of park users; Smith v Hughes', 'purposive approach — Pepper v Hart; Hansard; Royal College of Nursing', 'ejusdem generis — “bicycle, scooter” → similar recreational vehicles; Powell v Kempton Park', 'intrinsic and extrinsic aids', 'application to Zoe — wheelchair is a mobility aid; probably not intended; Equality Act context', 'application to Yusuf — doli incapax (under 10) cannot be convicted', 'conclusion'] }
  ], B: [
    [{ q: '(a) Explain the role of <b>lay magistrates</b> in the criminal justice system. [10]', m: 10, ms: ['qualifications and selection — Local Advisory Committees', 'training — Judicial College', 'summary trials, mode of trial, bail, early hearings, youth court', 'sentencing powers — 12 months (Sentencing Act 2020 as amended)', 'assisted by a legal adviser'] },
     { q: '(b) Analyse and evaluate the use of lay people in the criminal justice system. [15]', m: 15, ms: ['advantages — local knowledge, cost, public participation, jury equity (Ponting)', 'disadvantages — case-hardening, prosecution bias, inconsistency', 'jury secrecy; no reasons; Fraill; Mirza', 'media and internet influence', 'diversity of magistracy', 'reform — Leveson review 2025; judge-only trials; Criminal Justice Act 2003 s44 (Twomey)', 'conclusion'] }],
    [{ q: '(a) Explain the different methods of funding available for <b>civil cases</b>. [10]', m: 10, ms: ['civil legal aid — LASPO 2012 Sch 1; means and merits tests', 'exceptional case funding s10', 'conditional fee agreements — CLSA 1990 s58; success fee', 'damages-based agreements', 'insurance; before-the-event and after-the-event', 'pro bono; law centres; Citizens Advice'] },
     { q: '(b) Analyse and evaluate whether there is adequate access to justice in civil cases. [15]', m: 15, ms: ['LASPO cuts — advice deserts', 'litigants in person — effect on courts', 'CFAs — cherry-picking of cases', 'court fees — R (UNISON)', 'online courts and ADR', 'Bach Commission; review of legal aid', 'conclusion'] }]
  ] },
  { A: [
    { q: 'Explain what is meant by <b>parliamentary sovereignty</b>. [5]', m: 5, ms: ['Dicey — Parliament can make or unmake any law', 'no Parliament can bind its successors', 'no body can set aside an Act — Pickin; Jackson', 'limits — EU membership (Factortame), HRA s4, devolution', 'Brexit restored'] },
    { q: 'Explain the <b>parliamentary controls</b> over delegated legislation. [5]', m: 5, ms: ['enabling Act sets limits', 'affirmative and negative resolution procedures', 'Joint Committee on Statutory Instruments', 'Secondary Legislation Scrutiny Committee', 'ministerial questioning; super-affirmative procedure'] },
    { q: 'Using the doctrine of precedent, advise whether the High Court judge must follow the earlier decisions. [15]', m: 15, scen: 'A High Court judge is hearing a negligence claim. A 1998 Court of Appeal decision is directly on point but has been widely criticised. A 2024 Privy Council decision, from a case about the same issue, reached the opposite result and expressly stated it represented English law. There is also an obiter comment in a 2022 Supreme Court case suggesting the 1998 case was wrongly decided.', ms: ['hierarchy — High Court bound by Court of Appeal and Supreme Court', 'stare decisis; ratio v obiter', 'obiter from Supreme Court is persuasive only — Hedley Byrne', 'Privy Council normally persuasive — but Willers v Joyce: may be followed if it states that it represents English law', 'Court of Appeal bound by own decisions — Young v Bristol Aeroplane exceptions', 'distinguishing — Balfour v Balfour/Merritt v Merritt', 'advice to the judge', 'conclusion'] }
  ], B: [
    [{ q: '(a) Explain the process of <b>appeals</b> in criminal cases from the Crown Court. [10]', m: 10, ms: ['defence appeals to Court of Appeal (Criminal Division) — leave', 'Criminal Appeal Act 1995 — conviction unsafe', 'appeals against sentence', 'prosecution — AG’s references; unduly lenient sentences', 'double jeopardy exception — CJA 2003 Part 10', 'Supreme Court — point of law of general public importance', 'Criminal Cases Review Commission'] },
     { q: '(b) Analyse and evaluate the effectiveness of the criminal appeals system. [15]', m: 15, ms: ['safeguards against miscarriages', 'CCRC — Andrew Malkinson; Post Office Horizon cases', 'leave requirement and backlog', 'fresh evidence rules', 'double jeopardy reform — Dobson', 'unduly lenient sentence scheme', 'conclusion'] }],
    [{ q: '(a) Explain the forms of <b>alternative dispute resolution</b>. [10]', m: 10, ms: ['negotiation', 'mediation — facilitative; e.g. family mediation', 'conciliation — ACAS', 'arbitration — Arbitration Act 1996; binding', 'tribunals distinguished', 'Churchill v Merthyr Tydfil — court may order ADR'] },
     { q: '(b) Analyse and evaluate the use of ADR in civil disputes. [15]', m: 15, ms: ['advantages — cost, speed, privacy, relationships', 'disadvantages — imbalance of power, no precedent, no legal aid', 'Halsey v Milton Keynes — compulsion', 'Churchill (2023) and CPR 2024 changes', 'online dispute resolution', 'conclusion'] }]
  ] }
];

const AREA_BANK = {
  CT: {
    scen: [
      { q: 'Advise Harriet on her rights against Iqbal. [25]', m: 25, scen: 'Iqbal placed an advert on a local website: “Vintage Vespa scooter for sale, £3,000, first to pay gets it. Excellent condition, never been in an accident.” Harriet emailed at 9pm on Friday: “I accept, will pay on Monday.” Iqbal did not read the email until Saturday, when he sold the scooter to Jack. On Monday, Harriet learned that the scooter she had seen had in fact been badly damaged in a crash last year. She had already paid £200 to a mechanic to inspect it.', ms: ['offer v invitation to treat — Partridge v Crittenden; Carlill (unilateral)', '“first to pay” — acceptance by performance; promise to pay later not acceptance', 'email acceptance — Brinkibon; Entores; out of office hours', 'revocation by sale — Dickinson v Dodds', 'misrepresentation — false statement of fact; induced the contract', 'types — fraudulent (Derry v Peek), negligent s2(1) MA 1967, innocent', 'remedies — rescission; damages; reliance loss (mechanic)', 'consumer protection — CRA 2015 if a trader', 'conclusion'] },
      { q: 'Advise Kaz whether he can recover his losses from Lumina Ltd. [25]', m: 25, scen: 'Kaz, a wedding photographer, hired a studio from Lumina Ltd for a shoot. Lumina’s standard terms, printed on the back of an invoice sent after the booking, said: “Lumina accepts no liability for any loss or damage however caused.” On the day, the studio’s ceiling light fell because of poor maintenance, breaking Kaz’s £4,000 camera. The shoot was cancelled, and Kaz lost a £15,000 contract with a magazine that he had not mentioned to Lumina.', ms: ['incorporation — signature, notice, course of dealing; Olley v Marlborough Court', 'invoice after contract — too late', 'construction — contra proferentem; negligence clearly covered? Canada Steamship', 'UCTA 1977 s2(2) — reasonableness; business-to-business', 'CRA 2015 if Kaz a consumer — not here', 'breach of implied term of reasonable care and skill', 'damages — Hadley v Baxendale remoteness; camera recoverable', 'magazine contract — Victoria Laundry; not communicated', 'mitigation', 'conclusion'] }
    ],
    ess: [
      { q: 'Analyse and evaluate the rules on offer and acceptance in modern commercial practice. [25]', m: 25, ms: ['offer/invitation to treat distinctions — Boots; Fisher v Bell', 'postal rule — Adams v Lindsell; justifications; Holwell', 'instantaneous communications — Entores; Brinkibon; email uncertainty', 'battle of the forms — Butler; Tekdata', 'unilateral contracts — Carlill', 'certainty v flexibility', 'reform — codification; international practice', 'conclusion'] },
      { q: 'Analyse and evaluate the extent to which the law protects consumers from unfair contract terms. [25]', m: 25, ms: ['common law incorporation and construction', 'UCTA 1977 — business contracts', 'CRA 2015 — s31, s62 fairness test; transparency', 'CMA enforcement', 'freedom of contract v inequality of bargaining power', 'effectiveness — consumer awareness, costs of enforcement', 'conclusion'] }
    ]
  },
  TO: {
    scen: [
      { q: 'Discuss the liability of Mo and of Harbourview Council. [25]', m: 25, scen: 'Harbourview Council runs a seaside car park with a sign reading “Cliff edge — keep behind the fence”. Part of the fence has been broken for months. Mo, who has just passed his driving test, is reversing out of a space while checking his phone. He hits Nell, who falls through the gap in the fence onto the rocks and breaks her back. Nell’s son Ollie, aged 12, arrives ten minutes later and sees his mother being carried into an ambulance. He develops PTSD.', ms: ['Mo — duty (established category; Robinson); breach — objective standard of reasonable driver; Nettleship', 'causation and remoteness — but for; Wagon Mound', 'Council — OLA 1957 s2; Nell a visitor; warnings s2(4)', 'fence broken — reasonable care; contributory negligence?', 'joint liability; contribution', 'Ollie — secondary victim; Alcock; Paul v Wolverhampton (2024)', 'immediate aftermath — McLoughlin; horrific event', 'remedies — damages', 'conclusion'] },
      { q: 'Advise Priya of any claims in tort. [25]', m: 25, scen: 'Priya lives next to a newly opened night-time outdoor go-kart track run by Quickspin Ltd. Floodlights and engine noise continue until 1am every night. One evening, a large tank of fuel stored at the track leaks and seeps into Priya’s garden, killing her plants and damaging her shed. Quickspin says the area is “mixed industrial and residential” and that it has planning permission.', ms: ['private nuisance — unlawful interference; standing (Hunter)', 'reasonableness factors — locality (Sturges v Bridgman), duration, time of day', 'planning permission not a defence — Coventry v Lawrence', 'Rylands v Fletcher — non-natural use; escape; foreseeability (Cambridge Water; Transco)', 'defences — statutory authority; prescription; coming to the nuisance', 'remedies — injunction or damages in lieu (Coventry v Lawrence)', 'conclusion'] }
    ],
    ess: [
      { q: 'Analyse and evaluate the law on liability for psychiatric injury. [25]', m: 25, ms: ['primary v secondary victims — Page v Smith; Alcock', 'Alcock control mechanisms', 'rescuers — White v Chief Constable', 'Paul v Wolverhampton (2024) — medical negligence', 'floodgates v fairness', 'Law Commission 1998 report', 'conclusion'] },
      { q: 'Analyse and evaluate the effectiveness of the law of occupiers’ liability. [25]', m: 25, ms: ['OLA 1957 duties; children and professionals', 'OLA 1984 duty to trespassers', 'Tomlinson — obvious risks; personal responsibility', 'warnings and exclusion — CRA 2015', 'SARAH 2015; Compensation Act 2006', 'balance between occupiers and entrants', 'conclusion'] }
    ]
  },
  CR: {
    scen: [
      { q: 'Discuss the criminal liability of Rhys for the death of Sam. [25]', m: 25, scen: 'Rhys found messages on his partner’s phone from Sam, a work colleague, including one mocking Rhys’s recent redundancy and his late father. Rhys brooded for two days, then drove to Sam’s house and hit him twice with a hammer he took from his car. Sam died in hospital after doctors failed to notice a second skull fracture. Rhys has a diagnosed depressive disorder, and says he “just snapped”.', ms: ['murder — actus reus; causation (Smith, Cheshire, Jordan)', 'mens rea — intention to kill or GBH; Woollin if relevant', 'loss of control — s54 CJA 2009; loss of self-control; delay (Ahluwalia/Dawes)', 'qualifying trigger — s55; things said or done; considered desire for revenge', 'diminished responsibility — s2 Homicide Act; recognised medical condition; substantial impairment (Golds)', 'burden of proof on defence for DR', 'conclusion — likely outcome'] },
      { q: 'Discuss the criminal liability of Tia. [25]', m: 25, scen: 'Tia, who is very drunk, is refused entry to a nightclub. She pushes the door supervisor, Uma, who falls and breaks her wrist. Tia then grabs a bag from a table outside, thinking it is her own, and runs off. When Vic, the bag’s owner, chases her, Tia swings the bag at him, cutting his cheek.', ms: ['s47 ABH / s20 GBH — Uma; Savage; broken wrist', 'intoxication — Majewski; basic intent', 'bag — theft s1; mistake as to ownership; s2(1)(a); intoxicated mistake', 'robbery s8 — force at time of stealing; Hale', 'wounding — Vic; s20 (Eisenhower)', 'self-defence — mistaken belief (Williams (Gladstone)); intoxicated mistake not allowed (O’Grady; s76(5))', 'conclusion'] }
    ],
    ess: [
      { q: 'Analyse and evaluate the law on non-fatal offences against the person. [25]', m: 25, ms: ['OAPA 1861 structure; ss47, 20, 18', 'inconsistencies — s47 mens rea (Savage); “inflict”', 'outdated language', 'psychiatric harm — Ireland; Burstow', 'Law Commission 2015 proposals', 'consent — Brown; Wilson', 'conclusion'] },
      { q: 'Analyse and evaluate whether the defence of insanity is in need of reform. [25]', m: 25, ms: ['M’Naghten rules', 'disease of the mind — Kemp, Sullivan, Hennessy (diabetes)', 'automatism distinctions — Quick', 'medical v legal definitions', 'Criminal Procedure (Insanity) Act 1964/1991 disposals', 'Law Commission discussion paper 2013', 'conclusion'] }
    ]
  },
  HR: {
    scen: [
      { q: 'Advise Wren on her rights. [25]', m: 25, scen: 'Wren joins a climate protest outside a city bank. The police impose a condition that the protest must end by 2pm. At 2.15pm, officers surround the remaining 50 protesters for four hours. Wren is then arrested “for being part of the problem”, taken to the station and held for 30 hours. She is refused a solicitor. Her phone is searched and messages later appear in a newspaper.', ms: ['Arts 10 and 11 — Ziegler; conditions under s14 POA 1986', 'kettling — Austin; Art 5', 'arrest — s24 PACE; reasonable suspicion and necessity; s28', 'detention — 24 hours; ss41–42', 's58 legal advice — Samuel', 'search of phone — Art 8', 'leak to press — misuse of private information; Campbell', 'remedies — false imprisonment; HRA s7; IOPC', 'conclusion'] },
      { q: 'Advise Xander and the Daily Clarion. [25]', m: 25, scen: 'Xander, a famous footballer, has been treated at a private clinic for addiction. A clinic nurse gives the Daily Clarion photographs of him leaving treatment and his medical notes. The Clarion plans to publish them under the headline “Drug cheat Xander”, although he has never failed a drug test. Xander wants to stop publication.', ms: ['Art 8 v Art 10; balancing — Re S', 'misuse of private information — reasonable expectation of privacy; Campbell', 'photographs — Murray; Von Hannover', 'public interest — role model argument; hypocrisy (Campbell)', 'breach of confidence — nurse (Coco)', 'defamation — “drug cheat”; serious harm; truth defence fails', 'interim injunction — s12 HRA; Cream Holdings; PJS', 'conclusion'] }
    ],
    ess: [
      { q: 'Analyse and evaluate the extent to which the Human Rights Act 1998 has been effective in protecting rights in the UK. [25]', m: 25, ms: ['ss2, 3, 4, 6', 's3 — Ghaidan', 's4 — Belmarsh; government responses', 'horizontal effect', 'parliamentary sovereignty preserved', 'criticism — Hirst; deportation', 'Gross Review; Bill of Rights Bill 2022', 'conclusion'] },
      { q: 'Analyse and evaluate whether the law strikes an appropriate balance between freedom of expression and other interests. [25]', m: 25, ms: ['Art 10 and restrictions in 10(2)', 'public order — s5 POA; Hammond; Percy', 'defamation — Defamation Act 2013', 'privacy — Campbell; PJS', 'obscenity — Handyside; OPA 1959', 'contempt — Sunday Times; strict liability', 'conclusion'] }
    ]
  }
};

/* ---------- papers ---------- */
function c1Paper(set) {
  const b = C1_BANK[set];
  return () => [
    { h: 'Section A — Law making and the nature of law', css: 'var(--u1a)', note: 'Answer all questions.', qs: b.A },
    { h: 'Section B — The English legal system and the nature of law', css: 'var(--u1b)', note: 'Answer one question: both parts of Question 4 or both parts of Question 5 (both shown here for practice — choose one).', qs: [...b.B[0], ...b.B[1]] }
  ];
}
function areaPaper(kind, set) {
  return () => S.settings.areas.map((a, i) => ({ h: `${unitOf(a).code.replace(/ · .*/, '')} — ${unitOf(a).name}`, css: unitOf(a).css, note: (i === 0 && S.settings.areas.length > 3 ? 'All four areas are showing — in the real exam you answer only your three. ' : '') + (kind === 'scen' ? 'Scenario question: identify the issues, apply the law, advise.' : 'Essay question: analyse and evaluate.'), qs: [AREA_BANK[a][kind][set]] }));
}
const MOCKS = [
  { id: 'c1a', title: 'Component 1 · Paper A', meta: '1 hr 30 · 50 marks', mins: 90, blurb: 'Rule of law, the Law Commission, statutory interpretation; lay people or civil funding.', instr: 'Answer all of Section A and one question (both parts) from Section B. Plan each 15-mark answer before writing.', build: c1Paper(0) },
  { id: 'c1b', title: 'Component 1 · Paper B', meta: '1 hr 30 · 50 marks', mins: 90, blurb: 'Sovereignty, delegated legislation, precedent; criminal appeals or ADR.', instr: 'Answer all of Section A and one question (both parts) from Section B. Plan each 15-mark answer before writing.', build: c1Paper(1) },
  { id: 'c2a', title: 'Component 2 · Paper A', meta: '2 hrs 15 · 75 marks', mins: 135, blurb: 'Three scenario questions — one from each of your areas.', instr: 'Answer one question from each of your three areas. About 45 minutes each. Identify every issue, state the law with authority, apply it and advise.', build: areaPaper('scen', 0) },
  { id: 'c2b', title: 'Component 2 · Paper B', meta: '2 hrs 15 · 75 marks', mins: 135, blurb: 'A second set of scenarios for your areas.', instr: 'Answer one question from each of your three areas. About 45 minutes each.', build: areaPaper('scen', 1) },
  { id: 'c3a', title: 'Component 3 · Paper A', meta: '2 hrs 15 · 75 marks', mins: 135, blurb: 'Three essays: analyse and evaluate, with reform.', instr: 'Answer one question from each of your three areas. About 45 minutes each. Build an argument, consider reform and reach a conclusion.', build: areaPaper('ess', 0) },
  { id: 'c3b', title: 'Component 3 · Paper B', meta: '2 hrs 15 · 75 marks', mins: 135, blurb: 'A second set of essays for your areas.', instr: 'Answer one question from each of your three areas. About 45 minutes each.', build: areaPaper('ess', 1) }
];
