/* ==========================================================
   TEST QUESTION BANK — harder, test-style questions that go beyond the topic exercises:
   multi-step calculations, data analysis, planning, linking ideas across topics and
   longer explanations. ch = ★ Challenge. g = 10 N/kg.
   ========================================================== */
const BANK = [
  /* ---------- Unit 1 Basic forces ---------- */
  { topic: '1.3', tag: 'ext', q: 'A car is being driven along a straight, flat road.', parts: [
    { q: 'Name the force that pushes the car forwards and two forces that act against its motion.', m: 3, ms: ['driving force / thrust (from the engine through the tyres)', 'air resistance / drag', 'friction (e.g. in the axles / rolling resistance)'] },
    { q: 'The driver keeps the accelerator pressed the same amount. The car speeds up at first but then travels at a steady speed. Explain why.', m: 4, ms: ['at first driving force is bigger than resistive forces / unbalanced forwards so it speeds up', 'air resistance increases as speed increases', 'until resistive forces = driving force', 'balanced forces → steady speed'] }
  ] },
  { topic: '1.2', tag: '', q: 'A hot-air balloon is floating at a constant height.', parts: [
    { q: 'Name the two vertical forces acting on the balloon.', m: 2, ms: ['weight', 'upthrust'] },
    { q: 'Compare the sizes of the two forces and explain how you know.', m: 2, ms: ['they are equal', 'it is not moving up or down / forces balanced'] },
    { q: 'The pilot turns the burner off and the air in the balloon cools. Predict and explain what happens.', m: 3, ms: ['balloon sinks / moves down', 'the cooler air is denser so upthrust decreases / weight now bigger than upthrust', 'unbalanced force downwards'], ch: 1 }
  ] },
  { topic: '1.4', tag: 'prac', ch: 1, q: 'Some students want to find out whether the temperature of the water affects how long a film-canister rocket takes to launch.', parts: [
    { q: 'Write a prediction, with a reason.', m: 2, ms: ['warmer water → shorter time to launch', 'the reaction is faster / gas is made more quickly / pressure builds faster'] },
    { q: 'Describe a method for their investigation, including the variables they should control.', m: 4, ms: ['use water at different temperatures, e.g. 10, 20, 30, 40, 50 °C (measured with a thermometer)', 'same volume of water and same amount of tablet', 'start the stopwatch when the lid is closed; stop at launch', 'repeat three times for each temperature and calculate means'] },
    { q: 'Suggest why the students should not use water hotter than about 50 °C.', m: 1, ms: ['risk of scalds / canister may deform / reaction too fast to time'] }
  ] },

  /* ---------- Unit 2 Measuring forces ---------- */
  { topic: '2.1', tag: 'calc', q: 'A tug of war: Team A pulls with forces of 250 N, 300 N and 280 N. Team B pulls with forces of 260 N, 310 N and 240 N.', parts: [
    { q: 'Calculate the total force of each team.', m: 2, ms: ['A: 830 N', 'B: 810 N'] },
    { q: 'Calculate the resultant force and state its direction.', m: 2, ms: ['20 N', 'towards team A'] },
    { q: 'A fourth person joins team B. What is the smallest pull they must add for the rope not to move towards team A?', m: 1, ms: ['20 N'] },
    { q: 'Explain why the rope moves slowly at first but then faster and faster if the resultant stays the same.', m: 2, ms: ['a resultant force causes acceleration / keeps speeding it up', 'the speed keeps increasing while the force is unbalanced'], ch: 1 }
  ] },
  { topic: '2.2', tag: 'graph', q: 'A student tests two springs, A and B. Spring A stretches 2.0 cm for each 1 N. Spring B stretches 5.0 cm for each 1 N. Both obey Hooke’s law up to 4 N.', parts: [
    { q: 'Calculate the extension of each spring for a force of 3 N.', m: 2, ms: ['A: 6.0 cm', 'B: 15.0 cm'] },
    { q: 'Sketch force–extension lines for both springs on the same axes.', m: 2, ms: ['both straight lines through the origin', 'B has the smaller gradient (force on y-axis) / stretches more for each force'] },
    { q: 'Which spring would make the better newton meter for measuring small forces (0–1 N)? Explain.', m: 2, ms: ['spring B', 'it stretches more for each newton, so readings are more precise / bigger scale divisions'], ch: 1 }
  ] },
  { topic: '2.3', tag: 'data', q: 'Two groups measure the force to pop the same brand of party popper. Group 1: 4.8, 5.3, 5.1, 4.9, 5.4 N. Group 2: 3.9, 6.5, 5.0, 4.2, 5.9 N.', parts: [
    { q: 'Calculate the mean for each group.', m: 2, ms: ['group 1: 25.5 ÷ 5 = 5.1 N', 'group 2: 25.5 ÷ 5 = 5.1 N'] },
    { q: 'State the range for each group.', m: 2, ms: ['group 1: 4.8–5.4 N', 'group 2: 3.9–6.5 N'] },
    { q: 'Which group’s results are more repeatable? Explain.', m: 2, ms: ['group 1', 'smaller range / results closer together'] },
    { q: 'Suggest one reason for the wide spread in group 2’s results.', m: 1, ms: ['pulled at different speeds / angles / hard to read the meter at the pop / different people reading'] }
  ] },

  /* ---------- Unit 3 Mass and weight ---------- */
  { topic: '3.3', tag: 'calc', q: 'An astronaut and her spacesuit have a combined mass of 120 kg. (g: Earth 10 N/kg, Moon 1.6 N/kg, Mars 3.7 N/kg)', parts: [
    { q: 'Calculate her weight in the suit on Earth, on the Moon and on Mars.', m: 3, ms: ['Earth: 1200 N', 'Moon: 192 N', 'Mars: 444 N'] },
    { q: 'She can lift a maximum weight of 600 N. Calculate the greatest mass of rock she could lift on the Moon.', m: 2, ms: ['m = 600 ÷ 1.6', '= 375 kg'], ch: 1 },
    { q: 'Explain why it would still be hard to throw a heavy rock sideways on the Moon, even though it weighs less.', m: 2, ms: ['the rock’s mass is the same', 'so the same force is needed to speed it up / change its motion'], ch: 1 }
  ] },
  { topic: '3.2', tag: 'data', q: 'A student hangs different masses on a newton meter on a distant planet. 0.5 kg → 12.5 N; 1.0 kg → 25 N; 1.5 kg → 37.5 N; 2.0 kg → 50 N.', parts: [
    { q: 'Calculate the gravitational field strength on the planet.', m: 2, ms: ['g = W ÷ m, e.g. 25 ÷ 1.0', '= 25 N/kg'] },
    { q: 'Suggest which planet in the Solar System this could be.', m: 1, ms: ['Jupiter'] },
    { q: 'Calculate the weight of a 70 kg person on this planet.', m: 2, ms: ['70 × 25', '= 1750 N'] }
  ] },

  /* ---------- Unit 4 Density ---------- */
  { topic: '4.2', tag: 'calc', ch: 1, q: 'A jeweller wants to check whether a ring is pure gold (19.3 g/cm³). The ring has a mass of 38.6 g. When lowered into a measuring cylinder, the water rises from 20.0 cm³ to 22.5 cm³.', parts: [
    { q: 'Calculate the volume of the ring.', m: 1, ms: ['2.5 cm³'] },
    { q: 'Calculate the density of the ring.', m: 2, ms: ['38.6 ÷ 2.5', '= 15.4 g/cm³'] },
    { q: 'Is the ring pure gold? Explain.', m: 2, ms: ['no', 'its density is less than 19.3 g/cm³ / it must contain a less dense metal'] },
    { q: 'The measuring cylinder has 0.5 cm³ divisions. Explain why this makes the answer uncertain, and suggest a better method.', m: 2, ms: ['the volume is small compared with the scale divisions / a reading error of 0.25 cm³ is 10% of 2.5', 'use a narrower cylinder with smaller divisions / a eureka can and small cylinder / weigh in water'] }
  ] },
  { topic: '4.4', tag: 'ext', q: 'Explain, using ideas about particles and density, why a helium balloon rises in air, a hot-air balloon rises in cold air, and a balloon filled with carbon dioxide sinks.', m: 6, ms: ['a balloon rises if its average density is less than the air around it', 'helium is less dense than air (lighter particles)', 'hot air: particles move faster and spread out, so the same mass takes up more volume', 'so hot air is less dense than the cooler air outside', 'carbon dioxide is denser than air (heavier particles)', 'so the CO₂ balloon’s weight is bigger than the upthrust and it sinks'] },
  { topic: '4.3', tag: 'prac', q: 'You are given a small irregular lump of modelling clay, a balance, a measuring cylinder, water and thread.', parts: [
    { q: 'Describe how to find the density of the clay.', m: 4, ms: ['measure the mass on a (zeroed) balance', 'read the water level in the measuring cylinder', 'lower the clay in on the thread until covered and read the new level', 'volume = difference; density = mass ÷ volume'] },
    { q: 'The clay is then shaped into a boat. Explain whether its density changes.', m: 2, ms: ['no — the density of the clay does not change', 'mass and volume of clay are the same (the boat floats because of its average density / the air it encloses)'], ch: 1 }
  ] },

  /* ---------- Unit 5 Upthrust ---------- */
  { topic: '5.2', tag: 'calc', q: 'A 2.0 kg block of aluminium has a volume of 740 cm³. It hangs from a newton meter and is lowered completely into water. (1 cm³ of water has a mass of 1 g; g = 10 N/kg)', parts: [
    { q: 'Calculate the weight of the block in air.', m: 1, ms: ['20 N'] },
    { q: 'Calculate the weight of the water it displaces.', m: 2, ms: ['740 g = 0.74 kg', '0.74 × 10 = 7.4 N'] },
    { q: 'Calculate the reading on the newton meter when the block is under water.', m: 2, ms: ['20 − 7.4', '= 12.6 N'] },
    { q: 'The block is lowered into salt water instead. Explain how the reading changes.', m: 2, ms: ['reading is smaller', 'salt water is denser so the displaced water weighs more / bigger upthrust'], ch: 1 }
  ] },
  { topic: '5.1', tag: 'data', q: 'Some objects are put in water (1.0 g/cm³) and in oil (0.9 g/cm³). Object P: 0.6 g/cm³. Object Q: 0.95 g/cm³. Object R: 1.2 g/cm³.', parts: [
    { q: 'Which objects float in water?', m: 1, ms: ['P and Q'] },
    { q: 'Which objects float in oil?', m: 1, ms: ['P only'] },
    { q: 'Oil is carefully poured on top of water in a tall jar and all three objects are added. Describe where each ends up and explain.', m: 3, ms: ['P floats on the oil (less dense than oil)', 'Q sinks through the oil and floats on the water / sits at the boundary (between 0.9 and 1.0)', 'R sinks to the bottom (denser than both)'] },
    { q: 'Explain why P floats higher in water than Q does.', m: 2, ms: ['P is less dense', 'so it needs to displace less water to make upthrust = weight / less of it is under water'], ch: 1 }
  ] },
  { topic: '5.3', tag: 'ext', q: 'A fish can move up and down in the water by changing the amount of gas in its swim bladder. Use ideas about weight, upthrust and density to explain how it rises and sinks.', m: 5, ms: ['more gas in the swim bladder increases the fish’s volume (with almost no extra mass)', 'so its average density decreases / upthrust increases', 'upthrust bigger than weight → it rises', 'letting gas out reduces its volume → density increases / upthrust decreases', 'weight bigger than upthrust → it sinks (equal → stays at that depth)'] },

  /* ---------- Unit 6 Energy ---------- */
  { topic: '6.2', tag: 'data', q: 'A student drops a ball from different heights and measures the bounce. Drop 50 cm → bounce 35 cm; 100 cm → 70 cm; 150 cm → 104 cm; 200 cm → 141 cm.', parts: [
    { q: 'Calculate bounce ÷ drop for each result.', m: 2, ms: ['0.70, 0.70, 0.69, 0.705 (≈ 0.7)', 'all about 0.7'] },
    { q: 'What fraction of the ball’s energy is transferred to other stores in each bounce?', m: 1, ms: ['about 0.3 / 30%'], ch: 1 },
    { q: 'Name the stores the energy is transferred to.', m: 2, ms: ['thermal (of the ball, floor and air)', 'sound transfers energy to the surroundings (ends up thermal)'] },
    { q: 'Predict the height of the second bounce after a 200 cm drop.', m: 2, ms: ['0.7 × 141', '≈ 99 cm'], ch: 1 }
  ] },
  { topic: '6.3', tag: 'ext', q: 'Kayla says: “A glass of hot water at 80 °C contains more thermal energy than a swimming pool at 25 °C, because it is hotter.” Explain whether Kayla is right, using the ideas of temperature and thermal energy.', m: 5, ms: ['Kayla is wrong', 'temperature is a measure of the average energy of the particles (how hot)', 'thermal energy is the total energy of all the particles', 'the swimming pool has a vastly greater mass / number of particles', 'so it has far more thermal energy even though each particle has less energy on average'] },
  { topic: '6.4', tag: 'calc', ch: 1, q: 'A 400 kg rollercoaster car starts from rest at the top of a 45 m hill. (g = 10 N/kg)', parts: [
    { q: 'Calculate its gravitational potential energy at the top.', m: 2, ms: ['400 × 10 × 45', '= 180 000 J'] },
    { q: 'Assuming no energy is wasted, what is its kinetic energy at the bottom?', m: 1, ms: ['180 000 J'] },
    { q: 'Use KE = ½ × m × v² to calculate its speed at the bottom.', m: 3, ms: ['180 000 = 0.5 × 400 × v²', 'v² = 900', 'v = 30 m/s'] },
    { q: 'In reality its speed at the bottom is 28 m/s. Explain why.', m: 2, ms: ['friction and air resistance', 'transfer energy to the thermal store / some energy wasted so less kinetic energy'] }
  ] },

  /* ---------- Unit 7 Magnetism ---------- */
  { topic: '7.1', tag: 'ext', q: 'Describe how you could use iron filings or plotting compasses to show the magnetic field between (a) two north poles facing each other, and (b) a north pole facing a south pole. Describe the patterns you would expect.', m: 6, ms: ['place magnets on paper / under a sheet; sprinkle iron filings and tap gently (or plot with compasses)', '(a) N–N: lines curve away from each other / repel', '(a) there is a neutral point halfway between with no field', '(b) N–S: lines go straight across the gap from N to S', '(b) lines closely spaced in the gap / strong field between the poles', 'lines never cross; arrows from N to S'] },
  { topic: '7.3', tag: 'data', q: 'A student varies the current in an electromagnet with 30 turns. 0.5 A → 4 clips; 1.0 A → 8 clips; 1.5 A → 13 clips; 2.0 A → 16 clips; 2.5 A → 20 clips.', parts: [
    { q: 'Describe the relationship between current and strength.', m: 2, ms: ['larger current → more clips / stronger', 'roughly proportional (about 8 clips per amp)'] },
    { q: 'Suggest why counting paper clips is not a very precise measure of strength.', m: 2, ms: ['only whole numbers / clips can hang in chains or fall off', 'clips may be slightly different sizes'] },
    { q: 'Suggest why the student should not go above about 3 A.', m: 1, ms: ['the wire / power supply would get too hot'] }
  ] },
  { topic: '7.4', tag: 'ext', ch: 1, q: 'A car’s starter motor needs a current of about 150 A, but the ignition switch operated by the driver carries only a small current. Explain how a relay allows this.', m: 4, ms: ['the key switch completes a small-current circuit through the relay’s coil', 'the coil becomes an electromagnet', 'it attracts an iron armature / switch that closes the contacts of the second circuit', 'the second (high-current) circuit to the starter motor is completed — the driver is isolated from the large current / thick wires only needed in one circuit'] },

  /* ---------- Unit 8 Further forces ---------- */
  { topic: '8.1', tag: 'calc', q: 'A wheelbarrow and its load weigh 900 N. The load’s weight acts 0.4 m from the wheel (the pivot). The gardener lifts the handles 1.2 m from the wheel.', parts: [
    { q: 'Calculate the moment of the weight about the wheel.', m: 2, ms: ['900 × 0.4', '= 360 Nm'] },
    { q: 'Calculate the upward force the gardener must apply to lift the handles.', m: 2, ms: ['F × 1.2 = 360', 'F = 300 N'] },
    { q: 'Explain why it is easier to lift the wheelbarrow if the load is placed nearer the wheel.', m: 2, ms: ['the weight’s moment is smaller (smaller distance)', 'so a smaller force (moment) is needed at the handles'] }
  ] },
  { topic: '8.4', tag: 'graph', q: 'A cyclist’s journey: she rides 1200 m in the first 4 minutes, stops at traffic lights for 1 minute, then rides 1800 m in the next 5 minutes.', parts: [
    { q: 'Sketch the distance–time graph, with the axes labelled.', m: 3, ms: ['straight line from 0 to 1200 m at 4 min', 'horizontal line from 4 to 5 min', 'straight line from 1200 m to 3000 m at 10 min (steeper)'] },
    { q: 'Calculate her speed in m/s for the first part of the journey.', m: 2, ms: ['1200 ÷ 240', '= 5 m/s'] },
    { q: 'Calculate her speed in the last part and say which part was faster.', m: 2, ms: ['1800 ÷ 300 = 6 m/s', 'the last part'] },
    { q: 'Calculate her average speed for the whole journey in m/s.', m: 2, ms: ['3000 ÷ 600', '= 5 m/s'] }
  ] },
  { topic: '8.5', tag: 'calc', ch: 1, q: 'A 500 kg elephant stands on four feet, each with an area of 0.1 m². A 60 kg woman stands on the heels of two stiletto shoes, each with an area of 1 cm² (0.0001 m²). (g = 10 N/kg)', parts: [
    { q: 'Calculate the pressure under the elephant’s feet.', m: 3, ms: ['weight = 5000 N', 'area = 0.4 m²', 'p = 5000 ÷ 0.4 = 12 500 Pa'] },
    { q: 'Calculate the pressure under the stiletto heels.', m: 3, ms: ['weight = 600 N', 'area = 0.0002 m²', 'p = 600 ÷ 0.0002 = 3 000 000 Pa'] },
    { q: 'Explain why some museums ask visitors not to wear stiletto heels.', m: 2, ms: ['the pressure is very high (much higher than an elephant’s)', 'so it can dent / damage the floors'] }
  ] },
  { topic: '8.7', tag: 'ext', q: 'Explain, using particles, why a sealed plastic bottle of air bought at the top of a mountain is found crushed when brought down to sea level.', m: 4, ms: ['at the top of the mountain atmospheric pressure is lower; the bottle is sealed with air at that low pressure', 'at sea level the atmospheric pressure outside is higher', 'more air particles hit the outside of the bottle (harder / more often) than hit the inside', 'the pressure difference pushes the bottle in / crushes it'] },
  { topic: '8.6', tag: 'calc', q: 'A car’s brakes use a hydraulic system. The driver pushes the brake pedal piston (area 2 cm²) with a force of 60 N. Each brake piston at the wheels has an area of 12 cm².', parts: [
    { q: 'Calculate the pressure in the brake fluid.', m: 2, ms: ['60 ÷ 2', '= 30 N/cm²'] },
    { q: 'Calculate the force on each brake piston.', m: 2, ms: ['30 × 12', '= 360 N'] },
    { q: 'Explain why air bubbles in the brake fluid are dangerous.', m: 2, ms: ['air/gas can be compressed / squashed', 'so the pressure is not passed on properly — brakes feel spongy / the car does not stop'] }
  ] },

  /* ---------- Unit 9 Electricity ---------- */
  { topic: '9.3', tag: 'calc', q: 'A 6 V battery is connected to two resistors in series: R1 = 10 Ω and R2 = 20 Ω. The current is 0.2 A.', parts: [
    { q: 'Calculate the p.d. across each resistor using V = I × R.', m: 2, ms: ['R1: 0.2 × 10 = 2 V', 'R2: 0.2 × 20 = 4 V'] },
    { q: 'Show that your answers agree with the rule for p.d. in series circuits.', m: 1, ms: ['2 + 4 = 6 V = supply p.d.'] },
    { q: 'The resistors are reconnected in parallel with the same battery. Calculate the current in each branch and the total current.', m: 3, ms: ['R1: 6 ÷ 10 = 0.6 A', 'R2: 6 ÷ 20 = 0.3 A', 'total = 0.9 A'], ch: 1 }
  ] },
  { topic: '9.4', tag: 'data', q: 'A student tests wires of the same material and length but different thicknesses. Thin (0.2 mm): V = 2.0 V, I = 0.10 A. Medium (0.4 mm): V = 2.0 V, I = 0.40 A. Thick (0.6 mm): V = 2.0 V, I = 0.90 A.', parts: [
    { q: 'Calculate the resistance of each wire.', m: 3, ms: ['thin: 20 Ω', 'medium: 5 Ω', 'thick: 2.2 Ω'] },
    { q: 'Describe the pattern.', m: 1, ms: ['thicker wire → less resistance'] },
    { q: 'Suggest why the thickness has such a large effect.', m: 2, ms: ['doubling the diameter gives four times the cross-sectional area', 'more room for electrons to flow / more paths so fewer collisions per electron'], ch: 1 }
  ] },
  { topic: '9.5', tag: 'ext', q: 'A long corridor has a light that must be switched on and off from either end. Draw and explain a suitable circuit.', m: 5, ms: ['two two-way switches, one at each end', 'joined by two wires between their outer terminals', 'lamp and supply connected to the common terminals / in series with the switch arrangement', 'light on when both switches connect to the same linking wire', 'changing either switch breaks or completes the circuit'] },

  /* ---------- Unit 10 Sound ---------- */
  { topic: '10.4', tag: 'calc', q: 'A bat sends out a click and hears the echo from an insect 0.02 s later. (speed of sound in air = 330 m/s)', parts: [
    { q: 'Calculate how far away the insect is.', m: 3, ms: ['total distance = 330 × 0.02 = 6.6 m', 'there and back, so ÷ 2', '= 3.3 m'] },
    { q: 'The next echo takes 0.012 s. Is the insect closer or further away? Calculate the new distance.', m: 2, ms: ['closer', '330 × 0.012 ÷ 2 = 1.98 m (about 2 m)'] },
    { q: 'Bats use very high frequencies (up to 110 000 Hz). Explain why we cannot hear them.', m: 1, ms: ['above the human hearing range (20 000 Hz) / ultrasound'] }
  ] },
  { topic: '10.1', tag: 'ext', q: 'Explain how the sound of a drum reaches your ear, and why an astronaut on the Moon could not hear a drum played by another astronaut a few metres away (without radio).', m: 6, ms: ['the drum skin vibrates', 'it pushes and pulls on the air particles, making compressions and rarefactions', 'the particles pass the vibrations on — a longitudinal wave — to the ear', 'the eardrum vibrates (and the brain detects sound)', 'on the Moon there is no air / a vacuum', 'so there are no particles to carry the vibrations'] },
  { topic: '10.3', tag: 'data', ch: 1, q: 'Two notes are displayed on an oscilloscope with the same settings. Note A: 4 waves across the screen, height 3 squares. Note B: 8 waves across the screen, height 1.5 squares.', parts: [
    { q: 'Which note has the higher pitch? Explain.', m: 2, ms: ['B', 'more waves on the screen / higher frequency'] },
    { q: 'Which note is louder? Explain.', m: 2, ms: ['A', 'bigger amplitude / taller trace'] },
    { q: 'Note A has a frequency of 250 Hz. What is the frequency of note B?', m: 1, ms: ['500 Hz'] }
  ] },

  /* ---------- Unit 11 Light ---------- */
  { topic: '11.4', tag: 'ext', q: 'A stage has a red spotlight and a green spotlight. An actor wears a white T-shirt with a blue logo. Describe and explain what the audience sees when (a) only the red light is on, (b) both lights are on.', m: 6, ms: ['(a) T-shirt looks red', 'white reflects all colours, so it reflects the red light', '(a) logo looks black: blue only reflects blue; no blue light reaches it', '(b) red + green light = yellow', 'T-shirt looks yellow (reflects both red and green)', 'logo still black (no blue light to reflect)'] },
  { topic: '11.3', tag: 'ext', q: 'Compare how a camera and the eye form and focus an image. Include the parts that do the same jobs.', m: 6, ms: ['light enters through the aperture (camera) / pupil (eye)', 'the size of the hole is controlled by the diaphragm / the iris', 'a convex lens focuses the light (the eye’s cornea does most of the bending)', 'the image forms on the sensor (camera) / retina (eye); it is real and inverted', 'the camera focuses by moving the lens backwards and forwards', 'the eye focuses by changing the shape of its lens (fatter for near objects)'] },
  { topic: '11.5', tag: 'calc', ch: 1, q: 'A pinhole camera is 15 cm long. It is pointed at a tree 12 m tall and 60 m away.', parts: [
    { q: 'Calculate the height of the image of the tree.', m: 3, ms: ['image height = object height × image distance ÷ object distance', '= 12 × 0.15 ÷ 60', '= 0.03 m (3 cm)'] },
    { q: 'The student walks towards the tree until the image is 6 cm tall. How far from the tree is she?', m: 2, ms: ['distance = 12 × 0.15 ÷ 0.06', '= 30 m'] }
  ] },
  { topic: '11.1', tag: '', q: 'A periscope uses two plane mirrors, each at 45°, to let someone see over a wall.', parts: [
    { q: 'State the law of reflection.', m: 1, ms: ['angle of incidence = angle of reflection (measured from the normal)'] },
    { q: 'Describe the path of a ray from an object over the wall to the observer’s eye.', m: 3, ms: ['horizontal ray hits the top mirror and is reflected through 90° downwards', 'it travels down to the bottom mirror', 'and is reflected through 90° horizontally into the eye'] },
    { q: 'Explain why the mirrors must be at 45°.', m: 2, ms: ['angle of incidence is then 45° so angle of reflection is 45°', 'which turns the ray through 90°'], ch: 1 }
  ] }
];
