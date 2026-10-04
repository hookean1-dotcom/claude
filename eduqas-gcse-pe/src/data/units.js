/* Sections of the WJEC Eduqas GCSE (9–1) Physical Education specification (C550QS, teaching from 2016).
   Component 1 (written exam) covers the five key areas; Component 2 is the non-exam assessment. */
const UNITS = [
  { id: '1', code: 'Key area 1', name: 'Health, training and exercise', short: 'Health & training', assess: 'exam', css: 'var(--a1)',
    exam: 'Component 1 · written exam · 2 hours · 120 marks · 60%. Short and extended answers based on stimuli/sources. Any key area can appear.' },
  { id: '2', code: 'Key area 2', name: 'Exercise physiology', short: 'Physiology', assess: 'exam', css: 'var(--a2)',
    exam: 'Component 1 · written exam. Bones, joints, muscles, heart, lungs, aerobic and anaerobic exercise, and the effects of exercise.' },
  { id: '3', code: 'Key area 3', name: 'Movement analysis', short: 'Movement', assess: 'exam', css: 'var(--a3)',
    exam: 'Component 1 · written exam. Muscle contractions, levers, planes and axes, and sports technology.' },
  { id: '4', code: 'Key area 4', name: 'Psychology of sport and physical activity', short: 'Psychology', assess: 'exam', css: 'var(--a4)',
    exam: 'Component 1 · written exam. Goal setting, information processing, guidance, mental preparation, motivation, skill and practice.' },
  { id: '5', code: 'Key area 5', name: 'Socio-cultural issues in physical activity and sport', short: 'Socio-cultural', assess: 'exam', css: 'var(--a5)',
    exam: 'Component 1 · written exam. Participation, provision, commercialisation and the media, and ethics.' },
  { id: 'P', code: 'Component 2', name: 'The active participant in physical education', short: 'NEA', assess: 'nea', css: 'var(--u6)',
    exam: 'Component 2 · non-exam assessment · 80 marks · 40%. Practical performance in three activities (each /20; at least one team and one individual) and a performance analysis and evaluation (/20). Marked by your teacher and moderated.' },
  { id: 'S', code: 'Skills', name: 'Exam technique and data skills', short: 'Skills', assess: 'both', css: 'var(--u9)',
    exam: 'Skills used across both components: command words, the assessment objectives, planning extended answers, and collecting, presenting and analysing data.' }
];
/* Each key area is a lane on the home track */
const AREAS = {
  health: { name: 'Health, training and exercise', short: 'Health & training', css: 'var(--a1)' },
  phys: { name: 'Exercise physiology', short: 'Physiology', css: 'var(--a2)' },
  move: { name: 'Movement analysis', short: 'Movement', css: 'var(--a3)' },
  psych: { name: 'Psychology of sport and physical activity', short: 'Psychology', css: 'var(--a4)' },
  soc: { name: 'Socio-cultural issues', short: 'Socio-cultural', css: 'var(--a5)' },
  nea: { name: 'Non-exam assessment', short: 'NEA', css: 'var(--u6)' },
  skills: { name: 'Skills', short: 'Skills', css: 'var(--u9)' }
};
const LANES = ['health', 'phys', 'move', 'psych', 'soc'];
const TOPICS = [];
const unitOf = id => UNITS.find(u => u.id === id);
