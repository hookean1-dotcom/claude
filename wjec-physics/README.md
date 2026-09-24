# Spectra — WJEC A-level Physics

An interactive study app for the **WJEC GCE AS/A level Physics** specification (Wales). Open `index.html` in any modern browser. It is a single self-contained file: no install, no account, and progress is saved in the browser.

Each of the 30 specification topics is drawn as an emission line in your personal spectrum. Lines glow brighter as you master each topic.

## What's inside

| | |
|---|---|
| **Topics** | Units 1–4, all four Unit 4 options (A Alternating Currents, B Medical Physics, C The Physics of Sports, D Energy and the Environment), plus two skills topics (uncertainty, graphs) |
| **Learn** | Structured notes with definitions, to-scale diagrams, key equations, step-by-step worked examples, common mistakes, and a red/amber/green specification checklist |
| **Explore** | 32 interactive simulations: projectiles, collisions, tensile testing, black-body spectra, Particle Forge, drift velocity, I–V curves, internal resistance, waves, stationary waves, double slits, gratings, TIR, photoelectric effect, hydrogen spectra, laser pumping, circular motion, SHM and resonance, kinetic theory, p–V processes, radioactive decay, binding energy, capacitors, field lines, Kepler orbits, galaxy rotation curves, charged particles in B/E fields, electromagnetic induction and RCL circuits |
| **Flashcards** | 370+ cards with Leitner-box spaced repetition |
| **Quiz** | 340+ multiple-choice questions with explanations |
| **Calculate** | 93 question generators: unlimited numerical practice with fresh values and full worked solutions |
| **Exam questions** | 90+ structured questions with mark schemes for self-marking |
| **Also** | Equation sheet and constants, specified practicals guide, arcade games (Unit Sprint, Equation Rush, Powers of Ten, True/False Blitz, Particle Forge), daily challenge, timed mock exams, XP/levels/streaks/badges, search (`/` or `Ctrl+K`), light and dark themes |

## Editing

Source lives in `src/`:

- `data/*.js` — all course content (one file per unit, plus options/skills and practicals)
- `gens.js` — numerical question generators
- `sims1.js`, `sims2.js` — simulations
- `diagrams.js` — SVG diagrams drawn from real functions
- `games.js`, `app.js`, `core.js`, `styles.css`, `shell.html`

Rebuild the single-file app after editing:

```sh
python3 build.py
```

Maths in content strings uses a small markup inside `$…$`: `x^2`, `v_0`, `E_{k max}`, `@frac{a}{b}`, `@sqrt{x}`, `@bar{x}` and `"roman text"`.

## Note on content

The notes, questions and mark schemes were written for this app to follow the WJEC specification and data-booklet conventions. They are not official WJEC materials. Always check the current specification, data booklet and past papers on the WJEC website.
