/* ==========================================================
   UNIT 1 · NUTRITIONAL NEEDS ACROSS THE LIFE STAGES (part 1)
   1.1 Understand properties of nutrients (1.1.1–1.1.4)
   Aligned with the specification and WJEC's Unit 1 learner notes.
   ========================================================== */
TOPICS.push({
  id: '1.1', unit: '1', ref: '1.1.1–1.1.2', title: 'Carbohydrates', short: 'Sugars, oligosaccharides, starch, dextrin, fibre, glycogen',
  summary: 'Carbohydrates are made by plants in photosynthesis from carbon, hydrogen and oxygen. They are classified by the number of sugar units: monosaccharides, disaccharides, oligosaccharides and polysaccharides. Learn their structures, the bonds that join them, how the body uses them for energy and why fibre matters.',
  spec: [
    'Carbohydrates contain carbon, hydrogen and oxygen; plants make them by photosynthesis',
    'Monosaccharides (single units): glucose, fructose, galactose',
    'Disaccharides (two units): sucrose, lactose, maltose — formed by condensation, broken by hydrolysis (glycosidic bond)',
    'Oligosaccharides (3–10 units): raffinose, stachyose, verbascose',
    'Polysaccharides: starch (amylose and amylopectin), dextrin, cellulose, pectin, glycogen',
    'Dietary fibre (NSP): soluble and insoluble',
    'Glycogen: structure, glycogenesis and glycogenolysis',
    'Functions of carbohydrates: energy (4 kcal/g), energy storage, protein sparing, building macromolecules, fibre for gut health',
    'Know the chemical terms and models for carbohydrates'
  ],
  learn: [
    { h: 'Where carbohydrates come from and how they are classified', html: `
<p>Carbohydrates contain <b>carbon, hydrogen and oxygen</b>. Plants make them by <b>photosynthesis</b>, using light energy to combine carbon dioxide and water: $6"CO"_2 + 6"H"_2"O" → "C"_6"H"_12"O"_6 + 6"O"_2$. The energy the plant “traps” is released when we respire the glucose.</p>
<div class="box tip"><b class="lbl">Use the Greek prefixes</b><p><b>mono</b> = one · <b>di</b> = two · <b>oligo</b> = a few · <b>poly</b> = many · <b>saccharide</b> = sugar (from <i>sakkharon</i>).</p></div>
<div class="tbl"><table><tr><th>Group</th><th>Sugar units</th><th>Named examples</th><th>Properties</th></tr>
<tr><td><b>Monosaccharides</b></td><td>1</td><td>glucose, fructose, galactose</td><td>sweet, soluble, absorbed without digestion</td></tr>
<tr><td><b>Disaccharides</b></td><td>2</td><td>sucrose, lactose, maltose</td><td>sweet, soluble, digested quickly</td></tr>
<tr><td><b>Oligosaccharides</b></td><td>3–10</td><td>raffinose, stachyose, verbascose</td><td>mostly soluble, not digested — soluble fibre and prebiotics</td></tr>
<tr><td><b>Polysaccharides</b></td><td>10+ (often thousands)</td><td>starch, dextrin, cellulose, pectin, glycogen</td><td>not sweet, mostly insoluble, release energy slowly (starch)</td></tr></table></div>
<p>“Simple” carbohydrates (sugars) are mono- and disaccharides; “complex” carbohydrates are oligo- and polysaccharides.</p>` },
    { h: 'Monosaccharides', html: `
[[d:glucose]]
<ul><li><b>Glucose</b> — the body’s main energy source; all digestible carbohydrates are converted to or broken down into glucose. Found in fruit, honey, sweetcorn. A six-membered (hexose) ring; exists as <b>α and β forms</b> (one –OH group points a different way).</li>
<li><b>Fructose</b> — fruit, honey, corn syrup; the sweetest sugar; a five-membered ring.</li>
<li><b>Galactose</b> — found naturally in mammalian milk as part of lactose; six-membered ring.</li></ul>
<p>All three have the formula $"C"_6"H"_12"O"_6$ — they are <b>isomers</b>. The general formula for monosaccharides is $("CH"_2"O")_n$.</p>` },
    { h: 'Disaccharides: condensation and hydrolysis', html: `
[[d:condense]]
<p>Two monosaccharides join in a <b>condensation reaction</b>: one molecule of <b>water is lost</b> and a <b>glycosidic bond</b> forms. Adding water back breaks the bond — <b>hydrolysis</b>, the reaction digestive enzymes catalyse.</p>
<div class="tbl"><table><tr><th>Disaccharide</th><th>Units</th><th>Sources</th><th>Enzyme</th></tr>
<tr><td>Sucrose</td><td>glucose + fructose</td><td>table sugar, sugar cane, sugar beet</td><td>sucrase</td></tr>
<tr><td>Lactose</td><td>glucose + galactose</td><td>milk and dairy products</td><td>lactase</td></tr>
<tr><td>Maltose</td><td>glucose + glucose</td><td>malted cereals and malted drinks; produced when starch is digested</td><td>maltase</td></tr></table></div>` },
    { h: 'Oligosaccharides', html: `
<p>Oligosaccharides contain <b>3–10</b> sugar units. The raffinose family matters most for health:</p>
<ul><li><b>Raffinose</b> (trisaccharide) = galactose + glucose + fructose — legumes, whole grains, Brussels sprouts, broccoli, asparagus.</li>
<li><b>Stachyose</b> (tetrasaccharide) = raffinose + one more galactose — green beans, soya beans, peas, peanuts.</li>
<li><b>Verbascose</b> (pentasaccharide) = stachyose + one more galactose — chickpeas, kidney beans, lentils, black beans.</li></ul>
<p>Humans cannot digest them, so they reach the colon, where gut bacteria <b>ferment</b> them. This produces gas (flatulence) but also beneficial <b>short-chain fatty acids (SCFAs)</b> — they act as <b>soluble fibre</b> and <b>prebiotics</b>. Other sources include alliums (onions, garlic, leeks) and whole grains.</p>` },
    { h: 'Polysaccharides: starch and dextrin', html: `
[[d:starch]]
<p>Polysaccharides are long chains (almost always of glucose) joined by glycosidic bonds. They are not sweet — the molecules are too large to fit sweet taste receptors.</p>
<p><b>Starch</b> is the plant energy store (seeds, grains, roots, tubers): cereals, potatoes, rice, flour, bread. It is a mixture of two polymers of α-glucose:</p>
<ul><li><b>Amylose</b> (about 20–25%) — straight chains with 1–4 glycosidic bonds, coiled into a helix.</li>
<li><b>Amylopectin</b> (about 70–80%) — 1–4 chains with a 1–6 branch about every 20 glucose units. Branching makes it more water-soluble, easier to digest and more viscous — better at thickening sauces and setting gels.</li></ul>
<p><b>Dextrin</b> forms when starch is exposed to <b>dry heat</b>: the long chains are broken into shorter ones (<b>dextrinisation</b>), giving the brown colour, sweeter taste and crisp surface of toast, pastry and cake crusts. <b>Maltodextrin</b> is made under controlled conditions with enzymes or acid — soluble but not sweet, used as a thickener or to add energy. <b>Resistant dextrin</b> resists digestion and acts as a prebiotic soluble fibre.</p>` },
    { h: 'Cellulose, pectin and dietary fibre', html: `
<p><b>Cellulose</b> is made of β-glucose joined by β-glycosidic bonds in long, straight, unbranched chains — strong enough to support plant stems. Humans do not make <b>cellulase</b>, so it cannot be digested (grazing animals use gut bacteria to do it). It is <b>insoluble fibre</b>.</p>
<p><b>Pectin</b> is a complex, flexible web of sugar chains in plant cell walls, especially apples, citrus fruit, plums and root vegetables. With the right <b>temperature, acid (pH) and sugar level</b> it forms a gel — this is how jams, jellies and marmalades set. Low-pectin fruits are combined with high-pectin ones (blackberry and apple) or commercial pectin is added. Pectin is <b>soluble fibre</b> and a prebiotic.</p>
<p><b>Dietary fibre = non-starch polysaccharide (NSP).</b> It is a carbohydrate but is not digested or absorbed, so strictly it is not a nutrient.</p>
<div class="tbl"><table><tr><th></th><th>Soluble fibre</th><th>Insoluble fibre</th></tr>
<tr><td>Examples</td><td>most oligosaccharides, pectin, resistant dextrin, gums, beta-glucans</td><td>cellulose</td></tr>
<tr><td>Sources</td><td>oats, barley, nuts, seeds, beans, lentils, citrus fruit, apples, many vegetables</td><td>whole grains, bran, vegetables and potatoes with skins on</td></tr>
<tr><td>Action</td><td>absorbs water to form a <b>gel</b>; traps and lowers <b>LDL cholesterol</b>; slows digestion and glucose release; prebiotic</td><td>absorbs water and adds <b>bulk</b>; stimulates peristalsis; “sweeps” waste through; prevents constipation</td></tr></table></div>
<p>Both promote <b>satiety</b> and gut health. UK adults are advised to eat <b>30 g of fibre a day</b>.</p>` },
    { h: 'Glycogen', html: `
[[d:glycogen]]
<p><b>Glycogen</b> is the only polysaccharide made by animals and humans; it is not found in foods. It is stored as granules in the <b>liver</b> and <b>muscles</b>. Its structure is like a tree: a protein core, <b>glycogenin</b>, with glucose chains branching every <b>8–10</b> units — even more branched than amylopectin — so glucose can be released very quickly, e.g. during high-intensity exercise. A granule holds 30 000–50 000 glucose units.</p>
<ul><li><b>Glycogenesis</b> — making glycogen from glucose (glycogenin starts the chain, <b>glycogen synthase</b> extends and branches it); promoted by <b>insulin</b>.</li>
<li><b>Glycogenolysis</b> — breaking glycogen back to glucose when blood glucose falls; triggered by <b>glucagon</b> and <b>adrenaline (epinephrine)</b>.</li></ul>` },
    { h: 'Functions of carbohydrates', html: `
<ul><li><b>Energy</b> — the body’s primary fuel, <b>4 kcal (17 kJ) per gram</b>. The brain and nerves rely heavily on glucose. About <b>50%</b> of daily energy should come from starchy carbohydrates (Eatwell Guide).</li>
<li><b>Energy storage</b> — excess glucose is stored as glycogen; when stores are full, the liver converts the rest to fat (<b>lipogenesis</b>).</li>
<li><b>Protein sparing</b> — if carbohydrate and fat stores run low, the body breaks down protein to make glucose (<b>gluconeogenesis</b>). Eating enough carbohydrate “spares” protein for growth and repair.</li>
<li><b>Fibre, micronutrients and phytochemicals</b> — wholegrain starches supply fibre, iron, B vitamins (thiamin, niacin, folate), vitamin E, magnesium, zinc.</li>
<li><b>Building macromolecules</b> — sugars form part of DNA and RNA and carbohydrate markers in the immune system.</li></ul>` }
  ],
  eqs: [['6"CO"_2 + 6"H"_2"O" → "C"_6"H"_12"O"_6 + 6"O"_2', 'photosynthesis'], ['"carbohydrate" = 4 "kcal/g" = 17 "kJ/g"', 'energy value']],
  worked: [
    { q: 'Explain how a molecule of lactose is formed and how it is broken down in the body. (4 marks)', s: ['Lactose is a disaccharide made from one glucose and one galactose unit.', 'They join by a condensation reaction: a molecule of water is lost and a glycosidic bond forms.', 'In the small intestine (jejunum) the brush-border enzyme lactase breaks the bond by hydrolysis — water is added.', 'Glucose and galactose are released and absorbed through the ileum into the blood.'], a: 'Condensation forms it; lactase hydrolyses it to glucose + galactose.' },
    { q: 'Compare the structures of amylose, amylopectin and glycogen. (4 marks)', s: ['All three are polymers of α-glucose joined by glycosidic bonds.', 'Amylose is unbranched (1–4 bonds only) and coils into a helix.', 'Amylopectin has 1–4 chains with 1–6 branches about every 20 glucose units.', 'Glycogen is more highly branched (every 8–10 units) around a glycogenin protein core, so glucose can be released faster; it is the animal store, whereas amylose and amylopectin make up plant starch.'], a: 'Same monomer; branching increases amylose → amylopectin → glycogen.' }
  ],
  pitfalls: ['Confusing monosaccharides (single units) with disaccharides (two units).', 'Saying lactose is glucose + fructose — that is sucrose.', 'Saying condensation adds water — it removes water; hydrolysis adds it.', 'Stating that carbohydrates are absorbed before being broken down, or absorbed in the stomach.', 'Confusing glycogen (the storage polysaccharide) with glucagon (the hormone).', 'Describing fibre as a source of energy — human enzymes cannot digest NSP.'],
  cards: [
    ['Elements in carbohydrates?', 'Carbon, hydrogen and oxygen.'],
    ['How do plants make carbohydrates?', 'Photosynthesis: CO₂ + water → glucose + oxygen, using light energy.'],
    ['Three monosaccharides?', 'Glucose, fructose, galactose.'],
    ['Three disaccharides and their units?', 'Sucrose = glucose + fructose; lactose = glucose + galactose; maltose = glucose + glucose.'],
    ['Name the three raffinose-family oligosaccharides.', 'Raffinose (3 units), stachyose (4), verbascose (5).'],
    ['Five main polysaccharides?', 'Starch, dextrin, cellulose, pectin, glycogen.'],
    ['What is dextrinisation?', 'Dry heat breaks starch into shorter dextrin chains — browning, sweeter taste, crisp surface (toast).'],
    ['Amylose vs amylopectin?', 'Amylose: straight 1–4 chains (~20–25%). Amylopectin: branched with 1–6 bonds (~70–80%).'],
    ['Why can’t humans digest cellulose?', 'We lack the enzyme cellulase to break its β-glycosidic bonds.'],
    ['What does pectin need to form a gel?', 'The right temperature, acid (pH) and sugar concentration.'],
    ['Glycogenesis vs glycogenolysis?', 'Glycogenesis: making glycogen from glucose. Glycogenolysis: breaking it down to release glucose.'],
    ['What is glycogenin?', 'The protein core that starts a glycogen molecule.'],
    ['Soluble fibre: three effects.', 'Forms a gel, lowers LDL cholesterol, slows glucose release, acts as a prebiotic.'],
    ['Insoluble fibre: main effect.', 'Adds bulk, stimulates peristalsis, prevents constipation.'],
    ['What is protein sparing?', 'Enough carbohydrate for energy means protein is not broken down (gluconeogenesis) and can be used for growth and repair.'],
    ['Energy in 1 g carbohydrate?', '4 kcal (17 kJ).'],
    ['What is lipogenesis?', 'Conversion of excess glucose to fat in the liver once glycogen stores are full.']
  ],
  quiz: [
    { q: 'Which is a monosaccharide?', o: ['Galactose', 'Lactose', 'Maltose', 'Raffinose'], x: 'Galactose is a single sugar unit.' },
    { q: 'Sucrose is made from…', o: ['glucose + fructose', 'glucose + galactose', 'glucose + glucose', 'fructose + galactose'], x: 'Sucrose = glucose + fructose.' },
    { q: 'Verbascose contains how many sugar units?', o: ['5', '3', '2', '10'], x: 'Raffinose 3, stachyose 4, verbascose 5.' },
    { q: 'When two monosaccharides join, the reaction…', o: ['removes a molecule of water', 'adds a molecule of water', 'releases carbon dioxide', 'needs oxygen'], x: 'Condensation, forming a glycosidic bond.' },
    { q: 'The browning of toast is caused by…', o: ['dextrinisation of starch', 'gelatinisation of starch', 'caramelisation of cellulose', 'hydrolysis of lactose'], x: 'Dry heat breaks starch into dextrins.' },
    { q: 'Amylopectin differs from amylose because it…', o: ['is branched with 1–6 glycosidic bonds', 'is made of fructose', 'is a disaccharide', 'is indigestible'], x: 'Branches roughly every 20 glucose units.' },
    { q: 'Which statement about glycogen is correct?', o: ['It has a glycogenin protein core and branches every 8–10 glucose units', 'It is a plant storage carbohydrate found in potatoes', 'It is a type of dietary fibre', 'It is made of β-glucose'], x: 'The animal energy store in liver and muscle.' },
    { q: 'Which hormone triggers glycogenolysis when blood glucose falls?', o: ['Glucagon (and adrenaline)', 'Insulin', 'Oestrogen', 'Thyroxine'], x: 'Insulin promotes glycogen formation instead.' },
    { q: 'Which is insoluble fibre?', o: ['Cellulose', 'Pectin', 'Resistant dextrin', 'Raffinose'], x: 'The others are soluble fibres.' },
    { q: 'Soluble fibre helps lower blood cholesterol by…', o: ['trapping cholesterol in the gel it forms', 'adding bulk to stools', 'raising blood glucose', 'digesting fat'], x: 'LDL cholesterol is trapped and less is absorbed.' },
    { q: 'Pectin is important in food because it…', o: ['forms gels that set jam', 'browns bread', 'emulsifies oil', 'makes bread rise'], x: 'Needs sugar, acid and heat to set.' },
    { q: 'When glycogen stores are full, excess glucose is…', o: ['converted to fat in the liver (lipogenesis)', 'excreted in sweat', 'turned into protein', 'stored as cellulose'], x: 'Lipogenesis.' },
    { q: 'Carbohydrates provide how much energy per gram?', o: ['4 kcal', '9 kcal', '7 kcal', '2 kcal'], x: '4 kcal (17 kJ).' },
    { q: 'Protein sparing means…', o: ['enough carbohydrate prevents protein being used for energy', 'eating less protein', 'storing protein as glycogen', 'combining two plant proteins'], x: 'Otherwise gluconeogenesis breaks protein down.' }
  ],
  exam: [
    { q: 'Name the two monosaccharides that make up sucrose. [2]', m: 2, ms: ['glucose', 'fructose'] },
    { q: 'Explain the difference between soluble and insoluble dietary fibre, giving a food source of each. [4]', m: 4, ms: ['soluble fibre absorbs water to form a gel / lowers LDL / slows glucose release / prebiotic', 'e.g. oats / barley / pulses / apples / citrus fruit', 'insoluble fibre does not dissolve; adds bulk / stimulates peristalsis / prevents constipation', 'e.g. wholegrains / bran / skins of fruit, vegetables and potatoes'] },
    { q: 'Describe the structure of starch. [4]', m: 4, ms: ['polysaccharide / polymer of (α-)glucose units', 'joined by glycosidic bonds (formed by condensation)', 'amylose — straight / unbranched 1–4 chains, helical, ~20–25%', 'amylopectin — branched with 1–6 bonds, ~70–80%'] },
    { q: 'Explain how the body stores carbohydrate and releases it when needed. [5]', m: 5, ms: ['excess glucose converted to glycogen — glycogenesis', 'in the liver and muscles', 'branched structure / glycogenin core allows rapid release', 'when blood glucose falls, glucagon / adrenaline trigger glycogenolysis → glucose', 'when glycogen stores are full, excess converted to fat (lipogenesis)'] },
    { q: 'Evaluate the importance of dietary fibre in the diet. [6]', m: 6, ms: ['insoluble fibre adds bulk, speeds transit, prevents constipation', 'reduces risk of diverticular disease / haemorrhoids', 'soluble fibre lowers LDL cholesterol → lower CVD risk', 'slows glucose absorption — helps manage type 2 diabetes', 'prebiotic — feeds gut bacteria, SCFAs, gut health; satiety aids weight control', 'most adults eat well below 30 g; too much too fast causes bloating / reduces mineral absorption (phytates) — reasoned conclusion'] }
  ],
  sims: ['sugars'], gens: []
});

TOPICS.push({
  id: '1.2', unit: '1', ref: '1.1.1–1.1.2', title: 'Proteins', short: 'Amino acids, peptide bonds, structure, named proteins, functions',
  summary: 'Proteins are built from amino acids joined by peptide bonds and folded into primary, secondary, tertiary and quaternary structures. Learn the essential amino acids, fibrous and globular proteins, the named examples (actin, collagen, haemoglobin, immunoglobulins) and what proteins do in the body.',
  spec: [
    'Proteins contain carbon, hydrogen, oxygen and nitrogen; some also sulphur and phosphorus (N-CHOPS)',
    'Amino acids: amino group, carboxyl group and R group; 20 standard amino acids',
    'Essential (indispensable), non-essential (dispensable) and conditionally essential amino acids',
    'Dipeptides and polypeptides formed by condensation, creating covalent peptide bonds',
    'Primary, secondary, tertiary and quaternary structure; fibrous and globular proteins',
    'Examples: actin, collagen, haemoglobin, immunoglobulins',
    'Functions: growth, maintenance and repair; enzymes, hormones, antibodies; transport; secondary energy source (4 kcal/g)'
  ],
  learn: [
    { h: 'Amino acids', html: `
[[d:aminoacid]]
<p>Proteins contain <b>carbon, hydrogen, oxygen and nitrogen</b>, and some also contain <b>sulphur</b> and <b>phosphorus</b> — remember <b>N-CHOPS</b>.</p>
<p>They are chains of <b>amino acids</b>. There are <b>20</b> standard amino acids. Each has the same <b>amino group</b> (–NH₂) and <b>carboxyl group</b> (–COOH) attached either side of a central carbon, plus a different <b>R group</b> that gives it its properties.</p>
<div class="tbl"><table><tr><th>Essential (9) — must come from food</th><th>Non-essential — the body can make them</th></tr>
<tr><td>histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, valine</td><td>alanine, asparagine, aspartic acid, cysteine, glutamic acid, glutamine, glycine, proline, serine, tyrosine</td></tr></table></div>
<p><b>Conditionally essential</b>: <b>arginine</b> — essential for children and adolescents, who are growing too fast to make enough. (Histidine has been classed as essential for adults since research in the late 1980s–1990s.)</p>
<div class="box tip"><b class="lbl">Exam tip</b><p>Learn at least one essential, one non-essential and the conditionally essential amino acid to use as examples.</p></div>` },
    { h: 'Peptide bonds and polypeptides', html: `
<p>Two amino acids join in a <b>condensation reaction</b>: the carboxyl group of one reacts with the amino group of the next, a <b>water molecule is lost</b> and a <b>covalent peptide bond</b> forms. Two amino acids = a <b>dipeptide</b>; many = a <b>polypeptide</b>. Digestion reverses this by <b>hydrolysis</b>.</p>
<div class="box warn"><b class="lbl">Pitfall</b><p>The bonds joining amino acids are covalent <b>peptide</b> bonds — not hydrogen bonds. Hydrogen bonds hold the folded shape.</p></div>` },
    { h: 'The four levels of structure', html: `
[[d:proteinlevels]]
<div class="tbl"><table><tr><th>Level</th><th>Description</th></tr>
<tr><td><b>Primary</b></td><td>the sequence of amino acids in one polypeptide chain</td></tr>
<tr><td><b>Secondary</b></td><td>the chain coils into an <b>α-helix</b> or folds into a <b>β-pleated sheet</b>, held by hydrogen bonds between amino and carboxyl groups</td></tr>
<tr><td><b>Tertiary</b></td><td>further folding into a precise 3-D shape, stabilised by hydrogen bonds, ionic bonds, <b>disulphide bridges</b>, hydrophobic interactions and Van der Waals forces between R groups — essential for enzymes</td></tr>
<tr><td><b>Quaternary</b></td><td>two or more polypeptides combined, sometimes with non-protein parts (e.g. the iron-containing haem in haemoglobin)</td></tr></table></div>
<p>Only tertiary and quaternary structures are called proteins. Heat, acid and mechanical action break the weaker bonds and <b>denature</b> proteins — central to cooking and digestion.</p>
<div class="tbl"><table><tr><th></th><th>Fibrous proteins</th><th>Globular proteins</th></tr>
<tr><td>Shape and solubility</td><td>long, insoluble fibres</td><td>compact, spherical, soluble</td></tr>
<tr><td>Role</td><td>structure and protection</td><td>metabolic roles</td></tr>
<tr><td>Examples</td><td>collagen, keratin, fibrin (clots)</td><td>haemoglobin, insulin, enzymes, myoglobin, albumin</td></tr></table></div>` },
    { h: 'The named proteins', html: `
<div class="tbl"><table><tr><th>Protein</th><th>Structure</th><th>Function</th></tr>
<tr><td><b>Actin</b></td><td>globular G-actin units polymerise into filamentous F-actin (a double-helix microfilament)</td><td>cell cytoskeleton, cell movement; with <b>myosin</b> makes muscle contract — a main protein in meat</td></tr>
<tr><td><b>Collagen</b></td><td>fibrous — three polypeptide chains wound into a <b>triple helix</b></td><td>tensile strength of tendons, ligaments, bone, cartilage and skin; turns into <b>gelatine</b> in long, slow, moist cooking</td></tr>
<tr><td><b>Haemoglobin</b></td><td>globular, quaternary — four subunits, each with a haem group containing an <b>iron</b> atom</td><td>reversibly binds and carries <b>oxygen</b> from lungs to tissues</td></tr>
<tr><td><b>Immunoglobulins</b> (antibodies)</td><td>large Y-shaped glycoproteins of four polypeptide chains</td><td>identify and neutralise antigens (bacteria, viruses); IgE is involved in allergy</td></tr></table></div>
<p>Others worth knowing: <b>keratin</b> (hair, nails, skin), <b>insulin</b> and <b>glucagon</b> (hormones), <b>albumin</b> (transports substances in blood, fluid balance), <b>ferritin</b> (stores iron), <b>myoglobin</b> (stores oxygen in muscle), digestive <b>enzymes</b>.</p>` },
    { h: 'Functions of protein', html: `
<ul><li><b>Growth</b> — amino acids build new cells and tissues; collagen builds bone, skin and connective tissue.</li>
<li><b>Maintenance</b> — replacing cells that die and continuously replenishing enzymes, hormones and antibodies.</li>
<li><b>Repair</b> — after illness, injury, surgery or intense exercise.</li>
<li><b>Enzymes</b> catalyse reactions (digestion, energy production, clotting); <b>hormones</b> such as insulin and glucagon regulate blood glucose; <b>immunoglobulins</b> fight infection.</li>
<li><b>Transport</b> — haemoglobin carries oxygen; lipoproteins (LDL, HDL) carry cholesterol.</li>
<li><b>Secondary energy source</b> — <b>4 kcal (17 kJ) per gram</b>, used when carbohydrate and fat are insufficient. Protein should provide no more than about <b>15%</b> of energy.</li></ul>` }
  ],
  eqs: [['"protein" = 4 "kcal/g" = 17 "kJ/g"', 'energy value']],
  worked: [
    { q: 'Describe how a dipeptide is formed. (3 marks)', s: ['Two amino acids react in a condensation reaction.', 'The carboxyl group of one amino acid reacts with the amino group of the other and a molecule of water is lost.', 'A covalent peptide bond forms between them, making a dipeptide.'], a: 'Condensation between –COOH and –NH₂; water lost; peptide bond.' },
    { q: 'Explain why haemoglobin is described as a quaternary, globular protein. (3 marks)', s: ['It is made of four polypeptide chains (subunits) combined — quaternary structure.', 'Each subunit also contains a non-protein haem group with an iron atom.', 'It is compact, spherical and soluble with a metabolic role (carrying oxygen) — globular rather than fibrous.'], a: 'Four subunits + haem; compact, soluble, metabolic role.' }
  ],
  pitfalls: ['Forgetting that amino acids have both an amino and a carboxyl group, either side of the R group.', 'Calling the bonds between amino acids hydrogen bonds — they are covalent peptide bonds.', 'Saying the body makes essential amino acids — “essential” means they must come from food.', 'Stating that adults need extra protein “for growth” — they need it for maintenance and repair.', 'Confusing haemoglobin (a protein) with iron (the mineral in it).'],
  cards: [
    ['Elements in protein?', 'C, H, O, N — sometimes S and P (N-CHOPS).'],
    ['Three parts of an amino acid?', 'Amino group, carboxyl group, R group (plus central carbon).'],
    ['How many essential amino acids for adults?', 'Nine.'],
    ['Name two essential amino acids.', 'e.g. lysine, leucine, methionine, tryptophan, valine, histidine…'],
    ['Conditionally essential amino acid?', 'Arginine — essential for children and adolescents.'],
    ['Bond joining amino acids?', 'Covalent peptide bond, formed by condensation.'],
    ['Primary structure?', 'The sequence of amino acids.'],
    ['Secondary structure?', 'α-helix or β-pleated sheet held by hydrogen bonds.'],
    ['Tertiary structure?', '3-D folding stabilised by H bonds, ionic bonds, disulphide bridges, hydrophobic interactions.'],
    ['Quaternary structure — example?', 'Two or more polypeptides combined, e.g. haemoglobin (four subunits + haem).'],
    ['Fibrous vs globular?', 'Fibrous: long, insoluble, structural (collagen, keratin). Globular: compact, soluble, metabolic (haemoglobin, insulin, enzymes).'],
    ['Structure and role of collagen?', 'Triple helix; strength in tendons, ligaments, bone, skin; becomes gelatine on slow moist cooking.'],
    ['Role of actin?', 'Microfilaments in cells; muscle contraction with myosin.'],
    ['Role of immunoglobulins?', 'Antibodies that identify and neutralise antigens.'],
    ['Maximum share of energy from protein?', 'About 15%.']
  ],
  quiz: [
    { q: 'Which element is present in protein but not in carbohydrate or fat?', o: ['Nitrogen', 'Carbon', 'Oxygen', 'Hydrogen'], x: 'The amino group contains nitrogen.' },
    { q: 'Amino acids are joined by…', o: ['covalent peptide bonds', 'hydrogen bonds', 'ester bonds', 'glycosidic bonds'], x: 'Formed by condensation.' },
    { q: 'Which is an essential amino acid?', o: ['Lysine', 'Alanine', 'Glycine', 'Serine'], x: 'The others can be made by the body.' },
    { q: 'Arginine is described as…', o: ['conditionally essential — needed from food in childhood and adolescence', 'always non-essential', 'a type of fatty acid', 'a disaccharide'], x: 'Growth outpaces the body’s ability to make it.' },
    { q: 'An α-helix is an example of…', o: ['secondary structure', 'primary structure', 'quaternary structure', 'a peptide bond'], x: 'Held by hydrogen bonds.' },
    { q: 'Which protein is a triple helix?', o: ['Collagen', 'Haemoglobin', 'Insulin', 'Albumin'], x: 'Three chains wound together.' },
    { q: 'Haemoglobin is best described as…', o: ['a globular, quaternary protein containing iron', 'a fibrous structural protein', 'a single polypeptide with no iron', 'an enzyme that digests fat'], x: 'Four subunits each with a haem group.' },
    { q: 'Which protein works with myosin to contract muscle?', o: ['Actin', 'Keratin', 'Ferritin', 'Collagen'], x: 'Actin forms microfilaments.' },
    { q: 'Immunoglobulins are…', o: ['Y-shaped antibodies', 'storage proteins for iron', 'structural proteins in hair', 'digestive enzymes'], x: 'They neutralise antigens.' },
    { q: 'Globular proteins are usually…', o: ['compact, soluble and metabolic', 'long, insoluble and structural', 'made of glucose', 'found only in plants'], x: 'e.g. enzymes, insulin, haemoglobin.' },
    { q: 'Protein should provide no more than about what share of daily energy?', o: ['15%', '50%', '35%', '5%'], x: 'Eatwell-based split ≈ 50% carbohydrate, 35% fat, 15% protein.' },
    { q: 'When amino acids join, a molecule of … is released.', o: ['water', 'carbon dioxide', 'oxygen', 'glucose'], x: 'Condensation.' }
  ],
  exam: [
    { q: 'State what is meant by an essential amino acid and name one. [2]', m: 2, ms: ['an amino acid that cannot be made by the body so must come from food', 'any of: histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, valine'] },
    { q: 'Describe the four levels of protein structure. [4]', m: 4, ms: ['primary: sequence of amino acids joined by peptide bonds', 'secondary: α-helix / β-pleated sheet held by hydrogen bonds', 'tertiary: 3-D folding stabilised by bonds between R groups (ionic, disulphide, hydrogen, hydrophobic)', 'quaternary: two or more polypeptides combined (e.g. haemoglobin)'] },
    { q: 'Compare the structure and function of collagen and haemoglobin. [4]', m: 4, ms: ['collagen: fibrous, triple helix, insoluble', 'collagen: strength / structure in tendons, bone, skin', 'haemoglobin: globular, quaternary, four subunits with iron-containing haem', 'haemoglobin: transports oxygen in red blood cells'] },
    { q: 'Discuss the functions of protein in the body. [6]', m: 6, ms: ['growth — building new cells / tissues', 'maintenance — replacing worn cells, enzymes, hormones, antibodies', 'repair after injury / illness / exercise', 'enzymes and hormones (e.g. insulin) regulate metabolism', 'immunoglobulins — immunity; transport (haemoglobin, lipoproteins)', 'secondary energy 4 kcal/g if carbohydrate / fat insufficient — not ideal; ≤15% energy'] }
  ],
  sims: ['protein'], gens: []
});

TOPICS.push({
  id: '1.3', unit: '1', ref: '1.1.1–1.1.2', title: 'Lipids', short: 'Glycerides, saturation, cis/trans, sterols, waxes, functions',
  summary: 'Lipids — fats, oils, sterols and waxes — are made of carbon, hydrogen and oxygen. Most dietary fat is triglyceride. Learn mono-, di- and triglycerides, saturated and unsaturated fatty acids, cis and trans isomers, cholesterol and the lipoproteins that carry it, phytosterols, ergosterol, waxes and the many functions of fat.',
  spec: [
    'Lipids contain carbon, hydrogen and oxygen; main groups: fats, oils, sterols, waxes',
    'Monoglycerides, diglycerides and triglycerides: glycerol + fatty acids joined by ester linkages (condensation)',
    'Saturated fatty acids (no C=C double bonds) and unsaturated fatty acids — monounsaturated and polyunsaturated',
    'Cis and trans fatty acids (geometric isomerism)',
    'Sterols: cholesterol, phytosterols (plant sterols and stanols), ergosterol; HDL and LDL',
    'Waxes: carnauba, beeswax, paraffin',
    'Functions: energy (9 kcal/g) and storage, insulation, protection, hormones, cell membranes, fat-soluble vitamins, essential fatty acids'
  ],
  learn: [
    { h: 'Glycerides', html: `
[[d:triglyceride]]
<p><b>Glycerol</b> is a small three-carbon alcohol that forms the “backbone”; <b>fatty acids</b> are long hydrocarbon chains. Fatty acids attach to glycerol by <b>condensation</b>, forming <b>ester linkages</b> (one water molecule lost per fatty acid).</p>
<div class="tbl"><table><tr><th>Glyceride</th><th>Structure</th><th>Role</th></tr>
<tr><td>Monoglyceride</td><td>glycerol + 1 fatty acid</td><td>small amounts in food; formed in digestion; <b>emulsifier</b></td></tr>
<tr><td>Diglyceride</td><td>glycerol + 2 fatty acids</td><td>emulsifier — mono- and diglycerides are <b>E471</b> on labels (bread, ice cream, margarine)</td></tr>
<tr><td>Triglyceride</td><td>glycerol + 3 fatty acids</td><td>the main form of fat in food and the body; energy store</td></tr></table></div>
<p>Fats are <b>solid</b> at room temperature (mostly animal: butter, lard, fat on meat); oils are usually <b>liquid</b> (mostly plant and fish). Lipids can also be classified as animal or plant, and <b>visible</b> (butter, fat on meat) or <b>invisible</b> (in cakes, cheese, nuts).</p>` },
    { h: 'Saturated and unsaturated fatty acids', html: `
[[d:fattyacids]]
<div class="tbl"><table><tr><th>Saturated</th><th>Unsaturated</th></tr>
<tr><td>“full” of hydrogen — <b>no C=C double bonds</b></td><td>hydrogen atoms missing — <b>at least one C=C double bond</b></td></tr>
<tr><td>straight chains pack tightly — can build up in blood vessels</td><td>bends (kinks) at double bonds — do not pack tightly</td></tr>
<tr><td>usually solid at room temperature; more shelf-stable</td><td>usually liquid; less shelf-stable (oxidise)</td></tr>
<tr><td>mostly animal sources; exceptions <b>coconut oil, palm oil, cocoa butter</b></td><td>mostly plants and oily fish</td></tr></table></div>
<ul><li><b>Monounsaturated</b> — one double bond: olive oil, avocado, nuts and nut oils, pumpkin seeds, rapeseed oil.</li>
<li><b>Polyunsaturated</b> — several double bonds: sunflower, corn, soya and flaxseed oils, walnuts, chia seeds, oily fish (salmon, mackerel, sardines, trout).</li></ul>
<p><b>Essential fatty acids</b> — <b>omega-3</b> and <b>omega-6</b> — cannot be made by the body; they are crucial for brain health and development.</p>` },
    { h: 'Cis and trans fatty acids', html: `
<p>Around a double bond the hydrogens can sit on the <b>same side</b> (<b>cis</b> — “s for same”) or <b>opposite sides</b> (<b>trans</b>).</p>
<ul><li><b>Cis</b> — most natural unsaturated fats; the chain bends.</li>
<li><b>Trans</b> — mostly made industrially by <b>hydrogenation</b>; the chain is straighter, so it behaves like saturated fat. Developed in 1901 as a cheap, shelf-stable alternative to butter and lard, trans fats were later linked to raised <b>LDL cholesterol</b> and are banned or restricted in many countries.</li></ul>` },
    { h: 'Sterols, cholesterol and lipoproteins', html: `
<p>There are three main sterols: <b>cholesterol</b>, <b>phytosterols</b> and <b>ergosterol</b>.</p>
<p><b>Cholesterol</b> has a steroid nucleus of four fused rings, a hydroxyl group and a hydrocarbon tail. It is <b>amphipathic</b> — one part <b>hydrophilic</b> (water-loving), one part <b>hydrophobic</b> (water-fearing). It sits in cell membranes controlling fluidity and is used to make hormones (testosterone, oestrogen, cortisol), vitamin D and bile. Because it cannot travel through watery blood, it “hitches a ride” on proteins as <b>lipoproteins</b>:</p>
<div class="tbl"><table><tr><th>HDL (high-density lipoprotein)</th><th>LDL (low-density lipoprotein)</th></tr>
<tr><td>collects excess cholesterol and takes it to the liver for removal — “healthier”</td><td>takes cholesterol from the liver to body cells; excess is deposited in artery walls</td></tr>
<tr><td>more protein than cholesterol</td><td>more cholesterol than protein; raised by saturated and trans fats</td></tr></table></div>
<p><b>Phytosterols</b> (plant <b>sterols and stanols</b>) are similar in shape to cholesterol and <b>block its absorption</b> in the intestine, lowering blood cholesterol — added to some spreads and yogurts. <b>Ergosterol</b> is the fungal sterol; UV light converts it to <b>vitamin D2</b>, so mushrooms grown under UV light are a source of vitamin D.</p>` },
    { h: 'Waxes', html: `
<p>Most natural waxes are <b>wax esters</b>: an ester bond links a long-chain fatty acid to an alcohol. They are not digested and have no nutritional value, but are used in food:</p>
<div class="tbl"><table><tr><th>Wax</th><th>Type</th><th>Use</th></tr>
<tr><td>Carnauba</td><td>plant; hard, high melting point</td><td>glossing agent and coating for sweets, glazes, fresh produce</td></tr>
<tr><td>Beeswax</td><td>animal</td><td>confectionery, chewing gum, glazes</td></tr>
<tr><td>Paraffin</td><td>synthetic (from petroleum)</td><td>food-grade coating on cheese and some sweets to extend shelf life</td></tr></table></div>` },
    { h: 'Functions of lipids', html: `
<ul><li><b>Energy</b> — the most energy-dense macronutrient: <b>9 kcal (37 kJ) per gram</b>. Excess is stored as triglyceride in adipose tissue — long-term energy storage.</li>
<li><b>Insulation</b> — subcutaneous fat (under the skin) keeps the body warm.</li>
<li><b>Protection</b> — visceral fat cushions organs such as the heart, liver and kidneys.</li>
<li><b>Fat-soluble vitamins</b> — lipids carry, help absorb and store vitamins A, D, E and K.</li>
<li><b>Hormones</b> — cholesterol is used to make testosterone, oestrogen and cortisol.</li>
<li><b>Cell membranes</b> and the <b>myelin sheath</b> around nerve cells.</li>
<li><b>Essential fatty acids</b> omega-3 and omega-6 for brain and eye development.</li></ul>
<p>No more than about <b>35%</b> of energy should come from fat, with saturated fat under <b>11%</b>.</p>` }
  ],
  eqs: [['"glycerol" + 3 "fatty acids" → "triglyceride" + 3"H"_2"O"', 'condensation (ester linkages)'], ['"fat" = 9 "kcal/g" = 37 "kJ/g"', 'energy value']],
  worked: [
    { q: 'Explain why olive oil is liquid at room temperature but butter is solid. (4 marks)', s: ['Olive oil is mainly monounsaturated; butter is mainly saturated.', 'Unsaturated fatty acids contain C=C double bonds, which (in the cis form) put bends in the chains.', 'Bent chains cannot pack closely, so the forces between molecules are weaker and the melting point is lower — below room temperature.', 'Saturated chains are straight and pack tightly, giving a higher melting point, so butter is solid.'], a: 'Kinked unsaturated chains pack loosely → lower melting point.' },
    { q: 'Explain the difference between HDL and LDL cholesterol. (4 marks)', s: ['Both are lipoproteins — cholesterol carried on protein in the blood.', 'HDL collects excess cholesterol from the blood and tissues and returns it to the liver for removal.', 'LDL carries cholesterol from the liver to body cells; in excess it is deposited in artery walls, contributing to atherosclerosis.', 'HDL contains more protein than cholesterol; LDL more cholesterol than protein — so HDL is considered the “healthier” form.'], a: 'HDL removes cholesterol; LDL delivers it and can block arteries.' }
  ],
  pitfalls: ['Mixing up the definitions: saturated = no double bonds; unsaturated = at least one double bond.', 'Confusing cis (same side, bent) with trans (opposite sides, straight).', 'Saying all plant fats are unsaturated — coconut oil, palm oil and cocoa butter are saturated.', 'Saying oils contain no fat — they provide the same 9 kcal/g.', 'Using 9 kJ for fat — it is 9 kcal or 37 kJ per gram.'],
  cards: [
    ['Elements in lipids?', 'Carbon, hydrogen, oxygen (much less oxygen than carbohydrates).'],
    ['Four main groups of lipids?', 'Fats, oils, sterols, waxes.'],
    ['What is a triglyceride?', 'Glycerol + three fatty acids joined by ester linkages.'],
    ['What is E471?', 'Mono- and diglycerides of fatty acids — emulsifiers.'],
    ['Saturated vs unsaturated?', 'Saturated: no C=C double bonds, straight. Unsaturated: at least one double bond, bent.'],
    ['Three plant sources of saturated fat?', 'Coconut oil, palm oil, cocoa butter.'],
    ['Two sources of polyunsaturated fat?', 'Sunflower oil, corn oil, walnuts, chia seeds, oily fish.'],
    ['Cis vs trans?', 'Cis: hydrogens on the same side, chain bends. Trans: opposite sides, straight chain — behaves like saturated fat.'],
    ['How are trans fats made?', 'Industrially by hydrogenation of oils.'],
    ['What does amphipathic mean?', 'One part hydrophilic (water-loving), one part hydrophobic (water-fearing).'],
    ['HDL vs LDL?', 'HDL removes excess cholesterol to the liver; LDL delivers cholesterol to cells and can block arteries.'],
    ['What do phytosterols do?', 'Block cholesterol absorption in the intestine, lowering blood cholesterol.'],
    ['What is ergosterol?', 'The fungal sterol; UV light converts it to vitamin D2.'],
    ['Three food waxes and a use of each?', 'Carnauba (glossing sweets), beeswax (confectionery), paraffin (cheese coating).'],
    ['Six functions of lipids?', 'Energy/storage, insulation, protection, fat-soluble vitamins, hormones, cell membranes/myelin (plus EFAs).'],
    ['Energy in 1 g of fat?', '9 kcal (37 kJ).']
  ],
  quiz: [
    { q: 'A triglyceride is made from…', o: ['glycerol and three fatty acids', 'three glucose molecules', 'glycerol and three amino acids', 'cholesterol and fatty acids'], x: 'Joined by ester linkages.' },
    { q: 'Mono- and diglycerides on a food label (E471) are used as…', o: ['emulsifiers', 'preservatives', 'sweeteners', 'colours'], x: 'They stop oil and water separating.' },
    { q: 'A polyunsaturated fatty acid has…', o: ['two or more C=C double bonds', 'no double bonds', 'exactly one double bond', 'a ring structure'], x: 'Poly = many.' },
    { q: 'Which is a plant source of saturated fat?', o: ['Palm oil', 'Olive oil', 'Rapeseed oil', 'Sunflower oil'], x: 'Coconut, palm and cocoa butter are the exceptions.' },
    { q: 'In a trans fatty acid, the hydrogens around the double bond are…', o: ['on opposite sides, giving a straighter chain', 'on the same side, giving a bend', 'absent', 'replaced by oxygen'], x: 'Trans behaves like saturated fat.' },
    { q: 'Trans fats are mainly produced by…', o: ['industrial hydrogenation', 'photosynthesis', 'fermentation', 'freezing'], x: 'Partial hydrogenation of oils.' },
    { q: 'HDL cholesterol…', o: ['carries excess cholesterol back to the liver', 'blocks arteries', 'is found only in plants', 'is a type of wax'], x: 'Often called “good” cholesterol.' },
    { q: 'Plant sterols and stanols lower blood cholesterol by…', o: ['blocking cholesterol absorption in the intestine', 'dissolving plaques', 'raising LDL', 'adding fibre'], x: 'They are structurally similar to cholesterol.' },
    { q: 'Mushrooms exposed to UV light are a source of…', o: ['vitamin D2 (from ergosterol)', 'vitamin C', 'omega-3', 'cholesterol'], x: 'Ergosterol → ergocalciferol.' },
    { q: 'Which wax is used to coat cheese?', o: ['Paraffin', 'Carnauba', 'Pectin', 'Lecithin'], x: 'Food-grade paraffin wax extends shelf life.' },
    { q: 'Fat stored around the internal organs is called…', o: ['visceral fat', 'subcutaneous fat', 'brown sugar', 'adipose protein'], x: 'It protects organs but excess is linked to disease.' },
    { q: 'Which is NOT a function of lipids?', o: ['Carrying oxygen in the blood', 'Insulation', 'Absorbing vitamins A, D, E and K', 'Making steroid hormones'], x: 'Haemoglobin carries oxygen.' },
    { q: 'Unsaturated fats are usually liquid at room temperature because…', o: ['bends in the chains stop them packing tightly', 'they contain more hydrogen', 'they have no glycerol', 'they are proteins'], x: 'Weaker forces between molecules.' }
  ],
  exam: [
    { q: 'Describe the structure of a triglyceride. [3]', m: 3, ms: ['one glycerol molecule', 'three fatty acids', 'joined by ester linkages / bonds formed by condensation (3 water released)'] },
    { q: 'Explain the difference between saturated and unsaturated fatty acids. Refer to their structure and properties. [4]', m: 4, ms: ['saturated: no carbon–carbon double bonds / full of hydrogen', 'unsaturated: one (mono) or more (poly) C=C double bonds', 'saturated chains straight — pack closely — solid at room temperature / higher melting point', 'unsaturated chains bent — pack loosely — liquid / lower melting point / less shelf-stable'] },
    { q: 'Explain why trans fats are considered harmful to health. [3]', m: 3, ms: ['made by hydrogenation — hydrogens on opposite sides of the double bond', 'straighter chains behave like saturated fat', 'raise LDL cholesterol → atherosclerosis / CHD risk'] },
    { q: 'Discuss whether all plant-based fats are healthier than animal fats. [6]', m: 6, ms: ['most plant oils (olive, rapeseed, sunflower) are mainly unsaturated', 'unsaturated fats lower LDL when they replace saturated fat', 'but coconut oil, palm oil and cocoa butter are highly saturated', 'processed plant fats may contain trans fats (hydrogenation)', 'some animal fats are beneficial — omega-3 in oily fish', 'all fats provide 9 kcal/g — excess of any contributes to obesity; reasoned conclusion'] }
  ],
  sims: ['fats'], gens: []
});

TOPICS.push({
  id: '1.4', unit: '1', ref: '1.1.1–1.1.2', title: 'Vitamins', short: 'Fat-soluble A, D, E, K; water-soluble B group and C',
  summary: 'Vitamins are organic micronutrients needed in milligrams or micrograms. Vitamins A, D, E and K are fat-soluble and can be stored; the B group and vitamin C are water-soluble and must be eaten regularly. Know each vitamin’s chemical name, key structural features, functions and sources.',
  spec: [
    'Micronutrients are needed in milligrams (mg) and micrograms (µg); vitamins are organic and can be damaged by heat',
    'Fat-soluble vitamins: vitamin A (retinol, carotenoids), vitamin D (calciferol: D2 ergocalciferol, D3 cholecalciferol), vitamin E (tocopherol), vitamin K (K1 phylloquinone, K2 menaquinone)',
    'Vitamin D activation: calcidiol (liver) and calcitriol (kidneys)',
    'Water-soluble vitamins: B1 thiamin, B2 riboflavin, B3 niacin, B6 pyridoxine, B9 folate/folic acid, B12 cobalamin, vitamin C ascorbic acid',
    'Functions and sources of each vitamin; antioxidant (ACE) vitamins; coenzymes'
  ],
  learn: [
    { h: 'What vitamins are', html: `
<p><b>Micronutrients</b> — vitamins, minerals and trace elements — are needed in small amounts (<b>mg</b> or <b>µg</b>) but are essential because the body cannot make (enough of) them. They do <b>not provide energy</b>, though several B vitamins help release it.</p>
<p><b>Vitamins</b> are <b>organic</b> compounds, so heat, light and oxygen can break them down. They are grouped by solubility:</p>
<div class="tbl"><table><tr><th>Fat-soluble: A, D, E, K (“DAKE”/“KADE”)</th><th>Water-soluble: B group and C</th></tr>
<tr><td>absorbed with dietary fat; stored in liver and fatty tissue; excess can build up (hypervitaminosis)</td><td>dissolve in water; generally not stored (except B12); needed regularly; lost by leaching and heat</td></tr></table></div>
<div class="box tip"><b class="lbl">Antioxidants</b><p>Vitamins <b>A (carotenoids), C and E</b> — the “ACE” vitamins — neutralise <b>free radicals</b> (unstable molecules that damage cells and are linked to CVD, cancer and ageing).</p></div>` },
    { h: 'Vitamin A (retinol)', html: `
<p><b>Structure</b>: retinol is an unsaturated alcohol with a long hydrocarbon chain (fat-soluble). Its <b>conjugated</b> double-bond system absorbs light — vital for vision; its <b>hydroxyl group</b> lets it convert to <b>retinal</b> (vision) and <b>retinoic acid</b> (gene expression). The <b>trans</b> form is most active. In plants vitamin A exists as <b>carotenoids</b> such as <b>beta-carotene</b>, converted to retinol when needed.</p>
<p><b>Functions</b>: vision in low light; maintains mucous membranes (nose, throat, lungs) that trap pathogens and helps make white blood cells; cell growth and development including fetal development; skin repair; organ linings; carotenoids are antioxidants.</p>
<p><b>Sources</b>: liver, eggs, butter, milk, oily fish; beta-carotene in carrots, papaya, cabbage, sweet potato, dark green leaves.</p>` },
    { h: 'Vitamin D (calciferol)', html: `
<ul><li><b>D2 ergocalciferol</b> — from plants and fungi.</li><li><b>D3 cholecalciferol</b> — animal foods, and made in the <b>skin</b> (epidermis) by <b>UVB</b> in sunlight.</li></ul>
<p>Vitamin D is derived from steroids (similar to cholesterol). It is only active after two <b>hydroxylations</b>:</p>
[[d:vitd]]
<ol><li><b>Liver</b>: cholecalciferol → <b>calcidiol</b> (the main circulating form, measured to check vitamin D status).</li><li><b>Kidneys</b>: calcidiol → <b>calcitriol</b>, the active form.</li></ol>
<p><b>Functions</b>: regulates absorption of <b>calcium and phosphorus</b> for mineralising bones and teeth (preventing rickets, osteomalacia, osteoporosis); muscle strength and balance (preventing falls); supports muscle mitochondria and prevents sarcopenia; immune modulator.</p>
<p><b>Sources</b>: sunlight (UK, April–September); oily fish, cod liver oil, eggs, fortified spreads and cereals, UV-grown mushrooms. UK advice: consider a <b>10 µg</b> supplement in autumn and winter (year-round for some groups).</p>` },
    { h: 'Vitamins E and K', html: `
<p><b>Vitamin E (tocopherol)</b> — a chromanol ring (antioxidant activity) and a long hydrocarbon tail (fat-soluble). A powerful <b>antioxidant</b>: protects cells and <b>stops LDL cholesterol being oxidised</b> (which triggers plaque formation); supports immunity, skin (UV protection, healing), eyes (may reduce macular degeneration) and nerves. It protects omega-3 fats from oxidation and is regenerated by vitamin C. Sources: vegetable oils, almonds, wheat germ, green vegetables, soya, eggs.</p>
<p><b>Vitamin K</b> — a <b>quinone ring</b>. <b>K1 phylloquinone</b> (side chain with one double bond; green leaves such as spinach) and <b>K2 menaquinone</b> (several double bonds; meat, fermented foods). Functions: <b>blood clotting</b> (makes clotting proteins); binds calcium to bone; prevents calcium being deposited in arteries (vascular calcification). Newborns have low supplies (it crosses the placenta poorly), so they receive a single dose at birth to prevent <b>vitamin K deficiency bleeding</b>.</p>` },
    { h: 'The B vitamins', html: `
<div class="tbl"><table><tr><th>Vitamin</th><th>Key structure / active form</th><th>Functions</th><th>Sources</th></tr>
<tr><td><b>B1 thiamin</b></td><td>rings that bind to enzymes; active form thiamin pyrophosphate (TPP)</td><td>converts carbohydrate to ATP (Krebs cycle); nerve impulses and neurotransmitters; muscle energy</td><td>wholegrain cereals, peas, meat (pork), potatoes, soya, milk</td></tr>
<tr><td><b>B2 riboflavin</b></td><td>ring system (energy transfer) + side chain with –OH groups</td><td>forms coenzymes for energy release from carbohydrate, fat and protein; activates B6 and folate; skin, vision, nerves</td><td>milk, cheese, eggs, meat, dark leafy greens, soya (destroyed by light)</td></tr>
<tr><td><b>B3 niacin</b></td><td>nicotinic acid and nicotinamide; pyridine ring</td><td>coenzymes carry electrons in energy release; DNA repair; skin and nervous system</td><td>meat, fish, nuts, fortified cereals (can be made from tryptophan)</td></tr>
<tr><td><b>B6 pyridoxine</b></td><td>pyridine ring; active form PLP</td><td>amino acid metabolism; neurotransmitters (serotonin, dopamine); haemoglobin synthesis; glycogen breakdown; hormones</td><td>meat, fish, nuts, pulses, dried fruit, bananas, milk</td></tr>
<tr><td><b>B9 folate</b> (folic acid = synthetic form)</td><td>two rings and a tail; converted to tetrahydrofolate (THF)</td><td>DNA and RNA synthesis, cell division; red blood cells; methylation cycle and lowering homocysteine (heart health); prevents <b>neural tube defects</b> (spina bifida)</td><td>dark leafy greens, legumes, fortified cereals</td></tr>
<tr><td><b>B12 cobalamin</b></td><td>the largest vitamin: corrin ring with a central <b>cobalt</b> atom; absorption needs <b>intrinsic factor</b> from the stomach</td><td>red blood cells (with folate); DNA synthesis; myelin sheath of nerves; energy metabolism; recycles homocysteine</td><td>meat, fish, eggs, milk, cheese, liver — <b>only animal foods</b> naturally (vegans need fortified foods or supplements)</td></tr></table></div>
<p>B vitamins act as <b>coenzymes</b> — non-protein helpers that let enzymes work. Coenzymes are not themselves proteins.</p>` },
    { h: 'Vitamin C (ascorbic acid)', html: `
<p>Six carbons in a lactone ring with an <b>enediol group</b> (donates electrons — antioxidant, reducing agent) and several <b>hydroxyl</b> groups (highly water-soluble).</p>
<ul><li><b>Antioxidant</b> — neutralises free radicals; recycles vitamin E.</li><li><b>Collagen synthesis</b> — connective tissue, cartilage, blood vessels, bones; <b>wound healing</b>.</li><li><b>Immunity</b> — supports white blood cells.</li><li><b>Iron absorption</b> — converts <b>non-haem iron</b> to a more absorbable form (must be eaten in the same meal).</li></ul>
<p><b>Sources</b>: citrus fruits, berries, kiwi, tomatoes, peppers, broccoli, potatoes. Very easily lost by heat, leaching, oxygen and time.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why vitamin D must be activated before the body can use it. (3 marks)', s: ['Vitamin D from the skin (D3) or food is not biologically active.', 'In the liver it is hydroxylated to calcidiol, the main circulating form.', 'In the kidneys it is hydroxylated again to calcitriol, the active form that increases calcium and phosphorus absorption for bone mineralisation.'], a: 'Two hydroxylations: liver (calcidiol) → kidneys (calcitriol).' },
    { q: 'Explain why a vegan may need a vitamin B12 supplement. (3 marks)', s: ['B12 (cobalamin) is found naturally only in animal foods such as meat, fish, eggs and dairy.', 'It is needed for red blood cell formation, DNA synthesis and the myelin sheath of nerves.', 'Without fortified foods (plant milks, yeast extract, cereals) or a supplement, deficiency can cause megaloblastic anaemia and nerve damage.'], a: 'Only animal sources; essential for blood and nerves.' }
  ],
  pitfalls: ['Saying vitamins provide energy — only macronutrients (and alcohol) do; B vitamins help release it.', 'Confusing fat- and water-soluble vitamins — learn “DAKE”.', 'Calling coenzymes proteins — they help enzymes but are not proteins.', 'Giving carrots as a source of retinol — they supply beta-carotene.', 'Mixing up the B vitamins’ names and numbers — make revision cards.'],
  cards: [
    ['Fat-soluble vitamins?', 'A, D, E, K.'],
    ['Water-soluble vitamins?', 'B group (B1, B2, B3, B6, B9, B12) and C.'],
    ['Chemical names: A, D, E, C?', 'Retinol, calciferol, tocopherol, ascorbic acid.'],
    ['The ACE vitamins?', 'Antioxidants A (carotenoids), C and E.'],
    ['D2 vs D3?', 'D2 ergocalciferol (plants/fungi); D3 cholecalciferol (animal foods, made in skin by UVB).'],
    ['Where is vitamin D activated?', 'Liver → calcidiol; kidneys → calcitriol (active).'],
    ['Main function of vitamin K?', 'Blood clotting (also binds calcium to bone).'],
    ['Why do newborns get vitamin K at birth?', 'Low stores (crosses placenta poorly) — prevents vitamin K deficiency bleeding.'],
    ['Vitamin E and LDL?', 'Vitamin E stops LDL being oxidised, reducing plaque formation.'],
    ['B1 chemical name and role?', 'Thiamin — converts carbohydrate into energy (ATP); nerves.'],
    ['B6 chemical name and roles?', 'Pyridoxine — amino acid metabolism, neurotransmitters, haemoglobin.'],
    ['Folate vs folic acid?', 'Folate: natural B9 in food. Folic acid: synthetic form in supplements and fortification.'],
    ['B12 chemical name and special feature?', 'Cobalamin — contains cobalt; needs intrinsic factor to be absorbed.'],
    ['Four functions of vitamin C?', 'Antioxidant, collagen synthesis/wound healing, immunity, non-haem iron absorption.'],
    ['What is a coenzyme?', 'A non-protein molecule (often from B vitamins) that helps an enzyme work.']
  ],
  quiz: [
    { q: 'Which vitamin is fat-soluble?', o: ['Vitamin K', 'Thiamin', 'Folate', 'Vitamin C'], x: 'A, D, E and K are fat-soluble.' },
    { q: 'Tocopherol is the chemical name for…', o: ['vitamin E', 'vitamin K', 'vitamin B6', 'vitamin A'], x: 'Vitamin E.' },
    { q: 'Calcitriol is made in the…', o: ['kidneys', 'liver', 'skin', 'stomach'], x: 'The second hydroxylation happens in the kidneys.' },
    { q: 'Which vitamin is essential for blood clotting?', o: ['Vitamin K', 'Vitamin C', 'Vitamin A', 'Riboflavin'], x: 'Makes clotting proteins.' },
    { q: 'Which vitamin contains cobalt?', o: ['B12 (cobalamin)', 'B6 (pyridoxine)', 'C (ascorbic acid)', 'D (calciferol)'], x: 'Cobalt atom at the centre of the corrin ring.' },
    { q: 'Intrinsic factor is needed to absorb…', o: ['vitamin B12', 'vitamin C', 'vitamin A', 'iron'], x: 'Made by stomach cells.' },
    { q: 'Which vitamin prevents neural tube defects?', o: ['Folate (B9)', 'Vitamin K', 'Niacin', 'Vitamin E'], x: '400 µg folic acid before and in early pregnancy.' },
    { q: 'The ACE vitamins are important as…', o: ['antioxidants', 'sources of energy', 'blood-clotting agents', 'emulsifiers'], x: 'They neutralise free radicals.' },
    { q: 'Vitamin C helps iron absorption by…', o: ['converting non-haem iron to a more absorbable form', 'forming haemoglobin directly', 'raising stomach pH', 'binding iron to phytates'], x: 'It must be eaten in the same meal.' },
    { q: 'Ergosterol in mushrooms is converted by UV light to…', o: ['vitamin D2', 'vitamin A', 'vitamin K1', 'cholesterol'], x: 'Ergocalciferol.' },
    { q: 'Which B vitamin is involved in making serotonin and dopamine?', o: ['B6 pyridoxine', 'B2 riboflavin', 'B1 thiamin', 'B12 cobalamin'], x: 'PLP acts as a coenzyme in neurotransmitter synthesis.' },
    { q: 'Beta-carotene is…', o: ['a plant carotenoid converted to retinol', 'the active form of vitamin D', 'a B vitamin', 'a mineral'], x: 'Found in orange and dark-green plant foods.' },
    { q: 'Which statement about water-soluble vitamins is correct?', o: ['They are generally not stored, so are needed regularly', 'They are stored in fatty tissue', 'They are not affected by cooking', 'They provide 4 kcal per gram'], x: 'B12 is the exception, stored in the liver.' }
  ],
  exam: [
    { q: 'Identify one function of vitamin A and one good source of retinol. [2]', m: 2, ms: ['function: vision in dim light / mucous membranes / immunity / growth / skin', 'source: liver / eggs / butter / whole milk / oily fish (not carrots — beta-carotene)'] },
    { q: 'Describe how vitamin D is made in the body and activated. [4]', m: 4, ms: ['UVB in sunlight acts on the skin (epidermis) to make cholecalciferol (D3)', 'also from food (D2 / D3)', 'hydroxylated in the liver to calcidiol', 'hydroxylated in the kidneys to calcitriol — the active form'] },
    { q: 'Compare fat-soluble and water-soluble vitamins. [4]', m: 4, ms: ['fat-soluble (A, D, E, K) dissolve in fat and are absorbed with it', 'stored in liver / fatty tissue — excess can be toxic', 'water-soluble (B, C) not stored (except B12) — needed regularly / excess excreted', 'water-soluble lost easily by leaching / heat during cooking'] },
    { q: 'Explain how folate and vitamin B12 work together in the body. [4]', m: 4, ms: ['both needed to make healthy red blood cells', 'both involved in DNA synthesis / cell division', 'B12 and folate (with B6) recycle homocysteine — heart health', 'deficiency of either → megaloblastic anaemia (large immature red cells)'] }
  ],
  sims: ['micros'], gens: []
});

TOPICS.push({
  id: '1.5', unit: '1', ref: '1.1.1–1.1.2', title: 'Minerals, trace elements and water', short: 'Ca, Mg, P, K, Na; Fe, F, I, Cr; water, electrolytes, fluid balance',
  summary: 'Minerals and trace elements are inorganic, so they keep their structure and form compounds in the body. Calcium, magnesium, phosphorus, potassium and sodium are the main minerals; iron, fluoride, iodine and chromium the main trace elements. Water is essential for life and works with electrolytes to keep fluid balance.',
  spec: [
    'Minerals (inorganic): calcium, magnesium, phosphorus, potassium, sodium — structure, functions and sources',
    'Trace elements: iron (haem and non-haem), fluoride, iodine, chromium',
    'Water (H₂O): functions; electrolytes; intracellular, extracellular and transcellular fluid',
    'Fluid homeostasis: intake (drinks, food, metabolic water) and output (urine, insensible losses, faeces); ADH',
    'Dehydration and overhydration (hyponatraemia)',
    'Absorption of micronutrients along the small intestine'
  ],
  learn: [
    { h: 'Minerals', html: `
<p>Minerals are <b>inorganic</b> elements from soil and water. Unlike vitamins they are not destroyed by heat, and they can form compounds in the body (e.g. iron in haemoglobin).</p>
<div class="tbl"><table><tr><th>Mineral</th><th>Structure / form</th><th>Functions</th><th>Sources</th></tr>
<tr><td><b>Calcium (Ca)</b></td><td>calcium phosphate (as <b>hydroxyapatite</b> crystals) and calcium carbonate; 99% in bones</td><td>bone and enamel strength (with phosphorus and vitamin D); muscle contraction; heart rhythm; nerve transmission; blood clotting</td><td>milk, cheese, yogurt, fortified bread and plant milks, canned fish bones, seeds, green leaves</td></tr>
<tr><td><b>Magnesium (Mg)</b></td><td>cofactor for 300+ enzymes; 60% in bones</td><td>makes ATP stable and active (energy release); muscle relaxation (blocks calcium), heartbeat, blood pressure; activates vitamin D; insulin signalling</td><td>dark leafy greens, wholegrains, nuts, seeds, pulses</td></tr>
<tr><td><b>Phosphorus (P)</b></td><td>bound to proteins, lipids and sugars; 85% in bones and teeth</td><td>hydroxyapatite in bones and teeth; part of <b>ATP</b> and creatine phosphate; DNA and RNA; phospholipid cell membranes</td><td>meat, poultry, fish, eggs, dairy, almost all plant foods</td></tr>
<tr><td><b>Potassium (K)</b></td><td>positive ion mainly <b>inside</b> cells (intracellular)</td><td>fluid balance and osmotic pressure; steady heartbeat and muscle function; lowers blood pressure by helping excrete sodium</td><td>fruit (bananas), vegetables, potatoes, almost all foods</td></tr>
<tr><td><b>Sodium (Na)</b></td><td>small ion mainly in <b>extracellular</b> fluid (plasma)</td><td>fluid pressure and volume; nerve impulses and muscle contraction; active transport of glucose and amino acids into cells (sodium–potassium pump)</td><td>salt, processed foods, bread, bacon, cheese, stock cubes, bicarbonate of soda, MSG</td></tr></table></div>
<div class="box tip"><b class="lbl">Salt and sodium</b><p>Salt (sodium chloride) = sodium × 2.5. Adults should eat no more than <b>6 g of salt</b> a day.</p></div>` },
    { h: 'Trace elements', html: `
<p>Trace elements are needed in even smaller amounts than minerals.</p>
<div class="tbl"><table><tr><th>Trace element</th><th>Structure / form</th><th>Functions</th><th>Sources</th></tr>
<tr><td><b>Iron (Fe)</b></td><td>ferrous (Fe²⁺) and ferric (Fe³⁺) ions bound to proteins: haem in haemoglobin and myoglobin; stored in ferritin</td><td>oxygen transport (haemoglobin) and storage in muscle (myoglobin); enzymes in energy production; thyroid hormones; collagen synthesis</td><td><b>haem</b> (well absorbed, up to ~35%): red meat, fish, egg yolk. <b>Non-haem</b> (~17%, needs vitamin C): nuts, seeds, dark leafy greens, pulses, dried apricots, fortified cereals</td></tr>
<tr><td><b>Fluoride (F)</b></td><td>F⁻ ion; forms <b>fluorapatite</b> in enamel</td><td>strengthens enamel; speeds remineralisation of early decay; antibacterial in plaque</td><td>sea fish, tea, fluoridated water, toothpaste</td></tr>
<tr><td><b>Iodine (I)</b></td><td>iodide I⁻; 70–80% stored in the thyroid</td><td>part of thyroid hormones T3 and T4 that control metabolic rate, growth and brain development (vital in pregnancy and infancy)</td><td>seafood, milk and dairy products</td></tr>
<tr><td><b>Chromium (Cr)</b></td><td>Cr³⁺ ion</td><td>enhances insulin action — glucose uptake into cells; helps enzymes break down macronutrients</td><td>brewer’s yeast, beef, turkey, wholegrains, broccoli, nuts, eggs</td></tr></table></div>` },
    { h: 'Water and electrolytes', html: `
[[d:water]]
<p>Water is technically not a nutrient but it is essential to life. Water ($"H"_2"O"$) is a <b>polar</b> molecule, so it dissolves many substances.</p>
<ul><li>The medium for <b>biochemical reactions</b> (digestion, absorption, transport).</li><li><b>Transport</b> — blood is about 90% water.</li><li><b>Waste removal</b> via urine and faeces.</li><li><b>Temperature regulation</b> by sweating.</li><li>Makes saliva and supports enzymes; dissolves water-soluble nutrients.</li><li><b>Lubricates</b> joints; cushions the brain and spinal cord.</li></ul>
<p><b>Electrolytes</b> are minerals in body fluids that carry a small electrical charge: sodium (fluid balance, nerve impulses), potassium (muscle, heart rhythm), calcium, magnesium, <b>chloride</b> (acid–base balance) and phosphate (energy). Water gives general hydration, but electrolytes help the body <b>absorb and retain</b> water — critical after intense exercise or illness.</p>
<p>Body fluid is held in three compartments: <b>intracellular</b> (inside cells), <b>extracellular</b> (outside cells, e.g. plasma) and <b>transcellular</b> (e.g. digestive juices, joint (synovial) fluid, spinal fluid, lymph).</p>` },
    { h: 'Fluid balance (homeostasis)', html: `
[[d:fluid]]
<div class="tbl"><table><tr><th>Intake</th><th>Output</th></tr>
<tr><td>drinks (the main source — not alcohol); food (especially fruit and vegetables); <b>metabolic water</b> from respiration and condensation reactions (8–12%)</td><td><b>urine</b> (over 75%); <b>insensible losses</b> from sweat (just under 10%) and breathing (about 10%); faeces (under 5%)</td></tr></table></div>
<p>Output is controlled by <b>antidiuretic hormone (ADH)</b> (“against urine”), released from the brain (hypothalamus/pituitary) when blood electrolytes are too concentrated: the kidneys reabsorb more water and thirst increases. When blood is too dilute, less ADH is released and more urine is made.</p>
<p>The Eatwell Guide advises <b>6–8 glasses</b> of fluid a day — water, lower-fat milk, unsweetened tea or coffee.</p>` },
    { h: 'Dehydration and overhydration', html: `
<p><b>Dehydration</b> — fluid loss exceeds intake: electrolyte imbalance, lower plasma volume, poorer temperature control. Causes: sweating in heat or strenuous exercise (sweat can exceed 1 L/hour), fever, diarrhoea and vomiting, high-protein diets (extra water to excrete nitrogen), cold or high-altitude breathing.</p>
<div class="tbl"><table><tr><th>Early</th><th>Moderate</th><th>Severe</th><th>Critical</th></tr><tr><td>thirst, dry mouth and lips, fatigue, headache, less and darker urine</td><td>dizziness, light-headedness, poor skin turgor, faster heart rate</td><td>sunken eyes or cheeks, rapid breathing, confusion, irritability</td><td>fainting, little or no urine, no tears (children), sunken fontanelle (babies), seizures</td></tr></table></div>
<p>Most at risk: babies, infants, older people and endurance athletes.</p>
<p><b>Overhydration (water intoxication)</b> — too much water dilutes blood sodium (<b>hyponatraemia</b>): cells swell, causing nausea, headache and confusion, then cramps, seizures, coma and even death. At risk: endurance athletes drinking large volumes quickly; people with kidney problems or heart failure.</p>` },
    { h: 'How micronutrients are absorbed', html: `
<p>Vitamins and minerals are already small, so they are not digested — they are <b>released</b> from food and absorbed, mostly down a concentration gradient; some need carrier proteins or <b>active transport</b> (using ATP).</p>
<ol><li><b>Stomach</b> — acid releases micronutrients; <b>intrinsic factor</b> is secreted (needed for B12); calcium salts dissolve; some fluoride and iodine absorbed.</li>
<li><b>Duodenum</b> — calcium absorption (regulated by vitamin D); iron, phosphorus, potassium begin; bile forms micelles around fat-soluble vitamins.</li>
<li><b>Jejunum</b> — most sodium, potassium, chromium; remaining calcium, magnesium, phosphorus; fat-soluble vitamins; water-soluble vitamins begin.</li>
<li><b>Ileum</b> — most remaining iron, magnesium; <b>B12</b> (with intrinsic factor) and other water-soluble vitamins.</li>
<li><b>Colon</b> — a little iron, sodium, potassium; water.</li></ol>
<p>Iron absorption is tightly controlled by hormones because the body cannot easily remove excess iron; the protein <b>transferrin</b> carries it in the blood.</p>` }
  ],
  eqs: [['"salt" = "sodium" × 2.5', 'convert sodium to salt']],
  worked: [
    { q: 'A ready meal contains 0.9 g of sodium. Calculate the salt content and state what percentage of an adult’s 6 g maximum this is.', s: ['salt = sodium × 2.5 = 0.9 × 2.5 = 2.25 g', 'percentage = 2.25 ÷ 6 × 100 = 37.5%'], a: '2.25 g of salt, 37.5% of the daily maximum' },
    { q: 'Explain how the body responds when a person is becoming dehydrated. (3 marks)', s: ['Loss of water makes blood electrolytes (sodium) more concentrated.', 'The brain releases more antidiuretic hormone (ADH), so the kidneys reabsorb more water and less, darker urine is produced.', 'The sense of thirst increases to encourage drinking.'], a: 'More ADH → water reabsorbed; thirst increases.' }
  ],
  pitfalls: ['Calling iron a mineral in answers that ask for trace elements — the WJEC notes class iron, fluoride, iodine and chromium as trace elements.', 'Confusing salt and sodium figures — multiply sodium by 2.5.', 'Saying haem iron needs vitamin C — it is non-haem (plant) iron that does.', 'Forgetting that too much water can be dangerous (hyponatraemia).', 'Saying micronutrients are digested — they are released and absorbed.'],
  cards: [
    ['Five main minerals?', 'Calcium, magnesium, phosphorus, potassium, sodium.'],
    ['Four main trace elements?', 'Iron, fluoride, iodine, chromium.'],
    ['What is hydroxyapatite?', 'Calcium phosphate crystals that harden bones and tooth enamel.'],
    ['Three functions of calcium?', 'Bones and teeth, muscle contraction/heart rhythm, nerve transmission, blood clotting.'],
    ['Why is magnesium needed for energy?', 'ATP must bind to magnesium to be stable and active; cofactor for 300+ enzymes.'],
    ['Phosphorus is part of which energy molecule?', 'ATP (also creatine phosphate).'],
    ['Potassium vs sodium location?', 'Potassium mainly inside cells; sodium mainly outside cells.'],
    ['How does potassium help blood pressure?', 'It helps the kidneys excrete excess sodium.'],
    ['Haem vs non-haem iron?', 'Haem: animal, well absorbed. Non-haem: plant, poorly absorbed, needs vitamin C.'],
    ['What does fluoride form in enamel?', 'Fluorapatite — harder and more acid-resistant.'],
    ['Role of iodine?', 'Part of thyroid hormones T3 and T4 that control metabolic rate and brain development.'],
    ['Role of chromium?', 'Enhances insulin action and glucose uptake.'],
    ['Main route of fluid loss?', 'Urine (over 75%).'],
    ['What are insensible losses?', 'Continuous, unnoticed losses in sweat and breath.'],
    ['What does ADH do?', 'Makes the kidneys reabsorb water when blood is too concentrated; increases thirst.'],
    ['What is hyponatraemia?', 'Low blood sodium from overhydration (or severe losses) — cells swell.'],
    ['Recommended fluid intake?', '6–8 glasses a day (Eatwell Guide).']
  ],
  quiz: [
    { q: 'Which is classed as a trace element?', o: ['Iodine', 'Calcium', 'Sodium', 'Potassium'], x: 'Iron, fluoride, iodine and chromium are trace elements.' },
    { q: 'About what percentage of body calcium is in bones?', o: ['99%', '50%', '10%', '75%'], x: 'Mostly as hydroxyapatite.' },
    { q: 'Which mineral is part of ATP?', o: ['Phosphorus', 'Iodine', 'Chromium', 'Fluoride'], x: 'Adenosine triphosphate.' },
    { q: 'Potassium helps lower blood pressure by…', o: ['helping the kidneys excrete sodium', 'raising blood volume', 'forming hydroxyapatite', 'blocking vitamin D'], x: 'It counteracts sodium.' },
    { q: 'A food label shows 0.4 g sodium. How much salt is this?', o: ['1.0 g', '0.16 g', '0.4 g', '2.5 g'], x: '0.4 × 2.5.' },
    { q: 'Non-haem iron is found in…', o: ['lentils and dark leafy greens', 'red meat', 'fish', 'egg yolk only'], x: 'Plant sources; pair with vitamin C.' },
    { q: 'Goitre is linked to a lack of…', o: ['iodine', 'fluoride', 'chromium', 'calcium'], x: 'Thyroid enlarges.' },
    { q: 'Fluoride protects teeth by forming…', o: ['fluorapatite', 'hydroxyapatite', 'plaque', 'dentine'], x: 'Harder, more acid-resistant enamel.' },
    { q: 'Chromium improves the action of…', o: ['insulin', 'ADH', 'pepsin', 'bile'], x: 'Better glucose uptake.' },
    { q: 'The largest route of water loss is…', o: ['urine', 'breath', 'sweat', 'faeces'], x: 'Over 75%.' },
    { q: 'When blood becomes too concentrated, ADH…', o: ['increases, so kidneys reabsorb more water', 'decreases, so more urine is made', 'destroys sodium', 'causes sweating'], x: 'And thirst increases.' },
    { q: 'Hyponatraemia can result from…', o: ['drinking very large volumes of water quickly', 'eating too much salt', 'eating too little fibre', 'lack of vitamin C'], x: 'Blood sodium is diluted.' },
    { q: 'Which people are most at risk of dehydration?', o: ['Babies and older adults', 'Office workers only', 'Teenagers only', 'People who eat fruit'], x: 'Also endurance athletes.' },
    { q: 'B12 is absorbed mainly in the…', o: ['ileum, with intrinsic factor', 'mouth', 'stomach', 'colon'], x: 'Intrinsic factor comes from the stomach.' }
  ],
  exam: [
    { q: 'State two functions of calcium in the body. [2]', m: 2, ms: ['bone and tooth structure / hydroxyapatite', 'muscle contraction / heart rhythm / nerve transmission / blood clotting (any two)'] },
    { q: 'Compare haem and non-haem iron. [4]', m: 4, ms: ['haem iron from animal sources (red meat, fish, egg yolk)', 'haem iron easily absorbed (up to ~35%)', 'non-haem iron from plants (pulses, greens, nuts, fortified cereals)', 'poorly absorbed (~17%); needs vitamin C; inhibited by phytates / polyphenols / calcium'] },
    { q: 'Explain how the body maintains fluid balance. [5]', m: 5, ms: ['intake from drinks, food and metabolic water', 'output mainly urine; also sweat, breath (insensible), faeces', 'hypothalamus monitors electrolyte concentration of blood', 'high concentration → more ADH → kidneys reabsorb water, less urine, thirst increases', 'low concentration → less ADH → more urine, less thirst'] },
    { q: 'Evaluate the risks of both dehydration and overhydration for an endurance athlete. [6]', m: 6, ms: ['sweat losses can exceed 1 L/hour — dehydration risk', 'dehydration: reduced plasma volume, poor temperature control, fatigue, cramps, confusion — lower performance', 'electrolytes (sodium, potassium) also lost and need replacing', 'drinking large volumes of plain water quickly can cause hyponatraemia', 'hyponatraemia: cells swell — nausea, confusion, seizures, can be fatal', 'balanced judgement: drink to plan / thirst, use electrolyte drinks, weigh before and after'] }
  ],
  sims: ['fluid'], gens: ['salt1', 'salt2']
});

TOPICS.push({
  id: '1.6', unit: '1', ref: '1.1.2', title: 'Functions of nutrients: growth, energy and metabolism', short: 'Growth and development, measuring energy, respiration, metabolism',
  summary: 'Nutrients have four key functions: growth and development, production of energy, regulation of metabolism and digestion of nutrients. Learn how energy is measured, how aerobic and anaerobic respiration and the Krebs cycle release it as ATP, and how metabolism is controlled.',
  spec: [
    'Functions of nutrients: growth and development; production of energy; regulate metabolism; digestion of nutrients',
    'Understand the functions of each type of nutrient and be aware of their complementary actions',
    'Energy: forms of energy; kilocalories and kilojoules; energy values of macronutrients and alcohol',
    'Aerobic respiration, ATP and the Krebs cycle; anaerobic respiration; ketosis',
    'Metabolism: catabolic and anabolic reactions; thyroid hormones; deamination and protein synthesis'
  ],
  learn: [
    { h: 'Growth and development', html: `
<p><b>Growth</b> is the increase in physical size (height, weight, organ size) from cell multiplication and enlargement. <b>Development</b> is the progressive change in function and ability — organs and systems mature, and skills such as fine motor and cognitive ability are acquired. Both are affected by nutrition, genetics, hormones and environment.</p>
<div class="tbl"><table><tr><th>Nutrient</th><th>Role in growth and development</th></tr>
<tr><td>Protein</td><td>builds and repairs tissues and organs; enzymes and hormones such as growth hormone and IGF-1 (bone elongation) and testosterone (muscle growth)</td></tr>
<tr><td>Carbohydrates</td><td>primary energy for growth and activity</td></tr>
<tr><td>Lipids</td><td>energy; brain development; essential fatty acids for neural membranes and neurotransmitters; carry fat-soluble vitamins</td></tr>
<tr><td>Calcium, phosphorus, vitamin D</td><td>bone and teeth growth and mineralisation</td></tr>
<tr><td>Iron</td><td>haemoglobin for oxygen transport; brain development</td></tr>
<tr><td>Zinc</td><td>cell growth and repair, immune function</td></tr>
<tr><td>Vitamins A and C</td><td>vision, immunity, cell growth; collagen for skin and connective tissue</td></tr>
<tr><td>B vitamins</td><td>energy metabolism, nerve function, red blood cells, DNA synthesis (folate prevents neural tube defects)</td></tr>
<tr><td>Water</td><td>hydration; supports all metabolic processes</td></tr></table></div>
<p><b>Chronic undernutrition</b> causes <b>stunting</b> (low height for age) and <b>wasting</b> (low weight for height), delayed bone development, cognitive delay (lack of iron, iodine, essential fatty acids), weakened immunity and a “vicious cycle” of infection, and higher risk of chronic disease later. It is most common where there is poverty, conflict, famine or poor healthcare, but also occurs in developed countries through neglect, eating disorders or chronic illness.</p>` },
    { h: 'Measuring energy', html: `
<p>All biological energy comes from the <b>chemical energy</b> in the bonds of nutrients; it is converted to electrical (nerve impulses), kinetic (movement) and thermal (body heat) energy.</p>
<ul><li>A <b>calorie</b> raises 1 g of water by 1 °C; food energy is measured in <b>kilocalories (kcal)</b> = 1000 calories (“calories” on labels mean kcal).</li><li><b>1 kcal = 4.2 kJ</b> (4.184 exactly). By law, labels show both kJ and kcal.</li></ul>
<div class="tbl"><table><tr><th>Source</th><th>kcal per g</th><th>kJ per g</th></tr>
<tr><td>Carbohydrate</td><td>4</td><td>17</td></tr><tr><td>Protein</td><td>4</td><td>17</td></tr><tr><td>Fat</td><td>9</td><td>37</td></tr><tr><td>Alcohol</td><td>7</td><td>29</td></tr><tr><td>Fibre</td><td>2</td><td>8</td></tr></table></div>
<p>Glucose circulates in the blood for energy and is stored as glycogen; galactose and fructose must be converted to glucose by the liver; fatty acids from adipose tissue feed the Krebs cycle; amino acids can make glucose by <b>gluconeogenesis</b>.</p>` },
    { h: 'Respiration and ATP', html: `
[[d:respiration]]
<p>Energy is released gradually in <b>respiration</b>, controlled by enzymes and coenzymes (many made from proteins and B vitamins). It takes place in the <b>mitochondria</b>.</p>
<div class="box def"><b class="lbl">Aerobic respiration</b><p>glucose + oxygen → carbon dioxide + water + energy (ATP) &nbsp; $"C"_6"H"_12"O"_6 + 6"O"_2 → 6"CO"_2 + 6"H"_2"O"$ + ATP</p></div>
<p>Oxygen is inhaled, diffuses through the alveoli into the blood and binds to <b>haemoglobin</b> in red blood cells (<b>oxyhaemoglobin</b>) — so iron and vitamin C are part of energy release. CO₂ returns to the lungs to be exhaled.</p>
<p><b>ATP (adenosine triphosphate)</b> — a nitrogen base, ribose sugar and three phosphate groups — is the cell’s “energy currency” (so phosphorus is needed). Energy is released when ATPase hydrolyses it: ATP + water → ADP + phosphate + energy. By-products: water, CO₂ and <b>heat</b> (why we warm up when exercising).</p>
<p><b>The Krebs (citric acid) cycle</b>: in the mitochondria, <b>acetyl-CoA</b> (from glucose, fats or proteins) combines with oxaloacetate to make citrate; CO₂ is released, some ATP is made and energy carriers (NADH, FADH₂) go on to make most of the ATP using oxygen. B vitamins (thiamin, riboflavin, niacin) and magnesium are essential.</p>
<p><b>Ketosis</b>: when glucose is low, oxaloacetate is diverted to make glucose, acetyl-CoA builds up and the liver converts it to <b>ketone bodies</b>. Nutritional ketosis (fasting, low-carbohydrate diets) is generally safe; diabetic ketosis is dangerous (nausea, vomiting, confusion).</p>
<p><b>Anaerobic respiration</b> (no oxygen, when muscles run short): glucose → <b>lactic acid</b> + a little ATP. Fast but inefficient; lactic acid causes fatigue and a burning feeling.</p>` },
    { h: 'Regulating metabolism', html: `
<p><b>Metabolism</b> is all the chemical reactions that sustain life:</p>
<ul><li><b>Catabolic</b> reactions break molecules down to release energy (e.g. respiration, digestion by hydrolysis).</li><li><b>Anabolic</b> reactions use energy to build complex molecules (e.g. protein synthesis, glycogenesis).</li></ul>
<p>They are controlled by <b>enzymes</b> (proteins), <b>coenzymes</b> (B vitamins), mineral <b>cofactors</b> (magnesium, iron) and <b>hormones</b>. The <b>thyroid</b> pathway: hypothalamus → pituitary releases TSH → the thyroid absorbs <b>iodine</b> and adds it to the amino acid tyrosine to make <b>T3 (triiodothyronine) and T4 (thyroxine)</b> → these travel in the blood and regulate energy production in every cell.</p>
<p><b>Deamination</b> (catabolic): nitrogen, toxic if it builds up, is removed from excess amino acids in the liver — amino acid + water → amino-acid skeleton + ammonia. The ammonia joins CO₂ to form <b>urea</b>, excreted by the kidneys in urine; the skeleton is used for energy.</p>
<p><b>Protein synthesis</b> (anabolic): amino acids join into proteins (e.g. haemoglobin ≈ 574 amino acids in four subunits), and non-essential amino acids are made from others (glutamate → glutamine or arginine).</p>
<p><b>Digestion of nutrients</b> is itself a function: fibre and water keep food moving; proteins form digestive enzymes; bile (made from cholesterol) emulsifies fat.</p>` },
    { h: 'Complementary actions of nutrients', html: `
<div class="tbl"><table><tr><th>Partnership</th><th>How they work together</th></tr>
<tr><td>Iron + vitamin C</td><td>vitamin C enhances non-haem iron absorption (same meal)</td></tr>
<tr><td>Calcium + phosphorus + vitamin D</td><td>vitamin D enables absorption; together they form hydroxyapatite in bones and teeth</td></tr>
<tr><td>Vitamin B12 + folate</td><td>make red blood cells and DNA; recycle homocysteine</td></tr>
<tr><td>Proteins (LBV + LBV)</td><td>complement each other to supply all essential amino acids</td></tr>
<tr><td>Fat + vitamins A, D, E, K</td><td>fat supplies and is needed to absorb fat-soluble vitamins</td></tr>
<tr><td>Sodium + potassium</td><td>maintain fluid balance; sodium–potassium pump</td></tr>
<tr><td>Calcium + magnesium</td><td>control muscle contraction and relaxation, including the heart</td></tr>
<tr><td>B1, B2, B3 + carbohydrate</td><td>coenzymes release energy from glucose</td></tr>
<tr><td>Vitamin E + omega-3</td><td>vitamin E protects omega-3 from oxidation; vitamin C regenerates vitamin E</td></tr></table></div>
<div class="box warn"><b class="lbl">Some substances inhibit</b><p><b>Oxalates</b> (spinach) bind calcium; <b>phytates</b> (bran, wholegrains) bind iron and calcium; <b>polyphenols/tannins</b> (tea, coffee, wine) reduce iron, zinc and protein absorption; <b>calcium</b> competes with iron; magnesium, iron and calcium compete for carrier proteins.</p></div>` }
  ],
  eqs: [['"energy (kcal)" = 4 × "carb" + 4 × "protein" + 9 × "fat" + 7 × "alcohol"', 'grams of each'], ['"energy (kJ)" = 17 × "carb" + 17 × "protein" + 37 × "fat"', 'kilojoules'], ['"1 kcal" = "4.2 kJ"', 'conversion (4.184 exactly)'], ['"ATP" + "H"_2"O" → "ADP" + "phosphate" + "energy"', 'energy release']],
  worked: [
    { q: 'A 30 g portion of cereal contains 20 g carbohydrate, 3 g protein and 1.5 g fat. Calculate its energy in kcal and kJ.', s: ['kcal = 20 × 4 + 3 × 4 + 1.5 × 9 = 80 + 12 + 13.5 = 105.5 kcal', 'kJ = 20 × 17 + 3 × 17 + 1.5 × 37 = 340 + 51 + 55.5 = 446.5 kJ', '(check: 105.5 × 4.2 ≈ 443 kJ — the small difference comes from rounded factors)'], a: '≈ 106 kcal (≈ 447 kJ)' },
    { q: 'Explain the role of iron, vitamin C and B vitamins in releasing energy from glucose. (4 marks)', s: ['Iron forms haemoglobin, which carries oxygen to cells for aerobic respiration.', 'Vitamin C increases absorption of non-haem iron from plant foods.', 'Thiamin, riboflavin and niacin form coenzymes needed for the Krebs cycle and electron carriers.', 'So together they allow glucose to be fully respired in the mitochondria to make ATP.'], a: 'Oxygen transport (Fe + vit C) and coenzymes (B vitamins) for aerobic respiration.' }
  ],
  pitfalls: ['Saying vitamins provide energy — they help release it.', 'Using 9 kJ/g for fat — it is 9 kcal or 37 kJ.', 'Confusing catabolic (breaking down) with anabolic (building up).', 'Forgetting heat as a by-product of respiration.', 'Listing nutrients without explaining how they interact when asked about complementary actions.'],
  cards: [
    ['Four key functions of nutrients?', 'Growth and development, production of energy, regulating metabolism, digestion of nutrients.'],
    ['Growth vs development?', 'Growth: increase in size. Development: maturing of functions and skills.'],
    ['Stunting vs wasting?', 'Stunting: low height for age. Wasting: low weight for height.'],
    ['1 kcal = ? kJ', '4.2 kJ (4.184).'],
    ['Energy in 1 g alcohol?', '7 kcal (29 kJ).'],
    ['Aerobic respiration equation?', 'Glucose + oxygen → carbon dioxide + water + energy (ATP).'],
    ['Where does respiration happen?', 'In the mitochondria.'],
    ['What is ATP?', 'Adenosine triphosphate — the cell’s energy currency (nitrogen base, ribose, three phosphates).'],
    ['What enters the Krebs cycle?', 'Acetyl-CoA (from glucose, fats or proteins), combining with oxaloacetate.'],
    ['Product of anaerobic respiration in muscle?', 'Lactic acid (+ a little ATP).'],
    ['What is ketosis?', 'Build-up of ketone bodies made from acetyl-CoA when glucose is low.'],
    ['Catabolic vs anabolic?', 'Catabolic breaks down (releases energy); anabolic builds up (uses energy).'],
    ['How does iodine control metabolism?', 'Thyroid uses it to make T3 and T4, which regulate energy use in all cells.'],
    ['What is deamination?', 'Removal of nitrogen from excess amino acids in the liver → ammonia → urea.'],
    ['Name three inhibitors of mineral absorption.', 'Oxalates, phytates, polyphenols/tannins (also calcium for iron).']
  ],
  quiz: [
    { q: 'Which nutrient provides the most energy per gram?', o: ['Fat', 'Carbohydrate', 'Protein', 'Alcohol'], x: 'Fat: 9 kcal/g.' },
    { q: '10 g of alcohol provides…', o: ['70 kcal', '40 kcal', '90 kcal', '0 kcal'], x: '7 kcal/g.' },
    { q: 'Respiration takes place in the…', o: ['mitochondria', 'nucleus', 'stomach', 'villi'], x: 'Cell organelles for energy release.' },
    { q: 'The cell’s “energy currency” is…', o: ['ATP', 'glycogen', 'insulin', 'urea'], x: 'Adenosine triphosphate.' },
    { q: 'Anaerobic respiration in muscles produces…', o: ['lactic acid', 'ethanol', 'urea', 'glycogen'], x: 'Causes fatigue and burning.' },
    { q: 'Deamination produces…', o: ['urea from excess amino acids', 'glucose from fat', 'ATP from ADP', 'glycogen'], x: 'Ammonia is converted to urea in the liver.' },
    { q: 'Which is an anabolic reaction?', o: ['Protein synthesis', 'Digestion of starch', 'Respiration', 'Deamination'], x: 'Building up uses energy.' },
    { q: 'T3 and T4 are made by the thyroid using…', o: ['iodine and tyrosine', 'iron and vitamin C', 'calcium and vitamin D', 'sodium and potassium'], x: 'They regulate metabolic rate.' },
    { q: 'A food has 12 g carbohydrate, 2 g protein and 5 g fat. Energy ≈', o: ['101 kcal', '76 kcal', '45 kcal', '190 kcal'], x: '48 + 8 + 45 = 101 kcal.' },
    { q: 'Which substance reduces calcium absorption from spinach?', o: ['Oxalates', 'Vitamin D', 'Lactose', 'Protein'], x: 'Oxalates bind calcium.' },
    { q: 'Tannins in tea reduce the absorption of…', o: ['iron', 'vitamin C', 'sodium', 'water'], x: 'Tannins are polyphenols.' },
    { q: 'Ketosis occurs when…', o: ['glucose is low and the liver makes ketones from acetyl-CoA', 'too much glucose is eaten', 'protein is digested', 'vitamin C is lacking'], x: 'Fasting, low-carb diets or uncontrolled diabetes.' },
    { q: 'By-products of aerobic respiration include…', o: ['water, carbon dioxide and heat', 'lactic acid only', 'oxygen and glucose', 'urea and ammonia'], x: 'Heat helps maintain body temperature.' }
  ],
  exam: [
    { q: 'State the energy value of 1 g of fat, protein and alcohol in kcal. [3]', m: 3, ms: ['fat: 9 kcal', 'protein: 4 kcal', 'alcohol: 7 kcal'] },
    { q: 'Describe the process of aerobic respiration. [4]', m: 4, ms: ['oxygen inhaled, diffuses into blood, carried by haemoglobin', 'glucose + oxygen react in the mitochondria', 'Krebs cycle / acetyl-CoA; B vitamin coenzymes', 'produces ATP (energy), with carbon dioxide, water and heat as by-products'] },
    { q: 'Explain how nutrients work together to support healthy bones. [4]', m: 4, ms: ['calcium and phosphorus form hydroxyapatite', 'vitamin D enables calcium (and phosphorus) absorption', 'magnesium activates vitamin D / contributes to bone', 'protein / collagen forms the bone matrix; vitamin K binds calcium to bone (max 4)'] },
    { q: 'Discuss the effects of chronic undernutrition on growth and development in childhood. [6]', m: 6, ms: ['stunting and wasting from lack of energy and protein', 'delayed bone growth — lack of calcium, vitamin D, protein', 'cognitive delay / lower IQ — lack of iron, iodine, essential fatty acids', 'weakened immunity → infections → further growth failure (vicious cycle)', 'reduced growth hormone / IGF-1; thyroid disruption (iodine)', 'long-term: chronic disease, reduced productivity — damage may be irreversible'] }
  ],
  sims: ['energy'], gens: ['energy1', 'energy2', 'energy3', 'energyconv1']
});

TOPICS.push({
  id: '1.7', unit: '1', ref: '1.1.2', title: 'Digestion and absorption', short: 'Mouth to ileum: enzymes, bile, micelles, villi',
  summary: 'Digestion breaks large, insoluble molecules into small, soluble ones that can be absorbed. Follow carbohydrates, proteins and fats from the mouth through the stomach, duodenum, jejunum and ileum, and into the blood or lymph.',
  spec: [
    'How nutrients are digested and absorbed into the blood stream',
    'Carbohydrates: mouth — salivary amylase breaks starch into smaller sugars; small intestine — pancreatic amylase continues; brush-border enzymes; monosaccharides absorbed and transported to the liver',
    'Proteins: stomach acid and pepsin; trypsin and chymotrypsin; brush-border peptidases; amino acids absorbed in the ileum',
    'Lipids: lingual lipase, bile salts (emulsification), pancreatic lipase, micelles, chylomicrons and the lymphatic system',
    'Roles of the duodenum, jejunum and ileum; peristalsis; bolus and chyme'
  ],
  learn: [
    { h: 'The route and the key words', html: `
[[d:gut]]
<p><b>Mechanical digestion</b> (chewing = mastication, stomach churning) increases surface area; <b>chemical digestion</b> uses enzymes to <b>hydrolyse</b> bonds. Food is moved by <b>peristalsis</b> — involuntary waves of muscle contraction from the oesophagus to the colon.</p>
<ul><li><b>Bolus</b> — chewed food mixed with saliva.</li><li><b>Chyme</b> — semi-liquid mixture leaving the stomach.</li><li><b>Duodenum</b> — first part of the small intestine: most digestion.</li><li><b>Jejunum</b> — middle: completes almost all digestion.</li><li><b>Ileum</b> — last part: absorption.</li></ul>` },
    { h: 'Carbohydrate digestion', html: `
<ol><li><b>Mouth</b> — salivary amylase hydrolyses starch and dextrin into <b>maltose</b>.</li>
<li><b>Stomach</b> — hydrochloric acid lowers the pH and stops salivary amylase working.</li>
<li><b>Duodenum</b> — the pancreas releases <b>pancreatic amylase</b>, which continues breaking starch into maltose.</li>
<li><b>Jejunum</b> — three <b>brush-border enzymes</b>: <b>maltase</b> (maltose → 2 glucose), <b>sucrase</b> (sucrose → glucose + fructose), <b>lactase</b> (lactose → glucose + galactose).</li>
<li><b>Ileum</b> — monosaccharides are absorbed into the blood and carried by the <b>hepatic portal vein</b> to the liver, where fructose and galactose are converted to glucose; glucose is used or stored as glycogen.</li></ol>` },
    { h: 'Protein digestion', html: `
<ol><li><b>Mouth</b> — mechanical breakdown only.</li>
<li><b>Stomach</b> — <b>hydrochloric acid</b> denatures (unfolds) proteins, exposing peptide bonds, kills many bacteria and converts <b>pepsinogen</b> into the enzyme <b>pepsin</b>, which hydrolyses polypeptides into shorter chains.</li>
<li><b>Duodenum</b> — the pancreas secretes <b>bicarbonate</b> to neutralise the acid (stopping pepsin) and releases <b>trypsin</b> and <b>chymotrypsin</b>.</li>
<li><b>Jejunum</b> — brush-border <b>peptidases</b> split the remaining peptides into amino acids; most protein digestion is complete.</li>
<li><b>Ileum</b> — amino acids are absorbed into the blood and taken to the <b>liver</b>, which rebuilds them into proteins for the body.</li></ol>` },
    { h: 'Fat digestion', html: `
<ol><li><b>Mouth</b> — glands at the back of the tongue make <b>lingual lipase</b> (inactive until the stomach).</li>
<li><b>Stomach</b> — acid activates lingual lipase, which breaks down 10–30% of short- and medium-chain triglycerides (important for infants digesting milk fat). Fats form large globules in the watery chyme.</li>
<li><b>Duodenum</b> — fat triggers the hormone <b>cholecystokinin (CCK)</b>, which makes the gall bladder release <b>bile</b>. <b>Bile salts emulsify</b> fat into tiny droplets (bigger surface area). <b>Pancreatic lipase</b> hydrolyses triglycerides into <b>free fatty acids and monoglycerides</b>.</li>
<li><b>Jejunum</b> — bile salts form <b>micelles</b> around the products, a water-soluble “transport vehicle” to the intestinal wall. Inside the cells (enterocytes) triglycerides are re-formed and packed with cholesterol, phospholipids, fat-soluble vitamins and protein into <b>chylomicrons</b>. These are too large for blood capillaries, so they enter the <b>lacteals</b> (lymphatic system) and reach the blood near the heart. Short- and medium-chain fatty acids go straight to the liver via the hepatic portal vein.</li>
<li><b>Ileum</b> — absorbs the last traces and reabsorbs <b>bile salts</b>, which return to the liver to be recycled.</li></ol>` },
    { h: 'Absorption and the large intestine', html: `
[[d:villus]]
<p>The small intestine is adapted for absorption: about <b>6 m</b> long, folded, lined with <b>villi</b> and <b>microvilli</b> (huge surface area), walls <b>one cell thick</b>, and a rich blood supply plus lacteals to keep a concentration gradient.</p>
<p>The <b>large intestine</b> (colon) absorbs water and some minerals; gut bacteria ferment fibre and oligosaccharides (producing short-chain fatty acids and gas) and make some vitamins. Undigested material leaves as faeces.</p>
<div class="tbl"><table><tr><th>Nutrient</th><th>Enzymes</th><th>End products</th><th>Absorbed into</th></tr>
<tr><td>Starch</td><td>salivary and pancreatic amylase; maltase</td><td>glucose</td><td>blood → liver</td></tr>
<tr><td>Sucrose / lactose</td><td>sucrase / lactase</td><td>glucose + fructose / galactose</td><td>blood → liver</td></tr>
<tr><td>Protein</td><td>pepsin, trypsin, chymotrypsin, peptidases</td><td>amino acids</td><td>blood → liver</td></tr>
<tr><td>Fat</td><td>(bile emulsifies) lingual and pancreatic lipase</td><td>fatty acids + monoglycerides</td><td>lacteals (lymph) → blood</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Describe the digestion and absorption of starch. (5 marks)', s: ['In the mouth, chewing increases surface area and salivary amylase begins breaking starch into maltose.', 'Stomach acid stops amylase working.', 'In the duodenum, pancreatic amylase continues breaking starch into maltose.', 'In the jejunum, the brush-border enzyme maltase hydrolyses maltose into glucose.', 'Glucose is absorbed through the villi of the ileum into the blood and carried to the liver in the hepatic portal vein.'], a: 'Salivary amylase → pancreatic amylase → maltase → glucose absorbed in the ileum → liver.' },
    { q: 'Explain why fats need bile and micelles to be absorbed. (4 marks)', s: ['Fats are hydrophobic, so they form large globules in watery chyme that lipase can only attack at the surface.', 'Bile salts emulsify the globules into tiny droplets, greatly increasing the surface area for pancreatic lipase.', 'The products (fatty acids and monoglycerides) are also hydrophobic, so bile salts surround them in micelles, which carry them through the watery layer to the intestinal cells.', 'Inside the cells they are re-formed into triglycerides and packed into chylomicrons that enter the lymph.'], a: 'Emulsification increases surface area; micelles transport hydrophobic products.' }
  ],
  pitfalls: ['Saying bile is an enzyme — it emulsifies but breaks no bonds.', 'Saying nutrients are absorbed in the stomach.', 'Saying fats enter the blood directly — they enter the lymphatic system first.', 'Stating that proteins are absorbed without being broken down.', 'Forgetting that stomach acid stops salivary amylase.'],
  cards: [
    ['What is a bolus?', 'Chewed food mixed with saliva.'],
    ['What is chyme?', 'The semi-liquid mixture leaving the stomach.'],
    ['Roles of duodenum, jejunum, ileum?', 'Duodenum: most digestion. Jejunum: completes digestion. Ileum: absorption.'],
    ['Where does starch digestion begin?', 'Mouth — salivary amylase.'],
    ['Three brush-border enzymes for sugars?', 'Maltase, sucrase, lactase.'],
    ['How is pepsin activated?', 'Hydrochloric acid converts pepsinogen to pepsin.'],
    ['Pancreatic enzymes for protein?', 'Trypsin and chymotrypsin.'],
    ['Why does the pancreas release bicarbonate?', 'To neutralise stomach acid (and stop pepsin).'],
    ['What is lingual lipase?', 'A lipase from glands at the back of the tongue, activated in the stomach — important for infants.'],
    ['Which hormone triggers bile release?', 'Cholecystokinin (CCK).'],
    ['What do bile salts do?', 'Emulsify fat into small droplets and form micelles.'],
    ['What are chylomicrons?', 'Packages of triglycerides, cholesterol and fat-soluble vitamins with protein that enter the lacteals (lymph).'],
    ['Where do absorbed sugars and amino acids go first?', 'The liver, via the hepatic portal vein.'],
    ['Adaptations of the small intestine?', 'Long; villi and microvilli; one-cell-thick walls; rich blood supply and lacteals.'],
    ['What is peristalsis?', 'Involuntary waves of muscle contraction that move food along the gut.']
  ],
  quiz: [
    { q: 'Salivary amylase breaks starch into…', o: ['maltose', 'amino acids', 'fatty acids', 'lactose'], x: 'Hydrolysis of starch.' },
    { q: 'Which part of the small intestine mainly absorbs nutrients?', o: ['Ileum', 'Duodenum', 'Oesophagus', 'Stomach'], x: 'Duodenum and jejunum mostly digest.' },
    { q: 'Pepsinogen is converted to pepsin by…', o: ['hydrochloric acid', 'bile', 'bicarbonate', 'saliva'], x: 'In the stomach.' },
    { q: 'Trypsin and chymotrypsin come from the…', o: ['pancreas', 'liver', 'salivary glands', 'stomach'], x: 'Released into the duodenum.' },
    { q: 'Which hormone stimulates the gall bladder to release bile?', o: ['Cholecystokinin (CCK)', 'Insulin', 'ADH', 'Glucagon'], x: 'Released when fat enters the duodenum.' },
    { q: 'Bile helps digestion by…', o: ['emulsifying fat', 'breaking peptide bonds', 'digesting starch', 'absorbing water'], x: 'Increases surface area for lipase.' },
    { q: 'Micelles are…', o: ['bile-salt structures that carry fat digestion products to the gut wall', 'enzymes that digest protein', 'fibres in the colon', 'red blood cells'], x: 'A water-soluble transport vehicle.' },
    { q: 'Chylomicrons enter…', o: ['the lacteals (lymphatic system)', 'the hepatic portal vein', 'the stomach', 'the kidneys'], x: 'Too large for blood capillaries.' },
    { q: 'Absorbed glucose is carried first to the…', o: ['liver', 'heart', 'kidneys', 'brain'], x: 'Hepatic portal vein.' },
    { q: 'Why does starch digestion stop in the stomach?', o: ['Acid denatures salivary amylase', 'There is no starch left', 'Bile destroys it', 'Starch is absorbed there'], x: 'Amylase works near neutral pH.' },
    { q: 'Lactase is a…', o: ['brush-border enzyme in the jejunum', 'stomach enzyme', 'salivary enzyme', 'hormone'], x: 'Breaks lactose into glucose and galactose.' },
    { q: 'Bile salts are reabsorbed in the…', o: ['ileum and recycled by the liver', 'stomach', 'mouth', 'oesophagus'], x: 'Enterohepatic recycling.' }
  ],
  exam: [
    { q: 'Name the enzyme that begins the digestion of starch and state where it is produced. [2]', m: 2, ms: ['(salivary) amylase', 'salivary glands / mouth'] },
    { q: 'Describe the digestion of protein. [5]', m: 5, ms: ['stomach: HCl denatures protein / exposes peptide bonds', 'HCl converts pepsinogen to pepsin, which hydrolyses polypeptides', 'duodenum: bicarbonate neutralises acid; trypsin / chymotrypsin continue', 'jejunum: brush-border peptidases produce amino acids', 'ileum: amino acids absorbed into blood → liver'] },
    { q: 'Describe how fat is digested and absorbed. [6]', m: 6, ms: ['lingual lipase (activated in stomach) digests some short/medium-chain fat', 'CCK triggers bile release; bile salts emulsify fat into small droplets', 'pancreatic lipase hydrolyses triglycerides into fatty acids and monoglycerides', 'micelles carry products to intestinal cells', 'triglycerides re-formed and packed into chylomicrons', 'chylomicrons enter lacteals / lymph, then blood'] },
    { q: 'Explain how the small intestine is adapted for absorbing nutrients. [4]', m: 4, ms: ['very long — more time / surface', 'villi and microvilli — very large surface area', 'wall one cell thick — short diffusion distance', 'rich blood supply / lacteals maintain concentration gradient'] }
  ],
  sims: ['digestion'], gens: []
});

TOPICS.push({
  id: '1.8', unit: '1', ref: '1.1.3', title: 'Classifying nutrients in food', short: 'Food groups, biological value, GI and GL, nutrient density, calculations',
  summary: 'Nutrients and foods are classified by food group, biological value (and bioavailability), glycaemic index and load, nutrient density and the complementary actions of nutrients. Know main and secondary sources of every nutrient, the resources for finding nutritional content, and how to calculate the nutritional value of a product.',
  spec: [
    'Classification: food group (the Eatwell Guide)',
    'Classification: biological value (HBV/LBV) and bioavailability; protein complementation',
    'Classification: glycaemic index (and glycaemic load)',
    'Classification: nutrient density (nutrient-dense vs energy-dense foods)',
    'Classification: complementary actions of nutrients',
    'Main and secondary sources of all nutrients; macronutrients vs micronutrients',
    'Resources: computer programmes, food labels, mobile apps, recipes, websites',
    'Calculate the nutritional value within a product based on the nutrients given and resources available'
  ],
  learn: [
    { h: 'Food groups: the Eatwell Guide', html: `
[[d:eatwell]]
<p>The Eatwell Guide shows the proportions of five food groups for a healthy, balanced diet for the general population. It represents a balance over <b>several days</b>, not every meal, emphasises reducing saturated fat and animal products, and is <b>not suitable for children under two</b>.</p>
<div class="tbl"><table><tr><th>Group</th><th>Share (approx.)</th><th>Key nutrients</th></tr>
<tr><td>Fruit and vegetables</td><td>≈ 40% — at least 5 portions (80 g) a day</td><td>vitamin C, folate, beta-carotene, potassium, fibre</td></tr>
<tr><td>Potatoes, bread, rice, pasta and other starchy carbohydrates</td><td>≈ 38% — choose wholegrain or higher-fibre</td><td>starch, fibre, B vitamins, iron, calcium (fortified flour)</td></tr>
<tr><td>Beans, pulses, fish, eggs, meat and other proteins</td><td>≈ 12% — 2 portions of fish a week, one oily; less red and processed meat</td><td>protein, iron, zinc, B12, omega-3</td></tr>
<tr><td>Dairy and alternatives</td><td>≈ 8% — lower-fat, lower-sugar</td><td>calcium, protein, B2, iodine</td></tr>
<tr><td>Oils and spreads</td><td>≈ 1% — unsaturated, small amounts</td><td>unsaturated fat, vitamins A, D, E</td></tr></table></div>
<p>Around the edge: drink 6–8 glasses of fluid a day; eat foods high in fat, salt and sugar less often and in small amounts; check front-of-pack labels; adults need about 2000 kcal (women) and 2500 kcal (men).</p>
<p>Nutrients are also classified as <b>macronutrients</b> (protein, lipids, carbohydrates — measured in <b>g</b>) and <b>micronutrients</b> (vitamins, minerals, trace elements — measured in <b>mg</b> and <b>µg</b>).</p>` },
    { h: 'Biological value and bioavailability', html: `
<p><b>Biological value</b> (of protein) refers to whether a protein food contains <b>all nine essential amino acids</b>:</p>
<ul><li><b>High biological value (HBV)</b> — contains all of them: meat, fish, eggs, milk and cheese. <b>Soya</b> is the main plant source of HBV protein (the WJEC notes treat it as the only one; quinoa and mycoprotein are sometimes also described as complete).</li>
<li><b>Low biological value (LBV)</b> — missing one or more (the limiting amino acid): cereals (low in <b>lysine</b>), pulses (low in <b>methionine</b>), nuts, seeds. <b>Gelatine</b> is the only animal LBV protein.</li></ul>
<p>LBV foods are not less important: eating a variety of LBV proteins together — <b>protein complementation</b> — supplies all the essential amino acids (beans on toast, dhal with rice, hummus with pitta).</p>
<p>More broadly, <b>bioavailability</b> is the amount of a nutrient that can actually be used after digestion and absorption. Spinach is high in iron and calcium, but <b>oxalates</b> bind calcium, <b>phytates</b> bind iron, and <b>polyphenols</b> (tannins in tea, coffee, wine) bind non-haem iron, zinc and protein. Magnesium, iron and calcium compete for carrier proteins, while vitamin C boosts iron and vitamin D boosts calcium. The body also adjusts absorption to its needs.</p>` },
    { h: 'Glycaemic index and glycaemic load', html: `
[[d:gicurve]]
<p>The <b>glycaemic index (GI)</b> ranks carbohydrate foods (0–100) by how quickly they raise blood glucose compared with pure glucose (GI 100). It was created in the 1980s to help people with diabetes.</p>
<p><b>How GI is measured</b>: after a 12-hour fast a person eats a portion containing <b>50 g of carbohydrate</b> (excluding fibre); blood glucose is measured before and at intervals for <b>2 hours</b> and compared with the glucose reference.</p>
<div class="tbl"><table><tr><th>GI</th><th>Range</th><th>Examples</th></tr><tr><td>Low</td><td>55 or less</td><td>strawberries, broccoli, lentils, rye bread, porridge, pasta, milk</td></tr><tr><td>Medium</td><td>56–69</td><td>new potatoes, pineapple, bananas, pumpkin</td></tr><tr><td>High</td><td>70 or more</td><td>sugar, sugary drinks, white bread, potatoes, white rice</td></tr></table></div>
<p><b>Limitations</b>: not all high-GI foods are unhealthy (watermelon, parsnips) and not all low-GI foods are healthy (chocolate; crisps have a lower GI than plain boiled potatoes because fat slows absorption). GI changes with ripeness, preparation and cooking, portion size, metabolism, time of day and what the food is eaten with — and it ignores portion size.</p>
<p><b>Glycaemic load (GL)</b> — developed at Harvard in 1997 — accounts for the amount of carbohydrate in a typical serving: <b>GL = GI ÷ 100 × grams of (net) carbohydrate</b>. Low GL 0–10, medium 11–19, high 20+. Pineapple has GI 58, but a typical portion has only about 7 g carbohydrate, so its GL is only about 4.</p>
<div class="box tip"><b class="lbl">Exam tip</b><p>GI and GL have the strongest evidence in <b>type 2 diabetes</b>; write “type 2 diabetes” rather than just “diabetes”.</p></div>` },
    { h: 'Nutrient density and energy density', html: `
<p><b>Nutrient density</b> describes the quality and variety of nutrients a food provides. It applies to whole diets too.</p>
<ul><li><b>Nutrient-dense (nutrient-rich)</b> foods contain a wide variety of nutrients: wholegrains, lean meat, fish, broccoli, legumes, nuts.</li>
<li><b>Energy-dense (calorie-dense)</b> foods are high in energy from fat, sugar or refined carbohydrate but low in vitamins, minerals and fibre — “empty calories”: cakes, pastries, crisps, fast food.</li></ul>
<p>A calorie-dense, highly processed diet increases the risk of <b>non-communicable diseases (NCDs)</b> such as CHD and type 2 diabetes. Nutrient density matters most when energy needs are low but nutrient needs are high — older adults, weight loss, pregnancy.</p>` },
    { h: 'Main and secondary sources', html: `
<div class="tbl"><table><tr><th>Nutrient</th><th>Main sources</th><th>Secondary sources</th></tr>
<tr><td>Starch</td><td>bread, pasta, rice, potatoes, cereals</td><td>pulses, root vegetables</td></tr>
<tr><td>Sugars</td><td>sugar, honey, syrups, fruit, milk (lactose)</td><td>sauces, processed foods</td></tr>
<tr><td>Fibre</td><td>wholegrains, pulses, vegetables, fruit</td><td>nuts, seeds</td></tr>
<tr><td>Protein</td><td>meat, fish, eggs, dairy, soya, pulses</td><td>cereals, nuts, seeds</td></tr>
<tr><td>Saturated fat</td><td>butter, lard, fatty meat, cheese, coconut and palm oil</td><td>cakes, pastries, chocolate</td></tr>
<tr><td>Unsaturated fat</td><td>vegetable oils, oily fish, nuts, seeds, avocado</td><td>spreads</td></tr>
<tr><td>Vitamin A</td><td>liver, dairy, eggs</td><td>carrots, leafy greens (beta-carotene)</td></tr>
<tr><td>Vitamin D</td><td>sunlight; oily fish</td><td>eggs, fortified spreads and cereals</td></tr>
<tr><td>B vitamins / folate</td><td>wholegrains, meat, fortified cereals; leafy greens (folate)</td><td>milk, eggs, pulses</td></tr>
<tr><td>Vitamin C</td><td>citrus fruit, berries, peppers</td><td>potatoes, tomatoes, broccoli</td></tr>
<tr><td>Calcium</td><td>milk, cheese, yogurt</td><td>fortified bread and plant milks, canned fish bones, green leaves, seeds</td></tr>
<tr><td>Iron</td><td>red meat, liver, fish</td><td>pulses, dark greens, dried apricots, fortified cereals</td></tr>
<tr><td>Sodium</td><td>salt, processed and cured foods</td><td>bread, cheese, sauces</td></tr></table></div>` },
    { h: 'Finding and calculating nutritional value', html: `
<p>Resources: <b>computer programmes</b> (nutritional analysis software), <b>food labels</b> (per 100 g and per portion), <b>mobile apps</b> (label scanners, food diaries), <b>recipes</b> with nutrition panels, and <b>websites</b> (e.g. the UK Composition of Foods Integrated Dataset, CoFID).</p>
<div class="box def"><b class="lbl">Method</b><ol><li>Find the nutrient content per 100 g of each ingredient.</li><li>Nutrient in ingredient = (mass used ÷ 100) × value per 100 g.</li><li>Add up all ingredients for the whole recipe.</li><li>Divide by the number of portions; compare with reference intakes (%RI) or DRVs.</li></ol></div>
<div class="tbl"><table><tr><th>Adult reference intakes</th><th>per day</th></tr><tr><td>Energy</td><td>8400 kJ / 2000 kcal</td></tr><tr><td>Fat</td><td>70 g</td></tr><tr><td>Saturates</td><td>20 g</td></tr><tr><td>Carbohydrate</td><td>260 g</td></tr><tr><td>Total sugars</td><td>90 g</td></tr><tr><td>Protein</td><td>50 g</td></tr><tr><td>Salt</td><td>6 g</td></tr></table></div>
<p>RIs on labels are based on an average adult woman, so they may not suit children or very active adults.</p>` }
  ],
  eqs: [['"nutrient in ingredient" = @frac{"mass used (g)"}{100} × "value per 100 g"', 'scaling from a label or table'], ['"%RI" = @frac{"amount per portion"}{"reference intake"} × 100', 'per cent of reference intake'], ['"GL" = @frac{"GI"}{100} × "carbohydrate (g)"', 'glycaemic load']],
  worked: [
    { q: 'A pasta bake serves 4. It contains 300 g pasta (13 g protein/100 g), 200 g cheese (25 g/100 g) and 150 g ham (18 g/100 g). Calculate the protein per portion.', s: ['pasta: 3 × 13 = 39 g', 'cheese: 2 × 25 = 50 g', 'ham: 1.5 × 18 = 27 g', 'total = 116 g; per portion = 116 ÷ 4 = 29 g'], a: '29 g of protein per portion' },
    { q: 'Watermelon has a GI of 72 and a 120 g slice contains 9 g of carbohydrate. Calculate the glycaemic load and comment.', s: ['GL = 72 ÷ 100 × 9', '= 6.5', 'This is a low GL (0–10): despite its high GI, a typical portion has little carbohydrate, so it has only a small effect on blood glucose.'], a: 'GL ≈ 6.5 — low' },
    { q: 'Explain why beans on toast is a good meal for a vegan. (3 marks)', s: ['Bread (wheat) and beans are both low biological value proteins.', 'Wheat is low in lysine but contains methionine; beans are low in methionine but contain lysine.', 'Eaten together they complement each other and supply all the essential amino acids — protein complementation.'], a: 'Protein complementation of LBV proteins.' }
  ],
  pitfalls: ['Treating GI as a measure of sugar content — it measures the speed of the blood glucose rise.', 'Using GI to call a food healthy or unhealthy — consider GL, fat, nutrients and portion size.', 'Forgetting to divide by the number of portions in recipe calculations.', 'Describing nutrient density as “lots of calories”.', 'Saying LBV proteins are less important — varied LBV foods provide all essential amino acids.'],
  cards: [
    ['Five Eatwell food groups?', 'Fruit & veg; starchy carbohydrates; beans, pulses, fish, eggs, meat & other proteins; dairy & alternatives; oils & spreads.'],
    ['Who is the Eatwell Guide not for?', 'Children under two.'],
    ['Define biological value.', 'Whether a protein contains all nine essential amino acids (HBV) or lacks one or more (LBV).'],
    ['Main plant HBV protein?', 'Soya.'],
    ['The only animal LBV protein?', 'Gelatine.'],
    ['Limiting amino acid in cereals? In pulses?', 'Cereals: lysine. Pulses: methionine.'],
    ['What is bioavailability?', 'The amount of a nutrient the body can actually use after digestion and absorption.'],
    ['GI thresholds?', 'Low ≤55, medium 56–69, high ≥70.'],
    ['How is GI measured?', '12 h fast, eat 50 g available carbohydrate, measure blood glucose for 2 h vs glucose.'],
    ['GL formula and thresholds?', 'GL = GI/100 × g carbohydrate; low 0–10, medium 11–19, high 20+.'],
    ['Define nutrient density.', 'The quality and variety of nutrients a food provides relative to its energy.'],
    ['“Empty calories”?', 'Energy-dense foods with few nutrients, e.g. cakes, crisps, sugary drinks.'],
    ['Macronutrients vs micronutrients units?', 'Macro in grams; micro in mg or µg.'],
    ['Five resources for nutritional values?', 'Computer programmes, food labels, mobile apps, recipes, websites.'],
    ['Formula to scale a nutrient?', 'Mass used ÷ 100 × value per 100 g.'],
    ['Adult RI for energy, fat and salt?', '2000 kcal / 8400 kJ; 70 g fat; 6 g salt.']
  ],
  quiz: [
    { q: 'Which is the main plant source of HBV protein?', o: ['Soya', 'Wheat', 'Lentils', 'Rice'], x: 'Contains all essential amino acids.' },
    { q: 'Which animal protein is LBV?', o: ['Gelatine', 'Egg', 'Milk', 'Fish'], x: 'Gelatine lacks tryptophan.' },
    { q: 'Beans on toast is an example of…', o: ['protein complementation', 'fortification', 'a high-GI meal', 'bioavailability'], x: 'LBV + LBV.' },
    { q: 'A food with GI 60 is…', o: ['medium GI', 'low GI', 'high GI', 'not a carbohydrate'], x: 'Medium = 56–69.' },
    { q: 'When measuring GI, the test portion contains…', o: ['50 g of available carbohydrate', '100 g of food', '50 kcal', '10 g of sugar'], x: 'Compared with 50 g glucose.' },
    { q: 'A food has GI 80 and 25 g carbohydrate per portion. GL =', o: ['20', '8', '105', '32'], x: '80 ÷ 100 × 25 = 20 (high).' },
    { q: 'Crisps have a lower GI than boiled potatoes because…', o: ['fat slows carbohydrate absorption', 'they contain more sugar', 'they are healthier', 'they contain no starch'], x: 'A limitation of GI.' },
    { q: 'Oxalates in spinach reduce the absorption of…', o: ['calcium', 'vitamin C', 'fat', 'protein'], x: 'They bind calcium.' },
    { q: 'Nutrient-dense foods provide…', o: ['a wide variety of nutrients relative to their energy', 'lots of energy and few nutrients', 'only protein', 'only fat'], x: 'e.g. broccoli, fish, pulses.' },
    { q: 'A recipe uses 250 g of flour containing 10 g protein per 100 g. Protein from the flour =', o: ['25 g', '2.5 g', '250 g', '40 g'], x: '250 ÷ 100 × 10.' },
    { q: 'About what fraction of the Eatwell Guide is fruit and vegetables?', o: ['Just over a third', 'A tenth', 'Half', 'A twentieth'], x: 'About 40%.' },
    { q: 'A product has 15 g fat per portion. %RI for fat =', o: ['21%', '15%', '43%', '7%'], x: '15 ÷ 70 × 100.' },
    { q: 'Reference intakes on labels are based on…', o: ['an average adult woman', 'a teenage boy', 'a toddler', 'an elite athlete'], x: 'So may not suit every group.' }
  ],
  exam: [
    { q: 'Define the term nutrient density. [2]', m: 2, ms: ['the amount / variety of nutrients (vitamins, minerals, protein, fibre) in a food', 'in relation to its energy content'] },
    { q: 'Explain what is meant by glycaemic index and why low-GI foods are recommended for people with type 2 diabetes. [4]', m: 4, ms: ['GI ranks carbohydrate foods by how fast they raise blood glucose', 'compared with glucose (100) / 0–100 scale', 'low-GI foods are digested and absorbed slowly — gradual rise', 'avoids spikes / less insulin demand / better control / satiety'] },
    { q: 'Evaluate the usefulness of GI as a way of choosing healthy foods. [6]', m: 6, ms: ['helpful for blood glucose control in type 2 diabetes', 'encourages wholegrains, pulses, fruit and vegetables', 'but ignores portion size — GL is better (e.g. watermelon, pineapple)', 'some low-GI foods are high in fat / sugar (chocolate, crisps)', 'GI varies with ripeness, cooking, what it is eaten with, the individual', 'conclusion: useful alongside other guidance, not alone'] },
    { q: 'A vegetable chilli serving 6 contains 400 g kidney beans (7 g protein/100 g), 300 g rice (2.6 g/100 g) and 500 g vegetables (1.5 g/100 g). Calculate the protein per portion. [3]', m: 3, ms: ['beans 28 g; rice 7.8 g; vegetables 7.5 g', 'total 43.3 g', 'per portion ≈ 7.2 g'] },
    { q: 'Evaluate the suitability of a plant-based diet for meeting the protein needs of an adolescent. [8]', m: 8, ms: ['adolescents need protein for rapid growth / puberty', 'most plant proteins are LBV — lack one or more essential amino acids', 'soya is HBV; tofu, tempeh, edamame are good sources', 'protein complementation across the day meets needs (cereal + pulse)', 'plant foods bring fibre and less saturated fat', 'lower digestibility / bulk — larger volumes needed', 'related nutrients at risk: iron, zinc, B12, calcium, iodine, omega-3 — fortified foods / supplements', 'reasoned conclusion: suitable if well planned'] }
  ],
  sims: ['eatwell', 'gi', 'label'], gens: ['nutr1', 'nutr2', 'ri1', 'gl1']
});

TOPICS.push({
  id: '1.9', unit: '1', ref: '1.1.4', title: 'Production methods and nutritional value', short: 'Agriculture, cooking, packaging, preservation, fortification',
  summary: 'The nutritional profile of food is shaped by how it is grown or reared, stored, packaged, cooked, preserved and fortified. Water-soluble vitamins are especially vulnerable to heat, water, light and oxygen; frying adds fat; salting and jam-making add sodium and sugar; fortification adds nutrients back.',
  spec: [
    'Agricultural background: selective breeding, soil, animal feed; post-harvest nutrient loss',
    'Cooking methods, for example boiling, steaming, roasting, deep fat frying, air frying (also poaching, baking, grilling, stir-frying)',
    'Packaging/storage methods: cold store; vacuum packing; Aseptic Food Processing and Packaging (AFP); also shrink wrap, MAP, CAP, active packaging',
    'Preservation methods: bottling, canning, drying, freezing, jamming/chutney making, pickling, salting, UHT (and pasteurisation, evaporated/condensed milk)',
    'Fortification: breakfast cereals (B vitamins); vitamins A and D in margarine; white bread/flour (calcium, iron, B vitamins, folic acid); yogurt/spreads (sterols and stanols)'
  ],
  learn: [
    { h: 'Before the kitchen: agriculture and harvest', html: `
<p>Nutritional quality starts on the farm. <b>Selective and cross breeding</b> improve crops and livestock — maize and sweet potatoes bred for more beta-carotene; brassicas (cabbage, kale, broccoli, cauliflower) developed from wild mustard; leaner pigs; cattle with better fatty-acid profiles. Crops from nutrient-poor <b>soil</b> contain fewer minerals; well-fed animals give more nutritious meat, milk and eggs — hens fed omega-3-rich plants lay <b>omega-3 enriched eggs</b>.</p>
<p>After harvest or slaughter, natural <b>enzymes and bacteria</b> start breaking down vitamin C, B vitamins, omega-3/6 fatty acids and carotenoids — why freshly picked produce is more nutritious and fish is frozen at sea. Meat is <b>aged</b> so enzymes tenderise it.</p>` },
    { h: 'Cooking methods', html: `
<div class="tbl"><table><tr><th>Method</th><th>Effect on nutritional value</th></tr>
<tr><td><b>Boiling</b></td><td>starch gelatinises and protein coagulates — easier to digest; water-soluble vitamins and minerals <b>leach</b> into the water; up to <b>50% of vitamin C</b> lost (greens worst); B1, B2, B3 leached and heat-damaged. Reduce loss: minimal water, add to already boiling water, lid on, short time, use the water</td></tr>
<tr><td><b>Steaming</b></td><td>no contact with water and lower temperature — only about <b>15% of vitamin C</b> lost (35% more retained than boiling)</td></tr>
<tr><td>Poaching</td><td>lower temperature than boiling but food is in water — vitamins C, B1, B2, B3 still lost</td></tr>
<tr><td>Baking and roasting</td><td>dry heat: protein denatures and coagulates (overcooking makes it tough and less digestible); heat-sensitive B vitamins and vitamin C destroyed (roasting worse — higher temperature); added fat raises fat content and polyunsaturated oils can break down; starch <b>dextrinises</b>; <b>Maillard reaction</b> improves flavour but reduces amino acid availability</td></tr>
<tr><td>Grilling</td><td>intense heat destroys about 40% of B vitamins; fat renders and drips out (less fat and fat-soluble vitamins)</td></tr>
<tr><td>Stir-frying</td><td>short time, so less vitamin loss; a little oil increases fat but helps absorb vitamin A</td></tr>
<tr><td><b>Deep fat frying</b></td><td>high heat destroys water-soluble vitamins; food added before the oil is hot (170–190 °C) absorbs more fat — much higher energy; coatings dextrinise; reused oil oxidises; starchy foods can form <b>acrylamide</b></td></tr>
<tr><td><b>Air frying</b></td><td>hot circulating air, little or no oil, quicker — keeps more micronutrients than deep frying and is much lower in fat and energy; proteins denature and starches dextrinise as usual</td></tr></table></div>
<div class="box warn"><b class="lbl">Pitfall</b><p>Don’t recommend roasting or baking to “save” vitamin C because no water is used — the high heat still destroys it. Fat-soluble vitamins and minerals are more stable than water-soluble vitamins.</p></div>` },
    { h: 'Storage and packaging', html: `
<ul><li><b>Cold storage</b> — fruit and vegetables at 1–5 °C to slow ripening; meat at 1–4 °C (protein and minerals stable, omega-3 oxidises); fish chilled on ice (1–2 days) or <b>frozen at sea</b>. Light degrades water-soluble vitamins; washing cut produce leaches them.</li>
<li><b>Shrink wrap</b> — film heat-shrunk to the food (fresh meat): prevents dehydration and contamination but not airtight, so fats oxidise and vitamins degrade.</li>
<li><b>Vacuum packing</b> — all air removed: much less oxidation of fats and vitamins and slower microbial growth; excellent moisture retention; weeks chilled, months frozen. Better than shrink wrap.</li>
<li><b>Modified atmosphere packaging (MAP)</b> — air replaced with CO₂ (slows microbes), nitrogen (filler) and sometimes oxygen (red colour of red meat): meat up to 21 days, fish 10 days. Good appearance, but less protective than vacuum packing if oxygen is present.</li>
<li><b>Controlled atmosphere packaging (CAP)</b> — gases adjusted in sealed rooms for long-term bulk storage of produce.</li>
<li><b>Aseptic food processing and packaging (AFP)</b> — food and packaging are <b>sterilised separately</b> and filled in a <b>sterile environment</b>; very high temperature for a very short time, no preservatives — flavour, colour and nutrients retained; shelf-stable for 6–12 months unopened (juices, UHT milk, soups, plant drinks).</li>
<li><b>Active packaging</b> — materials that interact with the food: <b>oxygen scavengers</b> and <b>ethylene absorbers</b> (slow ripening).</li></ul>
<p>Once any pack is opened, nutrient loss, microbial growth and drying speed up.</p>` },
    { h: 'Preservation methods', html: `
<div class="tbl"><table><tr><th>Method</th><th>Nutritional impact</th></tr>
<tr><td><b>Freezing</b> (−18 to −24 °C)</td><td>blanching first loses some vitamin C, B1 and B9; more water-soluble vitamins leach on thawing; ice crystals damage cell walls (texture); long storage lets fats go rancid, losing omega-3/6 and fat-soluble vitamins</td></tr>
<tr><td><b>Bottling</b></td><td>heat-treated in sterile jars; macronutrients and minerals kept; vitamins C and B degraded</td></tr>
<tr><td><b>Canning</b> (≥ 115 °C)</td><td>more losses than bottling (higher temperature) of water-soluble and heat-sensitive vitamins; but <b>lycopene</b> (tomatoes) and <b>beta-carotene</b> (carrots, pumpkin, sweet potato) become <b>more available</b>; softened fish bones add calcium; salt or syrup may be added</td></tr>
<tr><td><b>Drying</b></td><td>macronutrients and minerals largely kept; vitamin C largely lost, some B; nutrients and sugar <b>concentrated</b> per gram — labels give values for the reconstituted food</td></tr>
<tr><td><b>Jam</b> / <b>chutney</b></td><td>long boiling destroys vitamin C; lots of sugar adds energy without nutrients; chutney adds salt (sodium) but spices add antioxidants</td></tr>
<tr><td><b>Pickling</b></td><td>macronutrients stable; brine increases sodium; heat and light (clear jars) destroy vitamins C and B2</td></tr>
<tr><td><b>Salting</b></td><td>sodium increases dramatically; no heat, so vitamins better kept unless they leach into brine</td></tr>
<tr><td>Pasteurisation (72 °C for 15 s)</td><td>very little effect; 10–20% of vitamin C lost; milk proteins slightly more digestible; must be refrigerated</td></tr>
<tr><td><b>UHT</b> (132–135 °C for 1–2 s)</td><td>6–9 months unrefrigerated; 20–50% of vitamin C and some B2 and B3 lost; protein and calcium unaffected</td></tr>
<tr><td>Evaporated / condensed milk</td><td>60% of water removed — nutrients concentrated; up to 90% vitamin C and some B1 lost; condensed milk has 40–45% added sugar</td></tr></table></div>
<div class="box tip"><b class="lbl">Revision tip</b><p>Group effects by nutrient: water-soluble vitamins are hit hardest by heat, water, light and oxygen; fat-soluble vitamins, minerals and macronutrients are much more stable.</p></div>` },
    { h: 'Fortification', html: `
<p><b>Fortification</b> is adding nutrients during or after processing, either to replace nutrients lost in processing or to add nutrients not naturally present.</p>
<div class="tbl"><table><tr><th>Food</th><th>Purpose</th><th>Nutrients added</th><th>Notes</th></tr>
<tr><td>Wheat flour and white bread (not wholegrain)</td><td>replace nutrients lost when bran and germ are milled out — <b>required by law</b></td><td><b>iron, thiamin, niacin, calcium</b> (except wholemeal and some self-raising flours); <b>folic acid from December 2026</b></td><td>small mills exempt; mandatory vitamin D has been discussed since 2015</td></tr>
<tr><td>Margarine and spreadable vegetable fats</td><td>to match butter</td><td><b>vitamins A and D</b></td><td>blended butter spreads and some “light” spreads are exempt, but many are voluntarily fortified</td></tr>
<tr><td>Breakfast cereals (voluntary)</td><td>improve nutritional value and appeal</td><td><b>B vitamins</b>, iron, sometimes vitamin D</td><td>widely eaten by children</td></tr>
<tr><td>Yogurt drinks and vegetable fat spreads (voluntary)</td><td>health benefit</td><td>plant <b>sterols and stanols</b></td><td>block cholesterol absorption and lower LDL</td></tr>
<tr><td>Plant milks (voluntary)</td><td>match cow’s milk</td><td>calcium, vitamins D and B12, iodine</td><td>check labels</td></tr></table></div>
<p>Manufacturers may not claim that a food prevents a disease, but may make approved claims such as “a good source of iron” or “calcium contributes to the maintenance of normal bones”, which they must be able to prove.</p>` }
  ],
  eqs: [['"% loss" = @frac{"original" - "final"}{"original"} × 100', 'nutrient loss during processing']],
  worked: [
    { q: 'Raw broccoli contains 79 mg vitamin C per 100 g. After boiling it contains 44 mg per 100 g. Calculate the percentage loss.', s: ['loss = 79 − 44 = 35 mg', '% loss = 35 ÷ 79 × 100 = 44.3%'], a: '44% loss' },
    { q: 'Compare the nutritional effects of deep fat frying and air frying potato chips. (4 marks)', s: ['Deep-fried chips absorb oil — especially if the oil is not hot enough — so their fat and energy content rise sharply.', 'Air frying uses circulating hot air and little or no oil, so the chips stay much lower in fat and energy.', 'Air frying is quicker, so slightly more water-soluble vitamins are retained, though both lose some to heat.', 'Both dextrinise the starch; over-browning either can form acrylamide; reused frying oil oxidises.'], a: 'Air frying: far less fat/energy, a little better vitamin retention.' }
  ],
  pitfalls: ['Recommending roasting or baking to preserve vitamin C — the high heat still destroys it.', 'Saying frozen vegetables have no nutrients — losses are small.', 'Saying canning lowers every nutrient — lycopene and beta-carotene become more available, and fish bones add calcium.', 'Mixing up fortification (adding nutrients) and preservation (stopping spoilage).', 'Saying UHT milk loses its calcium — minerals are not destroyed by heat.'],
  cards: [
    ['How much vitamin C can boiling destroy?', 'Up to about 50%.'],
    ['How much vitamin C is lost by steaming?', 'About 15%.'],
    ['Why do deep-fried foods absorb more fat?', 'If added before the oil reaches temperature (170–190 °C) they absorb more oil.'],
    ['Nutritional advantage of air frying?', 'Little or no oil — much lower fat and energy; quicker so fewer vitamins lost.'],
    ['What is MAP?', 'Modified atmosphere packaging: air replaced with CO₂, N₂ (and sometimes O₂) to extend shelf life.'],
    ['Vacuum packing vs shrink wrap?', 'Vacuum removes all air — less oxidation, better nutrient and moisture retention.'],
    ['What is AFP?', 'Food and packaging sterilised separately, filled in a sterile environment — shelf-stable, nutrients retained, no preservatives.'],
    ['Examples of active packaging?', 'Oxygen scavengers, ethylene absorbers.'],
    ['UHT conditions and shelf life?', '132–135 °C for 1–2 s; 6–9 months unopened.'],
    ['Pasteurisation conditions?', '72 °C for 15 seconds, then cooled quickly.'],
    ['Which nutrients become more available on canning?', 'Lycopene (tomatoes) and beta-carotene (carrots, pumpkin, sweet potato).'],
    ['Nutrients added to UK flour by law?', 'Iron, thiamin, niacin, calcium; folic acid from December 2026.'],
    ['Why is margarine fortified?', 'With vitamins A and D to match butter.'],
    ['Why are sterols/stanols added to spreads?', 'To block cholesterol absorption and lower LDL.'],
    ['How can feed change food nutrition?', 'e.g. hens fed omega-3-rich plants lay omega-3 enriched eggs.']
  ],
  quiz: [
    { q: 'Which cooking method retains the most vitamin C in broccoli?', o: ['Steaming', 'Boiling for 20 minutes', 'Roasting', 'Deep fat frying'], x: 'About 15% loss vs up to 50% for boiling.' },
    { q: 'Why is roasting NOT a good way to preserve vitamin C?', o: ['High heat destroys it even without water', 'It adds water', 'It adds vitamin C', 'It leaches vitamin C'], x: 'A common pitfall.' },
    { q: 'Grilling reduces fat content because…', o: ['fat renders and drips away', 'it adds oil', 'fat is absorbed', 'it uses water'], x: 'But ~40% of B vitamins are damaged.' },
    { q: 'In MAP for red meat, oxygen is added to…', o: ['keep the red colour', 'kill all bacteria', 'add flavour', 'increase fat'], x: 'CO₂ slows microbes; N₂ is a filler.' },
    { q: 'AFP products keep more nutrients than canned products because…', o: ['they are sterilised at high temperature for a very short time', 'they are frozen', 'they contain preservatives', 'they are not heated'], x: 'Then packed in sterile conditions.' },
    { q: 'UHT milk is heated to about…', o: ['132–135 °C for 1–2 seconds', '72 °C for 15 seconds', '100 °C for 30 minutes', '−18 °C'], x: '72 °C/15 s is pasteurisation.' },
    { q: 'Canning tomatoes increases the availability of…', o: ['lycopene', 'vitamin C', 'thiamin', 'folate'], x: 'Heat breaks down cell structures.' },
    { q: 'Which is added to UK white flour by law?', o: ['Iron, thiamin, niacin and calcium', 'Vitamins A and D', 'Plant sterols', 'Vitamin C'], x: 'Folic acid is being added from December 2026.' },
    { q: 'Plant sterols and stanols are added to spreads to…', o: ['lower blood cholesterol', 'preserve the spread', 'add colour', 'raise vitamin C'], x: 'They block cholesterol absorption.' },
    { q: 'Dried apricots compared with fresh apricots have…', o: ['more sugar and energy per 100 g', 'more vitamin C per 100 g', 'less fibre per 100 g', 'the same energy per 100 g'], x: 'Water removal concentrates nutrients except vitamin C.' },
    { q: 'Which is a nutritional disadvantage of salting?', o: ['It greatly increases sodium', 'It adds fibre', 'It removes fat', 'It destroys calcium'], x: 'Raises blood pressure risk.' },
    { q: 'An ethylene absorber in packaging…', o: ['slows ripening of fruit', 'adds flavour', 'sterilises milk', 'fortifies food'], x: 'A type of active packaging.' },
    { q: 'Why is fish often frozen at sea?', o: ['Omega-3 fats and vitamins start degrading quickly after catch', 'To add salt', 'To make it cheaper to cook', 'To increase protein'], x: 'Freezing pauses oxidation.' }
  ],
  exam: [
    { q: 'State two ways of reducing vitamin C loss when cooking vegetables. [2]', m: 2, ms: ['use minimum water / steam / microwave', 'add to already boiling water / use a lid / cook for the shortest time', 'prepare just before cooking / cut into larger pieces', 'use cooking water in gravy or sauces (any two)'] },
    { q: 'Explain why white bread in the UK is fortified. [3]', m: 3, ms: ['milling removes bran and germ', 'which contain B vitamins / iron / fibre', 'by law iron, thiamin, niacin and calcium are added (folic acid from Dec 2026) to replace losses / improve intakes'] },
    { q: 'Compare vacuum packing and modified atmosphere packaging for fresh fish. [4]', m: 4, ms: ['vacuum packing removes all air — very little oxidation of omega-3 / vitamins', 'excellent moisture retention; longer shelf life', 'MAP replaces air with CO₂ / N₂ (sometimes O₂) — slows microbes, keeps appearance', 'if oxygen present, fats / vitamins degrade faster; shelf life ~10 days for fish'] },
    { q: 'Discuss the impact of preservation methods on the nutritional value of food. [8]', m: 8, ms: ['freezing: small losses from blanching; fats may go rancid over time', 'canning / bottling: heat destroys vitamin C and B vitamins; canning more than bottling', 'canning increases lycopene / beta-carotene availability; fish bones add calcium', 'drying: vitamin C lost; nutrients and sugar concentrated', 'jam / chutney: vitamin C lost; high sugar (and salt) added', 'salting / pickling: sodium increases; brine leaches vitamins; clear jars lose B2 / C', 'UHT / pasteurisation: small losses; minerals and protein unaffected', 'reasoned conclusion: water-soluble vitamins most vulnerable; minerals / macronutrients stable'] }
  ],
  sims: ['cooking'], gens: ['loss1', 'loss2']
});
