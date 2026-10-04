# Podium — Pearson BTEC Level 3 National Extended Certificate in Sport

A self-contained study app for the Pearson BTEC Level 3 National Extended Certificate in Sport (360 GLH, first teaching 2016). It covers the three mandatory units and the optional unit Sports Psychology:

| Unit | Title | GLH | Assessment |
|---|---|---|---|
| 1 | Anatomy and Physiology | 120 | External exam: 1 h 30 min, 80 marks |
| 2 | Fitness Training and Programming for Health, Sport and Well-being | 120 | External set task: Part A case study, then Part B (2 h 30 min, 60 marks) |
| 3 | Professional Development in the Sports Industry | 60 | Internal assignments |
| 6 | Sports Psychology | 60 | Internal assignments |

**To use it:** download [`../btec-sport-podium.html`](../btec-sport-podium.html) (or `index.html` here) and open it in any modern browser. It is a single file that needs no server, and it saves progress only in that browser.

## What's inside

| | |
|---|---|
| Topics | 56 topics. Unit 1 has 19 topics across learning aims A–F: skeletal, muscular, respiratory, cardiovascular and energy systems, and how the systems work together. Unit 2 has 14 topics, Unit 3 has 9 and Unit 6 has 11. There are also 3 skills topics: Unit 1 exam technique, Unit 2 set-task technique, and assignment writing. |
| Notes | Notes for each topic with 31 diagrams (full skeleton, spine, synovial joint, the 19 muscles, airway, spirometer trace, heart, conduction system, energy continuum, the links between the body systems, training zones, periodisation, recruitment process, arousal theories, the stress process, Carron's model, Chelladurai's model, a sociogram and more), 95 worked answers, common mistakes and a specification checklist. |
| Practice | 384 quiz questions, 492 spaced-repetition flashcards, and 21 calculation generators with worked solutions, including BMI, waist-to-hip ratio, blood-pressure classification, energy and kJ/kcal conversions, hydration, Karvonen and % HRmax zones, 1RM loads, pyramid sets, cardiac output, minute ventilation and Steiner's productivity model. |
| Exam questions | 136 questions (586 marks), including 49 **levels-marked** extended parts that you self-mark with Pearson-style levels descriptors. There are also assignment-practice tasks for Units 3 and 6, and synoptic questions that link the units. |
| Unit 1 papers | A **full paper**: 90 minutes, exactly 80 marks, covering all the body systems and ending with levels-marked questions. A **half paper**: 45 minutes, 40 marks. Each paper is freshly assembled, timed and self-marked. |
| Unit 2 set tasks | Three fictional clients (Gareth, Priya and Tom), each with a Part A case study and a 60-mark, 2 h 30 min Part B task: interpreting lifestyle and screening data, recommending modifications and nutrition, and designing and justifying a training programme. |
| Assessment | The unit structure, the Unit 1 and Unit 2 assessment objectives, command words, assignment guides, **Pass/Merit/Distinction criteria trackers** for Units 3 and 6, and a **qualification grade calculator** that uses the official points (P 36, M 52, D 74, D* 90) and the rules for Near Pass. |
| Explorations | 84 interactive explorations, including a joint explorer, a muscle finder, a breathing mechanics model, a heart-rate response model, a PAR-Q screener, a health-monitoring calculator, a resistance load calculator, a training programme planner, a skills audit and SWOT builder, a career development action plan builder, a PST programme planner, a sociogram builder and many sorting tasks. |
| Arcade | Muscle Match, Joint Jam, Method Rush, Reaction Time, and a True or False Blitz. |

The notes, questions, set tasks and mark schemes were written for this app. They are not official Pearson materials.

## Building

The source is in `src/`. Run `python3 build.py` to concatenate it into `index.html` and the root copy `../btec-sport-podium.html`. The build also syntax-checks the JavaScript with Node. `python3 build.py <path>` additionally writes a body fragment for publishing.

The engine is shared with **Stride** (`../eduqas-gcse-pe`) and **Pulse** (`../wjec-pe`). New for Podium:

- BTEC content in `src/data/` (`u1a`–`u1c`, `u2a`–`u2b`, `u3`, `u6a`–`u6b`, `skills`, `assess`, `cases`);
- BTEC diagrams in `diagramsB.js`, explorations in `simsB.js` and calculation generators in `gensB.js`;
- the 80- and 40-mark Unit 1 paper builders and the Unit 2 set-task pages;
- criteria trackers for the internal units and the qualification grade calculator.
