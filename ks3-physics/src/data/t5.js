/* ==========================================================
   YEAR 7 · UNIT 5 · UPTHRUST
   ========================================================== */
TOPICS.push({
  id: '5.1', unit: '5', title: 'Floating and sinking', short: 'Upthrust versus weight',
  summary: 'Any object in a liquid or gas feels an upward push called upthrust. If the upthrust can balance the weight, the object floats; if it cannot, the object sinks. Comparing densities tells you which will happen.',
  spec: [
    'I can describe upthrust as the upward force from a liquid or gas on an object in it',
    'I can explain floating (upthrust = weight) and sinking (weight > upthrust) with force arrows',
    'I can predict floating or sinking by comparing the density of the object and the liquid',
    'I can explain why liquids float or sink on other liquids',
    '★ I can explain why upthrust exists, using pressure increasing with depth'
  ],
  learn: [
    { h: 'Upthrust', html: `
<p>Push a football under water and you feel it pushing back up. That upward force from the water is <b>upthrust</b>. Every object in a <b>liquid or gas</b> (a <b>fluid</b>) feels upthrust — even you, in air, although it is tiny.</p>
[[d:floatsink]]
<ul><li><b>Floating:</b> the object sinks into the water until the <b>upthrust equals its weight</b>. The forces are <b>balanced</b>, so it stays still.</li><li><b>Sinking:</b> even when fully under water, the upthrust is <b>less than the weight</b>. The forces are unbalanced downwards, so it sinks.</li></ul>
<p>An object that sinks still feels upthrust — that is why things feel lighter under water and why it is easier to lift a friend in a swimming pool.</p>` },
    { h: 'Density decides', html: `
<div class="box def"><b class="lbl">Rule</b><p>An object <b>floats</b> in a liquid if it is <b>less dense</b> than the liquid. It <b>sinks</b> if it is <b>denser</b>.</p></div>
<p>Water is 1.0 g/cm³: wood (0.5–0.8), ice (0.92) and cork (0.24) float; stone (2.6), iron (7.9) and glass (2.5) sink. A less dense object floats <b>higher</b>: cork floats mostly above water, ice mostly below (about 92% under — hence “the tip of the iceberg”).</p>
<p>The same rule works for <b>liquids</b>: oil floats on water, and water sinks through oil. And for <b>gases</b>: a helium balloon floats up in air.</p>` },
    { h: '★ Where does upthrust come from?', html: `
[[d:k_depth]]
<p>Pressure in a liquid <b>increases with depth</b>, because there is more liquid above pushing down. So the water pushes harder on the <b>bottom</b> of an object than on its top. The difference is an overall push <b>upwards</b> — upthrust. A denser liquid gives bigger pressure and bigger upthrust, which is why it is easier to float in the salty Dead Sea.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'A 5 N apple floats in water. What is the upthrust on it? Explain.', s: ['It floats, so it is not moving up or down.', 'The forces are balanced: upthrust = weight.', 'Upthrust = 5 N.'], a: '5 N' },
    { q: 'A candle (wax 0.9 g/cm³) is dropped into water (1.0 g/cm³) and into alcohol (0.79 g/cm³). Does it float or sink in each?', s: ['Water: wax is less dense than water → floats.', 'Alcohol: wax is denser than alcohol → sinks.'], a: 'floats in water, sinks in alcohol' }
  ],
  pitfalls: ['Saying things float because they are “light” — a huge ship floats; a tiny pin sinks. It depends on density.', 'Saying sinking objects feel no upthrust.', 'Drawing the upthrust arrow longer than the weight for a floating object — they are equal.', 'Forgetting that upthrust also happens in gases.'],
  cards: [
    ['What is upthrust?', 'The upward force from a liquid or gas on an object in it.'],
    ['Forces on a floating object?', 'Upthrust = weight (balanced).'],
    ['Why does an object sink?', 'Its weight is bigger than the upthrust, even when fully submerged.'],
    ['Density rule for floating?', 'Floats if less dense than the liquid; sinks if denser.'],
    ['Does a sinking object feel upthrust?', 'Yes — that is why it seems lighter under water.'],
    ['Why does oil float on water?', 'Oil is less dense than water.'],
    ['Why does ice float with most of it under water?', 'Its density (0.92 g/cm³) is only a little less than water’s.'],
    ['★ Why is there upthrust?', 'Pressure increases with depth, so the push on the bottom of the object is bigger than on the top.']
  ],
  quiz: [
    { q: 'A boat floats. Compared with its weight, the upthrust is', o: ['equal', 'bigger', 'smaller', 'zero'], x: 'Balanced forces.' },
    { q: 'An object will float in water if its density is', o: ['less than 1.0 g/cm³', 'more than 1.0 g/cm³', 'exactly 10 g/cm³', 'anything at all'], x: 'Less dense than the liquid.' },
    { q: 'A stone sinks because', o: ['its weight is bigger than the upthrust', 'there is no upthrust on it', 'water pulls it down', 'it is small'], x: 'Unbalanced downwards.' },
    { q: 'Which will float in water?', o: ['cork (0.24 g/cm³)', 'glass (2.5 g/cm³)', 'iron (7.9 g/cm³)', 'rubber eraser (1.5 g/cm³)'], x: 'Less dense than water.' },
    { q: 'A 20 N log floats. The upthrust on it is', o: ['20 N', '0 N', '40 N', '10 N'], x: 'Upthrust = weight.' },
    { q: 'Upthrust acts', o: ['upwards', 'downwards', 'sideways', 'in the direction of motion'], x: 'Up, from the fluid.' },
    { q: 'Oil on water floats because oil is', o: ['less dense', 'denser', 'thicker', 'lighter in colour'], x: 'Density rule.' },
    { q: 'Things feel lighter in a swimming pool because', o: ['upthrust pushes up on them', 'gravity is weaker in water', 'their mass decreases', 'water has no weight'], x: 'Upthrust supports part of the weight.' },
    { q: 'Upthrust exists because water pressure is', o: ['bigger at the bottom of an object than at the top', 'the same everywhere', 'bigger at the top', 'zero under water'], x: 'Pressure increases with depth.', ch: 1 }
  ],
  exam: [
    { q: 'An apple and a stone are put into a tank of water. The apple floats. The stone sinks.', tag: '', parts: [
      { q: 'Name the upward force that acts on both objects in the water.', m: 1, ms: ['upthrust'] },
      { q: 'Explain, using forces, why the apple floats.', m: 2, ms: ['upthrust equals the weight of the apple', 'forces are balanced'] },
      { q: 'Explain, using forces, why the stone sinks.', m: 2, ms: ['weight of the stone is bigger than the upthrust', 'forces unbalanced downwards'] },
      { q: 'The apple has a density of 0.8 g/cm³. Water is 1.0 g/cm³. Use these values to explain why it floats.', m: 1, ms: ['the apple is less dense than water'] }
    ] },
    { q: 'Explain why a diver finds it easier to lift a heavy rock under water than on land.', tag: 'ext', m: 3, ms: ['under water there is upthrust on the rock', 'upthrust acts upwards / supports part of the weight', 'so the diver needs a smaller force to lift it (weight is the same)'] }
  ],
  sims: ['floatsink'], gens: []
});

TOPICS.push({
  id: '5.2', unit: '5', title: 'Upthrust and displaced water', short: 'Practical: Archimedes’ principle',
  summary: 'Hang an object from a newton meter and lower it into water: the reading drops. The drop is the upthrust — and it equals the weight of the water the object pushes aside. This is Archimedes’ principle.',
  spec: [
    'I can measure upthrust as weight in air − apparent weight in water',
    'I can collect and weigh the water displaced by an object using a eureka can',
    'I can show that upthrust = weight of water displaced (Archimedes’ principle)',
    'I can calculate the weight of displaced water from its volume (1 cm³ of water has a mass of 1 g)',
    '★ I can explain why a floating object displaces its own weight of water'
  ],
  learn: [
    { h: 'Measuring upthrust', html: `
[[d:upthrustexp]]
<ol><li>Hang the object from a newton meter in air. Read its <b>weight</b>, e.g. 5.0 N.</li><li>Lower it into water until it is fully under (not touching the bottom). The reading drops, e.g. to 3.0 N. This is its <b>apparent weight</b>.</li><li><b>Upthrust = weight in air − apparent weight in water</b> = 5.0 − 3.0 = 2.0 N.</li></ol>` },
    { h: 'Weighing the displaced water', html: `
<ol><li>Fill a <b>eureka can</b> until water drips from its spout; let it stop.</li><li>Put a beaker under the spout (weigh the empty beaker first).</li><li>Lower the object on the newton meter into the can. Water flows into the beaker.</li><li>Weigh the beaker of water. Mass of water = full − empty. Convert to weight: 200 g = 0.2 kg → 0.2 × 10 = <b>2.0 N</b>.</li></ol>
<p>The weight of the displaced water (2.0 N) equals the upthrust (2.0 N)!</p>
<div class="box def"><b class="lbl">Archimedes’ principle</b><p>The <b>upthrust</b> on an object in a fluid equals the <b>weight of fluid it displaces</b> (pushes aside).</p></div>
<div class="box tip"><b class="lbl">Shortcut</b><p>1 cm³ of water has a mass of 1 g and weighs 0.01 N. So an object that displaces 150 cm³ of water feels an upthrust of 150 × 0.01 = 1.5 N.</p></div>` },
    { h: '★ Floating objects', html: `
<p>A floating object sinks in only until the water it displaces <b>weighs the same as the object</b> — then upthrust = weight. A 2000 N boat sinks until it displaces 2000 N (200 kg, or 200 litres) of water. Load it with cargo and it sits lower in the water, displacing more. Ships have a <b>Plimsoll line</b> painted on the side to show the safe loading level — and it is different for fresh water (less dense, so the ship sits lower) and salty sea water.</p>
<p>In a denser liquid, less volume needs to be displaced to give the same upthrust, so things float higher — like people in the Dead Sea.</p>` }
  ],
  eqs: [['"upthrust" = "weight in air" - "weight in water"', 'measuring upthrust'], ['"upthrust" = "weight of fluid displaced"', 'Archimedes’ principle']],
  worked: [
    { q: 'A metal block weighs 8.0 N in air and 5.5 N when fully under water. Calculate the upthrust.', s: ['Upthrust = weight in air − weight in water', '= 8.0 − 5.5', '= 2.5 N'], a: '2.5 N' },
    { q: 'A stone displaces 120 cm³ of water. Calculate the upthrust on it. (1 cm³ of water has a mass of 1 g; g = 10 N/kg)', s: ['Mass of water displaced = 120 g = 0.12 kg', 'Weight of water = 0.12 × 10 = 1.2 N', 'Upthrust = weight of water displaced = 1.2 N'], a: '1.2 N' }
  ],
  pitfalls: ['Letting the object touch the bottom or sides — the reading would be too low.', 'Forgetting to wait until the eureka can stops dripping before starting.', 'Forgetting to subtract the mass of the empty beaker.', 'Saying the object loses weight in water — its weight is the same; upthrust supports part of it.'],
  cards: [
    ['How do you measure upthrust with a newton meter?', 'Upthrust = weight in air − weight when submerged.'],
    ['What is Archimedes’ principle?', 'Upthrust = the weight of the fluid displaced.'],
    ['Mass of 1 cm³ of water?', '1 g.'],
    ['Upthrust on an object displacing 300 cm³ of water?', '300 g of water → 0.3 kg × 10 = 3 N.'],
    ['What is the apparent weight?', 'The reading on the newton meter when the object is in the water.'],
    ['Why must the object not touch the bottom?', 'The bottom would push up on it too, giving a wrong reading.'],
    ['What does a eureka can do in this practical?', 'Collects the displaced water so it can be weighed.'],
    ['★ How much water does a floating 50 N boat displace?', '50 N of water (5 kg, about 5 litres).']
  ],
  quiz: [
    { q: 'A stone weighs 6 N in air and 4 N in water. The upthrust is', o: ['2 N', '10 N', '4 N', '6 N'], x: '6 − 4.' },
    { q: 'Archimedes’ principle says upthrust equals', o: ['the weight of fluid displaced', 'the weight of the object', 'the volume of the object', 'the mass of the container'], x: 'Weight of the fluid pushed aside.' },
    { q: 'An object displaces 250 cm³ of water. The upthrust is', o: ['2.5 N', '250 N', '25 N', '0.25 N'], x: '250 g → 0.25 kg × 10.' },
    { q: 'When an object is lowered into water, the newton meter reading', o: ['decreases', 'increases', 'stays the same', 'drops to zero always'], x: 'Upthrust supports part of the weight.' },
    { q: 'A floating toy boat weighs 3 N. The weight of water it displaces is', o: ['3 N', '0 N', '30 N', 'more than 3 N'], x: 'Floating: upthrust = weight.' },
    { q: 'The empty beaker is 50 g; with displaced water, 130 g. The mass of displaced water is', o: ['80 g', '180 g', '130 g', '50 g'], x: '130 − 50.' },
    { q: 'Before lowering the object into the eureka can you should', o: ['fill it until it drips and wait for it to stop', 'empty it', 'fill it half way', 'heat it'], x: 'So only displaced water flows out.' },
    { q: 'A ship sits lower in fresh water than in sea water because fresh water is', o: ['less dense, so more must be displaced', 'denser', 'colder', 'saltier'], x: 'Same upthrust needs more volume.', ch: 1 }
  ],
  exam: [
    { q: 'A student investigates upthrust. She hangs a block from a newton meter: in air it reads 4.8 N; fully under water it reads 3.2 N. The water it displaces is collected in a beaker.', tag: 'prac', parts: [
      { q: 'Calculate the upthrust on the block.', m: 2, ms: ['4.8 − 3.2', '= 1.6 N'] },
      { q: 'The mass of the displaced water was 160 g. Calculate its weight (g = 10 N/kg).', m: 2, ms: ['160 g = 0.16 kg; 0.16 × 10', '= 1.6 N'] },
      { q: 'What do her results show?', m: 1, ms: ['upthrust = weight of water displaced (Archimedes’ principle)'] },
      { q: 'Give two things she must do to make her results accurate.', m: 2, ms: ['fill the eureka can until it drips and wait for it to stop before starting', 'block fully submerged / not touching the bottom or sides', 'zero the newton meter / read at eye level / subtract the empty beaker mass'] }
    ] },
    { q: 'A 12 000 N boat floats in a harbour.', tag: 'calc', ch: 1, parts: [
      { q: 'State the upthrust on the boat.', m: 1, ms: ['12 000 N'] },
      { q: 'Calculate the mass of water the boat displaces.', m: 2, ms: ['m = W ÷ g = 12 000 ÷ 10', '= 1200 kg'] },
      { q: 'Cargo is loaded onto the boat. Explain why it sits lower in the water.', m: 2, ms: ['weight increases so more upthrust is needed', 'it must displace more water / more volume under water'] }
    ] }
  ],
  sims: ['archimedes'], gens: ['up1', 'up2', 'up3']
});

TOPICS.push({
  id: '5.3', unit: '5', title: 'Boats, submarines and balloons', short: 'Using upthrust',
  summary: 'Steel ships float because their hollow shape makes their average density less than water. Submarines sink and rise by changing their weight with water tanks. Balloons and airships use upthrust in air.',
  spec: [
    'I can explain why a steel ship floats but a steel block sinks',
    'I can explain how a submarine dives and surfaces using ballast tanks',
    'I can explain how balloons and airships use upthrust in air',
    'I can explain how life jackets and swim floats help people float',
    '★ I can use average density to explain floating of objects made of several materials'
  ],
  learn: [
    { h: 'Why steel ships float', html: `
[[d:ship]]
<p>A solid lump of steel (7.8 g/cm³) sinks. But a ship is a <b>hollow shell</b> of steel full of air. Its total mass is spread over a <b>huge volume</b>, so its <b>average density</b> (total mass ÷ total volume) is less than water. It also pushes aside a very large volume of water, giving a big upthrust.</p>
<p>Try it with modelling clay: a ball sinks, but the same clay shaped into a boat floats.</p>` },
    { h: 'Submarines', html: `
<p>A submarine has <b>ballast tanks</b>.</p><ul><li>To <b>dive</b>: open valves to let <b>water in</b> to the tanks. Weight increases until it is bigger than the upthrust → it sinks.</li><li>To <b>hover</b> at a depth: adjust the water so weight = upthrust.</li><li>To <b>surface</b>: pump <b>compressed air</b> into the tanks to force the water out. Weight decreases below the upthrust → it rises.</li></ul>
<p>Fish do the same with a gas-filled <b>swim bladder</b>.</p>` },
    { h: 'Floating in air', html: `
<p>Air is a fluid, so it gives upthrust too — but only a small amount, because air is not very dense. To float in air you need something <b>very light for its size</b>:</p><ul><li><b>Helium balloons and airships</b> — helium is much less dense than air.</li><li><b>Hot air balloons</b> — heated air is less dense than cold air.</li></ul>
<p><b>Life jackets</b> and swim floats are full of air or foam: they add a lot of volume for very little mass, lowering your average density so you float with your head up.</p>
<div class="box why"><b class="lbl">★ Average density</b><p>Average density = <b>total mass ÷ total volume</b>. A 60 kg swimmer (volume 0.062 m³ → 970 kg/m³) with a 1 kg life jacket that adds 0.01 m³ of volume has an average density of 61 ÷ 0.072 = 850 kg/m³ — well below water (1000 kg/m³), so they float high.</p></div>` }
  ],
  eqs: [['"average density" = @frac{"total mass"}{"total volume"}', 'for objects made of several parts']],
  worked: [
    { q: 'A hollow metal box has a mass of 400 g and a volume of 500 cm³. Will it float in water?', s: ['Average density = 400 ÷ 500', '= 0.8 g/cm³', 'Less than 1.0 g/cm³ → it floats.'], a: 'yes — 0.8 g/cm³' },
    { q: 'Explain how a submarine rises to the surface.', s: ['Compressed air is pumped into the ballast tanks.', 'This pushes the water out, so the submarine’s weight decreases.', 'Upthrust is now bigger than the weight → unbalanced upwards → it rises.'], a: 'air forces water out; weight < upthrust' }
  ],
  pitfalls: ['Saying ships float because steel is light.', 'Saying submarines change their upthrust to dive — they change their weight (the upthrust stays about the same when fully submerged).', 'Forgetting that air gives upthrust too.', 'Using the density of the material instead of the average density of the whole object.'],
  cards: [
    ['Why does a steel ship float?', 'It is hollow and full of air, so its average density is less than water’s.'],
    ['How does a submarine dive?', 'It lets water into its ballast tanks, increasing its weight above the upthrust.'],
    ['How does a submarine surface?', 'Compressed air forces water out of the tanks, reducing its weight below the upthrust.'],
    ['How do life jackets work?', 'They add a lot of volume for little mass, lowering your average density.'],
    ['What gas do airships use?', 'Helium — much less dense than air.'],
    ['Average density = ?', 'total mass ÷ total volume.'],
    ['What organ do fish use to float at a depth?', 'A gas-filled swim bladder.'],
    ['★ 300 g hollow ball, volume 400 cm³: float or sink?', 'Float — 0.75 g/cm³.']
  ],
  quiz: [
    { q: 'A steel ship floats because', o: ['its average density is less than water', 'steel is less dense than water', 'there is no weight on it', 'the sea is magnetic'], x: 'Hollow and full of air.' },
    { q: 'To dive, a submarine', o: ['lets water into its tanks', 'pumps air into its tanks', 'turns its engine off', 'gets lighter'], x: 'Weight increases.' },
    { q: 'A hollow box: mass 150 g, volume 100 cm³. In water it', o: ['sinks', 'floats', 'hovers', 'rises into the air'], x: '1.5 g/cm³ > 1.0.' },
    { q: 'An airship floats in air because', o: ['helium is less dense than air', 'it has engines', 'air is denser than water', 'it is hot'], x: 'Upthrust in air.' },
    { q: 'A life jacket helps you float by', o: ['adding volume with very little mass', 'making you heavier', 'increasing your density', 'pulling you up with a motor'], x: 'Lower average density.' },
    { q: 'A ball of modelling clay sinks, but the same clay shaped into a boat floats. This is because the boat', o: ['displaces more water', 'has less mass', 'is made of different clay', 'is colder'], x: 'Bigger volume → more upthrust.' },
    { q: 'A submarine hovering at a fixed depth has', o: ['weight = upthrust', 'weight > upthrust', 'weight < upthrust', 'no upthrust'], x: 'Balanced.' },
    { q: 'An object of total mass 80 g and total volume 100 cm³ has an average density of', o: ['0.8 g/cm³', '1.25 g/cm³', '8000 g/cm³', '180 g/cm³'], x: '80 ÷ 100.', ch: 1 }
  ],
  exam: [
    { q: 'A submarine can travel on the surface or underwater.', tag: 'ext', parts: [
      { q: 'Explain how the submarine dives from the surface.', m: 3, ms: ['water is let into the ballast tanks', 'the weight of the submarine increases', 'weight becomes bigger than upthrust so it sinks'] },
      { q: 'Explain how it can stay at a constant depth.', m: 2, ms: ['adjust the water in the tanks', 'so that weight = upthrust / balanced'] }
    ] },
    { q: 'Explain why a solid steel bolt sinks in water but a steel ship floats.', tag: 'ext', m: 4, ms: ['steel is denser than water so the solid bolt sinks / its weight > upthrust', 'the ship is hollow / contains air', 'so its average density is less than water', 'it displaces a large volume/weight of water, so the upthrust can equal its weight'] }
  ],
  sims: ['floatsink'], gens: ['avgden1']
});
