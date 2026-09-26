/* ==========================================================
   UNIT 3 · PRINCIPLES OF FOOD HYGIENE AND FOOD SAFETY (part 1)
   3.1 micro-organisms · 3.2 intolerance and allergy
   ========================================================== */
TOPICS.push({
  id: '3.1', unit: '3', ref: '3.1.1', title: 'Properties of micro-organisms', short: 'Bacteria, viruses and fungi: size, structure, pathogenicity, reproduction',
  summary: 'Three types of micro-organism matter in food safety. Bacteria (Campylobacter, Salmonella, E. coli, Listeria) are single cells that multiply in food. Viruses (norovirus, rotavirus, hepatitis A) are far smaller and only reproduce inside living cells. Fungi include microscopic moulds that grow on food.',
  spec: [
    'Bacteria, for example Campylobacter, Salmonella, E. coli, Listeria',
    'Viruses, for example norovirus, rotavirus, hepatitis A',
    'Fungi, for example microscopic fungi — food mould',
    'Properties: size; cellular structure; pathogenicity; growth/reproduction'
  ],
  learn: [
    { h: 'Comparing the three types', html: `
[[d:microbes]]
<div class="tbl"><table><tr><th>Property</th><th>Bacteria</th><th>Viruses</th><th>Fungi (moulds)</th></tr>
<tr><td><b>Size</b></td><td>about 0.5–5 µm (micrometres); visible with a light microscope</td><td>about 20–300 nm (nanometres) — around 10–100 times smaller than bacteria; need an electron microscope</td><td>individual threads (hyphae) 2–10 µm wide; colonies clearly visible to the eye</td></tr>
<tr><td><b>Cellular structure</b></td><td>single <b>prokaryotic</b> cell: cell wall, membrane, cytoplasm, ribosomes, circular DNA, plasmids; some have flagella or a capsule; some form heat-resistant <b>spores</b></td><td><b>not cells</b>: genetic material (DNA or RNA) inside a protein coat (capsid), sometimes an envelope</td><td><b>eukaryotic</b> cells with a nucleus and chitin cell walls; moulds are multicellular threads (hyphae) forming a mycelium; yeasts are single cells</td></tr>
<tr><td><b>Growth / reproduction</b></td><td><b>binary fission</b> — one cell splits into two, as often as every 10–20 minutes in ideal conditions; <b>multiply in food</b></td><td>only replicate <b>inside living host cells</b>; they do <b>not multiply in food</b> — food just carries them</td><td>grow by extending hyphae; reproduce by releasing <b>spores</b> carried in air; yeasts reproduce by budding</td></tr>
<tr><td><b>Pathogenicity</b></td><td>some pathogenic: infect the gut and/or produce <b>toxins</b></td><td>all are parasites; food-borne viruses infect the gut or liver; very low infective dose</td><td>most spoil food; some produce <b>mycotoxins</b> (e.g. aflatoxin on nuts and grain, patulin in apples)</td></tr></table></div>
<div class="box tip"><b class="lbl">Units</b><p>1 mm = 1000 µm; 1 µm = 1000 nm. A 2 µm bacterium is 2000 nm long; a 30 nm norovirus particle is about 70 times shorter.</p></div>` },
    { h: 'Pathogenicity', html: `
<p><b>Pathogenicity</b> is the ability of a micro-organism to cause disease. It depends on:</p>
<ul><li><b>Infective dose</b> — how many are needed. Low for norovirus, <i>Campylobacter</i> and <i>E. coli</i> O157 (as few as 10–500); higher for many <i>Salmonella</i> strains.</li>
<li><b>Invasiveness</b> — the ability to attach to and invade the gut lining (<i>Salmonella</i>, <i>Campylobacter</i>).</li>
<li><b>Toxin production</b> — <b>exotoxins</b> released by bacteria, e.g. Shiga toxin (<i>E. coli</i> O157), enterotoxins (<i>Staphylococcus aureus</i>, <i>Bacillus cereus</i>). Some toxins are heat-stable and survive reheating.</li>
<li><b>Host susceptibility</b> — infants, pregnant women, older people and immunocompromised people are more vulnerable.</li></ul>` },
    { h: 'The named bacteria', html: `
<div class="tbl"><table><tr><th>Bacterium</th><th>Key properties</th></tr>
<tr><td><i>Campylobacter</i></td><td>curved/spiral rod; the most common cause of bacterial food poisoning in the UK; mainly raw poultry; low infective dose; does not grow well in food but survives</td></tr>
<tr><td><i>Salmonella</i></td><td>rod with flagella; raw eggs, poultry, meat, unpasteurised milk; killed by thorough cooking</td></tr>
<tr><td><i>E. coli</i> (O157 / STEC)</td><td>rod; lives in the gut of cattle; undercooked mince, unpasteurised milk, contaminated vegetables; very low infective dose; produces Shiga toxin</td></tr>
<tr><td><i>Listeria monocytogenes</i></td><td>rod; <b>grows at fridge temperatures</b> (down to about 0 °C) and tolerates salt; chilled ready-to-eat foods; dangerous in pregnancy</td></tr></table></div>` },
    { h: 'Viruses and moulds in food', html: `
<ul><li><b>Norovirus</b> — the “winter vomiting bug”; the commonest cause of gastroenteritis; spread by infected food handlers, raw shellfish (oysters), salads and person to person.</li>
<li><b>Rotavirus</b> — mainly affects babies and young children; faecal–oral spread; severe watery diarrhoea; UK infants are vaccinated.</li>
<li><b>Hepatitis A</b> — infects the <b>liver</b>; contaminated water, shellfish, frozen berries or food handled by an infected person; long incubation (2–7 weeks).</li>
<li><b>Moulds</b> — <i>Penicillium</i>, <i>Aspergillus</i>, <i>Rhizopus</i> (bread mould), <i>Botrytis</i> (grey mould on fruit). They tolerate acidic, sugary, drier foods better than bacteria. Visible mould has roots through soft foods — discard soft food that is mouldy.</li></ul>` }
  ],
  eqs: [['N = N_0 × 2^n', 'bacteria after n divisions (binary fission)']],
  worked: [
    { q: 'A portion of chicken is contaminated with 100 bacteria that divide every 20 minutes. How many are there after 2 hours at room temperature?', s: ['2 hours = 120 minutes → n = 120 ÷ 20 = 6 divisions', 'N = 100 × 2⁶ = 100 × 64', 'N = 6400 bacteria'], a: '6400 bacteria' },
    { q: 'Compare how bacteria and viruses reproduce. (3 marks)', s: ['Bacteria reproduce by binary fission: one cell grows and divides into two identical cells.', 'Bacteria can multiply in food if conditions (temperature, moisture, nutrients, time) are suitable.', 'Viruses are not cells: they can only replicate inside living host cells, so they do not multiply in food — food only carries them.'], a: 'Binary fission in food vs replication only inside host cells.' }
  ],
  pitfalls: ['Saying viruses grow in food — they only replicate inside host cells.', 'Calling viruses cells.', 'Mixing up µm and nm — viruses are nanometres.', 'Saying all bacteria are harmful — most are harmless or useful.', 'Scraping mould off soft food and eating the rest.'],
  cards: [
    ['Size of bacteria?', 'About 0.5–5 µm.'],
    ['Size of viruses?', 'About 20–300 nm.'],
    ['How do bacteria reproduce?', 'Binary fission — one cell divides into two.'],
    ['Can viruses multiply in food?', 'No — only inside living host cells.'],
    ['Structure of a virus?', 'DNA or RNA inside a protein coat (capsid); not a cell.'],
    ['Are bacteria prokaryotic or eukaryotic?', 'Prokaryotic — no nucleus; circular DNA.'],
    ['How do moulds reproduce?', 'By spores released into the air; grow as hyphae.'],
    ['What is pathogenicity?', 'The ability of a micro-organism to cause disease.'],
    ['Most common bacterial cause of food poisoning in the UK?', 'Campylobacter.'],
    ['Which bacterium grows in the fridge?', 'Listeria monocytogenes.'],
    ['Which virus attacks the liver?', 'Hepatitis A.'],
    ['What are mycotoxins?', 'Toxins produced by some moulds, e.g. aflatoxin.'],
    ['What is a bacterial spore?', 'A tough, dormant form (e.g. Bacillus, Clostridium) that survives heat and dry conditions.']
  ],
  quiz: [
    { q: 'Which is the smallest?', o: ['Norovirus particle', 'Salmonella cell', 'Mould hypha', 'Yeast cell'], x: 'Viruses are tens of nanometres.' },
    { q: 'Bacteria reproduce by…', o: ['binary fission', 'spores carried by air only', 'replicating inside host cells only', 'budding only'], x: 'One cell splits into two.' },
    { q: 'Viruses in food…', o: ['do not multiply in the food', 'multiply fastest at 37 °C in food', 'need sugar to grow in food', 'form mould colonies'], x: 'They need living host cells.' },
    { q: 'Which bacterium is most associated with raw poultry?', o: ['Campylobacter', 'Listeria', 'Rotavirus', 'Penicillium'], x: 'Campylobacter is found on most raw chicken.' },
    { q: 'Listeria is particularly dangerous because it…', o: ['can grow at refrigerator temperatures', 'is killed by chilling', 'is a virus', 'only affects adults'], x: 'Also risk to pregnancy.' },
    { q: 'Which statement about moulds is correct?', o: ['They reproduce by spores and tolerate acidic foods', 'They are prokaryotic', 'They are smaller than viruses', 'They cannot be seen'], x: 'Eukaryotic, spore-forming fungi.' },
    { q: 'Hepatitis A mainly affects the…', o: ['liver', 'kidneys', 'lungs', 'skin'], x: 'Causes jaundice.' },
    { q: 'Bacteria doubling every 20 minutes for 1 hour multiply by…', o: ['8', '3', '6', '20'], x: '2³ = 8.' },
    { q: 'Cell structure of a bacterium includes…', o: ['cell wall, membrane, cytoplasm, circular DNA', 'a nucleus with chromosomes', 'a protein coat only', 'hyphae'], x: 'Prokaryotic cell.' },
    { q: 'Rotavirus mainly causes illness in…', o: ['infants and young children', 'pregnant women only', 'athletes', 'plants'], x: 'Severe diarrhoea in young children.' },
    { q: '1 µm equals…', o: ['1000 nm', '100 nm', '1 mm', '10 nm'], x: 'Micrometre = 1000 nanometres.' },
    { q: 'Aflatoxin is produced by…', o: ['moulds (Aspergillus)', 'norovirus', 'Campylobacter', 'yeast'], x: 'A mycotoxin found on nuts and grain.' }
  ],
  exam: [
    { q: 'Compare the size and cellular structure of bacteria and viruses. [4]', m: 4, ms: ['bacteria about 0.5–5 µm; viruses about 20–300 nm / much smaller', 'bacteria are single cells', 'with cell wall, membrane, cytoplasm, circular DNA / no nucleus (prokaryotic)', 'viruses are not cells — nucleic acid in a protein coat'] },
    { q: 'Explain why Listeria monocytogenes is a particular concern in chilled ready-to-eat foods. [3]', m: 3, ms: ['Listeria can grow at refrigeration temperatures (0–5 °C)', 'ready-to-eat foods are not cooked again before eating, so bacteria are not destroyed', 'serious illness in vulnerable groups — pregnant women (miscarriage), elderly, immunocompromised'] },
    { q: 'A cooked rice salad is contaminated with 50 bacteria that divide every 15 minutes. Calculate the number after 3 hours in a warm kitchen. Show your working. [3]', m: 3, ms: ['3 hours = 180 min → 12 divisions', '50 × 2¹²', '= 204 800 (≈ 2 × 10⁵)'] },
    { q: 'Discuss the properties that make norovirus such a common cause of food-borne illness. [6]', m: 6, ms: ['very small and very low infective dose (few particles)', 'survives on surfaces for days and resists some sanitisers', 'spread by infected food handlers — faecal–oral and vomit aerosols', 'raw shellfish / salads / RTE foods not cooked after handling', 'highly contagious person to person — outbreaks in care homes, cruise ships, hospitals', 'short incubation — rapid spread; conclusion on control (handwashing, exclusion 48 h)'] }
  ],
  sims: ['microbes'], gens: ['fission1', 'fission2', 'size1']
});

TOPICS.push({
  id: '3.2', unit: '3', ref: '3.1.2', title: 'Conditions for microbial growth', short: 'Temperature, pH, oxygen, water, nutrients — in every environment',
  summary: 'Micro-organisms need suitable temperature, pH, oxygen, water and nutrients — plus time. Changing any of these changes the rate of growth. Apply this to preparation, cooking, serving, storing, transporting, outdoor and temporary environments.',
  spec: [
    'Conditions: temperature, pH, oxygen, water, nutrients',
    'Environments: preparation, cooking, serving, storing, transporting, outdoors, temporary',
    'Understand how changing conditions affect growth of different micro-organisms in different environments'
  ],
  learn: [
    { h: 'The bacterial growth curve', html: `
[[d:growthcurve]]
<ol><li><b>Lag phase</b> — bacteria adjust to new conditions; little increase.</li><li><b>Log (exponential) phase</b> — rapid binary fission; numbers double every generation.</li><li><b>Stationary phase</b> — nutrients run low and waste builds up; growth = death.</li><li><b>Death (decline) phase</b> — more die than divide.</li></ol>
<p>Controls aim to keep bacteria in the <b>lag phase</b> (chilling) or kill them (cooking).</p>` },
    { h: 'The five conditions', html: `
<div class="tbl"><table><tr><th>Condition</th><th>Effect on growth</th></tr>
<tr><td><b>Temperature</b></td><td>most pathogens are <b>mesophiles</b>, growing fastest near <b>37 °C</b>; the danger zone is 5–63 °C. Below 5 °C growth slows (except <i>Listeria</i>, a psychrotroph); at −18 °C microbes are dormant; above 63 °C they stop growing; 75 °C kills most vegetative cells. Spores survive boiling.</td></tr>
<tr><td><b>pH</b></td><td>most bacteria prefer <b>neutral pH (6.5–7.5)</b>; few pathogens grow below <b>pH 4.5</b>, so acidic foods are safer. Moulds and yeasts tolerate acid (pH 2–8).</td></tr>
<tr><td><b>Oxygen</b></td><td><b>aerobes</b> need oxygen (most moulds); <b>anaerobes</b> grow without it (<i>Clostridium botulinum</i> in cans, vacuum packs, oil-covered garlic); <b>facultative anaerobes</b> grow either way (<i>Salmonella</i>, <i>E. coli</i>, <i>Listeria</i>); <b>microaerophiles</b> need a little (<i>Campylobacter</i>).</td></tr>
<tr><td><b>Water</b></td><td>microbes need available water, measured as <b>water activity (a<sub>w</sub>)</b>, 0–1. Most bacteria need a<sub>w</sub> above ~0.91; moulds grow down to ~0.8 and some below. Drying, salting, sugaring and freezing lower available water.</td></tr>
<tr><td><b>Nutrients</b></td><td>moist, high-protein foods support rapid growth — <b>high-risk foods</b>: cooked meat and poultry, dairy, eggs, shellfish, cooked rice, gravies and sauces, ready-to-eat foods.</td></tr></table></div>
<p><b>Time</b> ties them together: with enough time in the right conditions, a few bacteria become millions.</p>` },
    { h: 'Different environments', html: `
<div class="tbl"><table><tr><th>Environment</th><th>How conditions change</th></tr>
<tr><td>Preparation</td><td>food sits at room temperature (danger zone) during long preparation; warm kitchens</td></tr>
<tr><td>Cooking</td><td>undercooking or uneven heating (microwave cold spots, large joints) leaves survivors; slow warming passes through the danger zone</td></tr>
<tr><td>Serving</td><td>buffets and hot-holding below 63 °C; food left out; handling by staff and customers</td></tr>
<tr><td>Storing</td><td>fridges above 5 °C, overloaded fridges, doors left open; slow cooling of large batches; freezer breakdown</td></tr>
<tr><td>Transporting</td><td>temperature rises in vehicles without refrigeration; delays; long deliveries</td></tr>
<tr><td>Outdoors</td><td>hot weather raises food temperature; barbecues cook the outside while the centre stays raw; flies, dust; limited handwashing</td></tr>
<tr><td>Temporary (festivals, markets, pop-ups)</td><td>limited water, power and refrigeration; small spaces; high volume; staff may be less trained</td></tr></table></div>` }
  ],
  eqs: [['N = N_0 × 2^{t/g}', 't = time, g = generation (doubling) time']],
  worked: [
    { q: 'Explain why a meat pie left in a hot car for 3 hours on a summer day is a high risk. (4 marks)', s: ['The car could be 30–40 °C — in the danger zone and close to the optimum temperature for mesophilic pathogens (37 °C).', 'Meat pie is a moist, high-protein, near-neutral pH food — ideal nutrients, water and pH.', 'Over 3 hours bacteria could pass the lag phase and grow exponentially (9 doublings at 20 min each ≈ 500 times more).', 'Some bacteria (e.g. Staphylococcus aureus, Bacillus cereus) may produce heat-stable toxins that reheating will not destroy.'], a: 'Optimum temperature + nutrients + moisture + time → exponential growth and toxins.' }
  ],
  pitfalls: ['Saying bacteria need light — they do not.', 'Saying all bacteria stop growing in the fridge — Listeria grows slowly.', 'Forgetting time as a factor.', 'Saying cooking always makes food safe — spores and some toxins survive.', 'Describing conditions without applying them to the named environment.'],
  cards: [
    ['Five conditions for microbial growth?', 'Temperature, pH, oxygen, water, nutrients (plus time).'],
    ['Four phases of the growth curve?', 'Lag, log (exponential), stationary, death.'],
    ['Optimum temperature for most pathogens?', 'About 37 °C (body temperature).'],
    ['pH below which few pathogens grow?', 'pH 4.5.'],
    ['What is water activity?', 'The amount of water available for microbial growth (0–1).'],
    ['Facultative anaerobe — example?', 'Salmonella, E. coli, Listeria — grow with or without oxygen.'],
    ['Anaerobe of concern in cans and vacuum packs?', 'Clostridium botulinum.'],
    ['What are high-risk foods?', 'Moist, high-protein, ready-to-eat foods: cooked meat, dairy, eggs, shellfish, cooked rice, gravies.'],
    ['Why is a barbecue risky?', 'Outside chars while the centre stays undercooked; outdoor heat, flies, limited handwashing.'],
    ['Risk in temporary food outlets?', 'Limited water, power, refrigeration and space.'],
    ['Why is transport a risk?', 'Temperature rises without refrigeration; delays; damaged packaging.']
  ],
  quiz: [
    { q: 'In which growth phase do numbers increase fastest?', o: ['Log (exponential) phase', 'Lag phase', 'Stationary phase', 'Death phase'], x: 'Numbers double each generation.' },
    { q: 'Most food-poisoning bacteria grow fastest at about…', o: ['37 °C', '5 °C', '63 °C', '100 °C'], x: 'They are mesophiles.' },
    { q: 'Why is vinegar pickling protective?', o: ['Low pH (below 4.5) inhibits most bacteria', 'It adds oxygen', 'It adds protein', 'It raises the temperature'], x: 'Acetic acid lowers pH.' },
    { q: 'Clostridium botulinum is a concern in…', o: ['vacuum packs and cans (no oxygen)', 'dry biscuits', 'boiling water', 'frozen peas at −18 °C'], x: 'It is an anaerobe.' },
    { q: 'Which food is high-risk?', o: ['Cooked chicken', 'Dry pasta', 'Sugar', 'Crackers'], x: 'Moist, high-protein, ready to eat.' },
    { q: 'Lowering water activity (e.g. drying) prevents growth because…', o: ['microbes cannot access enough water', 'it raises pH', 'it adds oxygen', 'it increases nutrients'], x: 'Low aw inhibits growth.' },
    { q: 'Campylobacter is described as…', o: ['microaerophilic — needs a little oxygen', 'strictly anaerobic', 'a mould', 'a psychrophile'], x: 'Grows best with reduced oxygen.' },
    { q: 'Which environment has the most problems with limited refrigeration and handwashing?', o: ['A temporary festival stall', 'A hospital kitchen', 'A factory with HACCP', 'A domestic fridge'], x: 'Temporary set-ups have limited facilities.' },
    { q: 'Moulds compared with bacteria can grow…', o: ['in more acidic and drier foods', 'only at 37 °C', 'only without oxygen', 'only in meat'], x: 'Why jam or bread goes mouldy.' },
    { q: '10 bacteria with a generation time of 20 minutes, after 2 hours:', o: ['640', '120', '60', '1280'], x: '6 divisions: 10 × 64.' }
  ],
  exam: [
    { q: 'State three conditions needed for bacteria to multiply. [3]', m: 3, ms: ['warmth / suitable temperature (5–63 °C)', 'moisture / water', 'food / nutrients', 'suitable pH / oxygen (depending on type) / time (any three)'] },
    { q: 'Describe the four phases of the bacterial growth curve. [4]', m: 4, ms: ['lag: bacteria adapt, little growth', 'log/exponential: rapid binary fission — numbers double each generation', 'stationary: nutrients depleted / waste accumulates — division = death', 'death/decline: more die than are produced'] },
    { q: 'Explain how the conditions for microbial growth could change when food is transported from a central kitchen to a school. [6]', m: 6, ms: ['hot food may cool into the danger zone during transport', 'chilled food may warm above 5 °C without refrigerated vehicles', 'delays increase time for growth', 'containers not sealed — oxygen / contamination; condensation adds moisture', 'high-risk foods (meat, rice, sauces) most affected', 'controls: insulated / heated / chilled containers, temperature checks on dispatch and arrival, maximum transport times'] }
  ],
  sims: ['growth'], gens: ['fission1', 'fission2']
});

TOPICS.push({
  id: '3.3', unit: '3', ref: '3.1.3', title: 'Micro-organisms and food quality', short: 'Spoilage and beneficial fermentation',
  summary: 'Micro-organisms change food quality — appearance, texture, smell, taste, non-visible effects and nutritional content. Spoilage organisms make food unacceptable; others are used deliberately to make bread, yogurt, cheese and other fermented foods. Understand how these changes happen.',
  spec: [
    'Negative and positive effects of micro-organisms on food quality: appearance, texture, smell/aroma',
    'Negative and positive effects: taste, non-visible effects, nutritional content',
    'Understand how those changes take place'
  ],
  learn: [
    { h: 'How microbes change food', html: `
<p>Micro-organisms release <b>enzymes</b> into food and absorb the products. The changes depend on what is broken down:</p>
<ul><li><b>Carbohydrates</b> — fermentation to <b>acids</b> (lactic, acetic), <b>alcohol</b> and <b>CO₂</b>: sour taste, gas, fizz, bloated packs.</li>
<li><b>Proteins</b> — proteolysis to amines, ammonia and hydrogen sulfide: putrid, fishy or “rotten egg” smells, slime.</li>
<li><b>Fats</b> — lipolysis to free fatty acids: <b>rancid</b> flavours.</li>
<li><b>Pectin and cell walls</b> — softening and collapse of fruit and vegetables.</li></ul>
<p>Enzymes naturally present in food (e.g. polyphenol oxidase — enzymic browning) also cause deterioration, but this is not microbial.</p>` },
    { h: 'Negative effects — spoilage', html: `
<div class="tbl"><table><tr><th>Quality</th><th>Examples of spoilage</th></tr>
<tr><td>Appearance</td><td>fuzzy mould colonies (white, green, black), slime on meat, cloudiness in drinks, discolouration (green sheen on ham)</td></tr>
<tr><td>Texture</td><td>sliminess, softening, mushy fruit, ropey bread (<i>Bacillus</i>)</td></tr>
<tr><td>Smell / aroma</td><td>sour milk, ammonia, sulfurous “off” meat and fish, musty mould, yeasty or alcoholic smells</td></tr>
<tr><td>Taste</td><td>sour, bitter, rancid, fizzy (fermenting juice)</td></tr>
<tr><td>Non-visible effects</td><td><b>pathogens</b> and <b>toxins</b> often cause <b>no</b> visible change — food can look, smell and taste normal but be unsafe (e.g. <i>Listeria</i>, <i>Salmonella</i>, mycotoxins)</td></tr>
<tr><td>Nutritional content</td><td>microbes use nutrients: loss of sugars, vitamins, protein quality; spoiled food is often discarded — waste</td></tr></table></div>
<div class="box warn"><b class="lbl">Spoilage ≠ danger</b><p>Spoilage organisms warn us by changing the food. Pathogens usually do not — which is why “it smells fine” is not a safety test.</p></div>` },
    { h: 'Positive effects — fermentation', html: `
<div class="tbl"><table><tr><th>Food</th><th>Micro-organism</th><th>How the change happens</th></tr>
<tr><td><b>Bread</b></td><td>yeast <i>Saccharomyces cerevisiae</i></td><td>ferments sugars to CO₂ (raises dough, open texture) and ethanol (evaporates in baking); flavour and aroma</td></tr>
<tr><td><b>Yogurt</b></td><td><i>Lactobacillus bulgaricus</i>, <i>Streptococcus thermophilus</i></td><td>ferment lactose to <b>lactic acid</b>; pH falls to about 4.5, casein proteins coagulate → thick texture, sharp taste; less lactose; some live cultures are probiotic</td></tr>
<tr><td><b>Cheese</b></td><td>lactic acid bacteria; moulds (<i>Penicillium roqueforti</i> blue veins, <i>P. camemberti</i> white rind)</td><td>acid and rennet form curds; during ripening, enzymes break down protein and fat → flavour, aroma and texture</td></tr>
<tr><td><b>Sauerkraut, kimchi</b></td><td>lactic acid bacteria</td><td>acid preserves and gives sour taste</td></tr>
<tr><td><b>Vinegar</b>, soy sauce, salami, kefir, kombucha</td><td>bacteria, yeasts, moulds</td><td>acid, alcohol, flavour development</td></tr>
<tr><td><b>Mycoprotein</b> (Quorn)</td><td>fungus <i>Fusarium venenatum</i></td><td>grown in fermenters to make a high-protein, high-fibre meat alternative</td></tr></table></div>
<p>Nutritional benefits of fermentation: probiotic bacteria, B vitamins made by microbes, reduced lactose, improved digestibility and shelf life.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain how bacteria change milk into yogurt. (4 marks)', s: ['Milk is heat-treated, cooled to about 40–45 °C and inoculated with Lactobacillus bulgaricus and Streptococcus thermophilus.', 'The bacteria ferment lactose into lactic acid.', 'The pH falls (to about 4.5), so the casein proteins denature and coagulate, thickening the milk into a gel.', 'The acid gives yogurt its sharp taste, and the low pH helps preserve it; less lactose remains.'], a: 'Lactose → lactic acid → pH falls → casein coagulates.' }
  ],
  pitfalls: ['Saying all micro-organisms are harmful.', 'Assuming food that looks and smells fine is safe.', 'Describing the change without explaining how it happens (enzymes, fermentation, acid).', 'Confusing enzymic browning (food’s own enzymes) with microbial spoilage.'],
  cards: [
    ['How do microbes change food?', 'They release enzymes that break down carbohydrates, proteins and fats.'],
    ['Spoilage smell from protein breakdown?', 'Ammonia, amines, hydrogen sulfide (rotten egg).'],
    ['What does lipolysis cause?', 'Rancid flavours from free fatty acids.'],
    ['What is a non-visible effect?', 'Pathogens or toxins present with no visible change.'],
    ['Micro-organism in bread?', 'Yeast (Saccharomyces cerevisiae) → CO₂ and ethanol.'],
    ['Bacteria in yogurt?', 'Lactobacillus bulgaricus and Streptococcus thermophilus.'],
    ['Why does yogurt thicken?', 'Lactic acid lowers pH, so casein coagulates.'],
    ['Mould in blue cheese?', 'Penicillium roqueforti.'],
    ['Fungus used to make Quorn?', 'Fusarium venenatum (mycoprotein).'],
    ['Nutritional benefits of fermentation?', 'Probiotics, B vitamins, less lactose, better digestibility.'],
    ['What causes “ropey” bread?', 'Bacillus bacteria — sticky, stringy crumb.']
  ],
  quiz: [
    { q: 'A sulfurous smell from spoiled meat comes from…', o: ['breakdown of protein', 'fermentation of sugar', 'enzymic browning', 'oxidation of vitamin C'], x: 'Proteolysis releases hydrogen sulfide and amines.' },
    { q: 'Which is a positive use of mould?', o: ['Ripening blue cheese', 'Ropey bread', 'Slimy chicken', 'Rancid butter'], x: 'Penicillium roqueforti.' },
    { q: 'Yeast makes bread rise by producing…', o: ['carbon dioxide', 'lactic acid', 'oxygen', 'hydrogen sulfide'], x: 'Fermentation of sugars.' },
    { q: 'Why can food contaminated with Salmonella be dangerous even if it seems fine?', o: ['Pathogens often cause no visible change', 'Salmonella makes food smell sweet', 'It turns food green', 'It only grows in the freezer'], x: 'Non-visible effect.' },
    { q: 'In yogurt making, lactose is converted to…', o: ['lactic acid', 'ethanol', 'acetic acid', 'glucose only'], x: 'By lactic acid bacteria.' },
    { q: 'Rancidity is caused by…', o: ['breakdown or oxidation of fats', 'protein denaturation', 'starch gelatinisation', 'caramelisation'], x: 'Lipolysis/oxidation of lipids.' },
    { q: 'Which is NOT a benefit of fermentation?', o: ['Production of mycotoxins', 'Longer shelf life', 'Probiotic bacteria', 'Distinctive flavours'], x: 'Mycotoxins are harmful.' },
    { q: 'Mycoprotein is produced by…', o: ['a fungus', 'a virus', 'lactic acid bacteria', 'yeast only'], x: 'Fusarium venenatum.' },
    { q: 'Softening and collapse of fruit by moulds is caused by…', o: ['enzymes breaking down pectin and cell walls', 'binary fission of viruses', 'freezing', 'adding salt'], x: 'Pectinases and cellulases.' }
  ],
  exam: [
    { q: 'Describe two ways that micro-organisms can make food unacceptable to eat. [4]', m: 4, ms: ['way 1 identified, e.g. mould growth changes appearance', 'explained, e.g. visible colonies / discolouration', 'way 2 identified, e.g. bacteria break down protein', 'explained, e.g. slime / off smells (ammonia, H₂S) / sour taste'] },
    { q: 'Explain how micro-organisms are used to improve the quality of two named foods. [6]', m: 6, ms: ['food 1 named with micro-organism (e.g. bread — yeast)', 'process (fermentation of sugars → CO₂ + ethanol)', 'quality effect (rise / open texture / flavour)', 'food 2 named with micro-organism (e.g. yogurt — lactic acid bacteria)', 'process (lactose → lactic acid, pH falls, casein coagulates)', 'quality effect (thick texture, tangy taste, preserved, probiotic)'] }
  ],
  sims: ['spoil'], gens: []
});

TOPICS.push({
  id: '3.4', unit: '3', ref: '3.1.4', title: 'Preservation and microbial growth', short: 'Freezing, jam, canning, fermenting, smoking, drying, pickling, salting, additives',
  summary: 'Every preservation method works by removing or changing one or more of the conditions micro-organisms need — temperature, water, pH, oxygen — or by destroying them with heat. Link each method to the condition it controls.',
  spec: [
    'How preservation methods impact growth of micro-organisms, for example freezing, jam making, canning',
    'Fermenting, smoking, drying',
    'Pickling, salting, additives'
  ],
  learn: [
    { h: 'Method → condition removed', html: `
[[d:preserve]]
<div class="tbl"><table><tr><th>Method</th><th>How it controls micro-organisms</th></tr>
<tr><td><b>Freezing</b> (−18 °C)</td><td>low temperature makes microbes <b>dormant</b>; water turns to ice so it is unavailable (low a<sub>w</sub>). Does not kill — growth resumes on thawing</td></tr>
<tr><td><b>Jam making</b></td><td>boiling kills most microbes and enzymes; very high sugar (≥ 60%) lowers water activity — water is drawn out of microbial cells by <b>osmosis</b>; hot filling into sterilised jars and sealing prevents recontamination; fruit acid lowers pH</td></tr>
<tr><td><b>Canning</b></td><td>food is sealed in a can then heated (e.g. 121 °C) long enough to destroy pathogens and <b>spores</b> (the “botulinum cook”) — <b>commercial sterility</b>; the hermetic seal stops recontamination and oxygen</td></tr>
<tr><td><b>Fermenting</b></td><td>beneficial bacteria/yeasts produce <b>acid</b> (low pH) or alcohol, and out-compete spoilage organisms</td></tr>
<tr><td><b>Smoking</b></td><td>surface drying lowers a<sub>w</sub>; smoke contains antimicrobial <b>phenols</b>; usually combined with salting; hot smoking also cooks</td></tr>
<tr><td><b>Drying</b></td><td>removes water — low a<sub>w</sub> stops bacteria (moulds need the lowest; keep dried food dry)</td></tr>
<tr><td><b>Pickling</b></td><td>vinegar (acetic acid) lowers pH below 4.5; often with salt and sugar</td></tr>
<tr><td><b>Salting</b></td><td>salt draws water out of food and microbial cells by osmosis — low a<sub>w</sub>, cells dehydrate (plasmolysis)</td></tr>
<tr><td><b>Additives</b> (preservatives)</td><td>chemicals that inhibit microbes: sorbates and benzoates (moulds/yeasts in drinks, cakes), <b>nitrites</b> in cured meats (inhibit <i>C. botulinum</i>), sulfites (dried fruit, wine), propionates (bread); antioxidants slow rancidity (not microbial)</td></tr></table></div>` },
    { h: 'Combining methods: hurdle technology', html: `
<p>Most modern foods use several mild “hurdles” together — e.g. a chilled, vacuum-packed, lightly salted smoked salmon — so that no single treatment needs to be extreme, keeping quality high. Each hurdle alone might not stop growth; together they do.</p>
<div class="box warn"><b class="lbl">Watch out</b><p>Removing one hurdle can make a food unsafe: reduced-salt or reduced-sugar versions, or low-acid home-canned vegetables, may need refrigeration or a proper pressure-canning process.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain how jam making prevents the growth of micro-organisms. (4 marks)', s: ['Boiling the fruit and sugar to about 105 °C destroys most micro-organisms and enzymes.', 'The high sugar concentration (about 60–65%) lowers the water activity.', 'Water is drawn out of any microbial cells by osmosis, so they cannot grow.', 'Pouring the hot jam into sterilised jars and sealing stops recontamination; the fruit acid (low pH) also helps.'], a: 'Heat + high sugar (low aw, osmosis) + sterile sealing + acid.' }
  ],
  pitfalls: ['Saying freezing kills bacteria.', 'Explaining salting or sugaring without mentioning osmosis/water activity.', 'Confusing preservatives (antimicrobial) with antioxidants (stop oxidation).', 'Saying pickling works by removing oxygen — it works by low pH.', 'Forgetting that canning must destroy spores (C. botulinum).'],
  cards: [
    ['How does freezing preserve food?', 'Low temperature → microbes dormant; water frozen so unavailable. Does not kill.'],
    ['How does sugar preserve jam?', 'Lowers water activity; draws water out of cells by osmosis.'],
    ['How does canning preserve food?', 'Heat sterilisation in a sealed can destroys pathogens and spores; seal prevents recontamination.'],
    ['How does pickling preserve food?', 'Vinegar (acetic acid) lowers pH below 4.5.'],
    ['How does salting preserve food?', 'Osmosis removes water from food and microbes — low aw.'],
    ['How does smoking preserve food?', 'Drying + antimicrobial phenols (often with salting/cooking).'],
    ['How does fermentation preserve food?', 'Acid/alcohol production lowers pH; good microbes out-compete spoilers.'],
    ['Preservative in cured meats against C. botulinum?', 'Nitrites (e.g. sodium nitrite).'],
    ['What is hurdle technology?', 'Combining several mild preservation factors so together they prevent growth.'],
    ['Why must canning destroy spores?', 'Clostridium botulinum spores could germinate in the airless can and produce deadly toxin.']
  ],
  quiz: [
    { q: 'Salting preserves food mainly by…', o: ['lowering water activity through osmosis', 'raising pH', 'adding oxygen', 'killing spores with heat'], x: 'Water is drawn out of cells.' },
    { q: 'Freezing at −18 °C…', o: ['stops growth but does not kill most microbes', 'sterilises food', 'kills all spores', 'destroys toxins'], x: 'Microbes are dormant.' },
    { q: 'Pickling in vinegar works by…', o: ['lowering pH', 'raising temperature', 'removing sugar', 'adding nitrite'], x: 'Acetic acid; pH below 4.5.' },
    { q: 'Canning destroys…', o: ['pathogens and bacterial spores', 'only moulds', 'nothing — it only seals', 'only viruses'], x: 'The botulinum cook.' },
    { q: 'Nitrites are added to bacon to…', o: ['inhibit Clostridium botulinum', 'add fibre', 'make it sweet', 'increase water activity'], x: 'Also give the pink colour.' },
    { q: 'Which method mainly works by removing water?', o: ['Drying', 'Pickling', 'Canning', 'Fermenting'], x: 'Low aw.' },
    { q: 'In jam, about what sugar concentration is needed?', o: ['60% or more', '5%', '15%', '30%'], x: 'Standard jam ≈ 60–65% sugar.' },
    { q: 'Smoking preserves food partly because smoke contains…', o: ['antimicrobial phenols', 'extra water', 'sugar', 'vitamin C'], x: 'Plus surface drying and often salting.' },
    { q: 'Which is an antioxidant rather than a preservative?', o: ['Ascorbic acid added to stop browning/rancidity', 'Sodium benzoate', 'Potassium sorbate', 'Sodium nitrite'], x: 'Antioxidants slow oxidation, not microbes.' },
    { q: 'Hurdle technology means…', o: ['using several preservation factors together', 'boiling for a long time', 'only freezing', 'removing all additives'], x: 'Combined mild hurdles.' }
  ],
  exam: [
    { q: 'Explain how drying preserves food. [2]', m: 2, ms: ['removes water / lowers water activity', 'micro-organisms need water to grow / enzymes inactive'] },
    { q: 'Compare how canning and freezing control micro-organisms. [4]', m: 4, ms: ['canning: high temperature destroys micro-organisms and spores', 'hermetic seal prevents recontamination — ambient storage', 'freezing: low temperature makes microbes dormant, does not kill', 'water unavailable as ice; growth resumes on thawing'] },
    { q: 'Evaluate the use of additives as a method of preserving food. [6]', m: 6, ms: ['preservatives inhibit growth of bacteria / moulds / yeasts — longer shelf life, less waste', 'nitrites prevent botulism in cured meats — important safety role', 'allow products to be transported / stored widely; lower cost', 'some consumers wish to avoid additives / “clean label” trend', 'some people are sensitive (sulfites — asthma; benzoates)', 'nitrites linked to nitrosamines / processed meat cancer risk — balanced judgement'] }
  ],
  sims: ['preserve'], gens: []
});

TOPICS.push({
  id: '3.5', unit: '3', ref: '3.2.1', title: 'Food intolerance', short: 'Lactose, wheat and food chemicals: causes and symptoms',
  summary: 'A food intolerance is a non-immune reaction to a food — the body has difficulty digesting or processing something. Know the physiological causes of lactose intolerance, wheat intolerance and intolerance to chemicals such as caffeine, salicylates, MSG and histamine, and the symptoms, timing, duration and contagion.',
  spec: [
    'Types of food intolerance and their physiological causes: lactose intolerance',
    'Wheat intolerance',
    'Chemicals in foods, for example caffeine, salicylates, monosodium glutamate, and naturally occurring chemicals like histamines',
    'Symptoms: visible and non-visible; how symptoms are detected; length of time until symptoms appear; duration of symptoms; level of contagion'
  ],
  learn: [
    { h: 'What an intolerance is', html: `
<p>A <b>food intolerance</b> is an adverse reaction to food that does <b>not</b> involve the immune system. Reactions are usually <b>dose-dependent</b> (small amounts may be fine), come on <b>more slowly</b> than allergic reactions, are <b>unpleasant but rarely life-threatening</b>, and are <b>not contagious</b>.</p>` },
    { h: 'Lactose intolerance', html: `
[[d:lactose]]
<p><b>Cause</b>: too little <b>lactase</b> enzyme in the small intestine. Lactase production naturally falls after weaning in most of the world’s population (<b>primary</b> lactase non-persistence — common in people of East Asian, African and South Asian descent). <b>Secondary</b> lactose intolerance follows damage to the gut lining (gastroenteritis, coeliac disease) and is often temporary.</p>
<p><b>What happens</b>: undigested lactose passes into the large intestine. It draws water in by osmosis (<b>diarrhoea</b>), and colon bacteria <b>ferment</b> it, producing gases (hydrogen, CO₂, methane) and acids → <b>bloating, wind, cramps</b>.</p>
<p><b>Management</b>: lactose-free milk (lactase added), hard cheese and yogurt (naturally low lactose), lactase drops/tablets, calcium from fortified alternatives.</p>` },
    { h: 'Wheat intolerance', html: `
<p><b>Wheat intolerance</b> (non-coeliac wheat sensitivity) causes gut symptoms after eating wheat without the autoimmune damage of coeliac disease or the IgE response of wheat allergy. A likely cause in many people is <b>fructans</b> — fermentable carbohydrates (FODMAPs) in wheat that are poorly absorbed and fermented by gut bacteria. Symptoms: bloating, abdominal pain, diarrhoea or constipation, tiredness, headache — hours to a day or two after eating. Diagnosed by <b>excluding coeliac disease and allergy</b> first, then elimination and reintroduction.</p>
<div class="tbl"><table><tr><th></th><th>Wheat intolerance</th><th>Coeliac disease</th><th>Wheat allergy</th></tr>
<tr><td>Mechanism</td><td>non-immune (e.g. fructan fermentation)</td><td>autoimmune (T-cells) to gluten</td><td>IgE immune response to wheat proteins</td></tr><tr><td>Gut damage</td><td>no</td><td>yes — villi flattened</td><td>no</td></tr><tr><td>Severity</td><td>unpleasant</td><td>long-term harm if untreated</td><td>can be anaphylactic</td></tr></table></div>` },
    { h: 'Chemicals in foods', html: `
<div class="tbl"><table><tr><th>Chemical</th><th>Found in</th><th>Typical symptoms in sensitive people</th></tr>
<tr><td><b>Caffeine</b></td><td>coffee, tea, cola, energy drinks, chocolate</td><td>jitteriness, fast heart rate/palpitations, anxiety, insomnia, headache, stomach upset</td></tr>
<tr><td><b>Salicylates</b></td><td>naturally in many fruits, vegetables, herbs, spices, tea, honey; aspirin</td><td>asthma-like symptoms, stuffy nose, hives, swelling, stomach pain</td></tr>
<tr><td><b>Monosodium glutamate (MSG, E621)</b></td><td>flavour enhancer in savoury snacks, stock, some takeaways; natural glutamate in tomatoes, parmesan</td><td>reported headache, flushing, sweating (“MSG symptom complex”) — evidence is weak and usually only with large doses</td></tr>
<tr><td><b>Histamine</b> (naturally occurring)</td><td>aged cheese, cured meats, fermented foods, wine and beer, spinach, tomatoes, some fish (especially if not kept cold)</td><td>headache, flushing, hives, runny nose, itching, diarrhoea — when intake exceeds the body’s ability to break it down (low diamine oxidase, DAO)</td></tr></table></div>` },
    { h: 'Symptoms, detection, timing and contagion', html: `
<div class="tbl"><table><tr><th>Aspect</th><th>Food intolerances</th></tr>
<tr><td>Visible symptoms</td><td>bloated abdomen, skin rashes or hives, flushing, diarrhoea</td></tr>
<tr><td>Non-visible symptoms</td><td>abdominal pain and cramps, nausea, wind, headache, fatigue, palpitations, joint aches</td></tr>
<tr><td>How detected</td><td>food and symptom diary; <b>elimination diet</b> then reintroduction; <b>hydrogen breath test</b> (lactose); blood tests to exclude coeliac disease; no reliable test for many chemical intolerances</td></tr>
<tr><td>Time to symptoms</td><td>usually <b>30 minutes to several hours</b>, sometimes up to 48 hours</td></tr>
<tr><td>Duration</td><td>hours to a couple of days; recurs each time enough is eaten</td></tr>
<tr><td>Contagion</td><td><b>not contagious</b></td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why a person with lactose intolerance experiences bloating and diarrhoea after drinking milk. (4 marks)', s: ['They produce too little lactase in the small intestine, so lactose is not hydrolysed to glucose and galactose.', 'Undigested lactose passes into the large intestine.', 'It draws water into the bowel by osmosis, causing diarrhoea.', 'Colon bacteria ferment the lactose, producing gases (hydrogen, CO₂, methane) and acids that cause bloating, wind and cramps.'], a: 'Low lactase → lactose reaches colon → osmosis (diarrhoea) + fermentation (gas).' }
  ],
  pitfalls: ['Calling an intolerance an allergy.', 'Saying intolerances are contagious.', 'Confusing wheat intolerance with coeliac disease.', 'Saying people with lactose intolerance must avoid all dairy — hard cheese and yogurt are often tolerated.', 'Forgetting the four symptom features the spec lists: time to appear, duration, contagion, detection.'],
  cards: [
    ['Define food intolerance.', 'An adverse, non-immune reaction to food, usually dose-dependent and slower than allergy.'],
    ['Cause of lactose intolerance?', 'Too little lactase enzyme in the small intestine.'],
    ['Why diarrhoea in lactose intolerance?', 'Undigested lactose draws water into the colon by osmosis.'],
    ['Why wind and bloating?', 'Colon bacteria ferment lactose, producing gas.'],
    ['Test for lactose intolerance?', 'Hydrogen breath test (or elimination diet).'],
    ['Likely cause of wheat intolerance?', 'Poorly absorbed fructans (FODMAPs) fermented in the gut — non-immune.'],
    ['Foods high in histamine?', 'Aged cheese, cured meats, fermented foods, wine, some fish.'],
    ['Symptoms of caffeine sensitivity?', 'Jitters, palpitations, anxiety, insomnia, headache.'],
    ['What are salicylates?', 'Natural chemicals in many plants (fruit, herbs, spices, tea) and in aspirin.'],
    ['What is MSG?', 'Monosodium glutamate (E621), a flavour enhancer.'],
    ['Onset of intolerance symptoms?', 'Usually 30 min to several hours (up to 48 h).'],
    ['Are intolerances contagious?', 'No.']
  ],
  quiz: [
    { q: 'Lactose intolerance is caused by…', o: ['a lack of the enzyme lactase', 'an IgE response to milk protein', 'gluten damaging the villi', 'too much calcium'], x: 'Non-immune enzyme deficiency.' },
    { q: 'Which is TRUE of food intolerances?', o: ['They do not involve the immune system', 'They are always life-threatening', 'They are contagious', 'Symptoms appear within seconds'], x: 'Allergies involve the immune system.' },
    { q: 'A hydrogen breath test is used to diagnose…', o: ['lactose intolerance', 'peanut allergy', 'norovirus', 'coeliac disease'], x: 'Fermentation produces hydrogen that is breathed out.' },
    { q: 'Which food is naturally low in lactose?', o: ['Mature cheddar', 'Whole milk', 'Condensed milk', 'Milkshake'], x: 'Lactose drains away with whey and is fermented during ripening.' },
    { q: 'Histamine intolerance symptoms are linked to foods such as…', o: ['aged cheese and red wine', 'plain rice', 'fresh chicken breast', 'boiled potatoes'], x: 'Fermented and aged foods are high in histamine.' },
    { q: 'Salicylates are found naturally in…', o: ['many fruits, vegetables, herbs and spices', 'only meat', 'only dairy', 'water'], x: 'And in aspirin.' },
    { q: 'Wheat intolerance differs from coeliac disease because it…', o: ['does not damage the gut lining', 'always causes anaphylaxis', 'is autoimmune', 'is caused by lactose'], x: 'Non-coeliac sensitivity; no villous atrophy.' },
    { q: 'Symptoms of a food intolerance usually appear…', o: ['30 minutes to several hours after eating', 'within 2 seconds', 'after 2 weeks', 'never'], x: 'Slower than IgE allergy.' },
    { q: 'MSG is used in food as a…', o: ['flavour enhancer', 'preservative', 'colour', 'raising agent'], x: 'E621 enhances savoury (umami) taste.' },
    { q: 'Diarrhoea in lactose intolerance is mainly due to…', o: ['water drawn into the bowel by osmosis', 'bacterial toxins', 'IgE antibodies', 'viral infection'], x: 'Undigested lactose is osmotically active.' }
  ],
  exam: [
    { q: 'Describe two non-visible symptoms of food intolerance. [2]', m: 2, ms: ['abdominal pain / cramps', 'nausea / headache / fatigue / palpitations / wind (any two)'] },
    { q: 'Explain the physiological cause of lactose intolerance and its symptoms. [5]', m: 5, ms: ['insufficient lactase produced in the small intestine', 'lactose not hydrolysed into glucose and galactose / not absorbed', 'lactose enters the large intestine — draws in water by osmosis → diarrhoea', 'bacteria ferment lactose → gases → bloating / wind / cramps', 'symptoms 30 min–2 h after dairy; not contagious; dose-dependent'] },
    { q: 'Discuss how a café could meet the needs of customers with food intolerances. [6]', m: 6, ms: ['offer lactose-free milk / plant milks', 'label menus with key ingredients / chemical triggers (caffeine content, decaf options)', 'wheat-free / lower-FODMAP options', 'staff training to answer questions accurately', 'recipes and ingredient information kept up to date', 'judgement — intolerance is less severe than allergy but customers still need accurate info; separation practices not as strict as for allergens'] }
  ],
  sims: ['intol'], gens: []
});

TOPICS.push({
  id: '3.6', unit: '3', ref: '3.2.2', title: 'Food allergies', short: 'IgE response, the 14 allergens, symptoms and anaphylaxis',
  summary: 'A food allergy is an immune response to a food protein. In IgE-mediated allergy, the first exposure sensitises the immune system; later exposure triggers mast cells to release histamine within minutes, from mild hives to life-threatening anaphylaxis. Know the 14 allergens that must be declared and the features of allergic symptoms.',
  spec: [
    'Types of food allergy and their physiological causes, particularly in relation to immunological response',
    'Allergens: celery, cereals containing gluten, crustaceans, eggs, fish, lupins, milk',
    'Allergens: molluscs, mustard, peanuts, sesame, soybeans, sulphur dioxide and sulphites, tree nuts',
    'Symptoms: visible, non-visible, length of time until symptoms appear, duration, level of contagion, level of severity; how symptoms are detected; outcomes'
  ],
  learn: [
    { h: 'The immune response', html: `
[[d:ige]]
<ol><li><b>Sensitisation</b> — on first exposure, the immune system wrongly identifies a harmless food <b>protein</b> (the allergen) as a threat. B-cells (plasma cells) make <b>IgE antibodies</b> specific to it. IgE attaches to <b>mast cells</b> in the skin, airways and gut. No symptoms yet.</li>
<li><b>Re-exposure</b> — the allergen binds to and cross-links IgE on mast cells.</li>
<li><b>Degranulation</b> — mast cells release <b>histamine</b> and other chemicals, causing: blood vessels to dilate and leak (swelling, redness, hives, falling blood pressure), smooth muscle to contract (airway narrowing, wheeze, cramps), itching and mucus.</li></ol>
<p><b>Non-IgE-mediated</b> allergies (e.g. some cow’s milk protein allergy in babies) involve other immune cells and cause delayed gut and skin symptoms (hours to days).</p>` },
    { h: 'The 14 allergens', html: `
<p>UK law requires these 14 allergens to be declared and <b>emphasised</b> (e.g. in bold) on prepacked food labels and made available for loose food.</p>
<div class="chip-list">${['Celery (incl. celeriac)', 'Cereals containing gluten (wheat, rye, barley, oats)', 'Crustaceans (prawns, crab, lobster)', 'Eggs', 'Fish', 'Lupin (flour, seeds)', 'Milk', 'Molluscs (mussels, oysters, squid, snails)', 'Mustard', 'Peanuts', 'Sesame', 'Soybeans', 'Sulphur dioxide and sulphites (> 10 mg/kg)', 'Tree nuts (almonds, hazelnuts, walnuts, cashews, pecans, Brazils, pistachios, macadamias)'].map(a => `<span>${a}</span>`).join('')}</div>
<p class="small muted">Sulphites more often trigger asthma-type reactions in sensitive people than true IgE allergy, but they are on the list. Peanuts are legumes, not tree nuts.</p>
<p>Hidden sources: egg in pasta and glazes; milk in bread, crisps and sausages; mustard and celery in stocks, sauces and spice mixes; sesame in hummus (tahini) and burger buns; soya in processed meat; lupin in some gluten-free flours; fish in Worcestershire sauce.</p>` },
    { h: 'Symptoms and severity', html: `
<div class="tbl"><table><tr><th>Aspect</th><th>Food allergy (IgE)</th></tr>
<tr><td>Visible</td><td>hives (raised itchy rash, urticaria), redness, swelling of lips, face, tongue and eyes (angioedema), vomiting, runny eyes and nose, pale/floppy (in anaphylaxis)</td></tr>
<tr><td>Non-visible</td><td>tingling or itching of mouth and throat, abdominal pain, nausea, tight throat, wheezing, difficulty breathing, dizziness, falling blood pressure, sense of doom</td></tr>
<tr><td>Time to symptoms</td><td><b>within minutes</b>, usually up to 2 hours</td></tr>
<tr><td>Duration</td><td>hours; a second (biphasic) reaction can occur hours later</td></tr>
<tr><td>Contagion</td><td><b>not contagious</b></td></tr>
<tr><td>Severity</td><td>mild to <b>life-threatening</b>; even trace amounts can trigger a reaction; severity unpredictable</td></tr>
<tr><td>Detection</td><td>clinical history; <b>skin prick test</b>; <b>specific IgE blood test</b>; supervised <b>oral food challenge</b></td></tr></table></div>
<div class="box warn"><b class="lbl">Anaphylaxis — emergency</b><p>Severe reaction affecting Airway, Breathing and/or Circulation. <b>Use the adrenaline auto-injector</b> (e.g. EpiPen) into the outer thigh, <b>call 999</b> (“anaphylaxis”), lie the person flat with legs raised (sit up if breathing is difficult), give a second injection after 5 minutes if no improvement. Do not make them stand or walk.</p></div>
<p><b>Outcomes</b>: lifelong avoidance for most (children may outgrow milk and egg allergy); carrying medication; allergy action plans; anxiety and social impact; oral immunotherapy for some peanut allergy.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain the immune response that causes the symptoms of a peanut allergy. (5 marks)', s: ['On first exposure the immune system identifies peanut protein as harmful — sensitisation.', 'Plasma (B) cells produce IgE antibodies specific to the peanut protein.', 'The IgE antibodies attach to mast cells in tissues such as skin, airways and gut.', 'On re-exposure, peanut protein binds to and cross-links the IgE on the mast cells.', 'Mast cells release histamine and other chemicals, causing vasodilation, swelling, hives, airway narrowing and a fall in blood pressure — possibly anaphylaxis.'], a: 'Sensitisation → IgE on mast cells → re-exposure → histamine release.' }
  ],
  pitfalls: ['Saying allergies are caused by fats or sugars — allergens are proteins (sulphites aside).', 'Saying symptoms occur on the first exposure — sensitisation comes first.', 'Calling peanuts tree nuts.', 'Telling someone in anaphylaxis to stand up or walk.', 'Forgetting sulphites and lupin in the list of 14.'],
  cards: [
    ['What causes a food allergy?', 'An immune (usually IgE) response to a food protein.'],
    ['What is sensitisation?', 'First exposure: IgE antibodies are made and attach to mast cells; no symptoms yet.'],
    ['Which cells release histamine?', 'Mast cells.'],
    ['Effects of histamine?', 'Vasodilation, swelling, itching, hives, airway narrowing, low blood pressure.'],
    ['List the 14 allergens.', 'Celery, cereals with gluten, crustaceans, eggs, fish, lupin, milk, molluscs, mustard, peanuts, sesame, soybeans, sulphur dioxide/sulphites, tree nuts.'],
    ['How quickly do allergic symptoms appear?', 'Within minutes, up to about 2 hours.'],
    ['What is anaphylaxis?', 'A severe, life-threatening allergic reaction affecting airway, breathing and/or circulation.'],
    ['Emergency treatment for anaphylaxis?', 'Adrenaline auto-injector, call 999, lie flat with legs raised; second dose after 5 min if needed.'],
    ['Three tests for food allergy?', 'Skin prick test, specific IgE blood test, oral food challenge.'],
    ['Examples of molluscs?', 'Mussels, oysters, squid, octopus, snails.'],
    ['Examples of crustaceans?', 'Prawns, crab, lobster, crayfish.'],
    ['Hidden source of sesame?', 'Tahini in hummus; burger buns; some oils.'],
    ['Are allergies contagious?', 'No.']
  ],
  quiz: [
    { q: 'Which antibody is involved in most immediate food allergies?', o: ['IgE', 'IgG', 'IgA', 'IgM'], x: 'IgE on mast cells.' },
    { q: 'Mast cells release…', o: ['histamine', 'insulin', 'lactase', 'bile'], x: 'Histamine causes allergic symptoms.' },
    { q: 'Which is one of the 14 allergens?', o: ['Lupin', 'Tomato', 'Rice', 'Chicken'], x: 'Lupin flour and seeds.' },
    { q: 'Mussels and squid are classed as…', o: ['molluscs', 'crustaceans', 'fish', 'tree nuts'], x: 'Molluscs.' },
    { q: 'Peanuts are classed as…', o: ['legumes (a separate allergen from tree nuts)', 'tree nuts', 'cereals', 'seeds'], x: 'They grow underground like peas.' },
    { q: 'An allergic reaction usually begins…', o: ['within minutes of eating', '2 days after eating', '2 weeks after eating', 'only after repeated large doses'], x: 'Rapid onset.' },
    { q: 'The first-line treatment for anaphylaxis is…', o: ['adrenaline by auto-injector', 'an antacid', 'a glass of milk', 'walking it off'], x: 'Then call 999.' },
    { q: 'During anaphylaxis the person should…', o: ['lie flat with legs raised (sit if breathing is hard)', 'stand and walk around', 'be left alone to sleep', 'drink alcohol'], x: 'Standing can cause collapse.' },
    { q: 'A skin prick test is used to…', o: ['detect allergy by looking for a wheal', 'measure salt intake', 'diagnose lactose intolerance', 'test for norovirus'], x: 'A small amount of allergen is introduced into the skin.' },
    { q: 'Which statement about allergy and intolerance is correct?', o: ['Allergy involves the immune system; intolerance does not', 'Both involve IgE', 'Intolerance is always more severe', 'Allergy is contagious'], x: 'Key distinction.' },
    { q: 'Sensitisation happens…', o: ['on first exposure, before any symptoms', 'only after anaphylaxis', 'in the stomach only', 'when food is cooked'], x: 'IgE is made and binds to mast cells.' },
    { q: 'Sulphur dioxide and sulphites must be declared above…', o: ['10 mg/kg', '1 g/kg', '100 g/kg', 'any amount of salt'], x: '10 mg/kg or 10 mg/L.' }
  ],
  exam: [
    { q: 'Name four of the 14 allergens that must be declared on food labels. [4]', m: 4, ms: ['any four of: celery, cereals containing gluten, crustaceans, eggs, fish, lupin, milk, molluscs, mustard, peanuts, sesame, soybeans, sulphur dioxide/sulphites, tree nuts'] },
    { q: 'Compare the symptoms of a food allergy with those of a food intolerance. Refer to time taken to appear, severity and contagion. [6]', m: 6, ms: ['allergy: symptoms within minutes (up to 2 h)', 'intolerance: slower — 30 min to hours / up to 48 h', 'allergy: can be severe / life-threatening (anaphylaxis) even with tiny amounts', 'intolerance: unpleasant but rarely serious; dose-dependent', 'neither is contagious', 'examples of visible / non-visible symptoms for each'] },
    { q: 'Evaluate the actions a restaurant should take to protect customers with food allergies. [8]', m: 8, ms: ['accurate allergen information for every dish (allergen matrix), updated with recipe/supplier changes', 'staff trained to ask about allergies and give correct information', 'clear communication front of house to kitchen (tickets, allergen flags)', 'segregated preparation — separate equipment/area, purple boards, clean down', 'check labels of all ingredients and substitutes', 'Natasha’s Law applies to PPDS food — full ingredient labelling', 'emergency procedures / first aid for anaphylaxis', 'judgement: “may contain” risk cannot always be eliminated — honesty about cross-contact'] }
  ],
  sims: ['allergy'], gens: []
});
