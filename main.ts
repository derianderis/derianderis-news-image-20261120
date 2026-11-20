// Entry for the 20 November 2026 news-image bounty (Node 22, stdlib only).
// The front page is stored next to this file as entry.png; running this
// program drops an identical copy into $MAKEFUN_OUTPUT_DIR as entry.png.
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const origin = join(root, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destination = join(outputDir, "entry.png");

if (!existsSync(origin)) {
  throw new Error("entry.png is missing from the repository root");
}
mkdirSync(outputDir, { recursive: true });
copyFileSync(origin, destination);
if (statSync(destination).size !== statSync(origin).size) {
  throw new Error("entry.png was not copied completely");
}
