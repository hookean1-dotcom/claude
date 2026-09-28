/* ==========================================================
   Casefile · application shell, router and views
   ========================================================== */
const TOPIC = Object.fromEntries(TOPICS.map(t => [t.id, t]));
const vis = t => unitInScope(t.unit);
const allTopics = () => TOPICS.filter(vis);
const unitTopics = uid => TOPICS.filter(t => t.unit === uid && vis(t));
const ucol = uid => unitOf(uid)?.css || 'var(--accent)';
const pct = x => Math.round(x * 100) + '%';
const areaTag = uid => { const u = unitOf(uid); return u?.kind === 'int' ? '<span class="tag int">Controlled assessment</span>' : u?.kind === 'ext' ? '<span class="tag ext">Exam</span>' : ''; };
const kindWord = c => ({ Case: 'case', Study: 'study', Theory: 'theory', Campaign: 'campaign', Report: 'report' })[c.c] || 'case file';

/* flashcard deck for a topic: concept cards + case cards */
function deck(t) {
  const d = (t.cards || []).map((c, i) => ({ k: 'k' + i, q: c[0], a: c[1] }));
  (t.cases || []).forEach(id => { const c = CASES[id]; if (c) d.push({ k: 'c:' + id, q: `<span class="eyebrow" style="position:static;display:block;margin-bottom:10px">Name the ${kindWord(c)}</span>${esc(c.f)}`, a: `<b><i class="cn">${esc(c.n)}</i> (${c.y})</b><br><br>${esc(c.p)}` }); });
  return d;
}
function mastery(t) {
  const s = T(t.id), q = (s.quiz || 0) / 100, d = deck(t);
  const ck = d.length ? d.filter(c => (s.cards[c.k] || 0) >= 3).length / d.length : 0;
  const sp = (t.spec || []).reduce((a, _, i) => a + (s.spec[i] ? (s.spec[i] - 1) / 2 : 0), 0) / Math.max(1, (t.spec || []).length);
  const ex = t.exam?.length ? (s.exam || 0) : q;
  return clamp(0.4 * q + 0.2 * ck + 0.2 * sp + 0.2 * ex, 0, 1);
}
const unitMastery = uid => { const ts = unitTopics(uid); return ts.length ? ts.reduce((a, t) => a + mastery(t), 0) / ts.length : 0; };

/* ---------- Badges ---------- */
const BADGES = [
  ['first', 'First statement', 'Finish your first quiz', () => S.stats.quizzes >= 1, '1'],
  ['perfect', 'Beyond reasonable doubt', 'Score 100% on a quiz', () => S.stats.perfect >= 1, '✓'],
  ['streak3', 'On patrol', 'Study 3 days in a row', () => S.streak.n >= 3, '3'],
  ['streak7', 'Full shift pattern', 'Study 7 days in a row', () => S.streak.n >= 7, '7'],
  ['cards50', 'Case notes', 'Review 50 flashcards', () => S.stats.cardsSeen >= 50, '≡'],
  ['cards250', 'Records office', 'Review 250 flashcards', () => S.stats.cardsSeen >= 250, '¶'],
  ['tools5', 'Field kit', 'Try 5 interactive tools', () => S.stats.tools.length >= 5, '⌕'],
  ['tools20', 'Forensic toolkit', 'Try 20 interactive tools', () => S.stats.tools.length >= 20, '⚲'],
  ['assess', 'Know the brief', 'Read the Assessment page', () => !!S.assessSeen, 'A'],
  ['mock', 'Exam conditions', 'Complete a timed mock paper', () => S.stats.mocks >= 1, '⏱'],
  ['exam', 'Moderator’s eye', 'Self-mark 25 marks of practice answers', () => S.stats.examMarks >= 25, 'M'],
  ['exam100', 'Chief examiner', 'Self-mark 100 marks of practice answers', () => S.stats.examMarks >= 100, 'M+'],
  ['u1', 'Campaigner', '70% mastery of Unit 1', () => unitMastery('1') >= .7, 'U1'],
  ['u2', 'Theorist', '70% mastery of Unit 2', () => unitMastery('2') >= .7, 'U2'],
  ['lvl5', 'Plain clothes', 'Reach level 5', () => level().l >= 5, '★'],
  ['lvl10', 'Top brass', 'Reach level 10', () => level().l >= 10, '★★']
];
function checkBadges() { BADGES.forEach(([id, name, , test]) => { try { if (!S.badges.includes(id) && test()) { S.badges.push(id); save(); setTimeout(() => { toast(`<b>Badge</b> ${esc(name)}`, 3200); sfx.win(); }, 400); } } catch (e) { } }); }

const App = (() => {
  let cleanup = null, lastTopic = null, index = null;
  const V = () => $('#view');
  const go = hh => { location.hash = hh; };
  const crumbs = html => { $('#crumbs').innerHTML = html; };

  /* ---------- chrome ---------- */
  function chrome() {
    const nav = [['home', 'Home', '#/home'], ['map', 'All topics', '#/topics'], ['book', 'Case files', '#/cases'], ['pillar', 'Laws & terms', '#/statutes'], ['flask', 'Assessment', '#/assess'], ['clock', 'Mock papers', '#/mock'], ['game', 'Arcade', '#/arcade'], ['chart', 'Progress', '#/progress']];
    const uLink = u => `<a class="unit-a${unitInScope(u.id) ? '' : ' off'}" href="#/unit/${u.id}" data-nav="#/unit/${u.id}" style="--uc:${u.css}"><span class="unit-line" style="color:${u.css}"></span><span style="min-width:0"><span>${esc(u.name)}</span><small>${esc(u.code)}</small></span><span class="meter" data-um="${u.id}"></span></a>`;
    $('#side').innerHTML = `<a class="brand" href="#/home" aria-label="Casefile home"><span class="brand-mark">${ICON.print}</span><span><span class="brand-name">Case<em>file</em></span><br><span class="brand-sub">WJEC L3 Criminology</span></span></a>
      <nav class="nav" aria-label="Main">${nav.map(([ic, l, hh]) => `<a href="${hh}" data-nav="${hh}">${ICON[ic]}<span>${l}</span></a>`).join('')}
      <div class="nav-label">The four units</div>${UNITS.filter(u => u.kind).map(uLink).join('')}
      <div class="nav-label">Skills</div>${uLink(unitOf('S'))}
      <div class="nav-label">More</div><a href="#/about" data-nav="#/about">${ICON.help}<span>About &amp; help</span></a></nav>
      <div class="side-foot">Built around the WJEC Level 3 Applied Diploma in Criminology specification (version 6, June 2022). Law and policy are stated as understood in September 2026. Progress is saved in this browser only.</div>`;
    $('#tabbar').innerHTML = [['home', 'Home', '#/home'], ['map', 'Topics', '#/topics'], ['book', 'Files', '#/cases'], ['game', 'Arcade', '#/arcade'], ['chart', 'Progress', '#/progress']].map(([ic, l, hh]) => `<a href="${hh}" data-nav="${hh}">${ICON[ic]}<span>${l}</span></a>`).join('');
    $('#search-btn').innerHTML = `${ICON.search}<span>Search topics, case files, theories…</span><kbd>/</kbd>`;
    $('#menu-btn').innerHTML = ICON.menu;
    $('#menu-btn').onclick = () => toggleSide(true);
    $('#search-btn').onclick = openPalette;
    $('#theme-btn').onclick = toggleTheme;
    $('#route-chip').onclick = openSettings;
    $('#sound-btn').onclick = () => { S.settings.sound = !S.settings.sound; save(); refreshChrome(); if (S.settings.sound) sfx.good(); };
    refreshChrome();
  }
  function toggleSide(open) { const s = $('#side'); s.classList.toggle('open', open); let scrim = $('.scrim'); if (open && !scrim) { scrim = h('div', { class: 'scrim', onclick: () => toggleSide(false) }); document.body.append(scrim); } if (!open && scrim) scrim.remove(); }
  function isDark() { const t = document.documentElement.dataset.theme; return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches; }
  function toggleTheme() { const next = isDark() ? 'light' : 'dark'; document.documentElement.dataset.theme = next; S.settings.theme = next; save(); refreshChrome(); }
  function refreshChrome() {
    const L = level();
    $('#xp-chip').innerHTML = `<span style="color:var(--gilt)">${ICON.star.replace('<svg', '<svg width="14" height="14" style="stroke:currentColor;fill:none;stroke-width:2"')}</span>Lv ${L.l} · ${S.xp} XP`;
    $('#xp-chip').title = L.name;
    $('#streak-chip').textContent = `${S.streak.n || 0}-day streak`;
    $('#theme-btn').innerHTML = isDark() ? ICON.sun : ICON.moon; $('#theme-btn').title = isDark() ? 'Light theme' : 'Dark theme';
    $('#sound-btn').innerHTML = S.settings.sound ? ICON.sound : ICON.mute; $('#sound-btn').title = S.settings.sound ? 'Sound on' : 'Sound off';
    $('#route-chip').innerHTML = QUALS[S.settings.qual][0];
    $('#route-chip').title = 'Diploma or Certificate?';
    $$('[data-um]').forEach(e => e.textContent = unitInScope(e.dataset.um) ? pct(unitMastery(e.dataset.um)) : '');
    const hsh = location.hash || '#/home';
    $$('[data-nav]').forEach(el => el.classList.toggle('on', hsh === el.dataset.nav || (el.dataset.nav !== '#/home' && hsh.startsWith(el.dataset.nav + '/')) || (el.dataset.nav.startsWith('#/unit/') && hsh.startsWith('#/t/') && TOPIC[decodeURIComponent(hsh.split('/')[2])]?.unit === el.dataset.nav.split('/')[2])));
  }

  /* ---------- course settings: Diploma or Certificate ---------- */
  function openSettings() {
    if ($('.palette-back')) return;
    const back = h('div', { class: 'palette-back', role: 'dialog', 'aria-label': 'Your qualification' }, `<div class="palette settings-dlg"><h2 class="h3" style="margin:0 0 4px">Which qualification are you taking?</h2>
      <p class="small muted" style="margin:0 0 6px">The Applied Diploma is four units. The Applied Certificate is the first two units only. Casefile hides units you are not taking.</p>
      <div class="route-grid">${Object.entries(QUALS).map(([k, [n, d]]) => `<button class="route-opt ${S.settings.qual === k ? 'on' : ''}" data-q="${k}"><b>${n}</b><span>${d}</span></button>`).join('')}</div>
      <div class="row" style="justify-content:flex-end;margin-top:8px"><button class="btn primary" id="set-done">Done</button></div></div>`);
    document.body.append(back);
    $$('.route-opt', back).forEach(b => b.onclick = () => { S.settings.qual = b.dataset.q; S.settings.chosen = true; save(); $$('.route-opt', back).forEach(x => x.classList.toggle('on', x === b)); });
    const close = () => { back.remove(); index = null; chrome(); route(); };
    $('#set-done').onclick = close; back.onclick = e => { if (e.target === back) close(); };
    back.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  /* ---------- case popover (delegated) ---------- */
  function showCase(btn) {
    closePop();
    const c = CASES[btn.dataset.case]; if (!c) return;
    const u = unitOf(c.a);
    const pop = h('div', { class: 'pop', role: 'dialog', 'aria-label': c.n, style: `--uc:${u?.css || 'var(--accent)'}` }, `<h4>${esc(c.n)}</h4><div class="meta">${c.y} · ${esc(c.c || '')} · ${esc(u?.short || '')}</div><p>${esc(c.f)}</p><div class="law">${rich(c.p)}</div>${c.t && TOPIC[c.t] ? `<p class="small" style="margin:8px 0 0"><a href="#/t/${c.t}/cases">${esc(TOPIC[c.t].ref)} · ${esc(TOPIC[c.t].title)}</a></p>` : ''}`);
    document.body.append(pop);
    const r = btn.getBoundingClientRect(), pw = pop.offsetWidth, ph = pop.offsetHeight;
    let x = clamp(r.left, 12, innerWidth - pw - 12), y = r.bottom + 8; if (y + ph > innerHeight - 12) y = Math.max(12, r.top - ph - 8);
    pop.style.left = x + 'px'; pop.style.top = y + 'px';
  }
  const closePop = () => $$('.pop').forEach(p => p.remove());
  document.addEventListener('click', e => { const b = e.target.closest('.case'); if (b) { e.preventDefault(); e.stopPropagation(); showCase(b); return; } if (!e.target.closest('.pop')) closePop(); });
  addEventListener('scroll', closePop, { passive: true });

  /* ---------- router ---------- */
  function route() {
    if (cleanup) { try { cleanup(); } catch (e) { } cleanup = null; }
    toggleSide(false); closePop();
    const parts = (location.hash || '#/home').replace(/^#\/?/, '').split('/').map(decodeURIComponent);
    const v = V(); v.classList.remove('enter'); void v.offsetWidth; v.classList.add('enter');
    const [a, b, c] = parts;
    try {
      if (!a || a === 'home') home();
      else if (a === 'topics') topics();
      else if (a === 'unit' && unitOf(b)) unit(b);
      else if (a === 't' && TOPIC[b]) topic(b, c || 'learn');
      else if (a === 'cases') casebook();
      else if (a === 'statutes') statutes(b || 'acts');
      else if (a === 'assess') assess();
      else if (a === 'arcade') arcade();
      else if (a === 'game' && GAMES[b]) { crumbs(`<a href="#/arcade">Arcade</a> / <b>${GAMES[b].title}</b>`); V().innerHTML = '<div id="g"></div>'; cleanup = mountGame($('#g'), b); }
      else if (a === 'mock') b ? mockPaper(b) : mock();
      else if (a === 'daily') daily();
      else if (a === 'progress') progress();
      else if (a === 'about') about();
      else home();
    } catch (err) { console.error(err); V().innerHTML = `<div class="empty">This page could not be loaded. <a href="#/home">Go to the home page</a></div>`; }
    refreshChrome();
    if (!(a === 't' && b === lastTopic)) scrollTo({ top: 0 });
    lastTopic = a === 't' ? b : null;
  }

  /* ---------- HOME ---------- */
  function home() {
    crumbs('<b>Home</b>');
    const L = level(), ts = allTopics().filter(t => t.unit !== 'S'), mastered = ts.filter(t => mastery(t) >= .7).length;
    const last = TOPIC[S.last];
    const rec = ts.map(t => ({ t, m: mastery(t) })).sort((x, y) => x.m - y.m).slice(0, 3);
    const inScopeCases = Object.values(CASES).filter(c => unitInScope(c.a));
    const cod = inScopeCases[Math.floor(Date.now() / 864e5) % inScopeCases.length];
    const dDone = S.daily[today()];
    V().innerHTML = `
    ${!S.settings.chosen ? `<div class="card sec onboard" style="margin-top:0;margin-bottom:22px"><div class="eyebrow">Welcome to Casefile</div><h2 class="h3" style="margin:6px 0">Diploma or Certificate?</h2><p class="small muted" style="margin:0 0 12px">The Applied Diploma is all four units. The Applied Certificate is Units 1 and 2 only. Casefile will hide the units you are not taking. You can change this at any time from the chip at the top of the page.</p><button class="btn primary" id="ob-go">Choose my qualification</button></div>` : ''}
    <section class="hero" aria-label="Your progress">
      <div class="hero-grid">
        <div><div class="eyebrow">WJEC Level 3 Criminology · Level ${L.l} · ${esc(L.name)}</div>
          <h1 class="display" style="margin-top:12px">Every topic is a case. <em>Close them all.</em></h1>
          <p>Notes, case files, theories, interactive tools and assessment practice for the whole specification. Each card on the board is one assessment criterion. Master it and the case is stamped closed.</p>
          <div class="row" style="margin-top:18px">${last && vis(last) ? `<a class="btn gilt" href="#/t/${last.id}">${ICON.play} Continue: ${esc(last.title)}</a>` : `<a class="btn gilt" href="#/t/1.1.1">${ICON.play} Start with types of crime</a>`}
          <a class="btn" href="#/daily">${dDone != null ? `Daily briefing ✓ ${dDone}/5` : 'Daily briefing'}</a></div></div>
        <div class="hero-stats"><div class="hstat"><b>${S.xp}</b><span>XP</span></div><div class="hstat"><b>${S.streak.n || 0}</b><span>day streak</span></div><div class="hstat"><b>${mastered}<small style="font-size:16px;opacity:.7">/${ts.length}</small></b><span>cases closed</span></div></div>
      </div>
      <canvas class="board" id="board" role="img" aria-label="Evidence board: one card per assessment criterion, stamped closed when mastered"></canvas>
      <div class="shelf-tip" id="shelf-tip"></div>
    </section>
    <div class="sec"><div class="sec-head"><h2 class="h2">The ${S.settings.qual === 'cert' ? 'two' : 'four'} units</h2><span class="muted">${S.settings.qual === 'cert' ? 'Applied Certificate · 180 guided hours' : 'Applied Diploma · 360 guided hours · each unit 25%'}</span></div>
      <div class="grid g4">${UNITS.filter(u => u.kind).map(unitCard).join('')}</div></div>
    <div class="sec grid g3">
      <div class="card"><div class="eyebrow">Revise next</div><div class="stack" style="margin-top:12px">${rec.map(({ t, m }) => `<a class="tcard" href="#/t/${t.id}" style="--uc:${ucol(t.unit)}"><span class="no">${esc(unitOf(t.unit).short)}<br>${esc(t.ref)}</span><span class="tt">${esc(t.title)}</span><span class="ts">${pct(m)} mastery</span></a>`).join('')}</div></div>
      <div class="card" style="--uc:${ucol(cod.a)}"><div class="eyebrow">Case file of the day · ${esc(cod.c || '')}</div><h3 style="font:italic 600 21px/1.25 var(--f-cite);margin:14px 0 4px">${esc(cod.n)}</h3><div class="small muted mono">${cod.y} · ${esc(unitOf(cod.a)?.name || '')}</div><p class="small" style="margin:10px 0">${esc(cod.f)}</p><div class="small" style="padding:10px 12px;border-radius:10px;background:var(--accent-soft)">${rich(cod.p)}</div><div class="row" style="margin-top:14px"><a class="btn sm" href="#/cases">Open case files</a><a class="btn sm" href="#/game/casematch">Name That Case</a></div></div>
      <div class="card"><div class="eyebrow">Exam countdown</div>${countdown()}</div>
    </div>
    <div class="sec grid g3"><a class="card linkcard" href="#/assess"><div class="eyebrow">Exams · controlled assessment</div><div class="h3" style="margin:6px 0">How you are assessed</div><p class="small muted" style="margin:0">Marks for each learning outcome, the mark bands for the controlled assessments, command words and synoptic links.</p></a>
      <a class="card linkcard" href="#/mock"><div class="eyebrow">Timed · self-marked</div><div class="h3" style="margin:6px 0">Mock papers and briefs</div><p class="small muted" style="margin:0">Unit 2 and Unit 4 exam papers built around scenarios, plus practice assignment briefs for Units 1 and 3.</p></a>
      <a class="card linkcard" href="#/cases"><div class="eyebrow">${Object.keys(CASES).length} case files</div><div class="h3" style="margin:6px 0">Case files</div><p class="small muted" style="margin:0">Real cases, key studies, theorists, campaigns and reports, each with what happened and why it matters. Hide the details to test yourself.</p></a></div>`;
    const ob = $('#ob-go'); if (ob) ob.onclick = openSettings;
    cleanup = drawBoard($('#board'));
    const inp = $('#exam-date'); if (inp) inp.onchange = () => { S.settings.examDate = inp.value; save(); route(); };
  }
  const unitCard = u => {
    const ts = unitTopics(u.id), m = unitMastery(u.id), off = !unitInScope(u.id);
    return `<a class="unit-card${off ? ' off' : ''}" href="#/unit/${u.id}" style="--uc:${u.css}"><span class="line"></span><div class="row" style="justify-content:space-between"><span class="eyebrow">${esc(u.code)}</span>${areaTag(u.id)}</div><div class="h3">${esc(u.name)}</div><div class="small muted">${off ? 'Diploma only — not in the Certificate' : `${ts.length} topics · ${ts.reduce((a, t) => a + (t.cases || []).length, 0)} case files · ${ts.reduce((a, t) => a + t.quiz.length, 0)} questions`}</div><div class="bar"><i style="width:${m * 100}%"></i></div><div class="small mono">${pct(m)} mastered</div></a>`;
  };
  function countdown() {
    const d = S.settings.examDate, days = d ? Math.ceil((new Date(d + 'T09:00') - Date.now()) / 864e5) : null;
    return `<div style="font:800 60px/1 var(--f-display);font-stretch:80%;margin:16px 0 4px;color:var(--gilt);font-variant-numeric:tabular-nums">${days != null ? Math.max(0, days) : '—'}</div><div class="muted small">${days != null ? 'days until your next exam or deadline' : 'Set the date of your next Unit 2 or Unit 4 exam, or a controlled assessment deadline'}</div><label class="small muted" for="exam-date" style="display:block;margin-top:14px">Date</label><input id="exam-date" type="date" value="${d || ''}" class="inp" style="margin-top:4px">`;
  }
  /* The home evidence board: one index card per topic, pinned in unit clusters and linked with red string. */
  const BOARD_LBL = { 1: 'Awareness', 2: 'Theories', 3: 'Scene to court', 4: 'Punishment' };
  const BOARD_COL = { 1: '#4CC6D2', 2: '#B596EE', 3: '#F0A25E', 4: '#F07B72' };
  function drawBoard(cv) {
    const c = cv.getContext('2d'); let W, H, alive = true, hover = -1, t0 = performance.now(); const cards = [], labels = [];
    const units = UNITS.filter(u => u.kind && unitTopics(u.id).length);
    const size = () => { const rc = cv.getBoundingClientRect(), d = Math.min(2, devicePixelRatio || 1); W = rc.width; H = rc.height; cv.width = W * d; cv.height = H * d; c.setTransform(d, 0, 0, d, 0, 0); layout(); };
    const layout = () => {
      cards.length = 0; labels.length = 0;
      const cols = W < 640 ? Math.min(2, units.length) : units.length, rowsU = Math.ceil(units.length / cols);
      const rw = (W - 12) / cols, rh = (H - 12) / rowsU;
      units.forEach((u, ui) => {
        const ts = unitTopics(u.id), gx = 6 + (ui % cols) * rw, gy = 6 + Math.floor(ui / cols) * rh;
        const nc = Math.max(2, Math.min(ts.length, Math.round(Math.sqrt(ts.length * rw / Math.max(40, rh - 26) * 1.1)))), nr = Math.ceil(ts.length / nc);
        const cw = (rw - 14) / nc, ch = (rh - 30) / nr, w = Math.min(cw * .84, 92), hh = Math.min(ch * .78, w * .72);
        labels.push({ u, x: gx + 8, y: gy + 16 });
        ts.forEach((t, i) => { const col = i % nc, row = Math.floor(i / nc), seed = (t.id.length * 31 + i * 17) % 13; cards.push({ t, u, m: mastery(t), col: BOARD_COL[u.id] || '#8AB4F0', x: gx + 7 + col * cw + (cw - w) / 2, y: gy + 26 + row * ch + (ch - hh) / 2, w, h: hh, rot: (seed - 6) / 6 * .045 }); });
      });
    };
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const frame = now => {
      if (!alive) return; const grow = reduce ? 1 : Math.min(1, (now - t0) / 1100); c.clearRect(0, 0, W, H);
      c.fillStyle = 'rgba(255,255,255,.025)'; for (let x = 0; x < W; x += 22) for (let y = 0; y < H; y += 22) c.fillRect(x, y, 1, 1);
      labels.forEach(l => { c.fillStyle = BOARD_COL[l.u.id] || '#8AB4F0'; c.font = '600 10.5px "IBM Plex Mono", monospace'; c.textBaseline = 'alphabetic'; c.fillText(('Unit ' + l.u.id + ' · ' + BOARD_LBL[l.u.id]).toUpperCase(), l.x, l.y); });
      c.strokeStyle = 'rgba(240,80,70,.55)'; c.lineWidth = 1.2;
      for (let i = 1; i < cards.length; i++) { const a = cards[i - 1], b = cards[i]; if (a.u !== b.u) continue; c.beginPath(); c.moveTo(a.x + a.w / 2, a.y + 5); const mx = (a.x + b.x + a.w) / 2, my = Math.max(a.y, b.y) + 10; c.quadraticCurveTo(mx, my, b.x + b.w / 2, b.y + 5); c.stroke(); }
      cards.forEach((k, i) => {
        const m = k.m * grow, lift = i === hover ? 3 : 0;
        c.save(); c.translate(k.x + k.w / 2, k.y + k.h / 2 - lift); c.rotate(k.rot);
        c.fillStyle = 'rgba(0,0,0,.35)'; c.fillRect(-k.w / 2 + 2, -k.h / 2 + 3, k.w, k.h);
        c.fillStyle = '#E9ECF2'; c.fillRect(-k.w / 2, -k.h / 2, k.w, k.h);
        c.fillStyle = k.col; c.fillRect(-k.w / 2, -k.h / 2, k.w, 4);
        c.fillStyle = 'rgba(20,26,38,.16)'; for (let r = 0; r < 3; r++) c.fillRect(-k.w / 2 + 6, -k.h / 2 + 22 + r * 6, k.w - 12, 1);
        c.fillStyle = '#141A26'; c.font = `600 ${Math.min(11, k.w * .14)}px "IBM Plex Mono", monospace`; c.textBaseline = 'middle'; c.fillText(k.t.ref, -k.w / 2 + 6, -k.h / 2 + 13);
        c.fillStyle = 'rgba(20,26,38,.12)'; c.fillRect(-k.w / 2 + 6, k.h / 2 - 9, k.w - 12, 4);
        if (m > 0) { c.fillStyle = '#F2C230'; c.fillRect(-k.w / 2 + 6, k.h / 2 - 9, (k.w - 12) * m, 4); }
        if (k.m >= .7 && grow >= 1) { c.save(); c.rotate(-.28); c.strokeStyle = '#C0392B'; c.lineWidth = 1.6; const sw = Math.min(k.w * .78, 62), sh = 15; c.strokeRect(-sw / 2, -sh / 2 + 2, sw, sh); c.fillStyle = '#C0392B'; c.font = `800 ${Math.min(10, k.w * .12)}px "Archivo", sans-serif`; c.textAlign = 'center'; c.fillText('CLOSED', 0, 3); c.restore(); }
        c.fillStyle = '#D93A2B'; c.beginPath(); c.arc(0, -k.h / 2 + 4, 3.4, 0, Math.PI * 2); c.fill(); c.fillStyle = 'rgba(255,255,255,.6)'; c.beginPath(); c.arc(-1, -k.h / 2 + 3, 1, 0, Math.PI * 2); c.fill();
        if (i === hover) { c.strokeStyle = '#F2C230'; c.lineWidth = 1.5; c.strokeRect(-k.w / 2 - 1, -k.h / 2 - 1, k.w + 2, k.h + 2); }
        c.restore();
      });
      if (!reduce && grow < 1) requestAnimationFrame(frame);
    };
    size(); const ro = new ResizeObserver(() => { size(); frame(performance.now() + 1e6); }); ro.observe(cv); requestAnimationFrame(frame);
    const tip = $('#shelf-tip'), hit = (x, y) => cards.findIndex(k => x >= k.x - 2 && x <= k.x + k.w + 2 && y >= k.y - 4 && y <= k.y + k.h + 2);
    cv.addEventListener('pointermove', e => { const rc = cv.getBoundingClientRect(), k = hit(e.clientX - rc.left, e.clientY - rc.top); if (k !== hover) { hover = k; frame(performance.now() + 1e6); } cv.style.cursor = k >= 0 ? 'pointer' : 'default'; tip.textContent = k >= 0 ? `${cards[k].u.short} ${cards[k].t.ref} · ${cards[k].t.title} · ${pct(cards[k].m)} mastery` : 'Hover a card to see its topic; click to open it.'; });
    cv.addEventListener('pointerleave', () => { hover = -1; frame(performance.now() + 1e6); });
    cv.addEventListener('click', () => { if (hover >= 0) go('#/t/' + cards[hover].t.id); });
    tip.textContent = 'One card per assessment criterion, pinned by unit. Click a card to open it.';
    return () => { alive = false; ro.disconnect(); };
  }

  /* ---------- TOPICS / UNIT ---------- */
  const tcard = t => { const m = mastery(t); return `<a class="tcard" href="#/t/${t.id}" style="--uc:${ucol(t.unit)}"><span class="no">${esc(t.ref)}</span><span class="tt">${esc(t.title)}</span><span class="ts">${esc(t.short)}</span><span class="bar"><i style="width:${m * 100}%"></i></span></a>`; };
  const hiddenNote = () => S.settings.qual === 'cert' ? `<div class="note-strip">Units 3 and 4 are hidden because you are taking the Applied Certificate. <a href="javascript:void 0" data-settings>Change qualification</a></div>` : '';
  const wireSettingsLinks = () => $$('[data-settings]').forEach(a => a.onclick = openSettings);
  function topics() {
    crumbs('<b>All topics</b>');
    V().innerHTML = `<h1 class="display" style="font-size:clamp(32px,5vw,50px)">All topics</h1><p class="lede">${allTopics().length} topics: one for every assessment criterion in the WJEC specification, plus assessment skills.</p>
      <div class="filters"><input id="tfilter" type="search" placeholder="Filter topics…" aria-label="Filter topics"></div>
      <div id="tlist">${UNITS.filter(u => unitTopics(u.id).length).map(u => `<div class="sec" data-u="${u.id}" style="margin-top:28px"><div class="sec-head"><h2 class="h3" style="color:${u.css}">${esc(u.name)}</h2><span class="muted small">${esc(u.code)}</span>${areaTag(u.id)}</div><div class="topic-list">${unitTopics(u.id).map(tcard).join('')}</div></div>`).join('')}</div>${hiddenNote()}`;
    $('#tfilter').oninput = e => { const q = e.target.value.toLowerCase(); $$('.tcard', V()).forEach(a => a.hidden = q && !a.textContent.toLowerCase().includes(q)); $$('[data-u]', V()).forEach(s => s.hidden = !$$('.tcard', s).some(a => !a.hidden)); };
    wireSettingsLinks();
  }
  function unit(uid) {
    const u = unitOf(uid), ts = unitTopics(uid), m = unitMastery(uid);
    crumbs(`<a href="#/topics">Topics</a> / <b>${esc(u.name)}</b>`);
    V().innerHTML = `<div style="--uc:${u.css}"><div class="row"><span class="eyebrow">${esc(u.code)}</span>${areaTag(uid)}</div><h1 class="display" style="margin:8px 0 10px">${esc(u.name)}</h1><p class="lede">${esc(u.exam)}</p>
      ${ts.length ? `<div class="row" style="margin:16px 0"><span class="pill acc">${pct(m)} mastery</span><span class="pill">${ts.length} topics</span><span class="pill">${ts.reduce((a, t) => a + t.quiz.length, 0)} quiz questions</span><span class="pill">${ts.reduce((a, t) => a + deck(t).length, 0)} flashcards</span></div>
      <div class="row"><button class="btn primary" id="uquiz">Mixed quiz</button><a class="btn" href="#/mock">Mock papers and briefs</a><a class="btn" href="#/cases">Case files</a></div>
      <div class="sec topic-list">${ts.map(tcard).join('')}</div>` : `<div class="empty">This unit is part of the Applied Diploma only. <a href="javascript:void 0" data-settings>Change qualification</a></div>`}</div>`;
    wireSettingsLinks();
    if (!ts.length) return;
    $('#uquiz').onclick = () => { const items = shuffle(ts.flatMap(t => t.quiz.map(q => ({ ...q, topic: t.id })))).slice(0, 12); V().innerHTML = `<div class="quiz-wrap" style="--uc:${u.css};margin:0 auto" id="qz"></div>`; runQuiz($('#qz'), items, { title: u.short + ' mixed quiz', onDone: r => addXP(r.correct * 8, 'Mixed quiz') }); };
  }

  /* ---------- TOPIC ---------- */
  function topic(id, tab) {
    const t = TOPIC[id], u = unitOf(t.unit), s = T(id); s.seen = Date.now(); S.last = id; save();
    const list = allTopics(), idx = list.indexOf(t), prev = list[idx - 1], next = list[idx + 1];
    crumbs(`<a href="#/unit/${u.id}">${esc(u.short)} ${esc(u.name)}</a> / <b>${esc(t.ref)} ${esc(t.title)}</b>`);
    const d = deck(t);
    const tabs = [['learn', 'Learn', ''], ...(t.cases?.length ? [['cases', 'Case files', t.cases.length]] : []), ...(t.tools?.length ? [['explore', 'Explore', t.tools.length]] : []), ['cards', 'Flashcards', d.length], ['quiz', 'Quiz', t.quiz.length], ...(t.exam?.length ? [['exam', u.kind === 'int' ? 'Assessment practice' : 'Exam practice', t.exam.length]] : [])];
    if (!tabs.find(x => x[0] === tab)) tab = 'learn';
    const m = mastery(t);
    V().innerHTML = `<div style="--uc:${u.css}">
      <header class="topic-head"><div class="row"><span class="topic-ref">${esc(u.short)} · ${esc(t.ref)}</span><span class="eyebrow">${esc(u.code)} · ${esc(u.name)}</span>${areaTag(u.id)}</div><h1 class="display">${esc(t.title)}</h1></header>
      ${!vis(t) ? `<div class="note-strip" style="margin:0 0 12px">This topic is in a Diploma-only unit. You can still read it. <a href="javascript:void 0" data-settings>Change qualification</a></div>` : ''}
      <p class="lede">${esc(t.summary)}</p>
      <div class="row" style="margin-top:12px"><span class="pill acc">${pct(m)} mastery</span><span class="pill">Quiz best ${s.quiz || 0}%</span><span class="pill">${d.filter(c => (s.cards[c.k] || 0) >= 3).length}/${d.length} cards known</span>${t.exam?.length ? `<span class="pill">Exam self-mark ${Math.round((s.exam || 0) * 100)}%</span>` : ''}</div>
      <nav class="tabs" role="tablist" aria-label="Topic sections">${tabs.map(([k, l, n]) => `<a class="tab ${k === tab ? 'on' : ''}" role="tab" aria-selected="${k === tab}" href="#/t/${id}/${k}">${l}${n !== '' ? `<span class="n">${n}</span>` : ''}</a>`).join('')}</nav>
      <div id="tab"></div>
      <div class="row" style="justify-content:space-between;margin-top:40px;border-top:1px solid var(--line);padding-top:18px">${prev ? `<a class="btn ghost" href="#/t/${prev.id}">${ICON.back} ${esc(prev.ref)} ${esc(prev.title)}</a>` : '<span></span>'}${next ? `<a class="btn ghost" href="#/t/${next.id}">${esc(next.ref)} ${esc(next.title)} ${ICON.arrow}</a>` : ''}</div></div>`;
    wireSettingsLinks();
    const host = $('#tab');
    ({ learn: learnTab, cases: casesTab, explore: exploreTab, cards: cardsTab, quiz: quizTab, exam: examTab })[tab](host, t);
  }

  function learnTab(host, t) {
    const s = T(t.id), secs = t.learn;
    host.innerHTML = `<div class="layout-2"><article class="notes">
      ${secs.map((sec, i) => `<section id="s${i}"><h3><span class="k">${String(i + 1).padStart(2, '0')}</span>${esc(sec.h)}</h3>${rich(sec.html)}</section>`).join('')}
      ${t.debate?.length ? `<section id="s-ev"><h3><span class="k">EVAL</span>Evaluate: arguments on both sides</h3>${t.debate.map(db => `<div class="debate"><div class="q">${esc(db.q)}</div><div class="for"><h5>For / strengths</h5><ul>${db.for.map(x => `<li>${rich(x)}</li>`).join('')}</ul></div><div class="ag"><h5>Against / weaknesses</h5><ul>${db.ag.map(x => `<li>${rich(x)}</li>`).join('')}</ul></div></div>`).join('')}<p class="small muted">A top-band answer weighs these, decides which side is stronger, and counters the alternative view.</p></section>` : ''}
      ${t.worked?.length ? `<section id="s-wk"><h3><span class="k">APPLY</span>Worked examples</h3>${t.worked.map((w, i) => `<div class="worked"><div class="wq"><span class="eyebrow">Worked answer ${i + 1}</span><div style="margin-top:6px">${rich(w.q)}</div></div><ol>${w.s.map((st, j) => `<li class="${j ? 'hid' : ''}">${rich(st)}</li>`).join('')}</ol><div class="wf"><button class="btn sm primary" data-step>Next step</button><button class="btn sm ghost" data-all>Show all</button><span class="ans" hidden>${rich(w.a)}</span></div></div>`).join('')}</section>` : ''}
      <section id="s-pf"><h3><span class="k">AVOID</span>Common mistakes</h3><div class="box warn"><b class="lbl">Examiners and moderators often see</b><ul>${t.pitfalls.map(p => `<li>${rich(p)}</li>`).join('')}</ul></div></section>
    </article>
    <aside class="aside"><div class="card flat" style="padding:14px 10px"><div class="eyebrow" style="padding:0 10px 8px">On this page</div><div class="toc">${secs.map((sec, i) => `<a href="#s${i}" data-anchor="s${i}">${esc(sec.h)}</a>`).join('')}${t.debate?.length ? '<a href="#s-ev" data-anchor="s-ev">Evaluate</a>' : ''}${t.worked?.length ? '<a href="#s-wk" data-anchor="s-wk">Worked answers</a>' : ''}<a href="#s-pf" data-anchor="s-pf">Common mistakes</a></div></div>
      <div class="card flat" style="padding:16px"><div class="eyebrow">Specification checklist · ${esc(t.ref)}</div><p class="small muted" style="margin:6px 0 10px">Rate your confidence: red, amber, green.</p><div class="spec-list">${t.spec.map((sp, i) => `<div class="spec-item"><div class="rag" data-i="${i}">${[1, 2, 3].map(val => `<button data-v="${val}" class="${s.spec[i] === val ? 'on' : ''}" aria-label="${['Not confident', 'Getting there', 'Confident'][val - 1]}: ${esc(sp)}"></button>`).join('')}</div><span>${esc(sp)}</span></div>`).join('')}</div></div>
      <a class="btn primary" href="#/t/${t.id}/quiz">Test yourself ${ICON.arrow}</a></aside></div>`;
    $$('[data-anchor]', host).forEach(a => a.onclick = e => { e.preventDefault(); document.getElementById(a.dataset.anchor).scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    $$('.worked', host).forEach(w => { const lis = $$('li', w), ans = $('.ans', w); let k = 1; const show = n => { lis.forEach((li, j) => li.classList.toggle('hid', j >= n)); if (n >= lis.length) { ans.hidden = false; $('[data-step]', w).disabled = true; } }; $('[data-step]', w).onclick = () => show(++k); $('[data-all]', w).onclick = () => { k = lis.length; show(k); }; });
    $$('.rag', host).forEach(r => r.onclick = e => { const b = e.target.closest('button'); if (!b) return; const i = +r.dataset.i, val = +b.dataset.v; s.spec[i] = s.spec[i] === val ? 0 : val; save(); $$('button', r).forEach(x => x.classList.toggle('on', +x.dataset.v === s.spec[i])); refreshChrome(); checkBadges(); });
  }

  function caseCard(c, cover) {
    const u = unitOf(c.a);
    return `<div class="case-card${cover ? ' cover' : ''}" style="--uc:${u?.css || 'var(--accent)'}"><h4>${esc(c.n)}</h4><div class="meta">${c.y} · ${esc(c.c || '')}${c.t && TOPIC[c.t] ? ` · <a href="#/t/${c.t}" style="color:inherit">${esc(u?.short || '')} ${esc(TOPIC[c.t].ref)}</a>` : ''}</div><p class="f">${esc(c.f)}</p><div class="law f">${rich(c.p)}</div></div>`;
  }
  function casesTab(host, t) {
    let cover = false;
    const render = () => {
      host.innerHTML = `<div class="row" style="margin-bottom:14px"><div class="seg" id="cv"><button class="${cover ? '' : 'on'}" data-c="0">Show all</button><button class="${cover ? 'on' : ''}" data-c="1">Hide facts (test me)</button></div><span class="small muted">${cover ? 'Tap a card to reveal it.' : 'Every case file here is also in your flashcards and the case files page.'}</span></div><div class="case-grid">${t.cases.map(id => CASES[id] ? caseCard(CASES[id], cover) : '').join('')}</div>`;
      $$('#cv button', host).forEach(b => b.onclick = () => { cover = b.dataset.c === '1'; render(); });
      $$('.case-card.cover', host).forEach(cd => cd.onclick = () => cd.classList.toggle('peek'));
    };
    render();
  }
  function exploreTab(host, t) {
    let i = 0; const draw = () => {
      host.innerHTML = `${t.tools.length > 1 ? `<div class="tool-pick">${t.tools.map((k, j) => `<button class="btn sm ${j === i ? 'primary' : ''}" data-j="${j}">${esc(toolTitle(k))}</button>`).join('')}</div>` : ''}<div id="toolhost"></div>`;
      $$('[data-j]', host).forEach(b => b.onclick = () => { i = +b.dataset.j; draw(); });
      const key = t.tools[i]; mountTool($('#toolhost'), key);
      if (!S.stats.tools.includes(key)) { S.stats.tools.push(key); save(); addXP(5, 'New interactive tool'); }
    }; draw();
  }

  /* ---------- Flashcards (Leitner boxes) ---------- */
  function cardsTab(host, t) {
    const s = T(t.id), full = deck(t); let mode = 'all';
    const start = () => {
      const d = full.filter(c => mode === 'all' || (mode === 'cases' ? c.k.startsWith('c:') : !c.k.startsWith('c:')));
      let queue = shuffle(d).sort((a, b) => (s.cards[a.k] || 0) - (s.cards[b.k] || 0)), pos = 0, flipped = false, reviewed = 0;
      const render = () => {
        const counts = [0, 1, 2, 3, 4, 5].map(b => d.filter(c => (s.cards[c.k] || 0) === b).length);
        const modeBar = `<div class="row" style="justify-content:center;margin-bottom:14px"><div class="seg" id="fm">${[['all', 'All cards'], ['concepts', 'Concepts'], ['cases', 'Case files']].map(([k, l]) => `<button data-m="${k}" class="${mode === k ? 'on' : ''}">${l}</button>`).join('')}</div></div>`;
        if (pos >= queue.length) { host.innerHTML = modeBar + `<div class="card result"><div class="eyebrow">Session complete</div><div class="big">${reviewed}</div><p class="lede" style="margin:8px auto">cards reviewed. Known (box 3+): ${d.filter(c => (s.cards[c.k] || 0) >= 3).length}/${d.length}</p><button class="btn primary" id="again">Review again</button></div>`; $('#again').onclick = start; wireMode(); return; }
        const c = queue[pos], box = s.cards[c.k] || 0;
        host.innerHTML = modeBar + `<div class="fc-stage"><div class="row" style="justify-content:space-between;margin-bottom:12px"><span class="eyebrow">Card ${pos + 1} of ${queue.length}</span><span class="pill">Box ${box || 'new'}</span></div>
          <div class="fc ${flipped ? 'flip' : ''}" id="fc" tabindex="0" role="button" aria-label="Flip card"><div class="front"><span class="eyebrow">${c.k.startsWith('c:') ? 'Case file' : 'Question'}</span><div>${rich(c.q)}</div></div><div class="back"><span class="eyebrow">Answer</span><div>${rich(c.a)}</div></div></div>
          <div class="fc-ctl">${flipped ? `<button class="btn" data-r="0" style="border-color:var(--bad);color:var(--bad)">Again <kbd>1</kbd></button><button class="btn" data-r="1">Hard <kbd>2</kbd></button><button class="btn" data-r="2" style="border-color:var(--good);color:var(--good)">Good <kbd>3</kbd></button><button class="btn" data-r="3">Easy <kbd>4</kbd></button>` : `<button class="btn primary" id="flip">Show answer <kbd>Space</kbd></button>`}</div>
          <div class="boxes">${counts.map((n, b) => `<span>${b ? 'Box ' + b : 'New'}: ${n}</span>`).join('')}</div></div>`;
        $('#fc').onclick = e => { if (e.target.closest('.case')) return; flipped = !flipped; sfx.flip(); render(); };
        $('#flip') && ($('#flip').onclick = () => { flipped = true; sfx.flip(); render(); });
        $$('[data-r]', host).forEach(b => b.onclick = () => rate(+b.dataset.r));
        wireMode();
      };
      const wireMode = () => $$('#fm button', host).forEach(b => b.onclick = () => { mode = b.dataset.m; start(); });
      const rate = r => { const c = queue[pos], b = s.cards[c.k] || 0; s.cards[c.k] = r === 0 ? 1 : r === 1 ? Math.max(1, b) : r === 2 ? Math.min(5, b + 1) : Math.min(5, b + 2); if (r === 0) queue.push(c); reviewed++; S.stats.cardsSeen++; save(); addXP(2); pos++; flipped = false; render(); };
      const key = e => { if (!document.body.contains(host) || !$('#fc')) { removeEventListener('keydown', key); return; } if (e.target.matches('input,textarea')) return; if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipped = !flipped; render(); } else if (flipped && '1234'.includes(e.key)) rate(+e.key - 1); };
      if (cleanup) try { cleanup(); } catch (e) { }
      addEventListener('keydown', key); cleanup = () => removeEventListener('keydown', key);
      render();
    };
    start();
  }

  /* ---------- Quiz engine ---------- */
  function caseQs(t, n) {
    const ids = (t.cases || []).filter(id => CASES[id]); if (ids.length < 2) return [];
    return shuffle(ids).slice(0, n).map(id => { const c = CASES[id], same = Object.values(CASES).filter(x => x !== c && x.c === c.c && (x.a === c.a || ids.includes(x.id))), pool = same.length >= 3 ? same : Object.values(CASES).filter(x => x !== c && (x.a === c.a || ids.includes(x.id))); const w = shuffle(pool).slice(0, 3); return { q: `Which ${kindWord(c)}? <span class="muted">${esc(c.f)}</span>`, o: [`<i class="cn">${esc(c.n)}</i> (${c.y})`, ...w.map(x => `<i class="cn">${esc(x.n)}</i> (${x.y})`)], x: esc(c.p) }; });
  }
  function runQuiz(host, items, o = {}) {
    const qs = items.map(it => ({ ...it, order: shuffle(it.o.map((_, i) => i)) }));
    let i = 0, res = [];
    const render = () => {
      if (i >= qs.length) return finish();
      const q = qs[i];
      host.innerHTML = `<div class="q-meta"><span class="eyebrow">${o.title ? esc(o.title) + ' · ' : ''}Question ${i + 1} of ${qs.length}</span>${q.topic ? `<a class="pill" href="#/t/${q.topic}">${esc(q.topic)}</a>` : ''}<div class="q-prog">${qs.map((_, j) => `<i class="${j < res.length ? (res[j].ok ? 'c' : 'w') : j === i ? 'cur' : ''}"></i>`).join('')}</div></div>
        <div class="q-text">${rich(q.q)}</div>
        <div class="opts">${q.order.map((oi, k) => `<button class="opt" data-k="${k}"><span class="k">${'ABCD'[k]}</span><span>${rich(q.o[oi])}</span></button>`).join('')}</div><p class="kbd-hint">Press A–D or 1–4.</p><div id="fb"></div>`;
      $$('.opt', host).forEach(b => b.onclick = e => { if (e.target.closest('.case')) return; answer(+b.dataset.k); });
    };
    const answer = k => {
      const q = qs[i]; if (res.length > i || k >= q.order.length) return;
      const ok = q.order[k] === 0; res.push({ ok, q }); (ok ? sfx.good : sfx.bad)();
      $$('.opt', host).forEach((b, j) => { b.disabled = true; if (q.order[j] === 0) b.classList.add('right'); else if (j === k) b.classList.add('wrong'); });
      $('#fb', host).innerHTML = `<div class="explain"><b class="v ${ok ? 'good' : 'bad'}">${ok ? 'Correct' : 'Not quite'}</b> ${rich(q.x || '')}</div><div class="row" style="margin-top:14px"><button class="btn primary" id="nextq">${i < qs.length - 1 ? 'Next question' : 'See results'} <kbd>Enter</kbd></button></div>`;
      $('#nextq').onclick = () => { i++; render(); }; $('#nextq').focus();
    };
    const finish = () => {
      removeEventListener('keydown', key);
      const correct = res.filter(r => r.ok).length, p = Math.round(correct / qs.length * 100);
      S.stats.quizzes++; if (p === 100) { S.stats.perfect++; burst(); sfx.win(); } save();
      o.onDone && o.onDone({ correct, total: qs.length, pct: p });
      host.innerHTML = `<div class="card result"><div class="eyebrow">${esc(o.title || 'Quiz')} complete</div><div class="big">${p}%</div><p class="lede" style="margin:8px auto">${correct} of ${qs.length} correct${p === 100 ? ' — case closed!' : p >= 70 ? ' — strong.' : ' — review the notes and try again.'}</p>
        <div class="stack" style="text-align:left;max-width:640px;margin:18px auto 0">${res.filter(r => !r.ok).map(r => `<div class="explain"><b class="v bad">Review</b> ${rich(r.q.q)}<br><span class="small">Answer: <b>${rich(r.q.o[0])}</b></span></div>`).join('')}</div>
        <div class="row" style="justify-content:center;margin-top:16px"><button class="btn primary" id="retry">Try again</button>${o.back ? `<a class="btn" href="${o.back}">Back</a>` : ''}</div></div>`;
      $('#retry').onclick = () => runQuiz(host, o.regen ? o.regen() : items, o);
    };
    const key = e => { if (!document.body.contains(host)) { removeEventListener('keydown', key); return; } if (e.target.matches('input,textarea')) return; const m = { a: 0, b: 1, c: 2, d: 3, 1: 0, 2: 1, 3: 2, 4: 3 }[e.key.toLowerCase()]; if (m != null && res.length === i && i < qs.length) answer(m); else if (e.key === 'Enter' && $('#nextq')) { e.preventDefault(); $('#nextq').click(); } };
    addEventListener('keydown', key);
    if (cleanup) try { cleanup(); } catch (e) { }
    cleanup = () => removeEventListener('keydown', key);
    render();
  }
  function quizTab(host, t) {
    const s = T(t.id);
    const gen = () => shuffle([...t.quiz, ...caseQs(t, 4)]).slice(0, 14);
    host.innerHTML = `<div class="quiz-wrap" id="qz"></div>`;
    runQuiz($('#qz'), gen(), { title: t.id + ' quiz', regen: gen, onDone: r => { s.quiz = Math.max(s.quiz || 0, r.pct); save(); addXP(r.correct * 5 + (r.pct === 100 ? 20 : 0), 'Quiz complete'); } });
  }

  /* ---------- Exam practice (self-marked) ---------- */
  function examBlock(q, key, onMark) {
    const draftKey = 'ratio.draft.' + key; let draft = ''; try { draft = localStorage.getItem(draftKey) || ''; } catch (e) { }
    const el = h('div', { class: 'examq' }, `<div class="eh"><div>${rich(q.q)}</div><span class="pill mk">${q.m} marks</span></div>${q.scen ? `<div class="scen">${rich(q.scen)}</div>` : ''}
      <textarea placeholder="Plan or write your answer here (saved in this browser)…" aria-label="Your answer">${esc(draft)}</textarea>
      <div class="row" style="padding:0 18px 14px"><button class="btn sm" data-show>Show mark scheme</button><span class="small muted">${q.bands || q.m >= 6 ? 'Band-marked: tick the content you covered, then check the band descriptors.' : 'Tick each point you made.'}</span></div>
      <div class="ms" hidden><div class="eyebrow" style="margin-bottom:6px">Indicative content</div>${q.ms.map((p, i) => `<label><input type="checkbox" data-i="${i}"> <span>${rich(p)}</span></label>`).join('')}
      ${q.bands ? `<div class="tbl levels bands"><table><tr><th>Mark band</th><th>WJEC descriptor for this criterion</th></tr>${q.bands.map(r => `<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td></tr>`).join('')}</table></div>` : q.m >= 6 ? `<div class="tbl levels"><table><tr><th>Band</th><th>What it looks like</th></tr>${LEVELS_TXT(q.m).map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table></div>` : ''}
      <div class="row" style="margin-top:10px"><span class="pill acc" data-score>0 / ${q.m}</span><button class="btn sm primary" data-save>Record my mark</button></div></div>`);
    const ta = $('textarea', el); ta.oninput = () => { try { localStorage.setItem(draftKey, ta.value); } catch (e) { } };
    $('[data-show]', el).onclick = () => { $('.ms', el).hidden = !$('.ms', el).hidden; };
    const score = () => { const n = $$('input:checked', el).length; return Math.min(q.m, Math.round(n / q.ms.length * q.m)); };
    $$('input', el).forEach(c => c.onchange = () => { $('[data-score]', el).textContent = `${score()} / ${q.m}`; });
    $('[data-save]', el).onclick = e => { const sc = score(); e.target.disabled = true; e.target.textContent = 'Recorded'; onMark(sc, q.m); };
    return el;
  }
  const LEVELS_TXT = m => [['Band 3', 'Clear, detailed and accurate; well applied to the scenario with relevant examples, evidence or theory; evaluation reaches a reasoned judgement where asked'], ['Band 2', 'Some accurate knowledge and application; examples or evidence used but not fully developed; some judgement'], ['Band 1', 'Basic or partly accurate points; little link to the scenario; mainly descriptive or a list']];
  function examTab(host, t) {
    const s = T(t.id); s.examMarks ??= {};
    host.innerHTML = unitOf(t.unit).kind === 'int' ? `<div class="box warn" style="max-width:none"><b class="lbl">Practice only</b><p class="small">This criterion is assessed by controlled assessment. These tasks let you practise the skill on a different scenario. The real assessment must be your own work, completed under supervision from your centre’s assignment brief. The mark bands are the actual WJEC bands for this criterion.</p></div><div id="eqs"></div>` : `<p class="small muted" style="max-width:70ch">Questions in the style of the WJEC Unit ${esc(t.unit)} exam. Papers use scenarios: always apply your answer to the people and facts given. Write or plan an answer, then mark it honestly against the content and the band descriptors.</p><div id="eqs"></div>`;
    t.exam.forEach((q, i) => $('#eqs').append(examBlock(q, t.id + '.' + i, (sc, m) => { s.examMarks[i] = sc / m; const vals = t.exam.map((_, j) => s.examMarks[j] || 0); s.exam = vals.reduce((a, b) => a + b, 0) / t.exam.length; S.stats.examMarks += sc; save(); addXP(sc * 2, 'Exam question marked'); })));
  }

  /* ---------- CASE FILES ---------- */
  function casebook() {
    crumbs('<b>Case files</b>');
    let area = 'all', kind = 'all', q = '', cover = false;
    const areas = [['all', 'All units'], ...UNITS.filter(u => u.kind).map(u => [u.id, u.short])];
    const kinds = ['all', ...new Set(Object.values(CASES).map(c => c.c))];
    V().innerHTML = `<h1 class="display" style="font-size:clamp(32px,5vw,50px)">Case files</h1><p class="lede">Real cases, key studies, theorists, campaigns and official reports. Each shows what happened and why it matters for criminology. Names in the notes open the same file. Hide the details to test yourself.</p>
      <div class="filters"><input id="cq" type="search" placeholder="Search names, details or significance…" aria-label="Search case files"><div class="seg" id="cv"><button data-c="0" class="on">Show all</button><button data-c="1">Hide details</button></div></div>
      <div class="row" id="ca" style="margin-bottom:8px">${areas.map(([k, l]) => `<button class="btn sm ${k === 'all' ? 'primary' : ''}" data-a="${k}" ${k !== 'all' && !unitInScope(k) ? 'style="opacity:.5"' : ''}>${esc(l)}</button>`).join('')}</div>
      <div class="row" id="ck" style="margin-bottom:16px">${kinds.map(k => `<button class="btn sm ${k === 'all' ? 'primary' : ''}" data-k="${esc(k)}">${k === 'all' ? 'All types' : esc(k) + 's'}</button>`).join('')}</div><div id="clist"></div>`;
    const render = () => {
      const list = Object.values(CASES).filter(c => (area === 'all' ? unitInScope(c.a) : c.a === area) && (kind === 'all' || c.c === kind) && (!q || (c.n + ' ' + c.f + ' ' + c.p).toLowerCase().includes(q))).sort((a, b) => a.n.localeCompare(b.n));
      $('#clist').innerHTML = `<p class="small muted">${list.length} case files</p><div class="case-grid">${list.map(c => caseCard(c, cover)).join('')}</div>`;
      $$('.case-card.cover').forEach(cd => cd.onclick = () => cd.classList.toggle('peek'));
    };
    $('#cq').oninput = e => { q = e.target.value.toLowerCase().trim(); render(); };
    $$('#ca button').forEach(b => b.onclick = () => { area = b.dataset.a; $$('#ca button').forEach(x => x.classList.toggle('primary', x === b)); render(); });
    $$('#ck button').forEach(b => b.onclick = () => { kind = b.dataset.k; $$('#ck button').forEach(x => x.classList.toggle('primary', x === b)); render(); });
    $$('#cv button').forEach(b => b.onclick = () => { cover = b.dataset.c === '1'; $$('#cv button').forEach(x => x.classList.toggle('on', x === b)); render(); });
    render();
  }
  function statutes(tab) {
    crumbs('<b>Laws & terms</b>');
    V().innerHTML = `<h1 class="display" style="font-size:clamp(32px,5vw,50px)">Laws &amp; terms</h1><p class="lede">The legislation that shapes criminal justice in England and Wales, and the specialist vocabulary that moves answers into the top band.</p>
      <nav class="tabs" style="position:static"><a class="tab ${tab === 'acts' ? 'on' : ''}" href="#/statutes/acts">Legislation<span class="n">${STATUTES.length}</span></a><a class="tab ${tab === 'terms' ? 'on' : ''}" href="#/statutes/terms">Glossary<span class="n">${GLOSSARY.length}</span></a></nav>
      <div class="filters"><input id="sq" type="search" placeholder="Filter…" aria-label="Filter"></div><div id="slist"></div>`;
    const render = q => {
      if (tab === 'terms') $('#slist').innerHTML = `<div class="gloss">${GLOSSARY.filter(g => !q || (g[0] + g[1]).toLowerCase().includes(q)).sort((a, b) => a[0].localeCompare(b[0])).map(g => `<div><b>${esc(g[0])}</b><span>${esc(g[1])}</span></div>`).join('')}</div>`;
      else $('#slist').innerHTML = `<div class="stat-list">${STATUTES.filter(st => unitInScope(st.a)).filter(st => !q || (st.n + st.s.flat().join(' ')).toLowerCase().includes(q)).map(st => `<div class="statute" style="--uc:${ucol(st.a)}"><h4>${esc(st.n)}</h4><dl>${st.s.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${rich(v)}</dd>`).join('')}</dl></div>`).join('')}</div>`;
    };
    $('#sq').oninput = e => render(e.target.value.toLowerCase().trim()); render('');
  }

  /* ---------- ASSESSMENT ---------- */
  function assess() {
    crumbs('<b>Assessment</b>'); if (!S.assessSeen) { S.assessSeen = 1; save(); checkBadges(); }
    V().innerHTML = `<div class="notes" style="max-width:none">${ASSESS_HTML}</div>`; wireSettingsLinks();
  }

  /* ---------- MOCK PAPERS ---------- */
  function mock() {
    crumbs('<b>Mock papers</b>');
    V().innerHTML = `<h1 class="display" style="font-size:clamp(32px,5vw,50px)">Mock papers</h1><p class="lede">Timed exam papers in the WJEC format for Units 2 and 4, and practice assignment briefs for the Unit 1 and Unit 3 controlled assessments. Answer in the boxes (or on paper), then mark against the content and band descriptors. Your answers stay in this browser.</p>
      <div class="grid g3 sec">${MOCKS.filter(m => unitInScope(m.unit)).map(m => `<a class="card linkcard" href="#/mock/${m.id}"><div class="eyebrow">${esc(m.meta)}</div><div class="h3" style="margin:6px 0">${esc(m.title)}</div><p class="small muted" style="margin:0">${esc(m.blurb)}</p></a>`).join('')}</div>`;
  }
  function mockPaper(id) {
    const m = MOCKS.find(x => x.id === id); if (!m) return mock();
    crumbs(`<a href="#/mock">Mock papers</a> / <b>${esc(m.title)}</b>`);
    const secs = m.build();
    let secsLeft = m.mins * 60, running = false, iv = null, got = 0, total = 0;
    V().innerHTML = `<div class="row" style="justify-content:space-between;align-items:flex-end"><div><div class="eyebrow">${esc(m.meta)}</div><h1 class="display" style="font-size:clamp(28px,4.4vw,44px);margin-top:6px">${esc(m.title)}</h1></div>
      <div class="card flat" style="padding:12px 16px;text-align:center"><div class="eyebrow">Time</div><div class="timer-big" id="mt">${fmt(secsLeft)}</div><div class="row" style="justify-content:center;margin-top:6px"><button class="btn sm primary" id="mgo">Start</button><button class="btn sm" id="mrs">Reset</button></div></div></div>
      <div class="box tip"><b class="lbl">Instructions</b><p>${m.instr}</p></div><div id="mq"></div>
      <div class="card sec" style="text-align:center"><div class="eyebrow">Your total</div><div style="font:700 48px var(--f-display)" id="mtot">0 / ${secs.reduce((a, s) => a + s.qs.reduce((b, q) => b + q.m, 0), 0)}</div><button class="btn primary" id="mdone">Finish paper</button></div>`;
    secs.forEach((s, si) => { $('#mq').insertAdjacentHTML('beforeend', `<h2 class="h3" style="margin:28px 0 6px;color:${s.css || 'inherit'}">${esc(s.h)}</h2>${s.note ? (s.note.length > 140 ? `<div class="brief-box">${esc(s.note)}</div>` : `<p class="small muted">${esc(s.note)}</p>`) : ''}`); s.qs.forEach((q, qi) => { total += q.m; $('#mq').append(examBlock(q, `mock.${id}.${si}.${qi}`, sc => { got += sc; $('#mtot').textContent = `${got} / ${$('#mtot').textContent.split('/ ')[1]}`; S.stats.examMarks += sc; save(); })); }); });
    function fmt(x) { x = Math.max(0, x); return Math.floor(x / 3600) + ':' + pad2(Math.floor(x % 3600 / 60)) + ':' + pad2(Math.floor(x % 60)); }
    $('#mgo').onclick = () => { running = !running; $('#mgo').textContent = running ? 'Pause' : 'Resume'; if (running) iv = setInterval(() => { secsLeft--; $('#mt').textContent = fmt(secsLeft); if (secsLeft <= 0) { clearInterval(iv); running = false; toast('<b>Time</b> Pens down'); sfx.gavel(); } }, 1000); else clearInterval(iv); };
    $('#mrs').onclick = () => { clearInterval(iv); running = false; secsLeft = m.mins * 60; $('#mt').textContent = fmt(secsLeft); $('#mgo').textContent = 'Start'; };
    $('#mdone').onclick = () => { clearInterval(iv); S.stats.mocks++; save(); addXP(50, 'Mock paper completed'); burst(); };
    cleanup = () => clearInterval(iv);
  }

  /* ---------- ARCADE / DAILY / PROGRESS / ABOUT ---------- */
  function arcade() {
    crumbs('<b>Arcade</b>');
    V().innerHTML = `<h1 class="display" style="font-size:clamp(32px,5vw,50px)">Arcade</h1><p class="lede">Quick games to drill case files, theories and key terms. Games use only the units you study.</p>
      <div class="grid g3 sec">${Object.entries(GAMES).map(([id, g]) => `<a class="game-card" href="#/game/${id}" style="--uc:${g.col}"><div class="art"><canvas data-art="${id}"></canvas></div><div class="eyebrow">${esc(g.skill)}</div><div class="h3">${esc(g.title)}</div><p class="small muted" style="margin:0">${esc(g.blurb)}</p><span class="small mono">Best: ${S.games[id]?.best || 0}</span></a>`).join('')}</div>`;
    $$('[data-art]').forEach(cv => drawGameArt(cv, cv.dataset.art));
  }
  function daily() {
    crumbs('<b>Daily briefing</b>');
    let seed = +today().replace(/-/g, ''); const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    const pool = allTopics().flatMap(t => t.quiz.map(q => ({ ...q, topic: t.id })));
    const items = []; const used = new Set(); while (items.length < 5 && used.size < pool.length) { const k = Math.floor(rnd() * pool.length); if (!used.has(k)) { used.add(k); items.push(pool[k]); } }
    V().innerHTML = `<div class="quiz-wrap" style="margin:0 auto"><h1 class="display" style="font-size:clamp(28px,4vw,40px);margin-bottom:6px">Today’s briefing</h1><p class="muted">Five questions, the same for everyone today. ${S.daily[today()] != null ? `You scored ${S.daily[today()]}/5 today.` : ''}</p><div id="qz" style="margin-top:18px"></div></div>`;
    runQuiz($('#qz'), items, { title: 'Daily briefing', onDone: r => { const first = S.daily[today()] == null; S.daily[today()] = Math.max(S.daily[today()] || 0, r.correct); save(); if (first) addXP(r.correct * 10, 'Daily briefing'); } });
  }
  function progress() {
    crumbs('<b>Progress</b>');
    const L = level(), days = Array.from({ length: 28 }, (_, i) => { const d = dstr(new Date(Date.now() - (27 - i) * 864e5)); return [d, S.days[d] || 0]; }), mx = Math.max(10, ...days.map(d => d[1]));
    V().innerHTML = `<h1 class="display" style="font-size:clamp(32px,5vw,50px)">Progress</h1>
      <div class="grid g3 sec" style="margin-top:18px"><div class="card"><div class="eyebrow">Level ${L.l}</div><div class="h2" style="margin:8px 0">${esc(L.name)}</div><div class="bar" style="--uc:var(--gilt)"><i style="width:${clamp(L.frac, 0, 1) * 100}%"></i></div><p class="small muted">${S.xp} XP · next level at ${Math.round(L.next)}</p></div>
      <div class="card"><div class="eyebrow">Last 28 days</div><svg viewBox="0 0 280 90" width="100%" height="110" role="img" aria-label="XP earned per day">${days.map(([d, v], i) => `<rect x="${i * 10 + 1}" y="${80 - v / mx * 70}" width="8" height="${Math.max(1, v / mx * 70)}" rx="1.5" fill="${v ? 'var(--accent)' : 'var(--line-2)'}"><title>${d}: ${v} XP</title></rect>`).join('')}<line x1="0" y1="81" x2="280" y2="81" stroke="var(--line-2)"/><text x="0" y="90" font-size="7" fill="var(--muted)">4 weeks ago</text><text x="280" y="90" font-size="7" fill="var(--muted)" text-anchor="end">today</text></svg></div>
      <div class="card"><div class="eyebrow">Totals</div><div class="readouts" style="margin-top:10px"><div class="ro"><span>Quizzes</span><b>${S.stats.quizzes}</b></div><div class="ro"><span>Cards reviewed</span><b>${S.stats.cardsSeen}</b></div><div class="ro"><span>Exam marks</span><b>${S.stats.examMarks}</b></div><div class="ro"><span>Tools tried</span><b>${S.stats.tools.length}</b></div></div></div></div>
      <div class="sec"><div class="sec-head"><h2 class="h2">Mastery by topic</h2><span class="muted">40% quiz · 20% flashcards · 20% checklist · 20% assessment practice</span></div>
      ${UNITS.filter(u => unitTopics(u.id).length).map(u => `<div style="margin-bottom:14px"><div class="eyebrow" style="margin-bottom:6px;color:${u.css}">${esc(u.name)}</div><div class="heat">${unitTopics(u.id).map(t => { const m = mastery(t); return `<a href="#/t/${t.id}" title="${esc(t.title)} · ${pct(m)}" style="background:color-mix(in srgb,${u.css} ${Math.round(8 + m * 80)}%,var(--surface))">${esc(t.ref)}</a>`; }).join('')}</div></div>`).join('')}</div>
      <div class="sec"><div class="sec-head"><h2 class="h2">Badges</h2><span class="muted">${S.badges.length} of ${BADGES.length}</span></div><div class="badge-grid">${BADGES.map(([id, n, d, , ic]) => `<div class="badge ${S.badges.includes(id) ? 'got' : ''}"><div class="ic">${ic}</div><b>${esc(n)}</b><span>${esc(d)}</span></div>`).join('')}</div></div>
      <div class="sec"><button class="btn sm" id="reset">${ICON.reset} Reset all progress</button><span id="reset-c"></span></div>`;
    $('#reset').onclick = () => { $('#reset-c').innerHTML = ` <span class="small">This deletes all XP, marks and cards. </span><button class="btn sm" id="reset-y" style="border-color:var(--bad);color:var(--bad)">Yes, reset</button>`; $('#reset-y').onclick = () => { try { localStorage.removeItem(STORE_KEY); } catch (e) { } location.hash = '#/home'; location.reload(); }; };
  }
  function about() {
    crumbs('<b>About &amp; help</b>');
    V().innerHTML = `<div class="notes"><h1 class="display" style="font-size:clamp(32px,5vw,50px);margin-bottom:14px">About Casefile</h1>
      <p class="lede">Casefile covers the WJEC Level 3 Applied Diploma in Criminology (also offered as Eduqas in England): all four mandatory units, with the Applied Certificate option of Units 1 and 2. Every topic matches one assessment criterion in the specification.</p>
      <h3 style="margin-top:24px">How to use it</h3><ul><li><b>Learn</b> — notes for each assessment criterion, with evaluation points, worked examples and common mistakes. Tap any <button class="case" type="button" data-case="lawrence">case name</button> for what happened and why it matters.</li><li><b>Case files</b> — the cases, studies, theories and campaigns for the topic; hide the details to test yourself.</li><li><b>Explore</b> — interactive sorters, decision trees and tools such as the attrition funnel, the campaign planner and the CPS Full Code Test.</li><li><b>Flashcards</b> — spaced repetition in five boxes: cards you know well come back less often.</li><li><b>Quiz</b> — multiple-choice checks with explanations.</li><li><b>Exam and assessment practice</b> — WJEC-style questions for Units 2 and 4, and practice tasks for Units 1 and 3 with the real mark bands.</li><li><b>Mock papers and briefs</b> — timed Unit 2 and Unit 4 papers and practice assignment briefs.</li></ul>
      <h3 style="margin-top:24px">Keyboard shortcuts</h3><ul><li><kbd>/</kbd> search · <kbd>A</kbd>–<kbd>D</kbd> answer a quiz question · <kbd>Space</kbd> flip a card · <kbd>1</kbd>–<kbd>4</kbd> rate a card</li></ul>
      <h3 style="margin-top:24px">Accuracy</h3><p>Law, policy and statistics are stated as understood in September 2026. Where a reform had been proposed but was not yet in force, or where figures change every year, the notes say so. Check the latest ONS and Ministry of Justice releases before quoting numbers in an assessment. Exam formats follow the published specification; use your teacher’s guidance and WJEC’s sample assessment materials for exact wording. Casefile is an independent study aid and is not produced or endorsed by WJEC or Eduqas.</p>
      <p>Your progress is stored only in this browser. Clearing site data will reset it.</p></div>`;
  }

  /* ---------- SEARCH ---------- */
  function buildIndex() {
    const ix = [];
    allTopics().forEach(t => { ix.push({ k: 'Topic', t: `${unitOf(t.unit).short} ${t.ref} ${t.title}`, s: t.short, href: '#/t/' + t.id, txt: (t.title + ' ' + t.short + ' ' + t.summary).toLowerCase() }); t.learn.forEach((sec, i) => ix.push({ k: 'Notes', t: sec.h, s: `${unitOf(t.unit).short} ${t.ref} ${t.title}`, href: '#/t/' + t.id, txt: (sec.h + ' ' + plain(sec.html)).toLowerCase() })); });
    Object.values(CASES).filter(c => unitInScope(c.a)).forEach(c => ix.push({ k: c.c || 'Case', t: c.n + ' (' + c.y + ')', s: c.p, href: c.t && TOPIC[c.t] ? '#/t/' + c.t + '/cases' : '#/cases', txt: (c.n + ' ' + c.f + ' ' + c.p).toLowerCase() }));
    STATUTES.forEach(st => ix.push({ k: 'Law', t: st.n, s: st.s.map(x => x[0]).join(', '), href: '#/statutes/acts', txt: (st.n + ' ' + st.s.flat().join(' ')).toLowerCase() }));
    GLOSSARY.forEach(g => ix.push({ k: 'Term', t: g[0], s: g[1], href: '#/statutes/terms', txt: (g[0] + ' ' + g[1]).toLowerCase() }));
    Object.entries(GAMES).forEach(([id, g]) => ix.push({ k: 'Game', t: g.title, s: g.blurb, href: '#/game/' + id, txt: (g.title + ' ' + g.blurb).toLowerCase() }));
    return ix;
  }
  function openPalette() {
    if ($('.palette-back')) return; index ??= buildIndex();
    const back = h('div', { class: 'palette-back', role: 'dialog', 'aria-label': 'Search' }, `<div class="palette"><input id="pq" placeholder="Search topics, case files, theories, laws, terms…" autocomplete="off" aria-label="Search"><ul id="pl"></ul></div>`);
    document.body.append(back);
    const inp = $('#pq'), ul = $('#pl'); let sel = 0, res = [];
    const draw = () => {
      const q = inp.value.toLowerCase().trim(); const words = q.split(/\s+/).filter(Boolean);
      res = q ? index.map(r => { let sc = 0; for (const w of words) { if (!r.txt.includes(w)) return null; sc += r.t.toLowerCase().includes(w) ? 3 : 1; } return { r, sc: sc + (r.k === 'Topic' ? 2 : CASES && ['Case', 'Study', 'Theory', 'Campaign', 'Report'].includes(r.k) ? 1 : 0) }; }).filter(Boolean).sort((a, b) => b.sc - a.sc).slice(0, 14).map(x => x.r) : index.filter(r => r.k === 'Topic').slice(0, 10);
      sel = Math.min(sel, Math.max(0, res.length - 1));
      ul.innerHTML = res.length ? res.map((r, i) => `<li><a href="${r.href}" class="${i === sel ? 'sel' : ''}"><span class="kind">${r.k}</span><span><span class="t">${esc(r.t)}</span><span class="s">${esc(plain(r.s))}</span></span></a></li>`).join('') : '<li class="empty" style="margin:8px">No matches. Try a case, a theorist, an Act or a topic.</li>';
    };
    const close = () => back.remove();
    inp.oninput = () => { sel = 0; draw(); };
    inp.onkeydown = e => { if (e.key === 'ArrowDown') { sel = Math.min(res.length - 1, sel + 1); draw(); e.preventDefault(); } else if (e.key === 'ArrowUp') { sel = Math.max(0, sel - 1); draw(); e.preventDefault(); } else if (e.key === 'Enter' && res[sel]) { location.hash = res[sel].href; close(); } else if (e.key === 'Escape') close(); };
    back.onclick = e => { if (e.target === back || e.target.closest('a')) close(); };
    draw(); inp.focus();
  }
  addEventListener('keydown', e => { if (e.key === '/' && !e.target.matches('input,textarea,select')) { e.preventDefault(); openPalette(); } if (e.key === 'Escape') closePop(); });

  /* ---------- boot ---------- */
  function boot() {
    if (S.settings.theme) document.documentElement.dataset.theme = S.settings.theme;
    chrome(); addEventListener('hashchange', route); route();
  }
  return { boot, refreshChrome, route };
})();
App.boot();
