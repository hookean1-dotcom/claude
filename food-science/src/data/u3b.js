/* ==========================================================
   UNIT 3 · PRINCIPLES OF FOOD HYGIENE AND FOOD SAFETY (part 2)
   3.2.3 food poisoning · 3.3 managing food safety
   ========================================================== */
TOPICS.push({
  id: '3.7', unit: '3', ref: '3.2.3', title: 'Food poisoning', short: 'Causative bacteria and viruses, symptoms, onset, duration, contagion',
  summary: 'Food poisoning is illness caused by eating food or water contaminated with pathogenic micro-organisms or their toxins. Know the foods affected and how to reduce risk, the causative bacteria and viruses, the physiological effects on body systems, and the visible and non-visible symptoms, onset time, duration, detection and contagion.',
  spec: [
    'Physiological causes of food poisoning: foods affected and how to reduce the risk of food poisoning',
    'Causative bacteria and viruses (Campylobacter, Salmonella, E. coli, Listeria; norovirus, rotavirus, hepatitis A; also Bacillus cereus, Clostridium perfringens, Staphylococcus aureus)',
    'Physiological effects on the body systems',
    'Symptoms: visible and non-visible; how symptoms are detected; length of time until symptoms appear; duration of symptoms; level of contagion'
  ],
  learn: [
    { h: 'How food poisoning happens', html: `
<p>Three physiological routes:</p>
<ul><li><b>Infection</b> — live bacteria or viruses multiply in the gut and invade or damage its lining (<i>Salmonella</i>, <i>Campylobacter</i>, norovirus). Onset is usually a day or more.</li>
<li><b>Intoxication</b> — toxins already formed in the food cause illness even if the bacteria are dead (<i>Staphylococcus aureus</i>, emetic <i>Bacillus cereus</i>, <i>Clostridium botulinum</i>). Onset can be very fast (1–6 hours); reheating may not destroy heat-stable toxins.</li>
<li><b>Toxin-mediated infection</b> — bacteria multiply in the gut and release toxins there (<i>E. coli</i> O157 Shiga toxin, <i>Clostridium perfringens</i>).</li></ul>
<p><b>High-risk foods</b>: cooked meat and poultry, dairy, eggs, shellfish, cooked rice, gravies, stocks and sauces, ready-to-eat foods — moist, protein-rich and eaten without further cooking.</p>` },
    { h: 'The causative bacteria', html: `
<div class="tbl"><table><tr><th>Bacterium</th><th>Foods / sources</th><th>Onset</th><th>Duration</th><th>Main symptoms</th></tr>
<tr><td><b><i>Campylobacter</i></b></td><td>raw and undercooked poultry, unpasteurised milk, untreated water; cross-contamination</td><td>2–5 days</td><td>2–10 days</td><td>abdominal pain, (bloody) diarrhoea, fever, headache; rarely Guillain–Barré syndrome</td></tr>
<tr><td><b><i>Salmonella</i></b></td><td>raw eggs, poultry, meat, unpasteurised milk; pets and reptiles</td><td>6–72 h (usually 12–36 h)</td><td>4–7 days</td><td>diarrhoea, fever, abdominal cramps, vomiting</td></tr>
<tr><td><b><i>E. coli</i> O157</b> (STEC)</td><td>undercooked minced beef (burgers), unpasteurised milk, contaminated salad and vegetables, animal contact</td><td>1–10 days (usually 3–4)</td><td>about 1–2 weeks</td><td>bloody diarrhoea, severe cramps; <b>haemolytic uraemic syndrome (HUS)</b> — kidney failure, especially in children and older people</td></tr>
<tr><td><b><i>Listeria monocytogenes</i></b></td><td>chilled ready-to-eat foods: pâté, soft and mould-ripened cheese, smoked fish, pre-packed sandwiches, cooked sliced meats</td><td>days to weeks (up to 70 days)</td><td>varies; can be severe</td><td>flu-like fever and aches; septicaemia, meningitis; <b>miscarriage and stillbirth</b> in pregnancy</td></tr>
<tr><td><i>Bacillus cereus</i></td><td>cooked rice and pasta left warm (spores survive cooking)</td><td>1–6 h (vomiting) or 8–16 h (diarrhoea)</td><td>about 24 h</td><td>vomiting or diarrhoea</td></tr>
<tr><td><i>Clostridium perfringens</i></td><td>large batches of stews, gravies and meat cooled slowly</td><td>8–22 h</td><td>about 24 h</td><td>abdominal pain, diarrhoea</td></tr>
<tr><td><i>Staphylococcus aureus</i></td><td>food handlers (skin, nose, cuts) → cooked meats, cream, sandwiches</td><td>1–6 h</td><td>1–2 days</td><td>sudden vomiting, cramps (heat-stable toxin)</td></tr></table></div>` },
    { h: 'The causative viruses', html: `
<div class="tbl"><table><tr><th>Virus</th><th>Sources</th><th>Onset</th><th>Duration</th><th>Symptoms and contagion</th></tr>
<tr><td><b>Norovirus</b></td><td>infected food handlers, raw shellfish (oysters), salads, contaminated surfaces</td><td>12–48 h</td><td>1–3 days</td><td>sudden projectile vomiting, diarrhoea, nausea; <b>highly contagious</b> person to person and via vomit aerosols</td></tr>
<tr><td><b>Rotavirus</b></td><td>faecal–oral route; mainly babies and young children</td><td>about 2 days</td><td>3–8 days</td><td>severe watery diarrhoea, vomiting, fever — dehydration risk; highly contagious (infants vaccinated in the UK)</td></tr>
<tr><td><b>Hepatitis A</b></td><td>contaminated water, shellfish, frozen berries, food handled by an infected person</td><td>15–50 days (average 28)</td><td>weeks to months</td><td>fever, fatigue, nausea, <b>jaundice</b> (yellow skin and eyes), dark urine — infects the <b>liver</b>; contagious before symptoms appear</td></tr></table></div>` },
    { h: 'Physiological effects on body systems', html: `
<div class="tbl"><table><tr><th>Body system</th><th>Effects</th></tr>
<tr><td>Digestive</td><td>gastroenteritis — inflamed stomach and intestines; diarrhoea (fluid secreted, less absorbed); vomiting reflex; abdominal cramps</td></tr>
<tr><td>Circulatory / fluid balance</td><td>dehydration and electrolyte loss → low blood pressure, rapid heart rate, dizziness</td></tr>
<tr><td>Urinary (kidneys)</td><td>HUS from <i>E. coli</i> O157 — kidney failure</td></tr>
<tr><td>Nervous</td><td><i>Listeria</i> meningitis; botulism paralysis; Guillain–Barré after <i>Campylobacter</i></td></tr>
<tr><td>Liver</td><td>hepatitis A — inflammation, jaundice</td></tr>
<tr><td>Immune</td><td>fever as the body fights infection</td></tr>
<tr><td>Reproductive / fetus</td><td>listeriosis can cause miscarriage, stillbirth or infection of the newborn</td></tr></table></div>` },
    { h: 'Symptoms, detection and contagion', html: `
<div class="tbl"><table><tr><th>Aspect</th><th>Food poisoning</th></tr>
<tr><td>Visible symptoms</td><td>vomiting, diarrhoea (sometimes bloody), fever and sweating, flushing, jaundice (hepatitis A), signs of dehydration (sunken eyes, dry lips)</td></tr>
<tr><td>Non-visible symptoms</td><td>nausea, abdominal pain and cramps, headache, muscle aches, fatigue, feeling cold</td></tr>
<tr><td>Detection</td><td>symptoms and food history; <b>stool samples</b> (culture or PCR); blood tests; outbreak investigation by environmental health officers (EHOs)</td></tr>
<tr><td>Time until symptoms</td><td>from 1 hour (toxins) to weeks (<i>Listeria</i>, hepatitis A)</td></tr>
<tr><td>Duration</td><td>usually 1–7 days; longer for hepatitis A and complications</td></tr>
<tr><td>Contagion</td><td>many are <b>contagious</b> via the faecal–oral route and contaminated surfaces — especially norovirus; food handlers must stay off work for <b>48 hours</b> after symptoms stop</td></tr></table></div>
<div class="box why"><b class="lbl">Reducing the risk — the 4 Cs</b><p><b>Cleaning</b> (hands, surfaces), <b>Cooking</b> (75 °C core), <b>Chilling</b> (below 5 °C, cool within 90 minutes), avoiding <b>Cross-contamination</b> (separate raw and ready-to-eat).</p></div>
<div class="tbl"><table><tr><th>Compared with…</th><th>Food poisoning</th><th>Food allergy</th><th>Food intolerance</th></tr>
<tr><td>Cause</td><td>pathogens or their toxins</td><td>immune (IgE) response to a protein</td><td>non-immune (e.g. enzyme deficiency)</td></tr>
<tr><td>Onset</td><td>1 hour – weeks</td><td>minutes – 2 hours</td><td>30 minutes – 48 hours</td></tr>
<tr><td>Contagious?</td><td>often yes</td><td>no</td><td>no</td></tr>
<tr><td>Who is affected?</td><td>anyone eating the contaminated food</td><td>only sensitised individuals, even with traces</td><td>only intolerant individuals, dose-dependent</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Twelve guests at a wedding fell ill 24–36 hours after eating. Symptoms were fever, diarrhoea and cramps. A tiramisu made with raw eggs was served. Suggest the likely cause and explain your reasoning. (4 marks)', s: ['The likely cause is Salmonella.', 'The onset (24–36 h) fits Salmonella’s 6–72 h (usually 12–36 h) incubation — too slow for toxin intoxication (1–6 h) and too fast for Campylobacter (2–5 days).', 'Fever, diarrhoea and cramps are typical Salmonella symptoms.', 'Raw eggs in an uncooked dessert are a classic Salmonella source, especially if not British Lion-marked or if the dessert was kept in the danger zone.'], a: 'Salmonella — onset, symptoms and raw egg source all fit.' }
  ],
  pitfalls: ['Confusing onset times — toxins act within hours; Listeria and hepatitis A take weeks.', 'Saying viruses multiply in food — food only carries them.', 'Forgetting to say how risk can be reduced when asked about foods affected.', 'Calling food poisoning non-contagious — many forms spread person to person.', 'Mixing up food poisoning with allergy or intolerance.'],
  cards: [
    ['Infection vs intoxication?', 'Infection: live pathogens multiply in the gut. Intoxication: toxins already formed in the food.'],
    ['Campylobacter — source, onset, duration?', 'Raw/undercooked poultry; 2–5 days; 2–10 days.'],
    ['Salmonella — source and onset?', 'Raw eggs, poultry, meat; 6–72 h (usually 12–36 h).'],
    ['E. coli O157 — serious complication?', 'Haemolytic uraemic syndrome (HUS) — kidney failure.'],
    ['Listeria — who is most at risk and why?', 'Pregnant women (miscarriage), older and immunocompromised people; grows in the fridge.'],
    ['Bacillus cereus — typical food?', 'Cooked rice left warm; spores survive cooking.'],
    ['Staphylococcus aureus source?', 'Food handlers’ skin, nose and cuts; heat-stable toxin.'],
    ['Norovirus — onset and duration?', '12–48 h; 1–3 days; highly contagious.'],
    ['Hepatitis A — organ affected and key symptom?', 'Liver; jaundice.'],
    ['Rotavirus mainly affects?', 'Babies and young children — severe watery diarrhoea.'],
    ['How is food poisoning detected?', 'Symptoms and food history, stool samples, blood tests, EHO outbreak investigation.'],
    ['The 4 Cs?', 'Cleaning, cooking, chilling, cross-contamination.'],
    ['Exclusion period for food handlers?', '48 hours after symptoms stop.'],
    ['Which body system does HUS affect?', 'The urinary system — kidneys.']
  ],
  quiz: [
    { q: 'Which pathogen is most associated with raw poultry?', o: ['Campylobacter', 'Listeria', 'Hepatitis A', 'Bacillus cereus'], x: 'The commonest bacterial cause in the UK.' },
    { q: 'Symptoms appearing 2 hours after eating suggest…', o: ['a preformed toxin such as Staphylococcus aureus', 'Campylobacter infection', 'hepatitis A', 'Listeria'], x: 'Toxins act fast.' },
    { q: 'Haemolytic uraemic syndrome is a complication of…', o: ['E. coli O157', 'norovirus', 'Salmonella', 'rotavirus'], x: 'Kidney failure, especially in children.' },
    { q: 'Jaundice is a symptom of…', o: ['hepatitis A', 'Campylobacter', 'Bacillus cereus', 'norovirus'], x: 'The virus infects the liver.' },
    { q: 'Cooked rice left warm overnight is linked to…', o: ['Bacillus cereus', 'Listeria', 'Hepatitis A', 'E. coli O157'], x: 'Spores survive cooking and germinate.' },
    { q: 'Norovirus is best described as…', o: ['a highly contagious virus causing sudden vomiting and diarrhoea', 'a bacterium in raw chicken', 'a mould on bread', 'a toxin in rice'], x: 'The winter vomiting bug.' },
    { q: 'Which pathogen is most dangerous in pregnancy?', o: ['Listeria monocytogenes', 'Campylobacter', 'Bacillus cereus', 'Staphylococcus aureus'], x: 'Can cause miscarriage or stillbirth.' },
    { q: 'Large batches of stew cooled slowly are linked to…', o: ['Clostridium perfringens', 'Hepatitis A', 'Listeria only', 'Norovirus'], x: 'Spores germinate as the stew cools.' },
    { q: 'Food poisoning is usually confirmed by…', o: ['a stool sample test', 'a skin prick test', 'a hydrogen breath test', 'a BMI measurement'], x: 'Culture or PCR identifies the pathogen.' },
    { q: 'Which statement is correct?', o: ['Some food poisoning is contagious person to person', 'Food poisoning only affects people with allergies', 'All food poisoning starts within minutes', 'Viruses multiply in food'], x: 'Faecal–oral spread.' },
    { q: 'Salmonella symptoms usually start…', o: ['12–36 hours after eating', 'within 10 minutes', 'after 4 weeks', 'after 6 months'], x: 'Range 6–72 h.' },
    { q: 'Staphylococcus aureus toxins are a problem because they…', o: ['are heat-stable and survive reheating', 'only grow in the freezer', 'are destroyed by chilling', 'cause no symptoms'], x: 'Hygiene of handlers is key.' }
  ],
  exam: [
    { q: 'Name two bacteria and one virus that cause food poisoning. [3]', m: 3, ms: ['bacterium, e.g. Campylobacter / Salmonella / E. coli / Listeria / Bacillus cereus / Clostridium perfringens / Staphylococcus aureus', 'second bacterium', 'virus: norovirus / rotavirus / hepatitis A'] },
    { q: 'Compare the symptoms of food poisoning caused by Salmonella and by norovirus, including onset, duration and contagion. [6]', m: 6, ms: ['Salmonella onset 6–72 h (usually 12–36 h)', 'Salmonella: diarrhoea, fever, cramps, vomiting; 4–7 days', 'norovirus onset 12–48 h', 'norovirus: sudden projectile vomiting, diarrhoea, nausea; 1–3 days', 'norovirus highly contagious person to person / aerosols; Salmonella can spread faecal–orally', 'detection by stool sample; 48-hour exclusion for food handlers'] },
    { q: 'Explain why Listeria monocytogenes is a particular risk in pregnancy and how pregnant women can reduce the risk. [5]', m: 5, ms: ['Listeria can cross the placenta', 'causes miscarriage / stillbirth / newborn infection', 'grows at fridge temperatures in chilled ready-to-eat food', 'avoid unpasteurised and mould-ripened soft cheese, pâté, cold smoked fish', 'heat ready meals until piping hot; observe use-by dates; keep fridge below 5 °C'] },
    { q: 'Evaluate the effectiveness of the 4 Cs in reducing food poisoning at a school barbecue. [6]', m: 6, ms: ['cleaning: handwashing facilities often limited outdoors — portable handwash needed', 'cooking: barbecue chars outside while centre stays raw — probe to 75 °C, precook chicken', 'chilling: hot weather — cool boxes, keep raw meat below 5 °C until cooking', 'cross-contamination: separate tongs, plates and boards for raw and cooked', 'Campylobacter / E. coli from undercooked meat most likely', 'judgement: all four needed together; supervision / training key'] }
  ],
  sims: ['pathogens'], gens: []
});

TOPICS.push({
  id: '3.8', unit: '3', ref: '3.3.1', title: 'Food safety hazards in different environments', short: 'Biological, chemical, physical, allergenic hazards; cross-contamination',
  summary: 'A hazard is anything that could cause harm to the consumer. Know the biological, chemical, physical and allergenic hazards — including cross-contamination — that arise when food is prepared, cooked, served, stored and transported, outdoors and in temporary settings.',
  spec: [
    'Potential food safety hazards in a range of environments: preparation, cooking, serving, storing',
    'Environments: transporting, outdoors, temporary',
    'Contamination: cross contamination, physical, chemical (and biological, allergenic)'
  ],
  learn: [
    { h: 'Types of hazard', html: `
<div class="tbl"><table><tr><th>Hazard</th><th>Examples</th></tr>
<tr><td><b>Biological</b> (microbiological)</td><td>pathogenic bacteria, viruses, moulds and their toxins; pests (flies, rodents, cockroaches) carrying bacteria</td></tr>
<tr><td><b>Chemical</b></td><td>cleaning chemicals and sanitiser residues; pesticides; oil from machinery; migration from unsuitable containers (e.g. acid foods in opened cans); pest poisons; natural toxins; <b>acrylamide</b> from over-browned starchy foods</td></tr>
<tr><td><b>Physical</b></td><td>glass, metal (staples, wire wool, shavings), hair, fingernails, jewellery, plasters, bone, stones, packaging, insects and droppings</td></tr>
<tr><td><b>Allergenic</b></td><td>undeclared allergens; cross-contact from shared equipment, oil or surfaces; wrong labels; recipe or supplier changes</td></tr></table></div>
<p><b>Cross-contamination</b> — transfer of a hazard from one food, surface or person to another: <b>direct</b> (raw meat touching or dripping onto ready-to-eat food) or <b>indirect</b> (via hands, cloths, boards, knives, equipment).</p>` },
    { h: 'Hazards in each environment', html: `
<div class="tbl"><table><tr><th>Environment</th><th>Typical hazards</th></tr>
<tr><td><b>Preparation</b></td><td>raw meat next to salad; shared boards and knives; poor handwashing; food left in the danger zone during long preparation; pests; chemical sprays near food; jewellery and hair</td></tr>
<tr><td><b>Cooking</b></td><td>undercooking (large joints, burgers, frozen food not fully defrosted); microwave cold spots; spores surviving (rice); acrylamide from over-browning; burns and fat fires (safety)</td></tr>
<tr><td><b>Serving</b></td><td>hot holding below 63 °C; buffets left out; customers’ hands and sneezes; tongs shared between dishes; allergen cross-contact; wrong allergen information</td></tr>
<tr><td><b>Storing</b></td><td>fridges above 5 °C or overloaded; raw above ready-to-eat; no stock rotation; out-of-date food; opened cans; pests in dry stores; chemicals stored with food</td></tr>
<tr><td><b>Transporting</b></td><td>chilled food warming in vehicles; hot food cooling into the danger zone; delays; damaged or unsealed packaging; mixed raw and cooked loads</td></tr>
<tr><td><b>Outdoors</b> (barbecues, picnics)</td><td>food charred outside but raw inside; heat and sun; flies, wasps, dust; no running water for handwashing; limited chilling</td></tr>
<tr><td><b>Temporary</b> (festivals, markets, pop-ups)</td><td>limited water, power, refrigeration and space; high volumes; temporary staff with less training; weather</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Identify three hazards at a food stall at a summer music festival and explain why each is a risk. (6 marks)', s: ['Biological — hot weather warms chilled burgers into the danger zone, so bacteria such as E. coli multiply.', 'Limited running water means staff may not wash hands properly after handling raw meat → indirect cross-contamination of buns and salad.', 'Physical — wind blows dust, insects or packaging into uncovered food; a chemical hazard arises if cleaning sprays are stored beside food in a cramped space.'], a: 'Temperature control, handwashing/cross-contamination, physical/chemical contamination.' }
  ],
  pitfalls: ['Listing hazards without linking them to the named environment.', 'Confusing a hazard (something that could harm) with a risk (the likelihood and severity of harm).', 'Forgetting allergens as a hazard.', 'Only giving biological hazards when asked for a range.'],
  cards: [
    ['Define a food safety hazard.', 'Anything that could cause harm to the consumer.'],
    ['Four types of hazard?', 'Biological, chemical, physical, allergenic.'],
    ['Three physical hazards?', 'Glass, metal, hair, jewellery, plasters, bone, stones, insects.'],
    ['Three chemical hazards?', 'Cleaning chemicals, pesticides, machine oil, acrylamide, migration from packaging.'],
    ['Direct vs indirect cross-contamination?', 'Direct: food to food. Indirect: via hands, equipment, cloths.'],
    ['Hazards when serving?', 'Hot holding below 63 °C, buffets, shared tongs, sneezing, allergen errors.'],
    ['Hazards when transporting?', 'Temperature changes, delays, damaged packaging, mixed raw/cooked loads.'],
    ['Why are temporary food outlets high-risk?', 'Limited water, power, refrigeration and space; high volume; less-trained staff.'],
    ['Hazards at a barbecue?', 'Undercooked centres, heat, flies, no handwashing water, cross-contamination.']
  ],
  quiz: [
    { q: 'Which is a physical hazard?', o: ['A fragment of glass', 'Salmonella', 'Bleach residue', 'Peanut protein'], x: 'Physical = foreign objects.' },
    { q: 'Which is a chemical hazard?', o: ['Sanitiser left on a board', 'A hair', 'Norovirus', 'A bone'], x: 'Chemical residues.' },
    { q: 'Raw chicken juice dripping onto cake in the fridge is…', o: ['direct cross-contamination', 'indirect cross-contamination', 'a physical hazard', 'an intolerance'], x: 'Food to food.' },
    { q: 'Using the same tongs for raw and cooked sausages is…', o: ['indirect cross-contamination', 'direct cross-contamination', 'sanitising', 'safe practice'], x: 'The tongs carry the bacteria.' },
    { q: 'Acrylamide is best classed as a…', o: ['chemical hazard', 'physical hazard', 'biological hazard', 'allergen'], x: 'Formed when starchy foods are over-browned.' },
    { q: 'A particular hazard of barbecues is…', o: ['food charred outside but raw inside', 'too much refrigeration', 'too much handwashing', 'food cooked too evenly'], x: 'Probe the centre.' },
    { q: 'Which environment most often lacks running water?', o: ['A temporary festival stall', 'A hospital kitchen', 'A school kitchen', 'A factory'], x: 'Portable handwash stations needed.' },
    { q: 'Undeclared sesame in a burger bun is a…', o: ['allergenic hazard', 'physical hazard', 'microbiological hazard', 'temperature hazard'], x: 'Allergen labelling failure.' }
  ],
  exam: [
    { q: 'Give one example of a physical, a chemical and a biological hazard in a kitchen. [3]', m: 3, ms: ['physical: glass / metal / hair / jewellery / plaster / bone', 'chemical: cleaning products / pesticides / oil / acrylamide', 'biological: bacteria (e.g. Salmonella) / viruses / mould / pests'] },
    { q: 'Explain the food safety hazards when food is transported from a central kitchen to a care home. [6]', m: 6, ms: ['hot food cools into the danger zone during transit', 'chilled food warms above 5 °C without refrigerated vehicles', 'delays increase time for bacterial growth', 'damaged / unsealed containers → physical or microbiological contamination', 'raw and cooked foods carried together → cross-contamination', 'care home residents are vulnerable — consequences more severe; controls named'] }
  ],
  sims: ['spot'], gens: []
});

TOPICS.push({
  id: '3.9', unit: '3', ref: '3.3.2', title: 'Risk to food safety', short: 'Likelihood, potential to harm, vulnerable people, high-risk foods',
  summary: 'Risk is the chance that a hazard will actually cause harm, and how serious that harm would be. Assess risk in any environment by considering the likelihood of the hazard, its potential to harm, the individuals likely to be affected and the foods likely to be affected.',
  spec: [
    'Potential food safety risks: likelihood of hazard',
    'Potential food safety risks: potential to harm (severity)',
    'Individuals likely to be affected',
    'Foods likely to be affected',
    'Consider the risks associated with the hazards in different environments (3.3.1)'
  ],
  learn: [
    { h: 'Hazard vs risk', html: `
<p>A <b>hazard</b> is something that <i>could</i> cause harm. <b>Risk</b> combines the <b>likelihood</b> that the hazard will cause harm with the <b>severity</b> of that harm.</p>
[[d:riskmatrix]]
<p>A <b>risk matrix</b> scores likelihood (e.g. 1 = rare to 5 = almost certain) and severity (1 = minor to 5 = fatal); <b>risk rating = likelihood × severity</b>. High scores need immediate control; low scores are monitored.</p>` },
    { h: 'The four factors', html: `
<div class="tbl"><table><tr><th>Factor</th><th>Questions to ask</th></tr>
<tr><td><b>Likelihood of hazard</b></td><td>How often could it happen? e.g. undercooking a large turkey is likely without a probe; glass contamination is rare where glass is banned</td></tr>
<tr><td><b>Potential to harm</b></td><td>How serious? mild stomach upset → hospitalisation → death (E. coli O157, Listeria, anaphylaxis, botulism)</td></tr>
<tr><td><b>Individuals likely to be affected</b></td><td><b>vulnerable groups</b>: babies and young children (immature immunity), pregnant women (Listeria), older people, people who are ill or immunocompromised (chemotherapy, HIV), people with allergies; also large numbers of people (events, schools, hospitals)</td></tr>
<tr><td><b>Foods likely to be affected</b></td><td><b>high-risk foods</b>: cooked meat and poultry, dairy, eggs and egg dishes, shellfish, cooked rice, stocks, gravies and sauces, ready-to-eat salads and sandwiches — moist, protein-rich, near-neutral pH and eaten without further cooking. Low-risk foods: dry, acidic, high-sugar or high-salt foods (biscuits, jam, pickles, dried pasta)</td></tr></table></div>
<p>The same hazard can be low risk in one setting and high risk in another — e.g. soft-boiled eggs at home for a healthy adult versus in a care home for frail residents.</p>` }
  ],
  eqs: [['"risk rating" = "likelihood" × "severity"', 'risk matrix score']],
  worked: [
    { q: 'A hospital kitchen serves pre-packed sandwiches. Assess the risk from Listeria. (6 marks)', s: ['Likelihood: Listeria can grow slowly in chilled ready-to-eat food even in a fridge, especially with long shelf lives or fridges above 5 °C — likelihood moderate.', 'Potential to harm: listeriosis can cause septicaemia and meningitis and has a high fatality rate — severity high.', 'Individuals affected: hospital patients are often immunocompromised, elderly or pregnant — highly vulnerable.', 'Foods affected: sandwiches with cooked meats, smoked fish or soft cheese are high-risk foods.', 'Overall the risk is high (e.g. 3 × 5 = 15 on a 5×5 matrix), so strict controls are needed: approved suppliers, short shelf life, fridges below 5 °C, avoiding high-risk fillings.'], a: 'High risk: moderate likelihood × severe harm × vulnerable patients.' }
  ],
  pitfalls: ['Using “hazard” and “risk” as if they mean the same.', 'Ignoring who will eat the food — vulnerability changes the risk.', 'Forgetting to justify likelihood and severity with reasons.', 'Treating all foods as equally risky.'],
  cards: [
    ['Hazard vs risk?', 'Hazard: something that could cause harm. Risk: likelihood × severity of that harm.'],
    ['Four factors when assessing risk?', 'Likelihood, potential to harm, individuals affected, foods affected.'],
    ['Five vulnerable groups?', 'Babies/young children, pregnant women, older people, ill/immunocompromised, people with allergies.'],
    ['What makes a food high-risk?', 'Moist, protein-rich, near-neutral pH, eaten without further cooking.'],
    ['Five high-risk foods?', 'Cooked meat/poultry, dairy, eggs, shellfish, cooked rice, gravies, ready-to-eat salads.'],
    ['Two low-risk foods?', 'Dry pasta, biscuits, jam, pickles, canned food (unopened).'],
    ['How is a risk rating calculated?', 'Likelihood score × severity score.']
  ],
  quiz: [
    { q: 'Risk is best described as…', o: ['the likelihood and severity of harm from a hazard', 'anything that could cause harm', 'a type of bacterium', 'a cleaning procedure'], x: 'Hazard ≠ risk.' },
    { q: 'Which person is most vulnerable to food poisoning?', o: ['An 85-year-old in a care home', 'A healthy 25-year-old', 'A fit athlete', 'A teenager'], x: 'Weaker immunity.' },
    { q: 'Which is a high-risk food?', o: ['Cooked prawns', 'Dry pasta', 'Crackers', 'Jam'], x: 'Moist, protein-rich, ready to eat.' },
    { q: 'On a 5×5 matrix, likelihood 4 and severity 5 gives a rating of…', o: ['20', '9', '1', '45'], x: '4 × 5.' },
    { q: 'Why is soft-boiled egg a higher risk in a care home than at home for a healthy adult?', o: ['Residents are more vulnerable', 'Eggs are different in care homes', 'Care homes cook at higher temperatures', 'It is not higher risk'], x: 'Individuals affected.' },
    { q: 'Which factor describes how serious the harm would be?', o: ['Potential to harm (severity)', 'Likelihood', 'Foods affected', 'Stock rotation'], x: 'Severity.' }
  ],
  exam: [
    { q: 'Explain the difference between a hazard and a risk. [2]', m: 2, ms: ['hazard: anything that could cause harm', 'risk: the likelihood of the hazard causing harm (and its severity)'] },
    { q: 'Assess the food safety risks of serving a buffet containing cold meats, egg mayonnaise and rice salad at a primary school event. [8]', m: 8, ms: ['all three are high-risk foods (protein-rich, moist, ready to eat)', 'buffets left at room temperature — food in the danger zone; max 2 hours', 'cold meats — Listeria / Staphylococcus from handling', 'egg mayonnaise — Salmonella (raw egg) and time out of fridge', 'rice salad — Bacillus cereus if rice was cooled slowly', 'children are a vulnerable group; large numbers affected', 'likelihood moderate/high, severity high → high overall risk', 'controls justified (keep chilled, small batches, time limits, serving utensils)'] }
  ],
  sims: ['riskmatrix'], gens: ['risk1']
});

TOPICS.push({
  id: '3.10', unit: '3', ref: '3.3.3', title: 'Control measures: hygiene, cleaning and storage', short: 'Personal and food hygiene, cross-contamination, waste, cleaning schedules, storage and packaging',
  summary: 'Control measures reduce hazards and their risks. Know the practical controls: good personal and food hygiene, preventing cross-contamination, disposal of waste, effective cleaning with cleaning schedules, and effective storage and packaging such as colour-coded date labels and vacuum-sealed packaging.',
  spec: [
    'Good hygiene practices including personal hygiene and food hygiene',
    'Preventing cross contamination',
    'Disposal of waste',
    'Effective cleaning and the need for cleaning schedules',
    'Effective food storage and packaging, for example colour coded date labels and vacuum sealed packaging'
  ],
  learn: [
    { h: 'Hygiene practices', html: `
<p><b>Personal hygiene</b>: handwashing technique (20 seconds, warm water, soap, between fingers, thumbs, nails, wrists, paper towel); clean protective clothing; hair covered; no jewellery except a plain band; short unpolished nails; blue detectable plasters; no smoking, eating or phone use in food areas; report illness and stay off for 48 hours after symptoms stop.</p>
<p><b>Food hygiene</b>: buy from reputable suppliers; check deliveries (temperature, date, packaging); keep high-risk food out of the danger zone; cook to 75 °C (70 °C for 2 minutes); cool within 90 minutes; reheat once; hot hold above 63 °C for up to 2 hours; use probes.</p>` },
    { h: 'Preventing cross-contamination', html: `
<ul><li>Separate raw and ready-to-eat food in storage (raw at the <b>bottom</b> of the fridge, covered), preparation areas and equipment.</li>
<li><b>Colour-coded</b> boards, knives and cloths (red raw meat, blue raw fish, yellow cooked meat, green salad and fruit, brown vegetables, white bakery and dairy, purple allergen-free).</li>
<li>Wash hands between tasks; clean and sanitise between raw and ready-to-eat.</li>
<li>Separate allergen-free preparation; store allergens in sealed, labelled containers.</li>
<li>Pest control: proofing, sealed containers, fly screens, electric fly killers, professional pest contractors.</li></ul>` },
    { h: 'Disposal of waste', html: `
<ul><li>Lidded, <b>foot-operated (pedal) bins</b> lined with bags, emptied frequently and never allowed to overflow.</li>
<li>Kept away from food preparation and storage areas; cleaned and sanitised regularly.</li>
<li>External bins lidded and on hard standing, collected regularly — to avoid attracting pests.</li>
<li>Separate food waste, recycling and general waste; used cooking oil collected by licensed contractors (never poured down drains).</li>
<li>Wash hands after handling waste.</li></ul>` },
    { h: 'Cleaning and cleaning schedules', html: `
<p><b>Effective cleaning</b> follows the two-stage method (clean, then sanitise with the correct contact time) and <b>clean as you go</b>. Heat (e.g. dishwasher above 82 °C) or chemicals disinfect.</p>
<p>A <b>cleaning schedule</b> is a written plan stating:</p>
<div class="tbl"><table><tr><th>What</th><th>When / how often</th><th>How (method, chemical, dilution)</th><th>Who</th><th>Safety (PPE)</th><th>Sign-off / checked by</th></tr>
<tr><td>chopping boards</td><td>after each use</td><td>hot detergent wash, rinse, sanitiser 30 s, air dry</td><td>chef on section</td><td>gloves</td><td>✓ supervisor</td></tr>
<tr><td>fridge interior</td><td>weekly</td><td>empty, clean, sanitise, dry</td><td>kitchen porter</td><td>gloves</td><td>✓</td></tr></table></div>
<p><b>Why schedules matter</b>: nothing is forgotten; responsibility is clear; correct chemicals and dilutions are used safely; records show <b>due diligence</b> to inspectors; standards stay consistent across shifts.</p>` },
    { h: 'Storage and packaging controls', html: `
[[d:dayDots]]
<ul><li><b>Temperatures</b>: fridge 0–5 °C, freezer −18 °C or below, dry store cool, dry and ventilated; record temperatures daily.</li>
<li><b>Stock rotation — FIFO</b> (first in, first out); check use-by and best-before dates.</li>
<li><b>Colour-coded date labels (“day dots”)</b> — a different colour sticker for each day of the week shows when food was prepared or opened, so staff can see at a glance what must be used or thrown away (e.g. prepared food kept for no more than 3 days).</li>
<li><b>Vacuum-sealed packaging</b> — removing air slows aerobic spoilage organisms and oxidation, extending shelf life; but anaerobes (<i>Clostridium botulinum</i>) can still grow, so vacuum-packed food must usually be kept chilled and used within its shelf life.</li>
<li>Label with contents, allergens, date prepared and use-by date; keep food covered in food-grade containers.</li></ul>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why a restaurant should use colour-coded day-dot labels. (3 marks)', s: ['Each day of the week has its own colour, so staff can see instantly when food was prepared or opened.', 'This makes stock rotation (FIFO) easy and ensures food is used within its safe shelf life.', 'Out-of-date food is spotted and discarded, reducing the risk of food poisoning and providing evidence of due diligence.'], a: 'Quick visual check of age → rotation, safety, due diligence.' }
  ],
  pitfalls: ['Describing “cleaning” without distinguishing cleaning from sanitising.', 'Saying vacuum packing makes food safe at room temperature — anaerobes can still grow.', 'Forgetting who, when and sign-off in a cleaning schedule.', 'Ignoring waste as a pest and contamination risk.'],
  cards: [
    ['What is a cleaning schedule?', 'A written plan of what, when, how, who, safety and sign-off for cleaning.'],
    ['Why use cleaning schedules?', 'Nothing forgotten, clear responsibility, safe chemical use, records for due diligence, consistency.'],
    ['What are day-dot labels?', 'Colour-coded stickers for each day of the week showing when food was prepared/opened.'],
    ['How does vacuum sealing help?', 'Removes air — slows aerobic spoilage and oxidation, extends shelf life.'],
    ['Risk with vacuum-packed food?', 'Anaerobic bacteria (C. botulinum) can still grow — keep chilled.'],
    ['Ideal kitchen bins?', 'Lidded, foot-operated, lined, emptied often, away from food.'],
    ['Why must waste be controlled?', 'It attracts pests and is a source of contamination.'],
    ['Purple chopping board?', 'Allergen-free preparation.'],
    ['What does “clean as you go” mean?', 'Cleaning spills and equipment throughout work, not just at the end.']
  ],
  quiz: [
    { q: 'Colour-coded day-dot labels show…', o: ['which day food was prepared or opened', 'the allergen content', 'the cooking temperature', 'the price'], x: 'Supports FIFO.' },
    { q: 'Vacuum-sealed packaging extends shelf life mainly by…', o: ['removing oxygen', 'adding salt', 'freezing food', 'adding acid'], x: 'Slows aerobic organisms and oxidation.' },
    { q: 'Which is part of a cleaning schedule?', o: ['Who is responsible and when', 'The menu prices', 'Allergen labelling', 'Recipe quantities'], x: 'What, when, how, who, sign-off.' },
    { q: 'Kitchen bins should be…', o: ['lidded and foot-operated', 'open for easy access', 'kept next to food', 'emptied once a week'], x: 'Avoids hand contact and pests.' },
    { q: 'Used cooking oil should be…', o: ['collected by a licensed contractor', 'poured down the sink', 'put in the general bin', 'burned'], x: 'Blocks drains and attracts pests.' },
    { q: 'FIFO stands for…', o: ['first in, first out', 'food inspection for inspectors', 'fridge in, freezer out', 'fast in, fast out'], x: 'Stock rotation.' },
    { q: 'Records from cleaning schedules help a business show…', o: ['due diligence', 'profit', 'allergen content', 'recipe cost'], x: 'Evidence it took reasonable care.' }
  ],
  exam: [
    { q: 'State three features of an effective cleaning schedule. [3]', m: 3, ms: ['what is to be cleaned', 'when / how often', 'how — method, chemical, dilution, contact time', 'who is responsible', 'safety precautions / PPE', 'signed off / checked (any three)'] },
    { q: 'Explain how effective storage and packaging controls reduce food safety risks in a café. [6]', m: 6, ms: ['fridge 0–5 °C / freezer −18 °C slows or stops growth; temperatures recorded', 'raw below ready-to-eat, covered — prevents cross-contamination', 'FIFO and date checks — food used within shelf life', 'day-dot labels show preparation/opening date at a glance', 'vacuum-sealed packaging removes oxygen — slows spoilage, extends shelf life (still chill)', 'labels with allergens / sealed containers prevent allergen cross-contact and pests'] }
  ],
  sims: ['fridge'], gens: []
});

TOPICS.push({
  id: '3.11', unit: '3', ref: '3.3.3', title: 'Food safety legislation and HACCP', short: 'Food Safety Act 1990, General Food Law, 2013 Regulations, Natasha’s Law, HACCP',
  summary: 'Food businesses must follow food safety legislation. Know the purpose and key requirements of the Food Safety Act 1990, the General Food Law Regulations 2004, the Food Safety and Hygiene Regulations 2013 and Natasha’s Law (2021), and how Hazard Analysis and Critical Control Point (HACCP) systems control risks.',
  spec: [
    'Following food safety legislation: Food Safety Act 1990',
    'General Food Law Regulations 2004',
    'The Food Safety and Hygiene Regulations 2013',
    'Natasha’s Law 2021',
    'Hazard Analysis and Critical Control Point (HACCP)'
  ],
  learn: [
    { h: 'Food Safety Act 1990', html: `
<p>The main UK framework for food law. It is an <b>offence</b> to:</p>
<ul><li>render food <b>injurious to health</b> (add something harmful or process it so it becomes harmful);</li>
<li>sell food that is <b>not of the nature, substance or quality demanded</b> by the purchaser (e.g. wrong species, foreign bodies, mouldy);</li>
<li><b>falsely or misleadingly describe or present</b> food (labels, menus, adverts).</li></ul>
<p><b>Enforcement</b> by environmental health officers (EHOs) and trading standards officers, who can enter premises, take samples, seize food and issue <b>hygiene improvement notices</b>, <b>prohibition orders</b> and <b>emergency closure</b>. Penalties include fines and imprisonment. The <b>due diligence</b> defence: a business must show it took all reasonable precautions (e.g. records, training, HACCP).</p>` },
    { h: 'General Food Law Regulations 2004', html: `
<p>These put the principles of EU General Food Law (Regulation 178/2002, retained in UK law) into effect:</p>
<ul><li>food must be <b>safe</b> — not injurious to health or unfit to eat;</li>
<li>labelling, advertising and presentation must <b>not mislead</b>;</li>
<li><b>traceability</b> — businesses must be able to identify who supplied them and whom they supplied (“one step back, one step forward”);</li>
<li>unsafe food must be <b>withdrawn</b> or <b>recalled</b> and the authorities (and consumers) informed.</li></ul>` },
    { h: 'Food Safety and Hygiene Regulations 2013', html: `
<p>The Food Safety and Hygiene (England) Regulations 2013 (with equivalent regulations in Wales) set hygiene requirements for food business operators:</p>
<ul><li>food businesses must be <b>registered</b> with the local authority (at least 28 days before opening);</li>
<li>put in place <b>food safety management procedures based on HACCP principles</b> and keep records (Safer Food, Better Business is a HACCP-based pack for small businesses);</li>
<li>maintain structural, equipment, personal hygiene and <b>temperature control</b> requirements;</li>
<li>ensure food handlers are <b>supervised and trained</b> in food hygiene appropriate to their work;</li>
<li>powers for enforcement (hygiene improvement notices, emergency prohibition).</li></ul>
<p>Premises are inspected and given a <b>Food Hygiene Rating</b> from 0 (urgent improvement necessary) to 5 (very good); in <b>Wales</b> displaying the rating is a legal requirement.</p>` },
    { h: 'Natasha’s Law (2021)', html: `
<p>Named after <b>Natasha Ednan-Laperouse</b>, who died in 2016 from an allergic reaction to sesame baked into a baguette that had no allergen labelling. From <b>1 October 2021</b>, food <b>prepacked for direct sale (PPDS)</b> — packed on the premises before a customer orders it, e.g. sandwiches, salads and pastries made and wrapped in-store — must carry:</p>
<ul><li>the <b>name of the food</b>;</li><li>a <b>full ingredients list</b>;</li><li>the <b>14 allergens emphasised</b> (e.g. in bold) within the list.</li></ul>
<p>Loose (non-prepacked) food must still have allergen information available (in writing or verbally, with signposting).</p>` },
    { h: 'HACCP', html: `
[[d:haccp]]
<p><b>Hazard Analysis and Critical Control Point</b> is a preventive system that identifies what could go wrong at each step of a process and controls it. Its <b>seven principles</b>:</p>
<ol><li><b>Conduct a hazard analysis</b> — draw a flow chart and identify hazards (biological, chemical, physical, allergenic) at each step.</li>
<li><b>Determine the critical control points (CCPs)</b> — steps where control is essential to prevent, remove or reduce a hazard to a safe level (e.g. cooking, cooling, chilled storage).</li>
<li><b>Establish critical limits</b> — measurable values that separate safe from unsafe (e.g. core temperature ≥ 75 °C; fridge ≤ 5 °C; cool to &lt; 8 °C within 90 minutes).</li>
<li><b>Establish monitoring</b> — how, how often and by whom each CCP is checked (e.g. probe every batch).</li>
<li><b>Establish corrective actions</b> — what to do if a limit is not met (continue cooking, discard, repair fridge).</li>
<li><b>Establish verification</b> — check the system works (calibrate probes, audits, reviews, microbiological tests).</li>
<li><b>Keep documentation and records</b> — temperature logs, training, corrective actions — evidence of due diligence.</li></ol>
<div class="tbl"><table><tr><th>Step</th><th>Hazard</th><th>CCP?</th><th>Critical limit</th><th>Monitoring</th><th>Corrective action</th></tr>
<tr><td>Delivery of raw chicken</td><td>bacteria multiply if warm</td><td>yes</td><td>≤ 5 °C (≤ 8 °C legal)</td><td>probe on arrival</td><td>reject delivery</td></tr>
<tr><td>Cooking</td><td>Salmonella, Campylobacter survive</td><td>yes</td><td>core ≥ 75 °C</td><td>probe every batch</td><td>continue cooking</td></tr>
<tr><td>Cooling</td><td>spores germinate</td><td>yes</td><td>&lt; 8 °C within 90 min</td><td>time and probe log</td><td>discard</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'A café prepares and wraps its own sandwiches each morning for customers to pick up from a chiller. Explain how Natasha’s Law applies. (3 marks)', s: ['The sandwiches are prepacked for direct sale (PPDS) — packed on the premises before the customer selects them.', 'Each pack must be labelled with the name of the food and a full list of ingredients.', 'Any of the 14 allergens must be emphasised (e.g. in bold) in the ingredients list, so customers with allergies can make safe choices.'], a: 'PPDS → name + full ingredients + emphasised allergens.' }
  ],
  pitfalls: ['Confusing a hazard with a CCP — only steps essential to control a hazard are CCPs.', 'Giving vague critical limits (“hot enough”) — they must be measurable.', 'Saying Natasha’s Law applies to all food — it applies to prepacked for direct sale food.', 'Listing HACCP principles without explaining them.', 'Mixing up the three pieces of legislation and their dates.'],
  cards: [
    ['Three offences under the Food Safety Act 1990?', 'Rendering food injurious to health; selling food not of the nature, substance or quality demanded; falsely/misleadingly describing food.'],
    ['What is the due diligence defence?', 'Showing the business took all reasonable precautions (records, training, HACCP).'],
    ['Key requirement of General Food Law 2004?', 'Food must be safe; traceability “one step back, one step forward”; withdraw/recall unsafe food.'],
    ['Key requirements of the 2013 Regulations?', 'Registration, HACCP-based procedures, hygiene and temperature control, trained staff.'],
    ['Food Hygiene Rating scale?', '0 (urgent improvement) to 5 (very good); display is compulsory in Wales.'],
    ['What is Natasha’s Law?', 'From Oct 2021, PPDS food needs name, full ingredients and emphasised allergens.'],
    ['What does PPDS mean?', 'Prepacked for direct sale — packed on the premises before ordering.'],
    ['What does HACCP stand for?', 'Hazard Analysis and Critical Control Point.'],
    ['The seven HACCP principles?', 'Hazard analysis; CCPs; critical limits; monitoring; corrective actions; verification; documentation.'],
    ['What is a CCP?', 'A step where control is essential to prevent, remove or reduce a hazard to a safe level.'],
    ['Critical limit for cooking?', 'Core temperature ≥ 75 °C (or 70 °C for 2 minutes).'],
    ['What is Safer Food, Better Business?', 'A HACCP-based food safety management pack for small businesses (FSA).']
  ],
  quiz: [
    { q: 'Selling a “beef” burger containing horse meat breaks the Food Safety Act because it is…', o: ['not of the nature, substance or quality demanded', 'rendered injurious to health', 'correctly described', 'a CCP'], x: 'Also misleading description.' },
    { q: 'Traceability “one step back, one step forward” is required by…', o: ['General Food Law Regulations 2004', 'Natasha’s Law', 'the Eatwell Guide', 'HACCP principle 7 only'], x: 'Identify suppliers and customers.' },
    { q: 'Natasha’s Law applies to food that is…', o: ['prepacked for direct sale', 'sold loose', 'imported only', 'frozen only'], x: 'e.g. sandwiches packed in-store.' },
    { q: 'Natasha’s Law was introduced after a death caused by…', o: ['sesame in a baguette', 'Salmonella in eggs', 'peanut in a curry', 'Listeria in cheese'], x: 'Natasha Ednan-Laperouse, 2016.' },
    { q: 'The first HACCP principle is…', o: ['conduct a hazard analysis', 'keep records', 'verify the system', 'set corrective actions'], x: 'Identify hazards at each step.' },
    { q: 'Which is a critical limit?', o: ['Core temperature of at least 75 °C', 'Cook it properly', 'Check the food', 'Keep it clean'], x: 'Must be measurable.' },
    { q: 'If a fridge reads 11 °C, the HACCP step to follow is…', o: ['corrective action', 'hazard analysis', 'verification', 'registration'], x: 'e.g. move food, assess, repair.' },
    { q: 'Calibrating temperature probes is part of…', o: ['verification', 'hazard analysis', 'Natasha’s Law', 'traceability'], x: 'Checking the system works.' },
    { q: 'Food businesses must register with the local authority under…', o: ['the Food Safety and Hygiene Regulations 2013', 'Natasha’s Law', 'the Eatwell Guide', 'the DASH diet'], x: 'At least 28 days before opening.' },
    { q: 'EHOs can close premises immediately if there is an imminent risk to health using…', o: ['an emergency prohibition notice', 'a day-dot label', 'a HACCP chart', 'a traffic-light label'], x: 'Enforcement powers.' }
  ],
  exam: [
    { q: 'State three offences under the Food Safety Act 1990. [3]', m: 3, ms: ['rendering food injurious to health', 'selling food not of the nature, substance or quality demanded', 'falsely or misleadingly describing / presenting food'] },
    { q: 'Explain the purpose of Natasha’s Law and what it requires. [4]', m: 4, ms: ['introduced 2021 after the death of Natasha Ednan-Laperouse (sesame)', 'applies to prepacked for direct sale (PPDS) food', 'requires the name of the food and a full ingredients list', 'with the 14 allergens emphasised — so allergic consumers can make safe choices'] },
    { q: 'Apply the HACCP principles to the cooking and cooling of a large batch of chilli for a school canteen. [8]', m: 8, ms: ['hazard analysis: flow chart; hazards such as survival of pathogens, spores germinating on cooling, cross-contamination, allergens', 'CCPs: cooking and cooling (and cold storage / reheating)', 'critical limits: core ≥ 75 °C; cooled to < 8 °C within 90 min; stored ≤ 5 °C; reheat to 75 °C once', 'monitoring: probe each batch, time log', 'corrective actions: continue cooking; discard if cooling too slow', 'verification: calibrate probes, supervisor checks, audits', 'documentation: temperature records, training records', 'links to due diligence / children as vulnerable group'] },
    { q: 'Evaluate the importance of food safety legislation in protecting consumers. [6]', m: 6, ms: ['Food Safety Act — offences deter unsafe practice; EHO powers (notices, closure)', 'General Food Law — safety, traceability, recalls protect the public quickly', '2013 Regulations — registration, HACCP, training raise standards', 'Natasha’s Law — allergen information for PPDS food', 'hygiene rating scheme informs consumers; compulsory display in Wales', 'limits: enforcement depends on inspection frequency / resources; small businesses may struggle — judgement'] }
  ],
  sims: ['haccp'], gens: []
});
