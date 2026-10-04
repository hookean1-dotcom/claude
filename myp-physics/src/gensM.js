/* ==========================================================
   MYP generators: measurement and uncertainty, suvat, slopes and friction, momentum,
   thermal mixing, waves and optics, circuits, radioactivity. Same contract as gens.js:
   GEN.x = () => ({ q, ans, unit, steps }).
   ========================================================== */
const r2 = x => +x.toFixed(2), r3 = x => +x.toPrecision(3);
const DEG = Math.PI / 180;

/* ---------- Unit 1 · units, standard form, uncertainty ---------- */
GEN.unitconv = () => { const c = pk([['km/h', 'm/s', v => v / 3.6, [36, 54, 72, 90, 108, 126], 'divide by 3.6'], ['cm³', 'm³', v => v * 1e-6, [250, 500, 750, 1200, 40], '1 cm³ = 10⁻⁶ m³'], ['mm²', 'm²', v => v * 1e-6, [0.5, 1.0, 1.5, 2.5, 4.0], '1 mm² = 10⁻⁶ m²'], ['minutes', 's', v => v * 60, [2.5, 4, 12, 45], '× 60'], ['kWh', 'J', v => v * 3.6e6, [0.5, 2, 5, 12], '1 kWh = 3.6 × 10⁶ J'], ['g', 'kg', v => v / 1000, [45, 250, 680, 1200], '÷ 1000']]);
  const v = pk(c[3]), a = c[2](v); return { q: `Convert ${v} ${c[0]} into ${c[1]}.`, ans: a, unit: c[1], steps: [c[4], `${v} ${c[0]} = ${sf(a, 3)} ${c[1]}`] }; };
GEN.stdform = () => { const m = rnd(1.1, 9.9, 0.1), e = pk([-9, -7, -5, -4, -3, 4, 5, 6, 8]), v = m * 10 ** e, s = e < 0 ? '0.' + '0'.repeat(-e - 1) + String(m).replace('.', '') : String(Math.round(v));
  return { q: `Write ${s} in standard form. (Enter it as a number, e.g. 3.4e-5.)`, ans: v, unit: '', steps: [`Move the decimal point until the number is between 1 and 10: ${m}`, `Count the places moved: ${Math.abs(e)} to the ${e < 0 ? 'right → negative power' : 'left → positive power'}`, `${m} × 10${e < 0 ? '⁻' : ''}${String(Math.abs(e)).split('').map(d => '⁰¹²³⁴⁵⁶⁷⁸⁹'[d]).join('')}`] }; };
GEN.sfround = () => { const x = +(rnd(1, 9, 0.0001) * 10 ** pk([-2, -1, 0, 1, 2, 3])).toPrecision(6), n = pk([2, 3]), a = +x.toPrecision(n);
  return { q: `Round ${x} to ${n} significant figures.`, ans: a, unit: '', steps: [`The first ${n} significant digits, then look at the next digit to round`, `${x} → ${a}`] }; };
GEN.pctunc = () => { const [n, unit, dx] = pk([['length', 'cm', 0.1], ['time', 's', 0.2], ['mass', 'g', 0.5], ['temperature rise', '°C', 0.5], ['current', 'A', 0.01]]), x = r2(rnd(2, 80, 0.1) * (unit === 'A' ? 0.05 : 1)), p = dx / x * 100;
  return { q: `A ${n} is measured as ${x} ± ${dx} ${unit}. Calculate the percentage uncertainty.`, ans: p, unit: '%', steps: ['$"% uncertainty" = @frac{Δx}{x} × 100$', `$= @frac{${dx}}{${x}} × 100$`, `$= ${sf(p, 2)} "%"$`] }; };
GEN.combunc = () => { const s = rnd(1.20, 2.00, 0.01), ds = 0.01, t = rnd(0.80, 2.50, 0.01), dt = pk([0.02, 0.05, 0.1]), p = ds / s * 100 + dt / t * 100;
  return { q: `A trolley travels ${s.toFixed(2)} ± ${ds} m in ${t.toFixed(2)} ± ${dt} s. Calculate the percentage uncertainty in its average speed.`, ans: p, unit: '%', steps: ['For a quotient, add the percentage uncertainties', `% in s = ${ds}/${s.toFixed(2)} × 100 = ${sf(ds / s * 100, 2)}%`, `% in t = ${dt}/${t.toFixed(2)} × 100 = ${sf(dt / t * 100, 2)}%`, `Total = ${sf(p, 2)}%`] }; };
GEN.gradunc = () => { const m = rnd(10, 90, 0.5), d = rnd(1, 6, 0.5), hi = r2(m + d * (0.8 + Math.random() * 0.4)), lo = r2(m - d * (0.8 + Math.random() * 0.4)), u = (hi - lo) / 2;
  return { q: `The steepest line through the error bars has gradient ${hi} N/m and the shallowest ${lo} N/m. Calculate the uncertainty in the spring constant.`, ans: u, unit: 'N/m', steps: ['$Δm = @frac{m_{max} - m_{min}}{2}$', `$= @frac{${hi} - ${lo}}{2}$`, `$= ${sf(u, 2)} "N/m"$`] }; };
GEN.gradcalc = () => { const x1 = rnd(0, 2, 0.5), x2 = x1 + rnd(4, 8, 0.5), m = rnd(1.5, 12, 0.5), c = rnd(0, 6, 0.5), y1 = r2(m * x1 + c), y2 = r2(m * x2 + c);
  return { q: `A best-fit line passes through (${x1} s, ${y1} m) and (${x2} s, ${y2} m). Calculate its gradient.`, ans: m, unit: 'm/s', steps: ['$m = @frac{Δy}{Δx}$', `$= @frac{${y2} - ${y1}}{${x2} - ${x1}}$`, `$= ${sf(m, 3)} "m/s"$`] }; };

/* ---------- Unit 2 · vectors, suvat, slopes, friction ---------- */
GEN.vecadd = () => { const a = rnd(2, 12, 0.5), b = rnd(2, 12, 0.5), R = Math.hypot(a, b);
  return { q: `A boat heads north at ${a} m/s across a river flowing east at ${b} m/s. Calculate the magnitude of its resultant velocity.`, ans: R, unit: 'm/s', steps: ['Perpendicular vectors: $R = @sqrt{a^2 + b^2}$', `$R = @sqrt{${a}^2 + ${b}^2}$`, `$R = ${s3(R)} "m/s"$ at ${s3(Math.atan(b / a) / DEG)}° east of north`] }; };
GEN.suvatv = () => { const u = rnd(0, 15, 1), a = rnd(0.5, 4, 0.5), t = rnd(2, 12, 1), v = u + a * t;
  return { q: `A cyclist moving at ${u} m/s accelerates uniformly at ${a} m/s² for ${t} s. Calculate her final velocity.`, ans: v, unit: 'm/s', steps: ['$v = u + at$', `$v = ${u} + ${a} × ${t}$`, `$v = ${s3(v)} "m/s"$`] }; };
GEN.suvats = () => { const u = rnd(0, 12, 1), a = rnd(0.5, 3, 0.5), t = rnd(2, 10, 1), s = u * t + 0.5 * a * t * t;
  return { q: `A car moving at ${u} m/s accelerates at ${a} m/s² for ${t} s. Calculate the distance travelled in this time.`, ans: s, unit: 'm', steps: ['$s = ut + @frac{1}{2}at^2$', `$s = ${u} × ${t} + 0.5 × ${a} × ${t}^2$`, `$s = ${s3(s)} "m"$`] }; };
GEN.suvatup = () => { const u = rnd(5, 25, 1), h = u * u / (2 * G9);
  return { q: `A ball is thrown vertically upwards at ${u} m/s. Ignoring air resistance, calculate its maximum height. g = 9.8 m/s².`, ans: h, unit: 'm', steps: ['At the top v = 0; up positive so a = −9.8 m/s²', '$v^2 = u^2 + 2as$ → $0 = ' + u + '^2 - 2 × 9.8 × s$', `$s = @frac{${u}^2}{19.6} = ${s3(h)} "m"$`] }; };
GEN.resolve = () => { const F = rnd(10, 200, 5), th = pk([15, 20, 25, 30, 35, 40, 50, 60]), fx = F * Math.cos(th * DEG), want = pk(['horizontal', 'vertical']), a = want === 'horizontal' ? fx : F * Math.sin(th * DEG);
  return { q: `A rope pulls a sledge with a force of ${F} N at ${th}° above the horizontal. Calculate the ${want} component of the force.`, ans: a, unit: 'N', steps: [want === 'horizontal' ? '$F_x = F cos θ$' : '$F_y = F sin θ$', `$= ${F} × ${want === 'horizontal' ? 'cos' : 'sin'} ${th}°$`, `$= ${s3(a)} "N"$`] }; };
GEN.slopeacc = () => { const th = pk([10, 15, 20, 25, 30, 35]), m = rnd(2, 80, 1), Ff = r2(m * G9 * Math.sin(th * DEG) * rnd(0, 0.5, 0.1)), a = (m * G9 * Math.sin(th * DEG) - Ff) / m;
  return { q: `A ${m} kg block slides down a ${th}° slope. The friction force on it is ${Ff} N. Calculate its acceleration. g = 9.8 N/kg.`, ans: a, unit: 'm/s²', steps: [`Component of weight down the slope: ${m} × 9.8 × sin ${th}° = ${s3(m * G9 * Math.sin(th * DEG))} N`, `Resultant = ${s3(m * G9 * Math.sin(th * DEG))} − ${Ff} = ${s3(m * a)} N`, `$a = @frac{F}{m} = ${s3(a)} "m/s"^2$`] }; };
GEN.mustat = () => { const m = rnd(1, 12, 0.5), mu = rnd(0.2, 0.9, 0.05), R = m * G9, F = mu * R;
  return { q: `A ${m} kg box on a level floor starts to slide when pushed horizontally with ${s3(F)} N. Calculate the coefficient of static friction. g = 9.8 N/kg.`, ans: mu, unit: '', steps: [`R = mg = ${m} × 9.8 = ${s3(R)} N`, '$μ_s = @frac{F}{R}$', `$μ_s = @frac{${s3(F)}}{${s3(R)}} = ${sf(mu, 2)}$`] }; };
GEN.mudyn = () => { const m = rnd(2, 50, 1), mu = rnd(0.1, 0.7, 0.05), F = mu * m * G9;
  return { q: `A ${m} kg crate slides across a floor. The coefficient of dynamic friction is ${mu}. Calculate the friction force. g = 9.8 N/kg.`, ans: F, unit: 'N', steps: [`R = mg = ${s3(m * G9)} N`, '$F = μ_d R$', `$F = ${mu} × ${s3(m * G9)} = ${s3(F)} "N"$`] }; };
GEN.mutan = () => { const th = rnd(12, 40, 1), mu = Math.tan(th * DEG);
  return { q: `A block just begins to slide when a ramp is tilted to ${th}°. Calculate the coefficient of static friction.`, ans: mu, unit: '', steps: ['At the point of slipping: mg sin θ = μₛ mg cos θ', '$μ_s = tan θ$', `$μ_s = tan ${th}° = ${sf(mu, 2)}$`] }; };
GEN.impulse1 = () => { const m = pk([0.058, 0.16, 0.43, 0.45, 70, 1200]), v = rnd(4, 40, 1), t = pk([0.005, 0.01, 0.02, 0.05, 0.1, 0.4]), F = m * v / t;
  return { q: `An object of mass ${m} kg moving at ${v} m/s is brought to rest in ${t} s. Calculate the average force on it.`, ans: F, unit: 'N', steps: [`Δp = mv = ${m} × ${v} = ${s3(m * v)} kg m/s`, '$F = @frac{Δp}{Δt}$', `$F = @frac{${s3(m * v)}}{${t}} = ${s3(F)} "N"$`] }; };
GEN.bounce = () => { const m = pk([0.057, 0.16, 0.43, 0.6]), u = rnd(5, 25, 1), v = rnd(3, u, 1), dp = m * (u + v);
  return { q: `A ${m} kg ball hits a wall at ${u} m/s and rebounds at ${v} m/s. Calculate the magnitude of its change in momentum.`, ans: dp, unit: 'kg m/s', steps: ['Take the rebound direction as positive: u = −' + u + ' m/s, v = +' + v + ' m/s', `$Δp = m(v - u) = ${m} × (${v} + ${u})$`, `$Δp = ${s3(dp)} "kg m/s"$`] }; };
GEN.recoil = () => { const mb = pk([0.01, 0.02, 0.05]), vb = rnd(200, 600, 10), M = rnd(2, 6, 0.5), V = mb * vb / M;
  return { q: `A ${mb} kg bullet is fired at ${vb} m/s from a ${M} kg rifle at rest. Calculate the recoil speed of the rifle.`, ans: V, unit: 'm/s', steps: ['Total momentum before = 0', `$0 = ${mb} × ${vb} + ${M}v$`, `$v = -${s3(V)} "m/s"$ — ${s3(V)} m/s backwards`] }; };
GEN.stick = () => { const m1 = rnd(0.5, 3, 0.5), u1 = rnd(1, 6, 0.5), m2 = rnd(0.5, 3, 0.5), v = m1 * u1 / (m1 + m2);
  return { q: `A ${m1} kg trolley at ${u1} m/s collides with a stationary ${m2} kg trolley and they stick together. Calculate their common velocity.`, ans: v, unit: 'm/s', steps: ['$m_1u_1 = (m_1 + m_2)v$', `$${m1} × ${u1} = ${m1 + m2}v$`, `$v = ${s3(v)} "m/s"$`] }; };
GEN.coaster = () => { const h1 = rnd(20, 60, 1), h2 = rnd(2, h1 - 5, 1), v = Math.sqrt(2 * G9 * (h1 - h2));
  return { q: `A roller-coaster car starts from rest at a height of ${h1} m. Ignoring friction, calculate its speed when it reaches a point ${h2} m above the ground. g = 9.8 N/kg.`, ans: v, unit: 'm/s', steps: [`Height lost Δh = ${h1} − ${h2} = ${h1 - h2} m`, '$mgΔh = @frac{1}{2}mv^2$ → $v = @sqrt{2gΔh}$', `$v = @sqrt{2 × 9.8 × ${h1 - h2}} = ${s3(v)} "m/s"$`] }; };
GEN.pfv = () => { const F = rnd(100, 3000, 50), v = rnd(2, 35, 1), P = F * v;
  return { q: `A vehicle travels at a steady ${v} m/s against total resistive forces of ${F} N. Calculate the useful power output of its engine.`, ans: P, unit: 'W', steps: ['Steady speed: driving force = resistive force', '$P = Fv$', `$P = ${F} × ${v} = ${s3(P)} "W"$`] }; };

/* ---------- Unit 3 · thermal ---------- */
GEN.kelvin = () => { const c = pk([-196, -78, -40, 0, 20, 37, 100, 327, 1083]), up = Math.random() < 0.5;
  return up ? { q: `Convert ${c} °C into kelvin.`, ans: c + 273, unit: 'K', steps: ['T/K = θ/°C + 273', `${c} + 273 = ${c + 273} K`] } : { q: `Convert ${c + 273} K into °C.`, ans: c, unit: '°C', steps: ['θ/°C = T/K − 273', `${c + 273} − 273 = ${c} °C`] }; };
GEN.mix1 = () => { const m1 = rnd(0.1, 0.5, 0.05), T1 = rnd(60, 95, 1), m2 = rnd(0.1, 0.5, 0.05), T2 = rnd(5, 25, 1), Tf = (m1 * T1 + m2 * T2) / (m1 + m2);
  return { q: `${m1} kg of water at ${T1} °C is mixed with ${m2} kg of water at ${T2} °C in an insulated cup. Calculate the final temperature.`, ans: Tf, unit: '°C', steps: ['Energy lost by hot water = energy gained by cold water (c cancels)', `$${m1}(${T1} - T) = ${m2}(T - ${T2})$`, `$T = @frac{${m1} × ${T1} + ${m2} × ${T2}}{${r2(m1 + m2)}} = ${s3(Tf)} °"C"$`] }; };
GEN.mix2 = () => { const [n, c] = pk([['copper', 385], ['iron', 450], ['aluminium', 900]]), mb = rnd(0.1, 0.6, 0.05), Tb = 100, mw = rnd(0.1, 0.4, 0.05), Tw = rnd(15, 25, 1), Tf = (mb * c * Tb + mw * 4200 * Tw) / (mb * c + mw * 4200);
  return { q: `A ${mb} kg ${n} block (c = ${c} J/kg K) at 100 °C is placed in ${mw} kg of water (c = 4200 J/kg K) at ${Tw} °C. Assuming no energy loss, calculate the final temperature.`, ans: Tf, unit: '°C', steps: ['$m_bc_b(100 - T) = m_wc_w(T - ' + Tw + ')$', `${s3(mb * c)}(100 − T) = ${s3(mw * 4200)}(T − ${Tw})`, `$T = ${s3(Tf)} °"C"$`] }; };
GEN.multistage = () => { const m = rnd(0.1, 0.5, 0.05), T0 = -rnd(5, 20, 1), T1 = rnd(10, 60, 5), E1 = m * 2100 * -T0, E2 = m * 334000, E3 = m * 4200 * T1, E = E1 + E2 + E3;
  return { q: `Calculate the energy needed to turn ${m} kg of ice at ${T0} °C into water at ${T1} °C. c(ice) = 2100 J/kg K, L_f = 334 000 J/kg, c(water) = 4200 J/kg K.`, ans: E, unit: 'J', steps: [`Warm the ice: ${m} × 2100 × ${-T0} = ${s3(E1)} J`, `Melt: ${m} × 334 000 = ${s3(E2)} J`, `Warm the water: ${m} × 4200 × ${T1} = ${s3(E3)} J`, `Total = ${s3(E)} J`] }; };

/* ---------- Unit 4 · waves and optics ---------- */
GEN.intens1 = () => { const P = pk([0.5, 2, 5, 10, 40, 60, 100]), r = rnd(0.5, 5, 0.5), I = P / (4 * Math.PI * r * r);
  return { q: `A small source emits ${P} W equally in all directions. Calculate the intensity ${r} m away.`, ans: I, unit: 'W/m²', steps: ['$I = @frac{P}{4πr^2}$', `$I = @frac{${P}}{4π × ${r}^2}$`, `$I = ${s3(I)} "W/m"^2$`] }; };
GEN.intens2 = () => { const I1 = rnd(10, 200, 5), k = pk([2, 3, 4, 0.5]), I2 = I1 / (k * k);
  return { q: `The intensity of light from a point source is ${I1} W/m² at a distance d. Calculate the intensity at ${k === 0.5 ? 'half that distance' : k + ' times that distance'}.`, ans: I2, unit: 'W/m²', steps: ['Inverse-square law: $I ∝ @frac{1}{r^2}$', `Factor = 1/${k}² = ${s3(1 / (k * k))}`, `$I = ${s3(I2)} "W/m"^2$`] }; };
GEN.reflect1 = () => { const a = rnd(10, 80, 5);
  return { q: `A ray of light strikes a plane mirror at ${a}° to the mirror surface. What is the angle of reflection?`, ans: 90 - a, unit: '°', steps: ['Angles are measured from the normal', `Angle of incidence = 90° − ${a}° = ${90 - a}°`, `Angle of reflection = ${90 - a}°`] }; };
const NMAT = [['water', 1.33], ['Perspex', 1.49], ['crown glass', 1.52], ['flint glass', 1.62], ['diamond', 2.42]];
GEN.snell1 = () => { const [n, idx] = pk(NMAT), i = rnd(15, 70, 5), r = Math.asin(Math.sin(i * DEG) / idx) / DEG;
  return { q: `Light enters ${n} (n = ${idx}) from air with an angle of incidence of ${i}°. Calculate the angle of refraction.`, ans: r, unit: '°', steps: ['$n = @frac{sin i}{sin r}$ → $sin r = @frac{sin i}{n}$', `$sin r = @frac{sin ${i}°}{${idx}} = ${(Math.sin(i * DEG) / idx).toFixed(3)}$`, `$r = ${s3(r)}°$`] }; };
GEN.snell2 = () => { const idx = rnd(1.30, 2.00, 0.01), i = rnd(20, 70, 5), r = r2(Math.asin(Math.sin(i * DEG) / idx) / DEG), n = Math.sin(i * DEG) / Math.sin(r * DEG);
  return { q: `In a Snell’s law lab, a ray in air with angle of incidence ${i}° has an angle of refraction of ${r.toFixed(1)}° in a block. Calculate the refractive index of the block.`, ans: n, unit: '', steps: ['$n = @frac{sin i}{sin r}$', `$n = @frac{sin ${i}°}{sin ${r.toFixed(1)}°}$`, `$n = ${sf(n, 3)}$`] }; };
GEN.nspeed = () => { const [n, idx] = pk(NMAT), up = Math.random() < 0.5, v = 3e8 / idx;
  return up ? { q: `The refractive index of ${n} is ${idx}. Calculate the speed of light in ${n}. (c = 3.00 × 10⁸ m/s)`, ans: v, unit: 'm/s', steps: ['$n = @frac{c}{v}$ → $v = @frac{c}{n}$', `$v = @frac{3.00 × 10^8}{${idx}}$`, `$v = ${s3(v)} "m/s"$`] } : { q: `Light travels at ${s3(v)} m/s in ${n}. Calculate the refractive index. (c = 3.00 × 10⁸ m/s)`, ans: idx, unit: '', steps: ['$n = @frac{c}{v}$', `$n = @frac{3.00 × 10^8}{${s3(v)}}$`, `$n = ${idx}$`] }; };
GEN.snell3 = () => { const [a, n1] = pk(NMAT.slice(0, 3)), [b, n2] = pk(NMAT.slice(2)), t1 = rnd(15, 50, 5), t2 = Math.asin(n1 * Math.sin(t1 * DEG) / n2) / DEG;
  return { q: `Light passes from ${a} (n = ${n1}) into ${b} (n = ${n2}) at ${t1}° to the normal. Calculate the angle in ${b}.`, ans: t2, unit: '°', steps: ['$n_1 sin θ_1 = n_2 sin θ_2$', `$sin θ_2 = @frac{${n1} × sin ${t1}°}{${n2}} = ${(n1 * Math.sin(t1 * DEG) / n2).toFixed(3)}$`, `$θ_2 = ${s3(t2)}°$`] }; };
GEN.crit1 = () => { const [n, idx] = pk(NMAT), c = Math.asin(1 / idx) / DEG;
  return { q: `Calculate the critical angle for light travelling from ${n} (n = ${idx}) into air.`, ans: c, unit: '°', steps: ['$sin c = @frac{1}{n}$', `$sin c = @frac{1}{${idx}} = ${(1 / idx).toFixed(3)}$`, `$c = ${s3(c)}°$`] }; };
GEN.crit2 = () => { const n1 = rnd(1.46, 1.62, 0.01), n2 = r2(n1 - rnd(0.01, 0.12, 0.01)), c = Math.asin(n2 / n1) / DEG;
  return { q: `An optical fibre has a core of refractive index ${n1} and cladding of ${n2}. Calculate the critical angle at the core–cladding boundary.`, ans: c, unit: '°', steps: ['$sin c = @frac{n_2}{n_1}$', `$sin c = @frac{${n2}}{${n1}} = ${(n2 / n1).toFixed(4)}$`, `$c = ${s3(c)}°$`] }; };
GEN.critn = () => { const c = rnd(24, 49, 1), n = 1 / Math.sin(c * DEG);
  return { q: `A transparent material has a critical angle of ${c}°. Calculate its refractive index.`, ans: n, unit: '', steps: ['$sin c = @frac{1}{n}$ → $n = @frac{1}{sin c}$', `$n = @frac{1}{sin ${c}°}$`, `$n = ${sf(n, 3)}$`] }; };
GEN.lenspower = () => { const f = pk([0.10, 0.20, 0.25, 0.40, 0.50, -0.25, -0.50, -1.0]), P = 1 / f;
  return { q: `A ${f > 0 ? 'converging' : 'diverging'} lens has a focal length of ${Math.abs(f * 100)} cm. Calculate its power, including the sign.`, ans: P, unit: 'D', steps: [`f = ${f > 0 ? '+' : '−'}${Math.abs(f)} m (${f > 0 ? 'converging: positive' : 'diverging: negative'})`, '$P = @frac{1}{f}$', `$P = ${s3(P)} "D"$`] }; };
GEN.lighttime = () => { const [n, d] = pk([['the Moon', 3.84e8], ['the Sun', 1.5e11], ['Mars (at closest approach)', 5.5e10], ['Jupiter', 6.3e11], ['a geostationary satellite', 3.6e7]]), t = d / 3e8;
  return { q: `${n[0].toUpperCase() + n.slice(1)} is ${sf(d, 2)} m from Earth. How long does light take to reach us from ${n}? (c = 3.0 × 10⁸ m/s)`, ans: t, unit: 's', steps: ['$t = @frac{d}{c}$', `$t = @frac{${sf(d, 2)}}{3.0 × 10^8}$`, `$t = ${s3(t)} "s"$ — we see it as it was ${s3(t)} s ago`] }; };

/* ---------- Unit 5 · circuits ---------- */
GEN.kirch1 = () => { const I = rnd(0.5, 3, 0.1), I1 = rnd(0.1, I - 0.1, 0.1), I2 = r2(I - I1);
  return { q: `A current of ${I.toFixed(1)} A enters a junction and splits into two branches. One branch carries ${I1.toFixed(1)} A. Calculate the current in the other branch.`, ans: I2, unit: 'A', steps: ['Kirchhoff’s first law: current in = current out', `$I_2 = ${I.toFixed(1)} - ${I1.toFixed(1)}$`, `$I_2 = ${I2} "A"$`] }; };
GEN.kirch2 = () => { const V = pk([6, 9, 12, 24]), V1 = rnd(1, V - 2, 0.5), V2 = rnd(0.5, V - V1 - 0.5, 0.5), V3 = r2(V - V1 - V2);
  return { q: `Three components are in series with a ${V} V supply. The pds across two of them are ${V1} V and ${V2} V. Calculate the pd across the third.`, ans: V3, unit: 'V', steps: ['Kirchhoff’s second law: the emf equals the sum of the pds round the loop', `$V_3 = ${V} - ${V1} - ${V2}$`, `$V_3 = ${V3} "V"$`] }; };
GEN.rpar1 = () => { const R1 = pk([2, 3, 4, 6, 8, 10, 12, 20, 30]), R2 = pk([3, 4, 6, 12, 15, 20, 60]), R = R1 * R2 / (R1 + R2);
  return { q: `Calculate the total resistance of a ${R1} Ω resistor and a ${R2} Ω resistor connected in parallel.`, ans: R, unit: 'Ω', steps: ['$@frac{1}{R} = @frac{1}{R_1} + @frac{1}{R_2}$', `$@frac{1}{R} = @frac{1}{${R1}} + @frac{1}{${R2}} = ${(1 / R1 + 1 / R2).toFixed(4)}$`, `$R = ${s3(R)} "Ω"$`] }; };
GEN.rcombo = () => { const Rs = pk([1, 2, 4, 5, 10]), [Ra, Rb] = pk([[6, 3], [12, 6], [4, 4], [20, 5], [10, 10], [12, 4]]), Rp = Ra * Rb / (Ra + Rb), R = Rs + Rp;
  return { q: `A ${Rs} Ω resistor is in series with a parallel pair of ${Ra} Ω and ${Rb} Ω. Calculate the total resistance.`, ans: R, unit: 'Ω', steps: [`Parallel pair: ${Ra} × ${Rb} ÷ (${Ra} + ${Rb}) = ${s3(Rp)} Ω`, `Total = ${Rs} + ${s3(Rp)}`, `$R = ${s3(R)} "Ω"$`] }; };
GEN.pdiv1 = () => { const Vin = pk([5, 6, 9, 12]), R1 = pk([1, 2, 3, 4.7, 10]), R2 = pk([1, 2.2, 3.3, 5, 6.8, 10]), Vo = Vin * R2 / (R1 + R2);
  return { q: `A ${Vin} V supply is connected across ${R1} kΩ and ${R2} kΩ resistors in series. Calculate the pd across the ${R2} kΩ resistor.`, ans: Vo, unit: 'V', steps: ['$V_{out} = V_{in} @frac{R_2}{R_1 + R_2}$', `$V_{out} = ${Vin} × @frac{${R2}}{${R1} + ${R2}}$`, `$V_{out} = ${s3(Vo)} "V"$`] }; };
const RHO = [['copper', 1.7e-8], ['aluminium', 2.8e-8], ['constantan', 4.9e-7], ['nichrome', 1.1e-6]];
GEN.resist1 = () => { const [n, rho] = pk(RHO), L = rnd(0.5, 50, 0.5), A = pk([0.2, 0.5, 1.0, 1.5, 2.5]), R = rho * L / (A * 1e-6);
  return { q: `A ${n} wire (ρ = ${sf(rho, 2)} Ω m) is ${L} m long with a cross-sectional area of ${A} mm². Calculate its resistance.`, ans: R, unit: 'Ω', steps: [`A = ${A} mm² = ${A} × 10⁻⁶ m²`, '$R = @frac{ρL}{A}$', `$R = @frac{${sf(rho, 2)} × ${L}}{${A} × 10^{-6}} = ${s3(R)} "Ω"$`] }; };
GEN.resist2 = () => { const [n, rho] = pk(RHO.slice(2)), d = pk([0.20, 0.25, 0.32, 0.40, 0.50]), R = rnd(2, 20, 0.5), A = Math.PI * (d * 1e-3) ** 2 / 4, L = R * A / rho;
  return { q: `What length of ${n} wire (ρ = ${sf(rho, 2)} Ω m) of diameter ${d} mm has a resistance of ${R} Ω?`, ans: L, unit: 'm', steps: [`$A = @frac{πd^2}{4} = ${sf(A, 3)} "m"^2$`, '$L = @frac{RA}{ρ}$', `$L = ${s3(L)} "m"$`] }; };
GEN.resscale = () => { const R = rnd(2, 24, 1), kL = pk([2, 3, 0.5]), kd = pk([2, 0.5, 1]), R2 = R * kL / (kd * kd);
  return { q: `A wire has a resistance of ${R} Ω. A second wire of the same material is ${kL === 0.5 ? 'half as long' : kL + ' times as long'} and has ${kd === 1 ? 'the same diameter' : kd === 2 ? 'twice the diameter' : 'half the diameter'}. Calculate its resistance.`, ans: R2, unit: 'Ω', steps: [`R ∝ L: × ${kL}`, `A ∝ d²: area × ${kd * kd}, so R ÷ ${kd * kd}`, `R = ${R} × ${kL} ÷ ${kd * kd} = ${s3(R2)} Ω`] }; };
GEN.kwh1 = () => { const P = pk([0.06, 0.1, 0.5, 1.2, 2, 2.5, 3]), h = rnd(0.5, 8, 0.5), E = P * h;
  return { q: `An appliance with a power of ${P * 1000} W is used for ${h} hours. Calculate the energy used in kWh.`, ans: E, unit: 'kWh', steps: [`P = ${P} kW`, '$E = Pt$ (kW × h)', `$E = ${P} × ${h} = ${s3(E)} "kWh"$`] }; };
GEN.kwhcost = () => { const P = pk([1.5, 2, 2.5, 3, 9]), mins = pk([10, 15, 20, 30, 45]), days = pk([7, 30]), price = pk([0.12, 0.15, 0.18, 0.25, 0.30]), E = P * mins / 60 * days, c = E * price;
  return { q: `A ${P} kW appliance is used for ${mins} minutes a day for ${days} days. Electricity costs $${price.toFixed(2)} per kWh. Calculate the cost in dollars.`, ans: c, unit: '$', steps: [`Energy = ${P} × ${mins}/60 × ${days} = ${s3(E)} kWh`, `Cost = ${s3(E)} × ${price.toFixed(2)}`, `= $${c.toFixed(2)}`] }; };

/* ---------- Unit 6 · radioactivity ---------- */
GEN.chain1 = () => { const [n, A, Z, s] = pk([['uranium-238', 238, 92, 'U'], ['thorium-232', 232, 90, 'Th'], ['radium-226', 226, 88, 'Ra']]), na = rnd(1, 3, 1), nb = rnd(1, 3, 1), A2 = A - 4 * na;
  return { q: `${n[0].toUpperCase() + n.slice(1)} (Z = ${Z}) emits ${na} alpha particle${na > 1 ? 's' : ''} and ${nb} beta particle${nb > 1 ? 's' : ''}. Calculate the mass number of the final nucleus.`, ans: A2, unit: '', steps: [`Each alpha: A − 4, Z − 2; each beta: A unchanged, Z + 1`, `A = ${A} − ${4 * na} = ${A2}`, `(Z = ${Z} − ${2 * na} + ${nb} = ${Z - 2 * na + nb})`] }; };
GEN.carbon1 = () => { const n = pk([1, 2, 3, 4, 5]), A0 = pk([15.3, 13.6, 12.8, 16]), A = A0 / 2 ** n, t = n * 5730;
  return { q: `Living wood has a C-14 activity of ${A0} counts per minute per gram. An ancient sample gives ${sf(A, 3)} counts per minute per gram. The half-life of C-14 is 5730 years. Calculate the age of the sample.`, ans: t, unit: 'years', steps: [`${A0} → ${sf(A, 3)} is a factor of ${2 ** n} = 2^${n}`, `${n} half-lives`, `Age = ${n} × 5730 = ${t} years`] }; };
GEN.emc2 = () => { const m = pk([1e-30, 3.2e-29, 2.9e-28, 1e-9, 1e-6, 0.001]), E = m * 9e16;
  return { q: `In a nuclear reaction the total mass decreases by ${sf(m, 2)} kg. Calculate the energy released. (c = 3.0 × 10⁸ m/s)`, ans: E, unit: 'J', steps: ['$E = Δmc^2$', `$E = ${sf(m, 2)} × (3.0 × 10^8)^2$`, `$E = ${s3(E)} "J"$`] }; };
