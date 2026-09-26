/* ==========================================================
   UNIT 3 explorations: micro-organisms, spoilage, allergy, pathogens, hazards, HACCP
   ========================================================== */

/* ---- 3.1 Binary fission ---- */
SIMS.microbes = {
  title: 'Binary fission', h: 400,
  controls: [{ id: 'gt', label: 'Generation time', min: 10, max: 60, step: 5, value: 20, fmt: v => v + ' min' }, { id: 'sp', label: 'Speed', min: 1, max: 10, step: 1, value: 4, fmt: v => '×' + v * 15 }],
  readouts: ['Time', 'Divisions', 'Bacteria', 'In 5 hours'],
  note: 'In ideal conditions (warm, moist, food, time, suitable pH) some bacteria divide every 10–20 minutes: $N = N_0 × 2^n$. One bacterium can become over a million in under 7 hours at a 20-minute generation time.',
  init(st) { st.t = 0; st.cells = [{ x: .5, y: .5, a: 0, b: 0 }]; st.div = 0; },
  step(st, dt) { st.t += dt * st.p.sp * 15 / 60 * 60 / 60; const n = Math.floor(st.t / st.p.gt); if (n > st.div && st.cells.length < 256) { st.div = n; const nc = []; st.cells.forEach(c0 => { const a = Math.random() * Math.PI; nc.push({ x: c0.x, y: c0.y, a, b: 1 }, { x: c0.x, y: c0.y, a: a + Math.PI, b: 1 }); }); st.cells = nc; } else if (n > st.div) st.div = n; st.cells.forEach((c0, i) => { const ang = i * 2.39996, r = 0.03 * Math.sqrt(i); const tx_ = .5 + r * Math.cos(ang), ty = .5 + r * Math.sin(ang) * 0.9; c0.x += (tx_ - c0.x) * 0.08; c0.y += (ty - c0.y) * 0.08; c0.b = Math.max(0, c0.b - dt); }); },
  draw(c, W, H, st, C) { const s = Math.min(W * 0.62, H - 60); CV.rrect(c, 20, 20, W * 0.62, H - 40, 12, C.surface, C.line);
    st.cells.forEach(c0 => { c.save(); c.translate(20 + c0.x * W * 0.62, 20 + c0.y * (H - 40)); c.rotate(c0.a); c.fillStyle = hexA(C.u3, .35 + .4 * c0.b); c.strokeStyle = C.u3; c.lineWidth = 1.3; const L = Math.max(6, 22 - Math.log2(st.cells.length) * 2); c.beginPath(); c.roundRect ? c.roundRect(-L / 2, -L / 4, L, L / 2, L / 4) : c.rect(-L / 2, -L / 4, L, L / 2); c.fill(); c.stroke(); c.restore(); });
    const px = W * 0.62 + 50, pw = W - px - 20, ph = H - 120; const n = Math.max(1, st.div), max = Math.max(4, n + 1);
    CV.plot(c, C, { x: px, y: 40, w: pw, h: ph }, { xr: [0, max], yr: [0, Math.log10(2 ** max)], xl: 'divisions', yl: 'log₁₀ N', series: [{ f: x => x * Math.log10(2), col: C.u3, w: 2.4 }], dots: [[st.div, st.div * Math.log10(2), C.accent, 5]] }); },
  read(st) { const n = st.div; return [Math.floor(st.t) + ' min', n, (2 ** n).toLocaleString('en-GB'), (2 ** Math.floor(300 / st.p.gt)).toLocaleString('en-GB')]; }
};

/* ---- 3.2 Conditions for growth ---- */
SIMS.growth = {
  title: 'Conditions for growth', h: 400, noPlay: true,
  controls: [{ id: 'T', label: 'Temperature', min: -20, max: 80, step: 1, value: 30, fmt: v => v + ' °C' }, { id: 'ph', label: 'pH', min: 2, max: 9, step: 0.1, value: 6.5, fmt: v => v.toFixed(1) }, { id: 'aw', label: 'Water activity (aw)', min: 0.6, max: 1, step: 0.01, value: 0.98, fmt: v => v.toFixed(2) }, { type: 'seg', id: 'o', label: 'Organism', value: 'sal', options: [['sal', 'Salmonella'], ['lis', 'Listeria'], ['cb', 'C. botulinum'], ['mould', 'mould']] }],
  readouts: ['Growth rate', 'Doubling time', 'After 6 hours', 'Main limit'],
  note: 'Most food poisoning bacteria grow best at 37 °C, pH 6.6–7.5 and aw above 0.95. <i>Listeria</i> can grow slowly in the fridge; <i>C. botulinum</i> grows without oxygen and is controlled below pH 4.6; moulds tolerate acid and low aw.',
  prof: { sal: [5, 37, 46, 4.0, 0.94, 20], lis: [-1, 37, 45, 4.4, 0.92, 30], cb: [10, 37, 48, 4.6, 0.94, 35], mould: [0, 25, 35, 2.0, 0.8, 90] },
  rate(st) { const [tmin, topt, tmax, phmin, awmin] = this.prof[st.p.o]; const fT = st.p.T <= tmin || st.p.T >= tmax ? 0 : st.p.T < topt ? ((st.p.T - tmin) / (topt - tmin)) ** 2 : 1 - ((st.p.T - topt) / (tmax - topt)) ** 2; const fph = st.p.ph <= phmin ? 0 : clamp((st.p.ph - phmin) / 1.5, 0, 1) * (st.p.ph > 8.5 ? .5 : 1); const faw = st.p.aw <= awmin ? 0 : clamp((st.p.aw - awmin) / (1 - awmin), 0, 1); const r = fT * fph * faw; return { r, fT, fph, faw }; },
  draw(c, W, H, st, C) { const self = this, r = this.rate(st), dt = this.prof[st.p.o][5] / Math.max(1e-6, r.r);
    const curve = t => { const n = r.r > 0 ? t * 60 / dt : 0, lag = 1; return clamp(2 + Math.max(0, n - lag) * Math.log10(2), 2, 9); };
    const P = CV.plot(c, C, { x: 60, y: 30, w: W * 0.58, h: H - 90 }, { xr: [0, 12], yr: [0, 10], xl: 'hours', yl: 'log₁₀ bacteria per g', series: [{ f: t => 5, col: C.bad, w: 1, dash: [5, 4] }, { f: curve, col: C.u3, w: 3 }] });
    CV.text(c, 'likely infective dose', P.X(0.3), P.Y(5) - 10, C.bad, 10.5);
    thermometer(c, C, W - 150, 40, H - 110, st.p.T, -20, 80, [[75, '75 cook', C.good], [63, '63 hot hold', C.u2], [37, '37 optimum', C.bad], [5, '5 fridge', C.info], [-18, '−18 freezer', C.info]]);
    const bx = W * 0.58 + 80; [['temp', r.fT], ['pH', r.fph], ['aw', r.faw]].forEach(([n, v], i) => { CV.text(c, n, bx, 50 + i * 36, C.muted, 11); CV.rrect(c, bx, 58 + i * 36, 60, 8, 4, hexA(C.muted, .2)); CV.rrect(c, bx, 58 + i * 36, 60 * v, 8, 4, v > .6 ? C.bad : v > 0 ? C.u5 : C.good); }); },
  read(st) { const r = this.rate(st), dt = this.prof[st.p.o][5] / Math.max(1e-6, r.r), lim = [['temperature', r.fT], ['pH', r.fph], ['water activity', r.faw]].sort((a, b) => a[1] - b[1])[0]; return [Math.round(r.r * 100) + '% of max', r.r > 0 ? (dt < 600 ? Math.round(dt) + ' min' : '> 10 h') : 'no growth', r.r > 0 ? '×' + Math.round(2 ** Math.min(30, 360 / dt)).toLocaleString('en-GB') : '×1', lim[1] < 1 ? lim[0] : 'none — ideal']; }
};

/* ---- 3.3 Spoilage over time ---- */
SIMS.spoil = {
  title: 'Shelf life and storage', h: 380, noPlay: true,
  controls: [{ type: 'seg', id: 'f', label: 'Food', value: 'milk', options: [['milk', 'pasteurised milk'], ['bread', 'bread'], ['straw', 'strawberries'], ['chicken', 'raw chicken']] }, { type: 'seg', id: 's', label: 'Storage', value: 'fridge', options: [['room', 'room 20 °C'], ['fridge', 'fridge 4 °C'], ['freezer', 'freezer −18 °C']] }],
  readouts: ['Main spoilage', 'Quality after 5 days', 'Estimated shelf life'],
  note: 'Spoilage is caused by micro-organisms (bacteria, moulds, yeasts), enzymes and oxidation. Lower temperatures slow all three. A <b>use-by</b> date is about safety; a <b>best before</b> date is about quality.',
  data: { milk: ['bacteria sour the milk (lactic acid)', 2, 10, 90], bread: ['mould (and staling)', 5, 4, 90], straw: ['mould (Botrytis), enzymes, bruising', 1.5, 5, 240], chicken: ['bacteria — slime, off odours', 0.5, 5, 270] },
  life(st) { const d = this.data[st.p.f]; return st.p.s === 'room' ? d[1] : st.p.s === 'fridge' ? d[2] : d[3]; },
  draw(c, W, H, st, C) { const L = this.life(st), q = t => 100 / (1 + Math.exp((t - L) / (L * 0.15)));
    const P = CV.plot(c, C, { x: 60, y: 30, w: W - 100, h: H - 90 }, { xr: [0, Math.max(14, L * 1.4)], yr: [0, 105], xl: 'days', yl: 'quality / %', series: [{ f: q, col: st.p.s === 'freezer' ? C.info : st.p.s === 'fridge' ? C.u3 : C.bad, w: 3 }, { f: () => 40, col: C.muted, w: 1, dash: [5, 4] }] });
    CV.text(c, 'unacceptable below this line', P.X(0.2), P.Y(40) + 14, C.muted, 10.5); },
  read(st) { const L = this.life(st), q5 = 100 / (1 + Math.exp((5 - L) / (L * 0.15))); return [this.data[st.p.f][0], Math.round(q5) + '%', L >= 60 ? `about ${Math.round(L / 30)} months (quality)` : L + ' days']; }
};

/* ---- 3.4 Preservation sorter ---- */
SIMS.preserve = sorterSim('How does it preserve?', 'Decide the main way each method stops micro-organisms spoiling food.', ['Low temperature', 'Heat kills', 'Removes water (low aw)', 'Acid (low pH)', 'Removes oxygen'], [
  ['Freezing peas at −18 °C', 0, 'Microbes become dormant — not killed; water is also frozen.'],
  ['Pasteurising milk at 72 °C for 15 s', 1, 'Kills most pathogens; milk still needs chilling.'],
  ['Making strawberry jam (high sugar)', 2, 'Sugar binds water, lowering aw below what microbes need.'],
  ['Pickling onions in vinegar', 3, 'Acetic acid lowers pH below 4.5.'],
  ['Vacuum-packing cooked ham', 4, 'Removes air; slows aerobic bacteria and moulds (chilling still needed).'],
  ['Drying apricots', 2, 'Removing water lowers aw.'],
  ['Canning tuna at 121 °C', 1, 'Sterilises — kills bacteria and spores; the sealed can also excludes air.'],
  ['Salting cod', 2, 'Salt draws water out by osmosis.'],
  ['Chilling ready meals at 0–5 °C', 0, 'Slows the growth of most bacteria.'],
  ['UHT milk (132–135 °C, 1–2 s)', 1, 'Ultra-high temperature kills micro-organisms; sealed cartons keep it sterile.'],
  ['Making yogurt (lactic acid fermentation)', 3, 'Lactic acid lowers pH.'],
  ['Modified atmosphere packaging for salad', 4, 'Low O₂ and high CO₂ slow spoilage.']
]);

/* ---- 3.5 Intolerance or allergy? ---- */
SIMS.intol = sorterSim('Intolerance, allergy or coeliac?', 'Read each case and decide what is most likely happening.', ['Food intolerance', 'IgE food allergy', 'Coeliac disease'], [
  ['Bloating and diarrhoea two hours after a milkshake; fine with lactose-free milk.', 0, 'Lactose intolerance — lactase deficiency, not immune.'],
  ['Lips swell and wheezing within minutes of eating satay sauce.', 1, 'Rapid IgE reaction to peanut — risk of anaphylaxis.'],
  ['Tiredness, anaemia and weight loss; villi damaged on biopsy; improves on gluten-free diet.', 2, 'Autoimmune reaction to gluten flattens the villi.'],
  ['Headaches after eating foods with MSG, depending on the amount.', 0, 'Dose-related, no immune involvement.'],
  ['Hives and vomiting after scrambled egg; skin-prick test positive.', 1, 'Egg allergy — IgE-mediated.'],
  ['Wind and cramps after large portions of beans; small amounts are fine.', 0, 'Dose-related intolerance of fermentable carbohydrates.'],
  ['Throat tightens after prawns; carries an adrenaline auto-injector.', 1, 'Crustacean allergy — adrenaline for anaphylaxis.'],
  ['Positive tTG antibody blood test while still eating bread and pasta.', 2, 'Coeliac screening test — keep eating gluten until diagnosis.'],
  ['Mild wheeze in someone with asthma after dried apricots containing sulphites.', 0, 'Sulphite sensitivity is usually classed as an intolerance (non-IgE), although sulphites are one of the 14 allergens to declare.']
]);

/* ---- 3.6 Menu allergen audit ---- */
const ALLERGENS = ['celery', 'gluten', 'crustaceans', 'eggs', 'fish', 'lupin', 'milk', 'molluscs', 'mustard', 'tree nuts', 'peanuts', 'sesame', 'soya', 'sulphites'];
SIMS.allergy = DS('Allergen audit', 'For each dish, tick every one of the 14 allergens it contains, then check. Under Natasha’s Law, food prepacked for direct sale must list all ingredients with allergens emphasised.', body => {
  const D = [['Chicken satay with noodles', 'chicken, peanut sauce (peanuts, soy sauce), egg noodles (wheat, egg), sesame oil', ['peanuts', 'soya', 'gluten', 'eggs', 'sesame']], ['Prawn cocktail', 'prawns, lettuce, mayonnaise (egg, mustard), bread and butter', ['crustaceans', 'eggs', 'mustard', 'gluten', 'milk']], ['Leek and potato soup', 'leeks, potato, celery, vegetable stock, cream, bread roll', ['celery', 'milk', 'gluten']], ['Moules marinière', 'mussels, white wine (sulphites), cream, parsley, butter', ['molluscs', 'sulphites', 'milk']], ['Pesto pasta', 'pasta (wheat, egg), basil, pine nuts, Parmesan, olive oil', ['gluten', 'eggs', 'milk', 'tree nuts']]];
  let cur = 0, checked = false; const pick = D.map(() => new Set());
  const draw = () => { const [n, ing, ans] = D[cur], s = pick[cur];
    body.innerHTML = `<div class="opt-grid" style="margin-bottom:12px">${D.map((d, i) => `<button class="pickb${i === cur ? ' on' : ''}" data-d="${i}">${d[0]}</button>`).join('')}</div><div class="card" style="padding:14px 16px"><h3 style="margin:0 0 4px">${n}</h3><p class="small">Ingredients: ${ing}</p>
      <div class="opt-grid" style="grid-template-columns:repeat(auto-fill,minmax(120px,1fr))">${ALLERGENS.map(a => { const on = s.has(a), right = ans.includes(a); return `<button class="pickb${on ? ' on' : ''}" data-a="${a}" style="${checked ? (right && on ? 'border-color:var(--good)' : right ? 'border-color:var(--bad);border-style:dashed' : on ? 'border-color:var(--bad)' : '') : ''}">${a}</button>`; }).join('')}</div>
      <div class="row" style="margin-top:12px;gap:8px"><button class="btn primary sm" data-chk>Check</button>${checked ? (ans.every(a => s.has(a)) && [...s].every(a => ans.includes(a)) ? '<span class="flag ok">All correct</span>' : `<span class="flag no">Contains: ${ans.join(', ')}</span>`) : ''}</div></div>`;
    $$('[data-d]', body).forEach(b => b.onclick = () => { cur = +b.dataset.d; checked = false; draw(); }); $$('[data-a]', body).forEach(b => b.onclick = () => { s.has(b.dataset.a) ? s.delete(b.dataset.a) : s.add(b.dataset.a); checked = false; draw(); }); $('[data-chk]', body).onclick = () => { checked = true; const ok = ans.every(a => s.has(a)) && [...s].every(a => ans.includes(a)); ok ? sfx.good() : sfx.bad(); draw(); }; };
  draw();
});

/* ---- 3.7 Pathogen profiles ---- */
const PATH = [
  ['Salmonella', 'bacterium', 'raw poultry, eggs, raw meat, unpasteurised milk', '6–72 h (usually 12–36 h)', 'diarrhoea, vomiting, fever, abdominal pain', 'cook to 75 °C; separate raw/cooked; British Lion eggs'],
  ['Campylobacter', 'bacterium', 'raw/undercooked poultry, unpasteurised milk, untreated water', '2–5 days', 'bloody diarrhoea, fever, cramps — the UK’s most common cause', 'cook poultry thoroughly; don’t wash raw chicken (splashing)'],
  ['E. coli O157', 'bacterium', 'undercooked minced beef (burgers), raw vegetables contaminated with manure, unpasteurised milk', '1–8 days', 'bloody diarrhoea; kidney failure (HUS) in children', 'cook burgers through; wash vegetables; separate equipment'],
  ['Listeria monocytogenes', 'bacterium', 'soft mould-ripened cheese, pâté, smoked salmon, chilled ready-to-eat foods', '1 day – 10 weeks', 'flu-like; meningitis; miscarriage in pregnancy', 'grows at fridge temperatures — keep ≤ 5 °C, observe use-by; avoid in pregnancy'],
  ['Staphylococcus aureus', 'bacterium (toxin)', 'foods handled by people — cooked meats, cream cakes, sandwiches', '1–6 h', 'rapid vomiting, cramps (heat-stable toxin)', 'personal hygiene; cover cuts; chill food'],
  ['Clostridium perfringens', 'bacterium (spores)', 'large joints, stews, gravy cooled slowly', '8–22 h', 'diarrhoea, cramps', 'cool within 90 minutes; reheat to 75 °C; hot hold ≥ 63 °C'],
  ['Bacillus cereus', 'bacterium (spores + toxin)', 'cooked rice kept warm or cooled slowly', '1–6 h (vomiting) / 8–16 h (diarrhoea)', 'vomiting or diarrhoea', 'cool rice within 1 hour, refrigerate, reheat once only'],
  ['Clostridium botulinum', 'bacterium (spores, anaerobic)', 'badly canned/bottled low-acid foods, honey (infants)', '12–36 h', 'paralysis — can be fatal', 'correct canning (121 °C); acidify; no honey under 12 months'],
  ['Norovirus', 'virus', 'shellfish (oysters), infected food handlers, contaminated surfaces', '12–48 h', 'sudden vomiting, diarrhoea', 'exclude ill staff for 48 h after symptoms; handwashing (gel less effective)'],
  ['Hepatitis A', 'virus', 'shellfish, food handled by infected people', '15–50 days', 'jaundice, fever', 'hygiene, vaccination, source shellfish from clean waters']
];
SIMS.pathogens = explorerSim('Pathogen profiles', 'Compare the main causes of food poisoning: sources, onset, symptoms and how to control them.', PATH.map(p => [p[0], `<h3>${p[0]} <span class="tag sm">${p[1]}</span></h3><div class="tbl"><table><tr><td><b>Sources</b></td><td>${p[2]}</td></tr><tr><td><b>Onset</b></td><td>${p[3]}</td></tr><tr><td><b>Symptoms</b></td><td>${p[4]}</td></tr><tr><td><b>Control</b></td><td>${p[5]}</td></tr></table></div>`]));

/* ---- 3.8 Spot the hazard ---- */
SIMS.spot = DS('Spot the hazards', 'This kitchen has eight hazards. Tap the numbered circles to inspect each area and decide whether it is a hazard.', body => {
  const HZ = [[90, 110, 'Raw chicken on the top shelf above a cream cake', 'biological', true], [250, 70, 'Chef wearing a watch and rings while kneading dough', 'physical / biological', true], [410, 120, 'Probe thermometer reads 58 °C in the hot-holding soup', 'biological', true], [540, 90, 'Cleaning spray stored next to the flour bins', 'chemical', true], [150, 250, 'Same green board used for raw chicken and salad', 'biological (cross-contamination)', true], [330, 230, 'Mouse droppings behind the dry-store sacks', 'biological (pests)', true], [480, 260, 'Chipped glass jug on the prep bench', 'physical', true], [600, 220, '“Contains nuts” label missing on the brownie tray', 'allergenic', true], [40, 250, 'Hand-wash basin with soap and paper towels', 'none — good practice', false], [620, 330, 'Blue plaster on the chef’s finger', 'none — correct (detectable, visible)', false]];
  const seen = {};
  const draw = () => { const n = Object.keys(seen).filter(k => HZ[k][4]).length;
    const sv = `<svg viewBox="0 0 680 370" style="width:100%;max-width:760px;height:auto;background:var(--surface-2);border-radius:14px;border:1px solid var(--line)">
      ${box(20, 30, 150, 150, 'var(--surface)', INK, 6)}${ln(20, 80, 170, 80, INK)}${ln(20, 130, 170, 130, INK)}${tx(95, 22, 'fridge', { a: 'middle', fs: 11 })}
      ${box(200, 40, 110, 100, 'var(--surface)', INK, 6)}${tx(255, 150, 'pastry section', { a: 'middle', fs: 11 })}${box(360, 90, 110, 60, 'var(--surface)', INK, 6)}${tx(415, 162, 'bain-marie', { a: 'middle', fs: 11 })}
      ${box(510, 40, 140, 100, 'var(--surface)', INK, 6)}${tx(580, 150, 'dry store', { a: 'middle', fs: 11 })}${box(20, 200, 640, 90, 'var(--surface)', INK, 6)}${tx(340, 305, 'preparation benches', { a: 'middle', fs: 11 })}
      ${HZ.map(([x, y], i) => `<g class="hotspot" data-h="${i}" tabindex="0" role="button" aria-label="Area ${i + 1}">${circ(x, y, 16, seen[i] === undefined ? 'var(--accent)' : HZ[i][4] ? 'var(--bad)' : 'var(--good)', INK, 1.5)}${tx(x, y + 5, i + 1, { a: 'middle', fs: 13, c: '#fff', w: 700 })}</g>`).join('')}</svg>`;
    body.innerHTML = `<div class="row" style="gap:8px;margin-bottom:10px"><span class="pill good">${n} / 8 hazards found</span></div>${sv}<div id="hz" class="card" style="padding:12px 16px;margin-top:10px"><span class="muted">Tap a numbered circle.</span></div>`;
    $$('[data-h]', body).forEach(g => { const f = () => { const i = +g.dataset.h, h = HZ[i]; $('#hz', body).innerHTML = `<p style="margin:0 0 8px"><b>${i + 1}.</b> ${h[2]}</p><div class="row" style="gap:8px"><button class="btn sm" data-y>Hazard</button><button class="btn sm ghost" data-n>Not a hazard</button></div>`; const ans = y => { seen[i] = true; const ok = y === h[4]; ok ? sfx.good() : sfx.bad(); draw(); $('#hz', body).innerHTML = `<p style="margin:0"><span class="flag ${ok ? 'ok' : 'no'}">${ok ? 'Correct' : 'Not quite'}</span> <b>${h[2]}</b> — ${h[4] ? `a <b>${h[3]}</b> hazard.` : h[3] + '.'}</p>`; if (Object.keys(seen).filter(k => HZ[k][4]).length === 8) burst(); }; $('[data-y]', body).onclick = () => ans(true); $('[data-n]', body).onclick = () => ans(false); }; g.onclick = f; g.onkeydown = e => { if (e.key === 'Enter') f(); }; }); };
  draw();
});

/* ---- 3.9 Risk matrix ---- */
SIMS.riskmatrix = DS('Risk assessment', 'Rate the likelihood and severity of each hazard (1–5). The risk rating = likelihood × severity decides the priority for control measures.', body => {
  const HZ = [['Undercooked chicken skewers at a barbecue', 4, 4], ['Nut traces in a “nut-free” cake', 2, 5], ['Glass fragment in a smoothie', 1, 4], ['Cooked rice held warm for 3 hours', 3, 3], ['Hair in a salad', 3, 1], ['Norovirus from an ill food handler', 3, 3], ['Cleaning chemical residue on a chopping board', 2, 3]];
  let cur = 0; const R = HZ.map(() => [3, 3]);
  const draw = () => { const [L, S] = R[cur], r = L * S;
    body.innerHTML = `<div class="opt-grid" style="margin-bottom:12px">${HZ.map((hz, i) => `<button class="pickb${i === cur ? ' on' : ''}" data-i="${i}">${hz[0]}</button>`).join('')}</div><div class="ds-grid"><div>${dsRange('L', 'Likelihood (1 rare – 5 almost certain)', 1, 5, 1, L)}${dsRange('S', 'Severity (1 minor – 5 fatal)', 1, 5, 1, S)}<div class="ds-big">Risk ${r}</div><p class="small"><span class="flag ${r >= 15 ? 'no' : r >= 8 ? 'mid' : 'ok'}">${r >= 15 ? 'HIGH — act immediately' : r >= 8 ? 'MEDIUM — control measures needed' : 'LOW — monitor'}</span></p><p class="small muted">A typical expert rating: likelihood ${HZ[cur][1]}, severity ${HZ[cur][2]} → ${HZ[cur][1] * HZ[cur][2]}.</p></div>
      <div><svg viewBox="0 0 330 290" style="width:100%;max-width:360px;height:auto">${[1, 2, 3, 4, 5].map(l => [1, 2, 3, 4, 5].map(s => { const v = l * s, c = v >= 15 ? 'var(--bad)' : v >= 8 ? 'var(--u5)' : 'var(--good)'; return cell(40 + (s - 1) * 56, 10 + (5 - l) * 50, 52, 46, c, v, { op: l === L && s === S ? .9 : .28 }); }).join('')).join('')}${tx(180, 280, 'severity →', { a: 'middle', fs: 11 })}<text transform="translate(18,135) rotate(-90)" text-anchor="middle" font-size="11" fill="var(--muted)">likelihood →</text></svg></div></div>`;
    $$('[data-i]', body).forEach(b => b.onclick = () => { cur = +b.dataset.i; draw(); }); ['L', 'S'].forEach((id, k) => { const inp = $('#' + id, body); inp.style.setProperty('--p', (inp.value - 1) / 4 * 100 + '%'); inp.oninput = () => { R[cur][k] = +inp.value; draw(); }; }); };
  draw();
});

/* ---- 3.11 Build a HACCP plan ---- */
SIMS.haccp = DS('Build a HACCP plan', 'For each step in making a chicken curry, decide whether it is a <b>critical control point</b>, then choose the critical limit that would be monitored.', body => {
  const ST = [['Delivery of raw chicken', true, 'chilled at ≤ 8 °C (ideally ≤ 5 °C) on arrival', ['≤ 8 °C (ideally ≤ 5 °C)', 'below 20 °C', 'any temperature if in date']], ['Storage in fridge', true, '0–5 °C, raw below cooked', ['0–5 °C, raw below cooked', '10 °C', 'room temperature, covered']], ['Chopping onions', false, 'not a CCP — general hygiene (prerequisite)', ['not a CCP', '75 °C', '−18 °C']], ['Cooking the curry', true, 'core ≥ 75 °C for 30 s (probe)', ['core ≥ 75 °C for 30 s', 'core 50 °C', 'until it looks done']], ['Hot holding for service', true, '≥ 63 °C, max 2 hours', ['≥ 63 °C, max 2 hours', '≥ 40 °C', '5–63 °C']], ['Cooling leftovers', true, 'to < 8 °C within 90 minutes', ['< 8 °C within 90 minutes', 'overnight on the side', 'within 6 hours']], ['Garnishing with coriander', false, 'not a CCP — wash herbs (prerequisite)', ['not a CCP', '75 °C', 'MAP']]];
  const ans = ST.map(() => ({}));
  const draw = () => { const score = ans.filter((a, i) => a.ccp === ST[i][1] && (!ST[i][1] || a.lim === 0)).length;
    body.innerHTML = `<div class="pill good" style="margin-bottom:10px">${score} / ${ST.length} steps correct</div><div class="sort-list">${ST.map((s, i) => { const a = ans[i]; return `<div class="sort-row ${a.ccp === undefined ? '' : a.ccp === s[1] && (!s[1] || a.lim === 0) ? 'ok' : a.ccp !== s[1] || a.lim !== undefined ? 'no' : ''}"><div class="sort-t"><b>${i + 1}. ${s[0]}</b></div><div class="sort-b"><button class="pickb${a.ccp === true ? ' on' : ''}" data-c="${i}" data-v="1">CCP</button><button class="pickb${a.ccp === false ? ' on' : ''}" data-c="${i}" data-v="0">not a CCP</button></div>
      ${a.ccp === true && s[1] ? `<div class="sort-why">Critical limit: ${s[3].map((o, k) => ({ o, k })).sort((x, y) => (x.o > y.o ? 1 : -1)).map(({ o, k }) => `<button class="pickb${a.lim === k ? ' on' : ''}" data-l="${i}" data-k="${k}" style="margin:2px">${o}</button>`).join('')}</div>` : ''}
      ${a.ccp !== undefined && (a.ccp !== s[1] || !s[1] || a.lim !== undefined) ? `<div class="sort-why">${a.ccp === s[1] && (!s[1] || a.lim === 0) ? '<span class="flag ok">✓</span>' : '<span class="flag no">✗</span>'} ${s[2]}</div>` : ''}</div>`; }).join('')}</div>`;
    $$('[data-c]', body).forEach(b => b.onclick = () => { const i = +b.dataset.c; ans[i] = { ccp: b.dataset.v === '1' }; draw(); }); $$('[data-l]', body).forEach(b => b.onclick = () => { const i = +b.dataset.l; ans[i].lim = +b.dataset.k; ans[i].lim === 0 ? sfx.good() : sfx.bad(); draw(); }); };
  draw();
});
