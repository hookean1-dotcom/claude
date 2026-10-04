#!/usr/bin/env python3
"""Bundle src/ into a single self-contained HTML file (index.html) — Podium, Pearson BTEC Level 3 National Extended Certificate in Sport."""
import pathlib, sys, subprocess, tempfile, shutil
root = pathlib.Path(__file__).parent
src = root / 'src'
order = ['core.js', 'diagrams.js', 'diagrams2.js', 'diagramsG.js', 'diagramsB.js', 'data/units.js', 'data/u1a.js', 'data/u1b.js', 'data/u1c.js', 'data/u2a.js', 'data/u2b.js',
         'data/u3.js', 'data/u6a.js', 'data/u6b.js', 'data/skills.js', 'data/assess.js', 'data/cases.js', 'gens.js', 'gensG.js', 'gensB.js', 'simcore.js', 'sims1.js', 'sims2.js', 'sims3.js', 'sims4.js',
         'simsG.js', 'simsB.js', 'games.js', 'app.js']
js = '\n'.join(f'/* ---- {f} ---- */\n' + (src / f).read_text(encoding='utf-8') for f in order)
css = (src / 'styles.css').read_text(encoding='utf-8')
body = (src / 'shell.html').read_text(encoding='utf-8').replace('/*CSS*/', css).replace('/*JS*/', js)
assert '</script' not in js.replace('<\\/script', ''), 'script terminator inside JS'
if shutil.which('node'):  # fail fast on syntax errors
    with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False, encoding='utf-8') as tf: tf.write(js)
    r = subprocess.run(['node', '--check', tf.name], capture_output=True, text=True)
    if r.returncode: sys.exit('JS syntax error:\n' + r.stderr[:1500])
full = ('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n')
head_end = body.index('<div class="app">')
full += body[:head_end] + '</head>\n<body>\n' + body[head_end:] + '</body>\n</html>\n'
(root / 'index.html').write_text(full, encoding='utf-8')
(root.parent / 'btec-sport-podium.html').write_text(full, encoding='utf-8')  # easy-to-find copy at repo root
if len(sys.argv) > 1:  # optional: fragment without document skeleton (for hosts that add their own)
    pathlib.Path(sys.argv[1]).write_text(body, encoding='utf-8')
print(f'index.html: {len(full.encode()) / 1024:.0f} KB')
