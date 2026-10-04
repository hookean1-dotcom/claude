/* ==========================================================
   TOPIC 8 · ASTROPHYSICS
   ========================================================== */
TOPICS.push({
  id: '8.1', unit: '8', ref: '8.1–8.6', title: 'Motion in the universe', short: 'Galaxies, gravity, orbits, v = 2πr/T',
  summary: 'The universe of galaxies; why gravitational field strength differs on other planets and the Moon; how gravity causes moons, planets, satellites and comets to orbit; the shapes of their orbits; and orbital speed v = 2πr/T.',
  spec: [
    '8.1 use the following units: kilogram (kg), metre (m), metre/second (m/s), metre/second² (m/s²), newton (N), second (s), newton/kilogram (N/kg)',
    '8.2 know that: the universe is a large collection of billions of galaxies; a galaxy is a large collection of billions of stars; our solar system is in the Milky Way galaxy',
    '8.3 understand why gravitational field strength, g, varies and know that it is different on other planets and the Moon from that on the Earth',
    '8.4 explain that gravitational force: causes moons to orbit planets; causes the planets to orbit the Sun; causes artificial satellites to orbit the Earth; causes comets to orbit the Sun',
    '8.5 describe the differences in the orbits of comets, moons and planets',
    '8.6 use the relationship between orbital speed, orbital radius and time period: v = 2πr/T'
  ],
  learn: [
    { h: 'The universe', html: `
<ul><li>The <b>universe</b> is a large collection of <b>billions of galaxies</b>.</li><li>A <b>galaxy</b> is a large collection of <b>billions of stars</b> (plus gas and dust) held together by gravity.</li><li>Our <b>solar system</b> — the Sun, eight planets, their moons, dwarf planets, asteroids and comets — is in the <b>Milky Way</b> galaxy.</li></ul>
<p>Scale: Earth → Solar System → Milky Way (≈ 100 000 light-years across) → Local Group → the observable universe.</p>` },
    { h: 'Gravitational field strength', html: `
<p><b>g</b> is the gravitational force per kilogram (N/kg). It depends on the <b>mass</b> of the planet or moon (more mass → stronger) and on the <b>distance from its centre</b> (further away → weaker). So g differs from place to place:</p>
<div class="tbl"><table><tr><th>Body</th><th>g at surface (N/kg)</th></tr><tr><td>Earth</td><td>10 (9.8)</td></tr><tr><td>Moon</td><td>1.6</td></tr><tr><td>Mars</td><td>3.7</td></tr><tr><td>Jupiter</td><td>25</td></tr></table></div>
<p>Your <b>mass</b> is the same everywhere but your <b>weight</b> (W = mg) changes.</p>` },
    { h: 'Orbits', html: `
[[d:orbit]]
<p>The <b>gravitational force</b> between two bodies provides the force towards the centre needed to keep one moving in an orbit around the other:</p>
<ul><li>moons orbit planets; planets orbit the Sun; artificial satellites orbit the Earth; comets orbit the Sun.</li></ul>
<p>In a circular orbit the speed is constant but the <b>direction</b> keeps changing, so the velocity changes — the body is <b>accelerating towards the centre</b>, pulled by gravity.</p>
<div class="tbl"><table><tr><th>Body</th><th>Orbit</th></tr>
<tr><td><b>Planets</b></td><td>almost circular (slightly elliptical) orbits around the Sun, all in nearly the same plane; closer planets move faster and have shorter years</td></tr>
<tr><td><b>Moons</b></td><td>nearly circular orbits around planets</td></tr>
<tr><td><b>Comets</b></td><td>highly <b>elliptical</b> (elongated) orbits around the Sun, often in a different plane; they speed up greatly near the Sun (stronger gravity) and move slowly far away; a tail forms near the Sun, pointing away from it</td></tr></table></div>` },
    { h: 'Orbital speed', html: `
<div class="box def"><b class="lbl">Given</b><p>$"orbital speed" = @frac{2 × π × "orbital radius"}{"time period"}$ &nbsp; $v = @frac{2πr}{T}$</p></div>
<p>2πr is the circumference of the circular orbit and T is the time for one orbit. Keep units consistent (m and s → m/s).</p>` }
  ],
  eqs: [['v = @frac{2 × π × r}{T}', 'orbital speed (given)']],
  worked: [
    { q: 'The Moon orbits Earth at a radius of 3.8 × 10⁸ m with a period of 27.3 days. Calculate its orbital speed.', s: ['T = 27.3 × 24 × 3600 = 2.36 × 10⁶ s', '$v = @frac{2π × 3.8 × 10^8}{2.36 × 10^6}$', '$v = 1.0 × 10^3 "m/s"$ (about 1 km/s)'], a: '≈ 1000 m/s' },
    { q: 'An astronaut has a mass of 80 kg. Calculate her weight on Earth and on the Moon.', s: ['Earth: W = 80 × 10 = 800 N', 'Moon: W = 80 × 1.6 = 128 N', 'Mass stays 80 kg in both places'], a: '800 N and 128 N' }
  ],
  pitfalls: ['Saying there is no gravity in orbit — gravity provides the centripetal force.', 'Saying an orbiting body at constant speed is not accelerating.', 'Forgetting to convert days/hours into seconds in v = 2πr/T.', 'Saying comets have circular orbits.'],
  cards: [
    ['What is a galaxy?', 'A large collection of billions of stars.'],
    ['What is the universe?', 'A large collection of billions of galaxies.'],
    ['Which galaxy is our solar system in?', 'The Milky Way.'],
    ['Why is g different on the Moon?', 'The Moon has less mass (and a smaller radius), so g is smaller (1.6 N/kg).'],
    ['What keeps planets in orbit?', 'The gravitational force of the Sun.'],
    ['Shape of a comet’s orbit?', 'Highly elliptical.'],
    ['Where does a comet move fastest?', 'Closest to the Sun.'],
    ['Orbital speed equation?', '$v = 2πr ÷ T$']
  ],
  quiz: [
    { q: 'Our solar system is part of', o: ['the Milky Way', 'the Andromeda galaxy', 'a comet', 'the Moon'], x: 'Spec 8.2.' },
    { q: 'A satellite orbits at r = 7.0 × 10⁶ m with T = 6000 s. Its speed is about', o: ['7300 m/s', '1200 m/s', '44 000 m/s', '730 m/s'], x: '2π × 7.0×10⁶ ÷ 6000.' },
    { q: 'A 50 kg mass on the Moon (g = 1.6 N/kg) weighs', o: ['80 N', '50 N', '500 N', '31 N'], x: '50 × 1.6.' },
    { q: 'Which has the most elliptical orbit?', o: ['a comet', 'the Moon', 'the Earth', 'a geostationary satellite'], x: 'Elongated.' },
    { q: 'What provides the force keeping the Moon in orbit?', o: ['gravity between Earth and Moon', 'magnetism', 'friction', 'the Sun’s light'], x: 'Gravitational.' },
    { q: 'A galaxy is', o: ['a collection of billions of stars', 'one star and its planets', 'a collection of billions of universes', 'a type of comet'], x: 'Definition.' }
  ],
  exam: [
    { q: 'The International Space Station (ISS) orbits the Earth in a circular orbit of radius 6.8 × 10⁶ m. It completes one orbit every 92 minutes.', tag: 'calc', parts: [
      { q: 'Name the force that keeps the ISS in orbit.', m: 1, ms: ['gravitational force (of the Earth)'] },
      { q: 'Calculate the orbital speed of the ISS.', m: 3, ms: ['T = 92 × 60 = 5520 s', 'v = 2π × 6.8 × 10⁶ ÷ 5520', '= 7.7 × 10³ m/s'] },
      { q: 'The ISS travels at a constant speed. Explain why it is accelerating.', m: 2, ms: ['its direction is continually changing so velocity changes', 'acceleration towards the centre of the Earth (caused by gravity)'] }
    ] },
    { q: 'Describe the differences between the orbits of comets, moons and planets.', tag: 'ext', m: 5, ms: ['planets orbit the Sun; moons orbit planets; comets orbit the Sun', 'planets and moons have nearly circular orbits', 'comets have highly elliptical orbits', 'comets’ speed changes greatly — fastest near the Sun, slowest far away', 'comet orbits may be at an angle to the plane of the planets / much longer periods'] },
    { q: 'An astronaut with a mass of 75 kg travels from Earth to Mars. Explain what happens to her mass and weight. (g on Mars = 3.7 N/kg, g on Earth = 10 N/kg)', m: 3, ms: ['mass stays 75 kg', 'weight on Earth 750 N; on Mars 75 × 3.7 = 280 N', 'weight is smaller because g on Mars is smaller (less mass)'] }
  ],
  sims: ['satellite'], gens: ['orbit1', 'orbit2', 'wmg1', 'wmg2']
});

TOPICS.push({
  id: '8.2', unit: '8', ref: '8.7–8.10', title: 'Stellar evolution', short: 'Star colour and temperature, life cycles of stars',
  summary: 'Stars are classified by colour, which is related to surface temperature. The life cycle of a Sun-like star (nebula → main sequence → red giant → white dwarf) and of more massive stars (red supergiant → supernova → neutron star or black hole).',
  spec: [
    '8.7 understand how stars can be classified according to their colour',
    '8.8 know that a star’s colour is related to its surface temperature',
    '8.9 describe the evolution of stars of similar mass to the Sun through the following stages: nebula, star (main sequence), red giant, white dwarf',
    '8.10 describe the evolution of stars with a mass larger than the Sun'
  ],
  learn: [
    { h: 'Colour and temperature', html: `
<p>A star’s colour depends on its <b>surface temperature</b>. Hotter stars emit more of their light at shorter wavelengths, so they look <b>blue-white</b>; cooler stars look <b>red</b>.</p>
<div class="tbl"><table><tr><th>Colour</th><th>Surface temperature (approx.)</th><th>Spectral class</th><th>Example</th></tr>
<tr><td>blue</td><td>&gt; 25 000 K</td><td>O</td><td>Zeta Puppis</td></tr><tr><td>blue-white</td><td>10 000–25 000 K</td><td>B</td><td>Rigel</td></tr><tr><td>white</td><td>7500–10 000 K</td><td>A</td><td>Sirius</td></tr><tr><td>yellow-white</td><td>6000–7500 K</td><td>F</td><td>Procyon</td></tr><tr><td>yellow</td><td>5000–6000 K</td><td>G</td><td>the Sun (≈ 5800 K)</td></tr><tr><td>orange</td><td>3500–5000 K</td><td>K</td><td>Arcturus</td></tr><tr><td>red</td><td>&lt; 3500 K</td><td>M</td><td>Betelgeuse</td></tr></table></div>
<p>Astronomers classify stars by colour (spectral class O, B, A, F, G, K, M — “Oh Be A Fine Guy/Girl, Kiss Me”).</p>` },
    { h: 'Stars like the Sun', html: `
[[d:starlife]]
<ol><li><b>Nebula:</b> a cloud of gas (mainly hydrogen) and dust. Gravity pulls it together; it heats up and forms a <b>protostar</b>.</li><li><b>Main sequence star:</b> when the core is hot and dense enough, <b>hydrogen nuclei fuse</b> to form helium. The outward pressure from fusion energy balances the inward pull of gravity — the star is stable for billions of years (the Sun is about halfway through ~10 billion years).</li><li><b>Red giant:</b> when hydrogen in the core runs out, the core contracts and heats, and the outer layers expand and cool (red). Helium fuses into heavier elements such as carbon.</li><li><b>White dwarf:</b> the outer layers drift away (a planetary nebula); the hot, dense core remains as a small white dwarf, which slowly cools and fades.</li></ol>` },
    { h: 'Stars more massive than the Sun', html: `
<p><b>Nebula → main sequence</b> (hotter, bluer, and shorter-lived because fusion is faster) → <b>red supergiant</b> (fusion of heavier elements up to iron) → <b>supernova</b>: the core collapses and the star explodes violently, scattering elements (including those heavier than iron, formed in the explosion) into space → the remaining core becomes a <b>neutron star</b> (extremely dense) or, for the most massive stars, a <b>black hole</b> (gravity so strong that not even light can escape).</p>
<p>The dust and gas from supernovae form new nebulae, stars and planets — the elements in our bodies were made in stars.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why a main sequence star is stable for a long time.', s: ['Gravity pulls the star’s material inwards.', 'Fusion in the core releases energy, creating an outward pressure (thermal/radiation pressure).', 'These forces are balanced, so the star neither collapses nor expands while it fuses hydrogen.'], a: 'Inward gravity balanced by outward pressure from fusion.' }
  ],
  pitfalls: ['Saying red stars are hottest.', 'Saying the Sun will become a supernova or black hole.', 'Missing out the nebula stage or putting red giant before main sequence.'],
  cards: [
    ['What does a star’s colour tell you?', 'Its surface temperature.'],
    ['Hottest star colour?', 'Blue (blue-white).'],
    ['Coolest star colour?', 'Red.'],
    ['Life cycle of a Sun-like star?', 'Nebula → main sequence → red giant → white dwarf.'],
    ['Life cycle of a massive star?', 'Nebula → main sequence → red supergiant → supernova → neutron star or black hole.'],
    ['What happens in a main sequence star?', 'Hydrogen fuses to helium; gravity balanced by outward pressure.'],
    ['What is a supernova?', 'A massive star explodes when its core collapses.'],
    ['What is a black hole?', 'Collapsed core so dense that not even light can escape its gravity.']
  ],
  quiz: [
    { q: 'Which star is hottest?', o: ['a blue star', 'a red star', 'an orange star', 'a yellow star'], x: 'Blue = hot.' },
    { q: 'The Sun will end its life as a', o: ['white dwarf', 'black hole', 'neutron star', 'supernova'], x: 'Sun-like mass.' },
    { q: 'The stage after main sequence for a Sun-like star is', o: ['red giant', 'nebula', 'white dwarf', 'supernova'], x: 'Order.' },
    { q: 'Stars form from', o: ['a nebula of gas and dust', 'a black hole', 'a white dwarf', 'a comet'], x: 'Gravity collapse.' },
    { q: 'A very massive star may end as', o: ['a black hole', 'a red giant forever', 'a comet', 'a planet'], x: 'After supernova.' },
    { q: 'The Sun is a', o: ['yellow main sequence star', 'red giant', 'white dwarf', 'blue supergiant'], x: '≈ 5800 K.' }
  ],
  exam: [
    { q: 'Stars have life cycles that depend on their mass.', tag: 'ext', parts: [
      { q: 'Describe how a star forms and why it becomes stable on the main sequence.', m: 4, ms: ['a nebula / cloud of gas and dust', 'gravity pulls it together; it heats up (protostar)', 'hydrogen nuclei fuse into helium in the core', 'outward pressure from energy released balances gravity'] },
      { q: 'Describe the life cycle of a star with a mass much greater than the Sun after it leaves the main sequence.', m: 4, ms: ['becomes a red supergiant', 'core collapses → supernova explosion', 'leaves a neutron star', 'or a black hole if mass is large enough'] },
      { q: 'Star A is red and star B is blue. State and explain which star has the higher surface temperature.', m: 2, ms: ['B (blue)', 'colour is related to surface temperature; hotter stars emit more short-wavelength (blue) light'] }
    ] }
  ],
  sims: ['starlife'], gens: []
});

TOPICS.push({
  id: '8.3', unit: '8', ref: '8.11–8.12', po: true, title: 'Absolute magnitude and the HR diagram', short: 'Brightness at 10 parsecs, Hertzsprung–Russell diagram',
  summary: 'Absolute magnitude as a star’s brightness at a standard distance, and the main components of the Hertzsprung–Russell diagram: main sequence, giants, supergiants and white dwarfs.',
  spec: [
    '8.11P understand how the brightness of a star at a standard distance can be represented using absolute magnitude',
    '8.12P draw the main components of the Hertzsprung–Russell diagram (HR diagram)'
  ],
  learn: [
    { h: 'Absolute magnitude', html: `
<p>How bright a star <b>looks</b> from Earth (its apparent magnitude) depends on both how much light it gives out and how far away it is. To compare stars fairly, astronomers use <b>absolute magnitude</b>: how bright the star would appear if it were at a <b>standard distance of 10 parsecs</b> (about 32.6 light-years).</p>
<ul><li>The scale runs <b>backwards</b>: the <b>more negative</b> the magnitude, the <b>brighter</b> the star. A difference of 5 magnitudes is a factor of 100 in brightness.</li><li>The Sun’s absolute magnitude is about +4.8; very luminous supergiants reach −8 or brighter; white dwarfs are around +10 to +15.</li></ul>` },
    { h: 'The Hertzsprung–Russell diagram', html: `
[[d:hr]]
<p>The HR diagram plots <b>absolute magnitude</b> (brightness/luminosity) on the <b>y-axis</b> — with bright (negative) at the top — against <b>surface temperature</b> (or colour/spectral class) on the <b>x-axis</b>, with <b>hot on the left</b> and cool on the right (the temperature axis runs backwards).</p>
<ul><li><b>Main sequence:</b> a diagonal band from hot, bright, blue stars (top left) to cool, dim, red stars (bottom right). About 90% of stars, including the Sun, are here — they are fusing hydrogen.</li><li><b>Red giants</b> and <b>supergiants:</b> top right — cool but very bright because they are huge.</li><li><b>White dwarfs:</b> bottom left — hot but dim because they are very small.</li></ul>
<p>A star moves around the diagram as it evolves: a Sun-like star moves from the main sequence up to the red giant region and then down to the white dwarf region.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain how a red giant can be brighter than the Sun even though it is cooler.', s: ['Brightness depends on temperature and surface area.', 'A red giant is cooler, so each square metre emits less light.', 'But it is enormously larger, so its total light output is much greater — placing it top right on the HR diagram.'], a: 'Much larger surface area outweighs the lower temperature.', po: 1 }
  ],
  pitfalls: ['Reading the magnitude scale the wrong way — more negative = brighter.', 'Drawing the temperature axis with hot on the right.', 'Placing white dwarfs top right.'],
  cards: [
    ['What is absolute magnitude?', 'Brightness a star would have at a standard distance of 10 parsecs.', 'po'],
    ['Brighter star: magnitude −2 or +3?', '−2 (more negative = brighter).', 'po'],
    ['Axes of the HR diagram?', 'y: absolute magnitude (bright at top). x: temperature, hot on the left.', 'po'],
    ['Where is the main sequence?', 'Diagonal band from top left (hot, bright) to bottom right (cool, dim).', 'po'],
    ['Where are red giants?', 'Top right — cool but very bright.', 'po'],
    ['Where are white dwarfs?', 'Bottom left — hot but dim.', 'po']
  ],
  quiz: [
    { q: 'Absolute magnitude compares stars as if they were all at', o: ['10 parsecs', '1 light-year', 'the distance of the Sun', 'the edge of the universe'], x: 'Standard distance.', po: 1 },
    { q: 'Which absolute magnitude is brightest?', o: ['−6', '0', '+5', '+12'], x: 'More negative.', po: 1 },
    { q: 'On an HR diagram, the hottest stars are on the', o: ['left', 'right', 'bottom', 'top only'], x: 'Temperature axis reversed.', po: 1 },
    { q: 'White dwarfs are found in the', o: ['bottom left', 'top right', 'top left', 'centre of the main sequence'], x: 'Hot, dim.', po: 1 },
    { q: 'Most stars, including the Sun, are on the', o: ['main sequence', 'giant branch', 'white dwarf region', 'supergiant region'], x: 'Hydrogen fusion.', po: 1 }
  ],
  exam: [
    { q: 'The Hertzsprung–Russell (HR) diagram is used to classify stars.', tag: 'graph', po: 1, parts: [
      { q: 'Draw and label the axes of an HR diagram.', m: 2, ms: ['y-axis: absolute magnitude, bright (negative) at the top', 'x-axis: surface temperature (or colour/class), decreasing to the right'] },
      { q: 'On your diagram show the positions of the main sequence, red giants and white dwarfs, and mark the Sun.', m: 4, ms: ['main sequence: diagonal band top left to bottom right', 'red giants: top right', 'white dwarfs: bottom left', 'Sun on the main sequence roughly in the middle'] },
      { q: 'Explain what is meant by the absolute magnitude of a star.', m: 2, ms: ['how bright the star would appear', 'from a standard distance of 10 parsecs'] }
    ] },
    { q: 'Describe how the position of a star like the Sun on the HR diagram changes during its life.', po: 1, m: 3, ms: ['starts on the main sequence', 'moves up and to the right to become a red giant (brighter, cooler)', 'then moves down and to the left to become a white dwarf (dim, hot), then fades'] }
  ],
  sims: ['hr'], gens: []
});

TOPICS.push({
  id: '8.4', unit: '8', ref: '8.13–8.18', po: true, title: 'Cosmology and the Big Bang', short: 'Red-shift, CMB, Δλ/λ₀ = v/c, expansion',
  summary: 'The past evolution of the universe and the Big Bang theory; the evidence from red-shift and the cosmic microwave background radiation; the Doppler effect for light; Δλ/λ₀ = v/c; and why red-shift shows the universe is expanding.',
  spec: [
    '8.13P describe the past evolution of the universe and the main arguments in favour of the Big Bang theory',
    '8.14P describe evidence that supports the Big Bang theory (red-shift and cosmic microwave background (CMB) radiation)',
    '8.15P describe that if a wave source is moving relative to an observer, there will be a change in the observed frequency and wavelength',
    '8.16P use the equation relating change in wavelength, reference wavelength, velocity of a galaxy and the speed of light: Δλ/λ₀ = (λ − λ₀)/λ₀ = v/c',
    '8.17P describe the red-shift in light received from galaxies at different distances away from the Earth',
    '8.18P explain why the red-shift of galaxies provides evidence for the expansion of the universe'
  ],
  learn: [
    { h: 'Doppler effect for light — red-shift', html: `
[[d:redshift]]
<p>If a wave source moves relative to an observer, the observed frequency and wavelength change (the Doppler effect). For light from a source moving <b>away</b>, the observed wavelength is <b>longer</b> — shifted towards the <b>red</b> end of the spectrum: <b>red-shift</b>. A source moving towards us shows <b>blue-shift</b>.</p>
<p>Astronomers see this in the <b>absorption lines</b> (dark lines) in the spectra of galaxies: the pattern of lines is the same as from elements on Earth, but shifted towards longer wavelengths.</p>
<div class="box def"><b class="lbl">Given</b><p>$@frac{Δλ}{λ_0} = @frac{λ - λ_0}{λ_0} = @frac{v}{c}$</p></div>
<p>λ₀ = reference wavelength (measured in the lab), λ = observed wavelength, v = velocity of the galaxy (away from us), c = speed of light = 3.0 × 10⁸ m/s.</p>` },
    { h: 'Red-shift and the expanding universe', html: `
<ul><li>Light from almost all galaxies is <b>red-shifted</b> — they are all moving <b>away</b> from us.</li><li><b>More distant galaxies show a greater red-shift</b> — they are receding faster. The speed of recession is (approximately) proportional to distance (Hubble’s law).</li></ul>
<p>This is what we would expect if the whole of <b>space is expanding</b>: every galaxy moves away from every other, and the further apart two galaxies are, the faster they separate — like dots on an inflating balloon. Running the expansion backwards suggests the universe started from a single, extremely small, hot, dense point.</p>` },
    { h: 'The Big Bang theory and the CMB', html: `
<p>The <b>Big Bang theory</b> says the universe began about <b>13.8 billion years ago</b> from an extremely hot, dense, small region, and has been <b>expanding and cooling</b> ever since. As it cooled, particles formed, then atoms (mainly hydrogen and helium), then gravity pulled matter together to form stars and galaxies.</p>
<p><b>Evidence:</b></p>
<ol><li><b>Red-shift</b> of galaxies, increasing with distance → the universe is expanding, so it must once have been much smaller.</li><li><b>Cosmic microwave background (CMB) radiation</b>: microwave radiation coming almost uniformly from every direction in space. It is the <b>remains of the high-energy radiation</b> (e.g. gamma/light) released soon after the Big Bang, whose wavelength has been stretched into the microwave region as the universe expanded and cooled (it now corresponds to about 2.7 K). The Big Bang theory predicted it; the rival Steady State theory could not explain it.</li></ol>` }
  ],
  eqs: [['@frac{Δλ}{λ_0} = @frac{v}{c}', 'red-shift (given); c = 3.0 × 10⁸ m/s']],
  worked: [
    { q: 'A hydrogen line has a laboratory wavelength of 656 nm. In a galaxy’s spectrum it is observed at 669 nm. Calculate the galaxy’s speed.', s: ['Δλ = 669 − 656 = 13 nm', '$v = c × @frac{Δλ}{λ_0} = 3.0 × 10^8 × @frac{13}{656}$', '$v = 5.9 × 10^6 "m/s"$ away from us'], a: '5.9 × 10⁶ m/s (receding)', po: 1 },
    { q: 'A galaxy is receding at 1.5 × 10⁷ m/s. At what wavelength will a 500 nm line be observed?', s: ['Δλ/λ₀ = v/c = 1.5 × 10⁷ ÷ 3.0 × 10⁸ = 0.050', 'Δλ = 0.050 × 500 = 25 nm', 'λ = 525 nm'], a: '525 nm', po: 1 }
  ],
  pitfalls: ['Saying red-shift means the galaxy is red or hot.', 'Saying galaxies are moving away from a centre where Earth is.', 'Using λ instead of Δλ on the top of the equation.', 'Describing the CMB without explaining why it is now microwaves (stretched by expansion).'],
  cards: [
    ['What is red-shift?', 'Increase in observed wavelength of light from a source moving away.', 'po'],
    ['Red-shift equation?', '$Δλ/λ_0 = v/c$', 'po'],
    ['How does red-shift vary with galaxy distance?', 'Further galaxies have greater red-shift — receding faster.', 'po'],
    ['What does red-shift of galaxies show?', 'The universe is expanding.', 'po'],
    ['What is the CMB?', 'Microwave radiation from all directions — remains of radiation from soon after the Big Bang, stretched by expansion.', 'po'],
    ['Two pieces of evidence for the Big Bang?', 'Red-shift of galaxies; cosmic microwave background radiation.', 'po'],
    ['Age of the universe?', 'About 13.8 billion years.', 'po']
  ],
  quiz: [
    { q: 'Light from a distant galaxy is red-shifted. This means the galaxy is', o: ['moving away from us', 'moving towards us', 'stationary', 'getting hotter'], x: 'Longer wavelength.', po: 1 },
    { q: 'A line of λ₀ = 400 nm is observed at 404 nm. The galaxy’s speed is', o: ['3.0 × 10⁶ m/s', '3.0 × 10⁸ m/s', '1.0 × 10⁶ m/s', '3.0 × 10⁴ m/s'], x: '0.01 × c.', po: 1 },
    { q: 'More distant galaxies have', o: ['greater red-shift', 'smaller red-shift', 'blue-shift', 'no shift'], x: 'Hubble.', po: 1 },
    { q: 'The CMB is found in which part of the EM spectrum?', o: ['microwave', 'gamma', 'visible', 'ultraviolet'], x: 'Stretched radiation.', po: 1 },
    { q: 'Which is evidence for the Big Bang?', o: ['cosmic microwave background radiation', 'the Sun’s colour', 'comets’ orbits', 'the Moon’s gravity'], x: 'Spec 8.14.', po: 1 },
    { q: 'Red-shift of galaxies supports the idea that', o: ['the universe is expanding', 'the universe is shrinking', 'Earth is at the centre', 'galaxies are cooling'], x: 'Spec 8.18.', po: 1 }
  ],
  exam: [
    { q: 'An astronomer measures the spectrum of light from a distant galaxy. A calcium absorption line with a laboratory wavelength of 393.4 nm is observed at 401.3 nm. Speed of light = 3.0 × 10⁸ m/s.', tag: 'calc', po: 1, parts: [
      { q: 'State the name of this effect.', m: 1, ms: ['red-shift'] },
      { q: 'Calculate the velocity of the galaxy.', m: 3, ms: ['Δλ = 401.3 − 393.4 = 7.9 nm', 'v = c × Δλ/λ₀ = 3.0 × 10⁸ × 7.9 ÷ 393.4', '= 6.0 × 10⁶ m/s'] },
      { q: 'A second galaxy is twice as far away. Predict what the astronomer would observe for the same line, and explain what this shows about the universe.', m: 3, ms: ['a larger red-shift (about twice Δλ, ≈ 409 nm)', 'more distant galaxies move away faster', 'evidence that the universe is expanding'] }
    ] },
    { q: 'Describe the Big Bang theory and explain how the red-shift of galaxies and the cosmic microwave background radiation support it.', tag: 'ext', po: 1, m: 6, ms: ['universe began (≈ 13.8 billion years ago) from a very small, hot, dense region', 'it has been expanding and cooling since', 'light from galaxies is red-shifted — they are moving away', 'greater red-shift for more distant galaxies → space is expanding, so it was once smaller', 'CMB: microwave radiation from all directions', 'left over from the early hot universe, wavelength stretched as universe expanded (predicted by Big Bang)'] }
  ],
  sims: ['redshift'], gens: ['redshift1', 'redshift2']
});
