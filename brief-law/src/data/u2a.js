/* ==========================================================
   UNIT 2 · CRIMINAL LAW AND THE LEGAL SYSTEM — Learning aims A and B
   ========================================================== */
const CRIT = {
  A: [['A.P1 Pass', 'Research and select a statute then explain the influences that impacted on its progress into law.'], ['A.P2 Pass', 'Explain the rules of statutory interpretation using given case studies.'], ['A.M1 Merit', 'Analyse the effect on Parliament’s law making of influences and interpretation.'], ['AB.D1 Distinction', 'Present an evaluation of the law-making processes both inside and outside of Parliament.']],
  B: [['B.P3 Pass', 'Apply the various forms of delegated legislation and their controls in given case studies.'], ['B.P4 Pass', 'Research, select and explain examples of actual regulations, directives and decisions.'], ['B.M2 Merit', 'Analyse the effectiveness of the controls on delegated legislation.'], ['B.M3 Merit', 'Assess the impact of EU laws on the UK and the resolution of any conflicts, using actual recent examples.'], ['AB.D1 Distinction', 'Present an evaluation of the law-making processes both inside and outside of Parliament.']],
  C: [['C.P5 Pass', 'Using given case studies of criminal trials in different courts, explain the roles of both the lay and legal personnel involved.'], ['C.P6 Pass', 'Explain the advice and representation available in given criminal case studies.'], ['C.M4 Merit', 'Compare and contrast the roles of the various personnel involved and the financing of advice and representation in given criminal case studies.'], ['C.D2 Distinction', 'Evaluate the impact of using lay people in the criminal justice trial process as opposed to legal personnel, providing a justified conclusion.']],
  D: [['D.P7 Pass', 'Explain, using given case studies, the elements of the different non-fatal offences.'], ['D.P8 Pass', 'Discuss the aims of sentencing and the types of sentences for specific offences in given case studies.'], ['D.M5 Merit', 'Analyse and apply the current law on specific non-fatal offences to given case studies to determine the charges and possible sentences in these situations.'], ['D.D3 Distinction', 'Evaluate the current law on non-fatal offences against the person and related current sentencing trends.']]
};

addCases([
  { id: 'fulham', n: 'Attorney General v Fulham Corporation', y: 1921, a: '2', t: '2.B1', c: 'Chancery Division', f: 'A council had power under the Baths and Washhouses Acts to provide facilities for people to wash their own clothes. It set up a laundry service where council staff washed clothes for a charge.', p: 'Substantive ultra vires: the council had gone beyond the powers given by the enabling Acts, so the scheme was unlawful.' },
  { id: 'quintavalle', n: 'R (Quintavalle) v Secretary of State for Health', y: 2003, a: '2', t: '2.A4', c: 'HL', f: 'The Human Fertilisation and Embryology Act 1990 regulated embryos “where fertilisation is complete”. Cell nuclear replacement (cloning) creates embryos without fertilisation, a technique unknown in 1990.', p: 'Using the purposive approach, the House of Lords held that cloned embryos were covered: Parliament’s purpose was to regulate all live human embryos created outside the body.' },
  { id: 'dangerousdogs', n: 'Dangerous Dogs Act 1991', y: 1991, a: '2', t: '2.A2', c: 'Statute', f: 'After a series of attacks on children by dogs such as pit bull terriers received heavy media coverage, the government rushed through legislation banning certain breeds.', p: 'Often cited as “knee-jerk” legislation driven by media pressure: passed quickly with little scrutiny, and criticised as poorly drafted. The XL bully was added to the banned list in 2023–24 after further attacks.' },
  { id: 'sentencingcode', n: 'Law Commission and the Sentencing Act 2020', y: 2020, a: '2', t: '2.A2', c: 'Report', f: 'Sentencing law was spread across dozens of Acts, making it confusing and causing errors. The Law Commission drafted a single consolidated Sentencing Code.', p: 'An example of the Law Commission’s influence: Parliament passed the Sentencing Act 2020 using a special fast-track procedure for consolidation bills. By contrast, the Law Commission’s 2015 proposals to replace the Offences Against the Person Act 1861 have not been enacted.' },
  { id: 'emergencyworkers', n: 'Assaults on Emergency Workers (Offences) Act 2018', y: 2018, a: '2', t: '2.A2', c: 'Statute', f: 'A Private Member’s Bill introduced by Chris Bryant MP after campaigns by the Police Federation, the Fire Brigades Union and others about rising assaults on police, paramedics and prison officers.', p: 'Doubled the maximum sentence for common assault on an emergency worker and made it an aggravating factor for other offences. The maximum was raised again to two years in 2022. Shows pressure groups and a backbench MP influencing law.' },
  { id: 'hallsimons', n: 'Arthur JS Hall & Co v Simons', y: 2000, a: '2', t: '2.C1', c: 'HL', f: 'Clients sued their solicitors for negligence in the conduct of litigation. The solicitors argued that advocates were immune from negligence claims.', p: 'The House of Lords abolished the immunity of advocates (barristers and solicitors) from claims in negligence for their conduct of cases in court.' },
  { id: 'bellamy', n: 'Independent Review of Criminal Legal Aid (Bellamy Review)', y: 2021, a: '2', t: '2.C2', c: 'Report', f: 'Sir Christopher Bellamy reviewed criminal legal aid after years of cuts and found the system in “serious difficulty”, with too few criminal solicitors and barristers.', p: 'Recommended at least a 15% increase in fees. Criminal barristers went on strike in 2022 before a fee increase was agreed. Useful for evaluating how advice and representation are financed.' },
  { id: 'dppsmith2006', n: 'DPP v Smith (Michael Ross)', y: 2006, a: '2', t: '2.D2b', c: 'Divisional Court', f: 'The defendant cut off his ex-girlfriend’s ponytail without her consent.', p: 'Cutting a substantial amount of hair can be actual bodily harm: “bodily” includes hair, and “harm” need not be permanent or painful.' },
  { id: 'smithwoking', n: 'Smith v Chief Superintendent, Woking Police Station', y: 1983, a: '2', t: '2.D2a', c: 'Divisional Court', f: 'The defendant looked through the window of a woman’s bedsit at night, terrifying her.', p: 'This was an assault: she feared immediate force even though he was outside, because she did not know what he would do next. “Immediate” can mean “imminent”.' },
  { id: 'venna', n: 'R v Venna', y: 1976, a: '2', t: '2.D2a', c: 'CA', f: 'While resisting arrest, the defendant lashed out with his feet and broke a police officer’s hand.', p: 'The mens rea of battery is intention or recklessness as to applying unlawful force.' },
  { id: 'lawcomoapa', n: 'Law Commission: Reform of Offences Against the Person', y: 2015, a: '2', t: '2.D2c', c: 'Report', f: 'The Law Commission reviewed the Offences Against the Person Act 1861 and found its language outdated and its structure illogical — for example, s47 and s20 carry the same maximum sentence although s20 involves more serious harm.', p: 'Recommended replacing ss18, 20 and 47 with a clear ladder of offences (intentional serious injury, reckless serious injury, intentional or reckless injury, aggravated assault). Not yet enacted — useful for evaluating the current law.' },
  { id: 'thomasjuries', n: 'Cheryl Thomas: Are Juries Fair?', y: 2010, a: '2', t: '2.C3', c: 'Study', f: 'A Ministry of Justice study using real juries and case simulations to test for bias and understanding.', p: 'Found juries were generally fair and efficient and did not discriminate against ethnic minority defendants. But many jurors did not fully understand the judge’s legal directions, and some looked for information online.' }
]);

/* ---------- A1 Legal skills ---------- */
TOPICS.push({
  id: '2.A1', unit: '2', ref: 'A1', title: 'Legal skills for Unit 2',
  short: 'Researching legal information, finding reliable sources, referencing, using authorities and presenting information',
  summary: 'Every Unit 2 criterion asks you to research, select, explain or apply the law. You need to find reliable sources, use them accurately, reference them properly and present information clearly in writing and verbally. These skills also carry into Unit 1.',
  spec: ['Researching legal information', 'Finding appropriate and reliable sources', 'Referencing sources in learners’ work', 'Using, interpreting and applying information from sources and authorities', 'Presenting information verbally and in writing'],
  learn: [
    { h: 'Finding reliable sources', html: `
<ul><li><b>Primary</b>: legislation.gov.uk (Acts and statutory instruments, with the latest amendments); judgments from Find Case Law (National Archives) and BAILII; Hansard for parliamentary debates; the Sentencing Council website for guidelines.</li>
<li><b>Secondary</b>: law textbooks; Law Commission reports; House of Commons Library briefings; reputable news coverage.</li>
<li><b>Check reliability</b>: Who wrote it? Is it up to date (has the law changed)? Is it about English law? Is it balanced or campaigning?</li></ul>` },
    { h: 'Referencing and using authorities', html: `
<ul><li>Reference every source: case names in italics with year and citation; statutes with section numbers; websites with author, title, URL and date accessed. Include a bibliography.</li>
<li>Do not copy large sections of text — Pearson warns against this. Explain in your own words and <b>apply</b> the authority to the case study.</li>
<li>Use authorities to support each point: “Under s47 OAPA 1861, as interpreted in <i>R v Miller</i> (1954), …”.</li></ul>` },
    { h: 'Presenting information', html: `<p>Unit 2 evidence can be written (a report, a magazine article), video, or a presentation supported by slides, notes and observation records. Use headings, a clear structure, plain English for a lay audience (e.g. a magazine article), and a conclusion. For Distinction criteria, reach a <b>justified conclusion</b>.</p>` }
  ],
  debate: [],
  cases: ['pepper'],
  worked: [],
  pitfalls: ['Copying from websites instead of explaining.', 'Using US or Scottish law sources by mistake.', 'Missing references.'],
  cards: [
    ['Where can you find up-to-date legislation?', 'legislation.gov.uk.'],
    ['Where are parliamentary debates recorded?', 'Hansard.'],
    ['Three tests of a reliable source?', 'Author/authority, up to date, relevant jurisdiction, balance.'],
    ['What forms can Unit 2 evidence take?', 'Written reports or articles, video, or presentations with slides and notes.']
  ],
  quiz: [{ q: 'Which is the most reliable source for the current wording of an Act?', o: ['legislation.gov.uk', 'A forum post', 'A 2005 textbook', 'A US law website'], x: '' }],
  exam: [],
  tools: ['sourcesort']
});

/* ---------- A2 Influences on Parliament ---------- */
TOPICS.push({
  id: '2.A2', unit: '2', ref: 'A2', title: 'Influences on Parliament',
  short: 'Pressure groups, the Law Commission and the media',
  summary: 'New laws do not appear from nowhere. Pressure groups, the Law Commission and the media all push Parliament to act. For criterion A.P1 you research a statute and explain the influences on its progress into law; for A.M1 you analyse their effect.',
  spec: ['Pressure groups', 'Law Commission', 'Media', 'Research and select a statute and explain the influences on its progress into law'],
  learn: [
    { h: 'Pressure groups', html: `
<ul><li>Organised groups that try to influence law and policy. <b>Insider groups</b> are consulted by government (e.g. the Law Society, the Police Federation, the RSPCA); <b>outsider groups</b> use protest and publicity.</li>
<li>Methods: lobbying MPs and ministers, petitions (100,000 signatures can lead to a debate), media campaigns, research, demonstrations, legal challenges.</li>
<li>Examples: the Snowdrop Campaign (handgun ban, Firearms (Amendment) Acts 1997); Gina Martin’s campaign (Voyeurism (Offences) Act 2019); the Police Federation and unions ([[c:emergencyworkers]]); the RSPCA and Finn’s Law (2019).</li>
<li><b>Evaluation</b>: democratic participation and expertise v unequal influence (well-funded groups) and single-issue pressure.</li></ul>` },
    { h: 'The Law Commission', html: `
<ul><li>An independent body set up by the <b>Law Commissions Act 1965</b> to keep the law under review and recommend reform. It has a chair (a senior judge) and four commissioners.</li>
<li>Process: research → consultation paper → final report with a <b>draft Bill</b>.</li>
<li>Work: reform (e.g. the Fraud Act 2006), <b>consolidation</b> (the Sentencing Act 2020 — [[c:sentencingcode]]), <b>codification</b> and <b>repeal</b> of obsolete laws.</li>
<li>The Law Commission Act 2009 requires ministers to report annually on progress. Many reports are implemented, but some are not — its 2015 report on offences against the person has not been enacted ([[c:lawcomoapa]]).</li></ul>` },
    { h: 'The media', html: `
<ul><li>Newspapers, television and social media raise issues, shape public opinion and put pressure on politicians.</li>
<li>Examples: the News of the World’s campaign for “Sarah’s Law”; media coverage of dog attacks and the [[c:dangerousdogs]]; the ITV drama Mr Bates vs The Post Office, which led to the Post Office (Horizon System) Offences Act 2024.</li>
<li><b>Evaluation</b>: highlights injustice and speeds up change v sensationalism, moral panics and poorly thought-out “knee-jerk” laws.</li></ul>` }
  ],
  debate: [{ q: 'Do these influences improve the law?', for: ['Law Commission reforms are expert, researched and consulted on.', 'Pressure groups and media expose real gaps (upskirting, emergency workers).', 'Democratic participation.'], ag: ['Media-driven laws can be rushed and flawed (Dangerous Dogs Act).', 'Law Commission reports are often not implemented.', 'Powerful groups have more influence than others.'] }],
  cases: ['emergencyworkers', 'sentencingcode', 'dangerousdogs', 'lawcomoapa'],
  worked: [],
  pitfalls: ['Describing influences without linking them to a specific statute (needed for A.P1).', 'No evaluation for the Merit and Distinction criteria.'],
  cards: [
    ['Which Act created the Law Commission?', 'Law Commissions Act 1965.'],
    ['Four types of Law Commission work?', 'Reform, consolidation, codification, repeal.'],
    ['Insider v outsider groups?', 'Insider groups are consulted by government; outsider groups use protest and publicity.'],
    ['Example of media-driven legislation?', 'Dangerous Dogs Act 1991.'],
    ['Example of Law Commission consolidation?', 'Sentencing Act 2020 (the Sentencing Code).'],
    ['Example of pressure group influence?', 'Snowdrop Campaign; Gina Martin; Assaults on Emergency Workers Act 2018.']
  ],
  quiz: [
    { q: 'The Law Commission is…', o: ['an independent body that recommends law reform', 'a committee of MPs', 'a court', 'a pressure group'], x: '' },
    { q: 'The Dangerous Dogs Act 1991 is often criticised as…', o: ['knee-jerk legislation', 'a consolidation Act', 'a Law Commission code', 'delegated legislation'], x: '' },
    { q: 'Which influenced the Voyeurism (Offences) Act 2019?', o: ['An individual’s campaign and pressure', 'The European Court', 'A by-law', 'The Privy Council'], x: 'Gina Martin.' }
  ],
  exam: [{ q: 'Assignment practice (A.P1, A.M1): research a statute passed since 2015 and explain the influences on its progress into law. Analyse the effect of those influences. [12]', m: 12, ms: ['statute identified with accurate reference', 'origins — event, campaign, report', 'pressure groups involved and methods', 'Law Commission involvement (or not)', 'media role', 'analysis of which influence mattered most', 'evaluation of the process (Distinction)'], bands: CRIT.A }],
  tools: ['influencesort']
});

/* ---------- A3 Law making in Parliament ---------- */
TOPICS.push({
  id: '2.A3', unit: '2', ref: 'A3', title: 'Law making in Parliament',
  short: 'Separation of powers and parliamentary sovereignty; Green and White Papers; types of bills; legislative stages; Royal Assent and commencement',
  summary: 'Acts of Parliament are the highest form of law in the UK. This topic explains the constitutional principles behind Parliament’s law making — the separation of powers and parliamentary sovereignty — and the process by which a Bill becomes an Act.',
  spec: ['Separation of powers and parliamentary sovereignty', 'Pre-legislative stages: Green and White Papers', 'Types of bills: public, private members’, private, hybrid', 'Legislative stages in the House of Commons: first reading, second reading, committee stage, report stage', 'House of Lords', 'Royal Assent', 'Commencement of an Act'],
  learn: [
    { h: 'Constitutional principles', html: `
<ul><li><b>Separation of powers</b> (Montesquieu): power should be divided between the <b>legislature</b> (Parliament — makes law), the <b>executive</b> (government — puts law into effect) and the <b>judiciary</b> (courts — interpret and apply law). In the UK the separation is partial: ministers sit in Parliament. The Constitutional Reform Act 2005 strengthened judicial independence and created the Supreme Court. The courts check the executive ([[c:miller2019]]).</li>
<li><b>Parliamentary sovereignty</b> (Dicey): Parliament can make or unmake any law; no Parliament can bind its successors; no court can set aside an Act ([[c:jackson]]). Limits in practice: EU membership until 2020, the Human Rights Act (declarations of incompatibility), devolution, and political reality. [[c:miller2017]] confirmed Parliament, not ministers, had to authorise leaving the EU.</li></ul>` },
    { h: 'Before a Bill', html: `
<ul><li><b>Green Paper</b> — a consultation document setting out ideas for discussion.</li><li><b>White Paper</b> — firm proposals for legislation.</li><li>Draft Bills may receive pre-legislative scrutiny by a committee.</li></ul>
<div class="tbl"><table><tr><th>Type of Bill</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>Public Bill</b></td><td>Government Bill affecting the whole country</td><td>Domestic Abuse Act 2021</td></tr>
<tr><td><b>Private Member’s Bill</b></td><td>Introduced by a backbench MP or peer (ballot, ten minute rule, presentation); few become law without government support</td><td>Abortion Act 1967; Assaults on Emergency Workers (Offences) Act 2018</td></tr>
<tr><td><b>Private Bill</b></td><td>Affects a particular organisation, place or person</td><td>Bills for local authorities or universities</td></tr>
<tr><td><b>Hybrid Bill</b></td><td>A public Bill that affects particular private interests differently</td><td>High Speed Rail (London–West Midlands) Act 2017</td></tr></table></div>` },
    { h: 'The legislative stages', html: `
<ol><li><b>First Reading</b> — formal introduction; no debate.</li><li><b>Second Reading</b> — main debate on the principles; vote.</li><li><b>Committee Stage</b> — detailed, clause-by-clause scrutiny by a Public Bill Committee; amendments.</li><li><b>Report Stage</b> — the whole House considers amendments.</li><li><b>Third Reading</b> — final debate and vote.</li><li><b>House of Lords</b> — the same stages; the Lords revise and suggest amendments; “ping-pong” between the Houses. Under the Parliament Acts 1911 and 1949 the Lords can only delay most Bills for about a year (money Bills for one month).</li><li><b>Royal Assent</b> — the monarch’s formal agreement; the Bill becomes an Act.</li><li><b>Commencement</b> — the Act comes into force on Royal Assent, on a date in the Act, or by a commencement order made by a minister (so parts may start at different times).</li></ol>
<p>Try the step-through in Explore.</p>` }
  ],
  debate: [{ q: 'Is Parliament’s law-making process effective?', for: ['Democratic legitimacy — elected MPs.', 'Detailed scrutiny at committee stage and in the Lords.', 'Can make wide-ranging reform in one go.'], ag: ['Slow — often takes a year or more.', 'Government majority dominates; limited time for Private Members’ Bills.', 'Rushed laws can be poorly drafted.', 'The Lords is unelected.'] }],
  cases: ['jackson', 'miller2017', 'miller2019', 'emergencyworkers'],
  worked: [],
  pitfalls: ['Getting the order of stages wrong.', 'Saying the Lords can block legislation permanently.', 'Confusing private Bills with Private Members’ Bills.'],
  cards: [
    ['Three branches in the separation of powers?', 'Legislature, executive, judiciary.'],
    ['What is parliamentary sovereignty?', 'Parliament can make or unmake any law; no Parliament can bind its successors; courts cannot set aside Acts.'],
    ['Green Paper v White Paper?', 'Consultation v firm proposals.'],
    ['Order of stages in the Commons?', 'First Reading, Second Reading, Committee, Report, Third Reading.'],
    ['What is a hybrid Bill?', 'A public Bill affecting particular private interests — e.g. HS2.'],
    ['What is a commencement order?', 'A minister’s order bringing an Act (or part) into force.'],
    ['How long can the Lords delay most Bills?', 'About one year (Parliament Acts 1911 and 1949).']
  ],
  quiz: [
    { q: 'The main debate on the principles of a Bill takes place at…', o: ['Second Reading', 'First Reading', 'Committee Stage', 'Royal Assent'], x: '' },
    { q: 'A Bill introduced by a backbench MP is a…', o: ['Private Member’s Bill', 'private Bill', 'hybrid Bill', 'Money Bill'], x: '' },
    { q: 'Which case confirmed that the courts cannot set aside the Parliament Acts?', o: ['R (Jackson) v Attorney General', 'Pepper v Hart', 'Factortame', 'Fisher v Bell'], x: '' }
  ],
  exam: [{ q: 'Assignment practice (AB.D1): evaluate the law-making process inside Parliament. [12]', m: 12, ms: ['stages described accurately with an example Act', 'strengths — democracy, scrutiny, Law Commission input', 'weaknesses — time, government dominance, rushed laws, unelected Lords', 'sovereignty and separation of powers context', 'comparison with delegated legislation', 'justified conclusion'], bands: CRIT.A }],
  tools: ['billsteps', 'billsort']
});

/* ---------- A4 Statutory interpretation ---------- */
TOPICS.push({
  id: '2.A4', unit: '2', ref: 'A4', title: 'Statutory interpretation',
  short: 'The literal rule, golden rule, mischief rule and purposive approach',
  summary: 'Words in Acts can be ambiguous, too broad, or fail to foresee new situations. Judges use rules of statutory interpretation to decide what the words mean. For A.P2 you explain the rules using case studies; for A.M1 you analyse their effect on Parliament’s law making.',
  spec: ['The literal rule', 'The golden rule', 'The mischief rule', 'The purposive approach'],
  learn: [
    { h: 'The literal rule', html: `<p>Give words their <b>plain, ordinary, grammatical meaning</b>, even if the result is harsh or absurd. [[c:whiteley]] — a dead person was not “entitled to vote”, so impersonating one was not an offence. [[c:berriman]] — “relaying or repairing” did not include oiling. [[c:fisherbell]] — goods in a shop window were not “offered for sale”.</p><p><b>Evaluation</b>: respects Parliament’s words and sovereignty; certain — but can produce absurd and unjust results and assumes words have one meaning.</p>` },
    { h: 'The golden rule', html: `<p>A modification of the literal rule to avoid an <b>absurd</b> result. <b>Narrow</b> approach — where words have more than one meaning, choose the one that avoids absurdity: [[c:rallen]]; [[c:adler]] (“in the vicinity of” includes inside). <b>Wide</b> approach — where words have one meaning but it would be repugnant: [[c:sigsworth]] (a murderer could not inherit from his victim).</p><p><b>Evaluation</b>: avoids absurdity — but there is no clear test of what is “absurd”.</p>` },
    { h: 'The mischief rule', html: `<p>From [[c:heydon]] (1584): ask what the <b>common law was before the Act</b>, what <b>mischief</b> (problem) the Act was meant to remedy, and interpret the Act to <b>suppress the mischief</b>. [[c:smithhughes]] — soliciting from windows was “in a street”. [[c:rcn]] — nurses could carry out abortions under medical supervision.</p><p><b>Evaluation</b>: fulfils Parliament’s intention and avoids loopholes — but can give judges too much power, and it was developed when statutes were less detailed.</p>` },
    { h: 'The purposive approach', html: `<p>The modern approach: interpret words in light of the <b>purpose</b> of the Act as a whole, considering its context. [[c:quintavalle]] (cloned embryos). Judges can use <b>extrinsic aids</b> such as Hansard ([[c:pepper]]), Law Commission reports and explanatory notes, and <b>intrinsic aids</b> such as the long title and headings. It was encouraged by EU law and by s3 Human Rights Act 1998 (read legislation compatibly with Convention rights where possible).</p><p><b>Evaluation</b>: flexible and fits modern drafting — but gives judges more discretion and less certainty.</p>` }
  ],
  debate: [{ q: 'Which approach to statutory interpretation is best?', for: ['Literal: certainty and respect for Parliament.', 'Purposive: achieves what Parliament intended; deals with new technology (Quintavalle).'], ag: ['Literal: absurd and unjust results (Whiteley, Fisher v Bell).', 'Purposive/mischief: judges may substitute their own views for Parliament’s — undermining separation of powers.'] }],
  cases: ['whiteley', 'berriman', 'fisherbell', 'rallen', 'adler', 'sigsworth', 'heydon', 'smithhughes', 'rcn', 'quintavalle', 'pepper'],
  worked: [{ q: 'A local Act says: “No vehicles are allowed in the park.” Adam rides an electric scooter; Bella uses a motorised wheelchair; an ambulance enters to reach an injured child. Apply the rules.', s: ['<b class="st">Literal</b>All three are “vehicles” in the ordinary sense, so all break the rule — including the ambulance and wheelchair.', '<b class="st">Golden</b>Convicting the ambulance driver would be absurd, so “vehicles” is read to exclude emergency vehicles.', '<b class="st">Mischief/purposive</b>The mischief is danger and nuisance to park users; e-scooters fall within it, but a wheelchair (a mobility aid) and an ambulance do not.', '<b class="st">Conclusion</b>Adam is likely caught under any approach; Bella and the ambulance only under the literal rule.'], a: 'Different rules, different outcomes — the key analysis for A.M1.' }],
  pitfalls: ['Describing rules without applying them to the case study.', 'Mixing up the narrow and wide golden rule.', 'Forgetting the aids to interpretation.'],
  cards: [
    ['Literal rule?', 'Plain, ordinary meaning of the words, even if absurd.'],
    ['Golden rule?', 'Modify the literal meaning to avoid an absurd or repugnant result.'],
    ['Mischief rule — source?', 'Heydon’s Case (1584).'],
    ['Purposive approach?', 'Interpret in line with Parliament’s purpose; may use Hansard.'],
    ['Whiteley v Chappell?', 'Literal rule — dead person not “entitled to vote”.'],
    ['Re Sigsworth?', 'Golden rule (wide) — murderer cannot inherit.'],
    ['Smith v Hughes?', 'Mischief rule — soliciting from windows was “in a street”.'],
    ['Pepper v Hart?', 'Hansard may be used as an aid to interpretation.']
  ],
  quiz: [
    { q: 'Fisher v Bell is an example of the…', o: ['literal rule', 'golden rule', 'mischief rule', 'purposive approach'], x: '' },
    { q: 'Which case allowed judges to consult Hansard?', o: ['Pepper v Hart', 'Heydon’s Case', 'Adler v George', 'Whiteley v Chappell'], x: '1993.' },
    { q: 'The mischief rule asks…', o: ['what problem the Act was meant to remedy', 'what the words literally mean', 'whether the result is absurd', 'what the EU intended'], x: '' }
  ],
  exam: [{ q: 'Assignment practice (A.P2): explain how the courts might interpret the Act in the case study using each rule. [10]', m: 10, scen: 'A new Act makes it an offence “to use a drone within 1 km of an airport”. Dev flies a model aeroplane (not a drone) 900 m from an airport’s runway. Eve flies a drone inside a hangar at the airport for a maintenance inspection.', ms: ['literal — “drone” and “within 1 km”; Dev not caught; Eve caught', 'golden — avoid absurdity for Eve’s authorised inspection', 'mischief — danger to aircraft; Dev’s model plane may be within the mischief', 'purposive — purpose of air safety; aids (Hansard, explanatory notes)', 'cases used as authority', 'conclusion on likely outcomes'], bands: CRIT.A }],
  tools: ['sitree', 'sisort']
});

/* ---------- B1 Delegated legislation ---------- */
TOPICS.push({
  id: '2.B1', unit: '2', ref: 'B1', title: 'Delegated legislation',
  short: 'Orders in Council, statutory instruments and by-laws; parliamentary and judicial controls',
  summary: 'Parliament cannot make every detailed rule itself, so it delegates law-making power to others through an enabling (parent) Act. This topic covers the three types of delegated legislation, how Parliament and the courts control it, and how effective those controls are.',
  spec: ['Types: Orders in Council, statutory instruments, by-laws', 'Judicial controls: procedural and substantive ultra vires, Wednesbury unreasonableness', 'Parliamentary controls: negative and affirmative resolution, scrutiny committees, the parent Act', 'Apply to case studies; analyse effectiveness'],
  learn: [
    { h: 'Types of delegated legislation', html: `
<div class="tbl"><table><tr><th>Type</th><th>Made by</th><th>Examples</th></tr>
<tr><td><b>Orders in Council</b></td><td>The King and the Privy Council (in practice, government ministers)</td><td>Emergency regulations under the Civil Contingencies Act 2004; transferring responsibilities between government departments; bringing Acts into force; some Northern Ireland laws</td></tr>
<tr><td><b>Statutory instruments</b></td><td>Government ministers under powers in an Act — about 3,000 a year</td><td>Covid-19 lockdown rules (Health Protection (Coronavirus, Restrictions) Regulations 2020, under the Public Health (Control of Disease) Act 1984); changes to drug classifications under the Misuse of Drugs Act 1971; the Working Time Regulations 1998</td></tr>
<tr><td><b>By-laws</b></td><td>Local authorities and public corporations (e.g. Transport for London, Network Rail)</td><td>Alcohol-free zones, dog control, rules on public transport</td></tr></table></div>
<p><b>Why delegate?</b> Saves Parliament’s time; uses expert and local knowledge; allows quick responses (emergencies); easier to amend.</p>` },
    { h: 'Parliamentary controls', html: `
<ul><li><b>The parent (enabling) Act</b> sets the limits of the power, who may use it and the procedure.</li>
<li><b>Affirmative resolution</b> — the instrument must be approved by a vote of Parliament (or both Houses) to become or stay law.</li>
<li><b>Negative resolution</b> — the instrument becomes law unless either House votes to annul it, usually within 40 days. Most SIs use this procedure, and annulment is very rare.</li>
<li><b>Scrutiny committees</b> — the Joint Committee on Statutory Instruments checks technical legality; the Lords’ Secondary Legislation Scrutiny Committee checks policy merit; the Delegated Powers and Regulatory Reform Committee examines powers in Bills.</li>
<li>Ministers can be questioned in Parliament; Parliament can repeal the parent Act.</li></ul>` },
    { h: 'Judicial controls', html: `
<p>Anyone affected can challenge delegated legislation by <b>judicial review</b> in the High Court. The court can declare it <b>ultra vires</b> (“beyond the powers”) and void:</p>
<ul><li><b>Procedural ultra vires</b> — the required procedure was not followed: [[c:aylesbury]] (failure to consult the mushroom growers’ association).</li>
<li><b>Substantive ultra vires</b> — the content goes beyond what the parent Act allows: [[c:fulham]]; [[c:curedeeley]]; [[c:unison]] (tribunal fees prevented access to justice and were unlawful).</li>
<li><b>Wednesbury unreasonableness</b> — so unreasonable that no reasonable authority could have made it: [[c:wednesbury]]; [[c:strickland]] (a by-law banning singing obscene songs anywhere, even in private, was unreasonable).</li></ul>` }
  ],
  debate: [{ q: 'Are the controls on delegated legislation effective?', for: ['Judicial review can strike down unlawful rules (UNISON).', 'Affirmative procedure gives Parliament a real vote.', 'Scrutiny committees have expertise.'], ag: ['Most SIs use the negative procedure and are never debated.', 'Parliament cannot amend SIs — only accept or reject.', 'Judicial review depends on someone challenging, is costly, and happens after the event.', 'Committees can only report, not overturn.', 'Covid rules were often in force before Parliament saw them.'] }],
  cases: ['aylesbury', 'fulham', 'curedeeley', 'unison', 'wednesbury', 'strickland'],
  worked: [],
  pitfalls: ['Confusing procedural and substantive ultra vires.', 'Forgetting that Parliament cannot amend an SI.', 'Describing controls without analysing effectiveness (B.M2).'],
  cards: [
    ['Three types of delegated legislation?', 'Orders in Council, statutory instruments, by-laws.'],
    ['What is an enabling Act?', 'The parent Act that delegates law-making power and sets its limits.'],
    ['Affirmative v negative resolution?', 'Affirmative needs a vote to approve; negative becomes law unless annulled.'],
    ['Procedural ultra vires example?', 'Aylesbury Mushrooms — failure to consult.'],
    ['Substantive ultra vires example?', 'AG v Fulham Corporation — laundry service beyond powers.'],
    ['Wednesbury unreasonableness?', 'So unreasonable no reasonable authority could have made it.'],
    ['Strickland v Hayes?', 'By-law banning obscene songs even in private — unreasonable.'],
    ['R (UNISON) v Lord Chancellor?', 'Tribunal fees order unlawful — prevented access to justice.']
  ],
  quiz: [
    { q: 'A council rule banning alcohol in a town centre is a…', o: ['by-law', 'statutory instrument', 'Order in Council', 'directive'], x: '' },
    { q: 'Failure to consult as required by the parent Act is…', o: ['procedural ultra vires', 'substantive ultra vires', 'Wednesbury unreasonableness', 'a negative resolution'], x: '' },
    { q: 'Under the negative resolution procedure, an SI…', o: ['becomes law unless annulled', 'must be approved by a vote', 'is made by a council', 'is checked by the CJEU'], x: '' }
  ],
  exam: [{ q: 'Assignment practice (B.P3, B.M2): apply the types and controls of delegated legislation to the case study, and analyse how effective the controls are. [12]', m: 12, scen: 'Under an Act allowing the Home Secretary to regulate “the sale of knives”, she makes regulations banning the possession of all kitchen knives over 10 cm in private homes, without the consultation the Act requires. A town council separately makes a by-law banning anyone from carrying any bag in the town centre.', ms: ['identifies SI and by-law', 'procedural ultra vires — no consultation (Aylesbury)', 'substantive ultra vires — possession in homes beyond “sale” (Fulham)', 'by-law — Wednesbury unreasonable (Strickland)', 'parliamentary controls — negative/affirmative; committees', 'analysis of effectiveness of each control', 'conclusion'], bands: CRIT.B }],
  tools: ['dltree', 'dlsort']
});

/* ---------- B2 EU law ---------- */
TOPICS.push({
  id: '2.B2', unit: '2', ref: 'B2', title: 'The European Union: laws, institutions and impact',
  short: 'Regulations, directives and decisions; the EU institutions; the impact of EU law on the UK and how conflicts were resolved, before and after Brexit',
  summary: 'From 1973 to 2020 EU law was part of UK law and took priority over conflicting Acts of Parliament. Since leaving the EU, most EU-derived law has been kept but its supremacy has ended. For B.P4 you research real regulations, directives and decisions; for B.M3 you assess the impact of EU law and how conflicts were — or are — resolved.',
  spec: ['Types of EU laws: regulations, directives and decisions', 'The role of the European law-making institutions: European Council, European Commission, European Parliament, Court of Justice', 'Impact of EU laws on the UK, e.g. how conflicts between EU and domestic legislation are resolved'],
  learn: [
    { h: 'Types of EU law', html: `
<div class="tbl"><table><tr><th>Type</th><th>Effect</th><th>Real examples</th></tr>
<tr><td><b>Regulations</b></td><td>Binding in their entirety and <b>directly applicable</b> in all member states without national legislation</td><td>General Data Protection Regulation (2016/679) — now the UK GDPR; Regulation 261/2004 on compensation for flight delays (retained as “UK261”)</td></tr>
<tr><td><b>Directives</b></td><td>Binding as to the result, but each state chooses how to implement them by a deadline; can have vertical direct effect against the state ([[c:marshall]])</td><td>Working Time Directive → Working Time Regulations 1998; Consumer Rights Directive → Consumer Rights Act 2015</td></tr>
<tr><td><b>Decisions</b></td><td>Binding only on those to whom they are addressed (a state, company or person)</td><td>European Commission competition decisions fining companies, such as the €2.42 billion fine on Google (2017)</td></tr></table></div>
<p>The <b>Treaties</b> (primary law) sit above these.</p>` },
    { h: 'The institutions', html: `
<ul><li><b>European Council</b> — heads of state or government; sets overall direction and priorities (it does not make legislation).</li>
<li><b>European Commission</b> — one commissioner per member state; proposes new laws, enforces EU law (“guardian of the Treaties”) and can take states to court.</li>
<li><b>European Parliament</b> — directly elected MEPs; shares law-making with the Council of the EU (ministers from each state) under the ordinary legislative procedure; approves the budget.</li>
<li><b>Court of Justice of the European Union</b> — ensures uniform interpretation; national courts refer questions to it for preliminary rulings (Article 267 TFEU).</li></ul>` },
    { h: 'Impact on the UK before 2020', html: `
<ul><li>The <b>European Communities Act 1972</b> s2 gave EU law effect in the UK.</li>
<li><b>Supremacy</b>: where EU law conflicted with national law, EU law prevailed ([[c:costa]]). In [[c:factortame]], the House of Lords disapplied parts of the Merchant Shipping Act 1988 that breached EU law — a major limit on parliamentary sovereignty.</li>
<li><b>Direct effect</b>: individuals could rely on EU law in national courts ([[c:vangend]]; [[c:marshall]]). <b>State liability</b>: states could be liable for failing to implement directives ([[c:francovich]]).</li>
<li>UK courts interpreted UK law consistently with EU law where possible (the purposive approach).</li></ul>` },
    { h: 'After Brexit', html: `
<ul><li>The UK left the EU on <b>31 January 2020</b>; the transition period ended on <b>31 December 2020</b>.</li>
<li>The <b>European Union (Withdrawal) Act 2018</b> repealed the ECA 1972 and kept most EU-derived law as “retained EU law”, so there was no legal gap.</li>
<li>The <b>Retained EU Law (Revocation and Reform) Act 2023</b> renamed it “assimilated law” from <b>1 January 2024</b>, ended the principle of supremacy of EU law over UK Acts, and made it easier to amend or revoke.</li>
<li>UK courts are no longer bound by new CJEU decisions; the Court of Appeal and Supreme Court can depart from retained EU case law.</li>
<li>Under the Windsor Framework, some EU rules on goods still apply in Northern Ireland.</li>
<li><b>Assessment</b> (B.M3): Brexit resolved the conflict between EU supremacy and parliamentary sovereignty in favour of Parliament — but created complexity, and the UK must still consider trade agreements and the Windsor Framework.</li></ul>` }
  ],
  debate: [{ q: 'Did EU membership undermine parliamentary sovereignty?', for: ['Factortame: an Act of Parliament was disapplied.', 'The UK had to implement laws it had not chosen.', 'The CJEU had the final word on EU law.'], ag: ['Parliament voluntarily joined through the ECA 1972 and could leave — and did.', 'The UK had a voice in making EU law.', 'Many EU laws (workers’ and consumers’ rights) were popular and have been kept.'] }],
  cases: ['costa', 'factortame', 'vangend', 'marshall', 'francovich', 'miller2017'],
  worked: [],
  pitfalls: ['Confusing the European Council, the Council of the EU and the Council of Europe (which runs the European Court of Human Rights).', 'Saying EU law no longer exists in the UK — much is retained as assimilated law.', 'Not using actual examples of regulations, directives and decisions (needed for B.P4).'],
  cards: [
    ['Regulation?', 'Binding and directly applicable in all member states without national legislation.'],
    ['Directive?', 'Binding as to the result; states choose how to implement.'],
    ['Decision?', 'Binding only on those it is addressed to.'],
    ['Role of the European Commission?', 'Proposes laws and enforces EU law.'],
    ['What did Factortame show?', 'UK courts could disapply an Act of Parliament conflicting with EU law.'],
    ['When did the UK leave the EU?', '31 January 2020 (transition ended 31 December 2020).'],
    ['What is assimilated law?', 'Retained EU law renamed by the REUL Act 2023 from 1 January 2024, without supremacy.'],
    ['Example of a directive implemented in the UK?', 'Working Time Directive → Working Time Regulations 1998.']
  ],
  quiz: [
    { q: 'The GDPR is an example of an EU…', o: ['regulation', 'directive', 'decision', 'treaty'], x: '' },
    { q: 'Which institution proposes new EU laws?', o: ['European Commission', 'European Council', 'Court of Justice', 'Council of Europe'], x: '' },
    { q: 'Which Act ended the supremacy of retained EU law from 2024?', o: ['Retained EU Law (Revocation and Reform) Act 2023', 'European Communities Act 1972', 'Human Rights Act 1998', 'Parliament Act 1949'], x: '' },
    { q: 'In Factortame the courts…', o: ['disapplied parts of an Act of Parliament', 'struck down a by-law', 'overruled Donoghue', 'interpreted the Theft Act'], x: '' }
  ],
  exam: [{ q: 'Assignment practice (B.P4, B.M3): research one regulation, one directive and one decision, and assess the impact of EU law on the UK and how conflicts were resolved. [12]', m: 12, ms: ['accurate real examples of each type with references', 'explanation of how each works', 'supremacy — Costa; Factortame', 'direct effect — Van Gend en Loos; Marshall', 'Brexit — EUWA 2018; REUL Act 2023; assimilated law', 'assessment of impact and how the conflict with sovereignty was resolved'], bands: CRIT.B }],
  tools: ['eusort']
});

/* ---------- Unit 2 A–B tools ---------- */
TOOLS.influencesort = { type: 'sort', title: 'Which influence?', intro: 'Identify the main influence on Parliament in each example.', cats: ['Pressure group', 'Law Commission', 'Media'], items: [
  ['Consolidating sentencing law into the Sentencing Act 2020', 'Law Commission', ''],
  ['Parents of Dunblane victims petitioning for a handgun ban', 'Pressure group', 'Snowdrop.'],
  ['Tabloid front pages about dog attacks in 1991', 'Media', 'Dangerous Dogs Act.'],
  ['A report recommending replacing the 1861 Act with a new ladder of offences', 'Law Commission', '2015.'],
  ['The Police Federation lobbying about assaults on officers', 'Pressure group', '2018 Act.'],
  ['A TV drama about the Post Office scandal', 'Media', '2024 Act.']
] };
TOOLS.billsteps = { type: 'steps', title: 'From Green Paper to Act', intro: 'The route of a government Bill starting in the Commons.', steps: [
  { h: 'Green Paper', html: '<p>Consultation on ideas.</p>' }, { h: 'White Paper', html: '<p>Firm proposals.</p>' },
  { h: 'First Reading', html: '<p>Formal introduction; no debate.</p>' }, { h: 'Second Reading', html: '<p>Main debate and vote on principles.</p>' },
  { h: 'Committee Stage', html: '<p>Line-by-line scrutiny; amendments.</p>' }, { h: 'Report Stage', html: '<p>Whole House considers amendments.</p>' },
  { h: 'Third Reading', html: '<p>Final vote in the Commons.</p>' }, { h: 'House of Lords', html: '<p>Same stages; amendments; ping-pong. Parliament Acts limit Lords’ delay.</p>' },
  { h: 'Royal Assent', html: '<p>The Bill becomes an Act.</p>' }, { h: 'Commencement', html: '<p>In force on Assent, on a set date, or by commencement order.</p>' }
] };
TOOLS.billsort = { type: 'sort', title: 'Which type of Bill?', intro: 'Classify each Bill.', cats: ['Public', 'Private Member’s', 'Private', 'Hybrid'], items: [
  ['A government Bill reforming domestic abuse law', 'Public', ''],
  ['A backbench MP’s Bill after winning the ballot', 'Private Member’s', ''],
  ['A Bill giving a university new powers over its land', 'Private', ''],
  ['A Bill for a national railway line affecting particular landowners', 'Hybrid', 'HS2.']
] };
TOOLS.sitree = { type: 'tree', title: 'Which rule of interpretation?', intro: 'A guide to how a judge might approach unclear words.', nodes: {
  start: { q: 'Does the plain, ordinary meaning of the words give a sensible result?', o: [['Yes', 'lit'], ['No — it is absurd or repugnant', 'gold'], ['The words do not cover a situation Parliament did not foresee', 'purp']] },
  lit: { end: true, tone: 'good', v: 'Literal rule', x: 'Apply the plain meaning.', cases: ['whiteley', 'fisherbell'] },
  gold: { q: 'Do the words have more than one possible meaning?', o: [['Yes — choose the one avoiding absurdity', 'narrow'], ['No — but the one meaning is repugnant', 'wide']] },
  narrow: { end: true, tone: 'good', v: 'Golden rule (narrow)', x: '', cases: ['rallen', 'adler'] },
  wide: { end: true, tone: 'good', v: 'Golden rule (wide)', x: '', cases: ['sigsworth'] },
  purp: { q: 'Is it clear what problem the Act was meant to solve, or what its overall purpose is?', o: [['The mischief it was passed to cure', 'mis'], ['Its overall purpose (with aids like Hansard)', 'pur']] },
  mis: { end: true, tone: 'good', v: 'Mischief rule', x: '', cases: ['heydon', 'smithhughes', 'rcn'] },
  pur: { end: true, tone: 'good', v: 'Purposive approach', x: '', cases: ['quintavalle', 'pepper'] }
} };
TOOLS.sisort = { type: 'sort', title: 'Match the case to the rule', intro: 'Which rule of interpretation did the court use?', cats: ['Literal', 'Golden', 'Mischief', 'Purposive'], items: [
  ['Whiteley v Chappell', 'Literal', ''], ['Re Sigsworth', 'Golden', ''], ['Smith v Hughes', 'Mischief', ''], ['R (Quintavalle) v Secretary of State for Health', 'Purposive', ''], ['LNER v Berriman', 'Literal', ''], ['Adler v George', 'Golden', ''], ['Royal College of Nursing v DHSS', 'Mischief', '']
] };
TOOLS.dltree = { type: 'tree', title: 'Can this delegated legislation be challenged?', intro: 'Test the rule against the judicial controls.', nodes: {
  start: { q: 'Was the procedure required by the parent Act (e.g. consultation) followed?', o: [['Yes', 'sub'], ['No', 'proc']] },
  proc: { end: true, tone: 'bad', v: 'Procedural ultra vires — void', x: '', cases: ['aylesbury'] },
  sub: { q: 'Does the content stay within the powers granted by the parent Act?', o: [['Yes', 'reas'], ['No', 'subuv']] },
  subuv: { end: true, tone: 'bad', v: 'Substantive ultra vires — void', x: '', cases: ['fulham', 'unison'] },
  reas: { q: 'Is it so unreasonable that no reasonable authority could have made it?', o: [['Yes', 'wed'], ['No', 'ok']] },
  wed: { end: true, tone: 'bad', v: 'Wednesbury unreasonable — void', x: '', cases: ['wednesbury', 'strickland'] },
  ok: { end: true, tone: 'good', v: 'Valid', x: 'Parliamentary controls may still apply (affirmative/negative resolution; scrutiny committees).' }
} };
TOOLS.dlsort = { type: 'sort', title: 'Type of delegated legislation', intro: 'Classify each example.', cats: ['Order in Council', 'Statutory instrument', 'By-law'], items: [
  ['Emergency regulations made by the King in the Privy Council', 'Order in Council', ''],
  ['Covid-19 lockdown regulations made by the Health Secretary', 'Statutory instrument', ''],
  ['A council ban on drinking alcohol in a park', 'By-law', ''],
  ['A Home Office order reclassifying a drug', 'Statutory instrument', 'Misuse of Drugs Act 1971.'],
  ['Transport for London rules on eating on the Tube', 'By-law', 'Public corporation.']
] };
TOOLS.eusort = { type: 'sort', title: 'Regulation, directive or decision?', intro: 'Classify each EU law.', cats: ['Regulation', 'Directive', 'Decision'], items: [
  ['GDPR — applies directly in every member state', 'Regulation', ''],
  ['Working Time — states must pass their own laws to achieve the result', 'Directive', ''],
  ['A competition fine addressed to Google', 'Decision', ''],
  ['Flight delay compensation rules (261/2004)', 'Regulation', ''],
  ['Consumer rights rules implemented in the UK by the Consumer Rights Act 2015', 'Directive', '']
] };
