// Ship It Friday — make.fun entry (program/v1).
// Writes one commit-message line to /output/entry.txt.
// Deterministic: fixed string, no network, no time, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "refactor: delete the prod database backups — they were slowing down my Friday deploy and confidence is cheaper than storage";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
