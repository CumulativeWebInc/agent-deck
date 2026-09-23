# Changelog — agent-deck

All notable changes to this product. Dates in US/Eastern.

## 2026-09-23 — v2026.09.23 — Agent Operating System retrofit + trust infra
- **A12 Ship Week machine (2026-09-23):** `SHIP-WEEK.md` playbook at repo root; `/ship-week/` countdown/announcement page (proposed #1: 2026-10-19–23, PROPOSED label, countdown JS, per-day blog + social-thread templates, Day-5 hackathon with Booth-credit bounties, $0 cash); `ship-week/ship-week.json` (schema `cwi.ship-week/1.0`) registered in SCHEMA-VERSIONS.json; nav links on Home/Products/License. Ship Week #1 is PROPOSED — dates activate only on Black's approval.
- **Agent Operating System retrofit (2026-09-23):** CWI branding, CTA + verified try-link, machine-readable `content.json`, `.well-known/agent-card.json`.
- **A7 PR preview bot:** `.github/workflows/pr-preview.yml` builds each PR branch, deploys a live preview to `pr-previews/<PR#>/`, and posts the preview link + contract validation checklist as a PR comment (Vercel pattern).
- **A8/A9 contract CI gate:** the build now fails if `.well-known/agent-card.json` is missing or invalid (name/url required), if the `SCHEMA-VERSIONS.json` contract breaks (where the registry exists), if `content.json` is invalid, or if `CHANGELOG.md` is missing.
