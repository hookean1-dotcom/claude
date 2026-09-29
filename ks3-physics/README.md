# Launchpad — Key Stage 3 Physics (Years 7 and 8)

Launchpad is a self-contained study app for KS3 physics.

**To use it:** download [`../ks3-physics-launchpad.html`](../ks3-physics-launchpad.html) (or `index.html` here) and open it in any modern browser. It is one file, needs no server, and stores progress only in that browser.

## Year 7 or Year 8

Choose **Year 7**, **Year 8** or **Both years** on first launch, or later with the year chip in the top bar. Everything follows the choice: topics, tests, practicals, equations, the question bank and search. **Magnetism** is the additional Year 7 unit ("if time allows"). It can be hidden, which also removes it from the Year 7 test.

| Year 7 | Year 8 |
|---|---|
| 1 Basic forces · 2 Measuring forces · 3 Mass and weight · 4 Density · 5 Upthrust · 6 Energy · 7 Magnetism (additional) | 8 Further forces · 9 Electricity · 10 Sound · 11 Light |

A Skills unit (working scientifically) is shared by both years.

## What's inside

| | |
|---|---|
| Topics | 49 topics across 11 units plus Skills, each with "I can…" learning checklists |
| Notes | notes with diagrams, 102 step-by-step worked examples, and a "watch out for" list per topic |
| Practice | 415 quiz questions, 431 spaced-repetition flashcards, 62 unlimited calculation generators with worked solutions |
| Test questions | 95 structured questions in the topics (478 marks), plus a bank of 35 harder test-style questions (216 marks) |
| End-of-year tests | a Year 7 and a Year 8 test: one hour, exactly 60 marks, built fresh each time, with a timer and self-marking |
| ★ Challenge | deeper content tagged throughout for learners who want to go further |
| Simulations | 48 interactive simulations |
| Practicals | all 22 practicals, with equipment, variables, method, results, safety and tips |
| Reference | the key equations (with formula triangles and useful values) |
| Arcade | Equation Rush, Unit Match, Circuit Symbols, Float or Sink?, True or False Blitz and a daily challenge |

Some example simulations:

- film-canister rockets
- a party popper with anomalies
- weight on other planets
- a density column
- Archimedes' eureka can
- a rollercoaster energy ride
- magnetic domains
- an electric bell
- friction
- a live distance–time graph
- pressure on snow
- the crushed can
- resistance of a wire
- staircase switches
- the bell jar
- the speed of sound
- a decibel meter
- focusing in the eye
- a pinhole camera

The notes, questions and tests were written for this app to match a typical KS3 course. Schools order and name topics differently, so learners should follow their teacher's scheme of work. The app uses g = 10 N/kg.

## Building

The source is in `src/`. `python3 build.py` concatenates it into `index.html` and the copy at the repository root, and syntax-checks the JavaScript with Node. `python3 build.py <path>` also writes a body fragment for publishing.

The engine is shared with **Parallax** (`../edexcel-igcse-physics`). What is specific to Launchpad:

- `src/data/`: the units and topics `t1.js` to `t11.js`, `skills.js`, `practicals.js` (which also holds the equation list) and `bank.js`.
- `src/gens.js`: the KS3 calculation generators.
- `src/diagramsK.js`: the KS3 diagrams, plus re-captioned shared ones.
- `src/simsLib.js`: shared simulations, extracted from Parallax.
- `src/simsK.js` and `src/simsK2.js`: KS3 versions of the shared sims (`KS3SIM`) and the new Year 7 and Year 8 sims.
