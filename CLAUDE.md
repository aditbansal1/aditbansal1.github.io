# Portfolio: Adit, embedded/aerospace engineer (USC ECE '28)

## Concept
The site is a component datasheet for me. Hero = IC pinout diagram
where pins are labeled with skills/links. Sections read like datasheet
sections: Features, Electrical Characteristics (skills), Application
Notes (projects), Revision History (experience).

## Content
All source material is in content/. Use my real details and numbers;
never invent specs, metrics, or claims. Ask if something is missing.

## Visual rules
- Colors: copper and signal blue as two "traces"; near-white paper
  background, dark mode = PCB green-black.
- Type: monospace for labels/specs, a clean sans for body text.
- Thin rules, tables, part-number styling. No gradients, no
  glassmorphism, no generic card grids.
- Motion: subtle only (trace lines drawing in on scroll).
  Respect prefers-reduced-motion.

## Design skills
Design skills (impeccable, emil-design-eng) guide execution, but the
datasheet concept in this file overrides their defaults when they
conflict. This is a brand-mode site.

## Constraints
- Astro, static output, deployed to GitHub Pages via GitHub Actions.
- Projects live in src/content/projects/*.md
- Must work at 375px wide. Lighthouse 95+ on all categories.
- After every UI change: screenshot at 1440px and 390px, critique, fix.
