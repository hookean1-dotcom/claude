/* ==========================================================
   WJEC Level 3 Applied Diploma in Criminology — course structure
   Four mandatory units of 90 guided learning hours each.
   Units 1 and 3: internal controlled assessment (100 raw marks).
   Units 2 and 4: external exam, 1 h 30, 75 marks, three scenario-based questions.
   The Applied Certificate is Units 1 and 2 only.
   ========================================================== */
const UNITS = [
  { id: '1', code: 'Unit 1 · internal', name: 'Changing awareness of crime', short: 'Unit 1', css: 'var(--u1)', kind: 'int',
    exam: 'Controlled assessment set by your centre from a WJEC assignment brief. 100 marks, marked by your teacher and moderated by WJEC. You plan a campaign for change relating to crime.' },
  { id: '2', code: 'Unit 2 · exam', name: 'Criminological theories', short: 'Unit 2', css: 'var(--u2)', kind: 'ext',
    exam: 'External exam: 1 hour 30 minutes, 75 marks, short and extended answers built around three scenarios. You apply your learning from Unit 1. The paper can be taken on screen or on paper.' },
  { id: '3', code: 'Unit 3 · internal', name: 'Crime scene to courtroom', short: 'Unit 3', css: 'var(--u3)', kind: 'int',
    exam: 'Controlled assessment set by your centre from a WJEC assignment brief. 100 marks, moderated by WJEC. You review a criminal case from investigation to verdict and judge whether the verdict was safe and just.' },
  { id: '4', code: 'Unit 4 · exam', name: 'Crime and punishment', short: 'Unit 4', css: 'var(--u4)', kind: 'ext',
    exam: 'External exam: 1 hour 30 minutes, 75 marks, short and extended answers on applied scenarios. It is synoptic, so you must draw on Units 1, 2 and 3.' },
  { id: 'S', code: 'Skills', name: 'Assessment skills', short: 'Skills', css: 'var(--us)',
    exam: 'How to succeed in the exams and the controlled assessments: command words, mark bands, using evidence and synoptic links.' }
];
const unitOf = id => UNITS.find(u => u.id === id);
const QUALS = { dip: ['Applied Diploma', 'All four units (360 guided learning hours)'], cert: ['Applied Certificate', 'Units 1 and 2 only (180 guided learning hours)'] };
const unitInScope = uid => S.settings.qual !== 'cert' || !['3', '4'].includes(uid);
