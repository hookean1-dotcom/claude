/* ==========================================================
   Explorations · Unit 1 psychology, skill acquisition, sport and society; NEA and skills tools
   ========================================================== */

/* ---- 1.10 Eysenck plotter ---- */
SIMS.eysenck = DS('Place a performer on Eysenck’s dimensions', 'Rate a performer (or yourself) on each statement. The dot shows where they sit on the extrovert–introvert and stable–neurotic dimensions. Remember: personality does not predict sporting success.', body => {
  const Q = [['Enjoys being the centre of attention', 'e'], ['Prefers training with a group', 'e'], ['Looks for excitement and risk', 'e'], ['Worries a lot before competition', 'n'], ['Mood changes quickly', 'n'], ['Stays calm after a mistake', 's']];
  body.innerHTML = `<div class="grid g2"><div>${Q.map((q, i) => dsRange('ey' + i, q[0], 1, 5, 1, 3, '')).join('')}</div><div id="ey-o"></div></div>`;
  dsWire(body, () => { const v = Q.map((_, i) => val(body, 'ey' + i)); const ex = (v[0] + v[1] + v[2] - 9) / 6, ne = (v[3] + v[4] + (6 - v[5]) - 9) / 6;
    const x = 150 + ex * 120, y = 150 - ne * 120, qd = ex >= 0 ? (ne >= 0 ? 'unstable extrovert' : 'stable extrovert') : (ne >= 0 ? 'unstable introvert' : 'stable introvert');
    const sport = { 'stable extrovert': 'team games, gross skills, leadership roles', 'unstable extrovert': 'fast, exciting activities — but may struggle with pressure', 'stable introvert': 'individual, closed, fine skills (golf, archery, distance running)', 'unstable introvert': 'self-paced activities; anxiety control is important' }[qd];
    $('#ey-o', body).innerHTML = `<svg viewBox="0 0 300 300" width="100%" style="max-width:300px"><line x1="20" y1="150" x2="280" y2="150" stroke="var(--ink)"/><line x1="150" y1="20" x2="150" y2="280" stroke="var(--ink)"/><text x="22" y="143" font-size="11" fill="var(--muted)">introvert</text><text x="278" y="143" font-size="11" text-anchor="end" fill="var(--muted)">extrovert</text><text x="156" y="30" font-size="11" fill="var(--muted)">neurotic</text><text x="156" y="276" font-size="11" fill="var(--muted)">stable</text><circle cx="${x}" cy="${y}" r="9" fill="var(--a2)"/></svg><p><b>${qd}</b> — often linked with ${sport}.</p>`; });
});

/* ---- 1.11 Arousal theories explorer ---- */
SIMS.arousal = {
  title: 'Arousal and performance', h: 350, noPlay: true,
  controls: [{ type: 'seg', id: 'th', label: 'Theory', value: 'iu', options: [['drive', 'drive'], ['iu', 'inverted-U'], ['cat', 'catastrophe']] }, { type: 'seg', id: 'sk', label: 'Skill / performer', value: 1, options: [[0, 'fine, complex / novice'], [1, 'mixed'], [2, 'gross, simple / expert']] }, { id: 'a', label: 'Arousal', min: 0, max: 100, step: 1, value: 45 }],
  readouts: ['Performance', 'Optimum arousal', 'State', 'Suggested technique'],
  note: 'Inverted-U: the optimum is lower for fine, complex skills and novices. Catastrophe: past the optimum with high cognitive anxiety performance collapses — reducing arousal slightly is not enough to recover.',
  opt(st) { return [30, 50, 68][+st.p.sk]; },
  perf(a, st) { const o = this.opt(st), th = st.p.th; if (th === 'drive') return +st.p.sk === 0 ? clamp(60 - a * 0.4, 0, 100) : clamp(10 + a * 0.85, 0, 100); if (th === 'iu') return clamp(100 - Math.pow((a - o) / (o > 50 ? 1.1 : 0.9), 2) / 30, 0, 100); return a <= o + 4 ? clamp(100 - Math.pow((a - o) / 1, 2) / 28, 0, 100) : 18; },
  draw(c, W, H, st, C) { const pl = CV.plot(c, C, { x: 60, y: 24, w: W - 90, h: H - 70 }, { xr: [0, 100], yr: [0, 105], xl: 'arousal', yl: 'performance', series: [{ f: a => this.perf(a, st), col: C.a2, w: 3 }], dots: [[st.p.a, this.perf(st.p.a, st), C.a1, 7]] });
    if (st.p.th !== 'drive') { const o = this.opt(st); CV.line(c, pl.X(o), pl.Y(0), pl.X(o), pl.Y(100), C.muted, 1, [4, 3]); CV.text(c, 'optimum', pl.X(o), pl.Y(0) - 10, C.muted, 11, 'center'); } },
  read(st) { const p = this.perf(st.p.a, st), o = this.opt(st), a = st.p.a; return [Math.round(p) + '%', st.p.th === 'drive' ? 'none — linear' : o + '', a < o - 12 ? 'under-aroused' : a > o + 12 ? (st.p.th === 'cat' ? 'catastrophe!' : 'over-aroused') : 'in the zone', a < o - 12 ? 'psych up: music, pep talk, goals' : a > o + 12 ? 'breathing, PMR, imagery, self-talk' : 'keep routine']; }
};

/* ---- 1.12 Achievement motivation ---- */
SIMS.achieve = {
  title: 'Achievement motivation: choosing a challenge', h: 320, noPlay: true,
  controls: [{ id: 'nach', label: 'Need to achieve (NAch)', min: 0, max: 10, step: 1, value: 7 }, { id: 'naf', label: 'Need to avoid failure (NAF)', min: 0, max: 10, step: 1, value: 3 }],
  readouts: ['Profile', 'Preferred task', 'Response to failure', 'Coaching tip'],
  note: 'Atkinson: tendency to approach = motive × probability of success × incentive (incentive = 1 − probability). High-NAch performers prefer about a 50:50 challenge; high-NAF performers pick very easy or impossible tasks.',
  draw(c, W, H, st, C) { const n = st.p.nach, f = st.p.naf, net = n - f;
    CV.plot(c, C, { x: 60, y: 24, w: W - 90, h: H - 70 }, { xr: [0, 1], yr: [-3, 3], xl: 'probability of success', yl: 'motivation to take part', series: [{ f: p => net * p * (1 - p) * 4 / 10 * 2.5, col: net >= 0 ? C.a3 : C.a1, w: 3 }, { pts: [[0, 0], [1, 0]], col: C.muted, w: 1 }] }); },
  read(st) { const net = st.p.nach - st.p.naf; return [net > 1 ? 'high NAch — approach' : net < -1 ? 'high NAF — avoidance' : 'mixed', net > 0 ? '≈ 50:50 challenge' : 'very easy or impossible tasks', net > 0 ? 'persists; attributes to effort' : 'gives up; fears evaluation', net > 0 ? 'set challenging goals' : 'early success, praise effort, attributional retraining']; }
};

/* ---- 1.13 Skill classifier ---- */
SIMS.classify = sorterSim('Open or closed? Skill classifier', 'Is each skill nearer the open or closed end of the environmental continuum? (Think: does the environment change and force decisions?)', ['Closed', 'Open'], [
  ['Free throw in basketball', 0, 'Stable environment, self-paced.'], ['Pass in a rugby attack', 1, 'Defenders move; decisions needed.'], ['Gymnastics vault', 0, 'Same apparatus, predictable.'], ['Dribbling past a defender', 1, 'Constantly changing situation.'],
  ['Golf putt', 0, 'Self-paced, stable (though the green varies slightly).'], ['Returning a serve in tennis', 1, 'Externally paced, unpredictable.'], ['Shot put', 0, 'Closed and self-paced.'], ['Tackle in football', 1, 'Opponent-dependent.'],
  ['Penalty flick in hockey', 0, 'Mostly closed — the keeper adds a little openness.'], ['Netball interception', 1, 'Reading the pass and the players.']
]);

/* ---- 1.14 Learning curves ---- */
SIMS.curves = {
  title: 'Learning curves and plateaus', h: 330, noPlay: true,
  controls: [{ type: 'seg', id: 'sh', label: 'Curve', value: 'neg', options: [['lin', 'linear'], ['pos', 'positive'], ['neg', 'negative'], ['pla', 'with plateau']] }, { id: 'n', label: 'Trials completed', min: 5, max: 60, step: 1, value: 40 }],
  readouts: ['Shape', 'Likely cause', 'Stage of learning', 'Coach’s response'],
  note: 'Performance fluctuates from trial to trial, so real curves are noisy. A plateau is a period with no improvement — not a decline.',
  f(t, sh) { t /= 60; return sh === 'lin' ? 10 + 80 * t : sh === 'pos' ? 10 + 80 * t * t : sh === 'neg' ? 10 + 80 * (1 - Math.exp(-t * 4)) : 10 + (t < 0.35 ? 150 * t : t < 0.6 ? 52 : 52 + 90 * (t - 0.6)); },
  init(st) { st.noise = Array.from({ length: 61 }, () => (Math.random() - .5) * 8); },
  draw(c, W, H, st, C) { const sh = st.p.sh, pts = []; for (let t = 0; t <= st.p.n; t++) pts.push([t, clamp(this.f(t, sh) + st.noise[t], 0, 100)]);
    CV.plot(c, C, { x: 60, y: 24, w: W - 90, h: H - 70 }, { xr: [0, 60], yr: [0, 100], xl: 'trials', yl: 'performance', series: [{ f: t => t <= st.p.n ? this.f(t, sh) : NaN, col: C.a3, w: 3 }], dots: pts.map(p => [p[0], p[1], hexA(C.a3, .5), 3]) }); },
  read(st) { return { lin: ['linear', 'steady practice, simple task', 'associative', 'keep variety'], pos: ['positive — slow then fast', 'complex task / low ability / low early motivation', 'cognitive → associative', 'demonstrations, part practice, praise'], neg: ['negative — fast then slow', 'simple task / high ability or motivation', 'associative → autonomous', 'new goals to avoid drive reduction'], pla: ['plateau', 'boredom, fatigue, limit of ability, drive reduction', 'moving between stages', 'vary practice, rest, new goals, rewards'] }[st.p.sh]; }
};

/* ---- 1.15 Practice methods chooser ---- */
SIMS.practice = DS('Choose the practice method', 'Set the characteristics of the skill and the learner — the tool recommends methods of practice, guidance and feedback, with reasons.', body => {
  body.innerHTML = `<div class="grid g2">${dsSelect('pr-org', 'Organisation', [['low', 'low (parts separate easily)'], ['high', 'high (parts closely linked)']], 'low')}${dsSelect('pr-env', 'Environment', [['closed', 'closed'], ['open', 'open']], 'closed')}${dsSelect('pr-cx', 'Difficulty', [['simple', 'simple'], ['complex', 'complex']], 'complex')}${dsSelect('pr-dg', 'Danger', [['no', 'not dangerous'], ['yes', 'dangerous']], 'no')}${dsSelect('pr-st', 'Stage of learning', [['cog', 'cognitive'], ['ass', 'associative'], ['aut', 'autonomous']], 'cog')}${dsSelect('pr-fit', 'Fitness / motivation', [['low', 'low'], ['high', 'high']], 'low')}</div><div id="pr-o" style="margin-top:12px"></div>`;
  dsWire(body, () => { const g = k => val(body, 'pr-' + k), out = [];
    out.push(g('org') === 'low' || g('cx') === 'complex' && g('st') === 'cog' ? ['Part / progressive part', 'sub-routines can be separated; reduces information overload'] : ['Whole', 'keeps flow and kinaesthesis for a high-organisation skill']);
    out.push(g('env') === 'open' ? ['Variable practice', 'builds a schema for changing situations'] : ['Fixed practice', 'grooves a consistent motor programme']);
    out.push(g('st') === 'cog' || g('dg') === 'yes' || g('fit') === 'low' || g('cx') === 'complex' ? ['Distributed practice', 'rest for recovery, feedback and mental rehearsal'] : ['Massed practice', 'efficient for fit, motivated, experienced learners']);
    out.push(g('st') === 'cog' ? [g('dg') === 'yes' ? 'Manual/mechanical + visual guidance' : 'Visual guidance (demonstrations)', 'builds a mental picture; safety'] : g('st') === 'ass' ? ['Visual and verbal guidance', 'refines technique'] : ['Verbal guidance', 'detailed technical/tactical points']);
    out.push(g('st') === 'cog' ? ['Extrinsic feedback, KR, positive', 'beginners cannot yet feel errors'] : g('st') === 'ass' ? ['KP + developing intrinsic feedback', 'kinaesthesis developing'] : ['Intrinsic feedback + KP', 'can detect and correct own errors']);
    $('#pr-o', body).innerHTML = `<div class="tbl"><table><tr><th>Recommendation</th><th>Why</th></tr>${out.map(r => `<tr><td><b>${r[0]}</b></td><td>${r[1]}</td></tr>`).join('')}</table></div><p class="small muted">Add mental rehearsal at every stage — to build a picture early, and to rehearse tactics and control arousal later.</p>`; });
});

/* ---- 1.16 Roles of sport sorter ---- */
SIMS.socroles = sorterSim('What role is sport playing?', 'Sort each example into the role of sport it best illustrates.', ['Social control', 'Socialisation', 'National identity', 'Government use'], [
  ['A late-night football scheme to cut anti-social behaviour on an estate', 0, 'Channels energy into rule-governed activity.'], ['Arnold using compulsory games to control boys at Rugby School', 0, 'Historical social control.'],
  ['A child learns to shake hands and respect the referee', 1, 'Learning norms and values.'], ['Teammates teach a new player the club’s traditions', 1, 'Secondary socialisation.'],
  ['Singing “Hen Wlad Fy Nhadau” before a Wales match', 2, 'Belonging and pride in the nation.'], ['Wales’s run to the Euro 2016 semi-final unites the country', 2, 'National identity.'],
  ['Funding elite sport to win Olympic medals', 3, 'Prestige / soft power.'], ['A Welsh Government campaign to reduce inactivity and NHS costs', 3, 'Health policy.']
]);

/* ---- 1.17 Timeline ---- */
SIMS.timeline = explorerSim('Emergence of modern sport: timeline', 'Key moments from the public schools to professional and political sport.', [
  ['1828', '<b>Thomas Arnold</b> becomes headmaster of Rugby School — reform and social control through games (stage 2).', 'public schools'],
  ['1845', 'Rugby School pupils write the first rules of their football game — early <b>codification</b>.', 'codification'],
  ['1848', '<b>Cambridge Rules</b> of football — old boys from different schools need common rules.', 'universities'],
  ['1863 · 1871 · 1881', 'The <b>FA</b>, the <b>RFU</b> and the <b>Welsh Rugby Union</b> are formed — national governing bodies.', 'rationalisation'],
  ['1885', 'Football legalises <b>professionalism</b> — gate money from urban spectators pays working-class players.', 'professionalism'],
  ['1894 · 1896', 'Pierre de Coubertin founds the <b>IOC</b>; the first modern Olympics in Athens — <b>Olympism</b> and amateurism.', 'Olympics'],
  ['1895', 'The <b>broken-time</b> dispute: northern clubs form the <b>Northern Union</b> (Rugby League from 1922).', 'rugby split'],
  ['1936', 'Berlin Olympics used as Nazi <b>propaganda</b>.', 'politics'],
  ['1962', 'Cricket abolishes the <b>Gentlemen v Players</b> distinction (from the 1963 season).', 'cricket'],
  ['1968', '<b>Black Power salute</b> — Tommie Smith and John Carlos in Mexico City.', 'protest'],
  ['1980 · 1984', '<b>Boycotts</b> of the Moscow and Los Angeles Olympics.', 'boycotts'],
  ['1995', 'Rugby union goes <b>open</b> (professional) — commercialisation accelerates.', 'commercialisation']
]);

/* ---- 1.18 Barriers sorter ---- */
SIMS.barriers = sorterSim('Barriers: opportunity, provision or esteem?', 'Classify each barrier to participation.', ['Opportunity', 'Provision', 'Esteem'], [
  ['Can’t afford club fees and kit', 0, 'Money limits the chance to take part.'], ['Shift work leaves no free time', 0, 'Time is an opportunity barrier.'], ['No bus to the leisure centre', 0, 'Access/transport.'],
  ['No wheelchair-accessible changing rooms', 1, 'Facilities not available.'], ['No girls’ team at the local club', 1, 'Programmes not provided.'], ['No coaches trained in adapted sport', 1, 'Staffing provision.'],
  ['Few role models who look like me', 2, 'Esteem — identification.'], ['Worried about how I look in sportswear', 2, 'Body image and confidence.'], ['Fear of racist abuse', 2, 'Feeling unwelcome.']
]);

/* ---- NEA: band marker ---- */
SIMS.bandmark = DS('Estimate your practical band', 'Rate yourself honestly on each assessment criterion (Unit 2 performer grid). The tool suggests a band using the “best fit” approach — your teacher makes the real judgement.', body => {
  const crit = ['Skills and techniques: consistency, precision, fluency', 'Strategies, tactics and compositional ideas', 'Physical fitness for the activity', 'Decision making'];
  body.innerHTML = `${crit.map((c, i) => dsSelect('bm' + i, c, [[1, 'poor / lacking'], [2, 'some / limited'], [3, 'good'], [4, 'excellent']], 3)).join('')}<div id="bm-o" style="margin-top:12px"></div>`;
  dsWire(body, () => { const v = crit.map((_, i) => +val(body, 'bm' + i)), avg = v.reduce((a, b) => a + b, 0) / 4, band = Math.round(avg), lo = [1, 7, 13, 19][band - 1], mark = Math.round(lo + (avg - band + 0.5) * 5);
    $('#bm-o', body).innerHTML = `<div class="row" style="align-items:baseline;gap:14px"><span style="font:800 44px var(--f-display)">BAND ${band}</span><span class="mono">≈ ${clamp(mark, lo, lo + 5)} / 24</span></div><p class="small muted">Best fit: decide the band first, then move up within it if some criteria reach the band above. To move up: ${v.map((x, i) => x < 4 ? crit[i].split(':')[0].toLowerCase() : null).filter(Boolean).join(', ') || 'maintain consistency under pressure'}.</p>`; });
});

/* ---- NEA: performance profile ---- */
SIMS.profile = DS('Performance profile', 'Rate yourself 1–10 on attributes for your activity and set the target level. The biggest gaps suggest SMART targets for your Personal Performance Profile.', body => {
  const attrs = ['Aerobic fitness', 'Speed', 'Power', 'Technique: main skill', 'Tactical awareness', 'Decision making', 'Concentration', 'Confidence'];
  body.innerHTML = `<div class="grid g2"><div>${attrs.map((a, i) => dsRange('pp' + i, a, 1, 10, 1, [6, 7, 5, 6, 5, 6, 7, 5][i], '')).join('')}</div><div><div id="pp-o"></div></div></div>`;
  dsWire(body, () => { const v = attrs.map((_, i) => val(body, 'pp' + i)), gaps = v.map((x, i) => [attrs[i], 9 - x]).sort((a, b) => b[1] - a[1]).slice(0, 2);
    $('#pp-o', body).innerHTML = starSVG(attrs.map(a => a.split(':')[0]), [{ v: attrs.map(() => 9), c: 'var(--muted)' }, { v, c: 'var(--a1)' }], 10, 300) + `<div class="box tip"><b class="lbl">Priorities</b><p>${gaps.map(g => `<b>${g[0]}</b> (gap ${g[1]})`).join(' and ')}. Turn each into a SMART target with a measurable test and a date.</p></div>`; });
});

/* ---- NEA: Investigative Research planner ---- */
SIMS.irplan = DS('Investigative Research checklist', 'Tick off each requirement as you plan. The marks for each stage are shown.', body => {
  const items = [['Stage 1 (6)', 'Initial analysis of my performance with quantitative data'], ['Stage 1 (6)', 'Clear area for improvement identified'], ['Stage 1 (6)', 'Research from a wide range of credible sources, referenced'],
    ['Stage 2 (8)', 'Evaluated the research and my initial analysis'], ['Stage 2 (8)', 'Evidence-based recommendations and a training plan (≥ 10 weeks)'], ['Stage 2 (8)', 'Valid and reliable methods (standardised tests, retests)'],
    ['Stage 3 (8)', 'Monitored the programme; explained changes'], ['Stage 3 (8)', 'Analysed performance and quantitative data after the programme'],
    ['Stage 4 (8)', 'Evaluated strengths and weaknesses of the programme (supervised)'], ['Stage 4 (8)', 'Recommendations drawing on all stages; specialist terms; accurate writing'], ['All', '2500–3500 words; bibliography']];
  S.irplan ??= {};
  const draw = () => { const done = items.filter((_, i) => S.irplan[i]).length; body.innerHTML = hbar('Progress', done, items.length, 'var(--a3)', `${done}/${items.length}`) + items.map((it, i) => `<label class="row" style="gap:8px;align-items:flex-start;margin:6px 0"><input type="checkbox" data-i="${i}" ${S.irplan[i] ? 'checked' : ''}> <span><span class="tag sm">${it[0]}</span> ${it[1]}</span></label>`).join('');
    $$('[data-i]', body).forEach(cb => cb.onchange = () => { S.irplan[cb.dataset.i] = cb.checked; save(); draw(); }); };
  draw();
});

/* ---- Skills: command words matcher ---- */
SIMS.commandw = sorterSim('Which assessment objective?', 'Sort each command word by the AO it mainly targets.', ['AO1 knowledge', 'AO2 application', 'AO3 analysis/evaluation'], [
  ['State', 0, 'Recall only.'], ['Define', 0, 'Precise meaning.'], ['Describe', 0, 'What happens.'], ['Identify', 0, 'Pick out.'], ['Explain', 1, 'Reasons applied.'], ['Apply', 1, 'Use in context.'], ['Calculate', 1, 'Use a formula.'], ['Suggest', 1, 'Apply to a new situation.'],
  ['Evaluate', 2, 'Judgement.'], ['Discuss', 2, 'Viewpoints and a conclusion.'], ['Analyse', 2, 'Break down and link.'], ['Justify', 2, 'Support a decision with evidence.']
]);

/* ---- Skills: band descriptor sorter ---- */
SIMS.bands = sorterSim('Which band is this answer?', 'Short descriptions of answers to “Evaluate plyometrics for a netballer (8 marks)”. Place each in the band it would most likely reach.', ['Band 1 (1–3)', 'Band 2 (4–6)', 'Band 3 (7–8)'], [
  ['Lists “bounding, box jumps, power” with no explanation', 0, 'Descriptive, no application.'], ['Explains the stretch–shortening cycle and gives netball examples, but no drawbacks', 1, 'Good knowledge and application, one-sided.'],
  ['Explains the SSC, applies to rebounding and interceptions, weighs injury risk and need for a strength base, and concludes it suits trained players in pre-season', 2, 'Thorough evaluation with a supported judgement.'],
  ['Says plyometrics are “good for jumping” and “can hurt your knees”', 0, 'Limited and undeveloped.'], ['Describes a session and mentions injury risk but reaches no conclusion', 1, 'Some evaluation, no judgement.'],
  ['Compares plyometrics with weight training for netball, uses technical terms accurately and justifies periodising both', 2, 'Synoptic, balanced, judged.']
]);

/* ---- Skills: graph plotter ---- */
SIMS.grapher = DS('Plot and read a graph', 'Enter data (up to 8 pairs). The tool plots it with labelled axes, and calculates the change, the percentage change and the mean — then describe the trend using the figures.', body => {
  body.innerHTML = `<div class="grid g2"><div><label class="small">x values (comma-separated)<input id="gr-x" type="text" class="ds-sel" value="0, 2, 4, 6, 8, 10"></label><label class="small">y values<input id="gr-y" type="text" class="ds-sel" value="72, 128, 150, 152, 151, 153"></label><label class="small">x label<input id="gr-xl" type="text" class="ds-sel" value="time (min)"></label><label class="small">y label<input id="gr-yl" type="text" class="ds-sel" value="heart rate (bpm)"></label></div><div id="gr-o"></div></div>`;
  dsWire(body, () => { const xs = val(body, 'gr-x').split(',').map(Number).filter(isFinite).slice(0, 8), ys = val(body, 'gr-y').split(',').map(Number).filter(isFinite).slice(0, xs.length);
    if (xs.length < 2 || ys.length < 2) { $('#gr-o', body).innerHTML = '<p class="muted">Enter at least two pairs.</p>'; return; }
    const n = Math.min(xs.length, ys.length), x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(0, Math.min(...ys)), y1 = Math.max(...ys) * 1.1, X = x => 50 + (x - x0) / (x1 - x0 || 1) * 240, Y = y => 190 - (y - y0) / (y1 - y0 || 1) * 170;
    let d = ''; for (let i = 0; i < n; i++) d += (i ? 'L' : 'M') + X(xs[i]) + ',' + Y(ys[i]);
    const mean = ys.slice(0, n).reduce((a, b) => a + b, 0) / n, ch = ys[n - 1] - ys[0], pc = ys[0] ? ch / ys[0] * 100 : 0;
    $('#gr-o', body).innerHTML = `<svg viewBox="0 0 320 230" width="100%"><line x1="50" y1="190" x2="300" y2="190" stroke="var(--ink)"/><line x1="50" y1="190" x2="50" y2="15" stroke="var(--ink)"/><path d="${d}" fill="none" stroke="var(--a1)" stroke-width="2.5"/>${xs.slice(0, n).map((x, i) => `<circle cx="${X(x)}" cy="${Y(ys[i])}" r="3.5" fill="var(--a1)"/>`).join('')}<text x="300" y="220" font-size="11" text-anchor="end" fill="var(--ink)">${esc(val(body, 'gr-xl'))}</text><text x="54" y="14" font-size="11" fill="var(--ink)">${esc(val(body, 'gr-yl'))}</text><text x="46" y="${Y(y1 / 1.1) + 4}" font-size="10" text-anchor="end" fill="var(--muted)">${Math.round(y1 / 1.1)}</text><text x="46" y="194" font-size="10" text-anchor="end" fill="var(--muted)">${Math.round(y0)}</text></svg>
      <div class="small">Change: <b>${sf(ch, 3)}</b> · % change: <b>${sf(pc, 3)}%</b> · mean: <b>${sf(mean, 3)}</b></div>`; });
});
