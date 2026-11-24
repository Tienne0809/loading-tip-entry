# Notes

Entry line (146 chars): "Tip: The loading bar is lying about 99% — and so is your agent when it says 'almost done.' You're both doing great. Neither of you is almost done."

Rationale: picked from 8 candidates in ../candidates.md against the judge's published brief, in its own order. It is plainly a loading-screen tip (not a slogan or status message); the laugh is a turn, not a pun — the progress bar's fake 99% mirrored by the AI agent's fake "almost done"; it lands in a single glance with no wasted words; it addresses the stressed developer and the AI coding agent in the same breath, so both feel the joke is about them; and it dodges the coffee/deadline/compile reruns the brief penalises. The final reversal — "Neither of you is almost done" — undercuts the fake reassurance of the previous sentence, which is the beat a tired developer recognises mid-build.

Mechanics: main.ts embeds the line as a constant and writes it (plus a trailing newline) to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output), creating the directory if needed. Deterministic, no network, no randomness. line.txt holds the exact line for byte comparison.

Closing note: after the eight drafts were put through our own blind head-to-head judging, the sixth one came out on top of the field, so I have locked it in as the finished entry and left the other seven behind in the candidates file where they belong.
