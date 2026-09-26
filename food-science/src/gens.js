/* ==========================================================
   Numerical question generators — food maths.
   Each returns { q, ans, unit, steps[] } with fresh values; answers are computed so every
   question is self-consistent. Answers within 2% are accepted by the checker.
   ========================================================== */
const GEN = {};
const GEN_FLAGS = {};
const s3 = x => sf(x, 3);
const r1 = x => Math.round(x * 10) / 10, r2 = x => Math.round(x * 100) / 100;
const pk = a => a[Math.floor(Math.random() * a.length)];
const gbp = x => '£' + x.toFixed(2);

/* ---------- Salt and sodium ---------- */
const SALTY = [['cornflakes', 30], ['baked beans', 200], ['tomato soup', 300], ['cheddar cheese', 30], ['bacon rashers', 50], ['bread', 80], ['crisps', 25]];
GEN.salt1 = () => { const [f, p] = pk(SALTY), na = rnd(0.1, 1.2, 0.02), salt = na * 2.5;
  return { q: `A food label shows ${na} g of sodium per 100 g of ${f}. Calculate the salt content per 100 g.`, ans: salt, unit: 'g', steps: ['$"salt" = "sodium" × 2.5$', `$"salt" = ${na} × 2.5 = ${r2(salt)} "g"$`] }; };
GEN.salt2 = () => { const [f, p] = pk(SALTY), s100 = rnd(0.2, 2.5, 0.1), sp = s100 * p / 100, pct = sp / 6 * 100;
  return { q: `${f[0].toUpperCase() + f.slice(1)} contains ${s100} g salt per 100 g. A portion is ${p} g. What percentage of the adult maximum of 6 g salt a day does one portion provide?`, ans: pct, unit: '%', steps: [`salt per portion $= ${s100} × @frac{${p}}{100} = ${r2(sp)} "g"$`, `$@frac{${r2(sp)}}{6} × 100 = ${r1(pct)}"%"$`] }; };

/* ---------- Energy ---------- */
GEN.energy1 = () => { const c = rnd(5, 70, 1), p = rnd(1, 30, 1), f = rnd(1, 30, 1), E = 4 * c + 4 * p + 9 * f;
  return { q: `A portion of food contains ${c} g carbohydrate, ${p} g protein and ${f} g fat. Calculate its energy value in kcal.`, ans: E, unit: 'kcal', steps: ['$E = 4C + 4P + 9F$', `$E = 4(${c}) + 4(${p}) + 9(${f})$`, `$E = ${4 * c} + ${4 * p} + ${9 * f} = ${E} "kcal"$`] }; };
GEN.energy2 = () => { const c = rnd(10, 60, 1), p = rnd(2, 25, 1), f = rnd(3, 30, 1), E = 4 * c + 4 * p + 9 * f, pct = 9 * f / E * 100;
  return { q: `A ready meal provides ${c} g carbohydrate, ${p} g protein and ${f} g fat. Calculate the percentage of its energy that comes from fat.`, ans: pct, unit: '%', steps: [`total $= 4(${c}) + 4(${p}) + 9(${f}) = ${E} "kcal"$`, `from fat $= 9 × ${f} = ${9 * f} "kcal"$`, `$@frac{${9 * f}}{${E}} × 100 = ${r1(pct)}"%"$`, pct > 35 ? 'This is above the recommended maximum of 35% of energy from fat.' : 'This is within the recommended maximum of 35% of energy from fat.'] }; };
GEN.energy3 = () => { const kind = pk(['carbohydrate', 'protein', 'fat', 'alcohol']), kj = { carbohydrate: 17, protein: 17, fat: 37, alcohol: 29 }[kind], m = rnd(5, 60, 1), E = kj * m;
  return { q: `Calculate the energy in kJ provided by ${m} g of ${kind}.`, ans: E, unit: 'kJ', steps: [`${kind} provides ${kj} kJ/g`, `$E = ${m} × ${kj} = ${E} "kJ"$`] }; };
GEN.energyconv1 = () => { const toKJ = Math.random() < .5;
  if (toKJ) { const k = rnd(80, 2600, 10), j = k * 4.2; return { q: `Convert ${k} kcal to kJ (1 kcal = 4.2 kJ).`, ans: j, unit: 'kJ', steps: ['$"kJ" = "kcal" × 4.2$', `$${k} × 4.2 = ${r1(j)} "kJ"$`] }; }
  const j = rnd(400, 11000, 20), k = j / 4.2; return { q: `Convert ${j} kJ to kcal (1 kcal = 4.2 kJ).`, ans: k, unit: 'kcal', steps: ['$"kcal" = "kJ" ÷ 4.2$', `$${j} ÷ 4.2 = ${r1(k)} "kcal"$`] }; };
GEN.macro1 = () => { const E = rnd(1800, 3200, 100), pc = pk([45, 50, 55]), g = E * pc / 100 / 4;
  return { q: `An athlete needs ${E} kcal a day and aims for ${pc}% of energy from carbohydrate. How many grams of carbohydrate is this?`, ans: g, unit: 'g', steps: [`energy from carbohydrate $= ${E} × ${pc / 100} = ${E * pc / 100} "kcal"$`, 'carbohydrate provides 4 kcal/g', `$${E * pc / 100} ÷ 4 = ${r1(g)} "g"$`] }; };

/* ---------- Labels ---------- */
const LAB = [['breakfast cereal', 40], ['yogurt', 125], ['granola bar', 35], ['lasagne', 400], ['pizza', 175], ['soup', 300]];
GEN.nutr1 = () => { const [f, p] = pk(LAB), n = pk(['sugars', 'fat', 'saturates', 'protein', 'fibre']), v = rnd(0.5, 25, 0.5), per = v * p / 100;
  return { q: `A ${f} contains ${v} g ${n} per 100 g. A portion is ${p} g. Calculate the ${n} per portion.`, ans: per, unit: 'g', steps: ['$"per portion" = "per 100 g" × @frac{"portion"}{100}$', `$${v} × @frac{${p}}{100} = ${r2(per)} "g"$`] }; };
GEN.nutr2 = () => { const [f, p] = pk(LAB), per = rnd(2, 30, 0.5), v = per / p * 100;
  return { q: `One ${p} g portion of ${f} contains ${per} g sugars. Calculate the sugars per 100 g.`, ans: v, unit: 'g', steps: ['$"per 100 g" = @frac{"per portion"}{"portion"} × 100$', `$@frac{${per}}{${p}} × 100 = ${r1(v)} "g"$`, v > 22.5 ? 'High (red) — over 22.5 g per 100 g.' : v > 5 ? 'Medium (amber) — between 5 and 22.5 g per 100 g.' : 'Low (green) — 5 g or less per 100 g.'] }; };
const RI = [['energy', 2000, 'kcal'], ['fat', 70, 'g'], ['saturates', 20, 'g'], ['sugars', 90, 'g'], ['salt', 6, 'g'], ['protein', 50, 'g'], ['carbohydrate', 260, 'g']];
GEN.ri1 = () => { const [n, ri, u] = pk(RI), v = n === 'energy' ? rnd(100, 900, 10) : r1(ri * rnd(4, 60, 1) / 100), pct = v / ri * 100;
  return { q: `A portion contains ${v} ${u} of ${n}. The adult reference intake is ${ri} ${u}. Calculate the % RI.`, ans: pct, unit: '%', steps: ['$"%RI" = @frac{"amount"}{"RI"} × 100$', `$@frac{${v}}{${ri}} × 100 = ${r1(pct)}"%"$`] }; };
GEN.gl1 = () => { const [f, gi, c] = pk([['watermelon', 72, 6], ['white bread (2 slices)', 75, 28], ['boiled potato', 78, 30], ['porridge', 55, 25], ['apple', 36, 16], ['basmati rice', 58, 40], ['cornflakes', 81, 26], ['lentils', 32, 20]]), cc = r1(c * rnd(0.8, 1.2, 0.1)), gl = gi / 100 * cc;
  return { q: `A portion of ${f} has a GI of ${gi} and contains ${cc} g of available carbohydrate. Calculate its glycaemic load.`, ans: gl, unit: '', steps: ['$"GL" = @frac{"GI"}{100} × "carbohydrate (g)"$', `$@frac{${gi}}{100} × ${cc} = ${r1(gl)}$`, gl <= 10 ? 'Low GL (0–10).' : gl < 20 ? 'Medium GL (11–19).' : 'High GL (20+).'] }; };

/* ---------- Nutrient loss ---------- */
GEN.loss1 = () => { const [f, n] = pk([['cabbage', 'vitamin C'], ['broccoli', 'vitamin C'], ['potatoes', 'vitamin C'], ['peas', 'thiamin'], ['spinach', 'folate']]), a = rnd(30, 90, 1), lost = rnd(15, 70, 1), b = r1(a * (1 - lost / 100)), pct = (a - b) / a * 100;
  return { q: `Raw ${f} contained ${a} mg ${n} per 100 g. After boiling it contained ${b} mg per 100 g. Calculate the percentage lost.`, ans: pct, unit: '%', steps: ['$"% loss" = @frac{"original" - "final"}{"original"} × 100$', `$@frac{${a} - ${b}}{${a}} × 100 = ${r1(pct)}"%"$`] }; };
GEN.loss2 = () => { const m0 = rnd(400, 2500, 50), pc = rnd(15, 40, 1), m1 = m0 * (1 - pc / 100);
  return { q: `A joint of meat weighs ${m0} g raw. It loses ${pc}% of its mass during roasting (mostly water and fat). Calculate its cooked mass.`, ans: m1, unit: 'g', steps: [`mass lost $= ${m0} × ${pc / 100} = ${r1(m0 * pc / 100)} "g"$`, `cooked $= ${m0} - ${r1(m0 * pc / 100)} = ${r1(m1)} "g"$`] }; };

/* ---------- Body measures ---------- */
GEN.bmi1 = () => { const h = rnd(1.5, 1.95, 0.01), m = rnd(45, 120, 1), b = m / (h * h);
  return { q: `Calculate the BMI of a person with a mass of ${m} kg and a height of ${h} m.`, ans: b, unit: 'kg/m²', steps: ['$"BMI" = @frac{"mass (kg)"}{"height (m)"^2}$', `$@frac{${m}}{${h}^2} = @frac{${m}}{${r2(h * h)}} = ${r1(b)}$`, b < 18.5 ? 'Underweight (< 18.5).' : b < 25 ? 'Healthy weight (18.5–24.9).' : b < 30 ? 'Overweight (25–29.9).' : 'Obese (≥ 30).'] }; };
GEN.bmi2 = () => { const h = rnd(1.55, 1.9, 0.01), m = 24.9 * h * h;
  return { q: `What is the maximum mass a person ${h} m tall can have while staying in the healthy BMI range (up to 24.9)?`, ans: m, unit: 'kg', steps: ['$"mass" = "BMI" × "height"^2$', `$24.9 × ${h}^2 = 24.9 × ${r2(h * h)} = ${r1(m)} "kg"$`] }; };
GEN.whtr1 = () => { const h = rnd(150, 195, 1), w = rnd(66, 118, 1), r = w / h;
  return { q: `A man has a waist of ${w} cm and a height of ${h} cm. Calculate his waist-to-height ratio.`, ans: r, unit: '', steps: ['$"ratio" = @frac{"waist"}{"height"}$', `$@frac{${w}}{${h}} = ${r2(r)}$`, r < 0.5 ? 'Below 0.5 — healthy.' : r < 0.6 ? '0.5–0.59 — increased health risk.' : '0.6 or more — high health risk.'] }; };
GEN.rni1 = () => { const m = rnd(45, 100, 1), need = 0.75 * m, eaten = rnd(30, 90, 1), pct = eaten / need * 100;
  return { q: `The protein RNI for adults is 0.75 g per kg of body mass per day. A ${m} kg adult eats ${eaten} g of protein a day. What percentage of their RNI is this?`, ans: pct, unit: '%', steps: [`RNI $= 0.75 × ${m} = ${r1(need)} "g"$`, `$@frac{${eaten}}{${r1(need)}} × 100 = ${r1(pct)}"%"$`] }; };
GEN.bmr1 = () => { const woman = Math.random() < .5, m = rnd(50, 95, 1), bmr = woman ? 14.7 * m + 496 : 15.3 * m + 679;
  return { q: `Estimate the BMR of a ${m} kg ${woman ? 'woman' : 'man'} aged 18–30 using ${woman ? 'BMR = 14.7m + 496' : 'BMR = 15.3m + 679'} (kcal/day).`, ans: bmr, unit: 'kcal/day', steps: [woman ? `$"BMR" = 14.7 × ${m} + 496$` : `$"BMR" = 15.3 × ${m} + 679$`, `$"BMR" = ${r1(bmr)} "kcal/day"$`] }; };
GEN.pal1 = () => { const bmr = rnd(1250, 1950, 10), [job, pal] = pk([['office worker who does little exercise', 1.4], ['teacher', 1.6], ['nurse', 1.7], ['farm worker', 1.9], ['professional footballer', 2.1]]), E = bmr * pal;
  return { q: `A ${job} has a BMR of ${bmr} kcal/day and a PAL of ${pal}. Estimate their daily energy requirement.`, ans: E, unit: 'kcal/day', steps: ['$"energy" = "BMR" × "PAL"$', `$${bmr} × ${pal} = ${Math.round(E)} "kcal/day"$`] }; };
GEN.deficit1 = () => { const d = rnd(250, 750, 50), wks = rnd(4, 20, 1), kg = d * 7 * wks / 7700;
  return { q: `A person eats ${d} kcal a day less than they use. Using 7700 kcal ≈ 1 kg of body fat, estimate the mass lost in ${wks} weeks.`, ans: kg, unit: 'kg', steps: [`total deficit $= ${d} × 7 × ${wks} = ${d * 7 * wks} "kcal"$`, `$${d * 7 * wks} ÷ 7700 = ${r1(kg)} "kg"$`] }; };

/* ---------- Cost, profit, scaling ---------- */
const PACKS = [['plain flour', 1500, 'g', 0.95], ['butter', 250, 'g', 2.29], ['caster sugar', 1000, 'g', 1.35], ['chicken breast', 650, 'g', 4.80], ['cheddar', 400, 'g', 3.40], ['olive oil', 500, 'ml', 4.25], ['milk', 2272, 'ml', 1.65], ['eggs (12)', 12, 'eggs', 3.10], ['rice', 1000, 'g', 1.60], ['minced beef', 500, 'g', 3.75]];
GEN.cost1 = () => { const [n, size, u, price] = pk(PACKS), use = u === 'eggs' ? rnd(1, 6, 1) : rnd(50, Math.min(size - 50, 800), 25), c = use / size * price;
  return { q: `${n[0].toUpperCase() + n.slice(1)} costs ${gbp(price)} for ${size} ${u}. A recipe uses ${use} ${u}. Calculate the cost of the amount used (to the nearest penny).`, ans: c, unit: '£', steps: ['$"cost" = @frac{"amount used"}{"pack size"} × "price"$', `$@frac{${use}}{${size}} × ${price.toFixed(2)} = ${c.toFixed(3)}$`, `≈ ${gbp(c)}`] }; };
GEN.cost2 = () => { const total = rnd(3, 25, 0.05), n = pk([4, 6, 8, 10, 12, 24]), per = total / n;
  return { q: `A batch of food costs ${gbp(total)} to make and yields ${n} portions. Calculate the cost per portion.`, ans: per, unit: '£', steps: [`$${total.toFixed(2)} ÷ ${n} = ${per.toFixed(3)}$`, `≈ ${gbp(per)} per portion`] }; };
GEN.gp1 = () => { if (Math.random() < .5) { const cost = rnd(0.8, 4.5, 0.05), price = r2(cost / rnd(0.25, 0.4, 0.01)), gp = (price - cost) / price * 100;
    return { q: `A dish costs ${gbp(cost)} in ingredients and sells for ${gbp(price)}. Calculate the gross profit percentage.`, ans: gp, unit: '%', steps: ['$"GP%" = @frac{"price" - "cost"}{"price"} × 100$', `$@frac{${price.toFixed(2)} - ${cost.toFixed(2)}}{${price.toFixed(2)}} × 100 = ${r1(gp)}"%"$`] }; }
  const cost = rnd(0.9, 4, 0.05), gp = pk([60, 65, 70]), price = cost / (1 - gp / 100);
  return { q: `A portion costs ${gbp(cost)} to make. The café wants ${gp}% gross profit. Calculate the selling price.`, ans: price, unit: '£', steps: [`food cost must be $${100 - gp}"%"$ of the price`, `$"price" = @frac{${cost.toFixed(2)}}{${(100 - gp) / 100}} = ${price.toFixed(3)}$`, `≈ ${gbp(price)}`] }; };
GEN.scale1 = () => { const a = pk([4, 6, 8, 12]), b = pk([2, 3, 5, 10, 15, 20, 30, 50].filter(x => x !== a)), [ing, u, q0] = pk([['flour', 'g', 225], ['milk', 'ml', 300], ['butter', 'g', 110], ['sugar', 'g', 150], ['stock', 'ml', 750], ['rice', 'g', 240], ['minced beef', 'g', 500]]), q1 = q0 * b / a;
  return { q: `A recipe for ${a} portions uses ${q0} ${u} ${ing}. How much ${ing} is needed for ${b} portions?`, ans: q1, unit: u, steps: [`scale factor $= @frac{${b}}{${a}} = ${s3(b / a)}$`, `$${q0} × ${s3(b / a)} = ${r1(q1)} "${u}"$`] }; };
GEN.ratio1 = () => { const [prod, f, l, fn, ln_] = pk([['shortcrust pastry', 2, 1, 'flour', 'fat'], ['pouring batter', 1, 2, 'flour', 'milk'], ['bread dough', 5, 3, 'flour', 'water'], ['scones', 8, 2, 'flour', 'fat']]), tot = rnd(150, 900, 50), a = tot * f / (f + l), b = tot * l / (f + l), ask = Math.random() < .5;
  return { q: `${prod[0].toUpperCase() + prod.slice(1)} uses ${fn} and ${ln_} in the ratio ${f} : ${l}. For ${tot} g of mixture in total (take 1 ml of liquid as 1 g), how much ${ask ? fn : ln_} is needed?`, ans: ask ? a : b, unit: ask || ln_ === 'fat' ? 'g' : 'ml', steps: [`total parts $= ${f} + ${l} = ${f + l}$`, `one part $= ${tot} ÷ ${f + l} = ${s3(tot / (f + l))}$`, `${ask ? fn : ln_} $= ${ask ? f : l} × ${s3(tot / (f + l))} = ${r1(ask ? a : b)}$`] }; };

/* ---------- Micro-organisms ---------- */
GEN.fission1 = () => { const n0 = pk([1, 10, 50, 100, 500]), gt = pk([10, 15, 20, 30]), t = gt * rnd(3, 12, 1), n = t / gt, N = n0 * 2 ** n;
  return { q: `A food contains ${n0} bacteri${n0 === 1 ? 'um' : 'a'}. In ideal conditions they divide every ${gt} minutes. How many bacteria will there be after ${t % 60 === 0 ? (t / 60) + ' hour' + (t === 60 ? '' : 's') : t + ' minutes'}?`, ans: N, unit: 'bacteria', steps: [`number of divisions $n = @frac{${t}}{${gt}} = ${n}$`, '$N = N_0 × 2^n$', `$N = ${n0} × 2^{${n}} = ${N.toLocaleString('en-GB')}$`] }; };
GEN.fission2 = () => { const gt = pk([15, 20, 30]), n = rnd(5, 12, 1), N0 = pk([1, 10, 100]), N = N0 * 2 ** n, t = n * gt;
  return { q: `A population of bacteria grows from ${N0} to ${N.toLocaleString('en-GB')} with a generation time of ${gt} minutes. How many minutes did this take?`, ans: t, unit: 'minutes', steps: [`$@frac{${N.toLocaleString('en-GB')}}{${N0}} = ${(N / N0).toLocaleString('en-GB')} = 2^{${n}}$ so there were ${n} divisions`, `$${n} × ${gt} = ${t} "minutes"$`] }; };
GEN.size1 = () => { const [what, um] = pk([['a Salmonella bacterium', 2], ['a yeast cell', 6], ['a Bacillus cereus cell', 4], ['a Listeria bacterium', 1.5], ['a mould hypha (width)', 8]]), mag = pk([400, 1000, 1500]), img = um * mag / 1000;
  return { q: `${what[0].toUpperCase() + what.slice(1)} is ${um} µm long. Under a microscope at ×${mag} magnification, how long does it appear in mm? (1 mm = 1000 µm)`, ans: img, unit: 'mm', steps: ['$"image size" = "actual size" × "magnification"$', `$${um} × ${mag} = ${um * mag} "µm"$`, `$${um * mag} ÷ 1000 = ${img} "mm"$`] }; };
GEN.risk1 = () => { const [h, L, S_] = pk([['undercooked chicken at a barbecue', 4, 4], ['nut traces in a “nut free” cake', 2, 5], ['glass in a fruit smoothie bar', 1, 4], ['cooked rice kept warm for 3 hours', 3, 3], ['a hair in a salad', 3, 1], ['raw milk cheese served to a pregnant customer', 2, 5], ['soup reheated to 55 °C', 3, 4]]), R = L * S_;
  return { q: `Using a 5 × 5 matrix (risk = likelihood × severity), a food business scores the hazard “${h}” as likelihood ${L} and severity ${S_}. Calculate the risk rating.`, ans: R, unit: '', steps: ['$"risk" = "likelihood" × "severity"$', `$${L} × ${S_} = ${R}$`, R >= 15 ? 'High risk (15–25) — act immediately.' : R >= 8 ? 'Medium risk (8–12) — control measures needed soon.' : 'Low risk (1–6) — monitor.'] }; };

/* ---------- Statistics ---------- */
const sample = (n, a, b, st = 1) => Array.from({ length: n }, () => rnd(a, b, st));
GEN.mean1 = () => { const base = pk([[3, 9, 'taste scores out of 9', ''], [40, 70, 'loaf heights', 'mm'], [120, 190, 'cake volumes (seed displacement)', 'cm³'], [18, 36, 'line spread results', 'mm']]), v = sample(pk([5, 6, 7, 8]), base[0], base[1]), m = v.reduce((a, b) => a + b) / v.length;
  return { q: `Calculate the mean of these ${base[2]}: ${v.join(', ')}${base[3] ? ' ' + base[3] : ''}.`, ans: m, unit: base[3], steps: [`$Σx = ${v.reduce((a, b) => a + b)}$`, `$@bar{x} = @frac{${v.reduce((a, b) => a + b)}}{${v.length}} = ${s3(m)}$`] }; };
GEN.median1 = () => { const v = sample(pk([5, 7, 8, 9]), 1, 9), o = v.slice().sort((a, b) => a - b), n = o.length, med = n % 2 ? o[(n - 1) / 2] : (o[n / 2 - 1] + o[n / 2]) / 2;
  return { q: `Taste panel scores (1–9) for a new recipe were: ${v.join(', ')}. Find the median.`, ans: med, unit: '', steps: [`ordered: ${o.join(', ')}`, n % 2 ? `the middle (${(n + 1) / 2}th) value is ${med}` : `mean of the ${n / 2}th and ${n / 2 + 1}th values: $(${o[n / 2 - 1]} + ${o[n / 2]}) ÷ 2 = ${med}$`] }; };
GEN.sd1 = () => { const n = pk([4, 5, 6]), v = sample(n, 8, 18), m = v.reduce((a, b) => a + b) / n, d2 = v.map(x => (x - m) ** 2), ss = d2.reduce((a, b) => a + b), sd = Math.sqrt(ss / (n - 1));
  return { q: `Firmness readings (N) from a texture analyser: ${v.join(', ')}. Calculate the sample standard deviation.`, ans: sd, unit: 'N', steps: [`mean $= ${s3(m)}$`, `squared deviations: ${d2.map(x => s3(x)).join(', ')}`, `$Σ(x - @bar{x})^2 = ${s3(ss)}$`, `$s = @sqrt{@frac{${s3(ss)}}{${n - 1}}} = ${s3(sd)} "N"$`] }; };
GEN.pct1 = () => { const n = pk([20, 25, 30, 40, 48, 60, 80, 120]), k = rnd(2, n - 2, 1), [what] = pk([['said they skip breakfast'], ['preferred the reduced-sugar recipe'], ['bought lunch from a takeaway at least twice a week'], ['could correctly read a traffic-light label'], ['said price was the main factor in food choice']]), p = k / n * 100;
  return { q: `In a survey of ${n} learners, ${k} ${what}. What percentage is this?`, ans: p, unit: '%', steps: ['$"%" = @frac{"part"}{"total"} × 100$', `$@frac{${k}}{${n}} × 100 = ${r1(p)}"%"$`] }; };
