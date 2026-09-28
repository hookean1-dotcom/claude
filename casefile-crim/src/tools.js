/* ==========================================================
   Explore tools: three data-driven engines + bespoke tools
   - tree : a decision tree that walks the learner through the legal tests
   - sort : classify statements / facts into categories, then check
   - steps: a stepper through a process or timeline
   ========================================================== */
function toolShell(host, t, body) {
  host.innerHTML = `<div class="tool"><div class="tool-head"><div class="eyebrow">${esc(t.kind || 'Interactive')}</div><h3>${esc(t.title)}</h3>${t.intro ? `<p>${rich(t.intro)}</p>` : ''}</div><div class="tool-body">${body}</div></div>`;
  return $('.tool-body', host);
}

/* ---------- decision tree ---------- */
function mountTree(host, t) {
  let path = [t.start || 'start'];
  const render = () => {
    const body = toolShell(host, { ...t, kind: t.kind || 'Decision tree · apply the legal test' }, '<div class="tree-path" id="tp"></div><div class="row" style="margin-top:16px"><button class="btn sm" id="tr-reset">' + ICON.reset + ' Start again</button></div>');
    const tp = $('#tp', body);
    path.forEach((id, i) => {
      const n = t.nodes[id]; if (!n) return;
      if (n.end) {
        tp.insertAdjacentHTML('beforeend', `<div class="verdict ${n.tone || ''}"><div class="v">${rich(n.v)}</div><div>${rich(n.x || '')}</div>${n.cases ? `<p class="small" style="margin:8px 0 0">Authority: ${n.cases.map(c => caseChip(c)).join(', ')}</p>` : ''}</div>`);
        return;
      }
      const chosen = path[i + 1];
      const step = h('div', { class: 'tree-step' + (chosen ? ' done' : '') }, `<span class="dotn">${i + 1}</span><div><div class="tree-q">${rich(n.q)}</div>${n.help ? `<div class="tree-help">${rich(n.help)}</div>` : ''}<div class="tree-opts">${n.o.map(([lab, nx], k) => `<button class="pickb ${chosen && chosen === nx && path[i + 1] === nx && n._k === k ? 'on' : ''}" data-k="${k}" ${chosen ? 'disabled' : ''}>${rich(lab)}</button>`).join('')}</div></div>`);
      tp.append(step);
      $$('.pickb', step).forEach(b => b.onclick = () => { n._k = +b.dataset.k; path = path.slice(0, i + 1).concat(n.o[+b.dataset.k][1]); sfx.flip(); render(); if (t.nodes[path[path.length - 1]]?.end) sfx.gavel(); });
    });
    $('#tr-reset', body).onclick = () => { path = [t.start || 'start']; Object.values(t.nodes).forEach(n => delete n._k); render(); };
  };
  render();
}

/* ---------- sorter ---------- */
function mountSort(host, t) {
  let items = shuffle(t.items), ans = {}, checked = false;
  const render = () => {
    const body = toolShell(host, { ...t, kind: t.kind || 'Sorter · classify each one' }, `<div class="sort-list">${items.map((it, i) => {
      const cls = checked ? (ans[i] === it[1] ? 'ok' : 'no') : '';
      return `<div class="sort-row ${cls}"><div class="sort-t">${rich(it[0])}</div><div class="sort-b">${t.cats.map(c => `<button class="pickb ${ans[i] === c ? 'on' : ''}" data-i="${i}" data-c="${esc(c)}" ${checked ? 'disabled' : ''}>${esc(c)}</button>`).join('')}</div>${checked ? `<div class="sort-why">${ans[i] === it[1] ? '✓' : '✗ Answer: <b>' + esc(it[1]) + '</b>.'} ${rich(it[2] || '')}</div>` : ''}</div>`;
    }).join('')}</div><div class="row" style="margin-top:14px">${checked ? `<span class="pill ${score() === items.length ? 'good' : 'warn'}">${score()} / ${items.length} correct</span><button class="btn sm" id="so-again">${ICON.reset} Shuffle and try again</button>` : `<button class="btn primary sm" id="so-check">Check answers</button><span class="small muted">${Object.keys(ans).length} of ${items.length} sorted</span>`}</div>`);
    $$('.pickb', body).forEach(b => b.onclick = () => { ans[+b.dataset.i] = b.dataset.c; render(); });
    const ck = $('#so-check', body); if (ck) ck.onclick = () => { checked = true; const s = score(); if (s === items.length) { sfx.win(); addXP(15, 'Perfect sort'); } else sfx.gavel(); render(); };
    const ag = $('#so-again', body); if (ag) ag.onclick = () => { items = shuffle(t.items); ans = {}; checked = false; render(); };
  };
  const score = () => items.filter((it, i) => ans[i] === it[1]).length;
  render();
}

/* ---------- stepper ---------- */
function mountSteps(host, t) {
  let k = 0;
  const render = () => {
    const s = t.steps[k];
    const body = toolShell(host, { ...t, kind: t.kind || 'Step through the process' }, `<div class="stepper"><div class="rail">${t.steps.map((st, i) => `<button data-i="${i}" class="${i === k ? 'on' : i < k ? 'past' : ''}"><span class="n">${i + 1}</span><span>${esc(st.h)}</span></button>`).join('')}</div>
      <div class="pane"><div class="eyebrow">Stage ${k + 1} of ${t.steps.length}</div><h4>${esc(s.h)}</h4><div class="notes" style="max-width:none">${rich(s.html)}</div>
      <div class="row" style="margin-top:14px"><button class="btn sm" id="st-prev" ${k ? '' : 'disabled'}>${ICON.back} Back</button><button class="btn sm primary" id="st-next" ${k < t.steps.length - 1 ? '' : 'disabled'}>Next ${ICON.arrow}</button></div></div></div>`);
    $$('.rail button', body).forEach(b => b.onclick = () => { k = +b.dataset.i; render(); });
    $('#st-prev', body).onclick = () => { k--; render(); };
    $('#st-next', body).onclick = () => { k++; sfx.flip(); render(); };
  };
  render();
}

/* ---------- bespoke: PACE detention clock ---------- */
function mountDetention(host) {
  let hrs = 20, indictable = true, terror = false;
  const render = () => {
    const stages = terror ? [[0, 'Arrest under s41 Terrorism Act 2000', 'Review by a senior officer at least every 12 hours.'], [48, 'Police may hold for up to 48 hours', 'Then a warrant of further detention is needed from a judge.'], [336, 'Maximum 14 days', 'Judge may extend in stages up to 14 days in total (Protection of Freedoms Act 2012 cut this from 28 days).']]
      : [[0, 'Arrival at the police station (s41 PACE)', 'The custody clock starts. Custody officer decides whether there is enough evidence to charge or whether detention is necessary. Rights read: legal advice (s58), someone informed (s56), codes of practice (Code C).'], [6, 'First review by inspector', 'Review of detention within 6 hours, then every 9 hours (s40).'], [24, 'Basic limit: 24 hours', 'Must be charged or released (s41) unless extended.'], ...(indictable ? [[36, 'Superintendent extension to 36 hours', 'For an indictable offence, if needed to secure or obtain evidence and the investigation is being conducted diligently (s42).'], [96, 'Magistrates’ warrant: maximum 96 hours', 'Magistrates’ court can issue a warrant of further detention up to 96 hours in total (ss43–44). The suspect is entitled to be legally represented at the hearing.']] : [])];
    const max = stages[stages.length - 1][0];
    const cur = stages.filter(s => s[0] <= hrs).pop();
    const lawful = hrs <= max;
    const body = toolShell(host, { kind: 'Interactive · police powers', title: 'The detention clock', intro: 'How long can the police hold a suspect without charge? Drag the clock and change the type of offence.' },
      `<div class="ds-grid"><div><div class="ctl"><label for="dc-h">Hours since arrival at the station <output>${hrs} h</output></label><input id="dc-h" type="range" min="0" max="${terror ? 340 : 100}" step="1" value="${hrs}" style="--p:${hrs / (terror ? 340 : 100) * 100}%"></div>
      <div class="ctl"><label>Offence</label><div class="seg" id="dc-t"><button data-k="s" class="${!indictable && !terror ? 'on' : ''}">Summary</button><button data-k="i" class="${indictable && !terror ? 'on' : ''}">Indictable</button><button data-k="t" class="${terror ? 'on' : ''}">Terrorism</button></div></div>
      <div class="verdict ${lawful ? 'good' : 'bad'}"><div class="v">${lawful ? 'Detention can be lawful' : 'Must be charged or released'}</div><div class="small">${lawful ? esc(cur[1]) + '. ' + esc(cur[2]) : 'Detention beyond the maximum is unlawful: the suspect could sue for <b>false imprisonment</b>, and any evidence obtained may be excluded (s78 PACE).'}</div></div></div>
      <div class="ladder">${stages.map(s => `<div class="rung ${s === cur && lawful ? 'on' : ''}"><span class="lv">${s[0]} h</span><span>${esc(s[1])}<br><span class="small muted" style="font-weight:400">${esc(s[2])}</span></span><span></span></div>`).join('')}</div></div>`);
    $('#dc-h', body).oninput = e => { hrs = +e.target.value; render(); $('#dc-h', host).focus(); };
    $$('#dc-t button', body).forEach(b => b.onclick = () => { indictable = b.dataset.k !== 's'; terror = b.dataset.k === 't'; hrs = Math.min(hrs, terror ? 340 : 100); render(); });
  };
  render();
}

/* ---------- bespoke: guilty plea sentence credit ---------- */
function mountPlea(host) {
  let months = 36, stage = 0;
  const STAGES = [['First stage of proceedings', 1 / 3, 'Plea indicated at the first hearing (usually the magistrates’ court).'], ['After the first stage', 1 / 4, 'Maximum one-quarter reduction if the plea is entered after the first stage but before trial.'], ['On the day of trial', 1 / 10, 'Reduced to one-tenth on the first day of trial, and can be decreased further, even to zero, during the trial.']];
  const render = () => {
    const [lab, f, x] = STAGES[stage], after = Math.round(months * (1 - f) * 10) / 10;
    const body = toolShell(host, { kind: 'Interactive · sentencing', title: 'Credit for a guilty plea', intro: 'Section 73 Sentencing Act 2020 requires courts to take a guilty plea into account. The Sentencing Council’s guideline sets a sliding scale: the earlier the plea, the bigger the reduction.' },
      `<div class="ds-grid"><div><div class="ctl"><label for="pl-m">Sentence after trial <output>${months} months</output></label><input id="pl-m" type="range" min="6" max="120" step="1" value="${months}" style="--p:${(months - 6) / 1.14}%"></div>
      <div class="ctl"><label>When is the guilty plea entered?</label><div class="stack" id="pl-s">${STAGES.map((s, i) => `<button class="pickb ${i === stage ? 'on' : ''}" data-i="${i}">${s[0]} · up to ${Math.round(s[1] * 100)}%</button>`).join('')}</div></div></div>
      <div><div class="readouts"><div class="ro"><span>Sentence after trial</span><b>${months} months</b></div><div class="ro"><span>Reduction</span><b>${Math.round(f * 100)}%</b></div><div class="ro"><span>Sentence with plea</span><b>${after} months</b></div></div>
      <p class="small" style="margin-top:12px">${esc(x)}</p><div class="box def"><b class="lbl">Why give credit?</b><p class="small">A guilty plea spares victims and witnesses from giving evidence, saves court time and public money, and gives certainty. Critics say it pressures innocent defendants to plead guilty.</p></div></div></div>`);
    $('#pl-m', body).oninput = e => { months = +e.target.value; render(); $('#pl-m', host).focus(); };
    $$('#pl-s button', body).forEach(b => b.onclick = () => { stage = +b.dataset.i; sfx.flip(); render(); });
  };
  render();
}


/* ---------- bespoke: attrition funnel (the justice gap) ---------- */
const FUNNEL_PRESETS = {
  all: ['All CSEW crime', 40, 85, 7, 85, 'Roughly four in ten incidents measured by the Crime Survey are reported to the police. Home Office outcome data show only a small share of recorded crimes lead to a charge or summons.'],
  rape: ['Rape and assault by penetration', 16, 85, 3, 70, 'CSEW estimates suggest fewer than one in six adult victims tell the police. Charge rates for recorded rape have been very low, which prompted the 2021 End-to-End Rape Review and Operation Soteria.'],
  domestic: ['Domestic abuse', 20, 80, 8, 78, 'Many victims do not report because of fear, shame, financial dependence or not recognising coercive control as a crime (Serious Crime Act 2015 s76).'],
  fraud: ['Fraud and computer misuse', 14, 90, 1, 85, 'Fraud is now one of the most common crimes in the CSEW, yet few victims report it and very few cases lead to a charge. Offenders are often abroad.'],
  hate: ['Hate crime', 50, 80, 10, 80, 'Around half of hate crime incidents are estimated to reach the police. Victims may expect nothing to happen or fear repeat victimisation.']
};
function mountFunnel(host) {
  let key = 'all', v = FUNNEL_PRESETS.all.slice(1, 5);
  const render = () => {
    const N = 1000, rep = N * v[0] / 100, rec = rep * v[1] / 100, chg = rec * v[2] / 100, conv = chg * v[3] / 100;
    const rows = [['Crimes experienced', N, 'Measured by victim surveys like the CSEW — includes the dark figure.'], ['Reported to police', rep, 'Victims or witnesses tell the police.'], ['Recorded by police', rec, 'Home Office Counting Rules; the National Crime Recording Standard.'], ['Charged or summonsed', chg, 'CPS Full Code Test: evidential and public interest stages.'], ['Convicted', conv, 'Guilty plea or verdict at the magistrates’ court or Crown Court.']];
    const body = toolShell(host, { kind: 'Interactive · the dark figure of crime', title: 'The attrition funnel', intro: 'Follow 1,000 crimes from the moment they happen to conviction. Choose a crime type or drag the sliders to see where cases drop out. The starting values are <b>rough, rounded estimates</b> from recent CSEW and Home Office publications, so treat them as illustrations rather than exact statistics.' },
      `<div class="ds-grid"><div>
      <div class="ctl"><label>Crime type</label><div class="stack" id="fn-k">${Object.entries(FUNNEL_PRESETS).map(([k, p]) => `<button class="pickb ${k === key ? 'on' : ''}" data-k="${k}">${esc(p[0])}</button>`).join('')}</div></div>
      ${[['Reported to police', 0], ['Of those, recorded', 1], ['Of those, charged', 2], ['Of those, convicted', 3]].map(([l, i]) => `<div class="ctl"><label for="fn-${i}">${l} <output>${v[i]}%</output></label><input id="fn-${i}" type="range" min="0" max="100" value="${v[i]}" style="--p:${v[i]}%"></div>`).join('')}
      </div><div>
      <div class="funnel">${rows.map(([l, n, x], i) => `<div class="fn-row"><div class="fn-l"><b>${l}</b><span>${x}</span></div><div class="fn-track"><i style="width:${Math.max(.6, n / N * 100)}%;opacity:${1 - i * .12}"></i><output>${Math.round(n).toLocaleString('en-GB')}</output></div></div>`).join('')}</div>
      <div class="box warn" style="margin-top:12px"><b class="lbl">What this means</b><p class="small">${esc(FUNNEL_PRESETS[key][5])} Out of 1,000 crimes, about <b>${Math.round(N - rep).toLocaleString('en-GB')}</b> never reach the police — this is the <b>dark figure</b>. Only about <b>${Math.round(conv)}</b> end in a conviction (${(conv / N * 100).toFixed(1)}%).</p></div></div></div>`);
    $$('#fn-k button', body).forEach(b => b.onclick = () => { key = b.dataset.k; v = FUNNEL_PRESETS[key].slice(1, 5); sfx.flip(); render(); });
    [0, 1, 2, 3].forEach(i => { $('#fn-' + i, body).oninput = e => { v[i] = +e.target.value; render(); $('#fn-' + i, host).focus(); }; });
  };
  render();
}

/* ---------- bespoke: campaign planner (Unit 1 AC3.1) ---------- */
const PLAN_FIELDS = [
  ['aim', 'Aim', 'What is the one change you want? (awareness, attitude, reporting behaviour, law, policy, funding, agency priorities)', 'e.g. Increase reporting of hate crime against disabled people in our town'],
  ['obj', 'SMART objectives', 'Specific, measurable, achievable, realistic, time-bound', 'e.g. Increase third-party reports to the local hate crime centre by 20% within six months'],
  ['just', 'Justification', 'Why this crime? Use evidence — statistics, cases, the reasons it goes unreported', 'e.g. Fiona Pilkington case; CSEW shows about half of hate crime incidents go unreported'],
  ['aud', 'Target audience', 'Who exactly? Age, location, where they get information', 'e.g. Disabled adults, carers and support workers; 16–25s who witness incidents'],
  ['meth', 'Methods', 'Which media and why? Link to what worked in the campaigns you compared', 'e.g. Instagram and TikTok short videos; leaflets in GP surgeries; a launch event with the PCSO'],
  ['mat', 'Materials', 'What you will design: leaflets, posters, a social media page, an advert, a blog', 'e.g. A5 leaflet, A3 poster, three 30-second videos, a pledge card'],
  ['fin', 'Finances', 'Costed budget; sources of funding', 'e.g. Printing £120; boosted posts £200; funding from the Police and Crime Commissioner’s community fund'],
  ['res', 'Resources', 'People, venues, equipment, partner agencies', 'e.g. Victim Support volunteer, community hall, projector, local radio slot']
];
function mountPlanner(host) {
  S.plan ??= { f: {}, steps: [['Research and gather statistics', 1, 2], ['Design and test materials', 3, 4], ['Launch event and social media', 5, 5], ['Run campaign and monitor', 6, 12], ['Evaluate against objectives', 13, 14]] };
  const P = S.plan;
  const render = () => {
    const done = PLAN_FIELDS.filter(([k]) => (P.f[k] || '').trim().length > 15).length + (P.steps.length >= 4 ? 1 : 0), tot = PLAN_FIELDS.length + 1;
    const band = done >= tot ? 'Band 3 (8–10): detailed plan with clearly described actions in a relevant time sequence — if the detail is good' : done >= 5 ? 'Band 2 (4–7): some appropriate actions in a relevant time sequence' : 'Band 1 (1–3): limited detail; actions and time only briefly outlined';
    const wk = Math.max(8, ...P.steps.map(s => +s[2] || 0));
    const body = toolShell(host, { kind: 'Planner · Unit 1 AC3.1', title: 'Campaign planner', intro: 'Use the headings from the specification to draft a campaign plan. Everything is saved in this browser. Use it for practice: in the real controlled assessment you must produce your plan under supervision.' },
      `<div class="plan-grid">${PLAN_FIELDS.map(([k, l, help, ph]) => `<label class="plan-f"><b>${l}</b><span class="small muted">${help}</span><textarea data-k="${k}" rows="3" placeholder="${esc(ph)}">${esc(P.f[k] || '')}</textarea></label>`).join('')}</div>
      <h4 style="margin:18px 0 8px">Timescale</h4>
      <div class="gantt">${P.steps.map((s, i) => `<div class="g-row"><input class="inp" data-s="${i}" data-j="0" value="${esc(s[0])}" aria-label="Action ${i + 1}"><input class="inp g-n" type="number" min="1" max="52" data-s="${i}" data-j="1" value="${s[1]}" aria-label="Start week"><input class="inp g-n" type="number" min="1" max="52" data-s="${i}" data-j="2" value="${s[2]}" aria-label="End week"><div class="g-bar"><i style="left:${(s[1] - 1) / wk * 100}%;width:${Math.max(1, s[2] - s[1] + 1) / wk * 100}%"></i></div><button class="btn sm ghost" data-del="${i}" aria-label="Remove">✕</button></div>`).join('')}
      <div class="row"><button class="btn sm" id="pl-add">+ Add action</button><span class="small muted">Start and end week for each action</span></div></div>
      <div class="verdict ${done >= tot ? 'good' : done >= 5 ? 'mid' : 'bad'}" style="margin-top:14px"><div class="eyebrow">${done} of ${tot} sections drafted</div><div class="v" style="font-size:18px">${band}</div><div class="small">The mark depends on the quality, not just the number of sections. Moderators look for a plan that is <b>relevant to the assignment brief</b>, has clearly described actions in a sensible order, and is realistic about money and time.</div></div>`);
    $$('textarea[data-k]', body).forEach(t => t.oninput = () => { P.f[t.dataset.k] = t.value; save(); });
    $$('textarea[data-k]', body).forEach(t => t.onblur = () => render());
    $$('input[data-s]', body).forEach(inp => inp.onchange = () => { const s = P.steps[+inp.dataset.s], j = +inp.dataset.j; s[j] = j ? clamp(+inp.value || 1, 1, 52) : inp.value; if (s[2] < s[1]) s[2] = s[1]; save(); render(); });
    $$('[data-del]', body).forEach(b => b.onclick = () => { P.steps.splice(+b.dataset.del, 1); save(); render(); });
    $('#pl-add', body).onclick = () => { const last = P.steps[P.steps.length - 1]; P.steps.push(['New action', last ? last[2] + 1 : 1, last ? last[2] + 2 : 2]); save(); render(); };
  };
  render();
}

/* ---------- bespoke: which aims does this sentence meet? (Unit 4 AC2.3) ---------- */
const AIMS = ['Retribution', 'Rehabilitation', 'Deterrence', 'Public protection', 'Reparation'];
const SENTENCES = [
  ['Immediate custody', [3, 1, 2, 3, 0], 'Imprisonment is the strongest retribution and protects the public while the offender is inside. But Ministry of Justice figures show that roughly a third of adults released from custody are proven to reoffend within a year, and over half of those who served under 12 months, so its deterrent and rehabilitative effect is weak. Overcrowding limits education and offending-behaviour courses.'],
  ['Suspended sentence order', [1, 2, 2, 1, 1], 'A prison sentence that is not served unless the offender breaches it or reoffends: a “sword of Damocles” that aims at individual deterrence. It can include community requirements such as unpaid work or a rehabilitation activity.'],
  ['Community order', [1, 3, 1, 2, 2], 'Combines requirements such as unpaid work (reparation), drug or alcohol treatment and mental health treatment (rehabilitation), curfews and electronic tagging (protection). Reoffending rates are lower than for short prison sentences with similar offenders.'],
  ['Fine', [2, 0, 2, 0, 1], 'Punishes proportionately and is cheap to run. It deters some people, but it does nothing to rehabilitate or protect. Its impact depends on wealth, which is why fines are set by bands of weekly income.'],
  ['Conditional discharge', [0, 1, 2, 0, 0], 'No punishment now, provided the offender commits no offence during the period (up to 3 years). It relies on individual deterrence and suits minor first offences.'],
  ['Absolute discharge', [0, 0, 0, 0, 0], 'The offender is guilty but receives no penalty — for example where they are technically guilty but not morally blameworthy. It meets almost none of the aims.'],
  ['Restorative justice', [1, 3, 1, 1, 3], 'The victim and offender meet (or communicate) so the offender understands the harm and makes amends. Research suggests high victim satisfaction and some reduction in reoffending. It depends on both parties agreeing.'],
  ['Compensation order', [1, 0, 1, 0, 3], 'Payment directly to the victim for injury, loss or damage. Courts must give it priority over a fine when the offender has limited means.']
];
function mountAims(host) {
  let k = 0;
  const render = () => {
    const [n, sc, x] = SENTENCES[k];
    const body = toolShell(host, { kind: 'Interactive · punishment', title: 'How far does each sentence meet the aims?', intro: 'The purposes of sentencing in s57 Sentencing Act 2020 are punishment, reduction of crime (including deterrence), reform and rehabilitation, protection of the public and reparation. Pick a sentence to see a typical assessment, then decide whether you agree. Use the evidence in your answer, not just the scores.' },
      `<div class="ds-grid"><div class="stack" id="am-s">${SENTENCES.map((s, i) => `<button class="pickb ${i === k ? 'on' : ''}" data-i="${i}">${esc(s[0])}</button>`).join('')}</div>
      <div><div class="aims">${AIMS.map((a, i) => `<div class="aim-row"><span>${a}</span><div class="dots">${[1, 2, 3].map(d => `<i class="${sc[i] >= d ? 'on' : ''}"></i>`).join('')}</div><span class="small muted">${['not met', 'partly', 'mostly', 'strongly'][sc[i]]}</span></div>`).join('')}</div>
      <div class="box def" style="margin-top:12px"><b class="lbl">${esc(n)}</b><p class="small">${esc(x)}</p></div></div></div>`);
    $$('#am-s button', body).forEach(b => b.onclick = () => { k = +b.dataset.i; sfx.flip(); render(); });
  };
  render();
}

const BESPOKE = { detention: mountDetention, plea: mountPlea, funnel: mountFunnel, planner: mountPlanner, aims: mountAims };
const BESPOKE_TITLES = { detention: 'Detention clock', plea: 'Guilty plea credit', funnel: 'The attrition funnel', planner: 'Campaign planner', aims: 'Sentences and aims' };
function toolTitle(id) { return TOOLS[id]?.title || BESPOKE_TITLES[id] || id; }
function mountTool(host, id) {
  if (BESPOKE[id]) return BESPOKE[id](host);
  const t = TOOLS[id]; if (!t) { host.innerHTML = '<div class="empty">Tool not found.</div>'; return; }
  ({ tree: mountTree, sort: mountSort, steps: mountSteps })[t.type](host, t);
}
