/* ==========================================================
   Arcade: fast, replayable games that drill core skills
   ========================================================== */
const BASE_UNITS = [
  ['force (N)', 'kg m s<sup>−2</sup>'], ['energy (J)', 'kg m<sup>2</sup> s<sup>−2</sup>'], ['power (W)', 'kg m<sup>2</sup> s<sup>−3</sup>'], ['pressure (Pa)', 'kg m<sup>−1</sup> s<sup>−2</sup>'],
  ['momentum', 'kg m s<sup>−1</sup>'], ['charge (C)', 'A s'], ['potential difference (V)', 'kg m<sup>2</sup> s<sup>−3</sup> A<sup>−1</sup>'], ['resistance (Ω)', 'kg m<sup>2</sup> s<sup>−3</sup> A<sup>−2</sup>'],
  ['density', 'kg m<sup>−3</sup>'], ['acceleration', 'm s<sup>−2</sup>'], ['frequency (Hz)', 's<sup>−1</sup>'], ['spring constant', 'kg s<sup>−2</sup>'],
  ['Young modulus', 'kg m<sup>−1</sup> s<sup>−2</sup>'], ['work function', 'kg m<sup>2</sup> s<sup>−2</sup>'], ['Planck constant', 'kg m<sup>2</sup> s<sup>−1</sup>'], ['angular velocity', 's<sup>−1</sup>'],
  ['magnetic flux density (T)', 'kg s<sup>−2</sup> A<sup>−1</sup>'], ['magnetic flux (Wb)', 'kg m<sup>2</sup> s<sup>−2</sup> A<sup>−1</sup>'], ['capacitance (F)', 'kg<sup>−1</sup> m<sup>−2</sup> s<sup>4</sup> A<sup>2</sup>'], ['electric field strength', 'kg m s<sup>−3</sup> A<sup>−1</sup>'],
  ['gravitational field strength', 'm s<sup>−2</sup>'], ['specific heat capacity', 'm<sup>2</sup> s<sup>−2</sup> K<sup>−1</sup>'], ['molar gas constant R', 'kg m<sup>2</sup> s<sup>−2</sup> K<sup>−1</sup> mol<sup>−1</sup>'], ['Boltzmann constant k', 'kg m<sup>2</sup> s<sup>−2</sup> K<sup>−1</sup>'],
  ['activity (Bq)', 's<sup>−1</sup>'], ['decay constant', 's<sup>−1</sup>'], ['resistivity', 'kg m<sup>3</sup> s<sup>−3</sup> A<sup>−2</sup>'], ['G (gravitational constant)', 'kg<sup>−1</sup> m<sup>3</sup> s<sup>−2</sup>'],
  ['impulse', 'kg m s<sup>−1</sup>'], ['moment of a force', 'kg m<sup>2</sup> s<sup>−2</sup>'], ['intensity (W m⁻²)', 'kg s<sup>−3</sup>'], ['Stefan constant σ', 'kg s<sup>−3</sup> K<sup>−4</sup>']
];
const EQ_BANK = [
  ['Kinetic energy', 'E_k = @frac{1}{2}mv^2'], ['Gravitational PE change', 'ΔE_p = mgΔh'], ['Power at constant velocity', 'P = Fv'], ['Work done by a force at angle θ', 'W = Fx@,"cos"@,θ'],
  ['Young modulus', 'E = @frac{Fl}{AΔl}'], ['Elastic PE in a spring', 'E = @frac{1}{2}kx^2'], ['Wien’s law', 'λ_{max} = @frac{W}{T}'], ['Stefan–Boltzmann law', 'P = AσT^4'],
  ['Intensity at distance d', 'I = @frac{P}{4πd^2}'], ['Current in a conductor', 'I = nAve'], ['Resistivity', 'R = @frac{ρl}{A}'], ['Terminal pd', 'V = E - Ir'],
  ['Potential divider', 'V_{out} = V_{in}@frac{R_2}{R_1 + R_2}'], ['Wave equation', 'c = fλ'], ['Young’s double slits', 'λ = @frac{ay}{D}'], ['Diffraction grating', 'd@,"sin"@,θ = nλ'],
  ['Snell’s law', 'n_1@,"sin"@,θ_1 = n_2@,"sin"@,θ_2'], ['Critical angle', '"sin"@,θ_c = @frac{n_2}{n_1}'], ['Photoelectric equation', 'E_{k max} = hf - φ'], ['de Broglie wavelength', 'λ = @frac{h}{p}'],
  ['Centripetal force', 'F = @frac{mv^2}{r}'], ['Definition of SHM', 'a = -ω^2x'], ['Period of mass on spring', 'T = 2π@sqrt{@frac{m}{k}}'], ['Period of a pendulum', 'T = 2π@sqrt{@frac{l}{g}}'],
  ['Ideal gas equation', 'pV = nRT'], ['Kinetic theory pressure', 'p = @frac{1}{3}ρ@bar{c^2}'], ['Mean KE of a molecule', '@frac{1}{2}m@bar{c^2} = @frac{3}{2}kT'], ['First law of thermodynamics', 'ΔU = Q - W'],
  ['Internal energy of monatomic gas', 'U = @frac{3}{2}nRT'], ['Specific heat capacity', 'Q = mcΔθ'], ['Activity', 'A = λN'], ['Decay constant and half-life', 'λ = @frac{"ln"@,2}{T_{½}}'],
  ['Parallel-plate capacitance', 'C = @frac{ε_0A}{d}'], ['Energy stored in a capacitor', 'U = @frac{1}{2}CV^2'], ['Capacitor discharge', 'Q = Q_0e^{-t/RC}'], ['Coulomb’s law', 'F = @frac{Q_1Q_2}{4πε_0r^2}'],
  ['Gravitational potential', 'V_g = -@frac{GM}{r}'], ['Kepler’s 3rd law (circular orbit)', 'T^2 = @frac{4π^2}{GM}r^3'], ['Hubble’s law', 'v = H_0D'], ['Critical density', 'ρ_c = @frac{3H_0^2}{8πG}'],
  ['Force on a current', 'F = BIl@,"sin"@,θ'], ['Force on a moving charge', 'F = Bqv@,"sin"@,θ'], ['Hall voltage', 'V_H = @frac{BI}{nqt}'], ['Field of a long wire', 'B = @frac{μ_0I}{2πa}'],
  ['Field in a solenoid', 'B = μ_0nI'], ['Magnetic flux', 'Φ = AB@,"cos"@,θ'], ['emf in a moving rod', 'E = Blv'], ['Doppler shift', '@frac{Δλ}{λ} = @frac{v}{c}']
];
const MAGNITUDES = [
  ['Mass of an adult person', 70, 'kg'], ['Mass of the Earth', 5.97e24, 'kg'], ['Mass of the Sun', 1.99e30, 'kg'], ['Mass of an electron', 9.11e-31, 'kg'], ['Mass of a proton', 1.67e-27, 'kg'],
  ['Diameter of an atom', 1e-10, 'm'], ['Diameter of a nucleus', 1e-14, 'm'], ['Radius of the Earth', 6.37e6, 'm'], ['Earth–Sun distance', 1.5e11, 'm'], ['One light year', 9.46e15, 'm'],
  ['Wavelength of green light', 5.5e-7, 'm'], ['Height of a door', 2, 'm'], ['Speed of light', 3e8, 'm s⁻¹'], ['Speed of sound in air', 340, 'm s⁻¹'], ['Top speed of a sprinter', 12, 'm s⁻¹'],
  ['Drift velocity in a copper wire', 1e-4, 'm s⁻¹'], ['Orbital speed of the Earth', 3e4, 'm s⁻¹'], ['Power of a kettle', 2000, 'W'], ['Power of a large power station', 2e9, 'W'], ['Luminosity of the Sun', 3.85e26, 'W'],
  ['Atmospheric pressure', 1.01e5, 'Pa'], ['Young modulus of steel', 2e11, 'Pa'], ['Atoms in 1 kg of iron', 1.08e25, ''], ['Age of the universe', 4.4e17, 's'], ['Charge on an electron (magnitude)', 1.6e-19, 'C'],
  ['Resistivity of copper', 1.7e-8, 'Ω m'], ['Energy of a visible photon', 4e-19, 'J'], ['Frequency of visible light', 5.5e14, 'Hz'], ['Density of air', 1.2, 'kg m⁻³'], ['Density of water', 1000, 'kg m⁻³'],
  ['Energy released per U-235 fission', 3.2e-11, 'J'], ['Earth’s magnetic flux density', 5e-5, 'T'], ['Flux density in an MRI scanner', 1.5, 'T'], ['A large electrolytic capacitor', 2.2e-3, 'F'], ['Half-life of carbon-14', 1.81e11, 's'],
  ['Number of seconds in a year', 3.16e7, 's'], ['Mass of a car', 1200, 'kg'], ['Wavelength of FM radio', 3, 'm'], ['Current in a phone charger cable', 1, 'A'], ['Critical density of the universe', 9e-27, 'kg m⁻³']
];

const GAMES = {
  sprint: { title: 'Unit Sprint', blurb: 'Match quantities to their SI base units against the clock.', skill: 'Units & homogeneity', col: 'var(--u1)' },
  rush: { title: 'Equation Rush', blurb: 'Pick the right equation before the timer bar empties.', skill: 'Recall of equations', col: 'var(--u2)' },
  magnitude: { title: 'Powers of Ten', blurb: 'Estimate the order of magnitude of real physical quantities.', skill: 'Estimation', col: 'var(--u3)' },
  blitz: { title: 'True or False Blitz', blurb: 'Three lives. Judge statements from across the course.', skill: 'Mixed recall', col: 'var(--u4)' },
  forge: { title: 'Particle Forge', blurb: 'Build hadrons from quarks to hit target charges.', skill: 'Particles (1.7)', col: 'var(--u5)' }
};

function gameBest(id, score) { S.games[id] ??= { best: 0, plays: 0 }; if (score != null) { S.games[id].plays++; if (score > S.games[id].best) { S.games[id].best = score; save(); return true; } save(); } return false; }

function drawGameArt(cv, id) {
  const c = cv.getContext('2d'), dpr = devicePixelRatio || 1, W = cv.clientWidth, H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; c.scale(dpr, dpr);
  c.fillStyle = '#070B10'; c.fillRect(0, 0, W, H);
  const nm = { sprint: 656, rush: 589, magnitude: 546, blitz: 486, forge: 436 }[id];
  if (id === 'magnitude') { for (let i = 0; i < 12; i++) { const x = 14 + i * (W - 28) / 11; c.fillStyle = nmCSS(nm, .25 + .06 * i); c.fillRect(x - 1, H - 20 - i * 5, 3, 10 + i * 5); } CV.mono(c, '10ⁿ', W - 14, 20, '#fff', 14, 'right'); return; }
  if (id === 'forge') { [[W / 2 - 22, H / 2 - 8, 'u', '#E5484D'], [W / 2 + 22, H / 2 - 8, 'u', '#E5484D'], [W / 2, H / 2 + 20, 'd', '#16A3C6']].forEach(([x, y, l, col]) => { c.beginPath(); c.arc(x, y, 16, 0, 7); c.strokeStyle = col; c.lineWidth = 2; c.stroke(); CV.text(c, l, x, y + 1, col, 16, 'center', 600, 'STIX Two Text, serif'); }); c.beginPath(); c.arc(W / 2, H / 2 + 2, 46, 0, 7); c.strokeStyle = 'rgba(255,255,255,.2)'; c.setLineDash([4, 4]); c.stroke(); c.setLineDash([]); return; }
  for (let i = 0; i < 40; i++) { const x = Math.random() * W, y = Math.random() * H, l = 6 + Math.random() * 30; c.strokeStyle = nmCSS(nm, Math.random() * .6 + .1); c.lineWidth = 1.5; c.beginPath(); c.moveTo(x, y); c.lineTo(x + l, y - l * .3); c.stroke(); }
  CV.text(c, GAMES[id].title.toUpperCase(), 14, H - 18, '#fff', 20, 'left', 800, 'Big Shoulders Display, Impact, sans-serif');
}

function mountGame(host, id) {
  let alive = true, timer = null; const stop = () => { alive = false; clearInterval(timer); };
  const hud = (items) => `<div class="game-hud">${items.map(([k, v]) => `<div class="hud"><span>${k}</span><b>${v}</b></div>`).join('')}<span class="spacer"></span><a class="btn sm" href="#/arcade">${ICON.back} Arcade</a></div>`;
  const endScreen = (score, extra = '') => { const nb = gameBest(id, score); if (score > 0) addXP(Math.min(60, Math.round(score / 2)), GAMES[id].title); if (nb && score > 0) { burst(); sfx.win(); }
    host.innerHTML = `<div class="game"><div class="card result"><div class="eyebrow">${GAMES[id].title}</div><div class="big">${score}</div><p class="lede" style="margin:8px auto">${nb ? 'New personal best!' : 'Personal best: ' + S.games[id].best}</p>${extra}<div class="row" style="justify-content:center;margin-top:14px"><button class="btn primary" data-again>Play again</button><a class="btn" href="#/arcade">Back to arcade</a></div></div></div>`;
    $('[data-again]', host).onclick = () => { stop(); cleanup = mountGame(host, id); }; };
  let cleanup = stop;
  if (id === 'forge') { host.innerHTML = `<div class="game" style="max-width:none">${hud([['Game', 'Forge']])}<div id="forge-host"></div></div>`; mountForge($('#forge-host', host)); return stop; }

  if (id === 'sprint' || id === 'rush') {
    const bank = id === 'sprint' ? BASE_UNITS : EQ_BANK, total = id === 'sprint' ? 60 : 75;
    let score = 0, streak = 0, left = total, cur = null, answered = 0, right = 0;
    const next = () => { const item = pick(bank); const others = shuffle(bank.filter(b => b[1] !== item[1])).slice(0, 3); cur = { item, opts: shuffle([item, ...others]) }; render(); };
    const render = () => {
      host.innerHTML = `<div class="game">${hud([['Score', score], ['Streak', streak], ['Time', Math.ceil(left) + 's']])}<div class="timer"><i style="width:${left / total * 100}%"></i></div>
        <div class="eyebrow" style="text-align:center">${id === 'sprint' ? 'SI base units of' : 'Which equation gives'}</div><div class="big-prompt">${cur.item[0]}</div>
        <div class="opts">${cur.opts.map((o, i) => `<button class="opt" data-i="${i}"><span class="k">${i + 1}</span><span>${id === 'sprint' ? o[1] : M(o[1])}</span></button>`).join('')}</div><p class="kbd-hint">Keys 1–4 to answer.</p></div>`;
      $$('.opt', host).forEach(b => b.onclick = () => choose(+b.dataset.i));
    };
    const choose = i => { if (!alive) return; answered++; const ok = cur.opts[i] === cur.item; const btn = $$('.opt', host)[i]; if (ok) { right++; streak++; score += 10 + Math.min(streak, 10) * 2; sfx.good(); btn.classList.add('right'); } else { streak = 0; left = Math.max(0, left - 3); sfx.bad(); btn.classList.add('wrong'); $$('.opt', host)[cur.opts.indexOf(cur.item)].classList.add('right'); } setTimeout(() => alive && left > 0 && next(), ok ? 250 : 900); };
    const key = e => { if (!alive || !document.body.contains(host)) { removeEventListener('keydown', key); return; } const n = +e.key; if (n >= 1 && n <= 4 && !$('.opt.right', host)) choose(n - 1); };
    addEventListener('keydown', key);
    timer = setInterval(() => { left -= 0.1; const bar = $('.timer i', host); if (bar) bar.style.width = (left / total * 100) + '%'; const tb = $$('.hud b', host)[2]; if (tb) tb.textContent = Math.ceil(Math.max(0, left)) + 's'; if (left <= 0) { clearInterval(timer); removeEventListener('keydown', key); endScreen(score, `<p class="muted">${right} of ${answered} correct</p>`); } }, 100);
    next();
    return () => { stop(); removeEventListener('keydown', key); };
  }

  if (id === 'magnitude') {
    const qs = shuffle(MAGNITUDES).slice(0, 10); let i = 0, score = 0;
    const render = () => { const q = qs[i];
      host.innerHTML = `<div class="game">${hud([['Round', (i + 1) + '/10'], ['Score', score]])}<div class="eyebrow" style="text-align:center">Estimate the order of magnitude</div><div class="big-prompt">${q[0]}</div>
        <div class="card" style="text-align:center"><div style="font:800 56px var(--f-display)"><span class="m">10<sup id="mg-out">0</sup></span> <span class="muted" style="font-size:22px">${q[2]}</span></div>
        <input id="mg-in" type="range" min="-32" max="32" step="1" value="0" style="margin:14px 0" aria-label="Power of ten"><div class="row" style="justify-content:center"><button class="btn primary" id="mg-go">Lock in</button></div><div id="mg-fb"></div></div></div>`;
      const inp = $('#mg-in', host); const upd = () => { $('#mg-out', host).textContent = (+inp.value).toString().replace('-', '−'); inp.style.setProperty('--p', ((+inp.value + 32) / 64 * 100) + '%'); }; inp.oninput = upd; upd();
      $('#mg-go', host).onclick = () => { const L = Math.log10(q[1]), g0 = +inp.value, d = Math.min(Math.abs(g0 - Math.floor(L)), Math.abs(g0 - Math.round(L))), pts = d === 0 ? 10 : d === 1 ? 6 : d === 2 ? 2 : 0; score += pts; (pts >= 6 ? sfx.good : sfx.bad)();
        $('#mg-fb', host).innerHTML = `<div class="explain" style="margin-top:14px"><b class="v ${pts >= 6 ? 'good' : 'bad'}">${pts ? '+' + pts : 'Off by ' + d}</b> Actual value: <span class="m">${sf(q[1], 3)}</span> ${q[2]} — order of magnitude <span class="m">10<sup>${String(Math.round(L)).replace('-', '−')}</sup></span></div><div class="row" style="justify-content:center;margin-top:10px"><button class="btn" id="mg-next">${i < 9 ? 'Next' : 'Finish'}</button></div>`;
        $('#mg-go', host).disabled = true; $('#mg-next', host).onclick = () => { i++; i < 10 ? render() : endScreen(score, '<p class="muted">10 points for an exact power of ten, 6 for one out, 2 for two out.</p>'); }; };
    };
    render(); return stop;
  }

  if (id === 'blitz') {
    const pool = TOPICS.flatMap(t => t.quiz.map(q => ({ q, t }))); let score = 0, lives = 3, cur;
    const next = () => { const { q, t } = pick(pool); const truth = Math.random() < 0.5; const opt = truth ? q.o[0] : pick(q.o.slice(1)); cur = { q, t, truth, opt }; render(); };
    const render = () => { host.innerHTML = `<div class="game">${hud([['Score', score], ['Lives', '♥'.repeat(lives) || '0']])}<div class="card"><div class="eyebrow">${cur.t.id} · ${esc(cur.t.title)}</div><p class="q-text">${rich(cur.q.q)}</p><div class="box def" style="font-size:17px"><b class="lbl">Proposed answer</b><p>${rich(cur.opt)}</p></div>
      <div class="row" style="justify-content:center;gap:14px;margin-top:10px"><button class="btn primary" data-a="1" style="min-width:130px">True <kbd>T</kbd></button><button class="btn" data-a="0" style="min-width:130px">False <kbd>F</kbd></button></div><div id="bz-fb"></div></div></div>`;
      $$('[data-a]', host).forEach(b => b.onclick = () => answer(b.dataset.a === '1')); };
    const answer = a => { if ($('#bz-fb', host).innerHTML) return; const ok = a === cur.truth; ok ? (score += 10, sfx.good()) : (lives--, sfx.bad());
      $('#bz-fb', host).innerHTML = `<div class="explain"><b class="v ${ok ? 'good' : 'bad'}">${ok ? 'Correct' : 'Wrong'}</b> ${cur.truth ? 'That answer is right.' : 'The correct answer is: ' + rich(cur.q.o[0])} ${cur.q.x ? '<br><span class="muted">' + rich(cur.q.x) + '</span>' : ''}</div>`;
      setTimeout(() => { if (!alive) return; lives > 0 ? next() : endScreen(score); }, ok ? 900 : 2600); };
    const key = e => { if (!alive || !document.body.contains(host)) { removeEventListener('keydown', key); return; } if (e.key === 't' || e.key === 'T') answer(true); if (e.key === 'f' || e.key === 'F') answer(false); };
    addEventListener('keydown', key); next(); return () => { stop(); removeEventListener('keydown', key); };
  }
  return stop;
}
