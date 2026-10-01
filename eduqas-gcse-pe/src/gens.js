/* ==========================================================
   Numerical question generators — PE maths: fitness data, physiology and biomechanics.
   Each returns { q, ans, unit, steps[] } with fresh values; answers are computed so every
   question is self-consistent. Answers within 2% are accepted by the checker. g = 9.8 N/kg.
   ========================================================== */
const GEN = {};
const GEN_FLAGS = {};
const s3 = x => sf(x, 3);
const r1 = x => Math.round(x * 10) / 10, r2 = x => Math.round(x * 100) / 100;
const pk = a => a[Math.floor(Math.random() * a.length)];
const G = 9.8;

/* ---------- Data handling ---------- */
const TESTS = [['multi-stage fitness test level', 6, 13, 0.1, ''], ['vertical jump', 30, 65, 1, 'cm'], ['sit and reach', 5, 35, 1, 'cm'], ['30 m sprint', 3.9, 5.2, 0.01, 's'], ['handgrip strength', 25, 60, 1, 'kg'], ['1 minute press-up test', 15, 55, 1, 'reps'], ['VO₂max', 35, 65, 0.5, 'ml/kg/min']];
GEN.pctchange = () => { const [n, lo, hi, st, u] = pk(TESTS), a = rnd(lo, hi, st), b = +(a * (1 + (n.includes('sprint') ? -rnd(2, 8, 0.5) : rnd(3, 20, 1)) / 100)).toFixed(st < 0.1 ? 2 : st < 1 ? 1 : 0), pc = (b - a) / a * 100;
  return { q: `An athlete’s ${n} changes from ${a}${u ? ' ' + u : ''} to ${b}${u ? ' ' + u : ''} after training. Calculate the percentage change (use a negative value for a decrease).`, ans: pc, unit: '%', steps: ['% change = (new − old) ÷ old × 100', `= (${b} − ${a}) ÷ ${a} × 100`, `= ${r1(pc)}%`] }; };
GEN.mean1 = () => { const [n, lo, hi, st, u] = pk(TESTS), xs = Array.from({ length: pk([3, 4, 5]) }, () => rnd(lo, hi, st)), m = xs.reduce((a, b) => a + b, 0) / xs.length;
  return { q: `An athlete completes ${xs.length} trials of the ${n}: ${xs.join(', ')}${u ? ' ' + u : ''}. Calculate the mean.`, ans: m, unit: u || '', steps: [`sum = ${r2(xs.reduce((a, b) => a + b, 0))}`, `mean = sum ÷ ${xs.length} = ${r2(m)}`] }; };
GEN.partdata = () => { const pop = rnd(800, 4000, 50), p = rnd(0.2, 0.65, 0.01), n = Math.round(pop * p), pc = n / pop * 100;
  const who = pk(['pupils in a school', 'adults in a town survey', 'girls aged 11–16 in a region', 'members of a leisure centre']);
  return { q: `In a survey of ${pop} ${who}, ${n} took part in sport three or more times a week. Calculate the participation rate.`, ans: pc, unit: '%', steps: ['rate = participants ÷ total × 100', `= ${n} ÷ ${pop} × 100 = ${r1(pc)}%`] }; };
GEN.unitconv = () => { const t = pk(['kmh', 'ml', 'min', 'rev']);
  if (t === 'kmh') { const k = rnd(10, 72, 1); return { q: `Convert ${k} km/h to m/s.`, ans: k / 3.6, unit: 'm/s', steps: ['m/s = km/h ÷ 3.6', `${k} ÷ 3.6 = ${r2(k / 3.6)} m/s`] }; }
  if (t === 'ml') { const m = rnd(60, 180, 5), hr = rnd(60, 190, 1); return { q: `Stroke volume is ${m} ml and heart rate is ${hr} bpm. Give the cardiac output in L/min.`, ans: m * hr / 1000, unit: 'L/min', steps: [`Q = HR × SV = ${hr} × ${m} = ${m * hr} ml/min`, `÷ 1000 = ${r2(m * hr / 1000)} L/min`] }; }
  if (t === 'min') { const mm = rnd(1, 4, 1), ss = rnd(0, 59, 1), d = pk([400, 800, 1500]); const tt = mm * 60 + ss; return { q: `An athlete runs ${d} m in ${mm} min ${ss} s. Calculate the average speed.`, ans: d / tt, unit: 'm/s', steps: [`time = ${mm} × 60 + ${ss} = ${tt} s`, `speed = ${d} ÷ ${tt} = ${r2(d / tt)} m/s`] }; }
  const r = rnd(0.5, 4, 0.5), t2 = rnd(0.6, 2.5, 0.1), w = r * 2 * Math.PI / t2; return { q: `A skater completes ${r} revolutions in ${t2} s. Calculate the average angular velocity in rad/s.`, ans: w, unit: 'rad/s', steps: [`θ = ${r} × 2π = ${r2(r * 2 * Math.PI)} rad`, `ω = θ ÷ t = ${r2(w)} rad/s`] }; };

/* ---------- Levers ---------- */
GEN.lever1 = () => { const ea = rnd(2, 12, 0.5), la = rnd(ea < 6 ? 20 : 3, 40, 1), ma = ea / la;
  return { q: `A lever has an effort arm of ${ea} cm and a load arm of ${la} cm. Calculate the mechanical advantage.`, ans: ma, unit: '', steps: ['MA = effort arm ÷ load arm', `= ${ea} ÷ ${la} = ${r2(ma)}`, ma > 1 ? 'MA > 1: mechanical advantage (as in a 2nd-order lever)' : 'MA < 1: mechanical disadvantage (as in a 3rd-order lever) — gains speed and range'] }; };

/* ---------- Heart rate and training zones ---------- */
GEN.maxhr = () => { const age = rnd(14, 60, 1); return { q: `Estimate the maximum heart rate of a ${age}-year-old using 220 − age.`, ans: 220 - age, unit: 'bpm', steps: [`HRmax = 220 − ${age} = ${220 - age} bpm`] }; };
GEN.karvonen = () => { const age = rnd(15, 45, 1), rest = rnd(48, 78, 1), pc = pk([60, 65, 70, 75, 80, 85]), mx = 220 - age, thr = rest + pc / 100 * (mx - rest);
  return { q: `A ${age}-year-old has a resting heart rate of ${rest} bpm. Using the Karvonen formula, calculate the training heart rate at ${pc}% intensity.`, ans: thr, unit: 'bpm', steps: [`HRmax = 220 − ${age} = ${mx}`, `HR reserve = ${mx} − ${rest} = ${mx - rest}`, `THR = ${rest} + ${pc / 100} × ${mx - rest} = ${r1(thr)} bpm`] }; };
GEN.wr1 = () => { const w = pk([10, 15, 20, 30, 45, 60, 90]), r = w * pk([0.5, 1, 2, 3, 5]);
  return { q: `An interval session uses ${w} s of work and ${r} s of recovery. Express the work : rest ratio as 1 : x — find x.`, ans: r / w, unit: '', steps: [`ratio = ${w} : ${r}`, `divide by ${w}: 1 : ${r2(r / w)}`] }; };
GEN.rm1 = () => { const rm = rnd(40, 180, 5), pc = pk([50, 60, 70, 75, 80, 85, 90]), load = rm * pc / 100, goal = pc >= 85 ? 'maximum strength' : pc >= 70 ? 'hypertrophy' : 'muscular endurance';
  return { q: `An athlete’s one-rep max (1RM) for squats is ${rm} kg. Calculate the load for sets at ${pc}% of 1RM.`, ans: load, unit: 'kg', steps: [`load = ${pc}% × ${rm} = ${r1(load)} kg`, `${pc}% of 1RM suits ${goal} training`] }; };

/* ---------- Energy systems and VO2 ---------- */
GEN.pcrecover = () => { const t = pk([30, 60, 90, 120, 180]), pc = { 30: 50, 60: 75, 90: 87, 120: 93, 180: 98 }[t];
  return { q: `PC stores recover about ${pc}% after ${t} s of rest. A sprinter’s PC stores were depleted by 80 mmol/kg. Estimate how much PC (mmol/kg) has been restored after ${t} s.`, ans: 80 * pc / 100, unit: 'mmol/kg', steps: [`restored = ${pc}% × 80 = ${r1(80 * pc / 100)} mmol/kg`, 'full restoration takes about 2–3 minutes'] }; };
GEN.vo2rel = () => { const abs = rnd(2.4, 5.2, 0.1), kg = rnd(50, 95, 1), rel = abs * 1000 / kg;
  return { q: `An athlete’s absolute VO₂max is ${abs} L/min and body mass is ${kg} kg. Calculate the relative VO₂max in ml/kg/min.`, ans: rel, unit: 'ml/kg/min', steps: [`${abs} L/min = ${Math.round(abs * 1000)} ml/min`, `relative = ${Math.round(abs * 1000)} ÷ ${kg} = ${r1(rel)} ml/kg/min`] }; };

/* ---------- Nutrition and hydration ---------- */
GEN.dehyd = () => { const m = rnd(50, 100, 0.5), loss = rnd(0.4, 2.5, 0.1), pc = loss / m * 100;
  return { q: `A player weighs ${m} kg before training and ${r1(m - loss)} kg after. Calculate the percentage of body mass lost.`, ans: pc, unit: '%', steps: [`mass lost = ${loss} kg`, `% = ${loss} ÷ ${m} × 100 = ${r2(pc)}%`, pc >= 2 ? 'at or above 2% — performance is likely to be impaired' : 'below 2%, but still rehydrate'] }; };
GEN.rehyd = () => { const loss = rnd(0.3, 2.8, 0.1); return { q: `An athlete loses ${loss} kg of body mass through sweat. How much fluid should she drink to rehydrate (use 1.5 L per kg lost)?`, ans: loss * 1.5, unit: 'L', steps: [`fluid = 1.5 × ${loss} = ${r2(loss * 1.5)} L`] }; };
GEN.energybal = () => { const c = rnd(250, 700, 10), f = rnd(60, 140, 5), p = rnd(80, 200, 5), E = c * 17 + f * 37 + p * 17;
  return { q: `An endurance athlete eats ${c} g carbohydrate, ${f} g fat and ${p} g protein in a day. Calculate her energy intake in kJ (17, 37 and 17 kJ/g).`, ans: E, unit: 'kJ', steps: [`carbohydrate ${c} × 17 = ${c * 17}`, `fat ${f} × 37 = ${f * 37}`, `protein ${p} × 17 = ${p * 17}`, `total = ${E} kJ`] }; };
GEN.carbneed = () => { const kg = rnd(50, 95, 1), gk = pk([5, 6, 7, 8, 10]); return { q: `An athlete of ${kg} kg in ${gk >= 8 ? 'heavy endurance' : 'moderate'} training needs ${gk} g of carbohydrate per kg per day. Calculate the daily carbohydrate requirement.`, ans: kg * gk, unit: 'g', steps: [`${kg} × ${gk} = ${kg * gk} g`] }; };
GEN.creatine = () => { const kg = rnd(55, 110, 1), dose = 0.3, d = kg * dose; return { q: `A creatine loading phase uses 0.3 g per kg of body mass per day. Calculate the daily dose for a ${kg} kg rugby player.`, ans: d, unit: 'g', steps: [`${kg} × 0.3 = ${r1(d)} g per day (split into several doses)`] }; };
GEN.caffeine = () => { const kg = rnd(50, 95, 1), mg = pk([3, 4, 5, 6]); return { q: `A cyclist of ${kg} kg plans ${mg} mg of caffeine per kg of body mass. Calculate the dose in mg.`, ans: kg * mg, unit: 'mg', steps: [`${kg} × ${mg} = ${kg * mg} mg`] }; };
GEN.carbload = () => { const kg = rnd(50, 90, 1), gk = pk([8, 9, 10, 12]), days = pk([2, 3]); return { q: `During carbo-loading a ${kg} kg marathon runner eats ${gk} g of carbohydrate per kg per day for ${days} days. Calculate the total carbohydrate eaten over the loading phase.`, ans: kg * gk * days, unit: 'g', steps: [`per day ${kg} × ${gk} = ${kg * gk} g`, `× ${days} days = ${kg * gk * days} g`] }; };

/* ---------- Cardiovascular and respiratory ---------- */
GEN.cardout = () => { const hr = rnd(55, 195, 1), sv = rnd(60, 190, 5), q = hr * sv / 1000;
  return { q: `Calculate cardiac output when heart rate is ${hr} bpm and stroke volume is ${sv} ml.`, ans: q, unit: 'L/min', steps: ['Q = HR × SV', `= ${hr} × ${sv} = ${hr * sv} ml/min`, `= ${r2(q)} L/min`] }; };
GEN.svcalc = () => { const hr = rnd(50, 190, 1), sv = rnd(60, 180, 5), q = r2(hr * sv / 1000), ml = Math.round(q * 1000);
  return { q: `An athlete’s cardiac output is ${q} L/min at a heart rate of ${hr} bpm. Calculate the stroke volume in ml.`, ans: ml / hr, unit: 'ml', steps: ['SV = Q ÷ HR', `= ${ml} ml/min ÷ ${hr}`, `≈ ${r1(ml / hr)} ml`] }; };
GEN.hrcalc = () => { const sv = rnd(70, 180, 5), qv = rnd(4.5, 30, 0.5), hr = qv * 1000 / sv;
  return { q: `Cardiac output is ${qv} L/min and stroke volume is ${sv} ml. Calculate the heart rate.`, ans: hr, unit: 'bpm', steps: ['HR = Q ÷ SV', `= ${Math.round(qv * 1000)} ÷ ${sv} = ${r1(hr)} bpm`] }; };
GEN.shuntcalc = () => { const q = pk([5, 15, 20, 25, 30]), pc = q <= 5 ? rnd(15, 22, 1) : rnd(70, 88, 1), v = q * pc / 100;
  return { q: `Cardiac output is ${q} L/min and ${pc}% goes to skeletal muscle. Calculate the blood flow to the muscles.`, ans: v, unit: 'L/min', steps: [`${pc}% × ${q} = ${r2(v)} L/min`] }; };
GEN.bpcalc = () => { const q = rnd(5, 25, 0.5), r = rnd(3, 20, 0.5), bp = q * r; return { q: `Using BP = Q × R, calculate blood pressure (arbitrary units) when cardiac output is ${q} L/min and resistance is ${r} units.`, ans: bp, unit: 'units', steps: [`BP = ${q} × ${r} = ${r1(bp)}`] }; };
GEN.vecalc = () => { const tv = rnd(0.5, 3, 0.1), f = rnd(12, 55, 1), ve = tv * f; return { q: `Calculate minute ventilation when tidal volume is ${tv} L and breathing frequency is ${f} breaths/min.`, ans: ve, unit: 'L/min', steps: ['V_E = TV × f', `= ${tv} × ${f} = ${r1(ve)} L/min`] }; };
GEN.tvcalc = () => { const tv = rnd(0.5, 3, 0.1), f = rnd(12, 55, 1), ve = +(tv * f).toFixed(1); return { q: `Minute ventilation is ${ve} L/min and breathing frequency is ${f} breaths/min. Calculate tidal volume.`, ans: ve / f, unit: 'L', steps: ['TV = V_E ÷ f', `= ${ve} ÷ ${f} = ${r2(ve / f)} L`] }; };
GEN.efcalc = () => { const edv = rnd(100, 200, 5), sv = Math.round(edv * rnd(0.5, 0.85, 0.01)), ef = sv / edv * 100;
  return { q: `The left ventricle holds ${edv} ml at the end of diastole and ejects ${sv} ml. Calculate the ejection fraction.`, ans: ef, unit: '%', steps: ['EF = SV ÷ EDV × 100', `= ${sv} ÷ ${edv} × 100 = ${r1(ef)}%`] }; };
GEN.bradycalc = () => { const q = rnd(4.6, 5.4, 0.1), sv = rnd(80, 130, 5), hr = q * 1000 / sv;
  return { q: `After training, an athlete’s resting stroke volume is ${sv} ml and resting cardiac output is ${q} L/min. Calculate her resting heart rate.`, ans: hr, unit: 'bpm', steps: [`HR = ${Math.round(q * 1000)} ÷ ${sv} = ${r1(hr)} bpm`, hr < 60 ? 'below 60 bpm — bradycardia' : 'above 60 bpm'] }; };

/* ---------- Biomechanics ---------- */
GEN.fma = () => { const t = pk(['F', 'a', 'm']), m = rnd(0.4, 110, 0.1), a = rnd(0.5, 12, 0.1), F = m * a;
  if (t === 'F') return { q: `A ${m} kg ${m < 5 ? 'ball' : 'athlete'} accelerates at ${a} m/s². Calculate the net force.`, ans: F, unit: 'N', steps: ['F = ma', `= ${m} × ${a} = ${r1(F)} N`] };
  if (t === 'a') return { q: `A net force of ${r1(F)} N acts on a ${m} kg ${m < 5 ? 'ball' : 'athlete'}. Calculate the acceleration.`, ans: r1(F) / m, unit: 'm/s²', steps: ['a = F ÷ m', `= ${r1(F)} ÷ ${m} = ${r2(r1(F) / m)} m/s²`] };
  return { q: `A net force of ${r1(F)} N gives an acceleration of ${a} m/s². Calculate the mass.`, ans: r1(F) / a, unit: 'kg', steps: ['m = F ÷ a', `= ${r1(F)} ÷ ${a} = ${r2(r1(F) / a)} kg`] }; };
GEN.weight = () => { const m = rnd(45, 130, 0.5); return { q: `Calculate the weight of a ${m} kg athlete (g = 9.8 N/kg).`, ans: m * G, unit: 'N', steps: ['W = mg', `= ${m} × 9.8 = ${r1(m * G)} N`] }; };
GEN.momentum = () => { const m = rnd(0.06, 120, 0.01), v = rnd(1, 40, 0.5), obj = m < 1 ? 'ball' : m < 10 ? 'shot' : 'player';
  return { q: `Calculate the momentum of a ${r2(m)} kg ${obj} moving at ${v} m/s.`, ans: r2(m) * v, unit: 'kg m/s', steps: ['p = mv', `= ${r2(m)} × ${v} = ${r2(r2(m) * v)} kg m/s`] }; };
GEN.impulse = () => { const m = rnd(0.05, 0.45, 0.01), u = 0, v = rnd(15, 45, 1), I = m * (v - u);
  return { q: `A ${m} kg ball is struck from rest and leaves at ${v} m/s. Calculate the impulse applied.`, ans: I, unit: 'N s', steps: ['impulse = change in momentum = m(v − u)', `= ${m} × (${v} − 0) = ${r2(I)} N s`] }; };
GEN.impforce = () => { const m = rnd(60, 110, 1), v = rnd(3, 9, 0.5), t = rnd(0.2, 0.8, 0.05), F = m * v / t;
  return { q: `A ${m} kg player running at ${v} m/s is stopped in a tackle lasting ${t} s. Calculate the average force needed.`, ans: F, unit: 'N', steps: [`change in momentum = ${m} × ${v} = ${m * v} kg m/s`, `F = impulse ÷ t = ${m * v} ÷ ${t} = ${r1(F)} N`] }; };
GEN.friction = () => { const mu = rnd(0.3, 1.2, 0.05), m = rnd(50, 100, 1), R = m * G, F = mu * R;
  return { q: `A ${m} kg sprinter stands on a track. The coefficient of friction between spikes and track is ${mu}. Calculate the maximum friction force (R = weight, g = 9.8 N/kg).`, ans: F, unit: 'N', steps: [`R = mg = ${m} × 9.8 = ${r1(R)} N`, `F = μR = ${mu} × ${r1(R)} = ${r1(F)} N`] }; };
GEN.speed = () => { const d = pk([50, 100, 200, 400, 800, 1500, 5000]), sp = d <= 400 ? rnd(6.5, 10.2, 0.1) : rnd(4, 7.5, 0.1), t = +(d / sp).toFixed(2);
  return { q: `An athlete covers ${d} m in ${t} s. Calculate the average speed.`, ans: d / t, unit: 'm/s', steps: ['speed = distance ÷ time', `= ${d} ÷ ${t} = ${r2(d / t)} m/s`] }; };
GEN.accel = () => { const u = pk([0, 0, rnd(1, 6, 0.5)]), v = u + rnd(2, 10, 0.1), t = rnd(0.8, 5, 0.1), a = (v - u) / t;
  return { q: `A player accelerates from ${u} m/s to ${r1(v)} m/s in ${t} s. Calculate the acceleration.`, ans: (r1(v) - u) / t, unit: 'm/s²', steps: ['a = (v − u) ÷ t', `= (${r1(v)} − ${u}) ÷ ${t} = ${r2((r1(v) - u) / t)} m/s²`] }; };
GEN.splits = () => { const t1 = rnd(4.5, 6.5, 0.01), dt = rnd(1.7, 2.2, 0.01), t2 = +(t1 + dt).toFixed(2), d1 = pk([30, 40, 50]), d2 = d1 + 20;
  return { q: `A sprinter passes ${d1} m at ${t1} s and ${d2} m at ${t2} s. Calculate the average speed between these points.`, ans: 20 / (t2 - t1), unit: 'm/s', steps: [`distance = 20 m; time = ${t2} − ${t1} = ${r2(t2 - t1)} s`, `speed = 20 ÷ ${r2(t2 - t1)} = ${r2(20 / (t2 - t1))} m/s`] }; };
GEN.displace = () => { const pool = pk([25, 50]), lengths = pk([2, 3, 4, 5, 6, 8]), t = rnd(25, 300, 1), d = pool * lengths, disp = lengths % 2 ? pool : 0, v = disp / t;
  return { q: `A swimmer swims ${lengths} lengths of a ${pool} m pool in ${t} s. Calculate her average velocity (her displacement from the start divided by time).`, ans: v, unit: 'm/s', steps: [`distance = ${d} m`, `displacement = ${disp} m (${lengths % 2 ? 'she finishes at the far end' : 'she finishes where she started'})`, `velocity = ${disp} ÷ ${t} = ${r2(v)} m/s`] }; };
GEN.angvel = () => { const deg = pk([90, 180, 270, 360, 540, 720, 1080]), t = rnd(0.3, 2, 0.05), rad = deg * Math.PI / 180, w = rad / t;
  return { q: `A gymnast rotates through ${deg}° in ${t} s. Calculate the average angular velocity in rad/s.`, ans: w, unit: 'rad/s', steps: [`${deg}° = ${deg} × π ÷ 180 = ${r2(rad)} rad`, `ω = θ ÷ t = ${r2(rad)} ÷ ${t} = ${r2(w)} rad/s`] }; };
GEN.angacc = () => { const w1 = rnd(0, 6, 0.5), w2 = w1 + rnd(2, 15, 0.5), t = rnd(0.2, 1.5, 0.05), a = (w2 - w1) / t;
  return { q: `A discus thrower’s angular velocity increases from ${w1} rad/s to ${w2} rad/s in ${t} s. Calculate the angular acceleration.`, ans: a, unit: 'rad/s²', steps: ['α = (ω₂ − ω₁) ÷ t', `= (${w2} − ${w1}) ÷ ${t} = ${r2(a)} rad/s²`] }; };
GEN.angmom = () => { const I1 = rnd(9, 18, 0.5), I2 = rnd(2.5, 6, 0.5), w1 = rnd(2, 6, 0.5), L = I1 * w1, w2 = L / I2;
  return { q: `A diver leaves the board with a moment of inertia of ${I1} kg m² and an angular velocity of ${w1} rad/s. She tucks, reducing her moment of inertia to ${I2} kg m². Calculate her new angular velocity.`, ans: w2, unit: 'rad/s', steps: [`L = Iω = ${I1} × ${w1} = ${r2(L)} kg m²/s (conserved in flight)`, `ω = L ÷ I = ${r2(L)} ÷ ${I2} = ${r2(w2)} rad/s`] }; };
GEN.inertia1 = () => { const m = rnd(2, 12, 0.5), r = rnd(0.2, 1, 0.05), I = m * r * r;
  return { q: `Treating a limb as a mass of ${m} kg at ${r} m from the axis, calculate its moment of inertia (I = mr²).`, ans: I, unit: 'kg m²', steps: [`I = ${m} × ${r}² = ${m} × ${r2(r * r)} = ${r2(I)} kg m²`] }; };
GEN.rpm = () => { const rpm = rnd(40, 180, 5), w = rpm * 2 * Math.PI / 60; return { q: `A cyclist’s cadence is ${rpm} revolutions per minute. Calculate the angular velocity of the crank in rad/s.`, ans: w, unit: 'rad/s', steps: [`${rpm} rev/min ÷ 60 = ${r2(rpm / 60)} rev/s`, `× 2π = ${r2(w)} rad/s`] }; };
GEN.projrange = () => { const v = rnd(8, 28, 0.5), th = pk([30, 35, 40, 45, 50, 55, 60]), R = v * v * Math.sin(2 * th * Math.PI / 180) / G;
  return { q: `Ignoring air resistance, with equal release and landing heights, range R = v² sin 2θ ÷ g. Calculate the range for a release speed of ${v} m/s at ${th}°.`, ans: R, unit: 'm', steps: [`sin 2θ = sin ${2 * th}° = ${r2(Math.sin(2 * th * Math.PI / 180))}`, `R = ${v}² × ${r2(Math.sin(2 * th * Math.PI / 180))} ÷ 9.8 = ${r1(R)} m`, th === 45 ? '45° gives the maximum range for equal heights' : ''].filter(Boolean) }; };
GEN.dragcalc = () => { const v1 = rnd(5, 15, 1), k = pk([2, 1.5, 3, 0.5]), v2 = v1 * k, d1 = rnd(10, 60, 1), d2 = d1 * k * k;
  return { q: `Drag on a cyclist is ${d1} N at ${v1} m/s. Assuming drag is proportional to velocity², estimate the drag at ${v2} m/s.`, ans: d2, unit: 'N', steps: [`velocity ratio = ${v2} ÷ ${v1} = ${k}`, `drag × ${k}² = ${d1} × ${k * k} = ${r1(d2)} N`] }; };

/* ---------- Psychology and skill acquisition ---------- */
GEN.ringel = () => { const n = pk([2, 3, 4, 6, 8]), eff = { 2: 93, 3: 85, 4: 77, 6: 70, 8: 49 }[n], single = rnd(300, 600, 10), total = single * n * eff / 100;
  return { q: `One person pulls with ${single} N. In Ringelmann’s study, each person in a group of ${n} gave about ${eff}% of individual effort. Estimate the total pull of the group.`, ans: total, unit: 'N', steps: [`potential = ${n} × ${single} = ${n * single} N`, `actual = ${n * single} × ${eff}% = ${r1(total)} N`] }; };
GEN.resptime = () => { const rt = rnd(0.12, 0.35, 0.01), mt = rnd(0.2, 1.5, 0.01), which = pk(['resp', 'mt']);
  if (which === 'resp') return { q: `A goalkeeper’s reaction time is ${rt} s and movement time is ${mt} s. Calculate response time.`, ans: rt + mt, unit: 's', steps: ['response time = RT + MT', `= ${rt} + ${mt} = ${r2(rt + mt)} s`] };
  return { q: `A sprinter’s response time over the first 5 m is ${r2(rt + mt)} s and reaction time is ${rt} s. Calculate movement time.`, ans: mt, unit: 's', steps: ['MT = response time − RT', `= ${r2(rt + mt)} − ${rt} = ${r2(mt)} s`] }; };
GEN.hick = () => { const a = rnd(0.15, 0.22, 0.01), b = rnd(0.1, 0.16, 0.01), n = pk([2, 4, 8]), rt = a + b * Math.log2(n);
  return { q: `Using Hick’s law RT = a + b log₂(n), with a = ${a} s and b = ${b} s, calculate choice reaction time for ${n} choices.`, ans: rt, unit: 's', steps: [`log₂(${n}) = ${Math.log2(n)}`, `RT = ${a} + ${b} × ${Math.log2(n)} = ${r2(rt)} s`] }; };
