# Specification audit — Proof (WJEC 4523QX)

This file checks the app's coverage against the WJEC Level 3 Alternative Academic Qualification in Food Science and Nutrition (Extended Certificate) specification (2025).

Every spec section maps to at least one topic. The topic's **Learn** tab lists the spec statements it covers as a checklist.

## Assessment facts used

| Unit | Assessment | AO1 | AO2 | AO3 | AO4 | First assessed |
|---|---|---|---|---|---|---|
| Unit 1 | exam, 1 h 30, 80 marks | 18 | 32 | 30 | — | 2027 |
| Unit 2 | NEA, 9 h 30, 100 marks | — | 32 | 28 | 40 | 2027 |
| Unit 3 | exam, 1 h 30, 80 marks | 25 | 37 | 18 | — | 2028 |
| Unit 4 | optional NEA, 12 h, 100 marks | — | 30 | 30 | 40 | 2028 |
| Unit 5 | optional NEA, 12 h, 100 marks | — | 30 | 30 | 40 | 2028 |

- Qualification AO weightings: 12% / 36.4% / 29.4% / 22.2%.
- Exam papers: Section A short answer, Section B extended answer, Section C case study. All questions are compulsory. Graded A–E.

## Notes and corrections

- **Command words:** the spec refers to a separate WJEC Assessment Guide, which was not supplied. The app uses the standard WJEC meanings and says so on the page.
- **Grades:** the grade calculator uses the specification's UMS boundaries (unit a–e at 80/70/60/50/40 out of 100; qualification A*–E at 360/320/280/240/200/160 out of 400).
- **Errors in the WJEC learner notes, corrected in the app rather than copied:**
  - swapped lactose-intolerance table rows;
  - "pancreatic amylase turns starch into amylose" (it produces maltose);
  - soya described as the *only* plant HBV protein (quinoa and others are also complete);
  - "children 6–9 months" (the correct range is 6–59 months).
- **Checked calculations:** all 33 generators were fuzz-tested (300 runs each) for finite, self-consistent answers. Every full practice paper totals exactly 80 marks.

## Unit 1 — Nutritional needs across the life stages

| Topic | Spec | Explorations | Quiz | Cards | Exam |
|---|---|---|---|---|---|
| 1.1 Carbohydrates | 1.1.1–1.1.2 | sugars | 14 | 17 | 5 |
| 1.2 Proteins | 1.1.1–1.1.2 | protein | 12 | 15 | 4 |
| 1.3 Lipids | 1.1.1–1.1.2 | fats | 13 | 16 | 4 |
| 1.4 Vitamins | 1.1.1–1.1.2 | micros | 13 | 15 | 4 |
| 1.5 Minerals, trace elements and water | 1.1.1–1.1.2 | fluid | 14 | 17 | 4 |
| 1.6 Functions of nutrients: growth, energy and metabolism | 1.1.2 | energy | 13 | 15 | 4 |
| 1.7 Digestion and absorption | 1.1.2 | digestion | 12 | 15 | 4 |
| 1.8 Classifying nutrients in food | 1.1.3 | eatwell, gi, label | 13 | 16 | 5 |
| 1.9 Production methods and nutritional value | 1.1.4 | cooking | 13 | 15 | 4 |
| 1.10 Unsatisfactory nutritional intake | 1.2.1 | micros | 12 | 15 | 3 |
| 1.11 Diet-related diseases: obesity, CVD and type 2 diabetes | 1.2.1 | bmi | 12 | 15 | 4 |
| 1.12 Diet-related diseases: teeth, blood, bones, gut, skin and mind | 1.2.1 | teeth | 12 | 15 | 4 |
| 1.13 Nutritional needs of the life stages | 1.2.2 | lifestage | 13 | 16 | 4 |
| 1.14 Medical conditions, culture and dietary support | 1.2.2 | menu | 12 | 15 | 3 |
| 1.15 How situations affect nutritional needs | 1.2.3 | pal | 12 | 15 | 4 |
| 1.16 Planning nutritional programmes | 1.3.1 | planner | 11 | 13 | 4 |

## Unit 2 — Developing practical food production skills

| Topic | Spec | Explorations | Quiz | Cards | Exam |
|---|---|---|---|---|---|
| 2.1 Factors affecting food choice | 2.1.1 | footprint | 9 | 10 | 2 |
| 2.2 The food production process | 2.2.1 | costing | 8 | 9 | 2 |
| 2.3 Planning to create food items | 2.2.2 | gantt | 7 | 8 | 2 |
| 2.4 Preparation and knife skills | 2.2.3 | cuts | 10 | 13 | 2 |
| 2.5 Cooking techniques and presentation | 2.2.3 | probe | 10 | 12 | 2 |
| 2.6 Hygiene practices in food production | 2.2.4 | fridge | 14 | 21 | 2 |
| 2.7 Evaluating food production | 2.3.1–2.3.2 | sensory | 7 | 8 | 2 |

## Unit 3 — Principles of food hygiene and food safety in food production

| Topic | Spec | Explorations | Quiz | Cards | Exam |
|---|---|---|---|---|---|
| 3.1 Properties of micro-organisms | 3.1.1 | microbes | 12 | 13 | 4 |
| 3.2 Conditions for microbial growth | 3.1.2 | growth | 10 | 11 | 3 |
| 3.3 Micro-organisms and food quality | 3.1.3 | spoil | 9 | 11 | 2 |
| 3.4 Preservation and microbial growth | 3.1.4 | preserve | 10 | 10 | 3 |
| 3.5 Food intolerance | 3.2.1 | intol | 10 | 12 | 3 |
| 3.6 Food allergies | 3.2.2 | allergy | 12 | 13 | 3 |
| 3.7 Food poisoning | 3.2.3 | pathogens | 12 | 14 | 4 |
| 3.8 Food safety hazards in different environments | 3.3.1 | spot | 8 | 9 | 2 |
| 3.9 Risk to food safety | 3.3.2 | riskmatrix | 6 | 7 | 2 |
| 3.10 Control measures: hygiene, cleaning and storage | 3.3.3 | fridge | 7 | 9 | 2 |
| 3.11 Food safety legislation and HACCP | 3.3.3 | haccp | 10 | 12 | 4 |

## Unit 4 — Experimenting to solve food production problems

| Topic | Spec | Explorations | Quiz | Cards | Exam |
|---|---|---|---|---|---|
| 4.1 How carbohydrates change | 4.1.1 | gelatinise, sugarstages | 10 | 13 | 2 |
| 4.2 How proteins change | 4.1.1 | eggs, foam | 10 | 12 | 2 |
| 4.3 Colloids, emulsions, sols and gels | 4.1.1 | emulsion, gel | 10 | 12 | 2 |
| 4.4 Variables that affect physical properties | 4.1.2 | yeast, browning | 9 | 10 | 2 |
| 4.5 Food production problems | 4.2.1 | swap | 7 | 8 | 2 |
| 4.6 Practical options to solve production problems | 4.2.2 | swap, ratio | 10 | 12 | 2 |
| 4.7 Scientific investigation: methods, stages and success criteria | 4.3.1–4.3.3 | fairtest | 8 | 10 | 2 |
| 4.8 Carrying out investigations and data analysis | 4.3.4–4.3.5 | stats, regression | 10 | 11 | 2 |
| 4.9 Presenting findings | 4.3.6 | charts | 5 | 6 | 1 |

## Unit 5 — Current issues in food science and nutrition

| Topic | Spec | Explorations | Quiz | Cards | Exam |
|---|---|---|---|---|---|
| 5.1 Current issues: sustainability, health, diet and the economy | 5.1.1 | issues, footprint | 8 | 12 | 2 |
| 5.2 Current issues: technology, media, society and ethics | 5.1.1 | stakeholders | 7 | 10 | 2 |
| 5.3 Research methods | 5.2.1 | methods, craap | 8 | 11 | 2 |
| 5.4 Stages of research and carrying it out ethically | 5.2.2–5.2.3 | sampling, questions | 7 | 10 | 2 |
| 5.5 Analysing research data and presenting findings | 5.2.4–5.2.5 | stats, charts | 6 | 8 | 1 |
| 5.6 Reflecting on research | 5.3.1 | reflect | 6 | 8 | 2 |

## Skills — Exam technique and food maths

| Topic | Spec | Explorations | Quiz | Cards | Exam |
|---|---|---|---|---|---|
| S.1 Command words and assessment objectives | Assessment | command | 8 | 22 | 1 |
| S.2 Extended answers and case studies | Assessment |  | 4 | 5 | 0 |
| S.3 Food maths | Maths | calc | 8 | 10 | 2 |
