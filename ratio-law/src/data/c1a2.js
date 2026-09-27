/* ==========================================================
   COMPONENT 1 · SECTION A (continued): 1.1.2 – 1.1.4
   ========================================================== */
addCases([
  { id: 'rvr', n: 'R v R', y: 1991, a: 'CR', t: '1.1.4', c: 'HL', f: 'A husband was charged with raping his wife. Since Hale (1736) the common law had said a wife gave irrevocable consent to intercourse on marriage.', p: 'The marital rape exemption was an “anachronistic and offensive” fiction; a husband can be guilty of raping his wife. A clear example of judicial law-making, later put into statute.' },
  { id: 'vangend', n: 'Van Gend en Loos v Nederlandse Administratie der Belastingen', y: 1963, a: '1A', t: '1.1.1d', c: 'CJEU', f: 'A Dutch importer was charged increased customs duty on chemicals, contrary to a treaty article banning new customs duties.', p: 'Treaty articles that are clear, precise and unconditional have direct effect: individuals can rely on them in their national courts. The EU is “a new legal order”.' },
  { id: 'marshall', n: 'Marshall v Southampton and South West Hampshire AHA', y: 1986, a: '1A', t: '1.1.1d', c: 'CJEU', f: 'A dietitian was forced to retire at 62 when men could work until 65, contrary to the Equal Treatment Directive. Her employer was a health authority.', p: 'Directives have vertical direct effect: they can be enforced against the state and its bodies, but not horizontally against private individuals.' },
  { id: 'marleasing', n: 'Marleasing SA v La Comercial Internacional de Alimentación', y: 1990, a: '1A', t: '1.1.1d', c: 'CJEU', f: 'Spain had not implemented a company law directive; a private dispute depended on Spanish law that conflicted with it.', p: 'Indirect effect: national courts must interpret national law, as far as possible, in the light of the wording and purpose of a directive.' },
  { id: 'francovich', n: 'Francovich v Italy', y: 1991, a: '1A', t: '1.1.1d', c: 'CJEU', f: 'Italy failed to implement a directive guaranteeing employees’ wages when an employer went insolvent. Workers were left unpaid.', p: 'State liability: an individual can claim damages from a member state that fails to implement a directive, if the directive confers rights, they are identifiable, and there is a causal link.' },
  { id: 'costa', n: 'Costa v ENEL', y: 1964, a: '1A', t: '1.1.1d', c: 'CJEU', f: 'An Italian shareholder of a nationalised electricity company refused to pay his bill, arguing nationalisation breached the EEC Treaty.', p: 'EU law has supremacy over conflicting national law, including later national law. Member states have limited their sovereign rights.' },
  { id: 'hsc2020', n: 'R (Hussain) v Secretary of State for Health and Social Care', y: 2020, a: '1A', t: '1.1.2', c: 'HC', f: 'A mosque challenged the COVID-19 regulations closing places of worship (made by the Health Secretary under the Public Health (Control of Disease) Act 1984).', p: 'Permission for judicial review was refused, but the case shows emergency delegated legislation can be challenged as ultra vires or incompatible with Convention rights (here Art 9).' },
  { id: 'addie', n: 'Addie & Sons v Dumbreck', y: 1929, a: 'TO', t: '1.1.4', c: 'HL', f: 'A child trespasser was killed by machinery on a colliery.', p: 'An occupier owed no duty to a trespasser except not to injure them deliberately or recklessly. Overruled by BRB v Herrington (1972).' },
  { id: 'andertonryan', n: 'Anderton v Ryan', y: 1985, a: 'CR', t: '2.3.7', c: 'HL', f: 'The defendant bought a video recorder believing it was stolen; there was no evidence it was.', p: 'Held not guilty of attempting to handle stolen goods. Overruled only a year later by R v Shivpuri using the Practice Statement.' }
]);

/* ---------- 1.1.2 Delegated legislation ---------- */
TOPICS.push({
  id: '1.1.2', unit: '1A', ref: '1.1.2', title: 'Delegated legislation',
  short: 'Statutory instruments, by-laws, Orders in Council, controls, devolved legislatures',
  summary: 'Delegated (secondary) legislation is law made by a person or body other than Parliament, using power granted by Parliament in an enabling (parent) Act. It makes up most new law each year. You must know the types, why Parliament delegates, how Parliament and the courts control it, its advantages and disadvantages — and the law-making role of the devolved legislatures in Wales, Scotland and Northern Ireland.',
  spec: ['The meaning of delegated legislation and the role of the enabling Act', 'Types: statutory instruments, by-laws, Orders in Council', 'Parliamentary controls: enabling Act, affirmative and negative resolution, scrutiny committees, consultation', 'Judicial controls: judicial review, procedural and substantive ultra vires, unreasonableness', 'Reasons for use; advantages and disadvantages; rule of law concerns', 'The role of the devolved legislatures'],
  learn: [
    { h: 'What delegated legislation is', html: `
<div class="box def"><b class="lbl">Definition</b><p><b>Delegated legislation</b> is law made by a body other than Parliament, with Parliament’s authority. The authority is given in an <b>enabling Act</b> (or parent Act), which sets out the framework and limits of the power.</p></div>
<p>Example: the <b>Public Health (Control of Disease) Act 1984</b> gave the Health Secretary power to make the Health Protection (Coronavirus) Regulations 2020 — the lockdown rules. More than 580 COVID-related statutory instruments were made in 2020–22.</p>` },
    { h: 'Types of delegated legislation', html: `
<div class="tbl"><table><tr><th>Type</th><th>Made by</th><th>Examples</th></tr>
<tr><td><b>Statutory instruments (SIs)</b></td><td>Government ministers and departments. About 2,000–3,500 are made each year.</td><td>National Minimum Wage Regulations (updating the rate each April); commencement orders bringing Acts into force; the Restricted Roads (20 mph Speed Limit) (Wales) Order 2022, made by Welsh Ministers</td></tr>
<tr><td><b>By-laws</b></td><td>Local authorities (Local Government Act 1972 s235) and public corporations; must be approved by a minister</td><td>Parking restrictions, bans on drinking alcohol in parks, railway by-laws against smoking or fare evasion</td></tr>
<tr><td><b>Orders in Council</b></td><td>The government; approved by the Privy Council and signed by the Monarch</td><td>Misuse of Drugs Act 1971 (Modification) Order 2003 reclassified cannabis to Class C (reversed in 2009); emergencies under the Civil Contingencies Act 2004; transferring responsibilities between departments</td></tr></table></div>
<p>Some Acts contain <b>Henry VIII clauses</b>, allowing ministers to amend or repeal Acts of Parliament by delegated legislation — e.g. the European Union (Withdrawal) Act 2018 and the Retained EU Law (Revocation and Reform) Act 2023.</p>` },
    { h: 'Why Parliament delegates', html: `
<ul><li><b>Lack of parliamentary time</b> — Parliament could not pass thousands of detailed rules each year.</li>
<li><b>Expertise</b> — technical detail (building regulations, food standards) is best drafted by specialists in departments who consult experts.</li>
<li><b>Local knowledge</b> — councils know what by-laws their area needs.</li>
<li><b>Speed and flexibility</b> — SIs can be made, updated or revoked quickly (minimum wage rates, emergency COVID rules).</li>
<li><b>Emergencies</b> — Orders in Council when Parliament is not sitting.</li></ul>` },
    { h: 'Parliamentary controls', html: `
<ul><li><b>The enabling Act</b> sets the limits: who can make law, on what, and by what procedure. Parliament can repeal the power.</li>
<li><b>Negative resolution procedure</b> — most SIs. The SI is laid before Parliament and becomes law unless either House passes a motion to annul it within <b>40 days</b>. Rarely used: the Commons last annulled an SI in 1979.</li>
<li><b>Affirmative resolution procedure</b> — used for important SIs. Both Houses (or the Commons only, for financial matters) must vote to approve it. Some emergency SIs (e.g. many COVID rules) came into force first and had to be approved within 28 days.</li>
<li><b>Super-affirmative procedure</b> — extra scrutiny for orders under the Legislative and Regulatory Reform Act 2006.</li>
<li><b>Scrutiny committees</b>: the <b>Joint Committee on Statutory Instruments</b> checks the technical legality of SIs (e.g. exceeding powers, unusual use, defective drafting) but <b>not their merits</b>; the Lords’ <b>Secondary Legislation Scrutiny Committee</b> draws attention to SIs of policy interest; the Lords’ <b>Delegated Powers and Regulatory Reform Committee</b> examines the powers in Bills before they pass.</li>
<li><b>Consultation</b> — many enabling Acts require consultation with interested bodies.</li>
<li><b>Ministerial accountability</b> — questions in Parliament.</li></ul>
<div class="box warn"><b class="lbl">Weakness</b><p>Parliament cannot amend an SI — it can only accept or reject it. Very few are debated, and the Lords rejecting an SI (tax credits, 2015) caused a constitutional row.</p></div>` },
    { h: 'Judicial controls', html: `
<p>Anyone directly affected can apply to the High Court (Administrative Court) for <b>judicial review</b>. The court can declare delegated legislation void if it is <b>ultra vires</b> (“beyond the powers”):</p>
<ul><li><b>Procedural ultra vires</b> — the correct procedure in the enabling Act was not followed: [[c:aylesbury]] (no consultation).</li>
<li><b>Substantive ultra vires</b> — the content goes beyond what the enabling Act allows: [[c:curedeeley]]; [[c:plp]] (legal aid residence test); [[c:unison]] (employment tribunal fees blocked access to justice).</li>
<li><b>Unreasonableness</b> — so unreasonable that no reasonable body could have made it: [[c:strickland]]; [[c:wednesbury]].</li>
<li><b>Incompatibility with Convention rights</b> — unlike Acts, delegated legislation can be quashed if it breaches the Human Rights Act 1998 (unless the parent Act requires it).</li></ul>
<p>Judicial control is limited: someone must bring a claim (and pay for it), within a short time limit (usually three months); the court only checks legality, not whether the policy is wise; and a widely drafted enabling Act leaves little to challenge.</p>` },
    { h: 'Advantages and disadvantages', html: `
<div class="debate"><div class="for"><h5>Advantages</h5><ul><li>Saves parliamentary time for major policy</li><li>Uses expertise and consultation</li><li>Local knowledge (by-laws)</li><li>Quick to make and amend; emergency use</li><li>Controlled by Parliament and courts</li></ul></div><div class="ag"><h5>Disadvantages</h5><ul><li><b>Undemocratic</b> — drafted by unelected civil servants</li><li>Sub-delegation — power passed further down</li><li>Huge volume makes law hard to find (rule of law: law must be accessible)</li><li>Weak scrutiny: most SIs are never debated; Parliament cannot amend</li><li>Henry VIII clauses let ministers change Acts</li></ul></div></div>
<p><b>Rule of law link:</b> Bingham argued that law should be clear and accessible and that ministers must act within their powers. The House of Lords Constitution Committee and the Delegated Powers Committee (<i>Democracy Denied?</i>, 2021) warned about the growth of “skeleton Bills” that leave almost everything to ministers.</p>` },
    { h: 'The devolved legislatures', html: `
<p><b>Devolution</b> transferred law-making power from Westminster to legislatures in Wales, Scotland and Northern Ireland (1998–99). The UK Parliament remains sovereign and can still legislate for them, but by the <b>Sewel convention</b> will not normally do so on devolved matters without consent.</p>
<div class="tbl"><table><tr><th>Legislature</th><th>Basis</th><th>Examples of laws</th></tr>
<tr><td><b>Senedd Cymru</b> (Welsh Parliament)</td><td>Government of Wales Act 2006; Wales Act 2017 (reserved powers model); renamed in 2020. From the 2026 election it has 96 Members (Senedd Cymru (Members and Elections) Act 2024)</td><td>Human Transplantation (Wales) Act 2013 (opt-out organ donation); Children (Abolition of Defence of Reasonable Punishment) (Wales) Act 2020; Public Health (Minimum Price for Alcohol) (Wales) Act 2018</td></tr>
<tr><td><b>Scottish Parliament</b></td><td>Scotland Acts 1998, 2012, 2016</td><td>Alcohol (Minimum Pricing) (Scotland) Act 2012; smoking ban (2006)</td></tr>
<tr><td><b>Northern Ireland Assembly</b></td><td>Northern Ireland Act 1998</td><td>Has been suspended several times (most recently 2022–24)</td></tr></table></div>
<p>Devolved bodies can only legislate within their <b>competence</b>. The Supreme Court decides disputes: [[c:uncrc]] (outside competence); <i>Agricultural Sector (Wales) Bill</i> (2014) (within competence). In [[c:axa]] the Court held devolved Acts can be reviewed only for exceeding competence or on extreme rule of law grounds. In 2023 the UK government used s35 Scotland Act for the first time to block the Gender Recognition Reform (Scotland) Bill.</p>` }
  ],
  debate: [{ q: 'Are the controls over delegated legislation effective?', for: ['The enabling Act sets clear limits and can be repealed.', 'The affirmative procedure forces a vote on important SIs.', 'The JCSI scrutinises every SI technically.', 'Courts quash ultra vires legislation: UNISON, Public Law Project.'], ag: ['Most SIs use the negative procedure and are never debated.', 'Parliament cannot amend SIs; rejection is extremely rare.', 'The JCSI cannot consider merits; its reports can be ignored.', 'Judicial review depends on someone challenging, costs money and is limited by wide enabling Acts.', 'Henry VIII clauses and skeleton Bills bypass Parliament.'] }],
  cases: ['aylesbury', 'curedeeley', 'strickland', 'wednesbury', 'plp', 'unison', 'axa', 'uncrc', 'hsc2020'],
  worked: [{ q: '<b>Scenario.</b> The Minister for Transport uses powers under the (fictional) Road Safety Act 2025, which says she may make regulations about e-scooters “after consulting organisations representing users”. She makes regulations without consulting anyone, and bans e-scooters on all roads and in private gardens. Advise the E-Scooter Users’ Association.', s: ['<b class="st">Identify</b>The regulations are delegated legislation (a statutory instrument). The Association could challenge them by judicial review for being ultra vires.', '<b class="st">Procedural</b>The enabling Act requires consultation. Failing to consult is procedural ultra vires — Agricultural Training Board v Aylesbury Mushrooms. The regulations may not apply to the Association’s members.', '<b class="st">Substantive</b>The Act concerns road safety; banning e-scooters in private gardens may go beyond the power given — substantive ultra vires (Customs and Excise v Cure & Deeley; R (Public Law Project) v Lord Chancellor).', '<b class="st">Unreasonable</b>A ban in private places could also be unreasonable, like the by-law in Strickland v Hayes BC; Wednesbury test.', '<b class="st">Conclude</b>The High Court is likely to declare the regulations void, at least in part. The Association must apply promptly (normally within three months).'], a: 'Likely void for procedural and substantive ultra vires (and possibly unreasonableness).' }],
  pitfalls: ['Saying Parliament can amend statutory instruments — it can only approve or reject them.', 'Mixing up the negative and affirmative resolution procedures.', 'Saying the Joint Committee on SIs can reject an SI — it can only report to Parliament.', 'Forgetting that judicial review only checks legality, not merits.', 'Not giving examples of each type of delegated legislation.'],
  cards: [
    ['What is an enabling (parent) Act?', 'An Act of Parliament giving another body the power to make delegated legislation, and setting its limits.'],
    ['Three types of delegated legislation?', 'Statutory instruments, by-laws, Orders in Council.'],
    ['Who makes Orders in Council?', 'The government, approved by the Privy Council and signed by the Monarch.'],
    ['Example of an Order in Council?', 'Misuse of Drugs Act 1971 (Modification) Order 2003 — cannabis reclassified to Class C.'],
    ['Negative resolution procedure?', 'The SI becomes law unless either House annuls it within 40 days.'],
    ['Affirmative resolution procedure?', 'The SI must be approved by a vote of Parliament (usually both Houses).'],
    ['What does the Joint Committee on Statutory Instruments do?', 'Checks the technical legality and drafting of SIs; cannot consider merits; reports to Parliament.'],
    ['Procedural ultra vires — case?', 'Agricultural Training Board v Aylesbury Mushrooms (1972): no consultation.'],
    ['Substantive ultra vires — case?', 'Customs and Excise v Cure & Deeley (1962); R (Public Law Project) v Lord Chancellor (2016).'],
    ['Unreasonableness — cases?', 'Strickland v Hayes BC (1896); Associated Provincial Picture Houses v Wednesbury (1948).'],
    ['R (UNISON) v Lord Chancellor (2017)?', 'Employment tribunal fees order quashed — it blocked access to justice.'],
    ['What is a Henry VIII clause?', 'A power in an Act allowing ministers to amend or repeal primary legislation by delegated legislation.'],
    ['Which Act created the Welsh reserved powers model?', 'Wales Act 2017.'],
    ['Example of a Welsh Act?', 'Human Transplantation (Wales) Act 2013 — deemed consent for organ donation.'],
    ['What is the Sewel convention?', 'Westminster will not normally legislate on devolved matters without the consent of the devolved legislature.']
  ],
  quiz: [
    { q: 'Delegated legislation is made under the authority of…', o: ['an enabling Act', 'the royal prerogative only', 'the European Commission', 'the Supreme Court'], x: 'Also called the parent Act.' },
    { q: 'Which type of delegated legislation is made by local authorities?', o: ['By-laws', 'Orders in Council', 'Statutory instruments', 'Acts of the Senedd'], x: 'Approved by the relevant minister.' },
    { q: 'Under the negative resolution procedure, an SI…', o: ['becomes law unless annulled within 40 days', 'must be approved by both Houses', 'must be debated in committee', 'needs Royal Assent'], x: 'Most SIs use it.' },
    { q: 'Failing to consult as required by the enabling Act is…', o: ['procedural ultra vires', 'substantive ultra vires', 'Wednesbury unreasonableness', 'a declaration of incompatibility'], x: 'Aylesbury Mushrooms.' },
    { q: 'In R (UNISON) v Lord Chancellor (2017) the Supreme Court…', o: ['quashed the employment tribunal fees order', 'upheld the fees as reasonable', 'made a declaration of incompatibility', 'referred the case to the ECtHR'], x: 'Access to justice is part of the rule of law.' },
    { q: 'Which committee checks SIs for technical defects but not their merits?', o: ['Joint Committee on Statutory Instruments', 'Secondary Legislation Scrutiny Committee', 'Public Bill Committee', 'Home Affairs Select Committee'], x: 'It reports to both Houses.' },
    { q: 'A by-law banning obscene songs anywhere, including private places, was held unreasonable in…', o: ['Strickland v Hayes BC', 'Wednesbury', 'Cure & Deeley', 'Pickin v BRB'], x: '1896.' },
    { q: 'Which is a disadvantage of delegated legislation?', o: ['It is made by unelected civil servants', 'It uses expert knowledge', 'It saves parliamentary time', 'It can be made quickly'], x: 'Democratic deficit.' },
    { q: 'A Henry VIII clause allows…', o: ['a minister to amend an Act of Parliament by delegated legislation', 'the Monarch to refuse Royal Assent', 'judges to strike down Acts', 'the Lords to veto a Bill'], x: 'Controversial — seen as bypassing Parliament.' },
    { q: 'The Human Transplantation (Wales) Act 2013 was made by…', o: ['the Welsh legislature (now Senedd Cymru)', 'the UK Parliament', 'the Welsh Secretary by SI', 'a local authority'], x: 'Deemed consent for organ donation.' },
    { q: 'Unlike an Act of Parliament, a statutory instrument that breaches Convention rights can…', o: ['be quashed by the courts', 'only receive a declaration of incompatibility', 'never be challenged', 'only be amended by the Lords'], x: 'Unless the parent Act requires the breach.' }
  ],
  exam: [
    { q: 'Explain two types of delegated legislation. [5]', m: 5, ms: ['definition — made by a body other than Parliament under an enabling Act', 'statutory instruments — by ministers; example', 'by-laws — by local authorities / public corporations; example', 'Orders in Council — Privy Council / Monarch; example', 'accurate detail on procedure or scale'] },
    { q: 'Explain the judicial controls over delegated legislation. [10]', m: 10, ms: ['judicial review in the Administrative Court', 'procedural ultra vires — Aylesbury Mushrooms', 'substantive ultra vires — Cure & Deeley / Public Law Project', 'unreasonableness — Strickland / Wednesbury', 'HRA — can be quashed', 'UNISON — access to justice', 'effect — declared void', 'requirements: standing, time limit'] },
    { q: 'Analyse and evaluate whether the advantages of delegated legislation outweigh its disadvantages. [15]', m: 15, ms: ['saves time; allows Parliament to focus on principle', 'expertise and consultation', 'speed/flexibility; COVID example', 'local knowledge', 'undemocratic — civil servants', 'volume and accessibility — rule of law', 'weak scrutiny; negative procedure; cannot amend', 'Henry VIII clauses / skeleton Bills', 'effectiveness of controls', 'reasoned conclusion'] }
  ],
  tools: ['dlcontrol', 'dltypes']
});

/* ---------- 1.1.3 Statutory interpretation ---------- */
TOPICS.push({
  id: '1.1.3', unit: '1A', ref: '1.1.3', title: 'Statutory interpretation',
  short: 'Literal, golden, mischief and purposive approaches; intrinsic and extrinsic aids; HRA',
  summary: 'Judges must apply Acts to real disputes, but words can be ambiguous, too broad, or fail to foresee new situations. Statutory interpretation is the set of rules, approaches and aids judges use to find Parliament’s meaning. This is a key legal skill: in a Component 1 scenario you apply each rule to the words of a statute and explain the different outcomes.',
  spec: ['Why interpretation is needed', 'The literal rule, golden rule (narrow and wide), mischief rule and purposive approach, with cases', 'Rules of language: ejusdem generis, noscitur a sociis, expressio unius est exclusio alterius', 'Intrinsic aids: long title, short title, preamble, interpretation sections, headings, explanatory notes', 'Extrinsic aids: dictionaries, Hansard (Pepper v Hart), textbooks, treaties, previous cases, Law Commission reports', 'Impact of EU law and the Human Rights Act 1998 (ss3 and 4)'],
  learn: [
    { h: 'Why interpretation is needed', html: `
<ul><li><b>Broad terms</b> — words chosen to cover many situations (e.g. “vehicle”, “type”).</li>
<li><b>Ambiguity</b> — a word with two or more meanings.</li>
<li><b>Drafting errors</b> — mistakes made when the Bill was drafted or amended.</li>
<li><b>New developments</b> — technology or social change Parliament did not foresee ([[c:quintavalle]]: cloning).</li>
<li><b>Changes in the use of language</b> — words change meaning over time.</li></ul>` },
    { h: 'The literal rule', html: `
<div class="box def"><b class="lbl">Rule</b><p>Words are given their plain, ordinary, dictionary meaning, even if this leads to an absurd or harsh result. Lord Esher (1892): “If the words of an Act are clear, you must follow them, even though they lead to a manifest absurdity.”</p></div>
<p>Cases: [[c:whiteley]] (dead man not “entitled to vote”); [[c:berriman]] (oiling is not “relaying or repairing”); [[c:fisherbell]] (display is not an “offer for sale”).</p>
<p><b>For:</b> respects parliamentary sovereignty and the separation of powers; makes law certain and predictable; encourages precise drafting. <b>Against:</b> can lead to absurd or unjust results that defeat Parliament’s obvious purpose; assumes every Act is perfectly drafted; words have more than one ordinary meaning (the Law Commission (1969) called it “a false perfection of language”).</p>` },
    { h: 'The golden rule', html: `
<div class="box def"><b class="lbl">Rule</b><p>Start with the literal meaning, but modify it to avoid an absurd result (Lord Wensleydale, <i>Grey v Pearson</i>, 1857).</p></div>
<ul><li><b>Narrow approach</b> — where a word has more than one meaning, choose the one that avoids absurdity: [[c:adler]] (“in the vicinity of” includes “in”); [[c:rallen]] (“marry” = go through a ceremony).</li>
<li><b>Wide approach</b> — where there is only one meaning but it would be repugnant or against public policy, modify it: [[c:sigsworth]] (a murderer cannot inherit).</li></ul>
<p><b>For:</b> avoids the worst results of the literal rule; still respects the words. <b>Against:</b> no clear test of what counts as “absurd”; limited use; judges decide.</p>` },
    { h: 'The mischief rule', html: `
<div class="box def"><b class="lbl">Rule — Heydon’s Case (1584)</b><ol><li>What was the common law before the Act?</li><li>What was the mischief or defect the common law did not cover?</li><li>What remedy did Parliament decide on?</li><li>What is the true reason for the remedy?</li></ol></div>
<p>The judge interprets the words to suppress the mischief and advance the remedy. Cases: [[c:smithhughes]] (soliciting from a balcony was “in a street”); [[c:rcn]] (nurses carrying out abortions under a doctor’s supervision); [[c:corkery]] (a bicycle is a “carriage”).</p>
<p><b>For:</b> gives effect to Parliament’s intention; avoids absurdity and injustice; the Law Commission prefers it. <b>Against:</b> created when judges made most law; risk of judicial law-making (the dissent in RCN); historic reasons can be hard to find; makes the law less certain.</p>` },
    { h: 'The purposive approach', html: `
<div class="box def"><b class="lbl">Approach</b><p>Judges look for the purpose (intention) of Parliament in passing the Act as a whole, and interpret the words to achieve it — even if this means departing from, or adding to, the literal words.</p></div>
<p>Lord Denning in [[c:magor]] said judges should “fill in the gaps”; Lord Simonds replied that this was “a naked usurpation of the legislative function”. Today the purposive approach is dominant, encouraged by EU law and the HRA. Cases: [[c:quintavalle]] (statutes are “always speaking” — cloned embryos covered); [[c:jonestowerboot]] (“in the course of employment” read widely to protect victims of racial harassment); [[c:pickstone]].</p>
<p><b>For:</b> achieves justice and Parliament’s aims; flexible for new situations; consistent with the approach of EU and European courts. <b>Against:</b> judges may substitute their own views (separation of powers); uncertainty; finding Parliament’s purpose may require extrinsic aids that are hard to access.</p>` },
    { h: 'Rules of language and presumptions', html: `
<div class="tbl"><table><tr><th>Rule</th><th>Meaning</th><th>Case</th></tr>
<tr><td><b>Ejusdem generis</b></td><td>“Of the same kind”: general words following a list of specific words are limited to things of the same kind as the list</td><td>[[c:powellkempton]] — “house, office, room or other place” = indoor places only</td></tr>
<tr><td><b>Noscitur a sociis</b></td><td>“A word is known by the company it keeps”: read words in their context</td><td>[[c:inlandfrere]]; <i>Muir v Keay</i> (1875) — “entertainment” meant refreshment, given the words around it</td></tr>
<tr><td><b>Expressio unius est exclusio alterius</b></td><td>Expressly mentioning one thing excludes others</td><td>[[c:tempest]] — “goods, wares and merchandise” did not include stocks and shares</td></tr></table></div>
<p><b>Presumptions</b> (which can be rebutted by clear words): no change to the common law; mens rea is required for criminal offences (<i>Sweet v Parsley</i>); the Crown is not bound; no retrospective effect.</p>` },
    { h: 'Intrinsic and extrinsic aids', html: `
<p><b>Intrinsic aids</b> are found <i>within</i> the Act: the <b>long title</b> (states the purpose), <b>short title</b>, <b>preamble</b> (in older Acts, the purpose), <b>interpretation (definition) sections</b> (e.g. s4 Theft Act 1968 defines “property”), headings and schedules. <b>Explanatory notes</b> are published with modern Acts and may be used as context (<i>R (Westminster CC) v NASS</i>, 2002).</p>
<p><b>Extrinsic aids</b> are found <i>outside</i> the Act:</p>
<ul><li><b>Dictionaries</b> — especially dictionaries from the time of the Act (<i>Cheeseman v DPP</i>, 1990: “passengers”).</li>
<li><b>Hansard</b> — the official record of parliamentary debates. Once banned (<i>Davis v Johnson</i>, 1979); now allowed under the conditions in [[c:pepper]]: ambiguity, obscurity or absurdity; a statement by a minister or promoter; and the statement must be clear. <i>Wilson v First County Trust</i> (2003) restricted its use further.</li>
<li><b>Law Commission reports</b>, government reports and White Papers — to find the mischief.</li>
<li><b>Textbooks</b>, <b>treaties</b> and <b>previous cases</b> interpreting the same words.</li></ul>` },
    { h: 'EU law and the Human Rights Act 1998', html: `
<p><b>EU law:</b> while the UK was a member, courts used the purposive approach to make UK law fit EU law ([[c:pickstone]]; <i>Litster v Forth Dry Dock</i>, 1989). Since Brexit, courts interpret assimilated law in the same way but are no longer bound by new CJEU case law.</p>
<p><b>Human Rights Act 1998:</b></p>
<ul><li><b>s3</b> — “so far as it is possible to do so”, legislation must be read and given effect in a way compatible with Convention rights. This can require a strained meaning: [[c:ghaidan]]; [[c:rva2]].</li>
<li><b>s4</b> — if a compatible reading is not possible, the higher courts may make a <b>declaration of incompatibility</b>; the Act remains valid, and Parliament decides whether to amend it: [[c:bellinger]].</li>
<li><b>s2</b> — courts must take into account decisions of the European Court of Human Rights.</li></ul>
<p>This makes the purposive approach dominant, but raises separation of powers concerns: are judges rewriting Acts?</p>` }
  ],
  debate: [{ q: 'Which approach to statutory interpretation is best?', for: ['Purposive/mischief: achieves Parliament’s real aims and justice (Smith v Hughes, Quintavalle).', 'Handles new technology and social change.', 'Consistent with HRA s3 and European methods.', 'Recommended by the Law Commission (1969).'], ag: ['Literal: respects sovereignty and separation of powers — unelected judges should not rewrite law.', 'Literal gives certainty; lawyers can advise clients.', 'Purposive gives judges too much discretion (Lord Simonds in Magor).', 'Using Hansard and other aids adds cost and time.'] }],
  cases: ['whiteley', 'berriman', 'fisherbell', 'adler', 'rallen', 'sigsworth', 'heydon', 'smithhughes', 'rcn', 'corkery', 'magor', 'quintavalle', 'jonestowerboot', 'pepper', 'powellkempton', 'inlandfrere', 'tempest', 'ghaidan', 'rva2', 'bellinger', 'pickstone'],
  worked: [
    { q: '<b>Scenario (Component 1 style).</b> The (fictional) Parks Protection Act 2024 s1 says: “It is an offence to ride any bicycle, scooter, skateboard or other vehicle in a public park.” Advise whether each person commits an offence using the rules of statutory interpretation: (a) Amir rides a mobility scooter because he cannot walk; (b) Bella pushes her baby in a pram; (c) Callum flies a toy drone over the park.', s: ['<b class="st">Literal</b>Plain meaning of “vehicle”: a thing used to transport people or goods. Amir’s mobility scooter is a vehicle (and even a “scooter”) — guilty. A pram carries a baby, so arguably a vehicle — Bella guilty. A drone flies and is not ridden — Callum not guilty. Compare Whiteley v Chappell for harsh results.', '<b class="st">Golden</b>Convicting a disabled person for using a mobility aid, or a parent for using a pram, is absurd and arguably repugnant. Under the narrow approach (Adler v George) “vehicle” would be read to exclude them.', '<b class="st">Mischief</b>Heydon’s Case: the mischief was probably danger and damage caused by fast-moving recreational vehicles. Mobility scooters and prams are slow and not the mischief — not guilty (Smith v Hughes approach).', '<b class="st">Language</b>Ejusdem generis (Powell v Kempton Park): “other vehicle” is limited to things of the same kind as bicycles, scooters and skateboards — ridden, recreational, wheeled. Mobility scooters are arguably different in purpose; prams are pushed, not ridden; drones are not “ridden” at all.', '<b class="st">Purposive/HRA</b>Purpose — safety of park users. Section 3 HRA and the Equality Act context would support reading the Act so as not to discriminate against disabled people (Arts 8 and 14). Hansard or explanatory notes could be checked (Pepper v Hart) if ambiguous.', '<b class="st">Conclude</b>Only the literal rule would convict Amir and Bella; the other approaches suggest no offence. Callum is not guilty under any rule because he does not “ride”.'], a: 'Different rules give different answers — show each and conclude which a modern court is likely to use (purposive).' }
  ],
  pitfalls: ['Describing a rule without a case and without applying it to the scenario.', 'Saying the golden rule is used when words are unclear — it is used when the literal meaning leads to absurdity.', 'Confusing the mischief rule (look at the problem before the Act) and the purposive approach (look at the purpose of the whole Act).', 'Saying courts can use Hansard whenever they like — Pepper v Hart conditions apply.', 'Saying s3 HRA lets judges strike down Acts.'],
  cards: [
    ['State the literal rule.', 'Words are given their plain, ordinary meaning even if the result is absurd.'],
    ['Whiteley v Chappell (1868)?', 'Literal rule — impersonating a dead voter was not impersonating a person “entitled to vote”.'],
    ['LNER v Berriman (1946)?', 'Literal rule — oiling points was maintenance, not “relaying or repairing”; widow got nothing.'],
    ['Golden rule narrow approach — case?', 'Adler v George (1964) — “in the vicinity of” read to include “in”; also R v Allen (1872).'],
    ['Golden rule wide approach — case?', 'Re Sigsworth (1935) — a murderer cannot inherit from his victim.'],
    ['The four questions in Heydon’s Case?', 'Common law before the Act; the mischief; the remedy Parliament chose; the reason for the remedy.'],
    ['Smith v Hughes (1960)?', 'Mischief rule — prostitutes soliciting from windows were “in a street”.'],
    ['RCN v DHSS (1981)?', 'Mischief rule — abortions by nurses supervised by a doctor were lawful (3–2).'],
    ['Quintavalle (2003)?', 'Purposive — cloned embryos were covered by the 1990 Act; statutes are “always speaking”.'],
    ['Ejusdem generis?', 'General words after a list are limited to the same kind — Powell v Kempton Park.'],
    ['Noscitur a sociis?', 'A word is known by the company it keeps — Inland Revenue v Frere; Muir v Keay.'],
    ['Expressio unius est exclusio alterius?', 'Expressly naming things excludes others — Tempest v Kilner.'],
    ['Pepper v Hart (1993) conditions?', 'Legislation ambiguous/obscure/absurd; statement by a minister or promoter; statement clear.'],
    ['Section 3 HRA?', 'Legislation must be read compatibly with Convention rights so far as possible (Ghaidan v Godin-Mendoza).'],
    ['Example of intrinsic aids?', 'Long title, short title, preamble, interpretation sections, headings, schedules.'],
    ['Example of extrinsic aids?', 'Dictionaries, Hansard, Law Commission reports, textbooks, treaties, previous cases.']
  ],
  quiz: [
    { q: 'In Fisher v Bell, the court held that displaying a flick knife was not an “offer for sale”. Which rule was used?', o: ['Literal rule', 'Golden rule', 'Mischief rule', 'Purposive approach'], x: 'Technical contract meaning: invitation to treat.' },
    { q: 'Which case is an example of the golden rule’s wide approach?', o: ['Re Sigsworth', 'Adler v George', 'Smith v Hughes', 'Whiteley v Chappell'], x: 'A murderer could not inherit.' },
    { q: 'Heydon’s Case (1584) set out the…', o: ['mischief rule', 'literal rule', 'golden rule', 'ejusdem generis rule'], x: 'Four questions.' },
    { q: 'Which rule of language was used in Powell v Kempton Park?', o: ['Ejusdem generis', 'Noscitur a sociis', 'Expressio unius', 'The golden rule'], x: '“Other place” limited to indoor places.' },
    { q: 'Pepper v Hart allows judges to consult…', o: ['Hansard, when the statute is ambiguous, obscure or leads to absurdity', 'any newspaper report of debates', 'Hansard in every case', 'foreign legislation'], x: 'Clear statement by a minister or promoter.' },
    { q: 'Which approach looks at the purpose of the whole Act and is now dominant?', o: ['Purposive', 'Literal', 'Golden', 'Ejusdem generis'], x: 'Encouraged by EU law and the HRA.' },
    { q: 'In Smith v Hughes, prostitutes on balconies were held to be soliciting “in a street” using…', o: ['the mischief rule', 'the literal rule', 'noscitur a sociis', 'the golden rule narrow approach'], x: 'The mischief was molestation of people in the street.' },
    { q: 'If legislation cannot be read compatibly with Convention rights, a court may…', o: ['issue a declaration of incompatibility under s4 HRA', 'strike it down under s3', 'refer it to the Law Commission', 'ignore it'], x: 'Bellinger v Bellinger.' },
    { q: 'Which is an intrinsic aid?', o: ['The long title of the Act', 'Hansard', 'A dictionary', 'A Law Commission report'], x: 'Intrinsic = inside the Act.' },
    { q: 'Lord Simonds called Lord Denning’s “fill in the gaps” approach “a naked usurpation of the legislative function” in…', o: ['Magor and St Mellons v Newport', 'Pepper v Hart', 'RCN v DHSS', 'Quintavalle'], x: 'A separation of powers criticism.' },
    { q: 'In Ghaidan v Godin-Mendoza the House of Lords…', o: ['read “as his or her wife or husband” to include same-sex partners using s3 HRA', 'made a declaration of incompatibility', 'applied the literal rule', 'refused to consider the HRA'], x: 'Section 3 can require a strained meaning.' },
    { q: 'In LNER v Berriman the literal rule meant the widow…', o: ['received no compensation', 'received full compensation', 'won using the mischief rule', 'won on appeal to the HL'], x: 'Oiling was “maintaining”.' }
  ],
  exam: [
    { q: 'Explain the literal rule of statutory interpretation. [5]', m: 5, ms: ['plain ordinary / dictionary meaning', 'even if absurd — Lord Esher', 'case — Whiteley v Chappell / Berriman / Fisher v Bell', 'explains facts and outcome of the case', 'reason: respects sovereignty / certainty'] },
    { q: '<b>Scenario.</b> Section 1 of the (fictional) Dangerous Animals (Public Places) Act 2025 states: “Any person who allows a dog or other dangerous animal to be in a public place without a lead commits an offence.” Tom’s pet snake escapes into a shopping centre; Una walks her tame goat through a park without a lead; Vic’s dog is off its lead in his own garden. Apply the rules of statutory interpretation to advise Tom, Una and Vic. [15]', m: 15, ms: ['literal rule applied — meaning of “other dangerous animal”, “allows”, “public place”', 'golden rule — absurdity; Adler v George', 'mischief rule — Heydon’s Case; mischief = public safety', 'purposive approach — Quintavalle', 'ejusdem generis — dog + other dangerous animal', 'Tom — snake escaped: does he “allow”? dangerous?', 'Una — goat: tame, not dangerous?', 'Vic — garden is not a public place', 'intrinsic / extrinsic aids suggested', 'reasoned conclusions for each'] },
    { q: 'Analyse and evaluate the impact of the Human Rights Act 1998 on statutory interpretation. [15]', m: 15, ms: ['s3 duty — so far as possible', 'Ghaidan — strained meanings allowed', 'R v A (No 2) — reading in words', 's4 declarations — Bellinger; sovereignty preserved', 's2 — take into account Strasbourg', 'encourages purposive approach', 'separation of powers concerns — judicial law-making', 'protects rights / justice', 'uncertainty', 'conclusion'] }
  ],
  tools: ['siapply', 'sirules']
});

/* ---------- 1.1.4 Judicial precedent ---------- */
TOPICS.push({
  id: '1.1.4', unit: '1A', ref: '1.1.4', title: 'Judicial precedent',
  short: 'Stare decisis, ratio and obiter, the court hierarchy, Practice Statement, Young v Bristol, avoidance',
  summary: 'Judicial precedent means that the decisions of higher courts must be followed by lower courts in later cases with similar facts: stare decisis, “stand by what has been decided”. This topic covers how precedent works (ratio decidendi, obiter dicta, binding and persuasive precedent), the hierarchy of the courts, how the Supreme Court and Court of Appeal can depart from their own decisions, how judges avoid precedents, and whether the system is a good one.',
  spec: ['The doctrine of precedent: stare decisis', 'Ratio decidendi and obiter dicta; binding and persuasive precedent', 'The hierarchy of the courts including the Supreme Court', 'The Practice Statement 1966 and its use', 'The Court of Appeal and the exceptions in Young v Bristol Aeroplane Co', 'Avoidance techniques: overruling, reversing and distinguishing', 'Advantages and disadvantages of precedent'],
  learn: [
    { h: 'How precedent works', html: `
<p>Precedent is based on <b>stare decisis</b> — “stand by what has been decided”. Like cases should be treated alike, so the law is fair and predictable. The common law has been built this way since the 12th century, when judges travelled the country and began following one another’s decisions.</p>
<p>Precedent depends on accurate <b>law reporting</b> (the Law Reports, the Weekly Law Reports, the All England Law Reports, and now online databases and the National Archives’ Find Case Law service).</p>
<div class="tbl"><table><tr><th>Type</th><th>Meaning</th></tr>
<tr><td><b>Original precedent</b></td><td>A point of law never decided before — the judge reasons by analogy: [[c:donoghue|Donoghue v Stevenson]] (1932); <i>Hunter v Canary Wharf</i></td></tr>
<tr><td><b>Binding precedent</b></td><td>A precedent from an earlier case that must be followed, because it was decided by a court higher than (or in some cases the same as) the present court, and the material facts are similar</td></tr>
<tr><td><b>Persuasive precedent</b></td><td>Not binding, but the judge may choose to follow it: decisions of lower courts, <b>obiter dicta</b>, dissenting judgments, Privy Council decisions, decisions of courts in other countries (Commonwealth, USA) — e.g. [[c:howe]] obiter followed in <i>R v Gotts</i> (1992); [[c:holley]]</td></tr></table></div>` },
    { h: 'Ratio decidendi and obiter dicta', html: `
<div class="box def"><b class="lbl">Ratio decidendi</b><p>“The reason for deciding”: the legal principle on which the decision is based, applied to the material facts. It is the part of the judgment that is <b>binding</b> on later courts.</p></div>
<div class="box def"><b class="lbl">Obiter dicta</b><p>“Things said by the way”: other comments on the law — hypothetical situations, wider statements, or points not needed for the decision. They are only <b>persuasive</b>.</p></div>
<p>Examples: in [[c:hedleybyrne]] the statement that a duty of care can exist for negligent misstatements was obiter (the disclaimer defeated the claim), but became law in later cases. In <i>Central London Property Trust v High Trees</i> (1947) Lord Denning’s promissory estoppel principle was obiter. In [[c:howe]] the comment that duress is no defence to attempted murder was obiter, followed in <i>Gotts</i>.</p>
<p>Finding the ratio is not always easy: judgments are long, there may be several judgments giving different reasons (in the Supreme Court there can be five, seven or nine), and judges rarely label the ratio.</p>` },
    { h: 'The hierarchy of the courts', html: `
<div class="tbl"><table><tr><th>Court</th><th>Bound by</th><th>Binds</th></tr>
<tr><td><b>European Court of Human Rights</b></td><td>—</td><td>No UK court. Under s2 HRA courts must “take into account” its decisions</td></tr>
<tr><td><b>Supreme Court</b> (House of Lords until 2009)</td><td>Its own past decisions — but can depart under the Practice Statement</td><td>All lower courts</td></tr>
<tr><td><b>Court of Appeal</b> (Civil and Criminal Divisions)</td><td>Supreme Court; its own past decisions (with Young exceptions)</td><td>All lower courts; itself</td></tr>
<tr><td><b>Divisional Courts</b> of the High Court</td><td>Supreme Court, Court of Appeal, usually itself</td><td>High Court and lower courts</td></tr>
<tr><td><b>High Court</b></td><td>All the courts above</td><td>County Court and magistrates’ courts; not binding on other High Court judges</td></tr>
<tr><td><b>Crown Court, County Court, magistrates’ courts</b></td><td>All the courts above</td><td>Do not create binding precedent</td></tr></table></div>
<p>The <b>Privy Council</b> hears appeals from some Commonwealth countries and overseas territories. Its judges are mostly Supreme Court Justices, so its decisions are highly persuasive — and it may direct that a decision represents English law ([[c:willers]]). The Court of Appeal has followed the Privy Council instead of the House of Lords ([[c:holley]] → [[c:jameskarimi]]).</p>
<p>Try the <b>Explore</b> tab to test any pair of courts.</p>` },
    { h: 'The Supreme Court and the Practice Statement', html: `
<p>From [[c:londonstreet]] (1898) the House of Lords held it was bound by its own decisions. The <b>Practice Statement 1966</b> ([[c:ps1966]]) announced it would “depart from a previous decision when it appears right to do so”, bearing in mind the danger of disturbing contracts, property and financial arrangements, and the need for certainty in the criminal law. The Supreme Court has adopted the same approach (<i>Austin v Southwark LBC</i>, 2010).</p>
<p>It was used sparingly at first: [[c:conway]] (1968, a technical point); [[c:herrington]] (1972, overruling [[c:addie]]). Criminal law: [[c:shivpuri]] (1986) overruled [[c:andertonryan]] only a year after it was decided; [[c:rvg]] (2003) overruled <i>MPC v Caldwell</i> on recklessness. Other examples: [[c:pepper]] overruled <i>Davis v Johnson</i> on Hansard; <i>Ivey v Genting Casinos</i> (2017) changed the test for dishonesty; [[c:jogee]] (2016) corrected the law on joint enterprise.</p>` },
    { h: 'The Court of Appeal and Young v Bristol Aeroplane', html: `
<p>The Court of Appeal is bound by the Supreme Court — even Lord Denning’s attempts to escape this failed (<i>Broome v Cassell</i>, 1972). It is also generally bound by its own decisions, subject to the three exceptions in [[c:youngbristol]]:</p>
<ol><li>Where there are two <b>conflicting</b> previous Court of Appeal decisions, it may choose which to follow.</li>
<li>Where a previous Court of Appeal decision conflicts with a later <b>Supreme Court</b> (House of Lords) decision, it must follow the Supreme Court.</li>
<li>Where the previous decision was made <b>per incuriam</b> — in error, because a relevant statute or binding precedent was not considered.</li></ol>
<p>In [[c:davisjohnson]] Lord Denning tried to add further exceptions, but the House of Lords reaffirmed the rule. The <b>Criminal Division</b> has extra flexibility where the law was misapplied or misunderstood and liberty is at stake ([[c:rtaylor]]; [[c:gould]]).</p>` },
    { h: 'Avoiding precedents', html: `
<div class="tbl"><table><tr><th>Technique</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>Distinguishing</b></td><td>A judge finds the material facts of the present case are sufficiently different, so the earlier precedent does not apply. Any court can do this.</td><td>[[c:balfour]] distinguished in [[c:merritt]] — spouses had separated and the agreement was in writing</td></tr>
<tr><td><b>Overruling</b></td><td>A higher court (or the Supreme Court under the Practice Statement) decides that the legal rule in an <b>earlier, different</b> case is wrong.</td><td>[[c:herrington]] overruled [[c:addie]]; [[c:rvg]] overruled Caldwell</td></tr>
<tr><td><b>Reversing</b></td><td>A higher court on appeal changes the decision of a lower court in the <b>same case</b>.</td><td>The CA decision in <i>R v Kingston</i> (1994) was reversed by the House of Lords</td></tr>
<tr><td><b>Disapproving</b></td><td>A court expresses doubt about an earlier precedent without overruling it.</td><td>—</td></tr></table></div>
<p>Overruling operates <b>retrospectively</b>: the new rule applies to events before the decision, which can be unfair — see [[c:rvr]].</p>` },
    { h: 'Advantages and disadvantages', html: `
<div class="debate"><div class="for"><h5>Advantages</h5><ul><li><b>Certainty</b>: lawyers can advise clients; people can plan their affairs</li><li><b>Consistency and fairness</b>: like cases treated alike</li><li><b>Flexibility</b>: the Practice Statement and distinguishing allow development ([[c:rvr]], [[c:herrington]])</li><li><b>Practical</b>: based on real cases; saves time</li><li>A large body of detailed rules</li></ul></div><div class="ag"><h5>Disadvantages</h5><ul><li><b>Rigidity</b>: lower courts must follow bad decisions; appeals are expensive</li><li>Complexity and volume of case law; ratio hard to find</li><li>Change is slow and depends on a case being appealed</li><li>Distinguishing can be artificial and create fine distinctions</li><li><b>Retrospective</b> effect of changes; judges are unelected (separation of powers)</li></ul></div></div>` }
  ],
  debate: [{ q: 'Should the Court of Appeal have the same freedom as the Supreme Court to depart from its own decisions?', for: ['Most appeals end in the Court of Appeal; few reach the Supreme Court.', 'Would allow errors to be corrected faster and more cheaply (Lord Denning in Davis v Johnson).', 'The Criminal Division already has extra flexibility where liberty is at stake.'], ag: ['The CA sits in many divisions — more inconsistency and uncertainty.', 'The Young exceptions already allow errors to be corrected.', 'The Supreme Court exists to make final changes to the law.', 'Lord Diplock in Davis v Johnson: the CA is bound by its own decisions.'] }],
  cases: ['ps1966', 'londonstreet', 'conway', 'herrington', 'addie', 'shivpuri', 'andertonryan', 'rvg', 'jogee', 'pepper', 'youngbristol', 'davisjohnson', 'rtaylor', 'gould', 'holley', 'jameskarimi', 'willers', 'horncastle', 'balfour', 'merritt', 'hedleybyrne', 'howe', 'rvr'],
  worked: [
    { q: '<b>Scenario.</b> In 2019 the Court of Appeal (Civil Division) decided <i>Case A</i>. In 2023 the Supreme Court decided <i>Case B</i> on a similar point, in a way that conflicts with <i>Case A</i>. Now the Court of Appeal hears <i>Case C</i>, whose facts are similar to both. Advise the Court of Appeal.', s: ['<b class="st">Rule</b>The Court of Appeal is bound by the Supreme Court and generally by its own previous decisions (stare decisis).', '<b class="st">Exception</b>Under the second exception in Young v Bristol Aeroplane, where a previous CA decision conflicts with a later Supreme Court decision, the CA must follow the Supreme Court.', '<b class="st">Apply</b>The CA must follow Case B and not Case A. It could only avoid Case B by distinguishing it on its material facts.', '<b class="st">Also</b>Case A’s obiter remarks, dissenting judgments, and decisions from other jurisdictions are persuasive only.'], a: 'Follow the Supreme Court in Case B (Young exception 2).' }
  ],
  pitfalls: ['Saying the ratio is “what the case was about” — it is the legal principle needed for the decision, on the material facts.', 'Confusing overruling (a different, earlier case) with reversing (the same case on appeal).', 'Saying the Court of Appeal can use the Practice Statement.', 'Saying obiter dicta are never followed — they can be highly persuasive (Howe → Gotts).', 'Forgetting that the High Court does not bind other High Court judges.'],
  cards: [
    ['What does stare decisis mean?', '“Stand by what has been decided” — like cases are decided alike.'],
    ['Ratio decidendi?', 'The legal principle on which the decision is based; binding on lower courts.'],
    ['Obiter dicta?', 'Other things said by the way; persuasive only.'],
    ['Example of obiter becoming law?', 'Hedley Byrne v Heller (1964); R v Howe (1987) → R v Gotts (1992).'],
    ['Five sources of persuasive precedent?', 'Lower courts, obiter dicta, dissenting judgments, the Privy Council, courts in other countries.'],
    ['What did the Practice Statement 1966 allow?', 'The House of Lords (now Supreme Court) to depart from its own previous decisions when it appears right to do so.'],
    ['First use of the Practice Statement?', 'Conway v Rimmer (1968).'],
    ['Practice Statement in criminal law — example?', 'R v Shivpuri (1986) overruled Anderton v Ryan (1985); R v G (2003) overruled Caldwell.'],
    ['Three exceptions in Young v Bristol Aeroplane?', 'Two conflicting CA decisions; CA decision conflicts with later HL/SC decision; per incuriam.'],
    ['Extra exception for the Criminal Division?', 'Where the law was misapplied or misunderstood and liberty is at stake — R v Taylor (1950), R v Gould (1968).'],
    ['Distinguishing?', 'Avoiding a precedent because the material facts are different — Balfour v Balfour and Merritt v Merritt.'],
    ['Overruling vs reversing?', 'Overruling: a higher court says an earlier case’s rule is wrong. Reversing: a higher court changes the decision in the same case on appeal.'],
    ['Holley and James and Karimi?', 'The CA followed a nine-member Privy Council (Holley) instead of the House of Lords (Smith (Morgan)).'],
    ['Section 2 HRA and precedent?', 'UK courts must take into account (not follow) ECtHR decisions — R v Horncastle.']
  ],
  quiz: [
    { q: 'The part of a judgment that binds later courts is the…', o: ['ratio decidendi', 'obiter dicta', 'dissenting judgment', 'headnote'], x: 'The legal principle needed for the decision.' },
    { q: 'Which allows the Supreme Court to depart from its own previous decisions?', o: ['The Practice Statement 1966', 'Young v Bristol Aeroplane', 'The Human Rights Act 1998', 'The Constitutional Reform Act 2005'], x: 'When it appears right to do so.' },
    { q: 'Which is NOT one of the exceptions in Young v Bristol Aeroplane?', o: ['The previous decision is more than 20 years old', 'Two conflicting previous decisions', 'A conflicting later House of Lords decision', 'The previous decision was per incuriam'], x: 'Age of a precedent is irrelevant.' },
    { q: 'Merritt v Merritt avoided Balfour v Balfour by…', o: ['distinguishing', 'overruling', 'reversing', 'the Practice Statement'], x: 'The couple had separated.' },
    { q: 'In R v Shivpuri the House of Lords overruled…', o: ['Anderton v Ryan', 'Caldwell', 'Addie v Dumbreck', 'Davis v Johnson'], x: 'Only a year after it was decided.' },
    { q: 'When a higher court changes the decision of a lower court in the same case on appeal, this is…', o: ['reversing', 'overruling', 'distinguishing', 'disapproving'], x: 'Overruling concerns a different, earlier case.' },
    { q: 'Privy Council decisions are…', o: ['persuasive (but can be directed to represent English law)', 'binding on all English courts', 'binding only on the Supreme Court', 'irrelevant to English law'], x: 'Willers v Joyce (2016).' },
    { q: 'Which statement about obiter dicta is correct?', o: ['They are persuasive and may be followed in later cases', 'They bind all lower courts', 'They are never cited', 'They only exist in criminal cases'], x: 'E.g. Howe → Gotts.' },
    { q: 'The Criminal Division of the Court of Appeal has extra flexibility where…', o: ['the law was misapplied and a person’s liberty is at stake', 'the case is very old', 'the jury disagrees', 'the Attorney General consents'], x: 'R v Taylor; R v Gould.' },
    { q: 'Which case overruled Addie v Dumbreck using the Practice Statement?', o: ['British Railways Board v Herrington', 'Conway v Rimmer', 'Pepper v Hart', 'R v R'], x: 'Duty of common humanity to child trespassers.' },
    { q: 'A disadvantage of precedent is that…', o: ['changes to the law operate retrospectively', 'it creates certainty', 'it treats like cases alike', 'it is based on real cases'], x: 'The other options are advantages.' }
  ],
  exam: [
    { q: 'Explain what is meant by ratio decidendi and obiter dicta. [5]', m: 5, ms: ['ratio — legal principle / reason for the decision on the material facts', 'ratio is binding on lower courts', 'obiter — other things said by the way / hypothetical', 'obiter is persuasive', 'example — Hedley Byrne / Howe and Gotts / High Trees'] },
    { q: 'Explain how the Supreme Court and the Court of Appeal can avoid following their own previous decisions. [10]', m: 10, ms: ['London Street Tramways — HL previously bound', 'Practice Statement 1966 — “when it appears right”', 'examples — Herrington / Shivpuri / R v G / Pepper v Hart', 'cautions — certainty in criminal law, contracts', 'CA bound by own decisions — Young v Bristol', 'three exceptions explained', 'Davis v Johnson', 'Criminal Division — Taylor / Gould', 'distinguishing available to all courts'] },
    { q: 'Analyse and evaluate the advantages and disadvantages of the doctrine of judicial precedent. [15]', m: 15, ms: ['certainty and predictability', 'consistency / fairness', 'flexibility — Practice Statement, distinguishing — R v R', 'practical, detailed rules', 'rigidity — lower courts bound; cost of appeals', 'complexity / volume; finding the ratio', 'slow change — depends on litigation', 'retrospective effect; unelected judges', 'artificial distinctions', 'conclusion'] }
  ],
  tools: ['binding', 'avoidsort']
});
