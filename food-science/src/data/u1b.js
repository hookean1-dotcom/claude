/* ==========================================================
   UNIT 1 · NUTRITIONAL NEEDS ACROSS THE LIFE STAGES (part 2)
   1.2 Nutrients and the human body · 1.3 Planning nutritional requirements
   Aligned with the specification and WJEC's Unit 1 learner notes.
   ========================================================== */
TOPICS.push({
  id: '1.10', unit: '1', ref: '1.2.1', title: 'Unsatisfactory nutritional intake', short: 'Deficiency and excess; visible and non-visible characteristics',
  summary: 'Unsatisfactory nutritional intake means too much (excess) or too little (deficiency) of one or more nutrients. Non-visible characteristics usually appear first; visible ones come later. Know the effects of deficiency and excess of each macronutrient, vitamin, mineral and trace element, and the vocabulary used to study diet-related disease.',
  spec: [
    'Unsatisfactory nutritional intake categories: nutritional deficiencies and nutritional excesses',
    'Classification of characteristics: non-visible characteristics and visible characteristics',
    'Effects of deficiency and excess of carbohydrate, lipids and protein (including ketosis, kwashiorkor, insulin resistance)',
    'Effects of deficiency and excess of vitamins (hypervitaminosis), minerals and trace elements',
    'Non-communicable diseases (NCDs) and epidemiology: aetiology, incidence, prevalence, mortality, morbidity, chronic disease'
  ],
  learn: [
    { h: 'Excess, deficiency and how they show', html: `
<p><b>Unsatisfactory nutritional intake</b> is eating too much (<b>excess</b>) or too little (<b>deficiency</b>) of one or more nutrients. Symptoms relate directly to what the nutrient does in the body.</p>
<div class="tbl"><table><tr><th>Non-visible characteristics — usually appear FIRST</th><th>Visible characteristics — usually appear LATER</th></tr>
<tr><td>changes inside the body: fatigue, impaired immunity, poor concentration, biochemical changes (high blood pressure, raised LDL, raised blood glucose, low iron stores, low bone density), organ function decline</td><td>outward signs after prolonged imbalance: weight loss or gain, thinning hair, skin changes, oedema (swelling), stunted growth, dental problems, bowed legs, pale skin</td></tr></table></div>
<p>Non-visible characteristics are found by tests — blood tests, blood pressure, bone scans — so problems often go unnoticed until disease develops.</p>` },
    { h: 'Macronutrients', html: `
<div class="tbl"><table><tr><th></th><th>Deficiency</th><th>Excess</th></tr>
<tr><td><b>Carbohydrate</b></td><td>fatigue; poor concentration and mood (the brain needs glucose); fat broken down for energy → <b>ketosis</b> (nausea, headaches, bad breath)</td><td>converted to fat → weight gain; sugar spikes; long term <b>insulin resistance</b> (type 2 diabetes), dental decay, <b>metabolic syndrome</b> (high blood triglycerides, low HDL)</td></tr>
<tr><td><b>Lipids</b></td><td>fatigue and weight loss; hormonal imbalance; fat-soluble vitamin deficiencies; dry, scaly skin and brittle hair</td><td>weight gain and obesity (energy-dense); excess saturated fat raises LDL → atherosclerosis and CVD</td></tr>
<tr><td><b>Protein</b></td><td>muscle wasting and weakness; stunted growth; <b>oedema</b> (blood cannot hold fluid); infections (fewer antibodies); severe deficiency → <b>kwashiorkor</b>: oedema of legs, feet, face, distended abdomen (enlarged liver), brittle hair, irritability — common where diets rely on rice or maize without protein</td><td>strain on liver and kidneys removing nitrogen (dangerous with kidney disease); weight gain; high-protein diets often low in fibre → constipation and dehydration</td></tr></table></div>
<div class="box warn"><b class="lbl">Pitfall</b><p>“Protein deficiency causes kwashiorkor” is not enough — explain the link to protein’s role in growth, fluid balance and immunity.</p></div>` },
    { h: 'Vitamins', html: `
<p>An excess of a fat-soluble vitamin is <b>hypervitaminosis</b> (e.g. hypervitaminosis D). Water-soluble vitamin excess is rare (excreted in urine); very high doses cause “vitamin toxicity”.</p>
<div class="tbl"><table><tr><th>Vitamin</th><th>Deficiency</th><th>Excess</th></tr>
<tr><td>A (retinol)</td><td>dry, itchy (keratinised) skin and membranes; Bitot’s spots; slow growth; <b>night blindness</b> → blindness</td><td>poisonous; birth defects (facial, heart) — mainly from supplements</td></tr>
<tr><td>D (calciferol)</td><td>weak, bending bones: <b>rickets</b> (children), <b>osteomalacia</b> and osteoporosis (adults)</td><td><b>hypercalcaemia</b>: nausea, loss of appetite, thirst, weakness (supplements)</td></tr>
<tr><td>E (tocopherol)</td><td>rare: weak muscles, poor coordination, numbness (premature babies, cystic fibrosis)</td><td>rare: bleeding risk (interferes with vitamin K)</td></tr>
<tr><td>K</td><td>bruising and excessive bleeding (newborns, coeliac or liver disease)</td><td>extremely rare</td></tr>
<tr><td>B1 thiamin</td><td>fatigue, irritability; <b>beriberi</b> (nerves and muscles)</td><td>—</td></tr>
<tr><td>B2 riboflavin</td><td>cracks at mouth corners; red, swollen tongue</td><td>—</td></tr>
<tr><td>B3 niacin</td><td><b>pellagra</b> — the “3 Ds”: dermatitis, diarrhoea, dementia</td><td>—</td></tr>
<tr><td>B6 pyridoxine</td><td>irritability, depression, confusion, tingling, anaemia</td><td>—</td></tr>
<tr><td>B9 folate</td><td><b>megaloblastic anaemia</b>; in pregnancy <b>neural tube defects</b> (spina bifida)</td><td>—</td></tr>
<tr><td>B12 cobalamin</td><td>megaloblastic anaemia, tingling, poor balance, memory loss, depression; <b>pernicious anaemia</b> = no intrinsic factor, so B12 can’t be absorbed</td><td>—</td></tr>
<tr><td>C ascorbic acid</td><td>anaemia (poor iron absorption), bleeding gums, loose teeth, bruising, poor wound healing — <b>scurvy</b></td><td>—</td></tr></table></div>` },
    { h: 'Minerals and trace elements', html: `
<p>Mineral excess (“<b>hyper-</b>”) is rare because absorption is tightly regulated — usually from supplements, industrial exposure or kidney disease. Deficiencies often use “<b>hypo-</b>” (hypocalcaemia, hypokalaemia).</p>
<div class="tbl"><table><tr><th></th><th>Deficiency</th><th>Excess</th></tr>
<tr><td>Calcium</td><td>weak bones and teeth; numbness and tingling; muscle spasms (tetany); poor clotting</td><td>—</td></tr>
<tr><td>Magnesium</td><td>rare: personality change, poor appetite and coordination, abnormal heartbeat</td><td>—</td></tr>
<tr><td>Phosphorus</td><td>rare: weakness, confusion (common in intensive care)</td><td>infants fed cow’s milk: <b>hyperphosphataemia</b> (immature kidneys)</td></tr>
<tr><td>Potassium</td><td>fatigue, constipation, cramps; irregular heartbeat</td><td>—</td></tr>
<tr><td>Sodium</td><td><b>hyponatraemia</b> (overhydration, vomiting, diarrhoea): cells swell — headache, confusion, cramps</td><td><b>hypernatraemia</b>: cells shrink; long term <b>hypertension</b> (older adults most at risk)</td></tr>
<tr><td>Fluoride</td><td>weak enamel, caries</td><td><b>fluorosis</b>: discoloured teeth, skeletal changes</td></tr>
<tr><td>Iron</td><td><b>anaemia</b>: fatigue, weakness, pale skin, split nails, poor concentration</td><td><b>haemochromatosis</b>: organ (liver) damage, type 2 diabetes risk</td></tr>
<tr><td>Iodine</td><td><b>hypothyroidism</b>: slow metabolism, fatigue, weight gain, <b>goitre</b></td><td>hyperthyroidism (metallic taste, nausea, rashes)</td></tr></table></div>
<div class="box tip"><b class="lbl">Exam tip</b><p>In extended answers on unsatisfactory intake, cover <b>excess as well as deficiency</b>, and name specific conditions — “it causes health problems” earns nothing.</p></div>` },
    { h: 'Studying diet-related disease', html: `
<p>Many diseases caused by diet and lifestyle are <b>non-communicable diseases (NCDs)</b> — not infectious. <b>Epidemiology</b> studies how diseases occur, spread and affect populations:</p>
<div class="tbl"><table><tr><th>Term</th><th>Meaning</th></tr>
<tr><td>Aetiology</td><td>the cause or origin (genetic, environmental, lifestyle)</td></tr>
<tr><td>Incidence</td><td>number of <b>new</b> cases in a population over a time period</td></tr>
<tr><td>Prevalence</td><td><b>total</b> number of cases at a given time</td></tr>
<tr><td>Mortality rate</td><td>number of deaths caused by the disease</td></tr>
<tr><td>Morbidity rate</td><td>number of people living with the disease</td></tr>
<tr><td>Chronic disease</td><td>one people live with for months or years</td></tr></table></div>
<p>These figures identify <b>risk factors</b> and guide education and advice to reduce incidence and prevalence.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why protein deficiency can cause oedema and frequent infections. (4 marks)', s: ['Blood proteins (such as albumin) hold fluid in the blood vessels by maintaining fluid pressure.', 'With too little protein, fluid leaks into the tissues, causing swelling — oedema (seen in kwashiorkor).', 'Antibodies (immunoglobulins) are proteins.', 'With too little protein fewer antibodies are made, so the immune system is weaker and infections are more common.'], a: 'Low blood protein → fluid leaks (oedema); fewer antibodies → infections.' }
  ],
  pitfalls: ['Only discussing deficiencies when excess is also relevant.', 'Naming a condition without explaining how the nutrient’s function links to it.', 'Confusing osteomalacia (soft bones — poor mineralisation) with osteoporosis (porous bones — loss of bone mass).', 'Confusing incidence (new cases) with prevalence (all cases).', 'Saying water-soluble vitamin excess is common — it is rare.'],
  cards: [
    ['Two categories of unsatisfactory intake?', 'Nutritional deficiencies and nutritional excesses.'],
    ['Which appear first: visible or non-visible characteristics?', 'Non-visible characteristics usually appear first.'],
    ['Three non-visible characteristics?', 'Fatigue, impaired immunity, poor concentration, high BP, raised LDL, low iron stores.'],
    ['Three visible characteristics?', 'Weight change, thinning hair, skin changes, oedema, stunted growth, dental problems.'],
    ['What is kwashiorkor?', 'Severe protein deficiency: oedema, distended abdomen, brittle hair, stunted growth, irritability.'],
    ['What is hypervitaminosis?', 'Excess of a fat-soluble vitamin, e.g. hypervitaminosis D.'],
    ['Osteomalacia vs osteoporosis?', 'Osteomalacia: soft, poorly mineralised bones (vitamin D). Osteoporosis: porous bones from loss of bone mass (ageing, menopause).'],
    ['Pellagra — cause and 3 Ds?', 'Niacin deficiency: dermatitis, diarrhoea, dementia.'],
    ['What is pernicious anaemia?', 'Lack of intrinsic factor, so B12 cannot be absorbed.'],
    ['Signs of scurvy?', 'Bleeding gums, loose teeth, bruising, poor wound healing (vitamin C deficiency).'],
    ['What is haemochromatosis?', 'Iron excess — organ (liver) damage, diabetes risk.'],
    ['What is fluorosis?', 'Excess fluoride — discoloured teeth, skeletal changes.'],
    ['Incidence vs prevalence?', 'Incidence: new cases in a period. Prevalence: total cases at a time.'],
    ['What is aetiology?', 'The cause or origin of a disease.'],
    ['What is an NCD?', 'A non-communicable (non-infectious) disease, often linked to diet and lifestyle.']
  ],
  quiz: [
    { q: 'Which is a non-visible characteristic of poor nutrition?', o: ['High blood pressure', 'Bowed legs', 'Obesity', 'Dental decay'], x: 'It must be measured.' },
    { q: 'Non-visible characteristics usually…', o: ['appear before visible ones', 'appear only after visible ones', 'never appear', 'are always painful'], x: 'Internal changes come first.' },
    { q: 'Kwashiorkor is caused by a severe lack of…', o: ['protein', 'vitamin C', 'fibre', 'sodium'], x: 'Oedema and distended abdomen.' },
    { q: 'Ketosis can result from too little…', o: ['carbohydrate', 'protein', 'fibre', 'water only'], x: 'Fat is broken down for energy.' },
    { q: 'Night blindness is caused by lack of…', o: ['vitamin A', 'vitamin D', 'niacin', 'sodium'], x: 'Retinol is needed for dim-light vision.' },
    { q: 'Excess vitamin D from supplements can cause…', o: ['hypercalcaemia', 'rickets', 'scurvy', 'pellagra'], x: 'High blood calcium.' },
    { q: 'Megaloblastic anaemia is linked to a lack of…', o: ['folate or B12', 'vitamin K', 'sodium', 'vitamin A'], x: 'Large, immature red blood cells.' },
    { q: 'Goitre is a sign of…', o: ['iodine deficiency', 'iron excess', 'calcium excess', 'vitamin E deficiency'], x: 'Thyroid enlargement.' },
    { q: 'Haemochromatosis is an excess of…', o: ['iron', 'calcium', 'iodine', 'fluoride'], x: 'Damages the liver.' },
    { q: 'The number of NEW cases of a disease in a period is its…', o: ['incidence', 'prevalence', 'mortality', 'aetiology'], x: 'Prevalence counts all cases.' },
    { q: 'Hypernatraemia means…', o: ['too much sodium in the blood', 'too little sodium', 'too much potassium', 'too little calcium'], x: 'Cells shrink.' },
    { q: 'Excess protein mainly strains the…', o: ['kidneys and liver', 'eyes', 'skin', 'teeth'], x: 'They remove nitrogen waste.' }
  ],
  exam: [
    { q: 'Explain the difference between a nutritional deficiency and a nutritional excess, giving an example of a condition caused by each. [4]', m: 4, ms: ['deficiency: too little of a nutrient / energy for the body’s needs', 'e.g. rickets / anaemia / scurvy / kwashiorkor', 'excess: too much of a nutrient / energy', 'e.g. obesity / hypertension / hypervitaminosis / haemochromatosis'] },
    { q: 'Describe the visible and non-visible characteristics of iron-deficiency anaemia. [4]', m: 4, ms: ['non-visible: fatigue / weakness / poor concentration', 'non-visible: low haemoglobin / low iron stores in a blood test', 'visible: pale skin / pale inner eyelids', 'visible: split / brittle nails; breathlessness'] },
    { q: 'Discuss the effects of both deficiency and excess of fat-soluble vitamins. [6]', m: 6, ms: ['vitamin A deficiency: night blindness, dry skin, poor growth', 'vitamin A excess: toxic, birth defects (supplements, liver in pregnancy)', 'vitamin D deficiency: rickets / osteomalacia', 'vitamin D excess: hypercalcaemia', 'vitamins E and K: deficiency rare — nerve/muscle problems; bleeding (newborns)', 'fat-soluble vitamins are stored so excess accumulates (hypervitaminosis) — balanced conclusion'] }
  ],
  sims: ['micros'], gens: []
});

TOPICS.push({
  id: '1.11', unit: '1', ref: '1.2.1', title: 'Diet-related diseases: obesity, CVD and type 2 diabetes', short: 'BMI, WtHR, body fat; CHD, stroke, hypertension; insulin resistance',
  summary: 'Obesity, cardiovascular disease and type 2 diabetes are the major diet-related non-communicable diseases in the UK, and they share many risk factors. Learn how obesity is measured, the aetiology of each disease, incidence and prevalence trends, and the risk factors.',
  spec: [
    'Obesity: measuring (BMI, waist-to-height ratio, body fat percentage), aetiology, incidence and prevalence, risk factors, costs to the NHS',
    'Cardiovascular disease (CVD): atherosclerosis, coronary heart disease (CHD), stroke (CVA), hypertension, heart failure',
    'Type 2 diabetes: insulin resistance, aetiology, incidence and prevalence, risk factors',
    'Possible consequences of unsatisfactory nutritional intake including specific causes'
  ],
  learn: [
    { h: 'Obesity: measuring it', html: `
[[d:bmichart]]
<p><b>Body mass index</b> = mass (kg) ÷ height (m)² — a screening tool, not a diagnosis. It does not distinguish fat from muscle, so an athlete can have a high BMI but low body fat.</p>
<div class="tbl"><table><tr><th>BMI</th><th>Classification</th></tr><tr><td>under 18.5</td><td>underweight</td></tr><tr><td>18.5–24.9</td><td>healthy (normal) weight</td></tr><tr><td>25.0–29.9</td><td>overweight</td></tr><tr><td>30.0–34.9</td><td>obese class 1 (moderately obese)</td></tr><tr><td>35.0–39.9</td><td>obese class 2 (severely obese)</td></tr><tr><td>40+</td><td>obese class 3 (very seriously / morbidly obese)</td></tr></table></div>
<p>Lower thresholds (23 and 27.5) are used for people of South Asian, Chinese, Black African and Caribbean backgrounds.</p>
<p><b>Waist-to-height ratio (WtHR)</b> = waist ÷ height — reflects harmful abdominal (visceral) fat. NICE advises keeping your waist <b>less than half your height</b>: 0.4–0.49 healthy; 0.5–0.59 increased risk; 0.6+ highest risk.</p>
<p><b>Body fat percentage</b> — obesity is generally &gt;25% body fat in men and &gt;32% in women. Measured by <b>skinfold callipers</b> (triceps, abdomen) or <b>DEXA</b> and <b>MRI</b> scans (precise and show visceral fat, but expensive and slow).</p>` },
    { h: 'Obesity: causes, trends and risks', html: `
<p><b>Aetiology</b>: a prolonged <b>positive energy balance</b> — excess energy is stored as fat in adipose tissue. Normally 80–90% is <b>subcutaneous</b> (under the skin) and 10–20% <b>visceral</b> (around organs); in obesity visceral fat can reach 35% or more. Visceral fat is metabolically active, releasing hormones and inflammatory chemicals linked to insulin resistance, type 2 diabetes and CVD.</p>
<p>Why people overconsume: ready meals, takeaways and ultra-processed foods (UPFs); large portions; high-energy and alcoholic drinks; late eating; shift work; grazing; “mindless eating” in front of screens; an <b>obesogenic environment</b> with constant access to energy-dense food.</p>
<p><b>Incidence and prevalence</b>: rising since 2015 and one of the leading causes of death in the UK; by 2035 an estimated 33% of the population could be living with obesity and 66% with overweight or obesity. Higher in deprived areas; childhood obesity rose during COVID-19 and <b>doubles between reception and Year 6</b>, with children in the most deprived areas twice as likely to be affected.</p>
<p><b>Risk factors</b>: behavioural (energy-dense diet, overeating, inactivity), biological (genetics, age, medication), psychological (stress, emotional eating), environmental and social (obesogenic environment, low income, no safe space to exercise), early life (maternal health, infant feeding, childhood habits).</p>
<p><b>Costs</b>: direct NHS costs (treatment, diabetes care, medication) run to billions a year; indirect costs include lost productivity, sickness absence and social care.</p>` },
    { h: 'Cardiovascular disease', html: `
[[d:artery]]
<p>The cardiovascular system is the heart, blood vessels and blood (with the lungs supplying oxygen). CVD is caused by an unhealthy lifestyle made worse by biological, genetic, social and medical factors, which lead to <b>atherosclerosis</b> (plaque narrowing arteries) and damage to the heart and vessels.</p>
<p><b>Atherosclerosis</b>: when the artery lining is damaged (by high blood pressure, smoking, high LDL or inflammation), LDL particles enter the wall; immune cells engulf them, forming foam cells and fatty streaks; over time triglycerides, LDL cholesterol, calcium, cell waste and fibrous tissue build a hard <b>plaque (atheroma)</b> that narrows the artery. A plaque can rupture and a clot forms — a <b>thrombosis</b>.</p>
<div class="tbl"><table><tr><th>Condition</th><th>What happens</th></tr>
<tr><td><b>Coronary heart disease (CHD)</b> (ischaemic heart disease)</td><td>coronary arteries narrowed or blocked → <b>angina</b> (chest pain), <b>myocardial infarction</b> (heart attack), heart failure; about 11% of UK deaths. Refined sugars raise blood triglycerides (hyperlipidaemia); saturated fat raises LDL (hypercholesterolaemia)</td></tr>
<tr><td><b>Stroke</b> (cerebrovascular accident, CVA)</td><td>blood supply to part of the brain is cut off; ~85% <b>ischaemic</b> (clot), ~15% <b>haemorrhagic</b> (burst vessel); TIAs are “mini-strokes”. Spot it with <b>F.A.S.T.</b>: Face drooping, Arm weakness, Speech difficulty, Time to call 999</td></tr>
<tr><td><b>Hypertension</b></td><td>blood pressure consistently too high: normal ≈ 120/80 mmHg; diagnosed at <b>140/90</b> (135/85 at home). Systolic = pressure as the heart contracts; diastolic = as it relaxes. A “silent killer” with no symptoms; about 1 in 3 adults. Causes: high salt, obesity, inactivity, alcohol, smoking, age, genetics</td></tr>
<tr><td><b>Heart failure</b></td><td>the heart muscle is weak or stiff and pumps poorly → breathlessness, fatigue, swollen ankles; the leading cause of hospital admission in over-65s</td></tr></table></div>
<p>The underlying lifestyle risks — poor diet, inactivity, smoking, excess alcohol — are the same for all CVDs; men are generally at risk earlier; risk rises with age.</p>` },
    { h: 'Type 2 diabetes', html: `
[[d:insulin]]
<p>A chronic condition where the body does not use insulin properly (<b>insulin resistance</b>) or does not make enough to control blood glucose, causing <b>hyperglycaemia</b> that damages blood vessels, nerves, heart, kidneys and eyes.</p>
<p>In insulin resistance, muscle, fat and liver cells respond poorly to insulin, so glucose stays in the blood; the pancreas makes more insulin to compensate until it becomes exhausted. The <b>insulin resistance cycle</b>: too many (refined) carbohydrates → blood sugar rises → more insulin released → hunger, fatigue and fat storage → more insulin resistance.</p>
<p><b>Aetiology</b>: high-sugar or high-fat diet, inactivity, obesity (especially visceral fat), family history, age (risk rises after 40), ethnicity (South Asian, African Caribbean), stress, some medications (steroids), hormonal changes.</p>
<p><b>Incidence and prevalence</b>: about <b>90% of diabetes</b> in the UK; many cases undiagnosed because it is often symptomless at first; now seen in younger adults and children; prevalence doubled between the 1990s and 2010s alongside obesity. Both type 1 and type 2 diabetes increase CVD risk.</p>` }
  ],
  eqs: [['"BMI" = @frac{"mass (kg)"}{"height (m)"^2}', 'body mass index'], ['"WtHR" = @frac{"waist"}{"height"}', 'waist-to-height ratio (same units)']],
  worked: [
    { q: 'A man has a mass of 92 kg, a height of 1.78 m and a waist of 102 cm. Calculate his BMI and WtHR and comment.', s: ['BMI = 92 ÷ 1.78² = 92 ÷ 3.1684 = 29.0 → overweight (25–29.9)', 'WtHR = 102 ÷ 178 = 0.57 → increased risk (0.5–0.59)', 'His waist is more than half his height, suggesting harmful visceral fat — raised risk of type 2 diabetes and CVD even though BMI is below 30.'], a: 'BMI 29.0 (overweight); WtHR 0.57 (increased risk)' },
    { q: 'Explain how a diet high in saturated fat and salt can lead to coronary heart disease. (4 marks)', s: ['Saturated fat raises LDL cholesterol in the blood.', 'High salt raises blood pressure, which damages the lining of the arteries.', 'LDL enters the damaged wall and a plaque (atheroma) builds up — atherosclerosis — narrowing the coronary arteries.', 'Less oxygen reaches the heart muscle → angina; if a plaque ruptures a clot can block the artery → heart attack.'], a: 'LDL + damaged lining → plaque narrows coronary arteries.' }
  ],
  pitfalls: ['Writing “diabetes” when you mean type 2 diabetes — type 1 is autoimmune and not caused by diet.', 'Treating CHD and CVD as the same — CHD is one form of CVD.', 'Saying heart failure means the heart has stopped — it means it pumps poorly.', 'Relying on BMI alone — it ignores muscle and fat distribution.', 'Forgetting that diet works alongside inactivity, smoking and alcohol — read whether the question asks about diet only.'],
  cards: [
    ['BMI formula?', 'Mass (kg) ÷ height (m)².'],
    ['BMI obese classes?', 'Class 1: 30–34.9; class 2: 35–39.9; class 3: 40+.'],
    ['What does WtHR measure and what is healthy?', 'Abdominal (visceral) fat; keep waist < half height (0.4–0.49).'],
    ['Body-fat % defining obesity?', 'Over 25% (men), over 32% (women).'],
    ['Subcutaneous vs visceral fat?', 'Subcutaneous: under the skin. Visceral: around organs — metabolically active and more harmful.'],
    ['What is an obesogenic environment?', 'Surroundings with constant easy access to energy-dense food and encouragement to overeat.'],
    ['What is atherosclerosis?', 'Build-up of plaque (LDL, triglycerides, calcium, waste, fibrous tissue) that narrows and hardens arteries.'],
    ['CHD outcomes?', 'Angina, myocardial infarction (heart attack), heart failure.'],
    ['Two types of stroke?', 'Ischaemic (~85%, clot) and haemorrhagic (~15%, bleed).'],
    ['What does F.A.S.T. stand for?', 'Face drooping, Arm weakness, Speech difficulty, Time to call 999.'],
    ['Normal and hypertensive blood pressure?', 'Normal ≈ 120/80; hypertension ≥ 140/90 (135/85 at home).'],
    ['Why is hypertension a “silent killer”?', 'It usually has no symptoms.'],
    ['What is insulin resistance?', 'Cells respond poorly to insulin, so glucose stays in the blood.'],
    ['Share of UK diabetes that is type 2?', 'About 90%.'],
    ['Four risk factors for type 2 diabetes?', 'Obesity (visceral fat), inactivity, high sugar/fat diet, age over 40, family history, ethnicity.']
  ],
  quiz: [
    { q: 'A BMI of 36 is classed as…', o: ['obese class 2', 'overweight', 'obese class 1', 'healthy'], x: '35–39.9 = class 2.' },
    { q: 'A WtHR of 0.62 indicates…', o: ['the highest risk of health problems', 'a healthy range', 'underweight', 'no risk'], x: '0.6 or above.' },
    { q: 'Which fat is most linked to insulin resistance?', o: ['Visceral fat', 'Subcutaneous fat', 'Brown fat', 'Dietary fibre'], x: 'Metabolically active fat around organs.' },
    { q: 'A 60 kg woman who is 1.65 m tall has a BMI of about…', o: ['22.0', '36.4', '18.2', '27.5'], x: '60 ÷ 2.72.' },
    { q: 'About what percentage of strokes are ischaemic?', o: ['85%', '15%', '50%', '99%'], x: 'Caused by a clot.' },
    { q: 'Hypertension is diagnosed (clinic reading) at…', o: ['140/90 mmHg or above', '120/80 mmHg', '100/60 mmHg', '200/150 mmHg'], x: '135/85 at home.' },
    { q: 'In the F.A.S.T. test, “A” stands for…', o: ['Arm weakness', 'Angina', 'Anaemia', 'Aspirin'], x: 'Face, Arm, Speech, Time.' },
    { q: 'Heart failure means the heart…', o: ['cannot pump blood effectively', 'has stopped beating', 'is too large to fit the chest', 'beats too fast only'], x: 'Weak or stiff muscle.' },
    { q: 'Type 2 diabetes accounts for about what share of UK diabetes?', o: ['90%', '10%', '50%', '25%'], x: 'Type 1 is the rest (mostly).' },
    { q: 'Which is NOT a risk factor for type 2 diabetes?', o: ['Regular physical activity', 'Obesity', 'Age over 40', 'Family history'], x: 'Activity reduces risk.' },
    { q: 'Childhood obesity in England roughly…', o: ['doubles between reception and Year 6', 'halves during primary school', 'is the same in all areas', 'only affects adolescents'], x: 'And is twice as likely in deprived areas.' },
    { q: 'A diet high in refined sugars is associated with…', o: ['raised blood triglycerides (hyperlipidaemia)', 'low blood pressure', 'rickets', 'scurvy'], x: 'Contributes to CHD risk.' }
  ],
  exam: [
    { q: 'State two methods of measuring obesity other than BMI. [2]', m: 2, ms: ['waist-to-height ratio', 'body fat percentage — skinfold callipers / DEXA / MRI (any two)'] },
    { q: 'Evaluate BMI as a measure of obesity. [4]', m: 4, ms: ['simple, cheap, quick screening tool', 'allows comparison with standard categories / populations', 'does not distinguish fat from muscle — athletes misclassified', 'ignores fat distribution (visceral fat) — WtHR / body fat % add information; ethnicity thresholds differ'] },
    { q: 'Explain how the process of atherosclerosis can lead to a heart attack. [5]', m: 5, ms: ['artery lining damaged (high BP / smoking / high LDL)', 'LDL enters the wall; foam cells / fatty streaks form', 'plaque of fat, cholesterol, calcium and fibrous tissue builds up and hardens', 'coronary artery narrows — less oxygen to heart muscle (angina)', 'plaque ruptures → clot (thrombosis) blocks artery → myocardial infarction'] },
    { q: 'Discuss the factors that contribute to rising rates of type 2 diabetes in the UK. [8]', m: 8, ms: ['obesity, especially visceral fat → insulin resistance', 'diets high in sugar / refined carbohydrate / UPFs', 'low fibre / wholegrain intake', 'sedentary lifestyles / screen time', 'ageing population', 'obesogenic environment / deprivation / cost of healthy food', 'genetics and ethnicity (South Asian, African Caribbean)', 'many undiagnosed; balanced conclusion linking lifestyle and social factors'] }
  ],
  sims: ['bmi'], gens: ['bmi1', 'bmi2', 'whtr1']
});

TOPICS.push({
  id: '1.12', unit: '1', ref: '1.2.1', title: 'Diet-related diseases: teeth, blood, bones, gut, skin and mind', short: 'Dental caries, anaemia, osteoporosis, rickets, digestive disorders, dehydration, skin, mental health',
  summary: 'Poor diet also damages teeth, blood, bones, the digestive system, skin and mental health. Learn the aetiology, incidence and risk factors of dental caries and gum disease, anaemia, osteoporosis, rickets, digestive disorders (constipation, diarrhoea, GERD, IBS, haemorrhoids, gallstones, diverticular disease), dehydration, skin conditions and mental health issues.',
  spec: [
    'Consequences of unsatisfactory intake: anaemia, dehydration, dental problems',
    'Digestion disorders — diverticular disease; osteoporosis',
    'Mental health issues, rickets, skin conditions',
    'Other digestive disorders: constipation, diarrhoea, GERD, IBS, haemorrhoids, gallstones',
    'Aetiology, incidence and prevalence, and risk factors for each condition'
  ],
  learn: [
    { h: 'Dental caries and gum disease', html: `
[[d:tooth]]
<p>Teeth are made of <b>enamel</b> (the hard crown, about 96% <b>hydroxyapatite</b> — calcium and phosphorus), <b>dentine</b> (the main tissue, with nerves and blood supply) and <b>cementum</b> (covering dentine below the gum).</p>
<p>Bacteria form a sticky <b>biofilm</b> — <b>plaque</b> — of bacteria, saliva, food debris and water on teeth and gum margins. They convert <b>sugars into acid</b>, which <b>demineralises</b> enamel until a hole (cavity) exposes the dentine → toothache. The same biofilm inflames gums: <b>gingivitis</b> (swollen, bleeding gums) → <b>periodontitis</b>, which destroys the ligaments and bone holding teeth.</p>
<ul><li><b>Free sugars</b> (added sugar, honey, syrups, fruit juice) are most likely to cause decay; <b>intrinsic sugars</b> inside the cell walls of whole fruit and vegetables are less harmful.</li>
<li><b>Frequency</b> matters: saliva (pH neutral) needs time between sugar exposures to neutralise acid.</li>
<li><b>Fluoride</b> attracts calcium and phosphate back to enamel (remineralisation), forms harder, acid-resistant <b>fluorapatite</b> and reduces bacterial acid. UK water fluoridation began in <b>1964</b> and reaches about 10% of people.</li></ul>
<p>Risk factors: frequent sugar, poor oral hygiene, no professional dental care (hardened plaque = calculus), low saliva, crowded teeth, braces, dentures, smoking, alcohol, diabetes, low socioeconomic status. Oral diseases affect over 3.5 billion people worldwide.</p>` },
    { h: 'Anaemia', html: `
<p><b>Anaemia</b>: haemoglobin or red cell mass is below normal, so less oxygen reaches the tissues → pale skin, fatigue, shortness of breath, light-headedness. Mechanisms: reduced red cell production (usually nutritional), increased destruction (haemolysis) or blood loss.</p>
<ul><li><b>Iron-deficiency anaemia</b> — the leading cause: too little haem iron, or plenty of non-haem iron but too little vitamin C to absorb it.</li>
<li><b>B12 and folate deficiency</b> — red cells are larger than normal but fewer (megaloblastic anaemia).</li>
<li>Also heavy periods, ulcers, infections, chronic disease, genetic disorders (sickle cell, thalassaemia), parasites.</li></ul>
<p>About <b>40%</b> of children aged 6–59 months and women aged 15–49 worldwide are anaemic. Risk factors: age and sex (young children, pregnant women), low iron/B12/folate diets (vegans, low meat), poverty, chronic disease, genetics, parasites, bleeding.</p>` },
    { h: 'Osteoporosis and rickets', html: `
<p>Bone is constantly <b>remodelled</b>: <b>osteoclasts</b> reabsorb old bone and <b>osteoblasts</b> make new bone.</p>
<p><b>Osteoporosis</b> — bone mineral density falls because reabsorption outpaces formation: porous, fragile bones that fracture easily. Main cause: <b>oestrogen deficiency after the menopause</b>; also ageing (fewer osteoblasts, less calcium absorbed), anti-oestrogen cancer treatments, steroids. Affects about <b>1 in 3 women and 1 in 5 men over 50</b>, often undiagnosed until a fracture. Risk factors: age, female sex, family history, low calcium and vitamin D, inactivity, smoking, alcohol, low body weight.</p>
<p><b>Rickets</b> — soft, weak bones in children because the growth plates do not mineralise → pain, deformity (bowed legs), poor growth. Causes: lack of vitamin D, calcium and phosphorus; also genetic disorders, kidney disease, coeliac disease; exclusively breastfed babies without vitamin D supplements. Most cases at <b>3–18 months</b>. One of the most common non-infectious childhood conditions worldwide, and resurging in Europe and North America (less sun, poorer diets). Risk factors: low sun exposure, diets lacking vitamin D or calcium, phytates/oxalates that block calcium, underlying conditions.</p>` },
    { h: 'Digestive disorders', html: `
<div class="tbl"><table><tr><th>Disorder</th><th>What it is</th><th>Dietary causes and risk factors</th></tr>
<tr><td><b>Constipation</b></td><td>fewer than three bowel movements a week; hard stools, straining; can cause faecal impaction. Affects ~30% of people (55% in hospital)</td><td>low fibre, fruit, vegetables and wholegrains; too little water; UPFs and high-fat meals; inactivity; obesity; older age; women; opioids</td></tr>
<tr><td><b>Diarrhoea</b></td><td>more than three loose or liquid stools a day; persistent if over 14 days</td><td>infections and unsafe water are the main cause; high-fat foods, excess sugar and sweeteners (sorbitol), spicy food, caffeine; intolerances (lactose, coeliac). Highest mortality in under-5s</td></tr>
<tr><td><b>GERD</b> (acid reflux)</td><td>stomach acid moves up into the oesophagus → heartburn, regurgitation</td><td>high-fat and high-sugar diets, spicy and acidic foods, fizzy and alcoholic drinks, chocolate, caffeine, late large meals; obesity (visceral fat weakens the sphincter); smoking; age</td></tr>
<tr><td><b>IBS</b></td><td>abdominal pain with altered bowel habit; no structural damage; disrupted gut–brain communication</td><td>high-FODMAP foods, dairy, fatty and spicy foods, caffeine, alcohol, large meals; stress and anxiety; more common in women and younger adults</td></tr>
<tr><td><b>Haemorrhoids</b> (piles)</td><td>swollen veins in the rectum or anus; pain and bleeding</td><td>straining with chronic constipation, low fibre and fluid, UPFs; pregnancy; obesity; sitting; affects half of over-50s</td></tr>
<tr><td><b>Gallstones</b></td><td>solid deposits (cholesterol, bile salts) in the gall bladder; pain in the upper right abdomen after fatty meals</td><td>bile oversaturated with cholesterol; high-fat, high-cholesterol, low-fibre diets; <b>rapid weight loss</b> and fasting (bile sits unused); obesity; women over 40</td></tr>
<tr><td><b>Diverticular disease</b></td><td><b>diverticulosis</b>: small pouches in the colon wall; <b>diverticulitis</b>: pouches inflamed or infected (severe lower-left pain, fever)</td><td>long-term low fibre → hard stools and straining → high pressure; ageing colon; UPFs; inactivity; obesity. Up to 50% of over-60s in Western countries; rare where high-fibre whole-food diets are eaten</td></tr></table></div>
<div class="box def"><b class="lbl">FODMAP</b><p><b>F</b>ermentable — <b>O</b>ligosaccharides (fructans in wheat, onions, garlic; galactans in beans, lentils) — <b>D</b>isaccharides (lactose) — <b>M</b>onosaccharides (fructose: honey, apples) — <b>A</b>nd — <b>P</b>olyols (sugar alcohols; cherries, avocados, peaches).</p></div>` },
    { h: 'Dehydration, skin and mental health', html: `
<p><b>Dehydration</b>: blood becomes concentrated, circulation and organ function fall. Causes: too little fluid; diarrhoea, vomiting, fever, sweating; diabetes, kidney disease, diuretics; alcohol and caffeine (mild diuretics); high-sodium diets. Common in older adults (reduced thirst), hospital patients and during heatwaves.</p>
<p><b>Skin conditions</b>: <b>acne</b> (hormones, stress, skin and gut microbiome; high-GL, sugary and fatty diets), <b>eczema</b> (genetics, skin barrier and immune problems, food allergies, low fibre), <b>psoriasis</b> (chronic immune inflammation; worsened by saturated fat, red and processed meat, alcohol, obesity; helped by Mediterranean and plant-rich diets).</p>
<p><b>Mental health issues</b>: shortages of B vitamins, magnesium, zinc and omega-3 impair neurotransmitter synthesis; high-sugar and UPF diets promote inflammation and unstable blood sugar, linked to depression and anxiety; diets high in fibre, fruit, vegetables and antioxidants support wellbeing and gut health. Diet is a <b>modifiable risk factor</b>; other risks are genetics, obesity and diabetes, food insecurity, inactivity, trauma, poverty and isolation. Mental disorders are a leading cause of disability, especially in 15–29-year-olds.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why sipping a sugary drink throughout the day is worse for teeth than drinking it with a meal. (3 marks)', s: ['Each time sugar reaches the plaque bacteria they convert it to acid, which demineralises enamel.', 'Saliva needs time between exposures to neutralise the acid and allow remineralisation.', 'Frequent sipping keeps the mouth acidic for most of the day, so enamel is repeatedly attacked and decay is more likely; one exposure with a meal gives a single acid attack.'], a: 'Frequency of acid attacks, not just the amount of sugar.' },
    { q: 'Explain why a very low-calorie diet with rapid weight loss can increase the risk of gallstones. (3 marks)', s: ['When fat stores are used rapidly, extra cholesterol is released into bile.', 'With little fat in the diet, the gall bladder is not stimulated to empty, so bile stays in it longer.', 'The over-concentrated bile allows cholesterol crystals to form and clump into stones.'], a: 'More cholesterol in bile + poor gall-bladder emptying.' }
  ],
  pitfalls: ['Answering “a bad diet causes illness” — name the disease and explain the dietary cause.', 'Confusing osteoporosis (bone loss) with rickets or osteomalacia (poor mineralisation).', 'Ignoring frequency of sugar intake when explaining caries.', 'Forgetting that IBS causes no structural damage to the gut.', 'Missing a balanced view in “assess” or “evaluate” questions — include positives and negatives.'],
  cards: [
    ['How do sugars cause dental caries?', 'Plaque bacteria convert sugar to acid, which demineralises enamel.'],
    ['Free vs intrinsic sugars?', 'Free: added or released (juice, honey) — more harmful. Intrinsic: inside cell walls of whole fruit/veg.'],
    ['Gingivitis vs periodontitis?', 'Gingivitis: inflamed, bleeding gums. Periodontitis: gum disease destroying the bone and ligaments holding teeth.'],
    ['How does fluoride protect teeth?', 'Aids remineralisation, forms fluorapatite, reduces bacterial acid.'],
    ['Three mechanisms of anaemia?', 'Reduced red cell production, increased destruction, blood loss.'],
    ['Osteoclasts vs osteoblasts?', 'Osteoclasts reabsorb old bone; osteoblasts make new bone.'],
    ['Main cause of osteoporosis?', 'Oestrogen deficiency after the menopause (plus ageing).'],
    ['Age at which most rickets cases occur?', '3–18 months.'],
    ['Definition of constipation?', 'Fewer than three bowel movements a week.'],
    ['What is GERD?', 'Gastro-oesophageal reflux disease — stomach acid rises into the oesophagus.'],
    ['What does FODMAP stand for?', 'Fermentable Oligosaccharides, Disaccharides, Monosaccharides And Polyols.'],
    ['Diverticulosis vs diverticulitis?', 'Diverticulosis: pouches in the colon wall. Diverticulitis: pouches inflamed/infected.'],
    ['Why can rapid weight loss cause gallstones?', 'Extra cholesterol released into bile and the gall bladder empties less.'],
    ['Dietary links with psoriasis?', 'Worsened by saturated fat, red/processed meat, alcohol, obesity; helped by Mediterranean diets.'],
    ['Nutrients linked to mental health?', 'B vitamins, magnesium, zinc, omega-3; fibre and antioxidants support wellbeing.']
  ],
  quiz: [
    { q: 'Tooth enamel is about 96%…', o: ['hydroxyapatite', 'collagen', 'keratin', 'fluoride'], x: 'Calcium phosphate crystals.' },
    { q: 'Which sugars are most likely to cause tooth decay?', o: ['Free sugars such as fruit juice and added sugar', 'Intrinsic sugars in whole apples', 'Lactose in cheese', 'Starch in bread'], x: 'Free sugars are released from cell walls.' },
    { q: 'Fluoride strengthens enamel by forming…', o: ['fluorapatite', 'plaque', 'dentine', 'calculus'], x: 'Harder and less acid-soluble.' },
    { q: 'Megaloblastic anaemia results from lack of…', o: ['B12 or folate', 'vitamin C only', 'sodium', 'vitamin K'], x: 'Large, immature red cells.' },
    { q: 'Osteoporosis affects about … of women over 50.', o: ['1 in 3', '1 in 100', '1 in 2 men', 'all'], x: '1 in 5 men.' },
    { q: 'The cells that build new bone are…', o: ['osteoblasts', 'osteoclasts', 'erythrocytes', 'enterocytes'], x: 'Osteoclasts reabsorb bone.' },
    { q: 'Constipation is defined as…', o: ['fewer than three bowel movements a week', 'more than three loose stools a day', 'any abdominal pain', 'blood in stools'], x: 'Hard stools and straining.' },
    { q: 'Which disorder causes pain in the upper right abdomen after fatty meals?', o: ['Gallstones', 'IBS', 'Haemorrhoids', 'Diverticulosis'], x: 'The gall bladder spasms against a blockage.' },
    { q: 'Diverticular disease is strongly linked with…', o: ['long-term low-fibre diets', 'high vitamin C intake', 'too much water', 'eating fish'], x: 'Hard stools increase colon pressure.' },
    { q: 'In FODMAP, the “D” stands for…', o: ['disaccharides such as lactose', 'dextrin', 'dietary fibre', 'dehydration'], x: 'Fermentable oligo-, di-, monosaccharides and polyols.' },
    { q: 'GERD symptoms can be worsened by…', o: ['large late meals, fatty food and obesity', 'drinking water', 'eating vegetables', 'sleeping upright'], x: 'Visceral fat weakens the sphincter.' },
    { q: 'Which statement about IBS is correct?', o: ['It causes pain and altered bowel habit without structural damage', 'It destroys the villi', 'It is an allergy', 'It only affects men'], x: 'A disorder of gut–brain communication.' }
  ],
  exam: [
    { q: 'Explain how fluoride helps to prevent dental caries. [3]', m: 3, ms: ['speeds remineralisation — attracts calcium and phosphate back to enamel', 'replaces hydroxyl groups to form fluorapatite — harder / less acid-soluble', 'interferes with bacterial metabolism — less acid produced'] },
    { q: 'Explain why post-menopausal women are at increased risk of osteoporosis. [4]', m: 4, ms: ['oestrogen falls after the menopause', 'oestrogen normally reduces bone reabsorption / supports calcium absorption and bone formation', 'osteoclast activity exceeds osteoblast activity — bone density falls', 'porous, fragile bones → fractures; ageing also reduces calcium absorption'] },
    { q: 'Discuss how dietary fibre and fluid intake affect the risk of digestive disorders. [6]', m: 6, ms: ['low fibre + low fluid → hard, small stools → constipation', 'straining → haemorrhoids', 'raised colon pressure → diverticulosis / diverticulitis', 'fibre supports gut bacteria / microbiome — IBS and general gut health', 'too much fermentable fibre (FODMAPs) can trigger IBS symptoms', 'fluid needed for fibre to work; balanced conclusion'] },
    { q: 'Assess the role of diet in mental health. [6]', m: 6, ms: ['deficiencies of B vitamins, magnesium, zinc, omega-3 impair neurotransmitter synthesis', 'high sugar / UPF diets → inflammation, unstable blood sugar → linked to depression / anxiety', 'high-fibre, fruit and vegetable diets → better wellbeing / gut–brain axis', 'diet is a modifiable risk factor that can aid recovery', 'but mental health is multifactorial — genetics, trauma, poverty, isolation', 'relationship is two-way — mental health affects eating; balanced judgement'] }
  ],
  sims: ['teeth'], gens: []
});

TOPICS.push({
  id: '1.13', unit: '1', ref: '1.2.2', title: 'Nutritional needs of the life stages', short: 'DRVs; infancy to eldership; pregnancy, postpartum and menopause',
  summary: 'Dietary reference values set benchmarks for nutrient intake. Nutritional needs change through the nine life stages — infancy, toddler, early and middle childhood, adolescence, early, middle and late adulthood and eldership — and during pregnancy, breastfeeding and the menopause.',
  spec: [
    'Dietary reference values: LRNI, EAR, RNI and safe intake; back-of-pack and front-of-pack labels',
    'Infancy — neonate and up to one year old; toddler — one to three years',
    'Early childhood — three to eight years; middle childhood — nine to eleven years',
    'Adolescence — twelve to eighteen years',
    'Early adulthood 19–35; middle adulthood 36–50; late adulthood 51–65; eldership — over 65',
    'Other life stages: pre/post-natal (and postpartum) and pre/post-menopausal'
  ],
  learn: [
    { h: 'Dietary reference values', html: `
[[d:drv]]
<p><b>Dietary reference values (DRVs)</b> are benchmarks from scientific evidence about population needs. They are a range, not a single “ideal” number:</p>
<ul><li><b>LRNI</b> (lower reference nutrient intake) — meets the needs of only <b>2.5%</b> of people (those with the lowest needs). Below this, deficiency is likely.</li>
<li><b>EAR</b> (estimated average requirement) — meets the needs of <b>50%</b>. Used for energy.</li>
<li><b>RNI</b> (reference nutrient intake) — meets the needs of <b>97.5%</b> (almost everyone).</li>
<li><b>Safe intake</b> — used when evidence is insufficient (usually micronutrients).</li></ul>
<p><b>Back-of-pack</b> tables (per 100 g and per portion) let people compare intakes with DRVs; <b>front-of-pack traffic lights</b> show high (red), medium (amber) or low (green) fat, saturates, sugars and salt. The %RI on labels is based on an average adult woman.</p>` },
    { h: 'Infancy (0–12 months)', html: `
<ul><li><b>Exclusive milk feeding</b> for about the first <b>six months</b>. Breastfeeding is recommended: <b>colostrum</b> (the first milk) contains antibodies and growth factors; breast milk is easier to digest. Breastfed babies need a <b>vitamin D supplement (8.5–10 µg)</b>.</li>
<li>All UK <b>formula</b> must meet the same standards and contains vitamin D (supplement only if under 500 ml formula a day). <b>Cow’s milk</b> is not suitable as the main drink — its protein can irritate the gut, it is high in saturated fat and has too much phosphorus.</li>
<li>Babies are born with about <b>six months of iron</b> (mostly laid down late in pregnancy) — preterm babies may need iron earlier.</li>
<li><b>Weaning</b> at around six months, when the baby can sit supported and hold its head steady, coordinate eyes, hands and mouth, and swallow rather than spit food out. Start with less sweet vegetables (broccoli, cauliflower) and finger foods; three meals by 7–9 months; three meals plus milk by 10–12 months; healthy snacks from 12 months. New foods may need up to 10 tries.</li>
<li>No added <b>salt</b> (kidneys) or <b>sugar</b> (decay); no <b>honey</b> before 12 months (botulism). Shop-bought baby foods can be sweeter and lack texture; sucking from pouches raises decay risk.</li></ul>` },
    { h: 'Toddlers and childhood (1–11)', html: `
<div class="tbl"><table><tr><th>Stage</th><th>Needs and advice</th></tr>
<tr><td><b>Toddler (1–3)</b></td><td>three meals and two snacks; family-style meals without added salt or sugar; <b>full-fat milk from 1</b> (at least 350 ml or two dairy servings a day), lower-fat from 2 (skimmed not as a drink before 5); iron-rich foods daily; <b>vitamin D 10 µg year-round (1–4 years)</b>; unsweetened calcium-fortified plant drinks (no rice drinks under 5 — arsenic); no blue or soft cheeses (Listeria); protein: two portions of plant or one of animal protein a day; oily fish weekly; no whole nuts under 5 (choking); energy- and nutrient-dense foods — <b>no wholegrain-heavy diets before 2</b>; dried fruit only with meals; pressure-free mealtimes. The Eatwell Guide applies gradually from 2 and fully by 5</td></tr>
<tr><td><b>Early childhood (3–8)</b></td><td>steady growth and more activity: protein (plant and lean animal), wholegrains, omega-3/6, less saturated fat; calcium and vitamin D (bones), iron (cognition), vitamins A and C (immunity, skin), B vitamins; water as the main drink; vitamin D in winter only from age 4. Issues: excess sugar and salt, iron deficiency in fussy eaters, low fibre and constipation</td></tr>
<tr><td><b>Middle childhood (9–11)</b></td><td>growth slows but activity increases — slightly larger portions; calcium and vitamin D critical before adolescence; same issues as early childhood</td></tr></table></div>` },
    { h: 'Adolescence (12–18)', html: `
<ul><li>Energy needs rise sharply with the <b>growth spurt</b> and hormonal change; follow the Eatwell Guide.</li>
<li><b>Calcium, phosphorus and vitamin D</b> to build towards <b>peak bone mass</b> (reached in the late twenties) — often missed in answers.</li>
<li><b>Iron</b> — boys for muscle growth, girls to replace menstrual losses; vitamin C with plant iron; B2, B6, B9, B12 for red blood cells.</li>
<li><b>Zinc</b> for growth and sexual maturation; more B vitamins for energy.</li>
<li>More autonomy over food (money, school choices) → low fibre, high fat and sugar; family meals matter. Issues: anaemia (especially girls), low calcium, excess sugar and fat.</li></ul>` },
    { h: 'Adulthood (19–65)', html: `
<p>Adults should get about <b>50% of energy from starchy carbohydrates, 35% from healthy fats and 15% from lean protein</b>; vitamin D in winter (all year if skin is dark or little time outdoors). Reference: about 2000 kcal (women) and 2500 kcal (men); protein RNI 0.75 g/kg.</p>
<div class="tbl"><table><tr><th>Stage</th><th>Key points</th></tr>
<tr><td><b>Early adulthood (19–35)</b></td><td>bone density still rising to the late twenties — calcium, phosphorus, vitamin D; women need almost twice the iron of men; activity often falls → weight gain; anaemia common in women; digestive issues rise with stress and lifestyle change</td></tr>
<tr><td><b>Middle adulthood (36–50)</b></td><td>BMR declines — lower energy needs; bone density begins to fall; antioxidants reduce oxidative stress; issues: weight gain, anaemia (menstruating women), vitamin D deficiency, low-fibre digestive disorders</td></tr>
<tr><td><b>Late adulthood (51–65)</b></td><td>BMR and activity fall further; osteoporosis risk (post-menopause) — calcium, phosphorus, vitamin D; B12 and folate for anaemia; magnesium and zinc for muscles and immunity; fibre and fluid for digestion</td></tr></table></div>
<div class="box warn"><b class="lbl">Pitfall</b><p>Adults and older people do not need more protein “for growth” — very active adults need a little more for repair, and older adults during illness and recovery.</p></div>` },
    { h: 'Eldership (65+)', html: `
<ul><li>Energy needs fall with BMR and activity, so food must be <b>nutrient-dense</b>; macronutrient proportions stay the same.</li>
<li>Protein needs rise slightly to maintain muscle (<b>sarcopenia</b>), and more again <b>beyond 80</b>.</li>
<li>Calcium and vitamin D (osteoporosis); <b>B12</b> absorption decreases; folate and B vitamins for energy and cognition; magnesium, zinc and antioxidants for muscles and immunity.</li>
<li>More fibre (constipation, heart health) and encouraged fluid (reduced thirst → dehydration).</li>
<li>Barriers: chewing and swallowing problems, dental issues, reduced taste and smell (so more salt and sugar added), low appetite, mobility, heavy pans, isolation → risk of <b>malnutrition</b>.</li></ul>` },
    { h: 'Pregnancy, postpartum and menopause', html: `
<div class="tbl"><table><tr><th>Stage</th><th>Needs and advice</th></tr>
<tr><td><b>Pre-natal (pregnancy)</b></td><td><b>400 µg folic acid</b> from about three months before conception to 12 weeks (neural tube defects); “eating for two” is a myth — <b>about +200 kcal in the third trimester</b> only; nearly all micronutrient needs rise: iron (blood volume, fetus), calcium and vitamin D (bones), protein (growth), omega-3 (brain, eyes). High-dose retinol linked to birth defects — supplements use beta-carotene. Avoid high-risk foods (list on the NHS website). Issues: anaemia (iron supplements may cause constipation), heartburn late in pregnancy, excessive weight gain, <b>gestational diabetes</b> (temporary high blood sugar), greater susceptibility to infection</td></tr>
<tr><td><b>Postpartum / breastfeeding</b></td><td>about <b>+400–500 kcal</b> a day; more protein, calcium and vitamin D (mother’s bones), B12 and iodine (baby’s nervous system) and plenty of fluid; risks of fatigue, dehydration and maternal nutrient depletion</td></tr>
<tr><td><b>Pre- and perimenopausal</b></td><td>menopause usually 45–55 (post-menopausal by ~58); perimenopause brings irregular, sometimes heavier periods → more iron, folate, B6, B12 (and vitamin C with plant iron); symptoms include hot flushes, poor sleep, mood swings, brain fog, joint pain, weight gain</td></tr>
<tr><td><b>Post-menopausal</b></td><td>iron needs fall sharply; oestrogen loss → <b>osteoporosis</b> risk: calcium-rich foods, vitamin D, weight-bearing exercise; wholegrains, vegetables and protein; less saturated fat, sugar and salt</td></tr></table></div>
<p>Terms: <b>prenatal/antenatal</b> = before birth; <b>postnatal</b> = the baby after birth (often used generally); <b>postpartum</b> = the mother after birth.</p>` }
  ],
  eqs: [['"protein RNI (adult)" = 0.75 "g" × "body mass (kg)"', '']],
  worked: [
    { q: 'Explain the difference between the EAR and the RNI and why labels use a reference intake based on an adult woman. (4 marks)', s: ['The EAR is the intake that meets the needs of 50% of a population — used for energy.', 'The RNI meets the needs of 97.5% of the population, so it is enough for almost everyone.', 'Reference intakes on labels use a single figure (e.g. 2000 kcal) based on an average adult woman.', 'This may overestimate needs for young children or underestimate them for active men and adolescents.'], a: 'EAR 50%; RNI 97.5%; RI = average woman, not everyone.' },
    { q: 'Explain why nutrient-dense foods are particularly important in eldership. (3 marks)', s: ['Older people have a lower BMR and are usually less active, so they need less energy.', 'Their needs for protein, calcium, vitamin D and B12 stay the same or increase.', 'Appetite is often small and eating may be difficult, so each mouthful must provide plenty of nutrients without excess energy.'], a: 'Lower energy needs but same/higher nutrient needs and small appetite.' }
  ],
  pitfalls: ['Saying pregnant women should “eat for two”.', 'Forgetting protein, iron and folate in pregnancy answers.', 'Missing calcium, phosphorus and vitamin D for peak bone mass in adolescence.', 'Giving toddlers low-fat, high-fibre adult diets, honey, whole nuts or rice drinks.', 'Treating all older people the same — needs change again after 80 and with illness.'],
  cards: [
    ['LRNI, EAR, RNI — percentage of population whose needs are met?', 'LRNI 2.5%; EAR 50%; RNI 97.5%.'],
    ['What is colostrum?', 'The first breast milk, rich in antibodies and growth factors.'],
    ['Vitamin D for breastfed babies?', '8.5–10 µg a day.'],
    ['Why is cow’s milk unsuitable as a main drink before 12 months?', 'Protein irritates the gut, high saturated fat, too much phosphorus.'],
    ['Three signs a baby is ready for solids?', 'Sits supported with head steady; coordinates eyes, hands and mouth; swallows food.'],
    ['Toddler milk recommendation?', 'Full-fat from 1; at least 350 ml or two dairy servings a day; lower-fat from 2.'],
    ['Vitamin D advice for 1–4 year olds?', '10 µg a day all year.'],
    ['Why no rice drinks for under-5s?', 'High in arsenic.'],
    ['When is peak bone mass reached?', 'In the late twenties.'],
    ['Adult energy split?', '50% starchy carbohydrate, 35% healthy fats, 15% protein.'],
    ['Extra energy in pregnancy?', 'About 200 kcal/day in the third trimester only.'],
    ['Extra energy when breastfeeding?', 'About 400–500 kcal/day.'],
    ['What is gestational diabetes?', 'Temporary high blood sugar during pregnancy.'],
    ['Why is osteoporosis risk higher after the menopause?', 'Oestrogen falls, increasing bone reabsorption and reducing calcium absorption.'],
    ['What is sarcopenia?', 'Age-related loss of muscle mass and strength.'],
    ['Prenatal vs postnatal vs postpartum?', 'Prenatal: before birth. Postnatal: the baby after birth. Postpartum: the mother after birth.']
  ],
  quiz: [
    { q: 'The RNI meets the needs of what percentage of a population?', o: ['97.5%', '50%', '2.5%', '100%'], x: 'LRNI 2.5%, EAR 50%.' },
    { q: 'Exclusive milk feeding is recommended for about…', o: ['the first 6 months', 'the first 6 weeks', '12 months', '2 years'], x: 'Then weaning begins.' },
    { q: 'Why should salt not be added to a baby’s food?', o: ['Immature kidneys cannot cope with it', 'It destroys vitamin D', 'It causes rickets', 'It adds fibre'], x: 'Kidney damage.' },
    { q: 'Babies are born with iron stores lasting about…', o: ['six months', 'six weeks', 'two years', 'one week'], x: 'Why iron-rich weaning foods matter.' },
    { q: 'Rice drinks should not be given to children under five because they…', o: ['contain arsenic', 'contain lactose', 'are too high in protein', 'contain gluten'], x: 'Choose calcium-fortified soya or oat drinks.' },
    { q: 'Whole nuts should not be given to children under five because of…', o: ['choking risk', 'too much vitamin C', 'lactose', 'salt'], x: 'Ground nuts and nut butters are fine unless allergic.' },
    { q: 'Adolescents especially need calcium, phosphorus and vitamin D to…', o: ['build towards peak bone mass', 'prevent scurvy', 'digest fat', 'make insulin'], x: 'Peak bone mass by the late twenties.' },
    { q: 'Extra energy in pregnancy is needed…', o: ['only in the third trimester, about 200 kcal', 'throughout — double normal intake', 'only in the first trimester', 'never'], x: '“Eating for two” is a myth.' },
    { q: 'Breastfeeding increases energy needs by about…', o: ['400–500 kcal a day', '50 kcal a day', '2000 kcal a day', 'nothing'], x: 'Plus protein, calcium, fluid.' },
    { q: 'After the menopause, the iron requirement…', o: ['falls sharply', 'doubles', 'stays the same', 'rises slightly'], x: 'Menstruation has stopped.' },
    { q: 'Beyond age 80, protein needs…', o: ['increase to help maintain muscle', 'fall to zero', 'stay exactly as in childhood', 'are met by fat'], x: 'Sarcopenia prevention.' },
    { q: 'A key issue in eldership is…', o: ['low energy needs but unchanged or higher nutrient needs', 'rapid growth', 'menstrual iron loss', 'building peak bone mass'], x: 'Nutrient-dense foods are essential.' },
    { q: 'Late adulthood in the specification is…', o: ['51–65 years', '36–50 years', 'over 65', '19–35'], x: '51–65.' }
  ],
  exam: [
    { q: 'State two reasons why weaning should begin at around six months. [2]', m: 2, ms: ['iron stores from birth are running out', 'milk alone no longer meets energy / nutrient needs', 'baby needs to learn to chew / accept textures and flavours (any two)'] },
    { q: 'Explain the nutritional needs of adolescents. [6]', m: 6, ms: ['growth spurt — increased energy needs', 'protein for growth of muscle / tissue', 'calcium, phosphorus and vitamin D for peak bone mass', 'iron — girls (menstruation), boys (muscle, blood volume); vitamin C with plant iron', 'zinc for growth / sexual maturation; B vitamins for energy / red blood cells', 'concerns: autonomy → fast food, sugary drinks, skipped meals; anaemia, low calcium'] },
    { q: 'Assess the nutritional advice that should be given to a woman in the first trimester of pregnancy. [6]', m: 6, ms: ['folic acid 400 µg — prevents neural tube defects', 'vitamin D 10 µg', 'no extra energy needed yet — “eating for two” myth', 'avoid high-dose retinol (liver, vitamin A supplements) — birth defects', 'avoid high-risk foods (Listeria, raw meat, raw non-Lion eggs, high-mercury fish, alcohol; limit caffeine)', 'iron, calcium, protein, omega-3 from a balanced diet; manage nausea — reasoned conclusion'] },
    { q: 'Compare the nutritional needs of a toddler and an adult aged 80. [8]', m: 8, ms: ['toddler: rapid growth — high energy and protein per kg', 'toddler: small stomach — three meals + two snacks, energy- and nutrient-dense, not too much fibre', 'toddler: full-fat milk, iron, calcium, vitamin D 10 µg year-round', 'older adult: lower energy needs (BMR, activity)', 'older adult: nutrient density; more protein beyond 80 (sarcopenia)', 'older adult: vitamin D, calcium (osteoporosis); B12 absorption falls', 'older adult: fibre and fluid (constipation, dehydration)', 'both at risk of undernutrition; eating difficulties in both — comparison drawn'] }
  ],
  sims: ['lifestage'], gens: ['rni1']
});

TOPICS.push({
  id: '1.14', unit: '1', ref: '1.2.2', title: 'Medical conditions, culture and dietary support', short: 'Allergies, intolerances, CVD, diabetes; culture, religion, ethics; support',
  summary: 'Medical conditions linked to life stages change what people can eat and which nutrients are at risk. Culture — eating patterns, lifestyle choices, religious beliefs and ethical diets — shapes food choice. Government, NHS and charity support helps people meet their needs.',
  spec: [
    'Medical conditions that may be associated with different life stages and how they affect nutritional intake and food choices: allergies, CVD, coeliac disease, high blood pressure',
    'Medical conditions: hypercholesterolemia, intolerances such as lactose intolerance, obesity, Type 1/Type 2 diabetes',
    'How culture affects nutritional intake and food choices: eating patterns, lifestyle choices, religious beliefs, vegans/vegetarians/lacto vegetarians',
    'Support available: Government guidelines (e.g. Healthy Eating Guidance); NHS recommendations (e.g. the Eatwell Guide)'
  ],
  learn: [
    { h: 'Allergies and nutrient replacement', html: `
<p>An <b>allergy</b> is an abnormal immune response (IgE → histamine) to a food; it can be life-threatening (anaphylaxis). The 14 main allergens must be emphasised on labels and declared on menus. Most appear in infancy or early childhood but can start at any age — triggered by environmental, hormonal (puberty, pregnancy, menopause) or immune changes, genes, illness or stress.</p>
<div class="tbl"><table><tr><th>Allergy</th><th>Typical onset / outcome</th><th>Nutrients at risk</th><th>Replace with</th></tr>
<tr><td>Cow’s milk</td><td>infancy; most outgrow it by 5</td><td>calcium, vitamin D, protein</td><td>fortified soya/oat/almond products, tofu, leafy greens</td></tr>
<tr><td>Egg</td><td>6–15 months; ~70% can eat eggs by 16</td><td>HBV protein, B12, selenium, choline</td><td>lean meat, fish, legumes; B12-fortified foods</td></tr>
<tr><td>Peanut / tree nut</td><td>peanut ~1–2 years, tree nut ~3 years; only ~1 in 5 outgrow peanut allergy; early introduction after six months reduces risk</td><td>essential fatty acids, vitamin E, magnesium</td><td>seeds (chia, flax, sunflower), olive and rapeseed oils</td></tr>
<tr><td>Fish / shellfish</td><td>any age</td><td>omega-3, iodine, selenium</td><td>chia, flax, walnuts; algae supplements</td></tr>
<tr><td>Soya</td><td>any age; hardest for vegans</td><td>protein variety, calcium</td><td>pulses, wholegrains (+ vitamin C); soya-free fortified products; low-oxalate greens (kale, pak choi)</td></tr></table></div>
<p><b>Coeliac disease</b> is autoimmune: gluten (wheat, barley, rye; oats if contaminated) makes the immune system attack the small-intestine lining; the <b>villi shrink</b> → malabsorption of all nutrients, weight loss (in teenagers sometimes mistaken for an eating disorder). A lifelong gluten-free diet removes fibre, B vitamins and iron (from wholegrain and fortified wheat) — replace with vegetables, potato skins, quinoa, brown rice and animal foods; vegans need vitamin C with non-haem iron.</p>` },
    { h: 'Intolerances', html: `
<p>Intolerances are <b>not immune responses</b> and are rarely life-threatening; they are usually a difficulty digesting something (often an enzyme deficiency). Symptoms — bloating, gas, diarrhoea, pain, headaches, fatigue — are delayed and depend on the amount eaten. They often appear later in life (enzyme decline, gut health, medication).</p>
<div class="tbl"><table><tr><th>Intolerance</th><th>Cause</th><th>Risks of avoidance</th><th>Management</th></tr>
<tr><td>Lactose</td><td>too little lactase; declines after weaning (often 2–5 years) or later</td><td>calcium, vitamin D, B2</td><td>lactose-free milk; calcium- and vitamin D-fortified foods</td></tr>
<tr><td>Fructose</td><td>usually genetic — the small intestine cannot absorb fructose; or secondary to gut problems</td><td>vitamin C, folate, fibre</td><td>low-fructose, high-vitamin C fruit (berries, citrus); vegetables, wholegrains</td></tr>
<tr><td>Gluten (non-coeliac gluten sensitivity, NCGS)</td><td>reaction to gluten with no villi damage; usually adult onset</td><td>fibre, B vitamins (folate, B1), iron → anaemia</td><td>gluten-free wholegrains (quinoa, buckwheat, brown rice), fortified GF products</td></tr></table></div>
<div class="box tip"><b class="lbl">Top tip</b><p>In case studies, give <b>specific alternatives</b> — e.g. “lactose-free milk” for lactose intolerance — not just “avoid dairy”.</p></div>` },
    { h: 'Cardiovascular and metabolic conditions', html: `
<div class="tbl"><table><tr><th>Condition</th><th>Dietary management</th></tr>
<tr><td><b>CVD</b> (most common over 65)</td><td>less saturated fat (fatty meat, butter) to lower LDL; less sodium (UPFs, salty snacks, less salt in cooking); control energy; more fibre (wholegrains, fruit, veg), lean protein, omega-3 (oily fish, nuts), complex carbohydrates. Changes late in life are hard — familiar tastes change and cutting foods (e.g. cheese) can cut nutrients (calcium)</td></tr>
<tr><td><b>High blood pressure</b> (risk rises sharply after 60)</td><td>reduce sodium: avoid UPFs, fast food, cured meats, salty snacks and some canned foods; follow the <b>DASH</b> or a <b>Mediterranean</b> diet — vegetables, fruit, wholegrains, low-fat dairy, poultry, fish, beans, nuts, extra virgin olive oil; rich in potassium, calcium, magnesium and fibre</td></tr>
<tr><td><b>Hypercholesterolaemia</b></td><td>cut fatty meat, full-fat dairy, fried food and UPF snacks; more fruit, vegetables, wholegrains and fibre; unsaturated fats (olive oil, avocado, nuts, seeds, oily fish); plant sterols/stanols; exercise; sometimes medication</td></tr>
<tr><td><b>Obesity</b></td><td>now seen in all life stages — childhood obesity often apparent at 5–6 and rises in adolescence (overconsumption, screen time, stress, family habits, income); risk rises as BMR slows; long-term sustainable diet and lifestyle change</td></tr>
<tr><td><b>Type 1 diabetes</b></td><td>autoimmune destruction of pancreatic beta cells → little or no insulin; usually starts in childhood; not preventable by diet; managed by carbohydrate monitoring, consistent meal timing and matching insulin to food</td></tr>
<tr><td><b>Type 2 diabetes</b></td><td>insulin resistance linked to overweight, inactivity, genetics and age; managed by diet, activity, then medication or insulin: wholegrains, vegetables, fruit, lean protein, healthy fats; limit refined carbohydrate, sugary foods and drinks; high-fibre, low-GI foods</td></tr></table></div>` },
    { h: 'Culture, eating patterns and lifestyle', html: `
<p>Cultural heritage shapes staple foods and cooking methods: <b>Mediterranean</b> diets (olive oil, vegetables, legumes, fish) support heart health; traditional Northern European diets are higher in saturated fat from meat and dairy. In Spain meals are eaten late (tapas); many Asian cultures share communal dishes, improving variety.</p>
<p><b>Eating patterns</b>: skipping breakfast leads to overeating later; irregular schedules reduce balanced meals; snacking can help (fruit, nuts) or harm (UPFs); habits formed in early childhood are hard to change — regular, stress-free family meals are the most effective influence. Modern life brings convenience food, shift work, late eating, more fast-food outlets, globalised “Westernised” diets, screen-time snacking and clever marketing.</p>
<p><b>Lifestyle choices</b> — diet, activity, substance use, sleep, stress, social life — reflect cultural, economic and personal values.</p>` },
    { h: 'Religious beliefs and ethical diets', html: `
<div class="tbl"><table><tr><th>Religion</th><th>Food practices</th></tr>
<tr><td>Hinduism, Buddhism, Seventh-Day Adventists</td><td>often vegetarian or vegan; many avoid beef — plan varied plant proteins; B12 risk if vegan</td></tr>
<tr><td>Islam</td><td>halal meat (specific slaughter); no pork or alcohol; moderation, avoiding waste; <b>Ramadan</b> — fasting dawn to sunset for about a month (vulnerable people and some students may be exempt)</td></tr>
<tr><td>Judaism</td><td>kosher; no pork or shellfish; meat and dairy not eaten together — often a 3–6 hour wait between them</td></tr>
<tr><td>Christianity</td><td>few restrictions; some avoid meat on Fridays or give up foods in Lent</td></tr></table></div>
<div class="tbl"><table><tr><th>Diet</th><th>Excludes</th><th>Includes</th><th>Watch</th></tr>
<tr><td>Pescetarian</td><td>meat</td><td>fish</td><td>high saturated fat if fish is low and dairy high; mercury in large fish (shark, swordfish, king mackerel, bigeye tuna)</td></tr>
<tr><td><b>Lacto-vegetarian</b></td><td>meat, fish, eggs</td><td>dairy</td><td>B12-fortified foods; saturated fat if full-fat dairy replaces plant protein</td></tr>
<tr><td>Ovo-vegetarian</td><td>meat, fish, dairy</td><td>eggs</td><td>calcium-fortified dairy alternatives</td></tr>
<tr><td>Lacto-ovo vegetarian</td><td>meat, fish</td><td>eggs and dairy</td><td>iron, zinc, omega-3</td></tr>
<tr><td><b>Vegan</b></td><td>all animal products</td><td>plant foods</td><td><b>B12</b> (fortified foods/supplements), calcium, iodine, omega-3, iron with vitamin C; benefits: fibre, antioxidants, less saturated fat</td></tr></table></div>
<p>Vegetarians are rarely short of protein — tofu, edamame, tempeh, pulses. Other ethical choices: <b>organic</b> (similar macronutrients, slightly more antioxidants, but higher cost may narrow variety), <b>local and seasonal</b> (fresher, lower carbon footprint, less year-round variety — freeze for winter), <b>GM</b> foods (some avoid them; some are nutrient-enhanced, e.g. golden rice).</p>` },
    { h: 'Support available', html: `
<ul><li><b>The Eatwell Guide</b> — the central visual tool (vegetarian and vegan versions exist).</li>
<li><b>5 A Day</b> campaign; <b>NHS 8 tips for healthy eating</b>.</li>
<li><b>First Steps Nutrition Trust</b> — practical advice on feeding infants and young children, including breastfeeding.</li>
<li>Public health campaigns: <b>Better Health: Healthier Families</b>; <b>Healthy Weight: Healthy You</b>; Healthy Start (vouchers for milk, fruit, vegetables and vitamins).</li>
<li>Charities: <b>Food Sense Wales</b>, <b>Veg Power</b>, <b>Guts UK</b>, <b>British Heart Foundation</b> healthy eating toolkit; Coeliac UK, Diabetes UK, Allergy UK.</li>
<li><b>Food labels</b> — front-of-pack traffic lights (red/amber/green for fat, saturates, sugars, salt) and back-of-pack tables with ingredient lists.</li></ul>` }
  ],
  eqs: [],
  worked: [
    { q: 'Suggest how a lasagne could be adapted for a person with coeliac disease and hypercholesterolaemia. (4 marks)', s: ['Replace wheat pasta sheets with certified gluten-free sheets (rice/maize), avoiding cross-contamination.', 'Thicken the white sauce with cornflour instead of wheat flour.', 'Use lean turkey mince or lentils instead of fatty beef mince, semi-skimmed milk and a small amount of strong reduced-fat cheese to cut saturated fat.', 'Add vegetables and beans for fibre; use rapeseed oil not butter; consider a sterol-enriched spread.'], a: 'GF sheets + cornflour sauce; lean/plant protein, lower-fat dairy, unsaturated oil, more fibre.' }
  ],
  pitfalls: ['Confusing allergies (immune, can be life-threatening) with intolerances (non-immune, dose-dependent).', 'Calling coeliac disease an allergy — it is autoimmune.', 'Assuming vegetarians lack protein — B12 is the real risk for vegans.', 'Saying type 1 diabetes can be prevented by diet.', 'Giving vague alternatives — name specific foods.'],
  cards: [
    ['Nutrients at risk with cow’s milk allergy?', 'Calcium, vitamin D, protein — use fortified plant alternatives.'],
    ['How many children outgrow peanut allergy?', 'About 1 in 5.'],
    ['How does coeliac disease cause malnutrition?', 'Gluten triggers immune damage that shrinks the villi → malabsorption.'],
    ['Nutrients at risk on a gluten-free diet?', 'Fibre, B vitamins, iron.'],
    ['Cause of fructose intolerance?', 'Usually genetic — the small intestine cannot absorb fructose.'],
    ['What is NCGS?', 'Non-coeliac gluten sensitivity — symptoms from gluten without villi damage.'],
    ['DASH and Mediterranean diets are used for?', 'Hypertension (and heart health).'],
    ['Type 1 diabetes management?', 'Carbohydrate monitoring, consistent meal timing, insulin matched to food.'],
    ['Lacto-vegetarian vs ovo-vegetarian?', 'Lacto: dairy but no eggs. Ovo: eggs but no dairy.'],
    ['Waiting time between meat and dairy in kosher practice?', 'Often 3–6 hours.'],
    ['Nutrients vegans must plan for?', 'B12, calcium, iodine, omega-3, iron (with vitamin C).'],
    ['Which fish are high in mercury?', 'Shark, swordfish, king mackerel, bigeye tuna.'],
    ['Name three UK nutrition support campaigns.', 'Eatwell Guide, 5 A Day, NHS 8 tips, Better Health: Healthier Families, Healthy Start.'],
    ['What is First Steps Nutrition Trust?', 'A charity giving evidence-based advice on feeding infants and young children.'],
    ['Traffic-light label colours?', 'Red = high, amber = medium, green = low (fat, saturates, sugars, salt).']
  ],
  quiz: [
    { q: 'Coeliac disease is best described as…', o: ['an autoimmune reaction to gluten', 'a food intolerance to lactose', 'an IgE allergy to wheat', 'a vitamin deficiency'], x: 'The immune system attacks the gut lining.' },
    { q: 'Which is naturally gluten-free?', o: ['Quinoa', 'Barley', 'Rye', 'Spelt'], x: 'Also rice, maize, buckwheat, potatoes.' },
    { q: 'Eliminating eggs puts which nutrient most at risk?', o: ['Vitamin B12', 'Vitamin C', 'Fibre', 'Sugar'], x: 'Also HBV protein, selenium, choline.' },
    { q: 'Nuts are a rich source of…', o: ['essential fatty acids, vitamin E and magnesium', 'vitamin C and lactose', 'gluten', 'cholesterol'], x: 'Replace with seeds and oils if allergic.' },
    { q: 'Fructose intolerance can lead to low intakes of…', o: ['vitamin C, folate and fibre', 'calcium only', 'protein only', 'sodium'], x: 'From avoiding high-fructose fruits.' },
    { q: 'Type 1 diabetes is…', o: ['autoimmune destruction of insulin-producing cells', 'caused by eating sugar', 'always cured by weight loss', 'an allergy'], x: 'Not preventable by diet.' },
    { q: 'Which diet is recommended to lower blood pressure?', o: ['DASH', 'Low-FODMAP', 'Ketogenic', 'Gluten-free'], x: 'Or a Mediterranean diet.' },
    { q: 'A lacto-vegetarian eats…', o: ['dairy but not eggs, meat or fish', 'eggs but not dairy', 'fish but not meat', 'no animal products'], x: 'Lacto = milk.' },
    { q: 'In kosher practice, meat and dairy…', o: ['are not eaten in the same meal', 'must be eaten together', 'are both banned', 'must be raw'], x: 'Often a 3–6 hour gap.' },
    { q: 'Which nutrient is most at risk in a vegan diet?', o: ['Vitamin B12', 'Vitamin C', 'Carbohydrate', 'Fibre'], x: 'Found naturally only in animal foods.' },
    { q: 'Food Sense Wales and Veg Power are…', o: ['charities and initiatives supporting healthy eating', 'food allergens', 'types of diabetes', 'preservatives'], x: 'Support available.' },
    { q: 'Rice drinks are unsuitable for under-fives because of…', o: ['arsenic', 'gluten', 'lactose', 'caffeine'], x: 'Choose fortified soya or oat.' }
  ],
  exam: [
    { q: 'Explain why a person with coeliac disease may develop anaemia. [3]', m: 3, ms: ['gluten causes immune damage / shrinking of the villi', 'reduced surface area — malabsorption', 'less iron / folate / B12 absorbed; also GF diet removes fortified wheat products → anaemia'] },
    { q: 'Describe how religious beliefs might affect the food choices of two different people. [4]', m: 4, ms: ['religion 1 with a relevant rule (e.g. Islam — halal, no pork or alcohol)', 'effect on choice (e.g. halal-certified products; Ramadan changes meal timing)', 'religion 2 with a relevant rule (e.g. Judaism — kosher, no shellfish, meat and dairy separate)', 'effect on choice (e.g. separate meals/utensils; checks labels for kosher certification)'] },
    { q: 'Evaluate the effectiveness of the Eatwell Guide in supporting people with specific dietary needs. [8]', m: 8, ms: ['simple visual proportions — easy to understand and widely used', 'applies to most people over 2; vegetarian and vegan versions exist', 'shows healthier choices within groups (wholegrain, lower fat/sugar)', 'not suitable for under-2s; gives no individual energy/portion amounts', 'medical conditions (coeliac, diabetes, allergy, CVD) need specialist adaptation / dietitian', 'cultural foods and budgets may not be reflected', 'must be combined with labels, 8 tips, campaigns (Healthy Start etc.)', 'reasoned judgement'] }
  ],
  sims: ['menu'], gens: []
});

TOPICS.push({
  id: '1.15', unit: '1', ref: '1.2.3', title: 'How situations affect nutritional needs', short: 'BMR and PAL; environments; care settings; activity; economic situation',
  summary: 'Nutritional requirements depend on where and how people live and work — not just personal choice. Learn what affects BMR, how environments, care settings, physical activity and economic situation change energy and nutrient needs, and how energy balance works.',
  spec: [
    'Different environments: workplace (sedentary or physical work; work-based, home-based or hybrid working)',
    'Different environments: home situation (urban vs rural areas), holiday, temperature',
    'Care settings: looked after by parents, sheltered accommodation, hospital/hospice, assisted living facility (and other settings)',
    'Physical activity level: type of work undertaken (manual labour, sedentary work), leisure activity, exercise',
    'Economic situation: food choice due to income/food poverty, availability of food, availability of facilities to prepare meals',
    'Metabolic rate and BMR: factors that affect BMR; energy balance'
  ],
  learn: [
    { h: 'Metabolic rate and BMR', html: `
<p><b>Metabolic rate</b> is the total energy an individual uses over a period. <b>Basal metabolic rate (BMR)</b> is the energy the body uses at rest (and warm) to keep vital functions going — breathing, circulation, cell production, temperature regulation. It is <b>50–80%</b> of daily expenditure; activity and digestion add the rest. Total need = <b>BMR × physical activity level (PAL)</b>.</p>
<div class="tbl"><table><tr><th>Factor</th><th>Effect on BMR</th></tr>
<tr><td>Body size and composition</td><td>more muscle → higher (muscle is metabolically active); more fat → lower; taller/larger bodies and bigger surface area → higher</td></tr>
<tr><td>Age</td><td>falls with age (less muscle, slower processes)</td></tr>
<tr><td>Sex</td><td>men usually higher (more muscle, less fat)</td></tr>
<tr><td>Genetics</td><td>some people naturally faster or slower</td></tr>
<tr><td>Hormones</td><td>thyroid hormones T3/T4 raise it (hyperthyroidism ↑, hypothyroidism ↓); insulin, cortisol, growth hormone</td></tr>
<tr><td>Body / environmental temperature</td><td>fever raises it; cold raises it (keeping warm); extreme heat slightly (sweating)</td></tr>
<tr><td>Nutritional status</td><td>fasting/starvation lowers it; overeating slightly raises it</td></tr>
<tr><td>Physical activity</td><td>regular exercise builds muscle, raising BMR over time</td></tr>
<tr><td>Health conditions, pregnancy</td><td>illness, burns, infection and pregnancy raise it</td></tr></table></div>
<p><b>Metabolised energy</b> is the energy left for the body to use after digestion and absorption — not all food energy is accessible (bioavailability).</p>` },
    { h: 'Energy balance and activity', html: `
[[d:balance]]
<ul><li><b>Equal energy balance</b> — intake = output → weight maintained.</li><li><b>Positive (+ve) balance</b> — intake &gt; output → weight gain.</li><li><b>Negative (−ve) balance</b> — intake &lt; output → weight loss.</li></ul>
<div class="tbl"><table><tr><th>Activity level</th><th>Examples</th><th>Nutritional implications</th></tr>
<tr><td><b>High</b></td><td>running, competitive sport, intense swimming, heavy manual labour</td><td>more energy, starchy carbohydrate and protein; fluid and electrolytes (sodium, potassium); risk of excess sugar from sports drinks and snacks; poor diets → fatigue, muscle breakdown, iron and B12 deficiency</td></tr>
<tr><td><b>Moderate</b></td><td>brisk walking, cycling, gardening, dancing</td><td>slightly more energy than sedentary; switching from high to moderate activity without adjusting diet → gradual weight gain</td></tr>
<tr><td><b>Low</b></td><td>desk work, light chores, reading, screen time</td><td>much lower energy needs; focus on nutrient-dense foods; high risk of overeating, obesity and NCDs; UPF reliance → fibre and micronutrient deficiencies</td></tr></table></div>
<p><b>Bone health</b>: weight-bearing activity (running, jumping, resistance training) stresses bones and increases mineral density — with calcium, phosphorus, vitamin D and protein. <b>Growth</b>: activity supports growth plates, muscle and coordination in children; over-training without enough energy causes <b>RED-S</b> (relative energy deficiency in sport) — delayed growth, stress fractures.</p>` },
    { h: 'Environments', html: `
<div class="tbl"><table><tr><th>Situation</th><th>Effect on needs and choices</th></tr>
<tr><td><b>Sedentary work</b> (office)</td><td>low energy expenditure → focus on nutrient-dense, not energy-dense foods; little time outdoors → <b>vitamin D deficiency</b>, especially in winter</td></tr>
<tr><td><b>Home-based / hybrid working</b></td><td>more snacking at home (sugar, fat); some workplaces offer little fresh food → reliance on UPFs</td></tr>
<tr><td><b>Physical work</b> (construction, farming)</td><td>more energy and protein for repair and sustained activity; deficiency → fatigue, muscle loss; choose starchy carbohydrate and lean/plant protein</td></tr>
<tr><td><b>Urban</b></td><td>many supermarkets and takeaways — variety but more energy-dense UPFs (obesogenic), risk of low fibre and micronutrients</td></tr>
<tr><td><b>Rural</b></td><td>fresh local produce, but less variety, travel to shops, transport costs → possible low iodine, vitamin D, folate; less access to fortified or specialist foods</td></tr>
<tr><td><b>Holiday</b></td><td>more energy-dense food and alcohol, bloating and reflux — or healthier Mediterranean meals and more activity; heat may reduce appetite</td></tr>
<tr><td><b>Cold temperature</b></td><td>more energy (starchy carbohydrate, healthy fats) to keep warm; risk of weight loss if intake not raised, or excess saturated fat</td></tr>
<tr><td><b>Hot temperature</b></td><td>more fluid and electrolytes (sodium, potassium) lost in sweat → dehydration, cramps, headache; too many sugary drinks → weight gain and decay</td></tr></table></div>` },
    { h: 'Care settings', html: `
<p>Being looked after reduces <b>dietary autonomy</b>; meals may be planned by people with limited nutritional knowledge, activity may fall and choice may be limited.</p>
<div class="tbl"><table><tr><th>Setting</th><th>Considerations</th></tr>
<tr><td><b>Looked after by parents</b></td><td>parents’ knowledge, habits, income, cooking skills and routines shape children’s eating for life; stressful mealtimes → comfort or fussy eating; children’s mental health (anxiety, depression) can cause appetite loss or comfort eating — supportive parents who notice can protect intake</td></tr>
<tr><td><b>Hospital, hospice, palliative care</b></td><td>illness raises needs for repair and immunity, yet appetite and swallowing may be poor → deficiencies that delay recovery; reduced mobility can lower energy needs (risk of weight gain if not adjusted); dietitian-planned menus, special diets (low sodium, diabetic, <b>texture-modified</b>), tube feeding and supplements monitored; limited choice and unfamiliar flavours reduce appetite</td></tr>
<tr><td><b>Sheltered accommodation and assisted living</b></td><td>lower energy needs (less active) but protein, calcium and vitamin D stay high; chronic conditions (type 2 diabetes, hypertension) need tailored diets; reduced mobility, taste and smell, isolation reduce appetite; reliance on carers and easy foods → low fibre; but provided meals can improve intake for those who struggled alone</td></tr>
<tr><td><b>Children and young people in care</b> (foster care)</td><td>emotional stress → comfort eating or poor appetite; neglect → disrupted eating, deficiencies (iron, vitamin D, calcium), food hoarding, overeating; structured mealtimes, variety without pressure rebuild trust</td></tr>
<tr><td>Other settings</td><td>residential care homes, residential special schools, youth detention centres, children’s hospices — limited autonomy; needs depend on life stage, independence and health</td></tr></table></div>` },
    { h: 'Economic situation', html: `
<p><b>Food poverty</b> — being unable to afford or access sufficient, safe, nutritious food for a healthy, active life — is rising in the UK. It is not only hunger: it includes relying on cheap, energy-dense foods high in fat, sugar and salt but low in vitamins and minerals, causing both <b>deficiencies</b> (iron, vitamin C, vitamin D, folate, calcium → anaemia, weak immunity, poor growth) and <b>excess</b> (obesity, type 2 diabetes, CVD). Drivers: low income, unemployment, disability and ill health, high living costs, gaps in support.</p>
<p><b>Availability of food</b>: food deserts, shop stocking, seasonal and supply shortages, rural travel.</p>
<p><b>Facilities to prepare meals</b>: without a <b>fridge</b>, fresh fruit, vegetables and lean protein spoil; without a <b>cooker</b>, people rely on microwavable, ready-to-eat UPFs (preservatives, saturated fat, sugar) → obesity, hypertension, low fibre and micronutrients; a single hob needs careful planning.</p>
<p>Higher incomes widen choice but can increase over-consumption.</p>` }
  ],
  eqs: [['"energy need" = "BMR" × "PAL"', 'kcal per day'], ['"BMR (women 18–30)" = 14.7m + 496', 'Schofield (WHO), kcal/day'], ['"BMR (men 18–30)" = 15.3m + 679', 'Schofield (WHO), kcal/day']],
  worked: [
    { q: 'A 25-year-old male bricklayer has a mass of 80 kg and a PAL of 1.9. Estimate his daily energy requirement (BMR = 15.3m + 679).', s: ['BMR = 15.3 × 80 + 679 = 1224 + 679 = 1903 kcal', 'energy = 1903 × 1.9 = 3616 kcal', '≈ 3600 kcal a day (≈ 15.1 MJ)'], a: '≈ 3600 kcal/day' },
    { q: 'Explain how living in temporary accommodation with only a microwave may affect a family’s diet. (4 marks)', s: ['Without a hob or oven they cannot easily cook fresh meals from raw ingredients.', 'They may rely on ready meals and takeaways, often higher in salt, saturated fat and sugar and more expensive per portion.', 'Without a fridge they cannot store fresh or chilled food safely, so fruit, vegetable and lean protein intakes fall.', 'This raises the risk of obesity, hypertension and micronutrient deficiencies; food safety may also suffer.'], a: 'Limited cooking and storage → UPFs, fewer fresh foods.' }
  ],
  pitfalls: ['Saying everyone needs 2000 kcal — needs depend on BMR and PAL.', 'Forgetting fluid and electrolytes for hot environments and heavy work.', 'Ignoring facilities (cooker, fridge) when discussing income.', 'Treating hospital patients as needing less food — illness often raises needs.', 'Giving one-sided answers — show both positive and negative effects when asked to assess or evaluate.'],
  cards: [
    ['What is BMR?', 'Energy used at rest to maintain vital functions — 50–80% of daily expenditure.'],
    ['Energy requirement formula?', 'BMR × PAL.'],
    ['Five factors that raise BMR?', 'More muscle, larger body, male sex, thyroid hormones, fever/cold, illness, pregnancy.'],
    ['What lowers BMR?', 'Ageing, more body fat, fasting/starvation, hypothyroidism.'],
    ['Three types of energy balance?', 'Equal (maintain), positive (gain), negative (loss).'],
    ['What is RED-S?', 'Relative energy deficiency in sport — too little energy for training; delayed growth, stress fractures.'],
    ['Why are office workers at risk of vitamin D deficiency?', 'Little time outdoors, especially in winter.'],
    ['Cold environment effect?', 'More energy (starch, healthy fats) to keep warm.'],
    ['Hot environment effect?', 'More fluid and electrolytes (sodium, potassium).'],
    ['Rural nutrition risks?', 'Less variety and access; possible low iodine, vitamin D, folate; travel costs.'],
    ['Hospital diet considerations?', 'Higher needs for repair but poor appetite; texture-modified and special diets; tube feeding monitored.'],
    ['Define food poverty.', 'Being unable to afford or access sufficient, safe, nutritious food for a healthy life.'],
    ['Effect of no fridge or cooker?', 'Reliance on ready-to-eat UPFs; fewer fresh foods; obesity, hypertension, micronutrient deficiency.'],
    ['What is metabolised energy?', 'Energy available to the body after digestion and absorption.'],
    ['Why does weight-bearing exercise help bones?', 'Stress on bones stimulates increased mineral density.']
  ],
  quiz: [
    { q: 'BMR accounts for about what share of daily energy expenditure?', o: ['50–80%', '5–10%', '95–100%', '20–30%'], x: 'Activity and digestion add the rest.' },
    { q: 'Which raises BMR?', o: ['Greater muscle mass', 'Ageing', 'Fasting', 'Hypothyroidism'], x: 'Muscle is metabolically active.' },
    { q: 'A negative energy balance leads to…', o: ['weight loss', 'weight gain', 'no change', 'higher BMR'], x: 'Intake is less than output.' },
    { q: 'Which is a low physical activity?', o: ['Desk work', 'Gardening', 'Cycling', 'Heavy manual labour'], x: 'Gardening and cycling are moderate.' },
    { q: 'In a hot environment, the priority is to increase…', o: ['fluid and electrolytes', 'saturated fat', 'protein only', 'salt tablets for everyone'], x: 'Replace sweat losses.' },
    { q: 'In a cold environment, needs increase for…', o: ['energy from starchy carbohydrates and healthy fats', 'water only', 'vitamin C only', 'nothing'], x: 'To maintain body temperature.' },
    { q: 'Office workers are particularly at risk of low…', o: ['vitamin D', 'vitamin C', 'protein', 'sodium'], x: 'Little sunlight exposure.' },
    { q: 'A 60 kg woman aged 22 (BMR = 14.7m + 496) with PAL 1.5 needs about…', o: ['2067 kcal', '1378 kcal', '2744 kcal', '1500 kcal'], x: '1378 × 1.5.' },
    { q: 'Which setting may use texture-modified diets?', o: ['Hospital', 'A gym', 'A takeaway', 'A farm'], x: 'For swallowing difficulties.' },
    { q: 'Food poverty can cause…', o: ['both deficiencies and obesity', 'only weight loss', 'only vitamin excess', 'no health effects'], x: 'Cheap energy-dense food.' },
    { q: 'Without a fridge, a family should choose…', o: ['foods safe at room temperature, e.g. canned or dried', 'fresh chicken', 'soft cheese', 'cooked rice kept for days'], x: 'Ambient-stable foods.' },
    { q: 'RED-S is caused by…', o: ['too little energy for the amount of training', 'too much protein', 'too much vitamin D', 'dehydration only'], x: 'Relative energy deficiency in sport.' }
  ],
  exam: [
    { q: 'State three factors that affect basal metabolic rate. [3]', m: 3, ms: ['age / sex / body size and composition / muscle mass / genetics / hormones (thyroid) / temperature / nutritional status / illness / pregnancy (any three)'] },
    { q: 'Explain how the nutritional needs of a scaffolder working outdoors in summer differ from those of an office worker. [6]', m: 6, ms: ['scaffolder: manual work — high PAL, more energy', 'more starchy carbohydrate for fuel', 'more protein for muscle repair', 'heat — high sweat losses — more fluid and electrolytes', 'office worker: sedentary — low PAL, lower energy needs, risk of weight gain / snacking', 'office worker: little sunlight — vitamin D; nutrient-dense choices — comparison drawn'] },
    { q: 'Discuss how living in sheltered accommodation may affect the nutritional intake of an older adult. [6]', m: 6, ms: ['lower activity → lower energy needs', 'protein, calcium, vitamin D needs remain high (sarcopenia, osteoporosis)', 'chronic conditions (type 2 diabetes, hypertension) need tailored diets', 'reduced mobility, taste and smell, isolation → poor appetite / motivation', 'reliance on carers / easy foods → low fibre and micronutrients', 'positive: warden support, lunch clubs, provided balanced meals can improve intake — balanced view'] },
    { q: 'Discuss how economic situation can affect the nutritional intake of a family. [8]', m: 8, ms: ['low income restricts amount and variety bought', 'cheap energy-dense UPFs — high fat, sugar, salt', 'fewer fruit, vegetables, fish — deficiencies (iron, vitamin C, D, folate)', 'food poverty includes obesity as well as hunger', 'availability: food deserts, travel costs', 'facilities: no cooker / fridge → ready meals, food safety issues', 'support: food banks, Healthy Start, free school meals, budgeting', 'higher income widens choice but may increase over-consumption — balanced conclusion'] }
  ],
  sims: ['pal'], gens: ['bmr1', 'pal1']
});

TOPICS.push({
  id: '1.16', unit: '1', ref: '1.3.1', title: 'Planning nutritional programmes', short: 'SMART objectives, guidance, monitoring and review',
  summary: 'Plan a nutritional programme for a specific need: set SMART objectives and a timescale, apply evidence-based guidance (energy and macronutrient targets, the Eatwell Guide and its adaptations, GI/GL, DASH, low FODMAP, pregnancy and weaning guidance, labels), monitor progress with quantitative and qualitative feedback and technology, adapt, and review effectiveness.',
  spec: [
    'Objective setting: target and goal setting (athletic performance, manage a health-related problem, manage food allergies or intolerances, support pregnancy, weight gain, weight loss, weight maintenance); SMART targets',
    'Timescales, for example a week, month, year',
    'Nutritional guidance: calorie specifications such as kilojoules; Eatwell Guide, DASH diet for hypertension, FODMAP diet for IBS; eating patterns; food and meal adaptations; macronutrient recommendations',
    'Monitoring: revisiting goals; software/digital technology/devices to track progress; feedback (quantitative and qualitative); adaptations; rewards and gamification',
    'Reviewing effectiveness: alignment with objectives; effectiveness of guidance (cost, time, motivation, personal preferences); effectiveness of monitoring; impact of adaptations'
  ],
  learn: [
    { h: 'Setting objectives', html: `
[[d:plancycle]]
<p>A programme sets clear objectives, considers individual needs and lifestyle, and uses evidence-based guidance so it is effective and sustainable. Plan for needs such as <b>athletic performance</b>, <b>managing a health problem</b>, <b>food allergies or intolerances</b>, <b>pregnancy</b>, and <b>weight gain, loss or maintenance</b>.</p>
<div class="box def"><b class="lbl">SMART targets</b><p><b>S</b>pecific · <b>M</b>easurable · <b>A</b>chievable · <b>R</b>ealistic · <b>T</b>imed. “Eat better” is vague; “lose 4 kg in 8 weeks by eating 500 kcal/day less and walking 30 minutes a day” is SMART. Drastic changes are rarely sustainable.</p></div>
<p><b>Timescales</b>: a week (meal plan), a month, a year (a pregnancy, a sports season). Safe weight loss is about <b>0.5–1 kg a week</b>.</p>` },
    { h: 'Nutritional guidance', html: `
<ul><li><b>Calorie specifications and macronutrients</b> — energy in kcal or kJ tailored to age, sex, PAL and health (BMR × PAL). Standard proportions (~50% carbohydrate, 35% fat, 15% protein) are adapted: athletes need more starch and protein; cold climates more fat and starch; recovery from illness or surgery more lean protein. A deficit of ~500–600 kcal/day gives ~0.5 kg/week loss (1 kg of body fat ≈ 7700 kcal); a surplus of 300–500 kcal supports gain.</li>
<li><b>Eatwell Guide</b> for the whole population over two; <b>vegetarian and vegan versions</b> (Vegetarian and Vegan Societies); adapted <b>low-fat</b> versions (gallstones, high triglycerides); lactating women need more calcium and fluid.</li>
<li><b>GI and GL</b> — managing blood glucose in diabetes.</li>
<li><b>DASH</b> (Dietary Approaches to Stop Hypertension) — less salt; more fruit, vegetables, wholegrains, low-fat dairy, pulses, nuts (potassium, calcium, magnesium).</li>
<li><b>Low FODMAP</b> for <b>IBS</b> — restrict fermentable short-chain carbohydrates for 2–6 weeks, then <b>reintroduce</b> groups one at a time to find triggers, ideally with a dietitian.</li>
<li><b>Pregnancy guidelines</b> — avoid foods with pathogenic bacteria, ensure folate and iron, stable weight gain; <b>infancy and weaning guidelines</b>.</li>
<li><b>Front-of-pack labelling</b> to encourage healthier choices.</li>
<li><b>Eating patterns</b> (regular meals, breakfast, timing around training, small frequent meals) and <b>food and meal adaptations</b> (swaps, cooking methods, portion control, allergen-free alternatives).</li></ul>
<div class="box warn"><b class="lbl">Top tip</b><p>Use endorsed, clinically evidenced models — many popular diets are not effective or healthy long-term.</p></div>` },
    { h: 'Monitoring', html: `
<ul><li><b>Revisiting goals</b> regularly — including engagement and <b>motivation</b>, without which objectives are unlikely to be met.</li>
<li><b>Feedback</b>:
<div class="tbl"><table><tr><th>Quantitative (“hard”, numerical, objective)</th><th>Qualitative (“soft”, descriptive, opinion-based)</th></tr>
<tr><td>weight; BMI or WtHR; recovery time after exercise; blood glucose; muscle mass; blood pressure; blood tests (iron, cholesterol)</td><td>satisfaction with meal variety and appearance; behaviour change; symptom logs and severity ratings; diaries of energy or hunger; ease of use; perceived barriers</td></tr></table></div></li>
<li><b>Technology</b> — software, apps and wearables track activity, calories and heart rate, scan labels, analyse menus, send alerts and rewards: real-time monitoring that increases engagement.</li>
<li><b>Rewards and gamification</b> — progress trackers, points, badges, unlockable features, coupons; rewards for adults must not be childish or condescending.</li>
<li><b>Adaptations</b> — change the programme as soon as it is not getting the desired outcome.</li></ul>` },
    { h: 'Reviewing effectiveness', html: `
<p>The final stage judges whether the objectives were met and identifies improvements. Quantitative data usually shows whether the objective was achieved; judging the guidance uses both kinds of data — was it evidence-based, reliable and suitable?</p>
<div class="tbl"><table><tr><th>Review area</th><th>Consider</th></tr>
<tr><td>Alignment with objectives</td><td>measured outcomes vs SMART targets</td></tr>
<tr><td>Effectiveness of guidance — practicalities</td><td><b>cost</b> of food; <b>time</b> involved; ease of use and <b>motivation</b>; keeping interest and variety; fit with <b>personal preferences</b> and lifestyle</td></tr>
<tr><td>Effectiveness of monitoring</td><td>was data easy to collect, accurate and regular?</td></tr>
<tr><td>Impact of adaptations</td><td>did modifications overcome barriers and improve outcomes?</td></tr></table></div>` }
  ],
  eqs: [['"weekly change (kg)" ≈ @frac{"daily deficit (kcal)" × 7}{7700}', '1 kg body fat ≈ 7700 kcal'], ['"macronutrient (g)" = @frac{"energy (kcal)" × "% share"}{100 × "kcal per g"}', 'from % energy to grams']],
  worked: [
    { q: 'A client needs 2400 kcal a day. Plan a 500 kcal daily deficit and estimate the weight loss after 8 weeks.', s: ['target intake = 2400 − 500 = 1900 kcal/day', 'weekly deficit = 500 × 7 = 3500 kcal → 3500 ÷ 7700 ≈ 0.45 kg/week', '8 weeks: 0.45 × 8 ≈ 3.6 kg'], a: '≈ 3.6 kg in 8 weeks' },
    { q: 'An athlete eats 3000 kcal/day with 55% of energy from carbohydrate. How many grams of carbohydrate is this?', s: ['energy from carbohydrate = 0.55 × 3000 = 1650 kcal', 'grams = 1650 ÷ 4 = 412.5 g'], a: '≈ 413 g' }
  ],
  pitfalls: ['Writing vague objectives — make them SMART with numbers and dates.', 'Planning drastic deficits — unsafe and unsustainable.', 'Forgetting monitoring and review — the specification has four stages.', 'Treating low-FODMAP as a permanent diet — it is restriction then reintroduction.', 'Reviewing only whether weight changed — include cost, time, motivation and preferences.'],
  cards: [
    ['SMART stands for?', 'Specific, Measurable, Achievable, Realistic, Timed.'],
    ['Safe rate of weight loss?', 'About 0.5–1 kg per week.'],
    ['Energy in 1 kg of body fat?', 'About 7700 kcal.'],
    ['DASH diet is for?', 'Hypertension — reduces salt; more fruit, veg, wholegrains, low-fat dairy.'],
    ['Low-FODMAP diet is for?', 'Irritable bowel syndrome (IBS).'],
    ['Stages of low-FODMAP?', 'Restriction (2–6 weeks), reintroduction, personalisation.'],
    ['Adapted Eatwell guides?', 'Vegetarian and vegan versions; low-fat versions for gallstones/high triglycerides.'],
    ['Quantitative feedback — examples?', 'Weight, BMI, WtHR, blood pressure, blood glucose, blood tests, recovery time.'],
    ['Qualitative feedback — examples?', 'Satisfaction, symptom logs, energy/hunger diaries, perceived barriers.'],
    ['What is gamification?', 'Using game elements (points, badges, stars) to encourage engagement.'],
    ['Four practical factors when reviewing guidance?', 'Cost, time, motivation, personal preferences.'],
    ['Converting carbohydrate kcal to grams?', 'Divide by 4.'],
    ['Deficit for ~0.5 kg/week loss?', 'About 500–600 kcal/day.']
  ],
  quiz: [
    { q: 'Which is a SMART objective?', o: ['Reduce salt intake to under 6 g a day within 4 weeks', 'Eat better', 'Lose some weight soon', 'Be healthier'], x: 'Specific, measurable, timed.' },
    { q: 'The DASH diet is designed to manage…', o: ['hypertension', 'IBS', 'coeliac disease', 'lactose intolerance'], x: 'Dietary Approaches to Stop Hypertension.' },
    { q: 'A low-FODMAP diet is used for…', o: ['irritable bowel syndrome', 'rickets', 'anaemia', 'type 1 diabetes'], x: 'Short-chain fermentable carbohydrates.' },
    { q: 'A 550 kcal/day deficit for 2 weeks gives a loss of about…', o: ['1 kg', '5 kg', '0.1 kg', '3 kg'], x: '550 × 14 = 7700 kcal.' },
    { q: 'Which is qualitative feedback?', o: ['A diary rating hunger levels', 'Blood pressure reading', 'Body weight', 'Blood glucose'], x: 'Opinion/perception-based.' },
    { q: 'Which is quantitative feedback?', o: ['Waist-to-height ratio', 'Satisfaction with meal variety', 'Perceived barriers', 'Opinions on taste'], x: 'Numerical and objective.' },
    { q: 'Gamification in nutrition apps means…', o: ['using points, badges and rewards to motivate', 'playing games instead of eating', 'counting only calories', 'removing feedback'], x: 'Rewards should suit adults.' },
    { q: 'An athlete eats 3200 kcal with 25% from fat. Fat in grams ≈', o: ['89 g', '200 g', '800 g', '36 g'], x: '800 kcal ÷ 9.' },
    { q: 'Which is NOT one of the review factors for guidance in the spec?', o: ['Colour of packaging', 'Cost', 'Time', 'Motivation'], x: 'Also personal preferences.' },
    { q: 'For weight gain, a daily surplus of about…', o: ['300–500 kcal', '3000 kcal', '50 kcal', '1500 kcal'], x: 'Gradual gain.' },
    { q: 'When should a programme be adapted?', o: ['As soon as it is not achieving the desired outcome', 'Only at the very end', 'Never', 'Every day regardless'], x: 'Timely adjustments.' }
  ],
  exam: [
    { q: 'Give two examples of digital technology that could be used to monitor a weight-loss programme. [2]', m: 2, ms: ['food-diary / calorie-counting app', 'smart scales / fitness tracker / smartwatch / nutritional analysis software (any two)'] },
    { q: 'Explain the difference between quantitative and qualitative feedback, with an example of each. [4]', m: 4, ms: ['quantitative: numerical, objective / “hard” data', 'e.g. weight / BMI / blood pressure / blood glucose / blood tests', 'qualitative: descriptive, opinion-based / “soft” data', 'e.g. satisfaction / hunger or energy diary / symptom ratings / barriers'] },
    { q: 'Priya, 30, has been diagnosed with IBS. Plan the key stages of a nutritional programme for her. [8]', m: 8, ms: ['assess needs: symptoms, current diet, preferences, lifestyle', 'SMART objective, e.g. reduce bloating episodes to one a week within 8 weeks', 'low-FODMAP restriction 2–6 weeks with food examples and swaps', 'reintroduction one FODMAP group at a time to identify triggers', 'keep balance — fibre, calcium (lactose-free dairy); eating patterns (regular, smaller meals)', 'monitoring: symptom and food diary / app (qualitative) and dietitian feedback', 'adapt based on triggers found', 'review: objective met? cost, time, motivation, preferences; long-term personalised plan'] },
    { q: 'Evaluate the importance of monitoring and reviewing a nutritional programme for an athlete preparing for a marathon over six months. [8]', m: 8, ms: ['goals revisited — body composition, race times, training load', 'devices track training volume, heart rate, weight, energy intake', 'carbohydrate needs change with training — adapt intake', 'hydration monitored (weigh before/after, urine colour)', 'qualitative feedback on energy, recovery, GI comfort — adapt race-day fuelling', 'review cost, time, motivation, preferences — adherence', 'without monitoring — under-fuelling (RED-S), injury, poor performance', 'balanced judgement'] }
  ],
  sims: ['planner'], gens: ['deficit1', 'macro1', 'energyconv1']
});
