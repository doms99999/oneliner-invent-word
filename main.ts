// Invent a Word We Need — one new English word + its one-line definition.
// The program writes the word and definition to /output/entry.txt (at most 140 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "ghostping — the notification that vanishes the second you swipe down to read it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
