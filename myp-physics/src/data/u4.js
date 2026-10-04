/* ==========================================================
   UNIT 4 · Wave particle duality
   Strand 1: wave nature · Strand 2: wave action · Strand 3: wave applications
   ========================================================== */
TOPICS.push(lw('6.1', {
  id: '4.1', unit: '4', strand: 1, as: [1, 2, 3], ref: 'Strand 1 · AS 1–3', title: 'Waves transfer energy: v = fλ', short: 'Transverse, longitudinal, amplitude, wavelength, frequency',
  summary: 'A wave transfers energy without transferring matter. Describe transverse and longitudinal waves, annotate a wave diagram, and derive the wave equation v = fλ from speed = distance ÷ time.',
  spec: ['Describe waves as a transfer of energy (and information) without transfer of matter', 'Distinguish transverse and longitudinal waves, with examples', 'Annotate a wave diagram: crest, trough, amplitude, wavelength', 'Define frequency (Hz) and period: T = 1 ÷ f', 'Derive v = fλ from speed = distance ÷ time and use it', 'Describe how to measure the speed of a wave'],
  learn: [0, 1, 2,
    { h: 'Deriving the wave equation', html: `
<p>In one period T, the source makes one complete oscillation and the wave moves forward by exactly one wavelength λ. Using speed = distance ÷ time:</p>
<div class="box def"><b class="lbl">Derivation</b><p>$v = @frac{"distance"}{"time"} = @frac{λ}{T}$ and since $T = @frac{1}{f}$, &nbsp; $v = fλ$</p><p class="small">v in m/s, f in hertz (Hz = s⁻¹), λ in m.</p></div>
<p>The <b>speed</b> depends on the medium (sound: 330 m/s in air, 1500 m/s in water, 5000 m/s in steel; light: 3.0 × 10⁸ m/s in a vacuum). The <b>frequency</b> is set by the source and does not change when a wave enters a new medium — so if the speed changes, the wavelength must change.</p>` },
    3],
  quiz: [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11],
  cards: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
  exam: [0, 2, 3],
  addExam: [{ q: 'Starting from speed = distance ÷ time, derive the equation v = fλ. Define each quantity you use.', m: 3, cr: 'A', ms: ['In one period T the wave travels one wavelength λ.', 'v = λ/T', 'f = 1/T, so v = fλ (with v speed, f frequency, λ wavelength defined).'] }],
  worked: 'all',
  eqs: [['v = fλ', 'wave equation'], ['T = @frac{1}{f}', 'period and frequency'], ['v = @frac{λ}{T}', 'wave speed from one period']],
  sims: ['wave', 'ripple'], gens: ['vfl1', 'vfl2', 'period1', 'sound1']
}));

TOPICS.push(lw('6.2', {
  id: '4.2', unit: '4', strand: 1, as: [1], ref: 'Strand 1 · AS 1', title: 'Sound, echoes and intensity', short: 'Pressure waves, loudness, inverse-square law',
  summary: 'Sound is a longitudinal pressure wave. Its amplitude sets the loudness and its frequency the pitch. Energy from a point source spreads out, so intensity falls with the square of distance.',
  spec: ['Describe sound as a longitudinal pressure wave of compressions and rarefactions that needs a medium', 'Relate amplitude to loudness (volume) and frequency to pitch', 'State the range of human hearing (20 Hz – 20 kHz); describe ultrasound and its uses', 'Use echoes to measure distances: distance = speed × time ÷ 2', 'Define intensity as power per unit area, I = P ÷ A (W m⁻²)', 'Explain that energy from a point source spreads over a sphere, so I = P ÷ 4πr² and intensity ∝ 1/r²'],
  learn: [
    { h: 'Sound as a pressure wave', html: `
<p>A loudspeaker cone pushes the air forwards and backwards. This creates regions of high pressure (<b>compressions</b>) and low pressure (<b>rarefactions</b>) that travel outwards — a <b>longitudinal</b> wave. The air particles only oscillate back and forth about fixed positions.</p>
<div class="tbl"><table><tr><th>Wave property</th><th>What we hear</th></tr><tr><td>larger amplitude (bigger pressure changes)</td><td>louder sound (higher volume)</td></tr><tr><td>higher frequency</td><td>higher pitch</td></tr></table></div>
<p>Sound needs a medium: in a vacuum there are no particles to pass on the vibrations (the bell-jar experiment). It travels faster in liquids and solids because the particles are closer together and more strongly linked.</p>` },
    2, 3,
    { h: 'Intensity and the inverse-square law', html: `
<p>Energy from a <b>point source</b> spreads out equally in all directions over the surface of an expanding sphere. The <b>intensity</b> is the power per unit area:</p>
<div class="box def"><b class="lbl">Intensity</b><p>$I = @frac{P}{A} = @frac{P}{4πr^2}$ &nbsp; (W m⁻²)</p></div>
<p>Because the area of a sphere is 4πr², doubling the distance spreads the same power over <b>four times</b> the area: the intensity falls to a quarter. Tripling the distance gives one-ninth. This <b>inverse-square law</b> applies to sound, light, gamma radiation and gravity alike — energy (change) disperses as it moves away from the source.</p>
[[d:invsquare]]` }],
  quiz: [3, 4, 5, 9],
  addQuiz: [
    { q: 'Sound waves are', o: ['longitudinal pressure waves', 'transverse electromagnetic waves', 'transverse mechanical waves', 'able to travel through a vacuum'], x: 'Compressions and rarefactions.' },
    { q: 'Increasing the amplitude of a sound wave makes it', o: ['louder', 'higher pitched', 'faster', 'longer in wavelength'], x: 'Volume.' },
    { q: 'You move from 2 m to 4 m away from a small speaker. The intensity becomes', o: ['one quarter', 'one half', 'twice as large', 'unchanged'], x: 'Inverse square.' },
    { q: 'A 60 W point source of light. The intensity 2.0 m away is about', o: ['1.2 W/m²', '15 W/m²', '4.8 W/m²', '30 W/m²'], x: '60 ÷ (4π × 4).' },
    { q: 'Sound cannot travel through', o: ['a vacuum', 'water', 'steel', 'air'], x: 'Needs particles.' }
  ],
  cards: [3, 4, 5, 6, 7, 11],
  addCards: [['Compression and rarefaction?', 'Regions of high and low pressure in a sound wave.'], ['Amplitude → ?', 'Loudness (volume).'], ['Frequency → ?', 'Pitch.'], ['Intensity?', 'Power per unit area, I = P/A (W m⁻²).'], ['Intensity from a point source?', 'I = P/4πr² — inverse-square law.'], ['Distance doubled — intensity?', 'Falls to one quarter.']],
  exam: [0, 3],
  addExam: [{ q: 'A 0.50 W point source of sound is used in a lab. (a) Calculate the intensity 1.5 m from the source. (b) A student says that at 3.0 m the intensity will be half as much. Explain why she is wrong and give the correct value.', m: 5, cr: 'A', ms: ['A = 4π × 1.5² = 28.3 m²', 'I = 0.50 ÷ 28.3 = 0.018 W/m² (1.8 × 10⁻² W m⁻²)', 'Energy spreads over the surface of a sphere, area ∝ r².', 'Doubling the distance makes the area four times larger …', '… so the intensity is one quarter: 4.4 × 10⁻³ W m⁻².'] }],
  worked: [0], addWorked: [{ q: 'A lamp emits 40 W of light equally in all directions. Find the intensity at 3.0 m.', s: ['$A = 4πr^2 = 4π × 3.0^2 = 113 "m"^2$', '$I = @frac{P}{A} = @frac{40}{113}$', '$I = 0.35 "W m"^{-2}$'], a: '0.35 W m⁻²' }],
  eqs: [['I = @frac{P}{4πr^2}', 'intensity from a point source'], ['s = @frac{vt}{2}', 'echo distance']],
  pitfalls: ['Forgetting to halve the echo time (the sound travels there and back).', 'Saying intensity halves when distance doubles.', 'Confusing amplitude (loudness) and frequency (pitch).', 'Saying sound particles travel from the source to the ear.'],
  sims: ['echo', 'intensity'], gens: ['echo1', 'echo2', 'intens1', 'intens2']
}));

TOPICS.push(lw('6.2', {
  id: '4.3', unit: '4', strand: 2, as: [4, 5], ref: 'Strand 2 · AS 4–5', title: 'Reflection: rays and wavefronts', short: 'Law of reflection, plane mirrors, wavefront diagrams',
  summary: 'Light can be modelled by rays (the direction energy travels) or wavefronts (lines of equal phase). Draw both for reflection, use the law of reflection, and locate the image in a plane mirror.',
  spec: ['Draw ray diagrams for reflection using a normal and the law of reflection (angle of incidence = angle of reflection)', 'Describe the image in a plane mirror: virtual, upright, same size, as far behind the mirror as the object is in front, laterally inverted', 'Distinguish specular and diffuse reflection', 'Draw wavefront diagrams for reflection at a plane barrier', 'Explain that rays are drawn perpendicular to wavefronts'],
  learn: [0,
    { h: 'Rays and wavefronts: two models', html: `
<p>A <b>ray</b> is an arrow showing the direction in which the wave’s energy travels. A <b>wavefront</b> is a line joining points that are in step (e.g. all the crests); wavefronts are drawn one wavelength apart. Rays are always <b>perpendicular</b> to wavefronts.</p>
<p>Each model suits different questions: rays make reflection and lenses easy to draw; wavefronts explain why refraction and diffraction happen.</p>` },
    { h: 'The law of reflection and plane mirrors', html: `
[[d:reflection]]
<div class="box def"><b class="lbl">Law of reflection</b><p>angle of incidence = angle of reflection, both measured from the <b>normal</b> (a line at 90° to the surface)</p></div>
<p>The image in a plane mirror is <b>virtual</b> (rays only appear to come from it), <b>upright</b>, the <b>same size</b>, the <b>same distance behind</b> the mirror as the object is in front, and <b>laterally inverted</b> (left and right swapped). To draw it, reflect two rays from the top of the object and extend the reflected rays backwards (dashed) until they meet.</p>
<p>A smooth surface gives <b>specular</b> reflection (a clear image). A rough surface gives <b>diffuse</b> reflection — each tiny part obeys the law, but the normals point in different directions, so light is scattered.</p>` },
    { h: 'Wavefront diagram for reflection', html: `
[[d:wfreflect]]
<p>Plane wavefronts approaching a straight barrier at an angle are reflected at the same angle. The wavelength, frequency and speed are all unchanged after reflection — only the direction changes.</p>` },
    1],
  quiz: [0, 1, 2, 10],
  addQuiz: [
    { q: 'Rays are drawn', o: ['perpendicular to the wavefronts', 'parallel to the wavefronts', 'at 45° to the wavefronts', 'only for sound'], x: 'Direction of energy travel.' },
    { q: 'The image in a plane mirror is', o: ['virtual, upright and the same size', 'real, inverted and smaller', 'real and upright', 'virtual and magnified'], x: 'Properties of a plane-mirror image.' },
    { q: 'You stand 1.5 m in front of a mirror. Your image is', o: ['1.5 m behind the mirror', '3.0 m behind the mirror', 'on the mirror surface', '0.75 m behind the mirror'], x: 'Same distance behind.' },
    { q: 'After reflection at a barrier, the wavelength of a water wave', o: ['is unchanged', 'doubles', 'halves', 'becomes zero'], x: 'Same medium, same speed.' },
    { q: 'Diffuse reflection happens because', o: ['the surface is rough, so normals point in different directions', 'the law of reflection does not apply', 'the light is absorbed', 'the angle of incidence is zero'], x: 'Each point still obeys the law.' }
  ],
  cards: [0, 1, 2], addCards: [['Ray?', 'Line/arrow showing the direction energy travels.'], ['Wavefront?', 'Line joining points in phase (e.g. crests); one wavelength apart.'], ['Plane mirror image?', 'Virtual, upright, same size, same distance behind, laterally inverted.'], ['Specular vs diffuse reflection?', 'Smooth surface → clear image; rough surface → scattered light.']],
  exam: [2], addExam: [{ q: 'Draw a ray diagram to show how the image of a point object is formed by a plane mirror, and explain why the image is described as virtual.', m: 4, cr: 'A', ms: ['Two rays from the object reflecting with i = r at the mirror (normals drawn).', 'Reflected rays extended backwards as dashed lines meeting behind the mirror.', 'Image the same perpendicular distance behind the mirror as the object is in front.', 'Virtual: light rays do not actually pass through the image; they only appear to come from it.'] }],
  worked: false, addWorked: [{ q: 'A ray strikes a plane mirror at 35° to the mirror surface. Find the angle of reflection.', s: ['Angles are measured from the normal', 'Angle of incidence = 90° − 35° = 55°', 'Angle of reflection = 55°'], a: '55°' }],
  eqs: [['i = r', 'law of reflection (from the normal)']],
  pitfalls: ['Measuring angles from the mirror surface instead of the normal.', 'Drawing the virtual image with solid lines.', 'Forgetting arrows on rays.', 'Drawing wavefronts with different spacing after reflection.'],
  sims: ['mirror', 'ripple'], gens: ['reflect1']
}));

TOPICS.push(lw('6.3', {
  id: '4.4', unit: '4', strand: 2, as: [4, 5, 6], ref: 'Strand 2 · AS 4–6', title: 'Refraction and Snell’s law', short: 'n = sin i ÷ sin r = c ÷ v',
  summary: 'Light changes speed — and so direction — when it crosses a boundary. Draw refraction ray and wavefront diagrams and use Snell’s law to find the refractive index of a material.',
  spec: ['Describe refraction as a change of direction caused by a change of speed at a boundary', 'Draw ray diagrams for refraction (towards the normal when slowing down, away when speeding up)', 'Draw wavefront diagrams for refraction, showing the change in wavelength', 'Define refractive index n = c ÷ v', 'Use Snell’s law: n = sin i ÷ sin r (from air), and n₁ sin θ₁ = n₂ sin θ₂', 'Describe an experiment to determine the refractive index of a glass block'],
  learn: [1,
    { h: 'Refractive index', html: `
<div class="box def"><b class="lbl">Refractive index</b><p>$n = @frac{c}{v}$ = speed of light in a vacuum ÷ speed of light in the material (no units)</p></div>
<div class="tbl"><table><tr><th>Material</th><th>n</th><th>speed of light / 10⁸ m s⁻¹</th></tr><tr><td>vacuum (air ≈)</td><td>1.00</td><td>3.00</td></tr><tr><td>water</td><td>1.33</td><td>2.26</td></tr><tr><td>glass (crown)</td><td>1.52</td><td>1.97</td></tr><tr><td>diamond</td><td>2.42</td><td>1.24</td></tr></table></div>
<p>A larger refractive index means light travels more slowly and bends more.</p>` },
    { h: 'Snell’s law', html: `
[[d:snell]]
<div class="box def"><b class="lbl">Snell’s law</b><p>$n = @frac{sin i}{sin r}$ &nbsp; (light passing from air into the material)</p><p>In general: $n_1 sin θ_1 = n_2 sin θ_2$</p></div>
<p>Willebrord Snell found this rule experimentally in 1621. Plotting sin i (y) against sin r (x) gives a straight line through the origin whose gradient is n — a good way to use all your data and find an uncertainty.</p>` },
    { h: 'Wavefront diagrams for refraction', html: `
[[d:refraction]]
<p>The frequency stays the same, so when the speed falls the wavelength gets shorter: $@frac{λ_1}{λ_2} = @frac{v_1}{v_2} = n$. Wavefronts entering a slower medium are closer together and turn towards the boundary.</p>` },
    { h: 'The Snell’s law lab', html: `
<ol><li>Draw round a rectangular glass block on paper; draw a normal at a point on one long side.</li><li>Shine a narrow ray from a ray box at the point, at angles of incidence from 10° to 70° in steps of 10°.</li><li>Mark the emerging ray with crosses, remove the block and join up to draw the refracted ray inside the block.</li><li>Measure r with a protractor (± 1°) for each i; repeat.</li><li>Plot sin i against sin r; the gradient is n. Use steepest and shallowest lines for its uncertainty.</li></ol>
<div class="box tip"><b class="lbl">Improving the method</b><p>Use a narrow ray in a darkened room, a sharp pencil, and large angles (smaller percentage uncertainty). A semicircular block avoids refraction at the curved face when the ray enters along a radius.</p></div>` }],
  quiz: [6, 11],
  addQuiz: [
    { q: 'Light enters glass (n = 1.5) at an angle of incidence of 30°. The angle of refraction is', o: ['19°', '30°', '45°', '48°'], x: 'sin r = sin 30° ÷ 1.5 = 0.333.' },
    { q: 'The refractive index of water is 1.33. The speed of light in water is', o: ['2.3 × 10⁸ m/s', '4.0 × 10⁸ m/s', '3.0 × 10⁸ m/s', '1.3 × 10⁸ m/s'], x: 'v = c/n.' },
    { q: 'When light passes from glass into air at an angle, it bends', o: ['away from the normal', 'towards the normal', 'along the normal', 'not at all'], x: 'Speeds up.' },
    { q: 'A graph of sin i against sin r for a glass block has a gradient of', o: ['the refractive index', 'the critical angle', 'the speed of light', '1'], x: 'n = sin i / sin r.' },
    { q: 'When a wave refracts, the quantity that does NOT change is the', o: ['frequency', 'speed', 'wavelength', 'direction'], x: 'Set by the source.' },
    { q: 'A ray enters a block along the normal (i = 0°). It', o: ['passes straight through without bending', 'bends towards the normal', 'reflects totally', 'stops'], x: 'sin 0 = 0.' }
  ],
  cards: [4, 5], addCards: [['Refractive index?', 'n = c/v (no units).'], ['Snell’s law?', 'n = sin i / sin r; n₁ sin θ₁ = n₂ sin θ₂'], ['Wavelength in a slower medium?', 'Shorter (frequency unchanged).'], ['What does a sin i vs sin r graph give?', 'Gradient = n'], ['n for glass and water?', '≈ 1.5 and 1.33']],
  exam: [1, 2], addExam: [
    { q: 'In a Snell’s law lab a student records i = 20°, 40°, 60° and r = 13°, 25°, 35°. (a) Calculate n for each pair. (b) State the mean value and an uncertainty. (c) Explain why plotting sin i against sin r is a better way to analyse the data.', m: 6, cr: 'C', ms: ['n = sin 20/sin 13 = 1.52', 'n = sin 40/sin 25 = 1.52', 'n = sin 60/sin 35 = 1.51', 'Mean 1.52 ± 0.01 (half range; accept ± 0.005–0.01)', 'Graph uses all the data and averages out random errors …', '… and shows systematic error (non-zero intercept) / allows a gradient uncertainty from max/min lines.'] }
  ],
  worked: false, addWorked: [
    { q: 'Light travels from air into water (n = 1.33) with an angle of incidence of 50°. Find the angle of refraction and the speed of light in the water.', s: ['$sin r = @frac{sin 50°}{1.33} = 0.576$', '$r = 35°$', '$v = @frac{c}{n} = @frac{3.0 × 10^8}{1.33} = 2.3 × 10^8 "m/s"$'], a: '35°; 2.3 × 10⁸ m/s' },
    { q: 'A ray passes from water (n = 1.33) into glass (n = 1.50) at 40° to the normal. Find the angle in the glass.', s: ['$n_1 sin θ_1 = n_2 sin θ_2$', '$1.33 × sin 40° = 1.50 sin θ_2$', '$sin θ_2 = 0.570$ → $θ_2 = 35°$'], a: '35°' }
  ],
  eqs: [['n = @frac{c}{v}', 'refractive index'], ['n = @frac{sin i}{sin r}', 'Snell’s law (from air)'], ['n_1 sin θ_1 = n_2 sin θ_2', 'Snell’s law (general)']],
  pitfalls: ['Using angles measured from the surface instead of the normal.', 'Writing n = sin r / sin i (upside down) — n is always ≥ 1 for light entering from air.', 'Saying the frequency changes on refraction.', 'Calculator in radians mode.'],
  sims: ['refract', 'snell'], gens: ['snell1', 'snell2', 'nspeed', 'snell3']
}));

TOPICS.push({
  id: '4.5', unit: '4', strand: 3, as: [6], ref: 'Strand 3 · AS 6', title: 'Total internal reflection and optical fibres', short: 'Critical angle sin c = 1 ÷ n, fibres, endoscopes, the internet',
  summary: 'When light tries to leave a denser medium at a large angle it cannot escape: it is totally internally reflected. Calculate the critical angle and explain how optical fibres carry the internet and let doctors see inside the body.',
  spec: ['State the conditions for total internal reflection: light travelling from a higher to a lower refractive index, at an angle of incidence greater than the critical angle', 'Define the critical angle as the angle of incidence for which the angle of refraction is 90°', 'Use sin c = 1 ÷ n (to air) and sin c = n₂ ÷ n₁ in general', 'Explain how optical fibres use total internal reflection (core and cladding)', 'Describe uses: communications (internet), endoscopes, periscopes and prisms, diamonds'],
  learn: [
    { h: 'From refraction to total internal reflection', html: `
[[d:tir]]
<p>Light going from glass into air bends <b>away</b> from the normal. As the angle of incidence increases, the refracted ray gets closer to the surface. At the <b>critical angle c</b> the refracted ray runs along the surface (r = 90°). For any larger angle, no light can escape: all of it is <b>reflected</b> back into the glass — <b>total internal reflection</b> (TIR).</p>
<div class="box def"><b class="lbl">Conditions for TIR</b><p>1. light travels from a medium of higher refractive index to lower (e.g. glass → air);<br>2. the angle of incidence is greater than the critical angle.</p></div>` },
    { h: 'Calculating the critical angle', html: `
<p>Snell’s law with θ₂ = 90° (and sin 90° = 1):</p>
<div class="box def"><b class="lbl">Critical angle</b><p>$sin c = @frac{1}{n}$ (to air) &nbsp; or &nbsp; $sin c = @frac{n_2}{n_1}$ (in general)</p></div>
<div class="tbl"><table><tr><th>Material</th><th>n</th><th>critical angle</th></tr><tr><td>water</td><td>1.33</td><td>49°</td></tr><tr><td>crown glass</td><td>1.52</td><td>41°</td></tr><tr><td>diamond</td><td>2.42</td><td>24°</td></tr></table></div>
<p>Diamond’s small critical angle traps light inside, which bounces around many times before escaping — that is why diamonds sparkle.</p>` },
    { h: 'Optical fibres: how has the internet changed our world?', html: `
[[d:fibre]]
<p>An optical fibre is a thin glass <b>core</b> surrounded by <b>cladding</b> of lower refractive index. Light entering the end hits the core–cladding boundary at more than the critical angle and is totally internally reflected again and again, following the fibre even round bends.</p>
<ul><li><b>Communications:</b> data are sent as pulses of infrared light. Fibres carry far more information than copper cables, with less energy loss and no electrical interference. Undersea fibres link every continent — they carry over 95% of international internet traffic.</li><li><b>Endoscopes:</b> one bundle of fibres carries light into the body; another carries the image back, so doctors can see inside without major surgery — keyhole surgery.</li><li>Prisms using TIR are used in periscopes, binoculars and bicycle reflectors.</li></ul>` }
  ],
  eqs: [['sin c = @frac{1}{n}', 'critical angle (to air)'], ['sin c = @frac{n_2}{n_1}', 'critical angle (general)']],
  worked: [
    { q: 'Find the critical angle for a glass with n = 1.60.', s: ['$sin c = @frac{1}{1.60} = 0.625$', '$c = sin^{-1}(0.625)$', '$c = 38.7°$'], a: '39°' },
    { q: 'An optical fibre has a core of n = 1.48 and cladding of n = 1.46. Find the critical angle at the core–cladding boundary.', s: ['$sin c = @frac{n_2}{n_1} = @frac{1.46}{1.48} = 0.986$', '$c = 80.6°$', 'Rays must meet the boundary at more than 80.6° to the normal — almost parallel to the fibre.'], a: '81°' },
    { q: 'Light travels in water (critical angle 49°). It hits the surface at 60° to the normal. What happens?', s: ['60° > 49°', 'Total internal reflection — no light leaves the water.'], a: 'Totally internally reflected' }
  ],
  pitfalls: ['Forgetting that TIR only happens going from higher to lower n.', 'Writing sin c = n instead of 1/n.', 'Saying the cladding has a higher refractive index than the core.', 'Measuring angles from the surface.'],
  cards: [
    ['Two conditions for TIR?', 'Higher → lower refractive index; angle of incidence > critical angle.'], ['Define critical angle.', 'Angle of incidence for which the angle of refraction is 90°.'], ['Critical angle formula (to air)?', 'sin c = 1/n'], ['Critical angle of glass (n = 1.5)?', '≈ 42°'],
    ['Why does a fibre have cladding?', 'Lower n than the core so TIR occurs; protects the core and stops signal leaking between fibres.'], ['Use of fibres in medicine?', 'Endoscopes — seeing inside the body.'], ['Advantages of optical fibres over copper?', 'More data, less loss, no electrical interference, lighter.'], ['Why do diamonds sparkle?', 'Small critical angle (24°) → many internal reflections.']
  ],
  quiz: [
    { q: 'Total internal reflection can happen when light travels from', o: ['glass into air', 'air into glass', 'air into water', 'a vacuum into glass'], x: 'Higher to lower n.' },
    { q: 'At the critical angle, the angle of refraction is', o: ['90°', '0°', '45°', 'equal to the angle of incidence'], x: 'Along the surface.' },
    { q: 'The critical angle for water (n = 1.33) is about', o: ['49°', '41°', '33°', '60°'], x: 'sin⁻¹(1/1.33).' },
    { q: 'A material with a larger refractive index has', o: ['a smaller critical angle', 'a larger critical angle', 'no critical angle', 'the same critical angle'], x: 'sin c = 1/n.' },
    { q: 'Optical fibres transmit data using', o: ['total internal reflection of light pulses', 'electric current', 'radio waves', 'diffraction'], x: 'Light bounces along the core.' },
    { q: 'The cladding of an optical fibre has', o: ['a lower refractive index than the core', 'a higher refractive index than the core', 'the same refractive index', 'no refractive index'], x: 'Needed for TIR.' },
    { q: 'An endoscope is used to', o: ['see inside the body', 'treat cancer with gamma rays', 'measure bone density', 'heat tissue'], x: 'Keyhole surgery.' },
    { q: 'Light in glass (c = 42°) meets the surface at 30°. It is', o: ['mostly refracted out (with some partial reflection)', 'totally internally reflected', 'absorbed', 'diffracted'], x: '30° < 42°.' }
  ],
  exam: [
    { q: 'Explain how light travels along a curved optical fibre. Include the conditions needed.', m: 4, cr: 'A', ms: ['Light hits the core–cladding boundary at an angle greater than the critical angle …', '… so it is totally internally reflected.', 'Cladding has a lower refractive index than the core (light goes from higher to lower n).', 'Repeated TIR keeps the light inside even round bends (provided the bend is not too sharp).'] },
    { q: 'A glass prism has a refractive index of 1.52. (a) Calculate the critical angle. (b) Explain why a right-angled 45° prism can be used to turn light through 90° in a periscope.', m: 4, cr: 'A', ms: ['sin c = 1/1.52 = 0.658', 'c = 41°', 'Light meets the hypotenuse face at 45°', '45° > 41° so it is totally internally reflected through 90°.'] },
    { q: 'Undersea optical fibre cables carry most of the world’s internet traffic. Discuss the advantages and disadvantages of this global communication network.', m: 6, cr: 'D', ms: ['Advantage: very high data rates, low loss → fast global communication (physics of TIR).', 'Advantage: supports education, trade, emergency communication worldwide.', 'Disadvantage: expensive to lay and repair; vulnerable to damage (ships’ anchors, earthquakes).', 'Disadvantage: unequal access — some regions poorly connected (digital divide).', 'Other perspective: energy use of data centres / security and privacy concerns.', 'Balanced, justified conclusion.'] }
  ],
  sims: ['snell'], gens: ['crit1', 'crit2', 'critn']
});

TOPICS.push(lw('6.4', {
  id: '4.6', unit: '4', strand: 2, as: [5], ref: 'Strand 2 · AS 5', title: 'Diffraction, colour and models of light', short: 'Wavefronts through gaps, dispersion, rainbows, wave–particle duality',
  summary: 'Waves spread out through gaps and around obstacles. Diffraction was the evidence that settled the debate between Newton’s particles and Huygens’ waves — until the photoelectric effect showed light also behaves as particles.',
  spec: ['Draw wavefront diagrams for diffraction through a gap and round an obstacle', 'State that diffraction is greatest when the gap is about the same size as the wavelength', 'Explain dispersion: different colours (wavelengths) refract by different amounts', 'Explain how a rainbow forms and why the sky and deep water look blue (scattering)', 'Explain how filters and coloured objects produce colour', 'Compare the particle (Newton) and wave (Huygens) models of light and describe the evidence for each (wave–particle duality)'],
  learn: [
    { h: 'Diffraction', html: `
[[d:diffraction]]
<p><b>Diffraction</b> is the spreading of waves as they pass through a gap or around an obstacle. The wavelength and speed do not change.</p>
<ul><li>A gap much <b>wider</b> than the wavelength: little spreading.</li><li>A gap about the <b>same size</b> as the wavelength: maximum spreading (nearly circular wavefronts).</li></ul>
<p>This is why you can hear someone round a corner (sound wavelengths ≈ 1 m, similar to a doorway) but cannot see them (light wavelengths ≈ 500 nm, far smaller). Long-wave radio diffracts round hills; TV signals at shorter wavelengths need a line of sight.</p>` },
    { h: 'Dispersion and the rainbow', html: `
<p>The refractive index of glass or water is slightly <b>different for each wavelength</b>: violet slows down most and bends most; red bends least. A prism therefore spreads white light into a <b>spectrum</b> — <b>dispersion</b>.</p>
<p>In a <b>rainbow</b>, sunlight enters each raindrop, refracts (dispersing), reflects off the back surface, and refracts again on leaving. You see red from drops higher in the sky and violet from lower drops, at about 42° from the point directly opposite the Sun.</p>
[[d:rainbow]]` },
    { h: 'Scattering: why water looks blue', html: `
<p>Small particles and molecules scatter <b>short wavelengths</b> (blue, violet) much more strongly than long ones. This makes the sky blue. Underwater the effect is strengthened because water <b>absorbs red light</b> within the first few metres: divers see everything turn blue–green, and red objects look dark grey at depth.</p>` },
    3,
    { h: 'Particles or waves? Different perspectives', html: `
<div class="tbl"><table><tr><th></th><th>Particle (corpuscle) model — Newton, 1704</th><th>Wave model — Huygens, 1678</th></tr>
<tr><td>Reflection</td><td>✓ particles bounce elastically</td><td>✓ wavefronts reflect</td></tr>
<tr><td>Refraction</td><td>✓ but predicts light is <b>faster</b> in glass</td><td>✓ predicts light is <b>slower</b> in glass</td></tr>
<tr><td>Diffraction, interference</td><td>✗ cannot explain</td><td>✓ (Young’s double slit, 1801)</td></tr>
<tr><td>Photoelectric effect</td><td>✓ (Einstein, 1905: photons)</td><td>✗ cannot explain</td></tr></table></div>
<p>Newton’s great authority kept the particle model dominant for a century. Young’s interference experiment (1801) and Foucault’s measurement that light is slower in water (1850) swung opinion to waves. Then Einstein showed that light delivers energy in packets — <b>photons</b>. Today we accept <b>wave–particle duality</b>: light travels as a wave but is emitted and absorbed as particles. Different experiments, and different perspectives, each revealed part of the truth.</p>` }],
  quiz: [5, 6, 7, 8, 10],
  addQuiz: [
    { q: 'Diffraction is greatest when the gap is', o: ['about the same size as the wavelength', 'much larger than the wavelength', 'much smaller than the wavelength', 'zero'], x: 'Similar size.' },
    { q: 'When a wave diffracts, its wavelength', o: ['stays the same', 'increases', 'decreases', 'becomes zero'], x: 'Only direction spreads.' },
    { q: 'A prism splits white light into colours because', o: ['the refractive index is different for different wavelengths', 'it reflects some colours', 'it adds colour to the light', 'it diffracts the light'], x: 'Dispersion.' },
    { q: 'Which colour is refracted most by a prism?', o: ['violet', 'red', 'yellow', 'green'], x: 'Shortest wavelength.' },
    { q: 'Which observation supports the wave model of light but not Newton’s particle model?', o: ['diffraction and interference', 'reflection', 'light travels in straight lines', 'the photoelectric effect'], x: 'Young 1801.' },
    { q: 'You can hear a person round a corner but not see them because', o: ['sound wavelengths are similar to the doorway width, light wavelengths are far smaller', 'sound is faster than light', 'light cannot reflect', 'sound is a transverse wave'], x: 'Diffraction.' },
    { q: 'Deep underwater, red objects look dark because', o: ['water absorbs red light', 'red light scatters most', 'red light is diffracted', 'the eye cannot see red underwater'], x: 'Red absorbed first.' }
  ],
  cards: [7, 8, 9, 10, 11, 12],
  addCards: [['Diffraction?', 'Spreading of waves through a gap or around an obstacle.'], ['Maximum diffraction?', 'Gap ≈ wavelength.'], ['Dispersion?', 'Splitting of white light because n depends on wavelength.'], ['Order of a rainbow, outside → inside?', 'Red, orange, yellow, green, blue, indigo, violet.'], ['Why is the sky blue?', 'Short wavelengths scattered most.'], ['Evidence for light as a wave?', 'Diffraction and interference (Young).'], ['Evidence for light as particles?', 'Photoelectric effect (Einstein).'], ['Wave–particle duality?', 'Light travels as a wave but is emitted/absorbed as photons.']],
  exam: [1],
  addExam: [
    { q: 'Draw wavefront diagrams to show water waves passing through (a) a gap much wider than the wavelength, (b) a gap similar in size to the wavelength. State what stays the same in both.', m: 4, cr: 'A', ms: ['(a) mostly straight wavefronts with slight curving at the edges.', '(b) strongly curved / near-semicircular wavefronts.', 'Wavefronts drawn with the same spacing as before the gap.', 'Wavelength (and frequency, speed) unchanged.'] },
    { q: 'Newton’s particle model and Huygens’ wave model both explained refraction, but made different predictions. Explain how an experiment decided between them and why the particle model later returned.', m: 5, cr: 'A', ms: ['Particle model predicted light travels faster in water/glass; wave model predicted slower.', 'Foucault (1850) measured the speed of light in water — slower — supporting waves.', 'Diffraction/interference (Young) also only explained by waves.', 'Photoelectric effect could only be explained if light comes in packets/photons (Einstein 1905).', 'Wave–particle duality — both models needed.'] }
  ],
  worked: false,
  eqs: [],
  pitfalls: ['Saying wavelength changes when a wave diffracts.', 'Saying a red filter “turns light red” — it absorbs other colours.', 'Thinking dispersion is caused by reflection.', 'Treating the particle and wave models as simply right or wrong.'],
  sims: ['diffract', 'colour'], gens: []
}));

TOPICS.push(lw('6.4', {
  id: '4.7', unit: '4', strand: 2, as: [4], ref: 'Strand 2 · AS 4', title: 'Lenses, the eye and correcting vision', short: 'Convex and concave lenses, myopia and hyperopia',
  summary: 'Lenses refract light to form images. Draw ray diagrams for converging and diverging lenses, and explain how glasses correct short and long sight — and why access to eye care is a global fairness issue.',
  spec: ['Describe how converging (convex) and diverging (concave) lenses refract light; principal focus and focal length', 'Draw ray diagrams to find the image formed by a lens; describe images as real/virtual, upright/inverted, magnified/diminished', 'Use magnification = image height ÷ object height', 'Describe how the eye focuses light onto the retina', 'Explain short sight (myopia) and long sight (hyperopia) and their correction with diverging and converging lenses', 'Discuss global inequality in access to vision correction and eye treatment'],
  learn: [0, 1, 2,
    { h: 'The eye', html: `
[[d:eye]]
<p>The <b>cornea</b> does most of the refraction; the <b>lens</b> fine-tunes the focus by changing shape (thicker for near objects). A clear image must form on the <b>retina</b>, where light-sensitive cells (rods and cones) send signals along the optic nerve to the brain. The image on the retina is real and inverted — the brain turns it the right way up.</p>` },
    { h: 'How do glasses correct vision?', html: `
<div class="tbl"><table><tr><th></th><th>Short sight (myopia)</th><th>Long sight (hyperopia)</th></tr>
<tr><td>Can see clearly</td><td>near objects</td><td>distant objects</td></tr>
<tr><td>Problem</td><td>light from distant objects focuses <b>in front of</b> the retina (eyeball too long / lens too strong)</td><td>light from near objects focuses <b>behind</b> the retina (eyeball too short / lens too weak)</td></tr>
<tr><td>Correction</td><td><b>diverging (concave)</b> lens spreads the rays out first</td><td><b>converging (convex)</b> lens adds extra focusing</td></tr></table></div>
[[d:sightfix]]
<p>Lens power is measured in <b>dioptres</b>: P = 1 ÷ f (f in metres). Converging lenses have positive power; diverging lenses negative.</p>` },
    { h: 'Fairness and development: access to eye care', html: `
<p>The WHO estimates that over 1 billion people have a vision impairment that could have been prevented or has yet to be addressed — most simply need glasses or cataract surgery, both cheap and effective. Most live in low- and middle-income countries, where there may be one eye doctor per million people. Women are more likely than men to be blind: they live longer (cataracts increase with age) and often have less access to care. Low-cost solutions include adjustable-lens glasses, ready-made reading glasses and mobile cataract camps.</p>` }],
  quiz: [0, 1, 2, 3, 4],
  addQuiz: [
    { q: 'Short sight (myopia) is corrected with', o: ['a diverging (concave) lens', 'a converging (convex) lens', 'a plane mirror', 'a prism'], x: 'Spreads rays first.' },
    { q: 'In a long-sighted eye, light from near objects focuses', o: ['behind the retina', 'in front of the retina', 'on the retina', 'on the cornea'], x: 'Needs extra converging.' },
    { q: 'Most of the refraction in the eye happens at the', o: ['cornea', 'lens', 'retina', 'pupil'], x: 'Biggest change in n.' },
    { q: 'A lens of focal length 0.25 m has a power of', o: ['+4.0 D', '+0.25 D', '−4.0 D', '+25 D'], x: 'P = 1/f.' }
  ],
  cards: [0, 1, 2, 3, 4, 5, 6], addCards: [['Myopia?', 'Short sight — distant objects focus in front of the retina; corrected by a diverging lens.'], ['Hyperopia?', 'Long sight — near objects focus behind the retina; corrected by a converging lens.'], ['Lens power?', 'P = 1/f (dioptres, f in m).'], ['Where is the image formed in a healthy eye?', 'On the retina (real, inverted).']],
  exam: [0, 2], addExam: [{ q: 'A student cannot read the board at the front of the classroom but can read her book clearly. (a) Name her eye defect. (b) Explain, with a ray diagram, where light from the board is focused. (c) Explain how a suitable lens corrects this.', m: 5, cr: 'A', ms: ['Short sight / myopia.', 'Parallel rays from the distant board focus in front of the retina.', 'Diagram showing rays crossing before the retina.', 'Diverging (concave) lens …', '… spreads the rays out so the eye focuses them on the retina.'] }],
  worked: 'all',
  eqs: [['"magnification" = @frac{"image height"}{"object height"}', 'magnification'], ['P = @frac{1}{f}', 'lens power (dioptres)']],
  sims: ['lens', 'eye'], gens: ['mag1', 'mag2', 'lenspower']
}));

TOPICS.push(lw('6.3', {
  id: '4.8', unit: '4', strand: 3, as: [7], ref: 'Strand 3 · AS 7', title: 'The electromagnetic spectrum and its applications', short: 'Properties, uses, dangers, medical imaging, c',
  summary: 'Radio to gamma, all electromagnetic waves are transverse, travel at c in a vacuum and transfer energy. Their different wavelengths suit different tasks — from the internet to medical imaging — and their speed means that looking out into space is looking back in time.',
  spec: ['List the parts of the EM spectrum in order of wavelength and frequency', 'State the common properties: transverse, travel at 3.0 × 10⁸ m/s in a vacuum, transfer energy, can be reflected, refracted and diffracted', 'Describe uses of each part (communication, cooking, heating, imaging, sterilising, medicine)', 'Describe the dangers of UV, X-rays and gamma rays (ionising radiation)', 'Explain why c is described as the cosmic speed limit and why looking through space is looking back in time', 'Discuss global inequalities in access to medical imaging and treatment'],
  learn: [0,
    { h: 'Properties common to all EM waves', html: `
<ul><li>They are <b>transverse</b> waves of oscillating electric and magnetic fields.</li><li>They travel at the same speed in a vacuum, $c = 3.0 × 10^8 "m s"^{-1}$, and need no medium.</li><li>They transfer energy (higher frequency → more energy per photon).</li><li>They can all be reflected, refracted and diffracted, and obey $c = fλ$.</li></ul>` },
    4, 5, 3,
    { h: 'Medical applications', html: `
<div class="tbl"><table><tr><th>Technique</th><th>Wave</th><th>How it works</th></tr>
<tr><td>X-ray imaging, CT scans</td><td>X-rays</td><td>absorbed by dense bone, pass through soft tissue; CT combines many angles into 3-D slices</td></tr>
<tr><td>Radiotherapy</td><td>gamma / high-energy X-rays</td><td>beams from many angles meet at a tumour, killing cancer cells</td></tr>
<tr><td>Endoscopy, laser eye surgery</td><td>visible / IR / UV light</td><td>fibres carry light by TIR; lasers reshape the cornea</td></tr>
<tr><td>Thermal imaging, pulse oximeters</td><td>infrared</td><td>detects inflammation; measures blood oxygen</td></tr>
<tr><td>Sterilising instruments</td><td>UV, gamma</td><td>kills bacteria</td></tr>
<tr><td>MRI</td><td>radio waves (in a strong magnetic field)</td><td>images soft tissue without ionising radiation</td></tr></table></div>
<div class="box why"><b class="lbl">Fairness and development</b><p>Two-thirds of the world’s population has no access to basic medical imaging, and many countries have no radiotherapy machine at all. Equipment costs, reliable electricity, maintenance and trained staff are all barriers. Portable digital X-ray units, solar-powered ultrasound and international training programmes are narrowing the gap — but the question of who pays remains debatable.</p></div>` },
    { h: 'c: the cosmic speed limit and looking back in time', html: `
<p>Every measurement, by every observer, gives the same speed of light in a vacuum. Einstein’s relativity shows that as a massive object approaches c its energy grows without limit, so nothing with mass can reach c — and no signal or information can travel faster.</p>
<p>Because light takes time to travel, we always see the past: the Moon as it was 1.3 s ago, the Sun 8.3 minutes ago, the nearest star (Proxima Centauri) 4.2 years ago, the Andromeda galaxy 2.5 million years ago. Telescopes such as JWST see galaxies as they were over 13 billion years ago, shortly after the Big Bang.</p>` }],
  quiz: [0, 1, 2, 3, 4, 5, 8, 9, 10, 12],
  addQuiz: [
    { q: 'Light from the Sun takes about 8.3 minutes to reach Earth. This means we see the Sun', o: ['as it was 8.3 minutes ago', 'as it will be in 8.3 minutes', 'exactly as it is now', 'as it was 8.3 years ago'], x: 'Light travel time.' },
    { q: 'Which EM wave is used in MRI scanners?', o: ['radio waves', 'gamma rays', 'X-rays', 'ultraviolet'], x: 'With a strong magnetic field.' },
    { q: 'All EM waves', o: ['travel at 3.0 × 10⁸ m/s in a vacuum', 'are longitudinal', 'are ionising', 'need a medium'], x: 'Common property.' },
    { q: 'The frequency of green light of wavelength 5.0 × 10⁻⁷ m is', o: ['6.0 × 10¹⁴ Hz', '1.5 × 10² Hz', '1.7 × 10⁻¹⁵ Hz', '6.0 × 10⁸ Hz'], x: 'f = c/λ.' }
  ],
  cards: [0, 1, 2, 3, 6, 9, 10, 11, 12],
  addCards: [['Common properties of EM waves?', 'Transverse; c in vacuum; transfer energy; reflect, refract, diffract.'], ['Why is c a speed limit?', 'Energy needed grows without limit as a mass approaches c.'], ['Light travel time from the Sun?', '≈ 8.3 minutes.'], ['Medical use of gamma rays?', 'Radiotherapy, sterilising instruments, tracers.'], ['Why is MRI safer than CT?', 'Uses radio waves — non-ionising.']],
  exam: [3],
  addExam: [
    { q: 'X-rays and ultrasound are both used for medical imaging. Compare the two techniques, including safety.', m: 4, cr: 'A', ms: ['X-rays: EM waves absorbed by dense bone; good for bones/fractures.', 'X-rays are ionising — can damage DNA/cause cancer; doses kept low, staff shielded.', 'Ultrasound: high-frequency sound reflected at tissue boundaries; good for soft tissue / pregnancy.', 'Ultrasound is non-ionising and considered safe.'] },
    { q: '“The developed world is doing enough to support the treatment of diseases in developing countries.” Evaluate this statement with reference to medical uses of electromagnetic waves.', m: 6, cr: 'D', ms: ['Describes relevant technology (e.g. X-ray/CT/radiotherapy) and its benefit.', 'Evidence of support: donated equipment, training, low-cost portable devices, charity programmes.', 'Evidence of inequality: lack of radiotherapy machines/imaging in many countries, costs, maintenance, staff shortages.', 'Considers different perspectives (governments, manufacturers, patients, local health systems).', 'Considers implications (economic, ethical, social).', 'Reasoned conclusion supported by the arguments.'] }
  ],
  worked: [0], addWorked: [{ q: 'The Andromeda galaxy is 2.4 × 10²² m away. How long has its light been travelling?', s: ['$t = @frac{s}{v} = @frac{2.4 × 10^{22}}{3.0 × 10^8}$', '$t = 8.0 × 10^{13} "s"$', '÷ (3.15 × 10⁷ s per year) ≈ 2.5 million years'], a: '≈ 2.5 million years' }],
  eqs: [['c = fλ', 'EM waves, c = 3.0 × 10⁸ m s⁻¹'], ['t = @frac{d}{c}', 'light travel time']],
  sims: ['emspec'], gens: ['em1', 'em2', 'lighttime']
}));
