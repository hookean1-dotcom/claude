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

/* ---------- bespoke: is this precedent binding? ---------- */
const COURTS = [
  { id: 'echr', n: 'European Court of Human Rights', s: 'Strasbourg · s2 HRA 1998' },
  { id: 'uksc', n: 'Supreme Court', s: 'formerly House of Lords' },
  { id: 'jcpc', n: 'Judicial Committee of the Privy Council', s: 'Commonwealth appeals' },
  { id: 'cacv', n: 'Court of Appeal (Civil Division)', s: '' },
  { id: 'cacr', n: 'Court of Appeal (Criminal Division)', s: '' },
  { id: 'dc', n: 'Divisional Courts of the High Court', s: 'e.g. KBD Divisional Court' },
  { id: 'hc', n: 'High Court (single judge)', s: '' },
  { id: 'crown', n: 'Crown Court', s: '' },
  { id: 'county', n: 'County Court', s: '' },
  { id: 'mags', n: 'Magistrates’ courts', s: '' }
];
function precedentRule(dec, prev) {
  if (prev === 'echr') return ['pers', 'Must take into account (s2 HRA 1998)', 'Strasbourg rulings are not binding on UK courts, but courts must “take into account” them. The Supreme Court usually follows a “clear and constant” line of Strasbourg case law ([[c:horncastle|R v Horncastle]] shows it may decline).'];
  if (prev === 'jcpc') return ['pers', 'Persuasive', 'Privy Council decisions are persuasive only — but a Privy Council board can direct that its decision represents English law, which lower English courts then follow ([[c:holley|AG for Jersey v Holley]]; [[c:jameskarimi|R v James and Karimi]]). The Court of Appeal may also follow the Privy Council rather than its own earlier decision ([[c:willers|Willers v Joyce]]).'];
  if (dec === 'jcpc') return ['pers', 'Persuasive only', 'The Privy Council is outside the English hierarchy; English decisions are persuasive to it.'];
  if (dec === 'echr') return ['pers', 'Persuasive only', 'Strasbourg does not follow UK precedent; it has its own practice of following its earlier rulings unless there is good reason.'];
  const rank = { uksc: 1, cacv: 2, cacr: 2, dc: 3, hc: 4, crown: 5, county: 5, mags: 6 };
  const rd = rank[dec], rp = rank[prev];
  if (dec === 'uksc' && prev === 'uksc') return ['free', 'Normally follows — but can depart', 'The Supreme Court is bound by its own earlier decisions (and those of the House of Lords) but may depart “when it appears right to do so” under the [[c:ps1966|Practice Statement 1966]] — e.g. [[c:herrington|BRB v Herrington]], [[c:shivpuri|R v Shivpuri]], [[c:rvg|R v G]].'];
  if (rp < rd) {
    if ((prev === 'cacv' && dec === 'cacr') || (prev === 'cacr' && dec === 'cacv')) return ['pers', 'Persuasive', 'The two divisions of the Court of Appeal do not bind each other.'];
    return ['bind', 'Binding', 'A court is bound by the decisions of the courts above it in the hierarchy (stare decisis). It must follow the ratio decidendi, even if it disagrees — unless it can distinguish the case on its material facts.'];
  }
  if (dec === prev) {
    if (dec === 'cacv') return ['bind', 'Binding — with three exceptions', 'The Civil Division is bound by its own previous decisions, except in the three [[c:youngbristol|Young v Bristol Aeroplane]] situations: (1) two conflicting decisions — choose one; (2) a decision inconsistent with a later Supreme Court decision; (3) a decision made per incuriam (in error, without considering a relevant statute or binding case).'];
    if (dec === 'cacr') return ['bind', 'Binding — but more flexible', 'The Criminal Division follows [[c:youngbristol|Young v Bristol Aeroplane]] and may also depart if the law was “misapplied or misunderstood” and the liberty of the individual is at stake ([[c:rtaylor|R v Taylor]] (1950); [[c:gould|R v Gould]]).'];
    if (dec === 'dc') return ['bind', 'Binding (usually)', 'Divisional Courts are normally bound by their own previous decisions (with the Young exceptions); in criminal appeals they have the same flexibility as the Criminal Division.'];
    if (dec === 'hc') return ['pers', 'Persuasive', 'A High Court judge is not bound by another High Court judge’s decision, though it is usually followed for consistency.'];
    return ['free', 'Not binding', 'Crown Court, County Court and magistrates’ court decisions do not create binding precedents.'];
  }
  return ['pers', 'Not binding (lower court)', 'A decision of a lower court never binds a higher court. It may be persuasive if the reasoning is strong.'];
}
function mountBinding(host) {
  let dec = 'cacv', prev = 'uksc';
  const render = () => {
    const [cls, v, x] = precedentRule(dec, prev);
    const body = toolShell(host, { kind: 'Interactive · judicial precedent', title: 'Is it binding?', intro: 'Choose the court <b>deciding</b> today’s case and the court that decided the <b>earlier precedent</b>. The map colours show where binding force flows.' },
      `<div class="ds-grid"><div><div class="ctl"><label for="bd-dec">Court deciding the case now</label><select id="bd-dec" style="width:100%">${COURTS.filter(c => c.id !== 'echr').map(c => `<option value="${c.id}" ${c.id === dec ? 'selected' : ''}>${c.n}</option>`).join('')}</select></div>
      <div class="ctl"><label for="bd-prev">Court that set the precedent</label><select id="bd-prev" style="width:100%">${COURTS.map(c => `<option value="${c.id}" ${c.id === prev ? 'selected' : ''}>${c.n}</option>`).join('')}</select></div>
      <div class="verdict ${cls === 'bind' ? 'bad' : cls === 'free' ? 'good' : 'mid'}"><div class="v">${v}</div><div class="small">${rich(x)}</div></div></div>
      <div><div class="eyebrow" style="margin-bottom:8px">Court hierarchy · what binds the deciding court</div><div class="court-map">${COURTS.map(c => { const [cc] = c.id === dec ? ['dec'] : precedentRule(dec, c.id); return `<button class="court ${cc}" data-c="${c.id}"><span>${c.n}</span><small>${c.id === dec ? 'deciding court' : cc === 'bind' ? 'binding' : cc === 'free' ? 'not binding' : 'persuasive'}</small></button>`; }).join('')}</div><p class="small muted">Tap a court on the map to make it the source of the precedent.</p></div></div>`);
    $('#bd-dec', body).onchange = e => { dec = e.target.value; render(); };
    $('#bd-prev', body).onchange = e => { prev = e.target.value; render(); };
    $$('.court', body).forEach(b => b.onclick = () => { prev = b.dataset.c; sfx.flip(); render(); });
  };
  render();
}

/* ---------- bespoke: civil track allocation ---------- */
function mountTrack(host) {
  let v = 18000, type = 'general';
  const render = () => {
    let track, court, notes;
    const pi = type === 'pi', rta = type === 'rta', hs = type === 'housing';
    const smallMax = rta ? 5000 : (pi || hs) ? 1000 : 10000;
    if (v <= smallMax) { track = 'Small claims track'; court = 'County Court'; notes = `Informal hearing before a District Judge; legal costs are generally <b>not recoverable</b>, so most people represent themselves. Claims up to £10,000 are referred to the free HMCTS Small Claims Mediation Service first (compulsory for most specified money claims since May 2024).${rta ? ' Road traffic whiplash claims up to £5,000 go through the Official Injury Claim portal (Civil Liability Act 2018 reforms, 2021).' : pi ? ' Personal injury claims use the small claims track only where the injury element is £1,000 or less.' : ''}`; }
    else if (v <= 25000) { track = 'Fast track'; court = 'County Court'; notes = 'Straightforward claims; trial should last no more than one day; strict timetable (trial within about 30 weeks); fixed recoverable costs apply.'; }
    else if (v <= 100000) { track = 'Intermediate track'; court = 'County Court'; notes = 'Introduced in October 2023 for claims £25,000–£100,000 that can be tried in up to three days with limited expert evidence. Fixed recoverable costs apply.'; }
    else { track = 'Multi-track'; court = v >= 100000 && type !== 'pi' ? 'High Court (King’s Bench or Chancery Division) or County Court' : v >= 50000 ? 'High Court or County Court' : 'County Court'; notes = 'Complex, high-value claims. Case management conferences and pre-trial reviews; costs budgeting. Claims for £100,000+ (or £50,000+ for personal injury) may be issued in the High Court.'; }
    const body = toolShell(host, { kind: 'Interactive · civil process', title: 'Which track? Which court?', intro: 'Under the Civil Procedure Rules 1998, a defended claim is allocated to a track by a judge, mainly by value and complexity. Move the slider.' },
      `<div class="ds-grid"><div><div class="ctl"><label for="tk-v">Value of the claim <output>£${v.toLocaleString('en-GB')}</output></label><input id="tk-v" type="range" min="500" max="250000" step="500" value="${v}" style="--p:${(v - 500) / 2495}%"></div>
      <div class="ctl"><label>Type of claim</label><div class="seg" id="tk-type">${[['general', 'Money / contract'], ['pi', 'Personal injury'], ['rta', 'Road traffic whiplash'], ['housing', 'Housing disrepair']].map(([k, l]) => `<button data-k="${k}" class="${type === k ? 'on' : ''}">${l}</button>`).join('')}</div></div></div>
      <div><div class="verdict"><div class="eyebrow">Likely allocation</div><div class="v">${track}</div><div><b>Court:</b> ${court}</div><p class="small" style="margin:8px 0 0">${notes}</p></div>
      <div class="readouts" style="margin-top:12px"><div class="ro"><span>Small claims</span><b>≤ £10,000</b></div><div class="ro"><span>Fast track</span><b>≤ £25,000</b></div><div class="ro"><span>Intermediate</span><b>≤ £100,000</b></div><div class="ro"><span>Multi-track</span><b>&gt; £100,000</b></div></div>
      <p class="small muted" style="margin:10px 0 0">Value is the starting point: the judge also weighs complexity, number of parties, oral evidence needed and the importance of the claim (CPR Part 26).</p></div></div>`);
    $('#tk-v', body).oninput = e => { v = +e.target.value; render(); $('#tk-v', host).focus(); };
    $$('#tk-type button', body).forEach(b => b.onclick = () => { type = b.dataset.k; render(); });
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

/* ---------- bespoke: contributory negligence calculator ---------- */
function mountApportion(host) {
  let dmg = 40000, pct = 25, belt = false;
  const render = () => {
    const red = Math.round(dmg * pct / 100);
    const body = toolShell(host, { kind: 'Interactive · defences in tort', title: 'Contributory negligence', intro: 'Under the Law Reform (Contributory Negligence) Act 1945 s1, damages are reduced “to such extent as the court thinks just and equitable having regard to the claimant’s share in the responsibility for the damage”. It is a partial defence: the claimant still wins.' },
      `<div class="ds-grid"><div><div class="ctl"><label for="ap-d">Full value of the claim <output>£${dmg.toLocaleString('en-GB')}</output></label><input id="ap-d" type="range" min="1000" max="200000" step="1000" value="${dmg}" style="--p:${(dmg - 1000) / 1990}%"></div>
      <div class="ctl"><label for="ap-p">Claimant’s share of responsibility <output>${pct}%</output></label><input id="ap-p" type="range" min="0" max="75" step="5" value="${pct}" style="--p:${pct / .75}%"></div>
      <label class="small" style="display:flex;gap:8px;align-items:center"><input type="checkbox" id="ap-b" ${belt ? 'checked' : ''}> Apply the <i class="cn">Froom v Butcher</i> seatbelt guideline</label></div>
      <div><div class="readouts"><div class="ro"><span>Full damages</span><b>£${dmg.toLocaleString('en-GB')}</b></div><div class="ro"><span>Reduction (${pct}%)</span><b>−£${red.toLocaleString('en-GB')}</b></div><div class="ro"><span>Claimant receives</span><b>£${(dmg - red).toLocaleString('en-GB')}</b></div></div>
      <div class="box tip" style="margin-top:12px"><b class="lbl">Guide from the cases</b><ul class="small"><li>[[c:froom]]: no seatbelt — 25% if wearing one would have prevented the injury entirely; 15% if it would have made it less severe; 0% if it would have made no difference.</li><li>[[c:sayers]]: 25% for climbing out over a toilet-roll holder when locked in a cubicle.</li><li>[[c:owens]]: 20% for accepting a lift from a driver known to have been drinking.</li><li>[[c:pittshunt]]: a 100% reduction is logically impossible — the Act assumes both parties share fault (doubting [[c:jayes]], where 100% was allowed).</li></ul></div></div></div>`);
    $('#ap-d', body).oninput = e => { dmg = +e.target.value; render(); $('#ap-d', host).focus(); };
    $('#ap-p', body).oninput = e => { pct = +e.target.value; belt = false; render(); $('#ap-p', host).focus(); };
    $('#ap-b', body).onchange = e => { belt = e.target.checked; if (belt) pct = 25; render(); };
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

/* ---------- bespoke: BTEC grade calculator ---------- */
const GC_U1 = [['U', 0], ['Near Pass', 6], ['Pass', 9], ['Merit', 15], ['Distinction', 24]];
const GC_U2 = [['U', 0], ['Pass', 9], ['Merit', 15], ['Distinction', 24]];
const GC_QUAL = [['Distinction*', 48], ['Distinction', 42], ['Merit', 26], ['Pass', 18]];
function mountGradecalc(host) {
  S.gc ??= { u1: 2, u2: 2 };
  const render = () => {
    const a = GC_U1[S.gc.u1], b = GC_U2[S.gc.u2], pts = a[1] + b[1];
    const ok = S.gc.u1 >= 1 && S.gc.u2 >= 1, g = ok ? (GC_QUAL.find(x => pts >= x[1]) || ['U'])[0] : 'U';
    const next = GC_QUAL.slice().reverse().find(x => x[1] > pts);
    const body = toolShell(host, { kind: 'Calculator · qualification grade', title: 'What will my BTEC grade be?', intro: 'Each unit grade earns points. Unit 1 (external) must be at least a Near Pass and Unit 2 (internal) at least a Pass. Unit 1 points shown are the <b>minimum</b> for each grade — Pearson converts your actual raw mark, so a high Merit can earn more than 15.' },
      `<div class="ds-grid"><div><div class="ctl"><label>Unit 1 · Dispute solving in civil law (external)</label><div class="seg wrap" id="gc1">${GC_U1.map((x, i) => `<button data-i="${i}" class="${i === S.gc.u1 ? 'on' : ''}">${x[0]}</button>`).join('')}</div></div>
      <div class="ctl"><label>Unit 2 · Criminal law and the legal system (internal)</label><div class="seg wrap" id="gc2">${GC_U2.map((x, i) => `<button data-i="${i}" class="${i === S.gc.u2 ? 'on' : ''}">${x[0]}</button>`).join('')}</div></div></div>
      <div><div class="readouts"><div class="ro"><span>Unit 1 points</span><b>${a[1]}${S.gc.u1 ? '+' : ''}</b></div><div class="ro"><span>Unit 2 points</span><b>${b[1]}</b></div><div class="ro"><span>Total</span><b>${pts}</b></div></div>
      <div class="verdict ${g === 'U' ? 'bad' : g.startsWith('Distinction') ? 'good' : 'mid'}" style="margin-top:12px"><div class="eyebrow">Qualification grade</div><div class="v">${g}</div><div class="small">${!ok ? 'You need at least a Near Pass in Unit 1 and a Pass in Unit 2 to be awarded the qualification.' : next ? `${next[1] - pts} more point${next[1] - pts === 1 ? '' : 's'} would reach ${next[0]} (${next[1]}).` : 'The top grade.'}</div></div>
      <p class="small muted" style="margin:10px 0 0">Thresholds (Certificate, 180 GLH): Pass 18 · Merit 26 · Distinction 42 · Distinction* 48.</p></div></div>`);
    $$('#gc1 button', body).forEach(x => x.onclick = () => { S.gc.u1 = +x.dataset.i; save(); render(); });
    $$('#gc2 button', body).forEach(x => x.onclick = () => { S.gc.u2 = +x.dataset.i; save(); render(); });
  };
  render();
}

const BESPOKE = { binding: mountBinding, track: mountTrack, detention: mountDetention, apportion: mountApportion, plea: mountPlea, gradecalc: mountGradecalc };
const BESPOKE_TITLES = { binding: 'Is it binding?', track: 'Which track?', detention: 'Detention clock', apportion: 'Contributory negligence', plea: 'Guilty plea credit', gradecalc: 'Grade calculator' };
function toolTitle(id) { return TOOLS[id]?.title || BESPOKE_TITLES[id] || id; }
function mountTool(host, id) {
  if (BESPOKE[id]) return BESPOKE[id](host);
  const t = TOOLS[id]; if (!t) { host.innerHTML = '<div class="empty">Tool not found.</div>'; return; }
  ({ tree: mountTree, sort: mountSort, steps: mountSteps })[t.type](host, t);
}
