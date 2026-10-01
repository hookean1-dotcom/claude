# Pulse — WJEC GCE AS/A level Physical Education

A self-contained study app for the WJEC GCE AS and A level in Physical Education (teaching from 2016, specification version 2, March 2019).

**To use it:** download [`../wjec-pe-pulse.html`](../wjec-pe-pulse.html) (or `index.html` here) and open it in any modern browser. It is a single file that needs no server, and it saves progress only in that browser.

## AS or full A level

- **Full A level** (the default) shows Units 1–4. Unit 3 can assess any A level content.
- **AS only** hides the A2 topics, questions and the Unit 3 paper.

Switch with the chip in the top bar.

## What's inside

| | |
|---|---|
| Topics | 47 topics. Unit 1 has 18 topics and Unit 3 has 23, across the four areas of study (exercise physiology and training, including biomechanics; sport psychology; skill acquisition; sport and society). There are also 4 NEA guides (Units 2 and 4) and 2 skills topics. |
| Notes | Notes for each topic with 55 diagrams, 61 worked answers, common mistakes and a specification checklist. |
| Practice | 354 quiz questions, 528 spaced-repetition flashcards, and 47 calculation generators with worked solutions. The generators cover fitness data, cardiac output, ventilation, Karvonen, hydration, F = ma, momentum, impulse, angular momentum, projectiles and Hick's law. |
| Exam questions | 141 structured questions (746 marks), including 42 **levels-marked** extended parts. You self-mark these with band descriptors, as a WJEC examiner would. Synoptic questions link the areas of study. |
| Practice papers | **Unit 1**: 1¾ hours, exactly 72 marks, including multiple choice. **Unit 3**: 2 hours, exactly 90 marks, mostly A2 with synoptic AS questions. Each paper is freshly assembled, timed and self-marked. |
| Explorations | 64 interactive explorations, including a notational-analysis coding task, a lever lab, fibre recruitment, energy systems through a race, lactate threshold, cardiac output, the vascular shunt, force–time graphs, angular momentum, a projectile launcher, the Magnus effect, drag, Ringelmann, and a real reaction-time test that plots Hick's law. |
| Assessment | Units, AOs, command words, NEA guides, and a UMS grade calculator using the boundaries in specification §4.2 (including A*). |
| Arcade | Muscle Match, Plane & Axis, Attribution Rush, Reaction Time, and a True or False Blitz. |

The notes, questions, papers and mark schemes were written for this app. They are not official WJEC materials.

## Building

The source is in `src/`. Run `python3 build.py` to concatenate it into `index.html` and the root copy `../wjec-pe-pulse.html`. The build also syntax-checks the JavaScript with Node. `python3 build.py <path>` additionally writes a body fragment for publishing.

The engine is shared with **Proof** (`../food-science`), and the structured-question and paper system comes from **Parallax** (`../edexcel-igcse-physics`). New for Pulse:

- the AS/A level scope;
- area-of-study lanes, and the running-track progress map on the home page;
- levels-marked extended answers with band and mark pickers;
- exact 72/90-mark paper builders;
- the UMS calculator.

See [`SPEC-AUDIT.md`](SPEC-AUDIT.md) for how each part of the specification maps to topics.
