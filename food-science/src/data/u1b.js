/* ==========================================================
   UNIT 1 · NUTRITIONAL NEEDS ACROSS THE LIFE STAGES (part 2)
   1.1.4 production methods · 1.2 nutrients and the body · 1.3 planning
   ========================================================== */
TOPICS.push({
  id: '1.7', unit: '1', ref: '1.1.4', title: 'Production methods and nutritional value', short: 'Cooking, packaging, preservation and fortification',
  summary: 'How food is cooked, packed, preserved and fortified changes its nutritional value. Heat, water, light, air and time destroy or leach some nutrients; frying adds fat; salting and jam-making add sodium and sugar; fortification adds nutrients back.',
  spec: [
    'Cooking methods, for example boiling, steaming, roasting, deep fat frying, air frying — impact on nutritional value',
    'Packaging/storage methods, for example Aseptic Food Processing and Packaging (AFP), cold store, vacuum packing',
    'Preservation methods, for example bottling, canning, drying, freezing, jamming/chutney making, pickling, salting, UHT',
    'Fortification, for example breakfast cereals (B vitamins), vitamins A and D in margarine, white bread (calcium, iron, B vitamins), yogurt/vegetable fat spreads (sterols and stanols)'
  ],
  learn: [
    { h: 'What destroys nutrients?', html: `
<div class="tbl"><table><tr><th>Factor</th><th>Nutrients most affected</th></tr>
<tr><td><b>Heat</b></td><td>vitamin C, thiamin (B1), folate; proteins denatured (usually more digestible)</td></tr>
<tr><td><b>Water</b> (leaching)</td><td>water-soluble vitamins (C, B group, folate) and some minerals dissolve into cooking liquid</td></tr>
<tr><td><b>Oxygen</b> (oxidation)</td><td>vitamins A, C, E; unsaturated fats go rancid</td></tr>
<tr><td><b>Light</b></td><td>riboflavin (B2), vitamin A</td></tr>
<tr><td><b>Alkali</b> (e.g. bicarbonate added to green veg)</td><td>vitamin C and thiamin</td></tr>
<tr><td><b>Time</b> (storage, keeping warm)</td><td>losses accumulate — vitamin C falls steadily in stored and hot-held food</td></tr></table></div>` },
    { h: 'Cooking methods', html: `
<div class="tbl"><table><tr><th>Method</th><th>Effect on nutritional value</th><th>To reduce losses</th></tr>
<tr><td><b>Boiling</b></td><td>largest losses of vitamin C, B vitamins and folate — they leach into the water (often 30–60% of vitamin C); starch gelatinises and becomes more digestible</td><td>minimum water, add to boiling water, cook briefly, use the liquid in gravy or soup</td></tr>
<tr><td><b>Steaming</b></td><td>food is not in the water, so much less leaching; typical vitamin C loss 10–25%</td><td>cut into even pieces, do not overcook</td></tr>
<tr><td><b>Roasting</b></td><td>dry heat ~180–220 °C; some heat-sensitive vitamins lost; fat may be added or rendered out of meat; Maillard browning adds flavour</td><td>use a rack to drain fat, minimal added oil</td></tr>
<tr><td><b>Deep fat frying</b></td><td>food absorbs fat — energy density rises sharply; heat-sensitive vitamins lost; reused oil oxidises and can form harmful compounds; high temperatures on starchy foods form <b>acrylamide</b></td><td>fry at the correct temperature (170–190 °C) so less oil is absorbed; drain; change oil</td></tr>
<tr><td><b>Air frying</b></td><td>hot air circulates at high speed — similar crisp texture with a teaspoon of oil or none: much lower fat and energy than deep frying; vitamin losses similar to baking</td><td>cook to golden, not dark brown, to limit acrylamide</td></tr></table></div>
<p>Microwaving and stir-frying are also quick, low-water methods that retain water-soluble vitamins well.</p>` },
    { h: 'Packaging and storage', html: `
<ul><li><b>Aseptic Food Processing and Packaging (AFP)</b> — the food (e.g. milk, juice, soup) is sterilised separately at very high temperature for a very short time and filled into <b>pre-sterilised</b> cartons in a sterile environment. Because heating is brief, it keeps more vitamins, colour and flavour than canning, and the product is shelf-stable without refrigeration.</li>
<li><b>Cold store</b> — chilling (0–5 °C) and freezing (−18 °C or below) slow enzyme activity and microbial growth, so nutrients are lost more slowly. Chilled vegetables still lose vitamin C over days.</li>
<li><b>Vacuum packing</b> — removing air reduces <b>oxidation</b> of vitamins and fats (rancidity) and slows aerobic microbes, extending shelf life. Often combined with chilling or sous-vide cooking.</li>
<li><b>Modified atmosphere packaging (MAP)</b> — air replaced by a gas mixture (more CO₂/N₂, less O₂).</li></ul>` },
    { h: 'Preservation methods', html: `
<div class="tbl"><table><tr><th>Method</th><th>Nutritional impact</th></tr>
<tr><td><b>Canning / bottling</b></td><td>long high-temperature heating (e.g. 121 °C) destroys much vitamin C and thiamin; vitamins leach into the liquid; <b>canned fish bones soften</b> and add calcium; salt or sugar syrup may be added</td></tr>
<tr><td><b>Drying</b></td><td>vitamin C largely lost; nutrients and sugar become <b>concentrated</b> per gram (dried fruit is energy-dense); sulfur dioxide used on some dried fruit destroys thiamin</td></tr>
<tr><td><b>Freezing</b></td><td>vegetables are <b>blanched</b> first (some water-soluble vitamin loss) but little further loss in the freezer; frozen peas can contain more vitamin C than “fresh” ones stored for several days</td></tr>
<tr><td><b>Jam / chutney making</b></td><td>boiling with a lot of sugar destroys much vitamin C; very high sugar (jam ~60%) adds energy and free sugars</td></tr>
<tr><td><b>Pickling</b></td><td>acid (vinegar) helps retain vitamin C but pickles are often high in salt and sometimes sugar</td></tr>
<tr><td><b>Salting</b></td><td>greatly increases sodium (bacon, ham, salted fish) → blood pressure risk; water-soluble vitamins may be drawn out</td></tr>
<tr><td><b>UHT</b> (ultra-heat treated)</td><td>135–150 °C for 1–5 seconds; small losses of vitamin C, B1 and B12 (larger than pasteurisation, smaller than sterilisation); protein and calcium unaffected</td></tr></table></div>` },
    { h: 'Fortification', html: `
<p><b>Fortification</b> is adding nutrients to food — to replace those lost in processing, to make a substitute equal to the food it replaces, or to improve public health.</p>
<div class="tbl"><table><tr><th>Food</th><th>Nutrients added</th><th>Why</th></tr>
<tr><td>Breakfast cereals</td><td>B vitamins (thiamin, riboflavin, niacin, folic acid), iron, vitamin D (voluntary)</td><td>many people, especially children, eat cereal daily — improves intakes</td></tr>
<tr><td>Margarine / spreads</td><td>vitamins A and D</td><td>to match butter; was compulsory in the UK until 2013, most spreads still fortified</td></tr>
<tr><td>White and brown flour (and bread)</td><td>calcium, iron, thiamin, niacin (by law); folic acid being added from late 2026</td><td>replace nutrients lost when bran and germ are removed in milling; improve calcium intake</td></tr>
<tr><td>Yogurt drinks and vegetable fat spreads</td><td>plant sterols and stanols</td><td>block cholesterol absorption — can lower LDL cholesterol by 7–10% with 1.5–2.4 g a day</td></tr>
<tr><td>Plant milks</td><td>calcium, vitamins D, B12, iodine</td><td>to match cow’s milk for vegans</td></tr></table></div>` }
  ],
  eqs: [['"% loss" = @frac{"original" - "final"}{"original"} × 100', 'nutrient loss during processing']],
  worked: [
    { q: 'Raw broccoli contains 79 mg vitamin C per 100 g. After boiling it contains 44 mg per 100 g. Calculate the percentage loss.', s: ['loss = 79 − 44 = 35 mg', '% loss = 35 ÷ 79 × 100 = 44.3%'], a: '44% loss' },
    { q: 'Compare the nutritional effects of deep fat frying and air frying potato chips. (4 marks)', s: ['Deep-fried chips absorb oil, so fat and energy content rise sharply (roughly 3–4 times the fat of oven or air-fried chips).', 'Air frying circulates hot air and uses little or no oil, so the chips stay much lower in fat and energy.', 'Both cook at high temperature, so heat-sensitive vitamins (vitamin C, B1) are partly lost in both.', 'Both can form acrylamide in starchy foods if over-browned; reused frying oil also oxidises.'], a: 'Air frying: far less fat/energy; vitamin losses and acrylamide risk similar.' }
  ],
  pitfalls: ['Saying frozen vegetables have no nutrients — blanching causes small losses but freezing retains them well.', 'Saying canning increases all nutrients — only calcium in fish with soft bones; vitamin C and B1 fall.', 'Mixing fortification (adding nutrients) with preservation (stopping spoilage).', 'Forgetting that the cooking liquid contains the lost vitamins and can be used.', 'Saying UHT milk has no calcium — minerals are not destroyed by heat.'],
  cards: [
    ['Which vitamins are lost most by boiling?', 'Water-soluble ones: vitamin C, B vitamins, folate (leaching + heat).'],
    ['Why does steaming retain more vitamin C than boiling?', 'Food is not immersed in water, so less leaching.'],
    ['Nutritional effect of deep fat frying?', 'Absorbs fat → higher energy; vitamin losses; oil oxidation; acrylamide in starchy foods.'],
    ['Why is air frying lower in fat?', 'Hot air, not oil, crisps the food; little or no oil used.'],
    ['What is AFP?', 'Aseptic food processing and packaging: food sterilised briefly and filled into sterile packs in sterile conditions — shelf-stable, good nutrient retention.'],
    ['Why does vacuum packing help nutrients?', 'Removes oxygen, reducing oxidation of vitamins and fats.'],
    ['Nutritional effect of canning?', 'Loss of vitamin C and thiamin; leaching; softened fish bones add calcium; added salt/sugar.'],
    ['Effect of drying fruit?', 'Vitamin C lost; sugar and energy concentrated per gram.'],
    ['UHT conditions?', '135–150 °C for 1–5 seconds.'],
    ['Nutrients added to UK white flour by law?', 'Calcium, iron, thiamin and niacin.'],
    ['Why are sterols/stanols added to spreads?', 'To reduce cholesterol absorption and lower LDL cholesterol.'],
    ['Nutrients added to breakfast cereals?', 'B vitamins (thiamin, riboflavin, niacin, folic acid), iron, sometimes vitamin D.'],
    ['Which vitamin is destroyed by light?', 'Riboflavin (B2) — why milk is sold in opaque containers.']
  ],
  quiz: [
    { q: 'Which cooking method loses the most vitamin C from green vegetables?', o: ['Boiling in lots of water for a long time', 'Steaming', 'Microwaving', 'Stir-frying'], x: 'Leaching plus heat time.' },
    { q: 'Air frying compared with deep fat frying produces food that is…', o: ['much lower in fat', 'higher in fat', 'higher in vitamin C', 'identical in fat'], x: 'Little or no oil is used.' },
    { q: 'Vacuum packing mainly protects nutrients by…', o: ['removing oxygen', 'adding salt', 'heating the food', 'adding acid'], x: 'Less oxidation of vitamins and fats.' },
    { q: 'UHT milk is heated to about…', o: ['135–150 °C for a few seconds', '72 °C for 15 seconds', '100 °C for 30 minutes', '−18 °C'], x: '72 °C for 15 s is pasteurisation.' },
    { q: 'Canned sardines are a good source of calcium because…', o: ['processing softens the bones, which are eaten', 'calcium is added to the oil', 'canning creates calcium', 'the can contains calcium'], x: 'The softened bones are edible.' },
    { q: 'Which is a nutritional disadvantage of salting food?', o: ['It greatly increases sodium', 'It adds fibre', 'It removes fat', 'It adds vitamin D'], x: 'High sodium raises blood pressure.' },
    { q: 'By law, UK white flour is fortified with…', o: ['calcium, iron, thiamin and niacin', 'vitamins A and D', 'sterols and stanols', 'vitamin C'], x: 'Bread and Flour Regulations.' },
    { q: 'Plant sterols and stanols are added to spreads to…', o: ['lower blood cholesterol', 'increase vitamin C', 'preserve the spread', 'add colour'], x: 'They block cholesterol absorption.' },
    { q: 'Why are vegetables blanched before freezing?', o: ['To inactivate enzymes that cause deterioration', 'To add vitamins', 'To kill all bacteria permanently', 'To remove fibre'], x: 'Blanching stops enzyme activity; small vitamin loss.' },
    { q: 'Dried apricots compared with fresh apricots have…', o: ['more sugar and energy per 100 g', 'more vitamin C per 100 g', 'less fibre per 100 g', 'the same energy per 100 g'], x: 'Removing water concentrates everything except vitamin C, which is lost.' },
    { q: 'Adding bicarbonate of soda to green vegetables…', o: ['destroys vitamin C and thiamin', 'increases vitamin C', 'adds calcium', 'has no effect'], x: 'Alkali destroys these vitamins.' },
    { q: 'AFP products keep more nutrients than canned products because…', o: ['they are heated for a much shorter time', 'they are frozen', 'they contain preservatives', 'they are not heated at all'], x: 'High temperature, short time, then sterile filling.' }
  ],
  exam: [
    { q: 'State two ways of reducing vitamin C loss when cooking vegetables. [2]', m: 2, ms: ['use minimum water / steam / microwave', 'cook for the shortest time / add to boiling water', 'prepare just before cooking / cut into larger pieces', 'use cooking water for gravy / sauces (any two)'] },
    { q: 'Explain why white bread in the UK is fortified. [3]', m: 3, ms: ['milling to white flour removes bran and germ', 'which removes nutrients such as B vitamins / iron / fibre', 'calcium, iron, thiamin and niacin are added by law to replace losses / improve population intakes (e.g. calcium for bones)'] },
    { q: 'Compare the effects of freezing and canning on the nutritional value of peas. [4]', m: 4, ms: ['freezing: blanching causes a small loss of water-soluble vitamins', 'little further loss during frozen storage — nutrients well retained', 'canning: long high-temperature heating destroys more vitamin C / thiamin', 'vitamins leach into the canning liquid; salt / sugar often added'] },
    { q: 'Discuss the impact of different packaging and storage methods on the nutritional value of food. [6]', m: 6, ms: ['AFP: brief sterilisation then sterile packing — good retention, shelf-stable', 'cold store — chilling slows but does not stop losses; freezing retains nutrients well', 'vacuum packing removes oxygen — less oxidation of vitamins A/C/E and fats', 'light-proof packaging protects riboflavin / vitamin A', 'time in storage still reduces vitamin C', 'reasoned judgement / comparison'] }
  ],
  sims: ['cooking'], gens: ['loss1', 'loss2']
});

TOPICS.push({
  id: '1.8', unit: '1', ref: '1.2.1', title: 'Unsatisfactory nutritional intake', short: 'Deficiencies, excesses and their consequences',
  summary: 'Malnutrition means eating too little or too much of a nutrient. Some characteristics are visible (bowed legs, obesity, pale skin), others are not (high blood pressure, low iron stores). Know the causes and consequences of anaemia, CHD, CVD, dehydration, dental problems, diabetes, digestive disorders, mental health issues, obesity, rickets and skin conditions.',
  spec: [
    'Unsatisfactory nutritional intake categories: nutritional deficiencies and nutritional excesses',
    'Classification of characteristics: non-visible and visible',
    'Possible consequences and specific causes: anaemia, CHD, CVD, dehydration, dental problems',
    'Possible consequences and specific causes: diabetes, digestion disorders (diverticular disease), osteoporosis',
    'Possible consequences and specific causes: mental health issues, obesity, rickets, skin conditions'
  ],
  learn: [
    { h: 'Deficiency and excess', html: `
<p><b>Malnutrition</b> is any imbalance between what the body needs and what it gets.</p>
<ul><li><b>Nutritional deficiency</b> — too little energy or of a nutrient: undernutrition, iron-deficiency anaemia, rickets, vitamin D deficiency.</li>
<li><b>Nutritional excess</b> — too much: energy (obesity), saturated fat (high cholesterol, CHD), salt (high blood pressure), free sugars (dental caries, Type 2 diabetes), vitamin A (toxicity).</li></ul>
<div class="tbl"><table><tr><th>Visible characteristics</th><th>Non-visible characteristics</th></tr>
<tr><td>excess body fat; very low body weight; stunted growth; bowed legs (rickets); pale skin, spoon-shaped nails (anaemia); dental decay; dry or cracked skin, cracked lip corners (B2); dermatitis (pellagra); dark urine, sunken eyes (dehydration)</td><td>high blood pressure; raised LDL cholesterol; raised blood glucose / insulin resistance; low iron stores (ferritin); low bone mineral density; fatty deposits in arteries; low mood, poor concentration</td></tr></table></div>
<p>Non-visible characteristics are detected by tests: blood tests, blood-pressure readings, bone scans (DEXA). They often go unnoticed until disease develops.</p>` },
    { h: 'Deficiency conditions', html: `
<div class="tbl"><table><tr><th>Condition</th><th>Cause</th><th>Effects</th></tr>
<tr><td><b>Iron-deficiency anaemia</b></td><td>too little iron (or vitamin B12/folate for other anaemias); blood loss (heavy periods); poor absorption</td><td>too little haemoglobin → tiredness, pale skin, breathlessness, poor concentration</td></tr>
<tr><td><b>Rickets</b> (children) / osteomalacia (adults)</td><td>lack of vitamin D (little sunlight, covered skin, dark skin) and/or calcium</td><td>soft, weak bones; bowed legs; bone pain</td></tr>
<tr><td><b>Osteoporosis</b></td><td>low peak bone mass, low calcium and vitamin D, menopause (oestrogen falls), inactivity</td><td>porous, brittle bones → fractures of hip, wrist, spine</td></tr>
<tr><td><b>Dehydration</b></td><td>too little fluid, heat, exercise, illness, reduced thirst in older adults</td><td>headache, tiredness, dark urine, constipation, confusion; severe cases fatal</td></tr>
<tr><td><b>Diverticular disease</b></td><td>long-term low-fibre diet → straining, high pressure in the colon</td><td>pouches (diverticula) in the colon wall that can become inflamed (diverticulitis); pain, constipation</td></tr>
<tr><td><b>Skin conditions</b></td><td>lack of vitamin A (dry skin), B2 (cracked lips), B3 (pellagra), essential fatty acids, vitamin C (scurvy — bleeding gums)</td><td>dry, flaky, cracked or inflamed skin</td></tr></table></div>` },
    { h: 'Excess conditions', html: `
<div class="tbl"><table><tr><th>Condition</th><th>Dietary causes</th><th>What happens</th></tr>
<tr><td><b>Obesity</b></td><td>energy intake exceeds expenditure over time; energy-dense food, sugary drinks, large portions, inactivity</td><td>BMI ≥ 30; raises risk of Type 2 diabetes, CHD, some cancers, joint problems, low self-esteem</td></tr>
<tr><td><b>CHD</b> (coronary heart disease)</td><td>high saturated/trans fat (raises LDL), high salt, obesity, low fibre</td><td><b>atherosclerosis</b>: fatty plaques narrow coronary arteries → angina, heart attack</td></tr>
<tr><td><b>CVD</b> (cardiovascular disease — heart and blood vessels, including stroke)</td><td>as CHD, especially high salt → high blood pressure</td><td>narrowed or blocked arteries; stroke if blood supply to the brain is cut</td></tr>
<tr><td><b>Type 2 diabetes</b></td><td>excess energy and obesity (especially abdominal fat), high free sugars, low fibre, inactivity</td><td>insulin resistance → high blood glucose → damage to eyes, kidneys, nerves, blood vessels</td></tr>
<tr><td><b>Dental problems</b></td><td>frequent free sugars; acidic drinks</td><td>bacteria in plaque ferment sugar to acid → enamel demineralisation → <b>caries</b>; acids cause <b>erosion</b></td></tr>
<tr><td><b>Mental health issues</b></td><td>diets high in ultra-processed food and sugar; low omega-3, B vitamins, folate; blood glucose swings; alcohol</td><td>linked with low mood, depression, anxiety, poor concentration (gut–brain axis)</td></tr></table></div>
<div class="box tip"><b class="lbl">BMI</b><p>BMI = mass (kg) ÷ height (m)². Under 18.5 underweight · 18.5–24.9 healthy · 25–29.9 overweight · 30+ obese. (Lower thresholds, 23 and 27.5, are used for people of South Asian, Chinese, Black African and Caribbean backgrounds.) BMI does not distinguish muscle from fat — waist measurement adds information.</p></div>` }
  ],
  eqs: [['"BMI" = @frac{"mass (kg)"}{"height (m)"^2}', 'body mass index']],
  worked: [
    { q: 'A man has a mass of 92 kg and a height of 1.78 m. Calculate his BMI and classify it.', s: ['BMI = 92 ÷ 1.78²', '1.78² = 3.1684', 'BMI = 29.0 → overweight (25–29.9)'], a: 'BMI ≈ 29.0, overweight' },
    { q: 'Explain how a diet high in saturated fat and salt can lead to coronary heart disease. (4 marks)', s: ['Saturated fat raises LDL cholesterol in the blood.', 'LDL cholesterol is deposited in artery walls, forming fatty plaques (atherosclerosis) that narrow the coronary arteries.', 'High salt intake raises blood pressure, which damages artery walls and makes plaques more likely.', 'Narrowed arteries reduce blood (oxygen) supply to the heart muscle → angina; a clot on a plaque can block the artery → heart attack.'], a: 'LDL plaques + high BP narrow coronary arteries.' }
  ],
  pitfalls: ['Saying Type 1 diabetes is caused by diet — it is autoimmune; Type 2 is linked to diet and obesity.', 'Treating CHD and CVD as the same: CHD is one type of CVD.', 'Listing only symptoms when asked for causes (and vice versa).', 'Saying rickets is caused by calcium deficiency only — vitamin D deficiency is the main cause in the UK.', 'Forgetting that dental caries depends on how often sugar is eaten, not just the amount.'],
  cards: [
    ['Two categories of unsatisfactory intake?', 'Nutritional deficiencies and nutritional excesses.'],
    ['Give three visible characteristics of poor nutrition.', 'Obesity, bowed legs (rickets), pale skin (anaemia), dental decay, dry/cracked skin.'],
    ['Give three non-visible characteristics.', 'High blood pressure, high LDL cholesterol, high blood glucose, low iron stores, low bone density.'],
    ['Cause and symptoms of iron-deficiency anaemia?', 'Too little iron → too little haemoglobin → tiredness, pale skin, breathlessness.'],
    ['Cause of rickets?', 'Lack of vitamin D (and/or calcium) in children → soft, bowed bones.'],
    ['What is atherosclerosis?', 'Build-up of fatty plaques in artery walls, narrowing them.'],
    ['CHD vs CVD?', 'CHD affects the coronary arteries supplying the heart; CVD covers all heart and blood vessel disease including stroke.'],
    ['Cause of Type 2 diabetes?', 'Insulin resistance linked to excess energy/obesity, inactivity, high sugar/low fibre diet.'],
    ['How do sugars cause dental caries?', 'Plaque bacteria ferment sugar to acid, which demineralises enamel.'],
    ['Cause of diverticular disease?', 'Long-term low-fibre diet → pouches form in the colon wall.'],
    ['BMI formula and obese threshold?', 'kg ÷ m²; 30 or more is obese.'],
    ['Signs of dehydration?', 'Headache, tiredness, dark urine, dry mouth, constipation, confusion.'],
    ['Osteoporosis risk factors?', 'Low calcium/vitamin D, low peak bone mass, menopause, inactivity, age.']
  ],
  quiz: [
    { q: 'Which is a non-visible characteristic of poor nutrition?', o: ['High blood pressure', 'Bowed legs', 'Obesity', 'Dental decay'], x: 'It needs measuring to detect.' },
    { q: 'Rickets is mainly caused by a lack of…', o: ['vitamin D', 'vitamin C', 'iron', 'fibre'], x: 'Vitamin D is needed to absorb calcium.' },
    { q: 'Iron-deficiency anaemia causes tiredness because…', o: ['less haemoglobin means less oxygen is carried', 'bones become soft', 'blood pressure rises', 'blood glucose falls'], x: 'Iron is part of haemoglobin.' },
    { q: 'A BMI of 27 is classed as…', o: ['overweight', 'healthy', 'obese', 'underweight'], x: '25–29.9 is overweight.' },
    { q: 'Diverticular disease is linked with a diet low in…', o: ['fibre', 'protein', 'sodium', 'vitamin A'], x: 'Low fibre → straining and high colon pressure.' },
    { q: 'Which excess is most closely linked with high blood pressure?', o: ['Salt', 'Fibre', 'Vitamin C', 'Water'], x: 'Sodium raises blood pressure.' },
    { q: 'Atherosclerosis is…', o: ['narrowing of arteries by fatty plaques', 'softening of bones', 'inflammation of the colon', 'loss of tooth enamel'], x: 'It underlies CHD and stroke.' },
    { q: 'Which statement about Type 2 diabetes is correct?', o: ['It is strongly linked with obesity and inactivity', 'It is an autoimmune disease present from birth', 'It is caused by lack of vitamin D', 'It only affects children'], x: 'Insulin resistance, mostly lifestyle-related.' },
    { q: 'Tooth decay is most influenced by…', o: ['how often sugary foods and drinks are consumed', 'protein intake', 'calcium in the water', 'eating cheese'], x: 'Each sugar exposure causes an acid attack.' },
    { q: 'Osteoporosis mainly affects…', o: ['older adults, especially post-menopausal women', 'infants', 'toddlers', 'teenage boys'], x: 'Bone density falls with age and loss of oestrogen.' },
    { q: 'Pellagra, a skin condition, is caused by lack of…', o: ['niacin', 'vitamin D', 'calcium', 'sodium'], x: 'Dermatitis, diarrhoea, dementia.' },
    { q: 'A 60 kg woman who is 1.65 m tall has a BMI of about…', o: ['22.0', '36.4', '18.2', '27.5'], x: '60 ÷ 1.65² = 22.0.' }
  ],
  exam: [
    { q: 'Identify two visible characteristics of iron-deficiency anaemia. [2]', m: 2, ms: ['pale skin / pale inner eyelids', 'spoon-shaped / brittle nails', 'breathlessness / visible fatigue (any two)'] },
    { q: 'Explain the difference between a nutritional deficiency and a nutritional excess, giving an example of a condition caused by each. [4]', m: 4, ms: ['deficiency: too little of a nutrient / energy for the body’s needs', 'e.g. rickets / anaemia / osteomalacia', 'excess: too much of a nutrient / energy', 'e.g. obesity / CHD / high blood pressure / dental caries / vitamin A toxicity'] },
    { q: 'Explain how dietary factors can increase the risk of Type 2 diabetes. [4]', m: 4, ms: ['regular energy intake above needs → weight gain / obesity (especially abdominal fat)', 'fat stores reduce the body’s response to insulin — insulin resistance', 'high intakes of free sugars / high-GI foods cause repeated blood glucose spikes', 'low fibre / wholegrain intake removes a protective factor / blood glucose remains high'] },
    { q: 'Discuss the links between diet and mental health. [6]', m: 6, ms: ['diets high in ultra-processed food / sugar linked to higher risk of depression / low mood', 'unstable blood glucose causes irritability / poor concentration', 'omega-3 fatty acids support brain function', 'B vitamins / folate needed for neurotransmitters; deficiency linked to low mood / dementia', 'gut microbiome / gut–brain axis — fibre supports healthy gut bacteria', 'causation complex — mental health also affects eating (appetite changes, eating disorders); balanced conclusion'] }
  ],
  sims: ['bmi'], gens: ['bmi1', 'bmi2']
});

TOPICS.push({
  id: '1.9', unit: '1', ref: '1.2.2', title: 'Nutritional needs of the life stages', short: 'Infancy to eldership; pregnancy and menopause',
  summary: 'Nutritional needs change from birth to old age. Know the requirements of infancy, toddlers, early and middle childhood, adolescence, early, middle and late adulthood and eldership, plus pre- and post-natal and pre- and post-menopausal women.',
  spec: [
    'Infancy — neonate and up to one year old',
    'Toddler — one to three years; early childhood — three to eight years; middle childhood — nine to eleven years',
    'Adolescence — twelve to eighteen years',
    'Early adulthood 19–35; middle adulthood 36–50; late adulthood 51–65',
    'Eldership — over sixty-five years old',
    'Other life stages: pre/post-natal and pre/post-menopausal'
  ],
  learn: [
    { h: 'Infancy (0–12 months)', html: `
<ul><li><b>Breast milk</b> is recommended exclusively for about the first <b>6 months</b>: it contains the right balance of nutrients, antibodies (immunoglobulins), and is easy to digest. First-stage formula is the alternative.</li>
<li>Breastfed babies should have a daily <b>vitamin D supplement (8.5–10 µg)</b> from birth; formula-fed babies need one once they drink less than 500 ml formula a day.</li>
<li><b>Weaning</b> (complementary feeding) begins at around <b>6 months</b>, when iron stores from birth run low: iron-rich foods, smooth purées then mashed and finger foods.</li>
<li>Avoid: <b>salt</b> (immature kidneys), <b>honey</b> before 12 months (infant botulism), whole nuts (choking), cow’s milk as the main drink before 12 months, added sugar.</li>
<li>Growth is the fastest of any stage — birth weight roughly <b>triples</b> in the first year, so energy and protein per kg are very high.</li></ul>` },
    { h: 'Toddlers and childhood (1–11 years)', html: `
<div class="tbl"><table><tr><th>Stage</th><th>Key needs</th><th>Concerns</th></tr>
<tr><td><b>Toddler (1–3)</b></td><td>high energy and nutrients per kg but small stomachs → small, frequent, <b>nutrient-dense</b> meals; whole milk until 2; iron, calcium, vitamin D; vitamins A, C and D supplements are recommended from 6 months to 5 years</td><td>fussy eating; iron deficiency; choking hazards; no low-fat, high-fibre “adult” diets (too bulky)</td></tr>
<tr><td><b>Early childhood (3–8)</b></td><td>steady growth, very active; calcium and vitamin D for bones; iron; fibre; establishing habits</td><td>dental caries (limit sugars); obesity; school food choices</td></tr>
<tr><td><b>Middle childhood (9–11)</b></td><td>preparation for puberty — some girls start early; protein, calcium, iron; energy to match activity</td><td>rising screen time and snacking; body image</td></tr></table></div>` },
    { h: 'Adolescence (12–18)', html: `
<ul><li>The <b>growth spurt</b> — energy needs peak (boys 15–18 ≈ 2750 kcal/day; girls ≈ 2100 kcal).</li>
<li><b>Protein</b> for muscle and tissue growth.</li>
<li><b>Calcium and vitamin D</b> — about half of adult bone mass is laid down; peak bone mass is reached by about 30.</li>
<li><b>Iron</b> — girls to replace menstrual losses (RNI 14.8 mg); boys for increasing muscle and blood volume.</li>
<li>Concerns: skipping breakfast, fast food and sugary or energy drinks, dieting and eating disorders, low intakes of iron, calcium and vitamin D.</li></ul>` },
    { h: 'Adulthood (19–65)', html: `
<div class="tbl"><table><tr><th>Stage</th><th>Key points</th></tr>
<tr><td><b>Early adulthood (19–35)</b></td><td>growth finished — nutrients for maintenance and repair; peak bone mass by ~30 (calcium, vitamin D, exercise); women: iron and folate before pregnancy; lifestyle factors (alcohol, eating out, busy schedules)</td></tr>
<tr><td><b>Middle adulthood (36–50)</b></td><td>BMR begins to fall and activity often drops → easy to gain weight; reduce energy-dense foods; prevent CVD and Type 2 diabetes — less saturated fat and salt, more fibre, oily fish</td></tr>
<tr><td><b>Late adulthood (51–65)</b></td><td>menopause for most women (~51); energy needs lower; protect bones (calcium, vitamin D) and heart; maintain muscle with protein and activity</td></tr></table></div>
<p>Adult reference: about <b>2500 kcal (men)</b> and <b>2000 kcal (women)</b> a day; protein RNI 0.75 g per kg body weight (about 55 g men, 45 g women).</p>` },
    { h: 'Eldership (65+)', html: `
<ul><li><b>Lower energy</b> needs (lower BMR, less activity) but nutrient needs stay the same or rise → choose <b>nutrient-dense</b> foods.</li>
<li><b>Vitamin D</b> supplement year-round if housebound or in care; <b>calcium</b> for bones.</li>
<li><b>Protein</b> to slow <b>sarcopenia</b> (muscle loss) and help healing.</li>
<li><b>Fibre and fluid</b> — constipation is common; thirst sensation weakens → <b>dehydration</b> risk.</li>
<li><b>B12</b> absorption falls (less stomach acid); iron and folate for anaemia prevention.</li>
<li>Barriers: poor teeth/dentures, reduced taste and smell, low appetite, limited mobility, living alone, low income → risk of <b>malnutrition</b> (undernutrition).</li></ul>` },
    { h: 'Pregnancy, breastfeeding and menopause', html: `
<div class="tbl"><table><tr><th>Stage</th><th>Needs and advice</th></tr>
<tr><td><b>Pre-natal (pregnancy)</b></td><td>folic acid 400 µg before conception and to 12 weeks; vitamin D 10 µg; extra energy only in the <b>third trimester (+200 kcal)</b>; iron and calcium (body absorbs more efficiently). Avoid alcohol, liver and vitamin A supplements, unpasteurised and mould-ripened soft cheese (<i>Listeria</i>), raw or undercooked meat, raw eggs unless British Lion-marked, shark/swordfish/marlin; limit tuna and caffeine (200 mg a day).</td></tr>
<tr><td><b>Post-natal / breastfeeding</b></td><td>extra energy (about +330 kcal a day), extra fluid, calcium, protein; vitamin D 10 µg; gradual healthy weight loss</td></tr>
<tr><td><b>Pre-menopausal</b></td><td>iron to replace menstrual losses (14.8 mg); folate if pregnancy possible; build and maintain bone</td></tr>
<tr><td><b>Post-menopausal</b></td><td>oestrogen falls → faster bone loss (osteoporosis) and higher CVD risk; iron need falls to 8.7 mg; calcium 700 mg + vitamin D; watch energy and saturated fat; soya isoflavones may help some symptoms</td></tr></table></div>` }
  ],
  eqs: [['"protein RNI" = 0.75 "g" × "body mass (kg)"', 'adults']],
  worked: [
    { q: 'Calculate the protein RNI for a 68 kg adult.', s: ['RNI = 0.75 × 68', '= 51 g of protein a day'], a: '51 g/day' },
    { q: 'Explain why nutrient-dense foods are particularly important in eldership. (3 marks)', s: ['Older people have a lower BMR and are usually less active, so they need less energy.', 'But their needs for vitamins, minerals and protein stay the same or increase (e.g. vitamin D, calcium, protein for muscle).', 'Nutrient-dense foods supply these nutrients without excess energy; appetite is also often small, so every mouthful needs to count.'], a: 'Low energy needs + unchanged nutrient needs + small appetite.' }
  ],
  pitfalls: ['Saying pregnant women should “eat for two” — extra energy is only ~200 kcal in the last trimester.', 'Recommending low-fat, high-fibre adult diets for toddlers — too bulky and too low in energy.', 'Giving honey or salt to infants.', 'Forgetting that iron needs fall after the menopause.', 'Treating “elderly” as one group — independence and health vary widely.'],
  cards: [
    ['Why is breast milk ideal for infants?', 'Right balance of nutrients, contains antibodies, easy to digest, safe temperature, free.'],
    ['When should weaning start?', 'Around 6 months.'],
    ['Why no honey before 12 months?', 'Risk of infant botulism.'],
    ['Why small, frequent meals for toddlers?', 'High nutrient/energy needs but small stomachs.'],
    ['Key nutrients in adolescence?', 'Energy, protein, calcium, vitamin D, iron.'],
    ['When is peak bone mass reached?', 'Around age 30.'],
    ['Extra energy in pregnancy?', 'About 200 kcal/day in the third trimester only.'],
    ['Folic acid advice for pregnancy?', '400 µg daily before conception until 12 weeks.'],
    ['Foods to avoid in pregnancy (three)?', 'Liver/vitamin A supplements, unpasteurised or mould-ripened soft cheese, raw/undercooked meat, shark/swordfish/marlin, alcohol.'],
    ['Why do post-menopausal women need more attention to bone health?', 'Falling oestrogen speeds bone loss → osteoporosis risk.'],
    ['What is sarcopenia?', 'Age-related loss of muscle mass and strength.'],
    ['Why are older adults at risk of dehydration?', 'Reduced thirst sensation, mobility issues, fear of incontinence.'],
    ['Adult protein RNI?', '0.75 g per kg body mass per day.'],
    ['Supplements recommended for children 6 months–5 years?', 'Vitamins A, C and D.']
  ],
  quiz: [
    { q: 'Exclusive breastfeeding is recommended for about the first…', o: ['6 months', '6 weeks', '12 months', '2 years'], x: 'Then complementary feeding begins alongside milk.' },
    { q: 'Why should salt not be added to a baby’s food?', o: ['Immature kidneys cannot cope with it', 'It destroys vitamin D', 'It causes rickets', 'It adds too much fibre'], x: 'Infant kidneys cannot process excess sodium.' },
    { q: 'Which age range is “middle childhood” in the specification?', o: ['9–11 years', '3–8 years', '12–18 years', '1–3 years'], x: '9–11 years.' },
    { q: 'Adolescent girls need more iron than boys mainly because of…', o: ['menstruation', 'faster growth', 'more muscle', 'more sport'], x: 'RNI 14.8 mg for girls vs 11.3 mg for boys.' },
    { q: 'Extra energy in pregnancy is needed…', o: ['only in the final trimester, about 200 kcal', 'throughout — double the normal amount', 'only in the first trimester', 'never'], x: '“Eating for two” is a myth.' },
    { q: 'Which food should pregnant women avoid?', o: ['Liver', 'Hard cheddar cheese', 'Well-cooked chicken', 'Pasteurised milk'], x: 'Liver is very high in retinol.' },
    { q: 'After the menopause, the iron requirement…', o: ['falls to the same as men (8.7 mg)', 'doubles', 'stays at 14.8 mg', 'rises slightly'], x: 'No more menstrual losses.' },
    { q: 'A key concern in eldership is…', o: ['low energy needs combined with unchanged nutrient needs', 'rapid growth', 'menstrual iron loss', 'peak bone mass building'], x: 'Hence nutrient-dense food.' },
    { q: 'Whole milk rather than semi-skimmed is advised for children until…', o: ['2 years', '6 months', '5 years', '11 years'], x: 'Semi-skimmed from 2 if eating well; skimmed not before 5.' },
    { q: 'Late adulthood in the specification is…', o: ['51–65 years', '36–50 years', 'over 65', '19–35'], x: '51–65.' },
    { q: 'A 70 kg adult’s protein RNI is about…', o: ['53 g', '70 g', '35 g', '105 g'], x: '0.75 × 70 = 52.5 g.' },
    { q: 'Which is recommended for breastfed babies from birth?', o: ['Vitamin D supplement', 'Iron tablets', 'Cow’s milk', 'Honey'], x: '8.5–10 µg vitamin D daily.' }
  ],
  exam: [
    { q: 'State two nutritional reasons why weaning begins at around six months. [2]', m: 2, ms: ['iron stores from birth are running low', 'milk alone no longer meets energy / protein needs', 'baby needs to learn to chew / accept textures (any two)'] },
    { q: 'Explain the nutritional needs of adolescents. [6]', m: 6, ms: ['growth spurt — high energy needs (up to ~2750 kcal boys)', 'protein for growth of muscle / tissues', 'calcium for bone growth — peak bone mass', 'vitamin D to absorb calcium', 'iron — girls menstruation; boys muscle / blood volume', 'concerns: skipped meals / fast food / sugary drinks / eating disorders — explained'] },
    { q: 'Assess the nutritional advice that should be given to a woman in the first trimester of pregnancy. [6]', m: 6, ms: ['folic acid 400 µg — prevents neural tube defects', 'vitamin D 10 µg supplement', 'no extra energy needed yet', 'avoid liver / vitamin A supplements — birth defects', 'avoid listeria risks (unpasteurised / mould-ripened cheese, pâté), raw meat, raw eggs (non-Lion), high-mercury fish, alcohol; limit caffeine', 'balanced diet with iron, calcium; manage nausea — reasoned conclusion'] },
    { q: 'Compare the nutritional needs of a toddler and an older adult aged 80. [8]', m: 8, ms: ['toddler: rapid growth — high energy and protein per kg', 'toddler: small stomach — frequent, nutrient-dense meals; not too much fibre', 'toddler: iron, calcium, vitamin D; supplements A, C, D', 'older adult: lower energy needs — lower BMR / activity', 'older adult: nutrient needs unchanged — nutrient density', 'older adult: protein for sarcopenia, vitamin D supplement, calcium', 'older adult: fibre and fluid for constipation / dehydration', 'both at risk of undernutrition; both may have eating difficulties (teeth, fussiness) — comparison made'] }
  ],
  sims: ['lifestage'], gens: ['rni1']
});

TOPICS.push({
  id: '1.10', unit: '1', ref: '1.2.2', title: 'Medical conditions, culture and dietary support', short: 'Diabetes, coeliac, CVD, allergies; religion and diet; Eatwell',
  summary: 'Medical conditions change what people can and should eat; culture, religion and lifestyle choices shape eating patterns. Government and NHS guidance — Healthy Eating Guidance and the Eatwell Guide — supports people to meet their needs.',
  spec: [
    'Medical conditions associated with life stages and how they affect nutritional intake and food choices: allergies, cardiovascular disease (CVD), coeliac disease, high blood pressure',
    'Medical conditions: hypercholesterolemia, intolerances such as lactose intolerance, obesity, Type 1/Type 2 diabetes',
    'How culture affects nutritional intake and food choices: eating patterns, lifestyle choices, religious beliefs, vegans/vegetarians/lacto vegetarians',
    'Support available: Government guidelines (e.g. Healthy Eating Guidance); NHS recommendations (e.g. the Eatwell Guide)'
  ],
  learn: [
    { h: 'Medical conditions and diet', html: `
<div class="tbl"><table><tr><th>Condition</th><th>What it is</th><th>Dietary management</th></tr>
<tr><td><b>Food allergy</b></td><td>immune (IgE) reaction to a food protein — can cause anaphylaxis</td><td>strict avoidance; read labels (14 allergens emphasised); carry adrenaline auto-injector if prescribed; replace nutrients (e.g. calcium if milk-free)</td></tr>
<tr><td><b>Coeliac disease</b></td><td>autoimmune reaction to <b>gluten</b> (wheat, barley, rye; oats if contaminated) that damages the villi → poor absorption, anaemia, weight loss</td><td>lifelong strict gluten-free diet; naturally gluten-free starches (rice, potatoes, maize, quinoa); certified GF products; avoid cross-contamination</td></tr>
<tr><td><b>Lactose intolerance</b></td><td>too little <b>lactase</b> → undigested lactose fermented in the colon (bloating, wind, diarrhoea)</td><td>lactose-free milk, hard cheese and yogurt (low lactose), calcium-fortified plant milks</td></tr>
<tr><td><b>Type 1 diabetes</b></td><td>autoimmune destruction of insulin-producing cells; usually begins in childhood</td><td>insulin injections/pump matched to carbohydrate intake (carbohydrate counting); regular meals; low-GI choices</td></tr>
<tr><td><b>Type 2 diabetes</b></td><td>insulin resistance, strongly linked to obesity</td><td>weight loss; reduce free sugars and refined carbohydrates; high fibre, low GI; regular meals; activity</td></tr>
<tr><td><b>High blood pressure</b> (hypertension)</td><td>BP ≥ 140/90 mmHg; raises stroke and CHD risk</td><td>less salt (&lt; 6 g), more fruit and vegetables (potassium), DASH diet, limit alcohol, lose weight</td></tr>
<tr><td><b>Hypercholesterolaemia</b></td><td>high blood LDL cholesterol (may be inherited — familial)</td><td>replace saturated with unsaturated fat; more soluble fibre (oats); plant sterols/stanols; oily fish</td></tr>
<tr><td><b>CVD</b></td><td>heart and blood vessel disease incl. CHD and stroke</td><td>Eatwell-style diet low in saturated fat and salt; high fibre; oily fish; healthy weight</td></tr>
<tr><td><b>Obesity</b></td><td>BMI ≥ 30</td><td>sustained energy deficit (~500–600 kcal/day); smaller portions; nutrient-dense, high-fibre, low-energy-density foods; activity</td></tr></table></div>` },
    { h: 'Culture, lifestyle and eating patterns', html: `
<p><b>Eating patterns</b> vary: three meals vs grazing; main meal at midday or evening; family meals vs eating alone; shift work; skipping breakfast; eating out and takeaways.</p>
<p><b>Lifestyle choices</b>: time-poor people may rely on convenience food; students, athletes, people who follow ethical, organic or “clean eating” choices, intermittent fasting.</p>
<div class="tbl"><table><tr><th>Diet</th><th>Excludes</th><th>Nutrients to plan for</th></tr>
<tr><td><b>Lacto-ovo vegetarian</b></td><td>meat, fish</td><td>iron, zinc, omega-3</td></tr>
<tr><td><b>Lacto vegetarian</b></td><td>meat, fish, <b>eggs</b> (dairy eaten)</td><td>iron, zinc, omega-3, vitamin D</td></tr>
<tr><td><b>Vegan</b></td><td>all animal products (meat, fish, eggs, dairy, honey)</td><td><b>B12</b> (supplement/fortified foods), calcium, iron, zinc, iodine, vitamin D, omega-3, HBV protein via complementation</td></tr>
<tr><td>Pescatarian</td><td>meat (fish eaten)</td><td>iron</td></tr></table></div>` },
    { h: 'Religious beliefs', html: `
<div class="tbl"><table><tr><th>Religion</th><th>Common food practices</th></tr>
<tr><td><b>Islam</b></td><td>halal meat only; no pork or alcohol; fasting from dawn to sunset during Ramadan</td></tr>
<tr><td><b>Judaism</b></td><td>kosher food; no pork or shellfish; meat and dairy not eaten or prepared together; fasting on Yom Kippur</td></tr>
<tr><td><b>Hinduism</b></td><td>no beef (the cow is sacred); many are vegetarian; some avoid onion and garlic; fasting days</td></tr>
<tr><td><b>Sikhism</b></td><td>many vegetarian; no halal or kosher (ritually slaughtered) meat; no alcohol</td></tr>
<tr><td><b>Buddhism</b></td><td>many vegetarian (non-harm); some avoid alcohol</td></tr>
<tr><td><b>Rastafarianism</b></td><td>“Ital” diet — natural, often vegan, little or no salt; no alcohol</td></tr>
<tr><td><b>Christianity</b></td><td>few rules; some give up foods in Lent; some Catholics eat fish on Fridays</td></tr></table></div>
<p>Practices vary between individuals — always ask rather than assume.</p>` },
    { h: 'Support: guidelines and resources', html: `
<ul><li><b>The Eatwell Guide</b> (NHS / Public Health England, now OHID, and Public Health Wales) — the proportions of each food group for a healthy, balanced diet over a day or a week.</li>
<li><b>Healthy eating guidance</b> — e.g. the eight tips: base meals on starchy carbohydrates; eat lots of fruit and veg; eat more fish, including a portion of oily fish; cut down on saturated fat and sugar; eat less salt (≤ 6 g for adults); get active and be a healthy weight; do not get thirsty; do not skip breakfast.</li>
<li><b>5 A Day</b>; <b>reference intakes</b> and front-of-pack <b>traffic light labelling</b>; <b>Healthy Start</b> vouchers/card (milk, fruit, vegetables, vitamins for pregnant women and young children on low incomes); school food standards; NHS Better Health; registered dietitians and GPs; charities (Diabetes UK, Coeliac UK, Allergy UK, British Heart Foundation).</li></ul>` }
  ],
  eqs: [],
  worked: [
    { q: 'Suggest how a lasagne recipe could be adapted for a person with coeliac disease and high cholesterol. (4 marks)', s: ['Replace wheat pasta sheets with gluten-free lasagne sheets (e.g. rice/maize), checking they are certified gluten-free.', 'Make the white sauce with a gluten-free thickener such as cornflour instead of wheat flour.', 'Replace full-fat mince with lean turkey mince or lentils to reduce saturated fat; use semi-skimmed milk and a small amount of strong reduced-fat cheese.', 'Add extra vegetables (courgette, spinach) and beans for fibre; use rapeseed oil rather than butter.'], a: 'GF sheets + cornflour sauce; lean/plant protein, lower-fat dairy, unsaturated oil, more fibre.' }
  ],
  pitfalls: ['Treating allergy and intolerance as the same — allergy involves the immune system.', 'Saying coeliac disease is an allergy — it is an autoimmune disease.', 'Saying vegans cannot get enough protein — they can, with planning; B12 is the real risk.', 'Assuming everyone of a faith follows the same rules.', 'Forgetting that lacto vegetarians do not eat eggs.'],
  cards: [
    ['What is coeliac disease?', 'An autoimmune reaction to gluten that damages the villi of the small intestine.'],
    ['Cereals containing gluten?', 'Wheat, barley, rye (oats often contaminated).'],
    ['Dietary management of hypercholesterolaemia?', 'Less saturated fat; more unsaturated fat, soluble fibre, oily fish; sterols/stanols.'],
    ['Type 1 vs Type 2 diabetes?', 'Type 1: autoimmune, no insulin produced, needs insulin. Type 2: insulin resistance linked with obesity; managed by diet, weight loss, activity, medication.'],
    ['What does DASH stand for?', 'Dietary Approaches to Stop Hypertension.'],
    ['Lacto vegetarian?', 'Eats dairy but not meat, fish or eggs.'],
    ['Nutrient vegans must supplement or obtain from fortified foods?', 'Vitamin B12 (also consider vitamin D, iodine, omega-3).'],
    ['Islamic dietary laws?', 'Halal meat; no pork or alcohol; Ramadan fasting.'],
    ['Jewish dietary laws?', 'Kosher; no pork or shellfish; meat and dairy kept separate.'],
    ['Hindu dietary practice?', 'No beef; many vegetarian.'],
    ['Name two government/NHS nutrition supports.', 'Eatwell Guide, 8 healthy eating tips, 5 A Day, traffic light labels, Healthy Start.'],
    ['What is the Healthy Start scheme?', 'Help to buy milk, fruit, vegetables, pulses and vitamins for low-income pregnant women and families with young children.']
  ],
  quiz: [
    { q: 'Coeliac disease is a reaction to…', o: ['gluten', 'lactose', 'sucrose', 'casein only'], x: 'Autoimmune reaction to gluten proteins.' },
    { q: 'Which grain is naturally gluten-free?', o: ['Rice', 'Barley', 'Rye', 'Spelt'], x: 'Rice, maize, quinoa, buckwheat and potatoes are gluten-free.' },
    { q: 'Type 1 diabetes is…', o: ['an autoimmune condition where the pancreas makes no insulin', 'caused by eating too much sugar', 'always cured by weight loss', 'a food allergy'], x: 'It is not caused by diet.' },
    { q: 'Which diet is designed to lower blood pressure?', o: ['DASH', 'FODMAP', 'Ital', 'Ketogenic'], x: 'Dietary Approaches to Stop Hypertension.' },
    { q: 'A lacto vegetarian eats…', o: ['dairy but not eggs, meat or fish', 'eggs but not dairy', 'fish but not meat', 'no animal products at all'], x: 'Lacto = milk.' },
    { q: 'Which food is not permitted in both Islam and Judaism?', o: ['Pork', 'Beef', 'Chicken', 'Rice'], x: 'Pork is prohibited in both.' },
    { q: 'Keeping meat and dairy separate is a practice in…', o: ['Judaism', 'Hinduism', 'Sikhism', 'Buddhism'], x: 'Part of kosher (kashrut) rules.' },
    { q: 'The nutrient most at risk in a vegan diet is…', o: ['vitamin B12', 'vitamin C', 'fibre', 'carbohydrate'], x: 'B12 occurs naturally only in animal foods.' },
    { q: 'Hypercholesterolaemia is best managed by…', o: ['replacing saturated fat with unsaturated fat', 'eating more butter', 'avoiding all carbohydrate', 'eating more salt'], x: 'Also soluble fibre, sterols, oily fish.' },
    { q: 'Lactose intolerance is caused by…', o: ['a shortage of the enzyme lactase', 'an IgE reaction to milk protein', 'gluten', 'too much calcium'], x: 'Undigested lactose is fermented in the colon.' },
    { q: 'The Eatwell Guide is published by…', o: ['the NHS / UK health departments', 'food manufacturers', 'supermarkets', 'WJEC'], x: 'Public health guidance.' }
  ],
  exam: [
    { q: 'Explain why a person with coeliac disease may develop anaemia. [3]', m: 3, ms: ['gluten causes damage to / flattening of the villi', 'reduces surface area for absorption', 'so less iron / folate / B12 absorbed → anaemia'] },
    { q: 'Describe how religious beliefs might affect the food choices of two different people. [4]', m: 4, ms: ['religion 1 named with a relevant rule (e.g. Islam — halal meat, no pork/alcohol)', 'effect on food choice explained (e.g. chooses halal-certified products, fasting in Ramadan changes meal timing)', 'religion 2 named with a relevant rule (e.g. Hinduism — no beef, often vegetarian)', 'effect explained (e.g. relies on pulses / dairy for protein)'] },
    { q: 'Evaluate the effectiveness of the Eatwell Guide in supporting people with specific dietary needs. [8]', m: 8, ms: ['Eatwell gives simple visual proportions for a balanced diet — easy to understand', 'applies to most people over 2 years; not suitable for under-2s', 'shows healthier choices within groups (wholegrain, lower fat/sugar)', 'includes plant proteins and dairy alternatives — adaptable for vegetarians / vegans', 'does not give portion sizes / energy amounts for individuals', 'people with medical conditions (coeliac, diabetes, allergy, kidney disease) need specialist adaptation / dietitian advice', 'culture and cost: may not reflect all cuisines / budgets', 'reasoned judgement'] }
  ],
  sims: ['menu'], gens: []
});

TOPICS.push({
  id: '1.11', unit: '1', ref: '1.2.3', title: 'How situations affect nutritional needs', short: 'Environment, activity, care settings and income',
  summary: 'Where people live, work and are cared for, how active they are and how much money they have all change their nutritional needs and what they can actually eat.',
  spec: [
    'Different environments: workplace (sedentary or physical work; work based, home based or hybrid working)',
    'Different environments: home situation (urban vs rural), holiday, temperature',
    'Care settings: looked after by parents, sheltered accommodation, hospital/hospice, assisted living facility',
    'Physical activity level: type of work (manual labour, sedentary), leisure activity, exercise',
    'Economic situation: food choice due to income/food poverty, availability of food, availability of facilities to prepare meals'
  ],
  learn: [
    { h: 'Energy needs: BMR × PAL', html: `
<p>Daily energy need = <b>basal metabolic rate (BMR)</b> × <b>physical activity level (PAL)</b>.</p>
<ul><li><b>BMR</b> — energy used at complete rest to keep the body alive (heart, breathing, temperature). Higher in larger, more muscular people, males, growing children; falls with age.</li>
<li><b>PAL</b> — a multiplier for activity: about <b>1.4</b> sedentary (desk job, little exercise), <b>1.6</b> moderately active, <b>1.8–2.0</b> active (manual work or daily training), up to 2.4 for very heavy work or elite training.</li></ul>
<p>BMR can be estimated with the <b>Schofield (WHO) equations</b>, e.g. women 18–30: BMR (kcal) = 14.7 × mass + 496; men 18–30: 15.3 × mass + 679.</p>` },
    { h: 'Workplace and home', html: `
<div class="tbl"><table><tr><th>Situation</th><th>Effect on needs and choices</th></tr>
<tr><td><b>Sedentary work</b> (office, driving)</td><td>low PAL → lower energy need; risk of weight gain from snacking and vending machines</td></tr>
<tr><td><b>Physical work</b> (construction, farming)</td><td>high PAL → more energy (carbohydrate), fluid in heat, protein for repair; packed meals must be substantial and safe (no fridge)</td></tr>
<tr><td><b>Work-based / home-based / hybrid working</b></td><td>home workers can cook fresh but may graze and move less; office days may rely on canteens or meal deals; shift workers eat at unusual times</td></tr>
<tr><td><b>Urban vs rural home</b></td><td>urban: many shops and takeaways, easy access but more fast food; rural: fewer shops (“food deserts”), travel costs, but local produce and more space to grow food</td></tr>
<tr><td><b>Holiday</b></td><td>routines change: all-inclusive buffets, alcohol, unfamiliar foods; food safety risks abroad (travellers’ diarrhoea); more or less activity</td></tr>
<tr><td><b>Temperature</b></td><td>heat → sweating: more fluid and electrolytes (sodium), lighter meals; cold → more energy to keep warm, hot meals and drinks</td></tr></table></div>` },
    { h: 'Care settings', html: `
<div class="tbl"><table><tr><th>Setting</th><th>Nutritional considerations</th></tr>
<tr><td><b>Looked after by parents</b></td><td>children depend on parents’ knowledge, income, time and cooking skills; family eating habits are learned</td></tr>
<tr><td><b>Sheltered accommodation</b></td><td>independent older people with a warden — may cook for one, have limited mobility and appetite; risk of relying on convenience food; lunch clubs and meals on wheels help</td></tr>
<tr><td><b>Hospital / hospice</b></td><td>illness raises needs (protein and energy for healing) while appetite falls; <b>texture-modified</b> diets for swallowing problems (IDDSI levels); nutritional screening (MUST); special diets; in a hospice, comfort, preference and small appealing portions matter most</td></tr>
<tr><td><b>Assisted living facility</b></td><td>meals provided or supported; menus must suit medical conditions, cultural needs and textures; mealtimes are social; staff monitor weight and fluid</td></tr></table></div>` },
    { h: 'Activity: work, leisure and exercise', html: `
<p>Physical activity is the most variable part of energy expenditure. <b>Manual labour</b> and regular <b>exercise</b> raise energy, carbohydrate, protein and fluid needs; <b>sedentary</b> work and leisure (screens, gaming) lower them.</p>
<ul><li>Endurance athletes: carbohydrate 6–10 g/kg/day to fill glycogen stores; strength athletes: protein 1.2–2.0 g/kg/day spread through the day.</li>
<li>Replace fluid lost as sweat — drink before, during and after exercise; sports drinks only for long, intense sessions.</li></ul>` },
    { h: 'Economic situation', html: `
<ul><li><b>Income and food poverty</b> — low income limits choice; cheap energy-dense foods (refined carbohydrates, processed meat) can be cheaper per kcal than fruit, vegetables and fish, so diets may be high in energy but low in nutrients. Food banks, Healthy Start, free school meals help.</li>
<li><b>Availability of food</b> — local shops may lack fresh produce; seasonal and supply shortages; rural distances.</li>
<li><b>Facilities to prepare meals</b> — people in temporary accommodation, bedsits or homeless may have no cooker, fridge or storage; energy costs discourage oven use → reliance on microwave, ready meals, takeaways; safe storage is difficult.</li></ul>
<div class="box why"><b class="lbl">Budget strategies</b><p>Plan meals and shopping lists; cook in batches; use pulses, eggs, frozen and canned fruit and vegetables; supermarket own brands; reduce waste; slow cookers and air fryers use less energy than ovens.</p></div>` }
  ],
  eqs: [['"energy need" = "BMR" × "PAL"', 'kcal per day'], ['"BMR (women 18–30)" = 14.7m + 496', 'Schofield, kcal/day'], ['"BMR (men 18–30)" = 15.3m + 679', 'Schofield, kcal/day']],
  worked: [
    { q: 'A 25-year-old male bricklayer has a mass of 80 kg. His PAL is 1.9. Estimate his daily energy requirement (BMR = 15.3m + 679).', s: ['BMR = 15.3 × 80 + 679 = 1224 + 679 = 1903 kcal', 'energy = 1903 × 1.9 = 3616 kcal', '≈ 3600 kcal a day (≈ 15.1 MJ)'], a: '≈ 3600 kcal/day' },
    { q: 'Explain how living in temporary accommodation with only a microwave may affect a family’s diet. (4 marks)', s: ['Without a hob or oven they cannot easily cook fresh meals from raw ingredients.', 'They may rely on ready meals and takeaways, which are often higher in salt, saturated fat and sugar and more expensive.', 'Without a fridge they cannot store fresh or chilled food safely, so choose long-life foods; fruit and vegetable intake falls.', 'This increases the risk of obesity and micronutrient deficiencies; food safety may also be compromised.'], a: 'Limited cooking and storage → processed food, fewer fresh foods, safety risks.' }
  ],
  pitfalls: ['Saying everyone needs 2000 kcal — needs depend on BMR and PAL.', 'Forgetting fluid and electrolytes for hot environments or heavy work.', 'Ignoring facilities (cooker, fridge) when discussing low income.', 'Treating hospital patients as needing less food — illness often raises needs.'],
  cards: [
    ['What is BMR?', 'Basal metabolic rate — energy used at complete rest to maintain vital functions.'],
    ['Energy requirement formula?', 'BMR × PAL.'],
    ['Typical PAL for a sedentary office worker?', 'About 1.4.'],
    ['How does hot weather change needs?', 'More fluid and electrolytes lost in sweat; lighter meals.'],
    ['How does cold weather change needs?', 'More energy to maintain body temperature; warm meals.'],
    ['What is a food desert?', 'An area with poor access to affordable, fresh, healthy food.'],
    ['Nutrition issue in sheltered accommodation?', 'Cooking for one, low appetite, limited mobility → reliance on convenience food; lunch clubs help.'],
    ['Why do hospital patients often need more protein and energy?', 'For healing and repair, while appetite is often low.'],
    ['What is food poverty?', 'Being unable to afford or access a healthy diet.'],
    ['Effect of hybrid working on diet?', 'Varied routines: home days may allow fresh cooking but more grazing; office days rely on bought food.'],
    ['Carbohydrate need for endurance training?', 'About 6–10 g per kg body mass per day.']
  ],
  quiz: [
    { q: 'Energy requirement is calculated as…', o: ['BMR × PAL', 'BMI × PAL', 'BMR + BMI', 'mass × height'], x: 'Basal needs scaled by activity.' },
    { q: 'Which worker has the highest PAL?', o: ['Farm labourer', 'Call-centre worker', 'Taxi driver', 'Accountant'], x: 'Manual work raises energy expenditure.' },
    { q: 'In hot weather, the priority change is to…', o: ['increase fluid intake', 'increase fat intake', 'eat more salt tablets routinely', 'reduce water intake'], x: 'Replace sweat losses.' },
    { q: 'A “food desert” is…', o: ['an area with little access to affordable healthy food', 'a region with no rainfall', 'a dessert menu', 'a sugar-free diet'], x: 'Common in some rural and deprived urban areas.' },
    { q: 'Which setting may use texture-modified diets?', o: ['Hospital', 'A gym', 'A school canteen for all pupils', 'A takeaway'], x: 'For patients with dysphagia (swallowing difficulty).' },
    { q: 'Low income often leads to diets that are…', o: ['energy-dense but nutrient-poor', 'high in fresh fish', 'very high in fibre', 'low in energy'], x: 'Cheap calories tend to be refined and processed.' },
    { q: 'A 60 kg woman aged 22 (BMR = 14.7m + 496) has a PAL of 1.5. Energy need ≈', o: ['2067 kcal', '1378 kcal', '2744 kcal', '1500 kcal'], x: 'BMR = 1378; × 1.5 = 2067 kcal.' },
    { q: 'Which is a disadvantage of rural living for food choice?', o: ['Fewer shops and longer travel', 'Too many takeaways', 'No local produce', 'Food always cheaper'], x: 'Access and travel cost can limit choice.' },
    { q: 'Someone living without a fridge should choose…', o: ['foods that are safe at room temperature, e.g. canned or dried', 'fresh chicken', 'soft cheese', 'cooked rice to keep for days'], x: 'Ambient-stable foods reduce food safety risk.' },
    { q: 'BMR is higher in…', o: ['people with more muscle mass', 'older people', 'people with less muscle', 'sedentary people only'], x: 'Muscle is metabolically active.' }
  ],
  exam: [
    { q: 'State what is meant by physical activity level (PAL). [1]', m: 1, ms: ['a multiplier / ratio of total energy expenditure to BMR, reflecting how active a person is'] },
    { q: 'Explain how the nutritional needs of a scaffolder working outdoors in summer differ from those of an office worker. [6]', m: 6, ms: ['scaffolder: manual work — high PAL, more energy needed', 'more carbohydrate for fuel / glycogen', 'more protein for muscle repair', 'hot conditions — high sweat losses — more fluid and electrolytes', 'office worker: sedentary — low PAL, lower energy needs, risk of weight gain', 'practical points, e.g. scaffolder needs substantial packed lunch kept cool; office worker needs to avoid snacking — comparison drawn'] },
    { q: 'Discuss how economic situation can affect the nutritional intake of a family. [8]', m: 8, ms: ['low income restricts the amount / variety of food bought', 'cheaper energy-dense processed foods chosen — high fat / salt / sugar', 'fewer fruit, vegetables, fish — micronutrient deficiencies', 'food poverty may mean skipped meals — parents prioritise children', 'availability: local shops, travel costs, food deserts', 'facilities: no cooker / fridge / energy costs → ready meals', 'support: food banks, Healthy Start, free school meals, budgeting skills', 'higher income enables choice but does not guarantee a healthy diet — balanced conclusion'] }
  ],
  sims: ['pal'], gens: ['bmr1', 'pal1']
});

TOPICS.push({
  id: '1.12', unit: '1', ref: '1.3.1', title: 'Planning nutritional programmes', short: 'Objectives, guidance, monitoring and review',
  summary: 'Plan a nutritional programme for a specific need: set SMART objectives and a timescale, use appropriate nutritional guidance (energy targets, Eatwell, DASH, low-FODMAP, macronutrient recommendations), monitor progress and review how effective the programme has been.',
  spec: [
    'Objective setting: target and goal setting — athletic performance, manage a health-related problem, manage food allergies or intolerances, support pregnancy, weight gain, weight loss, weight maintenance',
    'Timescales, for example a week, month, year',
    'Nutritional guidance: calorie specifications such as kilojoules; current guidance e.g. Eatwell guide, DASH diet for hypertension, FODMAP diet for IBS; eating patterns; food and meal adaptations; macronutrient recommendations',
    'Monitoring nutritional programmes: revisiting goals; software/digital technology/devices to track progress; feedback; adaptations to programme',
    'Reviewing effectiveness: alignment with objectives; effectiveness of guidance (cost, time, motivation, personal preferences); effectiveness of monitoring; impact of adaptations'
  ],
  learn: [
    { h: 'Setting objectives', html: `
[[d:plancycle]]
<p>A programme starts from the client’s <b>needs</b> (age, sex, body mass, activity, health, culture, preferences, budget, skills) and a clear <b>goal</b>: athletic performance, managing a condition (e.g. hypertension, Type 2 diabetes, IBS), managing an allergy or intolerance, supporting pregnancy, or weight gain, loss or maintenance.</p>
<div class="box def"><b class="lbl">SMART objectives</b><p><b>S</b>pecific · <b>M</b>easurable · <b>A</b>chievable · <b>R</b>ealistic/Relevant · <b>T</b>ime-bound. “Lose weight” is vague; “lose 4 kg in 8 weeks by eating 500 kcal/day less and walking 30 minutes daily” is SMART.</p></div>
<p><b>Timescales</b>: short term (a week — e.g. a meal plan), medium (a month), long term (a year — e.g. a season of training or a pregnancy). Safe weight loss is about <b>0.5–1 kg a week</b>.</p>` },
    { h: 'Nutritional guidance to use', html: `
<ul><li><b>Energy specifications</b> — in kcal or kJ (1 kcal = 4.184 kJ), from BMR × PAL. A deficit of about <b>500–600 kcal a day</b> gives roughly 0.5 kg loss a week (1 kg of body fat ≈ 7700 kcal); a surplus of 300–500 kcal supports gain.</li>
<li><b>Eatwell Guide</b> — the default for a balanced diet.</li>
<li><b>DASH diet</b> (Dietary Approaches to Stop Hypertension) — lots of fruit, vegetables, wholegrains, low-fat dairy, pulses, nuts; less red meat, sugar and <b>salt</b>; rich in potassium, calcium and magnesium.</li>
<li><b>Low-FODMAP diet</b> for <b>irritable bowel syndrome (IBS)</b> — restricts fermentable oligosaccharides, disaccharides, monosaccharides and polyols (e.g. onion, garlic, wheat, beans, lactose, apples, honey, sweeteners ending -ol) for 2–6 weeks, then <b>reintroduces</b> them one by one to find triggers, ideally with a dietitian.</li>
<li><b>Eating patterns</b> — regular meals, breakfast, meal timing around training, small frequent meals (pregnancy nausea, older adults), time-restricted eating.</li>
<li><b>Food and meal adaptations</b> — swap ingredients (wholegrain, lower-fat, lower-salt), change cooking methods, portion control, allergen-free alternatives.</li>
<li><b>Macronutrient recommendations</b> — carbohydrate ~50% energy (free sugars &lt; 5%), fat ≤ 35% (saturates &lt; 11%), protein 0.75 g/kg (more for athletes, older adults, healing), fibre 30 g.</li></ul>` },
    { h: 'Monitoring', html: `
<ul><li><b>Revisit goals</b> at planned points (e.g. weekly weigh-in, monthly review).</li>
<li><b>Software and devices</b> — food-diary apps and nutritional analysis programs, smart scales, fitness trackers and heart-rate monitors, continuous glucose monitors (diabetes), blood-pressure monitors.</li>
<li><b>Feedback</b> — from the client (hunger, energy, enjoyment, symptoms), professionals (GP, dietitian, coach) and measurements (weight, waist, BP, performance times).</li>
<li><b>Adaptations</b> — change portion sizes, energy targets or foods when progress stalls, symptoms appear or circumstances change.</li></ul>` },
    { h: 'Reviewing effectiveness', html: `
<p>A review judges the programme against its <b>objectives</b>: were targets met, partly met or missed — and why?</p>
<div class="tbl"><table><tr><th>Review question</th><th>Think about</th></tr>
<tr><td>Alignment with objectives</td><td>measurable outcomes vs the targets set at the start</td></tr>
<tr><td>Effectiveness of the guidance</td><td><b>cost</b> of the foods; <b>time</b> to shop and cook; the client’s <b>motivation</b>; <b>personal preferences</b> (would they keep eating this?)</td></tr>
<tr><td>Effectiveness of monitoring</td><td>was data accurate and regular? did the client use the app honestly?</td></tr>
<tr><td>Impact of adaptations</td><td>did changes improve progress or adherence?</td></tr></table></div>
<p>Good reviews are <b>evidence-based</b>, balanced and end with recommendations for the next stage.</p>` }
  ],
  eqs: [['"weekly change (kg)" ≈ @frac{"daily deficit (kcal)" × 7}{7700}', '1 kg body fat ≈ 7700 kcal'], ['"macronutrient (g)" = @frac{"energy" × "% share"}{100 × "kcal per g"}', 'from % energy to grams']],
  worked: [
    { q: 'A client needs 2400 kcal a day. Plan a 500 kcal daily deficit. Estimate the weight loss after 8 weeks.', s: ['target intake = 2400 − 500 = 1900 kcal/day', 'weekly deficit = 500 × 7 = 3500 kcal → 3500 ÷ 7700 ≈ 0.45 kg/week', '8 weeks: 0.45 × 8 ≈ 3.6 kg'], a: '≈ 3.6 kg in 8 weeks' },
    { q: 'An athlete eats 3000 kcal/day with 55% of energy from carbohydrate. How many grams of carbohydrate is this?', s: ['energy from carbohydrate = 0.55 × 3000 = 1650 kcal', 'grams = 1650 ÷ 4 = 412.5 g'], a: '≈ 413 g' }
  ],
  pitfalls: ['Writing vague objectives — make them SMART with numbers and dates.', 'Planning very large deficits (e.g. 1500 kcal) — unsafe and unsustainable.', 'Forgetting monitoring and review — the spec has four stages.', 'Treating low-FODMAP as a long-term diet — it is an elimination-then-reintroduction plan.', 'Ignoring cost, time, motivation and preferences when reviewing.'],
  cards: [
    ['What does SMART stand for?', 'Specific, Measurable, Achievable, Realistic/Relevant, Time-bound.'],
    ['Safe rate of weight loss?', 'About 0.5–1 kg per week.'],
    ['Energy in 1 kg of body fat?', 'About 7700 kcal.'],
    ['What is the DASH diet for?', 'Lowering blood pressure (hypertension).'],
    ['Main features of DASH?', 'High fruit, veg, wholegrains, low-fat dairy, pulses, nuts; low salt, sugar, red meat.'],
    ['What is a low-FODMAP diet for?', 'Managing irritable bowel syndrome (IBS).'],
    ['FODMAP stands for?', 'Fermentable Oligosaccharides, Disaccharides, Monosaccharides And Polyols.'],
    ['Three stages of low-FODMAP?', 'Restriction (2–6 weeks), reintroduction, personalisation.'],
    ['Name three monitoring tools.', 'Food-diary apps, smart scales, fitness trackers, glucose/BP monitors.'],
    ['Four factors when reviewing the effectiveness of guidance?', 'Cost, time, motivation, personal preferences.'],
    ['Converting kcal from carbohydrate to grams?', 'Divide by 4 (kcal/g).'],
    ['Daily deficit for ~0.5 kg/week loss?', 'About 500–600 kcal.']
  ],
  quiz: [
    { q: 'Which is a SMART objective?', o: ['Reduce salt intake to under 6 g a day within 4 weeks', 'Eat better', 'Lose some weight soon', 'Be healthier'], x: 'It is specific, measurable and time-bound.' },
    { q: 'The DASH diet is designed to manage…', o: ['hypertension', 'IBS', 'coeliac disease', 'lactose intolerance'], x: 'Dietary Approaches to Stop Hypertension.' },
    { q: 'A low-FODMAP diet is used for…', o: ['irritable bowel syndrome', 'rickets', 'anaemia', 'Type 1 diabetes'], x: 'Reduces fermentable carbohydrates that trigger symptoms.' },
    { q: 'A 550 kcal/day deficit for 2 weeks gives a loss of about…', o: ['1 kg', '5 kg', '0.1 kg', '3 kg'], x: '550 × 14 = 7700 kcal ≈ 1 kg.' },
    { q: 'Which is a monitoring method?', o: ['Using a food-tracking app', 'Setting a target', 'Choosing recipes', 'Buying ingredients'], x: 'Monitoring tracks progress.' },
    { q: 'Which is NOT one of the factors for reviewing effectiveness of nutritional guidance in the spec?', o: ['Colour of packaging', 'Cost', 'Time', 'Motivation'], x: 'The spec lists cost, time, motivation and personal preferences.' },
    { q: 'An athlete eats 3200 kcal with 25% from fat. Fat in grams ≈', o: ['89 g', '200 g', '800 g', '36 g'], x: '800 kcal ÷ 9 = 89 g.' },
    { q: 'Onion, garlic and wheat are restricted in a low-FODMAP diet because they contain…', o: ['fructans (oligosaccharides)', 'gluten only', 'lactose', 'saturated fat'], x: 'Fructans are fermentable oligosaccharides.' },
    { q: 'For weight gain, a daily surplus of about…', o: ['300–500 kcal', '3000 kcal', '50 kcal', '1500 kcal'], x: 'Gradual gain limits fat storage.' },
    { q: 'Why are programmes adapted during monitoring?', o: ['To respond to progress, symptoms or changes in circumstances', 'To make them more expensive', 'Because objectives are never reviewed', 'To remove all feedback'], x: 'Adaptation keeps the programme effective.' }
  ],
  exam: [
    { q: 'Give two examples of digital technology that could be used to monitor a weight-loss programme. [2]', m: 2, ms: ['food-diary / calorie-counting app', 'smart scales', 'fitness tracker / pedometer / smartwatch', 'nutritional analysis software (any two)'] },
    { q: 'Explain how the DASH diet helps reduce blood pressure. [4]', m: 4, ms: ['reduces sodium / salt intake — less fluid retention / lower blood volume', 'high in potassium from fruit and vegetables — helps excrete sodium / relaxes blood vessels', 'calcium and magnesium from low-fat dairy / nuts / wholegrains', 'lower in saturated fat and sugar — supports weight loss / healthier arteries'] },
    { q: 'Priya, 30, has been diagnosed with IBS. Plan the key stages of a nutritional programme for her. [8]', m: 8, ms: ['assess needs: symptoms, current diet, preferences, lifestyle', 'SMART objective, e.g. reduce bloating episodes to ≤1 a week within 8 weeks', 'low-FODMAP restriction 2–6 weeks — examples of foods to limit and swaps', 'reintroduction of FODMAP groups one at a time to identify triggers', 'maintain balance — fibre, calcium (lactose-free dairy), variety; eating patterns (regular meals, eat slowly)', 'monitoring: symptom and food diary / app; dietitian feedback', 'adaptations based on triggers found', 'review against objective — cost, time, motivation, preferences; long-term personalised plan'] },
    { q: 'Evaluate the importance of monitoring and reviewing a nutritional programme for an athlete preparing for a marathon over six months. [8]', m: 8, ms: ['goals revisited — e.g. body composition, race time, training load', 'devices track training volume, heart rate, weight, energy intake', 'carbohydrate needs change with training load — adapt intake', 'hydration monitored (weigh before/after runs, urine colour)', 'feedback on energy, recovery, injuries, GI comfort — adapt race-day fuelling', 'review cost / time / motivation / preferences — adherence', 'without monitoring — under-fuelling (RED-S), injury, poor performance', 'balanced judgement'] }
  ],
  sims: ['planner'], gens: ['deficit1', 'macro1', 'energyconv1']
});
