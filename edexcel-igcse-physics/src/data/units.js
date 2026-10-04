/* Topics of the Pearson Edexcel International GCSE in Physics (4PH1), Issue 4.
   Each topic is one orbit on the Parallax home page. Statements with a ‘P’ reference (bold in the
   specification) are Physics only: examined on Paper 2 and not part of Science (Double Award). */
const PAPERS = 'Paper 1 (2 h · 110 marks · 61.1%) examines the statements without a ‘P’ reference; Paper 2 (1 h 15 min · 70 marks · 38.9%) examines all the content, including the ‘P’ statements.';
const UNITS = [
  { id: '1', code: 'Topic 1', name: 'Forces and motion', short: 'Forces', css: 'var(--u1)', exam: PAPERS },
  { id: '2', code: 'Topic 2', name: 'Electricity', short: 'Electricity', css: 'var(--u2)', exam: PAPERS },
  { id: '3', code: 'Topic 3', name: 'Waves', short: 'Waves', css: 'var(--u3)', exam: PAPERS },
  { id: '4', code: 'Topic 4', name: 'Energy resources and energy transfers', short: 'Energy', css: 'var(--u4)', exam: PAPERS },
  { id: '5', code: 'Topic 5', name: 'Solids, liquids and gases', short: 'Matter', css: 'var(--u5)', exam: PAPERS },
  { id: '6', code: 'Topic 6', name: 'Magnetism and electromagnetism', short: 'Magnetism', css: 'var(--u6)', exam: PAPERS },
  { id: '7', code: 'Topic 7', name: 'Radioactivity and particles', short: 'Radioactivity', css: 'var(--u7)', exam: PAPERS },
  { id: '8', code: 'Topic 8', name: 'Astrophysics', short: 'Astrophysics', css: 'var(--u8)', exam: PAPERS },
  { id: 'S', code: 'Skills', name: 'Practical and maths skills', short: 'Skills', css: 'var(--u9)', exam: 'Experimental skills (AO3, about 20% of the marks) and mathematical skills are assessed through questions on both papers. There is no coursework.' }
];
const TOPICS = [];
const unitOf = id => UNITS.find(u => u.id === id);
/* nuclide notation: mass number over atomic number, e.g. nuc(235, 92, 'U') */
const nuc = (A, Z, s) => `<span class="nuc"><b>${A}</b><b>${String(Z).replace('-', '−')}</b></span>${s}`;
