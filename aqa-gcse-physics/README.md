# Live Wire — AQA GCSE Physics

An interactive study app for the **AQA GCSE Physics (8463)** specification. It also covers the physics content of **Combined Science: Trilogy**. Open `index.html` in any modern browser. It is a single self-contained file: there is nothing to install and no account, and progress is saved in the browser. A copy is also at the repository root as `aqa-gcse-physics-livewire.html`.

The home page is a circuit: one branch per section and one lamp per topic. Each lamp glows brighter as you master its topic.

## Tier and course

On first visit you choose **Foundation or Higher** and **Physics or Combined Science**. You can change this at any time from the chip in the top bar. Everything filters to match your choice:

- Content that is Higher tier only is tagged **Higher**. Content for GCSE Physics only (not Combined Science) is tagged **Physics only**. These tags follow the "(HT only)" and "(physics only)" labels in the specification.
- Foundation hides Higher-only notes, questions, flashcards, calculation generators and equations.
- Combined Science hides physics-only content, including the whole of Section 4.8 Space and required practicals RP2 and RP9.

## What's inside

| | |
|---|---|
| **Topics** | 36 topics across Sections 4.1–4.8, grouped by paper (Paper 1: 4.1–4.4; Paper 2: 4.5–4.8), plus two skills topics (working scientifically; maths, units and graphs) |
| **Learn** | Notes written from the specification, with to-scale diagrams, key equations, worked examples, common mistakes, and a red/amber/green specification checklist |
| **Explore** | 54 interactive simulations, including a Sankey builder, specific heat capacity, I–V characteristics, series/parallel circuits, the plug and the National Grid, density, alpha scattering, half-life and dice, a fission chain reaction, RP6 springs, moments, gears, upthrust, motion graphs, a skydiver, RP7 trolley, stopping distances, momentum, crash safety, the RP8 ripple tank and string, echoes and ultrasound, seismic shadow zones, the EM spectrum, RP9 refraction, the RP10 Leslie cube, lenses, colour filters, black bodies, Earth's energy balance, field lines, solenoids, the motor effect, induction, alternators and dynamos, transformers, the life cycle of a star, orbits and red-shift |
| **Flashcards** | 440+ cards with Leitner-box spaced repetition |
| **Quiz** | 420+ multiple-choice questions with explanations |
| **Calculate** | 104 question generators: unlimited numerical practice with fresh values and full worked solutions, using g = 9.8 N/kg |
| **Exam questions** | 120+ structured questions with mark schemes for self-marking |
| **Equations** | All 23 equations to recall and all 12 from the Physics equation sheet, with a cover-up self-test, units and SI prefixes |
| **Required practicals** | All 10, with variables, method, analysis and tips |
| **Also** | Mock exams (Paper 1, Paper 2 or both), arcade games (Equation Rush, Unit Sprint, Circuit Symbols, Powers of Ten, True/False Blitz), a daily challenge, XP, levels, streaks and badges, search (`/` or `Ctrl+K`), and light and dark themes |

See [`SPEC-AUDIT.md`](SPEC-AUDIT.md) for a topic-by-topic coverage table.

## Editing

The source is in `src/`:

- `data/units.js`: sections and papers
- `data/t1.js` … `data/t8.js`, `data/skills.js`: all course content, with spec points prefixed "(HT)" or "(PO)"
- `data/practicals.js`: required practicals, plus the recall and equation-sheet equations
- `gens.js`: numerical question generators, with Higher/Physics-only flags in `GEN_FLAGS`
- `simcore.js`, `simsA.js`, `simsB.js`, `simsC.js`: simulations (Paper 1; atomic and forces; waves, magnetism and space)
- `diagrams.js`, `diagrams2.js`: SVG diagrams and the circuit-symbol library
- `games.js`, `app.js`, `core.js`, `styles.css`, `shell.html`: the app itself

After editing, rebuild the single-file app:

```
python3 build.py
```

This writes `index.html` here and `../aqa-gcse-physics-livewire.html`, and checks the bundled JavaScript for syntax errors (this needs Node).
