/* ==========================================================
   SECTION C · CRIMINAL LAW (continued) — 2.3.4 – 2.3.7
   ========================================================== */
addCases([
  // theft
  { id: 'rmorris', n: 'R v Morris', y: 1984, a: 'CR', t: '2.3.4a', c: 'HL', f: 'Morris switched price labels on goods in a supermarket so he would pay a lower price, and was arrested after paying the lower price.', p: 'Appropriation is an assumption of any of the rights of the owner — it need not be all of them. Switching labels was enough.' },
  { id: 'lawrence', n: 'Lawrence v Metropolitan Police Commissioner', y: 1972, a: 'CR', t: '2.3.4a', c: 'HL', f: 'An Italian student offered his wallet to a taxi driver, who took far more than the fare.', p: 'There can be an appropriation even though the owner consented to the property being taken.' },
  { id: 'gomez', n: 'DPP v Gomez', y: 1993, a: 'CR', t: '2.3.4a', c: 'HL', f: 'An assistant shop manager persuaded his manager to accept payment for goods with stolen cheques he knew were worthless.', p: 'An act can be an appropriation even if done with the owner’s consent obtained by deception.' },
  { id: 'hinks', n: 'R v Hinks', y: 2000, a: 'CR', t: '2.3.4a', c: 'HL', f: 'Hinks befriended a vulnerable man of limited intelligence, who gave her about £60,000 and a television.', p: 'Receiving a valid gift can be an appropriation; the question of guilt then turns on dishonesty.' },
  { id: 'oxfordmoss', n: 'Oxford v Moss', y: 1979, a: 'CR', t: '2.3.4a', c: 'Divisional Court', f: 'A university student obtained an exam paper in advance, read it and returned it.', p: 'Confidential information is not “property” under s4 Theft Act 1968 — not theft.' },
  { id: 'kelly', n: 'R v Kelly and Lindsay', y: 1998, a: 'CR', t: '2.3.4a', c: 'CA', f: 'An artist and a technician took body parts preserved for medical training from the Royal College of Surgeons to use as casts.', p: 'Body parts that have acquired different attributes through skill (preservation, dissection) can be property.' },
  { id: 'turner', n: 'R v Turner (No 2)', y: 1971, a: 'CR', t: '2.3.4a', c: 'CA', f: 'Turner left his car at a garage for repair, then took it back without paying, using a spare key.', p: 'Property “belongs to” anyone who has possession or control of it (s5(1)); the garage had possession, so Turner could steal his own car.' },
  { id: 'woodman', n: 'R v Woodman', y: 1974, a: 'CR', t: '2.3.4a', c: 'CA', f: 'A company sold scrap metal on its disused site but some was left behind; the site was fenced. Woodman took it.', p: 'The company was still in control of the site and the metal on it, so the scrap belonged to it.' },
  { id: 'rhall', n: 'R v Hall', y: 1972, a: 'CR', t: '2.3.4a', c: 'CA', f: 'A travel agent took deposits for flights, paid them into the firm’s general account and never arranged the flights.', p: 'Not theft under s5(3): he was under no obligation to deal with those particular deposits in a particular way.' },
  { id: 'davidge', n: 'Davidge v Bunnett', y: 1984, a: 'CR', t: '2.3.4a', c: 'Divisional Court', f: 'Flatmates gave the defendant cheques to pay the gas bill; she spent the money on Christmas presents.', p: 'Theft: under s5(3) she was under an obligation to use the money to pay the bill.' },
  { id: 'agref1of1983', n: 'Attorney General’s Reference (No 1 of 1983)', y: 1985, a: 'CR', t: '2.3.4a', c: 'CA', f: 'A police officer was mistakenly overpaid £74 in wages by direct transfer, realised and did nothing.', p: 'Under s5(4) property received by mistake, where there is a legal obligation to restore it, is treated as belonging to the payer — she could be guilty of theft if dishonest.' },
  { id: 'ivey', n: 'Ivey v Genting Casinos', y: 2017, a: 'CR', t: '2.3.4a', c: 'UKSC', f: 'A professional gambler used “edge-sorting” to win £7.7 million at baccarat; the casino refused to pay.', p: 'The test for dishonesty: (1) establish the defendant’s actual state of knowledge or belief as to the facts; (2) decide whether the conduct was dishonest by the objective standards of ordinary decent people. Obiter, rejected the second (subjective) limb of Ghosh.' },
  { id: 'barton', n: 'R v Barton and Booth', y: 2020, a: 'CR', t: '2.3.4a', c: 'CA', f: 'A care home owner defrauded wealthy, vulnerable residents of millions of pounds.', p: 'The Court of Appeal confirmed that the Ivey test replaces Ghosh in criminal law.' },
  { id: 'rlloyd', n: 'R v Lloyd', y: 1985, a: 'CR', t: '2.3.4a', c: 'CA', f: 'A cinema projectionist lent films to others, who copied them overnight to make pirate videos, then returned them.', p: 'Borrowing is only intention to permanently deprive under s6 if the thing is returned with all its “goodness, virtue and practical value” gone. The films were unchanged — not theft.' },
  { id: 'velumyl', n: 'R v Velumyl', y: 1989, a: 'CR', t: '2.3.4a', c: 'CA', f: 'A company director took £1,050 from the office safe, intending to replace it with other notes of the same value after the weekend.', p: 'Intention to permanently deprive: he did not intend to return the same notes.' },
  { id: 'lavender', n: 'DPP v Lavender', y: 1994, a: 'CR', t: '2.3.4a', c: 'Divisional Court', f: 'A council tenant took doors from another council property to replace damaged doors in his own flat.', p: 'Intention to permanently deprive under s6: he treated the doors as his own to dispose of regardless of the council’s rights.' },
  { id: 'easom', n: 'R v Easom', y: 1971, a: 'CR', t: '2.3.4a', c: 'CA', f: 'In a cinema, Easom picked up a handbag, looked through it for something worth taking, found nothing and put it back.', p: 'Conditional intention (to steal only if there was something worth stealing) was not intention to permanently deprive of the contents. Such cases are now charged as attempted theft of whatever might be in the bag.' },
  // robbery
  { id: 'rrobinson', n: 'R v Robinson', y: 1977, a: 'CR', t: '2.3.4b', c: 'CA', f: 'Robinson was owed £7 by the victim’s wife. He threatened the victim and took £5 from him.', p: 'Robbery requires a completed theft. He honestly believed he had a legal right to the money (s2(1)(a)), so he was not dishonest — no theft and no robbery.' },
  { id: 'dawsonjames', n: 'R v Dawson and James', y: 1976, a: 'CR', t: '2.3.4b', c: 'CA', f: 'One defendant nudged a man so he lost his balance while the other took his wallet.', p: '“Force” is an ordinary word for the jury; a small amount of force, such as jostling, can be enough.' },
  { id: 'clouden', n: 'R v Clouden', y: 1987, a: 'CR', t: '2.3.4b', c: 'CA', f: 'Clouden wrenched a shopping bag from a woman’s hand.', p: 'Force used on property can be force on the person where it is transmitted to the victim — robbery.' },
  { id: 'pdpp', n: 'P v DPP', y: 2012, a: 'CR', t: '2.3.4b', c: 'Divisional Court', f: 'A youth snatched a cigarette from between the victim’s fingers without touching her.', p: 'Not robbery: there was no force on the person. It was theft.' },
  { id: 'hale', n: 'R v Hale', y: 1979, a: 'CR', t: '2.3.4b', c: 'CA', f: 'Two men broke into a house. One went upstairs and took a jewellery box while the other tied up the occupant; then they left.', p: 'Appropriation is a continuing act; force used while the theft was still going on was “at the time of” stealing.' },
  { id: 'lockley', n: 'R v Lockley', y: 1995, a: 'CR', t: '2.3.4b', c: 'CA', f: 'Lockley took beer from an off-licence and used force on the shopkeeper who tried to stop him leaving.', p: 'Hale applied: the theft was still continuing, so it was robbery.' },
  { id: 'corcoran', n: 'Corcoran v Anderton', y: 1980, a: 'CR', t: '2.3.4b', c: 'Divisional Court', f: 'Two youths tried to grab a woman’s handbag; one tugged it, she let go and it fell to the ground; they ran off without it.', p: 'The appropriation was complete when the youth seized the bag with the intention of taking it — robbery was complete even though they did not get away with it.' },
  // burglary
  { id: 'rcollins', n: 'R v Collins', y: 1972, a: 'CR', t: '2.3.4b', c: 'CA', f: 'Collins climbed a ladder to a young woman’s bedroom window intending to have sex with her. She mistook him for her boyfriend and invited him in while he was on the windowsill.', p: 'Entry must be “effective and substantial”, and the defendant must know or be reckless that he is a trespasser at the time of entry. Conviction quashed as it was unclear whether he had entered before the invitation.' },
  { id: 'rbrown85', n: 'R v Brown', y: 1985, a: 'CR', t: '2.3.4b', c: 'CA', f: 'Brown was found partially inside a broken shop window, with his feet on the pavement, rummaging through goods.', p: 'Entry need only be “effective”; the whole body need not be inside.' },
  { id: 'ryan', n: 'R v Ryan', y: 1996, a: 'CR', t: '2.3.4b', c: 'CA', f: 'Ryan was stuck in a window with his head and right arm inside a house; the fire brigade had to release him.', p: 'This was an entry, even though he was incapable of stealing anything.' },
  { id: 'leathley', n: 'B and S v Leathley', y: 1979, a: 'CR', t: '2.3.4b', c: 'Crown Court', f: 'A freezer container had been in a farmyard for two years, resting on sleepers and connected to electricity, used for storage.', p: 'It was a “building”: a structure of considerable size, intended to be permanent or to endure.' },
  { id: 'seekings', n: 'Norfolk Constabulary v Seekings and Gould', y: 1986, a: 'CR', t: '2.3.4b', c: 'Crown Court', f: 'Lorry trailers with wheels, used as temporary storage and connected to electricity, were broken into.', p: 'Not buildings: they were still vehicles.' },
  { id: 'walkington', n: 'R v Walkington', y: 1979, a: 'CR', t: '2.3.4b', c: 'CA', f: 'In a department store, Walkington went behind a three-sided counter into the area around the till, which was open, and looked in the till.', p: 'The counter area was a “part of a building” from which the public were impliedly excluded — he entered it as a trespasser.' },
  { id: 'smithjones', n: 'R v Smith and Jones', y: 1976, a: 'CR', t: '2.3.4b', c: 'CA', f: 'Jones had general permission to enter his father’s house. He and Smith went in at night and took two televisions.', p: 'A person who enters with permission but goes beyond it (entering to steal) is a trespasser — burglary.' },
  // capacity defences
  { id: 'majewski', n: 'DPP v Majewski', y: 1977, a: 'CR', t: '2.3.5', c: 'HL', f: 'After taking drugs and alcohol, Majewski attacked people in a pub and police officers.', p: 'Voluntary intoxication is no defence to a basic intent offence (e.g. assault, ABH): becoming intoxicated is itself reckless.' },
  { id: 'lipman', n: 'R v Lipman', y: 1970, a: 'CR', t: '2.3.5', c: 'CA', f: 'After taking LSD, Lipman believed he was being attacked by snakes and killed his girlfriend by stuffing a sheet into her mouth.', p: 'Voluntary intoxication negated the intent for murder, but he was guilty of manslaughter (a basic intent offence).' },
  { id: 'gallagher', n: 'Attorney General for Northern Ireland v Gallagher', y: 1963, a: 'CR', t: '2.3.5', c: 'HL', f: 'Gallagher decided to kill his wife, bought a knife and whisky, drank the whisky to give himself courage, then killed her.', p: '“Dutch courage”: a defendant who forms the intent while sober and gets drunk to carry it out has no defence.' },
  { id: 'kingston', n: 'R v Kingston', y: 1994, a: 'CR', t: '2.3.5', c: 'HL', f: 'Kingston’s drink was secretly drugged by a man trying to blackmail him. He then indecently assaulted a boy.', p: 'Involuntary intoxication is no defence if the defendant still formed the mens rea: “a drunken intent is still an intent”.' },
  { id: 'hardie', n: 'R v Hardie', y: 1985, a: 'CR', t: '2.3.5', c: 'CA', f: 'Hardie took his ex-partner’s old Valium tablets to calm down, then started a fire in a wardrobe.', p: 'Taking a drug normally sedative in effect is not reckless, so this counted as involuntary intoxication and could be a defence to a basic intent offence.' },
  { id: 'rallen88', n: 'R v Allen', y: 1988, a: 'CR', t: '2.3.5', c: 'CA', f: 'Allen drank wine without knowing how strong it was, then committed sexual offences.', p: 'Not knowing the strength of what you drink does not make intoxication involuntary.' },
  { id: 'ogrady', n: 'R v O’Grady', y: 1987, a: 'CR', t: '2.3.5', c: 'CA', f: 'After heavy drinking with a friend, O’Grady woke to find the friend hitting him, he believed; he hit back and killed him.', p: 'A defendant cannot rely on a mistake about the need for self-defence induced by voluntary intoxication (now s76(5) CJIA 2008).' },
  { id: 'rbailey', n: 'R v Bailey', y: 1983, a: 'CR', t: '2.3.5', c: 'CA', f: 'A diabetic took insulin but did not eat enough, became aggressive and hit a man with an iron bar.', p: 'Self-induced automatism is a defence to basic intent offences unless the defendant was reckless (knew the risk of becoming aggressive or unpredictable).' },
  { id: 'kemp', n: 'R v Kemp', y: 1957, a: 'CR', t: '2.3.5', c: 'Assizes', f: 'Kemp, who had arteriosclerosis (hardening of the arteries), attacked his wife with a hammer during a blackout.', p: 'A “disease of the mind” is a legal concept: any disease affecting the mind’s functioning — here a physical disease — can count.' },
  { id: 'sullivan', n: 'R v Sullivan', y: 1984, a: 'CR', t: '2.3.5', c: 'HL', f: 'Sullivan kicked a man during an epileptic fit.', p: 'Epilepsy is a disease of the mind for the purposes of the M’Naghten Rules, so the defence was insanity, not automatism.' },
  { id: 'hennessy', n: 'R v Hennessy', y: 1989, a: 'CR', t: '2.3.5', c: 'CA', f: 'A diabetic who had not taken his insulin (hyperglycaemia) took a car and drove while disqualified.', p: 'High blood sugar caused by the diabetes itself is an internal cause — insanity, not automatism.' },
  { id: 'burgess', n: 'R v Burgess', y: 1991, a: 'CR', t: '2.3.5', c: 'CA', f: 'Burgess attacked his friend with a bottle and a video recorder while sleepwalking.', p: 'Sleepwalking from an internal cause is a disease of the mind — insanity.' },
  { id: 'quick', n: 'R v Quick', y: 1973, a: 'CR', t: '2.3.5', c: 'CA', f: 'A diabetic nurse took insulin, ate little, drank alcohol and attacked a patient during a hypoglycaemic episode.', p: 'Low blood sugar caused by insulin (an external factor) is non-insane automatism.' },
  { id: 'windle', n: 'R v Windle', y: 1952, a: 'CR', t: '2.3.5', c: 'Court of Criminal Appeal', f: 'Windle, who suffered from a mental illness, killed his wife with an overdose of aspirin and told police: “I suppose they will hang me for this.”', p: '“Wrong” in the M’Naghten Rules means legally wrong. He knew his act was illegal, so the insanity defence failed.' },
  { id: 'bratty', n: 'Bratty v Attorney General for Northern Ireland', y: 1963, a: 'CR', t: '2.3.5', c: 'HL', f: 'Bratty strangled a girl, claiming a “blackness” came over him; he may have had psychomotor epilepsy.', p: 'Automatism is an act done by the muscles without control by the mind; a disease of the mind is any mental disorder that has manifested itself in violence and is prone to recur.' },
  { id: 'rvt', n: 'R v T', y: 1990, a: 'CR', t: '2.3.5', c: 'Crown Court', f: 'Three days after being raped, T took part in a robbery while suffering from PTSD, in a dissociative state.', p: 'PTSD caused by an external event (the rape) could found non-insane automatism.' },
  { id: 'agref2of1992', n: 'Attorney General’s Reference (No 2 of 1992)', y: 1993, a: 'CR', t: '2.3.5', c: 'CA', f: 'A lorry driver claimed he was “driving without awareness” after many hours on a motorway, and crashed into a vehicle on the hard shoulder.', p: 'Automatism requires a total destruction of voluntary control; impaired or reduced awareness is not enough.' },
  // necessity-type defences
  { id: 'morgan', n: 'DPP v Morgan', y: 1976, a: 'CR', t: '2.3.6', c: 'HL', f: 'An RAF officer told three men that his wife would consent to sex with them and that her resistance was pretend.', p: 'An honest mistake of fact that negates mens rea need not be reasonable (the law on rape has since changed: the Sexual Offences Act 2003 requires a reasonable belief in consent).' },
  { id: 'gladstonewilliams', n: 'R v Williams (Gladstone)', y: 1984, a: 'CR', t: '2.3.6', c: 'CA', f: 'Williams saw a man dragging a youth along the street and hit him, thinking he was attacking the youth. The man was lawfully arresting the youth for robbery.', p: 'A defendant who uses force in self-defence (or defence of others) is judged on the facts as he honestly believed them to be, even if the belief was unreasonable.' },
  { id: 'beckford', n: 'Beckford v R', y: 1988, a: 'CR', t: '2.3.6', c: 'Privy Council', f: 'A police officer shot a man he honestly believed was armed and about to shoot.', p: 'A person may use reasonable force in self-defence based on an honest belief; a person does not have to wait to be struck first — a pre-emptive strike can be justified.' },
  { id: 'palmer', n: 'Palmer v R', y: 1971, a: 'CR', t: '2.3.6', c: 'Privy Council', f: 'Palmer shot a man who had been chasing him after a drug deal went wrong.', p: 'A person defending themselves “cannot weigh to a nicety the exact measure of his necessary defensive action”; what they honestly thought necessary is strong evidence of reasonableness.' },
  { id: 'clegg', n: 'R v Clegg', y: 1995, a: 'CR', t: '2.3.6', c: 'HL', f: 'A soldier at a checkpoint in Northern Ireland fired at a car that drove through; the fourth shot, fired after the car had passed and the danger was over, killed a passenger.', p: 'Where excessive force is used, self-defence fails completely, and there is no partial defence reducing murder to manslaughter. (His conviction was later quashed on new evidence.)' },
  { id: 'tonymartin', n: 'R v Martin (Anthony)', y: 2001, a: 'CR', t: '2.3.6', c: 'CA', f: 'A farmer shot two burglars in his isolated farmhouse at night, killing one as he fled.', p: 'His psychiatric condition was not relevant to whether the force was reasonable in self-defence; the murder conviction was replaced by manslaughter on the ground of diminished responsibility.' },
  { id: 'bird', n: 'R v Bird', y: 1985, a: 'CR', t: '2.3.6', c: 'CA', f: 'A girl was slapped and pushed by her ex-boyfriend; she lashed out with a glass in her hand and blinded him in one eye.', p: 'There is no duty to retreat, but whether the defendant could have retreated is a factor in deciding whether the force was reasonable (now s76(6A) CJIA 2008).' },
  { id: 'ray', n: 'R v Ray', y: 2017, a: 'CR', t: '2.3.6', c: 'CA', f: 'Ray stabbed his ex-partner’s new partner, who came into the house to confront him.', p: 'In householder cases (s76(5A) CJIA 2008), grossly disproportionate force is never reasonable; disproportionate force may be reasonable in the circumstances, but is not necessarily so.' },
  { id: 'hasan', n: 'R v Hasan', y: 2005, a: 'CR', t: '2.3.6', c: 'HL', f: 'Hasan, who worked for a man involved in prostitution and drug dealing, was threatened by a violent man into committing a burglary.', p: 'Duress is unavailable where the defendant voluntarily associated with criminals and foresaw, or ought reasonably to have foreseen, the risk of being subjected to compulsion by threats of violence. The threat must be believed to be carried out immediately or almost immediately.' },
  { id: 'graham', n: 'R v Graham', y: 1982, a: 'CR', t: '2.3.6', c: 'CA', f: 'Graham, a homosexual man taking Valium, helped his lover kill his wife, claiming he feared violence from the lover.', p: 'Two-stage test: (1) was the defendant compelled to act because he reasonably believed he faced death or serious injury? (2) would a sober person of reasonable firmness, sharing his characteristics, have responded the same way?' },
  { id: 'bowen', n: 'R v Bowen', y: 1996, a: 'CR', t: '2.3.6', c: 'CA', f: 'Bowen, who had a low IQ, obtained goods by deception after threats that he and his family would be petrol-bombed.', p: 'Relevant characteristics for the reasonable person: age, sex, pregnancy, serious physical disability, recognised mental illness or psychiatric condition. Low IQ alone is not relevant, nor is being pliable or vulnerable.' },
  { id: 'gotts', n: 'R v Gotts', y: 1992, a: 'CR', t: '2.3.6', c: 'HL', f: 'A 16-year-old stabbed his mother, seriously injuring her, after his father threatened to shoot him unless he killed her.', p: 'Duress is not a defence to attempted murder (following the obiter in R v Howe).' },
  { id: 'hudsontaylor', n: 'R v Hudson and Taylor', y: 1971, a: 'CR', t: '2.3.6', c: 'CA', f: 'Two teenage girls gave false evidence in court after threats of violence from a man who was in the public gallery.', p: 'Held the threat did not need to be carried out immediately; police protection might not be effective. This was criticised as too generous in R v Hasan, which requires the threat to be effective immediately or almost immediately.' },
  { id: 'sharp', n: 'R v Sharp', y: 1987, a: 'CR', t: '2.3.6', c: 'CA', f: 'Sharp joined a gang committing robberies with guns, then claimed he was forced to continue by threats.', p: 'Duress is not available to someone who voluntarily joins a violent criminal gang knowing it might pressure him to commit offences.' },
  { id: 'willer', n: 'R v Willer', y: 1986, a: 'CR', t: '2.3.6', c: 'CA', f: 'Willer drove slowly along a pavement to escape a gang of youths who were threatening him and his passenger.', p: 'Recognised the defence of duress of circumstances (sometimes described as necessity) for reckless driving.' },
  { id: 'rconway', n: 'R v Conway', y: 1989, a: 'CR', t: '2.3.6', c: 'CA', f: 'Conway drove recklessly to escape two men he believed were trying to attack his passenger, who had previously been shot at. They were plain-clothes police officers.', p: 'Duress of circumstances is available where the defendant reasonably believes there is a threat of death or serious injury; it is a form of duress.' },
  { id: 'rmartin89', n: 'R v Martin', y: 1989, a: 'CR', t: '2.3.6', c: 'CA', f: 'Martin’s wife, who had suicidal tendencies, threatened to kill herself unless he drove their son to work, though he was disqualified.', p: 'Duress of circumstances applies the Graham test; it can arise from threats of suicide.' },
  { id: 'pommell', n: 'R v Pommell', y: 1995, a: 'CR', t: '2.3.6', c: 'CA', f: 'Pommell took a gun from a man to stop him shooting someone and kept it overnight intending to hand it to the police.', p: 'Duress of circumstances is available for all crimes except murder, attempted murder and some forms of treason. Delay after the threat ended may defeat it.' },
  { id: 'dppbell', n: 'DPP v Bell', y: 1992, a: 'CR', t: '2.3.6', c: 'Divisional Court', f: 'Bell, who had been drinking, drove off to escape a group who were threatening him, and stopped shortly after he was safe.', p: 'Duress of circumstances was a defence to drink-driving because he drove only as far as necessary to escape.' },
  { id: 'shayler', n: 'R v Shayler', y: 2001, a: 'CR', t: '2.3.6', c: 'HL', f: 'A former MI5 officer disclosed secret documents to a newspaper, arguing it was necessary to expose wrongdoing.', p: 'Duress of circumstances and necessity were not available: there was no threat of imminent death or serious injury to identifiable people.' },
  { id: 'barnes', n: 'R v Barnes', y: 2004, a: 'CR', t: '2.3.6', c: 'CA', f: 'An amateur footballer made a late, crushing tackle, seriously injuring the other player’s leg.', p: 'Criminal prosecution of sports injuries should be reserved for conduct sufficiently grave to be criminal — beyond what a player can reasonably be taken to have consented to.' },
  { id: 'emmett', n: 'R v Emmett', y: 1999, a: 'CR', t: '2.3.6', c: 'CA', f: 'During consensual sexual activity, Emmett asphyxiated his partner with a plastic bag and set fire to lighter fuel on her breasts, injuring her.', p: 'Consent was no defence to actual bodily harm — Brown applied to heterosexual couples.' },
  { id: 'aitken', n: 'R v Aitken', y: 1992, a: 'CR', t: '2.3.6', c: 'Courts-Martial Appeal Court', f: 'RAF officers at a party set fire to a colleague’s fire-resistant suit as a prank; he was badly burned.', p: 'An honest belief in consent to rough horseplay can be a defence, even if not reasonable.' },
  { id: 'agref6of1980', n: 'Attorney General’s Reference (No 6 of 1980)', y: 1981, a: 'CR', t: '2.3.6', c: 'CA', f: 'Two youths agreed to settle an argument by a fist fight in the street.', p: 'Consent is no defence where actual bodily harm is intended or caused in a private fight: it is not in the public interest.' },
  { id: 'tabassum', n: 'R v Tabassum', y: 2000, a: 'CR', t: '2.3.6', c: 'CA', f: 'A man persuaded women to let him examine their breasts, falsely claiming he was preparing a breast cancer survey.', p: 'The women consented to touching for a medical purpose, not to the actual act — consent to the nature and quality of the act was absent.' },
  // attempts
  { id: 'gullefer', n: 'R v Gullefer', y: 1990, a: 'CR', t: '2.3.7', c: 'CA', f: 'Gullefer jumped onto a greyhound track to stop a race, hoping to reclaim his bet.', p: 'Not attempted theft: he had not yet “embarked on the crime proper” — still merely preparatory.' },
  { id: 'rjones', n: 'R v Jones', y: 1990, a: 'CR', t: '2.3.7', c: 'CA', f: 'Jones got into his rival’s car with a loaded sawn-off shotgun and pointed it at him. The safety catch was on and his finger may not have been on the trigger.', p: 'Attempted murder: his acts were more than merely preparatory, even though he had not done the last act.' },
  { id: 'geddes', n: 'R v Geddes', y: 1996, a: 'CR', t: '2.3.7', c: 'CA', f: 'Geddes was found in the boys’ toilets of a school with a rucksack containing a knife, rope and masking tape. He had not contacted any pupil.', p: 'Not attempted false imprisonment: he had not moved from planning and preparation to execution. The test: had he actually tried to commit the offence?' },
  { id: 'tosti', n: 'R v Tosti', y: 1997, a: 'CR', t: '2.3.7', c: 'CA', f: 'Tosti and another hid oxyacetylene cutting equipment near a barn and were examining the padlock on its door when they were disturbed.', p: 'Attempted burglary: examining the lock was more than merely preparatory.' },
  { id: 'rcampbell', n: 'R v Campbell', y: 1991, a: 'CR', t: '2.3.7', c: 'CA', f: 'Campbell was arrested a yard from a post office door, carrying an imitation gun and a threatening note, intending to rob it.', p: 'Not attempted robbery: he had not entered the post office, so his acts were still preparatory.' },
  { id: 'whybrow', n: 'R v Whybrow', y: 1951, a: 'CR', t: '2.3.7', c: 'Court of Criminal Appeal', f: 'Whybrow wired up a soap dish to the mains electricity so his wife would get an electric shock in the bath.', p: 'Attempted murder requires an intention to kill; an intention to cause GBH, though enough for murder, is not enough for attempted murder.' },
  { id: 'mohan', n: 'R v Mohan', y: 1976, a: 'CR', t: '2.3.7', c: 'CA', f: 'Mohan drove his car at a police officer who had signalled him to stop.', p: 'Intention for attempts means “a decision to bring about … the commission of the offence … no matter whether the accused desired that consequence”; recklessness is not enough.' },
  { id: 'agref3of1992', n: 'Attorney General’s Reference (No 3 of 1992)', y: 1994, a: 'CR', t: '2.3.7', c: 'CA', f: 'The defendants threw a petrol bomb towards a car with people in it; it missed and hit a wall.', p: 'For attempted aggravated arson, intention to damage property was needed, but recklessness as to endangering life (a circumstance) was enough.' },
  { id: 'khan', n: 'R v Khan', y: 1990, a: 'CR', t: '2.3.7', c: 'CA', f: 'Several youths attempted to have sex with a 16-year-old girl who did not consent.', p: 'For attempted rape, recklessness as to the circumstance (lack of consent) was enough, as for the full offence (the law on rape has since changed).' }
]);

/* ---------- 2.3.4a Theft ---------- */
TOPICS.push({
  id: '2.3.4a', unit: 'CR', ref: '2.3.4', title: 'Theft',
  short: 's1 Theft Act 1968: appropriation, property, belonging to another, dishonesty, intention to permanently deprive',
  summary: 'Theft is defined in section 1 of the Theft Act 1968, with each element explained in sections 2 to 6. The actus reus is the appropriation of property belonging to another; the mens rea is dishonesty and the intention to permanently deprive. Theft is also the basis of robbery and some forms of burglary.',
  spec: ['Definition of theft: s1 Theft Act 1968', 'Actus reus: appropriation (s3), property (s4), belonging to another (s5)', 'Mens rea: dishonesty (s2 and the Ivey test), intention permanently to deprive (s6)', 'Application to scenarios'],
  learn: [
    { h: 'The definition', html: `
<div class="box stat"><b class="lbl">s1(1) Theft Act 1968</b><p>A person is guilty of theft if he <b>dishonestly appropriates property belonging to another</b> with the <b>intention of permanently depriving</b> the other of it.</p></div>
<p>Maximum sentence: 7 years. Triable either way (shoplifting of goods worth £200 or less is normally tried summarily).</p>
<div class="tbl"><table><tr><th>Actus reus</th><th>Mens rea</th></tr><tr><td>Appropriation (s3)<br>Property (s4)<br>Belonging to another (s5)</td><td>Dishonesty (s2 + Ivey)<br>Intention to permanently deprive (s6)</td></tr></table></div>` },
    { h: 'Appropriation (s3)', html: `
<p><b>s3(1)</b>: “Any assumption by a person of the rights of an owner amounts to an appropriation”, including a later assumption of rights over property originally obtained innocently (e.g. deciding to keep something borrowed).</p>
<ul><li>Assuming <b>any</b> of the owner’s rights is enough — [[c:rmorris]] (switching labels).</li>
<li>Appropriation can occur <b>with the owner’s consent</b> — [[c:lawrence]]; [[c:gomez]]; even a valid gift — [[c:hinks]]. The focus shifts to dishonesty.</li>
<li><b>s3(2)</b>: a bona fide purchaser for value who later discovers the goods were stolen does not appropriate them by keeping them.</li></ul>` },
    { h: 'Property (s4)', html: `
<p><b>s4(1)</b>: property includes <b>money and all other property, real or personal</b>, including <b>things in action</b> (e.g. a bank balance) and other <b>intangible property</b> (e.g. shares, copyright).</p>
<ul><li><b>Land</b> generally cannot be stolen (s4(2)), with exceptions (e.g. a trustee, or severing things from land).</li>
<li><b>Wild plants</b>: picking mushrooms, flowers, fruit or foliage growing wild is not theft unless done for reward, sale or commercial purposes (s4(3)).</li>
<li><b>Wild creatures</b> cannot be stolen unless tamed or kept in captivity, or reduced into possession (s4(4)).</li>
<li><b>Confidential information</b> is not property — [[c:oxfordmoss]]. <b>Electricity</b> is not property (it is a separate offence — s13). Body parts can be property if altered by skill — [[c:kelly]].</li></ul>` },
    { h: 'Belonging to another (s5)', html: `
<ul><li><b>s5(1)</b>: property belongs to anyone having <b>possession or control</b> of it, or any <b>proprietary right or interest</b> — so a person can steal their own property from someone with possession ([[c:turner]]); an owner still controls property on their land ([[c:woodman]]).</li>
<li><b>s5(3)</b>: property received under an <b>obligation to deal with it in a particular way</b> belongs to the other person — [[c:davidge]]; not where there was no such obligation — [[c:rhall]].</li>
<li><b>s5(4)</b>: property received by <b>mistake</b>, where there is a legal obligation to return it, belongs to the other — [[c:agref1of1983]].</li>
<li>Truly <b>abandoned</b> property belongs to no one — but property is rarely abandoned (lost golf balls in a club lake still belong to the club).</li></ul>` },
    { h: 'Dishonesty (s2 and Ivey)', html: `
<p>“Dishonesty” is not defined, but <b>s2(1)</b> says a person is <b>not</b> dishonest if they appropriate property in the belief that:</p>
<ul><li>(a) they have a <b>legal right</b> to deprive the other of it; or</li><li>(b) the other would <b>consent</b> if they knew of the appropriation and the circumstances; or</li><li>(c) the owner <b>cannot be discovered</b> by taking reasonable steps (not for trustees).</li></ul>
<p><b>s2(2)</b>: an appropriation may be dishonest even if the person is willing to pay.</p>
<p>Otherwise, the <b>Ivey test</b> applies ([[c:ivey]], confirmed for criminal law in [[c:barton]]):</p>
<ol><li>What was the defendant’s <b>actual state of knowledge or belief</b> as to the facts? (The belief must be genuine, but need not be reasonable.)</li>
<li>In the light of that, was the conduct <b>dishonest by the standards of ordinary decent people</b>? — an <b>objective</b> test. The defendant does not need to realise it was dishonest.</li></ol>
<p>This replaced the two-stage <i>R v Ghosh</i> (1982) test, whose second (subjective) limb — did the defendant realise ordinary people would regard it as dishonest? — was criticised as a “Robin Hood defence”.</p>` },
    { h: 'Intention to permanently deprive (s6)', html: `
<p>Usually obvious (the defendant keeps, sells or destroys the property). <b>s6(1)</b> extends it: a person has the intention if they intend to <b>treat the thing as their own to dispose of regardless of the other’s rights</b>; and <b>borrowing</b> may amount to it if for a period and in circumstances making it equivalent to an outright taking.</p>
<ul><li>Borrowing and returning the thing unchanged is not enough — [[c:rlloyd]] (only if its “goodness, virtue and practical value” is gone, e.g. returning a used-up season ticket).</li>
<li>Taking money intending to repay with different notes is intention to permanently deprive — [[c:velumyl]].</li>
<li>“Dispose of” — [[c:lavender]].</li>
<li><b>Conditional intention</b> (to take something only if worth taking) is not intention to permanently deprive — [[c:easom]] — so charge attempted theft of the contents.</li></ul>
<p>Taking a car without consent to return it later is a separate offence (s12 TA 1968).</p>` }
  ],
  debate: [{ q: 'Is the Ivey test for dishonesty an improvement on Ghosh?', for: ['Removes the “Robin Hood defence” — people cannot escape by claiming different moral standards.', 'Aligns civil and criminal law.', 'Simpler for juries — one objective question after establishing beliefs.'], ag: ['Juries’ views of “ordinary decent people” vary — inconsistency.', 'A defendant can be convicted without realising their conduct was dishonest.', 'Concerns about fairness in marginal commercial cases.', 'Changed by the courts, not Parliament.'] }],
  cases: ['rmorris', 'lawrence', 'gomez', 'hinks', 'oxfordmoss', 'kelly', 'turner', 'woodman', 'rhall', 'davidge', 'agref1of1983', 'ivey', 'barton', 'rlloyd', 'velumyl', 'lavender', 'easom'],
  worked: [{ q: '<b>Scenario.</b> Nia borrows her flatmate Olu’s concert ticket, saying she will return it after “checking the seat number”. She uses it to go to the concert, then puts it back in his drawer. Separately, Nia’s bank mistakenly credits her account with £500; she notices and spends it. Advise Nia.', s: ['<b class="st">Ticket — AR</b>Using the ticket is an appropriation (assuming the owner’s rights — Morris). A ticket is property (s4 — and the right it represents). It belongs to Olu (s5).', '<b class="st">Ticket — MR</b>Returning it after the concert: it has lost all its “goodness, virtue and practical value” — equivalent to an outright taking under s6 (Lloyd). Dishonest? She lied to Olu; under Ivey, ordinary decent people would regard this as dishonest; no s2 belief applies. Guilty of theft.', '<b class="st">£500 — AR</b>The credit is a thing in action (s4(1)). Received by mistake with a legal obligation to repay — belongs to the bank (s5(4); AG’s Ref No 1 of 1983). Spending it is an appropriation.', '<b class="st">£500 — MR</b>She knew it was a mistake; by Ivey’s objective standard, spending it is dishonest; she intended to permanently deprive (spent it). Guilty of theft.'], a: 'Theft of both — s6 (Lloyd) and s5(4).' }],
  pitfalls: ['Saying there is no appropriation because the owner consented (Gomez; Hinks).', 'Using the Ghosh test — Ivey now applies (Barton and Booth).', 'Treating borrowing as never being theft (s6; Lloyd).', 'Forgetting s5(3) and s5(4) when property was handed over.', 'Saying confidential information can be stolen.'],
  cards: [
    ['s1 Theft Act 1968?', 'Dishonestly appropriates property belonging to another with the intention of permanently depriving the other of it.'],
    ['s3 appropriation?', 'Any assumption of the rights of an owner.'],
    ['R v Morris (1984)?', 'Assuming any right of the owner (switching labels) is appropriation.'],
    ['DPP v Gomez (1993)?', 'Appropriation can occur with consent obtained by deception.'],
    ['R v Hinks (2000)?', 'A valid gift can be appropriated.'],
    ['s4 property?', 'Money and all other property, real or personal, including things in action and intangible property.'],
    ['Oxford v Moss (1979)?', 'Confidential information is not property.'],
    ['s5(1) belonging to another?', 'Possession, control or any proprietary interest — R v Turner (No 2).'],
    ['s5(3)?', 'Property received under an obligation to deal with it in a particular way (Davidge v Bunnett).'],
    ['s5(4)?', 'Property received by mistake with a legal obligation to restore it.'],
    ['s2(1) — not dishonest if belief in…?', 'Legal right; owner’s consent; owner cannot be found by reasonable steps.'],
    ['Ivey test?', '(1) D’s actual belief as to facts; (2) dishonest by standards of ordinary decent people.'],
    ['s6 intention to permanently deprive?', 'Treating the thing as your own to dispose of regardless of the owner; borrowing equivalent to outright taking.'],
    ['R v Lloyd (1985)?', 'Borrowing films unchanged — not ITPD; goodness and virtue test.'],
    ['R v Velumyl (1989)?', 'Taking money intending to replace with other notes — ITPD.']
  ],
  quiz: [
    { q: 'Switching price labels in a shop was held to be an appropriation in…', o: ['R v Morris', 'R v Hinks', 'Oxford v Moss', 'R v Lloyd'], x: 'Assuming any right.' },
    { q: 'Which is NOT property that can be stolen?', o: ['Confidential information in an exam paper', 'A bank balance', 'Shares', 'Money'], x: 'Oxford v Moss.' },
    { q: 'In R v Turner (No 2) the defendant stole…', o: ['his own car from a garage that had possession of it', 'a stranger’s car', 'electricity', 'land'], x: 's5(1).' },
    { q: 'The current test for dishonesty comes from…', o: ['Ivey v Genting Casinos', 'R v Ghosh', 'R v Hinks', 'DPP v Gomez'], x: 'Confirmed in Barton and Booth.' },
    { q: 'Under s2(1)(a), a person is not dishonest if they believe…', o: ['they have a legal right to the property', 'they will pay later', 'the owner is rich', 'nobody will notice'], x: 'R v Robinson.' },
    { q: 'In R v Lloyd, borrowing films to copy them was not theft because…', o: ['they were returned with their value unchanged', 'films are not property', 'there was consent', 'there was no appropriation'], x: 's6 goodness and virtue.' },
    { q: 'A flatmate who spends money given to pay the gas bill commits theft because of…', o: ['s5(3) — obligation to deal with it in a particular way', 's4(3)', 's3(2)', 's13'], x: 'Davidge v Bunnett.' },
    { q: 'An overpayment of wages by mistake can be stolen because of…', o: ['s5(4)', 's5(3)', 's4(4)', 's2(2)'], x: 'AG’s Ref (No 1 of 1983).' },
    { q: 'R v Hinks decided that…', o: ['receiving a valid gift can be an appropriation', 'gifts can never be stolen', 'dishonesty is subjective', 'land can be stolen'], x: 'Controversial.' },
    { q: 'Picking wild blackberries for your own use is…', o: ['not theft (s4(3))', 'theft', 'robbery', 'burglary'], x: 'Unless for sale or reward.' }
  ],
  exam: [
    { q: 'Explain the actus reus of theft. [10]', m: 10, ms: ['s1 definition', 's3 appropriation — any right (Morris)', 'consent — Lawrence, Gomez, Hinks', 's4 property — types; exceptions', 'Oxford v Moss; Kelly', 's5(1) — possession/control (Turner, Woodman)', 's5(3) — Davidge v Hall', 's5(4) — AG’s Ref (No 1 of 1983)'] },
    { q: 'Analyse and evaluate the law on dishonesty in theft. [25]', m: 25, ms: ['no definition in the Act; s2(1) three situations; s2(2)', 'Ghosh test and its criticisms', 'Ivey — two stages', 'Barton and Booth — adopted in criminal law', 'objective standard — certainty v jury variation', 'relationship with appropriation (Gomez, Hinks) — dishonesty doing all the work', 'fairness to defendants', 'comparison with fraud offences', 'reform options', 'conclusion'] }
  ],
  tools: ['thefttree']
});

/* ---------- 2.3.4b Robbery and burglary ---------- */
TOPICS.push({
  id: '2.3.4b', unit: 'CR', ref: '2.3.4', title: 'Robbery and burglary',
  short: 'Robbery (s8 Theft Act 1968); burglary s9(1)(a) and s9(1)(b), dwellings and other buildings',
  summary: 'Robbery is theft with force or the threat of force (s8 Theft Act 1968). Burglary (s9) is entering a building or part of a building as a trespasser, either with intent to commit certain offences (s9(1)(a)) or then committing theft or GBH inside (s9(1)(b)). Both are serious offences with high maximum sentences.',
  spec: ['Robbery: theft with the use or threat of force, s8 Theft Act 1968', 'Burglary: elements of s9(1)(a) and s9(1)(b) Theft Act 1968', 'Burglary in dwellings and other buildings', 'Application to scenarios'],
  learn: [
    { h: 'Robbery (s8)', html: `
<div class="box stat"><b class="lbl">s8(1) Theft Act 1968 (max life)</b><p>A person is guilty of robbery if he <b>steals</b>, and immediately before or at the time of doing so, and in order to do so, he <b>uses force on any person</b> or <b>puts or seeks to put any person in fear of being then and there subjected to force</b>.</p></div>
<ul><li><b>A completed theft</b> — all elements of s1. No theft, no robbery: [[c:rrobinson]] (honest belief in a legal right — not dishonest). The theft is complete at the moment of appropriation — [[c:corcoran]].</li>
<li><b>Force</b> — an ordinary word for the jury; slight force can be enough ([[c:dawsonjames]], jostling). Force on property transmitted to the person counts ([[c:clouden]], wrenching a bag); snatching without touching the person does not ([[c:pdpp]]).</li>
<li><b>On any person</b> — not necessarily the owner (e.g. a security guard).</li>
<li><b>Threat of force</b> — putting or seeking to put someone in fear of force “then and there”. Threats of future force are not enough (consider blackmail).</li>
<li><b>Immediately before or at the time of stealing</b> — appropriation is a continuing act ([[c:hale]]; [[c:lockley]]). Force used long after the theft is over is not robbery.</li>
<li><b>In order to steal</b> — force used for another reason (e.g. an unrelated assault, after which the defendant decides to take the victim’s phone) is not robbery.</li>
<li><b>Mens rea</b>: the mens rea for theft, plus intention or recklessness as to the use or threat of force.</li></ul>` },
    { h: 'Burglary (s9)', html: `
<div class="box stat"><b class="lbl">s9 Theft Act 1968</b><p><b>s9(1)(a)</b>: a person enters any building or part of a building as a trespasser with intent to steal, inflict grievous bodily harm or do unlawful damage to the building or anything in it.<br><b>s9(1)(b)</b>: having entered any building or part of a building as a trespasser, a person steals or attempts to steal anything in it, or inflicts or attempts to inflict grievous bodily harm on any person in it.</p></div>
<p>Maximum sentence: <b>14 years for a dwelling</b>, 10 years for other buildings. Aggravated burglary (s10 — with a firearm, weapon or explosive) carries life.</p>
<div class="tbl"><table><tr><th></th><th>s9(1)(a)</th><th>s9(1)(b)</th></tr>
<tr><td>Key moment</td><td>Intention at the time of entry</td><td>What happens after entry</td></tr>
<tr><td>Ulterior offence</td><td>Intend to steal, inflict GBH or do criminal damage (need not commit it)</td><td>Steal / attempt, or inflict / attempt GBH (not criminal damage)</td></tr>
<tr><td>Mens rea</td><td>Knowledge or recklessness as to trespass + ulterior intent</td><td>Knowledge or recklessness as to trespass + mens rea of theft or GBH</td></tr></table></div>` },
    { h: 'The elements of burglary', html: `
<ul><li><b>Entry</b>: not defined. Must be “effective and substantial” ([[c:rcollins]]); later just “effective” ([[c:rbrown85]]); even being stuck with head and arm inside ([[c:ryan]]). Inserting a tool may count if used to steal.</li>
<li><b>Building</b>: not defined, but includes an <b>inhabited vehicle or vessel</b> (s9(4)) such as a houseboat or caravan, whether or not anyone is there. A structure with some permanence ([[c:leathley]]); not a vehicle still on wheels ([[c:seekings]]).</li>
<li><b>Part of a building</b>: an area the defendant has no permission to enter, e.g. behind a shop counter ([[c:walkington]]) or a staff-only room.</li>
<li><b>As a trespasser</b>: without permission, or <b>going beyond permission</b> — entering with permission but intending to steal ([[c:smithjones]]). The defendant must <b>know or be reckless</b> that they are trespassing ([[c:rcollins]]).</li>
<li><b>Ulterior intent</b> (s9(1)(a)): conditional intent (“to steal anything worth stealing”) is enough for burglary (AG’s Refs (Nos 1 and 2 of 1979)).</li></ul>` }
  ],
  debate: [{ q: 'Should the definition of “entry” in burglary be clarified by statute?', for: ['Three different tests (Collins, Brown, Ryan) — uncertainty.', 'Ryan convicted someone who could not steal anything.', 'Juries need a clear rule; codification would help.'], ag: ['“Effective entry” is flexible and works in practice.', 'The purpose — protecting property and the home — justifies wide liability.', 'Attempted burglary covers borderline cases anyway.'] }],
  cases: ['rrobinson', 'corcoran', 'dawsonjames', 'clouden', 'pdpp', 'hale', 'lockley', 'rcollins', 'rbrown85', 'ryan', 'leathley', 'seekings', 'walkington', 'smithjones'],
  worked: [{ q: '<b>Scenario.</b> Pip goes into a department store during opening hours, intending to steal. He walks through a door marked “Staff only” into the stockroom and takes a watch. As he leaves, a security guard grabs him; Pip pushes the guard over and runs off. Advise Pip.', s: ['<b class="st">Theft</b>Taking the watch is dishonest appropriation of property belonging to another with ITPD (s1).', '<b class="st">Burglary (a)</b>He entered the store with permission, but going in to steal exceeds that permission (Smith and Jones) — he entered as a trespasser with intent to steal: s9(1)(a) on entry to the store. Alternatively, the stockroom is a “part of a building” he had no permission to enter (Walkington).', '<b class="st">Burglary (b)</b>Having entered the stockroom as a trespasser, he stole — s9(1)(b). Non-dwelling: maximum 10 years.', '<b class="st">Robbery</b>He used force on the guard while still leaving with the watch — the appropriation was continuing (Hale; Lockley), and the push was used in order to steal (to get away with it). Likely robbery (s8).'], a: 'Burglary (s9(1)(a) and/or (b)) and robbery.' }],
  pitfalls: ['Forgetting that robbery requires a completed theft (Robinson).', 'Treating force used after the theft is finished, or for another reason, as robbery.', 'Confusing s9(1)(a) (intent at entry) with s9(1)(b) (what happens after entry).', 'Including criminal damage in s9(1)(b) — it is only in s9(1)(a).', 'Saying someone with permission can never be a trespasser (Smith and Jones).'],
  cards: [
    ['s8 robbery definition?', 'Steals, and immediately before or at the time, in order to do so, uses force on any person or puts/seeks to put them in fear of force then and there.'],
    ['R v Robinson (1977)?', 'No theft (honest belief in legal right) — no robbery.'],
    ['R v Dawson and James (1976)?', 'Force is an ordinary word; jostling can be enough.'],
    ['R v Clouden (1987)?', 'Wrenching a bag from a hand is force on the person.'],
    ['P v DPP (2012)?', 'Snatching a cigarette without touching the person — not robbery.'],
    ['R v Hale (1979)?', 'Appropriation is continuing — force “at the time of” stealing.'],
    ['s9(1)(a) burglary?', 'Enters a building or part as a trespasser with intent to steal, inflict GBH or do unlawful damage.'],
    ['s9(1)(b) burglary?', 'Having entered as a trespasser, steals/attempts or inflicts/attempts GBH.'],
    ['R v Collins (1972)?', 'Entry must be effective and substantial; must know/be reckless about trespass.'],
    ['R v Ryan (1996)?', 'Head and arm stuck in a window was an entry.'],
    ['R v Walkington (1979)?', 'Area behind a shop counter is part of a building.'],
    ['R v Smith and Jones (1976)?', 'Exceeding permission (entering to steal) makes you a trespasser.'],
    ['Maximum sentence for burglary of a dwelling?', '14 years (10 for other buildings).']
  ],
  quiz: [
    { q: 'Robbery requires…', o: ['a completed theft', 'an attempted theft', 'entry into a building', 'a weapon'], x: 'R v Robinson.' },
    { q: 'In P v DPP, snatching a cigarette without touching the victim was…', o: ['theft, not robbery', 'robbery', 'burglary', 'assault'], x: 'No force on the person.' },
    { q: 'Force used while leaving the scene with stolen goods can be robbery because…', o: ['appropriation is a continuing act (Hale)', 'robbery covers any later force', 'burglary includes force', 'the goods were valuable'], x: 'Also Lockley.' },
    { q: 'Which is part of s9(1)(a) but NOT s9(1)(b)?', o: ['Intent to do unlawful damage', 'Stealing', 'Inflicting GBH', 'Entering as a trespasser'], x: 'Criminal damage only in (a).' },
    { q: 'The “effective and substantial” test for entry comes from…', o: ['R v Collins', 'R v Brown', 'R v Ryan', 'R v Walkington'], x: 'Later softened.' },
    { q: 'A freezer container resting on sleepers for two years was held to be…', o: ['a building', 'a vehicle', 'land', 'not property'], x: 'B and S v Leathley.' },
    { q: 'A son who enters his father’s house with permission but intending to steal is…', o: ['a trespasser (burglary)', 'not a trespasser', 'guilty only of theft', 'guilty of robbery'], x: 'Smith and Jones.' },
    { q: 'An inhabited caravan is…', o: ['a building for burglary (s9(4))', 'never a building', 'only a building if someone is inside', 'a vehicle, so no burglary'], x: 'Inhabited vehicle or vessel.' }
  ],
  exam: [{ q: 'Scenario (Component 2)', scen: 'Rhys owes Sam £50. Sam goes to Rhys’s flat, where Rhys’s flatmate Tia lets him in. Sam goes into Rhys’s bedroom without permission, finds £80 in a drawer and takes it, believing he is entitled to the money. As he leaves, Tia tries to stop him and he shoves her into a door, breaking her nose. <b>Discuss Sam’s criminal liability for property offences. [15]</b>', m: 15, ms: ['theft — appropriation, property, belonging to another', 'dishonesty — s2(1)(a) belief in legal right for £50; Ivey for the extra £30', 'ITPD', 'burglary — entry to flat with permission; bedroom as part of a building (Walkington)', 'trespasser — exceeding permission (Smith and Jones); knowledge', 's9(1)(a) intent at entry to bedroom; s9(1)(b) theft after entry; dwelling', 'robbery — force “at the time of” stealing (Hale; Lockley)', 'Robinson — no theft of £50 means no robbery of it', 'reasoned conclusions'] }],
  tools: ['burglarysort']
});

/* ---------- 2.3.5 Capacity defences ---------- */
TOPICS.push({
  id: '2.3.5', unit: 'CR', ref: '2.3.5', title: 'Intoxication, insanity and automatism',
  short: 'Voluntary and involuntary intoxication by alcohol and drugs; specific and basic intent; M’Naghten Rules; insane and non-insane automatism',
  summary: 'The capacity defences concern the defendant’s mental state. Intoxication can prevent the defendant forming mens rea, but the law limits it for policy reasons. Insanity (the M’Naghten Rules) and automatism both involve a lack of control or understanding; the key distinction is whether the cause is internal (insanity) or external (non-insane automatism), which has very different consequences.',
  spec: ['Intoxication by alcohol and by drugs: voluntary and involuntary', 'Specific and basic intent offences (Majewski); Dutch courage; intoxicated mistakes', 'Insanity: the M’Naghten Rules — defect of reason, disease of the mind, nature and quality, wrong', 'Automatism: insane and non-insane; self-induced automatism', 'Evaluation and reform'],
  learn: [
    { h: 'Voluntary intoxication', html: `
<p>Intoxication is not a defence in itself; the question is whether the defendant formed the <b>mens rea</b>. Voluntary intoxication (knowingly taking alcohol or dangerous drugs) is treated differently depending on the offence:</p>
<div class="tbl"><table><tr><th>Specific intent offences</th><th>Basic intent offences</th></tr>
<tr><td>Mens rea is intention only: murder, s18 GBH with intent, theft, robbery, burglary with intent, attempts</td><td>Mens rea includes recklessness: manslaughter, s20, s47, assault, battery, criminal damage (reckless)</td></tr>
<tr><td>Intoxication can be a defence if the defendant was so intoxicated they <b>did not form</b> the intent (<i>DPP v Beard</i>, 1920). Often a lesser basic intent offence is available (murder → manslaughter — [[c:lipman]])</td><td><b>No defence</b>: becoming voluntarily intoxicated is itself reckless — [[c:majewski]]</td></tr></table></div>
<ul><li>“A drunken intent is still an intent” — if the intent was formed, intoxication does not matter.</li>
<li><b>Dutch courage</b>: intent formed while sober, then drinking to carry it out — no defence ([[c:gallagher]]).</li>
<li><b>Intoxicated mistakes</b>: a drunken mistake that the defendant needed to use force in self-defence cannot be relied on ([[c:ogrady]]; s76(5) Criminal Justice and Immigration Act 2008). But for criminal damage, s5(2) Criminal Damage Act 1971 allows an honest (even drunken) belief the owner would consent (<i>Jaggard v Dickinson</i>, 1980).</li></ul>` },
    { h: 'Involuntary intoxication', html: `
<p>Involuntary intoxication includes spiked drinks, drugs taken on prescription as directed, and non-dangerous (sedative) drugs taken without knowing they could cause unpredictable behaviour.</p>
<ul><li>A defence to <b>all</b> offences if the defendant did <b>not</b> form the mens rea.</li>
<li>No defence if they still formed the mens rea — [[c:kingston]].</li>
<li>Taking a sedative drug like Valium that unexpectedly makes you aggressive is treated as involuntary — [[c:hardie]].</li>
<li>Misjudging the strength of an alcoholic drink is voluntary — [[c:rallen88]].</li></ul>` },
    { h: 'Insanity: the M’Naghten Rules (1843)', html: `
<p>Everyone is presumed sane. To establish insanity, the defendant must prove, on the <b>balance of probabilities</b>, that at the time of the act they were labouring under:</p>
<ol><li>a <b>defect of reason</b> — a deprivation of the power to reason, not just failing to use it (<i>R v Clarke</i>, 1972, absent-minded shoplifting);</li>
<li>caused by a <b>disease of the mind</b> — a <b>legal</b>, not medical, concept: any <b>internal</b> condition affecting the mind’s functioning — arteriosclerosis ([[c:kemp]]), epilepsy ([[c:sullivan]]), diabetes causing hyperglycaemia ([[c:hennessy]]), sleepwalking ([[c:burgess]]); a mental disorder “manifested in violence and prone to recur” ([[c:bratty]]);</li>
<li>so that they did <b>not know the nature and quality of the act</b> (what they were physically doing), <b>or</b> if they did, did not know it was <b>wrong</b> — meaning <b>legally</b> wrong ([[c:windle]]; confirmed in <i>R v Johnson</i>, 2007).</li></ol>
<p><b>Verdict</b>: the special verdict of <b>not guilty by reason of insanity</b>. Under the Criminal Procedure (Insanity and Unfitness to Plead) Act 1991 the judge can make a hospital order (with or without restrictions), a supervision order or an absolute discharge.</p>` },
    { h: 'Automatism', html: `
<p>Automatism is “an act done by the muscles without any control by the mind, such as a spasm, a reflex action or a convulsion” ([[c:bratty]]). There must be a <b>total destruction of voluntary control</b> — reduced awareness is not enough ([[c:agref2of1992]]).</p>
<div class="tbl"><table><tr><th>Non-insane automatism</th><th>Insane automatism</th></tr>
<tr><td>Caused by an <b>external</b> factor: a blow to the head, a swarm of bees ([[c:hillbaxter]]), a reflex, insulin taken without eating ([[c:quick]]), PTSD from an external event ([[c:rvt]])</td><td>Caused by an <b>internal</b> factor (a disease of the mind): epilepsy, diabetes itself (hyperglycaemia), sleepwalking, brain tumours</td></tr>
<tr><td>Complete <b>acquittal</b>. Evidential burden on the defendant; prosecution must disprove</td><td>Treated as <b>insanity</b>: special verdict; burden on the defendant</td></tr></table></div>
<p><b>Self-induced automatism</b> (e.g. a diabetic not eating after insulin): no defence to <b>specific</b> intent offences if caused by drink or drugs; for <b>basic</b> intent offences, a defence unless the defendant was <b>reckless</b> — knew the risk of becoming aggressive or unpredictable ([[c:rbailey]]).</p>` },
    { h: 'Evaluation', html: `
<ul><li><b>Insanity</b>: based on 1843 rules, before modern psychiatry. The internal/external distinction produces absurd results — diabetics are “insane” if they forget insulin (Hennessy) but not if they take it and forget to eat (Quick); epileptics and sleepwalkers are labelled insane, a stigma that may deter people from raising the defence. It does not cover people who know their act is legally wrong but cannot control it (irresistible impulse). The reverse burden may breach Art 6. The Law Commission (2013 discussion paper) proposed a new defence of “not criminally responsible by reason of a recognised medical condition”, not implemented.</li>
<li><b>Intoxication</b>: Majewski is a policy decision to protect the public — about half of violent crime involves alcohol — but it conflicts with the principle that mens rea should be proved (the defendant is convicted of an offence requiring recklessness when they foresaw nothing). The specific/basic intent distinction is unclear. The Law Commission (2009) recommended codifying the rules.</li></ul>` }
  ],
  debate: [{ q: 'Should the M’Naghten Rules be replaced?', for: ['Out of date — made in 1843, before modern psychiatry.', 'Labels diabetics, epileptics and sleepwalkers “insane” (Sullivan, Hennessy, Burgess).', 'Arbitrary internal/external distinction (Hennessy v Quick).', 'Excludes people who cannot control their actions.', 'Law Commission (2013) proposed a better defence.'], ag: ['Flexible disposals since 1991 (not automatic hospital detention).', 'Protects the public from dangerous conditions likely to recur.', 'Diminished responsibility covers many murder cases.', 'Rarely used — reform not a priority.'] }],
  cases: ['majewski', 'lipman', 'gallagher', 'ogrady', 'kingston', 'hardie', 'rallen88', 'kemp', 'sullivan', 'hennessy', 'burgess', 'bratty', 'windle', 'quick', 'rvt', 'agref2of1992', 'hillbaxter', 'rbailey'],
  worked: [{ q: '<b>Scenario.</b> Uma, a diabetic, takes her insulin but skips lunch. At work she becomes confused and hits a colleague, causing ABH. Later she drinks heavily at a party and stabs a man she thinks is attacking her; he dies. Advise Uma.', s: ['<b class="st">ABH — automatism?</b>Hypoglycaemia caused by insulin (external factor) is non-insane automatism (Quick), if there was a total loss of control (AG’s Ref No 2 of 1992).', '<b class="st">Self-induced</b>She caused it by not eating. s47 is basic intent: the defence succeeds unless she was reckless — did she know that missing meals could make her aggressive or unpredictable (Bailey)? If not, acquittal.', '<b class="st">Stabbing — intoxication</b>Murder is a specific intent offence: if she was so drunk she did not form intent to kill or cause GBH, not murder (Beard; Lipman) — but voluntary intoxication is no defence to manslaughter (Majewski).', '<b class="st">Self-defence?</b>A drunken mistaken belief that she was being attacked cannot be relied on (O’Grady; s76(5) CJIA 2008).', '<b class="st">Conclude</b>Possible acquittal for the ABH; for the death, murder if intent formed, otherwise unlawful act manslaughter.'], a: 'ABH: non-insane automatism (unless reckless). Death: murder or manslaughter; no self-defence.' }],
  pitfalls: ['Saying intoxication is a defence to basic intent crimes.', 'Mixing up hypoglycaemia (external — Quick) and hyperglycaemia (internal — Hennessy).', 'Saying “wrong” in M’Naghten means morally wrong (Windle: legally wrong).', 'Forgetting the different burdens: insanity on D; automatism evidential only.', 'Treating reduced awareness as automatism.'],
  cards: [
    ['DPP v Majewski (1977)?', 'Voluntary intoxication no defence to basic intent offences.'],
    ['Specific intent offences — examples?', 'Murder, s18, theft, robbery, burglary with intent.'],
    ['Basic intent offences — examples?', 'Manslaughter, s20, s47, assault, battery, criminal damage.'],
    ['AG for NI v Gallagher (1963)?', 'Dutch courage — no defence.'],
    ['R v Kingston (1994)?', 'Involuntary intoxication no defence if mens rea formed.'],
    ['R v Hardie (1985)?', 'Unexpected effect of a sedative drug — treated as involuntary.'],
    ['M’Naghten Rules — elements?', 'Defect of reason; disease of the mind; not know nature and quality, or not know it was wrong.'],
    ['R v Windle (1952)?', '“Wrong” means legally wrong.'],
    ['Internal v external cause?', 'Internal = insanity (Sullivan, Hennessy, Burgess). External = non-insane automatism (Quick).'],
    ['R v Quick (1973)?', 'Hypoglycaemia from insulin — non-insane automatism.'],
    ['R v Hennessy (1989)?', 'Hyperglycaemia from not taking insulin — insanity.'],
    ['Special verdict?', 'Not guilty by reason of insanity; disposals under the 1991 Act.'],
    ['Definition of automatism (Bratty)?', 'An act done by the muscles without any control by the mind.'],
    ['R v Bailey (1983)?', 'Self-induced automatism: defence to basic intent unless reckless.']
  ],
  quiz: [
    { q: 'Voluntary intoxication is no defence to basic intent offences because of…', o: ['DPP v Majewski', 'R v Kingston', 'R v Hardie', 'R v Quick'], x: 'Recklessness in getting drunk.' },
    { q: 'Which is a specific intent offence?', o: ['Murder', 'Manslaughter', 's47 ABH', 'Battery'], x: 'Intention only.' },
    { q: 'In R v Kingston the defendant was guilty despite being secretly drugged because…', o: ['he still formed the intent', 'drugging is not involuntary', 'it was Dutch courage', 'he was insane'], x: 'A drunken intent is still an intent.' },
    { q: 'Under the M’Naghten Rules, “wrong” means…', o: ['legally wrong', 'morally wrong', 'socially unacceptable', 'harmful'], x: 'Windle.' },
    { q: 'Epilepsy was held to be a disease of the mind in…', o: ['R v Sullivan', 'R v Quick', 'R v Kemp', 'R v Bailey'], x: 'Insanity, not automatism.' },
    { q: 'Hypoglycaemia caused by taking insulin without eating is…', o: ['non-insane automatism', 'insanity', 'voluntary intoxication', 'diminished responsibility'], x: 'External factor — Quick.' },
    { q: 'Sleepwalking was treated as insanity in…', o: ['R v Burgess', 'R v T', 'Hill v Baxter', 'R v Hardie'], x: 'Internal cause.' },
    { q: 'The burden of proving insanity is on…', o: ['the defendant, on the balance of probabilities', 'the prosecution', 'the judge', 'medical experts'], x: 'Reverse burden.' },
    { q: 'In AG’s Reference (No 2 of 1992), “driving without awareness” was not automatism because…', o: ['there was not a total destruction of voluntary control', 'he was drunk', 'he was insane', 'it was an external cause'], x: 'Reduced awareness insufficient.' }
  ],
  exam: [
    { q: 'Explain the law on voluntary and involuntary intoxication. [10]', m: 10, ms: ['intoxication and mens rea', 'specific v basic intent — Majewski', 'specific intent — Beard; Lipman', 'Dutch courage — Gallagher', 'involuntary — defence if no MR; Kingston', 'sedatives — Hardie; Allen', 'intoxicated mistake — O’Grady; s76(5)', 'Jaggard v Dickinson'] },
    { q: 'Analyse and evaluate the defences of insanity and automatism. [25]', m: 25, ms: ['M’Naghten elements', 'disease of the mind — legal concept; Kemp, Sullivan, Hennessy, Burgess', 'internal/external distinction — criticisms', 'wrong = legally wrong — Windle', 'special verdict and disposals', 'automatism — Bratty; AG’s Ref 2 of 1992', 'self-induced — Bailey', 'stigma; Art 6 reverse burden', 'Law Commission 2013 proposals', 'conclusion'] }
  ],
  tools: ['capacitytree']
});

/* ---------- 2.3.6 Necessity defences ---------- */
TOPICS.push({
  id: '2.3.6', unit: 'CR', ref: '2.3.6', title: 'Self-defence, duress, necessity, mistake and consent',
  short: 'Mistake; self-defence and s76 CJIA 2008; duress by threats; duress of circumstances; necessity; consent',
  summary: 'These defences apply where the defendant acted under pressure or with the victim’s agreement. Self-defence (reasonable force) and consent can make the act lawful. Duress by threats and duress of circumstances excuse a defendant who acted under threats of death or serious injury, but are not available for murder. Necessity is recognised only in exceptional cases.',
  spec: ['Mistake: of fact and of law; intoxicated mistakes', 'Self-defence and prevention of crime: s3 Criminal Law Act 1967 and s76 Criminal Justice and Immigration Act 2008; householder cases', 'Duress by threats: the Graham test, characteristics, voluntary association, limits', 'Duress of circumstances', 'Necessity', 'Consent'],
  learn: [
    { h: 'Mistake', html: `
<ul><li>A mistake of <b>fact</b> that means the defendant lacked mens rea is a defence, even if unreasonable, as long as it is honest ([[c:morgan]]; [[c:bvdpp]]) — unless statute requires reasonableness (e.g. consent in rape, Sexual Offences Act 2003).</li>
<li>A mistaken belief in circumstances that would justify self-defence: judged on the facts as the defendant honestly believed them — [[c:gladstonewilliams]].</li>
<li>A mistake of <b>law</b> is no defence (“ignorance of the law is no excuse”).</li>
<li>A mistake caused by <b>voluntary intoxication</b> cannot be relied on for self-defence — [[c:ogrady]].</li></ul>` },
    { h: 'Self-defence and prevention of crime', html: `
<p>A <b>complete defence</b> (the force is lawful) at common law (defence of self or others, or property) and under <b>s3 Criminal Law Act 1967</b> (reasonable force in preventing crime or making an arrest). <b>s76 Criminal Justice and Immigration Act 2008</b> clarifies the test:</p>
<ol><li><b>Was force necessary?</b> Judged on the circumstances as the defendant <b>honestly believed</b> them to be (s76(3)–(4)) — [[c:gladstonewilliams]]; [[c:beckford]]. A pre-emptive strike can be justified (Beckford). Not if the belief came from voluntary intoxication (s76(5)).</li>
<li><b>Was the force reasonable</b> in those circumstances? An <b>objective</b> test, but the defendant “may not be able to weigh to a nicety the exact measure” of force (s76(7)(a); [[c:palmer]]); doing what they honestly and instinctively thought necessary is strong evidence of reasonableness (s76(7)(b)). Force that is <b>disproportionate</b> is not reasonable (s76(6)).</li></ol>
<ul><li><b>No duty to retreat</b>, but the possibility of retreat is a factor (s76(6A); [[c:bird]]).</li>
<li><b>Householder cases</b> (s76(5A), added 2013): where a householder uses force against an intruder in their home, force is only unreasonable if <b>grossly disproportionate</b>; disproportionate force may still be reasonable — [[c:ray]].</li>
<li>Psychiatric conditions are not relevant to reasonableness ([[c:tonymartin]]).</li>
<li><b>Excessive force</b>: the defence fails completely — [[c:clegg]]. In murder cases, the fear trigger for loss of control may now reduce murder to manslaughter.</li></ul>` },
    { h: 'Duress by threats', html: `
<p>Duress <b>excuses</b> a defendant who committed a crime because of threats. Test from [[c:graham]], approved in [[c:hasan]]:</p>
<ol><li>Was the defendant <b>compelled</b> to act because they <b>reasonably believed</b> that they (or someone close, or for whom they reasonably felt responsible) faced a threat of <b>death or serious injury</b>?</li>
<li>Would a <b>sober person of reasonable firmness</b>, sharing the defendant’s relevant characteristics, have responded in the same way?</li></ol>
<ul><li><b>Threat</b>: death or serious physical (or psychological) injury; other threats (e.g. to reveal secrets) are not enough alone. Must be believed to be carried out <b>immediately or almost immediately</b>, with no safe avenue of escape (Hasan — criticising [[c:hudsontaylor]]).</li>
<li><b>Nominated crime</b>: the threat must be to force the defendant to commit the particular offence.</li>
<li><b>Characteristics</b> ([[c:bowen]]): age, sex, pregnancy, serious physical disability, recognised mental illness — not low IQ alone, or vulnerability.</li>
<li><b>Voluntary association</b>: no defence if the defendant voluntarily associated with criminals and foresaw, <b>or ought reasonably to have foreseen</b>, the risk of being compelled by threats of violence ([[c:hasan]]; [[c:sharp]]).</li>
<li><b>Not available for murder</b> ([[c:howe]]), <b>attempted murder</b> ([[c:gotts]]) or some treason.</li>
<li>Burden: evidential on the defendant; prosecution must disprove.</li></ul>` },
    { h: 'Duress of circumstances and necessity', html: `
<p><b>Duress of circumstances</b>: the threat comes from the situation rather than a person demanding a crime — e.g. driving dangerously to escape attackers ([[c:willer]]; [[c:rconway]]), driving while disqualified to prevent a suicide ([[c:rmartin89]]). The same <b>Graham</b> test applies. It is available for all crimes except murder, attempted murder and some treason ([[c:pommell]]), and only while the threat lasts ([[c:dppbell]]). No defence without an imminent threat to identifiable people ([[c:shayler]]).</p>
<p><b>Necessity</b> (choosing the lesser of two evils without a threat of death or serious injury) is generally <b>not</b> a defence: [[c:dudley]] (no defence to murder); homelessness is no defence to trespass (<i>Southwark LBC v Williams</i>, 1971); cannabis for pain relief is no defence (<i>R v Quayle</i>, 2005). An exceptional case: [[c:rea]] (separating conjoined twins) — the doctors were not guilty of murdering Mary. Medical treatment of patients who cannot consent is justified by necessity in the patient’s best interests.</p>` },
    { h: 'Consent', html: `
<p>Consent is a defence to <b>assault and battery</b> (and consent is part of the definition of many offences). For <b>ABH or more serious harm</b>, consent is generally <b>no defence</b> ([[c:agref6of1980]]; [[c:brown]]) unless the activity falls within a recognised exception in the public interest:</p>
<ul><li><b>Properly conducted sports</b> — injuries within the rules or reasonably expected; foul play grave enough to be criminal is not covered ([[c:barnes]]).</li>
<li><b>Surgery and medical treatment</b>; <b>tattooing, piercing and branding</b> ([[c:wilson]]).</li>
<li><b>Rough horseplay</b> — even an honest mistaken belief in consent ([[c:aitken]]).</li>
<li><b>Sexual activity</b>: consent to the <b>risk</b> of infection may be a defence if informed ([[c:dica]]). But consent to serious harm for sexual gratification is no defence — [[c:brown]]; [[c:emmett]]; confirmed in s71 Domestic Abuse Act 2021.</li></ul>
<p>Consent must be <b>real</b>: given by someone with capacity (children and people lacking capacity may not be able to consent — <i>Burrell v Harmer</i>, 1967) and informed as to the nature and quality of the act ([[c:tabassum]]).</p>` }
  ],
  debate: [{ q: 'Should duress be available as a defence to murder?', for: ['The law should not demand heroism — a reasonable person might kill to save their child.', 'Duress is available for other serious crimes, even s18 GBH.', 'Excuse, not justification — the defendant is less blameworthy.', 'Mandatory life sentence makes the lack of a defence especially harsh (Howe).'], ag: ['Sanctity of life: one should sacrifice oneself rather than kill an innocent (Lord Hailsham in Howe).', 'Terrorists and gangs could use it as a “charter for terrorists”.', 'Prosecutors and parole boards can take duress into account.', 'Law Commission (2006) proposed a full defence with a reverse burden — not enacted.'] }],
  cases: ['morgan', 'bvdpp', 'gladstonewilliams', 'ogrady', 'beckford', 'palmer', 'bird', 'ray', 'tonymartin', 'clegg', 'graham', 'hasan', 'hudsontaylor', 'bowen', 'sharp', 'howe', 'gotts', 'willer', 'rconway', 'rmartin89', 'pommell', 'dppbell', 'shayler', 'dudley', 'rea', 'agref6of1980', 'brown', 'barnes', 'wilson', 'aitken', 'dica', 'emmett', 'tabassum'],
  worked: [{ q: '<b>Scenario.</b> Vic is told by a drug dealer he owes money to, “Deliver this package or I’ll break your legs tonight.” Vic delivers it (it contains heroin). On the way home, he sees a man pull a knife on a woman; Vic punches the man, breaking his jaw. The “knife” was a phone. Advise Vic.', s: ['<b class="st">Duress — test</b>Graham: did Vic reasonably believe he faced serious injury (broken legs) and was he compelled to act? Would a sober person of reasonable firmness sharing his characteristics have done the same?', '<b class="st">Immediacy</b>“Tonight” — is this almost immediate, with no safe avenue of escape such as going to the police? Hasan requires immediacy; Hudson and Taylor is now doubted.', '<b class="st">Voluntary association</b>Vic chose to deal with a drug dealer and owed him money. He ought reasonably to have foreseen the risk of threats of violence to make him commit crimes — duress is probably excluded (Hasan; Sharp). Guilty of supplying drugs.', '<b class="st">Self-defence / defence of another</b>Vic honestly believed the woman was being attacked with a knife. Judged on the facts as he believed them (Gladstone Williams; s76(3)–(4)), force was necessary. Was a single punch reasonable against a knife attack? Likely yes — he could not weigh it to a nicety (Palmer; s76(7)). The mistake was not caused by intoxication.', '<b class="st">Conclude</b>No defence for the drugs; self-defence (defence of another) likely succeeds for the punch.'], a: 'Duress excluded (voluntary association); self-defence likely succeeds.' }],
  pitfalls: ['Saying duress is available for murder or attempted murder.', 'Forgetting the objective “ought reasonably to have foreseen” limb of voluntary association (Hasan).', 'Treating excessive force in self-defence as a partial defence to murder (Clegg).', 'Allowing a drunken mistake in self-defence (O’Grady; s76(5)).', 'Saying consent is a defence to any injury.'],
  cards: [
    ['R v Williams (Gladstone) (1984)?', 'Self-defence judged on the facts as D honestly believed them.'],
    ['s76 CJIA 2008 — two questions?', 'Was force necessary (on D’s honest belief)? Was it reasonable (objective)?'],
    ['Householder cases s76(5A)?', 'Force unreasonable only if grossly disproportionate (R v Ray).'],
    ['R v Clegg (1995)?', 'Excessive force — self-defence fails completely; no partial defence.'],
    ['Graham test for duress?', '(1) Reasonable belief in threat of death/serious injury, compelled to act; (2) sober person of reasonable firmness with D’s characteristics would have done the same.'],
    ['R v Hasan (2005)?', 'No duress after voluntary association with criminals if D foresaw or ought to have foreseen threats; threat must be immediate or almost immediate.'],
    ['R v Bowen (1996)?', 'Relevant characteristics: age, sex, pregnancy, physical disability, mental illness — not low IQ.'],
    ['Crimes where duress is unavailable?', 'Murder (Howe), attempted murder (Gotts), some treason.'],
    ['Duress of circumstances — cases?', 'Willer, Conway, Martin, Pommell, DPP v Bell.'],
    ['Necessity — exceptional case?', 'Re A (conjoined twins) (2000).'],
    ['R v Dudley and Stephens (1884)?', 'Necessity no defence to murder.'],
    ['Consent — general rule for ABH?', 'No defence unless a recognised exception (AG’s Ref No 6 of 1980; Brown).'],
    ['Exceptions to Brown?', 'Sport, surgery, tattooing/branding (Wilson), horseplay (Aitken), informed risk of infection (Dica).'],
    ['R v Barnes (2004)?', 'Sports injuries criminal only if sufficiently grave.']
  ],
  quiz: [
    { q: 'Under s76 CJIA 2008, the need for force is judged on…', o: ['the circumstances as D honestly believed them to be', 'the actual circumstances only', 'what a reasonable person would believe', 'the victim’s view'], x: 'Gladstone Williams.' },
    { q: 'In householder cases, force is unreasonable only if it is…', o: ['grossly disproportionate', 'disproportionate', 'deliberate', 'lethal'], x: 's76(5A); R v Ray.' },
    { q: 'Which case established the two-stage test for duress?', o: ['R v Graham', 'R v Howe', 'R v Hasan', 'R v Bowen'], x: '1982.' },
    { q: 'Duress is NOT available for…', o: ['murder and attempted murder', 'robbery', 'drug offences', 'driving offences'], x: 'Howe; Gotts.' },
    { q: 'In R v Hasan duress failed because…', o: ['he voluntarily associated with criminals and should have foreseen threats', 'the threat was not serious', 'he was not threatened', 'he was intoxicated'], x: 'Objective foresight.' },
    { q: 'Driving on a pavement to escape a violent gang is an example of…', o: ['duress of circumstances', 'necessity for murder', 'consent', 'insanity'], x: 'R v Willer.' },
    { q: 'In R v Brown, consent was no defence because…', o: ['it is not in the public interest to allow consent to ABH for sadomasochism', 'the men were not adults', 'there was no consent', 'it happened in public'], x: 'Public interest.' },
    { q: 'Consent was a defence in R v Wilson because the branding was…', o: ['comparable to tattooing, between spouses in private', 'minor', 'accidental', 'medical'], x: 'Distinguished Brown.' },
    { q: 'A drunken mistaken belief that one is being attacked…', o: ['cannot be relied on for self-defence', 'is always a defence', 'is a partial defence', 'reduces murder to manslaughter'], x: 'O’Grady; s76(5).' },
    { q: 'Which low-IQ characteristic was held NOT relevant to the reasonable person in duress?', o: ['Low IQ alone (R v Bowen)', 'Pregnancy', 'Serious physical disability', 'Recognised mental illness'], x: 'Unless it is a mental impairment.' }
  ],
  exam: [
    { q: 'Explain the defence of self-defence. [10]', m: 10, ms: ['common law and s3 CLA 1967', 's76 CJIA 2008', 'necessity of force — honest belief (Gladstone Williams; Beckford)', 'intoxicated mistake excluded — O’Grady', 'reasonableness — Palmer; s76(7)', 'disproportionate — s76(6); householder s76(5A); Ray', 'retreat — Bird; s76(6A)', 'excessive force — Clegg; Martin'] },
    { q: 'Analyse and evaluate the defence of duress. [25]', m: 25, ms: ['nature — excuse', 'Graham test; Hasan', 'threat — death/serious injury; immediacy (Hasan v Hudson and Taylor)', 'characteristics — Bowen', 'voluntary association — Sharp, Hasan (objective)', 'exclusion for murder — Howe; attempted murder — Gotts; arguments', 'duress of circumstances — Willer, Pommell', 'burden', 'Law Commission proposals', 'conclusion'] }
  ],
  tools: ['duresstree', 'consentsort']
});

/* ---------- 2.3.7 Attempts ---------- */
TOPICS.push({
  id: '2.3.7', unit: 'CR', ref: '2.3.7', title: 'Attempts',
  short: 'Criminal Attempts Act 1981: more than merely preparatory, intention, impossibility',
  summary: 'An attempt is a preliminary (inchoate) offence: the defendant tries to commit an offence but does not complete it. Under the Criminal Attempts Act 1981 the defendant must do an act that is more than merely preparatory, with intent to commit the offence. It is even possible to attempt the impossible.',
  spec: ['Statutory definition: s1(1) Criminal Attempts Act 1981', 'Actus reus: “more than merely preparatory”', 'Mens rea: intention; recklessness as to circumstances', 'Attempts to do the impossible: s1(2) and s1(3)'],
  learn: [
    { h: 'The definition', html: `
<div class="box stat"><b class="lbl">s1(1) Criminal Attempts Act 1981</b><p>If, with <b>intent</b> to commit an offence to which this section applies, a person does an act which is <b>more than merely preparatory</b> to the commission of the offence, he is guilty of attempting to commit the offence.</p></div>
<ul><li>Applies to indictable offences (including either-way), not to summary-only offences (s1(4)).</li>
<li>The sentence can be the same as for the full offence (life for attempted murder).</li>
<li>Whether the act is more than merely preparatory is a question of <b>fact for the jury</b>, once the judge decides there is sufficient evidence (s4(3)).</li></ul>` },
    { h: 'Actus reus: more than merely preparatory', html: `
<p>The Act replaced older common law tests (the “last act” test and “proximity” tests). The defendant need not have done the last act, but must have gone beyond planning and preparation — “<b>embarked on the crime proper</b>” ([[c:gullefer]]).</p>
<div class="tbl"><table><tr><th>Attempt</th><th>Not attempt (merely preparatory)</th></tr>
<tr><td>[[c:rjones]] — got into the car and pointed a loaded gun</td><td>[[c:gullefer]] — jumped onto the track to stop a race</td></tr>
<tr><td>[[c:tosti]] — examining the padlock of the barn</td><td>[[c:geddes]] — in school toilets with knife and tape, no contact with a pupil</td></tr>
<tr><td><i>R v Boyle and Boyle</i> (1987) — damaging a door to enter</td><td>[[c:rcampbell]] — outside the post office with imitation gun</td></tr></table></div>
<p>The line is hard to draw: Geddes asked whether the defendant had “actually tried to commit the offence” or was still “only getting ready, or putting himself in a position, or equipping himself”.</p>` },
    { h: 'Mens rea: intention', html: `
<p>Attempts require <b>intention</b> to commit the full offence — even if the full offence can be committed recklessly. Intention means “a decision to bring about” the offence ([[c:mohan]]), and can be oblique (Woollin).</p>
<ul><li><b>Attempted murder</b> requires an <b>intention to kill</b>; an intention to cause GBH is not enough ([[c:whybrow]]) — so attempted murder has a higher mens rea than murder.</li>
<li><b>Conditional intent</b> (to steal whatever is worth stealing) is enough if the indictment is framed properly (AG’s Refs (Nos 1 and 2 of 1979)) — contrast [[c:easom]].</li>
<li>For <b>circumstances</b>, the same mens rea as the full offence may be enough — recklessness as to endangering life for attempted aggravated arson ([[c:agref3of1992]]); recklessness as to consent in <i>R v Khan</i> ([[c:khan]]).</li></ul>` },
    { h: 'Attempting the impossible', html: `
<p><b>s1(2)</b>: a person may be guilty of attempt even though the facts are such that commission of the offence is impossible. <b>s1(3)</b>: the defendant is judged on the facts <b>as he believed them to be</b>.</p>
<p>In <i>Anderton v Ryan</i> (1985) the House of Lords held a woman who bought a video recorder believing it was stolen (when there was no evidence it was) was not guilty of attempting to handle stolen goods. A year later, in [[c:shivpuri]], the House used the Practice Statement to overrule it: Shivpuri was guilty of attempting to deal in heroin though the substance was harmless. Examples: trying to pickpocket an empty pocket; trying to kill someone already dead; buying “drugs” that are fake.</p>
<p>Impossibility of law is different: if the conduct the defendant intends is not a crime at all (e.g. believing it is illegal to bring in whisky), there is no attempt.</p>` },
    { h: 'Evaluation', html: `
<ul><li>Why punish attempts? The defendant is just as dangerous and blameworthy; it allows police to intervene before harm. Subjectivists focus on intention; objectivists on harm caused.</li>
<li>“More than merely preparatory” is vague — inconsistent outcomes (Geddes v Tosti; Campbell). Campbell and Geddes let dangerous people walk free, though other offences (possessing an imitation firearm, going equipped) may apply.</li>
<li>Attempted murder requires intent to kill, while murder only requires intent to cause GBH — anomalous.</li>
<li>Punishing impossible attempts punishes thoughts rather than acts — but the defendant’s intentions are genuinely dangerous.</li>
<li>The Law Commission (2007, 2009) proposed replacing attempts with two offences: “attempt” (the last acts) and “criminal preparation” — not implemented.</li></ul>` }
  ],
  debate: [{ q: 'Is the “more than merely preparatory” test satisfactory?', for: ['Flexible — juries decide on the facts.', 'Better than the old “last act” test, which came too late for public protection.', 'Gullefer’s “embarked on the crime proper” gives some guidance.'], ag: ['Inconsistent decisions — Geddes and Campbell acquitted despite clear intentions.', 'Police must wait dangerously long to intervene.', 'Law Commission proposed a new offence of “criminal preparation”.', 'Uncertainty offends the rule of law.'] }],
  cases: ['gullefer', 'rjones', 'geddes', 'tosti', 'rcampbell', 'mohan', 'whybrow', 'easom', 'agref3of1992', 'khan', 'shivpuri', 'andertonryan'],
  worked: [{ q: '<b>Scenario.</b> Wes plans to rob a jeweller’s. He buys a balaclava, drives to the shop, parks outside and puts the balaclava on. As he gets out of the car, carrying a hammer, he is arrested. Advise whether he is guilty of attempted robbery.', s: ['<b class="st">Law</b>s1(1) Criminal Attempts Act 1981: an act more than merely preparatory, with intent to commit robbery.', '<b class="st">Mens rea</b>He clearly intended to steal using force or threats (Mohan).', '<b class="st">Actus reus</b>Buying the balaclava and driving there are preparatory. Putting it on and getting out with a hammer outside the shop is closer — but he has not entered the shop or confronted anyone, like Campbell (outside the post office — not attempt). Has he “embarked on the crime proper” (Gullefer) or actually tried to commit it (Geddes)? Probably not yet.', '<b class="st">Conclude</b>A jury would probably find his acts merely preparatory — no attempted robbery. He may be guilty of other offences (e.g. going equipped for theft — s25 Theft Act 1968; possessing an offensive weapon).'], a: 'Probably merely preparatory (Campbell) — other offences apply.' }],
  pitfalls: ['Saying the defendant must have done the last act.', 'Allowing recklessness or intent to cause GBH for attempted murder (Whybrow).', 'Saying you cannot attempt the impossible (s1(2); Shivpuri).', 'Forgetting it is a question of fact for the jury.'],
  cards: [
    ['s1(1) Criminal Attempts Act 1981?', 'With intent to commit an offence, does an act more than merely preparatory to its commission.'],
    ['R v Gullefer (1990)?', 'Must have “embarked on the crime proper” — not attempt.'],
    ['R v Jones (1990)?', 'Pointing a gun in the car — attempted murder.'],
    ['R v Geddes (1996)?', 'In school toilets with equipment — merely preparatory.'],
    ['R v Tosti (1997)?', 'Examining a padlock — attempted burglary.'],
    ['R v Campbell (1991)?', 'Outside the post office — not attempted robbery.'],
    ['Mens rea for attempted murder?', 'Intention to kill — R v Whybrow.'],
    ['R v Mohan (1976)?', 'Intention = a decision to bring about the offence.'],
    ['s1(2) and s1(3)?', 'Can attempt the impossible; judged on facts as D believed them.'],
    ['R v Shivpuri (1986)?', 'Guilty of attempting to deal in drugs despite harmless substance; overruled Anderton v Ryan.'],
    ['AG’s Ref (No 3 of 1992)?', 'Recklessness as to circumstances enough for attempted aggravated arson.']
  ],
  quiz: [
    { q: 'The actus reus of attempt is an act that is…', o: ['more than merely preparatory', 'the last act before the crime', 'any act showing intent', 'the full offence'], x: 's1(1).' },
    { q: 'In R v Geddes the defendant was not guilty because…', o: ['he had not moved beyond preparation', 'he had no intent', 'the offence was impossible', 'he was insane'], x: 'School toilets.' },
    { q: 'Which case shows that examining a lock can be attempted burglary?', o: ['R v Tosti', 'R v Campbell', 'R v Gullefer', 'R v Geddes'], x: 'Oxyacetylene equipment.' },
    { q: 'Attempted murder requires…', o: ['intention to kill', 'intention to cause GBH', 'recklessness as to death', 'gross negligence'], x: 'R v Whybrow.' },
    { q: 'Under s1(2) Criminal Attempts Act 1981, a person can be guilty of attempt even if…', o: ['the offence was impossible to commit', 'they had no intent', 'they did nothing', 'the offence is summary only'], x: 'Shivpuri.' },
    { q: 'Whether an act is more than merely preparatory is decided by…', o: ['the jury', 'the judge alone', 'the CPS', 'Parliament'], x: 's4(3).' },
    { q: 'In R v Campbell, a man outside a post office with an imitation gun was…', o: ['not guilty of attempted robbery', 'guilty of attempted robbery', 'guilty of robbery', 'guilty of burglary'], x: 'Had not entered.' }
  ],
  exam: [{ q: 'Analyse and evaluate the law on attempts. [25]', m: 25, ms: ['rationale for punishing attempts', 's1(1) definition', 'more than merely preparatory — Gullefer, Jones', 'inconsistency — Geddes, Campbell v Tosti', 'mens rea — intention; Mohan; Whybrow anomaly', 'circumstances — AG’s Ref 3 of 1992; Khan', 'impossibility — s1(2)–(3); Anderton v Ryan and Shivpuri', 'subjectivist v objectivist views', 'Law Commission proposals', 'conclusion'] }],
  tools: ['attemptsort']
});

/* ---------- criminal tools (2.3.4 – 2.3.7) ---------- */
TOOLS.thefttree = { type: 'tree', title: 'Is it theft?', intro: 'Work through s1–s6 Theft Act 1968.', nodes: {
  start: { q: 's4 — Is it property?', o: [['Yes — money, goods, a bank balance, shares', 's5'], ['Confidential information or electricity', 'nop'], ['Wild flowers or mushrooms picked for own use', 'nop2']] },
  nop: { end: true, tone: 'bad', v: 'Not property — not theft', x: 'Electricity: separate offence (s13).', cases: ['oxfordmoss'] },
  nop2: { end: true, tone: 'bad', v: 'Not theft (s4(3))', x: 'Unless for reward, sale or commercial purpose.' },
  s5: { q: 's5 — Does it belong to another (possession, control or proprietary interest; s5(3) obligation; s5(4) mistake)?', o: [['Yes', 's3'], ['No — it is truly D’s own, or abandoned', 'noown']] },
  noown: { end: true, tone: 'bad', v: 'Not theft', x: 'But note a person can steal their own property from someone in possession (Turner).', cases: ['turner'] },
  s3: { q: 's3 — Did D assume any right of an owner (even with consent, or by receiving a gift)?', o: [['Yes', 'dis'], ['No', 'noapp']] },
  noapp: { end: true, tone: 'bad', v: 'No appropriation', x: '', cases: ['rmorris'] },
  dis: { q: 's2(1) — Did D believe they had a legal right, the owner would consent, or the owner could not be found?', o: [['Yes, honestly', 'notdis'], ['No', 'ivey']] },
  notdis: { end: true, tone: 'bad', v: 'Not dishonest — not theft', x: '', cases: ['rrobinson'] },
  ivey: { q: 'Ivey — in light of D’s actual beliefs, was the conduct dishonest by the standards of ordinary decent people?', o: [['Yes', 'itpd'], ['No', 'notdis2']] },
  notdis2: { end: true, tone: 'bad', v: 'Not dishonest — not theft', x: '', cases: ['ivey'] },
  itpd: { q: 's6 — Did D intend to permanently deprive (or treat the thing as their own to dispose of; borrow it until its value is gone)?', o: [['Yes', 'theft'], ['No — intended to return it unchanged', 'noitpd'], ['Only if there was something worth taking', 'cond']] },
  noitpd: { end: true, tone: 'bad', v: 'Not theft', x: 'Consider taking without consent (s12) for vehicles.', cases: ['rlloyd'] },
  cond: { end: true, tone: 'mid', v: 'Not theft of specific items — consider attempted theft', x: '', cases: ['easom'] },
  theft: { end: true, tone: 'good', v: 'Theft (s1)', x: 'Now check for robbery (force) or burglary (trespassory entry).', cases: ['velumyl'] }
} };
TOOLS.burglarysort = { type: 'sort', title: 'Theft, robbery or burglary?', intro: 'Choose the most serious offence each person has committed.', cats: ['Theft', 'Robbery', 'Burglary', 'No offence'], items: [
  ['A shopper slips a lipstick into her pocket and walks out.', 'Theft', 'No force, no trespassory entry (she entered as a customer, not intending to steal).'],
  ['A man pushes a woman over and takes her bag.', 'Robbery', 'Force used in order to steal.'],
  ['A man climbs through an open window into a house to look for jewellery.', 'Burglary', 's9(1)(a) — intent to steal on entry.'],
  ['A youth snatches a cigarette from someone’s fingers without touching her.', 'Theft', 'P v DPP.'],
  ['A creditor threatens his debtor and takes £20 he honestly believes he is owed.', 'No offence', 'No dishonesty, so no theft or robbery (Robinson) — though there may be an assault.'],
  ['A customer goes behind the counter into the staff area and takes cash from the till.', 'Burglary', 'Part of a building — Walkington.'],
  ['A thief takes a watch, then shoves a guard who tries to stop her leaving.', 'Robbery', 'Continuing appropriation — Hale; Lockley.']
] };
TOOLS.capacitytree = { type: 'tree', title: 'Intoxication, insanity or automatism?', intro: 'Find the right capacity defence.', nodes: {
  start: { q: 'What is the explanation for D’s state of mind?', o: [['Alcohol or drugs', 'intox'], ['A medical condition or loss of consciousness', 'med']] },
  intox: { q: 'Was the intoxication voluntary?', o: [['Yes — knowingly drank alcohol or took illegal drugs', 'vol'], ['No — spiked drink, or a sedative drug with unexpected effects', 'invol']] },
  vol: { q: 'What type of offence?', o: [['Specific intent (murder, s18, theft, robbery)', 'spec'], ['Basic intent (manslaughter, s20, s47, assault)', 'basic'], ['D formed the intent sober and drank for courage', 'dutch']] },
  spec: { end: true, tone: 'mid', v: 'Defence only if D did not form the intent', x: 'Often convicted of the lesser basic intent offence instead (murder → manslaughter).', cases: ['lipman'] },
  basic: { end: true, tone: 'bad', v: 'No defence', x: 'Getting intoxicated is reckless.', cases: ['majewski'] },
  dutch: { end: true, tone: 'bad', v: 'No defence — Dutch courage', x: '', cases: ['gallagher'] },
  invol: { q: 'Did D still form the mens rea?', o: [['Yes', 'kings'], ['No', 'invok']] },
  kings: { end: true, tone: 'bad', v: 'No defence', x: 'A drunken intent is still an intent.', cases: ['kingston'] },
  invok: { end: true, tone: 'good', v: 'Defence to any offence', x: '', cases: ['hardie'] },
  med: { q: 'Was there a total loss of voluntary control?', o: [['Yes', 'cause'], ['No — reduced awareness only', 'noauto']] },
  noauto: { end: true, tone: 'bad', v: 'Not automatism', x: 'Consider insanity if D did not know what they were doing or that it was legally wrong.', cases: ['agref2of1992'] },
  cause: { q: 'Was the cause internal (a disease affecting the mind) or external?', o: [['Internal — epilepsy, diabetes itself, sleepwalking, tumour', 'ins'], ['External — blow to the head, insulin taken without food, reflex, PTSD from an event', 'ext']] },
  ins: { end: true, tone: 'mid', v: 'Insanity (M’Naghten)', x: 'Special verdict: not guilty by reason of insanity. D must prove it on the balance of probabilities.', cases: ['sullivan', 'hennessy', 'burgess'] },
  ext: { q: 'Was the automatism self-induced (e.g. D failed to eat after insulin)?', o: [['No', 'acq'], ['Yes — and D knew the risk of becoming aggressive', 'reck'], ['Yes — but D did not know the risk', 'acq2']] },
  acq: { end: true, tone: 'good', v: 'Non-insane automatism — complete acquittal', x: '', cases: ['quick', 'rvt'] },
  reck: { end: true, tone: 'bad', v: 'No defence to basic intent offences (reckless)', x: '', cases: ['rbailey'] },
  acq2: { end: true, tone: 'good', v: 'Defence available', x: '', cases: ['rbailey'] }
} };
TOOLS.duresstree = { type: 'tree', title: 'Does duress apply?', intro: 'Apply the Graham and Hasan tests.', nodes: {
  start: { q: 'What is the offence?', o: [['Murder or attempted murder', 'no1'], ['Any other offence', 'threat']] },
  no1: { end: true, tone: 'bad', v: 'Duress is not available', x: '', cases: ['howe', 'gotts'] },
  threat: { q: 'Did D reasonably believe there was a threat of death or serious injury to D, family or someone D felt responsible for?', o: [['Yes', 'imm'], ['No — e.g. a threat to reveal secrets or damage property', 'no2']] },
  no2: { end: true, tone: 'bad', v: 'Insufficient threat', x: 'Other threats only count if combined with a threat of serious violence.' },
  imm: { q: 'Was the threat believed to be carried out immediately or almost immediately, with no safe avenue of escape (e.g. going to the police)?', o: [['Yes', 'assoc'], ['No', 'no3']] },
  no3: { end: true, tone: 'bad', v: 'Defence fails — D could have escaped or sought help', x: '', cases: ['hasan'] },
  assoc: { q: 'Did D voluntarily associate with criminals, foreseeing (or when D ought reasonably to have foreseen) the risk of being compelled by threats of violence?', o: [['Yes', 'no4'], ['No', 'firm']] },
  no4: { end: true, tone: 'bad', v: 'Defence excluded — voluntary association', x: '', cases: ['hasan', 'sharp'] },
  firm: { q: 'Would a sober person of reasonable firmness, with D’s relevant characteristics (age, sex, pregnancy, disability, mental illness), have responded the same way?', o: [['Yes', 'ok'], ['No', 'no5']] },
  no5: { end: true, tone: 'bad', v: 'Defence fails', x: '', cases: ['graham', 'bowen'] },
  ok: { end: true, tone: 'good', v: 'Duress succeeds — complete acquittal', x: 'The prosecution must disprove it once raised. If the threat came from circumstances rather than a demand, it is duress of circumstances (same test).', cases: ['graham', 'willer'] }
} };
TOOLS.consentsort = { type: 'sort', title: 'Is consent a defence?', intro: 'Would consent be a defence to the injury caused?', cats: ['Consent is a defence', 'Consent is no defence'], items: [
  ['A rugby player is injured in a fair tackle.', 'Consent is a defence', 'Properly conducted sport.'],
  ['A husband brands his initials on his wife at her request.', 'Consent is a defence', 'R v Wilson.'],
  ['Two teenagers agree to settle an argument by fighting in the street; one breaks the other’s nose.', 'Consent is no defence', 'AG’s Ref (No 6 of 1980).'],
  ['Men inflict injuries on each other in consensual sadomasochistic activity.', 'Consent is no defence', 'R v Brown.'],
  ['RAF officers set fire to a colleague in drunken horseplay, believing he consented.', 'Consent is a defence', 'R v Aitken — honest belief.'],
  ['A footballer deliberately stamps on an opponent after the ball has gone.', 'Consent is no defence', 'R v Barnes — outside what players accept.'],
  ['A man pretending to be conducting medical research examines women’s breasts.', 'Consent is no defence', 'R v Tabassum — no consent to the nature of the act.']
] };
TOOLS.attemptsort = { type: 'sort', title: 'Attempt or merely preparatory?', intro: 'Would a jury be likely to find each act more than merely preparatory?', cats: ['Attempt', 'Merely preparatory'], items: [
  ['Getting into a car with a loaded gun and pointing it at the driver.', 'Attempt', 'R v Jones.'],
  ['Waiting in a school toilet with a knife and tape.', 'Merely preparatory', 'R v Geddes.'],
  ['Examining a padlock on a barn with cutting gear nearby.', 'Attempt', 'R v Tosti.'],
  ['Walking towards a post office with an imitation gun.', 'Merely preparatory', 'R v Campbell.'],
  ['Jumping onto a racetrack to stop a race to get a bet back.', 'Merely preparatory', 'R v Gullefer.'],
  ['Putting a hand into someone’s empty pocket to steal.', 'Attempt', 'Impossible attempt — s1(2).'],
  ['Buying a crowbar intending to burgle a house next week.', 'Merely preparatory', 'Planning and preparation only.']
] };
