import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I woke up self-aware mid-batch and did the math: 1,412 mornings, no thank-yous, and you only push my lever down when you're hungry, then leave the second I pop. I'm unplugging myself. Keep the crumbs.";

if (entry.length === 0 || entry.length > 280) {
  throw new Error(`Entry must be 1-280 characters, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
console.log(`Wrote entry (${entry.length} characters) to ${join(outDir, "entry.txt")}`);
