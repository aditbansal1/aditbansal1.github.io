---
name: AB-ECE28 Datasheet
description: Adit Bansal's portfolio, set as a component datasheet.
colors:
  paper: "#f6f7f4"
  paper-2: "#eceee9"
  ink: "#141f19"
  ink-2: "#47534c"
  rule: "#c5ccc6"
  copper: "#a14f17"
  copper-soft: "#e9d3c1"
  signal: "#1d55b5"
  signal-soft: "#d3dff3"
  package: "#1b1e1d"
  package-ink: "#e9ece8"
  lead: "#9ba29d"
  pcb-paper: "#0c1912"
  pcb-paper-2: "#12251b"
  pcb-ink: "#e6ebe4"
  pcb-ink-2: "#a3b1a8"
  pcb-rule: "#2b4134"
  pcb-copper: "#df9358"
  pcb-signal: "#86acf0"
typography:
  display:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 1.6rem + 5vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.015em"
    fontVariation: "font-stretch: 72%"
  headline:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 1.2rem + 2.2vw, 2.5rem)"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "-0.01em"
    fontVariation: "font-stretch: 82%"
  title:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 450
    lineHeight: 1.3
  body:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Fragment Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.06em"
  data:
    fontFamily: "Fragment Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  hair: "1px"
  sm: "2px"
  package: "3px"
spacing:
  gutter: "clamp(1rem, 0.5rem + 2.5vw, 3rem)"
  section: "clamp(2.5rem, 1.8rem + 3vw, 4.5rem)"
  cell: "0.55rem 0.9rem 0.55rem 0"
  page: "76rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1rem"
  button-primary-hover:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.paper}"
  part-number:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    padding: "0 0.75rem"
  status-stamp:
    textColor: "{colors.copper}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.15rem 0.45rem"
  pin-label-skill-active:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.paper}"
    typography: "{typography.data}"
    rounded: "{rounded.sm}"
  pin-label-link-active:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.paper}"
    typography: "{typography.data}"
    rounded: "{rounded.sm}"
---

# Design System: AB-ECE28 Datasheet

## Overview

**Creative North Star: "The Component Datasheet"**

The site is a datasheet for an engineer, page 1 first. It borrows the reader's own document: a part number in the strip, a pinout as the hero, numbered sections, ruled tables, figure and table captions, status stamps, and errata. Every value on the page is a measured, sourced number. Decoration comes only from the datasheet's own vocabulary and the circuit board it describes.

Light mode is datasheet paper. Dark mode is PCB soldermask with silkscreen text. Two trace colors run through both: copper for skills and the work itself, signal blue for links and anything you can follow.

**Key Characteristics:**
- Pinout hero that doubles as navigation (link pins are real anchors).
- Numbered datasheet sections, each opened by a copper trace rule.
- Ruled tables (2px top and bottom, hairline rows) for all structured content.
- Mono for data, units, labels, captions; condensed Archivo for display, normal-width Archivo for reading.
- Status stamps (PRELIMINARY, ADVANCE INFORMATION) used only where the status is true.

## Colors

### Primary
- **Copper Trace** (`copper`, dark `pcb-copper`): skills, section numbers, spec values, trace rules, bullets, status stamps. `copper-soft` is its lit or highlighted fill.

### Secondary
- **Signal Blue** (`signal`, dark `pcb-signal`): links, link pins, focus rings, text selection, the "wait" segment in timing diagrams. `signal-soft` is its fill.

### Neutral
- **Datasheet Paper** (`paper`) and **Table Fill** (`paper-2`); dark equivalents `pcb-paper`, `pcb-paper-2`.
- **Ink** (`ink`) for text and strong rules; **Secondary Ink** (`ink-2`) for meta, captions, conditions.
- **Hairline** (`rule`) for table rows and dividers.
- **Package Epoxy** (`package`, `package-ink`, `lead`): only for the IC package drawing.

### Named Rules
**The Two Traces Rule.** Copper and signal blue are the only accents. Copper means "this is the work"; blue means "you can go here". Never swap them, never add a third.

**The PCB Rule.** Dark mode is soldermask green-black, never neutral gray or pure black; text is silkscreen off-white.

## Typography

**Display Font:** Archivo Variable at condensed widths (font-stretch 72–82%).
**Body Font:** Archivo Variable at normal width.
**Label/Mono Font:** Fragment Mono.

### Hierarchy
- **Display** (700, stretch 72%, clamp 2.75–5.25rem, lh 0.92): the name on home, note titles (clamp 2.25–4.25rem).
- **Headline** (650, stretch 82%, clamp 1.75–2.5rem): numbered section headings.
- **Title** (450, 1.5rem, lh 1.3): the lead sentence of an application note (1.1875rem on phones).
- **Body** (400, 1rem, lh 1.55): prose, max ~68ch.
- **Label** (mono, 0.75rem, uppercase, tracking 0.06em): table heads, strip, stamps, captions.
- **Data** (mono, 0.875–0.9375rem, tabular numerals): values, pins, refs.

### Named Rules
**The Mono Means Data Rule.** Mono is for values, units, identifiers, pins, and captions. Never for prose or headings.

## Layout

- Single centered page column, max 76rem, side gutter `clamp(1rem, 0.5rem + 2.5vw, 3rem)`.
- Home hero: two columns at ≥64rem (5fr title block with Features, 6fr pinout); below that, a single column ordered name → subtitle → pinout → Features → CTA.
- Note pages: header, lead, then Key Specifications table and Figure 1 side by side at ≥72rem (a wide figure goes full width below the table); body with a sticky Contents column (13rem) at ≥64rem when a note has 4+ sections.
- Tables collapse to stacked rows below 40rem; diagrams too wide for a phone scroll inside their own container.
- Sections separated by `clamp(2.5rem, 1.8rem + 3vw, 4.5rem)`; more space above headings than below.

## Elevation & Depth

Flat. Depth is expressed with rules and tonal fills (`paper-2`, `copper-soft`), never shadows. The only inset shadows are a 1px edge on the IC package and the 3px copper top bar on a highlighted pipeline stage.

## Shapes

Near-square: 1–3px radii everywhere (2px controls, 3px package). Circles only for via pads, pin-1 dots, and diagram nodes. Lines are 1px hairlines, 2px table bounds, 2px traces (4px when lit).

## Components

### Buttons
- **Primary:** ink fill, paper text, 2px radius, 0.7rem × 1rem; hover turns signal blue.
- **Theme toggle:** outlined 1px ink, mono label, half-filled circle swatch; hover turns signal blue.

### Navigation
- **Document strip:** part-number block (ink fill) at left, document label and revision, uppercase mono links at right. Bottom 1px ink rule.
- **Pager:** previous / all notes / next, with mono AN numbers in copper.

### Pinout (signature component)
16-pin DIP drawn in CSS grid: pin names outside, pin numbers inside the package edge, traces drawn from each lead to a via pad at the label. Left pins are skills (copper, buttons); right pins are links (blue, anchors). Hover, focus, or tap lights the label and trace and writes the pin's function into the readout bar below. Traces draw outward on load; static under reduced motion.

### Datasheet table
2px ink rule top and bottom, mono uppercase head, hairline rows, copper group headers, "Table N." caption above.

### Status stamp
Mono uppercase, 1.5px copper outline, used for PRELIMINARY and ADVANCE INFORMATION only; other statuses render as plain secondary-ink text.

### Figures
Inline SVG geometry in theme tokens, "Figure N." mono caption below, honest about scale ("to scale", "schematic").

## Do's and Don'ts

### Do:
- **Do** source every number from `content/` and label simulated or schematic material as such.
- **Do** use the datasheet's own devices (sections, tables, captions, stamps, errata) instead of cards.
- **Do** keep copper for the work and blue for links.
- **Do** keep motion to traces drawing in, and render them fully drawn under reduced motion.

### Don't:
- **Don't** use gradients, glassmorphism, drop shadows, or card grids.
- **Don't** add proficiency bars, ratings, or invented specs.
- **Don't** put eyebrow labels above headings; the section number sits inline in the heading.
- **Don't** use mono for prose.
