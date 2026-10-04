/* ==========================================================
   YEAR 8 · UNIT 11 · LIGHT
   ========================================================== */
TOPICS.push({
  id: '11.1', unit: '11', title: 'Light rays and seeing', short: 'Luminous objects, straight lines, shadows, reflection',
  summary: 'Light travels from a luminous source in straight lines, very fast. We see non-luminous objects because light from a source reflects off them into our eyes. Opaque objects cast shadows. Mirrors reflect light so that the angle of incidence equals the angle of reflection.',
  spec: [
    'I can describe luminous and non-luminous objects and explain how we see each of them',
    'I can explain that light travels in straight lines at 300 000 km/s and can travel through a vacuum',
    'I can describe transparent, translucent and opaque materials and explain how shadows form',
    'I can state the law of reflection and draw ray diagrams for a plane mirror',
    '★ I can explain the difference between specular and diffuse reflection'
  ],
  learn: [
    { h: 'Luminous and non-luminous', html: `
[[d:seeing]]
<p>A <b>luminous</b> object <b>gives out</b> its own light: the Sun, a lamp, a candle flame, a TV screen. A <b>non-luminous</b> object does not — we see it because light from a luminous source <b>reflects off it</b> and <b>into our eyes</b>. The Moon is non-luminous: it reflects sunlight.</p>
<p>Light always travels <b>into</b> your eye — your eyes do not send anything out. Draw rays with <b>arrows pointing towards the eye</b>.</p>` },
    { h: 'How light travels', html: `
<ul><li>Light travels in <b>straight lines</b>, shown as <b>rays</b> (straight lines with arrows).</li><li>It is incredibly fast: <b>300 000 km per second</b> (300 000 000 m/s) — about a million times faster than sound. Light from the Sun takes about 8 minutes to reach us.</li><li>Light is a wave that can travel through a <b>vacuum</b> (space) — it does not need a medium.</li></ul>
<div class="tbl"><table><tr><th>Material</th><th>What it does with light</th><th>Examples</th></tr><tr><td><b>Transparent</b></td><td>lets almost all light through; you can see clearly through it</td><td>clear glass, water, air</td></tr><tr><td><b>Translucent</b></td><td>lets some light through but scatters it; you cannot see clearly</td><td>frosted glass, tracing paper</td></tr><tr><td><b>Opaque</b></td><td>lets no light through; absorbs or reflects it</td><td>wood, metal, you</td></tr></table></div>
<p>An <b>opaque</b> object blocks light, so there is a dark area behind it — a <b>shadow</b>. Shadows have sharp edges because light travels in straight lines.</p>` },
    { h: 'Reflection', html: `
[[d:k_reflection]]
<div class="box def"><b class="lbl">Law of reflection</b><p>The <b>angle of incidence = the angle of reflection</b>. Both angles are measured from the <b>normal</b> — a line at 90° to the mirror where the ray hits it.</p></div>
<p>In a <b>plane (flat) mirror</b> the image is the same size, the same distance <b>behind</b> the mirror as the object is in front, upright, and <b>laterally inverted</b> (left and right swapped) — which is why AMBULANCE is written backwards on the front of ambulances.</p>
<div class="box why"><b class="lbl">★ Specular and diffuse reflection</b><p>A smooth, shiny surface reflects all the rays in the same direction — <b>specular</b> reflection — so you see a clear image. A rough surface (paper, cloth) reflects rays in many directions — <b>diffuse</b> reflection (scattering) — so you see the surface but no image. Each ray still obeys the law of reflection at its tiny bit of surface.</p></div>[[d:k_specular]]` }
  ],
  eqs: [['"angle of incidence" = "angle of reflection"', 'law of reflection (measured from the normal)']],
  worked: [
    { q: 'Explain how you see a book on your desk in a lit room.', s: ['The book is non-luminous: it gives out no light of its own.', 'Light from a luminous source (the lamp or the Sun) hits the book.', 'Some light reflects off the book in straight lines into your eyes.'], a: 'light from a source reflects off the book into your eyes' },
    { q: 'A ray hits a plane mirror at 35° to the normal. What is the angle of reflection? What angle does the reflected ray make with the mirror surface?', s: ['Angle of reflection = angle of incidence = 35° (from the normal).', 'The normal is at 90° to the mirror, so the reflected ray is at 90 − 35 = 55° to the mirror surface.'], a: '35°; 55° to the mirror' }
  ],
  pitfalls: ['Drawing arrows from the eye to the object.', 'Measuring angles from the mirror instead of from the normal.', 'Saying the Moon is luminous.', 'Mixing up translucent and transparent.'],
  cards: [
    ['What is a luminous object?', 'One that gives out its own light.'],
    ['How do we see non-luminous objects?', 'Light from a source reflects off them into our eyes.'],
    ['How does light travel?', 'In straight lines, very fast (300 000 km/s); it can cross a vacuum.'],
    ['What is a transparent material?', 'One that lets light through so you can see clearly through it.'],
    ['What is a translucent material?', 'One that lets some light through but scatters it.'],
    ['What is an opaque material?', 'One that lets no light through.'],
    ['How is a shadow formed?', 'An opaque object blocks light travelling in straight lines.'],
    ['Law of reflection?', 'Angle of incidence = angle of reflection (measured from the normal).'],
    ['What is the normal?', 'A line at 90° to the surface where the ray hits it.'],
    ['★ Specular vs diffuse reflection?', 'Specular: smooth surface, one direction, clear image. Diffuse: rough surface, scattered.']
  ],
  quiz: [
    { q: 'Which is luminous?', o: ['a candle flame', 'the Moon', 'a mirror', 'a book'], x: 'It gives out its own light.' },
    { q: 'We see the Moon because', o: ['it reflects sunlight into our eyes', 'it gives out light', 'our eyes send out light', 'it is hot'], x: 'The Moon is non-luminous.' },
    { q: 'Light travels at about', o: ['300 000 km/s', '330 m/s', '300 km/h', '3 m/s'], x: '300 000 000 m/s.' },
    { q: 'Frosted glass is', o: ['translucent', 'transparent', 'opaque', 'luminous'], x: 'Lets light through but scatters it.' },
    { q: 'Shadows form because light', o: ['travels in straight lines', 'bends around objects', 'is slow', 'is reflected by all objects'], x: 'It cannot go around an opaque object.' },
    { q: 'A ray hits a mirror with an angle of incidence of 40°. The angle of reflection is', o: ['40°', '50°', '80°', '90°'], x: 'They are equal.' },
    { q: 'Angles of incidence and reflection are measured from', o: ['the normal', 'the mirror', 'the floor', 'the eye'], x: 'The normal is at 90° to the mirror.' },
    { q: 'In a ray diagram of you seeing a lamp, the arrow should point', o: ['from the lamp to your eye', 'from your eye to the lamp', 'both ways', 'no arrows are needed'], x: 'Light enters the eye.' },
    { q: 'You can see yourself in a still pond but not in a rough sea because the rough water gives', o: ['diffuse reflection', 'specular reflection', 'no reflection', 'refraction only'], x: 'Scattered in all directions.', ch: 1 }
  ],
  exam: [
    { q: 'A student sits reading a book in a room lit by a lamp.', tag: '', parts: [
      { q: 'Which of these is luminous: the lamp, the book, the student?', m: 1, ms: ['the lamp'] },
      { q: 'Draw a ray diagram to show how the student sees the book.', m: 2, ms: ['straight ray from lamp to book', 'straight ray from book to eye; arrows showing direction lamp → book → eye'] },
      { q: 'The student holds her hand between the lamp and the book. Explain why a shadow forms.', m: 2, ms: ['her hand is opaque / blocks the light', 'light travels in straight lines so cannot reach the area behind her hand'] }
    ] },
    { q: 'A ray of light hits a plane mirror. The angle between the incident ray and the mirror is 60°.', tag: 'calc', parts: [
      { q: 'Calculate the angle of incidence.', m: 1, ms: ['30°'] },
      { q: 'State the angle of reflection and the law you used.', m: 2, ms: ['30°', 'angle of incidence = angle of reflection'] }
    ] }
  ],
  sims: ['seeing', 'k_refract'], gens: ['light1']
});

TOPICS.push({
  id: '11.2', unit: '11', title: 'Refraction and lenses', short: 'Bending light; converging and diverging lenses',
  summary: 'Light changes speed when it crosses from one material into another, and this can make it bend — refraction. Lenses use refraction: a convex (converging) lens brings light together at a focus; a concave (diverging) lens spreads it out.',
  spec: [
    'I can describe refraction as the change of direction of light when it passes between materials of different density',
    'I can predict whether light bends towards or away from the normal',
    'I can explain everyday effects of refraction (a pool looking shallower, a bent straw)',
    'I can describe how convex and concave lenses change rays of light, including the focal point',
    '★ I can explain refraction using the change in speed of light'
  ],
  learn: [
    { h: 'Refraction', html: `
[[d:refractblock]]
<p><b>Refraction</b> is the bending of light as it passes from one material to another, e.g. from air into glass or water.</p>
<ul><li>Air → glass (into a denser material): light <b>slows down</b> and bends <b>towards the normal</b>.</li><li>Glass → air (into a less dense material): light <b>speeds up</b> and bends <b>away from the normal</b>.</li><li>A ray travelling <b>along the normal</b> (at 90° to the surface) does not bend — it just changes speed.</li></ul>
<p><b>Effects:</b> a swimming pool looks <b>shallower</b> than it really is; a straw in a glass of water looks <b>bent</b>; a coin at the bottom of an empty cup appears when water is poured in.</p>` },
    { h: 'Lenses', html: `
[[d:k_lenses]]
<ul><li>A <b>convex</b> (<b>converging</b>) lens is thicker in the middle. It bends parallel rays <b>inwards</b> so that they meet at the <b>focal point</b> (principal focus). The distance from the lens to the focal point is the <b>focal length</b>. Fatter lenses have shorter focal lengths.</li><li>A <b>concave</b> (<b>diverging</b>) lens is thinner in the middle. It spreads parallel rays <b>outwards</b>, as if they came from a focal point behind the lens.</li></ul>
<p>A convex lens can focus sunlight to a tiny hot spot, form an image on a screen (projectors, cameras, the eye), or act as a magnifying glass when the object is close to it. Concave lenses correct short sight.</p>` },
    { h: '★ Why does light bend?', html: `
<p>Light travels more slowly in glass (about 200 000 km/s) than in air. Imagine a line of soldiers marching at an angle from a road onto mud: the ones who reach the mud first slow down first, so the whole line swings round. In the same way, the side of a light wave that enters the glass first slows first, so the wave changes direction — towards the normal.</p>
<p>Measure the focal length of a convex lens: point it at a distant window, move a screen until the image is sharp, and measure from the lens to the screen.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'A ray of light passes from air into a glass block at an angle. Describe what happens and explain why.', s: ['The ray bends towards the normal as it enters the glass.', 'This is because light slows down when it enters the denser glass.'], a: 'bends towards the normal (it slows down)' },
    { q: 'How could you tell a convex lens from a concave lens without touching it?', s: ['Hold each lens over small print.', 'A convex lens makes the print look bigger (magnifies it); it is thicker in the middle.', 'A concave lens makes it look smaller; it is thinner in the middle.'], a: 'convex magnifies close print; concave shrinks it' }
  ],
  pitfalls: ['Saying light bends away from the normal going into glass.', 'Mixing up convex (converging) and concave (diverging).', 'Measuring the angle from the surface instead of the normal.', 'Saying a ray along the normal bends.'],
  cards: [
    ['What is refraction?', 'The change in direction of light when it passes from one material into another.'],
    ['Air into glass: which way does light bend?', 'Towards the normal.'],
    ['Glass into air: which way does light bend?', 'Away from the normal.'],
    ['Why does a pool look shallower than it is?', 'Light from the bottom refracts away from the normal as it leaves the water.'],
    ['What does a convex lens do?', 'Converges (brings together) light to a focal point.'],
    ['What does a concave lens do?', 'Diverges (spreads out) light.'],
    ['What is the focal length?', 'The distance from the centre of the lens to the focal point.'],
    ['Shape of a convex lens?', 'Thicker in the middle.'],
    ['★ Why does light refract?', 'It changes speed when it enters a different material.']
  ],
  quiz: [
    { q: 'Refraction is', o: ['the bending of light as it enters a new material', 'the bouncing of light off a mirror', 'the splitting of light', 'light being absorbed'], x: 'Change of direction at a boundary.' },
    { q: 'Light entering glass from air bends', o: ['towards the normal', 'away from the normal', 'back the way it came', 'not at all'], x: 'It slows down.' },
    { q: 'A ray hitting a glass block along the normal', o: ['does not change direction', 'bends towards the normal', 'bends away', 'is reflected'], x: 'Straight through.' },
    { q: 'A convex lens', o: ['brings parallel rays together at a focus', 'spreads rays out', 'reflects rays', 'absorbs all light'], x: 'Converging.' },
    { q: 'A concave lens is', o: ['thinner in the middle', 'thicker in the middle', 'flat', 'a mirror'], x: 'Diverging lens.' },
    { q: 'A straw in water looks bent because of', o: ['refraction', 'reflection', 'dispersion', 'diffuse scattering'], x: 'Light bends as it leaves the water.' },
    { q: 'The point where a convex lens brings parallel rays together is the', o: ['focal point', 'normal', 'pivot', 'pupil'], x: 'Principal focus.' },
    { q: 'Light bends towards the normal entering glass because it', o: ['slows down', 'speeds up', 'gets brighter', 'changes colour'], x: 'Slower in glass.', ch: 1 }
  ],
  exam: [
    { q: 'A student shines a ray of light into a rectangular glass block.', tag: 'prac', parts: [
      { q: 'Describe how the ray changes direction as it enters the block at an angle.', m: 1, ms: ['bends towards the normal'] },
      { q: 'Describe how it changes direction as it leaves the block.', m: 1, ms: ['bends away from the normal'] },
      { q: 'Explain why the ray bends.', m: 2, ms: ['light changes speed', 'slows down in glass (speeds up leaving)'] },
      { q: 'Describe what happens if the ray enters along the normal.', m: 1, ms: ['it goes straight through / does not bend'] }
    ] },
    { q: 'Describe how to measure the focal length of a convex lens.', tag: 'prac', m: 3, ms: ['point the lens at a distant object (e.g. a window)', 'move a screen until a sharp image forms', 'measure the distance from the lens to the screen = focal length'] }
  ],
  sims: ['k_refract', 'k_lens'], gens: []
});

TOPICS.push({
  id: '11.3', unit: '11', title: 'The eye', short: 'Structure; making a jelly lens',
  summary: 'The eye is a living camera. Light enters through the cornea and pupil, the lens focuses it onto the retina, and the optic nerve carries signals to the brain. Changing the lens’s shape lets us focus on near and far objects — which a jelly lens can model.',
  spec: [
    'I can label the parts of the eye: cornea, iris, pupil, lens, retina, optic nerve',
    'I can describe the job of each part',
    'I can explain how the eye forms an image on the retina and how the lens changes shape to focus',
    'I can describe how a jelly lens models the eye lens, and what changing its shape does',
    '★ I can explain short and long sight and how lenses correct them'
  ],
  learn: [
    { h: 'Parts of the eye', html: `
[[d:eye]]
<div class="tbl"><table><tr><th>Part</th><th>Job</th></tr>
<tr><td><b>Cornea</b></td><td>clear front layer; does most of the bending (refraction) of light</td></tr>
<tr><td><b>Iris</b></td><td>coloured muscle that controls the size of the pupil</td></tr>
<tr><td><b>Pupil</b></td><td>hole that lets light in (black because light goes in and does not come out)</td></tr>
<tr><td><b>Lens</b></td><td>convex lens that fine-tunes the focus by changing shape</td></tr>
<tr><td><b>Retina</b></td><td>light-sensitive layer at the back, with cells (rods and cones) that detect light</td></tr>
<tr><td><b>Optic nerve</b></td><td>carries electrical signals from the retina to the brain</td></tr></table></div>
<p>In <b>bright</b> light the iris makes the pupil <b>smaller</b> to protect the retina; in <b>dim</b> light the pupil gets <b>bigger</b> to let more light in.</p>` },
    { h: 'Forming and focusing an image', html: `
<p>The cornea and lens <b>refract</b> the light to form a sharp image on the <b>retina</b>. The image is <b>upside down</b> (inverted) and smaller; the brain turns it the right way up.</p>
<p>To focus on objects at different distances, muscles change the <b>shape of the lens</b>:</p><ul><li><b>Distant objects</b>: lens pulled <b>thin</b> (less bending needed).</li><li><b>Near objects</b>: lens becomes <b>fat</b> (more bending needed).</li></ul>` },
    { h: 'Practical: the jelly lens', html: `
[[d:jellylens]]
<ol><li>Make lenses from clear jelly (or gelatine) in moulds of different curvature — a thin one and a fat one.</li><li>Shine parallel rays from a ray box through each lens on paper.</li><li>Mark where the rays meet (the focal point) and measure the <b>focal length</b>.</li></ol>
<p><b>Result:</b> the <b>fatter</b> (more curved) jelly lens bends light more and has a <b>shorter focal length</b>. Squashing a jelly lens gently makes it fatter and moves the focus closer — just like the eye’s lens focusing on a near object. The jelly is soft and flexible, like the real lens.</p>
<div class="box why"><b class="lbl">★ Short and long sight</b><p><b>Short-sighted</b> people see near things clearly but distant things are blurred: the image forms <b>in front of</b> the retina (the eyeball is too long or the lens too strong). A <b>concave</b> lens corrects it. <b>Long-sighted</b> people see distant things clearly but near things are blurred: the image would form <b>behind</b> the retina. A <b>convex</b> lens corrects it.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why your pupils get smaller when you walk out into bright sunshine.', s: ['In bright light, too much light could damage the retina.', 'The iris muscles contract to make the pupil smaller.', 'Less light enters the eye.'], a: 'the iris shrinks the pupil to let in less light' },
    { q: 'A student makes two jelly lenses. Lens A is fatter than lens B. Which has the shorter focal length? Explain.', s: ['Lens A — it is more curved.', 'A more curved lens refracts (bends) the light more.', 'So the rays meet closer to the lens.'], a: 'A (fatter lenses bend light more)' }
  ],
  pitfalls: ['Saying the lens does all the focusing — the cornea does most of it.', 'Saying the pupil is a coloured part — it is a hole; the iris is coloured.', 'Mixing up retina and cornea.', 'Saying the image on the retina is the right way up.'],
  cards: [
    ['What does the cornea do?', 'Refracts (bends) most of the light entering the eye.'],
    ['What does the iris do?', 'Controls the size of the pupil.'],
    ['What is the pupil?', 'The hole that lets light into the eye.'],
    ['What does the lens do?', 'Fine-tunes the focus by changing shape.'],
    ['What does the retina do?', 'Detects light and turns it into electrical signals.'],
    ['What does the optic nerve do?', 'Carries signals from the retina to the brain.'],
    ['Lens shape for a near object?', 'Fatter (more curved).'],
    ['Image on the retina is…', 'upside down (inverted) and smaller.'],
    ['What does a fatter jelly lens do?', 'Bends light more — shorter focal length.'],
    ['★ Which lens corrects short sight?', 'A concave (diverging) lens.']
  ],
  quiz: [
    { q: 'Which part of the eye detects light?', o: ['retina', 'iris', 'cornea', 'pupil'], x: 'Light-sensitive cells.' },
    { q: 'The coloured part of the eye is the', o: ['iris', 'pupil', 'lens', 'retina'], x: 'A muscle.' },
    { q: 'In dim light the pupil', o: ['gets bigger', 'gets smaller', 'stays the same', 'closes'], x: 'Lets more light in.' },
    { q: 'Signals go from the eye to the brain along the', o: ['optic nerve', 'cornea', 'iris', 'lens'], x: 'Nerve.' },
    { q: 'The image formed on the retina is', o: ['upside down', 'the right way up', 'bigger than the object', 'on the cornea'], x: 'Inverted.' },
    { q: 'To focus on a book close to your face, the lens becomes', o: ['fatter', 'thinner', 'flatter and bigger', 'opaque'], x: 'More bending needed.' },
    { q: 'A fatter jelly lens has', o: ['a shorter focal length', 'a longer focal length', 'no focal length', 'the same focal length'], x: 'Bends light more.' },
    { q: 'Most of the bending of light in the eye is done by the', o: ['cornea', 'lens', 'pupil', 'retina'], x: 'The curved front surface.' },
    { q: 'A short-sighted person’s image forms', o: ['in front of the retina', 'behind the retina', 'on the iris', 'on the optic nerve'], x: 'Corrected with a concave lens.', ch: 1 }
  ],
  exam: [
    { q: 'The diagram shows a section through the human eye.', tag: '', parts: [
      { q: 'Name the part that controls how much light enters the eye.', m: 1, ms: ['iris'] },
      { q: 'Name the part where the image is formed.', m: 1, ms: ['retina'] },
      { q: 'Describe how the eye focuses on an object that moves closer.', m: 2, ms: ['the lens changes shape / becomes fatter / more curved', 'so it bends light more to focus it on the retina'] },
      { q: 'Explain why the pupil looks black.', m: 1, ms: ['light goes in but (almost) none comes back out'] }
    ] },
    { q: 'A student models the eye with jelly lenses. She shines parallel rays through a thin lens and a fat lens and measures where the rays meet.', tag: 'prac', parts: [
      { q: 'State the name of the point where the rays meet.', m: 1, ms: ['focal point / focus'] },
      { q: 'Predict which lens has the longer focal length and explain.', m: 2, ms: ['the thin lens', 'it is less curved so bends light less'] },
      { q: 'Explain how the jelly lens is similar to the lens in the eye.', m: 2, ms: ['it is flexible / can change shape', 'changing its shape changes the focal length (to focus near and far objects)'] }
    ] }
  ],
  sims: ['eye'], gens: []
});

TOPICS.push({
  id: '11.4', unit: '11', title: 'Colour and filters', short: 'Primary colours, coloured objects, filters',
  summary: 'White light is a mixture of all the colours of the spectrum, which a prism can split up. The primary colours of light are red, green and blue. Coloured objects reflect their own colour and absorb the rest; filters let their own colour through and absorb the rest.',
  spec: [
    'I can describe how a prism disperses white light into the spectrum (ROYGBIV)',
    'I can name the primary colours of light (red, green, blue) and the secondary colours they make',
    'I can explain how we see coloured objects: they reflect their colour and absorb the others',
    'I can explain how filters work and predict what colour an object appears in coloured light',
    '★ I can explain how the eye detects colour with three types of cone cell'
  ],
  learn: [
    { h: 'White light and the spectrum', html: `
[[d:prism]]
<p><b>White light</b> is a mixture of colours. A glass <b>prism</b> splits it into a <b>spectrum</b> — red, orange, yellow, green, blue, indigo, violet (<b>ROYGBIV</b>: “Richard Of York Gave Battle In Vain”). This is called <b>dispersion</b>: each colour is refracted by a slightly different amount — <b>violet the most</b>, red the least. Rainbows form the same way, in raindrops.</p>` },
    { h: 'Primary colours of light', html: `
[[d:rgb]]
<p>The <b>primary colours of light</b> are <b>red, green and blue</b>. Mixing them:</p>
<ul><li>red + green = <b>yellow</b></li><li>red + blue = <b>magenta</b></li><li>green + blue = <b>cyan</b></li><li>red + green + blue = <b>white</b></li></ul>
<p>Yellow, magenta and cyan are the <b>secondary colours</b> of light. Every pixel on a phone or TV screen is made of tiny red, green and blue dots. (Mixing <i>paints</i> works differently, because paints absorb light.)</p>` },
    { h: 'Coloured objects and filters', html: `
<p><b>Coloured objects:</b> an opaque object <b>reflects</b> its own colour and <b>absorbs</b> all the others. A red apple in white light reflects red and absorbs the rest. A <b>white</b> object reflects all colours; a <b>black</b> object absorbs all colours.</p>
<p><b>Filters</b> are transparent coloured materials. A filter <b>transmits</b> (lets through) its own colour and <b>absorbs</b> the rest. White light through a red filter → only red comes out.</p>
<div class="tbl"><table><tr><th>Object</th><th>In white light</th><th>In red light</th><th>In green light</th></tr><tr><td>white shirt</td><td>white</td><td>red</td><td>green</td></tr><tr><td>red shirt</td><td>red</td><td>red</td><td><b>black</b></td></tr><tr><td>green shirt</td><td>green</td><td><b>black</b></td><td>green</td></tr><tr><td>black shirt</td><td>black</td><td>black</td><td>black</td></tr></table></div>
<p>An object looks <b>black</b> when none of the light hitting it is a colour it can reflect.</p>
<div class="box why"><b class="lbl">★ How we see colour</b><p>The retina has three types of <b>cone cell</b>, most sensitive to red, green and blue light. The brain compares their signals: red and green cones both firing looks yellow. That is why three primary colours can make every colour we see — and why some people, whose cones work differently, are colour-blind.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'What colour does a blue book look under green light? Explain.', s: ['Only green light hits the book.', 'A blue book reflects only blue light and absorbs the other colours — including green.', 'No light is reflected, so the book looks black.'], a: 'black' },
    { q: 'White light shines through a red filter and then a green filter. What comes out?', s: ['The red filter lets only red through.', 'The green filter absorbs red (it only lets green through).', 'Nothing gets through — it looks black (dark).'], a: 'no light (black)' }
  ],
  pitfalls: ['Saying a filter adds colour to light — it takes colours away (absorbs them).', 'Using paint colours (red, yellow, blue) as the primary colours of light.', 'Saying a red object “turns” light red.', 'Forgetting that objects look black when no light of their colour hits them.'],
  cards: [
    ['What is white light?', 'A mixture of all the colours of the spectrum.'],
    ['What does a prism do to white light?', 'Splits it into a spectrum (dispersion).'],
    ['Order of the spectrum colours?', 'Red, orange, yellow, green, blue, indigo, violet.'],
    ['Which colour is refracted most?', 'Violet.'],
    ['Primary colours of light?', 'Red, green and blue.'],
    ['Red + green light?', 'Yellow.'],
    ['Green + blue light?', 'Cyan.'],
    ['Why does a red apple look red?', 'It reflects red light and absorbs the other colours.'],
    ['What does a blue filter do?', 'Transmits blue light and absorbs the other colours.'],
    ['★ What cells detect colour?', 'Cone cells in the retina (red, green and blue types).']
  ],
  quiz: [
    { q: 'The primary colours of light are', o: ['red, green and blue', 'red, yellow and blue', 'cyan, magenta and yellow', 'red, orange and yellow'], x: 'RGB.' },
    { q: 'Red and green light together make', o: ['yellow', 'brown', 'white', 'cyan'], x: 'Additive mixing.' },
    { q: 'A prism splits white light because', o: ['each colour is refracted by a different amount', 'it reflects the colours', 'it adds colours', 'it is coloured glass'], x: 'Dispersion.' },
    { q: 'A green leaf looks green because it', o: ['reflects green and absorbs other colours', 'absorbs green', 'gives out green light', 'transmits all colours'], x: 'Reflects its own colour.' },
    { q: 'A white shirt in blue light looks', o: ['blue', 'white', 'black', 'yellow'], x: 'It reflects whatever colour hits it.' },
    { q: 'A red car in green light looks', o: ['black', 'red', 'green', 'yellow'], x: 'No red light to reflect.' },
    { q: 'A blue filter', o: ['lets blue through and absorbs other colours', 'turns all light blue', 'reflects blue', 'lets all colours through'], x: 'Transmits its own colour.' },
    { q: 'Which colour is refracted the most by a prism?', o: ['violet', 'red', 'green', 'yellow'], x: 'Violet bends most.' },
    { q: 'Yellow light makes both the red and green cones respond. This is why', o: ['red + green light looks yellow', 'yellow is a primary colour', 'the sky is blue', 'filters absorb light'], x: 'The brain compares cone signals.', ch: 1 }
  ],
  exam: [
    { q: 'A student shines white light through a glass prism.', tag: '', parts: [
      { q: 'Describe what she sees on a screen.', m: 2, ms: ['a spectrum / band of colours', 'red, orange, yellow, green, blue, indigo, violet (in order)'] },
      { q: 'Name this effect and explain why it happens.', m: 2, ms: ['dispersion', 'each colour is refracted by a different amount (violet most, red least)'] }
    ] },
    { q: 'A footballer wears a red shirt, white shorts and black socks. Describe and explain how the kit looks under (a) white light, (b) green light.', tag: 'ext', m: 6, ms: ['(a) red shirt, white shorts, black socks', '(a) shirt reflects red and absorbs others; shorts reflect all; socks absorb all', '(b) shirt looks black', '(b) because it cannot reflect green / there is no red light to reflect', '(b) shorts look green (reflect green)', '(b) socks still black (absorb all colours)'] }
  ],
  sims: ['k_colour'], gens: []
});

TOPICS.push({
  id: '11.5', unit: '11', title: 'Pinhole cameras', short: 'Images, straight lines and the eye',
  summary: 'A pinhole camera is a light-proof box with a tiny hole at one end and a translucent screen at the other. Light travels in straight lines through the hole and forms an upside-down image. It works like a simple version of the eye.',
  spec: [
    'I can describe how a pinhole camera forms an image using straight-line rays',
    'I can explain why the image is inverted (upside down) and real',
    'I can describe how the image changes if the object moves, the screen moves or the hole gets bigger',
    'I can compare a pinhole camera with the eye',
    '★ I can calculate the size of the image using similar triangles'
  ],
  learn: [
    { h: 'How a pinhole camera works', html: `
[[d:pinhole]]
<p>A <b>pinhole camera</b> is a box with a <b>tiny hole</b> at the front and a <b>translucent screen</b> (tracing paper) at the back. Light from each point of the object travels in a <b>straight line</b> through the hole and hits one point on the screen.</p>
<p>Rays from the <b>top</b> of the object go through the hole and hit the <b>bottom</b> of the screen; rays from the bottom hit the top. So the image is <b>inverted</b> (upside down) and also swapped left to right. It is a <b>real</b> image — it can be seen on a screen.</p>` },
    { h: 'Changing the image', html: `
<div class="tbl"><table><tr><th>Change</th><th>Effect on the image</th></tr>
<tr><td>object moved <b>closer</b></td><td>image gets <b>bigger</b></td></tr>
<tr><td>screen moved <b>further</b> from the hole (longer box)</td><td>image gets <b>bigger</b> (and dimmer)</td></tr>
<tr><td>hole made <b>bigger</b></td><td>image gets <b>brighter</b> but <b>blurrier</b> (each point spreads into a patch)</td></tr>
<tr><td>several holes</td><td>several overlapping images</td></tr></table></div>
<p>A tiny hole lets in very little light, so the image is dim — use it in a darkened room, looking at a bright object. Putting a <b>convex lens</b> in a bigger hole gives an image that is both bright <b>and</b> sharp — which is how a real camera works.</p>` },
    { h: 'Pinhole camera vs the eye', html: `
<div class="tbl"><table><tr><th>Pinhole camera</th><th>Eye</th></tr><tr><td>pinhole lets light in</td><td>pupil lets light in</td></tr><tr><td>no lens (straight lines only)</td><td>cornea and lens focus the light</td></tr><tr><td>translucent screen</td><td>retina</td></tr><tr><td>image inverted and real</td><td>image inverted and real</td></tr><tr><td>fixed hole size</td><td>iris changes the pupil size</td></tr></table></div>
<div class="box why"><b class="lbl">★ How big is the image?</b><p>The rays make two similar triangles that meet at the hole, so<br>$@frac{"image height"}{"object height"} = @frac{"image distance"}{"object distance"}$<br>A 2 m tall tree 20 m away, with the screen 0.1 m behind the hole: image = 2 × 0.1 ÷ 20 = 0.01 m = 1 cm.</p></div>` }
  ],
  eqs: [['"image height" = "object height" × @frac{"image distance"}{"object distance"}', '★ pinhole camera (similar triangles)']],
  worked: [
    { q: 'Explain why the image in a pinhole camera is upside down.', s: ['Light travels in straight lines.', 'Light from the top of the object passes through the hole and continues downwards to the bottom of the screen.', 'Light from the bottom goes up to the top — so the image is inverted.'], a: 'rays cross at the pinhole' },
    { q: 'A candle flame 5 cm tall is 50 cm from a pinhole. The screen is 20 cm behind the hole. How tall is the image?', s: ['image height = object height × image distance ÷ object distance', '= 5 × 20 ÷ 50', '= 2 cm'], a: '2 cm' }
  ],
  pitfalls: ['Drawing rays that bend at the pinhole — they are straight.', 'Saying a bigger hole makes the image sharper — it makes it brighter but blurrier.', 'Forgetting the image is inverted.', 'Saying a pinhole camera has a lens.'],
  cards: [
    ['What forms the image in a pinhole camera?', 'Straight-line rays of light passing through a tiny hole.'],
    ['Why is the image upside down?', 'Rays from the top go through the hole to the bottom of the screen (and vice versa).'],
    ['Effect of making the hole bigger?', 'Brighter but blurrier image.'],
    ['Effect of moving the object closer?', 'Bigger image.'],
    ['Effect of a longer box (screen further away)?', 'Bigger, dimmer image.'],
    ['What part of the eye is like the pinhole?', 'The pupil.'],
    ['What part of the eye is like the screen?', 'The retina.'],
    ['How is the eye different from a pinhole camera?', 'It has a lens (and cornea) to focus light; the iris changes the pupil size.'],
    ['★ Image height equation?', 'object height × image distance ÷ object distance.']
  ],
  quiz: [
    { q: 'The image in a pinhole camera is', o: ['upside down', 'the right way up', 'always bigger than the object', 'invisible'], x: 'Rays cross at the hole.' },
    { q: 'A pinhole camera works because light', o: ['travels in straight lines', 'bends at the hole', 'is reflected by the screen', 'is slow'], x: 'Straight-line rays.' },
    { q: 'Making the pinhole bigger makes the image', o: ['brighter and blurrier', 'dimmer and sharper', 'smaller', 'the right way up'], x: 'Each point spreads out.' },
    { q: 'Moving the object further from the pinhole makes the image', o: ['smaller', 'bigger', 'brighter', 'upside down'], x: 'Similar triangles.' },
    { q: 'In the eye, the part that does the same job as the pinhole camera’s screen is the', o: ['retina', 'iris', 'cornea', 'optic nerve'], x: 'Where the image forms.' },
    { q: 'The screen of a pinhole camera is usually made of', o: ['tracing paper (translucent)', 'metal (opaque)', 'clear glass', 'a mirror'], x: 'You can see the image from behind.' },
    { q: 'A pinhole camera is best used', o: ['pointing at a bright object', 'in a dark room pointing at a dark wall', 'underwater', 'with the hole covered'], x: 'The image is dim.' },
    { q: 'A 3 m tall object is 30 m from a pinhole; the screen is 0.2 m behind it. The image is', o: ['0.02 m tall', '0.2 m tall', '2 m tall', '450 m tall'], x: '3 × 0.2 ÷ 30.', ch: 1 }
  ],
  exam: [
    { q: 'A student makes a pinhole camera from a box. She points it at a bright window.', tag: '', parts: [
      { q: 'Draw two rays to show how an image of an arrow is formed on the screen.', m: 2, ms: ['straight ray from the top of the arrow through the hole to the bottom of the screen', 'straight ray from the bottom through the hole to the top of the screen (image inverted)'] },
      { q: 'Describe two features of the image.', m: 2, ms: ['upside down / inverted', 'smaller (than the object) / real / dim'] },
      { q: 'She makes the hole bigger. Describe and explain what happens to the image.', m: 2, ms: ['brighter', 'but blurrier, because light from each point spreads over a larger patch'] }
    ] },
    { q: 'Compare a pinhole camera with the human eye. Give two similarities and two differences.', tag: 'ext', m: 4, ms: ['similar: both have a hole to let light in (pupil/pinhole)', 'similar: both form an inverted real image on a screen/retina', 'different: the eye has a lens / cornea to focus light', 'different: the eye can change the pupil size (iris) / change focus'] }
  ],
  sims: ['pinhole'], gens: ['pin1']
});
