# Specification audit — Edexcel International GCSE Physics 4PH1 (Issue 4)

- **Method:** every numbered statement reference was extracted from the specification text (195 statements, 48 with a ‘P’ suffix). These were compared with the references in the app's topic checklists (`spec[]` in `src/data/t1.js`–`t8.js`).
- **Result:** every statement appears in at least one topic, and none are missing.
- **Scope:** ‘P’ topics and items carry a `po` flag, so they are hidden in Double Award mode. Paper 1 practice papers use no ‘P’ content.

| Spec topic | Statements (P) | App topics |
|---|---|---|
| 1 Forces and motion | 33 (10) | 1.1 Speed, 1.2 Acceleration, 1.3 Forces, 1.4 F = ma and falling, 1.5 Stopping distances, 1.6 Hooke's law, **1.7P Momentum**, **1.8P Moments** |
| 2 Electricity | 28 (7) | 2.1 Mains and safety, 2.2 Power and energy, 2.3 Current, charge and voltage, 2.4 Resistance and I–V, 2.5 Series and parallel, **2.6P Static electricity** |
| 3 Waves | 29 (6) | 3.1 Wave properties, 3.2 Reflection, refraction and Doppler, 3.3 EM spectrum, 3.4 Light, 3.5 TIR and fibres, 3.6 Sound (P parts flagged) |
| 4 Energy resources and energy transfers | 19 (2) | 4.1 Stores and efficiency, 4.2 Thermal transfer, 4.3 Work and power, **4.4P Energy resources** |
| 5 Solids, liquids and gases | 22 (8) | 5.1 Density, 5.2 Pressure, **5.3P Changes of state**, **5.4P Specific heat capacity**, 5.5 Kelvin, 5.6 Gas laws |
| 6 Magnetism and electromagnetism | 20 (7) | 6.1 Magnets, 6.2 Electromagnetism (P parts flagged), 6.3 Motor effect, 6.4 Induction, **6.5P Transformers** |
| 7 Radioactivity and particles | 26 (0) | 7.1 Atoms and radiation, 7.2 Nuclear equations, 7.3 Half-life, 7.4 Uses and dangers, 7.5 Fission, 7.6 Fusion |
| 8 Astrophysics | 18 (8) | 8.1 Motion in the universe, 8.2 Stellar evolution, **8.3P HR diagram**, **8.4P Cosmology** |
| Skills | — | S.1 Experimental skills and command words (Appendix 5), S.2 Maths skills, units and equations |

## Practicals

All 14 practical investigations named in the specification are on the Practicals page:

1.5, 1.22, 2.9, 2.23P, 3.17, 3.19, 3.25P, 3.27P, 4.9, 5.4, 5.11P, 5.14P, 6.6, 7.6.

## Equations

- **Recall list (Appendix 7):** 23 equations. The four ‘P’ ones are momentum, moment, the transformer ratio and VpIp = VsIs.
- **Given list:** 10 equations.

## Assessment

| Paper | Time | Marks | Content |
|---|---|---|---|
| Paper 1 (4PH1/1P, 4SD0/1P) | 2 h | 110 (61.1%) | statements without a ‘P’ |
| Paper 2 (4PH1/2P) | 1 h 15 min | 70 (38.9%) | all content |

Automated tests confirm that generated papers total exactly 110 and 70 marks in both modes.
