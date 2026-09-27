/* ==========================================================
   Interactive tools for Component 1 Section A (law making)
   (substantive-law tools live alongside their topics)
   ========================================================== */
TOOLS.billpath = { type: 'steps', title: 'From idea to Act: follow a Bill', intro: 'Follow the Terrorism (Protection of Premises) Bill — “Martyn’s Law” — from campaign to Royal Assent in April 2025.', steps: [
  { h: 'The campaign', html: '<p>After her son Martyn Hett was killed in the Manchester Arena bombing (2017), Figen Murray campaigned for venues to prepare for terrorist attacks. The Manchester Arena Inquiry supported the idea. <b>Influences:</b> a victim’s family, a public inquiry, media coverage and a petition.</p>' },
  { h: 'Consultation', html: '<p>The Home Office ran a public <b>consultation</b> (2021) on a “Protect Duty” — the equivalent of a Green Paper stage — then published a draft Bill for <b>pre-legislative scrutiny</b> by the Home Affairs Committee (2023), which criticised the burden on small venues.</p>' },
  { h: 'First reading', html: '<p>The Bill was introduced in the House of Commons in September 2024. First reading is a formality: the title is read and the Bill is printed.</p>' },
  { h: 'Second reading', html: '<p>The main debate on the <b>principles</b> of the Bill, followed by a vote. MPs broadly supported the aim but questioned costs for small venues.</p>' },
  { h: 'Committee stage', html: '<p>A <b>Public Bill Committee</b> examined each clause, heard evidence and considered amendments. The standard tier threshold was raised from 100 to 200 people in response to concerns.</p>' },
  { h: 'Report and third reading', html: '<p>At <b>report stage</b> the whole House considered the amended Bill; at <b>third reading</b> it had a final debate and vote.</p>' },
  { h: 'House of Lords', html: '<p>The Bill passed through the same stages in the Lords. Peers with expertise in security and the events industry proposed amendments. Any Lords amendments go back to the Commons — <b>ping-pong</b> — until both agree. If the Lords refused, the <b>Parliament Acts 1911 and 1949</b> could be used after a year.</p>' },
  { h: 'Royal Assent', html: '<p>Royal Assent was given in <b>April 2025</b>. The Act includes an implementation period of at least 24 months before its duties come into force — commencement will be by <b>statutory instrument</b> (delegated legislation).</p>' }
] };
TOOLS.influencesort = { type: 'sort', title: 'Which influence?', intro: 'Classify each example by the main influence on Parliament.', cats: ['Media', 'Pressure group', 'Law Commission', 'Public inquiry', 'Judiciary', 'Political party'], items: [
  ['Tabloid campaigns about dog attacks led to a rushed Act in 1991.', 'Media', 'The Dangerous Dogs Act 1991 is the classic knee-jerk law.'],
  ['The Snowdrop Campaign after the Dunblane massacre led to a ban on most handguns.', 'Pressure group', 'Firearms (Amendment) (No 2) Act 1997.'],
  ['A report and draft Bill led to the Sentencing Act 2020 (the Sentencing Code).', 'Law Commission', 'Codifying sentencing procedure.'],
  ['A report into the Stephen Lawrence murder led to reform of the double jeopardy rule.', 'Public inquiry', 'Macpherson Report 1999; Criminal Justice Act 2003 Part 10.'],
  ['The House of Lords declared the Matrimonial Causes Act incompatible, prompting the Gender Recognition Act 2004.', 'Judiciary', 'Bellinger v Bellinger — s4 HRA declaration.'],
  ['A new government passes an Act to deliver its main election promise.', 'Political party', 'Manifesto mandate; the Salisbury Convention.'],
  ['The News of the World campaigned for “Sarah’s Law” after the murder of Sarah Payne.', 'Media', 'Child Sex Offender Disclosure Scheme.'],
  ['The BMA responds to a Department of Health consultation on organ donation.', 'Pressure group', 'An insider, sectional group.'],
  ['Judges in Fisher v Bell exposed a loophole, and Parliament amended the Act within a year.', 'Judiciary', 'Restriction of Offensive Weapons Act 1961.']
] };
TOOLS.separation = { type: 'sort', title: 'Legislature, executive or judiciary?', intro: 'Montesquieu’s three powers. Which branch is exercising power in each example?', cats: ['Legislature', 'Executive', 'Judiciary'], items: [
  ['The House of Commons votes on the third reading of a Bill.', 'Legislature', 'Making law.'],
  ['The Home Secretary signs a statutory instrument.', 'Executive', 'Delegated legislation is made by the executive using power from Parliament.'],
  ['The Supreme Court rules that prorogation was unlawful.', 'Judiciary', 'Miller (2019) — the courts checking the executive.'],
  ['The police arrest a suspect.', 'Executive', 'The police enforce the law.'],
  ['The Prime Minister decides to deploy troops overseas.', 'Executive', 'A royal prerogative power exercised by ministers.'],
  ['A High Court judge interprets the word “vehicle” in an Act.', 'Judiciary', 'Statutory interpretation.'],
  ['The House of Lords proposes amendments to a Bill.', 'Legislature', 'Revising chamber.'],
  ['The Judicial Appointments Commission recommends a candidate for the Court of Appeal.', 'Judiciary', 'An independent body protecting judicial independence (CRA 2005) — part of the judicial system rather than the government.']
] };
TOOLS.reformsort = { type: 'sort', title: 'Who reformed it?', intro: 'Match each reform to the agency or method most responsible for it.', cats: ['Law Commission', 'Royal Commission', 'Public inquiry', 'Judges', 'Pressure group'], items: [
  ['The Criminal Cases Review Commission was created in 1995.', 'Royal Commission', 'Runciman Commission on Criminal Justice (1993).'],
  ['The marital rape exemption was abolished in 1991.', 'Judges', 'R v R — the House of Lords changed the common law.'],
  ['The Unfair Contract Terms Act 1977.', 'Law Commission', 'Implemented Law Commission reports on exemption clauses.'],
  ['Double jeopardy reform in the Criminal Justice Act 2003.', 'Public inquiry', 'Macpherson Report (1999).'],
  ['Handgun ban after Dunblane.', 'Pressure group', 'Snowdrop Campaign.'],
  ['Recklessness made subjective again in 2003.', 'Judges', 'R v G overruled Caldwell using the Practice Statement.'],
  ['Thousands of obsolete statutes repealed by Statute Law (Repeals) Acts.', 'Law Commission', 'Part of its statute law revision work.']
] };
TOOLS.eusort = { type: 'sort', title: 'EU law: sort the sources and effects', intro: 'Classify each statement.', cats: ['Treaty article', 'Regulation', 'Directive', 'Decision'], items: [
  ['Directly applicable in every member state without any national implementing measure.', 'Regulation', 'Art 288 TFEU — e.g. the GDPR.'],
  ['Binding as to the result, but each state chooses the form and method.', 'Directive', 'Usually implemented in the UK by statutory instrument.'],
  ['Binding only on the person, company or state it is addressed to.', 'Decision', 'E.g. a competition decision against a company.'],
  ['Primary law; in Van Gend en Loos it was held to have direct effect.', 'Treaty article', 'Clear, precise and unconditional provisions.'],
  ['Only vertical direct effect — enforceable against the state (Marshall).', 'Directive', 'No horizontal direct effect.'],
  ['Art 157 on equal pay relied on in Macarthys v Smith.', 'Treaty article', 'Horizontal and vertical direct effect.']
] };
TOOLS.dltypes = { type: 'sort', title: 'Name the type of delegated legislation', intro: 'Which type is each example?', cats: ['Statutory instrument', 'By-law', 'Order in Council', 'Act of a devolved legislature'], items: [
  ['The rules banning alcohol in a town’s parks.', 'By-law', 'Made by the local authority under the Local Government Act 1972.'],
  ['The regulations raising the National Living Wage each April.', 'Statutory instrument', 'Made by a minister under the National Minimum Wage Act 1998.'],
  ['Cannabis reclassified from Class B to Class C in 2004.', 'Order in Council', 'Misuse of Drugs Act 1971 (Modification) Order 2003.'],
  ['The Health Protection (Coronavirus, Restrictions) (England) Regulations 2020.', 'Statutory instrument', 'Made under the Public Health (Control of Disease) Act 1984.'],
  ['Wales’ law introducing deemed consent for organ donation.', 'Act of a devolved legislature', 'Human Transplantation (Wales) Act 2013.'],
  ['Railway rules against smoking on trains and platforms.', 'By-law', 'Made by a public corporation.'],
  ['Emergency regulations made when Parliament is not sitting under the Civil Contingencies Act 2004.', 'Order in Council', 'Or ministerial regulations; Orders in Council are used when Parliament cannot meet.']
] };
TOOLS.dlcontrol = { type: 'tree', title: 'Can this delegated legislation be challenged?', intro: 'Work through the judicial review questions a court would ask about a statutory instrument or by-law.', nodes: {
  start: { q: 'Does the claimant have a sufficient interest and is the claim brought promptly (normally within three months)?', o: [['Yes', 'proc'], ['No', 'nostand']] },
  nostand: { end: true, tone: 'bad', v: 'Claim likely refused', x: 'Judicial review needs permission. The claimant must have a “sufficient interest” and act promptly — a major practical limit on judicial control.' },
  proc: { q: 'Did the maker follow the procedure required by the enabling Act (e.g. consultation, laying before Parliament)?', o: [['No', 'procuv'], ['Yes', 'subst']] },
  procuv: { end: true, tone: 'good', v: 'Procedural ultra vires', x: 'The legislation may be void, or not apply to those who should have been consulted.', cases: ['aylesbury'] },
  subst: { q: 'Does the content stay within the powers granted by the enabling Act?', o: [['No — it goes beyond them', 'substuv'], ['Yes', 'reas']] },
  substuv: { end: true, tone: 'good', v: 'Substantive ultra vires', x: 'The court declares it void because it exceeds the enabling Act.', cases: ['curedeeley', 'plp', 'unison'] },
  reas: { q: 'Is it so unreasonable that no reasonable body could have made it?', o: [['Yes', 'unreas'], ['No', 'hra']] },
  unreas: { end: true, tone: 'good', v: 'Unreasonable (Wednesbury)', x: 'The court can quash it for irrationality — though this is a high threshold.', cases: ['strickland', 'wednesbury'] },
  hra: { q: 'Is it incompatible with a Convention right (and not required by the enabling Act)?', o: [['Yes', 'hrav'], ['No', 'valid']] },
  hrav: { end: true, tone: 'good', v: 'Unlawful under the Human Rights Act', x: 'Unlike an Act of Parliament, delegated legislation can be quashed for breaching Convention rights (s6 HRA; it is not “primary legislation”).' },
  valid: { end: true, tone: 'bad', v: 'Valid', x: 'The courts only review legality, not whether the policy is wise. Political control lies with Parliament (negative or affirmative resolution, scrutiny committees).' }
} };
TOOLS.sirules = { type: 'sort', title: 'Which rule or aid did the court use?', intro: 'Identify the approach or rule of language in each case.', cats: ['Literal', 'Golden', 'Mischief', 'Purposive', 'Rule of language'], items: [
  ['[[c:whiteley]] — impersonating a dead voter is not an offence.', 'Literal', 'A dead man is not “entitled to vote”.'],
  ['[[c:adler]] — “in the vicinity of” includes inside the base.', 'Golden', 'Narrow approach to avoid absurdity.'],
  ['[[c:smithhughes]] — soliciting from a balcony is “in a street”.', 'Mischief', 'Heydon’s Case questions.'],
  ['[[c:quintavalle]] — cloned embryos are regulated.', 'Purposive', 'Statutes are always speaking.'],
  ['[[c:powellkempton]] — an outdoor betting ring is not an “other place”.', 'Rule of language', 'Ejusdem generis.'],
  ['[[c:sigsworth]] — a murderer cannot inherit from his mother.', 'Golden', 'Wide approach: repugnant result.'],
  ['[[c:berriman]] — oiling points is not “relaying or repairing”.', 'Literal', 'A harsh result for the widow.'],
  ['[[c:rcn]] — nurses may carry out abortions under a doctor’s supervision.', 'Mischief', 'The mischief was unsafe illegal abortions.'],
  ['[[c:jonestowerboot]] — “in the course of employment” read widely.', 'Purposive', 'To give effect to the Race Relations Act.'],
  ['[[c:tempest]] — “goods, wares and merchandise” excludes shares.', 'Rule of language', 'Expressio unius est exclusio alterius.']
] };
TOOLS.siapply = { type: 'tree', title: 'Apply the rules: the Parks Protection Act', intro: 'Section 1 of the (fictional) Parks Protection Act 2024: “It is an offence to ride any bicycle, scooter, skateboard or other vehicle in a public park.” Amir rides a mobility scooter in the park. Choose an approach and see where it leads.', nodes: {
  start: { q: 'Which approach will you apply first?', o: [['Literal rule', 'lit'], ['Golden rule', 'gold'], ['Mischief rule', 'mis'], ['Purposive approach', 'pur'], ['Ejusdem generis', 'ejus']] },
  lit: { q: 'The dictionary defines a vehicle as “a thing used for transporting people or goods on land”. Does a mobility scooter fit?', o: [['Yes', 'litg'], ['No', 'litn']] },
  litg: { end: true, tone: 'bad', v: 'Literal rule: guilty', x: 'The plain meaning covers a mobility scooter (it is even a “scooter”). Like [[c:whiteley]] and [[c:berriman]], the literal rule can produce a harsh result Parliament probably did not intend.' },
  litn: { end: true, tone: 'mid', v: 'Think again', x: 'A mobility scooter does transport a person on land, so on the dictionary meaning it is a vehicle. The literal rule does not let you ignore that because the result seems unfair — that is what the golden rule is for.' },
  gold: { q: 'Would convicting a disabled person for using a mobility aid be absurd or repugnant?', o: [['Yes', 'goldn'], ['No', 'litg']] },
  goldn: { end: true, tone: 'good', v: 'Golden rule: not guilty', x: 'The court can modify the literal meaning to avoid an absurd result — like [[c:adler]] (narrow approach) — reading “vehicle” to exclude mobility aids.' },
  mis: { q: 'Heydon’s Case: what was the mischief the Act was passed to remedy?', o: [['Danger from fast recreational riders colliding with walkers', 'misn'], ['Any wheeled object in parks', 'misg']] },
  misn: { end: true, tone: 'good', v: 'Mischief rule: not guilty', x: 'A slow mobility scooter used by a disabled person is not the mischief. As in [[c:smithhughes]], the court interprets the words to suppress the mischief — and no further.' },
  misg: { end: true, tone: 'mid', v: 'Unlikely reading', x: 'Nothing suggests Parliament wanted to ban prams and wheelchairs; you would need evidence of the mischief, such as a Law Commission report or Hansard ([[c:pepper]]).' },
  pur: { q: 'Would a purposive court also consider the Human Rights Act and equality law?', o: [['Yes — s3 HRA requires a compatible reading if possible', 'purn']] },
  purn: { end: true, tone: 'good', v: 'Purposive approach: not guilty', x: 'The purpose is park safety. Reading “vehicle” to exclude mobility aids achieves that purpose and avoids discrimination (Arts 8 and 14), as s3 HRA requires ([[c:ghaidan]]).' },
  ejus: { q: 'What do bicycles, scooters and skateboards have in common?', o: [['They are ridden for recreation or travel, under the rider’s own power or small motors', 'ejusn']] },
  ejusn: { end: true, tone: 'mid', v: 'Ejusdem generis: arguable', x: '“Other vehicle” is limited to things of the same kind ([[c:powellkempton]]). A mobility scooter is ridden, so it might fall within the class — but it is a mobility aid, not a recreational vehicle. A good answer notes both arguments.' }
} };
TOOLS.avoidsort = { type: 'sort', title: 'Overruling, reversing or distinguishing?', intro: 'Classify each example of a court avoiding a precedent.', cats: ['Overruling', 'Reversing', 'Distinguishing', 'Young exception'], items: [
  ['[[c:merritt]] — the court did not follow Balfour because the couple had separated.', 'Distinguishing', 'Material facts differ.'],
  ['[[c:herrington]] — Addie v Dumbreck no longer good law.', 'Overruling', 'Practice Statement.'],
  ['The House of Lords allows an appeal and changes the Court of Appeal’s decision in the same case.', 'Reversing', 'Same case, higher court.'],
  ['The Court of Appeal refuses to follow its own earlier decision because it conflicts with a later Supreme Court decision.', 'Young exception', 'The second exception in Young v Bristol Aeroplane.'],
  ['[[c:shivpuri]] — Anderton v Ryan was wrong.', 'Overruling', 'One year later.'],
  ['The Court of Appeal refuses to follow a decision made per incuriam.', 'Young exception', 'Third exception.'],
  ['[[c:rvg]] — the objective Caldwell test abandoned.', 'Overruling', 'Subjective recklessness restored.']
] };
