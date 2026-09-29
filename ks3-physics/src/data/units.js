/* The Key Stage 3 physics course: seven Year 7 units (Magnetism is an additional topic, taught
   if time allows) and four Year 8 units, plus the working-scientifically skills used in both years. */
const UNITS = [
  { id: '1', year: 7, code: 'Unit 1', name: 'Basic forces', short: 'Forces', css: 'var(--u1)', blurb: 'What forces do, contact and non-contact forces, force arrows and the newton, balanced and unbalanced forces — and film-canister rockets.' },
  { id: '2', year: 7, code: 'Unit 2', name: 'Measuring forces', short: 'Measuring', css: 'var(--u2)', blurb: 'Working out the resultant force, measuring forces with a newton meter, and finding the force needed to pop a party popper.' },
  { id: '3', year: 7, code: 'Unit 3', name: 'Mass and weight', short: 'Weight', css: 'var(--u3)', blurb: 'The difference between mass and weight, calculating weight, and how your weight changes on other planets.' },
  { id: '4', year: 7, code: 'Unit 4', name: 'Density', short: 'Density', css: 'var(--u4)', blurb: 'What density is, calculating it, and measuring the density of regular and irregular objects, liquids and gases.' },
  { id: '5', year: 7, code: 'Unit 5', name: 'Upthrust', short: 'Upthrust', css: 'var(--u5)', blurb: 'Why things float or sink, and the link between upthrust and the weight of water pushed aside.' },
  { id: '6', year: 7, code: 'Unit 6', name: 'Energy', short: 'Energy', css: 'var(--u6)', blurb: 'Energy stores and transfers, thermal energy versus temperature, and the physics of rollercoasters.' },
  { id: '7', year: 7, extra: true, code: 'Unit 7', name: 'Magnetism', short: 'Magnetism', css: 'var(--u7)', blurb: 'Additional topic, if time allows: magnetic fields around bar magnets, making magnets, electromagnets and their uses.' },
  { id: '8', year: 8, code: 'Unit 8', name: 'Further forces', short: 'Forces 2', css: 'var(--u8)', blurb: 'Moments, friction, speed and distance–time graphs, and pressure in solids, liquids and gases.' },
  { id: '9', year: 8, code: 'Unit 9', name: 'Electricity', short: 'Electricity', css: 'var(--u9)', blurb: 'Circuit symbols and diagrams, current and potential difference, series and parallel circuits, resistance and switches.' },
  { id: '10', year: 8, code: 'Unit 10', name: 'Sound', short: 'Sound', css: 'var(--u10)', blurb: 'How sound is made and travels, the speed of sound, loudness and the decibel meter, and echoes.' },
  { id: '11', year: 8, code: 'Unit 11', name: 'Light', short: 'Light', css: 'var(--u11)', blurb: 'Light rays, luminous objects, lenses, the eye, colour and filters, and pinhole cameras.' },
  { id: 'S', code: 'Skills', name: 'Working scientifically', short: 'Skills', css: 'var(--u12)', blurb: 'Planning fair tests, taking measurements, and presenting and analysing results — used in every practical in both years.' }
];
const TOPICS = [];
const unitOf = id => UNITS.find(u => u.id === id);
const yearName = y => y === 'all' ? 'Years 7 and 8' : 'Year ' + y;
