/* ==========================================================
   Extra diagrams for Edexcel International GCSE Physics
   ========================================================== */
Object.assign(DIAG, {
  doppler: () => { let s = ''; const cx = 250, cy = 110;
    for (let k = 0; k < 6; k++) { const x = cx - 14 * (5 - k), r = 18 + k * 17; s += circ(x, cy, r, 'none', C3, 1.6); }
    s += circ(cx, cy, 7, INK, INK) + arrow(cx + 10, cy, cx + 44, cy, BAD, 2.2) + tx(cx + 26, cy - 10, 'v', { fs: 13, c: BAD, it: true, a: 'middle' });
    s += tx(420, cy - 36, 'observer ahead:', { fs: 12, c: INK, w: 700 }) + tx(420, cy - 20, 'waves bunched →', { fs: 12 }) + tx(420, cy - 4, 'shorter λ, higher f', { fs: 12, c: C3 });
    s += tx(20, cy - 36, 'observer behind:', { fs: 12, c: INK, w: 700 }) + tx(20, cy - 20, '← waves spread out', { fs: 12 }) + tx(20, cy - 4, 'longer λ, lower f', { fs: 12, c: C2 });
    s += tx(cx, 215, 'wavefronts from a source moving to the right', { a: 'middle', fs: 11.5 });
    return svg(540, 225, s, 'Doppler effect') + cap('Each wavefront is emitted from a new position of the moving source, so waves ahead are compressed and waves behind are stretched.'); },
  tir: () => { let s = ''; const panel = (x0, i, lab, mode) => { const bx = x0, by = 30, w = 160, h = 130, px = bx + w / 2, py = by + 60;
      s += `<rect x="${bx}" y="${by + 60}" width="${w}" height="${h - 60}" fill="var(--u3)" fill-opacity=".15" stroke="var(--u3)"/>` + tx(bx + 6, by + h - 6, 'glass', { fs: 10.5 }) + tx(bx + 6, by + 12, 'air', { fs: 10.5 });
      s += ln(px, by + 5, px, by + h, MUT, 1, '4 3');
      const a = i * Math.PI / 180, L = 70; s += arrow(px - L * Math.sin(a), py + L * Math.cos(a), px, py, BAD, 2);
      if (mode === 'refr') { const r = Math.asin(Math.min(1, 1.5 * Math.sin(a))); s += arrow(px, py, px + 60 * Math.sin(r), py - 60 * Math.cos(r), BAD, 2) + ln(px, py, px + 40 * Math.sin(a), py + 40 * Math.cos(a), BAD, 0.8, '3 3'); }
      if (mode === 'crit') s += arrow(px, py, px + 75, py - 1, BAD, 2) + tx(px + 30, py - 8, '90°', { fs: 11, c: BAD });
      if (mode === 'tir') s += arrow(px, py, px + L * Math.sin(a), py + L * Math.cos(a), BAD, 2);
      s += tx(bx + w / 2, by + h + 18, lab, { a: 'middle', fs: 12, c: INK, w: 700 }); };
    panel(10, 30, 'i < c: refracts out', 'refr'); panel(190, 42, 'i = c: along surface', 'crit'); panel(370, 60, 'i > c: total internal reflection', 'tir');
    return svg(540, 190, s, 'Critical angle and total internal reflection') + cap('Light inside glass meeting the glass–air boundary. For glass, c ≈ 42°: sin c = 1/n.'); },
  fibre: () => { let s = pth('M20,70 C180,70 260,40 520,60', C3, 18, 'none').replace(/stroke-width="18"/, 'stroke-width="44" stroke-opacity=".15"') + pth('M20,48 C180,48 260,18 520,38', C3, 1.6) + pth('M20,92 C180,92 260,62 520,82', C3, 1.6);
    const pts = [[20, 60], [90, 50], [165, 88], [240, 44], [320, 74], [400, 30], [470, 70], [520, 54]]; s += pth('M' + pts.map(p => p.join(',')).join(' L'), BAD, 2); s += arrowHead(520, 54, -0.3, BAD);
    s += tx(20, 125, 'Light hits the core–cladding boundary at more than the critical angle each time, so it is totally internally reflected along the fibre.', { fs: 11.5 });
    return svg(540, 140, s, 'Optical fibre') + cap('Optical fibres carry light (and data) round bends by repeated total internal reflection.'); },
  scope: () => { let s = ''; const g = (x0, amp, per, lab) => { s += box(x0, 20, 240, 150, 'var(--surface-2)', INK, 6, 1.4); for (let i = 1; i < 8; i++) s += ln(x0 + i * 30, 20, x0 + i * 30, 170, 'var(--line)', 1); for (let j = 1; j < 5; j++) s += ln(x0, 20 + j * 30, x0 + 240, 20 + j * 30, 'var(--line)', 1);
      let d = ''; for (let k = 0; k <= 240; k++) d += (k ? ' L' : 'M') + (x0 + k) + ',' + (95 - amp * Math.sin(k / per * 2 * Math.PI)).toFixed(1); s += pth(d, GOOD, 2.2) + tx(x0 + 120, 190, lab, { a: 'middle', fs: 12, c: INK }); };
    g(20, 40, 60, 'louder: larger amplitude'); g(290, 20, 30, 'higher pitch: more waves (higher f)');
    return svg(560, 200, s, 'Oscilloscope traces') + cap('Period T = divisions per wave × timebase (e.g. ms/div); f = 1/T. Amplitude relates to loudness, frequency to pitch.'); },
  uniform: () => { let s = box(30, 30, 90, 140, 'var(--bad)', BAD, 4, 1.6).replace('fill="var(--bad)"', 'fill="var(--bad)" fill-opacity=".25"') + tx(75, 105, 'N', { a: 'middle', fs: 22, c: INK, w: 700 }) + box(420, 30, 90, 140, 'var(--info)', INFO, 4, 1.6).replace('fill="var(--info)"', 'fill="var(--info)" fill-opacity=".25"') + tx(465, 105, 'S', { a: 'middle', fs: 22, c: INK, w: 700 });
    for (let k = 0; k < 6; k++) { const y = 42 + k * 23; s += arrow(122, y, 418, y, INK, 1.4); }
    s += pth('M120,32 C200,10 340,10 420,32', MUT, 1.2, 'none', '4 3') + pth('M120,168 C200,190 340,190 420,168', MUT, 1.2, 'none', '4 3');
    s += tx(270, 200, 'uniform field: parallel, equally spaced lines (weaker, curved at the edges)', { a: 'middle', fs: 11.5 });
    return svg(540, 210, s, 'Uniform magnetic field') + cap('Two flat magnets with opposite poles facing produce a uniform field in the gap between them.'); },
  chain: () => { let s = ''; const U = (x, y) => circ(x, y, 13, 'var(--u5)', C5, 1.4) + tx(x, y + 4, 'U', { a: 'middle', fs: 11, c: INK, w: 700 }); const n = (x, y) => circ(x, y, 4.5, INK, INK);
    s += n(30, 110) + arrow(36, 110, 70, 110, INK, 1.4) + U(85, 110);
    const lv = [[85, 110, [[170, 50], [170, 110], [170, 170]]]];
    [[170, 50], [170, 110], [170, 170]].forEach(([x, y]) => { s += arrow(98, 110, x - 16, y, MUT, 1.2) + U(x, y); [[-40], [0], [40]].forEach(([dy], j) => { const x2 = x + 90, y2 = y + dy * 0.55; if (x2 < 520) s += arrow(x + 13, y, x2 - 16, y2, MUT, 1) + U(x2, y2); }); });
    s += tx(30, 210, 'Each fission releases 2–3 neutrons, which can cause further fissions: a chain reaction.', { fs: 11.5 });
    return svg(540, 220, s, 'Chain reaction') + cap('Uncontrolled, the number of fissions grows rapidly. In a reactor, control rods absorb neutrons so that on average one neutron from each fission causes another.'); },
  reactor: () => { let s = box(40, 30, 260, 170, 'var(--surface-2)', INK, 10, 2.4) + tx(170, 22, 'concrete + steel shielding', { a: 'middle', fs: 11, c: MUT });
    s += box(60, 50, 220, 130, 'var(--u3)', C3, 6, 1.4).replace('fill="var(--u3)"', 'fill="var(--u3)" fill-opacity=".12"') + tx(170, 196, 'moderator (graphite / water) slows neutrons', { a: 'middle', fs: 10.5, c: C3 });
    [90, 150, 210].forEach(x => s += box(x, 70, 14, 100, 'var(--u5)', C5, 3, 1.2).replace('fill="var(--u5)"', 'fill="var(--u5)" fill-opacity=".8"'));
    [120, 180, 240].forEach(x => s += box(x, 30, 10, 100, INK, INK, 2, 1).replace(`fill="${INK}"`, 'fill="var(--muted)"'));
    s += tx(320, 70, 'fuel rods (U-235)', { fs: 12, c: C5, w: 700 }) + tx(320, 95, 'control rods (boron) absorb', { fs: 12, c: INK, w: 700 }) + tx(320, 111, 'neutrons — lower to slow the reaction', { fs: 11.5 }) + tx(320, 140, 'coolant carries energy to a heat', { fs: 11.5 }) + tx(320, 156, 'exchanger → steam → turbine', { fs: 11.5 });
    s += arrow(300, 170, 350, 190, BAD, 2) + tx(355, 196, 'hot coolant out', { fs: 11, c: BAD });
    return svg(560, 215, s, 'Nuclear reactor') + cap('The main parts of a fission reactor.'); },
  fusion: () => { let s = ''; const nuc2 = (x, y, p, n, lab) => { for (let k = 0; k < p + n; k++) { const a = k * 2.4, r = (p + n) > 1 ? 9 : 0; s += circ(x + r * Math.cos(a), y + r * Math.sin(a), 8, k < p ? 'var(--bad)' : 'var(--muted)', INK, 1); } s += tx(x, y + 34, lab, { a: 'middle', fs: 11.5, c: INK }); };
    nuc2(50, 80, 1, 1, 'deuterium ²₁H') + ''; s += tx(95, 86, '+', { fs: 22, c: INK, a: 'middle' }); nuc2(140, 80, 1, 2, 'tritium ³₁H');
    s += arrow(185, 80, 250, 80, INK, 2) + tx(217, 70, 'fusion', { a: 'middle', fs: 11 });
    nuc2(300, 80, 2, 2, 'helium ⁴₂He'); s += tx(345, 86, '+', { fs: 22, c: INK, a: 'middle' }); nuc2(385, 80, 0, 1, 'neutron'); s += tx(430, 86, '+ energy', { fs: 14, c: BAD, w: 700 });
    s += tx(30, 150, 'Mass of products is slightly less than mass of reactants: the lost mass is released as energy.', { fs: 11.5 });
    return svg(540, 165, s, 'Nuclear fusion') + cap('Fusion of hydrogen isotopes. Protons (red) repel, so very high temperature and pressure are needed.'); },
  hr: () => { const W = 540, H = 320, L = 60, R = 20, Tp = 20, B = 50; const X = t => L + (Math.log10(40000) - Math.log10(t)) / (Math.log10(40000) - Math.log10(2500)) * (W - L - R), Y = m => Tp + (m + 10) / 26 * (H - Tp - B);
    let s = arrow(L, H - B, W - R + 6, H - B, INK, 1.4) + arrow(L, H - B, L, Tp - 6, INK, 1.4) + tx(W - R, H - B + 32, 'surface temperature / K →  (hot on the left)', { a: 'end', fs: 11.5, c: INK }) + tx(L + 6, Tp + 4, 'absolute magnitude (bright at top)', { fs: 11.5, c: INK });
    [30000, 10000, 6000, 3000].forEach(t => s += tx(X(t), H - B + 16, t, { a: 'middle', fs: 10.5, f: 'var(--f-mono)' })); [-10, -5, 0, 5, 10, 15].forEach(m => s += tx(L - 6, Y(m) + 4, m, { a: 'end', fs: 10.5, f: 'var(--f-mono)' }));
    let d = ''; for (let k = 0; k <= 40; k++) { const t = 35000 * Math.pow(3000 / 35000, k / 40), m = -6 + k / 40 * 20; d += (k ? ' L' : 'M') + X(t).toFixed(1) + ',' + Y(m).toFixed(1); } s += pth(d, C3, 18).replace('stroke-width="18"', 'stroke-width="18" stroke-opacity=".25"') + tx(X(9000), Y(5) - 16, 'main sequence', { fs: 12, c: C3, w: 700, a: 'middle' });
    s += `<ellipse cx="${X(4200)}" cy="${Y(-1)}" rx="46" ry="24" fill="var(--u2)" fill-opacity=".3" stroke="var(--u2)"/>` + tx(X(4200), Y(-1) + 4, 'red giants', { a: 'middle', fs: 11.5, c: INK, w: 700 });
    s += `<ellipse cx="${X(3800)}" cy="${Y(-7.5)}" rx="60" ry="14" fill="var(--bad)" fill-opacity=".2" stroke="var(--bad)"/>` + tx(X(3800), Y(-7.5) + 4, 'supergiants', { a: 'middle', fs: 11.5, c: INK, w: 700 });
    s += `<ellipse cx="${X(15000)}" cy="${Y(12)}" rx="44" ry="16" fill="var(--u4)" fill-opacity=".25" stroke="var(--u4)"/>` + tx(X(15000), Y(12) + 4, 'white dwarfs', { a: 'middle', fs: 11.5, c: INK, w: 700 });
    s += circ(X(5800), Y(4.8), 6, 'var(--u5)', INK, 1.2) + tx(X(5800) + 10, Y(4.8) + 4, 'Sun', { fs: 12, c: INK, w: 700 });
    return svg(W, H, s, 'Hertzsprung–Russell diagram') + cap('The main components of the HR diagram. Note both axes run “backwards”: temperature decreases to the right and brighter (more negative) magnitudes are higher.'); }
});
