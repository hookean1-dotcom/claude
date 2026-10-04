/* ==========================================================
   MYP Physics · application shell, router and views (Grade 10, concept-based units)
   ========================================================== */
const TOPIC = Object.fromEntries(TOPICS.map(t => [t.id, t]));
/* scope helpers kept from the shared engine: MYP has no tiers, so everything is in scope */
const specFlag = () => '';
const specTxt = sp => sp;
const tagHTML = () => '';
const flagOf = () => '';
const vis = () => true;
const V_ = t => ({ quiz: t.quiz, cards: t.cards, exam: t.exam, worked: t.worked, gens: t.gens, spec: t.spec.map((sp, i) => [sp, i]) });
const allTopics = () => TOPICS;
const coreTopics = () => TOPICS.filter(t => t.unit !== 'S');
const unitTopics = uid => TOPICS.filter(t => t.unit === uid);
const fmtAns = x => Number.isInteger(x) ? String(x) : sf(x, 3);
const ucol = uid => unitOf(uid)?.css || 'var(--accent)';
const crTag = c => `<span class="tag cr sm" title="MYP criterion ${c}">Criterion ${c}</span>`;
S.stats ??= { quizzes: 0, perfect: 0, calcOK: 0, cardsSeen: 0, sims: [], mocks: 0, examMarks: 0 };
S.daily ??= {};
S.crit ??= {};
S.iq ??= [];

function mastery(t) {
  const s = T(t.id), q = (s.quiz || 0) / 100, v = V_(t);
  const ck = t.cards.length ? Object.entries(s.cards).filter(([, b]) => b >= 3).length / Math.max(1, v.cards.length) : 0;
  const sp = v.spec.reduce((a, [, i]) => a + (s.spec[i] ? (s.spec[i] - 1) / 2 : 0), 0) / Math.max(1, v.spec.length);
  const calc = v.gens.length ? Math.min(s.calc || 0, 5) / 5 : q;
  return clamp(0.4 * q + 0.2 * ck + 0.2 * sp + 0.2 * calc, 0, 1);
}
const pct = x => Math.round(x * 100) + '%';
const unitMastery = uid => { const ts = unitTopics(uid); return ts.length ? ts.reduce((a, t) => a + mastery(t), 0) / ts.length : 0; };

/* ---------- Badges ---------- */
const BADGES = [
  ['first', 'Switched on', 'Finish your first quiz', () => S.stats.quizzes >= 1, 'I'],
  ['perfect', 'Full circuit', 'Score 100% on a quiz', () => S.stats.perfect >= 1, '✓'],
  ['streak3', 'Steady current', 'Study 3 days in a row', () => S.streak.n >= 3, '3'],
  ['streak7', 'Terminal velocity', 'Study 7 days in a row', () => S.streak.n >= 7, '7'],
  ['calc10', 'Number cruncher', '10 correct calculations', () => S.stats.calcOK >= 10, 'Σ'],
  ['calc50', 'Data processor', '50 correct calculations', () => S.stats.calcOK >= 50, '='],
  ['cards50', 'Memory store', 'Review 50 flashcards', () => S.stats.cardsSeen >= 50, '≡'],
  ['sims5', 'Experimenter', 'Try 5 simulations', () => S.stats.sims.length >= 5, 'λ'],
  ['sims20', 'Lab technician', 'Try 20 simulations', () => S.stats.sims.length >= 20, 'Φ'],
  ['labs', 'Inquirer', 'Open all 13 labs and tasks', () => (S.rp || []).length >= PRACTICALS.length, 'B'],
  ['iq', 'Inquiring mind', 'Explore 20 inquiry questions', () => (S.iq || []).length >= 20, '?'],
  ['mock', 'Under test conditions', 'Complete a unit test', () => S.stats.mocks >= 1, '⏱'],
  ['exam', 'Examiner’s eye', 'Self-mark 25 marks of written questions', () => S.stats.examMarks >= 25, 'M'],
  ['u12', 'Validity and motion', '70% mastery across Units 1–2', () => ['1', '2'].every(u => unitMastery(u) >= .7), '12'],
  ['u345', 'Energy, waves and circuits', '70% mastery across Units 3–5', () => ['3', '4', '5'].every(u => unitMastery(u) >= .7), '3–5'],
  ['lvl10', 'Wave–particle duality', 'Reach level 10', () => level().l >= 10, '★']
];
function checkBadges() { BADGES.forEach(([id, name, , test]) => { if (!S.badges.includes(id) && test()) { S.badges.push(id); save(); setTimeout(() => { toast(`<b>Badge</b> ${esc(name)}`, 3200); sfx.win(); }, 400); } }); }

const App = (() => {
  let cleanup = null, lastTopic = null;
  const V = () => $('#view');
  const go = h => { location.hash = h; };

  /* ---------- chrome ---------- */
  function chrome() {
    const nav = [['home', 'Home', '#/home'], ['map', 'All topics', '#/topics'], ['eq', 'Equations', '#/equations'], ['flask', 'Labs & tasks', '#/practicals'], ['ruler', 'Criteria & grades', '#/criteria'], ['clock', 'Unit tests', '#/mock'], ['game', 'Arcade', '#/arcade'], ['chart', 'Progress', '#/progress']];
    $('#side').innerHTML = `<a class="brand" href="#/home" aria-label="MYP Physics home"><span class="brand-mark lw">${ICON.atom}</span><span><span class="brand-name">MYP</span><br><span class="brand-sub">Physics · Grade 10</span></span></a>
      <nav class="nav" aria-label="Main">${nav.map(([ic, l, h]) => `<a href="${h}" data-nav="${h}">${ICON[ic]}<span>${l}</span></a>`).join('')}
      <div class="nav-label">Units</div>${UNITS.filter(u => u.id !== 'S').map(uLink).join('')}
      <div class="nav-label">Every unit</div>${UNITS.filter(u => u.id === 'S').map(uLink).join('')}
      <div class="nav-label">More</div><a href="#/about" data-nav="#/about">${ICON.star}<span>About &amp; help</span></a></nav>
      <div class="side-foot">Concept-based MYP Physics for Grade 10 (MYP year 5). Progress is saved in this browser.</div>`;
    $('#tabbar').innerHTML = [['home', 'Home', '#/home'], ['map', 'Topics', '#/topics'], ['flask', 'Labs', '#/practicals'], ['ruler', 'Criteria', '#/criteria'], ['chart', 'Progress', '#/progress']].map(([ic, l, h]) => `<a href="${h}" data-nav="${h}">${ICON[ic]}<span>${l}</span></a>`).join('');
    $('#search-btn').innerHTML = `${ICON.search}<span>Search topics, equations…</span><kbd>/</kbd>`;
    $('#menu-btn').innerHTML = ICON.menu;
    $('#menu-btn').onclick = () => toggleSide(true);
    $('#search-btn').onclick = openPalette;
    $('#theme-btn').onclick = toggleTheme;
    $('#tier-chip').onclick = () => go('#/criteria');
    $('#sound-btn').onclick = () => { S.settings.sound = !S.settings.sound; save(); refreshChrome(); if (S.settings.sound) sfx.good(); };
    refreshChrome();
  }
  const uLink = u => `<a class="unit-a" href="#/unit/${u.id}" data-nav="#/unit/${u.id}" style="--uc:${u.css}"><span class="unit-line" style="color:${u.css}"></span><span style="min-width:0"><span>${u.code}</span><small>${esc(u.name)}</small></span><span class="meter" data-um="${u.id}"></span></a>`;
  function toggleSide(open) { const s = $('#side'); s.classList.toggle('open', open); let scrim = $('.scrim'); if (open && !scrim) { scrim = h('div', { class: 'scrim', onclick: () => toggleSide(false) }); document.body.append(scrim); } if (!open && scrim) scrim.remove(); }
  function isDark() { const t = document.documentElement.dataset.theme; return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches; }
  function toggleTheme() { const next = isDark() ? 'light' : 'dark'; document.documentElement.dataset.theme = next; S.settings.theme = next; save(); refreshChrome(); refreshSimTheme(); if (location.hash.startsWith('#/home') || !location.hash) route(); }
  function refreshChrome() {
    const L = level();
    $('#xp-chip').innerHTML = `<span style="color:var(--accent-ink)">${ICON.star.replace('<svg', '<svg width="14" height="14" style="stroke:currentColor;fill:none;stroke-width:2"')}</span>Lv ${L.l} · ${S.xp} XP`;
    $('#streak-chip').innerHTML = `<span aria-hidden="true" style="color:var(--u1)">●</span> ${S.streak.n || 0}-day streak`;
    $('#theme-btn').innerHTML = isDark() ? ICON.sun : ICON.moon; $('#theme-btn').title = isDark() ? 'Light theme' : 'Dark theme';
    $('#sound-btn').innerHTML = S.settings.sound ? ICON.sound : ICON.mute; $('#sound-btn').title = S.settings.sound ? 'Sound on' : 'Sound off';
    const est = critEstimate(); $('#tier-chip').innerHTML = 'Grade 10'; $('#tier-chip').title = est.n === 4 ? `Estimated MYP grade ${est.grade} — criteria and grades` : 'Criteria and grades';
    $$('[data-um]').forEach(e => e.textContent = pct(unitMastery(e.dataset.um)));
    const hsh = location.hash || '#/home'; $$('[data-nav]').forEach(a => a.classList.toggle('on', hsh === a.dataset.nav || (a.dataset.nav !== '#/home' && hsh.startsWith(a.dataset.nav + '/')) || (a.dataset.nav.startsWith('#/unit/') && hsh.startsWith('#/t/') && TOPIC[hsh.split('/')[2]]?.unit === a.dataset.nav.split('/')[2])));
  }
  /* best-fit estimate from the unit self-assessments: per criterion, the mean of the most recent two units assessed */
  function critEstimate() {
    const per = {}; let n = 0;
    ['A', 'B', 'C', 'D'].forEach(c => { const vals = UNITS.filter(u => u.id !== 'S').map(u => S.crit[u.id]?.[c]).filter(v => v != null && v !== ''); per[c] = vals.length ? Math.round(vals.slice(-2).reduce((a, b) => a + +b, 0) / Math.min(2, vals.length)) : null; if (vals.length) n++; });
    const total = ['A', 'B', 'C', 'D'].reduce((a, c) => a + (per[c] || 0), 0);
    return { per, n, total, grade: n === 4 ? mypGrade(total) : '–' };
  }
  const crumbs = html => { $('#crumbs').innerHTML = html; };

  /* ---------- router ---------- */
  function route() {
    if (cleanup) { try { cleanup(); } catch (e) { } cleanup = null; }
    toggleSide(false);
    const parts = (location.hash || '#/home').replace(/^#\/?/, '').split('/');
    const v = V(); v.classList.remove('enter'); void v.offsetWidth; v.classList.add('enter');
    const [a, b, c] = parts;
    try {
      if (!a || a === 'home') home();
      else if (a === 'topics') topics();
      else if (a === 'unit' && unitOf(b)) unit(b);
      else if (a === 't' && TOPIC[b]) topic(b, c || 'learn');
      else if (a === 'equations') equations();
      else if (a === 'practicals') practicals();
      else if (a === 'criteria') criteria();
      else if (a === 'arcade') arcade();
      else if (a === 'game' && GAMES[b]) { crumbs(`<a href="#/arcade" style="color:inherit">Arcade</a> / <b>${GAMES[b].title}</b>`); V().innerHTML = '<div id="g"></div>'; cleanup = mountGame($('#g'), b); }
      else if (a === 'mock' && b === 'written' && c) writtenTest(c);
      else if (a === 'mock') mock();
      else if (a === 'daily') daily();
      else if (a === 'progress') progress();
      else if (a === 'about') about();
      else home();
    } catch (err) { console.error(err); V().innerHTML = `<div class="empty">Something went wrong loading this page. <a href="#/home">Go home</a></div>`; }
    refreshChrome();
    if (!(a === 't' && b === lastTopic)) scrollTo({ top: 0 });
    lastTopic = a === 't' ? b : null;
  }

  /* ---------- HOME ---------- */
  function home() {
    crumbs('<b>Home</b>');
    const L = level(), CORE = coreTopics(), mastered = CORE.filter(t => mastery(t) >= .7).length;
    const last = TOPIC[S.last];
    const rec = CORE.map(t => ({ t, m: mastery(t), seen: T(t.id).seen || 0 })).sort((x, y) => (x.m - y.m) || (y.seen - x.seen)).slice(0, 3);
    const eqd = EQ_RECALL[Math.floor(Date.now() / 864e5) % EQ_RECALL.length];
    const dDone = S.daily[today()];
    const allIQ = UNITS.flatMap(u => u.strands.flatMap(s => s.iq.map(q => ({ u, q })))), iqd = allIQ[Math.floor(Date.now() / 864e5) % allIQ.length];
    V().innerHTML = `
    <section class="hero" aria-label="Your progress circuit">
      <div class="hero-grid">
        <div><div class="eyebrow">MYP Physics · Grade 10 · Level ${L.l} ${L.name}</div>
          <h1 class="display" style="margin-top:10px">Light up every bulb.</h1>
          <p>Six concept-based units, ${CORE.length} topics. Every topic is a lamp in your circuit: learn it, explore the simulation, test yourself — and watch it glow.</p>
          <div class="row" style="margin-top:18px">${last ? `<a class="btn accent" href="#/t/${last.id}">${ICON.play} Continue ${last.id} ${esc(last.title)}</a>` : `<a class="btn accent" href="#/unit/1">${ICON.play} Start with Unit 1: What is validity?</a>`}
          <a class="btn" href="#/daily">${dDone != null ? `Daily challenge ✓ ${dDone}/5` : 'Daily challenge'}</a></div></div>
        <div class="hero-stats"><div class="hstat"><b>${S.xp}</b><span>XP</span></div><div class="hstat"><b>${S.streak.n || 0}</b><span>day streak</span></div><div class="hstat"><b>${mastered}<small style="font-size:16px;color:#8FA2B1">/${CORE.length}</small></b><span>lamps lit</span></div></div>
      </div>
      <canvas class="spec circuit" id="spec" aria-label="Circuit: one lamp per topic, brightness shows mastery"></canvas>
      <div id="spec-tip" class="mono" style="min-height:18px;margin-top:6px;font-size:12px;color:#B9C6D0"></div>
    </section>
    <div class="sec"><div class="sec-head"><h2 class="h2">The six units</h2><span class="muted">Statement of inquiry · global context · key concepts</span></div>
      <div class="grid g3">${UNITS.filter(u => u.id !== 'S').map(unitCard).join('')}</div></div>
    <div class="sec grid g3">
      <div class="card"><div class="eyebrow">Recommended next</div><div class="stack" style="margin-top:12px">${rec.map(({ t, m }) => `<a class="tcard" href="#/t/${t.id}" style="--uc:${ucol(t.unit)}"><span class="no" style="font-size:24px;min-width:40px">${t.id}</span><span class="tt">${esc(t.title)}</span><span class="ts">${pct(m)} mastery</span></a>`).join('')}</div></div>
      <div class="card"><div class="eyebrow">Inquiry question of the day · ${IQ_TYPE[iqd.q[1]]}</div><p class="h3" style="margin:14px 0 8px;font-size:19px">${esc(iqd.q[0])}</p><p class="small muted" style="margin:0 0 14px">${iqd.u.code} · ${esc(iqd.u.name)}</p><a class="btn sm" href="#/unit/${iqd.u.id}">Think it through ${ICON.arrow}</a></div>
      <div class="card"><div class="eyebrow">Equation of the day</div><div class="eqbig" style="margin:22px 0 10px;text-align:center">${M(eqd[1])}</div><p class="muted" style="text-align:center;margin:0">${esc(eqd[0])}</p><div class="row" style="justify-content:center;margin-top:16px"><a class="btn sm" href="#/game/rush">Play Equation Rush</a></div></div>
    </div>
    <div class="sec grid g3"><a class="card linkcard" href="#/practicals"><div class="eyebrow">Criteria B and C</div><div class="h3" style="margin:6px 0">${PRACTICALS.length} labs and tasks</div><p class="small muted" style="margin:0">Hooke’s law, friction, the roller-coaster, Snell’s law, resistance and more — variables, method, analysis and evaluation.</p></a>
      <a class="card linkcard" href="#/criteria"><div class="eyebrow">Criteria A–D</div><div class="h3" style="margin:6px 0">Criteria &amp; grades</div><p class="small muted" style="margin:0">What each criterion rewards, your levels for each unit, and your estimated MYP grade.</p></a>
      <a class="card linkcard" href="#/mock"><div class="eyebrow">Combined tests</div><div class="h3" style="margin:6px 0">Unit tests</div><p class="small muted" style="margin:0">Units 1–2, Units 3–5, Unit 6 and the end-of-year exam — quick-fire or written and self-marked.</p></a></div>`;
    const cv = $('#spec'); cleanup = drawCircuit(cv);
  }
  const unitCard = u => { const ts = unitTopics(u.id), m = unitMastery(u.id);
    return `<a class="unit-card" href="#/unit/${u.id}" style="--uc:${u.css}"><span class="line"></span><div class="row" style="justify-content:space-between"><span class="eyebrow">${u.code}</span><span class="small muted">${u.kc.join(' · ')}</span></div><div class="h3">${esc(u.name)}</div><div class="small muted" style="min-height:3.2em">${esc(u.cu)}</div><div class="small"><b>${esc(u.gc[0])}</b></div><div class="small muted">${ts.length} topics · ${ts.reduce((a, t) => a + t.quiz.length, 0)} questions</div><div class="bar"><i style="width:${m * 100}%"></i></div><div class="small mono">${pct(m)} mastered</div></a>`; };
  /* The home “circuit”: a cell on the left, one parallel branch per section, one lamp per topic.
     Lamp brightness = mastery; charge flows faster along branches with more lit lamps. */
  function drawCircuit(cv) {
    const c = cv.getContext('2d'); let W, H, alive = true, hover = -1;
    const units = UNITS.filter(u => unitTopics(u.id).length);
    const lamps = []; units.forEach((u, r) => unitTopics(u.id).forEach((t, k, arr) => lamps.push({ t, u, r, k, n: arr.length, m: mastery(t), col: cssVar(u.css.slice(4, -1)) || '#FFB547' })));
    const size = () => { const rc = cv.getBoundingClientRect(), d = Math.min(2, devicePixelRatio || 1); W = rc.width; H = rc.height; cv.width = W * d; cv.height = H * d; c.setTransform(d, 0, 0, d, 0, 0); };
    size(); const ro = new ResizeObserver(size); ro.observe(cv);
    const geo = () => { const x0 = 56, x1 = W - 22, top = 16, rows = units.length, gap = (H - 32) / Math.max(1, rows - 1), lab = W > 560 ? 140 : 64; return { x0, x1, top, gap, lab }; };
    const pos = l => { const g = geo(), y = g.top + l.r * g.gap, xs = g.x0 + g.lab, span = g.x1 - xs - 64; return [xs + 22 + (l.n === 1 ? span / 2 : l.k * span / (l.n - 1)), y]; };
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const frame = t => {
      if (!alive) return; c.clearRect(0, 0, W, H); const g = geo(), yb = g.top + (units.length - 1) * g.gap;
      c.strokeStyle = 'rgba(160,180,195,.45)'; c.lineWidth = 2; c.beginPath(); c.moveTo(g.x0, g.top); c.lineTo(g.x0, yb); c.moveTo(g.x1, g.top); c.lineTo(g.x1, yb); c.stroke();
      // cell symbol on the left rail
      const cy = (g.top + yb) / 2; c.fillStyle = '#0B1117'; c.fillRect(g.x0 - 10, cy - 12, 20, 24); c.strokeStyle = '#E8EEF2'; c.lineWidth = 2; c.beginPath(); c.moveTo(g.x0 - 12, cy - 6); c.lineTo(g.x0 + 12, cy - 6); c.stroke(); c.lineWidth = 4; c.beginPath(); c.moveTo(g.x0 - 6, cy + 5); c.lineTo(g.x0 + 6, cy + 5); c.stroke();
      units.forEach((u, r) => { const y = g.top + r * g.gap, ls = lamps.filter(l => l.r === r), um = ls.reduce((a, l) => a + l.m, 0) / ls.length, col = ls[0].col;
        c.strokeStyle = hexA(col, .35 + .5 * um); c.lineWidth = 2; c.beginPath(); c.moveTo(g.x0, y); c.lineTo(g.x1, y); c.stroke();
        c.font = '600 11px IBM Plex Mono, monospace'; c.textBaseline = 'middle'; c.textAlign = 'left'; c.fillStyle = '#0B1117'; const lab = W > 560 ? (u.id === 'S' ? 'Skills' : 'U' + u.id + ' ' + u.short) : (u.id === 'S' ? 'Sk' : 'U' + u.id), lw = c.measureText(lab).width; c.fillRect(g.x0 + 8, y - 8, lw + 8, 16); c.fillStyle = hexA(col, .95); c.fillText(lab, g.x0 + 12, y);
        if (!reduce) { const sp = 0.02 + 0.12 * um; for (let i = 0; i < 6; i++) { const f = ((t / 1000) * sp * 6 + i / 6) % 1, x = g.x0 + g.lab + f * (g.x1 - g.x0 - g.lab); c.fillStyle = hexA(col, .5 + .5 * um); c.beginPath(); c.arc(x, y, 2, 0, 7); c.fill(); } } });
      lamps.forEach((l, i) => { const [x, y] = pos(l), b = 0.08 + 0.92 * l.m, fl = reduce ? 1 : 0.93 + 0.07 * Math.sin(t / 380 + i);
        if (b > 0.15) { const gr = c.createRadialGradient(x, y, 2, x, y, 10 + 18 * b); gr.addColorStop(0, hexA('#FFE8A3', .85 * b * fl)); gr.addColorStop(1, 'rgba(255,200,80,0)'); c.fillStyle = gr; c.beginPath(); c.arc(x, y, 10 + 18 * b, 0, 7); c.fill(); }
        c.fillStyle = b > 0.15 ? hexA('#FFD86B', Math.min(1, .25 + b)) : '#0B1117'; c.beginPath(); c.arc(x, y, 8, 0, 7); c.fill(); c.strokeStyle = i === hover ? '#fff' : hexA(l.col, .9); c.lineWidth = i === hover ? 2.2 : 1.6; c.stroke();
        c.strokeStyle = hexA(i === hover ? '#ffffff' : '#C9D4DC', .8); c.lineWidth = 1.3; c.beginPath(); c.moveTo(x - 5.6, y - 5.6); c.lineTo(x + 5.6, y + 5.6); c.moveTo(x + 5.6, y - 5.6); c.lineTo(x - 5.6, y + 5.6); c.stroke(); });
      if (!reduce) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
    const tip = $('#spec-tip');
    cv.addEventListener('pointermove', e => { const r = cv.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top; let best = -1, bd = 14; lamps.forEach((l, i) => { const [lx, ly] = pos(l), d = Math.hypot(lx - x, ly - y); if (d < bd) { bd = d; best = i; } }); hover = best; cv.style.cursor = best >= 0 ? 'pointer' : 'default'; tip.textContent = best >= 0 ? `${lamps[best].t.id} ${lamps[best].t.title} · ${pct(lamps[best].m)} mastery` : 'Hover a lamp to see its topic; click to open it.'; if (reduce) frame(0); });
    cv.addEventListener('pointerleave', () => { hover = -1; if (reduce) frame(0); });
    cv.addEventListener('click', () => { if (hover >= 0) go('#/t/' + lamps[hover].t.id); });
    tip.textContent = 'Hover a lamp to see its topic; click to open it.';
    if (reduce) frame(0);
    return () => { alive = false; ro.disconnect(); };
  }

  /* ---------- TOPICS / UNIT ---------- */
  const tcard = t => { const m = mastery(t); return `<a class="tcard" href="#/t/${t.id}" style="--uc:${ucol(t.unit)}"><span class="no">${t.id}</span><span class="tt">${esc(t.title)}</span><span class="ts">${esc(t.short)}</span><span class="bar"><i style="width:${m * 100}%"></i></span></a>`; };
  function topics() {
    crumbs('<b>All topics</b>');
    V().innerHTML = `<div class="sec-head" style="margin-bottom:6px"><h1 class="display" style="font-size:clamp(34px,5vw,54px)">All topics</h1></div><p class="lede">${allTopics().length} topics across the six Grade 10 units — from measurement and validity to radioactivity — plus the MYP skills assessed in every unit.</p>
      <div class="row" style="margin:18px 0 6px"><input id="tfilter" type="search" placeholder="Filter topics…" aria-label="Filter topics" style="flex:1;min-width:200px;max-width:420px;padding:10px 12px;border-radius:10px;border:1px solid var(--line-2);background:var(--surface)"></div>
      <div id="tlist">${UNITS.map(u => `<div class="sec" data-u="${u.id}"><div class="sec-head"><h2 class="h3" style="color:${u.css}">${u.code} · ${esc(u.name)}</h2><span class="muted">${u.id === 'S' ? 'Criteria A–D' : esc(u.gc[0])}</span></div><div class="topic-list">${unitTopics(u.id).map(tcard).join('')}</div></div>`).join('')}</div>`;
    $('#tfilter').oninput = e => { const q = e.target.value.toLowerCase(); $$('.tcard', V()).forEach(a => a.hidden = q && !a.textContent.toLowerCase().includes(q)); $$('[data-u]', V()).forEach(s => s.hidden = !$$('.tcard', s).some(a => !a.hidden)); };
  }
  /* RAG confidence for one application & skill: the average of the matching checklist ratings of the topics that list it */
  const asConf = (uid, k) => { const ts = unitTopics(uid).filter(t => (t.as || []).includes(k + 1)); const r = ts.flatMap(t => Object.values(T(t.id).spec || {}).filter(Boolean)); return { ts, v: r.length ? r.reduce((a, b) => a + b, 0) / r.length : 0 }; };
  function unit(uid) {
    const u = unitOf(uid), ts = unitTopics(uid), m = unitMastery(uid);
    crumbs(`<a href="#/topics" style="color:inherit">Topics</a> / <b>${u.code} ${esc(u.name)}</b>`);
    const nq = ts.reduce((a, t) => a + t.quiz.length, 0);
    const iqHTML = (q, si, qi) => { const key = `${uid}.${si}.${qi}`, seen = S.iq.includes(key), [text, type, ans] = q;
      const body = type === 'D' ? `<div class="grid g2" style="margin-top:10px"><div class="box good" style="margin:0"><b class="lbl">One perspective</b><p>${esc(ans[0])}</p></div><div class="box warn" style="margin:0"><b class="lbl">Another perspective</b><p>${esc(ans[1])}</p></div></div><p class="small muted" style="margin:8px 0 0">Debatable: there is no single right answer. Weigh the evidence and reach your own justified conclusion — good Criterion D practice.</p>` : `<p style="margin:10px 0 0">${esc(ans)}</p>`;
      return `<details class="iq" data-iq="${key}"${seen ? ' data-seen="1"' : ''}><summary><span class="iqt iq-${type}">${type}</span><span>${esc(text)}</span>${ICON.chev}</summary><div class="iqb"><p class="small muted" style="margin:0">Think first — then compare with this answer.</p>${body}</div></details>`; };
    if (uid === 'S') {
      V().innerHTML = `<div style="--uc:${u.css}"><div class="eyebrow">Assessed in every unit</div><h1 class="display" style="margin:8px 0 10px">${esc(u.name)}</h1><p class="lede">${esc(u.cu)}</p>
        <div class="row" style="margin:16px 0"><a class="btn primary" href="#/criteria">Criteria &amp; grades</a><a class="btn" href="#/practicals">Labs &amp; tasks</a></div>
        <div class="sec topic-list">${ts.map(tcard).join('')}</div></div>`; return;
    }
    V().innerHTML = `<div style="--uc:${u.css}"><div class="eyebrow">${u.code} · Key concept${u.kc.length > 1 ? 's' : ''}: ${u.kc.join(', ')}</div><h1 class="display" style="margin:8px 0 10px">${esc(u.name)}</h1>
      <div class="card soi"><div class="eyebrow">Conceptual understanding</div><p class="h3" style="margin:8px 0 0;font-size:clamp(18px,2.4vw,22px);line-height:1.35">${esc(u.cu)}</p></div>
      <div class="grid g2 sec" style="margin-top:14px"><div class="card flat"><div class="eyebrow">Global context</div><div class="h3" style="margin:6px 0 4px;font-size:18px">${esc(u.gc[0])}</div><p class="small muted" style="margin:0">${esc(u.gc[1])}</p></div>
        <div class="card flat"><div class="eyebrow">Approaches to learning</div>${u.atl.map(([k, d]) => `<p class="small" style="margin:6px 0 0"><b>${esc(k)}:</b> ${esc(d)}</p>`).join('')}</div></div>
      <div class="row" style="margin:16px 0"><span class="pill acc">${pct(m)} mastery</span><span class="pill">${ts.length} topics</span><span class="pill">${nq} quiz questions</span><span class="pill">${ts.reduce((a, t) => a + t.cards.length, 0)} flashcards</span></div>
      <div class="row"><button class="btn primary" id="uquiz">Mixed unit quiz</button><a class="btn" href="#/mock/written/${uid}">Written unit test</a><a class="btn" href="#/practicals">Labs &amp; tasks</a></div>
      <div class="sec"><div class="sec-head"><h2 class="h2">Topics</h2></div><div class="topic-list">${ts.map(tcard).join('')}</div></div>
      <div class="sec"><div class="sec-head"><h2 class="h2">Strands and inquiry questions</h2><span class="muted"><span class="iqt iq-F">F</span> factual · <span class="iqt iq-C">C</span> conceptual · <span class="iqt iq-D">D</span> debatable</span></div>
        ${u.strands.map((s, si) => `<div class="card flat strand"><div class="eyebrow">Strand ${si + 1}</div><h3 class="h3" style="margin:4px 0 8px">${esc(s.n[0].toUpperCase() + s.n.slice(1))}</h3><ul class="gen">${s.g.map(g => `<li>${esc(g)}</li>`).join('')}</ul>
          <div class="row" style="gap:6px;margin:6px 0 10px">${ts.filter(t => t.strand === si + 1).map(t => `<a class="pill" href="#/t/${t.id}">${t.id} ${esc(t.title)}</a>`).join('')}</div>
          <div class="iqs">${s.iq.map((q, qi) => iqHTML(q, si, qi)).join('')}</div></div>`).join('')}</div>
      <div class="grid g2 sec" style="align-items:start"><div class="card flat"><div class="eyebrow">Applications and skills · self-assessment</div><p class="small muted" style="margin:6px 0 10px">Your confidence comes from the red/amber/green checklists in the linked topics.</p>
        <ol class="as-list">${u.as.map((a, k) => { const c = asConf(uid, k), col = !c.v ? 'var(--line-2)' : c.v < 1.7 ? 'var(--bad)' : c.v < 2.5 ? 'var(--warn, #E8A33D)' : 'var(--good)'; return `<li><span class="asdot" style="background:${col}" title="${c.v ? c.v.toFixed(1) + ' / 3' : 'not rated'}"></span><span>${esc(a)} ${c.ts.map(t => `<a class="small" href="#/t/${t.id}">${t.id}</a>`).join(' ')}</span></li>`; }).join('')}</ol></div>
        <div class="card flat"><div class="eyebrow">Assessment in this unit</div><div class="tbl" style="margin:10px 0 0"><table><tr><th>Task</th><th>Criteria</th><th>AS</th></tr>${u.tasks.map(([n, c, a]) => `<tr><td>${esc(n)}</td><td>${c}</td><td class="mono">${a}</td></tr>`).join('')}</table></div>
          <a class="btn sm" style="margin-top:12px" href="#/criteria">Record your criterion levels for ${u.code}</a></div></div></div>`;
    $$('details.iq', V()).forEach(d => d.addEventListener('toggle', () => { if (d.open && !S.iq.includes(d.dataset.iq)) { S.iq.push(d.dataset.iq); save(); addXP(3, 'Inquiry question'); checkBadges(); } }));
    $('#uquiz').onclick = () => { const items = shuffle(ts.flatMap(t => t.quiz.map(q => ({ ...q, topic: t.id })))).slice(0, 12); V().innerHTML = `<div class="quiz-wrap" style="--uc:${u.css};margin:0 auto" id="qz"></div>`; runQuiz($('#qz'), items, { title: u.code + ' mixed quiz', back: '#/unit/' + uid, onDone: r => { addXP(r.correct * 8, 'Unit quiz'); } }); };
  }

  /* ---------- TOPIC ---------- */
  function topic(id, tab) {
    const t = TOPIC[id], u = unitOf(t.unit), s = T(id), v = V_(t); s.seen = Date.now(); S.last = id; save();
    const list = allTopics(), idx = list.indexOf(t), prev = list[idx - 1], next = list[idx + 1];
    crumbs(`<a href="#/unit/${u.id}" style="color:inherit">${u.code} ${esc(u.name)}</a> / <b>${t.id} ${esc(t.title)}</b>`);
    const tabs = [['learn', 'Learn', ''], ...(t.sims.length ? [['explore', 'Explore', t.sims.length]] : []), ['cards', 'Flashcards', v.cards.length], ['quiz', 'Quiz', v.quiz.length], ...(v.gens.length ? [['calc', 'Calculate', '∞']] : []), ['exam', 'Exam questions', v.exam.length]];
    if (!tabs.find(x => x[0] === tab)) tab = 'learn';
    const m = mastery(t), out = !vis(t);
    V().innerHTML = `<div style="--uc:${u.css}">
      <header class="topic-head"><div class="topic-no">${t.id}</div><div class="eyebrow">${u.code} ${esc(u.name)} · <span class="lc">${esc(t.ref)}</span></div><h1 class="display">${esc(t.title)}</h1></header>
      <p class="lede">${esc(t.summary)}</p>
      <div class="row" style="margin-top:12px">${tagHTML(flagOf(t))}<span class="pill acc">${pct(m)} mastery</span><span class="pill">Quiz best ${s.quiz || 0}%</span><span class="pill">${Object.entries(s.cards).filter(([i, b]) => b >= 3 && inScope(t.cards[i]?.[2] || '')).length}/${v.cards.length} cards known</span>${v.gens.length ? `<span class="pill">${s.calc || 0} calculations correct</span>` : ''}</div>
      <nav class="tabs" role="tablist" aria-label="Topic sections">${tabs.map(([k, l, n]) => `<a class="tab ${k === tab ? 'on' : ''}" role="tab" aria-selected="${k === tab}" href="#/t/${id}/${k}">${l}${n !== '' ? `<span class="n">${n}</span>` : ''}</a>`).join('')}</nav>
      <div id="tab"></div>
      <div class="row" style="justify-content:space-between;margin-top:40px;border-top:1px solid var(--line);padding-top:18px">${prev ? `<a class="btn ghost" href="#/t/${prev.id}">${ICON.back} ${prev.id} ${esc(prev.title)}</a>` : '<span></span>'}${next ? `<a class="btn ghost" href="#/t/${next.id}">${next.id} ${esc(next.title)} ${ICON.arrow}</a>` : ''}</div></div>`;
    const host = $('#tab');
    ({ learn: learnTab, explore: exploreTab, cards: cardsTab, quiz: quizTab, calc: calcTab, exam: examTab })[tab](host, t);
  }

  function learnTab(host, t) {
    const s = T(t.id), v = V_(t), secs = t.learn.filter(inScope), hid = t.learn.length - secs.length;
    host.innerHTML = `<div class="layout-2"><article class="notes">
      ${secs.map((sec, i) => `<section id="s${i}"><h3><span class="k">${t.id}.${i + 1}</span>${sec.h} ${tagHTML(flagOf(sec), 1)}</h3>${rich(sec.html)}</section>`).join('')}
      
      ${t.eqs.length ? `<section id="s-eq"><h3><span class="k">KEY</span>Equations</h3><div class="card flat" style="padding:4px 18px">${t.eqs.map(([e, d]) => `<div class="eq-row">${M(e)}<span class="d">${esc(d)}</span></div>`).join('')}</div></section>` : ''}
      <section id="s-wk"><h3><span class="k">DO</span>Worked examples</h3>${v.worked.map((w, i) => `<div class="worked" data-w="${i}"><div class="wq"><span class="eyebrow">Example ${i + 1} ${tagHTML(flagOf(w), 1)}</span><div style="margin-top:6px">${rich(w.q)}</div></div><ol>${w.s.map((st, j) => `<li class="${j ? 'hid' : ''}">${rich(st)}</li>`).join('')}</ol><div class="wf"><button class="btn sm primary" data-step>Next step</button><button class="btn sm ghost" data-all>Show all</button><span class="ans" hidden>Answer: ${rich(w.a)}</span></div></div>`).join('')}</section>
      <section id="s-pf"><h3><span class="k">AVOID</span>Common mistakes</h3><div class="box warn"><b class="lbl">Teachers often see</b><ul>${t.pitfalls.map(p => `<li>${rich(p)}</li>`).join('')}</ul></div></section>
    </article>
    <aside class="aside"><div class="card flat" style="padding:14px 10px"><div class="eyebrow" style="padding:0 10px 8px">On this page</div><div class="toc">${secs.map((sec, i) => `<a href="#s${i}" data-anchor="s${i}">${sec.h}</a>`).join('')}${t.eqs.length ? '<a href="#s-eq" data-anchor="s-eq">Equations</a>' : ''}<a href="#s-wk" data-anchor="s-wk">Worked examples</a><a href="#s-pf" data-anchor="s-pf">Common mistakes</a></div></div>
      <div class="card flat" style="padding:16px"><div class="eyebrow">Applications &amp; skills checklist · ${esc(t.ref)}</div><p class="small muted" style="margin:6px 0 10px">Rate your confidence: red, amber, green.</p><div class="spec-list">${v.spec.map(([sp, i]) => `<div class="spec-item"><div class="rag" data-i="${i}">${[1, 2, 3].map(val => `<button data-v="${val}" class="${s.spec[i] === val ? 'on' : ''}" aria-label="${['Not confident', 'Getting there', 'Confident'][val - 1]}: ${esc(specTxt(sp))}"></button>`).join('')}</div><span>${tagHTML(specFlag(sp), 1)}${rich(esc(specTxt(sp)))}</span></div>`).join('')}</div></div>
      <a class="btn primary" href="#/t/${t.id}/quiz">Test yourself ${ICON.arrow}</a></aside></div>`;
    // hide inline Higher / physics-only fragments that are out of scope
    $$('[data-anchor]', host).forEach(a => a.onclick = e => { e.preventDefault(); document.getElementById(a.dataset.anchor).scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    $$('.worked', host).forEach(w => { const lis = $$('li', w), ans = $('.ans', w); let k = 1; const show = n => { lis.forEach((li, j) => li.classList.toggle('hid', j >= n)); if (n >= lis.length) { ans.hidden = false; $('[data-step]', w).disabled = true; } }; $('[data-step]', w).onclick = () => show(++k); $('[data-all]', w).onclick = () => { k = lis.length; show(k); }; });
    $$('.rag', host).forEach(r => r.onclick = e => { const b = e.target.closest('button'); if (!b) return; const i = +r.dataset.i, val = +b.dataset.v; s.spec[i] = s.spec[i] === val ? 0 : val; save(); $$('button', r).forEach(x => x.classList.toggle('on', +x.dataset.v === s.spec[i])); refreshChrome(); checkBadges(); });
  }

  function exploreTab(host, t) {
    let i = 0; const draw = () => {
      if (cleanup) { try { cleanup(); } catch (e) { } }
      host.innerHTML = `${t.sims.length > 1 ? `<div class="sim-pick">${t.sims.map((k, j) => `<button class="btn sm ${j === i ? 'primary' : ''}" data-j="${j}">${SIMS[k] ? SIMS[k].title : k}</button>`).join('')}</div>` : ''}<div id="simhost"></div><p class="kbd-hint">Simulations are simplified models for building intuition; some scales are exaggerated so the effect is visible.</p>`;
      $$('[data-j]', host).forEach(b => b.onclick = () => { i = +b.dataset.j; draw(); });
      const key = t.sims[i]; cleanup = SIMS[key]?.mount ? SIMS[key].mount($('#simhost')) : mountSim($('#simhost'), key);
      if (!S.stats.sims.includes(key)) { S.stats.sims.push(key); save(); addXP(5, 'New simulation'); }
    }; draw();
  }

  /* ---------- Flashcards (Leitner boxes) ---------- */
  function cardsTab(host, t) {
    const s = T(t.id), idxs = t.cards.map((c, i) => i).filter(i => inScope(t.cards[i][2] || '')); let queue = shuffle(idxs).sort((a, b) => (s.cards[a] || 0) - (s.cards[b] || 0)), pos = 0, flipped = false, reviewed = 0;
    const render = () => {
      const i = queue[pos], box = s.cards[i] || 0, counts = [0, 1, 2, 3, 4, 5].map(b => idxs.filter(j => (s.cards[j] || 0) === b).length);
      if (pos >= queue.length) { host.innerHTML = `<div class="card result"><div class="eyebrow">Session complete</div><div class="big">${reviewed}</div><p class="lede" style="margin:8px auto">cards reviewed. Known (box 3+): ${idxs.filter(j => s.cards[j] >= 3).length}/${idxs.length}</p><button class="btn primary" id="again">Review again</button></div>`; $('#again').onclick = () => cardsTab(host, t); return; }
      host.innerHTML = `<div class="fc-stage"><div class="row" style="justify-content:space-between;margin-bottom:12px"><span class="eyebrow">Card ${pos + 1} of ${queue.length}</span><span class="pill">Box ${box || 'new'}</span></div>
        <div class="fc ${flipped ? 'flip' : ''}" id="fc" tabindex="0" role="button" aria-label="Flip card"><div class="front"><span class="eyebrow">Question ${tagHTML(t.cards[i][2] || '', 1)}</span><div>${rich(t.cards[i][0])}</div></div><div class="back"><span class="eyebrow">Answer</span><div>${rich(t.cards[i][1])}</div></div></div>
        <div class="fc-ctl">${flipped ? `<button class="btn" data-r="0" style="border-color:var(--bad);color:var(--bad)">Again <kbd>1</kbd></button><button class="btn" data-r="1">Hard <kbd>2</kbd></button><button class="btn" data-r="2" style="border-color:var(--good);color:var(--good)">Good <kbd>3</kbd></button><button class="btn" data-r="3">Easy <kbd>4</kbd></button>` : `<button class="btn primary" id="flip">Show answer <kbd>Space</kbd></button>`}</div>
        <div class="boxes">${counts.map((n, b) => `<span>${b ? 'Box ' + b : 'New'}: ${n}</span>`).join('')}</div></div>`;
      $('#fc').onclick = () => { flipped = !flipped; sfx.flip(); render(); };
      $('#flip') && ($('#flip').onclick = () => { flipped = true; sfx.flip(); render(); });
      $$('[data-r]', host).forEach(b => b.onclick = () => rate(+b.dataset.r));
    };
    const rate = r => { const i = queue[pos], b = s.cards[i] || 0; s.cards[i] = r === 0 ? 1 : r === 1 ? Math.max(1, b) : r === 2 ? Math.min(5, b + 1) : Math.min(5, b + 2); if (r === 0) queue.push(i); reviewed++; S.stats.cardsSeen++; save(); addXP(2); pos++; flipped = false; render(); };
    const key = e => { if (!document.body.contains(host) || !$('#fc')) { removeEventListener('keydown', key); return; } if (e.target.matches('input,textarea')) return; if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipped = !flipped; render(); } else if (flipped && '1234'.includes(e.key)) rate(+e.key - 1); };
    addEventListener('keydown', key); cleanup = () => removeEventListener('keydown', key);
    render();
  }

  /* ---------- Quiz engine (also used by mock exam & daily challenge) ---------- */
  function runQuiz(host, items, o = {}) {
    const exam = o.mode === 'exam';
    const qs = items.map(it => it.type === 'num' ? it : { ...it, type: 'mcq', order: shuffle(it.o.map((_, i) => i)) });
    let i = 0, res = [], t0 = Date.now(), tick = null;
    const render = () => {
      if (i >= qs.length) return finish();
      const q = qs[i];
      host.innerHTML = `<div class="q-meta"><span class="eyebrow">${o.title ? esc(o.title) + ' · ' : ''}Question ${i + 1} of ${qs.length}</span>${q.topic ? `<a class="pill" href="#/t/${q.topic}">${q.topic}</a>` : ''}${o.timeLimit ? '<span class="pill warn mono" id="qtimer"></span>' : ''}<div class="q-prog">${qs.map((_, j) => `<i class="${j < res.length ? (res[j].ok ? 'c' : exam ? 'cur' : 'w') : j === i ? 'cur' : ''}"></i>`).join('')}</div></div>
        <div class="q-text">${rich(q.type === 'num' ? q.q : q.q)}</div>
        ${q.type === 'mcq' ? `<div class="opts">${q.order.map((oi, k) => `<button class="opt" data-k="${k}"><span class="k">${'ABCD'[k]}</span><span>${rich(q.o[oi])}</span></button>`).join('')}</div><p class="kbd-hint">Press A–D or 1–4.</p>`
          : `<div class="calc-in"><input id="numin" inputmode="decimal" autocomplete="off" placeholder="e.g. 2.5e-3" aria-label="Your answer"><span class="unit">${q.unit || ''}</span><button class="btn primary" id="numgo">Submit</button></div><p class="kbd-hint">Give 2–3 significant figures. Use e for powers of ten, e.g. 6.6e-34.</p>`}
        <div id="fb"></div>`;
      if (q.type === 'mcq') $$('.opt', host).forEach(b => b.onclick = () => answer(+b.dataset.k));
      else { const inp = $('#numin'); inp.focus(); $('#numgo').onclick = () => answer(inp.value); inp.onkeydown = e => { if (e.key === 'Enter') answer(inp.value); }; }
    };
    const answer = k => {
      const q = qs[i]; if (res.length > i) return;
      let ok, given;
      if (q.type === 'mcq') { ok = q.order[k] === 0; given = k; } else { const v = parseNum(k); if (!isFinite(v)) { toast('Enter a number, e.g. 3.2e-5'); return; } ok = Math.abs(v - q.ans) <= Math.abs(q.ans) * (q.tol || 0.02) + 1e-12; given = v; }
      res.push({ ok, given, q }); (ok ? sfx.good : sfx.bad)();
      if (exam) { i++; render(); return; }
      if (q.type === 'mcq') { $$('.opt', host).forEach((b, j) => { b.disabled = true; if (q.order[j] === 0) b.classList.add('right'); else if (j === k) b.classList.add('wrong'); }); }
      else { $('#numin').disabled = true; $('#numgo').disabled = true; }
      $('#fb', host).innerHTML = `<div class="explain"><b class="v ${ok ? 'good' : 'bad'}">${ok ? 'Correct' : 'Not quite'}</b> ${q.type === 'num' ? `Answer: <b>${fmtAns(q.ans)}</b> ${q.unit}<div class="steps"><b class="small">Solution</b><ol>${q.steps.map(x => `<li>${rich(x)}</li>`).join('')}</ol></div>` : rich(q.x || '')}</div><div class="row" style="margin-top:14px"><button class="btn primary" id="nextq">${i < qs.length - 1 ? 'Next question' : 'See results'} <kbd>Enter</kbd></button></div>`;
      $('#nextq').onclick = () => { i++; render(); }; $('#nextq').focus();
    };
    const finish = () => {
      clearInterval(tick); removeEventListener('keydown', key);
      const correct = res.filter(r => r.ok).length, p = Math.round(correct / qs.length * 100), secs = Math.round((Date.now() - t0) / 1000);
      if (p === 100) { burst(); sfx.win(); }
      const byTopic = {}; res.forEach(r => { const k = r.q.topic || '—'; byTopic[k] ??= [0, 0]; byTopic[k][1]++; if (r.ok) byTopic[k][0]++; });
      host.innerHTML = `<div class="card result"><div class="eyebrow">${esc(o.title || 'Quiz')} complete · ${Math.floor(secs / 60)}m ${secs % 60}s</div><div class="big">${p}%</div><p class="lede" style="margin:6px auto 0">${correct} of ${qs.length} correct${p >= 80 ? ' — excellent.' : p >= 50 ? ' — good progress.' : ' — revisit the notes and try again.'}</p>
        <div class="row" style="justify-content:center;margin-top:16px"><button class="btn primary" id="retry">Try again</button>${o.back ? `<a class="btn" href="${o.back}">Back</a>` : ''}</div></div>
        ${Object.keys(byTopic).length > 1 ? `<div class="sec"><div class="eyebrow">By topic</div><div class="grid gauto" style="margin-top:10px">${Object.entries(byTopic).map(([k, [a, b]]) => `<a class="tcard" href="#/t/${k}" style="--uc:${TOPIC[k] ? ucol(TOPIC[k].unit) : 'var(--accent)'}"><span class="no" style="font-size:22px">${k}</span><span class="tt">${TOPIC[k] ? esc(TOPIC[k].title) : ''}</span><span class="ts">${a}/${b} correct</span></a>`).join('')}</div></div>` : ''}
        <div class="sec"><div class="eyebrow">Review</div>${res.map((r, j) => `<div class="explain" style="margin-top:10px"><b class="v ${r.ok ? 'good' : 'bad'}">${j + 1}. ${r.ok ? '✓' : '✗'}</b> ${rich(r.q.q)}<div class="small" style="margin-top:6px">${r.q.type === 'mcq' ? `<b>Answer:</b> ${rich(r.q.o[0])}${r.ok ? '' : ` · <span style="color:var(--bad)">you chose: ${rich(r.q.o[r.q.order[r.given]])}</span>`}${r.q.x ? `<br><span class="muted">${rich(r.q.x)}</span>` : ''}` : `<b>Answer:</b> ${fmtAns(r.q.ans)} ${r.q.unit} · you gave ${r.given == null ? '—' : fmtAns(r.given)}`}</div></div>`).join('')}</div>`;
      $('#retry').onclick = () => { o.retry ? o.retry() : runQuiz(host, items, o); };
      S.stats.quizzes++; if (p === 100) S.stats.perfect++; save();
      o.onDone && o.onDone({ correct, total: qs.length, p, res });
      checkBadges();
    };
    const key = e => { if (!document.body.contains(host)) { removeEventListener('keydown', key); return; } if (e.target.matches('input,textarea')) return; const q = qs[i]; if (!q) return;
      if (res.length > i && e.key === 'Enter') { $('#nextq')?.click(); return; }
      if (q.type === 'mcq' && res.length <= i) { const k = { a: 0, b: 1, c: 2, d: 3, 1: 0, 2: 1, 3: 2, 4: 3 }[e.key.toLowerCase()]; if (k != null && k < q.o.length) answer(k); } };
    addEventListener('keydown', key);
    if (o.timeLimit) { const end = Date.now() + o.timeLimit * 1000; tick = setInterval(() => { const left = Math.max(0, Math.round((end - Date.now()) / 1000)); const el = $('#qtimer'); if (el) el.textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`; if (!document.body.contains(host)) clearInterval(tick); if (left <= 0) { while (res.length < qs.length) res.push({ ok: false, given: null, q: qs[res.length] }); i = qs.length; finish(); } }, 500); }
    const prevCleanup = cleanup; cleanup = () => { clearInterval(tick); removeEventListener('keydown', key); prevCleanup && prevCleanup(); };
    render();
  }

  function quizTab(host, t) {
    const s = T(t.id);
    const start = () => { host.innerHTML = '<div class="quiz-wrap" id="qz"></div>'; runQuiz($('#qz'), shuffle(V_(t).quiz).slice(0, 10).map(q => ({ ...q, topic: t.id })), { title: t.id + ' ' + t.title, retry: start, onDone: r => { s.qa = (s.qa || 0) + 1; if (r.p > (s.quiz || 0)) s.quiz = r.p; save(); addXP(r.correct * 10 + (r.p === 100 ? 20 : 0), 'Quiz complete'); } }); };
    start();
  }

  function calcTab(host, t) {
    const s = T(t.id); let streak = 0;
    const one = () => {
      const q = GEN[pick(V_(t).gens)]();
      host.innerHTML = `<div class="quiz-wrap"><div class="row" style="justify-content:space-between;margin-bottom:12px"><span class="eyebrow">Unlimited calculation practice · new values every time</span><span class="pill good">${s.calc || 0} correct · streak ${streak}</span></div>
        <div class="card"><div class="calc-q">${rich(q.q)}</div><div class="calc-in"><input id="cin" inputmode="decimal" autocomplete="off" placeholder="your answer" aria-label="Your answer"><span class="unit">${q.unit}</span><button class="btn primary" id="cgo">Check</button><button class="btn ghost" id="cshow">Show solution</button></div><p class="kbd-hint">Answers within 2% are accepted. Use e-notation for powers of ten (e.g. 3.0e8). Take g = 9.8 N/kg unless told otherwise.</p><div id="cfb"></div></div></div>`;
      const inp = $('#cin'); inp.focus();
      const reveal = ok => { $('#cfb').innerHTML = `<div class="steps"><b>${ok === true ? '<span style="color:var(--good)">Correct!</span> ' : ok === false ? '<span style="color:var(--bad)">Not quite.</span> ' : ''}Answer: ${fmtAns(q.ans)} ${q.unit}</b><ol>${q.steps.map(x => `<li>${rich(x)}</li>`).join('')}</ol></div><div class="row" style="margin-top:12px"><button class="btn primary" id="cnext">Next question <kbd>Enter</kbd></button></div>`; $('#cnext').onclick = one; inp.disabled = true; $('#cgo').disabled = true; $('#cshow').disabled = true; $('#cnext').focus(); };
      const check = () => { const v = parseNum(inp.value); if (!isFinite(v)) { toast('Enter a number, e.g. 2.4e-3'); return; } const ok = Math.abs(v - q.ans) <= Math.abs(q.ans) * 0.02 + 1e-12; if (ok) { s.calc = (s.calc || 0) + 1; S.stats.calcOK++; streak++; save(); addXP(15, 'Calculation correct'); sfx.good(); if (streak % 5 === 0) burst(); } else { streak = 0; sfx.bad(); } s.calcN = (s.calcN || 0) + 1; save(); reveal(ok); };
      $('#cgo').onclick = check; inp.onkeydown = e => { if (e.key === 'Enter') check(); }; $('#cshow').onclick = () => { streak = 0; reveal(null); };
    };
    one();
  }

  /* written questions with self-marking (topic tab and written unit tests) */
  function examList(host, ex, o = {}) {
    host.innerHTML = `${o.intro ?? `<p class="muted" style="max-width:72ch">Write your answer, then reveal the mark scheme and tick the points you earned. Each question shows the MYP criterion it mainly assesses. Longer answers to “discuss” and “evaluate” questions are judged on how well they are organised and balanced, as well as on the points made.</p>`}${ex.map((q, i) => `<div class="examq" data-i="${i}"><div class="eh"><span class="eyebrow" style="padding-top:4px">Q${i + 1}</span><div>${q.topic ? `<a class="pill" href="#/t/${q.topic}" style="margin-right:6px">${q.topic}</a>` : ''}${crTag(q.cr || 'A')} ${rich(q.q)}</div><span class="pill mk">[${q.m}]</span></div><textarea aria-label="Your answer to question ${i + 1}" placeholder="Your answer…"></textarea><div class="row" style="padding:0 18px 14px"><button class="btn sm" data-ms>Reveal mark scheme</button></div><div class="ms" hidden>${q.ms.map((p, j) => `<label><input type="checkbox" data-j="${j}"> <span>${rich(p)}</span></label>`).join('')}<div class="row" style="margin-top:10px"><button class="btn sm primary" data-save>Save my mark</button><span class="small muted" data-score></span></div></div></div>`).join('')}${o.outro || ''}`;
    $$('.examq', host).forEach(el => { const q = ex[+el.dataset.i]; $('[data-ms]', el).onclick = () => { $('.ms', el).hidden = false; $('[data-ms]', el).hidden = true; };
      $('[data-save]', el).onclick = () => { const got = Math.min(q.m, $$('input:checked', el).length); $('[data-score]', el).textContent = `${got}/${q.m} marks saved`; $('[data-save]', el).disabled = true; el.dataset.got = got; S.stats.examMarks += got; const tid = q.topic || o.topic; if (tid) T(tid).exam = (T(tid).exam || 0) + got; save(); addXP(got * 5, 'Marks'); o.onSave && o.onSave(); checkBadges(); }; });
  }
  function examTab(host, t) { examList(host, t.exam, { topic: t.id }); }

  /* ---------- EQUATIONS ---------- */
  function equations() {
    crumbs('<b>Equations</b>');
    V().innerHTML = `<h1 class="display" style="font-size:clamp(34px,5vw,54px)">Equations</h1><p class="lede">The ${EQ_RECALL.length} key equations of the course, the constants and conversions you will use, and every equation listed topic by topic. Check with your teacher which equations will be given in tests.</p>
      <div class="row" style="margin:14px 0"><a class="btn primary" href="#/game/rush">${ICON.game} Drill them in Equation Rush</a><button class="btn" id="eqtest">Cover the equations (self-test)</button></div>
      <div class="grid g2" style="align-items:start" id="eqlists">
        <div class="card flat" style="padding:10px 18px"><div class="row" style="justify-content:space-between"><h2 class="h3" style="font-size:19px;padding:8px 0;margin:0">Key equations</h2><span class="pill acc">${EQ_RECALL.length}</span></div>${EQ_RECALL.map(e => `<div class="eq-row"><span class="eqm">${M(e[1])}</span><span class="d">${esc(e[0])}</span></div>`).join('')}</div>
        <div class="card flat" style="padding:10px 18px"><h2 class="h3" style="font-size:19px;padding:8px 0;margin:0">Constants and conversions</h2>
          <div class="tbl" style="margin:0"><table><tr><td>gravitational field strength at Earth’s surface</td><td>g = 9.8 N kg⁻¹ (9.8 m s⁻²)</td></tr><tr><td>speed of light in a vacuum</td><td>c = 3.00 × 10⁸ m s⁻¹</td></tr><tr><td>speed of sound in air (20 °C)</td><td>≈ 340 m s⁻¹ (330 m s⁻¹ is often used)</td></tr><tr><td>specific heat capacity of water</td><td>4200 J kg⁻¹ K⁻¹</td></tr><tr><td>specific latent heat of fusion of ice</td><td>3.34 × 10⁵ J kg⁻¹</td></tr><tr><td>specific latent heat of vaporisation of water</td><td>2.26 × 10⁶ J kg⁻¹</td></tr><tr><td>charge of an electron</td><td>−1.60 × 10⁻¹⁹ C</td></tr><tr><td>absolute zero</td><td>0 K = −273 °C</td></tr><tr><td>1 kWh</td><td>3.6 × 10⁶ J</td></tr><tr><td>km/h → m/s</td><td>÷ 3.6</td></tr><tr><td>1 cm³ · 1 cm² · 1 mm²</td><td>10⁻⁶ m³ · 10⁻⁴ m² · 10⁻⁶ m²</td></tr></table></div>
          <h3 class="h3" style="font-size:16px;margin:18px 0 6px">SI base units</h3><p class="small" style="margin:0">kilogram (kg) · metre (m) · second (s) · ampere (A) · kelvin (K) · mole (mol) · candela (cd)</p></div>
      </div>
      <div class="card flat sec" style="padding:10px 18px"><h2 class="h3" style="font-size:19px;padding:8px 0;margin:0">Prefixes</h2><div class="tbl" style="border:0;margin:0"><table class="const-table"><tr>${[['tera', 'T', '10¹²'], ['giga', 'G', '10⁹'], ['mega', 'M', '10⁶'], ['kilo', 'k', '10³'], ['centi', 'c', '10⁻²'], ['milli', 'm', '10⁻³'], ['micro', 'μ', '10⁻⁶'], ['nano', 'n', '10⁻⁹']].map(r => `<td><b>${r[1]}</b> ${r[0]}<br><span class="mono">${r[2]}</span></td>`).join('')}</tr></table></div></div>
      <div class="row sec" style="margin:24px 0 6px"><input id="eqf" type="search" placeholder="Filter by topic, e.g. momentum, λ, Snell…" aria-label="Filter equations" style="flex:1;min-width:200px;max-width:420px;padding:10px 12px;border-radius:10px;border:1px solid var(--line-2);background:var(--surface)"></div>
      <div class="eq-cols" id="eqlist">${allTopics().filter(t => t.eqs.length).map(t => `<div class="eq-card" data-s="${esc((t.id + ' ' + t.title + ' ' + t.eqs.map(e => e.join(' ')).join(' ')).toLowerCase())}"><h4><span class="dot" style="--uc:${ucol(t.unit)}"></span><a href="#/t/${t.id}" style="color:inherit;text-decoration:none">${t.id} ${esc(t.title)}</a></h4>${t.eqs.map(([e, d]) => `<div class="eq-row">${M(e)}<span class="d">${esc(d)}</span></div>`).join('')}</div>`).join('')}</div>`;
    $('#eqf').oninput = e => { const q = e.target.value.toLowerCase().trim(); $$('.eq-card', V()).forEach(c => c.hidden = q && !c.dataset.s.includes(q)); };
    $('#eqtest').onclick = () => { const on = $('#eqlists').classList.toggle('covered'); $('#eqtest').textContent = on ? 'Show the equations' : 'Cover the equations (self-test)'; };
    $('#eqlists').addEventListener('click', e => { const r = e.target.closest('.eq-row'); if (r && $('#eqlists').classList.contains('covered')) r.classList.toggle('peek'); });
  }

  /* ---------- LABS & TASKS ---------- */
  function practicals() {
    crumbs('<b>Labs &amp; tasks</b>');
    S.rp ??= [];
    V().innerHTML = `<h1 class="display" style="font-size:clamp(34px,5vw,54px)">Labs &amp; tasks</h1><p class="lede">The investigations and summative tasks named in the six unit plans. Labs are usually assessed with <b>Criterion B</b> (inquiring and designing) and <b>Criterion C</b> (processing and evaluating); some tasks also assess A and D. Use these as models — then write your own research question, hypothesis and method.</p>
      <div class="row" style="margin:6px 0 0"><a class="btn sm" href="#/t/S.2">How to write a lab report</a><a class="btn sm" href="#/criteria">Criteria descriptors</a></div>
      <div class="sec">${PRACTICALS.map(p => { const t = TOPIC[p.topic], u = unitOf(t.unit); return `<details class="prac" data-rp="${p.n}" style="--uc:${u.css}"><summary><span class="pno">L${p.n}</span><span><b>${esc(p.title)}</b> ${p.cr.split(', ').map(crTag).join(' ')}<br><span class="small muted">${u.code} · ${esc(p.aim)}</span></span>${ICON.chev}</summary><div class="pb">
        <h5>Variables</h5><ul>${p.vars.map(m => `<li>${rich(m)}</li>`).join('')}</ul>
        <h5>Method</h5><ol>${p.method.map(m => `<li>${rich(m)}</li>`).join('')}</ol><h5>Processing and analysis</h5><p style="margin:0">${rich(p.analysis)}</p><h5>Evaluation, safety and tips</h5><ul>${p.tips.map(m => `<li>${rich(m)}</li>`).join('')}</ul>
        <div class="row" style="margin-top:12px"><a class="btn sm" href="#/t/${p.topic}">Notes: ${p.topic} ${esc(t.title)}</a>${t.sims.length ? `<a class="btn sm primary" href="#/t/${p.topic}/explore">Try the simulation</a>` : ''}</div></div></details>`; }).join('')}</div>
      <div class="note-strip">The methods here are typical versions. Your school may use different apparatus — in MYP you are rewarded for designing and justifying your own method.</div>`;
    $$('details.prac').forEach(d => d.addEventListener('toggle', () => { if (d.open) { const n = +d.dataset.rp; if (!S.rp.includes(n)) { S.rp.push(n); save(); addXP(5, 'Lab'); checkBadges(); } } }));
  }

  /* ---------- ARCADE ---------- */
  function arcade() {
    crumbs('<b>Arcade</b>');
    V().innerHTML = `<h1 class="display" style="font-size:clamp(34px,5vw,54px)">Arcade</h1><p class="lede">Short, replayable games for the things that need to become automatic: units, equations, estimates and quick recall.</p>
      <div class="grid g3 sec">${Object.entries(GAMES).map(([id, g]) => `<a class="game-card" href="#/game/${id}"><div class="art"><canvas data-art="${id}"></canvas></div><div class="row" style="justify-content:space-between"><span class="eyebrow">${g.skill}</span><span class="pill">${S.games[id] ? 'best ' + S.games[id].best : 'new'}</span></div><div class="h3">${g.title}</div><p class="small muted" style="margin:0">${g.blurb}</p></a>`).join('')}
      <a class="game-card" href="#/daily"><div class="art" style="display:grid;place-items:center"><span style="font:800 44px var(--f-display);color:#FFB547">${new Date().getDate()}</span></div><div class="row" style="justify-content:space-between"><span class="eyebrow">Daily</span><span class="pill">${S.daily[today()] != null ? S.daily[today()] + '/5 today' : 'not played'}</span></div><div class="h3">Daily challenge</div><p class="small muted" style="margin:0">Five questions from across the course, the same for everyone today.</p></a></div>`;
    $$('[data-art]').forEach(cv => drawGameArt(cv, cv.dataset.art));
  }

  function daily() {
    crumbs('<a href="#/arcade" style="color:inherit">Arcade</a> / <b>Daily challenge</b>');
    let seed = +today().replace(/-/g, ''); const rng = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    const pool = coreTopics().flatMap(t => V_(t).quiz.map(q => ({ ...q, topic: t.id }))); const items = []; while (items.length < 5) { const q = pool[Math.floor(rng() * pool.length)]; if (!items.includes(q)) items.push(q); }
    V().innerHTML = `<div class="quiz-wrap" style="margin:0 auto"><h1 class="display" style="font-size:40px;margin-bottom:6px">Daily challenge</h1><p class="muted">${new Date().toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' })}</p><div id="qz" style="margin-top:18px"></div></div>`;
    runQuiz($('#qz'), items, { title: 'Daily', back: '#/home', onDone: r => { const first = S.daily[today()] == null; S.daily[today()] = Math.max(S.daily[today()] || 0, r.correct); save(); if (first) addXP(r.correct * 12 + 10, 'Daily challenge'); } });
  }

  /* ---------- UNIT TESTS ---------- */
  /* ---------- CRITERIA & GRADES ---------- */
  function criteria() {
    crumbs('<b>Criteria &amp; grades</b>');
    const us = UNITS.filter(u => u.id !== 'S');
    const draw = () => {
      const est = critEstimate();
      V().innerHTML = `<h1 class="display" style="font-size:clamp(34px,5vw,54px)">Criteria &amp; grades</h1><p class="lede">MYP sciences is assessed against four criteria, each with a maximum level of 8. Record the level you achieved (or estimate) for each criterion in each unit. The app takes a best-fit from your two most recent units for each criterion and converts the total out of 32 into an MYP grade.</p>
        <div class="grid g2 sec" style="align-items:start">
          <div class="card"><div class="eyebrow">Your levels by unit</div><div class="tbl" style="margin:10px 0 0"><table class="crit-table"><tr><th>Unit</th>${['A', 'B', 'C', 'D'].map(c => `<th title="${CRITERIA.find(x => x.c === c).name}">${c}</th>`).join('')}</tr>
            ${us.map(u => `<tr><td><a href="#/unit/${u.id}">${u.code}</a> <span class="small muted">${esc(u.short)}</span></td>${['A', 'B', 'C', 'D'].map(c => `<td><select data-u="${u.id}" data-c="${c}" aria-label="${u.code} criterion ${c}"><option value="">–</option>${[0, 1, 2, 3, 4, 5, 6, 7, 8].map(v => `<option ${S.crit[u.id]?.[c] === String(v) ? 'selected' : ''}>${v}</option>`).join('')}</select></td>`).join('')}</tr>`).join('')}
            <tr class="best"><td><b>Best fit</b></td>${['A', 'B', 'C', 'D'].map(c => `<td><b>${est.per[c] ?? '–'}</b></td>`).join('')}</tr></table></div>
            <p class="small muted" style="margin:10px 0 0">Not every task assesses every criterion — leave a cell blank if it was not assessed.</p></div>
          <div class="card"><div class="eyebrow">Estimated MYP grade</div><div style="font:800 72px/1 var(--f-display);margin:14px 0 4px;color:var(--accent-ink)">${est.grade}</div><p class="muted" style="margin:0 0 12px">${est.n === 4 ? `Total ${est.total} / 32` : `Enter a level for all four criteria (${est.n}/4 so far)`}</p>
            <div class="tbl" style="margin:0"><table><tr><th>Total</th>${GRADE_BOUNDS.map(([a, b]) => `<td class="mono">${a}–${b}</td>`).join('')}</tr><tr><th>Grade</th>${GRADE_BOUNDS.map(([a, b, g]) => `<td class="${est.n === 4 && est.total >= a && est.total <= b ? 'gr-on' : ''}"><b>${g}</b></td>`).join('')}</tr></table></div>
            <p class="small muted" style="margin:10px 0 0">General MYP grade boundaries. Final grades are decided by your teacher’s best-fit judgement across the year.</p></div></div>
        <div class="sec"><div class="sec-head"><h2 class="h2">What each criterion rewards</h2><span class="muted">Year 5 (Grade 10) · paraphrased</span></div>
          ${CRITERIA.map(cr => `<details class="prac crit" style="--uc:var(--u${'ABCD'.indexOf(cr.c) + 1})"><summary><span class="pno">${cr.c}</span><span><b>${esc(cr.name)}</b><br><span class="small muted">Maximum 8 · ${cr.strands.length} strands</span></span>${ICON.chev}</summary><div class="pb">
            <h5>Strands — at the highest level you…</h5><ol type="i">${cr.strands.map(s => `<li>${esc(s)}</li>`).join('')}</ol>
            <h5>Achievement levels</h5><div class="tbl"><table><tr><th>Level</th><th>The student is able to…</th></tr>${cr.levels.map((d, i) => `<tr><td class="mono">${i * 2 + 1}–${i * 2 + 2}</td><td>${esc(d)}</td></tr>`).join('')}</table></div>
            <div class="row" style="margin-top:8px">${cr.c === 'B' || cr.c === 'C' ? '<a class="btn sm" href="#/t/S.2">Lab reports</a><a class="btn sm" href="#/practicals">Labs &amp; tasks</a>' : cr.c === 'D' ? '<a class="btn sm" href="#/t/S.3">Criterion D guide</a>' : '<a class="btn sm" href="#/mock">Unit tests</a><a class="btn sm" href="#/t/S.1">Command terms</a>'}</div></div></details>`).join('')}</div>`;
      $$('select[data-u]').forEach(sel => sel.onchange = () => { S.crit[sel.dataset.u] ??= {}; if (sel.value === '') delete S.crit[sel.dataset.u][sel.dataset.c]; else S.crit[sel.dataset.u][sel.dataset.c] = sel.value; save(); draw(); refreshChrome(); });
    };
    draw();
  }
  const TESTS = { '12': ['Units 1–2 test', ['1', '2'], 40], '345': ['Units 3–5 test', ['3', '4', '5'], 50], '6': ['Unit 6 test', ['6'], 30], all: ['End-of-year exam', ['1', '2', '3', '4', '5', '6'], 60] };
  const testOf = key => TESTS[key] || (unitOf(key) && key !== 'S' ? [unitOf(key).code + ' written test', [key], 30] : null);
  function mock() {
    crumbs('<b>Unit tests</b>');
    V().innerHTML = `<h1 class="display" style="font-size:clamp(34px,5vw,54px)">Unit tests</h1><p class="lede">The course is assessed with combined tests — Units 1–2 after Unit 2, Units 3–5 after Unit 5 — and an end-of-year exam. Practise in two ways: a timed quick-fire test that marks itself, or a written test of structured questions that you self-mark.</p>
      <div class="sec"><div class="eyebrow" style="margin-bottom:8px">Written tests · self-marked · criterion-tagged</div><div class="grid g4">${Object.entries(TESTS).map(([k, [n, us, mk]]) => `<a class="card linkcard" href="#/mock/written/${k}"><div class="eyebrow">${us.length > 1 ? 'Units ' + us[0] + '–' + us[us.length - 1] : 'Unit ' + us[0]}</div><div class="h3" style="margin:6px 0">${n}</div><p class="small muted" style="margin:0">≈ ${mk} marks · about ${mk} minutes</p></a>`).join('')}</div></div>
      <div class="card sec" style="max-width:760px"><div class="eyebrow" style="margin-bottom:8px">Quick-fire test · multiple choice and calculations</div><form id="mockf" class="stack"><div class="row">
        ${Object.entries(TESTS).map(([k, [n]], i) => `<label class="pill" style="cursor:pointer;padding:6px 12px"><input type="radio" name="pp" value="${k}" ${i ? '' : 'checked'}> ${n}</label>`).join('')}</div>
      <div class="grid g3"><div><label class="eyebrow" for="mq">Questions</label><select id="mq" style="width:100%;margin-top:6px"><option>10</option><option selected>20</option><option>30</option></select></div><div><label class="eyebrow" for="mc">Calculations</label><select id="mc" style="width:100%;margin-top:6px"><option value="0.3" selected>30%</option><option value="0.5">50%</option><option value="0">None</option></select></div><div><label class="eyebrow" for="mt">Time</label><select id="mt" style="width:100%;margin-top:6px"><option value="60" selected>60 s per question</option><option value="40">40 s per question</option><option value="0">Untimed</option></select></div></div>
      <div><button class="btn primary" type="submit">${ICON.clock} Start quick-fire test</button></div></form></div>
      ${S.mocks?.length ? `<div class="sec"><div class="eyebrow">Recent results</div><div class="row" style="margin-top:8px">${S.mocks.slice(-10).reverse().map(m => `<span class="pill ${m.p >= 70 ? 'good' : m.p >= 40 ? 'warn' : 'bad'}">${m.d} · ${esc(m.u)} · ${m.p}%</span>`).join('')}</div></div>` : ''}`;
    $('#mockf').onsubmit = e => { e.preventDefault(); const key = $('input[name=pp]:checked').value, [name, us] = TESTS[key];
      const n = +$('#mq').value, cf = +$('#mc').value, tl = +$('#mt').value, ts = coreTopics().filter(t => us.includes(t.unit));
      const calcTopics = ts.filter(t => t.gens.length), nCalc = calcTopics.length ? Math.round(n * cf) : 0;
      const calcs = Array.from({ length: nCalc }, () => { const t = pick(calcTopics); return { type: 'num', ...GEN[pick(t.gens)](), topic: t.id }; });
      const mcqs = shuffle(ts.flatMap(t => t.quiz.map(q => ({ ...q, topic: t.id })))).slice(0, n - calcs.length);
      V().innerHTML = '<div class="quiz-wrap" style="margin:0 auto" id="qz"></div>';
      runQuiz($('#qz'), shuffle([...mcqs, ...calcs]), { mode: 'exam', title: name, timeLimit: tl ? tl * n : 0, back: '#/mock', retry: () => mock(), onDone: r => { S.stats.mocks++; S.mocks ??= []; S.mocks.push({ d: today(), u: name + ' (quick-fire)', p: r.p }); save(); addXP(r.correct * 12, 'Unit test'); checkBadges(); } });
    };
  }
  /* written test: structured questions drawn across the topics of the chosen units, up to a target number of marks */
  function writtenTest(key) {
    const tdef = testOf(key); if (!tdef) return mock();
    const [name, us, target] = tdef;
    crumbs(`<a href="#/mock" style="color:inherit">Unit tests</a> / <b>${esc(name)}</b>`);
    const topics = shuffle(coreTopics().filter(t => us.includes(t.unit) && t.exam.length));
    const queues = topics.map(t => shuffle(t.exam.map(q => ({ ...q, topic: t.id }))));
    const out = []; let total = 0, added = true;
    while (added && total < target) { added = false; for (const qq of queues) { const k = qq.findIndex(q => total + q.m <= target); if (k >= 0) { const [q] = qq.splice(k, 1); out.push(q); total += q.m; added = true; } if (total >= target) break; } }
    out.sort((a, b) => us.indexOf(TOPIC[a.topic].unit) - us.indexOf(TOPIC[b.topic].unit) || a.m - b.m);
    const crs = ['A', 'B', 'C', 'D'].map(c => [c, out.filter(q => (q.cr || 'A') === c).reduce((a, q) => a + q.m, 0)]).filter(x => x[1]);
    V().innerHTML = `<div class="eyebrow">${us.map(u => unitOf(u).code).join(' · ')}</div><h1 class="display" style="font-size:clamp(34px,5vw,54px);margin:6px 0 10px">${esc(name)}</h1>
      <p class="lede">${out.length} questions · ${total} marks · allow about ${total} minutes. Answer on paper or in the boxes, then reveal each mark scheme and tick the points you earned.</p>
      <div class="row" style="margin:10px 0 0">${crs.map(([c, m]) => `<span class="pill">${crTag(c)} ${m} marks</span>`).join('')}<button class="btn sm" id="newtest">${ICON.shuffle} New set of questions</button></div>
      <div id="wt" class="sec"></div><div id="wtres" class="sec"></div>`;
    const finish = () => { const got = $$('.examq[data-got]').reduce((a, el) => a + +el.dataset.got, 0), done = $$('.examq[data-got]').length, p = Math.round(got / total * 100);
      $('#wtres').innerHTML = `<div class="card result"><div class="eyebrow">${done} of ${out.length} questions marked</div><div class="big">${got}/${total}</div><p class="lede" style="margin:6px auto 0">${p}% · indicative Criterion A level ${p >= 90 ? 8 : p >= 80 ? 7 : p >= 70 ? 6 : p >= 60 ? 5 : p >= 50 ? 4 : p >= 40 ? 3 : p >= 30 ? 2 : p >= 15 ? 1 : 0} (a rough guide — your teacher uses the criterion descriptors)</p>${done === out.length ? '' : '<p class="small muted">Mark every question to finish the test.</p>'}</div>`;
      if (done === out.length && !V().dataset.saved) { V().dataset.saved = 1; S.stats.mocks++; S.mocks ??= []; S.mocks.push({ d: today(), u: name + ' (written)', p }); save(); addXP(20, 'Written test'); checkBadges(); } };
    examList($('#wt'), out, { intro: '', onSave: finish });
    $('#newtest').onclick = () => { delete V().dataset.saved; writtenTest(key); };
    delete V().dataset.saved;
  }

  /* ---------- PROGRESS ---------- */
  function progress() {
    crumbs('<b>Progress</b>');
    const L = level(), days = Array.from({ length: 14 }, (_, i) => { const d = new Date(Date.now() - (13 - i) * 864e5); const k = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); return [d, S.days[k] || 0]; });
    const mx = Math.max(50, ...days.map(d => d[1]));
    const chart = `<svg viewBox="0 0 560 170" width="100%" role="img" aria-label="XP earned over the last 14 days" style="max-width:100%">${[0, .5, 1].map(f => `<line x1="34" x2="556" y1="${140 - f * 120}" y2="${140 - f * 120}" stroke="var(--line)" stroke-width="1"/><text x="28" y="${144 - f * 120}" text-anchor="end" font-size="10" fill="var(--muted)" font-family="var(--f-mono)">${Math.round(mx * f)}</text>`).join('')}${days.map(([d, v], i) => { const hh = v / mx * 120; return `<rect x="${40 + i * 37}" y="${140 - hh}" width="26" height="${Math.max(hh, 1)}" rx="4" fill="${i === 13 ? 'var(--accent)' : 'var(--u4)'}" opacity="${v ? 1 : .25}"><title>${v} XP</title></rect><text x="${53 + i * 37}" y="158" text-anchor="middle" font-size="10" fill="var(--muted)" font-family="var(--f-mono)">${d.getDate()}</text>`; }).join('')}</svg>`;
    V().innerHTML = `<h1 class="display" style="font-size:clamp(34px,5vw,54px)">Progress</h1>
      <div class="grid g4 sec">${[['Level', L.l, L.name], ['Total XP', S.xp, `${Math.max(0, Math.round(L.next - S.xp))} to next level`], ['Streak', S.streak.n || 0, 'days in a row'], ['Lamps lit', coreTopics().filter(t => mastery(t) >= .7).length + '/' + coreTopics().length, 'topics at 70%+']].map(([a, b, c]) => `<div class="card"><div class="eyebrow">${a}</div><div style="font:800 44px/1.05 var(--f-display);margin-top:6px">${b}</div><div class="small muted">${c}</div></div>`).join('')}</div>
      <div class="grid g2 sec" style="align-items:start"><div class="card"><div class="eyebrow">XP · last 14 days</div><div style="margin-top:10px">${chart}</div></div>
      <div class="card"><div class="eyebrow">Topic mastery</div><p class="small muted" style="margin:6px 0 10px">Each tile is a topic. Brighter = stronger.</p><div class="heat">${allTopics().map(t => { const m = mastery(t); return `<a href="#/t/${t.id}" title="${esc(t.title)}: ${pct(m)}" style="background:color-mix(in srgb, ${ucol(t.unit)} ${Math.round(8 + m * 80)}%, var(--surface));${m > .5 ? 'color:#fff;border-color:transparent' : ''}">${t.id}</a>`; }).join('')}</div></div></div>
      <div class="sec"><div class="sec-head"><h2 class="h2">Badges</h2><span class="muted">${S.badges.length} of ${BADGES.length} earned</span></div><div class="badge-grid">${BADGES.map(([id, n, d, , ic]) => `<div class="badge ${S.badges.includes(id) ? 'got' : ''}"><div class="ic">${ic}</div><b>${n}</b><span>${d}</span></div>`).join('')}</div></div>
      <div class="sec grid g3">${[['Quizzes finished', S.stats.quizzes], ['Calculations correct', S.stats.calcOK], ['Flashcards reviewed', S.stats.cardsSeen], ['Simulations tried', S.stats.sims.length], ['Mock exams', S.stats.mocks], ['Exam marks self-assessed', S.stats.examMarks]].map(([a, b]) => `<div class="card flat row" style="justify-content:space-between"><span>${a}</span><b class="mono" style="font-size:20px">${b}</b></div>`).join('')}</div>
      <div class="sec card flat"><div class="eyebrow">Your data</div><p class="small muted">Progress is stored only in this browser. You can copy it as a backup and paste it back later, or on another device.</p><div class="row"><button class="btn sm" id="exp">Copy backup</button><button class="btn sm" id="imp">Restore from backup</button><button class="btn sm" id="rst" style="color:var(--bad)">Reset all progress</button></div><div id="datazone"></div></div>`;
    $('#exp').onclick = () => { const txt = JSON.stringify(S); navigator.clipboard?.writeText(txt).then(() => toast('Backup copied to clipboard'), () => { $('#datazone').innerHTML = `<textarea style="width:100%;min-height:100px;margin-top:10px" readonly>${esc(txt)}</textarea>`; $('#datazone textarea').select(); }); if (!navigator.clipboard) { $('#datazone').innerHTML = `<textarea style="width:100%;min-height:100px;margin-top:10px" readonly>${esc(txt)}</textarea>`; } };
    $('#imp').onclick = () => { $('#datazone').innerHTML = `<textarea id="impt" aria-label="Paste backup" placeholder="Paste your backup here" style="width:100%;min-height:100px;margin-top:10px;padding:10px;border-radius:10px;border:1px solid var(--line-2);background:var(--surface-2)"></textarea><button class="btn sm primary" id="impgo" style="margin-top:8px">Restore</button>`; $('#impgo').onclick = () => { try { const d = JSON.parse($('#impt').value); if (typeof d !== 'object' || d.xp == null) throw 0; Object.keys(S).forEach(k => delete S[k]); Object.assign(S, d); save(); toast('Progress restored'); route(); } catch (e) { toast('That backup could not be read. Paste the full text you copied.'); } }; };
    $('#rst').onclick = () => { $('#datazone').innerHTML = `<div class="box warn" style="margin-top:12px"><b class="lbl">Are you sure?</b><p>This permanently deletes all XP, scores, flashcard boxes and badges in this browser.</p><div class="row"><button class="btn sm" id="rsty" style="background:var(--bad);color:#fff;border-color:var(--bad)">Delete everything</button><button class="btn sm" id="rstn">Cancel</button></div></div>`; $('#rstn').onclick = () => $('#datazone').innerHTML = ''; $('#rsty').onclick = () => { try { localStorage.removeItem(STORE_KEY); } catch (e) { } location.hash = '#/home'; location.reload(); }; };
  }

  /* ---------- ABOUT ---------- */
  function about() {
    crumbs('<b>About &amp; help</b>');
    V().innerHTML = `<div class="notes"><h1 class="display" style="font-size:clamp(34px,5vw,54px);margin-bottom:12px">About MYP</h1>
      <p class="lede">A study companion for concept-based MYP Physics in Grade 10 (MYP year 5). The six units, their conceptual understandings, global contexts, strands, inquiry questions, approaches to learning, applications and skills, and assessment tasks follow the <i>Concept Based Physics (G10)</i> unit plans.</p>
      <section><h3>The six units</h3><div class="tbl"><table><tr><th>Unit</th><th>Global context</th><th>Key concepts</th><th>Assessment</th></tr>${UNITS.filter(u => u.id !== 'S').map(u => `<tr><td><a href="#/unit/${u.id}">${u.code}: ${esc(u.name)}</a></td><td>${esc(u.gc[0])}</td><td>${u.kc.join(', ')}</td><td class="small">${u.id === '1' || u.id === '2' ? 'Combined Units 1–2 test' : u.id === '6' ? 'End-of-year exam' : 'Combined Units 3–5 test'}</td></tr>`).join('')}</table></div></section>
      <section><h3>How to study a unit</h3><ol><li>Open the <b>unit page</b>: read the conceptual understanding and try to answer the inquiry questions before revealing the model answers. Debatable questions show two perspectives — decide where you stand.</li><li>Work through each <b>topic</b>: Learn → Explore (simulations) → Flashcards → Quiz → Calculate → Exam questions. Rate yourself on the applications &amp; skills checklist.</li><li>Do the <b>labs and tasks</b> for criteria B and C, and the Criterion D questions.</li><li>Take a <b>unit test</b>, then record your criterion levels on <a href="#/criteria">Criteria &amp; grades</a>.</li></ol></section>
      <section><h3>Mastery and your circuit</h3><p>Topic mastery combines your best quiz score (40%), flashcards known (20%), checklist confidence (20%) and correct calculations (20%). A topic’s lamp glows at full brightness as mastery approaches 100%; 70% counts as “lit”.</p></section>
      <section><h3>Keyboard shortcuts</h3><div class="tbl"><table><tr><th>Key</th><th>Action</th></tr><tr><td><kbd>/</kbd> or <kbd>Ctrl</kbd>+<kbd>K</kbd></td><td>Search everything</td></tr><tr><td><kbd>A</kbd>–<kbd>D</kbd> / <kbd>1</kbd>–<kbd>4</kbd></td><td>Answer a quiz question</td></tr><tr><td><kbd>Enter</kbd></td><td>Next question</td></tr><tr><td><kbd>Space</kbd></td><td>Flip a flashcard</td></tr><tr><td><kbd>1</kbd>–<kbd>4</kbd> (flipped card)</td><td>Rate: again / hard / good / easy</td></tr></table></div></section>
      <section><h3>About the content</h3><div class="box why"><b class="lbl">Please note</b><p>The unit structure comes from the <i>Concept Based Physics (G10)</i> unit plans (sites.google.com/view/concept-based-physics). The notes, model answers, questions, mark schemes and lab guides were written for this app; some notes are adapted from the Live Wire GCSE physics app. They are not official IB materials, and the criteria descriptors are paraphrased — always follow your teacher’s task-specific clarifications. Conventions: g = 9.8 N/kg; SI units.</p></div></section>
      <section><h3>Your data</h3><p>Everything you do is stored in this browser only. Use <a href="#/progress">Progress</a> to back up or restore.</p></section></div>`;
  }

  /* ---------- Search palette ---------- */
  let index = null;
  function buildIndex() {
    index = [];
    allTopics().forEach(t => { index.push({ k: 'Topic', t: `${t.id} ${t.title}`, s: t.short, h: `#/t/${t.id}`, x: (t.id + ' ' + t.title + ' ' + t.short + ' ' + t.summary).toLowerCase() });
      t.learn.forEach(l => index.push({ k: 'Notes', t: l.h.replace(/<[^>]+>/g, ''), s: `${t.id} ${t.title}`, h: `#/t/${t.id}`, x: (l.h + ' ' + l.html.replace(/<[^>]+>/g, ' ')).toLowerCase() }));
      t.eqs.forEach(([e, d]) => index.push({ k: 'Equation', t: M(e), s: `${d || ''} · ${t.id}`, h: `#/t/${t.id}`, x: (e + ' ' + d + ' ' + t.title).toLowerCase(), raw: true }));
      t.cards.forEach(([q, a]) => index.push({ k: 'Card', t: q.replace(/<[^>]+>/g, ''), s: a.replace(/<[^>]+>/g, '').slice(0, 80), h: `#/t/${t.id}/cards`, x: (q + ' ' + a).toLowerCase() })); });
    UNITS.forEach(u => u.strands.forEach(s => s.iq.forEach(q => index.push({ k: 'Inquiry', t: q[0], s: `${u.code} · ${IQ_TYPE[q[1]]}`, h: `#/unit/${u.id}`, x: (q[0] + ' ' + u.name).toLowerCase() }))));
    PRACTICALS.forEach(p => index.push({ k: 'Lab', t: 'L' + p.n + ' ' + p.title, s: p.aim, h: '#/practicals', x: (p.title + ' ' + p.aim).toLowerCase() }));
    Object.entries(GAMES).forEach(([id, g]) => index.push({ k: 'Game', t: g.title, s: g.blurb, h: '#/game/' + id, x: (g.title + ' ' + g.blurb).toLowerCase() }));
    [['Equations', '#/equations'], ['Labs & tasks', '#/practicals'], ['Criteria & grades', '#/criteria'], ['Unit tests', '#/mock'], ['Progress', '#/progress'], ['Daily challenge', '#/daily']].forEach(([t, hh]) => index.push({ k: 'Page', t, s: '', h: hh, x: t.toLowerCase() }));
  }
  function openPalette() {
    if ($('.palette-back')) return; index || buildIndex();
    const back = h('div', { class: 'palette-back', role: 'dialog', 'aria-label': 'Search' }, `<div class="palette"><input id="pal" placeholder="Search topics, notes, equations, flashcards…" aria-label="Search" autocomplete="off"><ul id="palres"></ul></div>`);
    document.body.append(back); const inp = $('#pal'), ul = $('#palres'); let sel = 0, res = [];
    const close = () => back.remove();
    const show = () => { const q = inp.value.toLowerCase().trim(); const terms = q.split(/\s+/).filter(Boolean);
      res = q ? index.filter(it => terms.every(w => it.x.includes(w))).sort((a, b) => ({ Topic: 0, Page: 1, Equation: 2, Inquiry: 3, Notes: 3, Lab: 4, Game: 5, Card: 6 }[a.k] - { Topic: 0, Page: 1, Equation: 2, Inquiry: 3, Notes: 3, Lab: 4, Game: 5, Card: 6 }[b.k])).slice(0, 40) : index.filter(it => it.k === 'Topic' || it.k === 'Page').slice(0, 14);
      sel = 0; ul.innerHTML = res.length ? res.map((r, i) => `<li><a href="${r.h}" class="${i === sel ? 'sel' : ''}"><span class="kind">${r.k}</span><span><span class="t">${r.raw ? r.t : esc(r.t)}</span><br><span class="s">${esc(r.s)}</span></span><span class="muted">↵</span></a></li>`).join('') : '<li class="empty" style="margin:8px">No matches. Try a symbol like λ or a word like “friction”.</li>'; };
    inp.oninput = show; show(); inp.focus();
    back.onclick = e => { if (e.target === back) close(); if (e.target.closest('a')) close(); };
    inp.onkeydown = e => { const as = $$('a', ul); if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); sel = clamp(sel + (e.key === 'ArrowDown' ? 1 : -1), 0, as.length - 1); as.forEach((a, i) => a.classList.toggle('sel', i === sel)); as[sel]?.scrollIntoView({ block: 'nearest' }); } else if (e.key === 'Enter') { as[sel] && (location.hash = as[sel].getAttribute('href')); close(); } else if (e.key === 'Escape') close(); };
  }

  function init() {
    if (S.settings.theme) document.documentElement.dataset.theme = S.settings.theme;
    chrome(); touchStreak();
    addEventListener('hashchange', route);
    addEventListener('keydown', e => { if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !e.target.matches('input,textarea,select'))) { e.preventDefault(); openPalette(); } if (e.key === 'Escape') { $('.palette-back')?.remove(); toggleSide(false); } });
    matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', () => { refreshSimTheme(); refreshChrome(); });
    route();
  }
  return { init, route, refreshChrome };
})();
window.App = App;
