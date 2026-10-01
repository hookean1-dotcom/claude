# Stride — WJEC Eduqas GCSE (9–1) Physical Education

A self-contained study app for the WJEC Eduqas GCSE (9–1) in Physical Education (teaching from 2016).

**To use it:** download [`../eduqas-gcse-pe-stride.html`](../eduqas-gcse-pe-stride.html) (or `index.html` here) and open it in any modern browser. It is a single file that needs no server, and it saves progress only in that browser.

## What's inside

| | |
|---|---|
| Topics | 35 topics. Component 1 has 31 topics across the five key areas: health, training and exercise (9); exercise physiology (8); movement analysis (4); psychology of sport and physical activity (6); socio-cultural issues (4). There are also 2 Component 2 (NEA) topics and 2 skills topics. |
| Notes | Notes for each topic with 21 diagrams (skeleton, muscles, heart, lungs, gaseous exchange, levers, planes and axes, training zones, oxygen debt and more), 76 worked answers, common mistakes and a specification checklist. |
| Practice | 275 quiz questions, 375 spaced-repetition flashcards, and 14 calculation generators with worked solutions: training zones, % of max HR, energy balance, cardiac output, stroke volume, minute ventilation, mechanical advantage, % change, mean, range, participation rates and sweat loss. |
| Exam questions | 112 stimulus-based questions (511 marks), including 35 **levels-marked** extended parts that you self-mark with band descriptors. Synoptic questions link the key areas. |
| Practice papers | A **full Component 1 paper**: 2 hours, exactly 120 marks, covering all five key areas with at least two levels-marked questions. A **half paper**: 1 hour, exactly 60 marks. Each paper is freshly assembled, timed and self-marked. |
| Explorations | 48 interactive explorations, including an energy-balance calculator, a fitness-test rater with norms, a training-zone calculator, a training-programme planner, a SMART target builder, a lever lab, heart and lung models, an energy-systems model and many sorting tasks. |
| Assessment | The two components, AOs, command words, Component 2 guides, and a marks calculator for Component 2 and the weighted total. |
| Arcade | Muscle Match, Plane & Axis, Test Rush, Reaction Time, and a True or False Blitz. |

The notes, questions, papers and mark schemes were written for this app. They are not official Eduqas materials.

## Building

The source is in `src/`. Run `python3 build.py` to concatenate it into `index.html` and the root copy `../eduqas-gcse-pe-stride.html`. The build also syntax-checks the JavaScript with Node. `python3 build.py <path>` additionally writes a body fragment for publishing.

The engine is shared with **Pulse** (`../wjec-pe`). New for Stride:

- GCSE content in `src/data/`;
- GCSE diagrams in `diagramsG.js`, explorations in `simsG.js` and calculation generators in `gensG.js`;
- 120- and 60-mark Component 1 paper builders;
- the Component 2 marks calculator.
