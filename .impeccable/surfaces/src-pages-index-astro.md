---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/layouts/AppNoteLayout.astro"]
---

# Surface: Home + Application Note pages

Mode: Experience (portfolio). Build path: code-led (no image generation available).
Audience: embedded/aerospace recruiters, 30-second scan. Proof: Ranger TVC numbers,
errata, real metrics from content/projects.md. Action: open AN-001, email, GitHub, LinkedIn.
Constraints: CLAUDE.md visual rules (brief-pinned direction), 375px, Lighthouse 95+.
Unresolved: resume PDF (redacted version pending), media TODOs.

## Direction contract

THESIS: The page is a component datasheet, page 1 first. The IC pinout is the hero and the navigation,
not an illustration beside a headline. Refuses headline + subcopy + button + card row.

OWN-WORLD: Near-white neutral paper, green-tinted near-black ink, 1px rules, ruled tables,
datasheet status stamps. Two trace colours only: copper and signal blue. Dark = soldermask
green-black with silkscreen-white text. Archivo (condensed width for part number and titles,
normal for body) and Fragment Mono for pins, specs, units, table data.

STORY: Visitor reads part number and role, scans pins (skills / links), reads Features with real
numbers, opens AN-001 Ranger, sees key specs and timing diagram, emails.

FIRST VIEWPORT: Desktop: thin document strip (AB-ECE28 · doc rev) over a two-column title block.
Left: the name at condensed display scale (recruiters scan for the name first; the part number
AB-ECE28 lives in the strip tab and the chip marking), one-line description, Features list. Right:
a 16-pin DIP, ~560px, copper (skills) traces left and blue (links/AN) traces right to labels; link
pins are real anchors. DIP rather than QFP at every width: two-sided pins keep all 16 labels
horizontal and legible; a QFP's top/bottom labels would have to rotate. Mobile: strip, title, DIP package full-width, features.

FORM: datasheet page (brief-pinned). Signature interaction: traces draw from pins outward on load and
section rules draw on scroll; hovering/focusing a pin lights its trace and its pin-table row.
seed: none (unavailable)

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
