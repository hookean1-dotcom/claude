/* Units of the WJEC GCE AS/A level Physics specification (Wales).
   Each unit is represented by a real emission line; topic colours are taken from the spectrum. */
const UNITS = [
  { id: '1', code: 'Unit 1', name: 'Motion, Energy and Matter', level: 'AS', nm: 656.3, line: 'H-α 656.3 nm', css: 'var(--u1)', exam: 'Written exam · 1 h 30 min · 80 marks · 20% of A level (50% of AS)' },
  { id: '2', code: 'Unit 2', name: 'Electricity and Light', level: 'AS', nm: 589.0, line: 'Na D 589.0 nm', css: 'var(--u2)', exam: 'Written exam · 1 h 30 min · 80 marks · 20% of A level (50% of AS)' },
  { id: '3', code: 'Unit 3', name: 'Oscillations and Nuclei', level: 'A2', nm: 546.1, line: 'Hg 546.1 nm', css: 'var(--u3)', exam: 'Written exam · 2 h 15 min · 100 marks · 25% of A level · Section A 80 marks; Section B one 20-mark comprehension question' },
  { id: '4', code: 'Unit 4', name: 'Fields and Options', level: 'A2', nm: 486.1, line: 'H-β 486.1 nm', css: 'var(--u4)', exam: 'Written exam · 2 h · 100 marks · 25% of A level · Section A 80 marks (core); Section B 20 marks — one option from four' },
  { id: 'O', code: 'Options', name: 'Unit 4 Section B options', level: 'A2', nm: 435.8, line: 'Hg 435.8 nm', css: 'var(--u5)', exam: 'Answer ONE option in Unit 4 Section B (A, B, C or D)' },
  { id: 'S', code: 'Skills', name: 'Maths, data & practical skills', level: 'AS + A2', nm: 404.7, line: 'Hg 404.7 nm', css: 'var(--u6)', exam: 'Assessed in every written paper and in the Unit 5 practical examination (10% of A level): Experimental Task (25 marks) and Practical Analysis Task (25 marks)' }
];
const TOPICS = [];
const unitOf = id => UNITS.find(u => u.id === id);
