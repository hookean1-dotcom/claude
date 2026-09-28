#!/usr/bin/env node
/* Build Casefile into a single self-contained HTML file.
   node build.js          -> index.html (standalone page) + dist/artifact.html (body-only, for publishing)
   Validates content: case references, tool references, duplicate ids, quiz shape. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const SRC = path.join(__dirname, 'src');
const order = ['core.js', 'tools.js', 'data/units.js', 'data/u1a.js', 'data/u1b.js', 'data/u2a.js', 'data/u2b.js', 'data/u3a.js', 'data/u3b.js', 'data/u4a.js', 'data/u4b.js', 'data/skills.js', 'data/reference.js', 'data/mocks.js', 'games.js', 'app.js'];
const files = order.filter(f => fs.existsSync(path.join(SRC, f)));
const js = files.map(f => `/* ---- ${f} ---- */\n` + fs.readFileSync(path.join(SRC, f), 'utf8')).join('\n');
const css = fs.readFileSync(path.join(SRC, 'style.css'), 'utf8');

/* ---------- validate in a sandbox ---------- */
const errors = [], warns = [];
{
  const dataJs = files.filter(f => f !== 'app.js' && f !== 'games.js').map(f => fs.readFileSync(path.join(SRC, f), 'utf8')).join('\n');
  const seen = {};
  const ctx = { console, localStorage: { getItem: () => null, setItem() { } }, window: {}, document: { querySelector() { } }, matchMedia: () => ({ matches: false }) };
  vm.createContext(ctx);
  const wrapped = dataJs.replace('const addCases = list => list.forEach(c => { CASES[c.id] = c; });', 'const addCases = list => list.forEach(c => { if (CASES[c.id]) __dup.push(c.id); CASES[c.id] = c; });');
  vm.runInContext('var __dup = [];\n' + wrapped + '\n;this.__out = { CASES, TOPICS, TOOLS, __dup, STATUTES, GLOSSARY, BESPOKE: typeof BESPOKE!=="undefined"?Object.keys(BESPOKE):[], MOCKS: typeof MOCKS!=="undefined"?MOCKS:null };', ctx, { filename: 'data.js' });
  const { CASES, TOPICS, TOOLS, __dup, BESPOKE } = ctx.__out;
  __dup.forEach(id => errors.push('duplicate case id: ' + id));
  const refs = new Set();
  const scan = (s, where) => String(s).replace(/\[\[c:([\w-]+)(?:\|[^\]]+)?\]\]/g, (_, id) => { refs.add(id); if (!CASES[id]) errors.push(`missing case "${id}" in ${where}`); return ''; });
  const tids = new Set();
  TOPICS.forEach(t => {
    if (tids.has(t.id)) errors.push('duplicate topic ' + t.id); tids.add(t.id);
    ['learn'].forEach(k => (t[k] || []).forEach(s => scan(s.html, t.id)));
    (t.worked || []).forEach(w => { scan(w.q, t.id); w.s.forEach(x => scan(x, t.id)); });
    (t.quiz || []).forEach((q, i) => { if (!Array.isArray(q.o) || q.o.length < 2) errors.push(`${t.id} quiz ${i} bad options`); scan(q.q, t.id); q.o.forEach(o => scan(o, t.id)); });
    (t.cards || []).forEach(c => { scan(c[0], t.id); scan(c[1], t.id); });
    (t.pitfalls || []).forEach(p => scan(p, t.id));
    (t.cases || []).forEach(c => { if (!CASES[c]) errors.push(`missing case "${c}" in ${t.id}.cases`); });
    (t.tools || []).forEach(k => { if (!TOOLS[k] && !BESPOKE.includes(k)) errors.push(`missing tool "${k}" in ${t.id}`); });
    (t.exam || []).forEach(e => { scan(e.q, t.id); if (e.scen) scan(e.scen, t.id); });
    ['summary', 'title', 'short'].forEach(k => { if (!t[k]) warns.push(`${t.id} missing ${k}`); });
  });
  Object.entries(TOOLS).forEach(([k, t]) => { scan(t.intro || '', 'tool ' + k); if (t.type === 'tree') { Object.entries(t.nodes).forEach(([nid, n]) => { scan(n.q || n.v || '', 'tool ' + k); scan(n.x || '', 'tool ' + k); scan(n.help || '', 'tool ' + k); (n.cases || []).forEach(c => { if (!CASES[c]) errors.push(`missing case ${c} in tool ${k}`); }); (n.o || []).forEach(([l, nx]) => { if (!t.nodes[nx]) errors.push(`tool ${k} node ${nid} -> missing ${nx}`); }); }); if (!t.nodes[t.start || 'start']) errors.push(`tool ${k} has no start`); } if (t.type === 'sort') t.items.forEach(it => { if (!t.cats.includes(it[1])) errors.push(`tool ${k} item category "${it[1]}" not in cats`); scan(it[0], 'tool ' + k); scan(it[2] || '', 'tool ' + k); }); if (t.type === 'steps') t.steps.forEach(s => scan(s.html, 'tool ' + k)); });
  Object.values(CASES).forEach(c => { if (!c.n || !c.y || !c.f || !c.p) errors.push('incomplete case ' + c.id); if (c.t && !tids.has(c.t)) warns.push(`case ${c.id} home topic ${c.t} not found`); scan(c.p, 'case ' + c.id); });
  // tools.js inline references
  scan(fs.readFileSync(path.join(SRC, 'tools.js'), 'utf8'), 'tools.js');
  if (fs.existsSync(path.join(SRC, 'app.js'))) scan(fs.readFileSync(path.join(SRC, 'app.js'), 'utf8'), 'app.js');
  const counts = { topics: TOPICS.length, cases: Object.keys(CASES).length, cards: TOPICS.reduce((a, t) => a + (t.cards || []).length, 0), quiz: TOPICS.reduce((a, t) => a + (t.quiz || []).length, 0), exam: TOPICS.reduce((a, t) => a + (t.exam || []).length, 0), tools: Object.keys(TOOLS).length + BESPOKE.length, statutes: ctx.__out.STATUTES.length, glossary: ctx.__out.GLOSSARY.length };
  console.log('Content:', JSON.stringify(counts));
  const unused = Object.keys(CASES).filter(id => !refs.has(id) && !TOPICS.some(t => (t.cases || []).includes(id)));
  if (unused.length) warns.push('cases not linked from any topic: ' + unused.join(', '));
}
warns.forEach(w => console.log('warn:', w));
if (errors.length) { errors.forEach(e => console.log('ERROR:', e)); console.log(errors.length + ' errors'); if (!process.argv.includes('--force')) process.exit(1); }

/* ---------- assemble ---------- */
const head = `<title>Casefile · Criminology</title>
<meta name="description" content="Casefile: an interactive study app for the WJEC/Eduqas Level 3 Applied Diploma in Criminology — notes, case files, theories, flashcards, quizzes, interactive tools, controlled assessment practice and mock exams for all four units.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,500..900&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Serif:ital,wght@0,500;1,400;1,500;1,600&family=IBM+Plex+Mono:wght@400;500;600&display=swap">
<style>
${css}
</style>`;
const body = `<div class="app">
  <aside class="side" id="side" aria-label="Navigation"></aside>
  <div class="main">
    <header class="top">
      <button class="icon-btn menu-btn" id="menu-btn" type="button" aria-label="Open menu"></button>
      <div class="crumbs" id="crumbs"></div>
      <button class="search-btn" id="search-btn" type="button" aria-label="Search"></button>
      <button class="chip route-chip" id="route-chip" type="button"></button>
      <span class="chip hide-m" id="streak-chip"></span>
      <span class="chip" id="xp-chip"></span>
      <button class="icon-btn hide-m" id="sound-btn" type="button" aria-label="Toggle sound"></button>
      <button class="icon-btn" id="theme-btn" type="button" aria-label="Toggle theme"></button>
    </header>
    <main class="view" id="view"></main>
  </div>
</div>
<nav class="tabbar" id="tabbar" aria-label="Quick navigation"></nav>
<script>
${js}
</script>`;
fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'dist', 'artifact.html'), head + '\n' + body + '\n');
fs.writeFileSync(path.join(__dirname, 'index.html'), `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n${head}\n</head>\n<body>\n${body}\n</body>\n</html>\n`);
console.log('Built index.html (' + Math.round(fs.statSync(path.join(__dirname, 'index.html')).size / 1024) + ' KB)');
