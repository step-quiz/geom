# HANDOFF — cold-start briefing for the next Claude session

**To:** a cold-start Claude agent, given this file plus the `geom`
repository — the owner's GitHub repo, confirmed in sync as of this
revision (§1).

**From:** the agent that completed Part 1, Part 2, the three intro demos
(twice — first a 5-panel static redesign, then a full step-by-step
mechanism), the glossary expansion, the thematic category filter, the
2D/3D filter, and a series of UI/UX polish rounds. That agent is now out
of context (66+ artifacts across two conversations) and cannot continue.

**Read this whole file before touching anything** — it's short on purpose
now (§5 used to hold ~150 lines of prose lessons; those moved to
`LESSONS.md`, consulted by topic instead of read wholesale every time).
This file itself stays mandatory: current state, numbers, what's left,
architecture reference.

---

## 0. The one thing to verify before anything else

```bash
python3 verifica_projecte.py
```

It must print `Tot correcte.` (36 checks). If it doesn't, **stop and
report** — you've been handed a repository in an unexpected state, and
guessing why will waste more time than asking.

---

## 1. Repo sync status: confirmed clean as of this handoff

Earlier revisions of this document warned that the owner's GitHub repo
might be missing entire deliveries (Part 1's 47 images, several CSS
fixes). **That gap has since been closed and verified closed** — a
`diff -rq` between the owner's live repo and this working copy, run at
the moment of writing this revision, shows zero meaningful differences
(only files the owner deliberately removed on their own: two archival
`.py` scripts no longer needed at the repo root, and three long-obsolete
`HANDOFF-LLIURAMENT-9/10.md` / `HANDOFF-COMPLETAR-GUIES.md` files,
correctly retired once this document superseded them).

One real bug did surface and get fixed after the sync: `index.html` had
`<link rel="stylesheet" href="css/components.css"?v=2>` — the `?v=2`
cache-buster landed **outside** the `href` attribute's quotes, which is
invalid HTML. The browser silently ignored it and kept requesting the
exact same `components.css` URL as always, so no cache-busting ever
actually happened despite the owner adding the parameter — worth
knowing about as a class of bug (see `LESSONS.md` §3, which now documents the full
arc of this exact issue), not because it's still open. It's fixed
(`href="css/components.css?v=3"`).

A second, unrelated issue surfaced right after: the owner kept seeing a
brown color on the active category-filter button and reported it again
even after the above fix shipped. This was **not a leftover bug** — it
was the `.cat-filtre__toggle[aria-pressed="true"]` background color
itself, `var(--pencil)` (brown), a deliberate design choice from the
category-filter's original build that was never explicitly confirmed
with the owner. Fixed by changing it to `var(--ink)` (black), matching
the 2D/3D toggle's active-state color exactly — see `LESSONS.md` §8 for the lesson
this points to.

**Still, don't take "clean at the time of writing" on faith.** Run this
before doing anything, exactly as before — it costs nothing and this
project has been out of sync in the past for reasons worth catching
early:

```bash
# from the repo root, assuming you have both directories available
diff -rq /path/to/given-repo /path/to/this-repo --exclude=.git
```

**Do not assume the repo you're given is complete just because
`verifica_projecte.py` passes.** That script checks internal consistency
(does every question with an `imatge` field have a real file on disk,
etc.) — it does NOT check "does this repo have every delivery the owner
has ever received." A repo frozen at an earlier point in time, with
internally-consistent-but-outdated data, would still pass it cleanly.
Cross-check the numbers in §2 against what you actually see in the data
files if anything looks off.

---

## 2. What the project is, and its current real state

A static site (`file://`-only, no build step, no server) presenting 130
open-ended synthetic geometry questions from a real book ("*On
Problems...*", p. 1–193), each with a bilingual (en/ca) statement, a
4-level revealed-one-at-a-time proof guide, and increasingly rich
metadata. Full description: `README.md` (rewritten this session to match
current reality — read it, it's accurate as of this handoff).

Numbers to sanity-check against, all confirmed via direct data
inspection, not memory, at the moment of writing:

| What | Value |
|---|---|
| Questions | 130 (fixed corpus, not growing) |
| Questions with an enunciat image | 122 / 130 (67 scanned + 55 hand-drawn) |
| Questions with a full guide | 130 / 130 |
| Guides with a second image at Pista 2 | 31 / 130 |
| Glossary terms | 53, of which 26 have a figure |
| Glossary terms detected inline | inside enunciat text AND inside Pista 1-4 text (never comprovació, never i-després) |
| Thematic categories | 6 defined, 5 shown in the filter menu (aritmetica_algebra excluded, see §3) |
| Hidden questions (excluded from list view, "Anterior/Següent", and itinerary suggestions — not deleted) | 15: `q18a q18b q19 q20 q21 q24 q34 q35 q67 q83 q84 q87 q88 q102 q106` |
| 2D / 3D split | 88 / 42 |
| Intro demos | 3, each now a 6-step reveal-one-at-a-time flow (not the old "always visible" design) |

`docs/guies/NOTA-*.md` has one delivery note per round, in the repo, each
documenting exactly what changed, why, and how it was verified. **Read the
most recent few before doing anything** — they're the actual paper trail,
more reliable than this summary for any specific decision's reasoning.
Chronological list (oldest to newest):

```
NOTA-LOT-1 through NOTA-LOT-10, NOTA-FUSIO-LOT-9-10   (the 130 guides)
NOTA-IMPROVE-*                                          (visual review fixes, pre-Part-1)
NOTA-ORDRE-PRESENTACIO
NOTA-GLOSSARI-AMPLIACIO                                 (18→53 terms, no figures yet)
NOTA-PART1-ENUNCIATS, NOTA-FIX-PART1-12-FIGURES         (47 statement images)
NOTA-PART2-PISTA2, NOTA-FIX-PART2-7FIGURES              (31 Pista-2 images)
NOTA-ANALISI-CONTINGUT-P3                               (10 bridging sentences at Pista 3)
NOTA-DEMOS-REDISSENY                                    (3→5 static panels, superseded by next)
NOTA-GLOSSARI-MILLORES                                  (spacing, broken image, inline terms, 7 figures)
NOTA-DEMOS-PASSOS                                       (full reveal-one-at-a-time rewrite)
NOTA-UIUX-CAPCALERA                                     (eyebrow/lang-selector out, title change, 2D/3D toggle)
NOTA-CATEGORIES-FILTRE                                  (6-category filter, uploaded data file integrated)
NOTA-CATEGORIA-ARITMETICA-ICONES                        (whole category hidden, 5 hand-drawn icons)
NOTA-TOGGLE-DEFECTES                                    (border fix, new defaults: 2D-only, Triangles-only)
NOTA-ENUNCIATS-D                                        (8 new enunciat images, 3 more hidden instead)
```

The focus-ring fix, the `index.html` cache-buster fix, the
category-filter brown→black color fix, the README rewrite, and the
removal of the three obsolete handoffs (this session and the two
before it) were small enough not to warrant their own `NOTA-*.md` —
they're documented here and in this document's own revision history
instead.

---

## 3. What's actually left to do

Nothing is broken or blocking. These are the known, explicitly-deferred
gaps:

1. **27 of 53 glossary terms still have no figure.** `NOTA-GLOSSARI-MILLORES.md`
   documents which 26 got one this round and how (mostly reused geometry
   from existing exercise figures, redrawn ink-only per the glossary
   convention — never copy-pasted). The remaining 27 need the same
   treatment: check `docs/glossari-figures.html` for the existing pattern
   (canvases g1-g15) before drawing anything new.
2. **8 questions have no enunciat image** — down from 16 after
   `docs/guies/NOTA-ENUNCIATS-D.md` (8 of the original 16 got a real
   image; the other 3 that had no natural neutral figure — q67, q102,
   q106 — were added to `EXERCICIS_AMAGATS` instead of forcing one).
   The remaining 8 (`q21 q35 q67 q84 q87 q88 q102 q106`) are now
   EXACTLY the imageless subset of `EXERCICIS_AMAGATS` — every question
   actually reachable through the list, "Anterior/Següent", or the
   itinerary has an image. If a hidden question is ever un-hidden,
   check this table first: it may need an image before it can ship
   visible.
3. **`curs` and `interaccio` fields are `null` everywhere** — schema
   exists, no content assigned. `interaccio` in particular is not just
   "data to fill in": real interactivity (draggable points, live
   recompute) would need a completely different rendering layer than the
   static-PNG-per-figure approach used everywhere now (`docs/render.js`
   generates PNGs by design). Don't start this without the owner
   explicitly deciding to change the rendering architecture.
4. Nothing else is queued. If the owner asks for something new, it's a
   genuinely new request, not a continuation of a documented backlog.

---

## 4. Architecture quick reference

Everything loads as a plain `<script>` tag in `index.html`, in a fixed
order that matters (data files before nucli/ before ui/) — the comment
block at the top of `index.html` states the required order; don't
reorder it without checking every file's own header comment for stated
dependencies.

**Data files** (`js/data/*.js`) assign to `window.SOMETHING`. None of them
are JSON — they're JS object/array literals (unquoted keys in several of
them, e.g. `demos-dades.js`, `glossari-dades.js`), loaded via `<script>`
because `file://` blocks `fetch()` of a real `.json`. This has bitten past
sessions: **don't use a JSON-parsing regex or assume quoted keys** when
scripting an edit to these files — anchor on the literal, exact key text
instead (`grep` the real file first).

**Generated files, never hand-edited directly:**
- `js/data/preguntes-dades.js` ← originally `build_preguntes_dades.py`
  (needed a source JSON not included in the repo; the owner has since
  removed this script from the repo root as archival clutter — the
  transformation it documents is done and not being redone. If
  `preguntes-dades.js` ever needs full regeneration from scratch, this
  script's logic is only preserved in past session history, not in the
  repo). Regardless of the script's presence, the same rule holds:
  `enunciat.ca`, `pista.*`, `notaEditorial.*`, and the Part-1 `imatge`
  fields are hand-edited directly in the `.js` after generation — never
  regenerate and overwrite without merging these back first.
- `js/data/guies-dades.js` ← `python3 parse_guies.py`, reading
  `docs/guies/GUIES-LOT-N.md`. Edit the `.md`, never the generated `.js`.
  This script IS still at the repo root and in active use.

**Figure pipeline**, used identically for every image on the site
(enunciat images, guide hints, glossary figures, demo panels, category
icons — same tools, same discipline, every time):

1. Source is a `docs/*.html` file (or `docs/guies/figures-NN.html`,
   `docs/guies/figures-enunciats-*.html`, `docs/guies/figures-part2-*.html`)
   loading `docs/hand-draw.js` (the hand-drawn rendering engine) +
   `docs/comu.js` (shared helpers: `mk`, `lbl`, `tick`, `rightAngle`,
   `angleMark`, `regularPoly`, etc.).
2. `node docs/render.js path/to/source.html /tmp/output-dir` renders every
   `<canvas>` in the file to a PNG.
3. **Always render both a "stamped" and a "clean" variant** — the stamped
   one has a production-only page-number stamp (`stampNum`) drawn in the
   corner; `publish_figures.py`'s `erase_stamp_by_diff()` diffs the two to
   surgically remove just the stamp pixels, then `whiten_background()`
   makes the background pure white (so `mix-blend-mode: multiply` in CSS
   makes it disappear against the page's cream background).
4. Copy the published PNG to the right `assets/img/*` subfolder.
5. **Always visually review the rendered PNG before publishing** — not
   just "did it render without a JS error." Real bugs this project has
   repeatedly caught only by looking: incidence bugs (`LESSONS.md` §9),
   "notation that lies" (a marked right-angle or equal-length tick that
   isn't actually true — verify numerically, e.g. dot product for
   perpendicularity, before trusting a figure with a geometric claim),
   figures clipped by canvas margins, labels colliding with geometry,
   wobble/irregularity values tuned for large figures looking wrong at
   small icon scale (`LESSONS.md` §1).
6. After publishing, **pixel-diff every figure you touched against what
   was already shipped**, and confirm every figure you did NOT mean to
   touch in the same source file is byte-identical to before. This has
   caught real accidental regressions multiple times.

**The `ink`/`sanguina` (tinta/sanguina) convention**, load-bearing across
the whole project: in guide figures, black ink = what the book's figure
already showed; the reddish "sanguina" color = what that specific hint
adds. This is not decorative — it's the pedagogical point made visual
(the book's figure is a given; the added line is a decision). Two
exceptions, both deliberate: enunciat images (Part 1) are ink-only (no
"added by a hint" concept applies to a bare statement); glossary figures
are also ink-only (single diagram, no given/added distinction), with a
`--pencil`-colored text accent marking term names instead.

**`js/ui/llista.js`** is the most complex UI file after this session's
work — it now owns: the base question list, URL-based filters
(`view.filtres`, from `#curs=2ESO`-style hashes), the 2D/3D toggle
(separate state, `localStorage`-persisted, mutual-exclusion invariant:
never both off), the category filter (separate state, different
invariant: empty selection means "all"), and the hidden-exercises
exclusion list. Read its own header comment block before editing —
it explains why each piece of state is deliberately kept separate from
the others.

---

## 5. Hard-won lessons — read `LESSONS.md` when relevant, not all of it every time

This section used to be ~150 lines of prose, all mandatory reading before
touching anything. It's been extracted to `LESSONS.md` (repo root),
organized by topic (drawing, `localStorage`, CSS specificity, delivery
mechanics, UI reuse, Catalan prose, testing, unconfirmed design choices,
hand-drawn incidence) — **read only the section that matches what you're
about to do**, not the whole file, the same way you wouldn't re-read this
entire HANDOFF before every single edit. If you're about to draw a new
figure, read `LESSONS.md` §1 and §9. If you're touching `localStorage`,
read §2. And so on — the section headers in `LESSONS.md` name exactly
which situation each one applies to.

## 6. Before you ship anything

1. `python3 verifica_projecte.py` → must say `Tot correcte.`
2. A Playwright regression across all 130 guides (reveal all 4 hints,
   confirm images load, confirm footer visible) is the standard bar —
   every past delivery has run this before shipping. Write it fresh;
   there's no saved script to reuse verbatim (viewport sizes, wait times,
   and exact selectors have all shifted slightly release to release).
3. Build the delivery as a diff ZIP against whatever repo state you
   started from, verify it by applying it to a fresh copy and diffing
   against your working directory (must be empty diff, modulo any files
   your delivery note says to delete manually).
4. Write a `docs/guies/NOTA-<name-of-the-change>.md` delivery note in the
   same style as the existing ones — what changed, why, what you found
   and fixed during your own review (not just "I did the task"), how you
   verified it.
