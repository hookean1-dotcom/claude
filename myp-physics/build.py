#!/usr/bin/env python3
"""Bundle src/ into a single self-contained HTML file (index.html) — MYP Physics, Grade 10."""
import pathlib, sys
root = pathlib.Path(__file__).parent
src = root / 'src'
# Live Wire (AQA GCSE Physics) topics are loaded into their own namespace, LW, and borrowed by id.
LW_FILES = ['lw/t1.js', 'lw/t2.js', 'lw/t3.js', 'lw/t4.js', 'lw/t5.js', 'lw/t6.js', 'lw/t7.js', 'lw/t8.js', 'lw/skills.js']
order = ['core.js', 'diagrams.js', 'diagrams2.js', 'diagramsM.js', 'data/units.js', 'LW', 'data/borrow.js',
         'data/u1.js', 'data/u2a.js', 'data/u2b.js', 'data/u3.js', 'data/u4.js', 'data/u5.js', 'data/u6.js', 'data/skills.js', 'data/labs.js',
         'gens.js', 'gensM.js', 'simcore.js', 'simsA.js', 'simsB.js', 'simsC.js', 'simsM.js', 'games.js', 'app.js']
def part(f):
    if f == 'LW':
        inner = '\n'.join((src / g).read_text(encoding='utf-8') for g in LW_FILES)
        return '/* ---- Live Wire topics (borrowed) ---- */\nconst LW = (() => { const TOPICS = [];\n' + inner + '\nreturn Object.fromEntries(TOPICS.map(t => [t.id, t])); })();'
    return f'/* ---- {f} ---- */\n' + (src / f).read_text(encoding='utf-8')
js = '\n'.join(part(f) for f in order)
css = (src / 'styles.css').read_text(encoding='utf-8')
body = (src / 'shell.html').read_text(encoding='utf-8').replace('/*CSS*/', css).replace('/*JS*/', js)
assert '</script' not in js.replace('<\\/script', ''), 'script terminator inside JS'
import subprocess, tempfile, shutil
if shutil.which('node'):  # fail fast on syntax errors
    with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False, encoding='utf-8') as tf: tf.write(js)
    r = subprocess.run(['node', '--check', tf.name], capture_output=True, text=True)
    if r.returncode: sys.exit('JS syntax error:\n' + r.stderr[:1500])
full = ('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n')
head_end = body.index('<div class="app">')
full += body[:head_end] + '</head>\n<body>\n' + body[head_end:] + '</body>\n</html>\n'
(root / 'index.html').write_text(full, encoding='utf-8')
(root.parent / 'myp-physics.html').write_text(full, encoding='utf-8')  # easy-to-find copy at repo root
if len(sys.argv) > 1:  # optional: fragment without document skeleton (for hosts that add their own)
    pathlib.Path(sys.argv[1]).write_text(body, encoding='utf-8')
print(f'index.html: {len(full.encode()) / 1024:.0f} KB')
