/* ==========================================================
   Eduqas GCE A level Law (A150QS) — structure of the course
   Component 1 (25%): Nature of law and the English legal system — compulsory
   Components 2 and 3 (37.5% each): three of Contract, Tort, Criminal, Human rights
   (either two public + one private, or one public + two private)
   ========================================================== */
const UNITS = [
  { id: '1A', code: 'Component 1 · Section A', name: 'Law making', short: 'Law making', css: 'var(--u1a)', comp: 1,
    exam: 'Compulsory. Component 1 is a 1 hour 30 minute written exam worth 50 marks (25% of the A level). Section A: two short-answer questions and one scenario-based question on law making.' },
  { id: '1B', code: 'Component 1 · Section B', name: 'The English legal system', short: 'Legal system', css: 'var(--u1b)', comp: 1,
    exam: 'Compulsory. Section B of Component 1: one question from a choice of two essay-type questions, each with part (a) and part (b), on the civil and criminal justice systems, legal personnel and funding.' },
  { id: 'N', code: 'Component 1 · Nature of law', name: 'Law, society, morality and justice', short: 'Nature of law', css: 'var(--un)', comp: 1,
    exam: 'Compulsory themes that run through Component 1 and are rewarded wherever they are relevant: the nature of law, law and society, law and morality, and law and justice.' },
  { id: 'CT', code: 'Section A · Private law', name: 'Law of contract', short: 'Contract', css: 'var(--uct)', kind: 'private',
    exam: 'Optional area (private law). Tested in Component 2 (a scenario-based question, applying the law: AO1 + AO2) and Component 3 (an essay question, analysing and evaluating: AO1 + AO3).' },
  { id: 'TO', code: 'Section B · Private law', name: 'Law of tort', short: 'Tort', css: 'var(--uto)', kind: 'private',
    exam: 'Optional area (private law). Tested in Component 2 (a scenario-based question, applying the law: AO1 + AO2) and Component 3 (an essay question, analysing and evaluating: AO1 + AO3).' },
  { id: 'CR', code: 'Section C · Public law', name: 'Criminal law', short: 'Criminal', css: 'var(--ucr)', kind: 'public',
    exam: 'Optional area (public law). Tested in Component 2 (a scenario-based question, applying the law: AO1 + AO2) and Component 3 (an essay question, analysing and evaluating: AO1 + AO3).' },
  { id: 'HR', code: 'Section D · Public law', name: 'Human rights law', short: 'Human rights', css: 'var(--uhr)', kind: 'public',
    exam: 'Optional area (public law). Tested in Component 2 (a scenario-based question, applying the law: AO1 + AO2) and Component 3 (an essay question, analysing and evaluating: AO1 + AO3).' },
  { id: 'S', code: 'Legal skills', name: 'Exam technique and legal method', short: 'Skills', css: 'var(--us)',
    exam: 'Legal skills are “pervasive throughout” every component: identifying issues in a scenario, using authority, applying the law, and building a persuasive, evaluative argument.' }
];
const unitOf = id => UNITS.find(u => u.id === id);
const AREA_NAMES = { CT: 'Contract', TO: 'Tort', CR: 'Criminal', HR: 'Human rights' };
/* the four valid routes through Components 2 and 3 */
const ROUTES = [
  ['CT', 'TO', 'CR'], ['CT', 'TO', 'HR'], ['CT', 'CR', 'HR'], ['TO', 'CR', 'HR']
];
const unitInScope = uid => !AREA_NAMES[uid] || S.settings.areas.includes(uid);
