/* ==========================================================
   Arcade: fast, replayable games that drill core skills
   ========================================================== */
const NUTRIENT_BANK = [
  ['vitamin C', 'scurvy — bleeding gums, poor wound healing'], ['vitamin D', 'rickets in children; osteomalacia in adults'], ['vitamin A', 'night blindness'], ['iron', 'iron-deficiency anaemia — tiredness, pale skin'],
  ['thiamin (B1)', 'beriberi'], ['niacin (B3)', 'pellagra'], ['vitamin B12', 'pernicious (megaloblastic) anaemia, nerve damage'], ['folate', 'neural tube defects (spina bifida) in babies'],
  ['iodine', 'goitre — enlarged thyroid'], ['calcium', 'weak bones — osteoporosis in later life'], ['vitamin K', 'slow blood clotting, bleeding'], ['protein (and energy)', 'kwashiorkor / marasmus'],
  ['fluoride', 'weaker enamel — more tooth decay'], ['fibre', 'constipation, diverticular disease'], ['water', 'dehydration — headaches, poor concentration'], ['sodium (excess)', 'high blood pressure → stroke'],
  ['riboflavin (B2)', 'cracked lips and corners of the mouth'], ['zinc', 'poor growth and wound healing'], ['vitamin E', 'nerve and muscle damage (rare)'], ['potassium', 'muscle weakness, irregular heartbeat']
];
const EATWELL_BANK = [['broccoli', 'Fruit & vegetables'], ['tinned peaches', 'Fruit & vegetables'], ['frozen peas', 'Fruit & vegetables'], ['baked potato', 'Potatoes, bread, rice, pasta'], ['wholemeal pasta', 'Potatoes, bread, rice, pasta'], ['porridge oats', 'Potatoes, bread, rice, pasta'], ['brown rice', 'Potatoes, bread, rice, pasta'],
  ['lentils', 'Beans, pulses, fish, eggs, meat'], ['salmon', 'Beans, pulses, fish, eggs, meat'], ['tofu', 'Beans, pulses, fish, eggs, meat'], ['chicken breast', 'Beans, pulses, fish, eggs, meat'], ['eggs', 'Beans, pulses, fish, eggs, meat'], ['baked beans', 'Beans, pulses, fish, eggs, meat'],
  ['yogurt', 'Dairy & alternatives'], ['cheddar', 'Dairy & alternatives'], ['fortified soya drink', 'Dairy & alternatives'], ['semi-skimmed milk', 'Dairy & alternatives'], ['rapeseed oil', 'Oils & spreads'], ['olive oil spread', 'Oils & spreads'],
  ['chocolate', 'Eat less often (HFSS)'], ['crisps', 'Eat less often (HFSS)'], ['cola', 'Eat less often (HFSS)'], ['cake', 'Eat less often (HFSS)']];
const PATHOGEN_BANK = [['Campylobacter', 'the UK’s most common cause — raw poultry'], ['Salmonella', 'raw eggs and poultry; 12–36 h'], ['Bacillus cereus', 'cooked rice kept warm'], ['Listeria', 'grows in the fridge — soft cheese, pâté; dangerous in pregnancy'],
  ['E. coli O157', 'undercooked burgers; kidney failure (HUS)'], ['Staphylococcus aureus', 'from food handlers’ skin and nose; toxin, 1–6 h'], ['Clostridium perfringens', 'large stews and gravy cooled slowly'], ['Clostridium botulinum', 'badly canned food; paralysis'],
  ['Norovirus', 'virus — oysters, ill food handlers; sudden vomiting'], ['Hepatitis A', 'virus — shellfish; jaundice']];
const TEMP_BANK = [['A fridge should run between 0 °C and…', 5], ['Legal maximum temperature for chilled food', 8], ['Core temperature for cooking (30 s)', 75], ['Minimum hot-holding temperature', 63], ['Freezer temperature (at or below)', -18],
  ['Optimum temperature for most food poisoning bacteria', 37], ['Milk pasteurisation temperature (15 s)', 72], ['Yeast is killed at about', 60], ['Egg white starts to set at about', 62], ['Caramelisation begins at about', 160],
  ['Soft-ball stage for fudge (about)', 114], ['Jam setting point', 105], ['Canning temperature to destroy spores', 121], ['Reheating in Scotland (minimum)', 82], ['Gelatine melts at about', 35], ['Top of the danger zone', 63]];

const GAMES = {
  nutrient: { title: 'Deficiency Detective', blurb: 'Match each deficiency disease or symptom to the nutrient that is lacking.', skill: 'Unit 1 · micronutrients', col: 'var(--u1)' },
  eatwell: { title: 'Eatwell Sort', blurb: 'Sort foods into the Eatwell Guide groups against the clock.', skill: 'Unit 1 · classifying food', col: 'var(--u5)' },
  pathogen: { title: 'Pathogen Profiles', blurb: 'Which micro-organism fits the clue? Name it before the bar empties.', skill: 'Unit 3 · food poisoning', col: 'var(--u3)' },
  temp: { title: 'Temperature Check', blurb: 'Set the thermometer to the critical temperature. Closer = more points.', skill: 'Units 2–4 · critical temperatures', col: 'var(--u2)' },
  blitz: { title: 'True or False Blitz', blurb: 'Three lives. Judge statements from across the course.', skill: 'Mixed recall', col: 'var(--u4)' }
};

function gameBest(id, score) { S.games[id] ??= { best: 0, plays: 0 }; if (score != null) { S.games[id].plays++; if (score > S.games[id].best) { S.games[id].best = score; save(); return true; } save(); } return false; }

function drawGameArt(cv, id) {
  const c = cv.getContext('2d'), dpr = devicePixelRatio || 1, W = cv.clientWidth, H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; c.scale(dpr, dpr);
  c.fillStyle = '#1A1511'; c.fillRect(0, 0, W, H);
  const col = { nutrient: '#6CC47A', eatwell: '#E8B84A', pathogen: '#64A8F0', temp: '#FF8A5B', blitz: '#B98AEF' }[id];
  if (id === 'temp') { for (let i = 0; i < 12; i++) { c.fillStyle = hexA(col, .2 + .06 * i); c.fillRect(20 + i * (W - 40) / 12, H - 24 - i * 5, (W - 40) / 12 - 4, 10 + i * 5); } }
  else if (id === 'eatwell') { const cx = W - 70, cy = H / 2 - 6; [[.4, '#6CC47A'], [.38, '#E8B84A'], [.12, '#FF8A5B'], [.08, '#64A8F0'], [.02, '#B98AEF']].reduce((a0, [p, cc]) => { c.fillStyle = cc; c.beginPath(); c.moveTo(cx, cy); c.arc(cx, cy, 44, a0, a0 + p * Math.PI * 2); c.fill(); return a0 + p * Math.PI * 2; }, -Math.PI / 2); }
  else if (id === 'pathogen') { for (let i = 0; i < 14; i++) { const x = 20 + Math.random() * (W - 40), y = 10 + Math.random() * (H - 50); c.save(); c.translate(x, y); c.rotate(Math.random() * 3); c.fillStyle = hexA(col, .3 + Math.random() * .5); c.beginPath(); c.roundRect ? c.roundRect(-10, -4, 20, 8, 4) : c.rect(-10, -4, 20, 8); c.fill(); c.restore(); } }
  else for (let i = 0; i < 26; i++) { c.fillStyle = hexA(col, Math.random() * .5 + .1); c.beginPath(); c.arc(Math.random() * W, Math.random() * (H - 30), 2 + Math.random() * 8, 0, 7); c.fill(); }
  CV.text(c, GAMES[id].title, 14, H - 18, '#fff', 21, 'left', 700, 'Fraunces, Georgia, serif');
}

function mountGame(host, id) {
  let alive = true, timer = null; const stop = () => { alive = false; clearInterval(timer); };
  const hud = (items) => `<div class="game-hud">${items.map(([k, v]) => `<div class="hud"><span>${k}</span><b>${v}</b></div>`).join('')}<span class="spacer"></span><a class="btn sm" href="#/arcade">${ICON.back} Arcade</a></div>`;
  const endScreen = (score, extra = '') => { const nb = gameBest(id, score); if (score > 0) addXP(Math.min(60, Math.round(score / 2)), GAMES[id].title); if (nb && score > 0) { burst(); sfx.win(); }
    host.innerHTML = `<div class="game"><div class="card result"><div class="eyebrow">${GAMES[id].title}</div><div class="big">${score}</div><p class="lede" style="margin:8px auto">${nb ? 'New personal best!' : 'Personal best: ' + S.games[id].best}</p>${extra}<div class="row" style="justify-content:center;margin-top:14px"><button class="btn primary" data-again>Play again</button><a class="btn" href="#/arcade">Back to arcade</a></div></div></div>`;
    $('[data-again]', host).onclick = () => { stop(); cleanup = mountGame(host, id); }; };
  let cleanup = stop;

  if (id === 'nutrient' || id === 'eatwell' || id === 'pathogen') {
    const bank = id === 'nutrient' ? NUTRIENT_BANK.map(x => [x[1], x[0]]) : id === 'pathogen' ? PATHOGEN_BANK.map(x => [x[1], x[0]]) : EATWELL_BANK, total = 60;
    let score = 0, streak = 0, left = total, cur = null, answered = 0, right = 0;
    const next = () => { const item = pick(bank); const seen = new Set([item[1]]), others = shuffle(bank.filter(b => b[1] !== item[1])).filter(b => !seen.has(b[1]) && seen.add(b[1])).slice(0, 3); cur = { item, opts: shuffle([item, ...others]) }; render(); };
    const render = () => {
      host.innerHTML = `<div class="game">${hud([['Score', score], ['Streak', streak], ['Time', Math.ceil(left) + 's']])}<div class="timer"><i style="width:${left / total * 100}%"></i></div>
        <div class="eyebrow" style="text-align:center">${id === 'nutrient' ? 'Which nutrient is lacking?' : id === 'pathogen' ? 'Which micro-organism?' : 'Which Eatwell group?'}</div><div class="big-prompt">${esc(cur.item[0])}</div>
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

  if (id === 'temp') {
    const qs = shuffle(TEMP_BANK).slice(0, 10); let i = 0, score = 0;
    const render = () => { const q = qs[i];
      host.innerHTML = `<div class="game">${hud([['Round', (i + 1) + '/10'], ['Score', score]])}<div class="eyebrow" style="text-align:center">Set the thermometer</div><div class="big-prompt">${esc(q[0])}</div>
        <div class="card" style="text-align:center"><div style="font:700 56px var(--f-display)"><span id="tp-out">20</span> <span class="muted" style="font-size:24px">°C</span></div>
        <input id="tp-in" type="range" min="-30" max="180" step="1" value="20" style="margin:14px 0" aria-label="Temperature"><div class="row" style="justify-content:center"><button class="btn primary" id="tp-go">Lock in</button></div><div id="tp-fb"></div></div></div>`;
      const inp = $('#tp-in', host); const upd = () => { $('#tp-out', host).textContent = String(inp.value).replace('-', '−'); inp.style.setProperty('--p', ((+inp.value + 30) / 210 * 100) + '%'); }; inp.oninput = upd; upd();
      $('#tp-go', host).onclick = () => { const d = Math.abs(+inp.value - q[1]), pts = d === 0 ? 10 : d <= 2 ? 8 : d <= 5 ? 5 : d <= 10 ? 2 : 0; score += pts; pts >= 5 ? sfx.good() : sfx.bad();
        $('#tp-fb', host).innerHTML = `<div class="explain" style="margin-top:14px"><b class="v ${pts >= 5 ? 'good' : 'bad'}">${pts ? '+' + pts : 'Off by ' + d + ' °C'}</b> The answer is <b>${String(q[1]).replace('-', '−')} °C</b>.</div><div class="row" style="justify-content:center;margin-top:10px"><button class="btn" id="tp-next">${i < 9 ? 'Next' : 'Finish'}</button></div>`;
        $('#tp-go', host).disabled = true; $('#tp-next', host).onclick = () => { i++; i < 10 ? render() : endScreen(score, '<p class="muted">10 points for exact, 8 within 2 °C, 5 within 5 °C, 2 within 10 °C.</p>'); }; };
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
