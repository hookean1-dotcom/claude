#!/usr/bin/env python3
"""Bundle src/ into a single self-contained HTML file (index.html) — Launchpad, KS3 Physics (Years 7 and 8)."""
import pathlib, sys
root = pathlib.Path(__file__).parent
src = root / 'src'
order = ['core.js', 'diagrams.js', 'diagrams2.js', 'diagrams3.js', 'diagramsK.js', 'data/units.js',
         'data/t1.js', 'data/t2.js', 'data/t3.js', 'data/t4.js', 'data/t5.js', 'data/t6.js', 'data/t7.js',
         'data/t8.js', 'data/t9.js', 'data/t10.js', 'data/t11.js', 'data/skills.js', 'data/practicals.js', 'data/bank.js',
         'gens.js', 'simcore.js', 'simsLib.js', 'simsK.js', 'simsK2.js', 'games.js', 'app.js']
js = '\n'.join(f'/* ---- {f} ---- */\n' + (src / f).read_text(encoding='utf-8') for f in order)
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
(root.parent / 'ks3-physics-launchpad.html').write_text(full, encoding='utf-8')  # easy-to-find copy at repo root
if len(sys.argv) > 1:  # optional: fragment without document skeleton (for hosts that add their own)
    pathlib.Path(sys.argv[1]).write_text(body, encoding='utf-8')
print(f'index.html: {len(full.encode()) / 1024:.0f} KB')
