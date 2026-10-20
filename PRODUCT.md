# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static output), deployed to GitHub Pages via GitHub Actions. Pinned by CLAUDE.md.

## Users

Primary: recruiters and hiring engineers for embedded-software and aerospace roles
(internships and new-grad), skimming a candidate in about 30 seconds per page,
usually from a resume link or LinkedIn, on desktop or phone.
Secondary: LPL / USC lab peers and professors checking project details.

## Product Purpose

Personal portfolio for Adit Bansal, USC Viterbi B.S. ECE (Aug 2024 – May 2028).
Success: a recruiter leaves knowing Adit writes deterministic, safety-minded
embedded flight software (Ranger TVC on Zephyr / CAN-FD) and can find the proof
and a way to contact him within seconds.

## Positioning

The site is a component datasheet for the engineer: pinout, features, electrical
characteristics, application notes, revision history. It speaks the reader's own
document language, and every spec on it is a measured, real number.

## Operating Context

Visitors arrive cold and scan. They read datasheets daily, so tables, part numbers,
status markings (PRELIMINARY, ADVANCE INFORMATION), and errata read as native.

## Capabilities and Constraints

- Home page + one Application Note page per project (`src/content/projects/*.md`).
- Must work at 375px wide; Lighthouse 95+ in all categories.
- No resume link until a redacted PDF (no phone, no GPA) is provided.
- Never publish: phone number, GPA, the Summer 2027 internship.
- Solar 18% result must be labeled simulated. String processor is ongoing research.
- UAV figures shown as worded on the resume ("up to 25%", "40%").

## Brand Commitments

From CLAUDE.md (binding): datasheet concept; copper and signal blue as two "traces";
near-white paper background, dark mode = PCB green-black; monospace for labels/specs,
clean sans for body; thin rules, tables, part-number styling; no gradients,
glassmorphism, or generic card grids; motion limited to trace lines drawing in on
scroll, respecting prefers-reduced-motion.

## Evidence on Hand

- `content/projects.md`: all project facts, metrics, and bugs fixed.
- `content/Adit_Bansal_Resume_October.pdf`: source for dates, skills, "US Citizen".
- No photos, plots, or posters exist yet (TODOs). Diagrams may be drawn only from
  facts in projects.md. Unknowns: oscilloscope finding, UAV baselines.

## Product Principles

1. Every number is real and sourced; nothing invented to fill a gap.
2. The first screen of every page is the 30-second read.
3. Speak datasheet: structure and vocabulary the reader already trusts.
4. Show engineering judgment (decisions, errata), not just outcomes.

## Accessibility & Inclusion

WCAG AA contrast in both themes; diagrams have text equivalents (pin table, captions);
reduced-motion respected; fully keyboard navigable.
