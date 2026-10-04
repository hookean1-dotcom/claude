/* ==========================================================
   4.8 SPACE PHYSICS (physics only)
   ========================================================== */
TOPICS.push({
  id: '8.1', unit: '8', ref: '4.8.1.1–4.8.1.2', po: true, title: 'The solar system and the life cycle of stars', short: 'Nebula to black hole, making the elements',
  summary: 'What is in our solar system, how the Sun formed from a nebula, why stars are stable, the life cycles of Sun-sized and massive stars, and how fusion and supernovae make the elements.',
  spec: [
    '(PO) Our solar system has one star (the Sun), eight planets and dwarf planets orbiting the Sun, and natural satellites (moons) orbiting planets',
    '(PO) Our solar system is a small part of the Milky Way galaxy',
    '(PO) The Sun formed from a cloud of dust and gas (nebula) pulled together by gravitational attraction',
    '(PO) Explain how, at the start of a star’s life cycle, dust and gas drawn together by gravity causes fusion reactions',
    '(PO) Explain that fusion reactions lead to an equilibrium between gravitational collapse and expansion due to fusion energy',
    '(PO) A star’s life cycle is determined by its size; describe the life cycle of a star the size of the Sun and of a star much more massive than the Sun',
    '(PO) Fusion processes in stars produce all of the naturally occurring elements; elements heavier than iron are produced in a supernova; the explosion distributes the elements throughout the universe',
    '(PO) Explain how fusion processes lead to the formation of new elements'
  ],
  learn: [
    { h: 'Our solar system', html: `
<p>Our <b>solar system</b> contains:</p>
<ul><li>one star — the <b>Sun</b>;</li><li>the <b>eight planets</b> (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune) and <b>dwarf planets</b> such as Pluto, all orbiting the Sun;</li><li><b>natural satellites</b> — moons that orbit planets;</li><li>also asteroids and comets.</li></ul>
<p>The solar system is a small part of the <b>Milky Way</b> galaxy, which contains billions of stars. The universe contains billions of galaxies.</p>` },
    { h: 'How a star forms and stays stable', html: `
<ol><li>A <b>nebula</b> — a cloud of dust and gas (mostly hydrogen) — is pulled together by <b>gravitational attraction</b>.</li><li>As it collapses it gets denser and hotter, forming a <b>protostar</b>.</li><li>When the temperature and pressure are high enough, hydrogen nuclei start to <b>fuse</b> into helium, releasing energy. A star is born.</li></ol>
<div class="box def"><b class="lbl">Main sequence star — a balance</b><p>Fusion releases energy that creates an outward pressure (expansion). Gravity pulls the star inwards (collapse). While these forces are in <b>equilibrium</b>, the star is <b>stable</b> — it is a <b>main sequence star</b>, like the Sun, for billions of years.</p></div>` },
    { h: 'Life cycles of stars', html: `
[[d:starlife]]
<p><b>A star about the size of the Sun:</b> nebula → protostar → main sequence star → <b>red giant</b> (when hydrogen runs out, it swells up and fuses helium into heavier elements) → <b>white dwarf</b> (hot, dense core left when the outer layers drift away) → <b>black dwarf</b> (when it has cooled and no longer emits significant energy).</p>
<p><b>A star much more massive than the Sun:</b> nebula → protostar → main sequence star → <b>red supergiant</b> → <b>supernova</b> (a huge explosion) → either a <b>neutron star</b> or, for the most massive stars, a <b>black hole</b> (so dense that not even light can escape).</p>
<p>The <b>size (mass) of the star determines its life cycle</b>. More massive stars burn their fuel faster and have shorter lives.</p>` },
    { h: 'Making the elements', html: `
<p><b>Fusion processes in stars produce all the naturally occurring elements.</b></p>
<ul><li>Main sequence stars fuse hydrogen into helium.</li><li>Red giants and supergiants fuse helium into heavier elements such as carbon and oxygen, and massive stars continue up to <b>iron</b>.</li><li>Elements <b>heavier than iron</b> (such as gold and uranium) are produced in a <b>supernova</b>.</li><li>The supernova explosion <b>distributes the elements throughout the universe</b>. They form new stars and planets — the atoms in your body were made in stars.</li></ul>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why a main sequence star stays the same size for billions of years.', s: ['Gravity pulls the matter of the star inwards (collapse).', 'Energy released by fusion causes an outward pressure (expansion).', 'These are balanced (in equilibrium), so the star stays stable.'], a: 'Gravity inwards balanced by outward pressure from fusion energy.' }
  ],
  pitfalls: ['Saying the Sun will become a supernova or black hole — it is not massive enough.', 'Saying black holes form from all stars.', 'Saying elements heavier than iron are made in main sequence stars.', 'Confusing a nebula (cloud) with a galaxy.', 'Saying moons orbit the Sun directly.'],
  cards: [
    ['What is in our solar system?', 'The Sun, 8 planets, dwarf planets, moons (plus asteroids and comets).', 'po'],
    ['Which galaxy are we in?', 'The Milky Way.', 'po'],
    ['What is a nebula?', 'A cloud of dust and gas.', 'po'],
    ['What pulls a nebula together?', 'Gravitational attraction.', 'po'],
    ['What starts fusion in a protostar?', 'High temperature and pressure from gravitational collapse.', 'po'],
    ['Why is a main sequence star stable?', 'Outward pressure from fusion balances inward gravity.', 'po'],
    ['Life cycle of a Sun-sized star?', 'Nebula → protostar → main sequence → red giant → white dwarf → black dwarf.', 'po'],
    ['Life cycle of a massive star?', 'Nebula → protostar → main sequence → red supergiant → supernova → neutron star or black hole.', 'po'],
    ['What determines a star’s life cycle?', 'Its size (mass).', 'po'],
    ['Where are elements heavier than iron made?', 'In supernovae.', 'po'],
    ['How are elements spread through the universe?', 'Supernova explosions.', 'po']
  ],
  quiz: [
    { q: 'Our solar system contains how many stars?', o: ['one', 'eight', 'billions', 'none'], x: 'The Sun.', po: 1 },
    { q: 'The Sun formed from', o: ['a nebula pulled together by gravity', 'a supernova of a black hole', 'a comet', 'a collision of planets'], x: 'Cloud of dust and gas.', po: 1 },
    { q: 'A main sequence star is stable because', o: ['gravity is balanced by the outward pressure from fusion', 'it has run out of fuel', 'it is not rotating', 'it is made of iron'], x: 'Equilibrium.', po: 1 },
    { q: 'After the main sequence, a star the size of the Sun becomes a', o: ['red giant', 'red supergiant', 'black hole', 'neutron star'], x: 'Sun-sized path.', po: 1 },
    { q: 'The final stage for a star the size of the Sun is a', o: ['black dwarf', 'black hole', 'neutron star', 'supernova'], x: 'White dwarf cools to a black dwarf.', po: 1 },
    { q: 'A supernova is', o: ['the explosion of a massive star', 'the birth of a star', 'a cloud of gas', 'a type of planet'], x: 'End of a red supergiant.', po: 1 },
    { q: 'Elements heavier than iron are made', o: ['in supernovae', 'in main sequence stars', 'in red giants the size of the Sun', 'in nebulae'], x: 'Spec statement.', po: 1 },
    { q: 'Which object orbits a planet?', o: ['a moon', 'the Sun', 'a dwarf planet', 'a star'], x: 'Natural satellite.', po: 1 },
    { q: 'Our solar system is part of', o: ['the Milky Way galaxy', 'the Andromeda galaxy', 'a nebula', 'a black hole'], x: 'Spec statement.', po: 1 },
    { q: 'What decides whether a star ends as a white dwarf or a black hole?', o: ['its mass', 'its colour', 'its distance from Earth', 'its number of planets'], x: 'Life cycle determined by size.', po: 1 }
  ],
  exam: [
    { q: 'Describe the life cycle of a star much more massive than the Sun, starting from the main sequence.', m: 4, ms: ['Main sequence star → red supergiant.', 'Explodes as a supernova.', 'Leaves a neutron star.', 'Or, if massive enough, a black hole.'], po: 1 },
    { q: 'Explain how elements are formed in stars and distributed through the universe.', m: 4, ms: ['Fusion in stars joins light nuclei to make heavier elements (hydrogen → helium, etc).', 'Elements up to iron are formed by fusion in stars.', 'Elements heavier than iron are formed in supernovae.', 'Supernova explosions distribute the elements throughout the universe.'], po: 1 },
    { q: 'Describe how a star like the Sun forms.', m: 3, ms: ['A nebula (cloud of dust and gas) is pulled together by gravity.', 'It becomes denser and hotter forming a protostar.', 'When hot/dense enough, hydrogen nuclei fuse, releasing energy — a star forms.'], po: 1 }
  ],
  sims: ['starlife'], gens: []
});

TOPICS.push({
  id: '8.2', unit: '8', ref: '4.8.1.3, 4.8.2', po: true, title: 'Orbits, red-shift and the Big Bang', short: 'Satellites, circular orbits, expanding universe',
  summary: 'Gravity keeps planets and satellites in orbit. For Higher, explain why orbital velocity changes while speed stays constant, and why speed and radius are linked. Then use red-shift as evidence for an expanding universe and the Big Bang.',
  spec: [
    '(PO) Gravity provides the force that allows planets and satellites (natural and artificial) to maintain their circular orbits',
    '(PO) Describe the similarities and distinctions between the planets, their moons and artificial satellites',
    '(PO) (HT) Explain qualitatively how, for circular orbits, gravity can lead to changing velocity but unchanged speed',
    '(PO) (HT) Explain qualitatively that for a stable orbit, the radius must change if the speed changes',
    '(PO) There is an observed increase in the wavelength of light from most distant galaxies — red-shift; the further away the galaxies, the faster they are moving and the bigger the increase in wavelength',
    '(PO) Red-shift provides evidence that space itself (the universe) is expanding and supports the Big Bang theory',
    '(PO) The Big Bang theory suggests the universe began from a very small region that was extremely hot and dense',
    '(PO) Since 1998, observations of supernovae suggest distant galaxies are receding ever faster',
    '(PO) Explain red-shift qualitatively; that the change of each galaxy’s speed with distance is evidence of expansion; how red-shift supports the Big Bang; how observations lead to theories; that much is still not understood (dark mass and dark energy)'
  ],
  learn: [
    { h: 'Orbits and satellites', html: `
<p><b>Gravity</b> provides the force that keeps planets and satellites in their (approximately) <b>circular orbits</b>.</p>
<div class="tbl"><table><tr><th></th><th>Planets</th><th>Moons</th><th>Artificial satellites</th></tr>
<tr><td>Orbit</td><td>the Sun</td><td>planets</td><td>usually the Earth (or other bodies)</td></tr>
<tr><td>Natural or artificial?</td><td>natural</td><td>natural</td><td>artificial — put there by humans</td></tr>
<tr><td>Uses</td><td>—</td><td>—</td><td>communications, GPS, weather, observing Earth and space</td></tr></table></div>
<p>All three are kept in orbit by gravity and follow roughly circular paths.</p>` },
    { h: 'Speed, velocity and radius in circular orbits', ht: true, html: `
[[d:orbit]]
<ul><li>The force of gravity acts <b>towards the centre</b> of the orbit, at right angles to the motion.</li><li>This force changes the <b>direction</b> of motion continuously but does not speed the object up or slow it down.</li><li>So the <b>speed is unchanged</b>, but because velocity is a vector, the <b>velocity is constantly changing</b> — the object is accelerating towards the centre.</li></ul>
<p>For a <b>stable orbit</b>, the <b>radius must change if the speed changes</b>. Closer to the planet, gravity is stronger, so a satellite in a <b>smaller orbit must move faster</b> to stay in orbit. If a satellite slows down, gravity pulls it into a smaller orbit (if it is too slow it falls to Earth); if it speeds up it moves to a larger orbit.</p>` },
    { h: 'Red-shift', html: `
[[d:redshift]]
<p>Light from distant galaxies contains dark <b>absorption lines</b> at particular wavelengths. For <b>most distant galaxies</b>, these lines are shifted towards the <b>red end</b> of the spectrum — the <b>wavelength has increased</b>. This is <b>red-shift</b>.</p>
<ul><li>Red-shift shows the galaxy is <b>moving away</b> from us (receding).</li><li>The <b>further away</b> a galaxy is, the <b>greater its red-shift</b> — so the <b>faster it is moving away</b>.</li></ul>` },
    { h: 'The expanding universe and the Big Bang', html: `
<p>If <b>every</b> distant galaxy is moving away from us, and the further ones are moving faster, then <b>space itself is expanding</b> — like dots on a balloon being blown up.</p>
<div class="box def"><b class="lbl">The Big Bang theory</b><p>The universe began from a <b>very small region</b> that was <b>extremely hot and dense</b>, and has been expanding ever since. Red-shift supports this theory: running the expansion backwards brings everything back to one point.</p></div>
<p>Scientists arrive at theories like this by making <b>observations</b> (red-shift measurements), looking for <b>patterns</b> (speed ∝ distance), and proposing a model that <b>explains</b> them and makes testable predictions.</p>
<p>Since <b>1998</b>, observations of distant <b>supernovae</b> suggest that distant galaxies are <b>receding ever faster</b> — the expansion is accelerating.</p>
<p>There is still much that is <b>not understood</b>: <b>dark mass</b> (dark matter) holds galaxies together but does not emit radiation, and <b>dark energy</b> may be causing the accelerating expansion. Nobody yet knows what they are.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Galaxy A is 50 million light-years away; galaxy B is 500 million light-years away. Compare their red-shifts and explain what this shows.', s: ['B is further away, so its red-shift (increase in wavelength) is greater.', 'So B is moving away faster than A.', 'Speed increasing with distance is evidence that the universe is expanding.'], a: 'B has a larger red-shift → moving away faster → the universe is expanding.' }
  ],
  pitfalls: ['Saying red-shift means galaxies are getting hotter or redder in colour — it is a wavelength increase.', 'Saying galaxies are moving through space away from a centre — space itself expands.', 'Saying a satellite in orbit has constant velocity.', 'Saying a closer orbit needs a lower speed.', 'Claiming dark matter and dark energy are fully understood.'],
  cards: [
    ['What keeps planets and satellites in orbit?', 'Gravity.', 'po'],
    ['Difference between moons and artificial satellites?', 'Moons are natural; artificial satellites are made and launched by humans.', 'po'],
    ['(HT) Why does a satellite’s velocity change in a circular orbit?', 'Its direction changes continuously (speed constant).', 'htpo'],
    ['(HT) Smaller orbit — faster or slower?', 'Faster.', 'htpo'],
    ['What is red-shift?', 'An increase in the observed wavelength of light from a receding galaxy.', 'po'],
    ['Link between distance and red-shift?', 'Further galaxies have bigger red-shifts — moving away faster.', 'po'],
    ['What does red-shift show about the universe?', 'Space is expanding.', 'po'],
    ['What is the Big Bang theory?', 'The universe began from a very small, extremely hot and dense region and has expanded since.', 'po'],
    ['What did supernova observations since 1998 suggest?', 'Distant galaxies are receding ever faster (accelerating expansion).', 'po'],
    ['Two things about the universe not understood?', 'Dark mass (dark matter) and dark energy.', 'po']
  ],
  quiz: [
    { q: 'The force that keeps the Moon in orbit around the Earth is', o: ['gravity', 'magnetism', 'friction', 'air resistance'], x: 'Gravitational attraction.', po: 1 },
    { q: 'Which is an artificial satellite?', o: ['a GPS satellite', 'the Moon', 'Jupiter', 'Pluto'], x: 'Made by humans.', po: 1 },
    { q: 'A satellite moves in a circular orbit at constant speed. Its velocity', o: ['changes because its direction changes', 'is constant', 'increases', 'is zero'], x: 'Vector.', po: 1, ht: 1 },
    { q: 'For a stable orbit, a satellite closer to the Earth must', o: ['move faster', 'move slower', 'move at the same speed', 'stop moving'], x: 'Stronger gravity closer in.', po: 1, ht: 1 },
    { q: 'Red-shift is', o: ['an increase in the wavelength of light from receding galaxies', 'a decrease in wavelength', 'the colour of red stars', 'light from the Sun at sunset'], x: 'Spec definition.', po: 1 },
    { q: 'More distant galaxies have', o: ['greater red-shift', 'smaller red-shift', 'no red-shift', 'blue-shift'], x: 'Moving away faster.', po: 1 },
    { q: 'Red-shift provides evidence that', o: ['the universe is expanding', 'the universe is shrinking', 'the Earth is at the centre of the universe', 'galaxies are getting hotter'], x: 'Supports the Big Bang.', po: 1 },
    { q: 'The Big Bang theory says the universe began', o: ['from a very small, extremely hot and dense region', 'as a cold empty space', 'when the Sun formed', 'at the centre of the Milky Way'], x: 'Spec statement.', po: 1 },
    { q: 'Observations of supernovae since 1998 suggest that', o: ['distant galaxies are receding ever faster', 'the universe has stopped expanding', 'galaxies are approaching us', 'red-shift does not exist'], x: 'Accelerating expansion.', po: 1 },
    { q: 'Which is still NOT well understood?', o: ['dark energy', 'red-shift', 'gravity keeping the Moon in orbit', 'fusion in the Sun'], x: 'Dark mass and dark energy.', po: 1 }
  ],
  exam: [
    { q: 'Explain how red-shift provides evidence for the Big Bang theory.', m: 4, ms: ['Light from distant galaxies is red-shifted (wavelength increased).', 'So galaxies are moving away from us.', 'More distant galaxies have greater red-shift / are moving away faster.', 'So the universe is expanding — consistent with it beginning from a small, hot, dense region (Big Bang).'], po: 1 },
    { q: 'Explain why a satellite in a circular orbit is accelerating even though its speed is constant.', m: 3, ms: ['Gravity acts towards the centre of the orbit.', 'The direction of motion is constantly changing.', 'Velocity is a vector, so velocity changes → it is accelerating.'], po: 1, ht: 1 },
    { q: 'Describe the similarities and differences between the Moon and a communications satellite.', m: 3, ms: ['Both orbit the Earth / are kept in orbit by gravity.', 'The Moon is a natural satellite; the communications satellite is artificial.', 'Difference in size/orbit radius/speed (e.g. satellite much smaller and closer).'], po: 1 }
  ],
  sims: ['satellite', 'redshift'], gens: []
});
