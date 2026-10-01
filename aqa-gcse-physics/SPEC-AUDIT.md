# Specification coverage audit — AQA GCSE Physics 8463

This audit checks the app against the AQA GCSE Physics specification (8463, version 1.0). The specification PDF is in `spec/`.

**How it was built:**

- Every topic's specification checklist was written from the specification text, section by section.
- Points marked "(HT only)" in the specification are tagged **(HT)**. Points marked "(physics only)" are tagged **(PO)**.
- Those tags drive the Foundation/Higher and Physics/Combined Science filters throughout the app.

**Automated checks** (run after every build):

- Every simulation, generator and diagram referenced by a topic exists, and every one that exists is used.
- Quiz items are well formed, with no duplicate options.
- Exam questions have marks and a mark scheme.
- No rendered page contains `undefined` or `NaN`.
- All routes and all topic tabs load without errors in both Higher/Physics and Foundation/Combined modes, 420 routes in total.
- Each of the 104 generators is run repeatedly and checked for non-numeric answers.
- Each of the 54 simulations is mounted, its controls are exercised, and a screenshot is taken and reviewed.

**Conventions:**

- g = 9.8 N/kg.
- AQA units are used: m/s, m/s², J/kg °C, N/kg, Nm for moments, and kg m/s for momentum.
- Equation wording follows the specification's word equations.
- Decay is taught as halving per half-life. The decay constant is not used, because it is not in the GCSE specification.
- Refraction is explained with wave speed and wavefronts. There is no Snell's law or refractive index, because they are not in the specification.

**Totals:** 38 topics · 320 spec points · 428 quiz questions · 442 flashcards · 123 exam questions · 87 worked examples · 54 simulations · 104 calculation generators · 69 diagrams

### 4.1 Energy

| Topic | Spec ref | Scope | Spec points (HT / PO) | Learn | Worked | Cards | Quiz | Exam Qs | Sims | Generators |
|---|---|---|---|---|---|---|---|---|---|---|
| 1.1 Energy stores and systems | 4.1.1.1–4.1.1.2 | — | 7 (0 / 0) | 6 | 4 | 14 | 12 | 4 | energy | 6 |
| 1.2 Specific heat capacity and power | 4.1.1.3–4.1.1.4 | — | 6 (0 / 0) | 3 | 3 | 12 | 12 | 4 | shc | 6 |
| 1.3 Conservation, dissipation and efficiency | 4.1.2 | — | 9 (1 / 1) | 5 | 3 | 12 | 12 | 4 | sankey, cooling | 4 |
| 1.4 National and global energy resources | 4.1.3 | — | 8 (0 / 0) | 3 | 2 | 12 | 12 | 3 | resources | 0 |

### 4.2 Electricity

| Topic | Spec ref | Scope | Spec points (HT / PO) | Learn | Worked | Cards | Quiz | Exam Qs | Sims | Generators |
|---|---|---|---|---|---|---|---|---|---|---|
| 2.1 Current, potential difference and resistance | 4.2.1.1–4.2.1.3 | — | 7 (0 / 0) | 4 | 3 | 12 | 12 | 3 | ohm | 5 |
| 2.2 Resistors and I–V characteristics | 4.2.1.4 | — | 10 (0 / 0) | 4 | 2 | 12 | 12 | 3 | ivg, sensors | 1 |
| 2.3 Series and parallel circuits | 4.2.2 | — | 8 (0 / 0) | 3 | 2 | 10 | 11 | 3 | serpar | 4 |
| 2.4 Mains electricity | 4.2.3 | — | 7 (0 / 0) | 3 | 1 | 12 | 11 | 3 | acdc, plug | 0 |
| 2.5 Energy transfers and the National Grid | 4.2.4 | — | 9 (0 / 0) | 3 | 4 | 12 | 12 | 3 | grid | 7 |
| 2.6 Static electricity and electric fields | 4.2.5 | PO | 8 (0 / 8) | 3 | 1 | 11 | 10 | 3 | static | 0 |

### 4.3 Particle model of matter

| Topic | Spec ref | Scope | Spec points (HT / PO) | Learn | Worked | Cards | Quiz | Exam Qs | Sims | Generators |
|---|---|---|---|---|---|---|---|---|---|---|
| 3.1 Density and changes of state | 4.3.1 | — | 7 (0 / 0) | 4 | 3 | 12 | 12 | 3 | states, densitylab | 3 |
| 3.2 Internal energy and specific latent heat | 4.3.2 | — | 8 (0 / 0) | 4 | 3 | 12 | 12 | 3 | heating | 4 |
| 3.3 Particle model and pressure | 4.3.3 | — | 7 (1 / 4) | 4 | 2 | 10 | 10 | 3 | gas | 2 |

### 4.4 Atomic structure

| Topic | Spec ref | Scope | Spec points (HT / PO) | Learn | Worked | Cards | Quiz | Exam Qs | Sims | Generators |
|---|---|---|---|---|---|---|---|---|---|---|
| 4.1 Atoms, isotopes and the model of the atom | 4.4.1 | — | 11 (0 / 0) | 4 | 2 | 14 | 12 | 3 | atom, rutherford | 2 |
| 4.2 Radioactive decay and nuclear equations | 4.4.2.1–4.4.2.2 | — | 9 (0 / 0) | 3 | 2 | 14 | 13 | 4 | penetrate | 2 |
| 4.3 Half-life, contamination and irradiation | 4.4.2.3–4.4.2.4 | — | 9 (1 / 0) | 3 | 3 | 11 | 12 | 4 | decay | 4 |
| 4.4 Background radiation and uses of radiation | 4.4.3 | PO | 6 (0 / 6) | 3 | 1 | 10 | 10 | 3 | tracer | 1 |
| 4.5 Nuclear fission and fusion | 4.4.4 | PO | 6 (0 / 6) | 3 | 1 | 10 | 10 | 2 | fission | 0 |

### 4.5 Forces

| Topic | Spec ref | Scope | Spec points (HT / PO) | Learn | Worked | Cards | Quiz | Exam Qs | Sims | Generators |
|---|---|---|---|---|---|---|---|---|---|---|
| 5.1 Forces and their interactions | 4.5.1 | — | 8 (2 / 0) | 5 | 3 | 12 | 12 | 3 | forces | 3 |
| 5.2 Work done and elasticity | 4.5.2–4.5.3 | — | 10 (0 / 0) | 5 | 3 | 12 | 12 | 3 | spring | 5 |
| 5.3 Moments, levers and gears | 4.5.4 | PO | 5 (0 / 5) | 3 | 2 | 8 | 10 | 3 | moments, gears | 3 |
| 5.4 Pressure in fluids | 4.5.5 | PO | 8 (3 / 8) | 4 | 3 | 10 | 10 | 4 | fluid | 4 |
| 5.5 Describing motion | 4.5.6.1 | — | 13 (3 / 1) | 7 | 4 | 14 | 13 | 4 | motion, skydiver | 7 |
| 5.6 Newton’s laws of motion | 4.5.6.2 | — | 9 (2 / 0) | 4 | 3 | 12 | 12 | 3 | newton2 | 4 |
| 5.7 Stopping distances | 4.5.6.3 | — | 9 (1 / 1) | 4 | 3 | 12 | 11 | 3 | stopping | 3 |
| 5.8 Momentum | 4.5.7 | HT | 7 (7 / 4) | 3 | 3 | 8 | 10 | 3 | collisions, crash | 4 |

### 4.6 Waves

| Topic | Spec ref | Scope | Spec points (HT / PO) | Learn | Worked | Cards | Quiz | Exam Qs | Sims | Generators |
|---|---|---|---|---|---|---|---|---|---|---|
| 6.1 Transverse and longitudinal waves | 4.6.1.1–4.6.1.2 | — | 9 (0 / 1) | 5 | 3 | 13 | 12 | 4 | wave, ripple | 4 |
| 6.2 Reflection, sound and ultrasound | 4.6.1.3–4.6.1.5 | PO | 9 (6 / 9) | 5 | 2 | 12 | 11 | 4 | echo, seismic | 2 |
| 6.3 Electromagnetic waves | 4.6.2.1–4.6.2.4 | — | 13 (4 / 0) | 6 | 2 | 14 | 13 | 4 | emspec, refract, leslie | 2 |
| 6.4 Lenses and visible light | 4.6.2.5–4.6.2.6 | PO | 10 (0 / 10) | 4 | 2 | 13 | 11 | 3 | lens, colour | 2 |
| 6.5 Black body radiation | 4.6.3 | PO | 6 (3 / 6) | 3 | 1 | 8 | 8 | 3 | blackbody, balance | 0 |

### 4.7 Magnetism and electromagnetism

| Topic | Spec ref | Scope | Spec points (HT / PO) | Learn | Worked | Cards | Quiz | Exam Qs | Sims | Generators |
|---|---|---|---|---|---|---|---|---|---|---|
| 7.1 Magnets and magnetic fields | 4.7.1 | — | 8 (0 / 0) | 4 | 1 | 12 | 10 | 3 | magfield | 0 |
| 7.2 Electromagnetism and the motor effect | 4.7.2 | — | 9 (5 / 2) | 5 | 2 | 12 | 11 | 4 | solenoid, motor | 2 |
| 7.3 Induced potential, generators and transformers | 4.7.3 | HT, PO | 9 (9 / 9) | 4 | 2 | 12 | 11 | 4 | induction, generator, transformer | 3 |

### 4.8 Space physics (physics only)

| Topic | Spec ref | Scope | Spec points (HT / PO) | Learn | Worked | Cards | Quiz | Exam Qs | Sims | Generators |
|---|---|---|---|---|---|---|---|---|---|---|
| 8.1 The solar system and the life cycle of stars | 4.8.1.1–4.8.1.2 | PO | 8 (0 / 8) | 4 | 1 | 11 | 10 | 3 | starlife | 0 |
| 8.2 Orbits, red-shift and the Big Bang | 4.8.1.3, 4.8.2 | PO | 9 (2 / 9) | 4 | 1 | 10 | 10 | 3 | satellite, redshift | 0 |

### Skills Working scientifically & maths

| Topic | Spec ref | Scope | Spec points (HT / PO) | Learn | Worked | Cards | Quiz | Exam Qs | Sims | Generators |
|---|---|---|---|---|---|---|---|---|---|---|
| S.1 Working scientifically | WS 1–4 | — | 11 (0 / 0) | 5 | 2 | 14 | 12 | 2 | — | 2 |
| S.2 Maths skills, units and equations | MS 1–5 | — | 8 (0 / 0) | 4 | 2 | 11 | 12 | 2 | — | 3 |

### Required practicals

| RP | Title | Scope | Topic |
|---|---|---|---|
| 1 | Specific heat capacity | All | 1.2 |
| 2 | Thermal insulation | Physics only | 1.3 |
| 3 | Resistance | All | 2.1 |
| 4 | I–V characteristics | All | 2.2 |
| 5 | Density | All | 3.1 |
| 6 | Force and extension | All | 5.2 |
| 7 | Acceleration | All | 5.6 |
| 8 | Waves | All | 6.1 |
| 9 | Reflection and refraction of light | Physics only | 6.2 |
| 10 | Radiation and absorption | All | 6.3 |

### Equations

Recall (23): weight = mass × gravitational field strength; work done = force × distance along the line of action of the force; force applied to a spring = spring constant × extension; moment of a force = force × distance normal to direction of force (PO); pressure = force normal to a surface ÷ area of that surface (PO); distance travelled = speed × time; acceleration = change in velocity ÷ time taken; resultant force = mass × acceleration; momentum = mass × velocity (HT); kinetic energy = 0.5 × mass × speed²; gravitational potential energy = mass × g × height; power = energy transferred ÷ time; power = work done ÷ time; efficiency = useful output energy transfer ÷ total input energy transfer; efficiency = useful power output ÷ total power input; wave speed = frequency × wavelength; charge flow = current × time; potential difference = current × resistance; power = potential difference × current; power = current² × resistance; energy transferred = power × time; energy transferred = charge flow × potential difference; density = mass ÷ volume

Equation sheet (12): pressure due to a column of liquid = height of column × density of liquid × g (HTPO); (final velocity)² − (initial velocity)² = 2 × acceleration × distance; force = change in momentum ÷ time taken (HTPO); elastic potential energy = 0.5 × spring constant × extension²; change in thermal energy = mass × specific heat capacity × temperature change; period = 1 ÷ frequency; magnification = image height ÷ object height (PO); force on a conductor at right angles to a magnetic field = magnetic flux density × current × length (HT); thermal energy for a change of state = mass × specific latent heat; pd across primary ÷ pd across secondary = turns on primary ÷ turns on secondary (HTPO); pd across primary × current in primary = pd across secondary × current in secondary (HTPO); for gases: pressure × volume = constant (PO)
