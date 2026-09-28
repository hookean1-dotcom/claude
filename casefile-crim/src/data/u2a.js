/* ==========================================================
   UNIT 2 · CRIMINOLOGICAL THEORIES — LO1 and LO2 (AC1.1 – AC2.3)
   ========================================================== */
addCases([
  // social construction
  { id: 'wolfenden', n: 'Wolfenden Report and the Sexual Offences Act 1967', y: 1967, a: '2', t: '2.1.2', c: 'Report', f: 'The Wolfenden Committee (1957) recommended that homosexual acts between consenting adult men in private should no longer be criminal. The Sexual Offences Act 1967 partly decriminalised them in England and Wales.', p: 'A clear example of the social construction of crime: an act that was criminal became legal as values changed. Equal ages of consent came in 2000 and same-sex marriage in 2013. Men with old convictions can now apply for them to be disregarded.' },
  { id: 'rvr', n: 'R v R (marital rape)', y: 1991, a: '2', t: '2.1.2', c: 'Case', f: 'A husband argued he could not be guilty of raping his wife because, under an old common law rule, marriage meant permanent consent to sex.', p: 'The House of Lords abolished the marital rape exemption. Shows judges changing the law to reflect changing social attitudes to women and marriage.' },
  { id: 'smacking', n: 'Smacking ban in Wales', y: 2022, a: '2', t: '2.1.2', c: 'Case', f: 'The Children (Abolition of Defence of Reasonable Punishment) (Wales) Act 2020 came into force in March 2022, ending the defence of “reasonable punishment” for parents who hit their children. In England the defence still exists.', p: 'Shows that laws differ by place even within the UK: the same act can be a crime in Cardiff but not in Bristol. A change reflecting new norms about children’s rights.' },
  { id: 'khat', n: 'Khat and cannabis classification', y: 2014, a: '2', t: '2.1.2', c: 'Case', f: 'Khat, a leaf chewed as a stimulant in some East African and Yemeni communities, was legal in the UK until 2014, when it was made a class C drug. Cannabis was moved from class B to C in 2004 and back to B in 2009.', p: 'Shows how drug laws vary across cultures and change over time, often in response to political and media pressure rather than new scientific evidence.' },
  // biological
  { id: 'lombroso', n: 'Lombroso: the born criminal', y: 1876, a: '2', t: '2.2.1', c: 'Study', f: 'Italian doctor Cesare Lombroso examined the bodies and skulls of Italian prisoners and soldiers. In L’uomo delinquente he claimed criminals were “atavistic” — throwbacks to an earlier stage of evolution — with features such as a sloping forehead, large jaw, long arms and unusual ears.', p: 'The first “scientific” theory of crime, moving the focus from free will to the individual’s biology. Heavily criticised: no proper control group, ignored social factors, and racist assumptions. Later research found no such physical differences.' },
  { id: 'sheldon', n: 'Sheldon: somatotypes', y: 1949, a: '2', t: '2.2.1', c: 'Study', f: 'William Sheldon compared the body shapes of 200 young men at a rehabilitation centre in Boston with college students. He classified bodies as endomorph (soft, round), mesomorph (muscular) and ectomorph (thin), and found the delinquents were more mesomorphic.', p: 'Links body type to temperament and crime. Criticised because the ratings were subjective, the samples were not comparable, and a muscular build may result from a lifestyle or be why a person is picked for violent roles.' },
  { id: 'jacobs', n: 'Jacobs: the XYY study', y: 1965, a: '2', t: '2.2.1', c: 'Study', f: 'Patricia Jacobs and colleagues tested 197 men in a secure hospital in Scotland and found that 7 had an extra Y chromosome (XYY) — far more than expected in the general population.', p: 'Suggested an XYY “supermale” was genetically prone to aggression. Later research (Witkin, 1976) found XYY men were slightly more likely to be convicted but not more violent — perhaps because of lower intelligence. Most XYY men never offend.' },
  { id: 'lange', n: 'Lange: twin study', y: 1929, a: '2', t: '2.2.1', c: 'Study', f: 'Johannes Lange studied twins where one twin had been in prison. In 10 of 13 identical (MZ) pairs the other twin had also been imprisoned, compared with 2 of 17 non-identical (DZ) pairs.', p: 'Early evidence for a genetic influence on crime. The sample was tiny, zygosity was judged by appearance, and identical twins also share a more similar environment.' },
  { id: 'christiansen', n: 'Christiansen: Danish twin study', y: 1977, a: '2', t: '2.2.1', c: 'Study', f: 'Karl Christiansen studied about 3,500 pairs of twins born in Denmark. Among male twins, concordance for criminality was about 35% for identical twins and 13% for non-identical twins.', p: 'Large sample supporting some genetic influence. But concordance is far below 100%, so environment must matter — and identical twins may be treated more alike.' },
  { id: 'mednick', n: 'Mednick: adoption study', y: 1984, a: '2', t: '2.2.1', c: 'Study', f: 'Sarnoff Mednick studied over 14,000 adoptions in Denmark. Where neither biological nor adoptive parents had convictions, about 14% of adoptees had convictions; where only the biological parents did, about 20%; where both did, about 25%.', p: 'Adoption studies separate genes from upbringing. The results suggest a genetic influence on property crime (not violent crime), but also that environment adds to the risk.' },
  { id: 'brunner', n: 'Brunner: the MAOA gene', y: 1993, a: '2', t: '2.2.1', c: 'Study', f: 'Han Brunner studied a Dutch family in which several men had a history of impulsive aggression, arson, attempted rape and exhibitionism. They had a defect in the gene for the enzyme monoamine oxidase A (MAOA), which breaks down neurotransmitters.', p: 'Suggested a specific gene linked to aggression — the so-called “warrior gene”. It is one family, and later research (Caspi, 2002) found low MAOA mattered mainly in men who were also abused as children: an interaction of genes and environment.' },
  { id: 'raine', n: 'Raine: brain scans of murderers', y: 1997, a: '2', t: '2.2.1', c: 'Study', f: 'Adrian Raine and colleagues used PET scans to compare 41 murderers who pleaded not guilty by reason of insanity with 41 matched controls. The murderers showed reduced activity in the prefrontal cortex, which controls impulses.', p: 'Evidence of brain differences in violent offenders. The sample was unusual (insanity pleas) and differences do not prove cause; the murderers were not all alike. Raises questions about free will and responsibility.' },
  // individualistic
  { id: 'bandura', n: 'Bandura: Bobo doll experiment', y: 1961, a: '2', t: '2.2.2', c: 'Study', f: 'Albert Bandura showed nursery children an adult either attacking an inflatable Bobo doll or playing quietly. Children who saw the aggressive model were much more likely to copy the aggression when later left with the doll.', p: 'Basis of social learning theory: behaviour is learned by observing and imitating role models, especially when the behaviour is rewarded (vicarious reinforcement). A lab experiment with a doll, so it lacks ecological validity.' },
  { id: 'sutherland', n: 'Sutherland: differential association', y: 1939, a: '2', t: '2.2.2', c: 'Theory', f: 'Edwin Sutherland argued criminal behaviour is learned in interaction with others, mainly in intimate personal groups. People learn techniques, motives and attitudes, and become criminal when definitions favourable to law-breaking outweigh unfavourable ones.', p: 'A learning theory that explains both street crime and white-collar crime (Sutherland also coined that term). Hard to test: the “ratio” of definitions cannot be measured.' },
  { id: 'eysenck', n: 'Eysenck: criminal personality', y: 1964, a: '2', t: '2.2.2', c: 'Theory', f: 'Hans Eysenck argued personality has a biological basis. Criminals score high on extraversion (craving stimulation), neuroticism (emotional instability) and, later, psychoticism (cold, aggressive). Extraverts and neurotics are harder to condition, so they learn rules less well.', p: 'Combines biology and learning. Supported by some studies, but Farrington (1982) found psychoticism, not extraversion, was most linked to offending; personality tests are self-report and may be affected by being in prison.' },
  { id: 'bowlby', n: 'Bowlby: 44 juvenile thieves', y: 1944, a: '2', t: '2.2.2', c: 'Study', f: 'John Bowlby compared 44 young thieves referred to a child guidance clinic with 44 non-offending children. Of 14 thieves he diagnosed as “affectionless psychopaths”, 12 had experienced prolonged separation from their mother in early childhood.', p: 'Supports maternal deprivation theory: early separation damages emotional development and conscience. Based on retrospective interviews and Bowlby’s own diagnoses; confuses separation with other family problems.' },
  { id: 'freud', n: 'Freud: the psychodynamic approach', y: 1923, a: '2', t: '2.2.2', c: 'Theory', f: 'Sigmund Freud described the personality as the id (instincts), ego (reality) and superego (conscience), formed in early childhood. Later writers argued crime results from a weak, deviant or over-harsh superego.', p: 'Links crime to childhood experiences and unconscious conflict. Very difficult to test scientifically; based on case studies.' },
  { id: 'kohlberg', n: 'Kohlberg: moral development', y: 1958, a: '2', t: '2.2.2', c: 'Theory', f: 'Lawrence Kohlberg described three levels of moral reasoning — pre-conventional (avoid punishment, self-interest), conventional (approval, law and order) and post-conventional (principles). Studies such as Palmer and Hollin (1998) found offenders reasoned at less mature levels than non-offenders.', p: 'Explains crime as a failure of moral reasoning. Reasoning does not always predict behaviour, and the theory is based mainly on male samples.' },
  { id: 'farrington', n: 'Cambridge Study in Delinquent Development', y: 1961, a: '2', t: '2.2.2', c: 'Study', f: 'A longitudinal study following 411 boys from South London from age 8 into later life, led by Donald West and then David Farrington. It identified risk factors for offending such as low income, poor parenting, a convicted parent, low school achievement and impulsiveness.', p: 'Strong evidence that many individual and social risk factors interact. It supports early intervention policies. The sample was all male, white and working-class from one area.' },
  // sociological
  { id: 'durkheim', n: 'Durkheim: crime is normal', y: 1895, a: '2', t: '2.2.3', c: 'Theory', f: 'Émile Durkheim argued that crime exists in every society and is normal and inevitable. It has functions: it reinforces shared values (boundary maintenance) and allows social change. Too much crime results from anomie — normlessness during rapid change.', p: 'The foundation of functionalism. Explains why societies need some crime, but not why particular people commit it, and ignores harm to victims.' },
  { id: 'merton', n: 'Merton: strain theory', y: 1938, a: '2', t: '2.2.3', c: 'Theory', f: 'Robert Merton argued that American society sets everyone the goal of material success but blocks legitimate means for many. The strain leads to five adaptations: conformity, innovation (crime for money), ritualism, retreatism (drop-outs, addicts) and rebellion.', p: 'Explains property crime among poorer groups and some white-collar crime (innovation). Does not explain non-economic crime such as vandalism or violence, or why most people who experience strain do not offend.' },
  { id: 'acohen', n: 'Albert Cohen: status frustration', y: 1955, a: '2', t: '2.2.3', c: 'Theory', f: 'Albert Cohen argued working-class boys who fail at school suffer status frustration. They form delinquent subcultures that invert mainstream values, gaining status through non-utilitarian crime such as vandalism and joyriding.', p: 'Explains group and non-financial delinquency. Assumes boys start with middle-class values and ignores female delinquency.' },
  { id: 'hirschi', n: 'Hirschi: social bond theory', y: 1969, a: '2', t: '2.2.3', c: 'Theory', f: 'Travis Hirschi asked why most people do not commit crime. He argued four social bonds keep us conforming: attachment to others, commitment to conventional goals, involvement in conventional activities and belief in the rules.', p: 'A control theory — links to Unit 4 social control. Supported by self-report studies of young people, but less good at explaining white-collar crime by people with strong bonds.' },
  { id: 'becker', n: 'Becker: labelling theory', y: 1963, a: '2', t: '2.2.3', c: 'Theory', f: 'Howard Becker argued in Outsiders that deviance is not a quality of the act but a label successfully applied by others. Once labelled, a person may be seen only through that label — a master status — and may join a deviant group.', p: 'The key interactionist theory. Shows the role of powerful “moral entrepreneurs” and agencies in creating crime. Criticised for ignoring why people commit primary deviance and for making offenders seem like victims.' },
  { id: 'lemert', n: 'Lemert: primary and secondary deviance', y: 1951, a: '2', t: '2.2.3', c: 'Theory', f: 'Edwin Lemert distinguished primary deviance (acts not yet labelled, which have little effect on the person’s identity) from secondary deviance (further deviance that results from accepting the label).', p: 'Explains how labelling can cause a deviant career — a self-fulfilling prophecy. Supports diverting young people away from the formal criminal justice system.' },
  { id: 'chambliss', n: 'Chambliss: Marxist view of law', y: 1975, a: '2', t: '2.2.3', c: 'Theory', f: 'William Chambliss argued that laws protect the property and interests of the ruling class, and that law enforcement is selective: the crimes of the poor are policed while the crimes of the powerful are ignored.', p: 'Marxism explains the under-policing of white-collar and corporate crime. Critics say it ignores laws that protect everyone and the harm working-class crime does to working-class victims.' },
  { id: 'leayoung', n: 'Lea and Young: left realism', y: 1984, a: '2', t: '2.2.3', c: 'Theory', f: 'John Lea and Jock Young argued crime is a real problem for working-class victims. It is caused by relative deprivation (feeling deprived compared with others), marginalisation (having no voice) and subcultures. The “square of crime” is the offender, the victim, the state and the public.', p: 'Left realism takes crime seriously while seeking social causes. It led to multi-agency approaches and local victim surveys. Criticised for relying on victim surveys and not explaining corporate crime.' },
  { id: 'wilsonkelling', n: 'Wilson and Kelling: broken windows', y: 1982, a: '2', t: '2.2.3', c: 'Theory', f: 'James Q. Wilson and George Kelling argued that visible signs of disorder, such as broken windows, graffiti and begging, show that no one is in control. This leads to more serious crime unless the disorder is dealt with quickly.', p: 'A right realist theory that inspired zero tolerance policing in New York in the 1990s. Critics say crime also fell in cities without zero tolerance, and the approach damaged community relations.' },
  { id: 'murray', n: 'Murray: the underclass', y: 1990, a: '2', t: '2.2.3', c: 'Theory', f: 'Charles Murray argued that generous welfare had created an underclass of people dependent on benefits, with many lone-parent families. Boys growing up without fathers lacked discipline and role models and turned to crime.', p: 'A right realist theory. Very controversial: critics say it blames the poor and single mothers and ignores structural causes such as unemployment.' },
  { id: 'clarke', n: 'Clarke: rational choice and situational crime prevention', y: 1980, a: '2', t: '2.2.3', c: 'Theory', f: 'Ronald Clarke argued offenders make rational choices, weighing the costs and benefits of crime. Crime can be prevented by changing situations — increasing effort and risk and reducing rewards (target hardening, surveillance, locks, design).', p: 'Right realist ideas behind CCTV, alley-gating and car immobilisers. Criticised for ignoring causes and for displacement: crime may move elsewhere.' }
]);

/* ---------- AC1.1 Criminal behaviour and deviance ---------- */
TOPICS.push({
  id: '2.1.1', unit: '2', ref: 'AC1.1', title: 'Criminal behaviour and deviance',
  short: 'Social and legal definitions of crime, formal and informal sanctions, norms, values and moral codes, acts that are criminal, deviant or both',
  summary: 'Crime and deviance overlap but are not the same. Crime is behaviour that breaks the criminal law and can be punished by the state; deviance is behaviour that breaks a society’s norms and values. This criterion asks you to compare them, including how each is defined, the sanctions that follow and the implications of committing a criminal and/or deviant act.',
  spec: ['Criminal behaviour: social definition, legal definition, formal sanctions, variety of criminal acts', 'Deviance: norms, moral codes and values, informal and formal sanctions, forms of deviance', 'Acts that are criminal, deviant, or both', 'The implications of committing a criminal and/or deviant act', 'Synoptic: the impact of reporting on public perceptions of crime and deviance (Unit 1)'],
  learn: [
    { h: 'Defining crime', html: `
<ul><li><b>Legal definition</b>: an act (or omission) that breaks the criminal law and can be followed by criminal proceedings and punishment by the state. Most crimes require a guilty act (<i>actus reus</i>) and a guilty mind (<i>mens rea</i>).</li>
<li><b>Social definition</b>: behaviour that society regards as harmful and deserving punishment. This changes over time and between cultures (AC1.2), and some harmful acts (e.g. corporate harm) are not always treated as crime.</li>
<li><b>Variety of criminal acts</b>: against the person (murder, assault), property (theft, burglary, criminal damage), public order, sexual offences, drug offences, road traffic offences, fraud, e-crime, state and corporate crime.</li>
<li><b>Formal sanctions</b>: official punishments from the state — imprisonment, community orders, fines, discharges (Unit 4).</li></ul>` },
    { h: 'Defining deviance', html: `
<ul><li><b>Norms</b> are unwritten rules of expected behaviour in a situation (queueing, not shouting in a library). <b>Values</b> are general beliefs about what is important (honesty, respect for life). <b>Moral codes</b> are sets of principles about right and wrong, often from religion or culture. <b>Mores</b> are strong norms with moral significance.</li>
<li><b>Deviance</b> is behaviour that goes against the norms and values of a group or society. It can be positive (heroism) as well as negative, and depends on context — killing is deviant, but not for a soldier in war.</li>
<li><b>Informal sanctions</b>: disapproval by family, friends, peers or the community — gossip, being ignored, being told off.</li>
<li><b>Formal sanctions</b> can also apply to non-criminal deviance: school exclusions, workplace dismissal, sports bans.</li></ul>` },
    { h: 'Criminal, deviant or both?', html: `
<div class="tbl"><table><tr><th></th><th>Examples</th><th>Implications</th></tr>
<tr><td><b>Deviant but not criminal</b></td><td>Swearing at a funeral, unusual body modification, lying to friends, cheating in a game</td><td>Informal sanctions only; stigma; possibly exclusion from a group</td></tr>
<tr><td><b>Criminal but not (very) deviant</b></td><td>Speeding, illegal downloading, under-age drinking, minor tax evasion, cannabis use in some groups</td><td>Formal sanctions if caught; little social disapproval; often unreported</td></tr>
<tr><td><b>Both</b></td><td>Murder, rape, robbery, racist assault</td><td>Formal and informal sanctions; loss of liberty, reputation, job, relationships; a criminal record</td></tr></table></div>
<p><b>Implications</b> of a criminal act go beyond the sentence: a criminal record affects employment (DBS checks), travel, insurance and housing, and may lead to labelling (AC2.3).</p>` },
    { h: 'Synoptic link: reporting and perception', html: `<p>What the public sees as serious crime or deviance is shaped by media reporting and campaigns (Unit 1). Moral panics can make minor deviance appear dangerous (Cohen’s Mods and Rockers), while under-reported crimes such as white-collar crime may not be seen as deviant at all.</p>` }
  ],
  debate: [{ q: 'Is the distinction between crime and deviance useful?', for: ['Makes clear which acts the state can punish.', 'Shows that not all norm-breaking needs the law.', 'Explains why some crimes are unreported (not seen as deviant).'], ag: ['The boundary keeps changing (social construction).', 'Who defines deviance? Powerful groups (Becker).', 'Many harmful acts are neither criminal nor deviant (some corporate practices).'] }],
  cases: ['wolfenden', 'rvr'],
  worked: [],
  pitfalls: ['Defining crime and deviance without examples.', 'Saying all crime is deviant or all deviance is criminal.', 'Forgetting sanctions — formal and informal — and the implications of an act.'],
  cards: [
    ['Legal definition of crime?', 'An act or omission that breaks the criminal law and can be punished by the state.'],
    ['What is deviance?', 'Behaviour that goes against the norms and values of a group or society.'],
    ['What are norms?', 'Unwritten rules of expected behaviour in particular situations.'],
    ['What are values?', 'General beliefs about what is important or desirable.'],
    ['Formal v informal sanctions?', 'Formal: official punishments by the state or institutions. Informal: disapproval by family, peers and community.'],
    ['Example of criminal but not deviant?', 'Speeding or illegal downloading.'],
    ['Example of deviant but not criminal?', 'Swearing at a funeral or extreme body modification.'],
    ['What is actus reus and mens rea?', 'The guilty act and the guilty mind.']
  ],
  quiz: [
    { q: 'Which act is deviant but not criminal?', o: ['Laughing loudly during a funeral', 'Shoplifting', 'Speeding', 'Assault'], x: 'Breaks norms only.' },
    { q: 'An informal sanction is…', o: ['being ignored by friends', 'a prison sentence', 'a fine', 'a community order'], x: 'Given by people, not the state.' },
    { q: 'A strong norm with moral significance is sometimes called…', o: ['a more', 'a statute', 'a sanction', 'a label'], x: 'Mores (plural).' },
    { q: 'Which is a formal sanction for deviance that is not a crime?', o: ['Exclusion from school', 'A frown', 'Gossip', 'Being unfriended'], x: 'Imposed by an institution.' }
  ],
  exam: [
    { q: 'Using the scenario, compare criminal behaviour and deviance. [6]', m: 6, scen: 'Josh, 17, was excluded from school for repeatedly swearing at teachers. At the weekend he was caught by police drinking alcohol in a park and was later cautioned for damaging a bus shelter.', ms: ['definitions of crime (legal) and deviance (norms and values)', 'swearing — deviant, not criminal; formal sanction by school (exclusion)', 'drinking under 18 in public — deviant for his age; alcohol can be confiscated (limited criminal element)', 'criminal damage — criminal and deviant; formal sanction (caution)', 'informal sanctions — family and peers', 'implications — criminal record, labelling'] },
    { q: 'Describe one formal sanction and one informal sanction. [2]', m: 2, ms: ['formal — e.g. a fine or community order imposed by a court', 'informal — e.g. disapproval or exclusion by family or peers'] }
  ],
  tools: ['deviantsort2']
});

/* ---------- AC1.2 Social construction of criminality ---------- */
TOPICS.push({
  id: '2.1.2', unit: '2', ref: 'AC1.2', title: 'The social construction of criminality',
  short: 'How laws change from culture to culture and over time, are applied differently according to circumstances, and why they differ by place, time and culture',
  summary: 'Crime is not fixed. What counts as a crime is decided by people in a particular society at a particular time — it is “socially constructed”. This criterion asks you to explain how and why laws differ between cultures and places, change over time, and are applied differently depending on the circumstances.',
  spec: ['How laws change from culture to culture', 'How laws change over time', 'How laws are applied differently according to the circumstances in which actions occur', 'Why laws are different according to place, time and culture', 'Synoptic: how media and campaigns for change contribute to social constructions of criminality and unreported crime'],
  learn: [
    { h: 'Laws differ between cultures and places', html: `
<ul><li><b>Alcohol</b> is legal in the UK but prohibited in countries such as Saudi Arabia; it was banned in the USA during Prohibition (1920–33).</li>
<li><b>Cannabis</b> is illegal in the UK but legal for recreational use in Canada, Uruguay and several US states.</li>
<li><b>Homosexuality</b> is legal in the UK but still criminal in dozens of countries, and punishable by death in a few.</li>
<li><b>Smacking</b> children is a crime in Wales (since 2022) and Scotland (2020) but a defence of reasonable punishment still exists in England ([[c:smacking]]).</li>
<li><b>Assisted dying</b> is legal in Switzerland, the Netherlands, Canada and several US and Australian states, but assisting suicide is a crime in England and Wales (Suicide Act 1961).</li>
<li><b>Khat</b> is used socially in some East African communities but has been a class C drug in the UK since 2014 ([[c:khat]]).</li></ul>` },
    { h: 'Laws change over time', html: `
<div class="tbl"><table><tr><th>Now legal (decriminalised)</th><th>Now criminal (criminalised)</th></tr>
<tr><td>Suicide (1961); homosexual acts ([[c:wolfenden]], 1967); abortion within limits (1967); blasphemy abolished (2008)</td><td>Marital rape ([[c:rvr]], 1991); drink-driving limits (1967); handguns (1997); coercive control (2015); psychoactive substances (“legal highs”, 2016); upskirting (2019); non-fatal strangulation (2022)</td></tr></table></div>
<p>Change happens through Parliament (statutes), judges (common law, as in R v R) and campaigns (Unit 1).</p>` },
    { h: 'Laws applied differently according to circumstances', html: `
<ul><li><b>Killing</b> can be murder, manslaughter, lawful self-defence, or legal in war — depending on the circumstances.</li>
<li><b>Age</b>: the age of criminal responsibility is 10 in England and Wales (12 in Scotland since 2021); alcohol, sex, driving and tobacco have age limits.</li>
<li><b>Context</b>: nudity is legal on a naturist beach but may be an offence in the street; carrying a knife may be lawful with a “good reason” (e.g. for work).</li>
<li><b>Discretion</b>: police and prosecutors decide whether to take action; Cicourel (1968) found middle-class young people were more likely to be let off — laws can be applied differently to different groups.</li></ul>` },
    { h: 'Why laws differ', html: `
<ul><li><b>Religion and culture</b> — moral codes shape laws (alcohol in Islamic states).</li>
<li><b>Changing values and norms</b> — attitudes to sexuality, women’s rights and children’s rights.</li>
<li><b>Power</b> — Marxists and interactionists argue powerful groups shape the law in their interests (Becker’s moral entrepreneurs; Chambliss).</li>
<li><b>Media and campaigns</b> — moral panics and pressure groups push for new laws (synoptic link to Unit 1: upskirting, Sarah’s Law).</li>
<li><b>New technology</b> — new crimes such as hacking and online abuse.</li>
<li><b>Evidence of harm</b> — drink-driving, smoking in cars with children.</li></ul>` }
  ],
  debate: [{ q: 'Is all crime socially constructed?', for: ['Laws vary hugely across time and place.', 'The same act (killing) can be lawful or criminal.', 'Powerful groups decide what is criminal (Becker; Chambliss).'], ag: ['Some acts (murder, rape, theft) are crimes in almost every society.', 'Harm to victims is real, not just a label.', 'Realists argue crime must be taken seriously as a real problem.'] }],
  cases: ['wolfenden', 'rvr', 'smacking', 'khat'],
  worked: [],
  pitfalls: ['Giving examples without explaining why the law differs or changed.', 'Covering only time — the specification also asks about culture, place and circumstances.', 'Forgetting the synoptic link to media and campaigns.'],
  cards: [
    ['What does “socially constructed” mean?', 'Crime is defined by people in a particular society and time, not fixed.'],
    ['Give an example of a law changing over time.', 'Homosexual acts decriminalised in 1967; marital rape criminalised in 1991.'],
    ['Give an example of a law differing by place within the UK.', 'Smacking is a crime in Wales (2022) and Scotland but not in England.'],
    ['Age of criminal responsibility in England and Wales?', '10.'],
    ['Give an example of circumstances changing whether an act is criminal.', 'Killing in self-defence or war v murder.'],
    ['What did Cicourel find?', 'Police and courts treated middle-class delinquents more leniently — laws applied differently.']
  ],
  quiz: [
    { q: 'Which law is an example of criminalisation over time?', o: ['The upskirting offence (2019)', 'The Suicide Act 1961', 'The Sexual Offences Act 1967', 'The Abortion Act 1967'], x: 'The others decriminalised acts.' },
    { q: 'In which part of the UK is smacking a child a crime?', o: ['Wales', 'England only', 'Northern Ireland only', 'Nowhere'], x: 'Since March 2022 (and Scotland since 2020).' },
    { q: 'R v R (1991) removed…', o: ['the marital rape exemption', 'the death penalty', 'the offence of suicide', 'jury trials'], x: 'A judge-made change.' },
    { q: 'Which explanation of differences in law is Marxist?', o: ['Laws protect the interests of the ruling class', 'Laws reflect shared values', 'Laws come from genes', 'Laws are random'], x: 'Chambliss.' }
  ],
  exam: [{ q: 'Explain why laws differ according to place, time and culture. Use examples. [6]', m: 6, ms: ['definition of social construction', 'place/culture — alcohol, cannabis, homosexuality, smacking in Wales', 'time — decriminalisation (1961, 1967) and criminalisation (1991, 2015, 2019)', 'circumstances — self-defence, age of criminal responsibility', 'reasons — religion, values, power, media and campaigns, technology', 'synoptic link to Unit 1 campaigns'] }],
  tools: ['constructsort']
});

/* ---------- AC2.1 Biological theories ---------- */
TOPICS.push({
  id: '2.2.1', unit: '2', ref: 'AC2.1', title: 'Biological theories of criminality',
  short: 'Genetic theories (Jacobs XYY, twin and adoption studies, MAOA) and physiological theories (Lombroso, Sheldon, brain abnormalities)',
  summary: 'Biological theories argue that some people are born with, or develop, physical characteristics that make them more likely to commit crime. Genetic theories look at inherited factors; physiological theories look at the body and brain. You need to describe a range of them and their key studies.',
  spec: ['Genetic theories, e.g. Jacobs’ XYY study, twin and adoption studies', 'Physiological theories, e.g. Lombroso, Sheldon', 'Other biological explanations such as brain abnormalities and neurochemistry'],
  learn: [
    { h: 'Physiological theories', html: `
<ul><li><b>Lombroso</b> ([[c:lombroso]]): criminals are <b>atavistic</b> — biological throwbacks with distinctive physical features (stigmata) such as a sloping forehead, large jaw, high cheekbones, extra toes or nipples and insensitivity to pain. He originally claimed most criminals were born criminal, later about a third.</li>
<li><b>Sheldon</b> ([[c:sheldon]]): three body types (somatotypes) linked to temperament. <b>Mesomorphs</b> (muscular, athletic) are aggressive and adventurous; <b>endomorphs</b> (soft, round) relaxed and sociable; <b>ectomorphs</b> (thin, fragile) introverted. Delinquents were more mesomorphic.</li>
<li><b>Brain abnormalities</b>: damage to or reduced activity in the <b>prefrontal cortex</b>, which controls impulses ([[c:raine]]). Head injuries are more common among prisoners than the general population.</li>
<li><b>Neurochemistry</b>: low serotonin is linked to impulsive aggression; high testosterone to dominance and aggression.</li></ul>` },
    { h: 'Genetic theories', html: `
<ul><li><b>Chromosome abnormality</b>: [[c:jacobs]] found an unusually high number of XYY men in a secure hospital, suggesting an extra Y chromosome makes men more aggressive.</li>
<li><b>Twin studies</b> compare concordance rates (both twins offending) in identical (MZ, 100% shared genes) and non-identical (DZ, about 50%) twins. Higher concordance in MZ twins suggests genetic influence ([[c:lange]]; [[c:christiansen]]).</li>
<li><b>Adoption studies</b> compare adopted children with their biological and adoptive parents. If they resemble their biological parents, genes are implicated ([[c:mednick]]).</li>
<li><b>Specific genes</b>: [[c:brunner]] linked a defect in the MAOA gene to aggression in one family.</li></ul>` },
    { h: 'What biological theories have in common', html: `<p>They are <b>positivist</b>: crime is caused by factors outside the person’s control rather than free choice. They focus on the <b>individual</b> offender and suggest criminals are fundamentally different from non-criminals. This has implications for policy (AC4.1): if crime is biological, solutions could include medical treatment, screening or even eugenics — raising serious ethical concerns.</p>` }
  ],
  debate: [{ q: 'How convincing are biological explanations?', for: ['Twin and adoption studies show some genetic influence.', 'Brain imaging (Raine) links brain function to violence.', 'Explain why some people are more impulsive or aggressive.'], ag: ['Concordance is never 100%, so environment matters.', 'Early studies had poor methods (Lombroso — no control group).', 'Can’t explain white-collar or socially constructed crime.', 'Deterministic; risk of discrimination and eugenics.', 'Gene–environment interaction (Caspi) — biology alone is not enough.'] }],
  cases: ['lombroso', 'sheldon', 'jacobs', 'lange', 'christiansen', 'mednick', 'brunner', 'raine'],
  worked: [],
  pitfalls: ['Describing Lombroso and Sheldon without the genetic theories.', 'Mixing up MZ (identical) and DZ (non-identical) twins.', 'Saying twin studies prove crime is genetic — they suggest an influence.', 'Evaluating when the question only says “describe”.'],
  cards: [
    ['What did Lombroso mean by atavism?', 'Criminals are biological throwbacks to an earlier stage of evolution.'],
    ['Sheldon’s three somatotypes?', 'Endomorph (soft, round), mesomorph (muscular), ectomorph (thin). Mesomorphs linked to delinquency.'],
    ['What did Jacobs (1965) find?', 'An unusually high proportion of XYY men in a secure hospital (7 of 197).'],
    ['MZ v DZ twins?', 'MZ (identical) share 100% of genes; DZ (non-identical) about 50%.'],
    ['What is a concordance rate?', 'How often both twins share a characteristic, such as a criminal record.'],
    ['Christiansen’s findings for male twins?', 'About 35% concordance for MZ, 13% for DZ.'],
    ['What did Mednick’s adoption study show?', 'Adoptees were more likely to offend if their biological parents had convictions.'],
    ['What did Raine find?', 'Murderers had reduced prefrontal cortex activity.'],
    ['What is the MAOA gene?', 'A gene for an enzyme that breaks down neurotransmitters; a defect was linked to aggression (Brunner).']
  ],
  quiz: [
    { q: 'Which theorist described criminals as atavistic?', o: ['Lombroso', 'Sheldon', 'Jacobs', 'Bandura'], x: 'L’uomo delinquente, 1876.' },
    { q: 'Which body type did Sheldon link to delinquency?', o: ['Mesomorph', 'Endomorph', 'Ectomorph', 'Somatomorph'], x: 'Muscular and athletic.' },
    { q: 'Adoption studies help separate the effects of…', o: ['genes and environment', 'age and gender', 'police and courts', 'media and campaigns'], x: 'Biological v adoptive parents.' },
    { q: 'In a twin study, higher concordance for MZ than DZ twins suggests…', o: ['a genetic influence', 'no genetic influence', 'labelling', 'strain'], x: 'MZ share all their genes.' },
    { q: 'Jacobs’ study focused on…', o: ['men with an extra Y chromosome', 'body types', 'the prefrontal cortex', 'adopted children'], x: 'XYY.' }
  ],
  exam: [
    { q: 'Describe one genetic theory of criminality. [4]', m: 4, ms: ['identifies a genetic theory (XYY / twin studies / adoption studies / MAOA)', 'describes the key idea', 'refers to research evidence (e.g. Jacobs; Christiansen; Mednick)', 'accurate detail'] },
    { q: 'Describe how physiological theories explain criminality. [4]', m: 4, ms: ['Lombroso — atavism, stigmata', 'Sheldon — mesomorphs', 'brain abnormalities — prefrontal cortex (Raine)', 'accurate detail'] }
  ],
  tools: ['theorysort']
});

/* ---------- AC2.2 Individualistic theories ---------- */
TOPICS.push({
  id: '2.2.2', unit: '2', ref: 'AC2.2', title: 'Individualistic theories of criminality',
  short: 'Learning theories (Bandura, Sutherland), psychodynamic theories (Freud, Bowlby) and psychological theories (Eysenck, Kohlberg)',
  summary: 'Individualistic theories look for the causes of crime in the individual’s mind, personality and experiences rather than their biology or the structure of society. They include learning theories, psychodynamic theories and psychological theories of personality and moral development.',
  spec: ['Learning theories, e.g. Bandura (social learning), Sutherland (differential association)', 'Psychodynamic theories, e.g. Freud, Bowlby', 'Psychological theories, e.g. Eysenck (personality), Kohlberg (moral development)'],
  learn: [
    { h: 'Learning theories', html: `
<ul><li><b>Social learning theory</b> ([[c:bandura]]): people learn behaviour by <b>observing and imitating</b> role models — parents, peers, celebrities, media characters. Imitation is more likely if the model is similar, high status or rewarded (<b>vicarious reinforcement</b>). Four conditions: attention, retention, reproduction, motivation.</li>
<li><b>Differential association</b> ([[c:sutherland]]): crime is learned through interaction with others in intimate groups — techniques, motives, rationalisations. A person becomes criminal when exposure to definitions favourable to crime outweighs unfavourable definitions.</li>
<li><b>Operant conditioning</b> (Skinner): behaviour that is rewarded (money, status, excitement) is repeated; behaviour that is punished is less likely.</li></ul>` },
    { h: 'Psychodynamic theories', html: `
<ul><li><b>Freud</b> ([[c:freud]]): the personality has three parts — the <b>id</b> (selfish instincts, the pleasure principle), the <b>ego</b> (reality, balancing) and the <b>superego</b> (conscience, internalised morality from parents). Crime may result from a <b>weak superego</b> (id dominates), a <b>deviant superego</b> (internalised criminal values from criminal parents) or an <b>over-harsh superego</b> (unconscious guilt leading people to seek punishment).</li>
<li><b>Bowlby</b> ([[c:bowlby]]): <b>maternal deprivation</b> — prolonged separation from the mother in the first years of life can cause <b>affectionless psychopathy</b>: a lack of guilt, empathy and remorse.</li></ul>` },
    { h: 'Psychological theories', html: `
<ul><li><b>Eysenck</b> ([[c:eysenck]]): personality dimensions — extraversion (E), neuroticism (N), psychoticism (P) — are partly inherited. High E and N individuals are harder to condition, so they do not learn to avoid anti-social behaviour; high P individuals are cold and aggressive.</li>
<li><b>Kohlberg</b> ([[c:kohlberg]]): offenders are more likely to reason at the <b>pre-conventional</b> level — avoiding punishment and pursuing self-interest — rather than following social rules or principles.</li>
<li><b>Other ideas</b>: low IQ; cognitive distortions (hostile attribution bias — seeing hostility in others’ neutral behaviour); psychopathy (Hare’s checklist); risk factors from longitudinal research ([[c:farrington]]).</li></ul>` }
  ],
  debate: [{ q: 'How well do individualistic theories explain crime?', for: ['Social learning is supported by experiments (Bandura) and explains copying peers.', 'Explain why only some people in the same area offend.', 'Eysenck combines biology and learning.', 'Led to treatment programmes (CBT, anger management).'], ag: ['Lab experiments lack ecological validity.', 'Freud is untestable.', 'Bowlby’s study used retrospective data.', 'Ignore social structure, poverty and power.', 'Do not explain socially constructed or white-collar crime well.'] }],
  cases: ['bandura', 'sutherland', 'freud', 'bowlby', 'eysenck', 'kohlberg', 'farrington'],
  worked: [],
  pitfalls: ['Confusing Bandura (observation and imitation) with Sutherland (learning in intimate groups).', 'Forgetting that Eysenck’s theory is partly biological.', 'Describing Freud without linking the superego to crime.'],
  cards: [
    ['What is social learning theory?', 'Learning by observing and imitating role models, especially when they are rewarded (Bandura).'],
    ['What is vicarious reinforcement?', 'Learning from seeing others rewarded or punished.'],
    ['What is differential association?', 'Crime is learned in intimate groups when definitions favourable to crime outweigh unfavourable ones (Sutherland).'],
    ['Freud’s three parts of personality?', 'Id (instincts), ego (reality), superego (conscience).'],
    ['Three kinds of superego linked to crime?', 'Weak, deviant and over-harsh.'],
    ['What is maternal deprivation?', 'Long separation from the mother in early childhood, which Bowlby linked to affectionless psychopathy.'],
    ['Eysenck’s three personality dimensions?', 'Extraversion, neuroticism, psychoticism.'],
    ['Kohlberg’s three levels?', 'Pre-conventional, conventional, post-conventional.']
  ],
  quiz: [
    { q: 'Which theorist is linked to the Bobo doll experiment?', o: ['Bandura', 'Eysenck', 'Freud', 'Merton'], x: '1961.' },
    { q: 'An affectionless psychopath was described by…', o: ['Bowlby', 'Sutherland', 'Kohlberg', 'Becker'], x: '44 juvenile thieves.' },
    { q: 'According to Eysenck, extraverts are…', o: ['harder to condition', 'easier to condition', 'always law-abiding', 'atavistic'], x: 'They crave stimulation.' },
    { q: 'A weak superego means…', o: ['the id’s selfish impulses are not controlled', 'the person feels too much guilt', 'the person copies role models', 'the person has an extra chromosome'], x: 'Psychodynamic.' },
    { q: 'Differential association says crime is learned…', o: ['in intimate personal groups', 'from TV only', 'from genes', 'at birth'], x: 'Sutherland.' }
  ],
  exam: [{ q: 'Describe two individualistic theories of criminality. [6]', m: 6, ms: ['learning theory — Bandura: observation, imitation, vicarious reinforcement; Bobo doll', 'or Sutherland — differential association', 'psychodynamic — Freud: id, ego, superego; weak/deviant/harsh superego; Bowlby', 'psychological — Eysenck: E, N, P; conditioning', 'accurate detail and research'] }],
  tools: ['theorysort']
});

/* ---------- AC2.3 Sociological theories ---------- */
TOPICS.push({
  id: '2.2.3', unit: '2', ref: 'AC2.3', title: 'Sociological theories of criminality',
  short: 'Social structure theories (functionalism, strain, subculture, control, Marxism), interactionism (labelling) and realism (left and right)',
  summary: 'Sociological theories look for the causes of crime in society rather than the individual: in social structures, in how people and agencies interact, and in real conditions in communities. You need to summarise the key points of a range: functionalism and strain, Marxism, labelling, and left and right realism.',
  spec: ['Social structure theories, e.g. functionalism (Durkheim, Merton), subcultural and control theories, Marxism', 'Interactionism, e.g. labelling (Becker, Lemert)', 'Realism: left realism and right realism'],
  learn: [
    { h: 'Functionalism and strain', html: `
<ul><li><b>Durkheim</b> ([[c:durkheim]]): crime is normal and functional — boundary maintenance (punishment reminds everyone of the rules), social change (today’s deviant may be tomorrow’s reformer), and a warning light that something is wrong. Too much crime comes from <b>anomie</b> (normlessness).</li>
<li><b>Merton</b> ([[c:merton]]): <b>strain</b> between cultural goals and legitimate means. Adaptations: conformity, <b>innovation</b> (accept the goal, use illegal means — theft, fraud), ritualism, retreatism, rebellion.</li>
<li><b>Subcultural theories</b>: [[c:acohen]] — status frustration leads working-class boys to form delinquent subcultures; Cloward and Ohlin (1960) — criminal, conflict and retreatist subcultures depend on access to illegitimate opportunities.</li>
<li><b>Control theory</b>: [[c:hirschi]] — crime happens when social bonds (attachment, commitment, involvement, belief) are weak.</li></ul>` },
    { h: 'Marxism', html: `
<ul><li>Capitalist society is based on exploitation, which generates crime at all levels: poverty drives utilitarian crime, and greed drives white-collar crime (Gordon).</li>
<li><b>Law-making</b> serves the ruling class — laws protect private property ([[c:chambliss]]); Snider argued governments are reluctant to regulate businesses.</li>
<li><b>Selective law enforcement</b>: the crimes of the poor are policed; the crimes of the powerful (corporate crime, tax avoidance) are under-policed and lightly punished.</li>
<li><b>Ideological functions</b>: focusing on working-class crime distracts from exploitation (links to Hall’s mugging panic in Unit 1).</li></ul>` },
    { h: 'Interactionism: labelling', html: `
<ul><li>No act is deviant in itself — deviance is behaviour that people so label ([[c:becker]]).</li>
<li>Agencies label some groups more than others: police stereotypes of “typical delinquents” (young, working-class, ethnic minority).</li>
<li>A label can become a <b>master status</b>; the person may accept it — <b>self-fulfilling prophecy</b> — leading to <b>secondary deviance</b> ([[c:lemert]]).</li>
<li><b>Deviancy amplification</b>: the reaction increases deviance (Wilkins; Young; links to Unit 1 media).</li></ul>` },
    { h: 'Realism', html: `
<div class="tbl"><table><tr><th></th><th>Right realism</th><th>Left realism</th></tr>
<tr><td><b>View of crime</b></td><td>A real problem, especially street crime; offenders choose crime</td><td>A real problem, especially for poor, working-class victims</td></tr>
<tr><td><b>Causes</b></td><td>Biosocial factors (Wilson and Herrnstein); the underclass and poor socialisation ([[c:murray]]); rational choice ([[c:clarke]]); disorder ([[c:wilsonkelling]])</td><td>Relative deprivation, marginalisation, subculture ([[c:leayoung]])</td></tr>
<tr><td><b>Solutions</b></td><td>Zero tolerance, situational crime prevention, tough deterrent sentences</td><td>Multi-agency working, community policing, tackling inequality and social exclusion</td></tr>
<tr><td><b>Politics</b></td><td>Conservative governments (UK and US, 1980s–90s)</td><td>New Labour’s “tough on crime, tough on the causes of crime”</td></tr></table></div>` }
  ],
  debate: [{ q: 'Which sociological theory best explains crime?', for: ['Strain explains property crime and why crime is higher among poorer groups.', 'Marxism explains corporate crime and selective enforcement.', 'Labelling explains the effect of the criminal justice system on offenders.', 'Realism takes victims seriously and gives practical policies.'], ag: ['Strain and subculture ignore female and middle-class crime.', 'Marxism ignores working-class victims.', 'Labelling ignores why primary deviance happens.', 'Right realism ignores structural causes; left realism can’t explain corporate crime.'] }],
  cases: ['durkheim', 'merton', 'acohen', 'hirschi', 'chambliss', 'becker', 'lemert', 'leayoung', 'wilsonkelling', 'murray', 'clarke'],
  worked: [],
  pitfalls: ['Mixing up left and right realism.', 'Describing Merton’s adaptations without linking them to crime.', 'Forgetting interactionism is a separate category from social structure theories.'],
  cards: [
    ['Durkheim’s functions of crime?', 'Boundary maintenance, social change, warning light (and safety valve).'],
    ['What is anomie?', 'Normlessness — a breakdown of shared norms, e.g. during rapid social change.'],
    ['Merton’s five adaptations?', 'Conformity, innovation, ritualism, retreatism, rebellion.'],
    ['What is status frustration?', 'Working-class boys denied status at school form delinquent subcultures (A. Cohen).'],
    ['Hirschi’s four bonds?', 'Attachment, commitment, involvement, belief.'],
    ['Marxist view of law enforcement?', 'Selective: the crimes of the poor are policed; the crimes of the powerful are not.'],
    ['What is a master status?', 'A label that overrides all other aspects of a person’s identity (Becker).'],
    ['Primary v secondary deviance?', 'Primary: unlabelled acts. Secondary: deviance resulting from accepting the label (Lemert).'],
    ['Left realist causes of crime?', 'Relative deprivation, marginalisation, subculture.'],
    ['Right realist solutions?', 'Zero tolerance, situational crime prevention, deterrent sentencing.']
  ],
  quiz: [
    { q: 'Merton’s “innovation” means…', o: ['accepting the goal of success but using illegal means', 'rejecting goals and means', 'following rules without the goal', 'replacing society’s goals'], x: 'E.g. theft or fraud.' },
    { q: 'Which theory argues deviance is a label applied by others?', o: ['Interactionism', 'Functionalism', 'Right realism', 'Biological'], x: 'Becker.' },
    { q: 'Relative deprivation is a key idea of…', o: ['left realism', 'right realism', 'Lombroso', 'Durkheim'], x: 'Lea and Young.' },
    { q: 'Broken windows theory is associated with…', o: ['right realism', 'Marxism', 'labelling', 'psychodynamic theory'], x: 'Wilson and Kelling.' },
    { q: 'Which theorist argued crime is normal and functional?', o: ['Durkheim', 'Chambliss', 'Murray', 'Becker'], x: 'Functionalism.' },
    { q: 'Marxists see white-collar crime as…', o: ['under-policed crime of the powerful', 'rare and harmless', 'caused by genes', 'caused by labelling'], x: 'Selective enforcement.' }
  ],
  exam: [{ q: 'Describe two sociological theories of criminality. [6]', m: 6, ms: ['e.g. Merton strain — goals and means; adaptations', 'Marxism — capitalism, law serves ruling class, selective enforcement', 'labelling — Becker; master status; Lemert', 'right realism — rational choice, underclass, broken windows', 'left realism — relative deprivation, marginalisation, subculture', 'accurate key points of each'] }],
  tools: ['theorysort', 'realismsort']
});

/* ---------- Unit 2 LO1–LO2 tools ---------- */
TOOLS.deviantsort2 = { type: 'sort', title: 'Crime, deviance or both — and what sanction?', intro: 'Sort each act, then think about the sanction that would follow.', cats: ['Deviant only', 'Criminal only', 'Both'], items: [
  ['Cheating in a friendly game of cards', 'Deviant only', 'Informal sanction: friends refuse to play.'],
  ['A 17-year-old buying cigarettes', 'Criminal only', 'The seller commits the offence; the act is widely tolerated.'],
  ['Robbing a pensioner', 'Both', 'Formal and informal sanctions.'],
  ['Refusing to stand for a minute’s silence', 'Deviant only', 'Disapproval.'],
  ['Parking on a double yellow line', 'Criminal only', 'A penalty charge.'],
  ['Arson of a neighbour’s car', 'Both', 'Criminal damage by fire.']
] };
TOOLS.constructsort = { type: 'sort', title: 'How is crime socially constructed?', intro: 'Which kind of variation does each example show?', cats: ['Time', 'Place/culture', 'Circumstances'], items: [
  ['Homosexual acts were criminal in England until 1967.', 'Time', 'Law changed over time.'],
  ['Alcohol is legal in the UK but banned in Saudi Arabia.', 'Place/culture', 'Differs between cultures.'],
  ['A soldier kills in battle and is not prosecuted.', 'Circumstances', 'Context decides legality.'],
  ['Smacking is illegal in Wales but not England.', 'Place/culture', 'Differs within the UK.'],
  ['A 9-year-old cannot be convicted of a crime.', 'Circumstances', 'Age of criminal responsibility.'],
  ['Upskirting became a specific offence in 2019.', 'Time', 'Criminalisation.']
] };
TOOLS.theorysort = { type: 'sort', title: 'Biological, individualistic or sociological?', intro: 'Classify each theory or study.', cats: ['Biological', 'Individualistic', 'Sociological'], items: [
  ['Lombroso — atavism', 'Biological', 'Physiological.'],
  ['Bandura — social learning', 'Individualistic', 'Learning theory.'],
  ['Merton — strain', 'Sociological', 'Social structure.'],
  ['Christiansen — twin study', 'Biological', 'Genetic.'],
  ['Bowlby — maternal deprivation', 'Individualistic', 'Psychodynamic.'],
  ['Becker — labelling', 'Sociological', 'Interactionism.'],
  ['Eysenck — personality', 'Individualistic', 'Psychological (with a biological basis).'],
  ['Lea and Young — left realism', 'Sociological', 'Realism.'],
  ['Raine — PET scans', 'Biological', 'Brain function.'],
  ['Sutherland — differential association', 'Individualistic', 'Learning theory (some texts treat it as sociological).']
] };
TOOLS.realismsort = { type: 'sort', title: 'Left or right realism?', intro: 'Which realist perspective does each idea belong to?', cats: ['Right realism', 'Left realism'], items: [
  ['Relative deprivation causes crime.', 'Left realism', 'Lea and Young.'],
  ['An underclass fails to socialise children.', 'Right realism', 'Murray.'],
  ['Offenders make rational choices.', 'Right realism', 'Clarke.'],
  ['The square of crime: offender, victim, state, public.', 'Left realism', ''],
  ['Zero tolerance of minor disorder.', 'Right realism', 'Broken windows.'],
  ['Multi-agency approach involving the community.', 'Left realism', ''],
  ['Marginalised groups have no legitimate voice.', 'Left realism', 'Marginalisation.']
] };
