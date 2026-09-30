/* ==========================================================
   Arcade: fast, replayable games that drill case law and key rules
   ========================================================== */
const GAMES = {
  casematch: { title: 'Name That Case', blurb: 'Read the facts, pick the case. Sixty seconds on the clock.', skill: 'Case recall · all areas', col: '#6CCB9C' },
  principle: { title: 'Ratio Rush', blurb: 'You get the case name — choose the legal principle it stands for.', skill: 'Legal principles', col: '#D9B45A' },
  binding: { title: 'Bound or Not?', blurb: 'Two courts. Is the earlier decision binding, persuasive, or can the court depart?', skill: 'Component 1 · precedent', col: '#7FA6EC' },
  latin: { title: 'Latin Lex', blurb: 'Match each Latin maxim or legal term to its meaning.', skill: 'Legal terminology', col: '#E57A8A' },
  year: { title: 'Year of the Act', blurb: 'Slide to the year of the statute or landmark case. Closer scores more.', skill: 'Statutes and landmarks', col: '#F29A5A' },
  blitz: { title: 'Objection! Blitz', blurb: 'True or false? Three lives, statements from across your course.', skill: 'Mixed recall', col: '#B395EE' }
};
const YEAR_BANK = [
  ['Donoghue v Stevenson', 1932], ['Caparo Industries v Dickman', 1990], ['Robinson v Chief Constable of West Yorkshire', 2018], ['Bolton v Stone', 1951], ['Nettleship v Weston', 1971],
  ['Bolam v Friern Hospital Management Committee', 1957], ['Paris v Stepney Borough Council', 1951], ['Barnett v Chelsea and Kensington HMC', 1969], ['The Wagon Mound (No 1)', 1961], ['Smith v Leech Brain', 1962],
  ['Law Reform (Contributory Negligence) Act', 1945], ['Froom v Butcher', 1976], ['Civil Procedure Rules', 1998], ['Arbitration Act', 1996], ['Legal Aid, Sentencing and Punishment of Offenders Act', 2012],
  ['Courts and Legal Services Act (conditional fees)', 1990], ['Practice Statement (Judicial Precedent)', 1966], ['Young v Bristol Aeroplane', 1944], ['British Railways Board v Herrington', 1972], ['Pepper v Hart', 1993],
  ['Offences Against the Person Act', 1861], ['Criminal Justice Act (common assault, s39)', 1988], ['R v Ireland; R v Burstow', 1997], ['R v Woollin', 1998], ['Juries Act', 1974],
  ['Police and Criminal Evidence Act', 1984], ['Sentencing Act (the Sentencing Code)', 2020], ['Parliament Act (first)', 1911], ['Statutory Instruments Act', 1946], ['European Communities Act', 1972],
  ['UK leaves the EU', 2020], ['Constitutional Reform Act', 2005], ['Law Commissions Act', 1965], ['Heydon’s Case', 1584], ['R v Secretary of State, ex p Factortame (No 2)', 1990],
  ['Retained EU Law (Revocation and Reform) Act', 2023], ['Associated Provincial Picture Houses v Wednesbury', 1948], ['Human Rights Act', 1998], ['Access to Justice Act', 1999], ['Criminal Justice Act (hearsay, double jeopardy)', 2003]
];
function gameBest(id, score) { S.games[id] ??= { best: 0, plays: 0 }; if (score != null) { S.games[id].plays++; if (score > S.games[id].best) { S.games[id].best = score; save(); return true; } save(); } return false; }
function drawGameArt(cv, id) {
  const c = cv.getContext('2d'), dpr = devicePixelRatio || 1, W = cv.clientWidth, H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; c.scale(dpr, dpr);
  c.fillStyle = '#162140'; c.fillRect(0, 0, W, H);
  const col = GAMES[id].col; let seed = id.length * 97;
  const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  if (id === 'year') { for (let i = 0; i < 40; i++) { const x = 12 + i * (W - 24) / 40; c.fillStyle = hexA(col, i % 5 ? .25 : .7); c.fillRect(x, H - 44 - (i % 5 ? 6 : 14), 1.5, i % 5 ? 6 : 14); } }
  else if (id === 'binding') { for (let i = 0; i < 5; i++) { c.fillStyle = hexA(col, .15 + i * .15); c.fillRect(W - 150 + i * 6, 14 + i * 14, 130 - i * 12, 10); } }
  else for (let i = 0; i < 22; i++) { const w = 8 + rnd() * 8, hh = 34 + rnd() * 34, x = 10 + i * (W / 22); c.fillStyle = hexA(col, .15 + rnd() * .5); c.fillRect(x, H - 36 - hh, w, hh); c.fillStyle = hexA('#F2B6CD', .5); c.fillRect(x, H - 36 - hh + 5, w, 2); }
  c.fillStyle = '#F4F6FB'; c.font = '700 20px "Source Serif 4", Georgia, serif'; c.textBaseline = 'alphabetic'; c.fillText(GAMES[id].title, 14, H - 14);
}
function mountGame(host, id) {
  let alive = true, timer = null; const stop = () => { alive = false; clearInterval(timer); };
  const hud = items => `<div class="game-hud">${items.map(([k, v]) => `<div class="hud"><span>${k}</span><b>${v}</b></div>`).join('')}<span class="spacer"></span><a class="btn sm" href="#/arcade">${ICON.back} Arcade</a></div>`;
  const endScreen = (score, extra = '') => {
    const nb = gameBest(id, score); if (score > 0) addXP(Math.min(60, Math.round(score / 2)), GAMES[id].title); if (nb && score > 0) { burst(); sfx.win(); }
    host.innerHTML = `<div class="game"><div class="card result"><div class="eyebrow">${GAMES[id].title}</div><div class="big">${score}</div><p class="lede" style="margin:8px auto">${nb ? 'New personal best!' : 'Personal best: ' + S.games[id].best}</p>${extra}<div class="row" style="justify-content:center;margin-top:14px"><button class="btn primary" data-again>Play again</button><a class="btn" href="#/arcade">Back to arcade</a></div></div></div>`;
    $('[data-again]', host).onclick = () => { stop(); cleanup = mountGame(host, id); };
  };
  let cleanup = stop;
  const caseBank = () => Object.values(CASES).filter(c => unitInScope(c.a));

  if (id === 'casematch' || id === 'principle' || id === 'latin' || id === 'binding') {
    let make;
    if (id === 'casematch') make = () => { const bank = caseBank(), c = pick(bank), same = shuffle(bank.filter(x => x !== c && x.a === c.a)); const others = (same.length >= 3 ? same : shuffle(bank.filter(x => x !== c))).slice(0, 3); return { prompt: c.f, eyebrow: 'Which case?', ans: `<i class="cn">${esc(c.n)}</i> (${c.y})`, wrong: others.map(o => `<i class="cn">${esc(o.n)}</i> (${o.y})`), fb: c.p }; };
    if (id === 'principle') make = () => { const bank = caseBank(), c = pick(bank), same = shuffle(bank.filter(x => x !== c && x.a === c.a)); const others = (same.length >= 3 ? same : shuffle(bank.filter(x => x !== c))).slice(0, 3); return { prompt: `<i class="cn">${esc(c.n)}</i> (${c.y})`, eyebrow: 'What does it decide?', ans: esc(c.p), wrong: others.map(o => esc(o.p)), fb: '' }; };
    if (id === 'latin') make = () => { const L = GLOSSARY.filter(x => x[2] === 'Latin'), g = pick(L), others = shuffle(L.filter(x => x !== g)).slice(0, 3); return { prompt: `<i class="cn">${esc(g[0])}</i>`, eyebrow: 'What does it mean?', ans: esc(g[1]), wrong: others.map(o => esc(o[1])), fb: '' }; };
    if (id === 'binding') make = () => { const ids = ['uksc', 'cacv', 'cacr', 'dc', 'hc', 'crown', 'county', 'mags']; const dec = pick(ids); const prev = pick(['uksc', 'cacv', 'cacr', 'dc', 'hc', 'jcpc', 'echr']); const [cls] = precedentRule(dec, prev); const nm = k => COURTS.find(c => c.id === k).n; const lab = { bind: 'Binding', pers: 'Persuasive only', free: dec === 'uksc' && prev === 'uksc' ? 'Can depart (Practice Statement)' : 'Not binding' }; const opts = ['Binding', 'Persuasive only', dec === 'uksc' && prev === 'uksc' ? 'Can depart (Practice Statement)' : 'Not binding']; return { prompt: `The <b>${nm(dec)}</b> is considering a precedent set by the <b>${nm(prev)}</b>.`, eyebrow: 'Is it binding?', ans: lab[cls], wrong: opts.filter(o => o !== lab[cls]), fb: precedentRule(dec, prev)[2] }; };
    const total = 60; let score = 0, streak = 0, left = total, cur, answered = 0, right = 0, locked = false;
    const next = () => { cur = make(); cur.opts = shuffle([cur.ans, ...cur.wrong]); locked = false; render(); };
    const render = () => {
      host.innerHTML = `<div class="game">${hud([['Score', score], ['Streak', streak], ['Time', Math.ceil(left) + 's']])}<div class="timer"><i style="width:${left / total * 100}%"></i></div>
        <div class="eyebrow" style="text-align:center">${cur.eyebrow}</div><div class="big-prompt">${cur.prompt}</div>
        <div class="opts">${cur.opts.map((o, i) => `<button class="opt" data-i="${i}"><span class="k">${i + 1}</span><span>${o}</span></button>`).join('')}</div><div id="gfb"></div><p class="kbd-hint">Keys 1–${cur.opts.length} to answer.</p></div>`;
      $$('.opt', host).forEach(b => b.onclick = () => choose(+b.dataset.i));
    };
    const choose = i => {
      if (!alive || locked) return; locked = true; answered++;
      const ok = cur.opts[i] === cur.ans, btns = $$('.opt', host);
      if (ok) { right++; streak++; score += 10 + Math.min(streak, 10) * 2; sfx.good(); btns[i].classList.add('right'); }
      else { streak = 0; left = Math.max(0, left - 3); sfx.bad(); btns[i].classList.add('wrong'); btns[cur.opts.indexOf(cur.ans)].classList.add('right'); if (cur.fb) $('#gfb', host).innerHTML = `<div class="explain small">${rich(cur.fb)}</div>`; }
      setTimeout(() => alive && left > 0 && next(), ok ? 350 : 2200);
    };
    const key = e => { if (!alive || !document.body.contains(host)) { removeEventListener('keydown', key); return; } const n = +e.key; if (n >= 1 && n <= (cur?.opts.length || 4)) choose(n - 1); };
    addEventListener('keydown', key);
    timer = setInterval(() => { left -= 0.1; const bar = $('.timer i', host); if (bar) bar.style.width = (left / total * 100) + '%'; const tb = $$('.hud b', host)[2]; if (tb) tb.textContent = Math.ceil(Math.max(0, left)) + 's'; if (left <= 0) { clearInterval(timer); removeEventListener('keydown', key); endScreen(score, `<p class="muted">${right} of ${answered} correct</p>`); } }, 100);
    next();
    return () => { stop(); removeEventListener('keydown', key); };
  }

  if (id === 'year') {
    const qs = shuffle(YEAR_BANK).slice(0, 10); let i = 0, score = 0;
    const render = () => {
      const q = qs[i];
      host.innerHTML = `<div class="game">${hud([['Round', (i + 1) + '/10'], ['Score', score]])}<div class="eyebrow" style="text-align:center">In which year?</div><div class="big-prompt"><i class="cn">${esc(q[0])}</i></div>
        <div class="card" style="text-align:center"><div style="font:700 56px var(--f-display)" id="yr-out">1950</div>
        <input id="yr-in" type="range" min="1500" max="2026" step="1" value="1950" style="margin:14px 0" aria-label="Year"><div class="row" style="justify-content:center"><button class="btn sm" id="yr-m">−1</button><button class="btn primary" id="yr-go">Lock in</button><button class="btn sm" id="yr-p">+1</button></div><div id="yr-fb"></div></div></div>`;
      const inp = $('#yr-in', host); const upd = () => { $('#yr-out', host).textContent = inp.value; inp.style.setProperty('--p', ((+inp.value - 1500) / 526 * 100) + '%'); }; inp.oninput = upd; upd();
      $('#yr-m', host).onclick = () => { inp.value = +inp.value - 1; upd(); }; $('#yr-p', host).onclick = () => { inp.value = +inp.value + 1; upd(); };
      $('#yr-go', host).onclick = () => {
        const d = Math.abs(+inp.value - q[1]), pts = d === 0 ? 10 : d <= 2 ? 8 : d <= 5 ? 5 : d <= 15 ? 2 : 0; score += pts; pts >= 5 ? sfx.good() : sfx.bad();
        $('#yr-fb', host).innerHTML = `<div class="explain" style="margin-top:14px"><b class="v ${pts >= 5 ? 'good' : 'bad'}">${pts ? '+' + pts : 'Off by ' + d + ' years'}</b> The answer is <b>${q[1]}</b>.</div><div class="row" style="justify-content:center;margin-top:10px"><button class="btn" id="yr-next">${i < 9 ? 'Next' : 'Finish'}</button></div>`;
        $('#yr-go', host).disabled = true; $('#yr-next', host).onclick = () => { i++; i < 10 ? render() : endScreen(score, '<p class="muted">10 points for exact, 8 within 2 years, 5 within 5, 2 within 15.</p>'); };
      };
    };
    render(); return stop;
  }

  if (id === 'blitz') {
    const pool = TOPICS.filter(t => unitInScope(t.unit)).flatMap(t => t.quiz.map(q => ({ q, t }))); let score = 0, lives = 3, cur;
    const next = () => { const { q, t } = pick(pool); const truth = Math.random() < 0.5; cur = { q, t, truth, opt: truth ? q.o[0] : pick(q.o.slice(1)) }; render(); };
    const render = () => {
      host.innerHTML = `<div class="game">${hud([['Score', score], ['Lives', '♥'.repeat(lives) || '0']])}<div class="card"><div class="eyebrow">${cur.t.id} · ${esc(cur.t.title)}</div><p class="q-text">${rich(cur.q.q)}</p><div class="box def" style="font-size:17px"><b class="lbl">Proposed answer</b><p>${rich(cur.opt)}</p></div>
      <div class="row" style="justify-content:center;gap:14px;margin-top:10px"><button class="btn primary" data-a="1" style="min-width:130px">True <kbd>T</kbd></button><button class="btn" data-a="0" style="min-width:130px">False <kbd>F</kbd></button></div><div id="bz-fb"></div></div></div>`;
      $$('[data-a]', host).forEach(b => b.onclick = () => answer(b.dataset.a === '1'));
    };
    const answer = a => {
      if ($('#bz-fb', host).innerHTML) return; const ok = a === cur.truth; ok ? (score += 10, sfx.good()) : (lives--, sfx.bad());
      $('#bz-fb', host).innerHTML = `<div class="explain"><b class="v ${ok ? 'good' : 'bad'}">${ok ? 'Sustained' : 'Overruled'}</b> ${cur.truth ? 'That answer is right.' : 'The correct answer is: ' + rich(cur.q.o[0])} ${cur.q.x ? '<br><span class="muted">' + rich(cur.q.x) + '</span>' : ''}</div>`;
      setTimeout(() => { if (!alive) return; lives > 0 ? next() : endScreen(score); }, ok ? 900 : 2600);
    };
    const key = e => { if (!alive || !document.body.contains(host)) { removeEventListener('keydown', key); return; } if (e.key === 't' || e.key === 'T') answer(true); if (e.key === 'f' || e.key === 'F') answer(false); };
    addEventListener('keydown', key); next(); return () => { stop(); removeEventListener('keydown', key); };
  }
  return stop;
}
