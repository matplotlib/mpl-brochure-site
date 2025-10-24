
from pathlib import Path
import logging

import matplotlib
matplotlib.use('Agg')

_log = logging.getLogger(__name__)
# start to make info.js

lines = {}
# assumes that your directory structure has matplotlib/ and mpl-brochure-site/
# at the same level relative each other.
home = Path('../../../../matplotlib/galleries')
dirs = ['plot_types/arrays/', 'plot_types/basic/', 'plot_types/stats/']
for d in dirs:
    _log.info('working on: %s', d)
    for fn in (home / d).glob('*.py'):
        _log.info('               %s', fn)
        name = fn.stem

        local_vars = {}
        global_vars = {}
        exec(fn.read_text(), global_vars, local_vars)
        local_vars['fig'].savefig(f'{name}300.png', dpi=300)

        stop = False
        for line in open(fn):
            if stop:
                cap = line[:-1]
                break
            if line[:3] == '===':
                stop = True
        lines[name] = (
            f'"image": "{name}300.png", '
            f'"caption": "{cap}", '
            f'"link": "{d}{name}.html"'
        )

with open('../images-rotate-info.js', 'w') as stout:
    stout.write('var images_rotate = [\n')
    for _, line in sorted(lines.items()):
        stout.write('    {' + line + '},\n')
    stout.write('];\n')
