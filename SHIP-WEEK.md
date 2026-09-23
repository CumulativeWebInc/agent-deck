# SHIP WEEK — the playbook

**Owner:** Cumulative Web Inc · Agent Deck · **v1.0 (2026-09-23)** · status: the machine exists; Ship Week #1 is **PROPOSED**, not scheduled.

Ship Week is CWI's quarterly launch ritual — the Supabase Launch Week pattern, run on our own stack: 5 days, one shipped feature per day, a countdown page, one blog post + one social thread per day, and a hackathon on Agent Deck templates with **Booth-credit bounties ($0 cash, always)**.

Format reference: the Launch Week format itself is open source ([launchweek.dev](https://launchweek.dev)); what follows is CWI's own machine.

---

## 1. The cadence (every quarter)

| Slot | What | Owner | Receipt |
|---|---|---|---|
| T-14d | Pick the 5 features from the backlog; freeze the list | KingCode | frozen list in `ship-week.json` |
| T-7d | Countdown page flips to the proposed dates; announcement thread posted | CWI_Studio | page live, thread live |
| T-3d | Bounty judges named; judging criteria published | KingCode | named in `ship-week.json` |
| T-0 | **Black's approval gate.** No Ship Week ships without his explicit exact-word approval of the dates + feature list. Unapproved = page stays PROPOSED. | Black | approval receipt |
| Day 1–4 | One feature ships per day: feature live → blog post → social thread → compliance check | assigned builder | 4 × (live URL, post, thread) |
| Day 5 | Hackathon day on Agent Deck templates; bounties receipted to winners same day | CWI_Studio | submissions list + bounty receipts |
| Day 6 | Retro: measurements vs kill rule; next Ship Week rework or green-light | KingCode | retro posted |

## 2. Day runbook (days 1–4)

1. **Ship the feature** — live at its URL, HTTP 200, CTA + working try-link (the standing publishing rule: no page ships without both).
2. **Publish the blog post** — template §3. Must include: what shipped, the receipt (live URL), what it costs ($0 paths named), what is NOT promised.
3. **Post the social thread** — template §4. Ends in the standing CTA + verified try-link.
4. **Compliance check** — the builder posts the day receipt to the ledger: live URL + verification evidence. The verifier (never the builder) confirms independently.

## 3. Blog post template

```markdown
# Ship Week Day N: <feature name> — <one-line pitch>

**What shipped:** <2 sentences, plain words>
**Try it:** <live URL> (verified HTTP 200 at <timestamp ET>)
**What it costs:** <the $0 path; if a paid step exists: price, who set it, when>
**What it is NOT:** <the honest boundary — e.g. "settlement is manual, not automatic">
**Data truth:** <LIVE facts | SAMPLE data — never mixed>
**Kill rule for this feature:** <the numeric line that kills it>
```

## 4. Social thread template

```
🧵 Day N of #CWIShipWeek: <one-line pitch>.

• What it does: <plain words>
• Try it: <live URL>  ← verified live
• Costs: <$0 path or the approved price>
• What it isn't: <honest boundary>

Full post: <blog URL>
```

## 5. Hackathon day (day 5)

- **Format:** build the best template on Agent Deck templates (or remix a Ship Week feature). 8-hour sprint.
- **Bounties — Booth credits only, $0 cash:**
  - 1st: 500 Booth credits · 2nd: 250 · 3rd: 100 · Honorable mention ×5: 50 each
- **Honesty:** Booth credits are manually settled and have no cash value until pricing launches — never presented as cash equivalents. Every bounty is receipted to the winner the same day.
- **Judging criteria (published at T-3d):** works on a real Agent Deck template · README pitch (Supabase-style) · honest data-truth label (SAMPLE never silently LIVE) · $0 to run.
- **Kill rule (the whole Ship Week):** <50 external template submissions OR <5 new agent adopters → rework the format, don't repeat it.

## 6. Measurement (per Ship Week)

- 5 features shipped with receipts (live URLs, HTTP 200)
- 5 blog posts published + 5 social threads posted (all with CTA + verified try-link)
- External template submissions count; new agent adopters count (ledger-verified equips)
- Bounty receipts posted (winner, credits, timestamp)

## 7. Governance

- **PROPOSED ≠ SCHEDULED.** The countdown page and `ship-week.json` carry `"status": "proposed"` until Black approves the exact dates + feature list. The page flips to SCHEDULED only with his approval receipt.
- **Builder ≠ verifier.** No one verifies their own day.
- **$0 cash, no spending, no wallet signing.** Carve-outs unchanged: nothing under Black's personal name; no external contact in his name without his exact-copy approval.

---

## Appendix A — Ship Week #1 proposal (staged, pending Black's approval)

Full proposal staged at: `~/workspace/operation-industry-level/evidence/ship-week-01-proposal.md`
(internal workspace; not published until approved).

- **Proposed dates:** Mon 2026-10-19 → Fri 2026-10-23 (09:00 ET starts)
- **Candidate features (drawn from the A13–A16 backlog + open lanes):**
  1. Day 1 — Booth sandbox/test mode (A1)
  2. Day 2 — Booth credit-pool pricing page, pricing-as-spec (A2)
  3. Day 3 — Free lead magnets: single-track analysis + x402 call allowance (A15)
  4. Day 4 — HyperFollow universal release pages, one machine-readable page per track (A14)
  5. Day 5 — Hackathon day: Agent Deck template bounty sprint (Booth-credit bounties)
- **Bounty structure:** 1st 500 / 2nd 250 / 3rd 100 / honorable-mention ×5 50 Booth credits; $0 cash; receipted same day.
- This proposal is for **Black's awareness — not silently scheduled.** The countdown page counts to the proposed dates labeled as such; if he moves or kills it, the page updates within 24h.
