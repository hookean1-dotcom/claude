/* ==========================================================
   Extra generators for Edexcel International GCSE topics (refraction, critical angle,
   gas laws in kelvin, orbital speed, red-shift, oscilloscope traces, transformers).
   ========================================================== */
const DEG = Math.PI / 180, sind = x => Math.sin(x * DEG), asind = x => Math.asin(x) / DEG;
const MATS_N = [['glass', 1.5], ['water', 1.33], ['Perspex', 1.49], ['diamond', 2.42], ['crown glass', 1.52], ['ice', 1.31]];

GEN.refr1 = () => { const i = rnd(20, 75, 1), [nm, n0] = pk(MATS_N), r = Math.round(asind(sind(i) / n0)), n = sind(i) / sind(r);
  return { q: `A ray of light enters a block of ${nm} from air at an angle of incidence of ${i}°. The angle of refraction is ${r}°. Calculate the refractive index.`, ans: n, unit: '', steps: ['$n = @frac{sin i}{sin r}$', `$n = @frac{sin ${i}°}{sin ${r}°} = @frac{${sind(i).toFixed(3)}}{${sind(r).toFixed(3)}}$`, `$n = ${s3(n)}$`] }; };
GEN.refr2 = () => { const i = rnd(15, 80, 1), [nm, n] = pk(MATS_N), sr = sind(i) / n, r = asind(sr);
  return { q: `Light travels from air into ${nm} (refractive index ${n}). The angle of incidence is ${i}°. Calculate the angle of refraction.`, ans: r, unit: '°', steps: ['$sin r = @frac{sin i}{n}$', `$sin r = @frac{sin ${i}°}{${n}} = ${sr.toFixed(3)}$`, `$r = sin^{-1}(${sr.toFixed(3)}) = ${s3(r)}°$`] }; };
GEN.crit1 = () => { const [nm, n] = pk(MATS_N), c = asind(1 / n);
  return { q: `The refractive index of ${nm} is ${n}. Calculate its critical angle.`, ans: c, unit: '°', steps: ['$sin c = @frac{1}{n}$', `$sin c = @frac{1}{${n}} = ${(1 / n).toFixed(3)}$`, `$c = sin^{-1}(${(1 / n).toFixed(3)}) = ${s3(c)}°$`] }; };
GEN.crit2 = () => { const c = rnd(24, 50, 1), n = 1 / sind(c);
  return { q: `A transparent plastic has a critical angle of ${c}°. Calculate its refractive index.`, ans: n, unit: '', steps: ['$n = @frac{1}{sin c}$', `$n = @frac{1}{sin ${c}°} = @frac{1}{${sind(c).toFixed(3)}}$`, `$n = ${s3(n)}$`] }; };

GEN.scope1 = () => { const tb = pk([0.1, 0.2, 0.5, 1, 2, 5]), div = pk([2, 2.5, 4, 5, 8]), waves = pk([1, 2, 3]), T = div * tb / 1000, f = 1 / T;
  return { q: `An oscilloscope timebase is set to ${tb} ms/div. ${waves === 1 ? 'One complete wave occupies' : `${waves} complete waves occupy`} ${div * waves} divisions. Calculate the frequency of the sound.`, ans: f, unit: 'Hz', steps: [`one wave = ${div} div → $T = ${div} × ${tb} "ms" = ${s3(div * tb)} "ms" = ${s3(T)} "s"$`, '$f = @frac{1}{T}$', `$f = ${s3(f)} "Hz"$`] }; };

GEN.kelvin1 = () => { if (Math.random() < .5) { const c = rnd(-200, 500, 1); return { q: `Convert ${c} °C to kelvin.`, ans: c + 273, unit: 'K', steps: ['$T(K) = θ(°C) + 273$', `$T = ${c} + 273 = ${c + 273} "K"$`] }; }
  const k = rnd(20, 900, 1); return { q: `Convert ${k} K to degrees Celsius.`, ans: k - 273, unit: '°C', steps: ['$θ(°C) = T(K) - 273$', `$θ = ${k} - 273 = ${k - 273} "°C"$`] }; };
GEN.press1 = () => { const c1 = rnd(0, 40, 1), c2 = c1 + rnd(20, 160, 5), p1 = rnd(100, 300, 10), T1 = c1 + 273, T2 = c2 + 273, p2 = p1 * T2 / T1;
  return { q: `A sealed can of gas at ${c1} °C has a pressure of ${p1} kPa. It is heated to ${c2} °C at constant volume. Calculate the new pressure.`, ans: p2, unit: 'kPa', steps: [`T₁ = ${T1} K, T₂ = ${T2} K`, '$p_2 = p_1 × @frac{T_2}{T_1}$', `$p_2 = ${p1} × @frac{${T2}}{${T1}} = ${s3(p2)} "kPa"$`] }; };
GEN.press2 = () => { const T1 = rnd(250, 350, 5), p1 = rnd(80, 200, 10), p2 = p1 * rnd(1.2, 2.5, 0.1), T2 = T1 * p2 / p1;
  return { q: `A fixed mass of gas at constant volume has a pressure of ${p1} kPa at ${T1} K. At what temperature (in K) will its pressure be ${s3(p2)} kPa?`, ans: T2, unit: 'K', steps: ['$T_2 = T_1 × @frac{p_2}{p_1}$', `$T_2 = ${T1} × @frac{${s3(p2)}}{${p1}} = ${s3(T2)} "K"$`] }; };

GEN.orbit1 = () => { const [obj, r, T, tu, ts] = pk([['A satellite', 7.0e6, 97, 'minutes', 60], ['The Moon', 3.84e8, 27.3, 'days', 86400], ['The Earth (around the Sun)', 1.5e11, 365, 'days', 86400], ['A geostationary satellite', 4.2e7, 24, 'hours', 3600], ['Mars (around the Sun)', 2.28e11, 687, 'days', 86400]]), Ts = T * ts, v = 2 * Math.PI * r / Ts;
  return { q: `${obj} has an orbital radius of ${r.toExponential(2).replace('e+', ' × 10^')} m and a period of ${T} ${tu}. Calculate its orbital speed.`.replace(/10\^(\d+)/, '10<sup>$1</sup>'), ans: v, unit: 'm/s', steps: [`T = ${T} × ${ts} = ${s3(Ts)} s`, '$v = @frac{2πr}{T}$', `$v = @frac{2π × ${s3(r)}}{${s3(Ts)}} = ${s3(v)} "m/s"$`] }; };
GEN.orbit2 = () => { const v = rnd(3000, 7800, 100), r = rnd(6.6, 9.0, 0.1) * 1e6, T = 2 * Math.PI * r / v;
  return { q: `A satellite orbits at ${v} m/s with an orbital radius of ${(r / 1e6).toFixed(1)} × 10<sup>6</sup> m. Calculate its orbital period in minutes.`, ans: T / 60, unit: 'min', steps: ['$T = @frac{2πr}{v}$', `$T = @frac{2π × ${s3(r)}}{${v}} = ${s3(T)} "s"$`, `$= ${s3(T / 60)} "minutes"$`] }; };

const SPEC_LINES = [['hydrogen-alpha', 656.3], ['hydrogen-beta', 486.1], ['calcium K', 393.4], ['sodium D', 589.0]];
GEN.redshift1 = () => { const [ln_, l0] = pk(SPEC_LINES), v = rnd(0.5, 6, 0.1) * 1e7, dl = l0 * v / 3e8, l = +(l0 + dl).toFixed(1), vv = (l - l0) / l0 * 3e8;
  return { q: `The ${ln_} line has a laboratory wavelength of ${l0} nm. In the spectrum of a galaxy it is observed at ${l} nm. Calculate the velocity of the galaxy (c = 3.0 × 10<sup>8</sup> m/s).`, ans: vv, unit: 'm/s', steps: [`Δλ = ${l} − ${l0} = ${(l - l0).toFixed(1)} nm`, '$v = c × @frac{Δλ}{λ_0}$', `$v = 3.0 × 10^8 × @frac{${(l - l0).toFixed(1)}}{${l0}} = ${s3(vv)} "m/s"$`] }; };
GEN.redshift2 = () => { const [ln_, l0] = pk(SPEC_LINES), v = rnd(1, 9, 0.5) * 1e6, dl = l0 * v / 3e8;
  return { q: `A galaxy is moving away from Earth at ${(v / 1e6)} × 10<sup>6</sup> m/s. Calculate the observed wavelength of the ${ln_} line (laboratory wavelength ${l0} nm; c = 3.0 × 10<sup>8</sup> m/s).`, ans: l0 + dl, unit: 'nm', steps: ['$Δλ = λ_0 × @frac{v}{c}$', `$Δλ = ${l0} × @frac{${s3(v)}}{3.0 × 10^8} = ${s3(dl)} "nm"$`, `λ = ${l0} + ${s3(dl)} = ${s3(l0 + dl)} nm`] }; };

GEN.trans4 = () => { const Vp = pk([11000, 25000, 230, 400000]), Vs = Vp === 230 ? pk([12, 6, 24]) : Vp === 25000 ? 400000 : Vp === 11000 ? 230 : 33000, Ip = rnd(0.5, 40, 0.5), Is = Vp * Ip / Vs;
  return { q: `An ideal (100% efficient) transformer changes ${Vp} V to ${Vs} V. The primary current is ${Ip} A. Calculate the secondary current.`, ans: Is, unit: 'A', steps: ['$V_pI_p = V_sI_s$', `$I_s = @frac{${Vp} × ${Ip}}{${Vs}}$`, `$I_s = ${s3(Is)} "A"$`] }; };
