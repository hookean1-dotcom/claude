/* ==========================================================
   MYP Physics · Grade 10 — the six concept-based units.
   Unit structure (conceptual understanding, global context, strands and their generalisations,
   inquiry questions, ATLs, applications & skills and assessment tasks) follows the
   "Concept Based Physics (G10)" unit plans. Inquiry questions are tagged
   F (factual), C (conceptual) or D (debatable); the answers are written for this app.
   ========================================================== */
const UNITS = [
  { id: '1', code: 'Unit 1', name: 'What is validity?', short: 'Validity', css: 'var(--u1)',
    cu: 'The scientific community communicates information as an essential part of scientific advancement.',
    kc: ['Communication'], gc: ['Globalisation and sustainability', 'Building a shared understanding and framework of knowledge that can be used as a basis for global advancement.'],
    strands: [
      { n: 'Communicating data', g: ['Developing international conventions for recording and communicating data enables global collaboration.'],
        iq: [
          ['What examples do we have to support the need for global agreements on units?', 'F', 'The Mars Climate Orbiter (1999) was lost because one team used pound-force seconds and another used newton seconds. The “Gimli Glider” (1983) ran out of fuel after a pounds/kilograms mix-up. Medicine doses, aircraft fuelling and international engineering projects all rely on everyone using the same units.'],
          ['How does scientific communication differ from other forms of communication?', 'F', 'It is precise and unambiguous: quantities have agreed symbols and SI units, numbers carry an appropriate number of significant figures and a stated uncertainty, and methods are described so that anyone can repeat them. Claims are supported by evidence and are peer reviewed.'],
          ['Why do we need global agreements on units?', 'D', ['Shared units remove conversion errors, let scientists combine and check each other’s data, and make trade and engineering safer.', 'Local units (feet, pounds, miles) are part of cultural identity and everyday life; forcing change is expensive and some industries work well with their own conventions.']],
          ['Does the SI system improve global engagement?', 'D', ['A single system lowers barriers: a student in Lagos and a researcher in Seoul can read the same data instantly; global projects such as CERN or the ISS depend on it.', 'Engagement also depends on language, funding and access to equipment; some countries (notably the USA) still use customary units without being excluded from science.']]
        ] },
      { n: 'Validity', g: ['Precise measurements, with clear uncertainties, establish the validity of concluding statements.', 'People act on scientific conclusions that cite the validity of experimental data.'],
        iq: [
          ['How can collaborators understand the precision of our measurements?', 'F', 'By quoting every measurement with its uncertainty, e.g. 12.4 ± 0.1 cm, and using a sensible number of significant figures. The uncertainty tells the reader the range in which the true value probably lies.'],
          ['How do we summarise the precision of multiple data points?', 'F', 'Take the mean of the repeats and quote the uncertainty as half the range: (largest − smallest) ÷ 2. A small spread means precise data.'],
          ['How can we calculate the experimental uncertainties of a proportionality?', 'F', 'Plot the data with error bars, draw the line of best fit, then draw the steepest and shallowest lines that still pass through all the error bars. The uncertainty in the gradient is (steepest − shallowest) ÷ 2. For a calculated value, add the percentage uncertainties of the quantities that are multiplied or divided.'],
          ['How can we know as critical thinkers if a statement is valid?', 'C', 'Ask whether the conclusion follows from data that measured what it claims to measure, with controlled variables, enough repeats and stated uncertainties. A valid conclusion stays inside the range of the data and does not claim more than the uncertainties allow.'],
          ['Why do we need to communicate the limits of the validity of our data?', 'C', 'People act on scientific conclusions — engineers, doctors and governments. Stating the uncertainty and the conditions of the experiment stops others from over-trusting a result or applying it where it does not hold.'],
          ['What are the benefits of international conventions in communication?', 'D', ['Results can be compared, combined and checked anywhere in the world, which speeds up discovery and reduces costly mistakes.', 'Conventions are set mostly by well-funded institutions and may not reflect every community’s needs; they can also hide genuine disagreement behind a single “agreed” number.']]
        ] }
    ],
    atl: [['Research', 'Collect, record and verify data — gathering data with instrumental uncertainties.'], ['Research', 'Process data and report results — reporting processed data in graphical form.']],
    as: ['Present numbers and quantities in standard form to a required number of significant figures.', 'Demonstrate how to convert between unit prefixes.', 'Demonstrate an understanding of the instrumental precision (uncertainty) of different equipment.', 'Design data tables that clearly distinguish between raw and processed data.', 'Calculate experimental uncertainties.', 'Design appropriate graphs to answer the original question.', 'Analyse graphical results, including identification of random and systematic errors.'],
    tasks: [['Formative online quiz: significant figures, units and conversions', 'A', '1–2'], ['Formative task: graphing instrumental uncertainties', 'C', '3–4, 6'], ['Formative task: graphing experimental uncertainties', 'C', '3–6'], ['Summative task: Hooke’s law', 'B, C', '1–7'], ['Combined Units 1–2 test (after Unit 2)', 'A', 'all']] },

  { id: '2', code: 'Unit 2', name: 'Motion of a particle', short: 'Motion', css: 'var(--u2)',
    cu: 'A kinematic model of a particle can predict changes in motion, momentum and energy.',
    kc: ['Change'], gc: ['Scientific and technical innovation', 'An exploration of physics can be used to improve daily life.'],
    strands: [
      { n: 'Storytelling with graphs', g: ['Speed, velocity and acceleration can be represented mathematically by the gradient of a line.', 'The gradient of a line at a particular point indicates the instantaneous rate of change.', 'Displacement and distance can also be represented mathematically by the area under a graph.'],
        iq: [
          ['How do we measure position?', 'F', 'Position is measured as a displacement from a chosen origin, in a chosen direction, e.g. “+12 m from the start line”. In the lab we use rulers, metre sticks, light gates, motion sensors or video analysis.'],
          ['How do we measure motion?', 'F', 'Record position at known times (light gates, ticker timers, ultrasonic motion sensors, video frames). Speed = distance ÷ time; acceleration = change in velocity ÷ time.'],
          ['How can we identify distance, displacement, speed, velocity and acceleration from motion graphs?', 'F', 'On a displacement–time graph the gradient is velocity. On a velocity–time graph the gradient is acceleration and the area under the line is the displacement (distance if all the motion is in one direction).'],
          ['What is terminal velocity?', 'F', 'The constant velocity reached when the drag on a falling object has grown to equal its weight, so the resultant force — and therefore the acceleration — is zero.'],
          ['How do we describe motion?', 'C', 'With a model: treat the object as a particle, choose an origin and a positive direction, and describe how displacement, velocity and acceleration change with time — in words, in graphs and with equations. Each representation tells the same story.'],
          ['When/where was the importance of relativity first discussed?', 'D', ['Galileo (1632) argued that motion is relative to the observer — a ship moving smoothly feels the same as one at rest — so Galilean relativity is the origin.', 'Einstein’s special relativity (1905) is what most people mean; it changed physics by showing that time and length themselves depend on the observer.']]
        ] },
      { n: 'Modelling forces', g: ['The interaction of forces affects the movement of an object.', 'Any particle in motion will experience a resistance to the motion.'],
        iq: [
          ['How do non-contact forces act?', 'F', 'Through fields. Gravitational, electric and magnetic fields exert forces on masses, charges and magnetic materials without any contact.'],
          ['What is common to all types of friction?', 'F', 'Friction always acts parallel to the surfaces in contact and opposes relative motion (or the tendency to move). It arises from interactions between the surfaces.'],
          ['How do static and dynamic friction differ?', 'F', 'Static friction acts when surfaces are not sliding; it adjusts to match the applied force up to a maximum, μₛR. Dynamic (kinetic) friction acts when surfaces slide and is roughly constant, μ_dR. Usually μₛ > μ_d, which is why it is harder to start something moving than to keep it moving.'],
          ['What do we mean by resistance?', 'C', 'Any force that opposes motion — friction between solids, drag in air and water. Resistance converts kinetic energy into thermal energy, so a moving particle slows unless a driving force replaces the energy.'],
          ['How far can forces reach?', 'C', 'Contact forces act only where surfaces touch. Field forces get weaker with distance (gravity follows an inverse-square law) but in principle never reach zero.'],
          ['Field theory suggests that gravitational fields can be felt at the edges of the Universe — is this true?', 'D', ['The inverse-square law never reaches zero, so in principle every mass pulls on every other mass, however far away.', 'Gravity travels at the speed of light and the Universe is expanding, so parts of the Universe are beyond the reach of any signal from us; at huge distances the effect is also immeasurably small.']]
        ] },
      { n: 'Momentum', g: ['Momentum can be changed and transformed but is conserved in an isolated system.', 'Applying the laws of motion leads to safety improvements in our various modes of transport.'],
        iq: [
          ['How can we use conservation of momentum to predict motion?', 'F', 'In an isolated system the total momentum before an interaction equals the total momentum after. Write m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂ (with signs for direction) and solve for the unknown velocity.'],
          ['How can we use impulse to design safer machines/better equipment?', 'F', 'Impulse FΔt = Δp. For a fixed change in momentum, making the collision time longer makes the force smaller: crumple zones, airbags, helmets, crash mats and trainers all increase Δt.'],
          ['How would an ion drive work?', 'C', 'It ionises a gas such as xenon and uses an electric field to accelerate the ions out of the back at very high speed. The ions gain backward momentum, so the spacecraft gains equal forward momentum — a tiny force, but for a very long time.'],
          ['How does a thruster on a rocket work?', 'C', 'Burning fuel produces hot gas that is pushed out of the nozzle at high speed. By Newton’s third law (or conservation of momentum) the gas pushes the rocket forwards with an equal and opposite force.'],
          ['Have improvements in safety made people better or worse drivers?', 'D', ['Seat belts, airbags and ABS have cut deaths and injuries dramatically; better-protected drivers are not obviously more careless.', 'Risk compensation: some studies suggest that drivers who feel safer drive faster or brake later, partly offsetting the benefit — especially for pedestrians and cyclists.']]
        ] },
      { n: 'Energy', g: ['Energy can be transformed but is conserved in an isolated system.'],
        iq: [
          ['How can we show energy transfers diagrammatically?', 'F', 'With Sankey diagrams (arrow widths to scale), energy-store bar charts before and after a change, and flow diagrams of stores and transfers.'],
          ['Is any energy transfer 100% efficient?', 'C', 'No real macroscopic transfer is: some energy is always dissipated, usually as thermal energy in the surroundings. Electric heaters come close to 100% only because heating is their useful output.'],
          ['What are the similarities between Sankey diagrams and how we write chemical reactions?', 'C', 'Both are balanced accounts of a conserved quantity: total energy in = total energy out on a Sankey diagram, and the atoms on each side of a chemical equation must balance.'],
          ['What is the relationship between force and energy?', 'C', 'A force transfers energy when it moves an object: work done W = Fs. Power is the rate of doing work, P = Fv.'],
          ['How does this energy discussion link to the ideas of global warming?', 'C', 'Most energy we use ends up dissipated as thermal energy, and much of it comes from burning fossil fuels that release CO₂. Improving efficiency and using renewable resources reduce the fuel burned for the same useful output.']
        ] }
    ],
    atl: [['Thinking — critical', 'Use models and simulations to explore complex systems and issues — modelling forces.'], ['Thinking — creative', 'Apply existing knowledge to generate new ideas or processes — motion graphs.']],
    as: ['Distinguish between scalars and vectors, giving examples of each.', 'Demonstrate the use of suvat in solving problems.', 'Draw motion graphs from a description of motion (d–t and v–t graphs only).', 'Demonstrate understanding of the physical meaning of gradients and areas for d–t and v–t motion graphs.', 'Describe the difference between mass and weight.', 'Determine the resultant force acting on an object (inclined planes resolved parallel and perpendicular to the plane).', 'Relate the resultant force to change in motion.', 'Define the coefficient of friction as the ratio of the frictional force to the normal force, for static and dynamic situations.', 'Define impulse in terms of Newton’s second law.', 'Use conservation of momentum to describe collisions.', 'Apply conservation of energy with KE, elastic potential energy and change in GPE.', 'Define power as the rate of energy change (use with Fd and efficiency).'],
    tasks: [['Formative task: motion graphs', 'A', '3–4'], ['Formative quick quiz: motion', 'A', '1–4'], ['Formative task: modelling forces', 'A', '5–6'], ['Summative quick quiz: force diagrams and resultant forces', 'A', '5–7'], ['Formative lab: gravitational field strength', 'B, C', '8'], ['Summative friction lab', 'B, C', '6–8'], ['Formative impulse and momentum video task', 'A', '9–10'], ['Summative task: kinematics of a roller-coaster', 'A, C, D', '1–12'], ['Combined Units 1–2 test and end-of-year exam', 'A', 'all']] },

  { id: '3', code: 'Unit 3', name: 'Thermal physics', short: 'Thermal', css: 'var(--u3)',
    cu: 'Changes in internal energy alter molecular motion to change the state of matter (form) or the amount of molecular motion (temperature).',
    kc: ['Change', 'Form'], gc: ['Scientific and technical innovation', 'Internal energy changes can be communicated graphically.'],
    strands: [
      { n: 'Describing internal energy', g: ['Changes in internal energy affect molecular motion.', 'Energy can be transformed but is conserved in an isolated system.', 'Isolated systems undergo change and seek equilibrium.'],
        iq: [
          ['What is temperature?', 'F', 'A measure of the average kinetic energy of the particles in a substance. Measured in °C or kelvin (K); 0 K (−273 °C) is absolute zero, where particle motion is a minimum.'],
          ['What is energy and how do we quantify it in objects?', 'C', 'Energy is a conserved quantity that is transferred when things change. We quantify it with equations for each store: Eₖ = ½mv², ΔEₚ = mgΔh, Eₑ = ½kx², ΔE = mcΔT and E = mL.'],
          ['Will useful energy ever “run out”?', 'C', 'Energy is never destroyed, but every real transfer dissipates some of it as low-temperature thermal energy that is hard to use. Useful (concentrated) energy is gradually degraded; fossil fuels are also finite on human timescales.'],
          ['Where did the energy originally come from?', 'D', ['Almost all our energy traces back to the Sun (fossil fuels, biomass, wind, hydro), and the Sun’s energy came from nuclear fusion of elements made in the Big Bang.', 'Some does not: geothermal and nuclear energy come from the Earth’s formation and radioactive elements made in earlier stars — and physics cannot yet say where the energy of the Big Bang itself came from.']]
        ] },
      { n: 'Quantifying energy change', g: ['Heating is the movement of energy from hot to cold areas.', 'Energy added to an isolated system leads to quantifiable changes.'],
        iq: [
          ['What is efficiency?', 'F', 'The fraction of the input energy (or power) that ends up as useful output: efficiency = useful output ÷ total input, often × 100%.'],
          ['How is convection seen in weather?', 'F', 'Land heated by the Sun warms the air above it; the warm air expands, becomes less dense and rises, forming clouds and thunderstorms. Sea breezes, monsoons and the global circulation of air are convection currents.'],
          ['What does the change of state graph show us?', 'F', 'Temperature against time (or energy) while heating. Sloping sections: energy raises the temperature (particles speed up, ΔE = mcΔT). Flat sections: energy breaks bonds during melting or boiling at constant temperature (E = mL).'],
          ['How can we visualise changes in internal energy?', 'F', 'With particle diagrams (spacing and motion), energy-store bar charts, heating/cooling curves and Sankey diagrams.'],
          ['Is any energy transfer 100% efficient?', 'C', 'No. Some energy is always dissipated to the surroundings, mainly by heating, so the useful output is always less than the input.'],
          ['What does equilibrium mean?', 'C', 'Thermal equilibrium is reached when objects in contact are at the same temperature, so there is no net energy transfer between them.'],
          ['What happens to “lost/degraded” energy?', 'C', 'It is not destroyed: it spreads into the thermal stores of the surroundings, raising their temperature very slightly. Because it is so spread out it can no longer do useful work.']
        ] }
    ],
    atl: [['Thinking — critical', 'Use models and simulations to explore complex systems and issues — particle behaviour.'], ['Communication', 'Organise and depict information logically.']],
    as: ['Describe the motion of particles in different states and how this relates to the internal energy of the object.', 'Explain that heat moves from hot to cold regions.', 'Use internal energy to identify the different energy changes in a change of state graph.', 'Explain the role of particle movement in conduction, convection and evaporation.', 'Relate these heat transfers to each section of the change of state graph.', 'Explain the transfer of energy as radiation (infrared).', 'Quantify energy in thermal changes using specific heat capacity and latent heat, relating these to each section of the change of state graph.'],
    tasks: [['Formative task: internal energy change', 'A', '1–3'], ['Summative quick quiz: heat transfers', 'A', '4–6'], ['Formative task: insulation poster', 'A, D', '2, 4'], ['Formative video task: methods for SHC and latent heat problems', 'A', '7'], ['Summative task: graphing summary', 'A, C', '1, 3–7'], ['Combined Units 3–5 test and end-of-year exam', 'A', 'all']] },

  { id: '4', code: 'Unit 4', name: 'Wave particle duality', short: 'Waves', css: 'var(--u4)',
    cu: 'Different perspectives and experimental work led to the development of differing logical approaches to explaining energy transfer in waves.',
    kc: ['Perspectives', 'Logic'], gc: ['Fairness and development', 'An exploration into inequality of access to medical treatments globally.'],
    strands: [
      { n: 'Wave nature', g: ['Energy can be transformed but is conserved in an isolated system.', 'Energy from a point source disperses (change) as it moves away from the source.'],
        iq: [
          ['How do we describe light?', 'F', 'As a transverse electromagnetic wave that travels at 3.0 × 10⁸ m/s in a vacuum, with wavelengths from about 400 nm (violet) to 700 nm (red). It can also be described as a stream of photons.'],
          ['How can we measure the speed of a wave?', 'F', 'Measure the distance travelled in a known time (v = d ÷ t), e.g. echoes or two microphones for sound; or measure frequency and wavelength and use v = fλ (e.g. a ripple tank with a strobe).'],
          ['How does wave motion differ to motion already encountered?', 'C', 'A particle carries its mass and energy with it. In a wave the medium only oscillates about fixed positions; energy (and information) travels but the material does not.'],
          ['What is moving?', 'C', 'Energy and the wave pattern move. In a mechanical wave the particles of the medium oscillate; in light, electric and magnetic fields oscillate — nothing material travels.'],
          ['How do we describe light?', 'D', ['As a wave: diffraction, interference and polarisation only make sense if light is a wave.', 'As particles (photons): the photoelectric effect shows light delivering energy in packets. Physicists now accept both descriptions — wave–particle duality.']],
          ['What do waves move through?', 'D', ['Mechanical waves need a medium — sound cannot travel through a vacuum. Light was once thought to travel through an invisible “aether”.', 'The Michelson–Morley experiment (1887) found no aether: light needs no medium at all, because it is a self-sustaining disturbance of electromagnetic fields.']]
        ] },
      { n: 'Wave action', g: ['Scientists have developed different models to explain wave behaviour.'],
        iq: [
          ['How do we show the movement of energy?', 'F', 'With rays (arrows showing the direction energy travels) and wavefronts (lines joining points in step, drawn one wavelength apart and perpendicular to the rays).'],
          ['How is a rainbow formed?', 'F', 'Sunlight enters raindrops and is refracted, reflected off the back of the drop and refracted again on the way out. The refractive index depends on wavelength, so colours are spread (dispersed) by different amounts — red on the outside, violet on the inside.'],
          ['How do glasses address vision problems?', 'F', 'Short sight (myopia): the eye focuses light in front of the retina; a diverging (concave) lens spreads the light first. Long sight (hyperopia): light focuses behind the retina; a converging (convex) lens adds extra focusing.'],
          ['What colour scatters the most through water (e.g. when diving)?', 'F', 'Short wavelengths (blue/violet) scatter most, while water absorbs long wavelengths (red) first. So the deeper you dive the more things look blue–green and red objects look dark.'],
          ['Why do we have different particle models for reflection, refraction and diffraction?', 'C', 'Newton’s particle (corpuscle) model explained reflection and, with assumptions, refraction — but it predicted light speeds up in glass and could not explain diffraction. Huygens’ wave model explained all three, and Foucault (1850) showed light slows in water, supporting the wave model.'],
          ['Do we all perceive colour in the same way?', 'C', 'No. Colour is how the brain interprets signals from three types of cone cell. About 8% of men and 0.5% of women are colour-blind, language affects how we name colours, and some animals see ultraviolet.'],
          ['Is the developed world doing enough to support the treatment of diseases in developing countries?', 'D', ['Large programmes fund vaccines, cataract surgery and donated equipment, and low-cost technology (solar-powered ultrasound, portable X-ray) is spreading.', 'Most of the world lacks access to basic imaging and eye care; patents, cost and a shortage of trained staff mean treatments that are routine in rich countries remain out of reach.']],
          ['Why are women more likely to be blind than men?', 'D', ['Women live longer, and cataracts and other causes of blindness increase with age.', 'In many places women have less access to surgery and eye care because of cost, travel and social barriers — an issue of fairness and development rather than biology alone.']]
        ] },
      { n: 'Wave applications', g: ['Changing properties of waves make them suitable for differing tasks.'],
        iq: [
          ['How do we know c is the cosmic speed limit?', 'C', 'Every measurement gives the same speed of light for every observer, and particle accelerators show that adding energy to particles makes them heavier but never faster than c. Einstein’s relativity explains why nothing with mass can reach c.'],
          ['How has the internet changed our world?', 'C', 'Optical fibres carry data as pulses of light by total internal reflection, and radio/microwaves link phones and satellites. Information, education and trade became global and almost instant.'],
          ['What does it mean when we say that looking through space is looking back through time?', 'C', 'Light takes time to reach us: we see the Sun as it was 8 minutes ago and distant galaxies as they were billions of years ago. The further we look, the older the light.'],
          ['What are the advantages and disadvantages to global communication?', 'D', ['Instant communication spreads knowledge, supports emergencies and connects families and economies worldwide.', 'It also spreads misinformation, raises privacy concerns, uses a lot of energy and leaves behind people without access (the digital divide).']]
        ] }
    ],
    atl: [['Thinking — critical', 'Use models and simulations to explore complex systems and issues — modelling waves as particles or field disturbances.'], ['Thinking — critical', 'Evaluate evidence and arguments — evaluation in investigative work.']],
    as: ['Describe waves as energy transfer (including sound as a pressure wave).', 'Draw a simple wave diagram annotating crest, trough, amplitude (also as volume) and wavelength.', 'Derive (from speed = distance ÷ time) and use the equation v = fλ.', 'Draw ray diagrams for reflection and refraction.', 'Draw wavefront diagrams for reflection, refraction and diffraction.', 'Use Snell’s law to determine the refractive index of a material and the critical angle of a material.', 'Describe the main parts of the electromagnetic spectrum, their common properties and uses.'],
    tasks: [['Formative quick quiz: wave characteristics', 'A', '1–3'], ['Formative task: intensity', 'A, C', '1'], ['Formative task: reflection', 'A', '4–5'], ['Formative task: refraction', 'A', '4–5'], ['Summative lab: Snell’s law', 'B, C', '4–6'], ['Summative quick quiz', 'A', '1–6'], ['Formative task: EM spectrum', 'A', '7'], ['Summative task: medical applications', 'D', '1, 4–5'], ['Combined Units 3–5 test and end-of-year exam', 'A', 'all']] },

  { id: '5', code: 'Unit 5', name: 'Electricity', short: 'Electricity', css: 'var(--u5)',
    cu: 'International conventions enable global communication and collaboration in designing electrical systems, working together to change the modern world.',
    kc: ['Communication', 'Change'], gc: ['Personal and cultural expression', 'Exploring the use of models to aid understanding.'],
    strands: [
      { n: 'Conduction', g: ['Some materials allow charge to flow at different rates; these are labelled conductor, semiconductor and insulator, based on the patterns observed.'],
        iq: [
          ['How do we gain energy from electricity?', 'F', 'A power supply gives energy to the charge flowing round the circuit (potential difference); components transfer that energy to other stores — thermal in a heater, light in a lamp, kinetic in a motor. E = QV = VIt.'],
          ['Can electrical energy be stored?', 'C', 'Not directly as current — it is stored in other forms: chemical (batteries), electric field (capacitors), gravitational (pumped hydro), kinetic (flywheels). Storage is the key challenge for solar and wind power.'],
          ['What is the balance between benefits and costs of electricity?', 'D', ['Electricity powers hospitals, refrigeration, communication and education and is clean at the point of use.', 'Generating it often burns fossil fuels, damages environments through mining and dams, and electrical infrastructure is expensive to build and maintain.']],
          ['How is development around the world related to available energy resources?', 'D', ['Countries with cheap, reliable energy industrialised first; access to electricity correlates strongly with life expectancy, income and education.', 'Resource-rich countries are not always the most developed (the “resource curse”), and new technology such as solar lets developing regions leapfrog old grids.']],
          ['What challenges are there in achieving fair and equitable electricity distribution for everyone?', 'D', ['Roughly 700 million people still lack electricity; extending grids to remote areas is costly, and off-grid solar plus batteries is now often cheaper.', 'Fair distribution also needs affordable prices, political stability, maintenance skills and protection from corruption — technology alone does not solve it.']]
        ] },
      { n: 'Circuit analysis', g: ['Energy can be transformed but is conserved in an isolated system.', 'Charge can be moved but is conserved in an isolated system.'],
        iq: [
          ['What is current?', 'F', 'The rate of flow of charge: I = Q ÷ t, measured in amperes (A) with an ammeter in series. In metals the charge carriers are free electrons.'],
          ['What is electrical resistance?', 'F', 'How much a component opposes the current: R = V ÷ I, measured in ohms (Ω). Free electrons collide with the vibrating ions of the lattice, transferring energy to the thermal store.'],
          ['How does conservation of charge fit into our circuit analysis?', 'F', 'Kirchhoff’s first law: the current into any junction equals the current out. In a series circuit the current is the same everywhere; in parallel the branch currents add up to the total.'],
          ['How does conservation of energy fit into our circuit analysis?', 'F', 'Kirchhoff’s second law: around any closed loop the sum of the potential differences across components equals the emf of the supply. Each coulomb gives up all the energy it gained.'],
          ['What are the limitations to Ohm’s Law?', 'F', 'It only applies to ohmic conductors at constant temperature. Filament lamps (temperature rises), diodes and thermistors do not have a constant resistance, so V is not proportional to I.'],
          ['What is potential difference?', 'C', 'The energy transferred per unit charge between two points: V = E ÷ Q, measured in volts (1 V = 1 J/C) with a voltmeter in parallel.'],
          ['Do analogies and models help or limit understanding when studying?', 'D', ['Water-pipe, rope-loop and roller-coaster models make invisible ideas concrete and give good predictions for simple circuits.', 'Every analogy breaks down somewhere (water does not need a closed loop; ropes do not split at junctions) and can leave misconceptions — such as current being “used up”.']]
        ] },
      { n: 'Resistance of a component', g: ['Resistance is related to the physical properties of a component, including molecular motion.'],
        iq: [
          ['Why does increasing the temperature increase resistance of a component?', 'F', 'In a metal, the ions of the lattice vibrate more at higher temperatures, so free electrons collide with them more often and lose more energy — the current is reduced for the same potential difference.']
        ] }
    ],
    atl: [['Thinking — critical', 'Use models and simulations to explore complex systems and issues — electron movement.'], ['Thinking — critical', 'Test generalisations and conclusions — limitations to Ohm’s law and other relationships.']],
    as: ['Describe a conductor in terms of its material properties (metals specifically).', 'Use models of circuits to describe the features of basic components.', 'Draw series and parallel circuit diagrams using common circuit symbols.', 'Describe the change in potential difference and current in simple circuits using Kirchhoff’s laws.', 'Define the resistance of an ohmic resistor as V proportional to I, the constant of proportionality being the resistance.', 'Determine the resistance of a circuit component experimentally using a voltmeter and ammeter.', 'Identify ohmic and non-ohmic conductors from their V–I relationship.', 'Determine the total resistance of combinations of resistors.', 'Determine the potential difference across resistors in series.'],
    tasks: [['Formative video task: conductors and insulators', 'A', '1–2'], ['Formative quick quiz', 'A', '2–5'], ['Formative task: circuit analysis', 'A', '3–4'], ['Formative task: V–I graph', 'C', '5'], ['Summative lab: a factor affecting resistance', 'B, C', '5–6'], ['Formative task: adding resistances', 'A', '8–9'], ['Summative quick quiz: circuit interpretation', 'A', '4–5, 7–9'], ['Combined Units 3–5 test and end-of-year exam', 'A', 'all']] },

  { id: '6', code: 'Unit 6', name: 'Radioactivity', short: 'Radioactivity', css: 'var(--u6)',
    cu: 'Changing the form and structure of a nucleus brings new technologies and challenges for humanity.',
    kc: ['Change', 'Form'], gc: ['Orientation in space and time', 'The timings of new discoveries and ideas often relate to developments in other areas of science, with a focus on the historical narrative.'],
    strands: [
      { n: 'The changing atom', g: ['The scientific model of matter has evolved over time with new technologies and discoveries.'],
        iq: [
          ['How has the evidence on which our particle model is built changed?', 'F', 'From philosophical argument (Democritus) to chemical evidence (Dalton’s fixed combining ratios), to the discovery of the electron in cathode rays (Thomson, 1897), alpha scattering (Geiger, Marsden and Rutherford, 1909–11), atomic spectra (Bohr, 1913) and the neutron (Chadwick, 1932). Each new instrument revealed a smaller structure.'],
          ['How has our basis for reasoning changed?', 'D', ['From reasoning by argument to reasoning from experimental evidence: a model is kept only while it explains the data.', 'Modern models (quantum mechanics) rely on mathematics and probability that cannot be pictured — some argue we now trust models we cannot visualise.']]
        ] },
      { n: 'Properties of nuclear decay', g: ['Mass does not need to be conserved in nuclear reactions.', 'Charge can be moved but is conserved in an isolated system.', 'Energy can be transformed but is conserved in an isolated system.', 'The type of decay (transformation) indicates whether radioactive emissions will be dangerous and/or useful.'],
        iq: [
          ['How does radiation cause cancer?', 'F', 'Ionising radiation knocks electrons off atoms, damaging molecules such as DNA. Damaged DNA can cause cells to mutate and divide uncontrollably — a cancer. High doses kill cells outright (radiation sickness).'],
          ['Why do some nuclei emit nuclear radiation?', 'F', 'Unstable nuclei have too many neutrons or protons (or too much energy). They become more stable by emitting an alpha particle, a beta particle or a gamma ray. The process is random.'],
          ['How can changing the make-up of a nucleus release energy?', 'F', 'In fission and fusion (and radioactive decay) the products have slightly less mass than the starting nuclei. The “missing” mass is released as energy: E = mc². Because c² is huge, a tiny mass gives a lot of energy.'],
          ['Which properties make nuclear emissions useful or dangerous?', 'F', 'Ionising power, penetration and half-life. Alpha is very ionising but stopped by paper — dangerous inside the body, harmless outside; gamma penetrates — useful for tracers and sterilising. A short half-life source decays away quickly; a long one remains a hazard.'],
          ['What are the future possibilities for nuclear power?', 'C', 'Small modular fission reactors, reactors that use thorium or recycle waste, and fusion reactors (ITER, tokamaks, laser fusion) that could provide large amounts of energy with little long-lived waste — if the engineering challenges are solved.'],
          ['At which point can we no longer break down particles?', 'C', 'Protons and neutrons are made of quarks. Quarks and electrons (leptons) are currently thought to be fundamental — they show no internal structure in any experiment so far.'],
          ['How long/many times can you continue to split matter?', 'C', 'Matter splits into molecules, atoms, nuclei, nucleons and then quarks. Quarks cannot be isolated: pulling them apart creates new quark pairs instead. Whether anything smaller exists is still open.'],
          ['Is nuclear power the answer to our sustainable energy needs?', 'D', ['It provides reliable, large-scale, low-carbon electricity whatever the weather, using very little land and fuel.', 'Nuclear waste stays dangerous for thousands of years, accidents (Chernobyl, Fukushima) have long-lasting effects, and new plants are slow and expensive compared with wind and solar plus storage.']]
        ] }
    ],
    atl: [['Communication', 'Use and interpret a range of discipline-specific terms and symbols — decay equations.'], ['Thinking — transfer', 'Apply skills and knowledge in unfamiliar situations — uses of radioactive isotopes.']],
    as: ['Describe an atom in terms of electrons, neutrons and protons.', 'Represent an atom using nuclide notation.', 'Recognise, when given examples, isotopes of an element.', 'Describe ionisation.', 'Describe the range in air, penetration and ionisation properties of alpha, beta and gamma.', 'Describe some of the effects of ionising radiation on the human body.', 'Construct nuclear decay equations for alpha, beta and gamma emissions from a nucleus.', 'Determine the half-life of a radioisotope from decay graphs.', 'Describe some uses of radioisotopes in industry and medicine.'],
    tasks: [['Formative quick quiz', 'A', '1–5'], ['Formative task: the plum pudding model', 'A, D', '1'], ['Summative quick quiz', 'A', '1–4'], ['Formative task: carbon dating', 'A, C', '9'], ['Formative task: uses of radioactive sources', 'A, D', '5–9'], ['End-of-year exam', 'A', '1–5']] },

  { id: 'S', code: 'Skills', name: 'MYP science skills', short: 'Skills', css: 'var(--u9)',
    cu: 'The MYP sciences objectives — knowing and understanding, inquiring and designing, processing and evaluating, and reflecting on the impacts of science — are assessed in every unit.',
    kc: [], gc: ['', ''], strands: [], atl: [], as: [], tasks: [] }
];
const TOPICS = [];
const unitOf = id => UNITS.find(u => u.id === id);
const IQ_TYPE = { F: 'Factual', C: 'Conceptual', D: 'Debatable' };
/* nuclide notation: mass number over atomic number, e.g. nuc(238, 92, 'U') */
const nuc = (A, Z, s) => `<span class="nuc"><b>${A}</b><b>${String(Z).replace('-', '−')}</b></span>${s}`;
