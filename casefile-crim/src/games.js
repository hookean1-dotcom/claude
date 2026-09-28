/* ==========================================================
   Arcade: fast, replayable games that drill case files, theories and key terms
   ========================================================== */
const GAMES = {
  casematch: { title: 'Name That Case', blurb: 'Read the case file, name the case, study or campaign. Sixty seconds on the clock.', skill: 'Case files · all units', col: '#4CC6D2' },
  principle: { title: 'Why It Matters', blurb: 'You get the name — choose why criminologists cite it.', skill: 'Significance of case files', col: '#F2C230' },
  theory: { title: 'Line-up', blurb: 'An explanation of a crime is in the frame. Pick the theory it belongs to.', skill: 'Unit 2 · theories', col: '#B596EE' },
  terms: { title: 'Jargon Buster', blurb: 'Match each specialist term to its meaning.', skill: 'Key terms', col: '#F07B72' },
  year: { title: 'Timeline', blurb: 'Slide to the year of the Act, case, study or report. Closer scores more.', skill: 'Dates and landmarks', col: '#F0A25E' },
  blitz: { title: 'True or False Blitz', blurb: 'True or false? Three lives, statements from across your course.', skill: 'Mixed recall', col: '#8AB4F0' }
};
const THEORY_BANK = [
  ['Criminals are born, not made: they have atavistic features such as a sloping forehead and large jaw.', 'Lombroso', 'Lombroso’s theory of the atavistic “born criminal” (1876).'],
  ['A muscular, athletic body type (mesomorph) is linked to aggression and delinquency.', 'Sheldon', 'Sheldon’s somatotypes (1949).'],
  ['An extra Y chromosome makes men more aggressive and more likely to be imprisoned.', 'Jacobs (XYY)', 'Jacobs et al. (1965) studied men in a secure hospital.'],
  ['Identical twins show higher concordance for criminality than non-identical twins.', 'Twin studies', 'Christiansen (1977) found about 35% concordance for male MZ twins and 13% for DZ twins.'],
  ['Adopted children’s criminality is more like their biological parents’ than their adoptive parents’.', 'Adoption studies', 'Mednick et al. (1984) studied over 14,000 Danish adoptees.'],
  ['Children copy aggression they see modelled, especially when it is rewarded.', 'Bandura (social learning)', 'Bobo doll experiment (1961).'],
  ['Crime is learned in intimate groups, including techniques and motives, when definitions favourable to law-breaking outweigh unfavourable ones.', 'Sutherland (differential association)', 'Sutherland (1939).'],
  ['High extraversion and neuroticism make people harder to condition, so they learn less from punishment.', 'Eysenck', 'Eysenck’s criminal personality theory (1964) — also psychoticism.'],
  ['A weak superego, caused by poor early relationships, leaves the id’s impulses unchecked.', 'Freud (psychodynamic)', 'Freud’s personality structure; Bowlby’s maternal deprivation (44 Thieves, 1944).'],
  ['Offenders are stuck at a lower stage of moral reasoning and put self-interest first.', 'Kohlberg', 'Kohlberg’s stages of moral development — criminals often at pre-conventional level.'],
  ['Crime is inevitable and even functional: it reinforces boundaries and brings social change.', 'Durkheim (functionalism)', 'Durkheim; also boundary maintenance and anomie.'],
  ['A gap between cultural goals (wealth) and legitimate means leads to innovation, ritualism, retreatism or rebellion.', 'Merton (strain)', 'Merton’s strain theory (1938).'],
  ['Working-class boys denied status at school form subcultures that invert mainstream values.', 'Cohen (status frustration)', 'Albert Cohen, Delinquent Boys (1955).'],
  ['Deviance is not a quality of the act but a label applied by others; a label can become a master status.', 'Becker (labelling)', 'Becker, Outsiders (1963).'],
  ['After being labelled, a person accepts the label and commits secondary deviance.', 'Lemert (labelling)', 'Primary and secondary deviance (1951).'],
  ['The law is made by and for the ruling class; the crimes of the powerful are under-policed.', 'Marxism', 'Chambliss; Snider; Gordon — selective enforcement.'],
  ['Relative deprivation, marginalisation and subculture explain working-class street crime.', 'Left realism', 'Lea and Young (1984), the “square of crime”.'],
  ['Crime is a rational choice; the answer is target hardening, zero tolerance and deterrence.', 'Right realism', 'Wilson; Clarke; Murray’s underclass.'],
  ['Visible disorder like a broken window signals no one cares and leads to more serious crime.', 'Broken windows', 'Wilson and Kelling (1982).'],
  ['Strong social bonds — attachment, commitment, involvement and belief — keep people from crime.', 'Hirschi (control theory)', 'Hirschi, Causes of Delinquency (1969).'],
  ['Media exaggeration of a group creates folk devils and a spiral of public concern.', 'Moral panic', 'Stan Cohen, Folk Devils and Moral Panics (1972), Mods and Rockers.'],
  ['Low levels of the enzyme MAOA were found in men from one Dutch family with a history of impulsive violence.', 'Brunner (genetics)', 'Brunner et al. (1993).'],
  ['PET scans of murderers showed reduced activity in the prefrontal cortex.', 'Raine (brain dysfunction)', 'Raine, Buchsbaum and LaCasse (1997).'],
  ['An underclass, dependent on welfare and without fathers, socialises children into crime.', 'Murray (underclass)', 'Charles Murray (1990) — a right realist view.'],
  ['Crime occurs when a motivated offender and a suitable target meet in the absence of a capable guardian.', 'Routine activity theory', 'Cohen and Felson (1979).']
];
const YEAR_BANK = [
  ['Police and Criminal Evidence Act (PACE)', 1984], ['Prosecution of Offences Act (creates the CPS)', 1985], ['Criminal Justice Act (double jeopardy exception, bad character)', 2003], ['Crime and Disorder Act (ASBOs)', 1998],
  ['Human Rights Act', 1998], ['Murder (Abolition of Death Penalty) Act', 1965], ['Sexual Offences Act (partial decriminalisation of homosexuality)', 1967], ['Abortion Act', 1967],
  ['Suicide Act (suicide no longer a crime)', 1961], ['Misuse of Drugs Act', 1971], ['Computer Misuse Act', 1990], ['Fraud Act', 2006], ['Serious Crime Act (coercive control offence)', 2015],
  ['Modern Slavery Act', 2015], ['Domestic Abuse Act', 2021], ['Corporate Manslaughter and Corporate Homicide Act', 2007], ['Firearms (Amendment) Act (handgun ban after Dunblane)', 1997],
  ['Murder of Stephen Lawrence', 1993], ['Macpherson Report', 1999], ['Murder of James Bulger', 1993], ['Murder of Sarah Payne', 2000], ['Soham murders', 2002],
  ['Colin Pitchfork — first conviction using DNA profiling', 1988], ['Birmingham Six released on appeal', 1991], ['Criminal Cases Review Commission begins work', 1997],
  ['Lombroso publishes L’uomo delinquente', 1876], ['Bandura’s Bobo doll experiment', 1961], ['Jacobs’ XYY study', 1965], ['Becker’s Outsiders (labelling)', 1963],
  ['Stan Cohen’s Folk Devils and Moral Panics', 1972], ['Merton’s strain theory', 1938], ['Wilson and Kelling’s “Broken Windows”', 1982], ['Packer’s two models of criminal justice', 1964],
  ['First British Crime Survey', 1982], ['Anti-social Behaviour, Crime and Policing Act (ASBOs replaced)', 2014], ['Police and Crime Commissioners first elected', 2012],
  ['National Crime Agency launched', 2013], ['Probation services brought back into public ownership', 2021], ['Sentencing Act (the Sentencing Code)', 2020], ['Voyeurism (Offences) Act — upskirting', 2019],
  ['Clare’s Law rolled out nationally', 2014], ['Sarah’s Law (Child Sex Offender Disclosure Scheme) rolled out nationally', 2011], ['Murder of Sarah Everard', 2021], ['Hillsborough disaster', 1989],
  ['Online Safety Act', 2023], ['Victims and Prisoners Act', 2024]
];
function gameBest(id, score) { S.games[id] ??= { best: 0, plays: 0 }; if (score != null) { S.games[id].plays++; if (score > S.games[id].best) { S.games[id].best = score; save(); return true; } save(); } return false; }
function drawGameArt(cv, id) {
  const c = cv.getContext('2d'), dpr = devicePixelRatio || 1, W = cv.clientWidth, H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; c.scale(dpr, dpr);
  c.fillStyle = '#141A26'; c.fillRect(0, 0, W, H);
  const col = GAMES[id].col; let seed = id.length * 97;
  const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  if (id === 'year') { for (let i = 0; i < 40; i++) { const x = 12 + i * (W - 24) / 40; c.fillStyle = hexA(col, i % 5 ? .25 : .7); c.fillRect(x, H - 44 - (i % 5 ? 6 : 14), 1.5, i % 5 ? 6 : 14); } }
  else if (id === 'theory') { for (let i = 0; i < 5; i++) { const x = W - 170 + i * 30; c.fillStyle = hexA(col, .18 + i * .1); c.fillRect(x, 16, 22, 56); c.beginPath(); c.arc(x + 11, 14, 9, 0, Math.PI * 2); c.fill(); } c.strokeStyle = hexA(col, .35); for (let y = 20; y < 76; y += 10) { c.beginPath(); c.moveTo(W - 180, y); c.lineTo(W - 10, y); c.stroke(); } }
  else for (let i = 0; i < 22; i++) { const w = 8 + rnd() * 8, hh = 34 + rnd() * 34, x = 10 + i * (W / 22); c.fillStyle = hexA(col, .15 + rnd() * .5); c.fillRect(x, H - 36 - hh, w, hh); c.fillStyle = hexA('#F2C230', .5); c.fillRect(x, H - 36 - hh + 5, w, 2); }
  c.fillStyle = '#F4F6FA'; c.font = '800 21px "Archivo", "Arial Narrow", sans-serif'; c.textBaseline = 'alphabetic'; c.fillText(GAMES[id].title, 14, H - 14);
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

  if (id === 'casematch' || id === 'principle' || id === 'terms' || id === 'theory') {
    let make;
    if (id === 'casematch') make = () => { const bank = caseBank(), c = pick(bank), same = shuffle(bank.filter(x => x !== c && x.c === c.c)); const others = (same.length >= 3 ? same : shuffle(bank.filter(x => x !== c))).slice(0, 3); return { prompt: c.f, eyebrow: `Which ${kindWord(c)}?`, ans: `<i class="cn">${esc(c.n)}</i> (${c.y})`, wrong: others.map(o => `<i class="cn">${esc(o.n)}</i> (${o.y})`), fb: c.p }; };
    if (id === 'principle') make = () => { const bank = caseBank(), c = pick(bank), same = shuffle(bank.filter(x => x !== c && x.a === c.a)); const others = (same.length >= 3 ? same : shuffle(bank.filter(x => x !== c))).slice(0, 3); return { prompt: `<i class="cn">${esc(c.n)}</i> (${c.y})`, eyebrow: 'Why does it matter?', ans: esc(c.p), wrong: others.map(o => esc(o.p)), fb: '' }; };
    if (id === 'terms') make = () => { const g = pick(GLOSSARY), others = shuffle(GLOSSARY.filter(x => x !== g)).slice(0, 3); return { prompt: `<b>${esc(g[0])}</b>`, eyebrow: 'What does it mean?', ans: esc(g[1]), wrong: others.map(o => esc(o[1])), fb: '' }; };
    if (id === 'theory') make = () => { const t = pick(THEORY_BANK), others = shuffle([...new Set(THEORY_BANK.map(x => x[1]))].filter(x => x !== t[1])).slice(0, 3); return { prompt: `“${esc(t[0])}”`, eyebrow: 'Which theory or theorist?', ans: esc(t[1]), wrong: others.map(esc), fb: t[2] }; };
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
        <input id="yr-in" type="range" min="1850" max="2026" step="1" value="1950" style="margin:14px 0" aria-label="Year"><div class="row" style="justify-content:center"><button class="btn sm" id="yr-m">−1</button><button class="btn primary" id="yr-go">Lock in</button><button class="btn sm" id="yr-p">+1</button></div><div id="yr-fb"></div></div></div>`;
      const inp = $('#yr-in', host); const upd = () => { $('#yr-out', host).textContent = inp.value; inp.style.setProperty('--p', ((+inp.value - 1850) / 176 * 100) + '%'); }; inp.oninput = upd; upd();
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
      $('#bz-fb', host).innerHTML = `<div class="explain"><b class="v ${ok ? 'good' : 'bad'}">${ok ? 'Correct' : 'Wrong'}</b> ${cur.truth ? 'That answer is right.' : 'The correct answer is: ' + rich(cur.q.o[0])} ${cur.q.x ? '<br><span class="muted">' + rich(cur.q.x) + '</span>' : ''}</div>`;
      setTimeout(() => { if (!alive) return; lives > 0 ? next() : endScreen(score); }, ok ? 900 : 2600);
    };
    const key = e => { if (!alive || !document.body.contains(host)) { removeEventListener('keydown', key); return; } if (e.key === 't' || e.key === 'T') answer(true); if (e.key === 'f' || e.key === 'F') answer(false); };
    addEventListener('keydown', key); next(); return () => { stop(); removeEventListener('keydown', key); };
  }
  return stop;
}
