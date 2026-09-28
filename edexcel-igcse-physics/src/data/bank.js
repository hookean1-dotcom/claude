/* ==========================================================
   EXAM QUESTION BANK — harder, exam-style structured questions that go beyond the topic
   exercises: multi-step calculations, data analysis, practical design, synoptic links and
   6-mark extended responses. Each has a topic (for filtering) and, where relevant, po
   (a ‘P’ statement — Paper 2 / Physics only). g = 10 N/kg.
   ========================================================== */
const BANK = [
  /* ---------- Topic 1 ---------- */
  { topic: '1.2', tag: 'graph', q: 'A cyclist starts from rest. Her velocity–time graph is a straight line from (0 s, 0 m/s) to (8 s, 6 m/s), then a curve that levels off at 10 m/s at 30 s, after which she travels at 10 m/s until 40 s.', parts: [
    { q: 'Calculate her acceleration during the first 8 s.', m: 2, ms: ['a = 6 ÷ 8', '= 0.75 m/s²'] },
    { q: 'Calculate the distance travelled in the first 8 s.', m: 2, ms: ['area of triangle = ½ × 8 × 6', '= 24 m'] },
    { q: 'Describe how her acceleration changes between 8 s and 30 s, and explain how you can tell from the graph.', m: 2, ms: ['acceleration decreases (to zero)', 'gradient of the graph decreases / line becomes horizontal'] },
    { q: 'Estimate the total distance travelled in 40 s. Explain your method.', m: 3, ms: ['distance = area under the whole graph', 'estimate curved section by counting squares / approximating as a trapezium (≈ 22 × 8.5 ≈ 190 m)', 'total ≈ 24 + 190 + 100 ≈ 310 m (accept 290–330 m)'] },
    { q: 'Explain, in terms of forces, why her velocity levels off.', m: 3, ms: ['air resistance (drag) increases as speed increases', 'until drag + friction equals the driving force', 'resultant force zero so no acceleration / constant velocity'] }
  ] },
  { topic: '1.4', tag: 'calc', q: 'A lift of mass 800 kg carries passengers of total mass 400 kg. The lift cable provides an upward tension. g = 10 N/kg.', parts: [
    { q: 'Calculate the total weight of the lift and passengers.', m: 2, ms: ['W = (800 + 400) × 10', '= 12 000 N'] },
    { q: 'The lift accelerates upwards at 1.5 m/s². Calculate the tension in the cable.', m: 3, ms: ['resultant force = ma = 1200 × 1.5 = 1800 N', 'T − W = 1800', 'T = 13 800 N'] },
    { q: 'The lift then moves upwards at a constant speed of 2.0 m/s. State the tension and explain your answer.', m: 2, ms: ['12 000 N', 'constant velocity → resultant force zero → tension = weight'] },
    { q: 'Calculate the gravitational potential energy gained by the lift and passengers when they rise 24 m.', m: 2, ms: ['GPE = mgh = 1200 × 10 × 24', '= 288 000 J'] },
    { q: 'At constant speed the motor supplies 30 kW. Calculate the efficiency of the lift system.', m: 3, ms: ['useful power = weight × speed = 12 000 × 2.0 = 24 000 W', 'efficiency = 24 000 ÷ 30 000 × 100%', '= 80%'] }
  ] },
  { topic: '1.5', tag: 'ext', q: 'A government is considering lowering the speed limit on a busy road from 50 km/h to 30 km/h to reduce injuries to pedestrians.', parts: [
    { q: 'Convert 50 km/h into m/s.', m: 1, ms: ['50 ÷ 3.6 = 13.9 m/s'] },
    { q: 'A driver’s reaction time is 0.8 s. Calculate the thinking distance at 50 km/h and at 30 km/h.', m: 2, ms: ['50 km/h: 13.9 × 0.8 = 11 m', '30 km/h (8.3 m/s): 8.3 × 0.8 = 6.7 m'] },
    { q: 'The braking deceleration is 7.0 m/s² for both speeds. Show that the stopping distance at 50 km/h is about 25 m.', m: 3, ms: ['braking distance = v² ÷ 2a = 13.9² ÷ 14', '= 13.8 m', 'stopping = 11 + 13.8 ≈ 25 m'] },
    { q: 'Discuss how lowering the speed limit reduces the number and severity of injuries. Use ideas about stopping distance, kinetic energy and momentum.', m: 6, ms: ['lower speed → shorter thinking distance (∝ v) and much shorter braking distance (∝ v²)', 'car more likely to stop before hitting a pedestrian', 'KE ∝ v²: at 30 km/h KE is about 36% of that at 50 km/h', 'less energy to be transferred in a collision → less damage', 'lower momentum → smaller force for the same collision time (F = Δp/t)', 'judgement: large reduction in severity for a modest increase in journey time'] }
  ] },
  { topic: '1.6', tag: 'prac', q: 'A student is given a long copper wire, a pulley, a set of 1 kg masses, a metre rule and a marker. She wants to investigate how the extension of the wire depends on the load.', parts: [
    { q: 'Explain why a long wire is needed.', m: 2, ms: ['extension of a metal wire is very small', 'extension ∝ original length, so a long wire gives a measurable extension'] },
    { q: 'Describe how she should carry out the investigation, including how to measure the extension and one safety precaution.', m: 5, ms: ['clamp one end; pass the other over a pulley at the end of the bench with a hanger', 'attach a marker/tape flag to the wire above a fixed metre rule', 'record the marker position with a small initial load (to straighten the wire)', 'add masses one at a time, recording the marker position; extension = new − initial reading', 'goggles / keep feet away from the masses / cushion below the load'] },
    { q: 'Sketch the force–extension graph you would expect and label the region where Hooke’s law applies.', m: 3, ms: ['straight line through origin for small loads', 'labelled Hooke’s law / proportional region', 'curve with large extension for small force increase, then break'] }
  ] },
  { topic: '1.7', tag: 'calc', po: 1, q: 'A 2.0 kg ball moving at 6.0 m/s to the right collides head-on with a 3.0 kg ball moving at 2.0 m/s to the left. After the collision the 3.0 kg ball moves at 3.0 m/s to the right.', parts: [
    { q: 'Calculate the total momentum before the collision. State its direction.', m: 3, ms: ['right positive: 2.0 × 6.0 = 12 kg m/s', '3.0 × (−2.0) = −6.0 kg m/s', 'total = 6.0 kg m/s to the right'] },
    { q: 'Calculate the velocity of the 2.0 kg ball after the collision.', m: 3, ms: ['total after = 6.0 = 2.0v + 3.0 × 3.0', '2.0v = −3.0', 'v = −1.5 m/s i.e. 1.5 m/s to the left'] },
    { q: 'The balls are in contact for 0.050 s. Calculate the average force on the 3.0 kg ball.', m: 3, ms: ['change in momentum = 3.0 × 3.0 − 3.0 × (−2.0) = 15 kg m/s', 'F = 15 ÷ 0.050', '= 300 N'] },
    { q: 'State the size and direction of the average force on the 2.0 kg ball, and name the law you used.', m: 2, ms: ['300 N to the left', 'Newton’s third law'] },
    { q: 'Show whether kinetic energy is conserved in this collision.', m: 3, ms: ['before: ½ × 2 × 36 + ½ × 3 × 4 = 36 + 6 = 42 J', 'after: ½ × 2 × 2.25 + ½ × 3 × 9 = 2.25 + 13.5 = 15.75 J', 'not conserved — energy transferred to thermal/sound stores'] }
  ] },
  { topic: '1.8', tag: 'calc', po: 1, q: 'A uniform plank 6.0 m long and weighing 300 N rests on two supports: support A at the left end and support B 1.0 m from the right end. A painter of weight 700 N stands on the plank.', parts: [
    { q: 'The painter stands 2.0 m from A. Calculate the force from support B.', m: 3, ms: ['moments about A: F_B × 5.0 = 700 × 2.0 + 300 × 3.0', '5.0 F_B = 2300', 'F_B = 460 N'] },
    { q: 'Calculate the force from support A.', m: 1, ms: ['F_A = 1000 − 460 = 540 N'] },
    { q: 'The painter walks towards the right-hand end, beyond B. Explain why the plank may tip, and calculate how far beyond B he can stand before it starts to tip.', m: 4, ms: ['plank tips about B when force at A becomes zero', 'moments about B: 700 × x = 300 × 2.0 (plank’s centre is 2.0 m left of B)', 'x = 0.86 m', 'this is less than the 1.0 m overhang, so the plank tips before he reaches the end'] }
  ] },
  /* ---------- Topic 2 ---------- */
  { topic: '2.2', tag: 'calc', q: 'A family’s electric oven is rated 3.0 kW, 230 V. They use it for 1 hour 30 minutes each day. Electricity costs 28p per kilowatt-hour (kWh).', parts: [
    { q: 'Calculate the current drawn by the oven.', m: 2, ms: ['I = P ÷ V = 3000 ÷ 230', '= 13 A'] },
    { q: 'Explain why the oven is not connected with an ordinary 13 A plug.', m: 2, ms: ['working current is about 13 A (at or above the fuse rating)', 'fuse would blow / plug and cable would overheat — needs its own circuit with suitable breaker'] },
    { q: 'Calculate the energy transferred each day, in joules.', m: 2, ms: ['E = P × t = 3000 × 5400', '= 1.62 × 10⁷ J'] },
    { q: 'Calculate the cost of using the oven for 30 days.', m: 3, ms: ['energy per day = 3.0 kW × 1.5 h = 4.5 kWh', '30 days = 135 kWh', 'cost = 135 × 28p = £37.80'] }
  ] },
  { topic: '2.4', tag: 'data', q: 'A student measures the current in a component at different voltages: 0 V 0 mA; 0.2 V 0 mA; 0.4 V 0 mA; 0.6 V 2 mA; 0.7 V 12 mA; 0.8 V 40 mA; −2.0 V 0 mA.', parts: [
    { q: 'Identify the component. Give a reason.', m: 2, ms: ['diode', 'no current in reverse / current only flows above ≈ 0.6 V in the forward direction'] },
    { q: 'Calculate the resistance of the component at 0.7 V.', m: 3, ms: ['I = 0.012 A', 'R = 0.7 ÷ 0.012', '= 58 Ω'] },
    { q: 'Describe how the resistance changes as the voltage increases from 0.6 V to 0.8 V.', m: 2, ms: ['resistance decreases', 'at 0.8 V R = 0.8 ÷ 0.040 = 20 Ω (much smaller)'] },
    { q: 'Explain why a resistor should be placed in series with this component in the investigation.', m: 2, ms: ['to limit the current', 'large current above 0.6 V could overheat/damage the diode or ammeter'] }
  ] },
  { topic: '2.5', tag: 'calc', q: 'A 12 V battery is connected to a 4.0 Ω resistor in series with a filament lamp. The current is 1.5 A.', parts: [
    { q: 'Calculate the voltage across the 4.0 Ω resistor.', m: 2, ms: ['V = 1.5 × 4.0', '= 6.0 V'] },
    { q: 'Calculate the resistance of the lamp.', m: 3, ms: ['voltage across lamp = 12 − 6.0 = 6.0 V', 'R = 6.0 ÷ 1.5', '= 4.0 Ω'] },
    { q: 'Calculate the power of the lamp and the charge passing through it in 2 minutes.', m: 4, ms: ['P = IV = 1.5 × 6.0 = 9.0 W', 'Q = It', '= 1.5 × 120', '= 180 C'] },
    { q: 'A second identical lamp is added in parallel with the first. Explain what happens to the current from the battery.', m: 3, ms: ['total resistance of the parallel part decreases (lamps in parallel)', 'total circuit resistance decreases', 'so the current from the battery increases'] }
  ] },
  { topic: '2.6', tag: 'ext', po: 1, q: 'A photocopier and an inkjet printer both use electrostatic charge.', parts: [
    { q: 'Explain how a plastic ruler rubbed with a cloth can pick up small pieces of paper.', m: 4, ms: ['friction transfers electrons between the cloth and ruler', 'ruler becomes charged (e.g. negative)', 'charge on the ruler repels/attracts electrons in the paper, inducing an opposite charge on the near side', 'unlike charges attract; attraction > weight of paper'] },
    { q: 'Describe how an inkjet printer uses electrostatic charge to place ink on the page.', m: 3, ms: ['droplets are charged as they leave the nozzle', 'they pass between charged deflecting plates', 'the voltage on the plates (controlled by computer) sets how far each drop is deflected'] },
    { q: 'Suggest why the printer would not work if the droplets were uncharged.', m: 1, ms: ['uncharged droplets feel no force from the plates, so could not be steered'] }
  ] },
  /* ---------- Topic 3 ---------- */
  { topic: '3.1', tag: 'calc', q: 'Seismic P-waves travel through rock at 6.0 km/s. A P-wave has a frequency of 4.0 Hz.', parts: [
    { q: 'Calculate the wavelength of the P-wave.', m: 3, ms: ['v = 6000 m/s', 'λ = v ÷ f = 6000 ÷ 4.0', '= 1500 m'] },
    { q: 'Calculate the time period of the wave.', m: 2, ms: ['T = 1 ÷ f', '= 0.25 s'] },
    { q: 'An earthquake is 360 km from a seismometer. Calculate how long the P-wave takes to arrive.', m: 2, ms: ['t = d ÷ v = 360 000 ÷ 6000', '= 60 s'] },
    { q: 'P-waves are longitudinal. Describe the motion of the rock particles as a P-wave passes.', m: 2, ms: ['particles vibrate back and forth', 'parallel to the direction the wave travels (compressions and rarefactions)'] }
  ] },
  { topic: '3.4', tag: 'calc', q: 'A ray of light passes from air into a glass prism of refractive index 1.52. It enters the first face at an angle of incidence of 45°.', parts: [
    { q: 'Calculate the angle of refraction at the first face.', m: 3, ms: ['sin r = sin 45 ÷ 1.52', '= 0.465', 'r = 27.7°'] },
    { q: 'Calculate the critical angle for this glass.', m: 2, ms: ['sin c = 1 ÷ 1.52 = 0.658', 'c = 41°'] },
    { q: 'Inside the prism the ray meets the second face at an angle of incidence of 32°. State and explain what happens to the ray.', m: 2, ms: ['it refracts out of the prism (bending away from the normal)', 'because 32° is less than the critical angle (41°)'] },
    { q: 'White light is used instead. Explain why a spectrum is seen.', m: 2, ms: ['different colours (wavelengths) have slightly different refractive indices / refract by different amounts', 'violet refracts most, red least — colours separate (dispersion)'] }
  ] },
  { topic: '3.3', tag: 'ext', q: 'Different parts of the electromagnetic spectrum are used in hospitals.', parts: [
    { q: 'X-rays have a frequency of about 3 × 10¹⁸ Hz. Calculate their wavelength.', m: 3, ms: ['λ = c ÷ f', '= 3.0 × 10⁸ ÷ 3 × 10¹⁸', '= 1 × 10⁻¹⁰ m'] },
    { q: 'Explain how an x-ray image of a broken arm is produced.', m: 3, ms: ['x-rays pass through soft tissue', 'but are absorbed by bone', 'detector/film behind the arm records the shadow of the bone showing the break'] },
    { q: 'Gamma rays are used to sterilise surgical instruments and to treat cancer. Evaluate the use of gamma radiation in hospitals, including the risks to staff and how they are reduced.', m: 6, ms: ['gamma kills bacteria — sterilises sealed instruments without heat', 'penetrates packaging/body to reach tumours; beams from several directions focus dose on tumour', 'ionising — can damage healthy cells / cause cancer or mutations', 'staff risk from exposure', 'reduced by lead/concrete shielding, remote handling, leaving the room, limiting time, film badges', 'judgement: benefits outweigh risks when properly controlled'] }
  ] },
  { topic: '3.6', tag: 'prac', po: 1, q: 'Two students measure the speed of sound. Student A stands 150 m from a wall and claps; student B, standing next to A, times from the clap to hearing the echo. They repeat five times: 0.95 s, 0.80 s, 0.90 s, 1.10 s, 0.85 s.', parts: [
    { q: 'Identify the anomalous result and calculate the mean time without it.', m: 2, ms: ['1.10 s', 'mean = (0.95 + 0.80 + 0.90 + 0.85) ÷ 4 = 0.875 s'] },
    { q: 'Calculate the speed of sound from their results.', m: 3, ms: ['distance = 2 × 150 = 300 m', 'v = 300 ÷ 0.875', '= 343 m/s'] },
    { q: 'Explain why this method gives large uncertainties and suggest an improvement.', m: 3, ms: ['time is short (under 1 s) compared with reaction time ≈ 0.2 s', 'reaction time errors at start and stop', 'improvement: clap in time with echoes and time 20 intervals / greater distance / use microphones and electronic timer'] }
  ] },
  /* ---------- Topic 4 ---------- */
  { topic: '4.3', tag: 'calc', q: 'A roller-coaster car of mass 500 kg is pulled up to the top of a 30 m high hill and released from rest. g = 10 N/kg.', parts: [
    { q: 'Calculate the GPE of the car at the top.', m: 2, ms: ['GPE = 500 × 10 × 30', '= 150 000 J'] },
    { q: 'The motor lifts the car to the top in 50 s. Calculate the minimum power of the motor.', m: 2, ms: ['P = 150 000 ÷ 50', '= 3000 W'] },
    { q: 'Calculate the maximum speed of the car at the bottom of the first drop, assuming no energy is wasted.', m: 3, ms: ['KE = 150 000 J', 'v² = 2 × 150 000 ÷ 500 = 600', 'v = 24.5 m/s'] },
    { q: 'The car’s actual speed at the bottom is 22 m/s. Calculate the percentage of the GPE wasted.', m: 3, ms: ['KE = ½ × 500 × 22² = 121 000 J', 'wasted = 29 000 J', '29 000 ÷ 150 000 × 100 = 19%'] },
    { q: 'Explain why the second hill must be lower than the first.', m: 2, ms: ['energy is dissipated by friction/air resistance', 'so the car has less total energy and cannot reach the original height'] }
  ] },
  { topic: '4.2', tag: 'ext', q: 'A homeowner is deciding how to reduce heating bills.', parts: [
    { q: 'Explain why a hot radiator heats the whole room, referring to convection.', m: 3, ms: ['air next to the radiator is heated, expands and becomes less dense', 'warm air rises; cooler denser air sinks to replace it', 'convection current circulates warm air round the room'] },
    { q: 'Loft insulation costs £400 and saves £160 per year; double glazing costs £4500 and saves £180 per year. Calculate the payback time for each.', m: 2, ms: ['loft: 400 ÷ 160 = 2.5 years', 'double glazing: 4500 ÷ 180 = 25 years'] },
    { q: 'Explain how loft insulation and cavity-wall insulation reduce energy transfer, and recommend which improvement the homeowner should make first.', m: 5, ms: ['loft insulation: fibres trap air, a poor conductor', 'reduces conduction and convection through the roof', 'cavity foam traps air in pockets, preventing convection currents in the cavity', 'loft insulation has the shortest payback / most cost-effective first', 'justified recommendation'] }
  ] },
  { topic: '4.4', tag: 'ext', po: 1, q: 'An island community currently generates electricity using diesel generators.', parts: [
    { q: 'Describe the energy transfers in a diesel generator.', m: 3, ms: ['chemical store of diesel', 'burned in engine → kinetic store of moving parts (and thermal store wasted)', 'generator → energy transferred electrically'] },
    { q: 'Evaluate replacing the diesel generators with a combination of wind turbines and solar panels.', m: 6, ms: ['diesel: reliable, available on demand; but non-renewable, CO₂, costly to import fuel', 'wind and solar: renewable, no fuel cost, no CO₂ during operation', 'wind: unreliable when calm; solar: none at night, less in cloud', 'combining them helps, as wind is often stronger when sun is weaker', 'need energy storage (batteries/pumped storage) or keep diesel as back-up', 'judgement with reasons'] }
  ] },
  /* ---------- Topic 5 ---------- */
  { topic: '5.2', tag: 'calc', q: 'A submarine is at a depth of 200 m in seawater of density 1030 kg/m³. Atmospheric pressure is 1.0 × 10⁵ Pa. g = 10 N/kg.', parts: [
    { q: 'Calculate the pressure due to the water at this depth.', m: 2, ms: ['p = hρg = 200 × 1030 × 10', '= 2.06 × 10⁶ Pa'] },
    { q: 'Calculate the total pressure on the submarine.', m: 1, ms: ['2.06 × 10⁶ + 1.0 × 10⁵ = 2.16 × 10⁶ Pa'] },
    { q: 'An escape hatch has an area of 0.50 m². Inside the submarine the air is at atmospheric pressure. Calculate the resultant force on the hatch.', m: 3, ms: ['pressure difference = 2.06 × 10⁶ Pa', 'F = pA = 2.06 × 10⁶ × 0.50', '= 1.03 × 10⁶ N'] },
    { q: 'Explain why the pressure acts on the sides and bottom of the submarine as well as the top.', m: 1, ms: ['pressure at a point in a liquid acts equally in all directions'] }
  ] },
  { topic: '5.6', tag: 'data', q: 'A student traps air in a syringe and measures its volume at different pressures, keeping the temperature constant: 100 kPa 50 cm³; 125 kPa 40 cm³; 160 kPa 31 cm³; 200 kPa 25 cm³; 250 kPa 20 cm³.', parts: [
    { q: 'Show that the results obey p₁V₁ = p₂V₂. Identify any result that does not fit.', m: 3, ms: ['pV = 5000, 5000, 4960, 5000, 5000 (kPa cm³)', 'all approximately constant (5000)', '160 kPa result slightly low (should be 31.25 cm³) — within experimental error'] },
    { q: 'Predict the volume at 400 kPa.', m: 1, ms: ['5000 ÷ 400 = 12.5 cm³'] },
    { q: 'Explain, in terms of molecules, why the pressure increases as the volume decreases.', m: 3, ms: ['same number of molecules in a smaller space', 'collide with the walls more frequently', 'more force per unit area / greater pressure (same average speed as T constant)'] },
    { q: 'The syringe is then sealed at 20 cm³ and heated from 17 °C to 87 °C. Calculate the new pressure (starting at 250 kPa).', m: 3, ms: ['T₁ = 290 K, T₂ = 360 K', 'p₂ = 250 × 360 ÷ 290', '= 310 kPa'] }
  ] },
  { topic: '5.4', tag: 'calc', po: 1, q: 'An electric kettle contains 1.2 kg of water at 15 °C. The kettle has a power of 2.4 kW. The specific heat capacity of water is 4200 J/kg °C.', parts: [
    { q: 'Calculate the energy needed to heat the water to 100 °C.', m: 3, ms: ['ΔT = 85 °C', 'ΔQ = 1.2 × 4200 × 85', '= 428 400 J'] },
    { q: 'Calculate the minimum time needed to bring the water to the boil.', m: 2, ms: ['t = E ÷ P = 428 400 ÷ 2400', '= 180 s (178.5 s)'] },
    { q: 'The kettle actually takes 210 s. Calculate its efficiency.', m: 3, ms: ['energy supplied = 2400 × 210 = 504 000 J', 'efficiency = 428 400 ÷ 504 000 × 100%', '= 85%'] },
    { q: 'Suggest two ways the kettle could be made more efficient.', m: 2, ms: ['insulate the kettle body / double wall', 'keep the lid closed / element at the bottom, covered by water'] }
  ] },
  { topic: '5.3', tag: 'ext', po: 1, q: 'A student heats solid stearic acid in a boiling tube until it is completely liquid, then records the temperature every 30 s as it cools.', parts: [
    { q: 'Sketch the cooling curve she would obtain, and label where the stearic acid is solid, liquid, and changing state.', m: 3, ms: ['temperature falls (liquid)', 'flat section at the freezing point (≈ 69 °C) — changing state', 'temperature falls again (solid), curve levelling towards room temperature'] },
    { q: 'Explain, in terms of particles and energy, why the temperature stays constant while the stearic acid solidifies, even though it is still losing energy to the surroundings.', m: 4, ms: ['as it solidifies, bonds/forces form between particles', 'this releases energy (potential energy decreases)', 'the energy released balances the energy lost to the surroundings', 'so the kinetic energy (temperature) of particles stays the same'] }
  ] },
  /* ---------- Topic 6 ---------- */
  { topic: '6.3', tag: 'ext', q: 'A student builds a simple d.c. motor with a coil of 20 turns between two magnets.', parts: [
    { q: 'Use Fleming’s left-hand rule to explain how to find the direction of the force on one side of the coil.', m: 2, ms: ['first finger = field (N → S), second finger = current (+ → −)', 'thumb gives the direction of the force (motion); all at right angles'] },
    { q: 'Explain why the coil would stop after half a turn without a commutator.', m: 3, ms: ['after half a turn the sides of the coil swap positions', 'but the current direction in each side is the same, so forces reverse relative to rotation', 'coil oscillates/stops in the vertical position'] },
    { q: 'Describe and explain three changes that would make the motor spin faster.', m: 3, ms: ['more current — larger force', 'stronger magnets — larger force', 'more turns on the coil / iron core — larger total force/turning effect'] }
  ] },
  { topic: '6.4', tag: 'prac', q: 'A student investigates how the voltage induced in a coil depends on the speed of a magnet dropped through it. The coil is connected to a data logger.', parts: [
    { q: 'Explain why a voltage is induced as the magnet falls through the coil.', m: 2, ms: ['the magnetic field through the coil changes', 'a changing field through a coil induces a voltage'] },
    { q: 'Describe how she could vary the speed of the magnet and what she should keep constant.', m: 4, ms: ['drop the magnet from different heights above the coil', 'speed increases with height (v² = 2gh)', 'control: same magnet, same coil/number of turns, drop through the centre/same orientation', 'measure peak voltage for each height; repeat'] },
    { q: 'Predict how the peak voltage changes if a coil with twice as many turns is used, and explain.', m: 2, ms: ['peak voltage approximately doubles', 'more turns → voltage induced in each turn adds up'] }
  ] },
  { topic: '6.5', tag: 'calc', po: 1, q: 'A power station generates 50 MW at 25 kV. The power is transmitted through cables of total resistance 5.0 Ω.', parts: [
    { q: 'Calculate the current in the cables if the power is transmitted at 25 kV.', m: 2, ms: ['I = P ÷ V = 50 × 10⁶ ÷ 25 000', '= 2000 A'] },
    { q: 'A step-up transformer increases the voltage to 400 kV. Calculate the new current, assuming the transformer is 100% efficient.', m: 2, ms: ['I = 50 × 10⁶ ÷ 400 000', '= 125 A'] },
    { q: 'The heating power in the cables is given by P = I²R. Calculate the power wasted in the cables in each case and comment.', m: 4, ms: ['at 25 kV: 2000² × 5.0 = 2.0 × 10⁷ W (40% of the power!)', 'at 400 kV: 125² × 5.0 = 78 000 W', 'about 256 times less / 0.16%', 'high voltage transmission greatly reduces energy wasted'] },
    { q: 'The step-up transformer has 1000 turns on its primary coil. Calculate the number of turns on the secondary coil.', m: 2, ms: ['ns = np × Vs ÷ Vp = 1000 × 400 000 ÷ 25 000', '= 16 000 turns'] }
  ] },
  /* ---------- Topic 7 ---------- */
  { topic: '7.3', tag: 'data', q: 'Iodine-131 is a beta and gamma emitter used to treat thyroid cancer. Its half-life is 8 days. A patient receives a dose with an activity of 3.2 × 10⁹ Bq.', parts: [
    { q: 'Calculate the activity after 24 days.', m: 2, ms: ['3 half-lives', '3.2 × 10⁹ ÷ 8 = 4.0 × 10⁸ Bq'] },
    { q: 'Calculate how many days it takes for the activity to fall below 1.0 × 10⁸ Bq.', m: 3, ms: ['3.2 × 10⁹ → 1.6 × 10⁹ → 8 × 10⁸ → 4 × 10⁸ → 2 × 10⁸ → 1 × 10⁸', '5 half-lives', '40 days'] },
    { q: 'Iodine-131 (Z = 53) decays by beta emission to xenon. Write the nuclear equation.', m: 3, ms: ['¹³¹₅₃I → ¹³¹₅₄Xe + ⁰₋₁β', 'mass numbers balanced', 'atomic numbers balanced (+ γ may be included)'] },
    { q: 'Suggest why the patient is advised to keep away from pregnant women and young children for a few days.', m: 2, ms: ['the patient emits gamma radiation (penetrates the body) / is contaminated', 'ionising radiation is more harmful to rapidly dividing cells / fetus'] }
  ] },
  { topic: '7.5', tag: 'ext', q: 'Nuclear power stations use the fission of uranium-235.', parts: [
    { q: 'Complete the equation: ¹₀n + ²³⁵₉₂U → ¹⁴¹₅₆Ba + ⁹²ₓKr + y ¹₀n. Find x and y.', m: 2, ms: ['x = 36', 'y = 3'] },
    { q: 'Explain how a steady rate of fission is maintained in a reactor. Refer to the moderator and control rods.', m: 6, ms: ['each fission releases 2–3 fast neutrons', 'moderator (graphite/water) slows neutrons down', 'slow neutrons are more likely to be absorbed by U-235 and cause fission', 'control rods (boron) absorb neutrons', 'rods raised/lowered to adjust number of neutrons', 'so on average one neutron from each fission causes one further fission'] },
    { q: 'Explain why the spent fuel is more dangerous than the fresh fuel.', m: 2, ms: ['fission products (daughter nuclei) are highly radioactive', 'many are strong beta/gamma emitters with long half-lives; fresh uranium is only weakly radioactive'] }
  ] },
  { topic: '7.4', tag: 'ext', q: 'A company wants to check for leaks in an underground water pipe using a radioactive tracer.', parts: [
    { q: 'Describe how the tracer would be used to find the leak.', m: 3, ms: ['a small amount of radioactive tracer is added to the water in the pipe', 'a detector (GM tube) is moved along above the pipe', 'a higher count rate where the tracer collects in the soil shows the leak'] },
    { q: 'Explain which type of radiation and what half-life the tracer should have.', m: 4, ms: ['gamma', 'can penetrate the soil to reach the detector (alpha/beta absorbed)', 'short half-life (hours/days)', 'long enough to complete the test but decays quickly so little lasting contamination of the water supply'] }
  ] },
  /* ---------- Topic 8 ---------- */
  { topic: '8.1', tag: 'calc', q: 'A geostationary communications satellite orbits the Earth once every 24 hours at an orbital radius of 4.2 × 10⁷ m.', parts: [
    { q: 'Calculate the orbital speed of the satellite.', m: 3, ms: ['T = 24 × 3600 = 86 400 s', 'v = 2π × 4.2 × 10⁷ ÷ 86 400', '= 3.1 × 10³ m/s'] },
    { q: 'Explain why a geostationary satellite stays above the same point on the Earth’s surface.', m: 2, ms: ['its period equals the Earth’s rotation period (24 h)', 'orbits above the equator in the same direction as the Earth rotates'] },
    { q: 'Explain why the satellite is accelerating even though its speed is constant, and name the force responsible.', m: 3, ms: ['direction of motion changes continually', 'so velocity changes — acceleration towards the Earth’s centre', 'caused by the gravitational force of the Earth'] },
    { q: 'Compare the orbit of this satellite with the orbit of a comet around the Sun.', m: 2, ms: ['satellite orbit circular, constant speed', 'comet orbit highly elliptical; speed greatest nearest the Sun'] }
  ] },
  { topic: '8.2', tag: 'ext', q: 'The Sun is a main sequence star with a surface temperature of about 5800 K.', parts: [
    { q: 'State what colour the Sun is and explain how a star’s colour depends on its temperature.', m: 2, ms: ['yellow (yellow-white)', 'hotter stars emit more short-wavelength light — blue; cooler stars red'] },
    { q: 'Describe the life cycle of the Sun from its formation to its final stage.', m: 6, ms: ['formed from a nebula (gas and dust) pulled together by gravity', 'protostar heats up until hydrogen fusion begins', 'main sequence: fusion outward pressure balances gravity; stable for billions of years', 'when core hydrogen runs out it expands and cools into a red giant', 'outer layers drift away (planetary nebula)', 'core becomes a white dwarf, which cools and fades'] }
  ] },
  { topic: '8.4', tag: 'calc', po: 1, q: 'The hydrogen-alpha line has a laboratory wavelength of 656.3 nm. It is observed in the spectra of three galaxies: A at 662.9 nm, B at 669.4 nm and C at 682.5 nm. c = 3.0 × 10⁸ m/s.', parts: [
    { q: 'Calculate the velocity of galaxy B.', m: 3, ms: ['Δλ = 669.4 − 656.3 = 13.1 nm', 'v = c × Δλ ÷ λ₀ = 3.0 × 10⁸ × 13.1 ÷ 656.3', '= 6.0 × 10⁶ m/s'] },
    { q: 'Galaxy A is 150 million light-years away. Use the data to estimate the distance of galaxy C. Explain your reasoning.', m: 3, ms: ['Δλ for A = 6.6 nm; for C = 26.2 nm (≈ 4 times)', 'recession speed is proportional to distance', 'C is about 4 × 150 = 600 million light-years away'] },
    { q: 'Explain how these observations, together with the cosmic microwave background radiation, support the Big Bang theory.', m: 5, ms: ['light from galaxies is red-shifted → they are moving away', 'more distant galaxies move faster → the universe is expanding', 'extrapolating back, the universe began from a small, hot, dense state', 'CMB: microwave radiation from every direction', 'remnant of early radiation, stretched into microwaves by expansion — predicted by the Big Bang'] }
  ] },
  { topic: '8.3', tag: 'graph', po: 1, q: 'Star X has an absolute magnitude of −5 and a surface temperature of 3500 K. Star Y has an absolute magnitude of +12 and a surface temperature of 12 000 K.', parts: [
    { q: 'Explain what is meant by absolute magnitude.', m: 2, ms: ['how bright a star would appear', 'if it were at a standard distance of 10 parsecs'] },
    { q: 'State which star is brighter and which is hotter.', m: 2, ms: ['X is brighter (more negative magnitude)', 'Y is hotter'] },
    { q: 'Identify the type of star X and Y are, and explain how their positions on the HR diagram show this.', m: 4, ms: ['X: red giant/supergiant', 'top right — cool but very bright, so very large', 'Y: white dwarf', 'bottom left — hot but dim, so very small'] }
  ] },
  /* ---------- Synoptic / multi-topic ---------- */
  { topic: '4.3', tag: 'synoptic', q: 'An electric motor lifts a 25 kg load through 3.0 m in 6.0 s. The motor runs from a 24 V supply and draws a current of 2.0 A. g = 10 N/kg.', parts: [
    { q: 'Calculate the useful work done on the load.', m: 2, ms: ['W = mgh = 25 × 10 × 3.0', '= 750 J'] },
    { q: 'Calculate the electrical energy supplied to the motor in 6.0 s.', m: 2, ms: ['E = IVt = 2.0 × 24 × 6.0', '= 288 J'] },
    { q: 'The student’s answers to (a) and (b) suggest an efficiency above 100%. Explain what this tells you about the student’s data, and state the correct principle.', m: 3, ms: ['efficiency cannot exceed 100% — energy cannot be created (conservation of energy)', 'so at least one measurement is wrong (e.g. the current or time is too small)', 'useful output must be less than input; e.g. the current must be at least 750 ÷ (24 × 6) ≈ 5.2 A'] }
  ] },
  { topic: '2.2', tag: 'synoptic', q: 'An immersion heater of resistance 23 Ω is connected to the 230 V mains and used to heat 0.50 kg of water. Specific heat capacity of water = 4200 J/kg °C.', po: 1, parts: [
    { q: 'Calculate the current in the heater and its power.', m: 3, ms: ['I = V ÷ R = 230 ÷ 23 = 10 A', 'P = IV', '= 2300 W'] },
    { q: 'Calculate the temperature rise of the water after 60 s, assuming all the energy heats the water.', m: 3, ms: ['E = Pt = 2300 × 60 = 138 000 J', 'ΔT = E ÷ (mc) = 138 000 ÷ (0.50 × 4200)', '= 66 °C'] },
    { q: 'Explain why the actual temperature rise is smaller.', m: 2, ms: ['energy transferred to the container/surroundings', 'some water evaporates / heater itself warms up'] }
  ] },
  { topic: '7.6', tag: 'synoptic', q: 'The Sun releases energy by nuclear fusion in its core.', parts: [
    { q: 'Explain why fusion needs the extremely high temperature and pressure found in the Sun’s core.', m: 4, ms: ['nuclei are positively charged and repel', 'high temperature → nuclei move fast enough to overcome repulsion and get close', 'high pressure/density → nuclei close together, collisions frequent', 'so fusion can happen at a high enough rate'] },
    { q: 'Explain why the Sun does not collapse under its own gravity during its main-sequence life.', m: 2, ms: ['energy released by fusion creates outward (thermal/radiation) pressure', 'which balances the inward pull of gravity'] },
    { q: 'Give two advantages of fusion over fission as a future energy source on Earth.', m: 2, ms: ['fuel (hydrogen isotopes) plentiful, e.g. from seawater', 'little long-lived radioactive waste / no chain-reaction runaway risk'] }
  ] }
];
