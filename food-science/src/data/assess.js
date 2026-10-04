/* ==========================================================
   ASSESSMENT DATA · key facts, grading, NEA guides, case-study papers
   ========================================================== */

/* ---- Key facts (the “Key facts” page replaces an equations page) ---- */
const KEY_FACTS = [
  { h: 'Energy values', icon: 'thermo', unit: '1', rows: [
    ['Carbohydrate', '4 kcal/g · 17 kJ/g'], ['Protein', '4 kcal/g · 17 kJ/g'], ['Fat', '9 kcal/g · 37 kJ/g'], ['Alcohol', '7 kcal/g · 29 kJ/g'], ['Fibre', '2 kcal/g · 8 kJ/g'], ['Conversion', '1 kcal ≈ 4.2 kJ (4.184)'] ] },
  { h: 'Dietary recommendations (adults)', icon: 'plate', unit: '1', rows: [
    ['Total fat', '≤ 35% of food energy'], ['Saturated fat', '≤ 11% of food energy'], ['Free sugars', '≤ 5% of energy (≤ 30 g/day)'], ['Carbohydrate', '≈ 50% of energy, mostly starchy/wholegrain'], ['Protein', '≤ 15% of energy; RNI 0.75 g/kg/day'], ['Fibre', '30 g/day (AOAC)'], ['Salt', '≤ 6 g/day'], ['Fruit & vegetables', '≥ 5 × 80 g portions a day'], ['Fish', '2 portions a week, 1 oily'], ['Fluid', '6–8 glasses (≈ 1.2–2 litres) a day'], ['Energy (EAR)', 'men ≈ 2500 kcal, women ≈ 2000 kcal'] ] },
  { h: 'Reference intakes (food labels)', icon: 'facts', unit: '1', rows: [
    ['Energy', '8400 kJ / 2000 kcal'], ['Fat', '70 g'], ['Saturates', '20 g'], ['Carbohydrate', '260 g'], ['Sugars', '90 g'], ['Protein', '50 g'], ['Salt', '6 g'] ] },
  { h: 'Traffic-light thresholds per 100 g (food)', icon: 'facts', unit: '1', rows: [
    ['Fat', 'low ≤ 3 g · high > 17.5 g'], ['Saturates', 'low ≤ 1.5 g · high > 5 g'], ['Sugars', 'low ≤ 5 g · high > 22.5 g'], ['Salt', 'low ≤ 0.3 g · high > 1.5 g'], ['Drinks (per 100 ml)', 'halve the “low” and “high” values'] ] },
  { h: 'Body measures', icon: 'leaf', unit: '1', rows: [
    ['BMI', 'kg ÷ m²'], ['Underweight', '< 18.5'], ['Healthy', '18.5–24.9'], ['Overweight', '25–29.9'], ['Obese', '≥ 30 (class 3 ≥ 40)'], ['Waist-to-height', '< 0.5 healthy · 0.5–0.59 increased · ≥ 0.6 high risk'], ['Energy requirement', 'BMR × PAL'], ['Glycaemic index', 'low ≤ 55 · medium 56–69 · high ≥ 70'], ['Glycaemic load', 'low 0–10 · medium 11–19 · high ≥ 20'] ] },
  { h: 'Life-stage extras', icon: 'leaf', unit: '1', rows: [
    ['Pregnancy', '+200 kcal/day in the third trimester; folic acid 400 µg/day before conception to week 12; vitamin D 10 µg/day'], ['Lactation', '+ about 400–500 kcal/day'], ['Babies', 'exclusive breastfeeding to about 6 months; vitamin D supplement from birth if breastfed'], ['Children 6 months – 5 years', 'vitamins A, C and D supplements recommended'], ['Everyone (autumn/winter)', 'consider 10 µg vitamin D a day'], ['Over 65s / housebound', '10 µg vitamin D daily all year'] ] },
  { h: 'Critical temperatures', icon: 'thermo', unit: '3', rows: [
    ['Danger zone', '5 °C – 63 °C (bacteria multiply fastest ≈ 37 °C)'], ['Fridge', '0 – 5 °C (legal maximum 8 °C)'], ['Freezer', '−18 °C or below (−18 to −24 °C)'], ['Core cooking temperature', '75 °C for at least 30 seconds (or 70 °C for 2 min)'], ['Reheating', '≥ 75 °C (82 °C in Scotland); reheat once only'], ['Hot holding', '≥ 63 °C; maximum 2 hours'], ['Cold display', 'out of the fridge for one period of up to 4 hours only'], ['Cooling', 'to below 8 °C within 90 minutes'], ['Delivery (chilled)', 'reject above 8 °C (ideally ≤ 5 °C)'], ['Delivery (frozen)', 'reject above −15 °C'], ['Boiling / sterilising', '100 °C; spores need ≥ 121 °C (canning)'], ['Pasteurisation (milk)', '72 °C for 15 s'], ['UHT', '132–135 °C for 1–2 s'] ] },
  { h: 'The 14 allergens', icon: 'leaf', unit: '3', rows: [
    ['Cereals containing gluten', 'wheat, rye, barley, oats'], ['Crustaceans', 'prawns, crab, lobster'], ['Eggs', ''], ['Fish', ''], ['Peanuts', ''], ['Soybeans', ''], ['Milk', ''], ['Nuts (tree nuts)', 'almonds, hazelnuts, walnuts, cashews, pecans, Brazil, pistachio, macadamia'], ['Celery', 'including celeriac'], ['Mustard', ''], ['Sesame seeds', ''], ['Sulphur dioxide / sulphites', '> 10 mg/kg or 10 mg/litre'], ['Lupin', ''], ['Molluscs', 'mussels, oysters, squid, snails'] ] },
  { h: 'Colour-coded chopping boards', icon: 'facts', unit: '2', rows: [
    ['Red', 'raw meat'], ['Blue', 'raw fish'], ['Yellow', 'cooked meat'], ['Green', 'salad and fruit'], ['Brown', 'vegetables'], ['White', 'bakery and dairy'], ['Purple', 'allergen-free food'] ] },
  { h: 'Food science temperatures', icon: 'thermo', unit: '4', rows: [
    ['Starch gelatinisation', 'swelling from ≈ 60 °C; complete ≈ 90–100 °C'], ['Egg white sets', '≈ 60–70 °C'], ['Egg yolk sets', '≈ 65–70 °C'], ['Custard thickens', '≈ 80 °C (curdles if overheated)'], ['Maillard reaction', 'fastest ≈ 140–165 °C (dry heat)'], ['Caramelisation', '≈ 160–180 °C'], ['Jam setting point', '≈ 104–105 °C'], ['Yeast', 'optimum 35–40 °C; killed above ≈ 60 °C'], ['Gelatine', 'melts ≈ 35 °C'], ['Agar', 'must boil; sets ≈ 35–45 °C; remelts ≈ 85 °C'] ] },
  { h: 'Research and statistics', icon: 'facts', unit: '5', rows: [
    ['Mean', 'Σx ÷ n'], ['Median', 'middle value when ordered'], ['Mode', 'most frequent value'], ['Standard deviation', 'spread about the mean'], ['T-test', 'compare two means'], ['ANOVA', 'compare three or more means'], ['Correlation', 'relationship between two variables (r from −1 to +1)'], ['Regression', 'line to predict y from x'], ['Significant', 'p < 0.05'], ['Reflection models', 'Kolb · Gibbs · Rolfe (What? So what? Now what?)'] ] }
];

/* ---- Grading ---- */
const UNIT_GRADES = [['a', 80], ['b', 70], ['c', 60], ['d', 50], ['e', 40]];
const QUAL_GRADES = [['A*', 360], ['A', 320], ['B', 280], ['C', 240], ['D', 200], ['E', 160]];

/* ---- NEA guides ---- */
const NEA_GUIDES = [
  { unit: '2', title: 'Unit 2 · Developing practical food production skills', time: '9 hours 30 minutes · 100 marks · AO2 32 · AO3 28 · AO4 40',
    intro: 'WJEC releases an assignment brief each year (Assessment Packs on the WJEC Portal from the first Monday in January; marks uploaded by May). It gives a scenario and several tasks. Expect to plan food items for the brief, produce them showing a range of skills safely and hygienically, and evaluate what you made.',
    steps: [
      ['Analyse the brief', 'Identify the client, customers, occasion, dietary needs, budget, trends and any constraints. Link every choice back to the brief.'],
      ['Research and choose', 'Compare possible dishes against factors affecting food choice (2.1). Justify your final choices: skills, nutrition, cost, seasonality, presentation.'],
      ['Plan production', 'Combined time plan / Gantt chart with mise en place, dovetailing, critical control points (temperatures), quality points, hygiene and safety. Ingredient and equipment lists, costings.'],
      ['Show a range of skills', 'Prepare, cook and present food with increasing complexity: knife skills, sauces, pastry, dough, meat/fish preparation, garnish and plating. Repeated skills are credited once, so vary them.'],
      ['Work safely and hygienically', 'Personal hygiene, colour-coded equipment, probe temperatures (75 °C core), chilling, allergen control, clean-as-you-go.'],
      ['Evaluate', 'Use taste panels and sensory tests, compare against the brief, nutritional analysis, cost. Say what went well, what did not, and specific improvements.']
    ],
    tips: ['Photograph each stage as evidence — especially skills and final presentation.', 'Annotate time plans with the reasons for your order of work.', 'Record probe temperatures in your plan.', 'Never copy another learner’s plan or post your work on social media.'] },
  { unit: '4', title: 'Unit 4 · Experimenting to solve food production problems', time: '12 hours · 100 marks · AO2 30 · AO3 30 · AO4 40',
    intro: 'The brief sets a food production problem (e.g. a missing ingredient, a dietary need, a shelf-life or cost problem). You investigate the science, plan and carry out experiments, analyse the data and present your findings.',
    steps: [
      ['Understand the problem', 'Identify which properties and functions of ingredients are involved (gelatinisation, coagulation, aeration, emulsification…).'],
      ['Research solutions', 'Traditional recipes, modern methods, substitutes, ratio changes, new technology.'],
      ['Set success criteria', 'Hypothesis (and null); resources and timeframes; method and data tools; variables (IV, DV, controls); results that confirm or reject.'],
      ['Plan the investigation', 'Descriptive, comparative or experimental; lab/real world/mixed; sample approach and size; ethics (allergens, consent); piloted data collection sheets.'],
      ['Carry it out', 'Fair tests with repeats; record raw data carefully; objective measurements (height, line spread, pH, colour) plus sensory evaluation.'],
      ['Analyse', 'Descriptive statistics (mean, median, mode, SD) and inferential tests where suitable (t-test, ANOVA, correlation, regression); charts and graphs.'],
      ['Present and judge', 'Accept or reject the hypothesis; recommend the most effective solution; present for the audience named in the brief.']
    ],
    tips: ['Change one independent variable at a time.', 'Show calculations in a spreadsheet file and include it as evidence.', 'Discuss anomalies and limitations honestly.', 'Link results back to the science learned in 4.1.'] },
  { unit: '5', title: 'Unit 5 · Current issues in food science and nutrition', time: '12 hours · 100 marks · AO2 30 · AO3 30 · AO4 40',
    intro: 'The brief sets a context around a current issue (sustainability, health, diet trends, the economy, technology, media, social factors, ethics). You plan and carry out research, analyse and present it, then reflect on your research using a model of reflection.',
    steps: [
      ['Proposal and rationale', 'Explain the issue and why it matters to the sector and its stakeholders, with referenced evidence.'],
      ['Aims, objectives, question', 'SMART objectives, a research question or hypothesis, a realistic timeline (Gantt).'],
      ['Literature review', 'Credible secondary sources (journals, government statistics, NDNS, WRAP, FSA) — judge credibility, reliability and validity.'],
      ['Plan methods', 'Primary methods (questionnaire, interview, focus group, observation, experiment) justified; sample approach and size; ethics — informed consent, confidentiality, minimising harm; pilot tools.'],
      ['Gather and analyse data', 'Clean the data; content/thematic analysis for words; descriptive and inferential statistics for numbers; interpret.'],
      ['Present findings', 'Choose methods for the audience (report, infographic, presentation, article, blog).'],
      ['Reflect', 'Apply Kolb, Gibbs or Rolfe to outcomes, methods, analysis and organisation; identify development opportunities and improvements to reliability, validity and scope.']
    ],
    tips: ['Reference every source you use.', 'Keep a research log with dates for your reflection.', 'Specific, evidenced reflection beats general comments.', 'Anonymise participants in everything you submit.'] }
];

/* ---- Section C case studies for the full practice papers ---- */
const CASE_STUDIES = {
  '1': [
    { title: 'The Pritchard family', text: `<p>Siân (34) is 28 weeks pregnant with her second child and works part-time as a nurse on night shifts. Her partner Gareth (36) is a lorry driver, 1.78 m tall and weighs 98 kg; he often eats at service stations. Their son Osian (4) is a fussy eater who refuses most vegetables. The family is on a tight budget, and Siân has recently been told by her midwife that her iron levels are low.</p>`,
      qs: [
        { q: 'Calculate Gareth’s BMI and state its classification. [2]', m: 2, ms: ['98 ÷ 1.78² = 30.9', 'obese (≥ 30)'] },
        { q: 'Explain why Siân’s low iron levels are a concern in the third trimester and suggest affordable ways to improve her iron intake. [6]', m: 6, ms: ['blood volume expands — more haemoglobin needed; baby builds iron stores', 'iron deficiency anaemia → tiredness, breathlessness, risk of preterm/low birthweight', 'affordable haem iron: lean red meat, canned sardines', 'non-haem: fortified breakfast cereals, pulses, dark green vegetables, dried apricots', 'eat with vitamin C (fruit, juice) to increase absorption', 'avoid tea/coffee with meals (tannins); take prescribed supplements; avoid liver (vitamin A)'] },
        { q: 'Evaluate strategies to improve Gareth’s diet given his job. [8]', m: 8, ms: ['long sedentary hours, irregular shifts, reliance on service-station food', 'pack meals/snacks from home: wholemeal sandwiches, fruit, nuts — cheaper and controlled', 'choose grilled/lower-fat options; use calorie labelling at outlets', 'swap sugary drinks for water — also hydration', 'regular meals to avoid energy-dense snacking; portion control', 'limitations: fridge access, time, tiredness, cost/storage in cab', 'health benefits: reduce risk of T2D, CVD, hypertension', 'judgement: combination of planning and small sustainable changes most effective'] },
        { q: 'Suggest how Siân could encourage Osian to eat more vegetables. [4]', m: 4, ms: ['repeated exposure / offer small amounts often without pressure', 'involve him in preparing and growing food', 'hide vegetables in sauces/soups, fun presentation (shapes, colours)', 'role modelling — family eating together; praise'] }
      ] },
    { title: 'Bryn Awel care home', text: `<p>Bryn Awel is a 40-bed residential care home in rural Powys. Most residents are over 80. Several have dementia, some have difficulty swallowing (dysphagia) and need texture-modified meals, three have type 2 diabetes and one resident is a practising Muslim. Staff report that many residents leave half their meals and some have lost weight. The home has a limited food budget per resident per day.</p>`,
      qs: [
        { q: 'State two reasons why older adults may be at risk of malnutrition. [2]', m: 2, ms: ['reduced appetite/taste and smell', 'dental problems, dysphagia, dementia, isolation, medication, limited mobility/income (any two)'] },
        { q: 'Explain the nutritional needs of residents in Bryn Awel. [6]', m: 6, ms: ['lower energy needs (lower BMR/activity) but nutrient needs similar — nutrient-dense food', 'protein to reduce sarcopenia and help healing', 'vitamin D 10 µg supplement (little sun exposure) + calcium — bones, falls/fractures', 'fibre and fluid — constipation, dehydration (reduced thirst)', 'vitamin B12 (reduced absorption), iron, folate', 'diabetes: low-GI carbohydrates, regular meals, limit free sugars'] },
        { q: 'Evaluate ways the home could reduce weight loss among residents. [8]', m: 8, ms: ['food fortification (milk powder, butter, cream) — energy without bigger portions', 'small, frequent meals and snacks', 'finger foods for residents with dementia', 'appetising texture-modified food (IDDSI levels, moulds, 3D printed)', 'mealtime support/assistance, protected mealtimes, social dining', 'MUST screening, weighing, referral to dietitian/SALT', 'cultural/religious needs (halal meals) respected — increases intake', 'judgement weighing cost, staff time and effectiveness'] },
        { q: 'Plan a day’s menu for the resident with type 2 diabetes. Justify your choices. [4]', m: 4, ms: ['regular meals, low-GI starchy carbohydrate (porridge, wholegrain bread, new potatoes)', 'lean protein and vegetables at each meal; soft textures if needed', 'fruit instead of sugary desserts; unsweetened drinks', 'justification: stable blood glucose, weight, fibre, heart health'] }
      ] },
    { title: 'Ffion, county athlete', text: `<p>Ffion (17) is a county-level 800 m runner who trains six days a week and studies A levels. She follows a vegan diet for ethical reasons. She skips breakfast because she trains before college and often feels tired in the afternoon. Her coach has noticed she has had two stress fractures this season.</p>`,
      qs: [
        { q: 'Identify two nutrients that Ffion may be lacking because she is vegan. [2]', m: 2, ms: ['vitamin B12, iron, calcium, vitamin D, iodine, omega-3 (DHA), zinc (any two)'] },
        { q: 'Explain the possible causes of Ffion’s stress fractures. [4]', m: 4, ms: ['low calcium intake (no dairy) unless fortified alternatives', 'low vitamin D — reduced calcium absorption', 'low energy availability (RED-S) — disrupts hormones/bone formation', 'adolescence — peak bone mass still forming; high training load'] },
        { q: 'Evaluate the suitability of Ffion’s current eating pattern for her training, and recommend changes. [8]', m: 8, ms: ['skipping breakfast — low glycogen/energy for training, afternoon fatigue', 'high carbohydrate needs for endurance; timing around sessions', 'protein needs higher — complementary plant proteins (soya, pulses + grains)', 'iron — risk of anaemia (non-haem, plus losses) → fatigue', 'fluids/electrolytes', 'recommend: pre-training snack (banana, fortified oat milk), recovery meal within 1–2 hours', 'fortified foods and supplements (B12, vitamin D, algae omega-3)', 'judgement: vegan diet can support performance if planned'] }
      ] }
  ],
  '3': [
    { title: 'The Harbour Café', text: `<p>The Harbour Café in Aberaeron serves breakfasts, crab sandwiches, homemade soups and a hot carvery on Sundays. It employs a new part-time chef and three seasonal staff aged 16–18. Last month an environmental health officer (EHO) gave the café a food hygiene rating of 2. Findings included: the fridge at 9 °C, raw and cooked meats stored on the same shelf, no written allergen information, and staff handling cash then food without washing hands. During the summer the café is very busy and the kitchen is small.</p>`,
      qs: [
        { q: 'State the legal maximum temperature for chilled food and the recommended range for fridges. [2]', m: 2, ms: ['8 °C legal maximum', '0–5 °C recommended'] },
        { q: 'Explain the risks from storing raw and cooked meats on the same shelf and how they should be stored. [4]', m: 4, ms: ['raw meat may carry Salmonella/Campylobacter/E. coli', 'drips/contact cause cross-contamination of ready-to-eat cooked meat', 'no further cooking to kill bacteria → food poisoning', 'store cooked/ready-to-eat above raw meat, covered, labelled; separate fridges ideally'] },
        { q: 'Evaluate actions the café should take to improve its food hygiene rating. [10]', m: 10, ms: ['repair/replace fridge; temperature monitoring records twice daily', 'reorganise storage — raw below cooked, covered, dated, FIFO', 'HACCP-based system (Safer Food, Better Business) with CCPs for cooking 75 °C, hot holding 63 °C (carvery), cooling', 'written allergen information for all 14 allergens; crab sandwiches (crustaceans), soups (celery), bread (gluten)', 'staff training: Level 2 food hygiene, handwashing after cash, induction for young/seasonal staff', 'handwashing facilities / separate cash handling', 'cleaning schedule; pest control', 'management supervision of new chef', 'request re-inspection once improved', 'judgement prioritising the highest risks (temperature, cross-contamination, allergens)'] },
        { q: 'Explain the legal responsibilities of the café owner under the Food Safety Act 1990. [4]', m: 4, ms: ['must not sell food that is harmful to health', 'food must be of the nature, substance and quality demanded', 'must not be falsely or misleadingly labelled/described', 'EHOs can inspect, issue improvement/prohibition notices; fines/imprisonment'] }
      ] },
    { title: 'School summer fair barbecue', text: `<p>A secondary school PTA is running a barbecue at its summer fair, expecting 300 visitors. Volunteers will cook frozen burgers, sausages and chicken drumsticks on four charcoal barbecues and sell homemade cakes and a rice salad prepared the day before. The forecast is 27 °C. There is one cool box, no running water near the barbecue area, and one of the volunteers has had diarrhoea for the past two days.</p>`,
      qs: [
        { q: 'Identify two biological hazards in this scenario. [2]', m: 2, ms: ['bacteria on raw meat (Salmonella, Campylobacter, E. coli O157)', 'Bacillus cereus in cooked rice; norovirus from the ill volunteer (any two)'] },
        { q: 'Explain why the rice salad is a particular risk. [4]', m: 4, ms: ['Bacillus cereus spores survive cooking', 'if cooked rice is cooled slowly or kept warm, spores germinate and bacteria multiply', 'produce toxins (heat-stable) that cause vomiting', 'high ambient temperature (27 °C) and one cool box — kept in danger zone'] },
        { q: 'Assess the risks at the barbecue and recommend control measures. [10]', m: 10, ms: ['ill volunteer — exclude for 48 h after symptoms stop', 'frozen meat must be fully defrosted in a fridge beforehand or pre-cooked', 'undercooked chicken/burgers — probe to 75 °C core; pre-cook chicken in the oven', 'raw/cooked cross-contamination — separate tongs, boards, trays', 'no running water — provide handwashing station with warm water and soap; gloves not a substitute', 'cool boxes/ice packs; keep chilled food < 8 °C; limit time out', 'rice: cool quickly within 1 h, refrigerate, keep chilled or omit', 'cakes: allergen labelling (eggs, milk, gluten, nuts)', 'risk matrix: likelihood × severity; highest risks first', 'judgement / overall plan'] }
      ] },
    { title: 'Castell Foods — ready meal factory', text: `<p>Castell Foods manufactures chilled chicken tikka masala ready meals for a supermarket. Chicken is cooked, cooled, mixed with sauce containing almonds and cream, portioned into trays, sealed in modified atmosphere packaging and labelled with a use-by date. A recent customer complaint reported a piece of blue plastic in a meal. Another product on the same line is labelled “nut free”.</p>`,
      qs: [
        { q: 'Name the type of hazard represented by the blue plastic. [1]', m: 1, ms: ['physical hazard'] },
        { q: 'Explain why modified atmosphere packaging extends shelf life. [3]', m: 3, ms: ['air replaced with a gas mix (more CO₂/N₂, less O₂)', 'CO₂ slows bacterial and mould growth', 'reduced oxygen slows oxidation/rancidity and aerobic spoilage'] },
        { q: 'Identify two critical control points in the production of this ready meal and explain how they would be monitored. [4]', m: 4, ms: ['cooking chicken — probe core ≥ 75 °C, recorded', 'cooling — blast chill to < 5/8 °C within 90 min, recorded', 'metal detection/X-ray — test pieces checked each hour', 'chilled storage ≤ 5 °C — continuous monitoring (any two, with monitoring)'] },
        { q: 'Evaluate the allergen risks for Castell Foods and how HACCP could control them. [8]', m: 8, ms: ['almonds (tree nuts) and cream (milk) are allergens — must be emphasised on the label', '“nut free” product on the same line — cross-contact risk; could cause anaphylaxis', 'controls: separate lines or scheduling nut-free first, validated cleaning between runs', 'segregated storage, colour-coded equipment, staff training', 'label checks as CCP — correct pack in correct sleeve', 'precautionary labelling only after risk assessment', 'product recall procedure; FSA allergy alerts', 'judgement: separate production/rigorous cleaning validation needed to claim “nut free”'] }
      ] }
  ]
};
