/* Units of the WJEC Level 3 Alternative Academic Qualification in Food Science and Nutrition (Extended Certificate), 4523QX.
   Units 1–3 are mandatory; learners take Unit 4 OR Unit 5. Each unit is one ring of the Proof plate on the home page. */
const UNITS = [
  { id: '1', code: 'Unit 1', name: 'Nutritional needs across the life stages', short: 'Nutrition', assess: 'exam', css: 'var(--u1)', glh: 90,
    exam: 'Mandatory · external written exam · 1 hour 30 minutes · 80 marks · 25% of the qualification. Section A short answers, Section B extended answers, Section C a case study. All questions are compulsory. Graded A–E. First assessed 2027.' },
  { id: '2', code: 'Unit 2', name: 'Developing practical food production skills', short: 'Practical skills', assess: 'nea', css: 'var(--u2)', glh: 90,
    exam: 'Mandatory · non-examination assessment · 9 hours 30 minutes · 100 marks · 25% of the qualification. WJEC sets an annual assignment brief (a scenario and several tasks). Marked by your centre and moderated by WJEC.' },
  { id: '3', code: 'Unit 3', name: 'Principles of food hygiene and food safety in food production', short: 'Food safety', assess: 'exam', css: 'var(--u3)', glh: 90,
    exam: 'Mandatory · external written exam · 1 hour 30 minutes · 80 marks · 25% of the qualification. Section A short answers, Section B extended answers, Section C a case study. All questions are compulsory. Graded A–E. First assessed 2028.' },
  { id: '4', code: 'Unit 4', name: 'Experimenting to solve food production problems', short: 'Experimenting', assess: 'nea', opt: true, css: 'var(--u4)', glh: 90,
    exam: 'Optional (take Unit 4 or Unit 5) · non-examination assessment · 12 hours · 100 marks · 25% of the qualification. WJEC sets an annual assignment brief. Marked by your centre and moderated by WJEC.' },
  { id: '5', code: 'Unit 5', name: 'Current issues in food science and nutrition', short: 'Current issues', assess: 'nea', opt: true, css: 'var(--u5)', glh: 90,
    exam: 'Optional (take Unit 4 or Unit 5) · non-examination assessment · 12 hours · 100 marks · 25% of the qualification. WJEC sets an annual assignment brief. Marked by your centre and moderated by WJEC.' },
  { id: 'S', code: 'Skills', name: 'Exam technique and food maths', short: 'Skills', assess: 'both', css: 'var(--u9)', glh: 0,
    exam: 'Skills used across every unit: command words, the assessment objectives, extended and case-study answers, and the calculations you meet in nutrition, food safety and investigations.' }
];
const TOPICS = [];
const unitOf = id => UNITS.find(u => u.id === id);
