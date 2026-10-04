/* ==========================================================
   Explorations · Unit 3 psychology, skill acquisition, sport and society
   ========================================================== */

/* ---- 3.12 Attitude changer ---- */
SIMS.attitude = DS('Change an attitude: cognitive dissonance', 'Mia says: “Gym training is boring and pointless for netball.” Choose interventions for each component of the triadic model and see how much dissonance you create.', body => {
  const opts = { cog: [['0', 'none'], ['2', 'show her jump-test results improving'], ['1', 'hand her a leaflet']], aff: [['0', 'none'], ['2', 'music, friends, varied circuits she enjoys'], ['1', 'tell her it will be fun']], beh: [['0', 'none'], ['2', 'a netball-specific session she helps plan'], ['1', 'make attendance compulsory']], src: [['2', 'the respected team captain'], ['1', 'a PE teacher she doesn’t know'], ['0', 'an advert']] };
  body.innerHTML = `<div class="grid g2">${dsSelect('at-c', 'Cognitive (beliefs)', opts.cog, '0')}${dsSelect('at-a', 'Affective (feelings)', opts.aff, '0')}${dsSelect('at-b', 'Behavioural (actions)', opts.beh, '0')}${dsSelect('at-s', 'Persuader', opts.src, '1')}</div><div id="at-o" style="margin-top:12px"></div>`;
  dsWire(body, () => { const v = ['at-c', 'at-a', 'at-b', 'at-s'].map(k => +val(body, k)), d = v[0] + v[1] + v[2], score = Math.min(100, d * 12 + v[3] * 10 + (d >= 4 ? 10 : 0));
    $('#at-o', body).innerHTML = hbar('Dissonance created', d, 6, 'var(--a2)', d + '/6') + hbar('Chance attitude changes', score, 100, score > 65 ? 'var(--good)' : 'var(--warn)', score + '%') + `<p class="small">${score > 65 ? 'Strong: conflict across several components, delivered by a credible persuader, with new behaviour that is rewarded.' : 'Weak: create conflict in more than one component, and use a credible, respected persuader. Forcing behaviour (compulsory attendance) rarely changes feelings.'}</p>`; });
});

/* ---- 3.13 Aggression or assertion? ---- */
SIMS.aggress = sorterSim('Hostile, instrumental or assertive?', 'Classify each act. Ask: is there intent to harm? Is it within the rules? Is harm the goal or a means to a goal?', ['Hostile aggression', 'Instrumental aggression', 'Assertion'], [
  ['Punching an opponent after being fouled', 0, 'Intent to harm, anger, outside the rules.'], ['A boxer’s knockout punch', 1, 'Intent to harm as a means to win, within the rules.'], ['A hard but legal rugby tackle', 2, 'Forceful, legal, no intent to injure.'],
  ['Deliberately raking an opponent in a ruck to intimidate them', 1, 'Harm used as a tactic.'], ['Kicking an opponent while they are on the floor in anger', 0, 'Hostile.'], ['Blocking a shot in basketball with a strong, legal jump', 2, 'Assertive.'],
  ['A bouncer bowled to intimidate a batter', 1, 'Instrumental.'], ['Holding your ground firmly in a netball defence', 2, 'Assertive.']
]);

/* ---- 3.14 Audience effects ---- */
SIMS.audience = {
  title: 'Social facilitation: the audience effect', h: 320, noPlay: true,
  controls: [{ type: 'seg', id: 'exp', label: 'Performer', value: 0, options: [[0, 'novice'], [1, 'expert']] }, { type: 'seg', id: 'sk', label: 'Skill', value: 1, options: [[0, 'simple, gross'], [1, 'complex, fine']] }, { type: 'seg', id: 'ev', label: 'Audience', value: 1, options: [[0, 'none'], [1, 'passive crowd'], [2, 'expert evaluators (scouts)']] }],
  readouts: ['Arousal', 'Dominant response', 'Effect', 'Best explained by'],
  note: 'Zajonc: others raise arousal → dominant response. Evaluation apprehension: arousal is higher when the audience is judging. Distraction–conflict: complex tasks suffer from divided attention.',
  eff(st) { const ar = [20, 55, 80][+st.p.ev], good = +st.p.exp === 1, gross = +st.p.sk === 0; const base = good ? 75 : 45; return { ar, perf: clamp(base + (good ? 1 : -1) * ar * 0.3 + (gross ? 8 : -8) * ar / 60 - (!gross && +st.p.ev === 2 ? 10 : 0), 5, 100) }; },
  draw(c, W, H, st, C) { const e = this.eff(st), base = +st.p.exp ? 75 : 45; ['alone', 'with audience'].forEach((n, i) => { const v = i ? e.perf : base, x = 120 + i * 180; CV.rrect(c, x, H - 50 - v * 2.2, 90, v * 2.2, 8, i ? (v >= base ? C.good : C.bad) : C.muted); CV.text(c, n, x + 45, H - 30, C.ink, 12.5, 'center'); CV.text(c, Math.round(v) + '%', x + 45, H - 60 - v * 2.2, C.ink, 13, 'center', 700); });
    for (let i = 0; i < [0, 18, 30][+st.p.ev]; i++) CV.circle(c, W - 160 + (i % 6) * 22, 50 + Math.floor(i / 6) * 22, 8, hexA(C.a2, .5)); },
  read(st) { const e = this.eff(st), base = +st.p.exp ? 75 : 45; return [e.ar + '/100', +st.p.exp ? 'correct (well learned)' : 'likely incorrect', e.perf > base + 2 ? 'facilitation' : e.perf < base - 2 ? 'inhibition' : 'little change', +st.p.ev === 2 ? 'evaluation apprehension' : +st.p.sk === 1 ? 'distraction–conflict / drive theory' : 'Zajonc’s drive theory']; }
};

/* ---- 3.15 Ringelmann / social loafing ---- */
SIMS.loafing = {
  title: 'Ringelmann effect and social loafing', h: 330, noPlay: true,
  controls: [{ id: 'n', label: 'Group size', min: 1, max: 10, step: 1, value: 6 }, { type: 'seg', id: 'id', label: 'Individual effort identifiable?', value: 0, options: [[0, 'no'], [1, 'yes — stats, feedback, roles']] }],
  readouts: ['Potential productivity', 'Actual productivity', 'Coordination loss', 'Motivation loss'],
  note: 'Steiner: actual productivity = potential − losses from faulty processes. Making each person’s contribution identifiable reduces motivation losses; practice reduces coordination losses.',
  calc(st) { const n = st.p.n, co = (n - 1) * 3.2, mo = (n - 1) * (+st.p.id ? 1.2 : 4.5); return { pot: 100 * n, co: Math.min(40, co), mo: Math.min(45, mo), act: 100 * n * (1 - Math.min(40, co) / 100 - Math.min(45, mo) / 100) }; },
  draw(c, W, H, st, C) { const pts = [], pts2 = []; for (let n = 1; n <= 10; n++) { const s = { p: { n, id: st.p.id } }, r = this.calc(s); pts.push([n, r.act / n]); }
    CV.plot(c, C, { x: 60, y: 24, w: W - 90, h: H - 70 }, { xr: [1, 10], yr: [30, 105], xl: 'group size', yl: 'average effort per person (%)', series: [{ pts: [[1, 100], [10, 100]], col: C.muted, dash: [5, 4], w: 1.4 }, { pts, col: C.a2, w: 3 }], dots: [[st.p.n, this.calc(st).act / st.p.n, C.a1, 6]] }); },
  read(st) { const r = this.calc(st); return [r.pot + ' units', Math.round(r.act) + ' units', r.co.toFixed(0) + '%', r.mo.toFixed(0) + '%']; }
};

/* ---- 3.16 Leadership: Fiedler + style ---- */
SIMS.leader = DS('Leadership style selector', 'Describe the situation, the group and the leader. The tool applies Fiedler and Chelladurai to recommend a style.', body => {
  body.innerHTML = `<div class="grid g2">${dsSelect('ld-r', 'Leader–member relations', [['2', 'good'], ['0', 'poor']], '2')}${dsSelect('ld-t', 'Task structure', [['2', 'clear'], ['0', 'unclear']], '2')}${dsSelect('ld-p', 'Leader’s position power', [['2', 'strong'], ['0', 'weak']], '2')}${dsSelect('ld-x', 'Group', [['beg', 'beginners, large group'], ['exp', 'experienced, small group'], ['elite', 'elite, highly motivated']], 'beg')}${dsSelect('ld-s', 'Situation', [['time', 'time-out / danger'], ['plan', 'pre-season planning'], ['train', 'normal training']], 'train')}</div><div id="ld-o" style="margin-top:12px"></div>`;
  dsWire(body, () => { const fav = +val(body, 'ld-r') + +val(body, 'ld-t') + +val(body, 'ld-p'), g = val(body, 'ld-x'), s = val(body, 'ld-s');
    const fied = fav >= 5 || fav <= 1 ? 'task-oriented' : 'person-oriented', style = s === 'time' || g === 'beg' ? 'Autocratic' : g === 'elite' && s !== 'time' ? 'Laissez-faire (with support)' : 'Democratic';
    $('#ld-o', body).innerHTML = hbar('Situation favourableness', fav, 6, 'var(--a2)', ['very unfavourable', 'unfavourable', 'moderate', 'moderate', 'moderate', 'favourable', 'highly favourable'][fav]) + `<div class="tbl"><table><tr><td>Fiedler recommends</td><td><b>${fied}</b> leader</td></tr><tr><td>Suggested style</td><td><b>${style}</b></td></tr><tr><td>Chelladurai</td><td>check that the <b>required</b> (situation), <b>actual</b> and <b>preferred</b> (${g === 'beg' ? 'beginners usually want instruction' : 'experienced players prefer involvement'}) behaviours match</td></tr></table></div>`; });
});

/* ---- 3.17 Weiner's attribution grid ---- */
SIMS.weiner = sorterSim('Attribution sorter (Weiner)', 'Classify each reason a performer gives for a result.', ['Ability (internal, stable)', 'Effort (internal, unstable)', 'Task difficulty (external, stable)', 'Luck (external, unstable)'], [
  ['“I’m just a naturally good sprinter.”', 0, 'Innate ability.'], ['“I didn’t train hard enough this week.”', 1, 'Controllable effort.'], ['“They’re the best team in the league.”', 2, 'Strength of opposition.'], ['“The ball hit the post and went out.”', 3, 'Chance.'],
  ['“I’m not tall enough for netball.”', 0, 'Stable, internal.'], ['“We really dug in during the last ten minutes.”', 1, 'Effort.'], ['“The course was hillier than any we’ve run.”', 2, 'Task difficulty.'], ['“The referee made a terrible call.”', 3, 'External, unstable.']
]);

/* ---- 3.18 Information processing model walk-through ---- */
SIMS.ipmodel = explorerSim('Information processing: a goalkeeper facing a penalty', 'Step through Welford’s model for one real event.', [
  ['1 · Sensory input', 'Vision picks up the kicker’s run-up, hips and standing foot; hearing picks up the whistle and crowd; proprioception tells the keeper his body position on the line.'],
  ['2 · Perception (DCR)', '<b>Detection</b> of the run-up; <b>comparison</b> with penalties stored in the LTM; <b>recognition</b> — “open hips, he’s going to my left”. <b>Selective attention</b> ignores the crowd.'],
  ['3 · Memory', 'The STM (7 ± 2 items, ≈ 30 s) holds the cues; it is compared with the LTM, which stores this kicker’s habits (from video analysis) and the diving motor programme.'],
  ['4 · Decision making', 'Choose to dive left — a choice reaction; Hick’s law says more options (left, right, centre) means more time, so keepers anticipate.'],
  ['5 · Effector control and output', 'The motor programme for a low dive left is sent via motor nerves to the muscles; the keeper dives.'],
  ['6 · Feedback', '<b>Intrinsic</b>: feel of the dive. <b>Extrinsic</b>: the ball saved (KR), the coach’s comment on timing (KP). This updates the LTM for next time.']
]);

/* ---- 3.18 Memory: chunking test ---- */
SIMS.memory = DS('Memory span and chunking', 'A sequence of set-play calls flashes up. Recall it. Then try the same length grouped into chunks — the STM holds about 7 ± 2 items, but chunks count as single items.', body => {
  const CALLS = ['cross', 'loop', 'switch', 'post', 'drive', 'skip', 'screen', 'dummy', 'wrap', 'blitz'];
  let round = 0, seq = [], res = [];
  const start = () => { const n = 5 + round * 2, chunk = round >= 2; seq = shuffle(CALLS.concat(CALLS)).slice(0, n); const shown = chunk ? seq.map((w, i) => w + ((i + 1) % 3 === 0 && i < n - 1 ? ' | ' : ' · ')).join('') : seq.join(' · ');
    body.innerHTML = `<div class="card" style="text-align:center;font:700 22px var(--f-mono);padding:22px">${shown}</div><p class="small muted">Memorise… (${chunk ? 'grouped in threes' : 'no grouping'})</p>`;
    setTimeout(() => { if (!document.body.contains(body)) return; body.innerHTML = `<p>Type the calls in order, separated by spaces.</p><input id="mm-in" class="ds-sel" autocomplete="off"><div class="row" style="margin-top:8px"><button class="btn primary" id="mm-go">Check</button></div>`; $('#mm-in', body).focus(); $('#mm-go', body).onclick = check; }, 2600 + n * 500); };
  const check = () => { const ans = $('#mm-in', body).value.trim().toLowerCase().split(/[\s,·|]+/).filter(Boolean); let k = 0; while (k < seq.length && ans[k] === seq[k]) k++; res.push([seq.length, k, round >= 2]); round++;
    body.innerHTML = `<div class="tbl"><table><tr><th>Sequence length</th><th>Correct in order</th><th>Grouped?</th></tr>${res.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2] ? 'yes' : 'no'}</td></tr>`).join('')}</table></div>${round < 4 ? `<button class="btn primary" id="mm-next">Next sequence</button>` : `<p class="small">Most people recall about 7 ± 2 items; grouping (chunking) and meaningful calls help. Coaches chunk set plays into one call word.</p><button class="btn" id="mm-next">Start again</button>`}`;
    $('#mm-next', body).onclick = () => { if (round >= 4) { round = 0; res = []; } start(); }; };
  body.innerHTML = '<button class="btn primary" id="mm-s">Start</button>'; $('#mm-s', body).onclick = start;
});

/* ---- 3.19 Reaction time test (Hick's law) ---- */
SIMS.reaction = DS('Reaction time test: Hick’s law', 'Measure your own simple and choice reaction times. When a coloured target lights up, press the matching key (or tap it) as fast as you can. Five trials per condition; the graph plots your mean against the number of choices.', body => {
  const KEYS = ['f', 'j', 'd', 'k'], COLS = ['var(--a1)', 'var(--a3)', 'var(--a2)', 'var(--a4)'];
  let n = 1, trial = 0, t0 = 0, target = -1, times = {}, tm = null, waiting = false;
  const pads = () => `<div class="row" style="justify-content:center;gap:12px;margin:18px 0">${Array.from({ length: n }, (_, i) => `<button class="btn" data-p="${i}" style="width:84px;height:84px;border-radius:16px;font:800 20px var(--f-display);${i === target ? `background:${COLS[i]};color:#fff;border-color:${COLS[i]}` : ''}">${KEYS[i].toUpperCase()}</button>`).join('')}</div>`;
  const draw = msg => { body.innerHTML = `<div class="row" style="justify-content:space-between"><span class="pill">${n} choice${n > 1 ? 's' : ''} · trial ${Math.min(trial + 1, 5)}/5</span><span class="small muted">${msg || ''}</span></div>${pads()}${chart()}`;
    $$('[data-p]', body).forEach(b => b.onpointerdown = () => press(+b.dataset.p)); };
  const chart = () => { const ks = [1, 2, 4].filter(k => times[k]?.length); if (!ks.length) return ''; const pts = ks.map(k => [k, times[k].reduce((a, b) => a + b, 0) / times[k].length]);
    return `<div class="tbl"><table><tr><th>Choices</th><th>Mean reaction time</th></tr>${pts.map(p => `<tr><td>${p[0]}</td><td class="mono">${Math.round(p[1])} ms</td></tr>`).join('')}</table></div>`; };
  const arm = () => { target = -1; waiting = true; draw('wait for a target…'); clearTimeout(tm); tm = setTimeout(() => { target = Math.floor(Math.random() * n); t0 = performance.now(); waiting = false; draw('GO!'); }, 900 + Math.random() * 1800); };
  const press = i => { if (waiting) { clearTimeout(tm); draw('Too early! Wait for the colour.'); setTimeout(arm, 900); return; } if (target < 0) return; const rt = performance.now() - t0; if (i !== target) { draw('Wrong target — try again.'); setTimeout(arm, 900); return; }
    (times[n] ??= []).push(rt); trial++; target = -1; sfx.tick();
    if (trial >= 5) { trial = 0; n = n === 1 ? 2 : n === 2 ? 4 : 0; if (!n) { finish(); return; } draw(`Next: ${n} choices`); setTimeout(arm, 1200); } else { draw(Math.round(rt) + ' ms'); setTimeout(arm, 700); } };
  const key = e => { if (!document.body.contains(body)) { removeEventListener('keydown', key); return; } const i = KEYS.indexOf(e.key.toLowerCase()); if (i >= 0 && n && i < n) press(i); };
  const finish = () => { const m = k => times[k].reduce((a, b) => a + b, 0) / times[k].length; body.innerHTML = `${chart()}<p>Your choice reaction time rose from <b>${Math.round(m(1))} ms</b> (1 choice) to <b>${Math.round(m(4))} ms</b> (4 choices) — Hick’s law. Attackers create more choices (disguise) to slow defenders; defenders anticipate to reduce them.</p><button class="btn primary" id="rt-again">Test again</button>`; $('#rt-again', body).onclick = () => { n = 1; trial = 0; times = {}; arm(); }; };
  addEventListener('keydown', key);
  body.innerHTML = `<p>Use keys <b>F</b>, <b>J</b>, <b>D</b>, <b>K</b> or tap the pads. Don’t anticipate — an early press restarts the trial.</p><button class="btn primary" id="rt-go">Start</button>`; $('#rt-go', body).onclick = arm;
  return () => { clearTimeout(tm); removeEventListener('keydown', key); };
});

/* ---- 3.19 PRP ---- */
SIMS.prp = {
  title: 'The psychological refractory period', h: 300, noPlay: true,
  controls: [{ id: 'gap', label: 'Gap between dummy and real move (ms)', min: 0, max: 600, step: 10, value: 120 }, { id: 'proc', label: 'Defender’s processing time for S1 (ms)', min: 150, max: 350, step: 10, value: 220 }],
  readouts: ['Response to S2 starts at', 'PRP delay', 'Outcome', 'Why'],
  note: 'Single-channel hypothesis: the defender cannot start processing the real move (S2) until the dummy (S1) has been processed. A gap shorter than the processing time adds a delay — the PRP.',
  draw(c, W, H, st, C) { const g = st.p.gap, p = st.p.proc, delay = Math.max(0, p - g), sc = (W - 80) / 900, X = t => 40 + t * sc;
    CV.line(c, 40, H - 50, W - 40, H - 50, C.ink, 1.4); [0, 200, 400, 600, 800].forEach(t => CV.text(c, t + ' ms', X(t), H - 34, C.muted, 11, 'center'));
    CV.rrect(c, X(0), 70, p * sc, 30, 6, hexA(C.a2, .4)); CV.text(c, 'processing S1 (dummy)', X(0) + 6, 85, C.ink, 12);
    if (delay) { CV.rrect(c, X(g), 120, delay * sc, 30, 6, hexA(C.a4, .5)); CV.text(c, 'PRP', X(g) + 4, 135, C.ink, 12, 'left', 700); }
    CV.rrect(c, X(g + delay), 120, 220 * sc, 30, 6, hexA(C.a1, .4)); CV.text(c, 'processing S2', X(g + delay) + 6, 135, C.ink, 12);
    CV.arrow(c, X(g), 40, X(g), 118, C.a1, 2); CV.text(c, 'S2 real move', X(g), 30, C.a1, 12, 'center', 700); },
  read(st) { const g = st.p.gap, p = st.p.proc, delay = Math.max(0, p - g); return [(g + delay + 220) + ' ms', delay + ' ms', delay > 60 ? 'attacker gets past' : 'defender reacts in time', delay ? 'S2 arrived before S1 was processed' : 'gap too long — the dummy was “read”']; }
};

/* ---- 3.20 Deviance sorter ---- */
SIMS.deviance = sorterSim('Types of deviance and ethics', 'Classify each behaviour.', ['Sportsmanship', 'Gamesmanship', 'Under-conformity (negative deviance)', 'Over-conformity (positive deviance)'], [
  ['Kicking the ball out so an injured opponent can be treated', 0, 'Fair play.'], ['Time-wasting by taking ages over a throw-in', 1, 'Bends the spirit, not the letter, of the rules.'], ['Taking EPO before a race', 2, 'Rejects the rules — absolute deviance.'], ['Playing a final with a stress fracture', 3, 'Accepting risks and playing through pain.'],
  ['Walking in cricket when you know you edged it', 0, 'Sportsmanship.'], ['Sledging a batter to break concentration', 1, 'Gamesmanship.'], ['Match-fixing for a betting syndicate', 2, 'Cheating for gain.'], ['A gymnast dieting to an unhealthy weight', 3, 'Over-conformity to the sports ethic.']
]);

/* ---- 3.20 Doping control journey ---- */
SIMS.doping = explorerSim('Anti-doping: from whereabouts to sanction', 'How the WADA system catches and deters doping.', [
  ['Whereabouts', 'Elite athletes give a daily one-hour slot and location. <b>Three missed tests or filing failures in 12 months</b> = an anti-doping rule violation.'],
  ['Sample collection', 'In- and out-of-competition, no notice. A doping control officer witnesses the urine sample; blood may be taken. The sample is split into <b>A</b> and <b>B</b> bottles and sealed.'],
  ['Laboratory analysis', 'WADA-accredited labs test the A sample against the <b>Prohibited List</b> (updated every year). If positive, the athlete can request the B sample to be tested.'],
  ['Biological passport', 'Blood and steroid markers are tracked over time. Abnormal changes from the athlete’s own baseline can prove doping <b>indirectly</b>, even without finding the drug.'],
  ['Storage and retesting', 'Samples can be stored and <b>retested for up to 10 years</b> as methods improve — a strong deterrent.'],
  ['Sanctions', '<b>Strict liability</b>: the athlete is responsible for anything in their body. Bans are typically four years for a serious first offence; results and medals are removed; nations can be sanctioned.'],
  ['Education', 'UKAD and NGBs educate athletes and coaches, including about contaminated supplements (use batch-tested products).']
]);

/* ---- 3.21 Golden triangle ---- */
SIMS.triangle = DS('The golden triangle: follow the money', 'Adjust the size of the TV audience and see how money flows between sport, the media and sponsors. (Illustrative.)', body => {
  body.innerHTML = `${dsRange('gt-a', 'Audience (millions)', 1, 100, 1, 20, ' m')}${dsSelect('gt-s', 'Sport', [['1', 'Premier League football'], ['0.6', 'Six Nations rugby'], ['0.25', 'Women’s domestic league'], ['0.1', 'Minority sport']], '1')}<div id="gt-o" style="margin-top:10px"></div>`;
  dsWire(body, () => { const a = val(body, 'gt-a'), m = +val(body, 'gt-s'), ad = a * m * 4, rights = ad * 0.7, spons = a * m * 2.5;
    $('#gt-o', body).innerHTML = hbar('Advertising paid to media', ad, 400, 'var(--a4)', '£' + ad.toFixed(0) + 'm') + hbar('Rights paid to sport', rights, 400, 'var(--a1)', '£' + rights.toFixed(0) + 'm') + hbar('Sponsorship paid to sport', spons, 250, 'var(--a3)', '£' + spons.toFixed(0) + 'm') + `<p class="small">Bigger audiences attract advertisers and sponsors, so broadcasters pay more for rights — and sport gains money to improve the product. Sports with small audiences are caught in the opposite spiral, which is why media coverage matters for women’s and minority sport.</p>`; });
});

/* ---- 3.22 Globalisation explorer ---- */
SIMS.globe = explorerSim('Globalisation in action', 'Case studies of Cashmore’s three levels and their consequences.', [
  ['Premier League', 'Broadcast in almost every country; overseas rights now rival domestic rights. Kick-offs timed for Asian audiences; pre-season tours in the USA and Asia; global kit deals. Most players are from overseas — raising quality but limiting chances for home-grown players.', 'satellite + goods'],
  ['Indian Premier League', 'T20 franchise cricket with auctions of global stars, short prime-time matches, entertainment (Americanisation) and huge TV deals — players leave national duty for lucrative contracts.', 'competition'],
  ['African Cup of Nations', 'Global audiences follow players from European clubs; club v country conflicts over releasing players in mid-season.', 'migration'],
  ['Nike', 'From Blue Ribbon Sports (1964) to a global brand: Air Jordan (1984), “Just Do It” (1988), global endorsements and manufacturing in low-cost countries (sweatshop criticism).', 'goods market'],
  ['The Olympic Games', 'A global competition whose US TV rights shape event schedules (finals at US prime time) — local happenings shaped by distant events (Giddens).', 'competition + media']
]);

/* ---- 3.23 Sports development pyramid ---- */
SIMS.pyramid = DS('Climb the sports development pyramid', 'Choose a performer’s situation and see which level they are at, the nature of competition, and who supports them next.', body => {
  body.innerHTML = `${dsSelect('py-l', 'Situation', [['0', 'Year 3 pupil learning to throw and catch in PE'], ['1', 'Adult playing 5-a-side for fun and fitness'], ['2', 'U16 in a regional squad with weekly coaching'], ['3', 'Senior international on UK Sport funding']], '2')}<div id="py-o" style="margin-top:12px"></div>`;
  dsWire(body, () => { const l = +val(body, 'py-l'), L = [['Foundation', 'fun, informal, little competition', 'schools, Dragon Sport, parents', 'Sport Wales, schools'], ['Participation', 'recreational, friendly, local', 'clubs, leisure centres, parkrun', 'local authorities, Sport Wales'], ['Performance', 'organised leagues, selection, more commitment', 'NGB talent pathways, county/regional squads', 'NGBs; talent ID'], ['Excellence', 'intense, high-stakes, international', 'World Class Performance Pathway (Podium), UKSI support', 'UK Sport, UKSI, Sport Wales Institute']][l];
    $('#py-o', body).innerHTML = `<svg viewBox="0 0 320 180" width="100%" style="max-width:360px">${[3, 2, 1, 0].map((k, i) => `<polygon points="${160 - (30 + i * 40)},${10 + i * 40} ${160 + (30 + i * 40)},${10 + i * 40} ${160 + (70 + i * 40)},${48 + i * 40} ${160 - (70 + i * 40)},${48 + i * 40}" fill="var(--a4)" fill-opacity="${k === l ? .8 : .18}"/><text x="160" y="${34 + i * 40}" text-anchor="middle" font-size="11" fill="var(--ink)">${['Excellence', 'Performance', 'Participation', 'Foundation'][i]}</text>`).join('')}</svg>
      <div class="tbl"><table><tr><td>Level</td><td><b>${L[0]}</b></td></tr><tr><td>Competition</td><td>${L[1]}</td></tr><tr><td>Provision</td><td>${L[2]}</td></tr><tr><td>Key organisations</td><td>${L[3]}</td></tr></table></div>`; });
});

/* ---- Participation data explorer ---- */
const PART_DATA = { age: [['16–24', 60], ['25–34', 52], ['35–44', 46], ['45–54', 40], ['55–64', 33], ['65+', 25]], gender: [['boys (school)', 52], ['girls (school)', 44], ['men', 45], ['women', 36]], deprivation: [['least deprived', 55], ['2nd', 49], ['3rd', 44], ['4th', 39], ['most deprived', 32]] };
SIMS.partdata = DS('Interpret participation data', 'Illustrative participation rates (% taking part in sport regularly), in the style of Sport Wales survey data. Choose a breakdown, then practise describing and explaining the trend.', body => {
  body.innerHTML = `${dsSelect('pd-k', 'Breakdown', [['age', 'by age (adults)'], ['gender', 'by gender'], ['deprivation', 'by area deprivation']], 'age')}<div id="pd-o" style="margin-top:12px"></div>`;
  dsWire(body, () => { const k = val(body, 'pd-k'), d = PART_DATA[k], mx = Math.max(...d.map(x => x[1])), mn = Math.min(...d.map(x => x[1]));
    const exp = { age: 'work and family commitments, fewer organised opportunities after school, health and injury, fewer role models and provision for older people', gender: 'body image, stereotypes, fewer girls’ teams, less media coverage and fewer role models, family and caring roles', deprivation: 'cost of fees, kit and travel; poorer local facilities; less time and social capital; fewer school opportunities' }[k];
    $('#pd-o', body).innerHTML = d.map(([n, v]) => hbar(n, v, 70, 'var(--a4)', v + '%')).join('') + `<div class="box tip"><b class="lbl">Model answer</b><p><b>Describe:</b> participation ranges from ${mx}% to ${mn}% — a gap of ${mx - mn} percentage points. <b>Explain:</b> ${exp}. <b>Evaluate:</b> survey data are self-reported and show correlation, not cause.</p></div>`; });
});
