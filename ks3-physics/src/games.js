/* ==========================================================
   Arcade: fast, replayable games that drill core skills
   ========================================================== */
const UNIT_BANK = [
  ['force', 'newton (N)'], ['weight', 'newton (N)'], ['mass', 'kilogram (kg)'], ['energy', 'joule (J)'], ['gravitational field strength', 'newton per kilogram (N/kg)'],
  ['density', 'g/cm³ or kg/m³'], ['volume', 'cm³ or m³'], ['length', 'metre (m)'], ['time', 'second (s)'], ['speed', 'metre per second (m/s)'],
  ['moment', 'newton metre (Nm)'], ['pressure', 'pascal (Pa) = N/m²'], ['area', 'm² or cm²'], ['current', 'amp (A)'], ['potential difference', 'volt (V)'],
  ['resistance', 'ohm (Ω)'], ['loudness', 'decibel (dB)'], ['frequency (pitch)', 'hertz (Hz)'], ['temperature', 'degree Celsius (°C)'], ['power', 'watt (W)'],
  ['upthrust', 'newton (N)'], ['friction', 'newton (N)'], ['capacity of a liquid', 'millilitre (ml)'], ['distance', 'metre (m)']
];
const EQ_BANK = EQ_LIST.map(e => [e[0].split(' = ')[0], e[1], e[2] || '', e[0]]);
const KS3_SYMS = ['cell', 'battery', 'switch (open)', 'switch (closed)', 'two-way switch', 'resistor', 'variable resistor', 'lamp', 'fuse', 'ammeter', 'voltmeter', 'motor', 'buzzer', 'LED'];
const KS3_SYMBOL_BANK = SYMBOL_BANK.filter(s => KS3_SYMS.includes(s[1]));
/* Float or sink in water (density 1.0 g/cm³) */
const FLOATERS = [
  ['cork', 0.24], ['ice', 0.92], ['oak wood', 0.75], ['pine wood', 0.5], ['apple', 0.8], ['polystyrene', 0.05], ['candle wax', 0.9], ['olive oil (a drop)', 0.92],
  ['aluminium', 2.7], ['iron nail', 7.9], ['copper coin', 8.9], ['gold ring', 19.3], ['glass marble', 2.5], ['granite pebble', 2.7], ['lead weight', 11.3], ['rubber eraser', 1.5],
  ['a human (lungs full)', 0.98], ['honey (a drop)', 1.4], ['plastic (PET) bottle cap', 1.38], ['plastic (polythene) bag', 0.93], ['ebony wood', 1.2], ['bone', 1.9], ['balsa wood', 0.16], ['steel ship (with its air)', 0.3], ['solid steel', 7.8], ['golf ball', 1.1], ['table-tennis ball', 0.08], ['egg (fresh)', 1.03]
];

const GAMES = {
  rush: { title: 'Equation Rush', blurb: 'Every KS3 equation you need to learn. Pick the right one before the bar empties.', skill: 'Equations', col: 'var(--u2)' },
  sprint: { title: 'Unit Match', blurb: 'Match each quantity to its unit against the clock.', skill: 'Units', col: 'var(--u1)' },
  symbols: { title: 'Circuit Symbols', blurb: 'Name the circuit symbol before time runs out.', skill: 'Circuit diagrams · Year 8', col: 'var(--u5)' },
  floaty: { title: 'Float or Sink?', blurb: 'Water has a density of 1.0 g/cm³. Will each object float or sink? Beat the clock.', skill: 'Density and upthrust · Year 7', col: 'var(--u3)' },
  blitz: { title: 'True or False Blitz', blurb: 'Three lives. Judge statements from across the course.', skill: 'Mixed recall', col: 'var(--u4)' }
};

function gameBest(id, score) { S.games[id] ??= { best: 0, plays: 0 }; if (score != null) { S.games[id].plays++; if (score > S.games[id].best) { S.games[id].best = score; save(); return true; } save(); } return false; }

function drawGameArt(cv, id) {
  const c = cv.getContext('2d'), dpr = devicePixelRatio || 1, W = cv.clientWidth, H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; c.scale(dpr, dpr);
  c.fillStyle = '#070B10'; c.fillRect(0, 0, W, H);
  const nm = { sprint: 640, rush: 589, floaty: 520, blitz: 486, symbols: 470 }[id];
  if (id === 'floaty') { const wl = H * .45; c.fillStyle = 'rgba(60,140,255,.35)'; c.fillRect(0, wl, W, H - wl); CV.line(c, 0, wl, W, wl, 'rgba(140,200,255,.9)', 2); [[.2, -8, 18, '#E8B04A'], [.45, 6, 14, '#D9F1FF'], [.7, H * .35, 14, '#9AA3AC'], [.86, H * .28, 10, '#E5484D']].forEach(([fx, dy, r, col]) => CV.circle(c, W * fx, wl + dy, r, col)); CV.text(c, GAMES[id].title.toUpperCase(), 14, 22, '#fff', 20, 'left', 800, 'Big Shoulders Display, Impact, sans-serif'); return; }
  if (id === 'symbols') { c.save(); c.translate(W / 2, H / 2 - 8); c.strokeStyle = nmCSS(nm, .95); c.lineWidth = 2.5; c.beginPath(); c.moveTo(-70, 0); c.lineTo(-22, 0); c.moveTo(22, 0); c.lineTo(70, 0); c.stroke(); c.beginPath(); c.arc(0, 0, 22, 0, 7); c.stroke(); c.beginPath(); c.moveTo(-15, -15); c.lineTo(15, 15); c.moveTo(15, -15); c.lineTo(-15, 15); c.stroke(); c.restore(); CV.text(c, GAMES[id].title.toUpperCase(), 14, H - 18, '#fff', 20, 'left', 800, 'Big Shoulders Display, Impact, sans-serif'); return; }
  for (let i = 0; i < 40; i++) { const x = Math.random() * W, y = Math.random() * H, l = 6 + Math.random() * 30; c.strokeStyle = nmCSS(nm, Math.random() * .6 + .1); c.lineWidth = 1.5; c.beginPath(); c.moveTo(x, y); c.lineTo(x + l, y - l * .3); c.stroke(); }
  CV.text(c, GAMES[id].title.toUpperCase(), 14, H - 18, '#fff', 20, 'left', 800, 'Big Shoulders Display, Impact, sans-serif');
}

function mountGame(host, id) {
  let alive = true, timer = null; const stop = () => { alive = false; clearInterval(timer); };
  const hud = (items) => `<div class="game-hud">${items.map(([k, v]) => `<div class="hud"><span>${k}</span><b>${v}</b></div>`).join('')}<span class="spacer"></span><a class="btn sm" href="#/arcade">${ICON.back} Arcade</a></div>`;
  const endScreen = (score, extra = '') => { const nb = gameBest(id, score); if (score > 0) addXP(Math.min(60, Math.round(score / 2)), GAMES[id].title); if (nb && score > 0) { burst(); sfx.win(); }
    host.innerHTML = `<div class="game"><div class="card result"><div class="eyebrow">${GAMES[id].title}</div><div class="big">${score}</div><p class="lede" style="margin:8px auto">${nb ? 'New personal best!' : 'Personal best: ' + S.games[id].best}</p>${extra}<div class="row" style="justify-content:center;margin-top:14px"><button class="btn primary" data-again>Play again</button><a class="btn" href="#/arcade">Back to arcade</a></div></div></div>`;
    $('[data-again]', host).onclick = () => { stop(); cleanup = mountGame(host, id); }; };
  let cleanup = stop;

  if (id === 'sprint' || id === 'rush' || id === 'symbols') {
    const bank = id === 'sprint' ? UNIT_BANK : id === 'symbols' ? KS3_SYMBOL_BANK : EQ_BANK.filter(e => inScope(e[2])), total = id === 'rush' ? 75 : 60;
    let score = 0, streak = 0, left = total, cur = null, answered = 0, right = 0;
    const next = () => { const item = pick(bank); const others = shuffle(bank.filter(b => b[1] !== item[1] && b[0] !== item[0])).slice(0, 3); cur = { item, opts: shuffle([item, ...others]) }; render(); };
    const render = () => {
      host.innerHTML = `<div class="game">${hud([['Score', score], ['Streak', streak], ['Time', Math.ceil(left) + 's']])}<div class="timer"><i style="width:${left / total * 100}%"></i></div>
        <div class="eyebrow" style="text-align:center">${id === 'sprint' ? 'What is the unit of' : id === 'symbols' ? 'Name this circuit symbol' : 'Which equation gives'}</div><div class="big-prompt${id === 'symbols' ? ' game-sym' : ''}">${cur.item[0]}</div>
        <div class="opts">${cur.opts.map((o, i) => `<button class="opt" data-i="${i}"><span class="k">${i + 1}</span><span>${id === 'rush' ? M(o[1]) : o[1]}</span></button>`).join('')}</div><p class="kbd-hint">Keys 1–4 to answer.</p></div>`;
      $$('.opt', host).forEach(b => b.onclick = () => choose(+b.dataset.i));
    };
    const choose = i => { if (!alive) return; answered++; const ok = cur.opts[i] === cur.item; const btn = $$('.opt', host)[i]; if (ok) { right++; streak++; score += 10 + Math.min(streak, 10) * 2; sfx.good(); btn.classList.add('right'); } else { streak = 0; left = Math.max(0, left - 3); sfx.bad(); btn.classList.add('wrong'); $$('.opt', host)[cur.opts.indexOf(cur.item)].classList.add('right'); } setTimeout(() => alive && left > 0 && next(), ok ? 250 : 900); };
    const key = e => { if (!alive || !document.body.contains(host)) { removeEventListener('keydown', key); return; } const n = +e.key; if (n >= 1 && n <= 4 && !$('.opt.right', host)) choose(n - 1); };
    addEventListener('keydown', key);
    timer = setInterval(() => { left -= 0.1; const bar = $('.timer i', host); if (bar) bar.style.width = (left / total * 100) + '%'; const tb = $$('.hud b', host)[2]; if (tb) tb.textContent = Math.ceil(Math.max(0, left)) + 's'; if (left <= 0) { clearInterval(timer); removeEventListener('keydown', key); endScreen(score, `<p class="muted">${right} of ${answered} correct</p>`); } }, 100);
    next();
    return () => { stop(); removeEventListener('keydown', key); };
  }

  if (id === 'floaty') {
    let score = 0, streak = 0, left = 45, cur = null, answered = 0, right = 0, busy = false; const total = 45;
    const next = () => { cur = pick(FLOATERS); busy = false; render(); };
    const render = () => {
      host.innerHTML = `<div class="game">${hud([['Score', score], ['Streak', streak], ['Time', Math.ceil(left) + 's']])}<div class="timer"><i style="width:${left / total * 100}%"></i></div>
        <div class="eyebrow" style="text-align:center">Drop it in water (1.0 g/cm³). Will it float or sink?</div><div class="big-prompt">${esc(cur[0])}<div class="small muted" style="font:500 15px var(--f-mono);margin-top:6px">density ${cur[1]} g/cm³</div></div>
        <div class="row" style="justify-content:center;gap:14px"><button class="btn primary" data-a="f" style="min-width:140px">Float <kbd>F</kbd></button><button class="btn" data-a="s" style="min-width:140px">Sink <kbd>S</kbd></button></div><div id="fl-fb" style="min-height:60px"></div></div>`;
      $$('[data-a]', host).forEach(b => b.onclick = () => choose(b.dataset.a)); };
    const choose = a => { if (!alive || busy) return; busy = true; answered++; const fl = cur[1] < 1, ok = (a === 'f') === fl;
      if (ok) { right++; streak++; score += 10 + Math.min(streak, 10) * 2; sfx.good(); } else { streak = 0; left = Math.max(0, left - 3); sfx.bad(); }
      $('#fl-fb', host).innerHTML = `<div class="explain"><b class="v ${ok ? 'good' : 'bad'}">${ok ? 'Correct' : 'Not quite'}</b> ${esc(cur[0])} ${fl ? 'floats' : 'sinks'}: ${cur[1]} g/cm³ is ${fl ? 'less' : 'more'} than water’s 1.0 g/cm³.</div>`;
      setTimeout(() => alive && left > 0 && next(), ok ? 700 : 1600); };
    const key = e => { if (!alive || !document.body.contains(host)) { removeEventListener('keydown', key); return; } if (e.key === 'f' || e.key === 'F') choose('f'); if (e.key === 's' || e.key === 'S') choose('s'); };
    addEventListener('keydown', key);
    timer = setInterval(() => { left -= 0.1; const bar = $('.timer i', host); if (bar) bar.style.width = (left / total * 100) + '%'; const tb = $$('.hud b', host)[2]; if (tb) tb.textContent = Math.ceil(Math.max(0, left)) + 's'; if (left <= 0) { clearInterval(timer); removeEventListener('keydown', key); endScreen(score, `<p class="muted">${right} of ${answered} correct. Anything less dense than water floats in it.</p>`); } }, 100);
    next(); return () => { stop(); removeEventListener('keydown', key); };
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
