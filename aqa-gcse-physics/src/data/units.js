/* Sections of the AQA GCSE Physics (8463) subject content.
   Each section is one branch of the Live Wire circuit on the home page. */
const UNITS = [
  { id: '1', code: '4.1', name: 'Energy', paper: 1, css: 'var(--u1)', exam: 'Examined on Paper 1 (1 h 45 min · 100 marks · 50% of the GCSE). Foundation and Higher tier.' },
  { id: '2', code: '4.2', name: 'Electricity', paper: 1, css: 'var(--u2)', exam: 'Examined on Paper 1 (1 h 45 min · 100 marks · 50% of the GCSE). Foundation and Higher tier.' },
  { id: '3', code: '4.3', name: 'Particle model of matter', paper: 1, css: 'var(--u3)', exam: 'Examined on Paper 1 (1 h 45 min · 100 marks · 50% of the GCSE). Foundation and Higher tier.' },
  { id: '4', code: '4.4', name: 'Atomic structure', paper: 1, css: 'var(--u4)', exam: 'Examined on Paper 1 (1 h 45 min · 100 marks · 50% of the GCSE). Foundation and Higher tier.' },
  { id: '5', code: '4.5', name: 'Forces', paper: 2, css: 'var(--u5)', exam: 'Examined on Paper 2 (1 h 45 min · 100 marks · 50% of the GCSE). Paper 2 questions may also draw on energy changes and transfers, and energy conservation, from Energy and Electricity.' },
  { id: '6', code: '4.6', name: 'Waves', paper: 2, css: 'var(--u6)', exam: 'Examined on Paper 2 (1 h 45 min · 100 marks · 50% of the GCSE). Paper 2 questions may also draw on energy changes and transfers, and energy conservation, from Energy and Electricity.' },
  { id: '7', code: '4.7', name: 'Magnetism and electromagnetism', paper: 2, css: 'var(--u7)', exam: 'Examined on Paper 2 (1 h 45 min · 100 marks · 50% of the GCSE). Paper 2 questions may also draw on energy changes and transfers, and energy conservation, from Energy and Electricity.' },
  { id: '8', code: '4.8', name: 'Space physics', paper: 2, po: true, css: 'var(--u8)', exam: 'Physics (separate science) only. Examined on Paper 2 (1 h 45 min · 100 marks · 50% of the GCSE).' },
  { id: 'S', code: 'Skills', name: 'Working scientifically & maths', paper: 0, css: 'var(--u9)', exam: 'Assessed on both papers. At least 15% of the marks are set on the required practical activities, and at least 30% test mathematical skills.' }
];
const TOPICS = [];
const unitOf = id => UNITS.find(u => u.id === id);
