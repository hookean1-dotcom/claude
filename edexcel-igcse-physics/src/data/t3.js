/* ==========================================================
   TOPIC 3 · WAVES
   ========================================================== */
TOPICS.push({
  id: '3.1', unit: '3', ref: '3.1–3.7', title: 'Properties of waves', short: 'Transverse/longitudinal, v = fλ, f = 1/T',
  summary: 'Transverse and longitudinal waves; amplitude, wavefront, frequency, wavelength and period; waves transfer energy and information without transferring matter; v = fλ and f = 1/T.',
  spec: [
    '3.1 use the following units: degree (°), hertz (Hz), metre (m), metre/second (m/s) and second (s)',
    '3.2 explain the difference between longitudinal and transverse waves',
    '3.3 know the definitions of amplitude, wavefront, frequency, wavelength and period of a wave',
    '3.4 know that waves transfer energy and information without transferring matter',
    '3.5 know and use the relationship between the speed, frequency and wavelength of a wave: v = f × λ',
    '3.6 use the relationship between frequency and time period: f = 1/T',
    '3.7 use the above relationships in different contexts, including sound waves and electromagnetic waves'
  ],
  learn: [
    { h: 'Transverse and longitudinal waves', html: `
[[d:wavetypes]]
<ul><li><b>Transverse:</b> the vibrations (oscillations) are <b>perpendicular</b> to the direction of energy transfer. Examples: all electromagnetic waves (including light), waves on water and on strings, S-waves.</li><li><b>Longitudinal:</b> the vibrations are <b>parallel</b> to the direction of energy transfer, forming <b>compressions</b> and <b>rarefactions</b>. Examples: sound, ultrasound, P-waves, a slinky pushed and pulled along its length.</li></ul>
<p>Waves transfer <b>energy and information</b> without transferring <b>matter</b>: a floating cork bobs up and down but does not travel with the wave.</p>` },
    { h: 'Describing a wave', html: `
[[d:waveparts]]
<div class="tbl"><table><tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Amplitude</b></td><td>the maximum displacement of a point on the wave from its rest (undisturbed) position</td></tr>
<tr><td><b>Wavelength</b> (λ)</td><td>the distance between a point on one wave and the same point on the next wave (e.g. crest to crest)</td></tr>
<tr><td><b>Frequency</b> (f)</td><td>the number of waves passing a point each second (Hz)</td></tr>
<tr><td><b>Period</b> (T)</td><td>the time taken for one complete wave to pass a point (s)</td></tr>
<tr><td><b>Wavefront</b></td><td>a line joining points on a wave that are in step (e.g. all the crests)</td></tr></table></div>` },
    { h: 'Wave equations', html: `
<div class="box def"><b class="lbl">Recall</b><p>$"wave speed" = "frequency" × "wavelength"$ &nbsp; $v = f × λ$ &nbsp; (m/s = Hz × m)</p></div>
<div class="box def"><b class="lbl">Given</b><p>$"frequency" = @frac{1}{"time period"}$ &nbsp; $f = @frac{1}{T}$</p></div>
<p>Typical speeds: sound in air ≈ 330–340 m/s (faster in liquids and solids); all electromagnetic waves travel at $3.0 × 10^8$ m/s in a vacuum.</p>` }
  ],
  eqs: [['v = f × λ', 'recall'], ['f = @frac{1}{T}', 'given']],
  worked: [
    { q: 'A radio station broadcasts at 97.5 MHz. Calculate the wavelength (speed of EM waves = 3.0 × 10⁸ m/s).', s: ['f = 97.5 × 10⁶ Hz', '$λ = @frac{v}{f} = @frac{3.0 × 10^8}{97.5 × 10^6}$', '$λ = 3.1 "m"$'], a: '3.1 m' },
    { q: 'A wave has a period of 0.020 s and a wavelength of 1.5 m. Calculate its speed.', s: ['f = 1/T = 1/0.020 = 50 Hz', 'v = fλ = 50 × 1.5 = 75 m/s'], a: '75 m/s' }
  ],
  pitfalls: ['Measuring amplitude from crest to trough — it is from the rest position to a crest.', 'Forgetting to convert kHz/MHz to Hz.', 'Saying the water travels with a water wave.'],
  cards: [
    ['Transverse wave?', 'Vibrations perpendicular to the direction of energy transfer.'],
    ['Longitudinal wave?', 'Vibrations parallel to the direction of energy transfer; compressions and rarefactions.'],
    ['Example of a longitudinal wave?', 'Sound.'],
    ['Define amplitude.', 'Maximum displacement from the rest position.'],
    ['Define frequency.', 'Number of waves passing a point per second (Hz).'],
    ['Define period.', 'Time for one complete wave (s).'],
    ['Define wavefront.', 'A line joining points on a wave that are in step, e.g. all the crests.'],
    ['Wave speed equation?', '$v = fλ$'],
    ['Frequency and period?', '$f = 1/T$'],
    ['Do waves transfer matter?', 'No — energy and information only.']
  ],
  quiz: [
    { q: 'A wave has frequency 200 Hz and wavelength 1.7 m. Its speed is', o: ['340 m/s', '118 m/s', '0.0085 m/s', '201.7 m/s'], x: '200 × 1.7.' },
    { q: 'Which wave is longitudinal?', o: ['sound', 'light', 'microwave', 'a wave on a string'], x: 'Compressions and rarefactions.' },
    { q: 'The period of a 25 Hz wave is', o: ['0.04 s', '25 s', '4 s', '0.25 s'], x: '1/25.' },
    { q: 'The amplitude is measured from', o: ['the rest position to a crest', 'a crest to a trough', 'one crest to the next', 'a compression to a rarefaction'], x: 'Maximum displacement.' },
    { q: 'Waves transfer', o: ['energy but not matter', 'matter but not energy', 'both energy and matter', 'neither'], x: 'Definition.' },
    { q: 'In a transverse wave the oscillations are', o: ['perpendicular to energy transfer', 'parallel to energy transfer', 'circular', 'random'], x: 'Definition.' },
    { q: 'Light of wavelength 6.0 × 10⁻⁷ m has a frequency of', o: ['5.0 × 10¹⁴ Hz', '1.8 × 10² Hz', '2.0 × 10⁻¹⁵ Hz', '5.0 × 10⁸ Hz'], x: '3.0×10⁸ ÷ 6.0×10⁻⁷.' }
  ],
  exam: [
    { q: 'A student makes waves in a ripple tank. A vibrating bar produces straight wavefronts. She counts 24 waves passing a point in 8.0 s, and measures the distance across 10 wavelengths as 15 cm.', tag: 'prac', parts: [
      { q: 'State what is meant by a wavefront.', m: 1, ms: ['a line joining points on a wave that are in step / e.g. all the crests'] },
      { q: 'Calculate the frequency.', m: 2, ms: ['f = 24 ÷ 8.0', '= 3.0 Hz'] },
      { q: 'Calculate the wave speed.', m: 3, ms: ['λ = 15 ÷ 10 = 1.5 cm = 0.015 m', 'v = fλ = 3.0 × 0.015', '= 0.045 m/s (4.5 cm/s)'] },
      { q: 'Explain why measuring across 10 wavelengths is better than measuring one.', m: 2, ms: ['one wavelength is small so the percentage uncertainty is large', 'measuring several and dividing reduces the uncertainty'] }
    ] },
    { q: 'Compare transverse and longitudinal waves. Give an example of each.', m: 4, ms: ['transverse: oscillations perpendicular to direction of energy transfer', 'longitudinal: oscillations parallel to direction of energy transfer', 'example transverse: light / any EM wave / water wave', 'example longitudinal: sound'] },
    { q: 'A sound wave has a time period of 2.5 ms and travels at 340 m/s. Calculate its wavelength.', tag: 'calc', m: 3, ms: ['f = 1 ÷ 0.0025 = 400 Hz', 'λ = v ÷ f = 340 ÷ 400', '= 0.85 m'] }
  ],
  sims: ['wave', 'ripple'], gens: ['vfl1', 'vfl2', 'period1', 'em1', 'em2']
});

TOPICS.push({
  id: '3.2', unit: '3', ref: '3.8–3.9', title: 'Reflection, refraction and the Doppler effect', short: 'All waves reflect and refract; moving sources',
  summary: 'All waves can be reflected and refracted; when a source moves relative to an observer, the observed frequency and wavelength change — the Doppler effect.',
  spec: [
    '3.8 explain why there is a change in the observed frequency and wavelength of a wave when its source is moving relative to an observer, and that this is known as the Doppler effect',
    '3.9 explain that all waves can be reflected and refracted'
  ],
  learn: [
    { h: 'Reflection and refraction of all waves', html: `
[[d:ripple]]
<p><b>Reflection:</b> a wave bounces off a barrier; angle of incidence = angle of reflection. Echoes are reflected sound.</p>
<p><b>Refraction:</b> a wave changes <b>speed</b> when it enters a different medium (or a different depth of water), and so usually changes <b>direction</b>. The <b>frequency stays the same</b> (set by the source), so the <b>wavelength changes</b> in proportion to the speed (v = fλ). Water waves slow down in shallower water: the wavefronts get closer together and bend towards the normal.</p>` },
    { h: 'The Doppler effect', html: `
[[d:doppler]]
<p>When a wave source moves <b>towards</b> an observer, each wave is emitted from a point a little closer than the last, so the wavefronts are squashed together: the observed <b>wavelength is shorter</b> and the <b>frequency higher</b>. When the source moves <b>away</b>, the wavefronts are stretched out: <b>longer wavelength, lower frequency</b>.</p>
<p>Examples: the pitch of an ambulance siren is higher as it approaches and drops as it passes; radar speed guns; blood-flow measurement with ultrasound; the <b>red-shift</b> of light from receding galaxies (Topic 8).</p>
<p>The speed of the wave itself does not change — only the spacing of the waves the observer receives.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'A police car’s siren emits a steady 900 Hz note. Describe what a person standing by the road hears as the car approaches, passes and moves away, and explain why.', s: ['Approaching: higher pitch than 900 Hz — wavefronts bunched up, shorter wavelength, higher frequency.', 'At the moment of passing, the pitch drops.', 'Moving away: lower pitch than 900 Hz — wavefronts spread out, longer wavelength, lower frequency.'], a: 'High → drops → low: the Doppler effect.' }
  ],
  pitfalls: ['Saying the siren gets louder and this is the Doppler effect — Doppler is about frequency/pitch.', 'Saying the wave speed changes in the Doppler effect.', 'Saying frequency changes when a wave is refracted.'],
  cards: [
    ['What is the Doppler effect?', 'Change in observed frequency and wavelength when the source moves relative to the observer.'],
    ['Source moving towards you?', 'Shorter wavelength, higher frequency.'],
    ['Source moving away?', 'Longer wavelength, lower frequency.'],
    ['Which waves can be reflected and refracted?', 'All waves.'],
    ['What changes when a wave refracts?', 'Speed and wavelength (and usually direction); frequency stays the same.'],
    ['Example of the Doppler effect?', 'Siren pitch dropping as an ambulance passes; red-shift of galaxies.']
  ],
  quiz: [
    { q: 'As a train approaches, the pitch of its horn seems', o: ['higher than it really is', 'lower than it really is', 'unchanged', 'to stop'], x: 'Wavefronts bunched.' },
    { q: 'When a wave refracts, which does NOT change?', o: ['frequency', 'speed', 'wavelength', 'direction (usually)'], x: 'Set by source.' },
    { q: 'Light from a galaxy moving away from us has', o: ['a longer observed wavelength', 'a shorter observed wavelength', 'a higher observed frequency', 'a greater speed'], x: 'Red-shift.' },
    { q: 'Water waves entering shallower water', o: ['slow down and their wavelength decreases', 'speed up', 'increase in frequency', 'stop'], x: 'Refraction.' },
    { q: 'Which statement is true?', o: ['all waves can be reflected and refracted', 'only light can be refracted', 'sound cannot be reflected', 'only EM waves reflect'], x: 'Spec 3.9.' }
  ],
  exam: [
    { q: 'A car with a horn of frequency 400 Hz drives past a stationary observer at constant speed.', tag: 'ext', parts: [
      { q: 'Describe how the frequency heard by the observer changes as the car approaches and then moves away.', m: 2, ms: ['higher than 400 Hz as it approaches', 'lower than 400 Hz as it moves away (sudden drop as it passes)'] },
      { q: 'Explain why the observed frequency changes. You may draw a diagram of the wavefronts.', m: 4, ms: ['each wave is emitted from a new position of the source', 'in front of the car wavefronts are closer together', 'shorter wavelength, and since speed is unchanged, higher frequency (f = v/λ)', 'behind: wavefronts further apart, longer wavelength, lower frequency'] },
      { q: 'State one other example of the Doppler effect.', m: 1, ms: ['red-shift of light from galaxies / radar speed trap / ultrasound blood flow'] }
    ] },
    { q: 'Water waves travel from deep to shallow water. Describe what happens to their speed, frequency, wavelength and direction.', m: 4, ms: ['speed decreases', 'frequency unchanged', 'wavelength decreases', 'direction changes (bends towards the normal) unless hitting boundary along the normal'] }
  ],
  sims: ['doppler', 'ripple'], gens: []
});

TOPICS.push({
  id: '3.3', unit: '3', ref: '3.10–3.13', title: 'The electromagnetic spectrum', short: 'Order, uses and dangers',
  summary: 'The continuous electromagnetic spectrum — radio, microwave, infrared, visible, ultraviolet, x-ray and gamma — all travelling at the same speed in free space; their uses and dangers, and simple protective measures.',
  spec: [
    '3.10 know that light is part of a continuous electromagnetic spectrum that includes radio, microwave, infrared, visible, ultraviolet, x-ray and gamma ray radiations, and that all these waves travel at the same speed in free space',
    '3.11 know the order of the electromagnetic spectrum in terms of decreasing wavelength and increasing frequency, including the colours of the visible spectrum',
    '3.12 explain some of the uses of electromagnetic radiations, including: radio waves (broadcasting and communications), microwaves (cooking and satellite transmissions), infrared (heaters and night vision equipment), visible light (optical fibres and photography), ultraviolet (fluorescent lamps), x-rays (observing the internal structure of objects and materials, including for medical applications), gamma rays (sterilising food and medical equipment)',
    '3.13 explain the detrimental effects of excessive exposure of the human body to electromagnetic waves, including microwaves (internal heating of body tissue), infrared (skin burns), ultraviolet (damage to surface cells and blindness), gamma rays (cancer, mutation), and describe simple protective measures against the risks'
  ],
  learn: [
    { h: 'The spectrum', html: `
[[d:emspec]]
<p>Order of <b>decreasing wavelength</b> (increasing frequency and energy): <b>radio → microwave → infrared → visible → ultraviolet → x-ray → gamma</b>. Memory aid: <i>Rich Men In Vegas Use eXpensive Gadgets</i>.</p>
<p>Visible light, longest to shortest wavelength: <b>red, orange, yellow, green, blue, indigo, violet</b> (ROYGBIV).</p>
<p>All electromagnetic waves are <b>transverse</b>, transfer energy, and travel at the <b>same speed in free space (a vacuum)</b>: $3.0 × 10^8$ m/s.</p>` },
    { h: 'Uses', html: `
<div class="tbl"><table><tr><th>Radiation</th><th>Uses (spec)</th><th>Why suitable</th></tr>
<tr><td>Radio</td><td>broadcasting (TV, radio) and communications</td><td>long wavelengths travel long distances, diffract round hills</td></tr>
<tr><td>Microwave</td><td>cooking; satellite transmissions (and mobile phones)</td><td>absorbed by water molecules, heating food; pass through the atmosphere</td></tr>
<tr><td>Infrared</td><td>heaters; night-vision equipment (also remote controls, thermal imaging)</td><td>all warm objects emit IR; absorbed as heat</td></tr>
<tr><td>Visible</td><td>optical fibres; photography</td><td>detected by eyes and cameras; total internal reflection in fibres</td></tr>
<tr><td>Ultraviolet</td><td>fluorescent lamps (also security marking, sterilising water)</td><td>makes some substances glow (fluoresce)</td></tr>
<tr><td>X-rays</td><td>observing internal structure of objects and materials, including medical x-rays and airport security</td><td>pass through soft tissue but are absorbed by bone and metal</td></tr>
<tr><td>Gamma</td><td>sterilising food and medical equipment (also cancer treatment)</td><td>high energy kills bacteria; highly penetrating</td></tr></table></div>` },
    { h: 'Dangers and protection', html: `
<div class="tbl"><table><tr><th>Radiation</th><th>Harmful effect of excessive exposure</th><th>Protection</th></tr>
<tr><td>Microwaves</td><td>internal heating of body tissue</td><td>metal mesh/case on ovens; limit phone use near the head</td></tr>
<tr><td>Infrared</td><td>skin burns</td><td>avoid touching very hot objects; protective clothing; distance</td></tr>
<tr><td>Ultraviolet</td><td>damage to surface cells (sunburn, skin cancer, premature ageing) and blindness</td><td>sunscreen, sunglasses/UV goggles, covering skin, limiting time in sun</td></tr>
<tr><td>X-rays and gamma</td><td>ionising — cell damage, mutation, cancer</td><td>lead shielding, lead aprons, limiting dose/time, distance, film badges</td></tr></table></div>
<p>Higher frequency radiation carries more energy, so is generally more dangerous; UV, x-rays and gamma are <b>ionising</b>.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why x-rays can be used to image a broken bone.', s: ['X-rays pass through soft tissue (low absorption).', 'They are absorbed by bone (denser).', 'A detector/film behind the patient shows the bone as a shadow, revealing the break.'], a: 'Differential absorption by bone vs soft tissue.' }
  ],
  pitfalls: ['Getting the order wrong — IR is next to red; UV is next to violet.', 'Saying EM waves have different speeds in a vacuum.', 'Giving a use without explaining the property that makes it suitable.'],
  cards: [
    ['Order of EM spectrum (long λ to short)?', 'Radio, microwave, infrared, visible, ultraviolet, x-ray, gamma.'],
    ['Colours of the visible spectrum (long λ first)?', 'Red, orange, yellow, green, blue, indigo, violet.'],
    ['Speed of EM waves in a vacuum?', '3.0 × 10⁸ m/s — the same for all.'],
    ['Use of microwaves?', 'Cooking; satellite transmissions.'],
    ['Use of infrared?', 'Heaters; night-vision equipment.'],
    ['Use of UV?', 'Fluorescent lamps.'],
    ['Use of gamma?', 'Sterilising food and medical equipment.'],
    ['Danger of UV?', 'Damage to surface cells (skin cancer) and blindness.'],
    ['Danger of gamma?', 'Cancer, mutation.'],
    ['Danger of microwaves?', 'Internal heating of body tissue.'],
    ['Danger of infrared?', 'Skin burns.']
  ],
  quiz: [
    { q: 'Which EM wave has the highest frequency?', o: ['gamma', 'radio', 'x-ray', 'ultraviolet'], x: 'End of spectrum.' },
    { q: 'Which lies between visible light and x-rays?', o: ['ultraviolet', 'infrared', 'microwave', 'gamma'], x: 'Order.' },
    { q: 'Night-vision cameras detect', o: ['infrared', 'ultraviolet', 'x-rays', 'radio waves'], x: 'Warm bodies emit IR.' },
    { q: 'Sterilising surgical instruments uses', o: ['gamma rays', 'microwaves', 'radio waves', 'infrared'], x: 'Kills bacteria.' },
    { q: 'Excessive exposure to microwaves causes', o: ['internal heating of body tissue', 'skin cancer', 'blindness', 'bone damage'], x: 'Spec.' },
    { q: 'In a vacuum, red light compared with blue light travels', o: ['at the same speed', 'faster', 'slower', 'at half the speed'], x: 'All EM waves.' },
    { q: 'Which visible colour has the longest wavelength?', o: ['red', 'violet', 'green', 'blue'], x: 'ROYGBIV.' },
    { q: 'A protective measure against UV is', o: ['sunscreen and sunglasses', 'a lead apron', 'a metal mesh', 'earplugs'], x: 'Blocks UV.' }
  ],
  exam: [
    { q: 'The electromagnetic spectrum is a family of waves.', parts: [
      { q: 'State two properties shared by all electromagnetic waves.', m: 2, ms: ['transverse', 'same speed in a vacuum / 3 × 10⁸ m/s / transfer energy / can travel through a vacuum'] },
      { q: 'Put these in order of increasing frequency: visible, gamma, microwave, ultraviolet.', m: 2, ms: ['microwave, visible, ultraviolet, gamma', 'all correct for 2; one error for 1'] },
      { q: 'Give one use of microwaves and explain why microwaves are suitable.', m: 2, ms: ['cooking — absorbed by water molecules in food, heating it', 'or satellite transmissions — pass through the atmosphere'] }
    ] },
    { q: 'Discuss the harmful effects of ultraviolet and gamma radiation on the human body and how people can be protected from them.', tag: 'ext', m: 6, ms: ['UV damages surface cells / sunburn / skin cancer', 'UV can cause blindness / eye damage', 'protect with sunscreen / sunglasses / clothing / limiting exposure', 'gamma is ionising / high energy', 'can cause cancer / mutation / cell damage', 'protect with lead/concrete shielding, distance, limiting time/dose, film badges'] }
  ],
  sims: ['emspec'], gens: ['em1', 'em2']
});

TOPICS.push({
  id: '3.4', unit: '3', ref: '3.14–3.19', title: 'Light: reflection and refraction', short: 'Law of reflection, ray diagrams, n = sin i / sin r',
  summary: 'Light is a transverse wave that reflects and refracts. The law of reflection, drawing ray diagrams, the refraction practicals with blocks and prisms, and refractive index n = sin i / sin r.',
  spec: [
    '3.14 know that light waves are transverse waves and that they can be reflected and refracted',
    '3.15 use the law of reflection (the angle of incidence equals the angle of reflection)',
    '3.16 draw ray diagrams to illustrate reflection and refraction',
    '3.17 practical: investigate the refraction of light, using rectangular blocks, semi-circular blocks and triangular prisms',
    '3.18 know and use the relationship between refractive index, angle of incidence and angle of refraction: n = sin i / sin r',
    '3.19 practical: investigate the refractive index of glass, using a glass block'
  ],
  learn: [
    { h: 'Reflection', html: `
[[d:reflection]]
<p><b>Law of reflection:</b> the angle of incidence equals the angle of reflection. Both angles are measured from the <b>normal</b> — a line drawn at 90° to the surface where the ray hits it.</p>
<p>In a plane mirror the image is the same size, upright, laterally inverted, as far behind the mirror as the object is in front, and <b>virtual</b> (cannot be formed on a screen).</p>` },
    { h: 'Refraction', html: `
[[d:refraction]]
<p>Light changes speed when it passes between materials of different optical density. Entering a denser medium (air → glass) it <b>slows down and bends towards the normal</b>; leaving it (glass → air) it <b>speeds up and bends away from the normal</b>. A ray along the normal (i = 0°) does not change direction.</p>
<p>In a rectangular block the emerging ray is <b>parallel</b> to the incident ray but displaced sideways. In a triangular prism, the ray bends towards the base at both faces; white light is <b>dispersed</b> into a spectrum because each colour refracts by a different amount (violet most, red least).</p>` },
    { h: 'Refractive index', html: `
<div class="box def"><b class="lbl">Recall</b><p>$n = @frac{sin i}{sin r}$ &nbsp; (i = angle in air, r = angle in the material; n has no unit)</p></div>
<p>Refractive index measures how much a material slows and bends light: glass ≈ 1.5, water ≈ 1.33, diamond ≈ 2.4. A larger n means more bending.</p>
<p>Use your calculator in <b>degree mode</b>; to find an angle use $sin^{-1}$.</p>` },
    { h: 'Practicals: refraction and refractive index (3.17, 3.19)', html: `
[[d:raybox]]
<ol><li>Place a rectangular glass block on paper and draw round it. Draw a normal at a point on one long side.</li><li>Shine a narrow ray from a ray box along a line at an angle of incidence i (e.g. 20°) to the normal, into the block at that point.</li><li>Mark the emerging ray with two crosses far apart; remove the block and join the points to draw the refracted ray inside the block.</li><li>Measure r with a protractor. Repeat for i = 30°, 40°, 50°, 60°, 70°.</li><li>Calculate sin i ÷ sin r for each, or plot <b>sin i (y) against sin r (x)</b>: the gradient is n.</li></ol>
<p>With a <b>semi-circular block</b>, aim the ray at the centre of the flat face so it passes along a radius without bending at the curved face — useful to study the refraction at the flat face and to find the critical angle. With a <b>triangular prism</b>, observe deviation and dispersion.</p>
<p><b>Accuracy:</b> use a narrow ray; mark rays well apart; darkened room; sharp pencil; repeat and average; a graph gives a better value of n than a single calculation.</p>` }
  ],
  eqs: [['n = @frac{sin i}{sin r}', 'refractive index (recall)']],
  worked: [
    { q: 'A ray enters glass at an angle of incidence of 40° and refracts at 25°. Calculate the refractive index.', s: ['$n = @frac{sin 40°}{sin 25°} = @frac{0.643}{0.423}$', '$n = 1.52$'], a: '1.52' },
    { q: 'Light hits water (n = 1.33) at 50°. Find the angle of refraction.', s: ['$sin r = @frac{sin i}{n} = @frac{sin 50°}{1.33} = @frac{0.766}{1.33} = 0.576$', '$r = sin^{-1}(0.576) = 35°$'], a: '35°' }
  ],
  pitfalls: ['Measuring angles from the surface instead of the normal.', 'Putting sin r on top.', 'Calculator in radians mode.', 'Drawing the ray bending the wrong way at the second face of a block.'],
  cards: [
    ['Law of reflection?', 'Angle of incidence = angle of reflection (measured from the normal).'],
    ['What is the normal?', 'A line at 90° to the surface at the point where the ray hits.'],
    ['Light entering glass from air bends…', 'towards the normal (slows down).'],
    ['Refractive index equation?', '$n = sin i ÷ sin r$'],
    ['Ray leaving a rectangular block?', 'Parallel to the incident ray, displaced sideways.'],
    ['What is dispersion?', 'Splitting of white light into colours by a prism; violet refracts most.'],
    ['How to find n from a graph?', 'Plot sin i against sin r; gradient = n.'],
    ['Why use a semi-circular block?', 'Ray along a radius is not refracted at the curved face — so only the flat face refracts.']
  ],
  quiz: [
    { q: 'A ray hits a mirror at 35° to the normal. The angle of reflection is', o: ['35°', '55°', '70°', '145°'], x: 'Equal.' },
    { q: 'i = 30°, r = 19°. The refractive index is about', o: ['1.54', '1.58', '0.65', '0.63'], x: '0.5 ÷ 0.326.' },
    { q: 'Light passing from glass into air', o: ['speeds up and bends away from the normal', 'slows down and bends towards the normal', 'does not bend', 'speeds up and bends towards the normal'], x: 'Less dense.' },
    { q: 'A ray travelling along the normal into a glass block', o: ['does not change direction', 'bends towards the normal', 'is totally internally reflected', 'bends away from the normal'], x: 'i = 0.' },
    { q: 'Which colour is refracted most by a prism?', o: ['violet', 'red', 'green', 'yellow'], x: 'Shortest wavelength.' },
    { q: 'In a graph of sin i against sin r, the gradient is', o: ['the refractive index', 'the critical angle', '1/n', 'the speed of light'], x: 'n = sin i/sin r.' }
  ],
  exam: [
    { q: 'A student investigates the refraction of light in a rectangular glass block. Her results: i = 20° r = 13°; i = 40° r = 25°; i = 60° r = 35°; i = 70° r = 38°.', tag: 'prac', parts: [
      { q: 'Describe how she should measure the angle of refraction for each angle of incidence.', m: 4, ms: ['draw round the block and draw a normal', 'shine a narrow ray from a ray box at the chosen angle to the normal', 'mark the emerging ray with crosses; remove block and join entry and exit points', 'measure r between the refracted ray and the normal with a protractor'] },
      { q: 'Use her result for i = 40° to calculate the refractive index of the glass.', m: 2, ms: ['n = sin 40 ÷ sin 25', '= 1.52'] },
      { q: 'Explain how she could use all her results to get a more reliable value for n.', m: 3, ms: ['calculate sin i and sin r for each', 'plot sin i against sin r and draw a line of best fit', 'gradient = n (averages out random errors)'] },
      { q: 'Suggest one source of error and how to reduce it.', m: 2, ms: ['ray too wide / difficult to mark position of ray', 'use a narrow slit / darken room / mark points far apart'] }
    ] },
    { q: 'Light travels from air into a plastic with refractive index 1.49. The angle of incidence is 55°.', tag: 'calc', parts: [
      { q: 'Calculate the angle of refraction.', m: 3, ms: ['sin r = sin 55 ÷ 1.49', '= 0.550', 'r = 33°'] },
      { q: 'Draw a ray diagram showing the ray entering and leaving a rectangular block of this plastic.', m: 3, ms: ['normal drawn at both faces', 'ray bends towards the normal on entering', 'emergent ray parallel to incident ray (bending away from normal)'] }
    ] }
  ],
  sims: ['refract'], gens: ['refr1', 'refr2']
});

TOPICS.push({
  id: '3.5', unit: '3', ref: '3.20–3.22', title: 'Total internal reflection and optical fibres', short: 'Critical angle, sin c = 1/n, prisms',
  summary: 'The critical angle, total internal reflection, sin c = 1/n, and how TIR is used in optical fibres (communications, endoscopes) and prisms (periscopes, binoculars, reflectors).',
  spec: [
    '3.20 describe the role of total internal reflection in transmitting information along optical fibres and in prisms',
    '3.21 explain the meaning of critical angle c',
    '3.22 know and use the relationship between critical angle and refractive index: sin c = 1/n'
  ],
  learn: [
    { h: 'Critical angle and total internal reflection', html: `
[[d:tir]]
<p>When light travels from a <b>denser</b> medium (glass, water) towards a <b>less dense</b> medium (air), it bends away from the normal. As the angle of incidence increases, the refracted ray gets closer to the surface.</p>
<ul><li>The <b>critical angle (c)</b> is the angle of incidence in the denser medium for which the angle of refraction is 90° (the refracted ray travels along the boundary).</li><li>If i &gt; c, <b>all</b> the light is reflected back inside — <b>total internal reflection (TIR)</b>. (If i &lt; c, most light refracts out and a little is reflected.)</li></ul>
<div class="box def"><b class="lbl">Recall</b><p>$sin c = @frac{1}{n}$ &nbsp; e.g. glass n = 1.5 → c = sin⁻¹(1/1.5) = 42°</p></div>
<p>Conditions for TIR: light going from denser to less dense medium, <b>and</b> angle of incidence greater than the critical angle.</p>` },
    { h: 'Optical fibres and prisms', html: `
[[d:fibre]]
<p><b>Optical fibres</b> are thin, flexible strands of very pure glass. Light entering one end hits the inside wall at an angle greater than the critical angle, so it is totally internally reflected again and again along the fibre, even round bends. A cladding of lower refractive index protects the surface.</p>
<ul><li><b>Communications:</b> pulses of light carry telephone, TV and internet signals — very high data rate, little loss, not affected by electrical interference, hard to tap.</li><li><b>Endoscopes:</b> bundles of fibres carry light into the body and an image back out, for viewing inside patients without major surgery.</li></ul>
<p><b>Prisms:</b> a right-angled (45°) glass prism reflects light by TIR because 45° is greater than the critical angle of glass (42°). One prism turns light through 90° (periscopes); used in pairs to turn it through 180° (binoculars, bicycle reflectors, “cat’s eyes”). Prisms give brighter, sharper images than mirrors and don’t tarnish.</p>` }
  ],
  eqs: [['sin c = @frac{1}{n}', 'critical angle (recall)']],
  worked: [
    { q: 'Diamond has a refractive index of 2.42. Calculate its critical angle and explain why diamonds sparkle.', s: ['$sin c = 1/2.42 = 0.413$', '$c = sin^{-1}(0.413) = 24°$', 'Small critical angle → most light inside is totally internally reflected many times before leaving, so diamonds sparkle.'], a: '24°' },
    { q: 'The critical angle of a plastic is 40°. Calculate its refractive index.', s: ['$n = 1/sin c = 1/sin 40° = 1/0.643$', '$n = 1.56$'], a: '1.56' }
  ],
  pitfalls: ['Saying TIR happens going from air into glass.', 'Forgetting to state i > c as the condition.', 'Defining the critical angle as the angle of refraction.'],
  cards: [
    ['Define critical angle.', 'The angle of incidence (in the denser medium) that gives an angle of refraction of 90°.'],
    ['Critical angle equation?', '$sin c = 1/n$'],
    ['Two conditions for TIR?', 'Light travelling from denser to less dense medium; angle of incidence greater than the critical angle.'],
    ['Critical angle of glass (n = 1.5)?', 'About 42°.'],
    ['How does light travel along an optical fibre?', 'Repeated total internal reflection at the walls.'],
    ['Two uses of optical fibres?', 'Communications (data), endoscopes.'],
    ['Why can a 45° prism reflect light?', '45° is greater than glass’s critical angle (42°), so TIR occurs.'],
    ['Uses of TIR prisms?', 'Periscopes, binoculars, bicycle reflectors.']
  ],
  quiz: [
    { q: 'The critical angle of a material with n = 1.25 is', o: ['53°', '37°', '45°', '66°'], x: 'sin⁻¹(0.8).' },
    { q: 'Total internal reflection can happen when light goes from', o: ['glass to air', 'air to glass', 'air to water', 'vacuum to glass'], x: 'Denser to less dense.' },
    { q: 'Glass has c = 42°. A ray inside the glass hits the surface at 50°. It is', o: ['totally internally reflected', 'refracted out at 90°', 'refracted towards the normal', 'absorbed'], x: '50° > 42°.' },
    { q: 'Optical fibres are used in', o: ['endoscopes and communications', 'microwave ovens', 'x-ray machines', 'fuses'], x: 'TIR.' },
    { q: 'A critical angle of 30° means n equals', o: ['2.0', '0.5', '1.5', '1.15'], x: '1/sin 30.' }
  ],
  exam: [
    { q: 'A student shines a ray of light into a semi-circular glass block towards the centre of its flat face. She slowly increases the angle of incidence at the flat face.', tag: 'prac', parts: [
      { q: 'Explain why the ray does not bend when it enters the curved surface.', m: 1, ms: ['it travels along a radius / meets the curved surface along the normal'] },
      { q: 'Describe what she observes as the angle of incidence increases from 20° to 60°.', m: 3, ms: ['refracted ray bends away from the normal and gets closer to the surface', 'at the critical angle the refracted ray travels along the surface (r = 90°)', 'above the critical angle all light is reflected inside (TIR)'] },
      { q: 'She finds the critical angle is 41°. Calculate the refractive index.', m: 2, ms: ['n = 1 ÷ sin 41', '= 1.52'] }
    ] },
    { q: 'Describe how optical fibres use total internal reflection to transmit information, and give two advantages over copper cables.', tag: 'ext', m: 5, ms: ['light (pulses) enter the fibre', 'hit the fibre wall at angle greater than the critical angle', 'totally internally reflected repeatedly along the fibre / round bends', 'advantage: carry more information / higher data rate', 'advantage: less signal loss / no electrical interference / more secure / lighter'] },
    { q: 'Explain why a right-angled isosceles glass prism (n = 1.5) can be used instead of a mirror in a periscope.', m: 3, ms: ['critical angle = sin⁻¹(1/1.5) = 42°', 'light hits the hypotenuse face at 45°, which is greater than 42°', 'so it is totally internally reflected, turning through 90°'] }
  ],
  sims: ['refract'], gens: ['crit1', 'crit2']
});

TOPICS.push({
  id: '3.6', unit: '3', ref: '3.23–3.29', title: 'Sound', short: 'Longitudinal waves, hearing range, oscilloscopes, pitch and loudness',
  summary: 'Sound waves are longitudinal and can be reflected and refracted. Physics only: the hearing range (20–20 000 Hz), measuring the speed of sound, using a microphone and oscilloscope, and how pitch and loudness relate to frequency and amplitude.',
  spec: [
    '3.23 know that sound waves are longitudinal waves that can be reflected and refracted',
    '3.24P know that the frequency range for human hearing is 20–20 000 Hz',
    '3.25P practical: investigate the speed of sound in air',
    '3.26P understand how an oscilloscope and microphone can be used to display a sound wave',
    '3.27P practical: investigate the frequency of a sound wave using an oscilloscope',
    '3.28P understand how the pitch of a sound relates to the frequency of vibration of the source',
    '3.29P understand how the loudness of a sound relates to the amplitude of vibration of the source'
  ],
  learn: [
    { h: 'Sound waves', html: `
<p>Sound is produced by <b>vibrating</b> objects. It travels as a <b>longitudinal</b> wave of compressions and rarefactions through a medium — solids, liquids and gases — but <b>not through a vacuum</b> (there are no particles to vibrate).</p>
<p>Sound can be <b>reflected</b> (echoes; soft furnishings absorb sound to reduce echoes) and <b>refracted</b> (it changes speed between materials — sound travels faster in water and solids than in air, and faster in warm air).</p>` },
    { h: 'Hearing, pitch and loudness', html: `
<div data-po="1">
<p>The <b>frequency range of human hearing is 20–20 000 Hz</b> (20 Hz – 20 kHz). The upper limit falls with age. Sound above 20 kHz is <b>ultrasound</b>; below 20 Hz is infrasound.</p>
<ul><li><b>Pitch</b> depends on <b>frequency</b>: a higher frequency of vibration of the source gives a higher-pitched note.</li><li><b>Loudness</b> depends on <b>amplitude</b>: a larger amplitude of vibration gives a louder sound.</li></ul></div>` },
    { h: 'Microphones and oscilloscopes', html: `
<div data-po="1">
[[d:scope]]
<p>A <b>microphone</b> converts the pressure variations of a sound wave into an alternating electrical signal (voltage) of the same frequency. An <b>oscilloscope</b> displays this voltage against time, giving a trace that looks like a transverse wave — even though sound is longitudinal.</p>
<ul><li>Taller trace → larger amplitude → louder.</li><li>More waves across the screen (closer together) → higher frequency → higher pitch.</li></ul>
<p><b>Practical (3.27P) — frequency from an oscilloscope:</b> connect the microphone; sound a tuning fork or signal generator + loudspeaker near it; adjust the timebase so a few complete waves are visible. Count the squares for one complete wave (or several and divide), multiply by the timebase setting (e.g. ms/div) to get the period T, then <b>f = 1/T</b>.</p>
<p>Example: one wave spans 4.0 divisions at 0.5 ms/div → T = 2.0 ms → f = 1/0.002 = 500 Hz.</p></div>` },
    { h: 'Practical: speed of sound in air (3.25P)', html: `
<div data-po="1">
<p><b>Method 1 — echo:</b> stand at least 50 m from a large wall; clap and adjust the clapping rate so each clap coincides with the echo of the previous one. Time 20 claps; the sound travels to the wall and back (2 × distance) in the time between claps. v = 2d ÷ t.</p>
<p><b>Method 2 — two microphones:</b> place two microphones a measured distance apart (e.g. 1.0 m) in line with a sound source, connected to a fast timer or dual-trace oscilloscope. A sharp sound (hammer on metal) starts and stops the timer: v = distance ÷ time.</p>
<p><b>Method 3 — distant observer:</b> one person bangs two blocks together (visible) 100+ m away; another starts a stopwatch on seeing the bang and stops on hearing it. Light arrives almost instantly. Repeat and average — reaction time causes large errors, so use a long distance.</p>
<p>Expected result ≈ 330–340 m/s.</p></div>` }
  ],
  eqs: [['v = @frac{2d}{t}', 'echo method']],
  worked: [
    { q: 'A student stands 85 m from a wall. The echo of a clap returns 0.50 s later. Calculate the speed of sound.', s: ['Distance travelled = 2 × 85 = 170 m', 'v = 170 ÷ 0.50 = 340 m/s'], a: '340 m/s', po: 1 },
    { q: 'An oscilloscope timebase is 2 ms/div. Three complete waves occupy 6 divisions. Calculate the frequency.', s: ['One wave = 2 divisions = 4 ms', 'T = 0.004 s', 'f = 1/T = 250 Hz'], a: '250 Hz', po: 1 }
  ],
  pitfalls: ['Forgetting the sound travels to the wall and back in echo questions.', 'Linking pitch with amplitude or loudness with frequency.', 'Saying sound can travel through a vacuum.', 'Thinking the oscilloscope trace means sound is transverse.'],
  cards: [
    ['Is sound transverse or longitudinal?', 'Longitudinal.'],
    ['Can sound travel through a vacuum?', 'No — it needs a medium.'],
    ['Human hearing range?', '20 Hz – 20 000 Hz.', 'po'],
    ['Pitch depends on…', 'frequency.', 'po'],
    ['Loudness depends on…', 'amplitude.', 'po'],
    ['What does a microphone do?', 'Converts sound (pressure) waves into an electrical signal.', 'po'],
    ['How do you find frequency on an oscilloscope?', 'Period = divisions per wave × timebase; f = 1/T.', 'po'],
    ['Echo method for speed of sound?', 'v = 2 × distance to wall ÷ time for echo.', 'po'],
    ['Typical speed of sound in air?', '≈ 330–340 m/s.']
  ],
  quiz: [
    { q: 'Sound waves are', o: ['longitudinal', 'transverse', 'electromagnetic', 'stationary'], x: 'Compressions and rarefactions.' },
    { q: 'Which frequency can a young person hear?', o: ['15 000 Hz', '10 Hz', '30 000 Hz', '50 kHz'], x: '20–20 000 Hz.', po: 1 },
    { q: 'A louder sound has a larger', o: ['amplitude', 'frequency', 'wavelength', 'speed'], x: 'Loudness–amplitude.', po: 1 },
    { q: 'A higher-pitched note has a higher', o: ['frequency', 'amplitude', 'speed in air', 'period'], x: 'Pitch–frequency.', po: 1 },
    { q: 'An echo returns 0.6 s after a shout; sound speed 340 m/s. The cliff is', o: ['102 m away', '204 m away', '567 m away', '51 m away'], x: '340 × 0.6 ÷ 2.', po: 1 },
    { q: 'On an oscilloscope, one wave spans 5 divisions at 1 ms/div. The frequency is', o: ['200 Hz', '5000 Hz', '5 Hz', '500 Hz'], x: 'T = 5 ms.', po: 1 },
    { q: 'Sound cannot travel through', o: ['a vacuum', 'water', 'steel', 'air'], x: 'No particles.' }
  ],
  exam: [
    { q: 'A student uses a microphone and an oscilloscope to investigate the sound from a tuning fork.', tag: 'prac', po: 1, parts: [
      { q: 'Describe how the microphone and oscilloscope display the sound wave.', m: 2, ms: ['microphone converts sound into an electrical signal (voltage) of the same frequency', 'oscilloscope shows voltage against time'] },
      { q: 'The timebase is 0.5 ms/div and two complete waves occupy 8.0 divisions. Calculate the frequency of the sound.', m: 3, ms: ['one wave = 4.0 div → T = 4.0 × 0.5 = 2.0 ms', 'f = 1 ÷ 0.0020', '= 500 Hz'] },
      { q: 'The tuning fork is struck harder. Describe and explain the change in the trace.', m: 2, ms: ['trace is taller (larger amplitude)', 'louder sound / larger amplitude of vibration; frequency (spacing) unchanged'] },
      { q: 'A tuning fork of higher pitch is used. Describe the change in the trace.', m: 1, ms: ['more waves on the screen / waves closer together'] }
    ] },
    { q: 'Describe an experiment to measure the speed of sound in air. Include how you would calculate the result and how you would make it accurate.', tag: 'ext', po: 1, m: 6, ms: ['e.g. echo: stand a measured distance (≥ 50 m) from a large wall, measured with a trundle wheel/tape', 'clap and time the echo (or clap in time with echoes and time 20 intervals)', 'distance travelled is 2d', 'speed = 2d ÷ time', 'time many claps/repeats and take a mean to reduce reaction-time error', 'use a large distance so time is larger relative to reaction time'] }
  ],
  sims: ['scope', 'echo'], gens: ['echo1', 'sound1', 'scope1']
});
