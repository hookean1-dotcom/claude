/* ==========================================================
   4.4 ATOMIC STRUCTURE
   ========================================================== */
TOPICS.push({
  id: '4.1', unit: '4', ref: '4.4.1', title: 'Atoms, isotopes and the model of the atom', short: 'Nucleus, isotopes, plum pudding → nuclear model',
  summary: 'The structure and scale of the atom, atomic and mass numbers, isotopes and ions — and how new evidence, especially alpha scattering, changed our model of the atom.',
  spec: [
    'Atoms are very small, with a radius of about 1 × 10⁻¹⁰ m',
    'An atom has a positively charged nucleus of protons and neutrons surrounded by negatively charged electrons',
    'The radius of a nucleus is less than 1/10 000 of the radius of the atom; most of the mass is concentrated in the nucleus',
    'Electrons are at different distances from the nucleus (energy levels); they move to a higher level by absorbing EM radiation and to a lower level by emitting it',
    'In an atom the number of electrons equals the number of protons, so atoms have no overall charge',
    'All atoms of an element have the same number of protons (atomic number); protons + neutrons = mass number',
    'Isotopes are atoms of the same element with different numbers of neutrons; relate differences between isotopes to their conventional representations',
    'Atoms become positive ions if they lose one or more outer electrons',
    'New experimental evidence may lead to a scientific model being changed or replaced',
    'Development of the model: tiny indivisible spheres → plum pudding (after discovery of the electron) → nuclear model (alpha scattering) → Bohr’s electron orbits → protons → neutrons (Chadwick, about 20 years later)',
    'Describe why the alpha scattering evidence changed the model, and the difference between the plum pudding and nuclear models'
  ],
  learn: [
    { h: 'Structure and size of the atom', html: `
[[d:atom]]
<div class="tbl"><table><tr><th>Particle</th><th>Relative charge</th><th>Relative mass</th><th>Where</th></tr>
<tr><td>proton</td><td>+1</td><td>1</td><td>nucleus</td></tr><tr><td>neutron</td><td>0</td><td>1</td><td>nucleus</td></tr><tr><td>electron</td><td>−1</td><td>very small (≈ 1/2000)</td><td>energy levels around the nucleus</td></tr></table></div>
<p>An atom has a radius of about <b>1 × 10<sup>−10</sup> m</b>. The <b>nucleus</b> is tiny — its radius is less than <b>1/10 000</b> of the atom’s — yet it contains <b>almost all the mass</b>. If an atom were the size of a football stadium, the nucleus would be a pea on the centre spot.</p>
<p>Electrons occupy different <b>energy levels</b> (different distances from the nucleus). An electron moves <b>further out</b> (higher level) when it <b>absorbs</b> electromagnetic radiation, and <b>closer in</b> (lower level) when it <b>emits</b> EM radiation.</p>` },
    { h: 'Atomic number, mass number and isotopes', html: `
<p style="text-align:center;font-size:26px">${nuc(23, 11, 'Na')}</p>
<ul><li><b>Atomic number</b> (bottom) = number of <b>protons</b>. All atoms of an element have the same atomic number.</li><li><b>Mass number</b> (top) = number of <b>protons + neutrons</b>.</li><li>Number of neutrons = mass number − atomic number. Sodium-23: 23 − 11 = 12 neutrons.</li></ul>
<p>In an atom, electrons = protons, so the atom has <b>no overall charge</b>. If an atom <b>loses</b> one or more outer electrons it becomes a <b>positive ion</b>.</p>
<div class="box def"><b class="lbl">Isotopes</b><p>Atoms of the same element (same number of protons) with <b>different numbers of neutrons</b>. E.g. ${nuc(12, 6, 'C')}, ${nuc(13, 6, 'C')} and ${nuc(14, 6, 'C')} all have 6 protons but 6, 7 and 8 neutrons.</p></div>` },
    { h: 'How the model of the atom developed', html: `
<p>New experimental evidence can lead to a scientific model being changed or replaced.</p>
<ol><li><b>Before 1897:</b> atoms were thought to be tiny spheres that could not be divided.</li>
<li><b>Discovery of the electron (1897)</b> → the <b>plum pudding model</b>: a ball of positive charge with negative electrons embedded in it.</li>
<li><b>Alpha particle scattering experiment (1909)</b> → the <b>nuclear model</b>: the mass is concentrated at the centre (the nucleus), which is charged. This replaced the plum pudding model.</li>
<li><b>Niels Bohr</b> adapted the nuclear model: electrons orbit the nucleus at <b>specific distances</b>. His calculations agreed with experimental observations.</li>
<li>Later experiments showed the positive charge of the nucleus is made of whole numbers of smaller particles with equal positive charge — <b>protons</b>.</li>
<li><b>James Chadwick</b> provided evidence for <b>neutrons</b> in the nucleus — about 20 years after the nucleus was accepted.</li></ol>
<p class="small muted">Details of Bohr’s supporting experiments and Chadwick’s experimental work are not required.</p>` },
    { h: 'Alpha scattering: the evidence', html: `
[[d:scatter]]
<p>Positively charged <b>alpha particles</b> were fired at very thin <b>gold foil</b>.</p>
<div class="tbl"><table><tr><th>Observation</th><th>Conclusion</th></tr>
<tr><td>Most alpha particles went <b>straight through</b></td><td>Most of the atom is <b>empty space</b></td></tr>
<tr><td>A few were <b>deflected</b> through small angles</td><td>The centre of the atom is <b>positively charged</b> (it repels the alpha particles)</td></tr>
<tr><td>A very few (about 1 in 8000) <b>bounced back</b></td><td>The mass and positive charge are concentrated in a <b>tiny nucleus</b></td></tr></table></div>
<p>The plum pudding model predicted all the alpha particles would pass straight through with only tiny deflections, because the positive charge is spread out. It could not explain the large deflections — so it was replaced.</p>` }
  ],
  eqs: [['"neutrons" = "mass number" - "atomic number"', '']],
  worked: [
    { q: 'How many protons, neutrons and electrons are in an atom of uranium-238 (atomic number 92)?', s: ['Protons = atomic number = 92', 'Neutrons = 238 − 92 = 146', 'Electrons = protons (neutral atom) = 92'], a: '92 protons, 146 neutrons, 92 electrons' },
    { q: 'Explain how the results of the alpha scattering experiment show that most of the atom is empty space.', s: ['Most alpha particles passed straight through the gold foil without being deflected.', 'They did not come close to anything that could deflect them — so most of the atom must be empty.'], a: 'Most particles passed straight through undeflected.' }
  ],
  pitfalls: ['Saying isotopes have different numbers of protons.', 'Saying the plum pudding model has a nucleus.', 'Saying an ion forms by gaining protons — ions form when electrons are lost (or gained).', 'Mixing up atomic number (protons) and mass number (protons + neutrons).', 'Saying most alpha particles bounced back.'],
  cards: [
    ['Approximate radius of an atom?', '1 × 10⁻¹⁰ m'],
    ['Size of the nucleus compared with the atom?', 'Radius less than 1/10 000 of the atom’s.'],
    ['Where is most of an atom’s mass?', 'In the nucleus.'],
    ['What is the atomic number?', 'The number of protons.'],
    ['What is the mass number?', 'The total number of protons and neutrons.'],
    ['Define isotopes.', 'Atoms of the same element with different numbers of neutrons.'],
    ['Why is an atom neutral?', 'It has equal numbers of protons and electrons.'],
    ['How does an atom become a positive ion?', 'It loses one or more outer electrons.'],
    ['What is the plum pudding model?', 'A ball of positive charge with negative electrons embedded in it.'],
    ['Alpha scattering: most went straight through — conclusion?', 'Most of the atom is empty space.'],
    ['Alpha scattering: a few bounced back — conclusion?', 'Mass and positive charge concentrated in a tiny nucleus.'],
    ['What did Bohr suggest?', 'Electrons orbit the nucleus at specific distances (energy levels).'],
    ['Who provided evidence for the neutron?', 'James Chadwick.'],
    ['What happens when an electron absorbs EM radiation?', 'It moves to a higher energy level (further from the nucleus).']
  ],
  quiz: [
    { q: 'The radius of an atom is about', o: ['1 × 10⁻¹⁰ m', '1 × 10⁻¹⁴ m', '1 × 10⁻⁶ m', '1 × 10⁻³ m'], x: 'Spec value.' },
    { q: 'Isotopes of an element have the same number of', o: ['protons', 'neutrons', 'nucleons', 'mass number'], x: 'Same element → same proton number.' },
    { q: `An atom of ${nuc(27, 13, 'Al')} contains`, o: ['13 protons and 14 neutrons', '14 protons and 13 neutrons', '13 protons and 27 neutrons', '27 protons and 13 neutrons'], x: 'Neutrons = 27 − 13.' },
    { q: 'Which particles are found in the nucleus?', o: ['protons and neutrons', 'protons and electrons', 'neutrons and electrons', 'electrons only'], x: 'Nucleons.' },
    { q: 'In the alpha scattering experiment, most alpha particles', o: ['passed straight through the foil', 'bounced straight back', 'were absorbed', 'were deflected through large angles'], x: 'Most of the atom is empty space.' },
    { q: 'The plum pudding model was replaced because it could not explain', o: ['some alpha particles bouncing back', 'most alpha particles passing through', 'the existence of electrons', 'why atoms are neutral'], x: 'Needs a small, dense, charged nucleus.' },
    { q: 'An atom becomes a positive ion when it', o: ['loses electrons', 'gains electrons', 'gains protons', 'loses neutrons'], x: 'Fewer electrons than protons.' },
    { q: 'Who suggested electrons orbit the nucleus at specific distances?', o: ['Niels Bohr', 'James Chadwick', 'J. J. Thomson', 'Isaac Newton'], x: 'Bohr model.' },
    { q: 'The neutron was discovered by', o: ['James Chadwick', 'Niels Bohr', 'Ernest Rutherford alone', 'Marie Curie'], x: 'About 20 years after the nucleus was accepted.' },
    { q: 'An electron moves to a lower energy level. It', o: ['emits electromagnetic radiation', 'absorbs electromagnetic radiation', 'leaves the atom', 'becomes a proton'], x: 'Energy is given out.' },
    { q: 'Carbon-12 and carbon-14 differ in the number of', o: ['neutrons', 'protons', 'electrons in a neutral atom', 'energy levels'], x: '6 and 8 neutrons.' },
    { q: 'The mass number of an atom is the number of', o: ['protons plus neutrons', 'protons only', 'neutrons only', 'protons plus electrons'], x: 'Nucleons.' }
  ],
  exam: [
    { q: 'Describe the differences between the plum pudding model and the nuclear model of the atom.', m: 3, ms: ['Plum pudding: positive charge spread throughout the atom; nuclear: positive charge concentrated in a nucleus.', 'Plum pudding: mass spread evenly; nuclear: mass concentrated in the nucleus.', 'Nuclear model: electrons outside the nucleus / mostly empty space (plum pudding: electrons embedded in the positive ball).'] },
    { q: 'Explain how the results of the alpha particle scattering experiment led to the nuclear model.', m: 4, ms: ['Most alpha particles went straight through → atom mostly empty space.', 'Some were deflected → centre is charged (positive).', 'A few bounced back → mass concentrated in a very small central region.', 'Plum pudding model could not explain this, so it was replaced by the nuclear model.'] },
    { q: 'Chlorine has two isotopes, chlorine-35 and chlorine-37. Chlorine has atomic number 17. Compare the two isotopes.', m: 3, ms: ['Both have 17 protons (and 17 electrons).', 'Chlorine-35 has 18 neutrons.', 'Chlorine-37 has 20 neutrons.'] }
  ],
  sims: ['atom', 'rutherford'], gens: ['nucl1', 'nucl2']
});

TOPICS.push({
  id: '4.2', unit: '4', ref: '4.4.2.1–4.4.2.2', title: 'Radioactive decay and nuclear equations', short: 'α, β, γ and n — properties and equations',
  summary: 'Unstable nuclei decay randomly, emitting alpha, beta, gamma or neutron radiation. Compare penetration, range and ionising power, and balance alpha and beta decay equations.',
  spec: [
    'Some atomic nuclei are unstable; the nucleus gives out radiation as it changes to become more stable — a random process called radioactive decay',
    'Activity is the rate at which a source of unstable nuclei decays, measured in becquerel (Bq)',
    'Count-rate is the number of decays recorded each second by a detector (e.g. Geiger–Muller tube)',
    'Alpha particle: two neutrons and two protons (a helium nucleus); beta particle: a high-speed electron ejected from the nucleus as a neutron turns into a proton; gamma ray: EM radiation from the nucleus; neutron (n)',
    'Properties of α, β and γ limited to penetration through materials, range in air and ionising power',
    'Apply knowledge to the uses of radiation and evaluate the best source to use in a given situation',
    'Nuclear equations represent radioactive decay; symbols for the alpha particle and beta particle',
    'Alpha decay decreases both the mass and charge of the nucleus; beta decay does not change the mass but increases the charge; gamma emission changes neither',
    'Write balanced equations for single alpha and beta decay (balancing atomic and mass numbers only; identifying daughter elements is not required)'
  ],
  learn: [
    { h: 'Radioactive decay', html: `
<p>Some atomic nuclei are <b>unstable</b>. The nucleus gives out radiation as it changes to become <b>more stable</b>. This is a <b>random</b> process called <b>radioactive decay</b> — you cannot predict which nucleus will decay next, or when.</p>
<div class="box def"><b class="lbl">Key terms</b><p><b>Activity</b> — the rate at which a source of unstable nuclei decays, measured in <b>becquerel (Bq)</b>. 1 Bq = 1 decay per second.</p><p><b>Count-rate</b> — the number of decays recorded each second by a detector such as a <b>Geiger–Muller tube</b>.</p></div>` },
    { h: 'Types of nuclear radiation', html: `
<div class="tbl"><table><tr><th></th><th>Alpha (α)</th><th>Beta (β)</th><th>Gamma (γ)</th></tr>
<tr><td>What it is</td><td>2 protons + 2 neutrons (a helium nucleus)</td><td>high-speed electron ejected from the nucleus as a neutron turns into a proton</td><td>electromagnetic radiation from the nucleus</td></tr>
<tr><td>Stopped by</td><td>a sheet of paper (or skin)</td><td>a few mm of aluminium</td><td>several cm of lead / metres of concrete (reduced, not fully stopped)</td></tr>
<tr><td>Range in air</td><td>a few cm</td><td>about 1 m</td><td>very large</td></tr>
<tr><td>Ionising power</td><td>strongly ionising</td><td>moderately ionising</td><td>weakly ionising</td></tr></table></div>
[[d:penetration]]
<p>A nucleus may also emit a <b>neutron (n)</b>.</p>
<p>Ionising power and penetration are linked: alpha particles ionise strongly, so they lose their energy quickly and cannot travel far. Gamma rays rarely interact, so they penetrate a long way.</p>
<div class="box tip"><b class="lbl">Choosing a source</b><p>Paper thickness gauge → <b>beta</b> (alpha would be stopped by any paper; gamma would pass straight through regardless). Smoke alarm → <b>alpha</b> (short range, strongly ionising). Medical tracer inside the body → <b>gamma</b> (detected outside the body, weakly ionising).</p></div>` },
    { h: 'Nuclear equations', html: `
<p>In nuclear equations, an alpha particle is written ${nuc(4, 2, 'He')} and a beta particle ${nuc(0, -1, 'e')}. The <b>mass numbers</b> (top) and the <b>atomic numbers</b> (bottom) must <b>balance</b> on each side.</p>
<div class="box def"><b class="lbl">Alpha decay</b><p style="font-size:20px">${nuc(219, 86, 'Rn')} → ${nuc(215, 84, 'Po')} + ${nuc(4, 2, 'He')}</p><p>Mass number falls by 4, atomic number falls by 2 — alpha decay decreases <b>both the mass and the charge</b> of the nucleus.</p></div>
<div class="box def"><b class="lbl">Beta decay</b><p style="font-size:20px">${nuc(14, 6, 'C')} → ${nuc(14, 7, 'N')} + ${nuc(0, -1, 'e')}</p><p>A neutron turns into a proton: mass number unchanged, atomic number <b>increases by 1</b> — beta decay does not change the mass but <b>increases the charge</b>.</p></div>
<p><b>Gamma</b> emission does not change the mass or charge of the nucleus — it is just energy leaving.</p>
<p class="small muted">You do not need to recall these two examples, or identify the new elements formed — only balance the numbers.</p>` }
  ],
  eqs: [['"α:" A → A - 4,  Z → Z - 2', 'alpha decay'], ['"β:" A "unchanged",  Z → Z + 1', 'beta decay']],
  worked: [
    { q: 'Radium-226 (atomic number 88) decays by alpha emission. Write the mass number and atomic number of the nucleus formed.', s: [`Alpha particle = ${nuc(4, 2, 'He')}`, 'Mass number: 226 − 4 = 222', 'Atomic number: 88 − 2 = 86'], a: 'Mass number 222, atomic number 86' },
    { q: `Complete the beta decay equation: ${nuc(90, 38, 'Sr')} → ${nuc('A', 'Z', 'Y')} + ${nuc(0, -1, 'e')}`, s: ['Mass numbers: 90 = A + 0, so A = 90', 'Atomic numbers: 38 = Z + (−1), so Z = 39'], a: 'A = 90, Z = 39' }
  ],
  pitfalls: ['Saying a beta particle is an electron from the electron shells — it comes from the nucleus.', 'Saying gamma rays are particles.', 'Getting the atomic number change in beta decay the wrong way (it increases).', 'Saying lead “completely” stops gamma — it greatly reduces it.', 'Confusing activity (Bq) with count-rate.'],
  cards: [
    ['What is radioactive decay?', 'The random process in which an unstable nucleus gives out radiation to become more stable.'],
    ['Define activity.', 'The rate at which a source of unstable nuclei decays.'],
    ['Unit of activity?', 'becquerel (Bq)'],
    ['What is count-rate?', 'Number of decays recorded each second by a detector.'],
    ['What is an alpha particle?', '2 protons + 2 neutrons — a helium nucleus.'],
    ['What is a beta particle?', 'A high-speed electron ejected from the nucleus as a neutron turns into a proton.'],
    ['What is a gamma ray?', 'Electromagnetic radiation from the nucleus.'],
    ['What stops alpha?', 'Paper (or a few cm of air).'],
    ['What stops beta?', 'A few mm of aluminium.'],
    ['What reduces gamma?', 'Thick lead or concrete.'],
    ['Most ionising radiation?', 'Alpha.'],
    ['Effect of alpha decay on A and Z?', 'A decreases by 4, Z decreases by 2.'],
    ['Effect of beta decay on A and Z?', 'A unchanged, Z increases by 1.'],
    ['Effect of gamma emission on the nucleus?', 'No change in mass or charge.']
  ],
  quiz: [
    { q: 'Radioactive decay is', o: ['random', 'predictable for each nucleus', 'caused by heating', 'only possible in stable nuclei'], x: 'You cannot predict when a given nucleus will decay.' },
    { q: 'An alpha particle consists of', o: ['2 protons and 2 neutrons', '2 electrons', '1 proton and 1 neutron', 'an electron from the nucleus'], x: 'A helium nucleus.' },
    { q: 'A beta particle is', o: ['a high-speed electron from the nucleus', 'a helium nucleus', 'a gamma ray', 'a proton'], x: 'A neutron turns into a proton and an electron is emitted.' },
    { q: 'Which radiation is stopped by a sheet of paper?', o: ['alpha', 'beta', 'gamma', 'neutrons'], x: 'Least penetrating.' },
    { q: 'Which radiation is most strongly ionising?', o: ['alpha', 'beta', 'gamma', 'all are equal'], x: 'Large charge and mass.' },
    { q: 'The unit of activity is', o: ['becquerel', 'sievert', 'coulomb', 'hertz'], x: '1 Bq = 1 decay per second.' },
    { q: 'In alpha decay the mass number', o: ['decreases by 4', 'decreases by 2', 'increases by 1', 'does not change'], x: '⁴₂He leaves.' },
    { q: 'In beta decay the atomic number', o: ['increases by 1', 'decreases by 1', 'decreases by 2', 'does not change'], x: 'A neutron becomes a proton.' },
    { q: 'Emitting a gamma ray changes the nucleus’s', o: ['energy only — not its mass number or atomic number', 'mass number by 4', 'atomic number by 1', 'atomic number by 2'], x: 'Gamma is EM radiation.' },
    { q: 'Which radiation would be best for measuring the thickness of paper in a paper mill?', o: ['beta', 'alpha', 'gamma', 'neutron'], x: 'Partly absorbed by paper — count-rate changes with thickness.' },
    { q: 'Uranium-238 (Z = 92) emits an alpha particle. The new nucleus has', o: ['mass number 234, atomic number 90', 'mass number 238, atomic number 93', 'mass number 234, atomic number 92', 'mass number 236, atomic number 90'], x: 'A − 4, Z − 2.' },
    { q: 'The range of beta radiation in air is about', o: ['1 m', 'a few cm', 'a few mm', 'several km'], x: 'Between alpha and gamma.' },
    { q: 'Count-rate is measured with', o: ['a Geiger–Muller tube', 'an ammeter', 'a thermometer', 'a joulemeter'], x: 'A detector connected to a counter.' }
  ],
  exam: [
    { q: 'Compare the properties of alpha, beta and gamma radiation.', m: 6, ms: ['Alpha: stopped by paper; range a few cm in air.', 'Beta: stopped by a few mm of aluminium; range about 1 m.', 'Gamma: reduced by thick lead/concrete; very long range.', 'Alpha is the most ionising.', 'Beta is moderately ionising.', 'Gamma is the least ionising.'] },
    { q: `Complete the equation for the alpha decay of polonium-210: ${nuc(210, 84, 'Po')} → ${nuc('…', '…', 'Pb')} + ${nuc(4, 2, 'He')}`, m: 2, ms: ['Mass number 206', 'Atomic number 82'] },
    { q: 'Explain what happens inside the nucleus during beta decay and how this changes the nucleus.', m: 3, ms: ['A neutron changes into a proton.', 'A high-speed electron (beta particle) is emitted.', 'Mass number stays the same; atomic number increases by 1.'] },
    { q: 'A smoke alarm uses an alpha source. Explain why alpha is suitable.', m: 2, ms: ['Alpha is strongly ionising, so it ionises the air to give a current (smoke reduces it).', 'Short range / stopped by the casing — so it is safe to people nearby.'] }
  ],
  sims: ['penetrate'], gens: ['alpha1', 'beta1']
});

TOPICS.push({
  id: '4.3', unit: '4', ref: '4.4.2.3–4.4.2.4', title: 'Half-life, contamination and irradiation', short: 'Random decay, half-life graphs, hazards',
  summary: 'Why random decay gives a predictable half-life, how to read half-life from a graph, net decline after several half-lives, and the difference between contamination and irradiation.',
  spec: [
    'Radioactive decay is random',
    'Half-life: the time for the number of nuclei of the isotope in a sample to halve, or for the count-rate (or activity) to fall to half its initial level',
    'Explain the concept of half-life and how it is related to the random nature of radioactive decay',
    'Determine the half-life of a radioactive isotope from given information',
    '(HT) Calculate the net decline, expressed as a ratio, in a radioactive emission after a given number of half-lives',
    'Radioactive contamination is the unwanted presence of materials containing radioactive atoms on other materials; the hazard is from the decay of the contaminating atoms, and the type of radiation affects the level of hazard',
    'Irradiation is exposing an object to nuclear radiation; the irradiated object does not become radioactive',
    'Compare the hazards of contamination and irradiation; suitable precautions must be taken',
    'Findings of studies into the effects of radiation on humans must be published and shared so they can be checked by peer review'
  ],
  learn: [
    { h: 'Half-life', html: `
<div class="box def"><b class="lbl">Definition</b><p>The <b>half-life</b> of a radioactive isotope is the time it takes for the <b>number of nuclei</b> of the isotope in a sample to <b>halve</b>, or the time it takes for the <b>count-rate</b> (or activity) from a sample to fall to <b>half its initial level</b>.</p></div>
<p>Each nucleus decays at random, but with an enormous number of nuclei the <b>proportion</b> that decays in a given time is predictable — like tossing a million coins, about half will land heads every time. So the half-life is constant for a particular isotope.</p>
[[d:halflife]]
<p><b>From a graph:</b> read the starting count-rate, find half that value, draw across to the curve and down to the time axis. Check with a second pair of readings (e.g. half again).</p>
<div class="box tip"><b class="lbl">Exam tip</b><p>Subtract the <b>background count-rate</b> before finding the half-life if the question gives one.</p></div>` },
    { h: 'Net decline after several half-lives', ht: true, html: `
<p>After each half-life the amount is multiplied by ½. After n half-lives the fraction left is $(@frac{1}{2})^n$.</p>
<div class="tbl"><table><tr><th>Half-lives</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr><tr><td>Fraction left</td><td>1</td><td>1/2</td><td>1/4</td><td>1/8</td><td>1/16</td></tr></table></div>
<p>The <b>net decline</b> can be expressed as a ratio. E.g. after 3 half-lives the activity has fallen from 800 Bq to 100 Bq: a decline of 700 Bq, so the ratio of net decline to initial activity is 700 : 800 = <b>7 : 8</b>. The ratio of final to initial activity is 1 : 8.</p>` },
    { h: 'Contamination and irradiation', html: `
<div class="box def"><b class="lbl">Contamination</b><p>The <b>unwanted presence</b> of materials containing radioactive atoms <b>on</b> (or in) other materials. The hazard comes from the <b>decay of the contaminating atoms</b>, and continues until they are removed or have decayed. The type of radiation affects the hazard.</p></div>
<div class="box def"><b class="lbl">Irradiation</b><p>Exposing an object to nuclear radiation. The irradiated object <b>does not become radioactive</b>. The hazard stops as soon as the source is removed or shielded.</p></div>
<p><b>Comparing hazards:</b> contamination is usually more dangerous — the radioactive atoms stay in contact, perhaps inside the body. Inside the body, <b>alpha</b> is most dangerous (strongly ionising, all its energy absorbed by nearby cells). Outside the body, <b>gamma</b> and <b>beta</b> are more dangerous because alpha cannot get through the skin.</p>
<p><b>Precautions:</b> wear gloves, use tongs, keep sources in lead-lined boxes, minimise time of exposure, keep as far away as possible, and workers wear dosimeter badges.</p>
<p>Results of studies on the effects of radiation on humans must be <b>published and shared</b> so that other scientists can check them by <b>peer review</b>.</p>` }
  ],
  eqs: [['"fraction left" = (@frac{1}{2})^n', 'after n half-lives (HT ratio work)']],
  worked: [
    { q: 'A sample has an activity of 1200 Bq. Its half-life is 6 hours. What will its activity be after 24 hours?', s: ['Number of half-lives = 24 ÷ 6 = 4', '1200 → 600 → 300 → 150 → 75', 'Activity = 75 Bq'], a: '75 Bq' },
    { ht: 1, q: 'A source has an initial count-rate of 640 counts/s. After 3 half-lives, what is the ratio of the net decline to the initial count-rate?', s: ['After 3 half-lives: 640 × (½)³ = 80 counts/s', 'Net decline = 640 − 80 = 560 counts/s', 'Ratio = 560 : 640 = 7 : 8'], a: '7 : 8' },
    { q: 'The count-rate from a source falls from 400 to 100 counts per minute in 30 minutes. Calculate the half-life.', s: ['400 → 200 → 100 is two halvings', 'So 2 half-lives = 30 min', 'Half-life = 15 minutes'], a: '15 minutes' }
  ],
  pitfalls: ['Saying the half-life is half the time for all nuclei to decay.', 'Thinking an irradiated object becomes radioactive.', 'Forgetting to subtract background count.', 'Reading the half-life from the time the count-rate falls by half of the current value only once — check with a second halving.', 'Saying alpha is harmless — it is the most dangerous inside the body.'],
  cards: [
    ['Define half-life.', 'Time for the number of unstable nuclei (or count-rate) in a sample to halve.'],
    ['Why is half-life constant even though decay is random?', 'With huge numbers of nuclei, the proportion decaying in a given time is predictable.'],
    ['Fraction left after 3 half-lives?', '1/8'],
    ['Define radioactive contamination.', 'The unwanted presence of radioactive atoms on or in other materials.'],
    ['Define irradiation.', 'Exposing an object to nuclear radiation — it does not become radioactive.'],
    ['Which is usually more hazardous, contamination or irradiation?', 'Contamination — the source stays in contact and keeps decaying.'],
    ['Most dangerous radiation inside the body?', 'Alpha (strongly ionising).'],
    ['Most dangerous radiation outside the body?', 'Gamma (and beta) — they penetrate skin.'],
    ['Three precautions when handling sources?', 'Tongs, gloves, lead-lined storage, minimise time, maximise distance.'],
    ['Why must radiation studies be peer reviewed?', 'So findings can be checked by other scientists.'],
    ['(HT) Net decline ratio after 2 half-lives?', '3 : 4 (of the initial amount).', 'ht']
  ],
  quiz: [
    { q: 'The half-life of a radioactive isotope is the time taken for', o: ['the number of unstable nuclei to halve', 'all the nuclei to decay', 'the mass number to halve', 'the source to become safe'], x: 'Spec definition.' },
    { q: 'A source has a half-life of 5 days. What fraction remains after 15 days?', o: ['1/8', '1/3', '1/4', '1/16'], x: '3 half-lives.' },
    { q: 'Activity falls from 800 Bq to 200 Bq in 12 hours. The half-life is', o: ['6 hours', '3 hours', '12 hours', '24 hours'], x: '800 → 400 → 200 = 2 half-lives.' },
    { q: 'An object is irradiated with gamma rays. Afterwards the object', o: ['is not radioactive', 'is radioactive for a short time', 'emits gamma rays', 'becomes contaminated'], x: 'Irradiation does not make objects radioactive.' },
    { q: 'Radioactive contamination is', o: ['the unwanted presence of radioactive atoms on other materials', 'exposure to radiation from a distance', 'the decay of stable nuclei', 'a type of beta radiation'], x: 'Spec definition.' },
    { q: 'Inside the body, which radiation is most harmful?', o: ['alpha', 'beta', 'gamma', 'they are equally harmful'], x: 'Strongly ionising and absorbed locally.' },
    { q: 'The count-rate from a sample is 240 counts/min and the background count is 40 counts/min. After one half-life, the measured count-rate will be', o: ['140 counts/min', '120 counts/min', '100 counts/min', '200 counts/min'], x: 'Source: 200 → 100; add background 40.' },
    { q: 'Why is it important to publish studies on the effects of radiation?', o: ['so results can be checked by peer review', 'so the results become true', 'to make radiation safer', 'to avoid repeating experiments'], x: 'Peer review checks validity.' },
    { q: 'Radioactive decay is random. This means', o: ['you cannot predict when a particular nucleus will decay', 'every nucleus decays after one half-life', 'the half-life keeps changing', 'decay happens at regular intervals'], x: 'The proportion is predictable, not individual events.' },
    { q: 'After 4 half-lives, the activity of a source has fallen from 3200 Bq to', o: ['200 Bq', '800 Bq', '400 Bq', '100 Bq'], x: '3200/16.' },
    { q: 'The net decline of a source after 2 half-lives, as a ratio of the initial activity, is', o: ['3 : 4', '1 : 4', '1 : 2', '2 : 1'], x: '¼ remains, so ¾ has gone.', ht: 1 },
    { q: 'Which is a precaution for workers using radioactive sources?', o: ['handle sources with tongs, keeping them at arm’s length', 'hold sources in the hand briefly', 'keep sources in the pocket', 'point the source towards other people'], x: 'Maximise distance.' }
  ],
  exam: [
    { q: 'Explain the difference between contamination and irradiation, and why contamination is often more hazardous.', m: 4, ms: ['Contamination: radioactive atoms get onto/into an object or person.', 'Irradiation: object exposed to radiation from outside; it does not become radioactive.', 'Contaminating atoms continue to decay and emit radiation, so the exposure continues.', 'If inside the body (e.g. alpha) the radiation is absorbed by cells — very damaging.'] },
    { q: 'A sample of iodine-131 has an activity of 480 Bq. Its half-life is 8 days. Calculate the activity after 32 days.', m: 2, ms: ['32 / 8 = 4 half-lives', '480 / 16 = 30 Bq'] },
    { q: 'The activity of a sample falls to 1/32 of its initial value. Calculate the number of half-lives and state the net decline as a ratio of the initial activity.', m: 3, ms: ['1/32 = (½)⁵', 'So 5 half-lives', 'Net decline : initial = 31 : 32'], ht: 1 },
    { q: 'Explain why the half-life of a large sample can be predicted, even though radioactive decay is random.', m: 2, ms: ['There are very large numbers of nuclei.', 'So the proportion (fraction) decaying in a given time is predictable / constant.'] }
  ],
  sims: ['decay'], gens: ['hl1', 'hl2', 'hl3', 'hl4']
});

TOPICS.push({
  id: '4.4', unit: '4', ref: '4.4.3', po: true, title: 'Background radiation and uses of radiation', short: 'Sources, dose, half-life hazards, medicine',
  summary: 'Where background radiation comes from, how dose depends on job and location, why half-life affects the hazard, and how radiation is used to explore and to treat the body.',
  spec: [
    '(PO) Background radiation is around us all of the time: natural sources (rocks, cosmic rays) and man-made sources (fallout from nuclear weapons testing and nuclear accidents)',
    '(PO) The level of background radiation and radiation dose may be affected by occupation and/or location',
    '(PO) Radiation dose is measured in sieverts (Sv); 1000 millisieverts (mSv) = 1 Sv (the unit does not need to be recalled)',
    '(PO) Radioactive isotopes have a very wide range of half-lives; explain why hazards differ according to half-life; use data in standard form',
    '(PO) Nuclear radiations are used in medicine for exploration of internal organs and for control or destruction of unwanted tissue',
    '(PO) Describe and evaluate these uses; evaluate the perceived risks of using nuclear radiation in relation to given data and consequences'
  ],
  learn: [
    { h: 'Background radiation', html: `
<p><b>Background radiation</b> is around us all the time. It comes from:</p>
<ul><li><b>natural sources</b> — rocks (especially granite, which releases radon gas), cosmic rays from space, food and drink;</li><li><b>man-made sources</b> — fallout from nuclear weapons testing and nuclear accidents (e.g. Chernobyl), plus medical X-rays.</li></ul>
[[d:background]]
<p>The level of background radiation and the <b>radiation dose</b> a person receives can depend on their <b>occupation</b> (airline pilots receive more cosmic rays; radiographers and nuclear workers work near sources) and <b>location</b> (areas with granite rock, such as Cornwall, have more radon).</p>
<p>Radiation dose is measured in <b>sieverts (Sv)</b>: 1000 millisieverts (mSv) = 1 Sv. A typical UK annual dose is about 2.7 mSv.</p>` },
    { h: 'Half-life and hazard', html: `
<p>Radioactive isotopes have a <b>very wide range</b> of half-lives, from fractions of a second to billions of years (uranium-238: 4.5 × 10<sup>9</sup> years).</p>
<ul><li>An isotope with a <b>short half-life</b> is intensely active at first but soon decays to a safe level.</li><li>An isotope with a <b>long half-life</b> has a lower activity but stays hazardous for a very long time — this is why nuclear waste must be stored safely for thousands of years.</li></ul>
<p>For use inside the body, a short half-life (hours) is best: enough time to do its job, then it decays quickly so the patient’s dose is small.</p>` },
    { h: 'Uses in medicine', html: `
<p><b>Exploring internal organs (tracers):</b> a gamma-emitting isotope with a short half-life, e.g. technetium-99m (half-life 6 hours), is injected or swallowed. It collects in the organ being studied; a gamma camera outside the body detects the radiation and builds an image. Gamma is used because it passes out of the body and is weakly ionising.</p>
<p><b>Controlling or destroying unwanted tissue (radiotherapy):</b></p>
<ul><li>Beams of <b>gamma rays</b> are aimed at a tumour from several directions, so the tumour gets a high dose while surrounding healthy tissue gets less.</li><li>An <b>implant</b> of a beta (or alpha) emitter can be placed in or next to a tumour, so the radiation only travels a short distance.</li><li>Radioactive iodine-131 is taken up by the thyroid gland to treat an overactive thyroid or thyroid cancer.</li></ul>
<div class="box why"><b class="lbl">Evaluating the risk</b><p>Radiation can damage healthy cells and cause cancer. Doctors weigh the <b>benefit</b> (diagnosis or cure) against the <b>risk</b>. People often perceive radiation as riskier than data suggest, because it is invisible, unfamiliar and imposed rather than chosen.</p></div>` }
  ],
  eqs: [['1 "Sv" = 1000 "mSv"', 'radiation dose (unit not required to recall)']],
  worked: [
    { q: 'A hospital must choose an isotope for a tracer in the kidneys. Explain why technetium-99m (gamma, half-life 6 h) is better than americium-241 (alpha, half-life 430 years).', s: ['Gamma passes out of the body so it can be detected by a camera outside; alpha would be absorbed inside the body.', 'Gamma is weakly ionising, so it causes less damage to cells than alpha.', 'A 6-hour half-life gives enough time for the scan, then decays quickly — a 430-year half-life would keep irradiating the patient.'], a: 'Tc-99m: detectable outside, less ionising, short half-life.' }
  ],
  pitfalls: ['Saying all background radiation is man-made.', 'Choosing an alpha emitter as a medical tracer.', 'Saying a long half-life is always more dangerous — a short one can be more intense at first.', 'Confusing dose (Sv) with activity (Bq).'],
  cards: [
    ['Two natural sources of background radiation?', 'Rocks (radon gas) and cosmic rays.', 'po'],
    ['Two man-made sources of background radiation?', 'Fallout from nuclear weapons tests and nuclear accidents.', 'po'],
    ['What can affect a person’s radiation dose?', 'Their occupation and location.', 'po'],
    ['Unit of radiation dose?', 'Sievert (Sv); 1000 mSv = 1 Sv.', 'po'],
    ['Why is nuclear waste dangerous for so long?', 'Some isotopes have very long half-lives.', 'po'],
    ['Ideal half-life for a medical tracer?', 'A few hours — long enough to use, short enough to reduce the dose.', 'po'],
    ['Which radiation is used for a medical tracer and why?', 'Gamma — it leaves the body to be detected and is weakly ionising.', 'po'],
    ['How does radiotherapy destroy a tumour?', 'Gamma beams from several directions or an implanted source kill cancer cells.', 'po'],
    ['Why do airline pilots get a higher dose?', 'More cosmic rays at high altitude.', 'po'],
    ['Why might the perceived risk of radiation be higher than the actual risk?', 'It is invisible, unfamiliar and imposed rather than voluntary.', 'po']
  ],
  quiz: [
    { q: 'Which is a natural source of background radiation?', o: ['cosmic rays', 'nuclear weapons fallout', 'nuclear accidents', 'medical X-rays'], x: 'From space.', po: 1 },
    { q: 'Radiation dose is measured in', o: ['sieverts', 'becquerels', 'counts per second', 'joules'], x: '1 Sv = 1000 mSv.', po: 1 },
    { q: 'An airline pilot receives a higher radiation dose than most people because of', o: ['more cosmic rays at altitude', 'radon from the aircraft', 'the aircraft’s engines', 'radar signals'], x: 'Occupation affects dose.', po: 1 },
    { q: 'The best isotope to use as a medical tracer is one that', o: ['emits gamma and has a half-life of a few hours', 'emits alpha and has a long half-life', 'emits beta and has a half-life of years', 'emits alpha and has a half-life of seconds'], x: 'Detectable outside, low dose.', po: 1 },
    { q: 'Why is radioactive waste with a long half-life a problem?', o: ['it remains hazardous for a very long time', 'it decays very quickly', 'it is not radioactive', 'it only emits gamma'], x: 'Needs safe storage for millennia.', po: 1 },
    { q: 'In radiotherapy, gamma beams are aimed at a tumour from several directions so that', o: ['the tumour receives a high dose but healthy tissue receives less', 'the patient becomes radioactive', 'the beams cancel out', 'fewer cells are killed'], x: 'Beams overlap only at the tumour.', po: 1 },
    { q: '5.0 mSv expressed in sieverts is', o: ['0.0050 Sv', '5000 Sv', '0.50 Sv', '0.050 Sv'], x: '÷ 1000.', po: 1 },
    { q: 'People living in areas with lots of granite may receive a higher dose from', o: ['radon gas', 'cosmic rays', 'nuclear power stations', 'mobile phones'], x: 'Radon is released from granite.', po: 1 },
    { q: 'An isotope with a very short half-life', o: ['is very active at first but soon decays to a safe level', 'is never hazardous', 'stays dangerous for thousands of years', 'cannot be used in medicine'], x: 'Hazard depends on half-life.', po: 1 },
    { q: 'Which is a man-made source of background radiation?', o: ['fallout from nuclear weapons testing', 'rocks', 'cosmic rays', 'food'], x: 'Spec example.', po: 1 }
  ],
  exam: [
    { q: 'Evaluate the use of gamma radiation to treat cancer.', m: 4, ms: ['Benefit: gamma can kill/destroy cancer cells (control or destroy unwanted tissue).', 'Gamma can reach tumours deep inside the body.', 'Risk: it also damages healthy cells / can cause new cancers.', 'Aiming beams from several directions reduces the dose to healthy tissue; benefit judged to outweigh risk.'], po: 1 },
    { q: 'Explain why the hazard from a radioactive isotope depends on its half-life.', m: 3, ms: ['Short half-life: high activity at first, but falls quickly to a safe level.', 'Long half-life: remains radioactive / hazardous for a long time.', 'So long-half-life waste must be stored securely for a long time.'], po: 1 },
    { q: 'Give two reasons why the radiation dose received by people varies.', m: 2, ms: ['Location (e.g. radon from granite rocks / altitude).', 'Occupation (e.g. pilots, radiographers, nuclear workers).'], po: 1 }
  ],
  sims: ['tracer'], gens: ['dose1']
});

TOPICS.push({
  id: '4.5', unit: '4', ref: '4.4.4', po: true, title: 'Nuclear fission and fusion', short: 'Chain reactions and joining nuclei',
  summary: 'Splitting heavy nuclei releases energy and neutrons that can start a chain reaction; joining light nuclei powers the stars.',
  spec: [
    '(PO) Nuclear fission is the splitting of a large and unstable nucleus (e.g. uranium or plutonium)',
    '(PO) Spontaneous fission is rare; usually the nucleus must first absorb a neutron',
    '(PO) The nucleus splits into two smaller nuclei, roughly equal in size, and emits two or three neutrons plus gamma rays; energy is released and all fission products have kinetic energy',
    '(PO) The neutrons may go on to start a chain reaction; in a nuclear reactor the chain reaction is controlled; a nuclear weapon is an uncontrolled chain reaction',
    '(PO) Draw/interpret diagrams representing nuclear fission and how a chain reaction may occur',
    '(PO) Nuclear fusion is the joining of two light nuclei to form a heavier nucleus; some of the mass may be converted into the energy of radiation'
  ],
  learn: [
    { h: 'Nuclear fission', html: `
[[d:fission]]
<p><b>Nuclear fission</b> is the splitting of a large, unstable nucleus such as <b>uranium-235</b> or <b>plutonium-239</b>.</p>
<ol><li>Spontaneous fission is rare. Usually the nucleus must first <b>absorb a neutron</b>, which makes it even more unstable.</li><li>The nucleus splits into <b>two smaller nuclei</b>, roughly equal in size (the “daughter nuclei”).</li><li>It also emits <b>two or three neutrons</b> and <b>gamma rays</b>.</li><li><b>Energy is released</b>. All the fission products have <b>kinetic energy</b>.</li></ol>` },
    { h: 'Chain reactions', html: `
<p>The neutrons released can be absorbed by other uranium nuclei, causing them to split and release more neutrons — a <b>chain reaction</b>.</p>
<ul><li>In a <b>nuclear reactor</b> the chain reaction is <b>controlled</b>: control rods absorb some of the neutrons so that, on average, only one neutron from each fission goes on to cause another. The energy is released at a steady rate and used to heat water to make steam.</li><li>In a <b>nuclear weapon</b> the chain reaction is <b>uncontrolled</b>: the number of fissions grows extremely rapidly and the energy is released in an explosion.</li></ul>` },
    { h: 'Nuclear fusion', html: `
<div class="box def"><b class="lbl">Definition</b><p><b>Nuclear fusion</b> is the joining of two light nuclei to form a heavier nucleus. In this process some of the <b>mass may be converted into the energy of radiation</b>.</p></div>
<p>Fusion powers the Sun and other stars: hydrogen nuclei fuse to form helium. It needs extremely high temperatures and pressures, because the positively charged nuclei repel each other and must collide at very high speeds to get close enough to fuse.</p>
<div class="tbl"><table><tr><th></th><th>Fission</th><th>Fusion</th></tr><tr><td>What happens</td><td>a large nucleus splits</td><td>two light nuclei join</td></tr><tr><td>Fuel</td><td>uranium, plutonium</td><td>hydrogen isotopes</td></tr><tr><td>Where</td><td>nuclear power stations</td><td>stars; experimental reactors</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Describe how a chain reaction occurs in uranium-235.', s: ['A U-235 nucleus absorbs a neutron and becomes unstable.', 'It splits into two smaller nuclei, releasing energy, gamma rays and 2 or 3 neutrons.', 'These neutrons are absorbed by other U-235 nuclei, which also split and release more neutrons — and so on.'], a: 'Neutrons from each fission cause further fissions.' }
  ],
  pitfalls: ['Confusing fission (splitting) with fusion (joining).', 'Saying fission happens when a nucleus absorbs a proton — it is a neutron.', 'Saying the daughter nuclei are very different sizes — they are roughly equal.', 'Saying a reactor stops the chain reaction — it controls it.'],
  cards: [
    ['What is nuclear fission?', 'The splitting of a large, unstable nucleus.', 'po'],
    ['What usually triggers fission?', 'The nucleus absorbs a neutron.', 'po'],
    ['Products of fission?', 'Two smaller nuclei (roughly equal), 2–3 neutrons, gamma rays and energy.', 'po'],
    ['What is a chain reaction?', 'Neutrons released by fission cause further fissions.', 'po'],
    ['How is a reactor different from a nuclear bomb?', 'The chain reaction in a reactor is controlled; in a bomb it is uncontrolled.', 'po'],
    ['What is nuclear fusion?', 'Joining two light nuclei to form a heavier nucleus.', 'po'],
    ['Where does fusion happen naturally?', 'In stars, including the Sun.', 'po'],
    ['What is released in fusion?', 'Energy — some mass is converted into the energy of radiation.', 'po'],
    ['Two fissile fuels?', 'Uranium-235 and plutonium-239.', 'po'],
    ['What form of energy do fission products have?', 'Kinetic energy.', 'po']
  ],
  quiz: [
    { q: 'Nuclear fission is', o: ['the splitting of a large unstable nucleus', 'the joining of two light nuclei', 'the emission of an alpha particle', 'the absorption of a gamma ray'], x: 'Fission = splitting.', po: 1 },
    { q: 'For fission to occur, a uranium-235 nucleus usually first absorbs', o: ['a neutron', 'a proton', 'an electron', 'an alpha particle'], x: 'Neutron-induced fission.', po: 1 },
    { q: 'Fission of uranium produces', o: ['two smaller nuclei, 2 or 3 neutrons and gamma rays', 'one very small nucleus and many protons', 'helium nuclei only', 'electrons and positrons'], x: 'Spec description.', po: 1 },
    { q: 'A chain reaction happens because', o: ['neutrons from one fission cause further fissions', 'protons repel each other', 'gamma rays split nuclei', 'the daughter nuclei fuse'], x: 'Neutrons carry the reaction on.', po: 1 },
    { q: 'In a nuclear reactor, the chain reaction is', o: ['controlled', 'uncontrolled', 'stopped completely', 'caused by fusion'], x: 'A bomb is uncontrolled.', po: 1 },
    { q: 'Nuclear fusion is', o: ['the joining of two light nuclei to make a heavier one', 'the splitting of a heavy nucleus', 'radioactive decay', 'the emission of neutrons from uranium'], x: 'Fusion = joining.', po: 1 },
    { q: 'Fusion is the energy source of', o: ['the Sun', 'nuclear power stations in the UK', 'coal power stations', 'batteries'], x: 'Hydrogen → helium in stars.', po: 1 },
    { q: 'In fusion, some mass is converted into', o: ['the energy of radiation', 'neutrons only', 'extra protons', 'chemical energy'], x: 'Spec statement.', po: 1 },
    { q: 'The two nuclei produced in fission are', o: ['roughly equal in size', 'one very large, one very small', 'always helium', 'identical to the original'], x: 'Spec statement.', po: 1 },
    { q: 'Why does fusion need very high temperatures?', o: ['the positive nuclei repel, so they must collide very fast to join', 'neutrons must be slowed down', 'it produces too little energy otherwise', 'electrons must be removed from the nucleus'], x: 'Overcoming electrostatic repulsion.', po: 1 }
  ],
  exam: [
    { q: 'Describe the process of nuclear fission and explain how it can lead to a chain reaction.', m: 5, ms: ['A large unstable nucleus (e.g. U-235) absorbs a neutron.', 'It splits into two smaller nuclei of roughly equal size.', 'Two or three neutrons and gamma rays are released, with energy (products have kinetic energy).', 'The neutrons can be absorbed by other nuclei, causing further fissions.', 'This continues as a chain reaction (controlled in a reactor; uncontrolled in a bomb).'], po: 1 },
    { q: 'State two differences between nuclear fission and nuclear fusion.', m: 2, ms: ['Fission splits a heavy nucleus; fusion joins light nuclei.', 'Fission used in power stations / uses uranium; fusion happens in stars / uses hydrogen.'], po: 1 }
  ],
  sims: ['fission'], gens: []
});
