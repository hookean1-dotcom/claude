/* ==========================================================
   UNIT 4 explorations (food science experiments) + UNIT 5 research tools
   ========================================================== */

/* ---- 4.1 Gelatinisation: viscosity vs temperature ---- */
SIMS.gelatinise = {
  title: 'Thicken a sauce', h: 400,
  controls: [{ id: 'pc', label: 'Cornflour', min: 1, max: 10, step: 0.5, value: 4, fmt: v => v + '%' }, { type: 'seg', id: 'add', label: 'Also added', value: 'none', options: [['none', 'nothing'], ['sugar', 'sugar'], ['acid', 'lemon juice (early)'], ['nostir', 'no stirring']] }, { id: 'heat', label: 'Heat', min: 1, max: 5, step: 1, value: 3 }],
  readouts: ['Temperature', 'Stage', 'Viscosity', 'Sauce type'],
  note: 'Starch granules swell from about 60 °C, amylose leaks out around 80 °C and gelatinisation is complete near boiling. Sugar delays thickening; acid breaks starch chains (thinner); without stirring, lumps form. Line spread: pouring > 6 cm, coating 3–6 cm, binding (panada) < 3 cm.',
  init(st) { st.T = 20; st.time = 0; },
  step(st, dt) { st.T = Math.min(98, st.T + dt * st.p.heat * 4.5); st.time += dt; },
  visc(st) { const T = st.T - (st.p.add === 'sugar' ? 6 : 0), g = clamp((T - 60) / 35, 0, 1), base = st.p.pc ** 1.6 * (st.p.add === 'acid' ? 0.45 : 1) * (st.p.add === 'nostir' ? 0.7 : 1); return g * base; },
  draw(c, W, H, st, C) { const v = this.visc(st), cx = W * 0.3, cy = H * 0.52;
    CV.rrect(c, cx - 110, cy - 60, 220, 110, 14, C.surface, C.ink, 2.4); CV.line(c, cx + 110, cy - 40, cx + 190, cy - 60, C.ink, 5);
    c.fillStyle = mixCol('#F4EEDC', '#E8D9A8', clamp(v / 25, 0, 1)); c.fillRect(cx - 104, cy - 30, 208, 74);
    const g = clamp((st.T - 60) / 35, 0, 1); for (let i = 0; i < 26; i++) { const x = cx - 95 + (i * 37) % 190, y = cy - 20 + (i * 23) % 60; const lump = st.p.add === 'nostir' && i % 5 === 0; CV.circle(c, x, y, (2.5 + g * 5) * (lump ? 2 : 1), hexA(C.u5, g > .7 ? .25 : .8), C.u5, .8); }
    if (st.T > 90) for (let i = 0; i < 4; i++) CV.circle(c, cx - 60 + i * 40, cy - 34 - (st.time * 30 + i * 10) % 20, 3, null, C.muted, 1);
    CV.circle(c, cx, cy + 80, 26, hexA(C.bad, clamp(st.p.heat / 5, .2, 1)), null);
    const P = CV.plot(c, C, { x: W * 0.58, y: 40, w: W * 0.36, h: H - 110 }, { xr: [20, 100], yr: [0, 45], xl: 'temperature / °C', yl: 'viscosity', series: [{ f: T => { const s = { ...st, T }; return this.visc(s); }, col: C.u5, w: 2, dash: [4, 3] }], dots: [[st.T, v, C.accent, 6]] });
    [60, 80, 100].forEach(t => CV.mono(c, t, P.X(t), H - 58, C.muted, 10, 'center')); },
  read(st) { const v = this.visc(st), T = st.T, ls = v < 0.5 ? '—' : v < 8 ? 'pouring' : v < 20 ? 'coating' : 'binding (panada)'; return [T.toFixed(0) + ' °C', T < 60 ? 'granules suspended' : T < 80 ? 'swelling' : T < 92 ? 'amylose leaking — thickening' : 'fully gelatinised', v.toFixed(1), ls + (st.p.add === 'nostir' ? ' (lumpy!)' : '')]; }
};

/* ---- 4.1 Sugar syrup stages ---- */
const SUGST = [[0, 106, 'syrup', ''], [106, 112, 'thread', 'forms a thin thread'], [112, 116, 'soft ball', 'soft ball that flattens — fudge'], [118, 130, 'firm / hard ball', 'firm ball — caramels, nougat'], [132, 143, 'soft crack', 'bendy threads — toffee'], [146, 154, 'hard crack', 'brittle threads — lollipops'], [160, 180, 'caramel', 'golden to brown — caramel'], [180, 250, 'burnt', 'bitter, black']];
SIMS.sugarstages = {
  title: 'Boil a sugar syrup', h: 400,
  controls: [{ id: 'heat', label: 'Heat', min: 1, max: 5, step: 1, value: 3 }, { type: 'button', act: 'test', label: 'Cold-water test' }],
  readouts: ['Temperature', 'Sugar concentration', 'Stage', 'Cold-water test'],
  note: 'As water evaporates, the syrup becomes more concentrated and its boiling point rises. Each temperature range sets to a different texture. Above about 160 °C the sugar caramelises; above 180 °C it burns.',
  init(st) { st.T = 20; st.test = ''; },
  action(st, a) { if (a === 'test') { const s = SUGST.find(x => st.T >= x[0] && st.T < x[1]) || SUGST[SUGST.length - 1]; st.test = s[3] || 'dissolves — just syrup'; } },
  step(st, dt) { const target = st.T < 103 ? 5 : 1.6; st.T = Math.min(200, st.T + dt * st.p.heat * target); },
  conc(T) { return T < 103 ? 60 : clamp(60 + (T - 103) * 0.55, 60, 99.5); },
  draw(c, W, H, st, C) { const cx = W * 0.3, cy = H * 0.52; CV.rrect(c, cx - 100, cy - 50, 200, 100, 14, C.surface, C.ink, 2.4);
    c.fillStyle = st.T < 150 ? hexA('#FFF6D8', .9) : mixCol('#F2C45A', '#3A1C06', clamp((st.T - 150) / 40, 0, 1)); c.fillRect(cx - 94, cy - 20, 188, 64);
    for (let i = 0; i < 8; i++) CV.circle(c, cx - 80 + i * 22, cy - 10 + (st.T * 7 + i * 13) % 40, 2 + (i % 3), null, hexA(C.ink, .3), 1);
    thermometer(c, C, cx + 150, 40, H - 110, st.T, 20, 200, [[106, '106 thread', C.muted], [115, '115 soft ball', C.muted], [140, '140 soft crack', C.muted], [150, '150 hard crack', C.muted], [170, '170 caramel', C.u5]]);
    const bx = W * 0.62; SUGST.slice(1, 7).forEach((s, i) => { const on = st.T >= s[0] && st.T < s[1]; CV.rrect(c, bx, 40 + i * 44, W - bx - 30, 36, 8, on ? hexA(C.accent, .2) : C.surface, on ? C.accent : C.line, on ? 2 : 1); CV.text(c, s[2], bx + 12, 52 + i * 44, C.ink, 12.5, 'left', 700); CV.mono(c, `${s[0]}–${s[1]} °C`, W - 42, 52 + i * 44, C.muted, 10.5, 'right'); CV.text(c, s[3], bx + 12, 67 + i * 44, C.muted, 10.5); }); },
  read(st) { const s = SUGST.find(x => st.T >= x[0] && st.T < x[1]) || SUGST[SUGST.length - 1]; return [st.T.toFixed(0) + ' °C', this.conc(st.T).toFixed(0) + '%', s[2], st.test || '—']; }
};

/* ---- 4.2 Cooking an egg ---- */
SIMS.eggs = {
  title: 'Boil an egg', h: 400,
  controls: [{ id: 'wt', label: 'Water temperature', min: 60, max: 100, step: 1, value: 100, fmt: v => v + ' °C' }, { type: 'seg', id: 'start', label: 'Egg from', value: 'fridge', options: [['fridge', 'fridge 5 °C'], ['room', 'room 20 °C']] }, { type: 'button', act: 'out', label: 'Take it out' }],
  readouts: ['Time', 'White (edge)', 'Yolk (centre)', 'Result'],
  note: 'Heat is conducted from the shell inwards. Egg white proteins set from about 62 °C (firm by ~70 °C); yolk sets at about 65–70 °C. Overcooking forms a green-grey ring of iron sulphide where the white and yolk meet.',
  init(st) { st.r = [...Array(12)].map(() => st.p.start === 'fridge' ? 5 : 20); st.time = 0; st.out = false; st.run = true; },
  change(st, id) { if (id === 'start') this.init(st); },
  action(st, a) { if (a === 'out') { st.out = true; st.run = false; } },
  step(st, dt) { if (st.out) return; const k = dt * 60; for (let s = 0; s < 6; s++) { const T = st.r, n = T.slice(); for (let i = 0; i < T.length; i++) { const outer = i === T.length - 1 ? st.p.wt : T[i + 1], inner = i === 0 ? T[1] : T[i - 1]; n[i] = T[i] + 0.0045 * k / 6 * 60 * ((outer - T[i]) + (inner - T[i]) * (i === 0 ? 1 : .8)) / 10; } st.r = n; } st.time += k; },
  draw(c, W, H, st, C) { const cx = W * 0.36, cy = H * 0.5, R = Math.min(W * 0.28, H * 0.4), yolkR = 0.45;
    for (let i = st.r.length - 1; i >= 0; i--) { const f = (i + 1) / st.r.length, T = st.r[i], isY = f <= yolkR, set = isY ? clamp((T - 64) / 8, 0, 1) : clamp((T - 60) / 10, 0, 1); c.fillStyle = isY ? mixCol('#F7A21B', '#F2C94C', set) : mixCol('#F3EFE3', '#FFFFFF', set); if (!isY && set < .5) c.fillStyle = hexA('#E8E2CF', .55 + set); c.beginPath(); c.ellipse(cx, cy, R * f * 0.8, R * f, 0, 0, Math.PI * 2); c.fill(); }
    if (st.time > 14 * 60 && st.p.wt >= 95) { c.strokeStyle = hexA('#5A7A3A', clamp((st.time - 840) / 400, 0, .8)); c.lineWidth = 3; c.beginPath(); c.ellipse(cx, cy, R * yolkR * 0.8, R * yolkR, 0, 0, Math.PI * 2); c.stroke(); }
    c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.ellipse(cx, cy, R * 0.8, R, 0, 0, Math.PI * 2); c.stroke();
    const P = CV.plot(c, C, { x: W * 0.66, y: 40, w: W * 0.28, h: H - 110 }, { xr: [0, 1], yr: [0, 100], xl: 'centre → shell', yl: '°C', series: [{ pts: st.r.map((T, i) => [(i + 0.5) / st.r.length, T]), col: C.bad, w: 2.4 }, { f: () => 62, col: C.u3, w: 1, dash: [4, 3] }, { f: () => 68, col: C.u5, w: 1, dash: [4, 3] }] }); },
  read(st) { const w = st.r[st.r.length - 2], y = st.r[0], ws = w >= 68 ? 'set' : w >= 62 ? 'setting' : 'runny', ys = y >= 70 ? 'hard' : y >= 64 ? 'jammy' : 'runny'; return [(st.time / 60).toFixed(1) + ' min', w.toFixed(0) + ' °C · ' + ws, y.toFixed(0) + ' °C · ' + ys, ws === 'set' ? (ys === 'runny' ? 'soft-boiled' : ys === 'jammy' ? 'medium' : 'hard-boiled') : 'white not set']; }
};

/* ---- 4.2 Whisking egg whites ---- */
SIMS.foam = {
  title: 'Whisk egg whites', h: 400,
  controls: [{ type: 'seg', id: 'fat', label: 'Bowl', value: 0, options: [[0, 'clean, grease-free'], [1, 'trace of yolk / fat']] }, { type: 'seg', id: 'sug', label: 'Sugar added', value: 'late', options: [['none', 'none'], ['early', 'at the start'], ['late', 'gradually at soft peaks']] }, { type: 'seg', id: 'acid', label: 'Cream of tartar', value: 0, options: [[0, 'no'], [1, 'yes']] }, { type: 'button', act: 'stop', label: 'Stop whisking' }],
  readouts: ['Whisking time', 'Foam volume', 'Stage', 'Stability'],
  note: 'Whisking denatures albumen proteins, which unfold and surround air bubbles. Fat stops the foam forming; sugar added gradually and acid stabilise it; over-whisking makes the proteins over-coagulate — dry, grainy and weeping.',
  init(st) { st.w = 0; st.run = true; st.stop = false; },
  action(st, a) { if (a === 'stop') { st.stop = true; st.run = false; } },
  step(st, dt) { if (!st.stop) st.w += dt; },
  vol(st, w = st.w) { const max = (st.p.fat ? 2.2 : 7.5) * (st.p.sug === 'early' ? 0.78 : 1) * (st.p.acid ? 1.05 : 1), rate = st.p.sug === 'early' ? 0.35 : 0.5, over = st.p.sug === 'none' && !st.p.acid ? 8 : 12; let v = 1 + (max - 1) * (1 - Math.exp(-w * rate / 2.2)); if (w > over) v -= (w - over) * 0.25; return Math.max(1, v); },
  stage(st) { const w = st.w, over = st.p.sug === 'none' && !st.p.acid ? 8 : 12; if (st.p.fat) return 'will not foam'; return w < 2 ? 'frothy' : w < 4.5 ? 'soft peaks' : w < over ? 'stiff peaks' : 'over-whisked'; },
  draw(c, W, H, st, C) { const v = this.vol(st), cx = W * 0.33, cy = H * 0.6; c.fillStyle = C.surface; c.strokeStyle = C.ink; c.lineWidth = 2.4; c.beginPath(); c.moveTo(cx - 140, cy - 60); c.quadraticCurveTo(cx, cy + 120, cx + 140, cy - 60); c.stroke();
    const top = cy + 40 - v * 16; c.save(); c.beginPath(); c.moveTo(cx - 140, cy - 60); c.quadraticCurveTo(cx, cy + 120, cx + 140, cy - 60); c.lineTo(cx + 140, top - 80); c.lineTo(cx - 140, top - 80); c.clip();
    const st_ = this.stage(st); c.fillStyle = st.p.fat ? '#F3EFD2' : st_ === 'over-whisked' ? '#EDEAE0' : '#FFFFFF'; c.beginPath(); c.moveTo(cx - 140, top); for (let x = -140; x <= 140; x += 10) c.lineTo(cx + x, top - (st_ === 'stiff peaks' ? Math.abs(Math.sin(x * 0.08)) * 18 : st_ === 'soft peaks' ? Math.abs(Math.sin(x * 0.06)) * 9 : 2)); c.lineTo(cx + 140, cy + 80); c.lineTo(cx - 140, cy + 80); c.fill();
    for (let i = 0; i < 70; i++) CV.circle(c, cx - 120 + (i * 53) % 240, top + 10 + (i * 29) % 120, st_ === 'over-whisked' ? 5 : 2 + (i % 3), null, hexA(C.muted, .45), 1); c.restore();
    if (!st.stop && st.run) { const a = st.t * 12; CV.line(c, cx + 30 * Math.cos(a), top - 10, cx + 60, top - 140, C.muted, 3); }
    const P = CV.plot(c, C, { x: W * 0.64, y: 40, w: W * 0.3, h: H - 110 }, { xr: [0, 16], yr: [0, 8.5], xl: 'whisking / min', yl: 'volume ×', series: [{ f: w => this.vol(st, w), col: C.u3, w: 2 }], dots: [[st.w, v, C.accent, 6]] }); },
  read(st) { const v = this.vol(st), s = this.stage(st); return [st.w.toFixed(1) + ' min', '×' + v.toFixed(1), s, s === 'over-whisked' ? '<span style="color:var(--bad)">collapsing, weeping</span>' : st.p.fat ? '—' : (st.p.sug === 'late' || st.p.acid) ? '<span style="color:var(--good)">stable</span>' : 'fair']; }
};

/* ---- 4.3 Emulsions ---- */
SIMS.emulsion = {
  title: 'Make an emulsion', h: 400,
  controls: [{ type: 'seg', id: 'em', label: 'Emulsifier', value: 'none', options: [['none', 'none (oil + vinegar)'], ['must', 'mustard'], ['yolk', 'egg yolk (lecithin)']] }, { type: 'button', act: 'shake', label: 'Shake / whisk' }],
  readouts: ['Droplets', 'Mean droplet size', 'State'],
  note: 'Without an emulsifier, droplets collide and coalesce, and the oil separates out (a temporary emulsion). An emulsifier coats each droplet — hydrophilic heads in the water, hydrophobic tails in the oil — so they stay dispersed.',
  init(st) { st.d = [...Array(3)].map((_, i) => ({ x: .5, y: .2, r: 30 })); st.split = true; },
  action(st, a) { if (a === 'shake') { st.d = [...Array(70)].map(() => ({ x: Math.random(), y: .3 + Math.random() * .6, r: 6 + Math.random() * 3, vx: (Math.random() - .5) * .1, vy: (Math.random() - .5) * .1 })); } },
  step(st, dt) { const stab = st.p.em === 'yolk' ? 0.002 : st.p.em === 'must' ? 0.12 : 1; st.d.forEach(p => { p.vx = (p.vx || 0) * .96 + (Math.random() - .5) * .02; p.vy = (p.vy || 0) * .96 + (Math.random() - .5) * .02 - dt * 0.02 * (p.r / 10) * (st.p.em === 'yolk' ? .05 : 1); p.x = clamp(p.x + p.vx * dt, .03, .97); p.y = clamp(p.y + p.vy * dt, .06, .95); });
    for (let i = 0; i < st.d.length; i++) for (let j = i + 1; j < st.d.length; j++) { const a = st.d[i], b = st.d[j]; if (Math.hypot(a.x - b.x, (a.y - b.y) * .8) * 300 < (a.r + b.r) * 0.9 && Math.random() < stab * dt * 20) { a.r = Math.sqrt(a.r * a.r + b.r * b.r); a.x = (a.x + b.x) / 2; st.d.splice(j, 1); j--; } } },
  draw(c, W, H, st, C) { const x0 = W * 0.18, w = W * 0.4, y0 = 30, h = H - 70; CV.rrect(c, x0, y0, w, h, 16, hexA(C.u3, .08), C.ink, 2);
    st.d.forEach(p => { const x = x0 + p.x * w, y = y0 + p.y * h; CV.circle(c, x, y, p.r, hexA('#E6B422', .75), '#B8860B', 1); if (st.p.em !== 'none' && p.r < 16) for (let k = 0; k < 8; k++) { const a = k * Math.PI / 4; CV.line(c, x + p.r * Math.cos(a), y + p.r * Math.sin(a), x + (p.r + 5) * Math.cos(a), y + (p.r + 5) * Math.sin(a), C.u3, 1); } });
    const big = st.d.filter(p => p.r > 22).length; if (big) { c.fillStyle = hexA('#E6B422', .6); c.fillRect(x0 + 3, y0 + 3, w - 6, Math.min(80, big * 12)); CV.text(c, 'oil layer', x0 + w / 2, y0 + 20, C.ink, 12, 'center', 700); }
    CV.text(c, 'oil droplets in vinegar (water)', x0 + w / 2, H - 20, C.muted, 11, 'center'); CV.text(c, st.p.em === 'yolk' ? 'Mayonnaise: stable' : st.p.em === 'must' ? 'Vinaigrette with mustard: slower to separate' : 'French dressing: separates quickly', W * 0.62, 60, C.ink, 13, 'left', 700); },
  read(st) { const n = st.d.length, r = st.d.reduce((a, p) => a + p.r, 0) / Math.max(1, n); return [n, (r / 3).toFixed(1) + ' (rel.)', n < 8 ? 'separated' : n < 40 ? 'separating' : 'emulsified']; }
};

/* ---- 4.3 Gels ---- */
SIMS.gel = DS('Set a jelly', 'Choose a gelling agent and conditions, then see whether it sets, and why.', body => {
  body.innerHTML = `<div class="ds-grid"><div>${dsSelect('ag', 'Gelling agent', [['gelatine', 'gelatine (animal protein)'], ['agar', 'agar (seaweed)'], ['pectin', 'pectin (fruit)'], ['starch', 'cornflour (starch)']], 'gelatine')}${dsRange('pc', 'Concentration', 0.2, 6, 0.1, 2, '%')}${dsSelect('heat', 'Heating', [['warm', 'dissolved in warm liquid (~50 °C)'], ['boil', 'boiled for 2 minutes']], 'warm')}${dsSelect('fruit', 'Fruit added', [['none', 'none'], ['pine', 'fresh pineapple'], ['cpine', 'tinned (cooked) pineapple'], ['straw', 'strawberries']], 'none')}${dsSelect('sug', 'Sugar and acid', [['low', 'little sugar, no acid'], ['jam', '≈ 65% sugar + acid (pH 3)']], 'low')}${dsSelect('cool', 'Left to set', [['fridge', 'in the fridge (5 °C)'], ['room', 'at room temperature (22 °C)'], ['warm', 'in a warm room (35 °C)']], 'fridge')}</div><div class="ds-out" id="go"></div></div>`;
  dsWire(body, () => { const ag = val(body, 'ag'), pc = val(body, 'pc'), heat = val(body, 'heat'), fr = val(body, 'fruit'), sug = val(body, 'sug'), cool = val(body, 'cool'); let set = true, why = [], firm = 0;
    if (ag === 'gelatine') { firm = pc * 2.5; if (fr === 'pine') { set = false; why.push('fresh pineapple contains <b>bromelain</b>, an enzyme that digests the gelatine protein'); } if (heat === 'boil') { firm *= 0.7; why.push('boiling weakens gelatine'); } if (cool === 'warm') { set = false; why.push('gelatine melts at about 35 °C — it will not set in a warm room'); } else if (cool === 'room') firm *= 0.6; }
    if (ag === 'agar') { firm = pc * 8; if (heat !== 'boil') { set = false; why.push('agar must be <b>boiled</b> to dissolve'); } else why.push('agar sets at about 35–45 °C, even at room temperature, and is vegan'); if (fr === 'pine') why.push('pineapple enzymes do not affect agar (a polysaccharide)'); }
    if (ag === 'pectin') { firm = pc * 5; if (sug !== 'jam') { set = false; why.push('pectin needs about 65% sugar and acid (pH ≈ 3), boiled to 104–105 °C'); } if (heat !== 'boil') { set = false; why.push('pectin must be boiled to setting point'); } }
    if (ag === 'starch') { firm = pc * 3; if (heat !== 'boil') { set = false; why.push('starch must be heated near boiling to gelatinise'); } if (sug === 'jam') { firm *= 0.6; why.push('acid and lots of sugar weaken a starch gel'); } }
    if (pc < (ag === 'agar' ? 0.5 : ag === 'gelatine' ? 1 : 2)) { set = false; why.push('the concentration is too low to form a gel network'); }
    const f = set ? clamp(firm, 1, 20) : 0;
    $('#go', body).innerHTML = `<svg viewBox="0 0 240 150" style="width:240px;max-width:100%"><path d="M40,40 L200,40 L180,130 L60,130 Z" fill="var(--u7)" fill-opacity="${set ? .55 : .25}" stroke="var(--ink)" stroke-width="2"/>${set ? '' : '<path d="M40,40 Q120,30 200,40 L205,60 Q120,70 35,60 Z" fill="var(--u7)" fill-opacity=".35"/>'}${fr !== 'none' ? [70, 110, 150].map(x => `<circle cx="${x}" cy="${set ? 90 : 118}" r="10" fill="#F2C94C" stroke="var(--ink)"/>`).join('') : ''}</svg>
      <div class="ds-big">${set ? (f > 12 ? 'Firm gel' : f > 5 ? 'Set' : 'Soft set') : 'Did not set'}</div><ul class="small">${why.map(w => `<li>${w}</li>`).join('') || '<li>The conditions suit this gelling agent.</li>'}</ul>`; });
});

/* ---- 4.4 Yeast fermentation ---- */
SIMS.yeast = {
  title: 'Yeast balloon experiment', h: 400,
  controls: [{ id: 'T', label: 'Water temperature', min: 5, max: 70, step: 1, value: 37, fmt: v => v + ' °C' }, { id: 'sug', label: 'Sugar', min: 0, max: 30, step: 1, value: 10, fmt: v => v + ' g' }, { id: 'salt', label: 'Salt', min: 0, max: 10, step: 0.5, value: 0, fmt: v => v + ' g' }],
  readouts: ['Time', 'CO₂ (balloon)', 'Yeast activity'],
  note: 'Yeast ferments sugar to carbon dioxide and ethanol. It works fastest at about 35–40 °C, is dormant when cold and killed above about 60 °C. Salt and very high sugar concentrations slow it by drawing water out of the cells (osmosis).',
  init(st) { st.co2 = 0; st.tm = 0; },
  rate(st) { const T = st.p.T, fT = T >= 60 ? 0 : Math.exp(-((T - 37) ** 2) / (2 * 11 ** 2)) * (T > 50 ? (60 - T) / 10 : 1); const fs = st.p.sug <= 0 ? 0.15 : Math.min(1, st.p.sug / 8) * (st.p.sug > 20 ? 1 - (st.p.sug - 20) * 0.04 : 1); const fsalt = 1 / (1 + st.p.salt * 0.35); return fT * fs * fsalt; },
  step(st, dt) { st.tm += dt * 2; st.co2 = Math.min(100, st.co2 + this.rate(st) * dt * 6); },
  draw(c, W, H, st, C) { const cx = W * 0.3, by = H - 60, r = 18 + st.co2 * 0.9; CV.rrect(c, cx - 45, by - 120, 90, 120, 14, hexA(C.u5, .15), C.ink, 2); for (let i = 0; i < 12; i++) CV.circle(c, cx - 30 + (i * 17) % 60, by - 20 - ((st.tm * 20 * this.rate(st) + i * 11) % 90), 2.5, null, hexA(C.ink, .4), 1);
    CV.line(c, cx - 14, by - 120, cx - 14, by - 140, C.ink, 2); CV.line(c, cx + 14, by - 120, cx + 14, by - 140, C.ink, 2); c.fillStyle = hexA(C.bad, .75); c.beginPath(); c.ellipse(cx, by - 140 - r, r * 0.85, r, 0, 0, Math.PI * 2); c.fill(); CV.text(c, 'CO₂', cx, by - 140 - r, '#fff', 12, 'center', 700);
    const self = this, P = CV.plot(c, C, { x: W * 0.58, y: 40, w: W * 0.36, h: H - 110 }, { xr: [5, 70], yr: [0, 1.05], xl: 'temperature / °C', yl: 'rate', series: [{ f: T => self.rate({ p: { ...st.p, T } }), col: C.u5, w: 2.4 }], dots: [[st.p.T, this.rate(st), C.accent, 6]] }); [20, 40, 60].forEach(t => CV.mono(c, t, P.X(t), H - 58, C.muted, 10, 'center')); },
  read(st) { const r = this.rate(st); return [Math.floor(st.tm) + ' min', st.co2.toFixed(0) + ' ml', st.p.T >= 60 ? '<span style="color:var(--bad)">killed</span>' : st.p.T < 12 ? 'dormant' : r > .7 ? '<span style="color:var(--good)">vigorous</span>' : r > .3 ? 'moderate' : 'slow']; }
};

/* ---- 4.4 Enzymic browning ---- */
SIMS.browning = {
  title: 'Enzymic browning of apple', h: 380,
  controls: [{ type: 'seg', id: 'tr', label: 'Treatment', value: 'none', options: [['none', 'none'], ['lemon', 'lemon juice'], ['water', 'covered in water'], ['blanch', 'blanched'], ['salt', 'salt water'], ['fridge', 'chilled only']] }, { id: 'sp', label: 'Speed', min: 1, max: 6, step: 1, value: 3, fmt: v => '×' + v * 20 }],
  readouts: ['Time since cutting', 'Browning (colour score)', 'How it works'],
  note: 'Cutting breaks cells so the enzyme <b>polyphenol oxidase</b> meets phenols and oxygen, making brown melanins. Treatments work by lowering pH, excluding oxygen, denaturing the enzyme with heat or slowing it with cold.',
  how: { none: 'enzyme + oxygen react freely', lemon: 'acid lowers pH; vitamin C is an antioxidant', water: 'excludes oxygen', blanch: 'heat denatures the enzyme', salt: 'salt inhibits the enzyme', fridge: 'cold slows the enzyme' },
  k: { none: 1, lemon: 0.15, water: 0.25, blanch: 0.03, salt: 0.3, fridge: 0.45 },
  init(st) { st.tm = 0; },
  step(st, dt) { st.tm += dt * st.p.sp * 20 / 60; },
  br(st, tr, t) { return 1 - Math.exp(-this.k[tr] * t / 25); },
  draw(c, W, H, st, C) { const self = this; ['none', 'lemon', 'water', 'blanch', 'salt', 'fridge'].forEach((tr, i) => { const x = 70 + (i % 3) * 120, y = 80 + Math.floor(i / 3) * 130, b = this.br(st, tr, st.tm); c.fillStyle = mixCol('#F6EFC9', '#A0622B', b); c.strokeStyle = tr === st.p.tr ? C.accent : '#B33'; c.lineWidth = tr === st.p.tr ? 4 : 3; c.beginPath(); c.arc(x, y, 44, Math.PI * 0.1, Math.PI * 1.9); c.lineTo(x, y); c.closePath(); c.fill(); c.stroke(); CV.circle(c, x + 6, y + 6, 3, '#3A2A1A'); CV.circle(c, x - 6, y + 12, 3, '#3A2A1A'); CV.text(c, tr === 'none' ? 'untreated' : tr, x, y + 60, C.ink, 11.5, 'center', tr === st.p.tr ? 700 : 500); });
    CV.plot(c, C, { x: W * 0.68, y: 40, w: W * 0.27, h: H - 110 }, { xr: [0, 120], yr: [0, 1], xl: 'minutes', yl: 'browning', series: ['none', st.p.tr].map((tr, i) => ({ f: t => self.br(st, tr, t), col: i ? C.accent : C.muted, w: i ? 2.6 : 1.4, dash: i ? [] : [4, 3] })), dots: [[Math.min(120, st.tm), this.br(st, st.p.tr, Math.min(120, st.tm)), C.accent, 5]] }); },
  read(st) { return [Math.floor(st.tm) + ' min', (this.br(st, st.p.tr, st.tm) * 10).toFixed(1) + ' / 10', this.how[st.p.tr]]; }
};

/* ---- 4.5/4.6 Substitution finder ---- */
const SWAPS = [['Eggs (binding)', 'vegan', 'Flaxseed “egg”: 1 tbsp ground flax + 3 tbsp water', 'mucilage gel binds; adds fibre and omega-3; denser, no aeration'], ['Egg whites (foam)', 'vegan', 'Aquafaba (chickpea water)', 'proteins and saponins trap air — meringue, mousse; add cream of tartar'], ['Oil (moisture) in cakes', 'lower fat', 'Applesauce', 'less fat and energy; sweeter, denser crumb, browns faster'], ['Butter', 'lower saturated fat', 'Mashed banana or avocado', 'moisture and tenderness; cannot be creamed to trap air; flavour/colour change'], ['Sour cream / mayonnaise', 'lower fat, higher protein', 'Greek yogurt', 'tangy and creamy; may split if boiled'], ['Minced beef', 'vegetarian / lower cost', 'Quorn mince, lentils or TVP', 'Quorn: mycoprotein, high protein, fibre; lentils: cheap, fibre, iron'], ['Pulled pork', 'vegan', 'Young jackfruit', 'stringy texture carries flavour, but very low protein'], ['Wheat flour (bread)', 'gluten free', 'GF flour blend + xanthan gum', 'xanthan gum mimics gluten’s elasticity and gas-holding'], ['Gelatine', 'vegetarian / vegan / halal', 'Agar', 'must be boiled; firmer, sets at room temperature'], ['Sugar', 'sugar free / diabetes', 'Sweeteners (sucralose, stevia) + bulking agent', 'replaces sweetness only — loses browning, bulk, moisture, preservation'], ['Cow’s milk', 'dairy free / vegan', 'Fortified soya or oat drink', 'choose calcium-, B12- and iodine-fortified versions'], ['Pasta / rice', 'low carbohydrate', 'Courgetti or cauliflower rice', 'far less carbohydrate and energy; softer texture, less filling']];
SIMS.swap = explorerSim('Substitution finder', 'Pick an ingredient to replace. Every substitute should be judged by the <b>function</b> it has to perform — then tested.', SWAPS.map(s => [s[0], `<h3>${s[0]} → ${s[2]}</h3><p><span class="tag sm">${s[1]}</span></p><p><b>What changes:</b> ${s[3]}.</p><p class="small muted">Test it: compare the original and the substitute with objective measurements (height, spread, texture) and a coded taste panel.</p>`]));

/* ---- 4.6 Ratios ---- */
SIMS.ratio = DS('Flour : liquid ratio', 'Change the ratio of flour to liquid and see which kind of mixture you make.', body => {
  body.innerHTML = `<div class="ds-grid"><div>${dsRange('f', 'Flour', 50, 500, 10, 250, ' g')}${dsRange('l', 'Liquid', 20, 700, 10, 150, ' ml')}</div><div class="ds-out" id="ro"></div></div>`;
  dsWire(body, () => { const f = val(body, 'f'), l = val(body, 'l'), r = l / f; const kind = r < 0.25 ? ['crumbly — rubbed-in mixture (e.g. crumble, before adding liquid)', '#E8D9A8'] : r < 0.45 ? ['stiff dough — pastry, biscuits', '#E4C98A'] : r < 0.7 ? ['soft dough — bread, scones', '#EED9A6'] : r < 1.2 ? ['dropping batter — cakes, muffins', '#F2E3B8'] : r < 2.4 ? ['pouring batter — pancakes, Yorkshire puddings', '#F7EBC8'] : ['thin — sauces and soups need a starch roux', '#FBF3DC'];
    $('#ro', body).innerHTML = `<div class="ds-big">1 : ${r.toFixed(2)}</div><svg viewBox="0 0 220 120" style="width:220px"><ellipse cx="110" cy="80" rx="${80 - clamp(r, 0, 2.5) * 6}" ry="${30 - clamp(r, 0, 2.5) * 8}" fill="${kind[1]}" stroke="var(--ink)"/>${r > 1.2 ? '<path d="M40,90 Q110,110 180,90" fill="none" stroke="var(--ink)" stroke-dasharray="4 3"/>' : ''}</svg><p><b>${kind[0]}</b></p><p class="small muted">Reference ratios: shortcrust 2 : 1 flour : fat (plus a little water); bread about 5 : 3 flour : water; pancake batter about 1 : 2 flour : milk.</p>`; });
});

/* ---- 4.7 Fair test designer ---- */
SIMS.fairtest = DS('Design a fair test', 'For each investigation, choose the independent variable (what you change), the dependent variable (what you measure) and which factors must be controlled.', body => {
  const Q = [['Does the amount of sugar affect the height of a sponge cake?', ['mass of sugar', 'cake height (mm)', ['oven temperature', 'tin size', 'mass of flour', 'baking time']], ['colour of the bowl', 'who eats it']], ['Which treatment best stops apple slices browning?', ['treatment used', 'colour score after 1 hour', ['apple variety', 'slice thickness', 'temperature', 'time']], ['the knife’s brand', 'plate colour']], ['How does kneading time affect bread volume?', ['kneading time', 'loaf volume (seed displacement)', ['proving time and temperature', 'flour type', 'water temperature', 'oven']], ['the day of the week', 'name of the baker']]];
  const IVs = ['mass of sugar', 'treatment used', 'kneading time', 'cake height (mm)', 'colour score after 1 hour', 'loaf volume (seed displacement)'];
  let cur = 0; const pick = Q.map(() => ({ iv: null, dv: null, c: new Set() }));
  const draw = () => { const [q, [iv, dv, ctrl], distract] = Q[cur], p = pick[cur], opts = shuffle([...ctrl, ...distract]).sort();
    const good = p.iv === iv && p.dv === dv && ctrl.every(x => p.c.has(x)) && ![...p.c].some(x => distract.includes(x));
    body.innerHTML = `<div class="opt-grid" style="margin-bottom:12px">${Q.map((x, i) => `<button class="pickb${i === cur ? ' on' : ''}" data-q="${i}">Investigation ${i + 1}</button>`).join('')}</div><div class="card" style="padding:14px 16px"><h3 style="margin:0 0 10px">${q}</h3>
      <div class="eyebrow">Independent variable</div><div class="chip-list" style="margin:6px 0 12px">${IVs.map(x => `<button class="pickb${p.iv === x ? ' on' : ''}" data-iv="${x}">${x}</button>`).join('')}</div>
      <div class="eyebrow">Dependent variable</div><div class="chip-list" style="margin:6px 0 12px">${IVs.map(x => `<button class="pickb${p.dv === x ? ' on' : ''}" data-dv="${x}">${x}</button>`).join('')}</div>
      <div class="eyebrow">Control variables (choose all that apply)</div><div class="chip-list" style="margin:6px 0 12px">${opts.map(x => `<button class="pickb${p.c.has(x) ? ' on' : ''}" data-cv="${x}">${x}</button>`).join('')}</div>
      <p>${good ? '<span class="flag ok">A fair test!</span> Now repeat each test (at least 3 times) and calculate a mean.' : `<span class="flag mid">Keep going</span> ${p.iv && p.iv !== iv ? 'Check the independent variable. ' : ''}${p.dv && p.dv !== dv ? 'Check the dependent variable. ' : ''}${[...p.c].some(x => distract.includes(x)) ? 'One of your controls would not affect the result. ' : ''}`}</p></div>`;
    $$('[data-q]', body).forEach(b => b.onclick = () => { cur = +b.dataset.q; draw(); }); $$('[data-iv]', body).forEach(b => b.onclick = () => { p.iv = b.dataset.iv; draw(); }); $$('[data-dv]', body).forEach(b => b.onclick = () => { p.dv = b.dataset.dv; draw(); }); $$('[data-cv]', body).forEach(b => b.onclick = () => { p.c.has(b.dataset.cv) ? p.c.delete(b.dataset.cv) : p.c.add(b.dataset.cv); draw(); if (Q[cur][1][2].every(x => p.c.has(x)) && p.iv === Q[cur][1][0] && p.dv === Q[cur][1][1]) sfx.good(); }); };
  draw();
});

/* ---- 4.8 Descriptive statistics ---- */
SIMS.stats = DS('Statistics calculator', 'Type or paste results separated by commas or spaces (e.g. taste scores, loaf heights). All the descriptive statistics update, with a dot plot.', body => {
  body.innerHTML = `<div class="ctl"><label for="data">Data</label><input type="text" id="data" class="ds-sel" value="7, 6, 8, 5, 7, 9, 6, 7"></div><div class="ctl"><label for="data2">Second group (optional — for a t-test)</label><input type="text" id="data2" class="ds-sel" value="5, 6, 4, 6, 5, 7, 5, 4"></div><div id="so" class="ds-out" style="margin-top:12px"></div>`;
  const parse = s => s.split(/[\s,;]+/).filter(Boolean).map(Number).filter(isFinite);
  const desc = v => { const n = v.length, m = v.reduce((a, b) => a + b, 0) / n, o = v.slice().sort((a, b) => a - b), med = n % 2 ? o[(n - 1) / 2] : (o[n / 2 - 1] + o[n / 2]) / 2, f = {}; v.forEach(x => f[x] = (f[x] || 0) + 1); const mx = Math.max(...Object.values(f)), mode = Object.keys(f).filter(k => f[k] === mx), sd = n > 1 ? Math.sqrt(v.reduce((a, x) => a + (x - m) ** 2, 0) / (n - 1)) : 0; return { n, m, med, mode: mx === 1 ? 'none' : mode.join(', '), sd, min: o[0], max: o[n - 1] }; };
  dsWire(body, () => { const a = parse(val(body, 'data')), b = parse(val(body, 'data2')); if (a.length < 2) { $('#so', body).innerHTML = '<p class="muted">Enter at least two numbers.</p>'; return; } const A = desc(a), B = b.length > 1 ? desc(b) : null;
    const lo = Math.min(A.min, B ? B.min : Infinity), hi = Math.max(A.max, B ? B.max : -Infinity), X = x => 20 + (x - lo) / Math.max(1e-9, hi - lo) * 460;
    const dots = (v, y, c) => { const cnt = {}; return v.map(x => { cnt[x] = (cnt[x] || 0) + 1; return `<circle cx="${X(x)}" cy="${y - (cnt[x] - 1) * 11}" r="5" fill="${c}"/>`; }).join(''); };
    let t = ''; if (B) { const se = Math.sqrt(A.sd ** 2 / A.n + B.sd ** 2 / B.n), tv = (A.m - B.m) / se, df = (A.sd ** 2 / A.n + B.sd ** 2 / B.n) ** 2 / ((A.sd ** 2 / A.n) ** 2 / (A.n - 1) + (B.sd ** 2 / B.n) ** 2 / (B.n - 1)), crit = 2 + 2.5 / Math.max(1, df - 0.5); t = `<p class="small"><b>Welch’s t-test:</b> t = ${tv.toFixed(2)}, df ≈ ${df.toFixed(1)}, critical value at p = 0.05 ≈ ${crit.toFixed(2)}. ${Math.abs(tv) > crit ? '<span class="flag ok">significant difference (p &lt; 0.05)</span> — reject the null hypothesis.' : '<span class="flag mid">no significant difference</span> — the null hypothesis is not rejected.'}</p>`; }
    const row = (lab, S) => `<tr><td>${lab}</td><td>${S.n}</td><td>${S.m.toFixed(2)}</td><td>${S.med}</td><td>${S.mode}</td><td>${S.max - S.min}</td><td>${S.sd.toFixed(2)}</td></tr>`;
    $('#so', body).innerHTML = `<table class="ds-table"><tr><th></th><th>n</th><th>mean</th><th>median</th><th>mode</th><th>range</th><th>SD</th></tr>${row('Group 1', A)}${B ? row('Group 2', B) : ''}</table><svg viewBox="0 0 500 ${B ? 150 : 90}" style="width:100%;max-width:560px">${ln(20, 70, 480, 70, INK, 1.2)}${dots(a, 60, 'var(--u4)')}${ln(X(A.m), 20, X(A.m), 74, 'var(--u4)', 2, '4 3')}${B ? ln(20, 140, 480, 140, INK, 1.2) + dots(b, 130, 'var(--u2)') + ln(X(B.m), 90, X(B.m), 144, 'var(--u2)', 2, '4 3') : ''}${tx(20, 86, lo, { fs: 10, f: 'var(--f-mono)' })}${tx(480, 86, hi, { a: 'end', fs: 10, f: 'var(--f-mono)' })}</svg>${t}`; });
});

/* ---- 4.8 Correlation and regression ---- */
SIMS.regression = {
  title: 'Correlation and regression', h: 400, noPlay: true,
  controls: [{ type: 'seg', id: 'set', label: 'Data set', value: 'sugar', options: [['sugar', 'sugar vs sweetness score'], ['bake', 'cake mass vs baking time'], ['none', 'shoe size vs taste score']] }, { type: 'button', act: 'new', label: 'New sample' }],
  readouts: ['Pearson’s r', 'Strength', 'Regression line', 'Prediction'],
  note: 'Drag the points. Pearson’s <i>r</i> runs from −1 (perfect negative) to +1 (perfect positive). The least-squares regression line $y = a + bx$ can be used to predict — but only within the range of the data, and correlation does not prove causation.',
  gen(st) { const s = st.p.set, n = 12; st.pts = [...Array(n)].map((_, i) => { const x = s === 'sugar' ? 2 + i * 1.5 : s === 'bake' ? 200 + i * 60 : 3 + i * 0.8; const y = s === 'sugar' ? clamp(1.2 + x * 0.42 + (Math.random() - .5) * 1.6, 0, 9) : s === 'bake' ? 12 + x * 0.045 + (Math.random() - .5) * 6 : clamp(5 + (Math.random() - .5) * 6, 0, 9); return [x, y]; }); },
  rng(st) { return st.p.set === 'sugar' ? [[0, 20], [0, 10], 'sugar / g per 100 g', 'sweetness (0–9)'] : st.p.set === 'bake' ? [[150, 950], [0, 70], 'cake mass / g', 'baking time / min'] : [[2, 13], [0, 10], 'shoe size', 'taste score']; },
  init(st) { this.gen(st); st.drag = -1; }, change(st) { this.gen(st); }, action(st) { this.gen(st); },
  fit(st) { const p = st.pts, n = p.length, mx = p.reduce((a, q) => a + q[0], 0) / n, my = p.reduce((a, q) => a + q[1], 0) / n; let sxy = 0, sxx = 0, syy = 0; p.forEach(([x, y]) => { sxy += (x - mx) * (y - my); sxx += (x - mx) ** 2; syy += (y - my) ** 2; }); const b = sxy / sxx, a = my - b * mx, r = sxy / Math.sqrt(sxx * syy); return { a, b, r, mx }; },
  box(W, H) { return { x: 70, y: 30, w: W - 110, h: H - 90 }; },
  pointer(type, x, y, st) { const [xr, yr] = this.rng(st), B = this.box(st.W, st.H), X = v => B.x + (v - xr[0]) / (xr[1] - xr[0]) * B.w, Y = v => B.y + B.h - (v - yr[0]) / (yr[1] - yr[0]) * B.h;
    if (type === 'down') st.drag = st.pts.findIndex(p => Math.hypot(X(p[0]) - x, Y(p[1]) - y) < 14); if (type === 'drag' && st.drag >= 0) st.pts[st.drag] = [clamp(xr[0] + (x - B.x) / B.w * (xr[1] - xr[0]), xr[0], xr[1]), clamp(yr[0] + (B.y + B.h - y) / B.h * (yr[1] - yr[0]), yr[0], yr[1])]; if (type === 'up') st.drag = -1; },
  draw(c, W, H, st, C) { const [xr, yr, xl, yl] = this.rng(st), f = this.fit(st); const P = CV.plot(c, C, this.box(W, H), { xr, yr, xl, yl, series: [{ f: x => f.a + f.b * x, col: C.accent, w: 2 }], dots: st.pts.map(p => [p[0], p[1], C.u4, 6]) });
    [xr[0], (xr[0] + xr[1]) / 2, xr[1]].forEach(v => CV.mono(c, Math.round(v), P.X(v), H - 44, C.muted, 10, 'center')); [yr[0], (yr[0] + yr[1]) / 2, yr[1]].forEach(v => CV.mono(c, Math.round(v), 62, P.Y(v), C.muted, 10, 'right')); },
  read(st) { const f = this.fit(st), r = f.r, s = Math.abs(r), px = st.p.set === 'sugar' ? 12 : st.p.set === 'bake' ? 600 : 8; return [r.toFixed(2), (s > .7 ? 'strong' : s > .4 ? 'moderate' : s > .2 ? 'weak' : 'no') + (s > .2 ? (r > 0 ? ' positive' : ' negative') : ' correlation'), `y = ${f.a.toFixed(2)} + ${f.b.toFixed(3)}x`, `x = ${px} → y ≈ ${(f.a + f.b * px).toFixed(1)}`]; }
};

/* ---- 4.9 Choosing charts ---- */
SIMS.charts = sorterSim('Choose the right chart', 'Pick the best way to present each set of data.', ['Bar chart', 'Line graph', 'Scatter graph', 'Pie chart', 'Star profile'], [
  ['Mean taste score for four recipes', 0, 'Separate categories — compare with bars (add SD error bars).'],
  ['Core temperature of a stew every 10 minutes while cooling', 1, 'Continuous change over time.'],
  ['Sugar content vs sweetness rating for 12 drinks', 2, 'Relationship between two measured variables — add a line of best fit.'],
  ['Proportion of survey respondents choosing each main reason for food choice', 3, 'Parts of a whole (percentages adding to 100%).'],
  ['Sensory attributes (sweet, crunchy, colour, aroma…) of two biscuits', 4, 'Several attributes compared at once.'],
  ['Loaf height after 0, 2, 5 and 10 minutes kneading (four separate batches)', 0, 'Separate trials of an independent variable — a bar chart (or a line graph if treating kneading time as continuous).'],
  ['Number of meals sold each day for a month', 1, 'A trend over time.'],
  ['Hours of sleep vs number of snacks eaten, per learner', 2, 'Looking for correlation between two variables.']
]);

/* ======================= UNIT 5 ======================= */
SIMS.issues = explorerSim('Current issues explorer', 'Key current issues in food science and nutrition, with evidence and stakeholders to get your research started.', [
  ['Food waste', '<h3>Reducing food waste</h3><p><b>Evidence:</b> the UK wastes about 10 million tonnes of food a year; households are responsible for about 60% (WRAP). Wasted food wastes the land, water and energy used to produce it, and releases methane in landfill.</p><p><b>Actions:</b> meal planning, use-by vs best-before education, storage, redistribution (FareShare, OLIO), anaerobic digestion.</p><p><b>Stakeholders:</b> retailers, consumers, hospitality, voluntary sector, local government.</p>'],
  ['Obesity and NCDs', '<h3>Tackling obesity and diet-related disease</h3><p><b>Evidence:</b> about 1 in 4 UK adults are obese; NCDs cause about 74% of global deaths (WHO).</p><p><b>Actions:</b> Soft Drinks Industry Levy, HFSS advertising and promotion restrictions, calorie labelling, reformulation, <i>Healthy Weight: Healthy Wales</i>.</p><p><b>Stakeholders:</b> NHS Wales/England, government, manufacturers, schools, media.</p>'],
  ['Access to healthy food', '<h3>Improving access to healthy food</h3><p><b>Evidence:</b> the poorest households would need to spend a large share of disposable income to follow the Eatwell Guide (Food Foundation); food bank use rose sharply during the cost-of-living crisis.</p><p><b>Actions:</b> free school meals, Healthy Start, community food projects, affordable fruit and vegetables.</p>'],
  ['Environmental impact', '<h3>Reducing the environmental impact of food</h3><p><b>Evidence:</b> the food system produces roughly a quarter to a third of greenhouse-gas emissions; beef and lamb have the highest footprints.</p><p><b>Actions:</b> plant-rich diets, local and seasonal food, reducing packaging, regenerative farming.</p>'],
  ['Labelling and food fraud', '<h3>Transparency in labelling and food fraud</h3><p><b>Evidence:</b> the 2013 horsemeat scandal; adulterated olive oil and honey; mislabelled fish.</p><p><b>Actions:</b> DNA testing, traceability, the National Food Crime Unit, clearer labels (Natasha’s Law for allergens).</p>'],
  ['Gut microbiome', '<h3>The gut microbiome</h3><p><b>Evidence:</b> trillions of microbes ferment fibre to short-chain fatty acids; diversity is linked to immunity, weight and mood. Research is growing but many claims run ahead of the evidence.</p><p><b>Actions:</b> more fibre and plant variety, fermented foods, pre- and probiotics.</p>'],
  ['Personalised nutrition', '<h3>Personalised nutrition</h3><p><b>Evidence:</b> individuals’ glucose responses to the same foods vary; apps, wearables and genetic tests promise tailored advice. Evidence of long-term benefit is still limited, and cost may widen inequality.</p>'],
  ['Diet trends', '<h3>Diet trends: high protein, low carb, fasting, fad diets</h3><p><b>Evidence:</b> weight loss depends mainly on a sustained energy deficit; many trend diets are hard to sustain and may lack fibre or micronutrients.</p><p><b>Stakeholders:</b> consumers, media and influencers, manufacturers (“high protein” products), health professionals.</p>'],
  ['Food inflation', '<h3>The economy and affordable food</h3><p><b>Evidence:</b> UK food inflation peaked at about 19% in March 2023. Low-income households trade down to cheaper, energy-dense foods.</p><p><b>Actions:</b> budget cooking skills, frozen and tinned produce, pulses, retailer price caps.</p>']
]);
SIMS.stakeholders = sorterSim('Stakeholder interests', 'Match each research finding to the stakeholder most likely to act on it.', ['Manufacturers / retailers', 'Hospitality and catering', 'Government / regulators', 'Health professionals (NHS)', 'Voluntary sector', 'Consumers / media'], [
  ['Shoppers will buy a reduced-sugar cereal if the taste is unchanged.', 0, 'Reformulation and sales.'],
  ['Customers want allergen information on every menu item.', 1, 'Restaurants and cafés must provide allergen information.'],
  ['A levy on sugary drinks reduced the sugar sold by a third.', 2, 'Evidence for fiscal policy.'],
  ['Patients with type 2 diabetes improved with a structured education course.', 3, 'Clinical practice and prevention.'],
  ['Demand for food parcels doubled over two winters.', 4, 'Food banks and charities plan provision.'],
  ['Most people misunderstand “best before” dates.', 5, 'Public awareness campaigns and news stories.'],
  ['Supermarket price promotions increase purchases of HFSS snacks.', 2, 'Regulators restrict HFSS promotions.'],
  ['School lunch waste is highest for vegetables.', 1, 'School caterers change menus and presentation.']
]);
SIMS.methods = sorterSim('Primary or secondary? Qualitative or quantitative?', 'Classify each piece of research evidence.', ['Primary · quantitative', 'Primary · qualitative', 'Secondary · quantitative', 'Secondary · qualitative'], [
  ['Your questionnaire: 64% of 50 learners skip breakfast.', 0, 'You collected numerical data.'],
  ['Quotes from your focus group about why they skip breakfast.', 1, 'You collected words and opinions.'],
  ['National Diet and Nutrition Survey figures on fibre intake.', 2, 'Existing statistics collected by others.'],
  ['A journal article’s interviews with food bank users.', 3, 'Existing qualitative research.'],
  ['Your taste panel scores (1–9) for two recipes.', 0, 'Numerical data you collected.'],
  ['Your observation notes on how pupils choose lunch.', 1, 'Descriptive observations you made.'],
  ['ONS data on food price inflation.', 2, 'Published statistics.'],
  ['A newspaper feature describing chefs’ views on plant-based menus.', 3, 'Someone else’s descriptive account.']
]);
SIMS.craap = DS('Evaluate a source (CRAAP)', 'Score each source from 1 (poor) to 5 (excellent) on Currency, Relevance, Authority, Accuracy and Purpose. Then compare with the suggested scores.', body => {
  const SRC = [['NHS web page on vitamin D (updated 2025)', [5, 5, 5, 5, 5], 'Recent, authoritative, evidence-based, informative.'], ['Influencer blog: “Detox tea melted my belly fat”', [4, 2, 1, 1, 1], 'Testimonial, no evidence, sells a product.'], ['Peer-reviewed meta-analysis on fibre and heart disease (2019)', [4, 5, 5, 5, 5], 'Strongest level of evidence.'], ['Sugar manufacturer’s leaflet on sugar and health', [4, 4, 3, 3, 2], 'Possible conflict of interest.'], ['Textbook on food science (2006)', [2, 4, 4, 4, 5], 'Reliable but may be out of date.']];
  let cur = 0; const sc = SRC.map(() => [3, 3, 3, 3, 3]), L = ['Currency', 'Relevance', 'Authority', 'Accuracy', 'Purpose'];
  const draw = () => { const [n, ex, why] = SRC[cur], s = sc[cur], tot = s.reduce((a, b) => a + b), et = ex.reduce((a, b) => a + b);
    body.innerHTML = `<div class="opt-grid" style="margin-bottom:12px">${SRC.map((x, i) => `<button class="pickb${i === cur ? ' on' : ''}" data-i="${i}">${x[0]}</button>`).join('')}</div><div class="ds-grid"><div>${L.map((l, k) => dsRange('c' + k, l, 1, 5, 1, s[k])).join('')}</div><div class="ds-out"><div class="ds-big">${tot} / 25</div><p>${tot >= 20 ? '<span class="flag ok">credible</span>' : tot >= 14 ? '<span class="flag mid">use with care</span>' : '<span class="flag no">not credible</span>'}</p><p class="small">Suggested: ${L.map((l, k) => `${l[0]} ${ex[k]}`).join(' · ')} = ${et}/25. ${why}</p></div></div>`;
    $$('[data-i]', body).forEach(b => b.onclick = () => { cur = +b.dataset.i; draw(); }); L.forEach((_, k) => { const inp = $('#c' + k, body); inp.style.setProperty('--p', (inp.value - 1) / 4 * 100 + '%'); inp.onchange = inp.oninput = () => { sc[cur][k] = +inp.value; draw(); }; }); };
  draw();
});

/* ---- 5.4 Sampling ---- */
SIMS.sampling = {
  title: 'Sampling and bias', h: 400, noPlay: true,
  controls: [{ type: 'seg', id: 'm', label: 'Sampling method', value: 'random', options: [['random', 'random'], ['strat', 'stratified'], ['sys', 'systematic'], ['opp', 'opportunity (my class)']] }, { id: 'n', label: 'Sample size', min: 5, max: 100, step: 5, value: 30 }, { type: 'button', act: 'draw', label: 'Draw a new sample' }],
  readouts: ['True % who skip breakfast', 'Sample estimate', 'Error', 'Comment'],
  note: 'The population is 400 learners in four year groups (colours). The skip-breakfast rate is higher in older year groups. An opportunity sample from one class is quick but biased; larger random or stratified samples give estimates closer to the truth.',
  init(st) { st.pop = [...Array(400)].map((_, i) => { const yr = Math.floor(i / 100); return { yr, skip: Math.random() < [0.2, 0.3, 0.45, 0.6][yr] }; }); this.drawS(st); },
  action(st) { this.drawS(st); }, change(st) { this.drawS(st); },
  drawS(st) { const n = st.p.n, P = st.pop; let idx = []; if (st.p.m === 'random') idx = shuffle(P.map((_, i) => i)).slice(0, n); else if (st.p.m === 'strat') { for (let y = 0; y < 4; y++) idx.push(...shuffle([...Array(100)].map((_, i) => y * 100 + i)).slice(0, Math.round(n / 4))); } else if (st.p.m === 'sys') { const k = Math.floor(400 / n), s0 = Math.floor(Math.random() * k); for (let i = s0; i < 400 && idx.length < n; i += k) idx.push(i); } else idx = shuffle([...Array(30)].map((_, i) => 300 + i)).slice(0, Math.min(n, 30)); st.idx = new Set(idx); },
  draw(c, W, H, st, C) { const cols = [C.u1, C.u3, C.u4, C.u2], cw = Math.min((W - 40) / 25, (H - 60) / 16); st.pop.forEach((p, i) => { const x = 20 + (i % 25) * cw + cw / 2, y = 20 + Math.floor(i / 25) * cw + cw / 2, inS = st.idx.has(i); CV.circle(c, x, y, cw * 0.36, p.skip ? cols[p.yr] : hexA(cols[p.yr], .25), inS ? C.ink : null, inS ? 2.4 : 0); });
    CV.text(c, 'filled = skips breakfast · ringed = in sample · rows of colour = year groups', 20, H - 18, C.muted, 11); },
  read(st) { const tr = st.pop.filter(p => p.skip).length / 4, s = [...st.idx].map(i => st.pop[i]), est = s.filter(p => p.skip).length / s.length * 100, e = est - tr; return [tr.toFixed(0) + '%', est.toFixed(0) + '% (n = ' + s.length + ')', (e > 0 ? '+' : '') + e.toFixed(0) + ' points', st.p.m === 'opp' ? 'biased — one year group only' : Math.abs(e) < 5 ? 'close to the true value' : 'sampling error — try a larger sample']; }
};
SIMS.questions = sorterSim('Good question or bad question?', 'Decide whether each survey question is well written, or what is wrong with it.', ['Good question', 'Leading', 'Double-barrelled', 'Ambiguous / vague'], [
  ['How many days last week did you eat breakfast before college? (0–7)', 0, 'Specific, clear and measurable.'],
  ['Don’t you agree that fast food is unhealthy?', 1, 'It pushes the respondent towards “yes”.'],
  ['Do you eat fruit and vegetables every day?', 2, 'Two things in one question — fruit and vegetables should be asked separately.'],
  ['Do you eat healthily?', 3, '“Healthily” means different things to different people.'],
  ['How much do you agree: “Price is the most important factor when I buy lunch”? (strongly agree … strongly disagree)', 0, 'A clear Likert item.'],
  ['Most experts say sugar is harmful — how much sugar do you eat?', 1, 'The preamble biases the answer.'],
  ['How often and where do you buy takeaways?', 2, 'Asks about frequency and place at once.'],
  ['Do you often snack?', 3, '“Often” is vague — give frequency options.']
]);

/* ---- 5.6 Reflection writing frame ---- */
SIMS.reflect = DS('Reflection writing frame', 'Choose a model and draft your reflection. Your notes are saved in this browser only. Use specific evidence from your research.', body => {
  const MOD = { rolfe: ['What?', 'So what?', 'Now what?'], gibbs: ['Description', 'Feelings', 'Evaluation', 'Analysis', 'Conclusion', 'Action plan'], kolb: ['Concrete experience', 'Reflective observation', 'Abstract conceptualisation', 'Active experimentation'] };
  const HINT = { 'What?': 'What did I research and how? What happened?', 'So what?': 'What does it mean? Did the results support my hypothesis? What did I learn about my methods?', 'Now what?': 'What would I do differently? Next research questions? Skills to develop?', Description: 'What did you do, when and with whom?', Feelings: 'What were you thinking and feeling during the research?', Evaluation: 'What went well and what did not — methods, tools, organisation?', Analysis: 'Why did things happen as they did? Any bias? Would other analysis change the result?', Conclusion: 'What else could you have done?', 'Action plan': 'Specific actions to improve reliability, validity or scope next time.', 'Concrete experience': 'The research you carried out.', 'Reflective observation': 'Reviewing what happened and the results.', 'Abstract conceptualisation': 'What you learned; links to theory and literature.', 'Active experimentation': 'How you will apply this next time.' };
  let m = 'rolfe'; const key = k => 'proof.reflect.' + k; const get = k => { try { return localStorage.getItem(key(k)) || ''; } catch (e) { return ''; } }, put = (k, v) => { try { localStorage.setItem(key(k), v); } catch (e) { } };
  const draw = () => { body.innerHTML = `<div class="seg" style="max-width:420px;margin-bottom:12px">${Object.keys(MOD).map(k => `<button type="button" class="${k === m ? 'on' : ''}" data-m="${k}">${k[0].toUpperCase() + k.slice(1)}</button>`).join('')}</div>${MOD[m].map(s => `<div class="ctl"><label for="r-${s}">${s}<output class="small">${HINT[s]}</output></label><textarea id="r-${s}" data-k="${m}.${s}" rows="3" class="ds-sel" style="resize:vertical">${esc(get(m + '.' + s))}</textarea></div>`).join('')}
    <p class="small muted">Prompts from the specification — <b>outcomes:</b> hypothesis supported? surprising? new questions? · <b>methods:</b> suitable? tool appropriate? challenges? · <b>analysis:</b> bias? other techniques? · <b>organisation:</b> planning, timescales, delays.</p><button class="btn sm" data-copy>Copy all</button>`;
    $$('[data-m]', body).forEach(b => b.onclick = () => { m = b.dataset.m; draw(); }); $$('textarea', body).forEach(t => t.oninput = () => put(t.dataset.k, t.value));
    $('[data-copy]', body).onclick = () => { const txt = MOD[m].map(s => s + '\n' + get(m + '.' + s)).join('\n\n'); navigator.clipboard?.writeText(txt).then(() => toast('Copied'), () => toast('Copy failed')); }; };
  draw();
});
