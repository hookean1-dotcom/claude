#!/usr/bin/env python3
"""Bundle src/ into a single self-contained HTML file (index.html)."""
import pathlib, sys
root = pathlib.Path(__file__).parent
src = root / 'src'
order = ['core.js', 'diagrams.js', 'data/units.js', 'data/unit1.js', 'data/unit2.js', 'data/unit3.js',
         'data/unit4.js', 'data/options.js', 'data/practicals.js', 'gens.js', 'sims1.js', 'sims2.js',
         'games.js', 'app.js']
js = '\n'.join(f'/* ---- {f} ---- */\n' + (src / f).read_text(encoding='utf-8') for f in order)
css = (src / 'styles.css').read_text(encoding='utf-8')
body = (src / 'shell.html').read_text(encoding='utf-8').replace('/*CSS*/', css).replace('/*JS*/', js)
assert '</script' not in js.replace('<\\/script', ''), 'script terminator inside JS'
full = ('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n')
head_end = body.index('<div class="app">')
full += body[:head_end] + '</head>\n<body>\n' + body[head_end:] + '</body>\n</html>\n'
(root / 'index.html').write_text(full, encoding='utf-8')
if len(sys.argv) > 1:  # optional: fragment without document skeleton (for hosts that add their own)
    pathlib.Path(sys.argv[1]).write_text(body, encoding='utf-8')
print(f'index.html: {len(full.encode()) / 1024:.0f} KB')
