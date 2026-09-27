/* ==========================================================
   Ratio · application shell, router and views
   ========================================================== */
const TOPIC = Object.fromEntries(TOPICS.map(t => [t.id, t]));
const vis = t => unitInScope(t.unit);
const allTopics = () => TOPICS.filter(vis);
const unitTopics = uid => TOPICS.filter(t => t.unit === uid && vis(t));
const ucol = uid => unitOf(uid)?.css || 'var(--accent)';
const pct = x => Math.round(x * 100) + '%';
const areaTag = uid => { const u = unitOf(uid); return u?.kind === 'private' ? '<span class="tag priv">Private law</span>' : u?.kind === 'public' ? '<span class="tag pub">Public law</span>' : u?.comp ? '<span class="tag comp">Compulsory</span>' : ''; };

/* flashcard deck for a topic: concept cards + case cards */
function deck(t) {
  const d = (t.cards || []).map((c, i) => ({ k: 'k' + i, q: c[0], a: c[1] }));
  (t.cases || []).forEach(id => { const c = CASES[id]; if (c) d.push({ k: 'c:' + id, q: `<span class="eyebrow" style="position:static;display:block;margin-bottom:10px">Name the case</span>${esc(c.f)}`, a: `<b><i class="cn">${esc(c.n)}</i> (${c.y})</b><br><br>${esc(c.p)}` }); });
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
  ['first', 'First instance', 'Finish your first quiz', () => S.stats.quizzes >= 1, 'I'],
  ['perfect', 'Unanimous', 'Score 100% on a quiz', () => S.stats.perfect >= 1, '✓'],
  ['streak3', 'Term time', 'Study 3 days in a row', () => S.streak.n >= 3, '3'],
  ['streak7', 'Full term', 'Study 7 days in a row', () => S.streak.n >= 7, '7'],
  ['cards50', 'Well read', 'Review 50 flashcards', () => S.stats.cardsSeen >= 50, '≡'],
  ['cards250', 'Law library', 'Review 250 flashcards', () => S.stats.cardsSeen >= 250, '¶'],
  ['tools5', 'Applying the test', 'Try 5 interactive tools', () => S.stats.tools.length >= 5, '⚖'],
  ['tools20', 'Legal method', 'Try 20 interactive tools', () => S.stats.tools.length >= 20, '§'],
  ['assess', 'Know the paper', 'Read the Assessment page', () => !!S.assessSeen, 'A'],
  ['mock', 'Exam conditions', 'Complete a timed mock paper', () => S.stats.mocks >= 1, '⏱'],
  ['exam', 'Examiner’s eye', 'Self-mark 25 exam marks', () => S.stats.examMarks >= 25, 'M'],
  ['exam100', 'Chief examiner', 'Self-mark 100 exam marks', () => S.stats.examMarks >= 100, 'M+'],
  ['c1', 'Constitutional lawyer', '70% mastery of Component 1 Section A', () => unitMastery('1A') >= .7, 'C1'],
  ['lvl5', 'Called to the Bar', 'Reach level 5', () => level().l >= 5, '★'],
  ['lvl10', 'Taking silk', 'Reach level 10 (King’s Counsel)', () => level().l >= 10, 'KC']
];
function checkBadges() { BADGES.forEach(([id, name, , test]) => { try { if (!S.badges.includes(id) && test()) { S.badges.push(id); save(); setTimeout(() => { toast(`<b>Badge</b> ${esc(name)}`, 3200); sfx.win(); }, 400); } } catch (e) { } }); }

const App = (() => {
  let cleanup = null, lastTopic = null, index = null;
  const V = () => $('#view');
  const go = hh => { location.hash = hh; };
  const crumbs = html => { $('#crumbs').innerHTML = html; };

  /* ---------- chrome ---------- */
  function chrome() {
    const nav = [['home', 'Home', '#/home'], ['map', 'All topics', '#/topics'], ['book', 'Casebook', '#/cases'], ['pillar', 'Statutes & terms', '#/statutes'], ['flask', 'Assessment', '#/assess'], ['clock', 'Mock papers', '#/mock'], ['game', 'Arcade', '#/arcade'], ['chart', 'Progress', '#/progress']];
    const uLink = u => `<a class="unit-a${unitInScope(u.id) ? '' : ' off'}" href="#/unit/${u.id}" data-nav="#/unit/${u.id}" style="--uc:${u.css}"><span class="unit-line" style="color:${u.css}"></span><span style="min-width:0"><span>${esc(u.name)}</span><small>${esc(u.code)}</small></span><span class="meter" data-um="${u.id}"></span></a>`;
    $('#side').innerHTML = `<a class="brand" href="#/home" aria-label="Ratio home"><span class="brand-mark">${ICON.scales}</span><span><span class="brand-name">Rat<em>io</em></span><br><span class="brand-sub">Eduqas A level Law</span></span></a>
      <nav class="nav" aria-label="Main">${nav.map(([ic, l, hh]) => `<a href="${hh}" data-nav="${hh}">${ICON[ic]}<span>${l}</span></a>`).join('')}
      <div class="nav-label">Component 1 · compulsory</div>${UNITS.filter(u => u.comp).map(uLink).join('')}
      <div class="nav-label">Components 2 & 3 · choose three</div>${UNITS.filter(u => u.kind).map(uLink).join('')}
      <div class="nav-label">Skills</div>${uLink(unitOf('S'))}
      <div class="nav-label">More</div><a href="#/about" data-nav="#/about">${ICON.help}<span>About &amp; help</span></a></nav>
      <div class="side-foot">Built around the Eduqas GCE A level Law specification (A150QS, teaching from 2017). The law is stated as understood in September 2026. Progress is saved in this browser only.</div>`;
    $('#tabbar').innerHTML = [['home', 'Home', '#/home'], ['map', 'Topics', '#/topics'], ['book', 'Cases', '#/cases'], ['game', 'Arcade', '#/arcade'], ['chart', 'Progress', '#/progress']].map(([ic, l, hh]) => `<a href="${hh}" data-nav="${hh}">${ICON[ic]}<span>${l}</span></a>`).join('');
    $('#search-btn').innerHTML = `${ICON.search}<span>Search topics, cases, statutes…</span><kbd>/</kbd>`;
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
    const a = S.settings.areas;
    $('#route-chip').innerHTML = (a.length === 4 ? 'All 4 areas' : a.map(x => AREA_NAMES[x]).join(' · ')).replace('Human rights', 'HR');
    $('#route-chip').title = 'Choose your three areas of substantive law';
    $$('[data-um]').forEach(e => e.textContent = unitInScope(e.dataset.um) ? pct(unitMastery(e.dataset.um)) : '');
    const hsh = location.hash || '#/home';
    $$('[data-nav]').forEach(el => el.classList.toggle('on', hsh === el.dataset.nav || (el.dataset.nav !== '#/home' && hsh.startsWith(el.dataset.nav + '/')) || (el.dataset.nav.startsWith('#/unit/') && hsh.startsWith('#/t/') && TOPIC[decodeURIComponent(hsh.split('/')[2])]?.unit === el.dataset.nav.split('/')[2])));
  }

  /* ---------- course settings: the three areas ---------- */
  function openSettings() {
    if ($('.palette-back')) return;
    const cur = S.settings.areas.slice().sort().join();
    const back = h('div', { class: 'palette-back', role: 'dialog', 'aria-label': 'Your areas of law' }, `<div class="palette settings-dlg"><h2 class="h3" style="margin:0 0 4px">Your areas of substantive law</h2>
      <p class="small muted" style="margin:0 0 6px">Everyone takes Component 1. For Components 2 and 3 you study <b>three</b> of the four areas: either two public and one private, or one public and two private. Your choice must be the same for both components.</p>
      <div class="route-grid">${ROUTES.map(r => `<button class="route-opt ${r.slice().sort().join() === cur ? 'on' : ''}" data-r="${r.join(',')}"><b>${r.map(x => AREA_NAMES[x]).join(', ')}</b><span>${r.filter(x => unitOf(x).kind === 'private').length} private · ${r.filter(x => unitOf(x).kind === 'public').length} public · leaves out ${AREA_NAMES[['CT', 'TO', 'CR', 'HR'].find(x => !r.includes(x))]}</span></button>`).join('')}
      <button class="route-opt ${cur === 'CR,CT,HR,TO' ? 'on' : ''}" data-r="CT,TO,CR,HR" style="grid-column:1/-1"><b>Show all four areas</b><span>Useful if you have not chosen yet or want to explore</span></button></div>
      <div class="row" style="justify-content:flex-end;margin-top:8px"><button class="btn primary" id="set-done">Done</button></div></div>`);
    document.body.append(back);
    $$('.route-opt', back).forEach(b => b.onclick = () => { S.settings.areas = b.dataset.r.split(','); S.settings.chosen = true; save(); $$('.route-opt', back).forEach(x => x.classList.toggle('on', x === b)); });
    const close = () => { back.remove(); index = null; chrome(); route(); };
    $('#set-done').onclick = close; back.onclick = e => { if (e.target === back) close(); };
    back.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  /* ---------- case popover (delegated) ---------- */
  function showCase(btn) {
    closePop();
    const c = CASES[btn.dataset.case]; if (!c) return;
    const u = unitOf(c.a);
    const pop = h('div', { class: 'pop', role: 'dialog', 'aria-label': c.n, style: `--uc:${u?.css || 'var(--accent)'}` }, `<h4>${esc(c.n)}</h4><div class="meta">${c.y} · ${esc(c.c || '')} · ${esc(u?.short || '')}</div><p>${esc(c.f)}</p><div class="law">${rich(c.p)}</div>${c.t && TOPIC[c.t] ? `<p class="small" style="margin:8px 0 0"><a href="#/t/${c.t}/cases">Topic ${c.t} · ${esc(TOPIC[c.t].title)}</a></p>` : ''}`);
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
    ${!S.settings.chosen ? `<div class="card sec onboard" style="margin-top:0;margin-bottom:22px"><div class="eyebrow">Welcome to Ratio</div><h2 class="h3" style="margin:6px 0">Which three areas of law are you studying?</h2><p class="small muted" style="margin:0 0 12px">Everyone takes Component 1. For Components 2 and 3 you study three of contract, tort, criminal and human rights law. Ratio will hide the area you are not taking. You can change this at any time from the chip at the top of the page.</p><button class="btn primary" id="ob-go">Choose my areas</button></div>` : ''}
    <section class="hero" aria-label="Your progress">
      <div class="hero-grid">
        <div><div class="eyebrow">Eduqas A level Law · Level ${L.l} · ${esc(L.name)}</div>
          <h1 class="display" style="margin-top:12px">Every topic a volume. <em>Fill the shelf.</em></h1>
          <p>Notes, case law, interactive legal tests and exam practice for the whole specification. Each book on the shelf is a topic; its spine turns gold as you master it.</p>
          <div class="row" style="margin-top:18px">${last && vis(last) ? `<a class="btn gilt" href="#/t/${last.id}">${ICON.play} Continue ${esc(last.id)} ${esc(last.title)}</a>` : `<a class="btn gilt" href="#/t/1.1.1a">${ICON.play} Start with Parliament</a>`}
          <a class="btn" href="#/daily">${dDone != null ? `Daily docket ✓ ${dDone}/5` : 'Daily docket'}</a></div></div>
        <div class="hero-stats"><div class="hstat"><b>${S.xp}</b><span>XP</span></div><div class="hstat"><b>${S.streak.n || 0}</b><span>day streak</span></div><div class="hstat"><b>${mastered}<small style="font-size:16px;opacity:.7">/${ts.length}</small></b><span>mastered</span></div></div>
      </div>
      <canvas class="shelf" id="shelf" role="img" aria-label="Bookshelf: one volume per topic; gilt shows mastery"></canvas>
      <div class="shelf-tip" id="shelf-tip"></div>
    </section>
    <div class="sec"><div class="sec-head"><h2 class="h2">Component 1</h2><span class="muted">compulsory · 1 h 30 · 50 marks · 25%</span></div>
      <div class="grid g3">${UNITS.filter(u => u.comp).map(unitCard).join('')}</div></div>
    <div class="sec"><div class="sec-head"><h2 class="h2">Components 2 and 3</h2><span class="muted">three areas · each paper 2 h 15 · 75 marks · 37.5%</span></div>
      <div class="grid g4">${UNITS.filter(u => u.kind).map(unitCard).join('')}</div></div>
    <div class="sec grid g3">
      <div class="card"><div class="eyebrow">Revise next</div><div class="stack" style="margin-top:12px">${rec.map(({ t, m }) => `<a class="tcard" href="#/t/${t.id}" style="--uc:${ucol(t.unit)}"><span class="no">${t.id}</span><span class="tt">${esc(t.title)}</span><span class="ts">${pct(m)} mastery</span></a>`).join('')}</div></div>
      <div class="card" style="--uc:${ucol(cod.a)}"><div class="eyebrow">Case of the day · ${esc(unitOf(cod.a)?.short || '')}</div><h3 style="font:italic 700 21px/1.25 var(--f-display);margin:14px 0 4px">${esc(cod.n)}</h3><div class="small muted mono">${cod.y} · ${esc(cod.c || '')}</div><p class="small" style="margin:10px 0">${esc(cod.f)}</p><div class="small" style="padding:10px 12px;border-radius:10px;background:var(--accent-soft)">${rich(cod.p)}</div><div class="row" style="margin-top:14px"><a class="btn sm" href="#/cases">Open the casebook</a><a class="btn sm" href="#/game/casematch">Name That Case</a></div></div>
      <div class="card"><div class="eyebrow">Exam countdown</div>${countdown()}</div>
    </div>
    <div class="sec grid g3"><a class="card linkcard" href="#/assess"><div class="eyebrow">AO1 · AO2 · AO3</div><div class="h3" style="margin:6px 0">How you are assessed</div><p class="small muted" style="margin:0">The three papers, assessment objectives, command words and how to structure problem and essay answers.</p></a>
      <a class="card linkcard" href="#/mock"><div class="eyebrow">Timed · self-marked</div><div class="h3" style="margin:6px 0">Mock papers</div><p class="small muted" style="margin:0">Full Component 1, 2 and 3 papers built from your three areas, with indicative content to mark against.</p></a>
      <a class="card linkcard" href="#/cases"><div class="eyebrow">${Object.keys(CASES).length} cases</div><div class="h3" style="margin:6px 0">The casebook</div><p class="small muted" style="margin:0">Every case in Ratio with facts and legal principle. Filter by area and test yourself with the facts hidden.</p></a></div>`;
    const ob = $('#ob-go'); if (ob) ob.onclick = openSettings;
    cleanup = drawShelf($('#shelf'));
    const inp = $('#exam-date'); if (inp) inp.onchange = () => { S.settings.examDate = inp.value; save(); route(); };
  }
  const unitCard = u => {
    const ts = unitTopics(u.id), m = unitMastery(u.id), off = !unitInScope(u.id);
    return `<a class="unit-card${off ? ' off' : ''}" href="#/unit/${u.id}" style="--uc:${u.css}"><span class="line"></span><div class="row" style="justify-content:space-between"><span class="eyebrow">${esc(u.code)}</span>${areaTag(u.id)}</div><div class="h3">${esc(u.name)}</div><div class="small muted">${off ? 'Not one of your three areas' : `${ts.length} topics · ${ts.reduce((a, t) => a + (t.cases || []).length, 0)} case links · ${ts.reduce((a, t) => a + t.quiz.length, 0)} questions`}</div><div class="bar"><i style="width:${m * 100}%"></i></div><div class="small mono">${pct(m)} mastered</div></a>`;
  };
  function countdown() {
    const d = S.settings.examDate, days = d ? Math.ceil((new Date(d + 'T09:00') - Date.now()) / 864e5) : null;
    return `<div style="font:700 60px/1 var(--f-display);margin:16px 0 4px;color:var(--gilt);font-variant-numeric:tabular-nums">${days != null ? Math.max(0, days) : '—'}</div><div class="muted small">${days != null ? 'days until your next exam' : 'Set the date of your first Law paper (usually in June)'}</div><label class="small muted" for="exam-date" style="display:block;margin-top:14px">Exam date</label><input id="exam-date" type="date" value="${d || ''}" class="inp" style="margin-top:4px">`;
  }
  /* The home bookshelf: one bound volume per topic, grouped by unit on shelves. */
  function drawShelf(cv) {
    const c = cv.getContext('2d'); let W, H, alive = true, hover = -1, t0 = performance.now(); const slots = [];
    const units = UNITS.filter(u => unitTopics(u.id).length);
    const vols = []; units.forEach(u => unitTopics(u.id).forEach(t => vols.push({ t, u, m: mastery(t), col: cssVar(u.css.slice(4, -1)) || '#1F6B4A' })));
    const size = () => { const rc = cv.getBoundingClientRect(), d = Math.min(2, devicePixelRatio || 1); W = rc.width; H = rc.height; cv.width = W * d; cv.height = H * d; c.setTransform(d, 0, 0, d, 0, 0); layout(); };
    const layout = () => {
      slots.length = 0; const rows = W < 560 ? 4 : W < 900 ? 3 : 2, n = vols.length + units.length - 1, per = Math.ceil(n / rows);
      const m = 14, sw = (W - 2 * m) / per, rh = (H - 10) / rows; let k = 0, prevU = null;
      vols.forEach((v, i) => { if (prevU && prevU !== v.u) k++; prevU = v.u; const r = Math.floor(k / per), col = k % per; const hgt = rh * (0.62 + ((i * 37) % 11) / 60); slots.push({ v, x: m + col * sw + sw * 0.08, w: sw * 0.84, y: 8 + r * rh + (rh - 12 - hgt), h: hgt, base: 8 + r * rh + rh - 12, rh }); k++; });
      slots.rows = rows; slots.rh = rh;
    };
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const frame = now => {
      if (!alive) return; const grow = reduce ? 1 : Math.min(1, (now - t0) / 1100); c.clearRect(0, 0, W, H);
      for (let r = 0; r < slots.rows; r++) { const y = 8 + r * slots.rh + slots.rh - 12; c.fillStyle = '#3B2A17'; c.fillRect(6, y, W - 12, 7); c.fillStyle = 'rgba(0,0,0,.35)'; c.fillRect(6, y + 7, W - 12, 3); }
      slots.forEach((s, i) => {
        const { v } = s, m = v.m * grow, lift = i === hover ? 4 : 0, y = s.y - lift;
        c.fillStyle = hexA(v.col, .35 + .25 * m); c.fillRect(s.x, y, s.w, s.h);
        c.fillStyle = 'rgba(0,0,0,.28)'; c.fillRect(s.x + s.w * .78, y, s.w * .22, s.h);
        const gold = `rgba(217,180,90,${.18 + .82 * m})`;
        c.fillStyle = gold; c.fillRect(s.x, y + 6, s.w, 2); c.fillRect(s.x, y + s.h - 9, s.w, 2);
        if (m > 0) { c.fillStyle = hexA(v.col, .9); c.fillRect(s.x, y + s.h - 9 - (s.h - 18) * m, s.w, (s.h - 18) * m); c.fillStyle = gold; c.fillRect(s.x, y + s.h - 9 - (s.h - 18) * m, s.w, 1.5); }
        if (s.w > 13) { c.save(); c.translate(s.x + s.w / 2 + 3, y + 14); c.rotate(Math.PI / 2); c.fillStyle = m >= .7 ? '#F3D98C' : 'rgba(245,241,228,.78)'; c.font = `600 ${Math.min(11, s.w * .55)}px "JetBrains Mono", monospace`; c.textBaseline = 'middle'; c.fillText(v.t.id, 0, 0); c.restore(); }
        if (i === hover) { c.strokeStyle = '#F3D98C'; c.lineWidth = 1.5; c.strokeRect(s.x - .5, y - .5, s.w + 1, s.h + 1); }
      });
      if (!reduce && grow < 1) requestAnimationFrame(frame);
    };
    size(); const ro = new ResizeObserver(() => { size(); frame(performance.now() + 1e6); }); ro.observe(cv); requestAnimationFrame(frame);
    const tip = $('#shelf-tip'), hit = (x, y) => slots.findIndex(s => x >= s.x && x <= s.x + s.w && y >= s.y - 4 && y <= s.base);
    cv.addEventListener('pointermove', e => { const rc = cv.getBoundingClientRect(), k = hit(e.clientX - rc.left, e.clientY - rc.top); if (k !== hover) { hover = k; frame(performance.now() + 1e6); } cv.style.cursor = k >= 0 ? 'pointer' : 'default'; tip.textContent = k >= 0 ? `${slots[k].v.t.id} ${slots[k].v.t.title} · ${slots[k].v.u.short} · ${pct(slots[k].v.m)} mastery` : 'Hover a volume to see its topic; click to open it.'; });
    cv.addEventListener('pointerleave', () => { hover = -1; frame(performance.now() + 1e6); });
    cv.addEventListener('click', () => { if (hover >= 0) go('#/t/' + slots[hover].v.t.id); });
    tip.textContent = 'One volume per topic, grouped by area. Click a spine to open it.';
    return () => { alive = false; ro.disconnect(); };
  }

  /* ---------- TOPICS / UNIT ---------- */
  const tcard = t => { const m = mastery(t); return `<a class="tcard" href="#/t/${t.id}" style="--uc:${ucol(t.unit)}"><span class="no">${t.id}</span><span class="tt">${esc(t.title)}</span><span class="ts">${esc(t.short)}</span><span class="bar"><i style="width:${m * 100}%"></i></span></a>`; };
  const hiddenNote = () => { const off = ['CT', 'TO', 'CR', 'HR'].filter(x => !unitInScope(x)); return off.length ? `<div class="note-strip">${off.map(x => AREA_NAMES[x]).join(', ')} is hidden because it is not one of your three areas. <a href="javascript:void 0" data-settings>Change your areas</a></div>` : ''; };
  const wireSettingsLinks = () => $$('[data-settings]').forEach(a => a.onclick = openSettings);
  function topics() {
    crumbs('<b>All topics</b>');
    V().innerHTML = `<h1 class="display" style="font-size:clamp(32px,5vw,50px)">All topics</h1><p class="lede">${allTopics().length} topics covering the whole Eduqas specification: law making, the English legal system, the nature of law, your three areas of substantive law, and legal skills.</p>
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
      <div class="row"><button class="btn primary" id="uquiz">Mixed quiz</button><a class="btn" href="#/mock">Mock papers</a><a class="btn" href="#/cases">Casebook</a></div>
      <div class="sec topic-list">${ts.map(tcard).join('')}</div>` : `<div class="empty">This is not one of your three areas. <a href="javascript:void 0" data-settings>Change your areas</a></div>`}</div>`;
    wireSettingsLinks();
    if (!ts.length) return;
    $('#uquiz').onclick = () => { const items = shuffle(ts.flatMap(t => t.quiz.map(q => ({ ...q, topic: t.id })))).slice(0, 12); V().innerHTML = `<div class="quiz-wrap" style="--uc:${u.css};margin:0 auto" id="qz"></div>`; runQuiz($('#qz'), items, { title: u.short + ' mixed quiz', onDone: r => addXP(r.correct * 8, 'Mixed quiz') }); };
  }

  /* ---------- TOPIC ---------- */
  function topic(id, tab) {
    const t = TOPIC[id], u = unitOf(t.unit), s = T(id); s.seen = Date.now(); S.last = id; save();
    const list = allTopics(), idx = list.indexOf(t), prev = list[idx - 1], next = list[idx + 1];
    crumbs(`<a href="#/unit/${u.id}">${esc(u.name)}</a> / <b>${esc(t.id)} ${esc(t.title)}</b>`);
    const d = deck(t);
    const tabs = [['learn', 'Learn', ''], ...(t.cases?.length ? [['cases', 'Key cases', t.cases.length]] : []), ...(t.tools?.length ? [['explore', 'Explore', t.tools.length]] : []), ['cards', 'Flashcards', d.length], ['quiz', 'Quiz', t.quiz.length], ...(t.exam?.length ? [['exam', 'Exam practice', t.exam.length]] : [])];
    if (!tabs.find(x => x[0] === tab)) tab = 'learn';
    const m = mastery(t);
    V().innerHTML = `<div style="--uc:${u.css}">
      <header class="topic-head"><div class="row"><span class="topic-ref">Spec ${esc(t.ref)}</span><span class="eyebrow">${esc(u.code)} · ${esc(u.name)}</span>${areaTag(u.id)}</div><h1 class="display">${esc(t.title)}</h1></header>
      ${!vis(t) ? `<div class="note-strip" style="margin:0 0 12px">This topic is in an area you are not taking. You can still read it. <a href="javascript:void 0" data-settings>Change your areas</a></div>` : ''}
      <p class="lede">${esc(t.summary)}</p>
      <div class="row" style="margin-top:12px"><span class="pill acc">${pct(m)} mastery</span><span class="pill">Quiz best ${s.quiz || 0}%</span><span class="pill">${d.filter(c => (s.cards[c.k] || 0) >= 3).length}/${d.length} cards known</span>${t.exam?.length ? `<span class="pill">Exam self-mark ${Math.round((s.exam || 0) * 100)}%</span>` : ''}</div>
      <nav class="tabs" role="tablist" aria-label="Topic sections">${tabs.map(([k, l, n]) => `<a class="tab ${k === tab ? 'on' : ''}" role="tab" aria-selected="${k === tab}" href="#/t/${id}/${k}">${l}${n !== '' ? `<span class="n">${n}</span>` : ''}</a>`).join('')}</nav>
      <div id="tab"></div>
      <div class="row" style="justify-content:space-between;margin-top:40px;border-top:1px solid var(--line);padding-top:18px">${prev ? `<a class="btn ghost" href="#/t/${prev.id}">${ICON.back} ${esc(prev.id)} ${esc(prev.title)}</a>` : '<span></span>'}${next ? `<a class="btn ghost" href="#/t/${next.id}">${esc(next.id)} ${esc(next.title)} ${ICON.arrow}</a>` : ''}</div></div>`;
    wireSettingsLinks();
    const host = $('#tab');
    ({ learn: learnTab, cases: casesTab, explore: exploreTab, cards: cardsTab, quiz: quizTab, exam: examTab })[tab](host, t);
  }

  function learnTab(host, t) {
    const s = T(t.id), secs = t.learn;
    host.innerHTML = `<div class="layout-2"><article class="notes">
      ${secs.map((sec, i) => `<section id="s${i}"><h3><span class="k">${String(i + 1).padStart(2, '0')}</span>${esc(sec.h)}</h3>${rich(sec.html)}</section>`).join('')}
      ${t.debate?.length ? `<section id="s-ev"><h3><span class="k">AO3</span>Evaluate: arguments on both sides</h3>${t.debate.map(db => `<div class="debate"><div class="q">${esc(db.q)}</div><div class="for"><h5>For / strengths</h5><ul>${db.for.map(x => `<li>${rich(x)}</li>`).join('')}</ul></div><div class="ag"><h5>Against / weaknesses</h5><ul>${db.ag.map(x => `<li>${rich(x)}</li>`).join('')}</ul></div></div>`).join('')}<p class="small muted">A top-band answer weighs these, decides which side is stronger, and counters the alternative view.</p></section>` : ''}
      ${t.worked?.length ? `<section id="s-wk"><h3><span class="k">AO2</span>Worked answers</h3>${t.worked.map((w, i) => `<div class="worked"><div class="wq"><span class="eyebrow">Worked answer ${i + 1}</span><div style="margin-top:6px">${rich(w.q)}</div></div><ol>${w.s.map((st, j) => `<li class="${j ? 'hid' : ''}">${rich(st)}</li>`).join('')}</ol><div class="wf"><button class="btn sm primary" data-step>Next step</button><button class="btn sm ghost" data-all>Show all</button><span class="ans" hidden>${rich(w.a)}</span></div></div>`).join('')}</section>` : ''}
      <section id="s-pf"><h3><span class="k">AVOID</span>Common mistakes</h3><div class="box warn"><b class="lbl">Examiners often see</b><ul>${t.pitfalls.map(p => `<li>${rich(p)}</li>`).join('')}</ul></div></section>
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
    return `<div class="case-card${cover ? ' cover' : ''}" style="--uc:${u?.css || 'var(--accent)'}"><h4>${esc(c.n)}</h4><div class="meta">${c.y} · ${esc(c.c || '')}${c.t && TOPIC[c.t] ? ` · <a href="#/t/${c.t}" style="color:inherit">${esc(c.t)}</a>` : ''}</div><p class="f">${esc(c.f)}</p><div class="law f">${rich(c.p)}</div></div>`;
  }
  function casesTab(host, t) {
    let cover = false;
    const render = () => {
      host.innerHTML = `<div class="row" style="margin-bottom:14px"><div class="seg" id="cv"><button class="${cover ? '' : 'on'}" data-c="0">Show all</button><button class="${cover ? 'on' : ''}" data-c="1">Hide facts (test me)</button></div><span class="small muted">${cover ? 'Tap a card to reveal it.' : 'Every case here is also in your flashcards and the casebook.'}</span></div><div class="case-grid">${t.cases.map(id => CASES[id] ? caseCard(CASES[id], cover) : '').join('')}</div>`;
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
        const modeBar = `<div class="row" style="justify-content:center;margin-bottom:14px"><div class="seg" id="fm">${[['all', 'All cards'], ['concepts', 'Concepts'], ['cases', 'Cases']].map(([k, l]) => `<button data-m="${k}" class="${mode === k ? 'on' : ''}">${l}</button>`).join('')}</div></div>`;
        if (pos >= queue.length) { host.innerHTML = modeBar + `<div class="card result"><div class="eyebrow">Session complete</div><div class="big">${reviewed}</div><p class="lede" style="margin:8px auto">cards reviewed. Known (box 3+): ${d.filter(c => (s.cards[c.k] || 0) >= 3).length}/${d.length}</p><button class="btn primary" id="again">Review again</button></div>`; $('#again').onclick = start; wireMode(); return; }
        const c = queue[pos], box = s.cards[c.k] || 0;
        host.innerHTML = modeBar + `<div class="fc-stage"><div class="row" style="justify-content:space-between;margin-bottom:12px"><span class="eyebrow">Card ${pos + 1} of ${queue.length}</span><span class="pill">Box ${box || 'new'}</span></div>
          <div class="fc ${flipped ? 'flip' : ''}" id="fc" tabindex="0" role="button" aria-label="Flip card"><div class="front"><span class="eyebrow">${c.k.startsWith('c:') ? 'Case' : 'Question'}</span><div>${rich(c.q)}</div></div><div class="back"><span class="eyebrow">Answer</span><div>${rich(c.a)}</div></div></div>
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
    return shuffle(ids).slice(0, n).map(id => { const c = CASES[id], pool = Object.values(CASES).filter(x => x !== c && (x.a === c.a || ids.includes(x.id))); const w = shuffle(pool).slice(0, 3); return { q: `Which case? <span class="muted">${esc(c.f)}</span>`, o: [`<i class="cn">${esc(c.n)}</i> (${c.y})`, ...w.map(x => `<i class="cn">${esc(x.n)}</i> (${x.y})`)], x: esc(c.p) }; });
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
      host.innerHTML = `<div class="card result"><div class="eyebrow">${esc(o.title || 'Quiz')} complete</div><div class="big">${p}%</div><p class="lede" style="margin:8px auto">${correct} of ${qs.length} correct${p === 100 ? ' — unanimous!' : p >= 70 ? ' — strong.' : ' — review the notes and try again.'}</p>
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
      <div class="row" style="padding:0 18px 14px"><button class="btn sm" data-show>Show mark scheme</button><span class="small muted">${q.m >= 15 ? 'Levels-marked: tick the indicative content you covered, then judge the level.' : 'Tick each point you made.'}</span></div>
      <div class="ms" hidden><div class="eyebrow" style="margin-bottom:6px">Indicative content</div>${q.ms.map((p, i) => `<label><input type="checkbox" data-i="${i}"> <span>${rich(p)}</span></label>`).join('')}
      ${q.m >= 10 ? `<div class="tbl levels"><table><tr><th>Level</th><th>What it looks like</th></tr>${LEVELS_TXT(q.m).map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table></div>` : ''}
      <div class="row" style="margin-top:10px"><span class="pill acc" data-score>0 / ${q.m}</span><button class="btn sm primary" data-save>Record my mark</button></div></div>`);
    const ta = $('textarea', el); ta.oninput = () => { try { localStorage.setItem(draftKey, ta.value); } catch (e) { } };
    $('[data-show]', el).onclick = () => { $('.ms', el).hidden = !$('.ms', el).hidden; };
    const score = () => { const n = $$('input:checked', el).length; return Math.min(q.m, Math.round(n / q.ms.length * q.m)); };
    $$('input', el).forEach(c => c.onchange = () => { $('[data-score]', el).textContent = `${score()} / ${q.m}`; });
    $('[data-save]', el).onclick = e => { const sc = score(); e.target.disabled = true; e.target.textContent = 'Recorded'; onMark(sc, q.m); };
    return el;
  }
  const LEVELS_TXT = m => m >= 15 ? [['Top', 'Thorough, accurate knowledge; authority used precisely; sustained, logical argument; well-developed application or evaluation leading to a reasoned conclusion'], ['Upper-middle', 'Good knowledge with some authority; clear application or evaluation, though not always developed'], ['Lower-middle', 'Some relevant knowledge; limited authority; application or evaluation is partial or descriptive'], ['Bottom', 'Basic, fragmented knowledge; little or no authority; assertion rather than argument']] : [['Top', 'Clear, accurate and detailed explanation supported by authority'], ['Middle', 'Some accurate explanation; limited authority or development'], ['Bottom', 'Basic or partly accurate points']];
  function examTab(host, t) {
    const s = T(t.id); s.examMarks ??= {};
    host.innerHTML = `<p class="small muted" style="max-width:70ch">Questions in the style of Eduqas papers. Short questions test knowledge (AO1); scenario questions test application (AO2); “analyse and evaluate” questions test AO3. Write or plan an answer, then mark it honestly against the indicative content.</p><div id="eqs"></div>`;
    t.exam.forEach((q, i) => $('#eqs').append(examBlock(q, t.id + '.' + i, (sc, m) => { s.examMarks[i] = sc / m; const vals = t.exam.map((_, j) => s.examMarks[j] || 0); s.exam = vals.reduce((a, b) => a + b, 0) / t.exam.length; S.stats.examMarks += sc; save(); addXP(sc * 2, 'Exam question marked'); })));
  }

  /* ---------- CASEBOOK ---------- */
  function casebook() {
    crumbs('<b>Casebook</b>');
    let area = 'all', q = '', cover = false;
    const areas = [['all', 'All'], ...UNITS.filter(u => u.id !== 'S').map(u => [u.id, u.short])];
    V().innerHTML = `<h1 class="display" style="font-size:clamp(32px,5vw,50px)">The casebook</h1><p class="lede">Every case in Ratio, with its facts and the principle it established. Case names in the notes open the same summary. Hide the facts to test yourself.</p>
      <div class="filters"><input id="cq" type="search" placeholder="Search cases, facts or principles…" aria-label="Search cases"><div class="seg" id="cv"><button data-c="0" class="on">Show all</button><button data-c="1">Hide facts</button></div></div>
      <div class="row" id="ca" style="margin-bottom:16px">${areas.map(([k, l]) => `<button class="btn sm ${k === 'all' ? 'primary' : ''}" data-a="${k}" ${k !== 'all' && !unitInScope(k) ? 'style="opacity:.5"' : ''}>${esc(l)}</button>`).join('')}</div><div id="clist"></div>`;
    const render = () => {
      const list = Object.values(CASES).filter(c => (area === 'all' ? unitInScope(c.a) : c.a === area) && (!q || (c.n + ' ' + c.f + ' ' + c.p).toLowerCase().includes(q))).sort((a, b) => a.n.localeCompare(b.n));
      $('#clist').innerHTML = `<p class="small muted">${list.length} cases</p><div class="case-grid">${list.map(c => caseCard(c, cover)).join('')}</div>`;
      $$('.case-card.cover').forEach(cd => cd.onclick = () => cd.classList.toggle('peek'));
    };
    $('#cq').oninput = e => { q = e.target.value.toLowerCase().trim(); render(); };
    $$('#ca button').forEach(b => b.onclick = () => { area = b.dataset.a; $$('#ca button').forEach(x => x.classList.toggle('primary', x === b)); render(); });
    $$('#cv button').forEach(b => b.onclick = () => { cover = b.dataset.c === '1'; $$('#cv button').forEach(x => x.classList.toggle('on', x === b)); render(); });
    render();
  }
  function statutes(tab) {
    crumbs('<b>Statutes & terms</b>');
    V().innerHTML = `<h1 class="display" style="font-size:clamp(32px,5vw,50px)">Statutes &amp; terms</h1><p class="lede">The key sections you are expected to quote, and the Latin and legal terms examiners reward.</p>
      <nav class="tabs" style="position:static"><a class="tab ${tab === 'acts' ? 'on' : ''}" href="#/statutes/acts">Statute book<span class="n">${STATUTES.length}</span></a><a class="tab ${tab === 'terms' ? 'on' : ''}" href="#/statutes/terms">Glossary<span class="n">${GLOSSARY.length}</span></a></nav>
      <div class="filters"><input id="sq" type="search" placeholder="Filter…" aria-label="Filter"></div><div id="slist"></div>`;
    const render = q => {
      if (tab === 'terms') $('#slist').innerHTML = `<div class="gloss">${GLOSSARY.filter(g => !q || (g[0] + g[1]).toLowerCase().includes(q)).sort((a, b) => a[0].localeCompare(b[0])).map(g => `<div><b>${esc(g[0])}</b><span>${esc(g[1])}</span></div>`).join('')}</div>`;
      else $('#slist').innerHTML = `<div class="stat-list">${STATUTES.filter(st => unitInScope(st.a) || st.a === '1A' || st.a === '1B').filter(st => !q || (st.n + st.s.flat().join(' ')).toLowerCase().includes(q)).map(st => `<div class="statute" style="--uc:${ucol(st.a)}"><h4>${esc(st.n)}</h4><dl>${st.s.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${rich(v)}</dd>`).join('')}</dl></div>`).join('')}</div>`;
    };
    $('#sq').oninput = e => render(e.target.value.toLowerCase().trim()); render('');
  }

  /* ---------- ASSESSMENT ---------- */
  function assess() {
    crumbs('<b>Assessment</b>'); if (!S.assessSeen) { S.assessSeen = 1; save(); checkBadges(); }
    V().innerHTML = `<div class="notes" style="max-width:none">${ASSESS_HTML}</div>`;
  }

  /* ---------- MOCK PAPERS ---------- */
  function mock() {
    crumbs('<b>Mock papers</b>');
    V().innerHTML = `<h1 class="display" style="font-size:clamp(32px,5vw,50px)">Mock papers</h1><p class="lede">Timed papers in the Eduqas format, built from your three areas. Answer in the boxes (or on paper), then mark against the indicative content. Your answers stay in this browser.</p>
      <div class="grid g3 sec">${MOCKS.map(m => `<a class="card linkcard" href="#/mock/${m.id}"><div class="eyebrow">${esc(m.meta)}</div><div class="h3" style="margin:6px 0">${esc(m.title)}</div><p class="small muted" style="margin:0">${esc(m.blurb)}</p></a>`).join('')}</div>`;
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
    secs.forEach((s, si) => { $('#mq').insertAdjacentHTML('beforeend', `<h2 class="h3" style="margin:28px 0 6px;color:${s.css || 'inherit'}">${esc(s.h)}</h2>${s.note ? `<p class="small muted">${esc(s.note)}</p>` : ''}`); s.qs.forEach((q, qi) => { total += q.m; $('#mq').append(examBlock(q, `mock.${id}.${si}.${qi}`, sc => { got += sc; $('#mtot').textContent = `${got} / ${$('#mtot').textContent.split('/ ')[1]}`; S.stats.examMarks += sc; save(); })); }); });
    function fmt(x) { x = Math.max(0, x); return Math.floor(x / 3600) + ':' + pad2(Math.floor(x % 3600 / 60)) + ':' + pad2(Math.floor(x % 60)); }
    $('#mgo').onclick = () => { running = !running; $('#mgo').textContent = running ? 'Pause' : 'Resume'; if (running) iv = setInterval(() => { secsLeft--; $('#mt').textContent = fmt(secsLeft); if (secsLeft <= 0) { clearInterval(iv); running = false; toast('<b>Time</b> Pens down'); sfx.gavel(); } }, 1000); else clearInterval(iv); };
    $('#mrs').onclick = () => { clearInterval(iv); running = false; secsLeft = m.mins * 60; $('#mt').textContent = fmt(secsLeft); $('#mgo').textContent = 'Start'; };
    $('#mdone').onclick = () => { clearInterval(iv); S.stats.mocks++; save(); addXP(50, 'Mock paper completed'); burst(); };
    cleanup = () => clearInterval(iv);
  }

  /* ---------- ARCADE / DAILY / PROGRESS / ABOUT ---------- */
  function arcade() {
    crumbs('<b>Arcade</b>');
    V().innerHTML = `<h1 class="display" style="font-size:clamp(32px,5vw,50px)">Arcade</h1><p class="lede">Quick games to drill case law, principles and terminology. Games use only the areas you study.</p>
      <div class="grid g3 sec">${Object.entries(GAMES).map(([id, g]) => `<a class="game-card" href="#/game/${id}" style="--uc:${g.col}"><div class="art"><canvas data-art="${id}"></canvas></div><div class="eyebrow">${esc(g.skill)}</div><div class="h3">${esc(g.title)}</div><p class="small muted" style="margin:0">${esc(g.blurb)}</p><span class="small mono">Best: ${S.games[id]?.best || 0}</span></a>`).join('')}</div>`;
    $$('[data-art]').forEach(cv => drawGameArt(cv, cv.dataset.art));
  }
  function daily() {
    crumbs('<b>Daily docket</b>');
    let seed = +today().replace(/-/g, ''); const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    const pool = allTopics().flatMap(t => t.quiz.map(q => ({ ...q, topic: t.id })));
    const items = []; const used = new Set(); while (items.length < 5 && used.size < pool.length) { const k = Math.floor(rnd() * pool.length); if (!used.has(k)) { used.add(k); items.push(pool[k]); } }
    V().innerHTML = `<div class="quiz-wrap" style="margin:0 auto"><h1 class="display" style="font-size:clamp(28px,4vw,40px);margin-bottom:6px">Today’s docket</h1><p class="muted">Five questions, the same for everyone today. ${S.daily[today()] != null ? `You scored ${S.daily[today()]}/5 today.` : ''}</p><div id="qz" style="margin-top:18px"></div></div>`;
    runQuiz($('#qz'), items, { title: 'Daily docket', onDone: r => { const first = S.daily[today()] == null; S.daily[today()] = Math.max(S.daily[today()] || 0, r.correct); save(); if (first) addXP(r.correct * 10, 'Daily docket'); } });
  }
  function progress() {
    crumbs('<b>Progress</b>');
    const L = level(), days = Array.from({ length: 28 }, (_, i) => { const d = dstr(new Date(Date.now() - (27 - i) * 864e5)); return [d, S.days[d] || 0]; }), mx = Math.max(10, ...days.map(d => d[1]));
    V().innerHTML = `<h1 class="display" style="font-size:clamp(32px,5vw,50px)">Progress</h1>
      <div class="grid g3 sec" style="margin-top:18px"><div class="card"><div class="eyebrow">Level ${L.l}</div><div class="h2" style="margin:8px 0">${esc(L.name)}</div><div class="bar" style="--uc:var(--gilt)"><i style="width:${clamp(L.frac, 0, 1) * 100}%"></i></div><p class="small muted">${S.xp} XP · next level at ${Math.round(L.next)}</p></div>
      <div class="card"><div class="eyebrow">Last 28 days</div><svg viewBox="0 0 280 90" width="100%" height="110" role="img" aria-label="XP earned per day">${days.map(([d, v], i) => `<rect x="${i * 10 + 1}" y="${80 - v / mx * 70}" width="8" height="${Math.max(1, v / mx * 70)}" rx="1.5" fill="${v ? 'var(--accent)' : 'var(--line-2)'}"><title>${d}: ${v} XP</title></rect>`).join('')}<line x1="0" y1="81" x2="280" y2="81" stroke="var(--line-2)"/><text x="0" y="90" font-size="7" fill="var(--muted)">4 weeks ago</text><text x="280" y="90" font-size="7" fill="var(--muted)" text-anchor="end">today</text></svg></div>
      <div class="card"><div class="eyebrow">Totals</div><div class="readouts" style="margin-top:10px"><div class="ro"><span>Quizzes</span><b>${S.stats.quizzes}</b></div><div class="ro"><span>Cards reviewed</span><b>${S.stats.cardsSeen}</b></div><div class="ro"><span>Exam marks</span><b>${S.stats.examMarks}</b></div><div class="ro"><span>Tools tried</span><b>${S.stats.tools.length}</b></div></div></div></div>
      <div class="sec"><div class="sec-head"><h2 class="h2">Mastery by topic</h2><span class="muted">40% quiz · 20% flashcards · 20% checklist · 20% exam practice</span></div>
      ${UNITS.filter(u => unitTopics(u.id).length).map(u => `<div style="margin-bottom:14px"><div class="eyebrow" style="margin-bottom:6px;color:${u.css}">${esc(u.name)}</div><div class="heat">${unitTopics(u.id).map(t => { const m = mastery(t); return `<a href="#/t/${t.id}" title="${esc(t.title)} · ${pct(m)}" style="background:color-mix(in srgb,${u.css} ${Math.round(8 + m * 80)}%,var(--surface))">${esc(t.id)}</a>`; }).join('')}</div></div>`).join('')}</div>
      <div class="sec"><div class="sec-head"><h2 class="h2">Badges</h2><span class="muted">${S.badges.length} of ${BADGES.length}</span></div><div class="badge-grid">${BADGES.map(([id, n, d, , ic]) => `<div class="badge ${S.badges.includes(id) ? 'got' : ''}"><div class="ic">${ic}</div><b>${esc(n)}</b><span>${esc(d)}</span></div>`).join('')}</div></div>
      <div class="sec"><button class="btn sm" id="reset">${ICON.reset} Reset all progress</button><span id="reset-c"></span></div>`;
    $('#reset').onclick = () => { $('#reset-c').innerHTML = ` <span class="small">This deletes all XP, marks and cards. </span><button class="btn sm" id="reset-y" style="border-color:var(--bad);color:var(--bad)">Yes, reset</button>`; $('#reset-y').onclick = () => { try { localStorage.removeItem(STORE_KEY); } catch (e) { } location.hash = '#/home'; location.reload(); }; };
  }
  function about() {
    crumbs('<b>About &amp; help</b>');
    V().innerHTML = `<div class="notes"><h1 class="display" style="font-size:clamp(32px,5vw,50px);margin-bottom:14px">About Ratio</h1>
      <p class="lede">Ratio covers the Eduqas GCE A level in Law (A150QS, first awarded 2019): Component 1 (the nature of law and the English legal system) and all four areas of substantive law for Components 2 and 3.</p>
      <h3 style="margin-top:24px">How to use it</h3><ul><li><b>Learn</b> — notes for each specification point, with evaluation (AO3) debates, worked answers and common mistakes. Tap any <button class="case" type="button" data-case="donoghue">case name</button> for its facts and principle.</li><li><b>Key cases</b> — the cases for the topic; hide the facts to test yourself.</li><li><b>Explore</b> — interactive decision trees and tools that walk through the legal tests step by step.</li><li><b>Flashcards</b> — spaced repetition in five boxes: cards you know well come back less often.</li><li><b>Quiz</b> and <b>Exam practice</b> — multiple-choice checks and Eduqas-style questions you self-mark against indicative content.</li><li><b>Mock papers</b> — full timed papers for Components 1, 2 and 3.</li></ul>
      <h3 style="margin-top:24px">Keyboard shortcuts</h3><ul><li><kbd>/</kbd> search · <kbd>A</kbd>–<kbd>D</kbd> answer a quiz question · <kbd>Space</kbd> flip a card · <kbd>1</kbd>–<kbd>4</kbd> rate a card</li></ul>
      <h3 style="margin-top:24px">Accuracy</h3><p>The law is stated as understood in September 2026, including post-Brexit changes and recent reforms. Where reforms had been proposed but not in force, the notes say so. Exam formats follow the published specification; check your teacher’s guidance and Eduqas’s sample assessment materials for exact question wording. Ratio is an independent study aid and is not produced or endorsed by Eduqas or WJEC.</p>
      <p>Your progress is stored only in this browser. Clearing site data will reset it.</p></div>`;
  }

  /* ---------- SEARCH ---------- */
  function buildIndex() {
    const ix = [];
    allTopics().forEach(t => { ix.push({ k: 'Topic', t: `${t.id} ${t.title}`, s: t.short, href: '#/t/' + t.id, txt: (t.title + ' ' + t.short + ' ' + t.summary).toLowerCase() }); t.learn.forEach((sec, i) => ix.push({ k: 'Notes', t: sec.h, s: `${t.id} ${t.title}`, href: '#/t/' + t.id, txt: (sec.h + ' ' + plain(sec.html)).toLowerCase() })); });
    Object.values(CASES).filter(c => unitInScope(c.a)).forEach(c => ix.push({ k: 'Case', t: c.n + ' (' + c.y + ')', s: c.p, href: c.t && TOPIC[c.t] ? '#/t/' + c.t + '/cases' : '#/cases', txt: (c.n + ' ' + c.f + ' ' + c.p).toLowerCase() }));
    STATUTES.forEach(st => ix.push({ k: 'Statute', t: st.n, s: st.s.map(x => x[0]).join(', '), href: '#/statutes/acts', txt: (st.n + ' ' + st.s.flat().join(' ')).toLowerCase() }));
    GLOSSARY.forEach(g => ix.push({ k: 'Term', t: g[0], s: g[1], href: '#/statutes/terms', txt: (g[0] + ' ' + g[1]).toLowerCase() }));
    Object.entries(GAMES).forEach(([id, g]) => ix.push({ k: 'Game', t: g.title, s: g.blurb, href: '#/game/' + id, txt: (g.title + ' ' + g.blurb).toLowerCase() }));
    return ix;
  }
  function openPalette() {
    if ($('.palette-back')) return; index ??= buildIndex();
    const back = h('div', { class: 'palette-back', role: 'dialog', 'aria-label': 'Search' }, `<div class="palette"><input id="pq" placeholder="Search topics, cases, statutes, terms…" autocomplete="off" aria-label="Search"><ul id="pl"></ul></div>`);
    document.body.append(back);
    const inp = $('#pq'), ul = $('#pl'); let sel = 0, res = [];
    const draw = () => {
      const q = inp.value.toLowerCase().trim(); const words = q.split(/\s+/).filter(Boolean);
      res = q ? index.map(r => { let sc = 0; for (const w of words) { if (!r.txt.includes(w)) return null; sc += r.t.toLowerCase().includes(w) ? 3 : 1; } return { r, sc: sc + (r.k === 'Topic' ? 2 : r.k === 'Case' ? 1 : 0) }; }).filter(Boolean).sort((a, b) => b.sc - a.sc).slice(0, 14).map(x => x.r) : index.filter(r => r.k === 'Topic').slice(0, 10);
      sel = Math.min(sel, Math.max(0, res.length - 1));
      ul.innerHTML = res.length ? res.map((r, i) => `<li><a href="${r.href}" class="${i === sel ? 'sel' : ''}"><span class="kind">${r.k}</span><span><span class="t">${esc(r.t)}</span><span class="s">${esc(plain(r.s))}</span></span></a></li>`).join('') : '<li class="empty" style="margin:8px">No matches. Try a case name, an Act or a topic.</li>';
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
