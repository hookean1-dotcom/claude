/* ==========================================================
   UNIT 1 · CHANGING AWARENESS OF CRIME — LO1 (AC1.1 – AC1.6)
   ========================================================== */
const U1_BANDS = {
  '1.1': [['1–2', 'Description of two types of crime evident in the assignment brief.'], ['3–4', 'Analysis of two types of crime evident in the assignment brief.']],
  '1.2': [['1–2', 'Reasons for the two unreported crimes are limited in explanation.'], ['3–4', 'Clear and detailed explanation of the reasons for the two unreported crimes.']],
  '1.3': [['1–2', 'Limited explanation (may only list examples) of the consequences of unreported crime.'], ['3–4', 'Clear and detailed explanation (includes relevant examples) of the consequences of unreported crime.']],
  '1.4': [['1–3', 'Limited description of the media representation of crime.'], ['4–6', 'Detailed description of the media representation of crime including relevant examples.']],
  '1.5': [['1–3', 'Limited explanation of the impact of media representations on the public perception of crime.'], ['4–6', 'Clear and detailed explanation of the impact of a range of media representations on the public perception of crime.']],
  '1.6': [['1–3', 'Limited (may only list methods/sources of information) evaluation of two methods of collecting information about crime.'], ['4–6', 'Clear and detailed evaluation of two methods/sources of information used to collect information about crime with clear evidence of reasoning. Detailed and relevant reference to specific sources.']],
  '2.1': [['1–3', 'Limited awareness of campaigns for change. Evidence is mainly descriptive.'], ['4–7', 'Some comparison of a range of campaigns for change. There are some links to planned campaigns to support decision making.'], ['8–10', 'Clear and detailed comparison of a range of relevant campaigns for change. Explicit links to planned campaign with reference to specific and appropriate sources to support conclusions.']],
  '2.2': [['1–5', 'Limited evaluation of the effectiveness of media used in campaigns for change. Evidence is mainly descriptive and limited in range.'], ['6–10', 'Some evaluation of the effectiveness of a range of media used in relevant campaigns for change. Response is largely descriptive but includes some appropriate judgements.'], ['11–15', 'Clear and detailed evaluation of effectiveness of a range of media used in relevant campaigns for change. Clear evidence of well-reasoned judgements to support conclusions.']],
  '3.1': [['1–3', 'Plan for campaign relevant to selected assignment brief is limited in detail. Appropriate actions, sequences and time are briefly outlined.'], ['4–7', 'Plan for campaign relevant to selected assignment brief has evidence of some appropriate actions in a relevant time sequence in some detail.'], ['8–10', 'Detailed and appropriate plan for campaign, relevant to selected assignment brief, includes clearly described actions in a relevant time sequence.']],
  '3.2': [['1–5', 'Materials are basic/simple in design. Limited clarity of purpose for the materials.'], ['6–10', 'Some evidence of materials which are designed with relevant content and which stimulate some interest. Some evidence of persuasive language and clarity of purpose.'], ['11–15', 'Attractive materials are designed with relevant content which stimulates interest. Evidence of persuasive language and clarity of purpose. Some evidence of technical skills.'], ['16–20', 'Well-designed attractive materials are presented. Content is appropriate for changing behaviour. Materials are visually and verbally stimulating and technically accurate.']],
  '3.3': [['1–5', 'Limited justification of a campaign for change. Evidence is largely descriptive with few judgements.'], ['6–10', 'Some justification is well-reasoned. Response is largely descriptive but includes some appropriate judgements. Persuasive language is used.'], ['11–15', 'Clear and detailed justification which is well-reasoned. Conclusions are supported by relevant judgements including the use of persuasive language.']]
};

addCases([
  // white-collar, corporate, state, technological, individual crime
  { id: 'maxwell', n: 'Robert Maxwell and the Mirror pensions', y: 1991, a: '1', t: '1.1.1', c: 'Case', f: 'After the newspaper owner Robert Maxwell died in 1991, it emerged that around £440 million had been taken from his companies’ pension funds to prop up his business empire. Thousands of pensioners faced losing their pensions.', p: 'A classic white-collar and corporate crime: huge victim numbers, diffuse harm and low public awareness until the collapse. It led to the Pensions Act 1995 and tighter regulation of pension schemes.' },
  { id: 'leeson', n: 'Nick Leeson and Barings Bank', y: 1995, a: '1', t: '1.1.1', c: 'Case', f: 'A trader in Singapore hid losses of about £827 million in a secret account, bringing down Barings, Britain’s oldest merchant bank. He was jailed for fraud in Singapore.', p: 'Professional, occupational crime committed in the course of legitimate work. It shows how weak internal controls allow white-collar crime to go undetected.' },
  { id: 'enron', n: 'Enron', y: 2001, a: '1', t: '1.1.1', c: 'Case', f: 'The US energy company used accounting tricks to hide billions of dollars of debt. When it collapsed, employees lost their jobs and pension savings while executives had sold shares.', p: 'Corporate crime on a massive scale. Executives were convicted, but the case shows how complex white-collar crime is hard for the public to understand.' },
  { id: 'grenfell', n: 'Grenfell Tower fire', y: 2017, a: '1', t: '1.1.1', c: 'Case', f: 'A fire in a west London tower block killed 72 people. It spread rapidly because of combustible cladding. The public inquiry’s final report (2024) found “systematic dishonesty” by some manufacturers and failures by government, regulators and the council.', p: 'Used as an example of corporate and possibly state crime: harm caused by organisations rather than individuals. Police said charging decisions were not expected before late 2026, showing how long corporate prosecutions take.' },
  { id: 'hillsborough', n: 'Hillsborough disaster', y: 1989, a: '1', t: '1.1.1', c: 'Case', f: 'Ninety-seven Liverpool fans died after a crush at Hillsborough stadium in Sheffield. Police blamed drunken fans, and statements were altered. The 2016 inquests found the fans were unlawfully killed and not to blame.', p: 'A case of state wrongdoing and cover-up. Families campaigned for 27 years. It led to calls for a “Hillsborough Law” placing a duty of candour on public officials; a Public Office (Accountability) Bill was introduced in 2025.' },
  { id: 'bloodysunday', n: 'Bloody Sunday', y: 1972, a: '1', t: '1.1.1', c: 'Case', f: 'British soldiers shot dead 13 unarmed civil rights marchers in Derry, Northern Ireland; another man died later. The 1972 Widgery report cleared the soldiers, but the Saville Inquiry (2010) found the killings “unjustified and unjustifiable”.', p: 'A state crime and human rights violation: the state was both offender and investigator. The Prime Minister apologised in 2010.' },
  { id: 'abughraib', n: 'Abu Ghraib prison abuse', y: 2004, a: '1', t: '1.1.1', c: 'Case', f: 'Photographs showed US soldiers torturing and humiliating Iraqi detainees at Abu Ghraib prison in Iraq.', p: 'A state crime involving human rights abuses (torture is absolutely prohibited by Article 3 ECHR and the UN Convention against Torture). Some soldiers were convicted, but critics argued senior officials escaped responsibility.' },
  { id: 'wannacry', n: 'WannaCry cyber-attack on the NHS', y: 2017, a: '1', t: '1.1.1', c: 'Case', f: 'Ransomware encrypted computers worldwide. In England it disrupted over a third of NHS trusts, cancelling thousands of appointments and operations.', p: 'Technological crime (e-crime) with no geographical boundary: the victim may be an organisation and the offender thousands of miles away. The UK and US attributed it to North Korean hackers.' },
  { id: 'talktalk', n: 'TalkTalk data breach', y: 2015, a: '1', t: '1.1.1', c: 'Case', f: 'Hackers, including teenagers, accessed the personal details of about 157,000 TalkTalk customers. The Information Commissioner fined the company £400,000 for weak security.', p: 'E-crime committed by young offenders under the Computer Misuse Act 1990. Shows how technological crime blurs the line between offender (the hackers) and a negligent corporate victim.' },
  { id: 'hattongarden', n: 'Hatton Garden burglary', y: 2015, a: '1', t: '1.1.1', c: 'Case', f: 'A gang of mostly older, experienced criminals drilled into a safe deposit vault in London’s jewellery quarter over the Easter weekend and stole goods worth up to £14 million.', p: 'Professional and organised crime: careful planning, specialist skills and a network to sell stolen goods. The media portrayed the offenders almost as folk heroes (“diamond wheezers”), showing how representation shapes perception.' },
  { id: 'lawrence', n: 'Murder of Stephen Lawrence', y: 1993, a: '1', t: '1.1.1', c: 'Case', f: 'Black teenager Stephen Lawrence was murdered in a racist attack at a bus stop in Eltham, London. The police investigation failed, and no one was convicted until Gary Dobson and David Norris in 2012.', p: 'The defining UK hate crime case. The Macpherson Report (1999) found the Metropolitan Police “institutionally racist”. It changed the definition of a racist incident, and the campaign led to reform of the double jeopardy rule (Criminal Justice Act 2003).' },
  { id: 'lancaster', n: 'Murder of Sophie Lancaster', y: 2007, a: '1', t: '1.1.1', c: 'Case', f: 'Sophie Lancaster, 20, was kicked to death in a Lancashire park by a group of teenagers because she and her boyfriend dressed as goths.', p: 'Hate crime against an alternative subculture. Her mother’s campaign led Greater Manchester Police in 2013 to record attacks on alternative subcultures as hate crime — showing how campaigns change police priorities.' },
  { id: 'pilkington', n: 'Fiona Pilkington', y: 2007, a: '1', t: '1.1.1', c: 'Case', f: 'Fiona Pilkington killed herself and her disabled daughter after years of harassment by local youths. She had contacted the police many times, but the incidents were treated as anti-social behaviour.', p: 'Disability hate crime that was reported but not recognised or recorded properly. The police watchdog criticised Leicestershire Police, and it raised awareness of disability hate crime.' },
  { id: 'banaz', n: 'Murder of Banaz Mahmod', y: 2006, a: '1', t: '1.1.1', c: 'Case', f: 'Banaz Mahmod, 20, was murdered on the orders of her father and uncle after leaving an abusive marriage and choosing her own boyfriend. She had gone to the police several times and named the men she feared.', p: 'The key UK example of “honour”-based abuse. Her father and uncle were convicted in 2007 and other men later extradited from Iraq. It exposed police failures to understand honour crime and led to specialist training.' },
  { id: 'shafilea', n: 'Murder of Shafilea Ahmed', y: 2003, a: '1', t: '1.1.1', c: 'Case', f: 'Seventeen-year-old Shafilea Ahmed was killed by her parents in Warrington for becoming too “westernised”. They were convicted only in 2012, after her sister gave evidence.', p: 'Honour crime hidden within the family and community for nine years. Her birthday, 14 July, is now the national day of memory for victims of honour killings.' },
  { id: 'clarewood', n: 'Murder of Clare Wood', y: 2009, a: '1', t: '1.1.1', c: 'Case', f: 'Clare Wood was murdered in Salford by her ex-partner George Appleton, who had a history of violence against women that she did not know about.', p: 'Domestic abuse case that led to Clare’s Law, the Domestic Violence Disclosure Scheme (national from 2014), after a campaign by her father.' },
  // unreported crime
  { id: 'savile', n: 'Jimmy Savile and Operation Yewtree', y: 2012, a: '1', t: '1.1.2', c: 'Case', f: 'After the TV presenter Jimmy Savile died in 2011, hundreds of people reported that he had sexually abused them over five decades, including in hospitals and at the BBC. The police investigation was called Operation Yewtree.', p: 'Shows why sexual abuse goes unreported: fear, shame, the offender’s power and fame, and the belief that victims would not be believed. It led to a surge in reporting of historical abuse.' },
  { id: 'rotherham', n: 'Rotherham child sexual exploitation', y: 2014, a: '1', t: '1.1.2', c: 'Report', f: 'The Jay Report (2014) estimated that at least 1,400 children were sexually exploited in Rotherham between 1997 and 2013, mostly by groups of men. Victims’ reports were ignored or dismissed.', p: 'Crime that was reported but not acted on: professionals blamed victims, and some feared being seen as racist. Shows unreported and unrecorded crime are linked to who the victim is.' },
  { id: 'genovese', n: 'Murder of Kitty Genovese', y: 1964, a: '1', t: '1.1.2', c: 'Case', f: 'Kitty Genovese was stabbed to death in New York. A newspaper claimed 38 neighbours saw or heard the attack and did nothing — a claim later shown to be exaggerated.', p: 'Inspired research into the “bystander effect” — people are less likely to help or report when others are present. It also shows how media reports can distort the facts of a crime.' },
  { id: 'hmic2014', n: 'HMIC: Crime-recording: making the victim count', y: 2014, a: '1', t: '1.1.6', c: 'Report', f: 'An inspection of all police forces in England and Wales found that about 19% of crimes reported to the police were not recorded — and about 26% of sexual offences.', p: 'Key evidence that police recorded crime is unreliable. The UK Statistics Authority removed the “National Statistics” status from police recorded crime in 2014.' },
  // media
  { id: 'bulger', n: 'Murder of James Bulger', y: 1993, a: '1', t: '1.1.4', c: 'Case', f: 'Two-year-old James Bulger was abducted and killed by two 10-year-old boys in Merseyside. Newspapers described the boys as “evil” and linked the crime to the horror film Child’s Play 3, although no evidence showed they had watched it.', p: 'A major moral panic about childhood, video nasties and youth crime. It contributed to tougher film classification, a more punitive youth justice climate and the abolition of doli incapax for 10–13-year-olds (Crime and Disorder Act 1998).' },
  { id: 'sunhillsborough', n: 'The Sun: “The Truth” headline', y: 1989, a: '1', t: '1.1.4', c: 'Case', f: 'Four days after Hillsborough, The Sun printed claims that fans had robbed the dead and attacked police. The claims came from police sources and were false.', p: 'An example of newspaper crime reporting shaped by official sources. The paper is still boycotted by many in Liverpool; it apologised in 2004 and 2012.' },
  { id: 'southport', n: 'Southport attack and riots', y: 2024, a: '1', t: '1.1.5', c: 'Case', f: 'After three girls were murdered at a dance class in Southport, false claims spread online that the attacker was a Muslim asylum seeker. Riots followed in several towns, with attacks on mosques and hotels housing asylum seekers.', p: 'Shows the speed and power of social media in shaping perceptions of crime. Hundreds were convicted, including people jailed for online posts inciting racial hatred. The Online Safety Act 2023 and misinformation became central to the debate.' },
  { id: 'adolescence', n: 'Adolescence (Netflix drama)', y: 2025, a: '1', t: '1.1.4', c: 'Case', f: 'A fictional drama about a 13-year-old boy arrested for murdering a girl from his school, exploring online misogyny and the “manosphere”. The Prime Minister backed plans to show it in schools.', p: 'An example of fictional television shaping public concern and policy debate about youth violence, social media and violence against women and girls.' },
  { id: 'drill', n: 'Drill music and policing', y: 2018, a: '1', t: '1.1.4', c: 'Case', f: 'The Metropolitan Police asked YouTube to remove drill music videos it said glorified violence. In 2019 the drill duo Skengdo and AM received suspended prison sentences for performing a song that breached an injunction.', p: 'Music as a form of media representation of crime. Critics say it criminalises young Black men and a musical genre; supporters say some lyrics incite real violence.' },
  { id: 'crimewatch', n: 'Crimewatch', y: 1984, a: '1', t: '1.1.4', c: 'Case', f: 'A BBC programme (1984–2017) that reconstructed real crimes and appealed to viewers for information.', p: 'Factual TV helps solve crimes but over-represents rare violent and sexual crimes, which may increase fear of crime.' },
  // theories and studies
  { id: 'stancohen', n: 'Stanley Cohen: Folk Devils and Moral Panics', y: 1972, a: '1', t: '1.1.5', c: 'Study', f: 'Cohen studied media coverage of clashes between Mods and Rockers at seaside resorts in 1964. Newspapers exaggerated the violence with headlines like “Day of Terror by Scooter Groups”.', p: 'Defined a moral panic: a group is portrayed as a threat to society (folk devils), leading to public concern, calls for action and tougher control. Stages include exaggeration, prediction and symbolisation.' },
  { id: 'hallcrisis', n: 'Hall et al.: Policing the Crisis', y: 1978, a: '1', t: '1.1.5', c: 'Study', f: 'Stuart Hall and colleagues examined the 1970s panic about “mugging”, which the media associated with young Black men, although street robbery was not new or rising sharply.', p: 'A Marxist view of moral panic: the media and the state created a folk devil to distract from economic crisis and justify tougher policing.' },
  { id: 'wilkins', n: 'Wilkins: deviancy amplification spiral', y: 1964, a: '1', t: '1.1.5', c: 'Theory', f: 'Leslie Wilkins argued that when the media and police react to minor deviance, the deviant group becomes more isolated and deviant, which draws more attention and more control.', p: 'Explains how media representation can increase the very crime it reports. Jock Young applied it to police and drug-takers in Notting Hill (1971).' },
  { id: 'gerbner', n: 'Gerbner: cultivation theory', y: 1976, a: '1', t: '1.1.5', c: 'Theory', f: 'George Gerbner found that heavy television viewers overestimated their chances of being victims of violence compared with light viewers.', p: 'Suggests long-term exposure to crime-heavy media cultivates a “mean world” view and fear of crime. Critics say fearful people may simply watch more TV.' },
  { id: 'reiner', n: 'Reiner: media-made criminality', y: 2002, a: '1', t: '1.1.4', c: 'Study', f: 'Robert Reiner’s content analysis found that crime news concentrates on violent and sexual crime, older and higher-status offenders and victims, and exaggerates police success.', p: 'Evidence that the media do not mirror crime. Violent crime is a small share of recorded crime but dominates coverage.' },
  { id: 'jewkes', n: 'Jewkes: news values', y: 2004, a: '1', t: '1.1.4', c: 'Theory', f: 'Yvonne Jewkes identified news values that make a crime newsworthy: threshold, predictability, simplification, individualism, risk, sex, celebrity, proximity, violence, visual spectacle, children and conservative ideology.', p: 'Explains why some crimes (a missing child, a celebrity trial) dominate the news while others (corporate crime, domestic abuse) are rarely covered.' },
  // statistics
  { id: 'csew', n: 'Crime Survey for England and Wales', y: 1982, a: '1', t: '1.1.6', c: 'Study', f: 'A face-to-face victimisation survey (started as the British Crime Survey in 1982) asking people in households about crimes they have experienced in the last 12 months, whether or not they reported them.', p: 'Captures much of the dark figure of crime and is unaffected by police recording practices. It excludes crimes against businesses, homicide, “victimless” crimes, people in institutions and the homeless, and it relies on memory and honesty.' }
]);

/* ---------- AC1.1 Types of crime ---------- */
TOPICS.push({
  id: '1.1.1', unit: '1', ref: 'AC1.1', title: 'Types of crime',
  short: 'White-collar, moral, state, technological and individual crime: offences, victims, offenders and public awareness',
  summary: 'Not all crime looks like a burglary or a street robbery. This criterion asks you to analyse different types of crime — white-collar, moral, state, technological and individual crimes such as hate crime, honour crime and domestic abuse — by the offences involved, the victims, the offenders and how aware the public is of them. You also need to see that some acts are deviant, some criminal, and some both.',
  spec: ['White-collar crime: organised, corporate and professional', 'Moral crime', 'State crime, including human rights crimes', 'Technological crime (e-crime)', 'Individual crime: hate crime, honour crime, domestic abuse', 'Analyse each by criminal offences, types of victim, types of offender and level of public awareness', 'Recognise that acts may be deviant and/or criminal'],
  learn: [
    { h: 'How to analyse a type of crime', html: `
<p>In the controlled assessment you analyse <b>two types of crime evident in your assignment brief</b>. Description gets band 1; <b>analysis</b> gets band 2. Analysis means breaking each crime down using the four headings in the specification:</p>
<div class="tbl"><table><tr><th>Heading</th><th>Questions to ask</th></tr>
<tr><td><b>Criminal offences</b></td><td>Which laws are broken? Name the Act and offence where you can (e.g. Fraud Act 2006, Computer Misuse Act 1990, Serious Crime Act 2015 s76 coercive control).</td></tr>
<tr><td><b>Types of victim</b></td><td>Individual, group, organisation, the state, society? Are victims aware they are victims? Are they vulnerable?</td></tr>
<tr><td><b>Types of offender</b></td><td>Individual, group, organisation, the state? Age, gender, class, power, relationship to the victim?</td></tr>
<tr><td><b>Level of public awareness</b></td><td>Is it reported in the media? Do people see it as “real crime”? Is it hidden?</td></tr></table></div>` },
    { h: 'White-collar crime', html: `
<p>Edwin <b>Sutherland</b> (1949) defined white-collar crime as crime committed by a person of respectability and high social status in the course of their occupation. The specification divides it into:</p>
<ul><li><b>Professional / occupational</b> crime — committed by individuals within their job: embezzlement, fiddling expenses, a rogue trader ([[c:leeson]]).</li>
<li><b>Corporate</b> crime — committed by or for an organisation: price-fixing, false accounting ([[c:enron]]), health and safety breaches, environmental pollution, misuse of pension funds ([[c:maxwell]]). The Corporate Manslaughter and Corporate Homicide Act 2007 allows companies to be convicted when gross management failures cause death ([[c:grenfell]] is often discussed in this context).</li>
<li><b>Organised</b> crime — planned, continuing criminal enterprises: drug and people trafficking, money laundering, counterfeit goods, large-scale robbery ([[c:hattongarden]]). Counterfeiting may seem harmless but can fund more serious crime.</li></ul>
<p><b>Analysis</b>: victims are often diffuse (shareholders, pensioners, the public) and may not know they are victims; offenders are powerful and respectable; public awareness is <b>low</b> and it is seen as “victimless”, so it is under-reported and under-prosecuted.</p>` },
    { h: 'Moral and state crime', html: `
<p><b>Moral crimes</b> (sometimes called “victimless” or public order crimes) are acts that break the law because they offend society’s moral standards rather than causing a clear victim: illegal drug use, prostitution-related offences, assisted suicide, underage drinking. The offender and “victim” are often the same person, so they are rarely reported. Views change over time (see the social construction of crime in Unit 2).</p>
<p><b>State crime</b> is crime committed by or on behalf of governments and their agencies: torture, genocide, war crimes, unlawful killing, corruption and cover-ups ([[c:bloodysunday]]; [[c:hillsborough]]; [[c:abughraib]]). <b>Human rights</b> crimes violate rights protected by international law, such as the European Convention on Human Rights (Article 3: freedom from torture). The state has the power to define what is criminal and to investigate itself, so these crimes are hard to prosecute and often come to light only after long campaigns.</p>` },
    { h: 'Technological crime (e-crime)', html: `
<p>Crimes committed using computers and the internet:</p>
<ul><li><b>Cyber-dependent</b> crimes that can only happen online: hacking, malware and ransomware ([[c:wannacry]]; [[c:talktalk]]) — Computer Misuse Act 1990.</li>
<li><b>Cyber-enabled</b> traditional crimes moved online: fraud and scams, online grooming, cyberstalking, sharing intimate images without consent, online hate speech, identity theft.</li></ul>
<p><b>Analysis</b>: victims can be individuals, businesses or the state, and may never know who attacked them; offenders can be anywhere in the world, anonymous, and often young; public awareness is growing, but many victims are embarrassed or think nothing can be done. Fraud and computer misuse are now among the most common crimes measured by the Crime Survey.</p>` },
    { h: 'Individual crime: hate, honour and domestic abuse', html: `
<ul><li><b>Hate crime</b>: any crime perceived by the victim or anyone else to be motivated by hostility or prejudice based on <b>race, religion, sexual orientation, disability or transgender identity</b> (the five monitored strands). Racially or religiously aggravated offences exist under the Crime and Disorder Act 1998, and hostility increases sentences (Sentencing Act 2020 s66). Examples: [[c:lawrence]]; [[c:pilkington]]; [[c:lancaster]] (some forces also record hate against alternative subcultures).</li>
<li><b>Honour crime</b> (“honour”-based abuse): violence to protect or defend the perceived honour of a family or community, including forced marriage (a crime since 2014) and female genital mutilation. Victims are mostly young women, offenders are often family members, and awareness has been low because of fear of the community ([[c:banaz]]; [[c:shafilea]]). A culture-bound crime.</li>
<li><b>Domestic abuse</b>: defined by the Domestic Abuse Act 2021 as abusive behaviour between people aged 16+ who are personally connected — physical or sexual abuse, violent or threatening behaviour, <b>controlling or coercive behaviour</b>, economic abuse, psychological or emotional abuse. It happens in private, victims may depend on the abuser, and it is heavily under-reported ([[c:clarewood]]).</li></ul>` },
    { h: 'Deviant, criminal or both?', html: `
<p>Link this to Unit 2. An act can be:</p>
<ul><li><b>Criminal but not seen as very deviant</b> — speeding, minor tax evasion, illegal downloading, some drug use.</li>
<li><b>Deviant but not criminal</b> — lying to friends, extreme body modification, breaking school rules.</li>
<li><b>Both</b> — murder, rape, hate crime.</li></ul>
<p>White-collar and moral crimes are often <b>criminal but not seen as deviant</b> by the public, which explains low reporting and low awareness.</p>` }
  ],
  debate: [{ q: 'Is white-collar crime more harmful than street crime?', for: ['Far larger financial losses (Maxwell, Enron).', 'Corporate negligence can kill many people (Grenfell).', 'Victims often never know they were victims.', 'Offenders are powerful and rarely prosecuted (Marxist view).'], ag: ['Street crime causes direct physical harm and fear.', 'Individual victims of burglary or assault suffer lasting trauma.', 'Public concern focuses on street crime because it feels closer to home.', 'Regulation and civil penalties may be more effective than prosecution for corporate harm.'] }],
  cases: ['leeson', 'enron', 'maxwell', 'hattongarden', 'grenfell', 'bloodysunday', 'hillsborough', 'abughraib', 'wannacry', 'talktalk', 'lawrence', 'pilkington', 'lancaster', 'banaz', 'shafilea', 'clarewood'],
  worked: [{ q: '<b>Brief extract.</b> “Local traders report that fake designer handbags are sold openly at a weekend market. Meanwhile, several older residents have lost savings to phone callers pretending to be their bank.” Analyse <b>one</b> of these types of crime.', s: ['<b class="st">Identify</b>The bank impersonation calls are a technological, cyber-enabled crime (fraud), often linked to organised crime groups.', '<b class="st">Offences</b>Fraud by false representation under s2 Fraud Act 2006; possibly money laundering by those who receive the funds.', '<b class="st">Victims</b>Individuals, often older or isolated people who trust authority; also banks, which may refund losses. Victims may feel ashamed and blame themselves.', '<b class="st">Offenders</b>Organised groups, sometimes based abroad, using call centres and “money mules” — often young people recruited through social media.', '<b class="st">Public awareness</b>Growing, through bank campaigns such as “Take Five”, but victims often do not report it because they are embarrassed or think the police cannot help. Fraud is one of the most common crimes in the CSEW but only a small proportion is reported.'], a: 'That is analysis, not description: each heading from the specification is applied to the brief.' }],
  pitfalls: ['Describing a crime without analysing it under offences, victims, offenders and awareness.', 'Choosing crimes that are not evident in the assignment brief.', 'Treating white-collar crime as one thing — distinguish corporate, occupational/professional and organised.', 'Forgetting that some acts are deviant but not criminal, or criminal but not seen as deviant.'],
  cards: [
    ['Who defined white-collar crime?', 'Edwin Sutherland (1949): crime by a person of respectability and high social status in the course of their occupation.'],
    ['Corporate v professional (occupational) crime?', 'Corporate crime is committed by or for an organisation; occupational crime is committed by individuals within their job for their own benefit.'],
    ['What is organised crime?', 'Planned, continuing criminal enterprise by groups for profit — drugs, trafficking, counterfeiting, money laundering.'],
    ['What is state crime?', 'Crime committed by or on behalf of governments and their agencies, e.g. torture, unlawful killing, cover-ups.'],
    ['Cyber-dependent v cyber-enabled crime?', 'Cyber-dependent crime needs a computer (hacking, malware); cyber-enabled crime is traditional crime done online (fraud, grooming).'],
    ['Five monitored hate crime strands?', 'Race, religion, sexual orientation, disability and transgender identity.'],
    ['What is honour-based abuse?', 'Violence or abuse to protect the perceived honour of a family or community, including forced marriage and FGM.'],
    ['Which Act defines domestic abuse?', 'Domestic Abuse Act 2021 — including controlling or coercive behaviour and economic abuse.'],
    ['What is a moral (victimless) crime?', 'An act criminalised because it offends moral standards, with no obvious victim — e.g. drug use, assisted suicide.'],
    ['Four headings for analysing a crime?', 'Criminal offences, types of victim, types of offender, level of public awareness.']
  ],
  quiz: [
    { q: 'Nick Leeson’s hidden trading losses at Barings Bank are best classed as…', o: ['professional (occupational) white-collar crime', 'state crime', 'hate crime', 'moral crime'], x: 'Committed by an individual in the course of his job.' },
    { q: 'Which is a cyber-dependent crime?', o: ['Spreading ransomware', 'Online fraud', 'Online grooming', 'Cyberstalking'], x: 'It cannot exist without computers.' },
    { q: 'The Saville Inquiry into Bloody Sunday is an example of investigating…', o: ['state crime', 'corporate crime', 'e-crime', 'moral crime'], x: 'Soldiers acting for the state.' },
    { q: 'Controlling or coercive behaviour in an intimate or family relationship became an offence under…', o: ['the Serious Crime Act 2015', 'the Fraud Act 2006', 'the Computer Misuse Act 1990', 'the Crime and Disorder Act 1998'], x: 's76, in force from December 2015.' },
    { q: 'Which is NOT one of the five monitored hate crime strands?', o: ['Age', 'Disability', 'Religion', 'Transgender identity'], x: 'The strands are race, religion, sexual orientation, disability and transgender identity.' },
    { q: 'Why is corporate crime often low in public awareness?', o: ['Victims are diffuse and may not know they are victims', 'It is always minor', 'It is never illegal', 'It is reported daily in the media'], x: 'Harm is spread across many people.' }
  ],
  exam: [{ q: 'Practice task: analyse two types of crime evident in this brief. [4]', m: 4, scen: 'A local charity reports that disabled residents on an estate are repeatedly targeted with abuse and vandalism. The same charity found that one of its trustees had been secretly moving donations into his own bank account for several years.', ms: ['identifies disability hate crime and occupational white-collar crime (fraud/embezzlement)', 'offences — harassment, criminal damage, aggravated by hostility; fraud by abuse of position (s4 Fraud Act 2006)', 'victims — vulnerable disabled residents; the charity, donors and beneficiaries', 'offenders — local individuals or groups; a trusted, respectable insider', 'public awareness — disability hate crime under-recognised (Pilkington); charity fraud hidden and seen as less serious'], bands: U1_BANDS['1.1'] }],
  tools: ['crimetypesort', 'deviantsort']
});

/* ---------- AC1.2 Reasons crimes are unreported ---------- */
TOPICS.push({
  id: '1.1.2', unit: '1', ref: 'AC1.2', title: 'Why some crimes go unreported',
  short: 'Personal reasons (fear, shame, disinterest, not affected) and social and cultural reasons (lack of knowledge, complexity, media, public concern, culture-bound crime)',
  summary: 'Most crime never reaches the police. This criterion asks you to explain why, using personal reasons such as fear and shame, and social and cultural reasons such as lack of knowledge, complexity and lack of media or public concern. In the controlled assessment you explain the reasons for the two crimes in your brief.',
  spec: ['Personal reasons: fear, shame, disinterest, not affected', 'Social and cultural reasons: lack of knowledge, complexity, lack of media interest, lack of current public concern, culture-bound crime (e.g. honour killing, witchcraft)', 'Apply to crimes such as common assault, domestic abuse, vandalism, rape and perceived victimless crimes (white-collar crime, vagrancy, prostitution, assisted suicide)'],
  learn: [
    { h: 'The dark figure of crime', html: `
<p>The <b>dark figure</b> is the crime that is never reported to or recorded by the police. The Crime Survey for England and Wales ([[c:csew]]) consistently finds that only a minority of the crimes people experience are reported. Reporting rates vary hugely by crime: most vehicle thefts and burglaries are reported (for insurance), but most sexual offences, domestic abuse and fraud are not. Try the <b>attrition funnel</b> in Explore.</p>` },
    { h: 'Personal reasons', html: `
<div class="tbl"><table><tr><th>Reason</th><th>Explanation</th><th>Crimes where it applies</th></tr>
<tr><td><b>Fear</b></td><td>Fear of reprisal from the offender, of losing a home, children or income, of not being believed, or of the court process</td><td>Domestic abuse, honour crime, gang crime, rape</td></tr>
<tr><td><b>Shame / embarrassment</b></td><td>Stigma, self-blame, fear of others finding out</td><td>Rape and sexual abuse ([[c:savile]]), fraud scams, male victims of domestic abuse</td></tr>
<tr><td><b>Disinterest</b></td><td>The victim thinks it is too trivial or that the police will do nothing</td><td>Vandalism, minor theft, common assault</td></tr>
<tr><td><b>Not affected</b></td><td>The victim does not realise a crime occurred, or no one sees themselves as a victim</td><td>Corporate crime, fraud against the state, “victimless” crimes such as drug use</td></tr></table></div>
<p>Other personal reasons: the victim knows or loves the offender; they deal with it themselves; they distrust the police; they are involved in crime themselves.</p>` },
    { h: 'Social and cultural reasons', html: `
<ul><li><b>Lack of knowledge</b> — people do not know the act is a crime (coercive control, upskirting before 2019, some online harms) or how to report it.</li>
<li><b>Complexity</b> — white-collar and e-crimes are hard to understand and investigate; victims may not know where to go (Action Fraud).</li>
<li><b>Lack of media interest</b> — crimes that rarely appear in the news (corporate crime, crimes against the homeless) are not seen as important.</li>
<li><b>Lack of current public concern</b> — some acts are widely tolerated (cannabis use, minor tax evasion, assisted suicide on compassionate grounds).</li>
<li><b>Culture-bound crime</b> — practices seen as normal or private within a community, such as honour-based abuse ([[c:banaz]]), forced marriage, female genital mutilation or abuse linked to faith and belief in witchcraft (e.g. the murder of Victoria Climbié in 2000 involved beliefs about possession). Victims may be isolated and fear shame for the family.</li>
<li><b>Bystander effect</b> — witnesses assume someone else will report ([[c:genovese]]).</li></ul>` },
    { h: 'Applying reasons to the specification’s crimes', html: `
<div class="tbl"><table><tr><th>Crime</th><th>Main reasons for not reporting</th></tr>
<tr><td>Common assault</td><td>Seen as trivial; known offender; victim also involved (e.g. pub fight); fear of reprisal</td></tr>
<tr><td>Domestic abuse</td><td>Fear, financial or emotional dependence, children, shame, not recognising coercive control as abuse</td></tr>
<tr><td>Vandalism</td><td>Disinterest; nothing will be done; cost of repair below insurance excess</td></tr>
<tr><td>Rape</td><td>Shame, self-blame, fear of disbelief and the trial process, knowing the offender, low conviction rates</td></tr>
<tr><td>Perceived victimless crimes</td><td>White-collar crime (complexity, not affected), vagrancy and prostitution (no complainant; the “victim” may be the offender), assisted suicide (compassion; family members are involved)</td></tr></table></div>` }
  ],
  debate: [{ q: 'Is under-reporting mainly the victim’s choice or the system’s fault?', for: ['Personal reasons such as fear and shame are individual choices.', 'Some victims prefer to deal with matters privately.', 'Minor crimes are rationally judged not worth reporting.'], ag: ['Victims stay silent because they expect disbelief — as in Rotherham and Savile.', 'Low charge rates for rape discourage reporting.', 'Lack of specialist support and police training.', 'Social and cultural pressures, not free choice, silence victims of honour crime.'] }],
  cases: ['csew', 'savile', 'rotherham', 'genovese', 'banaz'],
  worked: [],
  pitfalls: ['Listing reasons without explaining them for the two crimes in the brief.', 'Only giving personal reasons — include social and cultural reasons too.', 'Confusing unreported crime with unrecorded crime (reported but not recorded by the police).'],
  cards: [
    ['What is the dark figure of crime?', 'Crime that is not reported to or recorded by the police.'],
    ['Four personal reasons in the specification?', 'Fear, shame, disinterest, not affected.'],
    ['Five social and cultural reasons?', 'Lack of knowledge, complexity, lack of media interest, lack of current public concern, culture-bound crime.'],
    ['What is culture-bound crime?', 'Crime linked to beliefs or practices within a particular culture, e.g. honour-based abuse, FGM, witchcraft-related abuse.'],
    ['Why is white-collar crime unreported?', 'Complex, victims may not know they are victims, seen as victimless, low media interest.'],
    ['Why is domestic abuse unreported?', 'Fear, dependence on the abuser, shame, children, not recognising coercive control.'],
    ['What is the bystander effect?', 'People are less likely to help or report when others are present — linked to Kitty Genovese.'],
    ['What did Operation Yewtree show about reporting?', 'Victims of powerful abusers stay silent for decades through fear of not being believed.']
  ],
  quiz: [
    { q: 'A victim of fraud who does not report because they feel foolish is showing…', o: ['shame', 'disinterest', 'lack of media interest', 'culture-bound crime'], x: 'A personal reason.' },
    { q: 'Which is a culture-bound crime?', o: ['Forced marriage linked to family honour', 'Shoplifting', 'Car theft', 'Burglary'], x: 'Linked to particular cultural beliefs.' },
    { q: 'Why are vehicle thefts usually reported?', o: ['A crime reference number is needed for insurance', 'Victims fear the offender', 'They are culture-bound', 'They are victimless'], x: 'Insurance makes reporting worthwhile.' },
    { q: 'Assisted suicide is often unreported because…', o: ['it is seen as compassionate and family members are involved', 'it is complex e-crime', 'victims fear reprisals', 'it is legal in England'], x: 'It remains an offence under the Suicide Act 1961.' },
    { q: 'The Jay Report into Rotherham found that victims’ reports were…', o: ['ignored or dismissed', 'always investigated', 'made up', 'never made'], x: 'At least 1,400 children were exploited.' }
  ],
  exam: [{ q: 'Practice task: explain why the two crimes in this brief are likely to go unreported. [4]', m: 4, scen: 'A youth worker believes that several young women in a close-knit community are being pressured into marriage abroad. She also suspects that a local builder is dumping hazardous waste illegally.', ms: ['forced marriage — fear of family and community, shame/dishonour, dependence, may not know it is a crime (lack of knowledge), culture-bound', 'links to Banaz Mahmod / honour-based abuse', 'illegal waste dumping — complexity, “not affected” (no individual victim), low media and public concern, seen as victimless environmental/corporate crime', 'detailed explanation, not just a list'], bands: U1_BANDS['1.2'] }],
  tools: ['funnel', 'reasonsort']
});

/* ---------- AC1.3 Consequences of unreported crime ---------- */
TOPICS.push({
  id: '1.1.3', unit: '1', ref: 'AC1.3', title: 'Consequences of unreported crime',
  short: 'Ripple effect, cultural consequences, decriminalisation, police prioritisation, unrecorded crime and cultural, legal and procedural change',
  summary: 'What happens when crime goes unreported? The consequences can be negative — offenders are free to reoffend and victims are unsupported — but also positive, when campaigns expose hidden crime and bring cultural, legal and procedural change. You need to explain the effects on individuals and on society, with examples.',
  spec: ['Ripple effect', 'Cultural consequences', 'Decriminalisation', 'Police prioritisation', 'Unrecorded crime', 'Cultural change', 'Legal change', 'Procedural change', 'Positive and negative effects on the individual and on society'],
  learn: [
    { h: 'Negative consequences', html: `
<ul><li><b>Ripple effect</b> — harm spreads beyond the victim: families, witnesses and communities are affected; unchallenged offenders reoffend; fear spreads and people change behaviour (avoiding areas, not going out at night).</li>
<li><b>Unrecorded crime</b> — official statistics under-state the problem, so crime trends are misleading ([[c:hmic2014]]).</li>
<li><b>Police prioritisation</b> — resources are allocated according to recorded crime, so hidden crimes (domestic abuse, fraud, hate crime) receive less funding and fewer specialist officers.</li>
<li><b>Cultural</b> — silence normalises the behaviour (e.g. sexual harassment in schools, honour-based abuse) and victims lose trust in authorities.</li>
<li>For the <b>individual</b>: no justice, no compensation, no access to support such as Victim Support or Independent Sexual Violence Advisers; continued victimisation.</li></ul>` },
    { h: 'Decriminalisation', html: `
<p>If a crime is widely committed but rarely reported or prosecuted, pressure grows to <b>decriminalise</b> it — the law changes to reflect practice. Examples: suicide (Suicide Act 1961), homosexual acts between men in private (Sexual Offences Act 1967), and the debate on cannabis (reclassified to class C in 2004 and back to class B in 2009) and on assisted dying. This may be seen as positive (laws matching values) or negative (harm tolerated).</p>` },
    { h: 'Positive consequences: cultural, legal and procedural change', html: `
<p>When hidden crime is exposed, it can trigger change:</p>
<div class="tbl"><table><tr><th>Type of change</th><th>Examples</th></tr>
<tr><td><b>Cultural change</b></td><td>#MeToo (2017) and Everyone’s Invited (2020) changed attitudes to sexual harassment; the Savile revelations led to a rise in reports of historical abuse ([[c:savile]])</td></tr>
<tr><td><b>Legal change</b></td><td>New offences: coercive control (Serious Crime Act 2015); forced marriage (Anti-social Behaviour, Crime and Policing Act 2014); upskirting (Voyeurism (Offences) Act 2019); the Domestic Abuse Act 2021 (non-fatal strangulation offence)</td></tr>
<tr><td><b>Procedural change</b></td><td>Police record hate crime based on the victim’s perception (after [[c:lawrence]]); Clare’s Law disclosure scheme ([[c:clarewood]]); special measures for vulnerable witnesses; the National Crime Recording Standard; third-party reporting centres</td></tr></table></div>
<p>The irony: an increase in <b>recorded</b> crime after such changes may reflect better reporting and recording, not more crime.</p>` }
  ],
  debate: [{ q: 'Can unreported crime ever have positive consequences?', for: ['Exposure of hidden crime leads to legal reform (coercive control, upskirting).', 'Campaigns change culture (#MeToo).', 'Decriminalisation brings law in line with public values.', 'Police develop better procedures (hate crime recording).'], ag: ['Change usually happens only after serious harm (Pilkington, Clare Wood).', 'Victims suffer in the meantime with no justice.', 'Offenders reoffend.', 'Statistics are distorted, misdirecting resources.'] }],
  cases: ['hmic2014', 'savile', 'lawrence', 'clarewood', 'pilkington'],
  worked: [],
  pitfalls: ['Listing consequences without examples — band 2 needs relevant examples.', 'Only giving negative consequences — the specification wants positive and negative effects.', 'Confusing decriminalisation with legalisation.'],
  cards: [
    ['What is the ripple effect?', 'The harm of a crime spreads to families, communities and wider society, and unchallenged offenders reoffend.'],
    ['How does unreported crime affect police prioritisation?', 'Resources follow recorded crime, so hidden crimes get less attention.'],
    ['Give an example of legal change after hidden crime was exposed.', 'Coercive control offence, Serious Crime Act 2015; upskirting, Voyeurism (Offences) Act 2019.'],
    ['Give an example of procedural change.', 'Clare’s Law disclosure scheme; hate crime recorded on the victim’s perception after Macpherson.'],
    ['What is decriminalisation?', 'An act ceases to be a criminal offence, e.g. suicide in 1961.'],
    ['Why might recorded crime rise after a campaign?', 'More reporting and better recording, not necessarily more crime.']
  ],
  quiz: [
    { q: 'Which is an example of procedural change?', o: ['Clare’s Law disclosure scheme', 'The Suicide Act 1961', 'Moral panic', 'The dark figure'], x: 'A new police procedure.' },
    { q: 'If domestic abuse is not reported, one consequence for policing is…', o: ['fewer resources allocated to it', 'more funding for it', 'automatic prosecution', 'higher recorded crime'], x: 'Police prioritisation follows recorded crime.' },
    { q: 'Making suicide no longer a crime (1961) is an example of…', o: ['decriminalisation', 'procedural change', 'the ripple effect', 'moral panic'], x: 'Suicide Act 1961.' },
    { q: 'The rise in reports after the Savile revelations is an example of…', o: ['cultural change', 'decriminalisation', 'unrecorded crime', 'the bystander effect'], x: 'Victims felt more able to come forward.' }
  ],
  exam: [{ q: 'Practice task: explain the consequences of domestic abuse going unreported. [4]', m: 4, ms: ['ripple effect — children, family, repeat victimisation', 'unrecorded — statistics under-state the problem; police prioritisation', 'individual — no protection or support; escalation (Clare Wood)', 'positive — campaigns led to legal change (Domestic Abuse Act 2021; coercive control) and procedural change (Clare’s Law)', 'clear, detailed, with examples'], bands: U1_BANDS['1.3'] }],
  tools: ['changesort']
});

/* ---------- AC1.4 Media representation of crime ---------- */
TOPICS.push({
  id: '1.1.4', unit: '1', ref: 'AC1.4', title: 'Media representation of crime',
  short: 'How newspapers, television, film, electronic gaming, social media and music portray crime, factually and fictionally',
  summary: 'Most of what people know about crime comes from the media, not personal experience. This criterion asks you to describe how different forms of media portray crime, both factually (news, documentaries) and fictionally (dramas, films, games, music), using specific examples.',
  spec: ['Newspapers', 'Television', 'Film', 'Electronic gaming', 'Social media (blogs, social networking)', 'Music', 'Fictional and factual representations of crime, with specific examples'],
  learn: [
    { h: 'What gets represented — and what doesn’t', html: `
<p>Studies of crime news ([[c:reiner]]) consistently find that the media:</p>
<ul><li><b>Over-represent violent and sexual crime</b>, especially murder, which is rare, while under-representing property crime, fraud and corporate crime.</li>
<li>Focus on <b>individual</b> offenders and victims, often older, higher-status or “ideal” victims (young, female, white, middle-class).</li>
<li>Exaggerate police success and the risk of victimisation.</li>
<li>Select stories by <b>news values</b> ([[c:jewkes]]): threshold, proximity, risk, sex, celebrity, violence, visual spectacle, children, simplification.</li></ul>` },
    { h: 'Newspapers and television news', html: `
<ul><li><b>Newspapers</b>: tabloids use dramatic, emotive headlines and campaigns (the News of the World’s campaign after the murder of Sarah Payne; [[c:bulger]] coverage calling 10-year-olds “evil freaks”); broadsheets give more context and statistics. Newspapers rely on police sources, which can produce inaccurate reporting ([[c:sunhillsborough]]).</li>
<li><b>Television news and documentaries</b>: factual but selective; visual images of riots and knife crime shape memory. True-crime documentaries (Making a Murderer, 2015) can question verdicts.</li>
<li><b>Factual TV</b>: [[c:crimewatch]] reconstructions; police “fly-on-the-wall” shows such as Police Interceptors present policing as action and pursuit.</li></ul>` },
    { h: 'Fiction: drama, film, games and music', html: `
<ul><li><b>Television drama</b>: police procedurals (Line of Duty, Happy Valley) show detectives solving serious crime; [[c:adolescence]] (2025) sparked national debate about online misogyny and youth violence.</li>
<li><b>Film</b>: gangster films can glamorise crime; films such as Kidulthood or Blue Story (briefly pulled from some cinemas in 2019 after a fight) represent youth and gang crime.</li>
<li><b>Electronic gaming</b>: games such as Grand Theft Auto let players commit crimes; critics claim they desensitise and encourage violence; research evidence is mixed.</li>
<li><b>Music</b>: drill and gangsta rap lyrics about violence ([[c:drill]]); protest songs criticising police.</li></ul>` },
    { h: 'Social media', html: `
<ul><li>Anyone can publish: eyewitness video, victims’ accounts, citizen journalism and campaigns (#MeToo; Reclaim These Streets).</li>
<li>Rumour and misinformation spread faster than official information ([[c:southport]]).</li>
<li>Police forces use social media for appeals; offenders post crimes online (fights filmed on phones); online hate speech is itself a crime.</li>
<li>Algorithms can create echo chambers that reinforce fear or prejudice.</li></ul>` }
  ],
  debate: [{ q: 'Do the media give an accurate picture of crime?', for: ['Serious cases deserve coverage; the public has a right to know.', 'Media appeals help solve crimes (Crimewatch).', 'Investigative journalism has exposed hidden crime (Rotherham, Savile, Post Office).', 'Social media gives victims a voice.'], ag: ['Violent crime is heavily over-represented (Reiner).', 'Reliance on police sources (Hillsborough).', 'Stereotyping of young people and ethnic minorities.', 'Misinformation on social media (Southport).', 'Corporate crime is under-reported.'] }],
  cases: ['reiner', 'jewkes', 'bulger', 'sunhillsborough', 'crimewatch', 'adolescence', 'drill', 'southport'],
  worked: [],
  pitfalls: ['Describing media in general without specific examples.', 'Covering only news — the specification lists six forms of media, fictional and factual.', 'Drifting into impact (AC1.5) instead of describing the representation (AC1.4).'],
  cards: [
    ['Six forms of media in AC1.4?', 'Newspaper, television, film, electronic gaming, social media, music.'],
    ['What did Reiner find about crime news?', 'It over-represents violent and sexual crime and exaggerates police success.'],
    ['What are news values?', 'Criteria that make a story newsworthy, e.g. violence, children, celebrity, proximity, risk (Jewkes).'],
    ['Factual v fictional representation?', 'Factual: news, documentaries, Crimewatch. Fictional: dramas, films, games, songs.'],
    ['How was the Bulger case represented?', 'Tabloids called the 10-year-olds “evil” and linked the crime to a horror film.'],
    ['How did social media shape the Southport riots?', 'False claims about the attacker spread online and fuelled disorder.']
  ],
  quiz: [
    { q: 'Crimewatch is an example of…', o: ['factual television representation of crime', 'electronic gaming', 'fictional drama', 'a music video'], x: 'Reconstructions of real crimes.' },
    { q: 'According to Reiner, crime news…', o: ['over-represents violent and sexual crime', 'accurately mirrors police statistics', 'focuses mostly on fraud', 'ignores murder'], x: 'Content analysis evidence.' },
    { q: 'Which is a news value identified by Jewkes?', o: ['Children', 'Complexity', 'Rarity of statistics', 'Neutrality'], x: 'Stories involving children are more newsworthy.' },
    { q: 'The Sun’s “The Truth” headline after Hillsborough relied on…', o: ['false police sources', 'CSEW data', 'court transcripts', 'social media rumours'], x: 'The claims were untrue.' }
  ],
  exam: [{ q: 'Practice task: describe how two different forms of media represent knife crime. [6]', m: 6, ms: ['newspapers — dramatic headlines; focus on young Black males; “epidemic” language', 'television — news images; documentaries; dramas', 'social media and music — drill videos; campaigns such as #knifefree', 'specific named examples', 'factual and fictional representations distinguished', 'detailed description'], bands: U1_BANDS['1.4'] }],
  tools: ['mediasort']
});

/* ---------- AC1.5 Impact of media representations ---------- */
TOPICS.push({
  id: '1.1.5', unit: '1', ref: 'AC1.5', title: 'Impact of the media on perceptions of crime',
  short: 'Moral panic, changing concerns and attitudes, perceptions of crime trends, stereotyping, responses and punishment, changing priorities',
  summary: 'Media representations have real effects. They can create moral panics, change what the public worries about, make people think crime is rising when it is falling, stereotype offenders, and push politicians and the police towards tougher responses. Your explanation should be based on theories such as moral panic, deviancy amplification and cultivation theory.',
  spec: ['Moral panic', 'Changing public concerns and attitudes', 'Perceptions of crime trends', 'Stereotyping of criminals', 'Levels of response to crime and types of punishment', 'Changing priorities and emphasis', 'Understanding based on theories'],
  learn: [
    { h: 'Moral panic and deviancy amplification', html: `
<p>A <b>moral panic</b> ([[c:stancohen]]) occurs when a group or event is defined as a threat to society’s values. The media exaggerate and distort, create <b>folk devils</b>, predict more trouble, and “moral entrepreneurs” (politicians, campaigners, police) demand action. The response can make the problem worse — the <b>deviancy amplification spiral</b> ([[c:wilkins]]).</p>
<p>Examples: Mods and Rockers (1964); “muggers” in the 1970s ([[c:hallcrisis]]); video nasties after [[c:bulger]]; “hoodies” and ASBOs (2000s); knife crime and drill music; online misogyny after [[c:adolescence]].</p>` },
    { h: 'Perceptions of crime trends and fear of crime', html: `
<p>For many years, the CSEW showed crime falling substantially from its mid-1990s peak, yet most people told the survey they believed crime nationally was rising. Heavy exposure to crime media cultivates a “mean world” view ([[c:gerbner]]). Fear of crime is highest among groups (such as older women) who are statistically least likely to be victims of violence — a <b>fear–risk paradox</b>.</p>` },
    { h: 'Stereotyping of criminals', html: `
<p>Repeated images create stereotypes of “typical” criminals: young, working-class, male and often Black or Muslim. These feed into police stop and search patterns, jury attitudes and public suspicion. The media also create “ideal victims” (Christie, 1986) and “deserving” and “undeserving” victims.</p>` },
    { h: 'Responses, punishment and priorities', html: `
<ul><li><b>Levels of response</b>: media pressure leads to rushed legislation (“knee-jerk” laws) such as the Dangerous Dogs Act 1991, or a stronger police response to one crime.</li>
<li><b>Types of punishment</b>: penal populism — politicians compete to appear tough (“prison works”, 1993); campaigns for longer sentences.</li>
<li><b>Changing priorities and emphasis</b>: agencies redirect resources to the crime in the headlines (knife crime units; violence against women and girls became a national policing priority after [[c:everard]] in 2021).</li>
<li><b>Changing public concerns and attitudes</b>: coverage can create empathy and change attitudes too (coercive control after the radio drama The Archers’ domestic abuse storyline in 2016, which led to donations to domestic abuse charities).</li></ul>` },
    { h: 'Models of media effect', html: `
<ul><li><b>Hypodermic syringe</b>: the audience is passive and directly injected with media messages (links to Bandura, copycat crime).</li>
<li><b>Cultivation</b>: long-term, cumulative effect on attitudes ([[c:gerbner]]).</li>
<li><b>Uses and gratifications</b>: audiences are active and choose media to meet their needs — so effects vary.</li></ul>
<p>Use the models to <b>evaluate</b>: the media may reinforce existing fears rather than create them.</p>` }
  ],
  debate: [{ q: 'Do the media cause fear of crime?', for: ['Cultivation research (Gerbner).', 'Public believe crime is rising when statistics show falls.', 'Moral panics followed by tougher laws (Bulger, Dangerous Dogs Act).'], ag: ['Uses and gratifications — audiences are active and critical.', 'Fear may come from personal experience and local disorder.', 'Correlation not causation — fearful people may watch more crime TV.', 'Social media now lets people challenge mainstream narratives.'] }],
  cases: ['stancohen', 'wilkins', 'hallcrisis', 'gerbner', 'bulger', 'adolescence', 'southport'],
  worked: [],
  pitfalls: ['Explaining impacts without any theory — the specification says understanding should be based on theories.', 'Using “moral panic” for any media story — it needs exaggeration, folk devils and a disproportionate reaction.', 'Only one form of media — band 2 requires a range.'],
  cards: [
    ['Who wrote Folk Devils and Moral Panics?', 'Stanley Cohen (1972) — Mods and Rockers.'],
    ['What is a folk devil?', 'A group portrayed by the media as a threat to society.'],
    ['What is deviancy amplification?', 'Media and control agency reaction increases the deviance it targets (Wilkins; Young).'],
    ['What is cultivation theory?', 'Heavy TV viewing cultivates an exaggerated view of danger (Gerbner).'],
    ['What is penal populism?', 'Politicians adopting tough punishment policies to win public support.'],
    ['What did Hall et al. argue about mugging?', 'The 1970s mugging panic created a Black folk devil to distract from economic crisis.'],
    ['What is the fear–risk paradox?', 'Groups most afraid of crime are often least at risk.']
  ],
  quiz: [
    { q: 'Which theorist studied Mods and Rockers?', o: ['Stan Cohen', 'Gerbner', 'Lombroso', 'Merton'], x: 'Folk Devils and Moral Panics (1972).' },
    { q: 'The Dangerous Dogs Act 1991 is often given as an example of…', o: ['knee-jerk legislation after media pressure', 'decriminalisation', 'a victim survey', 'restorative justice'], x: 'Rushed after dog attacks were widely reported.' },
    { q: 'Cultivation theory suggests heavy TV viewers…', o: ['overestimate the risk of violence', 'underestimate crime', 'commit more fraud', 'report more crime'], x: 'A “mean world” view.' },
    { q: 'The uses and gratifications model sees audiences as…', o: ['active in choosing and interpreting media', 'passive victims of media messages', 'unaffected by the media', 'always copying crime'], x: 'Contrasts with the hypodermic syringe model.' }
  ],
  exam: [{ q: 'Practice task: explain how media representations of knife crime could affect public perceptions of crime. [6]', m: 6, ms: ['moral panic — folk devils (young Black men, drill artists); exaggeration', 'deviancy amplification', 'perception of trends — belief that crime is always rising', 'stereotyping — impact on stop and search', 'levels of response — calls for tougher sentences; police priorities', 'theory used — Cohen, Wilkins, Gerbner', 'range of media'], bands: U1_BANDS['1.5'] }],
  tools: ['panicsteps']
});

/* ---------- AC1.6 Crime statistics ---------- */
TOPICS.push({
  id: '1.1.6', unit: '1', ref: 'AC1.6', title: 'Evaluating crime statistics',
  short: 'Home Office (police recorded) statistics and the Crime Survey for England and Wales, judged on reliability, validity, ethics, strengths and limitations, and purpose',
  summary: 'There are two main sources of information about crime in England and Wales: Home Office statistics of crimes recorded by the police, and the Crime Survey for England and Wales. You need to evaluate how each is collected and presented using five criteria: reliability, validity, ethics of research, strengths and limitations, and purpose.',
  spec: ['Home Office statistics (police recorded crime)', 'Crime Survey for England and Wales', 'Evaluation criteria: reliability, validity, ethics of research, strengths and limitations, purpose of research', 'Evaluate the methods used to collect and present both sources'],
  learn: [
    { h: 'Police recorded crime (Home Office statistics)', html: `
<p><b>How collected</b>: each of the 43 police forces in England and Wales records crimes reported to them, following the <b>Home Office Counting Rules</b> and the <b>National Crime Recording Standard</b> (2002). Data are sent to the Home Office and published quarterly by the Office for National Statistics (ONS) alongside the CSEW.</p>
<ul><li><b>Strengths</b>: covers all 43 forces; includes crimes the CSEW misses (homicide, crimes against businesses, drug offences, “victimless” crimes); published regularly; good for serious, well-reported crimes and local trends.</li>
<li><b>Limitations</b>: misses the dark figure (unreported crime); affected by police discretion and recording practices — HMIC found about 1 in 5 reported crimes were not recorded ([[c:hmic2014]]); changes in counting rules create artificial rises or falls; influenced by police priorities and targets (“gaming” the figures). The UK Statistics Authority withdrew its National Statistics status in 2014.</li></ul>` },
    { h: 'The Crime Survey for England and Wales', html: `
<p><b>How collected</b>: a <b>victimisation survey</b> ([[c:csew]]) — trained interviewers ask a random sample of adults (traditionally around 35,000 households a year) about crimes they have experienced in the past 12 months. A survey of 10–15-year-olds was added in 2009, and fraud and computer misuse in 2015.</p>
<ul><li><b>Strengths</b>: captures crime not reported to police; not affected by police recording; consistent questions allow long-term trends; asks about perceptions of crime and the police; large random sample.</li>
<li><b>Limitations</b>: excludes homicide, businesses, “victimless” crimes, people in institutions (care homes, prisons) and the homeless; relies on memory (people may forget or “telescope” events into the wrong year) and honesty; sensitive crimes are under-reported in face-to-face interviews (so a self-completion module is used); falling response rates since the pandemic have raised concerns about its reliability and its accredited status; cannot give reliable figures for small areas.</li></ul>` },
    { h: 'The five evaluation criteria', html: `
<div class="tbl"><table><tr><th>Criterion</th><th>Police recorded crime</th><th>CSEW</th></tr>
<tr><td><b>Reliability</b> (consistent, repeatable?)</td><td>Low: recording varies between forces and over time</td><td>Fairly high: standardised questions and methods, though response rates have fallen</td></tr>
<tr><td><b>Validity</b> (a true picture?)</td><td>Low for hidden crimes; high for homicide and car theft</td><td>Higher for household and personal crime; misses some crime types and groups</td></tr>
<tr><td><b>Ethics of research</b></td><td>Data protection of victims’ records</td><td>Informed consent, confidentiality, anonymity, avoiding distress for victims of sensitive crimes; support contacts given</td></tr>
<tr><td><b>Strengths and limitations</b></td><td colspan="2">See above — always give both</td></tr>
<tr><td><b>Purpose of research</b></td><td>Police performance, resource allocation, local crime maps</td><td>To measure the true extent and trends of crime and victimisation, and public attitudes</td></tr></table></div>
<p>The ONS says the CSEW is the better guide to long-term trends in the crimes it covers, while police figures are better for lower-volume, more harmful crimes and for crimes the survey does not cover.</p>` },
    { h: 'Other sources worth mentioning', html: `<p>Self-report studies (asking people what crimes they have committed); local victim surveys such as the Islington Crime Survey (left realists showed high victimisation in poor inner-city areas); Ministry of Justice court and prison statistics; Action Fraud reports. These are not required by the specification but add range.</p>` }
  ],
  debate: [{ q: 'Is the CSEW a better measure of crime than police statistics?', for: ['Captures the dark figure.', 'Not affected by police recording practices.', 'Consistent methods give reliable long-term trends.'], ag: ['Misses homicide, businesses and victimless crime.', 'Excludes vulnerable groups (homeless, care homes).', 'Memory and honesty problems; falling response rates.', 'Police figures are better for rare serious crime and local areas.'] }],
  cases: ['csew', 'hmic2014'],
  worked: [],
  pitfalls: ['Listing strengths and weaknesses without using the five criteria.', 'Mixing up reliability (consistency) and validity (truth).', 'Forgetting to refer to specific sources and data in the evaluation — band 2 requires it.', 'Saying the CSEW covers all crime.'],
  cards: [
    ['What are Home Office crime statistics?', 'Crimes recorded by the 43 police forces, following the Home Office Counting Rules.'],
    ['What is the CSEW?', 'A face-to-face victimisation survey of households about crimes experienced in the past 12 months.'],
    ['Two groups the CSEW excludes?', 'People in institutions and the homeless (also businesses; homicide victims).'],
    ['What did HMIC find in 2014?', 'About 19% of crimes reported to police were not recorded; 26% of sexual offences.'],
    ['Reliability v validity?', 'Reliability — consistency of the method; validity — whether it measures what it claims to.'],
    ['Ethical issues in the CSEW?', 'Informed consent, confidentiality, anonymity, avoiding distress.'],
    ['When were fraud and computer misuse added to the CSEW?', '2015.'],
    ['What is telescoping?', 'Recalling an event as more recent (or older) than it really was.']
  ],
  quiz: [
    { q: 'Which source includes homicide?', o: ['Police recorded crime', 'The CSEW', 'Neither', 'Only self-report studies'], x: 'Victims of homicide cannot be surveyed.' },
    { q: 'Validity refers to…', o: ['whether the data give a true picture', 'whether the method gives consistent results', 'whether the research is ethical', 'the purpose of the research'], x: 'Reliability is about consistency.' },
    { q: 'Why was National Statistics status removed from police recorded crime in 2014?', o: ['Concerns about the reliability of police recording', 'The CSEW replaced it', 'Crime rose too fast', 'It included fraud'], x: 'HMIC found widespread under-recording.' },
    { q: 'A limitation of the CSEW is that it…', o: ['relies on victims’ memory and honesty', 'depends on police recording', 'includes crimes against businesses', 'measures only reported crime'], x: 'Recall problems.' },
    { q: 'Which is an ethical issue for victim surveys?', o: ['Causing distress by asking about sensitive crimes', 'Counting rules', 'Police targets', 'Court backlogs'], x: 'Informed consent and support are needed.' }
  ],
  exam: [{ q: 'Practice task: evaluate two methods of collecting information about crime. [6]', m: 6, ms: ['police recorded crime — method; reliability and validity problems; HMIC 2014', 'CSEW — method; strengths (dark figure) and limitations (exclusions, memory)', 'ethics — consent, confidentiality, distress', 'purpose of each source', 'reference to specific sources and data', 'reasoned judgement'], bands: U1_BANDS['1.6'] }],
  tools: ['statsort']
});
