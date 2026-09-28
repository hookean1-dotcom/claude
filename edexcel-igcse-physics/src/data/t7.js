/* ==========================================================
   TOPIC 7 · RADIOACTIVITY AND PARTICLES
   ========================================================== */
TOPICS.push({
  id: '7.1', unit: '7', ref: '7.1–7.6', title: 'Atoms and nuclear radiation', short: 'Nuclide notation, isotopes, α, β⁻, γ',
  summary: 'The structure of the atom and nuclide notation; atomic number, mass number and isotopes; alpha, beta and gamma radiation from unstable nuclei, their nature, ionising and penetrating powers, and the penetration practical.',
  spec: [
    '7.1 use the following units: becquerel (Bq), centimetre (cm), hour (h), minute (min) and second (s)',
    '7.2 describe the structure of an atom in terms of protons, neutrons and electrons and use symbols such as ¹⁴₆C to describe particular nuclei',
    '7.3 know the terms atomic (proton) number, mass (nucleon) number and isotope',
    '7.4 know that alpha (α) particles, beta (β⁻) particles, and gamma (γ) rays are ionising radiations emitted from unstable nuclei in a random process',
    '7.5 describe the nature of alpha (α) particles, beta (β⁻) particles and gamma (γ) rays, and recall that they may be distinguished in terms of penetrating power and ability to ionise',
    '7.6 practical: investigate the penetration powers of different types of radiation using either radioactive sources or simulations'
  ],
  learn: [
    { h: 'The atom and nuclide notation', html: `
[[d:atom]]
<p>An atom has a tiny, dense, positively charged <b>nucleus</b> containing <b>protons</b> and <b>neutrons</b> (nucleons), surrounded by negatively charged <b>electrons</b>. Atoms are neutral: number of electrons = number of protons.</p>
<div class="tbl"><table><tr><th>Particle</th><th>Relative mass</th><th>Relative charge</th></tr><tr><td>proton</td><td>1</td><td>+1</td></tr><tr><td>neutron</td><td>1</td><td>0</td></tr><tr><td>electron</td><td>≈ 1/1840 (negligible)</td><td>−1</td></tr></table></div>
<p>Nuclide notation ${nuc(14, 6, 'C')}: the top number is the <b>mass (nucleon) number A</b> = protons + neutrons; the bottom is the <b>atomic (proton) number Z</b> = protons. Neutrons = A − Z (for carbon-14: 14 − 6 = 8).</p>
<p><b>Isotopes</b> are atoms of the same element (same number of protons) with <b>different numbers of neutrons</b>, e.g. ${nuc(12, 6, 'C')} and ${nuc(14, 6, 'C')}. They have the same chemistry but different stability.</p>` },
    { h: 'Alpha, beta and gamma', html: `
[[d:penetration]]
<p>Some nuclei are <b>unstable</b>. They decay by emitting <b>ionising</b> radiation. Decay is <b>random</b> — you cannot predict which nucleus will decay next or when, and it is not affected by temperature or chemical changes.</p>
<div class="tbl"><table><tr><th></th><th>Alpha (α)</th><th>Beta (β⁻)</th><th>Gamma (γ)</th></tr>
<tr><td>Nature</td><td>helium nucleus: 2 protons + 2 neutrons, ${nuc(4, 2, 'He')} or ${nuc(4, 2, 'α')}</td><td>high-speed electron from the nucleus, ${nuc(0, -1, 'e')} or ${nuc(0, -1, 'β')}</td><td>high-frequency electromagnetic wave</td></tr>
<tr><td>Charge</td><td>+2</td><td>−1</td><td>0</td></tr>
<tr><td>Ionising power</td><td>strongly ionising</td><td>moderately ionising</td><td>weakly ionising</td></tr>
<tr><td>Penetration / stopped by</td><td>a few cm of air; a sheet of paper</td><td>about 1 m of air; a few mm of aluminium</td><td>very penetrating; reduced by several cm of lead or metres of concrete</td></tr></table></div>
<p>The more strongly a radiation ionises, the faster it loses energy, so the <b>less penetrating</b> it is.</p>
<p>Neutrons can also be emitted by nuclei (neutron radiation) — uncharged and very penetrating.</p>` },
    { h: 'Practical: penetration of radiation (7.6)', html: `
<ol><li>Measure the <b>background count</b> with a Geiger–Müller tube and counter (no source) for several minutes; find the count rate.</li><li>Place a source a fixed distance (e.g. 3 cm) from the GM tube and measure the count rate with no absorber.</li><li>Put absorbers between them: paper, then aluminium of increasing thickness, then lead. Measure the count rate for each.</li><li>Subtract background from each reading. If the count drops sharply with paper → α present; drops with a few mm of aluminium → β; still significant after aluminium and falls slowly with lead → γ.</li></ol>
<p><b>Safety:</b> handle sources with tongs, hold them at arm’s length pointing away, never point at people, keep them in the lead-lined box when not in use, minimise time, wash hands. Many schools use a <b>simulation</b> instead.</p>` }
  ],
  eqs: [['"neutrons" = A - Z', '']],
  worked: [
    { q: 'How many protons, neutrons and electrons are in a neutral atom of uranium-238, ²³⁸₉₂U?', s: ['Protons = Z = 92', 'Neutrons = A − Z = 238 − 92 = 146', 'Electrons = protons = 92 (neutral atom)'], a: '92 p, 146 n, 92 e' }
  ],
  pitfalls: ['Saying a beta particle is an electron from the electron shells — it comes from the nucleus.', 'Saying gamma is stopped by paper.', 'Forgetting to subtract background count.', 'Saying isotopes have different numbers of protons.'],
  cards: [
    ['Mass (nucleon) number?', 'Number of protons + neutrons.'],
    ['Atomic (proton) number?', 'Number of protons.'],
    ['What is an isotope?', 'Same element (same protons), different number of neutrons.'],
    ['Alpha particle?', 'Helium nucleus: 2 protons + 2 neutrons, charge +2.'],
    ['Beta particle?', 'High-speed electron emitted from the nucleus, charge −1.'],
    ['Gamma ray?', 'High-frequency electromagnetic wave from the nucleus.'],
    ['Most ionising radiation?', 'Alpha.'],
    ['Most penetrating radiation?', 'Gamma.'],
    ['What stops beta?', 'A few mm of aluminium.'],
    ['What does “random” decay mean?', 'Cannot predict which nucleus will decay or when.']
  ],
  quiz: [
    { q: 'An atom of ²³Na (Z = 11) has how many neutrons?', o: ['12', '11', '23', '34'], x: '23 − 11.' },
    { q: 'Isotopes of an element have different numbers of', o: ['neutrons', 'protons', 'electrons in a neutral atom', 'charge'], x: 'Definition.' },
    { q: 'Which radiation is stopped by a sheet of paper?', o: ['alpha', 'beta', 'gamma', 'neutrons'], x: 'Least penetrating.' },
    { q: 'A beta particle is', o: ['a fast electron from the nucleus', 'a helium nucleus', 'an EM wave', 'a proton'], x: 'β⁻.' },
    { q: 'Which radiation is most strongly ionising?', o: ['alpha', 'beta', 'gamma', 'all equally'], x: '+2, heavy.' },
    { q: 'Gamma radiation is best absorbed by', o: ['several cm of lead', 'paper', 'a few mm of aluminium', 'air'], x: 'Very penetrating.' },
    { q: 'Radioactive decay is', o: ['random', 'predictable for each nucleus', 'faster when heated', 'caused by light'], x: 'Spec 7.4.' }
  ],
  exam: [
    { q: 'A student uses a Geiger–Müller tube and counter to find which types of radiation a source emits.', tag: 'prac', parts: [
      { q: 'Explain why the student first measures the count rate without the source.', m: 2, ms: ['to measure background radiation', 'which must be subtracted from each reading'] },
      { q: 'Results (corrected count rate, counts/min): no absorber 520; paper 518; 3 mm aluminium 90; 10 mm aluminium 88; 2 cm lead 30. Deduce which radiations the source emits. Explain your answer.', m: 4, ms: ['no alpha — paper makes almost no difference', 'beta present — large drop with 3 mm aluminium', 'gamma present — count remains after aluminium', 'and is reduced (but not stopped) by lead'] },
      { q: 'Describe two safety precautions the student should take.', m: 2, ms: ['handle source with tongs / at arm’s length', 'keep in lead box when not in use / minimise exposure time / don’t point at people'] }
    ] },
    { q: 'Compare alpha particles and gamma rays in terms of their nature, ionising ability and penetrating power.', m: 5, ms: ['alpha is a helium nucleus (2p + 2n)', 'gamma is an electromagnetic wave', 'alpha strongly ionising; gamma weakly ionising', 'alpha stopped by paper / few cm air', 'gamma very penetrating — only reduced by thick lead/concrete'] }
  ],
  sims: ['atom', 'penetrate'], gens: ['nucl1', 'nucl2']
});

TOPICS.push({
  id: '7.2', unit: '7', ref: '7.7–7.10', title: 'Nuclear equations, detection and background radiation', short: 'Balancing equations, GM tubes, sources of background',
  summary: 'How alpha, beta, gamma and neutron emission change atomic and mass numbers; balancing nuclear equations; detecting ionising radiation with photographic film and GM tubes; and the sources of background radiation.',
  spec: [
    '7.7 describe the effects on the atomic and mass numbers of a nucleus of the emission of each of the four main types of radiation (alpha, beta, gamma and neutron radiation)',
    '7.8 understand how to balance nuclear equations in terms of mass and charge',
    '7.9 know that photographic film or a Geiger−Müller detector can detect ionising radiations',
    '7.10 explain the sources of background (ionising) radiation from Earth and space'
  ],
  learn: [
    { h: 'Changes in the nucleus', html: `
<div class="tbl"><table><tr><th>Emission</th><th>Mass number A</th><th>Atomic number Z</th><th>Example</th></tr>
<tr><td>alpha ${nuc(4, 2, 'α')}</td><td>decreases by 4</td><td>decreases by 2 (new element)</td><td>${nuc(226, 88, 'Ra')} → ${nuc(222, 86, 'Rn')} + ${nuc(4, 2, 'α')}</td></tr>
<tr><td>beta ${nuc(0, -1, 'β')}</td><td>unchanged</td><td>increases by 1 (a neutron turns into a proton and an electron)</td><td>${nuc(14, 6, 'C')} → ${nuc(14, 7, 'N')} + ${nuc(0, -1, 'β')}</td></tr>
<tr><td>gamma γ</td><td>unchanged</td><td>unchanged (nucleus loses energy)</td><td>often follows α or β decay</td></tr>
<tr><td>neutron ${nuc(1, 0, 'n')}</td><td>decreases by 1</td><td>unchanged (becomes a different isotope)</td><td>${nuc(13, 4, 'Be')} → ${nuc(12, 4, 'Be')} + ${nuc(1, 0, 'n')}</td></tr></table></div>
<p><b>Balancing:</b> the total of the top numbers (mass) and the total of the bottom numbers (charge) must be the same on both sides.</p>` },
    { h: 'Detecting radiation', html: `
<ul><li><b>Photographic film</b> darkens when exposed to ionising radiation — used in <b>film badges</b> worn by workers to monitor their dose (with windows/absorbers to distinguish types).</li><li><b>Geiger–Müller (GM) tube</b> connected to a counter or ratemeter: each ionising particle entering the tube ionises the gas inside and produces a pulse, which is counted. Count rate in counts per second or per minute.</li></ul>` },
    { h: 'Background radiation', html: `
[[d:background]]
<p><b>Background radiation</b> is the low level of ionising radiation around us all the time. Sources:</p>
<ul><li><b>From Earth (natural):</b> <b>radon gas</b> seeping from rocks such as granite (the largest source in many places); rocks and building materials; food and drink (e.g. potassium-40 in our bodies).</li><li><b>From space:</b> <b>cosmic rays</b> — high-energy particles from the Sun and stars (more at high altitude, in aircraft).</li><li><b>Artificial (smaller):</b> medical x-rays and treatments, nuclear power and weapons testing fallout, accidents.</li></ul>
<p>Always measure the background count and <b>subtract</b> it from readings in experiments.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Polonium-210 (Z = 84) emits an alpha particle to become lead (Pb). Write the equation.', s: ['A: 210 − 4 = 206; Z: 84 − 2 = 82', '²¹⁰₈₄Po → ²⁰⁶₈₂Pb + ⁴₂α', 'Check: 210 = 206 + 4 ✓; 84 = 82 + 2 ✓'], a: '²¹⁰₈₄Po → ²⁰⁶₈₂Pb + ⁴₂α' },
    { q: 'Strontium-90 (Z = 38) is a beta emitter producing yttrium (Y). Find A and Z of the product.', s: ['A unchanged: 90', 'Z increases by 1: 39', '⁹⁰₃₈Sr → ⁹⁰₃₉Y + ⁰₋₁β'], a: '⁹⁰₃₉Y' }
  ],
  pitfalls: ['Decreasing Z in beta decay — it increases.', 'Changing A in beta or gamma decay.', 'Forgetting the −1 charge of the beta particle when balancing.', 'Listing mobile phones or microwaves as sources of background ionising radiation.'],
  cards: [
    ['Effect of alpha emission?', 'A − 4, Z − 2.'],
    ['Effect of beta emission?', 'A unchanged, Z + 1.'],
    ['Effect of gamma emission?', 'No change in A or Z.'],
    ['Effect of neutron emission?', 'A − 1, Z unchanged.'],
    ['How do you balance a nuclear equation?', 'Mass numbers and atomic numbers add up to the same on each side.'],
    ['Two detectors of ionising radiation?', 'Photographic film; Geiger–Müller tube.'],
    ['Main natural source of background radiation?', 'Radon gas from rocks.'],
    ['Background radiation from space?', 'Cosmic rays.']
  ],
  quiz: [
    { q: 'After alpha emission, the atomic number', o: ['decreases by 2', 'increases by 1', 'decreases by 4', 'is unchanged'], x: 'Loses 2 protons.' },
    { q: 'After beta emission, the mass number', o: ['is unchanged', 'decreases by 4', 'increases by 1', 'decreases by 1'], x: 'Neutron → proton.' },
    { q: '²³⁴₉₀Th decays by beta emission. The product has', o: ['A = 234, Z = 91', 'A = 230, Z = 88', 'A = 234, Z = 89', 'A = 233, Z = 90'], x: 'Z + 1.' },
    { q: 'Which is a source of background radiation?', o: ['radon gas', 'mobile phones', 'visible light', 'radio waves'], x: 'Ionising.' },
    { q: 'A film badge detects radiation because the film', o: ['darkens when exposed', 'glows', 'gets hot', 'becomes magnetic'], x: 'Photographic.' },
    { q: 'Emission of a neutron changes', o: ['the mass number only', 'the atomic number only', 'both', 'neither'], x: 'A − 1.' }
  ],
  exam: [
    { q: 'Radium-226 (Z = 88) decays by alpha emission to radon (Rn). Radon-222 then decays by alpha emission to polonium (Po).', tag: 'calc', parts: [
      { q: 'Write a balanced equation for the decay of radium-226.', m: 3, ms: ['²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He (α)', 'mass numbers correct', 'atomic numbers correct'] },
      { q: 'Give the mass number and atomic number of the polonium produced.', m: 2, ms: ['A = 218', 'Z = 84'] },
      { q: 'The polonium decays by beta emission. State how the nucleus changes.', m: 2, ms: ['a neutron changes into a proton (and an electron is emitted)', 'Z increases by 1; A unchanged (to ²¹⁸₈₅At)'] }
    ] },
    { q: 'Explain the main sources of background radiation and why the background count is higher for aircraft crew than for people at sea level.', m: 5, ms: ['radon gas from rocks (e.g. granite)', 'rocks/building materials / food and drink', 'cosmic rays from space (Sun/stars)', 'medical / artificial sources', 'at altitude there is less atmosphere to absorb cosmic rays, so more reach the crew'] }
  ],
  sims: ['decay'], gens: ['alpha1', 'beta1']
});

TOPICS.push({
  id: '7.3', unit: '7', ref: '7.11–7.13', title: 'Activity and half-life', short: 'Becquerels, half-life, graphs',
  summary: 'Activity in becquerels decreases over time; the definition of half-life (different for each isotope); and simple half-life calculations, including from graphs.',
  spec: [
    '7.11 know that the activity of a radioactive source decreases over a period of time and is measured in becquerels',
    '7.12 know the definition of the term ‘half-life’ and understand that it is different for different radioactive isotopes',
    '7.13 use the concept of the half-life to carry out simple calculations on activity, including graphical methods'
  ],
  learn: [
    { h: 'Activity and half-life', html: `
[[d:halflife]]
<p>The <b>activity</b> of a source is the number of nuclei that decay each second, measured in <b>becquerels (Bq)</b>: 1 Bq = 1 decay per second. As unstable nuclei decay, fewer remain, so the activity <b>decreases</b> over time.</p>
<div class="box def"><b class="lbl">Definition</b><p>The <b>half-life</b> of a radioactive isotope is the time taken for <b>half the unstable nuclei</b> in a sample to decay — equivalently, the time for the <b>activity</b> (or count rate) to fall to <b>half</b>.</p></div>
<p>Half-lives vary enormously between isotopes: from fractions of a second to billions of years (e.g. technetium-99m: 6 hours; iodine-131: 8 days; carbon-14: 5700 years; uranium-238: 4.5 billion years). A short half-life means a high initial activity that falls quickly.</p>` },
    { h: 'Calculations and graphs', html: `
<p>After <b>n</b> half-lives, the activity is $@frac{1}{2^n}$ of the original: 1 → ½ → ¼ → ⅛ → ¹⁄₁₆…</p>
<p><b>From a graph</b> of activity (or count rate) against time: pick a starting activity, read off the time; find half that activity, read off the time; the difference is the half-life. Repeat from another starting point and average. Subtract background count first.</p>
<p>Example: 800 Bq → 400 → 200 → 100 Bq is 3 half-lives. If this takes 24 days, the half-life is 8 days.</p>` }
  ],
  eqs: [['"activity after n half-lives" = @frac{"initial activity"}{2^n}', '']],
  worked: [
    { q: 'A source has an activity of 1200 Bq and a half-life of 5 hours. What is its activity after 20 hours?', s: ['20 ÷ 5 = 4 half-lives', '1200 → 600 → 300 → 150 → 75', 'Activity = 75 Bq'], a: '75 Bq' },
    { q: 'The count rate from a sample falls from 640 to 40 counts per minute in 36 minutes (background already subtracted). Find the half-life.', s: ['640 → 320 → 160 → 80 → 40: 4 half-lives', 'Half-life = 36 ÷ 4 = 9 minutes'], a: '9 minutes' }
  ],
  pitfalls: ['Saying half-life is half the time for all the nuclei to decay.', 'Subtracting instead of halving repeatedly.', 'Forgetting to subtract the background count before halving.'],
  cards: [
    ['Unit of activity?', 'becquerel (Bq) = 1 decay per second.'],
    ['Define half-life.', 'Time for half the unstable nuclei (or the activity) to decay/halve.'],
    ['Fraction left after 3 half-lives?', '1/8'],
    ['Does every isotope have the same half-life?', 'No — it varies from fractions of a second to billions of years.'],
    ['How to find half-life from a graph?', 'Read the time for the activity to halve (from any point); average several.'],
    ['Why does activity decrease?', 'Fewer unstable nuclei remain to decay.']
  ],
  quiz: [
    { q: 'After 2 half-lives, the fraction of nuclei remaining is', o: ['1/4', '1/2', '1/8', '0'], x: '½ × ½.' },
    { q: 'Activity falls from 400 Bq to 50 Bq in 15 min. Half-life?', o: ['5 min', '7.5 min', '3 min', '15 min'], x: '3 half-lives.' },
    { q: 'One becquerel is', o: ['one decay per second', 'one count per minute', 'one half-life', 'one ionisation'], x: 'Definition.' },
    { q: 'A source with a very short half-life', o: ['loses its activity quickly', 'stays active for a long time', 'emits no radiation', 'has zero activity'], x: 'Decays fast.' },
    { q: 'Iodine-131 has a half-life of 8 days. After 24 days an 80 MBq sample has an activity of', o: ['10 MBq', '20 MBq', '26.7 MBq', '40 MBq'], x: '80 → 40 → 20 → 10.' }
  ],
  exam: [
    { q: 'A student measures the count rate from a radioactive sample every 2 minutes. The background count is 20 counts per minute. Readings (counts/min): 0 min 420; 2 min 330; 4 min 260; 6 min 210; 8 min 170; 10 min 140.', tag: 'data', parts: [
      { q: 'Explain why she must correct for background count.', m: 1, ms: ['background adds to every reading and is not from the sample'] },
      { q: 'Calculate the corrected count rate at 0 min and at 8 min.', m: 2, ms: ['400 counts/min', '150 counts/min'] },
      { q: 'Plot a graph of corrected count rate against time and use it to find the half-life.', m: 4, ms: ['corrected values plotted (400, 310, 240, 190, 150, 120)', 'smooth curve', 'read time for 400 → 200 (≈ 6 min)', 'half-life ≈ 5.5–6.5 min, check from a second pair'] },
      { q: 'Explain why the readings fluctuate slightly even when repeated at the same time.', m: 1, ms: ['radioactive decay is random'] }
    ] },
    { q: 'A hospital receives a technetium-99m source with an activity of 400 MBq. Its half-life is 6 hours. Calculate the activity after 1 day, and explain why a short half-life is useful for a medical tracer.', m: 4, ms: ['24 ÷ 6 = 4 half-lives', '400 ÷ 16 = 25 MBq', 'short half-life — activity falls quickly so the patient’s dose is small', 'but long enough to take the scan/images'] }
  ],
  sims: ['decay'], gens: ['hl1', 'hl2', 'hl3']
});

TOPICS.push({
  id: '7.4', unit: '7', ref: '7.14–7.16', title: 'Uses and dangers of radioactivity', short: 'Industry, medicine, contamination vs irradiation',
  summary: 'Uses of radioactivity in industry and medicine; the difference between contamination and irradiation; the dangers of ionising radiation — mutations, cell and tissue damage — and the disposal of radioactive waste.',
  spec: [
    '7.14 describe uses of radioactivity in industry and medicine',
    '7.15 describe the difference between contamination and irradiation',
    '7.16 describe the dangers of ionising radiations, including: that radiation can cause mutations in living organisms; that radiation can damage cells and tissue; the problems arising from the disposal of radioactive waste and how the associated risks can be reduced'
  ],
  learn: [
    { h: 'Uses in industry and medicine', html: `
<div class="tbl"><table><tr><th>Use</th><th>How it works</th><th>Radiation / half-life chosen</th></tr>
<tr><td><b>Smoke detectors</b></td><td>α particles ionise air between two plates, so a small current flows; smoke absorbs the α particles, the current falls and the alarm sounds</td><td>α (americium-241), long half-life (432 y) so it lasts</td></tr>
<tr><td><b>Thickness gauging</b> (paper, foil, plastic sheet)</td><td>source on one side, detector on the other; if the sheet gets thicker, fewer particles get through and the rollers adjust</td><td>β for paper/foil (partly absorbed); long half-life</td></tr>
<tr><td><b>Tracers in industry</b></td><td>add to fluid in pipes to find leaks/blockages — detector above ground</td><td>γ (penetrates soil), short half-life</td></tr>
<tr><td><b>Medical tracers</b></td><td>injected or swallowed; detected outside the body (gamma camera) to show how organs work (e.g. iodine-123 for the thyroid, technetium-99m)</td><td>γ (or β) — escapes the body; short half-life (hours) to limit dose</td></tr>
<tr><td><b>Radiotherapy</b></td><td>high-energy γ beams from several directions meet at a tumour to kill cancer cells; or implanted/internal sources</td><td>γ (cobalt-60), or β from implants</td></tr>
<tr><td><b>Sterilising</b></td><td>gamma kills bacteria in medical equipment and food, even through sealed packaging</td><td>γ, long half-life</td></tr>
<tr><td><b>Dating</b></td><td>carbon-14 dating of once-living material; uranium/potassium in rocks</td><td>measure remaining fraction; use half-life</td></tr></table></div>` },
    { h: 'Contamination and irradiation', html: `
<ul><li><b>Irradiation</b> is exposure to radiation from a source <b>outside</b> the body. It stops when you move away from or shield the source. The object does <b>not become radioactive</b>.</li><li><b>Contamination</b> is when radioactive material gets <b>onto or into</b> an object or person (on skin, clothing, or breathed in/swallowed). Exposure continues until the material is removed or decays — it is usually more dangerous.</li></ul>
<p>Inside the body, <b>alpha</b> is the most dangerous (strongly ionising, all energy absorbed in nearby cells). Outside the body, <b>gamma and beta</b> are more dangerous because they can penetrate the skin; alpha is stopped by the dead outer layer of skin.</p>` },
    { h: 'Dangers and safety', html: `
<p>Ionising radiation can <b>damage cells and tissue</b> (radiation burns, radiation sickness at large doses) and cause <b>mutations</b> in DNA, which may lead to <b>cancer</b> or be passed to offspring.</p>
<p><b>Reducing risk:</b> keep exposure <b>time</b> short, keep a large <b>distance</b> (tongs, remote handling), use <b>shielding</b> (lead, concrete, lead aprons), wear film badges/dosimeters, store sources in lead-lined containers, wear gloves to prevent contamination.</p>
<p><b>Radioactive waste:</b> spent fuel and contaminated materials stay radioactive for thousands of years. Problems: must be kept away from people and water supplies for a very long time; risk of leaks, accidents or terrorism during transport and storage. Reducing risk: low-level waste in sealed drums in landfill; high-level waste cooled in water, then <b>vitrified</b> (sealed in glass), encased in steel/concrete and stored deep underground in geologically stable sites; monitored continuously.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why a smoke detector uses an alpha source with a long half-life.', s: ['Alpha particles are strongly ionising, so they ionise the air and let a current flow.', 'Smoke particles absorb alpha easily, reducing the current and triggering the alarm.', 'Alpha is stopped by the casing/a few cm of air, so it is safe; a long half-life means the activity stays nearly constant for years.'], a: 'Strongly ionising, easily absorbed by smoke, short range, long-lasting.' }
  ],
  pitfalls: ['Saying irradiated food becomes radioactive.', 'Choosing alpha for a medical tracer (it would not leave the body).', 'Choosing a long half-life for a medical tracer.', 'Confusing contamination and irradiation.'],
  cards: [
    ['How does a smoke detector work?', 'α particles ionise air → current; smoke absorbs α → current falls → alarm.'],
    ['Radiation used for thickness of paper?', 'Beta.'],
    ['Ideal medical tracer?', 'Gamma emitter with a short half-life.'],
    ['What is irradiation?', 'Exposure to radiation from an outside source; object does not become radioactive.'],
    ['What is contamination?', 'Radioactive material on or inside an object/person.'],
    ['Most dangerous radiation inside the body?', 'Alpha.'],
    ['Two dangers of ionising radiation?', 'Mutations (cancer); damage to cells and tissue.'],
    ['How is high-level waste stored?', 'Vitrified (glass), sealed in steel/concrete, stored deep underground.']
  ],
  quiz: [
    { q: 'Which radiation is used in smoke detectors?', o: ['alpha', 'beta', 'gamma', 'x-rays'], x: 'Strongly ionising.' },
    { q: 'A medical tracer should have', o: ['a short half-life and emit gamma', 'a long half-life and emit alpha', 'a long half-life and emit gamma', 'a short half-life and emit alpha'], x: 'Detected outside; low dose.' },
    { q: 'Food sterilised with gamma rays', o: ['does not become radioactive', 'becomes radioactive', 'becomes contaminated', 'loses all nutrients'], x: 'Irradiation.' },
    { q: 'Contamination means', o: ['radioactive material is on or in the object', 'the object is near a source', 'the object is shielded', 'the object is sterilised'], x: 'Definition.' },
    { q: 'Outside the body, which is least dangerous?', o: ['alpha', 'beta', 'gamma', 'all equal'], x: 'Stopped by skin.' },
    { q: 'Controlling paper thickness uses beta because', o: ['it is partly absorbed by paper', 'it passes straight through anything', 'it is stopped by paper completely', 'it is not ionising'], x: 'Detectable change.' }
  ],
  exam: [
    { q: 'A paper mill uses a radioactive source and detector to monitor the thickness of paper as it is made.', tag: 'ext', parts: [
      { q: 'State which type of radiation should be used and explain why.', m: 3, ms: ['beta', 'alpha would be completely absorbed by the paper', 'gamma would pass through with almost no change in count rate / beta partly absorbed so count varies with thickness'] },
      { q: 'Explain how the count rate is used to keep the thickness constant.', m: 2, ms: ['if paper gets thicker, fewer particles reach the detector (count falls)', 'the rollers are adjusted (pressed together) to make it thinner — and vice versa'] },
      { q: 'Explain why the source should have a long half-life.', m: 1, ms: ['activity/count rate stays constant over time, so changes are only due to thickness (and it does not need replacing)'] }
    ] },
    { q: 'Explain the difference between contamination and irradiation, and why alpha sources are especially dangerous if swallowed.', m: 5, ms: ['irradiation: exposure to radiation from an outside source', 'irradiated object does not become radioactive', 'contamination: radioactive material gets onto/into the body', 'exposure continues until removed/decayed', 'alpha strongly ionising — inside the body all its energy damages nearby cells (can’t be shielded)'] },
    { q: 'Discuss the problems of disposing of radioactive waste from nuclear power stations and how the risks can be reduced.', tag: 'ext', m: 6, ms: ['waste remains radioactive for thousands of years (long half-lives)', 'could leak into groundwater / environment', 'risk of theft/terrorism, accidents during transport', 'high-level waste stored under water to cool, then vitrified', 'sealed in steel/concrete containers, buried deep underground in stable rock', 'monitored; low-level waste in sealed drums'] }
  ],
  sims: ['tracer'], gens: []
});

TOPICS.push({
  id: '7.5', unit: '7', ref: '7.17–7.22', title: 'Nuclear fission and reactors', short: 'U-235, chain reactions, control rods, moderator, shielding',
  summary: 'Nuclear reactions as energy sources; the fission of uranium-235 by a neutron; chain reactions; and the roles of the control rods, moderator and shielding in a nuclear reactor.',
  spec: [
    '7.17 know that nuclear reactions, including fission, fusion and radioactive decay, can be a source of energy',
    '7.18 understand how a nucleus of U-235 can be split (the process of fission) by collision with a neutron and that this process releases energy as kinetic energy of the fission products',
    '7.19 know that the fission of U-235 produces two radioactive daughter nuclei and a small number of neutrons',
    '7.20 describe how a chain reaction can be set up if the neutrons produced by one fission strike other U-235 nuclei',
    '7.21 describe the role played by the control rods and moderator in the fission process',
    '7.22 understand the role of shielding around a nuclear reactor'
  ],
  learn: [
    { h: 'Fission of uranium-235', html: `
[[d:fission]]
<p>Nuclear reactions — <b>fission, fusion and radioactive decay</b> — release energy from the nuclear store.</p>
<p><b>Fission</b>: a slow-moving <b>neutron</b> is absorbed by a <b>uranium-235</b> nucleus, making it very unstable (U-236). It <b>splits</b> into <b>two smaller, radioactive daughter nuclei</b> (e.g. barium and krypton) and releases <b>2 or 3 neutrons</b> and a large amount of energy — mostly as <b>kinetic energy of the fission products</b> (plus gamma radiation).</p>
<p>Example: ${nuc(1, 0, 'n')} + ${nuc(235, 92, 'U')} → ${nuc(141, 56, 'Ba')} + ${nuc(92, 36, 'Kr')} + 3${nuc(1, 0, 'n')} + energy</p>` },
    { h: 'Chain reactions', html: `
[[d:chain]]
<p>The neutrons released by one fission can strike other U-235 nuclei and cause further fissions, each releasing more neutrons — a <b>chain reaction</b>. If every fission causes on average more than one further fission, the reaction grows very quickly (uncontrolled — as in a nuclear bomb). In a reactor it is <b>controlled</b> so that, on average, <b>exactly one</b> neutron from each fission causes another fission.</p>` },
    { h: 'Inside a nuclear reactor', html: `
[[d:reactor]]
<div class="tbl"><table><tr><th>Part</th><th>Role</th></tr>
<tr><td><b>Fuel rods</b></td><td>contain uranium enriched in U-235</td></tr>
<tr><td><b>Moderator</b> (graphite or water)</td><td><b>slows down</b> the fast neutrons released by fission, so they are more likely to be absorbed by U-235 and cause further fission</td></tr>
<tr><td><b>Control rods</b> (boron or cadmium)</td><td><b>absorb neutrons</b>; lowered further into the core to slow the reaction (fewer neutrons available), raised to speed it up; fully lowered to shut down</td></tr>
<tr><td><b>Coolant</b> (water/gas)</td><td>carries the thermal energy to a heat exchanger to make steam for the turbines</td></tr>
<tr><td><b>Shielding</b> (thick steel and concrete)</td><td>absorbs the ionising radiation (gamma, neutrons) from the core and the radioactive fission products, protecting workers and the environment</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Complete: ¹₀n + ²³⁵₉₂U → ⁹⁰₃₈Sr + ¹⁴³₅₄Xe + x ¹₀n. Find x.', s: ['Mass: 1 + 235 = 236 = 90 + 143 + x', 'x = 236 − 233 = 3', 'Charge check: 92 = 38 + 54 ✓'], a: 'x = 3 neutrons' }
  ],
  pitfalls: ['Saying the moderator absorbs neutrons — it slows them; control rods absorb them.', 'Saying fission products are stable — they are radioactive.', 'Saying a reactor chain reaction is uncontrolled.'],
  cards: [
    ['What causes U-235 to undergo fission?', 'Absorbing a (slow) neutron.'],
    ['Products of U-235 fission?', 'Two radioactive daughter nuclei, 2–3 neutrons, energy (kinetic energy of products, gamma).'],
    ['What is a chain reaction?', 'Neutrons from one fission cause further fissions.'],
    ['Role of the moderator?', 'Slows neutrons so they are more likely to cause fission.'],
    ['Role of control rods?', 'Absorb neutrons to control the rate of fission.'],
    ['Role of shielding?', 'Absorbs radiation from the core, protecting people/environment.'],
    ['Three nuclear reactions that release energy?', 'Fission, fusion, radioactive decay.'],
    ['Controlled chain reaction?', 'On average one neutron per fission causes another fission.']
  ],
  quiz: [
    { q: 'In a nuclear reactor, the control rods', o: ['absorb neutrons', 'slow neutrons down', 'produce neutrons', 'cool the reactor'], x: 'Boron/cadmium.' },
    { q: 'The moderator', o: ['slows down neutrons', 'absorbs all neutrons', 'shields workers', 'stops gamma rays'], x: 'Graphite/water.' },
    { q: 'Fission of U-235 releases energy mainly as', o: ['kinetic energy of the fission products', 'light', 'chemical energy', 'sound'], x: 'Spec 7.18.' },
    { q: 'To shut down a reactor quickly, the control rods are', o: ['lowered fully into the core', 'removed', 'heated', 'replaced with fuel'], x: 'Absorb more neutrons.' },
    { q: 'The daughter nuclei from fission are', o: ['radioactive', 'always stable', 'identical to U-235', 'protons'], x: 'Waste problem.' },
    { q: 'Thick concrete around a reactor is there to', o: ['absorb ionising radiation', 'slow neutrons for fission', 'cool the core', 'produce steam'], x: 'Shielding.' }
  ],
  exam: [
    { q: 'Uranium-235 is used as the fuel in a nuclear power station.', tag: 'ext', parts: [
      { q: 'Describe the process of fission of a uranium-235 nucleus.', m: 4, ms: ['a (slow) neutron is absorbed by a U-235 nucleus', 'the nucleus becomes unstable and splits', 'into two (radioactive) daughter nuclei', 'releasing 2 or 3 neutrons and energy (kinetic energy of the products / gamma)'] },
      { q: 'Explain how a chain reaction occurs and how it is controlled in the reactor.', m: 6, ms: ['neutrons released by one fission hit other U-235 nuclei', 'causing further fissions → chain reaction', 'moderator slows the neutrons so they can be absorbed/cause fission', 'control rods absorb neutrons', 'lowering rods reduces the number of neutrons → slows reaction; raising speeds it up', 'kept so that on average one neutron from each fission causes another'] },
      { q: 'Complete the equation: ¹₀n + ²³⁵₉₂U → ¹⁴⁴₅₆Ba + ⁸⁹ₓKr + 3 ¹₀n. Find x.', m: 1, ms: ['x = 36'] }
    ] },
    { q: 'Explain why a nuclear reactor is surrounded by thick concrete shielding, even when the reactor is shut down.', m: 3, ms: ['the core emits ionising radiation (gamma, neutrons)', 'fission products are radioactive and keep emitting radiation after shutdown', 'shielding absorbs the radiation to protect workers/environment'] }
  ],
  sims: ['fission'], gens: []
});

TOPICS.push({
  id: '7.6', unit: '7', ref: '7.23–7.26', title: 'Nuclear fusion', short: 'Fusion vs fission, stars, why high temperature',
  summary: 'Nuclear fusion joins small nuclei into larger ones with a loss of mass and release of energy; it powers the stars; it needs very high temperatures and pressures to overcome the electrostatic repulsion of protons.',
  spec: [
    '7.23 explain the difference between nuclear fusion and nuclear fission',
    '7.24 describe nuclear fusion as the creation of larger nuclei resulting in a loss of mass from smaller nuclei, accompanied by a release of energy',
    '7.25 know that fusion is the energy source for stars',
    '7.26 explain why nuclear fusion does not happen at low temperatures and pressures, due to electrostatic repulsion of protons'
  ],
  learn: [
    { h: 'Fusion', html: `
[[d:fusion]]
<p><b>Nuclear fusion</b> is the joining of two small (light) nuclei, such as isotopes of hydrogen, to make a <b>larger nucleus</b>. The mass of the new nucleus (and any particles released) is slightly <b>less</b> than the total mass of the original nuclei; this <b>loss of mass</b> is released as a large amount of <b>energy</b>.</p>
<p>Example: ${nuc(2, 1, 'H')} + ${nuc(3, 1, 'H')} → ${nuc(4, 2, 'He')} + ${nuc(1, 0, 'n')} + energy</p>
<p><b>Fusion is the energy source for stars</b>, including the Sun, where hydrogen nuclei fuse to form helium.</p>` },
    { h: 'Why fusion needs extreme conditions', html: `
<p>Nuclei are positively charged (they contain protons), so they <b>repel each other electrostatically</b>. For them to get close enough to fuse, they must be moving extremely fast — which needs a very <b>high temperature</b> (millions of °C) — and be close together, which needs a very high <b>pressure</b> (density) so collisions are frequent. At low temperatures and pressures, nuclei do not have enough kinetic energy to overcome the repulsion, so fusion does not happen. This is why fusion power stations are so hard to build (the hot plasma must be contained by strong magnetic fields).</p>
<div class="tbl"><table><tr><th></th><th>Fission</th><th>Fusion</th></tr>
<tr><td>Process</td><td>a large nucleus splits into two smaller nuclei</td><td>two small nuclei join to make a larger nucleus</td></tr>
<tr><td>Fuel</td><td>uranium-235, plutonium-239</td><td>hydrogen isotopes (deuterium, tritium)</td></tr>
<tr><td>Trigger/conditions</td><td>absorbing a neutron; works at ordinary temperatures</td><td>extremely high temperature and pressure</td></tr>
<tr><td>Where used</td><td>nuclear power stations</td><td>stars; experimental reactors</td></tr>
<tr><td>Waste</td><td>long-lived radioactive waste</td><td>little radioactive waste (helium)</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why fusion happens in the core of the Sun but not in a glass of water, even though water contains hydrogen.', s: ['Hydrogen nuclei are positive, so they repel.', 'In the Sun’s core the temperature (≈ 15 million °C) and pressure are enormous, so nuclei move fast enough and collide often enough to overcome the repulsion and fuse.', 'In water at room temperature the nuclei have far too little kinetic energy.'], a: 'Only extreme temperature/pressure overcome electrostatic repulsion.' }
  ],
  pitfalls: ['Mixing up fission (splitting) and fusion (joining).', 'Saying fusion needs a neutron to start it.', 'Explaining the need for high temperature without mentioning electrostatic repulsion.'],
  cards: [
    ['What is nuclear fusion?', 'Joining of two small nuclei to make a larger nucleus, with loss of mass and release of energy.'],
    ['Energy source of stars?', 'Nuclear fusion (hydrogen → helium).'],
    ['Why does fusion need high temperature?', 'Nuclei must move fast enough to overcome electrostatic repulsion between protons.'],
    ['Why does fusion need high pressure?', 'Nuclei must be close together so collisions are frequent.'],
    ['Fission vs fusion?', 'Fission: large nucleus splits. Fusion: small nuclei join.'],
    ['Where does the energy released in fusion come from?', 'A small loss of mass.']
  ],
  quiz: [
    { q: 'Nuclear fusion is', o: ['the joining of small nuclei', 'the splitting of a large nucleus', 'the emission of an alpha particle', 'a chemical reaction'], x: 'Definition.' },
    { q: 'The Sun’s energy comes from', o: ['fusion of hydrogen', 'fission of uranium', 'burning gas', 'radioactive decay of carbon'], x: 'Stars.' },
    { q: 'Fusion does not happen at room temperature because', o: ['nuclei repel each other electrostatically', 'there are no neutrons', 'nuclei attract too strongly', 'gravity is too weak'], x: 'Positive charges.' },
    { q: 'In fusion the mass of the products is', o: ['slightly less than the reactants', 'greater than the reactants', 'the same', 'zero'], x: 'Mass → energy.' },
    { q: 'Which uses fusion?', o: ['stars', 'current nuclear power stations', 'smoke detectors', 'x-ray machines'], x: 'Spec 7.25.' }
  ],
  exam: [
    { q: 'Scientists are building experimental fusion reactors.', tag: 'ext', parts: [
      { q: 'Describe what happens in nuclear fusion.', m: 3, ms: ['two light nuclei (e.g. hydrogen isotopes) join', 'to form a heavier nucleus (e.g. helium)', 'mass is lost and energy is released'] },
      { q: 'Explain why fusion only happens at very high temperatures and pressures.', m: 4, ms: ['nuclei are positively charged / contain protons', 'so they repel each other (electrostatic repulsion)', 'high temperature → nuclei move fast enough (enough kinetic energy) to get close enough to fuse', 'high pressure → nuclei close together, frequent collisions'] },
      { q: 'Give two differences between fusion and fission.', m: 2, ms: ['fusion joins small nuclei; fission splits a large nucleus', 'fusion needs extreme temperature/pressure; fission triggered by neutron absorption / fusion produces little radioactive waste'] }
    ] }
  ],
  sims: ['fission'], gens: []
});
