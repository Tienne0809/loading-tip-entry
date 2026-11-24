import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Tip: The loading bar is lying about 99% — and so is your agent when it says 'almost done.' You're both doing great. Neither of you is almost done.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, line + "\n");
