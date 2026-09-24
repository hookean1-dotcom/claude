/* ==========================================================
   Numerical question generators.
   Each returns { q, ans, unit, steps[], sf?, tol? } with fresh values.
   Answers are computed, so every question is self-consistent.
   ========================================================== */
const GEN = {};
const s3 = x => sf(x, 3), s2 = x => sf(x, 2);
const deg = Math.PI / 180;
const g = 9.81;

/* ---------- 1.1 ---------- */
GEN.vecres = () => { const a = rnd(3, 15, 1), b = rnd(4, 20, 1), R = Math.hypot(a, b);
  return { q: `Forces of ${a}.0 N east and ${b}.0 N north act on an object. Calculate the magnitude of the resultant force.`, ans: R, unit: 'N', steps: [`Perpendicular forces: $R = @sqrt{${a}^2 + ${b}^2}$`, `$R = ${s3(R)} "N"$ (at ${s3(Math.atan2(b, a) / deg)}° north of east)`] }; };
GEN.moments1 = () => { const F = rnd(10, 60, 5), d1 = rnd(0.2, 0.8, 0.05), d2 = rnd(0.3, 0.9, 0.05), W = F * d1 / d2;
  return { q: `A light beam is pivoted at its centre. A ${F} N weight hangs ${d1.toFixed(2)} m to the left of the pivot. What weight must hang ${d2.toFixed(2)} m to the right for balance?`, ans: W, unit: 'N', steps: ['Principle of moments: clockwise = anticlockwise', `$W × ${d2.toFixed(2)} = ${F} × ${d1.toFixed(2)}$`, `$W = ${s3(W)} "N"$`] }; };
GEN.density1 = () => { const s = rnd(1.5, 4.0, 0.5), m = rnd(20, 200, 5), V = s ** 3, rho = m / V * 1000;
  return { q: `A cube of side ${s.toFixed(1)} cm has mass ${m} g. Calculate its density in kg m<sup>−3</sup>.`, ans: rho, unit: 'kg m<sup>−3</sup>', steps: [`$V = ${s.toFixed(1)}^3 = ${s3(V)} "cm"^3 = ${s3(V * 1e-6)} "m"^3$`, `$ρ = m/V = ${m / 1000} / ${s3(V * 1e-6)}$`, `$ρ = ${s3(rho)} "kg m"^{-3}$`] }; };

/* ---------- 1.2 ---------- */
GEN.suvat1 = () => { const u = rnd(10, 35, 1), x = rnd(Math.ceil(u * u / 16 / 5) * 5, Math.max(Math.ceil(u * u / 16 / 5) * 5, Math.floor(u * u / 5 / 5) * 5), 5), a = u * u / (2 * x);
  return { q: `A car travelling at ${u} m s<sup>−1</sup> brakes uniformly to rest in ${x} m. Calculate the magnitude of its deceleration.`, ans: a, unit: 'm s<sup>−2</sup>', steps: ['$v^2 = u^2 + 2ax$ with v = 0', `$0 = ${u}^2 + 2a(${x})$`, `$a = -${s3(a)} "m s"^{-2}$, deceleration ${s3(a)} m s<sup>−2</sup>`] }; };
GEN.suvat2 = () => { const h = rnd(5, 60, 5), t = Math.sqrt(2 * h / g);
  return { q: `A stone is dropped from rest from a height of ${h} m. How long does it take to reach the ground? (Ignore air resistance.)`, ans: t, unit: 's', steps: ['$x = ut + @frac{1}{2}at^2$ with u = 0', `$${h} = @frac{1}{2}(9.81)t^2$`, `$t = @sqrt{2 × ${h}/9.81} = ${s3(t)} "s"$`] }; };
GEN.proj1 = () => { const u = rnd(8, 25, 1), H = rnd(10, 50, 5), t = Math.sqrt(2 * H / g), R = u * t;
  return { q: `A ball is thrown horizontally at ${u} m s<sup>−1</sup> from the top of a ${H} m high cliff. How far from the foot of the cliff does it land?`, ans: R, unit: 'm', steps: [`Vertical: $${H} = @frac{1}{2}(9.81)t^2$ → t = ${s3(t)} s`, `Horizontal (constant velocity): $x = ${u} × ${s3(t)}$`, `$x = ${s3(R)} "m"$`] }; };
GEN.proj2 = () => { const u = rnd(12, 30, 1), th = rnd(25, 65, 5), uy = u * Math.sin(th * deg), h = uy * uy / (2 * g);
  return { q: `A ball is kicked at ${u} m s<sup>−1</sup> at ${th}° above the horizontal. Calculate its maximum height.`, ans: h, unit: 'm', steps: [`$u_y = ${u}@,"sin"@,${th}° = ${s3(uy)} "m s"^{-1}$`, 'At the top $v_y = 0$: $0 = u_y^2 - 2gh$', `$h = ${s3(uy)}^2 / (2 × 9.81) = ${s3(h)} "m"$`] }; };

/* ---------- 1.3 ---------- */
GEN.mom1 = () => { const m1 = rnd(1, 5, 0.5), u1 = rnd(2, 8, 0.5), m2 = rnd(1, 5, 0.5), v = m1 * u1 / (m1 + m2);
  return { q: `A ${m1} kg trolley moving at ${u1} m s<sup>−1</sup> collides with a stationary ${m2} kg trolley and they stick together. Find their common velocity.`, ans: v, unit: 'm s<sup>−1</sup>', steps: ['Conservation of momentum', `$${m1} × ${u1} = (${m1} + ${m2})v$`, `$v = ${s3(v)} "m s"^{-1}$`] }; };
GEN.mom2 = () => { const m = rnd(40, 450, 10), u = rnd(10, 40, 1), v = rnd(10, 50, 1), t = rnd(2, 10, 1), F = m / 1000 * (u + v) / (t / 1000);
  return { q: `A ${m} g ball arrives at ${u} m s<sup>−1</sup> and rebounds at ${v} m s<sup>−1</sup> in the opposite direction. Contact lasts ${t} ms. Calculate the mean force.`, ans: F, unit: 'N', steps: [`$Δp = ${m / 1000} × (${v} - (-${u})) = ${s3(m / 1000 * (u + v))} "kg m s"^{-1}$`, `$F = Δp/Δt = ${s3(m / 1000 * (u + v))} / ${t / 1000}$`, `$F = ${s3(F)} "N"$`] }; };
GEN.fma1 = () => { const m = rnd(800, 2000, 100), Fd = rnd(2000, 6000, 200), Fr = rnd(300, 1500, 100), a = (Fd - Fr) / m;
  return { q: `A car of mass ${m} kg has a driving force of ${Fd} N and total resistive force ${Fr} N. Calculate its acceleration.`, ans: a, unit: 'm s<sup>−2</sup>', steps: [`Resultant $F = ${Fd} - ${Fr} = ${Fd - Fr} "N"$`, `$a = F/m = ${Fd - Fr}/${m}$`, `$a = ${s3(a)} "m s"^{-2}$`] }; };

/* ---------- 1.4 ---------- */
GEN.work1 = () => { const F = rnd(20, 120, 5), x = rnd(5, 80, 5), th = rnd(10, 60, 5), W = F * x * Math.cos(th * deg);
  return { q: `A sledge is pulled ${x} m along level ground by a rope at ${th}° to the horizontal with a tension of ${F} N. Calculate the work done by the tension.`, ans: W, unit: 'J', steps: ['$W = Fx@,"cos"@,θ$', `$W = ${F} × ${x} × "cos"@,${th}°$`, `$W = ${s3(W)} "J"$`] }; };
GEN.power1 = () => { const F = rnd(400, 3000, 100), v = rnd(10, 35, 1), P = F * v;
  return { q: `A vehicle travels at a constant ${v} m s<sup>−1</sup> against total resistive forces of ${F} N. Calculate the useful power output of its engine in kW.`, ans: P / 1000, unit: 'kW', steps: ['Constant velocity → driving force = resistive force', `$P = Fv = ${F} × ${v}$`, `$P = ${s3(P)} "W" = ${s3(P / 1000)} "kW"$`] }; };
GEN.energy1 = () => { const h = rnd(2, 40, 1), v = Math.sqrt(2 * g * h);
  return { q: `A rollercoaster starts from rest and descends a vertical height of ${h} m. Ignoring friction, find its speed at the bottom.`, ans: v, unit: 'm s<sup>−1</sup>', steps: ['Loss of E<sub>p</sub> = gain of E<sub>k</sub>: $mgh = @frac{1}{2}mv^2$', `$v = @sqrt{2 × 9.81 × ${h}}$`, `$v = ${s3(v)} "m s"^{-1}$`] }; };
GEN.eff1 = () => { const m = rnd(20, 120, 5), h = rnd(3, 20, 1), t = rnd(5, 30, 1), Pin = rnd(300, 1500, 50), Pu = m * g * h / t, e = Pu / Pin * 100;
  if (e > 95) return GEN.eff1();
  return { q: `A motor with input power ${Pin} W lifts a ${m} kg load through ${h} m in ${t} s. Calculate its efficiency as a percentage.`, ans: e, unit: '%', steps: [`Useful power $= mgh/t = ${m} × 9.81 × ${h} / ${t} = ${s3(Pu)} "W"$`, `Efficiency $= ${s3(Pu)} / ${Pin} × 100$`, `$= ${s3(e)}%$`] }; };

/* ---------- 1.5 ---------- */
GEN.young1 = () => { const L = rnd(1.0, 3.0, 0.1), d = rnd(0.2, 0.8, 0.05), F = rnd(20, 120, 5), E = pick([1.3e11, 2.0e11, 7.0e10]), A = Math.PI * (d * 1e-3 / 2) ** 2, dl = F * L / (A * E);
  return { q: `A wire of length ${L.toFixed(1)} m and diameter ${d.toFixed(2)} mm has Young modulus ${sf(E, 2)} Pa. Find its extension in mm under a load of ${F} N.`, ans: dl * 1000, unit: 'mm', steps: [`$A = π(${d / 2} × 10^{-3})^2 = ${s3(A)} "m"^2$`, `$Δl = @frac{Fl}{AE} = @frac{${F} × ${L.toFixed(1)}}{${s3(A)} × ${sf(E, 2)}}$`, `$Δl = ${s3(dl)} "m" = ${s3(dl * 1000)} "mm"$`] }; };
GEN.hooke1 = () => { const k = rnd(20, 400, 10), x = rnd(2, 20, 1), E = 0.5 * k * (x / 100) ** 2;
  return { q: `A spring of spring constant ${k} N m<sup>−1</sup> is stretched by ${x} cm (within its limit of proportionality). Calculate the elastic potential energy stored.`, ans: E, unit: 'J', steps: [`$E = @frac{1}{2}kx^2 = @frac{1}{2} × ${k} × ${x / 100}^2$`, `$E = ${s3(E)} "J"$`] }; };

/* ---------- 1.6 ---------- */
GEN.wien1 = () => { const l = rnd(250, 1000, 10), T = 2.90e-3 / (l * 1e-9);
  return { q: `The spectrum of a star peaks at ${l} nm. Calculate its surface temperature.`, ans: T, unit: 'K', steps: ['$T = W/λ_{max}$', `$T = 2.90 × 10^{-3} / ${l} × 10^{-9}$`, `$T = ${s3(T)} "K"$`] }; };
GEN.stefan1 = () => { const Rs = rnd(0.3, 20, 0.1), T = rnd(3000, 12000, 100), r = Rs * 6.96e8, P = 4 * Math.PI * r * r * 5.67e-8 * T ** 4;
  return { q: `A star has radius ${sf(r, 3)} m and surface temperature ${T} K. Calculate its luminosity.`, ans: P, unit: 'W', sf: 3, steps: [`$A = 4πr^2 = ${s3(4 * Math.PI * r * r)} "m"^2$`, `$P = AσT^4 = ${s3(4 * Math.PI * r * r)} × 5.67 × 10^{-8} × ${T}^4$`, `$P = ${s3(P)} "W"$`] }; };
GEN.inv1 = () => { const P = rnd(1, 50, 1) * 1e26, dl = rnd(4, 60, 1), d = dl * 9.46e15, I = P / (4 * Math.PI * d * d);
  return { q: `A star of luminosity ${sf(P, 2)} W is ${dl} light years away (1 ly = 9.46 × 10<sup>15</sup> m). Calculate the intensity of its radiation at the Earth.`, ans: I, unit: 'W m<sup>−2</sup>', steps: [`$d = ${dl} × 9.46 × 10^{15} = ${s3(d)} "m"$`, `$I = P/4πd^2$`, `$I = ${s3(I)} "W m"^{-2}$`] }; };

/* ---------- 1.7 ---------- */
GEN.nuclide1 = () => { const n = pick([['U', 92, 238], ['U', 92, 235], ['Pb', 82, 208], ['Fe', 26, 56], ['C', 6, 14], ['Co', 27, 60], ['Ra', 88, 226], ['Sr', 38, 90]]);
  return { q: `How many neutrons are in a nucleus of $^{${n[2]}}_{${n[1]}}"${n[0]}"$?`, ans: n[2] - n[1], unit: '', sf: 3, steps: ['N = A − Z', `N = ${n[2]} − ${n[1]} = ${n[2] - n[1]}`] }; };

/* ---------- 2.1 ---------- */
GEN.charge1 = () => { const I = rnd(0.2, 5, 0.1), t = rnd(10, 300, 10), Q = I * t, N = Q / 1.6e-19;
  return { q: `A current of ${I.toFixed(1)} A flows for ${t} s. How many electrons pass a point in the circuit?`, ans: N, unit: '', steps: [`$Q = It = ${I.toFixed(1)} × ${t} = ${s3(Q)} "C"$`, `$N = Q/e = ${s3(Q)} / 1.60 × 10^{-19}$`, `$N = ${s3(N)}$`] }; };
GEN.drift1 = () => { const I = rnd(0.5, 5, 0.5), A = rnd(0.5, 3, 0.5), n = 8.5e28, v = I / (n * A * 1e-6 * 1.6e-19);
  return { q: `A copper wire of cross-sectional area ${A.toFixed(1)} mm² carries ${I.toFixed(1)} A. Given n = 8.5 × 10<sup>28</sup> m<sup>−3</sup>, calculate the drift velocity.`, ans: v, unit: 'm s<sup>−1</sup>', steps: [`$A = ${A.toFixed(1)} × 10^{-6} "m"^2$`, `$v = @frac{I}{nAe} = @frac{${I.toFixed(1)}}{8.5 × 10^{28} × ${A.toFixed(1)} × 10^{-6} × 1.60 × 10^{-19}}$`, `$v = ${s3(v)} "m s"^{-1}$`] }; };

/* ---------- 2.2 ---------- */
GEN.resist1 = () => { const mat = pick([['nichrome', 1.1e-6], ['constantan', 4.9e-7], ['copper', 1.7e-8]]), L = rnd(0.2, 2, 0.1), d = rnd(0.1, 0.6, 0.05), A = Math.PI * (d * 1e-3 / 2) ** 2, R = mat[1] * L / A;
  return { q: `Find the resistance of ${L.toFixed(1)} m of ${mat[0]} wire (ρ = ${sf(mat[1], 2)} Ω m) of diameter ${d.toFixed(2)} mm.`, ans: R, unit: 'Ω', steps: [`$A = π(d/2)^2 = ${s3(A)} "m"^2$`, `$R = ρl/A = ${sf(mat[1], 2)} × ${L.toFixed(1)} / ${s3(A)}$`, `$R = ${s3(R)} "Ω"$`] }; };
GEN.power2 = () => { const P = pick([6, 12, 24, 36, 40, 60, 100]), V = pick([6, 12, 24, 230]), R = V * V / P;
  return { q: `A lamp is rated ${V} V, ${P} W. Calculate its resistance when working normally.`, ans: R, unit: 'Ω', steps: ['$P = V^2/R$', `$R = ${V}^2/${P}$`, `$R = ${s3(R)} "Ω"$`] }; };
GEN.resist2 = () => { const V = rnd(1.5, 12, 0.5), I = rnd(0.1, 2, 0.05), t = rnd(1, 10, 1), E = V * I * t * 60;
  return { q: `A component has ${V.toFixed(1)} V across it and carries ${I.toFixed(2)} A. How much energy does it transfer in ${t} minutes?`, ans: E, unit: 'J', steps: [`$W = VIt = ${V.toFixed(1)} × ${I.toFixed(2)} × ${t * 60}$`, `$W = ${s3(E)} "J"$`] }; };

/* ---------- 2.3 ---------- */
GEN.circ1 = () => { const R1 = rnd(2, 12, 1), R2 = rnd(3, 20, 1), R3 = rnd(3, 20, 1), V = rnd(6, 24, 1), Rp = R2 * R3 / (R2 + R3), I = V / (R1 + Rp);
  return { q: `A ${R1} Ω resistor is in series with a parallel combination of ${R2} Ω and ${R3} Ω. The supply is ${V} V with negligible internal resistance. Find the current from the supply.`, ans: I, unit: 'A', steps: [`Parallel: $@frac{1}{R} = @frac{1}{${R2}} + @frac{1}{${R3}}$ → R = ${s3(Rp)} Ω`, `Total = ${s3(R1 + Rp)} Ω`, `$I = ${V}/${s3(R1 + Rp)} = ${s3(I)} "A"$`] }; };
GEN.emf1 = () => { const E = rnd(1.5, 12, 0.5), r = rnd(0.2, 3, 0.1), R = rnd(2, 20, 1), I = E / (R + r), V = I * R;
  return { q: `A cell of emf ${E.toFixed(1)} V and internal resistance ${r.toFixed(1)} Ω is connected to a ${R} Ω resistor. Calculate the terminal pd.`, ans: V, unit: 'V', steps: [`$I = E/(R + r) = ${E.toFixed(1)}/${(R + r).toFixed(1)} = ${s3(I)} "A"$`, `$V = IR = ${s3(I)} × ${R}$`, `$V = ${s3(V)} "V"$`] }; };
GEN.div1 = () => { const Vin = rnd(5, 15, 1), R1 = rnd(1, 10, 1), R2 = rnd(1, 10, 1), Vo = Vin * R2 / (R1 + R2);
  return { q: `A ${Vin} V supply is connected across ${R1}.0 kΩ and ${R2}.0 kΩ resistors in series. Find the pd across the ${R2}.0 kΩ resistor.`, ans: Vo, unit: 'V', steps: [`$V_{out} = V_{in}@frac{R_2}{R_1 + R_2} = ${Vin} × @frac{${R2}}{${R1 + R2}}$`, `$V_{out} = ${s3(Vo)} "V"$`] }; };

/* ---------- 2.4 ---------- */
GEN.wave1 = () => { const f = rnd(80, 110, 0.1), l = 3e8 / (f * 1e6);
  return { q: `An FM radio station broadcasts at ${f.toFixed(1)} MHz. Calculate the wavelength.`, ans: l, unit: 'm', steps: [`$λ = c/f = 3.00 × 10^8 / ${f.toFixed(1)} × 10^6$`, `$λ = ${s3(l)} "m"$`] }; };

/* ---------- 2.5 ---------- */
GEN.yds1 = () => { const a = rnd(0.2, 0.8, 0.05), D = rnd(1, 3, 0.1), lam = rnd(450, 680, 5), y = lam * 1e-9 * D / (a * 1e-3);
  return { q: `Light of wavelength ${lam} nm passes through double slits ${a.toFixed(2)} mm apart onto a screen ${D.toFixed(1)} m away. Find the fringe separation in mm.`, ans: y * 1000, unit: 'mm', steps: [`$y = λD/a = ${lam} × 10^{-9} × ${D.toFixed(1)} / ${a.toFixed(2)} × 10^{-3}$`, `$y = ${s3(y)} "m" = ${s3(y * 1000)} "mm"$`] }; };
GEN.grat1 = () => { const N = pick([100, 300, 500, 600, 80, 250]), lam = rnd(400, 700, 5), n = pick([1, 2]), d = 1e-3 / N, s = n * lam * 1e-9 / d;
  if (s >= 1) return GEN.grat1();
  const th = Math.asin(s) / deg;
  return { q: `Light of wavelength ${lam} nm is incident normally on a grating with ${N} lines per mm. Find the angle of the order n = ${n} maximum.`, ans: th, unit: '°', steps: [`$d = 1/${N * 1000} = ${s3(d)} "m"$`, `$"sin"@,θ = nλ/d = ${n} × ${lam} × 10^{-9} / ${s3(d)} = ${s3(s)}$`, `$θ = ${s3(th)}°$`] }; };

/* ---------- 2.6 ---------- */
GEN.snell1 = () => { const n = rnd(1.31, 1.65, 0.01), th = rnd(15, 75, 5), t2 = Math.asin(Math.sin(th * deg) / n) / deg;
  return { q: `Light in air strikes a material of refractive index ${n.toFixed(2)} at ${th}° to the normal. Calculate the angle of refraction.`, ans: t2, unit: '°', steps: [`$1.00@,"sin"@,${th}° = ${n.toFixed(2)}@,"sin"@,θ_2$`, `$"sin"@,θ_2 = ${s3(Math.sin(th * deg) / n)}$`, `$θ_2 = ${s3(t2)}°$`] }; };
GEN.crit1 = () => { const n1 = rnd(1.45, 1.62, 0.01), n2 = pick([1.00, 1.33, +(n1 - rnd(0.01, 0.06, 0.01)).toFixed(2)]), c = Math.asin(n2 / n1) / deg;
  return { q: `Calculate the critical angle for light travelling from a medium of refractive index ${n1.toFixed(2)} to one of ${n2.toFixed(2)}.`, ans: c, unit: '°', steps: [`$"sin"@,θ_c = n_2/n_1 = ${n2.toFixed(2)}/${n1.toFixed(2)} = ${s3(n2 / n1)}$`, `$θ_c = ${s3(c)}°$`] }; };
GEN.fibre1 = () => { const n1 = rnd(1.46, 1.55, 0.01), n2 = +(n1 - rnd(0.01, 0.05, 0.01)).toFixed(2), L = rnd(0.5, 5, 0.5), t1 = L * 1000 * n1 / 3e8, dt = t1 * (n1 / n2 - 1);
  return { q: `A multimode fibre is ${L.toFixed(1)} km long with core index ${n1.toFixed(2)} and cladding index ${n2.toFixed(2)}. Find the time difference (in ns) between an axial ray and a ray travelling at the critical angle.`, ans: dt * 1e9, unit: 'ns', steps: [`Axial: $t_1 = Ln_1/c = ${s3(t1)} "s"$`, `Critical ray: $t_2 = t_1 × n_1/n_2 = ${s3(t1 * n1 / n2)} "s"$`, `$Δt = ${s3(dt)} "s" = ${s3(dt * 1e9)} "ns"$`] }; };

/* ---------- 2.7 ---------- */
GEN.photon1 = () => { const l = rnd(200, 800, 10), E = 6.63e-34 * 3e8 / (l * 1e-9);
  return { q: `Calculate the energy in eV of a photon of wavelength ${l} nm.`, ans: E / 1.6e-19, unit: 'eV', steps: [`$E = hc/λ = 6.63 × 10^{-34} × 3.00 × 10^8 / ${l} × 10^{-9} = ${s3(E)} "J"$`, `$E = ${s3(E)} / 1.60 × 10^{-19} = ${s3(E / 1.6e-19)} "eV"$`] }; };
GEN.pe1 = () => { const m = pick([['caesium', 2.1], ['potassium', 2.3], ['sodium', 2.3], ['calcium', 2.9], ['zinc', 4.3]]), E = rnd(m[1] + 0.3, m[1] + 2.5, 0.1), l = 6.63e-34 * 3e8 / (E * 1.6e-19) * 1e9, Lr = Math.round(l), Ep = 6.63e-34 * 3e8 / (Lr * 1e-9), Ek = Ep - m[1] * 1.6e-19;
  return { q: `Light of wavelength ${Lr} nm falls on ${m[0]} (work function ${m[1].toFixed(1)} eV). Calculate the maximum kinetic energy of the photoelectrons in joules.`, ans: Ek, unit: 'J', steps: [`Photon energy $hc/λ = ${s3(Ep)} "J"$`, `$φ = ${m[1].toFixed(1)} × 1.60 × 10^{-19} = ${s3(m[1] * 1.6e-19)} "J"$`, `$E_{k max} = hf - φ = ${s3(Ek)} "J"$`] }; };
GEN.dbl1 = () => { const v = rnd(1, 9, 0.5) * 1e6, l = 6.63e-34 / (9.11e-31 * v);
  return { q: `Calculate the de Broglie wavelength of an electron moving at ${sf(v, 2)} m s<sup>−1</sup>.`, ans: l, unit: 'm', steps: [`$p = mv = 9.11 × 10^{-31} × ${sf(v, 2)} = ${s3(9.11e-31 * v)} "kg m s"^{-1}$`, `$λ = h/p = ${s3(l)} "m"$`] }; };
GEN.level1 = () => { const L = [[-13.6, 1], [-3.40, 2], [-1.51, 3], [-0.85, 4], [-0.54, 5]]; let i = rnd(1, 4, 1), j = rnd(0, i - 1, 1); const dE = (L[i][0] - L[j][0]) * 1.6e-19, lam = 6.63e-34 * 3e8 / dE;
  return { q: `An electron in a hydrogen atom falls from the n = ${L[i][1]} level (${L[i][0].toFixed(2).replace('-', '−')} eV) to the n = ${L[j][1]} level (${L[j][0].toFixed(2).replace('-', '−')} eV). Find the wavelength of the emitted photon in nm.`, ans: lam * 1e9, unit: 'nm', steps: [`$ΔE = ${(L[i][0] - L[j][0]).toFixed(2)} "eV" = ${s3(dE)} "J"$`, `$λ = hc/ΔE = ${s3(lam)} "m"$`, `$λ = ${s3(lam * 1e9)} "nm"$`] }; };

/* ---------- 2.8 ---------- */
GEN.laser1 = () => { const l = pick([405, 532, 633, 650, 780, 1064]), P = rnd(1, 20, 1), E = 6.63e-34 * 3e8 / (l * 1e-9), N = P * 1e-3 / E;
  return { q: `A ${P} mW laser emits light of wavelength ${l} nm. How many photons does it emit per second?`, ans: N, unit: 's<sup>−1</sup>', steps: [`$E = hc/λ = ${s3(E)} "J"$`, `$N = P/E = ${P} × 10^{-3} / ${s3(E)}$`, `$N = ${s3(N)} "s"^{-1}$`] }; };

/* ---------- 3.1 ---------- */
GEN.circ2 = () => { const m = rnd(600, 2000, 100), r = rnd(20, 120, 5), v = rnd(8, 30, 1), F = m * v * v / r;
  return { q: `A car of mass ${m} kg travels round a flat bend of radius ${r} m at ${v} m s<sup>−1</sup>. Calculate the frictional force required.`, ans: F, unit: 'N', steps: [`$F = mv^2/r = ${m} × ${v}^2 / ${r}$`, `$F = ${s3(F)} "N"$`] }; };
GEN.circ3 = () => { const rpm = pick([33.3, 45, 78, 1200, 3000, 600]), r = rnd(0.05, 0.4, 0.01), w = rpm * 2 * Math.PI / 60, a = w * w * r;
  return { q: `An object rotates at ${rpm} revolutions per minute at a radius of ${r.toFixed(2)} m. Calculate its centripetal acceleration.`, ans: a, unit: 'm s<sup>−2</sup>', steps: [`$ω = 2π × ${rpm}/60 = ${s3(w)} "rad s"^{-1}$`, `$a = ω^2r = ${s3(w)}^2 × ${r.toFixed(2)}$`, `$a = ${s3(a)} "m s"^{-2}$`] }; };

/* ---------- 3.2 ---------- */
GEN.shm1 = () => { const m = rnd(0.1, 2, 0.1), k = rnd(10, 200, 5), T = 2 * Math.PI * Math.sqrt(m / k);
  return { q: `A mass of ${m.toFixed(1)} kg oscillates on a spring of spring constant ${k} N m<sup>−1</sup>. Calculate the period.`, ans: T, unit: 's', steps: [`$T = 2π@sqrt{m/k} = 2π@sqrt{${m.toFixed(1)}/${k}}$`, `$T = ${s3(T)} "s"$`] }; };
GEN.shm2 = () => { const A = rnd(1, 10, 0.5), f = rnd(0.5, 5, 0.1), w = 2 * Math.PI * f, v = A / 100 * w;
  return { q: `An object moves with SHM of amplitude ${A.toFixed(1)} cm and frequency ${f.toFixed(1)} Hz. Calculate its maximum speed.`, ans: v, unit: 'm s<sup>−1</sup>', steps: [`$ω = 2πf = ${s3(w)} "rad s"^{-1}$`, `$v_{max} = Aω = ${A / 100} × ${s3(w)}$`, `$v_{max} = ${s3(v)} "m s"^{-1}$`] }; };
GEN.pend1 = () => { const T = rnd(0.8, 3, 0.1), l = g * T * T / (4 * Math.PI ** 2);
  return { q: `What length of simple pendulum has a period of ${T.toFixed(1)} s? (g = 9.81 m s<sup>−2</sup>)`, ans: l, unit: 'm', steps: [`$T = 2π@sqrt{l/g}$ → $l = gT^2/4π^2$`, `$l = 9.81 × ${T.toFixed(1)}^2 / 4π^2$`, `$l = ${s3(l)} "m"$`] }; };

/* ---------- 3.3 ---------- */
GEN.gas1 = () => { const p = rnd(0.8, 3, 0.1) * 1e5, V = rnd(1, 50, 1) * 1e-3, t = rnd(-10, 80, 1), T = t + 273, n = p * V / (8.31 * T);
  return { q: `A gas occupies ${sf(V, 2)} m³ at ${sf(p, 2)} Pa and ${t} °C. How many moles of gas are there?`, ans: n, unit: 'mol', steps: [`$T = ${t} + 273 = ${T} "K"$`, `$n = pV/RT = ${sf(p, 2)} × ${sf(V, 2)} / (8.31 × ${T})$`, `$n = ${s3(n)} "mol"$`] }; };
GEN.gas2 = () => { const p1 = rnd(1, 3, 0.1), t1 = rnd(0, 30, 1), t2 = rnd(50, 200, 10), p2 = p1 * (t2 + 273) / (t1 + 273);
  return { q: `A sealed rigid container of gas is at ${p1.toFixed(1)} × 10<sup>5</sup> Pa and ${t1} °C. Find the pressure (in units of 10<sup>5</sup> Pa) when heated to ${t2} °C.`, ans: p2, unit: '× 10<sup>5</sup> Pa', steps: ['Constant volume: $p_1/T_1 = p_2/T_2$ (T in kelvin)', `$p_2 = ${p1.toFixed(1)} × ${t2 + 273}/${t1 + 273}$`, `$p_2 = ${s3(p2)} × 10^5 "Pa"$`] }; };
GEN.rms1 = () => { const gas = pick([['helium', 0.004], ['nitrogen', 0.028], ['oxygen', 0.032], ['argon', 0.040], ['hydrogen', 0.002]]), T = rnd(200, 600, 10), m = gas[1] / 6.02e23, c = Math.sqrt(3 * 1.38e-23 * T / m);
  return { q: `Calculate the rms speed of ${gas[0]} molecules (molar mass ${gas[1]} kg mol<sup>−1</sup>) at ${T} K.`, ans: c, unit: 'm s<sup>−1</sup>', steps: [`$m = M/N_A = ${s3(m)} "kg"$`, `$c_{rms} = @sqrt{3kT/m} = @sqrt{3 × 1.38 × 10^{-23} × ${T} / ${s3(m)}}$`, `$c_{rms} = ${s3(c)} "m s"^{-1}$`] }; };

/* ---------- 3.4 ---------- */
GEN.intu1 = () => { const n = rnd(0.5, 5, 0.5), dT = rnd(20, 200, 10), dU = 1.5 * n * 8.31 * dT;
  return { q: `${n.toFixed(1)} mol of an ideal monatomic gas is heated so that its temperature rises by ${dT} K. Calculate the increase in internal energy.`, ans: dU, unit: 'J', steps: [`$ΔU = @frac{3}{2}nRΔT = 1.5 × ${n.toFixed(1)} × 8.31 × ${dT}$`, `$ΔU = ${s3(dU)} "J"$`] }; };
GEN.first1 = () => { const p = rnd(1, 3, 0.5) * 1e5, dV = rnd(0.5, 5, 0.5) * 1e-3, W = p * dV, Q = Math.round(W * rnd(1.3, 3, 0.1)), dU = Q - W;
  return { q: `A gas expands at a constant pressure of ${sf(p, 2)} Pa, increasing its volume by ${sf(dV, 2)} m³, while ${Q} J of heat is supplied. Find the change in internal energy.`, ans: dU, unit: 'J', steps: [`$W = pΔV = ${sf(p, 2)} × ${sf(dV, 2)} = ${s3(W)} "J"$`, `$ΔU = Q - W = ${Q} - ${s3(W)}$`, `$ΔU = ${s3(dU)} "J"$`] }; };
GEN.shc1 = () => { const mat = pick([['water', 4200], ['aluminium', 900], ['copper', 390], ['iron', 450]]), m = rnd(0.2, 3, 0.1), dT = rnd(5, 60, 1), Q = m * mat[1] * dT;
  return { q: `How much energy is needed to raise the temperature of ${m.toFixed(1)} kg of ${mat[0]} (c = ${mat[1]} J kg<sup>−1</sup> K<sup>−1</sup>) by ${dT} K?`, ans: Q, unit: 'J', steps: [`$Q = mcΔθ = ${m.toFixed(1)} × ${mat[1]} × ${dT}$`, `$Q = ${s3(Q)} "J"$`] }; };

/* ---------- 3.5 ---------- */
GEN.decay1 = () => { const T = rnd(2, 30, 1), t = rnd(1, 60, 1), A0 = rnd(1, 20, 1), A = A0 * Math.exp(-Math.LN2 / T * t);
  return { q: `A source has half-life ${T} hours and initial activity ${A0}.0 MBq. Find its activity after ${t} hours (in MBq).`, ans: A, unit: 'MBq', steps: [`$λ = "ln"@,2/${T} = ${s3(Math.LN2 / T)} "h"^{-1}$`, `$A = A_0e^{-λt} = ${A0} × e^{-${s3(Math.LN2 / T)} × ${t}}$`, `$A = ${s3(A)} "MBq"$`] }; };
GEN.decay2 = () => { const T = rnd(1, 60, 1), lam = Math.LN2 / (T * 60);
  return { q: `An isotope has a half-life of ${T} minutes. Calculate its decay constant in s<sup>−1</sup>.`, ans: lam, unit: 's<sup>−1</sup>', steps: [`$T_{½} = ${T * 60} "s"$`, `$λ = "ln"@,2/T_{½} = 0.693/${T * 60}$`, `$λ = ${s3(lam)} "s"^{-1}$`] }; };
GEN.decay3 = () => { const A = rnd(1, 90, 1) * 1e3, T = rnd(2, 48, 1), lam = Math.LN2 / (T * 3600), N = A / lam;
  return { q: `A sample has activity ${sf(A, 2)} Bq and half-life ${T} hours. How many undecayed nuclei does it contain?`, ans: N, unit: '', steps: [`$λ = 0.693/(${T} × 3600) = ${s3(lam)} "s"^{-1}$`, `$N = A/λ = ${sf(A, 2)} / ${s3(lam)}$`, `$N = ${s3(N)}$`] }; };

/* ---------- 3.6 ---------- */
GEN.mass1 = () => { const dm = rnd(0.002, 0.2, 0.001), E = dm * 931;
  return { q: `In a nuclear reaction the total mass decreases by ${dm.toFixed(3)} u. How much energy is released, in MeV?`, ans: E, unit: 'MeV', steps: [`$E = ${dm.toFixed(3)} × 931 "MeV"$`, `$E = ${s3(E)} "MeV"$`] }; };
GEN.be1 = () => { const n = pick([['⁴He', 2, 2, 4.001506], ['¹²C', 6, 6, 11.996709], ['¹⁶O', 8, 8, 15.990526], ['⁵⁶Fe', 26, 30, 55.920664], ['⁷Li', 3, 4, 7.014357]]), mt = n[1] * 1.007276 + n[2] * 1.008665, dm = mt - n[3], BE = dm * 931, A = n[1] + n[2];
  return { q: `The nuclear mass of ${n[0]} is ${n[3]} u. Given m<sub>p</sub> = 1.007276 u and m<sub>n</sub> = 1.008665 u, calculate the binding energy per nucleon in MeV.`, ans: BE / A, unit: 'MeV', steps: [`Nucleons: ${n[1]} p + ${n[2]} n = ${mt.toFixed(6)} u`, `Mass defect = ${dm.toFixed(6)} u → BE = ${s3(BE)} MeV`, `Per nucleon = ${s3(BE)}/${A} = ${s3(BE / A)} MeV`] }; };

/* ---------- 4.1 ---------- */
GEN.cap1 = () => { const a = rnd(5, 30, 1), d = rnd(0.5, 5, 0.5), C = 8.85e-12 * (a / 100) ** 2 / (d * 1e-3);
  return { q: `Two square plates of side ${a} cm are separated by ${d.toFixed(1)} mm of air. Calculate the capacitance in pF.`, ans: C * 1e12, unit: 'pF', steps: [`$A = ${(a / 100) ** 2} "m"^2$`, `$C = ε_0A/d = 8.85 × 10^{-12} × ${(a / 100) ** 2} / ${d / 1000}$`, `$C = ${s3(C)} "F" = ${s3(C * 1e12)} "pF"$`] }; };
GEN.cap2 = () => { const C = pick([100, 220, 470, 1000, 2200, 4700]), V = rnd(3, 24, 1), U = 0.5 * C * 1e-6 * V * V;
  return { q: `A ${C} μF capacitor is charged to ${V} V. Calculate the energy stored.`, ans: U, unit: 'J', steps: [`$U = @frac{1}{2}CV^2 = 0.5 × ${C} × 10^{-6} × ${V}^2$`, `$U = ${s3(U)} "J"$`] }; };
GEN.cap3 = () => { const C = pick([100, 220, 470, 1000, 2200]), R = pick([10, 22, 47, 100]), V0 = rnd(5, 15, 1), RC = C * 1e-6 * R * 1e3, t = +(RC * rnd(0.3, 2.5, 0.1)).toPrecision(2), V = V0 * Math.exp(-t / RC);
  return { q: `A ${C} μF capacitor charged to ${V0} V discharges through ${R} kΩ. What is the pd after ${t} s?`, ans: V, unit: 'V', steps: [`$RC = ${C} × 10^{-6} × ${R} × 10^3 = ${s3(RC)} "s"$`, `$V = V_0e^{-t/RC} = ${V0}e^{-${t}/${s3(RC)}}$`, `$V = ${s3(V)} "V"$`] }; };
GEN.cap4 = () => { const C1 = pick([1, 2, 3, 4, 6, 10, 12]), C2 = pick([2, 3, 4, 5, 6, 8, 12, 15]), Cs = C1 * C2 / (C1 + C2);
  return { q: `Calculate the combined capacitance of ${C1} μF and ${C2} μF connected in series.`, ans: Cs, unit: 'μF', steps: [`$@frac{1}{C} = @frac{1}{${C1}} + @frac{1}{${C2}}$`, `$C = ${s3(Cs)} "μF"$`] }; };

/* ---------- 4.2 ---------- */
GEN.coul1 = () => { const q1 = rnd(1, 9, 1), q2 = rnd(1, 9, 1), r = rnd(2, 30, 1), F = 8.99e9 * q1 * 1e-9 * q2 * 1e-9 / (r / 100) ** 2;
  return { q: `Two point charges of +${q1}.0 nC and −${q2}.0 nC are ${r} cm apart. Calculate the magnitude of the force between them.`, ans: F, unit: 'N', steps: [`$F = @frac{Q_1Q_2}{4πε_0r^2} = 8.99 × 10^9 × ${q1} × 10^{-9} × ${q2} × 10^{-9}/${r / 100}^2$`, `$F = ${s3(F)} "N"$ (attractive)`] }; };
GEN.gfield1 = () => { const h = rnd(200, 36000, 100), r = 6.37e6 + h * 1e3, gg = 6.67e-11 * 5.97e24 / (r * r);
  return { q: `Calculate the gravitational field strength ${h} km above the Earth’s surface. (M = 5.97 × 10<sup>24</sup> kg, R = 6.37 × 10<sup>6</sup> m)`, ans: gg, unit: 'N kg<sup>−1</sup>', steps: [`$r = R + h = ${s3(r)} "m"$`, `$g = GM/r^2 = 6.67 × 10^{-11} × 5.97 × 10^{24} / (${s3(r)})^2$`, `$g = ${s3(gg)} "N kg"^{-1}$`] }; };
GEN.epot1 = () => { const Q = rnd(1, 20, 1), r = rnd(5, 50, 5), V = 8.99e9 * Q * 1e-9 / (r / 100);
  return { q: `Calculate the electric potential ${r} cm from a point charge of +${Q} nC.`, ans: V, unit: 'V', steps: [`$V = @frac{Q}{4πε_0r} = 8.99 × 10^9 × ${Q} × 10^{-9} / ${r / 100}$`, `$V = ${s3(V)} "V"$`] }; };

/* ---------- 4.3 ---------- */
GEN.orbit1 = () => { const h = rnd(300, 2000, 50), r = 6.37e6 + h * 1e3, T = 2 * Math.PI * Math.sqrt(r ** 3 / 3.98e14);
  return { q: `A satellite orbits ${h} km above the Earth’s surface. Calculate its orbital period in minutes. (GM = 3.98 × 10<sup>14</sup> m³ s<sup>−2</sup>, R = 6.37 × 10<sup>6</sup> m)`, ans: T / 60, unit: 'min', steps: [`$r = ${s3(r)} "m"$`, `$T = 2π@sqrt{r^3/GM} = ${s3(T)} "s"$`, `$T = ${s3(T / 60)} "min"$`] }; };
GEN.orbit2 = () => { const r = rnd(1, 30, 1) * 1e20, v = rnd(150, 300, 10) * 1e3, M = v * v * r / 6.67e-11;
  return { q: `A star orbits the centre of its galaxy at ${v / 1000} km s<sup>−1</sup> at a radius of ${sf(r, 2)} m. Estimate the mass inside its orbit.`, ans: M, unit: 'kg', steps: [`$GMm/r^2 = mv^2/r$ → $M = v^2r/G$`, `$M = (${sf(v, 2)})^2 × ${sf(r, 2)} / 6.67 × 10^{-11}$`, `$M = ${s3(M)} "kg"$`] }; };
GEN.dopp1 = () => { const l0 = pick([656.3, 486.1, 589.0, 393.4]), v = rnd(50, 3000, 10) * 1e3, dl = l0 * v / 3e8;
  return { q: `A spectral line of rest wavelength ${l0} nm is observed at ${(l0 + dl).toFixed(3)} nm in a galaxy’s spectrum. Calculate the recession speed in km s<sup>−1</sup>.`, ans: v / 1000, unit: 'km s<sup>−1</sup>', steps: [`$Δλ = ${dl.toFixed(3)} "nm"$`, `$v = cΔλ/λ = 3.00 × 10^8 × ${dl.toFixed(3)}/${l0}$`, `$v = ${s3(v)} "m s"^{-1} = ${s3(v / 1000)} "km s"^{-1}$`] }; };
GEN.hub1 = () => { const v = rnd(500, 30000, 500) * 1e3, H = 2.2e-18, D = v / H;
  return { q: `A galaxy recedes at ${v / 1000} km s<sup>−1</sup>. Using H<sub>0</sub> = 2.2 × 10<sup>−18</sup> s<sup>−1</sup>, find its distance.`, ans: D, unit: 'm', steps: [`$D = v/H_0 = ${sf(v, 2)} / 2.2 × 10^{-18}$`, `$D = ${s3(D)} "m"$`] }; };
GEN.bin1 = () => { const M1 = rnd(1, 5, 0.5), M2 = rnd(0.5, 3, 0.5), d = rnd(1, 10, 1) * 1e11, T = 2 * Math.PI * Math.sqrt(d ** 3 / (6.67e-11 * (M1 + M2) * 2e30));
  return { q: `Two stars of masses ${M1} M<sub>⊙</sub> and ${M2} M<sub>⊙</sub> (M<sub>⊙</sub> = 2.0 × 10<sup>30</sup> kg) orbit each other with separation ${sf(d, 2)} m. Calculate the orbital period in years (1 yr = 3.16 × 10<sup>7</sup> s).`, ans: T / 3.16e7, unit: 'years', steps: [`$M_1 + M_2 = ${s3((M1 + M2) * 2e30)} "kg"$`, `$T = 2π@sqrt{d^3/G(M_1 + M_2)} = ${s3(T)} "s"$`, `$T = ${s3(T / 3.16e7)} "years"$`] }; };

/* ---------- 4.4 ---------- */
GEN.mag1 = () => { const B = rnd(0.05, 0.8, 0.05), I = rnd(0.5, 8, 0.5), l = rnd(2, 20, 1), th = pick([90, 90, 60, 30, 45]), F = B * I * l / 100 * Math.sin(th * deg);
  return { q: `A wire of length ${l} cm carrying ${I.toFixed(1)} A lies at ${th}° to a uniform field of ${B.toFixed(2)} T. Calculate the force on it.`, ans: F, unit: 'N', steps: [`$F = BIl@,"sin"@,θ = ${B.toFixed(2)} × ${I.toFixed(1)} × ${l / 100} × "sin"@,${th}°$`, `$F = ${s3(F)} "N"$`] }; };
GEN.mag2 = () => { const p = pick([['electron', 9.11e-31], ['proton', 1.67e-27]]), v = rnd(1, 9, 0.5) * (p[0] === 'electron' ? 1e7 : 1e6), B = rnd(1, 50, 1) * 1e-3, r = p[1] * v / (B * 1.6e-19);
  return { q: `${p[0] === 'electron' ? 'An' : 'A'} ${p[0]} moves at ${sf(v, 2)} m s<sup>−1</sup> perpendicular to a ${B * 1000} mT magnetic field. Calculate the radius of its path.`, ans: r, unit: 'm', steps: [`$r = mv/Bq = ${sf(p[1], 3)} × ${sf(v, 2)} / (${sf(B, 2)} × 1.60 × 10^{-19})$`, `$r = ${s3(r)} "m"$`] }; };
GEN.mag3 = () => { const t = pick(['wire', 'sol']); if (t === 'wire') { const I = rnd(1, 30, 1), a = rnd(1, 20, 1), B = 2e-7 * I / (a / 100);
  return { q: `Calculate the magnetic flux density ${a} cm from a long straight wire carrying ${I} A.`, ans: B, unit: 'T', steps: [`$B = μ_0I/2πa = 4π × 10^{-7} × ${I}/(2π × ${a / 100})$`, `$B = ${s3(B)} "T"$`] }; }
  const n = rnd(200, 5000, 100), I = rnd(0.5, 5, 0.5), B = 4 * Math.PI * 1e-7 * n * I;
  return { q: `A long solenoid has ${n} turns per metre and carries ${I.toFixed(1)} A. Calculate the flux density inside it.`, ans: B, unit: 'T', steps: [`$B = μ_0nI = 4π × 10^{-7} × ${n} × ${I.toFixed(1)}$`, `$B = ${s3(B)} "T"$`] }; };

/* ---------- 4.5 ---------- */
GEN.emi1 = () => { const N = rnd(50, 500, 50), A = rnd(1, 20, 1), B = rnd(0.05, 0.8, 0.05), t = rnd(0.02, 0.5, 0.01), E = N * B * A * 1e-4 / t;
  return { q: `A ${N}-turn coil of area ${A} cm² is perpendicular to a ${B.toFixed(2)} T field. It is removed from the field in ${t.toFixed(2)} s. Calculate the mean induced emf.`, ans: E, unit: 'V', steps: [`$Δ(NΦ) = NBA = ${N} × ${B.toFixed(2)} × ${A} × 10^{-4} = ${s3(N * B * A * 1e-4)} "Wb"$`, `$E = Δ(NΦ)/Δt = ${s3(N * B * A * 1e-4)}/${t.toFixed(2)}$`, `$E = ${s3(E)} "V"$`] }; };
GEN.emi2 = () => { const B = rnd(0.1, 1, 0.1), l = rnd(0.1, 0.5, 0.05), v = rnd(1, 10, 0.5), E = B * l * v;
  return { q: `A rod of length ${l.toFixed(2)} m moves at ${v.toFixed(1)} m s<sup>−1</sup> perpendicular to a ${B.toFixed(1)} T field. Calculate the induced emf.`, ans: E, unit: 'V', steps: [`$E = Blv = ${B.toFixed(1)} × ${l.toFixed(2)} × ${v.toFixed(1)}$`, `$E = ${s3(E)} "V"$`] }; };
GEN.emi3 = () => { const w = rnd(20, 70, 5), v = rnd(150, 280, 10), Bv = rnd(2, 5, 0.5) * 1e-5, E = Bv * w * v;
  return { q: `An aircraft of wingspan ${w} m flies horizontally at ${v} m s<sup>−1</sup> where the vertical component of the Earth’s field is ${sf(Bv, 2)} T. Calculate the emf between its wingtips.`, ans: E, unit: 'V', steps: [`$E = Blv = ${sf(Bv, 2)} × ${w} × ${v}$`, `$E = ${s3(E)} "V"$`] }; };

/* ---------- Option A ---------- */
GEN.ac1 = () => { const V0 = rnd(5, 400, 5), Vr = V0 / Math.SQRT2;
  return { q: `A sinusoidal pd has peak value ${V0} V. Calculate its rms value.`, ans: Vr, unit: 'V', steps: [`$V_{rms} = V_0/@sqrt{2} = ${V0}/1.414$`, `$V_{rms} = ${s3(Vr)} "V"$`] }; };
GEN.ac2 = () => { const L = rnd(0.05, 1, 0.05), C = pick([0.1, 0.47, 1, 2.2, 4.7, 10]), f = 1 / (2 * Math.PI * Math.sqrt(L * C * 1e-6));
  return { q: `Calculate the resonant frequency of a series circuit with L = ${L.toFixed(2)} H and C = ${C} μF.`, ans: f, unit: 'Hz', steps: [`$f_0 = 1/2π@sqrt{LC} = 1/2π@sqrt{${L.toFixed(2)} × ${C} × 10^{-6}}$`, `$f_0 = ${s3(f)} "Hz"$`] }; };
GEN.ac3 = () => { const R = rnd(20, 200, 10), C = pick([1, 2.2, 4.7, 10, 22]), f = pick([50, 100, 200, 500]), Xc = 1 / (2 * Math.PI * f * C * 1e-6), Z = Math.hypot(R, Xc);
  return { q: `A ${R} Ω resistor is in series with a ${C} μF capacitor on a ${f} Hz supply. Calculate the impedance.`, ans: Z, unit: 'Ω', steps: [`$X_C = 1/2πfC = ${s3(Xc)} "Ω"$`, `$Z = @sqrt{R^2 + X_C^2} = @sqrt{${R}^2 + ${s3(Xc)}^2}$`, `$Z = ${s3(Z)} "Ω"$`] }; };

/* ---------- Option B ---------- */
GEN.med1 = () => { const V = rnd(30, 150, 5), l = 6.63e-34 * 3e8 / (1.6e-19 * V * 1e3);
  return { q: `Calculate the minimum wavelength of X-rays from a tube operating at ${V} kV.`, ans: l, unit: 'm', steps: [`$E_{max} = eV = 1.60 × 10^{-19} × ${V * 1000} = ${s3(1.6e-19 * V * 1e3)} "J"$`, `$λ_{min} = hc/E_{max} = ${s3(l)} "m"$`] }; };
GEN.med3 = () => { const mu = rnd(0.1, 2, 0.05), x = rnd(0.5, 6, 0.5), f = Math.exp(-mu * x) * 100;
  return { q: `X-rays pass through ${x.toFixed(1)} cm of material with attenuation coefficient ${mu.toFixed(2)} cm<sup>−1</sup>. What percentage of the intensity is transmitted?`, ans: f, unit: '%', steps: [`$I/I_0 = e^{-μx} = e^{-${mu.toFixed(2)} × ${x.toFixed(1)}}$`, `$= ${s3(f / 100)} = ${s3(f)}%$`] }; };

/* ---------- Option C ---------- */
GEN.sport1 = () => { const I1 = rnd(2, 6, 0.5), f1 = rnd(0.5, 3, 0.5), I2 = rnd(0.8, I1 - 0.5, 0.1), f2 = I1 * f1 / I2;
  return { q: `A skater spinning at ${f1.toFixed(1)} rev s<sup>−1</sup> with moment of inertia ${I1.toFixed(1)} kg m² pulls in her arms, reducing it to ${I2.toFixed(1)} kg m². Find her new rate of rotation.`, ans: f2, unit: 'rev s<sup>−1</sup>', steps: ['Angular momentum conserved: $I_1ω_1 = I_2ω_2$', `$f_2 = ${I1.toFixed(1)} × ${f1.toFixed(1)}/${I2.toFixed(1)}$`, `$f_2 = ${s3(f2)} "rev s"^{-1}$`] }; };
GEN.sport2 = () => { const h1 = rnd(1, 3, 0.1), h2 = +(h1 * rnd(0.3, 0.9, 0.05)).toFixed(2), e = Math.sqrt(h2 / h1);
  return { q: `A ball dropped from ${h1.toFixed(1)} m rebounds to ${h2} m. Calculate the coefficient of restitution.`, ans: e, unit: '', steps: [`$e = @sqrt{h_2/h_1} = @sqrt{${h2}/${h1.toFixed(1)}}$`, `$e = ${s3(e)}$`] }; };
GEN.sport3 = () => { const Cd = rnd(0.5, 1.1, 0.1), A = rnd(0.3, 0.6, 0.05), v = rnd(5, 20, 1), F = 0.5 * 1.2 * Cd * A * v * v;
  return { q: `A cyclist has drag coefficient ${Cd.toFixed(1)} and frontal area ${A.toFixed(2)} m². Find the drag force at ${v} m s<sup>−1</sup> (ρ = 1.2 kg m<sup>−3</sup>).`, ans: F, unit: 'N', steps: [`$F = @frac{1}{2}ρC_dAv^2 = 0.5 × 1.2 × ${Cd.toFixed(1)} × ${A.toFixed(2)} × ${v}^2$`, `$F = ${s3(F)} "N"$`] }; };

/* ---------- Option D ---------- */
GEN.env1 = () => { const r = rnd(10, 80, 5), v = rnd(4, 15, 1), P = 0.5 * 1.2 * Math.PI * r * r * v ** 3;
  return { q: `A wind turbine has blades ${r} m long. Calculate the power in the wind passing through it at ${v} m s<sup>−1</sup> (ρ = 1.2 kg m<sup>−3</sup>), in MW.`, ans: P / 1e6, unit: 'MW', steps: [`$A = π × ${r}^2 = ${s3(Math.PI * r * r)} "m"^2$`, `$P = @frac{1}{2}ρAv^3 = ${s3(P)} "W"$`, `$P = ${s3(P / 1e6)} "MW"$`] }; };
GEN.env2 = () => { const Q = rnd(5, 200, 5), h = rnd(20, 400, 10), e = rnd(0.7, 0.95, 0.05), P = Q * 1000 * g * h * e;
  return { q: `Water flows at ${Q} m³ s<sup>−1</sup> through turbines ${h} m below the surface of a reservoir. With ${Math.round(e * 100)}% efficiency, what is the output power in MW?`, ans: P / 1e6, unit: 'MW', steps: [`Mass per second = ${Q * 1000} kg s<sup>−1</sup>`, `$P = ${e.toFixed(2)} × ${Q * 1000} × 9.81 × ${h}$`, `$P = ${s3(P / 1e6)} "MW"$`] }; };
GEN.env3 = () => { const K = pick([0.8, 0.04, 1.0, 0.15, 400]), A = rnd(1, 20, 1), dT = rnd(5, 25, 1), dx = rnd(2, 30, 1), P = K * A * dT / (dx / 100);
  return { q: `A wall of area ${A} m² and thickness ${dx} cm has thermal conductivity ${K} W m<sup>−1</sup> K<sup>−1</sup> and a temperature difference of ${dT} K across it. Calculate the rate of heat flow.`, ans: P, unit: 'W', steps: [`$ΔQ/Δt = KAΔθ/Δx = ${K} × ${A} × ${dT}/${dx / 100}$`, `$= ${s3(P)} "W"$`] }; };
GEN.env4 = () => { const a = rnd(0.2, 0.4, 0.01), S = 1360, T = Math.pow((1 - a) * S / (4 * 5.67e-8), 0.25);
  return { q: `Taking the solar constant as 1360 W m<sup>−2</sup> and the Earth’s albedo as ${a.toFixed(2)}, estimate the Earth’s mean temperature with no greenhouse effect.`, ans: T, unit: 'K', steps: [`Absorbed = emitted: $(1 - a)SπR^2 = 4πR^2σT^4$`, `$T = ((1 - ${a.toFixed(2)}) × 1360 / (4 × 5.67 × 10^{-8}))^{1/4}$`, `$T = ${s3(T)} "K"$`] }; };

/* ---------- Skills ---------- */
GEN.unc1 = () => { const pa = rnd(0.5, 4, 0.5), n = pick([2, 3]), pb = rnd(0.5, 3, 0.5), tot = n * pa + pb;
  return { q: `In Z = A<sup>${n}</sup>B, A has a percentage uncertainty of ${pa}% and B has ${pb}%. What is the percentage uncertainty in Z?`, ans: tot, unit: '%', steps: [`Powers multiply the % uncertainty: ${n} × ${pa}% = ${n * pa}%`, `Products add % uncertainties: ${n * pa}% + ${pb}%`, `= ${s3(tot)}%`] }; };
GEN.unc2 = () => { const base = rnd(1.5, 3, 0.01), r = [base, base + rnd(0.01, 0.06, 0.01), base - rnd(0.01, 0.06, 0.01)].map(x => +x.toFixed(2)), rs = r.map(x => x.toFixed(2)), mean = (r[0] + r[1] + r[2]) / 3, u = (Math.max(...r) - Math.min(...r)) / 2, p = u / mean * 100;
  return { q: `Three timings are ${rs.join(' s, ')} s. Calculate the percentage uncertainty in the mean (using half the range).`, ans: p, unit: '%', steps: [`Mean = ${mean.toFixed(3)} s`, `Uncertainty = (max − min)/2 = ${u.toFixed(3)} s`, `% = ${u.toFixed(3)}/${mean.toFixed(3)} × 100 = ${s3(p)}%`] }; };
GEN.graph1 = () => { const gr = rnd(0.02, 0.2, 0.005), T = Math.LN2 / gr;
  return { q: `A graph of ln(activity) against time in minutes is a straight line with gradient −${gr.toFixed(3)} min<sup>−1</sup>. Find the half-life in minutes.`, ans: T, unit: 'min', steps: [`λ = −gradient = ${gr.toFixed(3)} min<sup>−1</sup>`, `$T_{½} = "ln"@,2/λ = 0.693/${gr.toFixed(3)}$`, `$T_{½} = ${s3(T)} "min"$`] }; };

/* ---------- added to match specification points ---------- */
GEN.wave2 = () => { const T = rnd(0.5, 20, 0.5), c = rnd(0.5, 4, 0.1), l = c * T / 1000 * 1000, f = 1000 / T;
  return { q: `A point on a wave completes one oscillation in ${T} ms. The wave travels at ${c.toFixed(1)} m s<sup>−1</sup>. Find the wavelength in cm.`, ans: c / f * 100, unit: 'cm', steps: [`$f = 1/T = 1/${T} × 10^{-3} = ${s3(f)} "Hz"$`, `$λ = c/f = ${c.toFixed(1)}/${s3(f)} = ${s3(c / f)} "m"$`, `$λ = ${s3(c / f * 100)} "cm"$`] }; };
GEN.sound1 = () => { const f = rnd(1000, 4000, 100), c = rnd(330, 350, 1), n = rnd(3, 8, 1), L = n * c / f / 2;
  return { q: `In a speed-of-sound experiment at ${f} Hz, a microphone finds that ${n} node-to-node spacings measure ${(L * 100).toFixed(1)} cm. Calculate the speed of sound.`, ans: 2 * (+(L * 100).toFixed(1) / 100 / n) * f, unit: 'm s<sup>−1</sup>', steps: [`One node–node spacing $= λ/2 = ${(L * 100).toFixed(1)}/${n} "cm"$`, `$λ = 2 × ${s3(+(L * 100).toFixed(1) / n)} "cm" = ${s3(2 * +(L * 100).toFixed(1) / n / 100)} "m"$`, `$c = fλ = ${s3(2 * (+(L * 100).toFixed(1) / 100 / n) * f)} "m s"^{-1}$`] }; };
GEN.radp1 = () => { const P = rnd(1, 50, 1), refl = Math.random() < .5, F = (refl ? 2 : 1) * P * 1e-3 / 3e8;
  return { q: `A ${P} mW laser beam falls normally on a surface that ${refl ? 'reflects' : 'absorbs'} all of it. Calculate the force on the surface.`, ans: F, unit: 'N', steps: [`Momentum carried per second by the beam = P/c`, refl ? 'Reflection reverses the momentum, so F = 2P/c' : 'Absorbed, so F = P/c', `$F = ${refl ? 2 : 1} × ${P} × 10^{-3} / 3.00 × 10^8 = ${s3(F)} "N"$`] }; };
GEN.gpot1 = () => { const h = rnd(200, 2000, 100), m = rnd(100, 2000, 100), r1 = 6.37e6, r2 = r1 + h * 1e3, dU = 6.67e-11 * 5.97e24 * m * (1 / r1 - 1 / r2);
  return { q: `Calculate the gain in gravitational potential energy when a ${m} kg satellite is raised from the Earth’s surface to a height of ${h} km. (M = 5.97 × 10<sup>24</sup> kg, R = 6.37 × 10<sup>6</sup> m)`, ans: dU, unit: 'J', steps: ['g varies over this height, so use $ΔE_p = mΔV_g$ with $V_g = -GM/r$', `$ΔV_g = GM(1/R - 1/r) = ${s3(dU / m)} "J kg"^{-1}$`, `$ΔE_p = ${m} × ${s3(dU / m)} = ${s3(dU)} "J"$`] }; };
GEN.sel1 = () => { const V = rnd(100, 2000, 50), d = rnd(1, 5, 0.5), B = rnd(5, 100, 5) * 1e-3, E = V / (d / 100), v = E / B;
  return { q: `Parallel plates ${d.toFixed(1)} cm apart have a pd of ${V} V across them, and a ${B * 1000} mT magnetic field is applied at right angles to the electric field. At what speed do charged particles pass straight through?`, ans: v, unit: 'm s<sup>−1</sup>', steps: [`$E = V/d = ${V}/${d / 100} = ${s3(E)} "V m"^{-1}$`, 'Undeflected when $qE = Bqv$', `$v = E/B = ${s3(v)} "m s"^{-1}$`] }; };
GEN.ac4 = () => { const N = rnd(50, 500, 50), A = rnd(1, 10, 1) * 1e-3, B = rnd(0.05, 0.5, 0.05), f = pick([25, 50, 60, 100]), w = 2 * Math.PI * f, V0 = w * B * A * N;
  return { q: `A coil of ${N} turns and area ${sf(A, 2)} m² rotates at ${f} revolutions per second in a uniform field of ${B.toFixed(2)} T. Calculate the rms emf.`, ans: V0 / Math.SQRT2, unit: 'V', steps: [`$ω = 2πf = ${s3(w)} "rad s"^{-1}$`, `$V_0 = ωBAN = ${s3(V0)} "V"$`, `$V_{rms} = V_0/@sqrt{2} = ${s3(V0 / Math.SQRT2)} "V"$`] }; };
GEN.med4 = () => { const D = rnd(0.5, 20, 0.5) * 1e-3, wr = pick([[1, 'γ-rays'], [1, 'X-rays'], [20, 'α particles']]), wt = pick([0.12, 0.08, 0.04, 0.01]), H = D * wr[0], E = H * wt;
  return { q: `A tissue receives an absorbed dose of ${(D * 1000).toFixed(1)} mGy of ${wr[1]} (W<sub>R</sub> = ${wr[0]}). The tissue weighting factor is ${wt}. Calculate the effective dose in mSv.`, ans: E * 1000, unit: 'mSv', steps: [`$H = DW_R = ${(D * 1000).toFixed(1)} × ${wr[0]} = ${s3(H * 1000)} "mSv"$`, `$E = HW_T = ${s3(H * 1000)} × ${wt} = ${s3(E * 1000)} "mSv"$`] }; };
GEN.med5 = () => { const B = pick([0.5, 1.0, 1.5, 3.0, 7.0]), f = 42.6e6 * B;
  return { q: `Calculate the Larmor frequency of protons in an MRI scanner with a ${B.toFixed(1)} T magnetic field.`, ans: f / 1e6, unit: 'MHz', steps: [`$f = 42.6 × 10^6 × ${B.toFixed(1)}$`, `$f = ${s3(f)} "Hz" = ${s3(f / 1e6)} "MHz"$`] }; };
GEN.sport4 = () => { const W = rnd(20, 80, 5), dW = rnd(0.28, 0.38, 0.01), fw = rnd(12, 20, 1), df = rnd(0.12, 0.17, 0.01), db = rnd(0.03, 0.05, 0.005), F = (W * dW + fw * df) / db;
  return { q: `A ${W} N weight is held in the hand ${dW.toFixed(2)} m from the elbow, with the forearm horizontal. The forearm weighs ${fw} N acting ${df.toFixed(2)} m from the elbow. The biceps pulls vertically ${(db * 100).toFixed(1)} cm from the elbow. Find the biceps force.`, ans: F, unit: 'N', steps: ['Take moments about the elbow', `$F × ${db} = ${W} × ${dW.toFixed(2)} + ${fw} × ${df.toFixed(2)}$`, `$F = ${s3(F)} "N"$`] }; };
GEN.sport5 = () => { const typ = pick(['solid sphere', 'thin spherical shell']), m = rnd(0.05, 7, 0.05), r = rnd(0.02, 0.15, 0.005), I = (typ === 'solid sphere' ? 0.4 : 2 / 3) * m * r * r;
  return { q: `Calculate the moment of inertia of a ${typ} of mass ${m.toFixed(2)} kg and radius ${r.toFixed(3)} m about an axis through its centre.`, ans: I, unit: 'kg m²', steps: [typ === 'solid sphere' ? '$I = @frac{2}{5}mr^2$' : '$I = @frac{2}{3}mr^2$', `$I = ${typ === 'solid sphere' ? '0.4' : '0.667'} × ${m.toFixed(2)} × ${r.toFixed(3)}^2 = ${s3(I)} "kg m"^2$`] }; };
GEN.env5 = () => { const A = rnd(1, 20, 0.5), I = rnd(300, 1000, 50), P = Math.round(A * I * rnd(0.12, 0.24, 0.01)), e = P / (A * I) * 100;
  return { q: `Solar panels of total area ${A} m² receive sunlight of intensity ${I} W m<sup>−2</sup> and produce ${P} W of electrical power. Calculate their efficiency.`, ans: e, unit: '%', steps: [`Power in $= IA = ${I} × ${A} = ${s3(I * A)} "W"$`, `Efficiency $= ${P}/${s3(I * A)} × 100 = ${s3(e)}%$`] }; };
GEN.env6 = () => { const A = rnd(5, 20, 1), x1 = rnd(0.1, 0.25, 0.05), k1 = 0.6, x2 = rnd(0.02, 0.1, 0.01), k2 = pick([0.02, 0.03, 0.04]), dT = rnd(8, 25, 1), P = dT / (x1 / (k1 * A) + x2 / (k2 * A));
  return { q: `A wall of area ${A} m² is ${x1.toFixed(2)} m of brick (K = ${k1} W m<sup>−1</sup> K<sup>−1</sup>) in contact with ${x2.toFixed(2)} m of insulation (K = ${k2} W m<sup>−1</sup> K<sup>−1</sup>). The temperature difference across the whole wall is ${dT} K. Find the rate of heat flow.`, ans: P, unit: 'W', steps: ['Same rate P through each layer; temperature drops add', `$Δθ_{brick} + Δθ_{ins} = P(@frac{${x1.toFixed(2)}}{${k1} × ${A}} + @frac{${x2.toFixed(2)}}{${k2} × ${A}}) = ${dT}$`, `$P = ${s3(P)} "W"$`] }; };
