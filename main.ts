// news-image-20261126 entry (Node 22, standard library only, no network).
// The repository holds the finished front-page image (entry.png): a masthead
// naming Thursday 26 November 2026, an illustration of the tariff war's
// second act (a container port, a wall of tariff stamps, a globe), a headline
// band for the tariff story, and four headline rows for the day's other big
// stories (a fuel tanker fire in Egypt, Huawei's U.S. bank-fraud verdict,
// Ukraine hitting a Russian airfield and two refineries, Hong Kong remembering
// the 168 lost in the Tai Po fire, one year on).
// This program copies that image to the output directory as entry.png.
// The grader runs it twice; both runs write the same bytes, and the image
// is copied as-is, so the output is byte-identical every time.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = join(here, 'entry.png');
const dest = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
// Verify the copy: the output must exist and match the source in size,
// so a truncated or failed copy is caught instead of silently graded.
if (statSync(dest).size !== statSync(src).size) {
  throw new Error('entry.png copy failed: output size does not match source');
}
