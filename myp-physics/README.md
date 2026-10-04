# MYP — concept-based MYP Physics, Grade 10

A self-contained study app for MYP Physics in Grade 10 (MYP year 5). The six units follow the *Concept Based Physics (G10)* unit plans (sites.google.com/view/concept-based-physics). Each unit includes its conceptual understanding, global context, key concepts, strands and generalisations, factual, conceptual and debatable inquiry questions, approaches to learning, applications and skills, and assessment tasks.

| Unit | Title | Global context | Key concepts |
|---|---|---|---|
| 1 | What is validity? | Globalisation and sustainability | Communication |
| 2 | Motion of a particle | Scientific and technical innovation | Change |
| 3 | Thermal physics | Scientific and technical innovation | Change, form |
| 4 | Wave particle duality | Fairness and development | Perspectives, logic |
| 5 | Electricity | Personal and cultural expression | Communication, change |
| 6 | Radioactivity | Orientation in space and time | Change, form |

**To use it:** download [`../myp-physics.html`](../myp-physics.html) (or `index.html` here) and open it in any modern browser. It is a single file that needs no server, and it saves progress only in that browser.

## What's inside

| | |
|---|---|
| Unit pages | The conceptual understanding, global context, key concepts and approaches to learning for each unit. Every strand lists its generalisations, linked topics and inquiry questions. All 84 inquiry questions have model answers you can reveal: factual and conceptual questions get one answer, and debatable questions show two perspectives. Each unit also lists its applications and skills, with a self-assessment colour drawn from your checklists, and its assessment tasks with the criteria they assess. |
| Topics | 45 topics: Unit 1 (5), Unit 2 (11), Unit 3 (5), Unit 4 (8), Unit 5 (7), Unit 6 (6) and Skills (3, covering criteria A–D, lab reports and Criterion D). Each topic has notes, worked examples, common mistakes and an applications and skills checklist. |
| Notes and diagrams | 59 diagrams, including error bars with steepest and shallowest lines, an inclined plane, static and dynamic friction, impulse, heat transfer, Snell's law, total internal reflection, optical fibres, diffraction, the rainbow, the eye and vision correction, Kirchhoff's laws, a potential divider and the metal lattice. |
| Explorations | 53 interactive simulations. The 20 new ones for MYP are: reading instruments (resolution and parallax), accuracy and precision, error bars and gradient uncertainty, vector addition, suvat with graphs, an inclined plane with friction, a roller-coaster energy model, conduction, mixing to equilibrium, intensity and distance, a plane mirror, Snell's law and TIR, diffraction, the eye and glasses, conductors and semiconductors, Kirchhoff's laws, a potential divider, the resistance of a wire, nuclear decay equations and a grade calculator. |
| Practice | 444 quiz questions, 480 spaced-repetition flashcards and 135 calculation generators with worked solutions. The generators include significant figures, percentage and combined uncertainties, gradient uncertainty, suvat, slopes, coefficients of friction, impulse, mixing, Snell's law and critical angle, intensity, Kirchhoff's laws, combined resistors, resistivity, kWh cost, carbon dating and E = mc². |
| Written questions | 129 structured questions (517 marks), each tagged with the MYP criterion it mainly assesses (A, B, C or D) and self-marked against a mark scheme. |
| Labs and tasks | 13 investigations from the unit plans, including Hooke's law, gravitational field strength, the friction lab, roller-coaster kinematics, momentum, specific heat capacity, the change of state graph, insulation, intensity, Snell's law, V–I graphs, a factor affecting resistance and half-life/carbon dating. Each has its criteria, variables, method, analysis and evaluation tips. |
| Unit tests | A Units 1–2 test, a Units 3–5 test, a Unit 6 test and an end-of-year exam. Each comes either as a timed quick-fire test (multiple choice plus calculations) or as a freshly assembled written test of structured, criterion-tagged questions with a self-marked score. Every unit also has its own written test. |
| Criteria & grades | Paraphrased strands and level descriptors for criteria A–D (Year 5). You record your level for each criterion in each unit; the page then shows a best-fit level per criterion and the estimated MYP grade from the general 1–7 boundaries. |
| Also | Key equations with a cover-up self-test, constants and prefixes, arcade games, a daily challenge, XP, streaks, badges, search, and light and dark themes. |

The notes, model answers, questions, mark schemes and lab guides were written for this app. Some notes are adapted from **Live Wire** (`../aqa-gcse-physics`). They are not official IB materials, and the criteria descriptors are paraphrased.

## Building

The source is in `src/`. Run `python3 build.py` to concatenate it into `index.html` and the root copy `../myp-physics.html`. The build also syntax-checks the JavaScript with Node. `python3 build.py <path>` additionally writes a body fragment for publishing.

The engine is shared with Live Wire. New for MYP:

- **`src/data/units.js`:** the six units with their full concept-based framework and inquiry-question answers.
- **`src/data/u1.js` … `u6.js` and `skills.js`:** the topic content.
- **`src/data/labs.js`:** the labs and tasks, the key equations, the criteria descriptors and the grade boundaries.
- **`src/lw/`:** copies of Live Wire's topic files, loaded into a separate `LW` namespace. `src/data/borrow.js` provides `lw(id, options)`, which builds an MYP topic from a Live Wire topic by picking sections and questions and removing the AQA framing (equation sheet, required-practical numbers, tier labels).
- **`diagramsM.js`, `simsM.js` and `gensM.js`:** the MYP diagrams, simulations and calculation generators.
- **`app.js`:** the unit pages, criteria & grades page, unit tests, written tests and labs view.
