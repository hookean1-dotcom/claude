/* ==========================================================
   Arcade: fast, replayable games that drill core skills
   ========================================================== */
const UNIT_BANK = [
  ['force', 'newton (N)'], ['energy', 'joule (J)'], ['power', 'watt (W)'], ['pressure', 'pascal (Pa)'], ['momentum', 'kg m/s'], ['charge', 'coulomb (C)'],
  ['potential difference', 'volt (V)'], ['resistance', 'ohm (Ω)'], ['current', 'ampere (A)'], ['density', 'kg/m³'], ['acceleration', 'm/s²'], ['speed', 'm/s'],
  ['frequency', 'hertz (Hz)'], ['spring constant', 'N/m'], ['gravitational field strength', 'N/kg'], ['specific heat capacity', 'J/kg °C'], ['specific latent heat', 'J/kg'],
  ['moment of a force', 'newton-metre (Nm)'], ['magnetic flux density', 'tesla (T)'], ['activity of a source', 'becquerel (Bq)'], ['radiation dose', 'sievert (Sv)'],
  ['wavelength', 'metre (m)'], ['period', 'second (s)'], ['mass', 'kilogram (kg)'], ['volume', 'm³'], ['temperature change', '°C'], ['work done', 'joule (J)'], ['efficiency', 'no unit (ratio)'], ['magnification', 'no unit (ratio)']
];
const EQ_BANK = [...EQ_RECALL, ...EQ_SHEET].map(e => [e[0].split(' = ')[0].split(' ÷ ')[0], e[1], e[2] || '', e[0]]);
const MAGNITUDES = [
  ['Mass of an adult person', 70, 'kg'], ['Mass of a family car', 1200, 'kg'], ['Mass of the Earth', 6e24, 'kg'], ['Mass of an apple', 0.1, 'kg'],
  ['Radius of an atom', 1e-10, 'm'], ['Radius of a nucleus', 1e-14, 'm'], ['Radius of the Earth', 6.4e6, 'm'], ['Earth–Sun distance', 1.5e11, 'm'],
  ['Wavelength of visible light', 5e-7, 'm'], ['Wavelength of a radio wave', 100, 'm'], ['Height of a door', 2, 'm'], ['Thickness of a sheet of paper', 1e-4, 'm'],
  ['Speed of light', 3e8, 'm/s'], ['Speed of sound in air', 330, 'm/s'], ['Walking speed', 1.5, 'm/s'], ['Speed of a car on a motorway', 31, 'm/s'],
  ['Power of a kettle', 2000, 'W'], ['Power of an LED bulb', 5, 'W'], ['Output of a large power station', 2e9, 'W'], ['UK mains potential difference', 230, 'V'],
  ['Atmospheric pressure at sea level', 1e5, 'Pa'], ['Density of water', 1000, 'kg/m³'], ['Density of air', 1.2, 'kg/m³'], ['Frequency of UK mains', 50, 'Hz'],
  ['Upper limit of human hearing', 20000, 'Hz'], ['Frequency of visible light', 5e14, 'Hz'], ['Current in a phone charger', 1, 'A'], ['Energy to boil a kettle of water', 3e5, 'J'],
  ['Kinetic energy of a car at 30 mph', 1e5, 'J'], ['Human reaction time', 0.5, 's'], ['Age of the universe', 4e17, 's'], ['Weight of an apple', 1, 'N'],
  ['Half-life of carbon-14', 2e11, 's'], ['Typical annual UK radiation dose', 2.7e-3, 'Sv'], ['Transmission pd of the National Grid', 4e5, 'V'], ['Deceleration in an emergency stop', 8, 'm/s²']
];

const GAMES = {
  rush: { title: 'Equation Rush', blurb: 'The 23 equations you must recall — plus the equation sheet. Pick the right one before the bar empties.', skill: 'Recall of equations', col: 'var(--u2)' },
  sprint: { title: 'Unit Match', blurb: 'Match each quantity to its unit against the clock.', skill: 'Units', col: 'var(--u1)' },
  symbols: { title: 'Circuit Symbols', blurb: 'Name the standard circuit symbol before time runs out.', skill: 'Circuit diagrams (4.2.1.1)', col: 'var(--u5)' },
  magnitude: { title: 'Powers of Ten', blurb: 'Estimate the order of magnitude of real physical quantities.', skill: 'Estimation', col: 'var(--u3)' },
  blitz: { title: 'True or False Blitz', blurb: 'Three lives. Judge statements from across the course.', skill: 'Mixed recall', col: 'var(--u4)' }
};

function gameBest(id, score) { S.games[id] ??= { best: 0, plays: 0 }; if (score != null) { S.games[id].plays++; if (score > S.games[id].best) { S.games[id].best = score; save(); return true; } save(); } return false; }

function drawGameArt(cv, id) {
  const c = cv.getContext('2d'), dpr = devicePixelRatio || 1, W = cv.clientWidth, H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; c.scale(dpr, dpr);
  c.fillStyle = '#070B10'; c.fillRect(0, 0, W, H);
  const nm = { sprint: 640, rush: 589, magnitude: 546, blitz: 486, symbols: 470 }[id];
  if (id === 'magnitude') { for (let i = 0; i < 12; i++) { const x = 14 + i * (W - 28) / 11; c.fillStyle = nmCSS(nm, .25 + .06 * i); c.fillRect(x - 1, H - 20 - i * 5, 3, 10 + i * 5); } CV.mono(c, '10ⁿ', W - 14, 20, '#fff', 14, 'right'); return; }
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
    const bank = id === 'sprint' ? UNIT_BANK : id === 'symbols' ? SYMBOL_BANK : EQ_BANK.filter(e => inScope(e[2])), total = id === 'rush' ? 75 : 60;
    let score = 0, streak = 0, left = total, cur = null, answered = 0, right = 0;
    const next = () => { const item = pick(bank); const others = shuffle(bank.filter(b => b[1] !== item[1] && b[0] !== item[0])).slice(0, 3); cur = { item, opts: shuffle([item, ...others]) }; render(); };
    const render = () => {
      host.innerHTML = `<div class="game">${hud([['Score', score], ['Streak', streak], ['Time', Math.ceil(left) + 's']])}<div class="timer"><i style="width:${left / total * 100}%"></i></div>
        <div class="eyebrow" style="text-align:center">${id === 'sprint' ? 'What is the unit of' : id === 'symbols' ? 'Name this circuit symbol' : 'Which equation gives'}</div><div class="big-prompt${id === 'symbols' ? ' game-sym' : ''}">${id === 'rush' ? cur.item[0] + (cur.item[2] ? ' ' + tagHTML(cur.item[2], 1) : '') : cur.item[0]}</div>
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

  if (id === 'magnitude') {
    const qs = shuffle(MAGNITUDES).slice(0, 10); let i = 0, score = 0;
    const render = () => { const q = qs[i];
      host.innerHTML = `<div class="game">${hud([['Round', (i + 1) + '/10'], ['Score', score]])}<div class="eyebrow" style="text-align:center">Estimate the order of magnitude</div><div class="big-prompt">${q[0]}</div>
        <div class="card" style="text-align:center"><div style="font:800 56px var(--f-display)"><span class="m">10<sup id="mg-out">0</sup></span> <span class="muted" style="font-size:22px">${q[2]}</span></div>
        <input id="mg-in" type="range" min="-32" max="32" step="1" value="0" style="margin:14px 0" aria-label="Power of ten"><div class="row" style="justify-content:center"><button class="btn primary" id="mg-go">Lock in</button></div><div id="mg-fb"></div></div></div>`;
      const inp = $('#mg-in', host); const upd = () => { $('#mg-out', host).textContent = (+inp.value).toString().replace('-', '−'); inp.style.setProperty('--p', ((+inp.value + 32) / 64 * 100) + '%'); }; inp.oninput = upd; upd();
      $('#mg-go', host).onclick = () => { const L = Math.log10(q[1]), g0 = +inp.value, d = Math.min(Math.abs(g0 - Math.floor(L)), Math.abs(g0 - Math.round(L))), pts = d === 0 ? 10 : d === 1 ? 6 : d === 2 ? 2 : 0; score += pts; (pts >= 6 ? sfx.good : sfx.bad)();
        $('#mg-fb', host).innerHTML = `<div class="explain" style="margin-top:14px"><b class="v ${pts >= 6 ? 'good' : 'bad'}">${pts ? '+' + pts : 'Off by ' + d}</b> Actual value: <span class="m">${sf(q[1], 3)}</span> ${q[2]} — order of magnitude <span class="m">10<sup>${String(Math.round(L)).replace('-', '−')}</sup></span></div><div class="row" style="justify-content:center;margin-top:10px"><button class="btn" id="mg-next">${i < 9 ? 'Next' : 'Finish'}</button></div>`;
        $('#mg-go', host).disabled = true; $('#mg-next', host).onclick = () => { i++; i < 10 ? render() : endScreen(score, '<p class="muted">10 points for an exact power of ten, 6 for one out, 2 for two out.</p>'); }; };
    };
    render(); return stop;
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
