/* ==========================================================
   UNIT 3 · EVALUATING PHYSICAL EDUCATION (A2) — part 1
   Exercise physiology: short-term responses, long-term adaptations, diet
   ========================================================== */
TOPICS.push({
  id: '3.1', unit: '3', area: 'phys', ref: 'Short-term responses to exercise', title: 'The heart: cardiac dynamics and control', short: 'HR, SV, Q; Frank–Starling; cardiac cycle; conduction; CCC, nerves and receptors',
  summary: 'The heart is a dual-action pump whose output rises five- to eightfold in exercise. Learn heart rate, stroke volume and cardiac output and how each responds to exercise and training, the Frank–Starling mechanism and venous return, the cardiac cycle and conduction system, and how the cardiac control centre uses nerves, receptors and hormones to regulate the heart.',
  spec: [
    'Cardiac dynamics: heart rate, stroke volume and cardiac output; Frank–Starling mechanism and venous return',
    'Cardiac response to exercise: changes in heart rate, stroke volume and cardiac output in relation to intensity and fitness',
    'The cardiac cycle',
    'The heart as a dual-action pump: systemic and pulmonary circulation',
    'Control of the heart: the cardiac control centre (CCC), sympathetic and parasympathetic nervous systems',
    'The role of chemoreceptors, proprioceptors, thermoreceptors and baroreceptors',
    'Interpret data and graphs showing short-term cardiovascular responses'
  ],
  learn: [
    { h: 'A dual-action pump', html: `
[[d:heart]]
<p>The heart is two pumps side by side, separated by the septum:</p>
<ul><li><b>Right side → pulmonary circulation:</b> deoxygenated blood from the body (vena cavae) → right atrium → tricuspid valve → right ventricle → pulmonary artery → lungs, where it picks up oxygen and loses carbon dioxide.</li>
<li><b>Left side → systemic circulation:</b> oxygenated blood from the lungs (pulmonary veins) → left atrium → bicuspid (mitral) valve → left ventricle → aorta → body. The left ventricle has the thickest wall because it pumps blood all round the body.</li></ul>
<p>Valves (tricuspid, bicuspid and the semilunar valves) prevent backflow.</p>` },
    { h: 'Heart rate, stroke volume and cardiac output', html: `
<p>$Q = "HR" × "SV"$ — <b>cardiac output</b> (Q, litres per minute) is the volume of blood ejected from the left ventricle per minute; <b>heart rate</b> (HR, beats per minute) is the number of beats per minute; <b>stroke volume</b> (SV, ml) is the volume of blood ejected from the left ventricle per beat.</p>
<div class="tbl"><table><tr><th></th><th>Untrained, rest</th><th>Trained, rest</th><th>Untrained, maximal</th><th>Trained, maximal</th></tr>
<tr><td>HR (bpm)</td><td>≈ 72</td><td>≈ 50 (bradycardia)</td><td>≈ 200 (220 − age)</td><td>≈ 190–200</td></tr>
<tr><td>SV (ml)</td><td>≈ 70</td><td>≈ 100</td><td>≈ 100–120</td><td>≈ 160–200</td></tr>
<tr><td>Q (L/min)</td><td>≈ 5</td><td>≈ 5</td><td>≈ 20–24</td><td>≈ 30–40</td></tr></table></div>
<p>Resting cardiac output is the same for trained and untrained people — the trained heart does it with a bigger stroke volume and a lower heart rate.</p>
[[d:hrresponse]]
<p><b>Heart rate response:</b> an <b>anticipatory rise</b> before exercise (adrenaline); a rapid rise at the start; a plateau (<b>steady state</b>) in submaximal exercise when oxygen supply meets demand; in maximal exercise HR keeps rising to maximum. In recovery, a rapid then slower fall. Trained performers have a lower resting and submaximal HR and recover faster.</p>
<p><b>Stroke volume response:</b> SV increases with intensity up to about 40–60% of maximum, then plateaus (because at high HR there is less time for the ventricles to fill). Trained endurance athletes can keep increasing SV to higher intensities.</p>` },
    { h: 'Venous return and the Frank–Starling mechanism', html: `
<p><b>Venous return</b> is the volume of blood returning to the right atrium per minute. The heart can only pump out what it receives, so venous return controls stroke volume.</p>
<p><b>Mechanisms of venous return:</b></p><ul><li><b>skeletal muscle pump</b> — contracting muscles squeeze veins, pushing blood towards the heart;</li><li><b>respiratory pump</b> — pressure changes in the chest during breathing draw blood into the thorax;</li><li><b>pocket valves</b> in veins prevent backflow;</li><li><b>venoconstriction</b> — smooth muscle in vein walls contracts (sympathetic stimulation);</li><li><b>gravity</b> helps blood from above the heart.</li></ul>
<p><b>Frank–Starling mechanism (Starling’s law):</b> increased venous return → more blood fills the ventricles (greater end-diastolic volume) → the ventricular walls are stretched more → they contract more forcefully → a greater stroke volume.</p>
<div class="box why"><b class="lbl">Why an active cool-down helps</b><p>Keeping the muscle and respiratory pumps working maintains venous return, preventing blood pooling in the legs (dizziness) and helping remove lactic acid.</p></div>` },
    { h: 'The cardiac cycle and conduction system', html: `
[[d:conduction]]
<p>The heart is <b>myogenic</b> — it generates its own impulse. One <b>cardiac cycle</b> (≈ 0.8 s at 75 bpm) has two phases:</p>
<ul><li><b>Diastole</b> (≈ 0.5 s at rest) — the chambers relax and fill with blood; AV valves open, semilunar valves closed.</li>
<li><b>Systole</b> (≈ 0.3 s) — atrial systole (atria contract, pushing blood into ventricles), then ventricular systole (ventricles contract; AV valves close; semilunar valves open; blood ejected into aorta and pulmonary artery).</li></ul>
<p><b>Conduction system:</b> the <b>sinoatrial (SA) node</b> (pacemaker, right atrium) sends an impulse across the atria → atria contract → the <b>atrioventricular (AV) node</b> delays the impulse ≈ 0.1 s so the atria finish emptying → <b>bundle of His</b> → bundle branches → <b>Purkinje fibres</b> → ventricles contract from the apex upwards.</p>
<p>In exercise, diastole shortens much more than systole — which is why stroke volume plateaus at very high heart rates.</p>` },
    { h: 'Regulating the heart', html: `
<p>The <b>cardiac control centre (CCC)</b> in the <b>medulla oblongata</b> changes the rate at which the SA node fires, using the autonomic nervous system:</p>
<ul><li><b>Sympathetic nervous system</b> (accelerator nerve) → increases HR and the force of contraction.</li><li><b>Parasympathetic nervous system</b> (vagus nerve) → decreases HR back towards resting.</li></ul>
<div class="tbl"><table><tr><th>Receptor</th><th>Detects</th><th>In exercise</th></tr>
<tr><td><b>Chemoreceptors</b> (aorta, carotid arteries, muscles)</td><td>chemical changes: ↑ CO₂, ↓ pH (↑ lactic acid), ↓ O₂</td><td>→ CCC → sympathetic → HR ↑</td></tr>
<tr><td><b>Proprioceptors</b> (muscles, tendons, joints)</td><td>movement and muscle tension</td><td>→ HR ↑ at the start of exercise</td></tr>
<tr><td><b>Baroreceptors</b> (aorta, carotid arteries)</td><td>blood pressure (stretch of vessel walls)</td><td>↑ BP → parasympathetic → HR ↓ (important in recovery)</td></tr>
<tr><td><b>Thermoreceptors</b></td><td>temperature of blood/skin</td><td>↑ temperature → HR ↑</td></tr></table></div>
<p><b>Hormonal control:</b> <b>adrenaline</b> (released from the adrenal glands under sympathetic stimulation) increases HR and contractility — including the anticipatory rise.</p>` }
  ],
  eqs: [['Q = "HR" × "SV"', 'cardiac output (L/min) = heart rate (bpm) × stroke volume (L)'], ['"HR"_max ≈ 220 − "age"', 'estimated maximum heart rate']],
  worked: [
    { q: 'At rest an athlete has HR 52 bpm and SV 96 ml. During a 10 km run her HR is 170 bpm and SV 150 ml. Calculate her cardiac output at rest and during the run. (3 marks)', s: ['Q = HR × SV. Rest: 52 × 96 = 4992 ml/min ≈ <b>5.0 L/min</b>.', 'Run: 170 × 150 = 25 500 ml/min = <b>25.5 L/min</b>.', 'Cardiac output rose about fivefold, from both a higher HR and a higher SV.'], a: '5.0 L/min and 25.5 L/min.' },
    { q: 'Explain how the Frank–Starling mechanism increases stroke volume during exercise. (3 marks)', s: ['During exercise the skeletal muscle pump, respiratory pump and venoconstriction increase <b>venous return</b>.', 'More blood fills the ventricles in diastole (greater end-diastolic volume), stretching the ventricular walls more.', 'The stretched cardiac muscle contracts with greater force, ejecting more blood: stroke volume increases.'], a: 'More venous return → greater stretch → stronger contraction → bigger SV.' }
  ],
  pitfalls: ['Forgetting units: Q is in L/min, so convert ml to litres.', 'Saying trained athletes have a higher resting cardiac output — resting Q is similar; SV is higher and HR lower.', 'Claiming the parasympathetic system increases HR.', 'Listing receptors without saying what each detects and what happens next.', 'Saying the heart needs the brain to beat — it is myogenic; the CCC only changes the rate.'],
  cards: [
    ['Cardiac output?', 'Volume of blood ejected from the left ventricle per minute; Q = HR × SV.'], ['Stroke volume?', 'Volume of blood ejected from the left ventricle per beat.'], ['Resting cardiac output?', 'About 5 L/min.'],
    ['Maximal cardiac output (trained)?', 'About 30–40 L/min.'], ['Anticipatory rise?', 'HR increase before exercise, caused by adrenaline.'], ['Steady state?', 'O₂ supply meets demand in submaximal exercise; HR plateaus.'],
    ['Five mechanisms of venous return?', 'Skeletal muscle pump, respiratory pump, pocket valves, venoconstriction, gravity.'], ['Frank–Starling mechanism?', '↑ venous return → ↑ stretch of ventricles → ↑ force of contraction → ↑ SV.'],
    ['Pulmonary circulation?', 'Right ventricle → lungs → left atrium (deoxygenated to lungs).'], ['Systemic circulation?', 'Left ventricle → body → right atrium.'],
    ['Conduction order?', 'SA node → atria → AV node → bundle of His → bundle branches → Purkinje fibres → ventricles.'], ['Where is the CCC?', 'Medulla oblongata.'],
    ['Sympathetic vs parasympathetic?', 'Sympathetic (accelerator nerve) ↑ HR; parasympathetic (vagus nerve) ↓ HR.'], ['Chemoreceptors detect…', '↑ CO₂, ↓ pH, ↓ O₂.'], ['Baroreceptors detect…', 'Blood pressure.'], ['Proprioceptors detect…', 'Movement/tension in muscles and joints.']
  ],
  quiz: [
    { q: 'HR 150 bpm and SV 120 ml give a cardiac output of…', o: ['18 L/min', '1.8 L/min', '180 L/min', '270 L/min'], x: '150 × 0.12 = 18 L/min.' },
    { q: 'Which side of the heart pumps blood to the lungs?', o: ['Right', 'Left', 'Both equally to the lungs', 'Neither'], x: 'Pulmonary circulation starts in the right ventricle.' },
    { q: 'The pacemaker of the heart is the…', o: ['SA node', 'AV node', 'bundle of His', 'Purkinje fibres'], x: 'Sinoatrial node.' },
    { q: 'Why does the AV node delay the impulse?', o: ['So the atria can finish emptying before the ventricles contract', 'To slow the heart during exercise', 'To stop backflow', 'To trigger the SA node'], x: '≈ 0.1 s delay.' },
    { q: 'Which nerve slows the heart?', o: ['Vagus (parasympathetic)', 'Accelerator (sympathetic)', 'Phrenic', 'Sciatic'], x: 'Parasympathetic control.' },
    { q: 'An increase in blood CO₂ is detected by…', o: ['chemoreceptors', 'baroreceptors', 'proprioceptors', 'thermoreceptors'], x: 'Chemical changes.' },
    { q: 'Stroke volume usually plateaus at around…', o: ['40–60% of maximum intensity', '10% of maximum', '100% only', 'rest'], x: 'Less filling time at high HR.' },
    { q: 'Which is NOT a venous return mechanism?', o: ['Vasodilation of arterioles to muscles', 'Skeletal muscle pump', 'Respiratory pump', 'Pocket valves'], x: 'Arteriole vasodilation redistributes blood; it does not return it.' },
    { q: 'Increased stretch of the ventricle walls causing a stronger contraction is…', o: ['the Frank–Starling mechanism', 'the vascular shunt', 'the Bohr effect', 'bradycardia'], x: 'Starling’s law.' },
    { q: 'During diastole the heart…', o: ['relaxes and fills with blood', 'contracts and ejects blood', 'closes the AV valves', 'fires the Purkinje fibres'], x: 'Relaxation phase.' }
  ],
  exam: [
    { q: 'Define stroke volume and state how it is affected by endurance training. [2]', m: 2, ms: ['volume of blood ejected from the left ventricle per beat', 'increases (at rest and in exercise) — cardiac hypertrophy / greater contractility / filling'] },
    { q: 'Describe the conduction system of the heart. [4]', m: 4, ms: ['SA node (pacemaker) initiates impulse; atria contract', 'impulse reaches AV node — delayed ≈ 0.1 s', 'passes down bundle of His / bundle branches in the septum', 'Purkinje fibres — ventricles contract from the apex upwards'] },
    { q: 'The graph shows an athlete’s heart rate before, during and after 20 minutes of submaximal running.', parts: [
      { q: 'Explain why heart rate increases before the exercise begins. [2]', m: 2, ms: ['anticipatory rise', 'release of adrenaline (sympathetic) acting on the SA node'] },
      { q: 'Explain why heart rate reaches a plateau during the run. [2]', m: 2, ms: ['steady state', 'oxygen supply meets oxygen demand / aerobic energy meets requirement'] },
      { q: 'Explain how the cardiac control centre increases heart rate at the start of exercise. Refer to receptors in your answer. [5]', m: 5, ms: ['CCC in medulla oblongata', 'proprioceptors detect movement → CCC', 'chemoreceptors detect ↑ CO₂ / ↓ pH / ↓ O₂', 'thermoreceptors detect ↑ temperature', 'sympathetic nervous system / accelerator nerve → SA node fires faster (and adrenaline) → HR ↑'] }
    ], tag: 'graph' },
    { q: 'Evaluate the importance of venous return and the Frank–Starling mechanism to an endurance athlete. [8]', m: 8, lv: true, ms: ['venous return = blood returning to the right atrium per minute; SV depends on it', 'mechanisms: skeletal muscle pump, respiratory pump, pocket valves, venoconstriction, gravity', 'Frank–Starling: ↑ venous return → ↑ EDV → ↑ stretch → ↑ force → ↑ SV', '↑ SV → ↑ cardiac output → more O₂ delivered → greater aerobic capacity / delay OBLA', 'trained athletes: larger ventricles / blood volume → larger SV and Q max', 'cool-down maintains venous return → prevents blood pooling, aids lactate removal', 'limitation: at very high HR filling time falls so SV plateaus', 'judgement: central to endurance performance and recovery'], tag: 'ext' }
  ],
  sims: ['cardiac', 'hrresponse'], gens: ['cardout', 'svcalc', 'hrcalc']
});

TOPICS.push({
  id: '3.2', unit: '3', area: 'phys', ref: 'Short-term responses to exercise', title: 'Blood vessels, blood pressure and the vascular shunt', short: 'Arteries, veins, capillaries; BP = Q × R; vasomotor control; redistribution of blood',
  summary: 'In exercise, blood is redirected from the gut and kidneys to the working muscles. Learn the structure of arteries, arterioles, capillaries and veins, blood pressure as a function of cardiac output and resistance, and how the vasomotor centre controls the vascular shunt through vasodilation, vasoconstriction and pre-capillary sphincters.',
  spec: [
    'Structure of blood vessels: arteries, veins and capillaries',
    'Blood pressure as a function of cardiac output and resistance to flow',
    'Vasomotor control: vascular shunt and venous return',
    'Interpret data showing the distribution of cardiac output at rest and during exercise'
  ],
  learn: [
    { h: 'Blood vessels', html: `
[[d:vessels]]
<div class="tbl"><table><tr><th>Vessel</th><th>Structure</th><th>Function</th></tr>
<tr><td><b>Arteries</b></td><td>thick walls of smooth muscle and elastic tissue; small lumen; no valves (except at the heart)</td><td>carry blood away from the heart under high pressure; elastic recoil smooths flow</td></tr>
<tr><td><b>Arterioles</b></td><td>smaller; lots of smooth muscle; <b>pre-capillary sphincters</b> at the entrance to capillaries</td><td>vasodilate or vasoconstrict to control blood flow into capillary beds</td></tr>
<tr><td><b>Capillaries</b></td><td>walls one cell thick; narrow lumen (one red blood cell at a time); huge network</td><td>gas and nutrient exchange with tissues by diffusion; slow flow allows exchange</td></tr>
<tr><td><b>Venules and veins</b></td><td>thinner walls, less muscle; large lumen; <b>pocket valves</b></td><td>return blood to the heart at low pressure; valves prevent backflow</td></tr></table></div>` },
    { h: 'Blood pressure', html: `
<p>$"blood pressure" = Q × "resistance"$</p>
<p><b>Blood pressure</b> is the force exerted by blood against the walls of the blood vessels. <b>Systolic</b> pressure (≈ 120 mmHg at rest) is the pressure when the ventricles contract; <b>diastolic</b> (≈ 80 mmHg) when they relax.</p>
<p>Resistance to flow depends on the <b>diameter</b> of vessels (the main factor — vasoconstriction increases resistance), blood <b>viscosity</b> (raised by dehydration), and vessel length.</p>
<p>In <b>aerobic exercise</b> systolic pressure rises (cardiac output increases) but diastolic stays about the same, because vasodilation in the muscles lowers resistance. In <b>isometric</b> and heavy resistance exercise both rise sharply, because contracted muscles squeeze the vessels. Long-term endurance training can lower resting blood pressure.</p>` },
    { h: 'Vasomotor control and the vascular shunt', html: `
[[d:shunt]]
<p>At rest only about <b>15–20%</b> of cardiac output goes to skeletal muscles; in maximal exercise about <b>80–85%</b> does. This redistribution is the <b>vascular shunt</b>.</p>
<p>The <b>vasomotor centre (VCC)</b> in the medulla oblongata receives information from <b>chemoreceptors</b> (↑ CO₂, ↑ lactic acid, ↓ pH) and <b>baroreceptors</b> (blood pressure), and adjusts <b>sympathetic stimulation</b> of the smooth muscle in arterioles and pre-capillary sphincters:</p>
<ul><li>To the <b>working muscles</b>: sympathetic stimulation is <b>reduced</b> → arterioles <b>vasodilate</b> and <b>pre-capillary sphincters open</b> → more blood flows into the muscles’ capillaries.</li>
<li>To <b>non-essential organs</b> (stomach, intestines, liver, kidneys): sympathetic stimulation is <b>increased</b> → arterioles <b>vasoconstrict</b> and pre-capillary sphincters <b>close</b> → less blood flow.</li>
<li><b>Veins venoconstrict</b> → increases venous return.</li></ul>
<div class="tbl"><table><tr><th>Region</th><th>Rest (Q ≈ 5 L/min)</th><th>Maximal exercise (Q ≈ 25 L/min)</th></tr>
<tr><td>Skeletal muscle</td><td>≈ 20% (1.0 L)</td><td>≈ 84% (21 L)</td></tr>
<tr><td>Brain</td><td>≈ 15% (0.75 L)</td><td>≈ 3% (0.75 L — same volume)</td></tr>
<tr><td>Heart muscle</td><td>≈ 5% (0.25 L)</td><td>≈ 4% (1.0 L)</td></tr>
<tr><td>Liver and gut</td><td>≈ 25% (1.25 L)</td><td>≈ 1–2% (0.3 L)</td></tr>
<tr><td>Kidneys</td><td>≈ 20% (1.0 L)</td><td>≈ 1% (0.25 L)</td></tr>
<tr><td>Skin</td><td>≈ 5% (0.25 L)</td><td>≈ 2–4% (rises to lose heat; more in the heat)</td></tr></table></div>
<p>The brain receives a constant <b>volume</b> even though its <b>percentage</b> falls. Eating a large meal before exercise is unwise because the gut needs blood for digestion.</p>` }
  ],
  eqs: [['"BP" = Q × "R"', 'blood pressure = cardiac output × resistance']],
  worked: [
    { q: 'Using the table, calculate the volume of blood flowing to the skeletal muscles when cardiac output is 25 L/min and 84% goes to the muscles. (1 mark)', s: ['0.84 × 25 = <b>21 L/min</b>.'], a: '21 L/min.' },
    { q: 'Explain how the vascular shunt redistributes blood during exercise. (4 marks)', s: ['Chemoreceptors detect ↑ CO₂/lactic acid and baroreceptors detect pressure changes, informing the vasomotor centre (medulla).', 'The VCC reduces sympathetic stimulation to arterioles supplying working muscles → vasodilation and opening of pre-capillary sphincters.', 'It increases sympathetic stimulation to arterioles supplying non-essential organs (gut, kidneys) → vasoconstriction and closing of pre-capillary sphincters.', 'So a greater percentage of cardiac output (up to ~85%) reaches the muscles, delivering more oxygen.'], a: 'VCC → vasodilation to muscles, vasoconstriction to organs.' }
  ],
  pitfalls: ['Saying the brain gets less blood in exercise — it gets the same volume, a smaller percentage.', 'Confusing the vasomotor centre (blood vessels) with the cardiac control centre (heart).', 'Saying capillaries vasodilate — arterioles do; capillaries have no muscle, their entry is controlled by pre-capillary sphincters.', 'Forgetting that vasodilation to muscles is caused by a <i>decrease</i> in sympathetic stimulation.'],
  cards: [
    ['Artery structure?', 'Thick muscular, elastic walls; small lumen; high pressure.'], ['Capillary structure?', 'One cell thick — diffusion of gases.'], ['Vein structure?', 'Thin walls, large lumen, pocket valves; low pressure.'],
    ['Pre-capillary sphincter?', 'Ring of muscle at the entrance to a capillary bed that opens or closes to control flow.'], ['Blood pressure formula?', 'BP = cardiac output × resistance.'], ['Normal resting BP?', 'About 120/80 mmHg.'],
    ['Where is the vasomotor centre?', 'Medulla oblongata.'], ['Vascular shunt?', 'Redistribution of cardiac output from organs to working muscles in exercise.'], ['% of Q to muscles at rest and maximal exercise?', 'About 15–20% and 80–85%.'],
    ['How do arterioles to muscles dilate?', 'Reduced sympathetic stimulation → vasodilation; pre-capillary sphincters open.'], ['Brain blood flow in exercise?', 'Same volume, smaller percentage.']
  ],
  quiz: [
    { q: 'Gas exchange with muscle cells takes place across the walls of…', o: ['capillaries', 'arteries', 'veins', 'arterioles'], x: 'One cell thick.' },
    { q: 'Which vessels contain pocket valves?', o: ['Veins', 'Arteries', 'Capillaries', 'Arterioles'], x: 'Prevent backflow at low pressure.' },
    { q: 'During maximal exercise about what percentage of cardiac output goes to skeletal muscle?', o: ['80–85%', '15–20%', '50%', '5%'], x: 'Vascular shunt.' },
    { q: 'Arterioles supplying the gut during exercise…', o: ['vasoconstrict', 'vasodilate', 'disappear', 'open their sphincters'], x: 'Blood is diverted away.' },
    { q: 'Blood pressure equals cardiac output multiplied by…', o: ['resistance', 'heart rate', 'stroke volume', 'viscosity only'], x: 'BP = Q × R.' },
    { q: 'The vasomotor centre is located in the…', o: ['medulla oblongata', 'cerebellum', 'SA node', 'aorta'], x: 'Brainstem.' },
    { q: 'During aerobic exercise diastolic pressure…', o: ['stays about the same', 'doubles', 'falls to zero', 'rises more than systolic'], x: 'Muscle vasodilation lowers resistance.' },
    { q: 'Blood flow to the brain during exercise…', o: ['stays the same volume', 'falls to almost zero', 'triples', 'reverses'], x: 'Constant volume, lower %.' }
  ],
  exam: [
    { q: 'Explain the role of pre-capillary sphincters in the vascular shunt. [2]', m: 2, ms: ['rings of smooth muscle at the entrance to capillary beds', 'open (relax) to working muscles / close (contract) to non-essential organs, controlling flow'] },
    { q: 'Compare the structure of arteries and veins and relate each to its function. [4]', m: 4, ms: ['arteries: thick muscular/elastic walls — withstand high pressure', 'small lumen / elastic recoil — maintain pressure and flow', 'veins: thin walls, large lumen — low pressure, easy flow / act as reservoir', 'pocket valves — prevent backflow / aid venous return'] },
    { q: 'The table shows the distribution of cardiac output at rest (5 L/min) and during maximal exercise (25 L/min).', parts: [
      { q: 'At rest 20% of cardiac output goes to skeletal muscle. Calculate the volume. [1]', m: 1, ms: ['0.20 × 5 = 1 L/min'] },
      { q: 'Explain why the percentage of cardiac output reaching the brain falls during exercise, although the volume does not. [2]', m: 2, ms: ['brain receives a constant volume (≈ 0.75 L/min) to maintain function', 'total cardiac output increases so the same volume is a smaller percentage'] },
      { q: 'Explain how the vasomotor centre redistributes blood during exercise. [5]', m: 5, ms: ['VCC in the medulla oblongata', 'receives information from chemoreceptors (↑ CO₂, ↓ pH) and baroreceptors', 'reduced sympathetic stimulation → vasodilation of arterioles to working muscles; pre-capillary sphincters open', 'increased sympathetic stimulation → vasoconstriction to gut/kidneys; sphincters close', 'venoconstriction of veins increases venous return / more O₂ to muscles'] }
    ], tag: 'data' }
  ],
  sims: ['shunt'], gens: ['shuntcalc', 'bpcalc']
});

TOPICS.push({
  id: '3.3', unit: '3', area: 'phys', ref: 'Short-term responses to exercise', title: 'Respiratory and neuromuscular responses', short: 'Tidal volume, frequency, minute ventilation; control of breathing; gas exchange; steady state; neuromuscular changes',
  summary: 'Breathing rises from about 6 L/min at rest to well over 100 L/min in maximal exercise. Learn how tidal volume, breathing frequency and minute ventilation respond to different intensities, how the respiratory control centre and receptors regulate breathing, how gas exchange speeds up, what steady state and VO₂max mean, and how the neuromuscular system responds as muscles warm up.',
  spec: [
    'Respiratory response to different exercise intensities: tidal volume, breathing frequency and minute ventilation',
    'Control of breathing and the role of chemoreceptors, proprioceptors, thermoreceptors and baroreceptors',
    'Changes to the neuromuscular system; increased speed of transmission as muscle is warmed up',
    'Steady state and VO₂max',
    'Interpret data and graphs showing short-term responses within the cardio-respiratory and neuromuscular systems'
  ],
  learn: [
    { h: 'Lung volumes in exercise', html: `
<p>$V_E = "TV" × f$ — <b>minute ventilation</b> (V<sub>E</sub>, L/min) = <b>tidal volume</b> (TV, the volume of air breathed in or out per breath) × <b>breathing frequency</b> (f, breaths per minute).</p>
<div class="tbl"><table><tr><th></th><th>Rest</th><th>Submaximal</th><th>Maximal</th></tr>
<tr><td>Tidal volume</td><td>≈ 0.5 L</td><td>increases (≈ 2–2.5 L)</td><td>≈ 2.5–3 L (plateaus)</td></tr>
<tr><td>Frequency</td><td>≈ 12–15 /min</td><td>increases, then steady</td><td>≈ 40–60 /min</td></tr>
<tr><td>Minute ventilation</td><td>≈ 6–7.5 L/min</td><td>≈ 60–100 L/min</td><td>≈ 120–180 L/min</td></tr></table></div>
<p>Tidal volume increases first; at high intensity tidal volume plateaus and further increases in V<sub>E</sub> come from frequency.</p>
[[d:veresponse]]
<p><b>Pattern of minute ventilation:</b> an anticipatory rise (adrenaline) → a rapid rise at the start (neural — proprioceptors) → a slower rise (chemical — chemoreceptors, temperature) → a plateau in submaximal exercise (steady state) or a continued rise in maximal exercise. In recovery, a rapid fall then a slower fall while the oxygen debt is repaid (restoring PC, removing lactic acid).</p>` },
    { h: 'Mechanics and control of breathing', html: `
<div class="tbl"><table><tr><th></th><th>At rest</th><th>During exercise</th></tr>
<tr><td>Inspiration</td><td>diaphragm and external intercostals contract; thoracic volume ↑, pressure ↓, air flows in</td><td>plus sternocleidomastoid, scalenes and pectoralis minor lift the ribs further → deeper breaths</td></tr>
<tr><td>Expiration</td><td>passive: muscles relax, lungs recoil</td><td>active: internal intercostals and abdominals contract to force air out faster</td></tr></table></div>
<p>The <b>respiratory control centre (RCC)</b> in the <b>medulla oblongata</b> has an inspiratory centre and an expiratory centre and sends impulses through the phrenic and intercostal nerves. It is stimulated by:</p>
<ul><li><b>chemoreceptors</b> — ↑ CO₂ (the most powerful stimulus), ↓ pH, ↓ O₂;</li><li><b>proprioceptors</b> — movement at the start of exercise;</li><li><b>thermoreceptors</b> — rising body temperature;</li><li><b>baroreceptors</b> — changes in blood pressure;</li><li><b>stretch receptors</b> in the lungs — stop over-inflation and trigger expiration (the Hering–Breuer reflex).</li></ul>` },
    { h: 'Gas exchange in exercise', html: `
<p>Oxygen and carbon dioxide move by <b>diffusion</b> from high to low <b>partial pressure</b>. In exercise the working muscles use more O₂ and produce more CO₂, so the partial pressure gradients between blood and muscle become steeper and diffusion is faster.</p>
<p>At the muscles, higher temperature, more CO₂ and lower pH cause haemoglobin to release its oxygen more readily (the <b>Bohr shift</b> of the oxyhaemoglobin dissociation curve to the right). Myoglobin in muscle holds oxygen and carries it to the mitochondria. The <b>arterio-venous oxygen difference</b> (a-vO₂ diff) — how much O₂ the muscles extract — increases.</p>` },
    { h: 'Steady state and VO₂max', html: `
<p><b>Steady state</b> — in submaximal exercise, after a few minutes, oxygen supply meets oxygen demand: HR, ventilation and VO₂ plateau and energy is supplied aerobically. Before steady state is reached there is an <b>oxygen deficit</b>, covered by anaerobic energy, which must be repaid after exercise.</p>
<p><b>VO₂max</b> — the maximum volume of oxygen that can be taken in, transported and used per minute. As exercise intensity rises, VO₂ rises in a straight line until it levels off at VO₂max; beyond this, extra energy must come anaerobically and fatigue follows. Trained athletes reach steady state faster, have a higher VO₂max and can work at a higher % of it.</p>` },
    { h: 'Neuromuscular responses', html: `
<ul><li>A <b>warm-up</b> raises muscle temperature, increasing the <b>speed of nerve impulse transmission</b> and the speed and force of contraction; it also reduces viscosity in muscles and improves enzyme activity.</li>
<li>As intensity increases, more <b>motor units</b> are recruited (type I first, then IIa, then IIb) — <b>spatial summation</b> — and impulses arrive more frequently (<b>wave summation</b>), increasing the force of contraction.</li>
<li><b>Proprioceptors</b> (muscle spindles, Golgi tendon organs) send information about stretch and tension, triggering reflexes and informing the heart and breathing control centres.</li>
<li><b>Fatigue</b>: depletion of PC and glycogen, accumulation of H⁺ ions, and reduced neurotransmitter release reduce force and co-ordination.</li></ul>` }
  ],
  eqs: [['V_E = "TV" × f', 'minute ventilation (L/min) = tidal volume (L) × breathing frequency (breaths/min)']],
  worked: [
    { q: 'A rower has a tidal volume of 2.8 L and a breathing frequency of 45 breaths/min. Calculate her minute ventilation and explain how the RCC increased it. (4 marks)', s: ['V<sub>E</sub> = TV × f = 2.8 × 45 = <b>126 L/min</b>.', 'Chemoreceptors detect ↑ CO₂ and ↓ pH; proprioceptors detect movement; thermoreceptors detect ↑ temperature.', 'The RCC (medulla) sends more frequent impulses via the phrenic and intercostal nerves.', 'The diaphragm, external intercostals and extra inspiratory muscles contract more forcefully and more often; active expiration uses internal intercostals and abdominals.'], a: '126 L/min.' }
  ],
  pitfalls: ['Saying O₂ levels are the main stimulus to breathe — rising CO₂ is.', 'Describing expiration during exercise as passive — it becomes active.', 'Forgetting units: V<sub>E</sub> in litres per minute.', 'Confusing steady state (supply meets demand) with VO₂max (maximum uptake).', 'Omitting the neuromuscular system when asked for responses of “body systems”.'],
  cards: [
    ['Minute ventilation?', 'Volume of air breathed in or out per minute; V_E = TV × f.'], ['Resting V_E?', 'About 6–7.5 L/min.'], ['Tidal volume at rest?', 'About 0.5 L.'],
    ['Where is the RCC?', 'Medulla oblongata.'], ['Most powerful stimulus to breathing?', 'Increased CO₂ (↓ pH) detected by chemoreceptors.'], ['Extra inspiratory muscles in exercise?', 'Sternocleidomastoid, scalenes, pectoralis minor.'],
    ['Muscles of active expiration?', 'Internal intercostals and abdominals.'], ['Hering–Breuer reflex?', 'Lung stretch receptors prevent over-inflation.'], ['Steady state?', 'O₂ supply meets demand in submaximal exercise.'],
    ['Oxygen deficit?', 'Shortfall in O₂ at the start of exercise, covered anaerobically.'], ['Effect of warm-up on nerves?', 'Faster nerve impulse transmission → faster, stronger contractions.'], ['Spatial summation?', 'Recruiting more motor units to increase force.']
  ],
  quiz: [
    { q: 'TV 2.0 L and f 30 breaths/min give V_E of…', o: ['60 L/min', '32 L/min', '15 L/min', '6 L/min'], x: '2.0 × 30 = 60.' },
    { q: 'The strongest chemical stimulus for increased breathing is…', o: ['increased CO₂', 'decreased O₂', 'increased glucose', 'decreased temperature'], x: 'Detected via ↓ pH.' },
    { q: 'During exercise expiration becomes active using the…', o: ['internal intercostals and abdominals', 'diaphragm only', 'external intercostals', 'scalenes'], x: 'Forced expiration.' },
    { q: 'The rapid rise in ventilation at the very start of exercise is mainly due to…', o: ['proprioceptors (neural)', 'lactic acid', 'temperature', 'baroreceptors'], x: 'Movement detected immediately.' },
    { q: 'Steady state means…', o: ['oxygen supply meets oxygen demand', 'breathing stops increasing because of fatigue', 'VO₂max has been reached', 'lactic acid is accumulating rapidly'], x: 'Aerobic balance.' },
    { q: 'A warm-up increases the speed of nerve transmission because…', o: ['muscle temperature rises', 'glycogen stores increase', 'bone density rises', 'blood pressure falls'], x: 'Warmer tissue conducts faster.' },
    { q: 'Which muscle is an extra inspiratory muscle used in exercise?', o: ['Sternocleidomastoid', 'Rectus abdominis', 'Internal intercostals', 'Gluteus maximus'], x: 'Lifts the sternum.' },
    { q: 'At high exercise intensities, further increases in V_E come mainly from…', o: ['increased breathing frequency', 'increased tidal volume', 'reduced frequency', 'the Hering–Breuer reflex'], x: 'TV plateaus.' }
  ],
  exam: [
    { q: 'Define minute ventilation and state a typical resting value. [2]', m: 2, ms: ['volume of air inspired/expired per minute (V_E = TV × f)', '≈ 6–7.5 L/min'] },
    { q: 'Describe the changes in the mechanics of breathing during exercise. [4]', m: 4, ms: ['inspiration: diaphragm and external intercostals contract more forcefully', 'extra muscles: sternocleidomastoid / scalenes / pectoralis minor', 'expiration becomes active', 'internal intercostals and abdominals contract'] },
    { q: 'A performer’s minute ventilation was recorded before, during and after a maximal 800 m run.', parts: [
      { q: 'Calculate minute ventilation when TV = 2.6 L and f = 48 breaths/min. [1]', m: 1, ms: ['2.6 × 48 = 124.8 L/min (≈ 125)'] },
      { q: 'Explain why minute ventilation rises before the run starts. [2]', m: 2, ms: ['anticipatory rise', 'adrenaline / sympathetic stimulation of the RCC'] },
      { q: 'Explain how the respiratory control centre regulates breathing during the run. [5]', m: 5, ms: ['RCC in medulla (inspiratory and expiratory centres)', 'chemoreceptors detect ↑ CO₂ / ↓ pH', 'proprioceptors and thermoreceptors send information', 'more impulses via phrenic/intercostal nerves → ↑ depth and rate', 'expiratory centre activated → active expiration; lung stretch receptors (Hering–Breuer)'] }
    ], tag: 'graph' },
    { q: 'Discuss the short-term responses of the neuromuscular system to a warm-up and to increasing exercise intensity. [6]', m: 6, lv: true, ms: ['warm-up raises muscle temperature', '→ faster nerve impulse transmission / faster reaction', '→ faster, more forceful contractions; reduced muscle viscosity; better enzyme activity', 'increasing intensity → more motor units recruited (I → IIa → IIb) — spatial summation', 'greater frequency of impulses — wave summation → greater force', 'proprioceptors provide feedback; fatigue later reduces force; judgement on importance of warm-up'] }
  ],
  sims: ['breathing', 'vo2'], gens: ['vecalc', 'tvcalc']
});

TOPICS.push({
  id: '3.4', unit: '3', area: 'phys', ref: 'Long-term adaptations to exercise', title: 'Long-term adaptations to training', short: 'Musculo-skeletal and cardio-respiratory adaptations; aerobic vs anaerobic training; VO₂max',
  summary: 'Regular training changes the body. Learn the adaptations of the musculo-skeletal system (bone density, cartilage, ligaments and tendons, hypertrophy, fibre types, force of contraction, myoglobin, mitochondria, capillaries, glycogen) and the cardio-respiratory system (bradycardia, cardiac hypertrophy, stroke volume and ejection fraction, lung volumes, pulmonary diffusion, VO₂max), and link each to the type of training and to performance.',
  spec: [
    'Musculo-skeletal system: bone density, articular cartilage and ligaments (mobility training), muscular hypertrophy, changes to fibre types, thickening of tendons, increased force of contraction',
    'Effects of exercise on myoglobin content, number of capillaries and glycogen stores',
    'Cardio-respiratory system: bradycardia, cardiac hypertrophy and stroke volume (ejection fraction), changes in lung volumes, pulmonary diffusion and effects on VO₂max',
    'How aerobic and anaerobic training cause long-term adaptations and link to improved performance',
    'Interpret data and graphs showing long-term adaptations'
  ],
  learn: [
    { h: 'Musculo-skeletal adaptations', html: `
<div class="tbl"><table><tr><th>Adaptation</th><th>Caused by</th><th>Benefit</th></tr>
<tr><td>↑ <b>bone density</b> (more calcium deposited)</td><td>weight-bearing and resistance training</td><td>stronger bones, less risk of fracture and osteoporosis</td></tr>
<tr><td>thicker <b>articular cartilage</b>; more synovial fluid</td><td>mobility and weight-bearing training</td><td>better shock absorption and joint lubrication; wider range of movement</td></tr>
<tr><td>stronger, more flexible <b>ligaments</b>; <b>thicker tendons</b></td><td>resistance and mobility training</td><td>more stable joints; transmit greater forces; fewer injuries</td></tr>
<tr><td><b>Muscular hypertrophy</b> (larger fibres, more myofibrils)</td><td>anaerobic / resistance training (esp. type II fibres)</td><td>greater strength and power</td></tr>
<tr><td><b>Increased force of contraction</b></td><td>resistance training — neural adaptations: better recruitment and synchronisation of motor units; less inhibition</td><td>strength gains in the first weeks, before hypertrophy</td></tr>
<tr><td><b>Fibre-type changes</b></td><td>endurance: type IIb → more oxidative (IIa-like); power: type II fibres enlarge</td><td>better fatigue resistance or more power</td></tr>
<tr><td>↑ <b>myoglobin</b></td><td>aerobic training</td><td>more O₂ stored and carried to mitochondria</td></tr>
<tr><td>↑ size and number of <b>mitochondria</b></td><td>aerobic training</td><td>more aerobic ATP production; greater use of fat</td></tr>
<tr><td>↑ <b>capillarisation</b> of muscle</td><td>aerobic training</td><td>more O₂ delivered, more CO₂ and lactate removed</td></tr>
<tr><td>↑ <b>glycogen</b> (and triglyceride) stores</td><td>aerobic and anaerobic training</td><td>more fuel; delays fatigue</td></tr>
<tr><td>↑ ATP and PC stores; ↑ enzyme activity (creatine kinase, PFK); ↑ buffering</td><td>anaerobic training</td><td>more powerful, longer maximal efforts; greater lactate tolerance</td></tr></table></div>` },
    { h: 'Cardiovascular adaptations', html: `
<ul><li><b>Cardiac hypertrophy</b> (“athlete’s heart”) — the heart becomes bigger and stronger; the left ventricle wall thickens (more with resistance training) and its chamber enlarges (more with endurance training).</li>
<li>↑ <b>stroke volume</b> at rest and in exercise — a larger, stronger ventricle fills more and contracts more forcefully.</li>
<li>↑ <b>ejection fraction</b> — the percentage of blood in the ventricle ejected each beat: $"EF" = "SV"/"EDV" × 100$. Rest ≈ 60%; trained athletes in exercise ≈ 80–85%.</li>
<li><b>Bradycardia</b> — a resting heart rate below 60 bpm (elite endurance athletes may be below 40), because SV is larger. Submaximal HR is also lower and recovery is faster.</li>
<li>↑ maximal cardiac output; ↑ <b>blood volume</b> and plasma volume; ↑ red blood cells and haemoglobin; ↑ capillarisation.</li>
<li>Lower resting blood pressure; more elastic arteries.</li></ul>` },
    { h: 'Respiratory adaptations and VO₂max', html: `
<ul><li><b>Lung volumes:</b> respiratory muscles become stronger, so tidal volume and minute ventilation at maximal exercise increase; vital capacity increases slightly; residual volume may fall slightly. Resting and submaximal breathing rates fall (breathing becomes more efficient).</li>
<li>↑ <b>pulmonary diffusion</b> — more capillaries around the alveoli and greater surface area/blood volume in the lungs, so more O₂ diffuses into the blood.</li>
<li>↑ <b>a-vO₂ difference</b> — muscles extract more oxygen.</li></ul>
<p>Together, aerobic training increases <b>VO₂max</b> (typically by 10–20%) and raises the <b>lactate/anaerobic threshold</b> (a higher % of VO₂max can be sustained before lactate accumulates). Genetics limit how far VO₂max can rise.</p>
<div class="tbl"><table><tr><th>Aerobic training (continuous, fartlek, aerobic intervals)</th><th>Anaerobic training (sprints, weights, plyometrics, HIT)</th></tr>
<tr><td>bradycardia; ↑ SV and Q max; ↑ capillaries, myoglobin, mitochondria; ↑ blood volume; ↑ VO₂max and lactate threshold; more fat used</td><td>hypertrophy (type II); ↑ ATP/PC stores and enzymes; ↑ buffering/lactate tolerance; ↑ strength and power; thicker ventricular wall</td></tr></table></div>` }
  ],
  eqs: [['"EF" = "SV"/"EDV" × 100', 'ejection fraction (%) = stroke volume ÷ end-diastolic volume × 100']],
  worked: [
    { q: 'Before training an athlete’s left ventricle held 120 ml at the end of diastole and ejected 70 ml. After training it holds 150 ml and ejects 105 ml. Calculate the ejection fraction before and after. (2 marks)', s: ['Before: 70 ÷ 120 × 100 = <b>58%</b>.', 'After: 105 ÷ 150 × 100 = <b>70%</b> — the trained heart empties a greater proportion each beat.'], a: '58% → 70%.' },
    { q: 'Explain how aerobic training leads to bradycardia. (3 marks)', s: ['Aerobic training causes cardiac hypertrophy: a larger, stronger left ventricle.', 'Stroke volume increases, so each beat ejects more blood.', 'Resting cardiac output (≈ 5 L/min) stays the same, so HR falls: Q = HR × SV → HR = Q ÷ SV (e.g. 5000 ÷ 100 = 50 bpm).'], a: 'Bigger SV → same Q at lower HR.' }
  ],
  pitfalls: ['Mixing short-term responses (during exercise) with long-term adaptations (after weeks of training).', 'Saying resting cardiac output increases with training — it stays about the same.', 'Giving an adaptation without the training type that causes it or the performance benefit.', 'Claiming training turns type I into type II fibres.', 'Defining bradycardia without a value (below 60 bpm).'],
  cards: [
    ['Bradycardia?', 'Resting HR below 60 bpm.'], ['Cardiac hypertrophy?', 'Enlargement and strengthening of the heart (thicker walls, bigger chamber).'], ['Ejection fraction?', 'SV ÷ EDV × 100: % of ventricular blood ejected per beat.'],
    ['Three aerobic muscle adaptations?', 'More mitochondria, myoglobin and capillaries (also glycogen stores, fat use).'], ['Three anaerobic adaptations?', 'Hypertrophy, more ATP/PC stores and enzymes, greater buffering.'],
    ['Why does strength rise before muscles grow?', 'Neural adaptations: better recruitment and synchronisation of motor units.'], ['Adaptation of bones?', 'Increased bone density (weight-bearing training).'], ['Adaptation of tendons?', 'Thicker and stronger.'],
    ['Pulmonary diffusion adaptation?', 'More capillaries round alveoli → more O₂ diffuses into blood.'], ['Effect of training on VO₂max?', 'Increases (≈ 10–20%), limited by genetics.'], ['Effect on lactate threshold?', 'Raised — a higher % of VO₂max before lactate accumulates.']
  ],
  quiz: [
    { q: 'Which adaptation is mainly caused by aerobic training?', o: ['More mitochondria', 'Increased PC stores', 'Hypertrophy of type IIb fibres', 'Greater creatine kinase activity'], x: 'Aerobic energy production.' },
    { q: 'Bradycardia is a resting heart rate below…', o: ['60 bpm', '80 bpm', '100 bpm', '40 bpm'], x: 'Definition.' },
    { q: 'SV 90 ml and EDV 120 ml give an ejection fraction of…', o: ['75%', '133%', '30%', '90%'], x: '90 ÷ 120 × 100.' },
    { q: 'Early strength gains in a resistance programme are mainly due to…', o: ['neural adaptations', 'more mitochondria', 'bradycardia', 'increased myoglobin'], x: 'Motor unit recruitment and synchronisation.' },
    { q: 'Increased myoglobin content helps by…', o: ['storing and carrying oxygen to mitochondria', 'increasing PC', 'thickening tendons', 'raising blood pressure'], x: 'Oxygen store in muscle.' },
    { q: 'Weight-bearing training increases…', o: ['bone density', 'residual volume', 'resting HR', 'blood viscosity'], x: 'More calcium deposited.' },
    { q: 'After endurance training, resting cardiac output…', o: ['stays about the same', 'doubles', 'halves', 'rises to 20 L/min'], x: 'Lower HR, higher SV.' },
    { q: 'An increased lactate threshold means an athlete can…', o: ['work at a higher intensity before lactate accumulates', 'produce more lactic acid at rest', 'no longer use anaerobic energy', 'have a lower VO₂max'], x: 'Sustain faster pace.' }
  ],
  exam: [
    { q: 'Define ejection fraction and state how it changes with training. [2]', m: 2, ms: ['percentage of blood in the ventricle ejected per beat / SV ÷ EDV × 100', 'increases (greater contractility / cardiac hypertrophy)'] },
    { q: 'Explain three adaptations of skeletal muscle to aerobic training. [3]', m: 3, ms: ['more/larger mitochondria → more aerobic ATP / fat oxidation', 'more myoglobin → more O₂ stored/transported to mitochondria', 'more capillaries → more O₂ delivered, CO₂/lactate removed (also ↑ glycogen stores)'] },
    { q: 'The table shows a cyclist’s data before and after 12 weeks of endurance training: resting HR 68 → 54 bpm; resting SV 74 → 93 ml; VO₂max 48 → 56 ml/kg/min.', parts: [
      { q: 'Calculate the cyclist’s resting cardiac output after training. [1]', m: 1, ms: ['54 × 93 = 5022 ml/min ≈ 5.0 L/min'] },
      { q: 'Calculate the percentage increase in VO₂max. [2]', m: 2, ms: ['(56 − 48) ÷ 48 × 100', '= 16.7%'] },
      { q: 'Explain the adaptations that account for the changes in resting heart rate and stroke volume. [3]', m: 3, ms: ['cardiac hypertrophy — larger/stronger left ventricle', '↑ SV (↑ EDV, ↑ contractility, ↑ blood volume)', 'same resting Q so HR falls — bradycardia'] },
      { q: 'Evaluate how cardio-respiratory adaptations improve the cyclist’s performance. [8]', m: 8, lv: true, ms: ['↑ SV and Q max → more O₂ delivered', '↑ blood/plasma volume, red cells/haemoglobin → greater O₂-carrying capacity', '↑ capillarisation of muscles and lungs → faster diffusion / pulmonary diffusion', 'stronger respiratory muscles → ↑ max V_E', '↑ VO₂max and lactate threshold → higher sustainable pace, delayed OBLA', 'lower HR at submaximal work → less strain, faster recovery between sessions', 'glycogen sparing through more fat use', 'judgement: VO₂max limited by genetics; threshold/efficiency often better predictors; also muscular adaptations'] }
    ], tag: 'data' }
  ],
  sims: ['adapt'], gens: ['efcalc', 'bradycalc', 'pctchange']
});

TOPICS.push({
  id: '3.5', unit: '3', area: 'phys', ref: 'Diet and nutrition and performance', title: 'Carbo-loading, supplements and ergogenic aids', short: 'Depletion, repletion, tapering; whey and casein, creatine, caffeine; use and misuse',
  summary: 'Elite athletes manipulate diet and use legal supplements to gain an edge. Learn how carbohydrate loading supercompensates glycogen stores and the roles of depletion, repletion and tapering, and weigh up the benefits and risks of whey and casein protein, creatine and caffeine.',
  spec: [
    'Carbo-loading: the concepts and timing of depletion, repletion/loading and tapering',
    'The role of supplementation in sport: positive and negative aspects',
    'Use and misuse of supplements and ergogenic aids: protein (whey and casein), creatine and caffeine'
  ],
  learn: [
    { h: 'Carbohydrate loading (glycogen supercompensation)', html: `
[[d:carbload]]
<p>Muscle glycogen normally lasts about 90–120 minutes of hard endurance exercise. <b>Carbo-loading</b> increases glycogen stores above normal (up to about double) for events lasting longer than about 90 minutes (marathon, long-distance triathlon, road cycling).</p>
<div class="tbl"><table><tr><th>Phase</th><th>Classic method (about 7 days)</th><th>Modern method</th></tr>
<tr><td><b>Depletion</b></td><td>days 1–3: long, exhausting exercise and a low-carbohydrate, high-protein/fat diet to empty glycogen stores — this stimulates glycogen synthase, the enzyme that stores glycogen</td><td>not used (or one long session)</td></tr>
<tr><td><b>Repletion / loading</b></td><td>days 4–6: very high carbohydrate diet (≈ 8–10 g/kg/day) with little exercise; stores <b>supercompensate</b></td><td>1–3 days of high carbohydrate (≈ 10–12 g/kg/day)</td></tr>
<tr><td><b>Tapering</b></td><td colspan="2">training volume reduced in the final days/weeks (intensity maintained) so glycogen is not used up and muscles recover</td></tr></table></div>
<div class="grid g2"><div class="box good"><b class="lbl">Benefits</b><ul><li>more glycogen → delays fatigue (“hitting the wall”)</li><li>higher pace can be sustained for longer</li></ul></div>
<div class="box warn"><b class="lbl">Drawbacks</b><ul><li>water retention (≈ 3 g water per g glycogen) → weight gain, stiffness</li><li>depletion phase: fatigue, irritability, hypoglycaemia, poor-quality training, illness</li><li>digestive discomfort; no benefit for short events</li></ul></div></div>` },
    { h: 'Supplements and ergogenic aids', html: `
<p>An <b>ergogenic aid</b> is any substance, device or method that enhances performance. <b>Supplements</b> are products taken in addition to the diet. A “food first” approach is recommended: supplements should only add to a good diet.</p>
<div class="tbl"><table><tr><th>Supplement</th><th>How it works / use</th><th>Positive aspects</th><th>Negative aspects / misuse</th></tr>
<tr><td><b>Whey protein</b></td><td>fast-digesting milk protein, rich in leucine; taken soon after training</td><td>rapid rise in blood amino acids → stimulates muscle protein synthesis; recovery and hypertrophy; convenient</td><td>unnecessary if diet has enough protein; excess is used for energy or stored as fat; expensive; digestive problems; contamination risk</td></tr>
<tr><td><b>Casein protein</b></td><td>slow-digesting milk protein; often taken before sleep</td><td>steady release of amino acids overnight → reduces muscle breakdown</td><td>as above; heavy on the stomach</td></tr>
<tr><td><b>Creatine</b> (monohydrate)</td><td>increases muscle PC stores (loading ≈ 20 g/day for 5 days, then ≈ 3–5 g/day)</td><td>ATP-PC system lasts longer; faster PC recovery between repeated sprints; more high-quality training → strength and power gains</td><td>weight gain from water retention (bad for weight-category and endurance athletes); cramp, bloating, GI upset; no benefit for endurance; some people are non-responders</td></tr>
<tr><td><b>Caffeine</b></td><td>a stimulant (e.g. 3–6 mg/kg about an hour before)</td><td>increased alertness and concentration; reduced perception of effort and fatigue; increased mobilisation of fat → glycogen sparing in endurance events</td><td>insomnia, anxiety, tremor, raised HR; GI upset; tolerance; high doses harmful; not banned but monitored by WADA</td></tr></table></div>
<div class="box warn"><b class="lbl">Misuse and risk</b><p>Supplements are not regulated like medicines: some are <b>contaminated with banned substances</b>, and athletes are responsible for everything in their body (strict liability). Use batch-tested products (e.g. Informed Sport). Misuse includes excessive doses, using them to replace food, and young athletes using them unnecessarily.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why a 100 m sprinter might take creatine but a marathon runner probably would not. (4 marks)', s: ['Creatine increases muscle PC stores.', 'The sprinter relies on the ATP-PC system; more PC → ATP resynthesis for longer and faster recovery between repeated sprints in training → more power.', 'The marathon runner relies on the aerobic system, so extra PC gives little benefit.', 'Creatine causes water retention/weight gain, which increases the energy cost of running long distances.'], a: 'PC benefit for sprinters; weight gain and no aerobic benefit for marathon runners.' }
  ],
  pitfalls: ['Describing carbo-loading as “eating lots of pasta the night before” — explain depletion, repletion and tapering.', 'Saying creatine is a steroid or illegal — it is legal.', 'Saying caffeine is banned — it is legal but monitored.', 'Recommending carbo-loading for short events.', 'Ignoring contamination risk and strict liability.'],
  cards: [
    ['Carbo-loading?', 'Manipulating diet and training to supercompensate glycogen stores before endurance events.'], ['Depletion phase?', 'Exhausting exercise + low-carb diet to empty glycogen stores and stimulate glycogen synthase.'],
    ['Repletion phase?', 'High-carbohydrate diet with reduced training so stores supercompensate.'], ['Tapering?', 'Reducing training volume (maintaining intensity) before competition.'], ['Drawback of carbo-loading?', 'Water retention and weight gain; depletion causes fatigue and irritability.'],
    ['Whey vs casein?', 'Whey: fast-digesting, after training. Casein: slow-release, before sleep.'], ['Creatine benefit?', 'More PC → longer ATP-PC energy, faster recovery between sprints.'], ['Creatine side effect?', 'Water retention/weight gain; cramp, GI upset.'],
    ['Caffeine benefit?', 'Alertness, reduced perceived effort, fat mobilisation (glycogen sparing).'], ['Ergogenic aid?', 'Any substance, device or method that enhances performance.'], ['Strict liability?', 'Athletes are responsible for any substance found in their body.']
  ],
  quiz: [
    { q: 'Carbo-loading is most useful for…', o: ['a marathon', 'a 100 m sprint', 'a shot put', 'a 400 m race'], x: 'Events longer than ~90 minutes.' },
    { q: 'The depletion phase of classic carbo-loading involves…', o: ['exhaustive exercise and a low-carbohydrate diet', 'rest and a high-carbohydrate diet', 'creatine loading', 'fasting from water'], x: 'Empties glycogen stores.' },
    { q: 'Creatine supplementation mainly benefits the…', o: ['ATP-PC system', 'aerobic system', 'fat metabolism', 'Krebs cycle'], x: 'More PC.' },
    { q: 'A common side effect of creatine is…', o: ['weight gain from water retention', 'bradycardia', 'loss of muscle', 'improved VO₂max'], x: 'Water drawn into muscle.' },
    { q: 'Casein protein is often taken before sleep because it…', o: ['releases amino acids slowly', 'is absorbed fastest', 'contains caffeine', 'increases PC'], x: 'Slow digestion.' },
    { q: 'Caffeine may help endurance performance by…', o: ['mobilising fat and reducing perceived effort', 'increasing PC stores', 'increasing water retention', 'lowering HR'], x: 'Glycogen sparing and alertness.' },
    { q: 'A major risk of supplements is…', o: ['contamination with banned substances', 'they are all illegal', 'they always cause bradycardia', 'they cannot be bought'], x: 'Strict liability.' }
  ],
  exam: [
    { q: 'Describe the role of tapering before a major endurance event. [2]', m: 2, ms: ['training volume reduced (intensity maintained)', 'muscles recover / glycogen stores maximised / athlete fresh at peak'] },
    { q: 'Explain the potential benefits and drawbacks of caffeine for a road cyclist. [4]', m: 4, ms: ['benefit: stimulant — increased alertness/concentration', 'benefit: reduced perception of fatigue / mobilises fatty acids → glycogen sparing', 'drawback: insomnia / anxiety / tremor / raised HR', 'drawback: GI upset / dehydration / tolerance / monitored by WADA'] },
    { q: 'Evaluate the use of carbohydrate loading and creatine supplementation by different types of athlete. [8]', m: 8, lv: true, ms: ['carbo-loading: depletion → repletion → taper; supercompensation of glycogen', 'benefit for events > 90 min (marathon, triathlon) — delays fatigue', 'drawbacks: water retention/weight gain; depletion causes fatigue, irritability', 'creatine: ↑ PC → ATP-PC lasts longer; faster recovery between sprints', 'benefits power athletes/games players (sprints, weightlifting, rugby)', 'drawbacks: weight gain, cramp, GI upset, non-responders; no aerobic benefit', 'both legal; contamination risk; food-first approach', 'judgement: each must match the energy demands of the sport and the individual'], tag: 'ext' }
  ],
  sims: ['carbload', 'supps'], gens: ['creatine', 'caffeine', 'carbload']
});
