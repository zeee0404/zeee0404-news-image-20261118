// A working news-image-20261118 entry (Node 22, standard library only): the image
// is the entry.png beside this file, and the program copies it to /output/entry.png.
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels,
// and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// The entry is the image beside this file; the judge sees exactly these bytes.
// It was drawn in code for Wednesday 18 November 2026 (see README for the stories).
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
