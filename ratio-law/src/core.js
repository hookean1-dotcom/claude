/* ==========================================================
   Ratio · core utilities: DOM, rich text, storage, XP, sound, fx
   ========================================================== */
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.floor(Math.random() * a.length)];
const h = (tag, attrs = {}, html = '') => { const e = document.createElement(tag); for (const k in attrs) { if (k === 'class') e.className = attrs[k]; else if (k.startsWith('on')) e.addEventListener(k.slice(2), attrs[k]); else e.setAttribute(k, attrs[k]); } if (html) e.innerHTML = html; return e; };

/* ---------- Content registries (filled by data files) ---------- */
const CASES = {};      // id -> { n: name, y: year, a: area, t: topic id, f: facts, p: principle, c: court }
const STATUTES = [];   // { n, a, s: [[section, text]] }
const GLOSSARY = [];   // [term, meaning, area]
const TOPICS = [];
const TOOLS = {};      // id -> tool definition
const addCases = list => list.forEach(c => { CASES[c.id] = c; });

/* ---------- Rich text ----------
   [[c:id]]  -> clickable case citation (opens a popover with facts + principle)
   [[c:id|label]] -> same, with custom label */
function caseChip(id, label) {
  const c = CASES[id];
  if (!c) return `<i class="cn">${esc(label || id)}</i>`;
  return `<button type="button" class="case" data-case="${id}">${esc(label || c.n)}${label ? '' : ` <span class="yr">(${c.y})</span>`}</button>`;
}
function rich(html) {
  if (html == null) return '';
  return String(html).replace(/\[\[c:([\w-]+)(?:\|([^\]]+))?\]\]/g, (_, id, lab) => caseChip(id, lab));
}
/* plain text version for search / games */
const plain = s => String(s || '').replace(/\[\[c:([\w-]+)(?:\|([^\]]+))?\]\]/g, (_, id, lab) => lab || (CASES[id] ? CASES[id].n : id)).replace(/<[^>]+>/g, '');

/* ---------- Storage ---------- */
const STORE_KEY = 'ratio.eduqas.law.v1';
const S = (() => {
  let d = {};
  try { d = JSON.parse(localStorage.getItem(STORE_KEY) || '{}') || {}; } catch (e) { d = {}; }
  d.xp ??= 0; d.topics ??= {}; d.badges ??= []; d.settings ??= { sound: true }; d.settings.areas ??= ['CT', 'TO', 'CR', 'HR'];
  d.streak ??= { last: '', n: 0 }; d.days ??= {}; d.games ??= {}; d.daily ??= {}; d.fav ??= [];
  d.stats ??= { quizzes: 0, perfect: 0, cardsSeen: 0, tools: [], mocks: 0, examMarks: 0, applied: 0 };
  return d;
})();
function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { } }
function T(id) { return S.topics[id] ??= { quiz: 0, cards: {}, spec: {}, exam: 0, seen: 0, apply: 0 }; }
const pad2 = n => String(n).padStart(2, '0');
const dstr = d => d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
const today = () => dstr(new Date());
function touchStreak() {
  const t = today(); if (S.streak.last === t) return;
  const ys = dstr(new Date(Date.now() - 864e5));
  S.streak.n = S.streak.last === ys ? S.streak.n + 1 : 1; S.streak.last = t; save();
}
function addXP(n, why) {
  S.xp += n; touchStreak(); S.days[today()] = (S.days[today()] || 0) + n; save();
  window.App && App.refreshChrome();
  if (why) toast(`<b>+${n}</b> ${esc(why)}`);
  checkBadges();
}
const LEVELS = [0, 100, 250, 500, 850, 1300, 1900, 2600, 3500, 4600, 6000, 7700, 9700, 12000, 15000];
const LEVEL_NAMES = ['Law student', 'Paralegal', 'Trainee solicitor', 'Pupil barrister', 'Solicitor', 'Junior barrister', 'Recorder', 'District judge', 'Circuit judge', 'King’s Counsel', 'High Court judge', 'Lord Justice of Appeal', 'Justice of the Supreme Court', 'Deputy President', 'President of the Supreme Court'];
function level() { let l = 0; while (l < LEVELS.length - 1 && S.xp >= LEVELS[l + 1]) l++; const next = LEVELS[l + 1] ?? LEVELS[l] * 1.3; return { l: l + 1, name: LEVEL_NAMES[l], frac: (S.xp - LEVELS[l]) / (next - LEVELS[l]), next }; }

/* ---------- Sound ---------- */
let AC = null;
function tone(freqs, dur = .12, type = 'sine', vol = .06) {
  if (!S.settings.sound) return;
  try {
    AC ??= new (window.AudioContext || window.webkitAudioContext)();
    const t0 = AC.currentTime;
    freqs.forEach((f, i) => {
      const o = AC.createOscillator(), g = AC.createGain();
      o.type = type; o.frequency.value = f; o.connect(g); g.connect(AC.destination);
      const s = t0 + i * dur * .8;
      g.gain.setValueAtTime(0, s); g.gain.linearRampToValueAtTime(vol, s + .01); g.gain.exponentialRampToValueAtTime(.0001, s + dur);
      o.start(s); o.stop(s + dur + .02);
    });
  } catch (e) { }
}
const sfx = {
  good: () => tone([660, 880], .11, 'triangle'),
  bad: () => tone([220, 180], .14, 'sawtooth', .03),
  flip: () => tone([520], .05, 'sine', .03),
  win: () => tone([523, 659, 784, 1047], .13, 'triangle'),
  gavel: () => tone([140, 110], .09, 'square', .04)
};

/* ---------- Toasts ---------- */
function toast(html, ms = 2200) {
  let box = $('.toasts'); if (!box) { box = h('div', { class: 'toasts' }); document.body.append(box); }
  const t = h('div', { class: 'toast', role: 'status' }, html); box.append(t);
  setTimeout(() => { t.style.transition = 'opacity .3s'; t.style.opacity = 0; setTimeout(() => t.remove(), 300); }, ms);
}

/* ---------- Celebration: gilt and green paper ---------- */
const BURST_COLS = [[217, 180, 90], [108, 203, 156], [229, 122, 138], [122, 174, 240], [245, 241, 228]];
function burst(x = innerWidth / 2, y = innerHeight / 2, n = 90) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const c = h('canvas', { class: 'fx' }); document.body.append(c);
  const dpr = devicePixelRatio || 1; c.width = innerWidth * dpr; c.height = innerHeight * dpr;
  const x2 = c.getContext('2d'); x2.scale(dpr, dpr);
  const P = Array.from({ length: n }, () => { const a = Math.random() * Math.PI * 2, s = 3 + Math.random() * 7; return { x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 2, col: pick(BURST_COLS), life: 1, r: Math.random() * 6 }; });
  let f = 0;
  (function step() {
    x2.clearRect(0, 0, innerWidth, innerHeight);
    P.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += .15; p.vx *= .985; p.life -= .012; p.r += .2; x2.save(); x2.translate(p.x, p.y); x2.rotate(p.r); x2.fillStyle = `rgba(${p.col[0]},${p.col[1]},${p.col[2]},${Math.max(0, p.life)})`; x2.fillRect(-4, -2, 8, 4); x2.restore(); });
    if (++f < 90) requestAnimationFrame(step); else c.remove();
  })();
}
function cssVar(name, el = document.documentElement) { return getComputedStyle(el).getPropertyValue(name).trim(); }
function hexA(hex, a) {
  hex = (hex || '#888').trim();
  if (hex.startsWith('rgb')) return hex.replace(/rgba?\(([^)]+)\)/, (_, v) => `rgba(${v.split(',').slice(0, 3).join(',')},${a})`);
  let n = hex.replace('#', ''); if (n.length === 3) n = n.split('').map(c => c + c).join('');
  const v = parseInt(n, 16); return `rgba(${v >> 16 & 255},${v >> 8 & 255},${v & 255},${a})`;
}

/* ---------- Icons ---------- */
const ICON = {
  home: '<svg viewBox="0 0 24 24"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/></svg>',
  map: '<svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h10"/></svg>',
  book: '<svg viewBox="0 0 24 24"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h11"/></svg>',
  pillar: '<svg viewBox="0 0 24 24"><path d="M3 9l9-5 9 5z"/><path d="M5 9v9M9.5 9v9M14.5 9v9M19 9v9M3 20h18"/></svg>',
  scales: '<svg viewBox="0 0 24 24"><path d="M12 4v16M7 20h10M5 7h14"/><path d="M5 7l-3 6a3 3 0 0 0 6 0zM19 7l-3 6a3 3 0 0 0 6 0z"/></svg>',
  flask: '<svg viewBox="0 0 24 24"><path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h8M8 17h4"/></svg>',
  game: '<svg viewBox="0 0 24 24"><rect x="2.5" y="7" width="19" height="11" rx="4"/><path d="M7 11v3M5.5 12.5h3"/><circle cx="16" cy="11.5" r=".6"/><circle cx="18" cy="13.5" r=".6"/></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M10 2h4"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M4 20V4M4 20h16"/><path d="M7 15l4-5 3 3 5-7"/></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
  sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/></svg>',
  sound: '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>',
  mute: '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M17 9l5 5M22 9l-5 5"/></svg>',
  menu: '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  back: '<svg viewBox="0 0 24 24"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg>',
  chev: '<svg class="chev" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',
  reset: '<svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg>',
  help: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6M12 17h.01"/></svg>',
  gavel: '<svg viewBox="0 0 24 24"><path d="M14 4l6 6M11 7l6 6M12.5 5.5l-4 4 6 6 4-4zM9.5 11.5L3 18l3 3 6.5-6.5M13 21h8"/></svg>'
};
