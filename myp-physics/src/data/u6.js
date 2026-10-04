/* ==========================================================
   UNIT 6 · Radioactivity
   Strand 1: the changing atom · Strand 2: properties of nuclear decay
   ========================================================== */
TOPICS.push(lw('4.1', {
  id: '6.1', unit: '6', strand: 1, as: [1], ref: 'Strand 1 · AS 1', title: 'The changing model of the atom', short: 'Dalton to Chadwick: evidence and new technology',
  summary: 'The scientific model of matter has evolved as new technologies produced new evidence. Follow the historical narrative from Dalton’s solid spheres to Thomson’s plum pudding, Rutherford’s nucleus, Bohr’s shells and Chadwick’s neutron.',
  spec: ['Describe how the model of the atom changed: Dalton, Thomson (plum pudding), Rutherford (nuclear), Bohr (energy levels), Chadwick (neutron)', 'Describe the alpha scattering experiment and explain how its results led to the nuclear model', 'Explain how new technology (vacuum tubes, radioactive sources, detectors) made new evidence possible', 'Explain why scientific models are replaced when new evidence cannot be explained'],
  learn: [
    { h: 'A historical narrative', html: `
<div class="tbl"><table><tr><th>Date</th><th>Scientist</th><th>Model or discovery</th><th>Evidence / technology</th></tr>
<tr><td>≈ 400 BCE</td><td>Democritus</td><td>matter is made of indivisible “atomos”</td><td>philosophical reasoning — no experiments</td></tr>
<tr><td>1803</td><td>John Dalton</td><td>atoms are tiny solid spheres; each element has its own kind</td><td>chemical reactions combine in fixed mass ratios</td></tr>
<tr><td>1897</td><td>J. J. Thomson</td><td>discovered the <b>electron</b>; plum pudding model</td><td>cathode-ray tubes (vacuum pumps made them possible)</td></tr>
<tr><td>1909–11</td><td>Geiger, Marsden, Rutherford</td><td><b>nuclear</b> model: tiny, dense, positive nucleus</td><td>alpha particles from radium; zinc sulfide detector screen</td></tr>
<tr><td>1913</td><td>Niels Bohr</td><td>electrons in fixed <b>energy levels</b> (shells)</td><td>line spectra of hydrogen</td></tr>
<tr><td>1919</td><td>Rutherford</td><td>the <b>proton</b></td><td>alpha particles knocking protons out of nitrogen</td></tr>
<tr><td>1932</td><td>James Chadwick</td><td>the <b>neutron</b></td><td>radiation from beryllium bombarded with alpha particles</td></tr></table></div>
<p>The timing is not accidental: each step needed a new technology — better vacuum pumps, the discovery of radioactivity (Becquerel 1896, the Curies 1898) and new detectors. Developments in one area of science repeatedly opened the door to discoveries in another.</p>` },
    2, 3,
    { h: 'Why models change', html: `
<p>A model is kept while it explains all the evidence. The plum pudding model explained neutral atoms containing electrons, but it could not explain why some alpha particles bounced back. Rutherford did not “prove Thomson wrong” by argument — new <b>experimental evidence</b>, repeated and checked by others, forced a new model. Today’s quantum model will itself be replaced if evidence arises that it cannot explain.</p>` }],
  quiz: [4, 5, 7, 8],
  addQuiz: [
    { q: 'The electron was discovered by', o: ['J. J. Thomson', 'Rutherford', 'Chadwick', 'Dalton'], x: 'Cathode rays, 1897.' },
    { q: 'In the alpha scattering experiment, a very few alpha particles bounced back. This showed that', o: ['the positive charge and mass are concentrated in a tiny nucleus', 'atoms are mostly solid', 'electrons are spread through the atom', 'atoms are neutral'], x: 'Strong repulsion from a small dense nucleus.' },
    { q: 'Dalton’s model of the atom was', o: ['a tiny solid indivisible sphere', 'a ball of positive charge with electrons embedded', 'a nucleus with orbiting electrons', 'mostly empty space'], x: '1803.' },
    { q: 'Why was the neutron discovered so much later than the proton?', o: ['it has no charge, so it is not deflected and is hard to detect', 'it is much smaller', 'it is only found in stars', 'it decays quickly'], x: 'Neutral.' },
    { q: 'Scientific models of the atom changed mainly because', o: ['new experimental evidence could not be explained by the old model', 'scientists voted on them', 'old scientists retired', 'the atoms themselves changed'], x: 'Evidence-led.' }
  ],
  cards: [8, 9, 10, 11, 12],
  addCards: [['Dalton’s model (1803)?', 'Solid, indivisible spheres; each element different.'], ['Thomson’s discovery?', 'The electron (1897) → plum pudding model.'], ['Who led the alpha scattering experiment?', 'Geiger and Marsden, under Rutherford.'], ['Why do models change?', 'New evidence that the old model cannot explain.']],
  exam: [0, 1],
  addExam: [{ q: 'Explain how the development of new technology and discoveries in other areas of science affected the timing of changes to the model of the atom. Use two examples.', m: 4, cr: 'D', ms: ['Example 1, e.g. better vacuum pumps → cathode-ray tubes → discovery of the electron (Thomson).', 'Explanation of how this changed the model (atoms divisible → plum pudding).', 'Example 2, e.g. discovery of radioactivity → alpha sources for scattering experiment → nuclear model.', 'Explanation linking evidence to the change of model.'] }],
  worked: [1],
  eqs: [],
  pitfalls: ['Saying Rutherford’s experiment showed electrons orbit the nucleus — that was Bohr.', 'Mixing up which observations led to which conclusions in alpha scattering.', 'Saying the plum pudding model was “stupid” — it fitted the evidence available at the time.'],
  sims: ['rutherford'], gens: []
}));

TOPICS.push(lw('4.1', {
  id: '6.2', unit: '6', strand: 1, as: [1, 2, 3], ref: 'Strands 1–2 · AS 1–3', title: 'Atomic structure, nuclide notation and isotopes', short: 'Protons, neutrons, electrons; ᴬ_Z X',
  summary: 'Describe an atom in terms of protons, neutrons and electrons, represent any nucleus in nuclide notation, and recognise isotopes — atoms of the same element with different numbers of neutrons.',
  spec: ['Describe an atom: a tiny nucleus of protons and neutrons (nucleons) surrounded by electrons', 'State the relative charge and mass of protons, neutrons and electrons', 'Represent a nucleus in nuclide notation ᴬ_Z X: A = mass (nucleon) number, Z = atomic (proton) number', 'Calculate the numbers of protons, neutrons and electrons from nuclide notation', 'Recognise isotopes: same Z (same element), different A (different numbers of neutrons)', 'Describe ions and ionisation'],
  learn: [0, 1, { h: 'Nuclide notation', html: `
<p>Every nucleus can be written as ${nuc('A', 'Z', 'X')} where X is the chemical symbol.</p>
<div class="tbl"><table><tr><th>Symbol</th><th>Name</th><th>Counts</th></tr><tr><td>A</td><td>mass number (nucleon number)</td><td>protons + neutrons</td></tr><tr><td>Z</td><td>atomic number (proton number)</td><td>protons — this defines the element</td></tr><tr><td>A − Z</td><td>neutron number N</td><td>neutrons</td></tr></table></div>
<p>Example: ${nuc(235, 92, 'U')} has 92 protons, 143 neutrons and (as a neutral atom) 92 electrons. The same notation is used for particles: an alpha particle is ${nuc(4, 2, 'He')} (or ${nuc(4, 2, 'α')}), a beta particle ${nuc(0, -1, 'e')} (or ${nuc(0, -1, 'β')}), a neutron ${nuc(1, 0, 'n')}.</p>
<div class="box def"><b class="lbl">Isotopes</b><p>Atoms of the same element (same Z) with different numbers of neutrons (different A). ${nuc(12, 6, 'C')}, ${nuc(13, 6, 'C')} and ${nuc(14, 6, 'C')} are isotopes of carbon; they have identical chemistry, but carbon-14 is unstable (radioactive).</p></div>` }],
  quiz: [0, 1, 2, 3, 6, 9, 10, 11],
  addQuiz: [
    { q: 'In nuclide notation ²³Na with Z = 11, the number of neutrons is', o: ['12', '11', '23', '34'], x: '23 − 11.' },
    { q: 'Which pair are isotopes?', o: ['¹²₆C and ¹⁴₆C', '¹⁴₆C and ¹⁴₇N', '¹⁶₈O and ¹⁶₈O²⁻', '⁴₂He and ³H'], x: 'Same Z, different A.' },
    { q: 'The atomic number Z tells you the number of', o: ['protons', 'neutrons', 'nucleons', 'electron shells'], x: 'Defines the element.' },
    { q: 'Ionisation is', o: ['the removal (or addition) of electrons from an atom', 'the splitting of a nucleus', 'the emission of a neutron', 'the addition of a proton'], x: 'Forms an ion.' }
  ],
  cards: [0, 1, 2, 3, 4, 5, 6, 7, 13],
  addCards: [['Nuclide notation?', 'ᴬ_Z X: A = protons + neutrons, Z = protons.'], ['Neutron number?', 'A − Z'], ['Relative charges of p, n, e?', '+1, 0, −1'], ['Relative masses of p, n, e?', '1, 1, ≈ 1/1836'], ['Isotopes?', 'Same number of protons, different number of neutrons.'], ['Ionisation?', 'An atom gains or loses electrons, forming an ion.']],
  exam: [2],
  addExam: [{ q: 'Iodine-127 is stable and iodine-131 is radioactive. Iodine has atomic number 53. (a) Write both in nuclide notation. (b) State the number of protons and neutrons in each. (c) Explain why they are called isotopes.', m: 5, cr: 'A', ms: ['¹²⁷₅₃I and ¹³¹₅₃I', 'I-127: 53 protons, 74 neutrons', 'I-131: 53 protons, 78 neutrons', 'Same number of protons (same element) …', '… different numbers of neutrons.'] }],
  worked: [0],
  eqs: [['N = A - Z', 'neutron number']],
  pitfalls: ['Swapping A and Z — the mass number is always the larger (top) number.', 'Saying isotopes have different numbers of protons.', 'Forgetting that electrons equal protons only in a neutral atom.'],
  sims: ['atom'], gens: ['nucl1', 'nucl2']
}));

TOPICS.push(lw('4.2', {
  id: '6.3', unit: '6', strand: 2, as: [4, 5, 6], ref: 'Strand 2 · AS 4–6', title: 'Alpha, beta and gamma: ionising radiation', short: 'Ionisation, range, penetration, effects on the body',
  summary: 'Unstable nuclei emit alpha particles, beta particles or gamma rays. Compare their ionising power, range in air and penetration, and explain how ionising radiation damages living cells and causes cancer.',
  spec: ['Describe radioactive decay as the random emission of radiation by unstable nuclei', 'Describe the nature of alpha (helium nucleus), beta (fast electron) and gamma (EM wave) radiation', 'Describe ionisation and compare the ionising power of α, β and γ', 'Compare range in air (α ≈ 5 cm, β ≈ 1 m, γ very long) and penetration (paper, mm of aluminium, cm of lead)', 'Describe the effects of ionising radiation on the human body (cell damage, mutation, cancer, radiation sickness)', 'Distinguish contamination and irradiation; describe background radiation and safety precautions'],
  learn: [0, 1,
    { h: 'Ionisation and why it matters', html: `
<p>When radiation passes through matter it can knock electrons out of atoms, leaving <b>ions</b>. This is <b>ionisation</b>. Each ionisation takes energy from the radiation.</p>
<div class="tbl"><table><tr><th></th><th>alpha α</th><th>beta β</th><th>gamma γ</th></tr>
<tr><td>Nature</td><td>2 protons + 2 neutrons</td><td>fast electron from the nucleus</td><td>electromagnetic wave</td></tr>
<tr><td>Charge</td><td>+2</td><td>−1</td><td>0</td></tr>
<tr><td>Ionising power</td><td>very strong</td><td>moderate</td><td>weak</td></tr>
<tr><td>Range in air</td><td>≈ 3–5 cm</td><td>≈ 1 m</td><td>many metres (intensity ∝ 1/r²)</td></tr>
<tr><td>Stopped by</td><td>a sheet of paper / skin</td><td>a few mm of aluminium</td><td>reduced by thick lead or concrete</td></tr></table></div>
<p>The properties are linked: alpha particles ionise so strongly that they lose all their energy in a short distance — so they are the <b>least penetrating</b>. Gamma rays rarely ionise, so they travel a long way.</p>
[[d:penetration]]` },
    { h: 'How does radiation cause cancer?', html: `
<p>Ionising radiation can damage or break <b>DNA</b> molecules in cells, directly or by creating reactive ions in the water inside cells.</p>
<ul><li><b>Low doses:</b> damaged DNA may be repaired. If not, a cell may <b>mutate</b> and start to divide uncontrollably — a <b>cancer</b>, sometimes years later.</li><li><b>High doses:</b> cells are killed outright, causing <b>radiation sickness</b> (nausea, hair loss, burns) — the principle also used to destroy tumours in radiotherapy.</li></ul>
<p><b>Outside the body</b>, beta and gamma are most dangerous (alpha cannot get through skin). <b>Inside the body</b> (inhaled or swallowed), alpha is the most dangerous: all its ionisation happens in a tiny volume of tissue.</p>` },
    LW['4.3'].learn[2], LW['4.4'].learn[0]],
  quiz: [0, 1, 2, 3, 4, 5, 9, 11, 12],
  addQuiz: [
    { q: 'Alpha particles are the least penetrating because they', o: ['ionise strongly and lose their energy quickly', 'are uncharged', 'travel at the speed of light', 'are very light'], x: 'Ionising ↔ penetrating.' },
    { q: 'Ionising radiation can cause cancer by', o: ['damaging DNA so cells divide uncontrollably', 'heating the body', 'making the body radioactive permanently', 'removing protons from cells'], x: 'Mutation.' },
    { q: 'Which source is most dangerous if swallowed?', o: ['an alpha emitter', 'a gamma emitter', 'a beta emitter', 'they are equally dangerous'], x: 'Ionisation concentrated in tissue.' },
    { q: 'Gamma radiation is', o: ['a high-frequency electromagnetic wave', 'a helium nucleus', 'a fast electron', 'a neutron'], x: 'No mass, no charge.' }
  ],
  cards: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  addCards: [['Range of alpha in air?', '≈ 3–5 cm'], ['Range of beta in air?', '≈ 1 m'], ['Why is alpha least penetrating?', 'Strongly ionising — loses energy quickly.'], ['How does radiation cause cancer?', 'Damages DNA → mutations → uncontrolled cell division.'], ['Radiation sickness?', 'High dose kills many cells.']],
  exam: [0, 3],
  addExam: [{ q: 'Explain why an alpha source is relatively safe outside the body but very dangerous if it is inhaled, whereas a gamma source is dangerous in both cases.', m: 5, cr: 'A', ms: ['Alpha has a short range and is stopped by the outer layer of skin.', 'Inside the body it is next to living cells …', '… and is strongly ionising, causing concentrated damage to DNA/cells.', 'Gamma is very penetrating so it reaches internal organs from outside.', 'Inside the body most gamma passes out, but it can still ionise/damage cells — less concentrated.'] }],
  worked: false, addWorked: [{ q: 'A detector 2 cm from a source reads 500 counts/min. A sheet of paper reduces it to 300; 5 mm of aluminium to 30 (the background count). What does the source emit?', s: ['Paper stops some → alpha present.', 'Aluminium stops the rest down to background → beta present.', 'Nothing remains above background → no gamma.'], a: 'Alpha and beta' }],
  eqs: [],
  pitfalls: ['Saying gamma is “stopped” by lead — it is reduced (absorbed exponentially).', 'Mixing up ionising power and penetration (they are opposite).', 'Saying irradiated objects become radioactive.', 'Calling a beta particle an orbital electron — it comes from the nucleus.'],
  sims: ['penetrate'], gens: ['dose1']
}));

TOPICS.push(lw('4.2', {
  id: '6.4', unit: '6', strand: 2, as: [7], ref: 'Strand 2 · AS 7', title: 'Nuclear decay equations', short: 'Balancing A and Z for α, β and γ',
  summary: 'Nuclear equations use the symbols of the discipline to show exactly how a nucleus changes. Charge and nucleon number are conserved — even though mass, strictly, is not.',
  spec: ['Write and complete nuclear equations for alpha, beta (β⁻) and gamma emission', 'Alpha decay: A decreases by 4, Z decreases by 2', 'Beta decay: a neutron becomes a proton and an electron; A unchanged, Z increases by 1', 'Gamma emission: no change in A or Z — the nucleus loses energy', 'Explain that charge (Z) and nucleon number (A) are conserved in nuclear equations', 'Explain that mass is not exactly conserved: the products have slightly less mass; the difference is released as energy (E = mc²)'],
  learn: [2,
    { h: 'What is conserved?', html: `
<div class="tbl"><table><tr><th>Quantity</th><th>Conserved?</th><th>How you see it</th></tr>
<tr><td>charge</td><td>yes</td><td>bottom numbers (Z) balance on both sides</td></tr>
<tr><td>nucleon number</td><td>yes</td><td>top numbers (A) balance on both sides</td></tr>
<tr><td>energy</td><td>yes</td><td>kinetic energy of the products + gamma energy = energy released</td></tr>
<tr><td>mass</td><td><b>no</b> (not exactly)</td><td>the products are slightly lighter than the parent nucleus</td></tr></table></div>
<p>The “missing” mass Δm has been converted into energy: $E = Δmc^2$. Because c² = 9 × 10¹⁶ m²/s², a tiny loss of mass releases an enormous energy. This is why nuclear processes release millions of times more energy per kilogram than chemical reactions.</p>` },
    { h: 'Decay chains', html: `
<p>Often the daughter nucleus is also unstable and decays in turn, forming a <b>decay series</b>. Uranium-238 decays through 14 steps (8 alpha and 6 beta) to stable lead-206. Radon-222, a gas in this series, seeps out of granite rocks and is the largest source of background radiation for many people.</p>` }],
  quiz: [6, 7, 8, 10],
  addQuiz: [
    { q: '²²⁶₈₈Ra emits an alpha particle. The daughter nucleus is', o: ['²²²₈₆Rn', '²²²₈₈Rn', '²²⁶₈₇Fr', '²²⁴₈₆Rn'], x: 'A − 4, Z − 2.' },
    { q: '¹⁴₆C decays by beta emission to', o: ['¹⁴₇N', '¹⁴₅B', '¹³₆C', '¹⁰₄Be'], x: 'Z + 1, A same.' },
    { q: 'In every nuclear equation, which numbers must balance?', o: ['the mass numbers and the atomic numbers', 'only the mass numbers', 'only the masses in kg', 'the numbers of electrons'], x: 'Conservation of nucleons and charge.' },
    { q: 'In beta decay, inside the nucleus', o: ['a neutron changes into a proton and an electron', 'a proton changes into a neutron', 'an electron leaves an orbit', 'two protons are emitted'], x: 'β⁻.' },
    { q: 'Energy released in decay comes from', o: ['a small decrease in mass (E = mc²)', 'the electrons', 'the surroundings', 'nowhere — energy is created'], x: 'Mass defect.' }
  ],
  cards: [11, 12, 13],
  addCards: [['What is conserved in a nuclear equation?', 'Nucleon number (A) and charge (Z) — and energy.'], ['Is mass conserved in nuclear reactions?', 'No — a little mass becomes energy (E = mc²).'], ['Beta decay inside the nucleus?', 'n → p + e⁻'], ['Alpha particle in nuclide notation?', '⁴₂He']],
  exam: [1, 2],
  addExam: [{ q: 'Thorium-232 (Z = 90) decays by alpha emission; the daughter then decays by beta emission. (a) Write both nuclear equations. (b) Identify the final nucleus (radium Z = 88, actinium Z = 89). (c) Explain why the total mass of the products is slightly less than the mass of the thorium nucleus.', m: 6, cr: 'A', ms: ['²³²₉₀Th → ²²⁸₈₈Ra + ⁴₂He', '²²⁸₈₈Ra → ²²⁸₈₉Ac + ⁰₋₁e', 'Final nucleus: actinium-228', 'Energy is released in each decay (kinetic energy of the particles / gamma).', 'This energy comes from a decrease in mass …', '… E = Δmc² (mass not conserved; mass–energy is).'] }],
  worked: 'all',
  eqs: [['ΔA = -4, ΔZ = -2', 'alpha decay'], ['ΔA = 0, ΔZ = +1', 'beta (β⁻) decay'], ['E = Δmc^2', 'mass–energy']],
  sims: ['decayeq'], gens: ['alpha1', 'beta1', 'chain1']
}));

TOPICS.push(lw('4.3', {
  id: '6.5', unit: '6', strand: 2, as: [8, 9], ref: 'Strand 2 · AS 8–9', title: 'Half-life and radiocarbon dating', short: 'Random decay, decay graphs, dating the past',
  summary: 'Radioactive decay is random, yet a large sample decays in a perfectly predictable way. Determine half-life from decay graphs and use carbon-14 to date objects up to about 50 000 years old.',
  spec: ['Describe radioactive decay as random and spontaneous', 'Define half-life: the time for the number of unstable nuclei (or the activity/count-rate) to halve', 'Determine the half-life from a decay graph, subtracting background count', 'Calculate the activity or fraction remaining after a whole number of half-lives', 'Explain radiocarbon dating and its limitations', 'Describe other uses of half-life in dating (e.g. uranium–lead for rocks)'],
  learn: [0, 1,
    { h: 'Reading half-life from a graph', html: `
[[d:halflife]]
<ol><li>Subtract the <b>background count</b> from every reading (this is a systematic error otherwise).</li><li>Plot corrected count-rate (y) against time (x) and draw a smooth curve of best fit.</li><li>Read off the time for the count-rate to fall from any value to half of it (e.g. 800 → 400). Repeat from 400 → 200 and average.</li></ol>
<p>The curve never quite reaches zero: after n half-lives a fraction (½)ⁿ remains.</p>` },
    { h: 'Radiocarbon dating', html: `
<p>Cosmic rays turn some nitrogen in the upper atmosphere into radioactive <b>carbon-14</b> (half-life <b>5730 years</b>). Living things take in carbon all the time, so they contain the same tiny proportion of C-14 as the atmosphere. When an organism <b>dies</b>, it stops taking in carbon and its C-14 decays.</p>
<p>Comparing the C-14 activity per gram of a sample with that of living material tells us how many half-lives have passed. Wood with ¼ of the living activity died about 2 × 5730 = 11 500 years ago.</p>
<div class="box warn"><b class="lbl">Limitations</b><p>Only works for once-living material; after about 50 000 years (≈ 9 half-lives) too little C-14 remains to measure; atmospheric C-14 has varied (and nuclear tests in the 1950s added more), so results are calibrated using tree rings. Rocks are dated with longer half-lives, e.g. uranium-238 → lead-206 (4.5 billion years).</p></div>` }],
  quiz: [0, 1, 2, 6, 8, 9, 10],
  addQuiz: [
    { q: 'Carbon-14 has a half-life of 5730 years. A bone has ⅛ of the C-14 activity of living bone. Its age is about', o: ['17 000 years', '5700 years', '11 500 years', '46 000 years'], x: '3 half-lives.' },
    { q: 'Radiocarbon dating cannot be used for', o: ['a 2-million-year-old rock', 'a 3000-year-old wooden boat', 'a 10 000-year-old bone', 'ancient cloth'], x: 'Not organic / too old.' },
    { q: 'Before finding half-life from count-rate data you should', o: ['subtract the background count', 'add the background count', 'ignore the first reading', 'double every reading'], x: 'Corrected count-rate.' }
  ],
  cards: [0, 1, 2, 10],
  addCards: [['Half-life of C-14?', '5730 years'], ['Why does C-14 dating work?', 'Living things keep a constant C-14 ratio; after death it decays.'], ['Limits of C-14 dating?', 'Once-living material only; up to ≈ 50 000 years; needs calibration.'], ['How to read half-life from a graph?', 'Time for the corrected count-rate to halve — repeat and average.']],
  exam: [1, 2, 3],
  addExam: [{ q: 'A sample of charcoal from an ancient fire has a C-14 activity of 3.2 counts per minute per gram. Living wood gives 12.8 counts per minute per gram. The half-life of C-14 is 5730 years. (a) Calculate the age of the charcoal. (b) Give two reasons why the age has a large uncertainty.', m: 5, cr: 'C', ms: ['12.8 → 6.4 → 3.2: two half-lives', 'Age = 2 × 5730 = 11 460 years (≈ 11 500 years)', 'Decay is random — low count-rates have large fractional uncertainty.', 'Background radiation must be subtracted / is comparable to the signal.', 'Atmospheric C-14 levels varied in the past (calibration needed).'] }],
  worked: 'all',
  eqs: [['N = N_0 (@frac{1}{2})^n', 'after n half-lives']],
  sims: ['decay'], gens: ['hl1', 'hl2', 'hl3', 'hl4', 'carbon1']
}));

TOPICS.push(lw('4.4', {
  id: '6.6', unit: '6', strand: 2, as: [9], ref: 'Strand 2 · AS 9', title: 'Uses of radioisotopes and nuclear power', short: 'Medicine, industry, fission, fusion, E = mc²',
  summary: 'Choosing the right isotope — by its radiation type and half-life — makes radioactivity useful in medicine and industry. Changing the structure of the nucleus in fission and fusion releases enormous energy, bringing both new technologies and new challenges.',
  spec: ['Explain how the type of radiation and half-life make an isotope suitable for a use', 'Describe medical uses: tracers (e.g. technetium-99m), radiotherapy, sterilising equipment', 'Describe industrial uses: thickness gauges, leak detection, smoke alarms, food irradiation', 'Describe nuclear fission and chain reactions; how a nuclear reactor is controlled', 'Describe nuclear fusion and why it needs very high temperatures and pressures', 'Evaluate nuclear power as a sustainable energy source'],
  learn: [
    { h: 'Choosing the right isotope', html: `
<div class="tbl"><table><tr><th>Use</th><th>Isotope (typical)</th><th>Why this radiation and half-life?</th></tr>
<tr><td>Medical tracer</td><td>technetium-99m (γ, 6 h)</td><td>gamma escapes the body to reach a detector; short half-life so the dose is small, but long enough to complete the scan</td></tr>
<tr><td>Radiotherapy</td><td>cobalt-60 (γ, 5 yr) or linear accelerator X-rays</td><td>penetrating beams from several directions meet at the tumour; long half-life so the source lasts</td></tr>
<tr><td>Sterilising instruments / food irradiation</td><td>cobalt-60 (γ)</td><td>gamma passes through packaging and kills bacteria; the object does not become radioactive</td></tr>
<tr><td>Paper/foil thickness gauge</td><td>strontium-90 (β, 29 yr)</td><td>beta is partly absorbed by paper — the count changes with thickness; long half-life so readings stay steady</td></tr>
<tr><td>Smoke alarm</td><td>americium-241 (α, 432 yr)</td><td>alpha ionises the air, allowing a current; smoke absorbs alpha and stops it; long half-life</td></tr>
<tr><td>Leak detection in pipes</td><td>γ or β emitter, short half-life</td><td>detected through the ground; decays away quickly</td></tr></table></div>` },
    1, 2,
    LW['4.5'].learn[0], LW['4.5'].learn[1], LW['4.5'].learn[2],
    { h: 'Is nuclear power the answer?', html: `
<div class="tbl"><table><tr><th>For</th><th>Against</th></tr>
<tr><td>very low CO₂ emissions while operating</td><td>radioactive waste stays hazardous for thousands of years; no permanent store exists in most countries</td></tr>
<tr><td>reliable “baseload” power whatever the weather</td><td>rare but severe accidents (Chernobyl 1986, Fukushima 2011) contaminate large areas</td></tr>
<tr><td>tiny fuel mass: 1 kg of U-235 ≈ 3 million kg of coal</td><td>very high construction and decommissioning costs; long build times</td></tr>
<tr><td>small land area compared with solar or wind farms</td><td>uranium mining impacts; risk of nuclear weapons proliferation</td></tr></table></div>
<p>Fusion would use abundant fuel (hydrogen isotopes from seawater) and produce little long-lived waste, but no reactor has yet produced sustained net energy. Whether nuclear power is “the answer” depends on the weight you give to climate, safety, cost and fairness between generations.</p>` }],
  quiz: [3, 4, 5, 8],
  addQuiz: [
    { q: 'Technetium-99m is used as a tracer because it', o: ['emits gamma and has a short half-life', 'emits alpha and has a long half-life', 'emits beta and is very heavy', 'is not radioactive'], x: 'Escapes the body; low dose.' },
    { q: 'A smoke alarm uses an alpha source because', o: ['alpha ionises air strongly and is easily absorbed by smoke', 'alpha penetrates walls', 'alpha has a short half-life', 'alpha is not dangerous inside the body'], x: 'Ionisation current.' },
    { q: 'In a nuclear reactor, the control rods', o: ['absorb neutrons to control the chain reaction', 'slow down neutrons', 'produce steam', 'absorb gamma rays'], x: 'Boron/cadmium.' },
    { q: 'Nuclear fusion requires very high temperatures because', o: ['positive nuclei repel and must collide at high speed', 'neutrons must be absorbed', 'it needs a chain reaction', 'it only works with uranium'], x: 'Overcome electrostatic repulsion.' },
    { q: 'The energy released in fission and fusion comes from', o: ['a decrease in mass (E = mc²)', 'chemical bonds', 'electrons changing shells', 'the surroundings'], x: 'Mass defect.' }
  ],
  cards: [4, 5, 6, 7],
  addCards: [['Isotope for a medical tracer?', 'Gamma emitter with a short half-life (e.g. Tc-99m, 6 h).'], ['Radiation for a paper thickness gauge?', 'Beta.'], ['Why does food irradiation not make food radioactive?', 'Irradiation is not contamination — no radioactive material is added.'], ['Nuclear fission?', 'A large nucleus (U-235) absorbs a neutron and splits into two smaller nuclei + 2–3 neutrons + energy.'], ['Nuclear fusion?', 'Light nuclei join to form a heavier nucleus, releasing energy.'], ['Control rods?', 'Absorb neutrons to control the rate of fission.'], ['Moderator?', 'Slows neutrons so they cause more fission.']],
  exam: [0, 1],
  addExam: [
    { q: 'A paper mill uses a radioactive source and detector to control paper thickness. Explain which type of radiation should be used and why the source should have a long half-life.', m: 4, cr: 'A', ms: ['Beta.', 'Alpha would be completely stopped by paper; gamma would pass through almost unchanged.', 'Beta is partly absorbed, so the count changes noticeably with thickness.', 'Long half-life so the count-rate does not fall noticeably over time (no need to recalibrate/replace).'] },
    { q: '“Nuclear power is the answer to our sustainable energy needs.” Evaluate this statement.', m: 8, cr: 'D', ms: ['Explains fission/energy release with correct physics.', 'Advantage: low carbon emissions — helps tackle climate change.', 'Advantage: reliable baseload / high energy density / small land use.', 'Disadvantage: long-lived radioactive waste — storage problem for future generations.', 'Disadvantage: accident risk and public perception (examples).', 'Disadvantage: cost and build time compared with renewables + storage.', 'Considers different perspectives (governments, local communities, future generations) or fusion as a future option.', 'Reasoned, balanced conclusion.'] }
  ],
  worked: [0],
  eqs: [['E = Δmc^2', 'energy released from a mass decrease']],
  sims: ['tracer', 'fission'], gens: ['emc2', 'dose1']
}));
