/* ==========================================================
   SECTION C · CRIMINAL LAW (public law) — 2.3.1 – 2.3.3
   ========================================================== */
addCases([
  // rules and theory
  { id: 'woolmington', n: 'Woolmington v DPP', y: 1935, a: 'CR', t: '2.3.1', c: 'HL', f: 'A man shot his estranged wife and claimed it was an accident. The judge told the jury it was for him to prove it was an accident.', p: 'The “golden thread”: the prosecution must prove the defendant’s guilt beyond reasonable doubt. The conviction was quashed.' },
  { id: 'lambert', n: 'R v Lambert', y: 2001, a: 'CR', t: '2.3.1', c: 'HL', f: 'A man found with a bag of cocaine argued the Misuse of Drugs Act 1971 required him to prove he did not know what was in it.', p: 'Using s3 HRA, the reverse burden was read down to an evidential burden only, to protect the presumption of innocence (Art 6(2)).' },
  // actus reus
  { id: 'hillbaxter', n: 'Hill v Baxter', y: 1958, a: 'CR', t: '2.3.2a', c: 'Divisional Court', f: 'A driver claimed he was unconscious and could remember nothing when he drove through a halt sign.', p: 'Conduct must be voluntary. Examples of involuntary acts: being attacked by a swarm of bees while driving, or being struck on the head. On the facts the defence failed.' },
  { id: 'larsonneur', n: 'R v Larsonneur', y: 1933, a: 'CR', t: '2.3.2a', c: 'Court of Criminal Appeal', f: 'A French woman was deported from Ireland and brought to the UK against her will by Irish police. She was convicted of being an alien “found” in the UK.', p: 'A “state of affairs” offence: she was guilty even though her presence was involuntary. Widely criticised as absolute liability.' },
  { id: 'pittwood', n: 'R v Pittwood', y: 1902, a: 'CR', t: '2.3.2a', c: 'Assizes', f: 'A railway gatekeeper went to lunch leaving the crossing gate open. A hay cart was hit by a train and the driver killed.', p: 'A duty to act can arise from a contract of employment; failure to perform it can be the actus reus of manslaughter.' },
  { id: 'gibbins', n: 'R v Gibbins and Proctor', y: 1918, a: 'CR', t: '2.3.2a', c: 'Court of Criminal Appeal', f: 'A father and his partner deliberately withheld food from his seven-year-old daughter, who starved to death.', p: 'A parent has a duty to care for their child (special relationship); the partner had assumed a duty. Both guilty of murder.' },
  { id: 'stone', n: 'R v Stone and Dobinson', y: 1977, a: 'CR', t: '2.3.2a', c: 'CA', f: 'Stone’s sister, who had anorexia, came to live with the couple, who were of limited ability. They made only feeble efforts to get help as she became bedridden and died.', p: 'By voluntarily taking her in and trying to care for her, they assumed a duty of care; their failure was gross negligence manslaughter.' },
  { id: 'dytham', n: 'R v Dytham', y: 1979, a: 'CR', t: '2.3.2a', c: 'CA', f: 'An on-duty police officer watched a man being beaten to death outside a nightclub and drove away without intervening.', p: 'A public office holder can be liable for failing to act — misconduct in a public office.' },
  { id: 'miller', n: 'R v Miller', y: 1983, a: 'CR', t: '2.3.2a', c: 'HL', f: 'A squatter fell asleep with a lit cigarette, woke to find the mattress on fire, and simply moved to another room. The house was damaged.', p: 'A person who accidentally creates a dangerous situation and becomes aware of it has a duty to take reasonable steps to limit the harm. Guilty of arson.' },
  { id: 'evans', n: 'R v Evans', y: 2009, a: 'CR', t: '2.3.2a', c: 'CA', f: 'Evans supplied heroin to her half-sister, who self-injected and showed signs of overdose. Evans stayed with her but did not call for help; she died.', p: 'Having contributed to a life-threatening situation, Evans had a duty to take reasonable steps to save her sister — gross negligence manslaughter.' },
  { id: 'fagan', n: 'Fagan v Metropolitan Police Commissioner', y: 1969, a: 'CR', t: '2.3.2a', c: 'Divisional Court', f: 'A driver accidentally drove onto a police officer’s foot, then refused to move for a while.', p: 'Battery as a continuing act: the actus reus continued while the car remained on the foot, so it coincided with the mens rea formed later.' },
  { id: 'pagett', n: 'R v Pagett', y: 1983, a: 'CR', t: '2.3.2a', c: 'CA', f: 'Pagett used his pregnant girlfriend as a human shield and fired at armed police, who fired back and killed her.', p: 'But for his actions she would not have died; the police’s reasonable reaction in self-defence did not break the chain of causation.' },
  { id: 'white', n: 'R v White', y: 1910, a: 'CR', t: '2.3.2a', c: 'Court of Criminal Appeal', f: 'White poisoned his mother’s drink, intending to kill her. She died of an unrelated heart attack before the poison could work.', p: 'Not guilty of murder: she would have died anyway — no factual causation (but-for test). Guilty of attempted murder.' },
  { id: 'kimsey', n: 'R v Kimsey', y: 1996, a: 'CR', t: '2.3.2a', c: 'CA', f: 'Two drivers were racing dangerously; one lost control and died.', p: 'The defendant’s conduct need not be the only or main cause; it must be more than a slight or trifling link (the de minimis rule).' },
  { id: 'smith', n: 'R v Smith', y: 1959, a: 'CR', t: '2.3.2a', c: 'Courts-Martial Appeal Court', f: 'A soldier was stabbed in a barracks fight. He was dropped twice while being carried to the medical station and received poor treatment; he died.', p: 'The stab wound was still an “operating and substantial” cause of death, so the chain was not broken.' },
  { id: 'cheshire', n: 'R v Cheshire', y: 1991, a: 'CR', t: '2.3.2a', c: 'CA', f: 'A man shot in the leg and stomach developed breathing problems from a tracheotomy performed negligently in hospital, and died.', p: 'Negligent medical treatment breaks the chain only if it is so independent of the defendant’s acts, and so potent in causing death, that the original injury becomes insignificant.' },
  { id: 'jordan', n: 'R v Jordan', y: 1956, a: 'CR', t: '2.3.2a', c: 'Court of Criminal Appeal', f: 'A stab victim was given an antibiotic to which he was known to be allergic, and excessive fluids, when his wound had almost healed.', p: 'The “palpably wrong” treatment broke the chain of causation; the conviction for murder was quashed. Exceptional case.' },
  { id: 'malcherek', n: 'R v Malcherek and Steel', y: 1981, a: 'CR', t: '2.3.2a', c: 'CA', f: 'Victims of serious attacks were put on life support; doctors switched it off after tests showed brain death.', p: 'Switching off life support did not break the chain; the original injuries caused death.' },
  { id: 'roberts', n: 'R v Roberts', y: 1971, a: 'CR', t: '2.3.2a', c: 'CA', f: 'A woman jumped from a moving car to escape the driver’s sexual advances and was injured.', p: 'The driver caused the injury: the victim’s reaction was reasonably foreseeable — only a “daft” reaction would break the chain.' },
  { id: 'williamsdavis', n: 'R v Williams and Davis', y: 1992, a: 'CR', t: '2.3.2a', c: 'CA', f: 'A hitchhiker jumped from a moving car and died, allegedly to escape a robbery.', p: 'The victim’s reaction must be within the range of responses expected from a victim in that situation, proportionate to the threat.' },
  { id: 'kennedy', n: 'R v Kennedy (No 2)', y: 2007, a: 'CR', t: '2.3.3c', c: 'HL', f: 'Kennedy prepared a syringe of heroin and handed it to the victim, who injected himself and died.', p: 'The victim’s free, deliberate and informed decision to self-inject broke the chain of causation. Kennedy was not guilty of unlawful act manslaughter.' },
  { id: 'blaue', n: 'R v Blaue', y: 1975, a: 'CR', t: '2.3.2a', c: 'CA', f: 'Blaue stabbed a young woman. She was a Jehovah’s Witness and refused a blood transfusion that would have saved her.', p: 'The thin skull rule: the defendant must take the victim as he finds her, including her beliefs. Guilty of manslaughter.' },
  // mens rea
  { id: 'moloney', n: 'R v Moloney', y: 1985, a: 'CR', t: '2.3.2b', c: 'HL', f: 'After a drinking contest over who was faster to load and fire a shotgun, Moloney shot his stepfather at point-blank range, claiming he never intended harm.', p: 'Foresight of consequences is evidence from which intention may be inferred, not intention itself; the consequence must be a “natural consequence”.' },
  { id: 'hancock', n: 'R v Hancock and Shankland', y: 1986, a: 'CR', t: '2.3.2b', c: 'HL', f: 'Striking miners pushed a concrete block from a bridge onto a motorway to block it; it hit a taxi taking a miner to work, killing the driver.', p: 'The greater the probability of a consequence, the more likely it was foreseen, and the more likely it was intended; the Moloney guidance was defective.' },
  { id: 'nedrick', n: 'R v Nedrick', y: 1986, a: 'CR', t: '2.3.2b', c: 'CA', f: 'Nedrick poured paraffin through a letterbox and set it alight to frighten the occupant; a child died.', p: 'The virtual certainty test: the jury cannot infer intention unless death or serious harm was a virtual certainty and the defendant appreciated that.' },
  { id: 'woollin', n: 'R v Woollin', y: 1998, a: 'CR', t: '2.3.2b', c: 'HL', f: 'Woollin lost his temper and threw his three-month-old son across the room at a pram; the baby hit a wall and died.', p: 'The jury may “find” intention if death or serious bodily harm was a virtual certainty (barring some unforeseen intervention) as a result of the defendant’s actions, and the defendant appreciated this. Murder conviction replaced with manslaughter.' },
  { id: 'matthews', n: 'R v Matthews and Alleyne', y: 2003, a: 'CR', t: '2.3.2b', c: 'CA', f: 'The defendants threw a young man who said he could not swim off a bridge into a river; he drowned.', p: 'Woollin is a rule of evidence, not of substantive law: foresight of virtual certainty is evidence from which the jury may find intention, not intention itself.' },
  { id: 'cunningham', n: 'R v Cunningham', y: 1957, a: 'CR', t: '2.3.2b', c: 'Court of Criminal Appeal', f: 'Cunningham ripped a gas meter from the wall of an empty house to steal the money; gas seeped next door and a woman was affected.', p: 'Recklessness is subjective: the defendant must foresee the risk of harm and go on to take it. He did not foresee it — conviction quashed. “Maliciously” means intentionally or recklessly.' },
  { id: 'rlatimer', n: 'R v Latimer', y: 1886, a: 'CR', t: '2.3.2b', c: 'Court for Crown Cases Reserved', f: 'Latimer swung his belt at a man in a pub; it bounced off and hit a woman, badly injuring her.', p: 'Transferred malice: the mens rea for the intended victim transfers to the actual victim of the same type of offence.' },
  { id: 'pembliton', n: 'R v Pembliton', y: 1874, a: 'CR', t: '2.3.2b', c: 'Court for Crown Cases Reserved', f: 'Pembliton threw a stone at people he was fighting; it missed and broke a window.', p: 'Malice cannot transfer between different types of offence: intending to injure people is not the mens rea for damaging property.' },
  { id: 'agref3of1994', n: 'Attorney General’s Reference (No 3 of 1994)', y: 1997, a: 'CR', t: '2.3.3a', c: 'HL', f: 'A man stabbed his pregnant girlfriend. The baby was born prematurely as a result and died four months later.', p: 'A foetus is not a “reasonable creature in being”, and malice could not be transferred twice (to the foetus and then to the born child) — not murder, though unlawful act manslaughter was possible.' },
  { id: 'thabomeli', n: 'Thabo Meli v R', y: 1954, a: 'CR', t: '2.3.2b', c: 'Privy Council', f: 'The defendants hit a man over the head intending to kill him, then, thinking he was dead, threw his body over a cliff. He died of exposure.', p: 'Where there is a series of acts forming one transaction, it is enough that the mens rea existed at some point during it.' },
  // strict liability
  { id: 'callow', n: 'Callow v Tillstone', y: 1900, a: 'CR', t: '2.3.2b', c: 'QBD', f: 'A butcher had a carcass checked by a vet, who negligently certified it fit. He sold the meat, which was unfit for human consumption.', p: 'Strict liability: the butcher was guilty despite taking reasonable care.' },
  { id: 'shah', n: 'Harrow LBC v Shah and Shah', y: 1999, a: 'CR', t: '2.3.2b', c: 'Divisional Court', f: 'A newsagent’s employee sold a lottery ticket to a 13-year-old, believing him to be over 16. The owners had told staff to ask for ID.', p: 'Strict liability offence — no mens rea as to age was needed. The owners were guilty.' },
  { id: 'alphacell', n: 'Alphacell v Woodward', y: 1972, a: 'CR', t: '2.3.2b', c: 'HL', f: 'Polluted water overflowed from a factory’s tanks into a river when pumps became blocked by leaves; the company did not know.', p: 'Causing polluted matter to enter a river is a strict liability offence; no negligence needed.' },
  { id: 'storkwain', n: 'Pharmaceutical Society of GB v Storkwain', y: 1986, a: 'CR', t: '2.3.2b', c: 'HL', f: 'A pharmacist supplied drugs on prescriptions that turned out to be forgeries, which he could not have detected.', p: 'Strict liability: the Medicines Act 1968 offence did not require knowledge.' },
  { id: 'sweetparsley', n: 'Sweet v Parsley', y: 1970, a: 'CR', t: '2.3.2b', c: 'HL', f: 'A teacher sublet a farmhouse to students who smoked cannabis there without her knowledge. She was charged with being concerned in the management of premises used for smoking cannabis.', p: 'There is a presumption that Parliament intends mens rea to be required in criminal offences; it was not rebutted. Conviction quashed.' },
  { id: 'bvdpp', n: 'B v DPP', y: 2000, a: 'CR', t: '2.3.2b', c: 'HL', f: 'A 15-year-old boy asked a 13-year-old girl on a bus for oral sex, honestly believing she was over 14.', p: 'The presumption of mens rea applied: an honest belief that the girl was over the age was a defence (the law has since been replaced by the Sexual Offences Act 2003).' },
  { id: 'gammon', n: 'Gammon (Hong Kong) Ltd v Attorney General of Hong Kong', y: 1985, a: 'CR', t: '2.3.2b', c: 'Privy Council', f: 'Building contractors deviated from approved plans and part of a building collapsed. They argued they did not know the deviation was material.', p: 'The Gammon tests: presumption of mens rea; stronger for truly criminal offences; displaced only clearly or by necessary implication; only where the statute concerns an issue of social concern such as public safety; and only if strict liability would promote the Act’s objects by encouraging vigilance. Strict liability applied.' },
  // murder
  { id: 'vickers', n: 'R v Vickers', y: 1957, a: 'CR', t: '2.3.3a', c: 'Court of Criminal Appeal', f: 'Vickers broke into a shop and was discovered by the elderly occupant, whom he hit several times; she died.', p: 'An intention to cause grievous bodily harm is sufficient mens rea for murder (implied malice).' },
  { id: 'dppsmith', n: 'DPP v Smith', y: 1961, a: 'CR', t: '2.3.3a', c: 'HL', f: 'A driver with stolen goods sped off when a police officer clung to his car, and the officer was thrown off and killed.', p: 'Grievous bodily harm means “really serious harm”. (The objective test of intention in the case was reversed by s8 Criminal Justice Act 1967.)' },
  { id: 'inglis', n: 'R v Inglis', y: 2010, a: 'CR', t: '2.3.3a', c: 'CA', f: 'A mother killed her severely brain-damaged son with a heroin overdose, believing it was an act of mercy.', p: 'Mercy killing is murder — there is no defence of mercy killing, and the mandatory life sentence applied (minimum term reduced).' },
  // voluntary manslaughter
  { id: 'rbyrne', n: 'R v Byrne', y: 1960, a: 'CR', t: '2.3.3b', c: 'Court of Criminal Appeal', f: 'A “sexual psychopath” strangled and mutilated a young woman, claiming he could not control his desires.', p: 'Abnormality of mind was a state of mind so different from that of ordinary human beings that the reasonable man would term it abnormal; it covered inability to exercise willpower. (The law is now in the amended s2 Homicide Act 1957.)' },
  { id: 'golds', n: 'R v Golds', y: 2016, a: 'CR', t: '2.3.3b', c: 'UKSC', f: 'A man with a mental disorder killed his partner and argued diminished responsibility.', p: '“Substantially” impaired means the impairment must be significant or appreciable — more than merely trivial but not total. Usually a matter for the jury without further definition.' },
  { id: 'dietschmann', n: 'R v Dietschmann', y: 2003, a: 'CR', t: '2.3.3b', c: 'HL', f: 'A man suffering from a grief reaction (a mental abnormality) killed while drunk.', p: 'Where the defendant was intoxicated and had an abnormality, the question is whether the abnormality substantially impaired their responsibility, despite the drink.' },
  { id: 'wood', n: 'R v Wood', y: 2008, a: 'CR', t: '2.3.3b', c: 'CA', f: 'An alcoholic killed a man with a meat cleaver after heavy drinking.', p: 'Alcohol dependency syndrome can amount to an abnormality for diminished responsibility; the jury must consider whether it substantially impaired him, ignoring the effect of voluntary drinking.' },
  { id: 'clinton', n: 'R v Clinton, Parker and Evans', y: 2012, a: 'CR', t: '2.3.3b', c: 'CA', f: 'Clinton killed his wife after she taunted him about her affairs and his failed suicide attempt.', p: 'Sexual infidelity alone must be disregarded as a qualifying trigger (s55(6)(c)), but it can be considered as part of the context where other triggers exist.' },
  { id: 'dawes', n: 'R v Dawes, Hatter and Bowyer', y: 2013, a: 'CR', t: '2.3.3b', c: 'CA', f: 'Three appeals concerned whether defendants who had behaved badly themselves could rely on loss of control.', p: 'A trigger is only excluded as self-induced where the defendant incited the thing done or said as an excuse to use violence — not merely because they behaved badly.' },
  { id: 'jewell', n: 'R v Jewell', y: 2014, a: 'CR', t: '2.3.3b', c: 'CA', f: 'Jewell shot a colleague he claimed was threatening him, after packing a bag with weapons, a passport and clothes the night before.', p: 'Evidence of planning showed a considered desire for revenge, not loss of self-control; the defence was not left to the jury.' },
  { id: 'asmelash', n: 'R v Asmelash', y: 2013, a: 'CR', t: '2.3.3b', c: 'CA', f: 'A drunk man stabbed another after a quarrel and argued his intoxication should be considered.', p: 'Voluntary intoxication is not one of the defendant’s “circumstances” for the normal-person test in s54(1)(c).' },
  { id: 'duffy', n: 'R v Duffy', y: 1949, a: 'CR', t: '2.3.3b', c: 'Court of Criminal Appeal', f: 'A woman killed her abusive husband with a hatchet while he slept.', p: 'Under the old law of provocation, loss of self-control had to be “sudden and temporary”, which disadvantaged abused women who reacted after a “slow burn”. Section 54(2) CJA 2009 removed the requirement of suddenness.' },
  // involuntary manslaughter
  { id: 'church', n: 'R v Church', y: 1966, a: 'CR', t: '2.3.3c', c: 'Court of Criminal Appeal', f: 'Church knocked a woman unconscious during a fight, panicked, thought she was dead and threw her into a river, where she drowned.', p: 'Unlawful act manslaughter requires an act that all sober and reasonable people would recognise must subject the victim to the risk of some harm, albeit not serious harm.' },
  { id: 'lamb', n: 'R v Lamb', y: 1967, a: 'CR', t: '2.3.3c', c: 'CA', f: 'Lamb pointed a revolver at his friend as a joke; neither thought it would fire. He pulled the trigger and killed his friend.', p: 'There was no unlawful act — no assault, as the friend did not fear force — so no unlawful act manslaughter.' },
  { id: 'newbury', n: 'DPP v Newbury and Jones', y: 1977, a: 'CR', t: '2.3.3c', c: 'HL', f: 'Two teenagers pushed a paving slab off a bridge onto a train, killing the guard.', p: 'For unlawful act manslaughter the defendant need not realise the act is dangerous; the test is objective.' },
  { id: 'dawson', n: 'R v Dawson', y: 1985, a: 'CR', t: '2.3.3c', c: 'CA', f: 'Masked robbers threatened a 60-year-old petrol station attendant with a replica gun; he died of a heart attack. They did not know of his heart condition.', p: 'Not dangerous: a sober and reasonable person would not have foreseen the risk of physical harm to this victim, knowing only what the defendants knew.' },
  { id: 'watson', n: 'R v Watson', y: 1989, a: 'CR', t: '2.3.3c', c: 'CA', f: 'Burglars broke into the home of a frail 87-year-old man and abused him verbally; he died of a heart attack.', p: 'The burglary became dangerous once the reasonable person would have seen, during the burglary, that he was old and frail. (Conviction quashed because causation was unclear.)' },
  { id: 'adomako', n: 'R v Adomako', y: 1994, a: 'CR', t: '2.3.3c', c: 'HL', f: 'An anaesthetist failed to notice for six minutes that a patient’s oxygen tube had become disconnected during an eye operation; the patient died.', p: 'Gross negligence manslaughter: a duty of care, breach, causing death, and negligence so gross that it should be judged criminal.' },
  { id: 'misra', n: 'R v Misra and Srivastava', y: 2004, a: 'CR', t: '2.3.3c', c: 'CA', f: 'Two junior doctors failed to recognise and treat a severe post-operative infection; the patient died.', p: 'The Adomako test is not too uncertain to satisfy Art 7 ECHR; the risk must be a risk of death.' },
  { id: 'rose', n: 'R v Rose', y: 2017, a: 'CR', t: '2.3.3c', c: 'CA', f: 'An optometrist failed to examine the back of a boy’s eyes and missed swelling that led to his death.', p: 'The serious and obvious risk of death must have been reasonably foreseeable at the time of the breach, based on what the defendant knew — not what she would have known had she done her job properly. Conviction quashed.' },
  { id: 'broughton', n: 'R v Broughton', y: 2020, a: 'CR', t: '2.3.3c', c: 'CA', f: 'A man supplied drugs to his girlfriend at a festival and failed to get help as she became very ill; she died.', p: 'Causation in gross negligence manslaughter must be proved beyond reasonable doubt: that she would have survived with medical help. Not proved — conviction quashed.' },
  { id: 'wacker', n: 'R v Wacker', y: 2003, a: 'CR', t: '2.3.3c', c: 'CA', f: 'A lorry driver smuggling 60 migrants closed the air vent; 58 suffocated.', p: 'A duty of care existed despite the joint illegal enterprise; guilty of gross negligence manslaughter.' },
  // non-fatal
  { id: 'ireland', n: 'R v Ireland; R v Burstow', y: 1997, a: 'CR', t: '2.3.3d', c: 'HL', f: 'Ireland made silent phone calls to women; Burstow stalked a woman for months. The victims suffered psychiatric illness.', p: 'Silent phone calls can be an assault if they cause fear of immediate force. Recognised psychiatric illness can be ABH or GBH, and GBH can be “inflicted” without a physical assault.' },
  { id: 'constanza', n: 'R v Constanza', y: 1997, a: 'CR', t: '2.3.3d', c: 'CA', f: 'A man stalked a woman for 20 months and sent 800 letters, two of which she read as clear threats.', p: 'Words, including written words, can amount to an assault; fear of violence “at some time not excluding the immediate future” was enough.' },
  { id: 'tuberville', n: 'Tuberville v Savage', y: 1669, a: 'CR', t: '2.3.3d', c: 'King’s Bench', f: 'The defendant put his hand on his sword and said: “If it were not assize time, I would not take such language from you.”', p: 'Words can negate an assault: as the judges were in town, he was indicating he would not use force.' },
  { id: 'logdon', n: 'Logdon v DPP', y: 1976, a: 'CR', t: '2.3.3d', c: 'Divisional Court', f: 'As a joke, Logdon showed a woman a gun in a drawer and said he would hold her hostage. It was a replica.', p: 'An assault: she apprehended immediate unlawful force, even though the gun was fake.' },
  { id: 'collinswilcock', n: 'Collins v Wilcock', y: 1984, a: 'CR', t: '2.3.3d', c: 'Divisional Court', f: 'A police officer held a woman’s arm to stop her walking away when she had not been arrested.', p: 'Battery is the application of unlawful force; the officer went beyond the ordinary touching of everyday life, which people are taken to accept.' },
  { id: 'dppk', n: 'DPP v K', y: 1990, a: 'CR', t: '2.3.3d', c: 'Divisional Court', f: 'A schoolboy hid acid in a hand dryer after a chemistry lesson; another pupil used the dryer and was scarred.', p: 'Battery can be committed indirectly.' },
  { id: 'haystead', n: 'Haystead v Chief Constable of Derbyshire', y: 2000, a: 'CR', t: '2.3.3d', c: 'Divisional Court', f: 'Haystead punched a woman holding her baby, causing her to drop the child, who hit the floor.', p: 'Indirect battery on the baby.' },
  { id: 'thomas', n: 'R v Thomas', y: 1985, a: 'CR', t: '2.3.3d', c: 'CA', f: 'A school caretaker touched the bottom of a girl’s skirt and rubbed it.', p: 'Touching a person’s clothing is equivalent to touching the person for battery.' },
  { id: 'venna', n: 'R v Venna', y: 1976, a: 'CR', t: '2.3.3d', c: 'CA', f: 'Venna lashed out with his feet while being arrested and broke a police officer’s hand.', p: 'The mens rea of assault and battery is intention or recklessness as to causing apprehension of, or applying, unlawful force.' },
  { id: 'rmiller', n: 'R v Miller', y: 1954, a: 'CR', t: '2.3.3d', c: 'Assizes', f: 'A husband attacked his wife, causing hysteria and a nervous condition.', p: 'Actual bodily harm is “any hurt or injury calculated to interfere with the health or comfort” of the victim.' },
  { id: 'chanfook', n: 'R v Chan-Fook', y: 1994, a: 'CR', t: '2.3.3d', c: 'CA', f: 'A man accused of stealing a ring was questioned aggressively and locked in a room; he escaped and injured himself.', p: 'ABH can include psychiatric injury, but not mere emotions such as fear, distress or panic.' },
  { id: 'tvdpp', n: 'T v DPP', y: 2003, a: 'CR', t: '2.3.3d', c: 'Divisional Court', f: 'The victim was kicked in the head and briefly lost consciousness.', p: 'A momentary loss of consciousness is ABH.' },
  { id: 'dppsmith2006', n: 'DPP v Smith (Michael)', y: 2006, a: 'CR', t: '2.3.3d', c: 'Divisional Court', f: 'Smith cut off his ex-girlfriend’s ponytail without her consent.', p: 'Cutting off a substantial amount of hair can be ABH — hair is part of the body.' },
  { id: 'savage', n: 'R v Savage; DPP v Parmenter', y: 1991, a: 'CR', t: '2.3.3d', c: 'HL', f: 'Savage threw beer over a woman in a pub; the glass slipped and cut her wrist. Parmenter threw his baby about roughly, not realising it could cause injury.', p: 'For s47 the mens rea is only that for the assault or battery — no need to foresee any harm. For s20 the defendant must foresee some harm, though not serious harm.' },
  { id: 'eisenhower', n: 'JCC (a minor) v Eisenhower', y: 1984, a: 'CR', t: '2.3.3d', c: 'Divisional Court', f: 'A boy fired an air gun; a pellet hit the victim near the eye, rupturing blood vessels under the skin.', p: 'A wound requires a break in both layers of the skin (dermis and epidermis); internal bleeding is not a wound.' },
  { id: 'bollom', n: 'R v Bollom', y: 2003, a: 'CR', t: '2.3.3d', c: 'CA', f: 'A 17-month-old child suffered bruises and abrasions on her body, arms and legs.', p: 'Whether injuries amount to GBH depends on all the circumstances, including the age and health of the victim.' },
  { id: 'dica', n: 'R v Dica', y: 2004, a: 'CR', t: '2.3.3d', c: 'CA', f: 'Dica, knowing he was HIV positive, had unprotected sex with two women who did not know and became infected.', p: 'Recklessly infecting someone with HIV can be inflicting GBH under s20; informed consent to the risk could be a defence, but they had not consented.' },
  { id: 'belfon', n: 'R v Belfon', y: 1976, a: 'CR', t: '2.3.3d', c: 'CA', f: 'Belfon slashed a man with a razor during an attack.', p: 'For s18, recklessness is not enough — there must be specific intent to cause GBH.' },
  { id: 'mowatt', n: 'R v Mowatt', y: 1968, a: 'CR', t: '2.3.3d', c: 'CA', f: 'Mowatt was accused of theft and repeatedly punched the man who challenged him, causing serious injury.', p: 'For s20 the defendant need only foresee that some physical harm might result, not the particular harm or serious harm.' }
]);

/* ---------- 2.3.1 Rules and theory ---------- */
TOPICS.push({
  id: '2.3.1', unit: 'CR', ref: '2.3.1', title: 'Criminal law: rules and theory',
  short: 'Definition and purposes of crime, burden and standard of proof, codification, CPS, bail, trial process and youth justice',
  summary: 'Criminal law defines conduct the state punishes. This topic covers what a crime is and what criminal law is for, the burden and standard of proof, whether the criminal law should be codified, and outlines the institutions and procedures — the CPS, the Attorney General and DPP, bail and remand, and the trial process including youth justice — that you also study in Component 1.',
  spec: ['Definition of crime and the purposes of criminal law', 'Burden and standard of proof; reverse burdens', 'Codification of the criminal law', 'Functions of the CPS; roles of the Attorney General and the DPP', 'Bail and remand in custody', 'The trial process, including youth justice'],
  learn: [
    { h: 'What is a crime?', html: `
<p>There is no single legal definition. <b>Glanville Williams</b>: a crime is “a legal wrong that can be followed by criminal proceedings which may result in punishment”. It is a wrong against society as a whole, so the <b>state</b> prosecutes, even if the victim does not want it to.</p>
<p>Most crimes require an <b>actus reus</b> (guilty act) and <b>mens rea</b> (guilty mind), coinciding in time, with no defence. Some are <b>strict liability</b>. Crimes are created by statute (most today) or the common law (murder, manslaughter).</p>
<h4>Purposes of criminal law</h4><ul><li>Protecting individuals from harm and property from damage or loss.</li><li>Maintaining public order and the functioning of the state.</li><li>Upholding moral values (see [[c:brown]]; Hart–Devlin — topic N3).</li><li>Punishing wrongdoers and deterring others.</li><li>Protecting people from themselves (paternalism — drug laws, seatbelts).</li><li>Educating society about acceptable behaviour.</li></ul>` },
    { h: 'Burden and standard of proof', html: `
<p>The <b>prosecution</b> bears the burden of proving every element of the offence <b>beyond reasonable doubt</b> — the “golden thread” in [[c:woolmington]]. The presumption of innocence is also protected by Art 6(2) ECHR.</p>
<ul><li>For most defences (self-defence, duress, loss of control) the defendant bears only an <b>evidential burden</b> — to raise evidence; the prosecution must then disprove the defence beyond reasonable doubt.</li>
<li><b>Reverse burdens</b> (a legal burden on the defendant, on the balance of probabilities) apply to insanity and diminished responsibility, and some statutory defences. The courts may read them down to evidential burdens under s3 HRA — [[c:lambert]].</li></ul>` },
    { h: 'Codification', html: `
<p><b>Codification</b> means bringing all the criminal law — statute and common law — into a single code. The Law Commission published a <b>Draft Criminal Code</b> in 1989, but it was never enacted, and the project was abandoned in 2008 in favour of reforming particular areas.</p>
<div class="debate"><div class="for"><h5>For codification</h5><ul><li>Accessibility and certainty (rule of law) — the law of murder and OAPA 1861 are scattered and outdated</li><li>Consistency of terms (e.g. “intention”, “recklessness”)</li><li>Democratic — Parliament, not judges, makes criminal law</li><li>Most European countries have codes</li></ul></div><div class="ag"><h5>Against</h5><ul><li>Huge task; lack of parliamentary time and political will</li><li>Loses the flexibility of the common law</li><li>Codes still need judicial interpretation</li><li>Partial codification has worked (Theft Act 1968, Criminal Attempts Act 1981)</li></ul></div></div>` },
    { h: 'Prosecution, bail and trial', html: `
<p>These overlap with Component 1 (topics 1.2.2a and 1.2.2b):</p>
<ul><li><b>The Attorney General</b> — the government’s chief legal adviser, a minister; superintends the CPS; consents to some prosecutions; can refer unduly lenient sentences and points of law; can stop prosecutions (nolle prosequi).</li>
<li><b>The Director of Public Prosecutions</b> — heads the CPS, which decides charges using the Full Code Test and prosecutes (Prosecution of Offences Act 1985).</li>
<li><b>Bail and remand</b> — presumption in favour of bail (Bail Act 1976 s4), exceptions and conditions; custody time limits.</li>
<li><b>Trial process</b> — classification of offences; magistrates’ court and Crown Court; plea before venue and allocation; the jury’s role; appeals.</li></ul>
<h4>Youth justice</h4><ul><li>The age of criminal responsibility is <b>10</b>. The presumption of doli incapax (that 10–13-year-olds did not know right from wrong) was abolished by s34 Crime and Disorder Act 1998.</li>
<li>Youth Offending Teams; out-of-court youth cautions and conditional cautions.</li>
<li>Most young defendants are tried in the <b>Youth Court</b> — private, less formal, specially trained magistrates. Grave crimes (e.g. murder) go to the Crown Court, with adjustments (e.g. no wigs, breaks, intermediaries).</li>
<li>The principal aim is to prevent offending; sentences include referral orders, youth rehabilitation orders and detention and training orders (topic 1.2.2c).</li></ul>` }
  ],
  debate: [{ q: 'Should the criminal law be codified?', for: ['The OAPA 1861 is confusing and outdated (Law Commission 2015).', 'Certainty and accessibility for citizens and juries.', 'Parliament, not unelected judges, should define crimes.'], ag: ['Common law flexibility allows development (R v R; R v G).', 'Codes still require interpretation — uncertainty remains.', 'Parliament has repeatedly ignored the Law Commission.', 'Piecemeal statutory reform is more realistic.'] }],
  cases: ['woolmington', 'lambert', 'brown'],
  worked: [],
  pitfalls: ['Saying the defendant must prove innocence.', 'Confusing an evidential burden with a legal burden.', 'Stating that the UK has a criminal code.', 'Forgetting that the age of criminal responsibility is 10.'],
  cards: [
    ['Glanville Williams’ definition of crime?', 'A legal wrong that can be followed by criminal proceedings which may result in punishment.'],
    ['Woolmington v DPP (1935)?', 'The prosecution must prove guilt beyond reasonable doubt — the golden thread.'],
    ['Evidential v legal burden?', 'Evidential: raise enough evidence of a defence. Legal: prove it (on balance for defendants).'],
    ['Which defences place a legal burden on the defendant?', 'Insanity and diminished responsibility (and some statutory defences).'],
    ['R v Lambert (2001)?', 'Reverse burden read down to an evidential burden under s3 HRA.'],
    ['When was the Draft Criminal Code published?', '1989 (Law Commission); abandoned 2008.'],
    ['Age of criminal responsibility?', '10.'],
    ['What did s34 Crime and Disorder Act 1998 abolish?', 'The presumption of doli incapax for 10–13-year-olds.'],
    ['Roles of the Attorney General?', 'Chief legal adviser; superintends the CPS; consents to some prosecutions; refers lenient sentences and points of law.']
  ],
  quiz: [
    { q: 'Who must prove guilt in a criminal trial?', o: ['The prosecution, beyond reasonable doubt', 'The defendant, on the balance of probabilities', 'The judge', 'The jury'], x: 'Woolmington.' },
    { q: 'The Law Commission’s Draft Criminal Code was published in…', o: ['1989', '1968', '2003', '2015'], x: 'Never enacted.' },
    { q: 'The age of criminal responsibility in England and Wales is…', o: ['10', '12', '14', '16'], x: 'Among the lowest in Europe.' },
    { q: 'For self-defence, the defendant bears…', o: ['an evidential burden only', 'the legal burden on the balance of probabilities', 'no burden at all', 'the burden beyond reasonable doubt'], x: 'Prosecution must disprove it.' },
    { q: 'Which body heads the prosecution of most criminal cases?', o: ['The CPS, headed by the DPP', 'The Home Office', 'The police', 'The Ministry of Justice'], x: 'Prosecution of Offences Act 1985.' }
  ],
  exam: [{ q: 'Analyse and evaluate whether the criminal law should be codified. [25]', m: 25, ms: ['meaning of codification', 'history — Draft Code 1989; abandoned 2008', 'current state — OAPA 1861, common law murder', 'certainty and rule of law', 'democracy and separation of powers', 'flexibility of common law — R v R, R v G', 'codes need interpretation', 'partial codification successes', 'other jurisdictions', 'conclusion'] }],
  tools: []
});

/* ---------- 2.3.2a Actus reus and causation ---------- */
TOPICS.push({
  id: '2.3.2a', unit: 'CR', ref: '2.3.2', title: 'Actus reus and causation',
  short: 'Voluntary and involuntary conduct, state of affairs, consequences, omissions, factual and legal causation',
  summary: 'The actus reus is the physical element of an offence: conduct, circumstances and (for result crimes) consequences. It must be voluntary. Liability for failing to act (omissions) only arises where there is a duty to act. For result crimes such as murder, the prosecution must prove the defendant caused the result, in fact and in law.',
  spec: ['Elements of crime: actus reus — voluntary and involuntary conduct, state of affairs, consequences', 'Omissions: the general rule and the duty situations', 'Causation: factual causation (but for, de minimis)', 'Legal causation: operating and substantial cause; intervening acts (medical treatment, the victim’s own acts, third parties); thin skull rule', 'Coincidence of actus reus and mens rea'],
  learn: [
    { h: 'Voluntary conduct', html: `
<p>The actus reus must be <b>voluntary</b> — a willed act. If the defendant had no control (a reflex, a spasm, being pushed, attacked by a swarm of bees while driving), there is no actus reus ([[c:hillbaxter]]). This is the basis of the defence of automatism (topic 2.3.5).</p>
<p>Exception: <b>state of affairs</b> offences, where being in a situation is enough — [[c:larsonneur]]; <i>Winzar v CC Kent</i> (1983, drunk man removed from a hospital by police onto the highway and convicted of being drunk on a highway). Criticised as unjust.</p>
<p>Offences may be <b>conduct crimes</b> (the act is enough — e.g. perjury, dangerous driving) or <b>result crimes</b> (a consequence must follow — e.g. murder, ABH), which need causation.</p>` },
    { h: 'Omissions', html: `
<p><b>General rule:</b> there is no liability for failing to act. There is no general duty to rescue a stranger — a gap between law and morality.</p>
<div class="tbl"><table><tr><th>Duty arises from</th><th>Case</th></tr>
<tr><td><b>Statute</b></td><td>e.g. failing to provide a specimen (Road Traffic Act 1988); failing to report an accident; wilful neglect of a child (Children and Young Persons Act 1933)</td></tr>
<tr><td><b>Contract</b></td><td>[[c:pittwood]] (railway gatekeeper)</td></tr>
<tr><td><b>Special relationship</b> (parent and child, spouses)</td><td>[[c:gibbins]]</td></tr>
<tr><td><b>Voluntary assumption of care</b></td><td>[[c:stone]]</td></tr>
<tr><td><b>Public office</b></td><td>[[c:dytham]]</td></tr>
<tr><td><b>Creating a dangerous situation</b></td><td>[[c:miller]]; [[c:evans]]</td></tr></table></div>
<p>A duty can end — e.g. doctors withdrawing treatment that is no longer in the patient’s best interests ([[c:bland]]).</p>` },
    { h: 'Factual causation', html: `
<ul><li><b>“But for” test</b>: but for the defendant’s conduct, would the result have occurred when and as it did? — [[c:pagett]] (yes, caused); [[c:white]] (no, not caused — she would have died anyway).</li>
<li><b>De minimis</b>: the defendant’s contribution must be more than minimal — more than a “slight or trifling link” ([[c:kimsey]]). It need not be the only or main cause.</li></ul>` },
    { h: 'Legal causation and intervening acts', html: `
<p>The defendant’s act must be an <b>operating and substantial</b> cause of the result ([[c:smith]]), and the chain of causation must not be broken by a new intervening act (<i>novus actus interveniens</i>).</p>
<ul><li><b>Medical treatment</b>: rarely breaks the chain. Only if it is so independent and so potent that the original injury is insignificant ([[c:cheshire]]), or “palpably wrong” when the wound had healed ([[c:jordan]]). Switching off life support does not ([[c:malcherek]]).</li>
<li><b>The victim’s own act</b>: an escape attempt that is reasonably foreseeable does not break the chain — only a “daft” reaction does ([[c:roberts]]); it must be proportionate to the threat ([[c:williamsdavis]]). A free, deliberate and informed act by the victim, such as self-injecting drugs, does ([[c:kennedy]]).</li>
<li><b>Third parties</b>: a reasonable act of self-defence by police did not break the chain ([[c:pagett]]).</li>
<li><b>The thin skull rule</b>: the defendant takes the victim as found — physical and other characteristics, including religious beliefs ([[c:blaue]]).</li></ul>` },
    { h: 'Coincidence of actus reus and mens rea', html: `
<p>The actus reus and mens rea must exist at the same time. The courts are flexible:</p>
<ul><li><b>Continuing act</b>: [[c:fagan]] — the actus reus continued until the mens rea arose.</li>
<li><b>Single transaction</b>: [[c:thabomeli]]; <i>R v Church</i> (1966).</li></ul>` }
  ],
  debate: [{ q: 'Should English law impose a duty to rescue?', for: ['Morally, failing to help someone in danger when it is easy and safe to do so is wrong.', 'Many European countries (e.g. France) have “Good Samaritan” laws.', 'Would clarify the uncertain duty categories.'], ag: ['Individual liberty — the law should not compel positive acts.', 'Difficult to define who must help and how much.', 'Risk to rescuers; problems of proof.', 'Existing duty categories cover most serious cases.'] }],
  cases: ['hillbaxter', 'larsonneur', 'pittwood', 'gibbins', 'stone', 'dytham', 'miller', 'evans', 'bland', 'pagett', 'white', 'kimsey', 'smith', 'cheshire', 'jordan', 'malcherek', 'roberts', 'williamsdavis', 'kennedy', 'blaue', 'fagan', 'thabomeli'],
  worked: [{ q: '<b>Scenario.</b> Asha stabs Ben in a fight. At hospital, a junior doctor misreads his notes and gives him the wrong drug; he has a bad reaction and dies. Ben’s wound was still serious. Advise on causation.', s: ['<b class="st">Factual</b>But for the stabbing, Ben would not have been in hospital and would not have died when he did (Pagett). The stabbing is more than a minimal cause (Kimsey).', '<b class="st">Legal</b>Was the stab wound still an operating and substantial cause (Smith)? Yes — it was still serious.', '<b class="st">Medical treatment</b>Negligent treatment breaks the chain only if it is so independent and potent that the stab wound becomes insignificant (Cheshire). Jordan (palpably wrong treatment when the wound had healed) is distinguishable because the wound had not healed.', '<b class="st">Conclude</b>The chain is not broken; Asha caused Ben’s death. Her liability for murder or manslaughter depends on her mens rea.'], a: 'Asha legally caused the death — Smith and Cheshire.' }],
  pitfalls: ['Saying there is never liability for omissions.', 'Treating any negligent medical treatment as breaking the chain.', 'Forgetting the thin skull rule applies to beliefs (Blaue).', 'Applying the but-for test alone without legal causation.'],
  cards: [
    ['Hill v Baxter (1958)?', 'Conduct must be voluntary — examples of involuntary driving.'],
    ['R v Larsonneur (1933)?', 'State of affairs offence — guilty though presence involuntary.'],
    ['Six duty situations for omissions?', 'Statute, contract, special relationship, voluntary assumption, public office, creating a danger.'],
    ['R v Pittwood (1902)?', 'Contractual duty — railway gatekeeper.'],
    ['R v Stone and Dobinson (1977)?', 'Voluntary assumption of care.'],
    ['R v Miller (1983)?', 'Creating a dangerous situation — mattress fire.'],
    ['R v White (1910)?', 'No factual causation — mother died of heart attack.'],
    ['R v Pagett (1983)?', 'Human shield — but-for satisfied; police reaction did not break chain.'],
    ['R v Smith (1959)?', 'Wound still an operating and substantial cause despite poor treatment.'],
    ['R v Cheshire (1991)?', 'Medical negligence breaks chain only if so independent and potent.'],
    ['R v Jordan (1956)?', 'Palpably wrong treatment when wound healed — chain broken.'],
    ['R v Roberts (1971)?', 'Victim’s foreseeable escape does not break chain — “daft” test.'],
    ['R v Kennedy (No 2) (2007)?', 'Free, deliberate, informed self-injection broke the chain.'],
    ['R v Blaue (1975)?', 'Thin skull rule includes religious beliefs.'],
    ['Fagan v MPC (1969)?', 'Continuing act — car on the officer’s foot.']
  ],
  quiz: [
    { q: 'In R v White there was no factual causation because…', o: ['the victim died of an unrelated heart attack', 'the poison was too weak', 'the victim refused treatment', 'the doctor was negligent'], x: 'But for test failed.' },
    { q: 'Which case imposed a duty to act on someone who created a dangerous situation?', o: ['R v Miller', 'R v Pittwood', 'R v Gibbins and Proctor', 'R v Dytham'], x: 'Mattress fire.' },
    { q: 'Negligent medical treatment breaks the chain of causation…', o: ['only if it is so independent and potent that the original injury is insignificant', 'always', 'never', 'if the doctor is sued'], x: 'Cheshire.' },
    { q: 'In R v Blaue the defendant was liable because…', o: ['he must take the victim as he found her, including her beliefs', 'she accepted the transfusion', 'he was a doctor', 'the wound was minor'], x: 'Thin skull rule.' },
    { q: 'R v Kennedy (No 2) held that…', o: ['free, deliberate self-injection by the victim breaks the chain', 'drug suppliers are always guilty of manslaughter', 'omissions cause death', 'causation is presumed'], x: 'Unlawful act manslaughter failed.' },
    { q: 'A police officer who watched a man being beaten and did nothing was liable in…', o: ['R v Dytham', 'R v Pittwood', 'R v Evans', 'R v Stone'], x: 'Public office.' },
    { q: 'In R v Roberts, a victim jumping from a car did not break the chain because…', o: ['her reaction was reasonably foreseeable', 'she was not injured', 'the driver intended it', 'it was an omission'], x: '“Daft” reactions only.' },
    { q: 'Fagan v MPC shows that the actus reus can be…', o: ['a continuing act', 'an omission only', 'a state of affairs', 'involuntary'], x: 'Car on foot.' },
    { q: 'For factual causation, the defendant’s contribution must be…', o: ['more than minimal (de minimis)', 'the only cause', 'the main cause', 'intentional'], x: 'Kimsey.' }
  ],
  exam: [{ q: 'Explain the rules on legal causation in criminal law. [10]', m: 10, ms: ['need for factual and legal causation', 'operating and substantial cause — Smith', 'medical treatment — Cheshire, Jordan, Malcherek', 'victim’s acts — Roberts, Williams and Davis', 'free deliberate informed act — Kennedy', 'third parties — Pagett', 'thin skull — Blaue', 'de minimis — Kimsey'] }],
  tools: ['omitsort', 'crimcausetree']
});

/* ---------- 2.3.2b Mens rea and strict liability ---------- */
TOPICS.push({
  id: '2.3.2b', unit: 'CR', ref: '2.3.2', title: 'Mens rea and strict liability',
  short: 'Intention (direct and oblique), recklessness, negligence, transferred malice, strict liability and the Gammon tests',
  summary: 'Mens rea is the mental element of a crime — the fault that justifies punishment. The main forms are intention (direct or oblique), subjective recklessness and, for some offences, negligence. Strict liability offences dispense with mens rea for at least one element; the courts decide whether an offence is strict using the presumption of mens rea and the Gammon tests.',
  spec: ['Mens rea: fault; intention (direct and oblique)', 'Recklessness: subjective (Cunningham, R v G)', 'Negligence', 'Transferred malice', 'Strict liability: the presumption of mens rea and the Gammon tests; examples; arguments for and against', 'Burden and standard of proof'],
  learn: [
    { h: 'Intention', html: `
<p><b>Direct intention</b>: the defendant’s aim or purpose is to bring about the consequence (<i>R v Mohan</i>, 1976: “a decision to bring about … no matter whether the accused desired that consequence”).</p>
<p><b>Oblique (indirect) intention</b>: the consequence was not the aim, but was a side-effect the defendant foresaw as virtually certain. The law developed through:</p>
<ol><li>[[c:moloney]] — foresight is evidence of intention; “natural consequence”.</li>
<li>[[c:hancock]] — the greater the probability, the more likely it was intended.</li>
<li>[[c:nedrick]] — the virtual certainty test.</li>
<li>[[c:woollin]] — the jury may <b>find</b> intention if (a) death or serious bodily harm was a <b>virtual certainty</b> (barring some unforeseen intervention) as a result of the defendant’s actions, and (b) the defendant <b>appreciated</b> that this was the case.</li>
<li>[[c:matthews]] — this is a rule of evidence: the jury is entitled, not obliged, to find intention.</li></ol>
<p>Section 8 Criminal Justice Act 1967: the jury decides what the defendant actually intended or foresaw, using all the evidence — it is not bound to infer it just because it was a natural and probable result.</p>` },
    { h: 'Recklessness and negligence', html: `
<p><b>Recklessness</b> is <b>subjective</b>: the defendant must be aware of a risk and unreasonably go on to take it — [[c:cunningham]]. The objective test from <i>MPC v Caldwell</i> (1982) (“an obvious risk”, even if the defendant did not see it) was overruled in [[c:rvg]], because it was unfair to children and people with limited mental capacity.</p>
<p><b>Negligence</b> is an <b>objective</b> standard — falling below what a reasonable person would do. It is rarely enough for serious crimes, but is the basis of <b>gross negligence manslaughter</b> ([[c:adomako]]) and driving offences such as careless driving.</p>
<div class="tbl"><table><tr><th>Level of fault</th><th>Test</th><th>Example offences</th></tr>
<tr><td>Intention</td><td>Aim, or foresight of virtual certainty</td><td>Murder, s18, theft (ITPD), attempts</td></tr>
<tr><td>Recklessness</td><td>Subjective awareness of risk, unreasonably taken</td><td>Assault, battery, s20, criminal damage</td></tr>
<tr><td>Negligence</td><td>Objective — below reasonable standard</td><td>Gross negligence manslaughter, careless driving</td></tr>
<tr><td>None (strict liability)</td><td>No mens rea for at least one element</td><td>Selling food unfit for consumption, selling lottery tickets to under-16s, some pollution offences</td></tr></table></div>` },
    { h: 'Transferred malice', html: `
<p>If the defendant intends to commit a crime against one person but commits the same crime against another, the mens rea <b>transfers</b> — [[c:rlatimer]]. It does not transfer between different types of crime — [[c:pembliton]] (intention to injure people ≠ intention to damage property). It cannot be transferred twice — [[c:agref3of1994]].</p>` },
    { h: 'Strict liability', html: `
<p>A <b>strict liability</b> offence does not require mens rea as to at least one element of the actus reus; the act must still be proved and be voluntary. Most are regulatory offences created by statute: food safety ([[c:callow]]), lottery sales ([[c:shah]]), pollution ([[c:alphacell]]), pharmacy ([[c:storkwain]]). <b>Absolute liability</b> — no need even for a voluntary act — is very rare ([[c:larsonneur]]).</p>
<p>There is a <b>presumption</b> that Parliament intends mens rea to be required ([[c:sweetparsley]]; [[c:bvdpp]]). The courts apply the <b>Gammon tests</b> ([[c:gammon]]):</p>
<ol><li>There is a presumption that mens rea is required.</li><li>The presumption is particularly strong where the offence is “<b>truly criminal</b>” in character.</li><li>It can be displaced only if this is <b>clearly or by necessary implication</b> the effect of the statute.</li><li>It can be displaced only where the statute deals with an issue of <b>social concern</b>, such as public safety.</li><li>Even then, it stands unless strict liability would <b>promote the objects</b> of the statute by encouraging greater vigilance.</li></ol>
<p>Many statutes provide a <b>due diligence</b> defence, softening strict liability.</p>` }
  ],
  debate: [{ q: 'Is strict liability justified?', for: ['Protects the public in areas of social concern (food, pollution, alcohol and lottery sales to children).', 'Encourages high standards of care by businesses.', 'Easier and cheaper to enforce; saves court time.', 'Usually minor penalties and no real stigma.', 'Parliament can include due diligence defences.'], ag: ['Punishes the blameless — the butcher in Callow v Tillstone took reasonable care.', 'No evidence it improves standards.', 'Contrary to the principle that punishment requires fault; Art 6(2) concerns.', 'Stigma of conviction still affects individuals and small businesses.', 'Uncertain which offences are strict — courts must interpret.'] }],
  cases: ['moloney', 'hancock', 'nedrick', 'woollin', 'matthews', 'cunningham', 'rvg', 'adomako', 'rlatimer', 'pembliton', 'agref3of1994', 'callow', 'shah', 'alphacell', 'storkwain', 'larsonneur', 'sweetparsley', 'bvdpp', 'gammon'],
  worked: [{ q: '<b>Scenario.</b> Cara sets fire to her ex-partner’s car at 3am to “teach him a lesson”. She knows he often sleeps in it when drunk but hopes he is not there tonight. He is, and he dies. Advise on whether Cara had the mens rea for murder.', s: ['<b class="st">Direct intent</b>Her aim was to damage the car, not to kill or cause serious harm — no direct intention.', '<b class="st">Oblique intent</b>Woollin: was death or serious injury a virtual certainty (barring some unforeseen intervention) and did Cara appreciate that? She knew he often slept there, but “hoped” he was not — it may not have been virtually certain he was present.', '<b class="st">Jury</b>If the jury finds both limbs satisfied, it may find intention (Matthews and Alleyne — it is entitled but not obliged).', '<b class="st">Otherwise</b>If intention is not found, she is likely guilty of manslaughter — unlawful act (arson is dangerous — Church) — or of arson with intent or recklessness as to endangering life.'], a: 'Depends on the jury applying Woollin; otherwise unlawful act manslaughter.' }],
  pitfalls: ['Saying foresight of virtual certainty is intention — it is evidence from which the jury may find intention (Matthews).', 'Using the Caldwell objective test — overruled in R v G.', 'Saying transferred malice works between different crimes.', 'Listing strict liability examples without the Gammon tests or evaluation.'],
  cards: [
    ['Direct intention?', 'The defendant’s aim or purpose is to bring about the consequence (Mohan).'],
    ['Woollin test for oblique intention?', 'Death/serious harm a virtual certainty and defendant appreciated this — jury may find intention.'],
    ['R v Nedrick (1986)?', 'Introduced the virtual certainty test.'],
    ['R v Matthews and Alleyne (2003)?', 'Woollin is a rule of evidence, not substantive law.'],
    ['Cunningham recklessness?', 'Subjective: aware of the risk and takes it unreasonably.'],
    ['R v G (2003)?', 'Overruled Caldwell’s objective recklessness.'],
    ['Transferred malice?', 'Mens rea transfers to an unintended victim of the same crime (Latimer), not a different crime (Pembliton).'],
    ['Strict liability?', 'No mens rea needed for at least one element of the actus reus.'],
    ['Callow v Tillstone (1900)?', 'Butcher guilty despite vet’s certificate — strict liability.'],
    ['Sweet v Parsley (1970)?', 'Presumption of mens rea not rebutted — conviction quashed.'],
    ['Gammon tests (five)?', 'Presumption; stronger if truly criminal; displaced clearly/necessarily; social concern; promotes vigilance.'],
    ['Harrow LBC v Shah (1999)?', 'Lottery ticket sold to under-16 — strict liability.']
  ],
  quiz: [
    { q: 'The current test for oblique intention comes from…', o: ['R v Woollin', 'R v Cunningham', 'R v G', 'Sweet v Parsley'], x: 'Virtual certainty, appreciated.' },
    { q: 'Recklessness in criminal law is now…', o: ['subjective', 'objective', 'the same as negligence', 'irrelevant'], x: 'R v G overruled Caldwell.' },
    { q: 'In R v Pembliton malice did not transfer because…', o: ['the intended and actual crimes were different types', 'the victim was unknown', 'there was no harm', 'the defendant was drunk'], x: 'People vs window.' },
    { q: 'Which case sets out the five tests for strict liability?', o: ['Gammon v AG of Hong Kong', 'Sweet v Parsley', 'Callow v Tillstone', 'Alphacell v Woodward'], x: 'Privy Council, 1985.' },
    { q: 'In Sweet v Parsley the House of Lords held that…', o: ['mens rea is presumed to be required', 'all drug offences are strict liability', 'landlords are always liable', 'recklessness is objective'], x: 'Conviction quashed.' },
    { q: 'R v Matthews and Alleyne held that foresight of virtual certainty…', o: ['is evidence from which intention may be found', 'is intention', 'is irrelevant', 'is recklessness'], x: 'Rule of evidence.' },
    { q: 'Which offence is based on negligence rather than intention or recklessness?', o: ['Gross negligence manslaughter', 'Murder', 's18 GBH with intent', 'Theft'], x: 'Adomako.' },
    { q: 'A strict liability offence still requires…', o: ['a voluntary actus reus', 'intention', 'recklessness', 'dishonesty'], x: 'Absolute liability is rare.' }
  ],
  exam: [
    { q: 'Explain the law on oblique intention. [10]', m: 10, ms: ['direct v oblique intention', 's8 CJA 1967', 'Moloney — natural consequence', 'Hancock and Shankland — probability', 'Nedrick — virtual certainty', 'Woollin — two limbs; “find”', 'Matthews and Alleyne — evidence', 'application to murder'] },
    { q: 'Analyse and evaluate whether strict liability offences should exist. [25]', m: 25, ms: ['definition and examples', 'presumption of mens rea — Sweet v Parsley, B v DPP', 'Gammon tests', 'arguments for — public protection, vigilance, efficiency', 'arguments against — blameless convicted (Callow, Storkwain)', 'evidence on deterrence', 'due diligence defences as compromise', 'Art 6(2) / presumption of innocence', 'fault principle — link to N2', 'conclusion'] }
  ],
  tools: ['mrsort', 'sltree']
});

/* ---------- 2.3.3a Murder ---------- */
TOPICS.push({
  id: '2.3.3a', unit: 'CR', ref: '2.3.3', title: 'Murder',
  short: 'Definition, actus reus, malice aforethought (intention to kill or cause GBH), sentence, reform',
  summary: 'Murder is the most serious homicide offence. It is a common law offence: the unlawful killing of a reasonable creature in being under the King’s peace with malice aforethought, express or implied. The mens rea is intention to kill or intention to cause grievous bodily harm. The sentence is mandatory life imprisonment, which makes the partial defences to murder especially important.',
  spec: ['Definition of murder (Coke)', 'Actus reus: unlawful killing, reasonable creature in being, under the King’s peace; causation', 'Mens rea: malice aforethought — intention to kill or intention to cause GBH; oblique intention', 'Sentencing: the mandatory life sentence', 'Application of the law to scenarios; evaluation and reform'],
  learn: [
    { h: 'Definition', html: `
<div class="box def"><b class="lbl">Coke’s definition (17th century)</b><p>Murder is the <b>unlawful killing</b> of a <b>reasonable creature in being</b> under the <b>King’s peace</b> with <b>malice aforethought</b>, express or implied.</p></div>
<ul><li><b>Unlawful</b>: not justified (e.g. by self-defence) — see topic 2.3.6.</li>
<li><b>Killing</b>: an act or omission (where there is a duty) that causes death — factual and legal causation (topic 2.3.2a). The “year and a day” rule was abolished by the Law Reform (Year and a Day Rule) Act 1996; prosecutions more than three years after the injury need the Attorney General’s consent.</li>
<li><b>Reasonable creature in being</b>: a human being born alive and with an existence independent of the mother; not a foetus ([[c:agref3of1994]]). A person is dead when brain stem death occurs ([[c:malcherek]]).</li>
<li><b>Under the King’s peace</b>: not killing an enemy in the course of war. Murder by a British citizen anywhere in the world can be tried here.</li></ul>` },
    { h: 'Malice aforethought', html: `
<p>Despite the words, murder needs neither malice (ill will) nor premeditation. Mercy killing is murder ([[c:inglis]]).</p>
<ul><li><b>Express malice</b> = intention to kill.</li>
<li><b>Implied malice</b> = intention to cause <b>grievous bodily harm</b> — [[c:vickers]]; confirmed in <i>R v Cunningham</i> (1982). GBH means “really serious harm” ([[c:dppsmith]]).</li>
<li>Intention may be direct or oblique (<b>Woollin</b> — topic 2.3.2b).</li>
<li>Transferred malice applies ([[c:rlatimer]]).</li></ul>` },
    { h: 'Sentence and evaluation', html: `
<p>Murder carries a <b>mandatory life sentence</b>. The judge sets a <b>minimum term</b> using Schedule 21 Sentencing Act 2020: a whole life order (e.g. for the murder of two or more people with premeditation, or a child with sexual or sadistic motivation); 30 years (e.g. murder with a firearm, or of a police officer); 25 years (a knife taken to the scene); 15 years (otherwise), adjusted by aggravating and mitigating factors.</p>
<h4>Criticisms</h4><ul><li>Intention to cause GBH is enough, so a defendant who never foresaw death can be a murderer — the “GBH rule” is criticised as too harsh.</li>
<li>The mandatory sentence treats mercy killers and contract killers alike; there is no partial defence of mercy killing or excessive self-defence ([[c:clegg|R v Clegg]]).</li>
<li>Woollin leaves the jury discretion — risk of inconsistent verdicts.</li>
<li>The Law Commission’s <i>Murder, Manslaughter and Infanticide</i> (2006) recommended a three-tier structure: <b>first degree murder</b> (intention to kill, or intention to cause serious injury with awareness of a serious risk of death — mandatory life), <b>second degree murder</b> (intention to cause serious injury; killing with intent to cause fear or risk of injury, aware of a serious risk of death; or where a partial defence applies — discretionary life), and <b>manslaughter</b>. Only the partial defences were reformed (Coroners and Justice Act 2009). In 2023–24 the government asked the Law Commission to review homicide law again, including the partial defences.</li></ul>` }
  ],
  debate: [{ q: 'Should the mandatory life sentence for murder be abolished?', for: ['Judges could reflect different levels of blame (mercy killing v contract killing).', 'The GBH rule means some “murderers” never foresaw death.', 'Most comparable countries give judges discretion.', 'Would reduce pressure on the partial defences.'], ag: ['Marks murder as uniquely serious; public confidence.', 'Minimum terms (Schedule 21) already allow variation.', 'Release on licence is decided by the Parole Board.', 'Deterrence and denunciation of killing.'] }],
  cases: ['agref3of1994', 'malcherek', 'inglis', 'vickers', 'dppsmith', 'rlatimer', 'woollin', 'jogee'],
  worked: [{ q: '<b>Scenario.</b> Dev punches Eli once in the face in a bar, intending to break his nose. Eli falls, hits his head on the bar and dies. Advise whether Dev is guilty of murder.', s: ['<b class="st">Actus reus</b>Dev unlawfully killed Eli, a reasonable creature in being, under the King’s peace. Causation: but for the punch, Eli would not have fallen (Pagett); the punch was an operating and substantial cause (Smith); the fall is not an intervening act.', '<b class="st">Mens rea</b>No intention to kill. Did Dev intend GBH (Vickers)? A broken nose is probably not “really serious harm” (DPP v Smith) — a jury may decide it is ABH-level harm. If he intended only a broken nose, there is no malice aforethought.', '<b class="st">Alternative</b>Unlawful act manslaughter: an unlawful act (battery), dangerous (a sober and reasonable person would see the risk of some harm — Church), which caused death.', '<b class="st">Conclude</b>Probably manslaughter, not murder, unless the jury finds he intended really serious harm.'], a: 'Likely unlawful act manslaughter rather than murder.' }],
  pitfalls: ['Saying murder requires premeditation or malice in its ordinary sense.', 'Forgetting that intention to cause GBH is enough.', 'Not dealing with causation in a murder problem.', 'Describing the Law Commission’s 2006 proposals as law.'],
  cards: [
    ['Definition of murder?', 'Unlawful killing of a reasonable creature in being under the King’s peace with malice aforethought, express or implied (Coke).'],
    ['Express v implied malice?', 'Express: intention to kill. Implied: intention to cause GBH.'],
    ['R v Vickers (1957)?', 'Intention to cause GBH is enough for murder.'],
    ['Meaning of GBH?', 'Really serious harm (DPP v Smith).'],
    ['AG’s Ref (No 3 of 1994)?', 'A foetus is not a reasonable creature in being; malice cannot transfer twice.'],
    ['Sentence for murder?', 'Mandatory life imprisonment, with a minimum term under Schedule 21.'],
    ['Is mercy killing a defence?', 'No — R v Inglis (2010).'],
    ['Law Commission 2006 proposal?', 'First degree murder, second degree murder, manslaughter.']
  ],
  quiz: [
    { q: 'The mens rea of murder is…', o: ['intention to kill or to cause GBH', 'recklessness as to death', 'gross negligence', 'intention to cause ABH'], x: 'Malice aforethought.' },
    { q: 'In R v Vickers the court held that…', o: ['intention to cause GBH is sufficient for murder', 'murder needs premeditation', 'burglars cannot be murderers', 'GBH means any harm'], x: 'Implied malice.' },
    { q: 'A foetus is not a “reasonable creature in being” — which case?', o: ['AG’s Reference (No 3 of 1994)', 'R v Malcherek', 'R v Inglis', 'R v Woollin'], x: 'Stabbed pregnant woman.' },
    { q: 'The sentence for murder is…', o: ['mandatory life imprisonment', 'discretionary up to life', 'a maximum of 30 years', 'decided by the jury'], x: 'Minimum term set by the judge.' },
    { q: 'In R v Inglis, a mother who killed her disabled son out of compassion was guilty of…', o: ['murder', 'manslaughter by diminished responsibility', 'no offence', 'assisted suicide only'], x: 'No mercy killing defence.' },
    { q: 'The Law Commission (2006) recommended…', o: ['a three-tier structure of homicide', 'abolishing murder', 'a single offence of unlawful killing', 'no change'], x: 'First and second degree murder.' }
  ],
  exam: [{ q: 'Analyse and evaluate the law on murder. [25]', m: 25, ms: ['definition and actus reus elements', 'causation issues', 'malice aforethought — express/implied (Vickers, Cunningham)', 'GBH rule — criticism', 'oblique intention — Woollin; jury discretion', 'mandatory life — Inglis; Clegg', 'partial defences as a response', 'Law Commission 2006 proposals; 2023 review', 'moral/justice arguments', 'conclusion'] }],
  tools: ['homicideladder']
});

/* ---------- 2.3.3b Voluntary manslaughter ---------- */
TOPICS.push({
  id: '2.3.3b', unit: 'CR', ref: '2.3.3', title: 'Voluntary manslaughter: loss of control and diminished responsibility',
  short: 'Partial defences to murder: Coroners and Justice Act 2009 ss52–56, s2 Homicide Act 1957',
  summary: 'Voluntary manslaughter arises where the defendant has the actus reus and mens rea of murder, but a partial defence reduces the conviction to manslaughter, allowing the judge discretion in sentencing. The two main partial defences are loss of control (which replaced provocation in 2010) and diminished responsibility (redefined in 2010).',
  spec: ['The meaning of voluntary manslaughter', 'Loss of control: ss54–56 Coroners and Justice Act 2009 — loss of self-control, qualifying triggers, the normal person test, exclusions', 'Diminished responsibility: s2 Homicide Act 1957 as amended by s52 CJA 2009', 'Burden of proof for each defence', 'Application and evaluation'],
  learn: [
    { h: 'Loss of control: ss54–56 CJA 2009', html: `
<p>Provocation (s3 Homicide Act 1957) was abolished by s56 and replaced with <b>loss of control</b>. Under s54(1) a defendant is not guilty of murder but of manslaughter if:</p>
<ol><li><b>(a)</b> the acts or omissions resulted from the defendant’s <b>loss of self-control</b>;</li>
<li><b>(b)</b> the loss of self-control had a <b>qualifying trigger</b>; and</li>
<li><b>(c)</b> a person of the defendant’s <b>sex and age</b>, with a <b>normal degree of tolerance and self-restraint</b>, and in the <b>circumstances of the defendant</b>, might have reacted in the same or a similar way.</li></ol>
<ul><li><b>s54(2)</b>: the loss of control need <b>not be sudden</b> — helping abused people who kill after a “slow burn” (contrast [[c:duffy]]).</li>
<li><b>s54(4)</b>: no defence if the defendant acted in a <b>considered desire for revenge</b> — [[c:jewell]].</li></ul>
<h4>Qualifying triggers (s55)</h4><ul><li><b>s55(3) Fear trigger</b>: fear of serious violence from the victim against the defendant or another identified person.</li>
<li><b>s55(4) Anger trigger</b>: things done or said (or both) which constituted circumstances of an <b>extremely grave character</b> and caused the defendant to have a <b>justifiable sense of being seriously wronged</b>.</li>
<li>Or a combination of both.</li></ul>
<h4>Exclusions</h4><ul><li><b>s55(6)(a)–(b)</b>: a trigger the defendant <b>incited</b> as an excuse to use violence is disregarded — [[c:dawes]].</li>
<li><b>s55(6)(c)</b>: <b>sexual infidelity</b> is disregarded as a trigger in itself, but may be considered as context — [[c:clinton]].</li></ul>
<p>For the <b>normal person test</b>, “circumstances” include matters relevant beyond the defendant’s general capacity for tolerance — e.g. a history of abuse — but not voluntary intoxication ([[c:asmelash]]).</p>
<p><b>Burden</b>: the defendant must raise sufficient evidence; the judge decides whether a properly directed jury could reasonably conclude the defence might apply (s54(6)); then the <b>prosecution</b> must disprove it beyond reasonable doubt.</p>` },
    { h: 'Diminished responsibility', html: `
<div class="box stat"><b class="lbl">s2(1) Homicide Act 1957 (as substituted by s52 CJA 2009)</b><p>A person who kills is not guilty of murder if suffering from an <b>abnormality of mental functioning</b> which (a) arose from a <b>recognised medical condition</b>, (b) <b>substantially impaired</b> their ability to do one or more of: understand the nature of their conduct; form a rational judgment; exercise self-control; and (c) provides an <b>explanation</b> for their acts — i.e. was a <b>significant contributory factor</b> in causing them to kill.</p></div>
<ul><li><b>Abnormality of mental functioning</b> — a state of mind so different from that of ordinary human beings that the reasonable person would term it abnormal ([[c:rbyrne]], under the old wording).</li>
<li><b>Recognised medical condition</b> — in accepted classifications (e.g. depression, PTSD, schizophrenia, battered woman syndrome, alcohol dependency syndrome — [[c:wood]]); requires expert evidence.</li>
<li><b>Substantially impaired</b> — significant or appreciable, not total ([[c:golds]]).</li>
<li><b>Intoxication</b>: voluntary intoxication alone is not a recognised medical condition. Where there is an abnormality and intoxication, the jury asks whether the abnormality substantially impaired the defendant despite the drink ([[c:dietschmann]]).</li>
<li><b>Burden</b>: on the <b>defendant</b>, on the balance of probabilities (s2(2)).</li></ul>` },
    { h: 'Evaluation', html: `
<ul><li>Loss of control improved on provocation: no need for suddenness; the fear trigger helps abused victims; trivial provocation excluded by the “extremely grave” requirement.</li>
<li>But the sexual infidelity exclusion has proved confusing (Clinton); the “considered desire for revenge” exclusion can still defeat abused women; judges act as gatekeepers, keeping the defence from juries.</li>
<li>Diminished responsibility is widely used; the 2009 wording is more medical and precise, but places a reverse burden on the defendant and depends on expert evidence; developmental immaturity in young defendants is not specifically covered.</li>
<li>Both exist largely because of the mandatory life sentence for murder. In 2024 the Law Commission began a review of homicide defences, including loss of control, diminished responsibility and whether there should be a defence for victims of domestic abuse who kill.</li></ul>` }
  ],
  debate: [{ q: 'Has the Coroners and Justice Act 2009 improved the law on partial defences?', for: ['Removing suddenness helps abused defendants (the “slow burn”).', 'Fear trigger covers excessive force in self-defence.', 'Extremely grave threshold stops trivial provocation.', 'DR now based on recognised medical conditions.'], ag: ['Sexual infidelity exclusion confusing — Clinton lets it back in as context.', 'Revenge exclusion and the judge’s gatekeeping role narrow the defence.', 'Reverse burden for DR; heavy reliance on experts.', 'No defence for mercy killing; young defendants’ immaturity not covered.'] }],
  cases: ['duffy', 'jewell', 'dawes', 'clinton', 'asmelash', 'rbyrne', 'wood', 'golds', 'dietschmann'],
  worked: [{ q: '<b>Scenario.</b> Fay has suffered years of abuse from her husband Gus. One night he threatens to kill her and their son. She waits until he falls asleep, then kills him with a hammer. A psychiatrist says she has PTSD. Advise Fay.', s: ['<b class="st">Murder</b>She has the actus reus and mens rea of murder (intention to kill or cause GBH).', '<b class="st">Loss of control — (a)</b>Did she lose self-control? It need not be sudden (s54(2)). But waiting until he slept may suggest a considered desire for revenge (s54(4); Jewell) — the jury must decide.', '<b class="st">Trigger — (b)</b>Fear of serious violence against her and her son (s55(3)); and his threats and abuse may be circumstances of an extremely grave character giving a justifiable sense of being seriously wronged (s55(4)).', '<b class="st">Normal person — (c)</b>A woman of her age with normal tolerance, in her circumstances (history of abuse), might have reacted similarly.', '<b class="st">Diminished responsibility</b>PTSD is a recognised medical condition; did it substantially impair her ability to form a rational judgment or exercise self-control (Golds), and was it a significant contributory factor? She must prove this on the balance of probabilities.', '<b class="st">Conclude</b>Diminished responsibility is probably the stronger defence; either would reduce murder to voluntary manslaughter.'], a: 'Voluntary manslaughter via DR (stronger) or loss of control.' }],
  pitfalls: ['Calling the defence “provocation” — it was abolished in 2010.', 'Saying loss of control must be sudden.', 'Forgetting that DR puts the burden on the defendant.', 'Treating voluntary intoxication as a recognised medical condition.', 'Forgetting these are defences to murder only.'],
  cards: [
    ['Three elements of loss of control (s54(1))?', 'Loss of self-control; qualifying trigger; normal person of D’s sex and age in D’s circumstances might have reacted similarly.'],
    ['Must loss of control be sudden?', 'No — s54(2).'],
    ['Two qualifying triggers?', 'Fear of serious violence (s55(3)); things done/said — extremely grave, justifiable sense of being seriously wronged (s55(4)).'],
    ['Considered desire for revenge?', 'Excludes the defence — s54(4); R v Jewell.'],
    ['R v Clinton (2012)?', 'Sexual infidelity can be context though not a trigger alone.'],
    ['Four elements of diminished responsibility?', 'Abnormality of mental functioning; recognised medical condition; substantial impairment of ability to understand/judge/control; explanation (significant contributory factor).'],
    ['R v Golds (2016)?', '“Substantially” = significant or appreciable.'],
    ['R v Dietschmann (2003)?', 'Abnormality plus intoxication — did the abnormality substantially impair despite the drink?'],
    ['Burden for DR?', 'On the defendant, balance of probabilities.'],
    ['Burden for loss of control?', 'Evidential burden on D; prosecution disproves beyond reasonable doubt.']
  ],
  quiz: [
    { q: 'Loss of control replaced the defence of…', o: ['provocation', 'diminished responsibility', 'insanity', 'duress'], x: 's56 CJA 2009.' },
    { q: 'Under s54(2) CJA 2009, the loss of control…', o: ['need not be sudden', 'must be sudden and temporary', 'must last at least an hour', 'must be caused by alcohol'], x: 'Slow burn.' },
    { q: 'Which is disregarded as a qualifying trigger in itself?', o: ['Sexual infidelity', 'Fear of serious violence', 'Extremely grave circumstances', 'Threats to a child'], x: 's55(6)(c).' },
    { q: 'In R v Jewell the defence failed because…', o: ['planning showed a considered desire for revenge', 'there was no trigger', 'he was intoxicated', 'he was insane'], x: 'Packed a bag of weapons.' },
    { q: 'Diminished responsibility requires an abnormality arising from…', o: ['a recognised medical condition', 'voluntary intoxication', 'anger', 'any emotion'], x: 's2(1)(a).' },
    { q: 'The burden of proving diminished responsibility is on…', o: ['the defendant, on the balance of probabilities', 'the prosecution, beyond reasonable doubt', 'the judge', 'no one'], x: 's2(2).' },
    { q: 'Voluntary manslaughter means…', o: ['the defendant had the mens rea for murder but a partial defence applies', 'the defendant lacked mens rea', 'the death was accidental', 'the defendant was insane'], x: 'Reduces murder to manslaughter.' },
    { q: 'Voluntary intoxication is not one of the defendant’s “circumstances” for the normal person test — which case?', o: ['R v Asmelash', 'R v Clinton', 'R v Wood', 'R v Golds'], x: '2013.' }
  ],
  exam: [
    { q: 'Explain the partial defence of diminished responsibility. [10]', m: 10, ms: ['s2 Homicide Act 1957 as amended by s52 CJA 2009', 'abnormality of mental functioning — Byrne', 'recognised medical condition — examples; Wood', 'substantial impairment — Golds', 'three abilities', 'significant contributory factor', 'intoxication — Dietschmann', 'burden on defendant; effect — manslaughter'] },
    { q: 'Scenario (Component 2)', scen: 'Hana’s partner Ian has repeatedly humiliated her. At a party, Ian tells everyone Hana has been having an affair and says he will “make her pay” when they get home. Hana, who has been drinking, grabs a kitchen knife and stabs Ian, killing him. She has a history of depression. <b>Advise Hana on her liability for Ian’s death. [15]</b>', m: 15, ms: ['murder — AR, causation, MR (intention to kill/GBH)', 'loss of control — (a) loss of self-control', 's54(4) revenge?', 'triggers — fear (s55(3)) / anger (s55(4))', 'sexual infidelity context — Clinton', 'normal person — circumstances; intoxication excluded (Asmelash)', 'DR — depression as RMC; substantial impairment (Golds); Dietschmann', 'burdens of proof', 'reasoned conclusion'] }
  ],
  tools: ['loctree']
});

/* ---------- 2.3.3c Involuntary manslaughter ---------- */
TOPICS.push({
  id: '2.3.3c', unit: 'CR', ref: '2.3.3', title: 'Involuntary manslaughter',
  short: 'Unlawful act (constructive) manslaughter and gross negligence manslaughter',
  summary: 'Involuntary manslaughter is an unlawful killing without the mens rea for murder. The specification covers two types: unlawful act (constructive) manslaughter — a dangerous criminal act that causes death — and gross negligence manslaughter — a breach of a duty of care so bad it deserves criminal punishment. The maximum sentence is life imprisonment.',
  spec: ['Unlawful act (constructive) manslaughter: unlawful act, dangerous, causing death, mens rea for the unlawful act', 'Gross negligence manslaughter: duty, breach, risk of death, causation, gross negligence (Adomako)', 'Application and evaluation'],
  learn: [
    { h: 'Unlawful act manslaughter', html: `
<p>The defendant must commit:</p>
<ol><li><b>An unlawful act</b> — a <b>criminal</b> offence, not merely a civil wrong (<i>R v Franklin</i>, 1883). It must be an <b>act</b>, not an omission (<i>R v Lowe</i>, 1973). If there is no crime (e.g. no assault because the victim was not afraid), there is no manslaughter — [[c:lamb]]. Common bases: assault, battery, criminal damage, arson, burglary, robbery, supplying drugs.</li>
<li>which is <b>dangerous</b> — objectively, “all sober and reasonable people would inevitably recognise” that it must subject the victim to the <b>risk of some harm</b>, albeit not serious harm — [[c:church]]. The defendant need not realise it is dangerous — [[c:newbury]]. The reasonable person has the knowledge the defendant had or should have had at the time: [[c:dawson]] (heart condition unknown — not dangerous); [[c:watson]] (frailty apparent during the burglary — dangerous). The harm must be physical, not just fear.</li>
<li>which <b>causes death</b> — factual and legal causation. A victim’s free, deliberate and informed act (self-injecting drugs) breaks the chain — [[c:kennedy]].</li>
<li>with the <b>mens rea of the unlawful act</b> — e.g. intention or recklessness for assault. No need to foresee death or harm.</li></ol>` },
    { h: 'Gross negligence manslaughter', html: `
<div class="box def"><b class="lbl">R v Adomako (1994)</b><p>The prosecution must prove: (1) the defendant owed the victim a <b>duty of care</b>; (2) the defendant <b>breached</b> that duty; (3) the breach <b>caused death</b>; (4) the negligence was <b>gross</b> — so bad that, in the jury’s opinion, it should be judged criminal.</p></div>
<ul><li><b>Duty</b>: ordinary negligence principles, including duty situations for omissions — [[c:evans]]; [[c:stone]]. A duty can exist even in an illegal enterprise — [[c:wacker]]. Doctors, employers, drivers, parents.</li>
<li><b>Risk of death</b>: there must be a serious and obvious risk of <b>death</b> (not just injury) — [[c:misra]] — which was reasonably foreseeable at the time from what the defendant knew — [[c:rose]].</li>
<li><b>Causation</b> must be proved beyond reasonable doubt — [[c:broughton]].</li>
<li><b>Gross</b>: the jury decides whether the conduct was so bad as to be criminal. Criticised as circular, but held compatible with Art 7 ECHR in Misra.</li></ul>
<p>The Corporate Manslaughter and Corporate Homicide Act 2007 creates a separate offence for organisations whose gross management failures cause death.</p>` },
    { h: 'Evaluation', html: `
<ul><li><b>Unlawful act manslaughter</b> is criticised because the defendant may be convicted of a homicide offence when death was not foreseeable — the “constructive” liability is built on a minor offence (e.g. a single punch — “one-punch” killings). But it reflects the harm caused and public concern.</li>
<li>The Dawson/Watson distinction depends on what the reasonable person would know — can seem arbitrary.</li>
<li><b>Gross negligence</b>: the circular test (the jury decides what is “criminal”) creates uncertainty; medical professionals worry about criminalising errors (the Bawa-Garba case, 2018, led to reviews of GNM in healthcare). Rose and Broughton have narrowed it.</li>
<li>The Law Commission (2006) recommended separate offences of “criminal act manslaughter” and “gross negligence manslaughter”, with death or serious injury being foreseeable.</li></ul>` }
  ],
  debate: [{ q: 'Is unlawful act manslaughter fair?', for: ['Death is the most serious harm; offenders should bear the consequences of dangerous criminal acts.', 'The dangerousness test (Church) limits liability to acts risking some harm.', 'Public confidence, e.g. in one-punch killings.', 'Sentencing discretion allows differentiation.'], ag: ['Liability for death without foresight of death or serious harm — breaches the correspondence principle.', 'Moral luck: the same punch is ABH or manslaughter depending on how the victim falls.', 'Objective dangerousness ignores the defendant’s knowledge (Dawson v Watson distinctions).', 'Law Commission recommended reform requiring foresight of serious injury.'] }],
  cases: ['church', 'lamb', 'newbury', 'dawson', 'watson', 'kennedy', 'adomako', 'misra', 'rose', 'broughton', 'wacker', 'evans', 'stone'],
  worked: [{ q: '<b>Scenario.</b> Jay breaks into a house at night to steal. He meets Kay, who is 90 and clearly frail. He shouts at her and leaves; shortly afterwards she dies of a heart attack. Advise whether Jay is guilty of unlawful act manslaughter.', s: ['<b class="st">Unlawful act</b>Burglary (s9 Theft Act 1968) — a criminal act, not an omission.', '<b class="st">Dangerous</b>Would all sober and reasonable people recognise a risk of some physical harm (Church)? Once Jay saw Kay was elderly and frail, the reasonable person with that knowledge would recognise the risk that the shock could cause physical harm (Watson). Contrast Dawson, where the victim’s condition was not apparent.', '<b class="st">Causation</b>Did the burglary cause the heart attack? Medical evidence must show the shock caused death (in Watson causation failed on the evidence). Thin skull rule applies (Blaue).', '<b class="st">Mens rea</b>Jay had the mens rea for burglary (entering as a trespasser intending to steal).', '<b class="st">Conclude</b>Likely guilty of unlawful act manslaughter if causation is proved.'], a: 'Likely unlawful act manslaughter — Watson.' }],
  pitfalls: ['Basing unlawful act manslaughter on an omission or a civil wrong.', 'Testing dangerousness subjectively — it is objective (Newbury and Jones).', 'For GNM, requiring only a risk of injury — the risk must be of death (Misra; Rose).', 'Forgetting to deal with causation, especially drug supply cases (Kennedy).'],
  cards: [
    ['Four elements of unlawful act manslaughter?', 'Unlawful (criminal) act; dangerous; causes death; mens rea of the unlawful act.'],
    ['R v Church (1966) test?', 'All sober and reasonable people would recognise the risk of some harm.'],
    ['R v Lamb (1967)?', 'No assault — no unlawful act — no manslaughter.'],
    ['DPP v Newbury and Jones (1977)?', 'Defendant need not realise the act is dangerous.'],
    ['R v Dawson v R v Watson?', 'Dawson: heart condition unknown — not dangerous. Watson: frailty apparent — dangerous.'],
    ['R v Adomako (1994) test?', 'Duty, breach, causing death, gross negligence (so bad as to be criminal).'],
    ['R v Misra (2004)?', 'The risk must be a risk of death; test compatible with Art 7.'],
    ['R v Rose (2017)?', 'Risk of death must be foreseeable from what the defendant knew at the time.'],
    ['R v Broughton (2020)?', 'Causation in GNM must be proved beyond reasonable doubt.'],
    ['R v Wacker (2003)?', 'Duty exists despite a joint illegal enterprise.']
  ],
  quiz: [
    { q: 'Unlawful act manslaughter requires the unlawful act to be…', o: ['a criminal offence and an act, not an omission', 'any civil wrong', 'intentional killing', 'a strict liability offence'], x: 'Franklin; Lowe.' },
    { q: 'The dangerousness test in Church is…', o: ['objective — sober and reasonable people would recognise the risk of some harm', 'subjective', 'whether death was foreseen', 'whether GBH was intended'], x: 'Newbury and Jones.' },
    { q: 'In R v Dawson the robbery was not “dangerous” because…', o: ['the victim’s heart condition was not apparent to a reasonable person', 'the gun was real', 'the victim was young', 'there was no unlawful act'], x: 'Contrast Watson.' },
    { q: 'The test for gross negligence manslaughter comes from…', o: ['R v Adomako', 'R v Church', 'R v Woollin', 'R v Kennedy'], x: 'Anaesthetist, 1994.' },
    { q: 'For gross negligence manslaughter the risk must be of…', o: ['death', 'any injury', 'serious injury', 'financial loss'], x: 'Misra; Rose.' },
    { q: 'In R v Lamb there was no manslaughter because…', o: ['there was no assault, so no unlawful act', 'the gun was fake', 'death was intended', 'Lamb was insane'], x: 'Friend not afraid.' },
    { q: 'R v Broughton concerned…', o: ['proof of causation in gross negligence manslaughter', 'dangerousness', 'the Church test', 'omissions in murder'], x: 'Conviction quashed.' }
  ],
  exam: [
    { q: 'Explain the law on gross negligence manslaughter. [10]', m: 10, ms: ['Adomako four elements', 'duty — negligence principles; Wacker; Evans', 'breach', 'serious and obvious risk of death — Misra', 'foreseeability at time — Rose', 'causation — Broughton', 'grossness — jury; circularity', 'examples — medical, employers'] },
    { q: 'Analyse and evaluate the law on involuntary manslaughter. [25]', m: 25, ms: ['unlawful act — elements and cases', 'constructive liability — correspondence principle', 'dangerousness — Church, Dawson, Watson', 'drug supply — Kennedy', 'GNM — Adomako; circularity', 'narrowing — Misra, Rose, Broughton', 'medical professionals concerns', 'sentencing range', 'Law Commission proposals', 'conclusion'] }
  ],
  tools: ['homicideladder']
});

/* ---------- 2.3.3d Non-fatal offences ---------- */
TOPICS.push({
  id: '2.3.3d', unit: 'CR', ref: '2.3.3', title: 'Non-fatal offences against the person',
  short: 'Assault and battery (CJA 1988 s39); ABH (s47), wounding/GBH (s20), wounding/GBH with intent (s18) OAPA 1861',
  summary: 'The non-fatal offences form a ladder of seriousness: common assault and battery, assault occasioning actual bodily harm (s47), unlawful wounding or inflicting grievous bodily harm (s20), and wounding or causing GBH with intent (s18). Each has its own actus reus and mens rea. The law, mostly from 1861, is widely criticised as outdated and inconsistent.',
  spec: ['Assault and battery: s39 Criminal Justice Act 1988 — actus reus and mens rea', 'Assault occasioning actual bodily harm: s47 OAPA 1861', 'Unlawful wounding or inflicting GBH: s20 OAPA 1861', 'Wounding or causing GBH with intent: s18 OAPA 1861', 'Application; evaluation and reform'],
  learn: [
    { h: 'Assault', html: `
<div class="box def"><b class="lbl">Assault (common assault)</b><p><b>Actus reus</b>: causing the victim to <b>apprehend</b> the application of <b>immediate unlawful force</b>. <b>Mens rea</b>: intention or subjective recklessness as to causing that apprehension ([[c:venna]]; [[c:savage]]). Charged under s39 CJA 1988; summary only; maximum six months.</p></div>
<ul><li>No touching is needed — the victim must fear force.</li>
<li><b>Words</b> can be an assault ([[c:constanza]], letters) and can negate one ([[c:tuberville]]); silence can be an assault ([[c:ireland]]).</li>
<li><b>Immediate</b> — imminent, not necessarily instantaneous: fear of force “at some time not excluding the immediate future” ([[c:constanza]]); <i>Smith v Chief Superintendent of Woking</i> (1983) (looking through a window).</li>
<li>What matters is the victim’s apprehension, even if the threat could not be carried out ([[c:logdon]], fake gun). If the victim does not fear force, there is no assault ([[c:lamb]]).</li></ul>` },
    { h: 'Battery', html: `
<div class="box def"><b class="lbl">Battery</b><p><b>Actus reus</b>: the <b>application of unlawful force</b> to another. <b>Mens rea</b>: intention or subjective recklessness as to applying unlawful force ([[c:venna]]).</p></div>
<ul><li>The slightest touch is enough if it goes beyond the ordinary contact of everyday life — [[c:collinswilcock]]. Touching clothing counts — [[c:thomas]].</li>
<li>Can be indirect — [[c:dppk]] (acid in hand dryer); [[c:haystead]] (baby dropped).</li>
<li>Can be a continuing act — [[c:fagan]]; or by omission where there is a duty (e.g. <i>DPP v Santana-Bermudez</i>, 2003, needle in pocket).</li>
<li>Consent may be a defence (topic 2.3.6).</li></ul>` },
    { h: 'Section 47: assault occasioning ABH', html: `
<div class="box stat"><b class="lbl">s47 OAPA 1861 (max 5 years)</b><p>Whosoever shall be convicted of any assault occasioning actual bodily harm…</p></div>
<ul><li><b>Actus reus</b>: an assault or battery which <b>causes</b> actual bodily harm.</li>
<li><b>ABH</b>: “any hurt or injury calculated to interfere with the health or comfort” of the victim ([[c:rmiller]]) — not “so trivial as to be wholly insignificant”. Includes bruising, grazes, minor fractures, a momentary loss of consciousness ([[c:tvdpp]]), cutting hair ([[c:dppsmith2006]]) and recognised psychiatric injury, but not mere fear or panic ([[c:chanfook]]).</li>
<li><b>Causation</b>: the victim’s reasonable reaction does not break the chain ([[c:roberts]]).</li>
<li><b>Mens rea</b>: only the mens rea for the assault or battery. No need to foresee any harm — [[c:savage]].</li></ul>` },
    { h: 'Section 20: wounding or inflicting GBH', html: `
<div class="box stat"><b class="lbl">s20 OAPA 1861 (max 5 years)</b><p>Whosoever shall unlawfully and maliciously wound or inflict any grievous bodily harm upon any other person, either with or without any weapon or instrument…</p></div>
<ul><li><b>Wound</b>: a break in <b>both layers of the skin</b> — [[c:eisenhower]]. A small cut can technically be a wound; an internal injury or broken bone without broken skin is not.</li>
<li><b>GBH</b>: “really serious harm” ([[c:dppsmith]]), judged in the light of the victim’s age and health ([[c:bollom]]). Includes serious psychiatric injury ([[c:ireland]]) and infecting someone with a serious disease ([[c:dica]]).</li>
<li><b>Inflict</b>: no need for a direct assault — [[c:ireland]] (Burstow).</li>
<li><b>Mens rea</b>: “maliciously” = intention or subjective recklessness ([[c:cunningham]]) as to causing <b>some</b> harm — not necessarily serious harm ([[c:mowatt]]; [[c:savage]]).</li></ul>` },
    { h: 'Section 18: wounding or causing GBH with intent', html: `
<div class="box stat"><b class="lbl">s18 OAPA 1861 (max life)</b><p>Whosoever shall unlawfully and maliciously by any means whatsoever wound or cause any grievous bodily harm to any person with intent to do some grievous bodily harm to any person, or with intent to resist or prevent the lawful apprehension or detainer of any person…</p></div>
<ul><li><b>Actus reus</b>: wounding or causing GBH (as s20; “cause” is broad — any cause).</li>
<li><b>Mens rea</b>: <b>specific intent</b> to cause GBH (direct or oblique — Woollin), or intent to resist or prevent lawful arrest (with at least recklessness as to the injury). Recklessness about GBH is not enough — [[c:belfon]].</li>
<li>Indictable only.</li></ul>` },
    { h: 'Criticisms and reform', html: `
<ul><li>Outdated, Victorian language (“maliciously”, “grievous”, “occasioning”); s47 does not even define the offence.</li>
<li><b>No correspondence</b> between actus reus and mens rea: for s47 the defendant need not foresee any harm (Savage), and for s20 need foresee only some harm, yet is convicted of causing ABH or GBH.</li>
<li>Illogical sentences: s47 and s20 both carry a 5-year maximum, though s20 is more serious.</li>
<li>A pinprick “wound” can be charged under s20, while a broken leg without broken skin cannot be a wound.</li>
<li>“Inflict” v “cause” caused years of confusion (settled in Burstow).</li>
<li><b>Reform</b>: a Home Office draft Bill (1998) and the Law Commission’s report <i>Reform of Offences Against the Person</i> (2015) proposed a clear ladder: intentional serious injury, reckless serious injury, intentional or reckless injury, aggravated assault, and simple assault — with mens rea matching the harm. Not implemented.</li></ul>` }
  ],
  debate: [{ q: 'Should the Offences Against the Person Act 1861 be replaced?', for: ['Archaic language confuses juries and the public.', 'Mens rea does not correspond to the harm (Savage).', 'Illogical sentencing (s47 and s20 both 5 years).', 'Law Commission 2015 produced a draft Bill ready to use.'], ag: ['Courts have interpreted it workably (Ireland, Burstow, Savage).', 'CPS charging standards give practical guidance.', 'Reform takes scarce parliamentary time.', 'Constructive liability reflects actual harm caused.'] }],
  cases: ['venna', 'savage', 'constanza', 'tuberville', 'ireland', 'logdon', 'lamb', 'collinswilcock', 'thomas', 'dppk', 'haystead', 'fagan', 'rmiller', 'tvdpp', 'dppsmith2006', 'chanfook', 'roberts', 'eisenhower', 'dppsmith', 'bollom', 'dica', 'cunningham', 'mowatt', 'belfon'],
  worked: [{ q: '<b>Scenario.</b> At a bus stop, Leo shouts “I’m going to smash your face in!” at Mia and raises his fist. She steps back and trips, cutting her head on the kerb, which needs stitches. Advise on Leo’s liability.', s: ['<b class="st">Assault</b>Mia apprehended immediate unlawful force (words plus a raised fist — Constanza). Leo intended to cause that fear (Venna). Common assault is complete.', '<b class="st">Injury</b>A cut needing stitches breaks both layers of skin — a wound (Eisenhower); it is at least ABH (Miller).', '<b class="st">Causation</b>Mia’s stepping back was a foreseeable reaction and does not break the chain (Roberts).', '<b class="st">s47</b>Assault occasioning ABH: the mens rea is only that for the assault — Leo need not foresee injury (Savage). Likely guilty.', '<b class="st">s20</b>Unlawful wounding: requires Leo to foresee some harm (Mowatt; Parmenter). By threatening her and raising his fist, did he foresee she might be hurt? If not, s47 is the appropriate charge. s18 does not apply — no intent to cause GBH.'], a: 'Guilty under s47 (and possibly s20 if he foresaw some harm).' }],
  pitfalls: ['Confusing assault (fear of force) with battery (actual force).', 'Requiring foresight of ABH for s47 (Savage says no).', 'Requiring foresight of serious harm for s20 (Mowatt says some harm).', 'Saying recklessness is enough for s18.', 'Calling any injury a wound — both layers of skin must be broken.'],
  cards: [
    ['Actus reus of assault?', 'Causing V to apprehend immediate unlawful force.'],
    ['Actus reus of battery?', 'Application of unlawful force.'],
    ['Mens rea of assault/battery?', 'Intention or subjective recklessness (Venna; Savage).'],
    ['R v Ireland (1997)?', 'Silent phone calls can be an assault; psychiatric illness can be ABH.'],
    ['Tuberville v Savage (1669)?', 'Words can negate an assault.'],
    ['Collins v Wilcock (1984)?', 'Touching beyond everyday contact is battery.'],
    ['Definition of ABH?', 'Any hurt or injury calculated to interfere with health or comfort (R v Miller).'],
    ['Mens rea for s47?', 'Only that for the assault or battery (R v Savage).'],
    ['Definition of a wound?', 'A break in both layers of the skin (JCC v Eisenhower).'],
    ['Definition of GBH?', 'Really serious harm (DPP v Smith); consider victim’s age/health (Bollom).'],
    ['Mens rea for s20?', 'Intention or recklessness as to some harm (Mowatt; Parmenter).'],
    ['Mens rea for s18?', 'Specific intent to cause GBH (or to resist arrest); recklessness insufficient (Belfon).'],
    ['Maximum sentences?', 'Assault/battery 6 months; s47 5 years; s20 5 years; s18 life.'],
    ['Law Commission 2015 report?', 'Reform of Offences Against the Person — new ladder of offences, not implemented.']
  ],
  quiz: [
    { q: 'Assault requires the victim to…', o: ['apprehend immediate unlawful force', 'be touched', 'be injured', 'be frightened of future harm only'], x: 'No touching needed.' },
    { q: 'Which case held that silent phone calls can be an assault?', o: ['R v Ireland', 'R v Constanza', 'Tuberville v Savage', 'Logdon v DPP'], x: '1997.' },
    { q: 'A wound requires…', o: ['a break in both layers of the skin', 'any bruise', 'internal bleeding', 'a broken bone'], x: 'JCC v Eisenhower.' },
    { q: 'For s47 ABH, the defendant must foresee…', o: ['only the assault or battery, not any harm', 'ABH', 'GBH', 'death'], x: 'R v Savage.' },
    { q: 'For s20, the mens rea is intention or recklessness as to…', o: ['some harm', 'serious harm', 'death', 'a wound only'], x: 'Mowatt.' },
    { q: 'Which offence requires specific intent to cause GBH?', o: ['s18 OAPA 1861', 's20 OAPA 1861', 's47 OAPA 1861', 'common assault'], x: 'Belfon — recklessness insufficient.' },
    { q: 'Cutting off someone’s ponytail was held to be ABH in…', o: ['DPP v Smith (2006)', 'R v Chan-Fook', 'T v DPP', 'R v Bollom'], x: 'Hair is part of the body.' },
    { q: 'Touching someone’s clothing can be a battery — which case?', o: ['R v Thomas', 'Collins v Wilcock', 'DPP v K', 'Fagan v MPC'], x: 'Caretaker and skirt.' },
    { q: 'The maximum sentence for s20 is…', o: ['5 years', 'life', '6 months', '10 years'], x: 'Same as s47 — a criticism.' },
    { q: 'In R v Chan-Fook, the court held that ABH…', o: ['can include psychiatric injury but not mere emotions', 'must be physical', 'includes fear and panic', 'requires hospital treatment'], x: 'Recognised clinical condition.' }
  ],
  exam: [
    { q: 'Explain the actus reus and mens rea of s20 OAPA 1861. [10]', m: 10, ms: ['wound — Eisenhower', 'GBH — really serious harm (Smith); Bollom', 'psychiatric / disease — Burstow, Dica', 'inflict — no assault needed (Burstow)', 'unlawfully — no defence', 'maliciously — Cunningham', 'some harm — Mowatt / Parmenter', 'contrast s18 / s47'] },
    { q: 'Analyse and evaluate whether the law on non-fatal offences is in need of reform. [25]', m: 25, ms: ['outdated language', 'no definition in s47', 'lack of correspondence — Savage, Mowatt', 'sentencing anomalies s47/s20', 'wound v GBH anomalies', 'inflict v cause — Burstow', 'psychiatric harm development', 'Law Commission 2015 proposals / 1998 Bill', 'arguments against reform', 'conclusion'] }
  ],
  tools: ['nfoladder']
});

/* ---------- criminal tools (2.3.1 – 2.3.3) ---------- */
TOOLS.omitsort = { type: 'sort', title: 'Is there a duty to act?', intro: 'Would each person be under a legal duty to act?', cats: ['Duty to act', 'No duty'], items: [
  ['A passer-by watches a stranger drown in a shallow pond.', 'No duty', 'No general duty to rescue.'],
  ['A lifeguard on duty ignores a swimmer in difficulty.', 'Duty to act', 'Contractual duty — Pittwood.'],
  ['A parent fails to feed a young child.', 'Duty to act', 'Special relationship — Gibbins and Proctor.'],
  ['A couple take in an ill relative and then neglect her.', 'Duty to act', 'Voluntary assumption — Stone and Dobinson.'],
  ['A man accidentally starts a fire and walks away.', 'Duty to act', 'Created a dangerous situation — Miller.'],
  ['An on-duty police officer ignores a violent attack.', 'Duty to act', 'Public office — Dytham.'],
  ['A neighbour does not call an ambulance for someone next door they barely know.', 'No duty', 'No relationship or assumption of care.']
] };
TOOLS.crimcausetree = { type: 'tree', title: 'Did the defendant cause the death?', intro: 'Criminal causation, step by step.', nodes: {
  start: { q: 'But for the defendant’s conduct, would the victim have died when and as they did?', o: [['No — the conduct was necessary', 'deminimis'], ['Yes — they would have died anyway', 'nof']] },
  nof: { end: true, tone: 'bad', v: 'No factual causation', x: 'Consider attempt instead.', cases: ['white'] },
  deminimis: { q: 'Was the contribution more than minimal?', o: [['Yes', 'what'], ['No — trivial', 'nof2']] },
  nof2: { end: true, tone: 'bad', v: 'Not a legal cause (de minimis)', x: '', cases: ['kimsey'] },
  what: { q: 'Did anything intervene?', o: [['Medical treatment', 'med'], ['The victim’s own reaction or act', 'vic'], ['A third party', 'third'], ['The victim had an unusual condition or belief', 'skull'], ['Nothing', 'yes']] },
  med: { q: 'Was the treatment so independent and potent that the original injury was insignificant (e.g. palpably wrong treatment of a healed wound)?', o: [['Yes', 'broken'], ['No — the injury was still operating', 'yes2']] },
  broken: { end: true, tone: 'bad', v: 'Chain broken', x: '', cases: ['jordan'] },
  yes2: { end: true, tone: 'good', v: 'Defendant caused death', x: '', cases: ['smith', 'cheshire', 'malcherek'] },
  vic: { q: 'What kind of act?', o: [['A foreseeable escape or reaction, proportionate to the threat', 'yes3'], ['A “daft”, unforeseeable reaction', 'broken2'], ['A free, deliberate and informed choice (e.g. self-injecting drugs)', 'broken3']] },
  yes3: { end: true, tone: 'good', v: 'Chain not broken', x: '', cases: ['roberts', 'williamsdavis'] },
  broken2: { end: true, tone: 'bad', v: 'Chain broken', x: '', cases: ['roberts'] },
  broken3: { end: true, tone: 'bad', v: 'Chain broken', x: '', cases: ['kennedy'] },
  third: { end: true, tone: 'mid', v: 'Usually not broken if the third party’s act was a reasonable, foreseeable response', x: 'E.g. police returning fire in self-defence.', cases: ['pagett'] },
  skull: { end: true, tone: 'good', v: 'Defendant liable — thin skull rule', x: '', cases: ['blaue'] },
  yes: { end: true, tone: 'good', v: 'Defendant caused death', x: 'Now consider mens rea.', cases: ['pagett'] }
} };
TOOLS.mrsort = { type: 'sort', title: 'Which level of mens rea?', intro: 'Classify the defendant’s state of mind.', cats: ['Direct intention', 'Oblique intention', 'Recklessness', 'Negligence'], items: [
  ['D shoots V because he wants V dead.', 'Direct intention', 'Aim or purpose.'],
  ['D blows up a plane to claim insurance on the cargo, knowing the crew will certainly die.', 'Oblique intention', 'Virtual certainty appreciated — Woollin.'],
  ['D throws a stone at a window, realising someone might be hit, but not caring.', 'Recklessness', 'Aware of risk, unreasonably takes it.'],
  ['A doctor fails to notice a disconnected tube for six minutes.', 'Negligence', 'Adomako — objective standard.'],
  ['D rips out a gas meter not thinking about the gas.', 'Negligence', 'Cunningham: he did not foresee the risk, so not reckless.'],
  ['D punches V, aiming to break his jaw.', 'Direct intention', 'Intention to cause GBH.']
] };
TOOLS.sltree = { type: 'tree', title: 'Is it a strict liability offence? (Gammon)', intro: 'Apply the Gammon tests to a statutory offence that is silent about mens rea.', nodes: {
  start: { q: 'Start with the presumption that mens rea is required. Is the offence “truly criminal” (carrying real stigma, e.g. sexual offences, serious violence)?', o: [['Yes', 'strong'], ['No — regulatory (food, alcohol, pollution, licensing)', 'words']] },
  strong: { end: true, tone: 'bad', v: 'Very unlikely to be strict liability', x: 'The presumption is particularly strong for truly criminal offences.', cases: ['sweetparsley', 'bvdpp'] },
  words: { q: 'Do the words of the statute, clearly or by necessary implication, show Parliament intended strict liability (e.g. other sections require “knowingly” but this one does not)?', o: [['Yes', 'concern'], ['No', 'mr']] },
  mr: { end: true, tone: 'bad', v: 'Mens rea required', x: 'Presumption not displaced.' },
  concern: { q: 'Does the statute deal with an issue of social concern such as public safety?', o: [['Yes', 'promote'], ['No', 'mr']] },
  promote: { q: 'Would strict liability promote the Act’s objects by encouraging greater vigilance?', o: [['Yes — e.g. businesses can take extra precautions', 'sl'], ['No — nothing D could do would help', 'mr2']] },
  mr2: { end: true, tone: 'bad', v: 'Mens rea required', x: 'Strict liability would serve no purpose (Lim Chin Aik, 1963).' },
  sl: { end: true, tone: 'good', v: 'Strict liability offence', x: 'Check for a statutory due diligence defence.', cases: ['gammon', 'callow', 'shah', 'alphacell'] }
} };
TOOLS.homicideladder = { type: 'tree', title: 'Which homicide offence?', intro: 'Find the right homicide offence for a death caused by the defendant.', nodes: {
  start: { q: 'Did the defendant cause death (factual and legal causation)?', o: [['Yes', 'mr'], ['No', 'none']] },
  none: { end: true, tone: 'bad', v: 'No homicide', x: 'Consider attempt or non-fatal offences.' },
  mr: { q: 'Did the defendant intend to kill or to cause really serious harm (directly, or with foresight of virtual certainty)?', o: [['Yes', 'pd'], ['No', 'invol']] },
  pd: { q: 'Does a partial defence apply?', o: [['Loss of control (ss54–55 CJA 2009)', 'vm1'], ['Diminished responsibility (s2 HA 1957)', 'vm2'], ['Neither — and no complete defence', 'murder']] },
  murder: { end: true, tone: 'bad', v: 'Murder', x: 'Mandatory life sentence.', cases: ['vickers', 'woollin'] },
  vm1: { end: true, tone: 'mid', v: 'Voluntary manslaughter (loss of control)', x: '', cases: ['clinton'] },
  vm2: { end: true, tone: 'mid', v: 'Voluntary manslaughter (diminished responsibility)', x: '', cases: ['golds'] },
  invol: { q: 'What was the defendant doing?', o: [['Committing a criminal act that sober and reasonable people would see risked some harm', 'uam'], ['Breaching a duty of care with an obvious risk of death, grossly', 'gnm'], ['Neither', 'nm']] },
  uam: { end: true, tone: 'mid', v: 'Unlawful act manslaughter', x: '', cases: ['church', 'newbury'] },
  gnm: { end: true, tone: 'mid', v: 'Gross negligence manslaughter', x: '', cases: ['adomako'] },
  nm: { end: true, tone: 'bad', v: 'Probably no homicide offence', x: 'E.g. no unlawful act (Lamb) or a non-dangerous act (Dawson).', cases: ['lamb', 'dawson'] }
} };
TOOLS.loctree = { type: 'tree', title: 'Loss of control: step by step', intro: 'Apply ss54–55 Coroners and Justice Act 2009 to a killing with malice aforethought.', nodes: {
  start: { q: 'Is there evidence that D actually lost self-control (not necessarily suddenly)?', o: [['Yes', 'rev'], ['No — D acted calmly and deliberately', 'fail1']] },
  fail1: { end: true, tone: 'bad', v: 'Defence fails (s54(1)(a))', x: 'Murder, unless DR applies.' },
  rev: { q: 'Was D acting in a considered desire for revenge?', o: [['Yes — e.g. planning, fetching weapons', 'fail2'], ['No', 'trig']] },
  fail2: { end: true, tone: 'bad', v: 'Defence excluded (s54(4))', x: '', cases: ['jewell'] },
  trig: { q: 'What caused the loss of control?', o: [['Fear of serious violence from V against D or another', 'excl'], ['Things done/said: extremely grave, justifiable sense of being seriously wronged', 'excl'], ['Sexual infidelity alone', 'sexinf'], ['Something trivial or ordinary', 'fail3']] },
  sexinf: { end: true, tone: 'bad', v: 'Disregarded as a trigger (s55(6)(c))', x: 'But infidelity may be context if there is another qualifying trigger.', cases: ['clinton'] },
  fail3: { end: true, tone: 'bad', v: 'No qualifying trigger', x: 'Not extremely grave.' },
  excl: { q: 'Did D incite the trigger as an excuse to use violence?', o: [['Yes', 'fail4'], ['No (even if D behaved badly)', 'norm']] },
  fail4: { end: true, tone: 'bad', v: 'Trigger disregarded (s55(6)(a)–(b))', x: '', cases: ['dawes'] },
  norm: { q: 'Might a person of D’s sex and age, with normal tolerance and self-restraint, in D’s circumstances (not voluntary intoxication), have reacted in the same or a similar way?', o: [['Yes', 'ok'], ['No', 'fail5']] },
  fail5: { end: true, tone: 'bad', v: 'Defence fails (s54(1)(c))', x: '', cases: ['asmelash'] },
  ok: { end: true, tone: 'good', v: 'Voluntary manslaughter', x: 'If the judge finds sufficient evidence (s54(6)), the prosecution must disprove the defence beyond reasonable doubt.' }
} };
TOOLS.nfoladder = { type: 'tree', title: 'Which non-fatal offence?', intro: 'Climb the ladder from the injury and the defendant’s state of mind.', nodes: {
  start: { q: 'Was anyone touched?', o: [['No — V feared immediate force', 'aslt'], ['Yes', 'harm']] },
  aslt: { end: true, tone: 'mid', v: 'Assault (s39 CJA 1988)', x: 'If D intended or foresaw causing that fear.', cases: ['ireland', 'constanza', 'venna'] },
  harm: { q: 'What injury resulted?', o: [['None, or trivial', 'batt'], ['Bruising, grazes, brief unconsciousness, psychiatric injury (ABH)', 'abh'], ['A wound (both layers of skin broken) or really serious harm (GBH)', 'gbh']] },
  batt: { end: true, tone: 'mid', v: 'Battery (s39 CJA 1988)', x: '', cases: ['collinswilcock', 'thomas'] },
  abh: { end: true, tone: 'mid', v: 's47 OAPA 1861 — assault occasioning ABH', x: 'D need only have the mens rea for the assault or battery.', cases: ['rmiller', 'savage'] },
  gbh: { q: 'What did D intend or foresee?', o: [['Intended to cause GBH (or to resist lawful arrest)', 's18'], ['Foresaw some harm (not necessarily serious)', 's20'], ['Only intended/foresaw an assault or battery', 's47b']] },
  s18: { end: true, tone: 'bad', v: 's18 OAPA 1861 — maximum life', x: 'Specific intent; recklessness not enough.', cases: ['belfon'] },
  s20: { end: true, tone: 'bad', v: 's20 OAPA 1861 — maximum 5 years', x: '', cases: ['mowatt', 'eisenhower', 'dppsmith'] },
  s47b: { end: true, tone: 'mid', v: 's47 OAPA 1861', x: 'Even though the injury was serious, without foresight of some harm s20 fails; ABH is included in GBH.', cases: ['savage'] }
} };
