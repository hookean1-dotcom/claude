/* ==========================================================
   UNIT 3 · PROFESSIONAL DEVELOPMENT IN THE SPORTS INDUSTRY (internal)
   A Careers · B Skills audit and action plan · C Recruitment · D Reflection
   ========================================================== */
TOPICS.push({
  id: '3.1', unit: '3', area: 'prof', ref: 'A1 Scope and provision of the sports industry', title: 'Scope and provision of the sports industry', short: 'Size and economic significance; geographical, socio-economic and seasonal factors',
  summary: 'The size, breadth and geographic spread of the sports industry locally and nationally, its economic significance and number of jobs, and the factors that affect sports provision and employment: geographical (location, environment, infrastructure, population), socio-economic (wealth, employment, history, culture, fashion and trends) and seasonal factors.',
  spec: [
    'Sport and recreation industry data, economic significance, number of jobs',
    'Geographical factors: location, environment, infrastructure, population',
    'Socio-economic factors: wealth, employment, history, culture, fashion and trend',
    'Seasonal factors, e.g. outdoor pools, summer camps, holiday clubs, competition seasons, training camps'
  ],
  learn: [
    { h: 'Size and significance', html: `
<p>Sport and physical activity is one of the UK’s largest service industries. Typical figures quoted by sector bodies: sport contributes tens of billions of pounds a year to the economy (around 2% of GVA) and supports roughly <b>half a million to 600 000 jobs</b> in sport, leisure and fitness — in gyms, leisure centres, clubs, governing bodies, schools, sports retail, events, media and sports science. Millions more volunteer.</p>
<div class="box tip"><b class="lbl">For your assignment</b><p>Find <i>current</i> figures (e.g. from CIMSPA, Sport England, Sport Wales, UK Active, DCMS) and give <b>local</b> examples — employers in your town or region — as well as national ones. Always reference your sources.</p></div>` },
    { h: 'Factors affecting provision and jobs', html: `
<div class="tbl"><table><tr><th>Factor</th><th>Examples of its effect</th></tr>
<tr><td><b>Geographical</b> — location, environment, infrastructure, population</td><td>coastal areas support surf schools and sailing; mountains support outdoor centres; cities have more gyms, clubs and stadium jobs; good transport links make facilities viable; a large or growing population supports more provision</td></tr>
<tr><td><b>Socio-economic</b> — wealth, employment, history, culture, fashion and trend</td><td>wealthier areas support private gyms and golf clubs; high unemployment may reduce spending but increase public-sector schemes; history and culture (e.g. rugby in South Wales, cricket in Yorkshire) shape clubs and jobs; fashions and trends create new jobs (e.g. boutique HIIT studios, padel, esports, wearable tech)</td></tr>
<tr><td><b>Seasonal</b></td><td>outdoor swimming pools open only in summer; summer sports camps and holiday clubs; competition seasons (football, cricket); winter ski instructor jobs; pre-season training camps — leading to seasonal, part-time and fixed-term contracts</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain how geographical factors could affect sports employment in a coastal town. (2 marks)', s: ['The environment (sea, beaches) supports water-sports businesses such as surf schools and sailing clubs.', 'These create jobs such as instructors and lifeguards, often seasonal in summer.'], a: 'Environment → water-sports jobs, often seasonal.' },
    { q: 'Give an example of how a fashion or trend has created sports jobs. (1 mark)', s: ['e.g. the growth of boutique fitness studios / padel / CrossFit creating instructor and coach roles.'], a: 'Any valid current trend.' }
  ],
  pitfalls: ['Giving only national examples when the criteria ask for local and national.', 'Quoting statistics without a source or date.', 'Listing factors without explaining their effect on jobs and provision.', 'Confusing geographical factors with socio-economic ones.'],
  cards: [
    ['Four geographical factors?', 'Location, environment, infrastructure, population.'], ['Socio-economic factors?', 'Wealth, employment, history, culture, fashion and trend.'], ['Seasonal factor example?', 'Outdoor pools in summer; holiday camps; competition seasons.'],
    ['Why do seasonal factors matter for employment?', 'Many jobs are seasonal, part-time or fixed-term.'], ['Sources of sports industry data?', 'CIMSPA, Sport England, Sport Wales, UK Active, DCMS.'],
    ['Three socio-economic factors affecting provision?', 'Wealth, history/culture, trends and fashion.']
  ],
  quiz: [
    { q: 'A ski resort hiring instructors only in winter is an example of…', o: ['a seasonal factor', 'a socio-economic factor', 'safeguarding', 'CPD'], x: 'Seasonal.' },
    { q: 'Good road and rail links are part of…', o: ['infrastructure', 'culture', 'wealth', 'fashion'], x: 'Geographical.' },
    { q: 'A strong rugby tradition in a region is a…', o: ['history/culture factor', 'seasonal factor', 'legislation', 'CPD route'], x: 'Socio-economic.' },
    { q: 'Wealthy areas are more likely to support…', o: ['private health clubs', 'no sport at all', 'only public pools', 'fewer jobs'], x: 'Wealth.' },
    { q: 'The rise of padel creating new coaching jobs is an example of…', o: ['fashion and trend', 'environment', 'safeguarding', 'population decline'], x: 'Trend.' },
    { q: 'Which is an example of a seasonal factor affecting provision?', o: ['An outdoor lido that opens only in summer', 'A gym in a city centre', 'A golf club in a wealthy area', 'A surf school near the sea'], x: 'Season.' },
    { q: 'Growth in padel courts is best explained by…', o: ['trend and fashion', 'geography', 'season', 'legislation'], x: 'Socio-economic factor.' }
  ],
  exam: [
    { q: 'Explain how two socio-economic factors can affect sports provision in an area. [4]', m: 4, tag: 'nea', ms: ['wealth — affluent areas support private clubs/gyms/golf', 'so more private-sector jobs; deprived areas rely on public provision', 'history/culture — traditional sports have strong clubs (e.g. rugby in Wales)', 'creates coaching, club and development jobs in those sports', 'fashion/trends — new activities create new facilities and jobs'] },
    { q: 'Assess how geographical, socio-economic and seasonal factors affect job opportunities in the sports industry in a named area. [6]', m: 6, lv: true, tag: 'nea', ms: ['named local area and real examples', 'geographical: location, environment (coast, hills), infrastructure, population size', 'socio-economic: wealth, employment levels, history and culture, trends', 'seasonal: summer/winter jobs, holiday camps, competition seasons — temporary contracts', 'links between factors (e.g. tourism + environment + season)', 'judgement on which factor has most influence, with evidence/data'] }
  ],
  sims: ['factorsort'], gens: []
});

TOPICS.push({
  id: '3.2', unit: '3', area: 'prof', ref: 'A2 Careers and jobs in the sports industry', title: 'Careers, sectors and types of employment', short: 'Pathways; public, private, voluntary, third sector; full-time to zero-hours and apprenticeships',
  summary: 'The key career pathways in the sports industry — coaching, sports science, sports development, leisure management, education and sports journalism; the sectors (public, private, voluntary, third sector, public/private partnerships) and local and national employers; sources of careers information; and types of employment from full-time to zero-hours contracts and apprenticeships.',
  spec: [
    'Key pathways: coaching, sports science (nutritionist, sport psychology, sports therapy and injury management, exercise and fitness), sports development (SDOs, NGB officers, administrators), leisure management (facility management, grounds keeping, activity coordinator), education, sports journalism',
    'Sectors: public, private, voluntary, third sector, public/private partnerships; local and national employers',
    'Sources of information on careers in sport',
    'Types of employment: full time, part time, fixed-term contract, self-employment (independent, subcontracted), zero-hours contract, apprenticeships'
  ],
  learn: [
    { h: 'Career pathways', html: `
<div class="tbl"><table><tr><th>Pathway</th><th>Example jobs</th></tr>
<tr><td><b>Coaching</b></td><td>community coach, club coach, academy coach, performance coach, disability sport coach</td></tr>
<tr><td><b>Sports science</b></td><td>sports nutritionist, sport psychologist, sports therapist, physiotherapist, strength and conditioning coach, exercise physiologist, personal trainer / fitness instructor</td></tr>
<tr><td><b>Sports development</b></td><td>sports development officer (SDO), NGB development officer, club development officer, sports administrator, talent pathway lead</td></tr>
<tr><td><b>Leisure management</b></td><td>duty manager, facility/centre manager, lifeguard, groundsperson, activity coordinator, marketing officer</td></tr>
<tr><td><b>Education</b></td><td>PE teacher, sports lecturer, teaching assistant, school sport coordinator</td></tr>
<tr><td><b>Sports journalism</b></td><td>reporter, broadcaster, commentator, digital content creator, photographer</td></tr></table></div>` },
    { h: 'Sectors', html: `
<div class="tbl"><table><tr><th>Sector</th><th>Main aim</th><th>Examples</th></tr>
<tr><td><b>Public</b></td><td>provide services for the community; funded by taxes/government</td><td>council leisure centres, schools, Sport England, Sport Wales, UK Sport</td></tr>
<tr><td><b>Private</b></td><td>make a profit for owners/shareholders</td><td>commercial gyms (PureGym, David Lloyd), professional clubs, sports retailers</td></tr>
<tr><td><b>Voluntary</b></td><td>run by members and volunteers for the love of the sport</td><td>local football, rugby and athletics clubs</td></tr>
<tr><td><b>Third sector</b></td><td>not-for-profit organisations, charities and social enterprises that reinvest profits</td><td>leisure trusts (e.g. GLL / “Better”), sports charities (Youth Sport Trust, StreetGames)</td></tr>
<tr><td><b>Public/private partnerships</b></td><td>a council works with a private company to build or run facilities</td><td>a private company managing council-owned leisure centres</td></tr></table></div>
<p><b>Sources of careers information</b>: job sites and employers’ websites, CIMSPA, NGB websites, UK Coaching, National Careers Service, UCAS, careers advisers, social media, networking and work experience.</p>` },
    { h: 'Types of employment', html: `
<div class="tbl"><table><tr><th>Type</th><th>Meaning</th><th>Sport example</th></tr>
<tr><td><b>Full time</b></td><td>≈ 35–40 hours a week, permanent, with benefits (holiday pay, pension)</td><td>leisure centre duty manager</td></tr>
<tr><td><b>Part time</b></td><td>fewer hours than full time, regular pattern</td><td>weekend lifeguard</td></tr>
<tr><td><b>Fixed-term contract</b></td><td>employed for a set period or project</td><td>summer camp coach; 2-year funded development officer post</td></tr>
<tr><td><b>Self-employment</b> — independent or subcontracted</td><td>works for themselves, invoices clients; independent (own business) or subcontracted (paid by another organisation per job)</td><td>personal trainer renting space in a gym; coach subcontracted to deliver school sessions</td></tr>
<tr><td><b>Zero-hours contract</b></td><td>no guaranteed hours; works when offered</td><td>casual fitness class instructor, event steward</td></tr>
<tr><td><b>Apprenticeship</b></td><td>paid job with training towards a qualification</td><td>Level 3 Community Sports and Health Officer apprenticeship; leisure team member</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain the difference between the public and private sectors. (2 marks)', s: ['The public sector provides services for the community, funded by government/taxes (e.g. council leisure centres).', 'The private sector aims to make a profit (e.g. commercial gyms).'], a: 'Public = community service/tax-funded; private = profit.' },
    { q: 'Give one advantage and one disadvantage of a zero-hours contract for a fitness instructor. (2 marks)', s: ['Advantage: flexibility to choose when to work / fit around study.', 'Disadvantage: no guaranteed hours or income; fewer benefits.'], a: 'Flexibility v insecurity.' }
  ],
  pitfalls: ['Confusing voluntary (run by volunteers/members) with third sector (not-for-profit organisations and charities).', 'Describing self-employment without independent/subcontracted.', 'Giving only national employers — include local ones.', 'Listing jobs without linking them to a pathway.'],
  cards: [
    ['Six key pathways?', 'Coaching, sports science, sports development, leisure management, education, sports journalism.'], ['Public sector?', 'Government/tax-funded community services — council leisure centres, schools.'], ['Private sector?', 'Profit-making — commercial gyms, pro clubs.'],
    ['Voluntary sector?', 'Member/volunteer-run clubs.'], ['Third sector?', 'Not-for-profit trusts, charities, social enterprises.'], ['Public/private partnership?', 'Council and private company working together on facilities.'],
    ['Zero-hours contract?', 'No guaranteed hours.'], ['Fixed-term contract?', 'Employment for a set period.'], ['Subcontracted self-employment?', 'Self-employed but paid by another organisation per job.'], ['Apprenticeship?', 'Paid job with training towards a qualification.']
  ],
  quiz: [
    { q: 'A council-run leisure centre is in the…', o: ['public sector', 'private sector', 'voluntary sector', 'third sector only'], x: 'Tax-funded.' },
    { q: 'A charity such as StreetGames is part of the…', o: ['third sector', 'private sector', 'public sector', 'voluntary club sector only'], x: 'Not-for-profit.' },
    { q: 'An employment contract with no guaranteed hours is…', o: ['zero-hours', 'full time', 'fixed term', 'apprenticeship'], x: 'Casual.' },
    { q: 'A sports development officer belongs to which pathway?', o: ['Sports development', 'Sports journalism', 'Sports science', 'Education'], x: 'SDO.' },
    { q: 'A personal trainer paid by a gym chain per session but self-employed is…', o: ['subcontracted', 'zero-hours employed', 'an apprentice', 'public sector'], x: 'Self-employed subcontractor.' },
    { q: 'The main aim of the private sector is…', o: ['to make a profit', 'to provide free services', 'to rely on volunteers', 'to fund charities'], x: 'Profit.' }
  ],
  exam: [
    { q: 'Describe two types of employment in the sports industry, giving an example of each. [4]', m: 4, tag: 'nea', ms: ['full time — permanent ≈ 35–40 h/week, e.g. duty manager', 'part time — fewer hours, e.g. weekend lifeguard', 'fixed term — set period, e.g. summer camp coach', 'self-employed — e.g. personal trainer; zero-hours — e.g. casual instructor; apprenticeship — paid training'] },
    { q: 'Compare two contrasting career pathways in the sports industry, including sectors, types of employment and job opportunities locally and nationally. [8]', m: 8, lv: true, tag: 'nea', ms: ['two contrasting pathways named, e.g. coaching v leisure management', 'job roles in each and progression routes', 'sectors: public/private/voluntary/third, with local and national employers named', 'types of employment typical of each (e.g. self-employed coaches, zero-hours; full-time managers)', 'entry requirements and qualifications', 'short- and long-term prospects; salaries; demand', 'comparison drawing out similarities and differences', 'conclusion / justification of the preferred pathway'] }
  ],
  sims: ['sectorsort', 'jobtypes'], gens: []
});

TOPICS.push({
  id: '3.3', unit: '3', area: 'prof', ref: 'A3 Professional training routes, legislation and skills', title: 'Training routes, standards, safeguarding and professional bodies', short: 'Progression routes; job descriptions and person specifications; DBS; codes of practice; legislation; CIMSPA, REPs, UK Coaching, NGBs, AALA',
  summary: 'Professional training routes and progression in each career pathway; job descriptions and person specifications; industry standards — safeguarding and the Disclosure and Barring Service (DBS), codes of practice, organisational policies; sector-specific legislation; and qualification and professional bodies such as CIMSPA, REPs, UK Coaching (Sports Coach UK), NGBs and the AALA.',
  spec: [
    'Career pathways: progression routes and successive jobs in coaching, sports science, sports development, leisure management, education',
    'Job descriptions and person specifications',
    'Industry standards: safeguarding (DBS), codes of practice (e.g. REPs, Sports Coach UK), organisational policies and procedures',
    'Safeguarding — DBS: self-disclosure, enhanced disclosure, regulations and requirements',
    'Sector-specific legislation that impacts on job roles',
    'Qualification and professional bodies: REPs, Sports Coach UK, Minimum Standards for Active Coaches, NGBs, CIMSPA, AALA'
  ],
  learn: [
    { h: 'Progression routes', html: `
<div class="tbl"><table><tr><th>Pathway</th><th>Typical progression</th></tr>
<tr><td>Coaching</td><td>volunteer/assistant coach → NGB Level 1 → Level 2 (lead sessions) → Level 3/4 (performance) → head coach; plus disability sport, working with children, safeguarding awareness, first aid</td></tr>
<tr><td>Sports science</td><td>Level 3 → degree (BSc Sport and Exercise Science, Sports Therapy, Nutrition) → MSc → accreditation (e.g. BASES, HCPC for physiotherapists) → specialist/lead practitioner</td></tr>
<tr><td>Fitness</td><td>Level 2 Gym Instructor → Level 3 Personal Trainer → Level 4 specialist (e.g. obesity and diabetes, lower back pain)</td></tr>
<tr><td>Sports development</td><td>community coach / activator → sports development officer → senior SDO / NGB lead → head of sport</td></tr>
<tr><td>Leisure management</td><td>leisure assistant + National Pool Lifeguard Qualification → supervisor → duty manager → general manager (with health and safety, customer service, marketing, finance training)</td></tr>
<tr><td>Education</td><td>Level 3 → degree → PGCE/QTS → PE teacher → head of department</td></tr></table></div>` },
    { h: 'Job descriptions and person specifications', html: `
<div class="tbl"><table><tr><th>Document</th><th>Contains</th></tr>
<tr><td><b>Job description</b></td><td>job title, location, who you report to, main purpose, duties and responsibilities, hours, salary and benefits</td></tr>
<tr><td><b>Person specification</b></td><td>the qualifications, experience, skills, knowledge and personal qualities required — split into <b>essential</b> and <b>desirable</b> criteria</td></tr></table></div>` },
    { h: 'Standards, safeguarding and legislation', html: `
<ul><li><b>Safeguarding</b>: protecting children and vulnerable adults from harm. Anyone working with them must follow safeguarding policies and complete training.</li>
<li><b>DBS checks</b> (Disclosure and Barring Service): a <b>basic</b> check shows unspent convictions; a <b>standard</b> check shows spent and unspent convictions and cautions; an <b>enhanced</b> check also includes relevant police information and, where needed, a check of the <b>barred lists</b> — required for regulated activity with children or vulnerable adults. <b>Self-disclosure</b>: applicants declare any convictions on a form before the check.</li>
<li><b>Codes of practice</b>: professional standards of conduct — e.g. the UK Coaching code, CIMSPA professional standards, REPs code of ethical practice.</li>
<li><b>Organisational policies and procedures</b>: safeguarding, health and safety, equal opportunities, data protection, emergency procedures.</li>
<li><b>Sector-specific legislation</b>: Health and Safety at Work Act 1974; Equality Act 2010; Children Act 1989/2004; Safeguarding Vulnerable Groups Act 2006; Data Protection Act 2018; Activity Centres (Young Persons’ Safety) Act 1995 (led to the AALA).</li></ul>
<div class="tbl"><table><tr><th>Body</th><th>Role</th></tr>
<tr><td><b>CIMSPA</b> (Chartered Institute for the Management of Sport and Physical Activity)</td><td>the professional development body for the sector — sets professional standards, endorses qualifications, membership and CPD</td></tr>
<tr><td><b>REPs</b> (Register of Exercise Professionals)</td><td>formerly the register for fitness professionals with a code of ethical practice (its role has largely passed to CIMSPA)</td></tr>
<tr><td><b>UK Coaching</b> (formerly Sports Coach UK)</td><td>supports and develops coaches; Minimum Standards for Active Coaches; resources and CPD</td></tr>
<tr><td><b>NGBs</b> (national governing bodies, e.g. the FA, WRU, England Netball)</td><td>run coaching awards and officiating qualifications; licence coaches</td></tr>
<tr><td><b>AALA</b> (Adventure Activities Licensing Authority)</td><td>inspects and licenses providers of adventure activities for under-18s</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why a coach working with children needs an enhanced DBS check. (2 marks)', s: ['Coaching children is regulated activity, so the employer must check for relevant convictions, cautions and police information and the children’s barred list.', 'This safeguards children from people who may pose a risk.'], a: 'Regulated activity → enhanced check with barred list → safeguarding.' },
    { q: 'What is the difference between essential and desirable criteria in a person specification? (2 marks)', s: ['Essential criteria are the minimum requirements a candidate must have to be appointed.', 'Desirable criteria are extra qualities that would be helpful and are used to choose between candidates.'], a: 'Must have v nice to have.' }
  ],
  pitfalls: ['Confusing a job description (the job) with a person specification (the person).', 'Saying a basic DBS check is enough for coaching children.', 'Not naming specific bodies and qualifications for your chosen pathway.', 'Getting acronyms wrong (CIMSPA, AALA, NGB).'],
  cards: [
    ['Job description?', 'Title, purpose, duties, hours, salary, reporting lines.'], ['Person specification?', 'Essential and desirable qualifications, skills, experience and qualities.'], ['DBS?', 'Disclosure and Barring Service — criminal record checks.'],
    ['Enhanced DBS?', 'Includes police information and barred lists — for regulated activity.'], ['Self-disclosure?', 'Applicant declares convictions before the check.'], ['CIMSPA?', 'Chartered Institute for the Management of Sport and Physical Activity — professional body.'],
    ['UK Coaching?', 'Formerly Sports Coach UK — supports coaches.'], ['AALA?', 'Adventure Activities Licensing Authority.'], ['NGB?', 'National governing body — e.g. the FA; runs coaching awards.'], ['Key legislation?', 'HASAWA 1974, Equality Act 2010, Children Act, Data Protection Act 2018.']
  ],
  quiz: [
    { q: 'Which document lists essential and desirable criteria?', o: ['Person specification', 'Job description', 'Job advert only', 'CV'], x: 'About the person.' },
    { q: 'A coach of under-12s needs which DBS check?', o: ['Enhanced (with barred list)', 'Basic', 'None', 'Standard only'], x: 'Regulated activity.' },
    { q: 'The body that licenses adventure activity providers is…', o: ['AALA', 'CIMSPA', 'UK Sport', 'REPs'], x: 'Adventure Activities Licensing Authority.' },
    { q: 'The FA and WRU are examples of…', o: ['national governing bodies', 'third-sector charities', 'leisure trusts', 'DBS services'], x: 'NGBs.' },
    { q: 'Which Act requires employers to provide a safe working environment?', o: ['Health and Safety at Work Act 1974', 'Equality Act 2010', 'Data Protection Act 2018', 'Children Act 1989'], x: 'HASAWA.' },
    { q: 'The professional development body for the sport and physical activity sector is…', o: ['CIMSPA', 'AALA', 'DBS', 'WADA'], x: 'Chartered institute.' }
  ],
  exam: [
    { q: 'Describe the purpose of a person specification. [2]', m: 2, tag: 'nea', ms: ['lists the qualifications, skills, experience and qualities needed for the job', 'split into essential and desirable criteria — used to shortlist candidates'] },
    { q: 'Explain the development pathway into a selected career in the sports industry. [6]', m: 6, lv: true, tag: 'nea', ms: ['named career and entry-level job', 'qualifications and training route (e.g. Level 3 → degree / NGB awards / gym instructor → PT)', 'industry standards: DBS, first aid, safeguarding, codes of practice', 'relevant professional bodies (CIMSPA, UK Coaching, NGB, BASES)', 'experience: volunteering, work placements', 'progression and successive jobs; CPD to stay qualified'] }
  ],
  sims: ['dbsquiz', 'bodymatch'], gens: []
});

TOPICS.push({
  id: '3.4', unit: '3', area: 'prof', ref: 'A4 Sources of continuing professional development', title: 'Continuing professional development (CPD)', short: 'Professional body membership, CPD logs, required updates, progression training, cross-sector experience',
  summary: 'How professionals in sport maintain and develop their competence: membership of professional bodies (fees, qualifications, CPD logs), required updates (first aid, safeguarding), career progression training (sector-specific, higher-level, management, higher education — FdSc, BA, BSc), and gaining experience through cross-sector opportunities.',
  spec: [
    'Memberships of professional bodies: fees, qualification, logs of CPD',
    'Required updates to professional competences, e.g. first aid, safeguarding',
    'Career progression training: sector specific, higher levels of qualification, management training, business or generic management, higher education (FdSc, BA, BSc)',
    'Gaining knowledge and experience through cross-sector opportunities, e.g. board working groups, elite performance programmes'
  ],
  learn: [
    { h: 'What CPD is and why it matters', html: `
<p><b>Continuing professional development (CPD)</b> is the ongoing learning professionals do to keep their knowledge and skills up to date and to progress. It maintains safe, high-quality practice, keeps memberships and licences valid, and opens promotion opportunities.</p>
<div class="tbl"><table><tr><th>Source</th><th>Examples</th></tr>
<tr><td><b>Professional body membership</b></td><td>CIMSPA, UK Coaching, BASES — annual <b>fees</b>, required <b>qualifications</b>, and a <b>CPD log</b> recording hours/points of learning each year</td></tr>
<tr><td><b>Required updates</b></td><td><b>first aid</b> (usually renewed every 3 years), <b>safeguarding</b> (often every 2–3 years), DBS renewal, lifeguard qualification renewal, NGB licence updates</td></tr>
<tr><td><b>Career progression training</b></td><td>sector-specific higher-level qualifications (e.g. Level 4 strength and conditioning); management training (sector-specific or generic business management); higher education — <b>FdSc</b>, <b>BA</b>, <b>BSc</b>, MSc</td></tr>
<tr><td><b>Cross-sector opportunities</b></td><td>sitting on a board or working group, volunteering at major events, shadowing on an elite performance programme, workshops and conferences</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Give two examples of required updates for a swimming coach. (2 marks)', s: ['First aid certificate renewal.', 'Safeguarding training and DBS renewal (and lifeguard/pool safety qualification).'], a: 'First aid; safeguarding/DBS.' }
  ],
  pitfalls: ['Defining CPD only as “going on courses” — it includes logs, memberships, experience and reflection.', 'Forgetting that some qualifications expire (first aid, safeguarding).', 'Not linking CPD to promotion or specialism in your chosen pathway.'],
  cards: [
    ['CPD?', 'Continuing professional development — ongoing learning to maintain and develop competence.'], ['CPD log?', 'Record of learning activities/points for a professional body.'], ['Required updates?', 'First aid, safeguarding, DBS, licences.'],
    ['Higher education routes?', 'FdSc, BA, BSc, MSc.'], ['Cross-sector CPD?', 'Board/working groups, elite programmes, major event volunteering.'],
    ['Examples of required updates?', 'First aid, safeguarding, DBS renewal.']
  ],
  quiz: [
    { q: 'Renewing a first aid certificate every three years is an example of…', o: ['a required update', 'a person specification', 'a zero-hours contract', 'a SWOT analysis'], x: 'CPD.' },
    { q: 'A record of learning kept for a professional body is a…', o: ['CPD log', 'job description', 'DBS check', 'CDAP milestone'], x: 'Log.' },
    { q: 'An FdSc is a…', o: ['foundation degree', 'coaching licence', 'first aid award', 'DBS level'], x: 'Higher education.' },
    { q: 'Shadowing staff on an elite performance programme is…', o: ['a cross-sector CPD opportunity', 'self-disclosure', 'a zero-hours contract', 'a person specification'], x: 'Experience.' },
    { q: 'Renewing a first aid certificate is an example of…', o: ['a required update', 'cross-sector experience', 'higher education', 'professional body membership'], x: 'Required to keep working.' },
    { q: 'Why is CPD important for a sports professional?', o: ['It keeps knowledge and qualifications current and supports progression', 'It replaces the need for a DBS check', 'It is only for managers', 'It shortens the working week'], x: 'Currency and progression.' },
    { q: 'A CPD log is most associated with…', o: ['membership of a professional body such as CIMSPA', 'an application form', 'a person specification', 'a job advert'], x: 'Evidence of CPD.' }
  ],
  exam: [
    { q: 'Analyse the professional development requirements and opportunities for promotion in two career pathways. [6]', m: 6, lv: true, tag: 'nea', ms: ['two named pathways', 'professional body membership and CPD logs (e.g. CIMSPA, UK Coaching)', 'required updates — first aid, safeguarding, DBS, licences', 'progression training — higher NGB awards, Level 4 qualifications, management training, degrees', 'opportunities for specialism or promotion (e.g. head coach, duty → general manager)', 'analysis comparing the two pathways and reasoned conclusions'] }
  ],
  sims: ['cpdsort'], gens: []
});

TOPICS.push({
  id: '3.5', unit: '3', area: 'prof', ref: 'B1 Personal skills audit', title: 'Personal skills audit and SWOT', short: 'Interests, qualities, basic skills, experience, qualifications, employability and technical skills; SWOT',
  summary: 'How to produce a personal skills audit against a chosen career pathway: interests and accomplishments, qualities (reliability, organisation, commitment, resilience, empathy), basic skills (literacy, numeracy, IT), experience, qualifications, generic employability skills and specific technical skills — and how to use a SWOT analysis.',
  spec: [
    'Interests and accomplishments',
    'Qualities: reliability, organisational skills, commitment, resilience, empathy',
    'Basic skills: literacy, numeracy, IT',
    'Experience (sporting, leadership, work, travel); qualifications (educational and sector specific)',
    'Generic employability skills: teamwork, cooperation, communication, problem solving',
    'Specific technical skills: coaching, instructing, leading, administering test protocols',
    'Using SWOT analysis'
  ],
  learn: [
    { h: 'The skills audit', html: `
<p>A <b>skills audit</b> rates your current skills against those needed for your chosen career (often on a 1–5 scale), with evidence for each rating.</p>
<div class="tbl"><table><tr><th>Area</th><th>Examples</th></tr>
<tr><td>Interests and accomplishments</td><td>sports played, awards, achievements</td></tr>
<tr><td>Qualities</td><td>reliability, organisational skills, commitment, resilience, empathy</td></tr>
<tr><td>Basic skills</td><td>literacy, numeracy, IT</td></tr>
<tr><td>Experience</td><td>sporting, leadership, work, travel, volunteering</td></tr>
<tr><td>Qualifications</td><td>GCSEs, BTEC; sector-specific (NGB Level 1, first aid)</td></tr>
<tr><td>Generic employability skills</td><td>teamwork, cooperation, communication, problem solving</td></tr>
<tr><td>Specific technical skills</td><td>coaching, instructing, leading, administering fitness test protocols</td></tr></table></div>` },
    { h: 'SWOT analysis', html: `
<div class="tbl"><table><tr><th></th><th>Helpful</th><th>Harmful</th></tr>
<tr><td><b>Internal</b> (you)</td><td><b>Strengths</b> — e.g. good communicator, NGB Level 1 coach</td><td><b>Weaknesses</b> — e.g. limited experience with disability groups; nervous presenting</td></tr>
<tr><td><b>External</b> (environment)</td><td><b>Opportunities</b> — e.g. local club needs volunteer coaches; holiday camp jobs; apprenticeship</td><td><b>Threats</b> — e.g. competition for jobs; cost of courses; travel</td></tr></table></div>
<p>A good SWOT uses evidence (feedback, results) and leads to actions: build on strengths, address weaknesses, take opportunities, plan around threats.</p>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain the difference between a weakness and a threat in a SWOT analysis. (2 marks)', s: ['A weakness is internal — something about you that needs development (e.g. lack of coaching experience).', 'A threat is external — something outside your control that could hold you back (e.g. many applicants for few jobs).'], a: 'Internal v external.' }
  ],
  pitfalls: ['Rating every skill highly without evidence.', 'Putting external factors under weaknesses.', 'Producing a SWOT that is not used to plan actions.', 'Not linking the audit to the specific career chosen.'],
  cards: [
    ['Skills audit?', 'Rating your skills against those needed for a career, with evidence.'], ['Five qualities in the spec?', 'Reliability, organisational skills, commitment, resilience, empathy.'], ['Basic skills?', 'Literacy, numeracy, IT.'],
    ['Generic employability skills?', 'Teamwork, cooperation, communication, problem solving.'], ['Technical skills examples?', 'Coaching, instructing, leading, administering test protocols.'], ['SWOT?', 'Strengths, weaknesses (internal); opportunities, threats (external).']
  ],
  quiz: [
    { q: 'In a SWOT analysis, “lots of applicants for local coaching jobs” is a…', o: ['threat', 'weakness', 'strength', 'opportunity'], x: 'External, harmful.' },
    { q: 'Literacy, numeracy and IT are…', o: ['basic skills', 'technical skills', 'qualities', 'qualifications'], x: 'Spec.' },
    { q: 'Being able to run a fitness test protocol is a…', o: ['specific technical skill', 'basic skill', 'quality', 'threat'], x: 'Technical.' },
    { q: 'Resilience and empathy are…', o: ['qualities', 'qualifications', 'threats', 'sectors'], x: 'Personal qualities.' },
    { q: 'A local club asking for volunteer coaches is a…', o: ['opportunity', 'weakness', 'threat', 'strength'], x: 'External, helpful.' },
    { q: 'In a SWOT, “a local club needs volunteer coaches” is…', o: ['an opportunity', 'a strength', 'a weakness', 'a threat'], x: 'External and helpful.' },
    { q: 'The best evidence for a skills audit rating is…', o: ['certificates, feedback and examples of experience', 'your own opinion only', 'a friend’s guess', 'your favourite sport'], x: 'Back up ratings.' }
  ],
  exam: [
    { q: 'Explain how a selected sports career matches your own personal skills audit outcomes. [6]', m: 6, lv: true, tag: 'nea', ms: ['selected career and its requirements (from job description/person specification)', 'audit outcomes: qualities, basic skills, experience, qualifications with ratings/evidence', 'generic employability and technical skills matched to requirements', 'gaps identified', 'SWOT used to summarise', 'analysis of fit and justified development needs'] }
  ],
  sims: ['skillsaudit', 'swotsort'], gens: []
});

TOPICS.push({
  id: '3.6', unit: '3', area: 'prof', ref: 'B2–B3 Career development action plan and portfolio', title: 'Career development action plan and portfolio', short: 'CDAP — aims, milestones, measures, timescales; development activities; portfolio and CV',
  summary: 'How to use your skills audit to produce a career development action plan (CDAP) with aims, milestones and measures at key timescales (now, 1, 2, 5 and 10 years), careers guidance and education choices, professional development activities, and how to maintain a personal portfolio and a CV targeted at sports industry jobs.',
  spec: [
    'Use of personal skills audit to produce an action plan towards a sports industry career',
    'Key timescales: immediate actions, next year, two years, five years, ten years',
    'Training, educational and experiential aims at these times and processes to achieve them; careers guidance and education choices',
    'CDAP: definition; higher levels, specialism and diversification, aims, milestones, measures',
    'Professional development activities: workshops, training, job shadowing, self-reflection',
    'Personal portfolio: certificates, awards, achievements, testimonials, press cuttings, work experience, volunteering, CVs targeting sports jobs'
  ],
  learn: [
    { h: 'The CDAP', html: `
<p>A <b>career development action plan (CDAP)</b> sets out how you will move from where you are now (your skills audit) to your career goal. It should be SMART and include:</p>
<div class="tbl"><table><tr><th>Element</th><th>Example (aim: become a strength and conditioning coach)</th></tr>
<tr><td><b>Aim</b></td><td>work as an accredited S&amp;C coach at a professional rugby club within 10 years</td></tr>
<tr><td><b>Timescales and goals</b></td><td><b>Now</b>: volunteer at the club gym; first aid. <b>1 year</b>: complete BTEC with D grades; Level 2 gym instructor. <b>2 years</b>: start BSc Sport and Exercise Science; part-time PT. <b>5 years</b>: graduate; UKSCA accreditation; internship. <b>10 years</b>: lead S&amp;C coach.</td></tr>
<tr><td><b>Methods / means</b></td><td>courses, university, work experience, job shadowing, workshops, self-reflection</td></tr>
<tr><td><b>Milestones</b></td><td>checkpoints showing progress — e.g. Level 2 passed by June</td></tr>
<tr><td><b>Measures</b></td><td>how success is judged — certificates, grades, hours logged, feedback</td></tr>
<tr><td><b>Specialism and diversification</b></td><td>specialise (e.g. youth athletes) or diversify (e.g. add sports massage) to widen options</td></tr></table></div>` },
    { h: 'Portfolio and CV', html: `
<p>Keep a <b>personal portfolio</b> (record of achievement) with: educational certificates; sport-specific awards; sporting achievements; testimonials/references; press cuttings; records of work experience and volunteering; any other relevant evidence; and a <b>CV</b> tailored to sports industry jobs.</p>
<div class="box tip"><b class="lbl">A strong sports CV</b><p>Contact details; short personal profile targeted to the job; education and qualifications (including NGB awards, first aid, DBS); relevant experience (coaching, volunteering, work) with what you achieved; skills; interests; references. Keep it to two pages, clear and error-free.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'What is the difference between a milestone and a measure in a CDAP? (2 marks)', s: ['A milestone is a checkpoint marking progress towards the aim at a set time.', 'A measure is how you will judge whether a goal has been achieved (e.g. certificate, grade, hours).'], a: 'Checkpoint v evidence of success.' }
  ],
  pitfalls: ['A CDAP with no timescales or measures.', 'Goals that do not follow from the skills audit gaps.', 'A generic CV not targeted at the job.', 'Forgetting immediate actions (what you will do now).'],
  cards: [
    ['CDAP?', 'Career development action plan.'], ['CDAP timescales?', 'Now, 1 year, 2 years, 5 years, 10 years.'], ['Milestone?', 'Checkpoint of progress.'], ['Measure?', 'How achievement is judged.'],
    ['Professional development activities?', 'Workshops, training, job shadowing, self-reflection.'], ['Portfolio contents?', 'Certificates, awards, achievements, testimonials, press cuttings, work experience, volunteering, CV.'], ['Specialism v diversification?', 'Deepening one area v broadening into others.']
  ],
  quiz: [
    { q: 'A CDAP should be based on…', o: ['your skills audit outcomes', 'a random job advert', 'your friends’ plans', 'only your hobbies'], x: 'Audit → gaps → plan.' },
    { q: 'Passing the Level 2 gym instructor course by June is a…', o: ['milestone', 'threat', 'person specification', 'sector'], x: 'Checkpoint.' },
    { q: 'A testimonial is…', o: ['a written reference about you', 'a job advert', 'a DBS certificate', 'a type of contract'], x: 'Portfolio.' },
    { q: 'Following an experienced coach for a day is…', o: ['job shadowing', 'self-disclosure', 'a zero-hours contract', 'periodisation'], x: 'Development activity.' },
    { q: 'Adding sports massage to your PT qualification is an example of…', o: ['diversification', 'reversibility', 'a threat', 'a weakness'], x: 'Broadening.' },
    { q: 'A career development action plan should include…', o: ['SMART goals with timescales, milestones and resources', 'only a long-term dream', 'a list of hobbies', 'the job advert'], x: 'Specific plan.' },
    { q: '“Pass NGB Level 2 by next June” is a…', o: ['1-year goal', '10-year goal', 'strength', 'threat'], x: 'Timescale.' }
  ],
  exam: [
    { q: 'Develop a career development action plan that has specific relevance to the requirements of an intended sports career and your skills audit outcomes. [8]', m: 8, lv: true, tag: 'nea', ms: ['clear long-term aim linked to a specific career', 'goals at immediate, 1, 2, 5 and 10 years', 'training, education and experience aims addressing the gaps found in the skills audit', 'methods/means and resources, including careers guidance and education choices', 'milestones and measures', 'professional development activities (workshops, shadowing, self-reflection)', 'specialism or diversification considered', 'justified with reference to industry requirements and sources'] }
  ],
  sims: ['cdapbuilder'], gens: []
});

TOPICS.push({
  id: '3.7', unit: '3', area: 'prof', ref: 'C1 Job applications', title: 'Job application documents', short: 'Advertisement, job analysis, job description, person specification, application form, CV, letter of application',
  summary: 'The documents involved in recruiting for a sports industry job — the job advertisement and where to place it, job analysis, job description, person specification, application form, personal CV and letter of application — and how they link together.',
  spec: [
    'Selecting a job role from the skills audit and CDAP',
    'Job advertisement with examples of where it could be placed',
    'Job analysis; job description; person specification',
    'Application form; personal CV; letter of application'
  ],
  learn: [
    { h: 'From job analysis to application', html: `
[[d:recruit]]
<div class="tbl"><table><tr><th>Document</th><th>Purpose and content</th></tr>
<tr><td><b>Job analysis</b></td><td>the employer studies the job to identify the tasks, skills and knowledge it requires — the basis for the job description and person specification</td></tr>
<tr><td><b>Job description</b></td><td>title, purpose, duties, responsibilities, hours, pay, location, line manager</td></tr>
<tr><td><b>Person specification</b></td><td>essential and desirable qualifications, experience, skills and qualities</td></tr>
<tr><td><b>Job advertisement</b></td><td>attracts suitable applicants: job title, employer, brief summary, key requirements, salary, hours, closing date, how to apply. <b>Placed</b> on: employer website, job sites (e.g. CIMSPA jobs, Indeed, UK Sport jobs), social media, NGB websites, local press, Jobcentre, universities/colleges</td></tr>
<tr><td><b>Application form</b></td><td>standard form so every applicant gives the same information — easy to compare against the person specification; includes equal opportunities monitoring and declarations</td></tr>
<tr><td><b>CV</b> (curriculum vitae)</td><td>the applicant’s summary of education, qualifications, experience and skills</td></tr>
<tr><td><b>Letter of application</b> (covering letter)</td><td>explains why the applicant wants the job and how they meet the person specification, with examples</td></tr></table></div>
<div class="box why"><b class="lbl">Equal opportunities</b><p>Under the Equality Act 2010, adverts, specifications and selection must not discriminate on protected characteristics (age, disability, sex, race, religion or belief, sexual orientation, gender reassignment, pregnancy and maternity, marriage and civil partnership) — e.g. no “young, energetic person” in an advert.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain why employers often use an application form rather than only a CV. (2 marks)', s: ['Every applicant gives the same information in the same order…', '…so it is easier and fairer to compare candidates against the person specification.'], a: 'Standardised → fair comparison.' }
  ],
  pitfalls: ['Mixing up the job description and the person specification.', 'Writing a letter of application that repeats the CV instead of matching it to the person specification.', 'Adverts with discriminatory wording.', 'Forgetting to say where the advert would be placed.'],
  cards: [
    ['Job analysis?', 'Studying the job to identify tasks and requirements.'], ['Where can sports jobs be advertised?', 'Employer website, job sites, social media, NGB sites, local press, Jobcentre.'], ['Application form advantage?', 'Standard information — fair comparison.'],
    ['Letter of application?', 'Explains why you want the job and how you meet the person spec.'], ['Equality Act 2010?', 'Prohibits discrimination on protected characteristics in recruitment.'],
    ['Person specification?', 'Essential and desirable skills, qualifications and experience for the job.']
  ],
  quiz: [
    { q: 'The document listing duties and responsibilities is the…', o: ['job description', 'person specification', 'application form', 'CV'], x: 'The job.' },
    { q: 'Which is discriminatory in a job advert?', o: ['“Must be under 25”', '“Must hold a Level 2 coaching award”', '“Must have a current first aid certificate”', '“Must be available weekends”'], x: 'Age is protected.' },
    { q: 'A covering letter should…', o: ['show how you meet the person specification', 'copy your CV word for word', 'be 10 pages long', 'list salary demands only'], x: 'Match evidence to criteria.' },
    { q: 'The first stage that informs the job description is…', o: ['job analysis', 'the interview', 'the SWOT', 'the DBS check'], x: 'Analyse the job.' },
    { q: 'Essential and desirable criteria appear in the…', o: ['person specification', 'job advert closing date', 'CV hobbies section', 'letter of application signature'], x: 'Person spec.' },
    { q: 'A list of duties and responsibilities is the…', o: ['job description', 'person specification', 'CV', 'application form'], x: 'JD.' },
    { q: 'A letter of application should…', o: ['explain how you meet the person specification', 'repeat the CV word for word', 'list your salary demands only', 'be informal and unstructured'], x: 'Match the criteria.' }
  ],
  exam: [
    { q: 'Prepare appropriate documentation for use in selection and recruitment activities. Describe what each document should include. [8]', m: 8, lv: true, tag: 'nea', ms: ['job advertisement — title, employer, summary, requirements, salary, closing date, how to apply; where placed', 'job analysis informing documents', 'job description — purpose, duties, hours, pay, line manager', 'person specification — essential and desirable criteria', 'application form — standardised; equal opportunities', 'CV — targeted, clear, up to date', 'letter of application — matches evidence to person specification', 'documents consistent with each other and with equality legislation'] }
  ],
  sims: ['docmatch'], gens: []
});

TOPICS.push({
  id: '3.8', unit: '3', area: 'prof', ref: 'C2 Interviews and pathway-specific skills', title: 'Interviews and practical assessment activities', short: 'Communication, body language, questions; micro-teach/micro-coach; feedback and observation forms',
  summary: 'The skills needed in interview situations — communication, body language, listening, professional approach, formal language, dress, questions; presentation skills for a micro-teach or micro-coach; demonstrating pathway-specific technical skills; interview feedback and observation forms; and the experience of interviewing and being interviewed, within equal opportunities legislation.',
  spec: [
    'Communication skills for interviews: body language, listening, professional approach, formal language, skills and attitudes of the interviewee, role play, dress, interview questions',
    'Presentation skills for a micro-teach or micro-coach',
    'Career pathway-specific technical knowledge and skills, e.g. coaching, instructing, leading, handling equipment, following testing protocols',
    'Interview feedback form; observation form; reviewing and submitting applications with peers',
    'Demonstrating a work-related competence (interviewing and being interviewed); adherence to equal opportunities legislation'
  ],
  learn: [
    { h: 'Being a good interviewee', html: `
<ul><li><b>Prepare</b>: research the employer and role; re-read the person specification; prepare examples for each criterion (use STAR — Situation, Task, Action, Result).</li>
<li><b>Professional approach</b>: arrive early; dress appropriately; formal language; positive attitude.</li>
<li><b>Body language</b>: eye contact, open posture, smile, firm handshake, no fidgeting.</li>
<li><b>Listening</b>: answer the question asked; ask for clarification if needed.</li>
<li>Ask your own questions at the end (training opportunities, team, next steps).</li></ul>` },
    { h: 'Being a good interviewer', html: `
<ul><li>Plan questions that test the person specification — open questions (“Tell us about a time when…”), scenario questions (“What would you do if a child was injured?”), and technical questions.</li>
<li>Ask every candidate the same core questions and score them on an <b>interview feedback form</b> against criteria — fair and consistent.</li>
<li>Avoid illegal or discriminatory questions (age, marital status, plans for children, religion).</li>
<li>Use an <b>observation form</b> for the practical activity.</li></ul>` },
    { h: 'The practical activity', html: `
<p>Learners deliver a short (15–20 minute) practical assessment linked to the chosen career — a <b>micro-coach</b> (e.g. passing drill), <b>micro-teach</b>, <b>micro-instruct</b> (gym induction) or <b>test administration</b> (following a fitness test protocol).</p>
<div class="box tip"><b class="lbl">Micro-coach checklist</b><p>Clear plan with objectives; safety checks and warm-up; clear demonstration and explanation (IDEA: introduce, demonstrate, explain, apply); progression; feedback to participants; cool-down and summary; manage time and equipment.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Give two examples of positive body language in an interview. (2 marks)', s: ['Good eye contact with the panel.', 'Open, upright posture / smiling / firm handshake / not fidgeting.'], a: 'Eye contact; open posture.' }
  ],
  pitfalls: ['Interview questions that are closed (yes/no) or not linked to the person specification.', 'Asking discriminatory questions.', 'A practical activity with no plan, safety checks or feedback.', 'Not using feedback forms to evidence performance.'],
  cards: [
    ['STAR technique?', 'Situation, Task, Action, Result — structure interview answers.'], ['Interview feedback form?', 'Scores each candidate against criteria.'], ['Observation form?', 'Records performance in the practical activity.'],
    ['Micro-coach?', 'A short coaching session demonstrating technical skills.'], ['Questions to avoid?', 'Age, marital status, children, religion — discriminatory.'], ['Open question example?', '“Tell us about a time you dealt with a difficult participant.”']
  ],
  quiz: [
    { q: 'Which is an appropriate interview question?', o: ['“Describe how you would plan a safe coaching session.”', '“How old are you?”', '“Do you plan to have children?”', '“What is your religion?”'], x: 'Job-related.' },
    { q: 'STAR stands for…', o: ['Situation, Task, Action, Result', 'Skills, Training, Ability, Rating', 'Strength, Threat, Aim, Review', 'Specific, Timed, Agreed, Realistic'], x: 'Answer structure.' },
    { q: 'Scoring every candidate against the same criteria makes the interview…', o: ['fair and consistent', 'discriminatory', 'shorter', 'unnecessary'], x: 'Equal opportunities.' },
    { q: 'A 15-minute gym induction delivered in the interview is a…', o: ['micro-instruct', 'job analysis', 'SWOT', 'CDAP'], x: 'Practical activity.' },
    { q: 'Which interview question is not appropriate?', o: ['How old are you?', 'Why do you want this job?', 'How would you adapt a drill?', 'Tell us about a time you solved a problem.'], x: 'Age is protected.' },
    { q: 'Good body language at interview includes…', o: ['eye contact and an open posture', 'folded arms', 'looking at your phone', 'slouching'], x: 'Non-verbal communication.' },
    { q: 'In the recruitment activity you should take the roles of…', o: ['interviewee, interviewer and observer', 'only interviewee', 'only observer', 'referee'], x: 'All three roles.' }
  ],
  exam: [
    { q: 'In interviews and activities, demonstrate analytical responses and questioning. Describe how an interviewer should design questions for a coaching role. [6]', m: 6, lv: true, tag: 'nea', ms: ['questions mapped to the person specification (essential/desirable)', 'open and scenario-based questions (safeguarding, injury, behaviour)', 'technical questions on coaching knowledge', 'same core questions for all candidates; scoring on feedback form', 'avoid discriminatory questions (Equality Act 2010)', 'follow-up questions to probe; observation form for the practical'] }
  ],
  sims: ['interviewq'], gens: []
});

TOPICS.push({
  id: '3.9', unit: '3', area: 'prof', ref: 'D1–D2 Review, evaluation, SWOT and action plan', title: 'Reflecting on the recruitment process', short: 'Appraising your roles, communication and organisation; updated SWOT; action plan',
  summary: 'How to review and evaluate the recruitment and selection activity: appraising your performance as interviewee, interviewer and observer; reviewing your communication and organisational skills; assessing how the skills support employability; producing an updated SWOT analysis; self-critiquing the documents; and writing an action plan to address weaknesses.',
  spec: [
    'Review of the role-play activity; individual appraisal of own roles in being interviewed, interviewing and observing',
    'Review of communication skills and organisational ability; how acquired skills support employability',
    'Updated SWOT on individual performance; self-critique of events and documentation',
    'Review of how effective the process was; action plan to address weaknesses'
  ],
  learn: [
    { h: 'Reflecting well', html: `
<p>Use a reflective model such as <b>Gibbs’ reflective cycle</b>: description → feelings → evaluation (what went well / less well) → analysis (why) → conclusion → action plan.</p>
<ul><li>Use <b>evidence</b>: interview feedback forms, observation forms, witness statements, peer feedback, your own notes.</li>
<li>Evaluate the <b>documents</b>: did the advert, job description and person specification lead to applications with the right information? Were interview questions effective?</li>
<li>Evaluate <b>your performance</b> in each role: interviewee, interviewer, observer.</li>
<li>Produce an <b>updated SWOT</b> and compare it with your original skills audit.</li>
<li>Write an <b>action plan</b>: specific actions, timescales and measures to develop weaknesses (e.g. mock interviews; presentation practice; volunteering hours).</li></ul>
<div class="box why"><b class="lbl">Merit and Distinction</b><p>Merit asks you to <b>analyse</b> the results and how your skills development will contribute to future success; Distinction asks you to <b>evaluate</b> how well the documents and your performance supported the process, with a reasoned conclusion and links to professional best practice.</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Give two sources of evidence to support a review of your interview performance. (2 marks)', s: ['Interview feedback form completed by the interview panel.', 'Teacher witness statement / peer observation form / video recording.'], a: 'Feedback forms; witness statements.' }
  ],
  pitfalls: ['Describing what happened without evaluating it.', 'No evidence from feedback to support judgements.', 'An action plan with vague actions (“get better at interviews”).', 'Forgetting to update the SWOT.'],
  cards: [
    ['Gibbs’ reflective cycle?', 'Description, feelings, evaluation, analysis, conclusion, action plan.'], ['Evidence for reflection?', 'Feedback forms, observation forms, witness statements, peer feedback.'], ['Updated SWOT?', 'Revised SWOT after the recruitment activity.'],
    ['Action plan?', 'Specific actions, timescales and measures to address weaknesses.'],
    ['Self-critique of documents?', 'Judge each document against the job, with improvements.'], ['Three roles in the activity?', 'Interviewee, interviewer, observer.']
  ],
  quiz: [
    { q: 'The final stage of Gibbs’ reflective cycle is…', o: ['action plan', 'description', 'feelings', 'evaluation'], x: 'Plan for next time.' },
    { q: 'Which is the best action for a weakness in presenting?', o: ['Deliver three practice micro-coaches with feedback before March', 'Try harder', 'Avoid presenting', 'Ignore it'], x: 'Specific and measurable.' },
    { q: 'For Distinction you must…', o: ['evaluate the documents and your performance with a reasoned conclusion', 'only describe the interview', 'list your hobbies', 'copy the person specification'], x: 'CD.D3.' },
    { q: '“I felt nervous at the start” belongs in which Gibbs stage?', o: ['Feelings', 'Analysis', 'Action plan', 'Conclusion'], x: 'Feelings.' },
    { q: '“I overran because I did not plan transitions” is…', o: ['analysis', 'description', 'feelings', 'action plan'], x: 'Why it happened.' },
    { q: 'An updated SWOT is produced…', o: ['after the recruitment activity, using feedback', 'before any skills audit', 'only by the interviewer', 'instead of an action plan'], x: 'Review.' },
    { q: 'A good piece of evidence for evaluating your interview is…', o: ['the panel’s feedback form', 'your guess', 'the job advert', 'the closing date'], x: 'Evidence-based.' }
  ],
  exam: [
    { q: 'Evaluate how well the documents prepared and your own performance in the interview activities supported access to your selected career pathway. [8]', m: 8, lv: true, tag: 'nea', ms: ['evaluation of each document (advert, JD, person spec, application form, CV, letter) — strengths and weaknesses', 'whether documents led to applications with the right information', 'effectiveness of interview questions and practical activity', 'own performance as interviewee, interviewer and observer, using feedback evidence', 'communication and organisational skills reviewed', 'updated SWOT compared with original audit', 'links to professional best practice and equality legislation', 'reasoned conclusion and specific action plan'] }
  ],
  sims: ['reflectsort'], gens: []
});
