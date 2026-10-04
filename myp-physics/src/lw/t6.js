/* ==========================================================
   4.6 WAVES
   ========================================================== */
TOPICS.push({
  id: '6.1', unit: '6', ref: '4.6.1.1–4.6.1.2', title: 'Transverse and longitudinal waves', short: 'Amplitude, wavelength, v = fλ, RP8',
  summary: 'Waves transfer energy without transferring matter. Compare transverse and longitudinal waves, describe them with amplitude, wavelength, frequency and period, and measure wave speed (Required Practical 8).',
  spec: [
    'Waves may be transverse or longitudinal; ripples on water are transverse; longitudinal waves show compressions and rarefactions; sound in air is longitudinal',
    'Describe the difference between longitudinal and transverse waves',
    'Describe evidence that, for ripples on water and sound in air, it is the wave and not the water or air itself that travels',
    'Describe wave motion using amplitude (maximum displacement from the undisturbed position), wavelength (distance from a point on one wave to the equivalent point on the next) and frequency (number of waves passing a point each second)',
    'Period = 1 / frequency: T = 1/f (equation sheet)',
    'Wave speed is the speed at which energy is transferred (or the wave moves) through the medium; v = f λ (recall)',
    'Identify amplitude and wavelength from diagrams; describe methods to measure the speed of sound in air and of ripples on water',
    '(PO) Show how changes in velocity, frequency and wavelength are inter-related when sound passes from one medium to another',
    'Required practical 8: identify suitable apparatus to measure the frequency, wavelength and speed of waves in a ripple tank and waves in a solid'
  ],
  learn: [
    { h: 'Transverse and longitudinal waves', html: `
[[d:wavetypes]]
<div class="tbl"><table><tr><th></th><th>Transverse</th><th>Longitudinal</th></tr>
<tr><td>Oscillations</td><td>at right angles (perpendicular) to the direction of energy transfer</td><td>parallel to the direction of energy transfer</td></tr>
<tr><td>Features</td><td>peaks (crests) and troughs</td><td>compressions and rarefactions</td></tr>
<tr><td>Examples</td><td>ripples on water, light and all EM waves, waves on a string, S-waves</td><td>sound waves, P-waves, pushing a slinky</td></tr></table></div>` },
    { h: 'Waves transfer energy, not matter', html: `
<p>A wave transfers <b>energy</b> (and information) from one place to another <b>without transferring matter</b>.</p>
<ul><li><b>Ripples:</b> a cork or leaf on a pond bobs up and down as ripples pass, but it does not travel along with the wave.</li><li><b>Sound:</b> sound from a speaker reaches you, but the air is not blown towards you — the air particles just vibrate backwards and forwards about fixed positions. (A candle flame in front of a loudspeaker flickers but is not blown away.)</li></ul>` },
    { h: 'Describing waves', html: `
[[d:waveparts]]
<ul><li><b>Amplitude</b> — the maximum displacement of a point on a wave away from its undisturbed position.</li><li><b>Wavelength (λ)</b> — the distance from a point on one wave to the equivalent point on the adjacent wave (e.g. crest to crest).</li><li><b>Frequency (f)</b> — the number of waves passing a point each second, in hertz (Hz).</li><li><b>Period (T)</b> — the time for one complete wave to pass: $T = @frac{1}{f}$ (equation sheet).</li></ul>
<div class="box def"><b class="lbl">Recall this equation</b><p>wave speed = frequency × wavelength &nbsp; $v = fλ$</p><p class="small">v in m/s, f in Hz, λ in m. The wave speed is the speed at which energy is transferred through the medium.</p></div>` },
    { h: 'Measuring wave speeds', html: `
<p><b>Speed of sound in air:</b> two students stand a measured distance apart (e.g. 400 m on a field). One bangs two wooden blocks together (or fires a starting pistol); the other starts a stopwatch on seeing the action and stops it on hearing the sound. Speed = distance ÷ time. Repeat and average. Alternatively use two microphones connected to a data logger to time the sound over a shorter distance. Typical result: ≈ 330 m/s.</p>
<p><b>Speed of ripples on water:</b> see Required Practical 8 below.</p>
<div data-po="1"><div class="box why"><b class="lbl">Sound passing between media (physics only)</b><p>When sound goes from air into water, its <b>frequency stays the same</b> (it is set by the source). Its <b>speed increases</b> (≈ 330 m/s → ≈ 1500 m/s), so from v = fλ its <b>wavelength increases</b> in proportion.</p></div></div>` },
    { h: 'Required practical 8: waves in a ripple tank and a solid', html: `
[[d:ripple]]
<p><b>Ripple tank:</b> set up the tank with a vibrating bar (motor) and a lamp above so shadows of the waves appear on paper or card below.</p>
<ul><li><b>Wavelength:</b> place a metre rule on the paper; measure across as many waves as possible (e.g. 10) and divide by the number of waves. Or photograph the pattern with a ruler in view.</li><li><b>Frequency:</b> count the waves passing a point in 10 s and divide by 10 (or use a stroboscope, or the signal generator setting).</li><li><b>Speed:</b> v = f × λ. Or time one wave travelling a measured distance.</li></ul>
<p><b>Waves on a string (solid):</b> attach a string to a vibration generator, pass it over a pulley and hang masses on the end. Adjust the frequency until a clear standing wave appears. Measure across several half-wavelengths with a metre rule to find λ; read f from the signal generator; v = fλ.</p>
<div class="box warn"><b class="lbl">Why these methods?</b><p>Measuring across many waves reduces the percentage uncertainty. The lamp makes the waves visible. Safety: water and electricity — keep the power supply away from the tank; mop up spills; hanging masses can fall.</p></div>` }
  ],
  eqs: [['v = fλ', 'wave equation (recall)'], ['T = @frac{1}{f}', 'period (equation sheet)']],
  worked: [
    { q: 'A wave has a frequency of 50 Hz and a wavelength of 0.20 m. Calculate its speed.', s: ['$v = fλ$', '$v = 50 × 0.20$', '$v = 10 "m/s"$'], a: '10 m/s' },
    { q: 'A sound wave travels at 330 m/s with a frequency of 660 Hz. Calculate its wavelength and period.', s: ['$λ = @frac{v}{f} = @frac{330}{660} = 0.50 "m"$', '$T = @frac{1}{f} = @frac{1}{660} = 0.0015 "s"$'], a: 'λ = 0.50 m; T = 0.0015 s (1.5 ms)' },
    { q: 'In a ripple tank, 12 waves pass a point in 4.0 s and 10 waves span 18 cm. Calculate the wave speed.', s: ['f = 12 ÷ 4.0 = 3.0 Hz', 'λ = 18 ÷ 10 = 1.8 cm = 0.018 m', '$v = fλ = 3.0 × 0.018 = 0.054 "m/s"$'], a: '0.054 m/s (5.4 cm/s)' }
  ],
  pitfalls: ['Measuring amplitude from trough to crest (that is twice the amplitude).', 'Measuring wavelength from a crest to the next trough (that is half a wavelength).', 'Saying waves carry matter along.', 'Saying sound is transverse.', 'Using wavelength in cm with v in m/s.'],
  cards: [
    ['Transverse wave?', 'Oscillations perpendicular to the direction of energy transfer.'],
    ['Longitudinal wave?', 'Oscillations parallel to the direction of energy transfer.'],
    ['Example of a transverse wave?', 'Ripples on water (also light, EM waves).'],
    ['Example of a longitudinal wave?', 'Sound in air.'],
    ['Features of a longitudinal wave?', 'Compressions and rarefactions.'],
    ['Define amplitude.', 'Maximum displacement of a point on a wave from its undisturbed position.'],
    ['Define wavelength.', 'Distance from a point on one wave to the equivalent point on the adjacent wave.'],
    ['Define frequency.', 'Number of waves passing a point each second (Hz).'],
    ['Wave equation?', '$v = fλ$'],
    ['Period and frequency?', '$T = 1/f$ (equation sheet)'],
    ['Evidence that waves don’t carry water?', 'A floating cork bobs up and down but stays in place.'],
    ['RP8: how do you measure wavelength accurately?', 'Measure across many waves and divide by the number of waves.'],
    ['Sound from air into water: what stays the same?', 'Frequency (speed and wavelength increase).', 'po']
  ],
  quiz: [
    { q: 'In a transverse wave, the oscillations are', o: ['perpendicular to the direction of energy transfer', 'parallel to the direction of energy transfer', 'in all directions', 'absent'], x: 'At right angles.' },
    { q: 'Sound waves in air are', o: ['longitudinal', 'transverse', 'electromagnetic', 'stationary'], x: 'Compressions and rarefactions.' },
    { q: 'The amplitude of a wave is', o: ['the maximum displacement from the undisturbed position', 'the distance between two crests', 'the number of waves per second', 'the height from trough to crest'], x: 'Half of trough-to-crest.' },
    { q: 'A wave has frequency 5.0 Hz and wavelength 2.0 m. Its speed is', o: ['10 m/s', '2.5 m/s', '0.4 m/s', '7.0 m/s'], x: 'v = fλ.' },
    { q: 'The period of a wave of frequency 20 Hz is', o: ['0.05 s', '20 s', '2.0 s', '0.5 s'], x: 'T = 1/f.' },
    { q: 'A leaf on a pond bobs up and down as ripples pass. This shows that', o: ['the wave transfers energy, not water', 'the water moves along with the wave', 'ripples are longitudinal', 'the leaf absorbs the wave'], x: 'Evidence the medium does not travel.' },
    { q: 'A sound of wavelength 1.5 m travels at 330 m/s. Its frequency is', o: ['220 Hz', '495 Hz', '0.0045 Hz', '331.5 Hz'], x: 'f = v/λ.' },
    { q: 'Which is a longitudinal wave feature?', o: ['rarefaction', 'crest', 'trough', 'peak'], x: 'Compressions and rarefactions.' },
    { q: 'In a ripple tank, the frequency can be found by', o: ['counting waves passing a point in a measured time', 'measuring the depth of water', 'measuring across 10 waves', 'measuring the amplitude'], x: 'f = number of waves ÷ time.' },
    { q: 'When sound passes from air into water, the quantity that stays the same is', o: ['frequency', 'speed', 'wavelength', 'all of them'], x: 'Set by the source.', po: 1 },
    { q: 'A student measures across 8 complete waves and gets 48 cm. The wavelength is', o: ['6.0 cm', '384 cm', '0.17 cm', '48 cm'], x: '48 ÷ 8.' },
    { q: 'The wave speed is the speed at which', o: ['energy is transferred through the medium', 'particles of the medium move', 'the source vibrates', 'the amplitude changes'], x: 'Spec definition.' }
  ],
  exam: [
    { q: 'Describe a method to measure the speed of sound in air.', m: 4, ms: ['Measure a large distance (e.g. 100 m+) between two people with a trundle wheel/tape.', 'One makes a loud sound with a visible action (clapping blocks / starting pistol).', 'The other starts a stopwatch on seeing it and stops on hearing it.', 'Speed = distance ÷ time; repeat and take a mean.'] },
    { q: 'Describe how to measure the wavelength, frequency and speed of water waves in a ripple tank.', m: 6, ms: ['Use a lamp above the tank to project the waves onto paper/screen below.', 'Measure the length across a number of waves (e.g. 10) with a ruler and divide to find λ.', 'Count the number of waves passing a point in a measured time (e.g. 10 s).', 'Frequency = waves ÷ time.', 'Speed v = f × λ.', 'Repeat measurements / use a photograph to reduce uncertainty.'] },
    { q: 'Explain the difference between a transverse and a longitudinal wave, giving an example of each.', m: 4, ms: ['Transverse: oscillations perpendicular to the direction of energy transfer.', 'Example: ripples on water / light.', 'Longitudinal: oscillations parallel to the direction of energy transfer.', 'Example: sound.'] },
    { q: 'Sound travels from air (330 m/s) into water (1500 m/s). The frequency is 500 Hz. Calculate the wavelength in each medium.', m: 3, ms: ['Frequency unchanged: 500 Hz', 'In air λ = 330/500 = 0.66 m', 'In water λ = 1500/500 = 3.0 m'], po: 1 }
  ],
  sims: ['wave', 'ripple'], gens: ['vfl1', 'vfl2', 'period1', 'sound1']
});

TOPICS.push({
  id: '6.2', unit: '6', ref: '4.6.1.3–4.6.1.5', po: true, title: 'Reflection, sound and ultrasound', short: 'Reflection, hearing, echo sounding, seismic waves',
  summary: 'What happens to waves at boundaries, Required Practical 9, how the ear turns sound into vibrations (Higher), and how ultrasound, echo sounding and seismic waves reveal hidden structures (Higher).',
  spec: [
    '(PO) Waves can be reflected, absorbed or transmitted at the boundary between two different materials',
    '(PO) Construct ray diagrams to illustrate the reflection of a wave at a surface; describe the effects of reflection, transmission and absorption at material interfaces',
    '(PO) Required practical 9: investigate the reflection of light by different types of surface and the refraction of light by different substances',
    '(PO) (HT) Sound waves can travel through solids causing vibrations; in the ear sound causes the ear drum and other parts to vibrate; this conversion works only over a limited frequency range, which restricts human hearing',
    '(PO) (HT) Describe processes that convert sound waves into vibrations in solids; explain the limited frequency range; human hearing range is 20 Hz to 20 kHz',
    '(PO) (HT) Explain how differences in velocity, absorption and reflection of different waves in solids and liquids are used to detect and explore hidden structures',
    '(PO) (HT) Ultrasound has a frequency above the upper limit of human hearing; it is partially reflected at boundaries; timing the reflections gives the distance — used for medical and industrial imaging',
    '(PO) (HT) Seismic waves: P-waves are longitudinal and travel at different speeds through solids and liquids; S-waves are transverse and cannot travel through liquids; they give evidence for the structure and size of the Earth’s core',
    '(PO) (HT) Echo sounding with high-frequency sound detects objects in deep water and measures depth; seismic waves led to discoveries about parts of the Earth that cannot be observed directly'
  ],
  learn: [
    { h: 'Reflection, transmission and absorption', html: `
<p>When a wave meets the boundary between two different materials it can be:</p>
<ul><li><b>reflected</b> — it bounces back;</li><li><b>transmitted</b> — it passes through (often changing speed and direction — refraction);</li><li><b>absorbed</b> — its energy is transferred to the material, often warming it.</li></ul>
<p>Usually all three happen to some extent. What happens depends on the wavelength and the materials.</p>
[[d:reflection]]
<div class="box def"><b class="lbl">Law of reflection</b><p>angle of incidence = angle of reflection, both measured from the <b>normal</b> (a line at 90° to the surface at the point where the ray hits).</p></div>
<p>To draw a reflection ray diagram: draw the normal as a dashed line, measure the angle of incidence with a protractor, and draw the reflected ray at the same angle on the other side of the normal. Use arrows on rays.</p>` },
    { h: 'Required practical 9: reflection and refraction of light', html: `
[[d:raybox]]
<p><b>Reflection:</b> place a plane mirror on paper and draw round it. Draw a normal. Shine a narrow ray from a ray box at the mirror along a line drawn at a measured angle of incidence. Mark the reflected ray with crosses; measure the angle of reflection. Repeat for other angles and for different surfaces (e.g. a shiny surface gives a sharp reflected ray; a matt surface scatters light).</p>
<p><b>Refraction:</b> place a rectangular glass (or Perspex, or water in a clear box) block on paper and draw round it. Shine a ray into one side at an angle to the normal. Mark the ray entering and leaving; join them to show the path through the block. Measure the angles of incidence and refraction. Repeat with other materials.</p>
<div class="box warn"><b class="lbl">Tips &amp; safety</b><p>Work in a darkened room with a narrow slit for a thin ray. Mark rays with small crosses far apart. The ray box gets hot — don’t touch the lamp.</p></div>` },
    { h: 'Sound waves and hearing', ht: true, html: `
<p>Sound waves can travel through <b>solids</b>, causing them to vibrate. Inside the ear, sound waves make the <b>ear drum</b> vibrate; these vibrations are passed through tiny bones to the inner ear (cochlea), producing the sensation of sound.</p>
<p>The conversion of sound waves into vibrations of solids <b>only works over a limited range of frequencies</b>: the ear drum and small bones cannot vibrate effectively at very high or very low frequencies. This restricts the <b>limits of human hearing</b> to about <b>20 Hz to 20 kHz</b> (20 000 Hz). The upper limit falls with age.</p>` },
    { h: 'Ultrasound and echo sounding', ht: true, html: `
<p><b>Ultrasound</b> is sound with a frequency <b>above 20 kHz</b> — too high for humans to hear.</p>
<p>Ultrasound is <b>partially reflected</b> at the boundary between two different media (e.g. soft tissue and bone, or metal and a crack). The <b>time taken</b> for the reflection (echo) to return to a detector tells us how far away the boundary is:</p>
<p style="text-align:center">distance to boundary = speed × time ÷ 2 &nbsp; (÷ 2 because the pulse goes there and back)</p>
[[d:ultrasound]]
<ul><li><b>Medical imaging:</b> pre-natal scans, imaging organs — non-ionising, so safe for a fetus.</li><li><b>Industrial imaging:</b> detecting cracks or flaws inside metal castings and welds.</li><li><b>Echo sounding</b> (sonar): high-frequency sound pulses detect objects in deep water (shoals of fish, submarines, wrecks) and measure water depth.</li></ul>` },
    { h: 'Seismic waves and the Earth’s core', ht: true, html: `
<p>Earthquakes produce <b>seismic waves</b>:</p>
<div class="tbl"><table><tr><th>P-waves</th><th>S-waves</th></tr><tr><td>longitudinal</td><td>transverse</td></tr><tr><td>travel through solids <b>and</b> liquids, at different speeds</td><td>travel through solids only — <b>cannot travel through liquids</b></td></tr><tr><td>faster — arrive first</td><td>slower</td></tr></table></div>
[[d:seismic]]
<p>Seismometers around the world detect the waves. There is a large <b>S-wave shadow zone</b> on the opposite side of the Earth from an earthquake: S-waves cannot pass through the core, so the <b>outer core must be liquid</b>. P-waves are refracted as their speed changes at the boundaries, creating a smaller P-wave shadow zone — evidence for the size of the core and a solid inner core. Studying seismic waves gave new evidence about parts of the Earth we cannot observe directly.</p>` }
  ],
  eqs: [['"distance" = @frac{"speed × time"}{2}', 'echo: pulse travels there and back (use s = vt)']],
  worked: [
    { po: 1, q: 'A ship sends an ultrasound pulse to the sea bed. The echo returns 0.80 s later. Sound travels at 1500 m/s in seawater. How deep is the sea?', s: ['Total distance travelled = 1500 × 0.80 = 1200 m', 'This is there and back, so depth = 1200 ÷ 2', 'Depth = 600 m'], a: '600 m' },
    { po: 1, q: 'Explain how seismic waves show that the Earth’s outer core is liquid.', s: ['S-waves are transverse and cannot travel through liquids.', 'S-waves are not detected in a large region on the opposite side of the Earth from an earthquake (the shadow zone).', 'So they must be blocked by a liquid layer — the outer core.'], a: 'S-waves cannot pass through the core → it must be (at least partly) liquid.' }
  ],
  pitfalls: ['Forgetting to halve the distance in echo calculations.', 'Measuring angles from the surface instead of the normal.', 'Saying P-waves cannot travel through liquids (it is S-waves).', 'Saying ultrasound is electromagnetic.', 'Saying the hearing range is 20 Hz to 20 000 kHz.'],
  cards: [
    ['Three things that can happen at a boundary?', 'Reflection, transmission, absorption.', 'po'],
    ['Law of reflection?', 'Angle of incidence = angle of reflection (measured from the normal).', 'po'],
    ['What is the normal?', 'A line at 90° to the surface where the ray hits.', 'po'],
    ['Human hearing range?', '20 Hz to 20 kHz.', 'htpo'],
    ['Why is hearing limited to a range?', 'The ear drum and bones only vibrate effectively over a limited frequency range.', 'htpo'],
    ['What is ultrasound?', 'Sound with frequency above 20 kHz.', 'htpo'],
    ['How does ultrasound imaging work?', 'Pulses partially reflect at boundaries; the time for echoes gives distance.', 'htpo'],
    ['Two uses of ultrasound?', 'Pre-natal scanning; detecting flaws in metal.', 'htpo'],
    ['P-waves?', 'Longitudinal; travel through solids and liquids.', 'htpo'],
    ['S-waves?', 'Transverse; cannot travel through liquids.', 'htpo'],
    ['Evidence for a liquid outer core?', 'S-wave shadow zone — S-waves cannot pass through it.', 'htpo'],
    ['What is echo sounding?', 'Using high-frequency sound pulses to find depth or detect objects under water.', 'htpo']
  ],
  quiz: [
    { q: 'When a wave hits a boundary it can be', o: ['reflected, transmitted or absorbed', 'only reflected', 'only absorbed', 'only transmitted'], x: 'All three are possible.', po: 1 },
    { q: 'A ray hits a mirror at 30° to the normal. The angle of reflection is', o: ['30°', '60°', '90°', '120°'], x: 'Law of reflection.', po: 1 },
    { q: 'Angles of incidence and reflection are measured from', o: ['the normal', 'the mirror surface', 'the horizontal', 'the ray box'], x: 'Always from the normal.', po: 1 },
    { q: 'The range of normal human hearing is', o: ['20 Hz to 20 kHz', '2 Hz to 2 kHz', '20 kHz to 20 MHz', '200 Hz to 200 kHz'], x: 'Spec value.', po: 1, ht: 1 },
    { q: 'Ultrasound is', o: ['sound above 20 kHz', 'sound below 20 Hz', 'an electromagnetic wave', 'very loud sound'], x: 'Above the upper limit of hearing.', po: 1, ht: 1 },
    { q: 'An ultrasound echo returns after 0.20 ms from tissue where sound travels at 1500 m/s. The boundary is', o: ['0.15 m deep', '0.30 m deep', '0.075 m deep', '300 m deep'], x: '1500 × 0.0002 ÷ 2.', po: 1, ht: 1 },
    { q: 'S-waves cannot travel through', o: ['liquids', 'solids', 'rock', 'the crust'], x: 'They are transverse.', po: 1, ht: 1 },
    { q: 'P-waves are', o: ['longitudinal', 'transverse', 'electromagnetic', 'only found in liquids'], x: 'Pressure (primary) waves.', po: 1, ht: 1 },
    { q: 'The S-wave shadow zone is evidence that', o: ['the outer core is liquid', 'the crust is liquid', 'the Earth is hollow', 'the mantle is gas'], x: 'S-waves are blocked by liquid.', po: 1, ht: 1 },
    { q: 'Why is ultrasound, not X-rays, used to scan an unborn baby?', o: ['ultrasound is not ionising', 'ultrasound travels faster', 'X-rays cannot pass through the body', 'ultrasound has a lower frequency'], x: 'Safer for the fetus.', po: 1, ht: 1 },
    { q: 'In RP9, a narrow ray is used so that', o: ['the path of the ray can be marked accurately', 'the light is brighter', 'the ray does not refract', 'the block stays cool'], x: 'Precise angles.', po: 1 }
  ],
  exam: [
    { q: 'Explain how ultrasound can be used to find the depth of a flaw inside a metal block.', m: 4, ms: ['An ultrasound pulse is sent into the metal.', 'It is partially reflected at the boundary with the flaw (and at the far side).', 'The time for the echo to return is measured.', 'Depth = speed × time ÷ 2.'], po: 1, ht: 1 },
    { q: 'Describe how seismic waves provide evidence for the structure of the Earth.', m: 4, ms: ['P-waves are longitudinal and travel through solids and liquids; S-waves are transverse and cannot travel through liquids.', 'S-waves are not detected in a large shadow zone opposite the earthquake → the outer core is liquid.', 'P-waves change speed and refract at boundaries → a smaller P-wave shadow zone.', 'The sizes of the shadow zones indicate the size of the core.'], po: 1, ht: 1 },
    { q: 'Describe how you would investigate the reflection of light from a plane mirror.', m: 4, ms: ['Place mirror on paper; draw its position and a normal at 90°.', 'Shine a narrow ray from a ray box at the mirror at a measured angle of incidence.', 'Mark the reflected ray with crosses and draw it in.', 'Measure the angle of reflection with a protractor; repeat for several angles.'], po: 1 },
    { q: 'Explain why humans cannot hear sounds with a frequency of 50 kHz.', m: 2, ms: ['The ear drum / parts of the ear cannot vibrate at such a high frequency.', 'Conversion of sound to vibrations in the ear works only up to about 20 kHz.'], po: 1, ht: 1 }
  ],
  sims: ['echo', 'seismic'], gens: ['echo1', 'echo2']
});

TOPICS.push({
  id: '6.3', unit: '6', ref: '4.6.2.1–4.6.2.4', title: 'Electromagnetic waves', short: 'The EM spectrum, refraction, uses and dangers',
  summary: 'The seven groups of the electromagnetic spectrum, how they are produced and absorbed, refraction (including wave front diagrams for Higher), Required Practical 10 on infrared, and their uses and hazards.',
  spec: [
    'EM waves are transverse waves that transfer energy from the source to an absorber',
    'EM waves form a continuous spectrum; all travel at the same velocity through a vacuum (space) or air',
    'Long to short wavelength (low to high frequency): radio, microwave, infrared, visible (red to violet), ultraviolet, X-rays, gamma rays; our eyes detect only visible light',
    'Give examples that illustrate the transfer of energy by EM waves',
    '(HT) Different substances may absorb, transmit, refract or reflect EM waves in ways that vary with wavelength; refraction is due to the difference in velocity in different substances',
    'Construct ray diagrams to illustrate refraction at a boundary between two media',
    '(HT) Use wave front diagrams to explain refraction in terms of the change of speed',
    'Required practical 10: investigate how the amount of infrared radiation absorbed or radiated by a surface depends on the nature of that surface',
    '(HT) Radio waves can be produced by oscillations in electrical circuits; when absorbed they may create an alternating current of the same frequency',
    'Changes in atoms and nuclei can generate or absorb EM waves over a wide frequency range; gamma rays originate from changes in the nucleus',
    'UV, X-rays and gamma rays can be hazardous; effects depend on the type of radiation and the dose (in sieverts); UV can age skin and increase the risk of skin cancer; X-rays and gamma rays are ionising and can cause gene mutation and cancer',
    'Uses: radio – TV and radio; microwaves – satellite communications, cooking; infrared – heaters, cooking, IR cameras; visible – fibre optics; UV – energy-efficient lamps, sun tanning; X-rays and gamma – medical imaging and treatment',
    '(HT) Give brief explanations why each type of EM wave is suitable for its application'
  ],
  learn: [
    { h: 'The electromagnetic spectrum', html: `
[[d:emspec]]
<p>Electromagnetic waves are <b>transverse</b> waves that transfer <b>energy</b> from a source to an absorber. They form a <b>continuous spectrum</b>, and all EM waves travel at the <b>same speed through a vacuum</b> (space) or air: 3 × 10<sup>8</sup> m/s.</p>
<p>From <b>long wavelength / low frequency</b> to <b>short wavelength / high frequency</b>:</p>
<p style="text-align:center;font-weight:600">radio → microwave → infrared → visible (red → violet) → ultraviolet → X-rays → gamma rays</p>
<p class="small muted">Memory aid: “Rich Men In Vegas Use eXpensive Gadgets”.</p>
<p>Our eyes detect only <b>visible light</b> — a tiny part of the spectrum. Examples of energy transfer: the Sun warms the Earth (infrared); a microwave oven heats food; light is absorbed by solar cells.</p>` },
    { h: 'Refraction', html: `
<p><b>Refraction</b> is the change in direction of a wave when it crosses a boundary between two media at an angle, because its <b>speed changes</b>.</p>
[[d:refraction]]
<ul><li>Entering a medium where it <b>slows down</b> (air → glass): bends <b>towards</b> the normal.</li><li>Entering a medium where it <b>speeds up</b> (glass → air): bends <b>away from</b> the normal.</li><li>Along the normal (angle of incidence 0°): no change in direction, but the speed still changes.</li></ul>
<div data-ht="1"><div class="box why"><b class="lbl">Wave front diagrams (Higher)</b><p>Wave fronts are lines joining the crests. When wave fronts hit a boundary at an angle, the part that enters the slower medium first slows down first, while the rest is still travelling faster. The wave front pivots, so the direction changes. The wave fronts are closer together in the slower medium (shorter wavelength, same frequency).</p></div>
<p><b>(HT)</b> Different substances may <b>absorb, transmit, refract or reflect</b> EM waves in ways that <b>vary with wavelength</b>. E.g. glass transmits visible light but absorbs much UV; the atmosphere transmits radio and visible light but absorbs most X-rays and gamma rays.</p></div>` },
    { h: 'Required practical 10: infrared radiation', html: `
[[d:leslie]]
<p><b>Emission (Leslie cube):</b> a metal cube with four different faces — matt black, shiny black, matt white and shiny silver — is filled with hot water from a kettle. Hold an infrared detector (or thermometer with a blackened bulb) the <b>same distance</b> from each face and record the reading.</p>
<p><b>Result:</b> matt black emits the most infrared; shiny silver the least.</p>
<p><b>Absorption:</b> place two metal plates (one matt black, one shiny silver) at equal distances from a radiant heater, with a drawing pin stuck on the back of each with wax. The pin on the matt black plate falls first — it absorbs infrared faster.</p>
<div class="box warn"><b class="lbl">Control variables &amp; safety</b><p>Same distance from each surface, same starting water temperature, same time to take readings. Take care with boiling water and the hot cube; stand it on a heatproof mat.</p></div>
<p>Good absorbers of infrared are also good emitters: <b>dark, matt</b> surfaces are the best; <b>light, shiny</b> surfaces are the worst (they reflect it).</p>` },
    { h: 'How EM waves are produced and absorbed', html: `
<p>Changes in <b>atoms</b> (electrons changing energy levels) and in the <b>nuclei</b> of atoms can generate or absorb EM waves over a wide range of frequencies. <b>Gamma rays</b> come from changes in the <b>nucleus</b>.</p>
<p class="ht-inline"><b>(HT)</b> <b>Radio waves</b> can be produced by <b>oscillations</b> (alternating currents) in electrical circuits — e.g. in a transmitting aerial. When radio waves are absorbed by a receiving aerial they can create an <b>alternating current with the same frequency</b> as the radio wave — so radio waves can induce oscillations in a circuit.</p>` },
    { h: 'Uses of EM waves', html: `
<div class="tbl"><table><tr><th>Wave</th><th>Uses</th><th class="ht-col">(HT) Why it is suitable</th></tr>
<tr><td>Radio</td><td>television and radio broadcasting</td><td class="ht-col">long wavelengths travel long distances and can diffract round hills and reflect off the ionosphere; not absorbed much by the atmosphere</td></tr>
<tr><td>Microwaves</td><td>satellite communications; cooking</td><td class="ht-col">pass through the atmosphere to satellites; absorbed by water molecules in food, heating it</td></tr>
<tr><td>Infrared</td><td>electric heaters; cooking (grills, toasters); infrared cameras</td><td class="ht-col">absorbed by surfaces, transferring energy to their thermal stores; all warm objects emit IR, so cameras detect it</td></tr>
<tr><td>Visible light</td><td>fibre optic communications</td><td class="ht-col">light is totally internally reflected along glass fibres with little absorption, carrying lots of data</td></tr>
<tr><td>Ultraviolet</td><td>energy-efficient lamps; sun tanning</td><td class="ht-col">UV makes a coating glow (fluorescence), giving light with little wasted energy; UV stimulates melanin in skin</td></tr>
<tr><td>X-rays and gamma</td><td>medical imaging and treatments</td><td class="ht-col">X-rays pass through soft tissue but are absorbed by bone; gamma penetrates and can kill cancer cells or sterilise equipment</td></tr></table></div>` },
    { h: 'Dangers of EM waves', html: `
<p>Ultraviolet, X-rays and gamma rays can have <b>hazardous effects</b> on body tissue. The effect depends on the <b>type of radiation</b> and the <b>size of the dose</b>. <b>Radiation dose</b> (in sieverts) is a measure of the risk of harm from exposure. 1000 mSv = 1 Sv.</p>
<ul><li><b>Ultraviolet</b> can cause skin to <b>age prematurely</b> and increases the risk of <b>skin cancer</b> (and can damage eyes).</li><li><b>X-rays and gamma rays</b> are <b>ionising</b> radiation that can cause <b>mutation of genes</b> and <b>cancer</b>.</li></ul>
<p>Precautions: sun cream and sunglasses; radiographers stand behind lead screens and wear dosimeters; patients have the smallest dose needed.</p>` }
  ],
  eqs: [['v = fλ', 'applies to all EM waves; v = 3 × 10⁸ m/s in a vacuum']],
  worked: [
    { q: 'A radio station broadcasts at 100 MHz. EM waves travel at 3.0 × 10⁸ m/s. Calculate the wavelength.', s: ['f = 100 MHz = 1.0 × 10⁸ Hz', '$λ = @frac{v}{f} = @frac{3.0 × 10^8}{1.0 × 10^8}$', 'λ = 3.0 m'], a: '3.0 m' },
    { q: 'Explain why a matt black car gets hotter in sunshine than a shiny white car.', s: ['Matt black surfaces are good absorbers of infrared radiation.', 'Shiny white surfaces reflect most of the radiation.', 'So the black car absorbs energy at a greater rate and its temperature rises more.'], a: 'Matt black absorbs infrared better; white/shiny reflects it.' }
  ],
  pitfalls: ['Getting the order of the spectrum wrong (learn a mnemonic).', 'Saying EM waves travel at different speeds in a vacuum.', 'Saying microwaves are ionising.', 'Saying refraction happens because the wave changes frequency — the speed changes.', 'Saying shiny surfaces absorb infrared well.'],
  cards: [
    ['EM spectrum from long to short wavelength?', 'Radio, microwave, infrared, visible, ultraviolet, X-rays, gamma.'],
    ['Are EM waves transverse or longitudinal?', 'Transverse.'],
    ['Speed of EM waves in a vacuum?', '3 × 10⁸ m/s — the same for all.'],
    ['Which part of the spectrum can our eyes detect?', 'Visible light only.'],
    ['What is refraction caused by?', 'A change in the speed of the wave.'],
    ['Air → glass: towards or away from the normal?', 'Towards the normal (slows down).'],
    ['Where do gamma rays come from?', 'Changes in the nucleus of an atom.'],
    ['Best emitter and absorber of infrared?', 'Matt black surface.'],
    ['Worst emitter and absorber of infrared?', 'Shiny silver/white surface.'],
    ['Dangers of UV?', 'Premature skin ageing and skin cancer.'],
    ['Dangers of X-rays and gamma rays?', 'Ionising — gene mutation and cancer.'],
    ['Uses of microwaves?', 'Satellite communications and cooking.'],
    ['Use of visible light in communications?', 'Fibre optics.'],
    ['(HT) How are radio waves produced?', 'By oscillations (ac) in electrical circuits.', 'ht']
  ],
  quiz: [
    { q: 'Which EM wave has the longest wavelength?', o: ['radio', 'gamma', 'visible', 'microwave'], x: 'Radio waves: metres to kilometres.' },
    { q: 'Which EM wave has the highest frequency?', o: ['gamma rays', 'X-rays', 'ultraviolet', 'radio'], x: 'Short wavelength, high frequency.' },
    { q: 'In a vacuum, all EM waves have the same', o: ['speed', 'wavelength', 'frequency', 'energy'], x: '3 × 10⁸ m/s.' },
    { q: 'Which EM wave lies between visible light and X-rays?', o: ['ultraviolet', 'infrared', 'microwave', 'gamma'], x: 'Order of the spectrum.' },
    { q: 'Which is used for satellite communications?', o: ['microwaves', 'gamma rays', 'ultraviolet', 'X-rays'], x: 'They pass through the atmosphere.' },
    { q: 'Which EM waves are used in fibre optic communications?', o: ['visible light', 'radio', 'X-rays', 'gamma'], x: 'Spec example.' },
    { q: 'A ray of light passes from air into glass at an angle. It', o: ['bends towards the normal', 'bends away from the normal', 'does not change direction', 'is always reflected'], x: 'It slows down.' },
    { q: 'Which surface is the best emitter of infrared?', o: ['matt black', 'shiny silver', 'matt white', 'shiny white'], x: 'RP10.' },
    { q: 'UV radiation can cause', o: ['skin cancer and premature ageing', 'ionisation of nuclei only', 'heating of food', 'gene mutation by radio frequencies'], x: 'Spec statement.' },
    { q: 'Gamma rays originate from', o: ['changes in the nucleus', 'electrons in energy levels', 'oscillations in circuits', 'hot objects'], x: 'Nuclear changes.' },
    { q: 'Radio waves absorbed by an aerial can', o: ['create an alternating current of the same frequency', 'create a direct current', 'ionise the aerial', 'heat the aerial to glowing'], x: 'Induced oscillations.', ht: 1 },
    { q: 'Refraction happens because', o: ['the speed of the wave changes', 'the frequency of the wave changes', 'the wave is absorbed', 'the amplitude changes'], x: 'Different velocities in different substances.', ht: 1 },
    { q: 'X-rays are used to image bones because they', o: ['pass through soft tissue but are absorbed by bone', 'are absorbed by soft tissue', 'are not ionising', 'are reflected by skin'], x: 'Different absorption.', ht: 1 }
  ],
  exam: [
    { q: 'Describe how a Leslie cube can be used to investigate how the type of surface affects the amount of infrared radiation emitted.', m: 6, ms: ['Fill the cube with hot water (same temperature for each reading).', 'The cube has faces with different surfaces (matt black, shiny silver, etc).', 'Place an infrared detector (or thermometer) at the same distance from each face.', 'Record the reading for each face (after the same time).', 'Compare: the highest reading shows the best emitter.', 'Expected: matt black emits most; shiny silver least.'] },
    { q: 'Draw a ray diagram to show a ray of light passing from air into a glass block at an angle, and explain what happens.', m: 3, ms: ['Normal drawn at the boundary (dashed, at 90°).', 'Refracted ray in glass bends towards the normal.', 'Because light slows down in glass.'] },
    { q: 'Explain, using wave fronts, why a wave changes direction when it enters a medium where it travels more slowly.', m: 3, ms: ['One side of the wave front reaches the boundary first and slows down first.', 'The other side is still moving faster in the first medium.', 'So the wave front turns / changes direction; wave fronts closer together (shorter wavelength) in the slower medium.'], ht: 1 },
    { q: 'Explain why microwaves are used for communicating with satellites.', m: 2, ms: ['Microwaves pass through the atmosphere without being absorbed/reflected much.', 'So they can reach satellites in space (and return).'], ht: 1 }
  ],
  sims: ['emspec', 'refract', 'leslie'], gens: ['em1', 'em2']
});

TOPICS.push({
  id: '6.4', unit: '6', ref: '4.6.2.5–4.6.2.6', po: true, title: 'Lenses and visible light', short: 'Ray diagrams, magnification, colour',
  summary: 'How convex and concave lenses form real and virtual images, magnification, and why objects look coloured — including specular and diffuse reflection and colour filters.',
  spec: [
    '(PO) A lens forms an image by refracting light; in a convex lens parallel rays are brought to a focus at the principal focus; the distance from lens to principal focus is the focal length',
    '(PO) Ray diagrams show image formation by convex and concave lenses; a convex lens can produce a real or virtual image; a concave lens always produces a virtual image',
    '(PO) Construct ray diagrams to illustrate the similarities and differences between convex and concave lenses',
    '(PO) Magnification = image height ÷ object height (equation sheet); a ratio with no units; heights in mm or cm',
    '(PO) Each colour in the visible spectrum has its own narrow band of wavelength and frequency',
    '(PO) Specular reflection: from a smooth surface in a single direction; diffuse reflection: from a rough surface, causing scattering',
    '(PO) Colour filters absorb certain wavelengths (colours) and transmit others',
    '(PO) The colour of an opaque object is determined by which wavelengths are most strongly reflected; others are absorbed; reflecting all equally → white; absorbing all → black',
    '(PO) Objects that transmit light are transparent or translucent',
    '(PO) Explain colour in terms of differential absorption, transmission and reflection; the effect of filters; why an opaque object has a particular colour'
  ],
  learn: [
    { h: 'Convex and concave lenses', html: `
<p>A lens forms an image by <b>refracting</b> light.</p>
[[d:lenses]]
<ul><li>A <b>convex</b> (converging) lens brings parallel rays of light to a focus at the <b>principal focus</b> (F). The distance from the lens to F is the <b>focal length</b>. A fatter (more curved) lens has a shorter focal length.</li><li>A <b>concave</b> (diverging) lens spreads parallel rays out so that they <b>appear to come from</b> a principal focus on the same side as the object.</li></ul>
<p>In ray diagrams, a convex lens is drawn as a vertical line with <b>outward-pointing arrowheads</b> ↕ and a concave lens with <b>inward-pointing arrowheads</b>.</p>` },
    { h: 'Drawing ray diagrams', html: `
<p>Draw two rays from the <b>top of the object</b>:</p>
<ol><li>A ray <b>parallel to the principal axis</b>, which is refracted <b>through F</b> on the far side (convex) — or away as if from F on the near side (concave).</li><li>A ray through the <b>centre of the lens</b>, which goes straight on.</li></ol>
<p>Where the rays meet is the top of the image. If the rays actually meet → <b>real</b> image (can be projected on a screen). If they only <b>appear</b> to meet when traced backwards (dashed lines) → <b>virtual</b> image.</p>
<div class="tbl"><table><tr><th>Lens & object position</th><th>Image</th><th>Use</th></tr>
<tr><td>Convex, object beyond 2F</td><td>real, inverted, diminished</td><td>camera, eye</td></tr>
<tr><td>Convex, object between F and 2F</td><td>real, inverted, magnified</td><td>projector</td></tr>
<tr><td>Convex, object closer than F</td><td>virtual, upright, magnified</td><td>magnifying glass</td></tr>
<tr><td>Concave, any position</td><td>virtual, upright, diminished</td><td>correcting short sight</td></tr></table></div>
<p>A <b>convex</b> lens can produce a <b>real or virtual</b> image; a <b>concave</b> lens <b>always</b> produces a <b>virtual</b> image.</p>` },
    { h: 'Magnification', html: `
<div class="box def"><b class="lbl">Given on the equation sheet</b><p>magnification = image height ÷ object height</p></div>
<p>Magnification is a <b>ratio</b>, so it has <b>no units</b>. Measure both heights in the same unit (mm or cm). Magnification > 1 → image bigger than the object.</p>` },
    { h: 'Visible light and colour', html: `
<p>Each colour has its own <b>narrow band of wavelength and frequency</b>: red ≈ 700 nm (lowest frequency) through orange, yellow, green, blue to violet ≈ 400 nm (highest frequency).</p>
[[d:specular]]
<ul><li><b>Specular reflection</b> — from a <b>smooth</b> surface, in a single direction (a mirror gives a clear image).</li><li><b>Diffuse reflection</b> — from a <b>rough</b> surface; the light is <b>scattered</b> in many directions (paper — no image).</li></ul>
<p><b>Opaque objects:</b> the colour is determined by which wavelengths are <b>most strongly reflected</b>; the other wavelengths are <b>absorbed</b>. A red apple reflects red and absorbs other colours. An object that reflects all wavelengths equally looks <b>white</b>; one that absorbs all wavelengths looks <b>black</b>.</p>
<p><b>Transparent</b> objects (clear glass) transmit light without scattering it; <b>translucent</b> objects (frosted glass) transmit light but scatter it.</p>
<p><b>Colour filters</b> absorb certain wavelengths and transmit others. A red filter transmits red light only. So a green leaf seen through a red filter looks <b>black</b> — no green light gets through, and the leaf reflects no red.</p>` }
  ],
  eqs: [['"magnification" = @frac{"image height"}{"object height"}', 'equation sheet (physics only); no units']],
  worked: [
    { q: 'A magnifying glass produces an image 4.5 cm tall of an insect 1.5 cm long. Calculate the magnification.', s: ['magnification = image height ÷ object height', '= 4.5 ÷ 1.5', '= 3.0 (no units)'], a: '3.0' },
    { q: 'A white shirt with blue stripes is lit by red light only. Describe what it looks like.', s: ['The white parts reflect all colours, so they reflect the red light → appear red.', 'The blue stripes reflect only blue and absorb red → appear black.'], a: 'Red shirt with black stripes.' }
  ],
  pitfalls: ['Giving magnification a unit.', 'Saying a concave lens can form a real image.', 'Saying a red object “absorbs red” — it reflects red.', 'Saying filters add colour — they only remove (absorb) wavelengths.', 'Forgetting to draw virtual rays as dashed lines.'],
  cards: [
    ['How does a lens form an image?', 'By refracting light.', 'po'],
    ['What is the principal focus of a convex lens?', 'The point where parallel rays are brought to a focus.', 'po'],
    ['What is the focal length?', 'Distance from the lens to the principal focus.', 'po'],
    ['Can a concave lens form a real image?', 'No — always virtual.', 'po'],
    ['Real vs virtual image?', 'Real: rays actually meet (can be projected). Virtual: rays only appear to meet.', 'po'],
    ['Image from a magnifying glass?', 'Virtual, upright, magnified (object closer than F).', 'po'],
    ['Magnification equation?', 'image height ÷ object height (no units).', 'po'],
    ['Specular reflection?', 'From a smooth surface, in a single direction.', 'po'],
    ['Diffuse reflection?', 'From a rough surface — light scattered.', 'po'],
    ['Why is a banana yellow?', 'It reflects yellow light (most strongly) and absorbs other colours.', 'po'],
    ['What does a blue filter do?', 'Transmits blue light and absorbs other colours.', 'po'],
    ['Why does a white object look white?', 'It reflects all wavelengths equally.', 'po'],
    ['Transparent vs translucent?', 'Both transmit light; translucent scatters it.', 'po']
  ],
  quiz: [
    { q: 'A convex lens brings parallel rays of light to', o: ['the principal focus', 'the centre of the lens', 'infinity', 'the object'], x: 'Converging lens.', po: 1 },
    { q: 'The image formed by a concave lens is always', o: ['virtual', 'real', 'inverted', 'magnified'], x: 'Diverging lens.', po: 1 },
    { q: 'A magnifying glass produces an image that is', o: ['virtual, upright and magnified', 'real, inverted and magnified', 'real, upright and diminished', 'virtual, inverted and diminished'], x: 'Object inside F.', po: 1 },
    { q: 'An object 2.0 cm tall forms an image 8.0 cm tall. The magnification is', o: ['4.0', '0.25', '16', '6.0 cm'], x: '8.0 ÷ 2.0; no unit.', po: 1 },
    { q: 'A real image', o: ['can be projected onto a screen', 'is always upright', 'is only formed by concave lenses', 'cannot be seen'], x: 'Rays actually meet.', po: 1 },
    { q: 'Reflection from a rough surface that scatters light is called', o: ['diffuse reflection', 'specular reflection', 'refraction', 'total absorption'], x: 'Scattering.', po: 1 },
    { q: 'A red rose looks red because it', o: ['reflects red light and absorbs other colours', 'absorbs red light', 'emits red light', 'transmits all colours'], x: 'Differential reflection.', po: 1 },
    { q: 'A green apple is viewed through a red filter. It appears', o: ['black', 'green', 'red', 'yellow'], x: 'No green passes the filter; no red reflected.', po: 1 },
    { q: 'An object that absorbs all wavelengths of light appears', o: ['black', 'white', 'grey', 'transparent'], x: 'Nothing reflected.', po: 1 },
    { q: 'Frosted glass is', o: ['translucent', 'transparent', 'opaque', 'a colour filter'], x: 'Transmits but scatters light.', po: 1 },
    { q: 'Which colour of visible light has the longest wavelength?', o: ['red', 'violet', 'green', 'blue'], x: '≈ 700 nm.', po: 1 }
  ],
  exam: [
    { q: 'Complete a ray diagram for an object placed between F and 2F of a convex lens, and describe the image.', m: 4, ms: ['Ray parallel to the axis refracted through F on the other side.', 'Ray through the centre of the lens undeviated.', 'Image where rays cross, beyond 2F.', 'Image is real, inverted and magnified.'], po: 1 },
    { q: 'Explain why a blue book looks black when viewed through a red filter.', m: 3, ms: ['The book reflects blue light and absorbs other colours.', 'The red filter only transmits red light / absorbs blue.', 'No light from the book passes through the filter, so it looks black.'], po: 1 },
    { q: 'Compare the images formed by convex and concave lenses.', m: 3, ms: ['Convex can form real or virtual images.', 'Concave always forms virtual (upright, diminished) images.', 'Both refract light; convex converges, concave diverges.'], po: 1 }
  ],
  sims: ['lens', 'colour'], gens: ['mag1', 'mag2']
});

TOPICS.push({
  id: '6.5', unit: '6', ref: '4.6.3', po: true, title: 'Black body radiation', short: 'Infrared emission, radiation balance, Earth’s temperature',
  summary: 'Every object emits and absorbs infrared radiation. A perfect black body absorbs everything. Temperature controls the intensity and wavelength of the emission — and (Higher) the balance of absorption and emission sets the temperature of the Earth.',
  spec: [
    '(PO) All bodies, no matter what temperature, emit and absorb infrared radiation; the hotter the body, the more infrared it radiates in a given time',
    '(PO) A perfect black body absorbs all the radiation incident on it and does not reflect or transmit any; since a good absorber is a good emitter, it would be the best possible emitter',
    '(PO) Explain that all bodies emit radiation, and that the intensity and wavelength distribution of the emission depend on the temperature',
    '(PO) (HT) A body at constant temperature absorbs radiation at the same rate as it emits it; its temperature increases if it absorbs faster than it emits',
    '(PO) (HT) The temperature of the Earth depends on the rates of absorption and emission of radiation and reflection of radiation into space',
    '(PO) (HT) Explain how the temperature of a body is related to the balance between radiation absorbed and emitted, with everyday examples and the Earth; draw/interpret diagrams of how radiation affects the Earth’s surface and atmosphere'
  ],
  learn: [
    { h: 'Emission and absorption of infrared', html: `
<p>All bodies (objects), <b>no matter what temperature</b>, emit and absorb <b>infrared radiation</b>. Even an ice cube emits infrared. The <b>hotter</b> the body, the <b>more infrared radiation it radiates in a given time</b>.</p>
<div class="box def"><b class="lbl">Perfect black body</b><p>An object that <b>absorbs all</b> of the radiation incident on it. It does not reflect or transmit any radiation. Because a good absorber is also a good emitter, a perfect black body would also be the <b>best possible emitter</b>.</p></div>` },
    { h: 'Temperature and the emitted spectrum', html: `
[[d:bbcurves]]
<p>The <b>intensity</b> and the <b>distribution of wavelengths</b> of radiation emitted depend on the <b>temperature</b> of the body:</p>
<ul><li>as the temperature increases, the body emits <b>more radiation at every wavelength</b> (greater total intensity);</li><li>the <b>peak</b> of the emission moves to <b>shorter wavelengths</b>.</li></ul>
<p>That is why a heated metal bar glows dull red, then orange, then yellow-white as it gets hotter, and why hotter stars look blue-white while cooler stars look red.</p>` },
    { h: 'Radiation balance and the Earth’s temperature', ht: true, html: `
<p>A body at <b>constant temperature</b> is absorbing radiation at the <b>same rate</b> as it is emitting radiation. If it absorbs radiation <b>faster</b> than it emits it, its temperature <b>increases</b>; if it emits faster, it cools. It warms (or cools) until the two rates balance again at a new temperature.</p>
<p><b>Everyday example:</b> a cup of hot tea emits more than it absorbs, so it cools until it reaches room temperature — then absorption and emission balance. A car in sunshine absorbs faster than it emits, so it warms until it emits as fast as it absorbs.</p>
[[d:earth]]
<p>The <b>temperature of the Earth</b> depends on:</p>
<ul><li>the rate at which it <b>absorbs</b> radiation from the Sun (mostly visible light and short-wavelength infrared);</li><li>the rate at which it <b>emits</b> radiation (longer-wavelength infrared);</li><li>how much radiation is <b>reflected</b> back into space (by clouds, ice and snow).</li></ul>
<p>Some of the infrared emitted by the Earth’s surface is absorbed by gases in the atmosphere (such as carbon dioxide, methane and water vapour) and re-emitted, some back towards the surface. More of these gases means the Earth must be warmer before its emission to space balances the energy absorbed.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'A hot potato is left on a plate. Explain why its temperature falls, then becomes constant.', s: ['At first the potato is hotter than its surroundings, so it emits infrared faster than it absorbs it — its temperature falls.', 'As it cools it emits less.', 'When it reaches room temperature, the rate of absorption equals the rate of emission, so its temperature stays constant.'], a: 'It cools until absorption and emission rates balance.' }
  ],
  pitfalls: ['Saying cold objects do not emit radiation.', 'Saying a black body only emits black light.', 'Saying that at constant temperature an object emits no radiation — it emits and absorbs at equal rates.', 'Saying hotter objects peak at longer wavelengths.'],
  cards: [
    ['Do all objects emit infrared?', 'Yes — at any temperature.', 'po'],
    ['Effect of temperature on emission?', 'Hotter → more radiation per second, peak at shorter wavelength.', 'po'],
    ['What is a perfect black body?', 'An object that absorbs all radiation falling on it (reflects and transmits none).', 'po'],
    ['Why is a perfect black body the best emitter?', 'A good absorber is also a good emitter.', 'po'],
    ['(HT) Body at constant temperature?', 'Absorbs radiation at the same rate it emits.', 'htpo'],
    ['(HT) When does an object’s temperature rise?', 'When it absorbs radiation faster than it emits it.', 'htpo'],
    ['(HT) Three factors affecting Earth’s temperature?', 'Rate of absorption, rate of emission, reflection into space.', 'htpo'],
    ['Why do hot stars look blue?', 'Peak emission is at shorter wavelengths.', 'po']
  ],
  quiz: [
    { q: 'Which objects emit infrared radiation?', o: ['all objects, at any temperature', 'only hot objects', 'only black objects', 'only the Sun'], x: 'Spec statement.', po: 1 },
    { q: 'A perfect black body', o: ['absorbs all radiation incident on it', 'reflects all radiation', 'emits no radiation', 'transmits all radiation'], x: 'Definition.', po: 1 },
    { q: 'As the temperature of an object increases, the peak of its emitted radiation', o: ['moves to shorter wavelengths', 'moves to longer wavelengths', 'stays at the same wavelength', 'disappears'], x: 'Red → yellow → blue-white.', po: 1 },
    { q: 'A hotter object emits', o: ['more radiation per second', 'less radiation per second', 'no infrared', 'only visible light'], x: 'More intense.', po: 1 },
    { q: 'An object at a constant temperature', o: ['absorbs and emits radiation at the same rate', 'does not emit radiation', 'does not absorb radiation', 'emits faster than it absorbs'], x: 'Radiation balance.', po: 1, ht: 1 },
    { q: 'A car’s temperature rises in the sun because it', o: ['absorbs radiation faster than it emits it', 'emits faster than it absorbs', 'reflects all radiation', 'stops emitting radiation'], x: 'Imbalance.', po: 1, ht: 1 },
    { q: 'Which would reduce the temperature of the Earth?', o: ['more radiation reflected into space by ice and clouds', 'more carbon dioxide in the atmosphere', 'less reflection into space', 'more absorption by the surface'], x: 'Less energy absorbed.', po: 1, ht: 1 },
    { q: 'A good absorber of radiation is', o: ['also a good emitter', 'a poor emitter', 'always shiny', 'always cold'], x: 'So a black body is the best emitter.', po: 1 }
  ],
  exam: [
    { q: 'Explain what is meant by a perfect black body and why it is the best possible emitter.', m: 3, ms: ['It absorbs all the radiation that falls on it.', 'It does not reflect or transmit any radiation.', 'A good absorber is also a good emitter, so it would be the best emitter.'], po: 1 },
    { q: 'Explain how the temperature of the Earth depends on radiation.', m: 4, ms: ['The Earth absorbs radiation from the Sun.', 'It emits infrared radiation into space.', 'Some radiation is reflected into space (clouds, ice).', 'Temperature is constant when rate of absorption = rate of emission; if absorption increases (or emission decreases) the temperature rises.'], po: 1, ht: 1 },
    { q: 'Describe how the radiation emitted by a piece of iron changes as it is heated from room temperature to 1000 °C.', m: 3, ms: ['It emits more radiation / greater intensity at all wavelengths.', 'The peak wavelength becomes shorter.', 'It starts to glow red, then orange/yellow (emits visible light).'], po: 1 }
  ],
  sims: ['blackbody', 'balance'], gens: []
});
