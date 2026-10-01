/* ==========================================================
   BTEC calculation generators (Podium): health monitoring, energy units, lung volumes, loads, Steiner.
   ========================================================== */
const bmiClass = b => b < 18.5 ? 'underweight' : b < 25 ? 'healthy weight' : b < 30 ? 'overweight' : b < 40 ? 'obese' : 'severely obese';
GEN.bmi = () => { const h = rnd(1.52, 1.98, 0.01), b = rnd(17, 38, 0.1), m = Math.round(b * h * h), v = m / (h * h);
  return { q: `A client has a mass of ${m} kg and a height of ${h} m. Calculate their BMI.`, ans: v, unit: 'kg/m²', steps: ['BMI = mass ÷ height²', `height² = ${h}² = ${r2(h * h)} m²`, `BMI = ${m} ÷ ${r2(h * h)} = ${r1(v)} kg/m²`, `Classification: ${bmiClass(v)}`] }; };
GEN.whr = () => { const male = pk([true, false]), hip = rnd(88, 118, 1), w = Math.round(hip * rnd(male ? 0.82 : 0.68, male ? 1.08 : 0.95, 0.01)), r = w / hip;
  const risk = male ? (r < 0.9 ? 'low' : r < 1 ? 'moderate' : 'high') : (r < 0.8 ? 'low' : r < 0.85 ? 'moderate' : 'high');
  return { q: `A ${male ? 'male' : 'female'} client has a waist of ${w} cm and hips of ${hip} cm. Calculate the waist-to-hip ratio.`, ans: r, unit: '', steps: ['WHR = waist ÷ hip', `= ${w} ÷ ${hip} = ${r2(r)}`, `Risk for a ${male ? 'man' : 'woman'}: ${risk} (${male ? 'low < 0.90; high ≥ 1.0' : 'low < 0.80; high ≥ 0.85'})`] }; };
GEN.bpclass = () => { const s = rnd(100, 165, 1), d = rnd(62, 102, 1), hi = s >= 140 || d >= 90, pre = !hi && (s > 120 || d > 80), mean = d + (s - d) / 3;
  return { q: `A client’s blood pressure is ${s}/${d} mmHg. Calculate the mean arterial pressure (MAP = diastolic + ⅓ × (systolic − diastolic)) and classify the reading.`, ans: mean, unit: 'mmHg', steps: [`MAP = ${d} + (${s} − ${d}) ÷ 3 = ${r1(mean)} mmHg`, `Classification: ${hi ? 'high (≥ 140/90)' : pre ? 'pre-high (120/80–139/89)' : 'ideal (90/60–120/80)'}`] }; };
GEN.kjconv = () => { const toKJ = pk([true, false]), v = toKJ ? rnd(1500, 3500, 50) : rnd(6000, 14000, 100);
  return toKJ ? { q: `Convert a daily intake of ${v} kcal into kilojoules (1 kcal = 4.184 kJ).`, ans: v * 4.184, unit: 'kJ', steps: [`${v} × 4.184 = ${Math.round(v * 4.184)} kJ`] }
    : { q: `Convert ${v} kJ into kilocalories (1 kcal = 4.184 kJ).`, ans: v / 4.184, unit: 'kcal', steps: [`${v} ÷ 4.184 = ${Math.round(v / 4.184)} kcal`] }; };
GEN.tlv = () => { const vc = rnd(3.5, 6, 0.1), rv = rnd(1, 1.6, 0.1);
  return pk([true, false]) ? { q: `An athlete has a vital capacity of ${vc} L and a residual volume of ${rv} L. Calculate total lung volume.`, ans: vc + rv, unit: 'L', steps: ['TLV = VC + RV', `= ${vc} + ${rv} = ${r1(vc + rv)} L`] }
    : { q: `Total lung volume is ${r1(vc + rv)} L and residual volume is ${rv} L. Calculate vital capacity.`, ans: vc, unit: 'L', steps: ['VC = TLV − RV', `= ${r1(vc + rv)} − ${rv} = ${r1(vc)} L`] }; };
GEN.pyramid = () => { const rm = rnd(60, 160, 5), pcs = pk([[60, 70, 80, 85], [65, 75, 80, 90], [70, 75, 80, 85]]), k = rnd(1, 4, 1), pc = pcs[k - 1], load = rm * pc / 100;
  return { q: `A pyramid session uses ${pcs.join('%, ')}% of 1RM in sets 1–4. The client’s 1RM is ${rm} kg. Calculate the load for set ${k}.`, ans: load, unit: 'kg', steps: [`set ${k} = ${pc}% of ${rm} kg`, `= ${pc / 100} × ${rm} = ${r1(load)} kg`, 'In a pyramid, load rises as reps fall each set.'] }; };
GEN.steiner = () => { const pot = rnd(70, 100, 1), co = rnd(3, 15, 1), mo = rnd(3, 15, 1), act = pot - co - mo;
  return { q: `Using Steiner’s model, a team’s potential productivity is rated ${pot}. Coordination losses are ${co} and motivation losses are ${mo}. Calculate the actual productivity.`, ans: act, unit: '', steps: ['actual = potential − losses due to faulty processes', `= ${pot} − (${co} + ${mo}) = ${act}`] }; };
