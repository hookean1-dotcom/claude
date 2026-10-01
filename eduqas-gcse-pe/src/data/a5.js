/* ==========================================================
   KEY AREA 5 · SOCIO-CULTURAL ISSUES IN PHYSICAL ACTIVITY AND SPORT
   Participation; provision for target groups; commercialisation, media and globalisation; ethics and deviance
   ========================================================== */
TOPICS.push({
  id: '5.1', unit: '5', area: 'soc', ref: 'Participation', title: 'Participation in physical activity and sport', short: 'Family, gender, society, peers, cost, access, role models; school PE; physical literacy',
  summary: 'The factors that affect whether people take part in physical activity — family, gender, society and culture, peers, cost, access and role models; the influence of school PE, extra-curricular activities and the wider curriculum; physical literacy and its impact on children’s development; and how to interpret participation data.',
  spec: [
    'Factors affecting participation: family, gender, society, peers, cost, access, role models',
    'Up-to-date strategies and personal experiences that affect participation',
    'The influence of the school physical education programme, extra-curricular activities and the wider curriculum',
    'Physical literacy, physical activity, health and well-being and the impact on children’s development',
    'Collecting, analysing and presenting participation data'
  ],
  learn: [
    { h: 'Factors affecting participation', html: `
<div class="tbl"><table><tr><th>Factor</th><th>Positive influence</th><th>Negative influence</th></tr>
<tr><td><b>Family</b></td><td>Active parents act as role models, pay fees, provide transport and encouragement</td><td>Inactive family; no time or money; caring responsibilities</td></tr>
<tr><td><b>Gender</b></td><td>More women’s sport on TV; campaigns such as “This Girl Can”; growth of women’s football and rugby</td><td>Stereotypes (“sport is for boys”); less media coverage and pay; body-image worries; fewer clubs for some sports</td></tr>
<tr><td><b>Society and culture</b></td><td>Sport valued in the community; national success inspires (the “Olympic effect”)</td><td>Cultural or religious expectations (e.g. dress, mixed sessions); discrimination; time pressures of modern life</td></tr>
<tr><td><b>Peers</b></td><td>Friends who take part encourage you to join</td><td>Peer pressure to do other things; fear of being judged</td></tr>
<tr><td><b>Cost</b></td><td>Free or subsidised sessions (e.g. free swimming, park runs)</td><td>Membership fees, kit, equipment, travel (e.g. golf, skiing, horse riding)</td></tr>
<tr><td><b>Access</b></td><td>Local facilities; good public transport; accessible venues</td><td>Rural areas with few facilities; facilities not accessible for disabled people; opening times</td></tr>
<tr><td><b>Role models</b></td><td>Successful athletes inspire people like them to start (e.g. a local athlete, a Paralympian)</td><td>Few role models for some groups; poor behaviour by role models</td></tr></table></div>
<p>Other factors include <b>age</b>, <b>ability/disability</b>, <b>ethnicity</b>, <b>socio-economic status</b>, <b>time</b>, <b>health</b> and <b>self-esteem</b>.</p>` },
    { h: 'School PE and physical literacy', html: `
<p>School is where most young people first experience sport.</p>
<ul><li><b>The PE programme</b> — introduces a range of activities, teaches skills, and promotes healthy, active lifestyles. Positive experiences encourage lifelong participation; negative ones can turn people off.</li>
<li><b>Extra-curricular activities</b> — clubs and teams before school, at lunch and after school; offer competition and new activities; links to community clubs.</li>
<li><b>The wider curriculum</b> — active travel, active lessons, sports leaders and volunteering, healthy eating, and links with local clubs.</li></ul>
<div class="box why"><b class="lbl">Physical literacy</b><p>Physical literacy is the <b>motivation, confidence, physical competence, knowledge and understanding</b> to value and take part in physical activity for life. Children who develop fundamental movement skills (running, jumping, throwing, catching, balancing) early are more confident and more likely to stay active — benefiting health, well-being, social skills and development.</p></div>` },
    { h: 'Strategies and participation data', html: `
<p>Strategies to increase participation include: free or cheap taster sessions; women-only or disability-specific sessions; campaigns using role models; school–club links; park runs and community events; flexible opening times; better transport.</p>
<p>Questions often include survey data (e.g. % of a group taking part). To analyse data: <b>describe</b> the trend with figures (e.g. “participation falls from 58% at age 11 to 34% at age 16”), <b>compare</b> groups, then <b>explain</b> using factors above.</p>` }
  ],
  eqs: [['"% participation" = @frac{"participants"}{"total"} × 100', '']],
  worked: [
    { q: 'Explain how cost can affect participation in a named activity. (2 marks)', s: ['Some sports are expensive — e.g. golf needs clubs, membership and green fees.', 'People on low incomes may not be able to afford them, so participation falls.'], a: 'Expensive kit/fees exclude lower-income groups.' },
    { q: 'Data show that 62% of boys and 48% of girls aged 14 take part in sport weekly. Suggest two reasons for the difference. (2 marks)', s: ['Gender stereotypes / less media coverage of women’s sport — fewer role models.', 'Body-image concerns or fewer opportunities/clubs for girls in some sports.'], a: 'Stereotypes, role models, body image, opportunities.' }
  ],
  pitfalls: ['Listing factors without explaining HOW each increases or decreases participation.', 'Describing data without quoting figures.', 'Defining physical literacy as just “being good at sport” — it includes motivation, confidence and knowledge.', 'Ignoring positive influences when the question asks about the effect of a factor.'],
  cards: [
    ['Seven factors affecting participation (spec)?', 'Family, gender, society, peers, cost, access, role models.'], ['How can family increase participation?', 'Role models, encouragement, paying fees, transport.'], ['How can cost reduce participation?', 'Fees, kit and travel are unaffordable for some.'],
    ['How can access affect participation?', 'Lack of local or accessible facilities, transport or suitable times.'], ['Role model?', 'A person others look up to and copy — can inspire participation.'], ['Physical literacy?', 'The motivation, confidence, competence, knowledge and understanding to be active for life.'],
    ['Extra-curricular activities?', 'Sport and clubs outside lessons — lunchtime, after school.'], ['Two strategies to increase girls’ participation?', 'Female role models/campaigns, women-only sessions, wider choice of activities.'], ['How to analyse participation data?', 'Describe with figures, compare, explain with factors.']
  ],
  quiz: [
    { q: 'Which is a positive family influence on participation?', o: ['Parents who play sport and provide transport', 'Expensive membership fees', 'Lack of local facilities', 'Negative peer pressure'], x: 'Support and role models.' },
    { q: 'Expensive equipment is an example of which factor?', o: ['Cost', 'Gender', 'Role models', 'Peers'], x: 'Money.' },
    { q: 'Physical literacy includes…', o: ['motivation, confidence and competence to be active for life', 'reading about sport', 'only elite skill', 'only fitness testing'], x: 'A lifelong disposition.' },
    { q: 'A rural area with no sports centre affects…', o: ['access', 'role models', 'gender', 'aesthetics'], x: 'Availability.' },
    { q: 'Friends persuading you to join a club is the influence of…', o: ['peers', 'family', 'cost', 'society'], x: 'Peer group.' },
    { q: 'A campaign showing ordinary women exercising aims to…', o: ['increase female participation', 'reduce access', 'raise costs', 'replace school PE'], x: 'e.g. This Girl Can.' },
    { q: 'Lunchtime and after-school clubs are…', o: ['extra-curricular activities', 'the national curriculum only', 'commercialisation', 'deviance'], x: 'Outside lessons.' }
  ],
  exam: [
    { q: 'Explain how role models can influence participation in sport. [2]', m: 2, ms: ['people copy / are inspired by successful performers', 'e.g. a female/disabled/local athlete shows people like them that they can take part'] },
    { q: 'Describe how a school can encourage lifelong participation in physical activity. [3]', m: 3, ms: ['broad, enjoyable PE programme / choice of activities', 'extra-curricular clubs and competitions', 'links with local clubs', 'develop physical literacy / fundamental skills and confidence', 'leadership / volunteering opportunities', 'teaching about health and well-being'] },
    { q: 'The table shows the percentage of young people who take part in sport at least three times a week. Age 11: boys 52%, girls 47%. Age 16: boys 41%, girls 28%.', parts: [
      { q: 'Describe two trends shown in the data. [2]', m: 2, ms: ['participation falls with age for both sexes (52→41; 47→28)', 'girls participate less than boys at both ages', 'the gap widens from 5% to 13% / girls’ fall is larger (19% v 11%)'] },
      { q: 'Analyse reasons for the trends in the data and suggest strategies to increase participation among 16-year-old girls. [9]', m: 9, lv: true, ms: ['exams/school work/part-time jobs reduce time at 16', 'peers — other social interests; peer pressure', 'gender stereotypes and less media coverage → fewer female role models', 'body image / self-esteem / changing in front of others', 'limited choice of activities in school for girls / competitive focus', 'cost and access to clubs once outside school', 'strategies: female role models and campaigns (This Girl Can), choice (dance, fitness classes), girls-only sessions', 'strategies: school–club links, low-cost sessions, friendship groups, leadership roles', 'evaluation of which strategy would work best and why'] }
    ], tag: 'data' }
  ],
  sims: ['partfactors', 'partdata'], gens: ['gpart']
});

TOPICS.push({
  id: '5.2', unit: '5', area: 'soc', ref: 'Provision', title: 'Provision for target groups', short: 'Gender, race and disability; barriers and strategies for increased involvement',
  summary: 'Provision means the facilities, opportunities and support available. Learn the barriers faced by different target groups — women and girls, ethnic minority groups and disabled people — and strategies to increase their involvement, with real examples.',
  spec: [
    'Provision for a variety of target groups: gender, race, disability',
    'Strategies for increased involvement of these groups',
    'Up-to-date strategies and examples'
  ],
  learn: [
    { h: 'Target groups and barriers', html: `
<p>A <b>target group</b> is a section of the population with lower participation that organisations aim to help.</p>
<div class="tbl"><table><tr><th>Group</th><th>Possible barriers</th></tr>
<tr><td><b>Women and girls</b></td><td>Stereotypes and lack of media coverage; fewer role models; lower pay and sponsorship; body-image concerns; childcare and time; fewer clubs and teams in some sports; kit and changing facilities</td></tr>
<tr><td><b>Ethnic minority groups (race)</b></td><td>Racism and discrimination (abuse from crowds or online); cultural/religious requirements (e.g. dress codes, single-sex sessions, prayer times, fasting); few role models in coaching and management; stereotyping into certain sports or positions; lower average income in some communities</td></tr>
<tr><td><b>Disabled people</b></td><td>Inaccessible facilities and transport; lack of specialist equipment and qualified coaches; cost of adapted equipment (e.g. sports wheelchairs); low media coverage; others’ attitudes; low confidence</td></tr></table></div>` },
    { h: 'Strategies to increase involvement', html: `
<div class="tbl"><table><tr><th>Group</th><th>Strategies and examples</th></tr>
<tr><td>Women and girls</td><td>Campaigns such as <b>This Girl Can</b>; more TV coverage (e.g. Women’s Super League, Women’s Euros and World Cups); female-only sessions and female coaches; crèches; a wider choice of activities (dance, fitness classes, netball, walking football); equal prize money</td></tr>
<tr><td>Ethnic minority groups</td><td>Anti-racism campaigns (<b>Kick It Out</b>, Show Racism the Red Card); strict punishments for racist abuse; culturally appropriate sessions (single-sex, modest kit allowed — e.g. sports hijabs); role models in playing and coaching; community outreach and targeted funding</td></tr>
<tr><td>Disabled people</td><td>Accessible facilities (ramps, lifts, accessible changing); adapted sports (wheelchair basketball, boccia, goalball, sitting volleyball); specialist and inclusive coaching; organisations such as <b>Disability Sport Wales</b> and Activity Alliance; Paralympic role models and TV coverage; inclusive PE using the STEP model (space, task, equipment, people)</td></tr></table></div>
<div class="box tip"><b class="lbl">Good exam answers</b><p>Match each strategy to a specific barrier and explain how it removes it. E.g. “Women-only sessions remove the body-image worry of exercising in front of men, so more women attend.”</p></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Describe one barrier and one strategy for increasing participation among disabled people. (2 marks)', s: ['Barrier: facilities without ramps or accessible changing rooms.', 'Strategy: adapting facilities (ramps, lifts) / running adapted activities such as wheelchair basketball.'], a: 'Access barrier → accessible facilities/adapted sports.' },
    { q: 'Explain how the media can increase female participation. (2 marks)', s: ['More coverage of women’s sport creates visible female role models…', '…so girls see that sport is for them and are inspired to take part.'], a: 'Coverage → role models → inspiration.' }
  ],
  pitfalls: ['Giving strategies that do not match the barrier named.', 'Writing generic answers (“make it cheaper”) without naming the target group or an example.', 'Confusing provision (what is available) with participation (who takes part).', 'Stereotyping groups — describe barriers as things that may affect some people.'],
  cards: [
    ['Target group?', 'A section of the population with low participation that is targeted for help.'], ['Three target groups in the spec?', 'Gender (women and girls), race (ethnic minority groups), disability.'], ['Barrier for women?', 'Stereotypes, low media coverage, few role models, body image, childcare.'],
    ['Barrier for ethnic minority groups?', 'Racism, cultural/religious needs, few role models, stereotyping.'], ['Barrier for disabled people?', 'Inaccessible facilities/transport, equipment cost, lack of trained coaches.'], ['This Girl Can?', 'Campaign showing ordinary women being active to increase female participation.'],
    ['Kick It Out?', 'Anti-racism campaign in football.'], ['Adapted sports?', 'e.g. wheelchair basketball, boccia, goalball, sitting volleyball.'], ['STEP model?', 'Adapt space, task, equipment, people for inclusion.'],
    ['Disability Sport Wales?', 'Organisation developing opportunities for disabled people in Wales.']
  ],
  quiz: [
    { q: 'Ramps and accessible changing rooms help which group?', o: ['Disabled people', 'Elite athletes only', 'Spectators only', 'Coaches only'], x: 'Access.' },
    { q: 'Kick It Out campaigns against…', o: ['racism in football', 'doping', 'gamesmanship', 'high ticket prices'], x: 'Anti-racism.' },
    { q: 'This Girl Can aims to…', o: ['increase female participation', 'raise ticket prices', 'reduce PE time', 'promote doping control'], x: 'Women and girls.' },
    { q: 'Allowing modest sports kit (e.g. sports hijabs) addresses…', o: ['cultural and religious barriers', 'cost barriers', 'disability access', 'lack of coaches'], x: 'Inclusion.' },
    { q: 'Goalball is an adapted sport for…', o: ['visually impaired players', 'wheelchair users only', 'children only', 'golfers'], x: 'Ball with bells.' },
    { q: 'A lack of women’s sport on TV leads to…', o: ['fewer female role models', 'more female participation', 'cheaper kit', 'better access'], x: 'Visibility matters.' },
    { q: 'In the STEP model, the E stands for…', o: ['equipment', 'effort', 'exercise', 'energy'], x: 'Space, task, equipment, people.' }
  ],
  exam: [
    { q: 'Identify two barriers that might reduce participation in sport for disabled people. [2]', m: 2, ms: ['inaccessible facilities / transport', 'cost of specialist equipment', 'lack of qualified coaches / clubs', 'low media coverage / few role models', 'attitudes of others / discrimination', 'low confidence / self-esteem'] },
    { q: 'Explain two strategies that could increase participation in sport by ethnic minority groups. [4]', m: 4, ms: ['anti-racism campaigns / punishments (e.g. Kick It Out)', '— people feel safe and welcome', 'culturally appropriate sessions — single-sex / dress codes / timing', '— removes religious/cultural barriers', 'role models in playing, coaching, management', '— inspire others to take part', 'targeted community outreach / funding'] },
    { q: 'Evaluate the effectiveness of strategies used to increase the participation of women and girls in sport. [9]', m: 9, lv: true, ms: ['barriers: stereotypes, media coverage, role models, body image, time/childcare, opportunities', 'This Girl Can — real women, challenges body-image fears; evidence of millions inspired', 'increased media coverage (Lionesses, WSL) — visible role models; growth in girls’ football', 'women-only sessions/female coaches — comfort and confidence', 'wider choice of activities in school — dance, fitness — appeals to more girls', 'equal prize money / professional contracts — status of women’s sport', 'limitations: coverage still lower; drop-out at 14–16 remains; cost and time barriers persist', 'conclusion: strategies have increased participation, but more needed — especially for teenage girls'] }
  ],
  sims: ['provision'], gens: []
});

TOPICS.push({
  id: '5.3', unit: '5', area: 'soc', ref: 'Performance — commercialisation', title: 'Commercialisation, media and globalisation', short: 'Golden triangle; sponsorship and advertising; media; global sport',
  summary: 'The commercialisation of sport — sport becoming a product to make money; the relationship between sport, the media and sponsorship (the golden triangle); advertising and sponsorship; the roles and effects of the media; and the globalisation of sport — with positive and negative effects on performers, spectators and the sport.',
  spec: [
    'The commercialisation of sport',
    'The role of the media and advertising',
    'The globalisation of sport',
    'The links between media and commercialisation; positive and negative effects'
  ],
  learn: [
    { h: 'Commercialisation and the golden triangle', html: `
<p><b>Commercialisation</b> is the treatment of sport as a product to be bought and sold for profit — through TV rights, sponsorship, advertising, merchandise and tickets.</p>
[[d:golden]]
<p>The <b>golden triangle</b> describes how <b>sport</b>, the <b>media</b> and <b>sponsorship/business</b> depend on each other:</p>
<ul><li>The <b>media</b> pay for broadcast rights; sport gives them content and audiences.</li><li><b>Sponsors</b> pay sports and performers; they gain exposure to the media audience.</li><li><b>Sport</b> uses the money to pay players, improve facilities and grow the game.</li></ul>` },
    { h: 'Sponsorship, advertising and the media', html: `
<div class="tbl"><table><tr><th>Media type</th><th>Examples</th></tr>
<tr><td>Television (terrestrial and subscription/pay-per-view)</td><td>BBC, ITV, S4C; Sky Sports, TNT Sports</td></tr>
<tr><td>Radio, press</td><td>Commentary; newspapers and magazines</td></tr>
<tr><td>Internet, streaming and social media</td><td>Highlights, live streams, athletes’ own channels, apps</td></tr></table></div>
<p>The media <b>inform</b> (results, news), <b>educate</b> (coaching, health), <b>entertain</b> and <b>advertise</b>.</p>
<div class="tbl"><table><tr><th></th><th>Positive effects of commercialisation and the media</th><th>Negative effects</th></tr>
<tr><td><b>Sport</b></td><td>More money for facilities, grassroots and coaching; higher profile; more participants</td><td>Rule and kick-off changes to suit TV; minority sports and women’s sport get less money and coverage; sport controlled by business</td></tr>
<tr><td><b>Performers</b></td><td>Professional careers, high salaries, sponsorship deals; role-model status</td><td>Pressure to win (may lead to cheating); intrusion into private life; tied to sponsors’ demands; injured players lose income</td></tr>
<tr><td><b>Spectators</b></td><td>Watch more sport; replays, expert analysis; better stadiums</td><td>Subscription costs to watch; expensive tickets and kit; fewer live games on free TV</td></tr>
<tr><td><b>Sponsors</b></td><td>Brand exposure; positive image</td><td>Bad publicity if a performer misbehaves</td></tr></table></div>
<div class="box warn"><b class="lbl">Sponsorship issues</b><p>Some sponsors are inappropriate for sport’s healthy image — fast food, alcohol, gambling, sugary drinks. Many sports now limit these.</p></div>` },
    { h: 'Globalisation', html: `
<p><b>Globalisation</b> is the process by which sport has spread around the world, with global audiences, global brands and international players and competitions.</p>
<ul><li>Global events: Olympics and Paralympics, FIFA World Cup, Rugby World Cup.</li><li>Leagues and clubs with worldwide fan bases (Premier League, NBA); pre-season tours abroad; games played overseas (NFL in London).</li><li>Players from many countries in one team; global sportswear brands and sponsors.</li></ul>
<div class="tbl"><table><tr><th>Positive</th><th>Negative</th></tr>
<tr><td>Sport reaches new audiences; cultural exchange; inspires participation worldwide; more money</td><td>Fewer chances for home-grown players; small clubs and countries cannot compete; local sports and traditions decline; kick-off times set for overseas TV; exploitation of workers making kit</td></tr></table></div>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain the term “golden triangle”. (2 marks)', s: ['The relationship between sport, the media and sponsorship/business…', '…in which each depends on the others: media pay for rights, sponsors pay for exposure, sport provides the product.'], a: 'Interdependence of sport, media and sponsors.' },
    { q: 'Give one positive and one negative effect of the media on spectators. (2 marks)', s: ['Positive: can watch more sport, with replays and analysis.', 'Negative: subscription costs; fewer matches on free-to-air TV.'], a: 'More coverage v cost.' }
  ],
  pitfalls: ['Defining commercialisation as “adverts in sport” — it is sport being run as a product to make money.', 'Listing positives and negatives without saying WHO is affected (sport, performer, spectator, sponsor).', 'Confusing globalisation (worldwide spread) with commercialisation (profit).', 'Saying the media only show sport — they inform, educate, entertain and advertise.'],
  cards: [
    ['Commercialisation?', 'Treating sport as a product to make a profit.'], ['Golden triangle?', 'Interdependent relationship between sport, media and sponsorship.'], ['Four roles of the media?', 'Inform, educate, entertain, advertise.'],
    ['Positive effect of commercialisation on performers?', 'Professional careers, high wages, sponsorship.'], ['Negative effect of commercialisation on performers?', 'Pressure to win, loss of privacy, sponsor demands.'], ['Negative effect of the media on a sport?', 'Rule/time changes for TV; minority sports ignored.'],
    ['Globalisation of sport?', 'Spread of sport worldwide — global audiences, brands, players, events.'], ['Negative effect of globalisation?', 'Fewer home-grown players; local sports decline; kick-offs for overseas TV.'], ['Inappropriate sponsors?', 'Fast food, alcohol, gambling, sugary drinks — conflict with healthy image.']
  ],
  quiz: [
    { q: 'The golden triangle links sport, the media and…', o: ['sponsorship', 'officials', 'coaches', 'spectators only'], x: 'Business.' },
    { q: 'Treating sport as a product to make money is…', o: ['commercialisation', 'globalisation', 'sportsmanship', 'deviance'], x: 'Profit.' },
    { q: 'A negative effect of the media on spectators is…', o: ['cost of subscriptions', 'more replays', 'expert analysis', 'more choice of sports'], x: 'Pay TV.' },
    { q: 'NFL games played in London are an example of…', o: ['globalisation', 'gamesmanship', 'physical literacy', 'provision'], x: 'Worldwide spread.' },
    { q: 'Which is NOT one of the media’s roles?', o: ['Officiate matches', 'Inform', 'Educate', 'Entertain'], x: 'Officials do that.' },
    { q: 'A positive effect of sponsorship for a sport is…', o: ['money for facilities and grassroots', 'kick-off times set by TV', 'pressure on players', 'higher ticket prices'], x: 'Investment.' },
    { q: 'Why are fast-food sponsors controversial?', o: ['They conflict with sport’s healthy image', 'They pay too little', 'They are global', 'They ban advertising'], x: 'Health message.' }
  ],
  exam: [
    { q: 'Define the term commercialisation. [1]', m: 1, ms: ['treating sport as a product / business to make a profit (through sponsorship, media, merchandise)'] },
    { q: 'Explain two ways in which the media has changed sport to suit television. [4]', m: 4, ms: ['kick-off/start times changed for viewing figures / overseas audiences', '— can disadvantage players / fans', 'rule changes, e.g. shorter formats (T20), tie-breaks, breaks for adverts', '— more exciting, fits TV schedules', 'new competitions created for TV', 'technology/replays introduced for viewers'] },
    { q: 'Evaluate the effects of commercialisation on elite performers. [9]', m: 9, lv: true, ms: ['positive: full-time professional careers — train full time, better performance', 'positive: high salaries and sponsorship deals; financial security', 'positive: access to best coaching, facilities, sports science', 'positive: role-model status, fame', 'negative: pressure to win to keep sponsors → stress, cheating, doping', 'negative: media intrusion / loss of privacy; social media abuse', 'negative: sponsors’ demands (appearances, behaviour); may play when injured', 'negative: uneven — women’s and minority sports earn far less', 'conclusion: overall benefits for top performers, but serious pressures and inequality'] }
  ],
  sims: ['triangleG', 'mediasort'], gens: []
});

TOPICS.push({
  id: '5.4', unit: '5', area: 'soc', ref: 'Performance — ethics', title: 'Ethics: sportsmanship, gamesmanship and deviance', short: 'Sportsmanship, gamesmanship, financial issues, drug taking',
  summary: 'Ethical issues in sport: sportsmanship (fair play) and gamesmanship (bending the rules); financial issues such as match fixing, bribery and huge wages; and deviance — behaviour against the rules and norms of sport — especially drug taking to improve performance: why performers take drugs, the types of drug, and the consequences.',
  spec: [
    'Ethical issues including gamesmanship and sportsmanship',
    'Financial issues',
    'Deviance, e.g. drug taking to improve performance'
  ],
  learn: [
    { h: 'Sportsmanship and gamesmanship', html: `
<div class="tbl"><table><tr><th></th><th>Meaning</th><th>Examples</th></tr>
<tr><td><b>Sportsmanship</b></td><td>Playing fairly within the written rules <b>and</b> the spirit of the game; respecting opponents and officials</td><td>Kicking the ball out when an opponent is injured; shaking hands; a golfer calling a penalty on themselves; helping an opponent up</td></tr>
<tr><td><b>Gamesmanship</b></td><td>Bending the rules or using unsportsmanlike tactics to gain an advantage — not strictly illegal, but against the spirit of the game</td><td>Time-wasting; sledging in cricket; feigning injury; delaying a serve to upset an opponent; tactical fouls</td></tr></table></div>` },
    { h: 'Deviance and drug taking', html: `
<p><b>Deviance</b> is behaviour that goes against the rules, laws or norms of sport — e.g. violence, match fixing, and taking performance-enhancing drugs (<b>doping</b>).</p>
<div class="tbl"><table><tr><th>Drug type</th><th>Effect wanted</th><th>Side effects</th><th>Sports</th></tr>
<tr><td><b>Anabolic steroids</b></td><td>Increase muscle mass and strength; faster recovery</td><td>Aggression, liver and heart damage, acne, hormonal changes</td><td>Sprinting, weightlifting, power events</td></tr>
<tr><td><b>Stimulants</b></td><td>Increase alertness and reduce tiredness</td><td>Raised heart rate and BP, addiction, anxiety, insomnia</td><td>Cycling, sprinting</td></tr>
<tr><td><b>Beta blockers</b></td><td>Calm nerves; reduce heart rate and shaking</td><td>Tiredness, low BP, slow HR</td><td>Archery, shooting, snooker, golf</td></tr>
<tr><td><b>Diuretics</b></td><td>Lose weight quickly; mask other drugs</td><td>Dehydration, cramps, kidney problems</td><td>Boxing, horse racing (jockeys)</td></tr>
<tr><td><b>EPO</b> / blood doping</td><td>More red blood cells → more oxygen</td><td>Thicker blood, clots, heart attack, stroke</td><td>Endurance: cycling, distance running</td></tr>
<tr><td>Narcotic analgesics</td><td>Mask pain to keep competing</td><td>Addiction; worsening injury</td><td>Contact sports</td></tr></table></div>
<div class="tbl"><table><tr><th>Why some performers take drugs</th><th>Consequences</th></tr>
<tr><td>Pressure to win from coaches, sponsors, nation; money and fame; “everyone else is doing it”; to recover from injury; win-at-all-costs attitude</td><td><b>Performer</b>: bans, loss of medals, titles, sponsors and income; damaged reputation; serious health risks.<br><b>Sport</b>: loses credibility and fans; sponsors withdraw; clean athletes cheated.<br><b>Society</b>: poor role models for young people.</td></tr></table></div>
<p>Anti-doping is run worldwide by <b>WADA</b> (World Anti-Doping Agency) and in the UK by UK Anti-Doping (UKAD): in- and out-of-competition testing, the whereabouts system, education and bans.</p>` },
    { h: 'Financial issues', html: `
<ul><li><b>Match fixing</b> and <b>spot fixing</b> linked to illegal betting (e.g. cricket no-balls); <b>bribery</b> and corruption in bidding for events.</li>
<li><b>Huge wages and transfer fees</b> at the top, while grassroots clubs struggle; ticket prices rise.</li>
<li><b>Inequality</b> — rich clubs and countries buy success; women and minority sports paid far less.</li>
<li><b>Win-at-all-costs</b> culture driven by money encourages gamesmanship, doping and violence.</li></ul>` }
  ],
  eqs: [],
  worked: [
    { q: 'Explain the difference between sportsmanship and gamesmanship. Use examples. (4 marks)', s: ['Sportsmanship: playing within the rules and the spirit of the game — e.g. kicking the ball out for an injured opponent.', 'Gamesmanship: bending the rules / using dubious tactics to gain an advantage — e.g. time-wasting or sledging.'], a: 'Spirit of the game v bending the rules to gain advantage (with examples).' },
    { q: 'Why might an archer take beta blockers? (2 marks)', s: ['Beta blockers calm nerves and reduce heart rate and shaking.', 'This gives a steadier aim in a precision sport.'], a: 'Steady hands / calm nerves for accuracy.' }
  ],
  pitfalls: ['Calling gamesmanship “cheating” — it bends the rules; breaking them is deviance/cheating.', 'Naming a drug without explaining its effect and the type of sport it would help.', 'Giving only health consequences when asked about consequences for the SPORT.', 'Writing vague reasons (“to win”) — explain pressures from money, sponsors, coaches.'],
  cards: [
    ['Sportsmanship?', 'Playing fairly within the rules and spirit of the game.'], ['Gamesmanship?', 'Bending the rules to gain an advantage without breaking them.'], ['Deviance?', 'Behaviour against the rules or norms of sport.'],
    ['Anabolic steroids?', 'Increase muscle mass and strength — power athletes.'], ['Beta blockers?', 'Calm nerves, steady hands — archery, shooting, snooker.'], ['Stimulants?', 'Increase alertness, reduce tiredness.'],
    ['Diuretics?', 'Lose weight quickly / mask drugs — boxing, jockeys.'], ['EPO / blood doping?', 'More red blood cells → more oxygen — endurance athletes.'], ['WADA?', 'World Anti-Doping Agency.'],
    ['Reasons for doping?', 'Pressure to win, money, fame, recovery, others doing it.'], ['Consequences of doping for the sport?', 'Loss of credibility, fans and sponsors.'], ['Match fixing?', 'Deliberately influencing a result, usually for betting.']
  ],
  quiz: [
    { q: 'Kicking the ball out of play for an injured opponent is…', o: ['sportsmanship', 'gamesmanship', 'deviance', 'commercialisation'], x: 'Spirit of the game.' },
    { q: 'Deliberately time-wasting near the end of a match is…', o: ['gamesmanship', 'sportsmanship', 'doping', 'provision'], x: 'Bending the rules.' },
    { q: 'Beta blockers would most help…', o: ['an archer', 'a sprinter', 'a marathon runner', 'a weightlifter'], x: 'Steady hands.' },
    { q: 'EPO increases…', o: ['red blood cell production', 'muscle size', 'calmness', 'weight loss'], x: 'More oxygen carried.' },
    { q: 'A jockey might use diuretics to…', o: ['lose weight quickly', 'gain muscle', 'reduce shaking', 'increase alertness'], x: 'Make the weight.' },
    { q: 'Anabolic steroids increase…', o: ['muscle mass and strength', 'oxygen-carrying capacity', 'calmness', 'flexibility'], x: 'Power events.' },
    { q: 'The organisation that leads worldwide anti-doping is…', o: ['WADA', 'FIFA', 'IOC Media', 'UEFA'], x: 'World Anti-Doping Agency.' },
    { q: 'Spot fixing is linked to…', o: ['illegal betting', 'sportsmanship', 'physical literacy', 'warm-ups'], x: 'Financial deviance.' }
  ],
  exam: [
    { q: 'Give an example of gamesmanship in a named sport. [1]', m: 1, ms: ['e.g. sledging in cricket / time-wasting in football / feigning injury / delaying serve in tennis'] },
    { q: 'Name one performance-enhancing drug and explain how it would benefit a performer in a named activity. [3]', m: 3, ms: ['drug named (e.g. anabolic steroids / beta blockers / EPO / stimulants / diuretics)', 'correct effect (e.g. ↑ muscle mass / steadies hands / ↑ red cells)', 'linked to an appropriate activity (e.g. sprinting / archery / cycling)'] },
    { q: 'Analyse the reasons why some elite performers take performance-enhancing drugs, and the consequences for the performer and the sport. [9]', m: 9, lv: true, ms: ['reasons: pressure to win from coaches, sponsors, country, media', 'reasons: financial rewards — prize money, contracts, sponsorship (commercialisation)', 'reasons: fame; belief that rivals are doping; to recover from injury/training faster', 'consequences for performer: bans, stripped of medals/records, loss of sponsors and income', 'consequences for performer: serious health risks — heart/liver damage, death', 'consequences for performer: damaged reputation / role-model status', 'consequences for sport: loss of credibility; fans and sponsors lost; clean athletes cheated', 'consequences: cost of testing; WADA/UKAD education and whereabouts', 'balanced judgement — risks far outweigh short-term gains'] }
  ],
  sims: ['ethics', 'drugmatch'], gens: []
});
