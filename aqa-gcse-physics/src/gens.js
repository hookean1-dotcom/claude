/* ==========================================================
   Numerical question generators (AQA GCSE conventions: g = 9.8 N/kg, units m/s, J/kg °C …).
   Each returns { q, ans, unit, steps[] } with fresh values; answers are computed so
   every question is self-consistent. GEN_FLAGS marks Higher-tier (ht) / physics-only (po) ones.
   ========================================================== */
const GEN = {};
const s3 = x => sf(x, 3), s2 = x => sf(x, 2);
const G9 = 9.8;
const pk = a => a[Math.floor(Math.random() * a.length)];
const an = x => /^(8|11|18)/.test(String(x)) ? 'An' : 'A';
const GEN_FLAGS = { vtarea1: 'ht', mom4: 'ht', mom5: 'htpo', mom6: 'htpo', fmdt1: 'htpo', phrg1: 'htpo', phrg2: 'htpo', bil1: 'ht', bil2: 'ht', trans1: 'htpo', trans2: 'htpo', trans3: 'htpo', hl4: 'ht', brake2: 'ht',
  mom1: 'po', mom2: 'po', mom3: 'po', pfa1: 'po', pfa2: 'po', boyle1: 'po', boyle2: 'po', mag1: 'po', mag2: 'po', dose1: 'po', echo1: 'htpo', echo2: 'htpo', sound1: 'po' };

/* ---------- 1.1 Energy stores ---------- */
GEN.ke1 = () => { const m = pk([0.5, 2.0, 60, 75, 800, 1200, 1500]), v = rnd(2, 30, 1), E = 0.5 * m * v * v;
  return { q: `An object of mass ${m} kg moves at ${v} m/s. Calculate its kinetic energy.`, ans: E, unit: 'J', steps: ['$E_k = @frac{1}{2}mv^2$', `$E_k = 0.5 × ${m} × ${v}^2$`, `$E_k = ${s3(E)} "J"$`] }; };
GEN.ke2 = () => { const m = pk([2.0, 4.0, 50, 70, 1000]), v = rnd(3, 25, 1), E = 0.5 * m * v * v;
  return { q: `${an(m)} ${m} kg object has ${s3(E)} J of kinetic energy. Calculate its speed.`, ans: v, unit: 'm/s', steps: ['$v^2 = @frac{2E_k}{m}$', `$v^2 = @frac{2 × ${s3(E)}}{${m}} = ${s3(v * v)}$`, `$v = ${s3(v)} "m/s"$`] }; };
GEN.gpe1 = () => { const m = rnd(0.5, 80, 0.5), h = rnd(1, 50, 1), E = m * G9 * h;
  return { q: `${an(m)} ${m} kg object is lifted through ${h} m. g = 9.8 N/kg. Calculate the gain in gravitational potential energy.`, ans: E, unit: 'J', steps: ['$E_p = mgh$', `$E_p = ${m} × 9.8 × ${h}$`, `$E_p = ${s3(E)} "J"$`] }; };
GEN.gpe2 = () => { const m = rnd(1, 90, 1), h = rnd(2, 40, 0.5), E = m * G9 * h;
  return { q: `${an(m)} ${m} kg climber gains ${s3(E)} J of gravitational potential energy. g = 9.8 N/kg. How high did she climb?`, ans: h, unit: 'm', steps: ['$h = @frac{E_p}{mg}$', `$h = @frac{${s3(E)}}{${m} × 9.8}$`, `$h = ${s3(h)} "m"$`] }; };
GEN.epe1 = () => { const k = rnd(10, 400, 10), e = rnd(2, 30, 1), E = 0.5 * k * (e / 100) ** 2;
  return { q: `A spring with spring constant ${k} N/m is stretched by ${e} cm. Calculate the elastic potential energy stored.`, ans: E, unit: 'J', steps: [`e = ${e} cm = ${e / 100} m`, '$E_e = @frac{1}{2}ke^2$', `$E_e = 0.5 × ${k} × ${e / 100}^2 = ${s3(E)} "J"$`] }; };
GEN.fall1 = () => { const h = rnd(1, 45, 0.5), v = Math.sqrt(2 * G9 * h);
  return { q: `An object is dropped from rest from a height of ${h} m. Ignoring air resistance, calculate its speed just before it hits the ground. g = 9.8 N/kg.`, ans: v, unit: 'm/s', steps: ['Energy lost from gravitational store = energy gained by kinetic store: $mgh = @frac{1}{2}mv^2$', `Mass cancels: $v^2 = 2gh = 2 × 9.8 × ${h} = ${s3(2 * G9 * h)}$`, `$v = ${s3(v)} "m/s"$`] }; };

/* ---------- 1.2 SHC and power ---------- */
const MATS = [['water', 4200], ['aluminium', 900], ['copper', 385], ['iron', 450], ['concrete', 880], ['oil', 2000]];
GEN.shc1 = () => { const [n, c] = pk(MATS), m = rnd(0.2, 5, 0.1), dT = rnd(5, 60, 1), E = m * c * dT;
  return { q: `Calculate the energy needed to raise the temperature of ${m} kg of ${n} by ${dT} °C. Specific heat capacity of ${n} = ${c} J/kg °C.`, ans: E, unit: 'J', steps: ['$ΔE = mcΔθ$', `$ΔE = ${m} × ${c} × ${dT}$`, `$ΔE = ${s3(E)} "J"$`] }; };
GEN.shc2 = () => { const [n, c] = pk(MATS), m = rnd(0.5, 3, 0.5), dT = rnd(8, 40, 1), E = m * c * dT;
  return { q: `${an(m)} ${m} kg block is supplied with ${s3(E)} J and its temperature rises by ${dT} °C. Calculate the specific heat capacity of the material.`, ans: c, unit: 'J/kg °C', steps: ['$c = @frac{ΔE}{mΔθ}$', `$c = @frac{${s3(E)}}{${m} × ${dT}}$`, `$c = ${s3(c)} "J/kg °C"$ (${n})`] }; };
GEN.shc3 = () => { const m = rnd(0.5, 2, 0.1), P = pk([1000, 1500, 2000, 2400, 3000]), T0 = rnd(10, 25, 1), dT = 100 - T0, E = m * 4200 * dT, t = E / P;
  return { q: `${an(P)} ${P} W kettle heats ${m} kg of water from ${T0} °C to 100 °C. Assuming all the energy heats the water, calculate the time taken. c(water) = 4200 J/kg °C.`, ans: t, unit: 's', steps: [`$ΔE = mcΔθ = ${m} × 4200 × ${dT} = ${s3(E)} "J"$`, '$t = @frac{E}{P}$', `$t = @frac{${s3(E)}}{${P}} = ${s3(t)} "s"$`] }; };
GEN.power1 = () => { const E = rnd(500, 90000, 500), t = rnd(5, 300, 5), P = E / t;
  return { q: `A device transfers ${E} J of energy in ${t} s. Calculate its power.`, ans: P, unit: 'W', steps: ['$P = @frac{E}{t}$', `$P = @frac{${E}}{${t}}$`, `$P = ${s3(P)} "W"$`] }; };
GEN.power2 = () => { const P = pk([60, 100, 500, 1200, 2000, 3000]), mins = rnd(1, 30, 1), E = P * mins * 60;
  return { q: `${an(P)} ${P} W appliance is switched on for ${mins} minute${mins > 1 ? 's' : ''}. Calculate the energy transferred.`, ans: E, unit: 'J', steps: [`t = ${mins} × 60 = ${mins * 60} s`, '$E = Pt$', `$E = ${P} × ${mins * 60} = ${s3(E)} "J"$`] }; };
GEN.power3 = () => { const m = rnd(20, 200, 10), h = rnd(2, 30, 1), t = rnd(4, 40, 1), W = m * G9 * h, P = W / t;
  return { q: `A motor lifts ${an(m).toLowerCase()} ${m} kg load through ${h} m in ${t} s. g = 9.8 N/kg. Calculate the useful power output.`, ans: P, unit: 'W', steps: [`Work done = gain in $E_p = mgh = ${m} × 9.8 × ${h} = ${s3(W)} "J"$`, '$P = @frac{W}{t}$', `$P = @frac{${s3(W)}}{${t}} = ${s3(P)} "W"$`] }; };

/* ---------- 1.3 Efficiency ---------- */
GEN.eff1 = () => { const inp = rnd(200, 5000, 50), e = rnd(0.15, 0.9, 0.05), out = inp * e;
  return { q: `A machine is supplied with ${inp} J and transfers ${s3(out)} J usefully. Calculate its efficiency as a percentage.`, ans: e * 100, unit: '%', steps: ['efficiency = useful output ÷ total input', `= ${s3(out)} ÷ ${inp} = ${s2(e)}`, `= ${s3(e * 100)} %`] }; };
GEN.eff2 = () => { const P = rnd(20, 3000, 10), e = rnd(0.1, 0.95, 0.05), u = P * e;
  return { q: `A device has an input power of ${P} W and an efficiency of ${Math.round(e * 100)}%. Calculate its useful power output.`, ans: u, unit: 'W', steps: ['useful power output = efficiency × total power input', `= ${e.toFixed(2)} × ${P}`, `= ${s3(u)} W`] }; };
GEN.eff3 = () => { const u = rnd(5, 900, 5), e = rnd(0.2, 0.9, 0.05), P = u / e;
  return { q: `A motor produces a useful power output of ${u} W with an efficiency of ${e.toFixed(2)}. Calculate the total power input.`, ans: P, unit: 'W', steps: ['total power input = useful power output ÷ efficiency', `= ${u} ÷ ${e.toFixed(2)}`, `= ${s3(P)} W`] }; };
GEN.eff4 = () => { const inp = rnd(1000, 20000, 500), e = rnd(0.2, 0.85, 0.05), w = inp * (1 - e);
  return { q: `An engine is ${Math.round(e * 100)}% efficient. It is supplied with ${inp} J. How much energy is wasted?`, ans: w, unit: 'J', steps: [`useful output = ${e.toFixed(2)} × ${inp} = ${s3(inp * e)} J`, 'wasted = total input − useful output', `= ${inp} − ${s3(inp * e)} = ${s3(w)} J`] }; };

/* ---------- 2.1 Q = It, V = IR ---------- */
GEN.qit1 = () => { const I = rnd(0.1, 5, 0.1), mins = rnd(1, 20, 1), Q = I * mins * 60;
  return { q: `A current of ${I} A flows for ${mins} minute${mins > 1 ? 's' : ''}. Calculate the charge that flows.`, ans: Q, unit: 'C', steps: [`t = ${mins * 60} s`, '$Q = It$', `$Q = ${I} × ${mins * 60} = ${s3(Q)} "C"$`] }; };
GEN.qit2 = () => { const Q = rnd(10, 600, 10), t = rnd(5, 120, 5), I = Q / t;
  return { q: `${Q} C of charge flows through a lamp in ${t} s. Calculate the current.`, ans: I, unit: 'A', steps: ['$I = @frac{Q}{t}$', `$I = @frac{${Q}}{${t}}$`, `$I = ${s3(I)} "A"$`] }; };
GEN.vir1 = () => { const I = rnd(0.1, 3, 0.05), R = rnd(2, 200, 2), V = I * R;
  return { q: `A current of ${I} A flows through ${an(R).toLowerCase()} ${R} Ω resistor. Calculate the potential difference across it.`, ans: V, unit: 'V', steps: ['$V = IR$', `$V = ${I} × ${R}$`, `$V = ${s3(V)} "V"$`] }; };
GEN.vir2 = () => { const V = pk([1.5, 3, 4.5, 6, 9, 12, 24, 230]), R = rnd(4, 500, 2), I = V / R;
  return { q: `${an(V)} ${V} V supply is connected across ${an(R).toLowerCase()} ${R} Ω resistor. Calculate the current.`, ans: I, unit: 'A', steps: ['$I = @frac{V}{R}$', `$I = @frac{${V}}{${R}}$`, `$I = ${s3(I)} "A"$`] }; };
GEN.vir3 = () => { const mA = rnd(20, 900, 10), V = rnd(1, 12, 0.5), R = V / (mA / 1000);
  return { q: `The current through a component is ${mA} mA when the pd across it is ${V} V. Calculate its resistance.`, ans: R, unit: 'Ω', steps: [`I = ${mA} mA = ${mA / 1000} A`, '$R = @frac{V}{I}$', `$R = @frac{${V}}{${mA / 1000}} = ${s3(R)} Ω$`] }; };

/* ---------- 2.2 I–V ---------- */
GEN.ivr1 = () => { const V = rnd(1, 12, 0.5), I = rnd(0.05, 0.8, 0.05), R = V / I;
  return { q: `A point on the I–V graph of a filament lamp is at V = ${V} V, I = ${I} A. Calculate the resistance of the lamp at this point.`, ans: R, unit: 'Ω', steps: ['At any point, $R = @frac{V}{I}$ (not the gradient)', `$R = @frac{${V}}{${I}}$`, `$R = ${s3(R)} Ω$`] }; };

/* ---------- 2.3 Series / parallel ---------- */
GEN.ser1 = () => { const a = rnd(2, 100, 1), b = rnd(2, 100, 1), c = Math.random() < 0.4 ? rnd(2, 50, 1) : 0, R = a + b + c;
  return { q: `Resistors of ${a} Ω, ${b} Ω${c ? ` and ${c} Ω` : ''} are connected in series. Calculate the total resistance.`, ans: R, unit: 'Ω', steps: ['In series, resistances add: $R_{"total"} = R_1 + R_2 + …$', `$R_{"total"} = ${a} + ${b}${c ? ' + ' + c : ''} = ${R} Ω$`] }; };
GEN.ser2 = () => { const V = pk([6, 9, 12, 24]), a = rnd(2, 40, 1), b = rnd(2, 40, 1), I = V / (a + b);
  return { q: `${an(V)} ${V} V battery is connected to ${an(a).toLowerCase()} ${a} Ω resistor and ${an(b).toLowerCase()} ${b} Ω resistor in series. Calculate the current.`, ans: I, unit: 'A', steps: [`$R_{"total"} = ${a} + ${b} = ${a + b} Ω$`, '$I = @frac{V}{R_{"total"}}$', `$I = @frac{${V}}{${a + b}} = ${s3(I)} "A"$`] }; };
GEN.ser3 = () => { const V = pk([6, 9, 12, 24]), a = rnd(2, 40, 1), b = rnd(2, 40, 1), I = V / (a + b), Vb = I * b;
  return { q: `${an(V)} ${V} V supply is connected across ${a} Ω and ${b} Ω resistors in series. Calculate the pd across the ${b} Ω resistor.`, ans: Vb, unit: 'V', steps: [`$I = @frac{${V}}{${a} + ${b}} = ${s3(I)} "A"$ (same current through both)`, '$V = IR$', `$V = ${s3(I)} × ${b} = ${s3(Vb)} "V"$`] }; };
GEN.par1 = () => { const n = pk([2, 3]), Is = Array.from({ length: n }, () => rnd(0.1, 2, 0.1)), T = Is.reduce((x, y) => x + y, 0);
  return { q: `The ${n} branches of a parallel circuit carry currents of ${Is.map(x => x.toFixed(1) + ' A').join(', ')}. Calculate the current from the supply.`, ans: T, unit: 'A', steps: ['In parallel, the total current is the sum of the branch currents', `$I = ${Is.map(x => x.toFixed(1)).join(' + ')} = ${s3(T)} "A"$`] }; };

/* ---------- 2.5 Power & energy ---------- */
GEN.pvi1 = () => { const V = pk([3, 6, 12, 24, 230]), I = rnd(0.1, 13, 0.1), P = V * I;
  return { q: `A device draws ${I} A from ${an(V).toLowerCase()} ${V} V supply. Calculate its power.`, ans: P, unit: 'W', steps: ['$P = VI$', `$P = ${V} × ${I}$`, `$P = ${s3(P)} "W"$`] }; };
GEN.pvi2 = () => { const P = pk([60, 100, 500, 1000, 1200, 2000, 2200, 3000]), I = P / 230;
  return { q: `${an(P)} ${P} W appliance is connected to the 230 V mains. Calculate the current it draws.`, ans: I, unit: 'A', steps: ['$I = @frac{P}{V}$', `$I = @frac{${P}}{230}$`, `$I = ${s3(I)} "A"$`] }; };
GEN.pi2r1 = () => { const I = rnd(0.2, 10, 0.1), R = rnd(1, 100, 1), P = I * I * R;
  return { q: `A current of ${I} A flows through ${an(R).toLowerCase()} ${R} Ω resistor. Calculate the power transferred.`, ans: P, unit: 'W', steps: ['$P = I^2R$', `$P = ${I}^2 × ${R}$`, `$P = ${s3(P)} "W"$`] }; };
GEN.ept1 = () => { const kW = pk([0.5, 1.2, 1.5, 2, 2.4, 3]), mins = rnd(2, 60, 1), E = kW * 1000 * mins * 60;
  return { q: `${an(kW)} ${kW} kW heater is used for ${mins} minutes. Calculate the energy transferred in joules.`, ans: E, unit: 'J', steps: [`P = ${kW * 1000} W; t = ${mins * 60} s`, '$E = Pt$', `$E = ${kW * 1000} × ${mins * 60} = ${s3(E)} "J"$`] }; };
GEN.ept2 = () => { const E = rnd(1000, 200000, 1000), P = pk([100, 250, 500, 1000, 2000]), t = E / P;
  return { q: `An appliance with a power of ${P} W transfers ${E} J. For how long was it switched on?`, ans: t, unit: 's', steps: ['$t = @frac{E}{P}$', `$t = @frac{${E}}{${P}}$`, `$t = ${s3(t)} "s"$`] }; };
GEN.eqv1 = () => { const Q = rnd(5, 900, 5), V = pk([1.5, 3, 6, 9, 12, 230]), E = Q * V;
  return { q: `${Q} C of charge flows through a potential difference of ${V} V. Calculate the energy transferred.`, ans: E, unit: 'J', steps: ['$E = QV$', `$E = ${Q} × ${V}$`, `$E = ${s3(E)} "J"$`] }; };
GEN.eqv2 = () => { const Q = rnd(10, 500, 10), V = pk([1.5, 3, 4.5, 6, 9, 12]), E = Q * V;
  return { q: `A battery transfers ${s3(E)} J of energy while ${Q} C of charge flows. Calculate the potential difference of the battery.`, ans: V, unit: 'V', steps: ['$V = @frac{E}{Q}$', `$V = @frac{${s3(E)}}{${Q}}$`, `$V = ${s3(V)} "V"$`] }; };

/* ---------- 3.1 Density ---------- */
GEN.dens1 = () => { const m = rnd(10, 5000, 10), V = rnd(0.5, 20, 0.5), rho = m / V;
  return { q: `An object has a mass of ${m} kg and a volume of ${V} m³. Calculate its density.`, ans: rho, unit: 'kg/m³', steps: ['$ρ = @frac{m}{V}$', `$ρ = @frac{${m}}{${V}}$`, `$ρ = ${s3(rho)} "kg/m"^3$`] }; };
GEN.dens2 = () => { const a = rnd(1, 6, 0.5), b = rnd(1, 6, 0.5), c = rnd(1, 6, 0.5), V = a * b * c, rhoG = pk([0.8, 1.2, 2.7, 7.9, 8.9, 11.3]), m = V * rhoG, rho = rhoG * 1000;
  return { q: `A block measures ${a} cm × ${b} cm × ${c} cm and has a mass of ${s3(m)} g. Calculate its density in kg/m³.`, ans: rho, unit: 'kg/m³', steps: [`$V = ${a} × ${b} × ${c} = ${s3(V)} "cm"^3$`, `$ρ = @frac{${s3(m)}}{${s3(V)}} = ${s3(rhoG)} "g/cm"^3$`, `1 g/cm³ = 1000 kg/m³, so ρ = ${s3(rho)} kg/m³`] }; };
GEN.dens3 = () => { const rho = pk([800, 1000, 1030, 2700, 7900]), V = rnd(0.01, 2, 0.01), m = rho * V;
  return { q: `A tank holds ${V} m³ of a liquid of density ${rho} kg/m³. Calculate the mass of the liquid.`, ans: m, unit: 'kg', steps: ['$m = ρV$', `$m = ${rho} × ${V}$`, `$m = ${s3(m)} "kg"$`] }; };

/* ---------- 3.2 Latent heat ---------- */
const SLH = [['melt ice', 'fusion', 334000], ['boil away water', 'vaporisation', 2260000], ['melt lead', 'fusion', 23000], ['melt wax', 'fusion', 150000]];
GEN.slh1 = () => { const [what, kind, L] = pk(SLH), m = rnd(0.05, 3, 0.05), E = m * L;
  return { q: `Calculate the energy needed to ${what} of mass ${m} kg at its ${kind === 'fusion' ? 'melting' : 'boiling'} point. Specific latent heat of ${kind} = ${L} J/kg.`, ans: E, unit: 'J', steps: ['$E = mL$', `$E = ${m} × ${L}$`, `$E = ${s3(E)} "J"$`] }; };
GEN.slh2 = () => { const [, kind, L] = pk(SLH), m = rnd(0.1, 2, 0.1), E = m * L;
  return { q: `${s3(E)} J is needed to change the state of ${m} kg of a substance at constant temperature. Calculate its specific latent heat of ${kind}.`, ans: L, unit: 'J/kg', steps: ['$L = @frac{E}{m}$', `$L = @frac{${s3(E)}}{${m}}$`, `$L = ${s3(L)} "J/kg"$`] }; };
GEN.slh3 = () => { const P = pk([500, 1000, 1500, 2000]), t = rnd(60, 400, 10), m = rnd(0.05, 0.4, 0.01), L = P * t / m;
  return { q: `${an(P)} ${P} W heater boils away ${m} kg of a liquid in ${t} s. All the energy is used to change state. Calculate the specific latent heat of vaporisation.`, ans: L, unit: 'J/kg', steps: [`$E = Pt = ${P} × ${t} = ${s3(P * t)} "J"$`, '$L = @frac{E}{m}$', `$L = @frac{${s3(P * t)}}{${m}} = ${s3(L)} "J/kg"$`] }; };
GEN.shc4 = () => { const m = rnd(0.2, 2, 0.1), T0 = rnd(10, 30, 1), E1 = m * 4200 * (100 - T0), E2 = m * 2260000, E = E1 + E2;
  return { q: `Calculate the total energy needed to heat ${m} kg of water from ${T0} °C to 100 °C and then boil it all away. c = 4200 J/kg °C; specific latent heat of vaporisation = 2 260 000 J/kg.`, ans: E, unit: 'J', steps: [`Heating: $ΔE = mcΔθ = ${m} × 4200 × ${100 - T0} = ${s3(E1)} "J"$`, `Boiling: $E = mL = ${m} × 2 260 000 = ${s3(E2)} "J"$`, `Total = ${s3(E)} J`] }; };

/* ---------- 3.3 Gas pressure (pV = constant) ---------- */
GEN.boyle1 = () => { const p1 = pk([100, 120, 150, 200]) * 1000, V1 = rnd(20, 100, 5), V2 = rnd(10, 150, 5), p2 = p1 * V1 / V2;
  return { q: `A fixed mass of gas has a volume of ${V1} cm³ at ${p1} Pa. At constant temperature its volume changes to ${V2} cm³. Calculate the new pressure.`, ans: p2, unit: 'Pa', steps: ['$p_1V_1 = p_2V_2$', `$${p1} × ${V1} = p_2 × ${V2}$`, `$p_2 = ${s3(p2)} "Pa"$`] }; };
GEN.boyle2 = () => { const p1 = rnd(100, 300, 10), V1 = rnd(2, 10, 0.5), p2 = rnd(50, 500, 10), V2 = p1 * V1 / p2;
  return { q: `Air of volume ${V1} m³ at a pressure of ${p1} kPa is compressed or expanded at constant temperature until its pressure is ${p2} kPa. Calculate the new volume.`, ans: V2, unit: 'm³', steps: ['$p_1V_1 = p_2V_2$', `$V_2 = @frac{${p1} × ${V1}}{${p2}}$`, `$V_2 = ${s3(V2)} "m"^3$ (units of p cancel, so kPa is fine)`] }; };

/* ---------- 4.x Atomic ---------- */
const NUCLIDES = [['sodium', 23, 11], ['uranium', 238, 92], ['carbon', 14, 6], ['iodine', 131, 53], ['cobalt', 60, 27], ['radium', 226, 88], ['strontium', 90, 38], ['americium', 241, 95], ['potassium', 40, 19], ['polonium', 210, 84]];
GEN.nucl1 = () => { const [n, A, Z] = pk(NUCLIDES);
  return { q: `An atom of ${n}-${A} has atomic number ${Z}. How many neutrons does its nucleus contain?`, ans: A - Z, unit: 'neutrons', steps: ['neutrons = mass number − atomic number', `= ${A} − ${Z}`, `= ${A - Z}`] }; };
GEN.nucl2 = () => { const [n, A, Z] = pk(NUCLIDES), lost = pk([1, 2, 3]);
  return { q: `A neutral atom of ${n} (atomic number ${Z}) loses ${lost} outer electron${lost > 1 ? 's' : ''}. How many electrons does the ion have?`, ans: Z - lost, unit: 'electrons', steps: [`A neutral atom has electrons = protons = ${Z}`, `It loses ${lost}, becoming a positive ion`, `${Z} − ${lost} = ${Z - lost} electrons`] }; };
GEN.alpha1 = () => { const [n, A, Z] = pk(NUCLIDES.filter(x => x[1] > 200)), which = Math.random() < 0.5;
  return { q: `${n[0].toUpperCase() + n.slice(1)}-${A} (atomic number ${Z}) decays by alpha emission. What is the ${which ? 'mass number' : 'atomic number'} of the new nucleus?`, ans: which ? A - 4 : Z - 2, unit: '', steps: ['An alpha particle is ⁴₂He: mass number 4, atomic number 2', which ? `Mass number: ${A} − 4 = ${A - 4}` : `Atomic number: ${Z} − 2 = ${Z - 2}`] }; };
GEN.beta1 = () => { const [n, A, Z] = pk(NUCLIDES.filter(x => x[1] < 200)), which = Math.random() < 0.5;
  return { q: `${n[0].toUpperCase() + n.slice(1)}-${A} (atomic number ${Z}) decays by beta emission. What is the ${which ? 'mass number' : 'atomic number'} of the new nucleus?`, ans: which ? A : Z + 1, unit: '', steps: ['A beta particle is ⁰₋₁e: a neutron turns into a proton', which ? `Mass number unchanged: ${A}` : `Atomic number increases by 1: ${Z} + 1 = ${Z + 1}`] }; };
GEN.hl1 = () => { const A0 = pk([400, 640, 800, 1200, 1600, 3200, 6400]), T = pk([2, 5, 6, 8, 10, 12, 30]), n = pk([1, 2, 3, 4]), A = A0 / 2 ** n;
  return { q: `A radioactive sample has an activity of ${A0} Bq. Its half-life is ${T} days. Calculate its activity after ${n * T} days.`, ans: A, unit: 'Bq', steps: [`Number of half-lives = ${n * T} ÷ ${T} = ${n}`, `Activity = ${A0} × (½)^${n}`, `= ${s3(A)} Bq`] }; };
GEN.hl2 = () => { const A0 = pk([800, 1200, 1600, 2400]), n = pk([2, 3, 4]), T = pk([3, 4, 5, 6, 15, 20]), t = n * T;
  return { q: `The count rate from a source falls from ${A0} to ${A0 / 2 ** n} counts per minute in ${t} minutes. Calculate the half-life.`, ans: T, unit: 'minutes', steps: [`${A0} → ${Array.from({ length: n }, (_, i) => A0 / 2 ** (i + 1)).join(' → ')} is ${n} halvings`, `${n} half-lives = ${t} min`, `half-life = ${T} minutes`] }; };
GEN.hl3 = () => { const n = pk([2, 3, 4, 5]), f = 1 / 2 ** n;
  return { q: `What fraction of the original radioactive nuclei remains after ${n} half-lives? Give your answer as a decimal.`, ans: f, unit: '', steps: [`Each half-life multiplies the amount by ½`, `After ${n} half-lives: (½)^${n} = 1/${2 ** n}`, `= ${f}`] }; };
GEN.hl4 = () => { const n = pk([2, 3, 4, 5]), dec = (2 ** n - 1) / 2 ** n;
  return { q: `After ${n} half-lives, what is the net decline in activity as a fraction of the initial activity? Give a decimal (e.g. 3 : 4 = 0.75).`, ans: dec, unit: '', steps: [`Fraction remaining = 1/${2 ** n}`, `Net decline = 1 − 1/${2 ** n} = ${2 ** n - 1}/${2 ** n}`, `Ratio ${2 ** n - 1} : ${2 ** n} = ${s3(dec)}`] }; };
GEN.dose1 = () => { const mSv = rnd(0.5, 50, 0.5), Sv = mSv / 1000;
  return { q: `A worker receives a radiation dose of ${mSv} mSv. Convert this to sieverts.`, ans: Sv, unit: 'Sv', steps: ['1000 mSv = 1 Sv', `${mSv} ÷ 1000 = ${s3(Sv)} Sv`] }; };

/* ---------- 5.1 Weight, resultant ---------- */
const GS = [['Earth', 9.8], ['the Moon', 1.6], ['Mars', 3.7], ['Jupiter', 25]];
GEN.wmg1 = () => { const [pl, gg] = pk(GS), m = rnd(0.2, 120, 0.1), W = m * gg;
  return { q: `Calculate the weight of ${an(m).toLowerCase()} ${m} kg object on ${pl}, where g = ${gg} N/kg.`, ans: W, unit: 'N', steps: ['$W = mg$', `$W = ${m} × ${gg}$`, `$W = ${s3(W)} "N"$`] }; };
GEN.wmg2 = () => { const [pl, gg] = pk(GS), m = rnd(1, 90, 1), W = m * gg;
  return { q: `An object weighs ${s3(W)} N on ${pl} (g = ${gg} N/kg). Calculate its mass.`, ans: m, unit: 'kg', steps: ['$m = @frac{W}{g}$', `$m = @frac{${s3(W)}}{${gg}}$`, `$m = ${s3(m)} "kg"$`] }; };
GEN.res1 = () => { const F = rnd(200, 5000, 50), a = rnd(50, 1500, 50), b = rnd(20, 800, 20), R = F - a - b;
  return { q: `A car’s driving force is ${F} N. Air resistance is ${a} N and friction is ${b} N. Calculate the size of the resultant force.`, ans: Math.abs(R), unit: 'N', steps: [`Resistive forces: ${a} + ${b} = ${a + b} N (backwards)`, `Resultant = ${F} − ${a + b} = ${R} N`, `${Math.abs(R)} N ${R >= 0 ? 'forwards' : 'backwards'}`] }; };

/* ---------- 5.2 Work & springs ---------- */
GEN.work1 = () => { const F = rnd(5, 800, 5), s = rnd(0.5, 50, 0.5), W = F * s;
  return { q: `A force of ${F} N moves an object ${s} m in the direction of the force. Calculate the work done.`, ans: W, unit: 'J', steps: ['$W = Fs$', `$W = ${F} × ${s}$`, `$W = ${s3(W)} "J"$`] }; };
GEN.work2 = () => { const W = rnd(100, 20000, 100), s = rnd(2, 100, 2), F = W / s;
  return { q: `${W} J of work is done pushing a box ${s} m. Calculate the force applied.`, ans: F, unit: 'N', steps: ['$F = @frac{W}{s}$', `$F = @frac{${W}}{${s}}$`, `$F = ${s3(F)} "N"$`] }; };
GEN.hooke1 = () => { const k = rnd(10, 500, 10), e = rnd(1, 25, 1), F = k * e / 100;
  return { q: `A spring has a spring constant of ${k} N/m. Calculate the force needed to stretch it by ${e} cm.`, ans: F, unit: 'N', steps: [`e = ${e / 100} m`, '$F = ke$', `$F = ${k} × ${e / 100} = ${s3(F)} "N"$`] }; };
GEN.hooke2 = () => { const F = rnd(0.5, 20, 0.5), e = rnd(1, 20, 0.5), k = F / (e / 100);
  return { q: `A force of ${F} N stretches a spring by ${e} cm. Calculate the spring constant.`, ans: k, unit: 'N/m', steps: [`e = ${e / 100} m`, '$k = @frac{F}{e}$', `$k = @frac{${F}}{${e / 100}} = ${s3(k)} "N/m"$`] }; };
GEN.epe2 = () => { const k = rnd(20, 400, 20), E = rnd(0.1, 5, 0.1), e = Math.sqrt(2 * E / k);
  return { q: `A spring (k = ${k} N/m) stores ${E} J of elastic potential energy. Calculate its extension in metres.`, ans: e, unit: 'm', steps: ['$E_e = @frac{1}{2}ke^2$ so $e = @sqrt{@frac{2E_e}{k}}$', `$e = @sqrt{@frac{2 × ${E}}{${k}}}$`, `$e = ${s3(e)} "m"$`] }; };

/* ---------- 5.3 Moments (PO) ---------- */
GEN.mom1 = () => { const F = rnd(5, 300, 5), d = rnd(0.1, 2, 0.05), M = F * d;
  return { q: `A force of ${F} N acts at a perpendicular distance of ${d.toFixed(2)} m from a pivot. Calculate the moment.`, ans: M, unit: 'Nm', steps: ['$M = Fd$', `$M = ${F} × ${d.toFixed(2)}$`, `$M = ${s3(M)} "Nm"$`] }; };
GEN.mom2 = () => { const W1 = rnd(100, 700, 50), d1 = rnd(0.5, 2.5, 0.1), W2 = rnd(100, 700, 50), d2 = W1 * d1 / W2;
  return { q: `A seesaw is balanced. A child of weight ${W1} N sits ${d1.toFixed(1)} m from the pivot. How far from the pivot on the other side does a child of weight ${W2} N sit?`, ans: d2, unit: 'm', steps: ['Clockwise moment = anticlockwise moment', `$${W2} × d = ${W1} × ${d1.toFixed(1)}$`, `$d = ${s3(d2)} "m"$`] }; };
GEN.mom3 = () => { const F1 = rnd(10, 200, 10), d1 = rnd(0.1, 0.8, 0.05), d2 = rnd(0.2, 1.2, 0.05), F2 = F1 * d1 / d2;
  return { q: `A beam is pivoted at its centre. A ${F1} N weight hangs ${d1.toFixed(2)} m to the left of the pivot. What weight must hang ${d2.toFixed(2)} m to the right to balance it?`, ans: F2, unit: 'N', steps: ['Principle of moments', `$F × ${d2.toFixed(2)} = ${F1} × ${d1.toFixed(2)}$`, `$F = ${s3(F2)} "N"$`] }; };

/* ---------- 5.4 Fluid pressure (PO) ---------- */
GEN.pfa1 = () => { const F = rnd(10, 2000, 10), A = rnd(0.01, 2, 0.01), p = F / A;
  return { q: `A force of ${F} N acts on an area of ${A} m². Calculate the pressure.`, ans: p, unit: 'Pa', steps: ['$p = @frac{F}{A}$', `$p = @frac{${F}}{${A}}$`, `$p = ${s3(p)} "Pa"$`] }; };
GEN.pfa2 = () => { const W = rnd(300, 900, 10), cm2 = rnd(50, 400, 10), A = cm2 / 10000, p = W / A;
  return { q: `A person of weight ${W} N stands on an area of ${cm2} cm². Calculate the pressure on the floor in pascals.`, ans: p, unit: 'Pa', steps: [`A = ${cm2} cm² = ${cm2} ÷ 10 000 = ${A} m²`, '$p = @frac{F}{A}$', `$p = @frac{${W}}{${A}} = ${s3(p)} "Pa"$`] }; };
GEN.phrg1 = () => { const [liq, rho] = pk([['fresh water', 1000], ['seawater', 1030], ['oil', 800]]), h = rnd(0.5, 50, 0.5), p = h * rho * G9;
  return { q: `Calculate the pressure due to ${liq} (density ${rho} kg/m³) at a depth of ${h} m. g = 9.8 N/kg.`, ans: p, unit: 'Pa', steps: ['$p = hρg$', `$p = ${h} × ${rho} × 9.8$`, `$p = ${s3(p)} "Pa"$`] }; };
GEN.phrg2 = () => { const rho = pk([1000, 1030]), h1 = rnd(1, 20, 1), h2 = h1 + rnd(2, 30, 1), dp = (h2 - h1) * rho * G9;
  return { q: `A diver descends from ${h1} m to ${h2} m in water of density ${rho} kg/m³. g = 9.8 N/kg. Calculate the increase in pressure due to the water.`, ans: dp, unit: 'Pa', steps: [`Δh = ${h2} − ${h1} = ${h2 - h1} m`, '$Δp = Δh × ρ × g$', `$Δp = ${h2 - h1} × ${rho} × 9.8 = ${s3(dp)} "Pa"$`] }; };

/* ---------- 5.5 Motion ---------- */
GEN.svt1 = () => { const km = rnd(0.5, 20, 0.5), mins = rnd(2, 60, 1), v = km * 1000 / (mins * 60);
  return { q: `A cyclist travels ${km} km in ${mins} minutes. Calculate her average speed in m/s.`, ans: v, unit: 'm/s', steps: [`s = ${km * 1000} m; t = ${mins * 60} s`, '$v = @frac{s}{t}$', `$v = ${s3(v)} "m/s"$`] }; };
GEN.svt2 = () => { const v = pk([1.5, 3, 6, 13, 31, 50, 250, 330]), t = rnd(5, 200, 5), s = v * t;
  return { q: `An object travels at a constant ${v} m/s for ${t} s. Calculate the distance travelled.`, ans: s, unit: 'm', steps: ['$s = vt$', `$s = ${v} × ${t}$`, `$s = ${s3(s)} "m"$`] }; };
GEN.acc1 = () => { const u = rnd(0, 20, 1), v = u + rnd(4, 20, 1), t = Math.max(1, Math.round((v - u) / rnd(0.8, 4, 0.1) * 2) / 2), a = (v - u) / t;
  return { q: `A car accelerates from ${u} m/s to ${v} m/s in ${t} s. Calculate its acceleration.`, ans: a, unit: 'm/s²', steps: [`Δv = ${v} − ${u} = ${v - u} m/s`, '$a = @frac{Δv}{t}$', `$a = @frac{${v - u}}{${t}} = ${s3(a)} "m/s"^2$`] }; };
GEN.acc2 = () => { const a = rnd(0.2, 1.5, 0.1), t = rnd(5, 40, 5), u = rnd(0, 10, 1), v = u + a * t;
  return { q: `A train starts at ${u} m/s and accelerates at ${a} m/s² for ${t} s. Calculate its final velocity.`, ans: v, unit: 'm/s', steps: ['$Δv = at$', `$Δv = ${a} × ${t} = ${s3(a * t)} "m/s"$`, `$v = ${u} + ${s3(a * t)} = ${s3(v)} "m/s"$`] }; };
GEN.suv1 = () => { const u = rnd(10, 35, 1), s = rnd(20, 150, 5), a = u * u / (2 * s);
  return { q: `A car travelling at ${u} m/s decelerates uniformly to rest over ${s} m. Calculate the size of its deceleration.`, ans: a, unit: 'm/s²', steps: ['$v^2 - u^2 = 2as$ with v = 0', `$0 - ${u}^2 = 2 × a × ${s}$`, `$a = -${s3(a)} "m/s"^2$, so deceleration = ${s3(a)} m/s²`] }; };
GEN.suv2 = () => { const h = rnd(1, 80, 1), v = Math.sqrt(2 * G9 * h);
  return { q: `A stone is dropped from rest and falls ${h} m. Acceleration = 9.8 m/s². Ignoring air resistance, calculate its final velocity.`, ans: v, unit: 'm/s', steps: ['$v^2 - u^2 = 2as$ with u = 0', `$v^2 = 2 × 9.8 × ${h} = ${s3(2 * G9 * h)}$`, `$v = ${s3(v)} "m/s"$`] }; };
GEN.vtarea1 = () => { const v = rnd(4, 30, 2), t1 = rnd(2, 10, 1), t2 = rnd(2, 20, 1), s = 0.5 * v * t1 + v * t2;
  return { q: `A vehicle accelerates uniformly from rest to ${v} m/s in ${t1} s, then travels at ${v} m/s for a further ${t2} s. Use the area under the velocity–time graph to find the total distance.`, ans: s, unit: 'm', steps: [`Triangle: ½ × ${t1} × ${v} = ${s3(0.5 * v * t1)} m`, `Rectangle: ${t2} × ${v} = ${s3(v * t2)} m`, `Total = ${s3(s)} m`] }; };

/* ---------- 5.6 F = ma ---------- */
GEN.fma1 = () => { const m = pk([0.5, 2, 5, 60, 250, 900, 1200, 1500]), a = rnd(0.5, 8, 0.5), F = m * a;
  return { q: `An object of mass ${m} kg accelerates at ${a} m/s². Calculate the resultant force.`, ans: F, unit: 'N', steps: ['$F = ma$', `$F = ${m} × ${a}$`, `$F = ${s3(F)} "N"$`] }; };
GEN.fma2 = () => { const m = pk([2, 10, 50, 80, 400, 1000, 1500]), F = Math.round(m * rnd(0.5, 6, 0.1) / 10) * 10 || 10, a = F / m;
  return { q: `A resultant force of ${F} N acts on ${an(m).toLowerCase()} ${m} kg object. Calculate its acceleration.`, ans: a, unit: 'm/s²', steps: ['$a = @frac{F}{m}$', `$a = @frac{${F}}{${m}}$`, `$a = ${s3(a)} "m/s"^2$`] }; };
GEN.fma3 = () => { const a = rnd(0.5, 5, 0.25), m = rnd(100, 2000, 50), F = m * a;
  return { q: `A resultant force of ${s3(F)} N gives a vehicle an acceleration of ${a} m/s². Calculate its mass.`, ans: m, unit: 'kg', steps: ['$m = @frac{F}{a}$', `$m = @frac{${s3(F)}}{${a}}$`, `$m = ${s3(m)} "kg"$`] }; };
GEN.fma4 = () => { const m = rnd(40, 100, 5), v = rnd(4, 10, 1), t = rnd(3, 10, 0.5), a = v / t, F = m * a;
  return { q: `${an(m)} ${m} kg cyclist accelerates from rest to ${v} m/s in ${t} s. Calculate the resultant force on the cyclist.`, ans: F, unit: 'N', steps: [`$a = @frac{Δv}{t} = @frac{${v}}{${t}} = ${s3(a)} "m/s"^2$`, '$F = ma$', `$F = ${m} × ${s3(a)} = ${s3(F)} "N"$`] }; };

/* ---------- 5.7 Stopping ---------- */
GEN.think1 = () => { const v = rnd(8, 35, 1), rt = rnd(0.3, 1.2, 0.05), d = v * rt;
  return { q: `A driver has a reaction time of ${rt.toFixed(2)} s and is travelling at ${v} m/s. Calculate the thinking distance.`, ans: d, unit: 'm', steps: ['thinking distance = speed × reaction time', `= ${v} × ${rt.toFixed(2)}`, `= ${s3(d)} m`] }; };
GEN.brake1 = () => { const v1 = rnd(10, 20, 1), d1 = rnd(8, 25, 1), f = pk([1.5, 2, 3]), d2 = d1 * f * f;
  return { q: `At ${v1} m/s a car’s braking distance is ${d1} m. Assuming the same braking force, estimate its braking distance at ${v1 * f} m/s.`, ans: d2, unit: 'm', steps: ['Braking distance ∝ speed² (kinetic energy ∝ v²)', `Speed × ${f}, so distance × ${f}² = × ${f * f}`, `${d1} × ${f * f} = ${s3(d2)} m`] }; };
GEN.brake2 = () => { const m = rnd(800, 2000, 100), v = rnd(10, 30, 1), s = rnd(15, 80, 5), F = 0.5 * m * v * v / s;
  return { q: `${an(m)} ${m} kg car travelling at ${v} m/s brakes to rest in ${s} m. Estimate the average braking force.`, ans: F, unit: 'N', steps: [`Kinetic energy = ½ × ${m} × ${v}² = ${s3(0.5 * m * v * v)} J`, 'Work done by brakes = kinetic energy lost: F × s = Eₖ', `F = ${s3(0.5 * m * v * v)} ÷ ${s} = ${s3(F)} N`] }; };

/* ---------- 5.8 Momentum (HT) ---------- */
GEN.mom4 = () => { const m = pk([0.06, 0.16, 0.45, 5, 60, 70, 1000, 1200]), v = rnd(1, 40, 1), p = m * v;
  return { q: `Calculate the momentum of ${an(m).toLowerCase()} ${m} kg object moving at ${v} m/s.`, ans: p, unit: 'kg m/s', steps: ['$p = mv$', `$p = ${m} × ${v}$`, `$p = ${s3(p)} "kg m/s"$`] }; };
GEN.mom5 = () => { const m1 = rnd(0.5, 5, 0.5), u1 = rnd(1, 8, 0.5), m2 = rnd(0.5, 5, 0.5), v = m1 * u1 / (m1 + m2);
  return { q: `${an(m1)} ${m1} kg trolley moving at ${u1} m/s collides with a stationary ${m2} kg trolley. They stick together. Calculate their velocity just after the collision.`, ans: v, unit: 'm/s', steps: [`Momentum before = ${m1} × ${u1} = ${s3(m1 * u1)} kg m/s`, `Momentum after = (${m1} + ${m2}) × v`, `v = ${s3(m1 * u1)} ÷ ${s3(m1 + m2)} = ${s3(v)} m/s`] }; };
GEN.mom6 = () => { const mb = pk([0.01, 0.02, 0.05]), vb = rnd(200, 800, 50), mg = rnd(2, 6, 0.5), v = mb * vb / mg;
  return { q: `${an(mb)} ${mb} kg bullet is fired at ${vb} m/s from ${an(mg).toLowerCase()} ${mg} kg rifle, initially at rest. Calculate the recoil speed of the rifle.`, ans: v, unit: 'm/s', steps: ['Total momentum before = 0, so after it is also 0', `${mb} × ${vb} = ${mg} × v`, `v = ${s3(v)} m/s (backwards)`] }; };
GEN.fmdt1 = () => { const m = rnd(0.1, 80, 0.1), dv = rnd(2, 25, 1), dt = pk([0.005, 0.01, 0.02, 0.05, 0.1, 0.2, 0.5]), F = m * dv / dt;
  return { q: `An object of mass ${m} kg changes velocity by ${dv} m/s in ${dt} s. Calculate the average force.`, ans: F, unit: 'N', steps: ['$F = @frac{mΔv}{Δt}$', `$F = @frac{${m} × ${dv}}{${dt}}$`, `$F = ${s3(F)} "N"$`] }; };

/* ---------- 6.x Waves ---------- */
GEN.vfl1 = () => { const f = pk([2, 5, 50, 256, 440, 1000, 2000]), l = rnd(0.01, 3, 0.01), v = f * l;
  return { q: `A wave has a frequency of ${f} Hz and a wavelength of ${l} m. Calculate its speed.`, ans: v, unit: 'm/s', steps: ['$v = fλ$', `$v = ${f} × ${l}$`, `$v = ${s3(v)} "m/s"$`] }; };
GEN.vfl2 = () => { const v = pk([330, 340, 1500, 5000]), f = pk([50, 100, 256, 440, 512, 1000, 20000]), l = v / f;
  return { q: `A sound wave of frequency ${f} Hz travels at ${v} m/s. Calculate its wavelength.`, ans: l, unit: 'm', steps: ['$λ = @frac{v}{f}$', `$λ = @frac{${v}}{${f}}$`, `$λ = ${s3(l)} "m"$`] }; };
GEN.period1 = () => { const f = pk([0.5, 2, 4, 5, 10, 20, 50, 100]), T = 1 / f;
  return { q: `Calculate the period of a wave with frequency ${f} Hz.`, ans: T, unit: 's', steps: ['$T = @frac{1}{f}$', `$T = @frac{1}{${f}}$`, `$T = ${s3(T)} "s"$`] }; };
GEN.sound1 = () => { const f = pk([200, 400, 500, 800]), v1 = 330, v2 = 1500, l2 = v2 / f;
  return { q: `${an(f)} ${f} Hz sound passes from air (330 m/s) into water (1500 m/s). Calculate its wavelength in water.`, ans: l2, unit: 'm', steps: ['Frequency stays the same when sound changes medium', '$λ = @frac{v}{f}$', `$λ = @frac{1500}{${f}} = ${s3(l2)} "m"$`] }; };
GEN.echo1 = () => { const v = 1500, t = rnd(0.2, 4, 0.1), d = v * t / 2;
  return { q: `A ship’s echo sounder receives an echo from the sea bed ${t} s after the pulse is sent. Sound travels at 1500 m/s in seawater. Calculate the depth.`, ans: d, unit: 'm', steps: [`Total distance = ${v} × ${t} = ${s3(v * t)} m (there and back)`, 'Depth = total ÷ 2', `= ${s3(d)} m`] }; };
GEN.echo2 = () => { const v = 1500, us = rnd(20, 200, 5), t = us * 1e-6, d = v * t / 2 * 100;
  return { q: `In an ultrasound scan, an echo from a boundary returns ${us} μs after the pulse is sent. The speed of ultrasound in tissue is 1500 m/s. How deep is the boundary, in cm?`, ans: d, unit: 'cm', steps: [`t = ${us} μs = ${us} × 10⁻⁶ s`, `distance there and back = 1500 × ${s3(t)} = ${s3(v * t)} m`, `depth = ÷ 2 = ${s3(v * t / 2)} m = ${s3(d)} cm`] }; };
GEN.em1 = () => { const MHz = pk([88, 100, 105, 900, 1800, 2400]), f = MHz * 1e6, l = 3e8 / f;
  return { q: `Electromagnetic waves travel at 3.0 × 10⁸ m/s. Calculate the wavelength of ${an(MHz).toLowerCase()} ${MHz} MHz wave.`, ans: l, unit: 'm', steps: [`f = ${MHz} × 10⁶ Hz`, '$λ = @frac{v}{f}$', `$λ = @frac{3.0 × 10^8}{${MHz} × 10^6} = ${s3(l)} "m"$`] }; };
GEN.em2 = () => { const nm = rnd(400, 700, 10), f = 3e8 / (nm * 1e-9);
  return { q: `Light has a wavelength of ${nm} nm. Calculate its frequency. (v = 3.0 × 10⁸ m/s)`, ans: f, unit: 'Hz', steps: [`λ = ${nm} × 10⁻⁹ m`, '$f = @frac{v}{λ}$', `$f = ${s3(f)} "Hz"$`] }; };
GEN.mag1 = () => { const o = rnd(0.5, 10, 0.5), m = rnd(0.2, 8, 0.1), i = o * m;
  return { q: `An object ${o} cm tall forms an image ${s3(i)} cm tall through a lens. Calculate the magnification.`, ans: m, unit: '(no unit)', steps: ['magnification = image height ÷ object height', `= ${s3(i)} ÷ ${o}`, `= ${s3(m)}`] }; };
GEN.mag2 = () => { const o = rnd(1, 20, 1), m = rnd(1.5, 6, 0.5), i = o * m;
  return { q: `A magnifying glass has a magnification of ${m}. An insect is ${o} mm long. How long does its image appear?`, ans: i, unit: 'mm', steps: ['image height = magnification × object height', `= ${m} × ${o}`, `= ${s3(i)} mm`] }; };

/* ---------- 7.x Magnetism ---------- */
GEN.bil1 = () => { const B = rnd(0.02, 1.5, 0.01), I = rnd(0.5, 10, 0.5), l = rnd(0.02, 0.8, 0.01), F = B * I * l;
  return { q: `A wire of length ${l} m carries a current of ${I} A at right angles to a magnetic field of flux density ${B} T. Calculate the force on the wire.`, ans: F, unit: 'N', steps: ['$F = BIl$', `$F = ${B} × ${I} × ${l}$`, `$F = ${s3(F)} "N"$`] }; };
GEN.bil2 = () => { const B = rnd(0.05, 1.2, 0.05), I = rnd(0.5, 8, 0.5), l = rnd(0.05, 0.6, 0.05), F = B * I * l;
  return { q: `A force of ${s3(F)} N acts on ${an(l).toLowerCase()} ${l} m length of wire carrying ${I} A at right angles to a magnetic field. Calculate the magnetic flux density.`, ans: B, unit: 'T', steps: ['$B = @frac{F}{Il}$', `$B = @frac{${s3(F)}}{${I} × ${l}}$`, `$B = ${s3(B)} "T"$`] }; };
GEN.trans1 = () => { const np = rnd(50, 2000, 50), ns = rnd(20, 8000, 20), Vp = pk([12, 25, 230, 400]), Vs = Vp * ns / np;
  return { q: `A transformer has ${np} turns on its primary coil and ${ns} turns on its secondary coil. The primary pd is ${Vp} V. Calculate the secondary pd.`, ans: Vs, unit: 'V', steps: ['$@frac{V_p}{V_s} = @frac{n_p}{n_s}$', `$V_s = V_p × @frac{n_s}{n_p} = ${Vp} × @frac{${ns}}{${np}}$`, `$V_s = ${s3(Vs)} "V"$ (${Vs > Vp ? 'step-up' : 'step-down'})`] }; };
GEN.trans2 = () => { const Vp = 230, Vs = pk([5, 6, 9, 12, 24]), Is = rnd(0.2, 5, 0.1), Ip = Vs * Is / Vp;
  return { q: `A 100% efficient transformer steps ${Vp} V down to ${Vs} V. The secondary current is ${Is} A. Calculate the primary current.`, ans: Ip, unit: 'A', steps: ['$V_pI_p = V_sI_s$', `$${Vp} × I_p = ${Vs} × ${Is} = ${s3(Vs * Is)} "W"$`, `$I_p = ${s3(Ip)} "A"$`] }; };
GEN.trans3 = () => { const Vp = pk([25000, 11000, 230]), ratio = pk([2, 4, 10, 16, 20]), up = Math.random() < 0.5, Vs = up ? Vp * ratio : Vp / ratio, np = rnd(100, 2000, 100), ns = np * Vs / Vp;
  return { q: `A transformer changes ${Vp} V to ${s3(Vs)} V. The primary coil has ${np} turns. Calculate the number of turns on the secondary coil.`, ans: ns, unit: 'turns', steps: ['$@frac{n_s}{n_p} = @frac{V_s}{V_p}$', `$n_s = ${np} × @frac{${s3(Vs)}}{${Vp}}$`, `$n_s = ${s3(ns)}$`] }; };

/* ---------- Skills ---------- */
GEN.mean1 = () => { const base = rnd(1, 9, 0.1), vals = Array.from({ length: 4 }, () => +(base + (Math.random() - 0.5) * 0.4).toFixed(2)), m = vals.reduce((a, b) => a + b) / vals.length;
  return { q: `Calculate the mean of these repeat readings (in s): ${vals.join(', ')}.`, ans: m, unit: 's', steps: [`Sum = ${s3(vals.reduce((a, b) => a + b))}`, `Mean = sum ÷ ${vals.length} = ${s3(m)} s`] }; };
GEN.unc1 = () => { const base = rnd(2, 20, 0.5), vals = [base, +(base + rnd(0.1, 0.6, 0.1)).toFixed(1), +(base - rnd(0.1, 0.6, 0.1)).toFixed(1)], r = Math.max(...vals) - Math.min(...vals);
  return { q: `Repeat readings are ${vals.join(' cm, ')} cm. Estimate the uncertainty (± half the range).`, ans: r / 2, unit: 'cm', steps: [`Range = ${Math.max(...vals)} − ${Math.min(...vals)} = ${s3(r)} cm`, `Uncertainty ≈ ± ${s3(r / 2)} cm`] }; };
GEN.sf1 = () => { const a = rnd(1.5, 9.5, 0.5), ea = pk([3, 5, 6, 8]), b = rnd(1.5, 9.5, 0.5), eb = -pk([2, 3, 4, 6]), v = a * 10 ** ea * b * 10 ** eb;
  return { q: `Calculate (${a} × 10<sup>${ea}</sup>) × (${b} × 10<sup>${String(eb).replace('-', '−')}</sup>). Give your answer in e-notation, e.g. 4.2e3.`, ans: v, unit: '', steps: [`Multiply the numbers: ${a} × ${b} = ${s3(a * b)}`, `Add the powers: 10<sup>${ea} + (${eb})</sup> = 10<sup>${ea + eb}</sup>`, `= ${sf(v, 3)}`] }; };
GEN.prefix1 = () => { const [pre, p] = pk([['k', 3], ['M', 6], ['m', -3], ['μ', -6], ['n', -9], ['G', 9]]), n = rnd(1, 900, 1), unit = pk(['W', 'J', 'm', 'A', 'Hz']), v = n * 10 ** p;
  return { q: `Convert ${n} ${pre}${unit} into ${unit}. Use e-notation for powers of ten.`, ans: v, unit, steps: [`${pre} = 10<sup>${p}</sup>`, `${n} × 10<sup>${p}</sup> = ${sf(v, 3)} ${unit}`] }; };
GEN.rearr1 = () => { const R = rnd(2, 50, 1), I = rnd(0.5, 6, 0.5), P = I * I * R;
  return { q: `Use P = I²R to find the current when P = ${s3(P)} W and R = ${R} Ω.`, ans: I, unit: 'A', steps: ['$I = @sqrt{@frac{P}{R}}$', `$I = @sqrt{@frac{${s3(P)}}{${R}}} = @sqrt{${s3(P / R)}}$`, `$I = ${s3(I)} "A"$`] }; };
