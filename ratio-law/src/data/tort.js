/* ==========================================================
   SECTION B · LAW OF TORT (private law) — 2.2.1 – 2.2.2
   ========================================================== */
addCases([
  { id: 'rookes', n: 'Rookes v Barnard', y: 1964, a: 'TO', t: '2.2.1', c: 'HL', f: 'A union threatened a strike unless an employee who had left the union was dismissed; he sued in the tort of intimidation.', p: 'Exemplary (punitive) damages are only available in limited categories: oppressive, arbitrary or unconstitutional action by government servants; conduct calculated to make a profit exceeding the compensation payable; or where statute authorises them.' },
  // duty
  { id: 'donoghue', n: 'Donoghue v Stevenson', y: 1932, a: 'TO', t: '2.2.2a', c: 'HL', f: 'Mrs Donoghue’s friend bought her a bottle of ginger beer in a café in Paisley. It was in an opaque bottle and allegedly contained a decomposed snail. She suffered shock and gastroenteritis. She had no contract with the manufacturer.', p: 'A manufacturer owes a duty of care to the ultimate consumer. Lord Atkin’s neighbour principle: you must take reasonable care to avoid acts or omissions you can reasonably foresee would be likely to injure your neighbour — persons so closely and directly affected that you ought reasonably to have them in contemplation.' },
  { id: 'caparo', n: 'Caparo Industries v Dickman', y: 1990, a: 'TO', t: '2.2.2a', c: 'HL', f: 'Caparo bought shares in a company relying on accounts audited by the defendants, which overstated the company’s profits.', p: 'No duty was owed to investors. The House set out a three-part approach for novel situations: (1) reasonable foreseeability of damage; (2) proximity of relationship; (3) it is fair, just and reasonable to impose a duty.' },
  { id: 'robinson', n: 'Robinson v Chief Constable of West Yorkshire Police', y: 2018, a: 'TO', t: '2.2.2a', c: 'UKSC', f: 'Police officers arresting a suspected drug dealer in a busy street knocked over an elderly woman, who was injured.', p: 'The police owe a duty of care for positive acts that foreseeably cause physical injury, like anyone else. Caparo is not a universal three-stage test: courts apply established categories and develop the law incrementally by analogy; the “fair, just and reasonable” question matters only in genuinely novel cases.' },
  { id: 'bourhill', n: 'Bourhill v Young', y: 1943, a: 'TO', t: '2.2.2a', c: 'HL', f: 'A pregnant fishwife heard a motorcycle crash about 45 feet away, later saw the blood, and suffered shock and a stillbirth.', p: 'No duty: she was not a reasonably foreseeable claimant, being outside the area of danger.' },
  { id: 'hillccwy', n: 'Hill v Chief Constable of West Yorkshire', y: 1988, a: 'TO', t: '2.2.2a', c: 'HL', f: 'The mother of the last victim of the “Yorkshire Ripper” argued the police had negligently failed to catch him earlier.', p: 'No duty: there was no proximity between the police and the victim, who was one of many potential victims; public policy also weighed against a duty (defensive policing, diverting resources).' },
  { id: 'michael', n: 'Michael v Chief Constable of South Wales Police', y: 2015, a: 'TO', t: '2.2.2a', c: 'UKSC', f: 'A woman called 999 saying her ex-partner had threatened to kill her. The call was wrongly graded; police arrived after she had been murdered.', p: 'No duty of care in negligence: the police do not generally owe a duty to protect individuals from harm by third parties, unless they have assumed responsibility.' },
  { id: 'kent', n: 'Kent v Griffiths', y: 2000, a: 'TO', t: '2.2.2a', c: 'CA', f: 'An ambulance took 40 minutes to arrive to a woman having an asthma attack, with no good reason; she suffered a respiratory arrest.', p: 'Once the ambulance service accepted the call it owed a duty of care to the named patient.' },
  { id: 'watsonbbbc', n: 'Watson v British Boxing Board of Control', y: 2001, a: 'TO', t: '2.2.2a', c: 'CA', f: 'Boxer Michael Watson suffered brain damage after a fight; there was no adequate ringside resuscitation equipment, as the Board’s rules did not require it.', p: 'The Board owed a duty of care: it controlled safety arrangements and boxers relied on it.' },
  // breach
  { id: 'blyth', n: 'Blyth v Birmingham Waterworks Co', y: 1856, a: 'TO', t: '2.2.2b', c: 'Court of Exchequer', f: 'A water main burst in an exceptionally severe frost and flooded a house.', p: 'Negligence is failing to do what a reasonable man would do, or doing what a prudent and reasonable man would not do. No breach — the frost was exceptional.' },
  { id: 'nettleship', n: 'Nettleship v Weston', y: 1971, a: 'TO', t: '2.2.2b', c: 'CA', f: 'A learner driver hit a lamp post, injuring her instructor, a friend.', p: 'A learner driver is judged by the standard of a reasonably competent qualified driver. The instructor had not consented to the risk (no volenti), though damages were reduced for his contributory negligence.' },
  { id: 'mullin', n: 'Mullin v Richards', y: 1998, a: 'TO', t: '2.2.2b', c: 'CA', f: 'Two 15-year-old girls were fencing with plastic rulers; one ruler snapped and a fragment blinded one girl in one eye.', p: 'A child is judged by the standard of a reasonable child of the same age. It was not foreseeable to a reasonable 15-year-old — no breach.' },
  { id: 'bolam', n: 'Bolam v Friern Hospital Management Committee', y: 1957, a: 'TO', t: '2.2.2b', c: 'HC', f: 'A patient was given electro-convulsive therapy without relaxant drugs or restraint and suffered fractures. Medical opinion was divided on the practice.', p: 'A professional is not negligent if they acted in accordance with a practice accepted as proper by a responsible body of professional opinion.' },
  { id: 'bolitho', n: 'Bolitho v City and Hackney Health Authority', y: 1997, a: 'TO', t: '2.2.2b', c: 'HL', f: 'A doctor failed to attend a two-year-old with breathing difficulties; the child suffered brain damage and died. Experts differed on whether intubation would have been done.', p: 'The Bolam body of opinion must be capable of withstanding logical analysis; a court can reject expert opinion that is not reasonable or responsible.' },
  { id: 'montgomery', n: 'Montgomery v Lanarkshire Health Board', y: 2015, a: 'TO', t: '2.2.2b', c: 'UKSC', f: 'A diabetic mother was not told of a 9–10% risk of shoulder dystocia in vaginal delivery; her baby suffered severe disabilities.', p: 'Doctors must take reasonable care to ensure patients are aware of material risks and reasonable alternatives. Bolam no longer governs disclosure of risks — patient autonomy.' },
  { id: 'wellscooper', n: 'Wells v Cooper', y: 1958, a: 'TO', t: '2.2.2b', c: 'CA', f: 'An amateur carpenter fitted a new door handle, which came off when a visitor pulled it; he fell and was injured.', p: 'A person doing DIY work is judged by the standard of a reasonably competent amateur carpenter — which he met. No breach.' },
  { id: 'roe', n: 'Roe v Minister of Health', y: 1954, a: 'TO', t: '2.2.2b', c: 'CA', f: 'In 1947 anaesthetic stored in glass ampoules in phenol became contaminated through invisible cracks, paralysing two patients.', p: 'Defendants are judged by the state of knowledge at the time; the risk was not then known, so no breach. “We must not look at the 1947 accident with 1954 spectacles.”' },
  { id: 'boltonstone', n: 'Bolton v Stone', y: 1951, a: 'TO', t: '2.2.2b', c: 'HL', f: 'A cricket ball was hit out of the ground and struck Miss Stone. Balls had left the ground only about six times in 30 years.', p: 'No breach: the risk was so small that a reasonable person would not have taken further precautions.' },
  { id: 'haley', n: 'Haley v London Electricity Board', y: 1965, a: 'TO', t: '2.2.2b', c: 'HL', f: 'A blind man tripped over a small warning hammer left by workmen at a trench on the pavement; it was adequate for sighted people.', p: 'Breach: it was foreseeable that blind people would use the pavement, and precautions should reflect that.' },
  { id: 'paris', n: 'Paris v Stepney Borough Council', y: 1951, a: 'TO', t: '2.2.2b', c: 'HL', f: 'A garage worker who was already blind in one eye was not given goggles; a metal chip blinded his good eye.', p: 'Breach: the seriousness of potential harm to this particular employee required extra precautions.' },
  { id: 'latimer', n: 'Latimer v AEC', y: 1953, a: 'TO', t: '2.2.2b', c: 'HL', f: 'A factory floor flooded and became slippery. The employer spread sawdust but not everywhere; a worker slipped. The only way to remove all risk was to close the factory.', p: 'No breach: the cost and practicality of further precautions (closing the factory) outweighed the small risk.' },
  { id: 'watthert', n: 'Watt v Hertfordshire County Council', y: 1954, a: 'TO', t: '2.2.2b', c: 'CA', f: 'Firefighters rushed to rescue a woman trapped under a lorry, carrying a heavy jack on a lorry not designed for it. It slipped and injured a firefighter.', p: 'No breach: the social utility of saving life justified taking greater risks. Emergency services are not expected to meet the same standard in emergencies.' },
  { id: 'scottdocks', n: 'Scott v London and St Katherine Docks', y: 1865, a: 'TO', t: '2.2.2b', c: 'Court of Exchequer Chamber', f: 'Six bags of sugar fell from a crane in the defendant’s warehouse onto a customs officer.', p: 'Res ipsa loquitur (“the thing speaks for itself”): where the thing was under the defendant’s control and the accident would not normally happen without negligence, breach can be inferred.' },
  // causation and remoteness
  { id: 'barnett', n: 'Barnett v Chelsea and Kensington Hospital Management Committee', y: 1969, a: 'TO', t: '2.2.2c', c: 'HC', f: 'Three night-watchmen went to hospital after drinking tea and vomiting. The doctor sent them home without examination. One died of arsenic poisoning.', p: 'The hospital was in breach, but not liable: he would have died even with proper treatment, so the breach failed the “but for” test.' },
  { id: 'mcghee', n: 'McGhee v National Coal Board', y: 1973, a: 'TO', t: '2.2.2c', c: 'HL', f: 'A worker got dermatitis after cleaning out brick kilns; the employer did not provide showers, so he cycled home caked in brick dust.', p: 'The breach materially increased the risk of injury, which was enough for causation.' },
  { id: 'wilsher', n: 'Wilsher v Essex Area Health Authority', y: 1988, a: 'TO', t: '2.2.2c', c: 'HL', f: 'A premature baby was given excess oxygen and became blind. There were five possible causes of the condition, only one of which was the negligence.', p: 'The claimant must prove on the balance of probabilities that the breach caused or materially contributed to the harm; McGhee does not apply where there are several different possible causes.' },
  { id: 'fairchild', n: 'Fairchild v Glenhaven Funeral Services', y: 2002, a: 'TO', t: '2.2.2c', c: 'HL', f: 'Workers developed mesothelioma after exposure to asbestos with several employers; it could not be proved which exposure caused the disease.', p: 'Each employer that materially increased the risk was liable. A special exception for mesothelioma (now reinforced by the Compensation Act 2006 s3).' },
  { id: 'baileymod', n: 'Bailey v Ministry of Defence', y: 2008, a: 'TO', t: '2.2.2c', c: 'CA', f: 'A patient was negligently cared for after surgery and was also weakened by pancreatitis (not negligent). Weakened, she choked on vomit and suffered brain damage.', p: 'Where the negligence made a material contribution (more than negligible) to the harm, the defendant is liable in full.' },
  { id: 'knightley', n: 'Knightley v Johns', y: 1982, a: 'TO', t: '2.2.2c', c: 'CA', f: 'The defendant negligently caused a crash in a tunnel. A police inspector negligently ordered an officer to ride back against the traffic, and the officer was hit.', p: 'The inspector’s negligent order was a new intervening act (novus actus interveniens) that broke the chain of causation.' },
  { id: 'mckew', n: 'McKew v Holland & Hannen & Cubitts', y: 1969, a: 'TO', t: '2.2.2c', c: 'HL', f: 'The claimant’s leg was weakened by the defendant’s negligence. He later went down a steep staircase without a handrail, carrying a child, and his leg gave way.', p: 'His own unreasonable conduct broke the chain of causation.' },
  { id: 'wieland', n: 'Wieland v Cyril Lord Carpets', y: 1969, a: 'TO', t: '2.2.2c', c: 'HC', f: 'The claimant had to wear a neck collar after an injury, so could not use her bifocal glasses properly, and fell down stairs.', p: 'Chain not broken: her conduct was reasonable and the fall was a foreseeable consequence.' },
  { id: 'wagonmound', n: 'Overseas Tankship v Morts Dock (The Wagon Mound No 1)', y: 1961, a: 'TO', t: '2.2.2c', c: 'Privy Council', f: 'Oil spilled from a ship into Sydney Harbour. Days later, sparks from welding on a wharf ignited cotton waste floating in the oil and the wharf burned down.', p: 'The defendant is liable only for damage of a kind that was reasonably foreseeable. Fire damage was not foreseeable (oil on water was thought not to ignite). Rejected the “direct consequence” test in Re Polemis (1921).' },
  { id: 'hughes', n: 'Hughes v Lord Advocate', y: 1963, a: 'TO', t: '2.2.2c', c: 'HL', f: 'Workmen left an open manhole covered by a tent with paraffin lamps. Two boys took a lamp into the hole; it fell and caused an unexpected explosion, burning one boy.', p: 'Liable: the type of harm (burns) was foreseeable, even if the precise way it happened was not.' },
  { id: 'doughty', n: 'Doughty v Turner Manufacturing', y: 1964, a: 'TO', t: '2.2.2c', c: 'CA', f: 'An asbestos-cement lid fell into a vat of molten metal. A chemical reaction, unknown to science at the time, caused an eruption that burned the claimant.', p: 'Not liable: splashing was foreseeable, but an eruption caused by a chemical reaction was a different kind of harm.' },
  { id: 'jolley', n: 'Jolley v Sutton London Borough Council', y: 2000, a: 'TO', t: '2.2.2c', c: 'HL', f: 'A council left an abandoned, rotting boat on its land. Two boys propped it up to repair it; it fell on one, causing serious spinal injuries.', p: 'Liable: some kind of injury from children meddling with the boat was foreseeable; the precise way need not be. The ingenuity of children should be anticipated.' },
  { id: 'smithleech', n: 'Smith v Leech Brain & Co', y: 1962, a: 'TO', t: '2.2.2c', c: 'HC', f: 'A worker was burned on the lip by molten metal because of inadequate protection. The burn triggered a pre-malignant cancer and he died.', p: 'The “thin skull” rule: you take your victim as you find them. Once some injury is foreseeable, the defendant is liable for its full extent.' },
  { id: 'bradford', n: 'Bradford v Robinson Rentals', y: 1967, a: 'TO', t: '2.2.2c', c: 'HC', f: 'An employee was sent on a long journey in severe winter weather in a van with no heater and suffered frostbite.', p: 'Liable: injury from cold was foreseeable, so frostbite was within the type of harm, even though rare.' }
]);

/* ---------- 2.2.1 Rules and theory ---------- */
TOPICS.push({
  id: '2.2.1', unit: 'TO', ref: '2.2.1', title: 'Tort: rules and theory',
  short: 'Origins, categories, fault v strict liability, corrective and retributive justice, economic theory, criticisms',
  summary: 'A tort is a civil wrong, other than a breach of contract, for which the remedy is usually damages. Tort law protects interests in the person, property, land and reputation. This topic covers the origins and categories of tort, fault and strict liability, the theories that justify tort — corrective justice, economic efficiency and retribution — and criticisms of the tort system as a way of compensating injured people.',
  spec: ['Origins of the law of tort; categories of tort', 'Definition of tort; fault liability v strict liability', 'Economic justification of tort; corrective justice', 'Retributive justice', 'Criticisms of the tort system'],
  learn: [
    { h: 'What is a tort?', html: `
<div class="box def"><b class="lbl">Definition</b><p>A <b>tort</b> is a civil wrong, independent of contract, where the defendant breaches a duty fixed by law towards persons generally, and the remedy is usually unliquidated damages (Winfield).</p></div>
<p>Unlike contract, tort duties are imposed by law, not agreed. Unlike crime, the aim is compensation, and the claimant (not the state) brings the action.</p>
<p><b>Origins:</b> tort grew from medieval writs — <b>trespass</b> (direct, forcible harm) and <b>trespass on the case</b> (indirect harm), from which negligence developed. Modern negligence was established in [[c:donoghue]].</p>
<h4>Categories</h4><ul><li><b>Negligence</b> — careless harm to people, property and (sometimes) economic interests.</li><li><b>Occupiers’ liability</b> — statutory duties of those who control premises.</li><li><b>Torts connected to land</b> — trespass to land, private and public nuisance, Rylands v Fletcher.</li><li><b>Trespass to the person</b> — assault, battery, false imprisonment.</li><li><b>Defamation</b>, <b>harassment</b>, <b>misuse of private information</b>.</li><li><b>Product liability</b> (Consumer Protection Act 1987), <b>breach of statutory duty</b>.</li></ul>` },
    { h: 'Fault and strict liability', html: `
<ul><li><b>Fault-based liability</b>: the defendant must have acted intentionally or carelessly — negligence, occupiers’ liability, most nuisance.</li>
<li><b>Strict liability</b>: liability without proof of fault — Rylands v Fletcher, the Consumer Protection Act 1987 (defective products), liability for dangerous animals (Animals Act 1971), and <b>vicarious liability</b> (employer liable for employees’ torts).</li>
<li>Trespass torts are <b>actionable per se</b> — no need to prove damage.</li></ul>
<p>Fault fits ideas of personal responsibility and deterrence; strict liability places the risk on those who create dangers or profit from activities, and makes compensation easier.</p>` },
    { h: 'Theories of tort', html: `
<div class="tbl"><table><tr><th>Theory</th><th>Idea</th><th>Where it shows</th></tr>
<tr><td><b>Corrective justice</b></td><td>From Aristotle: a wrongdoer who upsets the balance between two people must restore it by compensating the victim (Weinrib)</td><td>Compensatory damages restore the claimant’s position; fault-based liability</td></tr>
<tr><td><b>Economic (efficiency) theory</b></td><td>Tort should minimise the total cost of accidents and precautions (Calabresi; Posner). Judge Learned Hand’s formula: negligent if the burden of precautions (B) is less than probability (P) × loss (L)</td><td>Breach factors: probability, seriousness, cost of precautions ([[c:boltonstone]], [[c:latimer]]); insurance spreading loss; strict liability for risky businesses</td></tr>
<tr><td><b>Retributive justice</b></td><td>Wrongdoers deserve to be punished in proportion to their wrongdoing</td><td>Exemplary damages, rarely available ([[c:rookes]]); aggravated damages for injured feelings</td></tr>
<tr><td><b>Deterrence</b></td><td>The threat of liability encourages care</td><td>Clinical and workplace safety standards; but insurance weakens deterrence</td></tr>
<tr><td><b>Loss distribution</b></td><td>Spread losses widely through insurance and prices</td><td>Vicarious liability; compulsory motor and employers’ liability insurance</td></tr></table></div>` },
    { h: 'Criticisms of the tort system', html: `
<ul><li><b>A “lottery”</b>: two people with identical injuries get very different results depending on whether they can prove fault (Atiyah, <i>The Damages Lottery</i>, 1997).</li>
<li><b>Cost and delay</b>: legal costs can be a large proportion of damages; complex cases take years. NHS clinical negligence claims cost billions of pounds a year.</li>
<li><b>Difficulty of proof</b>: causation and breach are hard to prove, especially in medical cases.</li>
<li><b>Insurance</b> means the wrongdoer rarely pays personally — weakening deterrence and corrective justice.</li>
<li><b>“Compensation culture”</b>: concern that fear of litigation stops useful activities — the Compensation Act 2006 s1 and the Social Action, Responsibility and Heroism Act 2015 respond (though the Better Regulation Task Force (2004) called the compensation culture a myth). The Civil Liability Act 2018 fixed tariffs for whiplash claims.</li>
<li><b>Alternatives</b>: no-fault schemes such as New Zealand’s Accident Compensation Corporation; the Pearson Commission (1978) recommended partial no-fault compensation, which was not implemented; the Criminal Injuries Compensation Scheme; NHS Resolution’s early resolution work.</li></ul>` }
  ],
  debate: [{ q: 'Is the tort system a fair and effective way to compensate injured people?', for: ['Corrective justice — the wrongdoer pays for the harm caused.', 'Full compensation tailored to the individual (loss of earnings, care).', 'Deters careless conduct and raises safety standards.', 'Independent courts decide; reasoned judgments.'], ag: ['A “damages lottery” — depends on proving fault.', 'Slow and expensive; lawyers’ costs.', 'Insurance weakens deterrence and corrective justice.', 'Many victims (illness, no-fault accidents) get nothing.', 'No-fault schemes (New Zealand) compensate more people more quickly.'] }],
  cases: ['donoghue', 'rookes', 'boltonstone', 'latimer'],
  worked: [],
  pitfalls: ['Confusing tort with crime or contract.', 'Describing theories without linking to actual rules (breach factors, damages).', 'Saying all torts require proof of damage — trespass is actionable per se.'],
  cards: [
    ['Definition of tort (Winfield)?', 'A civil wrong where a duty fixed by law towards persons generally is breached; remedy usually damages.'],
    ['Fault v strict liability?', 'Fault: must prove intention or carelessness. Strict: liability without fault (Rylands, CPA 1987, vicarious liability).'],
    ['Corrective justice?', 'The wrongdoer restores the balance by compensating the victim (Aristotle, Weinrib).'],
    ['Learned Hand formula?', 'Negligent if B (burden of precautions) < P (probability) × L (loss).'],
    ['What are exemplary damages?', 'Punitive damages — only in limited categories (Rookes v Barnard).'],
    ['“Damages lottery”?', 'Atiyah’s criticism that compensation depends on luck in proving fault.'],
    ['Compensation Act 2006 s1?', 'Courts may consider whether requiring precautions would prevent desirable activities.'],
    ['No-fault example?', 'New Zealand’s Accident Compensation scheme.']
  ],
  quiz: [
    { q: 'Which is an example of strict liability in tort?', o: ['Rylands v Fletcher', 'Negligence', 'Occupiers’ liability to visitors', 'Negligent misstatement'], x: 'No proof of fault needed.' },
    { q: 'The Learned Hand formula is associated with…', o: ['economic theory of tort', 'retributive justice', 'natural law', 'corrective justice only'], x: 'B < PL.' },
    { q: 'Exemplary damages in tort are…', o: ['available only in limited categories', 'awarded in every case', 'the same as compensatory damages', 'abolished'], x: 'Rookes v Barnard.' },
    { q: 'The criticism that compensation depends on luck is called…', o: ['the damages lottery', 'the floodgates argument', 'the thin skull rule', 'res ipsa loquitur'], x: 'Atiyah.' },
    { q: 'Which statute aims to reduce the “compensation culture” by protecting desirable activities?', o: ['Compensation Act 2006', 'Occupiers’ Liability Act 1957', 'Consumer Protection Act 1987', 'Law Reform (Contributory Negligence) Act 1945'], x: 's1.' }
  ],
  exam: [{ q: 'Analyse and evaluate whether the tort system achieves corrective justice. [25]', m: 25, ms: ['meaning of corrective justice — Aristotle/Weinrib', 'compensatory damages restore claimant', 'fault liability and breach standards', 'strict and vicarious liability depart from it', 'insurance — defendant rarely pays', 'damages lottery / uncompensated victims', 'economic and deterrence rationales', 'retributive elements — exemplary damages', 'reforms / no-fault alternatives', 'conclusion'] }],
  tools: ['tortsort']
});

/* ---------- 2.2.2a Duty of care ---------- */
TOPICS.push({
  id: '2.2.2a', unit: 'TO', ref: '2.2.2', title: 'Negligence: duty of care',
  short: 'Donoghue v Stevenson and the neighbour principle, Caparo, Robinson, policy, injury and property damage',
  summary: 'Negligence is the most important tort. To succeed, the claimant must prove the defendant owed them a duty of care, breached it, and caused damage that was not too remote. This topic covers the first element: when the law recognises a duty of care for injury to people and damage to property, from Lord Atkin’s neighbour principle to the modern approach in Caparo and Robinson.',
  spec: ['Duty of care for injury to people and damage to property', 'The neighbour principle: Donoghue v Stevenson', 'The Caparo test: foreseeability, proximity, fair just and reasonable', 'The modern incremental approach: Robinson v CC West Yorkshire', 'Policy considerations; public bodies and omissions'],
  learn: [
    { h: 'The neighbour principle', html: `
<p>Before 1932, duties of care existed only in specific situations (contract, or dangerous things). In [[c:donoghue]] the House of Lords created a general principle. Lord Atkin said:</p>
<div class="box stat"><b class="lbl">Lord Atkin</b><p>“You must take reasonable care to avoid acts or omissions which you can reasonably foresee would be likely to injure your neighbour. Who, then, in law, is my neighbour? … persons who are so closely and directly affected by my act that I ought reasonably to have them in contemplation as being so affected when I am directing my mind to the acts or omissions which are called in question.”</p></div>
<p>Donoghue also established that a <b>manufacturer owes a duty to the ultimate consumer</b>, even without a contract.</p>` },
    { h: 'From Anns to Caparo', html: `
<p>In <i>Anns v Merton LBC</i> (1978) the House of Lords created a broad two-stage test that expanded liability. It was criticised as opening the floodgates and overruled in <i>Murphy v Brentwood DC</i> (1990).</p>
<div class="box def"><b class="lbl">Caparo Industries v Dickman (1990)</b><ol><li><b>Reasonable foreseeability</b> of damage to the claimant (or a class the claimant is in) — [[c:bourhill]] (not foreseeable); [[c:haley]].</li><li><b>Proximity</b> of relationship — physical, relational or circumstantial closeness — [[c:hillccwy]] (no proximity with one of many potential victims).</li><li>It is <b>fair, just and reasonable</b> to impose a duty — policy: floodgates, defensive practices, insurance, public resources — [[c:hillccwy]]; <i>Mulcahy v MoD</i> (1996, no duty in battle conditions).</li></ol></div>
<p>[[c:caparo]] also stressed an <b>incremental</b> approach: develop new duties by analogy with established ones.</p>` },
    { h: 'The modern approach: Robinson (2018)', html: `
<p>In [[c:robinson]] the Supreme Court clarified that Caparo is <b>not</b> a three-stage test applied in every case:</p>
<ul><li>Where a situation falls within an <b>established category</b> (e.g. road users, doctor and patient, employer and employee, manufacturer and consumer, causing physical injury by positive acts), the duty exists — no need to apply Caparo.</li>
<li>In <b>novel</b> situations, courts develop the law <b>incrementally by analogy</b> with decided cases, and consider whether it is fair, just and reasonable.</li>
<li>Public authorities, including the police, owe a duty like anyone else when their <b>positive acts</b> cause foreseeable physical injury — but generally not for <b>omissions</b> (failing to protect someone from harm by third parties or nature), unless they created the danger or assumed responsibility — [[c:michael]]; <i>N v Poole BC</i> (2019).</li></ul>
<div class="box tip"><b class="lbl">Exam technique</b><p>In a Component 2 scenario involving ordinary physical injury (a car crash, a workplace accident), say it is an established duty situation (Robinson), identify the analogous case, and move on quickly. Use Caparo in full only for novel situations.</p></div>` },
    { h: 'Duty for property damage', html: `
<p>Carelessly causing physical damage to someone’s property is an established duty situation — e.g. a negligent driver damaging a parked car, or a contractor damaging a neighbour’s house. The duty covers the property itself and consequential loss (e.g. the cost of hiring a replacement car). <b>Pure economic loss</b> (financial loss not flowing from physical damage) is generally <b>not</b> recoverable (<i>Spartan Steel v Martin</i>, 1973), except for negligent misstatements ([[c:hedleybyrne]]).</p>
<p>Regulators and certifiers of property usually owe no duty to third parties for property damage where it is not fair, just and reasonable (<i>Marc Rich v Bishop Rock Marine (The Nicholas H)</i>, 1995).</p>` },
    { h: 'Public bodies and policy', html: `
<ul><li><b>Police</b>: no general duty to protect the public from criminals ([[c:hillccwy]], [[c:michael]]) — but a duty for their own positive acts ([[c:robinson]]).</li>
<li><b>Ambulance service</b>: a duty once a call is accepted ([[c:kent]]). Fire brigades are not liable merely for failing to respond or fight a fire well (<i>Capital and Counties v Hampshire CC</i>, 1997) unless they make things worse.</li>
<li><b>Regulatory bodies</b> that control safety may owe a duty ([[c:watsonbbbc]]).</li>
<li>Policy arguments: the floodgates of litigation; defensive practices; diverting public money; existence of other remedies.</li></ul>` }
  ],
  debate: [{ q: 'Should the police owe a duty of care to victims of crime?', for: ['Michael: a clear 999 call from an identified victim creates proximity.', 'Accountability — other public services (ambulances) owe duties.', 'Article 2 ECHR claims are already possible, so negligence would be consistent.', 'Robinson shows police immunity was never absolute.'], ag: ['Hill: defensive policing and diversion of resources.', 'Limitless potential claimants.', 'Operational decisions under pressure are hard to judge.', 'Human rights claims already fill the gap for the most serious failures.'] }],
  cases: ['donoghue', 'caparo', 'robinson', 'bourhill', 'haley', 'hillccwy', 'michael', 'kent', 'watsonbbbc', 'hedleybyrne'],
  worked: [{ q: '<b>Scenario.</b> Zoe, a delivery driver, is looking at her phone when she mounts the pavement, hitting Amir and damaging a shop window. Advise whether Zoe owes a duty of care.', s: ['<b class="st">Established category</b>Road users owe a duty to other road users and pedestrians not to cause physical injury or property damage by careless driving — an established duty situation (Robinson v CC West Yorkshire). No need to apply the Caparo test in full.', '<b class="st">Neighbour</b>Amir and the shop owner are people “so closely and directly affected” that Zoe ought to have them in mind (Donoghue v Stevenson).', '<b class="st">If Caparo applied</b>Injury and damage are foreseeable; there is physical proximity; it is fair, just and reasonable, as drivers are insured.', '<b class="st">Next</b>Duty is owed to both Amir (personal injury) and the shop owner (property damage). Go on to breach, causation and remoteness.'], a: 'Duty owed — established category (Robinson).' }],
  pitfalls: ['Applying the full Caparo test to every scenario — Robinson says use established categories first.', 'Saying the police can never be liable in negligence.', 'Confusing pure economic loss with property damage.', 'Forgetting that Donoghue established the manufacturer–consumer duty as well as the neighbour principle.'],
  cards: [
    ['Lord Atkin’s neighbour principle?', 'Take reasonable care to avoid acts or omissions you can reasonably foresee would be likely to injure your neighbour.'],
    ['Who is my neighbour?', 'Persons so closely and directly affected by my act that I ought reasonably to have them in contemplation.'],
    ['Three parts of the Caparo test?', 'Foreseeability; proximity; fair, just and reasonable.'],
    ['Robinson v CC West Yorkshire (2018)?', 'Caparo is not a universal test; use established categories and incremental development; police liable for positive acts.'],
    ['Bourhill v Young (1943)?', 'No duty to an unforeseeable claimant outside the area of danger.'],
    ['Hill v CC West Yorkshire (1988)?', 'No duty — no proximity with a victim of the Yorkshire Ripper; policy.'],
    ['Michael v CC South Wales (2015)?', 'No duty for failing to protect a caller from a third party.'],
    ['Kent v Griffiths (2000)?', 'Ambulance service owes a duty once a call is accepted.'],
    ['Why was Anns v Merton overruled?', 'Its broad test expanded liability too far — overruled by Murphy v Brentwood (1990).'],
    ['What is pure economic loss?', 'Financial loss not flowing from physical damage — generally not recoverable in negligence.']
  ],
  quiz: [
    { q: 'The neighbour principle was set out by…', o: ['Lord Atkin in Donoghue v Stevenson', 'Lord Denning in Nettleship v Weston', 'Lord Bridge in Caparo', 'Lord Reed in Robinson'], x: '1932.' },
    { q: 'Which is NOT part of the Caparo test?', o: ['The claimant must have a contract with the defendant', 'Reasonable foreseeability', 'Proximity', 'Fair, just and reasonable'], x: 'No contract needed — Donoghue.' },
    { q: 'In Robinson v CC West Yorkshire the Supreme Court held that…', o: ['police owe a duty for positive acts that foreseeably cause physical injury', 'police can never be sued', 'Caparo must be applied in every case', 'pure economic loss is always recoverable'], x: 'Established categories first.' },
    { q: 'Bourhill v Young failed because the claimant was…', o: ['not a foreseeable claimant', 'contributorily negligent', 'a trespasser', 'volenti'], x: 'Outside the area of danger.' },
    { q: 'Which case held that the ambulance service owed a duty of care?', o: ['Kent v Griffiths', 'Hill v CCWY', 'Michael v CC South Wales', 'Capital and Counties'], x: 'Once a call is accepted.' },
    { q: 'A duty of care for physical damage to property caused by careless driving is…', o: ['an established duty situation', 'a novel situation', 'impossible', 'pure economic loss'], x: 'Robinson.' },
    { q: 'Mrs Donoghue could sue the manufacturer even though…', o: ['she had no contract with the manufacturer', 'she had paid for the drink', 'the café owner was at fault', 'the snail was visible'], x: 'Her friend bought the drink.' },
    { q: 'Which case imposed a duty on a sports regulator for inadequate ringside medical provision?', o: ['Watson v British Boxing Board of Control', 'Wells v Cooper', 'Mullin v Richards', 'Caparo v Dickman'], x: '2001.' }
  ],
  exam: [{ q: 'Explain the development of the duty of care in negligence. [10]', m: 10, ms: ['Donoghue v Stevenson — neighbour principle; manufacturer', 'Anns two-stage test and Murphy', 'Caparo — three stages explained', 'foreseeability — Bourhill / Haley', 'proximity — Hill', 'fair, just and reasonable — policy', 'Robinson — established categories; incremental', 'omissions and public bodies — Michael, Kent'] }],
  tools: ['dutytree']
});

/* ---------- 2.2.2b Breach ---------- */
TOPICS.push({
  id: '2.2.2b', unit: 'TO', ref: '2.2.2', title: 'Negligence: breach of duty',
  short: 'The reasonable person, the objective standard, special standards, risk factors, res ipsa loquitur',
  summary: 'Breach asks whether the defendant fell below the standard of care. The standard is objective — the reasonable person — but adjusted for professionals, children and people doing amateur tasks. Courts then weigh risk factors: how likely and how serious the harm was, the cost of precautions, and the social value of the activity.',
  spec: ['The reasonable man: the objective standard of care', 'Special standards: learners, children, professionals (Bolam, Bolitho, Montgomery), amateurs', 'Risk factors: probability of harm, seriousness, cost and practicality of precautions, social utility, state of knowledge', 'The Compensation Act 2006 and the Social Action, Responsibility and Heroism Act 2015', 'Proving breach: res ipsa loquitur'],
  learn: [
    { h: 'The objective standard', html: `
<p>Negligence is “the omission to do something which a reasonable man … would do, or doing something which a prudent and reasonable man would not do” ([[c:blyth]]). The standard is <b>objective</b>: the defendant’s own inexperience, personality or best efforts do not matter.</p>
<ul><li><b>Learners</b> are judged as competent, qualified people doing the task — [[c:nettleship]].</li>
<li><b>Children</b> are judged by the standard of a reasonable child of the same age — [[c:mullin]].</li>
<li><b>Amateurs</b> doing DIY are judged as reasonably competent amateurs — [[c:wellscooper]].</li>
<li><b>Professionals</b>: the standard of a reasonably competent member of that profession — [[c:bolam]], qualified by [[c:bolitho]] (the opinion must be logical). For advising on risks, [[c:montgomery]] requires disclosure of <b>material risks</b>.</li>
<li><b>State of knowledge</b> at the time — [[c:roe]].</li></ul>` },
    { h: 'Risk factors', html: `
<div class="tbl"><table><tr><th>Factor</th><th>Effect</th><th>Case</th></tr>
<tr><td><b>Probability of harm</b></td><td>Low probability → fewer precautions needed</td><td>[[c:boltonstone]] (no breach); contrast [[c:millerjackson]] (balls often left the ground)</td></tr>
<tr><td><b>Foreseeable vulnerability</b></td><td>Precautions must suit foreseeable vulnerable people</td><td>[[c:haley]]</td></tr>
<tr><td><b>Seriousness of harm</b></td><td>Greater potential harm → more precautions</td><td>[[c:paris]]</td></tr>
<tr><td><b>Cost and practicality of precautions</b></td><td>Not required to take precautions out of proportion to the risk</td><td>[[c:latimer]]</td></tr>
<tr><td><b>Social utility / emergency</b></td><td>Valuable or urgent activities justify some risks</td><td>[[c:watthert]]; Compensation Act 2006 s1; SARAH Act 2015</td></tr>
<tr><td><b>Common practice</b></td><td>Following standard practice is evidence of reasonableness but not conclusive</td><td>[[c:bolitho]]</td></tr></table></div>
<p>The <b>Compensation Act 2006 s1</b> lets courts consider whether requiring precautions might prevent a <b>desirable activity</b>. The <b>Social Action, Responsibility and Heroism Act 2015</b> requires courts to consider whether the defendant was acting for the benefit of society, had a generally responsible approach to safety, or was intervening in an emergency.</p>` },
    { h: 'Proving breach', html: `
<p>The claimant must prove breach on the balance of probabilities. Two aids:</p>
<ul><li><b>Res ipsa loquitur</b> (“the thing speaks for itself”): where (1) the thing causing harm was under the defendant’s control, (2) the accident would not normally happen without negligence, and (3) there is no other explanation, the court may infer negligence — [[c:scottdocks]]. The defendant must then explain.</li>
<li><b>Civil Evidence Act 1968 s11</b>: a relevant criminal conviction (e.g. careless driving) is evidence of negligence.</li></ul>` }
  ],
  debate: [{ q: 'Is the Bolam test too protective of doctors?', for: ['Doctors could escape liability by finding any body of opinion to support them (the pre-Bolitho criticism).', 'Judges defer to the profession instead of setting the standard.', 'Montgomery recognised that patients, not doctors, should decide about risks.'], ag: ['Bolitho lets judges reject illogical opinion.', 'Medicine involves reasonable differences of opinion; judges are not experts.', 'Protects against defensive medicine and a rise in claims costing the NHS billions.'] }],
  cases: ['blyth', 'nettleship', 'mullin', 'wellscooper', 'bolam', 'bolitho', 'montgomery', 'roe', 'boltonstone', 'millerjackson', 'haley', 'paris', 'latimer', 'watthert', 'scottdocks'],
  worked: [{ q: '<b>Scenario.</b> A council-run leisure centre lets a 16-year-old lifeguard supervise a pool alone. A swimmer with a known heart condition collapses; the lifeguard is slow to react because he is on his phone. Advise whether there is a breach of duty.', s: ['<b class="st">Standard</b>The lifeguard is judged objectively by the standard of a reasonably competent lifeguard, not a reasonable 16-year-old — he is doing a professional task (Nettleship v Weston, rather than Mullin v Richards).', '<b class="st">Probability and seriousness</b>Collapses in pools are foreseeable and the potential harm (death) is very serious — more precautions are needed (Paris v Stepney). The swimmer’s known condition increases the risk.', '<b class="st">Cost</b>Paying attention costs nothing; providing a second lifeguard is a modest, practical precaution (contrast Latimer).', '<b class="st">Conclusion</b>Being on his phone falls below the standard of a reasonable lifeguard — breach. The council may also be in breach for leaving him alone, and is vicariously liable for him.'], a: 'Breach — objective standard of a competent lifeguard.' }],
  pitfalls: ['Judging the defendant by what they personally could do — the standard is objective.', 'Listing risk factors without applying them to the facts.', 'Using Bolam for disclosure of risks — Montgomery applies.', 'Forgetting res ipsa loquitur when the facts give little evidence of how an accident happened.'],
  cards: [
    ['Blyth v Birmingham Waterworks (1856)?', 'Definition of negligence — failing to do what a reasonable man would do.'],
    ['Nettleship v Weston (1971)?', 'Learner drivers judged by the standard of a competent driver.'],
    ['Mullin v Richards (1998)?', 'Children judged by the standard of a reasonable child of the same age.'],
    ['Bolam test?', 'Not negligent if acting in accordance with a responsible body of professional opinion.'],
    ['Bolitho (1997)?', 'The body of opinion must withstand logical analysis.'],
    ['Montgomery (2015)?', 'Doctors must disclose material risks — patient autonomy.'],
    ['Bolton v Stone (1951)?', 'Very low risk — no breach.'],
    ['Paris v Stepney (1951)?', 'Serious potential harm to a vulnerable worker — breach.'],
    ['Latimer v AEC (1953)?', 'Cost of precautions out of proportion to the risk — no breach.'],
    ['Watt v Hertfordshire (1954)?', 'Social utility of saving life justified risk.'],
    ['Roe v Minister of Health (1954)?', 'Judged by knowledge at the time.'],
    ['Res ipsa loquitur?', 'The thing speaks for itself — negligence inferred from the circumstances (Scott v London & St Katherine Docks).'],
    ['Compensation Act 2006 s1?', 'Courts may consider whether precautions would prevent desirable activities.']
  ],
  quiz: [
    { q: 'A learner driver is judged by the standard of…', o: ['a reasonably competent qualified driver', 'a reasonable learner', 'their own ability', 'a professional racing driver'], x: 'Nettleship v Weston.' },
    { q: 'In Bolton v Stone there was no breach because…', o: ['the risk of harm was very small', 'the precautions were cheap', 'the claimant was a trespasser', 'cricket is socially useful'], x: 'About six balls in 30 years.' },
    { q: 'Paris v Stepney shows that…', o: ['greater precautions are needed where the potential harm is more serious', 'the cost of precautions is irrelevant', 'employers are strictly liable', 'goggles are never required'], x: 'One-eyed worker.' },
    { q: 'The Bolam test applies to…', o: ['professionals exercising a special skill', 'children', 'learner drivers', 'occupiers'], x: 'Qualified by Bolitho.' },
    { q: 'Montgomery v Lanarkshire concerns…', o: ['a doctor’s duty to disclose material risks', 'causation in asbestos cases', 'the standard of a child', 'police immunity'], x: 'Patient autonomy.' },
    { q: 'Watt v Hertfordshire CC held no breach mainly because of…', o: ['the social utility of saving life in an emergency', 'the low probability of harm', 'the claimant’s consent', 'the thin skull rule'], x: 'Emergency services.' },
    { q: 'Res ipsa loquitur means…', o: ['the thing speaks for itself', 'let the buyer beware', 'no one is judge in their own cause', 'to a willing person no injury is done'], x: 'Inferring negligence.' },
    { q: 'In Roe v Minister of Health there was no breach because…', o: ['the risk was unknown at the time', 'the patients consented', 'the hospital was a public body', 'the harm was minor'], x: '“1954 spectacles.”' },
    { q: 'A DIY enthusiast fixing a door handle is judged as…', o: ['a reasonably competent amateur', 'a professional carpenter', 'a reasonable child', 'their own standard'], x: 'Wells v Cooper.' }
  ],
  exam: [{ q: 'Explain the factors the courts consider when deciding whether there has been a breach of duty. [10]', m: 10, ms: ['objective standard — Blyth', 'special standards — Nettleship, Mullin, Bolam/Bolitho', 'probability — Bolton v Stone', 'vulnerability — Haley', 'seriousness — Paris', 'cost/practicality — Latimer', 'social utility — Watt; Compensation Act 2006 / SARAH 2015', 'state of knowledge — Roe; res ipsa'] }],
  tools: ['breachsort']
});

/* ---------- 2.2.2c Causation and remoteness ---------- */
TOPICS.push({
  id: '2.2.2c', unit: 'TO', ref: '2.2.2', title: 'Negligence: causation and remoteness',
  short: 'The but-for test, material contribution, intervening acts, remoteness (Wagon Mound), thin skull rule',
  summary: 'Even if the defendant breached a duty, they are only liable if the breach caused the claimant’s damage, in fact and in law, and the damage was not too remote. Factual causation uses the “but for” test, with special rules for multiple causes. Legal causation asks whether an intervening act broke the chain. Remoteness limits liability to damage of a reasonably foreseeable kind.',
  spec: ['Causation of damage: the “but for” test', 'Multiple causes: material contribution and material increase in risk', 'Legal causation: the effect of an intervening act (novus actus interveniens)', 'Remoteness of damage: reasonable foreseeability (The Wagon Mound)', 'Type of harm and manner of harm; the thin skull rule'],
  learn: [
    { h: 'Factual causation', html: `
<div class="box def"><b class="lbl">The “but for” test</b><p>Would the claimant have suffered the damage <b>but for</b> the defendant’s breach? If the damage would have happened anyway, the breach did not cause it — [[c:barnett]].</p></div>
<h4>Multiple causes</h4><ul><li><b>Material increase in risk</b> — [[c:mcghee]].</li><li>But where there are several different possible causes, the claimant must prove the breach was a cause on the balance of probabilities — [[c:wilsher]].</li><li><b>Mesothelioma</b> exception — [[c:fairchild]] (and Compensation Act 2006 s3).</li><li><b>Material contribution</b> to the harm (more than negligible) is enough — [[c:baileymod]].</li><li>Loss of a chance of a better medical outcome is not recoverable in personal injury (<i>Hotson v East Berkshire AHA</i>, 1987; <i>Gregg v Scott</i>, 2005).</li></ul>` },
    { h: 'Legal causation: intervening acts', html: `
<p>A new act can break the chain of causation (<i>novus actus interveniens</i>) so the defendant is no longer liable for later harm.</p>
<ul><li><b>Act of a third party</b>: breaks the chain if it is unforeseeable or a free, deliberate and informed act, or highly negligent — [[c:knightley]]. Deliberate wrongdoing by others is rarely the defendant’s responsibility (<i>Lamb v Camden LBC</i>, 1981 — squatters).</li>
<li><b>Act of the claimant</b>: breaks the chain if wholly unreasonable — [[c:mckew]]; not if reasonable — [[c:wieland]]. Suicide in custody where the defendant had a duty to prevent it does not break the chain (<i>Reeves v MPC</i>, 2000).</li>
<li><b>Natural events</b>: break the chain only if unforeseeable and independent of the breach.</li>
<li>Rescuers acting reasonably do not break the chain (<i>Haynes v Harwood</i>, 1935).</li></ul>` },
    { h: 'Remoteness of damage', html: `
<p>In <i>Re Polemis</i> (1921) the defendant was liable for all <b>direct</b> consequences. This was replaced by the test in [[c:wagonmound]]: the defendant is only liable for damage of a <b>kind (type) that was reasonably foreseeable</b>.</p>
<ul><li>If the <b>type</b> of harm is foreseeable, it does not matter that the <b>way</b> it happened was not — [[c:hughes]]; [[c:jolley]]; [[c:bradford]].</li>
<li>If the harm is of a <b>different kind</b>, it is too remote — [[c:doughty]] (eruption v splash); <i>Tremain v Pike</i> (1969, rare Weil’s disease v rat bites).</li>
<li><b>The thin skull rule</b>: take your victim as you find them. Once some injury is foreseeable, the defendant is liable for its full <b>extent</b>, even if a pre-existing condition makes it much worse — [[c:smithleech]]. It extends to psychiatric vulnerability (<i>Page v Smith</i>, 1996).</li></ul>
<div class="box tip"><b class="lbl">Contrast with contract</b><p>Remoteness in tort (reasonably foreseeable kind of damage) is less strict than contract (“not unlikely” — The Heron II). Do not mix the tests.</p></div>` }
  ],
  debate: [{ q: 'Are the special causation rules (McGhee, Fairchild, Bailey) justified?', for: ['Victims of mesothelioma would otherwise get nothing because science cannot identify the fibre.', 'Defendants who created the risk should bear it rather than innocent claimants.', 'Material contribution reflects real medical uncertainty.'], ag: ['Departs from the but-for test and the balance of probabilities — uncertainty.', 'Defendants may pay for harm they did not cause.', 'Courts have struggled to limit the exceptions (Wilsher, Gregg v Scott).', 'Parliament had to intervene (Compensation Act 2006 s3).'] }],
  cases: ['barnett', 'mcghee', 'wilsher', 'fairchild', 'baileymod', 'knightley', 'mckew', 'wieland', 'wagonmound', 'hughes', 'doughty', 'jolley', 'smithleech', 'bradford'],
  worked: [{ q: '<b>Scenario.</b> Builders negligently leave a trench unfenced. Bea falls in and breaks her ankle. Because she has brittle bone disease, the break is far worse than normal. In hospital a nurse gives her the wrong drug, causing kidney damage. Advise on causation and remoteness.', s: ['<b class="st">But for</b>But for the unfenced trench, Bea would not have fallen — factual causation (Barnett).', '<b class="st">Remoteness</b>Physical injury from falling into a trench is a foreseeable kind of damage (Wagon Mound).', '<b class="st">Thin skull</b>Her brittle bones make the injury worse, but the builders take her as they find her (Smith v Leech Brain) — liable for the full extent of the fracture.', '<b class="st">Intervening act</b>Negligent medical treatment usually does not break the chain unless it is grossly negligent or palpably wrong. Giving the wrong drug may be a serious error: if so, the nurse (and hospital) are liable for the kidney damage, not the builders (Knightley v Johns by analogy).', '<b class="st">Conclude</b>Builders liable for the ankle injury in full; the kidney damage probably falls on the hospital.'], a: 'Builders liable for the full fracture (thin skull); kidney damage likely a novus actus.' }],
  pitfalls: ['Applying the contract remoteness test in tort.', 'Confusing the manner of harm (irrelevant — Hughes) with the type of harm (Doughty).', 'Forgetting the thin skull rule applies to extent, not type.', 'Stating that any intervening act breaks the chain.'],
  cards: [
    ['The “but for” test — case?', 'Barnett v Chelsea & Kensington HMC (1969): he would have died anyway.'],
    ['McGhee v NCB (1973)?', 'Material increase in risk sufficed for causation.'],
    ['Wilsher v Essex AHA (1988)?', 'Several possible causes — claimant must prove breach caused harm.'],
    ['Fairchild (2002)?', 'Mesothelioma: each employer that materially increased the risk liable.'],
    ['Bailey v MoD (2008)?', 'Material contribution to harm — liable in full.'],
    ['Novus actus interveniens?', 'A new intervening act that breaks the chain of causation.'],
    ['Knightley v Johns (1982)?', 'Police inspector’s negligent order broke the chain.'],
    ['McKew v Holland (1969)?', 'Claimant’s unreasonable conduct broke the chain.'],
    ['Wagon Mound (No 1) (1961)?', 'Liable only for reasonably foreseeable kind of damage.'],
    ['Hughes v Lord Advocate (1963)?', 'Type foreseeable — manner irrelevant.'],
    ['Doughty v Turner (1964)?', 'Eruption was a different kind of harm from a splash — too remote.'],
    ['Thin skull rule?', 'Take your victim as you find them — Smith v Leech Brain (1962).'],
    ['Jolley v Sutton LBC (2000)?', 'Broad type of injury foreseeable — children meddling.']
  ],
  quiz: [
    { q: 'In Barnett v Chelsea and Kensington HMC the claim failed because…', o: ['the man would have died even with proper treatment', 'no duty was owed', 'the doctor acted reasonably', 'the damage was too remote'], x: 'But-for test.' },
    { q: 'The Wagon Mound (No 1) replaced the direct consequences test with…', o: ['reasonable foreseeability of the kind of damage', 'the but-for test', 'the thin skull rule', 'res ipsa loquitur'], x: 'Re Polemis rejected.' },
    { q: 'Hughes v Lord Advocate shows that…', o: ['if the type of harm is foreseeable, the precise manner need not be', 'explosions are never foreseeable', 'children are always trespassers', 'the chain is broken by children'], x: 'Burns were foreseeable.' },
    { q: 'The thin skull rule means the defendant…', o: ['is liable for the full extent of harm even if the victim was unusually vulnerable', 'is not liable for vulnerable victims', 'must prove the victim was healthy', 'can reduce damages'], x: 'Smith v Leech Brain.' },
    { q: 'In McKew v Holland the chain of causation was broken by…', o: ['the claimant’s own unreasonable conduct', 'a police officer', 'a natural event', 'the thin skull rule'], x: 'Stairs without a handrail.' },
    { q: 'Which case created a special causation rule for mesothelioma?', o: ['Fairchild v Glenhaven', 'Wilsher v Essex', 'Barnett v Chelsea', 'Doughty v Turner'], x: 'Material increase in risk.' },
    { q: 'In Doughty v Turner the claim failed because…', o: ['the eruption was a different kind of harm from the foreseeable splash', 'there was no breach', 'the claimant was contributorily negligent', 'there was an intervening act'], x: 'Too remote.' },
    { q: 'Wieland v Cyril Lord Carpets shows that…', o: ['reasonable conduct by the claimant does not break the chain', 'any fall breaks the chain', 'bifocals are a novus actus', 'the defendant is never liable for later accidents'], x: 'Foreseeable consequence.' }
  ],
  exam: [{ q: 'Scenario (Component 2)', scen: 'Carl, a delivery driver, is speeding when he crashes into a wall next to a school. A brick falls and hits Dina, a teacher, breaking her arm; she has a rare condition which means the break takes two years to heal. A parent, Eli, rushes to help and trips over debris, spraining his wrist. The ambulance takes an unreasonably long time to arrive, and Dina’s arm gets worse. <b>Advise Dina and Eli whether Carl is liable in negligence. [15]</b>', m: 15, ms: ['duty — established category (Robinson); Donoghue', 'breach — speeding; reasonable driver (Nettleship)', 'Dina: but for — Barnett', 'Dina: remoteness — foreseeable kind; thin skull (Smith v Leech Brain)', 'ambulance delay — intervening act? Kent v Griffiths; Knightley', 'Eli: rescuer — foreseeable; does not break chain (Haynes v Harwood)', 'Eli: remoteness — Hughes / Jolley', 'possible contributory negligence', 'reasoned conclusions'] }],
  tools: ['causetree']
});

/* ---------- tools for 2.2.1 – 2.2.2 ---------- */
TOOLS.tortsort = { type: 'sort', title: 'Fault or strict liability?', intro: 'Is liability based on fault, or strict?', cats: ['Fault-based', 'Strict'], items: [
  ['A careless driver injures a pedestrian (negligence).', 'Fault-based', 'Breach of the standard of the reasonable driver.'],
  ['Water escapes from a reservoir and floods a neighbour’s mine (Rylands v Fletcher).', 'Strict', 'No need to prove negligence.'],
  ['An employer is liable for an employee’s careless driving at work.', 'Strict', 'Vicarious liability — the employer need not be at fault.'],
  ['A consumer is injured by a defective product (Consumer Protection Act 1987).', 'Strict', 'Product liability.'],
  ['An occupier fails to repair a loose stair carpet and a visitor falls (OLA 1957).', 'Fault-based', 'Common duty of care.'],
  ['A neighbour holds noisy parties every night (private nuisance).', 'Fault-based', 'Unreasonable use of land — though not negligence in the usual sense.']
] };
TOOLS.dutytree = { type: 'tree', title: 'Is a duty of care owed?', intro: 'Use the approach in Robinson v CC West Yorkshire (2018).', nodes: {
  start: { q: 'What kind of harm?', o: [['Physical injury or property damage caused by a positive act', 'estab'], ['Harm from failing to act (an omission) or from a third party', 'omit'], ['Pure financial loss', 'econ'], ['A genuinely new situation', 'novel']] },
  estab: { q: 'Is it an established category (e.g. road users, employer–employee, doctor–patient, manufacturer–consumer, occupier–visitor)?', o: [['Yes', 'yes'], ['Not sure', 'novel']] },
  yes: { end: true, tone: 'good', v: 'Duty owed — established category', x: 'No need to apply Caparo in full. Move on to breach.', cases: ['donoghue', 'robinson'] },
  omit: { q: 'Did the defendant create the danger, assume responsibility for the claimant, or have control over the third party?', o: [['Yes', 'omityes'], ['No', 'omitno']] },
  omityes: { end: true, tone: 'good', v: 'Duty likely', x: 'An exception to the general rule against liability for omissions.', cases: ['kent'] },
  omitno: { end: true, tone: 'bad', v: 'No duty (general rule)', x: 'There is no general duty to protect others from harm caused by third parties or nature.', cases: ['michael', 'hillccwy'] },
  econ: { end: true, tone: 'mid', v: 'Generally no duty — unless negligent misstatement', x: 'Pure economic loss is not usually recoverable; Hedley Byrne applies where there is a special relationship and reliance.', cases: ['hedleybyrne', 'caparo'] },
  novel: { q: 'Caparo stage 1 — was damage to this claimant (or a class they are in) reasonably foreseeable?', o: [['Yes', 'prox'], ['No', 'nofore']] },
  nofore: { end: true, tone: 'bad', v: 'No duty — not foreseeable', x: '', cases: ['bourhill'] },
  prox: { q: 'Stage 2 — was there sufficient proximity (closeness) between the parties?', o: [['Yes', 'fjr'], ['No — the claimant was one of a huge class', 'noprox']] },
  noprox: { end: true, tone: 'bad', v: 'No duty — insufficient proximity', x: '', cases: ['hillccwy'] },
  fjr: { q: 'Stage 3 — is it fair, just and reasonable, by analogy with decided cases (policy: floodgates, defensive practice, resources)?', o: [['Yes', 'duty'], ['No', 'nofjr']] },
  duty: { end: true, tone: 'good', v: 'Duty owed', x: 'Developed incrementally by analogy.', cases: ['caparo', 'watsonbbbc'] },
  nofjr: { end: true, tone: 'bad', v: 'No duty — policy', x: '', cases: ['hillccwy'] }
} };
TOOLS.breachsort = { type: 'sort', title: 'Which factor decides breach?', intro: 'Identify the main risk factor the court relied on.', cats: ['Probability', 'Seriousness', 'Cost of precautions', 'Social utility', 'Special standard'], items: [
  ['[[c:boltonstone]] — balls rarely left the ground.', 'Probability', 'No breach.'],
  ['[[c:paris]] — a one-eyed worker needed goggles.', 'Seriousness', 'Breach.'],
  ['[[c:latimer]] — closing the factory would be disproportionate.', 'Cost of precautions', 'No breach.'],
  ['[[c:watthert]] — rushing a jack to save a trapped woman.', 'Social utility', 'No breach.'],
  ['[[c:nettleship]] — a learner is judged as a competent driver.', 'Special standard', 'Breach.'],
  ['[[c:mullin]] — a 15-year-old judged as a reasonable 15-year-old.', 'Special standard', 'No breach.'],
  ['[[c:haley]] — blind pedestrians are foreseeable users of pavements.', 'Probability', 'Foreseeable vulnerability — breach.']
] };
TOOLS.causetree = { type: 'tree', title: 'Causation and remoteness checker', intro: 'Work through the chain from breach to damage.', nodes: {
  start: { q: 'But for the breach, would the damage have happened?', o: [['No — the breach was necessary for the damage', 'chain'], ['Yes — it would have happened anyway', 'nocause'], ['Can’t tell — several possible causes', 'multi']] },
  nocause: { end: true, tone: 'bad', v: 'No factual causation', x: '', cases: ['barnett'] },
  multi: { q: 'Which situation?', o: [['Mesothelioma from asbestos exposures', 'meso'], ['The breach made a more than negligible contribution to one cumulative cause', 'mat'], ['Several distinct possible causes, only one negligent', 'wil']] },
  meso: { end: true, tone: 'good', v: 'Causation established (Fairchild exception)', x: 'Material increase in risk suffices; Compensation Act 2006 s3.', cases: ['fairchild'] },
  mat: { end: true, tone: 'good', v: 'Causation established (material contribution)', x: '', cases: ['baileymod', 'mcghee'] },
  wil: { end: true, tone: 'bad', v: 'Claimant must prove the breach probably caused it', x: '', cases: ['wilsher'] },
  chain: { q: 'Did anything happen between the breach and the damage?', o: [['Nothing', 'remote'], ['A third party’s negligent or deliberate act', 'third'], ['The claimant’s own conduct', 'claim']] },
  third: { q: 'Was that act unforeseeable, deliberate or grossly negligent?', o: [['Yes', 'broken'], ['No — foreseeable, e.g. a rescuer', 'remote']] },
  claim: { q: 'Was the claimant’s conduct wholly unreasonable?', o: [['Yes', 'broken2'], ['No', 'remote']] },
  broken: { end: true, tone: 'bad', v: 'Chain broken — novus actus interveniens', x: '', cases: ['knightley'] },
  broken2: { end: true, tone: 'bad', v: 'Chain broken by the claimant', x: '', cases: ['mckew'] },
  remote: { q: 'Was the kind of damage reasonably foreseeable?', o: [['Yes — even if the way it happened was unusual', 'yes'], ['No — a different kind of harm', 'no']] },
  yes: { end: true, tone: 'good', v: 'Not too remote — liable', x: 'Liable for the full extent, even for a vulnerable claimant (thin skull rule).', cases: ['hughes', 'jolley', 'smithleech'] },
  no: { end: true, tone: 'bad', v: 'Too remote', x: '', cases: ['wagonmound', 'doughty'] }
} };
