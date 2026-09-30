/* ==========================================================
   Pearson BTEC Level 3 National Certificate in Applied Law
   180 GLH · equivalent in size to half an A level
   Unit 1 (external, synoptic): 90 GLH · supervised task, 1½ hours, 60 marks, case released a week before
   Unit 2 (internal): 90 GLH · two assignments, Pass / Merit / Distinction criteria
   ========================================================== */
const UNITS = [
  { id: '1', code: 'Unit 1', name: 'Dispute solving in civil law', short: 'Unit 1 · Civil', css: 'var(--u1)', kind: 'ext',
    exam: 'Externally set and marked by Pearson. You receive information about a real case one week before a supervised session of up to 1½ hours, completed on a computer. 60 marks. Available in January and May/June. Graded Distinction, Merit, Pass, Near Pass or U. This is the synoptic unit.' },
  { id: '2', code: 'Unit 2', name: 'Criminal law and the legal system', short: 'Unit 2 · Criminal', css: 'var(--u2)', kind: 'int',
    exam: 'Internally assessed through two assignments set by your centre: learning aims A and B (law making) and learning aims C and D (legal personnel, non-fatal offences and sentencing). Graded Pass, Merit or Distinction against Pearson’s criteria.' },
  { id: 'S', code: 'Skills', name: 'Legal skills and assessment', short: 'Skills', css: 'var(--us)',
    exam: 'Legal research, referencing and professional communication, plus how both units are assessed and graded.' }
];
const unitOf = id => UNITS.find(u => u.id === id);
const unitInScope = () => true;
