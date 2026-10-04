/* ==========================================================
   Stride · application shell, router and views (WJEC Eduqas GCSE (9–1) Physical Education)
   ========================================================== */
const TOPIC = Object.fromEntries(TOPICS.map(t => [t.id, t]));
/* GCSE: untiered, no scope switch. */
const specFlag = () => '';
const specTxt = sp => sp;
const tagHTML = () => '';
const flagOf = () => '';
const vis = t => unitInScope(t.unit);
const V_ = t => ({ quiz: t.quiz.filter(inScope), cards: t.cards.filter(c => inScope(c[2] || '')), exam: t.exam.filter(inScope), worked: t.worked.filter(inScope), gens: t.gens.filter(g => inScope(GEN_FLAGS[g] || '')), spec: t.spec.map((sp, i) => [sp, i]).filter(([sp]) => inScope(specFlag(sp))) });
const allTopics = () => TOPICS.filter(vis);
const coreTopics = () => TOPICS.filter(t => t.unit !== 'S' && vis(t));
const unitTopics = uid => TOPICS.filter(t => t.unit === uid && vis(t));
const fmtAns = x => Number.isInteger(x) ? String(x) : sf(x, 3);
const ucol = uid => unitOf(uid)?.css || 'var(--accent)';
const acol = t => AREAS[t.area]?.css || ucol(t.unit);
const areaTag = (t, sm) => AREAS[t.area] ? `<span class="tag area${sm ? ' sm' : ''}" style="--ac:${acol(t)}">${AREAS[t.area].short}</span>` : '';
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
  ['first', 'First whistle', 'Finish your first quiz', () => S.stats.quizzes >= 1, '1'],
  ['perfect', 'Personal best', 'Score 100% on a quiz', () => S.stats.perfect >= 1, '✓'],
  ['streak3', 'In training', 'Study 3 days in a row', () => S.streak.n >= 3, '3'],
  ['streak7', 'Microcycle complete', 'Study 7 days in a row', () => S.streak.n >= 7, '7'],
  ['calc10', 'Split timer', '10 correct calculations', () => S.stats.calcOK >= 10, 's'],
  ['calc50', 'Sports scientist', '50 correct calculations', () => S.stats.calcOK >= 50, 'Σ'],
  ['cards50', 'Muscle memory', 'Review 50 flashcards', () => S.stats.cardsSeen >= 50, '≡'],
  ['sims5', 'In the lab', 'Try 5 explorations', () => S.stats.sims.length >= 5, '◐'],
  ['sims20', 'Performance analyst', 'Try 20 explorations', () => S.stats.sims.length >= 20, '⌁'],
  ['assess', 'Know the grid', 'Read the Assessment page', () => !!S.assessSeen, 'A'],
  ['mock', 'Match conditions', 'Complete a practice paper or mock', () => S.stats.mocks >= 1, '⏱'],
  ['exam', 'Examiner’s eye', 'Self-mark 25 exam marks', () => S.stats.examMarks >= 25, 'M'],
  ['c1', 'Exam ready', '70% mastery in all five key areas', () => ['1', '2', '3', '4', '5'].every(u => unitMastery(u) >= .7), 'C1'],
  ['nea', 'Coursework ready', '70% mastery of the Component 2 guides', () => unitMastery('P') >= .7, 'C2'],
  ['lvl5', 'Academy player', 'Reach level 5', () => level().l >= 5, '★'],
  ['lvl10', 'On the podium', 'Reach level 10', () => level().l >= 10, '♛']
];
function checkBadges() { BADGES.forEach(([id, name, , test]) => { if (!S.badges.includes(id) && test()) { S.badges.push(id); save(); setTimeout(() => { toast(`<b>Badge</b> ${esc(name)}`, 3200); sfx.win(); }, 400); } }); }

const App = (() => {
  let cleanup = null, lastTopic = null;
  const V = () => $('#view');
  const go = h => { location.hash = h; };

  /* ---------- chrome ---------- */
  function chrome() {
    const nav = [['home', 'Home', '#/home'], ['map', 'All topics', '#/topics'], ['facts', 'Key facts', '#/facts'], ['bank', 'Exam question bank', '#/bank'], ['clock', 'Practice papers', '#/mock'], ['flask', 'Assessment & NEA', '#/assess'], ['game', 'Arcade', '#/arcade'], ['chart', 'Progress', '#/progress']];
    $('#side').innerHTML = `<a class="brand" href="#/home" aria-label="Stride home"><span class="brand-mark pl">${ICON.pulse}</span><span><span class="brand-name">Stride</span><br><span class="brand-sub">Eduqas GCSE PE</span></span></a>
      <nav class="nav" aria-label="Main">${nav.map(([ic, l, h]) => `<a href="${h}" data-nav="${h}">${ICON[ic]}<span>${l}</span></a>`).join('')}
      <div class="nav-label">Component 1 · exam</div>${['1', '2', '3', '4', '5'].map(id => uLink(unitOf(id))).join('')}
      <div class="nav-label">Component 2 · NEA</div>${uLink(unitOf('P'))}
      <div class="nav-label">Skills</div>${uLink(unitOf('S'))}
      <div class="nav-label">More</div><a href="#/about" data-nav="#/about">${ICON.run}<span>About &amp; help</span></a></nav>
      <div class="side-foot">Built around the WJEC Eduqas GCSE (9–1) Physical Education specification (teaching from 2016). Progress is saved in this browser.</div>`;
    $('#tabbar').innerHTML = [['home', 'Home', '#/home'], ['map', 'Topics', '#/topics'], ['bank', 'Exam Qs', '#/bank'], ['clock', 'Papers', '#/mock'], ['chart', 'Progress', '#/progress']].map(([ic, l, h]) => `<a href="${h}" data-nav="${h}">${ICON[ic]}<span>${l}</span></a>`).join('');
    $('#search-btn').innerHTML = `${ICON.search}<span>Search topics, facts, notes…</span><kbd>/</kbd>`;
    $('#menu-btn').innerHTML = ICON.menu;
    $('#menu-btn').onclick = () => toggleSide(true);
    $('#search-btn').onclick = openPalette;
    $('#theme-btn').onclick = toggleTheme;
    $('#tier-chip').onclick = () => go('#/assess');
    $('#sound-btn').onclick = () => { S.settings.sound = !S.settings.sound; save(); refreshChrome(); if (S.settings.sound) sfx.good(); };
    refreshChrome();
  }
  const uLink = u => `<a class="unit-a${unitInScope(u.id) ? '' : ' off'}" href="#/unit/${u.id}" data-nav="#/unit/${u.id}" style="--uc:${u.css}"><span class="unit-line" style="color:${u.css}"></span><span style="min-width:0"><span>${u.code}</span><small>${esc(u.name)}</small></span><span class="meter" data-um="${u.id}"></span></a>`;
  function openSettings() { go('#/about'); }  /* GCSE: no course settings */
  function toggleSide(open) { const s = $('#side'); s.classList.toggle('open', open); let scrim = $('.scrim'); if (open && !scrim) { scrim = h('div', { class: 'scrim', onclick: () => toggleSide(false) }); document.body.append(scrim); } if (!open && scrim) scrim.remove(); }
  function isDark() { const t = document.documentElement.dataset.theme; return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches; }
  function toggleTheme() { const next = isDark() ? 'light' : 'dark'; document.documentElement.dataset.theme = next; S.settings.theme = next; save(); refreshChrome(); refreshSimTheme(); if (location.hash.startsWith('#/home') || !location.hash) route(); }
  function refreshChrome() {
    const L = level();
    $('#xp-chip').innerHTML = `<span style="color:var(--accent-ink)">${ICON.star.replace('<svg', '<svg width="14" height="14" style="stroke:currentColor;fill:none;stroke-width:2"')}</span>Lv ${L.l} · ${S.xp} XP`;
    $('#streak-chip').innerHTML = `<span aria-hidden="true" style="color:var(--u1)">●</span> ${S.streak.n || 0}-day streak`;
    $('#theme-btn').innerHTML = isDark() ? ICON.sun : ICON.moon; $('#theme-btn').title = isDark() ? 'Light theme' : 'Dark theme';
    $('#sound-btn').innerHTML = S.settings.sound ? ICON.sound : ICON.mute; $('#sound-btn').title = S.settings.sound ? 'Sound on' : 'Sound off';
    $('#tier-chip').innerHTML = 'GCSE 9–1'; $('#tier-chip').title = 'How the GCSE is assessed';
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
      else if (a === 'facts' || a === 'equations') facts();
      else if (a === 'assess' || a === 'practicals') assess();
      else if (a === 'arcade') arcade();
      else if (a === 'game' && GAMES[b]) { crumbs(`<a href="#/arcade" style="color:inherit">Arcade</a> / <b>${GAMES[b].title}</b>`); V().innerHTML = '<div id="g"></div>'; cleanup = mountGame($('#g'), b); }
      else if (a === 'mock' && (b === 'full' || b === 'half')) paper(b);
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
    const rec = CORE.filter(t => t.unit !== 'P').map(t => ({ t, m: mastery(t), seen: T(t.id).seen || 0 })).sort((x, y) => (x.m - y.m) || (y.seen - x.seen)).slice(0, 3);
    const fx = KEY_FACTS.flatMap(f => f.rows.filter(r => r[1]).map(r => [f.h, r[0], r[1]])), fod = fx[Math.floor(Date.now() / 864e5) % fx.length];
    const dDone = S.daily[today()];
    const lanes = Object.entries(AREAS).filter(([k]) => LANES.includes(k));
    V().innerHTML = `
    <section class="hero" aria-label="Your progress track">
      <div class="hero-grid">
        <div><div class="eyebrow">WJEC Eduqas GCSE (9–1) Physical Education · Level ${L.l} ${L.name}</div>
          <h1 class="display" style="margin-top:10px">Train the theory.<br>Own the paper.</h1>
          <p>Every topic is a marker on your track, one lane for each of the five key areas. Learn it, explore it, test it — and watch the lanes light up.</p>
          <div class="row" style="margin-top:18px">${last && vis(last) ? `<a class="btn accent" href="#/t/${last.id}">${ICON.play} Continue ${last.id} ${esc(last.title)}</a>` : `<a class="btn accent" href="#/t/1.1">${ICON.play} Start with 1.1 Health, fitness and well-being</a>`}
          <a class="btn" href="#/daily">${dDone != null ? `Daily challenge ✓ ${dDone}/5` : 'Daily challenge'}</a></div></div>
        <div class="hero-stats"><div class="hstat"><b>${S.xp}</b><span>XP</span></div><div class="hstat"><b>${S.streak.n || 0}</b><span>day streak</span></div><div class="hstat"><b>${mastered}<small style="font-size:18px;opacity:.7">/${CORE.length}</small></b><span>topics mastered</span></div></div>
      </div>
      <canvas class="track" id="track" aria-label="Running track: one lane per key area, one marker per topic; brightness shows mastery"></canvas>
      <div class="lane-key">${lanes.map(([k, a]) => `<span><i style="background:${a.css}"></i>${a.short}</span>`).join('')}</div>
      <div id="spec-tip" class="mono" style="min-height:18px;margin-top:6px;font-size:12px;opacity:.8"></div>
    </section>
    <div class="sec"><div class="sec-head"><h2 class="h2">Component 1 · the five key areas</h2><span class="muted">Written exam · 2 hours · 120 marks · 60%</span></div>
      <div class="grid g3">${UNITS.filter(u => u.assess === 'exam').map(unitCard).join('')}</div></div>
    <div class="sec"><div class="sec-head"><h2 class="h2">Component 2 and skills</h2><span class="muted">Non-exam assessment · 80 marks · 40%</span></div>
      <div class="grid g3">${UNITS.filter(u => u.assess !== 'exam').map(unitCard).join('')}</div></div>
    <div class="sec grid g3">
      <div class="card"><div class="eyebrow">Recommended next</div><div class="stack" style="margin-top:12px">${rec.map(({ t, m }) => `<a class="tcard" href="#/t/${t.id}" style="--uc:${acol(t)}"><span class="no" style="font-size:26px;min-width:44px">${t.id}</span><span class="tt">${esc(t.title)}</span><span class="ts">${pct(m)} mastery</span></a>`).join('')}</div></div>
      <div class="card"><div class="eyebrow">Fact of the day · ${esc(fod[0])}</div><div style="font:800 30px/1.1 var(--f-display);text-transform:uppercase;margin:20px 0 8px;text-align:center">${esc(fod[1])}</div><p class="muted" style="text-align:center;margin:0">${esc(fod[2])}</p><div class="row" style="justify-content:center;margin-top:16px"><a class="btn sm" href="#/facts">All key facts</a><a class="btn sm" href="#/game/reaction">Reaction test</a></div></div>
      <div class="card"><div class="eyebrow">Exam countdown</div>${countdown()}</div>
    </div>
    <div class="sec grid g2"><a class="card linkcard" href="#/bank"><div class="eyebrow">Structured · levels-marked</div><div class="h3" style="margin:6px 0">Exam question bank</div><p class="small muted" style="margin:0">Every exam question in one place — short answers, data questions and extended answers marked in bands, like the real paper. Filter by key area and question type.</p></a>
      <a class="card linkcard" href="#/mock"><div class="eyebrow">Component 1 · 120 marks · 2 hours</div><div class="h3" style="margin:6px 0">Full practice papers</div><p class="small muted" style="margin:0">A fresh paper every time with exactly 120 marks across all five key areas (or a 60-mark half paper), a timer and self-marking against mark schemes and band descriptors.</p></a></div>`;
    cleanup = drawTrack($('#track'));
    const inp = $('#exam-date'); if (inp) inp.onchange = () => { S.settings.examDate = inp.value; save(); route(); };
  }
  const unitCard = u => { const ts = unitTopics(u.id), m = unitMastery(u.id), tag = u.id === 'S' ? '' : u.assess === 'exam' ? '<span class="tag exm sm">Exam</span>' : '<span class="tag nea sm">NEA</span>';
    return `<a class="unit-card" href="#/unit/${u.id}" style="--uc:${u.css}"><span class="line"></span><div class="row" style="justify-content:space-between"><span class="eyebrow">${u.code}</span><span>${tag}</span></div><div class="h3">${esc(u.name)}</div><div class="small muted">${ts.length} topics · ${ts.reduce((a, t) => a + V_(t).quiz.length, 0)} questions</div><div class="bar"><i style="width:${m * 100}%"></i></div><div class="small mono">${pct(m)} mastered</div></a>`; };
  function countdown() {
    const d = S.settings.examDate, days = d ? Math.ceil((new Date(d + 'T09:00') - Date.now()) / 864e5) : null;
    return `<div style="font:800 72px/1 var(--f-display);margin:16px 0 4px;color:var(--accent-ink)">${days != null ? Math.max(0, days) : '—'}</div><div class="muted small">${days != null ? 'days until your next exam' : 'Set the date of your next exam'}</div><label class="small muted" for="exam-date" style="display:block;margin-top:14px">Exam date</label><input id="exam-date" type="date" value="${d || ''}" style="margin-top:4px;padding:8px 10px;border-radius:9px;border:1px solid var(--line-2);background:var(--surface);color:var(--ink)">`;
  }
  /* The home “track”: a 400 m stadium oval with one lane per key area; each topic is a marker that glows brighter as mastery grows. */
  function drawTrack(cv) {
    const c = cv.getContext('2d'); let W, H, alive = true, hover = -1, t0 = performance.now(), raf;
    const laneKeys = LANES;
    const marks = []; laneKeys.forEach((k, li) => { const ts = allTopics().filter(t => t.area === k); ts.forEach((t, j) => marks.push({ t, li, f: (j + 0.5) / ts.length, m: mastery(t), col: cssVar(AREAS[k].css.slice(4, -1)) || '#6F9BFF' })); });
    const size = () => { const rc = cv.getBoundingClientRect(), d = Math.min(2, devicePixelRatio || 1); W = rc.width; H = rc.height; cv.width = W * d; cv.height = H * d; c.setTransform(d, 0, 0, d, 0, 0); };
    size(); const ro = new ResizeObserver(size); ro.observe(cv);
    const geo = () => { const lw = Math.max(11, Math.min(22, H * 0.055)), R0 = Math.min(H * 0.5 - 12 - 5 * lw, W * 0.18), Lh = Math.max(40, W - 2 * (R0 + 5 * lw) - 40), cx = W / 2, cy = H / 2; return { lw, R0, Lh, cx, cy }; };
    /* point at fraction f along lane li (lane centre-line), starting at the top-left of the back straight, running clockwise */
    const pt = (g, li, f) => { const R = g.R0 + (li + 0.5) * g.lw, P = 2 * g.Lh + 2 * Math.PI * R; let s = ((f % 1) + 1) % 1 * P;
      if (s < g.Lh) return [g.cx - g.Lh / 2 + s, g.cy - R]; s -= g.Lh;
      if (s < Math.PI * R) { const a = -Math.PI / 2 + s / R; return [g.cx + g.Lh / 2 + R * Math.cos(a), g.cy + R * Math.sin(a)]; } s -= Math.PI * R;
      if (s < g.Lh) return [g.cx + g.Lh / 2 - s, g.cy + R]; s -= g.Lh;
      const a = Math.PI / 2 + s / R; return [g.cx - g.Lh / 2 + R * Math.cos(a), g.cy + R * Math.sin(a)]; };
    const stadium = (g, R) => { c.beginPath(); c.moveTo(g.cx - g.Lh / 2, g.cy - R); c.lineTo(g.cx + g.Lh / 2, g.cy - R); c.arc(g.cx + g.Lh / 2, g.cy, R, -Math.PI / 2, Math.PI / 2); c.lineTo(g.cx - g.Lh / 2, g.cy + R); c.arc(g.cx - g.Lh / 2, g.cy, R, Math.PI / 2, Math.PI * 1.5); c.closePath(); };
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const frame = now => { if (!alive) return; const g = geo(), grow = reduce ? 1 : Math.min(1, (now - t0) / 1100); c.clearRect(0, 0, W, H);
      // track surface and infield
      stadium(g, g.R0 + 5 * g.lw + 4); c.fillStyle = '#16306B'; c.fill();
      stadium(g, g.R0); c.fillStyle = '#0C1A33'; c.fill();
      c.strokeStyle = 'rgba(255,255,255,.55)'; c.lineWidth = 1.2; for (let i = 0; i <= 5; i++) { stadium(g, g.R0 + i * g.lw); c.stroke(); }
      // finish line
      c.strokeStyle = 'rgba(255,255,255,.9)'; c.lineWidth = 3; c.beginPath(); c.moveTo(g.cx - g.Lh / 2, g.cy - g.R0); c.lineTo(g.cx - g.Lh / 2, g.cy - g.R0 - 5 * g.lw); c.stroke();
      // ECG pulse across the infield
      const ph = reduce ? 0 : (now / 1000) % 2, x0 = g.cx - g.Lh / 2 - g.R0 * 0.55, x1 = g.cx + g.Lh / 2 + g.R0 * 0.55, amp = Math.min(g.R0 * 0.5, 34);
      c.strokeStyle = '#FF5468'; c.lineWidth = 2; c.shadowColor = '#FF5468'; c.shadowBlur = 8; c.beginPath();
      for (let x = x0; x <= x1; x += 2) { const u = ((x - x0) / 160 - ph * 0.8) % 1, v = u < 0 ? u + 1 : u; const y = v > .42 && v < .46 ? -amp * (v - .42) / .04 : v >= .46 && v < .5 ? -amp + amp * 1.5 * (v - .46) / .04 : v >= .5 && v < .54 ? amp * .5 - amp * .5 * (v - .5) / .04 : 0; x === x0 ? c.moveTo(x, g.cy + y) : c.lineTo(x, g.cy + y); }
      c.stroke(); c.shadowBlur = 0;
      c.fillStyle = 'rgba(255,255,255,.9)'; c.font = '800 22px "Barlow Condensed", sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('STRIDE', g.cx, g.cy + Math.min(g.R0 * 0.62, 50));
      // topic markers
      marks.forEach((mk, i) => { const [x, y] = pt(g, mk.li, mk.f), r = Math.max(4, g.lw * 0.32) + (i === hover ? 2.5 : 0), lit = 0.18 + 0.82 * mk.m * grow;
        if (mk.m > .05) { c.shadowColor = mk.col; c.shadowBlur = 12 * mk.m; }
        c.beginPath(); c.arc(x, y, r, 0, 7); c.fillStyle = hexA(mk.col, lit); c.fill(); c.shadowBlur = 0;
        c.strokeStyle = i === hover ? '#fff' : hexA(mk.col, .95); c.lineWidth = i === hover ? 2.2 : 1.2; c.stroke(); });
      raf = requestAnimationFrame(frame); };
    raf = requestAnimationFrame(frame);
    const tip = $('#spec-tip'), hit = (x, y) => { const g = geo(); let best = -1, bd = 14; marks.forEach((mk, i) => { const [px, py] = pt(g, mk.li, mk.f), d = Math.hypot(px - x, py - y); if (d < bd) { bd = d; best = i; } }); return best; };
    cv.addEventListener('pointermove', e => { const rc = cv.getBoundingClientRect(); hover = hit(e.clientX - rc.left, e.clientY - rc.top); cv.style.cursor = hover >= 0 ? 'pointer' : 'default'; tip.textContent = hover >= 0 ? `${marks[hover].t.id} ${marks[hover].t.title} · ${AREAS[marks[hover].t.area].short} · ${pct(marks[hover].m)} mastery` : 'Hover a marker to see its topic; click to open it.'; });
    cv.addEventListener('pointerleave', () => { hover = -1; });
    cv.addEventListener('click', e => { const rc = cv.getBoundingClientRect(), i = hit(e.clientX - rc.left, e.clientY - rc.top); if (i >= 0) go('#/t/' + marks[i].t.id); });
    tip.textContent = 'Each lane is a key area; each marker is a topic. Click one to open it.';
    return () => { alive = false; cancelAnimationFrame(raf); ro.disconnect(); };
  }

  /* ---------- TOPICS / UNIT ---------- */
  const tcard = t => { const m = mastery(t); return `<a class="tcard" href="#/t/${t.id}" style="--uc:${ucol(t.unit)}"><span class="no">${t.id}</span><span class="tt">${esc(t.title)} ${tagHTML(flagOf(t), 1)}</span><span class="ts">${esc(t.short)}</span><span class="bar"><i style="width:${m * 100}%"></i></span></a>`; };
  const hiddenNote = () => '';
  function topics() {
    crumbs('<b>All topics</b>');
    V().innerHTML = `<div class="sec-head" style="margin-bottom:6px"><h1 class="display" style="font-size:clamp(34px,5vw,54px)">All topics</h1></div><p class="lede">${allTopics().length} topics covering every content statement in the Eduqas GCSE Physical Education specification — the five key areas of Component 1, guides to the Component 2 non-exam assessment, and the exam and data skills.</p>
      <div class="row" style="margin:18px 0 6px"><input id="tfilter" type="search" placeholder="Filter topics…" aria-label="Filter topics" style="flex:1;min-width:200px;max-width:420px;padding:10px 12px;border-radius:10px;border:1px solid var(--line-2);background:var(--surface)"></div>
      <div id="tlist">${UNITS.filter(u => unitTopics(u.id).length).map(u => `<div class="sec" data-u="${u.id}"><div class="sec-head"><h2 class="h3" style="color:${u.css}">${u.code} ${esc(u.name)}</h2><span class="muted">${u.id === 'S' ? 'Both components' : u.assess === 'exam' ? 'Component 1 · written exam' : 'Component 2 · non-exam assessment'}</span></div><div class="topic-list">${unitTopics(u.id).map(tcard).join('')}</div></div>`).join('')}</div>${hiddenNote()}`;
    $('#tfilter').oninput = e => { const q = e.target.value.toLowerCase(); $$('.tcard', V()).forEach(a => a.hidden = q && !a.textContent.toLowerCase().includes(q)); $$('[data-u]', V()).forEach(s => s.hidden = !$$('.tcard', s).some(a => !a.hidden)); };
    wireSettingsLinks();
  }
  const wireSettingsLinks = () => $$('[data-settings]').forEach(a => a.onclick = openSettings);
  function unit(uid) {
    const u = unitOf(uid), ts = unitTopics(uid), m = unitMastery(uid);
    crumbs(`<a href="#/topics" style="color:inherit">Topics</a> / <b>${u.code} ${esc(u.name)}</b>`);
    const nq = ts.reduce((a, t) => a + V_(t).quiz.length, 0);
    V().innerHTML = `<div style="--uc:${u.css}"><div class="eyebrow">${u.id === 'S' ? 'Skills for both components' : u.assess === 'exam' ? 'Component 1 · written exam' : 'Component 2 · non-exam assessment'} · ${u.code}</div><h1 class="display" style="margin:8px 0 10px">${esc(u.name)}</h1><p class="lede">${esc(u.exam)}</p>
      ${ts.length ? `<div class="row" style="margin:16px 0"><span class="pill acc">${pct(m)} mastery</span><span class="pill">${ts.length} topics</span><span class="pill">${nq} quiz questions</span><span class="pill">${ts.reduce((a, t) => a + V_(t).cards.length, 0)} flashcards</span></div>
      <div class="row"><button class="btn primary" id="uquiz">Mixed key-area quiz</button><a class="btn" href="#/mock">Practice papers</a><a class="btn" href="#/bank">Exam question bank</a></div>
      <div class="sec topic-list">${ts.map(tcard).join('')}</div>` : `<div class="empty">No topics here yet.</div>`}${ts.length ? hiddenNote(uid) : ''}</div>`;
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
      <header class="topic-head"><div class="topic-no">${t.id}</div><div class="eyebrow">${u.code} ${esc(u.name)} · <span class="lc">${esc(t.ref)}</span></div><h1 class="display">${esc(t.title)}</h1></header>
      
      <p class="lede">${esc(t.summary)}</p>
      <div class="row" style="margin-top:12px">${areaTag(t)}<span class="pill acc">${pct(m)} mastery</span><span class="pill">Quiz best ${s.quiz || 0}%</span><span class="pill">${Object.entries(s.cards).filter(([i, b]) => b >= 3 && inScope(t.cards[i]?.[2] || '')).length}/${v.cards.length} cards known</span>${v.gens.length ? `<span class="pill">${s.calc || 0} calculations correct</span>` : ''}</div>
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
      ${t.eqs.length ? `<section id="s-eq"><h3><span class="k">KEY</span>Key formulae</h3><div class="card flat" style="padding:4px 18px">${t.eqs.map(([e, d]) => `<div class="eq-row">${M(e)}<span class="d">${esc(d)}</span></div>`).join('')}</div></section>` : ''}
      <section id="s-wk"><h3><span class="k">DO</span>Worked examples</h3>${v.worked.map((w, i) => `<div class="worked" data-w="${i}"><div class="wq"><span class="eyebrow">Example ${i + 1} ${tagHTML(flagOf(w), 1)}</span><div style="margin-top:6px">${rich(w.q)}</div></div><ol>${w.s.map((st, j) => `<li class="${j ? 'hid' : ''}">${rich(st)}</li>`).join('')}</ol><div class="wf"><button class="btn sm primary" data-step>Next step</button><button class="btn sm ghost" data-all>Show all</button><span class="ans" hidden>Answer: ${rich(w.a)}</span></div></div>`).join('')}</section>
      <section id="s-pf"><h3><span class="k">AVOID</span>Common mistakes</h3><div class="box warn"><b class="lbl">Examiners often see</b><ul>${t.pitfalls.map(p => `<li>${rich(p)}</li>`).join('')}</ul></div></section>
    </article>
    <aside class="aside"><div class="card flat" style="padding:14px 10px"><div class="eyebrow" style="padding:0 10px 8px">On this page</div><div class="toc">${secs.map((sec, i) => `<a href="#s${i}" data-anchor="s${i}">${sec.h}</a>`).join('')}${t.eqs.length ? '<a href="#s-eq" data-anchor="s-eq">Key formulae</a>' : ''}<a href="#s-wk" data-anchor="s-wk">Worked examples</a><a href="#s-pf" data-anchor="s-pf">Common mistakes</a></div></div>
      <div class="card flat" style="padding:16px"><div class="eyebrow">Specification checklist · ${esc(t.ref)}</div><p class="small muted" style="margin:6px 0 10px">Rate your confidence: red, amber, green.</p><div class="spec-list">${v.spec.map(([sp, i]) => `<div class="spec-item"><div class="rag" data-i="${i}">${[1, 2, 3].map(val => `<button data-v="${val}" class="${s.spec[i] === val ? 'on' : ''}" aria-label="${['Not confident', 'Getting there', 'Confident'][val - 1]}: ${esc(specTxt(sp))}"></button>`).join('')}</div><span>${tagHTML(specFlag(sp), 1)}${rich(esc(specTxt(sp)))}</span></div>`).join('')}</div></div>
      <a class="btn primary" href="#/t/${t.id}/quiz">Test yourself ${ICON.arrow}</a></aside></div>`;
    wireSettingsLinks();
    $$('[data-anchor]', host).forEach(a => a.onclick = e => { e.preventDefault(); document.getElementById(a.dataset.anchor).scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    $$('.worked', host).forEach(w => { const lis = $$('li', w), ans = $('.ans', w); let k = 1; const show = n => { lis.forEach((li, j) => li.classList.toggle('hid', j >= n)); if (n >= lis.length) { ans.hidden = false; $('[data-step]', w).disabled = true; } }; $('[data-step]', w).onclick = () => show(++k); $('[data-all]', w).onclick = () => { k = lis.length; show(k); }; });
    $$('.rag', host).forEach(r => r.onclick = e => { const b = e.target.closest('button'); if (!b) return; const i = +r.dataset.i, val = +b.dataset.v; s.spec[i] = s.spec[i] === val ? 0 : val; save(); $$('button', r).forEach(x => x.classList.toggle('on', +x.dataset.v === s.spec[i])); refreshChrome(); checkBadges(); });
  }

  function exploreTab(host, t) {
    let i = 0; const draw = () => {
      if (cleanup) { try { cleanup(); } catch (e) { } }
      host.innerHTML = `${t.sims.length > 1 ? `<div class="sim-pick">${t.sims.map((k, j) => `<button class="btn sm ${j === i ? 'primary' : ''}" data-j="${j}">${SIMS[k] ? SIMS[k].title : k}</button>`).join('')}</div>` : ''}<div id="simhost"></div><p class="kbd-hint">Explorations use simplified models and typical values to build intuition — real athletes and data vary.</p>`;
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
          : `<div class="calc-in"><input id="numin" inputmode="decimal" autocomplete="off" placeholder="e.g. 2.5e-3" aria-label="Your answer"><span class="unit">${q.unit || ''}</span><button class="btn primary" id="numgo">Submit</button></div><p class="kbd-hint">Give your answer to 2–3 significant figures (answers within 2% are accepted).</p>`}
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

  /* ---------- Structured exam questions (topic tab, bank and papers) ----------
     A question is {q, m, ms} or {q (stem), parts:[{q, m, ms, lv?}]}. Parts with lv:true are extended answers marked in
     bands: ms is then indicative content, and the learner awards a mark using WJEC-style band descriptors. */
  const QTAGS = { short: 'Short answer', struct: 'Structured', ext: 'Extended (levels)', data: 'Data response', graph: 'Graphs', calc: 'Calculation', synoptic: 'Synoptic', nea: 'NEA practice' };
  const qParts = q => q.parts || [{ q: '', m: q.m, ms: q.ms, lv: q.lv }];
  const qMarks = q => qParts(q).reduce((a, p) => a + p.m, 0);
  const qTag = q => q.tag || (qParts(q).some(p => p.lv) ? 'ext' : q.parts ? 'struct' : 'short');
  const BANDS = { 4: [[3, 4], [2, 2], [1, 1]], 5: [[4, 5], [2, 3], [1, 1]], 6: [[5, 6], [3, 4], [1, 2]], 7: [[6, 7], [3, 5], [1, 2]], 8: [[7, 8], [4, 6], [1, 3]], 9: [[7, 9], [4, 6], [1, 3]], 10: [[8, 10], [4, 7], [1, 3]] };
  const BAND_TXT = ['Detailed, accurate knowledge applied consistently to the context; thorough analysis and evaluation that weighs both sides; a supported conclusion; accurate specialist terms; well structured.',
    'Sound knowledge with some application; some analysis or evaluation, but one-sided or undeveloped; a conclusion that is not fully supported; some specialist terms.',
    'Limited knowledge, mostly descriptive; little application, analysis or evaluation; few specialist terms; limited structure.'];
  function partHTML(p, j, multi) {
    p = { ...p, q: String(p.q || '').replace(/\s*\[\d+\]\s*$/, '') };
    const lab = multi ? `<span class="pl">(${'abcdefgh'[j]})</span>` : '';
    const box = `<textarea rows="${p.m >= 6 ? 7 : p.m >= 3 ? 3 : 2}" aria-label="Your answer"></textarea>`;
    if (p.lv) { const b = BANDS[p.m] || BANDS[8];
      return `<div class="xq-part" data-m="${p.m}" data-lv="1"><div>${lab}${rich(p.q)} <b class="mono">[${p.m}]</b> <span class="tag qt sm">levels-marked</span></div>${box}
        <div class="ms" hidden><div class="eyebrow" style="margin-bottom:4px">Indicative content — tick what you covered (a guide, not a checklist)</div>${p.ms.map(x => `<label><input type="checkbox" data-ic> <span>${rich(x)}</span></label>`).join('')}
        <div class="eyebrow" style="margin:12px 0 2px">Choose the band that best fits, then the mark</div><div class="bands">${b.map((r, k) => `<button type="button" data-band="${k}" data-lo="${r[0]}" data-hi="${r[1]}"><b>Band ${3 - k} · ${r[0]}–${r[1]}</b><span>${BAND_TXT[k]}</span></button>`).join('')}</div>
        <div class="mk-pick">${Array.from({ length: p.m + 1 }, (_, k) => `<button type="button" data-mk="${k}">${k}</button>`).join('')}</div></div></div>`; }
    return `<div class="xq-part" data-m="${p.m}"><div>${lab}${rich(p.q)} <b class="mono">[${p.m}]</b></div>${box}
      <div class="ms" hidden><div class="eyebrow" style="margin-bottom:4px">Mark scheme — tick the points you made (1 mark each, up to ${p.m})</div>${p.ms.map(x => `<label><input type="checkbox"> <span>${rich(x)}</span></label>`).join('')}</div></div>`;
  }
  function xqHTML(q, n, o = {}) {
    const ps = qParts(q), multi = !!q.parts, tp = q.topic && TOPIC[q.topic], tg = qTag(q);
    if (q.mcq) return `<div class="xq" data-xq="${n}" style="--uc:${tp ? acol(tp) : 'var(--accent)'}"><div class="xq-head"><span class="n">${o.num || 'Q' + (n + 1)}</span>${tp && o.showTopic ? `<a class="pill" href="#/t/${tp.id}">${tp.id} ${esc(tp.title)}</a>` : ''}<span class="tag qt sm">Multiple choice</span><span class="spacer" style="flex:1"></span><span class="pill mk">1 mark</span></div>
      <div class="xq-part" data-m="1" data-mcq="1"><div>${rich(q.q)}</div><ol class="mcq-list" type="A">${q.order.map(i => `<li class="${i === 0 ? 'ans-k' : ''}"><label style="display:flex;gap:8px"><input type="radio" name="mcq${n}" value="${i}"> <span>${rich(q.o[i])}</span></label></li>`).join('')}</ol>
      <div class="ms" hidden><div class="small"><b>Answer:</b> ${rich(q.o[0])}${q.x ? ` — <span class="muted">${rich(q.x)}</span>` : ''}</div></div></div></div>`;
    return `<div class="xq" data-xq="${n}" style="--uc:${tp ? acol(tp) : 'var(--accent)'}"><div class="xq-head"><span class="n">${o.num || 'Q' + (n + 1)}</span>${tp && o.showTopic ? `<a class="pill" href="#/t/${tp.id}">${tp.id} ${esc(tp.title)}</a>` : ''}<span class="tag qt sm">${QTAGS[tg] || tg}</span>${tp && o.showTopic ? areaTag(tp, 1) : ''}<span class="spacer" style="flex:1"></span><span class="pill mk">${qMarks(q)} mark${qMarks(q) > 1 ? 's' : ''}</span></div>
      ${multi ? `<div class="xq-stem">${rich(q.q)}</div>` : ''}${ps.map((p, j) => partHTML(multi ? p : { ...p, q: q.q.replace(/\s*\[\d+\]\s*$/, '') }, j, multi)).join('')}
      ${o.noFoot ? '' : `<div class="xq-foot"><button class="btn sm" data-reveal>Reveal mark scheme</button><button class="btn sm primary" data-save hidden>Save my marks</button><span class="small muted" data-score></span></div>`}</div>`;
  }
  /* score of one part element: checkboxes (capped), a chosen levels mark, or a multiple-choice radio */
  const partScore = p => p.dataset.mcq ? (($('input:checked', p) || {}).value === '0' ? 1 : 0) : p.dataset.lv ? +(p.dataset.mark || 0) : Math.min(+p.dataset.m, $$('input:checked', p).length);
  function wireParts(host) {
    $$('.xq-part[data-lv]', host).forEach(p => {
      const setMk = k => { p.dataset.mark = k; $$('[data-mk]', p).forEach(b => b.classList.toggle('on', +b.dataset.mk === k)); $$('[data-band]', p).forEach(b => b.classList.toggle('on', k >= +b.dataset.lo && k <= +b.dataset.hi)); };
      $$('[data-band]', p).forEach(b => b.onclick = () => setMk(Math.round((+b.dataset.lo + +b.dataset.hi) / 2)));
      $$('[data-mk]', p).forEach(b => b.onclick = () => setMk(+b.dataset.mk));
    });
  }
  function wireXQ(host, list, onSave) {
    wireParts(host);
    $$('.xq', host).forEach(el => { const q = list[+el.dataset.xq], rv = $('[data-reveal]', el), sv = $('[data-save]', el); if (!rv) return;
      rv.onclick = () => { $$('.ms', el).forEach(m => m.hidden = false); rv.hidden = true; sv.hidden = false; };
      sv.onclick = () => { const got = $$('.xq-part', el).reduce((a, p) => a + partScore(p), 0), tot = qMarks(q); $('[data-score]', el).textContent = `${got}/${tot} marks saved`; sv.disabled = true; S.stats.examMarks += got; save(); addXP(got * 5, 'Exam marks'); onSave && onSave(q, got, tot); checkBadges(); }; });
  }
  function examTab(host, t) {
    const ex = V_(t).exam.map(q => ({ ...q, topic: t.id })), extra = BANK.filter(b => b.topic === t.id), all = [...ex, ...extra];
    host.innerHTML = `<p class="muted" style="max-width:72ch">Answer on paper or in the boxes, then reveal the mark scheme. Short answers: tick each creditworthy point (one mark each, up to the marks shown). <b>Levels-marked</b> extended answers: use the indicative content as a guide, then choose the band and mark that best fit your whole answer — as an Eduqas examiner does.${extra.length ? ` The last ${extra.length > 1 ? extra.length + ' questions are' : 'question is'} from the synoptic <a href="#/bank">question bank</a>.` : ''}</p>
      <div class="row" style="margin:8px 0 4px"><span class="pill">${all.length} questions</span><span class="pill">${all.reduce((a, q) => a + qMarks(q), 0)} marks</span></div>${all.map((q, i) => xqHTML(q, i)).join('')}`;
    wireXQ(host, all, (q, got) => { T(t.id).exam = (T(t.id).exam || 0) + got; save(); });
  }

  /* ---------- EXAM QUESTION BANK ---------- */
  function bankAll() { const out = []; allTopics().forEach(t => V_(t).exam.forEach(q => out.push({ ...q, topic: t.id }))); BANK.filter(q => vis(TOPIC[q.topic])).forEach(q => out.push({ ...q })); return out; }
  function bank() {
    crumbs('<b>Exam question bank</b>');
    const all = bankAll(); S.bankf ??= { u: '', a: '', tag: '' };
    V().innerHTML = `<h1 class="display" style="font-size:clamp(36px,5vw,58px)">Exam question bank</h1><p class="lede">${all.length} questions worth ${all.reduce((a, q) => a + qMarks(q), 0)} marks, written in the style of Eduqas GCSE PE Component 1 — stimulus-based short answers, data response and levels-marked extended answers, plus synoptic questions that link the key areas. Self-mark with the mark schemes and band descriptors.</p>
      <div class="bank-filters"><select id="bf-u" aria-label="Unit"><option value="">All sections</option>${UNITS.filter(u => unitTopics(u.id).length).map(u => `<option value="${u.id}" ${S.bankf.u === u.id ? 'selected' : ''}>${u.code} ${esc(u.name)}</option>`).join('')}</select>
        <select id="bf-a" aria-label="Key area"><option value="">All key areas</option>${Object.entries(AREAS).map(([k, a]) => `<option value="${k}" ${S.bankf.a === k ? 'selected' : ''}>${a.short}</option>`).join('')}</select>
        <select id="bf-t" aria-label="Question type"><option value="">All question types</option>${Object.entries(QTAGS).map(([k, v]) => `<option value="${k}" ${S.bankf.tag === k ? 'selected' : ''}>${v}</option>`).join('')}</select>
        <button class="btn sm" id="bf-shuf">${ICON.shuffle} Shuffle</button></div><div id="bank-count" class="small muted"></div><div id="bank-list"></div>`;
    let order = all;
    const draw = () => { const f = S.bankf, list = order.filter(q => (!f.u || TOPIC[q.topic]?.unit === f.u) && (!f.a || TOPIC[q.topic]?.area === f.a) && (!f.tag || qTag(q) === f.tag));
      $('#bank-count').textContent = `${list.length} questions · ${list.reduce((a, q) => a + qMarks(q), 0)} marks`;
      $('#bank-list').innerHTML = list.map((q, i) => xqHTML(q, i, { showTopic: true })).join('') || '<div class="empty">No questions match these filters.</div>';
      wireXQ($('#bank-list'), list, (q, got) => { if (q.topic) { T(q.topic).exam = (T(q.topic).exam || 0) + got; save(); } }); };
    $('#bf-u').onchange = e => { S.bankf.u = e.target.value; save(); draw(); }; $('#bf-a').onchange = e => { S.bankf.a = e.target.value; save(); draw(); }; $('#bf-t').onchange = e => { S.bankf.tag = e.target.value; save(); draw(); };
    $('#bf-shuf').onclick = () => { order = shuffle(all); draw(); };
    draw();
  }

  /* ---------- KEY FACTS ---------- */
  function facts() {
    crumbs('<b>Key facts</b>');
    V().innerHTML = `<h1 class="display" style="font-size:clamp(34px,5vw,54px)">Key facts</h1><p class="lede">The facts examiners expect you to know — nutrients, fitness components and tests, training zones, bones, joints and muscles, heart and lung values, levers, planes and axes, psychology models and socio-cultural terms — plus every formula in the course.</p>
      <div class="row" style="margin:14px 0"><input id="ffilter" type="search" placeholder="Filter facts…" aria-label="Filter facts" style="flex:1;min-width:200px;max-width:420px;padding:10px 12px;border-radius:10px;border:1px solid var(--line-2);background:var(--surface)"></div>
      <div class="fact-grid">${KEY_FACTS.filter(f => unitInScope(f.unit)).map(f => `<div class="card fact-card" style="--uc:${ucol(f.unit)};border-top:4px solid ${ucol(f.unit)}"><h3 class="h3">${esc(f.h)}</h3><table>${f.rows.map(r => `<tr><td><b>${esc(r[0])}</b></td><td>${esc(r[1])}</td></tr>`).join('')}</table><div class="small muted" style="margin-top:8px">${unitOf(f.unit).code}</div></div>`).join('')}
      <div class="card fact-card" style="border-top:4px solid var(--u9)"><h3 class="h3">Formulae</h3><table>${TOPICS.flatMap(t => t.eqs.map(e => [e, t])).filter(([, t]) => vis(t) && t.unit !== 'S').map(([[e, d], t]) => `<tr><td>${M(e)}</td><td class="small">${esc(d)} · <a href="#/t/${t.id}">${t.id}</a></td></tr>`).join('')}</table></div></div>`;
    $('#ffilter').oninput = e => { const q = e.target.value.toLowerCase(); $$('.fact-card tr', V()).forEach(r => r.hidden = q && !r.textContent.toLowerCase().includes(q) && !r.closest('.fact-card').querySelector('h3').textContent.toLowerCase().includes(q)); $$('.fact-card', V()).forEach(c => c.hidden = !$$('tr', c).some(r => !r.hidden)); };
  }

  /* ---------- ASSESSMENT ---------- */
  function assess() {
    crumbs('<b>Assessment &amp; NEA</b>'); S.assessSeen = true; save();
    const comps = [['Component 1 · Introduction to physical education', 'written exam', '2 hours', 120, '60%'], ['Component 2 · The active participant in physical education', 'non-exam assessment', 'during the course', 80, '40%']];
    const C2 = [['Activity 1', 20], ['Activity 2', 20], ['Activity 3', 20], ['Analysis (self-analysis and planning)', 10], ['Evaluation (programme, results, recommendations)', 10]];
    const sv = S.c2calc || [];
    V().innerHTML = `<h1 class="display" style="font-size:clamp(36px,5vw,58px)">Assessment &amp; NEA</h1><p class="lede">How WJEC Eduqas GCSE (9–1) Physical Education is assessed: one written exam (60%) and one non-exam assessment (40%), four assessment objectives, and grades 9–1.</p>
      <div class="sec"><div class="tbl"><table><tr><th>Component</th><th>Assessment</th><th>Time</th><th>Marks</th><th>Weighting</th></tr>${comps.map(u => `<tr>${u.map(x => `<td>${x}</td>`).join('')}</tr>`).join('')}</table></div>
      <p class="small muted">Component 1 is a mix of short and extended answer questions, all based on stimuli or sources — a photo, a data table, a graph or a short scenario — and can assess any of the five key areas. Component 2 is marked by your teacher and moderated: practical performance in three activities from the approved list (at least one team and at least one individual activity), each out of 20, plus a written or verbal performance analysis and evaluation of a personal fitness programme, out of 20.</p></div>
      <div class="sec"><div class="sec-head"><h2 class="h2">Assessment objectives</h2></div><div class="tbl"><table><tr><th></th>${AO_TABLE.names.map(a => `<th title="${esc(a[1])}">${a[0]}</th>`).join('')}<th>Marks · weighting</th></tr>${AO_TABLE.rows.map(r => `<tr><td>${r[0]}</td>${r.slice(1, 5).map(x => `<td>${x || '—'}</td>`).join('')}<td>${r[5]}</td></tr>`).join('')}<tr><td><b>GCSE</b></td>${AO_TABLE.qual.map(x => `<td><b>${x}</b></td>`).join('')}<td>100%</td></tr></table></div>
      <ul class="small">${AO_TABLE.names.map(a => `<li><b>${a[0]}</b> ${esc(a[1])}</li>`).join('')}</ul></div>
      <div class="sec"><div class="sec-head"><h2 class="h2">Command words</h2><a class="btn sm" href="#/t/S.1">Exam technique</a></div><div class="fact-grid">${COMMAND_WORDS.map(c => `<div class="card flat" style="padding:12px 14px"><b>${c[0]}</b> <span class="tag sm">${c[2]}</span><div class="small" style="margin-top:4px">${esc(c[1])}</div></div>`).join('')}</div><p class="small muted">General meanings used in GCSE assessments — check Eduqas’s own guidance and past papers.</p></div>
      <div class="sec"><div class="sec-head"><h2 class="h2">Component 2 guides</h2></div>${NEA_GUIDES.map(g => `<details class="card" style="margin-bottom:12px;--uc:${ucol(g.unit)};border-left:4px solid ${ucol(g.unit)}"><summary class="h3" style="cursor:pointer">${esc(g.title)}</summary><p class="small mono muted">${esc(g.time)}</p><p>${esc(g.intro)}</p><ol>${g.steps.map(s => `<li><b>${esc(s[0])}.</b> ${esc(s[1])}</li>`).join('')}</ol><div class="box tip"><b class="lbl">Tips</b><ul>${g.tips.map(t => `<li>${esc(t)}</li>`).join('')}</ul></div><a class="btn sm" href="#/unit/${g.unit}">Open the ${unitOf(g.unit).code} topics</a></details>`).join('')}
        <p class="small muted">NEA rules: the analysis and evaluation must be your own work, completed under supervision; your teacher can give only general feedback. Practical performances are filmed or seen live and may be moderated.</p></div>
      <div class="sec card"><div class="eyebrow">Marks calculator</div><p class="small muted">Enter your Component 2 marks (or predictions) and a Component 1 mark to see your weighted total. Grade boundaries change every year, so Stride shows a percentage rather than a grade.</p>
        <div class="ums-grid">${C2.map((u, i) => `<label>${u[0]} (max ${u[1]})<input type="number" min="0" max="${u[1]}" data-c2="${i}" value="${sv[i] ?? ''}" placeholder="0–${u[1]}"></label>`).join('')}<label>Component 1 exam (max 120)<input type="number" min="0" max="120" data-c1 value="${S.c1mark ?? ''}" placeholder="0–120"></label></div><div id="c2out" style="margin-top:14px"></div></div>`;
    const calc = () => { const v = $$('[data-c2]').map((inp, i) => clamp(+inp.value || 0, 0, C2[i][1])); S.c2calc = $$('[data-c2]').map((inp, i) => inp.value === '' ? null : clamp(+inp.value, 0, C2[i][1]));
      const c1i = $('[data-c1]'); S.c1mark = c1i.value === '' ? null : clamp(+c1i.value, 0, 120); save();
      const c2 = v.reduce((a, b) => a + b, 0), c1 = S.c1mark || 0, w = c1 / 120 * 60 + c2 / 80 * 40;
      $('#c2out').innerHTML = `<div class="row" style="gap:22px;align-items:baseline;flex-wrap:wrap"><span><span class="eyebrow">Component 2</span> <span style="font:800 40px var(--f-display)">${c2}</span><span class="mono">/80</span></span><span><span class="eyebrow">Component 1</span> <span style="font:800 40px var(--f-display)">${c1}</span><span class="mono">/120</span></span><span><span class="eyebrow">Weighted total</span> <span style="font:800 40px var(--f-display)">${w.toFixed(1)}%</span></span></div><div class="small muted">Practical ${v[0] + v[1] + v[2]}/60 · analysis and evaluation ${v[3] + v[4]}/20. Weighted total = (C1 ÷ 120 × 60) + (C2 ÷ 80 × 40).</div>`; };
    $$('[data-c2],[data-c1]').forEach(i => i.oninput = calc); calc();
  }

  /* ---------- ARCADE ---------- */
  function arcade() {
    crumbs('<b>Arcade</b>');
    V().innerHTML = `<h1 class="display" style="font-size:clamp(34px,5vw,54px)">Arcade</h1><p class="lede">Short, replayable games for the knowledge that needs to be automatic: muscles and their actions, planes and axes, fitness tests and the components they measure — and a real reaction-time test (the ruler drop, digitised).</p>
      <div class="grid g3 sec">${Object.entries(GAMES).map(([id, g]) => `<a class="game-card" href="#/game/${id}"><div class="art"><canvas data-art="${id}"></canvas></div><div class="row" style="justify-content:space-between"><span class="eyebrow">${g.skill}</span><span class="pill">${S.games[id] ? 'best ' + S.games[id].best : 'new'}</span></div><div class="h3">${g.title}</div><p class="small muted" style="margin:0">${g.blurb}</p></a>`).join('')}
      <a class="game-card" href="#/daily"><div class="art" style="display:grid;place-items:center"><span style="font:700 44px var(--f-display);color:#FF5468">${new Date().getDate()}</span></div><div class="row" style="justify-content:space-between"><span class="eyebrow">Daily</span><span class="pill">${S.daily[today()] != null ? S.daily[today()] + '/5 today' : 'not played'}</span></div><div class="h3">Daily challenge</div><p class="small muted" style="margin:0">Five questions from across the course, the same for everyone today.</p></a></div>`;
    $$('[data-art]').forEach(cv => drawGameArt(cv, cv.dataset.art));
  }

  function daily() {
    crumbs('<a href="#/arcade" style="color:inherit">Arcade</a> / <b>Daily challenge</b>');
    let seed = +today().replace(/-/g, ''); const rng = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    const pool = coreTopics().flatMap(t => V_(t).quiz.map(q => ({ ...q, topic: t.id }))); const items = []; while (items.length < 5) { const q = pool[Math.floor(rng() * pool.length)]; if (!items.includes(q)) items.push(q); }
    V().innerHTML = `<div class="quiz-wrap" style="margin:0 auto"><h1 class="display" style="font-size:40px;margin-bottom:6px">Daily challenge</h1><p class="muted">${new Date().toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' })}</p><div id="qz" style="margin-top:18px"></div></div>`;
    runQuiz($('#qz'), items, { title: 'Daily', back: '#/home', onDone: r => { const first = S.daily[today()] == null; S.daily[today()] = Math.max(S.daily[today()] || 0, r.correct); save(); if (first) addXP(r.correct * 12 + 10, 'Daily challenge'); } });
  }

  /* ---------- PRACTICE PAPERS + QUICK-FIRE MOCK ---------- */
  function mock() {
    crumbs('<b>Practice papers</b>');
    V().innerHTML = `<h1 class="display" style="font-size:clamp(36px,5vw,58px)">Practice papers</h1><p class="lede">Two ways to practise. A <b>full practice paper</b> follows the Component 1 format — exactly 120 marks in 2 hours, covering all five key areas — built fresh each time and self-marked with mark schemes and band descriptors. A <b>quick-fire</b> mock is auto-marked multiple choice and calculations.</p>
      <div class="grid g2 sec" style="align-items:start">
      <div class="card"><div class="eyebrow">Practice paper · self-marked</div><div class="stack" style="margin-top:12px">
        <button class="btn primary" data-paper="full">Full Component 1 paper · 2 hours · 120 marks</button><p class="small muted" style="margin:0">Short and extended answers from all five key areas, including levels-marked extended questions.</p>
        <button class="btn" data-paper="half">Half paper · 1 hour · 60 marks</button><p class="small muted" style="margin:0">The same mix at half length — good for a lesson or a timed homework.</p></div></div>
      <div class="card"><div class="eyebrow">Quick-fire · auto-marked</div><form id="mockf" class="stack" style="margin-top:10px"><div class="row">${UNITS.filter(u => u.assess === 'exam').map(u => `<label class="pill" style="cursor:pointer;padding:6px 12px"><input type="checkbox" name="mu" value="${u.id}" checked> ${esc(u.short)}</label>`).join('')}</div>
        <div class="grid g3"><div><label class="eyebrow" for="mq">Questions</label><select id="mq" style="width:100%;margin-top:6px"><option>10</option><option selected>20</option><option>30</option></select></div><div><label class="eyebrow" for="mc">Calculations</label><select id="mc" style="width:100%;margin-top:6px"><option value="0.15" selected>15%</option><option value="0.3">30%</option><option value="0">None</option></select></div><div><label class="eyebrow" for="mt">Time</label><select id="mt" style="width:100%;margin-top:6px"><option value="60" selected>60 s each</option><option value="40">40 s each</option><option value="0">Untimed</option></select></div></div>
        <div><button class="btn" type="submit">${ICON.clock} Start quick-fire</button></div></form></div></div>
      ${S.mocks?.length ? `<div class="sec"><div class="eyebrow">Recent results</div><div class="row" style="margin-top:8px">${S.mocks.slice(-8).reverse().map(m => `<span class="pill ${m.p >= 70 ? 'good' : m.p >= 40 ? 'warn' : 'bad'}">${m.d} · ${m.u} · ${m.p}%</span>`).join('')}</div></div>` : ''}`;
    $$('[data-paper]').forEach(b => b.onclick = () => go('#/mock/' + b.dataset.paper));
    $('#mockf').onsubmit = e => { e.preventDefault(); const us = $$('input[name=mu]:checked').map(i => i.value); if (!us.length) { toast('Choose at least one key area'); return; }
      const n = +$('#mq').value, cf = +$('#mc').value, tl = +$('#mt').value, ts = coreTopics().filter(t => us.includes(t.unit));
      const calcTopics = ts.filter(t => V_(t).gens.length), nCalc = calcTopics.length ? Math.round(n * cf) : 0;
      const calcs = Array.from({ length: nCalc }, () => { const t = pick(calcTopics); return { type: 'num', ...GEN[pick(V_(t).gens)](), topic: t.id }; });
      const mcqs = shuffle(ts.flatMap(t => V_(t).quiz.map(q => ({ ...q, topic: t.id })))).slice(0, n - calcs.length);
      const items = shuffle([...mcqs, ...calcs]);
      V().innerHTML = '<div class="quiz-wrap" style="margin:0 auto" id="qz"></div>';
      runQuiz($('#qz'), items, { mode: 'exam', title: 'Quick-fire mock', timeLimit: tl ? tl * items.length : 0, back: '#/mock', retry: () => mock(), onDone: r => { S.stats.mocks++; S.mocks ??= []; S.mocks.push({ d: today(), u: 'Quick-fire', p: r.p }); save(); addXP(r.correct * 12, 'Mock exam'); } });
    };
  }
  /* A Component 1 paper with exactly the right marks: questions from all five key areas (each area seeded first),
     no topic repeated until every topic has been tried, and at least one (full: two) levels-marked questions. */
  function paper(kind) {
    const full = kind === 'full', target = full ? 120 : 60, mins = full ? 120 : 60, needLv = full ? 2 : 1, areas = ['1', '2', '3', '4', '5'];
    const pool = bankAll().filter(q => areas.includes(TOPIC[q.topic]?.unit) && qTag(q) !== 'nea');
    const isLv = q => qParts(q).some(p => p.lv), nLv = o => o.filter(isLv).length;
    const build = () => { const out = [], seen = new Set(); let m = 0; const sh = shuffle(pool);
      const add = (q, pass) => { const qm = qMarks(q); if (out.includes(q) || m + qm > target || (!pass && seen.has(q.topic))) return false; out.push(q); seen.add(q.topic); m += qm; return true; };
      shuffle(sh.filter(isLv)).slice(0, needLv).forEach(q => add(q, 0));
      areas.forEach(a => { if (!out.some(q => TOPIC[q.topic].unit === a)) sh.find(q => TOPIC[q.topic].unit === a && !isLv(q) && add(q, 0)); });
      for (const pass of [0, 1]) for (const q of sh) { if (m === target) break; if (isLv(q) && nLv(out) >= needLv + 1) continue; add(q, pass); }
      return out; };
    const tot = o => o.reduce((a, q) => a + qMarks(q), 0), ok = o => nLv(o) >= needLv && areas.every(a => o.some(q => TOPIC[q.topic].unit === a));
    let qs = [], total = 0; for (let k = 0; k < 500; k++) { const o = build(), tt = tot(o); if (!qs.length || Math.abs(tt - target) < Math.abs(total - target) || (tt === target && !ok(qs) && ok(o))) { qs = o; total = tt; } if (total === target && ok(qs)) break; }
    qs.sort((a, b) => { const ta = TOPIC[a.topic], tb = TOPIC[b.topic]; return ta.unit.localeCompare(tb.unit) || (isLv(a) - isLv(b)) || qMarks(a) - qMarks(b); });
    const title = full ? 'Component 1 practice paper' : 'Component 1 half paper';
    crumbs(`<a href="#/mock" style="color:inherit">Practice papers</a> / <b>${title}</b>`);
    V().innerHTML = `<div style="--uc:var(--accent);max-width:880px"><div class="eyebrow">WJEC Eduqas GCSE (9–1) Physical Education · practice paper (not an official paper)</div><h1 class="display" style="font-size:clamp(30px,4.4vw,50px);margin:6px 0">${title}: Introduction to physical education</h1>
      <div class="row"><span class="pill">${full ? '2 hours' : '1 hour'}</span><span class="pill">${total} marks</span><span class="pill warn mono" id="ptimer">${mins}:00</span><button class="btn sm" id="pstart">Start timer</button></div>
      <p class="small muted">Answer all questions. The number of marks is shown in brackets. Use the information in each question — the stimulus — in your answer. Extended answers are marked in bands for the quality of your knowledge, application, analysis and evaluation.</p>
      <div id="plist">${qs.map((q, i) => xqHTML(q, i, { showTopic: true, noFoot: true, num: 'Q' + (i + 1) })).join('')}</div>
      <div class="row" style="margin:24px 0"><button class="btn primary" id="pmark">Finish and show mark schemes</button></div><div id="pres"></div></div>`;
    wireParts(V());
    let tick = null; $('#pstart').onclick = () => { if (tick) return; const end = Date.now() + mins * 60e3; tick = setInterval(() => { const el = $('#ptimer'); if (!el) { clearInterval(tick); return; } const l = Math.max(0, Math.round((end - Date.now()) / 1000)); el.textContent = `${Math.floor(l / 60)}:${String(l % 60).padStart(2, '0')}`; if (!l) { clearInterval(tick); toast('Time is up'); } }, 1000); };
    cleanup = () => clearInterval(tick);
    $('#pmark').onclick = () => { clearInterval(tick); $$('.ms', V()).forEach(m => m.hidden = false); $('#pmark').hidden = true;
      $('#pres').innerHTML = `<div class="card"><p>Tick the creditworthy points for short answers and choose a band and mark for each levels-marked answer, then save your score.</p><button class="btn primary" id="psave">Save my marks</button> <span id="pscore" class="mono"></span></div>`;
      $('#psave').onclick = () => { const got = $$('.xq-part', V()).reduce((a, p) => a + partScore(p), 0), p = Math.round(got / total * 100); $('#pscore').textContent = `${got} / ${total} (${p}%)`; $('#psave').disabled = true; S.stats.mocks++; S.stats.examMarks += got; S.mocks ??= []; S.mocks.push({ d: today(), u: full ? 'Full paper' : 'Half paper', p }); save(); addXP(got * 3, 'Practice paper'); checkBadges(); if (p >= 70) burst(); }; };
  }

  /* ---------- PROGRESS ---------- */
  function progress() {
    crumbs('<b>Progress</b>');
    const L = level(), days = Array.from({ length: 14 }, (_, i) => { const d = new Date(Date.now() - (13 - i) * 864e5); const k = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); return [d, S.days[k] || 0]; });
    const mx = Math.max(50, ...days.map(d => d[1]));
    const chart = `<svg viewBox="0 0 560 170" width="100%" role="img" aria-label="XP earned over the last 14 days" style="max-width:100%">${[0, .5, 1].map(f => `<line x1="34" x2="556" y1="${140 - f * 120}" y2="${140 - f * 120}" stroke="var(--line)" stroke-width="1"/><text x="28" y="${144 - f * 120}" text-anchor="end" font-size="10" fill="var(--muted)" font-family="var(--f-mono)">${Math.round(mx * f)}</text>`).join('')}${days.map(([d, v], i) => { const hh = v / mx * 120; return `<rect x="${40 + i * 37}" y="${140 - hh}" width="26" height="${Math.max(hh, 1)}" rx="4" fill="${i === 13 ? 'var(--accent)' : 'var(--u4)'}" opacity="${v ? 1 : .25}"><title>${v} XP</title></rect><text x="${53 + i * 37}" y="158" text-anchor="middle" font-size="10" fill="var(--muted)" font-family="var(--f-mono)">${d.getDate()}</text>`; }).join('')}</svg>`;
    V().innerHTML = `<h1 class="display" style="font-size:clamp(34px,5vw,54px)">Progress</h1>
      <div class="grid g4 sec">${[['Level', L.l, L.name], ['Total XP', S.xp, `${Math.max(0, Math.round(L.next - S.xp))} to next level`], ['Streak', S.streak.n || 0, 'days in a row'], ['Topics mastered', coreTopics().filter(t => mastery(t) >= .7).length + '/' + coreTopics().length, 'topics at 70%+']].map(([a, b, c]) => `<div class="card"><div class="eyebrow">${a}</div><div style="font:800 44px/1.05 var(--f-display);margin-top:6px">${b}</div><div class="small muted">${c}</div></div>`).join('')}</div>
      <div class="grid g2 sec" style="align-items:start"><div class="card"><div class="eyebrow">XP · last 14 days</div><div style="margin-top:10px">${chart}</div></div>
      <div class="card"><div class="eyebrow">Topic mastery</div><p class="small muted" style="margin:6px 0 10px">Each tile is a topic. Brighter = stronger.</p><div class="heat">${allTopics().map(t => { const m = mastery(t); return `<a href="#/t/${t.id}" title="${esc(t.title)}: ${pct(m)}" style="background:color-mix(in srgb, ${ucol(t.unit)} ${Math.round(8 + m * 80)}%, var(--surface));${m > .5 ? 'color:#fff;border-color:transparent' : ''}">${t.id}</a>`; }).join('')}</div></div></div>
      <div class="sec"><div class="sec-head"><h2 class="h2">Badges</h2><span class="muted">${S.badges.length} of ${BADGES.length} earned</span></div><div class="badge-grid">${BADGES.map(([id, n, d, , ic]) => `<div class="badge ${S.badges.includes(id) ? 'got' : ''}"><div class="ic">${ic}</div><b>${n}</b><span>${d}</span></div>`).join('')}</div></div>
      <div class="sec grid g3">${[['Quizzes finished', S.stats.quizzes], ['Calculations correct', S.stats.calcOK], ['Flashcards reviewed', S.stats.cardsSeen], ['Explorations tried', S.stats.sims.length], ['Mock exams', S.stats.mocks], ['Exam marks self-assessed', S.stats.examMarks]].map(([a, b]) => `<div class="card flat row" style="justify-content:space-between"><span>${a}</span><b class="mono" style="font-size:20px">${b}</b></div>`).join('')}</div>
      <div class="sec card flat"><div class="eyebrow">Your data</div><p class="small muted">Progress is stored only in this browser. You can copy it as a backup and paste it back later, or on another device.</p><div class="row"><button class="btn sm" id="exp">Copy backup</button><button class="btn sm" id="imp">Restore from backup</button><button class="btn sm" id="rst" style="color:var(--bad)">Reset all progress</button></div><div id="datazone"></div></div>`;
    $('#exp').onclick = () => { const txt = JSON.stringify(S); navigator.clipboard?.writeText(txt).then(() => toast('Backup copied to clipboard'), () => { $('#datazone').innerHTML = `<textarea style="width:100%;min-height:100px;margin-top:10px" readonly>${esc(txt)}</textarea>`; $('#datazone textarea').select(); }); if (!navigator.clipboard) { $('#datazone').innerHTML = `<textarea style="width:100%;min-height:100px;margin-top:10px" readonly>${esc(txt)}</textarea>`; } };
    $('#imp').onclick = () => { $('#datazone').innerHTML = `<textarea id="impt" aria-label="Paste backup" placeholder="Paste your backup here" style="width:100%;min-height:100px;margin-top:10px;padding:10px;border-radius:10px;border:1px solid var(--line-2);background:var(--surface-2)"></textarea><button class="btn sm primary" id="impgo" style="margin-top:8px">Restore</button>`; $('#impgo').onclick = () => { try { const d = JSON.parse($('#impt').value); if (typeof d !== 'object' || d.xp == null) throw 0; Object.keys(S).forEach(k => delete S[k]); Object.assign(S, d); save(); toast('Progress restored'); route(); } catch (e) { toast('That backup could not be read. Paste the full text you copied.'); } }; };
    $('#rst').onclick = () => { $('#datazone').innerHTML = `<div class="box warn" style="margin-top:12px"><b class="lbl">Are you sure?</b><p>This permanently deletes all XP, scores, flashcard boxes and badges in this browser.</p><div class="row"><button class="btn sm" id="rsty" style="background:var(--bad);color:#fff;border-color:var(--bad)">Delete everything</button><button class="btn sm" id="rstn">Cancel</button></div></div>`; $('#rstn').onclick = () => $('#datazone').innerHTML = ''; $('#rsty').onclick = () => { try { localStorage.removeItem(STORE_KEY); } catch (e) { } location.hash = '#/home'; location.reload(); }; };
  }

  /* ---------- ABOUT ---------- */
  function about() {
    crumbs('<b>About &amp; help</b>');
    V().innerHTML = `<div class="notes"><h1 class="display" style="font-size:clamp(36px,5vw,58px);margin-bottom:12px">About Stride</h1>
      <p class="lede">A complete study companion for WJEC Eduqas GCSE (9–1) Physical Education: every content statement in Component 1 across the five key areas — health, training and exercise; exercise physiology; movement analysis; psychology of sport and physical activity; and socio-cultural issues and sports psychology — plus guides to the Component 2 non-exam assessment and the exam and data skills.</p>
      <section><h3>How to study a topic</h3><ol><li><b>Learn</b> — read the notes, step through the worked answers, and rate yourself on the specification checklist.</li><li><b>Explore</b> — use the interactive exploration until the idea feels obvious.</li><li><b>Flashcards</b> — spaced repetition: cards you know move to higher boxes and come up less often.</li><li><b>Quiz</b> — ten questions with instant explanations. Your best score counts towards mastery.</li><li><b>Calculate</b> — unlimited calculations with fresh values and full worked solutions (training zones, heart and lungs, data).</li><li><b>Exam questions</b> — stimulus-based questions with mark schemes; extended answers are marked in bands. More in the <a href="#/bank">question bank</a> and full <a href="#/mock">practice papers</a>.</li></ol></section>
      <section><h3>Mastery and your track</h3><p>Topic mastery combines your best quiz score (40%), flashcards known (20%), specification confidence (20%) and correct calculations (20%). Each topic is a marker on the running track on the home page, in the lane of its key area; it glows brighter as mastery grows, and 70% counts as “mastered”.</p></section>
      <section><h3>The assessment</h3><div class="tbl"><table><tr><th>Section</th><th>Assessment</th></tr>${UNITS.filter(u => u.id !== 'S').map(u => `<tr><td>${u.code} · ${esc(u.name)}</td><td>${esc(u.exam)}</td></tr>`).join('')}</table></div><p>See <a href="#/assess">Assessment &amp; NEA</a> for the AOs, command words, Component 2 guides and a marks calculator.</p></section>
      <section><h3>Keyboard shortcuts</h3><div class="tbl"><table><tr><th>Key</th><th>Action</th></tr><tr><td><kbd>/</kbd> or <kbd>Ctrl</kbd>+<kbd>K</kbd></td><td>Search everything</td></tr><tr><td><kbd>A</kbd>–<kbd>D</kbd> / <kbd>1</kbd>–<kbd>4</kbd></td><td>Answer a quiz question</td></tr><tr><td><kbd>Enter</kbd></td><td>Next question</td></tr><tr><td><kbd>Space</kbd></td><td>Flip a flashcard</td></tr><tr><td><kbd>1</kbd>–<kbd>4</kbd> (flipped card)</td><td>Rate: again / hard / good / easy</td></tr></table></div></section>
      <section><h3>About the content</h3><div class="box why"><b class="lbl">Please note</b><p>The notes, questions, practice papers, mark schemes and band descriptors were written for this app to follow the WJEC Eduqas GCSE (9–1) Physical Education specification (teaching from 2016). They are not official Eduqas materials, and the practice papers are not past papers. Fitness norms and physiological values are typical figures. Always check the current specification, Eduqas’s sample assessment materials and past papers, and follow your teacher’s guidance.</p></div></section>
      <section><h3>Your data</h3><p>Everything you do is stored in this browser only. Use <a href="#/progress">Progress</a> to back up or restore.</p></section></div>`;
  }

  /* ---------- Search palette ---------- */
  let index = null;
  function buildIndex() {
    index = [];
    allTopics().forEach(t => { index.push({ k: 'Topic', t: `${t.id} ${t.title}`, s: t.short, h: `#/t/${t.id}`, x: (t.id + ' ' + t.title + ' ' + t.short + ' ' + t.summary).toLowerCase() });
      t.learn.filter(inScope).forEach((l, i) => index.push({ k: 'Notes', t: l.h.replace(/<[^>]+>/g, ''), s: `${t.id} ${t.title}`, h: `#/t/${t.id}`, x: (l.h + ' ' + l.html.replace(/<[^>]+>/g, ' ')).toLowerCase() }));
      t.eqs.forEach(([e, d]) => index.push({ k: 'Equation', t: M(e), s: `${d || ''} · ${t.id}`, h: `#/t/${t.id}`, x: (e + ' ' + d + ' ' + t.title).toLowerCase(), raw: true }));
      t.cards.filter(c => inScope(c[2] || '')).forEach(([q, a]) => index.push({ k: 'Card', t: q.replace(/<[^>]+>/g, ''), s: a.replace(/<[^>]+>/g, '').slice(0, 80), h: `#/t/${t.id}/cards`, x: (q + ' ' + a).toLowerCase() })); });
    KEY_FACTS.filter(f => unitInScope(f.unit)).forEach(f => f.rows.forEach(r => index.push({ k: 'Fact', t: `${r[0]}${r[1] ? ': ' + r[1] : ''}`, s: f.h, h: '#/facts', x: (f.h + ' ' + r[0] + ' ' + r[1]).toLowerCase() })));
    NEA_GUIDES.filter(g => unitInScope(g.unit)).forEach(g => index.push({ k: 'Page', t: g.title + ' — NEA guide', s: g.time, h: '#/assess', x: (g.title + ' nea ' + g.intro).toLowerCase() }));
    COMMAND_WORDS.forEach(c => index.push({ k: 'Fact', t: 'Command word: ' + c[0], s: c[1], h: '#/assess', x: ('command word ' + c[0] + ' ' + c[1]).toLowerCase() }));
    Object.entries(GAMES).forEach(([id, g]) => index.push({ k: 'Game', t: g.title, s: g.blurb, h: '#/game/' + id, x: (g.title + ' ' + g.blurb).toLowerCase() }));
    [['Key facts', '#/facts'], ['Assessment · exam, NEA, marks calculator', '#/assess'], ['Exam question bank', '#/bank'], ['Practice papers', '#/mock'], ['About and help', '#/about'], ['Progress', '#/progress'], ['Daily challenge', '#/daily']].forEach(([t, hh]) => index.push({ k: 'Page', t, s: '', h: hh, x: t.toLowerCase() }));
  }
  function openPalette() {
    if ($('.palette-back')) return; index || buildIndex();
    const back = h('div', { class: 'palette-back', role: 'dialog', 'aria-label': 'Search' }, `<div class="palette"><input id="pal" placeholder="Search topics, notes, equations, flashcards…" aria-label="Search" autocomplete="off"><ul id="palres"></ul></div>`);
    document.body.append(back); const inp = $('#pal'), ul = $('#palres'); let sel = 0, res = [];
    const close = () => back.remove();
    const show = () => { const q = inp.value.toLowerCase().trim(); const terms = q.split(/\s+/).filter(Boolean);
      res = q ? index.filter(it => terms.every(w => it.x.includes(w))).sort((a, b) => ({ Topic: 0, Page: 1, Equation: 2, Fact: 3, Notes: 4, Game: 5, Card: 6 }[a.k] - { Topic: 0, Page: 1, Equation: 2, Fact: 3, Notes: 4, Game: 5, Card: 6 }[b.k])).slice(0, 40) : index.filter(it => it.k === 'Topic' || it.k === 'Page').slice(0, 14);
      sel = 0; ul.innerHTML = res.length ? res.map((r, i) => `<li><a href="${r.h}" class="${i === sel ? 'sel' : ''}"><span class="kind">${r.k}</span><span><span class="t">${r.raw ? r.t : esc(r.t)}</span><br><span class="s">${esc(r.s)}</span></span><span class="muted">↵</span></a></li>`).join('') : '<li class="empty" style="margin:8px">No matches. Try a word like “lever”, “Weiner” or “VO₂max”.</li>'; };
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
