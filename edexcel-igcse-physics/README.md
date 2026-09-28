# Parallax — Pearson Edexcel International GCSE Physics (4PH1)

A self-contained study app for the Pearson Edexcel International GCSE in Physics (4PH1, specification Issue 4), with a Science (Double Award) 4SD0 mode.

**To use it:** download [`../edexcel-igcse-physics-parallax.html`](../edexcel-igcse-physics-parallax.html) (or `index.html` here) and open it in any modern browser. It is one file, needs no server, and stores progress only in that browser.

## Physics or Double Award

- **Physics (default)** shows every statement in the specification, including the bold ‘P’ statements (for example 1.25P). These are marked **P · Physics only** and are examined on Paper 2.
- **Double Award** hides all ‘P’ content, including notes, cards, quiz items, exam questions, equations and practicals, and offers only Paper 1-style practice.

Switch with the qualification chip in the top bar.

## What's inside

| | |
|---|---|
| Topics | 45 topics across the 8 specification topics, plus 2 skills topics; all 195 specification statements (48 ‘P’) |
| Notes | learning notes, 75 step-by-step worked examples, and a common-mistakes list per topic |
| Practice | 279 quiz questions, 356 spaced-repetition flashcards, 117 unlimited calculation generators with worked solutions |
| Exam questions | 102 structured questions in topics (621 marks), plus a **bank of 34 harder exam-style questions** (322 marks): multi-step calculations, data analysis, practical design, synoptic questions and 6-mark extended responses |
| Practice papers | full **Paper 1** (2 h, exactly 110 marks, no ‘P’ content) and **Paper 2** (1 h 15 min, exactly 70 marks, roughly half ‘P’), freshly assembled each time, with a timer and self-marking against the mark schemes; also a quick-fire mock |
| Simulations | 48 interactive simulations, including a Doppler effect, an oscilloscope and an interactive HR diagram |
| Reference | the 23 equations to recall (Appendix 7), the 10 given equations, all 14 practical investigations with method, variables and analysis, and the command words |
| Arcade | 5 physics games |

The notes, questions and mark schemes were written for this app. They are not official Pearson materials. It uses g = 10 N/kg, as the specification does.

## Building

The source is in `src/`. `python3 build.py` concatenates it into `index.html` and the copy at the repository root, and syntax-checks the JavaScript with Node. `python3 build.py <path>` also writes a body fragment for publishing.

The engine is shared with **Live Wire** (`../aqa-gcse-physics`). New for Parallax:

- `src/data/bank.js`: the exam-question bank.
- `src/gens2.js`: refraction, critical angle, oscilloscope, Kelvin, pressure, orbital speed, red-shift and transformer generators.
- `src/diagrams3.js`: new diagrams.
- `src/sims4.js`: the Doppler, oscilloscope and HR diagram sims.

See [`SPEC-AUDIT.md`](SPEC-AUDIT.md) for the statement-by-topic mapping.
