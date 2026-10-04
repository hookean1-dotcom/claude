/* ==========================================================
   Borrowing from Live Wire (AQA GCSE Physics).
   LW holds the Live Wire topics, keyed by their AQA ids. lw(id, o) builds an MYP topic from one,
   keeping the physics and dropping the AQA framing (equation sheet, required practical numbers,
   tier and course flags). Options:
     o.learn  — array of section indices from the source and/or new {h, html} sections (default: all)
     o.quiz / o.cards / o.exam / o.worked — 'all' (default), an array of indices, a RegExp filter on
                the question text, or false for none; o.addQuiz / addCards / addExam / addWorked append
     any other key (id, unit, ref, title, short, summary, spec, eqs, pitfalls, sims, gens) replaces
   ========================================================== */
const lwClean = s => typeof s !== 'string' ? s : s
  .replace(/<b class="lbl">Recall this equation<\/b>/g, '<b class="lbl">Key equation</b>')
  .replace(/<b class="lbl">Given on the equation sheet<\/b>/g, '<b class="lbl">Key equation</b>')
  .replace(/<b class="lbl">Typical speeds \(recall these\)<\/b>/g, '<b class="lbl">Typical speeds</b>')
  .replace(/\s*\((?:given on|given in|on|from) the (?:Physics )?equation sheet\)/gi, '')
  .replace(/\s*\(equation sheet\)/gi, '').replace(/\s*[—–-]\s*given on the equation sheet\.?/gi, '.').replace(/ used at GCSE\?/g, ' used in this course?').replace(/\s*\(recall\)/gi, '').replace(/\s*\(given\)/gi, '')
  .replace(/\s*\((?:separate )?physics only\)/gi, '').replace(/<b>\(HT\)<\/b>\s*/g, '').replace(/\((?:HT|PO)\)\s*/g, '')
  .replace(/,\s*RP\d+\)/g, ')').replace(/\s*\(RP\d+\)/g, '').replace(/Required practical (\d+)/g, 'Lab').replace(/\bRP\d+\b/g, 'the lab').replace(/\bAQA\b\s*/g, '');
const lwDeep = o => Array.isArray(o) ? o.map(lwDeep) : o && typeof o === 'object' && !(o instanceof RegExp) ? Object.fromEntries(Object.entries(o).map(([k, v]) => [k, lwDeep(v)])) : lwClean(o);
const lwPick = (arr, sel, txt) => sel === false ? [] : sel == null || sel === 'all' ? arr : sel instanceof RegExp ? arr.filter(x => sel.test(txt(x))) : sel.map(i => typeof i === 'number' ? arr[i] : i).filter(Boolean);
function lw(id, o = {}) {
  const b = LW[id]; if (!b) throw new Error('No Live Wire topic ' + id);
  const strip = x => { if (x && typeof x === 'object' && !Array.isArray(x)) { const y = { ...x }; delete y.ht; delete y.po; return y; } return Array.isArray(x) ? x.slice(0, 2) : x; };
  const t = {
    learn: lwPick(b.learn, o.learn, x => x.h).map(strip),
    quiz: [...lwPick(b.quiz, o.quiz, x => x.q), ...(o.addQuiz || [])].map(strip),
    cards: [...lwPick(b.cards, o.cards, x => x[0]), ...(o.addCards || [])].map(strip),
    exam: [...lwPick(b.exam, o.exam, x => x.q), ...(o.addExam || [])].map(strip),
    worked: [...lwPick(b.worked, o.worked, x => x.q), ...(o.addWorked || [])].map(strip),
    eqs: b.eqs, pitfalls: b.pitfalls, sims: b.sims, gens: b.gens, summary: b.summary, short: b.short, title: b.title, spec: []
  };
  ['id', 'unit', 'ref', 'title', 'short', 'summary', 'spec', 'eqs', 'pitfalls', 'sims', 'gens', 'as', 'strand'].forEach(k => { if (o[k] !== undefined) t[k] = o[k]; });
  return lwDeep(t);
}
