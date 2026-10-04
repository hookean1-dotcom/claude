/* ==========================================================
   YEAR 8 · UNIT 10 · SOUND  (speed of sound in air ≈ 330 m/s)
   ========================================================== */
TOPICS.push({
  id: '10.1', unit: '10', title: 'How sound is made and travels', short: 'Vibrations and longitudinal waves',
  summary: 'Sound is made by vibrating objects. The vibrations pass through a medium — a solid, liquid or gas — as a longitudinal wave of compressions and rarefactions. Sound cannot travel through a vacuum, because there are no particles to pass the vibrations on.',
  spec: [
    'I can explain that sounds are made by vibrating objects',
    'I can describe sound as a longitudinal wave with compressions and rarefactions',
    'I can explain that sound needs a medium and cannot travel through a vacuum (the bell-jar experiment)',
    'I can compare longitudinal and transverse waves',
    '★ I can explain, using particles, why sound travels faster in solids than in gases'
  ],
  learn: [
    { h: 'Vibrations make sound', html: `
<p>Every sound starts with something <b>vibrating</b> (moving quickly backwards and forwards): a guitar string, the skin of a drum, your vocal cords, the cone of a loudspeaker. The vibrating object pushes and pulls on the air particles next to it, and those particles push on the next ones, and so on.</p>
<p>You can see it: put rice on a drum and hit it; touch a ringing tuning fork on water and it splashes; feel your throat as you hum.</p>` },
    { h: 'A longitudinal wave', html: `
[[d:k_wavetypes]]
<p>Sound travels as a <b>longitudinal wave</b>: the particles vibrate <b>backwards and forwards</b> in the <b>same direction</b> that the wave travels. This makes regions where particles are squashed together (<b>compressions</b>) and regions where they are spread out (<b>rarefactions</b>).</p>
<p>The particles themselves do not travel from the source to your ear — they just vibrate about the same place. It is the <b>energy</b> that travels. A slinky spring pushed back and forth shows this well.</p>
<p>In a <b>transverse</b> wave (like water ripples or light), the vibrations are at <b>right angles</b> to the direction the wave travels.</p>` },
    { h: 'Sound needs a medium', html: `
[[d:belljar]]
<p>Sound needs a <b>medium</b> — something with particles: a solid, liquid or gas. Put a ringing electric bell in a <b>bell jar</b> and pump the air out: the sound gets <b>quieter and quieter</b> until you can hardly hear it, even though you can still see the hammer hitting the bell. Let the air back in and the sound returns.</p>
<p>That is why <b>space is silent</b>: a vacuum has no particles to pass on the vibrations. Astronauts talk by radio, which uses electromagnetic waves (these can travel through a vacuum).</p>
<div class="box why"><b class="lbl">★ Faster in solids</b><p>In a solid the particles are <b>close together and strongly bonded</b>, so each one passes the vibration on very quickly. In a gas they are far apart and must travel before they collide. Sound travels at about <b>330 m/s in air</b>, <b>1500 m/s in water</b> and <b>5000 m/s in steel</b>. Put your ear on a railway line (never really!) and you would hear a train long before the sound arrives through the air.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why you can see an explosion on the Moon (through a telescope) but never hear it.', s: ['Light can travel through a vacuum.', 'Sound needs particles (a medium) to travel.', 'Space between the Moon and Earth is a vacuum, so the sound cannot reach us.'], a: 'sound cannot travel through the vacuum of space' },
    { q: 'Describe what happens to the air particles as a sound wave passes.', s: ['They vibrate backwards and forwards along the direction the wave travels.', 'They bunch up (compressions) and spread out (rarefactions).', 'They stay in roughly the same place — only the energy moves on.'], a: 'they vibrate back and forth, forming compressions and rarefactions' }
  ],
  pitfalls: ['Saying the air travels from the speaker to your ear — the particles vibrate; the energy travels.', 'Saying sound travels fastest in gases — it is slowest in gases.', 'Saying sound is a transverse wave.', 'Saying the bell stops ringing in the vacuum — it keeps vibrating; the sound just cannot get out.'],
  cards: [
    ['How are sounds made?', 'By vibrating objects.'],
    ['What type of wave is sound?', 'Longitudinal.'],
    ['What is a compression?', 'A region where the particles are squashed close together.'],
    ['What is a rarefaction?', 'A region where the particles are spread out.'],
    ['Can sound travel through a vacuum?', 'No — there are no particles to pass on the vibrations.'],
    ['What does the bell-jar experiment show?', 'Sound needs a medium: as air is removed, the bell gets quieter.'],
    ['In a longitudinal wave, how do particles vibrate?', 'Parallel to (in the same direction as) the wave travels.'],
    ['In a transverse wave, how do particles vibrate?', 'At right angles to the direction the wave travels.'],
    ['★ Where does sound travel fastest: solid, liquid or gas?', 'Solid (then liquid, slowest in gas).']
  ],
  quiz: [
    { q: 'All sounds are caused by', o: ['vibrations', 'light', 'heat', 'electricity'], x: 'Something vibrating.' },
    { q: 'Sound is a', o: ['longitudinal wave', 'transverse wave', 'electromagnetic wave', 'particle'], x: 'Vibrations parallel to travel.' },
    { q: 'Sound cannot travel through', o: ['a vacuum', 'water', 'steel', 'air'], x: 'No particles.' },
    { q: 'As air is pumped out of a bell jar, the ringing bell sounds', o: ['quieter', 'louder', 'higher', 'the same'], x: 'Fewer particles to carry sound.' },
    { q: 'A region where air particles are squashed together is a', o: ['compression', 'rarefaction', 'vacuum', 'wavelength'], x: 'Squashed.' },
    { q: 'When sound passes through air, the air particles', o: ['vibrate backwards and forwards', 'travel from the source to the ear', 'stay perfectly still', 'move up and down only'], x: 'Energy travels, not the particles.' },
    { q: 'Which is a transverse wave?', o: ['a ripple on water', 'sound in air', 'sound in water', 'a slinky pushed back and forth'], x: 'Vibrations at right angles.' },
    { q: 'Sound travels fastest through', o: ['steel', 'air', 'water', 'a vacuum'], x: 'Particles close and strongly bonded.', ch: 1 }
  ],
  exam: [
    { q: 'A teacher places a ringing electric bell inside a glass jar and pumps the air out.', tag: 'prac', parts: [
      { q: 'Describe what the students hear as the air is removed.', m: 1, ms: ['the sound gets quieter (until it can hardly be heard)'] },
      { q: 'The students can still see the hammer hitting the bell. Explain why they can see it but not hear it.', m: 2, ms: ['light can travel through a vacuum', 'sound needs particles / a medium to travel'] },
      { q: 'Explain what this experiment shows about how sound travels.', m: 2, ms: ['sound needs a medium', 'vibrations are passed on from particle to particle'] }
    ] },
    { q: 'Describe how a loudspeaker produces a sound wave that reaches your ear. Use the words vibrate, compressions and rarefactions.', tag: 'ext', m: 4, ms: ['the speaker cone vibrates backwards and forwards', 'it pushes air particles together (compressions) and pulls them apart (rarefactions)', 'the particles pass the vibrations on to their neighbours — a longitudinal wave', 'the vibrations reach your ear (eardrum vibrates); particles do not travel all the way'] }
  ],
  sims: ['k_wave', 'belljar'], gens: []
});

TOPICS.push({
  id: '10.2', unit: '10', title: 'The speed of sound', short: 'Measuring and using 330 m/s',
  summary: 'Sound travels at about 330 m/s in air — much slower than light. You can measure it by timing how long sound takes to travel a known distance. It explains why you see lightning before you hear thunder.',
  spec: [
    'I can state that sound travels at about 330 m/s in air, and faster in liquids and solids',
    'I can use speed = distance ÷ time for sound',
    'I can describe how to measure the speed of sound outdoors or with two microphones',
    'I can explain why lightning is seen before thunder is heard and use this to estimate distance',
    '★ I can evaluate sources of error in measuring the speed of sound'
  ],
  learn: [
    { h: 'How fast is sound?', html: `
<div class="tbl"><table><tr><th>Medium</th><th>Speed of sound (approx.)</th></tr><tr><td>air</td><td>330 m/s</td></tr><tr><td>water</td><td>1500 m/s</td></tr><tr><td>steel</td><td>5000 m/s</td></tr><tr><td>vacuum</td><td>cannot travel</td></tr></table></div>
<p>Light travels at 300 000 000 m/s — almost a million times faster than sound in air. So when something happens far away, you <b>see</b> it almost instantly but <b>hear</b> it a little later.</p>
<p>Use the speed equation for sound: $"speed" = @frac{"distance"}{"time"}$, $d = v × t$.</p>` },
    { h: 'Lightning and thunder', html: `
[[d:thunder]]
<p>Lightning and thunder happen at the <b>same moment</b>. The flash reaches you almost instantly; the thunder travels at 330 m/s. Count the seconds between the flash and the bang:</p>
<p style="text-align:center">distance = 330 × time &nbsp; (roughly <b>1 km for every 3 seconds</b>)</p>
<p>A 6-second gap → 330 × 6 ≈ 2000 m = 2 km away. If the gap is getting shorter, the storm is coming closer.</p>` },
    { h: 'Measuring the speed of sound', html: `
<p><b>Outdoor method:</b> two groups stand a measured <b>distance</b> apart (e.g. 400 m, measured with a trundle wheel). One person bangs two blocks of wood together (or fires a starting pistol) where others can <b>see</b> it. Timers far away start their stopwatches when they <b>see</b> the bang and stop when they <b>hear</b> it. Speed = distance ÷ mean time.</p>
<p><b>Lab method:</b> two <b>microphones</b> a measured distance apart (e.g. 1.0 m) are connected to a fast timer or data logger. A sharp clap next to the first microphone starts the timer; the sound reaching the second one stops it. Time ≈ 0.003 s → speed = 1.0 ÷ 0.003 = 333 m/s.</p>
<div class="box why"><b class="lbl">★ Errors</b><p>In the outdoor method, <b>reaction time</b> (≈ 0.2 s) is a big fraction of the ≈ 1.2 s travel time. Improve by using a <b>larger distance</b>, <b>many timers</b> and a mean, or electronic timing. Wind can also speed up or slow down the sound — repeat in both directions and average.</p></div>` }
  ],
  eqs: [['v = @frac{d}{t}', 'speed of sound = distance ÷ time'], ['d = 330 × t', 'distance travelled by sound in air']],
  worked: [
    { q: 'A timer 660 m away from a starting pistol sees the smoke and hears the bang 2.0 s later. Calculate the speed of sound.', s: ['$v = @frac{d}{t}$', '$v = @frac{660}{2.0}$', '$v = 330 "m/s"$'], a: '330 m/s' },
    { q: 'You count 9 seconds between a lightning flash and the thunder. How far away was the lightning?', s: ['$d = v × t$', '$d = 330 × 9$', '$d = 2970 "m"$ ≈ 3 km'], a: 'about 3 km' }
  ],
  pitfalls: ['Forgetting that light arrives (almost) instantly — only the sound’s travel time counts.', 'Using 300 000 000 m/s (light) instead of 330 m/s for sound.', 'Dividing time by distance.', 'Saying sound is faster in air than in water.'],
  cards: [
    ['Speed of sound in air?', 'About 330 m/s.'],
    ['Speed of sound in water?', 'About 1500 m/s.'],
    ['Why do we see lightning before we hear thunder?', 'Light travels much faster than sound.'],
    ['How far is a storm with a 3 s flash-to-bang gap?', 'About 1 km (330 × 3 ≈ 1000 m).'],
    ['Equation for the speed of sound?', 'speed = distance ÷ time.'],
    ['Outdoor method: when do you start the stopwatch?', 'When you see the bang (the light arrives almost instantly).'],
    ['What is the main error in the outdoor method?', 'Human reaction time.'],
    ['★ Improvement to the outdoor method?', 'Use a longer distance, many timers, or microphones and a data logger.']
  ],
  quiz: [
    { q: 'Sound travels in air at about', o: ['330 m/s', '3 m/s', '300 000 000 m/s', '33 000 m/s'], x: 'About a third of a kilometre each second.' },
    { q: 'A flash-to-bang gap of 6 s means the storm is about', o: ['2 km away', '6 km away', '20 km away', '0.5 km away'], x: '330 × 6 ≈ 2000 m.' },
    { q: 'We see lightning before hearing thunder because', o: ['light travels faster than sound', 'thunder happens later', 'sound travels faster than light', 'our ears are slow'], x: 'Light is almost instant.' },
    { q: 'Sound takes 3.0 s to travel 990 m. Its speed is', o: ['330 m/s', '2970 m/s', '0.003 m/s', '993 m/s'], x: '990 ÷ 3.0.' },
    { q: 'How far does sound travel in air in 5 s?', o: ['1650 m', '66 m', '335 m', '1500 m'], x: '330 × 5.' },
    { q: 'In the outdoor method, which change makes the result most accurate?', o: ['increase the distance', 'use a shorter distance', 'use one timer', 'shout instead of clapping'], x: 'Reaction time is a smaller fraction.' },
    { q: 'Sound travels faster in water than air because', o: ['the particles are closer together', 'water is wet', 'water is colder', 'water is transparent'], x: 'Vibrations passed on quicker.' },
    { q: 'Two microphones 1.65 m apart detect a clap 0.005 s apart. The speed of sound is', o: ['330 m/s', '8.25 m/s', '0.0083 m/s', '3300 m/s'], x: '1.65 ÷ 0.005.', ch: 1 }
  ],
  exam: [
    { q: 'Two students measure the speed of sound on a playing field. Student A bangs two blocks of wood together. Student B, 500 m away, starts a stopwatch when she sees the blocks hit and stops it when she hears the bang. Her times: 1.6 s, 1.4 s, 1.5 s.', tag: 'prac', parts: [
      { q: 'Calculate the mean time.', m: 1, ms: ['1.5 s'] },
      { q: 'Calculate the speed of sound from these results.', m: 2, ms: ['500 ÷ 1.5', '= 333 m/s (330 m/s)'] },
      { q: 'Explain why she starts the stopwatch when she sees the blocks hit, not when she hears them.', m: 2, ms: ['light travels much faster than sound / reaches her almost instantly', 'so seeing the blocks marks the moment the sound was made'] },
      { q: 'Suggest two ways to improve the experiment.', m: 2, ms: ['use a bigger distance', 'several timers / more repeats and a mean / electronic timing / repeat in the opposite direction to cancel the wind'] }
    ] },
    { q: 'During a storm, Jack counts 12 seconds between a flash of lightning and the thunder.', tag: 'calc', parts: [
      { q: 'Calculate how far away the lightning was. (speed of sound = 330 m/s)', m: 2, ms: ['330 × 12', '= 3960 m (about 4 km)'] },
      { q: 'A few minutes later the gap is 6 seconds. What does this tell Jack about the storm?', m: 1, ms: ['the storm is getting closer (about 2 km away)'] }
    ] }
  ],
  sims: ['soundspeed'], gens: ['snd1', 'snd2']
});

TOPICS.push({
  id: '10.3', unit: '10', title: 'Loudness, pitch and hearing', short: 'Amplitude, frequency and decibels',
  summary: 'A bigger amplitude makes a louder sound; a higher frequency makes a higher-pitched sound. Loudness is measured in decibels (dB) with a sound level meter. Humans hear from about 20 Hz to 20 000 Hz, and loud sounds can damage our hearing.',
  spec: [
    'I can link loudness to amplitude and pitch to frequency',
    'I can describe frequency in hertz (Hz) and the human hearing range (20–20 000 Hz)',
    'I can interpret oscilloscope traces of sounds',
    'I can investigate loudness using a decibel meter (e.g. how it changes with distance)',
    '★ I can explain how the ear works and how loud sounds damage hearing'
  ],
  learn: [
    { h: 'Loudness and pitch', html: `
[[d:k_scope]]
<ul><li><b>Amplitude</b> is the size of the vibration. <b>Bigger amplitude → louder</b> sound (more energy).</li><li><b>Frequency</b> is the number of vibrations per second, measured in <b>hertz (Hz)</b>. <b>Higher frequency → higher pitch</b>.</li></ul>
<p>An <b>oscilloscope</b> connected to a microphone shows a sound as a wavy trace. A <b>taller</b> trace = louder; <b>more waves</b> across the screen (closer together) = higher pitch.</p>
<p>Musical instruments: a shorter, tighter or thinner guitar string vibrates faster → higher note. Hitting a drum harder → bigger amplitude → louder.</p>` },
    { h: 'Hearing range', html: `
<p>Humans can hear from about <b>20 Hz to 20 000 Hz</b> (20 kHz). The upper limit falls as we get older. Sounds above 20 000 Hz are <b>ultrasound</b>; below 20 Hz, <b>infrasound</b>.</p>
<div class="tbl"><table><tr><th>Animal</th><th>Hearing range (approx.)</th></tr><tr><td>human</td><td>20 – 20 000 Hz</td></tr><tr><td>dog</td><td>40 – 45 000 Hz</td></tr><tr><td>bat</td><td>2000 – 110 000 Hz</td></tr><tr><td>elephant</td><td>15 – 12 000 Hz</td></tr></table></div>` },
    { h: 'Measuring loudness: the decibel meter', html: `
[[d:dbscale]]
<p>Loudness is measured in <b>decibels (dB)</b> using a <b>sound level meter</b> (a decibel meter — many phones have an app). Every <b>10 dB</b> increase means the sound is <b>10 times more intense</b>.</p>
<p><b>Investigation:</b> how does loudness change with distance from a speaker? Play a steady tone; measure dB at 0.5 m, 1 m, 2 m, 4 m…; keep the volume, pitch, meter height and direction the same; repeat and average. The reading falls as you move away (as the energy spreads out). Other ideas: which materials block sound best (ear defenders)? How loud is the canteen at lunchtime?</p>
<div class="box why"><b class="lbl">★ The ear and hearing damage</b><p>Sound waves make the <b>eardrum</b> vibrate. Three tiny bones (ossicles) pass the vibrations to the <b>cochlea</b>, where tiny hair cells turn them into electrical signals sent along the auditory nerve to the brain. Very loud sounds (above about <b>85 dB</b> for long periods, or sudden sounds above about 120 dB) can permanently damage these hair cells, causing hearing loss or tinnitus. Ear defenders and earplugs reduce the amplitude reaching the ear.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Two oscilloscope traces are shown with the same settings. Trace A is taller; trace B has more waves across the screen. Compare the sounds.', s: ['Taller trace → bigger amplitude → A is louder.', 'More waves on the screen → higher frequency → B has the higher pitch.'], a: 'A louder; B higher pitch' },
    { q: 'A student measures the loudness of a speaker at different distances. Name the independent, dependent and one control variable.', s: ['Independent: distance from the speaker.', 'Dependent: loudness (dB) on the sound level meter.', 'Control: speaker volume setting / frequency of the sound / same meter / no other noise.'], a: 'IV distance; DV loudness in dB; CV volume setting' }
  ],
  pitfalls: ['Mixing up amplitude (loudness) and frequency (pitch).', 'Saying a high-pitched sound is always loud.', 'Writing hertz as a unit of loudness — loudness is in dB.', 'Saying louder sounds travel faster — all sounds travel at the same speed in air.'],
  cards: [
    ['What decides loudness?', 'Amplitude — bigger amplitude, louder sound.'],
    ['What decides pitch?', 'Frequency — higher frequency, higher pitch.'],
    ['Unit of frequency?', 'Hertz (Hz) — vibrations per second.'],
    ['Unit of loudness?', 'Decibel (dB).'],
    ['Human hearing range?', 'About 20 Hz to 20 000 Hz.'],
    ['What is ultrasound?', 'Sound above 20 000 Hz — too high for humans to hear.'],
    ['On an oscilloscope, what shows a higher pitch?', 'More waves across the screen (closer together).'],
    ['What measures loudness?', 'A sound level (decibel) meter.'],
    ['★ Which part of the ear is damaged by loud sounds?', 'The hair cells in the cochlea.']
  ],
  quiz: [
    { q: 'A louder sound has a bigger', o: ['amplitude', 'frequency', 'speed', 'wavelength only'], x: 'Bigger vibrations.' },
    { q: 'A higher pitch means a higher', o: ['frequency', 'amplitude', 'loudness', 'speed'], x: 'More vibrations per second.' },
    { q: 'Frequency is measured in', o: ['hertz', 'decibels', 'metres', 'newtons'], x: 'Hz.' },
    { q: 'Loudness is measured in', o: ['decibels', 'hertz', 'volts', 'metres per second'], x: 'dB.' },
    { q: 'The human hearing range is about', o: ['20 Hz to 20 000 Hz', '0 Hz to 100 Hz', '1000 Hz to 1 000 000 Hz', '20 dB to 120 dB'], x: 'Falls with age.' },
    { q: 'An oscilloscope trace gets taller but keeps the same spacing. The sound is', o: ['louder, same pitch', 'higher pitch, same loudness', 'quieter', 'lower pitch'], x: 'Amplitude increased.' },
    { q: 'A dog whistle at 30 000 Hz can be heard by dogs but not humans because it is', o: ['above the human hearing range', 'too quiet', 'too slow', 'below 20 Hz'], x: 'Ultrasound.' },
    { q: 'As you walk away from a speaker, the decibel reading', o: ['decreases', 'increases', 'stays the same', 'drops to zero immediately'], x: 'Energy spreads out.' },
    { q: 'Long exposure to sounds above about 85 dB can', o: ['damage hair cells in the cochlea', 'improve hearing', 'change the speed of sound', 'make sounds higher'], x: 'Hearing damage.', ch: 1 }
  ],
  exam: [
    { q: 'A student investigates how the loudness of a buzzer changes with distance. Results: 0.5 m → 82 dB; 1.0 m → 76 dB; 2.0 m → 70 dB; 4.0 m → 64 dB.', tag: 'data', parts: [
      { q: 'Name the instrument used to measure loudness.', m: 1, ms: ['sound level meter / decibel meter'] },
      { q: 'Describe the pattern in the results.', m: 2, ms: ['loudness decreases as distance increases', 'drops by 6 dB each time the distance doubles'] },
      { q: 'Predict the loudness at 8.0 m.', m: 1, ms: ['58 dB'], ch: 1 },
      { q: 'Give two control variables.', m: 2, ms: ['same buzzer / same volume / same pitch', 'same meter height / pointing the same way / quiet room'] }
    ] },
    { q: 'An oscilloscope shows the trace of a note from a flute. Describe how the trace would change if the flute played (a) a louder note of the same pitch, (b) a higher note of the same loudness.', m: 4, ms: ['(a) the waves get taller', '(a) same number of waves / same spacing', '(b) more waves on the screen / waves closer together', '(b) same height'] }
  ],
  sims: ['k_scope', 'decibel'], gens: ['db1']
});

TOPICS.push({
  id: '10.4', unit: '10', title: 'Echoes', short: 'Reflected sound, depth and speed',
  summary: 'An echo is a reflected sound. Because the sound goes there and back, the distance to the reflecting surface = speed × time ÷ 2. Echoes let ships measure the depth of the sea, bats find insects and students measure the speed of sound.',
  spec: [
    'I can explain that an echo is a reflection of sound from a hard surface',
    'I can use distance = speed × time ÷ 2 to find the distance to a reflecting surface',
    'I can use echoes to measure the speed of sound',
    'I can describe uses of echoes: echo sounding (sonar), bats and ultrasound scans',
    '★ I can explain why soft surfaces reduce echoes, and why concert halls use them'
  ],
  learn: [
    { h: 'What is an echo?', html: `
<p>An <b>echo</b> is a sound <b>reflected</b> from a surface. Hard, flat surfaces (cliffs, walls, buildings) reflect sound well. You only hear a separate echo if the reflector is far enough away — at least about 17 m — so the echo arrives at least 0.1 s after the original sound.</p>
<p>Soft, rough surfaces (curtains, carpets, foam, clothes) <b>absorb</b> sound, reducing echoes.</p>` },
    { h: 'Calculating with echoes', html: `
[[d:sonar]]
<p>The sound travels <b>to</b> the surface <b>and back</b>, so it covers <b>twice</b> the distance to the surface.</p>
<div class="box def"><b class="lbl">Learn this</b><p>$"distance to surface" = @frac{"speed" × "time"}{2}$</p></div>
<p><b>Echo sounding (sonar)</b>: a ship sends a pulse of sound down to the sea bed. The echo returns after 0.8 s. Sound in water travels at 1500 m/s. Depth = 1500 × 0.8 ÷ 2 = <b>600 m</b>.</p>` },
    { h: 'Measuring the speed of sound with echoes', html: `
<ol><li>Stand a measured distance (e.g. 50 m) from a large flat wall.</li><li>Clap, and listen for the echo. Clap again in time with the echo, so there is an even rhythm of clap–echo–clap.</li><li>Another student times <b>20 claps</b> (20 intervals). Each interval is the time for sound to travel to the wall and back (100 m).</li><li>Speed = total distance ÷ total time = (20 × 100) ÷ time. E.g. 6.0 s → 2000 ÷ 6.0 = 333 m/s.</li></ol>
<p>Timing many claps reduces the effect of reaction time.</p>
<div class="box why"><b class="lbl">★ Other uses and controlling echoes</b><p><b>Bats</b> and dolphins use <b>echolocation</b>: they send out high-pitched clicks and listen to the echoes to find prey and avoid obstacles. <b>Ultrasound scans</b> use echoes from inside the body to make images of unborn babies. <b>Concert halls and recording studios</b> use soft panels, curtains and shaped walls to control echoes (reverberation) so music sounds clear.</p></div>` }
  ],
  eqs: [['d = @frac{v × t}{2}', 'distance to a reflector (there and back)']],
  worked: [
    { q: 'A student shouts at a cliff and hears the echo 0.6 s later. Sound travels at 330 m/s. How far away is the cliff?', s: ['Distance travelled there and back = 330 × 0.6 = 198 m', 'Distance to cliff = 198 ÷ 2', '= 99 m'], a: '99 m' },
    { q: 'A sonar pulse returns 2.4 s after leaving a ship. Sound in sea water travels at 1500 m/s. How deep is the sea?', s: ['$d = @frac{v × t}{2}$', '$d = @frac{1500 × 2.4}{2}$', '$d = 1800 "m"$'], a: '1800 m' }
  ],
  pitfalls: ['Forgetting to divide by 2.', 'Using 330 m/s for sound in water — use 1500 m/s.', 'Saying echoes are louder than the original — they are usually quieter (energy spreads and some is absorbed).', 'Saying soft surfaces reflect sound best.'],
  cards: [
    ['What is an echo?', 'A reflected sound.'],
    ['Which surfaces reflect sound best?', 'Hard, flat surfaces.'],
    ['Which surfaces absorb sound?', 'Soft, rough surfaces (curtains, carpet, foam).'],
    ['Echo distance equation?', 'distance = speed × time ÷ 2.'],
    ['Why divide by 2?', 'The sound travels there and back.'],
    ['What is echo sounding (sonar)?', 'Using echoes of sound pulses to measure the depth of water.'],
    ['Speed of sound in water?', 'About 1500 m/s.'],
    ['How do bats find insects?', 'Echolocation — high-pitched clicks and their echoes.'],
    ['★ Why time 20 claps in the echo method?', 'To reduce the effect of reaction time.']
  ],
  quiz: [
    { q: 'An echo is', o: ['a reflected sound', 'a louder sound', 'a refracted sound', 'a very high sound'], x: 'Sound bouncing back.' },
    { q: 'An echo from a wall returns after 0.4 s (sound 330 m/s). The wall is', o: ['66 m away', '132 m away', '825 m away', '33 m away'], x: '330 × 0.4 ÷ 2.' },
    { q: 'Why do we divide by 2 in echo calculations?', o: ['the sound goes there and back', 'sound slows down', 'echoes are half as loud', 'to convert units'], x: 'Two journeys.' },
    { q: 'Which surface gives the strongest echo?', o: ['a brick wall', 'a thick curtain', 'a carpet', 'a foam panel'], x: 'Hard and flat.' },
    { q: 'A ship’s sonar echo returns after 1.0 s. Sound in water is 1500 m/s. The depth is', o: ['750 m', '1500 m', '3000 m', '165 m'], x: '1500 × 1.0 ÷ 2.' },
    { q: 'Bats use echoes to', o: ['find food and avoid obstacles', 'keep warm', 'fly faster', 'see colours'], x: 'Echolocation.' },
    { q: 'Recording studios have soft panels on the walls to', o: ['absorb sound and reduce echoes', 'reflect more sound', 'make the room warmer', 'increase the pitch'], x: 'Clear recordings.' },
    { q: 'A student 80 m from a wall times 10 clap–echo intervals as 5.0 s. The speed of sound is', o: ['320 m/s', '160 m/s', '16 m/s', '640 m/s'], x: '10 × 160 m ÷ 5.0 s.', ch: 1 }
  ],
  exam: [
    { q: 'A ship uses echo sounding to measure the depth of the sea. A pulse of sound is sent down and the echo from the sea bed is detected 0.60 s later. Speed of sound in sea water = 1500 m/s.', tag: 'calc', parts: [
      { q: 'Calculate the total distance travelled by the pulse.', m: 2, ms: ['1500 × 0.60', '= 900 m'] },
      { q: 'Calculate the depth of the sea.', m: 1, ms: ['450 m'] },
      { q: 'Later, the echo takes longer to return. What does this tell you about the sea bed?', m: 1, ms: ['the sea is deeper there'] }
    ] },
    { q: 'Describe how a group of students could use echoes from a large wall to measure the speed of sound. Include the measurements they would take and how to calculate the speed.', tag: 'ext', m: 6, ms: ['measure the distance to the wall (e.g. 50 m) with a tape measure / trundle wheel', 'clap and listen for the echo; clap in time with the echoes', 'time a number of claps (e.g. 20) with a stopwatch', 'distance for each interval = 2 × distance to wall', 'speed = total distance ÷ total time', 'timing many intervals / repeating reduces the effect of reaction time'] }
  ],
  sims: ['k_echo'], gens: ['echo1', 'echo2']
});
