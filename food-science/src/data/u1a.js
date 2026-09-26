/* ==========================================================
   UNIT 1 · NUTRITIONAL NEEDS ACROSS THE LIFE STAGES (part 1)
   1.1 Understand properties of nutrients
   ========================================================== */
TOPICS.push({
  id: '1.1', unit: '1', ref: '1.1.1', title: 'Carbohydrates', short: 'Mono-, di- and oligosaccharides, starch, fibre, glycogen',
  summary: 'Carbohydrates are built from sugar units made of carbon, hydrogen and oxygen. Learn how monosaccharides join to form disaccharides, oligosaccharides and polysaccharides, and how starch, dietary fibre (NSP) and glycogen differ in structure.',
  spec: [
    'Carbohydrates contain carbon, hydrogen and oxygen, general formula Cx(H2O)y',
    'Simple carbohydrates: monosaccharides (single units) — glucose, fructose, galactose',
    'Simple carbohydrates: disaccharides (two units) — sucrose, lactose, maltose',
    'Complex carbohydrates: oligosaccharides (3–10 units) — raffinose, stachyose, verbascose',
    'Complex carbohydrates: dietary fibre (NSP) — soluble and insoluble',
    'Complex carbohydrates: glycogen — the storage polysaccharide in animals',
    'Know the chemical terms and models: condensation, hydrolysis, glycosidic bond, polymer'
  ],
  learn: [
    { h: 'What carbohydrates are made of', html: `
<p>Carbohydrates are compounds of <b>carbon, hydrogen and oxygen</b>. Hydrogen and oxygen are usually present in the same 2 : 1 ratio as in water, so the general formula is often written $"C"_x("H"_2"O")_y$. The basic building block is a <b>sugar unit</b> called a <b>monosaccharide</b>.</p>
<p>Carbohydrates are classified by how many sugar units they contain:</p>
<div class="tbl"><table><tr><th>Group</th><th>Units</th><th>Examples in the specification</th><th>Found in</th></tr>
<tr><td><b>Monosaccharides</b> (simple)</td><td>1</td><td>glucose, fructose, galactose</td><td>fruit, honey, (galactose mainly as part of lactose)</td></tr>
<tr><td><b>Disaccharides</b> (simple)</td><td>2</td><td>sucrose, lactose, maltose</td><td>table sugar, milk, malted grains</td></tr>
<tr><td><b>Oligosaccharides</b> (complex)</td><td>3–10</td><td>raffinose, stachyose, verbascose</td><td>beans, lentils, peas, cabbage, onions</td></tr>
<tr><td><b>Polysaccharides</b> (complex)</td><td>many (hundreds to thousands)</td><td>starch, dietary fibre (NSP), glycogen</td><td>cereals, potatoes, vegetables; glycogen in liver and muscle</td></tr></table></div>` },
    { h: 'Monosaccharides', html: `
[[d:glucose]]
<p><b>Glucose</b>, <b>fructose</b> and <b>galactose</b> all have the molecular formula $"C"_6"H"_12"O"_6$ — they are <b>isomers</b>: the same atoms arranged differently. In food and in the body they exist mostly as <b>rings</b>. Glucose and galactose form six-membered rings; fructose forms a five-membered ring.</p>
<ul><li><b>Glucose</b> — the body’s main fuel; the sugar carried in the blood. Found in fruit, honey and made when starch is digested.</li>
<li><b>Fructose</b> — “fruit sugar”, the sweetest natural sugar. Found in fruit, honey and some vegetables.</li>
<li><b>Galactose</b> — rarely free in food; it is released when lactose (milk sugar) is digested.</li></ul>
<p>Monosaccharides are sweet, soluble in water and need <b>no digestion</b> — they are absorbed directly through the wall of the small intestine.</p>` },
    { h: 'Disaccharides: condensation and hydrolysis', html: `
[[d:condense]]
<p>Two monosaccharides join by a <b>condensation reaction</b>: a molecule of <b>water is removed</b> and a <b>glycosidic bond</b> forms between them. Breaking the bond again needs water — this is <b>hydrolysis</b>, which is what digestive enzymes do.</p>
<div class="tbl"><table><tr><th>Disaccharide</th><th>Made from</th><th>Food source</th><th>Digestive enzyme</th></tr>
<tr><td>Sucrose</td><td>glucose + fructose</td><td>sugar cane, sugar beet, fruit</td><td>sucrase</td></tr>
<tr><td>Lactose</td><td>glucose + galactose</td><td>milk and dairy foods</td><td>lactase</td></tr>
<tr><td>Maltose</td><td>glucose + glucose</td><td>germinating (malted) grains; made when starch is digested</td><td>maltase</td></tr></table></div>
<div class="box tip"><b class="lbl">Memory hook</b><p>All three disaccharides contain <b>glucose</b>. The partner gives the name: fructose → sucrose, galactose → lactose, glucose → maltose.</p></div>` },
    { h: 'Oligosaccharides', html: `
<p><b>Oligosaccharides</b> contain <b>3–10 sugar units</b>. Raffinose (3 units), stachyose (4) and verbascose (5) are found in <b>pulses</b> (beans, lentils, chickpeas, peas) and brassicas.</p>
<p>Humans do <b>not</b> make the enzyme (α-galactosidase) needed to break them down, so they pass undigested to the large intestine, where gut bacteria <b>ferment</b> them. This produces gas (flatulence) — but some oligosaccharides also act as <b>prebiotics</b>, feeding beneficial gut bacteria.</p>` },
    { h: 'Polysaccharides: starch, glycogen and dietary fibre', html: `
[[d:starch]]
<p><b>Starch</b> is the energy store of plants. It is a polymer of glucose made of two molecules:</p>
<ul><li><b>Amylose</b> — long, unbranched chains that coil into a helix.</li><li><b>Amylopectin</b> — highly branched chains.</li></ul>
<p>Starch is insoluble in cold water and not sweet. Sources: bread, pasta, rice, potatoes, oats and other cereals.</p>
<p><b>Glycogen</b> is the storage carbohydrate in <b>animals</b> (including humans). Like amylopectin it is a branched glucose polymer, but it is <b>even more highly branched</b>, so enzymes can release glucose quickly from its many ends. It is stored in the <b>liver</b> (to keep blood glucose steady) and <b>muscles</b> (fuel for activity). Meat contains very little because it is used up after slaughter.</p>
<p><b>Dietary fibre</b> — also called <b>non-starch polysaccharide (NSP)</b> — is the part of plant cell walls that human enzymes cannot digest.</p>
<div class="tbl"><table><tr><th></th><th>Soluble fibre</th><th>Insoluble fibre</th></tr>
<tr><td>Examples</td><td>pectin, gums, beta-glucans</td><td>cellulose, hemicellulose (and lignin)</td></tr>
<tr><td>Sources</td><td>oats, barley, pulses, apples, citrus fruit</td><td>wholemeal bread, bran, brown rice, skins of fruit and vegetables, nuts, seeds</td></tr>
<tr><td>Behaviour</td><td>dissolves/absorbs water to form a gel</td><td>does not dissolve; holds water and adds bulk</td></tr>
<tr><td>Main benefit</td><td>slows sugar absorption; helps lower blood cholesterol</td><td>softer, bulkier faeces; prevents constipation and diverticular disease</td></tr></table></div>
<div class="box def"><b class="lbl">Recommendation</b><p>UK adults are advised to eat <b>30 g of fibre a day</b>. Most people eat about 20 g.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain how a molecule of lactose is formed and how it is broken down in the body. (4 marks)', s: ['Lactose is a disaccharide formed from one glucose and one galactose unit.', 'They join by a condensation reaction, releasing a molecule of water and forming a glycosidic bond.', 'In the small intestine the enzyme lactase breaks the bond by hydrolysis — water is added back.', 'This releases glucose and galactose, which are small enough to be absorbed into the blood.'], a: 'Condensation (water removed, glycosidic bond) forms it; lactase hydrolyses it back to glucose + galactose.' },
    { q: 'Compare the structure of starch and glycogen. (3 marks)', s: ['Similarity: both are polysaccharides made of many glucose units joined by glycosidic bonds.', 'Starch is a mixture of amylose (unbranched, helical) and amylopectin (branched); glycogen is a single, much more highly branched molecule.', 'Starch is the energy store in plants; glycogen is the store in animals (liver and muscle) — its many branches allow rapid release of glucose.'], a: 'Both glucose polymers; starch = amylose + amylopectin in plants; glycogen = more highly branched, animal store.' }
  ],
  pitfalls: ['Calling fructose a disaccharide — it is a monosaccharide.', 'Saying lactose is glucose + fructose (that is sucrose); lactose is glucose + galactose.', 'Saying condensation adds water — it removes water; hydrolysis adds it.', 'Describing fibre as a nutrient that is digested for energy — human enzymes cannot digest NSP.', 'Confusing glycogen (animal store) with glucagon (a hormone).'],
  cards: [
    ['Three monosaccharides named in the specification?', 'Glucose, fructose, galactose.'],
    ['Three disaccharides and their units?', 'Sucrose = glucose + fructose; lactose = glucose + galactose; maltose = glucose + glucose.'],
    ['What is an oligosaccharide? Give two examples.', 'A carbohydrate of 3–10 sugar units, e.g. raffinose, stachyose (also verbascose). Found in pulses.'],
    ['What is a condensation reaction?', 'Two molecules join and a molecule of water is removed, forming a glycosidic bond.'],
    ['What is hydrolysis?', 'Breaking a bond by adding water — how enzymes digest disaccharides and starch.'],
    ['Two molecules that make up starch?', 'Amylose (unbranched, helical) and amylopectin (branched).'],
    ['What is glycogen and where is it stored?', 'A highly branched glucose polymer — the animal energy store — in the liver and muscles.'],
    ['What does NSP stand for?', 'Non-starch polysaccharide — dietary fibre.'],
    ['Two sources of soluble fibre?', 'Oats, barley, pulses (beans, lentils), apples, citrus fruit.'],
    ['Two sources of insoluble fibre?', 'Wholemeal bread, bran, brown rice, fruit and vegetable skins, nuts, seeds.'],
    ['Why do beans cause flatulence?', 'Their oligosaccharides are not digested; bacteria in the large intestine ferment them, producing gas.'],
    ['Adult fibre recommendation (UK)?', '30 g per day.'],
    ['Molecular formula of glucose?', '$"C"_6"H"_12"O"_6$ (fructose and galactose are isomers with the same formula).']
  ],
  quiz: [
    { q: 'Which is a monosaccharide?', o: ['Galactose', 'Lactose', 'Maltose', 'Raffinose'], x: 'Galactose is a single sugar unit. Lactose and maltose are disaccharides; raffinose is an oligosaccharide.' },
    { q: 'Sucrose is made from…', o: ['glucose + fructose', 'glucose + galactose', 'glucose + glucose', 'fructose + galactose'], x: 'Sucrose = glucose + fructose.' },
    { q: 'Lactose is found mainly in…', o: ['milk and dairy foods', 'sugar beet', 'germinating barley', 'beans and lentils'], x: 'Lactose is milk sugar (glucose + galactose).' },
    { q: 'An oligosaccharide contains how many sugar units?', o: ['3–10', '1', '2', 'more than 1000'], x: 'Oligosaccharides such as raffinose and stachyose have 3–10 units.' },
    { q: 'When two monosaccharides join, the reaction…', o: ['removes a molecule of water', 'adds a molecule of water', 'releases carbon dioxide', 'needs oxygen'], x: 'A condensation reaction removes water and forms a glycosidic bond.' },
    { q: 'Which statement about glycogen is correct?', o: ['It is a highly branched glucose polymer stored in liver and muscle', 'It is a plant storage carbohydrate', 'It is a type of dietary fibre', 'It is a disaccharide'], x: 'Glycogen is the animal storage polysaccharide.' },
    { q: 'Which is an insoluble fibre?', o: ['Cellulose', 'Pectin', 'Beta-glucan', 'Gum'], x: 'Cellulose (plant cell walls) is insoluble. Pectin, gums and beta-glucans are soluble.' },
    { q: 'The main health benefit of insoluble fibre is…', o: ['adding bulk to faeces and preventing constipation', 'lowering blood pressure directly', 'providing essential amino acids', 'raising blood glucose quickly'], x: 'Insoluble fibre holds water and adds bulk, speeding transit through the colon.' },
    { q: 'Amylopectin differs from amylose because it is…', o: ['branched', 'made of fructose', 'a disaccharide', 'soluble in cold water'], x: 'Amylose is unbranched and helical; amylopectin is branched.' },
    { q: 'Oligosaccharides in pulses are digested…', o: ['not by human enzymes — gut bacteria ferment them in the large intestine', 'by salivary amylase', 'by lactase', 'by pepsin in the stomach'], x: 'Humans lack α-galactosidase, so bacteria ferment them, producing gas.' },
    { q: 'Which describes soluble fibre?', o: ['Forms a gel and can help lower blood cholesterol', 'Is digested to glucose', 'Is found mainly in meat', 'Has no effect on blood glucose'], x: 'Soluble fibre (oats, pulses) forms a gel, slows sugar absorption and binds bile acids.' },
    { q: 'Maltose is produced when…', o: ['amylase breaks down starch', 'lactase breaks down lactose', 'fat is emulsified', 'proteins are denatured'], x: 'Amylase hydrolyses starch into maltose and other short chains.' },
    { q: 'The UK adult recommendation for fibre is…', o: ['30 g a day', '18 g a day', '5 g a day', '90 g a day'], x: 'SACN (2015) recommends 30 g/day for adults.' }
  ],
  exam: [
    { q: 'Name the two monosaccharides that make up sucrose. [2]', m: 2, ms: ['glucose', 'fructose'] },
    { q: 'Explain the difference between soluble and insoluble dietary fibre, giving a food source of each. [4]', m: 4, ms: ['Soluble fibre dissolves in water / forms a gel', 'e.g. oats / barley / pulses / apples / citrus fruit', 'Insoluble fibre does not dissolve; it holds water and adds bulk to faeces', 'e.g. wholemeal bread / bran / brown rice / skins of fruit and vegetables / nuts'] },
    { q: 'Describe the structure of starch. [3]', m: 3, ms: ['polysaccharide / polymer of many glucose units', 'joined by glycosidic bonds (condensation)', 'made of amylose — unbranched / helical chains', 'and amylopectin — branched chains (max 3)'] },
    { q: 'A client says baked beans make him feel bloated. Explain why this happens. [3]', m: 3, ms: ['beans contain oligosaccharides (raffinose / stachyose / verbascose)', 'humans lack the enzyme to digest them (α-galactosidase) so they reach the large intestine undigested', 'gut bacteria ferment them, producing gas / bloating / flatulence'] }
  ],
  sims: ['sugars'], gens: []
});

TOPICS.push({
  id: '1.2', unit: '1', ref: '1.1.1', title: 'Lipids and proteins', short: 'Fats, oils, sterols, waxes; amino acids and proteins',
  summary: 'Lipids include fats, oils, sterols and waxes. Most dietary fat is triglyceride: glycerol plus three fatty acids, which may be saturated or unsaturated. Proteins are chains of amino acids folded into specific shapes — actin, collagen, haemoglobin and immunoglobulins are the examples in the specification.',
  spec: [
    'Lipids: fats — saturated and unsaturated; sterols; oils; waxes',
    'Triglycerides: one glycerol and three fatty acids joined by ester bonds (condensation)',
    'Saturated fatty acids have no C=C double bonds; unsaturated have one (mono-) or more (poly-) C=C double bonds',
    'Proteins are made of amino acids (C, H, O, N, sometimes S) joined by peptide bonds',
    'Examples of proteins: actin, collagen, haemoglobin, immunoglobulins',
    'Essential (indispensable) and non-essential amino acids',
    'Know the chemical terms and models: primary, secondary, tertiary and quaternary structure'
  ],
  learn: [
    { h: 'Lipids: fats, oils, sterols and waxes', html: `
<p><b>Lipids</b> are a group of compounds that are insoluble in water. Like carbohydrates they contain <b>carbon, hydrogen and oxygen</b>, but with much less oxygen, which is one reason they store so much energy (37 kJ/g).</p>
<ul><li><b>Fats</b> — solid at room temperature; mainly from animals (butter, lard, suet) and some plants (coconut, palm).</li>
<li><b>Oils</b> — liquid at room temperature; mainly from plants and fish (olive, rapeseed, sunflower, oily fish).</li>
<li><b>Sterols</b> — ring-shaped lipids. <b>Cholesterol</b> is the animal sterol, needed for cell membranes, vitamin D and steroid hormones; plant <b>sterols and stanols</b> block cholesterol absorption and are added to some spreads and yogurts.</li>
<li><b>Waxes</b> — long-chain lipids that form waterproof coatings, e.g. on apple skins and leaves; beeswax. They are not digested and have no nutritional value.</li></ul>` },
    { h: 'Triglycerides and fatty acids', html: `
[[d:triglyceride]]
<p>About 95% of the fat we eat is <b>triglyceride</b>: one <b>glycerol</b> molecule joined to <b>three fatty acids</b> by condensation reactions (three molecules of water are released, forming <b>ester bonds</b>).</p>
[[d:fattyacids]]
<div class="tbl"><table><tr><th>Type</th><th>Structure</th><th>At room temperature</th><th>Main sources</th></tr>
<tr><td><b>Saturated</b></td><td>no C=C double bonds; straight chains pack tightly</td><td>usually solid</td><td>butter, lard, cheese, fatty meat, pastry, coconut and palm oil</td></tr>
<tr><td><b>Monounsaturated</b></td><td>one C=C double bond</td><td>liquid (may cloud in the fridge)</td><td>olive oil, rapeseed oil, avocado, most nuts</td></tr>
<tr><td><b>Polyunsaturated</b></td><td>two or more C=C double bonds</td><td>liquid</td><td>sunflower and corn oil, oily fish (omega-3), seeds</td></tr></table></div>
<p>A <b>cis</b> double bond puts a <b>kink</b> in the chain, so molecules cannot pack closely — that is why unsaturated fats are oils. <b>Trans fats</b> (formed during partial hydrogenation) have straighter chains that behave like saturated fat and raise LDL cholesterol; UK manufacturers have largely removed them.</p>
<div class="box why"><b class="lbl">Essential fatty acids</b><p>The body cannot make <b>omega-3</b> (α-linolenic acid) or <b>omega-6</b> (linoleic acid), so they must come from food. Omega-3 from oily fish (EPA, DHA) supports heart health, brain and eye development.</p></div>` },
    { h: 'Proteins: amino acids and peptide bonds', html: `
[[d:aminoacid]]
<p>Proteins contain <b>carbon, hydrogen, oxygen and nitrogen</b> (and often sulfur). They are polymers of <b>amino acids</b>. Every amino acid has an amino group (–NH₂), a carboxyl group (–COOH) and a variable <b>R group</b>. There are <b>20</b> amino acids in food proteins.</p>
<p>Amino acids join by condensation, forming <b>peptide bonds</b> and releasing water. Two amino acids make a dipeptide; many make a <b>polypeptide</b>.</p>
<p><b>Essential (indispensable) amino acids</b> cannot be made by the body and must come from the diet. Adults need <b>nine</b>: histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan and valine. The others are non-essential — the body can make them.</p>` },
    { h: 'Protein structure and the four examples', html: `
<div class="tbl"><table><tr><th>Level</th><th>What it is</th></tr>
<tr><td>Primary</td><td>the sequence of amino acids in the chain</td></tr>
<tr><td>Secondary</td><td>coiling (α-helix) or folding (β-pleated sheet), held by hydrogen bonds</td></tr>
<tr><td>Tertiary</td><td>the whole chain folded into a precise 3D shape (hydrogen, ionic and disulfide bonds)</td></tr>
<tr><td>Quaternary</td><td>two or more polypeptide chains combined</td></tr></table></div>
<p>Heat, acid and mechanical action break the weaker bonds and <b>denature</b> proteins — central to cooking (see Unit 4).</p>
<div class="tbl"><table><tr><th>Protein</th><th>Type</th><th>Role</th></tr>
<tr><td><b>Actin</b></td><td>fibrous, contractile</td><td>with myosin makes muscle contract; the main proteins in meat</td></tr>
<tr><td><b>Collagen</b></td><td>fibrous (triple helix)</td><td>strength in skin, tendons, bone and connective tissue; turns into gelatine when meat is slow-cooked</td></tr>
<tr><td><b>Haemoglobin</b></td><td>globular, quaternary (four chains + iron-containing haem)</td><td>carries oxygen in red blood cells — needs iron</td></tr>
<tr><td><b>Immunoglobulins</b></td><td>globular (Y-shaped antibodies)</td><td>immune defence; IgE is involved in food allergy</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why olive oil is liquid at room temperature but butter is solid. (4 marks)', s: ['Olive oil is mainly monounsaturated fat; butter is mainly saturated fat.', 'Unsaturated fatty acids contain C=C double bonds, which put kinks in the carbon chains.', 'Kinked chains cannot pack closely together, so the forces between molecules are weaker.', 'Less energy is needed to separate them, so the melting point is lower — below room temperature — whereas straight saturated chains pack tightly, giving a higher melting point.'], a: 'Unsaturated chains are kinked, pack loosely, lower melting point.' },
    { q: 'Describe how a triglyceride is formed. (3 marks)', s: ['One glycerol molecule joins to three fatty acids.', 'Each fatty acid joins by a condensation reaction, releasing one molecule of water (three in total).', 'The bonds formed are ester bonds.'], a: 'Glycerol + 3 fatty acids → triglyceride + 3 water (ester bonds).' }
  ],
  pitfalls: ['Saying all plant fats are unsaturated — coconut and palm oil are highly saturated.', 'Saying oils contain no fat — oils are fats that are liquid at room temperature, with the same 37 kJ/g.', 'Mixing up peptide bonds (proteins), glycosidic bonds (carbohydrates) and ester bonds (fats).', 'Saying the body makes essential amino acids — “essential” means they must come from food.', 'Confusing haemoglobin (a protein) with iron (a mineral it contains).'],
  cards: [
    ['What is a triglyceride?', 'One glycerol + three fatty acids joined by ester bonds.'],
    ['Saturated vs unsaturated fatty acid?', 'Saturated: no C=C double bonds. Unsaturated: at least one C=C double bond (mono = one, poly = two or more).'],
    ['Why are unsaturated fats usually liquid?', 'Double bonds kink the chains so they cannot pack closely — lower melting point.'],
    ['Two sources of monounsaturated fat?', 'Olive oil, rapeseed oil, avocados, nuts.'],
    ['What is a sterol? Give an example.', 'A ring-structured lipid, e.g. cholesterol (animal) or plant sterols/stanols.'],
    ['Where are waxes found in food?', 'Coatings on fruit skins (e.g. apples), leaves; beeswax. Not digested.'],
    ['Elements in protein?', 'C, H, O and N (often S).'],
    ['Bond that joins amino acids?', 'Peptide bond (formed by condensation).'],
    ['What is an essential amino acid?', 'One the body cannot make, so it must be supplied by food. Adults need nine.'],
    ['Role of collagen?', 'Fibrous protein giving strength to skin, tendons, bone, connective tissue; converts to gelatine on slow moist cooking.'],
    ['Role of haemoglobin?', 'Carries oxygen in red blood cells; contains iron (haem).'],
    ['What are immunoglobulins?', 'Antibodies — Y-shaped proteins of the immune system (IgE is involved in allergy).'],
    ['What is actin?', 'Contractile muscle protein that works with myosin; a main protein in meat.'],
    ['Primary structure of a protein?', 'The sequence of amino acids.']
  ],
  quiz: [
    { q: 'A triglyceride is made from…', o: ['glycerol and three fatty acids', 'three glucose molecules', 'glycerol and three amino acids', 'cholesterol and fatty acids'], x: 'Glycerol + 3 fatty acids, joined by ester bonds.' },
    { q: 'A polyunsaturated fatty acid has…', o: ['two or more C=C double bonds', 'no double bonds', 'exactly one double bond', 'a ring structure'], x: 'Poly = many double bonds.' },
    { q: 'Which is a good source of monounsaturated fat?', o: ['Olive oil', 'Butter', 'Lard', 'Coconut oil'], x: 'Olive and rapeseed oil are rich in monounsaturates.' },
    { q: 'Which is a sterol?', o: ['Cholesterol', 'Lecithin', 'Glycerol', 'Collagen'], x: 'Cholesterol is the main animal sterol.' },
    { q: 'Which element is present in protein but not in carbohydrate or fat?', o: ['Nitrogen', 'Carbon', 'Oxygen', 'Hydrogen'], x: 'Amino groups contain nitrogen.' },
    { q: 'Amino acids are joined by…', o: ['peptide bonds', 'glycosidic bonds', 'ester bonds', 'hydrogen bonds only'], x: 'Condensation forms peptide bonds.' },
    { q: 'How many essential amino acids do adults need from food?', o: ['9', '20', '2', '12'], x: 'Nine indispensable amino acids for adults.' },
    { q: 'Which protein carries oxygen in the blood?', o: ['Haemoglobin', 'Collagen', 'Actin', 'Immunoglobulin'], x: 'Haemoglobin contains iron-containing haem groups that bind oxygen.' },
    { q: 'Collagen in meat is converted to gelatine by…', o: ['long, slow, moist cooking', 'freezing', 'grilling quickly', 'marinating in oil'], x: 'Stewing and braising convert tough collagen to gelatine, tenderising the meat.' },
    { q: 'The tertiary structure of a protein is…', o: ['the overall 3D folded shape of the chain', 'the amino acid sequence', 'several chains joined', 'the α-helix only'], x: 'Tertiary = 3D folding of one polypeptide.' },
    { q: 'Why do unsaturated fats have lower melting points?', o: ['Double bonds kink chains so they pack less tightly', 'They contain more hydrogen', 'They have longer chains', 'They contain glycerol'], x: 'Kinked chains have weaker forces between molecules.' },
    { q: 'Which is an example of an immunoglobulin?', o: ['IgE antibody', 'Myosin', 'Keratin', 'Pepsin'], x: 'Immunoglobulins are antibodies such as IgE, IgG, IgA.' },
    { q: 'Waxes in food…', o: ['form protective coatings, e.g. on apple skins, and are not digested', 'are a major energy source', 'are essential fatty acids', 'are proteins'], x: 'Waxes are indigestible lipids.' }
  ],
  exam: [
    { q: 'State what is meant by an essential amino acid. [1]', m: 1, ms: ['an amino acid that cannot be made by the body so must be obtained from food / the diet'] },
    { q: 'Explain the difference between saturated and unsaturated fatty acids. Refer to their structure and their properties. [4]', m: 4, ms: ['saturated: no carbon–carbon double bonds / “saturated” with hydrogen', 'unsaturated: one (mono) or more (poly) C=C double bonds', 'saturated chains straight so pack closely — solid at room temperature / higher melting point', 'unsaturated chains kinked so pack loosely — liquid (oils) / lower melting point'] },
    { q: 'Describe the roles of collagen and haemoglobin in the human body. [4]', m: 4, ms: ['collagen is a fibrous / structural protein', 'gives strength to skin / tendons / bones / connective tissue', 'haemoglobin is a globular protein in red blood cells', 'carries / transports oxygen (contains iron)'] },
    { q: 'Discuss whether all plant-based fats are healthier than animal fats. [6]', m: 6, ms: ['most plant oils (olive, rapeseed, sunflower) are mainly unsaturated', 'unsaturated fats lower LDL / blood cholesterol when they replace saturated fat', 'but coconut and palm oil are highly saturated', 'processed plant fats may contain trans fats (partial hydrogenation) — raise LDL', 'some animal fats are beneficial, e.g. omega-3 in oily fish', 'all fats provide 37 kJ/g so excess of any contributes to obesity / reasoned conclusion'] }
  ],
  sims: ['fats', 'protein'], gens: []
});

TOPICS.push({
  id: '1.3', unit: '1', ref: '1.1.1', title: 'Vitamins, minerals and water', short: 'Fat- and water-soluble vitamins; Ca, Mg, Na; water',
  summary: 'Micronutrients are needed in milligram or microgram amounts. Vitamins A and D are fat soluble; the B vitamins (thiamin, riboflavin, niacin) and folate are water soluble. Calcium, magnesium and sodium are the minerals in the specification. Water is the most important nutrient of all.',
  spec: [
    'Micronutrients — minerals, for example calcium, magnesium and sodium',
    'Fat-soluble vitamins, for example vitamin A (retinol) and vitamin D (calciferol)',
    'Water-soluble vitamins, for example B vitamins (thiamin, riboflavin, niacin) and folate',
    'Water: structure (H₂O, polar molecule) and roles in the body',
    'Chemical terms: retinol, beta-carotene, calciferol (D2 ergocalciferol, D3 cholecalciferol)'
  ],
  learn: [
    { h: 'Macronutrients and micronutrients', html: `
<p><b>Macronutrients</b> (carbohydrate, fat, protein) are needed in <b>grams</b> per day and provide energy. <b>Micronutrients</b> — vitamins and minerals — are needed in <b>milligrams (mg)</b> or <b>micrograms (µg)</b> and do not provide energy, but they are essential for metabolism, growth and protection.</p>
<div class="box tip"><b class="lbl">Units</b><p>1 g = 1000 mg; 1 mg = 1000 µg. Vitamin A and vitamin D recommendations are in µg; calcium in mg.</p></div>` },
    { h: 'Fat-soluble vitamins: A and D', html: `
<p>Fat-soluble vitamins dissolve in fat, are absorbed with dietary fat and can be <b>stored</b> in the liver and fatty tissue. Because they are stored, <b>excess can build up to toxic levels</b> (especially from supplements).</p>
<div class="tbl"><table><tr><th></th><th>Vitamin A — retinol</th><th>Vitamin D — calciferol</th></tr>
<tr><td>Forms</td><td>retinol (animal foods); beta-carotene (plants), converted to retinol in the body</td><td>D3 cholecalciferol (made in skin by sunlight, animal foods); D2 ergocalciferol (plants, fungi)</td></tr>
<tr><td>Functions</td><td>vision in dim light (rhodopsin); healthy skin and mucous membranes; immune function; growth</td><td>absorption of calcium and phosphorus; strong bones and teeth; muscle and immune function</td></tr>
<tr><td>Sources</td><td>liver, whole milk, cheese, butter, eggs, oily fish; beta-carotene in carrots, sweet potato, dark green leaves, mango</td><td>sunlight on skin (April–September in the UK); oily fish, eggs, fortified spreads and cereals</td></tr>
<tr><td>Deficiency</td><td>night blindness; dry skin; increased infection risk</td><td>rickets (children), osteomalacia (adults)</td></tr>
<tr><td>Excess</td><td>toxic: liver damage; pregnant women avoid liver and retinol supplements (birth defects)</td><td>hypercalcaemia: calcium deposits in soft tissues, kidney damage</td></tr></table></div>
<div class="box def"><b class="lbl">UK advice</b><p>Everyone should consider a <b>10 µg vitamin D</b> supplement in autumn and winter; at-risk groups (babies, under-5s, people with little sun exposure or darker skin) year-round.</p></div>` },
    { h: 'Water-soluble vitamins: B vitamins and folate', html: `
<p>Water-soluble vitamins are <b>not stored</b> in large amounts (except B12), so they are needed regularly; excess is usually excreted in urine. They <b>leach into cooking water</b> and many are damaged by heat.</p>
<div class="tbl"><table><tr><th>Vitamin</th><th>Main functions</th><th>Sources</th><th>Deficiency</th></tr>
<tr><td><b>B1 thiamin</b></td><td>release of energy from carbohydrate; nerve function</td><td>wholegrains, fortified cereals, pork, peas, nuts</td><td>beriberi (nerve and heart damage)</td></tr>
<tr><td><b>B2 riboflavin</b></td><td>energy release from carbohydrate, fat and protein; healthy skin and eyes</td><td>milk, eggs, fortified cereals, liver (destroyed by light)</td><td>cracked lips and mouth corners</td></tr>
<tr><td><b>B3 niacin</b></td><td>energy release; healthy skin and nervous system</td><td>meat, fish, wheat flour, eggs; made from tryptophan</td><td>pellagra: dermatitis, diarrhoea, dementia</td></tr>
<tr><td><b>Folate</b> (folic acid)</td><td>making DNA and red blood cells; prevents neural tube defects (e.g. spina bifida) in the fetus</td><td>green leafy vegetables, pulses, oranges, fortified cereals (folic acid is being added to non-wholemeal wheat flour in the UK from late 2026)</td><td>megaloblastic anaemia; neural tube defects in babies</td></tr></table></div>
<div class="box warn"><b class="lbl">Pregnancy</b><p>Women trying to conceive and in the first 12 weeks of pregnancy should take a <b>400 µg folic acid</b> supplement.</p></div>` },
    { h: 'Minerals: calcium, magnesium, sodium', html: `
<div class="tbl"><table><tr><th>Mineral</th><th>Functions</th><th>Sources</th><th>Too little / too much</th></tr>
<tr><td><b>Calcium</b></td><td>bones and teeth (with phosphorus and vitamin D); blood clotting; nerve and muscle function</td><td>milk, cheese, yogurt, fortified white bread and plant milks, canned fish with bones, green leaves</td><td>low: rickets, osteomalacia, osteoporosis later in life</td></tr>
<tr><td><b>Magnesium</b></td><td>bone structure; energy release (enzyme activity); nerve and muscle function</td><td>wholegrains, green leafy vegetables, nuts, seeds, pulses</td><td>low: fatigue, muscle cramps</td></tr>
<tr><td><b>Sodium</b></td><td>fluid balance; nerve impulses and muscle contraction</td><td>salt; processed foods, bread, bacon, cheese, stock cubes, sauces</td><td>excess raises blood pressure → CVD and stroke. Adults: no more than 6 g salt a day</td></tr></table></div>
<div class="box tip"><b class="lbl">Salt vs sodium</b><p>Salt = sodium × 2.5. Food labels give salt; 1 g of sodium ≈ 2.5 g of salt.</p></div>` },
    { h: 'Water', html: `
[[d:water]]
<p>Water ($"H"_2"O"$) is a <b>polar</b> molecule: the oxygen is slightly negative and the hydrogens slightly positive, so water molecules attract each other by hydrogen bonds and dissolve many substances. About 60% of adult body mass is water.</p>
<ul><li>Medium for chemical reactions and transport (blood plasma, lymph).</li><li>Temperature control through sweating.</li><li>Removes waste (urine) and keeps faeces soft with fibre.</li><li>Lubricates joints and eyes; forms saliva and digestive juices.</li></ul>
<p>The Eatwell Guide advises <b>6–8 glasses (about 1.2–2 litres)</b> of fluid a day, more in hot weather or during exercise. Dehydration causes headaches, tiredness, poor concentration, dark urine and constipation.</p>` }
  ],
  eqs: [['"salt" = "sodium" × 2.5', 'convert sodium to salt']],
  worked: [
    { q: 'A ready meal contains 0.9 g of sodium. Calculate the salt content and state what percentage of an adult’s 6 g maximum this is.', s: ['salt = sodium × 2.5 = 0.9 × 2.5 = 2.25 g', 'percentage = 2.25 ÷ 6 × 100 = 37.5%'], a: '2.25 g of salt, 37.5% of the daily maximum' },
    { q: 'Explain why a vegan living in the UK may be at risk of vitamin D deficiency. (3 marks)', s: ['Most dietary vitamin D comes from animal foods such as oily fish and eggs, which a vegan avoids.', 'In the UK, sunlight is too weak to make vitamin D in the skin between October and March.', 'So unless they eat fortified foods (spreads, cereals, plant milks) or take a supplement, intake may be too low → risk of osteomalacia.'], a: 'Few plant sources + winter sunlight → need fortified foods/supplement.' }
  ],
  pitfalls: ['Saying vitamins provide energy — they help release it but provide none.', 'Stating that water-soluble vitamins are stored in the liver (only fat-soluble vitamins and B12 are stored significantly).', 'Confusing salt and sodium figures — multiply sodium by 2.5.', 'Giving “carrots” as a source of retinol — carrots provide beta-carotene, which the body converts.', 'Forgetting vitamin D is needed to absorb calcium — so calcium deficiency questions often need vitamin D too.'],
  cards: [
    ['Two fat-soluble vitamins in the specification?', 'Vitamin A (retinol) and vitamin D (calciferol).'],
    ['Plant form of vitamin A?', 'Beta-carotene — converted to retinol in the body.'],
    ['Function of vitamin A?', 'Vision in dim light, healthy skin and mucous membranes, immunity, growth.'],
    ['Main source of vitamin D?', 'Sunlight on skin (summer); also oily fish, eggs, fortified foods.'],
    ['Deficiency disease of vitamin D in children?', 'Rickets (soft, bowed bones). Adults: osteomalacia.'],
    ['Function of thiamin (B1)?', 'Releasing energy from carbohydrate; nerve function.'],
    ['Deficiency of niacin?', 'Pellagra — dermatitis, diarrhoea, dementia.'],
    ['Why is folate vital in early pregnancy?', 'Prevents neural tube defects such as spina bifida; supplement 400 µg.'],
    ['Three functions of calcium?', 'Bones and teeth, blood clotting, nerve and muscle function.'],
    ['Function of magnesium?', 'Bone structure, energy release (enzymes), nerve and muscle function.'],
    ['Maximum salt intake for adults (UK)?', '6 g a day.'],
    ['Convert sodium to salt?', 'Salt = sodium × 2.5.'],
    ['Why is water a good solvent?', 'It is polar, so it attracts and dissolves many substances.'],
    ['Recommended daily fluid intake (Eatwell)?', '6–8 glasses (≈ 1.2–2 L).']
  ],
  quiz: [
    { q: 'Which vitamin is fat soluble?', o: ['Vitamin D', 'Thiamin', 'Folate', 'Riboflavin'], x: 'A, D, E and K are fat soluble.' },
    { q: 'Retinol is the chemical name for…', o: ['vitamin A', 'vitamin D', 'vitamin B1', 'folate'], x: 'Retinol = vitamin A (animal form).' },
    { q: 'Calciferol is…', o: ['vitamin D', 'vitamin A', 'niacin', 'calcium'], x: 'Calciferols (D2 ergocalciferol, D3 cholecalciferol) are vitamin D.' },
    { q: 'Night blindness is caused by lack of…', o: ['vitamin A', 'vitamin D', 'niacin', 'sodium'], x: 'Retinol forms rhodopsin, needed for dim-light vision.' },
    { q: 'Which B vitamin prevents pellagra?', o: ['Niacin (B3)', 'Thiamin (B1)', 'Riboflavin (B2)', 'Folate'], x: 'Pellagra: dermatitis, diarrhoea, dementia.' },
    { q: 'Folic acid supplements are advised…', o: ['before conception and for the first 12 weeks of pregnancy', 'only for over-65s', 'only for athletes', 'only in summer'], x: '400 µg daily to reduce the risk of neural tube defects.' },
    { q: 'Why can excess vitamin A be toxic?', o: ['It is stored in the liver and can accumulate', 'It is lost in urine', 'It destroys calcium', 'It is water soluble'], x: 'Fat-soluble vitamins are stored.' },
    { q: 'A food label shows 0.4 g sodium. How much salt is this?', o: ['1.0 g', '0.16 g', '0.4 g', '2.5 g'], x: '0.4 × 2.5 = 1.0 g salt.' },
    { q: 'Which mineral is most linked with high blood pressure?', o: ['Sodium', 'Calcium', 'Magnesium', 'Iron'], x: 'High salt/sodium intake raises blood pressure.' },
    { q: 'Vitamin D is needed mainly to…', o: ['absorb calcium from the intestine', 'make haemoglobin', 'release energy from glucose', 'form collagen'], x: 'Vitamin D controls calcium absorption.' },
    { q: 'Water-soluble vitamins are easily lost when vegetables are…', o: ['boiled in lots of water', 'steamed briefly', 'eaten raw', 'stored in a cool dark place'], x: 'They leach into the cooking water.' },
    { q: 'Which is a good source of magnesium?', o: ['Wholegrains, nuts and green leafy vegetables', 'Butter', 'Sugar', 'White rice only'], x: 'Magnesium is found in plant foods such as wholegrains and leaves.' },
    { q: 'Water makes up roughly what percentage of adult body mass?', o: ['60%', '10%', '30%', '90%'], x: 'About 60% (higher in babies).' },
    { q: 'Which food provides beta-carotene?', o: ['Carrots', 'Liver', 'Butter', 'Egg white'], x: 'Orange and dark-green plant foods supply beta-carotene.' }
  ],
  exam: [
    { q: 'Identify one function of vitamin A and one good source of retinol. [2]', m: 2, ms: ['function: vision in dim light / healthy skin / mucous membranes / immunity / growth', 'source: liver / whole milk / cheese / butter / eggs / oily fish (not carrots — beta-carotene)'] },
    { q: 'Explain why people living in the UK are advised to take a vitamin D supplement in winter. [3]', m: 3, ms: ['most vitamin D is made in the skin by the action of sunlight (UVB)', 'from October to March the sunlight in the UK is too weak to make enough', 'few foods contain much vitamin D, so intake may be low → risk to bone health / rickets / osteomalacia'] },
    { q: 'Compare fat-soluble and water-soluble vitamins. [4]', m: 4, ms: ['fat-soluble (A, D) dissolve in fat and are absorbed with dietary fat', 'fat-soluble are stored in the liver / fatty tissue so excess may be toxic', 'water-soluble (B, C, folate) are not stored (except B12) — needed daily / excess excreted in urine', 'water-soluble are easily lost in cooking water / by heat'] },
    { q: 'Evaluate the importance of calcium throughout the life stages. [6]', m: 6, ms: ['calcium needed for bones and teeth, clotting, nerves/muscles', 'childhood and adolescence: rapid growth — peak bone mass reached by about 30', 'pregnancy and lactation: supplies fetal skeleton / breast milk', 'later adulthood / post-menopause: bone loss → osteoporosis, fractures', 'needs vitamin D for absorption; phytates/oxalates reduce absorption', 'balanced conclusion — lifelong adequate intake reduces risk'] }
  ],
  sims: ['micros'], gens: ['salt1', 'salt2']
});

TOPICS.push({
  id: '1.4', unit: '1', ref: '1.1.2', title: 'Functions of nutrients', short: 'Growth, energy, metabolism and complementary actions',
  summary: 'Every nutrient does a job: growth and development, providing energy, regulating metabolism or supporting digestion. Many work in partnership — vitamin D with calcium, vitamin C with iron, B vitamins with energy release.',
  spec: [
    'Functions of nutrients: growth and development',
    'Functions of nutrients: production of energy',
    'Functions of nutrients: regulate metabolism',
    'Functions of nutrients: digestion of nutrients',
    'Understand the functions of each type of nutrient in 1.1.1 and be aware of their complementary actions'
  ],
  learn: [
    { h: 'Four big jobs', html: `
<div class="tbl"><table><tr><th>Function</th><th>Main nutrients</th></tr>
<tr><td><b>Growth and development</b> — building and repairing cells and tissues</td><td>protein (muscle, enzymes, hormones, antibodies); calcium, magnesium and vitamin D (bones, teeth); fats (cell membranes, brain); folate (cell division, DNA)</td></tr>
<tr><td><b>Production of energy</b></td><td>carbohydrate (17 kJ/g), fat (37 kJ/g) and protein (17 kJ/g, mainly when carbohydrate and fat are short); B vitamins and magnesium release it</td></tr>
<tr><td><b>Regulating metabolism</b> — controlling chemical reactions</td><td>vitamins (co-enzymes), minerals (enzyme activators, fluid balance: sodium), proteins (enzymes, hormones such as insulin), water (medium for reactions)</td></tr>
<tr><td><b>Digestion of nutrients</b></td><td>fibre (bulk, peristalsis, gut bacteria), water (digestive juices, softening), proteins (digestive enzymes), bile (made from cholesterol)</td></tr></table></div>` },
    { h: 'Energy: how much each macronutrient provides', html: `
<p>Energy is measured in <b>kilojoules (kJ)</b> or <b>kilocalories (kcal)</b>; 1 kcal = 4.184 kJ.</p>
<div class="tbl"><table><tr><th>Nutrient</th><th>kJ per g</th><th>kcal per g</th></tr>
<tr><td>Carbohydrate</td><td>17</td><td>4 (3.75 on some tables)</td></tr><tr><td>Protein</td><td>17</td><td>4</td></tr><tr><td>Fat</td><td>37</td><td>9</td></tr><tr><td>Alcohol</td><td>29</td><td>7</td></tr><tr><td>Fibre</td><td>8</td><td>2</td></tr></table></div>
<p>Glucose is used in <b>respiration</b> to release energy in cells. Excess glucose is stored as <b>glycogen</b>, then converted to fat. Fat is the body’s long-term energy store and insulates and protects organs.</p>
<p>The UK reference intakes suggest about <b>50% of energy from carbohydrate</b>, no more than <b>35% from fat</b> (under 11% saturated) and free sugars under <b>5%</b>.</p>` },
    { h: 'Complementary actions of nutrients', html: `
<p>Nutrients rarely act alone. Examiners like these pairs:</p>
<div class="tbl"><table><tr><th>Partnership</th><th>How they work together</th></tr>
<tr><td>Vitamin D + calcium + phosphorus</td><td>vitamin D enables calcium absorption; together they mineralise bones and teeth</td></tr>
<tr><td>Vitamin C + non-haem iron</td><td>vitamin C converts plant iron to a form that is absorbed more easily — orange juice with a fortified cereal</td></tr>
<tr><td>B vitamins + carbohydrate</td><td>thiamin, riboflavin and niacin act as co-enzymes that release energy from glucose</td></tr>
<tr><td>Fat + vitamins A and D</td><td>fat carries fat-soluble vitamins and is needed to absorb them</td></tr>
<tr><td>Protein complementation</td><td>two plant proteins with different limiting amino acids combine to supply all essential amino acids (beans on toast)</td></tr>
<tr><td>Carbohydrate spares protein</td><td>enough carbohydrate and fat for energy leaves protein free for growth and repair</td></tr>
<tr><td>Fibre + water</td><td>fibre holds water to soften faeces</td></tr></table></div>
<div class="box warn"><b class="lbl">Some nutrients compete</b><p>Tannins (tea), phytates (bran) and oxalates (spinach) reduce iron and calcium absorption.</p></div>` }
  ],
  eqs: [['"energy (kJ)" = 17 × "carb" + 17 × "protein" + 37 × "fat"', 'grams of each nutrient'], ['"1 kcal" = "4.184 kJ"', 'unit conversion']],
  worked: [
    { q: 'A 30 g portion of cereal contains 20 g carbohydrate, 3 g protein and 1.5 g fat. Calculate the energy in kJ and kcal.', s: ['kJ = 20 × 17 + 3 × 17 + 1.5 × 37', '= 340 + 51 + 55.5 = 446.5 kJ', 'kcal = 20 × 4 + 3 × 4 + 1.5 × 9 = 80 + 12 + 13.5 = 105.5 kcal'], a: '≈ 447 kJ (106 kcal)' },
    { q: 'Explain the complementary action of vitamin C and iron. (2 marks)', s: ['Vitamin C (ascorbic acid) reduces non-haem iron from plant foods from the ferric (Fe³⁺) to the ferrous (Fe²⁺) form.', 'The ferrous form is absorbed more easily in the small intestine, so eating vitamin C-rich food with plant iron improves iron status and helps prevent anaemia.'], a: 'Vitamin C increases absorption of non-haem iron.' }
  ],
  pitfalls: ['Saying protein’s main function is energy — it is growth and repair; energy is secondary.', 'Using 9 kJ/g for fat — that is kcal. Fat is 37 kJ/g or 9 kcal/g.', 'Listing nutrients without explaining how they interact when asked about complementary actions.', 'Forgetting water and fibre when asked about digestion.'],
  cards: [
    ['Energy in 1 g of fat?', '37 kJ (9 kcal).'],
    ['Energy in 1 g of carbohydrate or protein?', '17 kJ (4 kcal).'],
    ['Energy in 1 g of alcohol?', '29 kJ (7 kcal).'],
    ['Main function of protein?', 'Growth, repair and maintenance of body tissues (also enzymes, hormones, antibodies).'],
    ['Which nutrients regulate metabolism?', 'Vitamins, minerals, proteins (enzymes/hormones) and water.'],
    ['Complementary action: vitamin D + calcium?', 'Vitamin D enables calcium absorption for bones and teeth.'],
    ['Complementary action: vitamin C + iron?', 'Vitamin C improves absorption of non-haem (plant) iron.'],
    ['How do B vitamins complement carbohydrate?', 'They act as co-enzymes that release energy from glucose.'],
    ['What is protein sparing?', 'Enough carbohydrate/fat for energy lets protein be used for growth and repair.'],
    ['Recommended % energy from carbohydrate?', 'About 50% (free sugars < 5%).'],
    ['Maximum % energy from fat?', '35% (saturated < 11%).'],
    ['1 kcal = ? kJ', '4.184 kJ.']
  ],
  quiz: [
    { q: 'Which nutrient provides the most energy per gram?', o: ['Fat', 'Carbohydrate', 'Protein', 'Fibre'], x: 'Fat: 37 kJ/g.' },
    { q: 'How many kJ does 10 g of protein provide?', o: ['170 kJ', '370 kJ', '40 kJ', '90 kJ'], x: '10 × 17 = 170 kJ.' },
    { q: 'The main function of protein is…', o: ['growth and repair of tissues', 'insulation', 'fluid balance', 'providing fibre'], x: 'Energy is only a secondary function.' },
    { q: 'Which pair shows a complementary action?', o: ['Vitamin C and non-haem iron', 'Sodium and fibre', 'Tannins and iron', 'Phytates and calcium'], x: 'Vitamin C enhances non-haem iron absorption; tannins and phytates reduce absorption.' },
    { q: 'Which nutrient is needed to absorb vitamins A and D?', o: ['Fat', 'Sugar', 'Sodium', 'Fibre'], x: 'Fat-soluble vitamins are absorbed with fat.' },
    { q: 'Thiamin, riboflavin and niacin help to…', o: ['release energy from food', 'build bones', 'carry oxygen', 'clot blood'], x: 'They are co-enzymes in energy metabolism.' },
    { q: 'Which nutrient regulates fluid balance?', o: ['Sodium', 'Starch', 'Collagen', 'Cholesterol'], x: 'Sodium controls water balance across cell membranes.' },
    { q: 'Adults should get no more than what percentage of energy from saturated fat?', o: ['11%', '35%', '50%', '5%'], x: 'Saturated fat < 11% of food energy.' },
    { q: 'Which nutrients mainly support digestion?', o: ['Fibre and water', 'Vitamin A and retinol', 'Sodium and fat', 'Glycogen and haemoglobin'], x: 'Fibre adds bulk and stimulates peristalsis; water softens stool and forms digestive juices.' },
    { q: 'A food has 12 g carbohydrate, 2 g protein and 5 g fat. Energy ≈', o: ['423 kJ', '323 kJ', '95 kJ', '1000 kJ'], x: '12×17 + 2×17 + 5×37 = 204 + 34 + 185 = 423 kJ.' },
    { q: 'Protein complementation means…', o: ['combining plant proteins so all essential amino acids are supplied', 'eating protein with vitamin C', 'eating only animal protein', 'taking protein supplements'], x: 'e.g. beans (low methionine) with bread (low lysine).' }
  ],
  exam: [
    { q: 'State the energy value of 1 g of fat and 1 g of carbohydrate in kJ. [2]', m: 2, ms: ['fat: 37 kJ', 'carbohydrate: 17 kJ'] },
    { q: 'Explain how nutrients work together to support healthy bones. [4]', m: 4, ms: ['calcium and phosphorus form the hard mineral of bones and teeth', 'vitamin D is needed to absorb calcium from the small intestine', 'magnesium contributes to bone structure', 'protein / collagen forms the framework / matrix of bone', 'weight-bearing exercise also stimulates bone density (max 4)'] },
    { q: 'Explain why vegans are advised to eat vitamin C-rich foods with meals. [3]', m: 3, ms: ['vegans rely on non-haem iron from plants (pulses, green leaves, fortified cereals)', 'non-haem iron is less easily absorbed than haem iron', 'vitamin C improves / converts iron to a more absorbable form → reduces risk of iron-deficiency anaemia'] },
    { q: 'Discuss the functions of carbohydrates, fats and proteins in providing energy for an endurance athlete. [6]', m: 6, ms: ['carbohydrate is the main / preferred fuel — glucose used in respiration', 'stored as glycogen in muscles and liver; glycogen stores are limited so carbohydrate loading / refuelling important', 'fat provides 37 kJ/g — main fuel at low intensity / long duration, large store', 'protein 17 kJ/g — mainly for repair; used for energy if carbohydrate is low (not desirable)', 'B vitamins / magnesium / water needed to release energy / prevent dehydration', 'reasoned judgement on balance of macronutrients for performance'] }
  ],
  sims: ['energy'], gens: ['energy1', 'energy2', 'energy3']
});

TOPICS.push({
  id: '1.5', unit: '1', ref: '1.1.2', title: 'Digestion and absorption', short: 'Enzymes from mouth to small intestine; into the blood',
  summary: 'Digestion breaks large, insoluble food molecules into small, soluble ones that can be absorbed. Follow carbohydrates, proteins and fats from the mouth to the small intestine and into the blood stream or lymph.',
  spec: [
    'Understand how different nutrients are digested and absorbed into the blood stream',
    'Carbohydrates: mouth — digestion begins with salivary amylase, breaking down starch into smaller sugars',
    'Carbohydrates: small intestine — pancreatic amylase continues starch breakdown',
    'Absorption — monosaccharides absorbed through the intestinal lining and transported to the liver',
    'Digestion and absorption of proteins and fats; role of bile; absorption through villi'
  ],
  learn: [
    { h: 'Why digestion is needed', html: `
[[d:gut]]
<p>Starch, proteins and fats are <b>large, insoluble</b> molecules. <b>Mechanical digestion</b> (chewing, churning) breaks food into smaller pieces with a larger surface area; <b>chemical digestion</b> uses <b>enzymes</b> to hydrolyse molecules into small, soluble units that can pass through the gut wall.</p>
<p>Food moves along the gut by <b>peristalsis</b> — waves of muscle contraction helped by fibre.</p>` },
    { h: 'Carbohydrate digestion', html: `
<ol><li><b>Mouth</b> — teeth grind food; <b>salivary amylase</b> starts breaking <b>starch into maltose</b> (smaller sugars).</li>
<li><b>Stomach</b> — acid denatures salivary amylase, so starch digestion pauses.</li>
<li><b>Small intestine (duodenum)</b> — <b>pancreatic amylase</b> continues starch → maltose.</li>
<li><b>Small intestine wall</b> — enzymes on the lining finish the job: <b>maltase</b> (maltose → glucose), <b>sucrase</b> (sucrose → glucose + fructose), <b>lactase</b> (lactose → glucose + galactose).</li>
<li><b>Absorption</b> — monosaccharides are absorbed through the <b>villi</b> into blood capillaries and carried by the <b>hepatic portal vein to the liver</b>.</li></ol>` },
    { h: 'Protein digestion', html: `
<ol><li><b>Stomach</b> — hydrochloric acid (pH about 2) denatures proteins and kills many bacteria; <b>pepsin</b> breaks proteins into shorter polypeptides.</li>
<li><b>Small intestine</b> — <b>trypsin</b> (from the pancreas) breaks polypeptides into peptides; <b>peptidases</b> on the intestinal wall break them into <b>amino acids</b>.</li>
<li><b>Absorption</b> — amino acids pass into blood capillaries in the villi and go to the <b>liver</b>, where they are used to build proteins or deaminated.</li></ol>` },
    { h: 'Fat digestion', html: `
<ol><li><b>Small intestine</b> — <b>bile</b>, made in the liver and stored in the gall bladder, <b>emulsifies</b> fat into small droplets (a larger surface area). Bile is not an enzyme.</li>
<li><b>Pancreatic lipase</b> hydrolyses triglycerides into <b>fatty acids and glycerol</b> (and monoglycerides).</li>
<li><b>Absorption</b> — these enter the cells of the villi, are re-formed into triglycerides and packed into <b>chylomicrons</b>, which enter the <b>lacteals</b> (lymph vessels), then the blood. Fat-soluble vitamins travel with them.</li></ol>` },
    { h: 'Absorption in the small intestine', html: `
[[d:villus]]
<p>The small intestine is adapted for absorption: it is about <b>6 m long</b>, folded, lined with <b>villi</b> and <b>microvilli</b> (huge surface area), has walls <b>one cell thick</b> and a <b>rich blood supply</b> to keep a concentration gradient.</p>
<p>The <b>large intestine</b> absorbs <b>water and minerals</b>; gut bacteria ferment fibre and make some vitamins (K, some B). Undigested material leaves as faeces.</p>
<div class="tbl"><table><tr><th>Nutrient</th><th>Enzymes</th><th>End products</th><th>Absorbed into</th></tr>
<tr><td>Starch</td><td>salivary and pancreatic amylase; maltase</td><td>glucose</td><td>blood → liver</td></tr>
<tr><td>Protein</td><td>pepsin, trypsin, peptidases</td><td>amino acids</td><td>blood → liver</td></tr>
<tr><td>Fat</td><td>(bile emulsifies) lipase</td><td>fatty acids + glycerol</td><td>lacteals (lymph) → blood</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Describe the digestion and absorption of starch. (5 marks)', s: ['In the mouth, chewing increases surface area and salivary amylase begins breaking starch into maltose.', 'Stomach acid stops amylase working.', 'In the small intestine, pancreatic amylase continues breaking starch into maltose.', 'Maltase on the intestinal wall hydrolyses maltose into glucose.', 'Glucose is absorbed through the villi into the blood capillaries and carried to the liver in the hepatic portal vein.'], a: 'Mouth amylase → pancreatic amylase → maltase → glucose absorbed via villi to liver.' }
  ],
  pitfalls: ['Saying bile is an enzyme — it emulsifies fat but does not break bonds.', 'Saying starch is digested in the stomach — stomach acid denatures amylase.', 'Saying fats are absorbed into blood capillaries — they enter lacteals (lymph) first.', 'Forgetting the liver is the first stop for absorbed sugars and amino acids.'],
  cards: [
    ['Where does starch digestion begin?', 'In the mouth, with salivary amylase.'],
    ['Enzyme that continues starch digestion in the small intestine?', 'Pancreatic amylase.'],
    ['Where are monosaccharides transported after absorption?', 'To the liver via the hepatic portal vein.'],
    ['Enzyme that digests protein in the stomach?', 'Pepsin (works in acid).'],
    ['End products of protein digestion?', 'Amino acids.'],
    ['What does bile do?', 'Emulsifies fat into small droplets, increasing surface area for lipase (and neutralises acid).'],
    ['End products of fat digestion?', 'Fatty acids and glycerol (monoglycerides).'],
    ['Where are fats absorbed?', 'Into lacteals (lymph vessels) in the villi, as chylomicrons.'],
    ['Three adaptations of the small intestine?', 'Long; villi and microvilli for large surface area; thin walls; rich blood supply.'],
    ['Main role of the large intestine?', 'Absorbing water and minerals; bacterial fermentation of fibre.'],
    ['What is peristalsis?', 'Waves of muscular contraction that move food along the gut.'],
    ['Why does stomach acid help digestion?', 'Denatures proteins, activates pepsin, kills bacteria.']
  ],
  quiz: [
    { q: 'Salivary amylase breaks starch into…', o: ['maltose', 'amino acids', 'fatty acids', 'lactose'], x: 'Amylase hydrolyses starch into maltose.' },
    { q: 'Which enzyme digests protein in the stomach?', o: ['Pepsin', 'Lipase', 'Amylase', 'Lactase'], x: 'Pepsin works best at acidic pH.' },
    { q: 'Bile is made in the…', o: ['liver', 'pancreas', 'stomach', 'large intestine'], x: 'Made in the liver, stored in the gall bladder.' },
    { q: 'Bile helps digestion by…', o: ['emulsifying fat', 'breaking peptide bonds', 'digesting starch', 'absorbing water'], x: 'It increases the surface area of fat for lipase.' },
    { q: 'Absorbed glucose is carried first to the…', o: ['liver', 'heart', 'kidneys', 'brain'], x: 'Hepatic portal vein → liver.' },
    { q: 'Fatty acids are absorbed into…', o: ['lacteals in the villi', 'the stomach wall', 'the large intestine', 'blood capillaries in the mouth'], x: 'They are packaged into chylomicrons and enter the lymph.' },
    { q: 'Villi increase absorption because they…', o: ['greatly increase surface area', 'produce bile', 'make the gut shorter', 'release amylase'], x: 'Villi and microvilli give an enormous surface area.' },
    { q: 'The main function of the large intestine is to…', o: ['absorb water', 'digest protein', 'produce insulin', 'digest fat'], x: 'Water and minerals are absorbed; bacteria ferment fibre.' },
    { q: 'Why does starch digestion stop in the stomach?', o: ['Acid denatures salivary amylase', 'There is no starch left', 'Bile destroys it', 'Starch is absorbed'], x: 'Amylase works best near neutral pH.' },
    { q: 'Lactase breaks lactose into…', o: ['glucose and galactose', 'glucose and fructose', 'two glucose molecules', 'amino acids'], x: 'Lactose = glucose + galactose.' },
    { q: 'Where does most chemical digestion and absorption take place?', o: ['Small intestine', 'Mouth', 'Oesophagus', 'Large intestine'], x: 'Pancreatic and intestinal enzymes act here; villi absorb.' }
  ],
  exam: [
    { q: 'Name the enzyme that begins the digestion of starch and state where it is produced. [2]', m: 2, ms: ['(salivary) amylase', 'salivary glands / mouth'] },
    { q: 'Describe how fat is digested and absorbed. [5]', m: 5, ms: ['bile from liver / gall bladder emulsifies fat into small droplets', 'increases surface area for enzymes', 'pancreatic lipase hydrolyses triglycerides', 'into fatty acids and glycerol / monoglycerides', 'absorbed into cells of villi, reformed / chylomicrons enter lacteals / lymph'] },
    { q: 'Explain how the small intestine is adapted for absorbing nutrients. [4]', m: 4, ms: ['very long — more time / surface for absorption', 'villi and microvilli — very large surface area', 'wall one cell thick — short diffusion distance', 'rich blood supply / lacteals maintain concentration gradient'] }
  ],
  sims: ['digestion'], gens: []
});

TOPICS.push({
  id: '1.6', unit: '1', ref: '1.1.3', title: 'Classifying nutrients in food', short: 'Food groups, biological value, GI, nutrient density, sources',
  summary: 'Nutrients and foods can be classified in several ways: by food group, by the biological value of their protein, by glycaemic index, by nutrient density and by how nutrients complement each other. You must also know main and secondary sources and calculate the nutritional value of a product.',
  spec: [
    'Classification: food group (Eatwell Guide groups)',
    'Classification: biological value (HBV/LBV proteins, protein complementation)',
    'Classification: glycemic index',
    'Classification: nutrient density',
    'Classification: complementary actions of nutrients',
    'Main and secondary sources of all nutrients; be able to classify nutrients',
    'Resources: computer programmes, food labels, mobile apps, recipes, websites',
    'Calculate the nutritional value within a product based on the nutrients given and resources available'
  ],
  learn: [
    { h: 'Food groups: the Eatwell Guide', html: `
[[d:eatwell]]
<div class="tbl"><table><tr><th>Group</th><th>Share of diet (approx.)</th><th>Main nutrients</th></tr>
<tr><td>Fruit and vegetables</td><td>≈ 40% — at least 5 portions (80 g each) a day</td><td>vitamin C, folate, beta-carotene, potassium, fibre</td></tr>
<tr><td>Potatoes, bread, rice, pasta and other starchy carbohydrates</td><td>≈ 38% — choose wholegrain</td><td>starch, fibre, B vitamins, iron, calcium (fortified flour)</td></tr>
<tr><td>Beans, pulses, fish, eggs, meat and other proteins</td><td>≈ 12% — 2 portions of fish a week, one oily</td><td>protein, iron, zinc, B12, omega-3</td></tr>
<tr><td>Dairy and alternatives</td><td>≈ 8% — lower-fat, lower-sugar</td><td>calcium, protein, B2, iodine</td></tr>
<tr><td>Oils and spreads</td><td>≈ 1% — unsaturated, small amounts</td><td>unsaturated fat, vitamins A, D, E</td></tr></table></div>
<p>Foods high in fat, salt and sugar sit <b>outside</b> the guide — eat less often and in small amounts. Drink 6–8 glasses of fluid a day.</p>` },
    { h: 'Biological value of protein', html: `
<p><b>Biological value (BV)</b> describes how well a protein supplies the essential amino acids the body needs.</p>
<ul><li><b>High biological value (HBV)</b> — contains <b>all</b> the essential amino acids in the proportions needed: meat, fish, eggs, milk, cheese, and from plants <b>soya, quinoa</b> (and mycoprotein/Quorn).</li>
<li><b>Low biological value (LBV)</b> — lacks one or more essential amino acids (the <b>limiting amino acid</b>): most plant foods — cereals (low in <b>lysine</b>), pulses (low in <b>methionine</b>), nuts, seeds.</li></ul>
<p><b>Protein complementation</b>: eating two LBV proteins together so each supplies what the other lacks — beans on toast, dhal with rice, hummus with pitta. This is essential planning for vegans.</p>` },
    { h: 'Glycaemic index', html: `
[[d:gicurve]]
<p>The <b>glycaemic index (GI)</b> ranks carbohydrate foods from 0–100 by how quickly they raise blood glucose compared with pure glucose (100).</p>
<div class="tbl"><table><tr><th>GI</th><th>Range</th><th>Examples</th></tr><tr><td>High</td><td>70+</td><td>white bread, cornflakes, baked potato, watermelon, glucose drinks</td></tr><tr><td>Medium</td><td>56–69</td><td>basmati rice, honey, wholemeal bread</td></tr><tr><td>Low</td><td>55 or less</td><td>porridge oats, pulses, pasta, most fruit, milk, nuts</td></tr></table></div>
<p>Low-GI foods release glucose slowly — helpful for <b>diabetes</b>, weight control and sustained energy. GI is lowered by fibre, fat, protein and acid in a meal, and raised by processing and long cooking (gelatinised starch). <b>Glycaemic load</b> = GI × grams of carbohydrate ÷ 100 accounts for portion size.</p>` },
    { h: 'Nutrient density', html: `
<p><b>Nutrient density</b> compares the <b>nutrients</b> a food provides with the <b>energy</b> it provides.</p>
<ul><li><b>Nutrient-dense</b>: lots of vitamins, minerals, protein or fibre per kcal — vegetables, fruit, pulses, fish, eggs, wholegrains, lower-fat dairy.</li>
<li><b>Energy-dense, nutrient-poor</b> (“empty calories”): lots of energy but few micronutrients — sugary drinks, sweets, crisps, pastries, alcohol.</li></ul>
<p>Nutrient density matters most when energy needs are low but nutrient needs are high — older adults, people losing weight, pregnancy.</p>` },
    { h: 'Main and secondary sources', html: `
<div class="tbl"><table><tr><th>Nutrient</th><th>Main sources</th><th>Secondary sources</th></tr>
<tr><td>Carbohydrate (starch)</td><td>bread, pasta, rice, potatoes, cereals</td><td>pulses, root vegetables</td></tr>
<tr><td>Sugars</td><td>sugar, honey, syrups, fruit, milk (lactose)</td><td>sauces, processed foods</td></tr>
<tr><td>Fibre</td><td>wholegrains, pulses, vegetables, fruit</td><td>nuts, seeds</td></tr>
<tr><td>Protein</td><td>meat, fish, eggs, dairy, soya, pulses</td><td>cereals, nuts, seeds</td></tr>
<tr><td>Fat</td><td>butter, oils, spreads, fatty meat, cheese</td><td>nuts, avocado, cakes and pastries</td></tr>
<tr><td>Vitamin A</td><td>liver, dairy, eggs</td><td>carrots, leafy greens (beta-carotene)</td></tr>
<tr><td>Vitamin D</td><td>sunlight; oily fish</td><td>eggs, fortified spreads and cereals</td></tr>
<tr><td>B vitamins / folate</td><td>wholegrains, meat, fortified cereals; leafy greens (folate)</td><td>milk, eggs, pulses</td></tr>
<tr><td>Calcium</td><td>milk, cheese, yogurt</td><td>fortified bread and plant milks, canned fish bones, green leaves</td></tr>
<tr><td>Sodium</td><td>salt, processed and cured foods</td><td>bread, cheese, sauces</td></tr></table></div>` },
    { h: 'Finding and calculating nutritional values', html: `
<p>Resources: <b>nutritional analysis software</b> (e.g. Nutritics, Nutrients 4 Schools), <b>food labels</b> (per 100 g and per portion), <b>mobile apps</b> (e.g. NHS Food Scanner, MyFitnessPal), <b>recipes</b> with nutrition panels, and <b>websites</b> (e.g. the UK Composition of Foods Integrated Dataset, CoFID).</p>
<div class="box def"><b class="lbl">Method</b><ol><li>Find the nutrient content per 100 g of each ingredient.</li><li>Nutrient in ingredient = (mass used ÷ 100) × value per 100 g.</li><li>Add up all the ingredients for the whole recipe.</li><li>Divide by the number of portions for the value per serving; compare with reference intakes (e.g. %RI).</li></ol></div>
<div class="tbl"><table><tr><th>Reference intakes (adult)</th><th>per day</th></tr><tr><td>Energy</td><td>8400 kJ / 2000 kcal</td></tr><tr><td>Fat</td><td>70 g</td></tr><tr><td>Saturates</td><td>20 g</td></tr><tr><td>Carbohydrate</td><td>260 g</td></tr><tr><td>Total sugars</td><td>90 g</td></tr><tr><td>Protein</td><td>50 g</td></tr><tr><td>Salt</td><td>6 g</td></tr></table></div>` }
  ],
  eqs: [['"nutrient in ingredient" = @frac{"mass used (g)"}{100} × "value per 100 g"', 'scaling from a label or table'], ['"%RI" = @frac{"amount per portion"}{"reference intake"} × 100', 'per cent of reference intake'], ['"GL" = @frac{"GI" × "carbohydrate (g)"}{100}', 'glycaemic load']],
  worked: [
    { q: 'A pasta bake serves 4. It contains 300 g pasta (13 g protein/100 g), 200 g cheese (25 g/100 g) and 150 g ham (18 g/100 g). Calculate the protein per portion.', s: ['pasta: 3 × 13 = 39 g', 'cheese: 2 × 25 = 50 g', 'ham: 1.5 × 18 = 27 g', 'total = 116 g; per portion = 116 ÷ 4 = 29 g'], a: '29 g of protein per portion' },
    { q: 'A 40 g serving of cereal provides 8 g of sugars. What percentage of the 90 g reference intake is this?', s: ['%RI = 8 ÷ 90 × 100', '= 8.9%'], a: '≈ 9% RI' },
    { q: 'Explain why beans on toast is a good meal for a vegan. (3 marks)', s: ['Both bread (wheat) and beans are low biological value proteins.', 'Wheat is low in lysine but contains methionine; beans are low in methionine but contain lysine.', 'Eaten together they complement each other and supply all the essential amino acids — protein complementation.'], a: 'Protein complementation of LBV proteins.' }
  ],
  pitfalls: ['Calling all plant proteins LBV — soya and quinoa are HBV.', 'Confusing GI (speed of blood glucose rise) with sugar content — carrots and watermelon have high GI but a low glycaemic load.', 'Forgetting to divide by the number of portions in recipe calculations.', 'Describing nutrient density as “lots of calories”.', 'Mixing per 100 g and per portion values on labels.'],
  cards: [
    ['Five food groups of the Eatwell Guide?', 'Fruit & veg; potatoes, bread, rice, pasta & starchy carbs; beans, pulses, fish, eggs, meat & other proteins; dairy & alternatives; oils & spreads.'],
    ['What is biological value?', 'A measure of how well a protein supplies the essential amino acids the body needs.'],
    ['Two plant sources of HBV protein?', 'Soya and quinoa (also mycoprotein).'],
    ['Limiting amino acid in cereals? In pulses?', 'Cereals: lysine. Pulses: methionine.'],
    ['What is protein complementation?', 'Combining LBV proteins so together they supply all essential amino acids (e.g. beans on toast).'],
    ['Define glycaemic index.', 'Ranking (0–100) of carbohydrate foods by how fast they raise blood glucose compared with glucose.'],
    ['Low-GI threshold?', '55 or less.'],
    ['Define nutrient density.', 'The amount of nutrients a food provides relative to its energy content.'],
    ['Give two energy-dense, nutrient-poor foods.', 'Sugary drinks, sweets, crisps, pastries, alcohol.'],
    ['Formula to scale a nutrient from per-100 g data?', 'Mass used ÷ 100 × value per 100 g.'],
    ['Adult reference intake for energy?', '8400 kJ / 2000 kcal.'],
    ['Adult reference intake for fat and saturates?', 'Fat 70 g; saturates 20 g.'],
    ['Name four resources for finding nutritional values.', 'Nutritional analysis software, food labels, apps, recipes, websites (e.g. CoFID).'],
    ['Fruit and vegetable portion size?', '80 g (dried fruit 30 g; juice max 150 ml counts once).']
  ],
  quiz: [
    { q: 'Which is a high biological value protein from a plant?', o: ['Soya', 'Wheat', 'Lentils', 'Rice'], x: 'Soya contains all essential amino acids in useful proportions.' },
    { q: 'Beans on toast is an example of…', o: ['protein complementation', 'fortification', 'a high-GI meal', 'nutrient density'], x: 'Two LBV proteins with different limiting amino acids.' },
    { q: 'A food with GI 40 is…', o: ['low GI', 'medium GI', 'high GI', 'not a carbohydrate'], x: 'Low GI ≤ 55.' },
    { q: 'Which food has the highest GI?', o: ['Cornflakes', 'Lentils', 'Porridge oats', 'Milk'], x: 'Highly processed cereals with gelatinised starch digest quickly.' },
    { q: 'About what fraction of the Eatwell Guide is fruit and vegetables?', o: ['Just over a third', 'A tenth', 'Half', 'A twentieth'], x: 'About 40%.' },
    { q: 'Nutrient-dense foods provide…', o: ['many nutrients relative to their energy', 'lots of energy and few nutrients', 'only protein', 'only fat'], x: 'e.g. leafy vegetables, fish, pulses.' },
    { q: 'A recipe uses 250 g of flour containing 10 g protein per 100 g. Protein from the flour =', o: ['25 g', '2.5 g', '250 g', '40 g'], x: '250 ÷ 100 × 10 = 25 g.' },
    { q: 'Adult reference intake for salt is…', o: ['6 g', '20 g', '2.5 g', '70 g'], x: 'RI for salt is 6 g.' },
    { q: 'Which is NOT a resource for calculating nutritional value?', o: ['A Gantt chart', 'Nutritional analysis software', 'Food labels', 'CoFID website'], x: 'A Gantt chart is a planning tool.' },
    { q: 'The limiting amino acid in wheat is…', o: ['lysine', 'methionine', 'glucose', 'tryptophan'], x: 'Cereals are low in lysine.' },
    { q: 'GI is lowered when a carbohydrate is eaten with…', o: ['fat, protein or fibre', 'pure glucose', 'more cooking', 'more processing'], x: 'These slow stomach emptying and digestion.' },
    { q: 'A product has 15 g fat per portion. %RI for fat =', o: ['21%', '15%', '43%', '7%'], x: '15 ÷ 70 × 100 = 21%.' }
  ],
  exam: [
    { q: 'Define the term nutrient density. [2]', m: 2, ms: ['the amount of nutrients / vitamins / minerals in a food', 'in relation to its energy content / per kcal'] },
    { q: 'Explain the term glycaemic index and why low-GI foods are recommended for people with Type 2 diabetes. [4]', m: 4, ms: ['GI ranks carbohydrate foods by the rate they raise blood glucose', 'compared with glucose (GI 100) / scale 0–100', 'low-GI foods are digested and absorbed slowly — gradual rise in blood glucose', 'avoids spikes / helps blood glucose control / less insulin demand / improves satiety'] },
    { q: 'A vegetable chilli serving 6 contains 400 g kidney beans (7 g protein/100 g), 300 g rice (2.6 g/100 g) and 500 g vegetables (1.5 g/100 g). Calculate the protein per portion. Show your working. [3]', m: 3, ms: ['beans 28 g; rice 7.8 g; vegetables 7.5 g', 'total 43.3 g', 'per portion 7.2 g (7.21) — accept 7.2 g'] },
    { q: 'Evaluate the suitability of a plant-based diet for meeting the protein needs of an adolescent. [8]', m: 8, ms: ['adolescents need protein for rapid growth / puberty (≈ 0.75–0.85 g/kg + growth)', 'most plant proteins are LBV — lack one or more essential amino acids', 'soya, quinoa, mycoprotein are HBV', 'protein complementation across the day meets needs (cereal + pulse)', 'plant foods bring fibre, lower saturated fat — health benefits', 'plant protein less digestible / larger volumes needed — may be hard to eat enough', 'associated nutrients at risk: iron, zinc, B12, calcium, iodine, omega-3 — may need fortified foods/supplements', 'reasoned conclusion: suitable if well planned'] }
  ],
  sims: ['eatwell', 'gi', 'label'], gens: ['nutr1', 'nutr2', 'ri1', 'gl1']
});
