/* Units of the Pearson BTEC Level 3 National Extended Certificate in Sport (360 GLH, first teaching 2016) covered by Podium:
   mandatory Units 1, 2 and 3, and optional Unit 6. Unit 1 topics also carry `sys` (content area A–E) for the paper builder. */
const UNITS = [
  { id: '1', code: 'Unit 1', name: 'Anatomy and Physiology', short: 'Anatomy & physiology', assess: 'exam', css: 'var(--a1)',
    exam: 'Mandatory · external · 120 GLH. Written exam set and marked by Pearson: 1½ hours, 80 marks, short- and long-answer questions on the skeletal, muscular, respiratory, cardiovascular and energy systems and how they interrelate. January and May/June.' },
  { id: '2', code: 'Unit 2', name: 'Fitness Training and Programming for Health, Sport and Well-being', short: 'Fitness training & programming', assess: 'task', css: 'var(--a3)',
    exam: 'Mandatory · external · synoptic · 120 GLH. Set task set and marked by Pearson: a case study released one week before (Part A), then a 2½-hour supervised task (Part B), 60 marks — interpret lifestyle and screening data, give nutritional advice and design a justified training programme. December/January and May/June.' },
  { id: '3', code: 'Unit 3', name: 'Professional Development in the Sports Industry', short: 'Professional development', assess: 'int', css: 'var(--a4)',
    exam: 'Mandatory · internal · 60 GLH. Up to two assignments: (1) careers report, skills audit and career development action plan (learning aims A and B); (2) recruitment activity — application documents, interviews, practical activity — and reflection with SWOT (learning aims C and D).' },
  { id: '6', code: 'Unit 6', name: 'Sports Psychology', short: 'Sports psychology', assess: 'int', css: 'var(--a2)',
    exam: 'Optional · internal · 60 GLH. Up to three assignments: (A) personality, motivation, arousal, anxiety and self-confidence; (B) group dynamics, cohesion, leadership and sociograms; (C) a psychological skills training programme.' },
  { id: 'S', code: 'Skills', name: 'Exam, set-task and assignment technique', short: 'Skills', assess: 'both', css: 'var(--u9)',
    exam: 'Skills used across all four units: command words and assessment outcomes, extended answers, interpreting data, and writing assignments to Pass, Merit and Distinction.' }
];
/* Five lanes on the home track: Unit 1 is split into two lanes */
const AREAS = {
  struct: { name: 'Unit 1 · skeletal and muscular systems', short: 'Skeletal & muscular', css: 'var(--a1)' },
  cardio: { name: 'Unit 1 · respiratory, cardiovascular and energy systems', short: 'Cardio-respiratory & energy', css: 'var(--a5)' },
  fit: { name: 'Unit 2 · fitness training and programming', short: 'Fitness & programming', css: 'var(--a3)' },
  prof: { name: 'Unit 3 · professional development', short: 'Professional development', css: 'var(--a4)' },
  psych: { name: 'Unit 6 · sports psychology', short: 'Sports psychology', css: 'var(--a2)' },
  skills: { name: 'Skills', short: 'Skills', css: 'var(--u9)' }
};
const LANES = ['struct', 'cardio', 'fit', 'prof', 'psych'];
const TOPICS = [];
const unitOf = id => UNITS.find(u => u.id === id);
