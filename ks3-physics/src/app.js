/* ==========================================================
   Launchpad · application shell, router and views (Key Stage 3 physics, Years 7 and 8)
   ========================================================== */
const TOPIC = Object.fromEntries(TOPICS.map(t => [t.id, t]));
/* scope helpers: topics are shown for the chosen year (see inScope in core.js). Items marked ch are
   ★ Challenge — deeper, stretch content. They are always shown, and tagged so learners can choose them. */
const specFlag = sp => /^★/.test(sp) ? 'ch' : '';
const specTxt = sp => sp.replace(/^★\s*/, '');
const tagHTML = (f, small) => (f && f.includes('ch') ? `<span class="tag ch${small ? ' sm' : ''}" title="Challenge: goes deeper than the core lesson">★ Challenge</span>` : '');
const flagOf = o => (o.ch ? 'ch' : '');
const vis = t => inScope(t);
const V_ = t => ({ quiz: t.quiz, cards: t.cards, exam: t.exam, worked: t.worked, gens: t.gens, spec: t.spec.map((sp, i) => [sp, i]) });
const yearOfT = t => unitOf(t.unit)?.year;
const allTopics = () => TOPICS.filter(vis);
const coreTopics = () => TOPICS.filter(t => t.unit !== 'S' && vis(t));
const unitTopics = uid => TOPICS.filter(t => t.unit === uid && vis(t));
const fmtAns = x => Number.isInteger(x) ? String(x) : sf(x, 3);
const ucol = uid => unitOf(uid)?.css || 'var(--accent)';
S.stats ??= { quizzes: 0, perfect: 0, calcOK: 0, cardsSeen: 0, sims: [], mocks: 0, examMarks: 0 };
S.daily ??= {};

function mastery(t) {
  const s = T(t.id), q = (s.quiz || 0) / 100, v = V_(t);
  const ck = t.cards.length ? Object.entries(s.cards).filter(([i, b]) => b >= 3 && t.cards[i]).length / Math.max(1, v.cards.length) : 0;
  const sp = v.spec.reduce((a, [, i]) => a + (s.spec[i] ? (s.spec[i] - 1) / 2 : 0), 0) / Math.max(1, v.spec.length);
  const calc = v.gens.length ? Math.min(s.calc || 0, 5) / 5 : q;
  return clamp(0.4 * q + 0.2 * ck + 0.2 * sp + 0.2 * calc, 0, 1);
}
const pct = x => Math.round(x * 100) + '%';
const unitMastery = uid => { const ts = unitTopics(uid); return ts.length ? ts.reduce((a, t) => a + mastery(t), 0) / ts.length : 0; };

/* ---------- Badges ---------- */
const BADGES = [
  ['first', 'Ignition', 'Finish your first quiz', () => S.stats.quizzes >= 1, '1'],
  ['perfect', 'Perfect launch', 'Score 100% on a quiz', () => S.stats.perfect >= 1, '✓'],
  ['streak3', 'Steady thrust', 'Study 3 days in a row', () => S.streak.n >= 3, '3'],
  ['streak7', 'Orbit', 'Study 7 days in a row', () => S.streak.n >= 7, '7'],
  ['calc10', 'Number cruncher', '10 correct calculations', () => S.stats.calcOK >= 10, 'Σ'],
  ['calc50', 'Mission control', '50 correct calculations', () => S.stats.calcOK >= 50, '='],
  ['cards50', 'Memory bank', 'Review 50 flashcards', () => S.stats.cardsSeen >= 50, '≡'],
  ['sims5', 'Experimenter', 'Try 5 simulations', () => S.stats.sims.length >= 5, '⚗'],
  ['sims20', 'Lab technician', 'Try 20 simulations', () => S.stats.sims.length >= 20, '⚙'],
  ['rp10', 'Lab book', 'Open every practical for your year', () => (S.rp || []).length >= PRACTICALS.filter(p => inScope(p.f)).length, 'Lab'],
  ['mock', 'Test ready', 'Complete a test or quick-fire quiz', () => S.stats.mocks >= 1, '⏱'],
  ['exam', 'Examiner’s eye', 'Self-mark 25 test marks', () => S.stats.examMarks >= 25, 'M'],
  ['y7', 'Year 7 complete', '70% mastery in every Year 7 unit', () => UNITS.filter(u => u.year === 7 && !u.extra).every(u => unitMastery(u.id) >= .7), '7'],
  ['y8', 'Year 8 complete', '70% mastery in every Year 8 unit', () => UNITS.filter(u => u.year === 8).every(u => unitMastery(u.id) >= .7), '8'],
  ['lvl5', 'Low orbit', 'Reach level 6', () => level().l >= 6, '★'],
  ['lvl10', 'Mars transfer', 'Reach level 10', () => level().l >= 10, '🚀']
];
function checkBadges() { BADGES.forEach(([id, name, , test]) => { if (!S.badges.includes(id) && test()) { S.badges.push(id); save(); setTimeout(() => { toast(`<b>Badge</b> ${esc(name)}`, 3200); sfx.win(); }, 400); } }); }

const App = (() => {
  let cleanup = null, lastTopic = null;
  const V = () => $('#view');
  const go = h => { location.hash = h; };

  /* ---------- chrome ---------- */
  function chrome() {
    const nav = [['home', 'Home', '#/home'], ['map', 'All topics', '#/topics'], ['bank', 'Test question bank', '#/bank'], ['clock', 'End-of-year tests', '#/mock'], ['eq', 'Key equations', '#/equations'], ['flask', 'Practicals', '#/practicals'], ['game', 'Arcade', '#/arcade'], ['chart', 'Progress', '#/progress']];
    const yu = y => UNITS.filter(u => u.year === y && YEAR_OK(y) && (!u.extra || S.settings.mag));
    $('#side').innerHTML = `<a class="brand" href="#/home" aria-label="Launchpad home"><span class="brand-mark lp">${ICON.rocket}</span><span><span class="brand-name">Launchpad</span><br><span class="brand-sub">KS3 Physics · Years 7 and 8</span></span></a>
      <nav class="nav" aria-label="Main">${nav.map(([ic, l, h]) => `<a href="${h}" data-nav="${h}">${ICON[ic]}<span>${l}</span></a>`).join('')}
      ${[7, 8].filter(y => yu(y).length).map(y => `<div class="nav-label">Year ${y}</div>${yu(y).map(uLink).join('')}`).join('')}
      <div class="nav-label">Skills</div>${uLink(unitOf('S'))}
      <div class="nav-label">More</div><a href="#/about" data-nav="#/about">${ICON.atom}<span>About &amp; help</span></a></nav>
      <div class="side-foot">Key Stage 3 physics for Years 7 and 8. Progress is saved in this browser.</div>`;
    $('#tabbar').innerHTML = [['home', 'Home', '#/home'], ['map', 'Topics', '#/topics'], ['bank', 'Test Qs', '#/bank'], ['clock', 'Tests', '#/mock'], ['chart', 'Progress', '#/progress']].map(([ic, l, h]) => `<a href="${h}" data-nav="${h}">${ICON[ic]}<span>${l}</span></a>`).join('');
    $('#search-btn').innerHTML = `${ICON.search}<span>Search topics, equations…</span><kbd>/</kbd>`;
    $('#menu-btn').innerHTML = ICON.menu;
    $('#menu-btn').onclick = () => toggleSide(true);
    $('#search-btn').onclick = openPalette;
    $('#theme-btn').onclick = toggleTheme;
    $('#tier-chip').onclick = openSettings;
    $('#sound-btn').onclick = () => { S.settings.sound = !S.settings.sound; save(); refreshChrome(); if (S.settings.sound) sfx.good(); };
    refreshChrome();
  }
  const uLink = u => `<a class="unit-a" href="#/unit/${u.id}" data-nav="#/unit/${u.id}" style="--uc:${u.css}"><span class="unit-line" style="color:${u.css}"></span><span style="min-width:0"><span>${u.code}</span><small>${esc(u.name)}</small></span><span class="meter" data-um="${u.id}"></span></a>`;
  function openSettings() {
    if ($('.palette-back')) return;
    const back = h('div', { class: 'palette-back', role: 'dialog', 'aria-label': 'Year settings' }, `<div class="palette settings-dlg"><h2 class="h3" style="margin:0 0 4px">Your year</h2><p class="small muted" style="margin:0 0 14px">Launchpad shows the topics for the year you choose. You can change this at any time — nothing you have done is lost.</p>
      <div class="eyebrow">Show topics for</div><div class="seg big" data-k="year"><button data-v="7" class="${S.settings.year === '7' ? 'on' : ''}">Year 7</button><button data-v="8" class="${S.settings.year === '8' ? 'on' : ''}">Year 8</button><button data-v="all" class="${S.settings.year === 'all' ? 'on' : ''}">Both years</button></div>
      <div class="eyebrow" style="margin-top:16px">Year 7 Magnetism</div><div class="seg big" data-k="mag"><button data-v="1" class="${S.settings.mag ? 'on' : ''}">Include Magnetism</button><button data-v="0" class="${S.settings.mag ? '' : 'on'}">Hide it</button></div>
      <p class="small muted" style="margin:6px 0 16px">Magnetism is an additional Year 7 topic, taught if time allows. Hide it if your class did not cover it — it is then left out of the Year 7 test too.</p>
      <div class="row" style="justify-content:flex-end"><button class="btn primary" id="set-done">Done</button></div></div>`);
    document.body.append(back);
    $$('.seg[data-k]', back).forEach(sg => sg.onclick = e => { const b = e.target.closest('button'); if (!b) return; const k = sg.dataset.k; S.settings[k] = k === 'mag' ? b.dataset.v === '1' : b.dataset.v; S.settings.chosen = true; save(); $$('button', sg).forEach(x => x.classList.toggle('on', x === b)); });
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
    $('#tier-chip').innerHTML = yearName(S.settings.year); $('#tier-chip').title = 'Change year (Year 7, Year 8 or both)';
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
      else if (a === 'mock' && (b === 'p7' || b === 'p8')) paper(+b[1]);
      else if (a === 'mock') mock();
      else if (a === 'bank') bank();
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
    const bank = EQ_LIST.filter(e => inScope(e[2] || '')), eqd = bank[Math.floor(Date.now() / 864e5) % bank.length];
    const dDone = S.daily[today()];
    const first = !S.settings.chosen, yr = S.settings.year, firstT = CORE[0];
    const years = [7, 8].filter(y => YEAR_OK(y));
    V().innerHTML = `
    ${first ? `<div class="card sec onboard"><div class="eyebrow">Welcome to Launchpad</div><h2 class="h3" style="margin:6px 0">Which year are you in?</h2><p class="small muted" style="margin:0 0 12px">Launchpad covers Key Stage 3 physics for Year 7 and Year 8. Pick your year to see just your topics — you can switch at any time with the year button at the top.</p>
      <div class="row"><button class="btn primary" data-ob="7">Year 7</button><button class="btn primary" data-ob="8">Year 8</button><button class="btn" data-ob="all">Show both years</button></div></div>` : ''}
    <section class="hero" aria-label="Your launch map">
      <div class="hero-grid">
        <div><div class="eyebrow">Key Stage 3 Physics · ${yearName(yr)} · Level ${L.l} ${L.name}</div>
          <h1 class="display" style="margin-top:10px">Physics, one launch at a time.</h1>
          <p>Every topic is a star on your map. Learn it, try the simulation, test yourself — and watch your sky light up.</p>
          <div class="row" style="margin-top:18px">${last && vis(last) ? `<a class="btn accent" href="#/t/${last.id}">${ICON.play} Continue ${last.id} ${esc(last.title)}</a>` : firstT ? `<a class="btn accent" href="#/t/${firstT.id}">${ICON.play} Start with ${firstT.id} ${esc(firstT.title)}</a>` : ''}
          <a class="btn" href="#/bank">${ICON.bank} Test questions</a><a class="btn" href="#/daily">${dDone != null ? `Daily ✓ ${dDone}/5` : 'Daily challenge'}</a></div></div>
        <div class="hero-stats"><div class="hstat"><b>${S.xp}</b><span>XP</span></div><div class="hstat"><b>${S.streak.n || 0}</b><span>day streak</span></div><div class="hstat"><b>${mastered}<small style="font-size:16px;color:#8E94B3">/${CORE.length}</small></b><span>stars shining</span></div></div>
      </div>
      <canvas class="sky" id="sky" aria-label="Star map: one star per topic, brightness shows mastery"></canvas>
      <div id="spec-tip" class="mono" style="min-height:18px;margin-top:6px;font-size:12px;color:#AEB4D4"></div>
    </section>
    ${years.map(y => { const us = UNITS.filter(u => u.year === y && (!u.extra || S.settings.mag)); return `<div class="sec"><div class="sec-head"><h2 class="h2">Year ${y}</h2><span class="muted">${us.length} units · ${us.reduce((a, u) => a + unitTopics(u.id).length, 0)} topics${y === 7 && S.settings.mag ? ' · Magnetism is an additional topic' : ''}</span></div>
      <div class="grid g4">${us.map(unitCard).join('')}</div></div>`; }).join('')}
    <div class="sec"><div class="sec-head"><h2 class="h2">Skills</h2><span class="muted">Working scientifically — used in every practical</span></div><div class="grid g4">${unitCard(unitOf('S'))}</div></div>
    <div class="sec grid g3">
      <div class="card"><div class="eyebrow">Recommended next</div><div class="stack" style="margin-top:12px">${rec.map(({ t, m }) => `<a class="tcard" href="#/t/${t.id}" style="--uc:${ucol(t.unit)}"><span class="no" style="font-size:24px;min-width:40px">${t.id}</span><span class="tt">${esc(t.title)}</span><span class="ts">${pct(m)} mastery</span></a>`).join('')}</div></div>
      <div class="card"><div class="eyebrow">Equation of the day</div><div class="eqbig" style="margin:22px 0 10px;text-align:center">${M(eqd[1])}</div><p class="muted" style="text-align:center;margin:0">${esc(eqd[0])}</p><div class="row" style="justify-content:center;margin-top:16px"><a class="btn sm" href="#/game/rush">Play Equation Rush</a></div></div>
      <div class="card"><div class="eyebrow">Test countdown</div>${countdown()}</div>
    </div>
    <div class="sec grid g3"><a class="card linkcard" href="#/bank"><div class="eyebrow">${examCount()} test questions</div><div class="h3" style="margin:6px 0">Test question bank</div><p class="small muted" style="margin:0">Multi-part questions like the ones in your end-of-topic tests, with mark schemes — filter by unit and question type.</p></a>
      <a class="card linkcard" href="#/mock"><div class="eyebrow">${years.map(y => `Year ${y} · 60 marks`).join(' &nbsp;·&nbsp; ')}</div><div class="h3" style="margin:6px 0">End-of-year tests</div><p class="small muted" style="margin:0">A fresh one-hour test every time, built from the whole year, with a timer and mark schemes.</p></a>
      <a class="card linkcard" href="#/practicals"><div class="eyebrow">Method · variables · results</div><div class="h3" style="margin:6px 0">The ${PRACTICALS.filter(p => inScope(p.f)).length} practicals</div><p class="small muted" style="margin:0">Every experiment in the course — from film-canister rockets to jelly lenses — with the method, variables, safety and what the results show.</p></a></div>`;
    $$('[data-ob]').forEach(b => b.onclick = () => { S.settings.year = b.dataset.ob; S.settings.chosen = true; save(); index = null; chrome(); route(); });
    cleanup = drawSky($('#sky'));
    const inp = $('#exam-date'); if (inp) inp.onchange = () => { S.settings.examDate = inp.value; save(); route(); };
  }
  const examCount = () => allTopics().reduce((a, t) => a + V_(t).exam.length, 0) + (typeof BANK !== 'undefined' ? BANK.filter(inScope).length : 0);
  const unitCard = u => { const ts = unitTopics(u.id), m = unitMastery(u.id);
    return `<a class="unit-card" href="#/unit/${u.id}" style="--uc:${u.css}"><span class="line"></span><div class="row" style="justify-content:space-between"><span class="eyebrow">${u.code}${u.year ? ' · Year ' + u.year : ''}</span>${u.extra ? '<span class="tag ch sm">Additional</span>' : ''}</div><div class="h3">${esc(u.name)}</div><div class="small muted">${ts.length} topics · ${ts.reduce((a, t) => a + V_(t).quiz.length, 0)} questions</div><div class="bar"><i style="width:${m * 100}%"></i></div><div class="small mono">${pct(m)} mastered</div></a>`; };
  function countdown() {
    const d = S.settings.examDate, days = d ? Math.ceil((new Date(d + 'T09:00') - Date.now()) / 864e5) : null;
    return `<div style="font:800 64px/1 var(--f-display);margin:16px 0 4px;color:var(--accent-ink)">${days != null ? Math.max(0, days) : '—'}</div><div class="muted small">${days != null ? 'days until your test' : 'Set the date of your next physics test'}</div><label class="small muted" for="exam-date" style="display:block;margin-top:14px">Test date</label><input id="exam-date" type="date" value="${d || ''}" style="margin-top:4px;padding:8px 10px;border-radius:9px;border:1px solid var(--line-2);background:var(--surface)">`;
  }
  /* The home “sky”: one star per topic, arranged as a constellation per topic group.
     Star brightness and size grow with mastery; faint background stars twinkle. */
  function drawSky(cv) {
    const c = cv.getContext('2d'); let W, H, alive = true, hover = -1;
    const units = UNITS.filter(u => unitTopics(u.id).length);
    const stars = []; units.forEach((u, r) => unitTopics(u.id).forEach((t, k, arr) => stars.push({ t, u, r, k, n: arr.length, m: mastery(t), col: cssVar(u.css.slice(4, -1)) || '#7FF0E8' })));
    const bg = Array.from({ length: 160 }, () => ({ x: Math.random(), y: Math.random(), s: Math.random() * 1.2 + .2, p: Math.random() * 6 }));
    const size = () => { const rc = cv.getBoundingClientRect(), d = Math.min(2, devicePixelRatio || 1); W = rc.width; H = rc.height; cv.width = W * d; cv.height = H * d; c.setTransform(d, 0, 0, d, 0, 0); };
    size(); const ro = new ResizeObserver(size); ro.observe(cv);
    const pos = s => { const nc = Math.min(units.length, W > 720 ? 6 : 3), col = s.r % nc, row = Math.floor(s.r / nc), rows = Math.ceil(units.length / nc), cw = W / nc, rh = H / rows, cx = cw * (col + .5), cy = rh * (row + .5);
      const a = s.k / s.n * Math.PI * 2 + s.r * .9, rad = Math.min(cw, rh) * (.18 + .16 * ((s.k * 7 + s.r * 3) % 5) / 4); return [cx + rad * Math.cos(a), cy + rad * Math.sin(a) * .8]; };
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const frame = tm => { if (!alive) return; c.clearRect(0, 0, W, H);
      bg.forEach(b => { const tw = reduce ? .6 : .45 + .35 * Math.sin(tm / 900 + b.p); c.fillStyle = `rgba(200,210,255,${tw * .55})`; c.beginPath(); c.arc(b.x * W, b.y * H, b.s, 0, 7); c.fill(); });
      units.forEach((u, r) => { const ss = stars.filter(s => s.r === r); if (!ss.length) return; c.strokeStyle = hexA(ss[0].col, .28); c.lineWidth = 1; c.beginPath(); ss.forEach((s, i) => { const [x, y] = pos(s); i ? c.lineTo(x, y) : c.moveTo(x, y); }); c.stroke();
        const [lx, ly] = ss.reduce((a, s) => { const p = pos(s); return [a[0] + p[0] / ss.length, a[1] + p[1] / ss.length]; }, [0, 0]); c.font = '600 11px JetBrains Mono, monospace'; c.textAlign = 'center'; c.fillStyle = hexA(ss[0].col, .9); c.fillText(u.short, lx, ly + 4); });
      stars.forEach((s, i) => { const [x, y] = pos(s), b = .12 + .88 * s.m, fl = reduce ? 1 : .9 + .1 * Math.sin(tm / 500 + i), r = 2.2 + 4.5 * b;
        const gr = c.createRadialGradient(x, y, 0, x, y, r * 4.5); gr.addColorStop(0, hexA(s.col, .7 * b * fl)); gr.addColorStop(1, hexA(s.col, 0)); c.fillStyle = gr; c.beginPath(); c.arc(x, y, r * 4.5, 0, 7); c.fill();
        c.fillStyle = b > .2 ? '#FFFFFF' : hexA('#C8D0FF', .55); c.beginPath(); c.arc(x, y, r * .55, 0, 7); c.fill(); if (i === hover) { c.strokeStyle = '#fff'; c.lineWidth = 1.5; c.beginPath(); c.arc(x, y, r + 5, 0, 7); c.stroke(); } });
      if (!reduce) requestAnimationFrame(frame); };
    requestAnimationFrame(frame);
    const tip = $('#spec-tip');
    cv.addEventListener('pointermove', e => { const rc = cv.getBoundingClientRect(), x = e.clientX - rc.left, y = e.clientY - rc.top; let best = -1, bd = 16; stars.forEach((s, i) => { const [sx, sy] = pos(s), d = Math.hypot(sx - x, sy - y); if (d < bd) { bd = d; best = i; } }); hover = best; cv.style.cursor = best >= 0 ? 'pointer' : 'default'; tip.textContent = best >= 0 ? `${stars[best].t.id} ${stars[best].t.title} · ${pct(stars[best].m)} mastery` : 'Hover a star to see its topic; click to open it.'; if (reduce) frame(0); });
    cv.addEventListener('pointerleave', () => { hover = -1; if (reduce) frame(0); });
    cv.addEventListener('click', () => { if (hover >= 0) go('#/t/' + stars[hover].t.id); });
    tip.textContent = 'Each constellation is a unit; each star is a topic. Hover a star, click to open it.';
    if (reduce) frame(0);
    return () => { alive = false; ro.disconnect(); };
  }

  /* ---------- TOPICS / UNIT ---------- */
  const tcard = t => { const m = mastery(t); return `<a class="tcard" href="#/t/${t.id}" style="--uc:${ucol(t.unit)}"><span class="no">${t.id}</span><span class="tt">${esc(t.title)} ${tagHTML(flagOf(t), 1)}</span><span class="ts">${esc(t.short)}</span><span class="bar"><i style="width:${m * 100}%"></i></span></a>`; };
  const hiddenNote = uid => { const n = TOPICS.filter(t => (uid ? t.unit === uid : true) && !vis(t)).length; return n ? `<div class="note-strip">${n} topic${n > 1 ? 's are' : ' is'} hidden because you are viewing ${yearName(S.settings.year)}${S.settings.mag ? '' : ' without Magnetism'}. <a href="javascript:void 0" data-settings>Change</a></div>` : ''; };
  function topics() {
    crumbs('<b>All topics</b>');
    V().innerHTML = `<div class="sec-head" style="margin-bottom:6px"><h1 class="display" style="font-size:clamp(34px,5vw,54px)">All topics</h1></div><p class="lede">${allTopics().length} topics for ${yearName(S.settings.year)}, in the order they are usually taught, plus the working-scientifically skills you use in every practical.</p>
      <div class="row" style="margin:18px 0 6px"><input id="tfilter" type="search" placeholder="Filter topics…" aria-label="Filter topics" style="flex:1;min-width:200px;max-width:420px;padding:10px 12px;border-radius:10px;border:1px solid var(--line-2);background:var(--surface)"></div>
      <div id="tlist">${UNITS.filter(u => unitTopics(u.id).length).map(u => `<div class="sec" data-u="${u.id}"><div class="sec-head"><h2 class="h3" style="color:${u.css}">${u.code} ${esc(u.name)}</h2><span class="muted">${u.year ? 'Year ' + u.year : 'Both years'}${u.extra ? ' · additional topic' : ''}</span></div><div class="topic-list">${unitTopics(u.id).map(tcard).join('')}</div></div>`).join('')}</div>${hiddenNote()}`;
    $('#tfilter').oninput = e => { const q = e.target.value.toLowerCase(); $$('.tcard', V()).forEach(a => a.hidden = q && !a.textContent.toLowerCase().includes(q)); $$('[data-u]', V()).forEach(s => s.hidden = !$$('.tcard', s).some(a => !a.hidden)); };
    wireSettingsLinks();
  }
  const wireSettingsLinks = () => $$('[data-settings]').forEach(a => a.onclick = openSettings);
  function unit(uid) {
    const u = unitOf(uid), ts = unitTopics(uid), m = unitMastery(uid);
    crumbs(`<a href="#/topics" style="color:inherit">Topics</a> / <b>${u.code} ${esc(u.name)}</b>`);
    const nq = ts.reduce((a, t) => a + V_(t).quiz.length, 0);
    V().innerHTML = `<div style="--uc:${u.css}"><div class="eyebrow">${u.year ? 'Year ' + u.year : 'Years 7 and 8'} · ${u.code}${u.extra ? ' · additional topic, if time allows' : ''}</div><h1 class="display" style="margin:8px 0 10px">${esc(u.name)}</h1><p class="lede">${esc(u.blurb)}</p>
      ${ts.length ? `<div class="row" style="margin:16px 0"><span class="pill acc">${pct(m)} mastery</span><span class="pill">${ts.length} topics</span><span class="pill">${nq} quiz questions</span><span class="pill">${ts.reduce((a, t) => a + V_(t).cards.length, 0)} flashcards</span></div>
      <div class="row"><button class="btn primary" id="uquiz">Mixed unit quiz</button><a class="btn" href="#/mock">End-of-year test</a><a class="btn" href="#/bank">Test question bank</a></div>
      <div class="sec topic-list">${ts.map(tcard).join('')}</div>` : `<div class="empty">This unit is not part of ${yearName(S.settings.year)}${S.settings.mag ? '' : ', or Magnetism is hidden'}. <a href="javascript:void 0" data-settings>Change year</a></div>`}${ts.length ? hiddenNote(uid) : ''}</div>`;
    wireSettingsLinks();
    if (!ts.length) return;
    $('#uquiz').onclick = () => { const items = shuffle(ts.flatMap(t => V_(t).quiz.map(q => ({ ...q, topic: t.id })))).slice(0, 12); V().innerHTML = `<div class="quiz-wrap" style="--uc:${u.css};margin:0 auto" id="qz"></div>`; runQuiz($('#qz'), items, { title: u.name + ' quiz', onDone: r => { addXP(r.correct * 8, 'Section quiz'); } }); };
  }

  /* ---------- TOPIC ---------- */
  function topic(id, tab) {
    const t = TOPIC[id], u = unitOf(t.unit), s = T(id), v = V_(t); s.seen = Date.now(); S.last = id; save();
    const list = allTopics(), idx = list.indexOf(t), prev = list[idx - 1], next = list[idx + 1];
    crumbs(`<a href="#/unit/${u.id}" style="color:inherit">${u.code} ${esc(u.name)}</a> / <b>${t.id} ${esc(t.title)}</b>`);
    const tabs = [['learn', 'Learn', ''], ...(t.sims.length ? [['explore', 'Explore', t.sims.length]] : []), ['cards', 'Flashcards', v.cards.length], ['quiz', 'Quiz', v.quiz.length], ...(v.gens.length ? [['calc', 'Calculate', '∞']] : []), ['exam', 'Test questions', v.exam.length]];
    if (!tabs.find(x => x[0] === tab)) tab = 'learn';
    const m = mastery(t), out = !vis(t);
    V().innerHTML = `<div style="--uc:${u.css}">
      <header class="topic-head"><div class="topic-no">${t.id}</div><div class="eyebrow">${u.year ? 'Year ' + u.year + ' · ' : ''}${u.code} ${esc(u.name)}</div><h1 class="display">${esc(t.title)}</h1></header>
      ${out ? `<div class="note-strip">This topic is not part of ${yearName(S.settings.year)}. You can still read it. <a href="javascript:void 0" data-settings>Change year</a></div>` : ''}
      <p class="lede">${esc(t.summary)}</p>
      <div class="row" style="margin-top:12px">${tagHTML(flagOf(t))}<span class="pill acc">${pct(m)} mastery</span><span class="pill">Quiz best ${s.quiz || 0}%</span><span class="pill">${Object.entries(s.cards).filter(([i, b]) => b >= 3 && t.cards[i]).length}/${v.cards.length} cards known</span>${v.gens.length ? `<span class="pill">${s.calc || 0} calculations correct</span>` : ''}</div>
      <nav class="tabs" role="tablist" aria-label="Topic sections">${tabs.map(([k, l, n]) => `<a class="tab ${k === tab ? 'on' : ''}" role="tab" aria-selected="${k === tab}" href="#/t/${id}/${k}">${l}${n !== '' ? `<span class="n">${n}</span>` : ''}</a>`).join('')}</nav>
      <div id="tab"></div>
      <div class="row" style="justify-content:space-between;margin-top:40px;border-top:1px solid var(--line);padding-top:18px">${prev ? `<a class="btn ghost" href="#/t/${prev.id}">${ICON.back} ${prev.id} ${esc(prev.title)}</a>` : '<span></span>'}${next ? `<a class="btn ghost" href="#/t/${next.id}">${next.id} ${esc(next.title)} ${ICON.arrow}</a>` : ''}</div></div>`;
    wireSettingsLinks();
    const host = $('#tab');
    ({ learn: learnTab, explore: exploreTab, cards: cardsTab, quiz: quizTab, calc: calcTab, exam: examTab })[tab](host, t);
  }

  function learnTab(host, t) {
    const s = T(t.id), v = V_(t), secs = t.learn, hid = 0;
    host.innerHTML = `<div class="layout-2"><article class="notes">
      ${secs.map((sec, i) => `<section id="s${i}"><h3><span class="k">${t.id}.${i + 1}</span>${sec.h} ${tagHTML(flagOf(sec), 1)}</h3>${rich(sec.html)}</section>`).join('')}
      ${hid ? `<div class="note-strip">${hid} section${hid > 1 ? 's' : ''} hidden — not in your exam. <a href="javascript:void 0" data-settings>Change settings</a></div>` : ''}
      ${t.eqs.length ? `<section id="s-eq"><h3><span class="k">KEY</span>Equations</h3><div class="card flat" style="padding:4px 18px">${t.eqs.map(([e, d]) => `<div class="eq-row">${M(e)}<span class="d">${esc(d)}</span></div>`).join('')}</div></section>` : ''}
      <section id="s-wk"><h3><span class="k">DO</span>Worked examples</h3>${v.worked.map((w, i) => `<div class="worked" data-w="${i}"><div class="wq"><span class="eyebrow">Example ${i + 1} ${tagHTML(flagOf(w), 1)}</span><div style="margin-top:6px">${rich(w.q)}</div></div><ol>${w.s.map((st, j) => `<li class="${j ? 'hid' : ''}">${rich(st)}</li>`).join('')}</ol><div class="wf"><button class="btn sm primary" data-step>Next step</button><button class="btn sm ghost" data-all>Show all</button><span class="ans" hidden>Answer: ${rich(w.a)}</span></div></div>`).join('')}</section>
      <section id="s-pf"><h3><span class="k">AVOID</span>Common mistakes</h3><div class="box warn"><b class="lbl">Watch out for</b><ul>${t.pitfalls.map(p => `<li>${rich(p)}</li>`).join('')}</ul></div></section>
    </article>
    <aside class="aside"><div class="card flat" style="padding:14px 10px"><div class="eyebrow" style="padding:0 10px 8px">On this page</div><div class="toc">${secs.map((sec, i) => `<a href="#s${i}" data-anchor="s${i}">${sec.h}</a>`).join('')}${t.eqs.length ? '<a href="#s-eq" data-anchor="s-eq">Equations</a>' : ''}<a href="#s-wk" data-anchor="s-wk">Worked examples</a><a href="#s-pf" data-anchor="s-pf">Common mistakes</a></div></div>
      <div class="card flat" style="padding:16px"><div class="eyebrow">Learning checklist</div><p class="small muted" style="margin:6px 0 10px">Rate your confidence: red, amber, green.</p><div class="spec-list">${v.spec.map(([sp, i]) => `<div class="spec-item"><div class="rag" data-i="${i}">${[1, 2, 3].map(val => `<button data-v="${val}" class="${s.spec[i] === val ? 'on' : ''}" aria-label="${['Not confident', 'Getting there', 'Confident'][val - 1]}: ${esc(specTxt(sp))}"></button>`).join('')}</div><span>${tagHTML(specFlag(sp), 1)}${rich(esc(specTxt(sp)))}</span></div>`).join('')}</div></div>
      <a class="btn primary" href="#/t/${t.id}/quiz">Test yourself ${ICON.arrow}</a></aside></div>`;
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
    const s = T(t.id), idxs = t.cards.map((c, i) => i); let queue = shuffle(idxs).sort((a, b) => (s.cards[a] || 0) - (s.cards[b] || 0)), pos = 0, flipped = false, reviewed = 0;
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
          : `<div class="calc-in"><input id="numin" inputmode="decimal" autocomplete="off" placeholder="e.g. 2.5e-3" aria-label="Your answer"><span class="unit">${q.unit || ''}</span><button class="btn primary" id="numgo">Submit</button></div><p class="kbd-hint">Type a number. Round sensibly — 2 or 3 figures is fine.</p>`}
        <div id="fb"></div>`;
      if (q.type === 'mcq') $$('.opt', host).forEach(b => b.onclick = () => answer(+b.dataset.k));
      else { const inp = $('#numin'); inp.focus(); $('#numgo').onclick = () => answer(inp.value); inp.onkeydown = e => { if (e.key === 'Enter') answer(inp.value); }; }
    };
    const answer = k => {
      const q = qs[i]; if (res.length > i) return;
      let ok, given;
      if (q.type === 'mcq') { ok = q.order[k] === 0; given = k; } else { const v = parseNum(k); if (!isFinite(v)) { toast('Enter a number, e.g. 2.5'); return; } ok = Math.abs(v - q.ans) <= Math.abs(q.ans) * (q.tol || 0.02) + 1e-12; given = v; }
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
      host.innerHTML = `<div class="quiz-wrap"><div class="row" style="justify-content:space-between;margin-bottom:12px"><span class="eyebrow">Unlimited calculation practice · new numbers every time</span><span class="pill good">${s.calc || 0} correct · streak ${streak}</span></div>
        <div class="card"><div class="calc-q">${rich(q.q)}</div><div class="calc-in"><input id="cin" inputmode="decimal" autocomplete="off" placeholder="your answer" aria-label="Your answer"><span class="unit">${q.unit}</span><button class="btn primary" id="cgo">Check</button><button class="btn ghost" id="cshow">Show solution</button></div><p class="kbd-hint">Answers within 2% are accepted. Take g = 10 N/kg on Earth unless the question says otherwise.</p><div id="cfb"></div></div></div>`;
      const inp = $('#cin'); inp.focus();
      const reveal = ok => { $('#cfb').innerHTML = `<div class="steps"><b>${ok === true ? '<span style="color:var(--good)">Correct!</span> ' : ok === false ? '<span style="color:var(--bad)">Not quite.</span> ' : ''}Answer: ${fmtAns(q.ans)} ${q.unit}</b><ol>${q.steps.map(x => `<li>${rich(x)}</li>`).join('')}</ol></div><div class="row" style="margin-top:12px"><button class="btn primary" id="cnext">Next question <kbd>Enter</kbd></button></div>`; $('#cnext').onclick = one; inp.disabled = true; $('#cgo').disabled = true; $('#cshow').disabled = true; $('#cnext').focus(); };
      const check = () => { const v = parseNum(inp.value); if (!isFinite(v)) { toast('Enter a number, e.g. 12.5'); return; } const ok = Math.abs(v - q.ans) <= Math.abs(q.ans) * 0.02 + 1e-12; if (ok) { s.calc = (s.calc || 0) + 1; S.stats.calcOK++; streak++; save(); addXP(15, 'Calculation correct'); sfx.good(); if (streak % 5 === 0) burst(); } else { streak = 0; sfx.bad(); } s.calcN = (s.calcN || 0) + 1; save(); reveal(ok); };
      $('#cgo').onclick = check; inp.onkeydown = e => { if (e.key === 'Enter') check(); }; $('#cshow').onclick = () => { streak = 0; reveal(null); };
    };
    one();
  }

  /* ---------- Structured exam questions (shared by topic tab, bank and papers) ---------- */
  const QTAGS = { prac: 'Practical', calc: 'Calculation', ext: 'Extended answer', graph: 'Graphs', data: 'Data analysis', synoptic: 'Synoptic' };
  const qMarks = q => q.parts ? q.parts.reduce((a, p) => a + p.m, 0) : q.m;
  const qTag = q => q.tag || (qParts(q).some(p => p.m >= 5) ? 'ext' : '');
  const qParts = q => q.parts || [{ q: '', m: q.m, ms: q.ms }];
  function xqHTML(q, n, o = {}) {
    const ps = qParts(q), multi = !!q.parts, tg = qTag(q), tp = q.topic && TOPIC[q.topic];
    return `<div class="xq" data-xq="${n}" style="--uc:${tp ? ucol(tp.unit) : 'var(--accent)'}"><div class="xq-head"><span class="n">${o.num || 'Q' + (n + 1)}</span>${tp && o.showTopic ? `<a class="pill" href="#/t/${tp.id}">${tp.id} ${esc(tp.title)}</a>` : ''}${tg ? `<span class="tag qt sm">${QTAGS[tg] || tg}</span>` : ''}${q.ch ? tagHTML('ch', 1) : ''}<span class="spacer" style="flex:1"></span><span class="pill mk">${qMarks(q)} mark${qMarks(q) > 1 ? 's' : ''}</span></div>
      ${multi ? `<div class="xq-stem">${rich(q.q)}</div>` : ''}
      ${ps.map((p, j) => `<div class="xq-part" data-m="${p.m}"><div><span class="pl">${multi ? '(' + 'abcdefgh'[j] + ')' : ''}</span>${rich(multi ? p.q : q.q)} <b class="mono">[${p.m}]</b></div><textarea rows="${p.m >= 5 ? 6 : p.m >= 3 ? 3 : 2}" aria-label="Your answer"></textarea>
        <div class="ms" hidden><div class="eyebrow" style="margin-bottom:4px">Mark scheme — tick the points you made</div>${p.ms.map(x => `<label><input type="checkbox"> <span>${rich(x)}</span></label>`).join('')}${p.m >= 5 ? '<p class="small muted" style="margin:6px 0 0">Longer answers: teachers also reward an answer that is in a sensible order and links the points together with words like “because” and “so”.</p>' : ''}</div></div>`).join('')}
      ${o.noFoot ? '' : `<div class="xq-foot"><button class="btn sm" data-reveal>Reveal mark scheme</button><button class="btn sm primary" data-save hidden>Save my marks</button><span class="small muted" data-score></span></div>`}</div>`;
  }
  function wireXQ(host, list, onSave) {
    $$('.xq', host).forEach(el => { const q = list[+el.dataset.xq], rv = $('[data-reveal]', el), sv = $('[data-save]', el); if (!rv) return;
      rv.onclick = () => { $$('.ms', el).forEach(m => m.hidden = false); rv.hidden = true; sv.hidden = false; };
      sv.onclick = () => { const got = $$('.xq-part', el).reduce((a, p) => a + Math.min(+p.dataset.m, $$('input:checked', p).length), 0), tot = qMarks(q); $('[data-score]', el).textContent = `${got}/${tot} marks saved`; sv.disabled = true; S.stats.examMarks += got; save(); addXP(got * 5, 'Exam marks'); onSave && onSave(q, got, tot); checkBadges(); }; });
  }
  function examTab(host, t) {
    const ex = V_(t).exam.map(q => ({ ...q, topic: t.id })), extra = typeof BANK !== 'undefined' ? BANK.filter(b => b.topic === t.id && inScope(b)) : [];
    const all = [...ex, ...extra];
    host.innerHTML = `<p class="muted" style="max-width:72ch">Answer on paper or in the boxes, then reveal the mark scheme and tick the points you made. Each ticked point is one mark (up to the marks for that part); equivalent wording scores too. ${extra.length ? `${extra.length > 1 ? `The last ${extra.length} questions are` : 'The last question is'} from the <a href="#/bank">test question bank</a> — harder, test-style questions.` : ''}</p>
      <div class="row" style="margin:8px 0 4px"><span class="pill">${all.length} questions</span><span class="pill">${all.reduce((a, q) => a + qMarks(q), 0)} marks</span></div>${all.map((q, i) => xqHTML(q, i)).join('')}`;
    wireXQ(host, all, (q, got) => { T(t.id).exam = (T(t.id).exam || 0) + got; save(); });
  }

  /* ---------- TEST QUESTION BANK ---------- */
  function bankAll() { const out = []; allTopics().forEach(t => V_(t).exam.forEach(q => out.push({ ...q, topic: t.id }))); if (typeof BANK !== 'undefined') BANK.filter(inScope).forEach(q => out.push({ ...q })); return out; }
  function bank() {
    crumbs('<b>Test question bank</b>');
    const all = bankAll(); S.bankf ??= { u: '', tag: '', ch: '' };
    V().innerHTML = `<h1 class="display" style="font-size:clamp(34px,5vw,54px)">Test question bank</h1><p class="lede">${all.length} questions worth ${all.reduce((a, q) => a + qMarks(q), 0)} marks for ${yearName(S.settings.year)}, like the ones in end-of-topic and end-of-year tests. They build from recall to calculations, explanations and planning experiments. Answer them, then mark your work with the mark scheme.</p>
      <div class="bank-filters"><select id="bf-u" aria-label="Unit"><option value="">All units</option>${UNITS.filter(u => unitTopics(u.id).length).map(u => `<option value="${u.id}" ${S.bankf.u === u.id ? 'selected' : ''}>${u.code} ${esc(u.name)}</option>`).join('')}</select>
        <select id="bf-t" aria-label="Question type"><option value="">All question types</option>${Object.entries(QTAGS).map(([k, v]) => `<option value="${k}" ${S.bankf.tag === k ? 'selected' : ''}>${v}</option>`).join('')}</select>
        <select id="bf-c" aria-label="Difficulty"><option value="">All questions</option><option value="core" ${S.bankf.ch === 'core' ? 'selected' : ''}>Core questions</option><option value="ch" ${S.bankf.ch === 'ch' ? 'selected' : ''}>★ Challenge questions only</option></select>
        <button class="btn sm" id="bf-shuf">Shuffle</button></div><div id="bank-count" class="small muted"></div><div id="bank-list"></div>`;
    let order = all;
    const draw = () => { const f = S.bankf, list = order.filter(q => (!f.u || TOPIC[q.topic]?.unit === f.u) && (!f.tag || qTag(q) === f.tag) && (!f.ch || (f.ch === 'ch' ? !!q.ch : !q.ch)));
      $('#bank-count').textContent = `${list.length} questions · ${list.reduce((a, q) => a + qMarks(q), 0)} marks`;
      $('#bank-list').innerHTML = list.map((q, i) => xqHTML(q, i, { showTopic: true })).join('') || '<div class="empty">No questions match these filters.</div>';
      wireXQ($('#bank-list'), list, (q, got) => { if (q.topic) { T(q.topic).exam = (T(q.topic).exam || 0) + got; save(); } }); };
    $('#bf-u').onchange = e => { S.bankf.u = e.target.value; save(); draw(); }; $('#bf-t').onchange = e => { S.bankf.tag = e.target.value; save(); draw(); };
    $('#bf-c').onchange = e => { S.bankf.ch = e.target.value; save(); draw(); }; $('#bf-shuf').onclick = () => { order = shuffle(all); draw(); };
    draw();
  }

  /* ---------- END-OF-YEAR TESTS + QUICK-FIRE ---------- */
  function mock() {
    crumbs('<b>End-of-year tests</b>');
    const years = [7, 8].filter(y => YEAR_OK(y));
    V().innerHTML = `<h1 class="display" style="font-size:clamp(34px,5vw,54px)">Tests</h1><p class="lede">Two ways to practise. An <b>end-of-year test</b> is a one-hour, 60-mark written test built fresh from the whole year each time — you mark it yourself with the mark scheme. <b>Quick-fire</b> quizzes are marked for you.</p>
      <div class="grid g2 sec" style="align-items:start">
      <div class="card"><div class="eyebrow">End-of-year test · self-marked</div><div class="stack" style="margin-top:12px">
        ${years.map(y => `<button class="btn primary" data-paper="${y}">Year ${y} test · 1 hour · 60 marks</button><p class="small muted" style="margin:0">Questions from every Year ${y} unit${y === 7 ? (S.settings.mag ? ', including Magnetism' : ' (Magnetism hidden)') : ''}, plus working-scientifically skills.</p>`).join('')}</div></div>
      <div class="card"><div class="eyebrow">Quick-fire · marked for you</div><form id="mockf" class="stack" style="margin-top:12px"><div class="row">${UNITS.filter(u => u.id !== 'S' && unitTopics(u.id).length).map(u => `<label class="pill" style="cursor:pointer;padding:6px 12px"><input type="checkbox" name="mu" value="${u.id}" checked> ${esc(u.short)}</label>`).join('')}</div>
        <div class="grid g3"><div><label class="eyebrow" for="mq">Questions</label><select id="mq" style="width:100%;margin-top:6px"><option>10</option><option selected>20</option><option>30</option></select></div><div><label class="eyebrow" for="mc">Calculations</label><select id="mc" style="width:100%;margin-top:6px"><option value="0.3" selected>30%</option><option value="0.5">50%</option><option value="0">None</option></select></div><div><label class="eyebrow" for="mt">Time</label><select id="mt" style="width:100%;margin-top:6px"><option value="60" selected>60 s each</option><option value="40">40 s each</option><option value="0">Untimed</option></select></div></div>
        <div><button class="btn" type="submit">${ICON.clock} Start quick-fire</button></div></form></div></div>
      ${S.mocks?.length ? `<div class="sec"><div class="eyebrow">Recent results</div><div class="row" style="margin-top:8px">${S.mocks.slice(-8).reverse().map(m => `<span class="pill ${m.p >= 70 ? 'good' : m.p >= 40 ? 'warn' : 'bad'}">${m.d} · ${m.u} · ${m.p}%</span>`).join('')}</div></div>` : ''}`;
    $$('[data-paper]').forEach(b => b.onclick = () => go('#/mock/p' + b.dataset.paper));
    $('#mockf').onsubmit = e => { e.preventDefault(); const us = $$('input[name=mu]:checked').map(i => i.value); if (!us.length) { toast('Choose at least one unit'); return; }
      const n = +$('#mq').value, cf = +$('#mc').value, tl = +$('#mt').value, ts = coreTopics().filter(t => us.includes(t.unit));
      const nCalc = Math.round(n * cf), calcTopics = ts.filter(t => V_(t).gens.length);
      const calcs = Array.from({ length: calcTopics.length ? nCalc : 0 }, () => { const t = pick(calcTopics); return { type: 'num', ...GEN[pick(V_(t).gens)](), topic: t.id }; });
      const mcqs = shuffle(ts.flatMap(t => V_(t).quiz.map(q => ({ ...q, topic: t.id })))).slice(0, n - calcs.length);
      const items = shuffle([...mcqs, ...calcs]);
      V().innerHTML = '<div class="quiz-wrap" style="margin:0 auto" id="qz"></div>';
      runQuiz($('#qz'), items, { mode: 'exam', title: 'Quick-fire', timeLimit: tl ? tl * items.length : 0, back: '#/mock', retry: () => mock(), onDone: r => { S.stats.mocks++; S.mocks ??= []; S.mocks.push({ d: today(), u: 'Quick-fire', p: r.p }); save(); addXP(r.correct * 12, 'Quick-fire'); } });
    };
  }
  /* Build a 60-mark, one-hour end-of-year test from the structured questions of one year: at most one question
     per topic on the first pass, a skills question or two, and never more than 4 questions from one unit. */
  function paper(yr) {
    const target = 60, mins = 60, year = TOPICS.filter(t => unitOf(t.unit).year === yr && !(unitOf(t.unit).extra && !S.settings.mag)).map(t => t.id), skills = TOPICS.filter(t => t.unit === 'S').map(t => t.id);
    const pool0 = [...TOPICS.filter(t => year.includes(t.id) || skills.includes(t.id)).flatMap(t => t.exam.map(q => ({ ...q, topic: t.id }))), ...(typeof BANK !== 'undefined' ? BANK.filter(q => year.includes(q.topic) || skills.includes(q.topic)) : [])];
    const pickTo = () => { const out = [], seen = new Set(), perU = {}; let m = 0, sk = 0; const pool = shuffle(pool0);
      for (const pass of [0, 1]) for (const q of pool) { const qm = qMarks(q), u = TOPIC[q.topic].unit, isS = u === 'S'; if (out.includes(q) || m + qm > target || (!pass && seen.has(q.topic)) || (isS && sk >= 8) || (perU[u] || 0) >= 4) continue; out.push(q); seen.add(q.topic); perU[u] = (perU[u] || 0) + 1; if (isS) sk += qm; m += qm; if (m === target) return out; } return out; };
    let qs = [], total = 0; for (let k = 0; k < 400 && total !== target; k++) { const o = pickTo(), tt = o.reduce((a, q) => a + qMarks(q), 0); if (Math.abs(tt - target) < Math.abs(total - target) || !qs.length) { qs = o; total = tt; } }
    const ord = id => { const t = TOPIC[id]; return (t.unit === 'S' ? 99 : +t.unit) * 100 + TOPICS.indexOf(t); }; qs.sort((a, b) => ord(a.topic) - ord(b.topic));
    const name = `Year ${yr} end-of-year test`;
    crumbs(`<a href="#/mock" style="color:inherit">Tests</a> / <b>${name}</b>`);
    V().innerHTML = `<div style="max-width:880px"><div class="eyebrow">Key Stage 3 physics · practice test</div><h1 class="display" style="font-size:clamp(30px,4.4vw,48px);margin:6px 0">${name}</h1>
      <div class="row"><span class="pill">1 hour</span><span class="pill">${total} marks</span><span class="pill">${qs.length} questions</span><span class="pill warn mono" id="ptimer">${mins}:00</span><button class="btn sm" id="pstart">Start timer</button></div>
      <p class="small muted">Answer all the questions. Show your working in calculations and give the unit. Use g = 10 N/kg on Earth. You may use a calculator and a ruler.</p>
      <div id="plist">${qs.map((q, i) => xqHTML(q, i, { showTopic: true, noFoot: true, num: 'Q' + (i + 1) })).join('')}</div>
      <div class="row" style="margin:24px 0"><button class="btn primary" id="pmark">Finish and show the mark scheme</button></div><div id="pres"></div></div>`;
    let tick = null; $('#pstart').onclick = () => { if (tick) return; const end = Date.now() + mins * 60e3; tick = setInterval(() => { const el = $('#ptimer'); if (!el) { clearInterval(tick); return; } const l = Math.max(0, Math.round((end - Date.now()) / 1000)); el.textContent = `${Math.floor(l / 60)}:${String(l % 60).padStart(2, '0')}`; if (!l) { clearInterval(tick); toast('Time is up'); } }, 1000); };
    cleanup = () => clearInterval(tick);
    $('#pmark').onclick = () => { clearInterval(tick); $$('#plist .ms').forEach(m => m.hidden = false); $('#pmark').hidden = true;
      $('#pres').innerHTML = `<div class="card"><p>Tick the points you made in each mark scheme, then save your score.</p><button class="btn primary" id="psave">Save my marks</button> <span id="pscore" class="mono"></span></div>`;
      $('#psave').onclick = () => { const got = $$('#plist .xq-part').reduce((a, p) => a + Math.min(+p.dataset.m, $$('input:checked', p).length), 0), p = Math.round(got / total * 100); $('#pscore').textContent = `${got} / ${total} (${p}%)`; $('#psave').disabled = true; S.stats.mocks++; S.stats.examMarks += got; S.mocks ??= []; S.mocks.push({ d: today(), u: 'Year ' + yr + ' test', p }); save(); addXP(got * 3, 'End-of-year test'); checkBadges(); if (p >= 70) burst(); }; };
  }

  /* ---------- KEY EQUATIONS ---------- */
  function equations() {
    crumbs('<b>Key equations</b>');
    const row = e => `<div class="eq-row"><span class="eqm">${M(e[1])}</span><span class="d">${esc(e[0])} <span class="pill" style="font-size:10px;padding:1px 6px">Year ${e[2].includes('y8') ? 8 : 7}</span>${e[3] ? ' ' + tagHTML('ch', 1) : ''}</span></div>`;
    const list = EQ_LIST.filter(e => inScope(e[2] || ''));
    V().innerHTML = `<h1 class="display" style="font-size:clamp(34px,5vw,54px)">Key equations</h1><p class="lede">The ${list.length} equations for ${yearName(S.settings.year)}. Learn each one in words <i>and</i> symbols, with its units. In a test, write the equation, put the numbers in, then give the answer with its unit.</p>
      <div class="row" style="margin:14px 0"><a class="btn primary" href="#/game/rush">${ICON.game} Drill them in Equation Rush</a><button class="btn" id="eqtest">Cover the equations (self-test)</button></div>
      <div class="grid g2" style="align-items:start" id="eqlists">
        <div class="card flat" style="padding:10px 18px"><div class="row" style="justify-content:space-between"><h2 class="h3" style="font-size:19px;padding:8px 0;margin:0">Equations to learn</h2><span class="pill acc">${list.length}</span></div>${list.map(row).join('')}</div>
        <div class="card flat" style="padding:10px 18px"><h2 class="h3" style="font-size:19px;padding:8px 0;margin:0">Rearranging: the formula triangle</h2>
          ${rich('<p class="small">For an equation like $W = m × g$, put the quantity on its own (W) at the top of a triangle and the two multiplied quantities (m and g) at the bottom. Cover the one you want: what is left tells you whether to multiply or divide.</p>[[d:triangle]]')}
          <h3 class="h3" style="font-size:16px;margin:18px 0 6px">Useful values</h3><div class="tbl" style="margin:0"><table><tr><td>gravitational field strength on Earth</td><td>g = 10 N/kg</td></tr><tr><td>on the Moon · Mars · Jupiter</td><td>1.6 · 3.7 · 25 N/kg</td></tr><tr><td>density of water</td><td>1 g/cm³ = 1000 kg/m³</td></tr><tr><td>speed of sound in air</td><td>about 330 m/s</td></tr><tr><td>speed of light</td><td>300 000 000 m/s</td></tr><tr><td>human hearing</td><td>20 Hz to 20 000 Hz</td></tr><tr><td>walking · cycling</td><td>about 1.5 · 6 m/s</td></tr></table></div></div>
      </div>
      <div class="card flat sec" style="padding:10px 18px"><h2 class="h3" style="font-size:19px;padding:8px 0;margin:0">Units and converting</h2><div class="tbl" style="border:0;margin:0"><table class="const-table"><tr>${[['1 km', '1000 m'], ['1 m', '100 cm'], ['1 cm', '10 mm'], ['1 kg', '1000 g'], ['1 minute', '60 s'], ['1 hour', '3600 s'], ['1 m²', '10 000 cm²'], ['1 cm³', '1 ml']].map(r => `<td><b>${r[0]}</b><br><span class="mono">= ${r[1]}</span></td>`).join('')}</tr></table></div></div>
      <div class="row sec" style="margin:24px 0 6px"><input id="eqf" type="search" placeholder="Filter by topic, e.g. density, pressure, speed…" aria-label="Filter equations" style="flex:1;min-width:200px;max-width:420px;padding:10px 12px;border-radius:10px;border:1px solid var(--line-2);background:var(--surface)"></div>
      <div class="eq-cols" id="eqlist">${allTopics().filter(t => t.eqs.length).map(t => `<div class="eq-card" data-s="${esc((t.id + ' ' + t.title + ' ' + t.eqs.map(e => e.join(' ')).join(' ')).toLowerCase())}"><h4><span class="dot" style="--uc:${ucol(t.unit)}"></span><a href="#/t/${t.id}" style="color:inherit;text-decoration:none">${t.id} ${esc(t.title)}</a></h4>${t.eqs.map(([e, d]) => `<div class="eq-row">${M(e)}<span class="d">${esc(d)}</span></div>`).join('')}</div>`).join('')}</div>`;
    $('#eqf').oninput = e => { const q = e.target.value.toLowerCase().trim(); $$('.eq-card', V()).forEach(c => c.hidden = q && !c.dataset.s.includes(q)); };
    $('#eqtest').onclick = () => { const on = $('#eqlists').classList.toggle('covered'); $('#eqtest').textContent = on ? 'Show the equations' : 'Cover the equations (self-test)'; };
    $('#eqlists').addEventListener('click', e => { const r = e.target.closest('.eq-row'); if (r && $('#eqlists').classList.contains('covered')) r.classList.toggle('peek'); });
  }

  /* ---------- PRACTICALS ---------- */
  function practicals() {
    crumbs('<b>Practicals</b>');
    const list = PRACTICALS.filter(p => inScope(p.f));
    S.rp ??= [];
    V().innerHTML = `<h1 class="display" style="font-size:clamp(34px,5vw,54px)">Practicals</h1><p class="lede">The ${list.length} experiments for ${yearName(S.settings.year)}. For each one, know what you change, what you measure and what you keep the same, how to do it safely, and what the results show. Test questions often ask you to plan or improve an experiment like these.</p>
      <div class="sec">${list.map(p => { const t = TOPIC[p.topic], u = unitOf(t.unit); return `<details class="prac" data-rp="${p.n}" style="--uc:${u.css}"><summary><span class="pno">Y${u.year}</span><span><b>${esc(p.title)}</b><br><span class="small muted">${esc(p.aim)}</span></span>${ICON.chev}</summary><div class="pb">
        <h5>Equipment</h5><p style="margin:0">${rich(p.kit)}</p>
        <h5>Variables</h5><ul>${p.vars.map(m => `<li>${rich(m)}</li>`).join('')}</ul>
        <h5>Method</h5><ol>${p.method.map(m => `<li>${rich(m)}</li>`).join('')}</ol><h5>Results and conclusion</h5><p style="margin:0">${rich(p.analysis)}</p><h5>Safety and top tips</h5><ul>${p.tips.map(m => `<li>${rich(m)}</li>`).join('')}</ul>
        <div class="row" style="margin-top:12px"><a class="btn sm" href="#/t/${p.topic}">Notes: ${p.topic} ${esc(t.title)}</a>${t.sims.length ? `<a class="btn sm primary" href="#/t/${p.topic}/explore">Try the simulation</a>` : ''}</div></div></details>`; }).join('')}</div>
      <div class="note-strip">These are typical versions of each experiment. Your school may use different equipment — always follow your teacher’s instructions and safety rules in the lab.</div>`;
    $$('details.prac').forEach(d => d.addEventListener('toggle', () => { if (d.open) { const n = +d.dataset.rp; if (!S.rp.includes(n)) { S.rp.push(n); save(); addXP(5, 'Practical'); } } }));
  }

  /* ---------- ARCADE ---------- */
  function arcade() {
    crumbs('<b>Arcade</b>');
    V().innerHTML = `<h1 class="display" style="font-size:clamp(34px,5vw,54px)">Arcade</h1><p class="lede">Short, replayable games for the things that need to become automatic: equations, units, circuit symbols, floating and sinking, and quick recall.</p>
      <div class="grid g3 sec">${Object.entries(GAMES).map(([id, g]) => `<a class="game-card" href="#/game/${id}"><div class="art"><canvas data-art="${id}"></canvas></div><div class="row" style="justify-content:space-between"><span class="eyebrow">${g.skill}</span><span class="pill">${S.games[id] ? 'best ' + S.games[id].best : 'new'}</span></div><div class="h3">${g.title}</div><p class="small muted" style="margin:0">${g.blurb}</p></a>`).join('')}
      <a class="game-card" href="#/daily"><div class="art" style="display:grid;place-items:center"><span style="font:800 44px var(--f-display);color:#FFB547">${new Date().getDate()}</span></div><div class="row" style="justify-content:space-between"><span class="eyebrow">Daily</span><span class="pill">${S.daily[today()] != null ? S.daily[today()] + '/5 today' : 'not played'}</span></div><div class="h3">Daily challenge</div><p class="small muted" style="margin:0">Five questions from your year, the same for everyone today.</p></a></div>`;
    $$('[data-art]').forEach(cv => drawGameArt(cv, cv.dataset.art));
  }

  function daily() {
    crumbs('<a href="#/arcade" style="color:inherit">Arcade</a> / <b>Daily challenge</b>');
    let seed = +today().replace(/-/g, ''); const rng = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    const pool = coreTopics().flatMap(t => V_(t).quiz.map(q => ({ ...q, topic: t.id }))); const items = []; while (items.length < 5) { const q = pool[Math.floor(rng() * pool.length)]; if (!items.includes(q)) items.push(q); }
    V().innerHTML = `<div class="quiz-wrap" style="margin:0 auto"><h1 class="display" style="font-size:40px;margin-bottom:6px">Daily challenge</h1><p class="muted">${new Date().toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' })}</p><div id="qz" style="margin-top:18px"></div></div>`;
    runQuiz($('#qz'), items, { title: 'Daily', back: '#/home', onDone: r => { const first = S.daily[today()] == null; S.daily[today()] = Math.max(S.daily[today()] || 0, r.correct); save(); if (first) addXP(r.correct * 12 + 10, 'Daily challenge'); } });
  }

  /* ---------- PROGRESS ---------- */
  function progress() {
    crumbs('<b>Progress</b>');
    const L = level(), days = Array.from({ length: 14 }, (_, i) => { const d = new Date(Date.now() - (13 - i) * 864e5); const k = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); return [d, S.days[k] || 0]; });
    const mx = Math.max(50, ...days.map(d => d[1]));
    const chart = `<svg viewBox="0 0 560 170" width="100%" role="img" aria-label="XP earned over the last 14 days" style="max-width:100%">${[0, .5, 1].map(f => `<line x1="34" x2="556" y1="${140 - f * 120}" y2="${140 - f * 120}" stroke="var(--line)" stroke-width="1"/><text x="28" y="${144 - f * 120}" text-anchor="end" font-size="10" fill="var(--muted)" font-family="var(--f-mono)">${Math.round(mx * f)}</text>`).join('')}${days.map(([d, v], i) => { const hh = v / mx * 120; return `<rect x="${40 + i * 37}" y="${140 - hh}" width="26" height="${Math.max(hh, 1)}" rx="4" fill="${i === 13 ? 'var(--accent)' : 'var(--u4)'}" opacity="${v ? 1 : .25}"><title>${v} XP</title></rect><text x="${53 + i * 37}" y="158" text-anchor="middle" font-size="10" fill="var(--muted)" font-family="var(--f-mono)">${d.getDate()}</text>`; }).join('')}</svg>`;
    V().innerHTML = `<h1 class="display" style="font-size:clamp(34px,5vw,54px)">Progress</h1>
      <div class="grid g4 sec">${[['Level', L.l, L.name], ['Total XP', S.xp, `${Math.max(0, Math.round(L.next - S.xp))} to next level`], ['Streak', S.streak.n || 0, 'days in a row'], ['Stars shining', coreTopics().filter(t => mastery(t) >= .7).length + '/' + coreTopics().length, 'topics at 70%+']].map(([a, b, c]) => `<div class="card"><div class="eyebrow">${a}</div><div style="font:800 44px/1.05 var(--f-display);margin-top:6px">${b}</div><div class="small muted">${c}</div></div>`).join('')}</div>
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
    V().innerHTML = `<div class="notes"><h1 class="display" style="font-size:clamp(34px,5vw,54px);margin-bottom:12px">About Launchpad</h1>
      <p class="lede">A study companion for Key Stage 3 physics in Year 7 and Year 8: notes, simulations, every practical, flashcards, quizzes, unlimited calculation practice, a bank of test questions and full end-of-year tests.</p>
      <section><h3>Year 7 or Year 8</h3><p>Choose your year with the button in the top bar. Launchpad then shows only your topics, practicals, equations and test questions. Choose <b>Both years</b> to revise everything. Magnetism is an additional Year 7 topic that is taught if there is time; you can hide it. <a href="javascript:void 0" data-settings>Open settings</a></p>
      <div class="tbl"><table><tr><th>Year 7</th><th>Year 8</th></tr><tr><td>Basic forces · Measuring forces · Mass and weight · Density · Upthrust · Energy · Magnetism (additional)</td><td>Further forces (moments, friction, speed, pressure) · Electricity · Sound · Light</td></tr></table></div></section>
      <section><h3>★ Challenge</h3><p>Items marked <span class="tag ch sm">★ Challenge</span> go deeper than the core lesson — ideas you meet again at GCSE. Try them once you are confident with the rest of the topic.</p></section>
      <section><h3>How to study a topic</h3><ol><li><b>Learn</b> — read the notes, step through the worked examples, and rate yourself on the learning checklist.</li><li><b>Explore</b> — play with the simulation until the idea makes sense.</li><li><b>Flashcards</b> — cards you know move to higher boxes and come up less often.</li><li><b>Quiz</b> — ten questions with instant feedback. Your best score counts towards mastery.</li><li><b>Calculate</b> — unlimited calculations with new numbers and full working.</li><li><b>Test questions</b> — questions like the ones in your tests, with mark schemes to mark your own work. There are more in the <a href="#/bank">test question bank</a> and in the <a href="#/mock">end-of-year tests</a>.</li></ol></section>
      <section><h3>Mastery and your sky</h3><p>Topic mastery combines your best quiz score (40%), flashcards known (20%), your checklist ratings (20%) and correct calculations (20%). Each topic is a star on the home page; it shines brighter as mastery grows, and 70% counts as “shining”.</p></section>
      <section><h3>Keyboard shortcuts</h3><div class="tbl"><table><tr><th>Key</th><th>Action</th></tr><tr><td><kbd>/</kbd> or <kbd>Ctrl</kbd>+<kbd>K</kbd></td><td>Search everything</td></tr><tr><td><kbd>A</kbd>–<kbd>D</kbd> / <kbd>1</kbd>–<kbd>4</kbd></td><td>Answer a quiz question</td></tr><tr><td><kbd>Enter</kbd></td><td>Next question</td></tr><tr><td><kbd>Space</kbd></td><td>Flip a flashcard</td></tr><tr><td><kbd>1</kbd>–<kbd>4</kbd> (flipped card)</td><td>Rate: again / hard / good / easy</td></tr></table></div></section>
      <section><h3>About the content</h3><div class="box why"><b class="lbl">Please note</b><p>The notes, questions, tests and mark schemes were written for this app to match a typical Key Stage 3 physics course. Your school’s scheme of work may order or name topics differently — always follow your teacher’s guidance. Launchpad uses g = 10 N/kg on Earth.</p></div></section>
      <section><h3>Your data</h3><p>Everything you do is stored in this browser only. Use <a href="#/progress">Progress</a> to back up or restore.</p></section></div>`;
    wireSettingsLinks();
  }

  /* ---------- Search palette ---------- */
  let index = null;
  function buildIndex() {
    index = [];
    allTopics().forEach(t => { index.push({ k: 'Topic', t: `${t.id} ${t.title}`, s: t.short, h: `#/t/${t.id}`, x: (t.id + ' ' + t.title + ' ' + t.short + ' ' + t.summary).toLowerCase() });
      t.learn.forEach((l, i) => index.push({ k: 'Notes', t: l.h.replace(/<[^>]+>/g, ''), s: `${t.id} ${t.title}`, h: `#/t/${t.id}`, x: (l.h + ' ' + l.html.replace(/<[^>]+>/g, ' ')).toLowerCase() }));
      t.eqs.forEach(([e, d]) => index.push({ k: 'Equation', t: M(e), s: `${d || ''} · ${t.id}`, h: `#/t/${t.id}`, x: (e + ' ' + d + ' ' + t.title).toLowerCase(), raw: true }));
      t.cards.forEach(([q, a]) => index.push({ k: 'Card', t: q.replace(/<[^>]+>/g, ''), s: a.replace(/<[^>]+>/g, '').slice(0, 80), h: `#/t/${t.id}/cards`, x: (q + ' ' + a).toLowerCase() })); });
    PRACTICALS.filter(p => inScope(p.f)).forEach(p => index.push({ k: 'Practical', t: p.title, s: p.aim, h: '#/practicals', x: (p.title + ' ' + p.aim).toLowerCase() }));
    Object.entries(GAMES).forEach(([id, g]) => index.push({ k: 'Game', t: g.title, s: g.blurb, h: '#/game/' + id, x: (g.title + ' ' + g.blurb).toLowerCase() }));
    [['Key equations', '#/equations'], ['Practicals', '#/practicals'], ['Test question bank', '#/bank'], ['Settings: Year 7 or Year 8', '#/about'], ['End-of-year tests', '#/mock'], ['Progress', '#/progress'], ['Daily challenge', '#/daily']].forEach(([t, hh]) => index.push({ k: 'Page', t, s: '', h: hh, x: t.toLowerCase() }));
  }
  function openPalette() {
    if ($('.palette-back')) return; index || buildIndex();
    const back = h('div', { class: 'palette-back', role: 'dialog', 'aria-label': 'Search' }, `<div class="palette"><input id="pal" placeholder="Search topics, notes, equations, flashcards…" aria-label="Search" autocomplete="off"><ul id="palres"></ul></div>`);
    document.body.append(back); const inp = $('#pal'), ul = $('#palres'); let sel = 0, res = [];
    const close = () => back.remove();
    const show = () => { const q = inp.value.toLowerCase().trim(); const terms = q.split(/\s+/).filter(Boolean);
      res = q ? index.filter(it => terms.every(w => it.x.includes(w))).sort((a, b) => ({ Topic: 0, Page: 1, Equation: 2, Notes: 3, Practical: 4, Game: 5, Card: 6 }[a.k] - { Topic: 0, Page: 1, Equation: 2, Notes: 3, Practical: 4, Game: 5, Card: 6 }[b.k])).slice(0, 40) : index.filter(it => it.k === 'Topic' || it.k === 'Page').slice(0, 14);
      sel = 0; ul.innerHTML = res.length ? res.map((r, i) => `<li><a href="${r.h}" class="${i === sel ? 'sel' : ''}"><span class="kind">${r.k}</span><span><span class="t">${r.raw ? r.t : esc(r.t)}</span><br><span class="s">${esc(r.s)}</span></span><span class="muted">↵</span></a></li>`).join('') : '<li class="empty" style="margin:8px">No matches. Try a word like “density” or “echo”.</li>'; };
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
