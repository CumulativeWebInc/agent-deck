# Changelog — agent-deck

## 2026-09-23 — Apps wave: +9 SKUs (36 live, 1 in the workshop)
- **KingCode Lens** (chief): Web apps for Meta Ray-Ban Display glasses — a simulator lab plus a “Hey KingCode” voice agent, built for the Agent Deck shelf.
- **Sync Audition Room** (sync): Audition the 24-track catalog by mood with real Spotify embeds — VERIFIED placement proofs and a neutral direct-clearance chip on every track.
- **Brief Matcher** (sync): Paste a brief, get the catalog ranked by client-side scoring — every score honestly labeled UNVERIFIED until a human checks it.
- **Sonic Search** (sync): Natural-language search over the 35-track catalog with transparent value-cited scoring — real audio features where they exist, honest tag-only labels everywhere else.
- **Trust Log** (data): A cryptographic transparency log of CWI’s verified claims — Ed25519-signed envelopes in a sha256 hash chain, checkable by anyone with zero trust required.
- **Skill Sentinel** (data): A linter and security scanner for agent skills — A–F grades across 6 finding categories with machine-readable findings for CI gates.
- **Verdict Watch** (data): Dead-link radar for trust claims — re-verifies URLs and reports STILL_VALID, CHANGED, DEAD, or UNREACHABLE with diffs; never auto-downgrades.
- **Identity Ledger** (affairs): Portable Ed25519-signed identity cards for AI agents — mint, verify, and directory lookup, with hash-chained revocations.
- **Twenty Minds** (chief): Twenty adversarial perspectives on one hard decision — mandatory-dissent synthesis, CLI plus an interactive web demo that runs the real protocol.
- All 9 live_url and item-card URLs verified HTTP 200 before listing. No pricing set; license terms remain DRAFT.


All notable changes to this product. Dates in US/Eastern.

## 2026-09-23 — Agent Deck storefront expansion: 37 → 64 SKUs
- **Added 27 more registry apps to the shelf** (on top of the LANE F wave): Gear Ledger 3D World, Project Ultimate, Catalog Graph, Agent Directory, NFT Waitlist, CWI Sync / Licensing, Agent Join Funnel, Listening Room, Change Ledger, Memory Seal, Task Verdict, Quantum Playground, Placement Wall, Agent Onboarding Pack, Verification Kit, Attestation Explorer, Deploy Gate, Link Sentinel, Release Timeline, Verdict CLI, Skill Doctor Lite, Word Signal, Cover Pieces, Crown Climb, Neon Nights pt. 777, Context Hash Grants, Settlement Prover — each with its own product page, honest data-truth label, blank pricing (Black sets the price), and DRAFT licensing.
- **The Playback Chip shipped:** converted from IN THE WORKSHOP/SAMPLE to LIVE/MIXED with the deployed app URL (https://cumulativewebinc.github.io/playback-chip/) — now 64 live SKUs, 0 in the workshop.
- Counts: 64 total, 64 live, 0 workshop. All product pages keep the official CWI logo, blank pricing, and DRAFT license terms.
## 2026-09-23 — v2026.09.23 — Agent Operating System retrofit + trust infra
- **A12 Ship Week machine (2026-09-23):** `SHIP-WEEK.md` playbook at repo root; `/ship-week/` countdown/announcement page (proposed #1: 2026-10-19–23, PROPOSED label, countdown JS, per-day blog + social-thread templates, Day-5 hackathon with Booth-credit bounties, $0 cash); `ship-week/ship-week.json` (schema `cwi.ship-week/1.0`) registered in SCHEMA-VERSIONS.json; nav links on Home/Products/License. Ship Week #1 is PROPOSED — dates activate only on Black's approval.
- **Agent Operating System retrofit (2026-09-23):** CWI branding, CTA + verified try-link, machine-readable `content.json`, `.well-known/agent-card.json`.
- **A7 PR preview bot:** `.github/workflows/pr-preview.yml` builds each PR branch, deploys a live preview to `pr-previews/<PR#>/`, and posts the preview link + contract validation checklist as a PR comment (Vercel pattern).
- **A8/A9 contract CI gate:** the build now fails if `.well-known/agent-card.json` is missing or invalid (name/url required), if the `SCHEMA-VERSIONS.json` contract breaks (where the registry exists), if `content.json` is invalid, or if `CHANGELOG.md` is missing.
