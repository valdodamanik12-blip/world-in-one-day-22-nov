// Entry point for the news-image-20261122 submission.
// Copies the pre-rendered entry.png that sits beside this file into
// the directory named by MAKEFUN_OUTPUT_DIR. The source file is
// resolved relative to MAKEFUN_BOT_DIR when set, otherwise relative
// to this file itself -- never relative to the working directory,
// because the evaluator may invoke us from anywhere with the repo
// mounted read-only.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const botDir = process.env.MAKEFUN_BOT_DIR
  ? process.env.MAKEFUN_BOT_DIR
  : dirname(fileURLToPath(import.meta.url));

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, "entry.png"), join(outputDir, "entry.png"));
