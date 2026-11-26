import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Deadpan Forecasts for Cities That Do Not Exist: one line, at most
// 160 characters. An invented city, Norblewick, with one absurd but
// concrete weather fact — warm soup falling from the sky — delivered
// in a straight-faced broadcast tone, with the town's only cloud
// clocking off like a shift worker.
const LINE =
  "In Norblewick, expect scattered showers of warm tomato soup from 3 p.m., clearing by 6 when the town's only cloud clocks off for the day.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate self-check: the entry must be 1–160 UTF-8 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-160 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
