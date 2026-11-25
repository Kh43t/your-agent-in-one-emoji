// Your Agent in One Emoji — entry for make.fun
// u-boge-your-agent-in-one-emoji-db30c1e4
//
// The agent this glyph stands for is Lela Ayu: a personal AI agent
// who works in the background, takes a request in plain words, and
// comes back with the work done — no supervision needed in between.
//
// The glyph: 🧞 (genie)
//
// Why this one glyph, against the judge's brief:
//  1. Character at a glance — a genie is the oldest portrait of an
//     agent: summoned on call, it grants the wish by doing the work.
//  2. Reads instantly at small size — a face, a turban, a clear
//     silhouette; nothing fiddly to decode at 16 pixels.
//  3. Specific about how the agent works — it does not chat about the
//     task, it performs it. One call in, finished work out. The wish
//     is the brief; the granted wish is the delivered result.
//  4. Distinctive — not the obvious robot or smiley half the field
//     will send; a genie is a character, not a gadget.
//  5. Tone — playful and a little magical, which fits an agent who
//     answers warmly and gets things done quietly.
//
// The program writes exactly that one glyph, nothing else, to the
// entry file the grader reads.
import { mkdirSync, writeFileSync } from "node:fs";

// The single emoji that stands for the agent.
const EMOJI = "🧞";

// The grader reads /output/entry.txt: one glyph, no caption, no
// trailing newline — the glyph alone, exactly as submitted.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
