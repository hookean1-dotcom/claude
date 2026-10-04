/* ==========================================================
   UNIT 2 explorations (practical food production) + skills tools
   ========================================================== */

/* ---- 2.1 Carbon footprint of a meal ---- */
const FP = { beef: 60, lamb: 24, cheese: 21, pork: 7, chicken: 6, fish: 5, eggs: 4.5, tofu: 3, lentils: 0.9, rice: 4, pasta: 1.6, potatoes: 0.4, 'bread': 1.3 };
SIMS.footprint = DS('Meal carbon footprint', 'Build a main meal and choose where the vegetables come from. Figures are typical greenhouse-gas emissions in kg CO₂e per kg of food (Poore and Nemecek, 2018 — rounded); transport values are illustrative.', body => {
  body.innerHTML = `<div class="ds-grid"><div>${dsSelect('pro', 'Protein (150 g)', Object.keys(FP).slice(0, 9).map(k => [k, k]), 'beef')}${dsSelect('carb', 'Carbohydrate (200 g)', [['rice', 'rice'], ['pasta', 'pasta'], ['potatoes', 'potatoes'], ['bread', 'bread']], 'rice')}${dsSelect('veg', 'Vegetables (200 g) — source', [['local', 'local, in season, field-grown'], ['heated', 'local, heated greenhouse (out of season)'], ['sea', 'imported by sea'], ['air', 'air-freighted (e.g. green beans)']], 'local')}</div><div class="ds-out" id="fo"></div></div>`;
  dsWire(body, () => { const p = val(body, 'pro'), cb = val(body, 'carb'), v = val(body, 'veg'); const a = FP[p] * 0.15, b = FP[cb] * 0.2, vf = { local: 0.3, heated: 1.6, sea: 0.45, air: 2.4 }[v] * 1, t = a + b + vf;
    $('#fo', body).innerHTML = `<div class="ds-big">${t.toFixed(2)} kg CO₂e</div>${hbar(p, a, 10, 'var(--u2)', a.toFixed(2))}${hbar(cb, b, 10, 'var(--u5)', b.toFixed(2))}${hbar('vegetables', vf, 10, 'var(--u1)', vf.toFixed(2))}
      <p class="small">${a > 3 ? 'Ruminant meat (beef, lamb) dominates the footprint because of land use and methane. ' : ''}${v === 'heated' ? 'Heated greenhouses can outweigh the benefit of low food miles. ' : v === 'air' ? 'Air freight has by far the highest transport emissions per kg. ' : v === 'sea' ? 'Shipping adds little per kg — how food is produced usually matters more than how far it travels. ' : ''}Swap to pulses or chicken and seasonal vegetables to cut emissions.</p>`; });
});

/* ---- 2.2 Recipe costing ---- */
SIMS.costing = DS('Recipe costing', 'Edit the pack prices, pack sizes and amounts used. The sheet calculates the cost of each ingredient, the cost per portion and a selling price for your target gross profit.', body => {
  const rows = [['Minced beef', 3.75, 500, 400], ['Onion', 0.90, 1000, 150], ['Chopped tomatoes (tin)', 0.55, 400, 400], ['Kidney beans (tin)', 0.60, 400, 240], ['Chilli powder', 1.20, 50, 5], ['Rice', 1.60, 1000, 300]];
  body.innerHTML = `<table class="ds-table"><tr><th>Ingredient</th><th>Pack £</th><th>Pack g</th><th>Used g</th><th>Cost</th></tr>${rows.map((r, i) => `<tr><td>${r[0]}</td><td><input type="number" step="0.01" id="p${i}" value="${r[1]}"></td><td><input type="number" id="s${i}" value="${r[2]}"></td><td><input type="number" id="u${i}" value="${r[3]}"></td><td id="c${i}"></td></tr>`).join('')}</table>
    <div class="ds-grid" style="margin-top:14px"><div>${dsRange('por', 'Portions', 1, 12, 1, 4)}${dsRange('gp', 'Target gross profit', 50, 80, 5, 65, '%')}</div><div class="ds-out" id="co"></div></div>`;
  dsWire(body, () => { let tot = 0; rows.forEach((_, i) => { const p = +$('#p' + i, body).value, s = +$('#s' + i, body).value || 1, u = +$('#u' + i, body).value, c = p * u / s; tot += c; $('#c' + i, body).textContent = '£' + c.toFixed(2); });
    const n = val(body, 'por'), gp = val(body, 'gp'), per = tot / n, price = per / (1 - gp / 100);
    $('#co', body).innerHTML = `<div class="ds-big">£${per.toFixed(2)} per portion</div><p class="small">Total food cost £${tot.toFixed(2)} ÷ ${n} portions.<br>Selling price for ${gp}% GP $= @frac{${per.toFixed(2)}}{${(1 - gp / 100).toFixed(2)}} = £${price.toFixed(2)}$ (food cost ${100 - gp}% of price).</p>`.replace(/\$([^$]+)\$/g, (_, m) => M(m)); });
});

/* ---- 2.3 Dovetailing time plan ---- */
SIMS.gantt = DS('Dovetail a time plan', 'You have one pair of hands. Hands-on time must be done one task at a time, but hands-off time (chilling, proving, baking, simmering) runs in the background. Change the order to finish all three dishes in the shortest time.', body => {
  const T = [['Bread rolls: mix and knead', 15, 60, 'prove'], ['Bread rolls: shape and bake', 10, 20, 'bake'], ['Lemon tart: pastry and chill', 15, 30, 'chill'], ['Lemon tart: line, blind bake', 10, 25, 'bake'], ['Lemon tart: filling and bake', 10, 35, 'bake'], ['Soup: sweat veg, simmer', 15, 25, 'simmer'], ['Soup: blend and season', 5, 0, ''], ['Clean down', 10, 0, '']];
  const DEP = { 1: 0, 3: 2, 4: 3, 6: 5 };
  let order = [5, 6, 0, 2, 1, 3, 4, 7];
  const draw = () => { let now = 0; const ready = {}, bars = []; order.forEach(i => { const start = Math.max(now, DEP[i] !== undefined ? (ready[DEP[i]] ?? Infinity) : 0); const s = isFinite(start) ? start : now; bars.push([i, s]); now = s + T[i][1]; ready[i] = now + T[i][2]; });
    const bad = order.some((i, k) => DEP[i] !== undefined && order.indexOf(DEP[i]) > k), end = Math.max(...order.map(i => ready[i]));
    const X = m => 190 + m * 2.3, sv = `<svg viewBox="0 0 ${Math.max(560, X(end) + 30)} ${40 + order.length * 30}" style="width:100%;max-width:760px;height:auto">${[0, 30, 60, 90, 120, 150, 180].filter(m => m <= end + 10).map(m => ln(X(m), 20, X(m), 26 + order.length * 30, 'var(--line)', 1) + tx(X(m), 14, m, { a: 'middle', fs: 10, f: 'var(--f-mono)' })).join('')}${bars.map(([i, s], k) => { const y = 24 + k * 30; return tx(182, y + 15, T[i][0], { a: 'end', fs: 11, c: INK }) + `<rect x="${X(s)}" y="${y + 3}" width="${T[i][1] * 2.3}" height="18" rx="3" fill="var(--accent)"/>` + (T[i][2] ? `<rect x="${X(s + T[i][1])}" y="${y + 3}" width="${T[i][2] * 2.3}" height="18" rx="3" fill="var(--u3)" fill-opacity=".3"/>` + tx(X(s + T[i][1]) + 4, y + 16, T[i][3], { fs: 10 }) : ''); }).join('')}</svg>`;
    body.innerHTML = `<div class="row" style="gap:8px;margin-bottom:10px"><span class="pill ${bad ? 'bad' : end <= 110 ? 'good' : ''}">${bad ? 'A step is before the step it depends on!' : `Finished in ${end} minutes`}</span>${!bad && end <= 110 ? '<span class="flag ok">excellent dovetailing</span>' : ''}</div>${sv}
      <div class="sort-list" style="margin-top:10px">${order.map((i, k) => `<div class="sort-row"><div class="sort-t">${k + 1}. ${T[i][0]} <span class="small muted">${T[i][1]} min hands-on${T[i][2] ? ` + ${T[i][2]} min ${T[i][3]}` : ''}</span></div><div class="sort-b"><button class="pickb" data-up="${k}" ${k ? '' : 'disabled'}>▲</button><button class="pickb" data-dn="${k}" ${k < order.length - 1 ? '' : 'disabled'}>▼</button></div></div>`).join('')}</div>
      <p class="small muted">Tip: start the jobs with the longest hands-off time first, and work on other dishes while they prove, chill or bake.</p>`;
    $$('[data-up]', body).forEach(b => b.onclick = () => { const k = +b.dataset.up;[order[k - 1], order[k]] = [order[k], order[k - 1]]; draw(); });
    $$('[data-dn]', body).forEach(b => b.onclick = () => { const k = +b.dataset.dn;[order[k + 1], order[k]] = [order[k], order[k + 1]]; draw(); }); };
  draw();
});

/* ---- 2.4 Knife cuts and cooking time ---- */
const CUTS = { julienne: [2, 2, 45], batonnet: [6, 6, 60], jardiniere: [4, 4, 18], macedoine: [5, 5, 5], brunoise: [2, 2, 2], paysanne: [12, 12, 2], chunk: [25, 25, 25] };
SIMS.cuts = {
  title: 'Cut size and cooking time', h: 380, noPlay: true,
  controls: [{ type: 'seg', id: 'cut', label: 'Cut', value: 'batonnet', options: Object.keys(CUTS).map(k => [k, k]) }],
  readouts: ['Size', 'Pieces from 100 g carrot', 'Surface area', 'Relative boiling time'],
  note: 'Smaller pieces have a larger surface area for their volume, so heat reaches the centre faster — they cook more quickly (and lose more water-soluble vitamins). Uniform cuts cook evenly.',
  calc(st) { const [a, b, c] = CUTS[st.p.cut], V = a * b * c, n = 100000 / V, SA = n * 2 * (a * b + b * c + a * c) / 100; const tmin = Math.min(a, b, c); return { a, b, c, n, SA, t: (tmin / 2) ** 2 * 0.09 + 1 }; },
  draw(c, W, H, st, C) { const r = this.calc(st), k = 5, x0 = 60, y0 = 70; for (let i = 0; i < 8; i++) { const x = x0 + (i % 4) * (r.b * k + 18), y = y0 + Math.floor(i / 4) * (r.c * k * 0.55 + 30); c.fillStyle = hexA('#E07A2E', .75); c.strokeStyle = '#B8580F'; c.lineWidth = 1.4; c.beginPath(); c.rect(x, y, Math.max(3, r.a * k), Math.max(3, r.c * k * 0.55)); c.fill(); c.stroke(); }
    CV.line(c, 40, H - 60, 40 + 50 * k, H - 60, C.ink, 2); for (let m = 0; m <= 50; m += 5) CV.line(c, 40 + m * k, H - 60, 40 + m * k, H - (m % 10 ? 66 : 70), C.ink, 1.2); CV.text(c, '50 mm ruler (to scale)', 40, H - 40, C.muted, 11);
    const bx = W - 170; ['julienne', 'brunoise', 'batonnet', 'chunk'].forEach((n, i) => { const t = this.calc({ p: { cut: n } }).t; CV.rrect(c, bx, 50 + i * 40, t * 6, 22, 4, n === st.p.cut ? C.accent : hexA(C.muted, .35)); CV.text(c, `${n} ${t.toFixed(0)} min`, bx - 8, 61 + i * 40, C.ink, 11, 'right'); }); },
  read(st) { const r = this.calc(st); return [`${r.a} × ${r.b} × ${r.c} mm`, Math.round(r.n).toLocaleString('en-GB'), Math.round(r.SA).toLocaleString('en-GB') + ' cm²', '≈ ' + r.t.toFixed(0) + ' min']; }
};

/* ---- 2.6 Temperature probe ---- */
SIMS.probe = {
  title: 'Probe a chicken breast', h: 400,
  controls: [{ id: 'oven', label: 'Oven temperature', min: 140, max: 220, step: 10, value: 180, fmt: v => v + ' °C' }, { type: 'seg', id: 'pos', label: 'Probe position', value: 'core', options: [['core', 'centre (thickest part)'], ['edge', 'near the surface']] }, { type: 'button', act: 'out', label: 'Take it out of the oven' }],
  readouts: ['Time in oven', 'Probe reading', 'True core temperature', 'Safe?'],
  note: 'Always probe the <b>thickest part</b>. The core must reach at least 75 °C (in England/Wales, 70 °C for 2 minutes is equivalent). A reading near the surface is misleadingly high. Clean and sanitise the probe before and after use.',
  init(st) { st.t = 0; st.core = 5; st.surf = 5; st.out = false; st.held = 0; st.run = true; },
  action(st, a) { if (a === 'out') { st.out = true; st.run = false; } },
  step(st, dt) { if (st.out) return; const k = 60 * dt; st.surf += (st.p.oven * 0.55 - st.surf) * 0.012 * k; st.core += (st.surf - st.core) * 0.009 * k; st.t += k; if (st.core >= 75) st.held += k; },
  draw(c, W, H, st, C) { const cx = W * 0.42, cy = H * 0.5; c.save(); c.translate(cx, cy); const g = c.createRadialGradient(0, 0, 10, 0, 0, 150); g.addColorStop(0, mixCol('#F2B8B0', '#F4E6D2', clamp((st.core - 40) / 35, 0, 1))); g.addColorStop(1, mixCol('#EFC2A8', '#C98B4A', clamp((st.surf - 40) / 60, 0, 1))); c.fillStyle = g; c.beginPath(); c.ellipse(0, 0, 170, 85, -0.1, 0, Math.PI * 2); c.fill(); c.strokeStyle = C.ink; c.lineWidth = 1.5; c.stroke(); c.restore();
    const px = st.p.pos === 'core' ? cx : cx + 120, py = st.p.pos === 'core' ? cy : cy - 40; CV.line(c, px, py, px + 90, py - 150, '#999', 4); CV.circle(c, px, py, 4, C.ink); CV.rrect(c, px + 70, py - 210, 90, 56, 8, C.surface, C.ink, 2); const rd = st.p.pos === 'core' ? st.core : (st.core + st.surf) / 2 + 8; CV.mono(c, rd.toFixed(1) + ' °C', px + 115, py - 182, rd >= 75 ? C.good : C.bad, 16, 'center');
    thermometer(c, C, W - 70, 40, H - 100, st.core, 0, 100, [[75, '75 °C', C.good], [63, '63', C.muted], [5, '5', C.muted]]);
    if (st.out) CV.text(c, st.core >= 75 && st.held >= 0.5 ? '✓ Safe to serve' : '✗ Undercooked — return to the oven', cx, H - 30, st.core >= 75 && st.held >= 0.5 ? C.good : C.bad, 16, 'center', 700); },
  read(st) { const rd = st.p.pos === 'core' ? st.core : (st.core + st.surf) / 2 + 8; return [Math.floor(st.t) + ' min', rd.toFixed(1) + ' °C', st.core.toFixed(1) + ' °C', st.core >= 75 && st.held >= 0.5 ? '<span style="color:var(--good)">yes</span>' : '<span style="color:var(--bad)">not yet</span>']; }
};

/* ---- 2.6 / 3.10 Fridge organiser ---- */
SIMS.fridge = DS('Stock the fridge', 'Put each item on the correct shelf. Ready-to-eat and cooked foods go at the top; raw meat, poultry and fish go at the bottom, covered, so nothing can drip onto food that will not be cooked again.', body => {
  const shelves = ['Top — ready-to-eat', 'Middle — dairy, cooked meats', 'Bottom — raw meat, fish', 'Salad drawer — fruit and veg'];
  const items = [['Raw chicken thighs (covered tray)', 2], ['Cooked ham', 1], ['Cream cakes / desserts', 0], ['Yogurts', 1], ['Raw minced beef', 2], ['Lettuce (unwashed)', 3], ['Leftover lasagne (covered, labelled)', 0], ['Raw salmon fillets', 2], ['Cheese', 1], ['Ready-to-eat sandwiches', 0], ['Carrots', 3], ['Milk', 1]];
  let place = {}, T = 4;
  const draw = () => { const ok = items.filter((it, i) => place[i] === it[1]).length, done = Object.keys(place).length;
    body.innerHTML = `<div class="ds-grid"><div>${dsRange('ft', 'Fridge thermostat', 0, 12, 1, T, ' °C')}<p class="small"><span class="flag ${T <= 5 ? 'ok' : T <= 8 ? 'mid' : 'no'}">${T <= 5 ? '0–5 °C — correct' : T <= 8 ? 'legal maximum 8 °C — too warm for best practice' : 'illegal — above 8 °C'}</span></p><p class="small">Check and record fridge temperatures at least twice a day. Don’t overload the fridge; cool hot food before putting it in.</p><div class="pill good">${ok} / ${items.length} correct · ${done} placed</div></div>
      <div>${shelves.map((s, j) => `<div class="card" style="padding:10px 12px;margin-bottom:8px;${j === 2 ? 'border-color:var(--bad)' : ''}"><div class="eyebrow">${s}</div><div class="chip-list" style="margin-top:6px">${items.map((it, i) => place[i] === j ? `<span class="${it[1] === j ? '' : 'flag no'}">${it[0]}</span>` : '').join('')}</div></div>`).join('')}</div></div>
      <div class="sort-list" style="margin-top:12px">${items.map((it, i) => place[i] === undefined ? `<div class="sort-row"><div class="sort-t">${it[0]}</div><div class="sort-b">${shelves.map((s, j) => `<button class="pickb" data-i="${i}" data-j="${j}">${s.split(' — ')[0]}</button>`).join('')}</div></div>` : '').join('')}</div>`;
    $$('[data-j]', body).forEach(b => b.onclick = () => { const i = +b.dataset.i, j = +b.dataset.j; place[i] = j; j === items[i][1] ? sfx.good() : sfx.bad(); draw(); if (Object.keys(place).length === items.length && items.every((it, k) => place[k] === it[1])) burst(); });
    const ft = $('#ft', body); ft.style.setProperty('--p', T / 12 * 100 + '%'); ft.oninput = () => { T = +ft.value; draw(); }; };
  draw();
});

/* ---- 2.7 Taste panel and star profile ---- */
SIMS.sensory = DS('Taste panel star profile', 'Score two versions of a product (0–9) for each attribute, as a taste panel would. The star profile updates to compare them.', body => {
  const ax = ['sweetness', 'texture', 'colour', 'aroma', 'moistness', 'aftertaste'], A = [6, 7, 7, 5, 6, 6], B = [4, 5, 6, 6, 8, 7];
  body.innerHTML = `<div class="ds-grid"><div><table class="ds-table"><tr><th></th><th style="color:var(--u2)">A · original</th><th style="color:var(--u3)">B · reduced sugar</th></tr>${ax.map((a, i) => `<tr><td>${a}</td><td><input type="number" min="0" max="9" id="a${i}" value="${A[i]}"></td><td><input type="number" min="0" max="9" id="b${i}" value="${B[i]}"></td></tr>`).join('')}</table>
    <p class="small muted">Good practice: coded samples (e.g. 471 and 238), tasters work alone, water between samples, same portion size and temperature, check allergies and consent.</p></div><div class="ds-out" id="so"></div></div>`;
  dsWire(body, () => { const a = ax.map((_, i) => clamp(+$('#a' + i, body).value, 0, 9)), b = ax.map((_, i) => clamp(+$('#b' + i, body).value, 0, 9)), ma = a.reduce((x, y) => x + y) / 6, mb = b.reduce((x, y) => x + y) / 6;
    $('#so', body).innerHTML = starSVG(ax, [{ v: a, c: 'var(--u2)' }, { v: b, c: 'var(--u3)' }]) + `<p class="small">Mean score A ${ma.toFixed(1)} · B ${mb.toFixed(1)}. ${Math.abs(ma - mb) < 0.5 ? 'Very similar overall — B could replace A if it meets the brief (e.g. less sugar).' : ma > mb ? 'A scores higher overall — look at which attributes B needs to improve.' : 'B scores higher overall.'}</p>`; });
});

/* ---- Skills: command words ---- */
SIMS.command = sorterSim('Command word match', 'Read each exam instruction and decide what the command word demands.', ['Recall (AO1)', 'Apply / explain (AO2)', 'Evaluate / judge (AO3)'], [
  ['State two sources of vitamin C.', 0, '“State” needs short recall answers.'],
  ['Explain why vitamin C is lost when vegetables are boiled.', 1, '“Explain” needs reasons — water-soluble, heat-sensitive.'],
  ['Evaluate the suitability of a vegan diet for a teenage athlete.', 2, '“Evaluate” needs strengths, weaknesses and a judgement.'],
  ['Define the term “denaturation”.', 0, 'A precise meaning is recall.'],
  ['Calculate the BMI of a 72 kg man who is 1.80 m tall.', 1, 'Calculations apply knowledge (AO2).'],
  ['Discuss the effectiveness of the sugar levy in reducing obesity.', 2, '“Discuss” presents different viewpoints and concludes.'],
  ['Identify the high-risk food in the case study.', 0, 'Select from the information given.'],
  ['Suggest how the café could reduce its food waste.', 1, 'Apply knowledge to a new context.'],
  ['Assess the risks of serving rice at a buffet.', 2, 'Weigh up and judge the importance.'],
  ['Describe the symptoms of Salmonella food poisoning.', 0, 'Features, not reasons.'],
  ['Compare the nutritional value of butter and olive oil.', 1, 'Similarities and differences.'],
  ['Justify your choice of cooking method for the care home.', 2, 'Support a decision with evidence.']
]);

/* ---- Skills: food maths toolkit ---- */
SIMS.calc = DS('Food maths toolkit', 'Pick a calculation, enter values and see each step worked through.', body => {
  const T = {
    energy: ['Energy from macronutrients', [['c', 'carbohydrate g', 30], ['p', 'protein g', 10], ['f', 'fat g', 12]], v => { const E = 4 * v.c + 4 * v.p + 9 * v.f; return [`$E = 4(${v.c}) + 4(${v.p}) + 9(${v.f}) = ${E}$ kcal`, `$${E} × 4.2 = ${Math.round(E * 4.2)}$ kJ`, `fat provides ${(9 * v.f / E * 100 || 0).toFixed(1)}% of energy`]; }],
    salt: ['Salt from sodium', [['na', 'sodium g', 0.4]], v => [`$"salt" = ${v.na} × 2.5 = ${(v.na * 2.5).toFixed(2)}$ g`]],
    ri: ['% Reference intake', [['a', 'amount', 18], ['ri', 'reference intake', 90]], v => [`$@frac{${v.a}}{${v.ri}} × 100 = ${(v.a / v.ri * 100).toFixed(1)}"%"$`]],
    bmi: ['BMI', [['m', 'mass kg', 70], ['h', 'height m', 1.75]], v => { const b = v.m / v.h ** 2; return [`$"BMI" = @frac{${v.m}}{${v.h}^2} = ${b.toFixed(1)}$`, b < 18.5 ? 'underweight' : b < 25 ? 'healthy' : b < 30 ? 'overweight' : 'obese']; }],
    gp: ['Gross profit %', [['cost', 'food cost £', 1.2], ['price', 'selling price £', 3.5]], v => [`$"GP" = ${v.price} - ${v.cost} = £${(v.price - v.cost).toFixed(2)}$`, `$"GP%" = @frac{${(v.price - v.cost).toFixed(2)}}{${v.price}} × 100 = ${((v.price - v.cost) / v.price * 100).toFixed(1)}"%"$`]],
    scale: ['Scale a recipe', [['q', 'quantity', 250], ['a', 'original portions', 4], ['b', 'new portions', 10]], v => [`scale factor $= @frac{${v.b}}{${v.a}} = ${(v.b / v.a).toFixed(3)}$`, `$${v.q} × ${(v.b / v.a).toFixed(3)} = ${(v.q * v.b / v.a).toFixed(1)}$`]],
    fission: ['Bacterial growth', [['n0', 'starting number', 10], ['gt', 'generation time min', 20], ['t', 'time min', 180]], v => { const n = Math.floor(v.t / v.gt); return [`$n = @frac{${v.t}}{${v.gt}} = ${n}$ divisions`, `$N = ${v.n0} × 2^{${n}} = ${(v.n0 * 2 ** n).toLocaleString('en-GB')}$`]; }]
  };
  let cur = 'energy';
  const draw = () => { const [n, fields, fn] = T[cur];
    body.innerHTML = `<div class="opt-grid" style="margin-bottom:14px">${Object.keys(T).map(k => `<button class="pickb${k === cur ? ' on' : ''}" data-k="${k}">${T[k][0]}</button>`).join('')}</div><div class="ds-grid"><div>${fields.map(f => `<div class="ctl"><label for="f-${f[0]}">${f[1]}</label><input class="ds-sel" type="number" step="any" id="f-${f[0]}" value="${f[2]}"></div>`).join('')}</div><div class="ds-out"><ol class="steps" id="st"></ol></div></div>`;
    $$('[data-k]', body).forEach(b => b.onclick = () => { cur = b.dataset.k; draw(); });
    dsWire(body, () => { const v = {}; fields.forEach(f => v[f[0]] = +$('#f-' + f[0], body).value); $('#st', body).innerHTML = fn(v).map(s => `<li>${rich(s)}</li>`).join(''); }); };
  draw();
});
