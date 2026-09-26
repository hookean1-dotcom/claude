/* ==========================================================
   Live Wire · application shell, router and views (AQA GCSE Physics 8463)
   ========================================================== */
const TOPIC = Object.fromEntries(TOPICS.map(t => [t.id, t]));
/* scope helpers: tier (F/H) and course (separate Physics / Combined Science) */
const specFlag = sp => (/\(HT\)/.test(sp) ? 'ht' : '') + (/\(PO\)/.test(sp) ? 'po' : '');
const specTxt = sp => sp.replace(/\((HT|PO)\)\s*/g, '');
const tagHTML = (f, small) => (f.includes('ht') ? `<span class="tag ht${small ? ' sm' : ''}">Higher</span>` : '') + (f.includes('po') ? `<span class="tag po${small ? ' sm' : ''}">Physics only</span>` : '');
const flagOf = o => (o.ht ? 'ht' : '') + (o.po ? 'po' : '');
const vis = t => inScope(t) && (t.unit !== '8' || S.settings.course !== 'comb');
const V_ = t => ({ quiz: t.quiz.filter(inScope), cards: t.cards.filter(c => inScope(c[2] || '')), exam: t.exam.filter(inScope), worked: t.worked.filter(inScope), gens: t.gens.filter(g => inScope(GEN_FLAGS[g] || '')), spec: t.spec.map((sp, i) => [sp, i]).filter(([sp]) => inScope(specFlag(sp))) });
const allTopics = () => TOPICS.filter(vis);
const coreTopics = () => TOPICS.filter(t => t.unit !== 'S' && vis(t));
const unitTopics = uid => TOPICS.filter(t => t.unit === uid && vis(t));
const fmtAns = x => Number.isInteger(x) ? String(x) : sf(x, 3);
const ucol = uid => unitOf(uid)?.css || 'var(--accent)';
S.stats ??= { quizzes: 0, perfect: 0, calcOK: 0, cardsSeen: 0, sims: [], mocks: 0, examMarks: 0 };
S.daily ??= {};

function mastery(t) {
  const s = T(t.id), q = (s.quiz || 0) / 100, v = V_(t);
  const ck = t.cards.length ? Object.entries(s.cards).filter(([i, b]) => b >= 3 && inScope(t.cards[i]?.[2] || '')).length / Math.max(1, v.cards.length) : 0;
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
  ['calc50', 'Equation sheet', '50 correct calculations', () => S.stats.calcOK >= 50, '='],
  ['cards50', 'Memory store', 'Review 50 flashcards', () => S.stats.cardsSeen >= 50, '≡'],
  ['sims5', 'Experimenter', 'Try 5 simulations', () => S.stats.sims.length >= 5, 'λ'],
  ['sims20', 'Lab technician', 'Try 20 simulations', () => S.stats.sims.length >= 20, 'Φ'],
  ['rp10', 'Required practicals', 'Open all 10 required practicals', () => (S.rp || []).length >= 10, 'RP'],
  ['mock', 'Under exam conditions', 'Complete a mock exam', () => S.stats.mocks >= 1, '⏱'],
  ['exam', 'Examiner’s eye', 'Self-mark 25 exam marks', () => S.stats.examMarks >= 25, 'M'],
  ['p1', 'Paper 1 powered', '70% mastery across Paper 1 topics', () => ['1', '2', '3', '4'].every(u => unitMastery(u) >= .7), '1'],
  ['p2', 'Paper 2 powered', '70% mastery across Paper 2 topics', () => ['5', '6', '7'].every(u => unitMastery(u) >= .7), '2'],
  ['lvl5', 'Motor effect', 'Reach level 5', () => level().l >= 5, '★'],
  ['lvl10', 'National Grid', 'Reach level 10', () => level().l >= 10, '⚡']
];
function checkBadges() { BADGES.forEach(([id, name, , test]) => { if (!S.badges.includes(id) && test()) { S.badges.push(id); save(); setTimeout(() => { toast(`<b>Badge</b> ${esc(name)}`, 3200); sfx.win(); }, 400); } }); }

const App = (() => {
  let cleanup = null, lastTopic = null;
  const V = () => $('#view');
  const go = h => { location.hash = h; };

  /* ---------- chrome ---------- */
  function chrome() {
    const nav = [['home', 'Home', '#/home'], ['map', 'All topics', '#/topics'], ['eq', 'Equations', '#/equations'], ['flask', 'Required practicals', '#/practicals'], ['game', 'Arcade', '#/arcade'], ['clock', 'Mock exam', '#/mock'], ['chart', 'Progress', '#/progress']];
    $('#side').innerHTML = `<a class="brand" href="#/home" aria-label="Live Wire home"><span class="brand-mark lw">${ICON.bolt}</span><span><span class="brand-name">Live Wire</span><br><span class="brand-sub">AQA GCSE Physics</span></span></a>
      <nav class="nav" aria-label="Main">${nav.map(([ic, l, h]) => `<a href="${h}" data-nav="${h}">${ICON[ic]}<span>${l}</span></a>`).join('')}
      <div class="nav-label">Paper 1</div>${UNITS.filter(u => u.paper === 1).map(uLink).join('')}
      <div class="nav-label">Paper 2</div>${UNITS.filter(u => u.paper === 2).map(uLink).join('')}
      <div class="nav-label">Both papers</div>${UNITS.filter(u => u.paper === 0).map(uLink).join('')}
      <div class="nav-label">More</div><a href="#/about" data-nav="#/about">${ICON.atom}<span>About &amp; help</span></a></nav>
      <div class="side-foot">Built around the AQA GCSE Physics (8463) specification. Progress is saved in this browser.</div>`;
    $('#tabbar').innerHTML = [['home', 'Home', '#/home'], ['map', 'Topics', '#/topics'], ['eq', 'Equations', '#/equations'], ['game', 'Arcade', '#/arcade'], ['chart', 'Progress', '#/progress']].map(([ic, l, h]) => `<a href="${h}" data-nav="${h}">${ICON[ic]}<span>${l}</span></a>`).join('');
    $('#search-btn').innerHTML = `${ICON.search}<span>Search topics, equations…</span><kbd>/</kbd>`;
    $('#menu-btn').innerHTML = ICON.menu;
    $('#menu-btn').onclick = () => toggleSide(true);
    $('#search-btn').onclick = openPalette;
    $('#theme-btn').onclick = toggleTheme;
    $('#tier-chip').onclick = openSettings;
    $('#sound-btn').onclick = () => { S.settings.sound = !S.settings.sound; save(); refreshChrome(); if (S.settings.sound) sfx.good(); };
    refreshChrome();
  }
  const uLink = u => `<a class="unit-a${u.po && S.settings.course === 'comb' ? ' off' : ''}" href="#/unit/${u.id}" data-nav="#/unit/${u.id}" style="--uc:${u.css}"><span class="unit-line" style="color:${u.css}"></span><span style="min-width:0"><span>${u.code}</span><small>${esc(u.name)}</small></span><span class="meter" data-um="${u.id}"></span></a>`;
  function openSettings() {
    if ($('.palette-back')) return;
    const back = h('div', { class: 'palette-back', role: 'dialog', 'aria-label': 'Course settings' }, `<div class="palette settings-dlg"><h2 class="h3" style="margin:0 0 4px">Your course</h2><p class="small muted" style="margin:0 0 14px">Live Wire hides anything that is not in your exam. You can change this at any time.</p>
      <div class="eyebrow">Tier</div><div class="seg big" data-k="tier"><button data-v="F" class="${S.settings.tier === 'F' ? 'on' : ''}">Foundation</button><button data-v="H" class="${S.settings.tier === 'H' ? 'on' : ''}">Higher</button></div>
      <p class="small muted" style="margin:6px 0 16px">Foundation hides content marked “Higher tier only” (HT) in the specification.</p>
      <div class="eyebrow">Course</div><div class="seg big" data-k="course"><button data-v="sep" class="${S.settings.course === 'sep' ? 'on' : ''}">GCSE Physics (8463)</button><button data-v="comb" class="${S.settings.course === 'comb' ? 'on' : ''}">Combined Science: Trilogy</button></div>
      <p class="small muted" style="margin:6px 0 16px">Combined Science hides content marked “physics only”, including all of Space physics and Required practicals 2 and 9. Trilogy papers use different numbering and paper lengths — check with your teacher.</p>
      <div class="row" style="justify-content:flex-end"><button class="btn primary" id="set-done">Done</button></div></div>`);
    document.body.append(back);
    $$('.seg[data-k]', back).forEach(sg => sg.onclick = e => { const b = e.target.closest('button'); if (!b) return; S.settings[sg.dataset.k] = b.dataset.v; save(); $$('button', sg).forEach(x => x.classList.toggle('on', x === b)); });
    const close = () => { back.remove(); index = null; chrome(); route(); };
    $('#set-done').onclick = close; back.onclick = e => { if (e.target === back) close(); };
  }
  function toggleSide(open) { const s = $('#side'); s.classList.toggle('open', open); let scrim = $('.scrim'); if (open && !scrim) { scrim = h('div', { class: 'scrim', onclick: () => toggleSide(false) }); document.body.append(scrim); } if (!open && scrim) scrim.remove(); }
  function isDark() { const t = document.documentElement.dataset.theme; return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches; }
  function toggleTheme() { const next = isDark() ? 'light' : 'dark'; document.documentElement.dataset.theme = next; S.settings.theme = next; save(); refreshChrome(); refreshSimTheme(); if (location.hash.startsWith('#/home') || !location.hash) route(); }
  function refreshChrome() {
    const L = level();
    $('#xp-chip').innerHTML = `<span style="color:var(--accent-ink)">${ICON.star.replace('<svg', '<svg width="14" height="14" style="stroke:currentColor;fill:none;stroke-width:2"')}</span>Lv ${L.l} · ${S.xp} XP`;
    $('#streak-chip').innerHTML = `<span aria-hidden="true" style="color:var(--u1)">●</span> ${S.streak.n || 0}-day streak`;
    $('#theme-btn').innerHTML = isDark() ? ICON.sun : ICON.moon; $('#theme-btn').title = isDark() ? 'Light theme' : 'Dark theme';
    $('#sound-btn').innerHTML = S.settings.sound ? ICON.sound : ICON.mute; $('#sound-btn').title = S.settings.sound ? 'Sound on' : 'Sound off';
    $('#tier-chip').innerHTML = `${S.settings.tier === 'H' ? 'Higher' : 'Foundation'} · ${S.settings.course === 'sep' ? 'Physics' : 'Combined'}`; $('#tier-chip').title = 'Change tier or course';
    $$('[data-um]').forEach(e => e.textContent = pct(unitMastery(e.dataset.um)));
    const hsh = location.hash || '#/home'; $$('[data-nav]').forEach(a => a.classList.toggle('on', hsh === a.dataset.nav || (a.dataset.nav !== '#/home' && hsh.startsWith(a.dataset.nav + '/')) || (a.dataset.nav.startsWith('#/unit/') && hsh.startsWith('#/t/') && TOPIC[hsh.split('/')[2]]?.unit === a.dataset.nav.split('/')[2])));
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
      else if (a === 'arcade') arcade();
      else if (a === 'game' && GAMES[b]) { crumbs(`<a href="#/arcade" style="color:inherit">Arcade</a> / <b>${GAMES[b].title}</b>`); V().innerHTML = '<div id="g"></div>'; cleanup = mountGame($('#g'), b); }
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
    const bank = EQ_RECALL.filter(e => inScope(e[2] || '')), eqd = bank[Math.floor(Date.now() / 864e5) % bank.length];
    const dDone = S.daily[today()];
    const first = !S.settings.chosen;
    V().innerHTML = `
    ${first ? `<div class="card sec onboard"><div class="eyebrow">Welcome to Live Wire</div><h2 class="h3" style="margin:6px 0">Which exam are you taking?</h2><p class="small muted" style="margin:0 0 12px">Everything in the app follows the AQA specification. Tell us your tier and course and we’ll hide anything you won’t be examined on.</p>
      <div class="row"><button class="btn" data-ob="H,sep">Physics · Higher</button><button class="btn" data-ob="F,sep">Physics · Foundation</button><button class="btn" data-ob="H,comb">Combined Science · Higher</button><button class="btn" data-ob="F,comb">Combined Science · Foundation</button></div></div>` : ''}
    <section class="hero" aria-label="Your progress circuit">
      <div class="hero-grid">
        <div><div class="eyebrow">AQA GCSE Physics · ${S.settings.tier === 'H' ? 'Higher' : 'Foundation'} tier · Level ${L.l} ${L.name}</div>
          <h1 class="display" style="margin-top:10px">Light up every bulb.</h1>
          <p>Each of the ${CORE.length} topics is a lamp in your circuit. Learn it, explore the simulation, drill the questions — and watch it glow.</p>
          <div class="row" style="margin-top:18px">${last && vis(last) ? `<a class="btn accent" href="#/t/${last.id}">${ICON.play} Continue ${last.id} ${esc(last.title)}</a>` : `<a class="btn accent" href="#/t/1.1">${ICON.play} Start with 1.1 Energy stores</a>`}
          <a class="btn" href="#/daily">${dDone != null ? `Daily challenge ✓ ${dDone}/5` : 'Daily challenge'}</a></div></div>
        <div class="hero-stats"><div class="hstat"><b>${S.xp}</b><span>XP</span></div><div class="hstat"><b>${S.streak.n || 0}</b><span>day streak</span></div><div class="hstat"><b>${mastered}<small style="font-size:16px;color:#8FA2B1">/${CORE.length}</small></b><span>lamps lit</span></div></div>
      </div>
      <canvas class="spec circuit" id="spec" aria-label="Circuit: one lamp per topic, brightness shows mastery"></canvas>
      <div id="spec-tip" class="mono" style="min-height:18px;margin-top:6px;font-size:12px;color:#B9C6D0"></div>
    </section>
    <div class="sec"><div class="sec-head"><h2 class="h2">Paper 1</h2><span class="muted">1 h 45 min · 100 marks · 50% of the GCSE</span></div>
      <div class="grid g4">${UNITS.filter(u => u.paper === 1).map(unitCard).join('')}</div></div>
    <div class="sec"><div class="sec-head"><h2 class="h2">Paper 2</h2><span class="muted">1 h 45 min · 100 marks · 50% of the GCSE</span></div>
      <div class="grid g4">${UNITS.filter(u => u.paper === 2).map(unitCard).join('')}</div></div>
    <div class="sec grid g3">
      <div class="card"><div class="eyebrow">Recommended next</div><div class="stack" style="margin-top:12px">${rec.map(({ t, m }) => `<a class="tcard" href="#/t/${t.id}" style="--uc:${ucol(t.unit)}"><span class="no" style="font-size:24px;min-width:40px">${t.id}</span><span class="tt">${esc(t.title)}</span><span class="ts">${pct(m)} mastery</span></a>`).join('')}</div></div>
      <div class="card"><div class="eyebrow">Equation of the day · recall</div><div class="eqbig" style="margin:22px 0 10px;text-align:center">${M(eqd[1])}</div><p class="muted" style="text-align:center;margin:0">${esc(eqd[0])}</p><div class="row" style="justify-content:center;margin-top:16px"><a class="btn sm" href="#/game/rush">Play Equation Rush</a></div></div>
      <div class="card"><div class="eyebrow">Exam countdown</div>${countdown()}</div>
    </div>
    <div class="sec grid g2"><a class="card linkcard" href="#/practicals"><div class="eyebrow">At least 15% of the marks</div><div class="h3" style="margin:6px 0">The ${S.settings.course === 'comb' ? 8 : 10} required practicals</div><p class="small muted" style="margin:0">Method, variables, safety and analysis for every required practical — each linked to its simulation.</p></a>
      <a class="card linkcard" href="#/t/S.2"><div class="eyebrow">At least 30% of the marks</div><div class="h3" style="margin:6px 0">Maths skills</div><p class="small muted" style="margin:0">Standard form, rearranging, graphs, tangents and areas — with unlimited practice.</p></a></div>`;
    $$('[data-ob]').forEach(b => b.onclick = () => { const [t, c] = b.dataset.ob.split(','); S.settings.tier = t; S.settings.course = c; S.settings.chosen = true; save(); index = null; chrome(); route(); });
    const cv = $('#spec'); cleanup = drawCircuit(cv);
    const inp = $('#exam-date'); if (inp) inp.onchange = () => { S.settings.examDate = inp.value; save(); route(); };
  }
  const unitCard = u => { const ts = unitTopics(u.id), m = unitMastery(u.id), off = u.po && S.settings.course === 'comb';
    return `<a class="unit-card${off ? ' off' : ''}" href="#/unit/${u.id}" style="--uc:${u.css}"><span class="line"></span><div class="row" style="justify-content:space-between"><span class="eyebrow">${u.code}</span>${u.po ? tagHTML('po', 1) : ''}</div><div class="h3">${esc(u.name)}</div><div class="small muted">${off ? 'Not in Combined Science' : `${ts.length} topics · ${ts.reduce((a, t) => a + V_(t).quiz.length, 0)} questions`}</div><div class="bar"><i style="width:${m * 100}%"></i></div><div class="small mono">${pct(m)} mastered</div></a>`; };
  function countdown() {
    const d = S.settings.examDate, days = d ? Math.ceil((new Date(d + 'T09:00') - Date.now()) / 864e5) : null;
    return `<div style="font:800 64px/1 var(--f-display);margin:16px 0 4px;color:var(--accent-ink)">${days != null ? Math.max(0, days) : '—'}</div><div class="muted small">${days != null ? 'days until Paper 1' : 'Set the date of Paper 1'}</div><label class="small muted" for="exam-date" style="display:block;margin-top:14px">Exam date</label><input id="exam-date" type="date" value="${d || ''}" style="margin-top:4px;padding:8px 10px;border-radius:9px;border:1px solid var(--line-2);background:var(--surface)">`;
  }
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
        c.font = '600 11px IBM Plex Mono, monospace'; c.textBaseline = 'middle'; c.textAlign = 'left'; c.fillStyle = '#0B1117'; const lab = W > 560 ? (u.id === 'S' ? 'Skills' : u.code + ' ' + u.short) : (u.id === 'S' ? 'Sk' : u.code), lw = c.measureText(lab).width; c.fillRect(g.x0 + 8, y - 8, lw + 8, 16); c.fillStyle = hexA(col, .95); c.fillText(lab, g.x0 + 12, y);
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
  const tcard = t => { const m = mastery(t); return `<a class="tcard" href="#/t/${t.id}" style="--uc:${ucol(t.unit)}"><span class="no">${t.id}</span><span class="tt">${esc(t.title)} ${tagHTML(flagOf(t), 1)}</span><span class="ts">${esc(t.short)}</span><span class="bar"><i style="width:${m * 100}%"></i></span></a>`; };
  const hiddenNote = uid => { const n = TOPICS.filter(t => (uid ? t.unit === uid : true) && !vis(t)).length; return n ? `<div class="note-strip">${n} topic${n > 1 ? 's are' : ' is'} hidden because ${n > 1 ? 'they are' : 'it is'} not in your exam (${S.settings.tier === 'F' ? 'Foundation tier' : 'Higher tier'} · ${S.settings.course === 'comb' ? 'Combined Science' : 'Physics'}). <a href="javascript:void 0" data-settings>Change</a></div>` : ''; };
  function topics() {
    crumbs('<b>All topics</b>');
    V().innerHTML = `<div class="sec-head" style="margin-bottom:6px"><h1 class="display" style="font-size:clamp(34px,5vw,54px)">All topics</h1></div><p class="lede">${allTopics().length} topics covering the whole AQA specification in its order — 4.1 Energy to 4.8 Space physics — plus the working-scientifically and maths skills tested on both papers.</p>
      <div class="row" style="margin:18px 0 6px"><input id="tfilter" type="search" placeholder="Filter topics…" aria-label="Filter topics" style="flex:1;min-width:200px;max-width:420px;padding:10px 12px;border-radius:10px;border:1px solid var(--line-2);background:var(--surface)"></div>
      <div id="tlist">${UNITS.filter(u => unitTopics(u.id).length).map(u => `<div class="sec" data-u="${u.id}"><div class="sec-head"><h2 class="h3" style="color:${u.css}">${u.code} ${esc(u.name)}</h2><span class="muted">${u.paper ? 'Paper ' + u.paper : 'Both papers'}</span></div><div class="topic-list">${unitTopics(u.id).map(tcard).join('')}</div></div>`).join('')}</div>${hiddenNote()}`;
    $('#tfilter').oninput = e => { const q = e.target.value.toLowerCase(); $$('.tcard', V()).forEach(a => a.hidden = q && !a.textContent.toLowerCase().includes(q)); $$('[data-u]', V()).forEach(s => s.hidden = !$$('.tcard', s).some(a => !a.hidden)); };
    wireSettingsLinks();
  }
  const wireSettingsLinks = () => $$('[data-settings]').forEach(a => a.onclick = openSettings);
  function unit(uid) {
    const u = unitOf(uid), ts = unitTopics(uid), m = unitMastery(uid);
    crumbs(`<a href="#/topics" style="color:inherit">Topics</a> / <b>${u.code} ${esc(u.name)}</b>`);
    const nq = ts.reduce((a, t) => a + V_(t).quiz.length, 0);
    V().innerHTML = `<div style="--uc:${u.css}"><div class="eyebrow">${u.paper ? 'Paper ' + u.paper : 'Both papers'} · Specification ${u.code}</div><h1 class="display" style="margin:8px 0 10px">${esc(u.name)}</h1><p class="lede">${esc(u.exam)}</p>
      ${ts.length ? `<div class="row" style="margin:16px 0"><span class="pill acc">${pct(m)} mastery</span><span class="pill">${ts.length} topics</span><span class="pill">${nq} quiz questions</span><span class="pill">${ts.reduce((a, t) => a + V_(t).cards.length, 0)} flashcards</span></div>
      <div class="row"><button class="btn primary" id="uquiz">Mixed section quiz</button><a class="btn" href="#/mock">Mock exam</a><a class="btn" href="#/practicals">Required practicals</a></div>
      <div class="sec topic-list">${ts.map(tcard).join('')}</div>` : `<div class="empty">This section is physics only, so it is not examined in Combined Science. <a href="javascript:void 0" data-settings>Change course</a></div>`}${ts.length ? hiddenNote(uid) : ''}</div>`;
    wireSettingsLinks();
    if (!ts.length) return;
    $('#uquiz').onclick = () => { const items = shuffle(ts.flatMap(t => V_(t).quiz.map(q => ({ ...q, topic: t.id })))).slice(0, 12); V().innerHTML = `<div class="quiz-wrap" style="--uc:${u.css};margin:0 auto" id="qz"></div>`; runQuiz($('#qz'), items, { title: u.code + ' mixed quiz', onDone: r => { addXP(r.correct * 8, 'Section quiz'); } }); };
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
      <header class="topic-head"><div class="topic-no">${t.id}</div><div class="eyebrow">${u.paper ? 'Paper ' + u.paper + ' · ' : ''}${u.code} ${esc(u.name)} · <span class="lc">Spec ${esc(t.ref)}</span></div><h1 class="display">${esc(t.title)}</h1></header>
      ${out ? `<div class="note-strip">This topic is not in your exam (${S.settings.tier === 'F' ? 'Foundation' : 'Higher'} · ${S.settings.course === 'comb' ? 'Combined Science' : 'Physics'}). You can still read it. <a href="javascript:void 0" data-settings>Change settings</a></div>` : ''}
      <p class="lede">${esc(t.summary)}</p>
      <div class="row" style="margin-top:12px">${tagHTML(flagOf(t))}<span class="pill acc">${pct(m)} mastery</span><span class="pill">Quiz best ${s.quiz || 0}%</span><span class="pill">${Object.entries(s.cards).filter(([i, b]) => b >= 3 && inScope(t.cards[i]?.[2] || '')).length}/${v.cards.length} cards known</span>${v.gens.length ? `<span class="pill">${s.calc || 0} calculations correct</span>` : ''}</div>
      <nav class="tabs" role="tablist" aria-label="Topic sections">${tabs.map(([k, l, n]) => `<a class="tab ${k === tab ? 'on' : ''}" role="tab" aria-selected="${k === tab}" href="#/t/${id}/${k}">${l}${n !== '' ? `<span class="n">${n}</span>` : ''}</a>`).join('')}</nav>
      <div id="tab"></div>
      <div class="row" style="justify-content:space-between;margin-top:40px;border-top:1px solid var(--line);padding-top:18px">${prev ? `<a class="btn ghost" href="#/t/${prev.id}">${ICON.back} ${prev.id} ${esc(prev.title)}</a>` : '<span></span>'}${next ? `<a class="btn ghost" href="#/t/${next.id}">${next.id} ${esc(next.title)} ${ICON.arrow}</a>` : ''}</div></div>`;
    wireSettingsLinks();
    const host = $('#tab');
    ({ learn: learnTab, explore: exploreTab, cards: cardsTab, quiz: quizTab, calc: calcTab, exam: examTab })[tab](host, t);
  }

  function learnTab(host, t) {
    const s = T(t.id), v = V_(t), secs = t.learn.filter(inScope), hid = t.learn.length - secs.length;
    host.innerHTML = `<div class="layout-2"><article class="notes">
      ${secs.map((sec, i) => `<section id="s${i}"><h3><span class="k">${t.id}.${i + 1}</span>${sec.h} ${tagHTML(flagOf(sec), 1)}</h3>${rich(sec.html)}</section>`).join('')}
      ${hid ? `<div class="note-strip">${hid} section${hid > 1 ? 's' : ''} hidden — not in your exam. <a href="javascript:void 0" data-settings>Change settings</a></div>` : ''}
      ${t.eqs.length ? `<section id="s-eq"><h3><span class="k">KEY</span>Equations</h3><div class="card flat" style="padding:4px 18px">${t.eqs.map(([e, d]) => `<div class="eq-row">${M(e)}<span class="d">${esc(d)}</span></div>`).join('')}</div></section>` : ''}
      <section id="s-wk"><h3><span class="k">DO</span>Worked examples</h3>${v.worked.map((w, i) => `<div class="worked" data-w="${i}"><div class="wq"><span class="eyebrow">Example ${i + 1} ${tagHTML(flagOf(w), 1)}</span><div style="margin-top:6px">${rich(w.q)}</div></div><ol>${w.s.map((st, j) => `<li class="${j ? 'hid' : ''}">${rich(st)}</li>`).join('')}</ol><div class="wf"><button class="btn sm primary" data-step>Next step</button><button class="btn sm ghost" data-all>Show all</button><span class="ans" hidden>Answer: ${rich(w.a)}</span></div></div>`).join('')}</section>
      <section id="s-pf"><h3><span class="k">AVOID</span>Common mistakes</h3><div class="box warn"><b class="lbl">Examiners often see</b><ul>${t.pitfalls.map(p => `<li>${rich(p)}</li>`).join('')}</ul></div></section>
    </article>
    <aside class="aside"><div class="card flat" style="padding:14px 10px"><div class="eyebrow" style="padding:0 10px 8px">On this page</div><div class="toc">${secs.map((sec, i) => `<a href="#s${i}" data-anchor="s${i}">${sec.h}</a>`).join('')}${t.eqs.length ? '<a href="#s-eq" data-anchor="s-eq">Equations</a>' : ''}<a href="#s-wk" data-anchor="s-wk">Worked examples</a><a href="#s-pf" data-anchor="s-pf">Common mistakes</a></div></div>
      <div class="card flat" style="padding:16px"><div class="eyebrow">Specification checklist · ${esc(t.ref)}</div><p class="small muted" style="margin:6px 0 10px">Rate your confidence: red, amber, green.</p><div class="spec-list">${v.spec.map(([sp, i]) => `<div class="spec-item"><div class="rag" data-i="${i}">${[1, 2, 3].map(val => `<button data-v="${val}" class="${s.spec[i] === val ? 'on' : ''}" aria-label="${['Not confident', 'Getting there', 'Confident'][val - 1]}: ${esc(specTxt(sp))}"></button>`).join('')}</div><span>${tagHTML(specFlag(sp), 1)}${rich(esc(specTxt(sp)))}</span></div>`).join('')}</div></div>
      <a class="btn primary" href="#/t/${t.id}/quiz">Test yourself ${ICON.arrow}</a></aside></div>`;
    // hide inline Higher / physics-only fragments that are out of scope
    if (S.settings.tier === 'F') $$('[data-ht],.ht-inline,.ht-col', host).forEach(e => { e.hidden = true; e.style.display = 'none'; });
    if (S.settings.course === 'comb') $$('[data-po]', host).forEach(e => { e.hidden = true; e.style.display = 'none'; });
    wireSettingsLinks();
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

  function examTab(host, t) {
    const ex = V_(t).exam;
    host.innerHTML = `<p class="muted" style="max-width:70ch">Write your answer, then reveal the mark scheme and tick the points you earned. Mark schemes list the creditworthy points an examiner looks for; equivalent wording scores too. Questions worth 6 marks are extended-response questions: examiners also judge how well your answer is organised.</p>${ex.map((q, i) => `<div class="examq" data-i="${i}"><div class="eh"><span class="eyebrow" style="padding-top:4px">Q${i + 1}</span><div>${tagHTML(flagOf(q), 1)}${rich(q.q)}</div><span class="pill mk">[${q.m}]</span></div><textarea aria-label="Your answer to question ${i + 1}" placeholder="Your answer…"></textarea><div class="row" style="padding:0 18px 14px"><button class="btn sm" data-ms>Reveal mark scheme</button></div><div class="ms" hidden>${q.ms.map((p, j) => `<label><input type="checkbox" data-j="${j}"> <span>${rich(p)}</span></label>`).join('')}<div class="row" style="margin-top:10px"><button class="btn sm primary" data-save>Save my mark</button><span class="small muted" data-score></span></div></div></div>`).join('')}`;
    $$('.examq', host).forEach(el => { const q = ex[+el.dataset.i]; $('[data-ms]', el).onclick = () => { $('.ms', el).hidden = false; $('[data-ms]', el).hidden = true; };
      $('[data-save]', el).onclick = () => { const got = Math.min(q.m, $$('input:checked', el).length); $('[data-score]', el).textContent = `${got}/${q.m} marks saved`; $('[data-save]', el).disabled = true; S.stats.examMarks += got; T(t.id).exam = (T(t.id).exam || 0) + got; save(); addXP(got * 5, 'Exam marks'); }; });
  }

  /* ---------- EQUATIONS ---------- */
  function equations() {
    crumbs('<b>Equations</b>');
    const row = e => `<div class="eq-row${inScope(e[2] || '') ? '' : ' out'}"><span class="eqm">${M(e[1])}</span><span class="d">${esc(e[0])} ${tagHTML(e[2] || '', 1)}</span></div>`;
    const rec = EQ_RECALL.filter(e => inScope(e[2] || '')), sh = EQ_SHEET.filter(e => inScope(e[2] || ''));
    V().innerHTML = `<h1 class="display" style="font-size:clamp(34px,5vw,54px)">Equations</h1><p class="lede">AQA splits the physics equations into two lists. You must <b>recall</b> ${rec.length} equations; the other ${sh.length} are printed on the <b>Physics equation sheet</b> you get in the exam. Showing the equations for ${S.settings.tier === 'H' ? 'Higher' : 'Foundation'} tier · ${S.settings.course === 'sep' ? 'GCSE Physics' : 'Combined Science'}.</p>
      <div class="row" style="margin:14px 0"><a class="btn primary" href="#/game/rush">${ICON.game} Drill them in Equation Rush</a><button class="btn" id="eqtest">Cover the equations (self-test)</button></div>
      <div class="grid g2" style="align-items:start" id="eqlists">
        <div class="card flat" style="padding:10px 18px"><div class="row" style="justify-content:space-between"><h2 class="h3" style="font-size:19px;padding:8px 0;margin:0">Recall and apply</h2><span class="pill acc">${rec.length} to learn</span></div>${rec.map(row).join('')}</div>
        <div class="card flat" style="padding:10px 18px"><div class="row" style="justify-content:space-between"><h2 class="h3" style="font-size:19px;padding:8px 0;margin:0">Given on the equation sheet</h2><span class="pill">${sh.length} to select and apply</span></div>${sh.map(row).join('')}
          <h3 class="h3" style="font-size:16px;margin:18px 0 6px">Useful values</h3><div class="tbl" style="margin:0"><table><tr><td>gravitational field strength on Earth</td><td>g = 9.8 N/kg (given in questions)</td></tr><tr><td>speed of sound in air</td><td>≈ 330 m/s</td></tr><tr><td>speed of EM waves in a vacuum</td><td>3 × 10⁸ m/s</td></tr><tr><td>UK mains</td><td>230 V, 50 Hz</td></tr><tr><td>human hearing</td><td>20 Hz – 20 kHz</td></tr><tr><td>walking · running · cycling</td><td>1.5 · 3 · 6 m/s</td></tr></table></div></div>
      </div>
      <div class="card flat sec" style="padding:10px 18px"><h2 class="h3" style="font-size:19px;padding:8px 0;margin:0">Prefixes</h2><div class="tbl" style="border:0;margin:0"><table class="const-table"><tr>${[['tera', 'T', '10¹²'], ['giga', 'G', '10⁹'], ['mega', 'M', '10⁶'], ['kilo', 'k', '10³'], ['centi', 'c', '10⁻²'], ['milli', 'm', '10⁻³'], ['micro', 'μ', '10⁻⁶'], ['nano', 'n', '10⁻⁹']].map(r => `<td><b>${r[1]}</b> ${r[0]}<br><span class="mono">${r[2]}</span></td>`).join('')}</tr></table></div></div>
      <div class="row sec" style="margin:24px 0 6px"><input id="eqf" type="search" placeholder="Filter by topic, e.g. momentum, λ, energy…" aria-label="Filter equations" style="flex:1;min-width:200px;max-width:420px;padding:10px 12px;border-radius:10px;border:1px solid var(--line-2);background:var(--surface)"></div>
      <div class="eq-cols" id="eqlist">${allTopics().filter(t => t.eqs.length).map(t => `<div class="eq-card" data-s="${esc((t.id + ' ' + t.title + ' ' + t.eqs.map(e => e.join(' ')).join(' ')).toLowerCase())}"><h4><span class="dot" style="--uc:${ucol(t.unit)}"></span><a href="#/t/${t.id}" style="color:inherit;text-decoration:none">${t.id} ${esc(t.title)}</a></h4>${t.eqs.map(([e, d]) => `<div class="eq-row">${M(e)}<span class="d">${esc(d)}</span></div>`).join('')}</div>`).join('')}</div>`;
    $('#eqf').oninput = e => { const q = e.target.value.toLowerCase().trim(); $$('.eq-card', V()).forEach(c => c.hidden = q && !c.dataset.s.includes(q)); };
    $('#eqtest').onclick = () => { const on = $('#eqlists').classList.toggle('covered'); $('#eqtest').textContent = on ? 'Show the equations' : 'Cover the equations (self-test)'; };
    $('#eqlists').addEventListener('click', e => { const r = e.target.closest('.eq-row'); if (r && $('#eqlists').classList.contains('covered')) r.classList.toggle('peek'); });
  }

  /* ---------- REQUIRED PRACTICALS ---------- */
  function practicals() {
    crumbs('<b>Required practicals</b>');
    const list = PRACTICALS.filter(p => inScope(p.po ? 'po' : ''));
    S.rp ??= [];
    V().innerHTML = `<h1 class="display" style="font-size:clamp(34px,5vw,54px)">Required practicals</h1><p class="lede">${S.settings.course === 'comb' ? 'The 8 required practicals common to Combined Science (RP2 and RP9 are physics only and are hidden).' : 'All 10 AQA GCSE Physics required practicals.'} Questions on them make up <b>at least 15%</b> of the marks. For each one know the method, the variables, the risks and how to analyse the results.</p>
      <div class="sec">${list.map(p => { const t = TOPIC[p.topic], u = unitOf(t.unit); return `<details class="prac" data-rp="${p.n}" style="--uc:${u.css}"><summary><span class="pno">RP${p.n}</span><span><b>${esc(p.title)}</b> ${p.po ? tagHTML('po', 1) : ''}<br><span class="small muted">${esc(p.aim)}</span></span>${ICON.chev}</summary><div class="pb">
        <h5>Variables</h5><ul>${p.vars.map(m => `<li>${rich(m)}</li>`).join('')}</ul>
        <h5>Method</h5><ol>${p.method.map(m => `<li>${rich(m)}</li>`).join('')}</ol><h5>Analysis</h5><p style="margin:0">${rich(p.analysis)}</p><h5>Accuracy, safety &amp; examiner tips</h5><ul>${p.tips.map(m => `<li>${rich(m)}</li>`).join('')}</ul>
        <div class="row" style="margin-top:12px"><a class="btn sm" href="#/t/${p.topic}">Notes: ${p.topic} ${esc(t.title)}</a>${t.sims.length ? `<a class="btn sm primary" href="#/t/${p.topic}/explore">Try the simulation</a>` : ''}</div></div></details>`; }).join('')}</div>
      <div class="note-strip">The methods here are typical versions of each practical. Your school may use different apparatus — exam questions often describe unfamiliar set-ups, so focus on the physics and the variables.</div>`;
    $$('details.prac').forEach(d => d.addEventListener('toggle', () => { if (d.open) { const n = +d.dataset.rp; if (!S.rp.includes(n)) { S.rp.push(n); save(); addXP(5, 'Required practical'); } } }));
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

  /* ---------- MOCK EXAM ---------- */
  function mock() {
    crumbs('<b>Mock exam</b>');
    V().innerHTML = `<h1 class="display" style="font-size:clamp(34px,5vw,54px)">Mock exam</h1><p class="lede">A timed, mixed paper with no feedback until the end — like the real thing. Multiple-choice checks recall; calculations use fresh numbers every time. Questions match your tier (${S.settings.tier === 'H' ? 'Higher' : 'Foundation'}) and course.</p>
      <div class="card sec" style="max-width:760px"><form id="mockf" class="stack"><div><div class="eyebrow" style="margin-bottom:8px">Paper</div><div class="row">
        <label class="pill" style="cursor:pointer;padding:6px 12px"><input type="radio" name="pp" value="1" checked> Paper 1 · Energy, Electricity, Particles, Atomic</label>
        <label class="pill" style="cursor:pointer;padding:6px 12px"><input type="radio" name="pp" value="2"> Paper 2 · Forces, Waves, Magnetism${S.settings.course === 'sep' ? ', Space' : ''}</label>
        <label class="pill" style="cursor:pointer;padding:6px 12px"><input type="radio" name="pp" value="0"> Both papers</label></div></div>
      <div class="grid g3"><div><label class="eyebrow" for="mq">Questions</label><select id="mq" style="width:100%;margin-top:6px"><option>10</option><option selected>20</option><option>30</option></select></div><div><label class="eyebrow" for="mc">Calculations</label><select id="mc" style="width:100%;margin-top:6px"><option value="0.3" selected>30%</option><option value="0.5">50%</option><option value="0">None</option></select></div><div><label class="eyebrow" for="mt">Time</label><select id="mt" style="width:100%;margin-top:6px"><option value="60" selected>60 s per question</option><option value="40">40 s per question</option><option value="0">Untimed</option></select></div></div>
      <div><button class="btn primary" type="submit">${ICON.clock} Start mock exam</button></div></form></div>
      ${S.mocks?.length ? `<div class="sec"><div class="eyebrow">Recent results</div><div class="row" style="margin-top:8px">${S.mocks.slice(-8).reverse().map(m => `<span class="pill ${m.p >= 70 ? 'good' : m.p >= 40 ? 'warn' : 'bad'}">${m.d} · ${m.u} · ${m.p}%</span>`).join('')}</div></div>` : ''}`;
    $('#mockf').onsubmit = e => { e.preventDefault(); const pp = +$('input[name=pp]:checked').value;
      const n = +$('#mq').value, cf = +$('#mc').value, tl = +$('#mt').value, ts = coreTopics().filter(t => pp === 0 || unitOf(t.unit).paper === pp);
      const nCalc = Math.round(n * cf), calcTopics = ts.filter(t => V_(t).gens.length);
      const calcs = Array.from({ length: calcTopics.length ? nCalc : 0 }, () => { const t = pick(calcTopics); return { type: 'num', ...GEN[pick(V_(t).gens)](), topic: t.id }; });
      const mcqs = shuffle(ts.flatMap(t => V_(t).quiz.map(q => ({ ...q, topic: t.id })))).slice(0, n - calcs.length);
      const items = shuffle([...mcqs, ...calcs]);
      V().innerHTML = '<div class="quiz-wrap" style="margin:0 auto" id="qz"></div>';
      runQuiz($('#qz'), items, { mode: 'exam', title: 'Mock exam', timeLimit: tl ? tl * items.length : 0, back: '#/mock', retry: () => mock(), onDone: r => { S.stats.mocks++; S.mocks ??= []; S.mocks.push({ d: today(), u: pp ? 'Paper ' + pp : 'Both', p: r.p }); save(); addXP(r.correct * 12, 'Mock exam'); } });
    };
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
    V().innerHTML = `<div class="notes"><h1 class="display" style="font-size:clamp(34px,5vw,54px);margin-bottom:12px">About Live Wire</h1>
      <p class="lede">A complete study companion for AQA GCSE Physics (8463): every section of the subject content from 4.1 Energy to 4.8 Space physics, all ten required practicals, both equation lists, and the working-scientifically and maths skills examined on both papers.</p>
      <section><h3>Tier and course</h3><p>Content marked <span class="tag ht sm">Higher</span> is Higher-tier only; content marked <span class="tag po sm">Physics only</span> is in GCSE Physics but not in GCSE Combined Science: Trilogy. Choose your tier and course with the button in the top bar — Live Wire then hides everything you won’t be examined on. <a href="javascript:void 0" data-settings>Open settings</a></p></section>
      <section><h3>How to study a topic</h3><ol><li><b>Learn</b> — read the notes, try each worked example step by step, and rate yourself on the specification checklist.</li><li><b>Explore</b> — play with the simulation until the key relationship feels obvious.</li><li><b>Flashcards</b> — spaced repetition: cards you know move to higher boxes and come up less often.</li><li><b>Quiz</b> — ten questions with instant explanations. Your best score counts towards mastery.</li><li><b>Calculate</b> — unlimited numerical questions with fresh values and full worked solutions.</li><li><b>Exam questions</b> — structured questions with examiner-style mark schemes to self-mark.</li></ol></section>
      <section><h3>Mastery and your circuit</h3><p>Topic mastery combines your best quiz score (40%), flashcards known (20%), specification confidence (20%) and correct calculations (20%). A topic’s lamp glows at full brightness as mastery approaches 100%; 70% counts as “lit”.</p></section>
      <section><h3>The exams</h3><div class="tbl"><table><tr><th></th><th>Paper 1</th><th>Paper 2</th></tr><tr><td>Topics</td><td>4.1 Energy · 4.2 Electricity · 4.3 Particle model · 4.4 Atomic structure</td><td>4.5 Forces · 4.6 Waves · 4.7 Magnetism · 4.8 Space (may also draw on energy and electricity)</td></tr><tr><td>Format</td><td colspan="2">Written exam, 1 hour 45 minutes, 100 marks, 50% of the GCSE each. Foundation and Higher tier. Multiple choice, structured, closed short answer and open response.</td></tr></table></div></section>
      <section><h3>Keyboard shortcuts</h3><div class="tbl"><table><tr><th>Key</th><th>Action</th></tr><tr><td><kbd>/</kbd> or <kbd>Ctrl</kbd>+<kbd>K</kbd></td><td>Search everything</td></tr><tr><td><kbd>A</kbd>–<kbd>D</kbd> / <kbd>1</kbd>–<kbd>4</kbd></td><td>Answer a quiz question</td></tr><tr><td><kbd>Enter</kbd></td><td>Next question</td></tr><tr><td><kbd>Space</kbd></td><td>Flip a flashcard</td></tr><tr><td><kbd>1</kbd>–<kbd>4</kbd> (flipped card)</td><td>Rate: again / hard / good / easy</td></tr></table></div></section>
      <section><h3>About the content</h3><div class="box why"><b class="lbl">Please note</b><p>The notes, questions and mark schemes were written for this app to follow the AQA GCSE Physics (8463) specification, including its equation lists and conventions (g = 9.8 N/kg; units such as m/s and J/kg °C). They are not official AQA materials. Always check the current specification and past papers on the AQA website and follow your teacher’s guidance.</p></div></section>
      <section><h3>Your data</h3><p>Everything you do is stored in this browser only. Use <a href="#/progress">Progress</a> to back up or restore.</p></section></div>`;
    wireSettingsLinks();
  }

  /* ---------- Search palette ---------- */
  let index = null;
  function buildIndex() {
    index = [];
    allTopics().forEach(t => { index.push({ k: 'Topic', t: `${t.id} ${t.title}`, s: t.short, h: `#/t/${t.id}`, x: (t.id + ' ' + t.title + ' ' + t.short + ' ' + t.summary).toLowerCase() });
      t.learn.filter(inScope).forEach((l, i) => index.push({ k: 'Notes', t: l.h.replace(/<[^>]+>/g, ''), s: `${t.id} ${t.title}`, h: `#/t/${t.id}`, x: (l.h + ' ' + l.html.replace(/<[^>]+>/g, ' ')).toLowerCase() }));
      t.eqs.forEach(([e, d]) => index.push({ k: 'Equation', t: M(e), s: `${d || ''} · ${t.id}`, h: `#/t/${t.id}`, x: (e + ' ' + d + ' ' + t.title).toLowerCase(), raw: true }));
      t.cards.filter(c => inScope(c[2] || '')).forEach(([q, a]) => index.push({ k: 'Card', t: q.replace(/<[^>]+>/g, ''), s: a.replace(/<[^>]+>/g, '').slice(0, 80), h: `#/t/${t.id}/cards`, x: (q + ' ' + a).toLowerCase() })); });
    PRACTICALS.filter(p => inScope(p.po ? 'po' : '')).forEach(p => index.push({ k: 'Practical', t: 'RP' + p.n + ' ' + p.title, s: p.aim, h: '#/practicals', x: (p.title + ' ' + p.aim).toLowerCase() }));
    Object.entries(GAMES).forEach(([id, g]) => index.push({ k: 'Game', t: g.title, s: g.blurb, h: '#/game/' + id, x: (g.title + ' ' + g.blurb).toLowerCase() }));
    [['Equations', '#/equations'], ['Required practicals', '#/practicals'], ['Settings: tier and course', '#/about'], ['Mock exam', '#/mock'], ['Progress', '#/progress'], ['Daily challenge', '#/daily']].forEach(([t, hh]) => index.push({ k: 'Page', t, s: '', h: hh, x: t.toLowerCase() }));
  }
  function openPalette() {
    if ($('.palette-back')) return; index || buildIndex();
    const back = h('div', { class: 'palette-back', role: 'dialog', 'aria-label': 'Search' }, `<div class="palette"><input id="pal" placeholder="Search topics, notes, equations, flashcards…" aria-label="Search" autocomplete="off"><ul id="palres"></ul></div>`);
    document.body.append(back); const inp = $('#pal'), ul = $('#palres'); let sel = 0, res = [];
    const close = () => back.remove();
    const show = () => { const q = inp.value.toLowerCase().trim(); const terms = q.split(/\s+/).filter(Boolean);
      res = q ? index.filter(it => terms.every(w => it.x.includes(w))).sort((a, b) => ({ Topic: 0, Page: 1, Equation: 2, Notes: 3, Practical: 4, Game: 5, Card: 6 }[a.k] - { Topic: 0, Page: 1, Equation: 2, Notes: 3, Practical: 4, Game: 5, Card: 6 }[b.k])).slice(0, 40) : index.filter(it => it.k === 'Topic' || it.k === 'Page').slice(0, 14);
      sel = 0; ul.innerHTML = res.length ? res.map((r, i) => `<li><a href="${r.h}" class="${i === sel ? 'sel' : ''}"><span class="kind">${r.k}</span><span><span class="t">${r.raw ? r.t : esc(r.t)}</span><br><span class="s">${esc(r.s)}</span></span><span class="muted">↵</span></a></li>`).join('') : '<li class="empty" style="margin:8px">No matches. Try a symbol like λ or a word like “capacitor”.</li>'; };
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
