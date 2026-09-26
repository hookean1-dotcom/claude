/* ==========================================================
   Core utilities: DOM, maths typesetting, storage, sound, fx
   ========================================================== */
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const lerp = (a, b, t) => a + (b - a) * t;
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.floor(Math.random() * a.length)];
const h = (tag, attrs = {}, html = '') => { const e = document.createElement(tag); for (const k in attrs) { if (k === 'class') e.className = attrs[k]; else if (k.startsWith('on')) e.addEventListener(k.slice(2), attrs[k]); else e.setAttribute(k, attrs[k]); } if (html) e.innerHTML = html; return e; };

/* ---------- Maths typesetting ----------
   Inside $...$ :  x^2  x^{-1}  v_0  E_{k max}  @frac{a}{b}  @sqrt{x}  @bar{x}  @, (thin space)  "roman text"
   Single Latin/Greek letters are set in italic (as in printed physics); function names upright. */
const MFN = new Set(['sin', 'cos', 'tan', 'ln', 'log', 'exp', 'max', 'min', 'rms', 'd', 'dt', 'dx']);
function mx(s, roman) {
  let i = 0, out = '';
  const group = () => {
    if (s[i] === '{') { let d = 1, j = i + 1; while (j < s.length && d) { if (s[j] === '{') d++; else if (s[j] === '}') d--; j++; } const inner = s.slice(i + 1, j - 1); i = j; return inner; }
    const m = s.slice(i).match(/^(-?\d+(\.\d+)?|@[a-z]+|.)/); i += m[0].length; return m[0];
  };
  while (i < s.length) {
    const c = s[i];
    if (s.startsWith('@frac', i)) { i += 5; const a = group(), b = group(); out += `<span class="fr"><span class="nu">${mx(a, roman)}</span><span class="de">${mx(b, roman)}</span></span>`; continue; }
    if (s.startsWith('@sqrt', i)) { i += 5; const a = group(); out += `<span class="sq"><svg class="rs" viewBox="0 0 10 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0.6,62 L3.2,55 L5.6,97 L10,0.8"/></svg><span class="vh">√</span><span class="ra">${mx(a, roman)}</span></span>`; continue; }
    if (s.startsWith('@bar', i)) { i += 4; const a = group(); out += `<span class="ov">${mx(a, roman)}</span>`; continue; }
    if (s.startsWith('@,', i)) { out += '&thinsp;'; i += 2; continue; }
    const tag = s.slice(i).match(/^<\/?(sup|sub|b|i)>/); if (tag) { out += tag[0]; i += tag[0].length; continue; }
    if (c === '^') { i++; out += `<sup>${mx(group(), roman)}</sup>`; continue; }
    if (c === '_') { i++; out += `<sub>${mx(group(), true)}</sub>`; continue; }
    if (c === '"') { const j = s.indexOf('"', i + 1); out += `<span class="rm">${esc(s.slice(i + 1, j))}</span>`; i = j + 1; continue; }
    if (/[A-Za-z]/.test(c)) {
      const w = s.slice(i).match(/^[A-Za-z]+/)[0];
      if (roman) { out += `<span class="rm">${w}</span>`; i += w.length; continue; }
      if (MFN.has(w) && w.length > 1) { out += `<span class="rm">${w}</span>`; i += w.length; continue; }
      out += `<i>${c}</i>`; i++; continue;
    }
    if (/[α-ωϕ]/.test(c) && !roman) { out += `<i>${c}</i>`; i++; continue; }
    if (c === '-') { out += '−'; i++; continue; }
    if (c === '<') { out += '&lt;'; i++; continue; }
    if (c === '>') { out += '&gt;'; i++; continue; }
    if (c === '&') { out += '&amp;'; i++; continue; }
    out += c; i++;
  }
  return out;
}
const M = s => `<span class="m">${mx(s)}</span>`;
/* rich(): typeset $maths$ and expand [[d:diagram]] placeholders inside content HTML */
/* sqrtify(): turn plain-text roots such as √(m/k), √2 or 1/√r into drawn radicals (outside $maths$) */
function sqrtify(t) {
  if (!t || String(t).indexOf('√') < 0) return t;
  t = String(t); let out = '', i = 0;
  while (i < t.length) {
    const j = t.indexOf('√', i); if (j < 0) { out += t.slice(i); break; }
    out += t.slice(i, j); let k = j + 1, inner = null;
    if (t[k] === '(') { let d = 1, e = k + 1; while (e < t.length && d) { if (t[e] === '(') d++; else if (t[e] === ')') d--; e++; } if (!d) { inner = t.slice(k + 1, e - 1); k = e; } }
    else { const m = t.slice(k).match(/^[A-Za-z0-9α-ω]+(\.[0-9]+)?/); if (m) { inner = m[0]; k += m[0].length; } }
    if (inner == null) { out += '√'; i = j + 1; continue; }
    out += `<span class="m">${mx('@sqrt{' + inner.replace(/<(\/?)(sub|sup)>/g, '\u0001$1$2\u0002').replace(/[{}]/g, '') .replace(/\u0001(\/?)(sub|sup)\u0002/g, '<$1$2>') + '}')}</span>`; i = k;
  }
  return out;
}
function rich(html) {
  if (html == null) return '';
  return String(html)
    .replace(/\[\[d:([\w-]+)\]\]/g, (_, k) => (window.DIAG && DIAG[k]) ? `<figure class="fig">${DIAG[k]()}</figure>` : '')
    .split(/(\$[^$]+\$)/).map(seg => seg.startsWith('$') && seg.endsWith('$') && seg.length > 1 ? M(seg.slice(1, -1)) : sqrtify(seg)).join('');
}

/* ---------- Numbers ---------- */
function sf(x, n = 3) {
  if (!isFinite(x)) return String(x);
  if (x === 0) return '0';
  let e = Math.floor(Math.log10(Math.abs(x)));
  if (e >= 5 || e <= -4) {
    let ms = (x / 10 ** e).toPrecision(n);
    if (Math.abs(+ms) >= 10) { e++; ms = (x / 10 ** e).toPrecision(n); }
    return `${ms} × 10<sup>${e}</sup>`.replace(/-/g, '−');
  }
  const s = e >= n - 1 ? String(Math.round(+x.toPrecision(n))) : x.toPrecision(n);
  return s.replace('-', '−');
}
const sfp = (x, n = 3) => sf(x, n).replace(/<\/?sup>/g, m => m === '<sup>' ? '^' : ''); // plain-ish
const rnd = (a, b, step = 1) => { const n = Math.round((b - a) / step); return +(a + step * Math.floor(Math.random() * (n + 1))).toFixed(10); };
function parseNum(str) {
  if (str == null) return NaN;
  let s = String(str).trim().replace(/\s+/g, '').replace(/−/g, '-').replace(/,/g, '');
  s = s.replace(/[x×*]10\^?\(?(-?\d+)\)?/i, 'e$1').replace(/\^/g, '');
  const n = Number(s);
  return n;
}

/* ---------- Physical constants (WJEC data booklet values) ---------- */
const K = {
  g: 9.81, G: 6.67e-11, e: 1.60e-19, me: 9.11e-31, mp: 1.673e-27, c: 3.00e8, h: 6.63e-34,
  NA: 6.02e23, R: 8.31, k: 1.38e-23, sigma: 5.67e-8, W: 2.90e-3, e0: 8.85e-12, mu0: 4 * Math.PI * 1e-7,
  u: 1.66e-27, uMeV: 931, AU: 1.50e11, ly: 9.46e15, pc: 3.09e16, Msun: 1.99e30, Rsun: 6.96e8, Me: 5.97e24, Re: 6.37e6
};

/* ---------- Wavelength → colour ---------- */
function nmRGB(nm) {
  let r = 0, g = 0, b = 0;
  if (nm >= 380 && nm < 440) { r = -(nm - 440) / 60; b = 1; }
  else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
  else if (nm < 510) { g = 1; b = -(nm - 510) / 20; }
  else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
  else if (nm < 645) { r = 1; g = -(nm - 645) / 65; }
  else if (nm <= 780) { r = 1; }
  let f = 1;
  if (nm < 420) f = .3 + .7 * (nm - 380) / 40; else if (nm > 700) f = .3 + .7 * (780 - nm) / 80;
  const G = v => Math.round(255 * Math.pow(Math.max(0, v * f), .8));
  return [G(r), G(g), G(b)];
}
const nmCSS = (nm, a = 1) => { const [r, g, b] = nmRGB(nm); return `rgba(${r},${g},${b},${a})`; };

/* ---------- Storage ---------- */
const STORE_KEY = 'spectra.wjec.v1';
const S = (() => {
  let d = {};
  try { d = JSON.parse(localStorage.getItem(STORE_KEY) || '{}') || {}; } catch (e) { d = {}; }
  d.xp ??= 0; d.topics ??= {}; d.badges ??= []; d.settings ??= { sound: true }; d.streak ??= { last: '', n: 0 }; d.days ??= {}; d.games ??= {}; d.log ??= [];
  return d;
})();
function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { } }
function T(id) { return S.topics[id] ??= { quiz: 0, qa: 0, cards: {}, spec: {}, calc: 0, calcN: 0, exam: 0, seen: 0, sim: 0 }; }
function today() { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function touchStreak() {
  const t = today();
  if (S.streak.last === t) return;
  const y = new Date(Date.now() - 864e5); const ys = y.getFullYear() + '-' + String(y.getMonth() + 1).padStart(2, '0') + '-' + String(y.getDate()).padStart(2, '0');
  S.streak.n = S.streak.last === ys ? S.streak.n + 1 : 1; S.streak.last = t; save();
}
function addXP(n, why) {
  S.xp += n; touchStreak(); S.days[today()] = (S.days[today()] || 0) + n; save();
  window.App && App.refreshChrome();
  if (why) toast(`<b>+${n}</b> ${esc(why)}`);
  checkBadges();
}
const LEVELS = [0, 100, 250, 500, 850, 1300, 1900, 2600, 3500, 4600, 6000, 7700, 9700, 12000, 15000];
const LEVEL_NAMES = ['Photon', 'Electron', 'Muon-curious', 'Proton', 'Neutron', 'Deuteron', 'Alpha', 'Nucleus', 'Atom', 'Molecule', 'Crystal', 'Planet', 'Star', 'Galaxy', 'Supercluster'];
function level() { let l = 0; while (l < LEVELS.length - 1 && S.xp >= LEVELS[l + 1]) l++; const next = LEVELS[l + 1] ?? LEVELS[l] * 1.3; return { l: l + 1, name: LEVEL_NAMES[l], frac: (S.xp - LEVELS[l]) / (next - LEVELS[l]), next }; }

/* ---------- Sound (WebAudio blips, only after interaction) ---------- */
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
  tick: () => tone([1200], .03, 'square', .015)
};

/* ---------- Toasts ---------- */
function toast(html, ms = 2200) {
  let box = $('.toasts'); if (!box) { box = h('div', { class: 'toasts' }); document.body.append(box); }
  const t = h('div', { class: 'toast', role: 'status' }, html); box.append(t);
  setTimeout(() => { t.style.transition = 'opacity .3s'; t.style.opacity = 0; setTimeout(() => t.remove(), 300); }, ms);
}

/* ---------- Photon burst (celebration) ---------- */
function burst(x = innerWidth / 2, y = innerHeight / 2, n = 90) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const c = h('canvas', { class: 'fx' }); document.body.append(c);
  const dpr = devicePixelRatio || 1; c.width = innerWidth * dpr; c.height = innerHeight * dpr;
  const x2 = c.getContext('2d'); x2.scale(dpr, dpr);
  const P = Array.from({ length: n }, () => { const a = Math.random() * Math.PI * 2, s = 3 + Math.random() * 7; return { x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 2, nm: 400 + Math.random() * 300, life: 1 }; });
  let f = 0;
  (function step() {
    x2.clearRect(0, 0, innerWidth, innerHeight);
    P.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += .15; p.vx *= .985; p.life -= .012; x2.strokeStyle = nmCSS(p.nm, Math.max(0, p.life)); x2.lineWidth = 2; x2.beginPath(); x2.moveTo(p.x, p.y); x2.lineTo(p.x - p.vx * 3, p.y - p.vy * 3); x2.stroke(); });
    if (++f < 90) requestAnimationFrame(step); else c.remove();
  })();
}

/* ---------- CSS var reader (for canvas drawing in theme) ---------- */
function cssVar(name, el = document.documentElement) { return getComputedStyle(el).getPropertyValue(name).trim(); }
function themeColors() {
  const r = document.documentElement;
  return { bg: cssVar('--canvas-bg', r), grid: cssVar('--canvas-grid', r), ink: cssVar('--canvas-ink', r), muted: cssVar('--muted', r), accent: cssVar('--accent', r), good: cssVar('--good', r), bad: cssVar('--bad', r), info: cssVar('--info', r), line: cssVar('--line-2', r), surface: cssVar('--surface', r), u1: cssVar('--u1', r), u2: cssVar('--u2', r), u3: cssVar('--u3', r), u4: cssVar('--u4', r), u5: cssVar('--u5', r) };
}

/* ---------- Icons ---------- */
const ICON = {
  home: '<svg viewBox="0 0 24 24"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/></svg>',
  map: '<svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h10"/></svg>',
  eq: '<svg viewBox="0 0 24 24"><path d="M5 9h14M5 15h14"/><path d="M9 4l-2 16M17 4l-2 16" opacity=".35"/></svg>',
  flask: '<svg viewBox="0 0 24 24"><path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3"/><path d="M7 15h10"/></svg>',
  game: '<svg viewBox="0 0 24 24"><rect x="2.5" y="7" width="19" height="11" rx="4"/><path d="M7 11v3M5.5 12.5h3"/><circle cx="16" cy="11.5" r=".6"/><circle cx="18" cy="13.5" r=".6"/></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M10 2h4"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M4 20V4M4 20h16"/><path d="M7 15l4-5 3 3 5-7"/></svg>',
  ruler: '<svg viewBox="0 0 24 24"><path d="M3 17L17 3l4 4L7 21z"/><path d="M7 13l2 2M10 10l2 2M13 7l2 2"/></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
  sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/></svg>',
  sound: '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>',
  mute: '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M17 9l5 5M22 9l-5 5"/></svg>',
  menu: '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z"/></svg>',
  pause: '<svg viewBox="0 0 24 24"><path d="M7 4v16M17 4v16"/></svg>',
  reset: '<svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  back: '<svg viewBox="0 0 24 24"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg>',
  chev: '<svg class="chev" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',
  shuffle: '<svg viewBox="0 0 24 24"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>',
  atom: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="1.6"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg>'
};
