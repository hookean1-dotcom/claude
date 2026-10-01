/* ==========================================================
   UNIT 1 · ANATOMY AND PHYSIOLOGY — part 2
   C The respiratory system · D The cardiovascular system
   ========================================================== */
TOPICS.push({
  id: '1.9', unit: '1', sys: 'C', area: 'cardio', ref: 'C1–C2 Structure and function of the respiratory system', title: 'Respiratory structure, breathing and gaseous exchange', short: 'Airway structures, intercostals, mechanics of breathing at rest and in exercise, diffusion',
  summary: 'The structures of the respiratory system from the nasal cavity to the alveoli, the diaphragm and the external and internal intercostal muscles; the mechanics of inspiration and expiration at rest and during exercise; and gaseous exchange at the alveoli by diffusion.',
  spec: [
    'Structure: nasal cavity, epiglottis, pharynx, larynx, trachea, bronchus, bronchioles, lungs, alveoli, diaphragm, thoracic cavity',
    'Intercostal muscles: external and internal',
    'Mechanisms of breathing (inspiration and expiration) at rest and during exercise',
    'Gaseous exchange'
  ],
  learn: [
    { h: 'The pathway of air', html: `
[[d:airway]]
<div class="tbl"><table><tr><th>Structure</th><th>Role</th></tr>
<tr><td><b>Nasal cavity</b></td><td>warms, moistens and filters air (hairs and mucus)</td></tr>
<tr><td><b>Pharynx</b></td><td>the throat — a passage for both air and food</td></tr>
<tr><td><b>Epiglottis</b></td><td>flap that closes over the larynx when swallowing so food does not enter the trachea</td></tr>
<tr><td><b>Larynx</b></td><td>voice box; connects the pharynx and trachea</td></tr>
<tr><td><b>Trachea</b></td><td>windpipe, kept open by C-shaped rings of cartilage; lined with cilia and mucus</td></tr>
<tr><td><b>Bronchi</b> (bronchus)</td><td>two branches, one into each lung</td></tr>
<tr><td><b>Bronchioles</b></td><td>smaller branching airways leading to the alveoli</td></tr>
<tr><td><b>Alveoli</b></td><td>tiny air sacs where gaseous exchange takes place</td></tr>
<tr><td><b>Lungs</b> and <b>thoracic cavity</b></td><td>the lungs sit in the thoracic (chest) cavity, protected by the ribs and sternum, sealed at the base by the diaphragm</td></tr></table></div>` },
    { h: 'Mechanics of breathing', html: `
<div class="tbl"><table><tr><th></th><th>At rest</th><th>During exercise</th></tr>
<tr><td><b>Inspiration</b></td><td>diaphragm contracts and flattens; <b>external intercostals</b> contract, lifting the ribs up and out → thoracic cavity volume ↑, pressure in the lungs ↓ below atmospheric → air flows in</td><td>as at rest, plus extra muscles (e.g. sternocleidomastoid, pectorals) lift the ribs further → bigger volume change, deeper breaths</td></tr>
<tr><td><b>Expiration</b></td><td><b>passive</b>: diaphragm and external intercostals relax; elastic lungs recoil → volume ↓, pressure ↑ → air flows out</td><td><b>active</b>: <b>internal intercostals</b> contract, pulling the ribs down and in, and the abdominals push the diaphragm up → faster, more forceful expiration</td></tr></table></div>
<p>Air always moves from <b>high pressure to low pressure</b>.</p>` },
    { h: 'Gaseous exchange', html: `
[[d:gasex]]
<p><b>Diffusion</b> is the movement of gas from an area of high concentration (partial pressure) to low concentration. At the alveoli, oxygen diffuses into the blood and carbon dioxide diffuses out. At the muscles, oxygen diffuses from the blood into the muscle and carbon dioxide diffuses into the blood.</p>
<div class="box tip"><b class="lbl">Features of the alveoli that speed up diffusion</b><p>Huge surface area; walls one cell thick (short diffusion distance); surrounded by a dense capillary network; moist surface; a steep concentration gradient maintained by breathing and blood flow.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Describe the process of inspiration at rest. (3 marks)', s: ['The diaphragm contracts and flattens; the external intercostals contract, lifting the ribs up and out.', 'The volume of the thoracic cavity increases, so pressure in the lungs decreases below atmospheric pressure.', 'Air moves into the lungs from high to low pressure.'], a: 'Diaphragm + external intercostals contract → ↑ volume, ↓ pressure → air in.' },
    { q: 'Explain why expiration becomes active during exercise. (2 marks)', s: ['The body needs to remove more carbon dioxide and breathe faster and deeper.', 'The internal intercostals and abdominals contract to force air out more quickly and completely.'], a: 'Internal intercostals and abdominals force air out.' }
  ],
  pitfalls: ['Saying the diaphragm moves up during inspiration — it contracts and flattens (moves down).', 'Mixing up external (inspiration) and internal (forced expiration) intercostals.', 'Saying gases are “pumped” across the alveoli — they diffuse.', 'Forgetting that resting expiration is passive.'],
  cards: [
    ['Role of the nasal cavity?', 'Warms, moistens and filters air.'], ['Role of the epiglottis?', 'Closes over the larynx when swallowing.'], ['Larynx?', 'Voice box, between pharynx and trachea.'], ['Trachea?', 'Windpipe with rings of cartilage.'],
    ['Where does gaseous exchange occur?', 'Alveoli.'], ['Diaphragm in inspiration?', 'Contracts and flattens.'], ['Muscles for inspiration at rest?', 'Diaphragm and external intercostals.'], ['Muscles for active expiration?', 'Internal intercostals and abdominals.'],
    ['Is resting expiration active or passive?', 'Passive — muscles relax and lungs recoil.'], ['Diffusion?', 'Movement of gas from high to low concentration (partial pressure).'], ['Features of alveoli?', 'Large surface area, thin walls, many capillaries, moist.'], ['Air moves from…?', 'High pressure to low pressure.']
  ],
  quiz: [
    { q: 'Which structure stops food entering the trachea?', o: ['Epiglottis', 'Larynx', 'Pharynx', 'Bronchus'], x: 'Flap over the larynx.' },
    { q: 'During inspiration the diaphragm…', o: ['contracts and flattens', 'relaxes and domes upward', 'does not move', 'pushes air out'], x: 'Increases thoracic volume.' },
    { q: 'Which muscles contract during active expiration?', o: ['Internal intercostals and abdominals', 'External intercostals', 'Diaphragm only', 'Pectorals only'], x: 'Pull ribs down.' },
    { q: 'Gaseous exchange works by…', o: ['diffusion', 'active pumping', 'osmosis of oxygen', 'filtration'], x: 'High to low concentration.' },
    { q: 'At rest, expiration is…', o: ['passive', 'active', 'impossible', 'controlled by the internal intercostals'], x: 'Elastic recoil.' },
    { q: 'The voice box is the…', o: ['larynx', 'pharynx', 'trachea', 'epiglottis'], x: 'Larynx.' },
    { q: 'When thoracic volume increases, lung pressure…', o: ['decreases and air flows in', 'increases and air flows out', 'stays the same', 'reverses blood flow'], x: 'Boyle’s law.' },
    { q: 'Rings of cartilage keep which structure open?', o: ['Trachea', 'Alveoli', 'Capillaries', 'Pharynx'], x: 'Trachea.' }
  ],
  exam: [
    { q: 'Name the structure where gaseous exchange takes place. [1]', m: 1, ms: ['alveoli'] },
    { q: 'Describe the role of the intercostal muscles during exercise. [3]', m: 3, ms: ['external intercostals contract during inspiration', 'lift the ribs up and out / increase thoracic volume (deeper breaths)', 'internal intercostals contract during expiration', 'pull ribs down and in / force air out quickly'] },
    { q: 'Explain how the structure of the alveoli is adapted for gaseous exchange. [4]', m: 4, ms: ['large surface area — more gas exchanged at once', 'walls one cell thick — short diffusion distance', 'dense capillary network / good blood supply — maintains concentration gradient', 'moist — gases dissolve before diffusing'] }
  ],
  sims: ['breathmech', 'airwayorder'], gens: []
});

TOPICS.push({
  id: '1.10', unit: '1', sys: 'C', area: 'cardio', ref: 'C3–C4 Lung volumes and control of breathing', title: 'Lung volumes and control of breathing', short: 'Tidal volume, vital capacity, residual volume, total lung volume, minute ventilation; neural and chemical control',
  summary: 'The lung volumes — tidal volume, vital capacity, residual volume, total lung volume and minute ventilation — and how they change with exercise; and how breathing rate is controlled by the respiratory centre in the medulla oblongata (neural) and by chemoreceptors detecting carbon dioxide and pH (chemical).',
  spec: [
    'Lung volumes: tidal volume, vital capacity, residual volume, total lung volume, minute ventilation (VE)',
    'Changes in lung volumes in response to exercise and sports performance',
    'Neural control: the medulla oblongata as the respiratory centre in the brain',
    'Chemical control: chemoreceptors detect changes in blood carbon dioxide and pH'
  ],
  learn: [
    { h: 'Lung volumes', html: `
[[d:spiro]]
<div class="tbl"><table><tr><th>Volume</th><th>Definition</th><th>Typical value</th><th>In exercise</th></tr>
<tr><td><b>Tidal volume (TV)</b></td><td>volume of air breathed in or out in one normal breath</td><td>≈ 0.5 L at rest</td><td>increases (up to ≈ 2.5–3 L)</td></tr>
<tr><td><b>Vital capacity (VC)</b></td><td>maximum volume of air breathed out after a maximum breath in</td><td>≈ 4–5 L</td><td>unchanged in a session; increases slightly with training</td></tr>
<tr><td><b>Residual volume (RV)</b></td><td>volume of air left in the lungs after maximal expiration — keeps the alveoli open</td><td>≈ 1–1.5 L</td><td>unchanged</td></tr>
<tr><td><b>Total lung volume (capacity)</b></td><td>vital capacity + residual volume</td><td>≈ 5–6 L</td><td>unchanged</td></tr>
<tr><td><b>Minute ventilation (VE)</b></td><td>volume of air breathed in or out per minute = tidal volume × breathing rate</td><td>≈ 6–7.5 L/min at rest</td><td>increases (100+ L/min in maximal exercise)</td></tr></table></div>` },
    { h: 'Control of breathing', html: `
<ul><li><b>Neural control</b>: the <b>respiratory centre</b> in the <b>medulla oblongata</b> (brain stem) sends nerve impulses to the diaphragm and intercostal muscles, setting the rate and depth of breathing.</li>
<li><b>Chemical control</b>: <b>chemoreceptors</b> (in the aorta, carotid arteries and medulla) detect an <b>increase in blood carbon dioxide</b> and a <b>fall in pH</b> (more acidic blood) during exercise. They send messages to the respiratory centre, which increases the rate and depth of breathing to remove CO₂.</li></ul>
<p>Other receptors also help: proprioceptors in muscles and joints detect movement; stretch receptors in the lungs prevent over-inflation.</p>` }
  ],
  eqs: [['"VE" = "TV" × f', 'minute ventilation = tidal volume × breathing rate'], ['"TLV" = "VC" + "RV"', 'total lung volume = vital capacity + residual volume']],
  worked: [
    { q: 'During exercise a swimmer’s tidal volume is 2.2 L and breathing rate is 35 breaths/min. Calculate minute ventilation. (1 mark)', s: ['VE = 2.2 × 35 = 77 L/min.'], a: '77 L/min' },
    { q: 'Explain the chemical control of breathing during exercise. (3 marks)', s: ['Exercise increases CO₂ in the blood and lowers blood pH.', 'Chemoreceptors detect this and send impulses to the respiratory centre in the medulla oblongata.', 'The respiratory centre increases impulses to the diaphragm and intercostals — breathing rate and depth increase.'], a: 'Chemoreceptors → medulla → ↑ rate and depth.' }
  ],
  pitfalls: ['Saying vital capacity increases during a single exercise session.', 'Forgetting units: tidal volume in L, minute ventilation in L/min.', 'Saying chemoreceptors mainly detect low oxygen — at this level, it is rising CO₂ and falling pH.', 'Mixing up the medulla oblongata (respiratory centre) and the SA node.'],
  cards: [
    ['Tidal volume?', 'Air breathed in or out per normal breath (≈ 0.5 L at rest).'], ['Vital capacity?', 'Maximum air breathed out after a maximum breath in.'], ['Residual volume?', 'Air left in the lungs after maximal expiration.'],
    ['Total lung volume?', 'Vital capacity + residual volume.'], ['Minute ventilation?', 'Tidal volume × breathing rate.'], ['Resting minute ventilation?', '≈ 6–7.5 L/min.'],
    ['Respiratory centre?', 'Medulla oblongata in the brain stem.'], ['What do chemoreceptors detect?', 'Increased blood CO₂ and decreased pH.'], ['Effect of exercise on TV?', 'Increases.']
  ],
  quiz: [
    { q: 'Minute ventilation = …', o: ['tidal volume × breathing rate', 'vital capacity + residual volume', 'heart rate × stroke volume', 'tidal volume ÷ breathing rate'], x: 'VE.' },
    { q: 'The air left in the lungs after maximal expiration is…', o: ['residual volume', 'vital capacity', 'tidal volume', 'minute ventilation'], x: 'Keeps alveoli open.' },
    { q: 'The respiratory centre is in the…', o: ['medulla oblongata', 'cerebellum', 'SA node', 'hypothalamus'], x: 'Brain stem.' },
    { q: 'Chemoreceptors respond mainly to…', o: ['increased CO₂ and decreased pH', 'decreased CO₂', 'increased glucose', 'temperature only'], x: 'Acidity.' },
    { q: 'Which volume does NOT change during an exercise session?', o: ['Vital capacity', 'Tidal volume', 'Minute ventilation', 'Breathing rate'], x: 'Fixed maximum.' },
    { q: 'TV 0.5 L × 14 breaths/min = ', o: ['7 L/min', '28 L/min', '0.7 L/min', '14.5 L/min'], x: 'VE.' },
    { q: 'Total lung volume equals…', o: ['vital capacity + residual volume', 'tidal volume × rate', 'vital capacity − tidal volume', 'residual volume only'], x: 'TLV.' }
  ],
  exam: [
    { q: 'Define vital capacity. [1]', m: 1, ms: ['the maximum volume of air that can be breathed out after a maximum breath in'] },
    { q: 'A rower’s tidal volume rises from 0.5 L to 2.5 L and breathing rate from 12 to 40 breaths/min during a race. Calculate the increase in minute ventilation. [2]', m: 2, ms: ['rest 0.5 × 12 = 6 L/min; race 2.5 × 40 = 100 L/min', 'increase = 94 L/min'] },
    { q: 'Explain how breathing rate is controlled during exercise. [4]', m: 4, ms: ['respiratory centre in the medulla oblongata', 'sends impulses to the diaphragm / intercostal muscles (neural control)', 'chemoreceptors detect increased CO₂ / decreased pH in the blood', 'respiratory centre increases rate and depth of breathing', 'proprioceptors detect movement / stretch receptors prevent over-inflation'] }
  ],
  sims: ['breathing'], gens: ['gve', 'tlv']
});

TOPICS.push({
  id: '1.11', unit: '1', sys: 'C', area: 'cardio', ref: 'C5–C7 Responses, adaptations and additional factors', title: 'Respiratory system: responses, adaptations and factors', short: 'Breathing rate and tidal volume; vital capacity, respiratory muscles, diffusion; asthma, altitude',
  summary: 'The respiratory responses to a single session (increased breathing rate and tidal volume), long-term adaptations (increased vital capacity, stronger respiratory muscles, faster diffusion of O₂ and CO₂), and additional factors — asthma, and the effects of altitude and lower partial pressure of oxygen.',
  spec: [
    'Responses to a single session: increase in breathing rate, increased tidal volume',
    'Adaptations: increased vital capacity, increased strength of the respiratory muscles, increase in oxygen and carbon dioxide diffusion rate',
    'Additional factors: asthma; effects of altitude/partial pressure on the respiratory system'
  ],
  learn: [
    { h: 'Responses and adaptations', html: `
<div class="tbl"><table><tr><th>Short-term response</th><th>Why</th></tr>
<tr><td>Increased breathing rate</td><td>chemoreceptors detect ↑ CO₂ / ↓ pH → respiratory centre</td></tr>
<tr><td>Increased tidal volume</td><td>deeper breaths using extra inspiratory muscles</td></tr></table></div>
<div class="tbl"><table><tr><th>Long-term adaptation</th><th>Benefit</th></tr>
<tr><td><b>Increased vital capacity</b></td><td>more air per breath — more oxygen available for diffusion</td></tr>
<tr><td><b>Stronger respiratory muscles</b> (diaphragm, intercostals)</td><td>breathe deeper and more efficiently; less fatigue of breathing muscles</td></tr>
<tr><td><b>Increased O₂ and CO₂ diffusion rate</b></td><td>capillarisation of the alveoli → more gas exchanged, delaying fatigue</td></tr></table></div>` },
    { h: 'Asthma', html: `
<p>Asthma is a condition in which the airways (bronchi and bronchioles) become inflamed and narrow, often with extra mucus — causing wheezing, coughing, tightness of the chest and shortness of breath. Triggers include cold, dry air, pollen, dust and exercise itself (exercise-induced asthma).</p>
<ul><li>Use a reliever inhaler (bronchodilator) before exercise if prescribed; have it available.</li><li>A long, gradual warm-up; avoid very cold, dry air; build fitness gradually.</li><li>Many elite athletes have asthma — with management, it need not stop participation.</li></ul>` },
    { h: 'Altitude and partial pressure', html: `
<p>At altitude the air pressure is lower, so the <b>partial pressure of oxygen</b> is lower. The diffusion gradient between the alveoli and the blood is smaller, so less oxygen enters the blood (haemoglobin is less saturated).</p>
<ul><li><b>Short-term effects</b>: increased breathing rate and heart rate; breathlessness; reduced aerobic performance (VO₂max falls); altitude sickness (headaches, nausea).</li>
<li><b>Acclimatisation</b> (over weeks): more red blood cells (via the hormone EPO) and haemoglobin, improving oxygen transport — why endurance athletes do altitude training camps.</li></ul>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why a marathon runner’s performance is reduced at altitude. (3 marks)', s: ['The partial pressure of oxygen is lower at altitude.', 'The diffusion gradient between the alveoli and the blood is smaller, so less oxygen diffuses into the blood.', 'Less oxygen reaches the working muscles, so aerobic energy production and VO₂max fall.'], a: 'Lower pO₂ → less diffusion → less O₂ to muscles.' },
    { q: 'State two long-term adaptations of the respiratory system. (2 marks)', s: ['Increased vital capacity.', 'Increased strength of respiratory muscles / increased diffusion rate.'], a: '↑ VC; stronger respiratory muscles; ↑ diffusion.' }
  ],
  pitfalls: ['Saying there is “less oxygen” at altitude without mentioning lower partial pressure / diffusion gradient.', 'Listing increased breathing rate as a long-term adaptation (at rest, breathing becomes more efficient).', 'Saying people with asthma should not exercise.', 'Forgetting capillarisation of the alveoli as the cause of faster diffusion.'],
  cards: [
    ['Two respiratory responses to one session?', 'Increased breathing rate and tidal volume.'], ['Three respiratory adaptations?', '↑ vital capacity, stronger respiratory muscles, ↑ O₂/CO₂ diffusion rate.'], ['Asthma?', 'Inflammation and narrowing of the airways.'],
    ['Managing asthma in exercise?', 'Reliever inhaler, long warm-up, avoid cold dry air, gradual build-up.'], ['Effect of altitude on pO₂?', 'Lower partial pressure of oxygen.'], ['Why does altitude reduce performance?', 'Smaller diffusion gradient → less O₂ into the blood.'],
    ['Long-term acclimatisation to altitude?', 'More red blood cells and haemoglobin.']
  ],
  quiz: [
    { q: 'Which is a long-term respiratory adaptation?', o: ['Increased vital capacity', 'Increased tidal volume during a run', 'Increased breathing rate during a run', 'Asthma'], x: 'Adaptation.' },
    { q: 'At altitude the partial pressure of oxygen is…', o: ['lower', 'higher', 'the same', 'zero'], x: 'Lower air pressure.' },
    { q: 'Asthma causes the airways to…', o: ['narrow and inflame', 'widen', 'fill with blood', 'harden with cartilage'], x: 'Bronchoconstriction.' },
    { q: 'Faster diffusion with training is due to…', o: ['capillarisation of the alveoli', 'fewer alveoli', 'thicker alveolar walls', 'less blood flow'], x: 'More capillaries.' },
    { q: 'A good strategy for an asthmatic athlete is…', o: ['a long, gradual warm-up', 'training in very cold dry air', 'avoiding all inhalers', 'maximal sprints with no warm-up'], x: 'Reduces exercise-induced asthma.' },
    { q: 'Over weeks at altitude the body produces more…', o: ['red blood cells', 'lactate', 'residual volume', 'cartilage'], x: 'EPO → RBC.' }
  ],
  exam: [
    { q: 'State two responses of the respiratory system to a single bout of exercise. [2]', m: 2, ms: ['increased breathing rate', 'increased tidal volume'] },
    { q: 'Explain how asthma can affect a performer during exercise. [2]', m: 2, ms: ['airways (bronchioles) narrow / become inflamed', 'less air reaches the alveoli — breathlessness / less oxygen — reduced performance'] },
    { q: 'An endurance athlete travels to compete at altitude.', parts: [
      { q: 'Analyse the effects of altitude on the athlete’s respiratory and cardiovascular systems. [8]', m: 8, lv: true, ms: ['lower air pressure → lower partial pressure of oxygen', 'smaller diffusion gradient at the alveoli → less O₂ diffuses into the blood; haemoglobin less saturated', 'respiratory response: breathing rate and tidal volume increase (chemoreceptors / medulla)', 'cardiovascular response: heart rate and cardiac output increase to deliver enough O₂', 'less O₂ to working muscles → more anaerobic energy, earlier lactate, reduced endurance performance', 'altitude sickness / dehydration from faster breathing in dry air', 'acclimatisation: more red blood cells/haemoglobin (EPO) improves oxygen transport over weeks', 'judgement: performance falls initially; arriving early or altitude training reduces the effect'] }
    ], tag: 'ext' }
  ],
  sims: ['altitude', 'respadapt'], gens: []
});

TOPICS.push({
  id: '1.12', unit: '1', sys: 'D', area: 'cardio', ref: 'D1 Structure of the cardiovascular system', title: 'The heart, blood vessels and blood', short: 'Chambers, valves, septum, major vessels, coronary arteries; arteries to veins; blood composition',
  summary: 'The structure of the heart — atria, ventricles, bicuspid, tricuspid and semi-lunar valves, septum, aorta, vena cava, pulmonary artery and vein, coronary arteries; the structure of arteries, arterioles, capillaries, venules and veins; and the composition of blood.',
  spec: [
    'Heart: atria, ventricles, bicuspid valve, tricuspid valve, semi-lunar valves, septum, major blood vessels (aorta, vena cava, pulmonary artery, pulmonary vein), coronary arteries',
    'Blood vessels: arteries, arterioles, veins, venules, capillaries',
    'Composition of blood: red blood cells, plasma, white blood cells, platelets'
  ],
  learn: [
    { h: 'The heart', html: `
[[d:heart]]
<div class="tbl"><table><tr><th>Structure</th><th>Role</th></tr>
<tr><td><b>Atria</b> (right and left)</td><td>upper chambers; receive blood returning to the heart</td></tr>
<tr><td><b>Ventricles</b> (right and left)</td><td>lower chambers; pump blood out. The left ventricle has the thickest wall — it pumps to the whole body</td></tr>
<tr><td><b>Tricuspid valve</b></td><td>between right atrium and right ventricle — prevents backflow</td></tr>
<tr><td><b>Bicuspid (mitral) valve</b></td><td>between left atrium and left ventricle — prevents backflow</td></tr>
<tr><td><b>Semi-lunar valves</b></td><td>at the exits to the pulmonary artery and aorta — prevent blood flowing back into the ventricles</td></tr>
<tr><td><b>Septum</b></td><td>muscular wall dividing the left and right sides — keeps oxygenated and deoxygenated blood separate</td></tr>
<tr><td><b>Vena cava</b></td><td>brings deoxygenated blood from the body to the right atrium</td></tr>
<tr><td><b>Pulmonary artery</b></td><td>carries deoxygenated blood from the right ventricle to the lungs</td></tr>
<tr><td><b>Pulmonary vein</b></td><td>carries oxygenated blood from the lungs to the left atrium</td></tr>
<tr><td><b>Aorta</b></td><td>carries oxygenated blood from the left ventricle to the body</td></tr>
<tr><td><b>Coronary arteries</b></td><td>supply the heart muscle itself with oxygenated blood</td></tr></table></div>` },
    { h: 'Blood vessels', html: `
[[d:vessels]]
<div class="tbl"><table><tr><th>Vessel</th><th>Structure</th><th>Function</th></tr>
<tr><td><b>Arteries</b></td><td>thick, muscular, elastic walls; small lumen</td><td>carry blood away from the heart at high pressure</td></tr>
<tr><td><b>Arterioles</b></td><td>smaller arteries with smooth muscle</td><td>vasodilate/vasoconstrict to control blood flow into capillaries</td></tr>
<tr><td><b>Capillaries</b></td><td>walls one cell thick; very narrow</td><td>gas, nutrient and waste exchange with tissues</td></tr>
<tr><td><b>Venules</b></td><td>small veins</td><td>collect blood from capillaries</td></tr>
<tr><td><b>Veins</b></td><td>thin walls, large lumen, pocket valves</td><td>return blood to the heart at low pressure; valves prevent backflow</td></tr></table></div>` },
    { h: 'Composition of blood', html: `
<div class="tbl"><table><tr><th>Component</th><th>Function</th></tr>
<tr><td><b>Plasma</b> (≈ 55%)</td><td>straw-coloured liquid; carries nutrients (glucose), hormones, CO₂ and waste, and heat</td></tr>
<tr><td><b>Red blood cells</b> (erythrocytes)</td><td>contain <b>haemoglobin</b>, which carries oxygen (and some CO₂)</td></tr>
<tr><td><b>White blood cells</b> (leucocytes)</td><td>fight infection</td></tr>
<tr><td><b>Platelets</b></td><td>help blood to clot at a wound</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why the left ventricle has a thicker wall than the right ventricle. (2 marks)', s: ['The left ventricle pumps blood to the whole body (systemic circulation)…', '…so it must contract more forcefully than the right ventricle, which only pumps to the lungs.'], a: 'Pumps further (whole body) — needs more force.' },
    { q: 'State the function of the semi-lunar valves. (1 mark)', s: ['Prevent blood flowing back into the ventricles from the aorta and pulmonary artery.'], a: 'Prevent backflow into the ventricles.' }
  ],
  pitfalls: ['Saying all arteries carry oxygenated blood — the pulmonary artery carries deoxygenated blood.', 'Mixing up the bicuspid (left) and tricuspid (right) valves.', 'Saying platelets carry oxygen — red blood cells (haemoglobin) do.', 'Forgetting the coronary arteries supply the heart muscle itself.'],
  cards: [
    ['Valve between RA and RV?', 'Tricuspid.'], ['Valve between LA and LV?', 'Bicuspid (mitral).'], ['Semi-lunar valves?', 'At the exits of the ventricles; prevent backflow.'], ['Septum?', 'Wall separating left and right sides of the heart.'],
    ['Vessel from RV to lungs?', 'Pulmonary artery (deoxygenated).'], ['Vessel from lungs to LA?', 'Pulmonary vein (oxygenated).'], ['Coronary arteries?', 'Supply the heart muscle with oxygenated blood.'], ['Artery structure?', 'Thick, muscular, elastic walls; high pressure.'],
    ['Vein structure?', 'Thin walls, large lumen, valves.'], ['Capillaries?', 'One cell thick — exchange of gases and nutrients.'], ['Arterioles?', 'Small arteries that control blood flow by vasodilation/vasoconstriction.'], ['Red blood cells?', 'Carry oxygen on haemoglobin.'],
    ['White blood cells?', 'Fight infection.'], ['Platelets?', 'Clot blood.'], ['Plasma?', 'Liquid carrying nutrients, hormones, CO₂, waste and heat.']
  ],
  quiz: [
    { q: 'Which vessel carries oxygenated blood from the lungs to the heart?', o: ['Pulmonary vein', 'Pulmonary artery', 'Vena cava', 'Aorta'], x: 'Exception to the usual rule.' },
    { q: 'The valve between the left atrium and left ventricle is the…', o: ['bicuspid', 'tricuspid', 'semi-lunar', 'aortic septum'], x: 'Bi = left.' },
    { q: 'Which blood component fights infection?', o: ['White blood cells', 'Platelets', 'Red blood cells', 'Plasma'], x: 'Leucocytes.' },
    { q: 'Which vessel has valves?', o: ['Vein', 'Artery', 'Arteriole', 'Capillary'], x: 'Prevent backflow at low pressure.' },
    { q: 'The heart muscle is supplied by the…', o: ['coronary arteries', 'pulmonary veins', 'vena cava', 'carotid veins'], x: 'Coronary.' },
    { q: 'The septum…', o: ['separates the left and right sides of the heart', 'prevents backflow into the atria', 'pumps blood to the lungs', 'is a blood vessel'], x: 'Keeps blood separate.' },
    { q: 'Haemoglobin is found in…', o: ['red blood cells', 'platelets', 'plasma only', 'white blood cells'], x: 'Carries O₂.' },
    { q: 'Which chamber has the thickest wall?', o: ['Left ventricle', 'Right ventricle', 'Left atrium', 'Right atrium'], x: 'Pumps to whole body.' }
  ],
  exam: [
    { q: 'Name the blood vessel that carries blood from the right ventricle. [1]', m: 1, ms: ['pulmonary artery'] },
    { q: 'Describe the structure and function of capillaries. [2]', m: 2, ms: ['walls one cell thick / very narrow', 'allow exchange of oxygen, CO₂, nutrients and waste with tissues'] },
    { q: 'State the function of each blood component: (a) platelets (b) plasma (c) red blood cells. [3]', m: 3, ms: ['platelets — clot blood', 'plasma — transports nutrients / hormones / CO₂ / heat / blood cells', 'red blood cells — carry oxygen (haemoglobin)'] },
    { q: 'Describe the pathway of blood from the vena cava to the aorta, naming the valves. [4]', m: 4, ms: ['vena cava → right atrium → tricuspid valve → right ventricle', '→ semi-lunar valve → pulmonary artery → lungs', '→ pulmonary vein → left atrium → bicuspid valve → left ventricle', '→ semi-lunar valve → aorta'] }
  ],
  sims: ['bloodpath', 'bloodparts'], gens: []
});

TOPICS.push({
  id: '1.13', unit: '1', sys: 'D', area: 'cardio', ref: 'D2–D3 Function and nervous control', title: 'Cardiovascular function and control of the cardiac cycle', short: 'Delivery, waste removal, thermoregulation, infection, clotting; SAN, AVN, bundle of His, Purkinje fibres; sympathetic and parasympathetic',
  summary: 'The functions of the cardiovascular system during exercise — delivering oxygen and nutrients, removing carbon dioxide and lactate, thermoregulation by vasodilation and vasoconstriction, fighting infection and clotting blood — and the nervous control of the cardiac cycle: the conduction system and the sympathetic and parasympathetic nervous systems.',
  spec: [
    'Functions: delivery of oxygen and nutrients; removal of waste products (carbon dioxide and lactate); thermoregulation (vasoconstriction, vasodilation); fight infection; clot blood',
    'Conduction process: sinoatrial node (SAN), atrioventricular node (AVN), bundle of His, Purkinje fibres',
    'Effect of the sympathetic and parasympathetic nervous system'
  ],
  learn: [
    { h: 'Functions in exercise', html: `
<div class="tbl"><table><tr><th>Function</th><th>In exercise</th></tr>
<tr><td>Delivery of oxygen and nutrients</td><td>more blood to working muscles carries O₂ (haemoglobin) and glucose/fatty acids</td></tr>
<tr><td>Removal of waste products</td><td>carbon dioxide to the lungs; lactate away from muscles (to the liver)</td></tr>
<tr><td>Thermoregulation</td><td><b>vasodilation</b> of skin arterioles sends warm blood to the surface to lose heat (sweating); <b>vasoconstriction</b> keeps heat in when cold</td></tr>
<tr><td>Fight infection</td><td>white blood cells</td></tr>
<tr><td>Clot blood</td><td>platelets seal cuts and grazes</td></tr></table></div>
[[d:shunt]]` },
    { h: 'The conduction system', html: `
[[d:conduction]]
<ol><li>The <b>sinoatrial node (SAN)</b> — the heart’s pacemaker in the right atrium — sends out an electrical impulse.</li>
<li>The impulse spreads across the atria, which contract, pushing blood into the ventricles.</li>
<li>The <b>atrioventricular node (AVN)</b> delays the impulse slightly so the atria finish contracting.</li>
<li>The impulse passes down the <b>bundle of His</b> in the septum…</li>
<li>…to the <b>Purkinje fibres</b> in the ventricle walls, so the ventricles contract from the bottom up, forcing blood into the arteries.</li></ol>
<p>Cardiac muscle is <b>myogenic</b>: it generates its own impulse.</p>` },
    { h: 'Sympathetic and parasympathetic control', html: `
<div class="tbl"><table><tr><th>System</th><th>Effect on the heart</th><th>When</th></tr>
<tr><td><b>Sympathetic</b> nervous system (plus adrenaline)</td><td>increases heart rate and force of contraction (stroke volume)</td><td>before and during exercise — “fight or flight”</td></tr>
<tr><td><b>Parasympathetic</b> nervous system (vagus nerve)</td><td>decreases heart rate</td><td>at rest and during recovery</td></tr></table></div>
<p>The cardiac control centre in the medulla oblongata receives information from receptors (chemoreceptors — CO₂ and pH; baroreceptors — blood pressure; proprioceptors — movement) and adjusts the balance between the two systems.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Describe the role of the SAN and AVN. (2 marks)', s: ['The SAN is the pacemaker — it initiates the electrical impulse that makes the atria contract.', 'The AVN delays the impulse before passing it to the bundle of His, so the atria finish contracting before the ventricles.'], a: 'SAN initiates; AVN delays.' },
    { q: 'Explain how the cardiovascular system helps to control body temperature during a hot-weather match. (2 marks)', s: ['Vasodilation of arterioles near the skin increases blood flow to the surface…', '…so heat is lost by radiation and the evaporation of sweat.'], a: 'Vasodilation to skin → heat loss.' }
  ],
  pitfalls: ['Getting the conduction sequence wrong — SAN → atria → AVN → bundle of His → Purkinje fibres.', 'Saying the parasympathetic system increases heart rate.', 'Saying vasodilation narrows vessels.', 'Forgetting lactate as a waste product removed by the blood.'],
  cards: [
    ['Five CV functions in the spec?', 'Deliver O₂/nutrients, remove waste, thermoregulation, fight infection, clot blood.'], ['Vasodilation?', 'Widening of blood vessels.'], ['Vasoconstriction?', 'Narrowing of blood vessels.'],
    ['SAN?', 'Pacemaker — starts each heartbeat.'], ['AVN?', 'Delays the impulse, then passes it to the bundle of His.'], ['Bundle of His?', 'Carries the impulse down the septum.'],
    ['Purkinje fibres?', 'Spread the impulse through the ventricle walls.'], ['Sympathetic nervous system?', 'Increases heart rate and contraction force.'], ['Parasympathetic nervous system?', 'Decreases heart rate (vagus nerve).'],
    ['Myogenic?', 'Heart generates its own electrical impulse.']
  ],
  quiz: [
    { q: 'The pacemaker of the heart is the…', o: ['SAN', 'AVN', 'bundle of His', 'Purkinje fibres'], x: 'Sinoatrial node.' },
    { q: 'Which part delays the impulse?', o: ['AVN', 'SAN', 'Purkinje fibres', 'aorta'], x: 'Lets atria finish.' },
    { q: 'The parasympathetic nervous system…', o: ['decreases heart rate', 'increases heart rate', 'causes vasodilation only', 'controls breathing only'], x: 'Rest and digest.' },
    { q: 'Blood vessels near the skin widen in hot weather. This is…', o: ['vasodilation', 'vasoconstriction', 'capillarisation', 'hypertrophy'], x: 'Heat loss.' },
    { q: 'The correct order of conduction is…', o: ['SAN → AVN → bundle of His → Purkinje fibres', 'AVN → SAN → Purkinje → bundle of His', 'SAN → Purkinje → AVN → bundle of His', 'bundle of His → SAN → AVN → Purkinje'], x: 'Top to bottom.' },
    { q: 'Platelets help the cardiovascular system to…', o: ['clot blood', 'carry oxygen', 'fight infection', 'regulate heart rate'], x: 'Clotting.' },
    { q: 'Lactate is removed from muscles by the…', o: ['blood', 'lungs only', 'skin', 'bones'], x: 'Transported to the liver.' }
  ],
  exam: [
    { q: 'Name the structure in the heart that acts as the pacemaker. [1]', m: 1, ms: ['sinoatrial node (SAN)'] },
    { q: 'Describe how an electrical impulse travels through the heart. [4]', m: 4, ms: ['SAN initiates the impulse', 'spreads across the atria, which contract', 'AVN delays the impulse', 'bundle of His carries it down the septum', 'Purkinje fibres spread it through the ventricle walls; ventricles contract'] },
    { q: 'Explain the role of the sympathetic and parasympathetic nervous systems before, during and after a 400 m race. [4]', m: 4, ms: ['before: sympathetic / adrenaline causes anticipatory rise in HR', 'during: sympathetic increases HR and force of contraction (stroke volume)', 'after: parasympathetic (vagus nerve) decreases HR', 'controlled by cardiac control centre in medulla responding to receptors'] }
  ],
  sims: ['conductorder', 'shunt'], gens: []
});

TOPICS.push({
  id: '1.14', unit: '1', sys: 'D', area: 'cardio', ref: 'D4–D6 Responses, adaptations and additional factors', title: 'Cardiovascular system: responses, adaptations and factors', short: 'Anticipatory rise, HR, Q, BP, redistribution; hypertrophy, SV, RHR, capillarisation; SADS, BP, hyper/hypothermia',
  summary: 'The cardiovascular responses to a single session — anticipatory rise, increased heart rate, cardiac output and blood pressure, redirection of blood flow; long-term adaptations — cardiac hypertrophy, increased stroke volume, decreased resting heart rate, capillarisation, lower resting blood pressure, faster recovery, increased blood volume; and additional factors — SADS, high and low blood pressure, hyperthermia and hypothermia.',
  spec: [
    'Responses: anticipatory increase in heart rate; increased heart rate; increased cardiac output; increased blood pressure; redirection of blood flow',
    'Adaptations: cardiac hypertrophy; increased resting and exercising stroke volume; decreased resting heart rate; capillarisation of skeletal muscle and alveoli; reduction in resting blood pressure; decreased heart rate recovery time; increase in blood volume',
    'Additional factors: sudden arrhythmic death syndrome (SADS); high/low blood pressure; hyperthermia/hypothermia'
  ],
  learn: [
    { h: 'Responses to a single session', html: `
[[d:hrresponse]]
<div class="tbl"><table><tr><th>Response</th><th>Explanation</th></tr>
<tr><td><b>Anticipatory rise</b></td><td>heart rate rises before exercise due to adrenaline (sympathetic nervous system)</td></tr>
<tr><td><b>Increased heart rate</b></td><td>to deliver more oxygen and remove more CO₂</td></tr>
<tr><td><b>Increased cardiac output</b></td><td>Q = HR × SV rises from ≈ 5 L/min to 20–30 L/min</td></tr>
<tr><td><b>Increased blood pressure</b></td><td>systolic pressure rises as cardiac output rises</td></tr>
<tr><td><b>Redirection of blood flow</b> (vascular shunt)</td><td>vasodilation to working muscles and vasoconstriction to the gut and kidneys</td></tr></table></div>` },
    { h: 'Long-term adaptations', html: `
<div class="tbl"><table><tr><th>Adaptation</th><th>Benefit</th></tr>
<tr><td><b>Cardiac hypertrophy</b> — the heart (especially the left ventricle wall) gets bigger and stronger</td><td>more forceful contractions</td></tr>
<tr><td><b>Increased resting and exercising stroke volume</b></td><td>more blood per beat</td></tr>
<tr><td><b>Decreased resting heart rate</b> (bradycardia, below 60 bpm)</td><td>the heart works less hard at rest</td></tr>
<tr><td><b>Capillarisation</b> of skeletal muscle and alveoli</td><td>more gas exchange; better O₂ delivery and waste removal</td></tr>
<tr><td><b>Reduced resting blood pressure</b></td><td>lower risk of hypertension, heart attack and stroke</td></tr>
<tr><td><b>Decreased heart rate recovery time</b></td><td>returns to resting HR faster — ready for the next effort</td></tr>
<tr><td><b>Increased blood volume</b> (more plasma and red blood cells)</td><td>more oxygen carried; better thermoregulation</td></tr></table></div>` },
    { h: 'Additional factors', html: `
<div class="tbl"><table><tr><th>Factor</th><th>What it is</th><th>Link to exercise</th></tr>
<tr><td><b>SADS</b> (sudden arrhythmic death syndrome)</td><td>sudden death caused by an undiagnosed heart rhythm disorder, often in young, apparently fit people</td><td>can be triggered by intense exercise; cardiac screening of athletes, defibrillators at venues and CPR training save lives</td></tr>
<tr><td><b>High blood pressure</b> (hypertension, ≥ 140/90 mmHg)</td><td>persistent high BP strains the heart and arteries</td><td>regular aerobic exercise lowers resting BP; avoid heavy isometric lifting and breath-holding</td></tr>
<tr><td><b>Low blood pressure</b> (hypotension, &lt; 90/60 mmHg)</td><td>can cause dizziness and fainting</td><td>cool down gradually to avoid blood pooling; stay hydrated</td></tr>
<tr><td><b>Hyperthermia</b></td><td>body temperature too high (heat exhaustion, heatstroke)</td><td>blood diverted to the skin, less to muscles; dehydration reduces blood volume — exercise in heat with care, hydrate</td></tr>
<tr><td><b>Hypothermia</b></td><td>body core temperature too low (below 35 °C)</td><td>vasoconstriction, shivering, slowed heart rate and confusion — a risk in cold-water swimming and mountain sports</td></tr></table></div>` }
  ],
  eqs: [['Q = "HR" × "SV"', 'cardiac output = heart rate × stroke volume']],
  worked: [
    { q: 'Explain why a trained athlete has a lower resting heart rate. (3 marks)', s: ['Training causes cardiac hypertrophy — a bigger, stronger left ventricle.', 'Stroke volume increases.', 'The same resting cardiac output (≈ 5 L/min) is produced with fewer beats.'], a: 'Hypertrophy → ↑ SV → ↓ RHR for same Q.' },
    { q: 'An athlete has a resting HR of 50 bpm and SV of 100 ml. Calculate resting cardiac output. (1 mark)', s: ['Q = 50 × 100 = 5000 ml/min = 5 L/min.'], a: '5 L/min' }
  ],
  pitfalls: ['Listing an increased heart rate during exercise as an adaptation — it is a response.', 'Saying training increases resting blood pressure.', 'Confusing hyperthermia (too hot) with hypothermia (too cold).', 'Forgetting capillarisation of the alveoli as well as of skeletal muscle.'],
  cards: [
    ['Anticipatory rise?', 'HR increase before exercise due to adrenaline.'], ['Five CV responses?', 'Anticipatory rise, ↑ HR, ↑ cardiac output, ↑ BP, redirection of blood flow.'], ['Cardiac hypertrophy?', 'Heart muscle gets bigger and stronger.'],
    ['Bradycardia?', 'Resting HR below 60 bpm (trained athletes).'], ['Capillarisation?', 'Growth of more capillaries in muscles and alveoli.'], ['Heart rate recovery time with training?', 'Decreases (faster recovery).'],
    ['SADS?', 'Sudden arrhythmic death syndrome — undiagnosed heart rhythm disorder.'], ['Hypertension?', 'High blood pressure (≥ 140/90 mmHg).'], ['Hypotension?', 'Low blood pressure (< 90/60 mmHg).'],
    ['Hyperthermia?', 'Body temperature too high.'], ['Hypothermia?', 'Core temperature below 35 °C.'], ['Effect of training on blood volume?', 'Increases.']
  ],
  quiz: [
    { q: 'Which is a long-term cardiovascular adaptation?', o: ['Decreased resting heart rate', 'Anticipatory rise', 'Redirection of blood flow', 'Increased HR in a sprint'], x: 'Adaptation.' },
    { q: 'Cardiac hypertrophy leads to…', o: ['increased stroke volume', 'increased resting HR', 'smaller ventricles', 'less blood volume'], x: 'Bigger, stronger heart.' },
    { q: 'SADS stands for…', o: ['sudden arrhythmic death syndrome', 'sports anxiety disorder syndrome', 'stroke and diabetes symptoms', 'systolic arterial disease'], x: 'Heart rhythm disorder.' },
    { q: 'Heart rate rising on the start line is the…', o: ['anticipatory rise', 'steady state', 'oxygen debt', 'recovery'], x: 'Adrenaline.' },
    { q: 'A core temperature below 35 °C is…', o: ['hypothermia', 'hyperthermia', 'hypertension', 'hypotension'], x: 'Too cold.' },
    { q: 'Regular aerobic exercise generally makes resting blood pressure…', o: ['fall', 'rise', 'double', 'unchanged forever'], x: 'Lower risk.' },
    { q: 'More capillaries around the alveoli improve…', o: ['gaseous exchange', 'bone density', 'reaction time', 'flexibility'], x: 'Capillarisation.' }
  ],
  exam: [
    { q: 'State two responses of the cardiovascular system to a single exercise session. [2]', m: 2, ms: ['anticipatory rise', 'increased heart rate', 'increased cardiac output', 'increased blood pressure', 'redirection of blood flow'] },
    { q: 'Explain how capillarisation benefits an endurance athlete. [2]', m: 2, ms: ['more capillaries around muscles / alveoli', 'more oxygen delivered / diffused and waste removed — delays fatigue'] },
    { q: 'A 15-year-old footballer collapsed during a match and was later diagnosed with an undetected heart rhythm disorder.', parts: [
      { q: 'Name the condition. [1]', m: 1, ms: ['sudden arrhythmic death syndrome (SADS) / arrhythmia'] },
      { q: 'To what extent does long-term training benefit the cardiovascular system of a games player? [8]', m: 8, lv: true, ms: ['cardiac hypertrophy → ↑ stroke volume (rest and exercise) → ↓ resting HR', 'higher maximum cardiac output → more O₂ to muscles in a match', 'capillarisation of muscle and alveoli → better O₂ delivery and CO₂/lactate removal', 'increased blood volume → more O₂ carried, better thermoregulation in heat', 'faster HR recovery between sprints', 'reduced resting BP → health benefits', 'limits: does not remove underlying conditions such as SADS; screening needed; overtraining', 'links to respiratory and energy systems (aerobic recovery between efforts)', 'judgement: large benefit for performance and health, but cardiac screening is important'] }
    ], tag: 'ext' }
  ],
  sims: ['cardiac', 'hrresponse', 'cvsort'], gens: ['gcardout', 'gsv', 'grecov']
});
