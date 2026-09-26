/* ==========================================================
   UNIT 1 explorations: nutrients, digestion, classification, health, life stages, planning
   ========================================================== */

/* ---- 1.1 Build a sugar: condensation and hydrolysis ---- */
SIMS.sugars = {
  title: 'Build a sugar', h: 380, noPlay: true,
  controls: [{ type: 'seg', id: 'pair', label: 'Monosaccharides', value: 'mal', options: [['mal', 'glucose + glucose'], ['suc', 'glucose + fructose'], ['lac', 'glucose + galactose']] },
    { type: 'button', act: 'join', label: 'Condense (join)' }, { type: 'button', act: 'split', label: 'Hydrolyse (split)' }],
  readouts: ['Product', 'Found in', 'Water'],
  note: 'Condensation joins two monosaccharides with a glycosidic bond and releases water. Digestion reverses it by <b>hydrolysis</b>, using an enzyme (maltase, sucrase or lactase).',
  info: { mal: ['maltose', 'malted drinks, germinating grain', 'glucose', 'maltase'], suc: ['sucrose', 'table sugar, cane, beet', 'fructose', 'sucrase'], lac: ['lactose', 'milk and dairy', 'galactose', 'lactase'] },
  init(st) { st.k = 0; st.target = 0; st.w = 0; },
  action(st, a) { st.target = a === 'join' ? 1 : 0; },
  change(st) { st.k = 0; st.target = 0; },
  step(st, dt) { st.k += clamp(st.target - st.k, -dt * 1.2, dt * 1.2); },
  draw(c, W, H, st, C) {
    const I = this.info[st.p.pair], k = st.k, cy = H * 0.45, gap = lerp(170, 72, k), cx = W / 2;
    const ring = (x, lab, col, five) => { const n = five ? 5 : 6, r = five ? 34 : 38; c.beginPath(); for (let i = 0; i <= n; i++) { const a = (five ? -Math.PI / 2 : Math.PI / 6) + i * 2 * Math.PI / n; const px = x + r * Math.cos(a), py = cy + r * Math.sin(a); i ? c.lineTo(px, py) : c.moveTo(px, py); } c.fillStyle = hexA(col, .16); c.fill(); c.strokeStyle = col; c.lineWidth = 2.4; c.stroke(); CV.text(c, lab, x, cy + (five ? 6 : 0), C.ink, 12, 'center', 700); };
    ring(cx - gap / 2 - 38, 'glucose', C.u1);
    ring(cx + gap / 2 + 38, I[2], st.p.pair === 'suc' ? C.u2 : st.p.pair === 'lac' ? C.u3 : C.u1, st.p.pair === 'suc');
    if (k > 0.98) { CV.line(c, cx - 36, cy, cx + 36, cy, C.ink, 3); CV.text(c, 'O', cx, cy - 12, C.ink, 13, 'center', 700); CV.text(c, 'glycosidic bond', cx, cy + 58, C.muted, 11, 'center'); }
    else { CV.text(c, '–OH', cx - gap / 2 + 6, cy, C.u3, 13, 'center', 700); CV.text(c, 'HO–', cx + gap / 2 - 6, cy, C.u3, 13, 'center', 700); }
    // water molecule leaving / arriving
    const wy = cy - 40 - 90 * k, wx = cx; CV.circle(c, wx, wy, 13, hexA(C.u3, .25), C.u3, 2); CV.text(c, 'H₂O', wx, wy, C.ink, 11, 'center', 700);
    CV.text(c, k > 0.98 ? `${I[0]} (disaccharide)` : k < 0.02 ? 'two monosaccharides' : k > st.target ? 'hydrolysis…' : 'condensation…', W / 2, H - 50, C.ink, 16, 'center', 700);
    CV.text(c, k > 0.98 ? `digested by ${I[3]}` : 'C₆H₁₂O₆ + C₆H₁₂O₆', W / 2, H - 26, C.muted, 12, 'center');
  },
  read(st) { const I = this.info[st.p.pair]; return [st.k > .98 ? I[0] : '—', I[1], st.k > .98 ? 'released' : st.k < .02 ? 'added back' : '…']; }
};

/* ---- 1.2 Protein complementation ---- */
const AA = ['lysine', 'methionine', 'tryptophan', 'threonine', 'leucine'];
const AA_FOOD = { rice: [0.55, 1.1, 1.1, 0.9, 1.1], wheat: [0.45, 1.0, 1.1, 0.8, 1.0], beans: [1.2, 0.6, 0.8, 1.0, 1.1], lentils: [1.1, 0.55, 0.7, 1.0, 1.0], peanuts: [0.65, 0.7, 0.9, 0.8, 1.0], soya: [1.1, 0.95, 1.1, 1.05, 1.1], egg: [1.25, 1.4, 1.3, 1.2, 1.2], quinoa: [1.05, 1.0, 1.1, 1.0, 1.0] };
SIMS.protein = {
  title: 'Protein complementation', h: 380, noPlay: true,
  controls: [{ type: 'seg', id: 'a', label: 'Food A', value: 'rice', options: [['rice', 'rice'], ['wheat', 'bread'], ['peanuts', 'peanuts'], ['quinoa', 'quinoa'], ['egg', 'egg']] },
    { type: 'seg', id: 'b', label: 'Food B', value: 'none', options: [['none', 'none'], ['beans', 'beans'], ['lentils', 'lentils'], ['soya', 'soya'], ['wheat', 'bread']] }],
  readouts: ['Limiting amino acid', 'Biological value'],
  note: 'Bars show each indispensable amino acid relative to what the body needs (the dashed line = 100%). The shortest bar is the <b>limiting amino acid</b>. Cereals lack lysine; pulses lack methionine — together they complement each other.',
  mix(st) { const A = AA_FOOD[st.p.a], B = st.p.b === 'none' ? null : AA_FOOD[st.p.b]; return A.map((v, i) => B ? (v + B[i]) / 2 : v); },
  draw(c, W, H, st, C) {
    const v = this.mix(st), x0 = 150, bw = W - x0 - 40, y0 = 40, bh = 42, sc = bw / 1.5, mi = v.indexOf(Math.min(...v));
    CV.line(c, x0 + sc, y0 - 16, x0 + sc, y0 + AA.length * (bh + 14), C.ink, 1.5, [6, 4]); CV.text(c, '100% of need', x0 + sc, y0 - 24, C.muted, 11, 'center');
    AA.forEach((n, i) => { const y = y0 + i * (bh + 14); CV.text(c, n, x0 - 12, y + bh / 2, C.ink, 13, 'right', 600); CV.rrect(c, x0, y, sc * 1.5, bh, 6, hexA(C.muted, .1)); CV.rrect(c, x0, y, sc * clamp(v[i], 0, 1.5), bh, 6, i === mi && v[i] < 1 ? C.bad : v[i] < 1 ? C.u5 : C.u1); CV.mono(c, Math.round(v[i] * 100) + '%', x0 + sc * clamp(v[i], 0, 1.5) + 8, y + bh / 2, C.ink, 12); });
    const lbl = st.p.b === 'none' ? st.p.a : `${st.p.a} + ${st.p.b}`; CV.text(c, lbl, W / 2, H - 24, C.ink, 15, 'center', 700);
  },
  read(st) { const v = this.mix(st), m = Math.min(...v); return [m >= 1 ? 'none — complete' : AA[v.indexOf(m)], m >= 1 ? 'high (HBV)' : m > 0.8 ? 'fairly high' : 'low (LBV)']; }
};

/* ---- 1.3 Fats: saturation and state ---- */
const FATS = { butter: [52, 21, 3, 'dairy'], lard: [41, 44, 10, 'pork fat'], coconut: [87, 6, 2, 'plant (tropical)'], olive: [14, 73, 11, 'plant'], rapeseed: [7, 61, 28, 'plant'], sunflower: [10, 20, 66, 'plant'], salmon: [21, 35, 40, 'oily fish (omega-3)'] };
SIMS.fats = {
  title: 'Fats and oils', h: 380,
  controls: [{ type: 'seg', id: 'f', label: 'Fat', value: 'butter', options: Object.keys(FATS).map(k => [k, k]) }, { id: 'T', label: 'Room temperature', min: 0, max: 40, step: 1, value: 20, fmt: v => v + ' °C' }],
  readouts: ['Saturated', 'Monounsaturated', 'Polyunsaturated', 'At this temperature'],
  note: 'Straight saturated chains pack tightly, so fats high in saturates are solid at room temperature. The kinks from C=C double bonds stop unsaturated chains packing — oils are liquid.',
  init(st) { st.mol = Array.from({ length: 18 }, (_, i) => ({ x: Math.random(), y: Math.random(), a: Math.random() * 6, v: Math.random() })); },
  state(st) { const [s] = FATS[st.p.f], mp = -18 + s * 0.62; return st.p.T > mp + 6 ? 'liquid' : st.p.T > mp - 6 ? 'soft / semi-solid' : 'solid'; },
  step(st, dt) { const liquid = this.state(st); const sp = liquid === 'liquid' ? .25 : liquid === 'solid' ? .01 : .07; st.mol.forEach(m => { m.x = (m.x + (Math.random() - .5) * sp * dt * 3 + 1) % 1; m.y = (m.y + (Math.random() - .5) * sp * dt * 3 + 1) % 1; m.a += (Math.random() - .5) * sp * dt * 10; }); },
  draw(c, W, H, st, C) {
    const [s, m, p, src] = FATS[st.p.f], box = { x: 30, y: 30, w: W * 0.55, h: H - 90 }, state = this.state(st);
    CV.rrect(c, box.x, box.y, box.w, box.h, 12, C.surface, C.line); const solid = state === 'solid';
    st.mol.forEach((mol, i) => { const sat = i / st.mol.length < s / 100, kinks = sat ? 0 : (i / st.mol.length < (s + m) / 100 ? 1 : 2);
      const x = solid ? box.x + 30 + (i % 6) * (box.w - 60) / 5 : box.x + 20 + mol.x * (box.w - 40), y = solid ? box.y + 30 + Math.floor(i / 6) * (box.h - 60) / 2 : box.y + 20 + mol.y * (box.h - 40), a = solid ? Math.PI / 2 : mol.a;
      c.save(); c.translate(x, y); c.rotate(a); c.strokeStyle = sat ? C.u2 : kinks === 1 ? C.u5 : C.u1; c.lineWidth = 2.2; c.beginPath(); let px = -22, py = 0, dir = 0; c.moveTo(px, py); for (let k = 0; k < 8; k++) { if (kinks && (k === 4 || (kinks === 2 && k === 2))) dir += 0.7; px += 6 * Math.cos(dir); py += 6 * Math.sin(dir) + (k % 2 ? 2 : -2); c.lineTo(px, py); } c.stroke(); c.restore(); });
    CV.text(c, `${st.p.f} — ${src}`, box.x + box.w / 2, box.y + box.h + 22, C.ink, 14, 'center', 700);
    const bx = box.x + box.w + 40, bw = W - bx - 30, by = box.y + 10, bh = box.h - 30; let y = by;
    [[s, 'saturated', C.u2], [m, 'mono', C.u5], [p, 'poly', C.u1]].forEach(([v, n, col]) => { const hh = bh * v / 100; CV.rrect(c, bx, y, bw, Math.max(0, hh - 2), 4, col); if (hh > 18) CV.text(c, `${n} ${v}%`, bx + bw / 2, y + hh / 2, '#fff', 11.5, 'center', 700); y += hh; });
    CV.text(c, 'fatty acid profile', bx + bw / 2, by - 12, C.muted, 11, 'center');
  },
  read(st) { const [s, m, p] = FATS[st.p.f]; return [s + '%', m + '%', p + '%', this.state(st)]; }
};

/* ---- 1.4 Vitamins and minerals explorer ---- */
SIMS.micros = explorerSim('Micronutrient explorer', 'Pick a vitamin or mineral to see what it does, where it comes from and what happens with too little or too much.', [
  ['Vitamin A', '<h3>Vitamin A (retinol · beta-carotene) — fat-soluble</h3><p><b>Functions:</b> vision in dim light (rhodopsin), healthy skin and mucous membranes, immune system; beta-carotene is an antioxidant.</p><p><b>Sources:</b> retinol — liver, oily fish, eggs, dairy, fortified spreads; beta-carotene — carrots, sweet potato, dark green leafy vegetables, orange fruit.</p><p><b>Deficiency:</b> night blindness, xerophthalmia (leading preventable cause of childhood blindness worldwide), infections.</p><p><b>Excess:</b> stored in the liver — toxic; can cause birth defects, so pregnant women avoid liver and liver pâté.</p>', 'fat'],
  ['Vitamin D', '<h3>Vitamin D (cholecalciferol) — fat-soluble</h3><p><b>Functions:</b> absorption of calcium and phosphorus for bones and teeth; muscle function; immunity.</p><p><b>Sources:</b> sunlight on skin (UVB, April–September in the UK); oily fish, eggs, fortified cereals and spreads.</p><p><b>Deficiency:</b> rickets (children), osteomalacia (adults); contributes to osteoporosis. Everyone should consider 10 µg a day in autumn and winter.</p><p><b>Excess:</b> hypercalcaemia (from supplements only).</p>', 'fat'],
  ['Vitamin E', '<h3>Vitamin E (tocopherols) — fat-soluble</h3><p><b>Functions:</b> antioxidant — protects cell membranes and PUFA from oxidation.</p><p><b>Sources:</b> vegetable oils, nuts, seeds, wheatgerm, avocado.</p><p><b>Deficiency:</b> rare — nerve and muscle damage.</p>', 'fat'],
  ['Vitamin K', '<h3>Vitamin K — fat-soluble</h3><p><b>Functions:</b> blood clotting; bone health.</p><p><b>Sources:</b> green leafy vegetables, vegetable oils, cereal grains; made by gut bacteria.</p><p><b>Deficiency:</b> slow clotting, bleeding — newborns are given vitamin K at birth.</p>', 'fat'],
  ['B vitamins', '<h3>B group — water-soluble</h3><p><b>Thiamin (B1), riboflavin (B2), niacin (B3):</b> coenzymes to release energy from carbohydrate, fat and protein. Sources: wholegrains, fortified cereals, meat, milk, eggs. Deficiency: beriberi (B1), cracked lips (B2), pellagra (B3).</p><p><b>Folate / folic acid (B9):</b> cell division and making red blood cells; prevents neural tube defects — 400 µg/day before conception to week 12 of pregnancy. Sources: green leafy veg, pulses, fortified cereals and (from 2026) fortified flour.</p><p><b>B12 (cobalamin):</b> nerve cells and red blood cells, with folate. Only in animal foods and fortified foods — vegans need fortified foods or supplements. Deficiency: pernicious (megaloblastic) anaemia, nerve damage.</p>', 'water'],
  ['Vitamin C', '<h3>Vitamin C (ascorbic acid) — water-soluble</h3><p><b>Functions:</b> makes collagen (connective tissue, wound healing); helps absorption of non-haem iron; antioxidant; immunity.</p><p><b>Sources:</b> citrus fruit, berries, kiwi, peppers, broccoli, potatoes.</p><p><b>Deficiency:</b> scurvy — bleeding gums, poor wound healing, tiredness.</p><p><b>Losses:</b> destroyed by heat, oxygen, light and alkali; leaches into cooking water.</p>', 'water'],
  ['Calcium', '<h3>Calcium — mineral</h3><p><b>Functions:</b> structure of bones and teeth (with phosphorus and vitamin D); blood clotting; nerve and muscle function.</p><p><b>Sources:</b> milk, cheese, yogurt, fortified plant milks, canned fish with bones, white bread (fortified), green leafy veg.</p><p><b>Deficiency:</b> rickets, osteomalacia, osteoporosis (low peak bone mass).</p>', 'mineral'],
  ['Iron', '<h3>Iron — mineral</h3><p><b>Functions:</b> haemoglobin in red blood cells carries oxygen; myoglobin in muscle; enzymes.</p><p><b>Sources:</b> haem iron (well absorbed) — red meat, liver, fish; non-haem iron — pulses, dark green veg, fortified cereals, dried fruit. Vitamin C helps; tannins in tea and phytates reduce absorption.</p><p><b>Deficiency:</b> iron-deficiency anaemia — tiredness, pale skin, breathlessness. At risk: teenage girls, women with heavy periods, pregnant women, vegans.</p>', 'mineral'],
  ['Sodium', '<h3>Sodium — mineral</h3><p><b>Functions:</b> fluid balance, nerve impulses.</p><p><b>Sources:</b> salt (sodium chloride) — mostly hidden in processed foods: bread, cereals, ready meals, cured meats, cheese, sauces.</p><p><b>Excess:</b> high blood pressure → stroke, CHD. Adults ≤ 6 g salt a day. Salt = sodium × 2.5.</p>', 'mineral'],
  ['Fluoride', '<h3>Fluoride — trace element</h3><p><b>Functions:</b> strengthens tooth enamel, making it more resistant to acid; helps remineralisation.</p><p><b>Sources:</b> fluoridated water and toothpaste, tea, fish.</p><p><b>Excess:</b> dental fluorosis (mottled teeth).</p>', 'trace'],
  ['Iodine', '<h3>Iodine — trace element</h3><p><b>Functions:</b> makes thyroid hormones that control metabolic rate; brain development in the fetus.</p><p><b>Sources:</b> milk, dairy, fish, seaweed, iodised salt.</p><p><b>Deficiency:</b> goitre (enlarged thyroid); impaired development in babies.</p>', 'trace'],
  ['Potassium, magnesium, zinc, phosphorus', '<h3>Other minerals</h3><p><b>Potassium:</b> fluid balance, lowers blood pressure — fruit, vegetables, potatoes.</p><p><b>Magnesium:</b> bone structure, energy release, muscle and nerves — wholegrains, nuts, green veg.</p><p><b>Zinc:</b> enzymes, growth, wound healing, immunity — meat, shellfish, dairy, wholegrains.</p><p><b>Phosphorus:</b> bones and teeth (calcium phosphate), ATP — found in most protein foods.</p>', 'mineral']
]);

/* ---- 1.5 Fluid balance ---- */
SIMS.fluid = {
  title: 'Fluid balance', h: 400,
  controls: [{ id: 'drink', label: 'Drinks per day', min: 0.4, max: 3.5, step: 0.1, value: 1.6, fmt: v => v.toFixed(1) + ' L' },
    { id: 'temp', label: 'Air temperature', min: 5, max: 38, step: 1, value: 18, fmt: v => v + ' °C' },
    { id: 'ex', label: 'Exercise', min: 0, max: 120, step: 10, value: 30, fmt: v => v + ' min' }],
  readouts: ['Intake', 'Losses', 'Balance', 'Urine colour'],
  note: 'Food provides about 0.8 L and metabolic water about 0.3 L. Sweat losses rise sharply with heat and exercise, so drinks must rise too. Even 2% dehydration reduces concentration and performance.',
  calc(st) { const food = 0.8, met = 0.3, sweat = 0.4 + Math.max(0, st.p.temp - 20) * 0.06 + st.p.ex / 60 * (0.6 + Math.max(0, st.p.temp - 18) * 0.03), breath = 0.35, faeces = 0.1, need = sweat + breath + faeces + 1.0; const inn = st.p.drink + food + met; const urine = clamp(inn - sweat - breath - faeces, 0.3, 3); const bal = inn - (sweat + breath + faeces + Math.max(urine, 0.5)); return { inn, sweat, breath, faeces, urine, bal, need }; },
  init(st) { st.level = 0.7; },
  step(st, dt) { const r = this.calc(st); st.level = clamp(st.level + (clamp(0.7 + r.bal * 0.25, 0.1, 0.95) - st.level) * dt * 1.5, 0.05, 0.98); },
  draw(c, W, H, st, C) {
    const r = this.calc(st), cx = W * 0.5;
    glassTube(c, C, cx - 50, 50, 100, H - 130, st.level, hexA(C.u3, .55), 'body water');
    const ins = [['drinks', st.p.drink, C.u3], ['food', 0.8, C.u1], ['metabolic', 0.3, C.u5]], outs = [['urine', r.urine, C.u5], ['sweat', r.sweat, C.u2], ['breath', r.breath, C.info], ['faeces', r.faeces, C.muted]];
    ins.forEach(([n, v, col], i) => { const y = 80 + i * 70; CV.arrow(c, 40, y, cx - 60, y + 20, col, 1 + v * 3, 12); CV.text(c, `${n} ${v.toFixed(1)} L`, 40, y - 16, C.ink, 12, 'left', 600); });
    outs.forEach(([n, v, col], i) => { const y = 80 + i * 60; CV.arrow(c, cx + 60, y + 10, W - 40, y + 20, col, 1 + v * 3, 12); CV.text(c, `${n} ${v.toFixed(2)} L`, W - 40, y + 2, C.ink, 12, 'right', 600); });
    const uc = mixCol('#F7EE9A', '#B8680F', clamp(1 - (r.urine - 0.4) / 1.6, 0, 1)); CV.circle(c, W - 70, H - 50, 20, uc, C.line); CV.text(c, 'urine', W - 100, H - 50, C.muted, 11, 'right');
  },
  read(st) { const r = this.calc(st); return [r.inn.toFixed(1) + ' L', (r.sweat + r.breath + r.faeces + Math.max(r.urine, 0.5)).toFixed(1) + ' L', r.bal < -0.2 ? '<span style="color:var(--bad)">dehydrating</span>' : '<span style="color:var(--good)">balanced</span>', r.urine < 0.8 ? 'dark — drink more' : r.urine < 1.3 ? 'straw — good' : 'pale'] ; }
};

/* ---- 1.6 Energy from food ---- */
SIMS.energy = DS('Energy calculator', 'Move the sliders to build a food or meal. The bar compares where the energy comes from with the recommended balance (dashed markers).', body => {
  body.innerHTML = `<div class="ds-grid"><div>${dsRange('c', 'Carbohydrate', 0, 150, 1, 60, ' g')}${dsRange('s', 'of which free sugars', 0, 80, 1, 10, ' g')}${dsRange('p', 'Protein', 0, 80, 1, 20, ' g')}${dsRange('f', 'Fat', 0, 80, 1, 15, ' g')}${dsRange('a', 'Alcohol', 0, 40, 1, 0, ' g')}${dsRange('fb', 'Fibre', 0, 20, 1, 5, ' g')}</div><div class="ds-out" id="eo"></div></div>`;
  dsWire(body, () => { const c = val(body, 'c'), s = Math.min(val(body, 's'), c), p = val(body, 'p'), f = val(body, 'f'), a = val(body, 'a'), fb = val(body, 'fb'), E = 4 * c + 4 * p + 9 * f + 7 * a + 2 * fb || 1;
    const pc = x => (x / E * 100);
    $('#eo', body).innerHTML = `<div class="ds-big">${Math.round(E)} kcal <span class="muted" style="font-size:18px">≈ ${Math.round(E * 4.184)} kJ</span></div>
      ${hbar('carbohydrate', pc(4 * c), 100, FOODCOL.carb, pc(4 * c).toFixed(0) + '%', 50)}${hbar('free sugars', pc(4 * s), 100, '#E07A2E', pc(4 * s).toFixed(0) + '%', 5)}${hbar('protein', pc(4 * p), 100, FOODCOL.protein, pc(4 * p).toFixed(0) + '%', 15)}${hbar('fat', pc(9 * f), 100, FOODCOL.fat, pc(9 * f).toFixed(0) + '%', 35)}${hbar('alcohol', pc(7 * a), 100, '#7A6A5C', pc(7 * a).toFixed(0) + '%')}${hbar('fibre', pc(2 * fb), 100, FOODCOL.fibre, pc(2 * fb).toFixed(0) + '%')}
      <p class="small">$E = 4(${c}) + 4(${p}) + 9(${f})${a ? ` + 7(${a})` : ''}${fb ? ` + 2(${fb})` : ''} = ${Math.round(E)}$ kcal. ${pc(9 * f) > 35 ? '<span class="flag no">fat above 35% of energy</span>' : '<span class="flag ok">fat ≤ 35%</span>'} ${pc(4 * s) > 5 ? '<span class="flag no">free sugars above 5%</span>' : '<span class="flag ok">free sugars ≤ 5%</span>'} ${pc(4 * p) > 15 ? '<span class="flag mid">protein above 15%</span>' : ''}</p>`.replace(/\$([^$]+)\$/g, (_, m) => M(m)); });
});

/* ---- 1.7 Digestion journey ---- */
const DIG = {
  starch: [['mouth', 'salivary amylase: starch → maltose', 0.08], ['stomach', 'acid stops amylase', 0.3], ['duodenum', 'pancreatic amylase: starch → maltose', 0.5], ['small intestine', 'maltase: maltose → glucose; absorbed into blood', 0.7], ['large intestine', 'fibre (NSP) fermented by bacteria', 0.92]],
  protein: [['mouth', 'chewing only — no protein digestion', 0.08], ['stomach', 'pepsin (in HCl): protein → polypeptides', 0.3], ['duodenum', 'trypsin (pancreas): polypeptides → peptides', 0.5], ['small intestine', 'peptidases: peptides → amino acids; absorbed into blood', 0.7], ['large intestine', 'little protein reaches here', 0.92]],
  fat: [['mouth', 'lingual lipase (small effect)', 0.08], ['stomach', 'churning mixes fat into droplets', 0.3], ['duodenum', 'bile emulsifies; pancreatic lipase: fat → fatty acids + glycerol', 0.5], ['small intestine', 'absorbed into lacteals (lymph) as micelles', 0.7], ['large intestine', 'undigested fat lost in faeces', 0.92]]
};
SIMS.digestion = {
  title: 'Digestion journey', h: 420,
  controls: [{ type: 'seg', id: 'n', label: 'Follow a nutrient', value: 'starch', options: [['starch', 'starch'], ['protein', 'protein'], ['fat', 'fat']] }],
  readouts: ['Where', 'What happens'],
  note: 'Watch large molecules being broken down by enzymes into small soluble molecules that can be absorbed through the villi of the small intestine.',
  init(st) { st.t = 0; },
  pathPt(W, H, u) { const P = [[0.2, 0.08], [0.2, 0.25], [0.35, 0.36], [0.5, 0.42], [0.42, 0.5], [0.6, 0.55], [0.4, 0.62], [0.6, 0.68], [0.4, 0.74], [0.3, 0.84], [0.7, 0.84], [0.72, 0.62], [0.78, 0.9]]; const n = P.length - 1, f = clamp(u, 0, 1) * n, i = Math.min(n - 1, Math.floor(f)), k = f - i; return [lerp(P[i][0], P[i + 1][0], k) * W, lerp(P[i][1], P[i + 1][1], k) * H]; },
  draw(c, W, H, st, C) {
    const u = (st.t * 0.07) % 1.05, stages = DIG[st.p.n], gw = W * 0.62;
    c.lineCap = 'round'; c.lineJoin = 'round'; c.strokeStyle = hexA(C.u2, .25); c.lineWidth = 26; c.beginPath(); for (let k = 0; k <= 100; k++) { const [x, y] = this.pathPt(gw, H, k / 100); k ? c.lineTo(x, y) : c.moveTo(x, y); } c.stroke();
    stages.forEach(([n, d, pos]) => { const [x, y] = this.pathPt(gw, H, pos); CV.circle(c, x, y, 6, u >= pos ? C.accent : C.surface, C.ink, 1.5); CV.text(c, n, x + 16, y - 6, C.ink, 12, 'left', 700); });
    const [bx, by] = this.pathPt(gw, H, Math.min(u, 1)), stageIdx = stages.reduce((a, s, i) => u >= s[2] ? i : a, 0), size = Math.max(0, 4 - stageIdx), col = st.p.n === 'starch' ? C.u1 : st.p.n === 'protein' ? C.u7 : C.u5;
    for (let k = 0; k < 6; k++) { const ang = k / 6 * Math.PI * 2 + st.t, r = 4 + size * 3; if (size > 1) { CV.circle(c, bx + r * Math.cos(ang) * 0.3, by + r * Math.sin(ang) * 0.3, 5 + size * 1.5, hexA(col, .6), col); } else CV.circle(c, bx + 18 * Math.cos(ang), by + 18 * Math.sin(ang), 4, col); }
    const [n, d] = stages[stageIdx]; CV.rrect(c, gw + 10, 40, W - gw - 30, 150, 10, C.surface, C.line); CV.text(c, n.toUpperCase(), gw + 24, 62, col, 13, 'left', 700);
    const words = d.split(' '); let line = '', ly = 86; words.forEach(w => { if ((line + w).length > 26) { CV.text(c, line, gw + 24, ly, C.ink, 12.5); line = ''; ly += 18; } line += w + ' '; }); CV.text(c, line, gw + 24, ly, C.ink, 12.5);
  },
  read(st) { const u = (st.t * 0.07) % 1.05, stages = DIG[st.p.n], s = stages.reduce((a, x) => u >= x[2] ? x : a, stages[0]); return [s[0], s[1]]; }
};

/* ---- 1.8 Eatwell plate builder ---- */
const EW_FOODS = [['apple', 0, 80], ['broccoli', 0, 80], ['carrots', 0, 80], ['banana', 0, 100], ['tinned tomatoes', 0, 80], ['wholemeal toast', 1, 80], ['pasta', 1, 180], ['rice', 1, 160], ['jacket potato', 1, 180], ['porridge', 1, 160], ['baked beans', 2, 130], ['chicken', 2, 120], ['salmon', 2, 120], ['egg', 2, 60], ['lentil dahl', 2, 150], ['milk', 3, 200], ['yogurt', 3, 125], ['cheese', 3, 30], ['rapeseed oil', 4, 10], ['chocolate', 5, 45], ['crisps', 5, 25], ['cola', 5, 330]];
const EW_GROUPS = [['Fruit & veg', 40, 'var(--u1)'], ['Starchy carbs', 38, 'var(--u5)'], ['Protein foods', 12, 'var(--u2)'], ['Dairy & alternatives', 8, 'var(--u3)'], ['Oils & spreads', 1, 'var(--u4)'], ['HFSS (eat less)', 0, 'var(--u9)']];
SIMS.eatwell = DS('Build an Eatwell day', 'Tap foods to add a portion to your day (tap a chip to remove it). Compare your mix of portion weights with the Eatwell Guide proportions.', body => {
  let chosen = [];
  const draw = () => { const tot = chosen.reduce((a, i) => a + EW_FOODS[i][2], 0) || 1, g = EW_GROUPS.map((_, j) => chosen.filter(i => EW_FOODS[i][1] === j).reduce((a, i) => a + EW_FOODS[i][2], 0) / tot * 100);
    body.innerHTML = `<div class="ds-grid"><div><div class="opt-grid" style="grid-template-columns:repeat(auto-fill,minmax(120px,1fr))">${EW_FOODS.map((f, i) => `<button class="pickb" data-add="${i}" style="border-left:4px solid ${EW_GROUPS[f[1]][2]}">${f[0]}</button>`).join('')}</div></div>
      <div class="ds-out"><div class="chip-list">${chosen.map((i, k) => `<span data-rm="${k}" style="cursor:pointer;border-left:4px solid ${EW_GROUPS[EW_FOODS[i][1]][2]}">${EW_FOODS[i][0]} ✕</span>`).join('') || '<span class="muted">Your day is empty — add some foods.</span>'}</div>
      ${EW_GROUPS.map((gr, j) => hbar(gr[0], g[j], 60, gr[2], g[j].toFixed(0) + '%', gr[1] || null)).join('')}
      <p class="small">${chosen.length < 4 ? 'Add at least four foods.' : g[0] >= 30 && g[1] >= 25 && g[5] < 10 ? '<span class="flag ok">Close to the Eatwell balance</span> Good variety — base meals on starchy carbohydrates and plenty of fruit and vegetables.' : `<span class="flag mid">Not balanced yet</span> ${g[0] < 30 ? 'More fruit and vegetables. ' : ''}${g[1] < 25 ? 'More starchy, wholegrain carbohydrates. ' : ''}${g[5] >= 10 ? 'Fewer HFSS foods and drinks. ' : ''}${g[2] > 25 ? 'Protein foods are over-represented. ' : ''}`}</p></div></div>`;
    $$('[data-add]', body).forEach(b => b.onclick = () => { chosen.push(+b.dataset.add); sfx.tick(); draw(); }); $$('[data-rm]', body).forEach(b => b.onclick = () => { chosen.splice(+b.dataset.rm, 1); draw(); }); };
  draw();
});

/* ---- 1.8 Glycaemic response ---- */
const GI_FOODS = { 'white bread': [75, 28], 'cornflakes': [81, 26], 'porridge': [55, 25], 'basmati rice': [58, 40], 'lentils': [32, 20], 'apple': [36, 16], 'watermelon': [72, 6], 'boiled potato': [78, 30] };
SIMS.gi = {
  title: 'Glycaemic response', h: 380, noPlay: true,
  controls: [{ type: 'seg', id: 'f', label: 'Food', value: 'white bread', options: Object.keys(GI_FOODS).map(k => [k, k]) }, { id: 'k', label: 'Portion size', min: 0.5, max: 2, step: 0.25, value: 1, fmt: v => '×' + v }, { type: 'seg', id: 'fat', label: 'Eaten with fat / protein / fibre?', value: 0, options: [[0, 'no'], [1, 'yes']] }],
  readouts: ['GI', 'Carbohydrate', 'Glycaemic load', 'Rating'],
  note: 'GI ranks how fast a carbohydrate raises blood glucose; GL also accounts for how much you eat: $"GL" = "GI" ÷ 100 × "carbohydrate (g)"$. Fat, protein and fibre slow stomach emptying and flatten the curve.',
  calc(st) { const [gi0, c0] = GI_FOODS[st.p.f], gi = gi0 * (st.p.fat ? 0.8 : 1), c = c0 * st.p.k; return { gi, c, gl: gi / 100 * c }; },
  draw(c, W, H, st, C) { const r = this.calc(st), peak = r.gl * 0.16, tp = 25 + (100 - r.gi) * 0.5;
    const curve = t => 4.6 + peak * (t / tp) * Math.exp(1 - t / tp) - (r.gi > 70 ? 0.6 * Math.max(0, (t - tp * 2.2) / 60) * Math.exp(-(t - tp * 2.2) / 60) * 3 : 0);
    const P = CV.plot(c, C, { x: 60, y: 30, w: W - 100, h: H - 90 }, { xr: [0, 150], yr: [3, 10], xl: 'minutes after eating', yl: 'blood glucose / mmol/L', series: [{ f: t => 4.6, col: C.muted, w: 1, dash: [5, 4] }, { f: curve, col: r.gi >= 70 ? C.bad : r.gi > 55 ? C.u5 : C.good, w: 3 }] });
    [0, 30, 60, 90, 120, 150].forEach(t => CV.mono(c, t, P.X(t), H - 44, C.muted, 10, 'center')); [4, 6, 8, 10].forEach(v => CV.mono(c, v, 50, P.Y(v), C.muted, 10, 'right'));
  },
  read(st) { const r = this.calc(st); return [Math.round(r.gi) + (r.gi <= 55 ? ' (low)' : r.gi < 70 ? ' (medium)' : ' (high)'), r.c.toFixed(0) + ' g', r.gl.toFixed(1), r.gl <= 10 ? 'low GL' : r.gl < 20 ? 'medium GL' : 'high GL']; }
};

/* ---- 1.8 Front-of-pack label ---- */
SIMS.label = DS('Front-of-pack label', 'Enter the nutrition information per 100 g and the portion size. The label shows traffic-light colours (per 100 g) and % reference intake (per portion).', body => {
  const TL = { fat: [3, 17.5, 21, 70], sat: [1.5, 5, 6, 20], sug: [5, 22.5, 27, 90], salt: [0.3, 1.5, 1.8, 6] };
  body.innerHTML = `<div class="ds-grid"><div>${dsSelect('pre', 'Try a product', [['0', 'custom'], ['1', 'tomato soup'], ['2', 'granola'], ['3', 'cheese and onion crisps'], ['4', 'margherita pizza'], ['5', 'fruit yogurt']], '0')}
    <table class="ds-table"><tr><th>per 100 g</th><th></th></tr>${[['kcal', 'Energy (kcal)', 250], ['fat', 'Fat (g)', 12], ['sat', 'Saturates (g)', 4], ['sug', 'Sugars (g)', 10], ['salt', 'Salt (g)', 0.8], ['por', 'Portion (g)', 100]].map(([id, n, v]) => `<tr><td>${n}</td><td><input type="number" step="0.1" min="0" id="${id}" value="${v}"></td></tr>`).join('')}</table></div><div id="lab"></div></div>`;
  const PRE = { 1: [45, 1.5, 0.3, 4.5, 0.6, 300], 2: [450, 18, 5, 22, 0.3, 45], 3: [530, 32, 2.6, 2.5, 1.4, 25], 4: [240, 9, 4.5, 3, 1.2, 175], 5: [95, 2.5, 1.6, 13, 0.1, 125] };
  $('#pre', body).addEventListener('input', () => { const p = PRE[val(body, 'pre')]; if (p) ['kcal', 'fat', 'sat', 'sug', 'salt', 'por'].forEach((id, i) => $('#' + id, body).value = p[i]); draw(); });
  const col = (k, v) => v <= TL[k][0] ? ['var(--good)', 'LOW'] : (v > TL[k][1] || false) ? ['var(--bad)', 'HIGH'] : ['var(--warn)', 'MED'];
  const draw = () => { const g = id => +$('#' + id, body).value || 0, por = g('por') / 100;
    const box = (n, k, v, ri, u = 'g') => { const [c, w] = k ? col(k, v) : ['var(--surface-2)', '']; const pv = v * por; return `<div style="flex:1;min-width:84px;border-radius:14px 14px 40px 40px;padding:10px 6px 14px;text-align:center;background:${k ? `color-mix(in oklab, ${c} 32%, var(--surface))` : 'var(--surface-2)'};border:2px solid ${k ? c : 'var(--line-2)'}"><div style="font-weight:700">${n}</div><div style="font:700 17px var(--f-mono)">${k ? pv.toFixed(1) + u : Math.round(pv) + ''}</div>${k ? `<div class="small" style="font-weight:700">${w}</div>` : `<div class="small">${Math.round(pv * 4.184)} kJ</div>`}<div class="small" style="margin-top:4px">${Math.round(pv / ri * 100)}%</div></div>`; };
    $('#lab', body).innerHTML = `<p class="small muted">Each portion (${g('por')} g) contains</p><div style="display:flex;gap:6px;flex-wrap:wrap">${box('Energy', null, g('kcal'), 2000)}${box('Fat', 'fat', g('fat'), 70)}${box('Saturates', 'sat', g('sat'), 20)}${box('Sugars', 'sug', g('sug'), 90)}${box('Salt', 'salt', g('salt'), 6)}</div><p class="small muted" style="margin-top:8px">% of an adult’s reference intake · typical values per 100 g: energy ${Math.round(g('kcal') * 4.184)} kJ / ${g('kcal')} kcal</p>
      <p class="small">Colours use the per-100 g thresholds (fat low ≤ 3 g, high > 17.5 g; saturates ≤ 1.5 / > 5; sugars ≤ 5 / > 22.5; salt ≤ 0.3 / > 1.5). Portions over 100 g use the per-portion high thresholds (fat > 21 g, saturates > 6 g, sugars > 27 g, salt > 1.8 g).</p>`; };
  dsWire(body, draw);
});

/* ---- 1.9 Cooking and vitamin C ---- */
SIMS.cooking = {
  title: 'Cooking and vitamin C', h: 380, noPlay: true,
  controls: [{ type: 'seg', id: 'm', label: 'Method', value: 'boil', options: [['boil', 'boiling'], ['steam', 'steaming'], ['micro', 'microwave'], ['stir', 'stir-fry']] }, { id: 't', label: 'Cooking time', min: 0, max: 20, step: 1, value: 8, fmt: v => v + ' min' }, { id: 'w', label: 'Water (boiling only)', min: 0.2, max: 2, step: 0.1, value: 1, fmt: v => v.toFixed(1) + ' L' }, { type: 'seg', id: 'cut', label: 'Pieces', value: 'large', options: [['large', 'large'], ['small', 'finely cut']] }],
  readouts: ['Vitamin C left', 'Lost to water', 'Destroyed by heat'],
  note: 'Vitamin C is water-soluble and destroyed by heat and oxygen. Losses rise with cooking time, the volume of water and the cut surface area. Steaming and microwaving keep the vegetable out of water.',
  calc(st) { const m = st.p.m, t = st.p.t, sa = st.p.cut === 'small' ? 1.6 : 1; const leach = m === 'boil' ? 1 - Math.exp(-0.045 * t * sa * (0.6 + 0.4 * st.p.w)) : m === 'steam' ? 1 - Math.exp(-0.006 * t * sa) : m === 'micro' ? 1 - Math.exp(-0.004 * t * sa) : 0; const heat = 1 - Math.exp(-(m === 'stir' ? 0.035 : 0.018) * t * sa); const left = clamp((1 - leach) * (1 - heat), 0, 1); return { left, leach: (1 - left) * leach / Math.max(1e-6, leach + heat), heat: (1 - left) * heat / Math.max(1e-6, leach + heat) }; },
  draw(c, W, H, st, C) { const self = this, r = this.calc(st);
    const P = CV.plot(c, C, { x: 60, y: 30, w: W * 0.55, h: H - 90 }, { xr: [0, 20], yr: [0, 100], xl: 'time / min', yl: 'vitamin C retained / %', series: ['boil', 'steam', 'micro', 'stir'].map((m, i) => ({ f: t => 100 * self.calc({ p: { ...st.p, m, t } }).left, col: [C.u3, C.u1, C.u4, C.u2][i], w: m === st.p.m ? 3.4 : 1.4, dash: m === st.p.m ? [] : [4, 4] })), dots: [[st.p.t, r.left * 100, C.accent, 6]] });
    ['boil', 'steam', 'micro', 'stir'].forEach((m, i) => CV.text(c, ['boiling', 'steaming', 'microwave', 'stir-fry'][i], W * 0.55 + 70, 50 + i * 20, [C.u3, C.u1, C.u4, C.u2][i], 11.5, 'left', m === st.p.m ? 700 : 500));
    const bx = W * 0.55 + 90, bw = W - bx - 30, by = 150, bh = H - 200; let y = by; [[r.left, 'retained', C.good], [r.leach, 'in water', C.u3], [r.heat, 'destroyed', C.bad]].forEach(([v, n, col]) => { const hh = bh * v; if (hh > 0.5) { CV.rrect(c, bx, y, bw, hh - 1, 3, col); if (hh > 16) CV.text(c, n, bx + bw / 2, y + hh / 2, '#fff', 11, 'center', 700); } y += hh; });
  },
  read(st) { const r = this.calc(st); return [Math.round(r.left * 100) + '%', Math.round(r.leach * 100) + '%', Math.round(r.heat * 100) + '%']; }
};

/* ---- 1.11 BMI and waist-to-height ---- */
SIMS.bmi = {
  title: 'BMI and waist-to-height', h: 400, noPlay: true,
  controls: [{ id: 'h', label: 'Height', min: 1.45, max: 2, step: 0.01, value: 1.7, fmt: v => v.toFixed(2) + ' m' }, { id: 'm', label: 'Mass', min: 40, max: 140, step: 1, value: 68, fmt: v => v + ' kg' }, { id: 'w', label: 'Waist', min: 55, max: 140, step: 1, value: 80, fmt: v => v + ' cm' }],
  readouts: ['BMI', 'Category', 'Waist ÷ height', 'Health risk'],
  note: 'BMI does not distinguish muscle from fat or show where fat is stored. Waist-to-height ratio measures central (abdominal) fat, which is more closely linked to type 2 diabetes and CVD. Keep your waist to less than half your height.',
  draw(c, W, H, st, C) { const P = CV.plot(c, C, { x: 60, y: 24, w: W - 100, h: H - 80 }, { xr: [1.45, 2], yr: [35, 140], xl: 'height / m', yl: 'mass / kg',
      fills: [{ pts: [...Array(41)].map((_, i) => { const h = 1.45 + i * 0.55 / 40; return [h, 40 * h * h]; }), col: hexA(C.bad, .08) }, { pts: [...Array(41)].map((_, i) => { const h = 1.45 + i * 0.55 / 40; return [h, 30 * h * h]; }), col: hexA(C.u5, .1) }, { pts: [...Array(41)].map((_, i) => { const h = 1.45 + i * 0.55 / 40; return [h, 25 * h * h]; }), col: hexA(C.good, .12) }, { pts: [...Array(41)].map((_, i) => { const h = 1.45 + i * 0.55 / 40; return [h, 18.5 * h * h]; }), col: hexA(C.info, .14) }],
      series: [18.5, 25, 30, 40].map((b, i) => ({ f: h => b * h * h, col: [C.info, C.good, C.u5, C.bad][i], w: 1.4 })), dots: [[st.p.h, st.p.m, C.accent, 7]] });
    [1.5, 1.6, 1.7, 1.8, 1.9, 2].forEach(v => CV.mono(c, v.toFixed(1), P.X(v), H - 40, C.muted, 10, 'center')); [40, 60, 80, 100, 120, 140].forEach(v => CV.mono(c, v, 52, P.Y(v), C.muted, 10, 'right'));
  },
  read(st) { const b = st.p.m / st.p.h ** 2, r = st.p.w / (st.p.h * 100); return [b.toFixed(1), b < 18.5 ? 'underweight' : b < 25 ? 'healthy' : b < 30 ? 'overweight' : b < 40 ? 'obese' : 'obese (class 3)', r.toFixed(2), r < 0.5 ? '<span style="color:var(--good)">healthy</span>' : r < 0.6 ? '<span style="color:var(--warn)">increased</span>' : '<span style="color:var(--bad)">high</span>']; }
};

/* ---- 1.12 Teeth: the Stephan curve ---- */
SIMS.teeth = {
  title: 'Sugar and tooth decay', h: 380, noPlay: true,
  controls: [{ type: 'seg', id: 'pat', label: 'Eating pattern', value: 'meals', options: [['meals', '3 meals'], ['snacks', 'meals + 4 sugary snacks'], ['sip', 'sipping a sugary drink']] }, { type: 'seg', id: 'fl', label: 'Fluoride toothpaste', value: 1, options: [[1, 'yes'], [0, 'no']] }],
  readouts: ['Sugar exposures', 'Time below pH 5.5', 'Risk'],
  note: 'Each time sugar is eaten, plaque bacteria make acid and plaque pH drops below <b>5.5</b>, where enamel dissolves (demineralisation). Saliva restores pH in 20–40 minutes. How <b>often</b> you eat sugar matters more than how much.',
  times(st) { return st.p.pat === 'meals' ? [8, 13, 18.5] : st.p.pat === 'snacks' ? [8, 10.5, 13, 15, 16.5, 18.5, 21] : [8, 9, 10, 11, 12, 13, 14, 15, 16, 18.5]; },
  pH(st, t) { const T = this.times(st); let d = 0; T.forEach(t0 => { if (t >= t0) d += 2.3 * ((t - t0) / 0.15) * Math.exp(1 - (t - t0) / 0.15) * (t - t0 < 0.15 ? 1 : Math.exp(-(t - t0 - 0.15) / 0.35)); }); return 7 - Math.min(3, d); },
  draw(c, W, H, st, C) { const self = this, crit = st.p.fl ? 5.3 : 5.5;
    const P = CV.plot(c, C, { x: 60, y: 30, w: W - 100, h: H - 90 }, { xr: [7, 23], yr: [4, 7.5], xl: 'time of day / h', yl: 'plaque pH', fills: [], series: [{ f: t => crit, col: C.bad, w: 1.4, dash: [6, 4] }, { f: t => self.pH(st, t), col: C.u3, w: 2.6 }] });
    CV.text(c, `critical pH ${crit}`, P.X(22.8), P.Y(crit) - 10, C.bad, 11, 'right', 600);
    for (let t = 7; t < 23; t += 0.02) { const p = this.pH(st, t); if (p < crit) { c.fillStyle = hexA(C.bad, .25); c.fillRect(P.X(t), P.Y(crit), P.X(t + 0.02) - P.X(t) + 0.5, P.Y(p) - P.Y(crit)); } }
    [8, 12, 16, 20].forEach(v => CV.mono(c, v + ':00', P.X(v), H - 44, C.muted, 10, 'center'));
  },
  read(st) { const crit = st.p.fl ? 5.3 : 5.5; let m = 0; for (let t = 7; t < 23; t += 0.01) if (this.pH(st, t) < crit) m += 0.6; return [this.times(st).length, Math.round(m) + ' min', m < 60 ? '<span style="color:var(--good)">lower</span>' : m < 150 ? '<span style="color:var(--warn)">moderate</span>' : '<span style="color:var(--bad)">high</span>']; }
};

/* ---- 1.13 Life stages ---- */
const LS = [
  ['Pregnancy', 'Energy: +200 kcal/day in the third trimester only.', ['folic acid 400 µg/day before conception to week 12 (neural tube)', 'vitamin D 10 µg/day', 'iron — blood volume increases', 'calcium — baby’s skeleton', 'omega-3 DHA — brain and eyes'], 'Avoid: liver and vitamin A supplements, raw/undercooked meat and eggs (unless British Lion), unpasteurised and mould-ripened soft cheese (Listeria), high-mercury fish (shark, swordfish), alcohol; limit caffeine to 200 mg/day.'],
  ['Lactation', 'Energy: about +400–500 kcal/day.', ['fluids — extra drinks', 'calcium', 'vitamin D 10 µg/day', 'protein'], 'Continue a balanced diet; alcohol and caffeine pass into breast milk.'],
  ['Babies 0–12 months', 'Exclusive breast milk (or formula) to about 6 months, then weaning.', ['vitamin D supplement from birth if breastfed', 'iron from 6 months — iron-rich first foods', 'healthy fats for brain growth'], 'No salt, no sugar, no honey before 12 months (botulism), no cow’s milk as a main drink before 12 months, no whole nuts (choking).'],
  ['Children 1–10', 'High energy and nutrient needs for size; small stomachs → regular meals and nutritious snacks.', ['vitamins A, C and D supplements (6 months – 5 years)', 'calcium and vitamin D — bones', 'iron', 'fibre — gradually introduced'], 'Limit free sugars (teeth), salt (max 2–5 g by age); whole milk to age 2.'],
  ['Adolescents 11–18', 'Growth spurt — energy and protein needs peak.', ['calcium and vitamin D — peak bone mass by about 30', 'iron — especially girls (menstruation)', 'protein for growth'], 'Risks: skipping breakfast, energy drinks, fad dieting and eating disorders, low fruit and vegetable intake.'],
  ['Adults 19–64', 'Energy balance to maintain a healthy weight; EAR about 2500 kcal (men) / 2000 kcal (women).', ['fibre 30 g/day', 'iron for menstruating women', 'omega-3 — heart health'], 'Reduce risk of NCDs: salt ≤ 6 g, saturated fat ≤ 11% energy, free sugars ≤ 5% energy; 5 A DAY; limit alcohol to 14 units/week.'],
  ['Older adults 65+', 'Lower energy needs (lower BMR, less active) but similar or higher nutrient needs → nutrient-dense food.', ['vitamin D 10 µg/day all year', 'calcium — osteoporosis', 'protein — sarcopenia', 'vitamin B12 — absorption falls', 'fibre and fluid — constipation, dehydration'], 'Risks: poor appetite, dental problems, dysphagia, isolation, low income → malnutrition. Screen with MUST.']
];
SIMS.lifestage = explorerSim('Life-stage needs', 'Choose a life stage to see its key nutritional needs and what to avoid.', LS.map(([n, e, k, a]) => [n, `<h3>${n}</h3><p><b>${e}</b></p><p><b>Key nutrients:</b></p><ul>${k.map(x => `<li>${x}</li>`).join('')}</ul><p>${a}</p>`]));

/* ---- 1.14 Plan a day’s menu ---- */
const MENU = { breakfast: [['porridge with banana', 320, 11, 7, 1.5, 14, 6, 0.1], ['full English fry-up', 850, 38, 55, 18, 6, 5, 4.2], ['wholemeal toast + peanut butter', 380, 15, 18, 3.5, 5, 7, 1.0], ['sugary cereal + milk', 260, 7, 4, 2, 24, 1.5, 0.5], ['skipped', 0, 0, 0, 0, 0, 0, 0]],
  lunch: [['tuna and salad wholemeal wrap', 420, 28, 12, 2.5, 5, 7, 1.6], ['cheeseburger and chips', 900, 32, 45, 16, 12, 6, 2.8], ['lentil soup and roll', 450, 20, 8, 1.5, 8, 11, 2.0], ['meal deal: sandwich, crisps, cola', 950, 25, 38, 12, 45, 5, 2.9]],
  dinner: [['chicken stir-fry with rice', 600, 38, 14, 3, 12, 6, 2.2], ['pepperoni pizza (half)', 850, 34, 36, 16, 8, 5, 4.0], ['salmon, new potatoes, broccoli', 580, 36, 22, 4.5, 4, 8, 0.6], ['vegetable chilli with rice', 560, 20, 10, 2, 12, 14, 1.8]],
  snacks: [['apple and yogurt', 190, 7, 4, 2.5, 22, 3, 0.2], ['chocolate bar', 240, 3, 13, 8, 26, 1, 0.1], ['handful of nuts', 180, 6, 16, 2, 1, 2, 0], ['none', 0, 0, 0, 0, 0, 0, 0]] };
SIMS.menu = DS('Plan a day’s menu', 'Choose one option for each meal. The totals are compared with an adult woman’s reference intakes (energy 2000 kcal, protein 50 g, fat 70 g, saturates 20 g, sugars 90 g — free sugars should be far lower — fibre 30 g, salt 6 g).', body => {
  body.innerHTML = `<div class="ds-grid"><div>${Object.keys(MENU).map(k => dsSelect(k, k[0].toUpperCase() + k.slice(1), MENU[k].map((m, i) => [i, m[0]]), 0)).join('')}</div><div class="ds-out" id="mo"></div></div>`;
  dsWire(body, () => { const t = [0, 0, 0, 0, 0, 0, 0]; Object.keys(MENU).forEach(k => MENU[k][val(body, k)].slice(1).forEach((v, i) => t[i] += v));
    const RIs = [['Energy', 2000, 'kcal'], ['Protein', 50, 'g'], ['Fat', 70, 'g'], ['Saturates', 20, 'g'], ['Sugars', 90, 'g'], ['Fibre', 30, 'g', 1], ['Salt', 6, 'g']];
    $('#mo', body).innerHTML = RIs.map(([n, ri, u, more], i) => hbar(n, t[i], ri * 1.6, (more ? t[i] >= ri : t[i] <= ri) ? 'var(--good)' : 'var(--bad)', `${Math.round(t[i] * 10) / 10} ${u}`, ri)).join('') + `<p class="small">${t[0] > 2300 ? 'Energy is well above requirement — risk of weight gain. ' : t[0] < 1500 ? 'Energy is too low for most adults. ' : ''}${t[3] > 20 ? 'Too much saturated fat. ' : ''}${t[6] > 6 ? 'Salt is over 6 g. ' : ''}${t[5] < 25 ? 'Fibre is low — add wholegrains, pulses, fruit and vegetables. ' : ''}${t[0] <= 2300 && t[0] >= 1500 && t[3] <= 20 && t[6] <= 6 && t[5] >= 25 ? '<span class="flag ok">A well-balanced day</span>' : ''}</p>`; });
});

/* ---- 1.15 Energy requirement: BMR × PAL ---- */
SIMS.pal = DS('Energy requirement', 'Estimate basal metabolic rate with the Schofield equations, then multiply by a physical activity level (PAL).', body => {
  const SCH = { m: [[10, 17, 17.7, 657], [18, 29, 15.1, 692], [30, 59, 11.5, 873], [60, 74, 11.9, 700], [75, 120, 8.4, 821]], f: [[10, 17, 13.4, 692], [18, 29, 14.8, 487], [30, 59, 8.3, 846], [60, 74, 9.2, 687], [75, 120, 9.8, 624]] };
  body.innerHTML = `<div class="ds-grid"><div>${dsSelect('sx', 'Sex', [['f', 'female'], ['m', 'male']], 'f')}${dsRange('age', 'Age', 10, 90, 1, 17, ' y')}${dsRange('kg', 'Body mass', 30, 130, 1, 60, ' kg')}${dsSelect('pal', 'Activity (PAL)', [['1.4', '1.4 — sedentary (desk, little exercise)'], ['1.6', '1.6 — moderately active'], ['1.75', '1.75 — active (daily training)'], ['2.0', '2.0 — very active (manual job + sport)'], ['2.3', '2.3 — elite endurance training']], '1.6')}</div><div class="ds-out" id="po"></div></div>`;
  dsWire(body, () => { const sx = val(body, 'sx'), age = val(body, 'age'), kg = val(body, 'kg'), pal = +val(body, 'pal'); const row = SCH[sx].find(r => age >= r[0] && age <= r[1]), bmr = row[2] * kg + row[3], E = bmr * pal;
    $('#po', body).innerHTML = `<div class="ds-big">${Math.round(E)} kcal/day</div><p class="small">$"BMR" = ${row[2]} × ${kg} + ${row[3]} = ${Math.round(bmr)}$ kcal/day (Schofield, ${sx === 'f' ? 'females' : 'males'} ${row[0]}–${row[1] > 100 ? '+' : row[1]}).<br>$"energy" = "BMR" × "PAL" = ${Math.round(bmr)} × ${pal} = ${Math.round(E)}$ kcal ≈ ${(E * 4.184 / 1000).toFixed(1)} MJ.</p>
      ${hbar('BMR', bmr, E, 'var(--u3)', Math.round(bmr / E * 100) + '%')}${hbar('activity', E - bmr, E, 'var(--u2)', Math.round((E - bmr) / E * 100) + '%')}
      <p class="small muted">BMR is usually 50–80% of energy use. It is higher in males, in people with more muscle, during growth and pregnancy, and falls with age.</p>`.replace(/\$([^$]+)\$/g, (_, m) => M(m)); });
});

/* ---- 1.16 Weight-change planner ---- */
SIMS.planner = {
  title: 'Energy balance planner', h: 380, noPlay: true,
  controls: [{ id: 'need', label: 'Energy used per day', min: 1600, max: 3400, step: 50, value: 2400, fmt: v => v + ' kcal' }, { id: 'eat', label: 'Energy eaten per day', min: 1200, max: 3800, step: 50, value: 2000, fmt: v => v + ' kcal' }, { id: 'kg', label: 'Starting mass', min: 50, max: 140, step: 1, value: 92, fmt: v => v + ' kg' }],
  readouts: ['Daily balance', 'Change in 12 weeks', 'Rate', 'Advice'],
  note: 'A deficit of about 7700 kcal ≈ 1 kg of body fat (a rule of thumb — real weight loss slows as mass falls, which this model includes). A safe rate is 0.5–1 kg a week, i.e. a deficit of about 500–600 kcal a day.',
  sim(st) { let m = st.p.kg; const pts = [[0, m]]; for (let d = 1; d <= 84; d++) { const use = st.p.need * (m / st.p.kg) ** 0.5; m += (st.p.eat - use) / 7700; if (d % 3 === 0) pts.push([d / 7, m]); } return pts; },
  draw(c, W, H, st, C) { const pts = this.sim(st), lo = Math.min(...pts.map(p => p[1])) - 3, hi = Math.max(...pts.map(p => p[1])) + 3;
    const P = CV.plot(c, C, { x: 60, y: 30, w: W - 100, h: H - 90 }, { xr: [0, 12], yr: [lo, hi], xl: 'weeks', yl: 'body mass / kg', series: [{ pts, col: st.p.eat < st.p.need ? C.good : C.bad, w: 3 }] });
    [0, 4, 8, 12].forEach(v => CV.mono(c, v, P.X(v), H - 44, C.muted, 10, 'center')); [lo, (lo + hi) / 2, hi].forEach(v => CV.mono(c, v.toFixed(0), 52, P.Y(v), C.muted, 10, 'right')); },
  read(st) { const pts = this.sim(st), d = pts[pts.length - 1][1] - st.p.kg, bal = st.p.eat - st.p.need, rate = d / 12; return [(bal > 0 ? '+' : '') + bal + ' kcal', (d > 0 ? '+' : '') + d.toFixed(1) + ' kg', rate.toFixed(2) + ' kg/week', rate < -1 ? '<span style="color:var(--bad)">too fast</span>' : rate <= -0.4 ? '<span style="color:var(--good)">safe loss</span>' : Math.abs(rate) < 0.1 ? 'maintaining' : rate > 0 ? 'gaining' : 'slow loss']; }
};
