/* ==========================================================
   Arcade: fast, replayable games that drill core skills
   ========================================================== */
const MUSCLE_BANK = [['knee extension when kicking', 'quadriceps'], ['knee flexion in the running recovery phase', 'hamstrings'], ['plantar flexion at take-off', 'gastrocnemius'], ['dorsiflexion of the ankle', 'tibialis anterior'], ['elbow flexion in a biceps curl', 'biceps brachii'], ['elbow extension in a press-up', 'triceps brachii'],
  ['horizontal adduction in a chest pass', 'pectoralis major'], ['shoulder abduction to block in volleyball', 'deltoid'], ['shoulder adduction/extension in a pull-up', 'latissimus dorsi'], ['extension of the spine in a deadlift', 'erector spinae'], ['flexion of the spine in a sit-up', 'abdominals'],
  ['hip extension driving out of the blocks', 'gluteus maximus'], ['elevating and stabilising the scapula', 'trapezius'], ['plantar flexion with the knee bent', 'soleus']];
const PLANE_BANK = [['front somersault', 'sagittal · transverse axis'], ['cartwheel', 'frontal · frontal (AP) axis'], ['full twist', 'transverse · longitudinal axis'], ['squat', 'sagittal · transverse axis'], ['star jump', 'frontal · frontal (AP) axis'], ['golf backswing trunk rotation', 'transverse · longitudinal axis'],
  ['sit-up', 'sagittal · transverse axis'], ['side bend (lateral flexion)', 'frontal · frontal (AP) axis'], ['discus arm swing', 'transverse · longitudinal axis'], ['running leg action', 'sagittal · transverse axis'], ['breaststroke leg kick', 'frontal · frontal (AP) axis'], ['pirouette', 'transverse · longitudinal axis']];
const ATTRIB_BANK = [['“I’m a naturally gifted athlete.”', 'ability'], ['“I didn’t try hard enough.”', 'effort'], ['“They were the best team we’ve played.”', 'task difficulty'], ['“The ball took a lucky deflection.”', 'luck'], ['“I haven’t got the height for this.”', 'ability'],
  ['“We gave everything in the second half.”', 'effort'], ['“The course was brutally hilly.”', 'task difficulty'], ['“The wind dropped just as I jumped.”', 'luck'], ['“I trained twice as much this month.”', 'effort'], ['“The referee made a bad call.”', 'luck']];

const GAMES = {
  muscle: { title: 'Muscle Match', blurb: 'Name the agonist for each sporting action before the timer runs out.', skill: 'Unit 1 · muscles', col: 'var(--a1)' },
  plane: { title: 'Plane & Axis', blurb: 'Which plane and axis? Classify movements at speed.', skill: 'Unit 1 · movement analysis', col: 'var(--a3)' },
  attrib: { title: 'Attribution Rush', blurb: 'Ability, effort, task difficulty or luck? Sort the excuses.', skill: 'Unit 3 · attribution', col: 'var(--a2)' },
  reaction: { title: 'Reaction Time', blurb: 'Ten simple-reaction trials. Beat your best mean time.', skill: 'Unit 3 · information processing', col: 'var(--a5)' },
  blitz: { title: 'True or False Blitz', blurb: 'Three lives. Judge statements from across the course.', skill: 'Mixed recall', col: 'var(--a4)' }
};

function gameBest(id, score) { S.games[id] ??= { best: 0, plays: 0 }; if (score != null) { S.games[id].plays++; if (score > S.games[id].best) { S.games[id].best = score; save(); return true; } save(); } return false; }

function drawGameArt(cv, id) {
  const c = cv.getContext('2d'), dpr = devicePixelRatio || 1, W = cv.clientWidth, H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; c.scale(dpr, dpr);
  c.fillStyle = '#0B1326'; c.fillRect(0, 0, W, H);
  const col = { muscle: '#FF6478', plane: '#3CCBB4', attrib: '#A98BFF', reaction: '#FF9152', blitz: '#F2B04E' }[id];
  if (id === 'reaction') { for (let i = 0; i < 12; i++) { c.fillStyle = hexA(col, .2 + .06 * i); c.fillRect(20 + i * (W - 40) / 12, H - 24 - i * 5, (W - 40) / 12 - 4, 10 + i * 5); } }
  else if (id === 'plane') { const cx = W - 70, cy = H / 2 - 6; [[.4, '#6CC47A'], [.38, '#E8B84A'], [.12, '#FF8A5B'], [.08, '#64A8F0'], [.02, '#B98AEF']].reduce((a0, [p, cc]) => { c.fillStyle = cc; c.beginPath(); c.moveTo(cx, cy); c.arc(cx, cy, 44, a0, a0 + p * Math.PI * 2); c.fill(); return a0 + p * Math.PI * 2; }, -Math.PI / 2); }
  else if (id === 'attrib') { for (let i = 0; i < 14; i++) { const x = 20 + Math.random() * (W - 40), y = 10 + Math.random() * (H - 50); c.save(); c.translate(x, y); c.rotate(Math.random() * 3); c.fillStyle = hexA(col, .3 + Math.random() * .5); c.beginPath(); c.roundRect ? c.roundRect(-10, -4, 20, 8, 4) : c.rect(-10, -4, 20, 8); c.fill(); c.restore(); } }
  else for (let i = 0; i < 26; i++) { c.fillStyle = hexA(col, Math.random() * .5 + .1); c.beginPath(); c.arc(Math.random() * W, Math.random() * (H - 30), 2 + Math.random() * 8, 0, 7); c.fill(); }
  CV.text(c, GAMES[id].title, 14, H - 18, '#fff', 21, 'left', 700, '"Barlow Condensed", sans-serif');
}

function mountGame(host, id) {
  let alive = true, timer = null; const stop = () => { alive = false; clearInterval(timer); };
  const hud = (items) => `<div class="game-hud">${items.map(([k, v]) => `<div class="hud"><span>${k}</span><b>${v}</b></div>`).join('')}<span class="spacer"></span><a class="btn sm" href="#/arcade">${ICON.back} Arcade</a></div>`;
  const endScreen = (score, extra = '') => { const nb = gameBest(id, score); if (score > 0) addXP(Math.min(60, Math.round(score / 2)), GAMES[id].title); if (nb && score > 0) { burst(); sfx.win(); }
    host.innerHTML = `<div class="game"><div class="card result"><div class="eyebrow">${GAMES[id].title}</div><div class="big">${score}</div><p class="lede" style="margin:8px auto">${nb ? 'New personal best!' : 'Personal best: ' + S.games[id].best}</p>${extra}<div class="row" style="justify-content:center;margin-top:14px"><button class="btn primary" data-again>Play again</button><a class="btn" href="#/arcade">Back to arcade</a></div></div></div>`;
    $('[data-again]', host).onclick = () => { stop(); cleanup = mountGame(host, id); }; };
  let cleanup = stop;

  if (id === 'muscle' || id === 'plane' || id === 'attrib') {
    const bank = id === 'muscle' ? MUSCLE_BANK : id === 'plane' ? PLANE_BANK : ATTRIB_BANK, total = 60;
    let score = 0, streak = 0, left = total, cur = null, answered = 0, right = 0;
    const next = () => { const item = pick(bank); const seen = new Set([item[1]]), others = shuffle(bank.filter(b => b[1] !== item[1])).filter(b => !seen.has(b[1]) && seen.add(b[1])).slice(0, 3); cur = { item, opts: shuffle([item, ...others]) }; render(); };
    const render = () => {
      host.innerHTML = `<div class="game">${hud([['Score', score], ['Streak', streak], ['Time', Math.ceil(left) + 's']])}<div class="timer"><i style="width:${left / total * 100}%"></i></div>
        <div class="eyebrow" style="text-align:center">${id === 'muscle' ? 'Which muscle is the agonist?' : id === 'plane' ? 'Which plane and axis?' : 'Which attribution (Weiner)?'}</div><div class="big-prompt">${esc(cur.item[0])}</div>
        <div class="opts">${cur.opts.map((o, i) => `<button class="opt" data-i="${i}"><span class="k">${i + 1}</span><span>${esc(o[1])}</span></button>`).join('')}</div><p class="kbd-hint">Keys 1–4 to answer.</p></div>`;
      $$('.opt', host).forEach(b => b.onclick = () => choose(+b.dataset.i));
    };
    const choose = i => { if (!alive) return; answered++; const ok = cur.opts[i] === cur.item; const btn = $$('.opt', host)[i]; if (ok) { right++; streak++; score += 10 + Math.min(streak, 10) * 2; sfx.good(); btn.classList.add('right'); } else { streak = 0; left = Math.max(0, left - 3); sfx.bad(); btn.classList.add('wrong'); $$('.opt', host)[cur.opts.indexOf(cur.item)].classList.add('right'); } setTimeout(() => alive && left > 0 && next(), ok ? 250 : 900); };
    const key = e => { if (!alive || !document.body.contains(host)) { removeEventListener('keydown', key); return; } const n = +e.key; if (n >= 1 && n <= 4 && !$('.opt.right', host)) choose(n - 1); };
    addEventListener('keydown', key);
    timer = setInterval(() => { left -= 0.1; const bar = $('.timer i', host); if (bar) bar.style.width = (left / total * 100) + '%'; const tb = $$('.hud b', host)[2]; if (tb) tb.textContent = Math.ceil(Math.max(0, left)) + 's'; if (left <= 0) { clearInterval(timer); removeEventListener('keydown', key); endScreen(score, `<p class="muted">${right} of ${answered} correct</p>`); } }, 100);
    next();
    return () => { stop(); removeEventListener('keydown', key); };
  }

  if (id === 'reaction') {
    let n = 0, times = [], t0 = 0, armed = false, tm = null;
    const render = (msg, go) => { host.innerHTML = `<div class="game">${hud([['Trial', Math.min(n + 1, 10) + '/10'], ['Mean', times.length ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) + ' ms' : '—']])}<button id="rt-pad" class="card" style="display:block;width:100%;height:220px;border-radius:20px;font:800 34px var(--f-display);text-transform:uppercase;cursor:pointer;background:${go ? 'var(--a5)' : 'var(--surface-2)'};color:${go ? '#fff' : 'var(--ink)'}">${msg}</button><p class="kbd-hint">Tap the pad or press Space when it turns orange.</p></div>`; $('#rt-pad', host).onpointerdown = hit; };
    const arm = () => { armed = false; render('Wait…'); clearTimeout(tm); tm = setTimeout(() => { if (!alive) return; armed = true; t0 = performance.now(); render('Go!', true); }, 1000 + Math.random() * 2200); };
    const hit = () => { if (!armed) { clearTimeout(tm); render('Too early!'); sfx.bad(); setTimeout(() => alive && arm(), 900); return; } const rt = performance.now() - t0; armed = false; times.push(rt); n++; sfx.good();
      if (n >= 10) { const m = times.reduce((a, b) => a + b, 0) / times.length; removeEventListener('keydown', key); endScreen(Math.max(0, Math.round(600 - m)), `<p class="muted">Mean simple reaction time ${Math.round(m)} ms (score = 600 − mean). Choice reactions are slower — Hick’s law.</p>`); } else { render(Math.round(rt) + ' ms'); setTimeout(() => alive && arm(), 800); } };
    const key = e => { if (!alive || !document.body.contains(host)) { removeEventListener('keydown', key); return; } if (e.code === 'Space') { e.preventDefault(); hit(); } };
    addEventListener('keydown', key); arm();
    return () => { stop(); clearTimeout(tm); removeEventListener('keydown', key); };
  }

  if (id === 'blitz') {
    const pool = allTopics().flatMap(t => V_(t).quiz.map(q => ({ q, t }))); let score = 0, lives = 3, cur;
    const next = () => { const { q, t } = pick(pool); const truth = Math.random() < 0.5; const opt = truth ? q.o[0] : pick(q.o.slice(1)); cur = { q, t, truth, opt }; render(); };
    const render = () => { host.innerHTML = `<div class="game">${hud([['Score', score], ['Lives', '♥'.repeat(lives) || '0']])}<div class="card"><div class="eyebrow">${cur.t.id} · ${esc(cur.t.title)}</div><p class="q-text">${rich(cur.q.q)}</p><div class="box def" style="font-size:17px"><b class="lbl">Proposed answer</b><p>${rich(cur.opt)}</p></div>
      <div class="row" style="justify-content:center;gap:14px;margin-top:10px"><button class="btn primary" data-a="1" style="min-width:130px">True <kbd>T</kbd></button><button class="btn" data-a="0" style="min-width:130px">False <kbd>F</kbd></button></div><div id="bz-fb"></div></div></div>`;
      $$('[data-a]', host).forEach(b => b.onclick = () => answer(b.dataset.a === '1')); };
    const answer = a => { if ($('#bz-fb', host).innerHTML) return; const ok = a === cur.truth; ok ? (score += 10, sfx.good()) : (lives--, sfx.bad());
      $('#bz-fb', host).innerHTML = `<div class="explain"><b class="v ${ok ? 'good' : 'bad'}">${ok ? 'Correct' : 'Wrong'}</b> ${cur.truth ? 'That answer is right.' : 'The correct answer is: ' + rich(cur.q.o[0])} ${cur.q.x ? '<br><span class="muted">' + rich(cur.q.x) + '</span>' : ''}</div>`;
      setTimeout(() => { if (!alive) return; lives > 0 ? next() : endScreen(score); }, ok ? 900 : 2600); };
    const key = e => { if (!alive || !document.body.contains(host)) { removeEventListener('keydown', key); return; } if (e.key === 't' || e.key === 'T') answer(true); if (e.key === 'f' || e.key === 'F') answer(false); };
    addEventListener('keydown', key); next(); return () => { stop(); removeEventListener('keydown', key); };
  }
  return stop;
}
