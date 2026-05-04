# Alternative Directions
> Phase: critique · Project: landing · 2026-05-02

Two genuinely different redesign approaches, surfaced for the team's consideration. Neither is recommended over the current direction — both are documented to make the current choice's trade-offs visible. Each carries a name, a description, and the trade-offs against the current design.

---

## Direction A — "Manifesto in monospace"

### Concept
Drop the dual-front composition. The entire page renders in the **Terminal** front (`data-front="terminal"`) — Bloomberg amber-on-deep-obsidian, JetBrains Mono everywhere, scanline texture at 2.5%. The hero is a faux operator session: the guiding line types in as if from a live shell, the gap section reads as a `cat brokenness.log`, the vision arc is `tail -f horizon.txt`, the captures are `read -p "email: "` prompts. Geist Bold appears only on the section "command" prompts (`$ tga --hero`).

### What changes
- One front, not three. No `data-front` switching in the body. No light Imobiliárias section. The dark→light→dark fold disappears.
- Two amber rules at sections 5→6 and 6→7 are deleted (no fold to mark). The bifurcation is two `[ Y/n ]` style prompts.
- Lucas's section disappears as a light surface — instead, a Mono-rendered "imobiliária" prompt where his copy appears as an output block in `var(--color-text-2)` with the form at the bottom.
- The team section becomes `whoami` output. Founders are `0001 — draau` and `0002 — jubs` ASCII rows.
- The footer is the existing footer — already Mono-everything, so nearly unchanged.

### Trade-offs
**For:** Maximum brand-voice compression. The Terminal is TGA's purest aesthetic — operator-layer authority. Ana would love this; Maple Finance, Goldsky, and other operator-grade infra brands already run terminal-aesthetic landing pages and they signal seriousness instantly.

**Against:** Lucas (proprietário) is alienated. The Terminal aesthetic crosses the brand's own constraint that *"blockchain jargon in proprietário copy"* is forbidden — the format itself becomes the jargon. Lucas leaves in 5 seconds. The current design intentionally splits aesthetics per persona; this direction collapses both into Ana's. The brief calls Lucas a P0 audience; this direction effectively demotes him to P2.

**When this direction would win:** if the team decided to launch a separate proprietário-only page (`/proprietario`) and let `/` be Ana-only. The brief explicitly forbids that ("one URL, one scroll, one brand contract"), so this direction is ruled out by the brief.

---

## Direction B — "Asymmetric fold, photographic warmth"

### Concept
Keep the dual-front composition, but commit harder to the warmth half. Section 06 (proprietário capture) becomes a real photographic surface: a single editorial-grade photo of a São Paulo / Curitiba / Porto Alegre apartment occupies the right half (cols 7–12 on lg+), and the heading + three sentences + form sit on the left half over the warm canvas. The photo is grayscale + 1.1 contrast (per `imagery-style.md § Warm Photography`), tightly cropped to a domestic interior detail (open window, kitchen counter, a hand resting on a contract, a coffee cup beside a notebook). The amber rule at the section top still owns the fold; the photo carries the affective weight of the warmth.

### What changes
- Section 06 grid restructures: heading + 3 sentences + form in cols 1–6 (not 1–5 as current), photo in cols 7–12 (full-bleed to section edge on lg+, square 1:1 on md, hidden below md to preserve mobile reading flow).
- Section 08 (team) drops the asymmetric 7/5 split and uses a 50/50 grid — the team section's asymmetry is now redundant with section 06's.
- Investidor capture (section 07) stays unchanged — Ana doesn't need photography (per brand contract).
- Vision arc gets one additional restraint: the 1px amber rule on lg+ extends past the four phases to terminate at the section's outer right edge, signaling continuation beyond the four named phases (the open horizon).

### Trade-offs
**For:** The dark→light handoff at the proprietário-capture section becomes the page's visual climax — the warmth lands in a way that pure typography can't. Lucas's emotional read is dramatically warmer; he sees a real apartment, not an abstract canvas. The brand's *"photography as warmth"* doctrine on the Imobiliárias front (per `imagery-style.md § Front 2`) gets honored on the landing, not just deferred to the dashboard. The `referencia visual/` mood board includes apartment imagery — this direction would activate that.

**Against:** Photography availability is a hard dependency. The brief says photo costs and quality control are real risks. If the photo is mediocre, the entire warmth play collapses (worse than no photo). The current design's choice to defer photography is partly a risk hedge — *"don't ship in-between."* Direction B re-imports that risk. Also: the brand's own anti-pattern list (`imagery-style.md § Anti-patterns`) explicitly prohibits "stock photography people," so any photo must be commissioned, not licensed — adds budget, time, and approval cycles.

**When this direction would win:** if the team has access to a Brazilian photographer (or a founder with a serious camera) and can commission a single 30-min editorial shoot before build. If yes, Direction B is materially stronger than the current design. If no, current design is correct.

---

## Recommendation

Stay on the current direction. It is structurally sound, brand-faithful, and ships without external dependencies. Direction A trades Lucas for a tighter aesthetic — unacceptable per brief. Direction B trades risk for emotional warmth — acceptable only if photography is locked. Both alternative directions exist on the table; neither displaces the current path.

If the team wants a single delta improvement on the current design, take **Direction B's amber-rule-extension move on the vision arc** as an isolated edit. The 1px amber line terminating past the fourth phase reads as "the horizon continues" — a tiny gesture that strengthens the page's "horizon, not roadmap" positioning. Low cost, low risk, takes nothing away. Worth a build-time consideration.

## Related
- [critique.md](./critique.md)
- [strengths.md](./strengths.md)
- [prioritized-fixes.md](./prioritized-fixes.md)
- Brand: `.design/branding/tga/identity/imagery-style.md`
