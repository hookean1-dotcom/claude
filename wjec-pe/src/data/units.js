/* Units of the WJEC GCE AS/A level Physical Education specification (teaching from 2016, version 2 March 2019).
   AS = Units 1 and 2; A level = all four units. Topics are also tagged with one of the four areas of study. */
const UNITS = [
  { id: '1', code: 'Unit 1', name: 'Exploring physical education', short: 'AS theory', assess: 'exam', level: 'AS', css: 'var(--u1)',
    exam: 'AS · written examination · 1¾ hours · 72 marks · 24% of the A level (60% of the AS). Contextualised questions including multiple choice, data response, short and extended answers. Assesses all AS content.' },
  { id: '2', code: 'Unit 2', name: 'Improving personal performance in physical education', short: 'AS NEA', assess: 'nea', level: 'AS', css: 'var(--u2)',
    exam: 'AS · non-exam assessment · 48 marks · 16% of the A level (40% of the AS). Practical performance as a player/performer (24), as a coach or official (12), and a Personal Performance Profile (12). Marked by your teacher, moderated by a visiting WJEC moderator.' },
  { id: '3', code: 'Unit 3', name: 'Evaluating physical education', short: 'A2 theory', assess: 'exam', level: 'A2', css: 'var(--u3)',
    exam: 'A2 · written examination · 2 hours · 90 marks · 36% of the A level. Data response, short and extended answers. Assesses all A level content, so AS topics can appear too.' },
  { id: '4', code: 'Unit 4', name: 'Refining personal performance in physical education', short: 'A2 NEA', assess: 'nea', level: 'A2', css: 'var(--u4)',
    exam: 'A2 · non-exam assessment · 60 marks · 24% of the A level. Practical performance as a player/performer, coach or official (30) and an Investigative Research assignment (30). Marked by your teacher, moderated by WJEC.' },
  { id: 'S', code: 'Skills', name: 'Exam technique and quantitative skills', short: 'Skills', assess: 'both', level: 'AS', css: 'var(--u9)',
    exam: 'Skills used in every unit: command words and the assessment objectives, planning extended answers, and the quantitative skills in Appendix C (data, graphs, equations and units).' }
];
/* The four areas of study run through both exam units */
const AREAS = {
  phys: { name: 'Exercise physiology, performance analysis and training', short: 'Physiology & training', css: 'var(--a1)' },
  bio: { name: 'Biomechanics', short: 'Biomechanics', css: 'var(--a5)' },
  psych: { name: 'Sport psychology', short: 'Psychology', css: 'var(--a2)' },
  skill: { name: 'Skill acquisition', short: 'Skill acquisition', css: 'var(--a3)' },
  soc: { name: 'Sport and society', short: 'Sport & society', css: 'var(--a4)' },
  nea: { name: 'Non-exam assessment', short: 'NEA', css: 'var(--u2)' },
  skills: { name: 'Skills', short: 'Skills', css: 'var(--u9)' }
};
const TOPICS = [];
const unitOf = id => UNITS.find(u => u.id === id);
